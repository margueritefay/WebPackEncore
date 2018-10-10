'use strict';

import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/main.scss';
import 'font-awesome/css/font-awesome.css';

global.$ = $;

  $(document).ready(function() {
      $('[data-toggle="tooltip"]').tooltip();
  });
