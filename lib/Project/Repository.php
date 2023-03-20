<?php
namespace Up\Projector\Project;

class Repository
{
	public static function getList(int $limit, int $offset): array
	{
		return [
			[
				'id' => 1,
				'name' => 'Test 1',
			],
			[
				'id' => 2,
				'name' => 'Test 2',
			],
		];
	}
}
