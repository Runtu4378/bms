<template>
  <div class="pageContentCon">
    <div class="mine-table">
      <Table
        :columns="columns"
        :data="list"
      />
      <Page
        :current="pagination['current']"
        :page-size="pagination['pageSize']"
        :total="pagination['total']"
        show-total
        show-sizer
        :on-change="pageChange"
      />
    </div>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'

  export default {
    mounted: function () {
      // 初始化生命周期
      this.query({}) // 获取列表数据
    },
    data: function () {
      return {}
    },
    computed: {
      ...mapState('login', {
        userType: state => state.user.type,
      }),
      ...mapState('borrow', [
        'list',
        'pagination',
      ]),
      columns: function () {
        console.log(this)
        let res = [
          {
            key: 'code',
            title: '图书编码',
          },
          {
            key: 'name',
            title: '图书名称',
          },
          {
            key: 'description',
            title: '描述',
          },
          {
            key: 'date',
            title: '借阅日期',
            render: function (h, column) {
              const { date } = column.row
              return h('span', date)
            },
          },
        ]
        if (this.userType === '01') {
          res = res.concat([
            {
              key: 'action',
              title: '操作',
              render: (h, column) => {
                const { row } = column
                const children = [
                  h('Button', {
                    props: { type: 'primary' },
                    on: {
                      click: () => this.returnAsk(row),
                    },
                  }, '还书'),
                ]
                return h('div', children)
              },
            },
          ])
        }
        return res
      },
    },
    methods: {
      ...mapActions('borrow', [
        'query',
        'returnBook',
      ]),
      pageChange: function (page) {
        console.log(page)
      },
      returnAsk: function (obj) {
        const { id, bid, name } = obj
        this.$Modal.confirm({
          title: '还书',
          content: `是否确认归还${name}?`,
          onOk: () => {
            this.returnBook({ id, bid })
          },
        })
      },
    },
  }
</script>

<style lang="less" scoped>
  .btn-lab {
    margin-bottom: 16px;
  }
  .mine-table {
    .ivu-page {
      margin-top: 16px;
    }
  }
</style>
