import { genereteTemplateProjects } from "./templateProjects.mjs"
export function displayProjects() {
	const $projectoContainer = document.querySelector(
		".projects__container-proyects"
	)
	const projectos = genereteTemplateProjects()
	$projectoContainer?.appendChild(projectos)
}
