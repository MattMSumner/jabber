import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    signInViaGithub: function() {
      var route = this;

      this.get('session').open('github-oauth2').then(function(){
        alert('success!');
      }, function(error) {
        route.controller.set('error', 'Could not sign you in: ' + error.message);
      });
    }
  }
});
