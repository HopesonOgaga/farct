import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/home";
import Header from "./components/header";
import FooterBar from "./components/footer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/header" element={<Header></Header>}></Route>
        <Route path="/footer" element={<FooterBar></FooterBar>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
