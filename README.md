# Tweesent frontend

This project consists on the frontend used in _Tweesent_. Some of its main features are:

- The main framework is **react@18.0.0**.
- It makes use of **Vite**.
- **framer-motion@6.5.1**.
- And for the styling, **tailwind CSS** is the preferred option.

## Usage

The frontend basically asks the backend for tweets based on a query. It can ask for results doing a HTTP request or it can open a websocket connection and receive new data periodically.

Using the config wheel in the right corner, the user can customize the search. Parameters as number of tweets, allow retweets or allow repiles determines the HTTP results. In the case of the Websockets, the user can only set an interval for each tweet received.

All tweets are stored in one of the three columns the UI has: positive, neutral or negative. For it, the UI has to process the HTTP result or the JSON received via websocket and based on one of its fields fill the corresponding data structure. A basic animation is performed on each classified tweet...

## Develop

Using **vite** as the frontend tool brings a lot of cool features, but one of the most enjoyable ones is the _Hot Module Replacement_! To start the development server, just run:

    npm run dev

## Deploy

This project also has the pertinent **Dockerfile** to build an image and deploy a container. It is a multi-stage build, firstly, it builds the project using **NodeJS** and finally deploys it in a **nginx** container. To build the project:

    docker build -t tweesent-fe .

And to run the container:

    docker run --rm -p 8080:80 --name tweesent-fe tweesent-fe:latest
