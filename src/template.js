//function to create manager card
let generateManager = manager => {
    return `
    <div class="col-3">
        <div class="card">
        <div class="card-header">
            <h3>${manager.name}</h3>
            <h4><i class="fas fa-mug-hot"></i> Manager</h4>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${manager.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
            <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
        </ul>
        </div>
    </div>
    `;
}

//function to create engineer card
let generateEngineer = engineer => {
    return `
    <div class="col-3">
        <div class="card">
        <div class="card-header">
            <h3>${engineer.name}</h3>
            <h4><i class="fas fa-laptop-code"></i> Engineer</h4>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${engineer.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
            <li class="list-group-item git">GitHub: <a href="https://github.com/${engineer.github}" target="_blank">${engineer.github}</a></li>
        </ul>
        </div>
    </div>
    `;
}

//function to create intern card
let generateIntern = intern => {
    return `
    <div class="col-3">
        <div class="card">
        <div class="card-header">
            <h3>${intern.name}</h3>
            <h4><i class="fas fa-user-graduate"></i> Intern</h4>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${intern.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
            <li class="list-group-item">School: ${intern.school}</li>
        </ul>
        </div>
    </div>
    `;
}

//function to generate html for dist/index.html
const generatePage = cards => {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <script src="https://kit.fontawesome.com/f175fc73c6.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="style.css">
    <title>My Team</title>
</head>
<body>
    <header>
        <h1>My Team</h1>
    </header>
    <div class="row">
        ${cards}
    </div>
</body>
</html>
`;
};

// loops through data objects and creates role specific cards
const generateHTML = data => {
    
    let cards = [];
    
    for(i = 0; i < data.length; i++) {

        const employee = data[i]
        const role = employee.getRole();
        
        if (role === "manager") {
            const managerCard = generateManager(employee)
            cards.push(managerCard)

        } else if (role === "engineer") {
            const engineerCard = generateEngineer(employee)
            cards.push(engineerCard)

        } else {
            const internCard = generateIntern(employee)
            cards.push(internCard)
        }
    }

    return generatePage(cards);
}

module.exports = generateHTML;