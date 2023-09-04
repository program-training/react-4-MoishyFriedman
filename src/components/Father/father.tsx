import { Child } from "../Child/child";
import { useContext, useRef } from "react";
import { textContext } from "../../context/textContext";

export function Father(): JSX.Element {
  const inputRef = useRef<HTMLInputElement>(null);
  const context = useContext(textContext);
  if (!context) return null;
  const { setString } = context;
  return (
    <>
      <input type="string" ref={inputRef}></input>
      <button
        onClick={() => {
          if (inputRef.current) {
            setString(inputRef.current.value);
          }
        }}
      >
        change string
      </button>
      <Child />
    </>
  );
}
