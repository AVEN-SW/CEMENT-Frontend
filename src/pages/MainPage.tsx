import { styled } from "styled-components"

const instagramFeed = [
  'src/assets/instagram.png',
  'src/assets/instagram2.png',
  'src/assets/instagram3.png',
  'src/assets/instagram4.png',
  'src/assets/instagram5.png',
  'src/assets/instagram6.png',
  'src/assets/instagram7.png',
  'src/assets/instagram8.png',
  'src/assets/instagram9.png',
  'src/assets/instagram10.png',
  'src/assets/instagram11.png',
  'src/assets/instagram12.png',
  'src/assets/instagram13.png',
  'src/assets/instagram14.png',
  'src/assets/instagram15.png',
];

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
      <InstagramSection>
        {instagramFeed.map((thumbnail, index) => {
          return <img src={thumbnail} alt={`인스타그램 피드 ${index + 1}`} />;
        })}
      </InstagramSection>
      <ContactSection>
        <ContactContainer>
          <ContactTitle>CONTACT</ContactTitle>
          <ContactQrcode src="src/assets/qr-code.svg" alt="qr코드" />
          <Contact>
            <ContactMap alt="지도" />
            <ContactInquriy>
              모든 문의
              <br />
              <br />
              [이메일]
              <br />
              psc010101@tukorea.ac.kr
              <br />
              <br />
              [DM]
              <br />
              @cement__official
            </ContactInquriy>
          </Contact>
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

const InstagramSection = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  width: 100%;
`;

const ContactSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 742px;
  background: rgba(228, 147, 43, 0.16);
`;

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 620px;
`;

const ContactTitle = styled.div`
  color: #000;
  font-size: 48px;
  font-weight: 400;
`;

const ContactQrcode = styled.img`
  width: 200px;
  height: 200px;
`;

const Contact = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: 60%;
`;

const ContactMap = styled.img`
  width: 50%;
  height: 230px;
  background: #fff;
`;

const ContactInquriy = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  padding-left: 50px;

  color: #000;
  font-family: Gmarket Sans;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;