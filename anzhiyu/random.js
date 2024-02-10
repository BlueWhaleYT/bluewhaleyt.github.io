var posts=["post/android-firebase-setup-notes.html","post/jetpack-compose-firebase-auth-notes.html","post/jetpack-compose-firebase-cloud-firestore-notes.html","post/jetpack-compose-firebase-realtime-database-notes.html","post/jetpack-compose-photo-picker-for-android-13.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };