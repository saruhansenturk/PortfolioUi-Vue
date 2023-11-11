
<template>
    <div class="text-center">
        <v-dialog v-model="dialog" width="auto" height="auto">
            <v-card>
                <v-card-text v-html="htmlContent">
                </v-card-text>
                <v-card-actions class="d-flex justify-center align-center">
                    <v-btn color="warning" id="modalClose" @click="dialog = false">Close</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>


<script>
export default {
    components: {},
    props: {},
    data() {
        return {
            dialog: false,
            htmlContent: ""
        }
    },
    methods: {
        toggle(params) {
            this.dialog = params.isActive;
            this.htmlContent = params.content;
        }
    },
};
</script>
<style scoped>

</style>
<style lang='scss' scoped></style>

<!-- #modalClose {
    position: absolute;
    bottom: 16px;
    left: 50%;
    transform: translateX(-50%);
} -->