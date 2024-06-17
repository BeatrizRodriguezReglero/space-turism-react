import Header from "../components/header/Header"
import MainContainer from "../components/main-container/MainContainer"
import { StyledContainer } from "./pages.styles"

const Home=()=>{
    return (

        <>
        <StyledContainer $bgImage='/public/assets/home/background-home-mobile.jpg'>
            <Header/>
            <MainContainer/>
        </StyledContainer>
        
        </>
    )
}
export default Home