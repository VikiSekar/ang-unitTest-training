var fs =require('fs');
var path = require('path');
var somePath = 'Desktop/someFolder//someFile.txt';

var checkError = function(err){
    if(err){
        throw err;
    }
};

var resolveError = function(err){
    if(err != undefined){
        console.log("\nOperation failed due to error : " + err.message);
    }else{
        //File will be appended with new string successfully @ callback
        readFile('node.txt');
    }
};

var readFile = function(fileName){
    console.log(fs.readFileSync(fileName).toString());
};

fs.writeFileSync('node.txt','This is Node.js!!');
readFile('node.txt');
fs.appendFile('node.txt',' FS is one of the core modules.',resolveError);
//This should hook up the error function if block
//fs.appendFile('cat/node.txt',' FS is one of the core modules.',resolveError);
//Still not appended - shows async nature of node.js
readFile('node.txt');

console.log(path.normalize(somePath));
console.log(path.basename(somePath));
console.log(path.dirname(somePath));
console.log(path.extname(somePath));

console.log("Working directory name : " + __dirname);
console.log("Working file's name : " + __filename);

//Size of working folder
var fileSizeSync = 0;
var fileSizeAsync = 0;

fs.readdirSync(__dirname).forEach(function(val,i,arr){
    fileSizeSync += (fs.statSync(val).size)/1024.0;
    //console.log(val);
});
console.log("Sync File Size is : " + fileSizeSync + "KBs");

fs.readdir(__dirname,function(err,files){
    checkError(err);
    var called = 0;
    files.forEach(function(file,i,files){
        fs.stat(file,function(err,stats){
            called++;
            checkError(err);
            fileSizeAsync += (stats.size)/1024.0;
            if(called == files.length){
                console.log("Async File Size is : " + fileSizeAsync + "KBs");
            }
        });
    });

    
});
//console.log("Async File Size is : " + fileSizeAsync + "KBs");