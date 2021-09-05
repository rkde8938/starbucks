//검색 아이콘 클릭시 검색창 활성화
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  searchInputEl.removeAttribute('placeholder');
  //searchInputEl.setAttribute('placeholder', '');
});




const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); // 현재의 년도 (2021)