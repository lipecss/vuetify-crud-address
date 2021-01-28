<template>
  <v-app id="inspire">
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  metaInfo () {
    const locale = this.$i18n.locale
    return {
      title: 'Default Title',
      titleTemplate: chunk => (
        locale === 'en' ? `${chunk} | ${process.env.VUE_APP_NAME}` : `${chunk} | ${process.env.VUE_APP_NAME}`
      ),
      htmlAttrs: {
        lang: 'pt-BR'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'robots', content: 'index, follow' },
        { name: 'description', content: 'CRUD feito com vuetify para administrar os endereços' },
        { name: 'crud, vuetify, address, favorite address, crud vuejs' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
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
    return {
    }
  },
  components: {},
  computed: {
  },
  methods: {
  },
  filters: {},
  watch: {}
}
</script>

<style lang="scss">
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    /* display: none; <- Crashes Chrome on hover */
    -webkit-appearance: none;
    margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
}

input[type=number] {
    -moz-appearance:textfield; /* Firefox */
}
</style>
