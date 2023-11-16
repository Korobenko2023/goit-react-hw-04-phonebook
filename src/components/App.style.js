import styled from 'styled-components';
export const AppContainer = styled.div`
  width: 600px;
  margin-left: auto ;
  margin-right:auto;
  margin-top: ${p => p.theme.spasing(10)};
  margin-bottom: ${p => p.theme.spasing(10)};
  border-radius: ${p => p.theme.radii.md};  
  padding: ${p => p.theme.spasing(4)};
  background-color: ${p => p.theme.background.lightBlue};
  border: 0.5px solid ${p => p.theme.colors.violet};   
`;

export const AppTitle = styled.h1`
margin-top: ${p => p.theme.spasing(6)};
text-align: center;
`;

export const AppTitleContact = styled.h2`
margin-top: ${p => p.theme.spasing(6)};
text-align: center;
`;