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
