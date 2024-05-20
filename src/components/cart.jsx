import {useSelector } from "react-redux"
import {useDispatch} from "react-redux"
import {decCount, incCount, removeFromCart} from "../redux/dataActions"
export const Cart = () => {
    const dispatch=useDispatch()
    const cart = useSelector(s => s.cart)
    var total=0;
    cart.forEach(element => {
        total+=element.price*element.count
    });
    return <>
        <div className="cart">
            <table style = {{direction:"ltr"}}>
            {cart.map((product) => 
                <tr style={{height:"100px", margin:"50px", width:"80%", float:"left", display:"flex", flexDirection:"row-reverse"}}>
                    <td style={{marginRight:"auto"}}>
                        <img src={product.pic} alt={product.descritption} style={{height:"100px"}}></img>
                    </td>
                    <td style={{marginRight:"auto"}}>
                        <h5>{product.name}</h5>                    
                    </td>
                    <td style={{marginRight:"auto"}}>
                        <span>
                            <button className="cart-button" onClick={(e) => {dispatch(incCount(product))}}>+</button>
                            {product.count}
                            <button className="cart-button" onClick={(e) => {dispatch(decCount(product))}}>-</button>
                            <button className="cart-button" onClick={(e) => {dispatch(removeFromCart(product))}}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
                                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
                                    </svg>
                            </button>
                        </span>
                    </td>
                    <td style={{marginRight:"auto"}}>
                        <h6>{product.price * product.count}₪</h6>
                    </td>
                </tr>)}
            </table>
            
            <div>
                <h2>
                    Total: {total}₪
                </h2>
            </div>
        </div>
    </>
}