// require("./db/config");
const express = require("express");
const cors = require("cors");
const registrationSchema = require("./db/registration");
const mongoose = require("mongoose");
const app = express();
app.use(cors());

app.use(express.json());

const DB =
  "mongodb+srv://nkkushwaha8948:z1N6ZB1NwIPTr43P@cluster0.rmsbrdz.mongodb.net/hospitals?retryWrites=true&w=majority";
mongoose
  .connect(DB)
  .then(() => {
    console.log("Connection successful");
  })
  .catch(() => {
    console.log("Bad connection");
  });

function Check(value) {
  for (let key in value) {
    if (value[key] === "") return false;
  }
  return true;
}

app.post("/signup", async (req, res) => {
  if (Check(req.body)) {
    let user = new registrationSchema(req.body);
    let result = await user.save();
    result = result.toObject();
    delete result.pass;
    delete result.address;
    delete result.city;
    delete result.date;
    delete result.ambulance;
    delete result.em_ward;
    delete result.phone;
    delete result.pincode;
    delete result.state;
    delete result._id;
    res.send({ result });
  } else {
    res.send({ result: "Please fill all the fields" });
  }
});

app.get("/", (req, res) => {
  res.send("Welcome to hospital");
});

app.post("/login", async (req, res) => {
  if (req.body.name && req.body.email && req.body.pass) {
    let user = await registrationSchema.findOne(req.body).select("-pass");
    if (user) {
      user = user.toObject();
      res.send({ result: user });
    } else {
      res.send({ result: "No data found" });
    }
  } else {
    res.send({ result: "Please fill all the fields" });
  }
});

app.get("/hospitals", async (req, resp) => {
  let products = await registrationSchema.find();
  if (products.length > 0) {
    resp.send(products);
  } else {
    resp.send({ result: "No user found" });
  }
});

app.get("/search/:key", async (req, res) => {
  try {
    let result = await registrationSchema.find({
      $or: [
        { name: { $regex: req.params.key } },
        { email: { $regex: req.params.key } },
        { pincode: { $regex: req.params.key } },
        { phone: { $regex: req.params.key } },
        { date: { $regex: req.params.key } },
        { state: { $regex: req.params.key } },
      ],
    });
    res.send(result);
  } catch (error) {
    res.send(error);
  }
});

app.listen(5000, () => {
  console.log("Port is listening on 5000");
});
