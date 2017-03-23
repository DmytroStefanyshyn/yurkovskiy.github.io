function Student(id, surname, name, gender) {
	this.id = id;
	this.surname = surname;
	this.name = name;
	this.gender = gender;

	this.show = function() {
		console.log(id + ": " + surname 
			+ " " + name + "[" + gender + "]");
	}
}