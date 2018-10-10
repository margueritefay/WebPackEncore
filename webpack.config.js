var Encore = require('@symfony/webpack-encore');

Encore
    // directory where compiled assets will be stored
    .setOutputPath('public/build/')
    // public path used by the web server to access the output path
    .setPublicPath('/build')
    // only needed for CDN's or sub-directory deploy

    /*
     * ENTRY CONFIG
     *
     * Add 1 entry for each "page" of your app
     * (including one that's included on every page - e.g. "app")
     *
     * Each entry will result in one JavaScript file (e.g. app.js)
     * and one CSS file (e.g. app.css) if you JavaScript imports CSS.
     */
     //will create public/build/rep_log.js
    .addEntry('rep_log', './public/assets/js/rep_log.js')
    .addEntry('login', './public/assets/js/login.js')
    .addEntry('layout', './public/assets/js/layout.js')

    .enableBuildNotifications()

    .autoProvidejQuery()
;

module.exports = Encore.getWebpackConfig();
