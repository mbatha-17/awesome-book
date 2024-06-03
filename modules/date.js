import { DateTime } from 'luxon';

export function getCurrentDateTime() {
    return DateTime.now().toLocaleString(DateTime.DATETIME_MED);
}
