<template>
    <vue-svgicon role="img" :data="data" :fill="true" :title="screenReaderFriendlyTitle"/>
</template>

<script lang="ts">

/*
    See possibilities for attribs here: https://mmf-fe.github.io/svgicon/en/guide/advanced.html#component
 */

import { defineComponent, ref, watch } from 'vue';

export default defineComponent({
    name: 'CIcon',
    props: {
        name: {
            type: String,
            required: true,
        },
    },
    setup(props) {
        const screenReaderFriendlyTitle = props.name.replace(/-/g, ' ');

        const data = ref(undefined);
        import(`../assets/icons/${props.name}.svg`)
            .then(svgModule => data.value = svgModule.default);

        watch(data, () => {
            console.log(data.value);
        });

        return { screenReaderFriendlyTitle, data };
    },
});
</script>
