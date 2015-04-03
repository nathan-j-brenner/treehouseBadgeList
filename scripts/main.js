//global variables
var badges = ["Beginning HTML and CSS", "HTML First", "CSS: Cascading Style Sheets", "Getting Started with Git", "Working with Remote Repositories", "Basic Layout", "Creating HTML Content", "Adding Pages to a Website", "Branches", "Merging", "Workflows"]
var interstion;

//student information
var students = [
	{name:"Blake Johnson", treehouse:"ifics"},
	{name:"Caleb Ozer", treehouse:"calebozer"},
	{name:"Elizabeth Deering", treehouse:"elizabethdeering"},
	{name:"Kaitlyn Dyer", treehouse:"katiedyer"},
	{name:"Loren Van Wiel", treehouse:"lorenvanwiel"},
	{name:"Louise Adkins", treehouse:"louiseadkins"},
	{name:"Matthew King", treehouse:"mattking"},
	{name:"Ryan Brown", treehouse:"ryanbrown"},
	{name:"Sharon Gordon", treehouse:"sharongordon"},
	{name:"Stephanie Argy", treehouse:"stephanieargy"},
	{name:"Tim Hanson", treehouse:"timhanson"},
	{name:"Traci Reed", treehouse:"tracireed"},
];
console.log(students[3].name);
console.log(students.length);

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
var treehouseBadges = [];
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
	if(xhr.readyState === 4) {
		var students = JSON.parse(xhr.responseText);
		for(var i = 0; i < badges.length; i += 1) {
			var badgeArray = "<p>" + badges[i] + "<br /></p>"
		}
		for(var i = 0; i < students.badges.length; i += 1) {
			treehouseBadges.push(students.badges[i].name);
		}
		var intersection = _.intersection(treehouseBadges, badges);
		console.log(intersection);
	}
}
xhr.open('GET', treehouseURL + 'ifics' + '.json');
xhr.send();