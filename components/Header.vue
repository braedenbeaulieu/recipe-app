<template>
    <header>
        <div class="navbar container">
            <div class="logo">
                <NuxtLink to="/">
                    Recipes
                </NuxtLink>
            </div>
            <!-- <p>These ain't your grandma's recipes</p> -->
        </div>
    </header>
</template>

<script>
export default {

}
</script>

<style lang="scss">
    header {
        background-color: crimson;

        .navbar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-top: 10px;
            padding-bottom: 10px;
            color: white;
            font-family: 'Source Serif Pro', Helvetica;

            .logo {
                a {
                    font-size: 32px;
                    font-weight: bold;
                    color: white;
                    text-decoration: none;
                }
            }
        }
    }
</style>