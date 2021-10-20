import React, {useState} from 'react'
import Webcam from "react-webcam";
import {Button} from "antd";

const Camera = () => {
    const [imgSrc, setImgSrc] = useState(null)
    const webcamRef = React.useRef(null);

    const capture = React.useCallback(
        () => {
            const imageSrc = webcamRef.current.getScreenshot();
            setImgSrc(imageSrc)
        },
        [webcamRef]
    );

    return (
        <div>
            <Webcam ref={webcamRef} screenshotFormat="image/jpeg"/>
            <Button onClick={capture}>Capture photo</Button>
            <img src={imgSrc} alt=""/>
        </div>
    )
}
export default Camera
