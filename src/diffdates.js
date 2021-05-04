import { DateTime } from 'luxon';

export function diffDates(firstDate, secondDate) {
    firstDate = DateTime.fromISO(firstDate);
    secondDate = DateTime.fromISO(secondDate);

    if (firstDate > secondDate)
        [firstDate, secondDate] = [secondDate, firstDate];

    return secondDate.diff(firstDate, ['years', 'months', 'days']).toObject();
}

export const diffToHTML = diff => `
<span>
Лет: ${diff.years},
Месяцев: ${diff.months},
Дней: ${diff.days}
</span>
`