//list Blake's treehouse username
console.log(students[0].treehouse);
//test run for one student THIS CODE WORKS
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
	if(xhr.readyState === 4) {
		var student = JSON.parse(xhr.responseText);
		//list Blake's json data
		console.log(student);
		//display the number of badges blake has completed
		console.log(student.badges.length);
		// display one badge name
		console.log(student.badges[0].name);
		// display all of Blake's badges
		for(var i = 0; i<student.badges.length; i++){
			console.log(student.badges[i].name);
			//store student.badges[i].name into students.
			students[0].badgesCompleted.push(student.badges[i].name);
		}
		//list updated array of students[0].badgesCompleted
		console.log(students[0].badgesCompleted);
		//display common elements of badges and students badges
		var intersection = _.intersection(students[0].badgesCompleted, badges);
		console.log("nate is awesome");
		console.log(intersection);
	}
}
xhr.open('GET', treehouseURL + "ifics" + '.json');
xhr.send();