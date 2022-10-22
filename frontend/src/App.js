import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";
function App() {
  return (
     <>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route exact path="/" element={<ProductList />} />
            <Route path="/add" element={<AddProduct />} />
            <Route path="/edit/:id" element={<EditProduct />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
     
  );
}

export default App;
