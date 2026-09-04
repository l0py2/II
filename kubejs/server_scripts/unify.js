RecipeViewerEvents.removeEntries('item', event => {
	if(!global.HIDE_ITEMS) {
		return;
	}

	global.REMOVED_ITEMS.forEach(item => event.remove(item));
});

ServerEvents.tags('item', event => {
	global.REMOVED_ITEMS.forEach(item => {
		event.removeAllTagsFrom(item);
		event.add('kubejs:removed', item);
	});
});

ServerEvents.tags('block', event => {
	global.REMOVED_ITEMS.forEach(item => {
		if(!Item.of(item).getBlock()) {
			return;
		}

		event.removeAllTagsFrom(item);
		event.add('kubejs:removed', item);
		event.add('minecraft:mineable/axe', item);
		event.add('minecraft:mineable/pickaxe', item);
	});
});


LootJS.modifiers(event => {
	if(global.REMOVED_ITEMS.length == 0) {
		return;
	}

	const lootTables = event.addTableModifier(/.*/);

	global.DROP_REPLACEMENTS.forEach([original, replacement] => lootTables.replaceLoot(original, replacement, true));
	global.REMOVED_DROPS.forEach(item => lootTables.removeLoot(item));
	global.REMOVED_ITEMS.forEach(item => lootTables.removeLoot(item));
});

ServerEvents.recipes(event => {
	global.REMOVED_RECIPES.forEach(recipe => event.remove(recipe));
	global.INPUT_REPLACEMENTS.forEach([original, replacement] => event.replaceInput({}, original, replacement));
	global.OUTPUT_REPLACEMENTS.forEach([original, replacement] => event.replaceInput({}, original, replacement));

	global.REMOVED_ITEMS.forEach(item => {
		event.replaceInput({}, item, 'minecraft:barrier');
		event.remove({ output: item });
	});
});
