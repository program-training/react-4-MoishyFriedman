import { userContext } from "../../context/userContext";
import { useContext, useState } from "react";
import "./mainStyle.css";

export default function Main(): JSX.Element | null {
  const [mode, setMode] = useState<Boolean>(false);
  const context = useContext(userContext);
  if (!context) return null;
  const { user } = context;
  if (!user) return null;

  return (
    <div id="main">
      <p key={user[0].id}>{user[0].name}</p>

      <button onClick={() => setMode(!mode)}>more details</button>
      {mode && (
        <div id="details">
          <h3>email: {user[0].email}</h3>
          <h3 id="phone">phone: {user[0].phone}</h3>
        </div>
      )}
    </div>
  );
}
