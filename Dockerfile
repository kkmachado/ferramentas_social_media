# --- Estágio 1: Build da Aplicação React ---
# Usamos uma imagem Node.js leve para construir o projeto
FROM node:20-alpine as build

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos de dependências
COPY package.json ./

# Instala as dependências de forma otimizada para CI/CD
RUN npm ci

# Copia o restante do código-fonte da aplicação
COPY . .

# Executa o script de build para gerar os arquivos estáticos
RUN npm run build

# --- Estágio 2: Servidor de Produção com Nginx ---
# Usamos uma imagem Nginx leve para servir os arquivos
FROM nginx:stable-alpine as production

# Copia os arquivos estáticos gerados no estágio de build
# para o diretório padrão do Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Copia o arquivo de configuração customizado do Nginx
# para dentro do container
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expõe a porta 80 para permitir o acesso ao servidor web
EXPOSE 80

# Comando para iniciar o servidor Nginx em primeiro plano
CMD ["nginx", "-g", "daemon off;"]
