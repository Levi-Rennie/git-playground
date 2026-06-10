interface Guest {
  id: string;
  name: string;
}

interface Booking {
  guestId: Guest["id"];
  dates: {
    checkIn: Date;
    checkOut: Date;
  };
  notes?: string;
}

const describeBooking = (b: Booking): string => {
  const { guestId, dates, notes } = b;
  return `Booking for guest ${guestId} from ${dates.checkIn.toDateString()} to ${dates.checkOut.toDateString()}${notes ? ` — ${notes}` : ""}`;
};