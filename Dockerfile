FROM alpine

WORKDIR ./

COPY package.json ./

RUN rm -rf *lock* && npm install --only=production && npm cache clean --force
# && npm init ava && npm i -g ava

ENV PATH=/node_modules/.bin:$PATH

#USER node

#RUN chown=node

CMD ["npm", "test"]
