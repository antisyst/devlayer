import styled from "styled-components";

const BrandsContainer = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 4vh;
    user-select: none;
`
const BrandItem = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 300px;
    text-align: center;
    align-items: center;
    height: 200px;
    margin: 6px;
    pointer-events: none;

    img {
        width: 140px;
        text-align: center;
        transition: all 0.3s ease-out;

        &:hover {
            transition: all 0.3s ease-out;
            transform: scale(1.02);
        }
    }
`

export default function BrandContainer() {
    return(
        <BrandsContainer>
        <BrandItem className="animate__animated animate__bounceIn">
            <img src="https://simpleicons.org/icons/kfc.svg" className="animate__animated animate__bounceIn" alt="" />
        </BrandItem>
        <BrandItem className="animate__animated animate__bounceIn">
            <img src="https://simpleicons.org/icons/ikea.svg" className="animate__animated animate__bounceIn" alt="" />
        </BrandItem>
        <BrandItem className="animate__animated animate__bounceIn">
            <img src="https://simpleicons.org/icons/quickbooks.svg" className="animate__animated animate__bounceIn" alt="" />
        </BrandItem>
        <BrandItem className="animate__animated animate__bounceIn">
            <img src="https://simpleicons.org/icons/sandisk.svg" className="animate__animated animate__bounceIn" alt="" />
        </BrandItem>
        <BrandItem className="animate__animated animate__bounceIn">
            <img src="https://simpleicons.org/icons/quantconnect.svg" className="animate__animated animate__bounceIn" alt="" />
        </BrandItem>
        <BrandItem className="animate__animated animate__bounceIn">
            <img src="https://simpleicons.org/icons/thewashingtonpost.svg" className="animate__animated animate__bounceIn" alt="" />
        </BrandItem>
        <BrandItem className="animate__animated animate__bounceIn">
            <img src="https://simpleicons.org/icons/junipernetworks.svg" className="animate__animated animate__bounceIn" alt="" />
        </BrandItem>
        <BrandItem className="animate__animated animate__bounceIn">
            <img src="https://simpleicons.org/icons/talenthouse.svg" className="animate__animated animate__bounceIn" alt="" />
        </BrandItem>
        <BrandItem className="animate__animated animate__bounceIn">
            <img src="https://simpleicons.org/icons/prevention.svg" className="animate__animated animate__bounceIn" alt="" />
        </BrandItem>
        <BrandItem className="animate__animated animate__bounceIn">
            <img src="https://simpleicons.org/icons/skynet.svg" className="animate__animated animate__bounceIn" alt="" />
        </BrandItem>
        <BrandItem className="animate__animated animate__bounceIn">
            <img src="https://simpleicons.org/icons/modrinth.svg" className="animate__animated animate__bounceIn" alt="" />
        </BrandItem>
        <BrandItem className="animate__animated animate__bounceIn">
            <img src="https://simpleicons.org/icons/fortinet.svg" className="animate__animated animate__bounceIn" alt="" />
        </BrandItem>
        <BrandItem className="animate__animated animate__bounceIn">
            <img src="https://simpleicons.org/icons/planetscale.svg" className="animate__animated animate__bounceIn" alt="" />
        </BrandItem>
        <BrandItem className="animate__animated animate__bounceIn">
            <img src="https://simpleicons.org/icons/prometheus.svg" className="animate__animated animate__bounceIn" alt="" />
        </BrandItem>
        <BrandItem className="animate__animated animate__bounceIn">
            <img src="https://simpleicons.org/icons/nintendonetwork.svg" className="animate__animated animate__bounceIn" alt="" />
        </BrandItem>
        <BrandItem className="animate__animated animate__bounceIn">
            <img src="https://simpleicons.org/icons/diagramsdotnet.svg" className="animate__animated animate__bounceIn" alt="" />
        </BrandItem>
        </BrandsContainer>
    )
}