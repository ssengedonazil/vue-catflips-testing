

<template> 
<!-- { "data_list": { "current_page": 1, "data": [ { "id": 1, "first_name": "Arden", "last_name": "Funk", "email": "V6Z5w@example.com", "gender": "Male", "ip_address": "89.0.142.86" } ] } }  -->
 <pagination-data v-memo @returnedData='returnedPaginatedData'  :outorelaod='loading_statuses'
          :data="{ Rows: 100, ...tileTofetch, both: 1, search_keyword }" StateName='collectionStateList'
          :url="'/v3/patients'" />
</template>
<script setup>
import { computed, ref } from 'vue'
import paginationData from './components/Pagination.vue'
import { setBearerToken } from 'septor-store'
setBearerToken({token:'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL3YyL2F1dGgvMmZhIiwiaWF0IjoxNzQ3NTEyOTI2LCJleHAiOjE3NDc1NTYxMjYsIm5iZiI6MTc0NzUxMjkyNiwianRpIjoic2dpWUxRT0NyOXZhbWYxQiIsInN1YiI6IjIyIiwicHJ2IjoiY2I0ZWU5OTdiYjIyNTEyMTg0M2NiMmU1M2I3NGM2M2FkM2RlN2I0YiJ9.NbbPnw8FBBFR8CNRKLeLzErpvea9wZ-FYtHlZApgxGE'})

const loading_statuses = ref(true)
const search_keyword = ref(null)
const tileTofetch=computed(()=>({page:1}))
 function returnedPaginatedData(databack) {
      const { loading, result } = databack;
    }
</script>
 
