

<template> 
{{ Collection }}
 <catFlips v-memo @returnedData='returnedPaginatedData'  :outorelaod='loading_statuses'
          :data="{ Rows: 100, ...tileTofetch, both: 1, search_keyword }" StateName='collectionStateList'
          :url="'http://127.0.0.1:8000/api/v3/patients'" />
</template>
<script setup>
import { computed, ref } from 'vue'
import { setBearerToken } from 'septor-store'
setBearerToken({token:'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL3YyL2F1dGgvMmZhIiwiaWF0IjoxNzQ3ODE3MzQ1LCJleHAiOjE3NDc4NjA1NDUsIm5iZiI6MTc0NzgxNzM0NSwianRpIjoiVzJxMVlTRWhFVWhUbVA1aCIsInN1YiI6IjIyIiwicHJ2IjoiY2I0ZWU5OTdiYjIyNTEyMTg0M2NiMmU1M2I3NGM2M2FkM2RlN2I0YiJ9.GZaI0-6rbRmNsy9NpLSu-x17NQwg1hYU__VxVbR7Wx0'})


const loading_statuses = ref(true)
const Collection = ref(null)
const search_keyword = ref(null)
const tileTofetch=computed(()=>({page:1}))
 function returnedPaginatedData(databack) {
      const { loading, result } = databack;
      Collection.value = result;
    }
</script>
 
