jQuery(document).ready(function($) {
    var $masonryContainer = $('.news');

    $masonryContainer.masonry({
        columnWidth: '.masonry__column',
        gutter: '.masonry__gutter',
        itemSelector: 'article'
    });
});