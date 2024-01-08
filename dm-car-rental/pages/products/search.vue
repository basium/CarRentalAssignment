<template>
    <ConnectedProductListComponent
        :columnCount="4"
        :filter="query"
    />
</template>
<script>
    export default {
        setup:function() {
            const route = useRoute(),
            query = route.query.q || null;
            return {query}
        }
    }
</script>