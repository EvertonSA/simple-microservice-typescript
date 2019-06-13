# OS
FROM node:8

# Owner
LABEL key="Helio Nogueira <helio.nogueir@gmail.com>"

# Workspace
VOLUME [ "/root/workspace" ]
WORKDIR /root/workspace/app

# Start Application
ADD ./.infra/app/docker-entrypoint.sh /root/workspace/docker-entrypoint.sh
ENTRYPOINT [ "/bin/sh", "/root/workspace/docker-entrypoint.sh" ]