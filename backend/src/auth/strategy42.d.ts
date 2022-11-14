// we need to do this to declare the module passport-42
// for other modules, like google-oauth, you can install `npm i @types/google-oauth-etc`
// this will import all types ( classes ), presented in the module
// when this cannot be installed, you declare the module in a .d.ts file like we do here

declare module 'passport-42';