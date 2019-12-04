<template>
<v-row align="center">
  <v-col align="center">
    <v-form class="mx-auto pt-12" v-model="valid">
    <v-text-field
      v-model="name"
      :error-messages="nameErrors"
      :counter="15"
      label="Name"
      class="pb-12"
      required
      @input="$v.name.$touch()"
      @blur="$v.name.$touch()"
    ></v-text-field>
    <v-text-field
      v-model="email"
      :error-messages="emailErrors"
      label="E-mail"
      class="pb-12"
      required
      @input="$v.email.$touch()"
      @blur="$v.email.$touch()"
    ></v-text-field>
    <v-textarea
      name="input-7-1"
      filled
      label="Your message"
      auto-grow
      v-model="message"
    ></v-textarea>
    <v-checkbox
      v-model="checkbox"
      :error-messages="checkboxErrors"
      label="Tesla Cybertruck is ugly"
      class="pb-12"
      required
      @change="$v.checkbox.$touch()"
      @blur="$v.checkbox.$touch()"
    ></v-checkbox>

    <v-btn class="mr-4" @click="submit(), add()" outlined color="success" :disabled="!valid">submit</v-btn>
    <v-btn @click="clear" outlined color="warning">clear</v-btn>
  </v-form>
  </v-col>
</v-row>
  
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, maxLength, email } from 'vuelidate/lib/validators'

  export default {
    mixins: [validationMixin],

    validations: {
      name: { required, maxLength: maxLength(10) },
      email: { required, email },
      checkbox: {
        checked (val) {
          return val
        },
      },
    },

    data: () => ({
      name: '',
      email: '',
      select: null,
      message: null,
      checkbox: false,
      valid: true
    }),

    computed: {
      checkboxErrors () {
        const errors = []
        if (!this.$v.checkbox.$dirty) return errors
        !this.$v.checkbox.checked && errors.push('You must agree to continue!')
        return errors
      },
      selectErrors () {
        const errors = []
        if (!this.$v.select.$dirty) return errors
        !this.$v.select.required && errors.push('Item is required')
        return errors
      },
      nameErrors () {
        const errors = []
        if (!this.$v.name.$dirty) return errors
        !this.$v.name.maxLength && errors.push('Name must be at most 10 characters long')
        !this.$v.name.required && errors.push('Name is required.')
        return errors
      },
      emailErrors () {
        const errors = []
        if (!this.$v.email.$dirty) return errors
        !this.$v.email.email && errors.push('Must be valid e-mail')
        !this.$v.email.required && errors.push('E-mail is required')
        return errors
      },
    },

    methods: {
      submit() {
        this.$v.$touch()
      },
      add() {
        const contact = {
          name: this.name,
          email: this.email,
          message: this.message
        }
        this.$store.state.contact.pop()
        this.$store.state.contact.push(contact)
        // route to confirmation page
      },
      clear () {
        this.$v.$reset()
        this.name = ''
        this.email = ''
        this.select = null
        this.message = null
        this.checkbox = false
      },
    },
  }
</script>

<style scoped>
form {
  width: 40%;
}
</style>