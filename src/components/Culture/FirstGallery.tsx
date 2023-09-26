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
          src="/assets/first-gallery.png"
          alt="첫 번째 갤러리 이미지"
        />
      </FirstGalleryTitleContainer>
      <FirstGallerySecondImage
        src="/assets/first-gallery2.png"
        alt="첫 번째 갤러리 두 번째 이미지"
      />
    </FirstGalleryContainer>
  );
};

export default FirstGallery;

const FirstGalleryContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 700px;
`;

const FirstGalleryTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  height: 100%;
  padding-right: 30px;
`;

const FirstGalleryTitle = styled.div`
  color: #5b5b5b;
  font-family: 'LineSeed-Bold';
  font-size: 44px;
`;

const FirstGallerySubTitle = styled.div`
  color: #5b5b5b;
  font-family: 'LineSeed-Regular';
  font-size: 26px;
`;

const FirstGalleryImage = styled.img`
  width: 100%;
  max-height: 50%;

  object-fit: cover;
`;

const FirstGallerySecondImage = styled.img`
  max-height: 100%;

  object-fit: cover;
`;
