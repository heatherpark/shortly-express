Shortly.LogoutView = Backbone.View.extend({
  model: Shortly.Logout,
  className: 'link',
  template: Templates[''],

  render: function () {
    console.log("rendering logoutView");
     jQuery.ajax({
        method: 'GET',
        url: '/logout',
     });
    this.$el.html(this.template(this.model.attributes));
    return this;
  }
});
