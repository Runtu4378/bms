<template>
  <div>
    <h1>header</h1>
    <router-view/>
    <h1>footer</h1>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: mapGetters([
  ]),
  methods: mapActions([
  ])
}
</script>
