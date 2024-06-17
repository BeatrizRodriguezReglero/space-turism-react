import Header from "../components/header/Header"
import TechContainer from "../components/tech-container/TechContainer"
import { StyledContainer } from "./pages.styles"

const Technology=()=>{
    return (

        <>
        <StyledContainer $bgImage='/public/assets/technology/background-technology-mobile.jpg'>
            <Header/>
            <TechContainer/>
        </StyledContainer>
        
        </>
    )
}
export default Technology