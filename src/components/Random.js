const Random = (props) => {
  const randomNumber = Math.floor(
    Math.random() * (props.max - props.min) + props.min
  );
  return (
    <p>
      min: {props.min} - max: {props.max} = {randomNumber}
    </p>
  );
};

export default Random;
