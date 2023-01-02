import styled from "styled-components";

export const Main = styled.div`
  max-width:1000px;
  margin:auto;
  display:grid;
  align-items:center;
  grid-template-columns:1fr 1fr;
  height:100vh;

  @media(max-width:900px){
  grid-template-columns:1fr;
  }
`
