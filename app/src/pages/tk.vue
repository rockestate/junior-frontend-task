<template>
  <div class="space-y-7 p-10">
    <div class="space-y-2">
      <h2 class="text-lg font-semibold">AppInput ({{ appInputText }})</h2>
      <app-input
        v-model.lazy="appInputText"
        label="Password"
        placeholder="Write something"
        class="w-1/4"
      />
      <app-input
        placeholder="Write something"
        error="Error message"
        class="w-1/4"
      />
    </div>
  </div>
</template>

<script>
import AppInput from "../components/AppInput.vue";

export default {
  components: {
    AppInput,
  },

  data() {
    return {
      appInputText: "",
    };
  },
};
</script>
