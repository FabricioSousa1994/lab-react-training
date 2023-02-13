import { useState } from 'react';

const ClickablePicture = () => {
  const [imgIndex, setImgIndex] = useState('/maxence.png');

  const handleClick = () => {
    setImgIndex('/maxence-glasses.png');
  };

  return <img src={imgIndex} onClick={handleClick} />;
};

export default ClickablePicture;
