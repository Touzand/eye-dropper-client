import styled , {keyframes} from "styled-components";

export const Container = styled.div`
  video {
    width: 100%;
    filter:contrast(105%);
  }

  video:nth-child(1){
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
    padding:.5rem 1rem;
  }

  p:nth-child(even){
    background-color:#0005;
  }
`
const Rainbow = keyframes`
  0%{color:var(--rainbow-orange);}
  10%{color:var(--rainbow-orange-2);}
  20%{color:var(--rainbow-green);}
  30%{color:var(--rainbow-green-2);}
  40%{color:var(--rainbow-blue);}
  50%{color:var(--rainbow-blue-2);}
  60%{color:var(--rainbow-purple);}
  70%{color:var(--rainbow-blue);}
  80%{color:var(--rainbow-blue-2);}
  90%{color:var(--rainbow-green-2);}
  100%{color:var(--rainbow-orange);}
`


export const InstallIt = styled.h2`

  span{
    animation:${Rainbow} 10s ease-in infinite both;
    text-decoration:underline;
  }
`

export const LinkContainer = styled.div`
  color:var(--text-color);
  background-color:#0005;
  padding:1rem;
  margin: 1rem 0;
  border-radius:.5rem;
  text-align:center;
  display:flex;
  align-items:center;
  text-align:left;

  &:hover{
  color:var(--rainbow-orange);
  }

  div{
    display:flex;
    flex-direction:column;
    gap:.5rem;

    span{
      font-weight:bold;
  }
  }

  svg{
    width:3rem;
    height:3rem;
    margin-right:1rem;
  }

`
