function upDate(previewPic) {
    const imageDiv = document.getElementById('image');
    imageDiv.style.backgroundImage = `url(${previewPic.src})`;
    imageDiv.textContent = previewPic.alt;
    console.log(`Hovered over: ${previewPic.alt}`);
}

function unDo() {
    const imageDiv = document.getElementById('image');
    imageDiv.style.backgroundImage = '';
    imageDiv.textContent = 'Hover over an image below to display here';
}

function addTabFocus() {
    console.log('Adding tabindex and focus/blur listeners');
    const previews = document.querySelectorAll('.preview');

    // Parcourir chaque image pour ajouter des événements et tabindex
    previews.forEach((preview) => {
        preview.setAttribute('tabindex', '0'); // Ajout de l'attribut tabindex
        preview.addEventListener('mouseover', () => upDate(preview));
        preview.addEventListener('mouseout', unDo);
        preview.addEventListener('focus', () => upDate(preview)); // Pour le focus clavier
        preview.addEventListener('blur', unDo); // Pour le départ du focus
    });
}

// Ajouter les écouteurs d'événements au chargement
window.onload = addTabFocus;
