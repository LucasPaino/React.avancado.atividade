import { useState } from "react";
import { CardContainer, NomeProduto, PrecoProduto, Botao } from "./styles";

export default function CardProduto() {
  const [adicionado, setAdicionado] = useState(false);

  function handleAdicionar() {
    setAdicionado(!adicionado);
  }

  return (
    <CardContainer>
      <NomeProduto>Notebook Gamer</NomeProduto>
      <PrecoProduto>R$ 5.299,00</PrecoProduto>

      <Botao adicionado={adicionado} onClick={handleAdicionar}>
        {adicionado ? "Adicionado!" : "Adicionar ao carrinho"}
      </Botao>
    </CardContainer>
  );
}