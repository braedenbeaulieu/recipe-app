<template>
    <div>
        <FeaturedRecipe :slug="recipe.slug" :title="recipe.title" :short="recipe.short" :featured_image="recipe.featured_image" :featured_image_alt="recipe.featured_image_alt" />
        <p>
            {{ recipe_blog.content }}
        </p>
        <NuxtLink :to="`/recipes/${recipe.slug}`" class="get-started-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
            </svg>
            <p>Back</p>
        </NuxtLink>
    </div>
</template>

<script setup>
    import { getBlog, getRecipe } from '~/store/store.js'
    
    const route = useRoute()
    let recipe_blog = getBlog(route.params.slug)
    let recipe = getRecipe(route.params.slug)
</script>

<style>

</style>