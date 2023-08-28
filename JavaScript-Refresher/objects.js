const user = {
	name: "Muhammad",
	age: 34,
	greet() {
		return this.age + 20;
	},
};

console.log(user);
console.log(user.age);
console.log(user.name);
console.log(user.greet());
