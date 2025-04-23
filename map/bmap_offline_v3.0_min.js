window.TILE_VERSION = {
  ditu: {
    normal: { version: "088", updateDate: "20241127" },
    satellite: { version: "009", updateDate: "20241127" },
    normalTraffic: { version: "081", updateDate: "20241127" },
    satelliteTraffic: { version: "083", updateDate: "20241127" },
    mapJS: { version: "104", updateDate: "20241127" },
    satelliteStreet: { version: "083", updateDate: "20241127" },
    earthVector: { version: "001", updateDate: "20241127" },
  },
  webapp: {
    high_normal: { version: "001", updateDate: "20241127" },
    lower_normal: { version: "002", updateDate: "20241127" },
  },
  api_for_mobile: {
    vector: { version: "002", updateDate: "20241127" },
    vectorIcon: { version: "002", updateDate: "20241127" },
  },
};
window.BMAP_AUTHENTIC_KEY = "lLjDOOfvDkklxvx595DSnc7ApqNaDIBn";
(function () {
  function aa(a) {
    throw a;
  }
  var l = void 0,
    q = !0,
    s = null,
    t = !1;
  function ba() {
    return function () {};
  }
  function ca(a) {
    return function (b) {
      this[a] = b;
    };
  }
  function u(a) {
    return function () {
      return this[a];
    };
  }
  function ea(a) {
    return function () {
      return a;
    };
  }
  var fa,
    ha = [];
  function ia(a) {
    return function () {
      return ha[a].apply(this, arguments);
    };
  }
  function ja(a, b) {
    return (ha[a] = b);
  }
  var ka,
    z = (ka = z || { version: "1.3.4" });
  z.da = "$BAIDU$";
  window[z.da] = window[z.da] || {};
  z.object = z.object || {};
  z.extend = z.object.extend = function (a, b) {
    for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
    return a;
  };
  z.U = z.U || {};
  z.U.fa = function (a) {
    return "string" == typeof a || a instanceof String
      ? document.getElementById(a)
      : a && a.nodeName && (1 == a.nodeType || 9 == a.nodeType)
      ? a
      : s;
  };
  z.fa = z.Ic = z.U.fa;
  z.U.aa = function (a) {
    a = z.U.fa(a);
    if (a === s) return a;
    a.style.display = "none";
    return a;
  };
  z.aa = z.U.aa;
  z.lang = z.lang || {};
  z.lang.Hg = function (a) {
    return "[object String]" == Object.prototype.toString.call(a);
  };
  z.Hg = z.lang.Hg;
  z.lang.IE = function (a) {
    if ("[object Object]" === Object.prototype.toString.call(a)) {
      for (var b in a) return t;
      return q;
    }
    return t;
  };
  z.IE = z.lang.IE;
  z.U.fk = function (a) {
    return z.lang.Hg(a) ? document.getElementById(a) : a;
  };
  z.fk = z.U.fk;
  z.U.getElementsByClassName = function (a, b) {
    var c;
    if (a.getElementsByClassName) c = a.getElementsByClassName(b);
    else {
      var e = a;
      e == s && (e = document);
      c = [];
      var e = e.getElementsByTagName("*"),
        f = e.length,
        g = RegExp("(^|\\s)" + b + "(\\s|$)"),
        i,
        k;
      for (k = i = 0; i < f; i++) g.test(e[i].className) && ((c[k] = e[i]), k++);
    }
    return c;
  };
  z.getElementsByClassName = z.U.getElementsByClassName;
  z.U.contains = function (a, b) {
    var c = z.U.fk,
      a = c(a),
      b = c(b);
    return a.contains ? a != b && a.contains(b) : !!(a.compareDocumentPosition(b) & 16);
  };
  z.ga = z.ga || {};
  /msie (\d+\.\d)/i.test(navigator.userAgent) &&
    (z.ga.oa = z.oa = document.documentMode || +RegExp.$1);
  var la = {
    cellpadding: "cellPadding",
    cellspacing: "cellSpacing",
    colspan: "colSpan",
    rowspan: "rowSpan",
    valign: "vAlign",
    usemap: "useMap",
    frameborder: "frameBorder",
  };
  8 > z.ga.oa
    ? ((la["for"] = "htmlFor"), (la["class"] = "className"))
    : ((la.htmlFor = "for"), (la.className = "class"));
  z.U.lH = la;
  z.U.HF = function (a, b, c) {
    a = z.U.fa(a);
    if (a === s) return a;
    if ("style" == b) a.style.cssText = c;
    else {
      b = z.U.lH[b] || b;
      a.setAttribute(b, c);
    }
    return a;
  };
  z.HF = z.U.HF;
  z.U.IF = function (a, b) {
    a = z.U.fa(a);
    if (a === s) return a;
    for (var c in b) z.U.HF(a, c, b[c]);
    return a;
  };
  z.IF = z.U.IF;
  z.ll = z.ll || {};
  (function () {
    var a = RegExp("(^[\\s\\t\\xa0\\u3000]+)|([\\u3000\\xa0\\s\\t]+$)", "g");
    z.ll.trim = function (b) {
      return ("" + b).replace(a, "");
    };
  })();
  z.trim = z.ll.trim;
  z.ll.xp = function (a, b) {
    var a = "" + a,
      c = Array.prototype.slice.call(arguments, 1),
      e = Object.prototype.toString;
    if (c.length) {
      c =
        c.length == 1
          ? b !== s && /\[object Array\]|\[object Object\]/.test(e.call(b))
            ? b
            : c
          : c;
      return a.replace(/#\{(.+?)\}/g, function (a, b) {
        var i = c[b];
        "[object Function]" == e.call(i) && (i = i(b));
        return "undefined" == typeof i ? "" : i;
      });
    }
    return a;
  };
  z.xp = z.ll.xp;
  z.U.rc = function (a, b) {
    a = z.U.fa(a);
    if (a === s) return a;
    for (
      var c = a.className.split(/\s+/), e = b.split(/\s+/), f, g = e.length, i, k = 0;
      k < g;
      ++k
    ) {
      i = 0;
      for (f = c.length; i < f; ++i)
        if (c[i] == e[k]) {
          c.splice(i, 1);
          break;
        }
    }
    a.className = c.join(" ");
    return a;
  };
  z.rc = z.U.rc;
  z.U.hy = function (a, b, c) {
    a = z.U.fa(a);
    if (a === s) return a;
    var e;
    if (a.insertAdjacentHTML) a.insertAdjacentHTML(b, c);
    else {
      e = a.ownerDocument.createRange();
      b = b.toUpperCase();
      if (b == "AFTERBEGIN" || b == "BEFOREEND") {
        e.selectNodeContents(a);
        e.collapse(b == "AFTERBEGIN");
      } else {
        b = b == "BEFOREBEGIN";
        e[b ? "setStartBefore" : "setEndAfter"](a);
        e.collapse(b);
      }
      e.insertNode(e.createContextualFragment(c));
    }
    return a;
  };
  z.hy = z.U.hy;
  z.U.show = function (a) {
    a = z.U.fa(a);
    if (a === s) return a;
    a.style.display = "";
    return a;
  };
  z.show = z.U.show;
  z.U.bE = function (a) {
    a = z.U.fa(a);
    return a === s ? a : a.nodeType == 9 ? a : a.ownerDocument || a.document;
  };
  z.U.jb = function (a, b) {
    a = z.U.fa(a);
    if (a === s) return a;
    for (
      var c = b.split(/\s+/), e = a.className, f = " " + e + " ", g = 0, i = c.length;
      g < i;
      g++
    )
      f.indexOf(" " + c[g] + " ") < 0 && (e = e + (" " + c[g]));
    a.className = e;
    return a;
  };
  z.jb = z.U.jb;
  z.U.XB = z.U.XB || {};
  z.U.im = z.U.im || [];
  z.U.im.filter = function (a, b, c) {
    for (var e = 0, f = z.U.im, g; (g = f[e]); e++) if ((g = g[c])) b = g(a, b);
    return b;
  };
  z.ll.eP = function (a) {
    return a.indexOf("-") < 0 && a.indexOf("_") < 0
      ? a
      : a.replace(/[-_][^-_]/g, function (a) {
          return a.charAt(1).toUpperCase();
        });
  };
  z.U.Z0 = function (a) {
    z.U.Gt(a, "expand") ? z.U.rc(a, "expand") : z.U.jb(a, "expand");
  };
  z.U.Gt = function (a) {
    if (arguments.length <= 0 || typeof a === "function") return this;
    if (this.size() <= 0) return t;
    var a = a.replace(/^\s+/g, "").replace(/\s+$/g, "").replace(/\s+/g, " "),
      b = a.split(" "),
      c;
    z.forEach(this, function (a) {
      for (var a = a.className, f = 0; f < b.length; f++)
        if (!~(" " + a + " ").indexOf(" " + b[f] + " ")) {
          c = t;
          return;
        }
      c !== t && (c = q);
    });
    return c;
  };
  z.U.wf = function (a, b) {
    var c = z.U,
      a = c.fa(a);
    if (a === s) return a;
    var b = z.ll.eP(b),
      e = a.style[b];
    if (!e)
      var f = c.XB[b],
        e = a.currentStyle || (z.ga.oa ? a.style : getComputedStyle(a, s)),
        e = f && f.get ? f.get(a, e) : e[f || b];
    if ((f = c.im)) e = f.filter(b, e, "get");
    return e;
  };
  z.wf = z.U.wf;
  /opera\/(\d+\.\d)/i.test(navigator.userAgent) && (z.ga.opera = +RegExp.$1);
  z.ga.XM = /webkit/i.test(navigator.userAgent);
  z.ga.uZ = /gecko/i.test(navigator.userAgent) && !/like gecko/i.test(navigator.userAgent);
  z.ga.OE = "CSS1Compat" == document.compatMode;
  z.U.ma = function (a) {
    a = z.U.fa(a);
    if (a === s) return a;
    var b = z.U.bE(a),
      c = z.ga,
      e = z.U.wf;
    c.uZ > 0 && b.getBoxObjectFor && e(a, "position");
    var f = { left: 0, top: 0 },
      g;
    if (a == (c.oa && !c.OE ? b.body : b.documentElement)) return f;
    if (a.getBoundingClientRect) {
      a = a.getBoundingClientRect();
      f.left = Math.floor(a.left) + Math.max(b.documentElement.scrollLeft, b.body.scrollLeft);
      f.top = Math.floor(a.top) + Math.max(b.documentElement.scrollTop, b.body.scrollTop);
      f.left = f.left - b.documentElement.clientLeft;
      f.top = f.top - b.documentElement.clientTop;
      a = b.body;
      b = parseInt(e(a, "borderLeftWidth"));
      e = parseInt(e(a, "borderTopWidth"));
      if (c.oa && !c.OE) {
        f.left = f.left - (isNaN(b) ? 2 : b);
        f.top = f.top - (isNaN(e) ? 2 : e);
      }
    } else {
      g = a;
      do {
        f.left = f.left + g.offsetLeft;
        f.top = f.top + g.offsetTop;
        if (c.XM > 0 && e(g, "position") == "fixed") {
          f.left = f.left + b.body.scrollLeft;
          f.top = f.top + b.body.scrollTop;
          break;
        }
        g = g.offsetParent;
      } while (g && g != a);
      if (c.opera > 0 || (c.XM > 0 && e(a, "position") == "absolute"))
        f.top = f.top - b.body.offsetTop;
      for (g = a.offsetParent; g && g != b.body; ) {
        f.left = f.left - g.scrollLeft;
        if (!c.opera || g.tagName != "TR") f.top = f.top - g.scrollTop;
        g = g.offsetParent;
      }
    }
    return f;
  };
  /firefox\/(\d+\.\d)/i.test(navigator.userAgent) && (z.ga.Xe = +RegExp.$1);
  /BIDUBrowser/i.test(navigator.userAgent) && (z.ga.q3 = q);
  var ma = navigator.userAgent;
  /(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/i.test(ma) &&
    !/chrome/i.test(ma) &&
    (z.ga.Sy = +(RegExp.$1 || RegExp.$2));
  /chrome\/(\d+\.\d)/i.test(navigator.userAgent) && (z.ga.ex = +RegExp.$1);
  z.oc = z.oc || {};
  z.oc.Rb = function (a, b) {
    var c,
      e,
      f = a.length;
    if ("function" == typeof b)
      for (e = 0; e < f; e++) {
        c = a[e];
        c = b.call(a, c, e);
        if (c === t) break;
      }
    return a;
  };
  z.Rb = z.oc.Rb;
  z.lang.da = function () {
    return "TANGRAM__" + (window[z.da]._counter++).toString(36);
  };
  window[z.da]._counter = window[z.da]._counter || 1;
  window[z.da]._instances = window[z.da]._instances || {};
  z.lang.Pt = function (a) {
    return "[object Function]" == Object.prototype.toString.call(a);
  };
  z.lang.Ja = function (a) {
    this.da = a || z.lang.da();
    window[z.da]._instances[this.da] = this;
  };
  window[z.da]._instances = window[z.da]._instances || {};
  z.lang.Ja.prototype.pi = ia(2);
  z.lang.Ja.prototype.toString = function () {
    return "[object " + (this.gR || "Object") + "]";
  };
  z.lang.cv = function (a, b) {
    this.type = a;
    this.returnValue = q;
    this.target = b || s;
    this.currentTarget = s;
  };
  z.lang.Ja.prototype.addEventListener = function (a, b, c) {
    if (z.lang.Pt(b)) {
      !b.yl && (b.yl = {});
      !this.Vi && (this.Vi = {});
      var e = this.Vi,
        f;
      if (typeof c == "string" && c) {
        /[^\w\-]/.test(c) && aa("nonstandard key:" + c);
        f = b.Wx = c;
      }
      a.indexOf("on") != 0 && (a = "on" + a);
      typeof e[a] != "object" && (e[a] = {});
      typeof b.yl[a] != "object" && (b.yl[a] = {});
      f = f || z.lang.da();
      b.yl[a].Wx = f;
      e[a][f] = b;
    }
  };
  z.lang.Ja.prototype.removeEventListener = function (a, b) {
    a.indexOf("on") != 0 && (a = "on" + a);
    if (z.lang.Pt(b)) {
      if (!b.yl || !b.yl[a]) return;
      b = b.yl[a].Wx;
    } else if (!z.lang.Hg(b)) return;
    !this.Vi && (this.Vi = {});
    var c = this.Vi;
    c[a] && c[a][b] && delete c[a][b];
  };
  z.lang.Ja.prototype.dispatchEvent = function (a, b) {
    z.lang.Hg(a) && (a = new z.lang.cv(a));
    !this.Vi && (this.Vi = {});
    var b = b || {},
      c;
    for (c in b) a[c] = b[c];
    var e = this.Vi,
      f = a.type;
    a.target = a.target || this;
    a.currentTarget = this;
    f.indexOf("on") != 0 && (f = "on" + f);
    z.lang.Pt(this[f]) && this[f].apply(this, arguments);
    if (typeof e[f] == "object") for (c in e[f]) e[f][c].apply(this, arguments);
    return a.returnValue;
  };
  z.lang.xa = function (a, b, c) {
    var e,
      f,
      g = a.prototype;
    f = new Function();
    f.prototype = b.prototype;
    f = a.prototype = new f();
    for (e in g) f[e] = g[e];
    a.prototype.constructor = a;
    a.N0 = b.prototype;
    if ("string" == typeof c) f.gR = c;
  };
  z.xa = z.lang.xa;
  z.lang.Uc = function (a) {
    return window[z.da]._instances[a] || s;
  };
  z.platform = z.platform || {};
  z.platform.RM = /macintosh/i.test(navigator.userAgent);
  z.platform.E5 = /MicroMessenger/i.test(navigator.userAgent);
  z.platform.YM = /windows/i.test(navigator.userAgent);
  z.platform.CZ = /x11/i.test(navigator.userAgent);
  z.platform.Vk = /android/i.test(navigator.userAgent);
  /android (\d+(\.\d)?)/i.test(navigator.userAgent) && (z.platform.uC = z.uC = RegExp.$1);
  z.platform.y5 = /ipad/i.test(navigator.userAgent);
  z.platform.QM = /iphone/i.test(navigator.userAgent);
  function na(a, b) {
    a.domEvent = b = window.event || b;
    a.clientX = b.clientX || b.pageX;
    a.clientY = b.clientY || b.pageY;
    a.offsetX = b.offsetX || b.layerX;
    a.offsetY = b.offsetY || b.layerY;
    a.screenX = b.screenX;
    a.screenY = b.screenY;
    a.ctrlKey = b.ctrlKey || b.metaKey;
    a.shiftKey = b.shiftKey;
    a.altKey = b.altKey;
    if (b.touches) {
      a.touches = [];
      for (var c = 0; c < b.touches.length; c++)
        a.touches.push({
          clientX: b.touches[c].clientX,
          clientY: b.touches[c].clientY,
          screenX: b.touches[c].screenX,
          screenY: b.touches[c].screenY,
          pageX: b.touches[c].pageX,
          pageY: b.touches[c].pageY,
          target: b.touches[c].target,
          identifier: b.touches[c].identifier,
        });
    }
    if (b.changedTouches) {
      a.changedTouches = [];
      for (c = 0; c < b.changedTouches.length; c++)
        a.changedTouches.push({
          clientX: b.changedTouches[c].clientX,
          clientY: b.changedTouches[c].clientY,
          screenX: b.changedTouches[c].screenX,
          screenY: b.changedTouches[c].screenY,
          pageX: b.changedTouches[c].pageX,
          pageY: b.changedTouches[c].pageY,
          target: b.changedTouches[c].target,
          identifier: b.changedTouches[c].identifier,
        });
    }
    if (b.targetTouches) {
      a.targetTouches = [];
      for (c = 0; c < b.targetTouches.length; c++)
        a.targetTouches.push({
          clientX: b.targetTouches[c].clientX,
          clientY: b.targetTouches[c].clientY,
          screenX: b.targetTouches[c].screenX,
          screenY: b.targetTouches[c].screenY,
          pageX: b.targetTouches[c].pageX,
          pageY: b.targetTouches[c].pageY,
          target: b.targetTouches[c].target,
          identifier: b.targetTouches[c].identifier,
        });
    }
    a.rotation = b.rotation;
    a.scale = b.scale;
    return a;
  }
  z.lang.sx = function (a) {
    var b = window[z.da];
    b.mT && delete b.mT[a];
  };
  z.event = {};
  z.V = z.event.V = function (a, b, c) {
    if (!(a = z.fa(a))) return a;
    b = b.replace(/^on/, "");
    a.addEventListener ? a.addEventListener(b, c, t) : a.attachEvent && a.attachEvent("on" + b, c);
    return a;
  };
  z.md = z.event.md = function (a, b, c) {
    if (!(a = z.fa(a))) return a;
    b = b.replace(/^on/, "");
    a.removeEventListener
      ? a.removeEventListener(b, c, t)
      : a.detachEvent && a.detachEvent("on" + b, c);
    return a;
  };
  z.U.Gt = function (a, b) {
    if (!a || !a.className || typeof a.className != "string") return t;
    var c = -1;
    try {
      c = a.className == b || a.className.search(RegExp("(\\s|^)" + b + "(\\s|$)"));
    } catch (e) {
      return t;
    }
    return c > -1;
  };
  z.yL = (function () {
    function a(a) {
      document.addEventListener &&
        ((this.element = a),
        (this.BL = this.Tk ? "touchstart" : "mousedown"),
        (this.JD = this.Tk ? "touchmove" : "mousemove"),
        (this.HD = this.Tk ? "touchend" : "mouseup"),
        (this.Eh = t),
        (this.Ju = this.Iu = 0),
        this.element.addEventListener(this.BL, this, t),
        ka.V(this.element, "mousedown", ba()),
        this.handleEvent(s));
    }
    a.prototype = {
      Tk: "ontouchstart" in window || "createTouch" in document,
      start: function (a) {
        oa(a);
        this.Eh = t;
        this.Iu = this.Tk ? a.touches[0].clientX : a.clientX;
        this.Ju = this.Tk ? a.touches[0].clientY : a.clientY;
        this.element.addEventListener(this.JD, this, t);
        this.element.addEventListener(this.HD, this, t);
      },
      move: function (a) {
        pa(a);
        var c = this.Tk ? a.touches[0].clientY : a.clientY;
        if (
          10 < Math.abs((this.Tk ? a.touches[0].clientX : a.clientX) - this.Iu) ||
          10 < Math.abs(c - this.Ju)
        )
          this.Eh = q;
      },
      end: function (a) {
        pa(a);
        this.Eh ||
          ((a = document.createEvent("Event")),
          a.initEvent("tap", t, q),
          this.element.dispatchEvent(a));
        this.element.removeEventListener(this.JD, this, t);
        this.element.removeEventListener(this.HD, this, t);
      },
      handleEvent: function (a) {
        if (a)
          switch (a.type) {
            case this.BL:
              this.start(a);
              break;
            case this.JD:
              this.move(a);
              break;
            case this.HD:
              this.end(a);
          }
      },
    };
    return function (b) {
      return new a(b);
    };
  })();
  var C = window.BMap || {};
  C.version = "3.0";
  C.lx = 5;
  C.g3 = 0.34 > Math.random();
  0 <= C.version.indexOf("#") && (C.version = "3.1");
  C.$r = [];
  C.ff = function (a) {
    this.$r.push(a);
  };
  C.Tr = [];
  C.$k = function (a) {
    this.Tr.push(a);
  };
  C.zV = C.apiLoad || ba();
  C.oz =
    C.verify ||
    function (a) {
      if (C.version && C.version >= 1.5) {
        var b =
          window._BMapSecurityConfig && window._BMapSecurityConfig.serviceHost
            ? window._BMapSecurityConfig.serviceHost + "?qt=verify"
            : C.dd + "?qt=verify&ak=" + qa;
        a && (b = b + "&fromPanorama=" + a);
        ra(b, function (a) {
          if (a && a.error !== 0) {
            C = s;
            var b =
              "\u60a8\u63d0\u4f9b\u7684\u5bc6\u94a5\u4e0d\u662f\u6709\u6548\u7684\u767e\u5ea6LBS\u5f00\u653e\u5e73\u53f0\u5bc6\u94a5\uff0c\u6216\u6b64\u5bc6\u94a5\u672a\u5bf9\u672c\u5e94\u7528\u7684\u767e\u5ea6\u5730\u56feJavaScriptAPI\u6388\u6743\u3002\u60a8\u53ef\u4ee5\u8bbf\u95ee\u5982\u4e0b\u7f51\u5740\u4e86\u89e3\u5982\u4f55\u83b7\u53d6\u6709\u6548\u7684\u5bc6\u94a5\uff1ahttp://lbsyun.baidu.com/apiconsole/key#\u3002";
            a.error &&
              sa[a.error] &&
              (b =
                sa[a.error] +
                "\u8be6\u60c5\u67e5\u770b\uff1ahttp://lbsyun.baidu.com/apiconsole/key#\u3002");
            alert(b);
            if (typeof map !== "undefined" && typeof map.Ta === "function") {
              map.Ta().innerHTML = "";
              map.Vi = {};
            }
          }
        });
      }
      var a = +new Date(),
        c = I("script", { type: "text/javascript", async: "" });
      c.charset = "utf-8";
      c.src = "https://dlswbr.baidu.com/heicha/mw/abclite-2063-s.js?_t=" + a;
      c.onload = function () {
        if (window.___abvk) {
          var a = window.___abvk;
          localStorage
            ? localStorage.setItem("SECKEY_ABVK", a)
            : sessionStorage && sessionStorage.setItem("SECKEY_ABVK", a);
        }
      };
      window.__abbaidu_2063_cb = function (a) {
        a = JSON.parse(a).data;
        localStorage
          ? localStorage.setItem("BMAP_SECKEY", a)
          : sessionStorage && sessionStorage.setItem("BMAP_SECKEY", a);
      };
      c.addEventListener
        ? c.addEventListener(
            "load",
            function (a) {
              a = a.target;
              a.parentNode.removeChild(a);
            },
            t,
          )
        : c.attachEvent &&
          c.attachEvent("onreadystatechange", function () {
            var a = window.event.srcElement;
            a &&
              (a.readyState == "loaded" || a.readyState == "complete") &&
              a.parentNode.removeChild(a);
          });
      setTimeout(function () {
        document.getElementsByTagName("head")[0].appendChild(c);
        c = s;
      }, 1);
    };
  var qa = window.BMAP_AUTHENTIC_KEY;
  window.BMAP_AUTHENTIC_KEY = s;
  var ta = window.BMap_loadScriptTime,
    ua = new Date().getTime(),
    xa = s,
    ya = q,
    za = 5042,
    Aa = 5002,
    Ba = 5003,
    Ca = "load_mapclick",
    Ea = 5038,
    Fa = 5041,
    Ga = 5047,
    Ha = 5036,
    Ia = 5039,
    Ja = 5037,
    Ka = 5040,
    Ma = 5011,
    Na = 7e3,
    sa = {
      101: "\u60a8\u6240\u4f7f\u7528\u7684\u5bc6\u94a5ak\u6709\u95ee\u9898\uff0c\u4e0d\u652f\u6301jsapi\u670d\u52a1\uff0c\u53ef\u4ee5\u8bbf\u95ee\u8be5\u7f51\u5740\u4e86\u89e3\u5982\u4f55\u83b7\u53d6\u6709\u6548\u5bc6\u94a5\u3002",
      102: "MCODE\u53c2\u6570\u4e0d\u5b58\u5728\uff0cmobile\u7c7b\u578bMCODE\u53c2\u6570\u5fc5\u9700\u3002",
      200: "APP\u4e0d\u5b58\u5728\uff0cAK\u6709\u8bef\u8bf7\u68c0\u67e5\u518d\u91cd\u8bd5\u3002",
      201: "APP\u88ab\u60a8\u7981\u7528\u5566\u3002",
      202: "APP\u88ab\u7ba1\u7406\u5458\u5220\u9664\u5566\u3002",
      203: "APP\u7c7b\u578b\u9519\u8bef\u3002",
      210: "APP IP\u6821\u9a8c\u5931\u8d25\u3002",
      220: "APP Referer\u6821\u9a8c\u5931\u8d25\u3002\u8bf7\u68c0\u67e5\u8be5ak\u8bbe\u7f6e\u7684\u767d\u540d\u5355\u4e0e\u8bbf\u95ee\u6240\u6709\u7684\u57df\u540d\u662f\u5426\u4e00\u81f4\u3002",
      230: "APP Mcode\u7801\u6821\u9a8c\u5931\u8d25\u3002",
      240: "APP\u670d\u52a1\u88ab\u7981\u7528\u4e86\u3002",
      250: "\u8be5\u7528\u6237\u4e0d\u5b58\u5728...",
      251: "\u8be5\u7528\u6237\u88ab\u81ea\u5df1\u5220\u9664\u5566\u3002",
      252: "\u8be5\u7528\u6237\u88ab\u7ba1\u7406\u5458\u5220\u9664\u5566\u3002",
      260: "\u60a8\u6240\u4f7f\u7528\u7684\u5bc6\u94a5AK\u4e0d\u5305\u542b\u8be5\u670d\u52a1\u5462\uff0c",
      261: "\u60a8\u6240\u4f7f\u7528\u7684\u5bc6\u94a5AK\u7684\u8be5\u670d\u52a1\u88ab\u7981\u7528\u5566\uff0c",
      401: "\u60a8\u6240\u4f7f\u7528\u7684AK\u5e76\u53d1\u8d85\u9650\u4e86\uff0c",
      302: "\u60a8\u6240\u4f7f\u7528\u7684AK\u5929\u914d\u989d\u8d85\u9650\u4e86\uff0c",
    };
  var Oa = 0,
    Pa = 3,
    Qa = 1;
  function Ra(a, b) {
    if ((a = z.fa(a))) {
      var c = this;
      z.lang.Ja.call(c);
      b = b || {};
      c.M = {
        JC: 200,
        jc: q,
        xx: t,
        xD: q,
        sp: q,
        vp: b.enableWheelZoom || t,
        wL: q,
        zD: q,
        up: q,
        gt: q,
        ED: q,
        qp: b.enable3DBuilding || t,
        Nc: 25,
        U1: 240,
        mV: 450,
        Ac: L.Ac,
        Ld: L.Ld,
        Rt: !!b.Rt,
        kc: Math.round(b.minZoom) || 1,
        qc: Math.round(b.maxZoom) || 19,
        Wa: b.mapType || Sa,
        F6: t,
        tL: b.drawer || Oa,
        wx: q,
        vx: 500,
        rX: b.enableHighResolution !== t,
        Fm: b.enableMapClick !== t,
        devicePixelRatio: b.devicePixelRatio || window.devicePixelRatio || 1,
        vG: 99,
        Fe: b.mapStyle || s,
        JZ: b.logoControl === t ? t : q,
        GV: [],
        t3: b.beforeClickIcon || s,
        Zf: t,
        Gk: t,
        kp: t,
        jF: q,
        tD: b.enableBizAuthLogo === t ? t : q,
        Oa: b.coordsType || C.lx,
        k7: b.touchZoomCenter || 0,
        BD: b.enablePinchDragging === t ? t : q,
      };
      c.M.Fe && (this.iZ(c.M.Fe.controls), this.LM(c.M.Fe.geotableId));
      c.M.Fe && c.M.Fe.styleId && c.W4(c.M.Fe.styleId);
      c.M.MC = {
        dark: { backColor: "#2D2D2D", textColor: "#bfbfbf", iconUrl: "dicons" },
        normal: { backColor: "#F3F1EC", textColor: "#c61b1b", iconUrl: "icons" },
        light: { backColor: "#EBF8FC", textColor: "#017fb4", iconUrl: "licons" },
      };
      b.enableAutoResize && (c.M.gt = b.enableAutoResize);
      b.enableStreetEntrance === t && (c.M.ED = b.enableStreetEntrance);
      b.enableDeepZoom === t && (c.M.wL = b.enableDeepZoom);
      var e = c.M.GV;
      if (M())
        for (var f = 0, g = e.length; f < g; f++)
          if (z.ga[e[f]]) {
            c.M.devicePixelRatio = 1;
            break;
          }
      e = -1 < navigator.userAgent.toLowerCase().indexOf("android");
      f = -1 < navigator.userAgent.toLowerCase().indexOf("mqqbrowser");
      if (-1 < navigator.userAgent.toLowerCase().indexOf("UCBrowser") || (e && f)) c.M.vG = 99;
      c.$a = a;
      c.RB(a);
      a.unselectable = "on";
      a.innerHTML = "";
      a.appendChild(c.Ba());
      b.size && this.Ie(b.size);
      e = c.wb();
      c.width = e.width;
      c.height = e.height;
      c.offsetX = 0;
      c.offsetY = 0;
      c.platform = a.firstChild;
      c.Ge = c.platform.firstChild;
      c.Ge.style.width = c.width + "px";
      c.Ge.style.height = c.height + "px";
      c.ee = {};
      c.ie = new N(0, 0);
      c.Jb = new N(0, 0);
      c.Za = 3;
      c.Bc = 0;
      c.XC = s;
      c.WC = s;
      c.Qb = "";
      c.fx = "";
      c.Uh = {};
      c.Uh.custom = {};
      c.Xi = {};
      c.ab = 0;
      b.useWebGL === t && Ta(t);
      c.W = new Ua(a, { Ye: "api", qT: q });
      c.W.aa();
      c.W.OF(c);
      b = b || {};
      e = c.Wa = c.M.Wa;
      c.Dc = e.Bj();
      e && e.RF(c.M.Oa);
      Va(Wa(1, 1), ["instance", "engine"]);
      e === Xa && Ya(Aa);
      e === Za && Ya(Ba);
      e === $a || e === Za
        ? Va(Wa(3, 2), ["layer", "raster"])
        : Va(Wa(3, 17), ["layer", "normal_map"]);
      e = c.M;
      e.xP = Math.round(b.minZoom);
      e.wP = Math.round(b.maxZoom);
      c.vv();
      c.ba = { Pc: t, pc: 0, Wt: 0, cN: 0, I5: 0, BC: t, vF: -1, ye: [] };
      c.platform.style.cursor = c.M.Ac;
      for (f = 0; f < C.$r.length; f++) C.$r[f](c);
      c.ba.vF = f;
      c.ha();
      ab.load("map", function () {
        c.ob();
      });
      c.M.Fm &&
        (setTimeout(function () {
          Ya(Ca);
        }, 1e3),
        ab.load(
          "mapclick",
          function () {
            window.MPC_Mgr = window.MPC_Mgr || {};
            window.MPC_Mgr[c.da] = new bb(c);
          },
          q,
        ));
      db() &&
        ab.load("oppc", function () {
          c.lv();
        });
      M() &&
        ab.load("opmb", function () {
          c.lv();
        });
      a = s;
      c.eC = [];
    }
  }
  z.lang.xa(Ra, z.lang.Ja, "Map");
  z.extend(Ra.prototype, {
    Ba: function () {
      var a = I("div"),
        b = a.style;
      b.overflow = "visible";
      b.position = "absolute";
      b.zIndex = "0";
      b.top = b.left = "0px";
      var b = I("div", { class: "BMap_mask" }),
        c = b.style;
      c.position = "absolute";
      c.top = c.left = "0px";
      c.zIndex = "9";
      c.overflow = "hidden";
      c.WebkitUserSelect = "none";
      a.appendChild(b);
      return a;
    },
    RB: function (a) {
      var b = a.style;
      b.overflow = "hidden";
      "absolute" !== eb(a).position && ((b.position = "relative"), (b.zIndex = 0));
      b.backgroundColor = "#F3F1EC";
      b.color = "#000";
      b.textAlign = "left";
    },
    ha: function () {
      var a = this;
      a.Ro = function () {
        var b = a.wb();
        if (a.width !== b.width || a.height !== b.height) {
          var c = new O(a.width, a.height),
            e = new R("onbeforeresize");
          e.size = c;
          a.dispatchEvent(e);
          a.xk((b.width - a.width) / 2, (b.height - a.height) / 2);
          a.Ge.style.width = (a.width = b.width) + "px";
          a.Ge.style.height = (a.height = b.height) + "px";
          c = new R("onresize");
          c.size = b;
          a.dispatchEvent(c);
        }
      };
      a.M.gt && (a.ba.sm = setInterval(a.Ro, 80));
    },
    xk: function (a, b, c, e) {
      var f = this.ya().Wb(this.la()),
        g = this.Dc,
        i = q;
      if (c && (c instanceof S || c instanceof N)) c = fb(c, this.M.Oa);
      c && S.KE(c) && ((this.ie = new N(c.lng, c.lat)), (i = t));
      if ((c = c && e ? g.zi(c, this.Qb) : this.Jb))
        if (((this.Jb = new N(c.lng + a * f, c.lat - b * f)), (a = g.Dh(this.Jb, this.Qb)) && i))
          this.ie = a;
    },
    Ug: function (a, b) {
      if (
        gb(a) &&
        (this.vv(), this.dispatchEvent(new R("onzoomstart")), (a = this.oo(a).zoom), a !== this.Za)
      ) {
        this.Bc = this.Za;
        this.Za = a;
        var c;
        b ? (c = b) : this.wh() && (c = this.wh().ma());
        c &&
          ((c = this.Bo(fb(c, this.M.Oa), this.Bc)),
          this.xk(this.width / 2 - c.x, this.height / 2 - c.y, this.tg(c, this.Bc), q));
        this.dispatchEvent(new R("onzoomstartcode"));
      }
    },
    Xc: function (a) {
      this.Ug(a);
    },
    DG: function (a) {
      this.Ug(this.Za + 1, a);
    },
    EG: function (a) {
      this.Ug(this.Za - 1, a);
    },
    Hi: function (a) {
      if (a instanceof S || a instanceof N)
        (a = fb(a, this.M.Oa)),
          (this.Jb = this.Dc.zi(a, this.Qb)),
          (this.ie = S.KE(a) ? new N(a.lng, a.lat) : this.Dc.Dh(this.Jb, this.Qb));
    },
    Ng: function (a, b) {
      a = Math.round(a) || 0;
      b = Math.round(b) || 0;
      this.xk(-a, -b);
    },
    Vo: function (a) {
      a && hb(a.Me) && (a.Me(this), this.dispatchEvent(new R("onaddcontrol", a)));
    },
    lO: function (a) {
      a && hb(a.remove) && (a.remove(), this.dispatchEvent(new R("onremovecontrol", a)));
    },
    nm: function (a) {
      a && hb(a.za) && (a.za(this), this.dispatchEvent(new R("onaddcontextmenu", a)));
    },
    iq: function (a) {
      a && hb(a.remove) && (this.dispatchEvent(new R("onremovecontextmenu", a)), a.remove());
    },
    Ra: function (a) {
      a && hb(a.Me) && (a.Me(this), this.dispatchEvent(new R("onaddoverlay", a)));
    },
    Lb: function (a) {
      a && hb(a.remove) && (a.remove(), this.dispatchEvent(new R("onremoveoverlay", a)));
    },
    OK: function () {
      this.dispatchEvent(new R("onclearoverlays"));
    },
    Ue: function (a) {
      a && this.dispatchEvent(new R("onaddtilelayer", a));
    },
    gg: function (a) {
      a && this.dispatchEvent(new R("onremovetilelayer", a));
    },
    Rg: function (a) {
      if (this.Wa !== a) {
        this.M.MZ && this.l0(a);
        var b = new R("onsetmaptype");
        b.w6 = this.Wa;
        this.Wa = this.M.Wa = a;
        this.Dc = this.Wa.Bj();
        this.xk(0, 0, this.Hv(), q);
        this.vv();
        var c = this.oo(this.la()).zoom;
        this.Ug(c);
        this.dispatchEvent(b);
        b = new R("onmaptypechange");
        b.Za = c;
        b.Wa = a;
        this.dispatchEvent(b);
        a.RF(this.M.Oa);
        a === $a || a === Za
          ? (Ya(Ba), Va(Wa(3, 2), ["layer", "raster"]))
          : Va(Wa(3, 17), ["layer", "normal_map"]);
      }
    },
    l0: function (a) {
      a === $a || a === Za
        ? (this.Wy(q),
          this.DO(t),
          (this.M.Zf = t),
          (this.M.Gk = t),
          Va(Wa(3, 2), ["layer", "raster"]))
        : (this.Wy(t),
          this.DO(q),
          (this.M.Zf = q),
          (this.M.Gk = q),
          Va(Wa(3, 1), ["layer", "vector"]));
    },
    Bf: function (a) {
      var b = this;
      if (a instanceof S || a instanceof N) b.Hi(a, { noAnimation: q });
      else if (ib(a))
        if (b.Wa === Xa) {
          var c = L.FC[a];
          c && ((pt = c.o), b.Bf(pt));
        } else {
          var e = this.lI();
          e.xu(function (c) {
            0 === e.Pm() &&
              2 === e.Ka.result.type &&
              ((c = c.At(0).point), (c = new N(c.lng, c.lat)), b.Bf(c), Xa.Lk(a) && b.KF(a));
          });
          e.search(a, { log: "center" });
        }
    },
    fd: function (a, b) {
      "[object Undefined]" !== Object.prototype.toString.call(b) && (b = parseInt(b));
      C.Wq("cus.fire", "time", { z_loadscripttime: ua - ta });
      var c = this;
      ra(
        window._BMapSecurityConfig && window._BMapSecurityConfig.serviceHost
          ? window._BMapSecurityConfig.serviceHost + "?qt=business"
          : ("http:" === window.location.protocol ? "http:" : "https:") +
              "//api.map.baidu.com?qt=business&ak=" +
              qa,
        function (a) {
          a && 0 === a.error && a.content && 0 === a.content.business && 1 === a.content.unauth
            ? ((a = new jb()),
              a.ey({
                zG: c.$a.getAttribute("id"),
                AG: "\u672a\u83b7\u5f97\u767e\u5ea6\u5730\u56fe\u5546\u7528\u6388\u6743",
              }))
            : a &&
              a.error &&
              ((a = new jb()),
              a.ey({
                zG: c.$a,
                AG: "\u672a\u83b7\u5f97\u767e\u5ea6\u5730\u56fe\u5546\u7528\u6388\u6743",
              }));
        },
      );
      if (ib(a))
        if (c.Wa === Xa) {
          var e = L.FC[a];
          e && ((pt = e.o), c.fd(pt, b));
        } else {
          var f = c.lI();
          f.xu(function (e) {
            if (0 === f.Pm() && (2 === f.Ka.result.type || 11 === f.Ka.result.type)) {
              var g = e.At(0).point,
                e = b || kb.Cx(f.Ka.content.level, c),
                g = new N(g.lng, g.lat);
              c.fd(g, e);
              Xa.Lk(a) && c.KF(a);
            } else
              (e = new S(116.403765, 39.91485)),
                c.fd(e, b),
                console.error(
                  "\u60a8\u597d\uff0c\u57ce\u5e02\u521d\u59cb\u5316\u5730\u56fe\u4f7f\u7528\u4e86qt=s\u68c0\u7d22\u670d\u52a1\uff0c\u8bf7\u68c0\u67e5\u8be5\u670d\u52a1\u662f\u5426\u5df2\u7ecf\u8d85\u914d\u989d\u3002",
                );
          });
          f.search(a, { log: "center" });
        }
      else if ((a instanceof S || a instanceof N) && b) {
        b = c.oo(b).zoom;
        c.Bc = c.Za || b;
        c.Za = b;
        e = c.ie;
        a = fb(a, this.M.Oa);
        c.ie = new N(a.lng, a.lat);
        c.Jb = c.Dc.zi(c.ie, c.Qb);
        c.XC = c.XC || c.Za;
        c.WC = c.WC || c.ie;
        var g = new R("onload"),
          i = new R("onloadcode");
        g.point = new N(a.lng, a.lat);
        g.pixel = c.Bo(c.ie, c.Za);
        g.zoom = b;
        c.loaded || ((c.loaded = q), c.dispatchEvent(g), xa || (xa = lb()));
        c.dispatchEvent(i);
        g = new R("onmoveend");
        g.nA = "centerAndZoom";
        e.Vb(c.ie) || c.dispatchEvent(g);
        c.dispatchEvent(new R("onmoveend"));
        c.Bc !== c.Za && ((e = new R("onzoomend")), (e.nA = "centerAndZoom"), c.dispatchEvent(e));
        c.M.qp && c.qp();
      }
    },
    lI: function () {
      this.ba.nN || (this.ba.nN = new mb(1));
      return this.ba.nN;
    },
    reset: function () {
      this.fd(this.WC, this.XC, q);
    },
    enableDragging: function () {
      this.M.jc = q;
    },
    disableDragging: function () {
      this.M.jc = t;
    },
    enableInertialDragging: function () {
      this.M.wx = q;
    },
    disableInertialDragging: function () {
      this.M.wx = t;
    },
    enableScrollWheelZoom: function () {
      this.M.vp = q;
    },
    disableScrollWheelZoom: function () {
      this.M.vp = t;
    },
    enableContinuousZoom: function () {
      this.M.sp = q;
    },
    disableContinuousZoom: function () {
      this.M.sp = t;
    },
    enableDoubleClickZoom: function () {
      this.M.xD = q;
    },
    disableDoubleClickZoom: function () {
      this.M.xD = t;
    },
    enableKeyboard: function () {
      this.M.xx = q;
    },
    disableKeyboard: function () {
      this.M.xx = t;
    },
    enablePinchToZoom: function () {
      this.M.up = q;
    },
    disablePinchToZoom: function () {
      this.M.up = t;
    },
    enableAutoResize: function () {
      this.M.gt = q;
      this.Ro();
      this.ba.sm || (this.ba.sm = setInterval(this.Ro, 80));
    },
    disableAutoResize: function () {
      this.M.gt = t;
      this.ba.sm && (clearInterval(this.ba.sm), (this.ba.sm = s));
    },
    enableBizAuthLogo: function () {
      this.M.tD = q;
      this.$o && this.$o.show();
    },
    disableBizAuthLogo: function () {
      this.M.tD = t;
      this.$o && this.$o.aa();
    },
    enableMapClick: function () {
      this.M.Fm = q;
      var a = this;
      window.MPC_Mgr && window.MPC_Mgr[a.da]
        ? window.MPC_Mgr[a.da].open()
        : (setTimeout(function () {
            Ya(Ca);
          }, 1e3),
          ab.load(
            "mapclick",
            function () {
              window.MPC_Mgr = window.MPC_Mgr || {};
              window.MPC_Mgr[a.da] = new bb(a);
            },
            q,
          ));
    },
    disableMapClick: function () {
      window.MPC_Mgr && window.MPC_Mgr[this.da] && window.MPC_Mgr[this.da].close();
      this.M.Fm = t;
    },
    qp: function () {
      this.M.qp = q;
      this.ao || ((this.ao = new BuildingLayer({ d4: q })), this.Ue(this.ao));
    },
    SW: function () {
      this.M.qp = t;
      this.ao && (this.gg(this.ao), (this.ao = s), delete this.ao);
    },
    wb: function () {
      return this.Ts && this.Ts instanceof O
        ? new O(this.Ts.width, this.Ts.height)
        : new O(this.$a.clientWidth, this.$a.clientHeight);
    },
    Ie: function (a) {
      a && a instanceof O
        ? ((this.Ts = a),
          (this.$a.style.width = a.width + "px"),
          (this.$a.style.height = a.height + "px"))
        : (this.Ts = s);
    },
    Hb: function () {
      return nb(this.ie, this.M.Oa);
    },
    Hv: u("ie"),
    la: u("Za"),
    dW: function () {
      this.Ro();
    },
    oo: function (a) {
      var b = this.M.kc,
        c = this.M.qc,
        e = t,
        a = Math.round(a);
      a < b && ((e = q), (a = b));
      a > c && ((e = q), (a = c));
      return { zoom: a, KD: e };
    },
    Ta: u("$a"),
    vc: function (a, b) {
      a = fb(a, this.M.Oa);
      b = b || this.la();
      return this.Dc.vc(a, b, this.Jb, this.wb(), this.Qb);
    },
    Bo: function (a, b) {
      b = b || this.la();
      return this.Dc.vc(a, b, this.Jb, this.wb(), this.Qb);
    },
    tg: function (a, b) {
      b = b || this.la();
      return this.Dc.cc(a, b, this.Jb, this.wb(), this.Qb);
    },
    YT: function (a, b) {
      b = b || this.la();
      return this.Dc.Jy(a, b, this.Jb, this.wb());
    },
    Jy: function (a, b) {
      return this.YT(a, b);
    },
    cc: function (a, b) {
      return nb(this.tg(a, b), this.M.Oa);
    },
    ef: function (a, b) {
      if (a) {
        var a = fb(a, this.M.Oa),
          c = this.Bo(new N(a.lng, a.lat), b);
        c.x -= this.offsetX;
        c.y -= this.offsetY;
        return c;
      }
    },
    PZ: function (a, b) {
      b = b || this.la();
      return this.Dc.QZ(a, b, this.Jb, this.wb(), this.Qb);
    },
    OZ: function (a, b) {
      if (a) {
        var c = this.PZ(new N(a.lng, a.lat), b);
        c.x -= this.offsetX;
        c.y -= this.offsetY;
        return c;
      }
    },
    XN: function (a, b) {
      if (a) {
        var c = new T(a.x, a.y);
        c.x += this.offsetX;
        c.y += this.offsetY;
        return this.cc(c, b);
      }
    },
    TT: function (a, b) {
      if (a) {
        var c = new T(a.x, a.y);
        c.x += this.offsetX;
        c.y += this.offsetY;
        return this.tg(c, b);
      }
    },
    pointToPixelFor3D: function (a, b) {
      var c = map.Qb;
      this.Wa === Xa && c && ob.VK(a, this, b);
    },
    n6: function (a, b) {
      var c = map.Qb;
      this.Wa === Xa && c && ob.UK(a, this, b);
    },
    o6: function (a, b) {
      var c = this,
        e = map.Qb;
      c.Wa === Xa &&
        e &&
        ob.VK(a, c, function (a) {
          a.x -= c.offsetX;
          a.y -= c.offsetY;
          b && b(a);
        });
    },
    l6: function (a, b) {
      var c = map.Qb;
      this.Wa === Xa && c && ((a.x += this.offsetX), (a.y += this.offsetY), ob.UK(a, this, b));
    },
    Nd: function (a) {
      if (!this.Qt()) return new pb();
      var b = a || {},
        a = b.margins || [0, 0, 0, 0],
        c = b.zoom || s,
        b = this.cc({ x: a[3], y: this.height - a[2] }, c),
        a = this.cc({ x: this.width - a[1], y: a[0] }, c);
      return new pb(b, a);
    },
    UX: function (a) {
      if (!this.Qt()) return new pb();
      var b = a || {},
        a = b.margins || [0, 0, 0, 0],
        c = b.zoom || s,
        b = this.Jy({ x: a[3], y: this.height - a[2] }, c),
        a = this.Jy({ x: this.width - a[1], y: a[0] }, c);
      return new pb(b, a);
    },
    Qt: function () {
      return !!this.loaded;
    },
    vS: function (a, b) {
      for (
        var c = this.ya(),
          e = b.margins || [10, 10, 10, 10],
          f = b.zoomFactor || 0,
          g = e[1] + e[3],
          e = e[0] + e[2],
          i = c.uf(),
          k = (c = c.Ze());
        k >= i;
        k--
      ) {
        var m = this.ya().Wb(k);
        if (a.nG().lng / m < this.width - g && a.nG().lat / m < this.height - e) break;
      }
      k += f;
      k < i && (k = i);
      k > c && (k = c);
      return k;
    },
    Ft: function (a, b) {
      var c = { center: this.Hb(), zoom: this.la() };
      if (!a || (!a instanceof pb && 0 === a.length) || (a instanceof pb && a.Gj())) return c;
      var e = [];
      a instanceof pb ? (e.push(a.Ce()), e.push(a.Pd())) : (e = a.slice(0));
      for (var b = b || {}, f = [], g = 0, i = e.length; g < i; g++) {
        var k = fb(e[g], this.M.Oa);
        f.push(this.Dc.zi(k, this.Qb));
      }
      e = new pb();
      for (g = f.length - 1; 0 <= g; g--) e.extend(f[g]);
      if (e.Gj()) return c;
      c = e.Hb();
      f = this.vS(e, b);
      b.margins &&
        ((e = b.margins),
        (g = (e[1] - e[3]) / 2),
        (e = (e[0] - e[2]) / 2),
        (i = this.ya().Wb(f)),
        b.offset && ((g = b.offset.width), (e = b.offset.height)),
        (c.lng += i * g),
        (c.lat += i * e));
      c = this.Dc.Dh(c, this.Qb);
      return { center: nb(new N(c.lng, c.lat), this.M.Oa), zoom: f };
    },
    Sg: function (a, b) {
      var c;
      c = a && a.center ? a : this.Ft(a, b);
      var b = b || {},
        e = b.delay || 200;
      if (c.zoom === this.Za && b.enableAnimation !== t) {
        var f = this;
        setTimeout(function () {
          f.Hi(c.center, { duration: 210 });
        }, e);
      } else this.fd(c.center, c.zoom);
    },
    $f: u("ee"),
    wh: function () {
      return this.ba.xb && this.ba.xb.eb() ? this.ba.xb : s;
    },
    getDistance: function (a, b) {
      if (a && b) {
        if (a.Vb(b)) return 0;
        var c = this.M ? this.M.Oa : 5,
          a = fb(a, c),
          b = fb(b, c),
          c = 0,
          c = U.Nk(a, b);
        if (c === s || c === l) c = 0;
        return c;
      }
    },
    Ox: function () {
      var a = [],
        b = this.ua,
        c = this.Je;
      if (b) for (var e in b) b[e] instanceof qb && a.push(b[e]);
      if (c) {
        e = 0;
        for (b = c.length; e < b; e++) a.push(c[e]);
      }
      return a;
    },
    ya: function () {
      this.Wa.RF(this.M.Oa);
      return this.Wa;
    },
    MY: u("Id"),
    lv: function () {
      for (var a = this.ba.vF; a < C.$r.length; a++) C.$r[a](this);
      this.ba.vF = a;
    },
    KF: function (a) {
      this.Qb = Xa.Lk(a);
      this.fx = Xa.SL(this.Qb);
      this.Wa === Xa && this.Dc instanceof rb && (this.Dc.sj = this.Qb);
    },
    setDefaultCursor: function (a) {
      this.M.Ac = a;
      this.platform && (this.platform.style.cursor = this.M.Ac);
    },
    getDefaultCursor: function () {
      return this.M.Ac;
    },
    setDraggingCursor: function (a) {
      this.M.Ld = a;
    },
    getDraggingCursor: function () {
      return this.M.Ld;
    },
    ay: function () {
      return this.M.rX && 1.5 <= this.M.devicePixelRatio;
    },
    kC: function (a, b) {
      b ? this.Uh[b] || (this.Uh[b] = {}) : (b = "custom");
      a.tag = b;
      a instanceof sb && ((this.Uh[b][a.da] = a), a.za(this));
      var c = this;
      ab.load(
        "hotspot",
        function () {
          c.lv();
        },
        q,
      );
    },
    J_: function (a, b) {
      b || (b = "custom");
      this.Uh[b][a.da] && delete this.Uh[b][a.da];
    },
    hx: function (a) {
      a || (a = "custom");
      this.Uh[a] = {};
    },
    vv: function () {
      var a = this.Wa.uf(),
        b = this.Wa.Ze(),
        c = this.M;
      c.kc = c.xP || a;
      c.qc = c.wP || b;
      c.kc < a && (c.kc = a);
      c.qc > b && (c.qc = b);
    },
    setMinZoom: function (a) {
      a = Math.round(a);
      a > this.M.qc && (a = this.M.qc);
      this.M.xP = a;
      this.ZJ();
    },
    setMaxZoom: function (a) {
      a = Math.round(a);
      a < this.M.kc && (a = this.M.kc);
      this.M.wP = a;
      this.ZJ();
    },
    ZJ: function () {
      this.vv();
      var a = this.M;
      this.Za < a.kc ? this.Xc(a.kc) : this.Za > a.qc && this.Xc(a.qc);
      var b = new R("onzoomspanchange");
      b.kc = a.kc;
      b.qc = a.qc;
      this.dispatchEvent(b);
    },
    a5: u("eC"),
    getKey: function () {
      return qa;
    },
    n0: function (a) {
      function b(a) {
        c.J0 = a;
        if (window._BMapSecurityConfig && window._BMapSecurityConfig.serviceHost)
          var b = window._BMapSecurityConfig.serviceHost + "custom/v2/mapstyle",
            g = "qt=custom_v2&version=4&";
        else (b = C.dd + "custom/v2/mapstyle"), (g = "qt=custom_v2&version=4&ak=" + qa + "&");
        g = g + "is_all=true&is_new=1&" + ("styles=" + encodeURIComponent(c.fG(a, f)));
        a = tb(b + "?" + g);
        g = a.substring(a.indexOf("?") + 1);
        ub(b, g, window[e + "cb"]);
      }
      var c = this,
        e = this.da;
      C.Wq("cus.fire", "count", "z_setmapstylev2count");
      Va(Wa(1, 2, 1), ["instance", "custom_style", "vector"]);
      this.Wy(t);
      this.M.MZ = q;
      window.MPC_Mgr && window.MPC_Mgr[c.da] && window.MPC_Mgr[c.da].close();
      c.M.Fm = t;
      this.addEventListener("hidecopyright", function () {
        c.Dk.aa();
        c.M.kp = !!a.customEditor;
        c.M.kp === t && c.JF(new O(1, 1));
      });
      c.Dk && c.Dk.aa();
      this.M.kp = !!a.customEditor;
      this.M.U6 = !!a.sharing;
      this.M.A6 = !!a.preview;
      this.M.kp === t && this.JF(new O(1, 1));
      ab.load(
        "hotspot",
        function () {
          c.lv();
        },
        q,
      );
      window[e + "zoomRegion"] = {};
      window.J7 = [];
      window[e + "zoomStyleBody"] = [];
      window[e + "zoomFrontStyle"] = {};
      var f = this.la();
      z.extend({}, a);
      window[e + "cb"] = function (a) {
        a = JSON.parse(a);
        0 === a.status &&
          (3 === a.data.style.length
            ? ((window[e + "_bmap_baseFs"] = a.data.style),
              (window[e + "StyleBody"] = a.data.style[2]))
            : (window[e + "StyleBody"] = a.data.style),
          c.sP(),
          c.pZ());
      };
      if (a.styleId) {
        var g = "jsapi";
        a.sharing ? (g = "sharing") : a.preview && (g = "preview");
        this.kY(a.styleId, g, b);
      } else b(a.styleJson);
      window.iconSetInfo_high ||
        ra(
          C.url.proto +
            C.url.domain.TILE_ONLINE_URLS[0] +
            "/sty/icons_na2x.js?udt=20190108&v=001&from=jsapi",
        );
    },
    kY: function (a, b, c) {
      var e = this,
        f = this.da,
        g = (1e5 * Math.random()).toFixed(0);
      window[f + "_cbk_si_phpui" + g] = function (a) {
        var b = [];
        a.result &&
          0 === a.result.error &&
          a.content &&
          0 === a.content.status &&
          (b = e.Gy(a.content.data.json));
        c && c(b);
      };
      window[f + "_cbk_si_api" + g] = function (a) {
        var b = [];
        0 === a.status && (b = a.info ? e.Gy(a.info.json) : e.Gy(a.data.json));
        c && c(b);
      };
      var i = "/apiconsole/custommap/";
      if (window._BMapSecurityConfig && window._BMapSecurityConfig.serviceHost)
        var k = window._BMapSecurityConfig.serviceHost + "?qt=custom_map&v=3.0",
          k = k + ("&style_id=" + a + "&type=publish");
      else (k = C.dd + "?qt=custom_map&v=3.0"), (k += "&style_id=" + a + "&type=publish&ak=" + qa);
      k += "&callback=" + f + "_cbk_si_phpui" + g;
      switch (b) {
        case "jsapi":
          i = k;
          break;
        case "sharing":
          i =
            i +
            "getSharingJson" +
            ("?styleid=" + a + "&type=edit") +
            ("&ck=" + f + "_cbk_si_api" + g);
          break;
        case "preview":
          i = i + "getJson" + ("?styleid=" + a + "&type=edit") + ("&ck=" + f + "_cbk_si_api" + g);
      }
      ra(i);
    },
    LW: function () {
      Array.prototype.map ||
        (Array.prototype.map = function (a, b) {
          var c, e, f;
          this == s && aa(new TypeError(" this is null or not defined"));
          var g = Object(this),
            i = g.length >>> 0;
          "[object Function]" != Object.prototype.toString.call(a) &&
            aa(new TypeError(a + " is not a function"));
          b && (c = b);
          e = Array(i);
          for (f = 0; f < i; ) {
            var k;
            f in g && ((k = g[f]), (k = a.call(c, k, f, g)), (e[f] = k));
            f++;
          }
          return e;
        });
    },
    Gy: function (a) {
      if (a === s || "" === a) return [];
      this.LW();
      var b = {
          t: "featureType",
          e: "elementType",
          v: "visibility",
          c: "color",
          l: "lightness",
          s: "saturation",
          w: "weight",
          z: "level",
          h: "hue",
          f: "fontsize",
          zri: "curZoomRegionId",
          zr: "curZoomRegion",
        },
        c = {
          all: "all",
          g: "geometry",
          "g.f": "geometry.fill",
          "g.s": "geometry.stroke",
          l: "labels",
          "l.t.f": "labels.text.fill",
          "l.t.s": "labels.text.stroke",
          "l.t": "labels.text",
          "l.i": "labels.icon",
          "g.tf": "geometry.fill",
        };
      return a.split(",").map(function (a) {
        var a = a.split("|").map(function (a) {
            var e = b[a.split(":")[0]],
              a = c[a.split(":")[1]] ? c[a.split(":")[1]] : a.split(":")[1];
            switch (a) {
              case "poi":
                a = "poilabel";
                break;
              case "districtlabel":
                a = "districtlabel";
            }
            var f = {};
            f[e] = a;
            return f;
          }),
          f = a[0],
          g = 1;
        a[1].elementType && ((g = 2), z.extend(f, a[1]));
        for (var i = {}; g < a.length; g++) z.extend(i, a[g]);
        return z.extend(f, { stylers: i });
      });
    },
    RY: function () {
      return this.gf.og;
    },
    L4: function (a, b) {
      var c = this,
        e = this.da,
        f = (1e5 * Math.random()).toFixed(0);
      window[e + "_cbk" + f] = function (b) {
        b = JSON.parse(b);
        b = 3 === b.data.style.length ? b.data.style[2] : b.data.style;
        c.r1(b, a);
        c.sP(a);
        b = new R("onzoomfeatureload" + a);
        c.dispatchEvent(b);
        delete window[e + "_cbk" + f];
      };
      if (window._BMapSecurityConfig && window._BMapSecurityConfig.serviceHost)
        var g = window._BMapSecurityConfig.serviceHost + "custom/v2/mapstyle",
          i = "qt=custom_v2&";
      else (g = C.dd + "custom/v2/mapstyle"), (i = "qt=custom_v2&ak=" + qa + "&");
      i += "is_all=true&is_new=1&";
      b.styleJson
        ? (i += "styles=" + encodeURIComponent(this.fG(b.styleJson, parseInt(a, 10))))
        : b.styleId && (i += "styles=" + encodeURIComponent(c.fG(c.J0, parseInt(a, 10))));
      i = tb(g + "?" + i);
      i = i.substring(i.indexOf("?") + 1);
      ub(g, i, window[e + "_cbk" + f]);
    },
    JF: function (a, b) {
      var c = new R("oncopyrightoffsetchange", { ZE: a, yW: b });
      this.M.ZK = b;
      this.dispatchEvent(c);
    },
    uu: function (a) {
      var b = this;
      window.MPC_Mgr && window.MPC_Mgr[b.da] && window.MPC_Mgr[b.da].close();
      b.M.Fm = t;
      C.Wq("cus.fire", "count", "z_setmapstylecount");
      if (a) {
        b = this;
        a.styleJson && (a.styleStr = b.K0(a.styleJson));
        M() && z.ga.Sy
          ? setTimeout(function () {
              b.M.Fe = a;
              b.dispatchEvent(new R("onsetcustomstyles", a));
            }, 50)
          : ((this.M.Fe = a),
            this.dispatchEvent(new R("onsetcustomstyles", a)),
            this.LM(b.M.Fe.geotableId));
        var c = { style: a.style };
        a.features && 0 < a.features.length && (c.features = q);
        a.styleJson && 0 < a.styleJson.length && (c.styleJson = q);
        Ya(5050, c);
        a.style &&
          (c = b.M.MC[a.style] ? b.M.MC[a.style].backColor : b.M.MC.normal.backColor) &&
          (this.Ta().style.backgroundColor = c);
      }
    },
    iZ: function (a) {
      this.controls ||
        (this.controls = {
          navigationControl: new vb(),
          scaleControl: new wb(),
          overviewMapControl: new xb(),
          mapTypeControl: new yb(),
        });
      var b = this,
        c;
      for (c in this.controls) b.lO(b.controls[c]);
      a = a || [];
      z.oc.Rb(a, function (a) {
        b.Vo(b.controls[a]);
      });
    },
    LM: function (a) {
      a
        ? (this.Rs && this.Rs.Lf === a) ||
          (this.gg(this.Rs), (this.Rs = new zb({ geotableId: a })), this.Ue(this.Rs))
        : this.gg(this.Rs);
    },
    Xd: function () {
      var a = this.la() >= this.M.vG && this.ya() === Sa && 18 >= this.la(),
        b = t;
      try {
        document.createElement("canvas").getContext("2d"), (b = q);
      } catch (c) {
        b = t;
      }
      return a && b;
    },
    getCurrentCity: function () {
      return { name: this.ph, code: this.Ds };
    },
    zt: function () {
      this.W.to();
      return this.W;
    },
    mZ: function (a) {
      Sa.setMaxZoom(a.maxZoom || 19);
      var b = new R("oninitindoorlayer");
      b.bf = a;
      this.dispatchEvent(b);
      this.M.Zf = t;
    },
    pZ: function (a) {
      if (this.M.Zf) {
        var b = new R("onupdatestyles");
        this.dispatchEvent(b);
      } else
        (b = new R("oninitindoorlayer")),
          (b.bf = a),
          this.dispatchEvent(b),
          (this.M.Zf = q),
          (this.M.Gk = q);
    },
    Wy: function (a) {
      this.M.jF = a;
      this.gf.Mb || (this.gf.Mb = this.gf.Ij[0].Mb);
      this.gf.Mb.parentElement.style.display = a ? "block" : "none";
    },
    DO: function (a) {
      this.gf.og.style.display = a ? "block" : "none";
    },
    setPanorama: function (a) {
      this.W = a;
      this.W.OF(this);
    },
    fG: function (a, b) {
      for (
        var c = this.da,
          e = {
            featureType: "t",
            elementType: "e",
            visibility: "v",
            color: "c",
            lightness: "l",
            saturation: "s",
            weight: "w",
            level: "z",
            hue: "h",
            fontsize: "f",
          },
          f = {
            all: "all",
            geometry: "g",
            "geometry.fill": "g.f",
            "geometry.stroke": "g.s",
            labels: "l",
            "labels.text.fill": "l.t.f",
            "labels.text.stroke": "l.t.s",
            "labels.text": "l.t",
            "labels.icon": "l.i",
            "geometry.topfill": "g.f",
          },
          g = [],
          i = this.Wa.uf();
        i <= this.Wa.Ze();
        i++
      )
        window[c + "zoomFrontStyle"][i] = {};
      window[c + "zoomFrontStyle"].main = {};
      for (var i = 0, k; (k = a[i]); i++)
        if (!this.wZ(k)) {
          b = this.eY(k, b);
          if (
            ("land" === k.featureType ||
              "all" === k.featureType ||
              "background" === k.featureType) &&
            "string" === typeof k.elementType &&
            ("geometry" === k.elementType ||
              "geometry.fill" === k.elementType ||
              "all" === k.elementType) &&
            k.stylers &&
            (!k.stylers.visibility || "off" !== k.stylers.visibility)
          )
            k.stylers.color && (window[c + "zoomFrontStyle"][b].bmapLandColor = k.stylers.color);
          "railway" === k.featureType &&
            "string" === typeof k.elementType &&
            k.stylers &&
            (k.stylers.color &&
              ("geometry" === k.elementType &&
                ((window[c + "zoomFrontStyle"][b].bmapRailwayFillColor = k.stylers.color),
                (window[c + "zoomFrontStyle"][b].bmapRailwayStrokeColor = k.stylers.color)),
              "geometry.fill" === k.elementType &&
                (window[c + "zoomFrontStyle"][b].bmapRailwayFillColor = k.stylers.color),
              "geometry.stroke" === k.elementType &&
                (window[c + "zoomFrontStyle"][b].bmapRailwayStrokeColor = k.stylers.color)),
            k.stylers.visibility &&
              (window[c + "zoomFrontStyle"][b].bmapRailwayVisibility = k.stylers.visibility));
          "roadarrow" === k.featureType &&
            "labels.icon" === k.elementType &&
            k.stylers &&
            (window[c + "zoomFrontStyle"][b].bmapRoadarrowVisibility = k.stylers.visibility);
          var m = {};
          z.extend(m, k);
          k = m.stylers;
          delete m.stylers;
          z.extend(m, k);
          k = [];
          for (var n in e)
            if (m[n] && !this.tZ(n))
              if ("elementType" === n) k.push(e[n] + ":" + f[m[n]]);
              else {
                switch (m[n]) {
                  case "poilabel":
                    m[n] = "poi";
                    break;
                  case "districtlabel":
                    m[n] = "label";
                }
                k.push(e[n] + ":" + m[n]);
              }
          2 < k.length && g.push(k.join("|"));
        }
      return g.join(",");
    },
    K0: function (a) {
      for (
        var b = {
            featureType: "t",
            elementType: "e",
            visibility: "v",
            color: "c",
            lightness: "l",
            saturation: "s",
            weight: "w",
            zoom: "z",
            hue: "h",
          },
          c = {
            all: "all",
            geometry: "g",
            "geometry.fill": "g.f",
            "geometry.stroke": "g.s",
            labels: "l",
            "labels.text.fill": "l.t.f",
            "labels.text.stroke": "l.t.s",
            "lables.text": "l.t",
            "labels.icon": "l.i",
          },
          e = [],
          f = 0,
          g;
        (g = a[f]);
        f++
      ) {
        var i = g.stylers;
        delete g.stylers;
        z.extend(g, i);
        var i = [],
          k;
        for (k in b)
          if (g[k])
            if ("elementType" === k) i.push(b[k] + ":" + c[g[k]]);
            else {
              switch (g[k]) {
                case "poilabel":
                  g[k] = "poi";
                  break;
                case "districtlabel":
                  g[k] = "label";
              }
              i.push(b[k] + ":" + g[k]);
            }
        2 < i.length && e.push(i.join("|"));
      }
      return e.join(",");
    },
    eY: function (a) {
      a = a.stylers.level;
      return a === l ? "main" : parseInt(a, 10);
    },
    wZ: function (a) {
      var b = {};
      z.extend(b, a.stylers);
      delete b.curZoomRegionId;
      delete b.curZoomRegion;
      delete b.level;
      return z.IE(b) ? q : t;
    },
    A5: function (a, b) {
      var c = a.stylers.level;
      return c === l ? q : c === b + "" ? q : t;
    },
    tZ: function (a) {
      return { curZoomRegionId: q, curZoomRegion: q }[a] ? q : t;
    },
    b5: function (a, b) {
      var c = a.stylers.level,
        e = {};
      z.extend(e, b);
      c !== l && (e[parseInt(c, 10)] = q);
      return e;
    },
    r1: function (a, b) {
      var c = this.da;
      window[c + "zoomStyleBody"][b] = a;
      if (!window[c + "zoomRegion"][b])
        for (var e = this.Wa.uf(), f = this.Wa.Ze(); e <= f; e++)
          window[c + "zoomRegion"][e] || (window[c + "zoomStyleBody"][e] = a);
    },
    sP: function () {
      var a = this.da;
      if (window[a + "zoomFrontStyle"].main.bmapRoadarrowVisibility)
        for (var b = this.Wa.uf(); b <= this.Wa.Ze(); b++)
          window[a + "zoomFrontStyle"][b].bmapRoadarrowVisibility ||
            (window[a + "zoomFrontStyle"][b].bmapRoadarrowVisibility =
              window[a + "zoomFrontStyle"].main.bmapRoadarrowVisibility);
      if (window[a + "zoomFrontStyle"].main.bmapLandColor)
        for (b = this.Wa.uf(); b <= this.Wa.Ze(); b++)
          window[a + "zoomFrontStyle"][b].bmapLandColor ||
            (window[a + "zoomFrontStyle"][b].bmapLandColor =
              window[a + "zoomFrontStyle"].main.bmapLandColor);
      if (window[a + "zoomFrontStyle"].main.bmapRailwayFillColor)
        for (b = this.Wa.uf(); b <= this.Wa.Ze(); b++)
          window[a + "zoomFrontStyle"][b].bmapRailwayFillColor ||
            (window[a + "zoomFrontStyle"][b].bmapRailwayFillColor =
              window[a + "zoomFrontStyle"].main.bmapRailwayFillColor);
      if (window[a + "zoomFrontStyle"].main.bmapRailwayStrokeColor)
        for (b = this.Wa.uf(); b <= this.Wa.Ze(); b++)
          window[a + "zoomFrontStyle"][b].bmapRailwayStrokeColor ||
            (window[a + "zoomFrontStyle"][b].bmapRailwayStrokeColor =
              window[a + "zoomFrontStyle"].main.bmapRailwayStrokeColor);
      if (window[a + "zoomFrontStyle"].main.bmapRailwayVisibility)
        for (b = this.Wa.uf(); b <= this.Wa.Ze(); b++)
          window[a + "zoomFrontStyle"][b].bmapRailwayVisibility ||
            (window[a + "zoomFrontStyle"][b].bmapRailwayVisibility =
              window[a + "zoomFrontStyle"].main.bmapRailwayVisibility);
    },
    w3: function (a, b) {
      var c = {};
      z.extend(c, a);
      if (c[b]) {
        for (var e = this.Wa.uf(), f = this.Wa.Ze(); e <= f; e++)
          if (!c[e]) {
            c[e] = q;
            break;
          }
        delete c[b];
      }
      return c;
    },
    x5: function (a) {
      return a.Ot || "0" === a.uid ? t : q;
    },
    hW: function () {
      delete this.Xi.y_;
    },
    B3: function () {
      this.Xi = {};
    },
    Uo: function (a, b, c) {
      if (!this.M.kp) return t;
      a = a || "sp" + this.ba.X6++;
      if (b && 0 !== b.length)
        return (
          (c = c || {}),
          (this.Xi[a] = this.Xi[a] || { polygon: [], polyline: [] }),
          (this.Xi = this.Xi || {}),
          this.Xi[a][c.type].push({ aG: b, Yb: c.Yb, type: c.type, style: c.style }),
          a
        );
    },
    M1: function (a) {
      return Ab / Math.pow(2, 18 - a);
    },
  });
  var Ab = 4.007545274461451e7,
    Qa = 1;
  function Ya(a, b) {
    if (a) {
      var b = b || {},
        c = "",
        e;
      for (e in b) c = c + "&" + e + "=" + encodeURIComponent(b[e]);
      var f = function (a) {
          a &&
            ((Bb = q),
            setTimeout(function () {
              Cb.src = C.dd + "images/blank.gif?" + a.src;
            }, 50));
        },
        g = function () {
          var a = Db.shift();
          a && f(a);
        };
      e = (1e8 * Math.random()).toFixed(0);
      Bb
        ? Db.push({
            src:
              "product=jsapi&sub_product=jsapi&v=" +
              C.version +
              "&sub_product_v=" +
              C.version +
              "&t=" +
              e +
              "&code=" +
              a +
              "&da_src=" +
              a +
              c,
          })
        : f({
            src:
              "product=jsapi&sub_product=jsapi&v=" +
              C.version +
              "&sub_product_v=" +
              C.version +
              "&t=" +
              e +
              "&code=" +
              a +
              "&da_src=" +
              a +
              c,
          });
      Eb ||
        (z.V(Cb, "load", function () {
          Bb = t;
          g();
        }),
        z.V(Cb, "error", function () {
          Bb = t;
          g();
        }),
        (Eb = q));
    }
  }
  var Bb,
    Eb,
    Db = [],
    Cb = new Image();
  Ya(5e3, { device_pixel_ratio: window.devicePixelRatio, platform: navigator.platform });
  C.FM = {
    TILE_BASE_URLS: [
      "maponline0.bdimg.com/starpic/?qt=satepc&",
      "maponline1.bdimg.com/starpic/?qt=satepc&",
      "maponline2.bdimg.com/starpic/?qt=satepc&",
      "maponline3.bdimg.com/starpic/?qt=satepc&",
    ],
    TILE_ONLINE_URLS: [
      "maponline0.bdimg.com",
      "maponline1.bdimg.com",
      "maponline2.bdimg.com",
      "maponline3.bdimg.com",
    ],
    TIlE_PERSPECT_URLS: [
      "gss0.bdstatic.com/-OR1cTe9KgQFm2e88IuM_a",
      "gss0.bdstatic.com/-ON1cTe9KgQFm2e88IuM_a",
      "gss0.bdstatic.com/-OZ1cTe9KgQFm2e88IuM_a",
      "gss0.bdstatic.com/-OV1cTe9KgQFm2e88IuM_a",
    ],
    geolocControl: "gsp0.baidu.com/8LkJsjOpB1gCo2Kml5_Y_D3",
    TILES_YUN_HOST: [
      "gsp0.baidu.com/-eR1bSahKgkFkRGko9WTAnF6hhy",
      "gsp0.baidu.com/-eN1bSahKgkFkRGko9WTAnF6hhy",
      "gsp0.baidu.com/-eZ1bSahKgkFkRGko9WTAnF6hhy",
      "gsp0.baidu.com/-eV1bSahKgkFkRGko9WTAnF6hhy",
    ],
    traffic: "itsmap2.baidu.com",
    message: "j.map.baidu.com",
    baidumap: "map.baidu.com",
    wuxian: "gsp0.baidu.com/6a1OdTeaKgQFm2e88IuM_a",
    pano: ["apisv0.bdimg.com", "apisv1.bdimg.com"],
    panoVerify: "api.map.baidu.com",
    main_domain_nocdn: { baidu: "api.map.baidu.com", other: "api.map.baidu.com" },
    main_domain_cdn: {
      baidu: ["mapapip0.bdimg.com", "mapapip1.bdimg.com", "mapapip2.bdimg.com"],
      other: ["api.map.baidu.com"],
      webmap: ["webmap0.bdimg.com"],
    },
    map_click: "gsp0.baidu.com/80MWbzKh2wt3n2qy8IqW0jdnxx1xbK",
    vector_traffic: "maponline0.bdimg.com",
  };
  C.aZ = {
    TILE_BASE_URLS: [
      "maponline0.bdimg.com/starpic/?qt=satepc&",
      "maponline1.bdimg.com/starpic/?qt=satepc&",
      "maponline2.bdimg.com/starpic/?qt=satepc&",
      "maponline3.bdimg.com/starpic/?qt=satepc&",
    ],
    TILE_ONLINE_URLS: [
      "maponline0.bdimg.com",
      "maponline1.bdimg.com",
      "maponline2.bdimg.com",
      "maponline3.bdimg.com",
    ],
    TIlE_PERSPECT_URLS: [
      "d0.map.baidu.com",
      "d1.map.baidu.com",
      "d2.map.baidu.com",
      "d3.map.baidu.com",
    ],
    geolocControl: "loc.map.baidu.com",
    TILES_YUN_HOST: [
      "g0.api.map.baidu.com",
      "g1.api.map.baidu.com",
      "g2.api.map.baidu.com",
      "g3.api.map.baidu.com",
    ],
    traffic: "itsmap2.baidu.com",
    message: "j.map.baidu.com",
    baidumap: "map.baidu.com",
    wuxian: "wuxian.baidu.com",
    pano: ["apisv0.bdimg.com", "apisv1.bdimg.com"],
    panoVerify: "api.map.baidu.com",
    main_domain_nocdn: { baidu: "api.map.baidu.com" },
    main_domain_cdn: {
      baidu: ["mapapip0.bdimg.com", "mapapip1.bdimg.com", "mapapip2.bdimg.com"],
      webmap: ["webmap0.bdimg.com"],
    },
    map_click: "mapclick.map.baidu.com",
    vector_traffic: "maponline0.bdimg.com",
  };
  C.s1 = {
    0: { proto: "http://", domain: C.aZ },
    1: { proto: "https://", domain: C.FM },
    2: { proto: "https://", domain: C.FM },
  };
  window.BMAP_PROTOCOL && "https" === window.BMAP_PROTOCOL && (window.HOST_TYPE = 2);
  C.Uu = window.HOST_TYPE || "0";
  C.url = C.s1[C.Uu];
  C.Xp = C.url.proto + C.url.domain.baidumap + "/";
  C.dd =
    window._BMapSecurityConfig && window._BMapSecurityConfig.serviceHost
      ? window._BMapSecurityConfig.serviceHost
      : C.url.proto +
        ("2" == C.Uu
          ? C.url.domain.main_domain_nocdn.other
          : C.url.domain.main_domain_nocdn.baidu) +
        "/";
  // C.pa =
  //   C.url.proto +
  //   ("2" == C.Uu ? C.url.domain.main_domain_cdn.other[0] : C.url.domain.main_domain_nocdn.baidu) +
  //   "/";
  C.pa = BMAP_CONFIG.home;
  C.qj = C.url.proto + C.url.domain.main_domain_cdn.webmap[0] + "/";
  C.YN = C.url.proto + C.url.domain.panoVerify + "/";
  C.xh = function (a, b) {
    var c,
      e,
      b = b || "";
    switch (a) {
      case "main_domain_nocdn":
        c = C.dd + b;
        break;
      case "main_domain_cdn":
        c = C.pa + b;
        break;
      default:
        (e = C.url.domain[a]),
          "[object Array]" == Object.prototype.toString.call(e)
            ? ((c = []),
              z.oc.Rb(e, function (a, e) {
                c[e] = C.url.proto + a + "/" + b;
              }))
            : (c = C.url.proto + C.url.domain[a] + "/" + b);
    }
    return c;
  };
  function Fb(a) {
    var b = { duration: 1e3, Nc: 30, np: 0, fc: Gb.kN, gu: ba() };
    this.ig = [];
    if (a) for (var c in a) b[c] = a[c];
    this.m = b;
    if (gb(b.np)) {
      var e = this;
      setTimeout(function () {
        e.start();
      }, b.np);
    } else b.np != Hb && this.start();
  }
  var Hb = "INFINITE";
  Fb.prototype.start = function () {
    this.nv = lb();
    this.mA = this.nv + this.m.duration;
    Ib(this);
  };
  Fb.prototype.add = function (a) {
    this.ig.push(a);
  };
  function Ib(a) {
    var b = lb();
    b >= a.mA
      ? (hb(a.m.Ba) && a.m.Ba(a.m.fc(1)),
        hb(a.m.finish) && a.m.finish(),
        0 < a.ig.length && ((b = a.ig[0]), (b.ig = [].concat(a.ig.slice(1))), b.start()))
      : ((a.Ty = a.m.fc((b - a.nv) / a.m.duration)),
        hb(a.m.Ba) && a.m.Ba(a.Ty),
        a.hG ||
          (a.rs = setTimeout(function () {
            Ib(a);
          }, 1e3 / a.m.Nc)));
  }
  Fb.prototype.stop = function (a) {
    this.hG = q;
    for (var b = 0; b < this.ig.length; b++) this.ig[b].stop(), (this.ig[b] = s);
    this.ig.length = 0;
    this.rs && (clearTimeout(this.rs), (this.rs = s));
    this.m.gu(this.Ty);
    a && ((this.mA = this.nv), Ib(this));
  };
  Fb.prototype.cancel = ia(0);
  var Gb = {
    kN: function (a) {
      return a;
    },
    reverse: function (a) {
      return 1 - a;
    },
    rD: function (a) {
      return a * a;
    },
    pD: function (a) {
      return Math.pow(a, 3);
    },
    dt: function (a) {
      return -(a * (a - 2));
    },
    uL: function (a) {
      return Math.pow(a - 1, 3) + 1;
    },
    qD: function (a) {
      return 0.5 > a ? 2 * a * a : -2 * (a - 2) * a - 1;
    },
    S3: function (a) {
      return 0.5 > a ? 4 * Math.pow(a, 3) : 4 * Math.pow(a - 1, 3) + 1;
    },
    T3: function (a) {
      return (1 - Math.cos(Math.PI * a)) / 2;
    },
  };
  Gb["ease-in"] = Gb.rD;
  Gb["ease-out"] = Gb.dt;
  var L = {
    HG: 34,
    IG: 21,
    JG: new O(21, 32),
    NP: new O(10, 32),
    MP: new O(24, 36),
    LP: new O(12, 36),
    FG: new O(13, 1),
    ta: C.pa + "images/",
    r5: "http://mapapip0.bdimg.com/images/",
    GG: C.pa + "images/markers_new.png",
    JP: 24,
    KP: 73,
    FC: {
      "\u5317\u4eac": { Iy: "bj", o: new N(116.403874, 39.914889) },
      "\u4e0a\u6d77": { Iy: "sh", o: new N(121.487899, 31.249162) },
      "\u6df1\u5733": { Iy: "sz", o: new N(114.025974, 22.546054) },
      "\u5e7f\u5dde": { Iy: "gz", o: new N(113.30765, 23.120049) },
    },
    fontFamily: "arial,sans-serif",
  };
  z.ga.Xe
    ? (z.extend(L, {
        fL: "url(" + L.ta + "ruler.cur),crosshair",
        Ac: "-moz-grab",
        Ld: "-moz-grabbing",
      }),
      z.platform.YM && (L.fontFamily = "arial,simsun,sans-serif"))
    : z.ga.ex || z.ga.Sy
    ? z.extend(L, {
        fL: "url(" + L.ta + "ruler.cur) 2 6,crosshair",
        Ac: "url(" + L.ta + "openhand.cur) 8 8,default",
        Ld: "url(" + L.ta + "closedhand.cur) 8 8,move",
      })
    : z.extend(L, {
        fL: "url(" + L.ta + "ruler.cur),crosshair",
        Ac: "url(" + L.ta + "openhand.cur),default",
        Ld: "url(" + L.ta + "closedhand.cur),move",
      });
  function Jb(a, b) {
    var c = a.style;
    c.left = b[0] + "px";
    c.top = b[1] + "px";
  }
  function Kb(a) {
    0 < z.ga.oa ? (a.unselectable = "on") : (a.style.MozUserSelect = "none");
  }
  function Lb(a) {
    return a && a.parentNode && 11 !== a.parentNode.nodeType;
  }
  function Mb(a, b) {
    z.U.hy(a, "beforeEnd", b);
    return a.lastChild;
  }
  function Nb(a) {
    for (var b = { left: 0, top: 0 }; a && a.offsetParent; )
      (b.left += a.offsetLeft), (b.top += a.offsetTop), (a = a.offsetParent);
    return b;
  }
  function oa(a) {
    a = window.event || a;
    a.stopPropagation ? a.stopPropagation() : (a.cancelBubble = q);
  }
  function Ob(a) {
    a = window.event || a;
    a.preventDefault ? a.preventDefault() : (a.returnValue = t);
    return t;
  }
  function pa(a) {
    oa(a);
    return Ob(a);
  }
  function Pb() {
    var a = document.documentElement,
      b = document.body;
    return a && (a.scrollTop || a.scrollLeft)
      ? [a.scrollTop, a.scrollLeft]
      : b
      ? [b.scrollTop, b.scrollLeft]
      : [0, 0];
  }
  function Qb(a, b) {
    if (a && b) return Math.round(Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2)));
  }
  function Rb(a, b) {
    var c = [],
      b =
        b ||
        function (a) {
          return a;
        },
      e;
    for (e in a) c.push(e + "=" + b(a[e]));
    return c.join("&");
  }
  function I(a, b, c) {
    var e = document.createElement(a);
    c && (e = document.createElementNS(c, a));
    return z.U.IF(e, b || {});
  }
  function eb(a) {
    if (a.currentStyle) return a.currentStyle;
    if (a.ownerDocument && a.ownerDocument.defaultView)
      return a.ownerDocument.defaultView.getComputedStyle(a, s);
  }
  function hb(a) {
    return "function" === typeof a;
  }
  function gb(a) {
    return "number" === typeof a;
  }
  function ib(a) {
    return "string" == typeof a;
  }
  function Sb(a) {
    return "undefined" != typeof a;
  }
  function Tb(a) {
    return "object" == typeof a;
  }
  var Ub = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  function Vb(a) {
    for (var b = "", c = 0; c < a.length; c++) {
      var e = a.charCodeAt(c) << 1,
        f = (e = e.toString(2));
      8 > e.length && ((f = "00000000" + e), (f = f.substr(e.length, 8)));
      b += f;
    }
    a = 5 - (b.length % 5);
    e = [];
    for (c = 0; c < a; c++) e[c] = "0";
    b = e.join("") + b;
    f = [];
    for (c = 0; c < b.length / 5; c++)
      (e = b.substr(5 * c, 5)), f.push(String.fromCharCode(parseInt(e, 2) + 50));
    return f.join("") + a.toString();
  }
  function Wb(a) {
    var b = "",
      c,
      e,
      f = "",
      g,
      i = "",
      k = 0;
    g = /[^A-Za-z0-9\+\/\=]/g;
    if (!a || g.exec(a)) return a;
    a = a.replace(/[^A-Za-z0-9\+\/\=]/g, "");
    do
      (c = Ub.indexOf(a.charAt(k++))),
        (e = Ub.indexOf(a.charAt(k++))),
        (g = Ub.indexOf(a.charAt(k++))),
        (i = Ub.indexOf(a.charAt(k++))),
        (c = (c << 2) | (e >> 4)),
        (e = ((e & 15) << 4) | (g >> 2)),
        (f = ((g & 3) << 6) | i),
        (b += String.fromCharCode(c)),
        64 != g && (b += String.fromCharCode(e)),
        64 != i && (b += String.fromCharCode(f));
    while (k < a.length);
    return b;
  }
  var R = z.lang.cv;
  function M() {
    var a = navigator.userAgent;
    return -1 < a.indexOf("iPhone") ||
      -1 < a.indexOf("iPad") ||
      -1 < a.indexOf("Android") ||
      -1 < a.indexOf("Harmony")
      ? q
      : t;
  }
  function db() {
    return !(!z.platform.YM && !z.platform.RM && !z.platform.CZ);
  }
  function lb() {
    return new Date().getTime();
  }
  function Xb(a) {
    a = a.split("//");
    if (2 <= a.length) {
      var b = a[1].split("?");
      if (1 <= b.length) {
        var c = b[0].split("/"),
          e = 1;
        window.urlSplitBeginIndex && (e = window.urlSplitBeginIndex);
        var f = e,
          e = b.length - 1,
          g = "/",
          i = c.length;
        f || (f = 0);
        e || (e = i - 1);
        g || (g = "");
        if (f > i - 1 || e > i - 1) e = "";
        else {
          for (i = ""; f <= e; f++) i = f === e ? i + c[f] : i + (c[f] + g);
          e = i;
        }
        return { host: b[0], origin: a[0] + "//" + c[0], path: "/" + e };
      }
    }
    return s;
  }
  function Yb() {
    var a = document.body.appendChild(I("div"));
    a.innerHTML = '<v:shape id="vml_tester1" adj="1" />';
    var b = a.firstChild;
    if (!b.style) return t;
    b.style.behavior = "url(#default#VML)";
    b = b ? "object" === typeof b.adj : q;
    a.parentNode.removeChild(a);
    return b;
  }
  function Zb() {
    return !!document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Shape", "1.1");
  }
  function $b() {
    return !!I("canvas").getContext;
  }
  function ac(a) {
    return (a * Math.PI) / 180;
  }
  C.IZ = (function () {
    var a = q,
      b = q,
      c = q,
      e = q,
      f = 0,
      g = 0,
      i = 0,
      k = 0;
    return {
      rR: function () {
        f += 1;
        a &&
          ((a = t),
          setTimeout(function () {
            Ya(5054, { pic: f });
            a = q;
            f = 0;
          }, 1e4));
      },
      s2: function () {
        g += 1;
        b &&
          ((b = t),
          setTimeout(function () {
            Ya(5055, { move: g });
            b = q;
            g = 0;
          }, 1e4));
      },
      u2: function () {
        i += 1;
        c &&
          ((c = t),
          setTimeout(function () {
            Ya(5056, { zoom: i });
            c = q;
            i = 0;
          }, 1e4));
      },
      t2: function (a) {
        k += a;
        e &&
          ((e = t),
          setTimeout(function () {
            Ya(5057, { tile: k });
            e = q;
            k = 0;
          }, 5e3));
      },
    };
  })();
  C.Oq = { XG: "#83a1ff", Qq: "#808080" };
  function bc(a, b, c) {
    b.bF || ((b.bF = []), (b.handle = {}));
    b.bF.push({ filter: c, kt: a });
    b.addEventListener ||
      (b.addEventListener = function (a, c) {
        b.attachEvent("on" + a, c);
      });
    b.handle.click ||
      (b.addEventListener(
        "click",
        function (a) {
          for (var c = a.target || a.srcElement; c != b; ) {
            cc(b.bF, function (b, i) {
              RegExp(i.filter).test(c.getAttribute("filter")) &&
                i.kt.call(c, a, c.getAttribute("filter"));
            });
            c = c.parentNode;
          }
        },
        t,
      ),
      (b.handle.click = q));
  }
  function cc(a, b) {
    for (var c = 0, e = a.length; c < e; c++) b(c, a[c]);
  }
  void (function (a, b, c) {
    void (function (a, b, c) {
      function i(a) {
        if (!a.mp) {
          for (var c = q, e = [], g = a.M_, k = 0; g && k < g.length; k++) {
            var m = g[k],
              n = (ga[m] = ga[m] || {});
            if (n.mp || n == a) e.push(n.Uc);
            else {
              c = t;
              if (!n.MW && ((m = (Da.get("alias") || {})[m] || m + ".js"), !J[m])) {
                J[m] = q;
                var o = b.createElement("script"),
                  p = b.getElementsByTagName("script")[0];
                o.async = q;
                o.src = m;
                p.parentNode.insertBefore(o, p);
              }
              n.pz = n.pz || {};
              n.pz[a.name] = a;
            }
          }
          if (c) {
            a.mp = q;
            a.aL && (a.Uc = a.aL.apply(a, e));
            for (var v in a.pz) i(a.pz[v]);
          }
        }
      }
      function k(a) {
        return (a || new Date()) - H;
      }
      function m(a, b, c) {
        if (a) {
          "string" == typeof a && ((c = b), (b = a), (a = K));
          try {
            a == K
              ? ((P[b] = P[b] || []), P[b].unshift(c))
              : a.addEventListener
              ? a.addEventListener(b, c, t)
              : a.attachEvent && a.attachEvent("on" + b, c);
          } catch (e) {}
        }
      }
      function n(a, b, c) {
        if (a) {
          "string" == typeof a && ((c = b), (b = a), (a = K));
          try {
            if (a == K) {
              var e = P[b];
              if (e) for (var f = e.length; f--; ) e[f] === c && e.splice(f, 1);
            } else
              a.removeEventListener
                ? a.removeEventListener(b, c, t)
                : a.detachEvent && a.detachEvent("on" + b, c);
          } catch (g) {}
        }
      }
      function o(a) {
        var b = P[a],
          c = 0;
        if (b) {
          for (var e = [], f = arguments, g = 1; g < f.length; g++) e.push(f[g]);
          for (g = b.length; g--; ) b[g].apply(this, e) && c++;
          return c;
        }
      }
      function p(a, b) {
        if (a && b) {
          var c = new Image(1, 1),
            e = [],
            f = "img_" + +new Date(),
            g;
          for (g in b) b[g] && e.push(g + "=" + encodeURIComponent(b[g]));
          K[f] = c;
          c.onload = c.onerror = function () {
            K[f] = c = c.onload = c.onerror = s;
            delete K[f];
          };
          c.src = a + "?" + e.join("&");
        }
      }
      function v() {
        var a = arguments,
          b = a[0];
        if (this.$K || /^(on|un|set|get|create)$/.test(b)) {
          for (var b = A.prototype[b], c = [], e = 1, f = a.length; e < f; e++) c.push(a[e]);
          "function" == typeof b && b.apply(this, c);
        } else this.wK.push(a);
      }
      function w(a, b) {
        var c = {},
          e;
        for (e in a) a.hasOwnProperty(e) && (c[e] = a[e]);
        for (e in b) b.hasOwnProperty(e) && (c[e] = b[e]);
        return c;
      }
      function A(a) {
        this.name = a;
        this.it = { protocolParameter: { postUrl: s, protocolParameter: s } };
        this.wK = [];
        this.alog = K;
      }
      function B(a) {
        a = a || "default";
        if ("*" == a) {
          var a = [],
            b;
          for (b in Q) a.push(Q[b]);
          return a;
        }
        (b = Q[a]) || (b = Q[a] = new A(a));
        return b;
      }
      var D = c.alog;
      if (!D || !D.mp) {
        var F = b.all && a.attachEvent,
          H = (D && D.SE) || +new Date(),
          G = a.L5 || (+new Date()).toString(36) + Math.random().toString(36).substr(2, 3),
          E = 0,
          J = {},
          K = function (a) {
            var b = arguments,
              c,
              e,
              f,
              g;
            if ("define" == a || "require" == a) {
              for (e = 1; e < b.length; e++)
                switch (typeof b[e]) {
                  case "string":
                    c = b[e];
                    break;
                  case "object":
                    f = b[e];
                    break;
                  case "function":
                    g = b[e];
                }
              "require" == a && (c && !f && (f = [c]), (c = s));
              c = !c ? "#" + E++ : c;
              e = ga[c] = ga[c] || {};
              e.mp || ((e.name = c), (e.M_ = f), (e.aL = g), "define" == a && (e.MW = q), i(e));
            } else
              "function" == typeof a
                ? a(K)
                : ("" + a).replace(/^(?:([\w$_]+)\.)?(\w+)$/, function (a, c, e) {
                    b[0] = e;
                    v.apply(K.rG(c), b);
                  });
          },
          P = {},
          Q = {},
          ga = { j3: { name: "alog", mp: q, Uc: K } };
        A.prototype.start = A.prototype.create = function (a) {
          if (!this.$K) {
            "object" == typeof a && this.set(a);
            this.$K = new Date();
            for (this.jt("create", this); (a = this.wK.shift()); ) v.apply(this, a);
          }
        };
        A.prototype.send = function (a, b) {
          var c = w({ ts: k().toString(36), t: a, sid: G }, this.it);
          if ("object" == typeof b) c = w(c, b);
          else {
            var e = arguments;
            switch (a) {
              case "pageview":
                e[1] && (c.page = e[1]);
                e[2] && (c.title = e[2]);
                break;
              case "event":
                e[1] && (c.eventCategory = e[1]);
                e[2] && (c.eventAction = e[2]);
                e[3] && (c.eventLabel = e[3]);
                e[4] && (c.eventValue = e[4]);
                break;
              case "timing":
                e[1] && (c.timingCategory = e[1]);
                e[2] && (c.timingVar = e[2]);
                e[3] && (c.timingValue = e[3]);
                e[4] && (c.timingLabel = e[4]);
                break;
              case "exception":
                e[1] && (c.exDescription = e[1]);
                e[2] && (c.exFatal = e[2]);
                break;
              default:
                return;
            }
          }
          this.jt("send", c);
          var f;
          if ((e = this.it.protocolParameter)) {
            var g = {};
            for (f in c) e[f] !== s && (g[e[f] || f] = c[f]);
            f = g;
          } else f = c;
          p(this.it.postUrl, f);
        };
        A.prototype.set = function (a, b) {
          if ("string" == typeof a)
            "protocolParameter" == a && (b = w({ postUrl: s, protocolParameter: s }, b)),
              (this.it[a] = b);
          else if ("object" == typeof a) for (var c in a) this.set(c, a[c]);
        };
        A.prototype.get = function (a, b) {
          var c = this.it[a];
          "function" == typeof b && b(c);
          return c;
        };
        A.prototype.jt = function (a, b) {
          return K.jt(this.name + "." + a, b);
        };
        A.prototype.V = function (a, b) {
          K.V(this.name + "." + a, b);
        };
        A.prototype.md = function (a, b) {
          K.md(this.name + "." + a, b);
        };
        K.name = "alog";
        K.Yb = G;
        K.mp = q;
        K.timestamp = k;
        K.md = n;
        K.V = m;
        K.jt = o;
        K.rG = B;
        K("init");
        var da = A.prototype;
        V(da, {
          start: da.start,
          create: da.create,
          send: da.send,
          set: da.set,
          get: da.get,
          on: da.V,
          un: da.md,
          fire: da.jt,
        });
        var Da = B();
        Da.set("protocolParameter", { i3: s });
        if (D) {
          da = [].concat(D.zb || [], D.hq || []);
          D.zb = D.hq = s;
          for (var wa in K) K.hasOwnProperty(wa) && (D[wa] = K[wa]);
          K.zb = K.hq = {
            push: function (a) {
              K.apply(K, a);
            },
          };
          for (D = 0; D < da.length; D++) K.apply(K, da[D]);
        }
        c.alog = K;
        F &&
          m(b, "mouseup", function (a) {
            a = a.target || a.srcElement;
            1 == a.nodeType && /^ajavascript:/i.test(a.tagName + a.href);
          });
        var La = t;
        a.onerror = function (a, b, e, f) {
          var i = q;
          !b && /^script error/i.test(a) && (La ? (i = t) : (La = q));
          i && c.alog("exception.send", "exception", { cu: a, RE: b, Zt: e, qh: f });
          return t;
        };
        c.alog("exception.on", "catch", function (a) {
          c.alog("exception.send", "exception", {
            cu: a.cu,
            RE: a.path,
            Zt: a.Zt,
            method: a.method,
            GL: "catch",
          });
        });
      }
    })(a, b, c);
    void (function (a, b, c) {
      var i = "18_3";
      M() && (i = "18_4");
      var k = "http://static.tieba.baidu.com";
      "https:" === a.location.protocol &&
        (k = "https://gsp0.baidu.com/5aAHeD3nKhI2p27j8IqW0jdnxx1xbK");
      var m = Math.random,
        k = k + "/tb/pms/img/st.gif",
        n = { Ih: "0.1" },
        o = { Ih: "0.1" },
        p = { Ih: "0.1" },
        v = { Ih: "0" };
      if (n && n.Ih && m() < n.Ih) {
        var w = c.alog.rG("monkey"),
          A,
          n = a.screen,
          B = b.referrer;
        w.set("ver", 5);
        w.set("pid", 241);
        n && w.set("px", n.width + "*" + n.height);
        w.set("ref", B);
        c.alog("monkey.on", "create", function () {
          A = c.alog.timestamp;
          w.set("protocolParameter", { reports: s });
        });
        c.alog("monkey.on", "send", function (a) {
          "pageview" == a.t && (a.cmd = "open");
          a.now && ((a.ts = A(a.now).toString(36)), (a.now = ""));
        });
        c.alog("monkey.create", {
          page: i,
          pid: "241",
          p: "18",
          dv: 6,
          postUrl: k,
          reports: { refer: 1 },
        });
        c.alog("monkey.send", "pageview", { now: +new Date() });
      }
      if (o && o.Ih && m() < o.Ih) {
        var D = t;
        a.onerror = function (a, b, e, f) {
          var i = q;
          !b && /^script error/i.test(a) && (D ? (i = t) : (D = q));
          i && c.alog("exception.send", "exception", { cu: a, RE: b, Zt: e, qh: f });
          return t;
        };
        c.alog("exception.on", "catch", function (a) {
          c.alog("exception.send", "exception", {
            cu: a.cu,
            RE: a.path,
            Zt: a.Zt,
            method: a.method,
            GL: "catch",
          });
        });
        c.alog("exception.create", { postUrl: k, dv: 7, page: i, pid: "170", p: "18" });
      }
      p &&
        p.Ih &&
        m() < p.Ih &&
        (c.alog("cus.on", "time", function (a) {
          var b = {},
            e = t,
            f;
          if ("[object Object]" === a.toString()) {
            for (var i in a)
              "page" == i
                ? (b.page = a[i])
                : ((f = parseInt(a[i])), 0 < f && /^z_/.test(i) && ((e = q), (b[i] = f)));
            e && c.alog("cus.send", "time", b);
          }
        }),
        c.alog("cus.on", "count", function (a) {
          var b = {},
            e = t;
          "string" === typeof a && (a = [a]);
          if (a instanceof Array)
            for (var f = 0; f < a.length; f++)
              /^z_/.test(a[f])
                ? ((e = q), (b[a[f]] = 1))
                : /^page:/.test(a[f]) && (b.page = a[f].substring(5));
          e && c.alog("cus.send", "count", b);
        }),
        c.alog("cus.create", { dv: 3, postUrl: k, page: i, p: "18" }));
      if (v && v.Ih && m() < v.Ih) {
        var F = ["Moz", "O", "ms", "Webkit"],
          H = ["-webkit-", "-moz-", "-o-", "-ms-"],
          G = function () {
            return typeof b.createElement !== "function"
              ? b.createElement(arguments[0])
              : b.createElement.apply(b, arguments);
          },
          E = G("dpFeatureTest").style,
          J = function (a) {
            return K(a, l, l);
          },
          K = function (a, b, c) {
            var e = a.charAt(0).toUpperCase() + a.slice(1),
              f = (a + " " + F.join(e + " ") + e).split(" ");
            if (typeof b === "string" || typeof b === "undefined") return P(f, b);
            f = (a + " " + F.join(e + " ") + e).split(" ");
            a: {
              var a = f,
                g;
              for (g in a)
                if (a[g] in b) {
                  if (c === t) {
                    b = a[g];
                    break a;
                  }
                  g = b[a[g]];
                  b = typeof g === "function" ? fnBind(g, c || b) : g;
                  break a;
                }
              b = t;
            }
            return b;
          },
          P = function (a, b) {
            var c, e, f;
            e = a.length;
            for (c = 0; c < e; c++) {
              f = a[c];
              ~("" + f).indexOf("-") && (f = Q(f));
              if (E[f] !== l) return b == "pfx" ? f : q;
            }
            return t;
          },
          Q = function (a) {
            return a
              .replace(/([a-z])-([a-z])/g, function (a, b, c) {
                return b + c.toUpperCase();
              })
              .replace(/^-/, "");
          },
          ga = function (a, b, c) {
            if (a.indexOf("@") === 0) return atRule(a);
            a.indexOf("-") != -1 && (a = Q(a));
            return !b ? K(a, "pfx") : K(a, b, c);
          },
          da = function () {
            var a = G("canvas");
            return !(!a.getContext || !a.getContext("2d"));
          },
          Da = function () {
            var a = G("div");
            return "draggable" in a || ("ondragstart" in a && "ondrop" in a);
          },
          wa = function () {
            try {
              localStorage.setItem("localStorage", "localStorage");
              localStorage.removeItem("localStorage");
              return q;
            } catch (a) {
              return t;
            }
          },
          La = function () {
            return "content" in b.createElement("template");
          },
          va = function () {
            return "createShadowRoot" in b.createElement("a");
          },
          cb = function () {
            return "registerElement" in b;
          },
          Ue = function () {
            return "import" in b.createElement("link");
          },
          gd = function () {
            return "getItems" in b;
          },
          Uj = function () {
            return "EventSource" in window;
          },
          Ve = function (a, b) {
            var c = new Image();
            c.onload = function () {
              b(a, c.width > 0 && c.height > 0);
            };
            c.onerror = function () {
              b(a, t);
            };
            c.src =
              "data:image/webp;base64," +
              {
                O5: "UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",
                N5: "UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",
                alpha:
                  "UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",
                Bk: "UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA",
              }[a];
          },
          We = function (a, b) {
            return (ic.ri["WebP-" + a] = b);
          },
          Vj = function () {
            return "openDatabase" in a;
          },
          Wj = function () {
            return "performance" in a && "timing" in a.performance;
          },
          Xj = function () {
            return "performance" in a && "mark" in a.performance;
          },
          Yj = function () {
            return !(
              !Array.prototype ||
              !Array.prototype.every ||
              !Array.prototype.filter ||
              !Array.prototype.forEach ||
              !Array.prototype.indexOf ||
              !Array.prototype.lastIndexOf ||
              !Array.prototype.map ||
              !Array.prototype.some ||
              !Array.prototype.reduce ||
              !Array.prototype.reduceRight ||
              !Array.isArray
            );
          },
          Zj = function () {
            return (
              "Promise" in a &&
              "cast" in a.Rq &&
              "resolve" in a.Rq &&
              "reject" in a.Rq &&
              "all" in a.Rq &&
              "race" in a.Rq &&
              (function () {
                var b;
                new a.Rq(function (a) {
                  b = a;
                });
                return typeof b === "function";
              })()
            );
          },
          $j = function () {
            var b = !!a.c2,
              c = a.XMLHttpRequest && "withCredentials" in new XMLHttpRequest();
            return !!a.h2 && b && c;
          },
          ak = function () {
            return "geolocation" in navigator;
          },
          bk = function () {
            var b = G("canvas"),
              c = "probablySupportsContext" in b ? "probablySupportsContext" : "supportsContext";
            return c in b
              ? b[c]("webgl") || b[c]("experimental-webgl")
              : "WebGLRenderingContext" in a;
          },
          ck = function () {
            return (
              !!b.createElementNS && !!b.createElementNS("http://www.w3.org/2000/svg", "svg").H3
            );
          },
          dk = function () {
            return !!a.p2;
          },
          ek = function () {
            return "WebSocket" in a && a.m2.Y1 === 2;
          },
          fk = function () {
            return !!b.createElement("video").canPlayType;
          },
          gk = function () {
            return !!b.createElement("audio").canPlayType;
          },
          hk = function () {
            return !!(a.history && "pushState" in a.history);
          },
          ik = function () {
            return !(!a.a2 || !a.b2);
          },
          jk = function () {
            return "postMessage" in window;
          },
          kk = function () {
            return (
              !!a.webkitNotifications ||
              ("Notification" in a && "permission" in a.fQ && "requestPermission" in a.fQ)
            );
          },
          lk = function () {
            for (
              var b = ["webkit", "moz", "o", "ms"], c = a.requestAnimationFrame, f = 0;
              f < b.length && !c;
              ++f
            )
              c = a[b[f] + "RequestAnimationFrame"];
            return !!c;
          },
          mk = function () {
            return "JSON" in a && "parse" in JSON && "stringify" in JSON;
          },
          nk = function () {
            return !(!ga("exitFullscreen", b, t) && !ga("cancelFullScreen", b, t));
          },
          ok = function () {
            return !!ga("Intl", a);
          },
          pk = function () {
            return J("flexBasis");
          },
          qk = function () {
            return !!J("perspective");
          },
          rk = function () {
            return J("shapeOutside");
          },
          sk = function () {
            var a = G("div");
            a.style.cssText = H.join("filter:blur(2px); ");
            return !!a.style.length && (b.documentMode === l || b.documentMode > 9);
          },
          tk = function () {
            return "XMLHttpRequest" in a && "withCredentials" in new XMLHttpRequest();
          },
          uk = function () {
            return G("progress").max !== l;
          },
          vk = function () {
            return G("meter").max !== l;
          },
          wk = function () {
            return "sendBeacon" in navigator;
          },
          xk = function () {
            return J("borderRadius");
          },
          yk = function () {
            return J("boxShadow");
          },
          zk = function () {
            var a = G("div").style;
            a.cssText = H.join("opacity:.55;");
            return /^0.55$/.test(a.opacity);
          },
          Ak = function () {
            return P(["textShadow"], l);
          },
          Bk = function () {
            return J("animationName");
          },
          Ck = function () {
            return J("transition");
          },
          Dk = function () {
            return navigator.userAgent.indexOf("Android 2.") === -1 && J("transform");
          },
          ic = {
            ri: {},
            sa: function (a, b, c) {
              this.ri[a] = b.apply(this, [].slice.call(arguments, 2));
            },
            Jd: function (a, b) {
              a.apply(this, [].slice.call(arguments, 1));
            },
            R_: function () {
              this.sa("bdrs", xk);
              this.sa("bxsd", yk);
              this.sa("opat", zk);
              this.sa("txsd", Ak);
              this.sa("anim", Bk);
              this.sa("trsi", Ck);
              this.sa("trfm", Dk);
              this.sa("flex", pk);
              this.sa("3dtr", qk);
              this.sa("shpe", rk);
              this.sa("fltr", sk);
              this.sa("cavs", da);
              this.sa("dgdp", Da);
              this.sa("locs", wa);
              this.sa("wctem", La);
              this.sa("wcsdd", va);
              this.sa("wccse", cb);
              this.sa("wchti", Ue);
              this.Jd(Ve, "lossy", We);
              this.Jd(Ve, "lossless", We);
              this.Jd(Ve, "alpha", We);
              this.Jd(Ve, "animation", We);
              this.sa("wsql", Vj);
              this.sa("natm", Wj);
              this.sa("ustm", Xj);
              this.sa("arra", Yj);
              this.sa("prms", Zj);
              this.sa("xhr2", $j);
              this.sa("wbgl", bk);
              this.sa("geol", ak);
              this.sa("svg", ck);
              this.sa("work", dk);
              this.sa("wbsk", ek);
              this.sa("vido", fk);
              this.sa("audo", gk);
              this.sa("hsty", hk);
              this.sa("file", ik);
              this.sa("psmg", jk);
              this.sa("wknf", kk);
              this.sa("rqaf", lk);
              this.sa("json", mk);
              this.sa("flsc", nk);
              this.sa("i18n", ok);
              this.sa("cors", tk);
              this.sa("prog", uk);
              this.sa("metr", vk);
              this.sa("becn", wk);
              this.sa("mcrd", gd);
              this.sa("esrc", Uj);
            },
          },
          w = c.alog.rG("feature");
        w.V("commit", function () {
          ic.R_();
          var a = setInterval(function () {
            if (
              "WebP-lossy" in ic.ri &&
              "WebP-lossless" in ic.ri &&
              "WebP-alpha" in ic.ri &&
              "WebP-animation" in ic.ri
            ) {
              for (var b in ic.ri) ic.ri[b] = ic.ri[b] ? "y" : "n";
              w.send("feature", ic.ri);
              clearInterval(a);
            }
          }, 500);
        });
        c.alog("feature.create", { Q3: 4, s6: k, page: i, zb: "18" });
        c.alog("feature.fire", "commit");
      }
    })(a, b, c);
  })(window, document, C);
  C.Wq = C.alog || ba();
  C.alog("cus.fire", "count", "z_loadscriptcount");
  "https:" === location.protocol && C.alog("cus.fire", "count", "z_httpscount");
  function dc(a) {
    var b = window.TILE_VERSION,
      c = "20190410";
    b && b.ditu && ((b = b.ditu), b[a] && b[a].updateDate && (c = b[a].updateDate));
    return c;
  }
  var ec = [72.6892532, 0.1939743381, 136.1168614, 54.392257],
    fc = [72.69566833, 0.1999420909, 136.1232863, 54.39791217],
    gc = 158,
    hc = [
      98.795985, 122.960792, 107.867379, 118.093451, 119.139658, 128.035888, 79.948212, 99.029524,
      119.923388, 122.094977, 127.918527, 130.94789, 106.50606, 108.076783, 119.8329, 126.382207,
      111.803567, 119.324928, 100.749858, 102.227985, 99.860885, 100.788921, 97.529435, 98.841564,
      99.100017, 99.90035, 122.917416, 123.774367, 123.728314, 125.507211, 123.736065, 124.767299,
      125.488463, 126.410675, 125.484326, 126.07764, 130.830784, 133.620042, 127.912178, 128.668957,
      128.658937, 129.638599, 132.894179, 134.119086, 117.379378, 119.244569, 116.086736,
      117.431212, 114.420233, 116.137458, 116.492775, 119.605527, 110.579401, 111.86488, 74.468228,
      80.001908, 82.867432, 91.353788, 85.721075, 98.976964, 127.664757, 129.546833, 129.476893,
      130.22449, 133.730358, 134.745235, 134.381034, 135.1178, 130.868117, 131.34409, 115.513245,
      117.544751, 115.779271, 116.748045, 108.536254, 110.614326, 121.365534, 124.626434,
      126.165992, 127.347013, 91.281869, 95.611754, 79.879648, 82.945041, 76.413314, 78.345207,
      78.275229, 80.002329, 83.956612, 85.734098, 85.510186, 89.356499, 97.997001, 98.948845,
      106.653208, 108.610811, 111.400183, 111.824179, 111.592224, 111.817136, 116.00682, 117.024631,
      116.258574, 116.689291, 119.436876, 119.922961, 120.659806, 121.395479, 120.349116,
      120.676014, 124.59389, 125.787788, 126.221756, 126.788962, 95.572955, 102.046581, 95.583772,
      96.165551, 95.564318, 97.806095, 91.30446, 93.356438, 93.330319, 94.698145, 89.349129,
      90.548677, 82.268802, 82.892025, 78.335615, 80.032266, 76.625755, 78.361413, 73.498248,
      74.490992, 74.846872, 76.488771, 91.563521, 94.878444, 88.768214, 89.244787, 83.247076,
      83.974127, 82.29595, 83.256003, 81.885315, 83.26249, 80.760619, 81.472404, 86.470983,
      88.276988, 102.207537, 104.234614, 112.164795, 116.833667, 108.965663, 113.032246, 111.166575,
      117.983363,
    ],
    jc = [
      22.551183, 42.284787, 17.227969, 22.738314, 41.300981, 50.749638, 30.368087, 42.332701,
      21.705055, 22.696452, 42.426047, 48.944674, 21.432184, 22.651387, 50.657409, 52.92296,
      42.212192, 45.206905, 21.137031, 22.57186, 21.444502, 22.586566, 23.741571, 25.301472,
      22.006806, 22.56637, 38.985114, 41.346531, 40.295617, 41.338581, 39.740021, 40.351012,
      40.974644, 41.331562, 40.726852, 41.067192, 44.877158, 48.018285, 41.344597, 42.451798,
      42.016305, 42.443235, 45.880906, 48.214001, 45.140027, 46.792775, 45.141083, 46.400433,
      45.156418, 45.748281, 47.485889, 50.071879, 42.223667, 43.469487, 37.019867, 40.668675,
      42.226823, 47.321605, 27.72944, 30.469853, 48.919002, 49.650614, 48.840188, 49.443166,
      46.949801, 48.382798, 47.660603, 48.472692, 42.859946, 44.913298, 47.605896, 48.445914,
      48.41698, 48.909667, 42.23507, 42.914193, 52.8281, 53.585952, 50.709311, 51.662219, 42.29968,
      44.399225, 42.302746, 45.391958, 34.680866, 37.03377, 30.743515, 37.07228, 28.245649,
      30.408935, 47.277693, 48.504255, 25.241528, 27.780726, 42.223363, 42.548418, 43.435888,
      44.696952, 44.693193, 45.00187, 48.886267, 49.326755, 49.288642, 49.632304, 50.717486,
      51.314369, 52.914204, 53.33964, 52.910094, 53.115926, 52.908382, 53.258095, 51.64533,
      52.408305, 42.236825, 42.699126, 43.068466, 43.898632, 42.670403, 43.082219, 44.379045,
      45.187742, 44.382336, 44.981379, 47.310362, 48.06019, 45.359099, 46.814439, 40.569751,
      42.047741, 40.587956, 41.41263, 38.519192, 40.185033, 35.790476, 37.029005, 26.825605,
      27.763896, 27.199658, 27.751649, 29.150192, 30.381073, 29.573886, 30.065162, 30.047775,
      30.384089, 30.001277, 30.388525, 48.494118, 49.173841, 22.398528, 22.601198, 7.441114,
      11.505968, 3.767491, 9.005209, 12.642067, 17.410886,
    ],
    kc = 95,
    lc = [
      110.3961374, 105.0743788, 96.8991824, 95.61810411, 93.82412598, 91.3892353, 91.38931858,
      89.08325955, 87.22469808, 86.26278402, 85.17353, 85.23741211, 82.86627441, 81.90481038,
      79.59687147, 80.39829237, 79.93319363, 77.80279948, 75.2557704, 73.49357829, 73.1892532,
      73.87758816, 74.4064738, 74.10215224, 75.46409695, 76.77739692, 78.28299615, 78.15499485,
      78.37920654, 78.89145345, 79.69282199, 81.19938178, 81.80830295, 83.89093424, 85.94149523,
      87.86447266, 89.03414958, 90.05918132, 91.10026937, 92.15733832, 93.74361735, 95.82597331,
      97.95655545, 97.12363037, 98.2129739, 99.2068571, 101.6587874, 102.5239084, 102.2356106,
      105.0249238, 106.0992342, 107.8617093, 111.6439372, 109.591869, 112.284586, 117.7961157,
      118.9495128, 114.2076584, 118.693565, 123.1475225, 122.730705, 120.9361393, 123.4207441,
      122.3787782, 122.1385425, 121.5904281, 121.1773763, 120.6805404, 120.2483355, 122.795807,
      122.8759077, 121.3060262, 122.1392177, 123.7418799, 126.4177599, 128.5647409, 129.7194884,
      131.2259136, 131.9950494, 133.6289931, 135.6168614, 131.3875545, 130.8743365, 128.6303223,
      126.0997773, 124.4015375, 122.22161, 119.6586483, 119.7866827, 118.5685878, 116.5177976,
      114.819101, 119.0812964, 116.453265, 111.7431171,
    ],
    mc = [
      43.2190351, 42.38053385, 43.17417589, 44.42226915, 45.09863634, 45.56708116, 47.33599718,
      48.68832709, 49.62448486, 48.9482175, 48.4800472, 47.33564399, 47.43948676, 46.03452067,
      45.20221788, 43.34563043, 42.32965739, 41.39690972, 40.82972331, 39.95567654, 39.25892877,
      38.36098768, 38.05441569, 37.16878445, 36.38899414, 35.36126817, 34.30953451, 32.58503879,
      31.56975694, 30.77800266, 30.43559814, 29.7744892, 30.0931977, 28.71103299, 27.70739665,
      27.5775472, 27.01096137, 27.77857883, 27.50707954, 26.50328315, 26.70387804, 27.95548557,
      27.29428901, 23.64685493, 23.62310601, 21.67493381, 20.77751465, 21.32070991, 22.1824113,
      22.31232964, 22.51316054, 16.80037679, 13.19749864, 0.6939743381, 1.541660428, 10.50208252,
      15.58926975, 17.89090007, 19.94928467, 22.18490153, 25.37285292, 25.61456434, 30.62532552,
      31.08099284, 31.89238173, 32.50092692, 32.80325765, 34.25546956, 35.15486138, 36.90170139,
      37.8348272, 37.941604, 38.6480797, 38.96797201, 40.98146918, 41.25573296, 42.07218153,
      42.49132813, 44.65259766, 44.69330702, 48.62286865, 48.09383952, 49.19628499, 50.03402317,
      53.27678901, 53.62976345, 53.89420546, 52.98933322, 52.01872884, 50.23210259, 50.18807048,
      47.49769857, 47.34362712, 46.50502143, 45.24770128,
    ],
    nc = [
      98.7895, 122.954182, 107.860913, 118.087007, 119.133165, 128.029533, 79.941749, 99.023087,
      119.916883, 122.08841, 127.912143, 130.941471, 106.499502, 108.070244, 119.826245, 126.375818,
      111.797006, 119.318387, 100.743285, 102.221517, 99.854448, 100.782445, 97.522928, 98.835028,
      99.093518, 99.893783, 122.910927, 123.767769, 123.721954, 125.50077, 123.729657, 124.760724,
      125.481902, 126.404079, 125.477737, 126.071019, 130.824331, 133.613395, 127.905767,
      128.662524, 128.652527, 129.6321, 132.887552, 134.11249, 117.37297, 119.237999, 116.080154,
      117.424589, 114.413586, 116.130948, 116.486264, 119.598927, 110.5728, 111.858437, 74.465162,
      79.995337, 82.860821, 91.347291, 85.716024, 98.970481, 127.658331, 129.540202, 129.470528,
      130.21808, 133.723748, 134.738785, 134.374555, 135.111443, 130.861475, 131.337438, 115.506627,
      117.538123, 115.772783, 116.741632, 108.529656, 110.60782, 121.358945, 124.619773, 126.159424,
      127.340582, 91.275275, 95.605228, 79.874427, 82.938601, 76.413314, 78.338763, 78.275229,
      79.995765, 83.956612, 85.727511, 85.503554, 89.349858, 97.990418, 98.942257, 106.646704,
      108.604437, 111.393667, 111.817723, 111.585811, 111.810645, 116.000232, 117.018216,
      116.252108, 116.682705, 119.430384, 119.916417, 120.653168, 121.38883, 120.342727, 120.669383,
      124.587426, 125.781376, 126.215282, 126.782323, 95.566367, 102.040026, 95.577158, 96.159009,
      95.557772, 97.799728, 91.298032, 93.350057, 93.323794, 94.691771, 89.342471, 90.542019,
      82.264229, 82.885485, 78.335615, 80.025844, 76.623947, 78.355027, 73.495149, 74.484473,
      74.846872, 76.482208, 91.560117, 94.871859, 88.761692, 89.23822, 83.240549, 83.967602,
      82.292367, 83.2495, 81.878825, 83.256003, 80.75421, 81.465955, 86.465421, 88.270356,
      102.201019, 104.228033, 112.158282, 116.827153, 108.965663, 113.025767, 111.166575, 117.97687,
    ],
    oc = [
      22.545421, 42.279053, 17.226272, 22.731982, 41.294917, 50.743316, 30.361986, 42.326603,
      21.699185, 22.690751, 42.419757, 48.938435, 21.426505, 22.64567, 50.651745, 52.916705,
      42.20641, 45.201064, 21.131326, 22.565685, 21.438288, 22.580379, 23.735785, 25.295582,
      22.001087, 22.560315, 38.979333, 41.340757, 40.28938, 41.332289, 39.734164, 40.344718,
      40.968803, 41.325813, 40.721073, 41.061503, 44.871533, 48.012179, 41.338366, 42.445601,
      42.010343, 42.436934, 45.875217, 48.208327, 45.134237, 46.786509, 45.135376, 46.394665,
      45.150734, 45.742257, 47.480099, 50.065931, 42.217982, 43.46329, 37.014057, 40.662848,
      42.221079, 47.315558, 27.723432, 30.46385, 48.913298, 49.644555, 48.83396, 49.436824,
      46.944059, 48.376613, 47.654503, 48.466331, 42.854333, 44.907682, 47.600253, 48.440245,
      48.410926, 48.903468, 42.229292, 42.908294, 52.822466, 53.58012, 50.703491, 51.656037,
      42.29378, 44.393379, 42.296912, 45.385809, 34.679282, 37.027699, 30.740622, 37.066377,
      28.241967, 30.403134, 47.271949, 48.49848, 25.235818, 27.774976, 42.217425, 42.542102,
      43.429763, 44.691016, 44.687044, 44.995758, 48.880431, 49.320551, 49.282865, 49.626267,
      50.711607, 51.308382, 52.908547, 53.333963, 52.904419, 53.109706, 52.902338, 53.251938,
      51.639701, 52.402205, 42.231045, 42.693581, 43.062756, 43.892771, 42.664519, 43.075927,
      44.372942, 45.1815, 44.376327, 44.975476, 47.304623, 48.054453, 45.353174, 46.808493,
      40.563653, 42.041556, 40.582164, 41.4064, 38.51618, 40.179105, 35.789745, 37.023144,
      26.825402, 27.757641, 27.193806, 27.745766, 29.144229, 30.375186, 29.567889, 30.059102,
      30.041938, 30.378006, 29.995047, 30.382338, 48.48834, 49.169021, 22.392816, 22.595333,
      7.439914, 11.500161, 3.766676, 9.000793, 12.640512, 17.406563,
    ],
    pc = 3e3,
    qc = 2.0e-5,
    rc = 3.0e-6,
    sc = 0.0174532925194,
    tc = 0.0065,
    uc = 0.006,
    vc = 4e4,
    wc = 0,
    xc = 3,
    yc = 1.0e-10,
    zc = 6370996.81,
    Ac = 1e8;
  function Bc(a, b, c) {
    for (var e = gc, f = 0; f < e; f += 2)
      if (a.lng >= b[f] && a.lng <= b[f + 1] && a.lat >= c[f] && a.lat <= c[f + 1]) return q;
    return t;
  }
  function Cc(a) {
    var b = a.lng,
      c = a.lat,
      a = Math.sqrt(b * b + c * c) + Math.sin(c * pc * sc) * qc,
      b = Math.atan2(c, b) + Math.cos(b * pc * sc) * rc;
    return { lng: a * Math.cos(b) + tc, lat: a * Math.sin(b) + uc };
  }
  function Dc(a) {
    var b = Ec,
      c = {},
      e = a.lng,
      f = a.lat,
      g = 1,
      i = a.lng,
      k = a.lat,
      m = e - g,
      n = 0,
      o = f + g,
      p = 0,
      v = e - g,
      w = 0,
      A = f - g,
      B = 0,
      D = e + g,
      F = 0,
      H = f - g,
      G = 0,
      E = e + g,
      J = 0,
      K = f + g,
      P = 0,
      o = (m = 0),
      o = Fc(b, e, f),
      m = o.lng,
      o = o.lat;
    if (1.0e-6 >= Gc(m, o, i, k)) return (c.lng = e), (c.lat = f), c;
    for (;;) {
      m = e - g;
      o = f + g;
      v = e - g;
      A = f - g;
      D = e + g;
      H = f - g;
      E = e + g;
      K = f + g;
      e = Fc(b, m, o);
      n = e.lng;
      p = e.lat;
      e = Fc(b, v, A);
      w = e.lng;
      B = e.lat;
      e = Fc(b, D, H);
      F = e.lng;
      G = e.lat;
      e = Fc(b, E, K);
      J = e.lng;
      P = e.lat;
      e = Gc(n, p, i, k);
      n = Gc(w, B, i, k);
      w = Gc(F, G, i, k);
      J = Gc(J, P, i, k);
      if (1.0e-6 > e) return (c.lng = m), (c.lat = o), c;
      if (1.0e-6 > n) return (c.lng = v), (c.lat = A), c;
      if (1.0e-6 > w) return (c.lng = D), (c.lat = H), c;
      if (1.0e-6 > J) return (c.lng = E), (c.lat = K), c;
      F = 1 / e;
      n = 1 / n;
      w = 1 / w;
      J = 1 / J;
      e = (m * F + v * n + D * w + E * J) / (F + n + w + J);
      f = (o * F + A * n + H * w + K * J) / (F + n + w + J);
      o = Fc(b, e, f);
      m = o.lng;
      o = o.lat;
      if (1.0e-6 >= Gc(m, o, i, k)) return (c.lng = e), (c.lat = f), c;
      g *= 0.6;
      if (1.0e-6 > g) {
        a: {
          c = (a.lng + 0.03 - (a.lng - 0.03)) / 1.0e-4 + 0.5;
          g = (a.lat + 0.03 - (a.lat - 0.03)) / 1.0e-4 + 0.5;
          i = a.lng * Ac;
          k = a.lat * Ac;
          A = 1.0e-4 * Ac;
          m = i - A;
          o = i + A;
          v = k - A;
          D = k + A;
          F = n = w = J = l;
          E = n = A = H = w = J = 0;
          b(a);
          F = l;
          for (K = 0; K <= c; K++) {
            for (e = 0; e <= g; e++)
              if (
                ((F = b(l)),
                (J = l.lng * Ac),
                (w = l.lat * Ac),
                (n = F.lng * Ac),
                (F = F.lat * Ac),
                !(n < m || F < v || n > o || F > D))
              ) {
                J -= n;
                w -= F;
                n = Math.sqrt((i - n) * (i - n) + (k - F) * (k - F));
                if (1 > n) {
                  c = {};
                  c.lng = l.lng;
                  c.lat = l.lat;
                  break a;
                }
                H += (1 * J) / n;
                A += (1 * w) / n;
                E += 1 / n;
              }
            H /= E * Ac;
            A /= E * Ac;
          }
          b = (H * Ac) / Ac;
          g = (A * Ac) / Ac;
          c = {};
          c.lng = a.lng + b;
          c.lat = a.lat + g;
        }
        return c;
      }
    }
  }
  function Fc(a, b, c) {
    a = a({ lng: b, lat: c });
    b = {};
    b.lng = a.lng;
    b.lat = a.lat;
    return b;
  }
  function Hc(a, b, c, e) {
    var f = arguments.length;
    this.Jg = {};
    this.Qg = {};
    0 !== f && 4 === f && this.normalize(a, b, c, e);
  }
  Hc.prototype.contains = function (a) {
    return a.lng > this.Jg.lng && a.lng < this.Qg.lng && a.lat > this.Jg.lat && a.lat < this.Qg.lat
      ? xc
      : Math.abs(a.lng - this.Jg.lng) < yc ||
        Math.abs(a.lng - this.Qg.lng) < yc ||
        Math.abs(a.lat - this.Jg.lat) < yc ||
        Math.abs(a.y - this.Qg.lat) > yc
      ? 2
      : wc;
  };
  Hc.prototype.normalize = function (a, b, c, e) {
    a > c ? ((this.Jg.lng = c), (this.Qg.lng = a)) : ((this.Jg.lng = a), (this.Qg.lng = c));
    b > e ? ((this.Jg.lat = e), (this.Qg.lat = b)) : ((this.Jg.lat = b), (this.Qg.lat = e));
  };
  function Ic(a, b, c, e) {
    this.Fu = { lng: a, lat: b };
    this.yx = { lng: c, lat: e };
    this.wy = new Hc(a, b, c, e);
  }
  function Jc(a, b) {
    var c = a.lat * sc,
      e = b.lat * sc,
      f = c - e,
      g = a.lng * sc - b.lng * sc;
    return (
      2 *
      Math.asin(
        Math.sqrt(
          Math.sin(f / 2) * Math.sin(f / 2) +
            Math.cos(c) * Math.cos(e) * Math.sin(g / 2) * Math.sin(g / 2),
        ),
      ) *
      zc
    );
  }
  function Gc(a, b, c, e) {
    return Math.sqrt((a - c) * (a - c) + (b - e) * (b - e));
  }
  function Kc(a, b, c) {
    return (b.lng - a.lng) * (c.lat - a.lat) - (c.lng - a.lng) * (b.lat - a.lat);
  }
  function Ec(a) {
    var b = {};
    if (a.lng < ec[0] - 0.4 || a.lat < ec[1] - 0.4 || a.lng > ec[2] + 0.4 || a.lat > ec[3] + 0.4)
      return (b.lng = a.lng), (b.lat = a.lat), b;
    if (Bc(a, nc, oc)) return (b = Cc(a));
    for (var b = 0, c = vc, e = 0, f = new Hc(), g = 0, e = 0; e < kc; ++e)
      mc[e] <= a.lat
        ? mc[(e + 1) % kc] > a.lat &&
          0 < Kc({ lng: lc[e], lat: mc[e] }, { lng: lc[(e + 1) % kc], lat: mc[(e + 1) % kc] }, a) &&
          ++g
        : mc[(e + 1) % kc] <= a.lat &&
          0 > Kc({ lng: lc[e], lat: mc[e] }, { lng: lc[(e + 1) % kc], lat: mc[(e + 1) % kc] }, a) &&
          --g;
    if ((0 === g ? wc : xc) === wc) {
      for (g = 0; g < kc; ++g)
        if (
          ((e = new Ic(lc[g], mc[g], lc[(g + 1) % kc], mc[(g + 1) % kc])),
          (f.Jg.lng = e.wy.Jg.lng - 0.5),
          (f.Jg.lat = e.wy.Jg.lat - 0.5),
          (f.Qg.lng = e.wy.Qg.lng + 0.5),
          (f.Qg.lat = e.wy.Qg.lat + 0.5),
          f.contains(a) !== wc)
        ) {
          var i;
          var k = e.Fu.lng,
            m = e.Fu.lat,
            n = e.yx.lng,
            o = e.yx.lat;
          i = o - m;
          var p = k - n;
          !(Math.abs(i - 0) > yc) && !(Math.abs(p - 0) > yc)
            ? (i = e.Fu)
            : ((k = n * m - k * o),
              (m = p * a.lng - i * a.lat),
              (n = i * i - p * p),
              (i = { lng: (p * m - i * k) / n, lat: -(i * m + p * k) / n }));
          p = 180;
          k = 90;
          m = -180;
          n = -90;
          n = e.Fu;
          o = e.yx;
          p = n.lng < o.lng ? n.lng : o.lng;
          k = n.lat < o.lat ? n.lat : o.lat;
          m = n.lng < o.lng ? n.lng : o.lng;
          n = n.lat < o.lat ? n.lat : o.lat;
          i.lng <= m && i.lng >= p && i.lng <= n && i.lat >= k
            ? ((e = a.lat * sc),
              (p = a.lng * sc),
              (k = i.lat * sc),
              (i = i.lng * sc),
              (m = Math.cos(e) * Math.cos(k)),
              (e =
                m * Math.cos(p) * Math.cos(i) +
                m * Math.sin(p) * Math.sin(i) +
                Math.sin(e) * Math.sin(k)),
              -1 > e ? (e = -1) : 1 < e && (e = 1),
              (e = Math.acos(e) * zc))
            : ((i = Jc(a, e.Fu)), (e = Jc(a, e.yx)), (e = i < e ? i : e));
          e < c && (c = e);
        }
      c < vc && (b = (vc - c) / vc);
    } else b = 1;
    c = Cc(a);
    return (b = { lng: a.lng + (c.lng - a.lng) * b, lat: a.lat + (c.lat - a.lat) * b });
  }
  function Lc(a) {
    var b = {};
    if (a.lng < fc[0] - 0.4 || a.lat < fc[1] - 0.4 || a.lng > fc[2] + 0.4 || a.lat > fc[3] + 0.4)
      return (b.lng = a.lng), (b.lat = a.lat), b;
    if (Bc(a, hc, jc)) {
      var b = a.lng - tc,
        c = a.lat - uc,
        a = Math.sqrt(b * b + c * c) - Math.sin(c * pc * sc) * qc,
        b = Math.atan2(c, b) - Math.cos(b * pc * sc) * rc;
      return (b = { lng: a * Math.cos(b), lat: a * Math.sin(b) });
    }
    c = Ec(a);
    return a.lng === c.lng && a.lat === c.lng ? ((b.lng = a.lng), (b.lat = a.lat), b) : Dc(a);
  }
  function fb(a, b) {
    if (3 === b && a instanceof S) {
      var c = Ec(a);
      return new N(c.lng, c.lat);
    }
    return a;
  }
  function nb(a, b) {
    if (3 === b && a instanceof N) {
      var c = Lc(a);
      return new S(c.lng, c.lat);
    }
    return 5 === b && a instanceof N ? new S(a.lng, a.lat) : a;
  }
  function Mc(a, b) {
    switch (b) {
      case Pa:
        var c = Ec(a);
        return new S(c.lng, c.lat);
      default:
        return a;
    }
  }
  function Nc(a) {
    switch (window.BMap.coordType) {
      case Pa:
        return (a = Lc(a)), new S(a.lng, a.lat);
      default:
        return a;
    }
  }
  function Wa(a, b, c) {
    return 50331648 | ((a || 0) << 16) | ((b || 0) << 8) | (c || 0);
  }
  function ra(a, b, c) {
    if (/(baidu.com)|(^http\:\/\/maponline)/.test(a)) return; // 若调用外部网络请求直接返回
    if (b) {
      var e = (1e5 * Math.random()).toFixed(0);
      C._rd["_cbk" + e] = function (a) {
        a.result && a.result.error && 403 === a.result.error
          ? C.Yp !== s &&
            C.Yp.update(
              "\u672a\u83b7\u5f97\u767e\u5ea6\u5730\u56fe\u5546\u7528\u6388\u6743\uff0c\u53ef\u80fd\u5bfc\u81f4\u90e8\u5206\u5730\u56fe\u8bf7\u6c42\u5931\u8d25\uff0c\u8bf7\u5237\u65b0\u540e\u91cd\u8bd5\u3002",
            )
          : (b && b(a), delete C._rd["_cbk" + e]);
      };
      a += "&callback=BMap._rd._cbk" + e;
    }
    c || (a = tb(a));
    var f = I("script", { type: "text/javascript" });
    f.charset = "utf-8";
    f.src = a;
    f.addEventListener
      ? f.addEventListener(
          "load",
          function (a) {
            a = a.target;
            a.parentNode.removeChild(a);
          },
          t,
        )
      : f.attachEvent &&
        f.attachEvent("onreadystatechange", function () {
          var a = window.event.srcElement;
          a &&
            ("loaded" == a.readyState || "complete" == a.readyState) &&
            a.parentNode.removeChild(a);
        });
    setTimeout(function () {
      document.getElementsByTagName("head")[0].appendChild(f);
      f = s;
    }, 1);
  }
  function Oc(a) {
    if (localStorage) return localStorage.getItem(a) ? localStorage.getItem(a) : -1;
    if (sessionStorage) return sessionStorage.getItem(a) ? sessionStorage.getItem(a) : -1;
  }
  function tb(a) {
    var b = decodeURIComponent(a.substring(a.indexOf("?") + 1)),
      c = new Date().getTime(),
      e = window.___abvk ? window.___abvk : Oc("SECKEY_ABVK"),
      f = Oc("BMAP_SECKEY"),
      a = a + "?v=3.0&seckey=" + encodeURIComponent(e + "," + f) + "&timeStamp=" + c;
    return (a += Pc()(b + ("?v=3.0&seckey=" + e + "," + f + "&timeStamp=" + c)));
  }
  var Qc = {
    map: "yspx5c",
    common: "gqbt4n",
    style: "ugp0aj",
    tile: "iacelv",
    groundoverlay: "r2n1l3",
    pointcollection: "ntnvrp",
    marker: "3c13mi",
    symbol: "bkj2x0",
    canvablepath: "r5nsgg",
    vmlcontext: "av0pgs",
    markeranimation: "nzndiq",
    poly: "kjgmdr",
    draw: "xv2orn",
    drawbysvg: "lc1ee1",
    drawbyvml: "o4wgzr",
    drawbycanvas: "l31kne",
    infowindow: "1w44op",
    oppc: "0csagr",
    opmb: "5b0fej",
    menu: "bpeqrg",
    control: "uzf0lu",
    navictrl: "lwv4ck",
    geoctrl: "hg42y1",
    copyrightctrl: "p1aysr",
    citylistcontrol: "mwewgm",
    scommon: "fhycjz",
    local: "10mtcw",
    route: "jszyy1",
    othersearch: "5gu13e",
    mapclick: "1hr5bx",
    buslinesearch: "0nkfka",
    hotspot: "bi0lmr",
    autocomplete: "kriy5u",
    coordtrans: "ozxin1",
    coordtransutils: "opinbw",
    convertor: "wk45dx",
    clayer: "ihwovc",
    pservice: "xlitdr",
    pcommon: "wjxsxs",
    panorama: "4vyn3y",
    panoramaflash: "3pxgzw",
  };
  z.hz = (function () {
    function a(a) {
      return e && !!c[b + a + "_" + Qc[a]];
    }
    var b = "BMap_",
      c = window.localStorage,
      e = "localStorage" in window && c !== s && c !== l;
    return {
      xZ: e,
      set: function (a, g) {
        if (e) {
          for (var i = b + a + "_", k = c.length, m; k--; )
            (m = c.key(k)), -1 < m.indexOf(i) && c.removeItem(m);
          try {
            c.setItem(b + a + "_" + Qc[a], g);
          } catch (n) {
            c.clear();
          }
        }
      },
      get: function (f) {
        return e && a(f) ? c.getItem(b + f + "_" + Qc[f]) : t;
      },
      LK: a,
    };
  })();
  function ab() {}
  z.object.extend(ab, {
    Sj: { YG: -1, uQ: 0, Kq: 1 },
    VL: function () {
      var a = "canvablepath";
      if (!M() || !$b()) Zb() || (Yb() ? (a = "vmlcontext") : $b());
      return {
        tile: ["style"],
        control: [],
        marker: ["symbol"],
        symbol: ["canvablepath", "common"],
        canvablepath: "canvablepath" === a ? [] : [a],
        vmlcontext: [],
        style: [],
        poly: ["marker", "drawbycanvas", "drawbysvg", "drawbyvml"],
        drawbysvg: ["draw"],
        drawbyvml: ["draw"],
        drawbycanvas: ["draw"],
        infowindow: ["common", "marker"],
        menu: [],
        oppc: [],
        opmb: [],
        scommon: [],
        local: ["scommon"],
        route: ["scommon"],
        othersearch: ["scommon"],
        autocomplete: ["scommon"],
        citylistcontrol: ["autocomplete"],
        mapclick: ["scommon"],
        buslinesearch: ["route"],
        hotspot: [],
        coordtransutils: ["coordtrans"],
        convertor: [],
        clayer: ["tile"],
        pservice: [],
        pcommon: ["style", "pservice"],
        panorama: ["pcommon"],
        panoramaflash: ["pcommon"],
      };
    },
    v6: {},
    PG: {
      GQ:
        window._BMapSecurityConfig && window._BMapSecurityConfig.serviceHost
          ? window._BMapSecurityConfig.serviceHost + "getmodules?v=3.0"
          : C.pa + "getmodules?v=3.0",
      dV: 5e3,
    },
    ZC: t,
    Zd: { Rl: {}, Vn: [], zw: [] },
    load: function (a, b, c) {
      var e = this.qb(a);
      if (e.Se == this.Sj.Kq) c && b();
      else {
        if (e.Se == this.Sj.YG) {
          this.RK(a);
          this.hO(a);
          var f = this;
          f.ZC == t &&
            ((f.ZC = q),
            setTimeout(function () {
              for (var a = [], b = 0, c = f.Zd.Vn.length; b < c; b++) {
                var e = f.Zd.Vn[b],
                  n = "";
                ka.hz.LK(e) ? (n = ka.hz.get(e)) : ((n = ""), a.push(e + "_" + Qc[e]));
                f.Zd.zw.push({ zN: e, fF: n });
              }
              f.ZC = t;
              f.Zd.Vn.length = 0;
              console.log('load modules', [...a])
              // 0 == a.length ? f.AL() : ra(f.PG.GQ + "&mod=" + a.join(","));
              if (a.length) {
                for (i = 0; i < a.length; i++) {
                  mf = BMAP_CONFIG.home + "modules/" + a[i] + ".js";
                  ra(mf);
                }
              } else {
                f.AL();
              }
            }, 1));
          e.Se = this.Sj.uQ;
        }
        e.rv.push(b);
      }
    },
    RK: function (a) {
      if (a && this.VL()[a])
        for (var a = this.VL()[a], b = 0; b < a.length; b++)
          this.RK(a[b]), this.Zd.Rl[a[b]] || this.hO(a[b]);
    },
    hO: function (a) {
      for (var b = 0; b < this.Zd.Vn.length; b++) if (this.Zd.Vn[b] == a) return;
      this.Zd.Vn.push(a);
    },
    Q_: function (a, b) {
      var c = this.qb(a);
      try {
        eval(b);
      } catch (e) {
        return;
      }
      c.Se = this.Sj.Kq;
      for (var f = 0, g = c.rv.length; f < g; f++) c.rv[f]();
      c.rv.length = 0;
    },
    LK: function (a, b) {
      var c = this;
      c.timeout = setTimeout(function () {
        c.Zd.Rl[a].Se != c.Sj.Kq ? (c.remove(a), c.load(a, b)) : clearTimeout(c.timeout);
      }, c.PG.dV);
    },
    qb: function (a) {
      this.Zd.Rl[a] ||
        ((this.Zd.Rl[a] = {}), (this.Zd.Rl[a].Se = this.Sj.YG), (this.Zd.Rl[a].rv = []));
      // console.log('qb', this.Zd.Rl, a);
      return this.Zd.Rl[a];
    },
    remove: function (a) {
      delete this.qb(a);
    },
    aW: function (a, b) {
      for (var c = this.Zd.zw, e = q, f = 0, g = c.length; f < g; f++)
        "" == c[f].fF && (c[f].zN == a ? (c[f].fF = b) : (e = t));
      e && this.AL();
    },
    AL: function () {
      console.log('AL', [...this.Zd.zw]);
      for (var a = this.Zd.zw, b = 0, c = a.length; b < c; b++) this.Q_(a[b].zN, a[b].fF);
      this.Zd.zw.length = 0;
    },
  });
  function T(a, b) {
    this.x = a || 0;
    this.y = b || 0;
    this.x = this.x;
    this.y = this.y;
  }
  T.prototype.Vb = function (a) {
    return a && a.x == this.x && a.y == this.y;
  };
  function O(a, b) {
    this.width = a || 0;
    this.height = b || 0;
  }
  O.prototype.Vb = function (a) {
    return a && this.width == a.width && this.height == a.height;
  };
  function ub(a, b, c) {
    var e = new XMLHttpRequest();
    e.open("POST", a, q);
    e.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    e.timeout = 1e4;
    e.ontimeout = ba();
    e.onreadystatechange = function () {
      4 === this.readyState && 200 === this.status && c && c(e.responseText);
    };
    e.send(b);
  }
  (function (a) {
    function b(a, b) {
      var c = (a & 65535) + (b & 65535);
      return (((a >> 16) + (b >> 16) + (c >> 16)) << 16) | (c & 65535);
    }
    function c(a, c, e, f, g, i) {
      return b((b(b(c, a), b(f, i)) << g) | (b(b(c, a), b(f, i)) >>> (32 - g)), e);
    }
    function e(a, b, e, f, g, i, k) {
      return c((b & e) | (~b & f), a, b, g, i, k);
    }
    function f(a, b, e, f, g, i, k) {
      return c((b & f) | (e & ~f), a, b, g, i, k);
    }
    function g(a, b, e, f, g, i, k) {
      return c(e ^ (b | ~f), a, b, g, i, k);
    }
    function i(a, i) {
      a[i >> 5] |= 128 << i % 32;
      a[(((i + 64) >>> 9) << 4) + 14] = i;
      var k,
        m,
        n,
        o,
        p,
        G = 1732584193,
        E = -271733879,
        J = -1732584194,
        K = 271733878;
      for (k = 0; k < a.length; k += 16)
        (m = G),
          (n = E),
          (o = J),
          (p = K),
          (G = e(G, E, J, K, a[k], 7, -680876936)),
          (K = e(K, G, E, J, a[k + 1], 12, -389564586)),
          (J = e(J, K, G, E, a[k + 2], 17, 606105819)),
          (E = e(E, J, K, G, a[k + 3], 22, -1044525330)),
          (G = e(G, E, J, K, a[k + 4], 7, -176418897)),
          (K = e(K, G, E, J, a[k + 5], 12, 1200080426)),
          (J = e(J, K, G, E, a[k + 6], 17, -1473231341)),
          (E = e(E, J, K, G, a[k + 7], 22, -45705983)),
          (G = e(G, E, J, K, a[k + 8], 7, 1770035416)),
          (K = e(K, G, E, J, a[k + 9], 12, -1958414417)),
          (J = e(J, K, G, E, a[k + 10], 17, -42063)),
          (E = e(E, J, K, G, a[k + 11], 22, -1990404162)),
          (G = e(G, E, J, K, a[k + 12], 7, 1804603682)),
          (K = e(K, G, E, J, a[k + 13], 12, -40341101)),
          (J = e(J, K, G, E, a[k + 14], 17, -1502002290)),
          (E = e(E, J, K, G, a[k + 15], 22, 1236535329)),
          (G = f(G, E, J, K, a[k + 1], 5, -165796510)),
          (K = f(K, G, E, J, a[k + 6], 9, -1069501632)),
          (J = f(J, K, G, E, a[k + 11], 14, 643717713)),
          (E = f(E, J, K, G, a[k], 20, -373897302)),
          (G = f(G, E, J, K, a[k + 5], 5, -701558691)),
          (K = f(K, G, E, J, a[k + 10], 9, 38016083)),
          (J = f(J, K, G, E, a[k + 15], 14, -660478335)),
          (E = f(E, J, K, G, a[k + 4], 20, -405537848)),
          (G = f(G, E, J, K, a[k + 9], 5, 568446438)),
          (K = f(K, G, E, J, a[k + 14], 9, -1019803690)),
          (J = f(J, K, G, E, a[k + 3], 14, -187363961)),
          (E = f(E, J, K, G, a[k + 8], 20, 1163531501)),
          (G = f(G, E, J, K, a[k + 13], 5, -1444681467)),
          (K = f(K, G, E, J, a[k + 2], 9, -51403784)),
          (J = f(J, K, G, E, a[k + 7], 14, 1735328473)),
          (E = f(E, J, K, G, a[k + 12], 20, -1926607734)),
          (G = c(E ^ J ^ K, G, E, a[k + 5], 4, -378558)),
          (K = c(G ^ E ^ J, K, G, a[k + 8], 11, -2022574463)),
          (J = c(K ^ G ^ E, J, K, a[k + 11], 16, 1839030562)),
          (E = c(J ^ K ^ G, E, J, a[k + 14], 23, -35309556)),
          (G = c(E ^ J ^ K, G, E, a[k + 1], 4, -1530992060)),
          (K = c(G ^ E ^ J, K, G, a[k + 4], 11, 1272893353)),
          (J = c(K ^ G ^ E, J, K, a[k + 7], 16, -155497632)),
          (E = c(J ^ K ^ G, E, J, a[k + 10], 23, -1094730640)),
          (G = c(E ^ J ^ K, G, E, a[k + 13], 4, 681279174)),
          (K = c(G ^ E ^ J, K, G, a[k], 11, -358537222)),
          (J = c(K ^ G ^ E, J, K, a[k + 3], 16, -722521979)),
          (E = c(J ^ K ^ G, E, J, a[k + 6], 23, 76029189)),
          (G = c(E ^ J ^ K, G, E, a[k + 9], 4, -640364487)),
          (K = c(G ^ E ^ J, K, G, a[k + 12], 11, -421815835)),
          (J = c(K ^ G ^ E, J, K, a[k + 15], 16, 530742520)),
          (E = c(J ^ K ^ G, E, J, a[k + 2], 23, -995338651)),
          (G = g(G, E, J, K, a[k], 6, -198630844)),
          (K = g(K, G, E, J, a[k + 7], 10, 1126891415)),
          (J = g(J, K, G, E, a[k + 14], 15, -1416354905)),
          (E = g(E, J, K, G, a[k + 5], 21, -57434055)),
          (G = g(G, E, J, K, a[k + 12], 6, 1700485571)),
          (K = g(K, G, E, J, a[k + 3], 10, -1894986606)),
          (J = g(J, K, G, E, a[k + 10], 15, -1051523)),
          (E = g(E, J, K, G, a[k + 1], 21, -2054922799)),
          (G = g(G, E, J, K, a[k + 8], 6, 1873313359)),
          (K = g(K, G, E, J, a[k + 15], 10, -30611744)),
          (J = g(J, K, G, E, a[k + 6], 15, -1560198380)),
          (E = g(E, J, K, G, a[k + 13], 21, 1309151649)),
          (G = g(G, E, J, K, a[k + 4], 6, -145523070)),
          (K = g(K, G, E, J, a[k + 11], 10, -1120210379)),
          (J = g(J, K, G, E, a[k + 2], 15, 718787259)),
          (E = g(E, J, K, G, a[k + 9], 21, -343485551)),
          (G = b(G, m)),
          (E = b(E, n)),
          (J = b(J, o)),
          (K = b(K, p));
      return [G, E, J, K];
    }
    function k(a) {
      var b,
        c = "",
        e = 32 * a.length;
      for (b = 0; b < e; b += 8) c += String.fromCharCode((a[b >> 5] >>> b % 32) & 255);
      return c;
    }
    function m(a) {
      var b,
        c = [];
      c[(a.length >> 2) - 1] = l;
      for (b = 0; b < c.length; b += 1) c[b] = 0;
      var e = 8 * a.length;
      for (b = 0; b < e; b += 8) c[b >> 5] |= (a.charCodeAt(b / 8) & 255) << b % 32;
      return c;
    }
    function n(a) {
      var b = "",
        c,
        e;
      for (e = 0; e < a.length; e += 1)
        (c = a.charCodeAt(e)),
          (b += "0123456789abcdef".charAt((c >>> 4) & 15) + "0123456789abcdef".charAt(c & 15));
      return b;
    }
    function o(a, b) {
      var c = unescape(encodeURIComponent(a)),
        e = unescape(encodeURIComponent(b)),
        f = m(c),
        g = [],
        n = [];
      g[15] = n[15] = l;
      16 < f.length && (f = i(f, 8 * c.length));
      for (c = 0; 16 > c; c += 1) (g[c] = f[c] ^ 909522486), (n[c] = f[c] ^ 1549556828);
      e = i(g.concat(m(e)), 512 + 8 * e.length);
      return k(i(n.concat(e), 640));
    }
    function p(a, b, c) {
      return !b
        ? !c
          ? n(k(i(m(unescape(encodeURIComponent(a))), 8 * unescape(encodeURIComponent(a)).length)))
          : k(i(m(unescape(encodeURIComponent(a))), 8 * unescape(encodeURIComponent(a)).length))
        : !c
        ? n(o(b, a))
        : o(b, a);
    }
    "function" === typeof define && define.k3
      ? define(function () {
          return p;
        })
      : "object" === typeof module && module.yX
      ? (module.yX = p)
      : (a.md5 = p);
  })(this);
  function jb() {
    function a() {
      if (1 === arguments.length && "object" === typeof arguments[0]) {
        var a = arguments[0] || {};
        for (key in a)
          if (!a[key] || !(g[key] && a[key] === g[key]))
            if (a[key] || 0 === a[key]) g[key] = a[key];
      }
      a = document.getElementById(g.Qi);
      a.parentNode.removeChild(a);
      m.disconnect();
    }
    function b(a) {
      if (1 === arguments.length && "object" === typeof arguments[0]) {
        var b = arguments[0] || {};
        for (key in b)
          if (!b[key] || !(g[key] && b[key] === g[key]))
            if (b[key] || 0 === b[key]) g[key] = b[key];
      }
      (b = document.getElementById(g.Qi)) && b.parentNode && b.parentNode.removeChild(b);
      if ((b = document.getElementById(g.zG))) {
        var c = b ? b : document.body;
        if (z.ga.oa) (f = parseFloat(z.U.wf(c, "width"))), (e = parseFloat(z.U.wf(c, "height")));
        else
          var e = getComputedStyle(c, s),
            f = parseFloat(e.width),
            e = parseFloat(e.height);
        var i = document.getElementById(g.Qi),
          o = s;
        if (i) i.shadowRoot && (o = i.shadowRoot);
        else {
          i = document.createElement("div");
          i.id = g.Qi;
          i.setAttribute(
            "style",
            "pointer-events: none !important; opacity: 1 !important; display: block !important;position: absolute !important;left: 0 !important;top: 0 !important;transform:scale(1) !important;scale: 1 !important;z-index:99 !important;margin: 0px !important;visibility: visible !important;",
          );
          var o = "function" === typeof i.attachShadow ? i.attachShadow({ mode: "closed" }) : i,
            H = c.children,
            G = Math.floor(Math.random() * (H.length - 1));
          H[G] ? c.insertBefore(i, H[G]) : c.appendChild(i);
        }
        g.pl = parseInt((f - g.Eq) / (g.Kn + g.Ln)) || 1;
        i = parseInt((f - g.Eq - g.Kn * g.pl) / g.pl);
        g.Ln = i ? g.Ln : i;
        g.ql = parseInt((e - g.Fq) / (g.Jn + g.Mn)) || 1;
        i = parseInt((e - g.Fq - g.Jn * g.ql) / g.ql);
        g.Mn = i ? g.Mn : i;
        b
          ? ((i = g.Eq + g.Kn * g.pl + g.Ln * (g.pl - 1)),
            (H = g.Fq + g.Jn * g.ql + g.Mn * (g.ql - 1)))
          : ((i = 0 + g.Eq + g.Kn * g.pl + g.Ln * (g.pl - 1)),
            (H = 0 + g.Fq + g.Jn * g.ql + g.Mn * (g.ql - 1)));
        for (var E, J = document.createDocumentFragment(), K = 0; K < g.ql; K++) {
          E = b ? 0 + g.Fq + (g.Mn + g.Jn) * K : g.Fq + (e - H) / 2 + (g.Mn + g.Jn) * K;
          for (var P = 0; P < g.pl; P++) {
            var G = b
                ? 0 + g.Eq + (f - i) / 2 + (g.Kn + g.Ln) * P
                : g.Eq + (f - i) / 2 + (g.Kn + g.Ln) * P,
              Q = document.createElement("div");
            Q.appendChild(document.createTextNode(g.AG));
            Q.id = g.qz + K + P;
            Q.style.webkitTransform = "rotate(-" + g.Xu + "deg)";
            Q.style.MozTransform = "rotate(-" + g.Xu + "deg)";
            Q.style.msTransform = "rotate(-" + g.Xu + "deg)";
            Q.style.g2 = "rotate(-" + g.Xu + "deg)";
            Q.style.transform = "rotate(-" + g.Xu + "deg)";
            Q.style.visibility = "";
            Q.style.position = "absolute";
            Q.style.left = G + "px";
            Q.style.top = E + "px";
            Q.style.overflow = "hidden";
            Q.style.zIndex = "9999999";
            Q.style.opacity = g.D1;
            Q.style.fontSize = g.G1;
            Q.style.fontFamily = g.F1;
            Q.style.color = g.E1;
            Q.style.textAlign = "center";
            Q.style.width = g.Kn + "px";
            Q.style.height = g.Jn + "px";
            Q.style.display = "block";
            Q.style["-ms-user-select"] = "none";
            J.appendChild(Q);
          }
        }
        o.appendChild(J);
        if ((a.gF === l ? g.gF : a.gF) && k)
          m.observe(c, n), m.observe(document.getElementById(g.Qi), n);
      }
    }
    function c(a) {
      if (f) f = t;
      else {
        for (var c = t, e = 0, i = 0, k = 0; k < a.length; k++) {
          if (o && a[k].target && a[k].target.getAttribute) {
            var m = a[k].target.getAttribute("id");
            if (m && (m === g.Qi || 0 <= m.indexOf(g.qz))) {
              c = q;
              break;
            }
          }
          for (var n = 0; n < a[k].addedNodes.length; n++)
            if (
              ((m = a[k].addedNodes[n]),
              (m = m.getAttribute("id")),
              o && m && (m === g.Qi || 0 <= m.indexOf(g.qz)))
            ) {
              e += 1;
              break;
            }
          for (n = 0; n < a[k].removedNodes.length; n++)
            if (
              ((m = a[k].removedNodes[n]),
              (m = m.getAttribute("id")),
              o && m && (m === g.Qi || 0 <= m.indexOf(g.qz)))
            ) {
              i += 1;
              break;
            }
        }
        (c || (!e && 0 < i)) && b(o);
      }
    }
    var e = {},
      f = t,
      g = {
        Qi: Math.random().toString(36).slice(2, 12),
        qz: "baidu_jsapi_watermark_span",
        AG: "\u6d4b\u8bd5\u6c34\u5370",
        Eq: 20,
        Fq: 20,
        ql: 0,
        pl: 0,
        Ln: 40,
        Mn: 40,
        F1: "\u5fae\u8f6f\u96c5\u9ed1",
        E1: "red",
        G1: "18px",
        D1: 1,
        Kn: 200,
        Jn: 50,
        Xu: 15,
        B7: 0,
        A7: 0,
        zG: s,
        gF: q,
      },
      i = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver,
      k = i !== l,
      m = k ? new i(c) : s,
      n = { childList: q, attributes: q },
      o;
    e.ey = function (a) {
      o = a;
      for (var c = g.Qi, e = document.getElementById(c); e; )
        (c = Math.random().toString(36).slice(2, 12)), (e = document.getElementById(c));
      g.Qi = c;
      b(a);
      z.V(window, "resize", function () {
        b(a);
      });
    };
    e.load = function (a) {
      o = a;
      b(a);
    };
    e.remove = function () {
      f = q;
      a();
    };
    return e;
  }
  var Rc = C.dd + "?qt=jsapi_log",
    Sc = Date.now(),
    Tc = s,
    Uc = s,
    Vc = {},
    Wc = {};
  function Va(a, b) {
    if (!window.navigator || navigator.onLine)
      Uc ||
        (Uc = function () {
          Xc();
        }),
        18e5 < Date.now() - Sc && ((Sc = Date.now()), (Vc = {}), (Wc = {})),
        Vc[a] || ((Vc[a] = q), (Wc[a] = b)),
        !Tc && Uc && (Tc = setInterval(Uc, 1e3));
  }
  function Xc() {
    if (0 === Object.keys(Wc).length) clearInterval(Tc), (Tc = s);
    else {
      var a = Object.keys(Wc)[0],
        b = new Date().getTime(),
        c = "logCbk" + Math.floor(1e10 * Math.random());
      window.BMap[c] = function () {
        delete window.BMap[c];
      };
      if (window._BMapSecurityConfig && window._BMapSecurityConfig.serviceHost) {
        var e = Rc + "&bmap3=1";
        NaN +
          (M() ? 1 : 0) +
          "&module=" +
          (Wc[a][0] || "") +
          "&func=" +
          (Wc[a][1] || "") +
          "&subfunc=" +
          (Wc[a][2] || "") +
          "&t=" +
          b +
          "&callback=BMap." +
          c;
      } else
        e =
          Rc +
          "&ak=" +
          qa +
          "&bmap3=1&device=" +
          (M() ? 1 : 0) +
          "&module=" +
          (Wc[a][0] || "") +
          "&func=" +
          (Wc[a][1] || "") +
          "&subfunc=" +
          (Wc[a][2] || "") +
          "&t=" +
          b +
          "&callback=BMap." +
          c;
      e += Pc()(e);
      try {
        ra(e, s, q), delete Wc[a];
      } catch (f) {}
      0 === Object.keys(Wc).length && (clearInterval(Tc), (Tc = s));
    }
  }
  for (
    var Yc = (function (a, b) {
        function c(a) {
          return f(a, function (a) {
            return e(a);
          });
        }
        function e(a) {
          return g.axmim(a, "")[g.xiama][g.axmim(g.aeacm(m, "Char"), k)](a);
        }
        function f(a, b) {
          for (var c = "ccc"; c !== g.ieami; )
            switch (c) {
              case "mhx":
                for (c = 0; g.hlxed(c, i); c++) {
                  var e = b(a[c]);
                  f.push(e);
                }
                c = g.mlllh;
                break;
              case g.eedem:
                var f = [],
                  c = "mhx";
                break;
              case g.mlllh:
                return f;
              case g.eaiha:
                var i = a.length,
                  c = "iec";
            }
        }
        var g = {
            ieami: "laxx",
            hlxed: function (a, b) {
              return a < b;
            },
            mlllh: "dea",
            eedem: "iec",
            eaiha: "ccc",
            axmim: function (a, b) {
              return a + b;
            },
            xiama: "constructor",
            aeacm: function (a, b) {
              return a + b;
            },
            echid: function (a, b) {
              return a(b);
            },
            amxxh: function (a, b) {
              return a + b;
            },
            meacx: function (a, b) {
              return a(b);
            },
            ihadh: function (a, b, c) {
              return a(b, c);
            },
            chxcd: function (a, b, c) {
              return a(b, c);
            },
          },
          i,
          k,
          m,
          n = decodeURIComponent;
        i = "de";
        m = g.aeacm("fro", "m");
        k = g.amxxh("Co", i);
        var o = c.call(
          e,
          [
            39, 34, 37, 96, 60, 120, 97, 65, 98, 66, 99, 67, 100, 68, 101, 69, 102, 70, 103, 110,
            109, 111, 112, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57,
          ],
        );
        i = f([28782, 27702, 26416, 25167, 24183], function (a) {
          return g.echid(n, a);
        });
        var p = c.call(
            i,
            [
              22354, 22749, 24415, 23346, 22257, 22688, 24306, 25174, 23595, 25547, 22984, 25690,
              22212, 27547, 21594, 27210, 23090, 29193, 22394, 29368, 29532, 29459, 29530, 24146,
              24500, 26352, 27441, 28788, 29370, 27673, 26925, 25249, 24430,
            ],
          ),
          v = {};
        i = g.meacx(c, i);
        var w = RegExp(i.join("|"));
        for (i = 0; i < o.length; i++) v[p[i]] = o[i];
        b = g
          .ihadh(f, b.split(""), function (a) {
            return v[a] || a;
          })
          .join("");
        return g.chxcd(f, b.split(w), function (a) {
          return g.echid(n, a);
        });
      })(
        this,
        "\u58a0\u735ci\u59c8l\u6730\u59c8\u735cl\u5ef2\u545a\u706e\u59c8\u59c8i\u56c4\u5ef2\u624f\u59c8\u545a\u59c8\u5ef2\u58a0\u5e77\u735c\u56c4i\u545ah\u5e77\u735c\u59c8\u5ef2\u545al\u6c36\u545ai\u735c\u5ef2\u58a0\u706eSJv\u6a4aY\u72bah\u6b31\u692dZ\u6b9bh\u72ba\u735aHS\u706e\u59c8\u735ci\u735c\u56c4\u706e\u545ah\u545a\u545a\u545a\u706e\u5ef2\u545ah\u5ef2\u545a\u6c36\u5f5f\u66f0\u6c19\u59c8\u5ef2ll\u5c2b\u5ef2\u59c8k\u5f5f\u6b31\u6b9b\u6730\u5ef2\u59c8\u58a0\u545al\u706e\u545ah\u58a0\u545al\u6c36\u5f5f\u6b31\u7209qt\u5f5f\u6b31\u6b9b\u735a\u5ef2\u72b8\u7313_\u545a\u72b8try\u5f5f\u66f0\u6c19v\u5f5f\u6b31\u6b9b\u6c36\u5ef2\u545a\u5ef2\u5ef2l\u706e\u5a32u\u72b8\u59c8ti\u7313\u72b8\u624f\u58a0\u5ef2\u59c8i\u545a\u706e\u56c4l\u56c4\u735c\u58a0\u6c36\u5f5f\u6a4a\u6c19\u5f5f\u62a1\u66f0\u5f5f\u6256\u62a1\u5f5f\u6a4a\u5f6e\u5f5f\u5f6e\u645a\u5f5f\u62a1\u5e52\u5f5f\u6a4a\u62a1\u5f5f\u6256\u6c19\u5f5f\u62a1\u5fb4\u5f5f\u6a4a\u692d\u5f5f\u5f6e\u7074\u5f5f\u63cb\u6b31\u5f5f\u6a4a\u62a1\u5f5f\u6256\u7209\u5f5f\u63cb\u692d\u5f5f\u6a4a\u72ba\u5f5f\u62a1\u72ba\u5f5f\u6256\u62a1\u5f5f\u6a4a\u6c19\u5f5f\u5f6e\u5f6e\u5f5f\u6256\u7209\u5f5f\u6a4a\u72ba\u5f5f\u5f6e\u645a\u5f5f\u63cb\u5e52\u5f5f\u6a4a\u72ba\u5f5f\u5f6e\u63cb\u5f5f\u63cb\u6a4a\u5f5f\u6a4a\u6c19\u5f5f\u5f6e\u645a\u5f5f\u62a1\u6b9b\u5f5f\u6a4a\u72ba\u5f5f\u62a1\u6256\u5f5f\u6256\u5fb4\u5f5f\u6a4a\u7074\u5f5f\u63cb\u6b9b\u5f5f\u63cb\u7209\u5f5f\u6a4a\u692d\u5f5f\u5f6e\u7074\u5f5f\u6256\u62a1\u5f5f\u6a4a\u6c19\u5f5f\u5f6e\u6b9b\u5f5f\u62a1\u6b31\u5f5f\u6a4a\u5f6e\u5f5f\u5f6e\u5f6e\u5f5f\u5f6e\u5e52\u6c36i\u545a\u545ah\u706ei\u58a0\u5ef2\u706e\u5ef2ih\u624f\u5ef2hl\u59c8\u624f\u58a0\u5ef2h\u6c36i\u735c\u545a\u6c36i\u56c4\u545aih\u6730\u545a\u545a\u735chi\u624f\u545a\u59c8\u58a0\u735c\u545a\u624f\u59c8\u59c8i\u5e77\u545arr\u7313r\u6c36\u59c8\u58a0ii\u735c\u6c36\u56c4hh\u545a\u5ef2\u706e\u5ef2\u59c8l\u58a0\u545a\u6730i\u59c8\u58a0h\u58a0\u6c36i\u545a\u5ef2\u735c\u5ef2\u5e77\u56c4\u56c4h\u58a0\u56c4\u624f\u545a\u5ef2\u545a\u58a0\u545a\u6730\u58a0\u735c\u545a\u5ef2\u545a\u6730\u58a0\u5ef2h\u545a\u59c8\u624fh\u5ef2l\u56c4\u735c\u6730ih\u545a\u59c8\u735c\u5e77\u5ef2i\u5ef2\u56c4\u59c8\u6c36\u5f5f\u6b31\u7209qt\u5f5f\u6b31\u6b9b\u735a\u5ef2\u72b8\u7313_\u59c8\u7313u\u72b8t\u5f5f\u66f0\u6c19v\u5f5f\u6b31\u6b9b\u6730\u5f5f\u66f0\u6c19\u5ef2k\u5f5f\u6b31\u6b9b\u624f\u5f5f\u66f0\u6c19\u59c8\u7313\u72b8su\u735c\u545a\u5f5f\u6b31\u6b9b\u5e77\u59c8\u5ef2il\u735c\u706e\u545a\u59c8\u56c4l\u5ef2\u706e\u5ef2l\u5ef2\u56c4l\u6c36\u56c4\u545a\u5ef2\u545a\u59c8\u6c36\u735c\u735c\u58a0\u5ef2\u56c4\u706eP\u6256NOR\u6256M\u6256\u706ei\u735c\u5ef2\u735ch\u6c36\u545a\u545ai\u59c8\u5ef2\u706e\u5ef2i\u5ef2\u545a\u545a\u6730ll\u545a\u5e77\u545a\u59c8\u56c4\u5ef2\u545a\u624f\u545ahi\u735c\u545a\u6c36\u56c4\u56c4\u545a\u706e\u5ef2i\u56c4\u706e\u5ef2\u59c8\u735c\u624f\u58a0\u545a\u545a\u6730il\u56c4\u5e77i\u59c8\u5ef2\u5e77ih\u545a\u5e77\u5ef2\u545ah\u6730\u56c4l\u735c\u6c36\u545a\u545a\u735c\u706eh\u59c8\u5ef2\u706e\u735cll\u706eh\u56c4i\u706ei\u59c8i\u624f\u735c\u59c8i\u58a0\u59c8\u706el\u58a0i\u735c\u56c4\u624f\u735c\u735c\u735ch\u56c4\u5e77\u5ef2i\u5ef2i\u545a\u624fl\u735c\u56c4\u6730\u735ch\u5ef2h\u56c4\u624f\u56c4\u59c8\u545a\u56c4\u58a0\u706e\u545al\u56c4\u59c8\u59c8\u5e77\u58a0\u735c\u58a0\u59c8\u545a\u6c36\u5ef2\u735c\u545a\u545a\u545a\u6730\u5ef2uth_k\u545ay\u5f5f\u6b31\u6b9b\u6730\u56c4\u58a0l\u59c8\u5ef2",
      ),
      Zc = 188,
      $c = ++Zc;
    --$c;

  )
    Yc.push(Yc.shift());
  function W(a) {
    return Yc[a - 0];
  }
  var cd = (function (a) {
    for (
      var b = {
          cxiim: function (a, b, c) {
            return a(b, c);
          },
          dhhea: W("0x0"),
          aclxe: function (a, b) {
            return a + b;
          },
          icxhx: function (a, b) {
            return a + b;
          },
          ieama: function (a, b) {
            return a + b;
          },
          ddhxd: "eac",
          eaexe: W("0x1"),
          ideih: W("0x2"),
          eemhi: W("0x3"),
          ecxme: W("0x4"),
          ehime: W("0x5"),
        },
        c = b[W("0x6")];
      c !== b[W("0x7")];

    )
      switch (c) {
        case b[W("0x8")]:
          var e = 0,
            c = W("0x5");
          break;
        case W("0x9"):
          return function (a) {
            var c = {
              ecdla: W("0xa"),
              aladl: function (a, b) {
                return a(b);
              },
              deaec: function (a, b) {
                return a !== b;
              },
              mmxad: function (a, c, e) {
                return b[W("0xb")](a, c, e);
              },
              xmeae: b[W("0xc")],
              xahec: "dcx",
              haldm: function (a, c) {
                return b[W("0xd")](a, c);
              },
              ihecm: function (a, c) {
                return b[W("0xe")](a, c);
              },
              aiadc: function (a, c) {
                return b[W("0xf")](a, c);
              },
              cailm: b[W("0x10")],
              aiaee: "lle",
              ecdae: b[W("0x11")],
            };
            e += a;
            f ||
              (f = setTimeout(function () {
                for (var a = "dcx"; a !== c[W("0x12")]; )
                  switch (a) {
                    case c[W("0x13")]:
                      var b = c.haldm(
                          c[W("0x14")](
                            c[W("0x15")](c[W("0x16")](C.YN, W("0x17")), C.version) + W("0x18"),
                            qa,
                          ) + W("0x19"),
                          e,
                        ),
                        a = c[W("0x1a")];
                      break;
                    case W("0x1"):
                      f = s;
                      a = W("0x0");
                      break;
                    case c[W("0x1a")]:
                      ra(b, function (a) {
                        var b = {
                          imamh: c[W("0x1b")],
                          eeica: function (a, b) {
                            return c[W("0x1c")](a, b);
                          },
                        };
                        if (!a || a[c[W("0x1b")]] === l || c[W("0x1d")](a[W("0xa")], 0))
                          c[W("0x1e")](ad, W("0x1f"), function (a) {
                            if (!a || a[b.imamh] === l || 0 !== a[b[W("0x20")]])
                              b[W("0x21")](bd, W("0x1f"));
                          });
                      });
                      a = c[W("0x22")];
                      break;
                    case W("0x23"):
                      (e = 0), (a = c[W("0x24")]);
                  }
              }, g));
          };
        case b[W("0x6")]:
          var f = s,
            c = W("0x4");
          break;
        case b[W("0x25")]:
          var g = a ? a : 5e3,
            c = "cci";
      }
  })();
  function dd(a, b) {
    for (
      var c = {
          mcixc: function (a, b) {
            return a !== b;
          },
          lximd: "xlle",
          mmmhd: W("0x26"),
          aiaie: W("0x27"),
          mhahd: W("0x28"),
          dcedx: W("0x29"),
          laaxh: W("0x2a"),
          eldcc: W("0x2b"),
          xmxce: function (a, b) {
            return a + b;
          },
          leacx: function (a, b) {
            return a + b;
          },
          ameee: function (a, b) {
            return a + b;
          },
          dxlca: function (a, b) {
            return a + b;
          },
          xmicl: W("0x2c"),
          cmlae: W("0x2d"),
          xeeee: W("0x2e"),
          cmimd: W("0x2f"),
          ccida: W("0x30"),
          eaexe: "lmd",
          cecax: W("0x31"),
          aheme: W("0x32"),
          mdieh: function (a, b) {
            return a(b);
          },
          mcael: W("0x33"),
          eimax: function (a, b) {
            return a(b);
          },
          eheee: function (a, b) {
            return a + b;
          },
          xemai: function (a, b) {
            return a + b;
          },
          aehae: function (a, b) {
            return a + b;
          },
        },
        e = W("0x26");
      c[W("0x34")](e, c[W("0x35")]);

    )
      switch (e) {
        case c[W("0x36")]:
          var f,
            g,
            e = c[W("0x37")];
          break;
        case W("0x38"):
          g = b.Qp === t ? t : q;
          e = c[W("0x39")];
          break;
        case W("0x27"):
          e = !b ? c[W("0x3a")] : c.laaxh;
          break;
        case "hca":
          var i = Date.parse(new Date()),
            e = W("0x2d");
          break;
        case c[W("0x3b")]:
          var k =
              c[W("0x3c")](
                c.leacx(
                  c[W("0x3d")](c[W("0x3d")](W("0x3e"), c[W("0x3f")](m, n)) + "-" + i, "-"),
                  qa,
                ),
                "-",
              ) + o,
            e = c[W("0x40")];
          break;
        case c[W("0x41")]:
          var m = i / 1e3,
            e = c.xeeee;
          break;
        case c.cmimd:
          var n = 1800,
            e = c[W("0x42")];
          break;
        case "ild":
          f = b.sW ? b.sW : 1;
          e = c[W("0x11")];
          break;
        case c.dcedx:
          f = 1;
          e = c[W("0x43")];
          break;
        case W("0x31"):
          g = q;
          e = c[W("0x39")];
          break;
        case c.aheme:
          return k;
        case "ihe":
          g && c[W("0x44")](cd, f);
          e = "hdi";
          break;
        case c[W("0x45")]:
          var o = c[W("0x46")](md5, v),
            e = c[W("0x3b")];
          break;
        case W("0x28"):
          var p = W("0x47"),
            e = c[W("0x48")];
          break;
        case W("0x2e"):
          var v =
              c[W("0x49")](c.xemai(c.xemai(a + "-" + c[W("0x4a")](m, n) + "-" + i, "-"), qa), "-") +
              p,
            e = c[W("0x45")];
      }
  }
  function ad(a, b) {
    var c = {
      acxel: function (a, b) {
        return a + b;
      },
      ehxel: function (a, b) {
        return a + b;
      },
      idmde: W("0x18"),
      aeaal: function (a, b) {
        return a === b;
      },
      axxae: function (a, b) {
        return a + b;
      },
      xacie: function (a, b) {
        return a + b;
      },
      dldmx: W("0x4b"),
    };
    switch (a) {
      case "PANORAMA":
        var e = c[W("0x4c")](c[W("0x4c")](c[W("0x4d")](C.YN + W("0x4e"), C.version), c.idmde), qa);
        c[W("0x4f")](typeof b, W("0x50"))
          ? ra(e, b)
          : ra(c.axxae(c[W("0x51")](e, c[W("0x52")]), b));
    }
  }
  function bd(a) {
    var b = {
      aadaa: function (a, b) {
        return a(b);
      },
      eaexe: W("0x53"),
    };
    switch (a) {
      case "PANORAMA":
        b.aadaa(alert, b[W("0x11")]);
    }
  }
  function Pc() {
    function a(a) {
      return b[a - 0];
    }
    var b = (function (a, b) {
      function f(a) {
        var b = {
          eexem: function (a, b) {
            return k.aaxeh(a, b);
          },
        };
        return i(a, function (a) {
          return b.eexem(g, a);
        });
      }
      function g(a) {
        return (a + "").constructor[k.aamcc(k.aamcc(o, "Char"), n)](a);
      }
      function i(a, b) {
        for (var c = k.aedal; k.ledia(c, k.hmmhe); )
          switch (c) {
            case "aed":
              var e = [],
                c = k.dmaai;
              break;
            case "ahd":
              for (c = 0; c < g; c++) {
                var f = b(a[c]);
                e.push(f);
              }
              c = "dxa";
              break;
            case "mee":
              var g = a.length,
                c = k.icihe;
              break;
            case k.ecaae:
              return e;
          }
      }
      var k = {
          aedal: "mee",
          ledia: function (a, b) {
            return a !== b;
          },
          hmmhe: "iicx",
          dmaai: "ahd",
          icihe: "aed",
          ecaae: "dxa",
          aamcc: function (a, b) {
            return a + b;
          },
          aaxeh: function (a, b) {
            return a(b);
          },
          hidxa: function (a, b) {
            return a(b);
          },
          ahacc: function (a, b) {
            return a < b;
          },
          ddddm: function (a, b, c) {
            return a(b, c);
          },
          aaaxe: function (a, b, c) {
            return a(b, c);
          },
        },
        m,
        n,
        o,
        p = decodeURIComponent;
      m = "de";
      o = k.aamcc("fro", "m");
      n = k.aamcc("Co", m);
      var v = f.call(
        g,
        [
          39, 34, 37, 96, 60, 120, 97, 65, 98, 66, 99, 67, 100, 68, 101, 69, 102, 70, 103, 110, 109,
          111, 112, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57,
        ],
      );
      m = i([28782, 27702, 26416, 25167, 24183], function (a) {
        return k.aaxeh(p, a);
      });
      var w = f.call(
          m,
          [
            22354, 22749, 24415, 23346, 22257, 22688, 24306, 25174, 23595, 25547, 22984, 25690,
            22212, 27547, 21594, 27210, 23090, 29193, 22394, 29368, 29532, 29459, 29530, 24146,
            24500, 26352, 27441, 28788, 29370, 27673, 26925, 25249, 24430,
          ],
        ),
        A = {};
      m = k.hidxa(f, m);
      var B = RegExp(m.join("|"));
      for (m = 0; k.ahacc(m, v.length); m++) A[w[m]] = v[m];
      b = k
        .ddddm(i, b.split(""), function (a) {
          return A[a] || a;
        })
        .join("");
      return k.aaaxe(i, b.split(B), function (a) {
        return p(a);
      });
    })(
      this,
      "\u5f5f\u66f0\u6c19si\u577a\u72b8\u5f5f\u6b31\u6b9b\u6730\u58a0lh\u6730\u5ef2i\u5ef2\u5e77H\u5e52\u6256\u5f6eP\u62a1P\u692dY\u6c19\u6256\u63cbQO\u5e52\u6730\u545a\u59c8\u545ai\u545a\u6730\u59c8\u5ef2h\u735ch\u5e77\u7209\u72baL\u66f0O\u6c19R\u6c19\u6256\u6b9b\u62a1\u5f6e\u5f6e\u5e52O\u5e77\u545a\u56c4iih\u624f\u58a0\u59c8\u58a0\u5ef2\u5ef2\u6c36l\u545a\u72b8\u577ath\u6c36l\u59c8i\u59c8\u545a\u624f\u545a\u58a0\u5ef2l\u59c8\u6730h\u58a0\u56c4\u735c\u56c4\u706e\u5ef2\u5ef2\u59c8\u56c4\u545a\u5e77l\u545a\u545a\u58a0\u706el\u545al\u5e77\u56c4\u735c\u59c8",
    );
    (function (a, b) {
      for (var f = ++b; --f; ) a.push(a.shift());
    })(b, 456);
    return function (b) {
      for (
        var e = {
            eceie: function (a, b) {
              return a !== b;
            },
            ilahl: a("0x0"),
            cahmh: a("0x1"),
            ediih: a("0x2"),
            xcxaa: function (a, b) {
              return a + b;
            },
            dmmam: a("0x3"),
            lcice: a("0x4"),
            exalc: function (a, b) {
              return a(b);
            },
            hxdmd: a("0x5"),
            aacde: a("0x6"),
          },
          f = "lel";
        e[a("0x7")](f, e.ilahl);

      )
        switch (f) {
          case e[a("0x8")]:
            var g = a("0x9"),
              f = a("0x5");
            break;
          case e[a("0xa")]:
            return e[a("0xb")](e.dmmam, i.substring(i[a("0xc")] - 12));
          case e[a("0xd")]:
            var i = e[a("0xe")](md5, md5(b + g) + k),
              f = "dmc";
            break;
          case e[a("0xf")]:
            var k = e[a("0x10")],
              f = a("0x4");
        }
    };
  }
  function sb(a, b) {
    a &&
      ((this.Ob = a),
      (this.da = "spot" + sb.da++),
      (b = b || {}),
      (this.mh = b.text || ""),
      (this.cw = b.offsets ? b.offsets.slice(0) : [5, 5, 5, 5]),
      (this.cC = b.userData || s),
      (this.Wh = b.minZoom || s),
      (this.Qf = b.maxZoom || s));
  }
  sb.da = 0;
  z.extend(sb.prototype, {
    za: function (a) {
      this.Wh == s && (this.Wh = a.M.kc);
      this.Qf == s && (this.Qf = a.M.qc);
    },
    va: function (a) {
      if (a instanceof S || a instanceof N) this.Ob = a;
    },
    ma: u("Ob"),
    yu: ca("mh"),
    qE: u("mh"),
    setUserData: ca("cC"),
    getUserData: u("cC"),
  });
  function ed() {
    this.P = s;
    this.Pb = "control";
    this.Va = this.BK = q;
  }
  z.lang.xa(ed, z.lang.Ja, "Control");
  z.extend(ed.prototype, {
    initialize: function (a) {
      this.P = a;
      if (this.R) return a.$a.appendChild(this.R), this.R;
    },
    Me: function (a) {
      !this.R && this.initialize && hb(this.initialize) && (this.R = this.initialize(a));
      this.m = this.m || { Pg: t };
      this.RB();
      this.Go();
      this.R && (this.R.Lr = this);
    },
    RB: function () {
      var a = this.R;
      if (a) {
        var b = a.style;
        b.position = "absolute";
        b.zIndex = this.er || "10";
        b.MozUserSelect = "none";
        b.WebkitTextSizeAdjust = "none";
        this.m.Pg || z.U.jb(a, "BMap_noprint");
        M() || z.V(a, "contextmenu", pa);
      }
    },
    remove: function () {
      this.P = s;
      this.R &&
        (this.R.parentNode && this.R.parentNode.removeChild(this.R), (this.R = this.R.Lr = s));
    },
    Ha: function () {
      this.R = Mb(this.P.$a, "<div unselectable='on'></div>");
      this.Va == t && z.U.aa(this.R);
      return this.R;
    },
    Go: function () {
      this.wc(this.m.anchor);
    },
    wc: function (a) {
      if (this.l3 || !gb(a) || isNaN(a) || a < fd || 3 < a) a = this.defaultAnchor;
      this.m = this.m || { Pg: t };
      this.m.Ga = this.m.Ga || this.defaultOffset;
      var b = this.m.anchor;
      this.m.anchor = a;
      if (this.R) {
        var c = this.R,
          e = this.m.Ga.width,
          f = this.m.Ga.height;
        c.style.left = c.style.top = c.style.right = c.style.bottom = "auto";
        switch (a) {
          case fd:
            c.style.top = f + "px";
            c.style.left = e + "px";
            break;
          case hd:
            c.style.top = f + "px";
            c.style.right = e + "px";
            break;
          case id:
            c.style.bottom = f + "px";
            c.style.left = e + "px";
            break;
          case 3:
            (c.style.bottom = f + "px"), (c.style.right = e + "px");
        }
        c = ["TL", "TR", "BL", "BR"];
        z.U.rc(this.R, "anchor" + c[b]);
        z.U.jb(this.R, "anchor" + c[a]);
      }
    },
    UD: function () {
      return this.m.anchor;
    },
    getContainer: u("R"),
    Td: function (a) {
      a instanceof O &&
        ((this.m = this.m || { Pg: t }),
        (this.m.Ga = new O(a.width, a.height)),
        this.R && this.wc(this.m.anchor));
    },
    zj: function () {
      return this.m.Ga;
    },
    hd: u("R"),
    show: function () {
      this.Va != q && ((this.Va = q), this.R && z.U.show(this.R));
    },
    aa: function () {
      this.Va != t && ((this.Va = t), this.R && z.U.aa(this.R));
    },
    isPrintable: function () {
      return !!this.m.Pg;
    },
    Oc: function () {
      return !this.R && !this.P ? t : !!this.Va;
    },
  });
  var fd = 0,
    hd = 1,
    id = 2;
  function vb(a) {
    ed.call(this);
    a = a || {};
    this.m = {
      Pg: t,
      YF: a.showZoomInfo || q,
      anchor: a.anchor,
      Ga: a.offset,
      type: a.type,
      qX: a.enableGeolocation || t,
    };
    this.defaultAnchor = M() ? 3 : fd;
    this.defaultOffset = new O(10, 10);
    this.wc(a.anchor);
    this.An(a.type);
    this.Hf();
  }
  z.lang.xa(vb, ed, "NavigationControl");
  z.extend(vb.prototype, {
    initialize: function (a) {
      this.P = a;
      return this.R;
    },
    An: function (a) {
      this.m.type = gb(a) && 0 <= a && 3 >= a ? a : 0;
    },
    Kp: function () {
      return this.m.type;
    },
    Hf: function () {
      var a = this;
      ab.load("navictrl", function () {
        a.Gf();
      });
    },
  });
  function jd(a) {
    ed.call(this);
    a = a || {};
    this.m = {
      anchor: a.anchor || id,
      Ga: a.offset || new O(10, 30),
      z0: a.showAddressBar !== t,
      V3: a.enableAutoLocation || t,
      rN: a.locationIcon || s,
    };
    var b = this;
    this.er = 1200;
    b.v1 = [];
    this.ve = [];
    ab.load("geoctrl", function () {
      (function e() {
        if (0 !== b.ve.length) {
          var a = b.ve.shift();
          b[a.method].apply(b, a.arguments);
          e();
        }
      })();
      b.FQ();
    });
    Ya(Na);
  }
  z.lang.xa(jd, ed, "GeolocationControl");
  z.extend(jd.prototype, {
    location: function () {
      this.ve.push({ method: "location", arguments: arguments });
    },
    getAddressComponent: ea(s),
  });
  function kd(a) {
    ed.call(this);
    a = a || {};
    this.m = { Pg: t, anchor: a.anchor, Ga: a.offset };
    this.hc = [];
    this.defaultAnchor = id;
    this.defaultOffset = new O(5, 2);
    this.wc(a.anchor);
    this.BK = t;
    this.Hf();
  }
  z.lang.xa(kd, ed, "CopyrightControl");
  z.object.extend(kd.prototype, {
    initialize: function (a) {
      this.P = a;
      return this.R;
    },
    Uw: function (a) {
      if (a && gb(a.id) && !isNaN(a.id)) {
        var b = { bounds: s, content: "" },
          c;
        for (c in a) b[c] = a[c];
        if ((a = this.Im(a.id))) for (var e in b) a[e] = b[e];
        else this.hc.push(b);
      }
    },
    Im: function (a) {
      for (var b = 0, c = this.hc.length; b < c; b++) if (this.hc[b].id == a) return this.hc[b];
    },
    aE: u("hc"),
    wF: function (a) {
      for (var b = 0, c = this.hc.length; b < c; b++)
        this.hc[b].id == a && ((r = this.hc.splice(b, 1)), b--, (c = this.hc.length));
    },
    Hf: function () {
      var a = this;
      ab.load("copyrightctrl", function () {
        a.Gf();
      });
    },
  });
  function xb(a) {
    ed.call(this);
    a = a || {};
    this.m = {
      Pg: t,
      size: a.size || new O(150, 150),
      padding: 5,
      eb: a.isOpen === q ? q : t,
      S1: 4,
      Ga: a.offset,
      anchor: a.anchor,
    };
    this.defaultAnchor = 3;
    this.defaultOffset = new O(0, 0);
    this.br = this.cr = 13;
    this.wc(a.anchor);
    this.Ie(this.m.size);
    this.Hf();
  }
  z.lang.xa(xb, ed, "OverviewMapControl");
  z.extend(xb.prototype, {
    initialize: function (a) {
      this.P = a;
      return this.R;
    },
    wc: function (a) {
      ed.prototype.wc.call(this, a);
    },
    we: function () {
      this.we.Eo = q;
      this.m.eb = !this.m.eb;
      this.R || (this.we.Eo = t);
    },
    Ie: function (a) {
      a instanceof O || (a = new O(150, 150));
      a.width = 0 < a.width ? a.width : 150;
      a.height = 0 < a.height ? a.height : 150;
      this.m.size = a;
    },
    wb: function () {
      return this.m.size;
    },
    eb: function () {
      return this.m.eb;
    },
    Hf: function () {
      var a = this;
      ab.load("control", function () {
        a.Gf();
      });
    },
  });
  function ld(a) {
    ed.call(this);
    a = a || {};
    this.defaultAnchor = fd;
    this.ZV = a.canCheckSize === t ? t : q;
    this.sj = "";
    this.defaultOffset = new O(10, 10);
    this.onChangeBefore = [];
    this.onChangeAfter = [];
    this.onChangeSuccess = [];
    this.m = {
      Pg: t,
      Ga: a.offset || this.defaultOffset,
      anchor: a.anchor || this.defaultAnchor,
      expand: !!a.expand,
    };
    a.onChangeBefore && hb(a.onChangeBefore) && this.onChangeBefore.push(a.onChangeBefore);
    a.onChangeAfter && hb(a.onChangeAfter) && this.onChangeAfter.push(a.onChangeAfter);
    a.onChangeSuccess && hb(a.onChangeSuccess) && this.onChangeSuccess.push(a.onChangeSuccess);
    this.wc(a.anchor);
    this.Hf();
    Va(Wa(5, 3), ["control", "city"]);
  }
  z.lang.xa(ld, ed, "CityListControl");
  z.object.extend(ld.prototype, {
    initialize: function (a) {
      this.P = a;
      return this.R;
    },
    Hf: function () {
      var a = this;
      ab.load(
        "citylistcontrol",
        function () {
          a.Gf();
        },
        q,
      );
    },
  });
  function wb(a) {
    ed.call(this);
    a = a || {};
    this.m = { Pg: t, color: "black", $c: "metric", Ga: a.offset };
    this.defaultAnchor = id;
    this.defaultOffset = new O(81, 18);
    this.wc(a.anchor);
    this.gi = {
      metric: { name: "metric", TK: 1, KM: 1e3, qP: "\u7c73", rP: "\u516c\u91cc" },
      us: { name: "us", TK: 3.2808, KM: 5280, qP: "\u82f1\u5c3a", rP: "\u82f1\u91cc" },
    };
    this.gi[this.m.$c] || (this.m.$c = "metric");
    this.uJ = s;
    this.qB = {};
    this.Hf();
  }
  z.lang.xa(wb, ed, "ScaleControl");
  z.object.extend(wb.prototype, {
    initialize: function (a) {
      this.P = a;
      return this.R;
    },
    el: function (a) {
      this.m.color = a + "";
    },
    t4: function () {
      return this.m.color;
    },
    UF: function (a) {
      this.m.$c = (this.gi[a] && this.gi[a].name) || this.m.$c;
    },
    QY: function () {
      return this.m.$c;
    },
    Hf: function () {
      var a = this;
      ab.load("control", function () {
        a.Gf();
      });
    },
  });
  var md = 0;
  function yb(a) {
    ed.call(this);
    a = a || {};
    this.defaultAnchor = hd;
    this.defaultOffset = new O(10, 10);
    this.m = {
      Pg: t,
      Bh: [Sa, $a, Za, Xa],
      KW: ["B_DIMENSIONAL_MAP", "B_SATELLITE_MAP", "B_NORMAL_MAP"],
      type: a.type || md,
      Ga: a.offset || this.defaultOffset,
      uX: q,
    };
    this.wc(a.anchor);
    "[object Array]" == Object.prototype.toString.call(a.mapTypes) &&
      (this.m.Bh = a.mapTypes.slice(0));
    this.Hf();
  }
  z.lang.xa(yb, ed, "MapTypeControl");
  z.object.extend(yb.prototype, {
    initialize: function (a) {
      this.P = a;
      return this.R;
    },
    iz: function (a) {
      this.P.ro = a;
    },
    Hf: function () {
      var a = this;
      ab.load(
        "control",
        function () {
          a.Gf();
        },
        q,
      );
    },
  });
  function nd(a) {
    ed.call(this);
    a = a || {};
    this.m = { Pg: t, Ga: a.offset, anchor: a.anchor };
    this.gj = t;
    this.Dw = s;
    this.aJ = new od({ Ye: "api" });
    this.bJ = new pd(s, { Ye: "api" });
    this.defaultAnchor = hd;
    this.defaultOffset = new O(10, 10);
    this.wc(a.anchor);
    this.Hf();
    Ya(za);
  }
  z.lang.xa(nd, ed, "PanoramaControl");
  z.extend(nd.prototype, {
    initialize: function (a) {
      this.P = a;
      return this.R;
    },
    Hf: function () {
      var a = this;
      ab.load("control", function () {
        a.Gf();
      });
    },
  });
  function qd(a) {
    z.lang.Ja.call(this);
    this.m = { $a: s, cursor: "default" };
    this.m = z.extend(this.m, a);
    this.Pb = "contextmenu";
    this.P = s;
    this.Ea = [];
    this.Sf = [];
    this.Ke = [];
    this.ox = this.Ns = s;
    this.Vh = t;
    Va(Wa(5, 2), ["control", "menu"]);
    var b = this;
    ab.load("menu", function () {
      b.ob();
    });
  }
  z.lang.xa(qd, z.lang.Ja, "ContextMenu");
  z.object.extend(qd.prototype, {
    za: function (a, b) {
      this.P = a;
      this.Vl = b || s;
    },
    remove: function () {
      this.P = this.Vl = s;
    },
    As: function (a) {
      if (a && !("menuitem" != a.Pb || "" == a.mh || 0 >= a.nj)) {
        for (var b = 0, c = this.Ea.length; b < c; b++) if (this.Ea[b] === a) return;
        this.Ea.push(a);
        this.Sf.push(a);
      }
    },
    removeItem: function (a) {
      if (a && "menuitem" == a.Pb) {
        for (var b = 0, c = this.Ea.length; b < c; b++)
          this.Ea[b] === a && (this.Ea[b].remove(), this.Ea.splice(b, 1), c--);
        b = 0;
        for (c = this.Sf.length; b < c; b++)
          this.Sf[b] === a && (this.Sf[b].remove(), this.Sf.splice(b, 1), c--);
      }
    },
    nC: function () {
      this.Ea.push({ Pb: "divider", $j: this.Ke.length });
      this.Ke.push({ U: s });
    },
    zF: function (a) {
      if (this.Ke[a]) {
        for (var b = 0, c = this.Ea.length; b < c; b++)
          this.Ea[b] &&
            "divider" == this.Ea[b].Pb &&
            this.Ea[b].$j == a &&
            (this.Ea.splice(b, 1), c--),
            this.Ea[b] && "divider" == this.Ea[b].Pb && this.Ea[b].$j > a && this.Ea[b].$j--;
        this.Ke.splice(a, 1);
      }
    },
    hd: u("R"),
    show: function () {
      this.Vh != q && (this.Vh = q);
    },
    aa: function () {
      this.Vh != t && (this.Vh = t);
    },
    e0: function (a) {
      a && (this.m.cursor = a);
    },
    getItem: function (a) {
      return this.Sf[a];
    },
  });
  var rd = L.ta + "menu_zoom_in.png",
    sd = L.ta + "menu_zoom_out.png";
  function td(a, b, c) {
    if (a && hb(b)) {
      z.lang.Ja.call(this);
      this.m = { width: 100, id: "", Vm: "" };
      c = c || {};
      this.m.width = 1 * c.width ? c.width : 100;
      this.m.id = c.id ? c.id : "";
      this.m.Vm = c.iconUrl ? c.iconUrl : "";
      this.mh = a + "";
      this.Sz = b;
      this.P = s;
      this.Pb = "menuitem";
      this.ns = this.Tv = this.R = this.Qh = s;
      this.Th = q;
      var e = this;
      ab.load("menu", function () {
        e.ob();
      });
    }
  }
  z.lang.xa(td, z.lang.Ja, "MenuItem");
  z.object.extend(td.prototype, {
    za: function (a, b) {
      this.P = a;
      this.Qh = b;
    },
    remove: function () {
      this.P = this.Qh = s;
    },
    yu: function (a) {
      a && (this.mh = a + "");
    },
    Xb: function (a) {
      a && (this.m.Vm = a);
    },
    hd: u("R"),
    enable: function () {
      this.Th = q;
    },
    disable: function () {
      this.Th = t;
    },
  });
  function pb(a, b) {
    a && !b && (b = a);
    this.Ne = this.de = this.Te = this.fe = this.pf = this.mf = s;
    a &&
      ((this.pf = new S(a.lng, a.lat)),
      (this.mf = new S(b.lng, b.lat)),
      (this.Te = a.lng),
      (this.fe = a.lat),
      (this.Ne = b.lng),
      (this.de = b.lat));
  }
  z.object.extend(pb.prototype, {
    Gj: function () {
      return !this.pf || !this.mf;
    },
    Vb: function (a) {
      return !(a instanceof pb) || this.Gj() ? t : this.Pd().Vb(a.Pd()) && this.Ce().Vb(a.Ce());
    },
    Pd: u("pf"),
    Ce: u("mf"),
    oW: function (a) {
      return !(a instanceof pb) || this.Gj() || a.Gj()
        ? t
        : a.Te > this.Te && a.Ne < this.Ne && a.fe > this.fe && a.de < this.de;
    },
    Hb: function () {
      return this.Gj() ? s : new S((this.Te + this.Ne) / 2, (this.fe + this.de) / 2);
    },
    Mt: function (a) {
      if (
        !(a instanceof pb) ||
        Math.max(a.Te, a.Ne) < Math.min(this.Te, this.Ne) ||
        Math.min(a.Te, a.Ne) > Math.max(this.Te, this.Ne) ||
        Math.max(a.fe, a.de) < Math.min(this.fe, this.de) ||
        Math.min(a.fe, a.de) > Math.max(this.fe, this.de)
      )
        return s;
      var b = Math.max(this.Te, a.Te),
        c = Math.min(this.Ne, a.Ne),
        e = Math.max(this.fe, a.fe),
        a = Math.min(this.de, a.de);
      return new pb(new S(b, e), new S(c, a));
    },
    Is: function (a) {
      return !(a instanceof S || a instanceof N) || this.Gj()
        ? t
        : a.lng >= this.Te && a.lng <= this.Ne && a.lat >= this.fe && a.lat <= this.de;
    },
    extend: function (a) {
      if (a instanceof S || a instanceof N) {
        var b = a.lng,
          a = a.lat;
        this.pf || (this.pf = new S(0, 0));
        this.mf || (this.mf = new S(0, 0));
        if (!this.Te || this.Te > b) this.pf.lng = this.Te = b;
        if (!this.Ne || this.Ne < b) this.mf.lng = this.Ne = b;
        if (!this.fe || this.fe > a) this.pf.lat = this.fe = a;
        if (!this.de || this.de < a) this.mf.lat = this.de = a;
      }
    },
    nG: function () {
      return this.Gj()
        ? new S(0, 0)
        : new S(Math.abs(this.Ne - this.Te), Math.abs(this.de - this.fe));
    },
  });
  function S(a, b) {
    isNaN(a) && ((a = Wb(a)), (a = isNaN(a) ? 0 : a));
    ib(a) && (a = parseFloat(a));
    isNaN(b) && ((b = Wb(b)), (b = isNaN(b) ? 0 : b));
    ib(b) && (b = parseFloat(b));
    this.lng = a;
    this.lat = b;
  }
  S.KE = function (a) {
    return a && 180 >= a.lng && -180 <= a.lng && 74 >= a.lat && -74 <= a.lat;
  };
  S.prototype.Vb = function (a) {
    return a && this.lat == a.lat && this.lng == a.lng;
  };
  function N(a, b) {
    isNaN(a) && ((a = Wb(a)), (a = isNaN(a) ? 0 : a));
    ib(a) && (a = parseFloat(a));
    isNaN(b) && ((b = Wb(b)), (b = isNaN(b) ? 0 : b));
    ib(b) && (b = parseFloat(b));
    this.lng = a;
    this.lat = b;
    this.Ye = "inner";
  }
  N.KE = function (a) {
    return a && 180 >= a.lng && -180 <= a.lng && 74 >= a.lat && -74 <= a.lat;
  };
  N.prototype.Vb = function (a) {
    return a && this.lat == a.lat && this.lng == a.lng;
  };
  function ud() {}
  ud.prototype.Kg = function () {
    aa("lngLatToPoint\u65b9\u6cd5\u672a\u5b9e\u73b0");
  };
  ud.prototype.Kj = function () {
    aa("pointToLngLat\u65b9\u6cd5\u672a\u5b9e\u73b0");
  };
  function vd() {}
  var ob = {
    VK: function (a, b, c) {
      ab.load(
        "coordtransutils",
        function () {
          ob.CV(a, b, c);
        },
        q,
      );
    },
    UK: function (a, b, c) {
      ab.load(
        "coordtransutils",
        function () {
          ob.BV(a, b, c);
        },
        q,
      );
    },
  };
  function wd() {
    this.Qa = [];
    var a = this;
    ab.load("convertor", function () {
      a.DQ();
    });
  }
  z.xa(wd, z.lang.Ja, "Convertor");
  z.extend(wd.prototype, {
    translate: function (a, b, c, e) {
      this.Qa.push({ method: "translate", arguments: [a, b, c, e] });
    },
  });
  V(wd.prototype, { translate: wd.prototype.translate });
  function U() {}
  U.prototype = new ud();
  z.extend(U, {
    XP: 6370996.81,
    bH: [1.289059486e7, 8362377.87, 5591021, 3481989.83, 1678043.12, 0],
    gv: [86, 60, 45, 30, 15, 0],
    cQ: [
      [
        1.410526172116255e-8, 8.98305509648872e-6, -1.9939833816331, 200.9824383106796,
        -187.2403703815547, 91.6087516669843, -23.38765649603339, 2.57121317296198,
        -0.03801003308653, 1.73379812e7,
      ],
      [
        -7.435856389565537e-9, 8.983055097726239e-6, -0.78625201886289, 96.32687599759846,
        -1.85204757529826, -59.36935905485877, 47.40033549296737, -16.50741931063887,
        2.28786674699375, 1.026014486e7,
      ],
      [
        -3.030883460898826e-8, 8.98305509983578e-6, 0.30071316287616, 59.74293618442277,
        7.357984074871, -25.38371002664745, 13.45380521110908, -3.29883767235584, 0.32710905363475,
        6856817.37,
      ],
      [
        -1.981981304930552e-8, 8.983055099779535e-6, 0.03278182852591, 40.31678527705744,
        0.65659298677277, -4.44255534477492, 0.85341911805263, 0.12923347998204, -0.04625736007561,
        4482777.06,
      ],
      [
        3.09191371068437e-9, 8.983055096812155e-6, 6.995724062e-5, 23.10934304144901,
        -2.3663490511e-4, -0.6321817810242, -0.00663494467273, 0.03430082397953, -0.00466043876332,
        2555164.4,
      ],
      [
        2.890871144776878e-9, 8.983055095805407e-6, -3.068298e-8, 7.47137025468032, -3.53937994e-6,
        -0.02145144861037, -1.234426596e-5, 1.0322952773e-4, -3.23890364e-6, 826088.5,
      ],
    ],
    ZG: [
      [
        -0.0015702102444, 111320.7020616939, 1704480524535203, -10338987376042340,
        26112667856603880, -35149669176653700, 26595700718403920, -10725012454188240,
        1800819912950474, 82.5,
      ],
      [
        8.277824516172526e-4, 111320.7020463578, 6.477955746671607e8, -4.082003173641316e9,
        1.077490566351142e10, -1.517187553151559e10, 1.205306533862167e10, -5.124939663577472e9,
        9.133119359512032e8, 67.5,
      ],
      [
        0.00337398766765, 111320.7020202162, 4481351.045890365, -2.339375119931662e7,
        7.968221547186455e7, -1.159649932797253e8, 9.723671115602145e7, -4.366194633752821e7,
        8477230.501135234, 52.5,
      ],
      [
        0.00220636496208, 111320.7020209128, 51751.86112841131, 3796837.749470245,
        992013.7397791013, -1221952.21711287, 1340652.697009075, -620943.6990984312,
        144416.9293806241, 37.5,
      ],
      [
        -3.441963504368392e-4, 111320.7020576856, 278.2353980772752, 2485758.690035394,
        6070.750963243378, 54821.18345352118, 9540.606633304236, -2710.55326746645,
        1405.483844121726, 22.5,
      ],
      [
        -3.218135878613132e-4, 111320.7020701615, 0.00369383431289, 823725.6402795718,
        0.46104986909093, 2351.343141331292, 1.58060784298199, 8.77738589078284, 0.37238884252424,
        7.45,
      ],
    ],
    z4: function (a, b) {
      if (!a || !b) return 0;
      var c,
        e,
        a = this.Zb(a);
      if (!a) return 0;
      c = this.nl(a.lng);
      e = this.nl(a.lat);
      b = this.Zb(b);
      return !b ? 0 : this.Od(c, this.nl(b.lng), e, this.nl(b.lat));
    },
    Nk: function (a, b) {
      if (!a || !b) return 0;
      a.lng = this.gE(a.lng, -180, 180);
      a.lat = this.mE(a.lat, -80, 84);
      b.lng = this.gE(b.lng, -180, 180);
      b.lat = this.mE(b.lat, -80, 84);
      return this.Od(this.nl(a.lng), this.nl(b.lng), this.nl(a.lat), this.nl(b.lat));
    },
    Zb: function (a) {
      if (a === s || a === l) return new N(0, 0);
      var b, c;
      b = new N(Math.abs(a.lng), Math.abs(a.lat));
      for (var e = 0; e < this.bH.length; e++)
        if (b.lat >= this.bH[e]) {
          c = this.cQ[e];
          break;
        }
      a = this.WK(a, c);
      return (a = new N(a.lng, a.lat));
    },
    Sa: function (a) {
      if (a === s || a === l || 180 < a.lng || -180 > a.lng || 90 < a.lat || -90 > a.lat)
        return new N(0, 0);
      var b, c;
      a.lng = this.gE(a.lng, -180, 180);
      a.lat = this.mE(a.lat, -85, 85);
      b = new N(a.lng, a.lat);
      for (var e = 0; e < this.gv.length; e++)
        if (b.lat >= this.gv[e]) {
          c = this.ZG[e];
          break;
        }
      if (!c)
        for (e = 0; e < this.gv.length; e++)
          if (b.lat <= -this.gv[e]) {
            c = this.ZG[e];
            break;
          }
      a = this.WK(a, c);
      return (a = new N(a.lng, a.lat));
    },
    WK: function (a, b) {
      if (a && b) {
        var c = b[0] + b[1] * Math.abs(a.lng),
          e = Math.abs(a.lat) / b[9],
          e =
            b[2] +
            b[3] * e +
            b[4] * e * e +
            b[5] * e * e * e +
            b[6] * e * e * e * e +
            b[7] * e * e * e * e * e +
            b[8] * e * e * e * e * e * e,
          c = c * (0 > a.lng ? -1 : 1),
          e = e * (0 > a.lat ? -1 : 1);
        return new N(c, e);
      }
    },
    Od: function (a, b, c, e) {
      return (
        this.XP * Math.acos(Math.sin(c) * Math.sin(e) + Math.cos(c) * Math.cos(e) * Math.cos(b - a))
      );
    },
    nl: function (a) {
      return (Math.PI * a) / 180;
    },
    e7: function (a) {
      return (180 * a) / Math.PI;
    },
    mE: function (a, b, c) {
      b != s && (a = Math.max(a, b));
      c != s && (a = Math.min(a, c));
      return a;
    },
    gE: function (a, b, c) {
      for (; a > c; ) a -= c - b;
      for (; a < b; ) a += c - b;
      return a;
    },
  });
  z.extend(U.prototype, {
    zi: function (a) {
      return U.Sa(a);
    },
    Kg: function (a) {
      a = U.Sa(a);
      return new T(a.lng, a.lat);
    },
    Dh: function (a) {
      return U.Zb(a);
    },
    Kj: function (a) {
      a = new N(a.x, a.y);
      a = U.Zb(a);
      return new S(a.lng, a.lat);
    },
    vc: function (a, b, c, e, f) {
      if (a)
        return (
          (a = this.zi(a, f)),
          (b = this.Wb(b)),
          new T(
            Math.round((a.lng - c.lng) / b + e.width / 2),
            Math.round((c.lat - a.lat) / b + e.height / 2),
          )
        );
    },
    QZ: function (a, b, c, e) {
      if (a)
        return (
          (b = this.Wb(b)),
          new T(
            Math.round((a.lng - c.lng) / b + e.width / 2),
            Math.round((c.lat - a.lat) / b + e.height / 2),
          )
        );
    },
    cc: function (a, b, c, e, f) {
      if (a)
        return (
          (b = this.Wb(b)),
          this.Dh(new N(c.lng + b * (a.x - e.width / 2), c.lat - b * (a.y - e.height / 2)), f)
        );
    },
    Jy: function (a, b, c, e) {
      if (a)
        return (
          (b = this.Wb(b)), new N(c.lng + b * (a.x - e.width / 2), c.lat - b * (a.y - e.height / 2))
        );
    },
    Wb: function (a) {
      return Math.pow(2, 18 - a);
    },
    BO: ca("Oa"),
  });
  function rb() {
    this.sj = "bj";
  }
  rb.prototype = new U();
  z.extend(rb.prototype, {
    zi: function (a, b) {
      return this.oR(b, U.Sa(a));
    },
    Dh: function (a, b) {
      return U.Zb(this.pR(b, a));
    },
    lngLatToPointFor3D: function (a, b) {
      var c = this,
        e = U.Sa(a);
      ab.load(
        "coordtrans",
        function () {
          var a = vd.jE(c.sj || "bj", e),
            a = new T(a.x, a.y);
          b && b(a);
        },
        q,
      );
    },
    pointToLngLatFor3D: function (a, b) {
      var c = this,
        e = new S(a.x, a.y);
      ab.load(
        "coordtrans",
        function () {
          var a = vd.hE(c.sj || "bj", e),
            a = new S(a.lng, a.lat),
            a = U.Zb(a);
          b && b(a);
        },
        q,
      );
    },
    oR: function (a, b) {
      if (ab.qb("coordtrans").Se == ab.Sj.Kq) {
        var c = vd.jE(a || "bj", b);
        return new S(c.x, c.y);
      }
      ab.load("coordtrans", ba());
      return new S(0, 0);
    },
    pR: function (a, b) {
      if (ab.qb("coordtrans").Se == ab.Sj.Kq) {
        var c = vd.hE(a || "bj", b);
        return new S(c.lng, c.lat);
      }
      ab.load("coordtrans", ba());
      return new S(0, 0);
    },
    Wb: function (a) {
      return Math.pow(2, 20 - a);
    },
    BO: ca("Oa"),
  });
  function xd() {
    this.Pb = "overlay";
  }
  z.lang.xa(xd, z.lang.Ja, "Overlay");
  xd.Sk = function (a) {
    a *= 1;
    return !a ? 0 : (1e5 * (90 - a)) << 1;
  };
  z.extend(xd.prototype, {
    Me: function (a) {
      if (!this.ca && hb(this.initialize) && (this.ca = this.initialize(a)))
        this.ca.style.WebkitUserSelect = "none";
      this.draw();
    },
    initialize: function () {
      aa("initialize\u65b9\u6cd5\u672a\u5b9e\u73b0");
    },
    draw: function () {
      aa("draw\u65b9\u6cd5\u672a\u5b9e\u73b0");
    },
    remove: function () {
      this.ca && this.ca.parentNode && this.ca.parentNode.removeChild(this.ca);
      this.ca = s;
      this.dispatchEvent(new R("onremove"));
    },
    aa: function () {
      this.ca && z.U.aa(this.ca);
    },
    show: function () {
      this.ca && z.U.show(this.ca);
    },
    Oc: function () {
      return !this.ca || "none" == this.ca.style.display || "hidden" == this.ca.style.visibility
        ? t
        : q;
    },
  });
  C.ff(function (a) {
    function b(a, b) {
      var c = I("div"),
        i = c.style;
      i.position = "absolute";
      i.top = i.left = i.width = i.height = "0";
      i.zIndex = b;
      a.appendChild(c);
      return c;
    }
    var c = a.ba;
    c.Wc = a.Wc = b(a.platform, 200);
    a.ee.ND = b(c.Wc, 800);
    a.ee.aF = b(c.Wc, 700);
    a.ee.HL = b(c.Wc, 600);
    a.ee.TE = b(c.Wc, 500);
    a.ee.vN = b(c.Wc, 400);
    a.ee.wN = b(c.Wc, 300);
    a.ee.CP = b(c.Wc, 201);
    a.ee.$t = b(c.Wc, 200);
  });
  function qb() {
    z.lang.Ja.call(this);
    xd.call(this);
    this.map = s;
    this.Va = q;
    this.Fb = s;
    this.NH = 0;
  }
  z.lang.xa(qb, xd, "OverlayInternal");
  z.extend(qb.prototype, {
    initialize: function (a) {
      this.map = a;
      z.lang.Ja.call(this, this.da);
      return s;
    },
    Lx: u("map"),
    draw: ba(),
    Uj: ba(),
    remove: function () {
      this.map = s;
      z.lang.sx(this.da);
      xd.prototype.remove.call(this);
    },
    aa: function () {
      this.Va !== t && (this.Va = t);
    },
    show: function () {
      this.Va !== q && (this.Va = q);
    },
    Oc: function () {
      return !this.ca ? t : !!this.Va;
    },
    Ta: u("ca"),
    AO: function (a) {
      var a = a || {},
        b;
      for (b in a) this.K[b] = a[b];
    },
    wq: ca("zIndex"),
    xj: function () {
      this.K.xj = q;
    },
    UW: function () {
      this.K.xj = t;
    },
    nm: ca("sg"),
    iq: function () {
      this.sg = s;
    },
  });
  function yd() {
    this.map = s;
    this.ua = {};
    this.Je = [];
  }
  C.ff(function (a) {
    var b = new yd();
    b.map = a;
    a.ua = b.ua;
    a.Je = b.Je;
    a.addEventListener("load", function (a) {
      b.draw(a);
    });
    a.addEventListener("moveend", function (a) {
      b.draw(a);
    });
    (z.ga.oa && 8 > z.ga.oa) || "BackCompat" === document.compatMode
      ? a.addEventListener("zoomend", function (a) {
          setTimeout(function () {
            b.draw(a);
          }, 20);
        })
      : a.addEventListener("zoomend", function (a) {
          b.draw(a);
        });
    a.addEventListener("maptypechange", function (a) {
      b.draw(a);
    });
    a.addEventListener("addoverlay", function (a) {
      a = a.target;
      if (a instanceof qb) b.ua[a.da] || (b.ua[a.da] = a);
      else {
        for (var e = t, f = 0, g = b.Je.length; f < g; f++)
          if (b.Je[f] === a) {
            e = q;
            break;
          }
        e || b.Je.push(a);
      }
    });
    a.addEventListener("removeoverlay", function (a) {
      a = a.target;
      if (a instanceof qb) delete b.ua[a.da];
      else
        for (var e = 0, f = b.Je.length; e < f; e++)
          if (b.Je[e] === a) {
            b.Je.splice(e, 1);
            break;
          }
    });
    a.addEventListener("clearoverlays", function () {
      this.Mc();
      for (var a in b.ua) b.ua[a].K.xj && (b.ua[a].remove(), delete b.ua[a]);
      a = 0;
      for (var e = b.Je.length; a < e; a++)
        b.Je[a].enableMassClear !== t &&
          (b.Je[a].remove(), (b.Je[a] = s), b.Je.splice(a, 1), a--, e--);
    });
    a.addEventListener("infowindowopen", function () {
      var a = this.Fb;
      a && (z.U.aa(a.Cc), z.U.aa(a.dc));
    });
    a.addEventListener("movestart", function () {
      this.wh() && this.wh().BJ();
    });
    a.addEventListener("moveend", function () {
      this.wh() && this.wh().pJ();
    });
  });
  yd.prototype.draw = function (a) {
    if (C.Nq) {
      var b = C.Nq.ut(this.map);
      "canvas" === b.Pb && b.canvas && b.jR(b.canvas.getContext("2d"));
    }
    for (var c in this.ua) this.ua[c].draw(a);
    z.oc.Rb(this.Je, function (a) {
      a.draw();
    });
    this.map.ba.xb && this.map.ba.xb.va();
    C.Nq && b.QF();
  };
  function zd(a) {
    qb.call(this);
    a = a || {};
    this.K = {
      strokeColor: a.strokeColor || "#3a6bdb",
      tc: a.strokeWeight || 5,
      Ad: a.strokeOpacity || 0.65,
      strokeStyle: a.strokeStyle || "solid",
      xj: a.enableMassClear === t ? t : q,
      Qk: s,
      Nm: s,
      Ae: a.enableEditing === q ? q : t,
      AN: 5,
      t1: t,
      qf: a.enableClicking === t ? t : q,
      wi: a.icons && 0 < a.icons.length ? a.icons : s,
      OX: a.geodesic === q ? q : t,
      XE: a.linkRight === q ? q : t,
    };
    0 >= this.K.tc && (this.K.tc = 5);
    if (0 > this.K.Ad || 1 < this.K.Ad) this.K.Ad = 0.65;
    if (0 > this.K.Dg || 1 < this.K.Dg) this.K.Dg = 0.65;
    "solid" != this.K.strokeStyle &&
      "dashed" != this.K.strokeStyle &&
      (this.K.strokeStyle = "solid");
    this.ca = s;
    this.ov = new pb(0, 0);
    this.nf = [];
    this.uc = [];
    this.Ya = {};
  }
  z.lang.xa(zd, qb, "Graph");
  zd.Hx = function (a) {
    var b = [];
    if (!a) return b;
    ib(a) &&
      z.oc.Rb(a.split(";"), function (a) {
        a = a.split(",");
        b.push(new S(a[0], a[1]));
      });
    "[object Array]" == Object.prototype.toString.apply(a) && 0 < a.length && (b = a);
    return b;
  };
  zd.mF = [0.09, 0.005, 1.0e-4, 1.0e-5];
  z.extend(zd.prototype, {
    initialize: function (a) {
      this.map = a;
      return s;
    },
    draw: ba(),
    fs: function (a) {
      this.nf.length = 0;
      this.ja = zd.Hx(a).slice(0);
      this.Nh();
    },
    Ud: function (a) {
      this.fs(a);
    },
    Nh: function () {
      if (this.ja) {
        var a = this;
        a.ov = new pb();
        z.oc.Rb(this.ja, function (b) {
          a.ov.extend(b);
        });
      }
    },
    af: u("ja"),
    zn: function (a, b) {
      b && this.ja[a] && ((this.nf.length = 0), (this.ja[a] = new S(b.lng, b.lat)), this.Nh());
    },
    setStrokeColor: function (a) {
      this.K.strokeColor = a;
    },
    HY: function () {
      return this.K.strokeColor;
    },
    vq: function (a) {
      0 < a && (this.K.tc = a);
    },
    lM: function () {
      return this.K.tc;
    },
    tq: function (a) {
      a == l || 1 < a || 0 > a || (this.K.Ad = a);
    },
    IY: function () {
      return this.K.Ad;
    },
    su: function (a) {
      1 < a || 0 > a || (this.K.Dg = a);
    },
    cY: function () {
      return this.K.Dg;
    },
    uq: function (a) {
      ("solid" != a && "dashed" != a) || (this.K.strokeStyle = a);
    },
    kM: function () {
      return this.K.strokeStyle;
    },
    setFillColor: function (a) {
      this.K.fillColor = a || "";
    },
    bY: function () {
      return this.K.fillColor;
    },
    Nd: u("ov"),
    remove: function () {
      this.map && this.map.removeEventListener("onmousemove", this.Qv);
      qb.prototype.remove.call(this);
      this.nf.length = 0;
    },
    Ae: function () {
      if (!(2 > this.ja.length)) {
        this.K.Ae = q;
        var a = this;
        ab.load(
          "poly",
          function () {
            a.Ak();
          },
          q,
        );
      }
    },
    TW: function () {
      this.K.Ae = t;
      var a = this;
      ab.load(
        "poly",
        function () {
          a.li();
        },
        q,
      );
    },
    ZX: function () {
      return this.K.Ae;
    },
    fY: function () {
      for (var a = [], b = 0; b < this.ja.length - 1; b++)
        var c = this.WV(this.ja[b], this.ja[b + 1]), a = a.concat(c);
      return (a = a.concat(this.ja[this.ja.length - 1]));
    },
    WV: function (a, b) {
      if (a.Vb(b)) return [a];
      var c = U.Od(ac(a.lng), ac(a.lat), ac(b.lng), ac(b.lat)),
        c = U.Nk(a, b);
      if (25e4 > c) return [a];
      var e = [],
        c = Math.round(c / 15e4),
        f = this.EK(a, b);
      e.push(a);
      for (var g = 0; g < c; g++) {
        var i = this.FK(a, b, g / c, f);
        e.push(i);
      }
      e.push(b);
      return e;
    },
    FK: function (a, b, c, e) {
      var f = ac(a.lat),
        g = ac(b.lat),
        a = ac(a.lng),
        i = ac(b.lng),
        b = Math.sin((1 - c) * e) / Math.sin(e),
        c = Math.sin(c * e) / Math.sin(e),
        e = b * Math.cos(f) * Math.cos(a) + c * Math.cos(g) * Math.cos(i),
        a = b * Math.cos(f) * Math.sin(a) + c * Math.cos(g) * Math.sin(i);
      return new S(
        180 * (Math.atan2(a, e) / Math.PI),
        180 *
          (Math.atan2(
            b * Math.sin(f) + c * Math.sin(g),
            Math.sqrt(Math.pow(e, 2) + Math.pow(a, 2)),
          ) /
            Math.PI),
      );
    },
    EK: function (a, b) {
      var c = ac(a.lat),
        e = ac(b.lat);
      return Math.acos(
        Math.sin(c) * Math.sin(e) +
          Math.cos(c) * Math.cos(e) * Math.cos(Math.abs(ac(b.lng) - ac(a.lng))),
      );
    },
  });
  function Ad(a) {
    qb.call(this);
    this.ca = this.map = s;
    this.K = {
      width: 0,
      height: 0,
      Ga: new O(0, 0),
      opacity: 1,
      background: "transparent",
      py: 1,
      iN: "#000",
      HZ: "solid",
      point: s,
    };
    this.AO(a);
    this.point = this.K.point;
  }
  z.lang.xa(Ad, qb, "Division");
  z.extend(Ad.prototype, {
    Uj: function () {
      var a = this.K,
        b = this.content,
        c = ['<div class="BMap_Division" style="position:absolute;'];
      c.push("width:" + a.width + "px;display:block;");
      c.push("overflow:hidden;");
      "none" != a.borderColor && c.push("border:" + a.py + "px " + a.HZ + " " + a.iN + ";");
      c.push("opacity:" + a.opacity + "; filter:(opacity=" + 100 * a.opacity + ")");
      c.push("background:" + a.background + ";");
      c.push('z-index:60;">');
      c.push(b);
      c.push("</div>");
      this.ca = Mb(this.map.$f().aF, c.join(""));
    },
    initialize: function (a) {
      this.map = a;
      this.Uj();
      this.ca &&
        ((a = M() ? "touchstart" : "mousedown"),
        z.V(this.ca, a, function (a) {
          oa(a);
        }));
      return this.ca;
    },
    draw: function () {
      var a = this.map.ef(this.K.point);
      this.K.Ga = new O(
        -Math.round(this.K.width / 2) - Math.round(this.K.py),
        -Math.round(this.K.height / 2) - Math.round(this.K.py),
      );
      this.ca.style.left = a.x + this.K.Ga.width + "px";
      this.ca.style.top = a.y + this.K.Ga.height + "px";
    },
    ma: function () {
      return this.K.point;
    },
    K2: function () {
      return this.map.Bo(this.ma());
    },
    va: function (a) {
      this.K.point = a;
      this.draw();
    },
    f0: function (a, b) {
      this.K.width = Math.round(a);
      this.K.height = Math.round(b);
      this.ca &&
        ((this.ca.style.width = this.K.width + "px"),
        (this.ca.style.height = this.K.height + "px"),
        this.draw());
    },
  });
  function Bd(a, b, c) {
    a &&
      b &&
      ((this.imageUrl = a),
      (this.size = b),
      (a = new O(Math.floor(b.width / 2), Math.floor(b.height / 2))),
      (c = c || {}),
      (a = c.anchor || a),
      (b = c.imageOffset || new O(0, 0)),
      (this.imageSize = c.imageSize),
      (this.anchor = a),
      (this.imageOffset = b),
      (this.infoWindowAnchor = c.infoWindowAnchor || this.anchor),
      (this.printImageUrl = c.printImageUrl || ""));
  }
  z.extend(Bd.prototype, {
    CO: function (a) {
      a && (this.imageUrl = a);
    },
    w0: function (a) {
      a && (this.printImageUrl = a);
    },
    Ie: function (a) {
      a && (this.size = new O(a.width, a.height));
    },
    wc: function (a) {
      a && (this.anchor = new O(a.width, a.height));
    },
    tu: function (a) {
      a && (this.imageOffset = new O(a.width, a.height));
    },
    k0: function (a) {
      a && (this.infoWindowAnchor = new O(a.width, a.height));
    },
    h0: function (a) {
      a && (this.imageSize = new O(a.width, a.height));
    },
    toString: ea("Icon"),
  });
  function Cd(a, b) {
    if (a) {
      b = b || {};
      this.style = {
        anchor: b.anchor || new O(0, 0),
        fillColor: b.fillColor || "#000",
        Dg: b.fillOpacity || 0,
        scale: b.scale || 1,
        rotation: b.rotation || 0,
        strokeColor: b.strokeColor || "#000",
        Ad: b.strokeOpacity || 1,
        tc: b.strokeWeight,
      };
      this.Pb = "number" === typeof a ? a : "UserDefined";
      this.Wi = this.style.anchor;
      this.Qr = new O(0, 0);
      this.anchor = s;
      this.DB = a;
      var c = this;
      ab.load(
        "symbol",
        function () {
          c.$n();
        },
        q,
      );
    }
  }
  z.extend(Cd.prototype, {
    setPath: ca("DB"),
    setAnchor: function (a) {
      this.Wi = this.style.anchor = a;
    },
    setRotation: function (a) {
      this.style.rotation = a;
    },
    setScale: function (a) {
      this.style.scale = a;
    },
    setStrokeWeight: function (a) {
      this.style.tc = a;
    },
    setStrokeColor: function (a) {
      a = z.Gs.PC(a, this.style.Ad);
      this.style.strokeColor = a;
    },
    setStrokeOpacity: function (a) {
      this.style.Ad = a;
    },
    setFillOpacity: function (a) {
      this.style.Dg = a;
    },
    setFillColor: function (a) {
      this.style.fillColor = a;
    },
  });
  function Dd(a, b, c, e) {
    a &&
      ((this.jw = {}),
      (this.FL = e ? !!e : t),
      (this.bd = []),
      (this.O0 = a instanceof Cd ? a : s),
      (this.gJ = b === l ? q : !!(b.indexOf("%") + 1)),
      (this.pk = isNaN(parseFloat(b)) ? 1 : this.gJ ? parseFloat(b) / 100 : parseFloat(b)),
      (this.hJ = !!(c.indexOf("%") + 1)),
      (this.repeat = c != l ? (this.hJ ? parseFloat(c) / 100 : parseFloat(c)) : 0));
  }
  function Ed(a, b) {
    z.lang.Ja.call(this);
    this.content = a;
    this.map = s;
    b = b || {};
    this.K = {
      width: b.width || 0,
      height: b.height || 0,
      maxWidth: b.maxWidth || 730,
      Ga: b.offset || new O(0, 0),
      title: b.title || "",
      cF: b.maxContent || "",
      uh: b.enableMaximize || t,
      ft: b.enableAutoPan === t ? t : q,
      vD: b.enableCloseOnClick === t ? t : q,
      margin: b.margin || [10, 10, 40, 10],
      LC: b.collisions || [
        [10, 10],
        [10, 10],
        [10, 10],
        [10, 10],
      ],
      dZ: t,
      f_: b.onClosing || ea(q),
      xL: t,
      AD: b.enableParano === q ? q : t,
      message: b.message,
      DD: b.enableSearchTool === q ? q : t,
      Xx: b.headerContent || "",
      wD: b.enableContentScroll || t,
    };
    if (0 != this.K.width && (220 > this.K.width && (this.K.width = 220), 730 < this.K.width))
      this.K.width = 730;
    if (0 != this.K.height && (60 > this.K.height && (this.K.height = 60), 650 < this.K.height))
      this.K.height = 650;
    if (
      0 != this.K.maxWidth &&
      (220 > this.K.maxWidth && (this.K.maxWidth = 220), 730 < this.K.maxWidth)
    )
      this.K.maxWidth = 730;
    this.ne = t;
    this.Ri = L.ta;
    this.yb = s;
    Va(Wa(2, 10), ["overlay", "infowindow"]);
    var c = this;
    ab.load("infowindow", function () {
      c.ob();
    });
  }
  z.lang.xa(Ed, z.lang.Ja, "InfoWindow");
  z.extend(Ed.prototype, {
    setWidth: function (a) {
      (!a && 0 != a) ||
        isNaN(a) ||
        0 > a ||
        (0 != a && (220 > a && (a = 220), 730 < a && (a = 730)), (this.K.width = a));
    },
    setHeight: function (a) {
      (!a && 0 != a) ||
        isNaN(a) ||
        0 > a ||
        (0 != a && (60 > a && (a = 60), 650 < a && (a = 650)), (this.K.height = a));
    },
    GO: function (a) {
      (!a && 0 != a) ||
        isNaN(a) ||
        0 > a ||
        (0 != a && (220 > a && (a = 220), 730 < a && (a = 730)), (this.K.maxWidth = a));
    },
    Hc: function (a) {
      this.K.title = a;
    },
    getTitle: function () {
      return this.K.title;
    },
    Qc: ca("content"),
    Mk: u("content"),
    vu: function (a) {
      this.K.cF = a + "";
    },
    se: ba(),
    ft: function () {
      this.K.ft = q;
    },
    disableAutoPan: function () {
      this.K.ft = t;
    },
    enableCloseOnClick: function () {
      this.K.vD = q;
    },
    disableCloseOnClick: function () {
      this.K.vD = t;
    },
    uh: function () {
      this.K.uh = q;
    },
    ux: function () {
      this.K.uh = t;
    },
    show: function () {
      this.Va = q;
    },
    aa: function () {
      this.Va = t;
    },
    close: function () {
      this.aa();
    },
    vy: function () {
      this.ne = q;
    },
    restore: function () {
      this.ne = t;
    },
    Oc: function () {
      return this.eb();
    },
    eb: ea(t),
    ma: function () {
      if (this.yb && this.yb.ma) return this.yb.ma();
    },
    zj: function () {
      return this.K.Ga;
    },
  });
  Ra.prototype.Vc = function (a, b) {
    if (a instanceof Ed && (b instanceof S || b instanceof N)) {
      var c = this.ba;
      c.Zm
        ? c.Zm.va(b)
        : ((c.Zm = new Fd(b, {
            icon: new Bd(L.ta + "blank.gif", { width: 1, height: 1 }),
            offset: new O(0, 0),
            clickable: t,
          })),
          (c.Zm.jS = 1));
      this.Ra(c.Zm);
      c.Zm.Vc(a);
    }
  };
  Ra.prototype.Mc = function () {
    var a = this.ba.xb || this.ba.Kl;
    a && a.yb && a.yb.Mc();
  };
  qb.prototype.Vc = function (a) {
    this.map &&
      (this.map.Mc(), (a.Va = q), (this.map.ba.Kl = a), (a.yb = this), z.lang.Ja.call(a, a.da));
  };
  qb.prototype.Mc = function () {
    this.map &&
      this.map.ba.Kl &&
      ((this.map.ba.Kl.Va = t), z.lang.sx(this.map.ba.Kl.da), (this.map.ba.Kl = s));
  };
  function Gd(a, b) {
    qb.call(this);
    this.content = a;
    this.ca = this.map = s;
    b = b || {};
    this.K = {
      width: 0,
      Ga: b.offset || new O(0, 0),
      Aq: {
        backgroundColor: "#fff",
        border: "1px solid #f00",
        padding: "1px",
        whiteSpace: "nowrap",
        font: "12px " + L.fontFamily,
        zIndex: "80",
        MozUserSelect: "none",
      },
      position: b.position || s,
      xj: b.enableMassClear === t ? t : q,
      qf: q,
    };
    0 > this.K.width && (this.K.width = 0);
    Sb(b.enableClicking) && (this.K.qf = b.enableClicking);
    this.point = this.K.position;
    Va(Wa(2, 6), ["overlay", "dom_lable"]);
    var c = this;
    ab.load("marker", function () {
      c.ob();
    });
  }
  z.lang.xa(Gd, qb, "Label");
  z.extend(Gd.prototype, {
    ma: function () {
      return this.vo ? this.vo.ma() : this.map ? nb(this.point, this.map.M.Oa) : this.point;
    },
    hk: function () {
      return this.vo ? this.vo.hk() : this.point;
    },
    va: function (a) {
      if ((a instanceof S || a instanceof N) && !this.Mx())
        this.point = this.K.position = new S(a.lng, a.lat);
    },
    Qc: ca("content"),
    PF: function (a) {
      0 <= a && 1 >= a && (this.K.opacity = a);
    },
    Td: function (a) {
      a instanceof O && (this.K.Ga = new O(a.width, a.height));
    },
    zj: function () {
      return this.K.Ga;
    },
    Vd: function (a) {
      a = a || {};
      this.K.Aq = z.extend(this.K.Aq, a);
    },
    Ki: function (a) {
      return this.Vd(a);
    },
    Hc: function (a) {
      this.K.title = a || "";
    },
    getTitle: function () {
      return this.K.title;
    },
    FO: function (a) {
      this.point = (this.vo = a) ? (this.K.position = a.hk()) : (this.K.position = s);
    },
    Mx: function () {
      return this.vo || s;
    },
    Mk: u("content"),
  });
  function Hd(a, b) {
    if (0 !== arguments.length) {
      qb.apply(this, arguments);
      b = b || {};
      this.K = {
        hb: a,
        opacity: b.opacity || 1,
        Op: b.imageURL || "",
        Ws: b.displayOnMinLevel || 1,
        xj: b.enableMassClear === t ? t : q,
        Vs: b.displayOnMaxLevel || 19,
        I0: b.stretch || t,
      };
      0 === b.opacity && (this.K.opacity = 0);
      Va(Wa(2, 8), ["overlay", "ground_box"]);
      var c = this;
      ab.load("groundoverlay", function () {
        c.ob();
      });
    }
  }
  z.lang.xa(Hd, qb, "GroundOverlay");
  z.extend(Hd.prototype, {
    setBounds: function (a) {
      this.K.hb = a;
    },
    getBounds: function () {
      return this.K.hb;
    },
    setOpacity: function (a) {
      this.K.opacity = a;
    },
    getOpacity: function () {
      return this.K.opacity;
    },
    setImageURL: function (a) {
      this.K.Op = a;
    },
    getImageURL: function () {
      return this.K.Op;
    },
    setDisplayOnMinLevel: function (a) {
      this.K.Ws = a;
    },
    getDisplayOnMinLevel: function () {
      return this.K.Ws;
    },
    setDisplayOnMaxLevel: function (a) {
      this.K.Vs = a;
    },
    getDisplayOnMaxLevel: function () {
      return this.K.Vs;
    },
  });
  var Id = 3,
    Jd = 4;
  function Kd() {
    var a = document.createElement("canvas");
    return !(!a.getContext || !a.getContext("2d"));
  }
  function Ld(a, b) {
    var c = this;
    Kd() &&
      (a === l && aa(Error("\u6ca1\u6709\u4f20\u5165points\u6570\u636e")),
      "[object Array]" !== Object.prototype.toString.call(a) &&
        aa(Error("points\u6570\u636e\u4e0d\u662f\u6570\u7ec4")),
      (b = b || {}),
      qb.apply(c, arguments),
      (c.ia = { ja: a }),
      (c.K = { shape: b.shape || Id, size: b.size || Jd, color: b.color || "#fa937e", xj: q }),
      (this.AB = []),
      (this.ve = []),
      ab.load("pointcollection", function () {
        for (var a = 0, b; (b = c.AB[a]); a++) c[b.method].apply(c, b.arguments);
        for (a = 0; (b = c.ve[a]); a++) c[b.method].apply(c, b.arguments);
      }));
  }
  z.lang.xa(Ld, qb, "PointCollection");
  z.extend(Ld.prototype, {
    initialize: function (a) {
      this.AB && this.AB.push({ method: "initialize", arguments: arguments });
    },
    setPoints: function (a) {
      this.ve && this.ve.push({ method: "setPoints", arguments: arguments });
    },
    setStyles: function (a) {
      this.ve && this.ve.push({ method: "setStyles", arguments: arguments });
    },
    clear: function () {
      this.ve && this.ve.push({ method: "clear", arguments: arguments });
    },
    remove: function () {
      this.ve && this.ve.push({ method: "remove", arguments: arguments });
    },
  });
  var Md = new Bd(L.ta + "marker_red_sprite.png", new O(19, 25), {
      anchor: new O(10, 25),
      infoWindowAnchor: new O(10, 0),
    }),
    Nd = new Bd(L.ta + "marker_red_sprite.png", new O(20, 11), {
      anchor: new O(6, 11),
      imageOffset: new O(-19, -13),
    });
  function Fd(a, b) {
    qb.call(this);
    b = b || {};
    this.point = a;
    this.Oa = (this.Yq = this.map = s) ? this.map.M.Oa : 5;
    this.K = {
      Ga: b.offset || new O(0, 0),
      De: b.icon || Md,
      gl: Nd,
      title: b.title || "",
      label: s,
      zK: b.baseZIndex || 0,
      qf: q,
      I7: t,
      PE: t,
      xj: b.enableMassClear === t ? t : q,
      jc: t,
      jO: b.raiseOnDrag === q ? q : t,
      qO: t,
      Ld: b.draggingCursor || L.Ld,
      rotation: b.rotation || 0,
    };
    b.icon && !b.shadow && (this.K.gl = s);
    b.enableDragging && (this.K.jc = b.enableDragging);
    Sb(b.enableClicking) && (this.K.qf = b.enableClicking);
    Va(Wa(2, 1), ["overlay", "marker"]);
    var c = this;
    ab.load("marker", function () {
      c.ob();
    });
  }
  Fd.jv = xd.Sk(-90) + 1e6;
  Fd.TG = Fd.jv + 1e6;
  z.lang.xa(Fd, qb, "Marker");
  z.extend(Fd.prototype, {
    Xb: function (a) {
      if (a instanceof Bd || a instanceof Cd) this.K.De = a;
    },
    Cp: function () {
      return this.K.De;
    },
    $y: function (a) {
      a instanceof Bd && (this.K.gl = a);
    },
    getShadow: function () {
      return this.K.gl;
    },
    Lj: function (a) {
      this.K.label = a || s;
    },
    vt: function () {
      return this.K.label;
    },
    jc: function () {
      this.K.jc = q;
    },
    Us: function () {
      this.K.jc = t;
    },
    hk: u("point"),
    ma: function () {
      return this.point instanceof S || this.point instanceof N
        ? this.map
          ? nb(this.point, this.map.M.Oa)
          : new S(this.point.lng, this.point.lat)
        : this.point;
    },
    va: function (a) {
      if (a instanceof S || a instanceof N)
        this.point = this.map ? fb(a, this.map.M.Oa) : new N(a.lng, a.lat);
    },
    Li: function (a, b) {
      this.K.PE = !!a;
      a && (this.qH = b || 0);
    },
    Hc: function (a) {
      this.K.title = a + "";
    },
    getTitle: function () {
      return this.K.title;
    },
    Td: function (a) {
      a instanceof O && (this.K.Ga = a);
    },
    zj: function () {
      return this.K.Ga;
    },
    vn: ca("Yq"),
    Yy: function (a) {
      this.K.rotation = a;
    },
    hM: function () {
      return this.K.rotation;
    },
  });
  function Od(a) {
    this.options = a || {};
    this.j_ = this.options.paneName || "labelPane";
    this.zIndex = this.options.zIndex || 0;
    this.pW = this.options.contextType || "2d";
  }
  Od.prototype = new xd();
  Od.prototype.initialize = function (a) {
    this.P = a;
    var b = (this.canvas = document.createElement("canvas")),
      c = this.canvas.getContext(this.pW);
    b.style.cssText = "position:absolute;left:0;top:0;z-index:" + this.zIndex + ";";
    Pd(this);
    Qd(c);
    a.getPanes()[this.j_].appendChild(b);
    var e = this;
    a.addEventListener("resize", function () {
      Pd(e);
      Qd(c);
      e.ob();
    });
    return this.canvas;
  };
  function Pd(a) {
    var b = a.P.wb(),
      a = a.canvas;
    a.width = b.width;
    a.height = b.height;
    a.style.width = a.width + "px";
    a.style.height = a.height + "px";
  }
  function Qd(a) {
    var b = (window.devicePixelRatio || 1) / (a.FV || a.C7 || a.W5 || a.X5 || a.b6 || a.FV || 1),
      c = a.canvas.width,
      e = a.canvas.height;
    a.canvas.width = c * b;
    a.canvas.height = e * b;
    a.canvas.style.width = c + "px";
    a.canvas.style.height = e + "px";
    a.scale(b, b);
  }
  Od.prototype.draw = function () {
    var a = this,
      b = arguments;
    clearTimeout(a.W0);
    a.W0 = setTimeout(function () {
      a.ob.apply(a, b);
    }, 15);
  };
  fa = Od.prototype;
  fa.ob = function () {
    var a = this.P;
    this.canvas.style.left = -a.offsetX + "px";
    this.canvas.style.top = -a.offsetY + "px";
    this.dispatchEvent("draw");
    this.options.update && this.options.update.apply(this, arguments);
  };
  fa.Ta = u("canvas");
  fa.show = function () {
    this.canvas || this.P.Ra(this);
    this.canvas.style.display = "block";
  };
  fa.aa = function () {
    this.canvas.style.display = "none";
  };
  fa.wq = function (a) {
    this.canvas.style.zIndex = a;
  };
  fa.Sk = u("zIndex");
  function Rd(a, b) {
    zd.call(this, b);
    b = b || {};
    this.K.Dg = b.fillOpacity ? b.fillOpacity : 0.65;
    this.K.fillColor = "" == b.fillColor ? "" : b.fillColor ? b.fillColor : "#fff";
    this.Ud(a);
    var c = this;
    Va(Wa(2, 4), ["overlay", "polygon"]);
    ab.load("poly", function () {
      c.ob();
    });
  }
  z.lang.xa(Rd, zd, "Polygon");
  z.extend(Rd.prototype, {
    Ud: function (a, b) {
      this.Po = zd.Hx(a).slice(0);
      var c = zd.Hx(a).slice(0);
      1 < c.length && c.push(new S(c[0].lng, c[0].lat));
      zd.prototype.Ud.call(this, c, b);
    },
    zn: function (a, b) {
      this.Po[a] &&
        ((this.Po[a] = new S(b.lng, b.lat)),
        (this.ja[a] = new S(b.lng, b.lat)),
        0 == a &&
          !this.ja[0].Vb(this.ja[this.ja.length - 1]) &&
          (this.ja[this.ja.length - 1] = new S(b.lng, b.lat)),
        this.Nh());
    },
    af: function () {
      var a = this.Po;
      0 == a.length && (a = this.ja);
      return a;
    },
  });
  function Sd(a, b) {
    zd.call(this, b);
    this.fs(a);
    var c = this;
    Va(Wa(2, 3), ["overlay", "polyline"]);
    ab.load("poly", function () {
      c.ob();
    });
  }
  z.lang.xa(Sd, zd, "Polyline");
  function Td(a, b, c) {
    this.point = a;
    this.Fa = Math.abs(b);
    Rd.call(this, [], c);
  }
  Td.mF = [0.01, 1.0e-4, 1.0e-5, 4.0e-6];
  z.lang.xa(Td, Rd, "Circle");
  z.extend(Td.prototype, {
    initialize: function (a) {
      this.map = a;
      this.ja = this.Kv(this.point, this.Fa);
      this.Nh();
      return s;
    },
    Hb: function () {
      return this.map ? nb(this.point, this.map.M.Oa) : this.point;
    },
    Hv: u("point"),
    Bf: function (a) {
      a && (this.point = a);
    },
    fM: u("Fa"),
    Cf: function (a) {
      this.Fa = Math.abs(a);
    },
    Kv: function (a, b) {
      if (!a || !b || !this.map) return [];
      for (
        var c = [],
          e = b / 6378800,
          f = (Math.PI / 180) * a.lat,
          g = (Math.PI / 180) * a.lng,
          i = 0;
        360 > i;
        i += 9
      ) {
        var k = (Math.PI / 180) * i,
          m = Math.asin(Math.sin(f) * Math.cos(e) + Math.cos(f) * Math.sin(e) * Math.cos(k)),
          k = new S(
            (((g -
              Math.atan2(
                Math.sin(k) * Math.sin(e) * Math.cos(f),
                Math.cos(e) - Math.sin(f) * Math.sin(m),
              ) +
              Math.PI) %
              (2 * Math.PI)) -
              Math.PI) *
              (180 / Math.PI),
            m * (180 / Math.PI),
          );
        c.push(k);
      }
      e = c[0];
      c.push(new S(e.lng, e.lat));
      return c;
    },
  });
  var Ud = {};
  function Vd(a) {
    this.map = a;
    this.Ij = [];
    this.Ef = [];
    this.Tg = [];
    this.UV = 300;
    this.tF = 0;
    this.Lg = {};
    this.rj = {};
    this.Xk = 0;
    this.JE = q;
    this.HW = {};
    this.uo = this.kr(1);
    this.yg = this.kr(2);
    this.og = this.kr(3);
    this.Ul = this.kr(4);
    a.platform.appendChild(this.uo);
    a.platform.appendChild(this.yg);
    a.platform.appendChild(this.Ul);
    a.platform.appendChild(this.og);
    var b = 256 * Math.pow(2, 15),
      c = 3 * b,
      a = U.Sa(new N(180, 0)).lng,
      c = c - a,
      b = -3 * b,
      e = U.Sa(new N(-180, 0)).lng;
    this.rg = a;
    this.gh = e;
    this.Pl = c + (e - b);
    this.hh = a - e;
  }
  C.ff(function (a) {
    var b = new Vd(a);
    b.za();
    a.gf = b;
  });
  z.extend(Vd.prototype, {
    za: function () {
      var a = this,
        b = a.map;
      b.addEventListener("loadcode", function () {
        a.Wp();
      });
      b.addEventListener("addtilelayer", function (b) {
        a.Ue(b);
      });
      b.addEventListener("removetilelayer", function (b) {
        a.gg(b);
      });
      b.addEventListener("setmaptype", function (b) {
        a.Rg(b);
      });
      b.addEventListener("zoomstartcode", function (b) {
        a.Sc(b);
      });
      b.addEventListener("setcustomstyles", function (b) {
        a.uu(b.target);
        a.eg(q);
      });
      b.addEventListener("initindoorlayer", function (b) {
        a.FE(b);
      });
    },
    Wp: function () {
      var a = this;
      if (z.ga.oa)
        try {
          document.execCommand("BackgroundImageCache", t, q);
        } catch (b) {}
      this.loaded || a.fy();
      a.eg();
      this.loaded ||
        ((this.loaded = q),
        ab.load("tile", function () {
          a.EQ();
        }));
    },
    FE: function (a) {
      this.Vu = new Wd(this);
      this.Vu.Ue(new Xd(this.map, this.Vu, a.bf));
    },
    fy: function () {
      for (var a = this.map.ya().lf, b = 0; b < a.length; b++) {
        var c = new Yd();
        z.extend(c, a[b]);
        this.Ij.push(c);
        c.za(this.map, this.uo);
      }
      this.uu();
    },
    kr: function (a) {
      var b = I("div");
      b.style.position = "absolute";
      b.style.overflow = "visible";
      b.style.left = b.style.top = "0";
      b.style.zIndex = a;
      return b;
    },
    If: function () {
      this.Xk--;
      var a = this;
      this.JE && (this.map.dispatchEvent(new R("onfirsttileloaded")), (this.JE = t));
      0 == this.Xk &&
        (this.aj && (clearTimeout(this.aj), (this.aj = s)),
        (this.aj = setTimeout(function () {
          if (a.Xk == 0) {
            a.map.dispatchEvent(new R("ontilesloaded"));
            a.JE = q;
          }
          a.aj = s;
        }, 80)));
    },
    rE: function (a, b) {
      return "TILE-" + b.da + "-" + a[0] + "-" + a[1] + "-" + a[2];
    },
    $x: function (a) {
      var b = a.Ib;
      b && Lb(b) && b.parentNode.removeChild(b);
      delete this.Lg[a.name];
      a.loaded || (Zd(a), (a.Ib = s), (a.$m = s));
    },
    qM: function (a, b, c) {
      var e = this.map,
        f = e.ya(),
        g = e.Za,
        i = e.Jb,
        k = f.Wb(g),
        m = this.WX(),
        n = m[0],
        o = m[1],
        p = m[2],
        v = m[3],
        w = m[4],
        c = "undefined" != typeof c ? c : 0,
        f = f.me(),
        m = e.da.replace(/^TANGRAM_/, "");
      for (this.Ni ? (this.Ni.length = 0) : (this.Ni = []); n < p; n++)
        for (var A = o; A < v; A++) {
          var B = n,
            D = A;
          this.Ni.push([B, D]);
          B = m + "_" + b + "_" + B + "_" + D + "_" + g;
          this.HW[B] = B;
        }
      this.Ni.sort(
        (function (a) {
          return function (b, c) {
            return (
              0.4 * Math.abs(b[0] - a[0]) +
              0.6 * Math.abs(b[1] - a[1]) -
              (0.4 * Math.abs(c[0] - a[0]) + 0.6 * Math.abs(c[1] - a[1]))
            );
          };
        })([w[0] - 1, w[1] - 1]),
      );
      i = [Math.round(-i.lng / k), Math.round(i.lat / k)];
      n = -e.offsetY + e.height / 2;
      a.style.left = -e.offsetX + e.width / 2 + "px";
      a.style.top = n + "px";
      this.Ve ? (this.Ve.length = 0) : (this.Ve = []);
      n = 0;
      for (e = a.childNodes.length; n < e; n++) (A = a.childNodes[n]), (A.Ir = t), this.Ve.push(A);
      if ((n = this.fn)) for (var F in n) delete n[F];
      else this.fn = {};
      this.We ? (this.We.length = 0) : (this.We = []);
      n = 0;
      for (e = this.Ni.length; n < e; n++) {
        F = this.Ni[n][0];
        k = this.Ni[n][1];
        A = 0;
        for (o = this.Ve.length; A < o; A++)
          if (((p = this.Ve[A]), p.id == m + "_" + b + "_" + F + "_" + k + "_" + g)) {
            p.Ir = q;
            this.fn[p.id] = p;
            break;
          }
      }
      n = 0;
      for (e = this.Ve.length; n < e; n++) (p = this.Ve[n]), p.Ir || this.We.push(p);
      this.kG = [];
      A = (f + c) * this.map.M.devicePixelRatio;
      n = 0;
      for (e = this.Ni.length; n < e; n++)
        (F = this.Ni[n][0]),
          (k = this.Ni[n][1]),
          (v = F * f + i[0] - c / 2),
          (w = (-1 - k) * f + i[1] - c / 2),
          (B = m + "_" + b + "_" + F + "_" + k + "_" + g),
          (o = this.fn[B]),
          (p = s),
          o
            ? ((p = o.style),
              (p.left = v + "px"),
              (p.top = w + "px"),
              o.io || this.kG.push([F, k, o]))
            : (0 < this.We.length
                ? ((o = this.We.shift()),
                  o.getContext("2d").clearRect(-c / 2, -c / 2, A, A),
                  (p = o.style))
                : ((o = document.createElement("canvas")),
                  (p = o.style),
                  (p.position = "absolute"),
                  (p.width = f + c + "px"),
                  (p.height = f + c + "px"),
                  this.AZ() && (p.WebkitTransform = "scale(1.001)"),
                  o.setAttribute("width", A),
                  o.setAttribute("height", A),
                  a.appendChild(o)),
              (o.id = B),
              (p.left = v + "px"),
              (p.top = w + "px"),
              -1 < B.indexOf("bg") &&
                ((v = "#F3F1EC"),
                this.map.M.DV && (v = this.map.M.DV),
                (p.background = v ? v : "")),
              this.kG.push([F, k, o])),
          (o.style.visibility = "");
      n = 0;
      for (e = this.We.length; n < e; n++) this.We[n].style.visibility = "hidden";
      return this.kG;
    },
    AZ: function () {
      return /M040/i.test(navigator.userAgent);
    },
    WX: function () {
      var a = this.map,
        b = a.ya(),
        c = b.vM(a.Za),
        e = a.Jb,
        f = Math.ceil(e.lng / c),
        g = Math.ceil(e.lat / c),
        b = b.me(),
        c = [f, g, ((e.lng - f * c) / c) * b, ((e.lat - g * c) / c) * b];
      return [
        c[0] - Math.ceil((a.width / 2 - c[2]) / b),
        c[1] - Math.ceil((a.height / 2 - c[3]) / b),
        c[0] + Math.ceil((a.width / 2 + c[2]) / b),
        c[1] + Math.ceil((a.height / 2 + c[3]) / b),
        c,
      ];
    },
    C0: function (a, b, c, e) {
      var f = this;
      f.z3 = b;
      var g = this.map.ya(),
        i = f.rE(a, c),
        k = g.me(),
        b = [a[0] * k + b[0], (-1 - a[1]) * k + b[1]],
        m = this.Lg[i];
      if (this.map.ya() !== $a && this.map.ya() !== Za) {
        var n = this.wm(a[0], a[2]).offsetX;
        b[0] += n;
        b.R2 = n;
      }
      m && m.Ib
        ? (Jb(m.Ib, b),
          e &&
            ((e = new T(a[0], a[1])),
            (g = this.map.M.Fe ? this.map.M.Fe.style : "normal"),
            (e = c.getTilesUrl(e, a[2], g)),
            (m.loaded = t),
            $d(m, e)),
          m.loaded
            ? this.If()
            : ae(m, function () {
                f.If();
              }))
        : (m = this.rj[i]) && m.Ib
        ? (c.Mb.insertBefore(m.Ib, c.Mb.lastChild),
          (this.Lg[i] = m),
          Jb(m.Ib, b),
          e &&
            ((e = new T(a[0], a[1])),
            (g = this.map.M.Fe ? this.map.M.Fe.style : "normal"),
            (e = c.getTilesUrl(e, a[2], g)),
            (m.loaded = t),
            $d(m, e)),
          m.loaded
            ? this.If()
            : ae(m, function () {
                f.If();
              }))
        : ((m = k * Math.pow(2, g.Ze() - a[2])),
          new N(a[0] * m, a[1] * m),
          (e = new T(a[0], a[1])),
          (g = this.map.M.Fe ? this.map.M.Fe.style : "normal"),
          (e = c.getTilesUrl(e, a[2], g)),
          (m = new be(this, e, b, a, c)),
          ae(m, function () {
            f.If();
          }),
          m.to(),
          (this.Lg[i] = m));
    },
    If: function () {
      this.Xk--;
      var a = this;
      0 == this.Xk &&
        (this.aj && (clearTimeout(this.aj), (this.aj = s)),
        (this.aj = setTimeout(function () {
          if (a.Xk == 0) {
            a.map.dispatchEvent(new R("ontilesloaded"));
            if (ya) {
              if (ta && ua && xa) {
                var b = lb(),
                  c = a.map.wb();
                setTimeout(function () {
                  Ya(5030, {
                    load_script_time: ua - ta,
                    load_tiles_time: b - xa,
                    map_width: c.width,
                    map_height: c.height,
                    map_size: c.width * c.height,
                  });
                }, 1e4);
                C.Wq("cus.fire", "time", { z_imgfirstloaded: b - xa });
              }
              ya = t;
            }
          }
          a.aj = s;
        }, 80)));
    },
    rE: function (a, b) {
      return this.map.ya() === Xa
        ? "TILE-" + b.da + "-" + this.map.fx + "-" + a[0] + "-" + a[1] + "-" + a[2]
        : "TILE-" + b.da + "-" + a[0] + "-" + a[1] + "-" + a[2];
    },
    $x: function (a) {
      var b = a.Ib;
      b && (ce(b), Lb(b) && b.parentNode.removeChild(b));
      delete this.Lg[a.name];
      a.loaded || (ce(b), Zd(a), (a.Ib = s), (a.$m = s));
    },
    wm: function (a, b) {
      for (var c = 0, e = 6 * Math.pow(2, b - 3), f = e / 2 - 1, g = -e / 2; a > f; )
        (a -= e), (c -= this.Pl);
      for (; a < g; ) (a += e), (c += this.Pl);
      c = Math.round(c / Math.pow(2, 18 - b));
      return { offsetX: c, qh: a };
    },
    zC: function (a) {
      for (var b = a.lng; b > this.rg; ) b -= this.hh;
      for (; b < this.gh; ) b += this.hh;
      a.lng = b;
      return a;
    },
    AC: function (a, b) {
      for (
        var c = 256 * Math.pow(2, 18 - b),
          e = Math.floor(this.rg / c),
          f = Math.floor(this.gh / c),
          c = Math.floor(this.Pl / c),
          g = [],
          i = 0;
        i < a.length;
        i++
      ) {
        var k = a[i],
          m = k[0],
          k = k[1];
        if (m >= e) {
          var m = m + c,
            n = "id_" + m + "_" + k + "_" + b;
          a[n] || ((a[n] = q), g.push([m, k]));
        } else
          m <= f &&
            ((m -= c), (n = "id_" + m + "_" + k + "_" + b), a[n] || ((a[n] = q), g.push([m, k])));
      }
      for (i = 0; i < g.length; i++) a.push(g[i]);
      return a;
    },
    eg: function (a) {
      var b = this;
      if (b.map.ya() == Xa)
        ab.load(
          "coordtrans",
          function () {
            b.map.Qb || ((b.map.Qb = Xa.Lk(b.map.ph)), (b.map.fx = Xa.SL(b.map.Qb)));
            b.NI();
          },
          q,
        );
      else {
        if (a && a) for (var c in this.rj) delete this.rj[c];
        b.NI(a);
      }
    },
    NI: function (a) {
      var b = this.map.M.Zf ? this.Ef : this.Ij.concat(this.Ef),
        c = b.length,
        e = this.map,
        f = e.ya(),
        g = e.Jb,
        i = e.width,
        i = e.ya().Wb(e.Za) * i,
        k = g.lng + i / 2,
        i = this.NM(g.lng - i / 2, k);
      this.map.ya() !== $a && this.map.ya() !== Za && (g = this.zC(g));
      for (var m = 0; m < c; m++) {
        var n = b[m];
        if (n.kc && e.Za < n.kc) break;
        if (n.$w) {
          k = this.Mb = n.Mb;
          if (a) {
            var o = k;
            if (o && o.childNodes)
              for (var p = o.childNodes.length, v = p - 1; 0 <= v; v--)
                (p = o.childNodes[v]), o.removeChild(p), (p = s);
          }
          if (this.map.Xd()) {
            this.yg.style.display = "block";
            k.style.display = "none";
            this.map.dispatchEvent(new R("vectorchanged"), { isvector: q });
            continue;
          } else
            (k.style.display = "block"),
              (this.yg.style.display = "none"),
              this.map.dispatchEvent(new R("vectorchanged"), { isvector: t });
        }
        if (!n.Q2 && !((n.ly && !this.map.Xd()) || (n.WM && this.map.Xd()))) {
          e = this.map;
          f = e.ya();
          p = f.Bj();
          k = e.Za;
          g = e.Jb;
          f == Xa && g.Vb(new N(0, 0)) && (g = e.Jb = p.zi(e.ie, e.Qb));
          var w = f.Wb(k),
            p = f.vM(k),
            o = Math.ceil(g.lng / p),
            A = Math.ceil(g.lat / p),
            B = f.me(),
            p = [o, A, ((g.lng - o * p) / p) * B, ((g.lat - A * p) / p) * B],
            A = i ? 1.5 * (e.width / 2) : e.width / 2,
            v = p[0] - Math.ceil((A - p[2]) / B),
            o = p[1] - Math.ceil((e.height / 2 - p[3]) / B),
            A = p[0] + Math.ceil((A + p[2]) / B),
            D = 0;
          f === Xa && 15 == e.la() && (D = 1);
          f = p[1] + Math.ceil((e.height / 2 + p[3]) / B) + D;
          this.uK = new N(g.lng, g.lat);
          var F = this.Lg,
            B = -this.uK.lng / w,
            D = this.uK.lat / w,
            g = [Math.ceil(B), Math.ceil(D)],
            w = e.la(),
            H;
          for (H in F) {
            var G = F[H],
              E = G.info;
            (E[2] != w || (E[2] == w && (v > E[0] || A <= E[0] || o > E[1] || f <= E[1]))) &&
              this.$x(G);
          }
          F = -e.offsetX + e.width / 2;
          G = -e.offsetY + e.height / 2;
          n.Mb &&
            ((n.Mb.style.left = Math.ceil(B + F) - g[0] + "px"),
            (n.Mb.style.top = Math.ceil(D + G) - g[1] + "px"),
            (n.Mb.style.WebkitTransform = "translate3d(0,0,0)"));
          B = [];
          for (e.eC = []; v < A; v++)
            for (D = o; D < f; D++) B.push([v, D]), e.eC.push({ x: v, y: D });
          this.map.ya() !== $a && this.map.ya() !== Za && (B = this.AC(B, k));
          B.sort(
            (function (a) {
              return function (b, c) {
                return (
                  0.4 * Math.abs(b[0] - a[0]) +
                  0.6 * Math.abs(b[1] - a[1]) -
                  (0.4 * Math.abs(c[0] - a[0]) + 0.6 * Math.abs(c[1] - a[1]))
                );
              };
            })([p[0] - 1, p[1] - 1]),
          );
          k = Math.ceil(this.rg / (256 * Math.pow(2, 18 - w)));
          p = B.length;
          this.Xk += p;
          for (v = 0; v < p; v++) {
            if (n.PO === q && ((o = this.wm(B[v][0], w)), o.qh > k - 1 || o.qh < -k)) continue;
            this.C0([B[v][0], B[v][1], w], g, n, a);
          }
        }
      }
    },
    NM: function (a, b) {
      return a < this.gh || b > this.rg;
    },
    Ue: function (a) {
      var b = this,
        c = a.target;
      b.map.Xd();
      c.Gn && this.map.Ue(c.Gn);
      if (c.ly) {
        for (a = 0; a < b.Tg.length; a++) if (b.Tg[a] == c) return;
        ab.load(
          "vector",
          function () {
            c.za(b.map, b.yg);
            b.Tg.push(c);
          },
          q,
        );
      } else {
        for (a = 0; a < b.Ef.length; a++) if (b.Ef[a] == c) return;
        c.za(this.map, this.Ul);
        b.Ef.push(c);
      }
    },
    gg: function (a) {
      a = a.target;
      this.map.Xd();
      a.Gn && this.map.gg(a.Gn);
      if (a.ly)
        for (var b = 0, c = this.Tg.length; b < c; b++) a == this.Tg[b] && this.Tg.splice(b, 1);
      else {
        b = 0;
        for (c = this.Ef.length; b < c; b++) a == this.Ef[b] && this.Ef.splice(b, 1);
      }
      a.remove();
    },
    Rg: function () {
      for (var a = this.Ij, b = 0, c = a.length; b < c; b++) a[b].remove();
      delete this.Mb;
      this.Ij = [];
      this.rj = this.Lg = {};
      this.fy();
      this.eg();
    },
    Sc: function () {
      var a = this;
      a.Cd && z.U.aa(a.Cd);
      setTimeout(function () {
        a.eg();
        a.map.dispatchEvent(new R("onzoomend"));
      }, 10);
    },
    s7: ba(),
    uu: function (a) {
      var b = this.map.ya();
      if (!this.map.Xd() && (a ? (this.map.M.L0 = a) : (a = this.map.M.L0), a))
        for (
          var c = s,
            c =
              "2" == C.Uu
                ? [C.url.proto + C.url.domain.main_domain_cdn.other[0] + "/"]
                : [
                    C.url.proto + C.url.domain.main_domain_cdn.baidu[0] + "/",
                    C.url.proto + C.url.domain.main_domain_cdn.baidu[1] + "/",
                    C.url.proto + C.url.domain.main_domain_cdn.baidu[2] + "/",
                  ],
            e = 0,
            f;
          (f = this.Ij[e]);
          e++
        )
          if (f.PO == q) {
            b.m.qc = 18;
            f.getTilesUrl = function (b, e) {
              var f = b.x,
                f = this.map.gf.wm(f, e).qh,
                m = b.y,
                n = dc("normal"),
                o = 1;
              this.map.ay() && (o = 2);
              n =
                window._BMapSecurityConfig && window._BMapSecurityConfig.serviceHost
                  ? "customimage/tile?qt=customimage&x=" +
                    f +
                    "&y=" +
                    m +
                    "&z=" +
                    e +
                    "&udt=" +
                    n +
                    "&scale=" +
                    o
                  : "customimage/tile?qt=customimage&x=" +
                    f +
                    "&y=" +
                    m +
                    "&z=" +
                    e +
                    "&udt=" +
                    n +
                    "&scale=" +
                    o +
                    "&ak=" +
                    qa;
              n = a.styleStr
                ? n + ("&styles=" + encodeURIComponent(a.styleStr))
                : n + ("&customid=" + a.style);
              n = c[Math.abs(f + m) % c.length] + n;
              return (n = tb(n));
            };
            break;
          }
    },
  });
  function be(a, b, c, e, f) {
    this.$m = a;
    this.position = c;
    this.tv = [];
    this.name = a.rE(e, f);
    this.info = e;
    this.YJ = f.Ut();
    e = I("img");
    Kb(e);
    e.LL = t;
    var g = e.style,
      a = a.map.ya();
    g.position = "absolute";
    g.border = "none";
    g.width = a.me() + "px";
    g.height = a.me() + "px";
    g.left = c[0] + "px";
    g.top = c[1] + "px";
    g.maxWidth = "none";
    this.Ib = e;
    this.src = b;
    de && (this.Ib.style.opacity = 0);
    var i = this;
    this.Ib.onload = function () {
      C.IZ.rR();
      i.loaded = q;
      if (i.$m) {
        var a = i.$m,
          b = a.rj;
        if (!b[i.name]) {
          a.tF++;
          b[i.name] = i;
        }
        if (i.Ib && !Lb(i.Ib) && f.Mb) {
          f.Mb.appendChild(i.Ib);
          if (z.ga.oa <= 6 && z.ga.oa > 0 && i.YJ)
            i.Ib.style.cssText =
              i.Ib.style.cssText +
              (';filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src="' +
                i.src +
                '",sizingMethod=scale);');
        }
        var c = a.tF - a.UV,
          e;
        for (e in b) {
          if (c <= 0) break;
          if (!a.Lg[e]) {
            b[e].$m = s;
            var g = b[e].Ib;
            if (g && g.parentNode) {
              g.parentNode.removeChild(g);
              ce(g);
            }
            g = s;
            b[e].Ib = s;
            delete b[e];
            a.tF--;
            c--;
          }
        }
        de &&
          new Fb({
            Nc: 20,
            duration: 200,
            Ba: function (a) {
              if (i.Ib && i.Ib.style) i.Ib.style.opacity = a * 1;
            },
            finish: function () {
              i.Ib && i.Ib.style && delete i.Ib.style.opacity;
            },
          });
        Zd(i);
      }
    };
    this.Ib.onerror = function () {
      Zd(i);
      if (i.$m) {
        var a = i.$m.map.ya();
        if (a.m.GD) {
          i.error = q;
          i.Ib.src = a.m.GD;
          i.Ib && !Lb(i.Ib) && f.Mb.appendChild(i.Ib);
        }
      }
    };
    e = s;
  }
  function ae(a, b) {
    a.tv.push(b);
  }
  be.prototype.to = function () {
    this.Ib.src =
      0 < z.ga.oa && 6 >= z.ga.oa && this.YJ
        ? L.ta + "blank.gif"
        : "" !== this.src && this.Ib.src == this.src
        ? this.src + "&t = " + Date.now()
        : this.src;
  };
  function Zd(a) {
    for (var b = 0; b < a.tv.length; b++) a.tv[b]();
    a.tv.length = 0;
  }
  function ce(a) {
    if (a) {
      a.onload = a.onerror = s;
      var b = a.attributes,
        c,
        e,
        f;
      if (b) {
        e = b.length;
        for (c = 0; c < e; c += 1) (f = b[c].name), hb(a[f]) && (a[f] = s);
      }
      if ((b = a.children)) {
        e = b.length;
        for (c = 0; c < e; c += 1) ce(a.children[c]);
      }
    }
  }
  function $d(a, b) {
    a.src = b;
    a.to();
  }
  var de = !z.ga.oa || 8 < z.ga.oa;
  function Yd(a) {
    this.bf = a || {};
    this.rW = this.bf.copyright || s;
    this.n1 = this.bf.transparentPng || t;
    this.$w = this.bf.baseLayer || t;
    this.zIndex = this.bf.zIndex || 0;
    this.da = Yd.aT++;
  }
  Yd.aT = 0;
  z.lang.xa(Yd, z.lang.Ja, "TileLayer");
  z.extend(Yd.prototype, {
    za: function (a, b) {
      this.$w && (this.zIndex = -100);
      this.map = a;
      if (!this.Mb) {
        var c = I("div"),
          e = c.style;
        e.position = "absolute";
        e.overflow = "visible";
        e.zIndex = this.zIndex;
        e.left = Math.ceil(-a.offsetX + a.width / 2) + "px";
        e.top = Math.ceil(-a.offsetY + a.height / 2) + "px";
        b.appendChild(c);
        this.Mb = c;
      }
    },
    remove: function () {
      this.Mb &&
        this.Mb.parentNode &&
        ((this.Mb.innerHTML = ""), this.Mb.parentNode.removeChild(this.Mb));
      delete this.Mb;
    },
    Ut: u("n1"),
    getTilesUrl: function (a, b) {
      if (this.map.ya() !== $a && this.map.ya() !== Za) var c = this.map.gf.wm(a.x, b).qh;
      var e = "";
      this.bf.tileUrlTemplate &&
        ((e = this.bf.tileUrlTemplate.replace(/\{X\}/, c)),
        (e = e.replace(/\{Y\}/, a.y)),
        (e = e.replace(/\{Z\}/, b)));
      return e;
    },
    Im: u("rW"),
    ya: function () {
      return this.Wa || Sa;
    },
  });
  function ee(a) {
    Yd.call(this, a);
    this.m = a || {};
    this.WM = q;
    if (this.m.predictDate) {
      if (1 > this.m.predictDate.weekday || 7 < this.m.predictDate.weekday) this.m.predictDate = 1;
      if (0 > this.m.predictDate.hour || 23 < this.m.predictDate.hour) this.m.predictDate.hour = 0;
    }
    this.cV = C.url.proto + C.url.domain.traffic + "/traffic/";
  }
  ee.prototype = new Yd();
  ee.prototype.za = function (a, b) {
    Yd.prototype.za.call(this, a, b);
    this.P = a;
    Va(Wa(3, 3), ["layer", "traffic"]);
  };
  ee.prototype.Ut = ea(q);
  ee.prototype.getTilesUrl = function (a, b) {
    var c = "";
    this.m.predictDate
      ? (c =
          "HistoryService?day=" +
          (this.m.predictDate.weekday - 1) +
          "&hour=" +
          this.m.predictDate.hour +
          "&t=" +
          new Date().getTime() +
          "&")
      : ((c = "TrafficTileService?time=" + new Date().getTime() + "&"),
        (c = this.P.M.Zf ? c + "v=016&" : c + "label=web2D&v=016&"));
    var c = this.cV + c + "level=" + b + "&x=" + a.x + "&y=" + a.y,
      e = 1;
    this.P.ay() && (e = 2);
    return (c + "&scaler=" + e).replace(/-(\d+)/gi, "M$1");
  };
  var fe = [
      C.url.proto + C.url.domain.TILES_YUN_HOST[0] + "/georender/gss",
      C.url.proto + C.url.domain.TILES_YUN_HOST[1] + "/georender/gss",
      C.url.proto + C.url.domain.TILES_YUN_HOST[2] + "/georender/gss",
      C.url.proto + C.url.domain.TILES_YUN_HOST[3] + "/georender/gss",
    ],
    ge = C.url.proto + C.url.domain.main_domain_nocdn.baidu + "/style/poi/rangestyle",
    he = 100;
  function zb(a, b) {
    Yd.call(this);
    var c = this;
    this.WM = q;
    try {
      document.createElement("canvas").getContext("2d");
    } catch (e) {}
    Tb(a) ? (b = a || {}) : ((c.ho = a), (b = b || {}));
    b.geotableId && (c.Lf = b.geotableId);
    b.databoxId && (c.ho = b.databoxId);
    var f = C.dd + "geosearch";
    c.fb = {
      pF: b.pointDensity || he,
      ZY: f + "/detail/",
      $Y: f + "/v2/detail/",
      sC: b.age || 36e5,
      hq: b.q || "",
      aP: "png",
      o5: [5, 5, 5, 5],
      EZ: { backgroundColor: "#FFFFD5", borderColor: "#808080" },
      tC: b.ak || qa,
      gG: b.tags || "",
      filter: b.filter || "",
      $F: b.sortby || "",
      xE: b.hotspotName || "tile_md_" + (1e5 * Math.random()).toFixed(0),
      uG: q,
    };
    ab.load("clayer", function () {
      c.Ed();
    });
  }
  zb.prototype = new Yd();
  zb.prototype.za = function (a, b) {
    Yd.prototype.za.call(this, a, b);
    this.P = a;
  };
  zb.prototype.getTilesUrl = function (a, b) {
    var c = a.x,
      e = a.y,
      f = this.fb,
      g = fe[Math.abs(c + e) % fe.length],
      c =
        window._BMapSecurityConfig && window._BMapSecurityConfig.serviceHost
          ? g +
            "/image?grids=" +
            c +
            "_" +
            e +
            "_" +
            b +
            "&q=" +
            f.hq +
            "&tags=" +
            f.gG +
            "&filter=" +
            f.filter +
            "&sortby=" +
            f.$F +
            "&age=" +
            f.sC +
            "&page_size=" +
            f.pF +
            "&format=" +
            f.aP
          : g +
            "/image?grids=" +
            c +
            "_" +
            e +
            "_" +
            b +
            "&q=" +
            f.hq +
            "&tags=" +
            f.gG +
            "&filter=" +
            f.filter +
            "&sortby=" +
            f.$F +
            "&ak=" +
            this.fb.tC +
            "&age=" +
            f.sC +
            "&page_size=" +
            f.pF +
            "&format=" +
            f.aP;
    f.uG || ((f = (1e5 * Math.random()).toFixed(0)), (c += "&timeStamp=" + f));
    this.Lf ? (c += "&geotable_id=" + this.Lf) : this.ho && (c += "&databox_id=" + this.ho);
    return c;
  };
  zb.prototype.enableUseCache = function () {
    this.fb.uG = q;
  };
  zb.prototype.disableUseCache = function () {
    this.fb.uG = t;
  };
  zb.AU = /^point\(|\)$/gi;
  zb.BU = /\s+/;
  zb.DU = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  var ie = {};
  function je(a, b) {
    this.cd = a;
    this.HQ = 18;
    this.m = { Nu: 256, Dc: new U() };
    z.extend(this.m, b || {});
  }
  var ke = [0, 0, 0, 8, 7, 7, 6, 6, 5, 5, 4, 3, 3, 3, 2, 2, 1, 1, 0, 0, 0, 0],
    le = [512, 2048, 4096, 32768, 65536, 262144, 1048576, 4194304, 8388608],
    ne = [0, 0, 0, 3, 5, 5, 7, 7, 9, 9, 10, 12, 12, 12, 15, 15, 17, 17, 19, 19, 19, 19],
    oe = [
      0, 0, 0, 256, 256, 512, 256, 512, 256, 512, 256, 256, 512, 1024, 256, 512, 512, 1024, 512,
      1024, 2048, 4096,
    ];
  je.prototype = {
    getName: u("cd"),
    me: function (a) {
      return "na" === this.cd ? oe[a] : this.m.Nu;
    },
    Bp: function (a) {
      return "na" === this.cd ? ne[a] : a;
    },
    Bj: function () {
      return this.m.Dc;
    },
    Wb: function (a) {
      return Math.pow(2, this.HQ - a);
    },
    iE: function (a) {
      return "na" === this.cd ? le[ke[a]] : this.Wb(a) * this.me(a);
    },
    SX: function (a) {
      a = Math.floor(a);
      return "na" === this.cd ? oe[ne[a]] : this.m.Nu;
    },
  };
  var pe = {
    drawPoly: function (a, b, c, e, f, g) {
      var i = a[1];
      if (i)
        for (var a = a[6], k = 0; k < i.length; k++) {
          var m = i[k][0],
            n = f.Dj(m, "polygon", c, g);
          if (n && n.length)
            for (var o = i[k][1], p = 0; p < o.length; p++) {
              var v = o[p][1];
              f.Oc(v[0], c) &&
                (v["cache" + c] || (v["cache" + c] = f.hn(v[1], c, e, a)),
                (v = v["cache" + c]),
                f.P.Uo(b.canvas.id, v, { type: "polygon", Yb: m, style: n }),
                this.lX(b, v, n, c));
            }
        }
    },
    lX: function (a, b, c, e) {
      c = c[0];
      if (
        !c.Yb ||
        !(
          (6 < e && (71013 === c.Yb || 71012 === c.Yb || 71011 === c.Yb)) ||
          (6 === e && (71011 === c.Yb || 71012 === c.Yb)) ||
          (5 === e && (71011 === c.Yb || 71013 === c.Yb)) ||
          (5 > e && (71012 === c.Yb || 71013 === c.Yb))
        )
      ) {
        a.fillStyle = c.Bx;
        a.beginPath();
        a.moveTo(b[0], b[1]);
        for (var e = 2, f = b.length; e < f; e += 2) a.lineTo(b[e], b[e + 1]);
        a.closePath();
        c.borderWidth && ((a.strokeStyle = c.ap), (a.lineWidth = c.borderWidth / 2), a.stroke());
        a.fill();
      }
    },
    drawGaoqingRoadBorder: function (a, b, c, e, f) {
      var g = a[1];
      if (g)
        for (var a = a[6], i = 0; i < g.length; i++) {
          var k = g[i][0],
            m = f.Dj(k, "polygon", c);
          if (m && m.length && m[0].borderWidth)
            for (var n = g[i][1], o = 0; o < n.length; o++) {
              var p = n[o][1];
              f.Oc(p[0], c) &&
                (p["cache" + c] || (p["cache" + c] = f.hn(p[1], c, e, a)),
                (p = p["cache" + c]),
                f.P.Uo(b.canvas.id, p, { type: "polygon", Yb: k, style: m }),
                this.nX(b, p, m));
            }
        }
    },
    drawGaoqingRoadFill: function (a, b, c, e, f) {
      var g = a[1];
      if (g)
        for (var a = a[6], i = 0; i < g.length; i++) {
          var k = g[i][0],
            m = f.Dj(k, "polygon", c);
          if (m && m.length)
            for (var n = g[i][1], o = 0; o < n.length; o++) {
              var p = n[o][1];
              f.Oc(p[0], c) &&
                (p["cache" + c] || (p["cache" + c] = f.hn(p[1], c, e, a)),
                (p = p["cache" + c]),
                f.P.Uo(b.canvas.id, p, { type: "polygon", Yb: k, style: m }),
                this.oX(b, p, m));
            }
        }
    },
    nX: function (a, b, c) {
      c = c[0];
      a.beginPath();
      a.moveTo(b[0], b[1]);
      for (var e = 2, f = b.length; e < f; e += 2) a.lineTo(b[e], b[e + 1]);
      a.closePath();
      a.strokeStyle = c.ap;
      a.lineWidth = c.borderWidth / 2;
      a.stroke();
    },
    oX: function (a, b, c) {
      a.fillStyle = c[0].Bx;
      a.beginPath();
      a.moveTo(b[0], b[1]);
      for (var c = 2, e = b.length; c < e; c += 2) a.lineTo(b[c], b[c + 1]);
      a.closePath();
      a.fill();
    },
  };
  var qe = {
    drawArrow: function (a, b, c, e, f, g) {
      b.lineWidth = 1.5;
      b.lineCap = "butt";
      b.lineJoin = "miter";
      b.strokeStyle = "rgba(153,153,153,1)";
      var i = a[7];
      if (i) {
        a = i[1];
        e = g.hn(i[0], c, e);
        for (i = 0; i < a.length; i++)
          if (g.Oc(a[i], c)) {
            var k = e[4 * i],
              m = e[4 * i + 1],
              n = e[4 * i + 2],
              o = e[4 * i + 3],
              p = (k + n) / 2,
              v = (m + o) / 2,
              n = (k - n) / f,
              o = (m - o) / f,
              k = p + n / 2,
              n = p - n / 2,
              m = v + o / 2,
              o = v - o / 2;
            this.dX(b, k, m, n, o);
          }
      }
    },
    dX: function (a, b, c, e, f) {
      a.beginPath();
      a.moveTo(b, c);
      a.lineTo(e, f);
      a.stroke();
      c = this.VV([b, c], [e, f]);
      b = c[0];
      c = c[1];
      a.beginPath();
      a.moveTo(b[0], b[1]);
      a.lineTo(c[0], c[1]);
      a.lineTo(e, f);
      a.closePath();
      a.stroke();
    },
    VV: function (a, b) {
      var c = b[0] - a[0],
        e = b[1] - a[1],
        f = 1.8 * Math.sqrt(c * c + e * e),
        g = b[0] + 4.8410665352790705 * (c / f),
        f = b[1] + 4.8410665352790705 * (e / f),
        c = Math.atan2(e, c) + Math.PI;
      return [
        [g + 4.8410665352790705 * Math.cos(c - 0.3), f + 4.8410665352790705 * Math.sin(c - 0.3)],
        [g + 4.8410665352790705 * Math.cos(c + 0.3), f + 4.8410665352790705 * Math.sin(c + 0.3)],
      ];
    },
  };
  var re = {
    drawHregion: function (a, b, c, e, f) {
      var g = a[1];
      if (g)
        for (var a = a[6], i = 0; i < g.length; i++) {
          var k = g[i][0],
            m = f.Dj(k, "polygon3d", c);
          if (m && m.length)
            for (var n = g[i][1], o = 0; o < n.length; o++) {
              var p = n[o][2];
              if (f.Oc(p[0], c)) {
                var v = p[2];
                p["cache" + c] || (p["cache" + c] = f.hn(p[1], c, e, a));
                p = p["cache" + c];
                f.P.Uo(b.canvas.id, p, { type: "polygon", Yb: k, style: m });
                this.mX(b, p, v, m);
              }
            }
        }
    },
    mX: function (a, b, c, e) {
      e = e[0];
      if (!(c < e.filter)) {
        a.fillStyle = e.DX;
        a.beginPath();
        a.moveTo(b[0], b[1]);
        for (var c = 2, f = b.length; c < f; c += 2) a.lineTo(b[c], b[c + 1]);
        a.closePath();
        e.borderWidth && ((a.strokeStyle = e.ap), (a.lineWidth = e.borderWidth / 2), a.stroke());
        a.fill();
      }
    },
  };
  var se = {
    parse: function (a, b, c, e, f) {
      for (
        var g = e.P,
          i = g.la(),
          k = Math.pow(2, 18 - i),
          m = g.Dc.zi(g.Hb()),
          n = m.lng,
          o = m.lat,
          m = g.wb(),
          p = m.width,
          v = m.height,
          m = [],
          w = 0;
        w < a.length;
        w++
      ) {
        var A = [],
          B = a[w].U0;
        A.x = B[0];
        A.y = B[1];
        A.H7 = B[2];
        for (
          var D = (B[0] * c * k - n) / k + p / 2, F = (o - (B[1] + 1) * c * k) / k + v / 2, H = 0;
          H < a[w].length;
          H++
        )
          a[w][H].bN
            ? this.aO(a[w][H].bN, B, e, b, c, D, F, i, k, p, v, A)
            : a[w][H].fZ
            ? this.aO(a[w][H].fZ, B, e, b, c, D, F, i, k, p, v, A, q, window.s5)
            : this.p_(a[w][H].FZ, B, e, b, c, D, F, i, k, p, v, A, f);
        m.push(A);
      }
      if (/collision=0/.test(location.search)) {
        a = [];
        for (w = 0; w < m.length; w++) for (H = 0; H < m[w].length; H++) a.push(m[w][H]);
      } else a = this.D_(m, e.P.la());
      g.hW();
      for (w = 0; w < a.length; w++)
        if (((c = a[w]), !c.Ot))
          if (
            ((H = [c.cg, c.dg, c.cg, c.Di, c.Ci, c.Di, c.Ci, c.dg, c.cg, c.dg]),
            c.style && g.Uo("poi", H, { type: "polygon", Yb: c.style.Yb, style: c.style }),
            "fixed" === c.type)
          ) {
            H = t;
            c.De && c.style && 4 === c.direction && (H = q);
            if (c.De)
              if (H) {
                var G = this;
                this.ct(b, c, e, H, function (a) {
                  for (var c = 0; c < a.Df.length; c++)
                    G.qL(b, a.Df[c].je, a.Df[c].ke, a.Df[c].text, a.style, e);
                });
              } else this.ct(b, c, e);
            if (c.style && !H)
              for (H = 0; H < c.Df.length; H++)
                this.qL(b, c.Df[H].je, c.Df[H].ke, c.Df[H].text, c.style, e);
          } else if ("line" === c.type)
            for (H = 0; H < c.HP.length; H++)
              (f = c.HP[H]), se.gX(b, f.je, f.ke, f.yV, f.FP, f.width, f.height, c.style, e);
      return m;
    },
    aO: function (a, b, c, e, f, g, i, k, m, n, o, p, v, w) {
      if ((a = a[1]))
        for (b = 0; b < a.length; b++) {
          var A = a[b],
            B = A[0],
            D = c.Dj(B, "point", k, w),
            B = c.Dj(B, "pointText", k, w),
            A = A[1],
            F = s,
            H = 100,
            G = 0,
            E = 0;
          D && D[0] && ((D = D[0]), (F = D.De), (H = D.zoom || 100));
          B = B && B[0] ? B[0] : s;
          for (D = 0; D < A.length; D++) {
            var J = A[D][4];
            if (J && c.Oc(J[2], k)) {
              var K = Math.round(J[0] / 100) / m + g,
                P = f - Math.round(J[1] / 100) / m + i;
              if (v || !(-50 > K || -50 > P || K > n + 50 || P > o + 50)) {
                var Q = J[7] || "",
                  ga = {
                    type: "fixed",
                    uid: J[3] || "",
                    name: Q,
                    Py: J[4],
                    Jt: s,
                    Df: [],
                    Cy: [K, P],
                    style: B,
                  };
                if (F) {
                  var da = window.iconSetInfo_high[F] || window.iconSetInfo_high["MapRes/" + F];
                  if (!da) {
                    var Da = F.charCodeAt(0);
                    48 <= Da && 57 >= Da && (da = window.iconSetInfo_high["_" + F]);
                  }
                  da &&
                    ((G = da[2]),
                    (E = da[3]),
                    (G = ((G / 2) * H) / 100),
                    (E = ((E / 2) * H) / 100),
                    (ga.Jt = { je: K - G / 2, ke: P - E / 2, width: G, height: E }),
                    (ga.De = F));
                }
                if (B) {
                  J = J[5];
                  "number" !== typeof J && (J = 0);
                  var wa = (da = 0),
                    Da = (B.fontSize || 12) / 2,
                    La = 0.2 * Da;
                  e.font = se.Gx(B, c);
                  var Q = Q.split("\\"),
                    va = Q.length;
                  ga.direction = J;
                  for (var cb = 0; cb < va; cb++) {
                    var Ue = Q[cb],
                      gd = e.measureText(Ue).width;
                    switch (J) {
                      case 3:
                        wa = P - (Da / 2) * va - (La * (va - 1)) / 2;
                        da = K - gd - G / 2;
                        wa = wa + Da * cb + La * cb;
                        break;
                      case 1:
                        wa = P - (Da / 2) * va - (La * (va - 1)) / 2;
                        da = K + G / 2;
                        wa = wa + Da * cb + La * cb;
                        break;
                      case 2:
                        wa = P - E / 2 - Da * va - La * (va - 1) - La;
                        da = K - gd / 2;
                        wa = wa + Da * cb + La * cb;
                        break;
                      case 0:
                        wa = P + E / 2 + La / 2;
                        da = K - gd / 2;
                        wa = wa + Da * cb + La * cb;
                        break;
                      case 4:
                        (wa = P - (Da / 2) * va - (La * (va - 1)) / 2),
                          (da = K - gd / 2),
                          (wa = wa + Da * cb + La * cb);
                    }
                    ga.Df.push({ je: da, ke: wa, width: gd, height: Da, text: Ue });
                  }
                }
                p.push(ga);
              }
            }
          }
        }
    },
    p_: function (a, b, c, e, f, g, i, k, m, n, o, p, v) {
      b = a[7].length;
      if ((n = c.Dj(a[0], "pointText", k)) && n.length) {
        n = n[0];
        e.font = se.Gx(n, c);
        var o = n.fontSize / 2,
          w = a[1],
          A = a[2];
        if (A) {
          for (var B = A.split("").length, D = a[4], F = D.slice(0, 2), H = 2; H < D.length; H += 2)
            (F[H] = F[H - 2] + D[H]), (F[H + 1] = F[H - 1] + D[H + 1]);
          for (H = 2; H < D.length; H += 2)
            0 === H % (2 * B) ||
              1 === H % (2 * B) ||
              ((F[H] = F[H - 2] + D[H] / v), (F[H + 1] = F[H - 1] + D[H + 1] / v));
          for (v = 0; v < b; v++)
            if (c.Oc(a[7][v], k)) {
              var H = [],
                G = l,
                E = l,
                J = l,
                K = l,
                P = A.split("");
              a[6][v] && P.reverse();
              for (var D = 2 * v * B, D = F.slice(D, D + 2 * B), Q = 0; Q < B; Q++) {
                var ga = a[5][B * v + Q],
                  da = D[2 * Q] / 100 / m + g,
                  Da = f - D[2 * Q + 1] / 100 / m + i,
                  wa = P[Q],
                  La = e.measureText(wa).width;
                if (G === l) (G = da - La / 2), (E = Da - o / 2), (J = G + La), (K = E + o);
                else {
                  var va = da - La / 2,
                    cb = Da - o / 2;
                  va < G && (G = va);
                  cb < E && (E = cb);
                  va + La > J && (J = va + La);
                  cb + o > K && (K = cb + o);
                }
                H.push({ FP: wa, je: da, ke: Da, yV: ga, width: La, height: o });
              }
              p.push({ type: "line", Py: w, style: n, HP: H, cg: G, dg: E, Ci: J, Di: K });
            }
        }
      }
    },
    ct: function (a, b, c, e, f) {
      var g = b.De;
      if ("lanche" !== g)
        if (se.by[g]) this.nL(a, b, se.by[g], e, f);
        else if ((c = c.ZL(g))) {
          var i = new Image();
          i.setAttribute("crossOrigin", "anonymous");
          var k = this;
          i.onload = function () {
            se.by[g] = this;
            k.nL(a, b, this, e, f);
            i.onload = s;
          };
          i.src = c;
        }
    },
    nL: function (a, b, c, e, f) {
      var g = b.Jt,
        i = g.je,
        k = g.ke,
        m = s,
        n = s,
        o = q,
        p = b.style ? b.style.Yb : s;
      if (b.style && 62203 === p) {
        for (var v = (n = m = 0); v < b.Df.length; v++)
          m < b.Df[v].width && (m = b.Df[v].width), (n += 20);
        m = Math.ceil(m) + 10;
      }
      e && 519 === p && (o = t);
      m !== s && n !== s
        ? this.kX(a, b, c, 8, m, n)
        : e && o
        ? ((m = Math.ceil(b.Df[0].width) + 6), this.cX(a, b, c, 12, m, c.height / 2))
        : a.drawImage(c, i, k, g.width, g.height);
      f && f(b);
    },
    kX: function (a, b, c, e, f, g) {
      var i = b.Cy[0] - f / 2,
        b = b.Cy[1] - g / 2;
      0 < navigator.userAgent.indexOf("iPhone") && (b += 1);
      var k = e / 2;
      a.drawImage(c, 0, 0, e, e, i, b, k, k);
      a.drawImage(c, e, 0, 1, e, i + k, b, f - 2 * k, k);
      a.drawImage(c, c.width - e, 0, e, e, i + f - k, b, k, k);
      a.drawImage(c, 0, e, e, 1, i, b + k, k, g - 2 * k);
      a.drawImage(c, e, e, 1, 1, i + k, b + k, f - 2 * k, g - 2 * k);
      a.drawImage(c, c.width - e, e, e, 1, i + f - k, b + k, k, g - 2 * k);
      a.drawImage(c, 0, c.height - e, e, e, i, b + g - k, k, k);
      a.drawImage(c, e, c.height - e, 1, e, i + k, b + g - k, f - 2 * k, k);
      a.drawImage(c, c.width - e, c.height - e, e, e, i + f - k, b + g - k, k, k);
    },
    cX: function (a, b, c, e, f, g) {
      var i = b.Cy[0] - f / 2,
        b = b.Cy[1] - g / 2,
        g = e / 2;
      a.drawImage(c, 0, 0, e, c.height, i, b, g, c.height / 2);
      a.drawImage(c, e, 0, 1, c.height, i + g, b, f - 2 * g, c.height / 2);
      a.drawImage(c, c.width - e, 0, e, c.height, i + f - g, b, g, c.height / 2);
    },
    gX: function (a, b, c, e, f, g, i, k, m) {
      a.font = se.Gx(k, m);
      a.fillStyle = k.IL;
      g /= 2;
      i /= 2;
      a.save();
      a.translate(b, c);
      a.rotate((-e / 180) * Math.PI);
      0 < k.Ux && ((a.lineWidth = k.Ux), (a.strokeStyle = k.AM), a.strokeText(f, -g, -i));
      a.fillText(f, -g, -i);
      a.restore();
    },
    qL: function (a, b, c, e, f, g) {
      a.font = se.Gx(f, g);
      a.fillStyle = f.IL;
      0 < f.Ux && ((a.lineWidth = f.Ux), (a.strokeStyle = f.AM), a.strokeText(e, b, c));
      a.fillText(e, b, c);
    },
    Gx: function (a, b) {
      var c = a.fontSize / 2,
        e = 10 * a.fontWeight;
      return (e = b.QM
        ? e + " bold" + (" " + c + "px") + ' arial, "PingFang SC", sans-serif'
        : e + (" " + c + "px") + " arial, sans-serif");
    },
    D_: function (a, b) {
      var c = [],
        e = 0;
      5 === b && (e = 1);
      a.sort(function (a, b) {
        return a.x * a.y < b.x * b.y ? -1 : 1;
      });
      for (var f = 0, g = a.length; f < g; f++)
        for (var i = a[f], k = 0, m = i.length; k < m; k++) {
          var n = i[k],
            o = l,
            p = l,
            v = l,
            w = l;
          if ("fixed" === n.type) {
            var A = n.Jt,
              B = n.Df;
            A && ((o = A.je), (p = A.ke), (v = A.je + A.width), (w = A.ke + A.height));
            for (A = 0; A < B.length; A++) {
              var D = B[A];
              o !== l
                ? (D.je < o && (o = D.je),
                  D.ke < p && (p = D.ke),
                  D.je + D.width > v && (v = D.je + D.width),
                  D.ke + D.height > w && (w = D.ke + D.height))
                : ((o = D.je), (p = D.ke), (v = D.je + D.width), (w = D.ke + D.height));
            }
          } else
            "line" === n.type
              ? ((o = n.cg), (p = n.dg), (v = n.Ci), (w = n.Di))
              : "biaopai" === n.type &&
                ((w = n.r6), (o = w.je), (p = w.ke), (v = w.je + w.width), (w = w.ke + w.height));
          o !== l && ((n.cg = o), (n.dg = p), (n.Ci = v), (n.Di = w), c.push(n));
        }
      c.sort(function (a, b) {
        return b.Py - a.Py || b.cg - a.cg || b.dg - a.dg;
      });
      f = 0;
      for (g = c.length; f < g; f++) {
        m = c[f];
        m.Ot = t;
        m.xK = [];
        for (k = f + 1; k < g; k++)
          (i = c[k]),
            m.Ci - e < i.cg ||
              m.cg > i.Ci - e ||
              m.Di - e < i.dg ||
              m.dg > i.Di - e ||
              m.xK.push(k);
      }
      f = 0;
      for (g = c.length; f < g; f++)
        if (((k = c[f]), k.Ot === t)) {
          e = k.xK;
          k = 0;
          for (m = e.length; k < m; k++) c[e[k]].Ot = q;
        }
      return c;
    },
    by: {},
  };
  var te = ["round", "butt", "square"],
    ue = ["miter", "round", "bevel"],
    ve = {
      daojiao: [{ stroke: "#FF6600", tb: 1, rb: "round", sb: "round", Zc: [4, 3] }],
      daojiao_bai: [{ stroke: "#f5f3f0", tb: 1, rb: "round", sb: "round", Zc: [4, 3] }],
      junhuoxian: [],
      lundu: [{ stroke: "#5c91c5", tb: 1, rb: "round", sb: "round", Zc: [10, 11] }],
      shengjie: [],
      weidingguojie: [{ stroke: "#aea08a", tb: 1, rb: "round", sb: "round", Zc: [4, 3] }],
      weidingguojie_guowai: [{ stroke: "#a29e96", tb: 2, rb: "round", sb: "round", Zc: [4, 3] }],
      weidingguojie_guonei: [],
      weidingshengjie_guowai: [],
    },
    we = {
      weidingshengjie_guowai: [{ stroke: "#737373", tb: 1, rb: "round", sb: "round", Zc: [4, 3] }],
      junhuoxian: [{ stroke: "#DB7093", tb: 1.5, rb: "round", sb: "round", Zc: [4, 3] }],
      shengjie: [{ stroke: "#737373", tb: 1, rb: "round", sb: "round", Zc: [10, 4, 5, 4] }],
      weidingguojie_guonei: [{ stroke: "#b2a471", tb: 2, rb: "round", sb: "round", Zc: [4, 3] }],
    },
    xe = {};
  function ye(a, b, c) {
    if (/^tielu|^MapRes\/tielu/.test(a)) {
      if ("off" === window[c + "zoomFrontStyle"][b].bmapRailwayVisibility) return [];
      var e = "#ffffff",
        f = "#949494";
      window[c + "zoomFrontStyle"] &&
        window[c + "zoomFrontStyle"][b] &&
        window[c + "zoomFrontStyle"][b].bmapRailwayStrokeColor &&
        (e = window[c + "zoomFrontStyle"][b].bmapRailwayStrokeColor);
      window[c + "zoomFrontStyle"] &&
        window[c + "zoomFrontStyle"][b] &&
        window[c + "zoomFrontStyle"][b].bmapRailwayFillColor &&
        (f = window[c + "zoomFrontStyle"][b].bmapRailwayFillColor);
      if ((4 <= b && 9 >= b) || (10 <= b && 16 >= b))
        return [
          { stroke: e, tb: 1.5, rb: "butt", sb: "round", Zc: [10, 11] },
          { stroke: f, tb: 2, rb: "round", sb: "round" },
        ];
      if (17 <= b && 18 >= b)
        return [
          { stroke: e, tb: 2.5, rb: "butt", sb: "round", Zc: [15, 16] },
          { stroke: f, tb: 5, rb: "round", sb: "round" },
        ];
      if (19 <= b && 20 >= b)
        return [
          { stroke: e, tb: 4.5, rb: "butt", sb: "round", Zc: [25, 26] },
          { stroke: f, tb: 5, rb: "round", sb: "round" },
        ];
    } else if (0 === a.indexOf("ditie_zj") || 0 === a.indexOf("MapRes/ditie_zj")) {
      if (12 <= b && 16 >= b)
        return [{ stroke: "#868686", tb: 1, rb: "round", sb: "round", Zc: [7, 4] }];
      if ((17 <= b && 18 >= b) || (19 <= b && 20 >= b))
        return [{ stroke: "#6e6e6e", tb: 1, rb: "round", sb: "round", Zc: [7, 4] }];
    } else if (/^tongdaomian|^MapRes\/tongdaomian/.test(a)) {
      if (17 === b)
        return [
          { stroke: "#e5e5e5", tb: 4, rb: "square", sb: "round" },
          { stroke: "#a8a8a8", tb: 6, rb: "square", sb: "round" },
        ];
      if (18 === b)
        return [
          { stroke: "#e5e5e5", tb: 6, rb: "square", sb: "round" },
          { stroke: "#a8a8a8", tb: 8, rb: "square", sb: "round" },
        ];
      if (19 <= b && 21 >= b)
        return [
          { stroke: "#e5e5e5", tb: 8, rb: "square", sb: "round" },
          { stroke: "#a8a8a8", tb: 10, rb: "square", sb: "round" },
        ];
    } else if (
      /^jietizhongduan|^dixiatongdaojieti|^MapRes\/jietizhongduan|^MapRes\/dixiatongdaojieti/.test(
        a,
      )
    ) {
      if (17 === b)
        return [
          { stroke: "#e5e5e5", tb: 4, rb: "butt", sb: "round", Zc: [2, 1] },
          { stroke: "#bebebe", tb: 6, rb: "butt", sb: "round" },
        ];
      if (18 === b)
        return [
          { stroke: "#e5e5e5", tb: 6, rb: "butt", sb: "round", Zc: [3, 1] },
          { stroke: "#bebebe", tb: 8, rb: "butt", sb: "round" },
        ];
      if (19 <= b && 21 >= b)
        return [
          { stroke: "#e5e5e5", tb: 8, rb: "butt", sb: "round", Zc: [4, 2] },
          { stroke: "#bebebe", tb: 10, rb: "butt", sb: "round" },
        ];
    } else if (/^guojietianqiao|^MapRes\/guojietianqiao/.test(a))
      return 18 === b
        ? [
            { stroke: "#ffffff", tb: 6, rb: "butt", sb: "round", Zc: [4, 2] },
            { stroke: "#bebebe", tb: 8, rb: "butt", sb: "round" },
          ]
        : [
            { stroke: "#ffffff", tb: 8, rb: "butt", sb: "round", Zc: [4, 2] },
            { stroke: "#bebebe", tb: 10, rb: "butt", sb: "round" },
          ];
    return ve[a] || ve[a.replace("MapRes/", "")];
  }
  var ze = {
    drawLink: function (a, b, c, e, f) {
      this.da = f.P.da;
      var g = a[1];
      g && ((a = a[6]), this.pP(g, c, e, b, a, f, q), this.pP(g, c, e, b, a, f, t));
    },
    pP: function (a, b, c, e, f, g, i) {
      for (var k = 0; k < a.length; k++) {
        var m = a[k][0],
          n = g.Dj(m, "line", b);
        if (n && n.length && (!i || n[0].borderWidth))
          if (!n[0].Hm || ye(n[0].Hm, b, this.da))
            for (var o = a[k][1], p = 0; p < o.length; p++) {
              var v = o[p][3];
              g.Oc(v[0], b) &&
                (v["cache" + b] || (v["cache" + b] = g.hn(v[1], b, c, f)),
                (v = v["cache" + b]),
                g.P.Uo(e.canvas.id, v, { type: "polyline", Yb: m, style: n }),
                this.hX(e, v, n, i, b));
            }
      }
    },
    drawSingleTexture: function (a, b, c, e, f) {
      var g = a[1];
      if (g)
        for (var a = a[6], i = 0; i < g.length; i++) {
          var k = f.Dj(g[i][0], "line", c);
          if (k && k.length)
            for (var m = g[i][1], n = 0; n < m.length; n++) {
              var o = m[n][11];
              if (f.Oc(o[0], c)) {
                var p;
                o["cache" + c] || (o["cache" + c] = f.hn(o[1], c, e, a));
                p = o["cache" + c];
                o = o[3];
                o *= Math.pow(2, c - f.R1[c].Tc);
                this.iX(b, p, k, o, f);
              }
            }
        }
    },
    iX: function (a, b, c, e, f) {
      var g = c[0].Hm,
        i = this;
      if (xe[g]) i.ct(b, e, a, xe[g]);
      else if ((c = f.ZL(g))) {
        var k = new Image();
        k.onload = function () {
          xe[g] = k;
          i.ct(b, e, a, k);
          k.onload = s;
        };
        k.src = c;
      }
    },
    ct: function (a, b, c, e) {
      var f = [a[0], a[1]],
        g = [a[2], a[3]],
        a = g[0] - f[0],
        g = g[1] - f[1],
        f = [f[0] + a / 2, f[1] + g / 2],
        i = Math.sqrt(a * a + g * g),
        b = b / 10,
        a = Math.atan2(g, a);
      c.save();
      c.translate(f[0], f[1]);
      c.rotate(Math.PI / 2 + a);
      c.drawImage(e, -b / 2, -i / 2, b, i);
      c.restore();
    },
    hX: function (a, b, c, e, f) {
      c = c[0];
      if (!e && c.Hm) {
        var f = ye(c.Hm, f, this.da),
          g = we[c.Hm] || we[c.Hm.replace("MapRes/", "")];
        if (g) {
          this.rL(a, b, c, g, q);
          return;
        }
        if (f) {
          this.rL(a, b, c, f, t);
          return;
        }
      }
      a.beginPath();
      a.moveTo(b[0], b[1]);
      f = 2;
      for (g = b.length; f < g; f += 2) a.lineTo(b[f], b[f + 1]);
      c.borderWidth && e
        ? ((a.strokeStyle = c.ap),
          (a.lineCap = te[c.OV]),
          (a.lineJoin = ue[1]),
          (a.lineWidth = c.borderWidth / 2),
          a.stroke())
        : e ||
          ((a.strokeStyle = c.Bx),
          (a.lineCap = te[c.CX]),
          (a.lineJoin = ue[1]),
          (a.lineWidth = c.EL / 2),
          a.stroke());
    },
    rL: function (a, b, c, e, f) {
      if ((c = e[1])) {
        a.strokeStyle = c.stroke;
        a.lineCap = c.rb;
        a.lineJoin = c.sb;
        a.lineWidth = c.tb;
        a.beginPath();
        a.moveTo(b[0], b[1]);
        for (var c = 2, g = b.length; c < g; c += 2) a.lineTo(b[c], b[c + 1]);
        a.stroke();
      }
      if ((e = e[0]))
        if (e.Zc) f ? this.jX(a, b, e) : this.fX(a, b, e);
        else {
          a.strokeStyle = e.stroke;
          a.lineCap = e.rb;
          a.lineJoin = e.sb;
          a.lineWidth = e.tb;
          a.beginPath();
          a.moveTo(b[0], b[1]);
          c = 2;
          for (g = b.length; c < g; c += 2) a.lineTo(b[c], b[c + 1]);
          a.stroke();
        }
    },
    jX: function (a, b, c) {
      a.strokeStyle = c.stroke;
      a.lineCap = c.rb;
      a.lineJoin = c.sb;
      a.lineWidth = c.tb;
      a.setLineDash(c.Zc);
      a.beginPath();
      for (c = 0; c < b.length - 2; c += 2) a.lineTo(b[c], b[c + 1]);
      a.stroke();
      a.setLineDash([]);
    },
    fX: function (a, b, c) {
      a.strokeStyle = c.stroke;
      a.lineCap = c.rb;
      a.lineJoin = c.sb;
      a.lineWidth = c.tb;
      var e = q,
        c = c.Zc[0];
      a.beginPath();
      for (var f = 0; f < b.length - 2; f += 2) {
        var g = b[f],
          i = b[f + 1],
          k = b[f + 2] - g,
          m = b[f + 3] - i,
          n = 0 !== k ? m / k : 0 < m ? 1e15 : -1e15,
          m = Math.sqrt(k * k + m * m),
          o = c;
        for (a.moveTo(g, i); 0.1 <= m; ) {
          o > m && (o = m);
          var p = Math.sqrt((o * o) / (1 + n * n));
          0 > k && (p = -p);
          g += p;
          i += n * p;
          a[e ? "lineTo" : "moveTo"](g, i);
          m -= o;
          e = !e;
        }
      }
      a.stroke();
    },
  };
  var Ae = 3,
    Be = 4,
    Ce = 7,
    De = 8,
    Ee = 15,
    Fe = 16,
    Ge = {},
    He = {},
    Ie = {},
    Je,
    Ke = {
      3: { start: 3, Tc: 3 },
      4: { start: 4, Tc: 5 },
      5: { start: 4, Tc: 5 },
      6: { start: 6, Tc: 7 },
      7: { start: 6, Tc: 7 },
      8: { start: 8, Tc: 9 },
      9: { start: 8, Tc: 9 },
      10: { start: 10, Tc: 10 },
      11: { start: 11, Tc: 12 },
      12: { start: 11, Tc: 12 },
      13: { start: 11, Tc: 12 },
      14: { start: 14, Tc: 15 },
      15: { start: 14, Tc: 15 },
      16: { start: 16, Tc: 17 },
      17: { start: 16, Tc: 17 },
      18: { start: 18, Tc: 19 },
      19: { start: 18, Tc: 19 },
      20: { start: 18, Tc: 19 },
      21: { start: 18, Tc: 19 },
    };
  function Le(a) {
    this.P = a;
    this.Lc = a.M.devicePixelRatio;
    this.R1 = Ke;
  }
  Le.prototype = {
    lD: function (a, b, c, e, f, g, i, k, m) {
      this.P.VO = {};
      var n = this,
        o = n.P.da;
      m || (m = 0);
      if (!window[o + "StyleBody"] && 100 > m)
        setTimeout(function () {
          n.lD(a, b, c, e, f, g, i, k, m + 1);
        }, 100);
      else {
        Je || (Je = k);
        var p = b.getContext("2d"),
          v = b.parentNode;
        v.removeChild(b);
        p.clearRect(0, 0, g, g);
        v.appendChild(b);
        v = this.Lc;
        1 < v && !b._scale && (p.scale(v, v), (b._scale = q));
        p.fillStyle = this.$N("#F5F3F0");
        window[o + "zoomFrontStyle"][f].bmapLandColor &&
          (p.fillStyle = this.$N(window[o + "zoomFrontStyle"][f].bmapLandColor));
        o = b.style.width;
        b.style.width = "0px";
        b.style.width = o;
        (o = Me.LY(c, g, i)) ? p.fillRect(o[0], o[1], o[2], o[3]) : p.fillRect(0, 0, g, g);
        if (a[0])
          for (v = 0; v < a[0].length; v++) {
            var w = a[0][v];
            w[0] === Ce && pe.drawPoly(w, p, f, g, this);
          }
        o && (0 < o[0] ? p.clearRect(0, 0, o[0], g) : p.clearRect(o[2], 0, g, g));
        17 <= this.P.la()
          ? (n.pL(a, p, f, g, i, c, e), (b.io = q))
          : setTimeout(function () {
              if (!b.RH) {
                n.pL(a, p, f, g, i, c, e);
                b.io = q;
              }
            }, 1);
      }
    },
    pL: function (a, b, c, e) {
      var f = this.P.da;
      if (a[0])
        for (var g = 0; g < a[0].length; g++) {
          var i = a[0][g],
            k = i[0];
          k === Be
            ? ze.drawLink(i, b, c, e, this)
            : k === Fe
            ? ze.drawLink(i, b, c, e, this)
            : k === Ee
            ? (pe.drawGaoqingRoadBorder(i, b, c, e, this), pe.drawGaoqingRoadFill(i, b, c, e, this))
            : 18 === k
            ? window[f + "zoomFrontStyle"] &&
              window[f + "zoomFrontStyle"][c] &&
              "off" !== window[f + "zoomFrontStyle"][c].bmapRoadarrowVisibility &&
              qe.drawArrow(i, b, c, e, Math.pow(2, c - Ke[c].Tc), this)
            : k === De
            ? re.drawHregion(i, b, c, e, this)
            : 19 === k && ze.drawSingleTexture(i, b, c, e, this);
        }
    },
    oL: function (a, b, c, e, f, g, i) {
      var k = this,
        m = k.P.da;
      i || (i = 0);
      !window[m + "StyleBody"] && 100 > i
        ? setTimeout(function () {
            k.oL(a, b, c, e, f, g, i + 1);
          }, 100)
        : (Je || (Je = b), (a.w_ = se.parse(a, c, e, this, f)));
    },
    Dj: function (a, b, c, e) {
      var f = a + "-" + b + "-" + c;
      if (e) return Ge[f] || (Ge[f] = this.wf(a, b, c, e)), Ge[f];
      this.P.VO[f] = this.wf(a, b, c);
      return this.P.VO[f];
    },
    wf: function (a, b, c, e) {
      var f = this.P.da,
        g;
      g = e || window[f + "_bmap_baseFs"];
      f = window[f + "StyleBody"];
      e = g[2];
      if ("arrow" === b) return this.l_(e[2]);
      switch (b) {
        case "point":
          e = e[0];
          f = f[0] || {};
          break;
        case "pointText":
          e = e[1];
          f = f[1] || {};
          break;
        case "line":
          e = e[3];
          f = f[3] || {};
          break;
        case "polygon":
          e = e[4];
          f = f[4] || {};
          break;
        case "polygon3d":
          (e = e[5]), (f = f[5] || {});
      }
      var i = [],
        c = g[1][c - 1][0][a];
      if (!c) return i;
      for (g = 0; g < c.length; g++) {
        var k = f[c[g]] || e[c[g]];
        if (k) {
          switch (b) {
            case "polygon":
              k = this.u_(k, a);
              break;
            case "line":
              k = this.q_(k, a);
              break;
            case "pointText":
              k = this.s_(k, a);
              break;
            case "point":
              k = this.r_(k, a);
              break;
            case "polygon3d":
              k = this.t_(k, a);
          }
          k.Y6 = c[g];
          i[i.length] = k;
        }
      }
      return i;
    },
    s_: function (a, b) {
      return {
        Yb: b,
        IL: this.Og(a[0]),
        AM: this.Og(a[1]),
        p3: this.Og(a[2]),
        fontSize: a[3],
        Ux: a[4],
        fontWeight: a[5],
        fontStyle: a[6],
        PW: a[7],
      };
    },
    r_: function (a, b) {
      return { Yb: b, Py: a[0], q7: a[1], De: a[2], bZ: a[3], Z5: a[4], PW: a[5], zoom: a[6] };
    },
    q_: function (a, b) {
      return {
        Yb: b,
        ap: this.Og(a[0]),
        Bx: this.Og(a[1]),
        borderWidth: a[2],
        EL: a[3],
        OV: a[4],
        CX: a[5],
        g5: a[6],
        h5: a[7],
        i5: a[8],
        B5: a[9],
        C5: a[10],
        PV: a[11],
        Hm: a[12],
        QV: a[13],
        c4: a[14],
        z5: a[15],
        e5: a[16],
        Y5: a[17],
        D6: a[18],
      };
    },
    u_: function (a, b) {
      return {
        Yb: b,
        Bx: this.Og(a[0]),
        ap: this.Og(a[1]),
        borderWidth: a[2],
        PV: a[3],
        QV: a[4],
        z7: a[5],
        d5: a[6],
        c7: a[7],
        d7: this.Og(a[8]),
      };
    },
    t_: function (a, b) {
      return {
        Yb: b,
        filter: a[0],
        kO: a[1],
        f5: a[2],
        borderWidth: a[3],
        ap: this.Og(a[4]),
        DX: this.Og(a[5]),
        b4: this.Og(a[6]),
        p6: a[7],
      };
    },
    l_: function (a) {
      for (var b in a) return (a = a[b]), { color: this.Og(a[0]), bZ: a[1], De: a[2] };
    },
    Og: function (a) {
      var b = a;
      if (Ie[b]) return Ie[b];
      a >>>= 0;
      Ie[b] =
        "rgba(" +
        (a & 255) +
        "," +
        ((a >> 8) & 255) +
        "," +
        ((a >> 16) & 255) +
        "," +
        ((a >> 24) & 255) / 255 +
        ")";
      return Ie[b];
    },
    $N: function (a) {
      a = a.replace("#", "");
      6 === a.length && (a += "ff");
      for (var b = "rgba(", c = 0; 8 > c; c += 2)
        b =
          6 > c
            ? b + (parseInt(a.slice(c, c + 2), 16) + ",")
            : b + (parseInt(a.slice(c, c + 2), 16) / 255 + ")");
      return b;
    },
    Oc: function (a, b) {
      var c;
      He[a] ||
        ((c = a.toString(2)),
        8 > c.length && (c = Array(8 - c.length + 1).join("0") + c),
        (He[a] = c));
      c = He[a];
      return "1" === c[b - Ke[b].start];
    },
    hn: function (a, b, c) {
      var e = [],
        b = Math.pow(2, b - Ke[b].Tc) / 100,
        f = a[0] * b,
        g = a[1] * b;
      e[e.length] = f;
      e[e.length] = c - g;
      for (var i = 2; i < a.length; i += 2)
        (f += a[i] * b), (g += a[i + 1] * b), (e[e.length] = f), (e[e.length] = c - g);
      return e;
    },
    ZL: function (a) {
      if (a) {
        var b = a.length % Je.length,
          c = this.hY();
        return Je[b] + a + ".png?v=" + c.wG + "&udt=" + c.sG;
      }
    },
    hY: function () {
      if (this.AE) return this.AE;
      var a = "undefined" !== typeof MSV ? MSV.mapstyle : {};
      return (this.AE = { wG: a.version ? a.version : "001", sG: a.o1 ? a.o1 : "20150621" });
    },
  };
  R = z.lang.cv;
  Ae = 3;
  Be = 4;
  Ce = 7;
  De = 8;
  Ee = 15;
  Fe = 16;
  function Xd(a, b, c) {
    c = c || {};
    this.P = a;
    this.Jw = b;
    this.Lc = b.kO;
    this.fb = {
      V0: "na",
      zIndex: 0,
      bP: c.tileUrls || {
        http: [
          "http://maponline0.bdimg.com/pvd/?qt=vtile",
          "http://maponline1.bdimg.com/pvd/?qt=vtile",
          "http://maponline2.bdimg.com/pvd/?qt=vtile",
          "http://maponline3.bdimg.com/pvd/?qt=vtile",
          "http://maponline0.bdimg.com/pvd/?qt=vtile",
        ],
        https: [
          "https://maponline0.bdimg.com/pvd/?qt=vtile",
          "https://maponline1.bdimg.com/pvd/?qt=vtile",
          "https://maponline2.bdimg.com/pvd/?qt=vtile",
          "https://maponline3.bdimg.com/pvd/?qt=vtile",
          "https://maponline0.bdimg.com/pvd/?qt=vtile",
        ],
      },
      zE: c.iconUrls || [
        "https://maponline0.bdimg.com/sty/map_icons2x/",
        "https://maponline1.bdimg.com/sty/map_icons2x/",
      ],
      WF: q,
    };
    this.bC = "";
    this.xT = {};
    var c = c.urlOpts || { styles: "pl", extdata: 1, textimg: 0, mesh3d: 0, limit: 30 },
      e;
    for (e in c) c.hasOwnProperty(e) && (this.bC = this.bC + "&" + e + "=" + c[e]);
    this.th = {};
    this.Os = [];
    this.Vt = 0;
    this.jy = t;
    this.by = {};
    a = this.fb.V0;
    ie[a] ? (a = ie[a]) : ((b = new je(a, l)), (a = ie[a] = b));
    this.Id = a;
    this.P.Id = this.Id;
  }
  window.VectorIndoorTileLayer = "VectorIndoorTileLayer";
  fa = Xd.prototype;
  fa.za = function () {
    var a = this.P,
      b = a.gf;
    if (!this.Qo) {
      var c = b.kr(this.fb.zIndex);
      c.style.WebkitTransform = "translate3d(0px, 0px, 0)";
      this.Qo = c;
    }
    b.og.appendChild(this.Qo);
    b.t5 = c;
    if (this.fb.WF) {
      Ne(this);
      var e = this;
      a.addEventListener("checkvectorclick", function (a) {
        var b;
        a: {
          b = a.offsetX;
          var c = a.offsetY,
            k = e.Os.w_;
          if (k)
            for (var m = 0; m < k.length; m++)
              for (var n = k[m], o = 0; o < n.length; o++)
                if (((a = n[o]), !a.Ot && a.Jt && b > a.cg && b < a.Ci && c > a.dg && c < a.Di)) {
                  b = a.Jt;
                  b = {
                    type: 9,
                    name: a.name,
                    uid: a.uid,
                    point: { x: b.je + b.width / 2, y: b.ke + 6 },
                  };
                  break a;
                }
          b = s;
        }
        b && ((a = new R("onvectorclick")), (a.p5 = b), (a.Ye = "base"), this.dispatchEvent(a));
      });
    }
  };
  function Ne(a) {
    var b = a.P,
      c = b.gf,
      e = a.Lc,
      f = b.wb(),
      g = f.width,
      f = f.height,
      i = I("canvas");
    i.style.cssText =
      "position: absolute;left:0;top:0;width:" + g + "px;height:" + f + "px;z-index:2;";
    i.width = g * e;
    i.height = f * e;
    a.ny = i;
    a.Tp = i.getContext("2d");
    a.Tp.scale(e, e);
    a.Tp.textBaseline = "top";
    c.og.appendChild(i);
    b.hT = i;
  }
  fa.MY = u("Id");
  fa.update = function (a, b) {
    b = b || {};
    this.tG = b.tG;
    b.Gm && (this.p1 = b.Gm);
    if (this.fb.WF && (b.xm && this.xm(), b.D0)) {
      var c = this.Lc,
        e = this.P.wb(),
        f = e.width,
        e = e.height,
        g = this.ny,
        i = g.style;
      i.width = f + "px";
      i.height = e + "px";
      g.width = f * c;
      g.height = e * c;
      this.Tp.scale(c, c);
      this.Tp.textBaseline = "top";
    }
    if (b.t7) {
      c = this.Qo;
      f = 0;
      for (e = c.childNodes.length; f < e; f++) c.childNodes[f].io = t;
    }
    this.px = a;
    this.Wp(a);
  };
  fa.Wp = function (a) {
    this.Os = [];
    var b = this.P,
      c = b.la(),
      e = b.Dc.zi(b.ie),
      f = this.Id.Wb(c),
      e = [Math.round(-e.lng / f), Math.round(e.lat / f)],
      f = this.Id.me(c),
      g = b.da.replace(/^TANGRAM_/, ""),
      i = this.Id.Bp(c),
      b = this.P,
      k = -b.offsetY + b.height / 2,
      m = this.Qo;
    m.style.left = -b.offsetX + b.width / 2 + "px";
    m.style.top = k + "px";
    this.Ve ? (this.Ve.length = 0) : (this.Ve = []);
    b = 0;
    for (k = m.childNodes.length; b < k; b++) {
      var n = m.childNodes[b];
      n.Ir = t;
      this.Ve.push(n);
    }
    if ((b = this.fn)) for (var o in b) delete b[o];
    else this.fn = {};
    this.We ? (this.We.length = 0) : (this.We = []);
    b = 0;
    for (k = a.length; b < k; b++) {
      var n = a[b][0],
        p = a[b][1];
      o = Me.wm(a[b][0], a[b][2], a[b][3], c);
      o.offsetX && ((a[b][0] = o.qh), (a[b][4] = n), (a[b][5] = o.offsetX));
      n = a[b][0];
      o = 0;
      for (var v = this.Ve.length; o < v; o++) {
        var w = this.Ve[o];
        if (w.id === g + "_" + n + "_" + p + "_" + i + "_" + c) {
          w.Ir = q;
          this.fn[w.id] = w;
          break;
        }
      }
    }
    b = 0;
    for (k = this.Ve.length; b < k; b++)
      (w = this.Ve[b]), w.Ir || ((w.fC = s), delete w.fC, (w.io = t), this.We.push(w));
    o = [];
    v = f * this.Lc;
    b = 0;
    for (k = a.length; b < k; b++) {
      var n = a[b][0],
        p = a[b][1],
        w = a[b][4] ? a[b][4] * f + e[0] + a[b][5] : n * f + e[0],
        A = (-1 - p) * f + e[1],
        B = g + "_" + n + "_" + p + "_" + i + "_" + c,
        D = this.fn[B],
        F = s;
      if (D)
        (F = D.style),
          (F.left = w + "px"),
          (F.top = A + "px"),
          (F.width = f + "px"),
          (F.height = f + "px"),
          D.io
            ? D.jG && D.jG && this.Os.push(D.jG)
            : ((D.RH = q), (D.fC = s), delete D.fC, o.push([n, p, D]));
      else {
        if (0 < this.We.length) {
          var D = this.We.shift(),
            H = D.getContext("2d");
          D.getAttribute("width") !== v && (D._scale = t);
          D.setAttribute("width", v);
          D.setAttribute("height", v);
          F = D.style;
          F.width = f + "px";
          F.height = f + "px";
          H.clearRect(0, 0, v, v);
        } else
          (D = document.createElement("canvas")),
            (F = D.style),
            (F.position = "absolute"),
            this.fb.backgroundColor && (F.background = this.fb.backgroundColor),
            (F.width = f + "px"),
            (F.height = f + "px"),
            D.setAttribute("width", v),
            D.setAttribute("height", v),
            m.appendChild(D);
        D.id = B;
        F.left = w + "px";
        F.top = A + "px";
        o.push([n, p, D]);
      }
      D.style.visibility = "";
    }
    b = 0;
    for (k = this.We.length; b < k; b++) this.We[b].style.visibility = "hidden";
    if (0 === o.length) {
      Oe(this);
      a = this.P.da.replace(/^TANGRAM_/, "");
      c = this.P.la();
      e = this.Id.Bp(c);
      f = {};
      for (g = 0; g < this.px.length; g++)
        (i = this.px[g]),
          (i = a + "_" + i[0] + "_" + i[1] + "_" + e + "_" + c),
          this.th[i] &&
            ((f[i] = this.th[i]),
            this.tG &&
              this.Jw.mD.lD(
                this.th[i].C1,
                this.th[i].T0,
                this.th[i].qh,
                this.th[i].qn,
                this.th[i].$E,
                this.Id.me(this.th[i].$E),
                this.Id.iE(this.th[i].$E),
                this.fb.zE,
              ));
      this.th = f;
    } else {
      this.Vt = o.length;
      this.jy = t;
      c = this.Id.Bp(this.P.la());
      for (e = 0; e < a.length; e++) a[e][3] = c;
      for (e = 0; e < o.length; e++)
        (a = o[e][2]),
          (f = o[e][0]),
          (g = o[e][1]),
          (o[e][3] = c),
          (a.io = t),
          (a.RH = t),
          Pe(this, f, g, c, a);
    }
  };
  function Pe(a, b, c, e, f) {
    var g = b + "_" + c + "_" + e,
      i = a.xT;
    if (i[g]) {
      if ("loading" === i[g].status) return;
    } else i[g] = { status: "init", rO: 0 };
    var k = a,
      m = k.P,
      n = [],
      n = "0" === C.Uu ? k.fb.bP.http : k.fb.bP.https,
      o = Math.abs(b + c) % n.length,
      p = "x=" + b + "&y=" + c + "&z=" + e,
      v = Qe(a.Jw),
      w = v.wG,
      v = v.sG,
      A =
        "_" +
        (0 > b ? "_" : "") +
        (0 > c ? "$" : "") +
        parseInt(Math.abs(b) + "" + Math.abs(c) + "" + e, 10).toString(36),
      p = p + a.bC + "v=" + w + "&udt=" + v + "&fn=window." + A,
      w = n[o] + "&" + p,
      w = n[o] + "&param=" + window.encodeURIComponent(Vb(p));
    window[A] = function (a) {
      clearTimeout(i[g].ml);
      i[g] = s;
      if (a) {
        var n = m.la(),
          o;
        a: {
          for (o = 0; o < k.px.length; o++) {
            var p = k.px[o];
            if (p[0] === b && p[1] === c && p[3] === e) {
              o = q;
              break a;
            }
          }
          o = t;
        }
        if (o !== t) {
          o = new R("updateindoor");
          o.IndoorCanvas = [];
          o.IndoorCanvas.push({ canvasDom: f, data: a, canvasID: f.id, ratio: k.Lc });
          m.dispatchEvent(o);
          if (m.M.Gk) {
            if (
              ((k.th[f.id] = { C1: a, T0: f, qh: b, qn: c, $E: n }),
              k.Jw.mD.lD(a, f, b, c, n, k.Id.me(n), k.Id.iE(n), k.fb.zE),
              k.fb.WF)
            ) {
              n = [];
              n.U0 = [b, c, e];
              if (a[0])
                for (o = 0; o < a[0].length; o++) a[0][o][0] === Ae && n.push({ bN: a[0][o] });
              if (a[2]) for (o = 0; o < a[2].length; o++) n.push({ FZ: a[2][o] });
              f.jG = n;
              k.Os.push(n);
              k.jy === t && k.Vt--;
              (0 === k.Vt || k.jy === q) && Oe(k);
            }
          } else k.Vt--, (0 === k.Vt || k.jy === q) && Oe(k);
          delete window[A];
        }
      }
    };
    ra(w);
    i[g].status = "loading";
    k = a;
    i[g].ml = setTimeout(function () {
      3 > i[g].rO ? (i[g].rO++, (i[g].status = "init"), Pe(k, b, c, e, f)) : (i[g] = s);
    }, 4e3);
  }
  function Oe(a) {
    if (a.ny) {
      var b = a.P;
      a.ny.style.left = -b.offsetX + "px";
      a.ny.style.top = -b.offsetY + "px";
      var c = new R("updateindoorlabel");
      c.labelCanvasDom = b.hT;
      b.dispatchEvent(c);
      if (b.M.Gk) {
        a.xm();
        var c = a.Id,
          e = b.la(),
          f = c.Bp(b.la());
        a.Jw.mD.oL(a.Os, a.fb.zE, a.Tp, c.me(e), Math.pow(2, e - f), e);
        "moving" !== a.p1 && b.dispatchEvent(new R("ontilesloaded"));
      }
    }
  }
  fa.xm = function () {
    var a = this.P.wb(),
      b = this.Lc;
    this.Tp.clearRect(0, 0, a.width * b, a.height * b);
  };
  fa.remove = function () {
    var a = this.P.gf;
    this.Qo && a.og.removeChild(this.Qo);
  };
  function Wd(a) {
    this.P = a.map;
    this.lf = [];
    this.qs = {};
    this.kO = this.P.M.devicePixelRatio;
    this.mD = new Le(this.P);
    this.za();
  }
  window.VectorIndoorTileMgr = "VectorIndoorTileMgr";
  fa = Wd.prototype;
  fa.za = function () {
    var a = this,
      b = this.P;
    b.addEventListener("addtilelayer", function (b) {
      a.Ue(b.target);
    });
    b.addEventListener("removetilelayer", function (b) {
      a.gg(b.target);
    });
    setTimeout(function () {
      b.addEventListener("onmoveend", function (b) {
        "centerAndZoom" !== b.nA && a.update({ Gm: "moveend" });
      });
      b.addEventListener("onmoving", function () {
        a.update({ Gm: "moving" });
      });
      b.addEventListener("onzoomend", function (b) {
        "centerAndZoom" !== b.nA && a.update({ xm: q, Gm: "zoomend" });
      });
      b.addEventListener("centerandzoom", function () {
        a.update({ xm: q, Gm: "centerandzoom" });
      });
      b.addEventListener("onupdatestyles", function () {
        a.update({ xm: q, tG: q, Gm: "updatestyles" });
        a.P.Bf(a.P.Hb());
        setTimeout(function () {
          a.P.dispatchEvent(new R("onvectordrawend"));
        }, 10);
      });
      b.addEventListener("onmaptypechange", function (b) {
        b.Wa === Sa && a.update({ xm: q, Gm: "maptypechange" });
      });
    }, 1);
    b.addEventListener("indoor_data_refresh", ba());
    b.addEventListener("onresize", function () {
      a.update({ D0: q });
    });
    a.update();
  };
  fa.Ue = function (a) {
    if (a instanceof Xd) {
      for (var b = 0; b < this.lf.length; b++) if (this.lf[b] === a) return;
      this.lf.push(a);
      a.za();
      this.P.loaded && this.update();
    }
  };
  fa.gg = function (a) {
    if (a instanceof Xd) {
      for (var b = 0; b < this.lf.length; b++)
        if (this.lf[b] === a) {
          this.lf.splice(b, 1);
          break;
        }
      a.remove();
    }
  };
  fa.qM = function (a) {
    var b = a.getName();
    if (this.qs[b]) return this.qs[b];
    var c = this.P,
      e = c.la(),
      f = a.Bp(e),
      g = c.Jb,
      g = Me.zC(g),
      i = a.iE(Math.floor(e)),
      a = a.SX(e);
    c.da.replace(/^TANGRAM_/, "");
    var e = Math.ceil(g.lng / i),
      g = Math.ceil(g.lat / i),
      k = 0,
      m = 0,
      n = c.UX(),
      n = Me.YV(n, c.Jb);
    n.mf.lng > Me.rg && ((c = Me.iM(f)), (k = Math.ceil(c / a)));
    n.pf.lng < Me.gh && ((c = Me.iM(f)), (m = Math.ceil(c / a)));
    if (1.9505879362428114e7 < n.mf.lat || -1.5949096637571886e7 > n.pf.lat)
      (n.mf.lat = 1.9505879362428114e7), (n.pf.lat = -1.5949096637571886e7);
    for (
      var c = [Math.floor(n.pf.lng / i) - m, Math.floor(n.pf.lat / i)],
        o = [Math.floor(n.mf.lng / i) + k, Math.floor(n.mf.lat / i)],
        k = [],
        n = o[0] + 1,
        m = c[1],
        o = o[1] + 1,
        c = c[0];
      c < n;
      c++
    )
      if (Me.ky(c, f, a) !== q) for (var p = m; p < o; p++) k.push([c, p, f, a]);
    k = Me.AC(k, f, a, i);
    k.sort(
      (function (a) {
        return function (b, c) {
          return (
            0.4 * Math.abs(b[0] - a[0]) +
            0.6 * Math.abs(b[1] - a[1]) -
            (0.4 * Math.abs(c[0] - a[0]) + 0.6 * Math.abs(c[1] - a[1]))
          );
        };
      })([e, g]),
    );
    this.qs[b] = k;
    return this.qs[b];
  };
  function Qe(a) {
    if (a.xG) return a.xG;
    a.xG = { wG: "001", sG: dc("normal") };
    return a.xG;
  }
  fa.update = function (a) {
    this.qs = {};
    for (var b = 0; b < this.lf.length; b++) {
      var c = this.lf[b],
        e = this.qM(c.Id);
      c.update(e, a);
    }
  };
  function Re(a, b, c) {
    this.cd = a;
    this.lf = b instanceof Yd ? [b] : b.slice(0);
    c = c || {};
    this.m = {
      X0: c.tips || "",
      UE: "",
      kc: c.minZoom || 4,
      qc: c.maxZoom || 18,
      n5: c.minZoom || 4,
      m5: c.maxZoom || 18,
      Nu: 256,
      iG: c.textColor || "black",
      GD: c.errorImageUrl || "",
      hb: new pb(new S(-21364736, -16023552), new S(23855104, 19431424)),
      Dc: c.projection || new U(),
    };
    1 <= this.lf.length && (this.lf[0].$w = q);
    z.extend(this.m, c);
  }
  z.extend(Re.prototype, {
    getName: u("cd"),
    Dt: function () {
      return this.m.X0;
    },
    H4: function () {
      return this.m.UE;
    },
    KY: function () {
      return this.lf[0];
    },
    X4: u("lf"),
    me: function () {
      return this.m.Nu;
    },
    uf: function () {
      return this.m.kc;
    },
    Ze: function () {
      return this.m.qc;
    },
    setMaxZoom: function (a) {
      this.m.qc = a;
    },
    Rm: function () {
      return this.m.iG;
    },
    Bj: function () {
      return this.m.Dc;
    },
    A4: function () {
      return this.m.GD;
    },
    me: function () {
      return this.m.Nu;
    },
    Wb: function (a) {
      return Math.pow(2, 18 - a);
    },
    vM: function (a) {
      return this.Wb(a) * this.me();
    },
    RF: function (a) {
      this.Bj().BO(a);
    },
  });
  var Se = [
      C.url.proto + C.url.domain.TILE_BASE_URLS[0],
      C.url.proto + C.url.domain.TILE_BASE_URLS[1],
      C.url.proto + C.url.domain.TILE_BASE_URLS[2],
      C.url.proto + C.url.domain.TILE_BASE_URLS[3],
    ],
    Te = [
      C.url.proto + C.url.domain.TILE_ONLINE_URLS[0] + "/tile/",
      C.url.proto + C.url.domain.TILE_ONLINE_URLS[1] + "/tile/",
      C.url.proto + C.url.domain.TILE_ONLINE_URLS[2] + "/tile/",
      C.url.proto + C.url.domain.TILE_ONLINE_URLS[3] + "/tile/",
    ],
    Xe = { dark: "dl", light: "ll", normal: "pl" },
    Ye = new Yd();
  Ye.PO = q;
  Ye.getTilesUrl = function (a, b, c) {
    var e = a.x,
      a = a.y,
      f = dc("normal"),
      g = 1,
      c = Xe[c];
    this.map.ay() && (g = 2);
    e = this.map.gf.wm(e, b).qh;
    // return (
    //   Te[Math.abs(e + a) % Te.length] +  // 这一行等于：'http://maponline1.bdimg.com/tile/'
    //   "?qt=vtile&x=" +
    //   (e + "").replace(/-/gi, "M") +
    //   "&y=" +
    //   (a + "").replace(/-/gi, "M") +
    //   "&z=" +
    //   b +
    //   "&styles=" +
    //   c +
    //   "&scaler=" +
    //   g +
    //   (6 == z.ga.oa ? "&color_dep=32&colors=50" : "") +
    //   "&udt=" +
    //   f +
    //   "&from=jsapi3_0"
    // ).replace(/-(\d+)/gi, "M$1");
    var tdir = (BMAP_CONFIG.tiles_dir.length > 0) ? BMAP_CONFIG.tiles_dir : BMAP_CONFIG.home + "tiles";
    return tdir + "/normal" + "/" + b + "/" + e + "/" + a + BMAP_CONFIG.normal_imgext; // 使用本地的瓦片
  };
  var Sa = new Re("\u5730\u56fe", Ye, {
      tips: "\u663e\u793a\u666e\u901a\u5730\u56fe",
      maxZoom: 19,
    }),
    Ze = new Yd();
  Ze.$O = [
    C.url.proto + C.url.domain.TIlE_PERSPECT_URLS[0] + "/resource/mappic/",
    C.url.proto + C.url.domain.TIlE_PERSPECT_URLS[1] + "/resource/mappic/",
    C.url.proto + C.url.domain.TIlE_PERSPECT_URLS[2] + "/resource/mappic/",
    C.url.proto + C.url.domain.TIlE_PERSPECT_URLS[3] + "/resource/mappic/",
  ];
  Ze.getTilesUrl = function (a, b) {
    var c = a.x,
      e = a.y,
      f = 256 * Math.pow(2, 20 - b),
      e = Math.round((9998336 - f * e) / f) - 1;
    return (url =
      this.$O[Math.abs(c + e) % this.$O.length] +
      this.map.Qb +
      "/" +
      this.map.fx +
      "/3/lv" +
      (21 - b) +
      "/" +
      c +
      "," +
      e +
      ".jpg");
  };
  var Xa = new Re("\u4e09\u7ef4", Ze, {
    tips: "\u663e\u793a\u4e09\u7ef4\u5730\u56fe",
    minZoom: 15,
    maxZoom: 20,
    textColor: "white",
    projection: new rb(),
  });
  Xa.Wb = function (a) {
    return Math.pow(2, 20 - a);
  };
  Xa.Lk = function (a) {
    if (!a) return "";
    var b = L.FC,
      c;
    for (c in b) if (-1 < a.search(c)) return b[c].Iy;
    return "";
  };
  Xa.SL = function (a) {
    return { bj: 2, gz: 1, sz: 14, sh: 4 }[a];
  };
  var $e = new Yd({ $w: q });
  $e.getTilesUrl = function (a, b) {
    var c = a.x,
      e = a.y;
    // return (
    //   Se[Math.abs(c + e) % Se.length] +
    //   "u=x=" +
    //   c +
    //   ";y=" +
    //   e +
    //   ";z=" +
    //   b +
    //   ";v=009;type=sate&fm=46&udt=" +
    //   dc("satellite")
    // ).replace(/-(\d+)/gi, "M$1");
    var tdir = BMAP_CONFIG.tiles_dir.length > 0 ? BMAP_CONFIG.tiles_dir : BMAP_CONFIG.home + "tiles";
    return tdir + "/satellite/" + b + "/" + c + "/" + e + BMAP_CONFIG.satellite_imgext; // 使用本地的瓦片
  };
  var $a = new Re("\u536b\u661f", $e, {
      tips: "\u663e\u793a\u536b\u661f\u5f71\u50cf",
      minZoom: 4,
      maxZoom: 19,
      textColor: "white",
    }),
    af = new Yd({ transparentPng: q });
  af.getTilesUrl = function (a, b) {
    var c = a.x,
      e = a.y,
      f = dc("satelliteStreet");
    return (
      Te[Math.abs(c + e) % Te.length] +
      "?qt=vtile&x=" +
      (c + "").replace(/-/gi, "M") +
      "&y=" +
      (e + "").replace(/-/gi, "M") +
      "&z=" +
      b +
      "&styles=sl" +
      (6 == z.ga.oa ? "&color_dep=32&colors=50" : "") +
      "&udt=" +
      f
    ).replace(/-(\d+)/gi, "M$1");
  };
  var Za = new Re("\u6df7\u5408", [$e, af], {
    tips: "\u663e\u793a\u5e26\u6709\u8857\u9053\u7684\u536b\u661f\u5f71\u50cf",
    labelText: "\u8def\u7f51",
    minZoom: 4,
    maxZoom: 19,
    textColor: "white",
  });
  var bf = 1,
    X = {};
  window.V1 = X;
  function Y(a, b) {
    z.lang.Ja.call(this);
    this.rd = {};
    this.wn(a);
    b = b || {};
    b.na = b.renderOptions || {};
    this.m = {
      na: {
        Aa: b.na.panel || s,
        map: b.na.map || s,
        Ag: b.na.autoViewport || q,
        qu: b.na.selectFirstResult,
        Tm: b.na.highlightMode,
        jc: b.na.enableDragging || t,
      },
      fu: b.onSearchComplete || ba(),
      PN: b.onMarkersSet || ba(),
      ON: b.onInfoHtmlSet || ba(),
      RN: b.onResultsHtmlSet || ba(),
      NN: b.onGetBusListComplete || ba(),
      MN: b.onGetBusLineComplete || ba(),
      KN: b.onBusListHtmlSet || ba(),
      JN: b.onBusLineHtmlSet || ba(),
      kF: b.onPolylinesSet || ba(),
      jq: b.reqFrom || "",
    };
    this.m.na.Ag =
      "undefined" != typeof b &&
      "undefined" != typeof b.renderOptions &&
      "undefined" != typeof b.renderOptions.autoViewport
        ? b.renderOptions.autoViewport
        : q;
    this.m.na.Aa = z.Ic(this.m.na.Aa);
  }
  z.xa(Y, z.lang.Ja);
  z.extend(Y.prototype, {
    getResults: function () {
      return this.Kc ? this.Yi : this.ka;
    },
    enableAutoViewport: function () {
      this.m.na.Ag = q;
    },
    disableAutoViewport: function () {
      this.m.na.Ag = t;
    },
    wn: function (a) {
      a && (this.rd.src = a);
    },
    xu: function (a) {
      this.m.fu = a || ba();
    },
    setMarkersSetCallback: function (a) {
      this.m.PN = a || ba();
    },
    setPolylinesSetCallback: function (a) {
      this.m.kF = a || ba();
    },
    setInfoHtmlSetCallback: function (a) {
      this.m.ON = a || ba();
    },
    setResultsHtmlSetCallback: function (a) {
      this.m.RN = a || ba();
    },
    Pm: u("Se"),
  });
  var cf = {
    dH: C.dd,
    lb: function (a, b, c, e, f) {
      this.G_(b);
      var g = (1e5 * Math.random()).toFixed(0);
      C._rd["_cbk" + g] = function (b) {
        b.result && b.result.error && 202 === b.result.error
          ? alert(
              "\u8be5AK\u56e0\u4e3a\u6076\u610f\u884c\u4e3a\u5df2\u7ecf\u88ab\u7ba1\u7406\u5458\u5c01\u7981\uff01",
            )
          : b.result && b.result.error && 403 === b.result.error
          ? C.Yp !== s &&
            C.Yp.update(
              "\u672a\u83b7\u5f97\u767e\u5ea6\u5730\u56fe\u5546\u7528\u6388\u6743\uff0c\u53ef\u80fd\u5bfc\u81f4\u90e8\u5206\u5730\u56fe\u8bf7\u6c42\u5931\u8d25\uff0c\u8bf7\u5237\u65b0\u540e\u91cd\u8bd5\u3002",
            )
          : ((c = c || {}), a && a(b, c), delete C._rd["_cbk" + g]);
      };
      e = e || "";
      b = c && c.u1 ? Rb(b, encodeURI) : Rb(b, encodeURIComponent);
      this.dH = c && c.zL ? (c.pO ? c.pO : C.Xp) : C.dd;
      e = this.dH + e + "?" + b + "&ie=utf-8&oue=1&fromproduct=jsapi";
      f || (e += "&res=api");
      window._BMapSecurityConfig || (e += "&ak=" + qa);
      ra(e + ("&callback=BMap._rd._cbk" + g));
    },
    G_: function (a) {
      if (a.qt) {
        var b = "";
        switch (a.qt) {
          case "bt":
            b = "z_qt|bt";
            break;
          case "nav":
            b = "z_qt|nav";
            break;
          case "walk":
            b = "z_qt|walk";
            break;
          case "bse":
            b = "z_qt|bse";
            break;
          case "nse":
            b = "z_qt|nse";
            break;
          case "drag":
            b = "z_qt|drag";
        }
        "" !== b && C.alog("cus.fire", "count", b);
      }
    },
  };
  window.k2 = cf;
  C._rd = {};
  var kb = {};
  window.j2 = kb;
  kb.xF = function (a) {
    a = a.replace(/<\/?[^>]*>/g, "");
    return (a = a.replace(/[ | ]* /g, " "));
  };
  kb.m_ = function (a) {
    return a.replace(
      /([1-9]\d*\.\d*|0\.\d*[1-9]\d*|0?\.0+|0|[1-9]\d*),([1-9]\d*\.\d*|0\.\d*[1-9]\d*|0?\.0+|0|[1-9]\d*)(,)/g,
      "$1,$2;",
    );
  };
  kb.n_ = function (a, b) {
    return a.replace(
      RegExp(
        "(((-?\\d+)(\\.\\d+)?),((-?\\d+)(\\.\\d+)?);)(((-?\\d+)(\\.\\d+)?),((-?\\d+)(\\.\\d+)?);){" +
          b +
          "}",
        "ig",
      ),
      "$1",
    );
  };
  var df = 2,
    ef = 6,
    ff = 8,
    gf = 2,
    hf = 3,
    jf = 6,
    kf = 0,
    lf = "bt",
    mf = "nav",
    nf = "walk",
    of = "bl",
    pf = "bsl",
    qf = "ride",
    rf = 15,
    sf = 18;
  C.I = window.Instance = z.lang.Uc;
  function tf(a, b, c) {
    z.lang.Ja.call(this);
    if (a) {
      this.$a = "object" == typeof a ? a : z.Ic(a);
      this.page = 1;
      this.Qd = 100;
      this.vK = "pg";
      this.fg = 4;
      this.GK = b;
      this.update = q;
      a = { page: 1, i7: 100, Qd: 100, fg: 4, vK: "pg", update: q };
      c || (c = a);
      for (var e in c) "undefined" != typeof c[e] && (this[e] = c[e]);
      this.Ba();
    }
  }
  z.extend(tf.prototype, {
    Ba: function () {
      this.za();
    },
    za: function () {
      this.cW();
      this.$a.innerHTML = this.BW();
    },
    cW: function () {
      isNaN(parseInt(this.page)) && (this.page = 1);
      isNaN(parseInt(this.Qd)) && (this.Qd = 1);
      1 > this.page && (this.page = 1);
      1 > this.Qd && (this.Qd = 1);
      this.page > this.Qd && (this.page = this.Qd);
      this.page = parseInt(this.page);
      this.Qd = parseInt(this.Qd);
    },
    O4: function () {
      location.search.match(RegExp("[?&]?" + this.vK + "=([^&]*)[&$]?", "gi"));
      this.page = RegExp.$1;
    },
    BW: function () {
      var a = [],
        b = this.page - 1,
        c = this.page + 1;
      a.push('<p style="margin:0;padding:0;white-space:nowrap">');
      if (!(1 > b)) {
        if (this.page >= this.fg) {
          var e;
          a.push(
            '<span style="margin-right:3px"><a style="color:#7777cc" href="javascript:void(0)" onclick="{temp1}">\u9996\u9875</a></span>'.replace(
              "{temp1}",
              "BMap.I('" + this.da + "').toPage(1);",
            ),
          );
        }
        a.push(
          '<span style="margin-right:3px"><a style="color:#7777cc" href="javascript:void(0)" onclick="{temp2}">\u4e0a\u4e00\u9875</a></span>'.replace(
            "{temp2}",
            "BMap.I('" + this.da + "').toPage(" + b + ");",
          ),
        );
      }
      if (this.page < this.fg)
        (e =
          0 == this.page % this.fg
            ? this.page - this.fg - 1
            : this.page - (this.page % this.fg) + 1),
          (b = e + this.fg - 1);
      else {
        e = Math.floor(this.fg / 2);
        var f = (this.fg % 2) - 1,
          b = this.Qd > this.page + e ? this.page + e : this.Qd;
        e = this.page - e - f;
      }
      this.page > this.Qd - this.fg &&
        this.page >= this.fg &&
        ((e = this.Qd - this.fg + 1), (b = this.Qd));
      for (f = e; f <= b; f++)
        0 < f &&
          (f == this.page
            ? a.push('<span style="margin-right:3px">' + f + "</span>")
            : 1 <= f &&
              f <= this.Qd &&
              ((e =
                '<span><a style="color:#7777cc;margin-right:3px" href="javascript:void(0)" onclick="{temp3}">[' +
                f +
                "]</a></span>"),
              a.push(e.replace("{temp3}", "BMap.I('" + this.da + "').toPage(" + f + ");"))));
      c > this.Qd ||
        a.push(
          '<span><a style="color:#7777cc" href="javascript:void(0)" onclick="{temp4}">\u4e0b\u4e00\u9875</a></span>'.replace(
            "{temp4}",
            "BMap.I('" + this.da + "').toPage(" + c + ");",
          ),
        );
      a.push("</p>");
      return a.join("");
    },
    toPage: function (a) {
      a = a ? a : 1;
      "function" == typeof this.GK && (this.GK(a), (this.page = a));
      this.update && this.Ba();
    },
  });
  function mb(a, b) {
    Y.call(this, a, b);
    b = b || {};
    b.renderOptions = b.renderOptions || {};
    this.xn(b.pageCapacity);
    "undefined" != typeof b.renderOptions.selectFirstResult && !b.renderOptions.selectFirstResult
      ? this.eD()
      : this.yD();
    this.ua = [];
    this.Ff = [];
    this.La = -1;
    this.Qa = [];
    var c = this;
    ab.load(
      "local",
      function () {
        c.Vz();
      },
      q,
    );
  }
  z.xa(mb, Y, "LocalSearch");
  mb.Mq = 10;
  mb.e2 = 1;
  mb.Sn = 100;
  mb.SG = 2e3;
  mb.aH = 1e5;
  z.extend(mb.prototype, {
    search: function (a, b) {
      this.Qa.push({ method: "search", arguments: [a, b] });
    },
    tn: function (a, b, c) {
      this.Qa.push({ method: "searchInBounds", arguments: [a, b, c] });
    },
    pq: function (a, b, c, e) {
      this.Qa.push({ method: "searchNearby", arguments: [a, b, c, e] });
    },
    xe: function () {
      delete this.Ka;
      delete this.Se;
      delete this.ka;
      delete this.ra;
      this.La = -1;
      this.Xa();
      this.m.na.Aa && (this.m.na.Aa.innerHTML = "");
    },
    Sm: ba(),
    yD: function () {
      this.m.na.qu = q;
    },
    eD: function () {
      this.m.na.qu = t;
    },
    xn: function (a) {
      this.m.Zk =
        "number" == typeof a && !isNaN(a) ? (1 > a ? mb.Mq : a > mb.Sn ? mb.Mq : a) : mb.Mq;
    },
    $e: function () {
      return this.m.Zk;
    },
    toString: ea("LocalSearch"),
  });
  var uf = mb.prototype;
  V(uf, {
    clearResults: uf.xe,
    setPageCapacity: uf.xn,
    getPageCapacity: uf.$e,
    gotoPage: uf.Sm,
    searchNearby: uf.pq,
    searchInBounds: uf.tn,
    search: uf.search,
    enableFirstResultSelection: uf.yD,
    disableFirstResultSelection: uf.eD,
  });
  function vf(a, b) {
    Y.call(this, a, b);
  }
  z.xa(vf, Y, "BaseRoute");
  z.extend(vf.prototype, { xe: ba() });
  function wf(a, b) {
    Y.call(this, a, b);
    b = b || {};
    this.yn(b.policy);
    this.NF(b.intercityPolicy);
    this.SF(b.transitTypePolicy);
    this.xn(b.pageCapacity);
    this.Eb = lf;
    this.Tn = bf;
    this.ua = [];
    this.La = -1;
    this.m.El = b.enableTraffic || t;
    this.Qa = [];
    var c = this;
    ab.load("route", function () {
      c.Ed();
    });
  }
  wf.Sn = 100;
  wf.YP = [0, 1, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 1, 1, 1];
  wf.ZP = [0, 3, 4, 0, 0, 0, 5];
  z.xa(wf, vf, "TransitRoute");
  z.extend(wf.prototype, {
    yn: function (a) {
      this.m.Rd = 0 <= a && 5 >= a ? a : 0;
    },
    NF: function (a) {
      this.m.Xm = 0 <= a && 2 >= a ? a : 0;
    },
    SF: function (a) {
      this.m.Dn = 0 <= a && 2 >= a ? a : 0;
    },
    VA: function (a, b) {
      this.Qa.push({ method: "_internalSearch", arguments: [a, b] });
    },
    search: function (a, b) {
      this.Qa.push({ method: "search", arguments: [a, b] });
    },
    xn: function (a) {
      if ("string" === typeof a && ((a = parseInt(a, 10)), isNaN(a))) {
        this.m.Zk = wf.Sn;
        return;
      }
      this.m.Zk = "number" !== typeof a ? wf.Sn : 1 <= a && a <= wf.Sn ? Math.round(a) : wf.Sn;
    },
    toString: ea("TransitRoute"),
    Z2: function (a) {
      return a.replace(/\(.*\)/, "");
    },
  });
  var xf = wf.prototype;
  V(xf, { _internalSearch: xf.VA });
  function yf(a, b) {
    Y.call(this, a, b);
    this.ua = [];
    this.La = -1;
    this.Qa = [];
    var c = this,
      e = this.m.na;
    1 !== e.Tm && 2 !== e.Tm && (e.Tm = 1);
    this.ko = this.m.na.jc ? q : t;
    ab.load("route", function () {
      c.Ed();
    });
    this.gy && this.gy();
  }
  yf.nQ =
    " \u73af\u5c9b \u65e0\u5c5e\u6027\u9053\u8def \u4e3b\u8def \u9ad8\u901f\u8fde\u63a5\u8def \u4ea4\u53c9\u70b9\u5185\u8def\u6bb5 \u8fde\u63a5\u9053\u8def \u505c\u8f66\u573a\u5185\u90e8\u9053\u8def \u670d\u52a1\u533a\u5185\u90e8\u9053\u8def \u6865 \u6b65\u884c\u8857 \u8f85\u8def \u531d\u9053 \u5168\u5c01\u95ed\u9053\u8def \u672a\u5b9a\u4e49\u4ea4\u901a\u533a\u57df POI\u8fde\u63a5\u8def \u96a7\u9053 \u6b65\u884c\u9053 \u516c\u4ea4\u4e13\u7528\u9053 \u63d0\u524d\u53f3\u8f6c\u9053".split(
      " ",
    );
  z.xa(yf, vf, "DWRoute");
  z.extend(yf.prototype, {
    search: function (a, b, c) {
      this.Qa.push({ method: "search", arguments: [a, b, c] });
    },
  });
  function zf(a, b) {
    yf.call(this, a, b);
    b = b || {};
    this.m.El = b.enableTraffic || t;
    this.yn(b.policy);
    this.Eb = mf;
    this.Tn = hf;
    Va(Wa(4, 1), ["service", "drive"]);
  }
  z.xa(zf, yf, "DrivingRoute");
  zf.prototype.yn = function (a) {
    this.m.Rd = 0 <= a && 11 >= a ? a : 0;
  };
  function Af(a, b) {
    yf.call(this, a, b);
    this.Eb = nf;
    this.Tn = gf;
    this.ko = t;
    Va(Wa(4, 4), ["service", "walk"]);
  }
  z.xa(Af, yf, "WalkingRoute");
  function Bf(a, b) {
    yf.call(this, a, b);
    b = b || {};
    this.m.El = b.enableTraffic || t;
    this.sT = b.renderOptions.lineType || 0;
    this.Eb = mf;
    this.Tn = hf;
    Va(Wa(4, 2), ["service", "truck"]);
  }
  z.xa(Bf, yf, "TruckRoute");
  Bf.prototype.yn = function (a) {
    this.m.Rd = 0 <= a && 5 >= a ? a : 0;
  };
  function Cf(a, b) {
    yf.call(this, a, b);
    this.Eb = qf;
    this.Tn = jf;
    this.ko = t;
    Va(Wa(4, 3), ["service", "ride"]);
  }
  z.xa(Cf, yf, "RidingRoute");
  function Df(a, b) {
    z.lang.Ja.call(this);
    this.bg = [];
    this.al = [];
    this.m = b;
    this.Hj = a;
    this.map = this.m.na.map || s;
    this.xO = this.m.xO;
    this.Fb = s;
    this.Ek = 0;
    this.eG = "";
    this.tf = 1;
    this.FD = "";
    this.kq = [0, 0, 0, 0, 0, 0, 0];
    this.mN = [];
    this.Ms = [1, 1, 1, 1, 1, 1, 1];
    this.iP = [1, 1, 1, 1, 1, 1, 1];
    this.lq = [0, 0, 0, 0, 0, 0, 0];
    this.nn = [0, 0, 0, 0, 0, 0, 0];
    this.Kb = [
      { B: "", Jd: 0, En: 0, x: 0, y: 0, sa: -1 },
      { B: "", Jd: 0, En: 0, x: 0, y: 0, sa: -1 },
      { B: "", Jd: 0, En: 0, x: 0, y: 0, sa: -1 },
      { B: "", Jd: 0, En: 0, x: 0, y: 0, sa: -1 },
      { B: "", Jd: 0, En: 0, x: 0, y: 0, sa: -1 },
      { B: "", Jd: 0, En: 0, x: 0, y: 0, sa: -1 },
      { B: "", Jd: 0, En: 0, x: 0, y: 0, sa: -1 },
    ];
    this.oi = -1;
    this.Pu = [];
    this.qG = [];
    ab.load("route", ba());
  }
  z.lang.xa(Df, z.lang.Ja, "RouteAddr");
  var Ef = navigator.userAgent;
  /ipad|iphone|ipod|iph/i.test(Ef);
  var Ff = /android/i.test(Ef);
  function Gf(a) {
    this.bf = a || {};
  }
  z.extend(Gf.prototype, {
    wO: function (a, b, c) {
      var e = this;
      ab.load("route", function () {
        e.Ed(a, b, c);
      });
    },
  });
  function Hf(a) {
    this.m = {};
    z.extend(this.m, a);
    this.Qa = [];
    var b = this;
    ab.load("othersearch", function () {
      b.Ed();
    });
  }
  z.xa(Hf, z.lang.Ja, "Geocoder");
  z.extend(Hf.prototype, {
    Om: function (a, b, c) {
      this.Qa.push({ method: "getPoint", arguments: [a, b, c] });
    },
    Lm: function (a, b, c) {
      this.Qa.push({ method: "getLocation", arguments: [a, b, c] });
    },
    toString: ea("Geocoder"),
  });
  var If = Hf.prototype;
  V(If, { getPoint: If.Om, getLocation: If.Lm });
  function Geolocation(a) {
    a = a || {};
    this.M = {
      timeout: a.timeout || 1e4,
      maximumAge: a.maximumAge || 6e5,
      enableHighAccuracy: a.enableHighAccuracy || t,
      Si: a.SDKLocation || t,
    };
    this.ve = [];
    var b = this;
    ab.load("othersearch", function () {
      for (var a = 0, e; (e = b.ve[a]); a++) b[e.method].apply(b, e.arguments);
    });
  }
  z.extend(Geolocation.prototype, {
    getCurrentPosition: function (a, b) {
      this.ve.push({ method: "getCurrentPosition", arguments: arguments });
    },
    getStatus: function () {
      return df;
    },
    enableSDKLocation: function () {
      M() && (this.M.Si = q);
    },
    disableSDKLocation: function () {
      this.M.Si = t;
    },
  });
  function Jf(a) {
    a = a || {};
    a.na = a.renderOptions || {};
    this.m = { na: { map: a.na.map || s } };
    this.Qa = [];
    var b = this;
    ab.load("othersearch", function () {
      b.Ed();
    });
  }
  z.xa(Jf, z.lang.Ja, "LocalCity");
  z.extend(Jf.prototype, {
    get: function (a) {
      this.Qa.push({ method: "get", arguments: [a] });
    },
    toString: ea("LocalCity"),
  });
  function Kf() {
    this.Qa = [];
    var a = this;
    ab.load("othersearch", function () {
      a.Ed();
    });
  }
  z.xa(Kf, z.lang.Ja, "Boundary");
  z.extend(Kf.prototype, {
    get: function (a, b) {
      this.Qa.push({ method: "get", arguments: [a, b] });
    },
    toString: ea("Boundary"),
  });
  function Lf(a, b) {
    Y.call(this, a, b);
    this.kQ = of;
    this.mQ = rf;
    this.jQ = pf;
    this.lQ = sf;
    this.Qa = [];
    Va(Wa(4, 5), ["service", "bus"]);
    var c = this;
    ab.load("buslinesearch", function () {
      c.Ed();
    });
  }
  Lf.Uv = L.ta + "iw_plus.gif";
  Lf.gT = L.ta + "iw_minus.gif";
  Lf.ZU = L.ta + "stop_icon.png";
  z.xa(Lf, Y);
  z.extend(Lf.prototype, {
    getBusList: function (a) {
      this.Qa.push({ method: "getBusList", arguments: [a] });
    },
    getBusLine: function (a) {
      this.Qa.push({ method: "getBusLine", arguments: [a] });
    },
    setGetBusListCompleteCallback: function (a) {
      this.m.NN = a || ba();
    },
    setGetBusLineCompleteCallback: function (a) {
      this.m.MN = a || ba();
    },
    setBusListHtmlSetCallback: function (a) {
      this.m.KN = a || ba();
    },
    setBusLineHtmlSetCallback: function (a) {
      this.m.JN = a || ba();
    },
    setPolylinesSetCallback: function (a) {
      this.m.kF = a || ba();
    },
  });
  function Mf(a) {
    Y.call(this, a);
    a = a || {};
    this.fb = {
      input: a.input || s,
      wC: a.baseDom || s,
      types: a.types || [],
      fu: a.onSearchComplete || ba(),
    };
    this.rd.src = a.location || "\u5168\u56fd";
    this.oj = "";
    this.xg = s;
    this.yI = "";
    this.fj();
    Ya(Ma);
    var b = this;
    ab.load("autocomplete", function () {
      b.Ed();
    });
  }
  z.xa(Mf, Y, "Autocomplete");
  z.extend(Mf.prototype, {
    fj: ba(),
    show: ba(),
    aa: ba(),
    TF: function (a) {
      this.fb.types = a;
    },
    wn: function (a) {
      this.rd.src = a;
    },
    search: ca("oj"),
    Vy: ca("yI"),
    xu: function (a) {
      this.fb.fu = a;
    },
  });
  var bb;
  function Ua(a, b) {
    function c() {
      f.m.visible
        ? ("inter" === f.Pe && db() && f.m.haveBreakId && f.m.indoorExitControl === q
            ? z.U.show(f.Fr)
            : z.U.aa(f.Fr),
          this.xd && this.m.closeControl && this.Jf && this.P && this.P.Ta() === this.R
            ? z.U.show(f.Jf)
            : z.U.aa(f.Jf),
          this.m.forceCloseControl && z.U.show(f.Jf),
          Va(Wa(3, 5), ["layer", "pano"]))
        : (z.U.aa(f.Jf), z.U.aa(f.Fr));
    }
    this.R = "string" == typeof a ? z.fa(a) : a;
    this.da = Nf++;
    this.m = {
      enableScrollWheelZoom: q,
      panoramaRenderer: Ta() ? "javascript" : "flash",
      swfSrc: C.xh("main_domain_nocdn", "res/swf/") + "APILoader.swf",
      visible: q,
      indoorExitControl: q,
      indoorFloorControl: t,
      linksControl: q,
      clickOnRoad: q,
      navigationControl: q,
      closeControl: q,
      indoorSceneSwitchControl: q,
      albumsControl: t,
      albumsControlOptions: {},
      copyrightControlOptions: {},
      forceCloseControl: t,
      haveBreakId: t,
    };
    var b = b || {},
      e;
    for (e in b) this.m[e] = b[e];
    b.closeControl === q && (this.m.forceCloseControl = q);
    b.useWebGL === t && Ta(t);
    this.Na = { heading: 0, pitch: 0 };
    this.so = [];
    this.Ob = this.ib = s;
    this.tk = this.Cr();
    this.ua = [];
    this.Sc = 1;
    this.Pe = this.ET = this.Zg = "";
    this.Oe = {};
    this.Vf = s;
    this.jh = [];
    this.Ur = [];
    "cvsRender" == this.tk || Ta()
      ? ((this.lk = 90), (this.nk = -90))
      : "cssRender" == this.tk && ((this.lk = 45), (this.nk = -45));
    this.Xr = t;
    var f = this,
      g = (1e5 * Math.random()).toFixed(0);
    C._rd = C._rd || {};
    C._rd["_cbk" + g] = function (a) {
      if (!a || a.error === l || a.error !== 0) bd("PANORAMA");
      else {
        this.tk === "flashRender"
          ? ab.load(
              "panoramaflash",
              function () {
                f.fj();
              },
              q,
            )
          : ab.load(
              "panorama",
              function () {
                f.ob();
              },
              q,
            );
        b.Ye == "api" ? Ya(Ha) : Ya(Ia);
      }
      delete C._rd["_cbk" + g];
    };
    this.to = function () {
      ad("PANORAMA", "BMap._rd._cbk" + g);
      this.to = ba();
    };
    this.m.qT !== q && (this.to(), C.Wq("cus.fire", "count", "z_loadpanoramacount"));
    this.kU(this.R);
    this.addEventListener("id_changed", function () {
      Ya(Ga, { from: b.Ye });
    });
    this.zQ();
    this.addEventListener("indoorexit_options_changed", c);
    this.addEventListener("scene_type_changed", c);
    this.addEventListener("onclose_options_changed", c);
    this.addEventListener("onvisible_changed", c);
  }
  var Of = 4,
    Pf = 1,
    Qf = 5,
    Nf = 0;
  z.lang.xa(Ua, z.lang.Ja, "Panorama");
  z.extend(Ua.prototype, {
    zQ: function () {
      var a = this,
        b = (this.Jf = I("div"));
      b.className = "pano_close";
      b.style.cssText = "z-index: 1201;display: none";
      b.title = "\u9000\u51fa\u5168\u666f";
      b.onclick = function () {
        a.aa();
      };
      this.R.appendChild(b);
      var c = (this.Fr = I("a"));
      c.className = "pano_pc_indoor_exit";
      c.style.cssText = "z-index: 1201;display: none";
      c.innerHTML = '<span style="float:right;margin-right:12px;">\u51fa\u53e3</span>';
      c.title = "\u9000\u51fa\u5ba4\u5185\u666f";
      c.onclick = function () {
        a.wp();
      };
      this.R.appendChild(c);
      window.ActiveXObject &&
        !document.addEventListener &&
        ((b.style.backgroundColor = "rgb(37,37,37)"), (c.style.backgroundColor = "rgb(37,37,37)"));
    },
    wp: ba(),
    kU: function (a) {
      var b, c;
      b = a.style;
      c = eb(a).position;
      "absolute" != c && "relative" != c && ((b.position = "relative"), (b.zIndex = 0));
      if ("absolute" === c || "relative" === c)
        if (((a = eb(a).zIndex), !a || "auto" === a)) b.zIndex = 0;
    },
    mY: u("so"),
    ac: u("ib"),
    NY: u("Ew"),
    NO: u("Ew"),
    ma: u("Ob"),
    Ma: u("Na"),
    la: u("Sc"),
    Fg: u("Zg"),
    Q4: function () {
      return this.V2 || [];
    },
    J4: u("ET"),
    Ct: u("Pe"),
    Zy: function (a) {
      a !== this.Pe && ((this.Pe = a), this.dispatchEvent(new R("onscene_type_changed")));
    },
    MO: function (a) {
      a !== Qf && (Qf = a);
    },
    HO: function (a) {
      a !== Of && (Of = a);
    },
    Gc: function (a, b, c) {
      "object" === typeof b && ((c = b), (b = l));
      a != this.ib &&
        ((this.Nl = this.ib),
        (this.Ol = this.Ob),
        (this.ib = a),
        (this.Pe = b || "street"),
        (this.Ob = s),
        c && c.pov && this.zd(c.pov));
    },
    va: function (a) {
      a.Vb(this.Ob) || ((this.Nl = this.ib), (this.Ol = this.Ob), (this.Ob = a), (this.ib = s));
    },
    zd: function (a) {
      if (a) {
        var a = this.Na.pitch,
          b = this.Na.heading,
          b = this.YC(b);
        a > this.lk ? (a = this.lk) : a < this.nk && (a = this.nk);
        this.Xr = q;
        this.Na.pitch = a;
        this.Na.heading = b;
      }
    },
    t0: function (a, b) {
      this.nk = 0 <= a ? 0 : a;
      this.lk = 0 >= b ? 0 : b;
    },
    YC: function (a) {
      return a - 360 * Math.floor(a / 360);
    },
    Xc: function (a) {
      a != this.Sc &&
        (a > Of && (a = Of),
        a < Pf && (a = Pf),
        a != this.Sc && (this.Sc = a),
        "cssRender" === this.tk && this.zd(this.Na));
    },
    PB: function () {
      if (this.P)
        for (var a = this.P.Ox(), b = 0; b < a.length; b++)
          (a[b] instanceof Fd || a[b] instanceof Gd) && a[b].point && this.ua.push(a[b]);
    },
    OF: ca("P"),
    wu: function (a) {
      this.Vf = a || "none";
    },
    Mj: function (a) {
      for (var b in a) {
        if ("object" == typeof a[b]) for (var c in a[b]) this.m[b][c] = a[b][c];
        else this.m[b] = a[b];
        a.closeControl === q && (this.m.forceCloseControl = q);
        a.closeControl === t && (this.m.forceCloseControl = t);
        switch (b) {
          case "linksControl":
            this.dispatchEvent(new R("onlinks_visible_changed"));
            break;
          case "clickOnRoad":
            this.dispatchEvent(new R("onclickonroad_changed"));
            break;
          case "navigationControl":
            this.dispatchEvent(new R("onnavigation_visible_changed"));
            break;
          case "indoorSceneSwitchControl":
            this.dispatchEvent(new R("onindoor_default_switch_mode_changed"));
            break;
          case "albumsControl":
            this.dispatchEvent(new R("onalbums_visible_changed"));
            break;
          case "albumsControlOptions":
            this.dispatchEvent(new R("onalbums_options_changed"));
            break;
          case "copyrightControlOptions":
            this.dispatchEvent(new R("oncopyright_options_changed"));
            break;
          case "closeControl":
            this.dispatchEvent(new R("onclose_options_changed"));
            break;
          case "indoorExitControl":
            this.dispatchEvent(new R("onindoorexit_options_changed"));
            break;
          case "indoorFloorControl":
            this.dispatchEvent(new R("onindoorfloor_options_changed"));
        }
      }
    },
    Uk: function () {
      this.Wl.style.visibility = "hidden";
    },
    cz: function () {
      this.Wl.style.visibility = "visible";
    },
    tX: function () {
      this.m.enableScrollWheelZoom = q;
    },
    VW: function () {
      this.m.enableScrollWheelZoom = t;
    },
    show: function () {
      this.m.visible = q;
    },
    aa: function () {
      this.m.visible = t;
    },
    Cr: function () {
      return db() && !M() && "javascript" != this.m.panoramaRenderer
        ? "flashRender"
        : !M() && $b()
        ? "cvsRender"
        : "cssRender";
    },
    Ra: function (a) {
      this.Oe[a.sd] = a;
    },
    Lb: function (a) {
      delete this.Oe[a];
    },
    Tx: function () {
      return this.m.visible;
    },
    vh: function () {
      return new O(this.R.clientWidth, this.R.clientHeight);
    },
    Ta: u("R"),
    PL: function () {
      var a = C.xh("baidumap", "?"),
        b = this.ac();
      if (b) {
        var b = {
            panotype: this.Ct(),
            heading: this.Ma().heading,
            pitch: this.Ma().pitch,
            pid: b,
            panoid: b,
            from: "api",
          },
          c;
        for (c in b) a += c + "=" + b[c] + "&";
      }
      return a.slice(0, -1);
    },
    Yx: function () {
      this.Mj({ copyrightControlOptions: { logoVisible: t } });
    },
    XF: function () {
      this.Mj({ copyrightControlOptions: { logoVisible: q } });
    },
    mC: function (a) {
      function b(a, b) {
        return function () {
          a.Ur.push({ yN: b, xN: arguments });
        };
      }
      for (var c = a.getPanoMethodList(), e = "", f = 0, g = c.length; f < g; f++)
        (e = c[f]), (this[e] = b(this, e));
      this.jh.push(a);
    },
    yF: function (a) {
      for (var b = this.jh.length; b--; ) this.jh[b] === a && this.jh.splice(b, 1);
    },
    MF: ba(),
  });
  var Rf = Ua.prototype;
  V(Rf, {
    setId: Rf.Gc,
    setPosition: Rf.va,
    setPov: Rf.zd,
    setZoom: Rf.Xc,
    setOptions: Rf.Mj,
    getId: Rf.ac,
    getPosition: Rf.ma,
    getPov: Rf.Ma,
    getZoom: Rf.la,
    getLinks: Rf.mY,
    getBaiduMapUrl: Rf.PL,
    hideMapLogo: Rf.Yx,
    showMapLogo: Rf.XF,
    enableDoubleClickZoom: Rf.X3,
    disableDoubleClickZoom: Rf.O3,
    enableScrollWheelZoom: Rf.tX,
    disableScrollWheelZoom: Rf.VW,
    show: Rf.show,
    hide: Rf.aa,
    addPlugin: Rf.mC,
    removePlugin: Rf.yF,
    getVisible: Rf.Tx,
    addOverlay: Rf.Ra,
    removeOverlay: Rf.Lb,
    getSceneType: Rf.Ct,
    setPanoramaPOIType: Rf.wu,
    exitInter: Rf.wp,
    setInteractiveState: Rf.MF,
  });
  V(window, {
    BMAP_PANORAMA_POI_HOTEL: "hotel",
    BMAP_PANORAMA_POI_CATERING: "catering",
    BMAP_PANORAMA_POI_MOVIE: "movie",
    BMAP_PANORAMA_POI_TRANSIT: "transit",
    BMAP_PANORAMA_POI_INDOOR_SCENE: "indoor_scene",
    BMAP_PANORAMA_POI_NONE: "none",
    BMAP_PANORAMA_INDOOR_SCENE: "inter",
    BMAP_PANORAMA_STREET_SCENE: "street",
  });
  function Sf() {
    z.lang.Ja.call(this);
    this.sd = "PanoramaOverlay_" + this.da;
    this.W = s;
    this.Va = q;
  }
  z.lang.xa(Sf, z.lang.Ja, "PanoramaOverlayBase");
  z.extend(Sf.prototype, {
    M4: u("sd"),
    za: function () {
      aa("initialize\u65b9\u6cd5\u672a\u5b9e\u73b0");
    },
    remove: function () {
      aa("remove\u65b9\u6cd5\u672a\u5b9e\u73b0");
    },
    Uf: function () {
      aa("_setOverlayProperty\u65b9\u6cd5\u672a\u5b9e\u73b0");
    },
  });
  function Tf(a, b) {
    Sf.call(this);
    var c = { position: s, altitude: 2, displayDistance: q },
      b = b || {},
      e;
    for (e in b) c[e] = b[e];
    this.Ob = c.position;
    this.Yj = a;
    this.Xq = c.altitude;
    this.MR = c.displayDistance;
    this.iG = c.color;
    this.DM = c.hoverColor;
    this.backgroundColor = c.backgroundColor;
    this.yK = c.backgroundHoverColor;
    this.borderColor = c.borderColor;
    this.CK = c.borderHoverColor;
    this.fontSize = c.fontSize;
    this.padding = c.padding;
    this.BE = c.imageUrl;
    this.size = c.size;
    this.Ee = c.image;
    this.width = c.width;
    this.height = c.height;
    this.eZ = c.imageData;
    this.borderWidth = c.borderWidth;
  }
  z.lang.xa(Tf, Sf, "PanoramaLabel");
  z.extend(Tf.prototype, {
    p4: u("borderWidth"),
    getImageData: u("eZ"),
    Rm: u("iG"),
    E4: u("DM"),
    l4: u("backgroundColor"),
    m4: u("yK"),
    n4: u("borderColor"),
    o4: u("CK"),
    C4: u("fontSize"),
    N4: u("padding"),
    F4: u("BE"),
    wb: u("size"),
    Ix: u("Ee"),
    va: function (a) {
      this.Ob = a;
      this.Uf("position", a);
    },
    ma: u("Ob"),
    Qc: function (a) {
      this.Yj = a;
      this.Uf("content", a);
    },
    Mk: u("Yj"),
    GF: function (a) {
      this.Xq = a;
      this.Uf("altitude", a);
    },
    zp: u("Xq"),
    Ma: function () {
      var a = this.ma(),
        b = s,
        c = s;
      this.W && (c = this.W.ma());
      if (a && c)
        if (a.Vb(c)) b = this.W.Ma();
        else {
          b = {};
          b.heading = Uf(a.lng - c.lng, a.lat - c.lat) || 0;
          var a = b,
            c = this.zp(),
            e = this.no();
          a.pitch = Math.round(180 * (Math.atan(c / e) / Math.PI)) || 0;
        }
      return b;
    },
    no: function () {
      var a = 0,
        b,
        c;
      this.W && ((b = this.W.ma()), (c = this.ma()) && !c.Vb(b) && (a = U.Nk(b, c)));
      return a;
    },
    aa: function () {
      aa("hide\u65b9\u6cd5\u672a\u5b9e\u73b0");
    },
    show: function () {
      aa("show\u65b9\u6cd5\u672a\u5b9e\u73b0");
    },
    Uf: ba(),
  });
  var Vf = Tf.prototype;
  V(Vf, {
    setPosition: Vf.va,
    getPosition: Vf.ma,
    setContent: Vf.Qc,
    getContent: Vf.Mk,
    setAltitude: Vf.GF,
    getAltitude: Vf.zp,
    getPov: Vf.Ma,
    show: Vf.show,
    hide: Vf.aa,
  });
  function Wf(a, b) {
    Sf.call(this);
    var c = { icon: "", title: "", panoInfo: s, altitude: 2 },
      b = b || {},
      e;
    for (e in b) c[e] = b[e];
    this.Ob = a;
    this.vI = c.icon;
    this.TJ = c.title;
    this.Xq = c.altitude;
    this.WT = c.panoInfo;
    this.Na = { heading: 0, pitch: 0 };
  }
  z.lang.xa(Wf, Sf, "PanoramaMarker");
  z.extend(Wf.prototype, {
    va: function (a) {
      this.Ob = a;
      this.Uf("position", a);
    },
    ma: u("Ob"),
    Hc: function (a) {
      this.TJ = a;
      this.Uf("title", a);
    },
    Ip: u("TJ"),
    Xb: function (a) {
      this.vI = icon;
      this.Uf("icon", a);
    },
    Cp: u("vI"),
    GF: function (a) {
      this.Xq = a;
      this.Uf("altitude", a);
    },
    zp: u("Xq"),
    kE: u("WT"),
    Ma: function () {
      var a = s;
      if (this.W) {
        var a = this.W.ma(),
          b = this.ma(),
          a = Uf(b.lng - a.lng, b.lat - a.lat);
        isNaN(a) && (a = 0);
        a = { heading: a, pitch: 0 };
      } else a = this.Na;
      return a;
    },
    Uf: ba(),
  });
  var Xf = Wf.prototype;
  V(Xf, {
    setPosition: Xf.va,
    getPosition: Xf.ma,
    setTitle: Xf.Hc,
    getTitle: Xf.Ip,
    setAltitude: Xf.GF,
    getAltitude: Xf.zp,
    getPanoInfo: Xf.kE,
    getIcon: Xf.Cp,
    setIcon: Xf.Xb,
    getPov: Xf.Ma,
  });
  function Uf(a, b) {
    var c = 0;
    if (0 !== a && 0 !== b) {
      var c = 180 * (Math.atan(a / b) / Math.PI),
        e = 0;
      0 < a && 0 > b && (e = 90);
      0 > a && 0 > b && (e = 180);
      0 > a && 0 < b && (e = 270);
      c = ((c + 90) % 90) + e;
    } else 0 === a ? (c = 0 > b ? 180 : 0) : 0 === b && (c = 0 < a ? 90 : 270);
    return Math.round(c);
  }
  function Ta(a) {
    if ("boolean" === typeof Yf) return Yf;
    if (a === t || !window.WebGLRenderingContext) return (Yf = t);
    if (z.platform.Vk) {
      a = 0;
      try {
        var b = s,
          c = navigator.userAgent.toLowerCase();
        0 < c.indexOf("android") &&
          ((b = (c.match(/android [\d._]+/gi) + "").replace(/[^0-9|_.]/gi, "").replace(/_/gi, ".")),
          (b = parseInt(b.split(".")[0], 10)));
        a = b;
      } catch (e) {
        console.error("\u83b7\u53d6\u5b89\u5353\u7248\u672c\u5931\u8d25 => " + e);
      }
      if (5 > a) return (Yf = t);
    }
    c = document.createElement("canvas");
    a = s;
    try {
      a = c.getContext("webgl");
    } catch (f) {
      Yf = t;
    }
    return (Yf = a === s ? t : q);
  }
  var Yf;
  function Zf() {
    if ("boolean" === typeof $f) return $f;
    $f = q;
    if (z.platform.QM) return q;
    var a = navigator.userAgent;
    return -1 < a.indexOf("Chrome") || -1 < a.indexOf("SAMSUNG-GT-I9508") ? q : ($f = t);
  }
  var $f;
  function pd(a, b) {
    this.W = a || s;
    var c = this;
    c.W && c.ha();
    ab.load("pservice", function () {
      c.eR();
    });
    "api" == (b || {}).Ye ? Ya(Ja) : Ya(Ka);
    this.Dd = {
      getPanoramaById: [],
      getPanoramaByLocation: [],
      getVisiblePOIs: [],
      getRecommendPanosById: [],
      getPanoramaVersions: [],
      checkPanoSupportByCityCode: [],
      getPanoramaByPOIId: [],
      getCopyrightProviders: [],
    };
  }
  C.$k(function (a) {
    "flashRender" !== a.Cr() && new pd(a, { Ye: "api" });
  });
  z.extend(pd.prototype, {
    ha: function () {
      function a(a) {
        if (a) {
          if (a.id != b.Ew) {
            b.NO(a.id);
            b.ia = a;
            Zf() || b.dispatchEvent(new R("onthumbnail_complete"));
            b.ib != s && (b.Ol = b._position);
            for (var c in a)
              if (a.hasOwnProperty(c))
                switch (((b["_" + c] = a[c]), c)) {
                  case "position":
                    b.Ob = a[c];
                    break;
                  case "id":
                    b.ib = a[c];
                    break;
                  case "links":
                    b.so = a[c];
                    break;
                  case "zoom":
                    b.Sc = a[c];
                }
            if (b.Ol) {
              var g = b.Ol,
                i = b._position;
              c = g.lat;
              var k = i.lat,
                m = ac(k - c),
                g = ac(i.lng - g.lng);
              c =
                Math.sin(m / 2) * Math.sin(m / 2) +
                Math.cos(ac(c)) * Math.cos(ac(k)) * Math.sin(g / 2) * Math.sin(g / 2);
              b.OH = 6371e3 * 2 * Math.atan2(Math.sqrt(c), Math.sqrt(1 - c));
            }
            c = new R("ondataload");
            b.show();
            c.data = a;
            b.dispatchEvent(c);
            b.dispatchEvent(new R("onposition_changed"));
            b.dispatchEvent(new R("onlinks_changed"));
            b.dispatchEvent(new R("oncopyright_changed"), { copyright: a.copyright });
            a.um
              ? (b.Mj({ haveBreakId: q }), db() && b.m.closeControl && z.U.show(b.Fr))
              : z.U.aa(b.Fr);
          }
        } else (b.ib = b.Nl), (b.Ob = b.Ol), b.dispatchEvent(new R("onnoresult"));
      }
      var b = this.W,
        c = this;
      b.addEventListener("id_changed", function () {
        C.oz("y");
        c.Gp(b.ac(), a);
      });
      b.addEventListener("iid_changed", function () {
        C.oz("y");
        c.wg(
          pd.xl + "qt=idata&iid=" + b.LA + "&fn=",
          function (b) {
            if (b && b.result && 0 == b.result.error) {
              var b = b.content[0].interinfo,
                f = {};
              f.um = b.BreakID;
              for (var g = b.Defaultfloor, i = s, k = 0; k < b.Floors.length; k++)
                if (b.Floors[k].Floor == g) {
                  i = b.Floors[k];
                  break;
                }
              f.id = i.StartID || i.Points[0].PID;
              c.Gp(f.id, a, f);
            }
          },
          q,
        );
      });
      b.addEventListener("position_changed_inner", function () {
        C.oz("y");
        c.Aj(b.ma(), a);
      });
    },
    Gp: function (a, b) {
      this.Dd.getPanoramaById.push(arguments);
    },
    Aj: function (a, b, c) {
      this.Dd.getPanoramaByLocation.push(arguments);
    },
    vE: function (a, b, c, e) {
      this.Dd.getVisiblePOIs.push(arguments);
    },
    Rx: function (a, b) {
      this.Dd.getRecommendPanosById.push(arguments);
    },
    Qx: function (a) {
      this.Dd.getPanoramaVersions.push(arguments);
    },
    DC: function (a, b) {
      this.Dd.checkPanoSupportByCityCode.push(arguments);
    },
    Px: function (a, b) {
      this.Dd.getPanoramaByPOIId.push(arguments);
    },
    TL: function (a) {
      this.Dd.getCopyrightProviders.push(arguments);
    },
  });
  var ag = pd.prototype;
  V(ag, { getPanoramaById: ag.Gp, getPanoramaByLocation: ag.Aj, getPanoramaByPOIId: ag.Px });
  function od(a) {
    Yd.call(this);
    "api" == (a || {}).Ye ? Ya(Ea) : Ya(Fa);
  }
  od.iH = C.xh("pano", "");
  od.prototype = new Yd();
  od.prototype.getTilesUrl = function (a, b) {
    var c =
      od.iH[(a.x + a.y) % od.iH.length] +
      "?udt=20150114&qt=tile&styles=pl&x=" +
      a.x +
      "&y=" +
      a.y +
      "&z=" +
      b;
    z.ga.oa && 6 >= z.ga.oa && (c += "&color_dep=32");
    var e = Xb(c);
    e ? ((e = dd(e.path, { Qp: t })), (c += "&" + e)) : (c = s);
    return c;
  };
  od.prototype.Ut = ea(q);
  cg.ce = new U();
  function cg() {}
  z.extend(cg, {
    WW: function (a, b, c) {
      c = z.lang.Uc(c);
      b = { data: b };
      "position_changed" == a && (b.data = cg.ce.Kj(new T(b.data.mercatorX, b.data.mercatorY)));
      c.dispatchEvent(new R("on" + a), b);
    },
  });
  var dg = cg;
  V(dg, { dispatchFlashEvent: dg.WW });
  var eg = { aQ: 50 };
  eg.hv = C.xh("pano")[0];
  eg.fv = { width: 220, height: 60 };
  z.extend(eg, {
    MM: function (a, b, c, e) {
      if (!b || !c || !c.lngLat || !c.panoInstance) e();
      else {
        this.Ao === l && (this.Ao = new pd(s, { Ye: "api" }));
        var f = this;
        this.Ao.DC(b, function (b) {
          b
            ? f.Ao.Aj(c.lngLat, eg.aQ, function (b) {
                if (b && b.id) {
                  var g = b.id,
                    m = b.Fh,
                    b = b.Gh,
                    n = pd.ce.Kg(c.lngLat),
                    o = f.JS(n, { x: m, y: b }),
                    m = f.dM(g, o, 0, eg.fv.width, eg.fv.height);
                  a.content = f.KS(a.content, m, c.titleTip, c.beforeDomId);
                  a.addEventListener("open", function () {
                    ka.V(z.Ic("infoWndPano"), "click", function () {
                      c.panoInstance.Gc(g);
                      c.panoInstance.show();
                      c.panoInstance.zd({ heading: o, pitch: 0 });
                    });
                  });
                }
                e();
              })
            : e();
        });
      }
    },
    KS: function (a, b, c, e) {
      var c = c || "",
        f;
      !e || !a.split(e)[0]
        ? ((e = a), (a = ""))
        : ((e = a.split(e)[0]),
          (f = e.lastIndexOf("<")),
          (e = a.substring(0, f)),
          (a = a.substring(f)));
      f = [];
      var g = eg.fv.width,
        i = eg.fv.height;
      f.push(e);
      f.push(
        "<div id='infoWndPano' class='panoInfoBox' style='height:" +
          i +
          "px;width:" +
          g +
          "px; margin-top: -19px;'>",
      );
      f.push(
        "<img class='pano_thumnail_img' width='" +
          g +
          "' height='" +
          i +
          "' border='0' alt='" +
          c +
          "\u5916\u666f' title='" +
          c +
          "\u5916\u666f' src='" +
          b +
          "' onerror='Pano.PanoEntranceUtil.thumbnailNotFound(this, " +
          g +
          ", " +
          i +
          ");' />",
      );
      f.push(
        "<div class='panoInfoBoxTitleBg' style='width:" +
          g +
          "px;'></div><a href='javascript:void(0)' class='panoInfoBoxTitleContent' >\u8fdb\u5165\u5168\u666f&gt;&gt;</a>",
      );
      f.push("</div>");
      f.push(a);
      return f.join("");
    },
    JS: function (a, b) {
      var c = 90 - (180 * Math.atan2(a.y - b.y, a.x - b.x)) / Math.PI;
      0 > c && (c += 360);
      return c;
    },
    dM: function (a, b, c, e, f) {
      var g =
          eg.hv +
          "?qt=pr3d&fovy=75&quality=80&panoid={panoId}&heading={panoHeading}&pitch={panoPitch}&width={width}&height={height}",
        i = { panoId: a, panoHeading: b || 0, panoPitch: c || 0, width: e, height: f },
        g = g.replace(/\{(.*?)\}/g, function (a, b) {
          return i[b];
        });
      return (a = Xb(g)) ? ((a = dd(a.path, { Qp: t })), g + ("&" + a)) : s;
    },
  });
  var fg = document,
    gg = Math,
    hg = fg.createElement("div").style,
    ig;
  a: {
    for (var jg = ["t", "webkitT", "MozT", "msT", "OT"], kg, lg = 0, mg = jg.length; lg < mg; lg++)
      if (((kg = jg[lg] + "ransform"), kg in hg)) {
        ig = jg[lg].substr(0, jg[lg].length - 1);
        break a;
      }
    ig = t;
  }
  var ng = ig ? "-" + ig.toLowerCase() + "-" : "",
    pg = og("transform"),
    qg = og("transitionProperty"),
    rg = og("transitionDuration"),
    sg = og("transformOrigin"),
    tg = og("transitionTimingFunction"),
    ug = og("transitionDelay"),
    Ff = /android/gi.test(navigator.appVersion),
    vg = /iphone|ipad/gi.test(navigator.appVersion),
    wg = /hp-tablet/gi.test(navigator.appVersion),
    xg = og("perspective") in hg,
    yg = "ontouchstart" in window && !wg,
    zg = ig !== t,
    Ag = og("transition") in hg,
    Bg = "onorientationchange" in window ? "orientationchange" : "resize",
    Cg = yg ? "touchstart" : "mousedown",
    Dg = yg ? "touchmove" : "mousemove",
    Eg = yg ? "touchend" : "mouseup",
    Fg = yg ? "touchcancel" : "mouseup",
    Gg =
      ig === t
        ? t
        : {
            "": "transitionend",
            webkit: "webkitTransitionEnd",
            Moz: "transitionend",
            O: "otransitionend",
            ms: "MSTransitionEnd",
          }[ig],
    Hg =
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function (a) {
        return setTimeout(a, 1);
      },
    Ig =
      window.cancelRequestAnimationFrame ||
      window.D7 ||
      window.webkitCancelRequestAnimationFrame ||
      window.mozCancelRequestAnimationFrame ||
      window.oCancelRequestAnimationFrame ||
      window.msCancelRequestAnimationFrame ||
      clearTimeout,
    Jg = xg ? " translateZ(0)" : "";
  function Kg(a, b) {
    var c = this,
      e;
    c.Nn = "object" == typeof a ? a : fg.getElementById(a);
    c.Nn.style.overflow = "hidden";
    c.Sb = c.Nn.children[0];
    c.options = {
      Mp: q,
      Fn: q,
      x: 0,
      y: 0,
      bp: q,
      RV: t,
      xy: q,
      YE: q,
      ol: q,
      Oi: t,
      b1: 0,
      dx: t,
      Vx: q,
      vi: q,
      Pi: q,
      MD: Ff,
      Zx: vg,
      BX: vg && xg,
      DF: "",
      zoom: t,
      sl: 1,
      Hq: 4,
      YW: 2,
      GP: "scroll",
      Eu: t,
      fz: 1,
      QN: s,
      IN: function (a) {
        a.preventDefault();
      },
      TN: s,
      HN: s,
      SN: s,
      GN: s,
      By: s,
      UN: s,
      LN: s,
      cq: s,
      VN: s,
      bq: s,
    };
    for (e in b) c.options[e] = b[e];
    c.x = c.options.x;
    c.y = c.options.y;
    c.options.ol = zg && c.options.ol;
    c.options.vi = c.options.Mp && c.options.vi;
    c.options.Pi = c.options.Fn && c.options.Pi;
    c.options.zoom = c.options.ol && c.options.zoom;
    c.options.Oi = Ag && c.options.Oi;
    c.options.zoom && Ff && (Jg = "");
    c.Sb.style[qg] = c.options.ol ? ng + "transform" : "top left";
    c.Sb.style[rg] = "0";
    c.Sb.style[sg] = "0 0";
    c.options.Oi && (c.Sb.style[tg] = "cubic-bezier(0.33,0.66,0.66,1)");
    c.options.ol
      ? (c.Sb.style[pg] = "translate(" + c.x + "px," + c.y + "px)" + Jg)
      : (c.Sb.style.cssText += ";position:absolute;top:" + c.y + "px;left:" + c.x + "px");
    c.options.Oi && (c.options.MD = q);
    c.refresh();
    c.ha(Bg, window);
    c.ha(Cg);
    !yg && "none" != c.options.GP && (c.ha("DOMMouseScroll"), c.ha("mousewheel"));
    c.options.dx &&
      (c.bW = setInterval(function () {
        c.cR();
      }, 500));
    this.options.Vx &&
      (Event.prototype.stopImmediatePropagation ||
        ((document.body.removeEventListener = function (a, b, c) {
          var e = Node.prototype.removeEventListener;
          a === "click" ? e.call(document.body, a, b.CM || b, c) : e.call(document.body, a, b, c);
        }),
        (document.body.addEventListener = function (a, b, c) {
          var e = Node.prototype.addEventListener;
          a === "click"
            ? e.call(
                document.body,
                a,
                b.CM ||
                  (b.CM = function (a) {
                    a.F_ || b(a);
                  }),
                c,
              )
            : e.call(document.body, a, b, c);
        })),
      c.ha("click", document.body, q));
  }
  Kg.prototype = {
    enabled: q,
    x: 0,
    y: 0,
    Nj: [],
    scale: 1,
    TC: 0,
    UC: 0,
    cf: [],
    zf: [],
    vC: s,
    rz: 0,
    handleEvent: function (a) {
      switch (a.type) {
        case Cg:
          if (!yg && 0 !== a.button) break;
          this.xw(a);
          break;
        case Dg:
          this.GT(a);
          break;
        case Eg:
        case Fg:
          this.Dv(a);
          break;
        case Bg:
          this.IB();
          break;
        case "DOMMouseScroll":
        case "mousewheel":
          this.kV(a);
          break;
        case Gg:
          this.gV(a);
          break;
        case "click":
          this.mR(a);
      }
    },
    cR: function () {
      !this.Eh &&
        !this.tl &&
        !(
          this.rm ||
          (this.Uy == this.Sb.offsetWidth * this.scale &&
            this.oq == this.Sb.offsetHeight * this.scale)
        ) &&
        this.refresh();
    },
    nw: function (a) {
      var b;
      this[a + "Scrollbar"]
        ? (this[a + "ScrollbarWrapper"] ||
            ((b = fg.createElement("div")),
            this.options.DF
              ? (b.className = this.options.DF + a.toUpperCase())
              : (b.style.cssText =
                  "position:absolute;z-index:100;" +
                  ("h" == a
                    ? "height:7px;bottom:1px;left:2px;right:" + (this.Pi ? "7" : "2") + "px"
                    : "width:7px;bottom:" + (this.vi ? "7" : "2") + "px;top:2px;right:1px")),
            (b.style.cssText +=
              ";pointer-events:none;" +
              ng +
              "transition-property:opacity;" +
              ng +
              "transition-duration:" +
              (this.options.BX ? "350ms" : "0") +
              ";overflow:hidden;opacity:" +
              (this.options.Zx ? "0" : "1")),
            this.Nn.appendChild(b),
            (this[a + "ScrollbarWrapper"] = b),
            (b = fg.createElement("div")),
            this.options.DF ||
              (b.style.cssText =
                "position:absolute;z-index:100;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);" +
                ng +
                "background-clip:padding-box;" +
                ng +
                "box-sizing:border-box;" +
                ("h" == a ? "height:100%" : "width:100%") +
                ";" +
                ng +
                "border-radius:3px;border-radius:3px"),
            (b.style.cssText +=
              ";pointer-events:none;" +
              ng +
              "transition-property:" +
              ng +
              "transform;" +
              ng +
              "transition-timing-function:cubic-bezier(0.33,0.66,0.66,1);" +
              ng +
              "transition-duration:0;" +
              ng +
              "transform: translate(0,0)" +
              Jg),
            this.options.Oi &&
              (b.style.cssText +=
                ";" + ng + "transition-timing-function:cubic-bezier(0.33,0.66,0.66,1)"),
            this[a + "ScrollbarWrapper"].appendChild(b),
            (this[a + "ScrollbarIndicator"] = b)),
          "h" == a
            ? ((this.yM = this.zM.clientWidth),
              (this.XY = gg.max(gg.round((this.yM * this.yM) / this.Uy), 8)),
              (this.WY.style.width = this.XY + "px"))
            : ((this.yP = this.zP.clientHeight),
              (this.y1 = gg.max(gg.round((this.yP * this.yP) / this.oq), 8)),
              (this.x1.style.height = this.y1 + "px")),
          this.JB(a, q))
        : this[a + "ScrollbarWrapper"] &&
          (zg && (this[a + "ScrollbarIndicator"].style[pg] = ""),
          this[a + "ScrollbarWrapper"].parentNode.removeChild(this[a + "ScrollbarWrapper"]),
          (this[a + "ScrollbarWrapper"] = s),
          (this[a + "ScrollbarIndicator"] = s));
    },
    IB: function () {
      var a = this;
      setTimeout(
        function () {
          a.refresh();
        },
        Ff ? 200 : 0,
      );
    },
    Wr: function (a, b) {
      this.tl ||
        ((a = this.Mp ? a : 0),
        (b = this.Fn ? b : 0),
        this.options.ol
          ? (this.Sb.style[pg] =
              "translate(" + a + "px," + b + "px) scale(" + this.scale + ")" + Jg)
          : ((a = gg.round(a)),
            (b = gg.round(b)),
            (this.Sb.style.left = a + "px"),
            (this.Sb.style.top = b + "px")),
        (this.x = a),
        (this.y = b),
        this.JB("h"),
        this.JB("v"));
    },
    JB: function (a, b) {
      var c = "h" == a ? this.x : this.y;
      this[a + "Scrollbar"] &&
        ((c *= this[a + "ScrollbarProp"]),
        0 > c
          ? (this.options.MD ||
              ((c = this[a + "ScrollbarIndicatorSize"] + gg.round(3 * c)),
              8 > c && (c = 8),
              (this[a + "ScrollbarIndicator"].style["h" == a ? "width" : "height"] = c + "px")),
            (c = 0))
          : c > this[a + "ScrollbarMaxScroll"] &&
            (this.options.MD
              ? (c = this[a + "ScrollbarMaxScroll"])
              : ((c =
                  this[a + "ScrollbarIndicatorSize"] -
                  gg.round(3 * (c - this[a + "ScrollbarMaxScroll"]))),
                8 > c && (c = 8),
                (this[a + "ScrollbarIndicator"].style["h" == a ? "width" : "height"] = c + "px"),
                (c = this[a + "ScrollbarMaxScroll"] + (this[a + "ScrollbarIndicatorSize"] - c)))),
        (this[a + "ScrollbarWrapper"].style[ug] = "0"),
        (this[a + "ScrollbarWrapper"].style.opacity = b && this.options.Zx ? "0" : "1"),
        (this[a + "ScrollbarIndicator"].style[pg] =
          "translate(" + ("h" == a ? c + "px,0)" : "0," + c + "px)") + Jg));
    },
    mR: function (a) {
      if (a.eS === q) return (this.iC = a.target), (this.Ax = Date.now()), q;
      if (this.iC && this.Ax) {
        if (600 < Date.now() - this.Ax) return (this.Ax = this.iC = s), q;
      } else {
        for (var b = a.target; b != this.Sb && b != document.body; ) b = b.parentNode;
        if (b == document.body) return q;
      }
      for (b = a.target; 1 != b.nodeType; ) b = b.parentNode;
      b = b.tagName.toLowerCase();
      if ("select" != b && "input" != b && "textarea" != b)
        return (
          a.stopImmediatePropagation ? a.stopImmediatePropagation() : (a.F_ = q),
          a.stopPropagation(),
          a.preventDefault(),
          (this.Ax = this.iC = s),
          t
        );
    },
    xw: function (a) {
      var b = yg ? a.touches[0] : a,
        c,
        e;
      if (this.enabled) {
        this.options.IN && this.options.IN.call(this, a);
        (this.options.Oi || this.options.zoom) && this.XJ(0);
        this.tl = this.rm = this.Eh = t;
        this.cD = this.bD = this.Pw = this.Ow = this.hD = this.gD = 0;
        this.options.zoom &&
          yg &&
          1 < a.touches.length &&
          ((e = gg.abs(a.touches[0].pageX - a.touches[1].pageX)),
          (c = gg.abs(a.touches[0].pageY - a.touches[1].pageY)),
          (this.d1 = gg.sqrt(e * e + c * c)),
          (this.Dy = gg.abs(a.touches[0].pageX + a.touches[1].pageX - 2 * this.BG) / 2 - this.x),
          (this.Ey = gg.abs(a.touches[0].pageY + a.touches[1].pageY - 2 * this.CG) / 2 - this.y),
          this.options.cq && this.options.cq.call(this, a));
        if (
          this.options.xy &&
          (this.options.ol
            ? ((c = getComputedStyle(this.Sb, s)
                [pg].replace(/[^0-9\-.,]/g, "")
                .split(",")),
              (e = +(c[12] || c[4])),
              (c = +(c[13] || c[5])))
            : ((e = +getComputedStyle(this.Sb, s).left.replace(/[^0-9-]/g, "")),
              (c = +getComputedStyle(this.Sb, s).top.replace(/[^0-9-]/g, ""))),
          e != this.x || c != this.y)
        )
          this.options.Oi ? this.ge(Gg) : Ig(this.vC),
            (this.Nj = []),
            this.Wr(e, c),
            this.options.By && this.options.By.call(this);
        this.Qw = this.x;
        this.Rw = this.y;
        this.Iu = this.x;
        this.Ju = this.y;
        this.Fh = b.pageX;
        this.Gh = b.pageY;
        this.startTime = a.timeStamp || Date.now();
        this.options.TN && this.options.TN.call(this, a);
        this.ha(Dg, window);
        this.ha(Eg, window);
        this.ha(Fg, window);
      }
    },
    GT: function (a) {
      var b = yg ? a.touches[0] : a,
        c = b.pageX - this.Fh,
        e = b.pageY - this.Gh,
        f = this.x + c,
        g = this.y + e,
        i = a.timeStamp || Date.now();
      this.options.HN && this.options.HN.call(this, a);
      if (this.options.zoom && yg && 1 < a.touches.length)
        (f = gg.abs(a.touches[0].pageX - a.touches[1].pageX)),
          (g = gg.abs(a.touches[0].pageY - a.touches[1].pageY)),
          (this.c1 = gg.sqrt(f * f + g * g)),
          (this.tl = q),
          (b = (1 / this.d1) * this.c1 * this.scale),
          b < this.options.sl
            ? (b = 0.5 * this.options.sl * Math.pow(2, b / this.options.sl))
            : b > this.options.Hq && (b = 2 * this.options.Hq * Math.pow(0.5, this.options.Hq / b)),
          (this.Up = b / this.scale),
          (f = this.Dy - this.Dy * this.Up + this.x),
          (g = this.Ey - this.Ey * this.Up + this.y),
          (this.Sb.style[pg] = "translate(" + f + "px," + g + "px) scale(" + b + ")" + Jg),
          this.options.VN && this.options.VN.call(this, a);
      else {
        this.Fh = b.pageX;
        this.Gh = b.pageY;
        if (0 < f || f < this.re)
          f = this.options.bp ? this.x + c / 2 : 0 <= f || 0 <= this.re ? 0 : this.re;
        if (g > this.xf || g < this.yd)
          g = this.options.bp ? this.y + e / 2 : g >= this.xf || 0 <= this.yd ? this.xf : this.yd;
        this.gD += c;
        this.hD += e;
        this.Ow = gg.abs(this.gD);
        this.Pw = gg.abs(this.hD);
        (6 > this.Ow && 6 > this.Pw) ||
          (this.options.YE &&
            (this.Ow > this.Pw + 5
              ? ((g = this.y), (e = 0))
              : this.Pw > this.Ow + 5 && ((f = this.x), (c = 0))),
          (this.Eh = q),
          this.Wr(f, g),
          (this.bD = 0 < c ? -1 : 0 > c ? 1 : 0),
          (this.cD = 0 < e ? -1 : 0 > e ? 1 : 0),
          300 < i - this.startTime &&
            ((this.startTime = i), (this.Iu = this.x), (this.Ju = this.y)),
          this.options.SN && this.options.SN.call(this, a));
      }
    },
    Dv: function (a) {
      if (!(yg && 0 !== a.touches.length)) {
        var b = this,
          c = yg ? a.changedTouches[0] : a,
          e,
          f,
          g = { Ia: 0, time: 0 },
          i = { Ia: 0, time: 0 },
          k = (a.timeStamp || Date.now()) - b.startTime;
        e = b.x;
        f = b.y;
        b.ge(Dg, window);
        b.ge(Eg, window);
        b.ge(Fg, window);
        b.options.GN && b.options.GN.call(b, a);
        if (b.tl)
          (e = b.scale * b.Up),
            (e = Math.max(b.options.sl, e)),
            (e = Math.min(b.options.Hq, e)),
            (b.Up = e / b.scale),
            (b.scale = e),
            (b.x = b.Dy - b.Dy * b.Up + b.x),
            (b.y = b.Ey - b.Ey * b.Up + b.y),
            (b.Sb.style[rg] = "200ms"),
            (b.Sb.style[pg] = "translate(" + b.x + "px," + b.y + "px) scale(" + b.scale + ")" + Jg),
            (b.tl = t),
            b.refresh(),
            b.options.bq && b.options.bq.call(b, a);
        else {
          if (b.Eh) {
            if (300 > k && b.options.xy) {
              g = e ? b.MI(e - b.Iu, k, -b.x, b.Uy - b.Yu + b.x, b.options.bp ? b.Yu : 0) : g;
              i = f
                ? b.MI(
                    f - b.Ju,
                    k,
                    -b.y,
                    0 > b.yd ? b.oq - b.On + b.y - b.xf : 0,
                    b.options.bp ? b.On : 0,
                  )
                : i;
              e = b.x + g.Ia;
              f = b.y + i.Ia;
              if ((0 < b.x && 0 < e) || (b.x < b.re && e < b.re)) g = { Ia: 0, time: 0 };
              if ((b.y > b.xf && f > b.xf) || (b.y < b.yd && f < b.yd)) i = { Ia: 0, time: 0 };
            }
            g.Ia || i.Ia
              ? ((c = gg.max(gg.max(g.time, i.time), 10)),
                b.options.Eu &&
                  ((g = e - b.Qw),
                  (i = f - b.Rw),
                  gg.abs(g) < b.options.fz && gg.abs(i) < b.options.fz
                    ? b.scrollTo(b.Qw, b.Rw, 200)
                    : ((g = b.KJ(e, f)), (e = g.x), (f = g.y), (c = gg.max(g.time, c)))),
                b.scrollTo(gg.round(e), gg.round(f), c))
              : b.options.Eu
              ? ((g = e - b.Qw),
                (i = f - b.Rw),
                gg.abs(g) < b.options.fz && gg.abs(i) < b.options.fz
                  ? b.scrollTo(b.Qw, b.Rw, 200)
                  : ((g = b.KJ(b.x, b.y)),
                    (g.x != b.x || g.y != b.y) && b.scrollTo(g.x, g.y, g.time)))
              : b.Do(200);
          } else {
            if (yg)
              if (b.hL && b.options.zoom)
                clearTimeout(b.hL),
                  (b.hL = s),
                  b.options.cq && b.options.cq.call(b, a),
                  b.zoom(b.Fh, b.Gh, 1 == b.scale ? b.options.YW : 1),
                  b.options.bq &&
                    setTimeout(function () {
                      b.options.bq.call(b, a);
                    }, 200);
              else if (this.options.Vx) {
                for (e = c.target; 1 != e.nodeType; ) e = e.parentNode;
                f = e.tagName.toLowerCase();
                "select" != f && "input" != f && "textarea" != f
                  ? ((f = fg.createEvent("MouseEvents")),
                    f.initMouseEvent(
                      "click",
                      q,
                      q,
                      a.view,
                      1,
                      c.screenX,
                      c.screenY,
                      c.clientX,
                      c.clientY,
                      a.ctrlKey,
                      a.altKey,
                      a.shiftKey,
                      a.metaKey,
                      0,
                      s,
                    ),
                    (f.eS = q),
                    e.dispatchEvent(f))
                  : e.focus();
              }
            b.Do(400);
          }
          b.options.UN && b.options.UN.call(b, a);
        }
      }
    },
    Do: function (a) {
      var b = 0 <= this.x ? 0 : this.x < this.re ? this.re : this.x,
        c = this.y >= this.xf || 0 < this.yd ? this.xf : this.y < this.yd ? this.yd : this.y;
      if (b == this.x && c == this.y) {
        if (
          (this.Eh && ((this.Eh = t), this.options.By && this.options.By.call(this)),
          this.vi &&
            this.options.Zx &&
            ("webkit" == ig && (this.zM.style[ug] = "300ms"), (this.zM.style.opacity = "0")),
          this.Pi && this.options.Zx)
        )
          "webkit" == ig && (this.zP.style[ug] = "300ms"), (this.zP.style.opacity = "0");
      } else this.scrollTo(b, c, a || 0);
    },
    kV: function (a) {
      var b = this,
        c,
        e;
      if ("wheelDeltaX" in a) (c = a.wheelDeltaX / 12), (e = a.wheelDeltaY / 12);
      else if ("wheelDelta" in a) c = e = a.wheelDelta / 12;
      else if ("detail" in a) c = e = 3 * -a.detail;
      else return;
      if ("zoom" == b.options.GP) {
        if (
          ((e = b.scale * Math.pow(2, (1 / 3) * (e ? e / Math.abs(e) : 0))),
          e < b.options.sl && (e = b.options.sl),
          e > b.options.Hq && (e = b.options.Hq),
          e != b.scale)
        )
          !b.rz && b.options.cq && b.options.cq.call(b, a),
            b.rz++,
            b.zoom(a.pageX, a.pageY, e, 400),
            setTimeout(function () {
              b.rz--;
              !b.rz && b.options.bq && b.options.bq.call(b, a);
            }, 400);
      } else
        (c = b.x + c),
          (e = b.y + e),
          0 < c ? (c = 0) : c < b.re && (c = b.re),
          e > b.xf ? (e = b.xf) : e < b.yd && (e = b.yd),
          0 > b.yd && b.scrollTo(c, e, 0);
    },
    gV: function (a) {
      a.target == this.Sb && (this.ge(Gg), this.VB());
    },
    VB: function () {
      var a = this,
        b = a.x,
        c = a.y,
        e = Date.now(),
        f,
        g,
        i;
      a.rm ||
        (a.Nj.length
          ? ((f = a.Nj.shift()),
            f.x == b && f.y == c && (f.time = 0),
            (a.rm = q),
            (a.Eh = q),
            a.options.Oi)
            ? (a.XJ(f.time), a.Wr(f.x, f.y), (a.rm = t), f.time ? a.ha(Gg) : a.Do(0))
            : ((i = function () {
                var k = Date.now(),
                  m;
                if (k >= e + f.time) {
                  a.Wr(f.x, f.y);
                  a.rm = t;
                  a.options.e_ && a.options.e_.call(a);
                  a.VB();
                } else {
                  k = (k - e) / f.time - 1;
                  g = gg.sqrt(1 - k * k);
                  k = (f.x - b) * g + b;
                  m = (f.y - c) * g + c;
                  a.Wr(k, m);
                  if (a.rm) a.vC = Hg(i);
                }
              }),
              i())
          : a.Do(400));
    },
    XJ: function (a) {
      a += "ms";
      this.Sb.style[rg] = a;
      this.vi && (this.WY.style[rg] = a);
      this.Pi && (this.x1.style[rg] = a);
    },
    MI: function (a, b, c, e, f) {
      var b = gg.abs(a) / b,
        g = (b * b) / 0.0012;
      0 < a && g > c
        ? ((c += f / (6 / (6.0e-4 * (g / b)))), (b = (b * c) / g), (g = c))
        : 0 > a && g > e && ((e += f / (6 / (6.0e-4 * (g / b)))), (b = (b * e) / g), (g = e));
      return { Ia: g * (0 > a ? -1 : 1), time: gg.round(b / 6.0e-4) };
    },
    pk: function (a) {
      for (var b = -a.offsetLeft, c = -a.offsetTop; (a = a.offsetParent); )
        (b -= a.offsetLeft), (c -= a.offsetTop);
      a != this.Nn && ((b *= this.scale), (c *= this.scale));
      return { left: b, top: c };
    },
    KJ: function (a, b) {
      var c, e, f;
      f = this.cf.length - 1;
      c = 0;
      for (e = this.cf.length; c < e; c++)
        if (a >= this.cf[c]) {
          f = c;
          break;
        }
      f == this.TC && 0 < f && 0 > this.bD && f--;
      a = this.cf[f];
      e = (e = gg.abs(a - this.cf[this.TC])) ? 500 * (gg.abs(this.x - a) / e) : 0;
      this.TC = f;
      f = this.zf.length - 1;
      for (c = 0; c < f; c++)
        if (b >= this.zf[c]) {
          f = c;
          break;
        }
      f == this.UC && 0 < f && 0 > this.cD && f--;
      b = this.zf[f];
      c = (c = gg.abs(b - this.zf[this.UC])) ? 500 * (gg.abs(this.y - b) / c) : 0;
      this.UC = f;
      f = gg.round(gg.max(e, c)) || 200;
      return { x: a, y: b, time: f };
    },
    ha: function (a, b, c) {
      (b || this.Sb).addEventListener(a, this, !!c);
    },
    ge: function (a, b, c) {
      (b || this.Sb).removeEventListener(a, this, !!c);
    },
    $C: ia(1),
    refresh: function () {
      var a,
        b,
        c,
        e = 0;
      b = 0;
      this.scale < this.options.sl && (this.scale = this.options.sl);
      this.Yu = this.Nn.clientWidth || 1;
      this.On = this.Nn.clientHeight || 1;
      this.xf = -this.options.b1 || 0;
      this.Uy = gg.round(this.Sb.offsetWidth * this.scale);
      this.oq = gg.round((this.Sb.offsetHeight + this.xf) * this.scale);
      this.re = this.Yu - this.Uy;
      this.yd = this.On - this.oq + this.xf;
      this.cD = this.bD = 0;
      this.options.QN && this.options.QN.call(this);
      this.Mp = this.options.Mp && 0 > this.re;
      this.Fn = this.options.Fn && ((!this.options.RV && !this.Mp) || this.oq > this.On);
      this.vi = this.Mp && this.options.vi;
      this.Pi = this.Fn && this.options.Pi && this.oq > this.On;
      a = this.pk(this.Nn);
      this.BG = -a.left;
      this.CG = -a.top;
      if ("string" == typeof this.options.Eu) {
        this.cf = [];
        this.zf = [];
        c = this.Sb.querySelectorAll(this.options.Eu);
        a = 0;
        for (b = c.length; a < b; a++)
          (e = this.pk(c[a])),
            (e.left += this.BG),
            (e.top += this.CG),
            (this.cf[a] = e.left < this.re ? this.re : e.left * this.scale),
            (this.zf[a] = e.top < this.yd ? this.yd : e.top * this.scale);
      } else if (this.options.Eu) {
        for (this.cf = []; e >= this.re; ) (this.cf[b] = e), (e -= this.Yu), b++;
        this.re % this.Yu &&
          (this.cf[this.cf.length] =
            this.re - this.cf[this.cf.length - 1] + this.cf[this.cf.length - 1]);
        b = e = 0;
        for (this.zf = []; e >= this.yd; ) (this.zf[b] = e), (e -= this.On), b++;
        this.yd % this.On &&
          (this.zf[this.zf.length] =
            this.yd - this.zf[this.zf.length - 1] + this.zf[this.zf.length - 1]);
      }
      this.nw("h");
      this.nw("v");
      this.tl || ((this.Sb.style[rg] = "0"), this.Do(400));
    },
    scrollTo: function (a, b, c, e) {
      var f = a;
      this.stop();
      f.length || (f = [{ x: a, y: b, time: c, H_: e }]);
      a = 0;
      for (b = f.length; a < b; a++)
        f[a].H_ && ((f[a].x = this.x - f[a].x), (f[a].y = this.y - f[a].y)),
          this.Nj.push({ x: f[a].x, y: f[a].y, time: f[a].time || 0 });
      this.VB();
    },
    disable: function () {
      this.stop();
      this.Do(0);
      this.enabled = t;
      this.ge(Dg, window);
      this.ge(Eg, window);
      this.ge(Fg, window);
    },
    enable: function () {
      this.enabled = q;
    },
    stop: function () {
      this.options.Oi ? this.ge(Gg) : Ig(this.vC);
      this.Nj = [];
      this.rm = this.Eh = t;
    },
    zoom: function (a, b, c, e) {
      var f = c / this.scale;
      this.options.ol &&
        ((this.tl = q),
        (e = e === l ? 200 : e),
        (a = a - this.BG - this.x),
        (b = b - this.CG - this.y),
        (this.x = a - a * f + this.x),
        (this.y = b - b * f + this.y),
        (this.scale = c),
        this.refresh(),
        (this.x = 0 < this.x ? 0 : this.x < this.re ? this.re : this.x),
        (this.y = this.y > this.xf ? this.xf : this.y < this.yd ? this.yd : this.y),
        (this.Sb.style[rg] = e + "ms"),
        (this.Sb.style[pg] = "translate(" + this.x + "px," + this.y + "px) scale(" + c + ")" + Jg),
        (this.tl = t));
    },
  };
  function og(a) {
    if ("" === ig) return a;
    a = a.charAt(0).toUpperCase() + a.substr(1);
    return ig + a;
  }
  hg = s;
  function Lg(a) {
    this.m = { anchor: id, offset: new O(0, 0), maxWidth: "100%", imageHeight: 80 };
    var a = a || {},
      b;
    for (b in a) this.m[b] = a[b];
    this.gm = new pd(s, { Ye: "api" });
    this.rk = [];
    this.W = s;
    this.ng = { height: this.m.imageHeight, width: this.m.imageHeight * Mg };
    this.Yc = this.KB = this.um = this.gd = s;
  }
  var Ng = [0, 1, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 4, 5, 5, 5, 6, 6, 7, 8, 8, 8, 9, 10],
    Og =
      "\u5176\u4ed6 \u6b63\u95e8 \u623f\u578b \u8bbe\u65bd \u6b63\u95e8 \u9910\u996e\u8bbe\u65bd \u5176\u4ed6\u8bbe\u65bd \u6b63\u95e8 \u8bbe\u65bd \u89c2\u5f71\u5385 \u5176\u4ed6\u8bbe\u65bd".split(
        " ",
      );
  C.$k(function (a) {
    var b = s;
    a.addEventListener("position_changed", function () {
      a.m.visible &&
        a.m.albumsControl === q &&
        (b ? b.Qy(a.ac()) : ((b = new Lg(a.m.albumsControlOptions)), b.za(a)));
    });
    a.addEventListener("albums_visible_changed", function () {
      a.m.albumsControl === q
        ? (b ? b.Qy(a.ac()) : ((b = new Lg(a.m.albumsControlOptions)), b.za(a)), b.show())
        : b.aa();
    });
    a.addEventListener("albums_options_changed", function () {
      b && b.Mj(a.m.albumsControlOptions);
    });
    a.addEventListener("visible_changed", function () {
      b &&
        (a.Tx()
          ? a.m.albumsControl === q && (b.R.style.visibility = "visible")
          : (b.R.style.visibility = "hidden"));
    });
  });
  var Mg = 1.8;
  M() && (Mg = 1);
  z.extend(Lg.prototype, {
    Mj: function (a) {
      for (var b in a) this.m[b] = a[b];
      a = this.m.imageHeight + "px";
      this.wc(this.m.anchor);
      this.R.style.width =
        isNaN(Number(this.m.maxWidth)) === q ? this.m.maxWidth : this.m.maxWidth + "px";
      this.R.style.height = a;
      this.vk.style.height = a;
      this.ci.style.height = a;
      this.ng = { height: this.m.imageHeight, width: this.m.imageHeight * Mg };
      this.uk.style.height = this.ng.height - 6 + "px";
      this.uk.style.width = this.ng.width - 6 + "px";
      this.Qy(this.W.ac(), q);
    },
    za: function (a) {
      this.W = a;
      this.Ls();
      this.LQ();
      this.lZ();
      this.Qy(a.ac());
    },
    Ls: function () {
      var a = this.m.imageHeight + "px";
      this.R = I("div");
      var b = this.R.style;
      b.cssText = "background:rgb(37,37,37);background:rgba(37,37,37,0.9);";
      b.position = "absolute";
      b.zIndex = "2000";
      b.width = isNaN(Number(this.m.maxWidth)) === q ? this.m.maxWidth : this.m.maxWidth + "px";
      b.padding = "8px 0";
      b.visibility = "hidden";
      b.height = a;
      this.vk = I("div");
      b = this.vk.style;
      b.position = "absolute";
      b.overflow = "hidden";
      b.width = "100%";
      b.height = a;
      this.ci = I("div");
      b = this.ci.style;
      b.height = a;
      this.vk.appendChild(this.ci);
      this.R.appendChild(this.vk);
      this.W.R.appendChild(this.R);
      this.uk = I("div", { class: "pano_photo_item_seleted" });
      this.uk.style.height = this.ng.height - 6 + "px";
      this.uk.style.width = this.ng.width - 6 + "px";
      this.wc(this.m.anchor);
    },
    gI: function (a) {
      for (var b = this.rk, c = b.length - 1; 0 <= c; c--) if (b[c].panoId == a) return c;
      return -1;
    },
    Qy: function (a, b) {
      if (
        b ||
        !this.rk[this.gd] ||
        !(this.rk[this.gd].panoId == a && 3 !== this.rk[this.gd].recoType)
      ) {
        var c = this,
          e = this.gI(a);
        !b && -1 !== e && this.rk[e] && 3 !== this.rk[e].recoType
          ? this.rq(e)
          : this.BY(function (a) {
              for (var b = {}, e, k, m = t, n = [], o = 0, p = a.length; o < p; o++)
                (e = a[o].catlog),
                  (k = a[o].floor),
                  l !== e &&
                    ("" === e && l !== k
                      ? ((m = q), b[k] || (b[k] = []), b[k].push(a[o]))
                      : (b[Ng[e]] || (b[Ng[e]] = []), b[Ng[e]].push(a[o])));
              for (var v in b)
                m ? n.push({ data: v + "F", index: v }) : n.push({ data: Og[v], index: v });
              c.DH = b;
              c.dj = n;
              c.kj(a);
              0 == a.length ? c.aa() : c.show();
            });
      }
    },
    DW: function () {
      if (!this.$i) {
        var a = this.pY(this.dj),
          b = I("div");
        b.style.cssText = [
          "width:" + 134 * this.dj.length + "px;",
          "overflow:hidden;-ms-user-select:none;-moz-user-select:none;-webkit-user-select:none;",
        ].join("");
        b.innerHTML = a;
        a = I("div");
        a.appendChild(b);
        a.style.cssText =
          "position:absolute;top:-25px;background:rgb(37,37,37);background:rgba(37,37,37,0.9);border-bottom:1px solid #4e596a;width:100%;line-height:25px;height:25px;overflow:scroll;outline:0";
        new Kg(a, { bp: t, xy: q, vi: t, Pi: t, Fn: t, YE: q, dx: q, Vx: q });
        this.R.appendChild(a);
        for (var c = this, e = b.getElementsByTagName("span"), f = 0, g = e.length; f < g; f++)
          (b = e[f]),
            z.V(b, "click", function () {
              if (this.getAttribute("dataindex")) {
                c.kj(c.DH[this.getAttribute("dataindex")]);
                for (var a = 0, b = e.length; a < b; a++) e[a].style.color = "#FFFFFF";
                this.style.color = "#3383FF";
              }
            });
        this.$i = a;
      }
    },
    zW: function () {
      if (this.$i) (a = this.RL(this.dj)), (this.aR.innerHTML = a);
      else {
        var a = this.RL(this.dj),
          b = I("ul"),
          c = this;
        b.style.cssText =
          "list-style: none;padding:0px;margin:0px;display:block;width:60px;position:absolute;top:7px";
        b.innerHTML = a;
        z.V(b, "click", function (a) {
          if ((a = (a.srcElement || a.target).getAttribute("dataindex"))) {
            c.kj(c.DH[a]);
            for (var e = b.getElementsByTagName("li"), f = 0, g = e.length; f < g; f++)
              e[f].childNodes[0].getAttribute("dataindex") === a
                ? z.U.jb(e[f], "pano_catlogLiActive")
                : z.U.rc(e[f], "pano_catlogLiActive");
          }
        });
        var a = I("div"),
          e = I("a"),
          f = I("span"),
          g = I("a"),
          i = I("span"),
          k = [
            "background:url(" + L.ta + "panorama/catlog_icon.png) no-repeat;",
            "display:block;width:10px;height:7px;margin:0 auto;",
          ].join("");
        f.style.cssText = k + "background-position:-18px 0;";
        e.style.cssText = "background:#1C1C1C;display:block;position:absolute;width:58px;";
        i.style.cssText = k + "background-position:0 0;";
        g.style.cssText = "background:#1C1C1C;display:block;position:absolute;width:58px;";
        g.style.top = this.m.imageHeight - 7 + "px";
        a.style.cssText = "position:absolute;top:0px;left:0px;width:60px;";
        e.appendChild(f);
        g.appendChild(i);
        z.V(e, "mouseover", function () {
          var a = parseInt(b.style.top, 10);
          7 !== a && (f.style.backgroundPosition = "-27px 0");
          new Fb({
            Nc: 60,
            fc: Gb.dt,
            duration: 300,
            Ba: function (c) {
              b.style.top = a + (7 - a) * c + "px";
            },
          });
        });
        z.V(e, "mouseout", function () {
          f.style.backgroundPosition = "-18px 0";
        });
        z.V(g, "mouseover", function () {
          var a = parseInt(b.style.top, 10),
            e = c.m.imageHeight - 14;
          if (!(parseInt(b.offsetHeight, 10) < e)) {
            var f = e - parseInt(b.offsetHeight, 10) + 7;
            f !== a && (i.style.backgroundPosition = "-9px 0");
            new Fb({
              Nc: 60,
              fc: Gb.dt,
              duration: 300,
              Ba: function (c) {
                b.style.top = a + (f - a) * c + "px";
              },
            });
          }
        });
        z.V(g, "mouseout", function () {
          i.style.backgroundPosition = "0 0";
        });
        a.appendChild(e);
        a.appendChild(g);
        e = I("div");
        e.style.cssText = [
          "position:absolute;z-index:2001;left:20px;",
          "height:" + this.m.imageHeight + "px;",
          "width:62px;overflow:hidden;background:rgb(37,37,37);background:rgba(37,37,37,0.9);",
        ].join("");
        e.appendChild(b);
        e.appendChild(a);
        this.$i = e;
        this.aR = b;
        this.R.appendChild(e);
      }
    },
    AW: function () {
      if (this.dj && !(0 >= this.dj.length)) {
        var a = I("div");
        a.innerHTML = this.oA;
        a.style.cssText = "position:absolute;background:#252525";
        this.R.appendChild(a);
        this.ht = a;
        this.Yc.pg.style.left = this.ng.width + 8 + "px";
        this.$i &&
          (this.$i.style.left = parseInt(this.$i.style.left, 10) + this.ng.width + 8 + "px");
        var b = this;
        z.V(a, "click", function () {
          b.W.Gc(b.xX);
        });
      }
    },
    kj: function (a) {
      this.rk = a;
      this.m.showCatalog &&
        (0 < this.dj.length
          ? (db() ? this.zW() : this.DW(), (this.Yc.offsetLeft = 60))
          : (this.ht &&
              (this.R.removeChild(this.ht), (this.ht = s), (this.Yc.pg.style.left = "0px")),
            this.$i && (this.R.removeChild(this.$i), (this.$i = s)),
            (this.Yc.offsetLeft = 0)));
      var b = this.jY(a);
      db() &&
        this.dj &&
        0 < this.dj.length &&
        this.m.showExit &&
        this.oA &&
        ((this.Yc.offsetLeft += this.ng.width + 8),
        this.ht ? (this.ht.innerHTML = this.oA) : this.AW());
      this.ci.innerHTML = b;
      this.ci.style.width = (this.ng.width + 8) * a.length + 8 + "px";
      a = this.R.offsetWidth;
      b = this.ci.offsetWidth;
      this.Yc.ot && (b += this.Yc.ot());
      b < a - 2 * this.Yc.Ti - this.Yc.offsetLeft
        ? (this.R.style.width = b + this.Yc.offsetLeft + "px")
        : ((this.R.style.width =
            isNaN(Number(this.m.maxWidth)) === q ? this.m.maxWidth : this.m.maxWidth + "px"),
          b < this.R.offsetWidth - 2 * this.Yc.Ti - this.Yc.offsetLeft &&
            (this.R.style.width = b + this.Yc.offsetLeft + "px"));
      this.Yc.refresh();
      this.KB = this.ci.children;
      this.ci.appendChild(this.uk);
      this.uk.style.left = "-100000px";
      a = this.gI(this.W.ac(), this.Y2);
      -1 !== a && this.rq(a);
    },
    pY: function (a) {
      for (var b = "", c, e = 0, f = a.length; e < f; e++)
        (c =
          '<div style="color:white;opacity:0.5;margin:0 35px;float:left;text-align: center"><span  dataIndex="' +
          a[e].index +
          '">' +
          a[e].data +
          "</span></div>"),
          (b += c);
      return b;
    },
    RL: function (a) {
      for (var b = "", c, e = 0, f = a.length; e < f; e++)
        (c =
          '<li class="pano_catlogLi"><span style="display:block;width:100%;" dataIndex="' +
          a[e].index +
          '">' +
          a[e].data +
          "</span></li>"),
          (b += c);
      return b;
    },
    jY: function (a) {
      for (var b, c, e, f, g = [], i = this.ng.height, k = this.ng.width, m = 0; m < a.length; m++)
        (b = a[m]),
          (recoType = b.recoType),
          (e = b.panoId),
          (f = b.name),
          (c = b.heading),
          (b = b.pitch),
          (c = eg.dM(e, c, b, 198, 108)),
          (b =
            '<a href="javascript:void(0);" class="pano_photo_item" data-index="' +
            m +
            '"><img style="width:' +
            (k - 2) +
            "px;height:" +
            (i - 2) +
            'px;" data-index="' +
            m +
            '" name="' +
            f +
            '" src="' +
            c +
            '" alt="' +
            f +
            '"/><span class="pano_photo_decs" data-index="' +
            m +
            '" style="width:' +
            k +
            "px;font-size:" +
            Math.floor(i / 6) +
            "px; line-height:" +
            Math.floor(i / 6) +
            'px;"><em class="pano_poi_' +
            recoType +
            '"></em>' +
            f +
            "</span></a>"),
          3 === recoType
            ? db()
              ? ((this.oA = b), (this.xX = e), a.splice(m, 1), m--)
              : ((b =
                  '<a href="javascript:void(0);" class="pano_photo_item" data-index="' +
                  m +
                  '"><img style="width:' +
                  (k - 2) +
                  "px;height:" +
                  (i - 2) +
                  'px;" data-index="' +
                  m +
                  '" name="' +
                  f +
                  '" src="' +
                  c +
                  '" alt="' +
                  f +
                  '"/><div style="background:rgba(37,37,37,0.5);position:absolute;top:0px;left:0px;width:100%;height:100%;text-align: center;line-height:' +
                  this.m.imageHeight +
                  'px;" data-index="' +
                  m +
                  '"><img src="' +
                  L.ta +
                  'panorama/photoexit.png" style="border:none;vertical-align:middle;" data-index="' +
                  m +
                  '" alt=""/></div></a>'),
                g.push(b))
            : g.push(b);
      return g.join("");
    },
    BY: function (a) {
      var b = this,
        c = this.W.ac();
      c &&
        this.gm.Rx(c, function (e) {
          b.W.ac() === c && a(e);
        });
    },
    wc: function (a) {
      if (!gb(a) || isNaN(a) || a < fd || 3 < a) a = this.defaultAnchor;
      var b = this.R,
        c = this.m.offset.width,
        e = this.m.offset.height;
      b.style.left = b.style.top = b.style.right = b.style.bottom = "auto";
      switch (a) {
        case fd:
          b.style.top = e + "px";
          b.style.left = c + "px";
          break;
        case hd:
          b.style.top = e + "px";
          b.style.right = c + "px";
          break;
        case id:
          b.style.bottom = e + "px";
          b.style.left = c + "px";
          break;
        case 3:
          (b.style.bottom = e + "px"), (b.style.right = c + "px");
      }
    },
    LQ: function () {
      this.JQ();
    },
    JQ: function () {
      var a = this;
      z.V(this.R, "touchstart", function (a) {
        a.stopPropagation();
      });
      z.V(this.vk, "click", function (b) {
        if ((b = (b.srcElement || b.target).getAttribute("data-index")) && b != a.gd)
          a.rq(b), a.W.Gc(a.rk[b].panoId);
      });
      z.V(this.ci, "mouseover", function (b) {
        b = (b.srcElement || b.target).getAttribute("data-index");
        b !== s && a.SK(b, q);
      });
      this.W.addEventListener("size_changed", function () {
        isNaN(Number(a.m.maxWidth)) && a.Mj({ maxWidth: a.m.maxWidth });
      });
    },
    rq: function (a) {
      this.uk.style.left = this.KB[a].offsetLeft + 8 + "px";
      this.uk.setAttribute("data-index", this.KB[a].getAttribute("data-index"));
      this.gd = a;
      this.SK(a);
    },
    SK: function (a, b) {
      var c = this.ng.width + 8,
        e = 0;
      this.Yc.ot && (e = this.Yc.ot() / 2);
      var f = this.vk.offsetWidth - 2 * e,
        g = this.ci.offsetLeft || this.Yc.x,
        g = g - e,
        i = -a * c;
      i > g && this.Yc.scrollTo(i + e);
      c = i - c;
      g -= f;
      c < g && (!b || (b && 8 < i - g)) && this.Yc.scrollTo(c + f + e);
    },
    lZ: function () {
      this.Yc = M()
        ? new Kg(this.vk, { bp: t, xy: q, vi: t, Pi: t, Fn: t, YE: q, dx: q, Vx: q })
        : new Pg(this.vk);
    },
    aa: function () {
      this.R.style.visibility = "hidden";
    },
    show: function () {
      this.R.style.visibility = "visible";
    },
  });
  function Pg(a) {
    this.R = a;
    this.lh = a.children[0];
    this.hs = s;
    this.Ti = 20;
    this.offsetLeft = 0;
    this.za();
  }
  Pg.prototype = {
    za: function () {
      this.lh.style.position = "relative";
      this.refresh();
      this.Ls();
      this.xC();
    },
    refresh: function () {
      this.yo = this.R.offsetWidth - this.ot();
      this.iB = -(this.lh.offsetWidth - this.yo - this.Ti);
      this.Yv = this.Ti + this.offsetLeft;
      this.lh.style.left = this.Yv + "px";
      this.lh.children[0] && (this.hs = this.lh.children[0].offsetWidth);
      this.pg &&
        (this.pg.children[0].style.marginTop = this.bs.children[0].style.marginTop =
          this.pg.offsetHeight / 2 - this.pg.children[0].offsetHeight / 2 + "px");
    },
    ot: function () {
      return 2 * this.Ti;
    },
    Ls: function () {
      this.ow = I("div");
      this.ow.innerHTML =
        '<a class="pano_photo_arrow_l" style="background:rgb(37,37,37);background:rgba(37,37,37,0.9);" href="javascript:void(0)" title="\u4e0a\u4e00\u9875"><span class="pano_arrow_l"></span></a><a class="pano_photo_arrow_r" style="background:rgb(37,37,37);background:rgba(37,37,37,0.9);" href="javascript:void(0)" title="\u4e0b\u4e00\u9875"><span class="pano_arrow_r"></span></a>';
      this.pg = this.ow.children[0];
      this.bs = this.ow.children[1];
      this.R.appendChild(this.ow);
      this.pg.children[0].style.marginTop = this.bs.children[0].style.marginTop =
        this.pg.offsetHeight / 2 - this.pg.children[0].offsetHeight / 2 + "px";
    },
    xC: function () {
      var a = this;
      z.V(this.pg, "click", function () {
        a.scrollTo(a.lh.offsetLeft + a.yo);
      });
      z.V(this.bs, "click", function () {
        a.scrollTo(a.lh.offsetLeft - a.yo);
      });
    },
    hV: function () {
      z.U.rc(this.pg, "pano_arrow_disable");
      z.U.rc(this.bs, "pano_arrow_disable");
      var a = this.lh.offsetLeft;
      a >= this.Yv && z.U.jb(this.pg, "pano_arrow_disable");
      a - this.yo <= this.iB && z.U.jb(this.bs, "pano_arrow_disable");
    },
    scrollTo: function (a) {
      a =
        a < this.lh.offsetLeft
          ? Math.ceil((a - this.Ti - this.yo) / this.hs) * this.hs + this.yo + this.Ti - 8
          : Math.ceil((a - this.Ti) / this.hs) * this.hs + this.Ti;
      a < this.iB ? (a = this.iB) : a > this.Yv && (a = this.Yv);
      var b = this.lh.offsetLeft,
        c = this;
      new Fb({
        Nc: 60,
        fc: Gb.dt,
        duration: 300,
        Ba: function (e) {
          c.lh.style.left = b + (a - b) * e + "px";
        },
        finish: function () {
          c.hV();
        },
      });
    },
  };
  function Qg() {
    var a = 256 * Math.pow(2, 15),
      b = 3 * a,
      c = U.Sa(new S(180, 0)).lng,
      b = b - c,
      e = -3 * a,
      a = U.Sa(new S(-180, 0)).lng,
      e = a - e;
    this.iV = c / Math.pow(2, 15);
    this.rg = c;
    this.gh = a;
    this.Pl = b + e;
    this.hh = c - a;
    this.VU = b;
    this.zT = e;
  }
  Qg.prototype = {
    wm: function (a, b, c, e) {
      for (
        var f = 0, b = (1536 * Math.pow(2, b - 3)) / (c || 256), c = b / 2 - 1, g = -b / 2;
        a > c;

      )
        (a -= b), (f -= this.Pl);
      for (; a < g; ) (a += b), (f += this.Pl);
      var i = f,
        f = Math.round(f / Math.pow(2, 18 - e));
      return { offsetX: f, k4: i, qh: a, l2: b, U5: c, V5: g };
    },
    zC: function (a) {
      for (var b = a.lng; b > this.rg; ) b -= this.hh;
      for (; b < this.gh; ) b += this.hh;
      a.lng = b;
      return a;
    },
    YV: function (a, b) {
      for (var c = b || a.Hb(), e = a.pf.lng, f = a.mf.lng; c.lng > this.rg; )
        (c.lng -= this.hh), (e -= this.hh), (f -= this.hh);
      for (; c.lng < this.gh; ) (c.lng += this.hh), (e += this.hh), (f += this.hh);
      a.pf.lng = e;
      a.mf.lng = f;
      return a;
    },
    AC: function (a, b, c, e) {
      for (
        var c = c || 256,
          f = e || Math.pow(2, 18 - b) * c,
          e = Math.floor(this.rg / f),
          g = Math.floor(this.gh / f),
          i = Math.floor(this.Pl / f),
          f = [],
          k = 0;
        k < a.length;
        k++
      ) {
        var m = a[k],
          n = m[0],
          m = m[1];
        if (n >= e) {
          if (((n += i), this.ky(n, b, c) !== q)) {
            var o = "id_" + n + "_" + m + "_" + b;
            a[o] || ((a[o] = q), f.push([n, m, b, c]));
          }
        } else
          n <= g &&
            ((n -= i),
            this.ky(n, b, c) !== q &&
              ((o = "id_" + n + "_" + m + "_" + b), a[o] || ((a[o] = q), f.push([n, m, b, c]))));
      }
      k = 0;
      for (e = f.length; k < e; k++) a.push(f[k]);
      for (k = a.length - 1; 0 <= k; k--) (n = a[k][0]), this.ky(n, b, c) && a.splice(k, 1);
      return a;
    },
    ky: function (a, b, c) {
      for (
        var e = Math.pow(2, b - 3), b = Math.round(this.iV * e), e = (1536 * e) / c;
        a > e / 2 - 1;

      )
        a -= e;
      for (; a < -(e / 2); ) a += e;
      return (0 < a && a * c > b) || (0 > a && Math.abs((a + 1) * c) > b) ? q : t;
    },
    NM: function (a, b) {
      return a < this.gh || b > this.rg;
    },
    iM: function (a) {
      return Math.round((this.VU + this.zT) / Math.pow(2, 18 - a));
    },
    LY: function (a, b, c) {
      var b = b || 256,
        e = Math.ceil(this.rg / c),
        f = Math.floor(this.gh / c);
      return a === e - 1
        ? ((a = ((this.rg - c * (e - 1)) / c) * b), (a = Math.round(a)), [0, 0, a, b])
        : a === f
        ? ((a = ((this.gh - c * f) / c) * b), (a = Math.round(Math.abs(a))), [a, 0, b, b])
        : s;
    },
  };
  var Me = new Qg();
  C.Map = Ra;
  C.Hotspot = sb;
  C.MapType = Re;
  C.Point = S;
  C.Pixel = T;
  C.Size = O;
  C.Bounds = pb;
  C.TileLayer = Yd;
  C.Projection = ud;
  C.MercatorProjection = U;
  C.PerspectiveProjection = rb;
  C.Copyright = function (a, b, c) {
    this.id = a;
    this.hb = b;
    this.content = c;
  };
  C.Overlay = xd;
  C.Label = Gd;
  C.GroundOverlay = Hd;
  C.PointCollection = Ld;
  C.Marker = Fd;
  C.CanvasLayer = Od;
  C.Icon = Bd;
  C.IconSequence = Dd;
  C.Symbol = Cd;
  C.Polyline = Sd;
  C.Polygon = Rd;
  C.InfoWindow = Ed;
  C.Circle = Td;
  C.Control = ed;
  C.NavigationControl = vb;
  C.GeolocationControl = jd;
  C.OverviewMapControl = xb;
  C.CopyrightControl = kd;
  C.ScaleControl = wb;
  C.MapTypeControl = yb;
  C.CityListControl = ld;
  C.PanoramaControl = nd;
  C.TrafficLayer = ee;
  C.CustomLayer = zb;
  C.ContextMenu = qd;
  C.MenuItem = td;
  C.LocalSearch = mb;
  C.TransitRoute = wf;
  C.DrivingRoute = zf;
  C.TruckRoute = Bf;
  C.WalkingRoute = Af;
  C.RidingRoute = Cf;
  C.Autocomplete = Mf;
  C.RouteSearch = Gf;
  C.Geocoder = Hf;
  C.LocalCity = Jf;
  C.Geolocation = Geolocation;
  C.Convertor = wd;
  C.BusLineSearch = Lf;
  C.Boundary = Kf;
  C.Panorama = Ua;
  C.PanoramaLabel = Tf;
  C.PanoramaService = pd;
  C.PanoramaCoverageLayer = od;
  C.PanoramaFlashInterface = cg;
  function V(a, b) {
    for (var c in b) a[c] = b[c];
  }
  V(window, {
    BMap: C,
    _jsload2: function (a, b) {
      ka.hz.xZ && ka.hz.set(a, b);
      ab.aW(a, b);
    },
    BMAP_API_VERSION: "2.0",
  });
  var Rg = Ra.prototype;
  V(Rg, {
    getBounds: Rg.Nd,
    getCenter: Rg.Hb,
    getMapType: Rg.ya,
    getSize: Rg.wb,
    setSize: Rg.Ie,
    getViewport: Rg.Ft,
    getZoom: Rg.la,
    centerAndZoom: Rg.fd,
    panTo: Rg.Hi,
    panBy: Rg.Ng,
    setCenter: Rg.Bf,
    setCurrentCity: Rg.KF,
    setMapType: Rg.Rg,
    setViewport: Rg.Sg,
    setZoom: Rg.Xc,
    highResolutionEnabled: Rg.ay,
    zoomTo: Rg.Ug,
    zoomIn: Rg.DG,
    zoomOut: Rg.EG,
    addHotspot: Rg.kC,
    removeHotspot: Rg.J_,
    clearHotspots: Rg.hx,
    checkResize: Rg.dW,
    addControl: Rg.Vo,
    removeControl: Rg.lO,
    getContainer: Rg.Ta,
    addContextMenu: Rg.nm,
    removeContextMenu: Rg.iq,
    addOverlay: Rg.Ra,
    removeOverlay: Rg.Lb,
    clearOverlays: Rg.OK,
    openInfoWindow: Rg.Vc,
    closeInfoWindow: Rg.Mc,
    pointToOverlayPixel: Rg.ef,
    overlayPixelToPoint: Rg.XN,
    getInfoWindow: Rg.wh,
    getOverlays: Rg.Ox,
    getPanes: function () {
      return {
        floatPane: this.ee.ND,
        markerMouseTarget: this.ee.aF,
        floatShadow: this.ee.HL,
        labelPane: this.ee.TE,
        markerPane: this.ee.vN,
        markerShadow: this.ee.wN,
        mapPane: this.ee.$t,
        vertexPane: this.ee.CP,
      };
    },
    addTileLayer: Rg.Ue,
    removeTileLayer: Rg.gg,
    pixelToPoint: Rg.cc,
    pointToPixel: Rg.vc,
    setFeatureStyle: Rg.R6,
    selectBaseElement: Rg.K6,
    setMapStyle: Rg.uu,
    enable3DBuilding: Rg.qp,
    disable3DBuilding: Rg.SW,
    getPanorama: Rg.zt,
    initIndoorLayer: Rg.mZ,
    setNormalMapDisplay: Rg.Wy,
    setMapStyleV2: Rg.n0,
    setBMapCopyrightOffset: Rg.JF,
    getVectorContainer: Rg.RY,
  });
  V(window, {
    BMAP_COORD_MERCATOR: Qa,
    BMAP_COORD_BD09: 5,
    BMAP_COORD_GCJ02: Pa,
    BMAP_COORD_GCJ02MERCATOR: 4,
    BMAP_COORD_WGS84: 2,
    BMAP_COORD_EPSG3857: 6,
  });
  var Sg = Re.prototype;
  V(Sg, {
    getTileLayer: Sg.KY,
    getMinZoom: Sg.uf,
    getMaxZoom: Sg.Ze,
    getProjection: Sg.Bj,
    getTextColor: Sg.Rm,
    getTips: Sg.Dt,
  });
  V(window, {
    BMAP_NORMAL_MAP: Sa,
    BMAP_PERSPECTIVE_MAP: Xa,
    BMAP_SATELLITE_MAP: $a,
    BMAP_HYBRID_MAP: Za,
  });
  var Tg = U.prototype;
  V(Tg, { lngLatToPoint: Tg.Kg, pointToLngLat: Tg.Kj });
  var Ug = rb.prototype;
  V(Ug, { lngLatToPoint: Ug.Kg, pointToLngLat: Ug.Kj });
  var Vg = pb.prototype;
  V(Vg, {
    equals: Vg.Vb,
    containsPoint: Vg.Is,
    containsBounds: Vg.oW,
    intersects: Vg.Mt,
    extend: Vg.extend,
    getCenter: Vg.Hb,
    isEmpty: Vg.Gj,
    getSouthWest: Vg.Pd,
    getNorthEast: Vg.Ce,
    toSpan: Vg.nG,
  });
  var Wg = xd.prototype;
  V(Wg, { isVisible: Wg.Oc, show: Wg.show, hide: Wg.aa });
  xd.getZIndex = xd.Sk;
  var Xg = qb.prototype;
  V(Xg, {
    openInfoWindow: Xg.Vc,
    closeInfoWindow: Xg.Mc,
    enableMassClear: Xg.xj,
    disableMassClear: Xg.UW,
    show: Xg.show,
    hide: Xg.aa,
    getMap: Xg.Lx,
    addContextMenu: Xg.nm,
    removeContextMenu: Xg.iq,
  });
  var Yg = Fd.prototype;
  V(Yg, {
    setIcon: Yg.Xb,
    getIcon: Yg.Cp,
    setPosition: Yg.va,
    getPosition: Yg.ma,
    setOffset: Yg.Td,
    getOffset: Yg.zj,
    getLabel: Yg.vt,
    setLabel: Yg.Lj,
    setTitle: Yg.Hc,
    setTop: Yg.Li,
    enableDragging: Yg.jc,
    disableDragging: Yg.Us,
    setZIndex: Yg.wq,
    getMap: Yg.Lx,
    setAnimation: Yg.vn,
    setShadow: Yg.$y,
    hide: Yg.aa,
    setRotation: Yg.Yy,
    getRotation: Yg.hM,
  });
  V(window, { BMAP_ANIMATION_DROP: 1, BMAP_ANIMATION_BOUNCE: 2 });
  var Zg = Gd.prototype;
  V(Zg, {
    setStyle: Zg.Vd,
    setStyles: Zg.Ki,
    setContent: Zg.Qc,
    setPosition: Zg.va,
    getPosition: Zg.ma,
    setOffset: Zg.Td,
    getOffset: Zg.zj,
    setTitle: Zg.Hc,
    setZIndex: Zg.wq,
    getMap: Zg.Lx,
    getContent: Zg.Mk,
  });
  var $g = Bd.prototype;
  V($g, {
    setImageUrl: $g.CO,
    setSize: $g.Ie,
    setAnchor: $g.wc,
    setImageOffset: $g.tu,
    setImageSize: $g.h0,
    setInfoWindowAnchor: $g.k0,
    setPrintImageUrl: $g.w0,
  });
  var ah = Ed.prototype;
  V(ah, {
    redraw: ah.se,
    setTitle: ah.Hc,
    setContent: ah.Qc,
    getContent: ah.Mk,
    getPosition: ah.ma,
    enableMaximize: ah.uh,
    disableMaximize: ah.ux,
    isOpen: ah.eb,
    setMaxContent: ah.vu,
    maximize: ah.vy,
    enableAutoPan: ah.ft,
  });
  var bh = zd.prototype;
  V(bh, {
    getPath: bh.af,
    setPath: bh.Ud,
    setPositionAt: bh.zn,
    getStrokeColor: bh.HY,
    setStrokeWeight: bh.vq,
    getStrokeWeight: bh.lM,
    setStrokeOpacity: bh.tq,
    getStrokeOpacity: bh.IY,
    setFillOpacity: bh.su,
    getFillOpacity: bh.cY,
    setStrokeStyle: bh.uq,
    getStrokeStyle: bh.kM,
    getFillColor: bh.bY,
    getBounds: bh.Nd,
    enableEditing: bh.Ae,
    disableEditing: bh.TW,
    getEditing: bh.ZX,
    getGeodesicPath: bh.fY,
  });
  var ch = Td.prototype;
  V(ch, { setCenter: ch.Bf, getCenter: ch.Hb, getRadius: ch.fM, setRadius: ch.Cf });
  var dh = Rd.prototype;
  V(dh, { getPath: dh.af, setPath: dh.Ud, setPositionAt: dh.zn });
  var eh = sb.prototype;
  V(eh, { getPosition: eh.ma, setPosition: eh.va, getText: eh.qE, setText: eh.yu });
  S.prototype.equals = S.prototype.Vb;
  T.prototype.equals = T.prototype.Vb;
  O.prototype.equals = O.prototype.Vb;
  V(window, {
    BMAP_ANCHOR_TOP_LEFT: fd,
    BMAP_ANCHOR_TOP_RIGHT: hd,
    BMAP_ANCHOR_BOTTOM_LEFT: id,
    BMAP_ANCHOR_BOTTOM_RIGHT: 3,
  });
  var fh = ed.prototype;
  V(fh, {
    setAnchor: fh.wc,
    getAnchor: fh.UD,
    setOffset: fh.Td,
    getOffset: fh.zj,
    show: fh.show,
    hide: fh.aa,
    isVisible: fh.Oc,
    toString: fh.toString,
  });
  var gh = vb.prototype;
  V(gh, { getType: gh.Kp, setType: gh.An });
  V(window, {
    BMAP_NAVIGATION_CONTROL_LARGE: 0,
    BMAP_NAVIGATION_CONTROL_SMALL: 1,
    BMAP_NAVIGATION_CONTROL_PAN: 2,
    BMAP_NAVIGATION_CONTROL_ZOOM: 3,
  });
  var hh = xb.prototype;
  V(hh, { changeView: hh.we, setSize: hh.Ie, getSize: hh.wb });
  var ih = wb.prototype;
  V(ih, { getUnit: ih.QY, setUnit: ih.UF });
  V(window, { BMAP_UNIT_METRIC: "metric", BMAP_UNIT_IMPERIAL: "us" });
  var jh = kd.prototype;
  V(jh, {
    addCopyright: jh.Uw,
    removeCopyright: jh.wF,
    getCopyright: jh.Im,
    getCopyrightCollection: jh.aE,
  });
  V(window, {
    BMAP_MAPTYPE_CONTROL_HORIZONTAL: md,
    BMAP_MAPTYPE_CONTROL_DROPDOWN: 1,
    BMAP_MAPTYPE_CONTROL_MAP: 2,
  });
  var kh = Yd.prototype;
  V(kh, { getMapType: kh.ya, getCopyright: kh.Im, isTransparentPng: kh.Ut });
  var lh = qd.prototype;
  V(lh, { addItem: lh.As, addSeparator: lh.nC, removeSeparator: lh.zF });
  var mh = td.prototype;
  V(mh, { setText: mh.yu });
  var nh = Y.prototype;
  V(nh, {
    getStatus: nh.Pm,
    setSearchCompleteCallback: nh.xu,
    getPageCapacity: nh.$e,
    setPageCapacity: nh.xn,
    setLocation: nh.wn,
    disableFirstResultSelection: nh.eD,
    enableFirstResultSelection: nh.yD,
    gotoPage: nh.Sm,
    searchNearby: nh.pq,
    searchInBounds: nh.tn,
    search: nh.search,
  });
  V(window, {
    BMAP_STATUS_SUCCESS: 0,
    BMAP_STATUS_CITY_LIST: 1,
    BMAP_STATUS_UNKNOWN_LOCATION: df,
    BMAP_STATUS_UNKNOWN_ROUTE: 3,
    BMAP_STATUS_INVALID_KEY: 4,
    BMAP_STATUS_INVALID_REQUEST: 5,
    BMAP_STATUS_PERMISSION_DENIED: ef,
    BMAP_STATUS_SERVICE_UNAVAILABLE: 7,
    BMAP_STATUS_TIMEOUT: ff,
  });
  V(window, {
    BMAP_POI_TYPE_NORMAL: 0,
    BMAP_POI_TYPE_BUSSTOP: 1,
    BMAP_POI_TYPE_BUSLINE: 2,
    BMAP_POI_TYPE_SUBSTOP: 3,
    BMAP_POI_TYPE_SUBLINE: 4,
  });
  V(window, {
    BMAP_TRANSIT_POLICY_RECOMMEND: 0,
    BMAP_TRANSIT_POLICY_LEAST_TIME: 4,
    BMAP_TRANSIT_POLICY_LEAST_TRANSFER: 1,
    BMAP_TRANSIT_POLICY_LEAST_WALKING: 2,
    BMAP_TRANSIT_POLICY_AVOID_SUBWAYS: 3,
    BMAP_TRANSIT_POLICY_FIRST_SUBWAYS: 5,
    BMAP_LINE_TYPE_BUS: 0,
    BMAP_LINE_TYPE_SUBWAY: 1,
    BMAP_LINE_TYPE_FERRY: 2,
    BMAP_LINE_TYPE_TRAIN: 3,
    BMAP_LINE_TYPE_AIRPLANE: 4,
    BMAP_LINE_TYPE_COACH: 5,
  });
  V(window, {
    BMAP_TRANSIT_TYPE_POLICY_TRAIN: 0,
    BMAP_TRANSIT_TYPE_POLICY_AIRPLANE: 1,
    BMAP_TRANSIT_TYPE_POLICY_COACH: 2,
  });
  V(window, {
    BMAP_INTERCITY_POLICY_LEAST_TIME: 0,
    BMAP_INTERCITY_POLICY_EARLY_START: 1,
    BMAP_INTERCITY_POLICY_CHEAP_PRICE: 2,
  });
  V(window, { BMAP_TRANSIT_TYPE_IN_CITY: 0, BMAP_TRANSIT_TYPE_CROSS_CITY: 1 });
  V(window, { BMAP_TRANSIT_PLAN_TYPE_ROUTE: 0, BMAP_TRANSIT_PLAN_TYPE_LINE: 1 });
  var oh = vf.prototype;
  V(oh, { clearResults: oh.xe });
  xf = wf.prototype;
  V(xf, {
    setPolicy: xf.yn,
    toString: xf.toString,
    setPageCapacity: xf.xn,
    setIntercityPolicy: xf.NF,
    setTransitTypePolicy: xf.SF,
  });
  V(Bf.prototype, {
    setPolicy: Bf.yn,
    toString: Bf.toString,
    setPageCapacity: Bf.xn,
    setIntercityPolicy: Bf.NF,
    setTransitTypePolicy: Bf.SF,
  });
  V(window, {
    BMAP_DRIVING_POLICY_DEFAULT: 0,
    BMAP_DRIVING_POLICY_AVOID_HIGHWAYS: 3,
    BMAP_DRIVING_POLICY_AVOID_CONGESTION: 5,
    BMAP_DRIVING_POLICY_FIRST_HIGHWAYS: 4,
  });
  V(window, {
    BMAP_MODE_DRIVING: "driving",
    BMAP_MODE_TRANSIT: "transit",
    BMAP_MODE_WALKING: "walking",
    BMAP_MODE_NAVIGATION: "navigation",
  });
  var ph = Gf.prototype;
  V(ph, { routeCall: ph.wO });
  V(window, { BMAP_HIGHLIGHT_STEP: 1, BMAP_HIGHLIGHT_ROUTE: 2 });
  V(window, {
    BMAP_ROUTE_TYPE_DRIVING: hf,
    BMAP_ROUTE_TYPE_WALKING: gf,
    BMAP_ROUTE_TYPE_RIDING: jf,
  });
  V(window, {
    BMAP_ROUTE_STATUS_NORMAL: kf,
    BMAP_ROUTE_STATUS_EMPTY: 1,
    BMAP_ROUTE_STATUS_ADDRESS: 2,
  });
  var qh = zf.prototype;
  V(qh, { setPolicy: qh.yn });
  var rh = Mf.prototype;
  V(rh, {
    show: rh.show,
    hide: rh.aa,
    setTypes: rh.TF,
    setLocation: rh.wn,
    search: rh.search,
    setInputValue: rh.Vy,
  });
  V(zb.prototype, {});
  var sh = Kf.prototype;
  V(sh, { get: sh.get });
  V(od.prototype, {});
  V(window, {
    BMAP_POINT_DENSITY_HIGH: 200,
    BMAP_POINT_DENSITY_MEDIUM: he,
    BMAP_POINT_DENSITY_LOW: 50,
  });
  V(window, {
    BMAP_POINT_SHAPE_STAR: 1,
    BMAP_POINT_SHAPE_WATERDROP: 2,
    BMAP_POINT_SHAPE_CIRCLE: Id,
    BMAP_POINT_SHAPE_SQUARE: 4,
    BMAP_POINT_SHAPE_RHOMBUS: 5,
  });
  V(window, {
    BMAP_POINT_SIZE_TINY: 1,
    BMAP_POINT_SIZE_SMALLER: 2,
    BMAP_POINT_SIZE_SMALL: 3,
    BMAP_POINT_SIZE_NORMAL: Jd,
    BMAP_POINT_SIZE_BIG: 5,
    BMAP_POINT_SIZE_BIGGER: 6,
    BMAP_POINT_SIZE_HUGE: 7,
  });
  V(window, {
    BMap_Symbol_SHAPE_CAMERA: 11,
    BMap_Symbol_SHAPE_WARNING: 12,
    BMap_Symbol_SHAPE_SMILE: 13,
    BMap_Symbol_SHAPE_CLOCK: 14,
    BMap_Symbol_SHAPE_POINT: 9,
    BMap_Symbol_SHAPE_PLANE: 10,
    BMap_Symbol_SHAPE_CIRCLE: 1,
    BMap_Symbol_SHAPE_RECTANGLE: 2,
    BMap_Symbol_SHAPE_RHOMBUS: 3,
    BMap_Symbol_SHAPE_STAR: 4,
    BMap_Symbol_SHAPE_BACKWARD_CLOSED_ARROW: 5,
    BMap_Symbol_SHAPE_FORWARD_CLOSED_ARROW: 6,
    BMap_Symbol_SHAPE_BACKWARD_OPEN_ARROW: 7,
    BMap_Symbol_SHAPE_FORWARD_OPEN_ARROW: 8,
  });
  V(window, { BMAP_CONTEXT_MENU_ICON_ZOOMIN: rd, BMAP_CONTEXT_MENU_ICON_ZOOMOUT: sd });
  V(window, {
    BMAP_SYS_DRAWER: Oa,
    BMAP_SVG_DRAWER: 1,
    BMAP_VML_DRAWER: 2,
    BMAP_CANVAS_DRAWER: 3,
    BMAP_SVG_DRAWER_FIRST: 4,
  });
  C.zV();
  C.oz();
})();
