import React, { useState } from 'react';


const Carousel = ({ images }) => {
    const [currentImage, setCurrentImage] = useState(0);

    const handleLeftClick = () => {
        setCurrentImage((currentImage + images.length - 1) % images.length);
    }

    const handleRightClick = () => {
        setCurrentImage((currentImage + 1) % images.length);
    }

    return (
        <div>
            <img src={images[currentImage]} alt={currentImage} />
            <button onClick={handleLeftClick}>Left</button>
            <button onClick={handleRightClick}>Right</button>
        </div>
    );
}

export default Carousel;
