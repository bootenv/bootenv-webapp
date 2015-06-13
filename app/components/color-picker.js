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

  togglePaletteMoreText: '+',

  togglePaletteLessText: '-',

  palette: [
    "#666666",
    "#e11d21",
    "#eb6420",
    "#fbca04",
    "#009800",
    "#006b75",
    "#207de5",
    "#0052cc",
    "#5319e7",
    "#cccccc",
    "#f7c6c7",
    "#fad8c7",
    "#fef2c0",
    "#bfe5bf",
    "#bfdadc",
    "#c7def8",
    "#bfd4f2",
    "#d4c5f9"
  ]

});

