<template lang="">
  <div></div>
</template>
<script lang="ts">
import { useAuth } from "@/composables/firebase";
import { defineComponent, onBeforeUnmount } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "DashboardView",
  setup() {
    const { user } = useAuth();
    const { push } = useRouter();

    onBeforeUnmount(() => {
      if (!user) {
        push("/login");
      }
    });

    return {};
  },
});
</script>
<style lang=""></style>
