ItemEvents.modifyTooltips(event => {
	global.DROP_REPLACEMENTS.forEach([original, replacement] => event.add(original, Text.green(`Drop replaced with ${replacement}`)));

	global.INPUT_REPLACEMENTS.forEach([original, replacement] => {
		if(original.startsWith('#')) {
			return;
		}

		event.add(original, Text.green(`Input replaced with ${replacement}`));
	});

	global.OUTPUT_REPLACEMENTS.forEach([original, replacement] => {
		if(original.startsWith('#')) {
			return;
		}

		event.add(original, Text.green(`Output replaced with ${replacement}`));
	});

	global.REMOVED_ITEMS.forEach(item => event.add(item, Text.red('Item removed')));
});
