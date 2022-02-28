const cveAlgorithm = {

    // are vulnerabilities getting more severe over time

    // I want to create an algorithm to analyze the entire JSON and return trends based on:

    // The targeted system type (Microsoft, mac, linux) 
        // ToDo: get all cve objects that contain "Microsoft"
        searchCve(props = {}, key, value) {
            const result = [];
            const recursiveSearch = (props = {}) => {
            
                    if (!props || typeof props !== 'object') { return;
                };
                    if (props[key] === value){
                    result.push(props);
                };
        
                Object.keys(props).forEach(function (k) {
                    recursiveSearch(props[k]);
                });
            }
        
            recursiveSearch(props);
        
            return result;
        
    },
        //ToDo: push these to a new array
        
        //ToDo: iterate over this array for cronology 
            //ToDo: identify a time line range, store it as an object of two dates "dateRange"
            //ToDo: arrange array by descending date order 
            
        //ToDo: analyze risk
            //ToDo: identify risk range (highest score and lowest score ). store as an object "risk Range"
            //ToDo: identify average risk overall. store as an object "riskAverage"

        //ToDo: compare risk over time 



    // The chronological order of occurrences.
    // The "Risk" factor average. 

    // collect the data of each type in separate arrays by OS. 

    // analyze each array for:
    // date range
    // risk index
    //     average risk overall for each OS
    //     range of risk
        
    // compare the two risks of each occurrence over time. 

    // push this data to a new filtered array.

    // compare arrays by OS

};
module.exports = cveAlgorithm