<template> 
    <backProcess :Loading='piniaStore.Loading' />
    <div :class='className + "  w-full border-t-2 mx-5 my-2"'
        :title="`total items ${result?.to || result?.['data_list']?.to}`">
        <div v-if='(result?.last_page > 1 || result?.["data_list"]?.last_page > 1)'
            class='flex  justify-content-center    '>
            <div aria-label="Page navigation ">
                <ul class="inline-flex   text-sm border-0  leading-tight py-0 mt-2 ">
                    <li v-if='defaultValues?.page >= segments'>
                        <a href="#" @click="() => collect_all_data({ page: 1 })"
                            class="flex items-center justify-center px-3 h-7    text-yellow-60 font-bold  border-0 border-e-2     hover:text-gray-700     hover:text-black">
                            <div class='h-5'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    class="bi bi-chevron-double-left" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd"
                                        d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
                                    <path fill-rule="evenodd"
                                        d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
                                </svg>
                            </div>
                        </a>
                    </li>
                    <li v-if='(defaultValues?.page > 1)'>
                        <a href="#" @click="() => collect_all_data({ page: ~~defaultValues?.page - 1 })"
                            class="flex items-center justify-center px-3 h-7 ms-0 leading-tight text-gray-100 bg-gray-600 border-0 border-e-2 border-gray-100 rounded-s-lg hover:bg-gray-600 hover:text-gray-100 dar k:bg-gray-100 dar k:border-gray-700  dar k:hover:bg-gray-100 hover:text-white">Previous</a>
                    </li>
                    <li v-for='page in pagesOnToPagition'>
                        <a @click="() => collect_all_data({ page })" href="#" aria-current="page"
                            :aria-current="page === (result?.current_page || result?.['data_list']?.current_page) ? 'page' : null"
                            :class="[page == (defaultValues?.page ?? 1) ? 'bg-gray-100 text-orange-500 items-center justify-center h-2 rounded-sm hover:text-white hover:bg-gray-100 font-bold text-xl ' : 'bg-gray-100 text-gray-600']"
                            class="flex items-center justify-center px-3 h-7  border-0 border-gray-100   hover:bg-blue-100 hover:text-orange-700    ">{{ page
                            }}
                        </a>
                    </li>
                    <li>
                        <a href="#"
                            v-if='((result?.current_page != result?.last_page) || (result?.["data_list"]?.last_page != result?.["data_list"]?.current_page))'
                            @click="() => collect_all_data({ page: ~~defaultValues?.page + 1 })"
                            class="flex items-center justify-center px-3 h-7   leading-tight text-gray-100 bg-gray-600 border-0 border-e-2 border-gray-100 rounded-e-lg hover:bg-gray-600 hover:text-gray-700 dar k:bg-gray-100 dar k:border-gray-700  dar k:hover:bg-gray-100 hover:text-white">Next</a>
                    </li>
                    <li>
                        <a href="#" v-if='(result?.current_page ?? result?.["data_list"]?.last_page) > ~~segments - 1'
                            @click="() => collect_all_data({ page: result?.current_page ?? result?.['data_list']?.last_page })"
                            class="flex items-center justify-center px-3 h-7    text-yellow-650 font-bold  border-0 border-e-2     hover:text-gray-700     hover:text-black">
                            <div class='h-5'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    class="bi bi-chevron-double-right" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd"
                                        d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708" />
                                    <path fill-rule="evenodd"
                                        d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708" />
                                </svg>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#" v-if='(result?.current_page ?? result?.["data_list"]?.last_page) > ~~segments - 1'
                            @click="() => collect_all_data({ page: result?.current_page ?? result?.['data_list']?.last_page })"
                            class="flex items-center justify-center px-1 h-7    text-yellow-650 font-bold  border-0 border-e-2     hover:text-gray-700     hover:text-black">
                        </a>
                    </li>
                    <li>
                        <div class="max-w-lg mx-auto ">
                            <div class="relative w-full">
                                <input type="number" min='0'
                                    @input="(e) => search_page_by_number_limiter(result?.last_page || result?.['data_list']?.last_page, e)"
                                    id="search-dropdown" autocomplete="off"
                                    class="block p-1 px-7 bg-white  z-20 text-sm text-gray-900  rounded-e-lg border-s-gray-50 border-e-2  "
                                    :placeholder="`Pages ${result?.last_page || result?.['data_list']?.last_page} Route/search `" />
                                <button @click="(e) => search_page_by_number(e)" type="submit"
                                    class="absolute top-0 end-0 px-1 text-sm font-medium h-full text-gray-600 bg-gray-650 rounded-e-lg border border-gray-600  hover:text-gray-50 hover:bg-gray-600 focus:outline-none focus:ring-gray-600   ">
                                    <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                    </svg>
                                    <span class="sr-only">Search</span>
                                </button>
                            </div>
                            <em class='text-red-600 py-2 text-xs top-0 relative -right-5'
                                v-if='messages?.invalidMessage'> {{ messages?.invalidMessage }}</em>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, defineExpose, watch } from 'vue';
import backProcess from "./backGroundProccessLoader.vue";
import { pomPinia, encryptData, decryptData } from "../utils/index.js"
import '../assets/style.css'
const emit = defineEmits(['returnedData']);
const result = ref({}), loading = ref(false),
    defaultValues = ref({}), pagesOnToPagition = ref([]);;
const everReachedPage = ref([]), messages = ref({});
const backendURL = import.meta.env.VITE_BACKEND_URL

const props = defineProps({
   
    url: {
        type: String,
        required: true
    },
    StateName: {
        type: String,
        required: true
    },

    method: {
        type: String,
        required: false
    },
    data: {
        type: Object,
        required: false
    },

    encrypt: {
        type: Boolean,
        required: false
    },
    dencrypt: {
        type: Boolean,
        required: false
    },
    outorelaod: {
        type: Boolean,
        required: false
    },
    segments: {
        type: Number,
        default: 11,
        required: false
    },
    offset: {
        type: Number,
        default: 4,
        required: false
    },
    className: {
        type: String,
        default: '',
        required: false
    },
    timer: {
        type: Number,
        default: 2,
        required: false
    },


})
const piniaStore = pomPinia('paginated-data-septor-store')
 
function pageFilterset() {
    const currentPage = defaultValues.value.page, to = (~~currentPage > 1) ? ~~currentPage + ~~props?.segments : ~~props?.segments, lastPage = result.value?.current_page || result.value?.["data_list"]?.last_page
    let previous = [], pages = [], i = 1;
    for (let page = currentPage, back = page; page <= to; page++, back--) {
        if (page > 0 && (lastPage >= page)) {
            if ((currentPage > 1 && i <= ~~props?.offset && currentPage != back)) {
                if (back > 1)
                    previous.push(back);
            }
            pages.push(page);
        }
        i++
    }
    const mergeThetwo = [...previous.reverse(), ...pages]
    pagesOnToPagition.value = mergeThetwo.slice(0, props?.segments)
}

watch(() => props.outorelaod, async (newValue) => {
    if (props?.outorelaod)
        collect_all_data({ page: defaultValues.value.page, ...props?.data });
})
async function collect_all_data(arg = { page: 1, search_word: null }) {
try {
    
    loading.value = true
    let { state, page, search_word, url, search_keyword } = arg
    if (search_word || search_keyword) {
        arg.page = 0
        page = null
    }
    const data = (props?.encrypt) ? { data: encryptData(props?.data) } : { ...(props?.data ?? {}), page }
    const storedPage = props?.StateName + page;
    if (search_word || search_keyword)
        piniaStore[storedPage] = []

    if (props?.outorelaod != 0 || props?.outorelaod != false) {
        everReachedPage.value.forEach(val => {
            piniaStore[props?.StateName + val] = []
        });
    }

    everReachedPage.value.push(page)
    defaultValues.value = { ...arg, page }

    const collection = {
        reload: props?.outorelaod,
        mStore: { mUse: true },
        StateStore: storedPage,
        time: props?.timer,
        reqs: {
            url: props?.url,
            method: props?.method ?? 'get',
            data
        }
    }
    const e = await piniaStore.stateGenaratorApi(collection, function (data) {
        //  this  action  is called faster data cant wait if state as got any thing
        if (data)
            prepareData(data)
    });
    prepareData(e)
} catch (error) {
    console.error(error,'error');
    }}

function prepareData(dataStored) {
    let resultsDataSentBack = {}
    if (dataStored) { 
        if (dataStored) {
            loading.value = false
            const payloadData = (props?.dencrypt) ? decryptData(dataStored) : dataStored
            result.value = payloadData
            resultsDataSentBack = { result: result.value, loading: loading.value }
            emit('returnedData', resultsDataSentBack);
            pageFilterset()
        }
    }

}

defineExpose({
    result,
    loading,
    piniaStore
});

function search_page_by_number_limiter(valueLimiter, events) {
    const pageToSearch = events.target.value
    const res = (~~pageToSearch >= ~~valueLimiter) ? valueLimiter : pageToSearch

    events.target.value = res
    if ((~~pageToSearch > 0 && ~~pageToSearch >= ~~valueLimiter))
        messages.value.invalidMessage = 'Page Not Existing, Max Is ' + valueLimiter
    setTimeout(() => messages.value.invalidMessage = null, 4000)
}
async function search_page_by_number() {
    const pageToSearch = document.getElementById("search-dropdown").value
    defaultValues.value.page = ~~pageToSearch
    await collect_all_data({ page: pageToSearch });
    document.getElementById("search-dropdown").value = null
}
onMounted(() => {
    collect_all_data()
})
</script>