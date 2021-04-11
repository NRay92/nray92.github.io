//скрывает слишком длинные заголовки
export const cutLongText = () => {

  // универсальная функция - обрезка текста

  function cutLongTextFunc(symbols, parentBlock, textBlock) {
    //ограничение символов

    parentBlock.each(function () {
      // заголовок ориинальный
      var strOrig = $(this).find(textBlock).html();
      // заголовок без пробелов
      var strTitle = $.trim(strOrig);
      // длина заголовка
      var strTLength = strTitle.length;
      // console.log('оригин.длина ',strOrig.length,'оригин.строка',strOrig, '\nбез пробелов:', strTitle, '\nдлина без пробелов ', strTLength, '\n максимум', maxTileBlockTitle);

      // вычисляем разницу
      var tail = strTLength - symbols;

      if (tail > 0) {
        // уменьшаем строку на эту разницу с конца
        var strText = strTitle.substring(0, strTLength - tail);

        // добавляем троеточие
        $(this).find(textBlock).html(strText + '...');
        // console.log('\nхвост ', tail, '\n итог ', strText);
      }


    });
  }

  /**
   * параметры:
   * 1. количество символов, которое должно отображаться
   * 2. родительский блок, по которому бежим в цикле
   * 3. блок текста, который нужно обрезать
   * **/

  // заголовки новостей на главной
  cutLongTextFunc(75, $('.newscard'), '.newscard__title');
  cutLongTextFunc(92, $('.newscard'), '.newscard__description');

  // описание проектов на главной
  cutLongTextFunc(84, $('.products__slide'), '.card__description');
};