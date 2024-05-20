import {useParams} from "react-router"
import {useSelector } from "react-redux"
import {Link} from "react-router-dom"
import {Outlet} from "react-router"
import { useDispatch } from "react-redux"
import { addToCart, Remove } from "../redux/dataActions"
export const Product = () => {
    const dispatch=useDispatch()
    const params=useParams() 
    const productList = useSelector(s => s.products)
    const product = productList.find(product => product.barcode === parseInt(params.barcode))
    const curUser = useSelector(s=>s.curUser)
    const admin = useSelector(s => s.admin)
      
    const remove = () => {
        if(window.confirm("האם אתה בטוח?") === true) {
            dispatch(Remove(product))
        }
    }
    return <>
        <div className="singleProduct">
            <div className="left" style={{width:"55%", float:"left", margin:"20px"}}>
                <h5>{product.name}</h5>
                <img src={product.pic} alt={product.name} style={{height:"60%"}}></img>
            </div>

            <div className="right" style={{width:"35%", float:"right", margin:"20px"}}>
                <p>{product.description}</p>
                <p>{product.price}₪</p>
                <Link to={`../Product/${product.barcode}/Details`}><button>פרטים נוספים</button></Link>
                {
                    curUser.userName!=="" && curUser.userName !== "admin" &&
                    <Link to = "../ShoppingCart">
                        <button onClick={()=>{ dispatch(addToCart({...product, count:1}))}}>
                            הוספה לסל
                        </button>
                    </Link>   
                } 
                {
                    curUser.userName === admin.userName && 
                    <Link to = "../Products">
                        <button onClick={()=>{remove()}}>
                            מחיקת מוצר
                        </button>
                    </Link>   
                }
                <br />
                <Outlet></Outlet>
            </div>
            
        </div>
    </>
}