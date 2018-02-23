<template>
  <Modal
    :value="visible"
    :title="title"
    @on-cancel="onCancel"
  >
    <Form :label-width="100">
      <FormItem label="图书编码" prop="code">
        <span>{{item.code}}</span>
      </FormItem>
      <FormItem label="图书名称" prop="name">
        <span>{{item.name}}</span>
      </FormItem>
      <FormItem label="描述" prop="description">
        <span>{{item.description}}</span>
      </FormItem>
    </Form>
    <div slot="footer">
      <Button type="ghost" @click="onCancel">取消</Button>
    </div>
  </Modal>
</template>

<script>
  export default {
    props: [
      'visible',
      'item',
      'onCancel',
    ],
    data: function () {
      return {
        title: '详情弹窗',
      }
    },
  }
</script>

