var treehouseBadges = [];

var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
	var students = ["Blake Johnson", "Caleb Ozer", "Elizabeth Deering", "Kaitlyn Dyer", "Loren Van Wiel", "Louise Adkins", "Matthew King", "Ryan Brown", "Sharon Gordon", "Stephanie Argy", "Tim Hanson", "Traci Reed"];
	if(xhr.readyState === 4) {
		var employees = JSON.parse(xhr.responseText);
		var statusHTML = '<tr class="student">'
		// for (var i=0; i<students.length; i+=1) {
			if (["Blake Johnson"]["badges"]["id"] === "912") {
				statusHTML += '<td class="yes">';
			} else {
				statusHTML += '<td class="no">';
			}
			statusHTML += '</td>';
		// }
	statusHTML += '</tr>'

	}
}

xhr.open('GET', 'http://teamtreehouse.com/ifics.json');
xhr.send();
