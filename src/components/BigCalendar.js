import React, {Component} from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import events from './events';
import 'react-big-calendar/lib/css/react-big-calendar.css';


const localizer = BigCalendar.momentLocalizer(moment)

const allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k]);

class Calendar extends Component {
  state = {
    view: "day",
    // date: new Date(2019, 5 , 23),
    width: '100%',
    events: this.props.bookings
  };

  // componentDidMount() {
  //   window.addEventListener("resize", () => {
  //     this.setState({
  //       width: window.innerWidth,
  //       height: window.innerHeight
  //     });
  //   });
  // }

  componentWillMount() {
    console.log(this.props)
    console.log(this.props.newBooking)
  }

  handleSelect = ({ start, end }) => {
    const title = window.prompt(`New Event name + ${this.props.newBooking.selServiceId}`)
    if (title)
     this.setState({
      events: [
       ...this.state.events,
       {
        start,
        end,
        title
       },
      ],
      newBooking: {
        start,
        end
      }
     })


     console.log(this.state.events)
     console.log(this.state.newBooking)
   }

   onSlotChange = (slotInfo) => {
    var startDate = moment(slotInfo.start).format("YYYY-MM-DD HH:MM");
    var endDate = moment(slotInfo.end).format("YYYY-MM-DD HH:MM");
    console.log('startTimeStartDate',startDate); 
    console.log('endTimEndDate', endDate);
   }

  render() {
    return (
      <div style={{ height: 600 }}>
        <button onClick={() => this.setState({ view: "day" })}>Day</button>
        <button onClick={() => this.setState({ view: "week" })}>week</button>
        <button onClick={() => this.setState({ view: "month" })}>month</button>
        <BigCalendar
        
          localizer={localizer}
          style={{ height: 500, width: this.state.width }}
          selectable
          toolbar={false}
          step={60}
          events={this.state.events}
          views={allViews}
          view={this.state.view}
          onView={() => {}}
          onNavigate={date => this.setState({ date })}
          onSelectSlot={this.handleSelect}
          // onSelectSlot={(slotInfo) => this.onSlotChange(slotInfo) }
          min={new Date(2019, 0, 1, 9, 0)}
          max={new Date(2019, 0, 1, 17, 0)} 
          date={new Date(2019, 5, 23)}
        />
      </div>
    );
  }
}

export default Calendar;

//  step={2}
