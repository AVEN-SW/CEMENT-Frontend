import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';

interface Props {
  isTeamChanged: boolean;
  setIsTeamChanged: Dispatch<SetStateAction<boolean>>;
}

const TeamChangeButton = ({ isTeamChanged, setIsTeamChanged }: Props) => {
  return (
    <ButtonContainer
      $team={isTeamChanged}
      onClick={() => setIsTeamChanged((prev) => !prev)}
    />
  );
};

export default TeamChangeButton;

const ButtonContainer = styled.button<{
  $team: boolean;
}>`
  width: 125px;
  height: 6px;

  border: unset;
  background: ${(props) =>
    props.$team
      ? '#d9d9d9'
      : 'linear-gradient(270deg, #6A82FB 0%, #FC5C7D 100%)'};
  transition: background 0.4s ease;
`;
