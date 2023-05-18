var gems = [
  { name: "Рубин", image: "https://maxim-demidov.ru/storage/editor_images/5abc021eeff924ff4d6565b1e198a228.webp", type: "драгоценные" },
  { name: "Сапфир", image: "https://mosgemlab.ru/upload/TAqhfPo_4.png", type: "драгоценные" },
  { name: "Алмаз", image: "https://catalogmineralov.ru/pic/2015/b_121155101115.jpg", type: "драгоценные" },
  { name: "Изумруд", image: "https://gemlovers.ru/assets/img/upload/iblock/97d/mineral-izumrud.png", type: "драгоценные" },
  { name: "Лунный камень", image: "https://gemlovers.ru/assets/img/upload/iblock/481/lunnyj-kamen.png", type: "драгоценные" },
  { name: "Александрит", image: "https://encyclopedia.silver-lines.ru/images/stones/679.png", type: "драгоценные" },
  { name: "Хризоберилл", image: "https://encyclopedia.silver-lines.ru/images/stones/792.png", type: "драгоценные" },
  { name: "Опал", image: "https://gemlovers.ru/assets/img/upload/iblock/2c7/opal.png", type: "полудрагоценные" },
  { name: "Агат", image: "https://1400.рф/wp-content/uploads/screenshot_5-19.jpg", type: "полудрагоценные" },
  { name: "Топаз", image: "https://awros.ru/wp-content/uploads/2019/09/topaz-swiss-oval.jpg", type: "полудрагоценные" },
  { name: "Янтарь", image: "https://amberholl.ru/upload/delight.webpconverter/upload/iblock/03c/naturalnyy_prozrachnyy_yantar_limonnogo_tsveta_s_inklyuzom.jpg.webp?163039579413552", type: "полудрагоценные" },
  { name: "Кварц", image: "https://www.gemselect.com/photos/smoky-quartz/smoky-quartz-gem-636900a.jpg", type: "полудрагоценные" },
  { name: "Берилл", image: "https://www.lazuritd.ru/upload/resize_cache/iblock/32e/1400_0_2/35bqxldekoflp99ij78xdqx4m3c3ry4d.jpg", type: "полудрагоценные" },
  { name: "Аметист", image: "https://planeta-zolota.com.ua/uploads/redactor/5f105a971313b.png", type: "полудрагоценные" },
  { name: "Альмандин", image: "https://gemlovers.ru/assets/img/encyclopedia/almandin/almandin1.png", type: "полудрагоценные" },
  { name: "Аквамарин", image: "https://gemlovers.ru/assets/img/upload/iblock/4af/4af7df3afff6da89ffde994f3c77e4d7.png", type: "полудрагоценные" },
  { name: "Бирюза", image: "https://art-jeweller.ru/images/photos/medium/article57.jpg", type: "полудрагоценные" },
  { name: "Цитрин", image: "https://vesna.shop/upload/iblock/081/0816caecbee4a64afa4b3acb71388424.png", type: "полудрагоценные" },
  { name: "Танзанит", image: "https://uvi.ru/upload/product/655298/-1.jpg", type: "полудрагоценные" },
  { name: "Родонит", image: "https://www.riddgem.se/images/ENV2017042820808.jpg", type: "полудрагоценные" },
  { name: "Циркон", image: "https://gemlovers.ru/assets/img/upload/iblock/4b5/zi%20.png", type: "полудрагоценные" },
  { name: "Гелиодор", image: "https://gemlovers.ru/assets/img/upload/iblock/118/118e60968676e7f278ff70e59541e599.png", type: "полудрагоценные" },
  { name: "Еремеевит", image: "https://www.silver-lines.ru/catalog/silver925/_m_/75928/_p_/pics1b/_t_/759281b.jpeg", type: "полудрагоценные" },
  { name: "Индиголит", image: "https://topgems.com.ua/image/cache/300-300/data/Tourmaline-indigolit.png", type: "полудрагоценные" },
  { name: "Кианит", image: "https://spb.silverlin.ru/wa-data/public/shop/products/63/64/36463/images/87241/87241.750x0.jpg", type: "полудрагоценные" },
  { name: "Морганит", image: "https://juvelirum.ru/wp-content/uploads/2013/10/01_Morganit1-300x300.jpg", type: "полудрагоценные" },
  { name: "Празиолит", image: "https://kamni.guru/images/43600/foto-praziolit.jpg", type: "полудрагоценные" },
  { name: "Рубеллит", image: "https://encyclopedia.silver-lines.ru/images/stones/894.png", type: "полудрагоценные" },
  { name: "Сфен", image: "https://gemlovers.ru/assets/img/upload/iblock/10d/10df49a9ca0be8ff9d80cde5c42aad21.png", type: "полудрагоценные" },
  { name: "Тсаворит", image: "https://gemlovers.ru/assets/img/upload/iblock/e11/e11f005c04ff9e3660d59d27bb271262.png", type: "полудрагоценные" },
];

var currentTab = 'all';

function displayGems(gemsToDisplay) {
  var gemContainer = document.getElementById('gems');
  gemContainer.innerHTML = '';

  gemsToDisplay.forEach(function(gem) {
      var gemDiv = document.createElement('div');
      gemDiv.classList.add('gem');

      var img = document.createElement('img');
      img.src = gem.image;
      gemDiv.appendChild(img);

      var h2 = document.createElement('h2');
      h2.textContent = gem.name;
      gemDiv.appendChild(h2);

      gemContainer.appendChild(gemDiv);
  });
}

function filterGemsByTab() {
  if (currentTab === 'all') {
      return gems;
  } else {
      return gems.filter(function(gem) {
          return gem.type === currentTab;
      });
  }
}

function searchGems() {
  var searchInput = document.getElementById('search');
  var searchTerm = searchInput.value.toLowerCase();

  var filteredGems = filterGemsByTab().filter(function(gem) {
      return gem.name.toLowerCase().includes(searchTerm);
  });

  displayGems(filteredGems);
}

function switchTab(tab) {
  currentTab = tab;
  searchGems();
}

document.getElementById('precious-tab').addEventListener('click', function() { switchTab('драгоценные'); });
document.getElementById('semi-precious-tab').addEventListener('click', function() { switchTab('полудрагоценные'); });
document.getElementById('search').addEventListener('input', searchGems);
displayGems(gems);