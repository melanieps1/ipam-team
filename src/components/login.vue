<template>
  
  <div class="login">

      <v-layout row>
        <v-flex s6>
          <v-card class="card">
            <v-card-title><h4 class="logintext">Log In</h4></v-card-title>
            <div class="card-interior">  
              <v-form v-model="valid" class="mr-4 ml-4 mt-4 mb-4">
                <v-text-field
                  label="E-mail"
                  v-model="email"
                  :rules="emailRules"
                  required
                  class="input-field"
                ></v-text-field>
                <v-text-field
                  label="Password"
                  type="password"
                  v-model="password"
                  :rules="passwordRules"
                  required
                  class="input-field"
                ></v-text-field>
              </v-form>
              <v-flex offset-md3>
                <div class="login-btns">
                  <v-btn outline color="indigo" class="login-btns-responsive">
                  Forgot Password?</v-btn>
                  <v-btn color="primary" class="login-btns-responsive">Log In</v-btn>
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
        password: '',
        passwordRules: [
          (v) => !!v || 'Password is required'
        ],
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

  .login {
    width: 50%;
    margin: auto;
  }

  .logintext {
    display: inline-block;
    margin: auto;
    margin-top: 24px;
  }

  .login-btns {
    display: inline-block;
    margin-bottom: 24px;
  }

  .card-interior {
    width: 80%;
    margin: auto;
  }
  .card {
    margin-left: -15%;
  }

  @media only screen and (max-width: 645px) {
    [class*="login-btns-responsive"] {
      width: 100%;
    }
  }

  @media only screen and (max-width: 420px) {
    [class*="login-btns-responsive"] {
      margin-left: -2%;
    }
  }

  @media only screen and (max-width: 768px) {
    [class*="login-btns-responsive"] {
      margin-right: 30px;
    }
  }

  @media only screen and (max-width: 960px) {
    [class*="login-btns-responsive"] {
      width: 100%;
    }
  }

</style>