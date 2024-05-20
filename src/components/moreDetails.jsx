import { useLocation } from "react-router-dom"
import { useSelector } from "react-redux"
export const MoreDetails = (props) => {
    var location = useLocation().pathname
    location = location.split("/")
    const products = useSelector(s => s.products)
    const product = products.find(p => p.barcode === parseInt(location[2]))
    debugger
    return <>
        {
            product.details
        }
    </>
}