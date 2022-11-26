FROM ubuntu
RUN apt update
RUN apt install -y nodejs
RUN apt install -y npm

WORKDIR /opt/app
COPY package.json package.json
RUN npm install

COPY . .

CMD [ "npm", "start" ]

