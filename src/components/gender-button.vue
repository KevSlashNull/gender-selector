<script setup lang="ts">
import { AnyGender } from "../types";

defineProps<{ gender?: AnyGender }>();
defineEmits(["open", "reset"]);
</script>

<template>
  <div class="card">
    <button type="button" @click="$emit('open')">
      {{ gender ? `My gender: ${gender}` : "Select gender" }}
    </button>
    <div v-if="gender" class="reset">
      <a
        href="/"
        @click="
          $event.preventDefault();
          $emit('reset');
        "
        >Reset gender</a
      >
    </div>
  </div>
</template>

<style scoped>
.card {
  padding: 2em;
}

.reset {
  margin-top: 0.5em;
}
</style>
