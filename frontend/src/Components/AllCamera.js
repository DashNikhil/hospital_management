import React from "react";
import { useRef, useState } from "react";
import Webcam from "react-webcam";
import { useCallback } from "react";

const CustomWebcam = ({ Continue }) => {
  const webcamRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);

  const retake = () => {
    setImgSrc(null);
  };

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef]);

  return (
    <div className="container">
      {imgSrc ? (
        <img src={imgSrc} alt="webcam" />
      ) : (
        <Webcam
          height={300}
          width={300}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          screenshotQuality={0.9}
        />
      )}
      <div className="btn-container">
        {imgSrc ? (
          <>
            <button onClick={retake} className="btn ">
              Retake
            </button>
            <button
              onClick={Continue}
              className="btn "
              style={{ margin: "10px" }}
            >
              Continue
            </button>
          </>
        ) : (
          <button onClick={capture} className="btn ">
            Capture
          </button>
        )}
      </div>
    </div>
  );
};

export default CustomWebcam;
