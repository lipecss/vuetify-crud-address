<template>
  <div v-if="propClearAlert" class="base-alerts">
      <ul v-if="propTypeAlert == 'success'" class="base-alerts__alerts-list success">
        <li >
          {{ $t('components.fragments.BaseAlerts.messages.success') }}
        </li>
      </ul>
      <ul v-else-if="propTypeAlert == 'warning'" class="base-alerts__alerts-list warning">
        <li >
          {{ $t('components.fragments.BaseAlerts.messages.warning') }}
        </li>
      </ul>
      <ul v-else class="base-alerts__alerts-list error">
        <li >
          {{ $t('components.fragments.BaseAlerts.messages.error') }}
        </li>
      </ul>
      <span @click="closeAlert" class="closebtn base-alerts__btn-close" >&times;</span>
  </div>
</template>

<script>

export default {
  name: 'BaseAlerts',
  beforeCreate () {},
  created () {},
  beforeMount () {},
  mounted () {},
  beforeUpdate () {},
  updated () {},
  beforeDestroy () {
    this.closeAlert()
  },
  destroyed () {},
  data () {
    return {}
  },
  props: {
    propClearAlert: {
      type: Boolean,
      default: false,
      validator: function (value) {
        return [true, false].indexOf(value) !== -1
      }
    },
    propTypeAlert: {
      type: String,
      default: 'error'
    }
  },
  computed: {},
  methods: {
    closeAlert () {
      const status = false
      this.$emit('alert-is-close', status)
    }
  },
  filters: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.base-alerts {
  text-align: center;
  position: relative;
  margin-bottom: 20px;
  z-index: 5;
}
.base-alerts .base-alerts__alerts-list {
  list-style-type: none;
  padding: 10px;
  text-align: center;
  font-weight: 900;
  border-radius: 10px;
  width: 100%;
  margin: 0 auto;
  color: #fff
}
.success {
  background: green;
}
.warning {
  background: tomato;
}
.error {
  background: red;
}
.base-alerts .base-alerts__btn-close {
  position: absolute;
  font-size: 1.8em;
  font-weight: 900;
  right: 10px;
  top: 1px;
  cursor: pointer;
  border-radius: 75%;
  color: #fff;
}
.base-alerts .base-alerts__btn-close:hover {
  color: #000;
}
</style>
