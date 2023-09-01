import { styled } from 'styled-components';

const SecondGallery = () => {
  return (
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
  );
};

export default SecondGallery;

const SecondGalleryContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;

  position: relative;
  width: 80%;
  height: 830px;
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
