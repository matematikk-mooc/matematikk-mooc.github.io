//From February 2017 Canvas does not longer allow us to depend on their javascript module Handlebars.
function mmoocLoadScript(mmoocScript)
{
    var mmoocScriptElement = document.createElement('script');
    mmoocScriptElement.setAttribute('charset', 'UTF-8');
    mmoocScriptElement.setAttribute('src', mmoocScript);
    document.body.appendChild(mmoocScriptElement);
}

$( document ).ready(function() {
    mmoocLoadScript("https://matematikk-mooc.github.io/frontend/feb17/handlebars-v1.3.0.js");
    mmoocLoadScript("https://matematikk-mooc.github.io/frontend/jan17/mmooc-min.js");
});