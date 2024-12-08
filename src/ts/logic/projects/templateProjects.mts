const projectos = [
	{
		title: "Projecto 1",
		image: "https://designshack.net/wp-content/uploads/Dark-MacBook-Laptop-Mockup.jpg ",
		description: "Este es el projecto 1.",
		links: ["", "https://github.com/3eze3"],
		technologies: ["html", "css", "js"],
		fecha_inicio: "2024",
	},
	{
		title: "Projecto 2",
		image: "https://designshack.net/wp-content/uploads/Dark-MacBook-Laptop-Mockup.jpg ",
		description: "Este s el projecto 1.",
		links: ["https://youtube.com/@eze-coder", "https://github.com/3eze3"],
		technologies: ["html", "scss", "ts"],
		fecha_inicio: "2021",
	},
	{
		title: "Projecto 3",
		image: "https://designshack.net/wp-content/uploads/Dark-MacBook-Laptop-Mockup.jpg ",
		description: "Este es el projecto 1.",
		links: ["https://youtube.com/@eze-coder", "https://github.com/3eze3"],
		technologies: ["html", "css", "js", "react"],
		fecha_inicio: "2022",
	},
	{
		title: "Projecto 4",
		image: "https://designshack.net/wp-content/uploads/Dark-MacBook-Laptop-Mockup.jpg ",
		description: "Este es el projecto 1.",
		links: ["https://youtube.com/@eze-coder", "https://github.com/3eze3"],
		technologies: ["html", "css", "nodejs", "react"],
		fecha_inicio: "2023",
	},
]

export function genereteTemplateProjects() {
	const $Fragment = new DocumentFragment()
	const classNames = ["card", "projects__card", "projects-principal"]
	projectos.forEach((projecto) => {
		const $card = document.createElement("article")
		$card.classList.add(...classNames)
		const { title, image, description, links, technologies, fecha_inicio } =
			projecto
		$card.setAttribute("data-technologies", technologies.join(","))
		const [youtbe, github] = links

		$card.innerHTML = `
		<a class="card__page-link" href="#">
			<img
			 loading="lazy"
			 class="card__img"
			 src=${image}
			 alt="Ilustracion del proyecto" />
		</a>
		<section class="card__content">
		    <div class="card__information">
		        <h3 class="card__title">${title}</h3>
		        <p class="card__description">${description}</p>
		    </div>
		    <div class="card__box">
		        <div class="card__social">
		            <a aria-label="Video de Youtube del desarrollo del projecto" class="card__link card__link--youtube 
					${!youtbe ? "card__link--disabled" : ""}"href=${youtbe || "#"}>
						${youtbe ? "YT video" : "Video proximamente..."}
	                </a>
	                <a aria-label="Codigo del projecto" class="card__link card__link--github 
					${!github ? "card__link--disabled" : ""} "href=${github || "#"}>
						${github ? "github" : "Repo aun no actulizado"}
	                </a>
		        </div>
		        <strong class="card__year">${fecha_inicio}</strong>
		    </div>
		</section>
    `
		$Fragment.appendChild($card)
	})
	return $Fragment
}
