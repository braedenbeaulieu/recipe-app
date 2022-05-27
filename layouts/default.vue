<template>
  <Head>
    <title>Recipes</title>
  </Head>
  <div class="container page-padding">
    <NuxtLink to="/"><h1>Recipes</h1></NuxtLink>
    <NuxtPage />
  </div>
</template>
<script setup>
</script>

<style lang="scss" scoped>
	@import '~/assets/scss/variables';

	a {
		text-decoration: none;

		&:hover, &:active, &:focus {
			color: $primary-dark;
		}
	}
</style>