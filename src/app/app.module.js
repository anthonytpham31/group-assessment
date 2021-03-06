import angular from 'angular'

import ngAnimate from 'angular-animate'
import ngAria from 'angular-aria'
import ngMaterial from 'angular-material'
import ngMessages from 'angular-messages'
import uiRouter from 'angular-ui-router'

// import { clkButton } from 'components/button'
// import { clkLabel } from 'components/label'

import { baseApp } from './app.component'
import { config } from './app.config'
import { run } from './app.run'

export default
  angular
    .module('base.app', [
      ngAnimate,
      ngAria,
      ngMaterial,
      ngMessages,
      uiRouter
    ])
    // .component('clkApp', clkApp)
    // .component('clkButton', clkButton)
    // .component('clkLabel', clkLabel)
    .config(config)
    .run(run)
    .name
