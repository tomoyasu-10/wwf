class HeroSlider {
    constructor(el) {
      this.el = el;
  this.swiper = this._initSwiper();
    }
    _initSwiper() {
      return new Swiper(this.el, {
      // Optional parameters
      //direction: 'vertical',上へ方向のスライダー
      loop: true,
      // effect: 'fade',
      effect: 'coverflow',
      centeredSlides: true,//画像が中央揃えになる
      slidesPerView: 1,
      speed: 1500,
      breakpoints: {
        1024: {//1024pxを境に画像の枚数を変える
          slidesPerView: 2,//表示する画像を2枚に変更する
        }
      },    
    });
    }
  start(options = {}) {
    options = Object.assign({
          delay: 4000,//4秒間隔で画像が入れ替わる
          disableOnInteraction: false
        }, options);
        this.swiper.params.autoplay = options;
        this.swiper.autoplay.start();
      }
      stop() {
        this.swiper.autopaly.stop();
      }
  
    }