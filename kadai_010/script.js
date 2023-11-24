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


//AjaxでSTATIC FORMSにデータ送信
$('#submit').on('click', function (event) {
  //formタグによる送信を拒否
  event.preventDefault();

  //入力チェックをした結果、エラーがあるかないか判定
  let result = inputCheck();

  //エラー判定とメッセージを取得
  let error = result.error;
  let message = result.message;

  //エラーがなかったらフォームを送信する
  if( error == false) {

  } else {
    //エラーがあったらエラーメッセージを表示する
    alert(message);

  }
  

});

//フォーカスが外れた時(blur)にフォームの入力チェックをする
$('#name').blur(function () {
  inputCheck();
});
$('#furigana').blur(function () {
  inputCheck();
});
$('#email').blur(function () {
  inputCheck();
});
$('#tel').blur(function () {
  inputCheck();
});
$('#message').blur(function () {
  inputCheck();
});
$('#prefecture').blur(function () {
  inputCheck();
});
$('#agree').click(function () {
  inputCheck();
});


//　お問合せフォームの入力チェック
function inputCheck() {
   //エラーのチェック結果
   let result;

   //エラーメッセージのテキスト
   let message = '';

   //エラーがなければfalse、エラーがあればtrue
   let error = false;


   //お名前 id="name"　のチェック
   if ($('#name').val() == '') {
    
    //エラーあり
    $('#name').css('background-color', '#f79999');
    error = true;
    message += 'お名前を入力してください。\n';
   } else {
    //エラーなし
    $('#name').css('background-color', '#fafafa');
   }


   // フリガナのチェック
   if ($('#furigana').val() == '') {
    // エラーあり
    $('#furigana').css('background-color', '#f79999');
    error = true;
    message += 'フリガナを入力してください。\n';
  } else {
    // エラーなし
    $('#furigana').css('background-color', '#fafafa');
  }

  // お問い合わせのチェック
  if ($('#message').val() == '') {
    // エラーあり
    $('#message').css('background-color', '#f79999');
    error = true;
    message += 'お問い合わせ内容を入力してください。\n';
  } else {
    // エラーなし
    $('#message').css('background-color', '#fafafa');
  }

  //メールアドレスのチェック
    if ($('#email').val() == '' || $('#email').val().indexOf('@') == -1 || $('#email').val().indexOf('.') == -1) {
    //エラーあり
    $('#email').css('background-color', '#f79999');
    error = true;
    message += 'メールアドレスが未入力、または「@」「.」が含まれていません。\n';
  } else {
    //エラーなし
    $('#email').css('background-color', '#fafafa');
  }


  if ($('#tel').val() == '') {
    //未入力の場合はエラーなし
    $('#tel').css('background-color', '#fafafa');
  
  } else {
  
    //入力の場合はエラーチェック
    if($('#tel').val().indexOf('-') == -1){
     // エラーあり
     $('#tel').css('background-color', '#f79999');
     error = true;
     message += '電話番号に「-」が含まれていません。\n';
    }
  }

  //都道府県のセレクトボックスのチェックの値が変わったら
  if($('#prefecture').val() == false){
    //エラーあり(フォーカスが外れた時セレクトボックスを赤色にする)
    $('#prefecture').css('background-color', '#f79999');
    error = true;
    message += '都道府県を選択してください。\n';
    } else {
      $('#prefecture').css('background-color', '#fafafa');
  }
  
  //送信ボタンを押した時セレクトボックスを赤色にする、アラートを出す






  //個人情報のチェックボックスのチェック
  //チェックボックスが未チェック（false)だったら
  if($('#agree').prop('checked') == false) {
    //エラーが出る
    error = true;
    //エラーメッセージ
    message += '個人情報の取り扱いについてご同意いただける場合、チェックボックスにチェックしてください。\n';
  }

  
  if(error == true) {
    //エラーが出る(true)だったら
    //送信不可(グレーボタン)
    $('#submit').attr('src', 'images/button-submit.png');

  } else {
    //エラーがない(false)だったら
    //送信可（ブルーボタン)
    $('#submit').attr('src', 'images/button-submit-blue.png');
  }

  //オブジェクトでエラー判定とメッセージを返す
  //【result】の中に【error→変数error(true/false)】と【message→変数message】
  result = {
    error: error,
    message: message,
  }

  //戻り値としてエラーがあるかどうかを返す
  return result;
}
  });


