import { styled } from "styled-components"

const MainPage = () => {
  return (
    <MainPageSeciton>
        <FlexContainer>
            <MainTitleSection>
                <MainTitle>CEMENT</MainTitle>
                <MainSubTitle>
                    함께하다, 이어지다, 관계를 강화하다
                    <br />
                    두 번째 줄 함께하다, 이어지다, 관계를 강화하다
                </MainSubTitle>
            </MainTitleSection>
        </FlexContainer>
    </MainPageSeciton>  
    )
}

export default MainPage

const MainPageSeciton = styled.div`
    width: 100%;
    height: 1197px;
    
    background: url("./src/assets/main-image.png"), lightgray 50% / cover no-repeat;
`

const FlexContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;
`

const MainTitleSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

const MainTitle = styled.div`
    padding-bottom: 172px;

    font-size: 123px;
    font-weight: 400;
    color: #FFF;
`

const MainSubTitle = styled.div`
    text-align: center;
    font-family: NanumBarunGothicOTF;
    font-size: 28px;
    font-weight: 400;
    color: #FFF;
`