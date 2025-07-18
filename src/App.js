import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/home";
import Header from "./components/header";
import FooterBar from "./components/footer";
import NavBar from "./components/nav";
import Items1 from "./components/products/items1";
import ProductDetails from "./pages/productdatails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/header" element={<Header></Header>}></Route>
        <Route path="/footer" element={<FooterBar></FooterBar>}></Route>
        <Route path="/nav" element={<NavBar></NavBar>}></Route>
        <Route path="/items" element={<Items1></Items1>}></Route>
        <Route path="/productdetails" element={<ProductDetails></ProductDetails>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
