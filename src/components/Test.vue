<template>
  <div> -----Napis: {{Napis}} ---- </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    data() {
			return {
				Napis:"To jest komonent3"
			}
        },
        name:"test"

})
</script>

<style  scoped lang="scss">

</style>