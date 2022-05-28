<template>
  <Head>
    <title>Recipes</title>
  </Head>
  <div :class="`container page-padding ${page_template}`">
    <NuxtLink to="/"><h1>Recipes</h1></NuxtLink>
    <NuxtPage />
  </div>
</template>
<script setup>
  	let page_template = useRouter().currentRoute.value.name
</script>

<style lang="scss" scoped>
	@import '~/assets/scss/variables';

	a {
		text-decoration: none;

		&:hover, &:active, &:focus {
			color: $primary-dark;
		}
	}

	.blog-slug > a {
		display: none;
	}
	.blog-slug.container {
		padding-top: 0;
	}
</style>