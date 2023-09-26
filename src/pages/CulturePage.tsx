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
  display: flex;
  justify-content: center;

  width: 100%;

  padding: 117px 422px 0 422px;
  margin-bottom: 420px;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  height: 100%;
  margin-top: 100px;
`;

const CultureTitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  margin-bottom: 155px;
`;

const CultureTitle = styled.h1`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: 100%;

  color: #5b5b5b;
  font-family: Gmarket Sans;
  font-size: 60px;
  font-weight: 600;
  letter-spacing: 0.01em;
`;

const CultureGalleryContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 2900px;
`;





