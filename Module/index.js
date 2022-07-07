//Module
/*
-> Global modulde and  non global module

	* golbal and non global module which is provided by the system which is system define

	- global module which no need to import  
		e.g  console.log(); console.log(__dirname); console.log(__filename);

	- non global module which is system define but you have to import it manually
		e.g  filesystem
		const fs= require('fs')
		* for creating text file  
		  fs.writeFileSyc("file.txt","code with md");

*/

const fs = require('fs');

console.log("directory name -->>",__dirname);

console.log("file name -->>",__filename);

fs.writeFileSync("file.txt","this is file system module");

