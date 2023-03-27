import { ListProducts } from "./ListProducts";
import { Navbar } from "./Navbar";
import './products.css'
import { ShoppingCart } from "./ShoppingCart";


export const HulkPage = () => {
  return (
    <>
      <Navbar />
      <ListProducts />
      <ShoppingCart />
    </>
  )
}
