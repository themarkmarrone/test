/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_css_app_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _assets_css_app_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_css_app_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_js_renderSearchArea__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _assets_js_sendRequest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);



Object(_assets_js_renderSearchArea__WEBPACK_IMPORTED_MODULE_1__["default"])();
document.querySelector('button').addEventListener('click', _assets_js_sendRequest__WEBPACK_IMPORTED_MODULE_2__["default"]);
document.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') Object(_assets_js_sendRequest__WEBPACK_IMPORTED_MODULE_2__["default"])(event);
});

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return renderSearchArea; });
function renderSearchArea() {
  var script = document.querySelector('script');
  var h1 = document.createElement('h1');
  h1.innerText = 'YouTube Client from Youliya';
  var app = document.createElement('div');
  app.classList.add('app');
  var form = document.createElement('div');
  form.classList.add('form');
  var results = document.createElement('ul');
  results.classList.add('results');
  var label = document.createElement('label');
  label.setAttribute('for', 'search');
  label.innerText = "Let's find intesting videos!";
  var input = document.createElement('input');
  input.setAttribute('id', 'search');
  input.setAttribute('type', 'text');
  input.setAttribute('placeholder', 'Type something');
  var sendBtn = document.createElement('button');
  sendBtn.innerHTML = '<i class="fas fa-search"></i>';
  form.appendChild(label);
  form.appendChild(input);
  form.appendChild(sendBtn);
  var warning = document.createElement('p');
  warning.innerText = "I can't read your thoughts! Please type something!=))";
  warning.classList.add('warning', 'displayNone');
  form.appendChild(warning);
  app.appendChild(h1);
  app.appendChild(form);
  app.appendChild(results);
  document.querySelector('body').insertBefore(app, script);
}

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return sendRequest; });
/* harmony import */ var _getVideos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);

function sendRequest(event) {
  event.preventDefault();
  document.querySelector('.results').innerHTML = '';
  if (document.querySelector('.pagination')) document.querySelector('.pagination').remove();
  var input = document.querySelector('input');
  var warning = document.querySelector('.warning');

  if (!input.value) {
    warning.classList.remove('displayNone');
  }

  if (input.value) {
    if (!warning.classList.contains('displayNone')) warning.classList.add('displayNone');
    Object(_getVideos__WEBPACK_IMPORTED_MODULE_0__["default"])();
  }
}

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getVideos; });
/* harmony import */ var _detectQuantityVideoPerPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _generatePagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16);
/* harmony import */ var _requestConsts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14);
/* harmony import */ var _errorUserInformation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15);




function getVideos() {
  window.videos = [];
  window.numberOfNextVideos = 0;

  var _requestConsts = Object(_requestConsts__WEBPACK_IMPORTED_MODULE_2__["default"])(),
      mainLink = _requestConsts.mainLink,
      API_KEY = _requestConsts.API_KEY,
      searchText = _requestConsts.searchText;

  var searchUrl = "".concat(mainLink, "search?\nkey=").concat(API_KEY, "&type=video&part=snippet&maxResults=15&q=").concat(searchText);
  var chunkVideo = 15;
  var arrayOfVideoId = [];
  var results = document.querySelector('.results');
  results.style.setProperty('--i', 0);
  fetch(searchUrl).then(function (response) {
    return response.json();
  }).then(function (searchJson) {
    window.pageNext = searchJson.nextPageToken;

    for (var i = 0; i < chunkVideo; i += 1) {
      window.videos[window.numberOfNextVideos] = {
        id: searchJson.items[i].id.videoId,
        title: searchJson.items[i].snippet.title,
        imageUrl: searchJson.items[i].snippet.thumbnails.medium.url,
        description: searchJson.items[i].snippet.description,
        author: searchJson.items[i].snippet.channelTitle,
        date: searchJson.items[i].snippet.publishedAt
      };
      window.numberOfNextVideos += 1;
      arrayOfVideoId.push(searchJson.items[i].id.videoId);
    }

    var videosId = arrayOfVideoId.join(',');
    var statisticUrl = "".concat(mainLink, "videos?key=").concat(API_KEY, "&id=").concat(videosId, "&part=snippet,statistics");
    fetch(statisticUrl).then(function (response) {
      return response.json();
    }).then(function (statisticJson) {
      window.numberOfNextVideos -= chunkVideo;

      for (var _i = 0; _i < chunkVideo; _i += 1) {
        window.videos[window.numberOfNextVideos].view = statisticJson.items[_i].statistics.viewCount;
        window.numberOfNextVideos += 1;
      }

      Object(_detectQuantityVideoPerPage__WEBPACK_IMPORTED_MODULE_0__["default"])(window.videos);
      Object(_generatePagination__WEBPACK_IMPORTED_MODULE_1__["default"])();
    }).catch(function () {
      Object(_errorUserInformation__WEBPACK_IMPORTED_MODULE_3__["default"])();
    });
  });
}

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return detectQuantityVideoPerPage; });
/* harmony import */ var _renderPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);


function detectQuantityVideoPerPage(videos) {
  var mqls = [window.matchMedia('(max-width: 480px)'), window.matchMedia('(min-width: 481px)'), window.matchMedia('(min-width: 700px)'), window.matchMedia('(min-width: 1024px)')];
  var videoPerScreen;
  if (mqls[0].matches) videoPerScreen = 1;
  if (mqls[1].matches) videoPerScreen = 2;
  if (mqls[2].matches) videoPerScreen = 3;
  if (mqls[3].matches) videoPerScreen = 4;
  Object(_renderPage__WEBPACK_IMPORTED_MODULE_0__["default"])(videos, videoPerScreen);
  Object(_slider__WEBPACK_IMPORTED_MODULE_1__["default"])();

  function mediaQueryResponse() {
    var currentVideoPerScreen = videoPerScreen;
    var nextVideoPerScreen;
    var results = document.querySelector('.results');
    var currentPage = getComputedStyle(results).getPropertyValue('--i');
    var indexCurrentVideo = currentPage * currentVideoPerScreen;
    if (mqls[0].matches) nextVideoPerScreen = 1;
    if (mqls[1].matches) nextVideoPerScreen = 2;
    if (mqls[2].matches) nextVideoPerScreen = 3;
    if (mqls[3].matches) nextVideoPerScreen = 4;

    if (nextVideoPerScreen !== videoPerScreen) {
      var newPageNumber = Math.ceil((indexCurrentVideo + 1) / nextVideoPerScreen) - 1;
      results.style.setProperty('--i', newPageNumber);
      videoPerScreen = nextVideoPerScreen;
      Object(_renderPage__WEBPACK_IMPORTED_MODULE_0__["default"])(videos, videoPerScreen);
      Object(_slider__WEBPACK_IMPORTED_MODULE_1__["default"])();
    }
  }

  mediaQueryResponse();

  for (var i = 0; i < mqls.length; i += 1) {
    mqls[i].addListener(mediaQueryResponse);
  }
}

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return renderPage; });
/* harmony import */ var _renderVideoCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);

function renderPage(videos, quantityVideosPerPage) {
  var results = document.querySelector('.results');
  results.innerHTML = '';
  var pages = Math.ceil(videos.length / quantityVideosPerPage);

  for (var i = 0; i < pages; i += 1) {
    var page = document.createElement('div');

    for (var j = i * quantityVideosPerPage; j < (i + 1) * quantityVideosPerPage; j += 1) {
      if (videos[j] === undefined) break;
      var videoCard = Object(_renderVideoCard__WEBPACK_IMPORTED_MODULE_0__["default"])(videos[j]);
      page.appendChild(videoCard);
    }

    results.appendChild(page);
  }
}

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return renderVideoCard; });
function renderVideoCard(video) {
  var videoCard = document.createElement('li');
  videoCard.classList.add('videoCard');
  var titleOfVideo = document.createElement('h2');
  var link = document.createElement('a');
  link.setAttribute('href', "https://www.youtube.com/watch?v=".concat(video.id));
  link.innerText = video.title;
  titleOfVideo.appendChild(link);
  var imageOfVideo = document.createElement('img');
  imageOfVideo.setAttribute('src', video.imageUrl);
  imageOfVideo.setAttribute('alt', "Video's preview");
  var descriptionOfVideo = document.createElement('p');
  descriptionOfVideo.innerHTML = video.description;
  descriptionOfVideo.classList.add('description');
  var authorOfVideo = document.createElement('span');
  authorOfVideo.innerHTML = video.author;
  authorOfVideo.classList.add('authorOfVideo');
  var datePublishedOfVideo = document.createElement('span');
  var date = new Date(video.date);
  var publishDate = "".concat(date.getFullYear(), "-").concat(date.getMonth() + 1, "-").concat(date.getDate());
  datePublishedOfVideo.innerText = publishDate;
  datePublishedOfVideo.classList.add('datePublishedVideo');
  var viewOfVideo = document.createElement('span');
  var rate = +video.view;
  viewOfVideo.innerText = rate.toLocaleString();
  viewOfVideo.classList.add('viewOfVideo');
  videoCard.appendChild(imageOfVideo);
  videoCard.appendChild(titleOfVideo);
  videoCard.appendChild(authorOfVideo);
  videoCard.appendChild(datePublishedOfVideo);
  videoCard.appendChild(viewOfVideo);
  videoCard.appendChild(descriptionOfVideo);
  return videoCard;
}

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return slider; });
/* harmony import */ var _getNewVideos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);

function slider() {
  var results = document.querySelector('.results');
  var items = results.children.length;
  var i = +getComputedStyle(results).getPropertyValue('--i');
  var x0 = null;
  var locked = false;
  var w;

  function unify(event) {
    return event.changedTouches ? event.changedTouches[0] : event;
  }

  function lock(event) {
    x0 = unify(event).clientX;
    results.classList.toggle('smooth', !(locked = true));
    var tultip = document.querySelector('.paginationButton-1');
    tultip.innerText = i + 1;
  }

  function drag(event) {
    event.preventDefault();
    if (locked) results.style.setProperty('--tx', "".concat(Math.round(unify(event).clientX - x0), "px"));
  }

  function size() {
    w = window.innerWidth;
  }

  function move(event) {
    if (locked) {
      var dx = unify(event).clientX - x0;
      var s = Math.sign(dx);
      var f = +(s * dx / w).toFixed(2);

      if ((i > 0 || s < 0) && (i < items - 1 || s > 0) && f > 0.05) {
        results.style.setProperty('--i', i -= s);
        f = 1 - f;
      }

      results.style.setProperty('--tx', '0px');
      results.style.setProperty('--f', f);
      results.classList.toggle('smooth', !(locked = false));
      x0 = null;
      var tultip = document.querySelector('.paginationButton-1');
      tultip.innerHTML = '';
      if (items - i === 2) Object(_getNewVideos__WEBPACK_IMPORTED_MODULE_0__["default"])();
    }
  }

  results.style.setProperty('--items', items);
  size();
  results.addEventListener('mousedown', lock, false);
  results.addEventListener('touchstart', lock, false);
  results.addEventListener('mousemove', drag, false);
  results.addEventListener('touchmove', drag, false);
  results.addEventListener('mouseup', move, false);
  results.addEventListener('mouseleave', move, false);
  results.addEventListener('touchend', move, false);
}

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getNewVideos; });
/* harmony import */ var _requestConsts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var _detectQuantityVideoPerPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* harmony import */ var _errorUserInformation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15);



function getNewVideos() {
  var _requestConsts = Object(_requestConsts__WEBPACK_IMPORTED_MODULE_0__["default"])(),
      mainLink = _requestConsts.mainLink,
      API_KEY = _requestConsts.API_KEY,
      searchText = _requestConsts.searchText;

  var nextPageUrl = "".concat(mainLink, "search?pageToken=").concat(window.pageNext, "&key=").concat(API_KEY, "&type=video&part=snippet&maxResults=15&q=").concat(searchText);
  var chunkVideo = 15;
  var arrayOfVideoId = [];
  fetch(nextPageUrl).then(function (response) {
    return response.json();
  }).then(function (nextVideosJson) {
    window.pageNext = nextVideosJson.nextPageToken;

    for (var i = 0; i < chunkVideo; i += 1) {
      window.videos[window.numberOfNextVideos] = {
        id: nextVideosJson.items[i].id.videoId,
        title: nextVideosJson.items[i].snippet.title,
        imageUrl: nextVideosJson.items[i].snippet.thumbnails.medium.url,
        description: nextVideosJson.items[i].snippet.description,
        author: nextVideosJson.items[i].snippet.channelTitle,
        date: nextVideosJson.items[i].snippet.publishedAt
      };
      window.numberOfNextVideos += 1;
      arrayOfVideoId.push(nextVideosJson.items[i].id.videoId);
    }

    var videosId = arrayOfVideoId.join(',');
    var statisticUrl = "".concat(mainLink, "videos?key=").concat(API_KEY, "&id=").concat(videosId, "&part=snippet,statistics");
    fetch(statisticUrl).then(function (response) {
      return response.json();
    }).then(function (statisticJson) {
      window.numberOfNextVideos -= chunkVideo;

      for (var _i = 0; _i < chunkVideo; _i += 1) {
        window.videos[window.numberOfNextVideos].view = statisticJson.items[_i].statistics.viewCount;
        window.numberOfNextVideos += 1;
      }

      Object(_detectQuantityVideoPerPage__WEBPACK_IMPORTED_MODULE_1__["default"])(window.videos);
    }).catch(function () {
      Object(_errorUserInformation__WEBPACK_IMPORTED_MODULE_2__["default"])();
    });
  });
}

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return requestConsts; });
function requestConsts() {
  var input = document.querySelector('#search');
  var mainLink = 'https://www.googleapis.com/youtube/v3/';
  var API_KEY = 'AIzaSyAuwJ3x6AK1GpqixwSrEp4arK2DeVW6mtk';
  var searchText = encodeURIComponent(input.value).replace(/%20/g, '+');
  return {
    mainLink: mainLink,
    API_KEY: API_KEY,
    searchText: searchText
  };
}

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return errorUserInformation; });
function errorUserInformation() {
  var error = document.createElement('p');
  error.innerText = 'Something went wrong...';
  error.classList.add('error');
  document.querySelector('.results').appendChild(error);
}

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return generatePagination; });
/* harmony import */ var _getNewVideos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);

function generatePagination() {
  var pagination = document.createElement('ul');
  pagination.classList.add('pagination');
  var blob = document.createElement('li');
  var btn = document.createElement('button');
  btn.setAttribute('tabindex', '0');
  var fragment = document.createDocumentFragment('div');

  for (var i = 0; i < 3; i += 1) {
    var blobItem = blob.cloneNode();
    var button = btn.cloneNode();
    button.classList.add("paginationButton-".concat(i));

    if (i === 0) {
      button.innerText = '<';
    }

    if (i === 2) {
      button.innerText = '>';
    }

    blobItem.appendChild(button);
    fragment.appendChild(blobItem);
  }

  pagination.appendChild(fragment);
  var app = document.querySelector('.app');
  app.appendChild(pagination);
  var tultip = document.querySelector('.paginationButton-1');
  var prevPage = document.querySelector('.paginationButton-0');
  prevPage.addEventListener('click', function (event) {
    event.preventDefault();
    var results = document.querySelector('.results');
    var i = +getComputedStyle(results).getPropertyValue('--i');

    if (i > 0) {
      results.style.setProperty('--i', i -= 1);
      tultip.innerHTML = "".concat(i + 1);
    }
  });
  var nextPage = document.querySelector('.paginationButton-2');
  nextPage.addEventListener('click', function (event) {
    event.preventDefault();
    var results = document.querySelector('.results');
    var i = +getComputedStyle(results).getPropertyValue('--i');
    results.style.setProperty('--i', i += 1);
    tultip.innerHTML = "".concat(i + 1);
    var items = results.children.length;
    if (items - i === 2) Object(_getNewVideos__WEBPACK_IMPORTED_MODULE_0__["default"])();
  });
}

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jc3MvYXBwLmNzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVuZGVyU2VhcmNoQXJlYS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvc2VuZFJlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2dldFZpZGVvcy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZGV0ZWN0UXVhbnRpdHlWaWRlb1BlclBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3JlbmRlclBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3JlbmRlclZpZGVvQ2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvc2xpZGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9nZXROZXdWaWRlb3MuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3JlcXVlc3RDb25zdHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2Vycm9yVXNlckluZm9ybWF0aW9uLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9nZW5lcmF0ZVBhZ2luYXRpb24uanMiXSwibmFtZXMiOlsicmVuZGVyU2VhcmNoQXJlYSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJzZW5kUmVxdWVzdCIsImV2ZW50Iiwia2V5Iiwic2NyaXB0IiwiaDEiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJUZXh0IiwiYXBwIiwiY2xhc3NMaXN0IiwiYWRkIiwiZm9ybSIsInJlc3VsdHMiLCJsYWJlbCIsInNldEF0dHJpYnV0ZSIsImlucHV0Iiwic2VuZEJ0biIsImlubmVySFRNTCIsImFwcGVuZENoaWxkIiwid2FybmluZyIsImluc2VydEJlZm9yZSIsInByZXZlbnREZWZhdWx0IiwicmVtb3ZlIiwidmFsdWUiLCJjb250YWlucyIsImdldFZpZGVvcyIsIndpbmRvdyIsInZpZGVvcyIsIm51bWJlck9mTmV4dFZpZGVvcyIsInJlcXVlc3RDb25zdHMiLCJtYWluTGluayIsIkFQSV9LRVkiLCJzZWFyY2hUZXh0Iiwic2VhcmNoVXJsIiwiY2h1bmtWaWRlbyIsImFycmF5T2ZWaWRlb0lkIiwic3R5bGUiLCJzZXRQcm9wZXJ0eSIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsInNlYXJjaEpzb24iLCJwYWdlTmV4dCIsIm5leHRQYWdlVG9rZW4iLCJpIiwiaWQiLCJpdGVtcyIsInZpZGVvSWQiLCJ0aXRsZSIsInNuaXBwZXQiLCJpbWFnZVVybCIsInRodW1ibmFpbHMiLCJtZWRpdW0iLCJ1cmwiLCJkZXNjcmlwdGlvbiIsImF1dGhvciIsImNoYW5uZWxUaXRsZSIsImRhdGUiLCJwdWJsaXNoZWRBdCIsInB1c2giLCJ2aWRlb3NJZCIsImpvaW4iLCJzdGF0aXN0aWNVcmwiLCJzdGF0aXN0aWNKc29uIiwidmlldyIsInN0YXRpc3RpY3MiLCJ2aWV3Q291bnQiLCJkZXRlY3RRdWFudGl0eVZpZGVvUGVyUGFnZSIsImdlbmVyYXRlUGFnaW5hdGlvbiIsImNhdGNoIiwiZXJyb3JVc2VySW5mb3JtYXRpb24iLCJtcWxzIiwibWF0Y2hNZWRpYSIsInZpZGVvUGVyU2NyZWVuIiwibWF0Y2hlcyIsInJlbmRlclBhZ2UiLCJzbGlkZXIiLCJtZWRpYVF1ZXJ5UmVzcG9uc2UiLCJjdXJyZW50VmlkZW9QZXJTY3JlZW4iLCJuZXh0VmlkZW9QZXJTY3JlZW4iLCJjdXJyZW50UGFnZSIsImdldENvbXB1dGVkU3R5bGUiLCJnZXRQcm9wZXJ0eVZhbHVlIiwiaW5kZXhDdXJyZW50VmlkZW8iLCJuZXdQYWdlTnVtYmVyIiwiTWF0aCIsImNlaWwiLCJsZW5ndGgiLCJhZGRMaXN0ZW5lciIsInF1YW50aXR5VmlkZW9zUGVyUGFnZSIsInBhZ2VzIiwicGFnZSIsImoiLCJ1bmRlZmluZWQiLCJ2aWRlb0NhcmQiLCJyZW5kZXJWaWRlb0NhcmQiLCJ2aWRlbyIsInRpdGxlT2ZWaWRlbyIsImxpbmsiLCJpbWFnZU9mVmlkZW8iLCJkZXNjcmlwdGlvbk9mVmlkZW8iLCJhdXRob3JPZlZpZGVvIiwiZGF0ZVB1Ymxpc2hlZE9mVmlkZW8iLCJEYXRlIiwicHVibGlzaERhdGUiLCJnZXRGdWxsWWVhciIsImdldE1vbnRoIiwiZ2V0RGF0ZSIsInZpZXdPZlZpZGVvIiwicmF0ZSIsInRvTG9jYWxlU3RyaW5nIiwiY2hpbGRyZW4iLCJ4MCIsImxvY2tlZCIsInciLCJ1bmlmeSIsImNoYW5nZWRUb3VjaGVzIiwibG9jayIsImNsaWVudFgiLCJ0b2dnbGUiLCJ0dWx0aXAiLCJkcmFnIiwicm91bmQiLCJzaXplIiwiaW5uZXJXaWR0aCIsIm1vdmUiLCJkeCIsInMiLCJzaWduIiwiZiIsInRvRml4ZWQiLCJnZXROZXdWaWRlb3MiLCJuZXh0UGFnZVVybCIsIm5leHRWaWRlb3NKc29uIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwicmVwbGFjZSIsImVycm9yIiwicGFnaW5hdGlvbiIsImJsb2IiLCJidG4iLCJmcmFnbWVudCIsImNyZWF0ZURvY3VtZW50RnJhZ21lbnQiLCJibG9iSXRlbSIsImNsb25lTm9kZSIsImJ1dHRvbiIsInByZXZQYWdlIiwibmV4dFBhZ2UiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFD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LENBQTBCLEtBQTFCLEVBQWlDUSxDQUFDLElBQUksQ0FBdEM7QUFDQTRFLFVBQU0sQ0FBQ3hHLFNBQVAsYUFBc0I0QixDQUFDLEdBQUcsQ0FBMUI7QUFDQSxRQUFNRSxLQUFLLEdBQUduQyxPQUFPLENBQUNvRyxRQUFSLENBQWlCeEIsTUFBL0I7QUFDQSxRQUFJekMsS0FBSyxHQUFHRixDQUFSLEtBQWMsQ0FBbEIsRUFBcUJ1Riw2REFBWTtBQUNwQyxHQVJEO0FBU0gsQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgJy4vYXNzZXRzL2Nzcy9hcHAuY3NzJztcbmltcG9ydCByZW5kZXJTZWFyY2hBcmVhIGZyb20gJy4vYXNzZXRzL2pzL3JlbmRlclNlYXJjaEFyZWEnO1xuaW1wb3J0IHNlbmRSZXF1ZXN0IGZyb20gJy4vYXNzZXRzL2pzL3NlbmRSZXF1ZXN0JztcblxucmVuZGVyU2VhcmNoQXJlYSgpO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNlbmRSZXF1ZXN0KTtcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXZlbnQpID0+IHtcbiAgICBpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInKSBzZW5kUmVxdWVzdChldmVudCk7XG59KTtcbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyU2VhcmNoQXJlYSgpIHtcbiAgICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzY3JpcHQnKTtcbiAgICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgaDEuaW5uZXJUZXh0ID0gJ1lvdVR1YmUgQ2xpZW50IGZyb20gWW91bGl5YSc7XG4gICAgY29uc3QgYXBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYXBwLmNsYXNzTGlzdC5hZGQoJ2FwcCcpO1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb3JtLmNsYXNzTGlzdC5hZGQoJ2Zvcm0nKTtcbiAgICBjb25zdCByZXN1bHRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICByZXN1bHRzLmNsYXNzTGlzdC5hZGQoJ3Jlc3VsdHMnKTtcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnc2VhcmNoJyk7XG4gICAgbGFiZWwuaW5uZXJUZXh0ID0gXCJMZXQncyBmaW5kIGludGVzdGluZyB2aWRlb3MhXCI7XG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAnc2VhcmNoJyk7XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1R5cGUgc29tZXRoaW5nJyk7XG4gICAgY29uc3Qgc2VuZEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHNlbmRCdG4uaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiZmFzIGZhLXNlYXJjaFwiPjwvaT4nO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoc2VuZEJ0bik7XG4gICAgY29uc3Qgd2FybmluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB3YXJuaW5nLmlubmVyVGV4dCA9IFwiSSBjYW4ndCByZWFkIHlvdXIgdGhvdWdodHMhIFBsZWFzZSB0eXBlIHNvbWV0aGluZyE9KSlcIjtcbiAgICB3YXJuaW5nLmNsYXNzTGlzdC5hZGQoJ3dhcm5pbmcnLCAnZGlzcGxheU5vbmUnKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHdhcm5pbmcpO1xuICAgIGFwcC5hcHBlbmRDaGlsZChoMSk7XG4gICAgYXBwLmFwcGVuZENoaWxkKGZvcm0pO1xuICAgIGFwcC5hcHBlbmRDaGlsZChyZXN1bHRzKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuaW5zZXJ0QmVmb3JlKGFwcCwgc2NyaXB0KTtcbn1cbiIsImltcG9ydCBnZXRWaWRlb3MgZnJvbSAnLi9nZXRWaWRlb3MnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZW5kUmVxdWVzdChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc3VsdHMnKS5pbm5lckhUTUwgPSAnJztcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhZ2luYXRpb24nKSkgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhZ2luYXRpb24nKS5yZW1vdmUoKTtcblxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXQnKTtcbiAgICBjb25zdCB3YXJuaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndhcm5pbmcnKTtcblxuICAgIGlmICghaW5wdXQudmFsdWUpIHtcbiAgICAgICAgd2FybmluZy5jbGFzc0xpc3QucmVtb3ZlKCdkaXNwbGF5Tm9uZScpO1xuICAgIH1cbiAgICBpZiAoaW5wdXQudmFsdWUpIHtcbiAgICAgICAgaWYgKCF3YXJuaW5nLmNsYXNzTGlzdC5jb250YWlucygnZGlzcGxheU5vbmUnKSkgd2FybmluZy5jbGFzc0xpc3QuYWRkKCdkaXNwbGF5Tm9uZScpO1xuICAgICAgICBnZXRWaWRlb3MoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgZGV0ZWN0UXVhbnRpdHlWaWRlb1BlclBhZ2UgZnJvbSAnLi9kZXRlY3RRdWFudGl0eVZpZGVvUGVyUGFnZSc7XG5pbXBvcnQgZ2VuZXJhdGVQYWdpbmF0aW9uIGZyb20gJy4vZ2VuZXJhdGVQYWdpbmF0aW9uJztcbmltcG9ydCByZXF1ZXN0Q29uc3RzIGZyb20gJy4vcmVxdWVzdENvbnN0cyc7XG5pbXBvcnQgZXJyb3JVc2VySW5mb3JtYXRpb24gZnJvbSAnLi9lcnJvclVzZXJJbmZvcm1hdGlvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFZpZGVvcygpIHtcbiAgICB3aW5kb3cudmlkZW9zID0gW107XG4gICAgd2luZG93Lm51bWJlck9mTmV4dFZpZGVvcyA9IDA7XG4gICAgY29uc3Qge1xuICAgICAgICBtYWluTGluaywgQVBJX0tFWSwgc2VhcmNoVGV4dCxcbiAgICB9ID0gcmVxdWVzdENvbnN0cygpO1xuICAgIGNvbnN0IHNlYXJjaFVybCA9IGAke21haW5MaW5rfXNlYXJjaD9cbmtleT0ke0FQSV9LRVl9JnR5cGU9dmlkZW8mcGFydD1zbmlwcGV0Jm1heFJlc3VsdHM9MTUmcT0ke3NlYXJjaFRleHR9YDtcbiAgICBjb25zdCBjaHVua1ZpZGVvID0gMTU7XG4gICAgY29uc3QgYXJyYXlPZlZpZGVvSWQgPSBbXTtcbiAgICBjb25zdCByZXN1bHRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc3VsdHMnKTtcbiAgICByZXN1bHRzLnN0eWxlLnNldFByb3BlcnR5KCctLWknLCAwKTtcbiAgICBmZXRjaChzZWFyY2hVcmwpXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgLnRoZW4oKHNlYXJjaEpzb24pID0+IHtcbiAgICAgICAgICAgIHdpbmRvdy5wYWdlTmV4dCA9IHNlYXJjaEpzb24ubmV4dFBhZ2VUb2tlbjtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2h1bmtWaWRlbzsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LnZpZGVvc1t3aW5kb3cubnVtYmVyT2ZOZXh0VmlkZW9zXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IHNlYXJjaEpzb24uaXRlbXNbaV0uaWQudmlkZW9JZCxcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHNlYXJjaEpzb24uaXRlbXNbaV0uc25pcHBldC50aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VVcmw6IHNlYXJjaEpzb24uaXRlbXNbaV0uc25pcHBldC50aHVtYm5haWxzLm1lZGl1bS51cmwsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBzZWFyY2hKc29uLml0ZW1zW2ldLnNuaXBwZXQuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgICAgIGF1dGhvcjogc2VhcmNoSnNvbi5pdGVtc1tpXS5zbmlwcGV0LmNoYW5uZWxUaXRsZSxcbiAgICAgICAgICAgICAgICAgICAgZGF0ZTogc2VhcmNoSnNvbi5pdGVtc1tpXS5zbmlwcGV0LnB1Ymxpc2hlZEF0LFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgd2luZG93Lm51bWJlck9mTmV4dFZpZGVvcyArPSAxO1xuICAgICAgICAgICAgICAgIGFycmF5T2ZWaWRlb0lkLnB1c2goc2VhcmNoSnNvbi5pdGVtc1tpXS5pZC52aWRlb0lkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHZpZGVvc0lkID0gYXJyYXlPZlZpZGVvSWQuam9pbignLCcpO1xuICAgICAgICAgICAgY29uc3Qgc3RhdGlzdGljVXJsID0gYCR7bWFpbkxpbmt9dmlkZW9zP2tleT0ke0FQSV9LRVl9JmlkPSR7dmlkZW9zSWR9JnBhcnQ9c25pcHBldCxzdGF0aXN0aWNzYDtcbiAgICAgICAgICAgIGZldGNoKHN0YXRpc3RpY1VybClcbiAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgICAgICAgICAgLnRoZW4oKHN0YXRpc3RpY0pzb24pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93Lm51bWJlck9mTmV4dFZpZGVvcyAtPSBjaHVua1ZpZGVvO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNodW5rVmlkZW87IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnZpZGVvc1t3aW5kb3cubnVtYmVyT2ZOZXh0VmlkZW9zXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC52aWV3ID0gc3RhdGlzdGljSnNvbi5pdGVtc1tpXS5zdGF0aXN0aWNzLnZpZXdDb3VudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5udW1iZXJPZk5leHRWaWRlb3MgKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBkZXRlY3RRdWFudGl0eVZpZGVvUGVyUGFnZSh3aW5kb3cudmlkZW9zKTtcbiAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVQYWdpbmF0aW9uKCk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBlcnJvclVzZXJJbmZvcm1hdGlvbigpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbn1cbiIsImltcG9ydCByZW5kZXJQYWdlIGZyb20gJy4vcmVuZGVyUGFnZSc7XG5pbXBvcnQgc2xpZGVyIGZyb20gJy4vc2xpZGVyJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGV0ZWN0UXVhbnRpdHlWaWRlb1BlclBhZ2UodmlkZW9zKSB7XG4gICAgY29uc3QgbXFscyA9IFtcbiAgICAgICAgd2luZG93Lm1hdGNoTWVkaWEoJyhtYXgtd2lkdGg6IDQ4MHB4KScpLFxuICAgICAgICB3aW5kb3cubWF0Y2hNZWRpYSgnKG1pbi13aWR0aDogNDgxcHgpJyksXG4gICAgICAgIHdpbmRvdy5tYXRjaE1lZGlhKCcobWluLXdpZHRoOiA3MDBweCknKSxcbiAgICAgICAgd2luZG93Lm1hdGNoTWVkaWEoJyhtaW4td2lkdGg6IDEwMjRweCknKSxcbiAgICBdO1xuXG4gICAgbGV0IHZpZGVvUGVyU2NyZWVuO1xuICAgIGlmIChtcWxzWzBdLm1hdGNoZXMpIHZpZGVvUGVyU2NyZWVuID0gMTtcbiAgICBpZiAobXFsc1sxXS5tYXRjaGVzKSB2aWRlb1BlclNjcmVlbiA9IDI7XG4gICAgaWYgKG1xbHNbMl0ubWF0Y2hlcykgdmlkZW9QZXJTY3JlZW4gPSAzO1xuICAgIGlmIChtcWxzWzNdLm1hdGNoZXMpIHZpZGVvUGVyU2NyZWVuID0gNDtcbiAgICByZW5kZXJQYWdlKHZpZGVvcywgdmlkZW9QZXJTY3JlZW4pO1xuICAgIHNsaWRlcigpO1xuXG4gICAgZnVuY3Rpb24gbWVkaWFRdWVyeVJlc3BvbnNlKCkge1xuICAgICAgICBjb25zdCBjdXJyZW50VmlkZW9QZXJTY3JlZW4gPSB2aWRlb1BlclNjcmVlbjtcbiAgICAgICAgbGV0IG5leHRWaWRlb1BlclNjcmVlbjtcbiAgICAgICAgY29uc3QgcmVzdWx0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXN1bHRzJyk7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRQYWdlID0gZ2V0Q29tcHV0ZWRTdHlsZShyZXN1bHRzKS5nZXRQcm9wZXJ0eVZhbHVlKCctLWknKTtcbiAgICAgICAgY29uc3QgaW5kZXhDdXJyZW50VmlkZW8gPSBjdXJyZW50UGFnZSAqIGN1cnJlbnRWaWRlb1BlclNjcmVlbjtcbiAgICAgICAgaWYgKG1xbHNbMF0ubWF0Y2hlcykgbmV4dFZpZGVvUGVyU2NyZWVuID0gMTtcbiAgICAgICAgaWYgKG1xbHNbMV0ubWF0Y2hlcykgbmV4dFZpZGVvUGVyU2NyZWVuID0gMjtcbiAgICAgICAgaWYgKG1xbHNbMl0ubWF0Y2hlcykgbmV4dFZpZGVvUGVyU2NyZWVuID0gMztcbiAgICAgICAgaWYgKG1xbHNbM10ubWF0Y2hlcykgbmV4dFZpZGVvUGVyU2NyZWVuID0gNDtcbiAgICAgICAgaWYgKG5leHRWaWRlb1BlclNjcmVlbiAhPT0gdmlkZW9QZXJTY3JlZW4pIHtcbiAgICAgICAgICAgIGNvbnN0IG5ld1BhZ2VOdW1iZXIgPSBNYXRoLmNlaWwoKGluZGV4Q3VycmVudFZpZGVvICsgMSkgLyBuZXh0VmlkZW9QZXJTY3JlZW4pIC0gMTtcbiAgICAgICAgICAgIHJlc3VsdHMuc3R5bGUuc2V0UHJvcGVydHkoJy0taScsIG5ld1BhZ2VOdW1iZXIpO1xuICAgICAgICAgICAgdmlkZW9QZXJTY3JlZW4gPSBuZXh0VmlkZW9QZXJTY3JlZW47XG4gICAgICAgICAgICByZW5kZXJQYWdlKHZpZGVvcywgdmlkZW9QZXJTY3JlZW4pO1xuICAgICAgICAgICAgc2xpZGVyKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBtZWRpYVF1ZXJ5UmVzcG9uc2UoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1xbHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgbXFsc1tpXS5hZGRMaXN0ZW5lcihtZWRpYVF1ZXJ5UmVzcG9uc2UpO1xuICAgIH1cbn1cbiIsImltcG9ydCByZW5kZXJWaWRlb0NhcmQgZnJvbSAnLi9yZW5kZXJWaWRlb0NhcmQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXJQYWdlKHZpZGVvcywgcXVhbnRpdHlWaWRlb3NQZXJQYWdlKSB7XG4gICAgY29uc3QgcmVzdWx0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXN1bHRzJyk7XG4gICAgcmVzdWx0cy5pbm5lckhUTUwgPSAnJztcbiAgICBjb25zdCBwYWdlcyA9IE1hdGguY2VpbCh2aWRlb3MubGVuZ3RoIC8gcXVhbnRpdHlWaWRlb3NQZXJQYWdlKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhZ2VzOyBpICs9IDEpIHtcbiAgICAgICAgY29uc3QgcGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBmb3IgKGxldCBqID0gaSAqIHF1YW50aXR5VmlkZW9zUGVyUGFnZTsgaiA8IChpICsgMSkgKiBxdWFudGl0eVZpZGVvc1BlclBhZ2U7IGogKz0gMSkge1xuICAgICAgICAgICAgaWYgKHZpZGVvc1tqXSA9PT0gdW5kZWZpbmVkKSBicmVhaztcbiAgICAgICAgICAgIGNvbnN0IHZpZGVvQ2FyZCA9IHJlbmRlclZpZGVvQ2FyZCh2aWRlb3Nbal0pO1xuICAgICAgICAgICAgcGFnZS5hcHBlbmRDaGlsZCh2aWRlb0NhcmQpO1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdHMuYXBwZW5kQ2hpbGQocGFnZSk7XG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyVmlkZW9DYXJkKHZpZGVvKSB7XG4gICAgY29uc3QgdmlkZW9DYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICB2aWRlb0NhcmQuY2xhc3NMaXN0LmFkZCgndmlkZW9DYXJkJyk7XG4gICAgY29uc3QgdGl0bGVPZlZpZGVvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGxpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgYGh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9JHt2aWRlby5pZH1gKTtcbiAgICBsaW5rLmlubmVyVGV4dCA9IHZpZGVvLnRpdGxlO1xuICAgIHRpdGxlT2ZWaWRlby5hcHBlbmRDaGlsZChsaW5rKTtcbiAgICBjb25zdCBpbWFnZU9mVmlkZW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpbWFnZU9mVmlkZW8uc2V0QXR0cmlidXRlKCdzcmMnLCB2aWRlby5pbWFnZVVybCk7XG4gICAgaW1hZ2VPZlZpZGVvLnNldEF0dHJpYnV0ZSgnYWx0JywgXCJWaWRlbydzIHByZXZpZXdcIik7XG4gICAgY29uc3QgZGVzY3JpcHRpb25PZlZpZGVvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGRlc2NyaXB0aW9uT2ZWaWRlby5pbm5lckhUTUwgPSB2aWRlby5kZXNjcmlwdGlvbjtcbiAgICBkZXNjcmlwdGlvbk9mVmlkZW8uY2xhc3NMaXN0LmFkZCgnZGVzY3JpcHRpb24nKTtcbiAgICBjb25zdCBhdXRob3JPZlZpZGVvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGF1dGhvck9mVmlkZW8uaW5uZXJIVE1MID0gdmlkZW8uYXV0aG9yO1xuICAgIGF1dGhvck9mVmlkZW8uY2xhc3NMaXN0LmFkZCgnYXV0aG9yT2ZWaWRlbycpO1xuICAgIGNvbnN0IGRhdGVQdWJsaXNoZWRPZlZpZGVvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh2aWRlby5kYXRlKTtcbiAgICBjb25zdCBwdWJsaXNoRGF0ZSA9IGAke2RhdGUuZ2V0RnVsbFllYXIoKX0tJHtkYXRlLmdldE1vbnRoKCkgKyAxfS0ke2RhdGUuZ2V0RGF0ZSgpfWA7XG4gICAgZGF0ZVB1Ymxpc2hlZE9mVmlkZW8uaW5uZXJUZXh0ID0gcHVibGlzaERhdGU7XG4gICAgZGF0ZVB1Ymxpc2hlZE9mVmlkZW8uY2xhc3NMaXN0LmFkZCgnZGF0ZVB1Ymxpc2hlZFZpZGVvJyk7XG4gICAgY29uc3Qgdmlld09mVmlkZW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgY29uc3QgcmF0ZSA9ICt2aWRlby52aWV3O1xuICAgIHZpZXdPZlZpZGVvLmlubmVyVGV4dCA9IHJhdGUudG9Mb2NhbGVTdHJpbmcoKTtcbiAgICB2aWV3T2ZWaWRlby5jbGFzc0xpc3QuYWRkKCd2aWV3T2ZWaWRlbycpO1xuICAgIHZpZGVvQ2FyZC5hcHBlbmRDaGlsZChpbWFnZU9mVmlkZW8pO1xuICAgIHZpZGVvQ2FyZC5hcHBlbmRDaGlsZCh0aXRsZU9mVmlkZW8pO1xuICAgIHZpZGVvQ2FyZC5hcHBlbmRDaGlsZChhdXRob3JPZlZpZGVvKTtcbiAgICB2aWRlb0NhcmQuYXBwZW5kQ2hpbGQoZGF0ZVB1Ymxpc2hlZE9mVmlkZW8pO1xuICAgIHZpZGVvQ2FyZC5hcHBlbmRDaGlsZCh2aWV3T2ZWaWRlbyk7XG4gICAgdmlkZW9DYXJkLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uT2ZWaWRlbyk7XG4gICAgcmV0dXJuIHZpZGVvQ2FyZDtcbn1cbiIsImltcG9ydCBnZXROZXdWaWRlb3MgZnJvbSAnLi9nZXROZXdWaWRlb3MnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzbGlkZXIoKSB7XG4gICAgY29uc3QgcmVzdWx0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXN1bHRzJyk7XG4gICAgY29uc3QgaXRlbXMgPSByZXN1bHRzLmNoaWxkcmVuLmxlbmd0aDtcblxuICAgIGxldCBpID0gK2dldENvbXB1dGVkU3R5bGUocmVzdWx0cykuZ2V0UHJvcGVydHlWYWx1ZSgnLS1pJyk7XG4gICAgbGV0IHgwID0gbnVsbDtcbiAgICBsZXQgbG9ja2VkID0gZmFsc2U7XG4gICAgbGV0IHc7XG5cbiAgICBmdW5jdGlvbiB1bmlmeShldmVudCkge1xuICAgICAgICByZXR1cm4gZXZlbnQuY2hhbmdlZFRvdWNoZXMgPyBldmVudC5jaGFuZ2VkVG91Y2hlc1swXSA6IGV2ZW50O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxvY2soZXZlbnQpIHtcbiAgICAgICAgeDAgPSB1bmlmeShldmVudCkuY2xpZW50WDtcbiAgICAgICAgcmVzdWx0cy5jbGFzc0xpc3QudG9nZ2xlKCdzbW9vdGgnLCAhKGxvY2tlZCA9IHRydWUpKTtcbiAgICAgICAgY29uc3QgdHVsdGlwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhZ2luYXRpb25CdXR0b24tMScpO1xuICAgICAgICB0dWx0aXAuaW5uZXJUZXh0ID0gaSArIDE7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZHJhZyhldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAobG9ja2VkKSByZXN1bHRzLnN0eWxlLnNldFByb3BlcnR5KCctLXR4JywgYCR7TWF0aC5yb3VuZCh1bmlmeShldmVudCkuY2xpZW50WCAtIHgwKX1weGApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNpemUoKSB7XG4gICAgICAgIHcgPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtb3ZlKGV2ZW50KSB7XG4gICAgICAgIGlmIChsb2NrZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGR4ID0gdW5pZnkoZXZlbnQpLmNsaWVudFggLSB4MDtcbiAgICAgICAgICAgIGNvbnN0IHMgPSBNYXRoLnNpZ24oZHgpO1xuICAgICAgICAgICAgbGV0IGYgPSArKHMgKiBkeCAvIHcpLnRvRml4ZWQoMik7XG4gICAgICAgICAgICBpZiAoKGkgPiAwIHx8IHMgPCAwKSAmJiAoaSA8IGl0ZW1zIC0gMSB8fCBzID4gMCkgJiYgZiA+IDAuMDUpIHtcbiAgICAgICAgICAgICAgICByZXN1bHRzLnN0eWxlLnNldFByb3BlcnR5KCctLWknLCBpIC09IHMpO1xuICAgICAgICAgICAgICAgIGYgPSAxIC0gZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdHMuc3R5bGUuc2V0UHJvcGVydHkoJy0tdHgnLCAnMHB4Jyk7XG4gICAgICAgICAgICByZXN1bHRzLnN0eWxlLnNldFByb3BlcnR5KCctLWYnLCBmKTtcbiAgICAgICAgICAgIHJlc3VsdHMuY2xhc3NMaXN0LnRvZ2dsZSgnc21vb3RoJywgIShsb2NrZWQgPSBmYWxzZSkpO1xuICAgICAgICAgICAgeDAgPSBudWxsO1xuICAgICAgICAgICAgY29uc3QgdHVsdGlwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhZ2luYXRpb25CdXR0b24tMScpO1xuICAgICAgICAgICAgdHVsdGlwLmlubmVySFRNTCA9ICcnO1xuICAgICAgICAgICAgaWYgKGl0ZW1zIC0gaSA9PT0gMikgZ2V0TmV3VmlkZW9zKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXN1bHRzLnN0eWxlLnNldFByb3BlcnR5KCctLWl0ZW1zJywgaXRlbXMpO1xuXG4gICAgc2l6ZSgpO1xuXG4gICAgcmVzdWx0cy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBsb2NrLCBmYWxzZSk7XG4gICAgcmVzdWx0cy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgbG9jaywgZmFsc2UpO1xuXG4gICAgcmVzdWx0cy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBkcmFnLCBmYWxzZSk7XG4gICAgcmVzdWx0cy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBkcmFnLCBmYWxzZSk7XG5cbiAgICByZXN1bHRzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBtb3ZlLCBmYWxzZSk7XG4gICAgcmVzdWx0cy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgbW92ZSwgZmFsc2UpO1xuICAgIHJlc3VsdHMuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBtb3ZlLCBmYWxzZSk7XG59XG4iLCJpbXBvcnQgcmVxdWVzdENvbnN0cyBmcm9tICcuL3JlcXVlc3RDb25zdHMnO1xuaW1wb3J0IGRldGVjdFF1YW50aXR5VmlkZW9QZXJQYWdlIGZyb20gJy4vZGV0ZWN0UXVhbnRpdHlWaWRlb1BlclBhZ2UnO1xuaW1wb3J0IGVycm9yVXNlckluZm9ybWF0aW9uIGZyb20gJy4vZXJyb3JVc2VySW5mb3JtYXRpb24nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXROZXdWaWRlb3MoKSB7XG4gICAgY29uc3Qge1xuICAgICAgICBtYWluTGluaywgQVBJX0tFWSwgc2VhcmNoVGV4dCxcbiAgICB9ID0gcmVxdWVzdENvbnN0cygpO1xuICAgIGNvbnN0IG5leHRQYWdlVXJsID0gYCR7bWFpbkxpbmt9c2VhcmNoP3BhZ2VUb2tlbj0ke3dpbmRvdy5wYWdlTmV4dH0ma2V5PSR7QVBJX0tFWX0mdHlwZT12aWRlbyZwYXJ0PXNuaXBwZXQmbWF4UmVzdWx0cz0xNSZxPSR7c2VhcmNoVGV4dH1gO1xuICAgIGNvbnN0IGNodW5rVmlkZW8gPSAxNTtcbiAgICBjb25zdCBhcnJheU9mVmlkZW9JZCA9IFtdO1xuICAgIGZldGNoKG5leHRQYWdlVXJsKVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgIC50aGVuKChuZXh0VmlkZW9zSnNvbikgPT4ge1xuICAgICAgICAgICAgd2luZG93LnBhZ2VOZXh0ID0gbmV4dFZpZGVvc0pzb24ubmV4dFBhZ2VUb2tlbjtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2h1bmtWaWRlbzsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LnZpZGVvc1t3aW5kb3cubnVtYmVyT2ZOZXh0VmlkZW9zXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IG5leHRWaWRlb3NKc29uLml0ZW1zW2ldLmlkLnZpZGVvSWQsXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBuZXh0VmlkZW9zSnNvbi5pdGVtc1tpXS5zbmlwcGV0LnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICBpbWFnZVVybDogbmV4dFZpZGVvc0pzb24uaXRlbXNbaV0uc25pcHBldC50aHVtYm5haWxzLm1lZGl1bS51cmwsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBuZXh0VmlkZW9zSnNvbi5pdGVtc1tpXS5zbmlwcGV0LmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgICAgICBhdXRob3I6IG5leHRWaWRlb3NKc29uLml0ZW1zW2ldLnNuaXBwZXQuY2hhbm5lbFRpdGxlLFxuICAgICAgICAgICAgICAgICAgICBkYXRlOiBuZXh0VmlkZW9zSnNvbi5pdGVtc1tpXS5zbmlwcGV0LnB1Ymxpc2hlZEF0LFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgd2luZG93Lm51bWJlck9mTmV4dFZpZGVvcyArPSAxO1xuICAgICAgICAgICAgICAgIGFycmF5T2ZWaWRlb0lkLnB1c2gobmV4dFZpZGVvc0pzb24uaXRlbXNbaV0uaWQudmlkZW9JZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB2aWRlb3NJZCA9IGFycmF5T2ZWaWRlb0lkLmpvaW4oJywnKTtcbiAgICAgICAgICAgIGNvbnN0IHN0YXRpc3RpY1VybCA9IGAke21haW5MaW5rfXZpZGVvcz9rZXk9JHtBUElfS0VZfSZpZD0ke3ZpZGVvc0lkfSZwYXJ0PXNuaXBwZXQsc3RhdGlzdGljc2A7XG4gICAgICAgICAgICBmZXRjaChzdGF0aXN0aWNVcmwpXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAgICAgICAgIC50aGVuKChzdGF0aXN0aWNKc29uKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5udW1iZXJPZk5leHRWaWRlb3MgLT0gY2h1bmtWaWRlbztcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaHVua1ZpZGVvOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy52aWRlb3Nbd2luZG93Lm51bWJlck9mTmV4dFZpZGVvc11cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudmlldyA9IHN0YXRpc3RpY0pzb24uaXRlbXNbaV0uc3RhdGlzdGljcy52aWV3Q291bnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubnVtYmVyT2ZOZXh0VmlkZW9zICs9IDE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZGV0ZWN0UXVhbnRpdHlWaWRlb1BlclBhZ2Uod2luZG93LnZpZGVvcyk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBlcnJvclVzZXJJbmZvcm1hdGlvbigpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVlc3RDb25zdHMoKSB7XG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VhcmNoJyk7XG4gICAgY29uc3QgbWFpbkxpbmsgPSAnaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20veW91dHViZS92My8nO1xuICAgIGNvbnN0IEFQSV9LRVkgPSAnQUl6YVN5QXV3SjN4NkFLMUdwcWl4d1NyRXA0YXJLMkRlVlc2bXRrJztcbiAgICBjb25zdCBzZWFyY2hUZXh0ID0gZW5jb2RlVVJJQ29tcG9uZW50KGlucHV0LnZhbHVlKS5yZXBsYWNlKC8lMjAvZywgJysnKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIG1haW5MaW5rLCBBUElfS0VZLCBzZWFyY2hUZXh0LFxuICAgIH07XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBlcnJvclVzZXJJbmZvcm1hdGlvbigpIHtcbiAgICBjb25zdCBlcnJvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBlcnJvci5pbm5lclRleHQgPSAnU29tZXRoaW5nIHdlbnQgd3JvbmcuLi4nO1xuICAgIGVycm9yLmNsYXNzTGlzdC5hZGQoJ2Vycm9yJyk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc3VsdHMnKS5hcHBlbmRDaGlsZChlcnJvcik7XG59XG4iLCJpbXBvcnQgZ2V0TmV3VmlkZW9zIGZyb20gJy4vZ2V0TmV3VmlkZW9zJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2VuZXJhdGVQYWdpbmF0aW9uKCkge1xuICAgIGNvbnN0IHBhZ2luYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIHBhZ2luYXRpb24uY2xhc3NMaXN0LmFkZCgncGFnaW5hdGlvbicpO1xuICAgIGNvbnN0IGJsb2IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ0bi5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJzAnKTtcbiAgICBjb25zdCBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoJ2RpdicpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSArPSAxKSB7XG4gICAgICAgIGNvbnN0IGJsb2JJdGVtID0gYmxvYi5jbG9uZU5vZGUoKTtcbiAgICAgICAgY29uc3QgYnV0dG9uID0gYnRuLmNsb25lTm9kZSgpO1xuICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZChgcGFnaW5hdGlvbkJ1dHRvbi0ke2l9YCk7XG4gICAgICAgIGlmIChpID09PSAwKSB7XG4gICAgICAgICAgICBidXR0b24uaW5uZXJUZXh0ID0gJzwnO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpID09PSAyKSB7XG4gICAgICAgICAgICBidXR0b24uaW5uZXJUZXh0ID0gJz4nO1xuICAgICAgICB9XG4gICAgICAgIGJsb2JJdGVtLmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKGJsb2JJdGVtKTtcbiAgICB9XG4gICAgcGFnaW5hdGlvbi5hcHBlbmRDaGlsZChmcmFnbWVudCk7XG4gICAgY29uc3QgYXBwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFwcCcpO1xuICAgIGFwcC5hcHBlbmRDaGlsZChwYWdpbmF0aW9uKTtcblxuICAgIGNvbnN0IHR1bHRpcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdpbmF0aW9uQnV0dG9uLTEnKTtcblxuICAgIGNvbnN0IHByZXZQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhZ2luYXRpb25CdXR0b24tMCcpO1xuICAgIHByZXZQYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IHJlc3VsdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzdWx0cycpO1xuICAgICAgICBsZXQgaSA9ICtnZXRDb21wdXRlZFN0eWxlKHJlc3VsdHMpLmdldFByb3BlcnR5VmFsdWUoJy0taScpO1xuICAgICAgICBpZiAoaSA+IDApIHtcbiAgICAgICAgICAgIHJlc3VsdHMuc3R5bGUuc2V0UHJvcGVydHkoJy0taScsIGkgLT0gMSk7XG4gICAgICAgICAgICB0dWx0aXAuaW5uZXJIVE1MID0gYCR7aSArIDF9YDtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgbmV4dFBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFnaW5hdGlvbkJ1dHRvbi0yJyk7XG4gICAgbmV4dFBhZ2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgcmVzdWx0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXN1bHRzJyk7XG4gICAgICAgIGxldCBpID0gK2dldENvbXB1dGVkU3R5bGUocmVzdWx0cykuZ2V0UHJvcGVydHlWYWx1ZSgnLS1pJyk7XG4gICAgICAgIHJlc3VsdHMuc3R5bGUuc2V0UHJvcGVydHkoJy0taScsIGkgKz0gMSk7XG4gICAgICAgIHR1bHRpcC5pbm5lckhUTUwgPSBgJHtpICsgMX1gO1xuICAgICAgICBjb25zdCBpdGVtcyA9IHJlc3VsdHMuY2hpbGRyZW4ubGVuZ3RoO1xuICAgICAgICBpZiAoaXRlbXMgLSBpID09PSAyKSBnZXROZXdWaWRlb3MoKTtcbiAgICB9KTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=