<template>
  <div class="Header">
    <div class="Header__body">
      <img src="~/assets/icons/logo.svg" />
    </div>
    <div class="Header__bottom"></div>
  </div>
</template>

<style lang="scss">

.Header {
  padding:
    var(--r-top)
    var(--r-right) 0
    var(--r-left);

  &__body {
    padding-bottom: 2px;
  }

  &__bottom {
    min-height: 2px;

    background: var(--color-dark);
  }
}
</style>
