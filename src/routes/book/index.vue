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
  import { mapState, mapGetters, mapActions } from 'vuex'

  export default {
    mounted: function () {
      // 初始化生命周期
      this.query({}) // 获取列表数据
    },
    data: () => {
      return {
        columns: [
          {
            key: 'id',
            title: 'id',
          },
          {
            key: 'name',
            title: '图书名',
          },
        ],
      }
    },
    computed: {
      ...mapState('book', {
        list: state => state.list,
        pagination: state => state.pagination,
      }),
      ...mapGetters('book', {}),
    },
    methods: {
      ...mapActions('book', [
        'query',
      ]),
      pageChange: function (page) {
        console.log(page)
      },
    },
  }
</script>

<style lang="less" scoped>
  .mine-table {
    .ivu-page {
      margin-top: 10px;
    }
  }
</style>
