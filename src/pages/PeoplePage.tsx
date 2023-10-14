import { useState } from 'react';
import { styled } from 'styled-components';

const memberImages = [
  { src: '/assets/member.png', name: 'CEMENT | 박용준' },
  { src: '/assets/member3.png', name: 'CEMENT | 권범수' },
  { src: '/assets/member5.png', name: 'CEMENT | 김택준' },
  { src: '/assets/member7.png', name: 'CEMENT | 김민엽' },
  // { src: '/assets/member9.png', name: 'AVEN | 진영' },
  // { src: '/assets/member11.png', name: 'CEMENT | 김택준' },
  // { src: '/assets/member13.png', name: 'CEMENT | 이준희' },
];

const secondMemberImages = [
  { src: '/assets/member2.png', name: 'CEMENT | 김현준' },
  { src: '/assets/member4.png', name: 'CEMENT | 전윤서' },
  { src: '/assets/member6.png', name: 'CEMENT | 이준희' },
  { src: '/assets/member8.png', name: 'CEMENT | 임서진' },
  // { src: '/assets/member10.png', name: 'CEMENT | 전윤서' },
  // { src: '/assets/member12.png', name: 'AVEN | 평현욱' },
  // { src: '/assets/member14.png', name: 'CEMENT | 시멘트' },
];

type teamStyleProps = {
  $teamState: boolean;
};

const PeoplePage = () => {
  const [isTeamChanged, setIsTeamChanged] = useState(false);

  const handleClick = () => {
    setIsTeamChanged((prev) => !prev);
  };

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
            src="/assets/logo.svg"
            alt="로고 svg"
            style={{ paddingRight: '16px' }}
          />
          <img src="/assets/logo-text.svg" alt="로고 텍스트 svg" />
        </LogoContainer>
        <PeopleContainer>
          <PeopleArrangeSection style={{ paddingRight: '90px' }}>
            {memberImages.map((member, idx) => {
              return (
                <MemberCard key={member.src}>
                  <MemberImage
                    src={member.src}
                    alt={`멤버 프로필 사진 ${idx + 1}`}
                  />
                  <MemberTitle>"자신만의 문구"</MemberTitle>
                  <MemberName>{member.name}</MemberName>
                </MemberCard>
              );
            })}
          </PeopleArrangeSection>
          <PeopleArrangeSection>
            {secondMemberImages.map((member, idx) => {
              return (
                <MemberCard key={member.src}>
                  <MemberImage
                    src={member.src}
                    alt={`멤버 프로필 사진 ${idx + 1}`}
                  />
                  <MemberTitle>타이틀</MemberTitle>
                  <MemberName>{member.name}</MemberName>
                </MemberCard>
              );
            })}
          </PeopleArrangeSection>
        </PeopleContainer>
      </FlexContainer>
      <ChangeButtonContainer>
        <ChangeButton onClick={handleClick} $teamState={isTeamChanged}>
          <img src="/assets/button-logo-aven.svg" alt="aven 로고" />
        </ChangeButton>
        <ChangeButton
          onClick={handleClick}
          $teamState={!isTeamChanged}
          style={{ backgroundColor: '#AF7122' }}
        >
          <img src="/assets/logo.svg" alt="cement 로고" style={{ zIndex: 1 }} />
        </ChangeButton>
      </ChangeButtonContainer>
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
  transition: background-color 0.3s ease;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  height: 100%;
  margin-top: 200px;
`;

const PeopleTitleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: 100%;
  margin-bottom: 77px;
`;

const PeopleTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  padding-right: 337px;

  color: #fff;
  font-family: Gmarket Sans;
  font-size: 64px;
  font-weight: 700;
`;

const PeopleSubTitle = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  color: #fff;
  font-family: 'LineSeed-Bold';
  font-size: 38px;
  white-space: nowrap;
`;

const LogoContainer = styled.div`
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
  margin-bottom: 20px;

  object-fit: cover;
`;

const MemberTitle = styled.div`
  width: 100%;
  padding-bottom: 34px;

  color: #fff;
  font-family: 'LineSeed-Bold';
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
  position: absolute;

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
  background: #164299;
  box-shadow: 3px 3px 8px 3px rgba(0, 0, 0, 0.25)
    ${(props) => props.$teamState && 'inset'};

  opacity: ${(props) => props.$teamState && 0.45};
  transition: all 0.3s ease;

  border: unset;
`;
