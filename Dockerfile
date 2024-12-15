# Use the official Node.js image as the base image
FROM node:16-alpine3.18 as development

WORKDIR /usr/src/app

COPY package*.json .

RUN npm install

COPY . .

RUN npm run build

# Stage 2

FROM node:16-alpine3.18 as production

ARG APP_ENV=production

ENV NODE_ENV=${APP_ENV}

WORKDIR /usr/src/app

COPY package*.json .

# RUN npm ci "Includes both dependencies & devDependencies"

# If you still want to inclue devDependencies in production also
# Use --include=dev flag
# If you want to inclue only dependencies in production
# Use --only=production flag

RUN npm ci --include=dev

COPY --from=development /usr/src/app/dist ./dist

# Expose the port that the app will run on
EXPOSE 5000

CMD [ "node" , "dist/index.js" ]


