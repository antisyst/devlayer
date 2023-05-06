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
                <ServiceCaption>Web <span>Design</span></ServiceCaption>
                <ServiceContent>In today’s digital world, it is crucial to stay connected with your customers and prospects to leverage new markets and expand your business. Statistics show that approximately 4.57 billion people worldwide are active internet users, comprising 59 percent of the global population. Within this online community, 53 percent perform research before connecting with a brand to ensure they are making the right decision.
                <br />
                A study from Episerver also found that 92 percent of consumers visit a brand’s website with multiple intentions other than buying.
                <br />
                These include product/service research, comparison shopping and business review. This data proves consumers do not purchase on impulse.
                <br />
                Web Design Services
                Given the vast global marketplace, it is only reasonable for online shoppers to assess and compare brands to find the best possible offerings, prices and features.
                <br />
                Without a web presence, you automatically lose the opportunity to get in touch with your target audience and popularize your brand. Build consumer trust and gain market referrals with an interactive, custom web page design.</ServiceContent>
         </RouteLayout>
         <Footer/>
      </RouteShowcase>
    )
}