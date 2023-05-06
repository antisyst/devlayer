import styled from "styled-components";
import Navigation from "@/components/navigation";
import { useEffect } from "react";

const ContactElement = styled.main `
    text-align: center;
`

const ContactSection = styled.div `
    background: var(--var-color-white);
    text-align: center;
    padding-top: 13vh;
    padding-left: 9%;
    padding-right: 9%;
    @media only screen and (max-width: 800px) {
        padding-left: 2%;
        padding-right: 2%;
    }
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
const ContactContainer = styled.div `
position: relative;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
  font-family: 'Poppins', sans-serif;
	align-items: center;
	padding: 20px 100px;

    &:after {
        content: '';
	position: absolute;
	width: 100%;
	height: 100%;
	left: 0;
	top: 0;
	background: url("https://raw.githubusercontent.com/antisyst/selectiomusic/main/contact-bg.svg") no-repeat center;
	background-size: cover;
	z-index: -1;
    }
`

const ContactBox = styled.div `
max-width: 1050px;
display: grid;
grid-template-columns: repeat(2, 1fr);
justify-content: center;
align-items: center;
text-align: center;
background-color: #fff;
box-shadow: 0px 0px 19px 5px rgba(0,0,0,0.19);

@media screen and (max-width: 880px) {
		grid-template-columns: 1fr;
}
`
const ContactLeft = styled.div `
background: url("https://raw.githubusercontent.com/antisyst/selectiomusic/main/contact-bg.svg") no-repeat center;
background-size: cover;
height: 100%;

@media screen and (max-width: 880px) {
		height: 200px;
}
`
const ContactRight = styled.div `
padding: 25px 40px;
`
const ContactH2 = styled.h2 `
position: relative;
padding: 0 0 10px;
margin-bottom: 10px;

&:after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    height: 4px;
    width: 50px;
    border-radius: 2px;
    background-color: var(--var-color-advanced);
}
`
const ContactField = styled.input `
width: 100%;
border: 2px solid rgba(0, 0, 0, 0);
outline: none;
background-color: rgba(230, 230, 230, 0.6);
padding: 0.5rem 1rem;
font-family: 'Clash Display', sans-serif;
font-size: 1.1rem;
margin-bottom: 22px;
transition: .3s;

&:hover {
	background-color: rgba(0, 0, 0, 0.1);
}
&:focus {
    border: 2px solid var(--var-color-advanced);
    background-color: #fff;
}
`

const ContactArea = styled.textarea `
min-height: 150px;
  font-family: 'Clash Display', sans-serif;
  resize: none;
  width: 100%;
border: 2px solid rgba(0, 0, 0, 0);
outline: none;
background-color: rgba(230, 230, 230, 0.6);
padding: 0.5rem 1rem;
font-family: 'Clash Display', sans-serif;
font-size: 1.1rem;
margin-bottom: 22px;
transition: .3s;

&:hover {
	background-color: rgba(0, 0, 0, 0.1);
}
&:focus {
    border: 2px solid var(--var-color-advanced);
    background-color: #fff;
}
`
const ContactButton = styled.button `
width: 100%;
padding: 14px 22px;
background-color: var(--var-color-advanced);
color: #fff;
font-size: 1.1rem;
border: none;
outline: none;
font-family: 'Clash Display', sans-serif;
cursor: pointer;
transition: .3s;

&:hover {
    transform: scale(1.01);
}
`
export default function Contact() {

    useEffect(() => {
        const button = document.getElementById("action");
        button?.addEventListener("click", ButtonFunction);
      
        return () => {
          button?.removeEventListener("click", ButtonFunction);
        };
      });
      
      function ButtonFunction() {
        const button = document.getElementById("action") as HTMLButtonElement;
        button.innerHTML = "Sended!";
      }

    return(
        <ContactElement>
            <Navigation/>
                <ContactSection>
                        <FirstContent>Contact <span>us</span></FirstContent>
                        <ContactContainer className="container">
                        <ContactBox className="contact-box">
                        <ContactLeft className="left" />
                        <ContactRight className="right">
                            <ContactH2>Contact Us</ContactH2>
                            <ContactField type="text" className="field" placeholder="Your Name" />
                            <ContactField type="text" className="field" placeholder="Your Email" />
                            <ContactField type="text" className="field" placeholder="Phone" />
                            <ContactArea placeholder="Message" className="field" defaultValue={""} />
                            <ContactButton className="btn" id="action">Send</ContactButton>
                        </ContactRight>
                        </ContactBox>
                    </ContactContainer>
                </ContactSection>
        </ContactElement>
    )
}

function ButtonFunction(this: HTMLElement, ev: MouseEvent) {
    throw new Error("Function not implemented.");
}
