//変数の初期化
let untyped = '';
let typed = '';
let score = 0;


// HTML要素を取得untyped
const untypedfield = document.getElementById('untyped');
const typedfield = document.getElementById('typed');
const wrap = document.getElementById('wrap');
const start =document.getElementById('start');
const count =document.getElementById('count');

//テキストを格納
const textLists = [
  'Hello World','This is my App','How are you?',
   'Today is sunny','I love JavaScript!','Good morning',
   'I am Japanese','Let it be','Samurai',
   'Typing Game','Information Technology',
   'I want to be a programmer','What day is today?',
   'I want to build a web app','Nice to meet you',
   'Chrome Firefox Edge Safari','machine learning',
   'Brendan Eich','John Resig','React Vue Angular',
   'Netscape Communications','undefined null NaN',
   'Thank you very much','Google Apple Facebook Amazon',
   'ECMAScript','console.log','for while if switch',
   'var let const','Windows Mac Linux iOS Android',
   'programming'
]; 

//ランダムなテキストを表示する機能//
 const createText = () => {

  // createTextで呼ばれるたびに　正タイプした文字列をクリア
  typed = '';
  // HTMLの<span id="typed" class="typed"></span>空文字列で初期化　
  typedfield.textContent = '';

   //　配列の添字をランダムに取得(数字を取得0〜29)
   let random = Math.floor(Math.random() * textLists.length);

  // お題の配列からテキストを取得
  untyped = textLists[random];

  //HTMLの<span id="untyped"></span>にテキストをセットする
  untypedfield.textContent = untyped;
};




//キー入力の判定ができる機能//
const keyPress = e => {

  //誤タイプの場合
  if(e.key !==untyped.substring(0,1)) {
    wrap.classList.add('untyped');

     //100ms後に背景色を元に戻す
     setTimeout(() => {
      wrap.classList.remove('untyped');
     }, 100);         
     return;
  }

  //正タイプの場合
   // スコアのインクリメント
   score++;
  typed += untyped.substring(0,1);
  untyped = untyped.substring(1);
  typedfield.textContent = typed;
  untypedfield.textContent = untyped;

  // HTMLの<p id="typedscore" class="typedscore">0</p>に入力文字数をセット
  typedscore.textContent = score;


  //　テキストがなくなったら新しいテキストを表示
if(untyped === '') {
  createText();
}

};




//タイピングスキルのランクを判定する機能//
const rankCheck = score => {


  //テキストを格納する変数を作る
  let text = '';

  //スコアに応じて異なるメッセージを変数textに格納する
  if(score < 100) {
    text = `あなたのランクはCです。\nBランクまであと${100 - score}文字です。`;
  } else if(score < 200) {
    text = `あなたのランクはBです。\nAランクまであと${200 - score}文字です。`;
  } else if(score < 200) {
    text = `あなたのランクはAです。\nSランクまであと${300 - score}文字です。`;
  } else if(score < 200) {
    text = `あなたのランクはSです。\nおめでとうございます!`;
  }

//生成したメッセージと一緒に文字列を返す
return `${score}文字打てました!\n${text}\n【OK】リトライ / 【キャンセル】終了`;

};



// ゲームを終了
const gameOver = id => {
  clearInterval(id);

  //タイムアップ！と表示する（HTMLの<span id="untyped"></span>にテキストをセットする)
  untypedfield.textContent = 'タイムアップ!';

  //10秒たってからconfirmダイアログを出す
  setTimeout( () => {
  const result = confirm(rankCheck(score));

  // OKボタンをクリックされたらリロードする
  if(result == true) {
    window.location.reload();

  }
  },10);
};

 




// カウントダウンタイマー
const timer = () => {

  //タイマー部分のHTML要素（P要素)を取得
  let time = count.textContent;

  const id = setInterval(() => {

    //カウントダウンする
    time--;
    count.textContent = time;

    //カウントが0になったらタイマーを停止する
    if(time <= 0) {
      gameOver(id);
    }
  }, 1000);
};




//ゲームスタート時の処理
start.addEventListener('click', () => {

  //カウントダウンタイマーを開始する
  timer();

  //ランダムなテキストを表示する
  createText();

  //スタートボタンを非表示にする
  start.style.display = 'none';

  //キーボードのイベント処理
  document.addEventListener('keypress', keyPress);

});

untypedfield.textContent = 'スタートボタンで開始';





/* typedscoreの要素を取得
let typedscore = 0;
const typedscore = document.getElementById('typedscore');


//　スコアを表示
typedscore.textContent = score; */