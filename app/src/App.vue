<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
export default {
  data() {
    return {
      defaultLayout: "LayoutDefault",
    };
  },
  computed: {
    layout() {
      const listLayouts = ["LayoutDefault"];
      const layout = listLayouts.includes(this.$route.meta.layout)
        ? this.$route.meta.layout
        : this.defaultLayout;

      return () => import(`@/layouts/${layout}.vue`);
    },
  },
};
</script>
