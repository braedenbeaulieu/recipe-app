<template>
	<div class="recipe-grid item-grid">
		<RecipeGridItem 
			v-for="recipe in props.recipes" 
			:key="recipe.id" 
			:id="recipe.id" 
			:title="recipe.title" 
			:slug="recipe.slug" 
			:img_src="recipe.featured_image"
			:blog_slug="recipe.blog_slug ?? false"
		/>
	</div>
</template>

<script setup>
	const props = defineProps([
        'recipes',
    ])

</script>

<style lang="scss">
	@keyframes fadeIn {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
</style>