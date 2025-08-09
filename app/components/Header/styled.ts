import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: ${(props) => props.theme["slate-bg"]};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  padding: 0 2rem;
`;

export const Tittle = styled.h1`
    color: ${(props) => props.theme["red-text"]};
    font-size: medium;
    padding-right: 1rem;
    
    
`