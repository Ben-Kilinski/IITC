import { Outlet } from "react-router-dom";

// Components
import PoksContainer from "../components/PoksContainer";

const PokemonPage = () => {
  return (
    <>
      <Outlet />
      <img src="http://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/269px-International_Pok%C3%A9mon_logo.svg.png" alt="Pokemon logo" />
      <PoksContainer />
    </>
  );
};

export default PokemonPage