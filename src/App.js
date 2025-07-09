import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/home";
import Header from "./components/header";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/header" element={<Header></Header>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
