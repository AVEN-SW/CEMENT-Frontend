import styled from 'styled-components';

interface Props {
  isTeamChanged: boolean;
}

const CurrentTeamStatusBar = ({ isTeamChanged }: Props) => {
  return <ButtonContainer $team={isTeamChanged} />;
};

export default CurrentTeamStatusBar;

const ButtonContainer = styled.button<{
  $team: boolean;
}>`
  position: relative;

  width: 250px;
  height: 6px;
  background-color: #d4d4d4;

  border: unset;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    width: 125px;
    height: 6px;

    left: ${(props) => (props.$team ? '125px' : '0')};

    background: ${(props) => {
      if (props.$team) return '#6A82FB';
      else return '#FC5C7D';
    }};

    transition: all 0.7s ease-in-out;
  }
`;
