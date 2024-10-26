export function headerFunc(){
    let headerTag = document.querySelector('#header');
    
    let nav = document.createElement('nav');
    nav.classList = 'navbar navbar-expand-lg navbar-light bg-pink fixed-top'
    nav.style.position = 'absolute';

    let nomProjet = document.createElement('a');
    nomProjet.className = 'navbar-brand';
    nomProjet.innerText = 'Hub Javascript';

// responsive btn => container fluid supprimé utiliser nav pour responsive btn
    // let btnNav = document.createElement('button');
    // btnNav.className = 'navbar-toggler';
    // btnNav.type = 'button';
    // btnNav.setAttribute = ('data-bs-toggle', 'collapse');
    // btnNav.setAttribute = ('data-bs-target', '#navbarNav');
    // btnNav.setAttribute = ('aria-controls', 'navbarNav');
    // btnNav.setAttribute = ('aria-expanded', 'false');
    // btnNav.setAttribute = ('aria-label', 'Toggle navigation');

    // let span = document.createElement('span');
    // span.className = 'navbar-toggler-icon';
        

    header.appendChild(nav);
    nav.appendChild(nomProjet);
    // container.appendChild(nomProjet);
    // container.appendChild(btnNav);
    // btnNav.appendChild(span);
 
    return headerTag;
}

export function generateNavMenu(navItems) {
    let ul = document.createElement('ul');
    ul.id = 'navbarNav';
    ul.className = 'navbar-nav me-auto mb-2 mb-lg-0';
    
    //ul.style.position = 'static';

    navItems.forEach(item => {
        let li = document.createElement('li');
        li.className = 'nav-item';

        if (item.children) {
            let a = document.createElement('a');
            a.className = 'nav-link dropdown-toggle';
            a.href = '#';
            a.role = 'button';
            a.dataset.bsToggle = 'dropdown';
            a.dataset.bsTarget = `#${item.id}`;
            a.innerText = item.label;

            let div = document.createElement('div');
            div.className = 'dropdown-menu';

            // div.style.position = 'static';
            div.id = item.id;

            item.children.forEach(child => {
                let childA = document.createElement('a');
                childA.className = 'dropdown-item';
                childA.href = child.href;
                childA.innerText = child.label;

                div.appendChild(childA);
            });

            li.appendChild(a);
            li.appendChild(div);
        } else {
            let a = document.createElement('a');
            a.className = 'nav-link';
            a.href = item.href;
            a.innerText = item.label;

            li.appendChild(a);
        }

        ul.appendChild(li);
    });

    return ul;
}
export function addNavMenuToHeader(navMenu) {
    let nav = document.querySelector('nav');
    nav.appendChild(navMenu);
}