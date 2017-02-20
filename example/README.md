# React Redux Architecture Example

- `yarn install`
- `yarn start`

**WINDOWS Note**

To support absolute paths, the last step in the installation process creates a symbolic link for every folder inside src.
This allows the use of `import apiRoutes from '@example/app/api/routes';` in stead of `import apiRoutes from '../../../../../app/api/routes'`.

On windows, creating the symbolic links requires Administrator rights. Therefore, you should run CMD prompt as Administrator before running `yarn install` or `yarn postinstall`.
