function topProjectChange(event) {

    let title = document.getElementById("best-project-display-title");
    let image = document.getElementById("best-project-display-img");
    let description = document.getElementById("best-project-display-desc");

    switch (event.target.innerHTML) {
        case "Project 1": 
            title.innerHTML = event.target.innerHTML;
            image.src = "./resources/images/project1.jpg"
            image.alt = "Astronaut on moon drinking beer"
            description.innerHTML = "This is a description for the first project I created. Apparently this \n\
                                     one is about an astronaut on the moon...";
            break;
        case "Project 2": 
            title.innerHTML = event.target.innerHTML;
            image.src = "./resources/images/project2.jpg"
            image.alt = "Futuristic city street"
            description.innerHTML = "This is a description for the second project I created. This \n\
                                    one is a bit more futuristic in a random city... maybe about a game?";
            break;
        case "Project 3": 
            title.innerHTML = event.target.innerHTML;
            image.src = "./resources/images/project3.jpg"
            image.alt = "Mercedes in forest"
            description.innerHTML = "This is a description for the third project I created. This \n\
                                    one has a nice car, maybe a dealership website... or another game.";    
            break;
        default:
            title.innerHTML = "Project 1";
            image.src = "./resources/images/project1.jpg"
            image.alt = "Astronaut on moon drinking beer"
            description.innerHTML = "This is a description for the first project I created. Apparently this \n\
                                    one is about an astronaut on the moon...";
            break;                                
    }

    image.style.display = "block"
}