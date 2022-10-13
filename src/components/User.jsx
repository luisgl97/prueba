import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const User = () => {
  const { id } = useParams();

  const [pueblo, setPueblo] = useState([]);

  useEffect(() => {
    // console.log('useEffect');
    const obtenerDatos = async () => {
        try {
          const data = await fetch(
            `https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/${id}`
          );
          const users = await data.json();
          setPueblo(users);
        } catch (error) {
          console.log(error);
        }
      };
    obtenerDatos();
  }, [id]);

  return (
    <div>
      <h3>{pueblo.name}</h3>
      <p>{pueblo.team_bonus}</p>
    </div>
  );
};

export default User;
