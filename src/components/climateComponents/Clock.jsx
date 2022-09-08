import { ArrayFecha, Day, Month } from "../componentsJs/fecha";
import "../../assets/css/styles.css"

const Clock = ({time}) => {

  return (
    <div className="Clock">
      <h2 className="Clock-fecha">{Day()}, {Month()} {ArrayFecha[1]}, {ArrayFecha[2]}</h2>
      <h3 className="Clock-hora">{time}</h3>
    </div>
  );
}

export default Clock