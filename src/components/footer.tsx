import styled from 'styled-components';

const FooterSection = styled.div `
margin-top: 7vh;
background: var(--var-color-advanced);
text-align: center;
padding: 4vh 3%;
width: 100%;
`
const CreatorContent = styled.h2 `
font-family: 'Clash Display', sans-serif;
font-weight: bold;
color: var(--var-color-white);
text-align: center;

    a {
        color: var(--var-color-white);
    }
`
const Copyright = styled.h3 `
font-weight: bold;
color: var(--var-color-white);
font-size: 22px;
font-family: 'Poppins', sans-serif;
margin-top: 7px;

    span {
        padding-left: 10px;
    }
`
export default function Footer() {
    return(
        <FooterSection>
        <CreatorContent>Developed & Designed by <a href="https://rmzn.netlify.app" target='_blank'>Ramazan Azimli</a></CreatorContent>
        <Copyright>Copyright 2023 © <span>All Rights Reserved</span></Copyright>
        </FooterSection>
    )
}