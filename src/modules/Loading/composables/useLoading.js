import {
  ref,
  watch,
  provide,
} from 'vue';

const useLoading = () => {
  const counterLoadings = ref(0);

  const increaseLoadings = () => {
    counterLoadings.value += 1;
  };
  const decreaseLoadings = () => {
    if (counterLoadings.value > 0) {
      counterLoadings.value -= 1;
    }
  };

  watch(counterLoadings, (cur) => {
    if (cur) {
      $q.loading.show();
    } else {
      $q.loading.hide();
    }
  });

  provide('loading', {
    increaseLoadings,
    decreaseLoadings,
  });

};

export default useLoading;