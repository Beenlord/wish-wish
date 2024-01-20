<template>
	<div class="app-layout">
		<NuxtPage />
	</div>
</template>

<style lang="scss">
@import "@/assets/style/tools/mixins.scss";

.app-layout {
	@include fill-inside();
}
</style>
