<template>
    <transition name="fade">
        <NuxtLink :to="recipe_link" class="recipe-grid-item">
            <figure class="image-cover-container poster">
                <img :src="props.img_src" :alt="props.img_alt">
            </figure>
            <div class="content">
                <p>{{ props.title }}</p>
            </div>
        </NuxtLink>
    </transition>
</template>

<script setup>
    const props = defineProps([
        'id',
        'title',
        'slug',
        'description',
        'poster',
        'img_src',
        'img_alt',
        'blog_slug'
    ])

    let recipe_link = `/recipes/${props.slug}`

    if(props.blog_id !== false) {
        recipe_link = `/blog/${props.blog_slug}`
    }

    definePageMeta({
        transition: {
            name: 'fade',
        },
        keepAlive: {
            exclude: ['modal']
        },
    })
</script>

<script>
    export default {
        // namekey becomes required
        transition: {
            name: 'fade',
            mode: 'in-out', // default is out-in
            appear: true, // default is false
        }
    }
</script>

<style lang="scss" scoped>
    .fade-enter-from, .fade-leave-to {
        opacity: 0;
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity .3s;
    }
    .fade-enter-to, .fade-leave-from {
        opacity: 1;

        p {
            color: red!important;
        }
    }

    .recipe-grid-item {
        text-decoration: none;
        color: black;
        border-radius: 10px;
        box-shadow: 0px 3px 10px rgba(0, 0, 0, .15);
        transition: box-shadow .15s;
        position: relative;

        .poster {
            height: 200px;
            margin: 0;
            padding: 0;

            img {
                border-radius: 10px;
            }
        }

        .content {
            position: absolute;
            bottom: 0;
            right: 0;
            left: 0;
            width: 100%;
            background: linear-gradient(rgba(0, 0, 0, 0),rgba(0, 0, 0, .7));
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            padding: 20% 10px 0;
            border-radius: 0 0 10px 10px;
            color: white;

            p {
                margin-bottom: 10px;
                font-weight: 700;
                letter-spacing: .4px;
                font-size: 20px;
                line-height: 1.1;
            }
        }

        &:hover {
            box-shadow: 0px 3px 10px rgba(0, 0, 0, .05);

            img {
                filter: grayscale(0%);
            }
        }
    }
</style>