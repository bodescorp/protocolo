FROM node:14
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
COPY ./ormconfig.prod.json /app/ormconfig.json
CMD sh entrypoint.sh
EXPOSE 3333