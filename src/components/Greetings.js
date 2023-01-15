const Greetings = (props) => {

    if (props.lang === "en") {
        return (
            <div>
            <p>Hello {props.children} </p>
            </div>
        )
    } else if (props.lang === "es") {
        return (
        <div>
            <p>Hola {props.children} </p>
        </div>
        )

    } else if (props.lang === "de") {
        return (
        <div>
            <p>Hallo {props.children} </p>
        </div> 
        )

    } else if (props.lang === "fr") {
        return (
            <div>
                <p>Bonjour {props.children} </p>
            </div>
        )
    } else {
        return "This language don't exist"
    }      
    }
    

export default Greetings;
