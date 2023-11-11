<template>
    <v-snackbar v-model="isActive" :timeout="delay" color="blue-grey" rounded="pill">
        {{ notifyText }}
    </v-snackbar>
</template>
<!-- 
<template v-slot:activator="{ props }">
    <v-btn rounded="pill" color="blue-grey" class="ma-2" v-bind="props">open</v-btn>
</template> -->

<script>
export default {
    components: {},
    props: {},
    data() {
        return {
            delay: 1000,
            isActive: false,
            notifyText: ''
        };
    },
    created() { },
    methods: {
        show(params) {
            this.delay = params.delay;
            this.isActive = params.isActive;
            this.notifyText = params.text;
        }
    },
    mounted() { },
};
</script>
<style scoped></style>
<style lang='scss' scoped></style>