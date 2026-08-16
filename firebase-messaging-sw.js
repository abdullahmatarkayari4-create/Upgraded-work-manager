// ============================================================
// Firebase Cloud Messaging — Service Worker
// هذا الملف لازم يكون بنفس المجلد يلي فيه workshop.html بالضبط
// (نفس مكان الملف عندك على GitHub/الاستضافة، بجانب بعض)
// هو المسؤول عن استقبال الإشعارات الحقيقية حتى لو التطبيق مسكر تماماً.
// لا تعدل أي شي هون إلا إذا عارف شو عم تعمل.
// ============================================================

importScripts("https://www.gstatic.com/firebasejs/12.17.1/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/12.17.1/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyAil3oUaJQMW8ErUVFdLaugx_gbXVlPM-E",
  authDomain: "my-updated-workmanager.firebaseapp.com",
  projectId: "my-updated-workmanager",
  storageBucket: "my-updated-workmanager.firebasestorage.app",
  messagingSenderId: "47836637388",
  appId: "1:47836637388:web:4e27f798d52a0a0947ba69",
  measurementId: "G-VZ879BZX97"
});

const messaging = firebase.messaging();

// يشتغل هذا لما توصل رسالة والتطبيق مسكر أو بالخلفية
messaging.onBackgroundMessage((payload) => {
  const title = (payload.notification && payload.notification.title) || "ورشة الأثاث";
  const body = (payload.notification && payload.notification.body) || "";
  self.registration.showNotification(title, {
    body,
    icon: "icon.png",
    dir: "rtl"
  });
});
