//global variables
var badges = ["Beginning HTML and CSS", "HTML First", "CSS: Cascading Style Sheets", "Getting Started with Git", "Working with Remote Repositories", "Basic Layout", "Creating HTML Content", "Adding Pages to a Website", "Branches", "Merging", "Workflows"]
var interstion;

// list of students enrolled in class

var classList = function() {
	var output_html;
	var students = ["Blake Johnson", "Caleb Ozer", "Elizabeth Deering", "Kaitlyn Dyer", "Loren Van Wiel", "Louise Adkins", "Matthew King", "Ryan Brown", "Sharon Gordon", "Stephanie Argy", "Tim Hanson", "Traci Reed"];
	for (var i=0; i<students.length; i++) {
		console.log(students[i]);
		output_html +="<tr> <th>" + students[i] + "</th> <tr>";
	}
	$("#badgeTable").html(output_html);
};
//list of badges students should complete
var badgeList = function() {     
	var output_html;    
	for (var i=0; i<badges.length; i++) {
		console.log(badges[i]);
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
xhr.open('GET', 'http://teamtreehouse.com/katiedyer.json');
xhr.send();