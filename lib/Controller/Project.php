<?php
namespace Up\Projector\Controller;

use Bitrix\Main\Error;
use Up\Projector\Project\Repository;

class Project extends \Bitrix\Main\Engine\Controller
{
	protected const PROJECT_PER_PAGE = 20;
	protected function getDefaultPreFilters(): array
	{
		return [
			new ActionFilter\ApiKeyAuthorization(),
		];
	}

	public function getListAction(int $pageNumber = 1): ?array
	{
		if ($pageNumber < 0)
		{
			$this->addError(new Error('pageNumber should be greater than 0', 'invalid_page_number'));

			return null;
		}

		$projectList = Repository::getList(self::PROJECT_PER_PAGE, self::PROJECT_PER_PAGE * $pageNumber);

		return [
			'pageNumber' => $pageNumber,
			'projectList' => $projectList,
		];
	}
}
