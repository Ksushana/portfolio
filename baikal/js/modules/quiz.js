(function () {
  var quiz = document.querySelector('.quiz');

  if (quiz) {
    var quizForm = quiz.querySelector('.quiz__form');
    var quizSteps = quiz.querySelectorAll('.quiz__step');
    var quizNextButton = quiz.querySelector('.quiz__button--next');
    var quizSubmitButton = quiz.querySelector('.quiz__button--submit');
    var quizPagination = quiz.querySelector('.quiz__pagination');
    var currentStepClass = 'quiz__step--current';
    var checkedStepClass = 'quiz__step--checked';

    window.onresize = function(){
      var curStep = quiz.querySelector('.quiz__step--current');
      quizForm.style.height = curStep.getBoundingClientRect().top - quizForm.getBoundingClientRect().top + curStep.getBoundingClientRect().height + "px";//quizForm.getBoundingClientRect().height + "px";
    };

    // Полифил evt.path
    var composedPath = function (el) {
      var path = [];
      while (el) {
        path.push(el);
        if (el.tagName === 'HTML') {
          path.push(document);
          path.push(window);
          return path;
        }
        el = el.parentElement;
      }
    };

    // Обновление активного класса радиобаттона
    var refreshRadioChecked = function (list, targetItem) {
      var items = list.querySelectorAll('li');
      for (var i = 0; i < items.length; i++) {
        if (items[i].classList.contains('js-checked')) {
          items[i].classList.remove('js-checked');
        }
        targetItem.classList.add('js-checked');
      }
    };

    var addInputsDisabled = function (block) {
      var inputs = block.querySelectorAll('input');
      for (var i = 0; i < inputs.length; i++) {
        if (!inputs[i].readOnly) {
          inputs[i].readOnly = true;
        }
      }
    };

    // Обновление активного пункта пагинации
    var refreshPagination = function () {
      var paginationItem = quizPagination.querySelectorAll('li');
      for (var i = 0; i < quizSteps.length; i++) {
        if (paginationItem[i].classList.contains('current')) {
          paginationItem[i].classList.remove('current');
        }
        if (quizSteps[i].classList.contains(currentStepClass)) {
          paginationItem[i].classList.add('current');
        }
      }
    };

    // Добавляение пагинации
    var showPagination = function () {
      for (var i = 0; i < quizSteps.length; i++) {
        var li = document.createElement('li');
        quizPagination.appendChild(li);
      }
      refreshPagination();
    };

    showPagination();

    // Переключение кнопок квиза далее/отправка формы
    var toggleButtons = function () {
      quizNextButton.classList.toggle('js-hidden');
      quizSubmitButton.classList.toggle('js-hidden');
    };

    // Проверка заполнения формы
    var isInputsChecked = function (currentStep) {
      var isInputs = function () {
        var inputs = currentStep.querySelector('input');
        if (inputs) {
          return true;
        }
      };
      if (isInputs()) {
        var inputs = currentStep.querySelectorAll('input');
        for (var i = 0; i < inputs.length; i++) {
          if (inputs[i].checked) {
            return true;
          }
        }
      } else {
        return true;
      }
    };

    // Проверка последнего шага квиза
    var isLastStep = function (nextStep, callback) {
      var lastStep = quizSteps[quizSteps.length - 1];
      if (lastStep === nextStep) {
        callback();
      }
    };

    // Проверка пройденного шага квиза
    var isCheckedStep = function (eventPath) {
      for (var i = 0; i < eventPath.length; i++) {
        if (eventPath[i].classList) {
          if (eventPath[i].classList.contains(checkedStepClass)) {
            return eventPath[i];
          }
        } else {
          return false;
        }
      }
    };

    // Функция возвращения к пройденному шагу
    var stepBackRefresh = function (checkedStep) {
      var step;
      for (var i = 0; i < quizSteps.length; i++) {
        step = quizSteps[i];
        if (step.classList.contains(currentStepClass)) {
          step.classList.remove(currentStepClass);
        } else if (step.classList.contains(checkedStepClass)) {
          step.classList.remove(checkedStepClass);
        }
      }
      checkedStep.classList.add(currentStepClass);
      refreshPagination();

      quizForm.style.height = checkedStep.getBoundingClientRect().top - quizForm.getBoundingClientRect().top +  checkedStep.getBoundingClientRect().height + "px" ;//+ quizForm.getBoundingClientRect().height + "px";

      for (i = 0; i < quizSteps.length; i++) {
        step = quizSteps[i];
        if (!step.classList.contains(currentStepClass)) {
          step.classList.add(checkedStepClass);
        } else {
          break;
        }
      }
    };

    // Функция обновления квиза при взаимодействии
    var refreshSteps = function (evt) {
      var target = evt.target;
      var path = evt.path || (evt.composedPath && evt.composedPath()) || composedPath(evt.target);
      var currentStep = quiz.querySelector('.quiz__step--current');
      if (target.classList.contains('quiz__button--next')) {
        var nextStep = currentStep.nextElementSibling;
        if (nextStep.classList.contains('quiz__step') && isInputsChecked(currentStep)) {
          nextStep.classList.add(currentStepClass);
          currentStep.classList.remove(currentStepClass);
          currentStep.classList.add(checkedStepClass);
          isLastStep(nextStep, toggleButtons);
          refreshPagination();
          quizForm.style.height = nextStep.getBoundingClientRect().top - quizForm.getBoundingClientRect().top + nextStep.getBoundingClientRect().height + "px";//quizForm.getBoundingClientRect().height + "px";
        }
      }
      if (isCheckedStep(path)) {
        var checkedStep = isCheckedStep(path);
        stepBackRefresh(checkedStep);
        isLastStep(currentStep, toggleButtons);
      }
    };

    // Обработчик клика
    quiz.addEventListener('click', function (evt) {
      refreshSteps(evt);
    });

    // Обработчик изменение полей формы
    quizForm.addEventListener('change', function (evt) {
      var target = evt.target;
      var parent = target.parentNode;
      var list = parent.parentNode;
      if (target.classList.contains('quiz__you-radio') || target.classList.contains('quiz__type-radio')) {
        refreshRadioChecked(list, parent);
      }
      if (target.classList.contains('quiz__checkbox') && !target.readOnly) {
        parent.classList.toggle('js-checked');
      }
    });
  }
})();
