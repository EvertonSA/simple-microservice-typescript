FROM alpine:3.10 AS base
# install node for node
RUN apk add --no-cache nodejs-current tini
# set working directory
WORKDIR /root/chat
# Set tini as entrypoint
ENTRYPOINT ["/sbin/tini", "--"]
# copy project file
COPY app/package.json .
 
# NodeJS Specific
# ---- Dependencies ----
FROM base AS dependencies
# install node packages
RUN npm set progress=false && npm config set depth 0
RUN npm install --only=production
# copy production node_modules aside
RUN cp -R node_modules prod_node_modules
# install ALL node_modules, including 'devDependencies'
RUN npm install
 
# xxxxxJS Specific
# ---- Test ----
# run linters, setup and tests
FROM dependencies AS test
COPY . .
RUN npm run test
 
# NodeJS Specific
# ---- Release ----
FROM base AS release
# copy production node_modules
COPY --from=dependencies /root/chat/prod_node_modules ./node_modules
# copy app sources
COPY app/ .
# define CMD
CMD npm start