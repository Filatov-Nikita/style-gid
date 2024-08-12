import { ref } from 'vue';

export default function(swiper) {
  const currentInd = ref(0);
  const canNext = ref(false);
  const canPrev = ref(false);

  function onSliderChange() {
    updateInd();
    updateActions();
  }

  function updateInd() {
    if(swiper.value === null) return;
    currentInd.value = swiper.value.activeIndex;
  }

  function next() {
    if(swiper.value === null) return;
    swiper.value.slideNext();
    updateInd();
    updateActions();
  }

  function prev() {
    if(swiper.value === null) return;
    swiper.value.slidePrev();
    updateInd();
    updateActions();
  }

  function updateActions() {
    if(swiper.value === null) return;
    canNext.value = !swiper.value.isEnd;
    canPrev.value = !swiper.value.isBeginning;
  }

  return {
    currentInd,
    canPrev,
    canNext,
    next,
    prev,
    onSliderChange,
    updateInd,
    updateActions,
  }
}
