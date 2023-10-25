export default function Dice(props) {
  console.log(props.diceNum);

  return (
    <div className="border border-solid border-white p-3 m-3">
      {props.diceNum}
    </div>
  );
}
