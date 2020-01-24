import styled, { css } from 'styled-components';

const LiveButton = styled.button`
  border-radius: 4px;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;

  ${props => props.buttonStyle && css`
    background-color: ${props.buttonStyle.Background.Normal};
    color: ${props.buttonStyle.Text.Normal};
    border: 1px solid ${props.buttonStyle.Border.Normal};

    &:hover {
      background-color: ${props.buttonStyle.Background.Hover};
      color: ${props.buttonStyle.Text.Hover};
      border: 1px solid ${props.buttonStyle.Border.Hover};
    }
  
    &:active {
      background-color: ${props.buttonStyle.Background.Active};
      color: ${props.buttonStyle.Text.Active};
      border: 1px solid ${props.buttonStyle.Border.Active};
    }
  
    &[disabled] {
      background-color: ${props.buttonStyle.Background.Disabled};
      color: ${props.buttonStyle.Text.Disabled};
      border: 1px solid ${props.buttonStyle.Border.Disabled};
      cursor: default;
    }
  `}

  ${props => props.enabled && css`
    background-color: ${props.buttonStyle.Background.Selected};
    color: ${props.buttonStyle.Text.Selected};
    border: 1px solid ${props.buttonStyle.Border.Selected};

    &:hover, &:active {
      background-color: ${props.buttonStyle.Background.Selected};
      color: ${props.buttonStyle.Text.Selected};
      border: 1px solid ${props.buttonStyle.Border.Selected};
    }
  `};
`;

export default LiveButton;
