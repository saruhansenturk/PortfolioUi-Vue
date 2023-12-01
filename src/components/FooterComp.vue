<template>
    <v-footer class="d-flex flex-column align-content-end sticky-footer">
        <div class="text-center w-100" style="background-color: #5C3D2E;">
            <v-col>
                <small class="text-start font-weight-thin" id="smFooter"> {{ new Date().getFullYear() }} — Designed &
                    developed by
                    <strong style="color: #d3ad9f;">
                        Saruhan Furkan Senturk
                    </strong></small>
            </v-col>
            <v-col>
                <!-- <v-btn-group> -->
                <v-tooltip text="GitHub" location="top">
                    <template v-slot:activator="{ props }">
                        <v-btn rounded="xl" v-bind="props" elevation="16" icon="mdi-github" @click="clkGithub" />
                    </template>
                </v-tooltip>
                |
                <v-tooltip text="StackOverFlow" location="top">
                    <template v-slot:activator="{ props }">
                        <v-btn rounded="xl" v-bind="props" elevation="16" icon="mdi-stack-overflow" @click="clkStack" />
                    </template>
                </v-tooltip>
                |
                <v-tooltip text="LinkedIn" location="top">
                    <template v-slot:activator="{ props }">
                        <v-btn rounded="xl" v-bind="props" elevation="16" icon="mdi-linkedin" @click="clkLinkedin" />
                    </template>
                </v-tooltip>
                |
                <v-tooltip text="Instagram" location="top">
                    <template v-slot:activator="{ props }">
                        <v-btn rounded="xl" v-bind="props" elevation="16" icon="mdi-instagram" @click="clkInsta" />
                    </template>
                </v-tooltip>
                |
                <v-tooltip text="Medium" location="top">
                    <template v-slot:activator="{ props }">
                        <v-btn rounded="xl" v-bind="props" elevation="16" icon="mdi-alpha-m-box" @click="clkMedium" />
                    </template>
                </v-tooltip>
            </v-col>
        </div>
    </v-footer>
</template>
<script>
export default {
    components: {},
    props: {},
    data() {
        return {};
    },
    created() { },
    methods: {
        clkLinkedin() {
            window.open('https://www.linkedin.com/in/saruhan75/');
        },
        clkGithub() {
            window.open('https://github.com/saruhansenturk');
        },
        clkStack() {
            window.open('https://stackoverflow.com/users/15012872/saruhan');
        },
        clkInsta() {
            window.open('https://www.instagram.com/saruhan_75/');
        },
        clkMedium() {
            window.open('https://medium.com/@saru75');
        }
    },
    mounted() { },
};
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Pixelify+Sans&display=swap');

#smFooter {
    font-family: 'Pixelify' sans-serif;
}
</style>
<style lang='scss' scoped></style>