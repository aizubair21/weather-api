// domcontentloaded
document.addEventListener('DOMContentLoaded', () => {

    const searchItem = document.querySelectorAll('.search');
    const deligate = document.querySelectorAll('.deligate_container');
    const deligate_check = document.getElementsByClassName("deligate_check");
    const deligateMon = document.getElementsByClassName('desigateMon');
    const deligateSun = document.getElementsByClassName('deligateSun');
    const tabButton = document.querySelectorAll('.tab_button');;
    const rightTabBtn = document.querySelectorAll('.right_tab_btn');
    const rightTabContent = document.querySelectorAll('.right_tab_content');
    const rightTabActive = document.getElementsByClassName('right_tab_active')[0];


    // let searchData = {
    //     'keyword': 'Dhaka',
    //     'pageNo': 1,
    //     'perPage': 25,
    //     'sortType': '',
    //     'orderBy': 'id'
    // }
    // searchArray.push(searchData);

    rightTabContent[1].style.display = "none";
    deligateSun[0].style.display = 'block';


    // deligate_check[0].setAttribute('checked', 'checked')
    deligate.forEach((delItem, index) => {

        // console.log();
        delItem.addEventListener("click", itm => {
            // console.log(itm.target.tagName);

            // let id = itm.target.getAttribute('data-id')
            searchItem.forEach((si, i) => {
                si.classList.remove("search_active");
                // deligate_check[i].removeAttribute('checked', 'checked')
                // deligate_check[i].removeAttribute('checked', '');
                // console.log("insede for Each " + i);
                deligateSun[i].style.display = 'none';
                // deligateSun[i].style.display = '';
                if (si.classList.contains("search_active")) {
                    deligateSun[i].style.display = 'block';
                }
            })

            searchItem[index].classList.add('search_active');
            deligateSun[index].style.display = 'block';
            // delItem.setAttribute('checked', 'checked')
            // console.log(index);

        })
    })


    // left tab and navs
    tabButton.forEach(tb => {
        tb.addEventListener('click', btn => {

            tabButton.forEach(tbf => {
                tbf.classList.remove("tab_button_active")
            })

            tb.classList.add('tab_button_active');
        })
    })

    //right tab and navs
    rightTabBtn.forEach((rTab, i) => {
        rTab.addEventListener('click', btn => {
            console.log(i);
            rightTabContent.forEach(RTabC => {
                RTabC.style.display = "none";
            })
            if (i == 0) {
                rightTabContent[i].style.display = "block";
                // rightTabContent[i].style.display = "none";
                rightTabActive.classList.remove('active_on_right');
                rightTabActive.classList.add('active_on_left');

            } else {
                rightTabContent[i].style.display = "block";
                rightTabActive.classList.add('active_on_right');
                rightTabActive.classList.remove('active_on_left');
            }
        })



    })
    // console.log("script Loaded");
    // show localstorage search data to website 
    function showLocalStorageSearchData() {
        let searchHistory = JSON.parse(localStorage.getItem('search'));
        let searchResult = document.getElementById('recentSearch')
        if (searchHistory) {
            let htmlElement = '';
            let ind = 0;

            for (let index = 0; index < searchHistory.length; index++) {
                ind++;
                htmlElement +=
                    `
                    <div class="search">
                   
                    <div class="search_sl">0${ ind}</div>
                    <div class="search_title">${searchHistory[index].keyword}</div>

                    <label class="deligate_container">
                        <svg viewBox="0 0 384 512" height="1em" xmlns="http://www.w3.org/2000/svg" class="moon deligateMon">
                            <path
                                d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z">
                            </path>
                        </svg>
                        <svg viewBox="0 0 512 512" height="1em" xmlns="http://www.w3.org/2000/svg" class="sun deligateSun">
                            <path
                                d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z">
                            </path>
                        </svg>
                    </label>

                    <div class="search_del"> - </div>
                </div>
                `;
            }
            searchResult.innerHTML = htmlElement;
        }
    }
    showLocalStorageSearchData();

})