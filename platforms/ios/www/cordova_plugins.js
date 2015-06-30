cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.borismus.webintent/www/webintent.js",
        "id": "com.borismus.webintent.WebIntent",
        "clobbers": [
            "CDV.WebIntent"
        ]
    },
    {
        "file": "plugins/com.lampa.startapp/www/startApp.js",
        "id": "com.lampa.startapp.startapp",
        "merges": [
            "navigator.startApp"
        ]
    },
    {
        "file": "plugins/cordova-plugin-appavailability/www/AppAvailability.js",
        "id": "cordova-plugin-appavailability.AppAvailability",
        "clobbers": [
            "appAvailability"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.borismus.webintent": "3.0.0",
    "com.lampa.startapp": "0.0.5",
    "cordova-plugin-appavailability": "0.4.1",
    "cordova-plugin-whitelist": "1.0.0"
}
// BOTTOM OF METADATA
});