<template>
  <Layout class="body">
    <Header class="header">
      <div class="title">图书管理系统</div>
      <div class="middle"></div>
      <Dropdown class="userInfo" v-if="login" @on-click="dealDropDownClick">
        <div class="username">
          {{ user.username }}
          <Icon type="arrow-down-b"></Icon>
        </div>
        <DropdownMenu slot="list">
          <DropdownItem name="logout">登出</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <!-- <div class="userInfo">
        闰土
      </div> -->
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
  import { mapState, mapGetters, mapActions } from 'vuex'
  import Menu from './layout/menu'

  export default {
    components: { Menu },
    created: function () {
      // 检查登录态
      if (!this.login) {
        this.checkLogin(this.$router)
      }
    },
    computed: {
      ...mapState({
        login: state => state.login.login,
        user: state => state.login.user,
      }),
      ...mapGetters([]),
    },
    methods: {
      ...mapActions({
        checkLogin: 'login/checkLogin',
        logout: 'login/logout',
      }),
      dealDropDownClick: function (name) {
        if (name === 'logout') {
          this.logout({
            uid: this.user.id,
            router: this.$router,
          })
        }
      },
    },
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
      color: #fff;

      .username {
        &:hover {
          color: #ccc;
        }
      }
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

<style lang="less">
  .pageContentCon {
    margin: 10px 16px;
    padding: 10px 16px;
    background-color: #fff;
  }
</style>

