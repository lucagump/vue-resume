<template>
    <div class="main-wrapper">
        <div class="container-fluid p-0">
            <section class="resume-section p-3 p-lg-5 d-flex d-column">
                <div class="my-auto">
                    <h1 class="mb-0">Gianni Bismark<span class="text-primary"></span></h1>
                    <h4 class="text-primary mb-2">nse vedemo mai</h4> 
                    <div class="mb-5">
                        <vue-typed-js :strings= this.gianni :fadeOut="true" :startDelay="10" :fadeOutDelay="true" :showCursor="false">
                          <span class="typing"></span>
                        </vue-typed-js>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>
<script>
import prankText from '@/assets/pranktext.js'

export default {
  name: 'about',
  data: function () {
    return {
      gianni: prankText.gianni
    }
  }
}
</script>
<style>

</style>