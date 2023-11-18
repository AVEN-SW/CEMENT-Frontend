import { useState } from 'react';
import { styled } from 'styled-components';
import CurrentTeamStatusBar from '../components/UI/CurrentTeamStatusBar';

const cementMemberImages = [
  { src: '/assets/member.png', name: 'CEMENT | 박용준' },
  { src: '/assets/member2.png', name: 'CEMENT | 김현준' },
  { src: '/assets/member3.png', name: 'CEMENT | 이준희' },
  { src: '/assets/member4.png', name: 'CEMENT | 김민엽' },
  { src: '/assets/member5.png', name: 'CEMENT | 백경인' },
  { src: '/assets/member6.png', name: 'CEMENT | 권범수' },
  { src: '/assets/member7.png', name: 'CEMENT | 임서진' },
  { src: '/assets/member8.png', name: 'CEMENT | 김택준' },
  { src: '/assets/member9.png', name: 'CEMENT | 주예은' },
  { src: '/assets/who-is-next.png', name: 'CEMENT | 시멘트' },
];

const secondMemberImages = [
  { src: '/assets/member11.png', name: 'CELEB | 오유민' },
  { src: '/assets/member12.png', name: 'CELEB | 임현우' },
  { src: '/assets/member13.png', name: 'CELEB | 백경인' },
  { src: '/assets/member14.png', name: 'CELEB | 김현준' },
];

const PeoplePage = () => {
  // const { isTeamChanged, setIsTeamChanged } = useOutletContext<PeopleProps>();
  const [animationTrigger, setAnimationTrigger] = useState(false);
  const [isTeamChanged, setIsTeamChanged] = useState(false);

  const handleClick = () => {
    setAnimationTrigger(true);
    setTimeout(
      () => {
        setIsTeamChanged((prev) => !prev);
      },
      isTeamChanged ? 1300 : 2000,
    );
    setTimeout(
      () => {
        setAnimationTrigger(false);
      },
      isTeamChanged ? 1350 : 2050,
    );
  };

  console.log(
    `animationTrigger : ${animationTrigger}`,
    `isTeamChanged : ${isTeamChanged}`,
  );

  const memberMaping = (
    list: Array<{ src: string; name: string }>,
    second: boolean,
  ) => {
    return list.map((member, idx) => {
      if (!second && idx != 0 && idx % 2 != 0) return;
      else if (second && (idx == 0 || idx % 2 == 0)) return;
      return (
        <MemberCard key={member.src}>
          <MemberImageContainer>
            <MemberImage
              src={member.src}
              alt={`멤버 프로필 사진 ${idx + 1}`}
              $delay={(idx * 2) / 10}
              $idx={idx}
              $isTeamChanged={isTeamChanged}
              $animationTrigger={animationTrigger}
            />
          </MemberImageContainer>
          <MemberTitle>"자신만의 문구"</MemberTitle>
          <MemberName>{member.name}</MemberName>
        </MemberCard>
      );
    });
  };

  const firstMembers = memberMaping(
    isTeamChanged ? secondMemberImages : cementMemberImages,
    false,
  );

  const secondMembers = memberMaping(
    isTeamChanged ? secondMemberImages : cementMemberImages,
    true,
  );

  return (
    <PeoplePageSection>
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
          <img src="/assets/logo-text.svg" alt="로고 텍스트 svg" />
        </LogoContainer>
        <TeamChangeSection>
          <CurrentTeamStatusBar isTeamChanged={isTeamChanged} />
        </TeamChangeSection>
        <PeopleContainer>
          <PeopleArrangeSection style={{ paddingRight: '160px' }}>
            {firstMembers}
          </PeopleArrangeSection>
          <PeopleArrangeSection>{secondMembers}</PeopleArrangeSection>
        </PeopleContainer>
      </FlexContainer>
    </PeoplePageSection>
  );
};

export default PeoplePage;

const PeoplePageSection = styled.div`
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

const MemberCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  margin-bottom: 110px;
`;

const MemberImageContainer = styled.div`
  overflow-y: hidden;
  margin-bottom: 57px;
`;

const MemberImage = styled.img<{
  $delay: number;
  $idx: number;
  $isTeamChanged: boolean;
  $animationTrigger: boolean;
}>`
  width: 360px;
  border-radius: 18px;

  transform: translateY(678px);

  ${(props) => {
    if (props.$animationTrigger) return 'opacity: 0';
    else return 'transform: translateY(0px); opacity: 1';
  }};

  transition: all ${(props) => (props.$idx > 3 ? '0.2s' : '0.7s')} ease
    ${(props) => props.$delay}s;

  object-fit: cover;
`;

const MemberTitle = styled.div`
  width: 100%;
  padding-bottom: 34px;

  color: #000;
  font-family: 'LineSeed-Bold';
  font-size: 55px;
  text-align: left;
`;

const MemberName = styled.div`
  width: 100%;

  color: #000;
  font-family: NanumGothicOTF;
  font-size: 32px;
  font-weight: 400;
  text-align: left;
`;
