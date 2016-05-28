module.exports = {
  import: {
    path: './',
    encoding: 'utf-8'
  },
  bem: {
    defaultNamespace: 'undefined',
    style: 'bem',
    separators: {
      namespace: '-',
      descendent: '__',
      modifier: '--'
    },
    shortcuts: {
      component: 'block',
      descendent: 'elem',
      modifier: 'mods'
    }
  },
  cssnano: null
}
