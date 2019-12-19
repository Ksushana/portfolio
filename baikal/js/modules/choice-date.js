(function () {
  var startDateInput = document.querySelector('.start__input[name=date-start]');
  var endDateInput = document.querySelector('.start__input[name=date-end]');

  if (startDateInput && endDateInput) {

    $(endDateInput).datepicker({
      minDate: new Date()
    })

    $(startDateInput).datepicker({
      minDate: new Date(),
      startDate: new Date(),

      onSelect: function (formattedDate, date, inst) {
        $(endDateInput).datepicker().data('datepicker').update('minDate', date);
        var selectedEndDate = $(endDateInput).datepicker().data('datepicker').selectedDates[0];
        if (selectedEndDate && selectedEndDate < date) {
          $(endDateInput).datepicker().data('datepicker').selectDate(date);
        }
      }
    })
  }

})();
