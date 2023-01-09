<template>
  <div class="evo__faq">
    <div class="container mx-auto evo__faq__inner">
      <div class="evo__faq__header">
        <b>Frequently</b> Asked Questions
      </div>
      <div class="evo__faq__subheader">
        You can contact our technical support via <a href="javascript:;">Telegram -></a>, or by contacting E-mail: <a href="javascript:;" class="mail">support@evo.finance</a>
      </div>


      <div class="evo__faq__tabs">
        <ul class="evo__faq__tabs__list scrollbar-hide" data-tabs-toggle="#faq_content">
          <li class="evo__faq__tabs__list__item" v-for="item in tm('faq')" role="presentation">
            <button :id="`${rt(item.key)}-tab`" :data-tabs-target="`#${rt(item.key)}`" :aria-controls="rt(item.key)" aria-selected="false" role="tab" type="button" class="evo__faq__tabs__list__button">
              {{ rt(item.label) }}
            </button>
          </li>
        </ul>
      </div>
      <div id="faq_content" class="evo__faq__tabs__content">
        <div class="hidden" v-for="item in tm('faq')" :id="rt(item.key)" role="tabpanel" :aria-labelledby="`${rt(item.key)}-tab`">
          <div :id="`accordion-${rt(item.key)}`" data-accordion="open" class="evo__faq__accordion">
            <div class="evo__faq__accordion__item" v-for="(content, index) in item.items">
              <h2 :id="`accordion-${rt(item.key)}-header-${index + 1}`" class="evo__faq__accordion__header">
                <button class="evo__faq__accordion__header__button" type="button" :data-accordion-target="`#accordion-${rt(item.key)}-body-${index + 1}`" aria-expanded="false" :aria-controls="`accordion-${rt(item.key)}-body-${index + 1}`">
                  <span class="evo__faq__accordion__header__text" v-html="rt(content.header)" />
                  <img src="../../assets/images/home/faq_open.svg" alt="Open" class="evo__faq__accordion__header__open">
                  <img src="../../assets/images/home/faq_close.svg" alt="Close" class="evo__faq__accordion__header__close">
                </button>
              </h2>
              <div :id="`accordion-${rt(item.key)}-body-${index + 1}`" class="hidden evo__faq__accordion__content" :aria-labelledby="`accordion-${rt(item.key)}-heading-${index + 1}`">
                <p class="evo__faq__accordion__content__text">
                  {{ rt(content.text) }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { tm, rt } = useI18n();

</script>

<style lang="scss" scoped>
@import '../../assets/styles/mixins';

.evo__faq {
  margin-top: 196px;

  &__accordion {
    display: flex;
    align-items: flex-start;
    justify-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;
    @media (max-width: 767px) {
      max-width: calc(100% - 40px);
      margin-left: 20px;
    }
    &__item {
      flex-basis: calc(50% - 40px);
      @media (max-width: 767px) {
        flex-basis: 100%;
        &:not(&:last-child) {
          margin-bottom: 10px;
        }
      }
    }
    &__header {
      border-bottom: 1px solid #B6B7B7;
      padding: 30px 46px 27px 30px;

      @media (max-width: 1279px) {
        padding: 16px 20px 20px 20px;
      }
      @media (max-width: 1023px) {
        padding-bottom: 12px;
      }
      @media (max-width: 767px) {
        padding-left: 0;
        padding-right: 0;
      }

      &__button {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        &[aria-expanded="false"] > .evo__faq__accordion__header__close {
          display: none;
        }
        &[aria-expanded="true"] > .evo__faq__accordion__header__open {
          display: none;
        }
      }

      &__open, &__close {
        @media (min-width: 1280px) {
          @include exact-size(28px, 28px);
        }
        @media (max-width: 1279px) {
          @include exact-size(20px, 20px);
        }
        @media (max-width: 1023px) {
          @include exact-size(12px, 12px);
          position: relative;
          top: -4px;
        }
        @media (max-width: 767px) {
          margin-left: 12px;
        }
      }

      &__text {
        font-size: 26px;
        line-height: 125%;
        font-weight: 400;
        color: #1A1A1A;

        @media (max-width: 1279px) {
          font-size: 22px;
        }

        @media (max-width: 1023px) {
          font-size: 19px;
        }

        b {
          font-weight: 700;
        }

        @media (max-width: 767px) {
          font-size: 18px;
        }
      }
    }

    &__content {
      padding: 20px 30px 56px;

      @media (max-width: 1279px) {
        padding: 16px 20px 20px 20px;
      }
      @media (max-width: 767px) {
        padding-left: 0;
        padding-right: 0;
      }

      &__text {
        font-weight: 400;
        font-size: 22px;
        line-height: 125%;
        color: rgba(109, 110, 110, 1);

        @media (max-width: 1279px) {
          font-size: 16px;
        }
      }
    }
  }


  &__tabs {
    margin-top: 40px;

    @media (max-width: 767px) {
      margin-top: 30px;
    }

    &__content {
      margin-top: 85px;
      @media (max-width: 1279px) {
        margin-top: 40px;
      }
      @media (max-width: 767px) {
        margin-top: 20px;
      }
    }

    &__list {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;

      @media (max-width: 767px) {
        width: 100%;
        overflow: auto hidden;
        padding: 0 20px 10px;

        &__item {
          justify-content: flex-start;
          &:not(&:last-child) {
            margin-right: 12px;
          }
        }
      }

      &__button {
        background: #FFFFFF;
        border: 1px solid rgba(109, 110, 110, 0.5);
        border-radius: 40px;
        padding: 22px 62px 13px 61px;
        font-weight: 400;
        font-size: 20px;
        line-height: 125%;
        text-align: center;
        color: #6D6E6E;
        transition: all 0.2s 0s ease-in-out;

        @media (max-width: 1279px) {
          font-size: 16px;
          white-space: nowrap;
          padding: 19px 42px 13px 41px;
        }
        @media (max-width: 1023px) {
          padding: 12px 18px 6px 18px;
          font-size: 14px;
        }

        &[aria-selected="true"], &:hover {
          border-color: #1A1A1A;
          color: #1A1A1A;
        }
      }
    }
  }

  &__header {
    @apply text-black font-inktrap;
    text-align: center;
    font-size: 50px;
    line-height: 120%;
    font-weight: 400;
    b {
      font-weight: 700;
    }
    @media (max-width: 1535px) {
      font-size: 40px;
    }
    @media (max-width: 639px) {
      font-size: 28px;
      max-width: 80%;
      margin-left: auto;
      margin-right: auto;
    }
  }

  &__subheader {
    margin-top: 10px;
    font-weight: 400;
    font-size: 24px;
    line-height: 125%;
    text-align: center;
    color: #6D6E6E;
    width: 100%;
    max-width: 640px;
    margin-left: auto;
    margin-right: auto;

    @media (max-width: 1535px) {
      font-size: 18px;
      max-width: 80%;
    }
    @media (max-width: 639px) {
      font-size: 14px;
    }

    a {
      &:not(&.mail) {
        color: rgba(22, 139, 218, 1);
      }
      &.mail {
        color: rgba(26, 26, 26, 1);
      }
    }
  }
}
</style>