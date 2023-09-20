import { styled } from 'styled-components';

const SecondGallery = () => {
  return (
    <SecondGalleryContainer>
      <SecondGalleryTitle>자율적으로, 책임감 있게</SecondGalleryTitle>
      <SecondGalleryContents>
        <SecondGallerySecondImage
          src="src/assets/second-gallery.png"
          alt="두 번째 갤러리 두 번째 이미지"
        />
        <SecondGallerySubTitleContainer>
          <SecondGallerySubTitle>
            각자 집중할 수 있는 시간과 공간을 선택하여 일하며 <br />
            자신이 맡은 일을 책임감 있게 판단하고 실행합니다. <br />
            스스로의 기준을 만족시키고 뛰어넘는 데 집중합니다.
          </SecondGallerySubTitle>
          <SecondGalleryImage
            src="src/assets/second-gallery2.png"
            alt="두 번째 갤러리 이미지"
          />
        </SecondGallerySubTitleContainer>
      </SecondGalleryContents>
    </SecondGalleryContainer>
  );
};

export default SecondGallery;

const SecondGalleryContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  width: 100%;
  height: 750px;
`;

const SecondGalleryTitle = styled.div`
  text-align: right;

  width: 100%;

  color: #5b5b5b;
  font-family: NEXONFootballGothicBA1;
  font-size: 44px;
  font-weight: 500;
`;

const SecondGalleryContents = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  width: 100%;
`;

const SecondGallerySubTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;

  width: 60%;
`;

const SecondGallerySubTitle = styled.div`
  margin-bottom: 15%;

  color: #5b5b5b;
  font-family: NEXONFootballGothicBA1;
  font-size: 28px;
  font-weight: 300;
  text-align: right;
`;

const SecondGalleryImage = styled.img`
  width: 100%;
  max-height: 50%;

  object-fit: cover;
`;

const SecondGallerySecondImage = styled.img`
  max-height: 60%;

  object-fit: cover;
`;
