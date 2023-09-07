import { styled } from 'styled-components';

const ScrollingText = () => {
  return (
    <ScrollingTextContainer>Glorious Moment | CEMENT</ScrollingTextContainer>
  );
};

export default ScrollingText;

const ScrollingTextContainer = styled.div`
  padding-left: 35px;
  padding-right: 35px;

  white-space: nowrap;

  color: #fff;
  text-align: center;
  font-family: Gmarket Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
