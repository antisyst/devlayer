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
                <ServiceCaption>Logo <span>Design</span></ServiceCaption>
                <ServiceContent>
                Our logo design service is dedicated to helping businesses and individuals create custom logos that capture the essence of their brand. We believe that a great logo is essential for success in today's competitive marketplace, and we're committed to providing our clients with the highest quality logo design services possible.
                <br />
                Our team of experienced designers work closely with our clients to understand their unique needs and goals. We take the time to get to know our clients and their businesses, so that we can create logos that truly reflect their brand and values.
                <br />
                  Our logo design service is dedicated to helping businesses and individuals create custom logos that capture the essence of their brand. We believe that a great logo is essential for success in today's competitive marketplace, and we're committed to providing our clients with the highest quality logo design services possible.
                <br />
                Our team of experienced designers work closely with our clients to understand their unique needs and goals. We take the time to get to know our clients and their businesses, so that we can create logos that truly reflect their brand and values.</ServiceContent>
         </RouteLayout>
         <Footer/>
      </RouteShowcase>
    )
}