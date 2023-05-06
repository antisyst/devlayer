import Navigation from "@/components/navigation";
import styled from "styled-components";
import Footer from "@/components/footer";
import BrandContainer from "@/components/BrandsContainer";

const BrandElement = styled.main `
    text-align: center;
`

const BrandsSection = styled.div `
    background: var(--var-color-white);
    text-align: center;
    padding-top: 13vh;
    padding-left: 9%;
    padding-right: 9%;
`
const FirstContent = styled.h1 `
   font-family: 'Clash Display', sans-serif;
    font-weight: bold;
    color: var(--var-color-black);
    text-align: center;
    font-size: calc(10px + 5vmin); 
    word-spacing: 8.4px;

    span {
      color: var(--var-color-advanced);
    }
`
const JoinOffer = styled.h1 `
   font-family: 'Clash Display', sans-serif;
   font-weight: bold;
   color: var(--var-color-black);
   text-align: center;
   font-size: calc(10px + 4vmin); 
   word-spacing: 8.4px;
   margin-top: 4vh;
   margin-bottom: 4.6vh;

   span {
    color: var(--var-color-advanced);
  }
  b {
    text-decoration: underline;
  }
`
const JoinAction = styled.a `
    text-decoration: none;
    padding: 16px 35px;
    margin-top: 2vh;
    background: var(--var-color-advanced);
    color: var(--var-color-white);
    font-family: 'Clash Display', sans-serif;
    font-size: 23px;
    transition: all 0.3s ease-out;
    border-radius: 8px;
    font-weight: bold;
    margin-top: 17px;

    @media only screen and (max-width: 800px) {
        cursor: none;
    }
`
export default function Brands() {
    return(
       <BrandElement>
            <Navigation/>
            <BrandsSection>
                <FirstContent className="animate__animated animate__bounceIn">Brands that <span>join us</span></FirstContent>
                <BrandContainer/>
                <JoinOffer>Do you want to be a part of us? <span>Hire us!</span></JoinOffer>
                <JoinAction href="#">Hire Us!</JoinAction>
            </BrandsSection>
            <Footer/>
       </BrandElement>
    )
}