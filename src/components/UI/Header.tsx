import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import Navigator from './Navigator';

interface Props {
  pathname: string;
  isTeamChanged: boolean;
}

export type headerStyleProps = {
  $scroll: number;
  $pathname: string;
  $menu?: boolean;
  $isHovered: boolean;
};

const Header = ({ pathname, isTeamChanged }: Props) => {
  const [scrollLocation, setScrollLocation] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const updateScroll = () => {
    setScrollLocation(window.scrollY || document.documentElement.scrollTop);
  };

  useEffect(() => {
    if (pathname === '/') {
      window.addEventListener('scroll', updateScroll);
    }
  });

  return (
    <HeaderSection
      $scroll={scrollLocation}
      $pathname={pathname}
      $isHovered={isHovered}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <FlexContainer>
        <LogoSection to="/">
          <img
            src={isTeamChanged ? '/assets/blue-logo.svg' : '/assets/logo.svg'}
            alt="로고 이미지"
            style={{ width: '183px', height: '28px' }}
          />
        </LogoSection>
        <Navigator
          scrollLocation={scrollLocation}
          pathname={pathname}
          isHovered={isHovered}
        />
      </FlexContainer>
    </HeaderSection>
  );
};

export default Header;

const HeaderSection = styled.div<headerStyleProps>`
  position: fixed;
  top: 0;
  width: 100%;
  height: ${(props) => (props.$isHovered ? '258px' : '112px')};
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

  width: 100%;
  height: 100%;
`;

const LogoSection = styled(Link)`
  padding-top: 24px;
  margin-left: 126px;
`;

