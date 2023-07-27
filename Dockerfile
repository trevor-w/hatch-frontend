FROM node:16.20.1-alpine3.18 as build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:alpine 

COPY --from=build /app/. /usr/share/nginx/html
COPY --from=build /app/public/index.html /usr/share/nginx/html/index.html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]