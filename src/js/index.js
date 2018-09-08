require('../css/style.less');
require('../js/lib/rem');

import Swiper from './lib/swiper-4.3.5.min';


///Script 



let swiper = new Swiper('.swiper-container', {
    pagination: {
      el: '.swiper-pagination',
    },
  });