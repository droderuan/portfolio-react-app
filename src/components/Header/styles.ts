import styled from 'styled-components';

export const Container = styled.header`
  margin-top: 50px;
  width: 100%;
  min-width: 370px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px 43px;
  position: absolute;
  z-index: 5;

  background: #82a2de;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.35);

  font-family: 'Red Hat Text', sans-serif;
  font-weight: 400;
  font-size: 48px;

  nav {
    width: 100%;
    ul {
      width: 100%;

      display: flex;
      flex-flow: row wrap;

      align-items: center;
      justify-content: space-evenly;

      li {
        list-style: none;
        margin: 0 30px;

        a {
          display: flex;
          flex-direction: column;
          align-items: center;

          color: #fcf8f8;
          text-decoration: none;
          transition: all 500ms;

          hr {
            width: 0;
            opacity: 0;
            transition: width 300ms;
          }
        }

        .active {
          hr {
            width: 100%;
            opacity: 1;
          }
        }
      }
    }
  }
`;
