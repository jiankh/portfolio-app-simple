import Projects from "./projectData.js"

const projectContainer = document.querySelector(".project-container")

function createProject(img, title, description, codeLink, previewLink) {
    const project = document.createElement("div")
    project.classList.add("project")
    project.innerHTML = `
    <div class="project-img"><img src="${img}"></div>
    <div class="project-description">
        <div class="project-title">${title}</div>
        <div class="description"> ${description} </div>
        <div class="buttons">
            <input type="button" onclick="location.href='${codeLink}';" value="View Code" />
            <input type="button" onclick="location.href='${previewLink}';" value="Live Preview" />
        </div>
    </div>
    `

    projectContainer.appendChild(project)
}



Projects.forEach((project) => {
    createProject(project.img, project.title, project.description, project.codeLink, project.previewLink)
})

