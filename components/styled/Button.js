import styled from 'styled-components';

const Button = styled.button`
  color: black;
  box-shadow: 0 0 6px 0 rgba(157, 96, 212, 0.5);
  border: solid 3px transparent;
  background-image: linear-gradient(
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0)
    ),
    linear-gradient(to right, #c9d6ff, #e2e2e2);
  background-origin: border-box;
  background-clip: content-box, border-box;
  box-shadow: 2px 1000px 1px #fff inset;
  font-size: 1.2rem;
  width: 100%;
  padding: 1rem;
  text-transform: uppercase;
  font-weight: bold;
  transition: all 0.3s;

  &:hover {
    cursor: pointer;
    box-shadow: none;
  }
`;

export default Button;
