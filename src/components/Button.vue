<template>
    <button>Button with an icon: <CIcon name="arrow-down" width="24" height="24" color="#000000"/></button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CIcon from './CIcon.vue';

export default defineComponent({
    name: 'Button',
    components: {
        CIcon
    },
    props: {
        id: {
            type: String,
            required: true,
        },
    },
    setup(props) {
        return {};
    },
});
</script>

<style scoped>

</style>