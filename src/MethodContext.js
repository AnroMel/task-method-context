import { EventEmitter } from './EventEmitter';

export const obj = {
    count: 0,
    handler() {
        this.count++;
    },
    boundHandler: null, // <-- здесь будем хранить привязанную функцию
    subscribe() {
        this.boundHandler = this.handler.bind(this);
        EventEmitter.on('click', this.boundHandler);
    },
    unsubscribe() {
        EventEmitter.off('click', this.boundHandler);
    },
};

export const obj1 = {
    first(...args) {
        return this.second(...args.reverse());
    },
    second() {
        // ничего не нужно писать
    },
};
