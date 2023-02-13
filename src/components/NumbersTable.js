function NumbersTable({limit}) {

  const numbers = Array.from({ length: limit }, (_, i) => i + 1);

  return (
    <div>
        
    <table>
      <tbody style={{display: "flex"}}>
    {numbers.map((number) => (
        <tr key={number}>
          <td style={{ color: number % 2 === 0 ? 'red' : 'black' }}>
              {number}
          </td>
        </tr>
        ))}
      </tbody>
    </table>

    </div>
  )
}

export default NumbersTable