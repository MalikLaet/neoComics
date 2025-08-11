import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: ${(props) => props.theme["slate-bg"]};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  padding: 1rem 2rem;
`;

export const Tittle = styled.h1`
  color: ${(props) => props.theme["red-text"]};
  font-weight: 700;
  font-size: 1.1rem;
  padding-right: 1rem;

  @media (min-width: 600px) {
    font-size: 1.5rem;
  }

  @media (min-width: 1024px) {
    font-size: 2rem;
  }
`;

export const SearchWrapper = styled.div`
  flex-grow: 1;
  max-width: 400px;

  display: flex;
  align-items: center;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 6px 10px;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 0.9rem;

  @media (min-width: 600px) {
    font-size: 1.1rem;
    padding: 8px 12px;
  }

  @media (min-width: 1024px) {
    font-size: 1.2rem;
    padding: 10px 15px;
  }
`;

export const QuantifyCart = styled.span`
  background-color: red;
  color: white;
  border-radius: 50%;
  padding: 2px 6px;
  font-size: 0.75rem;
`;
