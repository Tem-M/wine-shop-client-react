import {AllProducts} from "./allProducts"
import {Home} from "./Home"
import {Product} from "./product"
import {Cart} from "./cart"
import {Login} from "./login"
import {AddItem} from "./addItem"
import { Signin } from "./Signin"
import {Route, Routes} from "react-router"
import { MoreDetails } from "./moreDetails"

export const Routing = () => {
    return <>
        <Routes>
            <Route path="/" element = {<Home></Home>}></Route>
            <Route path="Products" element={<AllProducts></AllProducts>}></Route>
            <Route path="Product/:barcode" element={<Product></Product>}>
                <Route path="Details" element={<MoreDetails></MoreDetails>}></Route>
            </Route>
            <Route path="ShoppingCart" element={<Cart></Cart>}></Route>
            <Route path="Login" element={<Login></Login>}></Route>
            <Route path="AddItem" element={<AddItem></AddItem>}></Route>
            <Route path="Signin" element={<Signin></Signin>}></Route>
        </Routes>
    </>
}