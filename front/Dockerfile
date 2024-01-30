FROM node:20.11.0-alpine3.18

ENV TINI_VERSION v0.15.0
ADD https://github.com/krallin/tini/releases/download/${TINI_VERSION}/tini /tini
RUN chmod +x /tini
# 作業ディレクトリを/appに設定
WORKDIR /app

COPY ./ ./ 

# create-react-appをグローバルにインストール
RUN npm install -g create-react-app
WORKDIR /app/react-app

# ENTRYPOINT [ "/tini", "--" ]
# CMD [ "npm", "start" ]

