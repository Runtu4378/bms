<template>
  <div class="pageContentCon">
    <div class="btn-lab">
      <Button type="primary" @click="modalEditShow('添加图书')">添加图书</Button>
    </div>
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
    <ModalEdit
      :visible="modalEditVisible"
      :title="modalEditTitle"
      :item="modalEditItem"
      :onCancel="modalEditHide"
      :onSubmit="add"
    />
  </div>
</template>

<script>
  import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
  import ModalEdit from './modalEdit'

  export default {
    components: { ModalEdit },
    mounted: function () {
      // 初始化生命周期
      this.query({}) // 获取列表数据
    },
    data: () => {
      return {
        columns: [
          {
            key: 'code',
            title: '图书编码',
          },
          {
            key: 'name',
            title: '图书名',
          },
          {
            key: 'description',
            title: '描述',
          },
        ],
      }
    },
    computed: {
      ...mapState('book', [
        'modalEditVisible',
        'modalEditTitle',
        'modalEditItem',
        'list',
        'pagination',
      ]),
      ...mapGetters('book', {}),
    },
    methods: {
      ...mapActions('book', [
        'query',
        'add',
      ]),
      ...mapMutations('book', [
        'modalEditShow',
        'modalEditHide',
      ]),
      hideAdd: function () {
        console.log('hide')
        this.modalEditVisible = false
        this.modalEditTitle = ''
        this.modalEditItem = {}
      },
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
