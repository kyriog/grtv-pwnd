/* This program is free software. It comes without any warranty, to
 * the extent permitted by applicable law. You can redistribute it
 * and/or modify it under the terms of the Do What The Fuck You Want
 * To Public License, Version 2, as published by Sam Hocevar. See
 * the COPYING file for more details. */

var observer = new MutationObserver(function() {
    pwnJs = document.createElement("script");
    pwnJs.innerHTML  = "var adblock_detect = function() {return false;}";

    document.body.appendChild(pwnJs);
    observer.disconnect();
});
var config = { subtree: true, attributes: true }
observer.observe(document, config);
