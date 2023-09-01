import { styled } from 'styled-components';

const ThirdGallery = () => {
  return (
    <ThirdGalleryContainer>
      <ThirdGalleryTitle>협력자들과 동료들 앞에 정직하게</ThirdGalleryTitle>
      <ThirdGallerySubTitle>
        시멘트를 신뢰하는 협력자들, 그리고 동료들 앞에 <br />
        당당하게 모든 것을 설명할 수 있도록 시민 의식을 <br />
        가지고 타협 없이 정직하게 일합니다.
      </ThirdGallerySubTitle>
      <ThirdGalleryImage
        src="src/assets/second-gallery.png"
        alt="세 번째 갤러리 이미지"
      />
      <ThirdGallerySecondImage
        src="src/assets/second-gallery2.png"
        alt="세 번째 갤러리 두 번째 이미지"
      />
    </ThirdGalleryContainer>
  );
};

export default ThirdGallery;

const ThirdGalleryContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  position: relative;
  width: 80%;
  height: 820px;
  z-index: -1;
`;

const ThirdGalleryTitle = styled.div`
  color: #5b5b5b;
  font-family: NEXONFootballGothicBA1;
  font-size: 60px;
  font-weight: 500;
`;

const ThirdGallerySubTitle = styled.div`
  color: #5b5b5b;
  font-family: NEXONFootballGothicBA1;
  font-size: 36px;
  font-weight: 300;
`;

const ThirdGalleryImage = styled.img`
  width: 60%;

  object-fit: cover;
`;

const ThirdGallerySecondImage = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;

  width: 40%;

  object-fit: cover;
`;
