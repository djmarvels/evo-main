<template>
  <p ref="content" />
</template>

<script setup lang="ts">
const content = ref(null);
const timer: any = ref(null);

const props = defineProps({
  duration: {
    type: Number,
    default: 3000,
    required: false,
  },
  responsiveWidth: {
    type: Number,
    default: 1024,
    required: false,
  },
  timeout: {
    type: Number,
    default: 1500,
    required: false,
  }
});


onMounted(async () => {
  window.addEventListener('resize', contentScroll);

  await nextTick();
  timer.value = setTimeout(() => contentScroll(), props.timeout);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', contentScroll);
  clearAnimateTimer();
});


const animateTimer = (element: any, type = 'forward') => {
  clearAnimateTimer();
  if (!(element && typeof element.scrollWidth === 'number' && typeof element.clientWidth === 'number' && typeof element.scrollLeft === 'number')) return;

  const position = Number(element.scrollLeft);
  const distance = Math.ceil(element.scrollWidth - element.clientWidth);
  const step = Math.ceil(distance / (props.duration / 10));
  if (step === 0) return clearAnimateTimer();

  switch (type) {
    case 'forward': {
      if (Number(distance - position - step) > 1) {
        element.scrollTo({ left: (position + step), top: 0, behavior: 'smooth' });
        timer.value = setTimeout(() => requestAnimationFrame(() => animateTimer(element, type)), 25);
      } else {
        element.scrollLeft = distance;
        timer.value = setTimeout(() => requestAnimationFrame(() => animateTimer(element, 'backward')),  props.timeout);
      }
      break;
    }
    case 'backward': {
      if (position > step) {
        element.scrollTo({ left: (position - step), top: 0, behavior: 'smooth' });
        timer.value = setTimeout(() => requestAnimationFrame(() => animateTimer(element, type)), 25);
      } else {
        element.scrollLeft = 0;
        timer.value = setTimeout(() => requestAnimationFrame(() => animateTimer(element, 'forward')),  props.timeout);
      }
      break;
    }
    default: break;
  }
};

const clearAnimateTimer = () => {
  if (timer.value) {
    clearTimeout(timer.value);
    timer.value = null;
  }
};

const contentScroll = () => {
  clearAnimateTimer();

  if (!window) return;

  const width = Number(window.innerWidth);
  if (width <= props.responsiveWidth) {
    const element = content.value;
    if (element && isOverflow(element)) animateTimer(element);
  }
};


const isOverflow = (element: HTMLElement) => {
  if (!(element.style && (element.clientWidth && element.scrollWidth))) return false;

  const styleOverflow = String(element.style.overflow);
  if (!styleOverflow.length || styleOverflow === 'visible') element.style.overflow = 'hidden';

  const isOverflowing = Boolean(element.clientWidth < element.scrollWidth);
  element.style.overflow = styleOverflow;

  return isOverflowing;
};

defineExpose({ content });
</script>

<style scoped>

</style>