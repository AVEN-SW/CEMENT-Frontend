import { styled } from 'styled-components';

const portfolioImages = [
  '/assets/sample.png',
  '/assets/sample.png',
  '/assets/sample.png',
  '/assets/sample.png',
  '/assets/sample.png',
  '/assets/sample.png',
  '/assets/sample.png',
  '/assets/sample.png',
  '/assets/sample.png',
  '/assets/sample.png',
  '/assets/sample.png',
  '/assets/sample.png',
];

const PortfolioPage = () => {
  return (
    <PortfolioPageSection>
      <FlexContainer>
        <PortfolioTitleContainer>
          <PortfolioTitle>Portfolio</PortfolioTitle>
          <PortfolioYear>
            <PrevYear>2022</PrevYear>
            <CurrentYear>2023</CurrentYear>
            <NextYear>2024</NextYear>
          </PortfolioYear>
        </PortfolioTitleContainer>
        <PortfolioGallery>
          {portfolioImages.map((imageSrc, index) => {
            return (
              <PortfolioImage
                key={imageSrc + index}
                src={imageSrc}
                alt={`포트폴리오 이미지` + index}
              />
            );
          })}
        </PortfolioGallery>
      </FlexContainer>
    </PortfolioPageSection>
  );
};

export default PortfolioPage;

const PortfolioPageSection = styled.div`
  width: 100%;

  padding-top: 100px;
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

const PortfolioTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 85%;
  margin-bottom: 140px;
`;

const PortfolioTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  color: #5b5b5b;
  font-family: Gmarket Sans;
  font-size: 80px;
  font-weight: bold;
`;

const PortfolioYear = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PrevYear = styled.div`
  margin-right: 25px;

  color: #5b5b5b5e;
  font-family: Gmarket Sans;
  font-size: 32px;
  font-weight: 300;
`;

const NextYear = styled(PrevYear)`
  margin-left: 25px;
`;

const CurrentYear = styled.div`
  position: relative;
  /* margin: 0 25px 0 25px; */
  color: #5b5b5b;
  font-family: Gmarket Sans;
  font-size: 48px;
  font-weight: 300;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -5px;
    width: 128px;
    height: 3px;
    border-radius: 1.5px;
    background: #e4932b;
  }
`;

const PortfolioGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 137px;
  column-gap: 50px;

  /* width: 90%; */
`;

const PortfolioImage = styled.img`
  width: 375px;
  height: 535px;

  object-fit: cover;
`;
