import { useState, useEffect } from 'react'
import { styled } from "styled-components"

const Header = () => {
    const [scrollLocation, setScrollLocation] = useState(0);
    const updateScroll = () => {
        setScrollLocation(window.scrollY || document.documentElement.scrollTop);
    }
    useEffect(()=>{
        window.addEventListener('scroll', updateScroll);
    });

  return (
    <HeaderSection scroll={scrollLocation}>
        <FlexContainer>
            <LogoSection>
                <img src="./src/assets/logo.png" alt="로고 이미지" />
            </LogoSection>
            <NavigationSection>
                <NavigationButton scroll={scrollLocation}>Culture</NavigationButton>
                <NavigationButton scroll={scrollLocation}>People</NavigationButton>
                <NavigationButton scroll={scrollLocation}>Benefits</NavigationButton>
                <NavigationButton scroll={scrollLocation}>Portfolio</NavigationButton>
            </NavigationSection>
        </FlexContainer>
    </HeaderSection>
  )
}

export default Header

const HeaderSection = styled.div<{scroll: number}>`
    position: fixed;
    top: 0;
    width: 100%;
    height: 117px;
    background: ${props => props.scroll > 117 && "#fff"};
    transition: all ease 0.3s;
    
    box-shadow: ${props => props.scroll > 117 && "0px 8px 7px 0px rgba(0, 0, 0, 0.13)"};
`

const FlexContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;

    width: 100%;
    height: 100%;
`

const LogoSection = styled.div``

const NavigationSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 663px;
`

const NavigationButton = styled.button<{scroll: number}>`
    background: unset;
    border: unset;
    transition: all ease 0.3s;

    font-size: 28px;
    font-weight: 400;
    color: ${props => props.scroll > 117 ? "#5B5B5B" : "#fff"}
`