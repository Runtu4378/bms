<template>
  <Modal
    :value="visible"
    :title="title"
    @on-cancel="onCancel"
    @on-ok="submit"
  >
    <div>
      <Form ref="formInline" :model="formInline" :rules="ruleInline" :label-width="100">
        <FormItem label="图书编码" prop="code">
          <Input type="text" v-model="formInline.code" placeholder="图书编码" />
        </FormItem>
        <FormItem label="图书名称" prop="name">
          <Input type="text" v-model="formInline.name" placeholder="图书名称" />
        </FormItem>
        <FormItem label="描述" prop="description">
          <Input type="text" v-model="formInline.description" placeholder=描述 />
        </FormItem>
      </Form>
    </div>
    <div slot="footer">
      <Button type="ghost" @click="onCancel">取消</Button>
      <Button type="primary" @click="submit">确定</Button>
    </div>
  </Modal>
</template>

<script>
  export default {
    props: [
      'visible',
      'title',
      'item',
      'onCancel',
      'onSubmit',
    ],
    data: function () {
      return {
        formInline: {
          code: '',
          name: '',
          description: '',
        },
        ruleInline: {
          code: [{ required: true, message: '请输入图书编码' }],
          name: [{ required: true, message: '请输入图书名称', trigger: 'blur' }],
          description: [{ required: false, trigger: 'blur' }],
        },
      }
    },
    methods: {
      submit: function () {
        this.$refs['formInline'].validate((valid) => {
          if (valid) {
            this.$Message.success('Success!')
            this.onSubmit(this.formInline)
          } else {
            this.$Message.error('Fail!')
          }
        })
      },
    },
  }
</script>
