import { reactive, onMounted } from 'vue';

export const useScroll = () => {
  const scrollData = reactive({
    showBottomNav: true
  });

  onMounted(() => {
    window.addEventListener('scroll', checkScreen);
    checkScreen();
  });

  const checkScreen = () => {
    const scroll = document.body.offsetHeight - window.innerHeight - 50;
    if (window.scrollY >= scroll) {
      scrollData.showBottomNav = false;
      return;
    }
    scrollData.showBottomNav = true;
  };

  return scrollData;
};
