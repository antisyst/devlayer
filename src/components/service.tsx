import styled from "styled-components";
import { CiMobile3, CiLaptop } from 'react-icons/ci';
import { AiOutlineCloudServer } from 'react-icons/ai';
import { MdSecurity } from 'react-icons/md';
import { CgIfDesign } from 'react-icons/cg';
import { TbWriting } from 'react-icons/tb';
import { useEffect } from "react";
 
const ServiceSection = styled.div  `
    text-align: center;
    margin-top: 11vh;
    padding: 0 10%;

    @media only screen and (max-width: 800px) {
    padding: 0 2%;
    }
`
const ServiceContainer = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 5vh;
    justify-content: center;
    flex-wrap: wrap;
    
    @media only screen and (max-width: 800px) {
        display: flex;
        flex-direction: column;
    }
`
const FirstContent = styled.h1 `
   font-family: 'Clash Display', sans-serif;
    font-weight: bold;
    color: var(--var-color-black);
    text-align: center;
    font-size: calc(10px + 3.5vmin); 

    span {
      color: var(--var-color-advanced);
    }
`
const ServiceItem = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 470px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;    border-radius: 10px;
    padding: 20px; 28px;
    width: 380px;
    margin: 6px;
    @media only screen and (max-width: 800px) {
        height: 490px;
        width: 96%;
    }
    svg {
        font-size: 150px;
        background: var(--var-color-advanced);
        color: var(--var-color-white);
        padding: 20px;
        border-radius: 50%;
    }
    h1 {
        font-family: 'Clash Display', sans-serif;
        margin-top: 30px;
    }
    p {
        font-family: 'Poppins', sans-serif;
        font-weight: 600;
        font-size: 17px;
        height: 104px;
        margin-top: 10px;
    }
    a {
        text-decoration: none;
        padding: 15px 20px;
        background: var(--var-color-advanced);
        color: var(--var-color-white);
        font-family: 'Clash Display', sans-serif;
        font-size: 19px;
        transition: all 0.3s ease-out;
        border-radius: 10px;
        margin-top: 17px;

        @media only screen and (max-width: 800px) {
            cursor: none;
        }
     
        &:hover {
            border-radius: 1px;
        transition: all 0.3s ease-out;
        }

    }
`

export default function Service() {



    
    return(
        <ServiceSection>
            <FirstContent>We offer great software development services through <span>entire life cycle</span> of the product.</FirstContent>
            <ServiceContainer>
                <ServiceItem>
                    <CiMobile3/>
                    <h1>Mobile Development</h1>
                    <p>
                    Custom Mobile app development solutions tailored to improve business efficiency and increase conversion for startups and Enterprises.
                    </p>
                    <a href="">Learn More</a>
                </ServiceItem>
                <ServiceItem>
                    <CiLaptop/>
                    <h1>Web Development</h1>
                    <p>
                    Offer web development services to clients who need a website built from scratch or an existing website updated.
                    </p>
                    <a href="">Learn More</a>
                </ServiceItem>
                <ServiceItem>
                    <AiOutlineCloudServer/>
                    <h1>Backend Services</h1>
                    <p>
                    They are responsible for handling the server-side logic of web applications, such managing databases calculations. 
                    </p>
                    <a href="">Learn More</a>
                </ServiceItem>
                <ServiceItem>
                    <MdSecurity/>
                    <h1>Cyber Security</h1>
                    <p>
                    Provide cybersecurity services to clients who need to protect their data and systems from cyber threats.
                    </p>
                    <a href="">Learn More</a>
                </ServiceItem>
                <ServiceItem>
                    <CgIfDesign/>
                    <h1>UX/UI Design</h1>
                    <p>
                    Offer UX/UI design services to clients who need help designing user-friendly and visually appealing websites and applications.
                    </p>
                    <a href="">Learn More</a>
                </ServiceItem>
                <ServiceItem>
                    <TbWriting/>
                    <h1>Content Writing</h1>
                    <p>
                    Content writing is the process of creating written material for websites, blogs, social media, and other digital platforms.
                    </p>
                    <a href="">Learn More</a>
                </ServiceItem>
            </ServiceContainer>
        </ServiceSection>
    )
}