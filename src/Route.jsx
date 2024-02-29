import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { MainPage } from "./pages";
import { Header } from "./components";

function NotFound() {
  return <Link to="..">돌아가!!</Link>;
};

function AboutPage() {
  return <>about</>;
};

function PicturePage({ data }) {
  return (
    <>
      <h1>data = {data}</h1>
      Picture
    </>
  );
};

function Router() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<MainPage />} />
          {/* <Route path="/*" element={<NotFound />} /> */}
          <Route path="/about" element={<AboutPage />} />
          <Route
            path="/picture"
            element={<PicturePage data="전달된 props" />}
          />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
