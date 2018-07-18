<template>
    <section class="container">
        <back-button></back-button>
        <div v-html="hustonHtml"></div>
        <counter-button />
        <counter-button />
    </section>
</template>

<script>

import { hustonText } from './hustonText';
import CounterButton from '~/components/CounterButton';
import setHustonText from '~/mixins/setHustonText';
import setHustonImage from '~/mixins/setHustonImage';
import callingHuston from '~/mixins/callingHuston';
import backButton from '~/mixins/backButton';

export default {
    name: 'Counters',
    head() {
        return {
            title: 'Counters',
        };
    },
    data() {
        return {
            hustonHtml: hustonText,
            hustonImage: '4-Mary-Jackson.jpg'
        };
    },
    mixins: [ setHustonText, setHustonImage, callingHuston, backButton ],
    components: {
        CounterButton
    }
};
</script>

<style scoped>
.title {
    margin: 30px 0;
}
.satelite-wrapper {
    z-index: 1;
    width: 100%;
    overflow: hidden;
}
</style>
