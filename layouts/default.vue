<template>
  <div class="page">
    <!-- alert -->
    <CautionAlert />
    <!-- header -->
    <TheHeader />
    <!-- inner -->
    <div class="page__inner">
      <slot />
    </div>
    <TheFooter />


    <!-- mobile start button -->
    <button type="button" class="header__menu__button header__menu__button_brand header__menu__button_fixed_mobile bg-brand">
      <span class="header__menu__text header__menu__text_brand text-white" v-html="t('header.start')" />
    </button>
  </div>
</template>


<script setup lang="ts">
import CautionAlert from '../components/global/CautionAlert.vue';
import TheHeader from '../components/global/TheHeader.vue';
import TheFooter from '../components/global/TheFooter.vue';

const { t } = useI18n();
</script>