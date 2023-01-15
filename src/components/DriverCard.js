import Rating from './Rating';

const DriverCard = (props) => {
  return (
    <div>
      <p>name: {props.name}</p>
      <Rating>{props.rating}</Rating>
      <img style={{ height: '150px' }} src={props.img} />
      <p>car {props.car.model}</p>
      <p>car {props.car.licensePlate}</p>
    </div>
  );
};
export default DriverCard;
