/*
|-------------------------------------------------------------------------------
| Development config               https://maizzle.com/docs/environments/#local
|-------------------------------------------------------------------------------
|
| The exported object contains the default Maizzle settings for development.
| This is used when you run the `maizzle build` or `maizzle serve` and it
| has the fastest build time, since most transformations are disabled.
|
*/

module.exports = {
  build: {
    templates: {
      source: 'src/templates',
      destination: {
        path: 'build_local',
      },
      assets: {
        source: 'src/assets/images',
        destination: 'images',
      },
    },
    tailwind: {
      css: 'src/assets/css/main.css',
    },
  },

  events: {
    async beforeRender(html, config) {
      config.dataFromConfig = [
        {title: "Lorem", text: "ipsum dolor sit amet"},
        {title: "Lorem ipsum", text: "dolor sit amet"},
        {title: "Lorem ipsum dolor", text: "sit amet ... "}
      ]

      return html
    },
  }
}
