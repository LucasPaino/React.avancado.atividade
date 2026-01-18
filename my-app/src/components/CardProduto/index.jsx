import React, { useState } from "react";
import { Card, NomeProduto, PrecoProduto, BotaoAdicionar } from "./styles";

export const CardProduto = ({ nome, preco }) => {
  const [adicionado, setAdicionado] = useState(false);

  const handleAdicionar = () => setAdicionado(!adicionado);

  return (
    <Card>
      <NomeProduto>{nome}</NomeProduto>
      <PrecoProduto>R$ {preco.toFixed(2)}</PrecoProduto>
      <BotaoAdicionar adicionado={adicionado} onClick={handleAdicionar}>
        {adicionado ? "Adicionado" : "Adicionar ao carrinho"}
      </BotaoAdicionar>
    </Card>
  );
};