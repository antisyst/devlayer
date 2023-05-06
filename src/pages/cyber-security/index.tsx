import styled from "styled-components";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
const RouteShowcase = styled.main `
    text-align: center;
`
const RouteLayout = styled.div `
    text-align: center;
    padding-top: 13vh;
    padding-left: 9%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding-right: 9%;
`
const ServiceCaption = styled.h1 `
   font-family: 'Clash Display', sans-serif;
    font-weight: bold;
    color: var(--var-color-black);
    text-align: left;
    font-size: calc(10px + 6vmin); 
    word-spacing: 8.4px;

    span {
      color: var(--var-color-advanced);
    }

    @media only screen and (max-width: 768px) {
    font-size: calc(10px + 6vmin); 
    }
`
const ServiceContent = styled.p `
    font-size: calc(10px + 1.6vmin);
    text-align: left;
    margin-top: 1vh;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    @media only screen and (max-width: 768px) {
    font-size: calc(10px + 2vmin);
    }
`


export default function WebDesign() {
    return(
      <RouteShowcase>
        <Navigation/>
         <RouteLayout>
                <ServiceCaption>Cyber <span>Security</span></ServiceCaption>
                <ServiceContent>
                Our cyber security service is dedicated to helping businesses and individuals protect their digital assets from cyber threats. We believe that cyber security is essential for success in today's digital age, and we're committed to providing our clients with the highest quality cyber security services possible.
                <br />
                Our team of experienced cyber security experts work closely with our clients to understand their unique needs and goals. We take the time to get to know our clients and their businesses, so that we can create cyber security solutions that truly meet the needs of their digital assets.
                <br />
                We offer a wide range of cyber security services, including:
                <br />
                 - Network security: We provide network security solutions that protect our clients' networks from cyber threats, ensuring that their digital assets are secure and protected.
                 <br />
                - Endpoint security: We provide endpoint security solutions that protect our clients' devices from cyber threats, ensuring that their digital assets are secure and protected.
                <br />
                - Cyber security consulting: We provide cyber security consulting services that help our clients understand their cyber security risks and develop strategies to mitigate those risks.
                <br />
                At our cyber security service, we're committed to providing the highest level of customer service possible. We believe that our success is directly tied to the success of our clients, and we work tirelessly to ensure that our clients are happy and satisfied with our service.

                </ServiceContent>
         </RouteLayout>
         <Footer/>
      </RouteShowcase>
    )
}