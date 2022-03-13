// 729. My Calendar I (12/27/2021)
// Runtime: 104 ms (73.33%) Memory: 22.34 MB (20.00%) 

typedef struct Event {
    int start;
    int end;
} Event;

typedef struct MyCalendar {
    Event *events;
    int size;
} MyCalendar;

MyCalendar* myCalendarCreate() {
    MyCalendar *calendar = malloc(sizeof(MyCalendar));
    calendar->events = malloc(sizeof(Event) * 1000);
    calendar->size = 0;
    return calendar;
}

bool myCalendarBook(MyCalendar* calendar, int start, int end) {
    // 把已經建立的事件都做一次碰撞測試
    for(int i = 0; i < calendar->size; i++) {
        Event event = calendar->events[i];
        // 如果新事件開始比舊事件開始早，但結束在舊事件開始後，一定會撞到
        if (start < event.start && end > event.start) {
            return false;
        }
        // 如果新事件開始在舊事件時間範圍內，也一定會撞到
        else if (start >= event.start && start < event.end) {
            return false;
        }
    }

    // 如果沒有撞到，就把新事件加入
    Event new_event = { start, end };
    calendar->events[calendar->size++] = new_event;
    return true;
}

void myCalendarFree(MyCalendar* calendar) {
    free(calendar->events);
    free(calendar);
}

/**
 * Your MyCalendar struct will be instantiated and called as such:
 * MyCalendar* obj = myCalendarCreate();
 * bool param_1 = myCalendarBook(obj, start, end);
 
 * myCalendarFree(obj);
*/