import {useSelector } from "react-redux"
import {useNavigate} from "react-router"
export const AllProducts = () => {
    const currentUser = useSelector(s => s.curUser.userName)
    const productList = useSelector(s => s.products)
    const navigate=useNavigate() 
    return <>
        <div className="flex-container">
            <h1>שלום, {currentUser}</h1>
            <div className="products">
                {productList.map((product) => <div onClick={() => {navigate(`/Product/${product.barcode}`)}}>
                        <div className="product" style={{float:"right", height:"100", width:"15%", margin:"2%", padding:"50", backgroundImage: `url(${product.pic})`, backgroundSize: "cover", backgroundPositionX:"50%"}}>
                            <h5>{product.name}
                            <br />
                            {product.price}₪</h5>
                        </div></div>)}
            </div>
            <br />
            <div className="banner-wines">
                <button style={{height: "68px", width:"230px", marginLeft:"37px", marginTop:"57.5px", marginBottom:"57.5px"}}>לעוד יינות</button>
            </div>
        </div>

        

    </>
}