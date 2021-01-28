<template>
  <div class="table">
    <v-data-table
    :headers="getHeaders"
    :items="addresses"
    :items-per-page="5"
    class="elevation-1"
    :footer-props="{
      showFirstLastPage: false,
      'items-per-page-text': this.$t('components.fragments.BaseDataTable.table.footer.text')
    }">
      <template v-slot:[`item.cep`]="{ item }">
        {{ item.cep | VMask('##.###-###') }}
      </template>
      <template v-slot:[`item.acao`]="{ item }">
        <div class="text-truncate">
          <v-icon
          aria-labelledby="labeldiv"
          class="mr-2"
          @click="sendAddressValuesToEdit(item)"
          color="primary">
            mdi-pencil
          </v-icon>
          <v-icon
          aria-labelledby="labeldiv"
          @click="deleteItem(item)"
          color="pink">
              mdi-delete
          </v-icon>
        </div>
      </template>
    </v-data-table>
  </div>
</template>

<script>

export default {
  name: 'BaseDataTable',
  beforeCreate () { },
  created () {},
  beforeMount () { },
  mounted () {},
  beforeUpdate () { },
  updated () { },
  beforeDestroy () { },
  destroyed () { },
  data () {
    return {}
  },
  props: {
    addresses: { type: Array, required: false }
  },
  components: {},
  computed: {
    getHeaders () {
      const headers = [
        {
          align: 'start',
          sortable: false,
          value: 'title'
        },
        { text: this.$t('components.fragments.BaseDataTable.table.postalcode'), value: 'cep' },
        { text: this.$t('components.fragments.BaseDataTable.table.address'), value: 'logradouro' },
        { text: this.$t('components.fragments.BaseDataTable.table.complement'), value: 'complemento' },
        { text: this.$t('components.fragments.BaseDataTable.table.number'), value: 'numero', sortable: false },
        { text: this.$t('components.fragments.BaseDataTable.table.city'), value: 'localidade' },
        { text: this.$t('components.fragments.BaseDataTable.table.state'), value: 'uf' },
        { text: this.$t('components.fragments.BaseDataTable.table.actions'), value: 'acao', sortable: false }
      ]
      return headers
    }
  },
  methods: {
    sendAddressValuesToEdit (item) {
      this.$emit('addressToEdit', item)
    },
    deleteItem (item) {
      const id = item.id
      const idx = this.addresses.findIndex(item => item.id === id)

      if (confirm(this.$t('components.fragments.BaseDataTable.comfirm.message'))) {
        this.$emit('deletItem', idx)
      }
    }
  },
  filters: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
</style>
