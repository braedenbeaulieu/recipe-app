<template>
    <NuxtLink :to="`/recipes/${props.slug}`" class="featured-recipe">
        <div class="image-cover-container poster">
            <img :src="props.featured_image" :alt="props.featured_image_alt">
        </div>
        <div class="title">
            <p>{{ props.short }}</p>
            <h2 v-html="props.title"></h2>
        </div>
    </NuxtLink>
</template>

<script setup>
    const props = defineProps([
        'title',
        'slug',
        'short',
        'featured_image',
        'featured_image_alt',
    ])
</script>

<style lang="scss">
    .featured-recipe {
        display: block;
        border-radius: 10px;
        position: relative;
        margin-bottom: 16px;

        .poster {
            height: 400px;
        }

        img {
            border-radius: 10px;
        }

        .title {
            position: absolute;
            bottom: 0;
            right: 0;
            left: 0;
            width: 100%;
            background: linear-gradient(rgba(0, 0, 0, 0),rgba(0, 0, 0, .7));
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            padding: 120px 10px 10px;
            border-radius: 0 0 10px 10px;

            h2 {
                font-size: 38px;
                color: white;
                margin: 0;
                letter-spacing: .4px;
            }

            p {
                margin: 0;
                color: rgba(255, 255, 255, .9);
                font-weight: normal;
                letter-spacing: .4px;
            }
        }
    }
</style>