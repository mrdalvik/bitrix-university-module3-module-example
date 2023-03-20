<?php

namespace Up\Projector\Project;

use Up\Projector\Model\ProjectsTable;

class Repository
{
	public static function getPage(int $itemsPerPage, int $pageNumber): array
	{
		if ($pageNumber > 1)
		{
			$offset = $itemsPerPage * ($pageNumber - 1);
		}
		else
		{
			$offset = 0;
		}

		$projectList = ProjectsTable::getList([
			'select' => [
				'ID',
				'NAME'
			],
			'limit' => $itemsPerPage,
			'offset' => $offset,
		])->fetchAll();

		return $projectList;
	}
}
