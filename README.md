# Typescript
typescript course by dave

## run typescript in command line
```bash
tsc main.ts
```
## What's inside build folder
compiled code - html,css,js

## What's inside src folder
ts

## Initialize a project as a typescript project
```bash
tsc --init
```
It creates a tsconfig.json file

## to specify where our typescript file is stored
in tsconfig.json specify 
```JSON
{
    ...
 "rootDir": "./src"
 ...
}
```
## to specify where javascript file is stored
in tsconfig.json specify 
```JSON
{
    ...
 "outDir": "./build/js"
 ...
}
```

## to run typescript file as `npm start`
```bash
tsc --init
```

## how to include only `src folder` in the compilation of typescript code
```json
{
    ...,
"include": ["src"]
}
```
only src folder is used for compilation

## if we don't want to create js file if ts-file has errors
```json
{
    ...,
    "noEmitOnError": true
} 
```

