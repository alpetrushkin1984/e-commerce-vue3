<template>
  <div>Домашняя страница</div>
  <div class="flex gap-3 items-center">
    <a href="/favorites">Избранное1</a>
    <router-link to="/favorites"> Избранное </router-link>

    <router-link to="/cart"> Корзина </router-link>

    <router-link to="/product/1"> Продукт 1 </router-link>
  </div>
</template>

<script>
export default {
  setup() {
    return {}
  },
}
</script>

<style lang="scss" scoped></style>
