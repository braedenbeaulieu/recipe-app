<template>
    <div>
        <div class="blog-heading">
            <div class="featured-image">
                <div class="image-cover-container poster alignfull">
                    <img :src="recipe.featured_image" :alt="recipe.featured_image_alt">
                </div>
                <p>{{ recipe.short }}</p>
                <div class="overlay alignfull"></div>
            </div>
            <div class="title">
                <h2 v-html="recipe.title"></h2>
            </div>
            <ul class="tags">
                <li v-for="tag in recipe.tags" :key="tag.id">{{ tag.name }}</li>
            </ul>
        </div>
        <div class="recipe-content" v-html="recipe.content"></div>
        <NuxtLink :to="`/recipes/${recipe.slug}`" class="get-started-button">
            <p>Start Recipe</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
            </svg>
        </NuxtLink>
    </div>
</template>

<script setup>
    import { getRecipe, getRecipeTags } from '~/store/store.js'
    
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
            recipe.title =  data[0].title.rendered
            recipe.slug =  data[0].slug
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

            if(recipe.tags.length) {
                // get recipe tags
                getRecipeTags(recipe.tags).then(tags => {
                    recipe.tags = [];
                    if(tags.length) {
                        tags.forEach(tag => {
                            recipe.tags.push({
                                id: tag.id,
                                name: tag.name,
                            })
                        })
                    }
                })
            }
        }
    })
</script>

<style lang="scss">
    @import '~/assets/scss/variables';

    .blog-heading {
        .title {
            h2 {
                font-size: 48px;
                margin-top: 28px;
                margin-bottom: 8px;
            }
        }

        .tags {
            display: flex;
            flex-wrap: wrap;
            margin-bottom: 4px;
            
            li {
                font-weight: 400;
                text-decoration: none;
                cursor: pointer;
                display: inline-block;
                padding: 4px 14px;
                margin-right: 10px;
                border-radius: 6px;
                background: #333;
                color: white;
                margin-bottom: 3px;
                font-size: 12px;
                
                &:hover, &:active {
                    background: $primary;
                }
            }
        }
    }

    .featured-image {
        position: relative;

        p {
            width: 100%;
            position: absolute;
            z-index: 3;
            top: 300px;
            font-weight: bold;
            text-align: center;
            font-size: 50px;
            color: white;
            line-height: 1.2;
        }

        .overlay {
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            z-index: 2;
            background-color: rgba(0, 0, 0, .2);
            box-shadow: inset 0 0 200px black;
        }
    }

    .poster {
        height: 830px;
        max-height: 100vh;
    }

    .recipe-content {
        margin-bottom: 50px;

        ul {
            padding-left: 30px;
            list-style-type: disc;

            li {
                margin-bottom: 6px;
            }
        }
    }

    .get-started-button {
        position: fixed;
        z-index: 10;
        left: 0;
        right: 0;
        bottom: 20px;
        margin-right: auto;
        margin-left: auto;
        width: 220px;
        background-color: #4BB543;
        text-decoration: none;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 12px;
        box-shadow: 0 0 20px rgba(0, 0, 0, .2);
        transition: box-shadow .15s, background-color .15s;

        &:hover, &:focus, &:active {
            box-shadow: 0 0 10px rgba(0, 0, 0, .2);
            background-color: darken(#4BB543, 10);
        }

        p {
            color: white;
            margin-bottom: 0;
            padding: 8px 22px;
            font-weight: bold;
        }

        svg {
            fill: white;
        }
    }
</style>