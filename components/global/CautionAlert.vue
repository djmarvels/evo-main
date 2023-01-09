<template>
  <div v-if="storage.getCaution" class="caution-alert lg:py-3 py-2 bg-black sticky w-full top-0 left-0">
    <div class="lg:container mx-auto flex h-full items-center">
      <!-- content -->
      <TickerContent class="caution-alert__content lg:pl-0 pl-1 scrollbar-hide text-white font-light lg:text-base text-sm leading-none" v-html="t('caution-alert')" />

      <!-- close -->
      <div class="caution-alert__close__parent ml-auto flex items-center -top-0.5 relative lg:px-0 px-2" @click="closeCaution">
        <button class="caution-alert__close hover:opacity-70">
          <img class="caution-alert__close__icon" src="@/assets/images/icons/close.svg" alt="Close">
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TickerContent from '../TickerContent.vue';

import { useCaution } from '../../uses/caution';
import { storePage } from "../../stores/page";

const { t } = useI18n({ useScope: 'local' })
const storage = storePage();
const closeCaution = () => {
  localStorage.setItem('closeCaution', 'true');
  storage.setCaution(false);
};
useCaution();
</script>


<style lang="scss">
.caution-alert {
  z-index: 1001;
  &__close {
    transition: all 0.2s 0s ease-in-out;
    &__parent {
      cursor: pointer;
    }
    &__icon {
      @media (max-width: 1024px) {
        width: 13px;
        height: 13px;
      }
    }
  }
  &__content {
    @media (max-width: 1024px) {
      max-width: calc(100% - 2rem);
      text-overflow: clip;
      overflow: auto hidden;
      white-space: nowrap;
    }
  }
}
</style>

<i18n lang="yaml">
en:
  caution-alert: '<b class="font-normal">CAUTION:</b> Passwords, PINs and OTPs should never be&nbsp;given to&nbsp;anyone, including the promised party or&nbsp;anyone claiming to&nbsp;be&nbsp;from EVO.'
uk:
  caution-alert: '<b class="font-normal">УВАГА:</b> Паролі, PIN-коди та&nbsp;OTP ніколи і&nbsp;нікому не&nbsp;повинні передаватися, в&nbsp;тому числі обіцяній стороні або будь-кому, хто стверджує, що&nbsp;є&nbsp;представником EVO.'
</i18n>
