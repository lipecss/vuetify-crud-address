<template>
  <div class="about">
    <v-container>
      <v-layout column fill-height>
        <v-flex grow class="white--text grey darken-3">
          <v-card-text class="card-text">
            {{ $t('views.website.aboutPage.text') }}
          </v-card-text>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>

export default {
  name: 'AboutPage',
  metaInfo () {
    return {
      title: this.$t('metaInfo.pages.about.title'),
      meta: [
        { name: 'robots', content: 'index, follow' },
        { name: 'description', content: 'CRUD feito com vuetify para administrar os endereços' },
        { name: 'crud, vuetify, address, favorite address, crud vuejs' }
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
  components: {},
  computed: {},
  methods: {},
  filters: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.card-text {
  font-size: 20px;
}
</style>
