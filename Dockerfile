# --- Estágio 1: Build da Aplicação React ---
# Usamos uma imagem Node.js leve e segura para construir o projeto
FROM node:20-alpine as build

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos de definição de pacotes e o lockfile
# O '*' garante que tanto package.json quanto package-lock.json sejam copiados
COPY package*.json ./

# Instala as dependências de forma rápida e determinística usando o lockfile
# Isso corrige o erro que você estava vendo no log do Easypanel
RUN npm ci

# Copia o restante do código-fonte da aplicação
COPY . .

# Executa o script de build para gerar os arquivos estáticos de produção
RUN npm run build

# --- Estágio 2: Servidor de Produção com Nginx ---
# Usamos uma imagem Nginx super leve para servir os arquivos
FROM nginx:stable-alpine as production

# Copia os arquivos estáticos gerados no estágio de build
# para o diretório padrão do Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Copia o arquivo de configuração customizado do Nginx
# para dentro do container, substituindo o padrão
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expõe a porta 80 para permitir o acesso ao servidor web
EXPOSE 80

# Comando para iniciar o servidor Nginx em primeiro plano (necessário para containers)
CMD ["nginx", "-g", "daemon off;"]
