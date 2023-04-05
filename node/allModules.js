let calculation='This is the calculation';

// arrow function
let func= () => {
	let str='arrow function';
	console.log(str);
}
func();

const obj={id:['400','401','402'],name:'kishore'};
console.log(obj.id[1],'\n',obj.id[2]);

// export modules
let call = require('./exportFunction');
let x = 7;
let y = 7;
console.log("add " + call.add(x,y));
console.log("sub " + call.sub(x,y));
console.log("mul " + call.mul(x,y));
console.log("div " + call.div(x,y));


// inbuild modules
let http=require('http');
let fs=require('fs');
fs.open('files.txt','w',function(err,file){if(err)throw err;
    console.log('opened/created for writing');
    });




// fileSystem - write
fs.writeFile('files.txt',"hello",function(err)
{if(err) throw err; console.log('saved')
fs.appendFile('files.txt',calculation,function(err,data){
	if(err) throw err;
	console.log('added');
    
});

}
);
// promises
http.createServer(function(req,res){
	fs.readFile('files.txt',function(err,data){
		res.writeHead(200,{'Content-Type':'text/html'});
       
		res.end(data);
        fs.rename('files.txt','kishore.txt',function(err)
        {
            if(err) throw err; console.log('renamed');
        fs.unlink('delete.txt',function(err)
        {
            if(err) throw err ;
            console.log('the file has been deleted');
            });
        });
        
	});
}).listen(8181);


