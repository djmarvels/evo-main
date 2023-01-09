<template>
  <div class="evo__manage">
    <div class="container mx-auto evo__manage__inner">

      <div class="evo__manage__stats">
        <div class="evo__manage__stats__header">
          <div class="evo__manage__stats__card evo__manage__stats__card_dark">
            <div class="evo__manage__stats__card__header evo__manage__stats__card__header_dark">Income</div>
            <div class="evo__manage__stats__card__price evo__manage__stats__card__price_dark">58,022 USDT</div>
            <div class="evo__manage__stats__card__data evo__manage__stats__card__data_dark">
              <strong>+4,82%</strong> than last month
            </div>
          </div>
          <div class="evo__manage__stats__card">
            <div class="evo__manage__stats__card__header">Expense</div>
            <div class="evo__manage__stats__card__price">12,092 USDT</div>
            <div class="evo__manage__stats__card__data">
              <strong>-3,21%</strong> than last month
            </div>
          </div>
        </div>
        <img src="../../assets/images/home/annual_stats.png" alt="Annual Stats" class="evo__manage__stats__image" />
      </div>

      <div class="evo__manage__content">
        <div class="evo__manage__header">
          <b>EVO</b> Helps You Manage Your <br>Company’s Finance <b>More<br>Effectively</b>
        </div>
        <div class="evo__manage__text">
          Tracking your cash flow allows you to compare your income <br>to your monthly expenses and identify areas where <br>changes are needed.
        </div>
        <ul class="evo__manage__list">
          <li class="evo__manage__item">
            <img src="../../assets/images/home/stats_check.svg" alt="Check" class="evo__manage__item__icon">
            <span class="evo__manage__item__text">Simple Management System</span>
          </li>
          <li class="evo__manage__item">
            <img src="../../assets/images/home/stats_check.svg" alt="Check" class="evo__manage__item__icon">
            <span class="evo__manage__item__text">Smartly Usable</span>
          </li>
          <li class="evo__manage__item">
            <img src="../../assets/images/home/stats_check.svg" alt="Check" class="evo__manage__item__icon">
            <span class="evo__manage__item__text">Accounting Entry Methods</span>
          </li>
          <li class="evo__manage__item">
            <img src="../../assets/images/home/stats_check.svg" alt="Check" class="evo__manage__item__icon">
            <span class="evo__manage__item__text">Downloading data to <strong>.xlsx</strong> and <strong>.csv</strong></span>
          </li>
        </ul>

        <nuxt-link to="/" class="evo__manage__button">
          Learn more ->
        </nuxt-link>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
@import '../../assets/styles/mixins';

.evo__manage {
  margin-top: 190px;

  @media (max-width: 1279px) {
    margin-top: 100px;
  }

  &__inner {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;

    @media (max-width: 1279px) {
      flex-direction: column-reverse;
      max-width: calc(100% - 40px);
      margin-left: 20px;
      align-items: center;
    }
  }

  &__content {
    @media (min-width: 1280px) {
      margin-left: 80px;
      margin-top: 20px;
    }
    @media (max-width: 1279px) {
      margin-bottom: 40px;
    }
  }

  &__header {
    font-weight: 400;
    font-size: 50px;
    line-height: 120%;
    @apply font-inktrap;

    @media (max-width: 1535px) {
      font-size: 40px;
    }

    strong {
      font-weight: 700;
    }

    @media (max-width: 639px) {
      font-size: 28px;
      br {
        display: none;
      }
    }
  }

  &__text {
    margin-top: 22px;
    font-weight: 400;
    font-size: 24px;
    line-height: 125%;
    color: #6D6E6E;

    @media (max-width: 1535px) {
      font-size: 20px;
    }

    @media (max-width: 639px) {
      font-size: 16px;
      br {
        display: none;
      }
    }
  }

  &__list {
    margin-top: 35px;
  }

  &__item {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    &__text {
      font-weight: 400;
      font-size: 24px;
      line-height: 125%;
      color: #6D6E6E;

      @media (max-width: 639px) {
        font-size: 16px;
      }
    }
    &__icon {
      position: relative;

      @media (min-width: 640px) {
        @include exact-size(20px, 20px);
        top: -5px;
        margin-right: 20px;
      }

      @media (max-width: 639px) {
        margin-right: 12px;
        @include exact-size(12px, 12px);
        top: -3px;
      }
    }
  }

  &__button {
    background: #025EFE;
    border-radius: 20px;
    display: block;
    max-width: max-content;
    font-style: normal;
    font-weight: 500;
    @apply font-inktrap;
    color: #FFFFFF;
    line-height: 11px;
    padding: 27px 38px 18px 39px;

    @media (min-width: 640px) {
      font-size: 22px;
      margin-top: 35px;
    }

    @media (max-width: 639px) {
      margin-top: 18px;
      font-size: 16px;
      padding-top: 22px;
      padding-bottom: 14px;
    }
  }

  &__stats {
    width: 100%;
    max-width: 750px;

    @media (max-width: 1535px) {
      max-width: 600px;
    }

    &__header {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;

      @media (max-width: 639px) {
        flex-direction: column;
        justify-content: flex-start;
      }
    }
    &__card {
      width: 100%;
      max-width: 350px;
      padding: 30px 30px 36px;
      border-radius: 20px;

      @media (max-width: 1535px) {
        padding: 30px 22px;
      }

      &_dark {
        background: #0A0A0A;
        @media (max-width: 1535px) {
          margin-right: 20px;
        }
        @media (max-width: 639px) {
          margin-right: 0;
          margin-bottom: 20px;
        }
      }

      &:not(&_dark) {
        box-shadow: 0 20px 90px rgba(0, 0, 0, 0.1);
      }

      &__header {
        font-weight: 400;
        font-size: 24px;
        line-height: 120%;
        margin-bottom: 24px;
        @apply text-black;

        @media (max-width: 1535px) {
          font-size: 20px;
        }

        @media (max-width: 639px) {
          font-size: 18px;
          margin-bottom: 11px;
        }

        &_dark {
          color: #FFFFFF;
        }
      }

      &__price {
        @apply text-black;
        font-weight: 700;
        font-size: 40px;
        line-height: 120%;
        margin-bottom: 11px;

        @media (max-width: 1535px) {
          font-size: 36px;
        }

        @media (max-width: 639px) {
          font-size: 30px;
        }

        &_dark {
          color: #FFFFFF;
        }
      }

      &__data {
        font-weight: 400;
        font-size: 18px;
        line-height: 120%;
        color: rgba(109, 110, 110, 1);
        @media (max-width: 1535px) {
          font-size: 16px;
        }
        @media (max-width: 639px) {
          font-size: 14px;
        }
        strong {
          font-weight: 500;
          color: #FF370B;
        }
        &_dark {
          strong {
            color: #3DF43D;
          }
        }
      }
    }

    &__image {
      margin-top: 40px;
      background: #FFFFFF;
      box-shadow: 0 20px 90px rgba(0, 0, 0, 0.1);
      border-radius: 20px;
    }
  }
}
</style>