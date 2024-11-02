# Board de Tarefas

## <img src="https://img.icons8.com/?size=100&id=1671&format=png&color=228BE6" alt="decricao" width="25" height="25"> Descrição

O "Board de Tarefas" é um aplicativo web simples que permite aos usuários gerenciar suas tarefas diárias. Com uma interface intuitiva, você pode adicionar, concluir e excluir tarefas, além de visualizar o progresso de suas atividades.

## <img src="https://img.icons8.com/?size=100&id=y02GsEUoNUaD&format=png&color=228BE6" alt="funcionalidades" width="28" height="28"> Funcionalidades

- **Adicionar Tarefas**: Insira o nome e a etiqueta de uma nova tarefa.
- **Concluir Tarefas**: Marque uma tarefa como concluída, o que a moverá para o final da lista.
- **Excluir Tarefas**: Remova tarefas que não são mais necessárias.
- **Undo**: Reverter a conclusão de uma tarefa.
- **Visualização do Progresso**: O rodapé exibe quantas tarefas foram concluídas.

## <img src="https://img.icons8.com/?size=100&id=q99ptngw0Bes&format=png&color=228BE6" alt="tecnologiasUtilizadas" width="29" height="29"> Tecnologias Utilizadas

O projeto utiliza as seguintes tecnologias:

- **HTML**: Estrutura da página.

- **CSS**: Estilização da interface.

- **JavaScript**: Lógica de interação e manipulação do DOM.

## <img src="https://img.icons8.com/?size=100&id=11232&format=png&color=228BE6" alt="estruturaDoProjeto" width="32" height="32"> Estrutura do Projeto

### <img src="https://img.icons8.com/?size=100&id=20909&format=png&color=000000" alt="HTML Logo" width="20" height="20"> HTML

A estrutura HTML foi construída para proporcionar uma base clara e semântica para o aplicativo. Abaixo estão os principais componentes:

- **Div Principal**: Um contêiner (`board-container`) que abriga todos os elementos do board.
- **Inputs de Tarefa**: Campos de entrada para o nome e etiqueta da tarefa, juntamente com um botão para adicionar a tarefa.
- **Lista de Tarefas**: Uma lista (`ul`) que contém os itens de tarefa, permitindo a adição dinâmica de tarefas.
- **Rodapé**: Uma área para exibir o número de tarefas concluídas.

### <img src="https://img.icons8.com/?size=100&id=7gdY5qNXaKC0&format=png&color=000000" alt="CSS Logo" width="20" height="20"> CSS

A estilização foi feita para criar uma interface amigável e responsiva:

- **Layout Flexível**: Utilização de flexbox para organizar os elementos do board, garantindo que o layout se adapte a diferentes tamanhos de tela.
- **Temas de Cores**: Cores suaves e uma paleta de cores consistente para uma aparência agradável.
- **Responsividade**: A responsividade é um foco central, utilizando **media queries** para garantir que o aplicativo funcione bem em dispositivos móveis, tablets e desktops. 
  - **Telas Menores**: Em smartphones, a interface é otimizada para que os campos de entrada e botões sejam de fácil acesso, evitando sobreposição.
  - **Telas Intermediárias**: Para tablets, os elementos são reorganizados para facilitar a interação, permitindo uma experiência de uso mais fluida.
  - **Telas Maiores**: Em desktops, o layout se expande, permitindo uma visualização clara e abrangente das tarefas, com melhor uso do espaço disponível.

### <img src="https://img.icons8.com/?size=100&id=108784&format=png&color=000000" alt="JavaScript Logo" width="20" height="20"> JavaScript

A lógica de interação foi implementada usando JavaScript, permitindo uma experiência de usuário dinâmica e responsiva:

- **Manipulação do DOM**: A interação com a lista de tarefas é feita através da manipulação do DOM, onde novas tarefas são adicionadas dinamicamente. As funções `addTask`, `completeTask`, `undoTask` e `deleteTask` controlam a criação e modificação dos elementos HTML.
- **Função `addTask`**: Quando uma nova tarefa é adicionada, a função cria um novo item de lista (`li`), preenchendo suas informações com o nome da tarefa, etiqueta e data de criação. Essa função também atualiza automaticamente o rodapé para refletir o total de tarefas concluídas.
- **Conclusão e Desfazimento**: As funções de conclusão e desfazimento alteram a classe do item de tarefa, permitindo a estilização visual de tarefas concluídas e adicionando/removendo botões dinamicamente.
- **Atualização do Rodapé**: A função `updateFooter` é chamada sempre que uma tarefa é concluída ou excluída, garantindo que o número total de tarefas concluídas seja sempre exibido corretamente.
- **Organização das Tarefas**: Tarefas concluídas são automaticamente movidas para o final da lista, mantendo uma organização visual que prioriza as tarefas pendentes.

## <img src="https://img.icons8.com/?size=100&id=48365&format=png&color=228BE6" alt="comoUsar Logo" width="30" height="30"> Como Usar

1. **Clone o repositório**:
   ```bash
   git clone <URL do repositório>
   cd board-de-tarefas
   ```

2. **Abra o arquivo HTML**:
   - Abra `index.html` em seu navegador.

3. **Adicione tarefas**:
   - Preencha os campos "Nome da tarefa" e "Etiqueta" e clique no botão "+" para adicionar.

4. **Gerencie suas tarefas**:
   - Clique em "Concluir" para marcar uma tarefa como feita.
   - Use "−" para deletar uma tarefa.
   - Clique em "Desfazer" para reverter uma tarefa concluída.

## <img src="https://img.icons8.com/?size=100&id=lBuqhXfGV2RT&format=png&color=228BE6" alt="personalizacao" width="29" height="29"> Personalização

Você pode personalizar o estilo do board editando o arquivo `styles.css` para se adequar ao seu gosto.

## <img src="https://img.icons8.com/?size=100&id=24761&format=png&color=228BE6" alt="contribuicoes" width="30" height="30"> Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir um pull request ou reportar problemas.

## <img src="https://img.icons8.com/?size=100&id=mEG1R2bTp2RI&format=png&color=228BE6" alt="acesse" width="30" height="30"> Acesse

Você pode acessar o aplicativo através da página hospedada: [Board de Tarefas](https://boarddetarefas.netlify.app/).

Nesta versão online, você poderá interagir com todas as funcionalidades do board de tarefas, como adicionar, concluir e excluir tarefas. Aproveite para explorar e ver como a responsividade se adapta a diferentes tamanhos de tela!

## <img src="https://img.icons8.com/?size=100&id=48948&format=png&color=228BE6" alt="contato" width="30" height="30"> Contato

<img src="https://img.icons8.com/?size=100&id=P7UIlhbpWzZm&format=png&color=000000" alt="email" width="20" height="20"> victorbarretodp@gmail.com <br/>
<img src="https://img.icons8.com/?size=100&id=16713&format=png&color=000000" alt="celular" width="20" height="20"> <a href="https://wa.me/5519965193988">(21) 96519-3988</a>
