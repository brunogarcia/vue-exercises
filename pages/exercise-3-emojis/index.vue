<template>
    <div class="container">
        <back-button></back-button>
        <v-layout>
            <v-flex
                v-for="emoji in evenEmojis"
                :key="emoji.id"
                xs12 sm6>
            <v-card>
                <v-card-title primary-title>
                <div>
                    {{emoji.char}}
                </div>
                </v-card-title>
            </v-card>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
import { hustonText } from './hustonText';
import setHustonText from '~/mixins/setHustonText';
import setHustonImage from '~/mixins/setHustonImage';
import callingHuston from '~/mixins/callingHuston';
import backButton from '~/mixins/backButton';

export default {
    name: 'Test',
    head() {
        return {
            title: 'This are my emojis'
        };
    },
    data() {
        return {
            emojis: [],
            hustonHtml: hustonText,
            hustonImage: '3-Katherine-Johnson.jpg',
        };
    },
    computed: {
        evenEmojis: function () {
            return this.emojis.filter(emoji => emoji.id % 2 === 0);
        }
    },

    asyncData({ app }) {
        return app.$axios.$get('/api/emojis').then((data) => {
            return { emojis: data };
        });
    },
    mixins: [ setHustonText, setHustonImage, callingHuston, backButton ],
};
</script>
