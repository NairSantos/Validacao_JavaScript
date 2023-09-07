# README - Formulário de Cadastro

Este repositório contém um formulário de cadastro em HTML e JavaScript. O formulário coleta informações pessoais e de contato, como nome, endereço, RG, CPF, telefone fixo e celular, entre outros.

## Como usar o formulário

1. Clone este repositório em sua máquina local usando o seguinte comando:

   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   ```

2. Abra o arquivo `index.html` em seu navegador para acessar o formulário de cadastro.

## Validação de Dados

O formulário inclui validações de dados para garantir que as informações inseridas sejam corretas. Aqui estão algumas das validações implementadas:

- Todos os campos são obrigatórios. Se algum campo não for preenchido, uma mensagem de alerta será exibida, solicitando que o usuário preencha todos os campos.

- CPF: O campo CPF é validado usando um algoritmo para garantir que seja um CPF válido. O formato aceito é "123.456.789-01".

- RG: O campo RG é validado para garantir que tenha 9 dígitos.

- Telefone Fixo e Celular: Os campos de telefone fixo e celular são validados para seguir o formato "(99) 9999-9999" e "(99) 99999-9999", respectivamente.

## Contribuições

Se você quiser contribuir para este projeto, siga estas etapas:

1. Faça um fork do repositório.

2. Crie uma nova branch com sua alteração:

   ```bash
   git checkout -b minha-alteracao
   ```

3. Faça suas alterações no código.

4. Faça commit das suas alterações:

   ```bash
   git commit -m "Minha alteração"
   ```

5. Faça push das suas alterações para o seu fork:

   ```bash
   git push origin minha-alteracao
   ```

6. Crie um pull request para a branch principal deste repositório.
