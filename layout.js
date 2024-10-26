import { headerFunc, generateNavMenu, addNavMenuToHeader } from './scripts/header.js';
import { footerAuto } from './scripts/footer.js';
export function setupLayout() {
    headerFunc()

    const navItems = [
        {
            label: 'Accueil',
            href: './index.html'
        },
        {
            label: 'Exercices',
            id: 'exercices-dropdown',
            children: [
                { label: 'API', href: './exercices/API.html' },
                { labe1: 'Auth Regex', href: './exercices/authRegex.html' },
                { label: 'Class', href: './exercices/Class.html' },
                { label: 'Exo DOM', href: './exercices/exoDom.html' },
                { label: 'Firebase', href: './exercices/firebase.html' },
                { label: 'Notion Base', href: './exercices/notionBase.html' },
                { label: 'Regexp', href: './exercices/regexp.html' }
            ]
        },
        {
            label: 'Cours',
            id: 'cours-dropdown',
            children: [
                { label: 'Notion Base JS', href: './cours/js-notion.html' },
                { label: 'Firebase avec JS', href: './cours/js-firebase.html' },
                { label: 'Class avec JS', href: './cours/class-js.html' },
                { label: 'DOM avec JS', href: './cours/dom-js.html' }
            ]
        }
    ];
    
    
    const navMenu = generateNavMenu(navItems);
    addNavMenuToHeader(navMenu);
    footerAuto()
}
