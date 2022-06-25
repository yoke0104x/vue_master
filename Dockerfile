FROM nginx:1.19

ENV TZ=Asia/Shanghai

COPY ./dist/ /usr/share/nginx/html/

EXPOSE 80
