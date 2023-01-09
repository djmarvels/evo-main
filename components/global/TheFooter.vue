<template>
  <div class="footer">
    <div class="container mx-auto footer__menus">
      <ul v-for="items in tm('footer.menus')" class="footer__menu">
        <li v-for="item in items" class="footer__menu__item">
          <nuxt-link class="footer__menu__link" :to="rt(item.to)">
            {{ rt(item.label) }}
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
const { tm, rt } = useI18n();
</script>

<style lang="scss">
.footer {
  @media (min-width: 1024px) {
    padding: 50px 0;
    margin-top: 96px;
  }
  @media (max-width: 1023px) {
    margin-top: 48px;
    padding: 20px 0 70px;
  }

  @apply bg-white2;
  &__menus {
    @apply flex items-start justify-between;
    @media (max-width: 767px) {
      flex-wrap: wrap;
      padding: 0 20px;
    }
    @media (max-width: 575px) {
      flex-direction: column;
      align-items: center;
    }
  }
  &__menu {
    position: relative;
    @media (max-width: 767px) and (min-width: 576px) {
      width: 50%;
      &:not(&:nth-last-child(1)):not(&:nth-last-child(2)) {
        margin-bottom: 40px;
      }
    }
    @media (max-width: 767px) {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
    }
    @media (max-width: 575px) {
      &:not(&:last-child) {
        margin-bottom: 20px;
      }
    }

    &:not(&:first-child) {
      @media (min-width: 1024px) {
        padding-right: 68px;
      }
      &::after {
        @media (min-width: 768px) {
          content: '';
        }
        position: absolute;
        top: 0;
        height: 100%;
        width: 1px;
        right: auto;
        background: #B6B7B7;
        opacity: 0.2;
        @media (min-width: 1536px) {
          left: -50%;
        }
        @media (max-width: 1535px) and (min-width: 1280px) {
          left: -25%;
        }
        @media (max-width: 1279px) {
          left: -20%;
        }
      }
    }
    &__link {
      display: block;
      font-weight: 350;
      color: #B6B7B7;
      position: relative;
      max-width: max-content;
      transition: all 0.2s 0s ease-in-out;
      @media (min-width: 1280px) {
        font-size: 24px;
        line-height: 125%;
      }
      @media (max-width: 1279px) and (min-width: 1024px) {
        font-size: 18px;
        line-height: 120%;
      }
      @media (max-width: 1023px) {
        font-size: 16px;
        line-height: 110%;
      }
      &::after {
        content: '';
        display: block;
        width: 100%;
        top: auto;
        left: 0;
        height: 1px;
        @apply bg-black;
        bottom: 2px;
        position: absolute;
        opacity: 0;
        transition: all 0.2s 0s ease-in-out;
      }
      &:hover {
        @apply text-black;
        &::after {
          opacity: 1;
        }
      }
    }
    &__item {
      &:not(&:last-child) {
        @media (min-width: 1024px) {
          margin-bottom: 20px;
        }
        @media (max-width: 1023px) {
          margin-bottom: 12px;
        }
      }
      @media (max-width: 575px) {
        margin-bottom: 20px;
      }
    }
  }
}
</style>