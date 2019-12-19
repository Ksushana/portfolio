(function () {

/* Скрипт для страницы каталога - двойной ползунок с ценами */
var form = document.querySelector('.form-choice');

if (form) {
  var AREA_PADDING = 9;
  var formDuration = document.querySelector('.form-choice__duration');
  var rangeBar = formDuration.querySelector('.range__bar');
  var leverMin = formDuration.querySelector('.range__lever-min');
  var leverMax = formDuration.querySelector('.range__lever-max');
  var scaleLength = formDuration.querySelector('.range__scale').offsetWidth - leverMin.offsetWidth/2 - leverMax.offsetWidth/2 + 2*AREA_PADDING;

  var formBudget = document.querySelector('.form-choice__budget');
  var rangeBarBudget = formBudget.querySelector('.range__bar');
  var leverMinBudget = formBudget.querySelector('.range__lever-min');
  var leverMaxBudget = formBudget.querySelector('.range__lever-max');
  var scaleLengthBudget = formBudget.querySelector('.range__scale').offsetWidth - leverMinBudget.offsetWidth/2 - leverMaxBudget.offsetWidth/2 + 2*AREA_PADDING;

  var range = {
    min: form.durationMin.min,
    max: form.durationMax.max,
    step: form.durationMin.step
  };

  var rangeBudget = {
    min: form.budgetMin.min,
    max: form.budgetMax.max,
    step: form.budgetMin.step
  };
  form.durationMax.min = range.min;
  form.durationMin.step = range.step;
  form.durationMax.max = range.max;

  form.budgetMin.step = rangeBudget.step;
  form.budgetMax.max = rangeBudget.max;

  //Задаем числовые маски с разрядами для инпутов
  var budgetMask1 = new IMask(form.budgetOutputMin, {
    mask: Number,
    scale: 0,
    signed: false,
    thousandsSeparator: ' ',
    min: rangeBudget.min,
    max: rangeBudget.max
  });

  var budgetMask2 = new IMask(form.budgetOutputMax, {
    mask: Number,
    scale: 0,
    signed: false,
    thousandsSeparator: ' ',
    min: rangeBudget.min,
    max: rangeBudget.max
  });

  var durationMask1 = new IMask(form.durationOutputMin, {
    mask: Number,
    scale: 0,
    signed: false,
    thousandsSeparator: '',
    min: range.min,
    max: range.max
  });

  var durationMask2 = new IMask(form.durationOutputMax, {
    mask: Number,
    scale: 0,
    signed: false,
    thousandsSeparator: '',
    min: range.min,
    max: range.max
  });

  var input = document.querySelectorAll('.range__output');
  for (var i = 0; input.length > i; i++) {
    input[i].style.width = ((input[i].value.length) * 8) + 'px';

    input[i].oninput = function() {
      this.style.width = ((this.value.length ) * 8) + 'px';
    };
  }

  var onValuesGetting = function (event) {
    var valueMin = form.durationMin.value;
    var valueMax = form.durationMax.value;

    if (event) {
      if (event.target.classList.contains('range__output--duration')){
        valueMin = form.durationOutputMin.value.replace(/\s/g, '');
        valueMax = form.durationOutputMax.value.replace(/\s/g, '');
      }
    }
    var leverMinPos = leverMin.offsetWidth / 2 - AREA_PADDING + scaleLength * (valueMin - range.min)/ (range.max - range.min) + 'px';
    var leverMaxPos = leverMax.offsetWidth / 2 - AREA_PADDING + scaleLength * (valueMax - range.min)/ (range.max - range.min) + 'px';

    durationMask1.el.value = (valueMin).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    durationMask1.value = (valueMin).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    durationMask2.el.value = (valueMax).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    durationMask2.value = (valueMax).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

    form.durationMin.max = valueMax;
    form.durationMax.min = valueMin;
    form.durationMin.value = valueMin;
    form.durationMax.value = valueMax;
    form.durationOutputMin.style.width = ((form.durationOutputMin.value.length) * 8) + 'px';
    form.durationOutputMax.style.width = ((form.durationOutputMax.value.length) * 8) + 'px';

    rangeBar.style.left = leverMinPos;
    rangeBar.style.right = 'calc(100% - ' + leverMaxPos + ')';
    leverMin.style.left = 'calc(' + leverMinPos + ' - ' + leverMin.offsetWidth / 2 + 'px)';
    leverMax.style.left = 'calc(' + leverMaxPos + ' - ' + leverMax.offsetWidth / 2 + 'px)';
  }

  var onValuesGettingBudget = function (event) {
    var valueMinBudget = form.budgetMin.value;
    var valueMaxBudget = form.budgetMax.value;
    if (event) {
      if (event.target.classList.contains('range__output--budget')){
        valueMinBudget = form.budgetOutputMin.value.replace(/\s/g, '');
        valueMaxBudget = form.budgetOutputMax.value.replace(/\s/g, '');
      }
    }
    var leverMinPosBudget = leverMinBudget.offsetWidth / 2 - AREA_PADDING + scaleLengthBudget * (valueMinBudget - rangeBudget.min) / (rangeBudget.max - rangeBudget.min)  + 'px';
    var leverMaxPosBudget = leverMaxBudget.offsetWidth / 2 - AREA_PADDING + scaleLengthBudget * (valueMaxBudget - rangeBudget.min)/ (rangeBudget.max - rangeBudget.min)  + 'px';

    budgetMask1.el.value = (valueMinBudget).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    budgetMask1.value = (valueMinBudget).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

    budgetMask2.el.value = (valueMaxBudget).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    budgetMask2.value = (valueMaxBudget).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

    form.budgetMin.max = valueMaxBudget;
    form.budgetMax.min = valueMinBudget;
    form.budgetMin.value = valueMinBudget;
    form.budgetMax.value = valueMaxBudget;
    form.budgetOutputMin.style.width = ((form.budgetOutputMin.value.length) * 8) + 'px';
    form.budgetOutputMax.style.width = ((form.budgetOutputMax.value.length) * 8) + 'px';

    rangeBarBudget.style.left = leverMinPosBudget;
    rangeBarBudget.style.right = 'calc(100% - ' + leverMaxPosBudget + ')';
    leverMinBudget.style.left = 'calc(' + leverMinPosBudget + ' - ' + leverMinBudget.offsetWidth / 2 + 'px)';
    leverMaxBudget.style.left = 'calc(' + leverMaxPosBudget + ' - ' + leverMaxBudget.offsetWidth / 2 + 'px)';
  }

  var onLeverGrabbing = function (event) {

    event.preventDefault();
    var isEventTouch = event.type === 'touchstart';
    var eventMove = isEventTouch ? 'touchmove' : 'mousemove';
    var eventEnd = isEventTouch ? 'touchend' : 'mouseup';
    var control = event.target === leverMin ? form.durationMin : form.durationMax;
    var moveStart = isEventTouch ? event.changedTouches[0].pageX : event.pageX;
    var moveEnd = moveStart;
    var initialValue = parseInt(control.value, 10);

    var getNewValue = function () {
      return Math.round((moveEnd - moveStart) * (range.max - range.min)/ (range.step * scaleLength)) * range.step + initialValue;
    }

    var onLeverMoving = function (event) {
      moveEnd = isEventTouch ? event.changedTouches[0].pageX : event.pageX;
      control.value = getNewValue();
      onValuesGetting(event);
    }

    var onLeverReleasing = function (event) {
      event.preventDefault();
      document.removeEventListener(eventMove, onLeverMoving);
      document.removeEventListener(eventEnd, onLeverReleasing);
    }

    document.addEventListener(eventMove, onLeverMoving);
    document.addEventListener(eventEnd, onLeverReleasing);
  }

  var onLeverGrabbingBudget = function (event) {
    event.preventDefault();
    var isEventTouch = event.type === 'touchstart';
    var eventMove = isEventTouch ? 'touchmove' : 'mousemove';
    var eventEnd = isEventTouch ? 'touchend' : 'mouseup';
    var control = event.target === leverMinBudget ? form.budgetMin : form.budgetMax;
    var moveStart = isEventTouch ? event.changedTouches[0].pageX : event.pageX;
    var moveEnd = moveStart;
    var initialValue = parseInt(control.value, 10);

    var getNewValueBudget = function () {
      return Math.round((moveEnd - moveStart) * (rangeBudget.max - rangeBudget.min)/ (rangeBudget.step * scaleLengthBudget)) * rangeBudget.step + initialValue;
    }

    var onLeverMovingBudget = function (event) {
      moveEnd = isEventTouch ? event.changedTouches[0].pageX : event.pageX;
      control.value = getNewValueBudget();
      onValuesGettingBudget(event);
    }

    var onLeverReleasingBudget = function (event) {
      event.preventDefault();
      document.removeEventListener(eventMove, onLeverMovingBudget);
      document.removeEventListener(eventEnd, onLeverReleasingBudget);
    }

    document.addEventListener(eventMove, onLeverMovingBudget);
    document.addEventListener(eventEnd, onLeverReleasingBudget);
  }

  formDuration.addEventListener('change', onValuesGetting);
  leverMin.addEventListener('mousedown', onLeverGrabbing);
  leverMax.addEventListener('mousedown', onLeverGrabbing);
  leverMin.addEventListener('touchstart', onLeverGrabbing);
  leverMax.addEventListener('touchstart', onLeverGrabbing);

  formBudget.addEventListener('change', onValuesGettingBudget);
  leverMinBudget.addEventListener('mousedown', onLeverGrabbingBudget);
  leverMaxBudget.addEventListener('mousedown', onLeverGrabbingBudget);
  leverMinBudget.addEventListener('touchstart', onLeverGrabbingBudget);
  leverMaxBudget.addEventListener('touchstart', onLeverGrabbingBudget);

  onValuesGetting();
  onValuesGettingBudget();
}
})();
