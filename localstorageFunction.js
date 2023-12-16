document.addEventListener('DOMContentLoaded', () => {
    // getWeatherIfLocalStorageDataFound();
    showLocalStorageSearchData();

});

// show localstorage search data to website 
function showLocalStorageSearchData() {
    let searchHistory = JSON.parse(localStorage.getItem('search'));
    let searchResult = document.getElementById('recentSearch')
    if (searchHistory) {
        let htmlElement = '';
        let ind = 0;

        for (let index = 0; index < searchHistory.length; index++) {
            console.log(searchHistory[index].active);
            ind++;
            htmlElement +=
                `
                <div class="search ${searchHistory[index].active?"search_active":""}">
               
                    <div class="search_sl">0${ ind}</div>
                    <div class="search_title">${searchHistory[index].keyword}</div>

                    <label class="deligate_container" onclick="triggerActiveSearchData(${index})">
                        <svg viewBox="0 0 384 512" height="1em" xmlns="http://www.w3.org/2000/svg"  class="moon deligateMon }">
                            <path
                                d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z">
                            </path>
                        </svg>
                        <svg viewBox="0 0 512 512" height="1em" xmlns="http://www.w3.org/2000/svg"  class="sun deligateSun ${searchHistory[index].active?"d-block":'d-none'}">
                            <path
                                d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z">
                            </path>
                        </svg>
                    </label>

                    <div class="search_del" onclick="deleteLocalStorageData(${index})"> - </div>
                </div>
            `;
        }
        searchResult.innerHTML = htmlElement;
    }
}

/**
 * localstorage function to keep search data to localstorage
 */
async function localStorageFunction(searchData = null, swData = null) {
    // console.log(searchWeather);

    /**
     * search data
     */
    if (!localStorage.getItem('search')) {

        // search data 
        searchArray.push(searchData);
        searchData.active = true;
        localStorage.setItem('search', JSON.stringify(searchArray));

    } else {

        let haveAlreadyInseted = false;
        searchArray = await JSON.parse(localStorage.getItem('search'));
        searchArray.forEach(rd => {
            if (rd.keyword == searchData.keyword) {
                haveAlreadyInseted = true;
            }
        });
        if (searchData != null && !haveAlreadyInseted) {
            searchArray.push(searchData);
            localStorage.setItem('search', JSON.stringify(searchArray));
            triggerActiveSearchData(searchArray.length - 1, true);
        }

    }

    /**
     * search weather info save to local storage
     */
    if (!localStorage.getItem('searchWeather')) {
        getSearchWeatherArray.push(swData);
        localStorage.setItem('searchWeather', JSON.stringify(getSearchWeatherArray));
    } else {
        let haveAlreadyInserted = false;
        getSearchWeatherArray = await JSON.parse(localStorage.getItem(getSearchWeatherArray));
        getSearchWeatherArray.forEach((wea) => {
            if (wea.cityName == swData.cityName) {
                haveAlreadyInserted = true;
            }
        })
        if (swData !== undefined && !haveAlreadyInserted) {
            getSearchWeatherArray.push(swData);
            localStorage.setItem('searchWeather', JSON.stringify(getSearchWeatherArray))
        }

    }

    showLocalStorageSearchData();
    // console.log(searchData);
    // console.log(JSON.parse(localStorage.getItem('search')));
}

/*
 * if search history found in localstorage. 
 * get active  weather by first page loaded.
 */
function getWeatherIfLocalStorageDataFound() {
    const weatherDataFromLS = JSON.parse(localStorage.getItem("search"));
    if (weatherDataFromLS && weatherDataFromLS.length > 0) {
        weatherDataFromLS.forEach(wsh => {
            if (wsh.active) {
                getWeather(wsh.keyword);
            }
        })
    }
}


/**
 * trigger function for active search data from html page
 * 
 */
function triggerActiveSearchData(tindex, isFirsrInsert = false) {
    let ld = JSON.parse(localStorage.getItem('search'));
    if (ld.length > 0) {
        ld.forEach(ldEl => {
            ldEl.active = false
        })
        // if (!ld[tindex].active) {
        //     ld[tindex].push("active");
        // }
        ld[tindex].active = true;
        localStorage.setItem("search", JSON.stringify(ld));
        showLocalStorageSearchData();
        if (!isFirsrInsert) {
            getWeatherIfLocalStorageDataFound();
        }
        openAndCloseLocationForm();
    }
    // console.log(ld);
}

/**
 * delete search local data
 * 
 */
function deleteLocalStorageData(targetI) {
    let ld = JSON.parse(localStorage.getItem('search'));
    if (ld.length > 0) {
        ld.splice(targetI, 1);
        localStorage.setItem("search", JSON.stringify(ld));
        showLocalStorageSearchData();
    } else {
        alert("No data to remove")
    }
}