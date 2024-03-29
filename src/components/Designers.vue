<template>
  <section class="designer-block" id="designers">
    <div class="wrapper">
      <div class="designer-block__wrap">
        <h2 class="h1 designer-block__title">
          Наши стилисты
        </h2>
        <PersonSlider :persons="designers" />
      </div>
    </div>
  </section>
</template>

<script setup>
  import PersonSlider from './PersonSlider.vue';

  const designers = [
    {
      photo: '/images/designers/1.jpg',
      name: 'Илюза Мурзагулова',
      label: 'Ваш 2гис по Планете, шопинг с деликатным отношением к бюджету и пользой к собственной внешности.',
      text: `
        Со мной вы:<br/>
        - соберете полноценные образы на все случаи жизни;<br/>
        - получите рекомендации как скорректировать фигуру, подчеркнуть достоинства внешности и выразить вашу индивидуальность через стиль.<br/>
      `,
    },
    {
      photo: '/images/designers/1.jpg',
      name: 'Илюза Мурзагулова 1',
      label: 'В1, шопинг с деликатным отношением к бюджету и пользой к собственной внешности.',
      text: `
        1
        - соберете полноценные образы на все случаи жизни;<br/>
        - получите рекомендации как скорректировать фигуру, подчеркнуть достоинства внешности и выразить вашу индивидуальность через стиль.<br/>
      `,
    }
  ];
</script>

<style scoped lang="scss">
  .designer-block {
    &__wrap {
      padding-top: 70px;
      padding-bottom: 70px;
    }

    &__title {
      margin-bottom: 40px;
    }
  }
</style>
