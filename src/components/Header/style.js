import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: auto;
  width: 100vw;
  display:flex;
  justify-content:center;
  align-items:center;
  border-bottom:solid thin #223157;
  padding:.5rem;;
  font-weight:bold;
  color:whitesmoke;

  .sub-header{
    width:80vw;
    display:flex;
    align-items:center;
    justify-content:center;

    .right{
      display:flex;
      align-items:center;
    }

    .left{
  }
}

  img {
    width: 40px;
    height: 100%;
  }
`;
