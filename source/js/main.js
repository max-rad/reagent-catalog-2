import {initReagentCardSlider} from './modules/init-reagent-card-slider.js';
import {initCustomSelect} from './modules/init-custom-select.js';


window.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('load', () => {
    initCustomSelect();
    initReagentCardSlider();
  });
});
