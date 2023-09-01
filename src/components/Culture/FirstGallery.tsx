import { styled } from 'styled-components';

const FirstGallery = () => {
  return (
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
  );
};

export default FirstGallery;

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
