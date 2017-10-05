var fs = require('fs');
var fileName = 'file.txt';
var exec = require('child_process').exec;


console.log("Arguments passed in cmd : " + process.argv);

process.stdout.write("Msg written from process.stdout.write \n");

fs.writeFileSync(fileName,"I am written using process.stdout!!");
fs.createReadStream(fileName).pipe(process.stdout);
var count = 10;

setTimeout(function(){
    console.log("Hi.. I am going to shut down after 10 to 1!!");
},1000);

setInterval(function(){
    console.log(count--);
    if(count < 1){
        console.log("Happy Coding !!");
        process.exit();
    }
},1000);

exec('type demo.txt',function(err, stdout, stderr){
    console.log("The file contents are : " + stdout);
});

