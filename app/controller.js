if (!window.app) {
    window.app = {};
}

if (!app.controller) {
    app.controller = {};
}

/*
    bind initial listeners
*/
app.controller.init = function() {
    $('h1').bind('mousedown', function() {
        window.nativeWindow.startMove();
    });
    
    /*
        listen for ENTER on postbox
    */
    $('#postbox').bind('keydown', function(e) {
        if (e.keyCode == 13) {
            var msg = $.trim($(this).val());
            if (msg.length > 0) {
                app.model.post(msg);
                app.view.clearPostBox();
            }
            return false;
        }
        return true;
    });
    
    /*
        load initial posts into model
    */
    app.model.getPosts();
};