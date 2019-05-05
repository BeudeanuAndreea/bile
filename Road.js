const Models = require("./Models.js");
const Bila = Models.Bila;
const Trap = Models.Trap;

module.exports.Road = class Road {
	
	constructor(s) {
			this.road = new Array(100).fill(0);
			this.bile = [];
			this.size = s;
			this.colors = [0, 1, 2, 3];
			this.traps = []; // 10
			this.createTraps();
			this.createbile();
	}
	
	createTraps() {
		
		for (let i = 0; i < this.size; i++) {
			if ( i % 10 == 0 ){
				const pos = i + this.getRandomArbitrary();
				const color = this.colors[Math.floor(Math.random() * this.colors.length)];
				const trap = new Trap(color, pos);
				this.road[pos] = trap;
				this.traps.push(trap);
			}
		} 
	}
	
	createbile() {
		for (let i = 0; i < this.size; i++) {
			const color = this.colors[Math.floor(Math.random() * this.colors.length)];
			//console.log(color);
			const bila = new Bila(color, 0);
			//console.log(bila.color);
			this.bile.push( bila );
		}
	}
	
	getRandomArbitrary() {
		return Math.floor(Math.random() * 10); 
	}
	
	inTrap( c ) {
		let ok = false;
		this.traps.forEach( t => {
			//console.log('BILA: ' + c.color + '  ' + t.color + '  ' + t.state + '  ' + c.position + '  ' + t.position );
			if ( t.position == c.position && t.color != c.color && t.state == true )
				ok = true;
		} );
		
		return ok;
	}
	
	iterate() {
		//this.traps.forEach( t => {
			//console.log(t.position);
			//});
		
		for (let i = 0; i < this.size; i++) {
			this.traps.forEach( t => {
				if (t.state == true) // trap is open
				{
					if (i - t.lastChange == t.openTime)
					{
						t.state = false;
						t.lastChange = i;
					}
				}
				else
				{
					if (i - t.lastChange == t.closeTime)
					{
						t.state = true;
						t.lastChange = i;
					}
				}
			});
			this.bile.forEach( c => {
				if ( this.inTrap(c) ) {
					const index = this.bile.indexOf(c);
					//console.log('TO BE SPLICED');
					this.bile.splice(index, 1);
				}
				else{
					c.position++;	
				}
			});
		}
		console.log('Bile Ramse: ' + this.bile.length);
		
		return this.bile.length;
	}
	
	
};