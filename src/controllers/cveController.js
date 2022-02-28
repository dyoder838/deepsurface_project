const cveController = {


    //get one CVE by CVE identifier
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
    
    identifierList(props) {

        Object.values(props)

    }   
    


//get all CVE by Ids

//get one CVE by ID:

//get 10 CVE by ascending order

//get all CVE dates and Risk in date order in order 

};
module.exports = cveController


// {Object.entries(props.stuff).map(([index, data]) =>

//     <Grid key={index} item xs={12} md={6} lg={6}>

//         <CevCardBasic
//             key={index}
//             id={data.id}
//             hosts={data.hosts}
//             patches={data.patches}
//             risk={data.risk}
//             identifier={data.identifier}
//             modified={data.modified}
//             description={data.description}
//             urls={data.urls} />

//     </Grid>