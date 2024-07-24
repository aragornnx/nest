import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import trLocale from '@fullcalendar/core/locales/tr';
import './Calendar.css';

const holidayDates = [
  '04-23', // 23 Nisan
  '05-19', // 19 Mayıs
  '07-15', // 15 Temmuz
  '08-30', // 30 Ağustos
  '10-29'  // 29 Ekim
];

const Calendar = ({ events }) => {
  const renderCalendars = () => {
    const calendars = [];
    for (let i = 0; i < 12; i++) {
      calendars.push(
        <div key={i} className="calendar-container">
          <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            initialDate={`2024-${(i + 1).toString().padStart(2, '0')}-01`}
            events={events}
            height="100%" /* Tam yükseklik */
            locale={trLocale}
            headerToolbar={{
              left: '',
              center: 'title',
              right: ''
            }}
            showNonCurrentDates={false} /* Diğer ayın günlerini gösterme */
            fixedWeekCount={true} /* Sabit hafta sayısını aktif et */
            dayCellClassNames={({ date }) => {
              const monthDay = `${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
              return holidayDates.includes(monthDay) ? 'fc-holiday' : '';
            }}
          />
        </div>
      );
    }
    return calendars;
  };

  return <div className="calendars-grid">{renderCalendars()}</div>;
};

export default Calendar;