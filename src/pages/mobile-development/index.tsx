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
                <ServiceCaption>Mobile <span>Development</span></ServiceCaption>
                <ServiceContent>
                Our mobile development service is dedicated to helping businesses and individuals create high-quality mobile applications that meet the needs of their customers. We believe that mobile applications are essential for success in today's digital age, and we're committed to providing our clients with the highest quality mobile development services possible.
                <br />
                Our team of experienced developers work closely with our clients to understand their unique needs and goals. We take the time to get to know our clients and their businesses, so that we can create mobile applications that truly meet the needs of their customers.
                <br />
                We offer a wide range of mobile development services, including:
                <br />
               - iOS and Android app development: We develop mobile applications for both iOS and Android platforms, ensuring that our clients' applications are accessible to the widest possible audience.
               <br />
               - Cross-platform app development: We develop cross-platform mobile applications that can be used on multiple platforms, reducing development costs and ensuring that our clients' applications are accessible to the widest possible audience.
               <br />
               - App maintenance and support: We provide ongoing maintenance and support for our clients' mobile applications, ensuring that they continue to meet the needs of their customers and are up-to-date with the latest technologies.
                <br />
                If you're looking for a mobile development service that can help you create high-quality mobile applications that meet the needs of your customers, look no further than our service. Contact us today to learn more about our services and how we can help you succeed.
                </ServiceContent>
         </RouteLayout>
         <Footer/>
      </RouteShowcase>
    )
}