import styled from "styled-components";
import Tabs from "./TechContainer";
const TechnoSection = styled.div  `
    text-align: center;
    margin-top: 12vh;
    padding: 0 10%;
    margin-bottom: 30vh;

    @media only screen and (max-width: 800px)  {
    padding: 0 7%;

    }
`

const FirstContent = styled.h1 `
   font-family: 'Clash Display', sans-serif;
    font-weight: bold;
    color: var(--var-color-black);
    text-align: center;
    font-size: calc(10px + 4vmin);
    word-spacing: 10px;
    


    span {
      color: var(--var-color-advanced);
    }
`

export default function Technologies() {
    return(
        <TechnoSection>
                <FirstContent>Technologies <span>we use</span></FirstContent>
                    <Tabs/>
        </TechnoSection>
    )
}