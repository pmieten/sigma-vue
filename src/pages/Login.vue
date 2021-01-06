<template>
  <H1>LOGIN page</H1>

  <div class="login-body" >
    <div class="body-container" >
      <div class="p-grid" >
        <div class="p-col-12 p-lg-6 left-side" >
          <img
            src="assets/layout/images/logo-dark.png"
            alt="apollo-layout"
            class="logo"
            
          />
          <h1 >Welcome</h1>
          <p >Sign in to start your session</p>
        </div>
        <div class="p-col-12 p-lg-6 right-side" >
          <div class="login-wrapper" >
            <div class="login-container" >
              <span class="title" >Login</span>
              <div class="p-grid p-fluid" >
                <div class="p-col-12" >
                  <input
                    class="p-inputtext p-component"
                    placeholder="Username"
                    
                  />
                </div>
                <div class="p-col-12" >
                  <input
                    class="p-inputtext p-component"
                    type="password"
                    placeholder="Password"
                    
                  />
                </div>
                <div class="p-col-6" >
                  <button
                    class="p-button p-component"
                    type="button"
                    
                  >
                    <span
                      class="pi pi-check p-button-icon p-button-icon-left"
                    ></span
                    ><span class="p-button-label">Sign In</span
                    ><!----><span class="p-ink"></span>
                  </button>
                </div>
                <div class="p-col-6 password-container" >
                  <button class="p-link" >
                    Forgot Password?
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    return {
      Napis: "To jest komonent3",
    };
  },
  name: "test",
});
</script>

<style  scoped lang="scss">
</style>