import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  a {
    text-decoration: none;
    color: var(--rainbow-orange);
    font-weight: bold;
    margin: 2rem 0;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 800px) {
    margin: 0 1rem;
  }
`;

export const Title = styled.h1`
  font-size: 3rem;
  margin: 2rem 0;
  cursor: default;
  background-color: var(--background-sub);
  padding: 1rem;
`;

export const Section = styled.div`
  text-align: left;
  width: min(500px, 100%);
`;

export const Subtitle = styled.h2`
  margin: 0.5rem 0;
  background-color: var(--rainbow-orange);
  padding: 0.25rem;
`;

export const P = styled.p`
  margin: 0.5rem 0;
  font-size: 17px;
`;

export const LinkGeneralContainer = styled.div`
  width: 100vw;
  background-color: var(--background-color-2);
  display: flex;
  justify-content: center;
  align-items: center;

  .sub-links {
    padding:1rem;

    a{
    margin:0;
  }

    display:flex;
    flex-direction:column;
    gap:.5rem;
  }

  @media (min-width: 800px) {
    width: 100vw;
    height: 150px;
    background-color: #1a1e2b;
    display: flex;
    justify-content: center;
    align-items: center;

    .sub-links {
      display: flex;
      flex-direction:row;
      gap: 1rem;
    }
  }
`;

export const LinkContainer = styled.div`
  color: var(--text-color);
  background-color: #0005;
  padding: 1rem;
  border-radius: 0.5rem;
  text-align: center;
  display: flex;
  align-items: center;
  text-align: left;
  width: 300px;
  height: 100%;
  //margin-bottom: 1rem;

  &:hover {
    color: var(--rainbow-orange);
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    span {
      font-weight: bold;
    }
  }

  svg {
    width: 3rem;
    height: 3rem;
    margin-right: 1rem;
  }

  @media (min-width: 800px) {
  }
`;

export const MadeBy = styled.p`
  margin:1rem;

  a {
    text-decoration: none;
    color: var(--rainbow-orange);
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
`;
