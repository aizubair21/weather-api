// domcontentloaded 
document.addEventListener('DOMContentLoaded', () => {

    const searchItem = document.querySelectorAll('.search');
    const deligate = document.querySelectorAll('.deligate_container');
    const deligate_check = document.getElementsByClassName("deligate_check");
    const deligateMon = document.getElementsByClassName('desigateMon');
    const deligateSun = document.getElementsByClassName('deligateSun');
    const tabButton = document.querySelectorAll('.tab_button');

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


    // tab and navs
    tabButton.forEach(tb => {
        tb.addEventListener('click', btn => {

            tabButton.forEach(tbf => {
                tbf.classList.remove("tab_button_active")
            })

            tb.classList.add('tab_button_active');
        })
    })

    //dom content loaded function end
})