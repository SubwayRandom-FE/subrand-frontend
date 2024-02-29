import { Link } from "react-router-dom";

function MyPage() {
  return (
    <div>
      <Link to="/mypage/mix">
        <button>먹어본 조합 / 만든 조합</button>
      </Link>
      <Link to="/mypage/review">
        <button>내가 쓴 리뷰</button>
      </Link>
      <Link to="/mypage/likes">
        <button>Likes</button>
      </Link>
    </div>
  );
}

export default MyPage;
