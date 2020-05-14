import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-around;
  padding: 50px 50px;
  position: absolute;
  top: 200px;
  z-index: 5;

  @media all and (max-width: 800px) {
    & {
      top: 350px;
    }
  }

  p {
    max-width: 700px;
    min-width: 350px;

    color: #000;
    font-family: 'Quicksand', sans-serif;
    font-size: 20px;
    line-height: 28px;
    padding: 5px;
  }

  img {
    display: block;
    max-width: 800px;
    max-height: 500px;
    height: 50vh;
  }
`;
