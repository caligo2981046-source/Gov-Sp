function pesquisar() {
  let termo = document.getElementById("campoPesquisa").value.toLowerCase();

  // Palavra secreta
  if (termo === "caligo") {
    window.location.href = "caligo.html";
    return;
  }

  // Redirecionamento baseado no termo
  if (termo.includes("educação")) {
    window.location.href = "educacao.html";
  } else if (termo.includes("direitos")) {
    window.location.href = "direitos.html";
  } else if (termo.includes("municipal")) {
    window.location.href = "municipal.html";
  } else if (termo.includes("trabalho")) {
    window.location.href = "trabalho.html";
  } else if (termo.includes("serviços sociais") || termo.includes("sociais")) {
    window.location.href = "sociais.html";
  } else if (termo.includes("saúde")) {
    window.location.href = "saude.html";
  } else if (termo.includes("início")) {
    window.location.href = "index.html";
  } else if (termo.includes("serviços")) {
    window.location.href = "servicos.html";
  } else if (termo.includes("sobre")) {
    window.location.href = "sobre.html";
  } else {
    alert("Nenhum resultado encontrado.");
  }
}

// Menu
document.querySelectorAll("header nav ul li").forEach(item => {
  item.addEventListener("click", () => {
    const texto = item.innerText.toLowerCase();

    if (texto === "início") {
      window.location.href = "index.html";
    } else if (texto === "serviços") {
      window.location.href = "servicos.html";
    } else if (texto === "sobre") {
      window.location.href = "sobre.html";
    }
  });
});

// Cards
document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", () => {
    const titulo = card.querySelector("h3").innerText.toLowerCase();

    if (titulo.includes("educação")) {
      window.location.href = "educacao.html";
    } else if (titulo.includes("direitos")) {
      window.location.href = "direitos.html";
    } else if (titulo.includes("municipal")) {
      window.location.href = "municipal.html";
    } else if (titulo.includes("trabalho")) {
      window.location.href = "trabalho.html";
    } else if (titulo.includes("serviços sociais")) {
      window.location.href = "sociais.html";
    } else if (titulo.includes("saúde")) {
      window.location.href = "saude.html";
    }
  });
});