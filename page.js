jQuery(function (jQuery) {  
    jQuery(".js-accordion-title").on('click', function () {
      //クリックしたjs-accordion-title以外の全てのopenを取る
      jQuery(".js-accordion-title").not(this).removeClass("open");
      //クリックされたjs-accordion-title以外のcontentを閉じる
      jQuery(".js-accordion-title").not(this).next().slideUp(300);
      //thisにopenクラスを付与
      jQuery(this).toggleClass("open");
      //thisのcontentを展開、開いていれば閉じる
      jQuery(this).next().slideToggle(300);
    });
  });


  jQuery(function() {
	setTimeout(function(){
		jQuery('.start p').fadeIn(1000);
	},500); //0.5秒後にロゴをフェードイン!
	setTimeout(function(){
		jQuery('.start').fadeOut(1500);
	},2500); //2.5秒後にロゴ含め真っ白背景をフェードアウト！
});

jQuery(function(){
    jQuery('.slider').slick({
        autoplay: true,//自動的に動き出すか。初期値はfalse。
        infinite: true,//スライドをループさせるかどうか。初期値はtrue。
        speed: 500,//スライドのスピード。初期値は300。
        slidesToShow: 3,//スライドを画面に3枚見せる
        slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
        prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
        nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
        centerMode: true,//要素を中央ぞろえにする
        variableWidth: true,//幅の違う画像の高さを揃えて表示
        dots: true,//下部ドットナビゲーションの表示
    });
});



// スクロールでふわっと

function delayScrollAnime() {
    var time = 0.2;//遅延時間を増やす秒数の値
    var value = time;
    jQuery('.delayScroll').each(function () {
      var parent = this;          //親要素を取得
      var elemPos = jQuery(this).offset().top;//要素の位置まで来たら
      var scroll = jQuery(window).scrollTop();//スクロール値を取得
      var windowHeight = jQuery(window).height();//画面の高さを取得
      var childs = jQuery(this).children();  //子要素を取得
      
      if (scroll >= elemPos - windowHeight && !jQuery(parent).hasClass("play")) {//指定領域内にスクロールが入ったらまた親要素にクラスplayがなければ
        jQuery(childs).each(function () {
          
          if (!jQuery(this).hasClass("fadeUp")) {//アニメーションのクラス名が指定されているかどうかをチェック
            
            jQuery(parent).addClass("play"); //親要素にクラス名playを追加
            jQuery(this).css("animation-delay", value + "s");//アニメーション遅延のCSS animation-delayを追加し
            jQuery(this).addClass("fadeUp");//アニメーションのクラス名を追加
            value = value + time;//delay時間を増加させる
            
            //全ての処理を終わったらplayを外す
            var index = jQuery(childs).index(this);
            if((childs.length-1) == index){
              jQuery(parent).removeClass("play");
            }
          }
        })
      }else {
        jQuery(childs).removeClass("fadeUp");//アニメーションのクラス名を削除
        value = time;//delay初期値の数値に戻す
      }
    })
  };

  // 動きのきっかけとなるアニメーションの名前を定義
function rotateYAnime(){
    jQuery('.rotateYAnime').each(function(){ //fadeUpTriggerというクラス名が
      var elemPos = jQuery(this).offset().top-50;//要素より、50px上の
      var scroll = jQuery(window).scrollTop();
      var windowHeight = jQuery(window).height();
      if (scroll >= elemPos - windowHeight){
      jQuery(this).addClass('rotateY');// 画面内に入ったらfadeUpというクラス名を追記
      }else{
      jQuery(this).removeClass('rotateY');// 画面外に出たらfadeUpというクラス名を外す
      }
      });
  }
  
  // 画面をスクロールをしたら動かしたい場合の記述
    jQuery(window).scroll(function (){
      delayScrollAnime();/* アニメーション用の関数を呼ぶ*/
      rotateYAnime();
    });// ここまで画面をスクロールをしたら動かしたい場合の記述
  
//   // 画面が読み込まれたらすぐに動かしたい場合の記述
//     jQuery(window).on('load', function(){
//       delayScrollAnime();/* アニメーション用の関数を呼ぶ*/
//     });// ここまで画面が読み込まれたらすぐに動かしたい場合の記述
