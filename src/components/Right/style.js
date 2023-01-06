import styled from "styled-components";

export const Container = styled.div`
  video {
    width: 100%;
    filter:contrast(105%);
  }

  video:nth-child(1){
  }

  h2{
    margin-bottom:4rem;
  }
`;

export const P = styled.p`
  font-style: normal;
  font-weight: unset;
  font-size: var(--font-size-small);
  //line-height: 44px;
`;

export const PContainer = styled.div`
  border:solid thin #737373;
  border-radius:.5rem;
  margin:2rem 0;

  p{
    margin:.5rem 1rem;
  }
`
