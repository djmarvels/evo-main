<template>
  <div class="evo__features">
    <div class="container mx-auto evo__features__inner">
      <div class="evo__features__header">
        <b>Features</b> that you<br> can get in <b>EVO</b>
      </div>
      <div class="evo__features__cards">
        <div class="evo__features__cards__wrapper">

          <div class="evo__features__card evo__features__card_dark evo__features__card_big">
            <div class="evo__features__card__header evo__features__card__header_big">
              Buy crypto with EVO <br>In one touch
            </div>
            <div class="evo__features__card__text evo__features__card__text_big">
              EVO cooperates with large crypto <br>projects, allowing users to buy <br>cryptocurrency "In one touch"
            </div>
            <img src="../../assets/images/home/crypto_card_image.png" alt="Crypto Card Image" class="evo__features__card__image">
          </div>

          <div class="evo__features__card evo__features__card_border">
            <img src="../../assets/images/home/icon_card_device.svg" alt="Icon Card Device" class="evo__features__card__icon">
            <div class="evo__features__card__header">
              Multi – Device Support<br>Access
            </div>
            <div class="evo__features__card__text">
              EVO supports your needs with quick delivery <br>through various channels, including <br>mobile, tablet, and desktop
            </div>
          </div>

          <div class="evo__features__card evo__features__card_shadow">
            <img src="../../assets/images/home/icon_card_finance.svg" alt="Icon Card Device" class="evo__features__card__icon">
            <div class="evo__features__card__header">
              Convenient Financial <br>Accounting System
            </div>
            <div class="evo__features__card__text">
              EVO allows stores to keep internal financial <br>records of crypto transactions. Downloading <br>data to <strong>.xlsx</strong> and <strong>.csv</strong>. <nuxt-link to="/">Learn more -></nuxt-link>
            </div>
          </div>

          <div class="evo__features__card evo__features__card_border evo__features__card_big evo__features__card_last">
            <div class="evo__features__card__header evo__features__card__header_big">
              EVO Offers High Levels <br>of Security
            </div>
            <div class="evo__features__card__text evo__features__card__text_big evo__features__card__text_last">
              All EVO transactions pass through the TRON crypto <br>network, taking into account all security standards. <br>Access to your account is securely protected.
            </div>
            <div class="evo__features__card__image_overlay">
              <img src="../../assets/images/home/crypto_card_evo.png" alt="Crypto Card Image" class="evo__features__card__image__inner">
            </div>
          </div>
        </div>
      </div>
      <div class="evo__features__card evo__features__card_premium">
        <div class="evo__features__card__header evo__features__card__header_premium">
          Premium EVO Crypto Cards <br>for Premium Customers
        </div>
        <div class="evo__features__card__text evo__features__card__text_premium">
          Discover the world of premium services with EVO.
        </div>
        <nuxt-link to="/" class="evo__features__card__link">
          Learn more ->
        </nuxt-link>
        <div class="evo__features__card__image_premium__overlay">
          <img src="../../assets/images/home/crypto_card_premium.png" alt="Crypto Card Image" class="evo__features__card__image_premium">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
@import '../../assets/styles/mixins';

.evo__features {
  margin-top: 88px;

  &__card {
    width: 100%;
    &__header {
      font-size: 24px;
      line-height: 120%;
      font-weight: 500;
      @apply text-black;

      @media (max-width: 1535px) {
        font-size: 20px;
      }
      @media (max-width: 639px) {
        br {
          display: none;
        }
      }

      &_big {
        font-size: 40px;

        @media (max-width: 1535px) {
          font-size: 36px;
        }
        @media (max-width: 1023px) {
          font-size: 30px;
        }
        @media (max-width: 639px) {
          font-size: 20px;
        }
      }
      &_premium {
        font-weight: 500;
        font-size: 50px;
        line-height: 120%;
        color: #FFFFFF;
        @media (max-width: 1023px) {
          font-size: 30px;
        }
        @media (max-width: 639px) {
          font-size: 20px;
        }
      }
    }
    &__text {
      font-size: 20px;
      line-height: 120%;
      font-weight: 350;
      margin-top: 30px;
      color: #6D6E6E;

      @media (max-width: 1023px) {
        margin-top: 12px;
        font-size: 16px;
      }

      strong {
        font-weight: 500;
      }

      a {
        color: rgba(2, 94, 254, 1);
        white-space: nowrap;
      }

      &_big {
        font-weight: 400;
        font-size: 22px;
        line-height: 130%;

        @media (max-width: 1023px) {
          font-size: 18px;
        }
      }
      @media (max-width: 639px) {
        br {
          display: none;
        }
      }

      &_last {
        @media (max-width: 1535px) and (min-width: 1280px) {
          font-size: 20px;
          max-width: 80%;
          br {
            display: none;
          }
        }
      }

      &_premium {
        margin-top: 7px;
        font-weight: 400;
        font-size: 24px;
        line-height: 120%;
        color: #D2D2D2;

        @media (max-width: 1023px) {
          font-size: 18px;
        }
        @media (max-width: 639px) {
          font-size: 16px;
        }
      }
    }

    &__link {
      margin-top: 58px;
      background: #FFFFFF;
      border-radius: 20px;
      padding: 27px 38px 18px 39px;
      font-weight: 500;
      font-size: 22px;
      line-height: 11px;
      @apply font-inktrap;
      color: #1A1A1A;
      display: block;
      max-width: max-content;
      @media (max-width: 639px) {
        margin-left: auto;
        margin-right: auto;
        font-size: 16px;
        padding-top: 22px;
        padding-bottom: 14px;
      }
    }

    &__icon {
      width: auto;
      display: block;
      @media (min-width: 1024px) {
        margin-bottom: 30px;
        height: 50px;
      }
      @media (max-width: 1023px) {
        margin-bottom: 12px;
        height: 30px;
      }
    }

    &__image {
      &_overlay {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        left: auto;

        @media (min-width: 1024px) {
          @include exact-size(200px, 314px);
          right: 70px;
          top: 67px;
        }
        @media (max-width: 1535px) and (min-width: 1280px) {
          @include exact-size(200px * 0.9, 314px * 0.9);
          right: 35px;
        }
        @media (max-width: 1023px) {
          right: 0;
          top: 0;
        }
        @media (max-width: 767px) {
          display: none;
        }
      }
      &__inner {
        object-fit: contain;
        @media (min-width: 1024px) {
          @include exact-size(289px, 396px);
        }
        @media (max-width: 1535px) and (min-width: 1280px) {
          @include exact-size(289px * 0.9, 396px * 0.9);
        }

        @media (max-width: 1023px) {
          @include exact-size(289px * 0.7, 396px * 0.7);
        }
        @media (max-width: 767px) {
          display: none;
        }
      }
      &_premium {
        object-fit: contain;

        @media (min-width: 1536px) {
          @include exact-size(612px, 422px);
        }
        @media (max-width: 1535px) and (min-width: 1280px) {
          @include exact-size(612px * 0.9, 422px * 0.9);
        }
        @media (max-width: 1279px) and (min-width: 1024px) {
          @include exact-size(612px * 0.7, 422px * 0.7);
        }
        @media (max-width: 1023px) and (min-width: 768px) {
          @include exact-size(612px * 0.5, 422px * 0.5);
        }
        display: block;
        &__overlay {
          display: flex;
          align-items: center;
          justify-content: center;
          position: absolute;

          left: auto;
          right: 50px;
          @media (min-width: 1536px) {
            top: 57px;
            @include exact-size(510px, 320px);
          }
          @media (max-width: 1535px) and (min-width: 1280px) {
            @include exact-size(510px * 0.9, 320px * 0.9);
            top: 90px;
          }
          @media (max-width: 1279px) and (min-width: 1024px) {
            top: 160px;
            @include exact-size(510px * 0.7, 320px * 0.7);
          }
          @media (max-width: 1023px) and (min-width: 768px) {
            top: auto;
            bottom: -20px;
            @include exact-size(510px * 0.5, 320px * 0.5);
          }
          @media (max-width: 767px) {
            display: none;
          }
        }
      }
    }

    border-radius: 40px;
    position: relative;

    @media (min-width: 1280px) {
      padding: 39px 60px 39px 40px;
    }
    @media (max-width: 1279px) and (min-width: 1024px) {
      padding: 29px 20px 29px 30px;
    }
    @media (min-width: 1024px) {
      max-width: max-content;
    }
    @media (max-width: 1023px) {
      width: 100%;
      padding: 42px 40px;
    }

    &_dark {
      background: #0A0A0A;
      @media (min-width: 1024px) {
        padding: 60px 0 60px 40px;
      }
      @media (max-width: 1535px) {
        margin-bottom: 35px;
      }

      .evo__features__card {
        &__header {
          color: #FFFFFF;
        }
        &__text {
          color: #6D6E6E;
        }
        &__image {
          position: absolute;
          top: auto;
          left: auto;
          bottom: 0;
          right: 40px;
          @media (min-width: 1024px) {
            @include exact-size(380px, 276px);
          }
          @media (max-width: 1535px) and (min-width: 1280px) {
            @include exact-size(380px * 0.7, 276px * 0.7);
          }
          @media (max-width: 1023px) {
            @include exact-size(380px * 0.7, 276px * 0.7);
          }
          @media (max-width: 767px) {
            display: none;
          }
        }
      }
    }
    &_big {
      @media (min-width: 1280px) {
        max-width: 900px;
      }
      @media (max-width: 1279px) {
        max-width: 100%;
      }
      @media (max-width: 1535px) and (min-width: 1280px) {
        max-width: 750px;
      }
      .evo__features__card {
        &__text {
          margin-top: 19px;
          @media (max-width: 1023px) {
            margin-top: 12px;
          }
        }
      }
    }
    &:not(&_big):not(&_premium) {
      @media (max-width: 1023px) and (min-width: 768px) {
        max-width: calc(50% - 40px);
      }
      @media (max-width: 767px) {
        max-width: 100%;
        width: 100%;
      }
    }
    &_shadow {
      @media (min-width: 1536px) {
        margin-top: 70px;
      }
      @media (max-width: 1279px) and (min-width: 1024px) {
        margin-left: 35px;
      }
      @media (max-width: 1023px) and (min-width: 768px) {
        margin-left: auto;
        max-width: 390px !important;
      }
      @media (max-width: 767px) {
        margin-top: 35px;
      }
      box-shadow: 0 20px 90px rgba(0, 0, 0, 0.1);
    }
    &_border {
      @media (min-width: 1536px) {
        margin-left: 70px;
      }
      border: 2px solid #EAEBED;

    }
    &_last {
      @media (min-width: 1536px) {
        margin-top: 70px;
      }
      @media (max-width: 1279px) {
        margin-top: 35px;
      }
      @media (min-width: 1024px) {
        padding: 58px 60px 58px 40px;
      }
    }
    &_premium {
      max-width: 100%;
      width: 100%;
      background-color: #1A1A1A;
      background-image: url('../../assets/images/home/card_stars.png');
      background-repeat: no-repeat;
      background-position: 50%;
      background-size: 90%;
      padding: 45px 50px;
      margin-left: auto;
      margin-right: auto;
      margin-top: 260px;

      @media (max-width: 1023px) {
        margin-top: 120px;
        max-width: 728px;
      }
      @media (max-width: 767px) {
        margin-top: 70px;
        margin-left: 20px;
        max-width: calc(100% - 40px);
      }
      @media (max-width: 639px) {
        padding: 32px 40px;
        background-size: 100%;
      }
    }
  }

  &__cards {
    margin-top: 50px;
    &__wrapper {
      display: flex;
      flex-wrap: wrap;
      align-items: flex-start;
      justify-content: space-between;
      @media (max-width: 1023px) {
        margin-left: 20px;
        max-width: calc(100% - 40px);
      }
    }
  }

  &__header {
    font-weight: 400;
    font-size: 50px;
    line-height: 120%;
    @apply text-black font-inktrap;
    text-align: center;
    b {
      font-weight: 700;
    }
    @media (max-width: 1023px) {
      font-size: 40px;
    }
    @media (max-width: 639px) {
      font-size: 30px;
    }
  }
}
</style>