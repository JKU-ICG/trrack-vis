# Trrack-Notebook-Vis Library

![npm (scoped)](https://img.shields.io/npm/v/@jku-icg/trrack-notebook-vis?style=flat)

This library is used by [jupyterlab_nbprovenance](https://github.com/JKU-ICG/jupyterlab_nbprovenance), an extension for JupyterLab to track provenance in notebooks. The provenance information is stored using the provenance tracking library [trrack]((https://github.com/visdesignlab/trrack)).
This fork of [Trrack-vis](https://github.com/visdesignlab/trrack-vis) enhances the provenance visualization with features for notebooks.

## Development

```bash
git clone https://github.com/JKU-ICG/trrack-notebook-vis.git
cd trrack-notebook-vis/
npm install
```

### Use npm commands

- `npm t`: Run test suite
- `npm start`: Run `npm run build` in watch mode
- `npm run test:watch`: Run test suite in [interactive watch mode](http://facebook.github.io/jest/docs/cli.html#watch)
- `npm run test:prod`: Run linting and generate coverage
- `npm run build`: Generate bundles and typings, create docs
- `npm run lint`: Lints code

### Together with Jupyterlab Extension

1. Follow the Development instructions of the extension: [jupyterlab_nbprovenance](https://github.com/JKU-ICG/jupyterlab_nbprovenance)  
  Make sure you use the same Python environment (i.e., where JupyterLab is installed with extension).
1. Link this library: `jupyter labextension link --minimize=False`  
    If you don't link this library, JuypterLab will pull its own copy of this library from npm and local changes won't show up.  
    Disabling the minifier is optional, but minimizig the code is not necessary locally and it reduces the build time a little.
1. You can verify the setup with: `jupyter labextension list`  
    This should list the extension and this library as local extension and linked package, respectively.
1. Make Code changes
1. Rebuild application: `npm run build`  
    JupyterLab updates itself, due to the `--watch` parameter
1. Refresh JupyterLab

## Publish

Make sure to `npm login` with the user *icgbot* first.

```sh
npm pack --dry-run  # verify files
npm publish
```

## Resources

Project created using [Typescript library starter](https://github.com/alexjoverm/typescript-library-starter) by [alexjoverm](https://github.com/alexjoverm/)
