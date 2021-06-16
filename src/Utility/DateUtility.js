export const DateUtility = {
    getDate: function() {

        let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        let date = new Date();
        let dayName = days[date.getDay()];
    
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
            ];
        const d = new Date();
        let month = monthNames[d.getMonth()]
        
        let today = new Date();
        let dayNum =  today.getDate();

        let currDate = dayName + ', ' + dayNum + ' ' + month
        return currDate

    }
}

export default DateUtility