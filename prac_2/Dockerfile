FROM postgres:15

ENV POSTGRES_USER=admin
ENV POSTGRES_PASSWORD=admin
ENV POSTGRES_DB=todo

# Copie le fichier de configuration pour l’extension des fonctionnalités si nécessaire (optionnel)
# COPY ./postgresql.conf /etc/postgresql/postgresql.conf
# COPY ./init.sql /docker-entrypoint-initdb.d/

# Expose le port par défaut de PostgreSQL
EXPOSE 5432
