# My Typescript Hexagonal Architecture

# Linking a local package

**Note:** The `lib-name` is the name of the package in the package.json file.

1. In the library's package.json directory
```bash
npm link
```

2. In the host project directory
```bash
npm link lib-name
```

## Deleting a link

1. unlink the package
```bash
npm unlink lib-name
```

2. remove the link
```bash
npm rm --global lib-name
```
