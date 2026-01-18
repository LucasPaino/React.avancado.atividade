import styled from "styled-components";

export const Card = styled.div`
  width: 250px;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  text-align: center;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const NomeProduto = styled.h2`
  font-size: 1.25rem;
  color: #333;
  margin-bottom: 8px;
`;

export const PrecoProduto = styled.p`
  font-size: 1.1rem;
  color: #555;
  margin-bottom: 16px;
`;

export const BotaoAdicionar = styled.button`
  padding: 8px 16px;
  font-size: 1rem;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: ${props => props.adicionado ? "#198754" : "#6c757d"};
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.9;
  }
`;