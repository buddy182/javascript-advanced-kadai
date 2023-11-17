$(function (){
  //マウスオーバーをすると
  $('.button-more').on('mouseover', function(){
    $(this).animate({
      opacity: 0.5,
      marginLeft: 20,
    }, 100);
});

  //マウスアウトすると
$('.button-more').on('mouseout', function(){
  $(this).animate({
    opacity: 1.0,
    marginLeft: 0,
  }, 100);
});

  //カルーセル
  $('.carousel').slick({
    autoplay: true,
    dots: true,
    infinite: true,
    autoplaySpeed: 5000,
    arrows: false,
  });

   //カルーセル4をクリックするとスクロールする
  $('a[href*="#"]').click(function () {
    //ページ内リンクのHTMLタグhrefから、リンクされているエリアidの値を取得
    var elmHash = $(this).attr('href'); 
     //idの上部の距離を取得
    var pos = $(elmHash).offset().top; 
    //取得した位置にスクロール。500の数値が大きくなるほどゆっくりスクロール
    $('body,html').animate({scrollTop: pos}, 700, 'swing'); 
    return false;
});
  });


