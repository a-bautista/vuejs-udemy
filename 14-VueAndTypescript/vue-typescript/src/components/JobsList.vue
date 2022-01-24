<template>
    <div class="job-list">
        <ul>
            <li v-for="job in jobs" :key="job.id">
            <h2>{{ job.title }} in {{ job.location }}</h2>
            <div class="salary">
                <p>{{job.salary}} rupees</p>
            </div>
            <div class="description">
                <p>Text....</p>
            </div>
            </li>
        </ul>
    </div>
</template>


<script lang="ts">
import { defineComponent, PropType } from 'vue'
import Job from '../types/Job'

export default defineComponent({
    props: {
        jobs: {
            type: Array as PropType<Job[]>,
            required: true,
        }
    }
})

</script>

<style scoped>

</style>