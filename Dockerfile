FROM node:16-alpine as builder

RUN mkdir /build
WORKDIR /build
#COPY package.json /build/

COPY . .
RUN npm install
RUN npm run build
ENV NODE_ENV=production

FROM nginx:1.21-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /build/build /usr/share/nginx/html

