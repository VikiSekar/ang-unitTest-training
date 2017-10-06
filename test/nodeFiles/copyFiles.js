var fs = require('fs');
var now = require('performance-now');
var prompt = require('prompt');
var isDelete = false;
var calledDeleteFolderIfEmpty = 0;

console.time("Total Time");

var schema = {
    properties:{
        YesOrNo : {
            pattern: /^[yYnN]$/,
            message: 'Allowed Characters - Y/N y/n',
            required : true
        }
    }
};


function readFromJSON(str){
    jsObj = JSON.parse(str);
    return jsObj;
}

function writeToJSON(jsObj){
    fs.writeFile('config.json',JSON.stringify(jsObj),function(err){
        if(err){
           throw err; 
        }
    });
}


var json = readFromJSON(fs.readFileSync('config.json').toString());

json.forEach(function(obj,i,objects){
    var sourcePath = obj.source + '/' + obj.name;
    var destPath = obj.destination + '/' + obj.name;
    
    if(!fs.existsSync(obj.destination)){
        fs.mkdirSync(obj.destination);
    }
    var start = now();
    fs.createReadStream(sourcePath).pipe(fs.createWriteStream(destPath));
    var end = now();
    obj.time_taken = (end-start).toFixed(5) + " ms";
    writeToJSON(objects);
    if(isDelete){
        console.log('Deleting...');
        deleteFile(destPath);
    }
});
console.timeEnd("Total Time");
console.log("Do you want to delete the files after copying? (y/n)");
prompt.start();
prompt.get(schema,function(err,result){
    if(result.YesOrNo.toUpperCase() == 'Y'){
        console.log("You decided to throw away the files!!");
        deleteFiles(json);
    }else{
        console.log("Your copy is safe!!");
    }
});

function deleteFiles(json){
    json.forEach(function(obj,i,objects){
        var destPath = obj.destination + '/' + obj.name;

        if(fs.existsSync(destPath)){
            fs.unlink(destPath,function(err){
                if(!err){
                    console.log("Deleted - " + destPath);
                    deleteFolderIfEmpty(obj.destination);
                }
            });
        }
    });
    
}

function deleteFolderIfEmpty(folder){
    if(fs.existsSync(folder)){
        fs.readdir(folder,function(err,files){
            calledDeleteFolderIfEmpty++;
            if(calledDeleteFolderIfEmpty == json.length){
                if(!files.length){
                    console.log("The folder " + folder + " you have created for copying is empty.. So I'm going to delete it!!");
                    fs.rmdirSync(folder);
                }else{
                    console.log('Oh.. Seems like you have ' + files + " files into our folder. So I'm leaving them safe!!");
                }
            }
        });
    }
    
}







