BlockEvents.modification(event => {
	Ingredient.all.itemIds.forEach(item => {
		let blockItem = Item.of(item).getBlock();

		if(!blockItem) {
			return;
		}

		let destroySpeed = 0.5;

		if(blockItem.hasTag('minecraft:mineable/pickaxe')) {
			destroySpeed = 1;
		}

		event.modify(item, block => {
			block.destroySpeed = destroySpeed;
		});
	});
});
