export default defineNuxtRouteMiddleware((to, from) => {
    //console.log(to, from, "from the named middleware");
})

// this is a global middleware that runs on all routes
// notice 'global' in the file name. This is all it takes
// to make it global. nuxt does the rest
// commented out the console.log stuff so it won't be
// logging out on every request but left here for example