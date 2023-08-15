<script setup lang="ts">
import { Gender, AnyGender, femininity, masculinity } from "../types";

defineEmits<{
  <F extends number, M extends number>(
    event: "update:modelValue",
    value: Gender<F, M>
  ): void;
}>();
defineProps<{ modelValue?: AnyGender }>();
</script>

<template>
  <div class="popover">
    <table style="position: relative; z-index: 5">
      <tr v-for="fem in femininity" :key="fem">
        <td class="text">{{ fem }}</td>
        <td v-for="masc in masculinity" :key="masc">
          <button
            :aria-label="`${fem}${masc}`"
            :class="{ active: `${fem}${masc}` === modelValue }"
            @click="$emit('update:modelValue', `${fem}${masc}`)"
          >
            <template v-if="fem === 1 && masc === 'H'">♀</template>
            <template v-else-if="fem === 8 && masc === 'A'">♂</template>
            <template v-else-if="fem === 1 && masc === 'A'">⚨</template>
            <template v-else-if="fem === 8 && masc === 'H'">
              <span style="color: black">∅</span>
            </template>
          </button>
        </td>
      </tr>
      <tr>
        <td class="text">♥</td>
        <td v-for="masc in masculinity" :key="masc" class="text">
          {{ masc }}
        </td>
      </tr>
    </table>
  </div>
</template>

<style scoped>
table {
  border-collapse: separate;
  border-spacing: 0;
}

button {
  background: transparent;
  border-radius: 8px;
  width: 100%;
  height: 100%;
  padding: 0;
  font-weight: bold;
}

.active {
  background: rgba(0, 0, 0, 0.25);
  border: 1px solid black;
}

tr {
  padding: 0;
}

tr:first-of-type td:first-of-type {
  border-top-left-radius: 8px;
}

tr:first-of-type td:last-of-type {
  border-top-right-radius: 8px;
}

tr:last-of-type td:first-of-type {
  border-bottom-left-radius: 8px;
}

tr:last-of-type td:last-of-type {
  border-bottom-right-radius: 8px;
}

td {
  display: inline-flex;
  margin: 0;
  border: 2px solid black;
  width: 30px;
  height: 30px;
  font-size: 24px;
}

.text {
  color: black;
  background-color: white;
  align-items: center;
  justify-content: center;
  font-size: 20px;
}

.popover {
  background: #242424;
  width: max-content;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  margin-bottom: 2rem;
}

@media (prefers-color-scheme: light) {
  .popover {
    background: white;
  }
}

div {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

div:before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: calc(100%-29px);
  border-top-right-radius: 8px;
  opacity: 1;
  margin-left: 35px;
  margin-bottom: 35px;
  background: radial-gradient(
      circle at 0 0,
      rgb(255, 3, 171),
      rgba(255, 255, 255, 0) 65%
    ),
    radial-gradient(
      circle at 100% 0,
      rgb(162, 3, 206),
      rgba(255, 255, 255, 0) 60%
    ),
    radial-gradient(
      circle at 100% 100%,
      rgb(7, 20, 167),
      rgba(255, 255, 255, 0) 65%
    ),
    radial-gradient(
      circle at 0% 100%,
      rgba(255, 255, 255, 0.887),
      rgba(255, 255, 255, 0) 150%
    ),
    radial-gradient(
      circle at 15% 85%,
      rgba(255, 255, 255, 0.887),
      rgba(255, 255, 255, 0) 50%
    );
  /* radial-gradient(circle at 0 0, blue, red), */
  /* radial-gradient(
        circle at 93.3% 75%,
        rgba(0, 255, 0, 0.5),
        rgba(0, 255, 0, 0) 70.71%
      ); */
}
</style>
