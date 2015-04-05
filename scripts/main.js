//global variables
var badges = ["Student Name", "Treehouse Username", "Newbie", "Beginning HTML and CSS", "HTML First", "CSS: Cascading Style Sheets", "Why Version Control Matters", "Creating HTML Content", "Adding Pages to a Website", "Getting Started with Git", "Working with Remote Repositories", "Getting Started with CSS", "Base Selectors", "Understanding Values and Units", "Basic Layout", "Float Layout", "Customizing Colors and Fonts", "Styling Web Pages and Navigation", "Responsive Web Design and Testing", "Sharing a Website", "Debugging html and css problems", "Branches", "Merging", "Workflows", "The Box Model", "Designing with the Latest Features", "Fundamental Concepts", "Text, Fonts, Lists", "Backgrounds and Borders", "CSS Gradients", "Chrome DevTools Basics", "Media Basics", "Introducing JavaScript", "Storing and Tracking information with Variables", "Working with Numbers", "Making Decisions with Conditional Statements", "Creating Reusable Code with Functions", "Simplify Repetitive Tasks with Loops", "Tracking Multiple Items with Arrays", "Tracking Data Using Ojects", "Introduction to jQuery", "Introduction to Front-End Frameworks", "Prototyping with Bootstrap"];
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
		output_html +="<tr><th>" + students[i].name + "</th></tr>";
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

//This code will find the common badges between what one student has done and what the instructor wants the student to do
console.log(students[12].name)
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
	if(xhr.readyState === 4) {
		var student = JSON.parse(xhr.responseText);
		for(var i = 0; i<student.badges.length; i++){
			students[12].badgesCompleted.push(student.badges[i].name);
		}
		//display common elements of badges and students badges
		var intersection = _.intersection(students[12].badgesCompleted, badges);
		students[12].badgesIntersected.push(intersection);
		console.log(students[12].badgesIntersected[0]);
	}
}
// xhr.open('GET', treehouseURL + students[12].treehouse + '.json');
// xhr.send();


//Loop for the same function that starts on line 43.  This should go through each student, pull their json file, and list their intersected badges
for (var i=0; i<students.length; i++) {
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function () {
		if(xhr.readyState === 4) {
			var student = JSON.parse(xhr.responseText);
			for(var i = 0; i<student.badges.length; i++){
				// Uncaught TypeError: Cannot read property 'badgesCompleted' of undefined
				students[i].badgesCompleted.push(student.badges[i].name);
			}
			//display common elements of badges and students badges
			var intersection = _.intersection(students[i].badgesCompleted, badges);
			students[i].badgesIntersected.push(intersection);
			console.log(students[i].badgesIntersected[0]);
		}
	}
	// xhr.open('GET', treehouseURL + students[i].treehouse + '.json');
	// xhr.send();
}
