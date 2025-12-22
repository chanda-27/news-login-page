import logo from "../assets/logo.png";
const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-3">
      <img className="w-80 mt-4" src={logo} alt="Logo" />
      <p>Journalism Without Fear or Favour</p>
    </div>
  );
};

export default Header;
