

const SingleColorPicker = ({ color, value, onChange }) => (
  <div>
    <label htmlFor={color}>{color.toUpperCase()}:</label>
    <input
      type="number"
      id={color}
      value={value}
      onChange={e => onChange(e.target.value)}
      min={0}
      max={255}
    />
  </div>
);

export default SingleColorPicker