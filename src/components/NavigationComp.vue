<template>
    <v-navigation-drawer v-model="drawer" style="background-color: #526D82">
        <v-hover>
            <template v-slot:default="{ isHovering, props }">
                <v-card class="rounded-xl" v-bind="props" :elevation="isHovering ? 24 : 5" to="/">
                    <v-img :src="require('../assets/ben.jpeg')" cover height="180"></v-img>

                    <v-card-text class="card-font">Saruhan Furkan Şentürk</v-card-text>
                    <v-card-item>
                        <v-card-text>Software Developer</v-card-text>
                    </v-card-item>
                </v-card>
            </template>
        </v-hover>

        <br />

        <v-list nav lines="true" density="default">
            <v-list-item rounded="xl" prepend-icon="mdi-language-csharp" value="inbox" to="/programminglanguage">
                <v-list-item-title>
                    Programming<br>Language
                </v-list-item-title>
            </v-list-item>
            <v-list-item to="/programminglanguagetech" rounded="xl" prepend-icon="mdi-account-supervisor-circle"
                title="Technologies" value="technologies">
            </v-list-item>
        </v-list>

        <br>

        <v-btn class="align-center button2" @click="showCvModal" id="cvBtn">Display CV</v-btn>


    </v-navigation-drawer>
</template>

<script>
import httpService from '@/services/httpService';
import FlexField from '../contracts/flexContracts'
import templateService from '../services/templateService'

export default {
    components: {},
    props: {},
    data() {
        return {
            drawer: true,
            rail: true,
            drawerRight: true,
            contactDialog: false
        };
    },
    methods: {
        toggleNav() {
            this.drawer = this.drawer == false;
        },
        toggleRightNav() {
            this.drawerRight = this.drawerRight == false;
        },
        contactMeClk() {
            // this.contactDialog = true;
            // this.$emit('contactemit', this.contactDialog);
            this.$root.ContentModal.toggle({
                isActive: true,
                content: `<h3>Send Me Email!</h3><br><small>srhnfrkn75@gmail.com</small>`
            });
        },
        async showCvModal() {

            this.$root.Loader.toggle({
                isShow: true,
            });

            await httpService.get(`https://localhost:7280/api/Flexes/${FlexField.PersonalCV}`).then(serviceResponse => {
                var template = templateService.pdfTemplate(serviceResponse.data.data.flexString5);
                this.$root.ContentModal.toggle({
                    isActive: true,
                    content: template
                });
            }).catch(err => {
                this.$root.Notify.show({
                    delay: 3000,
                    isActive: true,
                    text: err.message
                });
            });



            this.$root.Loader.toggle({
                isShow: false,
            });
        }
    },
};
</script>
<style scoped>
#cvBtn {
    position: absolute;
    bottom: 16px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #27374D;
}
</style>


<!-- @import url('../content/buttonStyle.css'); -->




