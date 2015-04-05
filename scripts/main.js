//global variables
var badges = ["Student Name", "Treehouse Username", "Newbie", "Beginning HTML and CSS", "HTML First", "CSS: Cascading Style Sheets", "Why Version Control Matters", "Creating HTML Content", "Adding Pages to a Website", "Getting Started with Git", "Working with Remote Repositories", "Getting Started with CSS", "Base Selectors", "Understanding Values and Units", "Basic Layout", "Float Layout", "Customizing Colors and Fonts", "Styling Web Pages and Navigation", "Responsive Web Design and Testing", "Sharing a Website", "Debugging html and css problems", "Branches", "Merging", "Workflows", "The Box Model", "Designing with the Latest Features", "Fundamental Concepts", "Text, Fonts, Lists", "Backgrounds and Borders", "CSS Gradients", "Chrome DevTools Basics", "Media Basics", "Introducing JavaScript", "Storing and Tracking information with Variables", "Working with Numbers", "Making Decisions with Conditional Statements", "Creating Reusable Code with Functions", "Simplify Repetitive Tasks with Loops", "Tracking Multiple Items with Arrays", "Tracking Data Using Ojects", "Introduction to jQuery", "Introduction to Front-End Frameworks", "Prototyping with Bootstrap"];
console.log(badges.length);
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
		console.log(i);
		console.log(students[i].name);
		document.write("<p>" +students[i].name + "</p>");
		// output_html +="<tr><th>" + students[i].name + "</th></tr>";
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
// badgeList();
// classList();


//list Blake's treehouse username
// console.log(students[0].treehouse);
//test run for one student THIS CODE WORKS

console.log(students[12].name)
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
	if(xhr.readyState === 4) {
		var student = JSON.parse(xhr.responseText);
		// //list Blake's json data
		// console.log(student);
		// //display the number of badges blake has completed
		// console.log(student.badges.length);
		// // display one badge name
		// console.log(student.badges[0].name);
		// // display all of Blake's badges
		for(var i = 0; i<student.badges.length; i++){
			console.log(student.badges[i].name);
			//store student.badges[i].name into students.
			students[12].badgesCompleted.push(student.badges[i].name);
		}
		//display common elements of badges and students badges
		var intersection = _.intersection(students[12].badgesCompleted, badges);
		// console.log(intersection);
		students[12].badgesIntersected.push(intersection);
		console.log(students[12].badgesIntersected[0]);
	}
}
xhr.open('GET', treehouseURL + students[12].treehouse + '.json');
xhr.send();

