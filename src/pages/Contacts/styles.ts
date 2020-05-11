import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 5;
  margin-top: 400px;
  padding: 50px;

  ul {
    display: flex;

    li {
      display: flex;
      align-items: center;
      margin-left: 88px;
      border-radius: 10px;
      padding: 5px;
      transition: box-shadow 300ms ease-in;

      &:hover {
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
      }

      a {
        text-decoration: none;
        display: flex;
        align-items: center;
      }

      p {
        margin-left: 38px;

        color: #000;
        font-family: 'Quicksand', sans-serif;
        font-size: 32px;
      }
    }
  }
`;
