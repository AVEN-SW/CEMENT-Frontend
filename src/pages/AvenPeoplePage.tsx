import styled from 'styled-components';
import CurrentTeamStatusBar from '../components/UI/CurrentTeamStatusBar';
import { PeopleProps } from './RootPeoplePage';
import { useOutletContext } from 'react-router-dom';

const AvenPeoplePage = () => {
  const {
    animationTrigger,
    isTeamChanged,
    handleClick,
    AvenFirstMembers,
    AvenSecondMembers,
  } = useOutletContext<PeopleProps>();

  return (
    <AvenPeoplePageSection $isTeamChanged={isTeamChanged}>
      <FlexContainer>
        <PeopleTitleContainer>
          <PeopleTitle>People</PeopleTitle>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <SmallTitle>I AM</SmallTitle>
            <PeopleSubTitleContainer>
              <TeamChangeButton
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="22"
                viewBox="0 0 18 22"
                fill="none"
                $left={true}
                $isTeamChanged={isTeamChanged}
                $animationTrigger={animationTrigger}
                onClick={handleClick}
              >
                <path
                  d="M18 11L9.2855e-07 21.3923L1.83707e-06 0.607695L18 11Z"
                  fill="white"
                />
              </TeamChangeButton>
              Team Aventura
              <TeamChangeButton
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="22"
                viewBox="0 0 18 22"
                fill="none"
                $isTeamChanged={isTeamChanged}
                $animationTrigger={animationTrigger}
                onClick={handleClick}
              >
                <path
                  d="M18 11L9.2855e-07 21.3923L1.83707e-06 0.607695L18 11Z"
                  fill="white"
                />
              </TeamChangeButton>
            </PeopleSubTitleContainer>
          </div>
        </PeopleTitleContainer>
        <LogoPositionContainer>
          <LogoContainer $isTeamChanged={isTeamChanged}>
            <Logo
              src="/assets/aven-logo.svg"
              alt="Aven 로고 텍스트"
              $isTeamChanged={isTeamChanged}
              $left={true}
            />
            <Logo
              src="/assets/aven-mate-logo.svg"
              alt="Aven Mate 로고 텍스트"
              $isTeamChanged={isTeamChanged}
            />
          </LogoContainer>
        </LogoPositionContainer>
        <TeamChangeSection>
          <CurrentTeamStatusBar isTeamChanged={isTeamChanged} team={true} />
        </TeamChangeSection>
        <PeopleContainer>
          <PeopleArrangeSection style={{ paddingRight: '160px' }}>
            {AvenFirstMembers}
          </PeopleArrangeSection>
          <PeopleArrangeSection>{AvenSecondMembers}</PeopleArrangeSection>
        </PeopleContainer>
      </FlexContainer>
    </AvenPeoplePageSection>
  );
};

export default AvenPeoplePage;

const AvenPeoplePageSection = styled.div<{ $isTeamChanged: boolean }>`
  position: relative;
  display: flex;
  justify-content: center;

  width: 100%;
  background: ${(props) => (props.$isTeamChanged ? '#000' : '#164299')};
  padding-top: 100px;
  padding-bottom: 350px;

  transition: background 0.6s ease;
`;

const FlexContainer = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  width: 880px;
  height: 100%;
  margin-top: 200px;
  z-index: 2;
`;

const PeopleTitleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  margin-bottom: 77px;
`;

const PeopleTitle = styled.div`
  margin-right: 271px;

  color: #fff;
  font-family: Gmarket Sans;
  font-size: 64px;
  font-weight: 700;
`;

const PeopleSubTitleContainer = styled.div`
  position: relative;

  color: #fff;
  font-family: 'LineSeed-Bold';
  font-size: 64px;
  white-space: nowrap;
`;

const TeamChangeButton = styled.svg<{
  $isTeamChanged: boolean;
  $animationTrigger: boolean;
  $left?: boolean;
}>`
  position: absolute;
  cursor: pointer;

  ${(props) => (props.$left ? 'left: -45px' : 'right: -45px')};
  bottom: 30px;
  ${(props) => (props.$left ? 'transform: rotate(180deg)' : '')};

  opacity: ${(props) => {
    if ((props.$animationTrigger || props.$isTeamChanged) && !props.$left)
      return 0;
    else if (!props.$isTeamChanged && props.$left) return 0;
    else if (props.$animationTrigger && props.$isTeamChanged && props.$left)
      return 0;
  }};

  transition: opacity 0.6s ease-in-out
    ${(props) => {
      if (!props.$animationTrigger && !props.$left) return '0.2s';
    }};
`;

const SmallTitle = styled(PeopleSubTitleContainer)`
  font-size: 24px;
`;

const LogoPositionContainer = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  margin-bottom: 27px;
`;

const LogoContainer = styled.div<{ $isTeamChanged: boolean }>`
  position: relative;

  width: ${(props) => (props.$isTeamChanged ? '550px' : '273px')};

  transition: width 0.6s ease;
`;

const Logo = styled.img<{ $isTeamChanged: boolean; $left?: boolean }>`
  ${(props) => props.$left && 'padding-left: 20px; padding-right: 20px'}
  ${(props) => !props.$left && 'position: absolute'};
  right: 0;
  ${(props) => !props.$left && 'z-index: -1'};

  background: ${(props) => (props.$isTeamChanged ? '#000' : '#164299')};

  transition: all 0.6s ease;
`;

const TeamChangeSection = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  margin-bottom: 44px;
`;

const PeopleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const PeopleArrangeSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
