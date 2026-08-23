ServerEvents.tags('block', event => {
	event.get('minecraft:needs_iron_tool').getObjectIds().forEach(block => {
		event.remove('minecraft:needs_iron_tool', block);
		event.add('minecraft:needs_stone_tool', block);
	});

	event.get('minecraft:needs_diamond_tool').getObjectIds().forEach(block => {
		event.remove('minecraft:needs_diamond_tool', block);
		event.add('minecraft:needs_stone_tool', block);
	});

	event.removeAll('minecraft:incorrect_for_stone_tool');
	event.removeAll('minecraft:incorrect_for_gold_tool');
	event.removeAll('minecraft:incorrect_for_iron_tool');
});
