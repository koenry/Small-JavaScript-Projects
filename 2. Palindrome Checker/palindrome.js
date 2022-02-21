function palindrome(str) {
	let reversed = str.replace(/\s+/g, '');
	let reversed2= reversed.replace(/[^a-zA-Z0-9]/g,'').toLowerCase();
	let reversed3 = reversed2.split("").reverse().join("").toLowerCase();
		if (reversed3 === reversed2) {
			return true;
		} else {
			return false;
		}
}

