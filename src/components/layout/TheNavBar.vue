<template>
  <v-app-bar app dark mb-16>
    <div class="d-flex align-center mr-2">
      CEP CRUD
    </div>

    <v-btn to="/" text>
      {{ $t('components.layout.theNavBar.home') }}
    </v-btn>

    <v-btn to="/about" text>
      {{ $t('components.layout.theNavBar.about') }}
    </v-btn>

    <v-menu
      v-if="languages.length"
      bottom
      left
    >
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        text
        class="align-self-center mr-4"
        v-bind="attrs"
        v-on="on"
      >
        {{ $t('components.layout.theNavBar.more') }}
        <v-icon right>
          mdi-menu-down
        </v-icon>
      </v-btn>
    </template>
      <v-list dark>
        <v-list-item
          v-for="lang in languages"
          :key="lang.flag"
          @click="changeLocale(lang.language)"
          >
          <flag :iso="lang.flag" v-bind:squared="false" />
          <span class="ml-4">{{ $t(`components.layout.theNavBar.language.${lang.language}`) }}</span>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
export default {
  name: 'TheNavBar',
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
      languages: [
        { flag: 'br', language: 'pt-BR', title: 'Portuguê' },
        { flag: 'us', language: 'en', title: 'Inglês' }
      ]
    }
  },
  props: {},
  computed: {},
  methods: {
    changeLocale (locale) {
      this.$i18n.locale = locale
    }
  },
  filters: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
