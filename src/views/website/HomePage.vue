<template>
  <div class="home pt-10">

    <BaseAlerts
    :propTypeAlert="alertType"
    :propClearAlert="hasError"
    @alert-is-close="changeHasAlert('alertFalse', $event)"/>

    <v-layout justify-center>
      <v-card-actions>
        <v-btn
        color="primary"
        dark class="mb-2 text-xs-center"
        @click="addressModal">{{ $t('components.fragments.BaseDialog.button') }}</v-btn>
      </v-card-actions>
    </v-layout>

    <BaseDataTable :addresses="myAddresses" @deletItem="itemToDelete" @addressToEdit="itemToEdit"/>

    <BaseDialog
    @newLocation="insertNewAddress"
    @editedLocation="updateAddress"
    @close="addressModal"
    :showDialog="openDialog"
    :item="addressToEdit"
    :type="dialogType"/>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

const BaseAlerts = () => import('@/components/fragments/BaseAlerts')
const BaseDataTable = () => import('@/components/fragments/BaseDataTable')
const BaseDialog = () => import('@/components/fragments/BaseDialog')

export default {
  name: 'HomePage',
  metaInfo () {
    return {
      title: this.$t('metaInfo.pages.home.title'),
      meta: [
        { name: 'robots', content: 'index, follow' },
        { name: 'description', content: 'CRUD feito com vuetify para administrar os endereços' },
        { name: 'crud, vuetify, address, favorite address, crud vuejs' }
      ]
    }
  },
  beforeCreate () { },
  created () {},
  beforeMount () { },
  async mounted () {},
  beforeUpdate () { },
  updated () { },
  beforeDestroy () { },
  destroyed () { },
  data () {
    return {
      openDialog: false,
      dialogType: '',
      hasError: false,
      alertType: '',
      addressList: [],
      addressToEdit: {}
    }
  },
  components: {
    BaseAlerts,
    BaseDataTable,
    BaseDialog
  },
  computed: {
    ...mapGetters('Moduleaddress', ['myAddresses'])
  },
  methods: {
    ...mapActions('Moduleaddress', ['setList']),
    ...mapActions('Moduleaddress', ['pushToList']),
    ...mapActions('Moduleaddress', ['removeToList']),
    ...mapActions('Moduleaddress', ['updateToList']),
    configError (type, message) {
      this.alertType = type
      this.hasError = true
    },
    insertNewAddress (value) {
      this.pushToList(value)
      this.configError('success')
    },
    updateAddress (value) {
      this.updateToList(value)
    },
    itemToDelete (item) {
      this.removeToList(item)
    },
    itemToEdit (item) {
      this.addressToEdit = item
      this.dialogType = 'edit'
      this.openDialog = !this.openDialog
    },
    addressModal (value) {
      this.addressToEdit = {
        cep: '',
        logradouro: '',
        complemento: '',
        numero: '',
        localidade: '',
        uf: ''
      }
      this.dialogType = 'create'
      this.openDialog = !this.openDialog
    },
    changeHasAlert (refValue, eventValue) {
      if (refValue === 'alertFalse') {
        this.hasError = eventValue
      }
    }
  },
  filters: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
</style>
