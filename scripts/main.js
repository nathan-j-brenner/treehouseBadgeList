//global variables
var badges = ["Beginning HTML and CSS", "HTML First", "CSS: Cascading Style Sheets", "Getting Started with Git", "Working with Remote Repositories", "Basic Layout", "Creating HTML Content", "Adding Pages to a Website", "Branches", "Merging", "Workflows"]
var interstion;
var treehouseURL = 'https://teamtreehouse.com/'

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
	{name:"Stephanie Argy", treehouse:"stephanieargy", badgesCompleted:[], badgesIntersected:[]},
	{name:"Tim Hanson", treehouse:"timhanson", badgesCompleted:[], badgesIntersected:[]},
	{name:"Traci Reed", treehouse:"tracireed", badgesCompleted:[], badgesIntersected:[]},
];

//student list in table
var classList = function() {
	var output_html;
	for (var i=0; i<students.length; i++) {
		output_html +="<tr> <th>" + students[i].name + "</th> <tr>";
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

//pull json data from treehouse, locate common badges between what the student completed and what the instructor hopes the student to complete

for(var i = 0; i<students.length; i++){
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function () {
		if(xhr.readyState === 4) {
			var students = JSON.parse(xhr.responseText);
			for(var i = 0; i < badges.length; i += 1) {
				var badgeArray = "<p>" + badges[i] + "<br /></p>"
			}
			for(var i = 0; i < students.badges.length; i += 1) {
				console.log(students.badges[i].name);
				students[i].badgesCompleted.push(students.badges[i].name);
			}
			var intersection = _.intersection(students[i].badgesCompleted, badges);
		}
	}
	xhr.open('GET', treehouseURL + students[i].treehouse + '.json');
	xhr.send();
}