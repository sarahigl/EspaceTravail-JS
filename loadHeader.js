function loadHeader(relativePath = '') {
    $("#header").load(relativePath + "header.html", function() {
        // Ajuster les liens
        $('a.navbar-brand, a.nav-link:not(.dropdown-toggle)').each(function() {
            var href = $(this).attr('href');
            if (href && !href.startsWith('http') && href !== '#') {
                $(this).attr('href', relativePath + href);
            }
        });
        $('.dropdown-item').each(function() {
            var href = $(this).attr('href');
            if (href && !href.startsWith('http')) {
                $(this).attr('href', href.replace('exercices/', ''));
            }
        });
        
        // Initialiser les dropdowns manuellement
        $('.dropdown-toggle').on('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            $(this).siblings('.dropdown-menu').toggle();
        });

        $(document).on('click', function() {
            $('.dropdown-menu').hide();
        });
    });
}
