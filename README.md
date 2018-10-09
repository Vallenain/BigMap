# Big Map

### Short description 
Maps made tasty!

### Technos
- Google App Engine
- Angular
- Mapbox GL JS

## GCP
- https://console.cloud.google.com/home/dashboard?project=bigmap-dev&organizationId=0

## Processes
### Setup

```bash
./tasks/setup.sh
```
### Development server
To start the dev server:
```bash
source venv/bin/activate
# start the local appengine server
{ dev_appserver.py app.yaml  | dispatch.yaml }
# build the front and watch for changes
ng build --watch 
```

### Deploy
```bash
./tasks/deploy.sh <dev|production|acceptance> <version>
```

### Tests

