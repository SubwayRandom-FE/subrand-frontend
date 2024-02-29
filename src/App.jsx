import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/Home.jsx";
import RoulettePage from "./pages/Services/Roulette.jsx";
import ReviewPage from "./pages/Services/Review.jsx";
import CustomPage from "./pages/Services/Custom.jsx";
import MyPage from "./pages/MyPage.jsx";
import LoginPage from "./pages/Login.jsx";
import RootLayout from "./pages/Layout/Root.jsx";
import ErrorPage from "./pages/Error.jsx";
import MixPage from "./pages/MyPageContent/Mix.jsx";
import LikesPage from "./pages/MyPageContent/Likes.jsx";
import MyReviewPage from "./pages/MyPageContent/MyReview.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/roulette", element: <RoulettePage /> },
      { path: "/review", element: <ReviewPage /> },
      { path: "/custom", element: <CustomPage /> },
      { path: "/mypage", element: <MyPage /> },
      { path: "/login", element: <LoginPage /> },
    ],
  },
  {
    path: "/mypage",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/mypage", element: <MyPage /> },
      { path: "/mypage/mix", element: <MixPage /> },
      { path: "/mypage/review", element: <MyReviewPage /> },
      { path: "/mypage/likes", element: <LikesPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
