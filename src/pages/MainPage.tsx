import { styled } from "styled-components"

const MainPage = () => {
  return (
    <MainPageSeciton>
      <FlexContainer>
        <MainTitleSection>
          <MainTitle>CEMENT</MainTitle>
          <MainSubTitle>
            Time To Cement
            <br />
            함께하다, 이어지다, 관계를 강화하다
          </MainSubTitle>
        </MainTitleSection>
      </FlexContainer>
      <SloganSection>
        <SloganTitle>CEMENT</SloganTitle>
        <Slogan>“모두가 좋아하는 팀"</Slogan>
        <SloganDescription>
          어디에서나 실행력으로 빛을 내는 시멘트
          <br />
          어디에서나 실행력으로 빛을 내는 시멘트
        </SloganDescription>
      </SloganSection>
      <PortfolioSection>
        <PortfolioContainer>
          <PortfolioTitle>PORTFOLIO</PortfolioTitle>
          <PortfolioImages>
            <PortfolioImage
              src="./src/assets/main-sample.png"
              alt="포트폴리오 이미지"
            />
            <PortfolioImage
              src="./src/assets/main-sample.png"
              alt="포트폴리오 이미지"
            />
            <PortfolioImage
              src="./src/assets/main-sample.png"
              alt="포트폴리오 이미지"
            />
            <PortfolioImage
              src="./src/assets/main-sample.png"
              alt="포트폴리오 이미지"
            />
            <PortfolioSignature>Signature</PortfolioSignature>
          </PortfolioImages>
        </PortfolioContainer>
      </PortfolioSection>
      <ContactSection>
        <ContactContainer>
          <ContactTitle>CONTACT</ContactTitle>
        </ContactContainer>
      </ContactSection>
    </MainPageSeciton>
  );
};

export default MainPage;

const MainPageSeciton = styled.div`
  width: 100%;
  height: 1197px;

  background: url('./src/assets/main-image.png');
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
`;

const MainTitleSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const MainTitle = styled.div`
  padding-bottom: 172px;

  font-size: 123px;
  font-weight: 400;
  color: #fff;
`;

const MainSubTitle = styled.div`
  text-align: center;
  font-family: NanumBarunGothicOTF;
  font-size: 28px;
  font-weight: 400;
  color: #fff;
`;

const SloganSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  width: 100%;
  height: 840px;
  background: #fff;
`;

const SloganTitle = styled.div`
  color: #000;
  font-size: 48px;
  font-weight: 400;
`;

const Slogan = styled.div`
  background: linear-gradient(90deg, #fc5c7d 0%, #6a82fb 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  font-family: NEXONFootballGothicBA1;
  font-size: 90px;
  font-weight: 300;
`;

const SloganDescription = styled.div`
  color: #000;
  font-family: NanumBarunGothicOTF;
  font-size: 40px;
  font-weight: 400;
`;

const PortfolioSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 968px;
  background: #e4932b;
`;

const PortfolioContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 60%;
`;

const PortfolioTitle = styled.div`
  color: #fff;
  font-size: 48px;
  font-weight: 400;
`;

const PortfolioImages = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: relative;
  width: 70%;
`;

const PortfolioImage = styled.img`
  width: 20%;

  object-fit: cover;
`;

const PortfolioSignature = styled.div`
  position: absolute;
  left: -100px;
  top: -50px;
  transform: rotate(-9.029deg);

  color: #ff0f0f;
  text-align: center;
  font-family: 'Poppins', sans-serif;
  font-family: 'Yellowtail', cursive;
  font-size: 64px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const ContactSection = styled.div`
    width: 100%;
    height: 742px;
    background: rgba(228, 147, 43, 0.16);
`

const ContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    height: 500px; // 임의 값
`

const ContactTitle = styled.div`
    color: #000;
    font-size: 48px;
    font-weight: 400;
`