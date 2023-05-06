import styled from "styled-components";
import AboutSectionImg from "@/utils/about-photo";
import Footer from "./footer";

const AboutMVC = styled.main `
text-align: center;
`

const AboutSection = styled.div `
    background: var(--var-color-white);
    text-align: center;
    padding-top: 12vh;
    padding-left: 9%;
    padding-right: 9%;

    @media only screen and (max-width: 768px) {
        padding-left: 7%;
        padding-top: 14vh;
        padding-right: 7%;
    
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

    @media only screen and (max-width: 768px) {
    font-size: calc(10px + 6vmin); 
    }
`
const AboutContainer = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap-reverse;
`
const AboutContDiv = styled.div `
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    svg {
        width: 44%;

        @media only screen and (max-width: 768px) {
            width: 110%;
        }
    }
`
const AboutSectionContent = styled.p `
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: calc(10px + 1.4vmin);
    text-align: left;

    @media only screen and (max-width: 768px) {
      font-size: calc(10px + 2vmin);
    }
`
export default function AboutShowcase() {
    return(
        <AboutMVC>
        <AboutSection>
                    <FirstContent>About <span>our company</span></FirstContent>
           <AboutContainer>
                <AboutContDiv>
                    <AboutSectionImg/>
                </AboutContDiv>
                <AboutContDiv>
              <AboutSectionContent>
                At Devlayer, we're passionate about helping developers build amazing products. Our company was founded by a team of experienced developers who saw a need for a developer service that could provide high-quality tools and resources to help developers succeed.

                Since then, we've grown into a team of talented individuals who are dedicated to providing the best possible service to our customers. We operate on the principle that developers should have access to the best tools and resources available, regardless of their size or budget.

                Our mission is to empower developers to build amazing products by providing them with the tools and resources they need to succeed. We offer a wide range of services, including list of services, all designed to help developers streamline their workflows and build better products.

                At Devlayer, we're committed to providing the highest level of customer service possible. We believe that our success is directly tied to the success of our customers, and we work tirelessly to ensure that our customers are happy and satisfied with our service.

                We're proud of what we've accomplished so far, but we're always looking for ways to improve and grow. We're excited about the future of Devlayer and the opportunities that lie ahead, and we're committed to continuing to provide the best possible service to our customers.

                Whether you're a startup looking to build your first product or an enterprise-level company looking to streamline your workflows, we're here to help. Join the thousands of developers who have already discovered the value of Devlayer and start building amazing products today.
              </AboutSectionContent>
                </AboutContDiv>
           </AboutContainer>
        </AboutSection>
        <Footer/>
        </AboutMVC>
    )
}