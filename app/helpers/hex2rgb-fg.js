import Ember from 'ember';

export function hex2rgbFg(params/*, hash*/) {
  var rgb = params && params[0] && hex2rgb(params[0]).rgb;

  if (!rgb) {
    return "inherit".htmlSafe();
  }

  var yiq = ((rgb[0] * 299) + (rgb[1] * 587) + (rgb[2] * 114)) / 1000;

  return yiq > 150 ? "rgba(0, 0, 0, 0.75)".htmlSafe() : "rgba(255, 255, 255, 0.9)".htmlSafe();
}

export default Ember.HTMLBars.makeBoundHelper(hex2rgbFg);
