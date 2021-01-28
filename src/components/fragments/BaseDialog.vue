<template>
  <v-dialog :value="showDialog" max-width="500px">
    <v-card>
      <v-card-title>
        <span class="headline" v-if="type === 'create'">
          {{ $t('components.fragments.BaseDialog.form.title') }}
          <v-icon right>mdi-home</v-icon>
        </span>
        <span class="headline" v-else>
          {{ $t('components.fragments.BaseDialog.form.title2') }}
          <v-icon right>mdi-pencil </v-icon>
        </span>
      </v-card-title>

      <div class="error">
        <BaseAlerts
        :propTypeAlert="alertType"
        :propClearAlert="hasError"
        @alert-is-close="changeHasAlert('alertFalse', $event)"/>
      </div>

      <v-card-text>
        <v-form ref="form" class="mx-2" v-model="valid" lazy-validation>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs6 sm6 md4>
                <v-text-field
                :rules="inputRules"
                v-model="addressPostalCode"
                autocomplete="new-password"
                v-mask="'##.###-###'"
                :label="$t('components.fragments.BaseDialog.form.postalcode')"
                required/>
              </v-flex>

              <v-flex xs6 sm6 md8>
                <v-text-field
                :rules="inputRules"
                v-model="address.logradouro"
                :label="$t('components.fragments.BaseDialog.form.address')"
                required
                :disabled="!canEdit"/>
              </v-flex>

              <v-flex xs6 sm6 md4>
                <v-text-field
                :rules="inputRules"
                v-model="address.numero"
                type="number"
                :label="$t('components.fragments.BaseDialog.form.number')"
                required
                :disabled="!canEdit"/>
              </v-flex>

              <v-flex xs6 sm6 md4>
                <v-text-field
                v-model="address.complemento"
                :label="$t('components.fragments.BaseDialog.form.complement')"
                :disabled="!canEdit"/>
              </v-flex>

              <v-flex xs6 sm6 md4>
                <v-text-field
                :rules="inputRules"
                v-model="address.localidade"
                :label="$t('components.fragments.BaseDialog.form.city')"
                required
                :disabled="!canEdit"/>
              </v-flex>

              <v-flex xs6 sm6 md4>
                <v-text-field
                :rules="inputRules"
                v-model="address.uf"
                :label="$t('components.fragments.BaseDialog.form.state')"
                required
                :disabled="!canEdit"/>
              </v-flex>
            </v-layout>
          </v-container>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="blue darken-2 white--text mt-5" text @click="close">Cancel</v-btn>
            <v-btn class="blue darken-2 white--text mt-5" test @click="sendNewAddressValues" :disabled="!isAvalidPostCode">Save</v-btn>
          </v-card-actions>

        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import { addaddress } from '@services/api'
import { nanoid } from 'nanoid'
import { mapActions } from 'vuex'

const BaseAlerts = () => import('@/components/fragments/BaseAlerts')

export default {
  name: 'BaseDialogEdit',
  beforeCreate () { },
  created () {},
  beforeMount () { },
  mounted () {},
  beforeUpdate () { },
  updated () { },
  beforeDestroy () {},
  destroyed () { },
  data () {
    return {
      addressPostalCode: '',
      address: {
        cep: '',
        logradouro: '',
        complemento: '',
        numero: '',
        localidade: '',
        uf: ''
      },
      isAvalidPostCode: false,
      hasError: false,
      alertType: '',
      valid: false,
      canEdit: false,
      inputRules: [
        v => (v && v.length > 0) || this.$t('components.fragments.BaseDialog.rules.general')
      ]
    }
  },
  props: {
    showDialog: { type: Boolean },
    item: { type: Object },
    type: { type: String, default: 'create' }
  },
  components: {
    BaseAlerts
  },
  computed: {},
  methods: {
    ...mapActions('ModuleErrors', ['changeErrors']),
    submitForm () {
      this.$refs.form.validate()
    },
    close () {
      this.$emit('close', true)
      this.$refs.form.resetValidation()
      this.$refs.form.reset()
    },
    configError (type) {
      this.isAvalidPostCode = false
      this.alertType = type
      this.hasError = true
    },
    fillInput (value) {
      this.addressPostalCode = value.cep
      this.address = {
        cep: value.cep,
        logradouro: value.logradouro,
        complemento: (value.complemento) ? value.complemento : '',
        numero: value.numero,
        localidade: value.localidade,
        uf: value.uf
      }
    },
    async newaddress () {
      const sanitizedCEP = this.addressPostalCode.replace(/[.-]/g, '')
      const result = await addaddress(sanitizedCEP)
      if (result.status === 'error') return this.configError('error')
      else if (!result.erro === true) {
        this.isAvalidPostCode = true
        this.fillInput(result)
        this.canEdit = true
      } else return this.configError('warning')
    },
    sendNewAddressValues () {
      if (this.$refs.form.validate()) {
        if (this.type === 'create') {
          const newLocation = {
            id: nanoid(10),
            cep: this.address.cep,
            logradouro: this.address.logradouro,
            complemento: this.address.complemento,
            numero: this.address.numero,
            localidade: this.address.localidade,
            uf: this.address.uf
          }

          this.$emit('newLocation', newLocation)
          this.close()
        } if (this.type === 'edit') {
          const editedLocation = {
            id: this.item.id,
            cep: this.address.cep,
            logradouro: this.address.logradouro,
            complemento: this.address.complemento,
            numero: this.address.numero,
            localidade: this.address.localidade,
            uf: this.address.uf
          }
          this.$emit('editedLocation', editedLocation)
          this.close()
        }
      }
    },
    changeHasAlert (refValue, eventValue) {
      if (refValue === 'alertFalse') {
        this.hasError = eventValue
      }
    }
  },
  filters: {},
  watch: {
    addressPostalCode (newValue, oldValue) {
      const sanitizedNew = newValue ? newValue.replace(/[.-]/g, '') : ''
      const currentPostalCode = this.address.cep.replace(/[.-]/g, '')

      if (sanitizedNew && sanitizedNew.length === 8 && sanitizedNew !== currentPostalCode) this.newaddress(newValue)
    },
    item (newValue) {
      this.isAvalidPostCode = true
      this.fillInput(newValue)
      this.canEdit = true
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
