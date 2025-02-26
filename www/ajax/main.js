$(document).ready(function() {
 const nameElement = $('#name');
 const usernameElement = $('#username');
 const avatarElement = $('#avatar');
 const reposElement = $('#repos');
 const followersElement = $('#followers');
 const followingElement = $('#following');
 const linkElement = $('#link');
 $.ajax({
  url: 'https://api.github.com/users/Auguuusto',
  method: 'GET',
  success: function(json) {
   nameElement.text(json.name);
   usernameElement.text(`@${json.login}`);
   avatarElement.attr('src', json.avatar_url);
   followingElement.text(json.following);
   followersElement.text(json.followers);
   reposElement.text(json.public_repos);
   linkElement.attr('href', json.html_url);
  }
 });
});