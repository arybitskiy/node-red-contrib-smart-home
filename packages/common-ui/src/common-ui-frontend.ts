RED.nodes.registerType('common-ui', {
  category: 'category',
  color: '#E9967A',
  defaults: {
    name: { value: '' },
  },
  inputs: 1,
  outputs: 1,
  icon: 'icon',
  label: function () {
    return this.name;
  },
});
