<template>
    <v-card v-html="content">
    </v-card>
</template>


<script>
import httpService from '@/services/httpService';
export default {
    components: {},
    props: {
        itemId: String
    },
    data() {
        return {
            content: "", 
        };
    },
    created(){
        this.loadArticle(this.$route.params.itemId);
    },
    watch: {
        '$route.params.itemId'(newItemId, oldItemId) {
            // Route parametresi değiştiği nde  bu kısım çalışır
            this.loadArticle(newItemId);
        }
    },
    methods: {
        async loadArticle(id) {
            if (id !==  undefined) {
                var response = await httpService.get(`https://localhost:7280/api/Articles`, null, { id: id });
                this.content = response.data.data.introduction;
            }
        }
    }
};
</script>
<style scoped></style>
<style lang='scss' scoped></style>