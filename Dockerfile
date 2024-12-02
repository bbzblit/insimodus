FROM node:18-bookworm as build-stage

RUN mkdir -p /workdir

WORKDIR /workdir

COPY . .

RUN npm i

RUN npm run build

FROM ubuntu:24.10

LABEL service="insimodus"

# Install Nginx
RUN apt-get -y update\
  && apt-get -y install nginx git curl --no-install-recommends\
  && rm -rf /var/lib/apt/lists/*

COPY --from=build-stage /workdir/dist/ /usr/share/nginx/html

COPY ./nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 3000/tcp

CMD ["/usr/sbin/nginx", "-g", "daemon off;"]
