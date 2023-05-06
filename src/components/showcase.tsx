import styled from "styled-components";
import AssetPhoto from "@/utils/asset-photo";

const ShowCase = styled.div `
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;

`

const ShowcaseSection = styled.main `
    height: 100vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background: var(--var-color-advanced);
    flex-wrap: wrap-reverse;
    padding: 0 5%;

    @media only screen and (max-width: 800px)  {
        display: flex;
        flex-direction: column-reverse;
    }
    `
 const ShowcaseDiv = styled.div `
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    img {
        width: 100%;
    }
    h1 {
        font-family: 'Clash Display', sans-serif;
        color: var(--var-color-white);
        font-weight: bold;
        font-size: calc(10px + 6vmin);
        text-align: left;

        @media only screen and (max-width: 800px) {
        text-align: center;
        font-size: calc(10px + 5vmin);
        }
    }
    p {
        font-family: 'Poppins', sans-serif;
        color: var(--var-color-white);
        font-size: calc(10px + 1.2vmin);
        font-weight: 500;
        margin-top: 0.5vh;
        text-align: left;

        @media only screen and (max-width: 800px) {
        font-size: calc(10px + 1.3vmin);
        text-align: center;
        }
    }

    @media only screen and (max-width: 800px) {
    width: 100%;
    align-items: center;
    }
    `
    const ShowButton  = styled.a `
    text-decoration: none; 
    padding: 16px 24px;
    color: var(--var-color-advanced);
    background: var(--var-color-white);
    font-family: 'Clash Display', sans-serif;
    font-size: 22px;
    border-radius: 8px;
    margin-top: 1vh;
    font-weight: bold;
    transition: all 0.4s ease-out;
    word-spacing: 5px;

    &:hover {
        opacity: 0.9;
        filter: drop-shadow(0 0 0.75rem var(--var-color-white));
        transition: all 0.4s ease-out;
    }
    `
    const ShowButton2  = styled.a `
    text-decoration: none; 
    padding: 15px 24px;
    color: var(--var-color-white);
    background: none;
    border: 1.5px solid var(--var-color-white);
    font-family: 'Clash Display', sans-serif;
    font-size: 22px;
    border-radius: 8px;
    margin-top: 1vh;
    margin-left: 8px;
    font-weight: bold;
    transition: all 0.4s ease-out;
    word-spacing: 5px;

    &:hover {
        opacity: 0.9;
        filter: drop-shadow(0 0 0.75rem var(--var-color-white));
        transition: all 0.4s ease-out;
    }
    `
    const ButtonCont = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    `

export default function Showcase() {
    return(
        <ShowCase>
            <ShowcaseSection>
                <ShowcaseDiv>
                    <h1 className="animate__animated animate__bounceIn">Innovative solutions for your digital needs</h1>
                    <p className="animate__animated animate__bounceIn"> Our team of experienced developers is dedicated to delivering innovative solutions that meet your unique needs and exceed your expectations.</p>
                    <br />
                    <ButtonCont>
                        <ShowButton href="#">Learn  More</ShowButton>
                        <ShowButton2 href="#">View Our Services</ShowButton2>
                    </ButtonCont>
                </ShowcaseDiv>
            <ShowcaseDiv className="animate__animated animate__bounceIn">
                    <AssetPhoto/>
            </ShowcaseDiv>
            </ShowcaseSection>
        </ShowCase>
    )
}