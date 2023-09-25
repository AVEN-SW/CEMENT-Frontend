import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import InfinityScrollText from '../InfinityScroll/InfinityScrollText';

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
      <InfinityScrollText />
      <FlexContainer>
        <LogoSection to="/">
          <img
            src="./src/assets/logo.png"
            alt="로고 이미지"
            style={{ width: '183px', height: '28px' }}
          />
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
            to="people"
            $scroll={scrollLocation}
            $pathname={pathname}
          >
            People
          </NavigationButton>
          <NavigationButton
            to="benefit"
            $scroll={scrollLocation}
            $pathname={pathname}
          >
            Benefits
          </NavigationButton>
          <NavigationButton
            to="portfolio"
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
  height: 100px;
  padding-top: 35px;

  background: ${(props) =>
    (props.$scroll > 117 || props.$pathname !== '/') && '#fff'};
  transition: all ease 0.3s;

  box-shadow: ${(props) =>
    (props.$scroll > 117 || props.$pathname !== '/') &&
    '0px 8px 7px 0px rgba(0, 0, 0, 0.13)'};

  z-index: 1000;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 100%;
`;

const LogoSection = styled(Link)`
  margin-left: 126px;
`;

const NavigationSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-right: 65px;
`;

const NavigationButton = styled(Link)<headerStyleProps>`
  margin-right: 61px;

  background: unset;
  border: unset;
  transition: all ease 0.3s;

  font-size: 20px;
  font-weight: 400;
  color: ${(props) =>
    props.$scroll > 117 || props.$pathname !== '/' ? '#5B5B5B' : '#fff'};
  text-decoration: none;
`;