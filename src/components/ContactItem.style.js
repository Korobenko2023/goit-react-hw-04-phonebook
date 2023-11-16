import styled from 'styled-components';
export const ContactItemLi = styled.li`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
`;

export const ContactItemButton = styled.button`
  width: 60px;   
  padding: ${p => p.theme.spasing(1)}  ${p => p.theme.spasing(1)}; 
  background-color: ${p => p.theme.background.Tomato};   
  border-radius: 8px;
  border: 1px solid ${p => p.theme.colors.Indigo};    
  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
  background-color: ${p => p.theme.background.blue};  
}   
`;