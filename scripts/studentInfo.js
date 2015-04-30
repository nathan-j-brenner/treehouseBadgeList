//global variables
var interstion;
var treehouseURL = 'https://teamtreehouse.com/';
var student;
var classNames = ["console basics", "git basics"]
var badges = ["Student Name", "Treehouse Username", "Newbie", "Beginning HTML and CSS", "HTML First", "Creating HTML Content", "CSS: Cascading Style Sheets", "Customizing Colors and Fonts", "Styling Web Pages and Navigation", "Adding Pages to a Website", "Responsive Web Design and Testing", "Sharing a Website", "Debugging HTML and CSS Problems", "Getting Started with the Console", "Users and Permissions", "Processes", "Environment and Redirection", "Installing Software", "Why Version Control Matters", "Getting Started with Git", "Branches", "Merging", "Working With Remote Repositories", "Workflows"]
//Web Foundations curriculum for Treehouse for the whole series
// var badges = ["Student Name", "Treehouse Username", "Newbie", "Beginning HTML and CSS", "HTML First", "CSS: Cascading Style Sheets", "Why Version Control Matters", "Creating HTML Content", "Adding Pages to a Website", "Getting Started with Git", "Working with Remote Repositories", "Getting Started with CSS", "Base Selectors", "Understanding Values and Units", "Basic Layout", "Float Layout", "Customizing Colors and Fonts", "Styling Web Pages and Navigation", "Responsive Web Design and Testing", "Sharing a Website", "Debugging html and css problems", "Branches", "Merging", "Workflows", "The Box Model", "Designing with the Latest Features", "Fundamental Concepts", "Text, Fonts, Lists", "Backgrounds and Borders", "CSS Gradients", "Chrome DevTools Basics", "Media Basics", "Introducing JavaScript", "Storing and Tracking information with Variables", "Working with Numbers", "Making Decisions with Conditional Statements", "Creating Reusable Code with Functions", "Simplify Repetitive Tasks with Loops", "Tracking Multiple Items with Arrays", "Tracking Data Using Ojects", "Introduction to jQuery", "Introduction to Front-End Frameworks", "Prototyping with Bootstrap"];

//Student information
var students = [
	{name:"Blake Johnson", treehouse:"ifics", badgesCompleted:[], badgesIntersected:[]},
	{name:"Caleb Ozer", treehouse:"calebozer", badgesCompleted:[], badgesIntersected:[]},
	{name:"Elizabeth Deering", treehouse:"elizabethdeering", badgesCompleted:[], badgesIntersected:[]},
	{name:"Kaitlyn Dyer", treehouse:"katiedyer", badgesCompleted:[], badgesIntersected:[]},
	{name:"Loren Van Wiel", treehouse:"lorenvanwiel", badgesCompleted:[], badgesIntersected:[]},
	{name:"Louise Adkins", treehouse:"louiseadkins", badgesCompleted:[], badgesIntersected:[]},
	{name:"Matthew King", treehouse:"mattking", badgesCompleted:[], badgesIntersected:[]},
	{name:"Ryan Brown", treehouse:"ryanbrown20", badgesCompleted:[], badgesIntersected:[]},
	{name:"Sharon Gordon", treehouse:"sharongordon", badgesCompleted:[], badgesIntersected:[]},
	{name:"Stephanie Argy", treehouse:"stephanieargy", badgesCompleted:[], badgesIntersected:[]},,
	{name:"Tim Hanson", treehouse:"timhanson", badgesCompleted:[], badgesIntersected:[]},
	{name:"Traci Reed", treehouse:"tracireed", badgesCompleted:[], badgesIntersected:[]},
];