<template>
	<div class="recipe-list">
		<NuxtLink class="recipe-list-item" 
			v-for="recipe in props.recipes" 
			:key="recipe.slug" 
			:to="`/recipes/${recipe.slug}/`" 
		>
            <div>
                <p class="title" v-html="recipe.title"></p>
                <p class="time">{{ parseInt(recipe.prep_time) + parseInt(recipe.cook_time) }} mins</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"/>
                    <path fill-rule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"/>
                </svg>
            </div>
	    </NuxtLink>
	</div>
</template>

<script setup>
	const props = defineProps([
        'recipes',
    ])

    console.log('props', props.recipes)
</script>

<style lang="scss">
    @import '~/assets/scss/variables';

    .recipe-list {
        .recipe-list-item {
            display: block;
            margin-bottom: 0;
            // border: 1px solid rgba(0, 0, 0, 0.7);
            // border-radius: 12px;
            border-bottom: 1px solid rgba(0, 0, 0, 0.7);
            padding: 8px 11px;
            text-decoration: none;
            width: 100%;

            &:last-child {
                border-bottom: 0;
            }

            & > div {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 0 12px;
                border-radius: 20px;
                transition: background-color .15s;
            }

            &:hover > div, &:active > div {
                color: $primary;
                // color: black;
            }
            
            p {
                margin-bottom: 0;
                color: inherit;

                &.title {
                    font-weight: bold;
                    font-size: 18px;
                }

                &.time {
                    margin-left: auto;
                    margin-right: 25px;
                }
            }
        }
    }
</style>