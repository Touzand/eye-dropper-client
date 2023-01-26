import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: auto;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: solid thin #223157;
  padding: 0.5rem;
  font-weight: bold;
  color: whitesmoke;

  .sub-header {
    width: 80vw;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .right {
      display: flex;
      align-items: center;
    }

    .left {
    }
  }

  img {
    width: 40px;
    height: 100%;
  }

  .buttons {
    display: flex;
    gap: 0.5rem;

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 40px;
      padding: 0 1rem;
      border: none;
      font-weight: bold;
      background-color: transparent;
      color: white;
      text-decoration: none;

      &:hover {
        color: var(--rainbow-orange);
        text-decoration: underline;
      }
    }
  }
`;

export const LinkPage = styled.a``;
