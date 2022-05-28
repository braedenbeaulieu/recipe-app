<template>
    <div>
        <NuxtLink to="/" class="back-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
            </svg>
            <p>Back</p>
        </NuxtLink>
        <div class="featured-image image-cover-container">
            <img :src="recipe.featured_image" :alt="recipe.featured_image_alt">
        </div>
        <h1 class="page-title" v-html="recipe.title"></h1>
        <ul class="meta">
            <li>
                <svg width="26px" height="26px" version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" class="fill-current mr-1"><g><path d="m50.004 10.938c-9.4766 0-17.188 7.7109-17.188 17.188s7.7109 17.188 17.188 17.188c9.4766 0 17.188-7.7148 17.188-17.188 0-9.4766-7.7109-17.188-17.188-17.188z"></path> <path d="m50.004 48.438c-18.152 0-32.816 14.668-32.816 32.816v6.25c0 0.85938 0.69922 1.5547 1.5547 1.5586h62.512c0.85938-0.003906 1.5547-0.69922 1.5586-1.5586v-6.25c0-18.148-14.652-32.816-32.809-32.816z"></path></g></svg>
                {{ recipe_servings }}
            </li>
            <li>
                <svg width="26px" height="26px" version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" class="fill-current mr-1"><g><path d="m61.879 40.77c-6.418 0.55859-11.445 6.1875-11.445 12.812 0 2.6758 2.1758 4.8555 4.8516 4.8555h3.4102l-0.20703 5.0664c-0.039062 0.98828 0.3125 1.9258 1 2.6406 0.68359 0.71484 1.6055 1.1055 2.5938 1.1055h1.8438c0.98828 0 1.9102-0.39453 2.5938-1.1055 0.6875-0.71484 1.0391-1.6523 1-2.6406l-0.20703-5.0664h3.4102c2.6758 0 4.8516-2.1797 4.8516-4.8555v-0.27734c0-3.5195-1.4883-6.9023-4.082-9.2812-2.6328-2.4062-6.0469-3.5625-9.6133-3.2539zm11.691 12.812c0 1.5742-1.2773 2.8555-2.8516 2.8555h-4.4531c-0.27344 0-0.53125 0.10938-0.72266 0.30859-0.1875 0.19531-0.28906 0.46094-0.27734 0.73438l0.25 6.1094c0.019531 0.44141-0.14062 0.85547-0.44531 1.1758-0.30469 0.31641-0.71094 0.49219-1.1523 0.49219h-1.8438c-0.4375 0-0.84766-0.17578-1.1523-0.49219s-0.46094-0.73438-0.44531-1.1758l0.25-6.1094c0.011719-0.27344-0.089843-0.53906-0.27734-0.73438-0.1875-0.19531-0.44922-0.30859-0.72266-0.30859h-4.4531c-1.5703 0-2.8516-1.2812-2.8516-2.8555 0-5.5977 4.2266-10.352 9.6211-10.82 0.32031-0.027344 0.64062-0.042969 0.95703-0.042969 2.6523 0 5.1523 0.96875 7.125 2.7734 2.1836 2 3.4336 4.8477 3.4336 7.8086z"></path> <path d="m15.855 90c3.2305 0 5.8555-2.625 5.8555-5.8555v-23.41h6.7227c0.47656 0 0.88281-0.33594 0.98047-0.80078 8.5156-41.59-17.867-49.816-18.133-49.895-0.046875-0.015624-0.09375-0.003906-0.14062-0.011718-0.050781-0.007813-0.089844-0.027344-0.14062-0.027344-0.019531 0-0.035156 0.011719-0.058594 0.011719-0.070312 0.003906-0.13281 0.023437-0.19922 0.039062-0.0625 0.015625-0.12109 0.03125-0.17969 0.058594-0.054688 0.027344-0.10156 0.0625-0.14844 0.10156-0.054687 0.039062-0.10937 0.078124-0.15234 0.12891-0.039063 0.042968-0.066407 0.09375-0.09375 0.14062-0.039063 0.0625-0.078125 0.12109-0.10156 0.19141-0.007812 0.015625-0.019531 0.03125-0.023437 0.046875-0.011719 0.046875-0.003907 0.089844-0.011719 0.13672s-0.03125 0.09375-0.03125 0.14453v73.145c0 3.2305 2.625 5.8555 5.8555 5.8555zm3.8555-5.8555c0 2.125-1.7266 3.8555-3.8555 3.8555-2.125 0-3.8555-1.7305-3.8555-3.8555v-23.41h7.7109zm7.9062-25.41h-15.617v-46.297c5.0117 2.1133 22.332 12.039 15.617 46.297z"></path> <path d="m42.156 10c-3.3945 0-6.1562 2.7617-6.1562 6.1562v67.684c0 3.3984 2.7617 6.1602 6.1562 6.1602h41.684c3.3984 0 6.1602-2.7617 6.1602-6.1562v-67.688c0-3.3945-2.7617-6.1562-6.1562-6.1562zm45.844 6.1562v67.684c0 2.293-1.8672 4.1602-4.1562 4.1602h-41.688c-2.2891 0-4.1562-1.8672-4.1562-4.1562v-67.688c0-2.2891 1.8672-4.1562 4.1562-4.1562h41.684c2.293 0 4.1602 1.8672 4.1602 4.1562z"></path> <path d="m72.742 18.109h-19.484c-2.8242 0-5.125 2.2969-5.125 5.1445 0 2.8242 2.2969 5.125 5.125 5.125h19.484c2.8242 0 5.125-2.2969 5.125-5.1445 0-2.8281-2.3008-5.125-5.125-5.125zm0 8.2656h-19.484c-1.7227 0-3.125-1.4023-3.125-3.1445 0-1.7227 1.4023-3.125 3.125-3.125h19.484c1.7227 0 3.125 1.4023 3.125 3.1445 0 1.7266-1.4023 3.125-3.125 3.125z"></path></g></svg>
                {{ resolveTime(recipe.meta.prep_time) }}
            </li>
            <li>
                <svg width="26px" height="26px" version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" class="fill-current mr-1"><g><path d="m91.82 6.3633h-83.641c-1.0039 0-1.8164 0.8125-1.8164 1.8164v83.637c0 1.0039 0.8125 1.8164 1.8164 1.8164h83.637c1.0039 0 1.8164-0.8125 1.8164-1.8164l0.003907-83.637c0-1.0039-0.8125-1.8164-1.8164-1.8164zm-1.8203 83.637h-80v-58.184h80zm0-61.816h-80v-18.184h80z"></path> <path d="m15.453 86.363h69.09c1.0039 0 1.8164-0.8125 1.8164-1.8164v-45.453c0-1.0039-0.8125-1.8164-1.8164-1.8164l-69.09-0.003906c-1.0039 0-1.8164 0.8125-1.8164 1.8164v45.453c0 1.0078 0.8125 1.8203 1.8164 1.8203zm1.8203-45.453h65.457v41.816h-65.457z"></path> <path d="m64.547 48.18h-29.094c-1.0039 0-1.8164 0.8125-1.8164 1.8164s0.8125 1.8164 1.8164 1.8164h29.09c1.0039 0 1.8164-0.8125 1.8164-1.8164 0.003906-1-0.80859-1.8164-1.8125-1.8164z"></path> <path d="m24.547 24.547c7.2188 0 7.2109-10.91 0-10.91-7.2188 0-7.2109 10.91 0 10.91zm1.8164-5.4531c0 2.4062-3.6367 2.4062-3.6367 0s3.6367-2.4062 3.6367 0z"></path> <path d="m55.453 19.094c0-3.0078-2.4453-5.4531-5.4531-5.4531s-5.4531 2.4453-5.4531 5.4531c0 7.2188 10.906 7.2109 10.906 0zm-3.6328 0c0 2.4062-3.6367 2.4062-3.6367 0s3.6367-2.4062 3.6367 0z"></path> <path d="m80.91 19.094c0-3.0078-2.4453-5.4531-5.4531-5.4531-3.0078 0-5.4531 2.4453-5.4531 5.4531-0.003906 7.2188 10.906 7.2109 10.906 0zm-3.6367 0c0 2.4062-3.6367 2.4062-3.6367 0s3.6367-2.4062 3.6367 0z"></path></g></svg>
                {{ resolveTime(recipe.meta.cook_time) }}
            </li>
            <li v-if="recipe.meta.oven.temp">{{ resolveTemp(recipe.meta.oven) }}</li>
            <!-- <li v-if="recipe.meta.difficulty">{{ recipe.meta.difficulty }}</li> -->
        </ul>

        <p class="description" v-html="recipe.description">
        </p>
        
        <div class="directions" @click="maybeDisplayIngredient">
            <div class="direction" v-for="(direction, index) in recipe.directions" :key="index">
                <span class="number">{{ parseInt(index) + 1 }}.</span>
                <!-- <p>{{ direction.direction }}</p> -->
                <p v-html="resolveDirection(direction.direction)"></p>
            </div>
        </div>

        <div class="tray" :class="{ open: tray_state }">
            <div class="toggle-tray" @click="toggleTray" ><div></div></div>
            <div class="tray-content">
                <h3>Ingredients</h3>
                <div class="ingredients tray-component">
                    <div class="ingredient" v-for="ingredient in recipe.ingredients" :key="ingredient.name" :data-initial-value="ingredient.qty">
                        <p>{{ `${ingredient.qty} ${ingredient.unit} ${ingredient.name}` }}<span v-if="ingredient.modifier">, {{ ingredient.modifier }}</span></p>
                    </div>
                </div>
                <h3>Update Serving Size</h3>
                <div class="serving-sizes tray-component">
                    <div class="minus" @click="updateIngredientQty('decrement')"><span>-</span></div>
                    <div class="serving-number"><span>{{ recipe_servings }}</span></div>
                    <div class="plus" @click="updateIngredientQty('increment')"><span>+</span></div>
                </div>
                <div v-if="recipe.meta.cooks_note">
                    <h3>Cook's Note</h3>
                    <p class="tray-component">{{ recipe.meta.cooks_note }}</p>
                </div>
            </div>
        </div>
        <div class="notification" :class="{ open: notification_open }">
            <h3 v-html="notification_title"></h3>
            <p v-html="notification_message"></p>
        </div>
        <div class="helper" :class="{ opened: !visited_before }">
            <p>Tap the tray for more details</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
            </svg>
        </div>
    </div>
</template>

<script setup async>
    import { getRecipe } from '~/store/store.js'

    const route = useRoute()
    let single_qty_ingredients
    let recipe_servings = ref(1)
    let recipe = reactive({
        title: '',
        slug: '',
        description: '',
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
        ingredients: null
    })

    getRecipe(route.params.slug).then(data => {
        if(data) {
            recipe.title =  data[0].title.rendered
            recipe.slug =  data[0].slug
            recipe.blog_slug =  data[0].slug
            recipe.description =  data[0].acf.description
            recipe.short =  data[0].acf.short
            recipe.featured_image = data[0]._embedded['wp:featuredmedia'][0].source_url
            recipe.featured_image_alt = data[0]._embedded['wp:featuredmedia'][0].alt_text
            recipe.tags =  data[0].tags.join(',')
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
            recipe.ingredients = data[0].acf.ingredients
            recipe.directions = data[0].acf.directions
            recipe.ingredients = reactive(recipe.ingredients)
            let servings = parseInt(recipe.meta.servings)
            recipe_servings.value = servings

            single_qty_ingredients = data[0].acf.ingredients.map((ingredient) => {
                if(ingredient) {
                    return {
                        name: ingredient.name, 
                        qty: parseInt(ingredient.qty) / parseInt(recipe.meta.servings)
                    }
                } else {
                    return false
                }
            })
        }
    })

    let notification_title = ref('')
    let notification_message = ref('')
    let notification_open = ref(false)
    let temp_unit = 'F'
    let tray_state = ref(false);
    let date_in_5_days = new Date(new Date().getTime() + 432000000);
    let visited_before = ref(useCookie('first-time-visiting', {
        maxAge: 432000000,
        expires: date_in_5_days
    }))

    let toggleTray = () => {
        tray_state.value = !tray_state.value

        visited_before.value = true
    }

    onMounted(() => {
        if(!visited_before.value) {
            setTimeout(() => {
                visited_before.value = true
            }, 6000)
        }
    })

    let resolveTime = (mins) => {
        let hours = (mins / 60);
        let rhours = Math.floor(hours);
        let minutes = (hours - rhours) * 60;
        let rminutes = Math.round(minutes);
        
        let time = `${rminutes}m`;

        if(rhours > 0) {
            time = `${rhours}h ${time}`
        }

        return time
    }

    let maybeDisplayIngredient = (e) => {
        if(e.target.classList.contains('ingredient-popup')) {
            console.log(e.target.dataset.name)
            displayIngredient(e.target.dataset.name, 5000)
        }
    }

    let timer;
    let displayIngredient = (ingredient_name, show_for = -1) => {
        let ingredient = getIngredientByName(ingredient_name)

        notification_open.value = true
        notification_title.value = ingredient.name
        notification_message.value = `${ingredient.qty} ${ingredient.unit} ${ingredient.name}`
        if(ingredient.modifier) notification_message.value += `, <span v-if="ingredient.modifier">${ingredient.modifier}</span>`
        const runTimer = (duration) => {
            timer = setTimeout(() => {
                notification_open.value = false
            }, duration);
        }

        if(show_for > 0) {
            clearTimeout(timer)
            runTimer(show_for);
        }
    }

    let getIngredientByName = (name, ingredients = recipe.ingredients) => {
        let found_ingredient = false;

        ingredients.forEach((ingredient) => {
            if(ingredient.name == name) {
                found_ingredient = ingredient
            }
        })

        return found_ingredient
    }
    
    let resolveTemp = (oven) => {
        if(temp_unit == oven.temp_unit) {
            return `${oven.temp}°${oven.temp_unit}`
        }
    }

    let resolveDirection = (direction) => {
        // This will find anything surrounded by square brackets
        // let regex = /\[(.*?)\]/g

        // Find all of the ingredients in this direction
        let ingredients = []
        recipe.ingredients.forEach(ingredient => {
            let match = direction.match(ingredient.name)

            if(match) {
                ingredients.push(ingredient.name)
            }
        })

        if(ingredients) {
            ingredients.forEach(ingredient => {
                // get the ingredient
                let found_ingredient = getIngredientByName(ingredient) ?? false

                // add a span around the recipe with some data attributes
                if(found_ingredient) {
                    direction = direction.replace(ingredient, `<span class="ingredient-popup" data-name="${found_ingredient.name}">${ingredient}</span>`)
                }
            });
        }

        return direction
    }

    let updateIngredientQty = (action = 'increment') => {
        
        recipe.ingredients.forEach(reactive_ingredient => {
            let temp = reactive_ingredient.qty
            let single_serving
            single_qty_ingredients.forEach(ingt => {
                if(ingt.name == reactive_ingredient.name) {
                    single_serving = parseFloat(ingt.qty)
                }
            })

            if(action == 'increment') {
                reactive_ingredient.qty = parseFloat(temp) + single_serving
            } else if(action == 'decrement') {
                reactive_ingredient.qty = parseFloat(temp) - single_serving
            }
        })

        if(action == 'increment') {
            recipe_servings.value++
        } else if(action == 'decrement') {
            recipe_servings.value--
        }

        // console.log('servings', recipe_servings.value)
    }
</script>

<style lang="scss">
    @import '~/assets/scss/variables';

    .back-button {
        position: absolute;
        top: 100px;
        left: 30px;
        background: white;
        border-radius: 20px;
        padding: 4px 15px;
        box-shadow: 2px 2px 10px rgba(0, 0, 0, .6);
        border: 1px solid white;
        transition: border-color .15s, color .15s;

        &:hover {
            // border-color: $primary;
            color: $primary-dark;
            box-shadow: 2px 2px 10px rgba($primary-dark, .6);
            // color: white;
        }

        svg {
            width: 14px;
            height: 14px;
        }

        p {
            font-weight: 400;
        }
    }

    .featured-image {
        border-radius: 20px;
        margin-bottom: 10px;
        padding: 0;
        box-shadow: 3px 3px 10px rgba(0, 0, 0, .15);

        img {
            border-radius: 10px;
            padding: 0;
        }
    }

    h1.page-title {
        margin-bottom: 10px;
        text-align: center;
    }

    .meta {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 16px;

        li {
            font-size: 14px;
            color: #616161;
            margin-right: 30px;
            padding-right: 30px;
            border-right: 1px solid rgba(0, 0, 0, .2);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            &:last-child {
                border-right: 0;
                margin-right: 0;
                padding-right: 0;
            }
        }
    }

    .description {
        text-align: center;
    }

    .serving-sizes {
        display: flex;


        .minus, .plus {
            background: #333;
            width: 45px;
            height: 45px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 10px 0 0 10px;
            cursor: pointer;

            span {
                font-size: 25px;
                color: white;
            }
        }

        .plus {
            border-radius: 0 10px 10px 0;
        }

        .serving-number {
            width: 60px;
            height: 45px;
            border-top: 1px solid #333;
            border-bottom: 1px solid #333;
            display: flex;
            justify-content: center;
            align-items: center;

            span {
                font-size: 30px;
            }
        }
    }

    .direction {
        display: flex;
        justify-content: space-between;
        margin-bottom: 16px;

        > span {
            font-weight: 700;
            font-size: 35px;
            margin-right: 20px;
        }

        p {
            span {
                font-weight: 400;
                text-decoration: none;
                cursor: pointer;
                display: inline-block;
                padding: 2px 10px;
                border-radius: 6px;
                background: #333;
                color: white;
                margin-bottom: 3px;
                
                &:hover, &:active {
                    background: $primary;
                }
            } 
        }
    }

    .tray {
        position: fixed;
        z-index: 100;
        background-color: rgba(255, 255, 255, .8);
        -webkit-backdrop-filter: blur(10px);
        backdrop-filter: blur(10px);
        box-shadow: -3px -3px 10px rgba(0, 0, 0, .15);
        left: 0;
        right: 0;
        height: 80vh;
        max-width: 428px;
        margin-left: auto;
        margin-right: auto;
        bottom: -75vh;
        border-radius: 20px 20px 0 0;
        padding: 40px 25px 25px;
        transition: bottom .3s;

        &.open {
            bottom: 0;
        }

        .tray-content {
            overflow-y: auto;
            height: 100%;
        }

        .toggle-tray {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            padding: 15px 0;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;

            div {
                width: 75px;
                height: 4px;
                border-radius: 10px;
                background-color: #333;
            }
        }

        .tray-component {
            margin-bottom: 16px;

            &:last-child {
                margin-bottom: 0;
            }
        }
    }

    .notification {
        background-color: white;
        width: 300px;
        position: fixed;
        top: -130px;
        // top: 10px;
        right: 0;
        left: 0;
        margin-left: auto;
        margin-right: auto;
        padding: 8px 17px;
        box-shadow: 3px 3px 8px rgba(0, 0, 0, .1);
        border: 1px solid rgba(#363636, .4);
        border-radius: 10px;
        transition: top .3s;

        &.open {
            top: 10px;
        }

        h3 {
            font-size: 20px;
            margin-bottom: 2px;
        }

        p {
            font-size: 16px;
            margin-bottom: 0;
        }
    }

    .helper {
        width: 145px;
        // height: 45px;
        position: fixed;
        bottom: 40px;
        right: 0;
        z-index: 101;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: rgba(255, 255, 255, .8);
        // background-color: rgba(#361d2e, .9);
        -webkit-backdrop-filter: blur(1px);
        backdrop-filter: blur(1px);
        border-radius: 10px;
        padding: 10px 0;
        animation-duration: 2s;
        animation-iteration-count: infinite;
        animation-name: bounce;
        animation-timing-function: cubic-bezier(0.280, 0.840, 0.420, 1);
        opacity: 0;
        transition: opacity .5s;

        &.opened {
            opacity: 1;
        }

        p {
            font-size: 18px;
            margin-bottom: 4px;
            text-align: center;
            color: black;
        }

        svg {
            width: 45px;
            height: 45px;
            margin-bottom: 0;
            fill: black;
        }
    }

    @keyframes bounce {
        0%   { transform: scale(1,1)      translateY(0); }
        10%  { transform: scale(1.1,.9)   translateY(0); }
        30%  { transform: scale(.9,1.1)   translateY(-70px); }
        50%  { transform: scale(1.05,.95) translateY(0); }
        57%  { transform: scale(1,1)      translateY(-7px); }
        64%  { transform: scale(1,1)      translateY(0); }
        100% { transform: scale(1,1)      translateY(0); }
    }
</style>