/// StringBuilder

 // Initializes a new instance of the StringBuilder class

// and appends the given value if supplied

function StringBuilder(value)
{
    this.strings = new Array("");
    this.append(value);
}

// Appends the given value to the end of this instance.

StringBuilder.prototype.append = function (value)
{
    this.strings.push(value);
	return this;
}

StringBuilder.prototype.appendLine = function()
{
	this.strings.push("\n");
	return this;
}

// Clears the string buffer

StringBuilder.prototype.clear = function ()
{
    this.strings.length = 1;
}

// Converts this instance to a String.

StringBuilder.prototype.toString = function ()
{
    return this.strings.join("");
}