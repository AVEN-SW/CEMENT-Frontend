import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';

interface Props {
  isTeamChanged: boolean;
  setIsTeamChanged: Dispatch<SetStateAction<boolean>>;
  left?: boolean;
}

const CurrentTeamStatusBar = ({
  isTeamChanged,
  setIsTeamChanged,
  left,
}: Props) => {
  return (
    <ButtonContainer
      $team={isTeamChanged}
      $left={left}
      onClick={() => setIsTeamChanged((prev) => !prev)}
    />
  );
};

export default CurrentTeamStatusBar;

const ButtonContainer = styled.button<{
  $team: boolean;
  $left?: boolean;
}>`
  width: 125px;
  height: 6px;

  border: unset;
  background: ${(props) => {
    if (props.$team && !props.$left) return '#6A82FB';
    else if (!props.$team && props.$left) return '#FC5C7D';
    else return '#D4D4D4';
  }};
  transition: background 0.4s ease;
`;
