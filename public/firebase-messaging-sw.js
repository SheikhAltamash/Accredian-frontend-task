importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

const firebaseConfig = {
  apiKey: "AIzaSyC1OBDBKcbYSdNoHXU7Her7XX-khtFa_z0",
  authDomain: "courdemy-93602.firebaseapp.com",
  projectId: "courdemy-93602",
  storageBucket: "courdemy-93602.appspot.com",
  messagingSenderId: "258866970664",
  appId: "1:258866970664:web:a4df85da4c9005c44ef51d",
  measurementId: "G-D3NSBDMJWW",
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
