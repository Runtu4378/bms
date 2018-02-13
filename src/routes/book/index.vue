<template>
  <div>
    book
    <div>测试数据:{{ data }}</div>
  </div>
</template>

<script>
  import { mapState, mapGetters, mapActions } from 'vuex'

  export default {
    computed: {
      ...mapState('book', {
        data: state => state.data,
      }),
      ...mapGetters('book', [
        'list',
      ]),
    },
    methods: mapActions([
    ]),
  }
</script>
