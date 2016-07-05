Shortly.Logout = Backbone.Model.extend({
  urlRoot: '/logout',
  logout: function () {
         jQuery.ajax({
            method: 'GET',
            url: '/logout',
         });
     }
});
