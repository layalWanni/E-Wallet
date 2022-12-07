FROM node:16.18.1 
WORKDIR /usr/src/app
COPY . ./
RUN npm install && npm run build
EXPOSE 3000

CMD ["node", "start"]