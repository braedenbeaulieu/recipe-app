<template>
    <div class="mb-3">
        <form id="recipe-search" class="mx-auto bg-[#dedcd9] flex rounded-full focus-within:shadow focus-within:bg-[#1a4e48]/25 focus-within:text-black transition-colors placeholder:text-white" :class="{focused: focused}" @submit.prevent> 
            <button class="px-3 rounded-l-full hover:bg-black/20" @click="search">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                </svg>
            </button>
            <input @keydown.enter="search" @focus="focused = true" @blur="focused = false" class="w-full h-[44px] py-2 px-1 bg-transparent color-black focus:outline-0 placeholder:text-black" type="text" id="search" name="search" aria-label="Search our recipes" placeholder="Search..." v-model="search_query">
            <button class="px-3 rounded-r-full hover:bg-black/20" @click="randomizer">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-shuffle" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M0 3.5A.5.5 0 0 1 .5 3H1c2.202 0 3.827 1.24 4.874 2.418.49.552.865 1.102 1.126 1.532.26-.43.636-.98 1.126-1.532C9.173 4.24 10.798 3 13 3v1c-1.798 0-3.173 1.01-4.126 2.082A9.624 9.624 0 0 0 7.556 8a9.624 9.624 0 0 0 1.317 1.918C9.828 10.99 11.204 12 13 12v1c-2.202 0-3.827-1.24-4.874-2.418A10.595 10.595 0 0 1 7 9.05c-.26.43-.636.98-1.126 1.532C4.827 11.76 3.202 13 1 13H.5a.5.5 0 0 1 0-1H1c1.798 0 3.173-1.01 4.126-2.082A9.624 9.624 0 0 0 6.444 8a9.624 9.624 0 0 0-1.317-1.918C4.172 5.01 2.796 4 1 4H.5a.5.5 0 0 1-.5-.5z"/>
                    <path d="M13 5.466V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192zm0 9v-3.932a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192z"/>
                </svg>
            </button>
        </form>
    </div>
</template>

<script setup>
    const emit = defineEmits(['search'])
    const router = useRouter()
    const route = useRoute()
    let search_query = ref(route.query.s)
    let focused = ref(false);

    let search = (e) => {
        e.preventDefault()
        
        if(router.currentRoute.value.name !== 'recipes-search') {
            window.location.href = window.location.origin + `/recipes/search/?s=${search_query.value}`
            return
        }
    
        router.push({
            path: '/recipes/search',
            query: { s: search_query.value },
        })
        emit('search', search_query.value)
    }

    let randomizer = async () => {
        const { data: random_recipe, pending: pending_random_recipe } = await useFetch('/api/recipes/random')
        
        router.push({
            path: `/recipes/${random_recipe.value.slug}`
        })
    }
</script>