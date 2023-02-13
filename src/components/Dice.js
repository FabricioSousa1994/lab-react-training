import { useState } from "react";


function Dice({images, empty}) {

    console.log(images,empty)

    const [random, setRandom] = useState(empty) 

    function insertRandom() {
        if (random === empty) {
            const imageRandom =
              images[Math.floor(Math.random() * images.length)];
            return setRandom(imageRandom);
          } else {
            return setRandom(empty);
          }
    }
    
        return (
            <img onClick={insertRandom} src={random} alt={random}/>
        );
}


export default Dice;
