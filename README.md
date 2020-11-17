# template-webpack-react
Template project for React projects, built using Webpack and Babel - with support for local or Docker deployment.

<br>
<br>

## Yarn Run Commands
Deploys to Docker via Docker-compose
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
<br>

## Docker Deployment
Deploys to Docker via Docker-compose

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