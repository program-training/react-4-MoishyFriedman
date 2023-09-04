import { modeContext } from "../../context/themeContext";
import { useContext, useState } from "react";

export function ThemeSwitcher(): JSX.Element | null {
  const [state, setState] = useState<Boolean>(true);
  const context = useContext(modeContext);
  if (!context) return null;
  const { setMode } = context;

  return (
    <>
      <button
        onClick={() => {
          setState(!state);
          state ? setMode("light") : setMode("dark");
        }}
      >
        change mode
      </button>
    </>
  );
}
