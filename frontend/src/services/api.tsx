import axios from "axios";

const API_URL = "http://localhost:3001/api/lego/sets"; // Adjust the URL as needed

const getSets = async (token: any) => {
  try {
    const response = await axios.get(API_URL, {
      headers: {
        Authorization: token,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching sets:", error);
    throw error;
  }
};

export default getSets;
