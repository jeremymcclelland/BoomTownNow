    $('.single-feature').mouseenter(function() {
        $('.active').removeClass('active').addClass('unfocus');
        $(this).removeClass('unfocus').addClass('active');

        var bg_class = $(this).data('bg-class');
        var target_id = $(this).data('trait-parent');
        var circle_target_id = $(this).data('trait-circle');

        console.log(circle_target_id);

        $('#' + target_id).removeClass();
        $('#' + target_id).addClass(bg_class);

        var lastClass = $('.' + circle_target_id).attr('class').split(' ').pop();
        $('.' + circle_target_id).removeClass(lastClass);
        $('.' + circle_target_id).addClass(bg_class);


    });
