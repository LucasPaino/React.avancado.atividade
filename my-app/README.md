# Todo React Avançado

## Descrição

Aplicação de lista de tarefas (Todo List) desenvolvida com React, utilizando recursos avançados como Hooks, Hooks customizados, Context API e Memoization. O objetivo é demonstrar organização de componentes, reuso de lógica e performance.

## Tecnologias Utilizadas

* React
* Hooks nativos: `useState`, `useEffect`, `useContext`, `useMemo`, `useCallback`
* Hooks customizados: `useLocalStorage`, `useInput`
* Context API para estado global
* React.memo e useMemo para otimização de renderizações
* CSS simples (mobile-first)

## Estrutura do Projeto

```
src/
├─ components/    # Componentes React
├─ context/       # Context API para gerenciar estado global
├─ hooks/         # Hooks customizados
├─ styles/        # Estilos em JS
├─ App.jsx        # Componente principal
├─ main.jsx       # Entrada da aplicação (Vite)
└─ index.css      # Estilos globais

public/
└─ index.html     # HTML principal
```

## Funcionalidades

* Adicionar nova tarefa
* Marcar tarefa como concluída
* Remover tarefas
* Filtrar tarefas (Todas, Concluídas, Pendentes)
* Limpar todas as tarefas
* Persistência no `localStorage`

## Como Rodar o Projeto Localmente

1. Clone o repositório:

```bash
git clone <URL_DO_REPOSITORIO>
cd todo-react-advanced
```

2. Instale as dependências:

```bash
npm install
```

3. Rode a aplicação:

* Para Vite:

```bash
npm run dev
```

* Para CRA:

```bash
npm start
```

4. Abra o navegador no endereço exibido no terminal (normalmente `http://localhost:5173` para Vite ou `http://localhost:3000` para CRA).

## Observações

* A aplicação utiliza Hooks customizados para manipulação de input e persistência em localStorage.
* A Context API gerencia o estado global da lista de tarefas.
* `useMemo` e `React.memo` são utilizados para evitar renderizações desnecessárias.
* Mobile-first: o layout funciona bem em dispositivos móveis.

---

Desenvolvido para fins educativos e demonstração de boas práticas em React.
