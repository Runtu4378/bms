<template>
  <div class="login">
    <Card class="login-card">
      <p slot="title">
        <Icon type="ios-film-outline"></Icon>
        登录
      </p>
      <Form ref="formCustom" :model="formCustom" :rules="ruleCustom" :label-width="80">
        <FormItem label="账号" prop="account">
          <Input type="text" v-model="formCustom.account" />
        </FormItem>
        <FormItem label="密码" prop="pwd">
          <Input type="password" v-model="formCustom.pwd" />
        </FormItem>
        <FormItem>
            <Button type="primary" @click="handleSubmit('formCustom')">Login</Button>
        </FormItem>
      </Form>
    </Card>
    <Card class="tips-card">
      <p slot="title">
        <Icon type="ios-film-outline"></Icon>
        账号信息
      </p>
      <Table
        :data="tips"
        :columns="columns"
      />
    </Card>
  </div>
</template>

<script>
  import { mapState, mapGetters, mapActions } from 'vuex'

  export default {
    mounted: function () {
      // 初始化生命周期
    },
    data: function () {
      return {
        formCustom: {
          account: '',
          pwd: '',
        },
        ruleCustom: {
          account: [{ required: true, trigger: 'blur' }],
          pwd: [{ required: true, trigger: 'blur' }],
        },
        columns: [
          { key: 'account', title: '账号' },
          { key: 'pwd', title: '密码' },
          { key: 'remark', title: '备注' },
          {
            key: 'action',
            title: '操作',
            render: (h, params) => {
              return h('Button', {
                props: {
                  type: 'primary',
                  size: 'small',
                },
                on: {
                  click: () => {
                    this.setLoginForm(params.row)
                  },
                },
              }, '应用')
            },
          },
        ],
        tips: [
          { id: 0, account: 'admin001', pwd: 'admin001', remark: '管理员测试账号' },
          { id: 1, account: 'user001', pwd: 'user001', remark: '普通用户测试账号' },
        ],
      }
    },
    computed: {
      ...mapState('login', {}),
      ...mapGetters('login', {}),
    },
    methods: {
      ...mapActions('login', {
        login: 'login',
      }),
      setLoginForm: function (params) {
        console.log(params)
        const { account, pwd } = params
        this.formCustom = { account, pwd }
      },
      handleSubmit: function (name) {
        this.$refs[name].validate(valid => {
          if (valid) {
            this.login({
              router: this.$router,
              data: this.formCustom,
            })
          } else {
            // this.$Message.error('Fail!')
          }
        })
      },
    },
  }
</script>

<style lang="less" scoped>
.login {
  padding-top: 100px;

  .login-card {
    width: 380px;
    margin: 0 auto;
  }

  .tips-card {
    width: 480px;
    margin: 40px auto 0;
  }
}
</style>
