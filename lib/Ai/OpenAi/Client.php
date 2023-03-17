<?php

namespace Up\Projector\Ai\OpenAi;

class Client
{
	public function ask(string $anything): string
	{
		return $anything . ' - some response from ChatGPT or something';
	}
}
