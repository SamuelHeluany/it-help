# **🛠️ IT Help**

Uma plataforma moderna para gestão de chamados, suporte e atendimento de TI.

## **📌 Sobre o Projeto**

O **IT Help** é uma aplicação web desenvolvida para simplificar a gestão de chamados de tecnologia, atendimento de tickets e suporte de TI. Construído com **Next.js** e integrado ao **Supabase**, o sistema oferece autenticação segura por senha, interface rápida, responsiva e formulários otimizados para alta performance.

## **🚀 Tecnologias Utilizadas**

O projeto utiliza a seguinte stack de tecnologias:

- **Framework:** [Next.js](https://nextjs.org/?utm_source=gemini) (React)
- **Estilização:** [Tailwind CSS](https://tailwindcss.com/?utm_source=gemini)
- **Componentes UI:** [shadcn/ui](https://ui.shadcn.com/?utm_source=gemini)
- **Gestão de Formulários:** [React Hook Form](https://react-hook-form.com/?utm_source=gemini) (com validação via Zod)
- **Backend & Banco de Dados:** [Supabase](https://supabase.com/?utm_source=gemini)
- **Autenticação:** [Supabase Auth](https://supabase.com/docs/guides/auth?utm_source=gemini) (Password/Email flow)

## **✨ Funcionalidades Principais**

- 🔐 **Autenticação Segura:** Login, cadastro e recuperação de conta com e-mail e senha gerenciados pelo Supabase Auth.
- 📋 **Gestão de Tickets:** Criação, edição, deleção, finalização e acompanhamento de chamados de TI.
- ⚡ **Formulários Performáticos:** Validação client-side e gerenciamento de estado eficiente via React Hook Form.
- 🎨 **Interface Moderna:** Design system construído com Tailwind CSS e componentes shadcn/ui acessíveis e responsivos.

## **⚙️ Pré-requisitos**

Antes de iniciar, certifique-se de ter instalado em sua máquina:

- [Node.js](https://nodejs.org/?utm_source=gemini) (v18 ou superior)
- [npm](https://www.npmjs.com/?utm_source=gemini) ou [pnpm](https://pnpm.io/?utm_source=gemini) / [yarn](https://yarnpkg.com/?utm_source=gemini)
- Uma conta ativa no [Supabase](https://supabase.com/?utm_source=gemini) com um projeto criado.

## **🔧 Configuração e Instalação**

### **1\. Clonar o repositório**

git clone https://github.com/SamuelHeluany/it-help.git  
cd it-help

### **2\. Instalar as dependências**

npm install  
\# ou  
pnpm install  
\# ou  
yarn install

### **3\. Configurar Variáveis de Ambiente**

Crie um arquivo .env.local na raiz do projeto e adicione as chaves de API do seu projeto no Supabase:

NEXT_PUBLIC_SUPABASE_URL=https://seu-projeto.supabase.co  
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua-chave-anon-aqui

### **4\. Executar a aplicação em ambiente de desenvolvimento**

npm run dev  
\# ou  
pnpm dev  
\# ou  
yarn dev

Abra [http://localhost:3000](http://localhost:3000?utm_source=gemini) no seu navegador para ver a aplicação em execução.

## **🤝 Contribuição**

Contribuições são muito bem-vindas\! Se quiser contribuir:

1. Faça um **Fork** deste repositório.
2. Crie uma branch para sua funcionalidade (git checkout \-b feature/sua-feature).
3. Realize os commits das alterações (git commit \-m 'feat: minha nova funcionalidade').
4. Faça o push para a sua branch (git push origin feature/sua-feature).
5. Abra um **Pull Request**.

## **📝 Licença**

Este projeto é mantido sob a licença [MIT](http://docs.google.com/LICENSE).

## **👨‍💻 Autor**

Desenvolvido por Samuel Heluany
