import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

export const Home = () => {
    const products = useSelector(s => s.products);
    const navigate = useNavigate()
    return <>
    <div className="Home">
        
        <div className = "homepage-banner">
            <div className = "hompage-banner-text" style={{width:"50%", margin:"auto", paddingRight:"10px"}}>
                <span style = 
                    {{color: "#5B0032",
                    fontSize:24, 
                    fontFamily:"Tel Aviv",
                    fontWeight:'700',
                    letterSpacing:1.92,
                    wordWrap:'break-word'}}>
                        גרו את החושים שלכם
                </span>
                
                <span style = 
                    {{color: "#5B0032",
                    fontSize:24, 
                    fontFamily:"Tel Aviv", 
                    fontWeight:'400', 
                    letterSpacing:1.92, 
                    wordWrap:'break-word'}}> 
                        <br/>
                </span>

                <span style =
                    {{color:'black', 
                    fontSize:16, 
                    fontFamily:"Tel Aviv", 
                    fontWeight:'400', 
                    wordWrap:'break-word'}}>
                        <br />
                        גלו את העולם העשיר והמגוון של ייצור היין הישראלי, שבו מסורת פוגשת חדשנות. 
                        <br />
                        הקולקציה שלנו מציגה את המיטב ממה שיש לאזור המדהים זה להציע, 
                        <br />
                        החל מכרמים בעלי שם עולמי ועד לאבני חן נסתרות שמחכות לחשיפה.
                </span>  
            </div>
            <div className = "hompage-banner-image" style = {{float:"left", width:"512px", height:"228px"}}></div>
        </div>

        <div className="hompage-products">
            {products.map((product, index) => {
                    if(index < 3)
                        return <div key={product.barcode} onClick={() => {navigate(`/Product/${product.barcode}`)}}>
                            <div className="homepage-product" style={{float:"right", height:"100", width:"29%", margin:"2%", padding:"50", backgroundImage: `url(${product.pic})`, backgroundSize: "cover", backgroundPositionX:"50%"}}>
                                <h5>{product.name}
                                <br />
                                {product.price}₪</h5>
                            </div>
                        </div>
                    else
                        return <span></span>
                }
            )}
        </div>                
        <button onClick={() => {navigate(`/Products`)}} style={{height: "68px", width:"230px", marginTop:"57.5px", marginBottom:"57.5px", float:"right"}}>לעוד יינות</button>
    </div>
        
    </>
}