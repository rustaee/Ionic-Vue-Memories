<template>
    <base-layout :page-title="loadMemory ? loadMemory.title : 'Not Find'" default-back-page="/memories">
        <h2 v-if="!loadMemory">Couldn't find a memory for the given id.</h2>
        <memory-overview v-else :title="loadMemory.title" :image="loadMemory.image" :description="loadMemory.description" ></memory-overview>
    </base-layout>
    
</template>
<script>
import MemoryOverview from '../components/memories/MemoryOverview.vue';
export default {
  components: { MemoryOverview },
    data(){
        return{
            memoryId: this.$route.params.id,
        }
    },
    computed : {
        loadMemory() {
            return this.$store.getters.memory(this.memoryId);
        }
    }
}
</script>