import { styled } from 'styled-components';

const FirstGallery = () => {
  return (
    <FirstGalleryContainer>
      <FirstGalleryTitleContainer>
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
      </FirstGalleryTitleContainer>
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
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 700px;
`;

const FirstGalleryTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  width: 60%;
  height: 100%;
`;

const FirstGalleryTitle = styled.div`
  color: #5b5b5b;
  font-family: NEXONFootballGothicBA1;
  font-size: 44px;
  font-weight: 500;
`;

const FirstGallerySubTitle = styled.div`
  color: #5b5b5b;
  font-family: NEXONFootballGothicBA1;
  font-size: 28px;
  font-weight: 300;
`;

const FirstGalleryImage = styled.img`
  width: 100%;
  max-height: 50%;

  border-top: 1px solid black;
  border-bottom: 1px solid black;

  object-fit: cover;
`;

const FirstGallerySecondImage = styled.img`
  max-height: 100%;

  object-fit: cover;
`;
