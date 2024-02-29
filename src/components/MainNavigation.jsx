import { Link } from "react-router-dom";
import './MainNavigation.css';

function MainNavigation() {
  return (
    <header>
      <Link to="/">
        <div className="header">써브웨이 랜덤 디펜스</div>
      </Link>
      <div className="info">
        <Link to="/mypage">
          <button>My Page</button>
        </Link>
        <Link to="/login">
          <button>Login/Register</button>
        </Link>
      </div>
    </header>
  );
}

export default MainNavigation;
