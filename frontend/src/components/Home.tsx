import { removeToken } from "./Auth";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import getSets from "../services/api";

function Home() {
  let navigate = useNavigate();
  const handleSignOut = async (e: any) => {
    e.preventDefault();
    removeToken();
    navigate("/login");
  };
  const [inventorySets, setInventorySets] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token"); // Replace with your actual JWT token

      try {
        const data = await getSets(token);
        setInventorySets(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <button onClick={handleSignOut}>Sign Out</button>
      <ul>
        {inventorySets.map((set: any) => (
          <li key={set.set_num}>{set.name}</li> // Adjust based on your data structure
        ))}
      </ul>
    </div>
  );
}

export default Home;
