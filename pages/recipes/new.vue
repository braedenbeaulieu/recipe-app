<template>
    <div>
        <form @submit.prevent>
            <div class="form-row">
                <div class="form-element">
                    <label for="title">Title</label>
                    <input v-model="form.title" type="text" id="title">
                </div>
            </div>
            <div class="form-row">
                <div class="form-element">
                    <label for="short">Short</label>
                    <input v-model="form.short" type="text" id="short">
                </div>
            </div>
            <div class="form-row">
                <div class="form-element">
                    <label for="title">Description</label>
                    <textarea v-model="form.description" id="description" cols="30" rows="10"></textarea>
                </div>
            </div>
            <div class="form-row">
                <div class="form-element">
                    <label for="featured_image">Featured Image</label>
                    <input v-model="form.featured_image" type="text" id="featured_image">
                </div>
            </div>
            <div class="form-row">
                <div class="form-element">
                    <label for="featured_image_alt">Featured Image Alt</label>
                    <input v-model="form.featured_image_alt" type="text" id="featured_image_alt">
                </div>
            </div>
            <div class="form-row">
                <div class="form-element">
                    <label for="tags">Tags</label>
                    <input v-model="form.tags" type="text" id="tags" placeholder="party, summer, fruit, easy">
                </div>
            </div>
            <div class="form-row cols-2">
                <div class="form-element">
                    <label for="difficulty">Difficulty</label>
                    <input v-model="form.meta.difficulty" type="number" id="difficulty" min="1" max="4">
                </div>
                <div class="form-element">
                    <label for="servings">Servings</label>
                    <input v-model="form.meta.servings" type="number" id="servings" min="1" max="8">
                </div>
                <div class="form-element">
                    <label for="prep_time">Prep Time(minutes)</label>
                    <input v-model="form.meta.prep_time" type="number" id="prep_time" min="0" max="1440">
                </div>
                <div class="form-element">
                    <label for="cook_time">Cook Time(minutes)</label>
                    <input v-model="form.meta.cook_time" type="number" id="cook_time" min="0" max="1440">
                </div>
                <div class="form-element">
                    <label for="oven_temp">Oven Temp (optional)</label>
                    <input v-model="form.meta.oven_temp" type="number" id="oven_temp" min="0" max="1440">
                </div>
                <div class="form-element">
                    <label for="cooks_note">Cooks Note (optional)</label>
                    <textarea v-model="form.meta.cooks_note" id="cooks_note" cols="30" rows="10"></textarea>
                </div>
            </div>
            <div class="form-row ingredients">
                <div class="form-element ingredient">
                    <label for="ingredient">Ingredient</label>
                    <input type="text" v-model="ingredient_obj.name" placeholder="Name">
                    <input type="text" v-model="ingredient_obj.measurement" placeholder="Measurement">
                    <input type="text" v-model="ingredient_obj.qty" placeholder="Quantity">
                    <input type="text" v-model="ingredient_obj.modifier" placeholder="Modifier">
                </div>
                <button @click="pushIngredient()">Add Ingredient</button>
                <div class="ingredients-results">
                    {{ ingredients_arr }}
                </div>
            </div>
            <div class="form-row directions">
                <div class="form-element direction">
                    <label for="direction">Direction</label>
                    <textarea v-model="direction_obj.text" id="direction" cols="30" rows="10"></textarea>
                </div>
                <div class="directions-results">
                    {{ directions_arr }}
                </div>
                <button @click="pushDirection">Add Direction</button>
            </div>
            <div class="form-row">
                <div class="form-element">
                    <input @click="generateJson" type="submit" value="Submit">
                </div>
            </div>
        </form>
        <div class="generated-json">
            <textarea name="" id="" cols="30" rows="80">{{ generated_json }}</textarea>
        </div>
    </div>
</template>

<script setup>
    import { getRecipes } from '~/store/store.js'

    let generated_json = ref()
    
    let ingredients_arr = reactive([])
    let ingredient_obj = reactive({
        name: '',
        measurement: '',
        qty: ''
    })
    let directions_arr = reactive([])
    let direction_obj = reactive({
        text: ''
    })

    let tags_arr = reactive([])

    let form = reactive({
        title: '',
        short: '',
        description: '',
        featured_image: '',
        featured_image_alt: '',
        tags: '',
        meta: {
            difficulty: '',
            servings: '',
            prep_time: '',
            cook_time: '',
            cooks_note: '',
            oven_temp: '',
        },
        ingredients: ingredients_arr,
        directions: directions_arr,
    })

    let pushIngredient = () => {
        let temp_obj = {
            id: ingredients_arr.length + 1,
            name: ingredient_obj.name,
            measurement: ingredient_obj.measurement,
            qty: ingredient_obj.qty,
            modifier: ingredient_obj.modifier
        }
        ingredients_arr.push(temp_obj)

        ingredient_obj.name = ''
        ingredient_obj.measurement = ''
        ingredient_obj.qty = ''
        ingredient_obj.modifier = ''
    }
    let pushDirection = () => {
        let temp_obj = {
            id: directions_arr.length + 1,
            text: direction_obj.text,
        }
        directions_arr.push(temp_obj)
    }

    let slugify = (string) => {
        return string.toLowerCase().replaceAll(' ', '-')
    }

    let recipes_length = getRecipes().length

    let generateJson = () => {
        tags_arr = form.tags.split(',').map((tag) => tag.trim())

        generated_json.value = JSON.stringify({
            id: (recipes_length + 1),
            date_created: new Date().getTime(),
            slug: slugify(form.title),
            title: form.title,
            short: form.short,
            description: form.description,
            featured_image: form.featured_image,
            featured_image_alt: form.featured_image_alt,
            tags: tags_arr,
            meta: {
                difficulty: form.meta.difficulty,
                servings: form.meta.servings,
                prep_time: form.meta.prep_time,
                cook_time: form.meta.cook_time,
                cooks_note: form.meta.cooks_note ?? '',
                oven: {
                    temp_unit: 'F',
                    temp: form.meta.oven_temp ?? ''
                }
            },
            ingredients: ingredients_arr,
            directions: directions_arr
        }).replace(/"([^"]+)":/g, '$1:')
    }
    
</script>

<style lang="scss">
    form {
        .form-row {
            display: grid;

            &.cols-2 {
                grid-template-columns: repeat(2, minmax(0, 1fr));
                grid-gap: 10px;
            }

            .form-element {
                display: flex;
                flex-direction: column;
                
                input, textarea {
                    margin: 0 0 10px;
                    border: 1px solid #888;
                    padding: 4px 8px;
                    height: 30px;
                    border-radius: 4px;
                    font-size: 14px;
                }

                textarea {
                    min-height: 100px;
                }
            }

            button {
                display: block;
                background: #333;
                color: white;
                border: 0;
                border-radius: 10px;
                padding: 6px;
                -webkit-appearance: none;
                -webkit-border-radius: 0;
            }
        }
    }

    textarea {
        margin: 0 0 10px;
        border: 1px solid #888;
        padding: 4px 8px;
        height: 30px;
        border-radius: 4px;
        font-size: 14px;
        min-height: 100px;
        width: 100%;
    }
</style>