FROM nginx:alpine

WORKDIR /usr/src/nginx

# Config files
COPY index.html /usr/src/nginx/html/
COPY nginx.conf /etc/nginx/nginx.conf

# Certificates
COPY certs/vvasylkovskyi_com.pem /etc/ssl/certs/vvasylkovskyi_com.pem
COPY certs/vvasylkovskyi_com.key /etc/ssl/private/vvasylkovskyi_com.key