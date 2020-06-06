let tabsHeaders = document.querySelectorAll('.tabs .tabs__item');
let tabsBorder = document.querySelector('.tabs .tabs__line');
let tabs = document.querySelectorAll('.tabs-content .tabs-content__item');

for (let i = 0; i < tabsHeaders.length; i++) {
  tabsHeaders[i].onclick = () => {

    for (let i = 0; i < tabsHeaders.length; i++) {
      tabsHeaders[i].classList.remove('tabs__item--active')
      tabs[i].classList.remove('tabs-content__item--active')
    }

    tabsHeaders[i].classList.add('tabs__item--active');
    tabs[i].classList.add('tabs-content__item--active')

    if (i === 0) {
      tabsBorder.classList.add('tabs__line--1');
      tabsBorder.classList.remove('tabs__line--2')
      tabsBorder.classList.remove('tabs__line--3')
      tabsBorder.classList.remove('tabs__line--4')
    }
    if (i === 1) {
      tabsBorder.classList.remove('tabs__line--1')
      tabsBorder.classList.add('tabs__line--2');
      tabsBorder.classList.remove('tabs__line--3')
      tabsBorder.classList.remove('tabs__line--4')
    }
    if (i === 2) {
      tabsBorder.classList.remove('tabs__line--1')
      tabsBorder.classList.remove('tabs__line--2')
      tabsBorder.classList.add('tabs__line--3');
      tabsBorder.classList.remove('tabs__line--4');
    }
    if (i === 3) {
      tabsBorder.classList.remove('tabs__line--1')
      tabsBorder.classList.remove('tabs__line--2')
      tabsBorder.classList.remove('tabs__line--3');
      tabsBorder.classList.add('tabs__line--4');
    }
  }
}