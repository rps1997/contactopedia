import logo from "../../images/react.png"

const Header = () => {
  return (
    <div style={{borderBottom: "1px solid"}}>
      <img src={logo} style={{height: "35px", verticalAlign:"top"}}/>
      <span className="h2 pt-4 m-2">CountOPedia</span>
    </div>
  );
};
export default Header;
