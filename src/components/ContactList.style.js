import styled from 'styled-components';
export const ContactListUl = styled.ul`
    display: flex;
    flex-direction: column;
    max-width: 380px;
    margin-left: auto;
    margin-right: auto;   
    gap: ${p => p.theme.spasing(3)};  
    margin-top: ${p => p.theme.spasing(2)};      
`;