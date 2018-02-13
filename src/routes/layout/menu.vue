<template>
  <Menu :theme="theme" class="menu" width="auto">
    <!-- 遍历一级菜单 -->
    <template v-for="me in menu">
      <template v-if="me.childrens && me.childrens.length">
        <MenuGroup :key="me.id" title="me.name">
          <template v-for="da in me.childrens">
            <MenuItem
              :key="da.id"
              :id="da.id"
              :name="da.name"
              :icon="da.icon"
              :path="da.path"
            />
          </template>
        </MenuGroup>
      </template>
      <template v-else>
        <MenuItem
          :key="me.id"
          :id="me.id"
          :name="me.name"
          :icon="me.icon"
          :path="me.path"
        />
      </template>
    </template>
  </Menu>
</template>

<script>
  import MenuItem from './menuItem.vue'

  export default {
    components: { MenuItem },
    data () {
      return {
        theme: 'dark',
        menu: [
          {
            id: 0,
            name: '图书列表',
            icon: 'ios-book',
            path: '/book',
            childrens: [],
          },
          {
            id: 1,
            name: '待还列表',
            icon: 'reply',
            path: '/',
            childrnes: [],
          },
        ],
      }
    },
  }
</script>

<style lang="less" scoped>

</style>
