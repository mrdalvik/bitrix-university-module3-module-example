import {Type, Tag, Loc} from 'main.core';
import './project-list.css';

export class ProjectList
{
	constructor(options = {})
	{
		if (Type.isStringFilled(options.rootNodeId))
		{
			this.rootNodeId = options.rootNodeId;
		}
		else
		{
			throw new Error('ProjectList: options.rootNodeId required');
		}

		this.rootNode = document.getElementById(this.rootNodeId);
		if (!this.rootNode)
		{
			throw new Error(`ProjectList: element with id "${this.rootNodeId}" not found`);
		}

		this.projectList = [];
		this.reload();
	}

	reload()
	{
		this.loadList()
			.then(projectList => {
				this.projectList = projectList;

				this.render();
			});
	}

	loadList()
	{
		return new Promise((resolve, reject) => {
			BX.ajax.runAction(
				'up:projector.project.getList',
				{
					data: {
						apiKey: 'very_secret_key',
					}
				})
				.then((responce) => {
					const projectList = responce.data.projectList;

					resolve(projectList);
				})
				.catch((error) => {
					console.error(error);
				})
			;
		});
	}

	render()
	{
		this.rootNode.innerHTML = '';

		const moviesContainerNode = Tag.render`<div class="columns"></div>`;

		this.projectList.forEach(projectData => {
			const projectNode = Tag.render`
				<div class="column">
					<div class="card project-card">
						<header class="card-header">
							<a class="card-header-title card-header-title-from-database" href="/projects/${projectData.ID}/">
								${projectData.NAME}
							</a>
							<button class="card-header-icon" aria-label="more options">
								<span class="icon disabled">
								*
								</span>
							</button>
						</header>
					<div class="card-content">
						<div class="content">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem blanditiis commodi cum dicta ex excepturi in ipsa, iusto maxime molestiae nobis non officia officiis porro sunt, tempore vel vero, voluptates!\t\t\t\t</div>
						</div>
						<footer class="card-footer">
							<span class="card-footer-item is-size-7">
								<strong>${Loc.getMessage('UP_PROJECTOR_PROJECT_LIST_TASKS_OPENED')}</strong>: 10
							</span>
							<span class="card-footer-item is-size-7">
								<strong>${Loc.getMessage('UP_PROJECTOR_PROJECT_LIST_LAST_ACTIVITY')}</strong>: 20.Mar 14:49
							</span>
						</footer>
					</div>
				</div>
			`;

			moviesContainerNode.appendChild(projectNode);
		});

		this.rootNode.appendChild(moviesContainerNode);
	}
}