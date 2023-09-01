import { styled } from 'styled-components';

const CulturePage = () => {
  return (
    <CulturePageSection>
      <FlexContainer>
        <CultureTitleContainer>
          <CultureTitle>How We Work</CultureTitle>
        </CultureTitleContainer>
        <CultureGalleryContainer>
          <FirstGalleryContainer>
            <FirstGalleryTitle>중요한 것은 실력과 태도</FirstGalleryTitle>
            <FirstGallerySubTitle>
              시멘트에는 직급 체계가 없습니다. <br />
              나이가 아니라 실력과 태도, 의지로 인정받습니다. <br />
              전문성과 영향력을 갖췄다면 누구나 일을 주도할 수 있습니다.
            </FirstGallerySubTitle>
            <FirstGalleryImage
              src="src/assets/first-gallery.png"
              alt="첫 번째 갤러리 이미지"
            />
            <FirstGallerySecondImage
              src="src/assets/first-gallery2.png"
              alt="첫 번째 갤러리 두 번쨰 이미지"
            />
          </FirstGalleryContainer>
          <SecondGalleryContainer>
            <SecondGalleryTitle>자율적으로, 책임감 있게</SecondGalleryTitle>
            <SecondGallerySubTitle>
              각자 집중할 수 있는 시간과 공간을 선택하여 일하며 <br />
              자신이 맡은 일을 책임감 있게 판단하고 실행합니다. <br />
              스스로의 기준을 만족시키고 뛰어넘는 데 집중합니다.
            </SecondGallerySubTitle>
            <SecondGalleryImage
              src="src/assets/second-gallery.png"
              alt="두 번째 갤러리 이미지"
            />
            <SecondGallerySecondImage
              src="src/assets/second-gallery2.png"
              alt="두 번째 갤러리 두 번째 이미지"
            />
          </SecondGalleryContainer>
        </CultureGalleryContainer>
      </FlexContainer>
    </CulturePageSection>
  );
};

export default CulturePage;

const CulturePageSection = styled.div`
  width: 100%;

  padding-top: 117px;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  margin-top: 200px;
`;

const CultureTitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
`;

const CultureTitle = styled.h1`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: 80%;

  color: #5b5b5b;
  font-family: Gmarket Sans;
  font-size: 70px;
  font-weight: 700;
`;

const CultureGalleryContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  width: 100%;
`;

const FirstGalleryContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  position: relative;
  width: 80%;
  height: 800px;
  z-index: -1;
`;

const FirstGalleryTitle = styled.div`
  color: #5b5b5b;
  font-family: NEXONFootballGothicBA1;
  font-size: 60px;
  font-weight: 500;
`;

const FirstGallerySubTitle = styled.div`
  color: #5b5b5b;
  font-family: NEXONFootballGothicBA1;
  font-size: 36px;
  font-weight: 300;
`;

const FirstGalleryImage = styled.img`
  width: 60%;

  object-fit: cover;
`;

const FirstGallerySecondImage = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;

  height: 800px;

  object-fit: cover;
`;

const SecondGalleryContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;

  position: relative;
  width: 80%;
  height: 800px;
  z-index: -1;
`;

const SecondGalleryTitle = styled.div`
  color: #5b5b5b;
  font-family: NEXONFootballGothicBA1;
  font-size: 60px;
  font-weight: 500;
`;

const SecondGallerySubTitle = styled.div`
  color: #5b5b5b;
  font-family: NEXONFootballGothicBA1;
  font-size: 36px;
  font-weight: 300;
  text-align: right;
`;

const SecondGalleryImage = styled.img`
  width: 60%;

  object-fit: cover;
`;

const SecondGallerySecondImage = styled.img`
  position: absolute;
  left: 0;
  top: 0;

  height: 450px;

  object-fit: cover;
`;