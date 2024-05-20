import { useSelector, useDispatch } from "react-redux"
import { useState } from "react";
import { addProduct } from "../redux/dataActions"
import { useNavigate } from "react-router";
export const AddItem = () => {
    const navigate = useNavigate()
    const currentUser = useSelector(s => s.curUser);
    const admin = useSelector(s => s.admin);
    const dispatch = useDispatch();
    const products = useSelector(s => s.products)
    const [product, setProduct] = useState({
        barcode: 0,
        name: "",
        description: "",
        details: "",
        price: 0,
        pic: ""
    })
    const AddProduct = () => {
        debugger
        if ((currentUser.userName === admin.userName) && (products.findIndex(p => p.barcode === parseInt(product.barcode)) === -1) && (product.price > 0)) {
            dispatch(addProduct(product))
            navigate("../Products")
        }
        else
            alert("טעות בפרטים")
    }

    debugger
    if (currentUser.userName === admin.userName)
        return <>
            <form className="login">
                <h5>
                    הוספת מוצר
                </h5>
                <br />
                <br />
                <input type="number" min="0" placeholder="ברקוד" onChange={(e) => { setProduct({ ...product, barcode: e.target.value }) }}></input>
                <br />
                <br />
                <input type="text" placeholder="שם" onChange={(e) => { setProduct({ ...product, name: e.target.value }) }}></input>
                <br />
                <br />
                <input type="text" placeholder="תיאור" onChange={(e) => { setProduct({ ...product, description: e.target.value }) }}></input>
                <br />
                <br />
                <input type="text" placeholder="פרטים" onChange={(e) => { setProduct({ ...product, details: e.target.value }) }}></input>
                <br />
                <br />
                <input type="url" placeholder="קישור לתמונה" onChange={(e) => { setProduct({ ...product, pic: e.target.value }) }}></input>
                <br />
                <br />
                <input type="number" min="1" placeholder="מחיר" onChange={(e) => { setProduct({ ...product, price: e.target.value }) }}></input>
                <br />
                <br />
                <button onClick={(e) => {
                    e.preventDefault()
                    AddProduct(product)
                }}>הוסף</button>
            </form>
        </>
    else
        return <>
            <h1 style={{ textAlign: "center", direction: "ltr" }}>We're sorry, this is an admin zone only...</h1>
        </>
}