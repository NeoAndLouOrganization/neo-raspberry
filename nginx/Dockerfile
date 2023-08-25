FROM nginx:latest

# Create app directory
WORKDIR /usr/src/nginx

COPY default.conf /etc/nginx/conf.d/default.conf
COPY certs/vvasylkovskyi_com.pem /etc/ssl/certs/vvasylkovskyi_com.pem
COPY certs/vvasylkovskyi_com.key /etc/ssl/private/vvasylkovskyi_com.key