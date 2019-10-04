// import moment from '../../node_modules/moment/moment';
var moment = require('moment');

export const datePicker = () => {

    const inputs = document.querySelectorAll('.input--introduction');
    const field = document.getElementById('datepicker');
    const field2 = document.getElementById('datepicker2');

    // var picker = new Pikaday({
    //     field: document.getElementById('datepicker'),
    //     i18n: {
    //         previousMonth : 'Previous Month',
    //         nextMonth     : 'Next Month',
    //         months        : ['Styczeń','Luty','Marzec','Kwiecień','Maj','Czerwiec','Lipiec','Sierpień','Wrzesień','Październik','Listopad','Grudzień'],
    //         weekdays      : ['Niedziela','Poniedziałek','Wtorek','Środa','Czwartek','Piątek','Sobota'],
    //         weekdaysShort : ['Niedz','Pon','Wt','Śr','Czw','Piąt','Sob']
    //         },
    //     keyboardInput: false,
    //     onSelect: function(date) {
    //         console.log(date);
    //         date = moment(date).format('DD / MM / YYYY');
    //         field.value = date
    //         // console.log(field.value = date);
    //     }
    //     });
    //
    // var picker2 = new Pikaday({
    //     field: document.getElementById('datepicker2'),
    //     i18n: {
    //         previousMonth : 'Previous Month',
    //         nextMonth     : 'Next Month',
    //         months        : ['Styczeń','Luty','Marzec','Kwiecień','Maj','Czerwiec','Lipiec','Sierpień','Wrzesień','Październik','Listopad','Grudzień'],
    //         weekdays      : ['Niedziela','Poniedziałek','Wtorek','Środa','Czwartek','Piątek','Sobota'],
    //         weekdaysShort : ['Niedz','Pon','Wt','Śr','Czw','Piąt','Sob']
    //     },
    //     keyboardInput: false,
    //     onSelect: function(date) {
    //         console.log(date);
    //         date = moment(date).format('DD / MM / YYYY');
    //         console.log(date, field);
    //         field.value = date;
    //
    //         // field.value = date;
    //     }
    // });
    //
    // const picker = [];
    //
    // inputs.forEach((input, i) => {
    //     input =
    //         picker[i] = new Pikaday({
    //             field: inputs[i],
    //             format: 'L',
    //             i18n: {
    //                 previousMonth : 'Previous Month',
    //                 nextMonth     : 'Next Month',
    //                 months        : ['Styczeń','Luty','Marzec','Kwiecień','Maj','Czerwiec','Lipiec','Sierpień','Wrzesień','Październik','Listopad','Grudzień'],
    //                 weekdays      : ['Niedziela','Poniedziałek','Wtorek','Środa','Czwartek','Piątek','Sobota'],
    //                 weekdaysShort : ['Niedz','Pon','Wt','Śr','Czw','Piąt','Sob']
    //             },onSelect: function(date) {
    //                 console.log(date);
    //                 date = moment(date).format('DD / MM / YYYY');
    //                 console.log(date);
    //                 inputs.forEach((el, index) => {
    //                     el.value = date;
    //                 })
    //                 // field.value = moment().format('MMMM Do YYYY, h:mm:ss a');
    //                 // console.log(this.getMoment().format('Do MMMM YYYY'));
    //             }
    //         });
    //     console.log(picker[i])
    //
    //     })
}

datePicker();

