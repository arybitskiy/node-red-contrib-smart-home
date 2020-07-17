import 'select2/dist/js/select2.min.js';
import 'select2/dist/css/select2.min.css';
import 'select2-dark-adminlte-theme/select2-adminlte.min.css';
import './assets/css/common.css';

RED.nodes.registerType('common-ui', {
  category: 'config',
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
