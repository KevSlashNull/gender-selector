<script setup lang="ts">
import { ref, watch } from "vue";
import GenderButton from "./components/gender-button.vue";
import GenderSelector from "./components/gender-selector.vue";
import { AnyGender, genderFromHash } from "./types";
const open = ref(false);
const gender = ref<AnyGender | undefined>(genderFromHash());

watch(gender, (newGender) => {
  if (!newGender) {
    history.replaceState(
      "",
      "",
      window.location.pathname + window.location.search
    );
    return;
  }
  window.location.hash = newGender;
});

window.addEventListener("hashchange", () => {
  const newGender = genderFromHash();
  if (newGender !== gender.value) {
    gender.value = newGender;
  }
});
</script>

<template>
  <h1>Gender selector</h1>

  <gender-button
    :gender="gender"
    @open="open = !open"
    @reset="
      gender = undefined;
      open = false;
    "
  />
  <div style="position: relative">
    <div style="position: absolute; top: -20px; left: 0; right: 0">
      <gender-selector
        v-if="open"
        v-model="gender"
        @update:model-value="open = false"
      />
    </div>
  </div>
  <p class="text-muted">
    Based on
    <a
      href="https://www.reddit.com/r/lgbt/comments/15h3yl5/on_a_scale_of_gender_how_are_you_gendering/"
      target="_blank"
      rel="noreferrer"
      >this reddit post</a
    >. Open source
    <a
      href="https://github.com/kevslashnull/gender-selector"
      target="_blank"
      rel="noreferrer"
      >on GitHub</a
    >.
  </p>
</template>

<style scoped>
.text-muted {
  color: #888;
}
</style>
