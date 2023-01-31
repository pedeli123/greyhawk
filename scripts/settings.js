// Where to load data from. Choose either a local file in GitHub repo, such as `data/places.csv`,
// or a Google Sheets URL (File > Publish to the Web > CSV )
const dataLocation = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQzQAaRTaEmsReuVlZ5kcKGVuejHrQm_icZAeeFLomG3owSxITaDZ6_Wk435hQejuFpa4g08gPVk-sA/pub?gid=0&single=true&output=csv';  //// ----->**CHANGE**: the LINK to your GOOGLE SHEET (or local csv file if using the alternate method) 

// Map's initial center, and zoom level
const mapCenter = [-84.82, 69.88]; //// ----->**CHANGE**: replace with the center coordinates from your Content map [my map: AZURE SEA]
const mapZoom = 4; //// ----->**CHANGE**: initial zoom level must be >min zoom and <max zoom (defined in scripts.js)

// Marker icon height and width
const iconHeight = 30; //// ----->**CHANGE**: size according to your preference
const iconWidth = 30; //// ----->**CHANGE**: size according to your preference
