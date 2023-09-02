import { styled } from 'styled-components';

const memberImages = [
  { src: 'src/assets/member.png', name: 'AVEN | 강효원' },
  { src: 'src/assets/member3.png', name: 'CEMENT | 박용준' },
  { src: 'src/assets/member5.png', name: 'AVEN | 장태희' },
  { src: 'src/assets/member7.png', name: 'CEMENT | 임서진' },
  { src: 'src/assets/member9.png', name: 'AVEN | 진영' },
  { src: 'src/assets/member11.png', name: 'CEMENT | 김택준' },
  { src: 'src/assets/member13.png', name: 'CEMENT | 이준희' },
];

const secondMemberImages = [
  { src: 'src/assets/member2.png', name: 'CEMENT | 김현준' },
  { src: 'src/assets/member4.png', name: 'CEMENT | 권범수' },
  { src: 'src/assets/member6.png', name: 'CEMENT | 김민엽' },
  { src: 'src/assets/member8.png', name: 'AVEN | 한승태' },
  { src: 'src/assets/member10.png', name: 'CEMENT | 전윤서' },
  { src: 'src/assets/member12.png', name: 'AVEN | 평현욱' },
  { src: 'src/assets/member14.png', name: 'CEMENT | 시멘트' },
];

const PeoplePage = () => {
  return (
    <PeoplePageSection>
      <FlexContainer>
        <PeopleTitleContainer>
          <PeopleTitle>People</PeopleTitle>
          <PeopleSubTitle>
            성장을 위한 가장 확실한 방법은 <br />
            뛰어난 동료들 사이에 있는 것입니다.
          </PeopleSubTitle>
        </PeopleTitleContainer>
        <PeopleContainer>
          <PeopleArrangeSection>
            {memberImages.map((member, idx) => {
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
    </PeoplePageSection>
  );
};

export default PeoplePage;

const PeoplePageSection = styled.div`
  width: 100%;

  padding-top: 117px;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 100%;
  margin-top: 200px;
`;

const PeopleTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 80%;
  margin-bottom: 140px;
`;

const PeopleTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  color: #5b5b5b;
  font-family: Gmarket Sans;
  font-size: 80px;
  font-weight: 600;
`;

const PeopleSubTitle = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  min-width: 650px;

  color: #5b5b5b;
  font-family: NEXONFootballGothicBA1;
  font-size: 48px;
  font-weight: 500;
`;

const PeopleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 90%;
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
  justify-content: space-between;
  align-items: center;

  margin-bottom: 120px;
`;

const MemberImage = styled.img`
  margin-bottom: 70px;
`;

const MemberTitle = styled.div`
  width: 100%;
  padding-bottom: 37px;

  color: #5b5b5b;
  font-family: NEXONFootballGothicBA1;
  font-size: 48px;
  font-weight: 500;
  text-align: left;
`;

const MemberName = styled.div`
  width: 100%;

  color: #5b5b5b;
  font-family: NanumGothicOTF;
  font-size: 36px;
  font-weight: 300;
  text-align: left;
`;
