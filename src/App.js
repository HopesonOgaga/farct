import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/home";
import Header from "./components/header";
import FooterBar from "./components/footer";
import NavBar from "./components/nav";
import Items1 from "./components/products/items1";
import ProductDetails from "./pages/productdatails";
import MenHome from "./pages/men";
import PersonalInfo from "./components/personalinfo";
import BagContent from "./components/checkout/cartcontent";
import CheckoutItem from "./components/checkout/checkout";
import SignIn from "./components/loginDetails/signin";
import Login from "./components/loginDetails/login";
import ItemsContent from "./components/checkout/cartcontent";
import Index from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index></Index>}></Route>
        <Route path="/women" element={<Home></Home>}> </Route>
        <Route path="/header" element={<Header></Header>}></Route>
        <Route path="/footer" element={<FooterBar></FooterBar>}></Route>
        <Route path="/nav" element={<NavBar></NavBar>}></Route>
        <Route path="/items" element={<Items1></Items1>}></Route>
        {/* target */}
        <Route path="/productdetails" element={<ProductDetails></ProductDetails>}></Route>
        {/* end */}
        <Route path="/menhome" element={<MenHome></MenHome>}></Route>
        <Route path="/info" element={<PersonalInfo></PersonalInfo>}></Route>
        <Route path="/check" element={<ItemsContent></ItemsContent>}></Route>
        <Route path="/checkout" element={<CheckoutItem></CheckoutItem>}></Route>
        <Route path="/sign" element={<SignIn></SignIn>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
