//global variables
var badges = ["Beginning HTML and CSS", "HTML First", "CSS: Cascading Style Sheets", "Getting Started with Git", "Working with Remote Repositories", "Basic Layout", "Creating HTML Content", "Adding Pages to a Website", "Branches", "Merging", "Workflows"];
var interstion;
var treehouseURL = 'https://teamtreehouse.com/';
var student;

//student information
var students = [
	{name:"Blake Johnson", treehouse:"ifics", badgesCompleted:[], badgesIntersected:[]},
	{name:"Caleb Ozer", treehouse:"calebozer", badgesCompleted:[], badgesIntersected:[]},
	{name:"Elizabeth Deering", treehouse:"elizabethdeering", badgesCompleted:[], badgesIntersected:[]},
	{name:"Kaitlyn Dyer", treehouse:"katiedyer", badgesCompleted:[], badgesIntersected:[]},
	{name:"Loren Van Wiel", treehouse:"lorenvanwiel", badgesCompleted:[], badgesIntersected:[]},
	{name:"Louise Adkins", treehouse:"louiseadkins", badgesCompleted:[], badgesIntersected:[]},
	{name:"Matthew King", treehouse:"mattking", badgesCompleted:[], badgesIntersected:[]},
	{name:"Ryan Brown", treehouse:"ryanbrown", badgesCompleted:[], badgesIntersected:[]},
	{name:"Sharon Gordon", treehouse:"sharongordon", badgesCompleted:[], badgesIntersected:[]},
	{name:"Stephanie Argy", treehouse:"stephanieargy", badgesCompleted:[], badgesIntersected:[]},,
	{name:"Tim Hanson", treehouse:"timhanson", badgesCompleted:[], badgesIntersected:[]},
	{name:"Traci Reed", treehouse:"tracireed", badgesCompleted:[], badgesIntersected:[]},
];

//student list in table
var classList = function() {
	var output_html;
	for (var i=0; i<students.length; i++) {
		output_html +="<tr><th>" + students[i].name + "</th><tr>";
	}
	$("#badgeTable").html(output_html);
};
//list of badges students should complete
var badgeList = function() {     
	var output_html;    
	for (var i=0; i<badges.length; i++) {
		output_html +="<th>" + badges[i] + "</th>";
	}
	$("#tableHead").html(output_html);
}
badgeList();
classList();


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
		// console.log(intersection);
		students[0].badgesIntersected.push(intersection);
		console.log(students[0].badgesIntersected[0]);
	}
}
xhr.open('GET', treehouseURL + students[0].treehouse + '.json');
xhr.send();


