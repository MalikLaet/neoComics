# Use uma imagem oficial do Node.js como base
FROM node:18-alpine

# Diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos package.json e package-lock.json (ou yarn.lock)
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia todo o restante do código para dentro do container
COPY . .

# Constroi o app Next.js para produção
RUN npm run build

# Exponha a porta que o Next.js usa
EXPOSE 3000

# Comando para rodar o app em modo produção
CMD ["npm", "start"]
