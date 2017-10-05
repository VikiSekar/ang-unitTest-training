var spawn = require('child_process').spawn;

if(process.argv[2] == 'child'){
    console.log("Hi.. I am from child!!");
}else{
    var child = spawn(process.execPath,[__filename,'child'],{
        stdio:'inherit'
    });
    
    //child.stdout.on('data',function(inp){
    //    console.log(inp.toString()," - This is the input captured from child..");
    //});
}