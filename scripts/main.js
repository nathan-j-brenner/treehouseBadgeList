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
	var badges = ["Beginning HTML and CSS", "HTML First", "CSS: Cascading Style Sheets", "Getting Started with Git", "Working with Remote Repositories", "Basic Layout", "Creating HTML Content", "Adding Pages to a Website", "Branches", "Merging", "Workflows"]
	for (var i=0; i<badges.length; i++) {
		console.log(badges[i]);
		output_html +="<th>" + badges[i] + "</th>";
	}
	$("#tableHead").html(output_html);
}
badgeList();
classList();





// jquery method//
// $.getJSON( address, function( data ) {
//   var items = [];
//   $.each( data, function( key, val ) {
//     items.push( "<li id='" + key + "'>" + val + "</li>" );
//   });
 
//   $( "<ul/>", {
//     "class": "my-new-list",
//     html: items.join( "" )
//   }).appendTo( "body" );
// });



//json parse method//
// var treehouseBadges = [];

// var xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function () {
// 	if(xhr.readyState === 4) {
// 		var employees = JSON.parse(xhr.responseText);
// 		var statusHTML = '<tr class="student">'
// 		// for (var i=0; i<students.length; i+=1) {
// 			if (["Blake Johnson"]["badges"]["id"] === "912") {
// 				statusHTML += '<td class="yes">';
// 			} else {
// 				statusHTML += '<td class="no">';
// 			}
// 			statusHTML += '</td>';
// 		// }
// 	statusHTML += '</tr>'

// 	}
// }

// xhr.open('GET', 'http://teamtreehouse.com/ifics.json');
// xhr.send();