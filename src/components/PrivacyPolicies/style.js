import styled from 'styled-components'

export const Container = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  text-align:center;

  a {
    text-decoration: none;
    color: var(--rainbow-orange);
    font-weight: bold;
    margin:2rem 0;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 800px) {
  margin:1rem;
  }
`

export const Title = styled.h1`
  font-size: 3rem;
  margin: 2rem 0;
  cursor:default;
  background-color:var(--background-sub);
  padding:1rem;
`;

export const Section = styled.div`
  text-align:left;
  width:min(500px,100%);
`

export const Subtitle = styled.h2`
  margin:.5rem 0;
  background-color:var(--rainbow-orange);
  padding:.25rem;
`

export const P = styled.p`
  margin:.5rem 0;
  font-size:17px;
`
