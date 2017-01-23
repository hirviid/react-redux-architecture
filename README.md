# React Redux Architecture

**Work in progress**

An opinionated architecture for structuring large React/Redux applications.

## Table of contents
* [Diagram](#diagram)
* [Layers](#layers)
	- [App](#app)
	- [Packages](#packages)
	- [Modules](#modules)
* [Building blocks & relations](#building-blocks--relations)
	- [Client side routing](#client-side-routing)
	- [Scenes](#scenes)
	- [Containers](#containers)
 	- [Components](#components)
	- [Services](#services)
	- [REDUX Reducers and Actions](#redux-reducers-and-actions)
	- [REDUX Sagas](#redux-sagas)
	- [REDUX Store and middleware](#redux-store-and-middleware)
	- [3rd party - redux-form](#3rd-party---redux-form)
	- [3rd party - react-redux-fetch](#3rd-party---react-redux-fetch)

## Diagram
<img src="https://cloud.githubusercontent.com/assets/6641475/22184991/ff441c9a-e0dc-11e6-8238-7bd5e684686f.png" alt=“React Redux Architecture“ width="500" />

## Layers

### App
With “App” is meant the whole JavaScript application. In [create-react-app](https://github.com/facebookincubator/create-react-app), for example, that’s the`src` folder.

### Packages
Next, think about which large logical blocks your app has/will have. Similar to [Bounded Context](https://martinfowler.com/bliki/BoundedContext.html) from DDD. A package could be considered as a separate, smaller application. Even bundled separately ([webpack chunks](https://webpack.github.io/docs/code-splitting.html)), because users of one package don’t necessarily will use another package. Examples are: _User Management package, Auction package, Security package, Administration package, Reporting package, Stock package, Catalogue package_…

Dividing your application into packages is only beneficial if you have a large application which you can clearly divide into logical sub-applications based on distinctly separated use cases / user roles. Otherwise, separating into modules (see below) should be enough. You could start with only modules and add the packages layer when your application grows.

Packages allow you to split a big problem into smaller problems so you can focus on particular aspects of the application, ignoring everything else.

### Modules
A module represents related code of a specific concept of a package. For example the _Catalogue package_ could have a _Product module_, a _Cart module_ and an _Order module_ . 
You should aim to reduce the coupling of related Modules by making the dependency between two Modules unidirectional. 

## Building blocks & relations

### Client side routing
Every _package_ is responsible for managing the routes to the _scenes_ inside. If you don’t have the _packages_ layer, your routes are defined in the _app_ layer. 
The Router maps routes to _scenes_.

### Scenes
Scenes are used by the Router. A scene is a React component with **no data, no behaviour and no presentation**. A scene groups containers and components, to create an application page.

### Containers
Containers are rendered by scenes, components or other containers. A container is a React component with **no data, no presentation and little or no behaviour**. Containers work as the glue between services, containers and components. Containers are sometimes referred to as _smart components_.

### Components
Components are the smallest building blocks of the application. Scenes, containers and other components can render these components.
A React component (preferably a [functional component](https://facebook.github.io/react/docs/components-and-props.html#functional-and-class-components)) with **no data and no behaviour. Pure presentation/UI**. Sometimes referred to as _dumb components_ or _presentational components_.

### Services
Services are React’s [Higher-Order Components (hoc)](https://facebook.github.io/react/docs/higher-order-components.html). Services provide data and behaviour to containers. Encapsulating data and behaviour in a _service_ in stead of in a _container_ has the advantage of being very reusable inside your application. Especially if your project has both React and React Native code.

### REDUX Reducers and Actions
[TODO]

### REDUX Sagas
[TODO]

### REDUX Store and middleware
[TODO]

### 3rd party - redux-form
[TODO]

### 3rd party - react-redux-fetch
[TODO]