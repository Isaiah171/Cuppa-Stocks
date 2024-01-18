//The goal of this portion of javascript code was to enable data to be pulled from the Alpha Vantage API and 
//displayed in a useful and understandable manner for the end user. Commodity information was pulled for the sake of
// an interactive table which lets the user toggle between commodity information for coffee (of course!), corn, wheat, copper,
//and oil. Data is also pulled from the Alpha Vantage API to allow the user to see the performance of the Dow Jones, S&P 500,
//and NASDAQ indicies for that day (closing values are displayed). The javascript in this code was designed to obtain data from 
// Alpha Vantage, convert it to a JSON object, refine the data from that object, and then manipulate it to be easily understood
//by the end user.

//Define variables to be used
var getCoffeeValue = async (commodity, interval = 'monthly', elementId) => {
    // API URL is set with correct endpoints
    var apiUrl = `https://www.alphavantage.co/query?function=${commodity}&interval=${interval}&apikey=QFTUYULMA5M1ZW53`;

    try {
        // used to fetch Alpha Vantage API url
        var answer = await fetch(apiUrl);

        if (!answer.ok) {
            throw new Error(`Error: ${answer.status} - ${answer.statusText}`);
        }

        // used to obtain data from Alpha Vantage as a json object
        var info = await answer.json();

        // Most recent data is selected and then the value is manipulated to convert cents to dollars and round to the nearest hundreth
        var finalValue = (info.data[0].value / 100).toFixed(2);

        // Display the result in the console
        console.log(`${commodity} data (${interval}):`, finalValue);

        // Update the information in the table corresponding to the specified ID
        document.getElementById(elementId).textContent = `$ ${finalValue} per/lb`;
    } catch (error) {
        //reports an error in obtaining information
        console.error(`NO COFFEE FOR YOU`, error.message);
    }
};

// Calls the function to fetch and display data for coffee with different intervals and element IDs
getCoffeeValue('COFFEE', 'monthly', 'coffee-m');
getCoffeeValue('COFFEE', 'quarterly', 'coffee-q');
getCoffeeValue('COFFEE', 'annual', 'coffee-a');

//Variables are defined 
var getCornValue = async (commodity, interval = 'monthly', elementId) => {
    // API URL is set with correct endpoints
    var apiUrl = `https://www.alphavantage.co/query?function=${commodity}&interval=${interval}&apikey=QFTUYULMA5M1ZW53`;

    try {
        // used to fetch Alpha Vantage API url
        var answer = await fetch(apiUrl);

        if (!answer.ok) {
            throw new Error(`Error: ${answer.status} - ${answer.statusText}`);
        }

        // used to obtain data from Alpha Vantage as a json object
        var info = await answer.json();

        // Most recent data is selected and then the value is manipulated to round to the nearest hundreth
        var finalValue = Math.round(info.data[0].value * 100) / 100;

        // Display the result in the console
        console.log(`${commodity} data (${interval}):`, finalValue);

        // Update the HTML element with the specified ID
        document.getElementById(elementId).textContent = `$ ${finalValue} per/ton`;
    } catch (error) {
        //logs an error if there is trouble getting data
        console.error(`NO CORN FOR YOU`, error.message);
    }
};

// Calls the function to fetch and display data for corn with different intervals and element IDs
getCornValue('CORN', 'monthly', 'corn-m');
getCornValue('CORN', 'quarterly', 'corn-q');
getCornValue('CORN', 'annual', 'corn-a');

//variables are defined
var getWheatValue = async (commodity, interval = 'monthly', elementId) => {
    // API URL is set with correct endpoints
    var apiUrl = `https://www.alphavantage.co/query?function=${commodity}&interval=${interval}&apikey=QFTUYULMA5M1ZW53`;

    try {
        // used to fetch Alpha Vantage API url
        var answer = await fetch(apiUrl);

        if (!answer.ok) {
            throw new Error(`Error: ${answer.status} - ${answer.statusText}`);
        }

        // used to obtain data from Alpha Vantage as a json object
        var info = await answer.json();

        // Most recent data is selected and then the value is manipulated to round to the nearest hundreth
        var finalValue = Math.round(info.data[0].value * 100) / 100;

        // Display the result in the console
        console.log(`${commodity} data (${interval}):`, finalValue);

        // Update the HTML element with the specified ID
        document.getElementById(elementId).textContent = `$ ${finalValue} per/ton`;
    } catch (error) {
        //logs error if data is unable to be fetched
        console.error(`NO WHEAT FOR YOU`, error.message);
    }
};

// Calls the function to fetch and display data for wheat with different intervals and element IDs
getWheatValue('WHEAT', 'monthly', 'wheat-m');
getWheatValue('WHEAT', 'quarterly', 'wheat-q');
getWheatValue('WHEAT', 'annual', 'wheat-a');

//variables are defined        
var getCopperValue = async (commodity, interval = 'monthly', elementId) => {
    // API URL is set with correct endpoints
    var apiUrl = `https://www.alphavantage.co/query?function=${commodity}&interval=${interval}&apikey=QFTUYULMA5M1ZW53`;

    try {
        // used to fetch Alpha Vantage API url
        var answer = await fetch(apiUrl);

        if (!answer.ok) {
            throw new Error(`Error: ${answer.status} - ${answer.statusText}`);
        }

        // used to obtain data from Alpha Vantage as a json object
        var info = await answer.json();

        // Most recent data is selected and then the value is manipulated to round to the nearest hundreth
        var finalValue = Math.round(info.data[0].value * 100) / 100;

        // Display the result in the console
        console.log(`${commodity} data (${interval}):`, finalValue);

        // Update the HTML element with the specified ID
        document.getElementById(elementId).textContent = `$${finalValue} per/ton`;
    } catch (error) {
        //logs an error if data is unable to be fetched
        console.error(`Error in getCopperValue (${commodity}, ${interval}):`, error.message);
    }
};

// Calls the function to fetch and display data for copper with different intervals and element IDs
getCopperValue('COPPER', 'monthly', 'copper-m');
getCopperValue('COPPER', 'quarterly', 'copper-q');
getCopperValue('COPPER', 'annual', 'copper-a');

//Defines the variables
var getOilValue = async (commodity, interval = 'daily', elementId) => {
    // API URL is set with correct endpoints
    var apiUrl = `https://www.alphavantage.co/query?function=${commodity}&interval=${interval}&apikey=QFTUYULMA5M1ZW53`;

    try {
        // used to fetch Alpha Vantage API url
        var answer = await fetch(apiUrl);

        if (!answer.ok) {
            throw new Error(`Error: ${answer.status} - ${answer.statusText}`);
        }

        // used to obtain data from Alpha Vantage as a json object
        var info = await answer.json();

        // Displays the results in the console
        console.log(`${commodity} data (${interval}):`, info.data[0].value);

        // Update the HTML element with the specified ID
        document.getElementById(elementId).textContent = `$ ${info.data[0].value} per/barrel`;
    } catch (error) {
        //logs error if data is unable to be fetched
        console.error(`Error in getOilValue (${commodity}, ${interval}):`, error.message);
    }
};

// Call the function to fetch and display data for oil with different intervals and element IDs
getOilValue('WTI', 'daily', 'oil-d');
getOilValue('WTI', 'weekly', 'oil-w');
getOilValue('WTI', 'monthly', 'oil-m');


// For displaying index values at the top of the app
var getSpyValue = async () => {
    // API URL is set with correct endpoints
    var apiUrl = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=SPY&outputsize=compact&apikey=QFTUYULMA5M1ZW53`;

    try {
        // used to fetch Alpha Vantage API url
        var answer = await fetch(apiUrl);

        if (!answer.ok) {
            throw new Error(`Error: ${answer.status} - ${answer.statusText}`);
        }

        // used to obtain data from the Alpha Vantage API as a json object
        var info = await answer.json();

        // Get the most recent data from today
        const todaysInfo = getMostRecentDate(info);
        const getMostRecentData = info["Time Series (Daily)"][todaysInfo];

        // Display the result in the console
        console.log("Most recent data for S&P 500:", getMostRecentData);

        // Manipulate the value to get only the necessary information from the json object
        const alteredValue = manipulateData(getMostRecentData);

        // Display the manipulated value in the console as proof of concept
        console.log("Closing value of S&P 500:", alteredValue);

        // Update the HTML element
        document.getElementById("sp2").textContent ="$" + alteredValue;
    } catch (error) {
        console.error('Error in getSpyValue:', error.message);
    }
};

// For displaying index values at the top of the app
var getDiaValue = async () => {
    // API URL is set with correct endpoints
    var apiUrl = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=DIA&outputsize=compact&apikey=QFTUYULMA5M1ZW53`;

    try {
        // used to fetch Alpha Vantage API url
        var answer = await fetch(apiUrl);

        if (!answer.ok) {
            throw new Error(`Error: ${answer.status} - ${answer.statusText}`);
        }

        // used to obtain data from the Alpha Vantage API as a json object
        var info = await answer.json();

        // Get the most recent data from today
        const todaysInfo = getMostRecentDate(info);
        const getMostRecentData = info["Time Series (Daily)"][todaysInfo];

        // Display the result in the console
        console.log("Most recent data for Dow Jones:", getMostRecentData);

        // Manipulate the value to get only the necessary information from the json object
        const alteredValue = manipulateData(getMostRecentData);

        // Display the manipulated value in the console as proof of concept
        console.log("Closing value of Dow Jones:", alteredValue);

        // Update the HTML element
        document.getElementById("dow2").textContent = "$" + alteredValue;
    } catch (error) {
        console.error('Error in getDiaValue:', error.message);
    }
};

// For displaying index values at the top of the app
var getNdaqValue = async () => {
    // API URL is set with correct endpoints
    var apiUrl = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=NDAQ&outputsize=compact&apikey=QFTUYULMA5M1ZW53`;

    try {
        // used to fetch Alpha Vantage API url
        var answer = await fetch(apiUrl);

        if (!answer.ok) {
            throw new Error(`Error: ${answer.status} - ${answer.statusText}`);
        }

        // used to obtain data from the Alpha Vantage API as a json object
        var info = await answer.json();

        // Get the most recent data from today
        const todaysInfo = getMostRecentDate(info);
        const getMostRecentData = info["Time Series (Daily)"][todaysInfo];

        // Display the result in the console
        console.log("Most recent data for NASDAQ:", getMostRecentData);

        // Manipulate the value to get only the necessary information from the json object
        const alteredValue = manipulateData(getMostRecentData);

        // Display the manipulated value in the console as proof of concept
        console.log("Closing value of NASDAQ:", alteredValue);

        // Update the HTML element
        document.getElementById("ndaq2").textContent = "$" + alteredValue;
    } catch (error) {
        console.error('Error in getNdaqValue:', error.message);
    }
};

function getMostRecentDate(data) {
    // Pull from the most recent date of the json object
    return Object.keys(data["Time Series (Daily)"])[0];
}

function manipulateData(data) {
    // convert the "close" property of the data to a number (dollar value with decimals to a hundreth)
    return Number(data["4. close"]);
}

// Call the function to fetch the data
getNdaqValue();
getDiaValue();
getSpyValue();