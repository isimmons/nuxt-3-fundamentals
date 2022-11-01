export default defineNuxtRouteMiddleware((to, from) => {
    const userIsLoggedIn = false; // fake logged in
    if(!userIsLoggedIn){
        return navigateTo({ name: "login"});
    }
})