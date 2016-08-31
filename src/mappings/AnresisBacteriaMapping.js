(function() {
    'use strict';


    const Mapping = require('./Mapping');



    module.exports = class AnresisSexMapping extends Mapping {


        constructor() {
            super();


            this.type = 'bacteria';

            this.map.set('f', 'female');
            this.map.set('m', 'male');
        }
    };
})();