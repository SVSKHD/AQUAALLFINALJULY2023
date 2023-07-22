<template>
  <div class="q-pa-md">
    <q-layout view="hHh Lpr lff">
     

      <q-drawer
        v-model="drawer"
        show-if-above

        :mini="miniState"
        @mouseover="miniState = false"
        @mouseout="miniState = true"

        :width="200"
        :breakpoint="500"
        bordered
        class="bg-dark text-accent"
      >
        <q-scroll-area class="fit" :horizontal-thumb-style="{ opacity: 0 }">
          <q-list padding>

            <q-item v-for="item in menu" clickable v-ripple :key="item" :to="item.path">
              <q-item-section avatar>
                <q-icon :name="item.icon" />
              </q-item-section>

              <q-item-section>
                {{ item.name }}
              </q-item-section>
            </q-item>

           
          </q-list>
        </q-scroll-area>
      </q-drawer>

      <q-page-container>
        <q-page padding>
          <transition  
          enter-active-class="animate__animated animate__fadeInLeft"
          leave-active-class="animate__animated animate__fadeOutLeft"
          mode="out-in"
          >
         <router-view/>
         </transition>
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    const menu = ref([
      {
        name:"Invoices",
        path:"/invoices",
        icon:"eva-clipboard"
      }
    ])
    return {
      menu,
      drawer: ref(false),
      miniState: ref(true)
    }
  }
}
</script>
