import Navigation from "@/components/navigation";
import AboutShowcase from "@/components/AboutSection";
import styled from "styled-components";

const AboutRoute = styled.div `
    text-align: center;
`

export default function About() {
    return(
       <AboutRoute>
        <Navigation/>
        <AboutShowcase/>
       </AboutRoute>
    )
}