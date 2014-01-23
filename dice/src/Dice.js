function Dice(){
	this.rolls = Math.floor(Math.random()*6);
}

Dice.prototype.roll = function() {
	return this.rolls;
};