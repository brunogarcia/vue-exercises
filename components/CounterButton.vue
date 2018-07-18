<template>
  <v-btn
    @click="handleIncrementCounter()"
  >{{counter}}</v-btn>
</template>

<script>
export default {
    name: 'CounterButton',
    head() {
        return {
            title: 'Counter Button',
        };
    },
    data() {
        return {
            counter: 0,
        };
    },
    methods: {
      handleIncrementCounter() {
        this.counter = this.counter + 1;
      },
    },
};
</script>

<style scoped>

</style>
