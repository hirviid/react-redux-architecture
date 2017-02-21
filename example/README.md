# React Redux Architecture Example

### Running the Example

- `git clone git@github.com:hirviid/react-redux-architecture.git`
- `cd react-redux-architecture/example`
- `yarn install`
- `yarn start`

**WINDOWS Note**

To support absolute paths, the last step in the installation process creates a symbolic link for every folder inside src.
This allows the use of `import apiRoutes from '@example/app/api/routes';` in stead of `import apiRoutes from '../../../../../app/api/routes'`.

On windows, creating the symbolic links requires Administrator rights. Therefore, you should run CMD prompt as Administrator before running `yarn install` or `yarn postinstall`.


### Dependencies

This section list which part of the app can reference other parts of the app. Only allowing uni-directional dependencies.

- all packages -> src/app
- all packages -> src/components
- packages/app -> All other packages
- packages/catalogue -> packages/core

### Modules

- Catalogue/Product -> Catalogue/Cart
