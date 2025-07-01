import { MaterialSymbolsAccountCircle, SolarHamburgerMenuOutline } from "../../assets/icons/SolarIcons";

const Header = () => {
  return (
    <div className="grid grid-flow-col">
      <div className="flex">
        <SolarHamburgerMenuOutline/>
         <img src=""/>
      </div>
      <div>
       <input type="text"/>
       <button>Search</button>
      </div>
      <div>
        <MaterialSymbolsAccountCircle/>
      </div>
    </div>
  )


};

export default Header;
