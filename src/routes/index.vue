<template>
  <Layout class="body">
    <Header class="header">
      <div class="title">图书管理系统</div>
      <div class="middle"></div>
      <div class="userInfo">
        闰土
      </div>
    </Header>
    <Content class="content">
      <Sider class="menu"><Menu /></Sider>
      <Content class="pageContent">
        <router-view />
        <Footer class="footer">
          版权所有
        </Footer>
      </Content>
    </Content>
  </Layout>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import Menu from './layout/menu'

  export default {
    components: { Menu },
    computed: mapGetters([
    ]),
    methods: mapActions([
    ])
  }
</script>

<style lang="less" scoped>
  @padding: 36px;

  .body {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }

  .header {
    display: flex;
    flex-shrink: 0;
    padding: 0 24px;
    height: 64px;
    line-height: 64px;

    .title {
      min-width: 200px;
      flex-shrink: 0;
      margin-right: 10px;
      font-size: 18px;
      color: #fff;
    }
    .middle {
      flex: 1;
    }
    .userInfo {
      min-width: 60px;
      margin-left: 10px;
      text-align: right;
      flex-shrink: 0;
    }
  }

  .content {
    display: flex;
    flex: 1;

    .menu {
      width: 200px;
      flex-shrink: 0;
    }
    .pageContent {
      flex: 1;
    }
  }
</style>
