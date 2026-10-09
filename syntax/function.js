function greet(name) {
    console.log("Hello, " + name + "!");
}
greet("gagan pandet");






// ====================================
// GAGAN PANDEY - PERSONAL INTRODUCTION
// ====================================

// Function to welcome a person
function greet(name, profession, skills) {

    console.log("================================");
    console.log("       WELCOME TO MY WORLD      ");
    console.log("================================");

    console.log("Hello, " + name + "!");
    console.log("Profession: " + profession);

    console.log("\nMy Skills:");

    // Display every skill one by one
    for (let i = 0; i < skills.length; i++) {
        console.log((i + 1) + ". " + skills[i]);
    }

    console.log("\nKeep Learning, Keep Growing!");
    console.log("================================");
}

// Your personal information
let myName = "Gagan Pandey";
let myProfession = "Aspiring AI Engineer";

let mySkills = [
    "Python Programming",
    "Artificial Intelligence",
    "JavaScript",
    "Web Development",
    "AI Tools"
];

// Call the function
greet(myName, myProfession, mySkills);