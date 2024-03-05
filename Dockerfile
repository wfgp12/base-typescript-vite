FROM node:18.16.1-alpine AS builder
WORKDIR /usr
COPY . .
RUN yarn install
RUN yarn run build

FROM nginx:stable-alpine
COPY nginx/default.conf /etc/nginx/conf.d/
COPY --from=builder /usr/src/build /usr/share/nginx/html
