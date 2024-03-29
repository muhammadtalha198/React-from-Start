const hobbies = ["Sports0", "Sports1", "Sports2", "Sports3"];

console.log(hobbies);
console.log(hobbies[0]);
console.log(hobbies[1]);

hobbies.push("Learning");
console.log(hobbies);
console.log(hobbies[4]);

//----------------------------------------------------------------

const index = hobbies.findIndex((item) => {
	return item === "Sports2";
});

console.log(index);

/**
 * shortest way of writhing upper code :
 */

const index1 = hobbies.findIndex((item) => item === "Sports2");

console.log(index);

//----------------------------------------------------------------

const edititedHobies = hobbies.map((item) => {
	return item + "!";
});

console.log(edititedHobies);

/**
 * shortest way of writhing upper code :
 */

const index2 = hobbies.map((item) => item + "!");

console.log(index2);

//----------------------------------------------------------------

const objects = hobbies.map((item) => {
	return { item: item };
});

console.log(objects);

/**
 * shortest way of writhing upper code :
 */

const objects1 = hobbies.map((item) => ({ text: item }));

console.log(objects1);

// example: 

function transformToObjects(numberArray) {
	const objects1 = numberArray.map((value) => ({ val: value }));

	return objects1;
}

console.log(transformToObjects([1, 2, 3, 4]));


