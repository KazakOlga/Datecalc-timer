import { formatError } from './common.js';
import { diffDates } from './diffdates.js';
import { diffToHTML } from './diffdates.js';

const dateCalcForm = document.getElementById('datecalc');
const dateCalcresult = document.getElementById('datecalc_result');

dateCalcForm.addEventListener('submit', hendleCalcDate);
function hendleCalcDate(event) {

    event.preventDefault();
    dateCalcresult.innerHTML = ('');
    let { firstDate, secondDate } = event.target.elements;
    firstDate = firstDate.value;
    secondDate = secondDate.value;
    if (firstDate && secondDate)
        dateCalcresult.innerHTML = diffToHTML(diffDates(firstDate, secondDate));
    else dateCalcresult.innerHTML = formatError('Для рассчета промежутка нужно заполнить оба поля');

    console.log('submit!')

}