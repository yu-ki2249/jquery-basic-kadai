$(function () {
    // class属性の'btn'ボタンがクリックされたら
    $('.btn').on('click', function () {
    //value属性に「クリックしました！」を追加した表示させる
            $('.text-box').val('クリックしました!');
    });
});