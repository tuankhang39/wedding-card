import { Link } from "react-router-dom";
import config from "../../config/envConfig";

const Header = () => {
  return (
    <header
      style={{
        backgroundColor: "#f5f5f5",
        borderBottom: "1px solid #ddd",
      }}
    >
      <nav className="flex gap-4 items-center text-white bg-[#990000] font-ephesis">
        <img src={`${config.BASE_PATH}logo.png`} className="w-[80px]" />
        <Link to="/">Trang chủ</Link>
        <Link to="/template">Mẫu</Link>
      </nav>
    </header>
  );
};

export default Header;
