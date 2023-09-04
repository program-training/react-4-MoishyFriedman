import { modeContext } from "../../context/themeContext";
import { useContext } from "react";
import "./textStyle.css";

export default function Text(): JSX.Element | null {
  const context = useContext(modeContext);
  if (!context) return null;
  const { mode } = context;
  return (
    <div id={mode}>
      <h1>title</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
        eveniet, neque cupiditate deserunt harum repellendus nihil quibusdam
        corrupti optio eaque provident at maiores aperiam enim unde natus amet
        deleniti? Nostrum?
      </p>
    </div>
  );
}
