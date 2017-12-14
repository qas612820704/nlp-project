Number.prototype.clamp = function(min, max) { return Math.max(min, Math.min(this, max)); }
Number.prototype.clamp05 = function() { return this.clamp(0, 5); }

var score;
