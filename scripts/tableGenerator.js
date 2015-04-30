$(document).ready(function(){
	//create badge list in first row
	for(var i = 0; i < badges.length; i++){
		$classNameBox = $('<th>' + badges[i] + '</th>');
		$('#courses').append($classNameBox);
	}
	//create list of students
	for(var i = 0; i < students.length; i++){
		var $studentBox = $('<tr class="studentRow"><th class="studentName">' + students[i].name + '</th>');
		for(var j = 0; j < badges.length - 1; j++){
			$studentBox.append("<td>&nbsp;</td>");
			$studentBox.append("</tr>");
		}
		$("#sample").append($studentBox);
	}
	//add boxes on one student's row
	//for every student, append an empty td for each badge
	// for(var i = 0; i < badges.length; i++){
	// 	$('.studentRow').append("<td></td>");
	// }

});