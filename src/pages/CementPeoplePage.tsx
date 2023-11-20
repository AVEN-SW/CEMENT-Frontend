import { styled } from 'styled-components';
import CurrentTeamStatusBar from '../components/UI/CurrentTeamStatusBar';
import { PeopleProps } from './RootPeoplePage';
import { useOutletContext } from 'react-router-dom';

const CementPeoplePage = () => {
  const {
    animationTrigger,
    isTeamChanged,
    handleClick,
    CementFirstMembers,
    CementSecondMembers,
  } = useOutletContext<PeopleProps>();

  return (
    <CementPeoplePageSection>
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
                  fill="black"
                />
              </TeamChangeButton>
              <HiddenContainer
                $isTeamChanged={isTeamChanged}
                $animationTrigger={animationTrigger}
              >
                <PeopleSubTitle
                  $isTeamChanged={isTeamChanged}
                  $animationTrigger={animationTrigger}
                  $left={true}
                >
                  Celebrity
                </PeopleSubTitle>
                <PeopleSubTitle
                  $isTeamChanged={isTeamChanged}
                  $animationTrigger={animationTrigger}
                >
                  Team Cement
                </PeopleSubTitle>
              </HiddenContainer>
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
                  fill="black"
                />
              </TeamChangeButton>
            </PeopleSubTitleContainer>
          </div>
        </PeopleTitleContainer>
        <LogoContainer>
          <img src="/assets/logo-text.svg" alt="Cement 로고 텍스트" />
        </LogoContainer>
        <TeamChangeSection>
          <CurrentTeamStatusBar isTeamChanged={isTeamChanged} team={false} />
        </TeamChangeSection>
        <PeopleContainer>
          <PeopleArrangeSection style={{ paddingRight: '160px' }}>
            {CementFirstMembers}
          </PeopleArrangeSection>
          <PeopleArrangeSection>{CementSecondMembers}</PeopleArrangeSection>
        </PeopleContainer>
      </FlexContainer>
    </CementPeoplePageSection>
  );
};

export default CementPeoplePage;

const CementPeoplePageSection = styled.div`
  position: relative;
  display: flex;
  justify-content: center;

  width: 100%;
  padding-top: 100px;
  padding-bottom: 350px;
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

  color: #000;
  font-family: Gmarket Sans;
  font-size: 64px;
  font-weight: 700;
`;

const PeopleSubTitleContainer = styled.div`
  position: relative;

  color: #000;
  font-family: 'LineSeed-Bold';
  font-size: 64px;
  white-space: nowrap;
`;

const HiddenContainer = styled.div<{
  $isTeamChanged: boolean;
  $animationTrigger: boolean;
}>`
  display: flex;
  width: ${(props) =>
    props.$isTeamChanged || props.$animationTrigger ? '288px' : '440px'};
  transition: ${(props) => {
    if (!props.$animationTrigger) return '';
    else return 'width 0.6s ease-in-out 0.6s';
  }};

  overflow: hidden;
`;

const PeopleSubTitle = styled.div<{
  $isTeamChanged: boolean;
  $animationTrigger: boolean;
  $left?: boolean;
}>`
  ${(props) => {
    if (!props.$animationTrigger && !props.$isTeamChanged)
      return 'transform: translateX(-290px)';
    else if (props.$animationTrigger && !props.$isTeamChanged && !props.$left)
      return 'transform: translateX(0px)';
    else if (!props.$animationTrigger && props.$isTeamChanged && props.$left)
      return 'transform: translateX(0px)';
    else if (props.$animationTrigger && props.$isTeamChanged && props.$left)
      return 'transform: translateX(-290px)';
  }};

  opacity: ${(props) => {
    if (props.$animationTrigger && !props.$left) return 0;
    else if (!props.$animationTrigger && !props.$isTeamChanged && props.$left)
      return 0;
  }};

  transition: all 0.6s ease-in-out
    ${(props) => {
      if (props.$animationTrigger && !props.$isTeamChanged && props.$left)
        return '2s';
    }};
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

  ${(props) => {
    if ((props.$animationTrigger || props.$isTeamChanged) && !props.$left)
      return 'opacity: 0; pointer-events: none';
    else if (!props.$isTeamChanged && props.$left)
      return 'opacity: 0; pointer-events: none';
    else if (props.$animationTrigger && props.$isTeamChanged && props.$left)
      return 'opacity: 0; pointer-events: none';
  }};

  transition: opacity 0.6s ease-in-out
    ${(props) => {
      if (!props.$animationTrigger && !props.$left) return '0.2s';
    }};
`;

const SmallTitle = styled(PeopleSubTitleContainer)`
  font-size: 24px;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  margin-bottom: 27px;
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
  align-items: center;
`;

const PeopleArrangeSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
