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

	let all_recipes = ref([])
	// let random_recipe = reactive(getRandomRecipe())
	let random_recipe = reactive({
        title: '',
        slug: '',
        short: '',
        featured_image: '',
        featured_image_alt: '',
        has_blog: false,
    })

	getRandomRecipe().then(data => {
        if(data) {
            random_recipe.title =  data[0].title.rendered
            random_recipe.slug =  data[0].slug
            random_recipe.short =  data[0].acf.short
            random_recipe.featured_image = data[0]._embedded['wp:featuredmedia'][0].source_url
            random_recipe.featured_image_alt = data[0]._embedded['wp:featuredmedia'][0].alt_text
        }
    })

	getRecipes().then(data => {
        if(data) {
			data.forEach(recipe => {
				let recipe_obj = {
					id: recipe.id,
					title: recipe.title.rendered,
					slug: recipe.slug,
					featured_image: recipe._embedded['wp:featuredmedia'][0].source_url,
					featured_image_alt: recipe._embedded['wp:featuredmedia'][0].alt_text,
				}

				if(recipe.content.rendered) {
					recipe_obj.has_blog = true
				}

				all_recipes.value.push(recipe_obj)
			})
        }
    })

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