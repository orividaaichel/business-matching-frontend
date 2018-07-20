export function dateTime()
{
        var date = new Date;
        var year = date.getFullYear();
        var month = date.getMonth();
        var months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'Jully', 'August', 'September', 'October', 'November', 'December');
        var d = date.getDate();
        var day = date.getDay();
        var days = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
        var h = date.getHours();
        var ampm = h >= 12 ? 'PM' : 'AM';
        h = h % 12;
        h = h ? h : 12; // the hour '0' should be '12'
        
        if(h<10)
        {
                h = "0"+h;
        }
        var m = date.getMinutes();
        if(m<10)
        {
                m = "0"+m;
        }
        var s = date.getSeconds();
        if(s<10)
        {
                s = "0"+s;
        }
        var result = ''+days[day]+', '+months[month]+' '+d+', '+year+' '+h+':'+m+':'+s+' '+ampm;
        document.getElementById("datetime").innerHTML = result;
        // setTimeout('date_time("datetime");','1000');
        return true;
}