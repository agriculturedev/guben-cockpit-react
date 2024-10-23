interface EventDateProps {
  startDate: Date | null;
  endDate: Date | null;
}

export const EventDate = ({ startDate, endDate }: EventDateProps) => {
  var validDate: string | null;
  if (startDate == null || endDate == null) {
    validDate = startDate?.formatDateTime(false) ?? endDate?.formatDateTime(false) ?? null;
  } else if (startDate.differenceInDays(endDate) === 0) {
    validDate = `${startDate.formatDateTime(false)} - ${endDate.formatTime(false)}`;
  } else {
    return (
      <>
        <div className={"grid grid-cols-3 gap-2"}>
          <div className={"col-span-1 flex justify-end"}>Startdatum</div>
          <div className={"col-span-2"}>{startDate.formatDateTime(false)}</div>
        </div>
        <div className={"grid grid-cols-3 gap-2"}>
          <div className={"col-span-1 flex justify-end"}>Enddatum</div>
          <div className={"col-span-2"}>{endDate.formatDateTime(false)}</div>
        </div>
      </>);
  }

  return validDate != null
    ? (<div className={"grid grid-cols-3 gap-2"}>
      <div className={"col-span-1 flex justify-end"}>Datum</div>
      <div className={"col-span-2"}>{validDate}</div>
    </div>)
    : null;
}