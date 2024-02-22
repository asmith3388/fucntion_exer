// EXERCISE 20
// Return and array of 2 arrays
// (1 - an array of names that contain "a" in name, 2 - an array of names that don't have 'a' in name)
// separateNamesWithAFromRest(["jon", "alice", "andrew", "mark", "jimmy"]) -> [["alice", "andrew", "mark"], ["jon", "jimmy"]]
// NOTE: You MUST use double/nested FOR loop to solve this exercise. The array.includes() method is NOT allowed.

export function separateNamesWithAFromRest(array) {
	let separatedNames = [[], []];
	for (let i = 0; i < array.length; i++) {
		let name = array[i].toLowerCase();
		for (let x = 0; x < name.length; x++) {
			if ("a" === name[x]) {
				separatedNames[0].push(array[i]);
				break;
			}
			if (x === name.length - 1 && "a" !== name[x]) {
				separatedNames[1].push(array[i]);
			}
		}
	}
	return separatedNames;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-20"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
