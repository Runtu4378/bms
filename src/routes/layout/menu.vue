<template>
  <Menu :theme="theme" class="menu" width="auto">
    <!-- 遍历一级菜单 -->
    <template v-for="me in menu">
      <template v-if="me.childrens && me.childrens.length">
        <MenuGroup :key="me.id" title="me.name">
          <template v-for="da in me.childrens">
            <MenuItem :name="da.id">{{da.name}}</MenuItem>
          </template>
        </MenuGroup>
      </template>
      <template v-else>
        <MenuItem :key="me.id" :name="me.id">{{me.name}}</MenuItem>
      </template>
    </template>
  </Menu>
</template>

<script>
  export default {
    data() {
      return {
        theme: "dark",
        menu: [
          {
            id: 0,
            name: '图书列表',
            childrens: [],
          },
          {
            id: 1,
            name: '待还列表',
            childrnes: [],
          },
        ],
      }
    }
  }
</script>

<style lang="less" scoped>

</style>
