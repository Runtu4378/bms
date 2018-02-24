<template>
  <div class="pageContentCon">
    <div class="btn-lab" v-if="userType === '00'">
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
      :editType="modalEditType"
      :item="modalEditItem"
      :onCancel="modalEditHide"
      :onCreate="add"
      :onEdit="edit"
    />
    <ModalView
      :visible="modalViewVisible"
      :item="modalViewItem"
      :onCancel="modalViewHide"
    />
  </div>
</template>

<script>
  import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
  import ModalEdit from './modalEdit'
  import ModalView from './modalView'

  export default {
    components: { ModalEdit, ModalView },
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
            title: '图书名',
          },
          {
            key: 'description',
            title: '描述',
          },
          {
            key: 'action',
            title: '操作',
            render: (h, column) => {
              const { row } = column
              const children = [
                h('Button', {
                  style: {
                    'margin-right': '8px',
                  },
                  on: {
                    click: () => this.modalViewShow(row),
                  },
                }, '详情'),
              ]
              if (this.userType === '00') {
                children.push(h('Button', {
                  props: { type: 'primary' },
                  on: {
                    click: () => this.modalEditEdit({
                      title: '编辑图书',
                      ...row,
                    }),
                  },
                }, '编辑'))
              } else if (this.userType === '01') {
                children.push(h('Button', {
                  props: {},
                }, '借阅'))
              }
              return h('div', children)
            },
          },
        ],
      }
    },
    computed: {
      ...mapState('login', {
        userType: state => state.user.type,
      }),
      ...mapState('book', [
        'list',
        'pagination',
        'modalEditVisible',
        'modalEditTitle',
        'modalEditType',
        'modalEditItem',
        'modalViewVisible',
        'modalViewItem',
      ]),
      ...mapGetters('book', {}),
    },
    methods: {
      ...mapActions('book', [
        'query',
        'add',
        'edit',
      ]),
      ...mapMutations('book', [
        'modalEditShow',
        'modalEditEdit',
        'modalEditHide',
        'modalViewShow',
        'modalViewHide',
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
