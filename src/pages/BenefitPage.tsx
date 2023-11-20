import { styled } from 'styled-components';

const BenefitPage = () => {
  return (
    <BenefitPageSection>
      <FlexContainer>
        <BenefitTitleContainer>
          <BenefitTitle>Benefits</BenefitTitle>
        </BenefitTitleContainer>
      </FlexContainer>
    </BenefitPageSection>
  );
};

export default BenefitPage;

const BenefitPageSection = styled.div`
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

const BenefitTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 80%;
  margin-bottom: 140px;
`;

const BenefitTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  color: #5b5b5b;
  font-family: Gmarket Sans;
  font-size: 80px;
  font-weight: bold;
`;
