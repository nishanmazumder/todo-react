import Clock from "./Clock";

export default function ClockList({ quantities = [] }) {
  return (

    <div>
      {quantities.map((key) => {
        // <span>{key}</span>
       { return <Clock key={key}/>}
      })}
    </div>
  );
}
