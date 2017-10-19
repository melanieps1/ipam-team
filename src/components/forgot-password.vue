<template>
  
  <div class="forgotpassword">

      <v-layout row>
        <v-flex s6>
          <v-card class="card">
            <v-card-title><h4 class="logintext">Forgot Password</h4>
            <p class="forgot-text">Enter email below and password retieval information will be sent to you.</p>  
            </v-card-title>
            <div class="card-interior">  
              <v-form v-model="valid" class="mr-4 ml-4 mt-4 mb-4">
                <v-text-field
                  label="E-mail"
                  v-model="email"
                  :rules="emailRules"
                  required
                  class="input-field"
                ></v-text-field>
              </v-form>
              <v-flex offset-md3>
                <div class="forgot-btns">
                  <v-btn outline color="indigo" class="forgot-btns-responsive">
                  Cancel</v-btn>
                  <v-btn color="primary" class="forgot-btns-responsive">Submit</v-btn>
                </div>
              </v-flex>
            </div>  
          </v-card>
        </v-flex>
      </v-layout>

  </div>

</template>

<script>

  export default {
    name: 'login',
    data () {
      return {
        valid: false,
        email: '',
        emailRules: [
          (v) => !!v || 'E-mail is required',
          (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
        ]
      }
    }
  }
</script>

<style>

  .forgotpassword {
    width: 50%;
    margin: auto;
  }

  .forgot-text {
    display: inline-block;
    margin: auto;
    margin-top: 24px;
  }

  .logintext {
    display: inline-block;
    margin: auto;
    margin-top: 24px;
  }

  .forgot-btns {
    display: inline-block;
    margin-bottom: 24px;
    margin-left: 8%;
  }

  .card-interior {
    width: 80%;
    margin: auto;
  }
  .card {
    margin-left: -15%;
  }

  @media only screen and (max-width: 645px) {
    [class*="forgot-btns-responsive"] {
      width: 100%;
    }
  }

  @media only screen and (max-width: 420px) {
    [class*="forgot-btns-responsive"] {
      margin-left: -2%;
    }
  }

  @media only screen and (max-width: 768px) {
    [class*="forgot-btns-responsive"] {
      margin-right: 25px;
    }
  }

  @media only screen and (max-width: 960px) {
    [class*="forgot-btns-responsive"] {
      width: 100%;
    }
  }

</style>