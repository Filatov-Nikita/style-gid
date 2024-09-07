import { show } from '@/http/comments';
import { ref, computed } from 'vue';

export default function useComment() {

  const data = ref(null);
  const loading = ref(false);

  async function load(commentId) {
    try {
      loading.value = true;
      const res = await show(commentId);
      data.value = res.data.results;
    } catch(e) {
      console.log(e);
    } finally {
      loading.value = false;
    }
  }

  const prevId = computed(() => {
    if(!data.value) return null;
    return data.value.prev_id;
  });

  const nextId = computed(() => {
    if(!data.value) return null;
    return data.value.next_id;
  });

  return {
    data,
    loading,
    prevId,
    nextId,
    load,
  };
};
