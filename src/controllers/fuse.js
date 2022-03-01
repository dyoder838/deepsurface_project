const options = {
  isCaseSensitive: false,
  // includeScore: false,
  // shouldSort: true,
  // includeMatches: false,
  findAllMatches: true,
  // minMatchCharLength: 1,
  // location: 0,
  // threshold: 0.6,
  // distance: 100,
  useExtendedSearch: true,
  // ignoreLocation: false,
  // ignoreFieldNorm: false,
  // fieldNormWeight: 1,
  keys :[
      "id",
      "risk",
      "identifier",
      "modified",
      "description"
  
  ]
};

const adjustedDb = Object.values(props.db)
const fuse = new Fuse(adjustedDb, options);

// Change the pattern
const pattern = "microsoft";

const results = fuse.search(pattern);
console.log("navbar results:",results)
console.log("navbar adjustedDb:", adjustedDb)