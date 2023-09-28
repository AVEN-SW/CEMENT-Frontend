import { styled } from 'styled-components';
import Map from '../components/Maps/Map';

const instagramFeed = [
  '/assets//instagram.png',
  '/assets//instagram2.png',
  '/assets//instagram3.png',
  '/assets//instagram4.png',
  '/assets//instagram5.png',
  '/assets//instagram6.png',
  '/assets//instagram7.png',
  '/assets//instagram8.png',
  '/assets//instagram9.png',
  '/assets//instagram10.png',
  '/assets//instagram11.png',
  '/assets//instagram12.png',
  '/assets//instagram13.png',
  '/assets//instagram14.png',
  '/assets//instagram15.png',
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
        <SloganTitle></SloganTitle>
        <Slogan>“모두가 좋아하는 팀"</Slogan>
        <SloganDescription></SloganDescription>
      </SloganSection>
      <PortfolioSection>
        <PortfolioContainer>
          <PortfolioTitle>PORTFOLIO</PortfolioTitle>
          <PortfolioImages>
            <PortfolioImage
              src=".//assets//main-sample.png"
              alt="포트폴리오 이미지"
            />
            <PortfolioImage
              src=".//assets//main-sample.png"
              alt="포트폴리오 이미지"
            />
            <PortfolioImage
              src=".//assets//main-sample.png"
              alt="포트폴리오 이미지"
            />
            <PortfolioImage
              src=".//assets//main-sample.png"
              alt="포트폴리오 이미지"
            />
            <PortfolioSignature>Signature</PortfolioSignature>
          </PortfolioImages>
        </PortfolioContainer>
      </PortfolioSection>
      <InstagramSection>
        {instagramFeed.map((thumbnail, index) => {
          return (
            <img
              key={thumbnail + index}
              src={thumbnail}
              alt={`인스타그램 피드 ${index + 1}`}
            />
          );
        })}
      </InstagramSection>
      <ContactSection>
        <ContactContainer>
          <ContactTitle>CONTACT</ContactTitle>
          <ContactQrcode src="/assets//qr-code.svg" alt="qr코드" />
          <Contact>
            <ContactMap>
              <Map />
            </ContactMap>
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

  width: 100%;
  padding-top: 500px;
  padding-bottom: 332px;

  background: url('/assets/main-image.png');
  background-size: cover;
  background-repeat: no-repeat;
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
  padding-top: 243px;
  padding-bottom: 243px;
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

  font-family: 'LineSeed-Bold';
  font-size: 90px;
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

const ContactMap = styled.div`
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
