import Search from "./components/Search";
import { Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <div className="container">
      <h1 className="title">React Movie Search</h1>
      <Routes>
        <Route path="/" element={<Search />} />
      </Routes>
    </div>
  );
}
