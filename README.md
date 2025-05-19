
<h1 align="center">CatFlips 🐾</h1>
  # Vue 3 + Vite

### READ ABOUT (septor-store)
https://www.npmjs.com/package/septor-store?activeTab=readme

<p align='center'>

 <img src="https://github.com/ssengedonazil/vue-catflips-testing/blob/POM/assets/CatfilpsLogo.png" alt="CatFlips Logo" width="280" />

</p>

Vue **3** Advanced Pagination Component
This powerful and customizable Vue 3 pagination component provides a complete and user-friendly pagination interface for navigating large data sets. Designed with flexibility and integration in mind, it's perfect for both internal and external data APIs.


###  Dynamic Page Numbers
This feature intelligently generates a dynamic range of page numbers centered around the current page, enhancing user navigation through paginated content. It calculates a smart set of pages based on configurable segments and offsets, ensuring the pagination view adapts smoothly
- Always keeps the current page centered within the visible page numbers when possible.
- Configurable segments and offsets allow fine-tuning of how many pages appear before and after the current page.
- Provides a clean and intuitive pagination experience, especially for large data sets.
- Prevents overwhelming the user with too many page numbers by showing only a relevant subset.

###  Background Processing 
This package includes robust Background Processing capabilities that allow it to continuously operate and gather data efficiently without interrupting the main application flow.
- Provide reliable performance even under heavy data loads.
- Maintain state and store gathered data persistently.
- Seamlessly handle ongoing data collection and updates.
- Process tasks asynchronously in the background.

###  Loading State Feedback
Displays a loading indicator (back Process) during background requests, improving UX during heavy API loads.


###  Jump to Page
 Built-in validation ensures smooth interaction and prevents errors from invalid input.
- Direct page navigation via a simple input field.
- Real-time validation to prevent out-of-range or non-numeric entries.
- Immediate feedback for invalid inputs to guide user correction.
- Enhances usability for large datasets or deep pagination.
- **Ideal for users who know exactly where they want to go—no more clicking through pages one by one.**


###  Auto Reload Support
Enables reactive data refreshing based on the autoReload flag, ensuring the interface stays up to date with minimal effort. Perfect for use cases where filters, user actions.

- Automatically refreshes data(once Mounted) when autoReload is enabled.
- Seamlessly integrates with filter changes or external updates.
- Improves user experience by keeping content in sync.


### Fully Customizable Styling
Leverages className prop to inherit parent styles and easily adapt to your app’s design system (e.g., Tailwind, Bootstrap).

### Flexible Request Method
Provides robust support for multiple HTTP request methods (e.g., GET, POST, PUT, DELETE) along with customizable data payloads. When no method is specified, it gracefully falls back to a default GET request.

- Supports various HTTP methods for different use cases.
- Accepts custom data payloads for greater request flexibility.
- Defaults to GET when no method is explicitly defined.
- Ideal for APIs or components requiring dynamic data-fetching behavior.
- **This flexibility allows seamless integration with diverse backend endpoints and APIs.**



###  Pinia Store Integration
Hooks into a global piniaStore state (like piniaStore.Loading) for reactive and shared loading states across components.

#### USAGE

### Installation

```bash
npm yarn add vue-catflips-pagination

npm install -i vue-catflips-pagination

```
 **ENV VITE_BACKEND_URL**

```bash
.env file
variable
 VITE_BACKEND_URL=<http://127.0.0.1:8000/api>
always  api will come like this
<http://127.0.0.1:8000/api/and-your-endpoint>
```

### Step 1
```bash
// main.ts
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import catFlips from 'vue-catflips-pagination'

const app = createApp(App);
const pinia = createPinia();
app
.use(catFlips) // Registers globally as <catFlips />
.use(pinia);

```

### can be ignored

```bash
setBearerToken({token:hellothere}); set Bearer token object 
getBearerToken(); get Bearer token object
*These will now throw errors: *
setBearerToken(null);
setBearerToken("string");
setBearerToken(123);
setBearerToken(["array"]);

* These will now :*
setBearerToken({ token: "abc123" });
// Or with additional props
setBearerToken({ token: "abc123", expiresIn: 3600 });
```


### **DATA STRUCTURE**
 **Expected API Response Format**
 ``` bash
{
  "data_list": {
    "current_page": 1,
    "data": [
      {
        "id": 1,
        "first_name": "Arden",
        "last_name": "Funk",
        "email": "V6Z5w@example.com",
        "gender": "Male",
        "ip_address": "89.0.142.86"
        ...
      }
      {
        "id": 2,
        "first_name": "Arden",
        "last_name": "Funk",
        "email": "354@example.com",
        "gender": "Female",
        ...
      }
      ....
    ],
      "from": 1,
      "last_page": 6,
     "per_page": 20,
      "prev_page_url": null,
      "to": 20,
      "total": 117
  }
}
```

### Example 1
```bash
<template>
{{collection}}
</template>
  <pagination-data v-memo @returnedData='returnedPaginatedData'   :outorelaod='true'
          :data="{ Rows: 100, ...tileTofetch,  search_keyword }" StateName='patientsListStateName'
          :url="'/v3/patients'" />

<script>

import { computed, ref, defineAsyncComponent, onMounted } from "vue";
import paginationData from 'vue-catflips-pagination'
    const search_keyword=ref('') 
    const collection=ref([]) 
     const tileTofetch = computed(() => {
    #  when  ever data changes the  pagination-data re-renders
     })


    function returnedPaginatedData(databack) { 
      collection.value=databack 
    }
</script>
```
------
### Example 2
```bash
<template>
{{collection}}
  <catFlips v-memo @returnedData='returnedPaginatedData'   :outorelaod='true'
          :data="{ Rows: 100, ...tileTofetch,  search_keyword }" StateName='patientsListStateName'
          :url="'/v3/patients'" />
</template>

<script>

import { computed, ref, defineAsyncComponent, onMounted } from "vue";
    const search_keyword=ref('') 
    const collection=ref([]) 
     const tileTofetch = computed(() => {
    #  when  ever data changes the  pagination-data re-renders
    return {a:"b"}
     })

    function returnedPaginatedData(databack) { 
      collection.value=databack 
    }
</script>
``` 
```bash
<template> 
{{ Collection }} 
 <catFlips v-memo @returnedData='returnedPaginatedData'  :outorelaod='loading_statuses'
          :data="{ Rows: 100, ...tileTofetch, both: 1, search_keyword }" StateName='collectionStateList'
          :url="'http://127.0.0.1:8000/api/v3/patients'" />
</template>
<script setup>
import { computed, ref } from 'vue'
import { setBearerToken } from 'septor-store'
incase u have bearerToken Set it like this
setBearerToken({token:'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL3YyL2F1dGgvMmZhIiwiaWF0IjoxNzQ3Njc0MTAzLCJleHAiOjE3NDc3MTczMDMsIm5iZiI6MTc0NzY3NDEwMywianRpIjoic1JMOGUxQVNjd05pSDRuRyIsInN1YiI6IjIyIiwicHJ2IjoiY2I0ZWU5OTdiYjIyNTEyMTg0M2NiMmU1M2I3NGM2M2FkM2RlN2I0YiJ9.Rvwft4MuvpZpgImfPunvBXH-x656eNYQYOAA98z4lZc'})

const loading_statuses = ref(true)
const Collection = ref(null)
const search_keyword = ref(null)
const tileTofetch=computed(()=>({page:1}))
 function returnedPaginatedData(databack) {
      const { loading, result } = databack;
      Collection.value = result;
    }
</script>
```

<p align="center"> 
   <img src="https://github.com/ssengedonazil/vue-catflips-testing/blob/POM/assets/Screenshot2025-05-18at00.17.50.png" alt="Septor Logo" width="350" />

</p>