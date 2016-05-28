module.exports = {
  parser: 'sugarss',
  plugins: {
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
    }
  }
}
