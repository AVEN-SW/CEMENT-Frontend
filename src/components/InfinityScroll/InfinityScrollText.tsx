import { keyframes, styled } from 'styled-components';
import ScrollingText from './ScrollingText';

const infinityAnimation = keyframes`
    0% {
        transform: translateX(0%);
    }
    50% {
        transform: translateX(-100%);
    }
    50.01% {
        transform: translateX(100%);
    }
    100% {
        transform: translateX(0%);
    }
`;

const cloneInfinityAnimation = keyframes`
    0% {
        transform: translateX(0%);
    }
    100% {
        transform: translateX(-200%);
    }
`;

const InfinityScrollText = () => {
  return (
    <InfinityScrollTextContainer>
      <TextWrapper>
        <OriginScrollText>
          <ScrollingText />
          <ScrollingText />
          <ScrollingText />
          <ScrollingText />
          <ScrollingText />
          <ScrollingText />
        </OriginScrollText>
        <CloneScrollText>
          <ScrollingText />
          <ScrollingText />
          <ScrollingText />
          <ScrollingText />
          <ScrollingText />
          <ScrollingText />
        </CloneScrollText>
      </TextWrapper>
    </InfinityScrollTextContainer>
  );
};

export default InfinityScrollText;

const InfinityScrollTextContainer = styled.div`
  overflow-x: hidden;
  position: fixed;
  top: 0;
  width: 100%;
  height: 35px;
  background: #e4932b;
  z-index: 1001;
`;

const TextWrapper = styled.div`
  display: flex;

  height: 100%;
`;

const OriginScrollText = styled.div`
  display: flex;
  align-items: center;

  animation: ${infinityAnimation} 40s linear infinite;
`;

const CloneScrollText = styled(OriginScrollText)`
  animation: ${cloneInfinityAnimation} 40s linear infinite;
`;
