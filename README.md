# React Redux Architecture

**Work in progress**

An opinionated architecture for structuring large React/Redux applications.

## Table of contents
* [Diagram](#diagram)
* [Layers](#layers)
	- [App](#app)
	- [Packages](#packages)
	- [Modules](#modules)
* [Building blocks & relations](#building-blocks-and-relations)
	- [Client side routing](#client-side-routing)
	- [Scenes](#scenes)
	- [Containers](#containers)
 	- [Components](#components)
	- [Services](#services)

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
[TODO]

### Scenes
[TODO]

### Containers
[TODO]

### Components
[TODO]

### Services
[TODO]