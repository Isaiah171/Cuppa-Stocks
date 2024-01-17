var getCoffeeValue = async (commodity,interval='monthly') => {
    // API URL is set with correct endpoints
    var apiUrl = `https://www.alphavantage.co/query?function=${commodity}&interval=${interval}&apikey=QFTUYULMA5M1ZW53`;

    try {
        //used to fetch Alpha Vantage API url
        var answer = await fetch(apiUrl);

        if (answer==false) {
            throw new Error(`Error: ${answer.status} - ${answer.statusText}`);
        }
        //used to obtain data from the Alpha Vantage as a json object
        var info = await answer.json();
        //Most recent data is selected and then the value is manipulated to convert cents to dollars and round to the nearest hundreth
        console.log(`${commodity} data (${interval}):`,(info.data[0].value/100).toFixed(2));
    } catch (error) {
        console.error('no coffee for you!:', error.message);
    }
};

// Call the function to fetch the data
getCoffeeValue('COFFEE');

var getCornValue = async (commodity,interval='monthly') => {
    // API URL is set with correct endpoints
    var apiUrl = `https://www.alphavantage.co/query?function=${commodity}&interval=${interval}&apikey=QFTUYULMA5M1ZW53`;

    try {
        //used to fetch Alpha Vantage API url
        var answer = await fetch(apiUrl);

        if (answer==false) {
            throw new Error(`Error: ${answer.status} - ${answer.statusText}`);
        }
        //used to obtain data from the Alpha Vantage as a json object
        var info = await answer.json();
        //Most recent data is selected and then the value is manipulated to round to the nearest hundreth
        console.log(`${commodity} data (${interval}):`, Math.round(info.data[0].value * 100)/100);
    } catch (error) {
        console.error('no corn for you!:', error.message);
    }
};

// Call the function to fetch the data
getCornValue('CORN');

var getWheatValue = async (commodity,interval='monthly') => {
    // API URL is set with correct endpoints
    var apiUrl = `https://www.alphavantage.co/query?function=${commodity}&interval=${interval}&apikey=QFTUYULMA5M1ZW53`;

    try {
        //used to fetch Alpha Vantage API url
        var answer = await fetch(apiUrl);

        if (answer==false) {
            throw new Error(`Error: ${answer.status} - ${answer.statusText}`);
        }
        //used to obtain data from the Alpha Vantage as a json object       
        var info = await answer.json();
        //Most recent data is selected and then the value is manipulated to round to the nearest hundreth
        console.log(`${commodity} data (${interval}):`, Math.round(info.data[0].value * 100)/100);
    } catch (error) {
        console.error('no wheat for you!:', error.message);
    }
};

// Call the function to fetch the data
getWheatValue('WHEAT');

        
var getCopperValue = async (commodity,interval='monthly') => {
    // API URL is set with correct endpoints
    var apiUrl = `https://www.alphavantage.co/query?function=${commodity}&interval=${interval}&apikey=QFTUYULMA5M1ZW53`;

    try {
        //used to fetch Alpha Vantage API url
        var answer = await fetch(apiUrl);

        if (answer==false) {
            throw new Error(`Error: ${answer.status} - ${answer.statusText}`);
        }
        //used to obtain data from the Alpha Vantage as a json object
        var info = await answer.json();
        //Most recent data is selected and then the value is manipulated to round to the nearest hundreth
        console.log(`${commodity} data (${interval}):`, Math.round(info.data[0].value * 100)/100);
    } catch (error) {
        console.error('no copper for you!:', error.message);
    }
};

// Call the function to fetch the data
getCopperValue('COPPER');

var selectIntervals = (interval) => {
    // Calls the function to change intervals for coffee
    getCoffeeValue('COFFEE', interval);

    // Calls the function to change intervals for corn
    getCornValue('CORN', interval);

    // Calls the function to change intervals for wheat
    getWheatValue('WHEAT', interval);

    // Calls the function to change intervals for copper
    getCopperValue('COPPER', interval);
};

var getOilValue = async (commodity,interval='daily') => {
    // API URL is set with correct endpoints
    var apiUrl = `https://www.alphavantage.co/query?function=${commodity}&interval=${interval}&apikey=QFTUYULMA5M1ZW53`;
    try {
        //used to fetch Alpha Vantage API url
        var answer = await fetch(apiUrl);

        if (answer==false) {
            throw new Error(`Error: ${answer.status} - ${answer.statusText}`);
        }
        //used to obtain data from the Alpha Vantage as a json object
        var info = await answer.json();
        console.log(`${commodity} data (${interval}):`, info.data[0].value);
    } catch (error) {
        console.error('no oil for you!:', error.message);
    }
};
// Calls the function to fetch the data
getOilValue('WTI');

// Calls the function to set intervals for oil
var oilIntervals = (interval) => {
getOilValue('WTI', interval);
};

//For displaying index values at the top of the app
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
        console.log("Most recent data:", getMostRecentData);

        // Manipulate the value to get only the necessary information from the json object
        const alteredValue = manipulateData(getMostRecentData);

        // Display the manipulated value in the console as proof of concept
        console.log("closing value of S&P 500:", alteredValue);
    } catch (error) {
        
        console.error('Error in getSpyValue:', error.message);
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
getSpyValue();

//For displaying index values at the top of the app
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
        console.log("Most recent data:", getMostRecentData);

        // Manipulate the value to get only the necessary information from the json object
        const alteredValue = manipulateData(getMostRecentData);

        // Display the manipulated value in the console as proof of concept
        console.log("closing value of DOW JONES:", alteredValue);
    } catch (error) {
        
        console.error('Error in getDjiValue:', error.message);
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
getDiaValue();

//For displaying index values at the top of the app
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
        console.log("Most recent data:", getMostRecentData);

        // Manipulate the value to get only the necessary information from the json object
        const alteredValue = manipulateData(getMostRecentData);

        // Display the manipulated value in the console as proof of concept
        console.log("closing value of NASDAQ:", alteredValue);
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