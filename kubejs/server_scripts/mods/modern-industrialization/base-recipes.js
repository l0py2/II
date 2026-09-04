/*
ServerEvents.recipes(event => {
	const removedRecipes = [
		'modern_industrialization:vanilla_recipes/steel_forge_hammer_asbl',
		'modern_industrialization:assembler_generated/vanilla_recipes/steel_forge_hammer'
	];

	removedRecipes.forEach(recipe => {
		event.remove({ id: recipe });
	});

	event.shaped(
		'modern_industrialization:forge_hammer',
		[
			'AAA',
			' B ',
			'BBB'
		],
		{
			A: 'modern_industrialization:iron_large_plate',
			B: '#c:ingots/iron'
		}
	).id('modern_industrialization:forge_hammer');

	event.recipes.modern_industrialization
		.assembler(8, 200)
		.itemIn('3x modern_industrialization:iron_large_plate')
		.itemIn('4x #c:ingots/iron')
		.itemOut('2x modern_industrialization:forge_hammer');
});
*/
