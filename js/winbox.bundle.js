/**
 * WinBox.js v0.2.2 (Bundle)
 * Copyright 2021 Nextapps GmbH
 * Author: Thomas Wilkerling
 * Licence: Apache-2.0
 * https://github.com/nextapps-de/winbox
 */
(function () {
  "use strict";
  var e,
    l = document.createElement("style");
  l.innerHTML =
    "@keyframes wb-fade-in{0%{opacity:0}to{opacity:.85}}.winbox{position:fixed;left:0;top:0;min-height:35px;background:#0050ff;box-shadow:0 14px 28px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.22);transition:width .3s,height .3s,transform .3s;transition-timing-function:cubic-bezier(.3,1,.3,1);will-change:transform,width,height;contain:layout size;text-align:left;touch-action:none}.wb-header{position:absolute;left:0;top:0;width:100%;height:35px;color:#fff;overflow:hidden;z-index:1}.wb-n,.wb-s{height:10px;left:0}.wb-body{top:35px;left:0;right:0;bottom:0;overflow:auto;-webkit-overflow-scrolling:touch;overflow-scrolling:touch;will-change:contents;background:#fff;margin-top:0!important;contain:strict}body>.wb-body{position:relative;display:inline-block;visibility:hidden;contain:none}.wb-body,.wb-e,.wb-n,.wb-nw,.wb-s,.wb-w,.winbox iframe{position:absolute}.wb-title{font-family:Arial,sans-serif;font-size:14px;padding-left:10px;line-height:35px;cursor:move;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.wb-n{top:-5px;right:0;cursor:n-resize;z-index:2}.wb-e,.wb-ne,.wb-se{right:-5px}.wb-e{top:0;bottom:0;width:10px;cursor:w-resize;z-index:2}.wb-s{bottom:-5px;right:0;cursor:n-resize;z-index:2}.wb-w{top:0;left:-5px;bottom:0;width:10px;cursor:w-resize;z-index:2}.wb-ne,.wb-nw,.wb-sw{width:15px;height:15px;z-index:2}.wb-nw{top:-5px;left:-5px;cursor:nw-resize}.wb-ne,.wb-sw{cursor:ne-resize;position:absolute}.wb-ne{top:-5px}.wb-sw{bottom:-5px;left:-5px}.wb-se{position:absolute;bottom:-5px;width:15px;height:15px;cursor:nw-resize;z-index:2}.wb-icon{float:right;height:35px;max-width:100%;text-align:center}.wb-icon *{display:inline-block;width:30px;height:100%;background-position:center;background-repeat:no-repeat;cursor:pointer;max-width:100%}.no-close .wb-close,.no-full .wb-full,.no-header .wb-header,.no-max .wb-max,.no-min .wb-min,.no-resize .wb-body~div,.wb-body .wb-hide,.wb-show,.winbox.hide,.winbox.min .wb-body>*,.winbox.min .wb-full,.winbox.min .wb-min,.winbox.modal .wb-full,.winbox.modal .wb-max,.winbox.modal .wb-min{display:none}.winbox.max .wb-title,.winbox.min .wb-title{cursor:default}.wb-min{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAyIj48cGF0aCBmaWxsPSIjZmZmIiBkPSJNOCAwaDdhMSAxIDAgMCAxIDAgMkgxYTEgMSAwIDAgMSAwLTJoN3oiLz48L3N2Zz4=);background-size:14px auto;background-position:center bottom 12px}.wb-max{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNmZmYiIHZpZXdCb3g9IjAgMCA5NiA5NiI+PHBhdGggZD0iTTIwIDcxLjMxMUMxNS4zNCA2OS42NyAxMiA2NS4yMyAxMiA2MFYyMGMwLTYuNjMgNS4zNy0xMiAxMi0xMmg0MGM1LjIzIDAgOS42NyAzLjM0IDExLjMxMSA4SDI0Yy0yLjIxIDAtNCAxLjc5LTQgNHY1MS4zMTF6Ii8+PHBhdGggZD0iTTkyIDc2VjM2YzAtNi42My01LjM3LTEyLTEyLTEySDQwYy02LjYzIDAtMTIgNS4zNy0xMiAxMnY0MGMwIDYuNjMgNS4zNyAxMiAxMiAxMmg0MGM2LjYzIDAgMTItNS4zNyAxMi0xMnptLTUyIDRjLTIuMjEgMC00LTEuNzktNC00VjM2YzAtMi4yMSAxLjc5LTQgNC00aDQwYzIuMjEgMCA0IDEuNzkgNCA0djQwYzAgMi4yMS0xLjc5IDQtNCA0SDQweiIvPjwvc3ZnPg==);background-size:17px auto}.wb-close{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xIC0xIDE4IDE4Ij48cGF0aCBmaWxsPSIjZmZmIiBkPSJtMS42MTMuMjEuMDk0LjA4M0w4IDYuNTg1IDE0LjI5My4yOTNsLjA5NC0uMDgzYTEgMSAwIDAgMSAxLjQwMyAxLjQwM2wtLjA4My4wOTRMOS40MTUgOGw2LjI5MiA2LjI5M2ExIDEgMCAwIDEtMS4zMiAxLjQ5N2wtLjA5NC0uMDgzTDggOS40MTVsLTYuMjkzIDYuMjkyLS4wOTQuMDgzQTEgMSAwIDAgMSAuMjEgMTQuMzg3bC4wODMtLjA5NEw2LjU4NSA4IC4yOTMgMS43MDdBMSAxIDAgMCAxIDEuNjEzLjIxeiIvPjwvc3ZnPg==);background-size:15px auto;background-position:4px center}.wb-full{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjIuNSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNOCAzSDVhMiAyIDAgMCAwLTIgMnYzbTE4IDBWNWEyIDIgMCAwIDAtMi0yaC0zbTAgMThoM2EyIDIgMCAwIDAgMi0ydi0zTTMgMTZ2M2EyIDIgMCAwIDAgMiAyaDMiLz48L3N2Zz4=);background-size:16px auto}.winbox.max .wb-body~div,.winbox.min .wb-body~div,.winbox.modal .wb-body~div,.winbox.modal .wb-title,body.wb-drag iframe{pointer-events:none}.winbox.min .wb-body{overflow:hidden;height:0}.winbox.hide{visibility:hidden}.winbox.max .wb-body{margin:0!important}.winbox iframe{width:100%;height:100%;border:0}.no-animation,body.wb-drag .winbox{transition:none}.winbox.modal:before{content:'';position:absolute;top:0;left:0;right:0;bottom:0;background:inherit;border-radius:inherit}.winbox.modal:after{content:'';position:absolute;top:-100vh;left:-100vw;right:-100vw;bottom:-100vh;background:#0d1117;animation:wb-fade-in .2s ease-out forwards;z-index:-1}.no-shadow,.winbox.max{box-shadow:none}.no-header .wb-body{top:0}.no-move:not(.min) .wb-title{pointer-events:none}.wb-body .wb-show{display:revert}";
  var m = document.getElementsByTagName("head")[0];
  m.firstChild ? m.insertBefore(l, m.firstChild) : m.appendChild(l);
  var p = document.createElement("div");
  p.innerHTML =
    "<div class=wb-header><div class=wb-icon><span class=wb-min></span><span class=wb-max></span><span class=wb-full></span><span class=wb-close></span></div><div class=wb-title> </div></div><div class=wb-body></div><div class=wb-n></div><div class=wb-s></div><div class=wb-w></div><div class=wb-e></div><div class=wb-nw></div><div class=wb-ne></div><div class=wb-se></div><div class=wb-sw></div>";
  function t(a, b, c, f) {
    a.addEventListener(b, c, f || !1 === f ? f : !0);
  }
  function x(a) {
    a.stopPropagation();
    a.cancelable && a.preventDefault();
  }
  function y(a, b, c) {
    c = "" + c;
    a["_s_" + b] !== c && (a.style.setProperty(b, c), (a["_s_" + b] = c));
  }
  var z = [],
    A,
    aa = 0,
    C = 0,
    E,
    F,
    G,
    H,
    L,
    P,
    R;
  function S(a, b) {
    if (!(this instanceof S)) return new S(a);
    A || ba();
    var c, f, d;
    if (a) {
      if (b) {
        var k = a;
        a = b;
      }
      if ("string" === typeof a) k = a;
      else {
        (d = a.oncreate) && d.call(this, a);
        if ((f = a.modal)) var h = (c = "center");
        var q = a.id;
        var I = a.root;
        var g = a.template;
        k = k || a.title;
        var B = a.mount;
        var u = a.html;
        var D = a.url;
        var n = a.width;
        var r = a.height;
        var v = a.minwidth;
        var w = a.minheight;
        h = a.x || h;
        c = a.y || c;
        var ca = a.min;
        var da = a.max;
        var ea = a.hidden;
        var J = a.top;
        var K = a.left;
        var M = a.bottom;
        var N = a.right;
        E = a.index || E;
        var Y = a.background;
        var O = a.border || 0;
        var Q = a["class"];
        var fa = a.autosize;
        var ha = a.onclose;
        var ia = a.onfocus;
        var ja = a.onblur;
        var ka = a.onmove;
        var la = a.onresize;
        var ma = a.onfullscreen;
        var na = a.onmaximize;
        var oa = a.onminimize;
        var pa = a.onrestore;
        var qa = a.onhide;
        var ra = a.onshow;
        var sa = a.onload;
      }
    }
    this.dom = g || p.cloneNode(!0);
    this.body = this.dom.getElementsByClassName("wb-body")[0];
    Y && this.setBackground(Y);
    O && y(this.body, "margin", O + (isNaN(O) ? "" : "px"));
    E = E || 10;
    B ? this.mount(B) : u ? (this.body.innerHTML = u) : D && this.setUrl(D, sa);
    this.setTitle(k || "");
    a = P;
    b = R;
    J = J ? T(J, b) : 0;
    M = M ? T(M, b) : 0;
    K = K ? T(K, a) : 0;
    N = N ? T(N, a) : 0;
    a -= K + N;
    b -= J + M;
    v = v ? T(v, a) : 150;
    w = w ? T(w, b) : 35;
    fa
      ? ((I || A).appendChild(this.body),
        (n = Math.max(Math.min(this.body.clientWidth + 2 * O, a), v)),
        (r = Math.min(this.body.clientHeight + w + O, b)),
        this.dom.appendChild(this.body))
      : ((n = n ? T(n, a) : (a / 2) | 0), (r = r ? T(r, b) : (b / 2) | 0));
    h = h ? T(h, a, n) : K;
    c = c ? T(c, b, r) : J;
    this.x = h;
    this.y = c;
    this.width = n;
    this.height = r;
    this.i = v;
    this.h = w;
    this.top = J;
    this.right = N;
    this.bottom = M;
    this.left = K;
    this.focused = this.hidden = this.full = this.max = this.min = !1;
    this.onclose = ha;
    this.onfocus = ia;
    this.onblur = ja;
    this.onmove = ka;
    this.onresize = la;
    this.onfullscreen = ma;
    this.onmaximize = na;
    this.onminimize = oa;
    this.onrestore = pa;
    this.onhide = qa;
    this.onshow = ra;
    this.dom.id = this.id = q || "winbox-" + ++aa;
    this.dom.className =
      "winbox" + (Q ? " " + ("string" === typeof Q ? Q : Q.join(" ")) : "") + (f ? " modal" : "");
    this.dom.winbox = this;
    da ? this.maximize() : ca ? this.minimize() : this.move().resize();
    ea ? this.hide() : this.focus();
    ta(this);
    (I || A).appendChild(this.dom);
  }
  S["new"] = function (a) {
    return new S(a);
  };
  function T(a, b, c) {
    "string" === typeof a &&
      ("center" === a
        ? (a = ((b - c) / 2) | 0)
        : "right" === a || "bottom" === a
          ? (a = b - c)
          : ((c = parseFloat(a)),
            (a =
              "%" === ("" + c !== a && a.substring(("" + c).length)) ? ((b / 100) * c) | 0 : c)));
    return a;
  }
  function ba() {
    A = document.body;
    A[(H = "requestFullscreen")] ||
      A[(H = "msRequestFullscreen")] ||
      A[(H = "webkitRequestFullscreen")] ||
      A[(H = "mozRequestFullscreen")] ||
      (H = "");
    L =
      H &&
      H.replace("request", "exit").replace("mozRequest", "mozCancel").replace("Request", "Exit");
    t(window, "resize", function () {
      U();
      V();
    });
    U();
  }
  function ta(a) {
    W(a, "title");
    W(a, "n");
    W(a, "s");
    W(a, "w");
    W(a, "e");
    W(a, "nw");
    W(a, "ne");
    W(a, "se");
    W(a, "sw");
    t(a.dom.getElementsByClassName("wb-min")[0], "click", function (b) {
      x(b);
      a.min ? a.restore() : a.minimize();
    });
    t(a.dom.getElementsByClassName("wb-max")[0], "click", function (b) {
      x(b);
      a.max ? a.restore() : a.maximize();
      a.focus();
    });
    H
      ? t(a.dom.getElementsByClassName("wb-full")[0], "click", function (b) {
          x(b);
          a.focus().fullscreen();
        })
      : a.addClass("no-full");
    t(a.dom.getElementsByClassName("wb-close")[0], "click", function (b) {
      x(b);
      a.close() || (a = null);
    });
    t(
      a.dom,
      "click",
      function () {
        a.focus();
      },
      !1,
    );
  }
  function X(a) {
    z.splice(z.indexOf(a), 1);
    V();
    a.removeClass("min");
    a.min = !1;
    a.dom.title = "";
  }
  function V() {
    for (var a = z.length, b = {}, c = {}, f = 0, d; f < a; f++)
      (d = z[f]), (d = d.left + ":" + d.top), c[d] ? c[d]++ : (c[d] = 1);
    f = 0;
    for (var k, h, q; f < a; f++)
      (d = z[f]),
        (k = d.left + ":" + d.top),
        (h = Math.min((P - d.left - d.right) / c[k], 250)),
        (q = d.dom.getElementsByClassName("wb-title")[0]),
        (q = q.clientHeight),
        b[k] || (b[k] = 0),
        d.resize((h + 1) | 0, 0, !0).move((d.left + b[k] * h) | 0, R - d.bottom - q, !0),
        b[k]++;
  }
  function W(a, b) {
    function c(g) {
      x(g);
      if ("title" === b) {
        var B = Date.now(),
          u = B - C;
        C = B;
        if (250 > u) {
          a.max ? a.restore() : a.maximize();
          return;
        }
        if (a.min) {
          a.restore();
          return;
        }
      }
      a.max ||
        a.min ||
        (A.classList.add("wb-drag"),
        (h = g.touches) && (h = h[0])
          ? ((g = h), t(window, "touchmove", f), t(window, "touchend", d))
          : (t(window, "mousemove", f), t(window, "mouseup", d)),
        (q = g.pageX),
        (I = g.pageY),
        a.focus());
    }
    function f(g) {
      x(g);
      h && (g = g.touches[0]);
      var B = g.pageX;
      g = g.pageY;
      var u = B - q,
        D = g - I,
        n;
      if ("title" === b) {
        a.x += u;
        a.y += D;
        var r = (n = 1);
      } else {
        if ("e" === b || "se" === b || "ne" === b) {
          a.width += u;
          var v = 1;
        } else if ("w" === b || "sw" === b || "nw" === b) (a.x += u), (a.width -= u), (r = v = 1);
        if ("s" === b || "se" === b || "sw" === b) {
          a.height += D;
          var w = 1;
        } else if ("n" === b || "ne" === b || "nw" === b) (a.y += D), (a.height -= D), (n = w = 1);
      }
      if (v || w)
        v && (a.width = Math.max(Math.min(a.width, P - a.x - a.right), a.i)),
          w && (a.height = Math.max(Math.min(a.height, R - a.y - a.bottom), a.h)),
          a.resize();
      if (r || n)
        r && (a.x = Math.max(Math.min(a.x, P - a.width - a.right), a.left)),
          n && (a.y = Math.max(Math.min(a.y, R - a.height - a.bottom), a.top)),
          a.move();
      q = B;
      I = g;
    }
    function d(g) {
      x(g);
      A.classList.remove("wb-drag");
      h
        ? (window.removeEventListener("touchmove", f, !0),
          window.removeEventListener("touchend", d, !0))
        : (window.removeEventListener("mousemove", f, !0),
          window.removeEventListener("mouseup", d, !0));
    }
    var k = a.dom.getElementsByClassName("wb-" + b)[0],
      h,
      q,
      I;
    t(k, "mousedown", c);
    t(k, "touchstart", c, { passive: !1 });
  }
  function U() {
    var a = document.documentElement;
    P = a.clientWidth;
    R = a.clientHeight;
  }
  e = S.prototype;
  e.mount = function (a) {
    this.unmount();
    a.g || (a.g = a.parentNode);
    this.body.textContent = "";
    this.body.appendChild(a);
    return this;
  };
  e.unmount = function (a) {
    var b = this.body.firstChild;
    if (b) {
      var c = a || b.g;
      c && c.appendChild(b);
      b.g = a;
    }
    return this;
  };
  e.setTitle = function (a) {
    a = this.title = a;
    this.dom.getElementsByClassName("wb-title")[0].firstChild.nodeValue = a;
    return this;
  };
  e.setBackground = function (a) {
    y(this.dom, "background", a);
    return this;
  };
  e.setUrl = function (a, b) {
    this.body.innerHTML = '<iframe src="' + a + '"></iframe>';
    b && (this.body.firstChild.onload = b);
    return this;
  };
  e.focus = function (a) {
    if (!1 === a) return this.blur();
    G !== this &&
      (G && G.blur(),
      y(this.dom, "z-index", E++),
      this.addClass("focus"),
      (G = this),
      (this.focused = !0),
      this.onfocus && this.onfocus());
    return this;
  };
  e.blur = function (a) {
    if (!1 === a) return this.focus();
    G === this &&
      (this.removeClass("focus"), (this.focused = !1), this.onblur && this.onblur(), (G = null));
    return this;
  };
  e.hide = function (a) {
    if (!1 === a) return this.show();
    if (!this.hidden)
      return this.onhide && this.onhide(), (this.hidden = !0), this.addClass("hide");
  };
  e.show = function (a) {
    if (!1 === a) return this.hide();
    if (this.hidden)
      return this.onshow && this.onshow(), (this.hidden = !1), this.removeClass("hide");
  };
  e.minimize = function (a) {
    if (!1 === a) return this.restore();
    F && Z();
    this.max && (this.removeClass("max"), (this.max = !1));
    this.min ||
      (z.push(this),
      V(),
      (this.dom.title = this.title),
      this.addClass("min"),
      (this.min = !0),
      this.onminimize && this.onminimize());
    return this;
  };
  e.restore = function () {
    F && Z();
    this.min && (X(this), this.resize().move().focus(), this.onrestore && this.onrestore());
    this.max &&
      ((this.max = !1),
      this.removeClass("max").resize().move().focus(),
      this.onrestore && this.onrestore());
    return this;
  };
  e.maximize = function (a) {
    if (!1 === a) return this.restore();
    F && Z();
    this.min && X(this);
    this.max ||
      (this.addClass("max")
        .resize(P - this.left - this.right, R - this.top - this.bottom, !0)
        .move(this.left, this.top, !0),
      (this.max = !0),
      this.onmaximize && this.onmaximize());
    return this;
  };
  e.fullscreen = function (a) {
    this.min && (X(this), this.resize().move());
    if (!F || !Z())
      this.body[H](), (F = this), (this.full = !0), this.onfullscreen && this.onfullscreen();
    else if (!1 === a) return this.restore();
    return this;
  };
  function Z() {
    F.full = !1;
    if (
      document.fullscreen ||
      document.fullscreenElement ||
      document.webkitFullscreenElement ||
      document.mozFullScreenElement
    )
      return document[L](), !0;
  }
  e.close = function (a) {
    if (this.onclose && this.onclose(a)) return !0;
    this.min && X(this);
    this.unmount();
    this.dom.parentNode.removeChild(this.dom);
    G === this && (G = null);
  };
  e.move = function (a, b, c) {
    a || 0 === a
      ? c ||
        ((this.x = a ? (a = T(a, P - this.left - this.right, this.width)) : 0),
        (this.y = b ? (b = T(b, R - this.top - this.bottom, this.height)) : 0))
      : ((a = this.x), (b = this.y));
    y(this.dom, "transform", "translate(" + a + "px," + b + "px)");
    this.onmove && this.onmove(a, b);
    return this;
  };
  e.resize = function (a, b, c) {
    a || 0 === a
      ? c ||
        ((this.width = a ? (a = T(a, P - this.left - this.right)) : 0),
        (this.height = b ? (b = T(b, R - this.top - this.bottom)) : 0),
        (a = Math.max(a, this.i)),
        (b = Math.max(b, this.h)))
      : ((a = this.width), (b = this.height));
    y(this.dom, "width", a + "px");
    y(this.dom, "height", b + "px");
    this.onresize && this.onresize(a, b);
    return this;
  };
  e.addClass = function (a) {
    this.dom.classList.add(a);
    return this;
  };
  e.removeClass = function (a) {
    this.dom.classList.remove(a);
    return this;
  };
  e.toggleClass = function (a) {
    return this.dom.classList.contains(a) ? this.removeClass(a) : this.addClass(a);
  };
  window.WinBox = S;
}).call(this);
