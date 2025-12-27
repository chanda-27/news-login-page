import { format } from "date-fns";
import logo from "../assets/logo.png";
const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-3">
      <img className="w-100 mt-4" src={logo} alt="Logo" />
      <p className="text-accent">Journalism Without Fear or Favour</p>
      <p className=" text-accent semi-bold">{format(new Date(), "EEEE , MMMM MM , yyyy")}</p>
    </div>
  );
};

export default Header;
