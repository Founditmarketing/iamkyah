import React, { useState, useEffect } from 'react';
import { Calendar as CalendarIcon, Clock } from 'lucide-react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

interface UpdateItem {
  id: number;
  title: string;
  description: string;
  event_date: string;
  image_url: string;
  created_at: string;
}

export const Updates = () => {
  const [updates, setUpdates] = useState<UpdateItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  useEffect(() => {
    const fetchUpdates = async () => {
      try {
        const res = await fetch('/api/updates');
        if (res.ok) {
          const data = await res.json();
          setUpdates(data);
        }
      } catch (err) {
        console.error('Failed to fetch updates', err);
      } finally {
        setLoading(false);
      }
    };
    fetchUpdates();
  }, []);

  const eventDates = updates
    .filter(u => u.event_date)
    .map(u => new Date(u.event_date).toDateString());

  const tileClassName = ({ date, view }: any) => {
    if (view === 'month') {
      if (eventDates.includes(date.toDateString())) {
        return 'highlight-event';
      }
    }
    return null;
  };

  const selectedDateEvents = updates.filter(
    u => u.event_date && new Date(u.event_date).toDateString() === selectedDate.toDateString()
  );

  const upcomingEvents = updates
    .filter(u => u.event_date && new Date(u.event_date) >= new Date(new Date().setHours(0,0,0,0)))
    .sort((a, b) => new Date(a.event_date).getTime() - new Date(b.event_date).getTime());

  const generalUpdates = updates.filter(u => !u.event_date);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-black border-t-transparent"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Updates & Events</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Stay up to date with our latest news and upcoming events.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Event Calendar</h3>
              <style>{`
                .react-calendar { border: none; width: 100%; font-family: inherit; }
                .react-calendar__navigation button { font-weight: 600; font-size: 1.1rem; }
                .highlight-event { background-color: #fce7f3 !important; color: #db2777 !important; font-weight: bold; border-radius: 50%; }
                .react-calendar__tile--active { background: #000 !important; color: white !important; border-radius: 50%; }
                .react-calendar__tile { padding: 0.75em 0.5em; }
              `}</style>
              <Calendar 
                onChange={(val) => setSelectedDate(val as Date)} 
                value={selectedDate}
                tileClassName={tileClassName}
              />
            </div>

            {selectedDateEvents.length > 0 && (
              <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                  <CalendarIcon className="w-5 h-5 mr-2 text-[#db2777]" />
                  Events on {selectedDate.toLocaleDateString()}
                </h3>
                <div className="space-y-4">
                  {selectedDateEvents.map(event => (
                    <div key={event.id} className="border-l-4 border-[#db2777] pl-4">
                      <h4 className="font-semibold text-gray-900">{event.title}</h4>
                      <p className="text-sm text-gray-500 mt-1 flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {new Date(event.event_date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="lg:col-span-2 space-y-12">
            
            {upcomingEvents.length > 0 && (
              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-8 border-b pb-4">Upcoming Events</h2>
                <div className="space-y-6">
                  {upcomingEvents.map(event => (
                    <div key={event.id} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 flex flex-col md:flex-row group hover:shadow-md transition-shadow">
                      {event.image_url && (
                        <div className="md:w-1/3 h-48 md:h-auto relative overflow-hidden">
                          <img src={event.image_url} alt={event.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        </div>
                      )}
                      <div className="p-8 md:w-2/3 flex flex-col justify-center">
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-pink-50 text-pink-600 text-sm font-medium mb-4 w-fit">
                          <CalendarIcon className="w-4 h-4 mr-2" />
                          {new Date(event.event_date).toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' })}
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">{event.title}</h3>
                        <p className="text-gray-600 mb-4 whitespace-pre-line">{event.description}</p>
                        <p className="text-sm text-gray-500 font-medium flex items-center">
                          <Clock className="w-4 h-4 mr-2" />
                          {new Date(event.event_date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-8 border-b pb-4">Latest Updates</h2>
              {generalUpdates.length === 0 ? (
                <p className="text-gray-500">No updates at the moment.</p>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {generalUpdates.map(update => (
                    <div key={update.id} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 group hover:shadow-md transition-shadow flex flex-col">
                      {update.image_url && (
                        <div className="h-48 relative overflow-hidden">
                          <img src={update.image_url} alt={update.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        </div>
                      )}
                      <div className="p-6 flex-grow flex flex-col">
                        <p className="text-xs text-gray-400 mb-2 font-medium">{new Date(update.created_at).toLocaleDateString()}</p>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{update.title}</h3>
                        <p className="text-gray-600 whitespace-pre-line">{update.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </section>

          </div>

        </div>
      </div>
    </div>
  );
};
