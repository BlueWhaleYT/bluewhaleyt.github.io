var posts=["post/dev-kotlin-notes.html","post/dev-python-notes.html","post/react-dev-spa-notes.html","post/web-dev-build-and-host-website-notes.html","post/web-dev-express-restful-api-notes.html","post/web-dev-hexo-blog-setup-notes.html","post/web-dev-nodejs-express-notes.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };