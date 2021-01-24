<template>
    <p>Variable from below is being multiplied by 2 with either buttons. We use the getter.</p>
    <!--getter is invoked which is using the logic of the mutatioin-->
    <h3>{{ this.$store.getters.normalizedCounter }}</h3> 
    <p>Below we use mapGetter and we retrieve the finalCounter getter</p>
    <h3>{{ finalCounter }}</h3>
    
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    computed: {
        ...mapGetters(['finalCounter'])
    }
}
</script>