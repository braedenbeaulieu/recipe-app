<template>
	<div>
		<FeaturedRecipe :slug="random_recipe.slug" :title="random_recipe.title" :short="random_recipe.short" :featured_image="random_recipe.featured_image" :featured_image_alt="random_recipe.featured_image_alt" />
		<RecipeSearch />
		<p class="page-subtitle">Our latest and greatest</p>
		<h2>All Recipes</h2>
		<RecipeGrid :recipes="all_recipes" />
		<h2>Search by tag</h2>
		<div class="tags item-grid">
			<NuxtLink :to="`/recipes/search/?s=${tag.name}`" class="tag" v-for="tag in tags" :key="tag.name" :style="tag.gradient">
				<h3>{{ tag.name }}</h3>
			</NuxtLink>
		</div>
	</div>
</template>

<script setup>
	import { getRecipes, getRandomRecipe } from '~/store/store.js'

	let all_recipes = getRecipes()
	let random_recipe = reactive(getRandomRecipe())

	let tags = [
		{
			name: 'mexican',
			gradient: 'background-color: #4158D0;background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);'
		},
		{
			name: 'creamy',
			gradient: 'background-color: #0093E9;background-image: linear-gradient(160deg, #0093E9 0%, #80D0C7 100%);'
		}
	]
</script>

<style lang="scss">
	.tags {
		.tag {
			border-radius: 10px;
			color: white;
			text-transform: capitalize;
			text-align: center;
			display: flex;
			flex-direction: column;
			justify-content: center;
			height: 200px;
			margin-bottom: 0;
		}
	}
</style>