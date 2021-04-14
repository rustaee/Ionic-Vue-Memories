<template>
   <base-layout page-title="AllMemories">
        <template v-slot:actions> <!-- to target the name slot on base layout --> 
            <ion-button router-link="/memories/add">
                <ion-icon slot="icon-only" :icon="add"></ion-icon>
            </ion-button>
        </template>
        <memories-list :memories="memories"></memories-list>
   </base-layout>
</template>
<script>
    import {IonButton, IonIcon} from '@ionic/vue';
    import { add } from 'ionicons/icons'; //the icons should be registerd in "data" properry
    import MemoriesList from '../components/memories/MemoriesList.vue';

    export default {
        components: {MemoriesList, IonButton, IonIcon},
        data(){
            return{
                add,
            }
        },
        computed: {
            memories(){
                return this.$store.getters.memories;
            }
        }
    }
</script>