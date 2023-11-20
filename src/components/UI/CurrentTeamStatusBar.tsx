import styled from 'styled-components';

interface Props {
  isTeamChanged: boolean;
  team: boolean;
}

const CurrentTeamStatusBar = ({ isTeamChanged, team }: Props) => {
  return <ButtonContainer $isTeamChanged={isTeamChanged} $team={team} />;
};

export default CurrentTeamStatusBar;

const ButtonContainer = styled.button<{
  $isTeamChanged: boolean;
  $team: boolean;
}>`
  position: relative;

  width: 250px;
  height: 6px;
  background-color: ${(props) => {
    if (props.$team && !props.$isTeamChanged) return '#787878';
    else if (props.$team && props.$isTeamChanged) return '#383838';
    else '#D4D4D4';
  }};

  border: unset;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    width: 125px;
    height: 6px;

    left: ${(props) => (props.$isTeamChanged ? '125px' : '0')};

    background: ${(props) => {
      if (props.$team && !props.$isTeamChanged) return '#2B99FF';
      else if (props.$team && props.$isTeamChanged) return '#fff';
      else if (!props.$team && props.$isTeamChanged) return '#6A82FB';
      else return '#FC5C7D';
    }};
    transition: all 0.7s ease-in-out;
  }
  transition: all 0.7s ease-in-out;
`;
