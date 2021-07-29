# `AS` statement is needed to name the image, this prevents name collision with other containers using the same node image.
FROM node:16 AS server
WORKDIR /server
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY ./package*.json ./

# Copy app source code into container
COPY . .

RUN npm install

# Expose this port to host, app is running on this port as specified in ./bin/www
EXPOSE 8080

# Run express app as specified in package.json
CMD ["npm", "run", "start:dev"]