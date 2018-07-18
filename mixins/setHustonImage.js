export default {
    mounted() {
        if (this.hustonImage) {
            this.$store.dispatch('updateHustonImage', this.hustonImage);
        }
    },
};
