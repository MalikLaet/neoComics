import styled from "styled-components";

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  padding: 2rem 1rem;
  min-height: 80vh;
  

  h1 {
    font-size: 2rem;
    margin-bottom: 2rem;
    color: ${({ theme }) => theme['red-text']};
  }

  @media (min-width: 600px) {
    padding: 3rem 2rem;
  }
`;

export const InfoCard = styled.div`
  background-color: ${({ theme }) => theme['gray-100']};
  border-radius: 16px;
  padding: 1.5rem;
  margin-bottom: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  width: 100%;
  max-width: 600px;

  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0,0,0,0.15);
  }

  @media (min-width: 600px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 2rem;
  }
`;

export const TitleCard = styled.h3`
  flex: 1;
  font-weight: 700;
  font-size: 1.2rem;
  color: ${({ theme }) => theme['gray-900']};
  text-align: center;

  @media (min-width: 600px) {
    text-align: left;
  }
`;

export const ComicImage = styled.img`
  border-radius: 12px;
  width: 150px;
  height: 200px;
  object-fit: cover;
  box-shadow: 0 2px 6px rgba(0,0,0,0.15);
`;

export const ButtonRemove = styled.button`
  background-color: ${({ theme }) => theme["red-text"]};
  border: none;
  border-radius: 24px;
  padding: 0.75rem 1.2rem;
  color: white;
  font-weight: 700;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #d12a2f;
  }
`;

export const PriceCard = styled.p`
  font-weight: bold;
  font-size: 1rem;
  color: ${({ theme }) => theme['gray-700']};
  margin-top: 0.5rem;
  
  @media (min-width: 600px) {
    font-size: 1.4rem;
    margin-top: 0;
  }
`;

export const CartSummary = styled.div`
  width: 100%;
  max-width: 600px;
  background: ${({ theme }) => theme['gray-100']};
  border-radius: 16px;
  padding: 1.5rem;
  margin-bottom: 4rem;
  margin-top: 2rem;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
`;

export const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 700;
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

export const QuantityControls = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const QuantityButton = styled.button`
  background-color: ${({ theme }) => theme['green-button']};
  border: none;
  color: white;
  padding: 0.3rem 0.7rem;
  font-weight: 700;
  border-radius: 6px;
  cursor: pointer;
  user-select: none;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #00a43a;
  }
`;

export const QuantityNumber = styled.span`
  min-width: 30px;
  text-align: center;
  font-weight: 600;
  font-size: 1.1rem;
`;

export const BackHomeButton = styled.button`
  background-color: ${({ theme }) => theme['slate-bg']};
  color: ${({ theme }) => theme.white};
  border: none;
  border-radius: 12px;
  padding: 0.8rem 1.5rem;
  font-weight: 700;
  cursor: pointer;
  margin-top: 2rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #4f617d;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  flex: 1;
  gap: 0.75rem;
`;