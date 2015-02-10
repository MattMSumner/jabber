import Ember from "ember";

export default Ember.Route.extend({
  activate: function() {
    this.get("session").fetch();
  },

  actions: {
    signInViaGithub: function() {
      var route = this;

      this.get("session").open("github-oauth2").then(function(authorization){
        // do the things after login, like redirect to dashboard
      }, function(error) {
        route.controller.set("error", "Could not sign you in: " + error.message);
      });
    }
  }
});
