import {
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

interface ImageAnimationProps {
  $delay: number;
  $idx: number;
  $isTeamChanged: boolean;
  $animationTrigger: boolean;
}

interface TextAnimationProps extends ImageAnimationProps {
  $aven?: boolean;
}

const cementMemberImages = [
  { src: '/assets/member.png', name: 'CEMENT | 박용준' },
  { src: '/assets/member2.png', name: 'CEMENT | 김현준' },
  { src: '/assets/member3.png', name: 'CEMENT | 이준희' },
  { src: '/assets/member4.png', name: 'CEMENT | 김민엽' },
  { src: '/assets/member5.png', name: 'CEMENT | 백경인' },
  { src: '/assets/member6.png', name: 'CEMENT | 권범수' },
  { src: '/assets/member7.png', name: 'CEMENT | 임서진' },
  { src: '/assets/member8.png', name: 'CEMENT | 김택준' },
  { src: '/assets/member9.png', name: 'CEMENT | 주예은' },
  { src: '/assets/who-is-next.png', name: 'CEMENT | 시멘트' },
];

const celebMemberImages = [
  { src: '/assets/member11.png', name: 'CELEB | 오유민' },
  { src: '/assets/member12.png', name: 'CELEB | 임현우' },
  { src: '/assets/member13.png', name: 'CELEB | 백경인' },
  { src: '/assets/member14.png', name: 'CELEB | 김현준' },
];

const avenMemberImages = [
  { src: '/assets/aven-member.png', name: 'AVEN | 박용준' },
  { src: '/assets/aven-member2.png', name: 'AVEN | 김현준' },
  { src: '/assets/aven-member3.png', name: 'AVEN | 진영' },
  { src: '/assets/aven-member4.png', name: 'AVEN | 강효원' },
  { src: '/assets/aven-member5.png', name: 'AVEN | 권범수' },
  { src: '/assets/aven-member6.png', name: 'AVEN | 한승태' },
  { src: '/assets/aven-member7.png', name: 'AVEN | 주예은' },
  { src: '/assets/aven-member8.png', name: 'AVEN | 김윤기' },
];

const mateMemberImages = [
  { src: '/assets/aven-mate-member.png', name: 'AVEN MATE | 한혜민' },
  { src: '/assets/aven-mate-member2.png', name: 'AVEN MATE | 조재오' },
  { src: '/assets/aven-mate-member3.png', name: 'AVEN MATE | 김민엽' },
  { src: '/assets/aven-mate-member5.png', name: 'AVEN MATE | 김윤기' },
  { src: '/assets/aven-member8.png', name: 'AVEN MATE | 노시원' },
];

export interface PeopleProps {
  animationTrigger: boolean;
  setAnimationTrigger: Dispatch<SetStateAction<boolean>>;
  isTeamChanged: boolean;
  setIsTeamChanged: Dispatch<SetStateAction<boolean>>;
  handleClick: () => {};
  pathname: string;
  CementFirstMembers: ReactNode;
  CementSecondMembers: ReactNode;
  AvenFirstMembers: ReactNode;
  AvenSecondMembers: ReactNode;
}

const RootPeoplePage = () => {
  const [animationTrigger, setAnimationTrigger] = useState(false);
  const [isTeamChanged, setIsTeamChanged] = useState(false);

  const { pathname } = useLocation();
  const navigate = useNavigate();
  console.log(
    `animationTrigger: ${animationTrigger}`,
    `isTeamChanged: ${isTeamChanged}`,
    `pathname: ${pathname}`,
  );

  useEffect(() => {
    if (pathname == '/people/cement' && isTeamChanged && animationTrigger)
      navigate('/people/celebrity');
    else if (
      pathname == '/people/celebrity' &&
      !isTeamChanged &&
      animationTrigger
    ) {
      navigate('/people/cement');
      return;
    } else if (pathname == '/people/aven' && isTeamChanged && animationTrigger)
      navigate('/people/aven-mate');
    else if (
      pathname == '/people/aven-mate' &&
      !isTeamChanged &&
      animationTrigger
    ) {
      navigate('/people/aven');
      return;
    }

    if (
      (pathname == '/people/cement' || pathname == '/people/aven') &&
      isTeamChanged &&
      !animationTrigger
    )
      setIsTeamChanged(false);

    if (pathname == '/people/celebrity') setIsTeamChanged(true);
    else if (pathname == '/people/aven-mate') setIsTeamChanged(true);
  }, [pathname, isTeamChanged, animationTrigger]);

  const handleClick = () => {
    setAnimationTrigger(true);
    setTimeout(
      () => {
        setIsTeamChanged((prev) => !prev);
      },
      isTeamChanged ? 1300 : 2000,
    );
    setTimeout(
      () => {
        setAnimationTrigger(false);
      },
      isTeamChanged ? 1350 : 2050,
    );
  };

  const memberMapping = (
    list: Array<{ src: string; name: string }>,
    second: boolean,
    aven?: boolean,
  ) => {
    return list.map((member, idx) => {
      if (!second && idx != 0 && idx % 2 != 0) return;
      else if (second && (idx == 0 || idx % 2 == 0)) return;
      return (
        <MemberCard key={member.src}>
          <MemberImageContainer>
            <MemberImage
              src={member.src}
              alt={`멤버 프로필 사진 ${idx + 1}`}
              $delay={(idx * 2) / 10}
              $idx={idx}
              $isTeamChanged={isTeamChanged}
              $animationTrigger={animationTrigger}
            />
          </MemberImageContainer>
          <MemberTitle
            $delay={(idx * 2) / 10}
            $idx={idx}
            $isTeamChanged={isTeamChanged}
            $animationTrigger={animationTrigger}
            $aven={aven}
          >
            "자신만의 문구"
          </MemberTitle>
          <MemberName
            $delay={(idx * 2) / 10}
            $idx={idx}
            $isTeamChanged={isTeamChanged}
            $animationTrigger={animationTrigger}
            $aven={aven}
          >
            {member.name}
          </MemberName>
        </MemberCard>
      );
    });
  };

  const CementFirstMembers = memberMapping(
    isTeamChanged ? celebMemberImages : cementMemberImages,
    false,
  );

  const CementSecondMembers = memberMapping(
    isTeamChanged ? celebMemberImages : cementMemberImages,
    true,
  );

  const AvenFirstMembers = memberMapping(
    isTeamChanged ? mateMemberImages : avenMemberImages,
    false,
    true,
  );

  const AvenSecondMembers = memberMapping(
    isTeamChanged ? mateMemberImages : avenMemberImages,
    true,
    true,
  );

  return (
    <Outlet
      context={{
        animationTrigger,
        setAnimationTrigger,
        isTeamChanged,
        setIsTeamChanged,
        handleClick,
        pathname,
        CementFirstMembers,
        CementSecondMembers,
        AvenFirstMembers,
        AvenSecondMembers,
      }}
    />
  );
};

export default RootPeoplePage;

const MemberCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  /* height: 867px; */
  margin-bottom: 110px;
`;

const MemberImageContainer = styled.div`
  overflow-y: hidden;
  margin-bottom: 57px;
`;

const MemberImage = styled.img<ImageAnimationProps>`
  width: 360px;
  border-radius: 18px;

  transform: translateY(678px);

  ${(props) => {
    if (props.$animationTrigger) return 'opacity: 0';
    else return 'transform: translateY(0px); opacity: 1';
  }};

  transition: all ${(props) => (props.$idx > 3 ? '0.2s' : '0.7s')} ease
    ${(props) => props.$delay}s;

  object-fit: cover;
`;

const MemberTitle = styled.div<TextAnimationProps>`
  width: 100%;
  padding-bottom: 34px;

  ${(props) => {
    if (props.$animationTrigger) return 'opacity: 0';
    else return 'opacity: 1';
  }};

  transition: opacity ${(props) => (props.$idx > 3 ? '0.2s' : '0.7s')} ease
    ${(props) => props.$delay}s;

  color: ${(props) => props.$aven && '#fff'};
  font-family: 'NexonFootballGothic-Bold';
  font-size: 55px;
  text-align: left;
`;

const MemberName = styled.div<TextAnimationProps>`
  width: 100%;

  ${(props) => {
    if (props.$animationTrigger) return 'opacity: 0';
    else return 'opacity: 1';
  }};

  transition: opacity ${(props) => (props.$idx > 3 ? '0.2s' : '0.7s')} ease
    ${(props) => props.$delay}s;

  color: ${(props) => props.$aven && '#fff'};
  font-family: NanumGothicOTF;
  font-size: 32px;
  font-weight: 400;
  text-align: left;
`;
