import {createStore} from 'vuex';

const store = createStore({
    state(){
        return{
            memories: [
                {
                    id : '1',
                    title: 'Sunny day at the lake',
                    image: 'https://source.unsplash.com/random/150x150',
                    description: 'dsd Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, vero!'
                },
                {
                    id : '2',
                    title: 'Shopping day',
                    image: 'https://source.unsplash.com/random/151x150',
                    description: 'sh Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, vero!'
                }
                ,{
                    id : '3',
                    title: "at Sara's",
                    image: 'https://source.unsplash.com/random/150x152',
                    description: 'sara Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, vero!'
                },
                {
                    id : '4',
                    title: 'Eindhoven Trip',
                    image: 'https://source.unsplash.com/random/152x150',
                    description: 'Eindhoven Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, vero!'
                }
            ]
        }
    },
    mutations: {
        addMemory(state, memoryData){
            const newMemory = {
                id: new Date().toISOString(),
                title: memoryData.title,
                image: memoryData.imageUrl,
                description: memoryData.description
            };
            state.memories.unshift(newMemory);
        }
    },
    actions: {
        addMemory(context, memoryData){
            context.commit('addMemory', memoryData);
        }
    },
    getters: {
        memories(state){
            return state.memories;
        },
        memory(state){
            return (memoryId) => {
                return state.memories.find(memory => memory.id === memoryId);
            }
        }
    }
});

export default store;