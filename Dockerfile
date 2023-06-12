# Stage 0, "build-stage", based on Node.js to build the frontend
FROM node:16.19.0-alpine3.17 as build
WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY . /app/
RUN npm run build

# Stage 1, based on NGINX to provide a configuration to be used with react-routerFROM nginx:alpine
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]