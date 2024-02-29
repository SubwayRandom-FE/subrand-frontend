import { Link } from "react-router-dom";

import './Services/Services.css';

function HomePage() {
  return (
    <>
      <main>
        <Link to="/roulette">
          <button>뽑기</button>
        </Link>
        <Link to="/review">
          <button>리뷰</button>
        </Link>
        <Link to="/custom">
          <button>커스텀</button>
        </Link>
      </main>
    </>
  );
}

export default HomePage;
