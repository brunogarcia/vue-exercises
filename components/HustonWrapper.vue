<template>
    <div class="layout column h100p">
        <v-card class="transparent elevation-0 pt-3">
             <v-card-media
                contain
                :src="hustonImage"
                height="200px"
             ></v-card-media>
            <v-card-text class="mt-2">
                <h2 class="mb-1 grey--text">Hi, this is Huston!</h2>
                <hr class="mb-4 grey--text">
                <p v-html="hustonText"></p>
            </v-card-text>
        </v-card>
        <v-spacer></v-spacer>
        <dont-show-again
            class="mt-2 mb-5"
            v-if="$nuxt.$route.name !== 'index'"
        ></dont-show-again>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters(['hustonText', 'hustonImage'])
    },
    components: {
        DontShowAgain: () => import('~/components/DontShowAgain')
    }
};
</script>

