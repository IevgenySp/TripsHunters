/**
 * Created by isp on 12/8/17.
 */

import suggestedDataStorage from './suggestionsDataStorage';

export default class SuggestionsData {
    constructor(dataProvider) {
        this.dataProvider = dataProvider || 
            'http://suggestqueries.google.com/complete/search?output=firefox&hl=en&q=';
        this.data = [];
    }
    
    suggestedData(query) {
        let self = this;

        return fetch(self.dataProvider + query)
            .then(fetchedData => {
                return fetchedData.text();
            })
            .then(data => {
                this.data = JSON.parse(data)[1];
                
                return Promise.resolve();
            })
    }

    findMatch(string) {
        let stringArr = string.split(' ');
        let matches = [];

        suggestedDataStorage.dataSet1.data.forEach(item => {
            if (this._inArray(stringArr, item.musk)) {
                matches.push(item);
            }
        });
        
        return matches;
    }
    
    _inArray(arr, subArr) {
        let inArray = true;
        
        subArr.forEach(item => {
            if (arr.indexOf(item) === -1) {
                inArray = false;
            }
        });
        
        return inArray;
    }
}