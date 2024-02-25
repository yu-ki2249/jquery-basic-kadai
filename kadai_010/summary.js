// 色が変わる（クリックで）
$('#change-color').on('click', function() {
    $('#target').css('color', 'red');
});

// 文字が切り替わる（クリックで）
$('#change-text').on('click', function() {
    $('#target').text('こんにちは、あるいは、こんばんは');
});
// フェードアウトで文字が消える（クリックで）
$('#fade-out').on('click', function() {
    $('#target ').fadeOut();
    
});
// フェードインで文字が現れる（クリックで）
$('#fade-in').on('click', function() {
    $('#target').fadeIn();
});