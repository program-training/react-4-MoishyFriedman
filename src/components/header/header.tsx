import { userContext } from "../../context/userContext";
import { useContext } from "react";
import { ThemeSwitcher } from "../ThemeSwitcher/themeSwitcher";
import "./headerStyle.css";

export default function Header(): JSX.Element | null {
  const context = useContext(userContext);
  if (!context) return null;
  const { user } = context;
  if (!user) return null;

  return (
    <div id="header">
      <p>{user[0].username}</p>
      <ThemeSwitcher />
    </div>
  );
}
