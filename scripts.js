document.addEventListener('DOMContentLoaded', () => {
  let puntosA = 0;
  let puntosB = 0;

  const marcadorA = document.getElementById("puntosA");
  const marcadorB = document.getElementById("puntosB");
  const mensaje = document.getElementById("mensaje");


  document.getElementById("btnA").addEventListener("click", () => {
    puntosA++;
    marcadorA.textContent = puntosA;
    actualizarMensaje();
  });
  document.getElementById("btnB").addEventListener("click", () => {
    puntosB++;
    marcadorB.textContent = puntosB;
    actualizarMensaje();
  });

  
  const btnA2 = document.getElementById("btnA2");
  const btnB2 = document.getElementById("btnB2");
  if (btnA2) btnA2.addEventListener("click", () => {
    puntosA += 2;
    marcadorA.textContent = puntosA;
    actualizarMensaje();
  });
  if (btnB2) btnB2.addEventListener("click", () => {
    puntosB += 2;
    marcadorB.textContent = puntosB;
    actualizarMensaje();
  });


  const btnA3 = document.getElementById("btnA3");
  const btnB3 = document.getElementById("btnB3");
  if (btnA3) btnA3.addEventListener("click", () => {
    puntosA += 3;
    marcadorA.textContent = puntosA;
    actualizarMensaje();
  });
  if (btnB3) btnB3.addEventListener("click", () => {
    puntosB += 3;
    marcadorB.textContent = puntosB;
    actualizarMensaje();
  });

  
  const btnAminus = document.getElementById("btnAminus");
  const btnBminus = document.getElementById("btnBminus");
  if (btnAminus) btnAminus.addEventListener("click", () => {
    puntosA = Math.max(0, puntosA - 1);
    marcadorA.textContent = puntosA;
    actualizarMensaje();
  });
  if (btnBminus) btnBminus.addEventListener("click", () => {
    puntosB = Math.max(0, puntosB - 1);
    marcadorB.textContent = puntosB;
    actualizarMensaje();
  });

  document.getElementById("reiniciar").addEventListener("click", () => {
    puntosA = 0;
    puntosB = 0;
    marcadorA.textContent = 0;
    marcadorB.textContent = 0;
    mensaje.textContent = "El partido ha sido reiniciado";
  });

  function actualizarMensaje() {
    if (puntosA === puntosB) {
      mensaje.textContent = "El partido va empatado";
    } else if (puntosA > puntosB) {
      mensaje.textContent = "Va ganando Unicaja Malaga";
    } else {
      mensaje.textContent = "Va ganando UCAM Murcia";
    }
  }


  const form = document.getElementById("formJugador");
  const input = document.getElementById("nombreJugador");
  const lista = document.getElementById("listaJugadores");

  let jugadores = [];

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = input.value.trim();

    if (nombre === "") {
      alert("El nombre no puede estar vacío");
      return;
    }

    if (jugadores.includes(nombre.toLowerCase())) {
      alert("Este jugador ya existe");
      return;
    }

    jugadores.push(nombre.toLowerCase());
    añadirJugador(nombre);
    input.value = "";
  });

  function añadirJugador(nombre) {
    const li = document.createElement("li");
    li.textContent = nombre;

    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";
    btnEliminar.type = "button";

    btnEliminar.addEventListener("click", () => {
      lista.removeChild(li);
      jugadores = jugadores.filter(j => j !== nombre.toLowerCase());
    });

    li.appendChild(btnEliminar);
    lista.appendChild(li);
  }
});
