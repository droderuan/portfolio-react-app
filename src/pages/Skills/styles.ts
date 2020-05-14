import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: space-evenly;
  padding: 0 50px;
  margin-top: 20px;

  position: absolute;
  z-index: 5;
  top: 200px;

  @media all and (max-width: 800px) {
    & {
      top: 350px;
    }
  }
`;
