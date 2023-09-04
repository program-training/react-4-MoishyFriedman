import { useContext } from "react";
import { textContext } from "../../context/textContext";

export function Child() {
  const context = useContext(textContext);
  if (!context) return null;
  const { string } = context;
  return (
    <div>
      <p>{string}</p>
    </div>
  );
}
