<template>
  <v-container fluid class="pa-0">
    <v-parallax
      src=""
      height="600"
    >
    <v-layout row align-center justify-center>
        <v-flex xs12 sm8 md6>
          <v-layout row wrap justify-center>
            <v-flex xs8 xm6 text-xs-center>
              <h3 class="pink--text text--accent-2 text-center mb-2 font-weight-medium">404</h3>
              <p class="pink--text text--accent-2 text-center mb-2 font-weight-medium errortex">{{ $t('views.errors.Error404Page.message') }}</p>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-parallax>
  </v-container>
</template>

<script>
export default {
  name: 'Error404Page',
  metaInfo: {
    title: '404 Page'
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
  computed: {},
  methods: {},
  filters: {},
  watch: {}
}
</script>

<style scoped lang="scss">
h3 {
  font-size: 170px;
}
</style>
