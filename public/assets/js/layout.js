'use strict';

const $ = require('jquery');
require('bootstrap');
global.$ = $;

  $(document).ready(function() {
      $('[data-toggle="tooltip"]').tooltip();
  });
