const Road = require("./Road.js");


const array = [];


for (let i = 0; i < 10; i++) {
	console.log("Iteratia " + (i+1));
	const r = new Road.Road(100);
	array.push( r.iterate() );
}

/*array.forEach( a => {
	console.log(a);
}
 )*/