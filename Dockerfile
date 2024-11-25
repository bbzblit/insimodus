FROM node:18-bookworm as build-stage

RUN mkdir -p /workdir

WORKDIR /workdir

COPY . .

RUN npm i

RUN npm run build

FROM nginx:1.27.2-alpine

LABEL service="insimodus"

COPY --from=build-stage /workdir/dist/ /usr/share/nginx/html

COPY ./nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 3000/tcp
