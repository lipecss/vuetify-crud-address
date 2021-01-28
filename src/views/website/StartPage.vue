<template>
  <div>
    <NavBar/>
    <router-view/>
  </div>
</template>

<script>
const NavBar = () => import('@/components/layout/TheNavBar')

export default {
  name: 'StartPage',
  metaInfo () {
    return {
      meta: [
        { name: 'robots', content: 'index, follow' },
        { name: 'description', content: 'CRUD feito com vuetify para administrar os endereços' },
        { name: '' }
      ]
    }
  },
  beforeCreate () {},
  created () {},
  beforeMount () {},
  mounted () {},
  beforeUpdate () {},
  updated () {},
  beforeDestroy () {},
  destroyed () {},
  data () {
    return {}
  },
  components: {
    NavBar
  },
  computed: {},
  methods: {},
  filters: {},
  watch: {}
}
</script>

<style lang="scss">

</style>
