<template>
    <v-container>
        <v-row>
            <v-col v-for="(item, i) in items" :key="i">
                <v-hover v-slot="{ isHovering, props }">
                    <v-card class="mx-auto" max-width="300" min-width="200" :elevation="isHovering ? 24 : 2" v-bind="props">
                        <v-responsive>
                            <v-img class="align-end text-white" height="200" :src="item.langTechImg" cover>
                            </v-img>
                            <v-card-title>
                                <v-chip color="green">
                                    {{ item.level }}
                                </v-chip>

                            </v-card-title>

                            <v-card-subtitle class="pt-4">
                                {{ item.name }}
                            </v-card-subtitle>


                            <v-card-text>
                                <div>{{ item.description }}</div>
                            </v-card-text>

                        </v-responsive>

                    </v-card>

                </v-hover>
            </v-col>
        </v-row>
        <v-container class="align-baseline position-sticky">
            <v-row justify="center">
                <v-col cols="8">
                    <v-container class="max-width">
                        <v-pagination v-model="page" class="my-4" :length="pageCount" @update:model-value="pageChanged"
                            rounded="circle" size="small"></v-pagination>
                    </v-container>
                </v-col>
            </v-row>
        </v-container>
    </v-container>
</template>
<script>
import httpService from '@/services/httpService';

export default {
    components: {},
    props: {},
    data() {
        return {
            pageCount: 0,
            page: 1,
            skipParam: 0,
            takeParam: 4,
            items: [],
        };
    },
    async created() {
        this.$root.Loader.toggle({
            isShow: true
        });

        await httpService.get(`https://localhost:7280/api/ProgrammingLangTechs/GetProgrammingTechUi`, null, { skip: this.skipParam, take: this.takeParam }).then(serviceResponse => {
            this.pageCount = serviceResponse.data.totalCount % this.takeParam > 0 ? (serviceResponse.data.totalCount / this.takeParam) + 1 : serviceResponse.data.totalCount / this.takeParam;
            this.items = serviceResponse.data.data;
        }).catch(err => {
            this.$root.Notify.show({
                delay: 3000,
                isActive: true,
                text: err.message
            });
        });

        this.$root.Loader.toggle({
            isShow: false
        });
    },
    methods: {
        async pageChanged(e) {
            this.$root.Loader.toggle({
                isShow: true
            });

            await httpService.get(`https://localhost:7280/api/ProgrammingLangTechs/GetProgrammingTechUi`, null, { skip: (e - 1) * this.takeParam, take: this.takeParam }).then(serviceResponse => {
                this.pageCount = serviceResponse.data.totalCount % this.takeParam > 0 ? (serviceResponse.data.totalCount / this.takeParam) + 1 : serviceResponse.data.totalCount / this.takeParam;
                this.items = serviceResponse.data.data;
            }).catch(err => {
                this.$root.Notify.show({
                    delay: 3000,
                    isActive: true,
                    text: err.message
                });
            });

            this.$root.Loader.toggle({
                isShow: false
            });
        }
    },
    mounted() { },
};
</script>
<style scoped></style>
<style lang='scss' scoped></style>