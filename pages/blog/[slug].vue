<template>
    <div>
        <div class="blog-heading">
            <div class="image-cover-container poster alignfull">
                <img :src="recipe.featured_image" :alt="recipe.featured_image_alt">
            </div>
            <div class="title">
                <h2 v-html="recipe.title"></h2>
            </div>
            <ul class="tags">
                <li v-for="(tag, index) in recipe.tags" :key="index">{{ tag }}</li>
            </ul>
        </div>
        <div class="recipe-content" v-html="recipe.content"></div>
        <NuxtLink :to="`/recipes/${recipe.slug}`" class="get-started-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
            </svg>
            <p>Back</p>
        </NuxtLink>
    </div>
</template>

<script setup>
    import { getRecipe } from '~/store/store.js'
    
    const route = useRoute()
    let recipe = reactive({
        title: '',
        slug: '',
        content: '',
        short: '',
        featured_image: '',
        featured_image_alt: '',
        tags: '',
        meta: {
            difficulty: '',
            servings: '',
            prep_time: '',
            cook_time: '',
            cooks_note: '',
            oven: {
                temp_unit: '',
                temp: '',
            }
        },
    })

    getRecipe(route.params.slug).then(data => {
        if(data) {
            console.log(recipe.tags)
            recipe.title =  data[0].title.rendered
            recipe.slug =  data[0].slug
            recipe.blog_slug =  data[0].slug
            recipe.content =  data[0].content.rendered
            recipe.short =  data[0].acf.short
            recipe.featured_image = data[0]._embedded['wp:featuredmedia'][0].source_url
            recipe.featured_image_alt = data[0]._embedded['wp:featuredmedia'][0].alt_text
            recipe.tags =  data[0].tags
            recipe.meta = {
                difficulty:  data[0].acf.difficulty,
                servings:  data[0].acf.servings,
                prep_time:  data[0].acf.prep_time,
                cook_time:  data[0].acf.cook_time,
                cooks_note:  data[0].acf.cooks_note,
                oven: {
                    temp_unit:  'F',
                    temp:  data[0].acf.oven_temp
                }
            }
        }
    })

</script>

<style lang="scss">
    .blog-heading {
        .title {
            h2 {
                font-size: 40px;
                margin-top: 28px;
                margin-bottom: 8px;
            }
        }
    }

    .poster {
        height: 400px;
    }
</style>