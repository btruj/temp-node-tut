//GLOBALS - NO WINDOW!!!

// __dirname  - path to current directory (console.log -in terminal /Users/bryantrujillo/Desktop/Tutorial)
// __filename - file name
// require    - function to use modules (CommonJS)
// module     - info about current module (file)
// process    - info about env where the program is being executed

// control c  - to stop terminal (ex: when set interval hello world to 1sec)
//type clear  - to clear the terminal

console.log(__dirname)
setInterval(()=>{
    console.log('hello world')
}, 1000)