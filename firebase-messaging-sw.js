importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-database-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyDSt8H43XQZFUF7MRuIqDq8Cdk4ZClwEDc",
  authDomain: "iitm-solutions.firebaseapp.com",
  databaseURL: "https://iitm-solutions-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "iitm-solutions",
  storageBucket: "iitm-solutions.firebasestorage.app",
  messagingSenderId: "411649171402",
  appId: "1:411649171402:web:e5278ba01a518080b0b933"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const title = payload.notification?.title || 'IITM SOLUTIONS';
  const options = {
    body: payload.notification?.body || 'New message in IITM Solutions',
    icon: '/icon-192x192.png',
    badge: '/icon-96x96.png'
  };
  self.registration.showNotification(title, options);
});

self.addEventListener('notificationclick', function(e){
  e.notification.close();
  e.waitUntil(clients.openWindow('/'));
});
