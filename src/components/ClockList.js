import Clock from "./Clock";

export default function ClockList({ quantities = [] }) {

    // {console.log(Clock)}

  return (

    <div>
      {quantities.map((key) => {
        // <span>{key}</span>
       { return <Clock key={key}/>}
      })}
    </div>
  );
}
