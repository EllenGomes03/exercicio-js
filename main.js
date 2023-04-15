const form = document.getElementById('form-idade');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const idade = parseInt(document.getElementById('idade').value);
    const idadeIrmao = parseInt(document.getElementById('idade-irmao').value);

    if (idadeIrmao > idade) {
        alert("Você é o irmão caçula!");
    } else {
        alert("Você não é o irmão caçula!");
    }
})