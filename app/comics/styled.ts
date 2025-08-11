import styled from "styled-components";

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start; 
  gap: 2rem;
  padding: 2rem 1rem;
  min-height: 80vh;
  width: 100%;
  max-width: 800px;
  margin: 0.4rem auto;

  h1 {
    font-size: 2rem;
    text-align: left;
  }

  p {
    font-size: 1.2rem;
    color: ${({ theme }) => theme["gray-700"]};
  }

  @media (min-width: 600px) {
    padding: 3rem 2rem;
  }
`;


export const BackHomeButton = styled.button`
  background-color: ${({ theme }) => theme["slate-bg"]};
  color: ${({ theme }) => theme.white};
  border: none;
  border-radius: 12px;
  padding: 0.8rem 1.5rem;
  font-weight: 700;
  cursor: pointer;
  margin: 2rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #4f617d;
  }
`;

export const ComicImageStyled = styled.img`
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  max-width: 100%;
  height: auto;
  object-fit: cover;
`;
