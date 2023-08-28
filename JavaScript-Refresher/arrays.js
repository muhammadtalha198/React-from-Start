 const hobbies = ["Sports0", "Sports1", "Sports2", "Sports3"];

console.log(hobbies);
console.log(hobbies[0]);
console.log(hobbies[1]);

hobbies.push("Learning");
console.log(hobbies);
console.log(hobbies[4]);

const index = hobbies.findIndex((item) => {
	return item === "Sports2";
});

console.log(index);

/**
 * shortest way of writhing upper code :
 */

const index1 = hobbies.findIndex((item) => item === "Sports2");

console.log(index);
