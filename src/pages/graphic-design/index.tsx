import styled from "styled-components";
import Footer from "@/components/footer";
import Navigation from "@/components/navigation";
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
                <ServiceCaption>Graphic <span>Design</span></ServiceCaption>
                <ServiceContent>Our graphic design service is dedicated to helping businesses and individuals create stunning visual content that captures their brand and message. We believe that great design is essential for success in today's competitive marketplace, and we're committed to providing our clients with the highest quality design services possible.
                <br />
                Our team of experienced designers work closely with our clients to understand their unique needs and goals. We take the time to get to know our clients and their businesses, so that we can create designs that truly reflect their brand and values.
                <br />
                Graphic design is how you communicate your brand – and you want it to be consistent. Keeping your brand consistent across all the platforms you use – even in how you provide your product and services to your customers – is important because it helps create and maintain trust with your current customers as well as demonstrating a professional appearance to potential customers. On social channels and in digital marketing, keeping your brand consistent helps people identify and connect with your brand, distinguishing it from your competitors.
                <br />
                We understand brand consistency and will strive, through our graphic design services, to keep your brand consistent.</ServiceContent>
         </RouteLayout>
         <Footer/>
      </RouteShowcase>
    )
}