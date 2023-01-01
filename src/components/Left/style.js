import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TopHeader = styled.div`
  height: 30px;
  display: flex;
  align-items: center;

  .top-header-logo {
    width: auto;
    height: 200%;
    margin-right: 1rem;
  }

  .to-github {
    display: flex;
    justify-content: center;
    align-items: center;
      background-color:#16223F;
    padding: 0.5rem;
    border-radius: 0.25rem;
    height: 20px;
    color: var(--text-color);
    text-decoration: none;
    position: relative;
    transition: top ease 0.3s;

    svg {
      margin-left: 0.5rem;
    }

    img {
      width: auto;
      height: 100%;
      margin-left: 1rem;
    }

    &:hover {
      bottom: 2px;
    background-color: var(--background-sub);
    }
  }
`;

export const Title = styled.h1`
  span:nth-child(1) {
    color: green;
  }

  span:nth-child(2) {
    color: yellow;
  }
`;

export const Quote = styled.span`
  color: yellow;
`;

export const ChromeStoreButton = styled.button`
  color: red;
`;
