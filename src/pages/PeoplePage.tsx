import { Dispatch, SetStateAction, useState } from 'react';
import ReactDOM from 'react-dom';
import { useOutletContext } from 'react-router-dom';
import { keyframes, styled } from 'styled-components';

const memberImages = [
  { src: '/assets/member.png', name: 'CEMENT | 박용준' },
  { src: '/assets/member3.png', name: 'CEMENT | 권범수' },
  { src: '/assets/member5.png', name: 'CEMENT | 김택준' },
  { src: '/assets/member7.png', name: 'CEMENT | 김민엽' },
  { src: '/assets/member9.png', name: 'AVEN | 박용준' },
  { src: '/assets/member11.png', name: 'AVEN | 진영' },
  { src: '/assets/member13.png', name: 'AVEN | 권범수' },
  { src: '/assets/member15.png', name: 'AVEN | 평현욱' },
];

const secondMemberImages = [
  { src: '/assets/member2.png', name: 'CEMENT | 김현준' },
  { src: '/assets/member4.png', name: 'CEMENT | 전윤서' },
  { src: '/assets/member6.png', name: 'CEMENT | 이준희' },
  { src: '/assets/member8.png', name: 'CEMENT | 임서진' },
  { src: '/assets/member10.png', name: 'AVEN | 김현준' },
  { src: '/assets/member12.png', name: 'AVEN | 강효원' },
  { src: '/assets/member14.png', name: 'AVEN | 한승태' },
  { src: '/assets/member16.png', name: 'AVEN | 김윤기' },
];

type teamStyleProps = {
  $teamState: boolean;
  $buttonState?: boolean;
  $animationState?: boolean;
  $index?: number;
};

interface PeopleProps {
  isTeamChanged: boolean;
  setIsTeamChanged: Dispatch<SetStateAction<boolean>>;
}

const rotate = keyframes`
    0% {
        transform: translate3d(-90px, 0, 0);
    }
    100% {
        transform: translate3d(85px, 0, 0);
    }
`;

const change = keyframes`
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  50% {
    transform: translateY(150vh);
    opacity: 1;
  }
  55% {
    transform: translateY(150vh);
    opacity: 1;
  }
  99% {
    transform: translateY(150vh);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 0;
  }
`;

const PeoplePage = () => {
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [isAnimationStarted, setIsAnimationStarted] = useState(false);

  const { isTeamChanged, setIsTeamChanged } = useOutletContext<PeopleProps>();

  const handleClick = (teamChanged: boolean) => {
    setIsButtonClicked(teamChanged);
    setIsAnimationStarted(true);
    setTimeout(() => {
      setIsTeamChanged(teamChanged);
    }, 3000);
    setTimeout(() => {
      setIsAnimationStarted(false);
    }, 6000);
  };

  const memberMaping = (list: Array<{ src: string; name: string }>) => {
    const memberList = list;

    return memberList.map((member, idx) => {
      if (isTeamChanged && idx < 4) return;
      else if (!isTeamChanged && idx > 3) return;
      return (
        <MemberCard key={member.src}>
          <MemberImage src={member.src} alt={`멤버 프로필 사진 ${idx + 1}`} />
          <MemberTitle>"자신만의 문구"</MemberTitle>
          <MemberName>{member.name}</MemberName>
        </MemberCard>
      );
    });
  };

  const firstMembers = memberMaping(memberImages);

  const secondMembers = memberMaping(secondMemberImages);

  return (
    <PeoplePageSection $teamState={isTeamChanged}>
      <FlexContainer>
        <PeopleTitleContainer>
          <PeopleTitle>People</PeopleTitle>
          <PeopleSubTitle>
            성장을 위한 가장 확실한 방법은 <br />
            뛰어난 동료들 사이에 있는 것입니다.
          </PeopleSubTitle>
        </PeopleTitleContainer>
        <LogoContainer>
          <img
            src={
              isTeamChanged ? '/assets/aven-logo.svg' : '/assets/logo-text.svg'
            }
            alt="로고 텍스트 svg"
          />
        </LogoContainer>
        <PeopleContainer>
          <PeopleArrangeSection style={{ paddingRight: '160px' }}>
            {firstMembers}
          </PeopleArrangeSection>
          <PeopleArrangeSection>{secondMembers}</PeopleArrangeSection>
        </PeopleContainer>
      </FlexContainer>
      <ChangeButtonContainer>
        <ChangeButton
          onClick={() => handleClick(true)}
          $teamState={isTeamChanged}
          $buttonState={isButtonClicked}
          $index={0}
          disabled={isButtonClicked}
        >
          <img src="/assets/button-logo-aven.svg" alt="aven 로고" />
        </ChangeButton>
        <ChangeButton
          onClick={() => handleClick(false)}
          $teamState={!isTeamChanged}
          $buttonState={!isButtonClicked}
          $index={1}
          disabled={!isButtonClicked}
        >
          <img src="/assets/button-logo-cement.svg" alt="cement 로고" />
        </ChangeButton>
      </ChangeButtonContainer>
      {ReactDOM.createPortal(
        <>
          {isAnimationStarted && (
            <WaveContainer
              $teamState={isTeamChanged}
              $animationState={isAnimationStarted}
            >
              <WaveBody $buttonState={isButtonClicked} />
              <Wave
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 24 150 28"
                preserveAspectRatio="none"
                shapeRendering="auto"
                $teamState={isTeamChanged}
              >
                <defs>
                  <path
                    id="gentle-wave"
                    d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                  />
                </defs>
                <g className="parallax">
                  <use
                    xlinkHref="#gentle-wave"
                    x="48"
                    y="0"
                    fill="rgba(22,66,153,0.7)"
                  />
                  <use
                    xlinkHref="#gentle-wave"
                    x="48"
                    y="3"
                    fill="rgba(22,66,153,0.5)"
                  />
                  <use
                    xlinkHref="#gentle-wave"
                    x="48"
                    y="5"
                    fill="rgba(22,66,153,0.3)"
                  />
                  <use
                    xlinkHref="#gentle-wave"
                    x="48"
                    y="7"
                    fill="rgba(22,66,153,0.9)"
                  />
                </g>
              </Wave>
            </WaveContainer>
          )}
        </>,
        document.getElementById('wave') as HTMLElement,
      )}
    </PeoplePageSection>
  );
};

export default PeoplePage;

const PeoplePageSection = styled.div<teamStyleProps>`
  position: relative;
  display: flex;
  justify-content: center;

  position: relative;

  width: 100%;
  padding-top: 100px;
  padding-bottom: 350px;
  background: ${(props) => (props.$teamState ? '#164299' : '#e4932b')};
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  width: 880px;
  height: 100%;
  margin-top: 200px;
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

const PeopleSubTitle = styled.div`
  color: #fff;
  font-family: 'LineSeed-Bold';
  font-size: 38px;
  white-space: nowrap;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  margin-bottom: 77px;
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

const MemberCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  margin-bottom: 66px;
`;

const MemberImage = styled.img`
  width: 360px;
  height: 500px;

  margin-bottom: 20px;

  object-fit: cover;
`;

const MemberTitle = styled.div`
  width: 100%;
  padding-bottom: 34px;

  color: #fff;
  font-family: 'LineSeed-Regular';
  font-size: 55px;
  text-align: left;
`;

const MemberName = styled.div`
  width: 100%;

  color: #fff;
  font-family: NanumGothicOTF;
  font-size: 32px;
  font-weight: 400;
  text-align: left;
`;

const ChangeButtonContainer = styled.div`
  position: fixed;

  right: 76px;
  top: 155px;
`;

const ChangeButton = styled.button<teamStyleProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100px;
  height: 100px;
  margin-top: 40px;
  border-radius: 49.5px;
  background: ${(props) =>
    props.$index === 0
      ? props.$buttonState
        ? '#123477'
        : '#164299'
      : !props.$buttonState
      ? '#E4932B'
      : '#AF7122'};
  box-shadow: 3px 4px 4px 3px rgba(0, 0, 0, 0.25)
    ${(props) => props.$buttonState && 'inset'};

  opacity: ${(props) => props.$index != 0 && props.$buttonState && 0.45};

  transition: all 0.3s ease;

  border: unset;

  &:hover {
    cursor: pointer;
  }
`;

const WaveContainer = styled.div<teamStyleProps>`
  position: fixed;
  top: -150vh;
  width: 100%;
  height: 100%;

  z-index: 1000;

  animation: ${(props) => props.$animationState && change} 6s ease-out;
`;

const WaveBody = styled.div<{ $buttonState: boolean }>`
  width: 100%;
  height: 100vh;
  background: ${(props) => (props.$buttonState ? '#164299' : '#E4932B')};
`;

const Wave = styled.svg<{ $teamState: boolean }>`
  width: 100%;
  height: 20vh;
  transform: rotate(180deg);

  .parallax > use {
    animation: ${rotate} 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
    margin-top: 50vh;
  }
  .parallax > use:nth-child(1) {
    animation-delay: -2s;
    animation-duration: 3s;
    fill: ${(props) =>
      props.$teamState ? 'rgba(228,147,43,0.7)' : 'rgba(22,66,153,0.7)'};
  }
  .parallax > use:nth-child(2) {
    animation-delay: -4s;
    animation-duration: 5s;
    fill: ${(props) =>
      props.$teamState ? 'rgba(228,147,43,0.5)' : 'rgba(22,66,153,0.5)'};
  }
  .parallax > use:nth-child(3) {
    animation-delay: -6s;
    animation-duration: 7s;
    fill: ${(props) =>
      props.$teamState ? 'rgba(228,147,43,0.3)' : 'rgba(22,66,153,0.3)'};
  }
  .parallax > use:nth-child(4) {
    animation-delay: -8s;
    animation-duration: 9s;
    fill: ${(props) =>
      props.$teamState ? 'rgba(228,147,43,0.9)' : 'rgba(22,66,153,0.9)'};
  }
`;
