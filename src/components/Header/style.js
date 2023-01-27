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
  background-color:var(--background-color-2);

  .sub-header {
    width: 80vw;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .right {
      display: flex;
      align-items: center;
      gap:.5rem;
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

    .not-found{
    color:grey;
      text-decoration:line-through;
      pointer-events:none;
  }

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
