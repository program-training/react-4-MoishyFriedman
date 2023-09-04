import { Child } from "../Child/child";
import { useContext, useRef } from "react";
import { textContext } from "../../context/textContext";

export function Father() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const context = useContext(textContext);
  if (!context) return null;
  const { setString } = context;
  return (
    <>
      <Child />
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
    </>
  );
}
