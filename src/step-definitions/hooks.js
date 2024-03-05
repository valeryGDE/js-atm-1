import { Before } from "@wdio/cucumber-framework";


Before({ name: 'console log' }, () => {
    return console.log('Before hook')
});