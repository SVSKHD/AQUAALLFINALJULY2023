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
        class="bg-negative"
      >
        <q-scroll-area class="fit" :horizontal-thumb-style="{ opacity: 0 }">
          <q-list padding>
            <q-item
              v-for="item in OfflineMenu"
              clickable
              v-ripple
              :key="item"
              :to="item.path"
            >
              <q-item-section avatar>
                <q-icon :name="item.icon" />
              </q-item-section>

              <q-item-section>
                {{ item.name }}
              </q-item-section>
            </q-item>
            <q-separator/>
            <q-item
              v-for="item in OnlineMenu"
              clickable
              v-ripple
              :key="item"
              :to="item.path"
            >
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
        <q-page padding class="page-body">
          <Transition name="fade" mode="out-in">
            <router-view/>
          </Transition>
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const OfflineMenu = ref([
      {
        name: "Invoices",
        path: "/invoices",
        icon: "fas fa-clipboard-list",
      },
      {
        name: "Quotations",
        path: "/quote",
        icon: "fas fa-inbox",
      },
    ]);
    const OnlineMenu = ref([
    {
        name: "Products",
        path: "/products",
        icon: "fas fa-caret-square-down",
      },
    ])
    return {
      OfflineMenu,
      OnlineMenu,
      drawer: ref(false),
      miniState: ref(true),
    };
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
