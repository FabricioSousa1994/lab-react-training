const CreditCard = (props) => {
  return (
    <div
      style={{ backgroundColor: `${props.bgColor}`, color: `${props.color}` }}
    >
      <p> type: {props.type}</p>
      <p>**** **** **** {props.number.substring(12)}</p>
      <p> expirationMonth: {props.expirationMonth}</p>
      <p> expirationYear: {props.expirationYear}</p>
      <p> bank: {props.bank}</p>
      <p> owner: {props.owner}</p>
    </div>
  );
};
export default CreditCard;
