import SpectrumColorPickerComponent from 'ember-spectrum-color-picker/components/spectrum-color-picker';

export default SpectrumColorPickerComponent.extend({

  showInput: true,

  showAlpha: false,

  hideAfterPaletteSelect: true,

  showPalette: true,

  showPaletteOnly: true,

  togglePaletteOnly: true,

  preferredFormat: "hex",

  clickoutFiresChange: true,

  // Copied from admin-lte variables
  palette: [
    "#3c8dbc",  //Primary
    "#dd4b39",  //Danger
    "#00a65a",  //Success
    "#00c0ef",  //Info
    "#f39c12",  //Warning
    "#0073b7",
    "#001F3F",
    "#39CCCC",
    "#3D9970",
    "#01FF70",
    "#FF851B",
    "#F012BE",
    "#605ca8",
    "#D81B60",
    "#111",
    "#d2d6de"
  ]

});

