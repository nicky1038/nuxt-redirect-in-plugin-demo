import path from 'node:path'

import { addPlugin, defineNuxtModule } from '@nuxt/kit'

const externalModule = defineNuxtModule({
    setup() {
        addPlugin({
            src: path.resolve('./external-plugin.ts'),
            mode: 'client',
        })
    },
})

export default defineNuxtConfig({
    compatibilityDate: '2024-07-16',
    modules: [externalModule],
    sourcemap: true,
})