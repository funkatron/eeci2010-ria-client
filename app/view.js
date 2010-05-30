if (!window.app) {
    window.app = {};
}

if (!app.view) {
    app.view = {};
}

app.view.init = function() {
};

app.view.clearPostBox = function() {
    $('#postbox').val('');
};

app.view.updateList = function() {
    var html = $.mustache(app.view.msg_tpl, app.model.data);
    $('#scroller').html(html);
};


app.view.msg_tpl = '\
<ul id="list">\
    {{#posts}}\
    <li class="status">\
        <div class="avatar">\
        </div>\
        <div class="status-text">\
        {{text}}\
        </div>\
   </li>\
   {{/posts}}\
</ul>';