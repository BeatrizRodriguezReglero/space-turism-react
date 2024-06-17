import DestinationContainer from "../components/destination-container/DestinationContainer"
import Header from "../components/header/Header"
import { StyledContainer } from "./pages.styles"

const Destination=()=>{
    return(
        <>
        <StyledContainer $bgImage='/public/assets/destination/background-destination-mobile.jpg'>
            <Header/>
            <DestinationContainer/>  
        </StyledContainer>
        
        </>
    )  
}
export default Destination