<template>
    <RecipeSearch @search="searching" />
    <!-- <RecipeGrid :recipes="recipes" /> -->
    <RecipeList v-if="!no_posts" :recipes="recipes" />
    <div v-if="no_posts">
        No recipes found for: {{ route.query.s }}
    </div>
</template>

<script setup>
    import { getRecipes } from '~/store/store.js'

    let recipes = ref([])
    let no_posts = ref(false)

    let searching = (search_query) => {
        recipes.value = []

        getRecipes({ 
            search: search_query,
        }).then(data => {
            if(data) {
                data.forEach(recipe => {
                    recipes.value.push({
                        id: recipe.id,
                        title: recipe.title.rendered,
                        slug: recipe.slug,
                        prep_time: recipe.acf.prep_time,
                        cook_time: recipe.acf.cook_time,
                    })
                })
         
                if(recipes.value.length == 0) {
                    no_posts.value = true;
                } else {
                    no_posts.value = false;
                }
            }
        })
    }
</script>