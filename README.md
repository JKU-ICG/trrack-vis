# trrack-notebook-vis Library
![npm (scoped)](https://img.shields.io/npm/v/jku-icg/trrack-notebook-vis)

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
- `npm run commit`: Commit using conventional commit style ([husky](https://github.com/typicode/husky) will tell you to use it if you haven't :wink:)

### Together with Jupyterlab Extension

[jupyterlab_nbprovenance](https://github.com/JKU-ICG/jupyterlab_nbprovenance)  
TODO

## Publish

Make sure to `npm login` with the user *icgbot* first.

```sh
npm pack --dry-run  # verify files
npm publish
```

## Resources

Project created using [Typescript library starter](https://github.com/alexjoverm/typescript-library-starter) by [alexjoverm](https://github.com/alexjoverm/)
