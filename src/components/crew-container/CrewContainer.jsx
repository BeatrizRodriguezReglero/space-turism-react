import { v4 } from "uuid"
import { CREWS } from "../../constants/crews"
import { useState } from "react"
import { StyledCircle, StyledContainerCircle, StyledContainerCrew, StyledContainerImage, StyledContainerInfo, StyledContainerTitle, StyledImage, StyledInfo, StyledName, StyledPosition, StyledTitle } from "./crew-container.styles"


const CrewContainer =()=>{
    const[crewActive, setCrewActive]=useState(0)
    return(
        <>
            <StyledContainerCrew>
                
                <StyledContainerTitle>
                    <StyledTitle $color='#464a50' $bold={true}>02</StyledTitle>
                    <StyledTitle $color='white'  >MEET YOUR CREW</StyledTitle>
                </StyledContainerTitle>  
                <StyledContainerImage>
                    <StyledImage src={CREWS[crewActive].image} alt="" />
                </StyledContainerImage>  
               
                <StyledContainerCircle>
                    {
                        CREWS.map((crew, index)=>(
                            <StyledCircle key={v4()} $active={crewActive===index} onClick={()=>setCrewActive(index)}></StyledCircle>
                        ))
                        

                    }
                    
                </StyledContainerCircle>
                <StyledContainerInfo>

                    <StyledPosition>{CREWS[crewActive].position}</StyledPosition>
                    <StyledName>{CREWS[crewActive].name}</StyledName>
                    <StyledInfo>{CREWS[crewActive].info}</StyledInfo>
                </StyledContainerInfo>
                
            </StyledContainerCrew>  
        </>
    )
}
export default CrewContainer