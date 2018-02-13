<template>
  <MenuItem :name="id">
    <router-link :to="path" class="a" tag="div">
      <Icon :type="icon"></Icon>
      {{ name }}
    </router-link>
  </MenuItem>
</template>

<script>
  export default {
    props: [
      'id',
      'name',
      'icon',
      'path',
    ],
  }
</script>

<style lang="less" scoped>
  .a {
    height: 50px;
    line-height: 50px;
    margin: -14px -24px;
    padding-left: 24px;
  }
</style>

