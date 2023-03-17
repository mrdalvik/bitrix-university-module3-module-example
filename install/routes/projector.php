<?php

use Bitrix\Main\Routing\Controllers\PublicPageController;
use Bitrix\Main\Routing\RoutingConfigurator;

return function (RoutingConfigurator $routes) {

	$routes->get('/', new PublicPageController('/local/modules/up.projector/views/project-list.php'));
	$routes->get('/projects/', new PublicPageController('/local/modules/up.projector/views/project-list.php'));
	$routes->get('/projects/create/', new PublicPageController('/local/modules/up.projector/views/project-create.php'));
	$routes->get('/projects/{id}/edit/', new PublicPageController('/local/modules/up.projector/views/project-create.php'));
	$routes->get('/projects/{id}/issue/', new PublicPageController('/local/modules/up.projector/views/task-create.php'));
	$routes->get('/projects/{id}/', new PublicPageController('/local/modules/up.projector/views/project-details.php'));

	$routes->post('/projects/', function () {
		// create new project
	});
	$routes->post('/projects/{id}/', function () {
		// update existing project
	});
	$routes->post('/projects/{id}/delete/', function () {
		// delete project
	});
	$routes->post('/projects/{id}/issue/', function () {
		// create new issue
	});

	$routes->get('/issues/{id}/edit/', new PublicPageController('/local/modules/up.projector/views/task-create.php'));
	$routes->get('/issues/{id}/', new PublicPageController('/local/modules/up.projector/views/task-details.php'));

	$routes->post('/issues/{id}/', function () {
		// update existing task
	});
	$routes->post('/issues/{id}/delete/', function () {
		// delete task
	});
	$routes->post('/issues/{id}/comment/', function () {
		// handle adding comment
		var_dump($_REQUEST);die;
	});

};