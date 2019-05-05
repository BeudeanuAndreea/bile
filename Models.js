module.exports.Bila = class Bila {

constructor(c, p) {
	this.color = c;
	this.position = p;
	}
};

module.exports.Trap = class Trap {
		
constructor(c, p) {
	this.color = c;
	this.position = p;
	this.state = false;
	this.lastChange = 0;
	this.openTime = Math.floor(Math.random() * (6 - 2) + 2);
	this.closeTime = Math.floor(Math.random() * (5 - 3) + 3);
  }
 
}


