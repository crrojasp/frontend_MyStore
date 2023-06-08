import styled,{createGlobalStyle} from'styled-components';
const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
  margin: 0;
  padding: 0;
  }
`;
export const Container = styled.div`
    width: 100%;
    padding: 0 30px;
    margin-right: auto;
    margin-left: auto;
    max-width: 1200px;
   
    @media screen and (max-width: 960px) {
        padding: 0 30px;
    }
`;
export const MainHeading = styled.h1`
`;
export default GlobalStyle;
