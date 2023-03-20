<?php
namespace Up\Projector\Controller;

use Bitrix\Main\Engine;
use Bitrix\Main\Error;
use Up\Projector\Project\Repository;

class Project extends Engine\Controller
{
	protected const PROJECT_PER_PAGE = 20;
//	protected function getDefaultPreFilters(): array
//	{
//		return [
//			new ActionFilter\ApiKeyAuthorization(),
//		];
//	}

	public function getListAction(int $pageNumber = 1): ?array
	{
		if ($pageNumber < 0)
		{
			$this->addError(new Error('pageNumber should be greater than 0', 'invalid_page_number'));

			return null;
		}

		$projectList = Repository::getPage(self::PROJECT_PER_PAGE, $pageNumber);

		return [
			'pageNumber' => $pageNumber,
			'projectList' => $projectList,
		];
	}

//	public function configureActions(): array
//	{
//		return [
//			'getList' => [
//				'+prefilters' => [
//					new ActionFilter\ApiKeyAuthorization(),
//				],
//				'-prefilters' => [
//					Engine\ActionFilter\Csrf::class,
//				],
//			],
//		];
//	}
}
