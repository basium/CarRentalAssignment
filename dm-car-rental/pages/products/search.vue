<template>
    <div class="flex flex-col flex-auto mt-8">
        <ConnectedProductListComponent
            :columnCount="4"
            :filter="query"
        />
    </div>  
</template>
<script>
    import { ref, watchEffect } from 'vue';
    import { useRoute } from 'vue-router';

    export default {
        setup() {
            const route = useRoute();
            const query = ref(route.query.q || null);
            watchEffect(() => {
                query.value = route.query.q || null;
            });

            return { query };
        }
    }
</script>
