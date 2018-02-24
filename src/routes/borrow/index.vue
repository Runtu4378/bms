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
      return {
        columns: [
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
        ],
      }
    },
    computed: {
      ...mapState('login', {
        userType: state => state.user.type,
      }),
      ...mapState('borrow', [
        'list',
        'pagination',
      ]),
    },
    methods: {
      ...mapActions('borrow', [
        'query',
      ]),
      pageChange: function (page) {
        console.log(page)
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
