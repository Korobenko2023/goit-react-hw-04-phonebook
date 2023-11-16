import styled from 'styled-components';
export const FilterDiv = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin-right: auto;
  margin-left: auto;
`;

export const FilterLabel = styled.label`
    display: flex;
    flex-direction: column;
    max-width: 400px;
    margin-top: ${p => p.theme.spasing(4)}; 
`;

export const FilterInput = styled.input`  
  width: 100%;
  border-radius: 8px;
  outline: none;
  border: 1px solid ${p => p.theme.colors.Indigo};  
  margin-bottom: ${p => p.theme.spasing(1)};
  padding:${p => p.theme.spasing(1)};  
`;