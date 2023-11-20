import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { headerStyleProps } from './Header';

interface Props {
  scrollLocation: number;
  pathname: string;
  isHovered: boolean;
}

const aboutUsNavigationList = [
  {
    title: 'CEMENT',
    buttonPathname: '/about-us/cement',
  },
  {
    title: 'How We Work',
    buttonPathname: '/about-us/culture',
  },
];

const peopleNavigationList = [
  {
    title: 'CEMENT',
    buttonPathname: '/people/cement',
  },
  {
    title: 'AVEN',
    buttonPathname: '/people/aven',
  },
  {
    title: 'AVEN MATE',
    buttonPathname: '/people/aven-mate',
  },
  {
    title: 'Celebrity',
    buttonPathname: '/people/celebrity',
  },
];

const Navigator = ({ scrollLocation, pathname, isHovered }: Props) => {
  const navMapping = (
    navList: Array<{ title: string; buttonPathname: string }>,
  ) => {
    return navList.map((nav, idx) => {
      return (
        <NavigationList
          key={nav.buttonPathname}
          $idx={idx}
          $isHovered={isHovered}
        >
          <DetailNavigationButtonContainer>
            <DetailNavigationButton
              to={nav.buttonPathname}
              $currentPathname={pathname}
            >
              {nav.title}
            </DetailNavigationButton>
          </DetailNavigationButtonContainer>
        </NavigationList>
      );
    });
  };

  const aboutUsNav = navMapping(aboutUsNavigationList);
  const peopleNav = navMapping(peopleNavigationList);
  return (
    <NavigationSection>
      <NavigationButton
        to="/"
        $scroll={scrollLocation}
        $pathname={pathname}
        $isHovered={isHovered}
      >
        Login
      </NavigationButton>
      <NavigationButtonContainer>
        <NavigationButton
          to="about-us/cement"
          $scroll={scrollLocation}
          $pathname={pathname}
          $isHovered={isHovered}
          $menu={true}
        >
          About Us
        </NavigationButton>
        {aboutUsNav}
      </NavigationButtonContainer>
      <NavigationButtonContainer>
        <NavigationButton
          to="people/cement"
          $scroll={scrollLocation}
          $pathname={pathname}
          $isHovered={isHovered}
          $menu={true}
        >
          People
        </NavigationButton>
        {peopleNav}
      </NavigationButtonContainer>
      <NavigationButton
        to="portfolio"
        $scroll={scrollLocation}
        $pathname={pathname}
        $isHovered={isHovered}
      >
        Portfolio
      </NavigationButton>
    </NavigationSection>
  );
};

export default Navigator;

const NavigationSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  padding-top: 26px;
  margin-right: 65px;
`;

const NavigationButtonContainer = styled.div``;

const NavigationList = styled.ul<{ $idx: number; $isHovered: boolean }>`
  position: absolute;

  padding: 0;
  margin: 0;

  transform: translateY(
    ${(props) => props.$isHovered && props.$idx * 30 + 44}px
  );
  opacity: ${(props) => (props.$isHovered ? 1 : 0)};

  transition:
    transform,
    opacity ${(props) => props.$isHovered && 0.7}s ease
      ${(props) => props.$idx / 10}s;
`;

const DetailNavigationButtonContainer = styled.li`
  list-style: none;
`;

const DetailNavigationButton = styled(Link)<{
  $currentPathname: string;
}>`
  background: unset;
  border: unset;
  text-decoration: none;

  color: #5b5b5b;
  ${(props) =>
    props.$currentPathname == props.to &&
    'background: -webkit-linear-gradient(180deg, #fc5c7d, #6a82fb);background-clip: text;-webkit-background-clip: text;-webkit-text-fill-color: transparent;'}
  font-size: 14px;
  &:hover {
    background: -webkit-linear-gradient(180deg, #fc5c7d, #6a82fb);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const NavigationButton = styled(Link)<headerStyleProps>`
  position: relative;

  padding-bottom: 24px;
  margin-right: 60px;

  background: unset;
  border: unset;
  text-decoration: none;

  transition: all ease 0.3s;

  font-size: 24px;
  font-weight: 400;
  color: ${(props) =>
    props.$scroll > 117 || props.$pathname !== '/' ? '#5B5B5B' : '#fff'};

  &::after {
    content: '';
    ${(props) => props.$menu && 'position: absolute'};
    left: 0;
    bottom: ${(props) => (props.$isHovered ? '0' : '24px')};
    width: 100%;
    height: 1px;
    background: ${(props) => (props.$isHovered ? '#000' : 'transparent')};

    transition: bottom 0.3s ease;
  }
`;
