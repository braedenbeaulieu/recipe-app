<template>
    <div class="notification" :class="{ open: reactive_open }">
        <h3 v-html="reactive_title"></h3>
        <p v-html="reactive_message"></p>
    </div>
</template>

<script setup>
    import { ref } from 'vue'

    const props = defineProps([
        'id',
        'title',
        'message',
        'open',
    ])

    console.log(props)

    let reactive_title = ref(props.title)
    let reactive_message = ref(props.message)
    let reactive_open = ref(props.open)
</script>

<script>
    export function notification() {
        console.log('notification')
    }
</script>


<style lang="scss">
    .notification {
        background-color: white;
        width: 250px;
        position: absolute;
        top: -100px;
        right: 0;
        left: 0;
        margin-left: auto;
        margin-right: auto;
        padding: 8px 17px;
        box-shadow: 3px 3px 8px rgba(0, 0, 0, .1);
        border: 1px solid rgba(#363636, .4);
        border-radius: 5px;
        transition: top .3s;

        &.open {
            top: 10px;
        }

        h3 {
            font-size: 16px;
            margin-bottom: 2px;
        }

        p {
            font-size: 12px;
        }
    }
</style>