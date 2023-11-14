<template>
    <v-card v-html="content">
    </v-card>
</template>


<script>
import httpService from '@/services/httpService';
export default {
    components: {},
    data() {
        return {
            content: "",
        };
    },
    mounted() {
        this.loadArticle(this.$route.params.itemId);
    },
    beforeRouteUpdate(to, from) {
        console.log(to.params.itemId);
        this.loadArticle(to.params.itemId);
    },
    methods: {
        async loadArticle(id) {
            if (id !== undefined) {
                var response = await httpService.get(`https://localhost:7280/api/Articles`, null, { id: id });
                this.content = response.data.data.introduction;
            }
        }
    }
};
</script>
<style scoped></style>
<style lang='scss' scoped></style>