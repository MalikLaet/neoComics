import styled from "styled-components";

export const MainContainer = styled.main`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`

export const InfoCard = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;
    gap: 2rem;
`

export const ButtonRemove = styled.button`
     background-color: ${(props) => props.theme["red-text"]};
     border: none;
     border-radius:24px;
     padding:1rem;
`

export const PriceCard = styled.p`
  font-weight: bold;
  @media (min-width: 600px) {
    font-size: 1.4rem;
  }
`;