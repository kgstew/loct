const Calendar = () => {
  return (
    <div
      id="events"
      className="mx-auto flex flex-col items-center py-4 bg-[#ffefd4]"
    >
      <h1 className="font-extrabold text-gray-900 mb-8">Events</h1>
      <div className="mx-auto">
        <div className="md:hidden">
          <iframe
            src="https://calendar.google.com/calendar/embed?height=300&wkst=1&ctz=America%2FDenver&showPrint=0&showTabs=0&showCalendars=0&showNav=0&mode=MONTH&src=Njc4Nzc2OGQzNThkNWY5ODRlNTNlNGI1MDFkNjRmMzc4NzRhYjkxYzY0YjU5MzU0NWQzYzVhYmQ3NjJiZWIxMUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%237986CB"
            className="border-0"
            width="384"
            height="300"
            scrolling="no"
          ></iframe>
        </div>
        <div className="md:block hidden mx-auto">
          <iframe
            src="https://calendar.google.com/calendar/embed?src=6787768d358d5f984e53e4b501d64f37874ab91c64b593545d3c5abd762beb11%40group.calendar.google.com&ctz=America%2FDenver"
            width="768"
            height="567"
            scrolling="no"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
