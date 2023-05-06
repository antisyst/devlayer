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
                <ServiceCaption>Product <span>Design</span></ServiceCaption>
                <ServiceContent>
                Our product design service is dedicated to helping businesses and individuals create innovative and effective products that meet the needs of their customers. We believe that great product design is essential for success in today's competitive marketplace, and we're committed to providing our clients with the highest quality product design services possible.
                <br />
                Our team of experienced designers work closely with our clients to understand their unique needs and goals. We take the time to get to know our clients and their businesses, so that we can create products that truly meet the needs of their customers.
                <br />
                You have high standards for product design, and we respect that. Our team isn’t afraid to challenge the status quo, but whatever we do, we always keep your key goals in mind. We’re data-driven and consumer-focused, and any decision or suggestion we make is always based on research and broad experience. This is why 600+ clients have trusted us with their design and development needs.
                <br />
                Scaling Product Design teams is easy with Netguru. Startup founders appreciate our one-stop-shop model with complete A-to-Z design and development. SMB and enterprise executives can take advantage of our rapid, on-demand team extension with experts that swiftly enter your projects and quickly create value.
                </ServiceContent>
         </RouteLayout>
         <Footer/>
      </RouteShowcase>
    )
}