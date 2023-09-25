import { styled } from 'styled-components';

const ThirdGallery = () => {
  return (
    <ThirdGalleryContainer>
      <ThirdGalleryTitleContainer>
        <ThirdGalleryTitle>팀을 위해 정직하게</ThirdGalleryTitle>
        <ThirdGallerySubTitle>
          시멘트를 신뢰하는 협력자들, 그리고 동료들 앞에
          <br />
          당당하게 모든 것을 설명할 수 있도록 <br />
          시민 의식을 가지고 타협 없이 정직하게 일합니다.
        </ThirdGallerySubTitle>
        <ThirdGalleryImage
          src="/assets//third-gallery.png"
          alt="세 번째 갤러리 이미지"
        />
      </ThirdGalleryTitleContainer>
      <ThirdGallerySecondImageContainer>
        <ThirdGallerySecondImage
          src="/assets//third-gallery2.png"
          alt="세 번째 갤러리 두 번째 이미지"
        />
      </ThirdGallerySecondImageContainer>
    </ThirdGalleryContainer>
  );
};

export default ThirdGallery;

const ThirdGalleryContainer = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
  height: 790px;
`;

const ThirdGalleryTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  width: 60%;
`;

const ThirdGalleryTitle = styled.div`
  color: #5b5b5b;
  font-family: NEXONFootballGothicBA1;
  font-size: 44px;
  font-weight: 500;
`;

const ThirdGallerySubTitle = styled.div`
  color: #5b5b5b;
  font-family: NEXONFootballGothicBA1;
  font-size: 28px;
  font-weight: 300;
`;

const ThirdGalleryImage = styled.img`
  min-width: 100%;
  max-height: 400px;

  object-fit: cover;
`;

const ThirdGallerySecondImageContainer = styled.div`
  display: flex;
  align-items: flex-end;

  height: 100%;
`;

const ThirdGallerySecondImage = styled.img`
  height: 60%;

  object-fit: cover;
`;
