import { useState } from "react";
import { useEffect } from "react";
import { Link } from 'react-router-dom';

const Nosotros = () => {
  const [equipo, setEquipo] = useState([]);

  useEffect(() => {
    // console.log('useEffect');
    obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    try {
      const data = await fetch(
        "https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations"
      );
      const users = await data.json();
      setEquipo(users.civilizations);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Nosotros</h1>
      <ul>
        {equipo.map((item) => (
          <li key={item.id}>
              <Link to={`/nosotros/${item.id}`} style={{ textDecoration: 'none' }}>
          
              {item.name} - {item.expansion}
            
              </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Nosotros;
