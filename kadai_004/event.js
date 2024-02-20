
   $(window).on('load scroll', (e) => {
     /* HTMLドキュメントが読み込み完了したときに
    「loadイベントが発生しました」とコンソールに出力する*/
        if(e.type === 'load'){
            console.log('loadイベントが発生しました');
        }
        /*画面をスクロールしたときに
        「scrollイベントが発生しました」とコンソールに出力する*/
        if(e.type === 'scroll'){
            console.log('scrollイベントが発生しました');
        }
   });



