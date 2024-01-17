<template>
    <!-- <v-card height="100%">
        <v-layout full-height> -->
    <v-navigation-drawer location="right" width="250" style="background-color: #526D82">

        <v-list nav>
            <!-- <v-list-item prepend-icon="mdi-email" value="inbox" to="/home">
                        <v-list-item-title>
                            Programming<br> Language
                        </v-list-item-title>
                    </v-list-item>
                    <v-list-item to="about" prepend-icon="mdi-account-supervisor-circle" title="Supervisors"
                        value="supervisors"></v-list-item>
                    <v-list-item prepend-icon="mdi-clock-start" title="Clock-in" value="clockin"></v-list-item> -->
        </v-list>
        <v-container>
            <v-row>
                <v-sheet color="#27374D" rounded="lg" width="100%" elevation="24" class="mx-auto pa-4 text-center"
                    height="auto">
                    <v-icon class="mb-5" color="#526D82" icon="mdi-notebook-plus" size="85"></v-icon>
                    <v-chip-group variant="tonal" mandatory color="blue">
                        <v-chip v-for="tag in tags" :key="tag" @click="chipClick(tag.id)" :item-id="tag.id">
                            {{ tag.articleName }}
                        </v-chip>
                    </v-chip-group>
                </v-sheet>

            </v-row>
        </v-container>

        <v-btn rounded="xl" class="align-center button2" id="cvBtn" prepend-icon="mdi-card-account-phone-outline"
            @click="contactMeClk">
            Contact-Me
        </v-btn>
    </v-navigation-drawer>

    <!-- </v-layout>
    </v-card> -->
</template>

<!--   :to="'/article/' + tag.id"-->
<script>
import httpService from '@/services/httpService';

export default {
    data() {
        return {
            drawer: true,
            rail: true,
            tags: [],

        }
    },
    async created() {
        let articleNameChips = await httpService.post(`https://localhost:7280/api/Articles/GetArticleNameId`, {})
            .then(response => {
                this.tags = response.data;
            });

    },
    methods: {
        contactMeClk() {
            this.$root.ContentModal.toggle({
                isActive: true,
                content: `<h3>Send Me Email!</h3><br><small>srhnfrkn75@gmail.com</small>`
            });
        },
        chipClick(itemId) {
           this.$router.push({name: 'article', params: { itemId }});
        }
    }
}
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