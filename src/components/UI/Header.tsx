import { styled } from "styled-components"

const Header = () => {
  return (
    <HeaderSection>
        <FlexContainer>
            <LogoSection>
                <img src="./src/assets/logo.png" alt="로고 이미지" />
            </LogoSection>
            <NavigationSection>
                <NavigationButton>Culture</NavigationButton>
                <NavigationButton>People</NavigationButton>
                <NavigationButton>Benefits</NavigationButton>
                <NavigationButton>Portfolio</NavigationButton>
            </NavigationSection>
        </FlexContainer>
    </HeaderSection>
  )
}

export default Header

const HeaderSection = styled.div`
    width: 100%;
    height: 117px;
    
    background: #FFF;
    box-shadow: 0px 8px 7px 0px rgba(0, 0, 0, 0.13);
`

const FlexContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;

    width: 100%;
    height: 100%;
`

const LogoSection = styled.div`
    
`

const NavigationSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 663px;
`

const NavigationButton = styled.button`
    background: unset;
    border: unset;

    font-size: 28px;
    font-weight: 400;
    color: #5B5B5B;
`