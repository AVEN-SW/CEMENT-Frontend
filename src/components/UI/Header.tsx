import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

interface Props {
  pathname: string;
}

type headerStyleProps = {
  $scroll: number;
  $pathname: string;
};

const Header = ({ pathname }: Props) => {
  const [scrollLocation, setScrollLocation] = useState(0);

  const updateScroll = () => {
    setScrollLocation(window.scrollY || document.documentElement.scrollTop);
  };

  useEffect(() => {
    if (pathname === '/') {
      window.addEventListener('scroll', updateScroll);
    }
  });

  return (
    <HeaderSection $scroll={scrollLocation} $pathname={pathname}>
      <FlexContainer>
        <LogoSection>
          <img src="./src/assets/logo.png" alt="로고 이미지" />
        </LogoSection>
        <NavigationSection>
          <NavigationButton
            to="culture"
            $scroll={scrollLocation}
            $pathname={pathname}
          >
            Culture
          </NavigationButton>
          <NavigationButton
            to="/"
            $scroll={scrollLocation}
            $pathname={pathname}
          >
            People
          </NavigationButton>
          <NavigationButton
            to="/"
            $scroll={scrollLocation}
            $pathname={pathname}
          >
            Benefits
          </NavigationButton>
          <NavigationButton
            to="/"
            $scroll={scrollLocation}
            $pathname={pathname}
          >
            Portfolio
          </NavigationButton>
        </NavigationSection>
      </FlexContainer>
    </HeaderSection>
  );
};

export default Header;

const HeaderSection = styled.div<headerStyleProps>`
  position: fixed;
  top: 0;
  width: 100%;
  height: 117px;
  background: ${(props) =>
    (props.$scroll > 117 || props.$pathname !== '/') && '#fff'};
  transition: all ease 0.3s;

  box-shadow: ${(props) =>
    (props.$scroll > 117 || props.$pathname !== '/') &&
    '0px 8px 7px 0px rgba(0, 0, 0, 0.13)'};
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 100%;
  height: 100%;
`;

const LogoSection = styled.div``;

const NavigationSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 663px;
`;

const NavigationButton = styled(Link)<headerStyleProps>`
  background: unset;
  border: unset;
  transition: all ease 0.3s;

  font-size: 28px;
  font-weight: 400;
  color: ${(props) =>
    props.$scroll > 117 || props.$pathname !== '/' ? '#5B5B5B' : '#fff'};
  text-decoration: none;
`;