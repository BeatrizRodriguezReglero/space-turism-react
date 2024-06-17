import { Link } from "react-router-dom"
import { StyledHeader } from "./header.styles"

const Header =()=>{
    return(
        <>  
        <StyledHeader>
            <img src="./public/assets/shared/logo.svg" alt="" />
            <img src="./public/assets/shared/icon-hamburger.svg" alt="" />  
            <ul>
                <li><Link to="/" >00 HOME</Link></li>
                <li><Link to="/destination" >01 DESTINATION</Link></li>
                <li><Link to="/crew" >02 CREW</Link></li>
                <li><Link to="/technology"  >03 TECHNOLOGY</Link></li>
            </ul>
        </StyledHeader>
           
          
        </>
    )
}
export default Header