<template>
    <div>
        <base-card>Our options
            <base-button @click="setSelectedTab('stored-resources')" 
                :mode="selectedTab === 'stored-resources' ? null: 'flat'">Stored Resources</base-button>
            <base-button @click="setSelectedTab('add-resources')" 
                :mode="selectedTab === 'add-resources' ? null: 'flat'">Add Resource</base-button>
        </base-card>
        <keep-alive>
            <component :is="selectedTab"></component>
        </keep-alive>
    </div>
</template>

<script>
import StoredResources from './StoredResources.vue';
import AddResources from './AddResources.vue';

export default {
    components:{ 
        StoredResources, 
        AddResources },

    data(){
        return {
            selectedTab: 'stored-resources',
            storedResources: [
                {
                    id:'official-guide',
                    title: 'Official Guide',
                    description: 'The official documentation',
                    link: 'https://www.test.com'
                },
                {
                    id:'python-guide',
                    title: 'Python Official Guide',
                    description: 'The official Python documentation',
                    link: 'https://www.python.org'
                }
            ]
        };
    },
    provide(){
        return {
            resources: this.storedResources,
            addResources: this.addResources,
            deleteResources: this.removeResources
        };
    },
    
    methods: {
        setSelectedTab(tab){
            this.selectedTab = tab;
        },
        addResources(title, description, url){
            const newResource = {
                id: new Date().toISOString(),
                title: title,
                description: description,
                link: url
            };
            this.storedResources.unshift(newResource);
            this.selectedTab = 'stored-resources';
        },
        removeResources(id){
            const resIndex = this.storedResources.findIndex(res => res.id === id);
            this.storedResources.splice(resIndex, 1);
        }
    }
}
</script>
