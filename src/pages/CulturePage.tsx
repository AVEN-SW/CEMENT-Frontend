import { styled } from 'styled-components';
import FirstGallery from '../components/Culture/FirstGallery';
import SecondGallery from '../components/Culture/SecondGallery';
import ThirdGallery from '../components/Culture/ThirdGallery';

const CulturePage = () => {
  return (
    <CulturePageSection>
      <FlexContainer>
        <CultureTitleContainer>
          <CultureTitle>How We Work</CultureTitle>
        </CultureTitleContainer>
        <CultureGalleryContainer>
          <FirstGallery />
          <SecondGallery />
          <ThirdGallery />
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
  height: 100%;
  margin-top: 100px;
`;

const CultureTitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  margin-right: 70px;
  margin-bottom: 220px;
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
  height: 2900px;
`;





