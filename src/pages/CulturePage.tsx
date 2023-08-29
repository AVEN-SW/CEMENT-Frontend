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
            <FirstGallery />
          </FirstGalleryContainer>
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
  align-items: center;

  width: 80%;
  height: 870px;
`;

const FirstGalleryTitle = styled.h2`
  color: #5b5b5b;
  font-family: NEXONFootballGothicBA1;
  font-size: 64px;
  font-weight: 500;
`;

const FirstGallerySubTitle = styled.div`
  color: #5b5b5b;
  font-family: NEXONFootballGothicBA1;
  font-size: 40px;
  font-weight: 300;
`;

const FirstGallery = styled.img`
  width: 1000px;
  min-height: 565px;

  background:
    url('src/assets/first-gallery.png'),
    lightgray 50% / cover no-repeat;
`;
