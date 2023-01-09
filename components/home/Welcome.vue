<template>
  <div class="evo__welcome">
    <div class="evo__welcome__cards">
      <img src="../../assets/images/home/welcome_cards.png" alt="Welcome Cards" class="evo__welcome__cards__image">
    </div>
    <div class="container mx-auto evo__welcome__inner">
      <h1 class="evo__welcome__header font-inktrap text-black">
        A new ecosystem for <b>working</b><br>
        with <b>transactions</b>, built<br>
        effectively with <span class="evo__welcome__header__icon"><img src="../../assets/images/tron.svg" alt="Tron"></span><b>Tron</b>
      </h1>
      <div class="evo__welcome__partners">
        <div class="evo__welcome__partners__header">Chief partners</div>
        <ul class="evo__welcome__partners__list scrollbar-hide">
          <li class="evo__welcome__partners__item">
            <a href="javascript:;" class="evo__welcome__partners__link">
              <img src="../../assets/images/partners/meta.svg" alt="Meta" class="evo__welcome__partners__icon">
            </a>
          </li>
          <li class="evo__welcome__partners__item">
            <a href="javascript:;" class="evo__welcome__partners__link">
              <img src="../../assets/images/partners/binance.svg" alt="Binance" class="evo__welcome__partners__icon">
            </a>
          </li>
          <li class="evo__welcome__partners__item">
            <a href="javascript:;" class="evo__welcome__partners__link">
              <img src="../../assets/images/partners/bybit.svg" alt="Bybit" class="evo__welcome__partners__icon">
            </a>
          </li>
          <li class="evo__welcome__partners__item">
            <a href="javascript:;" class="evo__welcome__partners__link">
              <img src="../../assets/images/partners/coinbase.svg" alt="Coinbase" class="evo__welcome__partners__icon">
            </a>
          </li>
          <li class="evo__welcome__partners__item">
            <a href="javascript:;" class="evo__welcome__partners__link">
              <img src="../../assets/images/partners/emirates.svg" alt="Emirates" class="evo__welcome__partners__icon">
            </a>
          </li>
        </ul>
      </div>
      <button class="evo__welcome__button">
        Learn more ->
      </button>
    </div>
    <div class="evo__welcome__variants">
      <ul class="container mx-auto evo__welcome__variants__list">
        <li class="evo__welcome__variants__item">
          <div class="evo__welcome__variants__number">4</div>
          <div class="evo__welcome__variants__text">Variants of <br>crypto cards</div>
        </li>
        <li class="evo__welcome__variants__item">
          <div class="evo__welcome__variants__number">1%</div>
          <div class="evo__welcome__variants__text">Cashback* from <br>each purchase</div>
        </li>
        <li class="evo__welcome__variants__item">
          <div class="evo__welcome__variants__number">0%</div>
          <div class="evo__welcome__variants__text">Fee** for<br>new stores</div>
        </li>
        <li class="evo__welcome__variants__item">
          <div class="evo__welcome__variants__number">100+</div>
          <div class="evo__welcome__variants__text">Transactions <br>per minute</div>
        </li>
      </ul>
    </div>
  </div>
</template>


<style lang="scss">
@import '../../assets/styles/mixins';

.evo__welcome {
  position: relative;

  @media (min-width: 1536px) {
    padding-top: 170px;
  }
  @media (max-width: 1535px) {
    padding-top: 100px;
  }
  @media (max-width: 1023px) {
    padding-top: 60px;
  }
  @media (max-width: 1023px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }

  &__variants {
    margin-top: 200px;
    background: linear-gradient(90deg, #181818 0%, rgba(24, 24, 24, 0.85) 20.83%, rgba(24, 24, 24, 0.8) 65.1%, #181818 97.4%);
    width: 100%;

    @media (max-width: 1023px) {
      margin-top: 100px;
    }


    &__list {
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #FFFFFF;
      padding: 98px 0 72px;

      @media (max-width: 1279px) {
        padding: 50px 0;
      }
      @media (max-width: 767px) {
        flex-wrap: wrap;
      }
      @media (max-width: 767px) {
        margin-left: 20px;
        max-width: calc(100% - 40px);
        justify-content: center;
        padding: 20px 0;
      }
    }
    &__item {
      display: flex;
      align-items: flex-end;
      justify-content: flex-start;
      position: relative;
      &:not(&:first-child) {
        &::before {
          @media (min-width: 768px) {
            content: '';
          }
          background: #5A5A5A;
          position: absolute;
          left: -40%;
          width: 1px;
          height: 128%;
          top: -14%;
          @media (max-width: 1539px) {
            left: -20%;
          }
        }
      }
      @media (max-width: 767px) {
        flex-basis: 50%;
        justify-content: center;
      }
      @media (max-width: 767px) and (min-width: 500px) {
        &:not(&:nth-last-child(1)):not(&:nth-last-child(2)) {
          margin-bottom: 20px;
        }
      }
      @media(max-width: 499px) {
        flex-basis: 100%;
        flex-direction: column;
        align-items: center;
        margin-bottom: 40px;
        &:first-child {
          margin-top: 40px;
        }
      }
    }
    &__number {
      font-size: 62px;
      line-height: 30px;
      font-weight: 700;
      margin-right: 10px;

      @media (max-width: 1279px) {
        font-size: 48px;
        line-height: 30px;
      }
      @media (max-width: 1023px) {
        font-size: 40px;
        line-height: 22px;
      }
    }
    &__text {
      color: #CECECE;
      font-size: 22px;
      line-height: 125%;
      font-weight: 350;
      @media (max-width: 1279px) {
        font-size: 18px;
      }
      @media (max-width: 1023px) {
        font-size: 14px;
      }
    }
  }

  &__cards {
    width: 100%;
    max-width: 100%;
    overflow: hidden;
    height: auto;
    z-index: 0;

    left: 0;
    @media (min-width: 1536px) {
      top: 65px;
    }
    @media (max-width: 1535px) {
      top: 45px;
    }
    @media (min-width: 1024px) {
      position: absolute;
    }
    &__image {
      margin-left: auto;
      display: block;
      object-fit: contain;

      @media (min-width: 1536px) {
        @include exact-size(751.1px, 656.78px);
        margin-right: -5%;
      }
      @media (max-width: 1535px) and (min-width: 1024px) {
        margin-right: 0 - vw(50px);
        @include exact-size(vw(751.1px), vw(656.78px));
      }
      @media (max-width: 1023px) {
        margin-right: auto;
        @include exact-size(60%, auto);
      }
    }
  }
  &__inner {
    position: relative;
    z-index: 2;
  }
  &__header {
    @media (min-width: 1536px) {
      font-size: 64px;
      line-height: 120%;
    }
    @media (max-width: 1535px) {
      font-size: 48px;
      line-height: 110%;
    }
    @media (max-width: 767px) {
      font-size: 40px;
    }
    @media (max-width: 639px) {
      font-size: 34px;
      padding: 0 20px;
      max-width: 320px;
      margin-left: auto;
      margin-right: auto;
      br {
        display: none;
      }
    }
    @media (max-width: 1023px) {
      text-align: center;
    }
    &__icon {
      display: inline-block;
      margin-right: 10px;
      @media (min-width: 1536px) {
        @include exact-size(38px, 38px);
      }
      @media (max-width: 1535px) {
        @include exact-size(30px, 30px);
      }
      @media (max-width: 639px) {
        @include exact-size(22px, 22px);
        margin-right: 4px;
      }
    }
  }
  &__partners {
    @media (min-width: 1536px) {
      margin-top: 100px;
    }
    @media (max-width: 1535px) {
      margin-top: 60px;
    }
    @media (max-width: 639px) {
      margin-top: 30px;
    }

    &__header {
      font-weight: 400;
      @apply text-black;
      @media (min-width: 1280px) {
        font-size: 24px;
        line-height: 120%;
      }
      @media (max-width: 1279px) {
        font-size: 20px;
        line-height: 110%;
      }
      @media (max-width: 1023px) {
        text-align: center;
      }
    }
    &__list {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      @media (min-width: 1280px) {
        margin-top: 20px;
      }
      @media (max-width: 1279px) {
        margin-top: vw(20px);
      }
      @media (max-width: 1023px) {
        justify-content: center;
      }
      @media (max-width: 767px) {
        margin-left: 20px;
        max-width: calc(100% - 40px);
      }
      @media (max-width: 767px) {
        flex-wrap: wrap;
        justify-content: center;
      }
    }
    &__item {
      &:not(&:last-child) {
        @media (min-width: 1280px) {
          margin-right: 30px;
        }
        @media (max-width: 1279px) {
          margin-right: 18px;
        }
      }
    }
    &__icon {
      opacity: 0.2;
      transition: all 0.2s 0s ease-in-out;
      @media (max-width: 1279px) {
        @include exact-size(120px, 40px);
        object-fit: contain;
      }
      @media (max-width: 767px) {
        @include exact-size(120px * 0.6, 40px * 0.6);
        margin-bottom: 12px;
      }
    }
    &__link {
      display: block;
    }
    &__link:hover > &__icon {
      opacity: 1;
    }
  }
  &__button {
    @apply bg-black text-white font-inktrap;
    margin-top: 50px;
    font-size: 22px;
    line-height: 11px;
    padding: 27px 38px 18px 39px;
    border-radius: 20px;
    display: block;

    @media (max-width: 1023px) {
      margin-top: 60px;
      margin-left: auto;
      margin-right: auto;
    }
    @media (max-width: 767px) {
      margin-top: 16px;
      font-size: 16px;
      padding-top: 22px;
      padding-bottom: 14px;
    }
  }
}

</style>