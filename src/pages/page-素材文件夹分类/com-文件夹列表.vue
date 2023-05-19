<template>
    <a-space>
        <a-radio-group v-model="store.in_folder_path">
            <a-radio v-for="folder in all_folder">
                {{ folder.folder_stem }}
            </a-radio>
        </a-radio-group>
    </a-space>

</template>

<script setup lang="ts">
import {all_folder, store} from "./store";
import folder from "@icon-park/vue-next/lib/icons/Folder";
</script>

<style scoped>

</style>