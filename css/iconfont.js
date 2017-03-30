;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-wuxing" viewBox="0 0 1056 1024">' +
    '' +
    '<path d="M489.72845 32.177681c20.819595-42.896749 54.843563-42.896749 75.663157 0l100.150633 206.519198c20.819595 42.896749 75.907682 83.6277 122.43738 90.509344l223.950369 33.11573c46.529697 6.881645 57.044292 39.857647 23.369645 73.252835l-162.050501 160.723077c-33.674646 33.395188-54.703833 99.31226-46.774223 146.435805l38.250765 226.989471c7.964543 47.158477-19.596967 67.523953-61.201224 45.237206l-200.336198-107.172006c-41.604257-22.251815-109.722057-22.251815-151.326314 0l-200.336198 107.172006c-41.604257 22.286747-69.165767 1.921271-61.201224-45.237206l38.250765-226.989471c7.964543-47.123545-13.099578-113.040617-46.774223-146.435805l-162.085434-160.723077c-33.674646-33.395188-23.12512-66.336258 23.369645-73.252835l223.985301-33.11573c46.529697-6.881645 101.617786-47.612596 122.43738-90.509344L489.72845 32.177681z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)