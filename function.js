// domcontentloaded
const searchItem = document.querySelectorAll('.search');
const deligate = document.querySelectorAll('.deligate_container');
const leftTabContent = document.querySelectorAll(".asside_tab_content");
const deligate_check = document.getElementsByClassName("deligate_check");
const deligateMon = document.getElementsByClassName('desigateMon');
const deligateSun = document.getElementsByClassName('deligateSun');
const tabButton = document.querySelectorAll('.tab_button');
const rightTabBtn = document.querySelectorAll('.right_tab_btn');
const rightTabContent = document.querySelectorAll('.right_tab_content');
const rightTabActive = document.getElementsByClassName('right_tab_active')[0];
const userLW = document.querySelectorAll('.user_location_close');
// leftTabContent[0].style.display = "block";


// let searchData = {
//     'keyword': 'Dhaka',
//     'pageNo': 1,
//     'perPage': 25,
//     'sortType': '',
//     'orderBy': 'id'
// }
// searchArray.push(searchData);

rightTabContent[0].style.display = "none";
// deligateSun[0].style.display = 'block';


// // deligate_check[0].setAttribute('checked', 'checked')
// deligate.forEach((delItem, index) => {

//     // console.log();
//     delItem.addEventListener("click", itm => {
//         // console.log(itm.target.tagName);

//         // let id = itm.target.getAttribute('data-id')
//         searchItem.forEach((si, i) => {
//             si.classList.remove("search_active");
//             // deligate_check[i].removeAttribute('checked', 'checked')
//             // deligate_check[i].removeAttribute('checked', '');
//             // console.log("insede for Each " + i);
//             deligateSun[i].style.display = 'none';
//             // deligateSun[i].style.display = '';
//             if (si.classList.contains("search_active")) {
//                 deligateSun[i].style.display = 'block';
//             }
//         })

//         searchItem[index].classList.add('search_active');
//         deligateSun[index].style.display = 'block';
//         // delItem.setAttribute('checked', 'checked')
//         console.log(index);

//     })
// })


// left tab and navs
tabButton.forEach((tb, tbi) => {

    tb.addEventListener('click', btn => {

        tabButton.forEach((tbf, i) => {
            tbf.classList.remove("tab_button_active")
            // leftTabContent[i].style.display = 'none';
        })

        // tbi == 0 ? leftTabContent[0].style.display = 'block' : leftTabContent[1].style.display = "block";
        tb.classList.add('tab_button_active');
    })
})

//right tab and navs
// rightTabBtn.forEach((rTab, i) => {
//     rTab.addEventListener('click', btn => {
//         console.log(i);
//         rightTabContent.forEach(RTabC => {
//             RTabC.style.display = "none";
//         })
//         if (i == 0) {
//             rightTabContent[i].style.display = "block";
//             // rightTabContent[i].style.display = "none";
//             rightTabActive.classList.remove('active_on_right');
//             rightTabActive.classList.add('active_on_left');

//         } else {
//             rightTabContent[i].style.display = "block";
//             rightTabActive.classList.add('active_on_right');
//             rightTabActive.classList.remove('active_on_left');
//         }
//     })



// })
// })
// console.log("script Loaded");


// function get country, state, city data and show 
function getCountryStateCity() {
    const countrySelectElement = document.getElementById('select_country');
    const stateSelectElement = document.getElementById("select_state");
    const citySelectElement = document.getElementById("select_city");


    // get country name and set to country select element
    axios.get("https://api.countrystatecity.in/v1/countries", {
            headers: {
                "X-CSCAPI-KEY": "eldObUl5V0Q4MWpiaXFQeEpNSEVVSTlBU1R5ZlU5OE5ORmRra1dxRg==",
            }
        })
        .then(res => {
            res.data.forEach(cntry => {
                let option = document.createElement("option");
                option.value = cntry.iso2;
                option.textContent = cntry.name;
                countrySelectElement.appendChild(option);
            })
        })
        .then(error => {
            // console.log(error);
        })

    //if country change call api for state data
    countrySelectElement.addEventListener('change', (e) => {
        countryCode = e.target.value;
        // console.log("https://api.countrystatecity.in/v1/countries/" + countryCode + "/states");
        axios.get("https://api.countrystatecity.in/v1/countries/" + countryCode + "/states", {
                headers: {
                    "X-CSCAPI-KEY": "eldObUl5V0Q4MWpiaXFQeEpNSEVVSTlBU1R5ZlU5OE5ORmRra1dxRg==",
                }
            })
            .then(res => {
                let htmlOption = '';
                let ifBd = "";
                res.data.forEach(state => {
                    if (countryCode == "BD") {
                        // console.log(state);
                        // console.log(countryCode, res.data);
                        if (state.iso2.length != 1) {
                            //get name without  'District' from state.name
                            var str = state.name;
                            var newstr = str.replace(/ District$/, "");

                            ifBd +=
                                `
                                <option value="${newstr}">${newstr}</option>
                            
                                `;
                        }
                    } else {

                        htmlOption +=
                            `
                            <option value="${state.iso2}">${state.name}</option>
                            
                            `;
                    }
                })
                stateSelectElement.innerHTML = htmlOption;
                citySelectElement.innerHTML = ifBd;
            })
            .then(error => {
                console.log(error);
            })
    })

    //if change state call api for city
    stateSelectElement.addEventListener("input", (e) => {
        let countryCode = document.getElementById('select_country').value;
        let cityCode = e.target.value;
        // console.log(countryCode, cityCode);
        axios.get("https://api.countrystatecity.in/v1/countries/" + countryCode + "/states/" + cityCode + "/cities", {
                headers: {
                    "X-CSCAPI-KEY": "eldObUl5V0Q4MWpiaXFQeEpNSEVVSTlBU1R5ZlU5OE5ORmRra1dxRg==",
                }
            })
            .then(res => {
                let htmlOption = "";
                // console.log(res.data[0]);
                res.data.forEach(ct => {
                    htmlOption +=
                        `
                        <option value="${ct.name}">${ct.name}</option>
                        `;
                })
                citySelectElement.innerHTML = htmlOption;
            })
            .then(error => {
                console.log(error);
            })
    })
}


// location submit btn click 
locationSubBtn.addEventListener('click', () => {
    let city = document.getElementById("select_city").value;
    if (city) {
        getWeather(city);
        // console.log(city);
        // openAndCloseLocationForm();
        locationForm.classList.remove('user_location_active');
    }
})


//if click location name, it open location select form
setLocationBtn.addEventListener("click", () => {
    //get the ::after by the coresponding target of setLocation id 
    // const afterTarget = document.querySelector('.setLocation::after');
    if (setLocationBtn.classList.contains('open')) {
        setLocationBtn.classList.remove('open');
    } else {
        setLocationBtn.classList.add('open');
    }

    if (locationForm.classList.contains('user_location_active')) {
        locationForm.classList.remove('user_location_active')
    } else {
        locationForm.classList.add('user_location_active');
        getCountryStateCity();
    }
})


userLW.forEach(ulw => {
    ulw.addEventListener("click", openAndCloseLocationForm);
})

function openAndCloseLocationForm() {
    setLocationBtn.classList.remove('open');
    locationForm.classList.remove('user_location_active')

}

//location 
locationCheckBtn.addEventListener('click', () => {
    let locationName = document.getElementById('locationCheckInput');
    if (locationName.value == "" || locationName.value == null || locationName.value == undefined) {
        locationName.classList.add('is-invalid');

        setTimeout(() => {
            locationName.classList.remove('is-invalid');
        }, 3000);
    } else {
        // console.log(locationName.value);
        getWeather(locationName.value);
        locationForm.classList.remove('user_location_active');

    }
})