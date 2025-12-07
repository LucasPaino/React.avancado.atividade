import styled from "styled-components";

// Container principal do card
export const CardContainer = styled.div`
  width: 260px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 12px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.1);

  display: flex;
  flex-direction: column;
  gap: 12px;
`;

// Nome/ título do produto
export const NomeProduto = styled.h3`
  font-size: 18px;
  margin: 0;
  color: #333;
`;

// Preço com destaque
export const PrecoProduto = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin: 0;
  color: #198754;
`;

// Botão com dinâmica de cor via prop
export const Botao = styled.button`
  padding: 10px 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;

  background-color: ${({ adicionado }) =>
    adicionado ? "#198754" : "#6c757d"};
  color: white;

  &:hover {
    opacity: 0.85;
  }
`;