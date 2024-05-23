import { removeToken } from "./Auth";
import { Navigate, useNavigate } from "react-router-dom";

function Home() {
  let navigate = useNavigate();
  const handleSignOut = async (e: any) => {
    e.preventDefault();
    removeToken();
    navigate("/login");
  };
  return (
    <div>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
}

export default Home;
