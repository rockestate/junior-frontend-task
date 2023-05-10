<template>
  <div>
    <label :for="uid">
      {{ label }}
    </label>
    <input
      :id="uid"
      :value="value"
      v-bind="$attrs"
      class="outline-none p-2 rounded border w-full"
      :class="{
        'transition-colors hover:border-slate-400': !error,
        'border-red-500 text-red-500 placeholder:text-red-500': error,
      }"
      @input="$emit('input', $event.target.value)"
      @change="$emit('change', $event.target.value)"
    />
    <p v-show="error" class="text-red-500 text-xs">
      {{ error }}
    </p>
  </div>
</template>

<script>
let globalId = 0;

export default {
  inheritAttrs: false,

  data() {
    globalId += 1;
    return {
      uid: `app-input-${globalId}`,
    };
  },
  props: {
    value: {
      type: [String, Number],
      default: "",
    },
    label: {
      type: String,
      default: "",
    },
    error: {
      type: String,
      default: "",
    },
  },
};
</script>
