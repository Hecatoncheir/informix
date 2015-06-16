jQuery(document).ready(function($) {
    var $masonryContainer = $('.news-masonry');

    $masonryContainer.masonry({
        columnWidth: 0.2,
        gutter: 20,
        itemSelector: 'article'
    });
});