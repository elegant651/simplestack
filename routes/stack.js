var Stack = function() {
	this.items = [];
}

Stack.prototype.init = function(req, res) {
	this.items = [];

	for(var i=0; i<3; i++){
		var randnum = Math.floor(Math.random() * 50) + 1;
		this.items.push(randnum);
	}

	var jsonArray = JSON.parse(JSON.stringify(this.items));
	res.json(jsonArray);	
};	

Stack.prototype.push = function(req, res) {
	var elem = req.params.id;
	this.items.push(elem);	

	var jsonArray = JSON.parse(JSON.stringify(this.items));
	res.json(jsonArray);
};

Stack.prototype.pop = function(req, res) {
	this.items.pop();
	var jsonArray = JSON.parse(JSON.stringify(this.items));
	res.json(jsonArray);	
};

Stack.prototype.peek = function(req, res) {	
	if(this.isEmpty){		
		return;
	}
	var elem = this.items[this.items.length-1];	
	res.json(elem);
};

Stack.prototype.size = function() {
	return this.items.length;	
};

Stack.prototype.isEmpty = function() {
	return this.items.length==0;
};

Stack.prototype.clear = function() {
	return this.items = [];
};

Stack.prototype.print = function() {
	console.log(this.items.toString());
};

module.exports = Stack;