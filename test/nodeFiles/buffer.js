var buf = new Buffer(15);

buf.write('This is node.js');

console.log(buf);

console.log("[UTF8] Correct Encoding : " + Buffer.isEncoding('utf8'));
console.log("[UTF] Wrong Encoding : " + Buffer.isEncoding('utf'));
console.log("[new Buffer([1,2,3])] Checking Buffer Object : " + Buffer.isBuffer(new Buffer([1,2,3])));

var str = 'Good Morning !! \u2600 \u2615';

console.log(str + " has a byte length of " + Buffer.byteLength(str,'utf8') + " bytes." );
console.log("[This is node.js] Buffer as JSON : " + JSON.stringify(buf.toJSON()));
console.log("Is Buffer Equal : " + buf.equals(new Buffer('This is node.js')));
var buf2 = buf.slice(0,4);
buf[0] = 36;
console.log("[This -> $his ] Modifying original buffer modifies sliced buffer - Buf2 : " + 
buf2.toString('ascii',0,buf2.length));



