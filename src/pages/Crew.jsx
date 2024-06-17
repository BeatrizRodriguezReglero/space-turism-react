import CrewContainer from "../components/crew-container/CrewContainer"
import Header from "../components/header/Header"
import { StyledContainer } from "./pages.styles"


const Crew= ()=>{
    return (

        <>
       <StyledContainer $bgImage='/public/assets/crew/background-crew-mobile.jpg'>
        <Header/>
        <CrewContainer/>
       </StyledContainer>
            
        
        
        </>
    )
}
export default Crew