<template>
    <div>
        <!-- <FeaturedRecipe :slug="slug" :title="title" :short="short" :featured_image="featured_image" :featured_image_alt="featured_image_alt" /> -->
        <h2>Tag: <span>{{ tag }}</span></h2>
        <RecipeGrid :recipes="tagged_recipes" />
    </div>
</template>

<script setup>
    import { getRecipes } from '~/store/store.js'

    const route = useRoute()
    let tag = route.params.tag
    let tagged_recipes = getRecipes('tag', tag)
</script>

<style lang="scss" scoped>
    span {
        text-transform: capitalize;
    }

    h2 {
        font-size: 18px;
    }
</style>