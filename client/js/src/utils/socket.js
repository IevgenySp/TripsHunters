class Socket {
    constructor(url) {
        this.events = [];
        this.connection = new WebSocket(url);
    }

    set events(events) {
        this._events = events;
    }

    get events() {
        return this._events;
    }

    send(message) {
        this.connection.send(JSON.stringify(message));
    }

    on(event, callback, id) {

        this.connection.addEventListener(event, callback);

        this._events.push({
            id: id,
            name: event,
            callback: callback
        })
    }

    off(event, callback, id) {
        this._events = this._events.filter((evt, idx)=> {
            if (event && callback) {
                if (evt.name === event && evt.callback === callback) {
                    this.connection.removeEventListener(evt.name, evt.callback);
                }
                return !(evt.name === event && evt.callback === callback);
            }
            if (event && id) {
                if ((evt.name === event && evt.id === id)) {
                    this.connection.removeEventListener(evt.name, evt.callback);
                }
                return !(evt.name === event && evt.id === id);
            }

            if (evt.name === event) {
                this.connection.removeEventListener(evt.name, evt.callback);
            }

            return evt.name !== event;
        })
    }

    once(event, callback, id) {
        let _callback = function(...props) {
            this.off(event, _callback, id);
            return callback(...props);
        }.bind(this);

        this.connection.addEventListener(event, _callback);

        this._events.push({
            name: event,
            id: id,
            callback: _callback
        })
    }
}

export default Socket;