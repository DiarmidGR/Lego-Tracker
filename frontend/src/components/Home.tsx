import { removeToken } from "./Auth";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import getSets from "../services/api";
import SetsGrid from "./SetsGrid";

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
      const token = localStorage.getItem("token");

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
    <>
      {/* <button onClick={handleSignOut}>Sign Out</button> */}
      <SetsGrid items={inventorySets}></SetsGrid>
    </>
  );
}

export default Home;
