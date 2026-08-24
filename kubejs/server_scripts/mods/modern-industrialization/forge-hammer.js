ServerEvents.recipes(event => {
	function forgeHammer(output, input, damage) {
		let recipe = {
			type: 'modern_industrialization:forge_hammer',
			ingredient: Ingredient.of(input).toJson(),
			result: Item.of(output).toJson()
		};

		if(damage && damage > 0) {
			recipe.damage = damage;
		}

		event.custom(recipe);
	}

	event.remove({ type: 'modern_industrialization:forge_hammer' });

	[
		'copper',
		'iron',
		'gold',
		'tin',
		'steel',
		'bronze',
	].forEach(material => {
		forgeHammer(`modern_industrialization:${material}_plate`, `#c:ingots/${material}`, 10);

		forgeHammer(`2x modern_industrialization:${material}_rod`, `#c:ingots/${material}`, 10);

		forgeHammer(`2x modern_industrialization:${material}_bolt`, `modern_industrialization:${material}_rod`, 10);
		forgeHammer(`4x modern_industrialization:${material}_bolt`, `#c:ingots/${material}`, 30);

		forgeHammer(`modern_industrialization:${material}_ring`, `modern_industrialization:${material}_rod`, 10);
		forgeHammer(`2x modern_industrialization:${material}_ring`, `#c:ingots/${material}`, 30);

		forgeHammer(`modern_industrialization:${material}_dust`, `#c:ingots/${material}`, 10);
	});

	[
		'copper',
		'gold',
		'tin',
		'steel',
		'bronze',
	].forEach(material => {
		forgeHammer(`modern_industrialization:${material}_curved_plate`, `modern_industrialization:${material}_plate`, 10);
		forgeHammer(`modern_industrialization:${material}_curved_plate`, `#c:ingots/${material}`, 20);
	});
});
