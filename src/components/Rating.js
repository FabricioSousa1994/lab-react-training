const Rating = (props) => {
  if (props.children <= 0.49) {
    return <p>☆☆☆☆☆</p>;
  } else if (props.children >= 0.5 && props.children <= 1.49) {
    return <p>★☆☆☆☆</p>;
  } else if (props.children >= 1.5 && props.children <= 2.49) {
    return <p>★★☆☆☆</p>;
  } else if (props.children >= 2.5 && props.children <= 3.49) {
    return <p>★★★☆☆</p>;
  } else if (props.children >= 3.5 && props.children <= 4.49) {
    return <p>★★★★☆</p>;
  } else if (props.children >= 4.5) {
    return <p>★★★★★</p>;
  }
};

export default Rating;
