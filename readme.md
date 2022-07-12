
# setup

## starting/stop docker

docker-compose  -f docker-compose.yml -f docker-compose.dev.yml up -d

docker-compose down -v


## adminer ie view database

go to http://localhost:8080/ & find host details from .env as mentioned below


DB_HOST=mysql \
DB_PORT=3306 \
DB_DATABASE=testdb \
DB_USERNAME=dbuser \
DB_PASSWORD=password
