$(document).ready(function() {

    var bt_nr = '';

    $('.bt-nr').click(function() {
        var n = $(this).text();

        if (bt_nr !== '0') {
                bt_nr = bt_nr.concat(n);
        } else if (bt_nr[0] !== '0' && (bt_nr[1] !== '.')) {
         bt_nr = bt_nr.concat(n);
        } else {
            if (bt_nr.length == 1 && n == '.') {
                bt_nr = bt_nr.concat(n);
                $(this).attr('disabled', 'true');
            } else {
                bt_nr = bt_nr.concat(n);
            };
        };   

        $('#txt-display').val(bt_nr);
    });

});