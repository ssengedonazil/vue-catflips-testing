<template>
   <div v-if="props.Loading" class="bg-opacity-0 z-50 flex h-5 absolute right-0  bottom-10  items-center">
   <div class="bg-oran ge-50 px-20 py-10 bg-opacity-80 rounded-md">
     <div class="flex flex-col items-center">
<div class="bouncing-loader">
<div> </div>
<div> </div>
<div> </div>

</div>
</div>
</div>
</div>

</template>

   
<script setup> 
const props = defineProps({
text:String,
Loading:Boolean

}) 



</script>
<style scoped>

@keyframes bouncing-loader {
to {
opacity: 0.1; 
scale: .1; 
}
}

.bouncing-loader {
display: flex;
justify-content: center;
}

.bouncing-loader > div {
width: 10px; 
height: 10px;
margin: 5rem 0.2rem;
background: #ff620e;
border-radius: 50%;
text: center;
padding-left: 3.6%;
padding-top: 2.4%;
color: white;
font-size: 7cap;
font-weight: 900;
animation: bouncing-loader 0.6s infinite alternate; 
}

.bouncing-loader > div:nth-child(2) {
animation-delay: 0.2s;
border: 1px solid rgba(112, 95, 64, 0.505)

}

.bouncing-loader > div:nth-child(3) {
animation-delay: 0.4s;
/* border: 1px solid rgba(243, 202, 125, 0.576); */

}
.bouncing-loader > div:nth-child(4) {
animation-delay: 0.6s;
border: 1px solid rgba(140, 125, 96, 0.401);
/* width: 10%; */

}
.bouncing-loader > div:nth-child(5) {
animation-delay: 0.8s;
border: 1.4px solid rgba(208, 207, 203, 0.673);

}
.bouncing-loader > div:nth-child(6) {
animation-delay: 0.10s;
}
.bouncing-loader > div:nth-child(7) {
animation-delay: 0.16s;
}
.bouncing-loader > div:nth-child(8) {
animation-delay: 0.17s;
}
.bouncing-loader > div:nth-child(9) {
animation-delay: 0.20s;
border: 1px solid rgba(232, 227, 218, 0.275);


}
</style>