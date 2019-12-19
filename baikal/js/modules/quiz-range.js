(function () {
  var quiz = document.querySelector('.quiz');

  if (quiz) {
    var MONTHS = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
    var rangeMonth = quiz.querySelector('.quiz__range--month');
    var rangeDays = quiz.querySelector('.quiz__range--days');
    var rangeBudget = quiz.querySelector('.quiz__range--budget');
    var monthRangeLabel = quiz.querySelector('.quiz__date-months');
    var monthLabels = quiz.querySelectorAll('.quiz__range-label--month');
    var dayLabels = quiz.querySelectorAll('.quiz__range-label--days');
    var dayRangeLabel = quiz.querySelector('.quiz__date-days');
    var budgetLabels = quiz.querySelectorAll('.quiz__range-label--budget span');

    var rangeData = {
      months : {
        values : [2, 9],
      },
      days: {
        min : 1,
        max : 30,
        values: [5, 15],
        step: 1,
      },
      budget: {
        min : parseInt(rangeBudget.dataset.min),
        max : parseInt(rangeBudget.dataset.max),
        values : [parseInt(rangeBudget.dataset.start), parseInt(rangeBudget.dataset.end)],
        step : 1000,
        orientation: 'horizontal',
        direction: 'ltr'
      }
    };

    // if (window.matchMedia("(max-width: 480px)").matches) {
    //   rangeData.budget.orientation = 'vertical';
    //   rangeData.budget.direction = 'rtl';
    // }

    // Форматирование дней слайдера
    var daysFormat = function (num) {
      var label;
      switch (num) {
        case 1:
        case 21:
        case 31:
          label = 'день';
          break;
        case 2:
        case 3:
        case 4:
        case 22:
        case 23:
        case 24:
          label = 'дня';
          break;
        default:
          label = 'дней';
          break;
      }
      return num + ' ' + label;
    };

    // Форматирование суммы бюджета слайдера
    var budgetFormat = wNumb({
      thousand: ' ',
      decimals: 0,
      suffix: ' руб.'
    });

    // Функция обновления тултипов слайдера месяца и информации о выбранных месяцах
    // var refreshMonths = function () {
    //   var handlers = rangeMonth.querySelectorAll('.noUi-handle');
    //   var handlerValueNow;
    //   var handlerValue;
    //   var monthsArray = [];
    //   for (var i = 0; i < handlers.length; i++) {
    //     handlerValueNow = handlers[i].getAttribute('aria-valuenow');
    //     handlerValue = parseFloat(handlerValueNow);
    //     handlers[i].dataset.month = MONTHS[handlerValue - 1];
    //     monthsArray.push(handlers[i].dataset.month);
    //   }
    //   dateMonthsElement.textContent = monthsArray[0] + ' - ' + monthsArray[1];
    // };

    var onMonthRangeUpdate = function (values, handleIndex) {
      var value = parseInt(values[handleIndex]);
      rangeData.months.values[handleIndex] = value;
      renderMonths();
    }

    var renderMonths = function () {
      for (var i = 0; i < rangeData.months.values.length; i++) {
        var value = rangeData.months.values[i];
        var monthName = MONTHS[value - 1];
        monthLabels[i].innerHTML = monthName;
      }
      var rangeText = monthLabels[0].innerHTML + ' - ' + monthLabels[1].innerHTML;
      monthRangeLabel.textContent = rangeText;
    }

    var onDaysRangeUpdate = function (values, handleIndex) {
      var value = parseInt(values[handleIndex]);
      rangeData.days.values[handleIndex] = value;
      renderDays();
    }
    // Функция обновления информации о выбранных днях
    // var refreshDays = function () {
    //   var handlers = rangeDays.querySelectorAll('.noUi-handle');
    //   var minHandlerValue = parseFloat(handlers[0].getAttribute('aria-valuenow'));
    //   var maxHandlerValue = parseFloat(handlers[1].getAttribute('aria-valuenow'));
    //   dateDaysElement.textContent = minHandlerValue + ' - ' + maxHandlerValue + ' дней';
    // };

    var renderDays = function () {
      for (var i = 0; i < rangeData.days.values.length; i++) {
        var value = rangeData.days.values[i];
        var label = daysFormat(value);
        dayLabels[i].innerHTML = label;
      }
      var rangeText = rangeData.days.values[0] + ' - ' + daysFormat(rangeData.days.values[1]);
      dayRangeLabel.textContent = rangeText;
    }

    var onBudgetRangeUpdate = function (values, handleIndex) {
      var value = parseInt(values[handleIndex]);
      rangeData.budget.values[handleIndex] = value;
      renderBudget()
    }

    var renderBudget = function () {
      for (var i = 0; i < rangeData.budget.values.length; i++) {
        var value = rangeData.budget.values[i];
        var label = budgetFormat.to(value);
        budgetLabels[i].innerHTML = label;
      }
    }

    // Создание слайдера выбора мясяца
    noUiSlider.create(rangeMonth, {
      start: rangeData.months.values,
      connect: true,
      step: 1,
      range: {
        'min': 1,
        'max': 12
      }
    });
    rangeMonth.noUiSlider.on('update', onMonthRangeUpdate);

    // Создание слайдера выбора кол-ва дней
    noUiSlider.create(rangeDays, {
      start: rangeData.days.values,
      connect: true,
      // tooltips: [daysFormat, daysFormat],
      step: rangeData.days.step,
      range: {
        'min': rangeData.days.min,
        'max': rangeData.days.max
      }
    });
    rangeDays.noUiSlider.on('update', onDaysRangeUpdate);

    // Создание слайдера бюджета
    noUiSlider.create(rangeBudget, {
      start: rangeData.budget.values,
      connect: true,
      orientation: rangeData.budget.orientation,
      direction: rangeData.budget.direction,
      // tooltips: [budgetFormat, budgetFormat],
      step: rangeData.budget.step,
      range: {
        'min': rangeData.budget.min,
        'max': rangeData.budget.max
      }
    });
    rangeBudget.noUiSlider.on('update', onBudgetRangeUpdate);

    // refreshMonths();
    // refreshDays();

    // rangeMonth.noUiSlider.on('slide', function () {
    //   refreshMonths();
    // });


    // rangeDays.noUiSlider.on('slide', function () {
    //   refreshDays();
    // });
  }
})();
