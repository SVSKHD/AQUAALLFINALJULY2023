<template>
  <q-layout view="hHh lpR fFf">
    <q-drawer class="bg-blue-grey-10" show-if-above v-model="leftDrawerOpen" side="left">
      <!-- drawer content -->
    </q-drawer>

    <q-page-container class="">
      <div class="q-pa-md">
        <q-toolbar class="text-dark shadow-2 rounded-borders">
          <q-btn flat label="Menu" @click="toggleLeftDrawer" />
          <q-space />
        </q-toolbar>
        <router-view />
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";

export default {
  name: "AquaLayout",
  setup() {
    const leftDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
};
</script>
