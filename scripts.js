// Job role prediction function based on user input
document.getElementById('jobRoleForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const skillsInput = document.getElementById('skills').value.trim();

    if (skillsInput === "") {
        alert("Please enter some skills.");
        return;
    }

    // Convert input skills to an array and normalize skill names (e.g., lowercase)
    const skillsArray = skillsInput.split(",").map(skill => skill.trim().toLowerCase());

    // Job role prediction logic using if-else statements
    if (skillsArray.includes("python") && skillsArray.includes("sql") && skillsArray.includes("machine learning")) {
        document.getElementById('jobRole').textContent = "Based on your skills, the predicted job role is: Data Scientist.";
    } else if (skillsArray.includes("javascript") && skillsArray.includes("react") && skillsArray.includes("html")) {
        document.getElementById('jobRole').textContent = "Based on your skills, the predicted job role is: Front-End Developer.";
    } else if (skillsArray.includes("python") && skillsArray.includes("tensorflow") && skillsArray.includes("deep learning")) {
        document.getElementById('jobRole').textContent = "Based on your skills, the predicted job role is: AI Specialist.";
    } else if (skillsArray.includes("java") && skillsArray.includes("spring") && skillsArray.includes("hibernate")) {
        document.getElementById('jobRole').textContent = "Based on your skills, the predicted job role is: Back-End Developer.";
    } else if (skillsArray.includes("project management") && skillsArray.includes("agile") && skillsArray.includes("scrum")) {
        document.getElementById('jobRole').textContent = "Based on your skills, the predicted job role is: Project Manager.";
    } else if (skillsArray.includes("html") && skillsArray.includes("css") && skillsArray.includes("javascript")) {
        document.getElementById('jobRole').textContent = "Based on your skills, the predicted job role is: Web Developer.";
    } else if (skillsArray.includes("devops") && skillsArray.includes("cloud") && skillsArray.includes("aws")) {
        document.getElementById('jobRole').textContent = "Based on your skills, the predicted job role is: DevOps Engineer.";
    } else if (skillsArray.includes("ux") || skillsArray.includes("design") || skillsArray.includes("figma")) {
        document.getElementById('jobRole').textContent = "Based on your skills, the predicted job role is: UX/UI Designer.";
    } else if (skillsArray.includes("sql")) { // Handling the case where only SQL is entered
        document.getElementById('jobRole').textContent = "Based on your skills, the predicted job role is: Database Administrator.";
    } else {
        document.getElementById('jobRole').textContent = "Sorry, we couldn't predict a job role based on the skills you provided.";
    }

    document.getElementById('predictionResult').style.display = "block";
});
