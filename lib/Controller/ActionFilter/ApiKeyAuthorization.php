<?php
namespace Up\Projector\Controller\ActionFilter;

use Bitrix\Main\Context;
use Bitrix\Main\Error;
use Bitrix\Main\Event;
use Bitrix\Main\EventResult;

final class ApiKeyAuthorization extends \Bitrix\Main\Engine\ActionFilter\Base
{
	public function onBeforeAction(Event $event): ?EventResult
	{
		$apiKey = Context::getCurrent()->getRequest()->get('api_key');
		$isValidApiKey = $apiKey === 'very_secret_key';
		if ($isValidApiKey)
		{
			return null;
		}

		Context::getCurrent()->getResponse()->setStatus(401);

		$this->addError(new Error('Invalid key', 'invalid_key'));

		return new EventResult(EventResult::ERROR, null, null, $this);
	}
}