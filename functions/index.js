var functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });


/*var pushNews = function(kind, data, event){
	var news = {
		kind: kind,
		media: data.media ? data.media : null,
		author: data.author ? data.author : null,
		title: data.title ? data.title : null,
		text: data.text ? data.text : null,
	}
	console.log('pushNews', kind, news)
	event.data.ref.parent.child('feed').push(news);

}


var setAuthor = function(event){
	event.params.postId
	var original = event.data.val();
	console.log('setAuthor', original, event.auth.variable);

	if(!original.author){
		var user = event.auth.variable;
		original.author = {
			name: user.name,
			uid: user.uid,
			picture: user.picture,
		}		
	}

	//pushNews('post', original, event); Need to pay :(

	return event.data.ref.set(original, function(){console.log('postauthor save ok')});
}

exports.preloadPostAuthor = functions.database.ref('/post/{postId}')
    .onWrite(setAuthor);*/

/*exports.addWelcomeMessages = functions.auth.user().onCreate(event => {
  const user = event.data;
  console.log('A new user signed in for the first time.');
  const fullName = user.displayName || 'Anonymous';

  return admin.database().ref('messages').push({
    name: 'Firebase Bot',
    photoUrl: '/images/firebase-logo.png', // Firebase logo
    text: `Olá ${fullName}. Seja bem vindo!`
  });
});*/