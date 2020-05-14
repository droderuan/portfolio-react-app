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
    flex-flow: row wrap;
    list-style: none;

    li {
      border-radius: 10px;
      margin: 0 20px;
      padding: 5px;
      transition: box-shadow 300ms ease-in;

      &:hover {
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
      }

      a {
        text-decoration: none;
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        justify-content: center;


      p {
        margin: 38px;

        color: #000;
        font-family: 'Quicksand', sans-serif;
        font-size: min(max(24px, 4vw), 18px);
      }
    }
  }
`;
