
function showPage(pageId){
    document.querySelectorAll('.page').forEach(page=>{
        page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');
}


  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
  import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-firestore.js";

  // SUA CONFIG REAL
  const firebaseConfig = {
    apiKey: "AIzaSyCpJIY_refjsF5jHDplBdKV8cpPIJIBKsQ",
    authDomain: "eshift-83570.firebaseapp.com",
    projectId: "eshift-83570",
    storageBucket: "eshift-83570.firebasestorage.app",
    messagingSenderId: "993251621913",
    appId: "1:993251621913:web:aa1001aad4bfeb71263e88"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  // DEIXAR GLOBAL (pra funcionar com onclick)
  window.salvar = async function () {
    const nome = document.getElementById("nome").value;

    if (!nome) {
      alert("Digite um nome");
      return;
    }

    await addDoc(collection(db, "usuarios"), {
      nome: nome,
      criadoEm: new Date()
    });

    alert("Salvo no Firebase 🚀");
  };
