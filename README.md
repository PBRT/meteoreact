### Voucher

An implementation of Meteor - React built by WebPack
The goal of this project is to provide a application skeleton using Meteor as backend, React for the UI and for the routing (react-router), build by Webpack

### Installation

```
git clone https://github.com/PBRT/meteoreact.git
cd .client/
npm i
cd ..
./watch.sh
```

### Conception

The project codebase is contained in ```.client/``` directory. The entry point of it is ```app.jsx```, handling the routing of the differents pages. Once everything set up, the ```watch.jsx``` script run webpack in watch mode and build the bundle under the ```client``` folder for providing the APP to the meteor server. 
(```.client``` name to avoid meteor to load these files)
