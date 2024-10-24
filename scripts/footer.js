export function footerAuto(){
    let footerTag = document.querySelector('.footer');
    // Vérifiez si le footer a déjà été ajouté
    if (footerTag.children.length > 0) return footer; // Si le footer a déjà des enfants, ne rien faire

    footerTag.className = 'footer mt-auto py-3 bg-light';
    
    const span = document.createElement('span');
    span.className = 'text-muted';
    span.textContent = `© ${new Date().getFullYear()} Cours Javascript Sarah `; // Utilisation de textContent pour éviter XSS

    const container = document.createElement('div');
    container.className = 'container text-center';
    container.appendChild(span);

    footerTag.appendChild(container);
    return footerTag;
}