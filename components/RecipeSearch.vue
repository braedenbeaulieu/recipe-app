<template>
    <div>
        <form id="recipe-search" :class="{focused: focused}" @submit.prevent> 
            <button class="search-button" @click="search">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                </svg>
            </button>
            <input @focus="focused = true" @blur="focused = false" type="text" id="search" name="search" aria-label="Search our recipes" placeholder="Search..." v-model="search_query">
            <button class="random-button" @click="randomizer">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-shuffle" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M0 3.5A.5.5 0 0 1 .5 3H1c2.202 0 3.827 1.24 4.874 2.418.49.552.865 1.102 1.126 1.532.26-.43.636-.98 1.126-1.532C9.173 4.24 10.798 3 13 3v1c-1.798 0-3.173 1.01-4.126 2.082A9.624 9.624 0 0 0 7.556 8a9.624 9.624 0 0 0 1.317 1.918C9.828 10.99 11.204 12 13 12v1c-2.202 0-3.827-1.24-4.874-2.418A10.595 10.595 0 0 1 7 9.05c-.26.43-.636.98-1.126 1.532C4.827 11.76 3.202 13 1 13H.5a.5.5 0 0 1 0-1H1c1.798 0 3.173-1.01 4.126-2.082A9.624 9.624 0 0 0 6.444 8a9.624 9.624 0 0 0-1.317-1.918C4.172 5.01 2.796 4 1 4H.5a.5.5 0 0 1-.5-.5z"/>
                    <path d="M13 5.466V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192zm0 9v-3.932a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192z"/>
                </svg>
            </button>
        </form>
        <div class="results"></div>
    </div>
</template>

<script setup>
    // TODO: Create search function in store.js
    import { getRandomRecipe } from '~/store/store.js'

    const emit = defineEmits(['search'])
    const route = useRoute()
    let search_query = ref(route.query.s)
    let tag = ref(route.query.tag) ?? false
    let focused = ref(false);

    if(search_query) {
        emit('search', search_query.value)
    }

    const currentRoute = computed(() => {
        return useRouter().currentRoute.value.name
    })

    let search = (e) => {
        e.preventDefault()
        
        if(currentRoute.value != 'recipes-search') {
            window.location.href = window.location.origin + `/recipes/search/?s=${search_query.value}`;
            return
        }
        route.query.s = search_query.value
        emit('search', search_query.value)
    }

    let randomizer = () => {
        let randomRecipe = getRandomRecipe()

        window.location.href = `/recipes/${randomRecipe.slug}/`;
    }
    
</script>

<style lang="scss">
    @import '~/assets/scss/variables';

    #recipe-search {
        border: 1px solid rgba(0, 0, 0, 0.7);
        width: 100%;
        max-width: 428px;
        height: 44px;
        border-radius: 12px;
        display: flex;
        flex-direction: row;
        align-items: center;
        -webkit-backdrop-filter: blur(10px);
        backdrop-filter: blur(10px);
        margin-bottom: 20px;
        padding: 0 4px;
        transition: border-color .15s, box-shadow .15s;

        &.focused {
            box-shadow: 0 0 10px rgba($primary-dark, .08);
            border-color: $primary-dark;

            svg {
                fill: $primary-dark;
            }
        }

        input {
            all: unset;
            font: 16px system-ui;
            color: #000;
            height: 100%;
            width: 100%;
            padding: 6px 10px;

            &::placeholder {
                color: #000;
                opacity: 0.7;
            }
        }

        button {
            all: unset;
            cursor: pointer;
            width: 44px;
            height: 44px;
            display: flex;
            justify-content: center;
            align-items: center;
            
            svg {
                color: #000;
                fill: currentColor;
                width: 20px;
                height: 20px;
                padding: 10px;
                transition: border-color .15s, box-shadow .15s;
            }
        }
    }
</style>