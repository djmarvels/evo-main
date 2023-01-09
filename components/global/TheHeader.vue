<template>
  <div :class="[
      'header w-full sticky top-0 left-0',
      { 'header_caution': page.getCaution }
  ]">
    <div class="header__inner container mx-auto flex">
      <img class="header__logo" src="../../assets/images/logo.svg" alt="Brand">

      <div class="header__menu__parent flex w-full scrollbar-hide">
        <ul class="header__menu flex">
          <li
              v-for="item in tm('header.menu')"
              :key="rt(item.key)"
              class="header__menu__item relative"
          >
            <template v-if="item.children">
              <button :data-dropdown-toggle="rt(item.key)" :id="`${rt(item.key)}-button`" aria-hidden="true" type="button" class="header__menu__button header__menu__button_icon">
                <span class="header__menu__text" v-html="rt(item.label)" />
                <img  src="../../assets/images/icons/chevron-down.svg"  alt="Down" class="header__menu__button__icon">
              </button>
              <div :id="rt(item.key)" class="hidden header__menu__dropdown">
                <ul :aria-labelledby="`${rt(item.key)}-button`">
                  <li v-for="children in item.children">
                    <Nuxt-Link  :to="rt(children.to)" class="block header__menu__children">
                      <span class="header__menu__text header__menu__text_children" v-html="rt(children.label)" />
                    </Nuxt-Link>
                  </li>
                </ul>
              </div>
            </template>
            <Nuxt-Link :to="rt(item.to)" v-else>
              <span class="header__menu__text" v-html="rt(item.label)" />
            </Nuxt-Link>
          </li>

          <li class="header__menu__item header__locale relative">
            <button v-if="currentLocale" id="locales-button" data-dropdown-toggle="locales" type="button" class="header__menu__button header__menu__button_icon">
              <span class="header__menu__text header__menu__text_locale" v-html="currentLocale.name" />
              <span class="header__menu__text header__menu__text_locale__mobile" v-html="currentLocale.flag" />
              <img src="../../assets/images/icons/chevron-down.svg" alt="Down" class="header__menu__button__icon header__menu__button__icon_locale">
            </button>
            <div v-if="availableLocales.length > 0" id="locales" class="hidden header__menu__dropdown header__locale__dropdown">
              <ul aria-labelledby="locales-button">
                <li v-for="item in availableLocales">
                  <button type="button" @click.prevent.stop="setLocale(item.code)">
                    <span class="header__menu__text" v-html="item.name" />
                  </button>
                </li>
              </ul>
            </div>
          </li>
        </ul>

        <div class="header__extra">
          <Nuxt-Link class="header__menu__item header__menu__item_extra" to="/">
            <span class="header__menu__text header__menu__text_extra" v-html="t('header.login')" />
          </Nuxt-Link>
          <button type="button" class="header__menu__button header__menu__button_brand bg-brand">
            <span class="header__menu__text header__menu__text_brand text-white" v-html="t('header.start')" />
          </button>
        </div>
      </div>


    </div>

  </div>
</template>

<script setup lang="ts">

const { tm, rt, t, locales, locale, setLocale } = useI18n();

const currentLocale = computed(() => Array(...locales.value).find((item: any) => Boolean(String(item.code) === locale.value)));
const availableLocales = computed(() => Array(...locales.value).filter((item: any) => !(String(item.code) === locale.value)));

import { storePage } from '../../stores/page';
const page = storePage();


</script>

<style lang="scss">
@import '../../assets/styles/mixins';

.header {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(7.5px);
  transition: all 0.2s 0s ease-in-out;
  z-index: 999;

  &_caution {
    top: 51px;
    @media (max-width: 1023px) {
      top: 32px;
    }
  }

  &__inner {
    @media (max-width: 1023px) and (min-width: 768px) {
      @apply py-5;
    }
    @media (max-width: 767px) {
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
    }
  }

  &__logo {
    display: block;

    @media (min-width: 1600px) {
      margin: 30px 154px 0 0;
    }
    @media (max-width: 1599px) {
      margin: 30px 20px 0 0;
    }
    @media (max-width: 1023px) {
      margin-top: -4px;
    }
    @media (min-width: 768px) {
      @include exact-size(90px, 32px);
    }
    @media (max-width: 767px) {
      margin: 0;
      box-sizing: content-box;
      padding: 8px 0;
      @include exact-size(90px * 0.8, 32px * 0.8); // scale 80%
    }
  }
  &__extra {
    display: flex;
    align-items: center;
    @media (min-width: 1024px) {
      margin: 20px 0 20px auto;
    }
    @media (max-width: 1279px) {
      margin-left: 20px;
    }
    @media (max-width: 1023px) {
      margin-left: 0;
      margin-top: 0;
    }
    @media (max-width: 767px) {
      margin-left: 0;
    }
  }
  &__menu {
    @media (min-width: 1024px) {
      margin-top: 40px;
    }
    @media (max-width: 1599px) {
      margin-left: auto;
      margin-right: auto;
    }
    @media (max-width: 1023px) {
      align-items: center;
      margin-top: 4px;
    }
    @media (max-width: 767px) {
      margin-left: 0;
      margin-right: 0;
      align-items: flex-start;
    }
    &__parent {
      @media (max-width: 767px) {
        max-width: 100%;
        overflow: auto visible;
        align-items: flex-start;
      }
    }
    &__item {
      @media (max-width: 767px) {
        padding: 9px 12px;
      }
      &:not(&:last-child):not(&_extra) {
        @media (min-width: 1600px) {
          margin-right: 40px;
        }
        @media (max-width: 1599px) and (min-width: 768px) {
          &:not(.header__menu__button) {
            margin-right: 20px;
          }
        }
      }
    }
    &__text {
      @apply text-black font-inktrap block;
      font-weight: 400;
      font-style: normal;
      line-height: 1.2;
      opacity: 0.8;
      white-space: nowrap;
      @media (min-width: 1280px) {
        font-size: 18px;
      }
      @media (max-width: 1279px) {
        font-size: 16px;
      }
      &_locale {
        @media (max-width: 1023px) {
          display: none;
        }
      }
      &_locale__mobile {
        @media (min-width: 1024px) {
          display: none!important;
        }
        @media (max-width: 1023px) {
          display: block;
          position: relative;
          top: 1px;
        }
      }
      &_children {
        white-space: nowrap;
      }
      &_brand {
        @apply text-white;
        @media (min-width: 1280px) {
          font-size: 22px;
          line-height: 11px;
          padding: 27px 49px 18px 50px;
        }
        @media (max-width: 1279px) {
          font-size: 18px;
          line-height: 11px;
          padding: 23px 39px 18px 40px;
        }
      }
      &_extra {
        font-size: 20px;
        line-height: 10px;
        @media (max-width: 1279px) {
          font-size: 18px;
        }
        @media (max-width: 1023px) {
          font-size: 16px;
          line-height: 1.2;
        }
        top: 2px;
        @apply relative;
      }
      &_brand, &_extra, &:hover {
        opacity: 1;
      }
    }
    &__children {
      &:not(&:last-child) {
        @media (min-width: 1280px) {
          margin-bottom: 0.5rem;
        }
        @media (max-width: 1279px) {
          margin-bottom: 0.25rem;
        }
      }
    }
    &__dropdown {
      @media (max-width: 767px) {
        position: relative !important;
        padding-bottom: 30px;
        top: -24px!important;
      }
    }
    &__button {
      &_icon {
        @apply flex items-center;
      }

      &__icon {
        @apply md:ml-1 relative;
        transform-origin: 50%;
        transition: all 0.2s 0s ease-in-out;

        @media (min-width: 1280px) {
          @include exact-size(8px, 7px);
          top: -2px;
        }
        @media (max-width: 1279px) {
          @include exact-size(6px, 5px);
          top: -3px;
        }
        @media (max-width: 1023px) {
          top: -4px;
        }
        @media (max-width: 767px) {
          margin-left: 4px;
          top: -3px;
          &_locale {
            top: -4px;
          }
        }
      }

      &[aria-expanded="true"] > &__icon {
        transform: rotate(180deg);
      }

      &_brand {
        border-radius: 20px;
        @media (min-width: 1600px) {
          margin-left: 40px;
        }
        @media (max-width: 1599px) {
          margin-left: 20px;
        }
        @media (max-width: 1023px) {
          display: none;
        }
      }

      &_fixed_mobile {
        @media (min-width: 1024px) {
          display: none;
        }
        @media (max-width: 1023px) {
          display: block;
          position: fixed;
          top: auto;
          bottom: 20px;
          right: 20px;
          z-index: 1001;
          max-width: calc(100% - 40px);
          width: 100%;
          left: 0;
        }
      }
    }
  }
}
</style>