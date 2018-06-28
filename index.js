module.exports = Phrase;

// Adds 'reverse' to all strings.
String.prototype.reverse = function() {
	return Array.from(this).reverse().join("");
}
// Add 'blank' method to all strings
String.prototype.blank = function() {
	return (this.length === 0 || /^\s*$/.test(this));
}

// Add 'last' method to all arrays
Array.prototype.last = function() {
	return this[this.length-1];
}

// Define a Phrase object.
function Phrase(content) {
	this.content = content;

	// Makes the phrase LOUDER.
	this.louder = function louder() {
		return this.content.toUpperCase();
	}

	this.processor = function(string) {
		return string.toLowerCase();
	}

	// Returns content processed for palindrome testing.
	this.processedContent = function() {
		return this.processor(this.content);
	}

	// Returns true if the phrase is a palindrome, false otherwise.
	this.palindrome = function palindrome() {
		return this.processedContent() === this.processedContent().reverse();
	}
}

function TranslatedPhrase(content, translation) {
	this.content = content;
	this.translation = translation;

	// Returns translation processed for palindrome testing.
	this.processedContent = function processedContent() {
		return this.processor(this.translation);
	}
}

TranslatedPhrase.prototype = new Phrase();