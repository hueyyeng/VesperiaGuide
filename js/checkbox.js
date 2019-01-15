$("input[type=checkbox]").each(function() {
    var name = $(this).attr('name');

    if (localStorage.getItem(name) == "false") {
        $(this).prop('checked', false);
    }
});

$("input[type=checkbox]").change(function() {

    var name = $(this).attr('name'),
        value = $(this).is(':checked');
    localStorage.setItem(name, value);
});