var gemini = require('gemini');

gemini.suite('dist', function(root) {

    root
        .setUrl('desktop.pages/browser-tmpl-dist-gemini/browser-tmpl-dist-gemini.html')
        .setCaptureElements('.page')
        .capture('plain');

});