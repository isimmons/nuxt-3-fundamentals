export default defineEventHandler((event) => {
  return {
    method: getMethod(event),
  }
})

// see docs here https://www.jsdocs.io/package/h3#package-index-functions
// nuxt 3 uses https://nitro.unjs.io/ and h3 to serve api
// see above using h3 functionality directly in our nuxt app
