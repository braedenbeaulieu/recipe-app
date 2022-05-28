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
  	let page_template = ref(useRouter().currentRoute.value.name)
	
	onMounted(() => {
		window.scrollTo(0, 0)
	})
</script>

<style lang="scss" scoped>
	@import '~/assets/scss/variables';

	a {
		text-decoration: none;

		&:hover, &:active, &:focus {
			color: $primary-dark;
		}
	}

	.blog-slug.container {
		padding-top: 0;
	}

	.container {
		overflow: hidden;
		position: relative;
	}
</style>