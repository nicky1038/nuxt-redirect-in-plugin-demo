export default defineNuxtPlugin({
    enforce: 'pre',
    dependsOn: ['nuxt:router'],
    async setup(app) {
        app.hook('app:created', () => {
            console.log(`All plugins finished initialization, the current url is ${window.location.href}`)
        })

        console.log('Navigating to /desired-page-after-init in plugin...')
        await navigateTo('/desired-page-after-init')
        console.log(`Url after navigation is ${window.location.href}`)
    }
})