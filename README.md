# template-webpack-react
Template project for React projects, built using Webpack and Babel - with support for local or Docker deployment.

<br>

## Yarn Run Commands
Local use using Yarn package manager.

<br>

### Development - "run dev'
Accessible on Localhost:8080

```bash
cd app
yarn
yarn run dev
```

### Build - "run build"
Exports to app/dist

```bash
cd app
yarn
yarn run build
```

<br>

## NPM Run Commands
Local use using Node package manager.

Please Note - This repository has been configured using Yarn and therefore does not contain a lock-file for NPM.

<br>

### Development - "run dev'
Accessible on Localhost:8080

```bash
cd app
npm install .
npm run dev
```

### Build - "run build"
Exports to app/dist

```bash
cd app
npm install .
npm run build
```

<br>

## Docker Deployment
Deploys to Docker via Docker-compose

<br>

### Development
#### Scripted Deployment
```bash
sudo chmod +x deployment/dev.sh
./deployment/dev.sh
```

#### Manual Deployment
```bash
docker-compose -p react-app-dev -f docker-compose.dev.yml up -d --build --remove-orphans
```
### Production
#### Scripted Deployment
```bash
sudo chmod +x deployment/prod.sh
./deployment/prod.sh
```

#### Manual Deployment
```bash
docker-compose -p react-app -f docker-compose.yml up -d --build --remove-orphans
```