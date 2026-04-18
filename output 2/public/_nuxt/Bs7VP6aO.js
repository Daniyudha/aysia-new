import { a9 as bc, M as bn, s as dc, v as el, f as fc, c as fi, g as gc, h as hc, o as hi, k as ji, m as M, x as mc, O as ne, a7 as pc, a as q, w as R, l as tl, L as uc, y as vs, b as w, z as Wi, a8 as yc, d as ze } from "#entry";

import { d as ac, e as cc, a as ic, c as lc, _ as oc, b as sc } from "./BXGaVE_F.js"; import Zo from "./C_Rs4-ko.js"; import { _ as kc } from "./D-ZYCIY2.js"; import { f3 as xc } from "./m3NxB1dg.js";

const Sc = { class: "py-10 text-center" }; const Cc = ["innerHTML"]; const Mc = ["innerHTML"]; const wc = ji({ __name: "dropfile", props: { title: { default: "Click to upload or drag & drop files." }, subtext: { default: "All file types accepted" }, icon: { default: "heroicons:cloud-arrow-up" }, onDrop: {}, multiple: { type: Boolean, default: !0 }, accept: { default: "*" }, class: {}, disabled: { type: Boolean, default: !1 } }, emits: ["dropped"], setup(n, { emit: e }) { const t = n; const r = e; const { open: i, reset: s, onChange: o } = ic({ multiple: t.multiple, accept: t.accept }); o((d) => { d?.length && !t?.disabled && (a(Array.from(d || [])), s()); }); const l = el(); function a(d) { !d && t?.disabled || (t.onDrop && t.onDrop(d), r("dropped", d)); } const { isOverDropZone: c } = sc(l, a); const u = uc({ base: "flex w-full cursor-pointer items-center justify-center rounded-md border border-dashboard-neutral-100 border-dashed transition", variants: { isOverDropZone: { true: "border-dashboard-primary-50 bg-dashboard-primary-50" }, disabled: { true: "bg-black/10 cursor-not-allowed" } } }); return (d, f) => { const h = Zo; return hi(), fi("div", { ref_key: "dropZoneRef", ref: l, class: ne(M(u)({ isOverDropZone: M(c), class: t.class, disabled: t?.disabled })), onClick: f[0] || (f[0] = () => { d.$props?.disabled || M(i)(); }) }, [bn(d.$slots, "message", {}, () => [q("div", Sc, [bn(d.$slots, "icon", {}, () => [n.icon ? (hi(), fi("div", { key: 0, class: ne(["inline-flex items-center justify-center rounded-md border border-dashboard-neutral-100 p-2 transition", [M(c) && "animate-bounce border-primary"]]) }, [w(h, { name: n.icon, class: ne(["h-7 w-7 opacity-70", [M(c) && "text-primary"]]) }, null, 8, ["name", "class"])], 2)) : tl("", !0)]), bn(d.$slots, "title", {}, () => [q("p", { class: "mt-5 text-sm font-medium", innerHTML: n.title }, null, 8, Cc)]), bn(d.$slots, "subtext", {}, () => [q("p", { class: "mt-1 text-sm text-muted-foreground/60", innerHTML: n.subtext }, null, 8, Mc)])])])], 2); }; } }); const Tg = Object.assign(wc, { __name: "UiDropfile" }); function Z(n) { this.content = n; }Z.prototype = { constructor: Z, find(n) {
  for (let e = 0; e < this.content.length; e += 2) {
    if (this.content[e] === n)
      return e;
  } return -1;
}, get(n) { let e = this.find(n); return e == -1 ? void 0 : this.content[e + 1]; }, update(n, e, t) { let r = t && t != n ? this.remove(t) : this; let i = r.find(n); let s = r.content.slice(); return i == -1 ? s.push(t || n, e) : (s[i + 1] = e, t && (s[i] = t)), new Z(s); }, remove(n) {
  let e = this.find(n); if (e == -1)
    return this; let t = this.content.slice(); return t.splice(e, 2), new Z(t);
}, addToStart(n, e) { return new Z([n, e].concat(this.remove(n).content)); }, addToEnd(n, e) { let t = this.remove(n).content.slice(); return t.push(n, e), new Z(t); }, addBefore(n, e, t) { let r = this.remove(e); let i = r.content.slice(); let s = r.find(n); return i.splice(s == -1 ? i.length : s, 0, e, t), new Z(i); }, forEach(n) { for (let e = 0; e < this.content.length; e += 2)n(this.content[e], this.content[e + 1]); }, prepend(n) { return n = Z.from(n), n.size ? new Z(n.content.concat(this.subtract(n).content)) : this; }, append(n) { return n = Z.from(n), n.size ? new Z(this.subtract(n).content.concat(n.content)) : this; }, subtract(n) { let e = this; n = Z.from(n); for (let t = 0; t < n.content.length; t += 2)e = e.remove(n.content[t]); return e; }, toObject() { let n = {}; return this.forEach((e, t) => { n[e] = t; }), n; }, get size() { return this.content.length >> 1; } }; Z.from = function (n) {
  if (n instanceof Z)
    return n; let e = []; if (n) {
    for (let t in n)e.push(t, n[t]);
  } return new Z(e);
}; function nl(n, e, t) {
  for (let r = 0; ;r++) {
    if (r == n.childCount || r == e.childCount)
      return n.childCount == e.childCount ? null : t; let i = n.child(r); let s = e.child(r); if (i == s) { t += i.nodeSize; continue; } if (!i.sameMarkup(s))
      return t; if (i.isText && i.text != s.text) { for (let o = 0; i.text[o] == s.text[o]; o++)t++; return t; } if (i.content.size || s.content.size) {
      let o = nl(i.content, s.content, t + 1); if (o != null)
        return o;
    }t += i.nodeSize;
  }
} function rl(n, e, t, r) {
  for (let i = n.childCount, s = e.childCount; ;) {
    if (i == 0 || s == 0)
      return i == s ? null : { a: t, b: r }; let o = n.child(--i); let l = e.child(--s); let a = o.nodeSize; if (o == l) { t -= a, r -= a; continue; } if (!o.sameMarkup(l))
      return { a: t, b: r }; if (o.isText && o.text != l.text) { let c = 0; let u = Math.min(o.text.length, l.text.length); for (;c < u && o.text[o.text.length - c - 1] == l.text[l.text.length - c - 1];)c++, t--, r--; return { a: t, b: r }; } if (o.content.size || l.content.size) {
      let c = rl(o.content, l.content, t - 1, r - 1); if (c)
        return c;
    }t -= a, r -= a;
  }
} class b {
  constructor(e, t) {
    if (this.content = e, this.size = t || 0, t == null) {
      for (let r = 0; r < e.length; r++) this.size += e[r].nodeSize;
    }
  }

  nodesBetween(e, t, r, i = 0, s) { for (let o = 0, l = 0; l < t; o++) { let a = this.content[o]; let c = l + a.nodeSize; if (c > e && r(a, i + l, s || null, o) !== !1 && a.content.size) { let u = l + 1; a.nodesBetween(Math.max(0, e - u), Math.min(a.content.size, t - u), r, i + u); }l = c; } }descendants(e) { this.nodesBetween(0, this.size, e); }textBetween(e, t, r, i) { let s = ""; let o = !0; return this.nodesBetween(e, t, (l, a) => { let c = l.isText ? l.text.slice(Math.max(e, a) - a, t - a) : l.isLeaf ? i ? typeof i == "function" ? i(l) : i : l.type.spec.leafText ? l.type.spec.leafText(l) : "" : ""; l.isBlock && (l.isLeaf && c || l.isTextblock) && r && (o ? o = !1 : s += r), s += c; }, 0), s; }append(e) {
    if (!e.size)
      return this; if (!this.size)
      return e; let t = this.lastChild; let r = e.firstChild; let i = this.content.slice(); let s = 0; for (t.isText && t.sameMarkup(r) && (i[i.length - 1] = t.withText(t.text + r.text), s = 1); s < e.content.length; s++)i.push(e.content[s]); return new b(i, this.size + e.size);
  }

  cut(e, t = this.size) {
    if (e == 0 && t == this.size)
      return this; let r = []; let i = 0; if (t > e) {
      for (let s = 0, o = 0; o < t; s++) { let l = this.content[s]; let a = o + l.nodeSize; a > e && ((o < e || a > t) && (l.isText ? l = l.cut(Math.max(0, e - o), Math.min(l.text.length, t - o)) : l = l.cut(Math.max(0, e - o - 1), Math.min(l.content.size, t - o - 1))), r.push(l), i += l.nodeSize), o = a; }
    } return new b(r, i);
  }

  cutByIndex(e, t) { return e == t ? b.empty : e == 0 && t == this.content.length ? this : new b(this.content.slice(e, t)); }replaceChild(e, t) {
    let r = this.content[e]; if (r == t)
      return this; let i = this.content.slice(); let s = this.size + t.nodeSize - r.nodeSize; return i[e] = t, new b(i, s);
  }

  addToStart(e) { return new b([e].concat(this.content), this.size + e.nodeSize); }addToEnd(e) { return new b(this.content.concat(e), this.size + e.nodeSize); }eq(e) {
    if (this.content.length != e.content.length)
      return !1; for (let t = 0; t < this.content.length; t++) {
      if (!this.content[t].eq(e.content[t]))
        return !1;
    } return !0;
  }

  get firstChild() { return this.content.length ? this.content[0] : null; } get lastChild() { return this.content.length ? this.content[this.content.length - 1] : null; } get childCount() { return this.content.length; }child(e) {
    let t = this.content[e]; if (!t)
      throw new RangeError(`Index ${e} out of range for ${this}`); return t;
  }

  maybeChild(e) { return this.content[e] || null; }forEach(e) { for (let t = 0, r = 0; t < this.content.length; t++) { let i = this.content[t]; e(i, r, t), r += i.nodeSize; } }findDiffStart(e, t = 0) { return nl(this, e, t); }findDiffEnd(e, t = this.size, r = e.size) { return rl(this, e, t, r); }findIndex(e) {
    if (e == 0)
      return kn(0, e); if (e == this.size)
      return kn(this.content.length, e); if (e > this.size || e < 0)
      throw new RangeError(`Position ${e} outside of fragment (${this})`); for (let t = 0, r = 0; ;t++) {
      let i = this.child(t); let s = r + i.nodeSize; if (s >= e)
        return s == e ? kn(t + 1, s) : kn(t, r); r = s;
    }
  }

  toString() { return `<${this.toStringInner()}>`; }toStringInner() { return this.content.join(", "); }toJSON() { return this.content.length ? this.content.map(e => e.toJSON()) : null; } static fromJSON(e, t) {
    if (!t)
      return b.empty; if (!Array.isArray(t))
      throw new RangeError("Invalid input for Fragment.fromJSON"); return new b(t.map(e.nodeFromJSON));
  }

  static fromArray(e) {
    if (!e.length)
      return b.empty; let t; let r = 0; for (let i = 0; i < e.length; i++) { let s = e[i]; r += s.nodeSize, i && s.isText && e[i - 1].sameMarkup(s) ? (t || (t = e.slice(0, i)), t[t.length - 1] = s.withText(t[t.length - 1].text + s.text)) : t && t.push(s); } return new b(t || e, r);
  }

  static from(e) {
    if (!e)
      return b.empty; if (e instanceof b)
      return e; if (Array.isArray(e))
      return this.fromArray(e); if (e.attrs)
      return new b([e], e.nodeSize); throw new RangeError(`Can not convert ${e} to a Fragment${e.nodesBetween ? " (looks like multiple versions of prosemirror-model were loaded)" : ""}`);
  }
}b.empty = new b([], 0); const $r = { index: 0, offset: 0 }; function kn(n, e) { return $r.index = n, $r.offset = e, $r; } function zn(n, e) {
  if (n === e)
    return !0; if (!(n && typeof n == "object") || !(e && typeof e == "object"))
    return !1; let t = Array.isArray(n); if (Array.isArray(e) != t)
    return !1; if (t) {
    if (n.length != e.length)
      return !1; for (let r = 0; r < n.length; r++) {
      if (!zn(n[r], e[r]))
        return !1;
    }
  }
  else {
    for (let r in n) {
      if (!(r in e) || !zn(n[r], e[r]))
        return !1;
    } for (let r in e) {
      if (!(r in n))
        return !1;
    }
  } return !0;
} let z = class pi {
  constructor(e, t) { this.type = e, this.attrs = t; }addToSet(e) {
    let t; let r = !1; for (let i = 0; i < e.length; i++) {
      let s = e[i]; if (this.eq(s))
        return e; if (this.type.excludes(s.type)) {
        t || (t = e.slice(0, i));
      }
      else {
        if (s.type.excludes(this.type))
          return e; !r && s.type.rank > this.type.rank && (t || (t = e.slice(0, i)), t.push(this), r = !0), t && t.push(s);
      }
    } return t || (t = e.slice()), r || t.push(this), t;
  }

  removeFromSet(e) {
    for (let t = 0; t < e.length; t++) {
      if (this.eq(e[t]))
        return e.slice(0, t).concat(e.slice(t + 1));
    } return e;
  }

  isInSet(e) {
    for (let t = 0; t < e.length; t++) {
      if (this.eq(e[t]))
        return !0;
    } return !1;
  }

  eq(e) { return this == e || this.type == e.type && zn(this.attrs, e.attrs); }toJSON() { let e = { type: this.type.name }; for (let t in this.attrs) { e.attrs = this.attrs; break; } return e; } static fromJSON(e, t) {
    if (!t)
      throw new RangeError("Invalid input for Mark.fromJSON"); let r = e.marks[t.type]; if (!r)
      throw new RangeError(`There is no mark type ${t.type} in this schema`); let i = r.create(t.attrs); return r.checkAttrs(i.attrs), i;
  }

  static sameSet(e, t) {
    if (e == t)
      return !0; if (e.length != t.length)
      return !1; for (let r = 0; r < e.length; r++) {
      if (!e[r].eq(t[r]))
        return !1;
    } return !0;
  }

  static setFrom(e) {
    if (!e || Array.isArray(e) && e.length == 0)
      return pi.none; if (e instanceof pi)
      return [e]; let t = e.slice(); return t.sort((r, i) => r.type.rank - i.type.rank), t;
  }
}; z.none = []; class Fn extends Error {} class x {
  constructor(e, t, r) { this.content = e, this.openStart = t, this.openEnd = r; } get size() { return this.content.size - this.openStart - this.openEnd; }insertAt(e, t) { let r = sl(this.content, e + this.openStart, t); return r && new x(r, this.openStart, this.openEnd); }removeBetween(e, t) { return new x(il(this.content, e + this.openStart, t + this.openStart), this.openStart, this.openEnd); }eq(e) { return this.content.eq(e.content) && this.openStart == e.openStart && this.openEnd == e.openEnd; }toString() { return `${this.content}(${this.openStart},${this.openEnd})`; }toJSON() {
    if (!this.content.size)
      return null; let e = { content: this.content.toJSON() }; return this.openStart > 0 && (e.openStart = this.openStart), this.openEnd > 0 && (e.openEnd = this.openEnd), e;
  }

  static fromJSON(e, t) {
    if (!t)
      return x.empty; let r = t.openStart || 0; let i = t.openEnd || 0; if (typeof r != "number" || typeof i != "number")
      throw new RangeError("Invalid input for Slice.fromJSON"); return new x(b.fromJSON(e, t.content), r, i);
  }

  static maxOpen(e, t = !0) { let r = 0; let i = 0; for (let s = e.firstChild; s && !s.isLeaf && (t || !s.type.spec.isolating); s = s.firstChild)r++; for (let s = e.lastChild; s && !s.isLeaf && (t || !s.type.spec.isolating); s = s.lastChild)i++; return new x(e, r, i); }
}x.empty = new x(b.empty, 0, 0); function il(n, e, t) {
  let { index: r, offset: i } = n.findIndex(e); let s = n.maybeChild(r); let { index: o, offset: l } = n.findIndex(t); if (i == e || s.isText) {
    if (l != t && !n.child(o).isText)
      throw new RangeError("Removing non-flat range"); return n.cut(0, e).append(n.cut(t));
  } if (r != o)
    throw new RangeError("Removing non-flat range"); return n.replaceChild(r, s.copy(il(s.content, e - i - 1, t - i - 1)));
} function sl(n, e, t, r) {
  let { index: i, offset: s } = n.findIndex(e); let o = n.maybeChild(i); if (s == e || o.isText)
    return r && !r.canReplace(i, i, t) ? null : n.cut(0, e).append(t).append(n.cut(e)); let l = sl(o.content, e - s - 1, t, o); return l && n.replaceChild(i, o.copy(l));
} function Tc(n, e, t) {
  if (t.openStart > n.depth)
    throw new Fn("Inserted content deeper than insertion position"); if (n.depth - t.openStart != e.depth - t.openEnd)
    throw new Fn("Inconsistent open depths"); return ol(n, e, t, 0);
} function ol(n, e, t, r) {
  let i = n.index(r); let s = n.node(r); if (i == e.index(r) && r < n.depth - t.openStart) { let o = ol(n, e, t, r + 1); return s.copy(s.content.replaceChild(i, o)); }
  else if (t.content.size) {
    if (!t.openStart && !t.openEnd && n.depth == r && e.depth == r) { let o = n.parent; let l = o.content; return ft(o, l.cut(0, n.parentOffset).append(t.content).append(l.cut(e.parentOffset))); }
    else { let { start: o, end: l } = Ec(t, n); return ft(s, al(n, o, l, e, r)); }
  }
  else {
    return ft(s, Hn(n, e, r));
  }
} function ll(n, e) {
  if (!e.type.compatibleContent(n.type))
    throw new Fn(`Cannot join ${e.type.name} onto ${n.type.name}`);
} function mi(n, e, t) { let r = n.node(t); return ll(r, e.node(t)), r; } function dt(n, e) { let t = e.length - 1; t >= 0 && n.isText && n.sameMarkup(e[t]) ? e[t] = n.withText(e[t].text + n.text) : e.push(n); } function Ut(n, e, t, r) { let i = (e || n).node(t); let s = 0; let o = e ? e.index(t) : i.childCount; n && (s = n.index(t), n.depth > t ? s++ : n.textOffset && (dt(n.nodeAfter, r), s++)); for (let l = s; l < o; l++)dt(i.child(l), r); e && e.depth == t && e.textOffset && dt(e.nodeBefore, r); } function ft(n, e) { return n.type.checkContent(e), n.copy(e); } function al(n, e, t, r, i) { let s = n.depth > i && mi(n, e, i + 1); let o = r.depth > i && mi(t, r, i + 1); let l = []; return Ut(null, n, i, l), s && o && e.index(i) == t.index(i) ? (ll(s, o), dt(ft(s, al(n, e, t, r, i + 1)), l)) : (s && dt(ft(s, Hn(n, e, i + 1)), l), Ut(e, t, i, l), o && dt(ft(o, Hn(t, r, i + 1)), l)), Ut(r, null, i, l), new b(l); } function Hn(n, e, t) { let r = []; if (Ut(null, n, t, r), n.depth > t) { let i = mi(n, e, t + 1); dt(ft(i, Hn(n, e, t + 1)), r); } return Ut(e, null, t, r), new b(r); } function Ec(n, e) { let t = e.depth - n.openStart; let i = e.node(t).copy(n.content); for (let s = t - 1; s >= 0; s--)i = e.node(s).copy(b.from(i)); return { start: i.resolveNoCache(n.openStart + t), end: i.resolveNoCache(i.content.size - n.openEnd - t) }; } class tn {
  constructor(e, t, r) { this.pos = e, this.path = t, this.parentOffset = r, this.depth = t.length / 3 - 1; }resolveDepth(e) { return e == null ? this.depth : e < 0 ? this.depth + e : e; } get parent() { return this.node(this.depth); } get doc() { return this.node(0); }node(e) { return this.path[this.resolveDepth(e) * 3]; }index(e) { return this.path[this.resolveDepth(e) * 3 + 1]; }indexAfter(e) { return e = this.resolveDepth(e), this.index(e) + (e == this.depth && !this.textOffset ? 0 : 1); }start(e) { return e = this.resolveDepth(e), e == 0 ? 0 : this.path[e * 3 - 1] + 1; }end(e) { return e = this.resolveDepth(e), this.start(e) + this.node(e).content.size; }before(e) {
    if (e = this.resolveDepth(e), !e)
      throw new RangeError("There is no position before the top-level node"); return e == this.depth + 1 ? this.pos : this.path[e * 3 - 1];
  }

  after(e) {
    if (e = this.resolveDepth(e), !e)
      throw new RangeError("There is no position after the top-level node"); return e == this.depth + 1 ? this.pos : this.path[e * 3 - 1] + this.path[e * 3].nodeSize;
  }

  get textOffset() { return this.pos - this.path[this.path.length - 1]; } get nodeAfter() {
    let e = this.parent; let t = this.index(this.depth); if (t == e.childCount)
      return null; let r = this.pos - this.path[this.path.length - 1]; let i = e.child(t); return r ? e.child(t).cut(r) : i;
  }

  get nodeBefore() { let e = this.index(this.depth); let t = this.pos - this.path[this.path.length - 1]; return t ? this.parent.child(e).cut(0, t) : e == 0 ? null : this.parent.child(e - 1); }posAtIndex(e, t) { t = this.resolveDepth(t); let r = this.path[t * 3]; let i = t == 0 ? 0 : this.path[t * 3 - 1] + 1; for (let s = 0; s < e; s++)i += r.child(s).nodeSize; return i; }marks() {
    let e = this.parent; let t = this.index(); if (e.content.size == 0)
      return z.none; if (this.textOffset)
      return e.child(t).marks; let r = e.maybeChild(t - 1); let i = e.maybeChild(t); if (!r) { let l = r; r = i, i = l; } let s = r.marks; for (let o = 0; o < s.length; o++)s[o].type.spec.inclusive === !1 && (!i || !s[o].isInSet(i.marks)) && (s = s[o--].removeFromSet(s)); return s;
  }

  marksAcross(e) {
    let t = this.parent.maybeChild(this.index()); if (!t || !t.isInline)
      return null; let r = t.marks; let i = e.parent.maybeChild(e.index()); for (let s = 0; s < r.length; s++)r[s].type.spec.inclusive === !1 && (!i || !r[s].isInSet(i.marks)) && (r = r[s--].removeFromSet(r)); return r;
  }

  sharedDepth(e) {
    for (let t = this.depth; t > 0; t--) {
      if (this.start(t) <= e && this.end(t) >= e)
        return t;
    } return 0;
  }

  blockRange(e = this, t) {
    if (e.pos < this.pos)
      return e.blockRange(this); for (let r = this.depth - (this.parent.inlineContent || this.pos == e.pos ? 1 : 0); r >= 0; r--) {
      if (e.pos <= this.end(r) && (!t || t(this.node(r))))
        return new $n(this, e, r);
    } return null;
  }

  sameParent(e) { return this.pos - this.parentOffset == e.pos - e.parentOffset; }max(e) { return e.pos > this.pos ? e : this; }min(e) { return e.pos < this.pos ? e : this; }toString() { let e = ""; for (let t = 1; t <= this.depth; t++)e += `${(e ? "/" : "") + this.node(t).type.name}_${this.index(t - 1)}`; return `${e}:${this.parentOffset}`; } static resolve(e, t) {
    if (!(t >= 0 && t <= e.content.size))
      throw new RangeError(`Position ${t} out of range`); let r = []; let i = 0; let s = t; for (let o = e; ;) {
      let { index: l, offset: a } = o.content.findIndex(s); let c = s - a; if (r.push(o, l, i + a), !c || (o = o.child(l), o.isText))
        break; s = c - 1, i += a + 1;
    } return new tn(t, r, s);
  }

  static resolveCached(e, t) {
    let r = Ns.get(e); if (r) {
      for (let s = 0; s < r.elts.length; s++) {
        let o = r.elts[s]; if (o.pos == t)
          return o;
      }
    }
    else {
      Ns.set(e, r = new Oc());
    } let i = r.elts[r.i] = tn.resolve(e, t); return r.i = (r.i + 1) % Ac, i;
  }
} class Oc {constructor() { this.elts = [], this.i = 0; }} const Ac = 12; const Ns = new WeakMap(); class $n {constructor(e, t, r) { this.$from = e, this.$to = t, this.depth = r; } get start() { return this.$from.before(this.depth + 1); } get end() { return this.$to.after(this.depth + 1); } get parent() { return this.$from.node(this.depth); } get startIndex() { return this.$from.index(this.depth); } get endIndex() { return this.$to.indexAfter(this.depth); }} const vc = Object.create(null); let Je = class gi {
  constructor(e, t, r, i = z.none) { this.type = e, this.attrs = t, this.marks = i, this.content = r || b.empty; } get children() { return this.content.content; } get nodeSize() { return this.isLeaf ? 1 : 2 + this.content.size; } get childCount() { return this.content.childCount; }child(e) { return this.content.child(e); }maybeChild(e) { return this.content.maybeChild(e); }forEach(e) { this.content.forEach(e); }nodesBetween(e, t, r, i = 0) { this.content.nodesBetween(e, t, r, i, this); }descendants(e) { this.nodesBetween(0, this.content.size, e); } get textContent() { return this.isLeaf && this.type.spec.leafText ? this.type.spec.leafText(this) : this.textBetween(0, this.content.size, ""); }textBetween(e, t, r, i) { return this.content.textBetween(e, t, r, i); } get firstChild() { return this.content.firstChild; } get lastChild() { return this.content.lastChild; }eq(e) { return this == e || this.sameMarkup(e) && this.content.eq(e.content); }sameMarkup(e) { return this.hasMarkup(e.type, e.attrs, e.marks); }hasMarkup(e, t, r) { return this.type == e && zn(this.attrs, t || e.defaultAttrs || vc) && z.sameSet(this.marks, r || z.none); }copy(e = null) { return e == this.content ? this : new gi(this.type, this.attrs, e, this.marks); }mark(e) { return e == this.marks ? this : new gi(this.type, this.attrs, this.content, e); }cut(e, t = this.content.size) { return e == 0 && t == this.content.size ? this : this.copy(this.content.cut(e, t)); }slice(e, t = this.content.size, r = !1) {
    if (e == t)
      return x.empty; let i = this.resolve(e); let s = this.resolve(t); let o = r ? 0 : i.sharedDepth(t); let l = i.start(o); let c = i.node(o).content.cut(i.pos - l, s.pos - l); return new x(c, i.depth - o, s.depth - o);
  }

  replace(e, t, r) { return Tc(this.resolve(e), this.resolve(t), r); }nodeAt(e) {
    for (let t = this; ;) {
      let { index: r, offset: i } = t.content.findIndex(e); if (t = t.maybeChild(r), !t)
        return null; if (i == e || t.isText)
        return t; e -= i + 1;
    }
  }

  childAfter(e) { let { index: t, offset: r } = this.content.findIndex(e); return { node: this.content.maybeChild(t), index: t, offset: r }; }childBefore(e) {
    if (e == 0)
      return { node: null, index: 0, offset: 0 }; let { index: t, offset: r } = this.content.findIndex(e); if (r < e)
      return { node: this.content.child(t), index: t, offset: r }; let i = this.content.child(t - 1); return { node: i, index: t - 1, offset: r - i.nodeSize };
  }

  resolve(e) { return tn.resolveCached(this, e); }resolveNoCache(e) { return tn.resolve(this, e); }rangeHasMark(e, t, r) { let i = !1; return t > e && this.nodesBetween(e, t, s => (r.isInSet(s.marks) && (i = !0), !i)), i; } get isBlock() { return this.type.isBlock; } get isTextblock() { return this.type.isTextblock; } get inlineContent() { return this.type.inlineContent; } get isInline() { return this.type.isInline; } get isText() { return this.type.isText; } get isLeaf() { return this.type.isLeaf; } get isAtom() { return this.type.isAtom; }toString() {
    if (this.type.spec.toDebugString)
      return this.type.spec.toDebugString(this); let e = this.type.name; return this.content.size && (e += `(${this.content.toStringInner()})`), cl(this.marks, e);
  }

  contentMatchAt(e) {
    let t = this.type.contentMatch.matchFragment(this.content, 0, e); if (!t)
      throw new Error("Called contentMatchAt on a node with invalid content"); return t;
  }

  canReplace(e, t, r = b.empty, i = 0, s = r.childCount) {
    let o = this.contentMatchAt(e).matchFragment(r, i, s); let l = o && o.matchFragment(this.content, t); if (!l || !l.validEnd)
      return !1; for (let a = i; a < s; a++) {
      if (!this.type.allowsMarks(r.child(a).marks))
        return !1;
    } return !0;
  }

  canReplaceWith(e, t, r, i) {
    if (i && !this.type.allowsMarks(i))
      return !1; let s = this.contentMatchAt(e).matchType(r); let o = s && s.matchFragment(this.content, t); return o ? o.validEnd : !1;
  }

  canAppend(e) { return e.content.size ? this.canReplace(this.childCount, this.childCount, e.content) : this.type.compatibleContent(e.type); }check() {
    this.type.checkContent(this.content), this.type.checkAttrs(this.attrs); let e = z.none; for (let t = 0; t < this.marks.length; t++) { let r = this.marks[t]; r.type.checkAttrs(r.attrs), e = r.addToSet(e); } if (!z.sameSet(e, this.marks))
      throw new RangeError(`Invalid collection of marks for node ${this.type.name}: ${this.marks.map(t => t.type.name)}`); this.content.forEach(t => t.check());
  }

  toJSON() { let e = { type: this.type.name }; for (let t in this.attrs) { e.attrs = this.attrs; break; } return this.content.size && (e.content = this.content.toJSON()), this.marks.length && (e.marks = this.marks.map(t => t.toJSON())), e; } static fromJSON(e, t) {
    if (!t)
      throw new RangeError("Invalid input for Node.fromJSON"); let r; if (t.marks) {
      if (!Array.isArray(t.marks))
        throw new RangeError("Invalid mark data for Node.fromJSON"); r = t.marks.map(e.markFromJSON);
    } if (t.type == "text") {
      if (typeof t.text != "string")
        throw new RangeError("Invalid text node in JSON"); return e.text(t.text, r);
    } let i = b.fromJSON(e, t.content); let s = e.nodeType(t.type).create(t.attrs, i, r); return s.type.checkAttrs(s.attrs), s;
  }
}; Je.prototype.text = void 0; class Vn extends Je {
  constructor(e, t, r, i) {
    if (super(e, t, null, i), !r)
      throw new RangeError("Empty text nodes are not allowed"); this.text = r;
  }

  toString() { return this.type.spec.toDebugString ? this.type.spec.toDebugString(this) : cl(this.marks, JSON.stringify(this.text)); } get textContent() { return this.text; }textBetween(e, t) { return this.text.slice(e, t); } get nodeSize() { return this.text.length; }mark(e) { return e == this.marks ? this : new Vn(this.type, this.attrs, this.text, e); }withText(e) { return e == this.text ? this : new Vn(this.type, this.attrs, e, this.marks); }cut(e = 0, t = this.text.length) { return e == 0 && t == this.text.length ? this : this.withText(this.text.slice(e, t)); }eq(e) { return this.sameMarkup(e) && this.text == e.text; }toJSON() { let e = super.toJSON(); return e.text = this.text, e; }
} function cl(n, e) { for (let t = n.length - 1; t >= 0; t--)e = `${n[t].type.name}(${e})`; return e; } class gt {
  constructor(e) { this.validEnd = e, this.next = [], this.wrapCache = []; } static parse(e, t) {
    let r = new Nc(e, t); if (r.next == null)
      return gt.empty; let i = ul(r); r.next && r.err("Unexpected trailing text"); let s = zc(Bc(i)); return Fc(s, r), s;
  }

  matchType(e) {
    for (let t = 0; t < this.next.length; t++) {
      if (this.next[t].type == e)
        return this.next[t].next;
    } return null;
  }

  matchFragment(e, t = 0, r = e.childCount) { let i = this; for (let s = t; i && s < r; s++)i = i.matchType(e.child(s).type); return i; } get inlineContent() { return this.next.length != 0 && this.next[0].type.isInline; } get defaultType() {
    for (let e = 0; e < this.next.length; e++) {
      let { type: t } = this.next[e]; if (!(t.isText || t.hasRequiredAttrs()))
        return t;
    } return null;
  }

  compatible(e) {
    for (let t = 0; t < this.next.length; t++) {
      for (let r = 0; r < e.next.length; r++) {
        if (this.next[t].type == e.next[r].type)
          return !0;
      }
    } return !1;
  }

  fillBefore(e, t = !1, r = 0) {
    let i = [this]; function s(o, l) {
      let a = o.matchFragment(e, r); if (a && (!t || a.validEnd))
        return b.from(l.map(c => c.createAndFill())); for (let c = 0; c < o.next.length; c++) {
        let { type: u, next: d } = o.next[c]; if (!(u.isText || u.hasRequiredAttrs()) && !i.includes(d)) {
          i.push(d); let f = s(d, l.concat(u)); if (f)
            return f;
        }
      } return null;
    } return s(this, []);
  }

  findWrapping(e) {
    for (let r = 0; r < this.wrapCache.length; r += 2) {
      if (this.wrapCache[r] == e)
        return this.wrapCache[r + 1];
    } let t = this.computeWrapping(e); return this.wrapCache.push(e, t), t;
  }

  computeWrapping(e) { let t = Object.create(null); let r = [{ match: this, type: null, via: null }]; for (;r.length;) { let i = r.shift(); let s = i.match; if (s.matchType(e)) { let o = []; for (let l = i; l.type; l = l.via)o.push(l.type); return o.reverse(); } for (let o = 0; o < s.next.length; o++) { let { type: l, next: a } = s.next[o]; !l.isLeaf && !l.hasRequiredAttrs() && !(l.name in t) && (!i.type || a.validEnd) && (r.push({ match: l.contentMatch, type: l, via: i }), t[l.name] = !0); } } return null; } get edgeCount() { return this.next.length; }edge(e) {
    if (e >= this.next.length)
      throw new RangeError(`There's no ${e}th edge in this content match`); return this.next[e];
  }

  toString() {
    let e = []; function t(r) { e.push(r); for (let i = 0; i < r.next.length; i++)!e.includes(r.next[i].next) && t(r.next[i].next); } return t(this), e.map((r, i) => { let s = `${i + (r.validEnd ? "*" : " ")} `; for (let o = 0; o < r.next.length; o++)s += `${(o ? ", " : "") + r.next[o].type.name}->${e.indexOf(r.next[o].next)}`; return s; }).join(`
`);
  }
}gt.empty = new gt(!0); class Nc {constructor(e, t) { this.string = e, this.nodeTypes = t, this.inline = null, this.pos = 0, this.tokens = e.split(/\s*(?=\b|\W|$)/), this.tokens[this.tokens.length - 1] == "" && this.tokens.pop(), this.tokens[0] == "" && this.tokens.shift(); } get next() { return this.tokens[this.pos]; }eat(e) { return this.next == e && (this.pos++ || !0); }err(e) { throw new SyntaxError(`${e} (in content expression '${this.string}')`); }} function ul(n) { let e = []; do e.push(Dc(n)); while (n.eat("|")); return e.length == 1 ? e[0] : { type: "choice", exprs: e }; } function Dc(n) { let e = []; do e.push(Ic(n)); while (n.next && n.next != ")" && n.next != "|"); return e.length == 1 ? e[0] : { type: "seq", exprs: e }; } function Ic(n) {
  let e = Lc(n); for (;;) {
    if (n.eat("+"))
      e = { type: "plus", expr: e }; else if (n.eat("*"))
      e = { type: "star", expr: e }; else if (n.eat("?"))
      e = { type: "opt", expr: e }; else if (n.eat("{"))
      e = Rc(n, e); else break;
  } return e;
} function Ds(n) { /\D/.test(n.next) && n.err(`Expected number, got '${n.next}'`); let e = Number(n.next); return n.pos++, e; } function Rc(n, e) { let t = Ds(n); let r = t; return n.eat(",") && (n.next != "}" ? r = Ds(n) : r = -1), n.eat("}") || n.err("Unclosed braced range"), { type: "range", min: t, max: r, expr: e }; } function Pc(n, e) {
  let t = n.nodeTypes; let r = t[e]; if (r)
    return [r]; let i = []; for (let s in t) { let o = t[s]; o.isInGroup(e) && i.push(o); } return i.length == 0 && n.err(`No node type or group '${e}' found`), i;
} function Lc(n) {
  if (n.eat("(")) { let e = ul(n); return n.eat(")") || n.err("Missing closing paren"), e; }
  else if (/\W/.test(n.next)) {
    n.err(`Unexpected token '${n.next}'`);
  }
  else { let e = Pc(n, n.next).map(t => (n.inline == null ? n.inline = t.isInline : n.inline != t.isInline && n.err("Mixing inline and block content"), { type: "name", value: t })); return n.pos++, e.length == 1 ? e[0] : { type: "choice", exprs: e }; }
} function Bc(n) {
  let e = [[]]; return i(s(n, 0), t()), e; function t() { return e.push([]) - 1; } function r(o, l, a) { let c = { term: a, to: l }; return e[o].push(c), c; } function i(o, l) { o.forEach(a => a.to = l); } function s(o, l) {
    if (o.type == "choice")
      return o.exprs.reduce((a, c) => a.concat(s(c, l)), []); if (o.type == "seq") {
      for (let a = 0; ;a++) {
        let c = s(o.exprs[a], l); if (a == o.exprs.length - 1)
          return c; i(c, l = t());
      }
    }
    else if (o.type == "star") { let a = t(); return r(l, a), i(s(o.expr, a), a), [r(a)]; }
    else if (o.type == "plus") { let a = t(); return i(s(o.expr, l), a), i(s(o.expr, a), a), [r(a)]; }
    else {
      if (o.type == "opt")
        return [r(l)].concat(s(o.expr, l)); if (o.type == "range") {
        let a = l; for (let c = 0; c < o.min; c++) { let u = t(); i(s(o.expr, a), u), a = u; } if (o.max == -1) {
          i(s(o.expr, a), a);
        }
        else {
          for (let c = o.min; c < o.max; c++) { let u = t(); r(a, u), i(s(o.expr, a), u), a = u; }
        } return [r(a)];
      }
      else {
        if (o.type == "name")
          return [r(l, void 0, o.value)]; throw new Error("Unknown expr type");
      }
    }
  }
} function dl(n, e) { return e - n; } function Is(n, e) {
  let t = []; return r(e), t.sort(dl); function r(i) {
    let s = n[i]; if (s.length == 1 && !s[0].term)
      return r(s[0].to); t.push(i); for (let o = 0; o < s.length; o++) { let { term: l, to: a } = s[o]; !l && !t.includes(a) && r(a); }
  }
} function zc(n) {
  let e = Object.create(null); return t(Is(n, 0)); function t(r) {
    let i = []; r.forEach((o) => {
      n[o].forEach(({ term: l, to: a }) => {
        if (!l)
          return; let c; for (let u = 0; u < i.length; u++)i[u][0] == l && (c = i[u][1]); Is(n, a).forEach((u) => { c || i.push([l, c = []]), !c.includes(u) && c.push(u); });
      });
    }); let s = e[r.join(",")] = new gt(r.includes(n.length - 1)); for (let o = 0; o < i.length; o++) { let l = i[o][1].sort(dl); s.next.push({ type: i[o][0], next: e[l.join(",")] || t(l) }); } return s;
  }
} function Fc(n, e) { for (let t = 0, r = [n]; t < r.length; t++) { let i = r[t]; let s = !i.validEnd; let o = []; for (let l = 0; l < i.next.length; l++) { let { type: a, next: c } = i.next[l]; o.push(a.name), s && !(a.isText || a.hasRequiredAttrs()) && (s = !1), !r.includes(c) && r.push(c); }s && e.err(`Only non-generatable nodes (${o.join(", ")}) in a required position (see https://prosemirror.net/docs/guide/#generatable)`); } } function fl(n) {
  let e = Object.create(null); for (let t in n) {
    let r = n[t]; if (!r.hasDefault)
      return null; e[t] = r.default;
  } return e;
} function hl(n, e) {
  let t = Object.create(null); for (let r in n) {
    let i = e && e[r]; if (i === void 0) {
      let s = n[r]; if (s.hasDefault)
        i = s.default; else throw new RangeError(`No value supplied for attribute ${r}`);
    }t[r] = i;
  } return t;
} function pl(n, e, t, r) {
  for (let i in e) {
    if (!(i in n))
      throw new RangeError(`Unsupported attribute ${i} for ${t} of type ${i}`);
  } for (let i in n) { let s = n[i]; s.validate && s.validate(e[i]); }
} function ml(n, e) {
  let t = Object.create(null); if (e) {
    for (let r in e)t[r] = new $c(n, r, e[r]);
  } return t;
} let Rs = class gl {
  constructor(e, t, r) { this.name = e, this.schema = t, this.spec = r, this.markSet = null, this.groups = r.group ? r.group.split(" ") : [], this.attrs = ml(e, r.attrs), this.defaultAttrs = fl(this.attrs), this.contentMatch = null, this.inlineContent = null, this.isBlock = !(r.inline || e == "text"), this.isText = e == "text"; } get isInline() { return !this.isBlock; } get isTextblock() { return this.isBlock && this.inlineContent; } get isLeaf() { return this.contentMatch == gt.empty; } get isAtom() { return this.isLeaf || !!this.spec.atom; }isInGroup(e) { return this.groups.includes(e); } get whitespace() { return this.spec.whitespace || (this.spec.code ? "pre" : "normal"); }hasRequiredAttrs() {
    for (let e in this.attrs) {
      if (this.attrs[e].isRequired)
        return !0;
    } return !1;
  }

  compatibleContent(e) { return this == e || this.contentMatch.compatible(e.contentMatch); }computeAttrs(e) { return !e && this.defaultAttrs ? this.defaultAttrs : hl(this.attrs, e); }create(e = null, t, r) {
    if (this.isText)
      throw new Error("NodeType.create can't construct text nodes"); return new Je(this, this.computeAttrs(e), b.from(t), z.setFrom(r));
  }

  createChecked(e = null, t, r) { return t = b.from(t), this.checkContent(t), new Je(this, this.computeAttrs(e), t, z.setFrom(r)); }createAndFill(e = null, t, r) {
    if (e = this.computeAttrs(e), t = b.from(t), t.size) {
      let o = this.contentMatch.fillBefore(t); if (!o)
        return null; t = o.append(t);
    } let i = this.contentMatch.matchFragment(t); let s = i && i.fillBefore(b.empty, !0); return s ? new Je(this, e, t.append(s), z.setFrom(r)) : null;
  }

  validContent(e) {
    let t = this.contentMatch.matchFragment(e); if (!t || !t.validEnd)
      return !1; for (let r = 0; r < e.childCount; r++) {
      if (!this.allowsMarks(e.child(r).marks))
        return !1;
    } return !0;
  }

  checkContent(e) {
    if (!this.validContent(e))
      throw new RangeError(`Invalid content for node ${this.name}: ${e.toString().slice(0, 50)}`);
  }

  checkAttrs(e) { pl(this.attrs, e, "node", this.name); }allowsMarkType(e) { return this.markSet == null || this.markSet.includes(e); }allowsMarks(e) {
    if (this.markSet == null)
      return !0; for (let t = 0; t < e.length; t++) {
      if (!this.allowsMarkType(e[t].type))
        return !1;
    } return !0;
  }

  allowedMarks(e) {
    if (this.markSet == null)
      return e; let t; for (let r = 0; r < e.length; r++) this.allowsMarkType(e[r].type) ? t && t.push(e[r]) : t || (t = e.slice(0, r)); return t ? t.length ? t : z.none : e;
  }

  static compile(e, t) {
    let r = Object.create(null); e.forEach((s, o) => r[s] = new gl(s, t, o)); let i = t.spec.topNode || "doc"; if (!r[i])
      throw new RangeError(`Schema is missing its top node type ('${i}')`); if (!r.text)
      throw new RangeError("Every schema needs a 'text' type"); for (let s in r.text.attrs) throw new RangeError("The text node type should not have attributes"); return r;
  }
}; function Hc(n, e, t) {
  let r = t.split("|"); return (i) => {
    let s = i === null ? "null" : typeof i; if (!r.includes(s))
      throw new RangeError(`Expected value of type ${r} for attribute ${e} on type ${n}, got ${s}`);
  };
} class $c {constructor(e, t, r) { this.hasDefault = Object.prototype.hasOwnProperty.call(r, "default"), this.default = r.default, this.validate = typeof r.validate == "string" ? Hc(e, t, r.validate) : r.validate; } get isRequired() { return !this.hasDefault; }} class Mr {
  constructor(e, t, r, i) { this.name = e, this.rank = t, this.schema = r, this.spec = i, this.attrs = ml(e, i.attrs), this.excluded = null; let s = fl(this.attrs); this.instance = s ? new z(this, s) : null; }create(e = null) { return !e && this.instance ? this.instance : new z(this, hl(this.attrs, e)); } static compile(e, t) { let r = Object.create(null); let i = 0; return e.forEach((s, o) => r[s] = new Mr(s, i++, t, o)), r; }removeFromSet(e) { for (let t = 0; t < e.length; t++)e[t].type == this && (e = e.slice(0, t).concat(e.slice(t + 1)), t--); return e; }isInSet(e) {
    for (let t = 0; t < e.length; t++) {
      if (e[t].type == this)
        return e[t];
    }
  }

  checkAttrs(e) { pl(this.attrs, e, "mark", this.name); }excludes(e) { return this.excluded.includes(e); }
} class yl {
  constructor(e) {
    this.linebreakReplacement = null, this.cached = Object.create(null); let t = this.spec = {}; for (let i in e)t[i] = e[i]; t.nodes = Z.from(e.nodes), t.marks = Z.from(e.marks || {}), this.nodes = Rs.compile(this.spec.nodes, this), this.marks = Mr.compile(this.spec.marks, this); let r = Object.create(null); for (let i in this.nodes) {
      if (i in this.marks)
        throw new RangeError(`${i} can not be both a node and a mark`); let s = this.nodes[i]; let o = s.spec.content || ""; let l = s.spec.marks; if (s.contentMatch = r[o] || (r[o] = gt.parse(o, this.nodes)), s.inlineContent = s.contentMatch.inlineContent, s.spec.linebreakReplacement) {
        if (this.linebreakReplacement)
          throw new RangeError("Multiple linebreak nodes defined"); if (!s.isInline || !s.isLeaf)
          throw new RangeError("Linebreak replacement nodes must be inline leaf nodes"); this.linebreakReplacement = s;
      }s.markSet = l == "_" ? null : l ? Ps(this, l.split(" ")) : l == "" || !s.inlineContent ? [] : null;
    } for (let i in this.marks) { let s = this.marks[i]; let o = s.spec.excludes; s.excluded = o == null ? [s] : o == "" ? [] : Ps(this, o.split(" ")); } this.nodeFromJSON = i => Je.fromJSON(this, i), this.markFromJSON = i => z.fromJSON(this, i), this.topNodeType = this.nodes[this.spec.topNode || "doc"], this.cached.wrappings = Object.create(null);
  }

  node(e, t = null, r, i) {
    if (typeof e == "string") {
      e = this.nodeType(e);
    }
    else if (e instanceof Rs) {
      if (e.schema != this)
        throw new RangeError(`Node type from different schema used (${e.name})`);
    }
    else {
      throw new RangeError(`Invalid node type: ${e}`);
    } return e.createChecked(t, r, i);
  }

  text(e, t) { let r = this.nodes.text; return new Vn(r, r.defaultAttrs, e, z.setFrom(t)); }mark(e, t) { return typeof e == "string" && (e = this.marks[e]), e.create(t); }nodeType(e) {
    let t = this.nodes[e]; if (!t)
      throw new RangeError(`Unknown node type: ${e}`); return t;
  }
} function Ps(n, e) {
  let t = []; for (let r = 0; r < e.length; r++) {
    let i = e[r]; let s = n.marks[i]; let o = s; if (s) {
      t.push(s);
    }
    else {
      for (let l in n.marks) { let a = n.marks[l]; (i == "_" || a.spec.group && a.spec.group.split(" ").includes(i)) && t.push(o = a); }
    } if (!o)
      throw new SyntaxError(`Unknown mark type: '${e[r]}'`);
  } return t;
} function Vc(n) { return n.tag != null; } function jc(n) { return n.style != null; } class Ge {
  constructor(e, t) {
    this.schema = e, this.rules = t, this.tags = [], this.styles = []; let r = this.matchedStyles = []; t.forEach((i) => {
      if (Vc(i)) {
        this.tags.push(i);
      }
      else if (jc(i)) { let s = /[^=]*/.exec(i.style)[0]; !r.includes(s) && r.push(s), this.styles.push(i); }
    }), this.normalizeLists = !this.tags.some((i) => {
      if (!/^(ul|ol)\b/.test(i.tag) || !i.node)
        return !1; let s = e.nodes[i.node]; return s.contentMatch.matchType(s);
    });
  }

  parse(e, t = {}) { let r = new Bs(this, t, !1); return r.addAll(e, z.none, t.from, t.to), r.finish(); }parseSlice(e, t = {}) { let r = new Bs(this, t, !0); return r.addAll(e, z.none, t.from, t.to), x.maxOpen(r.finish()); }matchTag(e, t, r) {
    for (let i = r ? this.tags.indexOf(r) + 1 : 0; i < this.tags.length; i++) {
      let s = this.tags[i]; if (Uc(e, s.tag) && (s.namespace === void 0 || e.namespaceURI == s.namespace) && (!s.context || t.matchesContext(s.context))) {
        if (s.getAttrs) {
          let o = s.getAttrs(e); if (o === !1)
            continue; s.attrs = o || void 0;
        } return s;
      }
    }
  }

  matchStyle(e, t, r, i) {
    for (let s = i ? this.styles.indexOf(i) + 1 : 0; s < this.styles.length; s++) {
      let o = this.styles[s]; let l = o.style; if (!(l.indexOf(e) != 0 || o.context && !r.matchesContext(o.context) || l.length > e.length && (l.charCodeAt(e.length) != 61 || l.slice(e.length + 1) != t))) {
        if (o.getAttrs) {
          let a = o.getAttrs(t); if (a === !1)
            continue; o.attrs = a || void 0;
        } return o;
      }
    }
  }

  static schemaRules(e) {
    let t = []; function r(i) {
      let s = i.priority == null ? 50 : i.priority; let o = 0; for (;o < t.length; o++) {
        let l = t[o]; if ((l.priority == null ? 50 : l.priority) < s)
          break;
      }t.splice(o, 0, i);
    } for (let i in e.marks) { let s = e.marks[i].spec.parseDOM; s && s.forEach((o) => { r(o = zs(o)), o.mark || o.ignore || o.clearMark || (o.mark = i); }); } for (let i in e.nodes) { let s = e.nodes[i].spec.parseDOM; s && s.forEach((o) => { r(o = zs(o)), o.node || o.ignore || o.mark || (o.node = i); }); } return t;
  }

  static fromSchema(e) { return e.cached.domParser || (e.cached.domParser = new Ge(e, Ge.schemaRules(e))); }
} const bl = { address: !0, article: !0, aside: !0, blockquote: !0, canvas: !0, dd: !0, div: !0, dl: !0, fieldset: !0, figcaption: !0, figure: !0, footer: !0, form: !0, h1: !0, h2: !0, h3: !0, h4: !0, h5: !0, h6: !0, header: !0, hgroup: !0, hr: !0, li: !0, noscript: !0, ol: !0, output: !0, p: !0, pre: !0, section: !0, table: !0, tfoot: !0, ul: !0 }; const Wc = { head: !0, noscript: !0, object: !0, script: !0, style: !0, title: !0 }; const kl = { ol: !0, ul: !0 }; const nn = 1; const yi = 2; const _t = 4; function Ls(n, e, t) { return e != null ? (e ? nn : 0) | (e === "full" ? yi : 0) : n && n.whitespace == "pre" ? nn | yi : t & ~_t; } class xn {
  constructor(e, t, r, i, s, o) { this.type = e, this.attrs = t, this.marks = r, this.solid = i, this.options = o, this.content = [], this.activeMarks = z.none, this.match = s || (o & _t ? null : e.contentMatch); }findWrapping(e) {
    if (!this.match) {
      if (!this.type)
        return []; let t = this.type.contentMatch.fillBefore(b.from(e)); if (t) {
        this.match = this.type.contentMatch.matchFragment(t);
      }
      else { let r = this.type.contentMatch; let i; return (i = r.findWrapping(e.type)) ? (this.match = r, i) : null; }
    } return this.match.findWrapping(e.type);
  }

  finish(e) { if (!(this.options & nn)) { let r = this.content[this.content.length - 1]; let i; if (r && r.isText && (i = /[ \t\r\n\f]+$/.exec(r.text))) { let s = r; r.text.length == i[0].length ? this.content.pop() : this.content[this.content.length - 1] = s.withText(s.text.slice(0, s.text.length - i[0].length)); } } let t = b.from(this.content); return !e && this.match && (t = t.append(this.match.fillBefore(b.empty, !0))), this.type ? this.type.create(this.attrs, t, this.marks) : t; }inlineContext(e) { return this.type ? this.type.inlineContent : this.content.length ? this.content[0].isInline : e.parentNode && !bl.hasOwnProperty(e.parentNode.nodeName.toLowerCase()); }
} class Bs {
  constructor(e, t, r) { this.parser = e, this.options = t, this.isOpen = r, this.open = 0, this.localPreserveWS = !1; let i = t.topNode; let s; let o = Ls(null, t.preserveWhitespace, 0) | (r ? _t : 0); i ? s = new xn(i.type, i.attrs, z.none, !0, t.topMatch || i.type.contentMatch, o) : r ? s = new xn(null, null, z.none, !0, null, o) : s = new xn(e.schema.topNodeType, null, z.none, !0, null, o), this.nodes = [s], this.find = t.findPositions, this.needsBlock = !1; } get top() { return this.nodes[this.open]; }addDOM(e, t) { e.nodeType == 3 ? this.addTextNode(e, t) : e.nodeType == 1 && this.addElement(e, t); }addTextNode(e, t) {
    let r = e.nodeValue; let i = this.top; let s = i.options & yi ? "full" : this.localPreserveWS || (i.options & nn) > 0; if (s === "full" || i.inlineContext(e) || /[^ \t\r\n\f]/.test(r)) {
      if (s) {
        s !== "full"
          ? r = r.replace(/\r?\n|\r/g, " ")
          : r = r.replace(/\r\n?/g, `
`);
      }
      else if (r = r.replace(/[ \t\r\n\f]+/g, " "), /^[ \t\r\n\f]/.test(r) && this.open == this.nodes.length - 1) { let o = i.content[i.content.length - 1]; let l = e.previousSibling; (!o || l && l.nodeName == "BR" || o.isText && /[ \t\r\n\f]$/.test(o.text)) && (r = r.slice(1)); }r && this.insertNode(this.parser.schema.text(r), t, !/\S/.test(r)), this.findInText(e);
    }
    else {
      this.findInside(e);
    }
  }

  addElement(e, t, r) {
    let i = this.localPreserveWS; let s = this.top; (e.tagName == "PRE" || /pre/.test(e.style && e.style.whiteSpace)) && (this.localPreserveWS = !0); let o = e.nodeName.toLowerCase(); let l; kl.hasOwnProperty(o) && this.parser.normalizeLists && Kc(e); let a = this.options.ruleFromNode && this.options.ruleFromNode(e) || (l = this.parser.matchTag(e, this, r)); e:if (a ? a.ignore : Wc.hasOwnProperty(o)) {
      this.findInside(e), this.ignoreFallback(e, t);
    }
    else if (!a || a.skip || a.closeParent) {
      a && a.closeParent ? this.open = Math.max(0, this.open - 1) : a && a.skip.nodeType && (e = a.skip); let c; let u = this.needsBlock; if (bl.hasOwnProperty(o)) {
        s.content.length && s.content[0].isInline && this.open && (this.open--, s = this.top), c = !0, s.type || (this.needsBlock = !0);
      }
      else if (!e.firstChild) { this.leafFallback(e, t); break e; } let d = a && a.skip ? t : this.readStyles(e, t); d && this.addAll(e, d), c && this.sync(s), this.needsBlock = u;
    }
    else { let c = this.readStyles(e, t); c && this.addElementByRule(e, a, c, a.consuming === !1 ? l : void 0); } this.localPreserveWS = i;
  }

  leafFallback(e, t) {
    e.nodeName == "BR" && this.top.type && this.top.type.inlineContent && this.addTextNode(e.ownerDocument.createTextNode(`
`), t);
  }

  ignoreFallback(e, t) { e.nodeName == "BR" && (!this.top.type || !this.top.type.inlineContent) && this.findPlace(this.parser.schema.text("-"), t, !0); }readStyles(e, t) {
    let r = e.style; if (r && r.length) {
      for (let i = 0; i < this.parser.matchedStyles.length; i++) {
        let s = this.parser.matchedStyles[i]; let o = r.getPropertyValue(s); if (o) {
          for (let l = void 0; ;) {
            let a = this.parser.matchStyle(s, o, this, l); if (!a)
              break; if (a.ignore)
              return null; if (a.clearMark ? t = t.filter(c => !a.clearMark(c)) : t = t.concat(this.parser.schema.marks[a.mark].create(a.attrs)), a.consuming === !1)
              l = a; else break;
          }
        }
      }
    } return t;
  }

  addElementByRule(e, t, r, i) {
    let s, o; if (t.node) {
      if (o = this.parser.schema.nodes[t.node], o.isLeaf) {
        this.insertNode(o.create(t.attrs), r, e.nodeName == "BR") || this.leafFallback(e, r);
      }
      else { let a = this.enter(o, t.attrs || null, r, t.preserveWhitespace); a && (s = !0, r = a); }
    }
    else { let a = this.parser.schema.marks[t.mark]; r = r.concat(a.create(t.attrs)); } let l = this.top; if (o && o.isLeaf) {
      this.findInside(e);
    }
    else if (i) {
      this.addElement(e, r, i);
    }
    else if (t.getContent) {
      this.findInside(e), t.getContent(e, this.parser.schema).forEach(a => this.insertNode(a, r, !1));
    }
    else { let a = e; typeof t.contentElement == "string" ? a = e.querySelector(t.contentElement) : typeof t.contentElement == "function" ? a = t.contentElement(e) : t.contentElement && (a = t.contentElement), this.findAround(e, a, !0), this.addAll(a, r), this.findAround(e, a, !1); }s && this.sync(l) && this.open--;
  }

  addAll(e, t, r, i) { let s = r || 0; for (let o = r ? e.childNodes[r] : e.firstChild, l = i == null ? null : e.childNodes[i]; o != l; o = o.nextSibling, ++s) this.findAtPoint(e, s), this.addDOM(o, t); this.findAtPoint(e, s); }findPlace(e, t, r) {
    let i, s; for (let o = this.open, l = 0; o >= 0; o--) {
      let a = this.nodes[o]; let c = a.findWrapping(e); if (c && (!i || i.length > c.length + l) && (i = c, s = a, !c.length))
        break; if (a.solid) {
        if (r)
          break; l += 2;
      }
    } if (!i)
      return null; this.sync(s); for (let o = 0; o < i.length; o++)t = this.enterInner(i[o], null, t, !1); return t;
  }

  insertNode(e, t, r) { if (e.isInline && this.needsBlock && !this.top.type) { let s = this.textblockFromContext(); s && (t = this.enterInner(s, null, t)); } let i = this.findPlace(e, t, r); if (i) { this.closeExtra(); let s = this.top; s.match && (s.match = s.match.matchType(e.type)); let o = z.none; for (let l of i.concat(e.marks))(s.type ? s.type.allowsMarkType(l.type) : Fs(l.type, e.type)) && (o = l.addToSet(o)); return s.content.push(e.mark(o)), !0; } return !1; }enter(e, t, r, i) { let s = this.findPlace(e.create(t), r, !1); return s && (s = this.enterInner(e, t, r, !0, i)), s; }enterInner(e, t, r, i = !1, s) { this.closeExtra(); let o = this.top; o.match = o.match && o.match.matchType(e); let l = Ls(e, s, o.options); o.options & _t && o.content.length == 0 && (l |= _t); let a = z.none; return r = r.filter(c => (o.type ? o.type.allowsMarkType(c.type) : Fs(c.type, e)) ? (a = c.addToSet(a), !1) : !0), this.nodes.push(new xn(e, t, a, i, null, l)), this.open++, r; }closeExtra(e = !1) { let t = this.nodes.length - 1; if (t > this.open) { for (;t > this.open; t--) this.nodes[t - 1].content.push(this.nodes[t].finish(e)); this.nodes.length = this.open + 1; } }finish() { return this.open = 0, this.closeExtra(this.isOpen), this.nodes[0].finish(!!(this.isOpen || this.options.topOpen)); }sync(e) {
    for (let t = this.open; t >= 0; t--) {
      if (this.nodes[t] == e)
        return this.open = t, !0; this.localPreserveWS && (this.nodes[t].options |= nn);
    } return !1;
  }

  get currentPos() { this.closeExtra(); let e = 0; for (let t = this.open; t >= 0; t--) { let r = this.nodes[t].content; for (let i = r.length - 1; i >= 0; i--)e += r[i].nodeSize; t && e++; } return e; }findAtPoint(e, t) {
    if (this.find) {
      for (let r = 0; r < this.find.length; r++) this.find[r].node == e && this.find[r].offset == t && (this.find[r].pos = this.currentPos);
    }
  }

  findInside(e) {
    if (this.find) {
      for (let t = 0; t < this.find.length; t++) this.find[t].pos == null && e.nodeType == 1 && e.contains(this.find[t].node) && (this.find[t].pos = this.currentPos);
    }
  }

  findAround(e, t, r) {
    if (e != t && this.find) {
      for (let i = 0; i < this.find.length; i++) this.find[i].pos == null && e.nodeType == 1 && e.contains(this.find[i].node) && t.compareDocumentPosition(this.find[i].node) & (r ? 2 : 4) && (this.find[i].pos = this.currentPos);
    }
  }

  findInText(e) {
    if (this.find) {
      for (let t = 0; t < this.find.length; t++) this.find[t].node == e && (this.find[t].pos = this.currentPos - (e.nodeValue.length - this.find[t].offset));
    }
  }

  matchesContext(e) {
    if (e.includes("|"))
      return e.split(/\s*\|\s*/).some(this.matchesContext, this); let t = e.split("/"); let r = this.options.context; let i = !this.isOpen && (!r || r.parent.type == this.nodes[0].type); let s = -(r ? r.depth + 1 : 0) + (i ? 0 : 1); let o = (l, a) => {
      for (;l >= 0; l--) {
        let c = t[l]; if (c == "") {
          if (l == t.length - 1 || l == 0)
            continue; for (;a >= s; a--) {
            if (o(l - 1, a))
              return !0;
          } return !1;
        }
        else {
          let u = a > 0 || a == 0 && i ? this.nodes[a].type : r && a >= s ? r.node(a - s).type : null; if (!u || u.name != c && !u.isInGroup(c))
            return !1; a--;
        }
      } return !0;
    }; return o(t.length - 1, this.open);
  }

  textblockFromContext() {
    let e = this.options.context; if (e) {
      for (let t = e.depth; t >= 0; t--) {
        let r = e.node(t).contentMatchAt(e.indexAfter(t)).defaultType; if (r && r.isTextblock && r.defaultAttrs)
          return r;
      }
    } for (let t in this.parser.schema.nodes) {
      let r = this.parser.schema.nodes[t]; if (r.isTextblock && r.defaultAttrs)
        return r;
    }
  }
} function Kc(n) { for (let e = n.firstChild, t = null; e; e = e.nextSibling) { let r = e.nodeType == 1 ? e.nodeName.toLowerCase() : null; r && kl.hasOwnProperty(r) && t ? (t.appendChild(e), e = t) : r == "li" ? t = e : r && (t = null); } } function Uc(n, e) { return (n.matches || n.msMatchesSelector || n.webkitMatchesSelector || n.mozMatchesSelector).call(n, e); } function zs(n) { let e = {}; for (let t in n)e[t] = n[t]; return e; } function Fs(n, e) {
  let t = e.schema.nodes; for (let r in t) {
    let i = t[r]; if (!i.allowsMarkType(n))
      continue; let s = []; let o = (l) => {
      s.push(l); for (let a = 0; a < l.edgeCount; a++) {
        let { type: c, next: u } = l.edge(a); if (c == e || !s.includes(u) && o(u))
          return !0;
      }
    }; if (o(i.contentMatch))
      return !0;
  }
} class St {
  constructor(e, t) { this.nodes = e, this.marks = t; }serializeFragment(e, t = {}, r) {
    r || (r = Vr(t).createDocumentFragment()); let i = r; let s = []; return e.forEach((o) => {
      if (s.length || o.marks.length) {
        let l = 0; let a = 0; for (;l < s.length && a < o.marks.length;) {
          let c = o.marks[a]; if (!this.marks[c.type.name]) { a++; continue; } if (!c.eq(s[l][0]) || c.type.spec.spanning === !1)
            break; l++, a++;
        } for (;l < s.length;)i = s.pop()[1]; for (;a < o.marks.length;) { let c = o.marks[a++]; let u = this.serializeMark(c, o.isInline, t); u && (s.push([c, i]), i.appendChild(u.dom), i = u.contentDOM || u.dom); }
      }i.appendChild(this.serializeNodeInner(o, t));
    }), r;
  }

  serializeNodeInner(e, t) {
    let { dom: r, contentDOM: i } = In(Vr(t), this.nodes[e.type.name](e), null, e.attrs); if (i) {
      if (e.isLeaf)
        throw new RangeError("Content hole not allowed in a leaf node spec"); this.serializeFragment(e.content, t, i);
    } return r;
  }

  serializeNode(e, t = {}) { let r = this.serializeNodeInner(e, t); for (let i = e.marks.length - 1; i >= 0; i--) { let s = this.serializeMark(e.marks[i], e.isInline, t); s && ((s.contentDOM || s.dom).appendChild(r), r = s.dom); } return r; }serializeMark(e, t, r = {}) { let i = this.marks[e.type.name]; return i && In(Vr(r), i(e, t), null, e.attrs); } static renderSpec(e, t, r = null, i) { return In(e, t, r, i); } static fromSchema(e) { return e.cached.domSerializer || (e.cached.domSerializer = new St(this.nodesFromSchema(e), this.marksFromSchema(e))); } static nodesFromSchema(e) { let t = Hs(e.nodes); return t.text || (t.text = r => r.text), t; } static marksFromSchema(e) { return Hs(e.marks); }
} function Hs(n) { let e = {}; for (let t in n) { let r = n[t].spec.toDOM; r && (e[t] = r); } return e; } function Vr(n) { return n.document || window.document; } const $s = new WeakMap(); function _c(n) { let e = $s.get(n); return e === void 0 && $s.set(n, e = qc(n)), e; } function qc(n) {
  let e = null; function t(r) {
    if (r && typeof r == "object") {
      if (Array.isArray(r)) {
        if (typeof r[0] == "string") {
          e || (e = []), e.push(r);
        }
        else {
          for (let i = 0; i < r.length; i++)t(r[i]);
        }
      }
      else {
        for (let i in r)t(r[i]);
      }
    }
  } return t(n), e;
} function In(n, e, t, r) {
  if (typeof e == "string")
    return { dom: n.createTextNode(e) }; if (e.nodeType != null)
    return { dom: e }; if (e.dom && e.dom.nodeType != null)
    return e; let i = e[0]; let s; if (typeof i != "string")
    throw new RangeError("Invalid array passed to renderSpec"); if (r && (s = _c(r)) && s.includes(e))
    throw new RangeError("Using an array from an attribute object as a DOM spec. This may be an attempted cross site scripting attack."); let o = i.indexOf(" "); o > 0 && (t = i.slice(0, o), i = i.slice(o + 1)); let l; let a = t ? n.createElementNS(t, i) : n.createElement(i); let c = e[1]; let u = 1; if (c && typeof c == "object" && c.nodeType == null && !Array.isArray(c)) {
    u = 2; for (let d in c) {
      if (c[d] != null) { let f = d.indexOf(" "); f > 0 ? a.setAttributeNS(d.slice(0, f), d.slice(f + 1), c[d]) : d == "style" && a.style ? a.style.cssText = c[d] : a.setAttribute(d, c[d]); }
    }
  } for (let d = u; d < e.length; d++) {
    let f = e[d]; if (f === 0) {
      if (d < e.length - 1 || d > u)
        throw new RangeError("Content hole must be the only child of its parent node"); return { dom: a, contentDOM: a };
    }
    else {
      let { dom: h, contentDOM: p } = In(n, f, t, r); if (a.appendChild(h), p) {
        if (l)
          throw new RangeError("Multiple content holes"); l = p;
      }
    }
  } return { dom: a, contentDOM: l };
} const xl = 65535; const Sl = 2 ** 16; function Jc(n, e) { return n + e * Sl; } function Vs(n) { return n & xl; } function Gc(n) { return (n - (n & xl)) / Sl; } const Cl = 1; const Ml = 2; const Rn = 4; const wl = 8; class bi {constructor(e, t, r) { this.pos = e, this.delInfo = t, this.recover = r; } get deleted() { return (this.delInfo & wl) > 0; } get deletedBefore() { return (this.delInfo & (Cl | Rn)) > 0; } get deletedAfter() { return (this.delInfo & (Ml | Rn)) > 0; } get deletedAcross() { return (this.delInfo & Rn) > 0; }} class he {
  constructor(e, t = !1) {
    if (this.ranges = e, this.inverted = t, !e.length && he.empty)
      return he.empty;
  }

  recover(e) {
    let t = 0; let r = Vs(e); if (!this.inverted) {
      for (let i = 0; i < r; i++)t += this.ranges[i * 3 + 2] - this.ranges[i * 3 + 1];
    } return this.ranges[r * 3] + t + Gc(e);
  }

  mapResult(e, t = 1) { return this._map(e, t, !1); }map(e, t = 1) { return this._map(e, t, !0); }_map(e, t, r) {
    let i = 0; let s = this.inverted ? 2 : 1; let o = this.inverted ? 1 : 2; for (let l = 0; l < this.ranges.length; l += 3) {
      let a = this.ranges[l] - (this.inverted ? i : 0); if (a > e)
        break; let c = this.ranges[l + s]; let u = this.ranges[l + o]; let d = a + c; if (e <= d) {
        let f = c ? e == a ? -1 : e == d ? 1 : t : t; let h = a + i + (f < 0 ? 0 : u); if (r)
          return h; let p = e == (t < 0 ? a : d) ? null : Jc(l / 3, e - a); let m = e == a ? Ml : e == d ? Cl : Rn; return (t < 0 ? e != a : e != d) && (m |= wl), new bi(h, m, p);
      }i += u - c;
    } return r ? e + i : new bi(e + i, 0, null);
  }

  touches(e, t) {
    let r = 0; let i = Vs(t); let s = this.inverted ? 2 : 1; let o = this.inverted ? 1 : 2; for (let l = 0; l < this.ranges.length; l += 3) {
      let a = this.ranges[l] - (this.inverted ? r : 0); if (a > e)
        break; let c = this.ranges[l + s]; let u = a + c; if (e <= u && l == i * 3)
        return !0; r += this.ranges[l + o] - c;
    } return !1;
  }

  forEach(e) { let t = this.inverted ? 2 : 1; let r = this.inverted ? 1 : 2; for (let i = 0, s = 0; i < this.ranges.length; i += 3) { let o = this.ranges[i]; let l = o - (this.inverted ? s : 0); let a = o + (this.inverted ? 0 : s); let c = this.ranges[i + t]; let u = this.ranges[i + r]; e(l, l + c, a, a + u), s += u - c; } }invert() { return new he(this.ranges, !this.inverted); }toString() { return (this.inverted ? "-" : "") + JSON.stringify(this.ranges); } static offset(e) { return e == 0 ? he.empty : new he(e < 0 ? [0, -e, 0] : [0, 0, e]); }
}he.empty = new he([]); class rn {
  constructor(e, t, r = 0, i = e ? e.length : 0) { this.mirror = t, this.from = r, this.to = i, this._maps = e || [], this.ownData = !(e || t); } get maps() { return this._maps; }slice(e = 0, t = this.maps.length) { return new rn(this._maps, this.mirror, e, t); }appendMap(e, t) { this.ownData || (this._maps = this._maps.slice(), this.mirror = this.mirror && this.mirror.slice(), this.ownData = !0), this.to = this._maps.push(e), t != null && this.setMirror(this._maps.length - 1, t); }appendMapping(e) { for (let t = 0, r = this._maps.length; t < e._maps.length; t++) { let i = e.getMirror(t); this.appendMap(e._maps[t], i != null && i < t ? r + i : void 0); } }getMirror(e) {
    if (this.mirror) {
      for (let t = 0; t < this.mirror.length; t++) {
        if (this.mirror[t] == e)
          return this.mirror[t + (t % 2 ? -1 : 1)];
      }
    }
  }

  setMirror(e, t) { this.mirror || (this.mirror = []), this.mirror.push(e, t); }appendMappingInverted(e) { for (let t = e.maps.length - 1, r = this._maps.length + e._maps.length; t >= 0; t--) { let i = e.getMirror(t); this.appendMap(e._maps[t].invert(), i != null && i > t ? r - i - 1 : void 0); } }invert() { let e = new rn(); return e.appendMappingInverted(this), e; }map(e, t = 1) {
    if (this.mirror)
      return this._map(e, t, !0); for (let r = this.from; r < this.to; r++)e = this._maps[r].map(e, t); return e;
  }

  mapResult(e, t = 1) { return this._map(e, t, !1); }_map(e, t, r) { let i = 0; for (let s = this.from; s < this.to; s++) { let o = this._maps[s]; let l = o.mapResult(e, t); if (l.recover != null) { let a = this.getMirror(s); if (a != null && a > s && a < this.to) { s = a, e = this._maps[a].recover(l.recover); continue; } }i |= l.delInfo, e = l.pos; } return r ? e : new bi(e, i, null); }
} const jr = Object.create(null); class se {
  getMap() { return he.empty; }merge(e) { return null; } static fromJSON(e, t) {
    if (!t || !t.stepType)
      throw new RangeError("Invalid input for Step.fromJSON"); let r = jr[t.stepType]; if (!r)
      throw new RangeError(`No step type ${t.stepType} defined`); return r.fromJSON(e, t);
  }

  static jsonID(e, t) {
    if (e in jr)
      throw new RangeError(`Duplicate use of step JSON ID ${e}`); return jr[e] = t, t.prototype.jsonID = e, t;
  }
} class U {
  constructor(e, t) { this.doc = e, this.failed = t; } static ok(e) { return new U(e, null); } static fail(e) { return new U(null, e); } static fromReplace(e, t, r, i) {
    try { return U.ok(e.replace(t, r, i)); }
    catch (s) {
      if (s instanceof Fn)
        return U.fail(s.message); throw s;
    }
  }
} function Ki(n, e, t) { let r = []; for (let i = 0; i < n.childCount; i++) { let s = n.child(i); s.content.size && (s = s.copy(Ki(s.content, e, s))), s.isInline && (s = e(s, t, i)), r.push(s); } return b.fromArray(r); } class Ue extends se {
  constructor(e, t, r) { super(), this.from = e, this.to = t, this.mark = r; }apply(e) { let t = e.slice(this.from, this.to); let r = e.resolve(this.from); let i = r.node(r.sharedDepth(this.to)); let s = new x(Ki(t.content, (o, l) => !o.isAtom || !l.type.allowsMarkType(this.mark.type) ? o : o.mark(this.mark.addToSet(o.marks)), i), t.openStart, t.openEnd); return U.fromReplace(e, this.from, this.to, s); }invert() { return new Ee(this.from, this.to, this.mark); }map(e) { let t = e.mapResult(this.from, 1); let r = e.mapResult(this.to, -1); return t.deleted && r.deleted || t.pos >= r.pos ? null : new Ue(t.pos, r.pos, this.mark); }merge(e) { return e instanceof Ue && e.mark.eq(this.mark) && this.from <= e.to && this.to >= e.from ? new Ue(Math.min(this.from, e.from), Math.max(this.to, e.to), this.mark) : null; }toJSON() { return { stepType: "addMark", mark: this.mark.toJSON(), from: this.from, to: this.to }; } static fromJSON(e, t) {
    if (typeof t.from != "number" || typeof t.to != "number")
      throw new RangeError("Invalid input for AddMarkStep.fromJSON"); return new Ue(t.from, t.to, e.markFromJSON(t.mark));
  }
}se.jsonID("addMark", Ue); class Ee extends se {
  constructor(e, t, r) { super(), this.from = e, this.to = t, this.mark = r; }apply(e) { let t = e.slice(this.from, this.to); let r = new x(Ki(t.content, i => i.mark(this.mark.removeFromSet(i.marks)), e), t.openStart, t.openEnd); return U.fromReplace(e, this.from, this.to, r); }invert() { return new Ue(this.from, this.to, this.mark); }map(e) { let t = e.mapResult(this.from, 1); let r = e.mapResult(this.to, -1); return t.deleted && r.deleted || t.pos >= r.pos ? null : new Ee(t.pos, r.pos, this.mark); }merge(e) { return e instanceof Ee && e.mark.eq(this.mark) && this.from <= e.to && this.to >= e.from ? new Ee(Math.min(this.from, e.from), Math.max(this.to, e.to), this.mark) : null; }toJSON() { return { stepType: "removeMark", mark: this.mark.toJSON(), from: this.from, to: this.to }; } static fromJSON(e, t) {
    if (typeof t.from != "number" || typeof t.to != "number")
      throw new RangeError("Invalid input for RemoveMarkStep.fromJSON"); return new Ee(t.from, t.to, e.markFromJSON(t.mark));
  }
}se.jsonID("removeMark", Ee); class _e extends se {
  constructor(e, t) { super(), this.pos = e, this.mark = t; }apply(e) {
    let t = e.nodeAt(this.pos); if (!t)
      return U.fail("No node at mark step's position"); let r = t.type.create(t.attrs, null, this.mark.addToSet(t.marks)); return U.fromReplace(e, this.pos, this.pos + 1, new x(b.from(r), 0, t.isLeaf ? 0 : 1));
  }

  invert(e) {
    let t = e.nodeAt(this.pos); if (t) {
      let r = this.mark.addToSet(t.marks); if (r.length == t.marks.length) {
        for (let i = 0; i < t.marks.length; i++) {
          if (!t.marks[i].isInSet(r))
            return new _e(this.pos, t.marks[i]);
        } return new _e(this.pos, this.mark);
      }
    } return new yt(this.pos, this.mark);
  }

  map(e) { let t = e.mapResult(this.pos, 1); return t.deletedAfter ? null : new _e(t.pos, this.mark); }toJSON() { return { stepType: "addNodeMark", pos: this.pos, mark: this.mark.toJSON() }; } static fromJSON(e, t) {
    if (typeof t.pos != "number")
      throw new RangeError("Invalid input for AddNodeMarkStep.fromJSON"); return new _e(t.pos, e.markFromJSON(t.mark));
  }
}se.jsonID("addNodeMark", _e); class yt extends se {
  constructor(e, t) { super(), this.pos = e, this.mark = t; }apply(e) {
    let t = e.nodeAt(this.pos); if (!t)
      return U.fail("No node at mark step's position"); let r = t.type.create(t.attrs, null, this.mark.removeFromSet(t.marks)); return U.fromReplace(e, this.pos, this.pos + 1, new x(b.from(r), 0, t.isLeaf ? 0 : 1));
  }

  invert(e) { let t = e.nodeAt(this.pos); return !t || !this.mark.isInSet(t.marks) ? this : new _e(this.pos, this.mark); }map(e) { let t = e.mapResult(this.pos, 1); return t.deletedAfter ? null : new yt(t.pos, this.mark); }toJSON() { return { stepType: "removeNodeMark", pos: this.pos, mark: this.mark.toJSON() }; } static fromJSON(e, t) {
    if (typeof t.pos != "number")
      throw new RangeError("Invalid input for RemoveNodeMarkStep.fromJSON"); return new yt(t.pos, e.markFromJSON(t.mark));
  }
}se.jsonID("removeNodeMark", yt); class J extends se {
  constructor(e, t, r, i = !1) { super(), this.from = e, this.to = t, this.slice = r, this.structure = i; }apply(e) { return this.structure && ki(e, this.from, this.to) ? U.fail("Structure replace would overwrite content") : U.fromReplace(e, this.from, this.to, this.slice); }getMap() { return new he([this.from, this.to - this.from, this.slice.size]); }invert(e) { return new J(this.from, this.from + this.slice.size, e.slice(this.from, this.to)); }map(e) { let t = e.mapResult(this.from, 1); let r = e.mapResult(this.to, -1); return t.deletedAcross && r.deletedAcross ? null : new J(t.pos, Math.max(t.pos, r.pos), this.slice, this.structure); }merge(e) {
    if (!(e instanceof J) || e.structure || this.structure)
      return null; if (this.from + this.slice.size == e.from && !this.slice.openEnd && !e.slice.openStart) { let t = this.slice.size + e.slice.size == 0 ? x.empty : new x(this.slice.content.append(e.slice.content), this.slice.openStart, e.slice.openEnd); return new J(this.from, this.to + (e.to - e.from), t, this.structure); }
    else if (e.to == this.from && !this.slice.openStart && !e.slice.openEnd) { let t = this.slice.size + e.slice.size == 0 ? x.empty : new x(e.slice.content.append(this.slice.content), e.slice.openStart, this.slice.openEnd); return new J(e.from, this.to, t, this.structure); }
    else {
      return null;
    }
  }

  toJSON() { let e = { stepType: "replace", from: this.from, to: this.to }; return this.slice.size && (e.slice = this.slice.toJSON()), this.structure && (e.structure = !0), e; } static fromJSON(e, t) {
    if (typeof t.from != "number" || typeof t.to != "number")
      throw new RangeError("Invalid input for ReplaceStep.fromJSON"); return new J(t.from, t.to, x.fromJSON(e, t.slice), !!t.structure);
  }
}se.jsonID("replace", J); class G extends se {
  constructor(e, t, r, i, s, o, l = !1) { super(), this.from = e, this.to = t, this.gapFrom = r, this.gapTo = i, this.slice = s, this.insert = o, this.structure = l; }apply(e) {
    if (this.structure && (ki(e, this.from, this.gapFrom) || ki(e, this.gapTo, this.to)))
      return U.fail("Structure gap-replace would overwrite content"); let t = e.slice(this.gapFrom, this.gapTo); if (t.openStart || t.openEnd)
      return U.fail("Gap is not a flat range"); let r = this.slice.insertAt(this.insert, t.content); return r ? U.fromReplace(e, this.from, this.to, r) : U.fail("Content does not fit in gap");
  }

  getMap() { return new he([this.from, this.gapFrom - this.from, this.insert, this.gapTo, this.to - this.gapTo, this.slice.size - this.insert]); }invert(e) { let t = this.gapTo - this.gapFrom; return new G(this.from, this.from + this.slice.size + t, this.from + this.insert, this.from + this.insert + t, e.slice(this.from, this.to).removeBetween(this.gapFrom - this.from, this.gapTo - this.from), this.gapFrom - this.from, this.structure); }map(e) { let t = e.mapResult(this.from, 1); let r = e.mapResult(this.to, -1); let i = this.from == this.gapFrom ? t.pos : e.map(this.gapFrom, -1); let s = this.to == this.gapTo ? r.pos : e.map(this.gapTo, 1); return t.deletedAcross && r.deletedAcross || i < t.pos || s > r.pos ? null : new G(t.pos, r.pos, i, s, this.slice, this.insert, this.structure); }toJSON() { let e = { stepType: "replaceAround", from: this.from, to: this.to, gapFrom: this.gapFrom, gapTo: this.gapTo, insert: this.insert }; return this.slice.size && (e.slice = this.slice.toJSON()), this.structure && (e.structure = !0), e; } static fromJSON(e, t) {
    if (typeof t.from != "number" || typeof t.to != "number" || typeof t.gapFrom != "number" || typeof t.gapTo != "number" || typeof t.insert != "number")
      throw new RangeError("Invalid input for ReplaceAroundStep.fromJSON"); return new G(t.from, t.to, t.gapFrom, t.gapTo, x.fromJSON(e, t.slice), t.insert, !!t.structure);
  }
}se.jsonID("replaceAround", G); function ki(n, e, t) {
  let r = n.resolve(e); let i = t - e; let s = r.depth; for (;i > 0 && s > 0 && r.indexAfter(s) == r.node(s).childCount;)s--, i--; if (i > 0) {
    let o = r.node(s).maybeChild(r.indexAfter(s)); for (;i > 0;) {
      if (!o || o.isLeaf)
        return !0; o = o.firstChild, i--;
    }
  } return !1;
} function Yc(n, e, t, r) {
  let i = []; let s = []; let o; let l; n.doc.nodesBetween(e, t, (a, c, u) => {
    if (!a.isInline)
      return; let d = a.marks; if (!r.isInSet(d) && u.type.allowsMarkType(r.type)) { let f = Math.max(c, e); let h = Math.min(c + a.nodeSize, t); let p = r.addToSet(d); for (let m = 0; m < d.length; m++)d[m].isInSet(p) || (o && o.to == f && o.mark.eq(d[m]) ? o.to = h : i.push(o = new Ee(f, h, d[m]))); l && l.to == f ? l.to = h : s.push(l = new Ue(f, h, r)); }
  }), i.forEach(a => n.step(a)), s.forEach(a => n.step(a));
} function Xc(n, e, t, r) {
  let i = []; let s = 0; n.doc.nodesBetween(e, t, (o, l) => {
    if (!o.isInline)
      return; s++; let a = null; if (r instanceof Mr) { let c = o.marks; let u; for (;u = r.isInSet(c);)(a || (a = [])).push(u), c = u.removeFromSet(c); }
    else {
      r ? r.isInSet(o.marks) && (a = [r]) : a = o.marks;
    } if (a && a.length) { let c = Math.min(l + o.nodeSize, t); for (let u = 0; u < a.length; u++) { let d = a[u]; let f; for (let h = 0; h < i.length; h++) { let p = i[h]; p.step == s - 1 && d.eq(i[h].style) && (f = p); }f ? (f.to = c, f.step = s) : i.push({ style: d, from: Math.max(l, e), to: c, step: s }); } }
  }), i.forEach(o => n.step(new Ee(o.from, o.to, o.style)));
} function Ui(n, e, t, r = t.contentMatch, i = !0) {
  let s = n.doc.nodeAt(e); let o = []; let l = e + 1; for (let a = 0; a < s.childCount; a++) {
    let c = s.child(a); let u = l + c.nodeSize; let d = r.matchType(c.type); if (!d) {
      o.push(new J(l, u, x.empty));
    }
    else { r = d; for (let f = 0; f < c.marks.length; f++)t.allowsMarkType(c.marks[f].type) || n.step(new Ee(l, u, c.marks[f])); if (i && c.isText && t.whitespace != "pre") { let f; let h = /\r?\n|\r/g; let p; for (;f = h.exec(c.text);)p || (p = new x(b.from(t.schema.text(" ", t.allowedMarks(c.marks))), 0, 0)), o.push(new J(l + f.index, l + f.index + f[0].length, p)); } }l = u;
  } if (!r.validEnd) { let a = r.fillBefore(b.empty, !0); n.replace(l, l, new x(a, 0, 0)); } for (let a = o.length - 1; a >= 0; a--)n.step(o[a]);
} function Qc(n, e, t) { return (e == 0 || n.canReplace(e, n.childCount)) && (t == n.childCount || n.canReplace(0, t)); } function Bt(n) {
  let t = n.parent.content.cutByIndex(n.startIndex, n.endIndex); for (let r = n.depth; ;--r) {
    let i = n.$from.node(r); let s = n.$from.index(r); let o = n.$to.indexAfter(r); if (r < n.depth && i.canReplace(s, o, t))
      return r; if (r == 0 || i.type.spec.isolating || !Qc(i, s, o))
      break;
  } return null;
} function Zc(n, e, t) { let { $from: r, $to: i, depth: s } = e; let o = r.before(s + 1); let l = i.after(s + 1); let a = o; let c = l; let u = b.empty; let d = 0; for (let p = s, m = !1; p > t; p--)m || r.index(p) > 0 ? (m = !0, u = b.from(r.node(p).copy(u)), d++) : a--; let f = b.empty; let h = 0; for (let p = s, m = !1; p > t; p--)m || i.after(p + 1) < i.end(p) ? (m = !0, f = b.from(i.node(p).copy(f)), h++) : c++; n.step(new G(a, c, o, l, new x(u.append(f), d, h), u.size - d, !0)); } function _i(n, e, t = null, r = n) { let i = eu(n, e); let s = i && tu(r, e); return s ? i.map(js).concat({ type: e, attrs: t }).concat(s.map(js)) : null; } function js(n) { return { type: n, attrs: null }; } function eu(n, e) {
  let { parent: t, startIndex: r, endIndex: i } = n; let s = t.contentMatchAt(r).findWrapping(e); if (!s)
    return null; let o = s.length ? s[0] : e; return t.canReplaceWith(r, i, o) ? s : null;
} function tu(n, e) {
  let { parent: t, startIndex: r, endIndex: i } = n; let s = t.child(r); let o = e.contentMatch.findWrapping(s.type); if (!o)
    return null; let a = (o.length ? o[o.length - 1] : e).contentMatch; for (let c = r; a && c < i; c++)a = a.matchType(t.child(c).type); return !a || !a.validEnd ? null : o;
} function nu(n, e, t) {
  let r = b.empty; for (let o = t.length - 1; o >= 0; o--) {
    if (r.size) {
      let l = t[o].type.contentMatch.matchFragment(r); if (!l || !l.validEnd)
        throw new RangeError("Wrapper type given to Transform.wrap does not form valid content of its parent wrapper");
    }r = b.from(t[o].type.create(t[o].attrs, r));
  } let i = e.start; let s = e.end; n.step(new G(i, s, i, s, new x(r, 0, 0), t.length, !0));
} function ru(n, e, t, r, i) {
  if (!r.isTextblock)
    throw new RangeError("Type given to setBlockType should be a textblock"); let s = n.steps.length; n.doc.nodesBetween(e, t, (o, l) => { let a = typeof i == "function" ? i(o) : i; if (o.isTextblock && !o.hasMarkup(r, a) && iu(n.doc, n.mapping.slice(s).map(l), r)) { let c = null; if (r.schema.linebreakReplacement) { let h = r.whitespace == "pre"; let p = !!r.contentMatch.matchType(r.schema.linebreakReplacement); h && !p ? c = !1 : !h && p && (c = !0); }c === !1 && El(n, o, l, s), Ui(n, n.mapping.slice(s).map(l, 1), r, void 0, c === null); let u = n.mapping.slice(s); let d = u.map(l, 1); let f = u.map(l + o.nodeSize, 1); return n.step(new G(d, f, d + 1, f - 1, new x(b.from(r.create(a, null, o.marks)), 0, 0), 1, !0)), c === !0 && Tl(n, o, l, s), !1; } });
} function Tl(n, e, t, r) { e.forEach((i, s) => { if (i.isText) { let o; let l = /\r?\n|\r/g; for (;o = l.exec(i.text);) { let a = n.mapping.slice(r).map(t + 1 + s + o.index); n.replaceWith(a, a + 1, e.type.schema.linebreakReplacement.create()); } } }); } function El(n, e, t, r) {
  e.forEach((i, s) => {
    if (i.type == i.type.schema.linebreakReplacement) {
      let o = n.mapping.slice(r).map(t + 1 + s); n.replaceWith(o, o + 1, e.type.schema.text(`
`));
    }
  });
} function iu(n, e, t) { let r = n.resolve(e); let i = r.index(); return r.parent.canReplaceWith(i, i + 1, t); } function su(n, e, t, r, i) {
  let s = n.doc.nodeAt(e); if (!s)
    throw new RangeError("No node at given position"); t || (t = s.type); let o = t.create(r, null, i || s.marks); if (s.isLeaf)
    return n.replaceWith(e, e + s.nodeSize, o); if (!t.validContent(s.content))
    throw new RangeError(`Invalid content for node type ${t.name}`); n.step(new G(e, e + s.nodeSize, e + 1, e + s.nodeSize - 1, new x(b.from(o), 0, 0), 1, !0));
} function Le(n, e, t = 1, r) {
  let i = n.resolve(e); let s = i.depth - t; let o = r && r[r.length - 1] || i.parent; if (s < 0 || i.parent.type.spec.isolating || !i.parent.canReplace(i.index(), i.parent.childCount) || !o.type.validContent(i.parent.content.cutByIndex(i.index(), i.parent.childCount)))
    return !1; for (let c = i.depth - 1, u = t - 2; c > s; c--, u--) {
    let d = i.node(c); let f = i.index(c); if (d.type.spec.isolating)
      return !1; let h = d.content.cutByIndex(f, d.childCount); let p = r && r[u + 1]; p && (h = h.replaceChild(0, p.type.create(p.attrs))); let m = r && r[u] || d; if (!d.canReplace(f + 1, d.childCount) || !m.type.validContent(h))
      return !1;
  } let l = i.indexAfter(s); let a = r && r[0]; return i.node(s).canReplaceWith(l, l, a ? a.type : i.node(s + 1).type);
} function ou(n, e, t = 1, r) { let i = n.doc.resolve(e); let s = b.empty; let o = b.empty; for (let l = i.depth, a = i.depth - t, c = t - 1; l > a; l--, c--) { s = b.from(i.node(l).copy(s)); let u = r && r[c]; o = b.from(u ? u.type.create(u.attrs, o) : i.node(l).copy(o)); }n.step(new J(e, e, new x(s.append(o), t, t), !0)); } function tt(n, e) { let t = n.resolve(e); let r = t.index(); return Ol(t.nodeBefore, t.nodeAfter) && t.parent.canReplace(r, r + 1); } function lu(n, e) {
  e.content.size || n.type.compatibleContent(e.type); let t = n.contentMatchAt(n.childCount); let { linebreakReplacement: r } = n.type.schema; for (let i = 0; i < e.childCount; i++) {
    let s = e.child(i); let o = s.type == r ? n.type.schema.nodes.text : s.type; if (t = t.matchType(o), !t || !n.type.allowsMarks(s.marks))
      return !1;
  } return t.validEnd;
} function Ol(n, e) { return !!(n && e && !n.isLeaf && lu(n, e)); } function wr(n, e, t = -1) {
  let r = n.resolve(e); for (let i = r.depth; ;i--) {
    let s; let o; let l = r.index(i); if (i == r.depth ? (s = r.nodeBefore, o = r.nodeAfter) : t > 0 ? (s = r.node(i + 1), l++, o = r.node(i).maybeChild(l)) : (s = r.node(i).maybeChild(l - 1), o = r.node(i + 1)), s && !s.isTextblock && Ol(s, o) && r.node(i).canReplace(l, l + 1))
      return e; if (i == 0)
      break; e = t < 0 ? r.before(i) : r.after(i);
  }
} function au(n, e, t) { let r = null; let { linebreakReplacement: i } = n.doc.type.schema; let s = n.doc.resolve(e - t); let o = s.node().type; if (i && o.inlineContent) { let u = o.whitespace == "pre"; let d = !!o.contentMatch.matchType(i); u && !d ? r = !1 : !u && d && (r = !0); } let l = n.steps.length; if (r === !1) { let u = n.doc.resolve(e + t); El(n, u.node(), u.before(), l); }o.inlineContent && Ui(n, e + t - 1, o, s.node().contentMatchAt(s.index()), r == null); let a = n.mapping.slice(l); let c = a.map(e - t); if (n.step(new J(c, a.map(e + t, -1), x.empty, !0)), r === !0) { let u = n.doc.resolve(c); Tl(n, u.node(), u.before(), n.steps.length); } return n; } function cu(n, e, t) {
  let r = n.resolve(e); if (r.parent.canReplaceWith(r.index(), r.index(), t))
    return e; if (r.parentOffset == 0) {
    for (let i = r.depth - 1; i >= 0; i--) {
      let s = r.index(i); if (r.node(i).canReplaceWith(s, s, t))
        return r.before(i + 1); if (s > 0)
        return null;
    }
  } if (r.parentOffset == r.parent.content.size) {
    for (let i = r.depth - 1; i >= 0; i--) {
      let s = r.indexAfter(i); if (r.node(i).canReplaceWith(s, s, t))
        return r.after(i + 1); if (s < r.node(i).childCount)
        return null;
    }
  } return null;
} function Al(n, e, t) {
  let r = n.resolve(e); if (!t.content.size)
    return e; let i = t.content; for (let s = 0; s < t.openStart; s++)i = i.firstChild.content; for (let s = 1; s <= (t.openStart == 0 && t.size ? 2 : 1); s++) {
    for (let o = r.depth; o >= 0; o--) {
      let l = o == r.depth ? 0 : r.pos <= (r.start(o + 1) + r.end(o + 1)) / 2 ? -1 : 1; let a = r.index(o) + (l > 0 ? 1 : 0); let c = r.node(o); let u = !1; if (s == 1) {
        u = c.canReplace(a, a, i);
      }
      else { let d = c.contentMatchAt(a).findWrapping(i.firstChild.type); u = d && c.canReplaceWith(a, a, d[0]); } if (u)
        return l == 0 ? r.pos : l < 0 ? r.before(o + 1) : r.after(o + 1);
    }
  } return null;
} function Tr(n, e, t = e, r = x.empty) {
  if (e == t && !r.size)
    return null; let i = n.resolve(e); let s = n.resolve(t); return vl(i, s, r) ? new J(e, t, r) : new uu(i, s, r).fit();
} function vl(n, e, t) { return !t.openStart && !t.openEnd && n.start() == e.start() && n.parent.canReplace(n.index(), e.index(), t.content); } class uu {
  constructor(e, t, r) { this.$from = e, this.$to = t, this.unplaced = r, this.frontier = [], this.placed = b.empty; for (let i = 0; i <= e.depth; i++) { let s = e.node(i); this.frontier.push({ type: s.type, match: s.contentMatchAt(e.indexAfter(i)) }); } for (let i = e.depth; i > 0; i--) this.placed = b.from(e.node(i).copy(this.placed)); } get depth() { return this.frontier.length - 1; }fit() {
    for (;this.unplaced.size;) { let c = this.findFittable(); c ? this.placeNodes(c) : this.openMore() || this.dropNode(); } let e = this.mustMoveInline(); let t = this.placed.size - this.depth - this.$from.depth; let r = this.$from; let i = this.close(e < 0 ? this.$to : r.doc.resolve(e)); if (!i)
      return null; let s = this.placed; let o = r.depth; let l = i.depth; for (;o && l && s.childCount == 1;)s = s.firstChild.content, o--, l--; let a = new x(s, o, l); return e > -1 ? new G(r.pos, e, this.$to.pos, this.$to.end(), a, t) : a.size || r.pos != this.$to.pos ? new J(r.pos, i.pos, a) : null;
  }

  findFittable() {
    let e = this.unplaced.openStart; for (let t = this.unplaced.content, r = 0, i = this.unplaced.openEnd; r < e; r++) { let s = t.firstChild; if (t.childCount > 1 && (i = 0), s.type.spec.isolating && i <= r) { e = r; break; }t = s.content; } for (let t = 1; t <= 2; t++) {
      for (let r = t == 1 ? e : this.unplaced.openStart; r >= 0; r--) {
        let i; let s = null; r ? (s = Wr(this.unplaced.content, r - 1).firstChild, i = s.content) : i = this.unplaced.content; let o = i.firstChild; for (let l = this.depth; l >= 0; l--) {
          let { type: a, match: c } = this.frontier[l]; let u; let d = null; if (t == 1 && (o ? c.matchType(o.type) || (d = c.fillBefore(b.from(o), !1)) : s && a.compatibleContent(s.type)))
            return { sliceDepth: r, frontierDepth: l, parent: s, inject: d }; if (t == 2 && o && (u = c.findWrapping(o.type)))
            return { sliceDepth: r, frontierDepth: l, parent: s, wrap: u }; if (s && c.matchType(s.type))
            break;
        }
      }
    }
  }

  openMore() { let { content: e, openStart: t, openEnd: r } = this.unplaced; let i = Wr(e, t); return !i.childCount || i.firstChild.isLeaf ? !1 : (this.unplaced = new x(e, t + 1, Math.max(r, i.size + t >= e.size - r ? t + 1 : 0)), !0); }dropNode() {
    let { content: e, openStart: t, openEnd: r } = this.unplaced; let i = Wr(e, t); if (i.childCount <= 1 && t > 0) { let s = e.size - t <= t + i.size; this.unplaced = new x(Vt(e, t - 1, 1), t - 1, s ? t - 1 : r); }
    else {
      this.unplaced = new x(Vt(e, t, 1), t, r);
    }
  }

  placeNodes({ sliceDepth: e, frontierDepth: t, parent: r, inject: i, wrap: s }) {
    for (;this.depth > t;) this.closeFrontierNode(); if (s) {
      for (let m = 0; m < s.length; m++) this.openFrontierNode(s[m]);
    } let o = this.unplaced; let l = r ? r.content : o.content; let a = o.openStart - e; let c = 0; let u = []; let { match: d, type: f } = this.frontier[t]; if (i) { for (let m = 0; m < i.childCount; m++)u.push(i.child(m)); d = d.matchFragment(i); } let h = l.size + e - (o.content.size - o.openEnd); for (;c < l.childCount;) {
      let m = l.child(c); let g = d.matchType(m.type); if (!g)
        break; c++, (c > 1 || a == 0 || m.content.size) && (d = g, u.push(Nl(m.mark(f.allowedMarks(m.marks)), c == 1 ? a : 0, c == l.childCount ? h : -1)));
    } let p = c == l.childCount; p || (h = -1), this.placed = jt(this.placed, t, b.from(u)), this.frontier[t].match = d, p && h < 0 && r && r.type == this.frontier[this.depth].type && this.frontier.length > 1 && this.closeFrontierNode(); for (let m = 0, g = l; m < h; m++) { let y = g.lastChild; this.frontier.push({ type: y.type, match: y.contentMatchAt(y.childCount) }), g = y.content; } this.unplaced = p ? e == 0 ? x.empty : new x(Vt(o.content, e - 1, 1), e - 1, h < 0 ? o.openEnd : e - 1) : new x(Vt(o.content, e, c), o.openStart, o.openEnd);
  }

  mustMoveInline() {
    if (!this.$to.parent.isTextblock)
      return -1; let e = this.frontier[this.depth]; let t; if (!e.type.isTextblock || !Kr(this.$to, this.$to.depth, e.type, e.match, !1) || this.$to.depth == this.depth && (t = this.findCloseLevel(this.$to)) && t.depth == this.depth)
      return -1; let { depth: r } = this.$to; let i = this.$to.after(r); for (;r > 1 && i == this.$to.end(--r);)++i; return i;
  }

  findCloseLevel(e) {
    e:for (let t = Math.min(this.depth, e.depth); t >= 0; t--) {
      let { match: r, type: i } = this.frontier[t]; let s = t < e.depth && e.end(t + 1) == e.pos + (e.depth - (t + 1)); let o = Kr(e, t, i, r, s); if (o) {
        for (let l = t - 1; l >= 0; l--) {
          let { match: a, type: c } = this.frontier[l]; let u = Kr(e, l, c, a, !0); if (!u || u.childCount)
            continue e;
        } return { depth: t, fit: o, move: s ? e.doc.resolve(e.after(t + 1)) : e };
      }
    }
  }

  close(e) {
    let t = this.findCloseLevel(e); if (!t)
      return null; for (;this.depth > t.depth;) this.closeFrontierNode(); t.fit.childCount && (this.placed = jt(this.placed, t.depth, t.fit)), e = t.move; for (let r = t.depth + 1; r <= e.depth; r++) { let i = e.node(r); let s = i.type.contentMatch.fillBefore(i.content, !0, e.index(r)); this.openFrontierNode(i.type, i.attrs, s); } return e;
  }

  openFrontierNode(e, t = null, r) { let i = this.frontier[this.depth]; i.match = i.match.matchType(e), this.placed = jt(this.placed, this.depth, b.from(e.create(t, r))), this.frontier.push({ type: e, match: e.contentMatch }); }closeFrontierNode() { let t = this.frontier.pop().match.fillBefore(b.empty, !0); t.childCount && (this.placed = jt(this.placed, this.frontier.length, t)); }
} function Vt(n, e, t) { return e == 0 ? n.cutByIndex(t, n.childCount) : n.replaceChild(0, n.firstChild.copy(Vt(n.firstChild.content, e - 1, t))); } function jt(n, e, t) { return e == 0 ? n.append(t) : n.replaceChild(n.childCount - 1, n.lastChild.copy(jt(n.lastChild.content, e - 1, t))); } function Wr(n, e) { for (let t = 0; t < e; t++)n = n.firstChild.content; return n; } function Nl(n, e, t) {
  if (e <= 0)
    return n; let r = n.content; return e > 1 && (r = r.replaceChild(0, Nl(r.firstChild, e - 1, r.childCount == 1 ? t - 1 : 0))), e > 0 && (r = n.type.contentMatch.fillBefore(r).append(r), t <= 0 && (r = r.append(n.type.contentMatch.matchFragment(r).fillBefore(b.empty, !0)))), n.copy(r);
} function Kr(n, e, t, r, i) {
  let s = n.node(e); let o = i ? n.indexAfter(e) : n.index(e); if (o == s.childCount && !t.compatibleContent(s.type))
    return null; let l = r.fillBefore(s.content, !0, o); return l && !du(t, s.content, o) ? l : null;
} function du(n, e, t) {
  for (let r = t; r < e.childCount; r++) {
    if (!n.allowsMarks(e.child(r).marks))
      return !0;
  } return !1;
} function fu(n) { return n.spec.defining || n.spec.definingForContent; } function hu(n, e, t, r) {
  if (!r.size)
    return n.deleteRange(e, t); let i = n.doc.resolve(e); let s = n.doc.resolve(t); if (vl(i, s, r))
    return n.step(new J(e, t, r)); let o = Il(i, n.doc.resolve(t)); o[o.length - 1] == 0 && o.pop(); let l = -(i.depth + 1); o.unshift(l); for (let f = i.depth, h = i.pos - 1; f > 0; f--, h--) {
    let p = i.node(f).type.spec; if (p.defining || p.definingAsContext || p.isolating)
      break; o.includes(f) ? l = f : i.before(f) == h && o.splice(1, 0, -f);
  } let a = o.indexOf(l); let c = []; let u = r.openStart; for (let f = r.content, h = 0; ;h++) {
    let p = f.firstChild; if (c.push(p), h == r.openStart)
      break; f = p.content;
  } for (let f = u - 1; f >= 0; f--) {
    let h = c[f]; let p = fu(h.type); if (p && !h.sameMarkup(i.node(Math.abs(l) - 1)))
      u = f; else if (p || !h.type.isTextblock)
      break;
  } for (let f = r.openStart; f >= 0; f--) {
    let h = (f + u + 1) % (r.openStart + 1); let p = c[h]; if (p) {
      for (let m = 0; m < o.length; m++) {
        let g = o[(m + a) % o.length]; let y = !0; g < 0 && (y = !1, g = -g); let S = i.node(g - 1); let O = i.index(g - 1); if (S.canReplaceWith(O, O, p.type, p.marks))
          return n.replace(i.before(g), y ? s.after(g) : t, new x(Dl(r.content, 0, r.openStart, h), h, r.openEnd));
      }
    }
  } let d = n.steps.length; for (let f = o.length - 1; f >= 0 && (n.replace(e, t, r), !(n.steps.length > d)); f--) { let h = o[f]; h < 0 || (e = i.before(h), t = s.after(h)); }
} function Dl(n, e, t, r, i) { if (e < t) { let s = n.firstChild; n = n.replaceChild(0, s.copy(Dl(s.content, e + 1, t, r, s))); } if (e > r) { let s = i.contentMatchAt(0); let o = s.fillBefore(n).append(n); n = o.append(s.matchFragment(o).fillBefore(b.empty, !0)); } return n; } function pu(n, e, t, r) { if (!r.isInline && e == t && n.doc.resolve(e).parent.content.size) { let i = cu(n.doc, e, r.type); i != null && (e = t = i); }n.replaceRange(e, t, new x(b.from(r), 0, 0)); } function mu(n, e, t) {
  let r = n.doc.resolve(e); let i = n.doc.resolve(t); let s = Il(r, i); for (let o = 0; o < s.length; o++) {
    let l = s[o]; let a = o == s.length - 1; if (a && l == 0 || r.node(l).type.contentMatch.validEnd)
      return n.delete(r.start(l), i.end(l)); if (l > 0 && (a || r.node(l - 1).canReplace(r.index(l - 1), i.indexAfter(l - 1))))
      return n.delete(r.before(l), i.after(l));
  } for (let o = 1; o <= r.depth && o <= i.depth; o++) {
    if (e - r.start(o) == r.depth - o && t > r.end(o) && i.end(o) - t != i.depth - o && r.start(o - 1) == i.start(o - 1) && r.node(o - 1).canReplace(r.index(o - 1), i.index(o - 1)))
      return n.delete(r.before(o), t);
  } n.delete(e, t);
} function Il(n, e) {
  let t = []; let r = Math.min(n.depth, e.depth); for (let i = r; i >= 0; i--) {
    let s = n.start(i); if (s < n.pos - (n.depth - i) || e.end(i) > e.pos + (e.depth - i) || n.node(i).type.spec.isolating || e.node(i).type.spec.isolating)
      break; (s == e.start(i) || i == n.depth && i == e.depth && n.parent.inlineContent && e.parent.inlineContent && i && e.start(i - 1) == s - 1) && t.push(i);
  } return t;
} class Nt extends se {
  constructor(e, t, r) { super(), this.pos = e, this.attr = t, this.value = r; }apply(e) {
    let t = e.nodeAt(this.pos); if (!t)
      return U.fail("No node at attribute step's position"); let r = Object.create(null); for (let s in t.attrs)r[s] = t.attrs[s]; r[this.attr] = this.value; let i = t.type.create(r, null, t.marks); return U.fromReplace(e, this.pos, this.pos + 1, new x(b.from(i), 0, t.isLeaf ? 0 : 1));
  }

  getMap() { return he.empty; }invert(e) { return new Nt(this.pos, this.attr, e.nodeAt(this.pos).attrs[this.attr]); }map(e) { let t = e.mapResult(this.pos, 1); return t.deletedAfter ? null : new Nt(t.pos, this.attr, this.value); }toJSON() { return { stepType: "attr", pos: this.pos, attr: this.attr, value: this.value }; } static fromJSON(e, t) {
    if (typeof t.pos != "number" || typeof t.attr != "string")
      throw new RangeError("Invalid input for AttrStep.fromJSON"); return new Nt(t.pos, t.attr, t.value);
  }
}se.jsonID("attr", Nt); class sn extends se {
  constructor(e, t) { super(), this.attr = e, this.value = t; }apply(e) { let t = Object.create(null); for (let i in e.attrs)t[i] = e.attrs[i]; t[this.attr] = this.value; let r = e.type.create(t, e.content, e.marks); return U.ok(r); }getMap() { return he.empty; }invert(e) { return new sn(this.attr, e.attrs[this.attr]); }map(e) { return this; }toJSON() { return { stepType: "docAttr", attr: this.attr, value: this.value }; } static fromJSON(e, t) {
    if (typeof t.attr != "string")
      throw new RangeError("Invalid input for DocAttrStep.fromJSON"); return new sn(t.attr, t.value);
  }
}se.jsonID("docAttr", sn); let It = class extends Error {}; It = function n(e) { let t = Error.call(this, e); return t.__proto__ = n.prototype, t; }; It.prototype = Object.create(Error.prototype); It.prototype.constructor = It; It.prototype.name = "TransformError"; class Rl {
  constructor(e) { this.doc = e, this.steps = [], this.docs = [], this.mapping = new rn(); } get before() { return this.docs.length ? this.docs[0] : this.doc; }step(e) {
    let t = this.maybeStep(e); if (t.failed)
      throw new It(t.failed); return this;
  }

  maybeStep(e) { let t = e.apply(this.doc); return t.failed || this.addStep(e, t.doc), t; } get docChanged() { return this.steps.length > 0; }addStep(e, t) { this.docs.push(this.doc), this.steps.push(e), this.mapping.appendMap(e.getMap()), this.doc = t; }replace(e, t = e, r = x.empty) { let i = Tr(this.doc, e, t, r); return i && this.step(i), this; }replaceWith(e, t, r) { return this.replace(e, t, new x(b.from(r), 0, 0)); }delete(e, t) { return this.replace(e, t, x.empty); }insert(e, t) { return this.replaceWith(e, e, t); }replaceRange(e, t, r) { return hu(this, e, t, r), this; }replaceRangeWith(e, t, r) { return pu(this, e, t, r), this; }deleteRange(e, t) { return mu(this, e, t), this; }lift(e, t) { return Zc(this, e, t), this; }join(e, t = 1) { return au(this, e, t), this; }wrap(e, t) { return nu(this, e, t), this; }setBlockType(e, t = e, r, i = null) { return ru(this, e, t, r, i), this; }setNodeMarkup(e, t, r = null, i) { return su(this, e, t, r, i), this; }setNodeAttribute(e, t, r) { return this.step(new Nt(e, t, r)), this; }setDocAttribute(e, t) { return this.step(new sn(e, t)), this; }addNodeMark(e, t) { return this.step(new _e(e, t)), this; }removeNodeMark(e, t) {
    let r = this.doc.nodeAt(e); if (!r)
      throw new RangeError(`No node at position ${e}`); if (t instanceof z) {
      t.isInSet(r.marks) && this.step(new yt(e, t));
    }
    else { let i = r.marks; let s; let o = []; for (;s = t.isInSet(i);)o.push(new yt(e, s)), i = s.removeFromSet(i); for (let l = o.length - 1; l >= 0; l--) this.step(o[l]); } return this;
  }

  split(e, t = 1, r) { return ou(this, e, t, r), this; }addMark(e, t, r) { return Yc(this, e, t, r), this; }removeMark(e, t, r) { return Xc(this, e, t, r), this; }clearIncompatible(e, t, r) { return Ui(this, e, t, r), this; }
} const Ur = Object.create(null); class I {
  constructor(e, t, r) { this.$anchor = e, this.$head = t, this.ranges = r || [new gu(e.min(t), e.max(t))]; } get anchor() { return this.$anchor.pos; } get head() { return this.$head.pos; } get from() { return this.$from.pos; } get to() { return this.$to.pos; } get $from() { return this.ranges[0].$from; } get $to() { return this.ranges[0].$to; } get empty() {
    let e = this.ranges; for (let t = 0; t < e.length; t++) {
      if (e[t].$from.pos != e[t].$to.pos)
        return !1;
    } return !0;
  }

  content() { return this.$from.doc.slice(this.from, this.to, !0); }replace(e, t = x.empty) { let r = t.content.lastChild; let i = null; for (let l = 0; l < t.openEnd; l++)i = r, r = r.lastChild; let s = e.steps.length; let o = this.ranges; for (let l = 0; l < o.length; l++) { let { $from: a, $to: c } = o[l]; let u = e.mapping.slice(s); e.replaceRange(u.map(a.pos), u.map(c.pos), l ? x.empty : t), l == 0 && Us(e, s, (r ? r.isInline : i && i.isTextblock) ? -1 : 1); } }replaceWith(e, t) { let r = e.steps.length; let i = this.ranges; for (let s = 0; s < i.length; s++) { let { $from: o, $to: l } = i[s]; let a = e.mapping.slice(r); let c = a.map(o.pos); let u = a.map(l.pos); s ? e.deleteRange(c, u) : (e.replaceRangeWith(c, u, t), Us(e, r, t.isInline ? -1 : 1)); } } static findFrom(e, t, r = !1) {
    let i = e.parent.inlineContent ? new A(e) : Tt(e.node(0), e.parent, e.pos, e.index(), t, r); if (i)
      return i; for (let s = e.depth - 1; s >= 0; s--) {
      let o = t < 0 ? Tt(e.node(0), e.node(s), e.before(s + 1), e.index(s), t, r) : Tt(e.node(0), e.node(s), e.after(s + 1), e.index(s) + 1, t, r); if (o)
        return o;
    } return null;
  }

  static near(e, t = 1) { return this.findFrom(e, t) || this.findFrom(e, -t) || new pe(e.node(0)); } static atStart(e) { return Tt(e, e, 0, 0, 1) || new pe(e); } static atEnd(e) { return Tt(e, e, e.content.size, e.childCount, -1) || new pe(e); } static fromJSON(e, t) {
    if (!t || !t.type)
      throw new RangeError("Invalid input for Selection.fromJSON"); let r = Ur[t.type]; if (!r)
      throw new RangeError(`No selection type ${t.type} defined`); return r.fromJSON(e, t);
  }

  static jsonID(e, t) {
    if (e in Ur)
      throw new RangeError(`Duplicate use of selection JSON ID ${e}`); return Ur[e] = t, t.prototype.jsonID = e, t;
  }

  getBookmark() { return A.between(this.$anchor, this.$head).getBookmark(); }
}I.prototype.visible = !0; class gu {constructor(e, t) { this.$from = e, this.$to = t; }} let Ws = !1; function Ks(n) { !Ws && !n.parent.inlineContent && (Ws = !0, console.warn(`TextSelection endpoint not pointing into a node with inline content (${n.parent.type.name})`)); } class A extends I {
  constructor(e, t = e) { Ks(e), Ks(t), super(e, t); } get $cursor() { return this.$anchor.pos == this.$head.pos ? this.$head : null; }map(e, t) {
    let r = e.resolve(t.map(this.head)); if (!r.parent.inlineContent)
      return I.near(r); let i = e.resolve(t.map(this.anchor)); return new A(i.parent.inlineContent ? i : r, r);
  }

  replace(e, t = x.empty) { if (super.replace(e, t), t == x.empty) { let r = this.$from.marksAcross(this.$to); r && e.ensureMarks(r); } }eq(e) { return e instanceof A && e.anchor == this.anchor && e.head == this.head; }getBookmark() { return new Er(this.anchor, this.head); }toJSON() { return { type: "text", anchor: this.anchor, head: this.head }; } static fromJSON(e, t) {
    if (typeof t.anchor != "number" || typeof t.head != "number")
      throw new RangeError("Invalid input for TextSelection.fromJSON"); return new A(e.resolve(t.anchor), e.resolve(t.head));
  }

  static create(e, t, r = t) { let i = e.resolve(t); return new this(i, r == t ? i : e.resolve(r)); } static between(e, t, r) {
    let i = e.pos - t.pos; if ((!r || i) && (r = i >= 0 ? 1 : -1), !t.parent.inlineContent) {
      let s = I.findFrom(t, r, !0) || I.findFrom(t, -r, !0); if (s)
        t = s.$head; else return I.near(t, r);
    } return e.parent.inlineContent || (i == 0 ? e = t : (e = (I.findFrom(e, -r, !0) || I.findFrom(e, r, !0)).$anchor, e.pos < t.pos != i < 0 && (e = t))), new A(e, t);
  }
}I.jsonID("text", A); class Er {constructor(e, t) { this.anchor = e, this.head = t; }map(e) { return new Er(e.map(this.anchor), e.map(this.head)); }resolve(e) { return A.between(e.resolve(this.anchor), e.resolve(this.head)); }} class T extends I {
  constructor(e) { let t = e.nodeAfter; let r = e.node(0).resolve(e.pos + t.nodeSize); super(e, r), this.node = t; }map(e, t) { let { deleted: r, pos: i } = t.mapResult(this.anchor); let s = e.resolve(i); return r ? I.near(s) : new T(s); }content() { return new x(b.from(this.node), 0, 0); }eq(e) { return e instanceof T && e.anchor == this.anchor; }toJSON() { return { type: "node", anchor: this.anchor }; }getBookmark() { return new qi(this.anchor); } static fromJSON(e, t) {
    if (typeof t.anchor != "number")
      throw new RangeError("Invalid input for NodeSelection.fromJSON"); return new T(e.resolve(t.anchor));
  }

  static create(e, t) { return new T(e.resolve(t)); } static isSelectable(e) { return !e.isText && e.type.spec.selectable !== !1; }
}T.prototype.visible = !1; I.jsonID("node", T); class qi {constructor(e) { this.anchor = e; }map(e) { let { deleted: t, pos: r } = e.mapResult(this.anchor); return t ? new Er(r, r) : new qi(r); }resolve(e) { let t = e.resolve(this.anchor); let r = t.nodeAfter; return r && T.isSelectable(r) ? new T(t) : I.near(t); }} class pe extends I {
  constructor(e) { super(e.resolve(0), e.resolve(e.content.size)); }replace(e, t = x.empty) {
    if (t == x.empty) { e.delete(0, e.doc.content.size); let r = I.atStart(e.doc); r.eq(e.selection) || e.setSelection(r); }
    else {
      super.replace(e, t);
    }
  }

  toJSON() { return { type: "all" }; } static fromJSON(e) { return new pe(e); }map(e) { return new pe(e); }eq(e) { return e instanceof pe; }getBookmark() { return yu; }
}I.jsonID("all", pe); const yu = { map() { return this; }, resolve(n) { return new pe(n); } }; function Tt(n, e, t, r, i, s = !1) {
  if (e.inlineContent)
    return A.create(n, t); for (let o = r - (i > 0 ? 0 : 1); i > 0 ? o < e.childCount : o >= 0; o += i) {
    let l = e.child(o); if (l.isAtom) {
      if (!s && T.isSelectable(l))
        return T.create(n, t - (i < 0 ? l.nodeSize : 0));
    }
    else {
      let a = Tt(n, l, t + i, i < 0 ? l.childCount : 0, i, s); if (a)
        return a;
    }t += l.nodeSize * i;
  } return null;
} function Us(n, e, t) {
  let r = n.steps.length - 1; if (r < e)
    return; let i = n.steps[r]; if (!(i instanceof J || i instanceof G))
    return; let s = n.mapping.maps[r]; let o; s.forEach((l, a, c, u) => { o == null && (o = u); }), n.setSelection(I.near(n.doc.resolve(o), t));
} const _s = 1; const Sn = 2; const qs = 4; class bu extends Rl {
  constructor(e) { super(e.doc), this.curSelectionFor = 0, this.updated = 0, this.meta = Object.create(null), this.time = Date.now(), this.curSelection = e.selection, this.storedMarks = e.storedMarks; } get selection() { return this.curSelectionFor < this.steps.length && (this.curSelection = this.curSelection.map(this.doc, this.mapping.slice(this.curSelectionFor)), this.curSelectionFor = this.steps.length), this.curSelection; }setSelection(e) {
    if (e.$from.doc != this.doc)
      throw new RangeError("Selection passed to setSelection must point at the current document"); return this.curSelection = e, this.curSelectionFor = this.steps.length, this.updated = (this.updated | _s) & ~Sn, this.storedMarks = null, this;
  }

  get selectionSet() { return (this.updated & _s) > 0; }setStoredMarks(e) { return this.storedMarks = e, this.updated |= Sn, this; }ensureMarks(e) { return z.sameSet(this.storedMarks || this.selection.$from.marks(), e) || this.setStoredMarks(e), this; }addStoredMark(e) { return this.ensureMarks(e.addToSet(this.storedMarks || this.selection.$head.marks())); }removeStoredMark(e) { return this.ensureMarks(e.removeFromSet(this.storedMarks || this.selection.$head.marks())); } get storedMarksSet() { return (this.updated & Sn) > 0; }addStep(e, t) { super.addStep(e, t), this.updated = this.updated & ~Sn, this.storedMarks = null; }setTime(e) { return this.time = e, this; }replaceSelection(e) { return this.selection.replace(this, e), this; }replaceSelectionWith(e, t = !0) { let r = this.selection; return t && (e = e.mark(this.storedMarks || (r.empty ? r.$from.marks() : r.$from.marksAcross(r.$to) || z.none))), r.replaceWith(this, e), this; }deleteSelection() { return this.selection.replace(this), this; }insertText(e, t, r) {
    let i = this.doc.type.schema; if (t == null)
      return e ? this.replaceSelectionWith(i.text(e), !0) : this.deleteSelection(); { if (r == null && (r = t), r = r ?? t, !e)
      return this.deleteRange(t, r); let s = this.storedMarks; if (!s) { let o = this.doc.resolve(t); s = r == t ? o.marks() : o.marksAcross(this.doc.resolve(r)); } return this.replaceRangeWith(t, r, i.text(e, s)), this.selection.empty || this.setSelection(I.near(this.selection.$to)), this; }
  }

  setMeta(e, t) { return this.meta[typeof e == "string" ? e : e.key] = t, this; }getMeta(e) { return this.meta[typeof e == "string" ? e : e.key]; } get isGeneric() { for (let e in this.meta) return !1; return !0; }scrollIntoView() { return this.updated |= qs, this; } get scrolledIntoView() { return (this.updated & qs) > 0; }
} function Js(n, e) { return !e || !n ? n : n.bind(e); } class Wt {constructor(e, t, r) { this.name = e, this.init = Js(t.init, r), this.apply = Js(t.apply, r); }} const ku = [new Wt("doc", { init(n) { return n.doc || n.schema.topNodeType.createAndFill(); }, apply(n) { return n.doc; } }), new Wt("selection", { init(n, e) { return n.selection || I.atStart(e.doc); }, apply(n) { return n.selection; } }), new Wt("storedMarks", { init(n) { return n.storedMarks || null; }, apply(n, e, t, r) { return r.selection.$cursor ? n.storedMarks : null; } }), new Wt("scrollToSelection", { init() { return 0; }, apply(n, e) { return n.scrolledIntoView ? e + 1 : e; } })]; class _r {
  constructor(e, t) {
    this.schema = e, this.plugins = [], this.pluginsByKey = Object.create(null), this.fields = ku.slice(), t && t.forEach((r) => {
      if (this.pluginsByKey[r.key])
        throw new RangeError(`Adding different instances of a keyed plugin (${r.key})`); this.plugins.push(r), this.pluginsByKey[r.key] = r, r.spec.state && this.fields.push(new Wt(r.key, r.spec.state, r));
    });
  }
} class At {
  constructor(e) { this.config = e; } get schema() { return this.config.schema; } get plugins() { return this.config.plugins; }apply(e) { return this.applyTransaction(e).state; }filterTransaction(e, t = -1) {
    for (let r = 0; r < this.config.plugins.length; r++) {
      if (r != t) {
        let i = this.config.plugins[r]; if (i.spec.filterTransaction && !i.spec.filterTransaction.call(i, e, this))
          return !1;
      }
    } return !0;
  }

  applyTransaction(e) {
    if (!this.filterTransaction(e))
      return { state: this, transactions: [] }; let t = [e]; let r = this.applyInner(e); let i = null; for (;;) {
      let s = !1; for (let o = 0; o < this.config.plugins.length; o++) { let l = this.config.plugins[o]; if (l.spec.appendTransaction) { let a = i ? i[o].n : 0; let c = i ? i[o].state : this; let u = a < t.length && l.spec.appendTransaction.call(l, a ? t.slice(a) : t, c, r); if (u && r.filterTransaction(u, o)) { if (u.setMeta("appendedTransaction", e), !i) { i = []; for (let d = 0; d < this.config.plugins.length; d++)i.push(d < o ? { state: r, n: t.length } : { state: this, n: 0 }); }t.push(u), r = r.applyInner(u), s = !0; }i && (i[o] = { state: r, n: t.length }); } } if (!s)
        return { state: r, transactions: t };
    }
  }

  applyInner(e) {
    if (!e.before.eq(this.doc))
      throw new RangeError("Applying a mismatched transaction"); let t = new At(this.config); let r = this.config.fields; for (let i = 0; i < r.length; i++) { let s = r[i]; t[s.name] = s.apply(e, this[s.name], this, t); } return t;
  }

  get tr() { return new bu(this); } static create(e) { let t = new _r(e.doc ? e.doc.type.schema : e.schema, e.plugins); let r = new At(t); for (let i = 0; i < t.fields.length; i++)r[t.fields[i].name] = t.fields[i].init(e, r); return r; }reconfigure(e) { let t = new _r(this.schema, e.plugins); let r = t.fields; let i = new At(t); for (let s = 0; s < r.length; s++) { let o = r[s].name; i[o] = this.hasOwnProperty(o) ? this[o] : r[s].init(e, i); } return i; }toJSON(e) {
    let t = { doc: this.doc.toJSON(), selection: this.selection.toJSON() }; if (this.storedMarks && (t.storedMarks = this.storedMarks.map(r => r.toJSON())), e && typeof e == "object") {
      for (let r in e) {
        if (r == "doc" || r == "selection")
          throw new RangeError("The JSON fields `doc` and `selection` are reserved"); let i = e[r]; let s = i.spec.state; s && s.toJSON && (t[r] = s.toJSON.call(i, this[i.key]));
      }
    } return t;
  }

  static fromJSON(e, t, r) {
    if (!t)
      throw new RangeError("Invalid input for EditorState.fromJSON"); if (!e.schema)
      throw new RangeError("Required config field 'schema' missing"); let i = new _r(e.schema, e.plugins); let s = new At(i); return i.fields.forEach((o) => {
      if (o.name == "doc") {
        s.doc = Je.fromJSON(e.schema, t.doc);
      }
      else if (o.name == "selection") {
        s.selection = I.fromJSON(s.doc, t.selection);
      }
      else if (o.name == "storedMarks") {
        t.storedMarks && (s.storedMarks = t.storedMarks.map(e.schema.markFromJSON));
      }
      else {
        if (r) {
          for (let l in r) { let a = r[l]; let c = a.spec.state; if (a.key == o.name && c && c.fromJSON && Object.prototype.hasOwnProperty.call(t, l)) { s[o.name] = c.fromJSON.call(a, e, t[l], s); return; } }
        }s[o.name] = o.init(e, s);
      }
    }), s;
  }
} function Pl(n, e, t) { for (let r in n) { let i = n[r]; typeof i === "function" ? i = i.bind(e) : r == "handleDOMEvents" && (i = Pl(i, e, {})), t[r] = i; } return t; } class W {constructor(e) { this.spec = e, this.props = {}, e.props && Pl(e.props, this, this.props), this.key = e.key ? e.key.key : Ll("plugin"); }getState(e) { return e[this.key]; }} const qr = Object.create(null); function Ll(n) { return n in qr ? `${n}$${++qr[n]}` : (qr[n] = 0, `${n}$`); } class Q {constructor(e = "key") { this.key = Ll(e); }get(e) { return e.config.pluginsByKey[this.key]; }getState(e) { return e[this.key]; }} function ee(n) {
  for (let e = 0; ;e++) {
    if (n = n.previousSibling, !n)
      return e;
  }
} function Rt(n) { let e = n.assignedSlot || n.parentNode; return e && e.nodeType == 11 ? e.host : e; } let xi = null; function Re(n, e, t) { let r = xi || (xi = document.createRange()); return r.setEnd(n, t ?? n.nodeValue.length), r.setStart(n, e || 0), r; } function xu() { xi = null; } function bt(n, e, t, r) { return t && (Gs(n, e, t, r, -1) || Gs(n, e, t, r, 1)); } const Su = /^(img|br|input|textarea|hr)$/i; function Gs(n, e, t, r, i) {
  for (var s; ;) {
    if (n == t && e == r)
      return !0; if (e == (i < 0 ? 0 : be(n))) {
      let o = n.parentNode; if (!o || o.nodeType != 1 || pn(n) || Su.test(n.nodeName) || n.contentEditable == "false")
        return !1; e = ee(n) + (i < 0 ? 0 : 1), n = o;
    }
    else if (n.nodeType == 1) {
      let o = n.childNodes[e + (i < 0 ? -1 : 0)]; if (o.nodeType == 1 && o.contentEditable == "false") {
        if (!((s = o.pmViewDesc) === null || s === void 0) && s.ignoreForSelection)
          e += i; else return !1;
      }
      else {
        n = o, e = i < 0 ? be(n) : 0;
      }
    }
    else {
      return !1;
    }
  }
} function be(n) { return n.nodeType == 3 ? n.nodeValue.length : n.childNodes.length; } function Cu(n, e) {
  for (;;) {
    if (n.nodeType == 3 && e)
      return n; if (n.nodeType == 1 && e > 0) {
      if (n.contentEditable == "false")
        return null; n = n.childNodes[e - 1], e = be(n);
    }
    else if (n.parentNode && !pn(n)) {
      e = ee(n), n = n.parentNode;
    }
    else {
      return null;
    }
  }
} function Mu(n, e) {
  for (;;) {
    if (n.nodeType == 3 && e < n.nodeValue.length)
      return n; if (n.nodeType == 1 && e < n.childNodes.length) {
      if (n.contentEditable == "false")
        return null; n = n.childNodes[e], e = 0;
    }
    else if (n.parentNode && !pn(n)) {
      e = ee(n) + 1, n = n.parentNode;
    }
    else {
      return null;
    }
  }
} function wu(n, e, t) {
  for (let r = e == 0, i = e == be(n); r || i;) {
    if (n == t)
      return !0; let s = ee(n); if (n = n.parentNode, !n)
      return !1; r = r && s == 0, i = i && s == be(n);
  }
} function pn(n) { let e; for (let t = n; t && !(e = t.pmViewDesc); t = t.parentNode);return e && e.node && e.node.isBlock && (e.dom == n || e.contentDOM == n); } function Or(n) { return n.focusNode && bt(n.focusNode, n.focusOffset, n.anchorNode, n.anchorOffset); } function st(n, e) { let t = document.createEvent("Event"); return t.initEvent("keydown", !0, !0), t.keyCode = n, t.key = t.code = e, t; } function Tu(n) { let e = n.activeElement; for (;e && e.shadowRoot;)e = e.shadowRoot.activeElement; return e; } function Eu(n, e, t) {
  if (n.caretPositionFromPoint) {
    try {
      let r = n.caretPositionFromPoint(e, t); if (r)
        return { node: r.offsetNode, offset: Math.min(be(r.offsetNode), r.offset) };
    }
    catch {}
  } if (n.caretRangeFromPoint) {
    let r = n.caretRangeFromPoint(e, t); if (r)
      return { node: r.startContainer, offset: Math.min(be(r.startContainer), r.startOffset) };
  }
} const Oe = typeof navigator < "u" ? navigator : null; const Ys = typeof document < "u" ? document : null; const nt = Oe && Oe.userAgent || ""; const Si = /Edge\/(\d+)/.exec(nt); const Bl = /MSIE \d/.exec(nt); const Ci = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(nt); const fe = !!(Bl || Ci || Si); const Ye = Bl ? document.documentMode : Ci ? +Ci[1] : Si ? +Si[1] : 0; const ke = !fe && /gecko\/(\d+)/i.test(nt); ke && +(/Firefox\/(\d+)/.exec(nt) || [0, 0])[1]; const Mi = !fe && /Chrome\/(\d+)/.exec(nt); const ie = !!Mi; const zl = Mi ? +Mi[1] : 0; const le = !fe && !!Oe && /Apple Computer/.test(Oe.vendor); const Pt = le && (/Mobile\/\w+/.test(nt) || !!Oe && Oe.maxTouchPoints > 2); const ye = Pt || (Oe ? /Mac/.test(Oe.platform) : !1); const Ou = Oe ? /Win/.test(Oe.platform) : !1; const Pe = /Android \d/.test(nt); const mn = !!Ys && "webkitFontSmoothing" in Ys.documentElement.style; const Au = mn ? +(/\bAppleWebKit\/(\d+)/.exec(navigator.userAgent) || [0, 0])[1] : 0; function vu(n) { let e = n.defaultView && n.defaultView.visualViewport; return e ? { left: 0, right: e.width, top: 0, bottom: e.height } : { left: 0, right: n.documentElement.clientWidth, top: 0, bottom: n.documentElement.clientHeight }; } function ve(n, e) { return typeof n == "number" ? n : n[e]; } function Nu(n) { let e = n.getBoundingClientRect(); let t = e.width / n.offsetWidth || 1; let r = e.height / n.offsetHeight || 1; return { left: e.left, right: e.left + n.clientWidth * t, top: e.top, bottom: e.top + n.clientHeight * r }; } function Xs(n, e, t) {
  let r = n.someProp("scrollThreshold") || 0; let i = n.someProp("scrollMargin") || 5; let s = n.dom.ownerDocument; for (let o = t || n.dom; o;) {
    if (o.nodeType != 1) { o = Rt(o); continue; } let l = o; let a = l == s.body; let c = a ? vu(s) : Nu(l); let u = 0; let d = 0; if (e.top < c.top + ve(r, "top") ? d = -(c.top - e.top + ve(i, "top")) : e.bottom > c.bottom - ve(r, "bottom") && (d = e.bottom - e.top > c.bottom - c.top ? e.top + ve(i, "top") - c.top : e.bottom - c.bottom + ve(i, "bottom")), e.left < c.left + ve(r, "left") ? u = -(c.left - e.left + ve(i, "left")) : e.right > c.right - ve(r, "right") && (u = e.right - c.right + ve(i, "right")), u || d) {
      if (a) {
        s.defaultView.scrollBy(u, d);
      }
      else { let h = l.scrollLeft; let p = l.scrollTop; d && (l.scrollTop += d), u && (l.scrollLeft += u); let m = l.scrollLeft - h; let g = l.scrollTop - p; e = { left: e.left - m, top: e.top - g, right: e.right - m, bottom: e.bottom - g }; }
    } let f = a ? "fixed" : getComputedStyle(o).position; if (/^(fixed|sticky)$/.test(f))
      break; o = f == "absolute" ? o.offsetParent : Rt(o);
  }
} function Du(n) {
  let e = n.dom.getBoundingClientRect(); let t = Math.max(0, e.top); let r; let i; for (let s = (e.left + e.right) / 2, o = t + 1; o < Math.min(innerHeight, e.bottom); o += 5) {
    let l = n.root.elementFromPoint(s, o); if (!l || l == n.dom || !n.dom.contains(l))
      continue; let a = l.getBoundingClientRect(); if (a.top >= t - 20) { r = l, i = a.top; break; }
  } return { refDOM: r, refTop: i, stack: Fl(n.dom) };
} function Fl(n) { let e = []; let t = n.ownerDocument; for (let r = n; r && (e.push({ dom: r, top: r.scrollTop, left: r.scrollLeft }), n != t); r = Rt(r));return e; } function Iu({ refDOM: n, refTop: e, stack: t }) { let r = n ? n.getBoundingClientRect().top : 0; Hl(t, r == 0 ? 0 : r - e); } function Hl(n, e) { for (let t = 0; t < n.length; t++) { let { dom: r, top: i, left: s } = n[t]; r.scrollTop != i + e && (r.scrollTop = i + e), r.scrollLeft != s && (r.scrollLeft = s); } } let Mt = null; function Ru(n) {
  if (n.setActive)
    return n.setActive(); if (Mt)
    return n.focus(Mt); let e = Fl(n); n.focus(Mt == null ? { get preventScroll() { return Mt = { preventScroll: !0 }, !0; } } : void 0), Mt || (Mt = !1, Hl(e, 0));
} function $l(n, e) {
  let t; let r = 2e8; let i; let s = 0; let o = e.top; let l = e.top; let a; let c; for (let u = n.firstChild, d = 0; u; u = u.nextSibling, d++) {
    let f; if (u.nodeType == 1)
      f = u.getClientRects(); else if (u.nodeType == 3)
      f = Re(u).getClientRects(); else continue; for (let h = 0; h < f.length; h++) {
      let p = f[h]; if (p.top <= o && p.bottom >= l) { o = Math.max(p.bottom, o), l = Math.min(p.top, l); let m = p.left > e.left ? p.left - e.left : p.right < e.left ? e.left - p.right : 0; if (m < r) { t = u, r = m, i = m && t.nodeType == 3 ? { left: p.right < e.left ? p.right : p.left, top: e.top } : e, u.nodeType == 1 && m && (s = d + (e.left >= (p.left + p.right) / 2 ? 1 : 0)); continue; } }
      else {
        p.top > e.top && !a && p.left <= e.left && p.right >= e.left && (a = u, c = { left: Math.max(p.left, Math.min(p.right, e.left)), top: p.top });
      }!t && (e.left >= p.right && e.top >= p.top || e.left >= p.left && e.top >= p.bottom) && (s = d + 1);
    }
  } return !t && a && (t = a, i = c, r = 0), t && t.nodeType == 3 ? Pu(t, i) : !t || r && t.nodeType == 1 ? { node: n, offset: s } : $l(t, i);
} function Pu(n, e) {
  let t = n.nodeValue.length; let r = document.createRange(); for (let i = 0; i < t; i++) {
    r.setEnd(n, i + 1), r.setStart(n, i); let s = He(r, 1); if (s.top != s.bottom && Ji(e, s))
      return { node: n, offset: i + (e.left >= (s.left + s.right) / 2 ? 1 : 0) };
  } return { node: n, offset: 0 };
} function Ji(n, e) { return n.left >= e.left - 1 && n.left <= e.right + 1 && n.top >= e.top - 1 && n.top <= e.bottom + 1; } function Lu(n, e) { let t = n.parentNode; return t && /^li$/i.test(t.nodeName) && e.left < n.getBoundingClientRect().left ? t : n; } function Bu(n, e, t) { let { node: r, offset: i } = $l(e, t); let s = -1; if (r.nodeType == 1 && !r.firstChild) { let o = r.getBoundingClientRect(); s = o.left != o.right && t.left > (o.left + o.right) / 2 ? 1 : -1; } return n.docView.posFromDOM(r, i, s); } function zu(n, e, t, r) {
  let i = -1; for (let s = e, o = !1; s != n.dom;) {
    let l = n.docView.nearestDesc(s, !0); let a; if (!l)
      return null; if (l.dom.nodeType == 1 && (l.node.isBlock && l.parent || !l.contentDOM) && ((a = l.dom.getBoundingClientRect()).width || a.height) && (l.node.isBlock && l.parent && !/^T(R|BODY|HEAD|FOOT)$/.test(l.dom.nodeName) && (!o && a.left > r.left || a.top > r.top ? i = l.posBefore : (!o && a.right < r.left || a.bottom < r.top) && (i = l.posAfter), o = !0), !l.contentDOM && i < 0 && !l.node.isText))
      return (l.node.isBlock ? r.top < (a.top + a.bottom) / 2 : r.left < (a.left + a.right) / 2) ? l.posBefore : l.posAfter; s = l.dom.parentNode;
  } return i > -1 ? i : n.docView.posFromDOM(e, t, -1);
} function Vl(n, e, t) {
  let r = n.childNodes.length; if (r && t.top < t.bottom) {
    for (let i = Math.max(0, Math.min(r - 1, Math.floor(r * (e.top - t.top) / (t.bottom - t.top)) - 2)), s = i; ;) {
      let o = n.childNodes[s]; if (o.nodeType == 1) {
        let l = o.getClientRects(); for (let a = 0; a < l.length; a++) {
          let c = l[a]; if (Ji(e, c))
            return Vl(o, e, c);
        }
      } if ((s = (s + 1) % r) == i)
        break;
    }
  } return n;
} function Fu(n, e) {
  let t = n.dom.ownerDocument; let r; let i = 0; let s = Eu(t, e.left, e.top); s && ({ node: r, offset: i } = s); let o = (n.root.elementFromPoint ? n.root : t).elementFromPoint(e.left, e.top); let l; if (!o || !n.dom.contains(o.nodeType != 1 ? o.parentNode : o)) {
    let c = n.dom.getBoundingClientRect(); if (!Ji(e, c) || (o = Vl(n.dom, e, c), !o))
      return null;
  } if (le) {
    for (let c = o; r && c; c = Rt(c))c.draggable && (r = void 0);
  } if (o = Lu(o, e), r) { if (ke && r.nodeType == 1 && (i = Math.min(i, r.childNodes.length), i < r.childNodes.length)) { let u = r.childNodes[i]; let d; u.nodeName == "IMG" && (d = u.getBoundingClientRect()).right <= e.left && d.bottom > e.top && i++; } let c; mn && i && r.nodeType == 1 && (c = r.childNodes[i - 1]).nodeType == 1 && c.contentEditable == "false" && c.getBoundingClientRect().top >= e.top && i--, r == n.dom && i == r.childNodes.length - 1 && r.lastChild.nodeType == 1 && e.top > r.lastChild.getBoundingClientRect().bottom ? l = n.state.doc.content.size : (i == 0 || r.nodeType != 1 || r.childNodes[i - 1].nodeName != "BR") && (l = zu(n, r, i, e)); }l == null && (l = Bu(n, o, e)); let a = n.docView.nearestDesc(o, !0); return { pos: l, inside: a ? a.posAtStart - a.border : -1 };
} function Qs(n) { return n.top < n.bottom || n.left < n.right; } function He(n, e) {
  let t = n.getClientRects(); if (t.length) {
    let r = t[e < 0 ? 0 : t.length - 1]; if (Qs(r))
      return r;
  } return Array.prototype.find.call(t, Qs) || n.getBoundingClientRect();
} const Hu = /[\u0590-\u05F4\u0600-\u06FF\u0700-\u08AC]/; function jl(n, e, t) {
  let { node: r, offset: i, atom: s } = n.docView.domFromPos(e, t < 0 ? -1 : 1); let o = mn || ke; if (r.nodeType == 3) {
    if (o && (Hu.test(r.nodeValue) || (t < 0 ? !i : i == r.nodeValue.length))) {
      let a = He(Re(r, i, i), t); if (ke && i && /\s/.test(r.nodeValue[i - 1]) && i < r.nodeValue.length) {
        let c = He(Re(r, i - 1, i - 1), -1); if (c.top == a.top) {
          let u = He(Re(r, i, i + 1), -1); if (u.top != a.top)
            return Ht(u, u.left < c.left);
        }
      } return a;
    }
    else { let a = i; let c = i; let u = t < 0 ? 1 : -1; return t < 0 && !i ? (c++, u = -1) : t >= 0 && i == r.nodeValue.length ? (a--, u = 1) : t < 0 ? a-- : c++, Ht(He(Re(r, a, c), u), u < 0); }
  } if (!n.state.doc.resolve(e - (s || 0)).parent.inlineContent) {
    if (s == null && i && (t < 0 || i == be(r))) {
      let a = r.childNodes[i - 1]; if (a.nodeType == 1)
        return Jr(a.getBoundingClientRect(), !1);
    } if (s == null && i < be(r)) {
      let a = r.childNodes[i]; if (a.nodeType == 1)
        return Jr(a.getBoundingClientRect(), !0);
    } return Jr(r.getBoundingClientRect(), t >= 0);
  } if (s == null && i && (t < 0 || i == be(r))) {
    let a = r.childNodes[i - 1]; let c = a.nodeType == 3 ? Re(a, be(a) - (o ? 0 : 1)) : a.nodeType == 1 && (a.nodeName != "BR" || !a.nextSibling) ? a : null; if (c)
      return Ht(He(c, 1), !1);
  } if (s == null && i < be(r)) {
    let a = r.childNodes[i]; for (;a.pmViewDesc && a.pmViewDesc.ignoreForCoords;)a = a.nextSibling; let c = a ? a.nodeType == 3 ? Re(a, 0, o ? 0 : 1) : a.nodeType == 1 ? a : null : null; if (c)
      return Ht(He(c, -1), !0);
  } return Ht(He(r.nodeType == 3 ? Re(r) : r, -t), t >= 0);
} function Ht(n, e) {
  if (n.width == 0)
    return n; let t = e ? n.left : n.right; return { top: n.top, bottom: n.bottom, left: t, right: t };
} function Jr(n, e) {
  if (n.height == 0)
    return n; let t = e ? n.top : n.bottom; return { top: t, bottom: t, left: n.left, right: n.right };
} function Wl(n, e, t) {
  let r = n.state; let i = n.root.activeElement; r != e && n.updateState(e), i != n.dom && n.focus(); try { return t(); }
  finally { r != e && n.updateState(r), i != n.dom && i && i.focus(); }
} function $u(n, e, t) {
  let r = e.selection; let i = t == "up" ? r.$from : r.$to; return Wl(n, e, () => {
    let { node: s } = n.docView.domFromPos(i.pos, t == "up" ? -1 : 1); for (;;) {
      let l = n.docView.nearestDesc(s, !0); if (!l)
        break; if (l.node.isBlock) { s = l.contentDOM || l.dom; break; }s = l.dom.parentNode;
    } let o = jl(n, i.pos, 1); for (let l = s.firstChild; l; l = l.nextSibling) {
      let a; if (l.nodeType == 1)
        a = l.getClientRects(); else if (l.nodeType == 3)
        a = Re(l, 0, l.nodeValue.length).getClientRects(); else continue; for (let c = 0; c < a.length; c++) {
        let u = a[c]; if (u.bottom > u.top + 1 && (t == "up" ? o.top - u.top > (u.bottom - o.top) * 2 : u.bottom - o.bottom > (o.bottom - u.top) * 2))
          return !1;
      }
    } return !0;
  });
} const Vu = /[\u0590-\u08AC]/; function ju(n, e, t) {
  let { $head: r } = e.selection; if (!r.parent.isTextblock)
    return !1; let i = r.parentOffset; let s = !i; let o = i == r.parent.content.size; let l = n.domSelection(); return l
    ? !Vu.test(r.parent.textContent) || !l.modify
        ? t == "left" || t == "backward" ? s : o
        : Wl(n, e, () => {
            let { focusNode: a, focusOffset: c, anchorNode: u, anchorOffset: d } = n.domSelectionRange(); let f = l.caretBidiLevel; l.modify("move", t, "character"); let h = r.depth ? n.docView.domAfterPos(r.before()) : n.dom; let { focusNode: p, focusOffset: m } = n.domSelectionRange(); let g = p && !h.contains(p.nodeType == 1 ? p : p.parentNode) || a == p && c == m; try { l.collapse(u, d), a && (a != u || c != d) && l.extend && l.extend(a, c); }
            catch {} return f != null && (l.caretBidiLevel = f), g;
          })
    : r.pos == r.start() || r.pos == r.end();
} let Zs = null; let eo = null; let to = !1; function Wu(n, e, t) { return Zs == e && eo == t ? to : (Zs = e, eo = t, to = t == "up" || t == "down" ? $u(n, e, t) : ju(n, e, t)); } const xe = 0; const no = 1; const lt = 2; const Ae = 3; class gn {
  constructor(e, t, r, i) { this.parent = e, this.children = t, this.dom = r, this.contentDOM = i, this.dirty = xe, r.pmViewDesc = this; }matchesWidget(e) { return !1; }matchesMark(e) { return !1; }matchesNode(e, t, r) { return !1; }matchesHack(e) { return !1; }parseRule() { return null; }stopEvent(e) { return !1; } get size() { let e = 0; for (let t = 0; t < this.children.length; t++)e += this.children[t].size; return e; } get border() { return 0; }destroy() { this.parent = void 0, this.dom.pmViewDesc == this && (this.dom.pmViewDesc = void 0); for (let e = 0; e < this.children.length; e++) this.children[e].destroy(); }posBeforeChild(e) {
    for (let t = 0, r = this.posAtStart; ;t++) {
      let i = this.children[t]; if (i == e)
        return r; r += i.size;
    }
  }

  get posBefore() { return this.parent.posBeforeChild(this); } get posAtStart() { return this.parent ? this.parent.posBeforeChild(this) + this.border : 0; } get posAfter() { return this.posBefore + this.size; } get posAtEnd() { return this.posAtStart + this.size - 2 * this.border; }localPosFromDOM(e, t, r) {
    if (this.contentDOM && this.contentDOM.contains(e.nodeType == 1 ? e : e.parentNode)) {
      if (r < 0) {
        let s, o; if (e == this.contentDOM) {
          s = e.childNodes[t - 1];
        }
        else { for (;e.parentNode != this.contentDOM;)e = e.parentNode; s = e.previousSibling; } for (;s && !((o = s.pmViewDesc) && o.parent == this);)s = s.previousSibling; return s ? this.posBeforeChild(o) + o.size : this.posAtStart;
      }
      else {
        let s, o; if (e == this.contentDOM) {
          s = e.childNodes[t];
        }
        else { for (;e.parentNode != this.contentDOM;)e = e.parentNode; s = e.nextSibling; } for (;s && !((o = s.pmViewDesc) && o.parent == this);)s = s.nextSibling; return s ? this.posBeforeChild(o) : this.posAtEnd;
      }
    } let i; if (e == this.dom && this.contentDOM) {
      i = t > ee(this.contentDOM);
    }
    else if (this.contentDOM && this.contentDOM != this.dom && this.dom.contains(this.contentDOM)) {
      i = e.compareDocumentPosition(this.contentDOM) & 2;
    }
    else if (this.dom.firstChild) {
      if (t == 0) {
        for (let s = e; ;s = s.parentNode) {
          if (s == this.dom) { i = !1; break; } if (s.previousSibling)
            break;
        }
      } if (i == null && t == e.childNodes.length) {
        for (let s = e; ;s = s.parentNode) {
          if (s == this.dom) { i = !0; break; } if (s.nextSibling)
            break;
        }
      }
    } return i ?? r > 0 ? this.posAtEnd : this.posAtStart;
  }

  nearestDesc(e, t = !1) {
    for (let r = !0, i = e; i; i = i.parentNode) {
      let s = this.getDesc(i); let o; if (s && (!t || s.node)) {
        if (r && (o = s.nodeDOM) && !(o.nodeType == 1 ? o.contains(e.nodeType == 1 ? e : e.parentNode) : o == e))
          r = !1; else return s;
      }
    }
  }

  getDesc(e) {
    let t = e.pmViewDesc; for (let r = t; r; r = r.parent) {
      if (r == this)
        return t;
    }
  }

  posFromDOM(e, t, r) {
    for (let i = e; i; i = i.parentNode) {
      let s = this.getDesc(i); if (s)
        return s.localPosFromDOM(e, t, r);
    } return -1;
  }

  descAt(e) {
    for (let t = 0, r = 0; t < this.children.length; t++) {
      let i = this.children[t]; let s = r + i.size; if (r == e && s != r) {
        for (;!i.border && i.children.length;) {
          for (let o = 0; o < i.children.length; o++) { let l = i.children[o]; if (l.size) { i = l; break; } }
        } return i;
      } if (e < s)
        return i.descAt(e - r - i.border); r = s;
    }
  }

  domFromPos(e, t) {
    if (!this.contentDOM)
      return { node: this.dom, offset: 0, atom: e + 1 }; let r = 0; let i = 0; for (let s = 0; r < this.children.length; r++) { let o = this.children[r]; let l = s + o.size; if (l > e || o instanceof Ul) { i = e - s; break; }s = l; } if (i)
      return this.children[r].domFromPos(i - this.children[r].border, t); for (let s; r && !(s = this.children[r - 1]).size && s instanceof Kl && s.side >= 0; r--);if (t <= 0) { let s; let o = !0; for (;s = r ? this.children[r - 1] : null, !(!s || s.dom.parentNode == this.contentDOM); r--, o = !1);return s && t && o && !s.border && !s.domAtom ? s.domFromPos(s.size, t) : { node: this.contentDOM, offset: s ? ee(s.dom) + 1 : 0 }; }
    else { let s; let o = !0; for (;s = r < this.children.length ? this.children[r] : null, !(!s || s.dom.parentNode == this.contentDOM); r++, o = !1);return s && o && !s.border && !s.domAtom ? s.domFromPos(0, t) : { node: this.contentDOM, offset: s ? ee(s.dom) : this.contentDOM.childNodes.length }; }
  }

  parseRange(e, t, r = 0) {
    if (this.children.length == 0)
      return { node: this.contentDOM, from: e, to: t, fromOffset: 0, toOffset: this.contentDOM.childNodes.length }; let i = -1; let s = -1; for (let o = r, l = 0; ;l++) {
      let a = this.children[l]; let c = o + a.size; if (i == -1 && e <= c) {
        let u = o + a.border; if (e >= u && t <= c - a.border && a.node && a.contentDOM && this.contentDOM.contains(a.contentDOM))
          return a.parseRange(e, t, u); e = o; for (let d = l; d > 0; d--) { let f = this.children[d - 1]; if (f.size && f.dom.parentNode == this.contentDOM && !f.emptyChildAt(1)) { i = ee(f.dom) + 1; break; }e -= f.size; }i == -1 && (i = 0);
      } if (i > -1 && (c > t || l == this.children.length - 1)) { t = c; for (let u = l + 1; u < this.children.length; u++) { let d = this.children[u]; if (d.size && d.dom.parentNode == this.contentDOM && !d.emptyChildAt(-1)) { s = ee(d.dom); break; }t += d.size; }s == -1 && (s = this.contentDOM.childNodes.length); break; }o = c;
    } return { node: this.contentDOM, from: e, to: t, fromOffset: i, toOffset: s };
  }

  emptyChildAt(e) {
    if (this.border || !this.contentDOM || !this.children.length)
      return !1; let t = this.children[e < 0 ? 0 : this.children.length - 1]; return t.size == 0 || t.emptyChildAt(e);
  }

  domAfterPos(e) {
    let { node: t, offset: r } = this.domFromPos(e, 0); if (t.nodeType != 1 || r == t.childNodes.length)
      throw new RangeError(`No node after pos ${e}`); return t.childNodes[r];
  }

  setSelection(e, t, r, i = !1) {
    let s = Math.min(e, t); let o = Math.max(e, t); for (let h = 0, p = 0; h < this.children.length; h++) {
      let m = this.children[h]; let g = p + m.size; if (s > p && o < g)
        return m.setSelection(e - p - m.border, t - p - m.border, r, i); p = g;
    } let l = this.domFromPos(e, e ? -1 : 1); let a = t == e ? l : this.domFromPos(t, t ? -1 : 1); let c = r.root.getSelection(); let u = r.domSelectionRange(); let d = !1; if ((ke || le) && e == t) {
      let { node: h, offset: p } = l; if (h.nodeType == 3) {
        if (d = !!(p && h.nodeValue[p - 1] == `
`), d && p == h.nodeValue.length) {
          for (let m = h, g; m; m = m.parentNode) {
            if (g = m.nextSibling) { g.nodeName == "BR" && (l = a = { node: g.parentNode, offset: ee(g) + 1 }); break; } let y = m.pmViewDesc; if (y && y.node && y.node.isBlock)
              break;
          }
        }
      }
      else { let m = h.childNodes[p - 1]; d = m && (m.nodeName == "BR" || m.contentEditable == "false"); }
    } if (ke && u.focusNode && u.focusNode != a.node && u.focusNode.nodeType == 1) { let h = u.focusNode.childNodes[u.focusOffset]; h && h.contentEditable == "false" && (i = !0); } if (!(i || d && le) && bt(l.node, l.offset, u.anchorNode, u.anchorOffset) && bt(a.node, a.offset, u.focusNode, u.focusOffset))
      return; let f = !1; if ((c.extend || e == t) && !(d && ke)) {
      c.collapse(l.node, l.offset); try { e != t && c.extend(a.node, a.offset), f = !0; }
      catch {}
    } if (!f) { if (e > t) { let p = l; l = a, a = p; } let h = document.createRange(); h.setEnd(a.node, a.offset), h.setStart(l.node, l.offset), c.removeAllRanges(), c.addRange(h); }
  }

  ignoreMutation(e) { return !this.contentDOM && e.type != "selection"; } get contentLost() { return this.contentDOM && this.contentDOM != this.dom && !this.dom.contains(this.contentDOM); }markDirty(e, t) {
    for (let r = 0, i = 0; i < this.children.length; i++) {
      let s = this.children[i]; let o = r + s.size; if (r == o ? e <= o && t >= r : e < o && t > r) {
        let l = r + s.border; let a = o - s.border; if (e >= l && t <= a) { this.dirty = e == r || t == o ? lt : no, e == l && t == a && (s.contentLost || s.dom.parentNode != this.contentDOM) ? s.dirty = Ae : s.markDirty(e - l, t - l); return; }
        else {
          s.dirty = s.dom == s.contentDOM && s.dom.parentNode == this.contentDOM && !s.children.length ? lt : Ae;
        }
      }r = o;
    } this.dirty = lt;
  }

  markParentsDirty() { let e = 1; for (let t = this.parent; t; t = t.parent, e++) { let r = e == 1 ? lt : no; t.dirty < r && (t.dirty = r); } } get domAtom() { return !1; } get ignoreForCoords() { return !1; } get ignoreForSelection() { return !1; }isText(e) { return !1; }
} class Kl extends gn {
  constructor(e, t, r, i) {
    let s; let o = t.type.toDOM; if (typeof o == "function" && (o = o(r, () => {
      if (!s)
        return i; if (s.parent)
        return s.parent.posBeforeChild(s);
    })), !t.type.spec.raw) { if (o.nodeType != 1) { let l = document.createElement("span"); l.appendChild(o), o = l; }o.contentEditable = "false", o.classList.add("ProseMirror-widget"); } super(e, [], o, null), this.widget = t, this.widget = t, s = this;
  }

  matchesWidget(e) { return this.dirty == xe && e.type.eq(this.widget.type); }parseRule() { return { ignore: !0 }; }stopEvent(e) { let t = this.widget.spec.stopEvent; return t ? t(e) : !1; }ignoreMutation(e) { return e.type != "selection" || this.widget.spec.ignoreSelection; }destroy() { this.widget.type.destroy(this.dom), super.destroy(); } get domAtom() { return !0; } get ignoreForSelection() { return !!this.widget.type.spec.relaxedSide; } get side() { return this.widget.type.side; }
} class Ku extends gn {constructor(e, t, r, i) { super(e, [], t, null), this.textDOM = r, this.text = i; } get size() { return this.text.length; }localPosFromDOM(e, t) { return e != this.textDOM ? this.posAtStart + (t ? this.size : 0) : this.posAtStart + t; }domFromPos(e) { return { node: this.textDOM, offset: e }; }ignoreMutation(e) { return e.type === "characterData" && e.target.nodeValue == e.oldValue; }} class kt extends gn {constructor(e, t, r, i, s) { super(e, [], r, i), this.mark = t, this.spec = s; } static create(e, t, r, i) { let s = i.nodeViews[t.type.name]; let o = s && s(t, i, r); return (!o || !o.dom) && (o = St.renderSpec(document, t.type.spec.toDOM(t, r), null, t.attrs)), new kt(e, t, o.dom, o.contentDOM || o.dom, o); }parseRule() { return this.dirty & Ae || this.mark.type.spec.reparseInView ? null : { mark: this.mark.type.name, attrs: this.mark.attrs, contentElement: this.contentDOM }; }matchesMark(e) { return this.dirty != Ae && this.mark.eq(e); }markDirty(e, t) { if (super.markDirty(e, t), this.dirty != xe) { let r = this.parent; for (;!r.node;)r = r.parent; r.dirty < this.dirty && (r.dirty = this.dirty), this.dirty = xe; } }slice(e, t, r) { let i = kt.create(this.parent, this.mark, !0, r); let s = this.children; let o = this.size; t < o && (s = Ti(s, t, o, r)), e > 0 && (s = Ti(s, 0, e, r)); for (let l = 0; l < s.length; l++)s[l].parent = i; return i.children = s, i; }ignoreMutation(e) { return this.spec.ignoreMutation ? this.spec.ignoreMutation(e) : super.ignoreMutation(e); }destroy() { this.spec.destroy && this.spec.destroy(), super.destroy(); }} class Xe extends gn {
  constructor(e, t, r, i, s, o, l, a, c) { super(e, [], s, o), this.node = t, this.outerDeco = r, this.innerDeco = i, this.nodeDOM = l; } static create(e, t, r, i, s, o) {
    let l = s.nodeViews[t.type.name]; let a; let c = l && l(t, s, () => {
      if (!a)
        return o; if (a.parent)
        return a.parent.posBeforeChild(a);
    }, r, i); let u = c && c.dom; let d = c && c.contentDOM; if (t.isText) {
      if (!u)
        u = document.createTextNode(t.text); else if (u.nodeType != 3)
        throw new RangeError("Text must be rendered as a DOM text node");
    }
    else {
      u || ({ dom: u, contentDOM: d } = St.renderSpec(document, t.type.spec.toDOM(t), null, t.attrs));
    }!d && !t.isText && u.nodeName != "BR" && (u.hasAttribute("contenteditable") || (u.contentEditable = "false"), t.type.spec.draggable && (u.draggable = !0)); let f = u; return u = Jl(u, r, t), c ? a = new Uu(e, t, r, i, u, d || null, f, c, s, o + 1) : t.isText ? new Ar(e, t, r, i, u, f, s) : new Xe(e, t, r, i, u, d || null, f, s, o + 1);
  }

  parseRule() {
    if (this.node.type.spec.reparseInView)
      return null; let e = { node: this.node.type.name, attrs: this.node.attrs }; if (this.node.type.whitespace == "pre" && (e.preserveWhitespace = "full"), !this.contentDOM) {
      e.getContent = () => this.node.content;
    }
    else if (!this.contentLost) {
      e.contentElement = this.contentDOM;
    }
    else { for (let t = this.children.length - 1; t >= 0; t--) { let r = this.children[t]; if (this.dom.contains(r.dom.parentNode)) { e.contentElement = r.dom.parentNode; break; } }e.contentElement || (e.getContent = () => b.empty); } return e;
  }

  matchesNode(e, t, r) { return this.dirty == xe && e.eq(this.node) && jn(t, this.outerDeco) && r.eq(this.innerDeco); } get size() { return this.node.nodeSize; } get border() { return this.node.isLeaf ? 0 : 1; }updateChildren(e, t) { let r = this.node.inlineContent; let i = t; let s = e.composing ? this.localCompositionInfo(e, t) : null; let o = s && s.pos > -1 ? s : null; let l = s && s.pos < 0; let a = new qu(this, o && o.node, e); Yu(this.node, this.innerDeco, (c, u, d) => { c.spec.marks ? a.syncToMarks(c.spec.marks, r, e) : c.type.side >= 0 && !d && a.syncToMarks(u == this.node.childCount ? z.none : this.node.child(u).marks, r, e), a.placeWidget(c, e, i); }, (c, u, d, f) => { a.syncToMarks(c.marks, r, e); let h; a.findNodeMatch(c, u, d, f) || l && e.state.selection.from > i && e.state.selection.to < i + c.nodeSize && (h = a.findIndexWithChild(s.node)) > -1 && a.updateNodeAt(c, u, d, h, e) || a.updateNextNode(c, u, d, e, f, i) || a.addNode(c, u, d, e, i), i += c.nodeSize; }), a.syncToMarks([], r, e), this.node.isTextblock && a.addTextblockHacks(), a.destroyRest(), (a.changed || this.dirty == lt) && (o && this.protectLocalComposition(e, o), _l(this.contentDOM, this.children, e), Pt && Xu(this.dom)); }localCompositionInfo(e, t) {
    let { from: r, to: i } = e.state.selection; if (!(e.state.selection instanceof A) || r < t || i > t + this.node.content.size)
      return null; let s = e.input.compositionNode; if (!s || !this.dom.contains(s.parentNode))
      return null; if (this.node.inlineContent) { let o = s.nodeValue; let l = Qu(this.node.content, o, r - t, i - t); return l < 0 ? null : { node: s, pos: l, text: o }; }
    else {
      return { node: s, pos: -1, text: "" };
    }
  }

  protectLocalComposition(e, { node: t, pos: r, text: i }) {
    if (this.getDesc(t))
      return; let s = t; for (;s.parentNode != this.contentDOM; s = s.parentNode) { for (;s.previousSibling;)s.parentNode.removeChild(s.previousSibling); for (;s.nextSibling;)s.parentNode.removeChild(s.nextSibling); s.pmViewDesc && (s.pmViewDesc = void 0); } let o = new Ku(this, s, t, i); e.input.compositionNodes.push(o), this.children = Ti(this.children, r, r + i.length, e, o);
  }

  update(e, t, r, i) { return this.dirty == Ae || !e.sameMarkup(this.node) ? !1 : (this.updateInner(e, t, r, i), !0); }updateInner(e, t, r, i) { this.updateOuterDeco(t), this.node = e, this.innerDeco = r, this.contentDOM && this.updateChildren(i, this.posAtStart), this.dirty = xe; }updateOuterDeco(e) {
    if (jn(e, this.outerDeco))
      return; let t = this.nodeDOM.nodeType != 1; let r = this.dom; this.dom = ql(this.dom, this.nodeDOM, wi(this.outerDeco, this.node, t), wi(e, this.node, t)), this.dom != r && (r.pmViewDesc = void 0, this.dom.pmViewDesc = this), this.outerDeco = e;
  }

  selectNode() { this.nodeDOM.nodeType == 1 && (this.nodeDOM.classList.add("ProseMirror-selectednode"), (this.contentDOM || !this.node.type.spec.draggable) && (this.nodeDOM.draggable = !0)); }deselectNode() { this.nodeDOM.nodeType == 1 && (this.nodeDOM.classList.remove("ProseMirror-selectednode"), (this.contentDOM || !this.node.type.spec.draggable) && this.nodeDOM.removeAttribute("draggable")); } get domAtom() { return this.node.isAtom; }
} function ro(n, e, t, r, i) { Jl(r, e, n); let s = new Xe(void 0, n, e, t, r, r, r, i, 0); return s.contentDOM && s.updateChildren(i, 0), s; } class Ar extends Xe {
  constructor(e, t, r, i, s, o, l) { super(e, t, r, i, s, null, o, l, 0); }parseRule() { let e = this.nodeDOM.parentNode; for (;e && e != this.dom && !e.pmIsDeco;)e = e.parentNode; return { skip: e || !0 }; }update(e, t, r, i) { return this.dirty == Ae || this.dirty != xe && !this.inParent() || !e.sameMarkup(this.node) ? !1 : (this.updateOuterDeco(t), (this.dirty != xe || e.text != this.node.text) && e.text != this.nodeDOM.nodeValue && (this.nodeDOM.nodeValue = e.text, i.trackWrites == this.nodeDOM && (i.trackWrites = null)), this.node = e, this.dirty = xe, !0); }inParent() {
    let e = this.parent.contentDOM; for (let t = this.nodeDOM; t; t = t.parentNode) {
      if (t == e)
        return !0;
    } return !1;
  }

  domFromPos(e) { return { node: this.nodeDOM, offset: e }; }localPosFromDOM(e, t, r) { return e == this.nodeDOM ? this.posAtStart + Math.min(t, this.node.text.length) : super.localPosFromDOM(e, t, r); }ignoreMutation(e) { return e.type != "characterData" && e.type != "selection"; }slice(e, t, r) { let i = this.node.cut(e, t); let s = document.createTextNode(i.text); return new Ar(this.parent, i, this.outerDeco, this.innerDeco, s, s, r); }markDirty(e, t) { super.markDirty(e, t), this.dom != this.nodeDOM && (e == 0 || t == this.nodeDOM.nodeValue.length) && (this.dirty = Ae); } get domAtom() { return !1; }isText(e) { return this.node.text == e; }
} class Ul extends gn {parseRule() { return { ignore: !0 }; }matchesHack(e) { return this.dirty == xe && this.dom.nodeName == e; } get domAtom() { return !0; } get ignoreForCoords() { return this.dom.nodeName == "IMG"; }} class Uu extends Xe {
  constructor(e, t, r, i, s, o, l, a, c, u) { super(e, t, r, i, s, o, l, c, u), this.spec = a; }update(e, t, r, i) {
    if (this.dirty == Ae)
      return !1; if (this.spec.update && (this.node.type == e.type || this.spec.multiType)) { let s = this.spec.update(e, t, r); return s && this.updateInner(e, t, r, i), s; }
    else {
      return !this.contentDOM && !e.isLeaf ? !1 : super.update(e, t, r, i);
    }
  }

  selectNode() { this.spec.selectNode ? this.spec.selectNode() : super.selectNode(); }deselectNode() { this.spec.deselectNode ? this.spec.deselectNode() : super.deselectNode(); }setSelection(e, t, r, i) { this.spec.setSelection ? this.spec.setSelection(e, t, r.root) : super.setSelection(e, t, r, i); }destroy() { this.spec.destroy && this.spec.destroy(), super.destroy(); }stopEvent(e) { return this.spec.stopEvent ? this.spec.stopEvent(e) : !1; }ignoreMutation(e) { return this.spec.ignoreMutation ? this.spec.ignoreMutation(e) : super.ignoreMutation(e); }
} function _l(n, e, t) {
  let r = n.firstChild; let i = !1; for (let s = 0; s < e.length; s++) {
    let o = e[s]; let l = o.dom; if (l.parentNode == n) { for (;l != r;)r = io(r), i = !0; r = r.nextSibling; }
    else {
      i = !0, n.insertBefore(l, r);
    } if (o instanceof kt) { let a = r ? r.previousSibling : n.lastChild; _l(o.contentDOM, o.children, t), r = a ? a.nextSibling : n.firstChild; }
  } for (;r;)r = io(r), i = !0; i && t.trackWrites == n && (t.trackWrites = null);
} function qt(n) { n && (this.nodeName = n); } qt.prototype = Object.create(null); const at = [new qt()]; function wi(n, e, t) {
  if (n.length == 0)
    return at; let r = t ? at[0] : new qt(); let i = [r]; for (let s = 0; s < n.length; s++) { let o = n[s].type.attrs; if (o) { o.nodeName && i.push(r = new qt(o.nodeName)); for (let l in o) { let a = o[l]; a != null && (t && i.length == 1 && i.push(r = new qt(e.isInline ? "span" : "div")), l == "class" ? r.class = (r.class ? `${r.class} ` : "") + a : l == "style" ? r.style = (r.style ? `${r.style};` : "") + a : l != "nodeName" && (r[l] = a)); } } } return i;
} function ql(n, e, t, r) {
  if (t == at && r == at)
    return e; let i = e; for (let s = 0; s < r.length; s++) { let o = r[s]; let l = t[s]; if (s) { let a; l && l.nodeName == o.nodeName && i != n && (a = i.parentNode) && a.nodeName.toLowerCase() == o.nodeName || (a = document.createElement(o.nodeName), a.pmIsDeco = !0, a.appendChild(i), l = at[0]), i = a; }_u(i, l || at[0], o); } return i;
} function _u(n, e, t) { for (let r in e)r != "class" && r != "style" && r != "nodeName" && !(r in t) && n.removeAttribute(r); for (let r in t)r != "class" && r != "style" && r != "nodeName" && t[r] != e[r] && n.setAttribute(r, t[r]); if (e.class != t.class) { let r = e.class ? e.class.split(" ").filter(Boolean) : []; let i = t.class ? t.class.split(" ").filter(Boolean) : []; for (let s = 0; s < r.length; s++)!i.includes(r[s]) && n.classList.remove(r[s]); for (let s = 0; s < i.length; s++)!r.includes(i[s]) && n.classList.add(i[s]); n.classList.length == 0 && n.removeAttribute("class"); } if (e.style != t.style) { if (e.style) { let r = /\s*([\w\-\xA1-\uFFFF]+)\s*:(?:"(?:\\.|[^"])*"|'(?:\\.|[^'])*'|\(.*?\)|[^;])*/g; let i; for (;i = r.exec(e.style);)n.style.removeProperty(i[1]); }t.style && (n.style.cssText += t.style); } } function Jl(n, e, t) { return ql(n, n, at, wi(e, t, n.nodeType != 1)); } function jn(n, e) {
  if (n.length != e.length)
    return !1; for (let t = 0; t < n.length; t++) {
    if (!n[t].type.eq(e[t].type))
      return !1;
  } return !0;
} function io(n) { let e = n.nextSibling; return n.parentNode.removeChild(n), e; } class qu {
  constructor(e, t, r) { this.lock = t, this.view = r, this.index = 0, this.stack = [], this.changed = !1, this.top = e, this.preMatch = Ju(e.node.content, e); }destroyBetween(e, t) { if (e != t) { for (let r = e; r < t; r++) this.top.children[r].destroy(); this.top.children.splice(e, t - e), this.changed = !0; } }destroyRest() { this.destroyBetween(this.index, this.top.children.length); }syncToMarks(e, t, r) {
    let i = 0; let s = this.stack.length >> 1; let o = Math.min(s, e.length); for (;i < o && (i == s - 1 ? this.top : this.stack[i + 1 << 1]).matchesMark(e[i]) && e[i].type.spec.spanning !== !1;)i++; for (;i < s;) this.destroyRest(), this.top.dirty = xe, this.index = this.stack.pop(), this.top = this.stack.pop(), s--; for (;s < e.length;) {
      this.stack.push(this.top, this.index + 1); let l = -1; for (let a = this.index; a < Math.min(this.index + 3, this.top.children.length); a++) { let c = this.top.children[a]; if (c.matchesMark(e[s]) && !this.isLocked(c.dom)) { l = a; break; } } if (l > -1) {
        l > this.index && (this.changed = !0, this.destroyBetween(this.index, l)), this.top = this.top.children[this.index];
      }
      else { let a = kt.create(this.top, e[s], t, r); this.top.children.splice(this.index, 0, a), this.top = a, this.changed = !0; } this.index = 0, s++;
    }
  }

  findNodeMatch(e, t, r, i) {
    let s = -1; let o; if (i >= this.preMatch.index && (o = this.preMatch.matches[i - this.preMatch.index]).parent == this.top && o.matchesNode(e, t, r)) {
      s = this.top.children.indexOf(o, this.index);
    }
    else {
      for (let l = this.index, a = Math.min(this.top.children.length, l + 5); l < a; l++) { let c = this.top.children[l]; if (c.matchesNode(e, t, r) && !this.preMatch.matched.has(c)) { s = l; break; } }
    } return s < 0 ? !1 : (this.destroyBetween(this.index, s), this.index++, !0);
  }

  updateNodeAt(e, t, r, i, s) { let o = this.top.children[i]; return o.dirty == Ae && o.dom == o.contentDOM && (o.dirty = lt), o.update(e, t, r, s) ? (this.destroyBetween(this.index, i), this.index++, !0) : !1; }findIndexWithChild(e) {
    for (;;) {
      let t = e.parentNode; if (!t)
        return -1; if (t == this.top.contentDOM) {
        let r = e.pmViewDesc; if (r) {
          for (let i = this.index; i < this.top.children.length; i++) {
            if (this.top.children[i] == r)
              return i;
          }
        } return -1;
      }e = t;
    }
  }

  updateNextNode(e, t, r, i, s, o) {
    for (let l = this.index; l < this.top.children.length; l++) {
      let a = this.top.children[l]; if (a instanceof Xe) {
        let c = this.preMatch.matched.get(a); if (c != null && c != s)
          return !1; let u = a.dom; let d; let f = this.isLocked(u) && !(e.isText && a.node && a.node.isText && a.nodeDOM.nodeValue == e.text && a.dirty != Ae && jn(t, a.outerDeco)); if (!f && a.update(e, t, r, i))
          return this.destroyBetween(this.index, l), a.dom != u && (this.changed = !0), this.index++, !0; if (!f && (d = this.recreateWrapper(a, e, t, r, i, o)))
          return this.destroyBetween(this.index, l), this.top.children[this.index] = d, d.contentDOM && (d.dirty = lt, d.updateChildren(i, o + 1), d.dirty = xe), this.changed = !0, this.index++, !0; break;
      }
    } return !1;
  }

  recreateWrapper(e, t, r, i, s, o) {
    if (e.dirty || t.isAtom || !e.children.length || !e.node.content.eq(t.content) || !jn(r, e.outerDeco) || !i.eq(e.innerDeco))
      return null; let l = Xe.create(this.top, t, r, i, s, o); if (l.contentDOM) { l.children = e.children, e.children = []; for (let a of l.children)a.parent = l; } return e.destroy(), l;
  }

  addNode(e, t, r, i, s) { let o = Xe.create(this.top, e, t, r, i, s); o.contentDOM && o.updateChildren(i, s + 1), this.top.children.splice(this.index++, 0, o), this.changed = !0; }placeWidget(e, t, r) {
    let i = this.index < this.top.children.length ? this.top.children[this.index] : null; if (i && i.matchesWidget(e) && (e == i.widget || !i.widget.type.toDOM.parentNode)) {
      this.index++;
    }
    else { let s = new Kl(this.top, e, t, r); this.top.children.splice(this.index++, 0, s), this.changed = !0; }
  }

  addTextblockHacks() { let e = this.top.children[this.index - 1]; let t = this.top; for (;e instanceof kt;)t = e, e = t.children[t.children.length - 1]; (!e || !(e instanceof Ar) || /\n$/.test(e.node.text) || this.view.requiresGeckoHackNode && /\s$/.test(e.node.text)) && ((le || ie) && e && e.dom.contentEditable == "false" && this.addHackNode("IMG", t), this.addHackNode("BR", this.top)); }addHackNode(e, t) {
    if (t == this.top && this.index < t.children.length && t.children[this.index].matchesHack(e)) {
      this.index++;
    }
    else { let r = document.createElement(e); e == "IMG" && (r.className = "ProseMirror-separator", r.alt = ""), e == "BR" && (r.className = "ProseMirror-trailingBreak"); let i = new Ul(this.top, [], r, null); t != this.top ? t.children.push(i) : t.children.splice(this.index++, 0, i), this.changed = !0; }
  }

  isLocked(e) { return this.lock && (e == this.lock || e.nodeType == 1 && e.contains(this.lock.parentNode)); }
} function Ju(n, e) {
  let t = e; let r = t.children.length; let i = n.childCount; let s = new Map(); let o = []; e:for (;i > 0;) {
    let l; for (;;) {
      if (r) {
        let c = t.children[r - 1]; if (c instanceof kt) {
          t = c, r = c.children.length;
        }
        else { l = c, r--; break; }
      }
      else {
        if (t == e)
          break e; r = t.parent.children.indexOf(t), t = t.parent;
      }
    } let a = l.node; if (a) {
      if (a != n.child(i - 1))
        break; --i, s.set(l, i), o.push(l);
    }
  } return { index: i, matched: s, matches: o.reverse() };
} function Gu(n, e) { return n.type.side - e.type.side; } function Yu(n, e, t, r) {
  let i = e.locals(n); let s = 0; if (i.length == 0) { for (let c = 0; c < n.childCount; c++) { let u = n.child(c); r(u, i, e.forChild(s, u), c), s += u.nodeSize; } return; } let o = 0; let l = []; let a = null; for (let c = 0; ;) {
    let u, d; for (;o < i.length && i[o].to == s;) { let g = i[o++]; g.widget && (u ? (d || (d = [u])).push(g) : u = g); } if (u) {
      if (d) { d.sort(Gu); for (let g = 0; g < d.length; g++)t(d[g], c, !!a); }
      else {
        t(u, c, !!a);
      }
    } let f, h; if (a)
      h = -1, f = a, a = null; else if (c < n.childCount)
      h = c, f = n.child(c++); else break; for (let g = 0; g < l.length; g++)l[g].to <= s && l.splice(g--, 1); for (;o < i.length && i[o].from <= s && i[o].to > s;)l.push(i[o++]); let p = s + f.nodeSize; if (f.isText) { let g = p; o < i.length && i[o].from < g && (g = i[o].from); for (let y = 0; y < l.length; y++)l[y].to < g && (g = l[y].to); g < p && (a = f.cut(g - s), f = f.cut(0, g - s), p = g, h = -1); }
    else {
      for (;o < i.length && i[o].to < p;)o++;
    } let m = f.isInline && !f.isLeaf ? l.filter(g => !g.inline) : l.slice(); r(f, m, e.forChild(s, f), h), s = p;
  }
} function Xu(n) { if (n.nodeName == "UL" || n.nodeName == "OL") { let e = n.style.cssText; n.style.cssText = `${e}; list-style: square !important`, window.getComputedStyle(n).listStyle, n.style.cssText = e; } } function Qu(n, e, t, r) {
  for (let i = 0, s = 0; i < n.childCount && s <= r;) {
    let o = n.child(i++); let l = s; if (s += o.nodeSize, !o.isText)
      continue; let a = o.text; for (;i < n.childCount;) {
      let c = n.child(i++); if (s += c.nodeSize, !c.isText)
        break; a += c.text;
    } if (s >= t) {
      if (s >= r && a.slice(r - e.length - l, r - l) == e)
        return r - e.length; let c = l < r ? a.lastIndexOf(e, r - l - 1) : -1; if (c >= 0 && c + e.length + l >= t)
        return l + c; if (t == r && a.length >= r + e.length - l && a.slice(r - l, r - l + e.length) == e)
        return r;
    }
  } return -1;
} function Ti(n, e, t, r, i) { let s = []; for (let o = 0, l = 0; o < n.length; o++) { let a = n[o]; let c = l; let u = l += a.size; c >= t || u <= e ? s.push(a) : (c < e && s.push(a.slice(0, e - c, r)), i && (s.push(i), i = void 0), u > t && s.push(a.slice(t - c, a.size, r))); } return s; } function Gi(n, e = null) {
  let t = n.domSelectionRange(); let r = n.state.doc; if (!t.focusNode)
    return null; let i = n.docView.nearestDesc(t.focusNode); let s = i && i.size == 0; let o = n.docView.posFromDOM(t.focusNode, t.focusOffset, 1); if (o < 0)
    return null; let l = r.resolve(o); let a; let c; if (Or(t)) { for (a = o; i && !i.node;)i = i.parent; let d = i.node; if (i && d.isAtom && T.isSelectable(d) && i.parent && !(d.isInline && wu(t.focusNode, t.focusOffset, i.dom))) { let f = i.posBefore; c = new T(o == f ? l : r.resolve(f)); } }
  else {
    if (t instanceof n.dom.ownerDocument.defaultView.Selection && t.rangeCount > 1) {
      let d = o; let f = o; for (let h = 0; h < t.rangeCount; h++) { let p = t.getRangeAt(h); d = Math.min(d, n.docView.posFromDOM(p.startContainer, p.startOffset, 1)), f = Math.max(f, n.docView.posFromDOM(p.endContainer, p.endOffset, -1)); } if (d < 0)
        return null; [a, o] = f == n.state.selection.anchor ? [f, d] : [d, f], l = r.resolve(o);
    }
    else {
      a = n.docView.posFromDOM(t.anchorNode, t.anchorOffset, 1);
    } if (a < 0)
      return null;
  } let u = r.resolve(a); if (!c) { let d = e == "pointer" || n.state.selection.head < l.pos && !s ? 1 : -1; c = Yi(n, u, l, d); } return c;
} function Gl(n) { return n.editable ? n.hasFocus() : Xl(n) && document.activeElement && document.activeElement.contains(n.dom); } function Be(n, e = !1) {
  let t = n.state.selection; if (Yl(n, t), !!Gl(n)) {
    if (!e && n.input.mouseDown && n.input.mouseDown.allowDefault && ie) { let r = n.domSelectionRange(); let i = n.domObserver.currentSelection; if (r.anchorNode && i.anchorNode && bt(r.anchorNode, r.anchorOffset, i.anchorNode, i.anchorOffset)) { n.input.mouseDown.delayedSelectionSync = !0, n.domObserver.setCurSelection(); return; } } if (n.domObserver.disconnectSelection(), n.cursorWrapper) {
      ed(n);
    }
    else { let { anchor: r, head: i } = t; let s; let o; so && !(t instanceof A) && (t.$from.parent.inlineContent || (s = oo(n, t.from)), !t.empty && !t.$from.parent.inlineContent && (o = oo(n, t.to))), n.docView.setSelection(r, i, n, e), so && (s && lo(s), o && lo(o)), t.visible ? n.dom.classList.remove("ProseMirror-hideselection") : (n.dom.classList.add("ProseMirror-hideselection"), "onselectionchange" in document && Zu(n)); }n.domObserver.setCurSelection(), n.domObserver.connectSelection();
  }
} const so = le || ie && zl < 63; function oo(n, e) {
  let { node: t, offset: r } = n.docView.domFromPos(e, 0); let i = r < t.childNodes.length ? t.childNodes[r] : null; let s = r ? t.childNodes[r - 1] : null; if (le && i && i.contentEditable == "false")
    return Gr(i); if ((!i || i.contentEditable == "false") && (!s || s.contentEditable == "false")) {
    if (i)
      return Gr(i); if (s)
      return Gr(s);
  }
} function Gr(n) { return n.contentEditable = "true", le && n.draggable && (n.draggable = !1, n.wasDraggable = !0), n; } function lo(n) { n.contentEditable = "false", n.wasDraggable && (n.draggable = !0, n.wasDraggable = null); } function Zu(n) { let e = n.dom.ownerDocument; e.removeEventListener("selectionchange", n.input.hideSelectionGuard); let t = n.domSelectionRange(); let r = t.anchorNode; let i = t.anchorOffset; e.addEventListener("selectionchange", n.input.hideSelectionGuard = () => { (t.anchorNode != r || t.anchorOffset != i) && (e.removeEventListener("selectionchange", n.input.hideSelectionGuard), setTimeout(() => { (!Gl(n) || n.state.selection.visible) && n.dom.classList.remove("ProseMirror-hideselection"); }, 20)); }); } function ed(n) {
  let e = n.domSelection(); if (!e)
    return; let t = n.cursorWrapper.dom; let r = t.nodeName == "IMG"; r ? e.collapse(t.parentNode, ee(t) + 1) : e.collapse(t, 0), !r && !n.state.selection.visible && fe && Ye <= 11 && (t.disabled = !0, t.disabled = !1);
} function Yl(n, e) {
  if (e instanceof T) { let t = n.docView.descAt(e.from); t != n.lastSelectedViewDesc && (ao(n), t && t.selectNode(), n.lastSelectedViewDesc = t); }
  else {
    ao(n);
  }
} function ao(n) { n.lastSelectedViewDesc && (n.lastSelectedViewDesc.parent && n.lastSelectedViewDesc.deselectNode(), n.lastSelectedViewDesc = void 0); } function Yi(n, e, t, r) { return n.someProp("createSelectionBetween", i => i(n, e, t)) || A.between(e, t, r); } function co(n) { return n.editable && !n.hasFocus() ? !1 : Xl(n); } function Xl(n) {
  let e = n.domSelectionRange(); if (!e.anchorNode)
    return !1; try { return n.dom.contains(e.anchorNode.nodeType == 3 ? e.anchorNode.parentNode : e.anchorNode) && (n.editable || n.dom.contains(e.focusNode.nodeType == 3 ? e.focusNode.parentNode : e.focusNode)); }
  catch { return !1; }
} function td(n) { let e = n.docView.domFromPos(n.state.selection.anchor, 0); let t = n.domSelectionRange(); return bt(e.node, e.offset, t.anchorNode, t.anchorOffset); } function Ei(n, e) { let { $anchor: t, $head: r } = n.selection; let i = e > 0 ? t.max(r) : t.min(r); let s = i.parent.inlineContent ? i.depth ? n.doc.resolve(e > 0 ? i.after() : i.before()) : null : i; return s && I.findFrom(s, e); } function $e(n, e) { return n.dispatch(n.state.tr.setSelection(e).scrollIntoView()), !0; } function uo(n, e, t) {
  let r = n.state.selection; if (r instanceof A) {
    if (t.includes("s")) {
      let { $head: i } = r; let s = i.textOffset ? null : e < 0 ? i.nodeBefore : i.nodeAfter; if (!s || s.isText || !s.isLeaf)
        return !1; let o = n.state.doc.resolve(i.pos + s.nodeSize * (e < 0 ? -1 : 1)); return $e(n, new A(r.$anchor, o));
    }
    else if (r.empty) {
      if (n.endOfTextblock(e > 0 ? "forward" : "backward")) { let i = Ei(n.state, e); return i && i instanceof T ? $e(n, i) : !1; }
      else if (!(ye && t.includes("m"))) {
        let i = r.$head; let s = i.textOffset ? null : e < 0 ? i.nodeBefore : i.nodeAfter; let o; if (!s || s.isText)
          return !1; let l = e < 0 ? i.pos - s.nodeSize : i.pos; return s.isAtom || (o = n.docView.descAt(l)) && !o.contentDOM ? T.isSelectable(s) ? $e(n, new T(e < 0 ? n.state.doc.resolve(i.pos - s.nodeSize) : i)) : mn ? $e(n, new A(n.state.doc.resolve(e < 0 ? l : l + s.nodeSize))) : !1 : !1;
      }
    }
    else {
      return !1;
    }
  }
  else {
    if (r instanceof T && r.node.isInline)
      return $e(n, new A(e > 0 ? r.$to : r.$from)); { let i = Ei(n.state, e); return i ? $e(n, i) : !1; }
  }
} function Wn(n) { return n.nodeType == 3 ? n.nodeValue.length : n.childNodes.length; } function Jt(n, e) { let t = n.pmViewDesc; return t && t.size == 0 && (e < 0 || n.nextSibling || n.nodeName != "BR"); } function wt(n, e) { return e < 0 ? nd(n) : rd(n); } function nd(n) {
  let e = n.domSelectionRange(); let t = e.focusNode; let r = e.focusOffset; if (!t)
    return; let i; let s; let o = !1; for (ke && t.nodeType == 1 && r < Wn(t) && Jt(t.childNodes[r], -1) && (o = !0); ;) {
    if (r > 0) {
      if (t.nodeType != 1)
        break; { let l = t.childNodes[r - 1]; if (Jt(l, -1))
        i = t, s = --r; else if (l.nodeType == 3)
        t = l, r = t.nodeValue.length; else break; }
    }
    else {
      if (Ql(t))
        break; { let l = t.previousSibling; for (;l && Jt(l, -1);)i = t.parentNode, s = ee(l), l = l.previousSibling; if (l) {
        t = l, r = Wn(t);
      }
      else {
        if (t = t.parentNode, t == n.dom)
          break; r = 0;
      } }
    }
  }o ? Oi(n, t, r) : i && Oi(n, i, s);
} function rd(n) {
  let e = n.domSelectionRange(); let t = e.focusNode; let r = e.focusOffset; if (!t)
    return; let i = Wn(t); let s; let o; for (;;) {
    if (r < i) {
      if (t.nodeType != 1)
        break; let l = t.childNodes[r]; if (Jt(l, 1))
        s = t, o = ++r; else break;
    }
    else {
      if (Ql(t))
        break; { let l = t.nextSibling; for (;l && Jt(l, 1);)s = l.parentNode, o = ee(l) + 1, l = l.nextSibling; if (l) {
        t = l, r = 0, i = Wn(t);
      }
      else {
        if (t = t.parentNode, t == n.dom)
          break; r = i = 0;
      } }
    }
  }s && Oi(n, s, o);
} function Ql(n) { let e = n.pmViewDesc; return e && e.node && e.node.isBlock; } function id(n, e) {
  for (;n && e == n.childNodes.length && !pn(n);)e = ee(n) + 1, n = n.parentNode; for (;n && e < n.childNodes.length;) {
    let t = n.childNodes[e]; if (t.nodeType == 3)
      return t; if (t.nodeType == 1 && t.contentEditable == "false")
      break; n = t, e = 0;
  }
} function sd(n, e) {
  for (;n && !e && !pn(n);)e = ee(n), n = n.parentNode; for (;n && e;) {
    let t = n.childNodes[e - 1]; if (t.nodeType == 3)
      return t; if (t.nodeType == 1 && t.contentEditable == "false")
      break; n = t, e = n.childNodes.length;
  }
} function Oi(n, e, t) {
  if (e.nodeType != 3) { let s, o; (o = id(e, t)) ? (e = o, t = 0) : (s = sd(e, t)) && (e = s, t = s.nodeValue.length); } let r = n.domSelection(); if (!r)
    return; if (Or(r)) { let s = document.createRange(); s.setEnd(e, t), s.setStart(e, t), r.removeAllRanges(), r.addRange(s); }
  else {
    r.extend && r.extend(e, t);
  }n.domObserver.setCurSelection(); let { state: i } = n; setTimeout(() => { n.state == i && Be(n); }, 50);
} function fo(n, e) {
  let t = n.state.doc.resolve(e); if (!(ie || Ou) && t.parent.inlineContent) {
    let i = n.coordsAtPos(e); if (e > t.start()) {
      let s = n.coordsAtPos(e - 1); let o = (s.top + s.bottom) / 2; if (o > i.top && o < i.bottom && Math.abs(s.left - i.left) > 1)
        return s.left < i.left ? "ltr" : "rtl";
    } if (e < t.end()) {
      let s = n.coordsAtPos(e + 1); let o = (s.top + s.bottom) / 2; if (o > i.top && o < i.bottom && Math.abs(s.left - i.left) > 1)
        return s.left > i.left ? "ltr" : "rtl";
    }
  } return getComputedStyle(n.dom).direction == "rtl" ? "rtl" : "ltr";
} function ho(n, e, t) {
  let r = n.state.selection; if (r instanceof A && !r.empty || t.includes("s") || ye && t.includes("m"))
    return !1; let { $from: i, $to: s } = r; if (!i.parent.inlineContent || n.endOfTextblock(e < 0 ? "up" : "down")) {
    let o = Ei(n.state, e); if (o && o instanceof T)
      return $e(n, o);
  } if (!i.parent.inlineContent) { let o = e < 0 ? i : s; let l = r instanceof pe ? I.near(o, e) : I.findFrom(o, e); return l ? $e(n, l) : !1; } return !1;
} function po(n, e) {
  if (!(n.state.selection instanceof A))
    return !0; let { $head: t, $anchor: r, empty: i } = n.state.selection; if (!t.sameParent(r))
    return !0; if (!i)
    return !1; if (n.endOfTextblock(e > 0 ? "forward" : "backward"))
    return !0; let s = !t.textOffset && (e < 0 ? t.nodeBefore : t.nodeAfter); if (s && !s.isText) { let o = n.state.tr; return e < 0 ? o.delete(t.pos - s.nodeSize, t.pos) : o.delete(t.pos, t.pos + s.nodeSize), n.dispatch(o), !0; } return !1;
} function mo(n, e, t) { n.domObserver.stop(), e.contentEditable = t, n.domObserver.start(); } function od(n) {
  if (!le || n.state.selection.$head.parentOffset > 0)
    return !1; let { focusNode: e, focusOffset: t } = n.domSelectionRange(); if (e && e.nodeType == 1 && t == 0 && e.firstChild && e.firstChild.contentEditable == "false") { let r = e.firstChild; mo(n, r, "true"), setTimeout(() => mo(n, r, "false"), 20); } return !1;
} function ld(n) { let e = ""; return n.ctrlKey && (e += "c"), n.metaKey && (e += "m"), n.altKey && (e += "a"), n.shiftKey && (e += "s"), e; } function ad(n, e) {
  let t = e.keyCode; let r = ld(e); if (t == 8 || ye && t == 72 && r == "c")
    return po(n, -1) || wt(n, -1); if (t == 46 && !e.shiftKey || ye && t == 68 && r == "c")
    return po(n, 1) || wt(n, 1); if (t == 13 || t == 27)
    return !0; if (t == 37 || ye && t == 66 && r == "c") { let i = t == 37 ? fo(n, n.state.selection.from) == "ltr" ? -1 : 1 : -1; return uo(n, i, r) || wt(n, i); }
  else if (t == 39 || ye && t == 70 && r == "c") { let i = t == 39 ? fo(n, n.state.selection.from) == "ltr" ? 1 : -1 : 1; return uo(n, i, r) || wt(n, i); }
  else {
    if (t == 38 || ye && t == 80 && r == "c")
      return ho(n, -1, r) || wt(n, -1); if (t == 40 || ye && t == 78 && r == "c")
      return od(n) || ho(n, 1, r) || wt(n, 1); if (r == (ye ? "m" : "c") && (t == 66 || t == 73 || t == 89 || t == 90))
      return !0;
  } return !1;
} function Xi(n, e) {
  n.someProp("transformCopied", (h) => { e = h(e, n); }); let t = []; let { content: r, openStart: i, openEnd: s } = e; for (;i > 1 && s > 1 && r.childCount == 1 && r.firstChild.childCount == 1;) { i--, s--; let h = r.firstChild; t.push(h.type.name, h.attrs != h.type.defaultAttrs ? h.attrs : null), r = h.content; } let o = n.someProp("clipboardSerializer") || St.fromSchema(n.state.schema); let l = ia(); let a = l.createElement("div"); a.appendChild(o.serializeFragment(r, { document: l })); let c = a.firstChild; let u; let d = 0; for (;c && c.nodeType == 1 && (u = ra[c.nodeName.toLowerCase()]);) { for (let h = u.length - 1; h >= 0; h--) { let p = l.createElement(u[h]); for (;a.firstChild;)p.appendChild(a.firstChild); a.appendChild(p), d++; }c = a.firstChild; }c && c.nodeType == 1 && c.setAttribute("data-pm-slice", `${i} ${s}${d ? ` -${d}` : ""} ${JSON.stringify(t)}`); let f = n.someProp("clipboardTextSerializer", h => h(e, n)) || e.content.textBetween(0, e.content.size, `

`); return { dom: a, text: f, slice: e };
} function Zl(n, e, t, r, i) {
  let s = i.parent.type.spec.code; let o; let l; if (!t && !e)
    return null; let a = !!e && (r || s || !t); if (a) {
    if (n.someProp("transformPastedText", (f) => { e = f(e, s || r, n); }), s) {
      return l = new x(b.from(n.state.schema.text(e.replace(/\r\n?/g, `
`))), 0, 0), n.someProp("transformPasted", (f) => { l = f(l, n, !0); }), l;
    } let d = n.someProp("clipboardTextParser", f => f(e, i, r, n)); if (d) {
      l = d;
    }
    else { let f = i.marks(); let { schema: h } = n.state; let p = St.fromSchema(h); o = document.createElement("div"), e.split(/(?:\r\n?|\n)+/).forEach((m) => { let g = o.appendChild(document.createElement("p")); m && g.appendChild(p.serializeNode(h.text(m, f))); }); }
  }
  else {
    n.someProp("transformPastedHTML", (d) => { t = d(t, n); }), o = fd(t), mn && hd(o);
  } let c = o && o.querySelector("[data-pm-slice]"); let u = c && /^(\d+) (\d+)(?: -(\d+))? (.*)/.exec(c.getAttribute("data-pm-slice") || ""); if (u && u[3]) {
    for (let d = +u[3]; d > 0; d--) {
      let f = o.firstChild; for (;f && f.nodeType != 1;)f = f.nextSibling; if (!f)
        break; o = f;
    }
  } if (l || (l = (n.someProp("clipboardParser") || n.someProp("domParser") || Ge.fromSchema(n.state.schema)).parseSlice(o, { preserveWhitespace: !!(a || u), context: i, ruleFromNode(f) { return f.nodeName == "BR" && !f.nextSibling && f.parentNode && !cd.test(f.parentNode.nodeName) ? { ignore: !0 } : null; } })), u) {
    l = pd(go(l, +u[1], +u[2]), u[4]);
  }
  else if (l = x.maxOpen(ud(l.content, i), !0), l.openStart || l.openEnd) { let d = 0; let f = 0; for (let h = l.content.firstChild; d < l.openStart && !h.type.spec.isolating; d++, h = h.firstChild);for (let h = l.content.lastChild; f < l.openEnd && !h.type.spec.isolating; f++, h = h.lastChild);l = go(l, d, f); } return n.someProp("transformPasted", (d) => { l = d(l, n, a); }), l;
} const cd = /^([abiqsu]|abbr|acronym|cite|code|del|em|ins|kbd|label|output|ruby|samp|span|strong|sub|sup|time|tt|var)$/i; function ud(n, e) {
  if (n.childCount < 2)
    return n; for (let t = e.depth; t >= 0; t--) {
    let i = e.node(t).contentMatchAt(e.index(t)); let s; let o = []; if (n.forEach((l) => {
      if (!o)
        return; let a = i.findWrapping(l.type); let c; if (!a)
        return o = null; if (c = o.length && s.length && ta(a, s, l, o[o.length - 1], 0)) {
        o[o.length - 1] = c;
      }
      else { o.length && (o[o.length - 1] = na(o[o.length - 1], s.length)); let u = ea(l, a); o.push(u), i = i.matchType(u.type), s = a; }
    }), o) {
      return b.from(o);
    }
  } return n;
} function ea(n, e, t = 0) { for (let r = e.length - 1; r >= t; r--)n = e[r].create(null, b.from(n)); return n; } function ta(n, e, t, r, i) {
  if (i < n.length && i < e.length && n[i] == e[i]) {
    let s = ta(n, e, t, r.lastChild, i + 1); if (s)
      return r.copy(r.content.replaceChild(r.childCount - 1, s)); if (r.contentMatchAt(r.childCount).matchType(i == n.length - 1 ? t.type : n[i + 1]))
      return r.copy(r.content.append(b.from(ea(t, n, i + 1))));
  }
} function na(n, e) {
  if (e == 0)
    return n; let t = n.content.replaceChild(n.childCount - 1, na(n.lastChild, e - 1)); let r = n.contentMatchAt(n.childCount).fillBefore(b.empty, !0); return n.copy(t.append(r));
} function Ai(n, e, t, r, i, s) { let o = e < 0 ? n.firstChild : n.lastChild; let l = o.content; return n.childCount > 1 && (s = 0), i < r - 1 && (l = Ai(l, e, t, r, i + 1, s)), i >= t && (l = e < 0 ? o.contentMatchAt(0).fillBefore(l, s <= i).append(l) : l.append(o.contentMatchAt(o.childCount).fillBefore(b.empty, !0))), n.replaceChild(e < 0 ? 0 : n.childCount - 1, o.copy(l)); } function go(n, e, t) { return e < n.openStart && (n = new x(Ai(n.content, -1, e, n.openStart, 0, n.openEnd), e, n.openEnd)), t < n.openEnd && (n = new x(Ai(n.content, 1, t, n.openEnd, 0, 0), n.openStart, t)), n; } const ra = { thead: ["table"], tbody: ["table"], tfoot: ["table"], caption: ["table"], colgroup: ["table"], col: ["table", "colgroup"], tr: ["table", "tbody"], td: ["table", "tbody", "tr"], th: ["table", "tbody", "tr"] }; let yo = null; function ia() { return yo || (yo = document.implementation.createHTMLDocument("title")); } let Yr = null; function dd(n) { let e = window.trustedTypes; return e ? (Yr || (Yr = e.defaultPolicy || e.createPolicy("ProseMirrorClipboard", { createHTML: t => t })), Yr.createHTML(n)) : n; } function fd(n) {
  let e = /^(\s*<meta [^>]*>)*/.exec(n); e && (n = n.slice(e[0].length)); let t = ia().createElement("div"); let r = /<([a-z][^>\s]+)/i.exec(n); let i; if ((i = r && ra[r[1].toLowerCase()]) && (n = i.map(s => `<${s}>`).join("") + n + i.map(s => `</${s}>`).reverse().join("")), t.innerHTML = dd(n), i) {
    for (let s = 0; s < i.length; s++)t = t.querySelector(i[s]) || t;
  } return t;
} function hd(n) { let e = n.querySelectorAll(ie ? "span:not([class]):not([style])" : "span.Apple-converted-space"); for (let t = 0; t < e.length; t++) { let r = e[t]; r.childNodes.length == 1 && r.textContent == " " && r.parentNode && r.parentNode.replaceChild(n.ownerDocument.createTextNode(" "), r); } } function pd(n, e) {
  if (!n.size)
    return n; let t = n.content.firstChild.type.schema; let r; try { r = JSON.parse(e); }
  catch { return n; } let { content: i, openStart: s, openEnd: o } = n; for (let l = r.length - 2; l >= 0; l -= 2) {
    let a = t.nodes[r[l]]; if (!a || a.hasRequiredAttrs())
      break; i = b.from(a.create(r[l + 1], i)), s++, o++;
  } return new x(i, s, o);
} const ae = {}; const ce = {}; const md = { touchstart: !0, touchmove: !0 }; class gd {constructor() { this.shiftKey = !1, this.mouseDown = null, this.lastKeyCode = null, this.lastKeyCodeTime = 0, this.lastClick = { time: 0, x: 0, y: 0, type: "", button: 0 }, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastIOSEnter = 0, this.lastIOSEnterFallbackTimeout = -1, this.lastFocus = 0, this.lastTouch = 0, this.lastChromeDelete = 0, this.composing = !1, this.compositionNode = null, this.composingTimeout = -1, this.compositionNodes = [], this.compositionEndedAt = -2e8, this.compositionID = 1, this.compositionPendingChanges = 0, this.domChangeCount = 0, this.eventHandlers = Object.create(null), this.hideSelectionGuard = null; }} function yd(n) { for (let e in ae) { let t = ae[e]; n.dom.addEventListener(e, n.input.eventHandlers[e] = (r) => { kd(n, r) && !Qi(n, r) && (n.editable || !(r.type in ce)) && t(n, r); }, md[e] ? { passive: !0 } : void 0); }le && n.dom.addEventListener("input", () => null), vi(n); } function qe(n, e) { n.input.lastSelectionOrigin = e, n.input.lastSelectionTime = Date.now(); } function bd(n) { n.domObserver.stop(); for (let e in n.input.eventHandlers)n.dom.removeEventListener(e, n.input.eventHandlers[e]); clearTimeout(n.input.composingTimeout), clearTimeout(n.input.lastIOSEnterFallbackTimeout); } function vi(n) { n.someProp("handleDOMEvents", (e) => { for (let t in e)n.input.eventHandlers[t] || n.dom.addEventListener(t, n.input.eventHandlers[t] = r => Qi(n, r)); }); } function Qi(n, e) { return n.someProp("handleDOMEvents", (t) => { let r = t[e.type]; return r ? r(n, e) || e.defaultPrevented : !1; }); } function kd(n, e) {
  if (!e.bubbles)
    return !0; if (e.defaultPrevented)
    return !1; for (let t = e.target; t != n.dom; t = t.parentNode) {
    if (!t || t.nodeType == 11 || t.pmViewDesc && t.pmViewDesc.stopEvent(e))
      return !1;
  } return !0;
} function xd(n, e) { !Qi(n, e) && ae[e.type] && (n.editable || !(e.type in ce)) && ae[e.type](n, e); }ce.keydown = (n, e) => {
  let t = e; if (n.input.shiftKey = t.keyCode == 16 || t.shiftKey, !oa(n, t) && (n.input.lastKeyCode = t.keyCode, n.input.lastKeyCodeTime = Date.now(), !(Pe && ie && t.keyCode == 13))) {
    if (t.keyCode != 229 && n.domObserver.forceFlush(), Pt && t.keyCode == 13 && !t.ctrlKey && !t.altKey && !t.metaKey) { let r = Date.now(); n.input.lastIOSEnter = r, n.input.lastIOSEnterFallbackTimeout = setTimeout(() => { n.input.lastIOSEnter == r && (n.someProp("handleKeyDown", i => i(n, st(13, "Enter"))), n.input.lastIOSEnter = 0); }, 200); }
    else {
      n.someProp("handleKeyDown", r => r(n, t)) || ad(n, t) ? t.preventDefault() : qe(n, "key");
    }
  }
}; ce.keyup = (n, e) => { e.keyCode == 16 && (n.input.shiftKey = !1); }; ce.keypress = (n, e) => {
  let t = e; if (oa(n, t) || !t.charCode || t.ctrlKey && !t.altKey || ye && t.metaKey)
    return; if (n.someProp("handleKeyPress", i => i(n, t))) { t.preventDefault(); return; } let r = n.state.selection; if (!(r instanceof A) || !r.$from.sameParent(r.$to)) { let i = String.fromCharCode(t.charCode); let s = () => n.state.tr.insertText(i).scrollIntoView(); !/[\r\n]/.test(i) && !n.someProp("handleTextInput", o => o(n, r.$from.pos, r.$to.pos, i, s)) && n.dispatch(s()), t.preventDefault(); }
}; function vr(n) { return { left: n.clientX, top: n.clientY }; } function Sd(n, e) { let t = e.x - n.clientX; let r = e.y - n.clientY; return t * t + r * r < 100; } function Zi(n, e, t, r, i) {
  if (r == -1)
    return !1; let s = n.state.doc.resolve(r); for (let o = s.depth + 1; o > 0; o--) {
    if (n.someProp(e, l => o > s.depth ? l(n, t, s.nodeAfter, s.before(o), i, !0) : l(n, t, s.node(o), s.before(o), i, !1)))
      return !0;
  } return !1;
} function Dt(n, e, t) {
  if (n.focused || n.focus(), n.state.selection.eq(e))
    return; let r = n.state.tr.setSelection(e); r.setMeta("pointer", !0), n.dispatch(r);
} function Cd(n, e) {
  if (e == -1)
    return !1; let t = n.state.doc.resolve(e); let r = t.nodeAfter; return r && r.isAtom && T.isSelectable(r) ? (Dt(n, new T(t)), !0) : !1;
} function Md(n, e) {
  if (e == -1)
    return !1; let t = n.state.selection; let r; let i; t instanceof T && (r = t.node); let s = n.state.doc.resolve(e); for (let o = s.depth + 1; o > 0; o--) { let l = o > s.depth ? s.nodeAfter : s.node(o); if (T.isSelectable(l)) { r && t.$from.depth > 0 && o >= t.$from.depth && s.before(t.$from.depth + 1) == t.$from.pos ? i = s.before(t.$from.depth) : i = s.before(o); break; } } return i != null ? (Dt(n, T.create(n.state.doc, i)), !0) : !1;
} function wd(n, e, t, r, i) { return Zi(n, "handleClickOn", e, t, r) || n.someProp("handleClick", s => s(n, e, r)) || (i ? Md(n, t) : Cd(n, t)); } function Td(n, e, t, r) { return Zi(n, "handleDoubleClickOn", e, t, r) || n.someProp("handleDoubleClick", i => i(n, e, r)); } function Ed(n, e, t, r) { return Zi(n, "handleTripleClickOn", e, t, r) || n.someProp("handleTripleClick", i => i(n, e, r)) || Od(n, t, r); } function Od(n, e, t) {
  if (t.button != 0)
    return !1; let r = n.state.doc; if (e == -1)
    return r.inlineContent ? (Dt(n, A.create(r, 0, r.content.size)), !0) : !1; let i = r.resolve(e); for (let s = i.depth + 1; s > 0; s--) {
    let o = s > i.depth ? i.nodeAfter : i.node(s); let l = i.before(s); if (o.inlineContent)
      Dt(n, A.create(r, l + 1, l + 1 + o.content.size)); else if (T.isSelectable(o))
      Dt(n, T.create(r, l)); else continue; return !0;
  }
} function es(n) { return Kn(n); } const sa = ye ? "metaKey" : "ctrlKey"; ae.mousedown = (n, e) => { let t = e; n.input.shiftKey = t.shiftKey; let r = es(n); let i = Date.now(); let s = "singleClick"; i - n.input.lastClick.time < 500 && Sd(t, n.input.lastClick) && !t[sa] && n.input.lastClick.button == t.button && (n.input.lastClick.type == "singleClick" ? s = "doubleClick" : n.input.lastClick.type == "doubleClick" && (s = "tripleClick")), n.input.lastClick = { time: i, x: t.clientX, y: t.clientY, type: s, button: t.button }; let o = n.posAtCoords(vr(t)); o && (s == "singleClick" ? (n.input.mouseDown && n.input.mouseDown.done(), n.input.mouseDown = new Ad(n, o, t, !!r)) : (s == "doubleClick" ? Td : Ed)(n, o.pos, o.inside, t) ? t.preventDefault() : qe(n, "pointer")); }; class Ad {
  constructor(e, t, r, i) {
    this.view = e, this.pos = t, this.event = r, this.flushed = i, this.delayedSelectionSync = !1, this.mightDrag = null, this.startDoc = e.state.doc, this.selectNode = !!r[sa], this.allowDefault = r.shiftKey; let s, o; if (t.inside > -1) {
      s = e.state.doc.nodeAt(t.inside), o = t.inside;
    }
    else { let u = e.state.doc.resolve(t.pos); s = u.parent, o = u.depth ? u.before() : 0; } const l = i ? null : r.target; const a = l ? e.docView.nearestDesc(l, !0) : null; this.target = a && a.nodeDOM.nodeType == 1 ? a.nodeDOM : null; let { selection: c } = e.state; (r.button == 0 && s.type.spec.draggable && s.type.spec.selectable !== !1 || c instanceof T && c.from <= o && c.to > o) && (this.mightDrag = { node: s, pos: o, addAttr: !!(this.target && !this.target.draggable), setUneditable: !!(this.target && ke && !this.target.hasAttribute("contentEditable")) }), this.target && this.mightDrag && (this.mightDrag.addAttr || this.mightDrag.setUneditable) && (this.view.domObserver.stop(), this.mightDrag.addAttr && (this.target.draggable = !0), this.mightDrag.setUneditable && setTimeout(() => { this.view.input.mouseDown == this && this.target.setAttribute("contentEditable", "false"); }, 20), this.view.domObserver.start()), e.root.addEventListener("mouseup", this.up = this.up.bind(this)), e.root.addEventListener("mousemove", this.move = this.move.bind(this)), qe(e, "pointer");
  }

  done() { this.view.root.removeEventListener("mouseup", this.up), this.view.root.removeEventListener("mousemove", this.move), this.mightDrag && this.target && (this.view.domObserver.stop(), this.mightDrag.addAttr && this.target.removeAttribute("draggable"), this.mightDrag.setUneditable && this.target.removeAttribute("contentEditable"), this.view.domObserver.start()), this.delayedSelectionSync && setTimeout(() => Be(this.view)), this.view.input.mouseDown = null; }up(e) {
    if (this.done(), !this.view.dom.contains(e.target))
      return; let t = this.pos; this.view.state.doc != this.startDoc && (t = this.view.posAtCoords(vr(e))), this.updateAllowDefault(e), this.allowDefault || !t ? qe(this.view, "pointer") : wd(this.view, t.pos, t.inside, e, this.selectNode) ? e.preventDefault() : e.button == 0 && (this.flushed || le && this.mightDrag && !this.mightDrag.node.isAtom || ie && !this.view.state.selection.visible && Math.min(Math.abs(t.pos - this.view.state.selection.from), Math.abs(t.pos - this.view.state.selection.to)) <= 2) ? (Dt(this.view, I.near(this.view.state.doc.resolve(t.pos))), e.preventDefault()) : qe(this.view, "pointer");
  }

  move(e) { this.updateAllowDefault(e), qe(this.view, "pointer"), e.buttons == 0 && this.done(); }updateAllowDefault(e) { !this.allowDefault && (Math.abs(this.event.x - e.clientX) > 4 || Math.abs(this.event.y - e.clientY) > 4) && (this.allowDefault = !0); }
}ae.touchstart = (n) => { n.input.lastTouch = Date.now(), es(n), qe(n, "pointer"); }; ae.touchmove = (n) => { n.input.lastTouch = Date.now(), qe(n, "pointer"); }; ae.contextmenu = n => es(n); function oa(n, e) { return n.composing ? !0 : le && Math.abs(e.timeStamp - n.input.compositionEndedAt) < 500 ? (n.input.compositionEndedAt = -2e8, !0) : !1; } const vd = Pe ? 5e3 : -1; ce.compositionstart = ce.compositionupdate = (n) => {
  if (!n.composing) {
    n.domObserver.flush(); let { state: e } = n; let t = e.selection.$to; if (e.selection instanceof A && (e.storedMarks || !t.textOffset && t.parentOffset && t.nodeBefore.marks.some(r => r.type.spec.inclusive === !1))) {
      n.markCursor = n.state.storedMarks || t.marks(), Kn(n, !0), n.markCursor = null;
    }
    else if (Kn(n, !e.selection.empty), ke && e.selection.empty && t.parentOffset && !t.textOffset && t.nodeBefore.marks.length) {
      let r = n.domSelectionRange(); for (let i = r.focusNode, s = r.focusOffset; i && i.nodeType == 1 && s != 0;) {
        let o = s < 0 ? i.lastChild : i.childNodes[s - 1]; if (!o)
          break; if (o.nodeType == 3) { let l = n.domSelection(); l && l.collapse(o, o.nodeValue.length); break; }
        else {
          i = o, s = -1;
        }
      }
    }n.input.composing = !0;
  }la(n, vd);
}; ce.compositionend = (n, e) => { n.composing && (n.input.composing = !1, n.input.compositionEndedAt = e.timeStamp, n.input.compositionPendingChanges = n.domObserver.pendingRecords().length ? n.input.compositionID : 0, n.input.compositionNode = null, n.input.compositionPendingChanges && Promise.resolve().then(() => n.domObserver.flush()), n.input.compositionID++, la(n, 20)); }; function la(n, e) { clearTimeout(n.input.composingTimeout), e > -1 && (n.input.composingTimeout = setTimeout(() => Kn(n), e)); } function aa(n) { for (n.composing && (n.input.composing = !1, n.input.compositionEndedAt = Dd()); n.input.compositionNodes.length > 0;)n.input.compositionNodes.pop().markParentsDirty(); } function Nd(n) {
  let e = n.domSelectionRange(); if (!e.focusNode)
    return null; let t = Cu(e.focusNode, e.focusOffset); let r = Mu(e.focusNode, e.focusOffset); if (t && r && t != r) {
    let i = r.pmViewDesc; let s = n.domObserver.lastChangedTextNode; if (t == s || r == s)
      return s; if (!i || !i.isText(r.nodeValue))
      return r; if (n.input.compositionNode == r) {
      let o = t.pmViewDesc; if (!(!o || !o.isText(t.nodeValue)))
        return r;
    }
  } return t || r;
} function Dd() { let n = document.createEvent("Event"); return n.initEvent("event", !0, !0), n.timeStamp; } function Kn(n, e = !1) { if (!(Pe && n.domObserver.flushingSoon >= 0)) { if (n.domObserver.forceFlush(), aa(n), e || n.docView && n.docView.dirty) { let t = Gi(n); let r = n.state.selection; return t && !t.eq(r) ? n.dispatch(n.state.tr.setSelection(t)) : (n.markCursor || e) && !r.$from.node(r.$from.sharedDepth(r.to)).inlineContent ? n.dispatch(n.state.tr.deleteSelection()) : n.updateState(n.state), !0; } return !1; } } function Id(n, e) {
  if (!n.dom.parentNode)
    return; let t = n.dom.parentNode.appendChild(document.createElement("div")); t.appendChild(e), t.style.cssText = "position: fixed; left: -10000px; top: 10px"; let r = getSelection(); let i = document.createRange(); i.selectNodeContents(e), n.dom.blur(), r.removeAllRanges(), r.addRange(i), setTimeout(() => { t.parentNode && t.parentNode.removeChild(t), n.focus(); }, 50);
} const on = fe && Ye < 15 || Pt && Au < 604; ae.copy = ce.cut = (n, e) => {
  let t = e; let r = n.state.selection; let i = t.type == "cut"; if (r.empty)
    return; let s = on ? null : t.clipboardData; let o = r.content(); let { dom: l, text: a } = Xi(n, o); s ? (t.preventDefault(), s.clearData(), s.setData("text/html", l.innerHTML), s.setData("text/plain", a)) : Id(n, l), i && n.dispatch(n.state.tr.deleteSelection().scrollIntoView().setMeta("uiEvent", "cut"));
}; function Rd(n) { return n.openStart == 0 && n.openEnd == 0 && n.content.childCount == 1 ? n.content.firstChild : null; } function Pd(n, e) {
  if (!n.dom.parentNode)
    return; let t = n.input.shiftKey || n.state.selection.$from.parent.type.spec.code; let r = n.dom.parentNode.appendChild(document.createElement(t ? "textarea" : "div")); t || (r.contentEditable = "true"), r.style.cssText = "position: fixed; left: -10000px; top: 10px", r.focus(); let i = n.input.shiftKey && n.input.lastKeyCode != 45; setTimeout(() => { n.focus(), r.parentNode && r.parentNode.removeChild(r), t ? ln(n, r.value, null, i, e) : ln(n, r.textContent, r.innerHTML, i, e); }, 50);
} function ln(n, e, t, r, i) {
  let s = Zl(n, e, t, r, n.state.selection.$from); if (n.someProp("handlePaste", a => a(n, i, s || x.empty)))
    return !0; if (!s)
    return !1; let o = Rd(s); let l = o ? n.state.tr.replaceSelectionWith(o, r) : n.state.tr.replaceSelection(s); return n.dispatch(l.scrollIntoView().setMeta("paste", !0).setMeta("uiEvent", "paste")), !0;
} function ca(n) {
  let e = n.getData("text/plain") || n.getData("Text"); if (e)
    return e; let t = n.getData("text/uri-list"); return t ? t.replace(/\r?\n/g, " ") : "";
}ce.paste = (n, e) => {
  let t = e; if (n.composing && !Pe)
    return; let r = on ? null : t.clipboardData; let i = n.input.shiftKey && n.input.lastKeyCode != 45; r && ln(n, ca(r), r.getData("text/html"), i, t) ? t.preventDefault() : Pd(n, t);
}; class ua {constructor(e, t, r) { this.slice = e, this.move = t, this.node = r; }} const Ld = ye ? "altKey" : "ctrlKey"; function da(n, e) { let t = n.someProp("dragCopies", r => !r(e)); return t ?? !e[Ld]; }ae.dragstart = (n, e) => {
  let t = e; let r = n.input.mouseDown; if (r && r.done(), !t.dataTransfer)
    return; let i = n.state.selection; let s = i.empty ? null : n.posAtCoords(vr(t)); let o; if (!(s && s.pos >= i.from && s.pos <= (i instanceof T ? i.to - 1 : i.to))) {
    if (r && r.mightDrag) {
      o = T.create(n.state.doc, r.mightDrag.pos);
    }
    else if (t.target && t.target.nodeType == 1) { let d = n.docView.nearestDesc(t.target, !0); d && d.node.type.spec.draggable && d != n.docView && (o = T.create(n.state.doc, d.posBefore)); }
  } let l = (o || n.state.selection).content(); let { dom: a, text: c, slice: u } = Xi(n, l); (!t.dataTransfer.files.length || !ie || zl > 120) && t.dataTransfer.clearData(), t.dataTransfer.setData(on ? "Text" : "text/html", a.innerHTML), t.dataTransfer.effectAllowed = "copyMove", on || t.dataTransfer.setData("text/plain", c), n.dragging = new ua(u, da(n, t), o);
}; ae.dragend = (n) => { let e = n.dragging; window.setTimeout(() => { n.dragging == e && (n.dragging = null); }, 50); }; ce.dragover = ce.dragenter = (n, e) => e.preventDefault(); ce.drop = (n, e) => {
  let t = e; let r = n.dragging; if (n.dragging = null, !t.dataTransfer)
    return; let i = n.posAtCoords(vr(t)); if (!i)
    return; let s = n.state.doc.resolve(i.pos); let o = r && r.slice; o ? n.someProp("transformPasted", (p) => { o = p(o, n, !1); }) : o = Zl(n, ca(t.dataTransfer), on ? null : t.dataTransfer.getData("text/html"), !1, s); let l = !!(r && da(n, t)); if (n.someProp("handleDrop", p => p(n, t, o || x.empty, l))) { t.preventDefault(); return; } if (!o)
    return; t.preventDefault(); let a = o ? Al(n.state.doc, s.pos, o) : s.pos; a == null && (a = s.pos); let c = n.state.tr; if (l) { let { node: p } = r; p ? p.replace(c) : c.deleteSelection(); } let u = c.mapping.map(a); let d = o.openStart == 0 && o.openEnd == 0 && o.content.childCount == 1; let f = c.doc; if (d ? c.replaceRangeWith(u, u, o.content.firstChild) : c.replaceRange(u, u, o), c.doc.eq(f))
    return; let h = c.doc.resolve(u); if (d && T.isSelectable(o.content.firstChild) && h.nodeAfter && h.nodeAfter.sameMarkup(o.content.firstChild)) {
    c.setSelection(new T(h));
  }
  else { let p = c.mapping.map(a); c.mapping.maps[c.mapping.maps.length - 1].forEach((m, g, y, S) => p = S), c.setSelection(Yi(n, h, c.doc.resolve(p))); }n.focus(), n.dispatch(c.setMeta("uiEvent", "drop"));
}; ae.focus = (n) => { n.input.lastFocus = Date.now(), n.focused || (n.domObserver.stop(), n.dom.classList.add("ProseMirror-focused"), n.domObserver.start(), n.focused = !0, setTimeout(() => { n.docView && n.hasFocus() && !n.domObserver.currentSelection.eq(n.domSelectionRange()) && Be(n); }, 20)); }; ae.blur = (n, e) => { let t = e; n.focused && (n.domObserver.stop(), n.dom.classList.remove("ProseMirror-focused"), n.domObserver.start(), t.relatedTarget && n.dom.contains(t.relatedTarget) && n.domObserver.currentSelection.clear(), n.focused = !1); }; ae.beforeinput = (n, e) => {
  if (ie && Pe && e.inputType == "deleteContentBackward") {
    n.domObserver.flushSoon(); let { domChangeCount: r } = n.input; setTimeout(() => {
      if (n.input.domChangeCount != r || (n.dom.blur(), n.focus(), n.someProp("handleKeyDown", s => s(n, st(8, "Backspace")))))
        return; let { $cursor: i } = n.state.selection; i && i.pos > 0 && n.dispatch(n.state.tr.delete(i.pos - 1, i.pos).scrollIntoView());
    }, 50);
  }
}; for (let n in ce)ae[n] = ce[n]; function an(n, e) {
  if (n == e)
    return !0; for (let t in n) {
    if (n[t] !== e[t])
      return !1;
  } for (let t in e) {
    if (!(t in n))
      return !1;
  } return !0;
} class Un {constructor(e, t) { this.toDOM = e, this.spec = t || ht, this.side = this.spec.side || 0; }map(e, t, r, i) { let { pos: s, deleted: o } = e.mapResult(t.from + i, this.side < 0 ? -1 : 1); return o ? null : new oe(s - r, s - r, this); }valid() { return !0; }eq(e) { return this == e || e instanceof Un && (this.spec.key && this.spec.key == e.spec.key || this.toDOM == e.toDOM && an(this.spec, e.spec)); }destroy(e) { this.spec.destroy && this.spec.destroy(e); }} class Qe {constructor(e, t) { this.attrs = e, this.spec = t || ht; }map(e, t, r, i) { let s = e.map(t.from + i, this.spec.inclusiveStart ? -1 : 1) - r; let o = e.map(t.to + i, this.spec.inclusiveEnd ? 1 : -1) - r; return s >= o ? null : new oe(s, o, this); }valid(e, t) { return t.from < t.to; }eq(e) { return this == e || e instanceof Qe && an(this.attrs, e.attrs) && an(this.spec, e.spec); } static is(e) { return e.type instanceof Qe; }destroy() {}} class ts {
  constructor(e, t) { this.attrs = e, this.spec = t || ht; }map(e, t, r, i) {
    let s = e.mapResult(t.from + i, 1); if (s.deleted)
      return null; let o = e.mapResult(t.to + i, -1); return o.deleted || o.pos <= s.pos ? null : new oe(s.pos - r, o.pos - r, this);
  }

  valid(e, t) { let { index: r, offset: i } = e.content.findIndex(t.from); let s; return i == t.from && !(s = e.child(r)).isText && i + s.nodeSize == t.to; }eq(e) { return this == e || e instanceof ts && an(this.attrs, e.attrs) && an(this.spec, e.spec); }destroy() {}
} class oe {constructor(e, t, r) { this.from = e, this.to = t, this.type = r; }copy(e, t) { return new oe(e, t, this.type); }eq(e, t = 0) { return this.type.eq(e.type) && this.from + t == e.from && this.to + t == e.to; }map(e, t, r) { return this.type.map(e, this, t, r); } static widget(e, t, r) { return new oe(e, e, new Un(t, r)); } static inline(e, t, r, i) { return new oe(e, t, new Qe(r, i)); } static node(e, t, r, i) { return new oe(e, t, new ts(r, i)); } get spec() { return this.type.spec; } get inline() { return this.type instanceof Qe; } get widget() { return this.type instanceof Un; }} const Et = []; const ht = {}; class $ {
  constructor(e, t) { this.local = e.length ? e : Et, this.children = t.length ? t : Et; } static create(e, t) { return t.length ? _n(t, e, 0, ht) : re; }find(e, t, r) { let i = []; return this.findInner(e ?? 0, t ?? 1e9, i, 0, r), i; }findInner(e, t, r, i, s) {
    for (let o = 0; o < this.local.length; o++) { let l = this.local[o]; l.from <= t && l.to >= e && (!s || s(l.spec)) && r.push(l.copy(l.from + i, l.to + i)); } for (let o = 0; o < this.children.length; o += 3) {
      if (this.children[o] < t && this.children[o + 1] > e) { let l = this.children[o] + 1; this.children[o + 2].findInner(e - l, t - l, r, i + l, s); }
    }
  }

  map(e, t, r) { return this == re || e.maps.length == 0 ? this : this.mapInner(e, t, 0, 0, r || ht); }mapInner(e, t, r, i, s) { let o; for (let l = 0; l < this.local.length; l++) { let a = this.local[l].map(e, r, i); a && a.type.valid(t, a) ? (o || (o = [])).push(a) : s.onRemove && s.onRemove(this.local[l].spec); } return this.children.length ? Bd(this.children, o || [], e, t, r, i, s) : o ? new $(o.sort(pt), Et) : re; }add(e, t) { return t.length ? this == re ? $.create(e, t) : this.addInner(e, t, 0) : this; }addInner(e, t, r) { let i; let s = 0; e.forEach((l, a) => { let c = a + r; let u; if (u = ha(t, l, c)) { for (i || (i = this.children.slice()); s < i.length && i[s] < a;)s += 3; i[s] == a ? i[s + 2] = i[s + 2].addInner(l, u, c + 1) : i.splice(s, 0, a, a + l.nodeSize, _n(u, l, c + 1, ht)), s += 3; } }); let o = fa(s ? pa(t) : t, -r); for (let l = 0; l < o.length; l++)o[l].type.valid(e, o[l]) || o.splice(l--, 1); return new $(o.length ? this.local.concat(o).sort(pt) : this.local, i || this.children); }remove(e) { return e.length == 0 || this == re ? this : this.removeInner(e, 0); }removeInner(e, t) {
    let r = this.children; let i = this.local; for (let s = 0; s < r.length; s += 3) {
      let o; let l = r[s] + t; let a = r[s + 1] + t; for (let u = 0, d; u < e.length; u++)(d = e[u]) && d.from > l && d.to < a && (e[u] = null, (o || (o = [])).push(d)); if (!o)
        continue; r == this.children && (r = this.children.slice()); let c = r[s + 2].removeInner(o, l + 1); c != re ? r[s + 2] = c : (r.splice(s, 3), s -= 3);
    } if (i.length) {
      for (let s = 0, o; s < e.length; s++) {
        if (o = e[s]) {
          for (let l = 0; l < i.length; l++)i[l].eq(o, t) && (i == this.local && (i = this.local.slice()), i.splice(l--, 1));
        }
      }
    } return r == this.children && i == this.local ? this : i.length || r.length ? new $(i, r) : re;
  }

  forChild(e, t) {
    if (this == re)
      return this; if (t.isLeaf)
      return $.empty; let r, i; for (let l = 0; l < this.children.length; l += 3) {
      if (this.children[l] >= e) { this.children[l] == e && (r = this.children[l + 2]); break; }
    } let s = e + 1; let o = s + t.content.size; for (let l = 0; l < this.local.length; l++) { let a = this.local[l]; if (a.from < o && a.to > s && a.type instanceof Qe) { let c = Math.max(s, a.from) - s; let u = Math.min(o, a.to) - s; c < u && (i || (i = [])).push(a.copy(c, u)); } } if (i) { let l = new $(i.sort(pt), Et); return r ? new We([l, r]) : l; } return r || re;
  }

  eq(e) {
    if (this == e)
      return !0; if (!(e instanceof $) || this.local.length != e.local.length || this.children.length != e.children.length)
      return !1; for (let t = 0; t < this.local.length; t++) {
      if (!this.local[t].eq(e.local[t]))
        return !1;
    } for (let t = 0; t < this.children.length; t += 3) {
      if (this.children[t] != e.children[t] || this.children[t + 1] != e.children[t + 1] || !this.children[t + 2].eq(e.children[t + 2]))
        return !1;
    } return !0;
  }

  locals(e) { return ns(this.localsInner(e)); }localsInner(e) {
    if (this == re)
      return Et; if (e.inlineContent || !this.local.some(Qe.is))
      return this.local; let t = []; for (let r = 0; r < this.local.length; r++) this.local[r].type instanceof Qe || t.push(this.local[r]); return t;
  }

  forEachSet(e) { e(this); }
}$.empty = new $([], []); $.removeOverlap = ns; const re = $.empty; class We {
  constructor(e) { this.members = e; }map(e, t) { const r = this.members.map(i => i.map(e, t, ht)); return We.from(r); }forChild(e, t) {
    if (t.isLeaf)
      return $.empty; let r = []; for (let i = 0; i < this.members.length; i++) { let s = this.members[i].forChild(e, t); s != re && (s instanceof We ? r = r.concat(s.members) : r.push(s)); } return We.from(r);
  }

  eq(e) {
    if (!(e instanceof We) || e.members.length != this.members.length)
      return !1; for (let t = 0; t < this.members.length; t++) {
      if (!this.members[t].eq(e.members[t]))
        return !1;
    } return !0;
  }

  locals(e) {
    let t; let r = !0; for (let i = 0; i < this.members.length; i++) {
      let s = this.members[i].localsInner(e); if (s.length) {
        if (!t) {
          t = s;
        }
        else { r && (t = t.slice(), r = !1); for (let o = 0; o < s.length; o++)t.push(s[o]); }
      }
    } return t ? ns(r ? t : t.sort(pt)) : Et;
  }

  static from(e) { switch (e.length) { case 0:return re; case 1:return e[0]; default:return new We(e.every(t => t instanceof $) ? e : e.reduce((t, r) => t.concat(r instanceof $ ? r : r.members), [])); } }forEachSet(e) { for (let t = 0; t < this.members.length; t++) this.members[t].forEachSet(e); }
} function Bd(n, e, t, r, i, s, o) {
  let l = n.slice(); for (let c = 0, u = s; c < t.maps.length; c++) {
    let d = 0; t.maps[c].forEach((f, h, p, m) => {
      let g = m - p - (h - f); for (let y = 0; y < l.length; y += 3) {
        let S = l[y + 1]; if (S < 0 || f > S + u - d)
          continue; let O = l[y] + u - d; h >= O ? l[y + 1] = f <= O ? -2 : -1 : f >= u && g && (l[y] += g, l[y + 1] += g);
      }d += g;
    }), u = t.maps[c].map(u, -1);
  } let a = !1; for (let c = 0; c < l.length; c += 3) {
    if (l[c + 1] < 0) {
      if (l[c + 1] == -2) { a = !0, l[c + 1] = -1; continue; } let u = t.map(n[c] + s); let d = u - i; if (d < 0 || d >= r.content.size) { a = !0; continue; } let f = t.map(n[c + 1] + s, -1); let h = f - i; let { index: p, offset: m } = r.content.findIndex(d); let g = r.maybeChild(p); if (g && m == d && m + g.nodeSize == h) { let y = l[c + 2].mapInner(t, g, u + 1, n[c] + s + 1, o); y != re ? (l[c] = d, l[c + 1] = h, l[c + 2] = y) : (l[c + 1] = -2, a = !0); }
      else {
        a = !0;
      }
    }
  } if (a) { let c = zd(l, n, e, t, i, s, o); let u = _n(c, r, 0, o); e = u.local; for (let d = 0; d < l.length; d += 3)l[d + 1] < 0 && (l.splice(d, 3), d -= 3); for (let d = 0, f = 0; d < u.children.length; d += 3) { let h = u.children[d]; for (;f < l.length && l[f] < h;)f += 3; l.splice(f, 0, u.children[d], u.children[d + 1], u.children[d + 2]); } } return new $(e.sort(pt), l);
} function fa(n, e) {
  if (!e || !n.length)
    return n; let t = []; for (let r = 0; r < n.length; r++) { let i = n[r]; t.push(new oe(i.from + e, i.to + e, i.type)); } return t;
} function zd(n, e, t, r, i, s, o) { function l(a, c) { for (let u = 0; u < a.local.length; u++) { let d = a.local[u].map(r, i, c); d ? t.push(d) : o.onRemove && o.onRemove(a.local[u].spec); } for (let u = 0; u < a.children.length; u += 3)l(a.children[u + 2], a.children[u] + c + 1); } for (let a = 0; a < n.length; a += 3)n[a + 1] == -1 && l(n[a + 2], e[a] + s + 1); return t; } function ha(n, e, t) {
  if (e.isLeaf)
    return null; let r = t + e.nodeSize; let i = null; for (let s = 0, o; s < n.length; s++)(o = n[s]) && o.from > t && o.to < r && ((i || (i = [])).push(o), n[s] = null); return i;
} function pa(n) { let e = []; for (let t = 0; t < n.length; t++)n[t] != null && e.push(n[t]); return e; } function _n(n, e, t, r) { let i = []; let s = !1; e.forEach((l, a) => { let c = ha(n, l, a + t); if (c) { s = !0; let u = _n(c, l, t + a + 1, r); u != re && i.push(a, a + l.nodeSize, u); } }); let o = fa(s ? pa(n) : n, -t).sort(pt); for (let l = 0; l < o.length; l++)o[l].type.valid(e, o[l]) || (r.onRemove && r.onRemove(o[l].spec), o.splice(l--, 1)); return o.length || i.length ? new $(o, i) : re; } function pt(n, e) { return n.from - e.from || n.to - e.to; } function ns(n) {
  let e = n; for (let t = 0; t < e.length - 1; t++) {
    let r = e[t]; if (r.from != r.to) {
      for (let i = t + 1; i < e.length; i++) {
        let s = e[i]; if (s.from == r.from) { s.to != r.to && (e == n && (e = n.slice()), e[i] = s.copy(s.from, r.to), bo(e, i + 1, s.copy(r.to, s.to))); continue; }
        else { s.from < r.to && (e == n && (e = n.slice()), e[t] = r.copy(r.from, s.from), bo(e, i, r.copy(s.from, r.to))); break; }
      }
    }
  } return e;
} function bo(n, e, t) { for (;e < n.length && pt(t, n[e]) > 0;)e++; n.splice(e, 0, t); } function Xr(n) { let e = []; return n.someProp("decorations", (t) => { let r = t(n.state); r && r != re && e.push(r); }), n.cursorWrapper && e.push($.create(n.state.doc, [n.cursorWrapper.deco])), We.from(e); } const Fd = { childList: !0, characterData: !0, characterDataOldValue: !0, attributes: !0, attributeOldValue: !0, subtree: !0 }; const Hd = fe && Ye <= 11; class $d {constructor() { this.anchorNode = null, this.anchorOffset = 0, this.focusNode = null, this.focusOffset = 0; }set(e) { this.anchorNode = e.anchorNode, this.anchorOffset = e.anchorOffset, this.focusNode = e.focusNode, this.focusOffset = e.focusOffset; }clear() { this.anchorNode = this.focusNode = null; }eq(e) { return e.anchorNode == this.anchorNode && e.anchorOffset == this.anchorOffset && e.focusNode == this.focusNode && e.focusOffset == this.focusOffset; }} class Vd {
  constructor(e, t) { this.view = e, this.handleDOMChange = t, this.queue = [], this.flushingSoon = -1, this.observer = null, this.currentSelection = new $d(), this.onCharData = null, this.suppressingSelectionUpdates = !1, this.lastChangedTextNode = null, this.observer = window.MutationObserver && new window.MutationObserver((r) => { for (let i = 0; i < r.length; i++) this.queue.push(r[i]); fe && Ye <= 11 && r.some(i => i.type == "childList" && i.removedNodes.length || i.type == "characterData" && i.oldValue.length > i.target.nodeValue.length) ? this.flushSoon() : this.flush(); }), Hd && (this.onCharData = (r) => { this.queue.push({ target: r.target, type: "characterData", oldValue: r.prevValue }), this.flushSoon(); }), this.onSelectionChange = this.onSelectionChange.bind(this); }flushSoon() { this.flushingSoon < 0 && (this.flushingSoon = window.setTimeout(() => { this.flushingSoon = -1, this.flush(); }, 20)); }forceFlush() { this.flushingSoon > -1 && (window.clearTimeout(this.flushingSoon), this.flushingSoon = -1, this.flush()); }start() { this.observer && (this.observer.takeRecords(), this.observer.observe(this.view.dom, Fd)), this.onCharData && this.view.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.connectSelection(); }stop() { if (this.observer) { let e = this.observer.takeRecords(); if (e.length) { for (let t = 0; t < e.length; t++) this.queue.push(e[t]); window.setTimeout(() => this.flush(), 20); } this.observer.disconnect(); } this.onCharData && this.view.dom.removeEventListener("DOMCharacterDataModified", this.onCharData), this.disconnectSelection(); }connectSelection() { this.view.dom.ownerDocument.addEventListener("selectionchange", this.onSelectionChange); }disconnectSelection() { this.view.dom.ownerDocument.removeEventListener("selectionchange", this.onSelectionChange); }suppressSelectionUpdates() { this.suppressingSelectionUpdates = !0, setTimeout(() => this.suppressingSelectionUpdates = !1, 50); }onSelectionChange() {
    if (co(this.view)) {
      if (this.suppressingSelectionUpdates)
        return Be(this.view); if (fe && Ye <= 11 && !this.view.state.selection.empty) {
        let e = this.view.domSelectionRange(); if (e.focusNode && bt(e.focusNode, e.focusOffset, e.anchorNode, e.anchorOffset))
          return this.flushSoon();
      } this.flush();
    }
  }

  setCurSelection() { this.currentSelection.set(this.view.domSelectionRange()); }ignoreSelectionChange(e) {
    if (!e.focusNode)
      return !0; let t = new Set(); let r; for (let s = e.focusNode; s; s = Rt(s))t.add(s); for (let s = e.anchorNode; s; s = Rt(s)) {
      if (t.has(s)) { r = s; break; }
    } let i = r && this.view.docView.nearestDesc(r); if (i && i.ignoreMutation({ type: "selection", target: r.nodeType == 3 ? r.parentNode : r }))
      return this.setCurSelection(), !0;
  }

  pendingRecords() {
    if (this.observer) {
      for (let e of this.observer.takeRecords()) this.queue.push(e);
    } return this.queue;
  }

  flush() {
    let { view: e } = this; if (!e.docView || this.flushingSoon > -1)
      return; let t = this.pendingRecords(); t.length && (this.queue = []); let r = e.domSelectionRange(); let i = !this.suppressingSelectionUpdates && !this.currentSelection.eq(r) && co(e) && !this.ignoreSelectionChange(r); let s = -1; let o = -1; let l = !1; let a = []; if (e.editable) {
      for (let u = 0; u < t.length; u++) { let d = this.registerMutation(t[u], a); d && (s = s < 0 ? d.from : Math.min(d.from, s), o = o < 0 ? d.to : Math.max(d.to, o), d.typeOver && (l = !0)); }
    } if (ke && a.length) {
      let u = a.filter(d => d.nodeName == "BR"); if (u.length == 2) { let [d, f] = u; d.parentNode && d.parentNode.parentNode == f.parentNode ? f.remove() : d.remove(); }
      else { let { focusNode: d } = this.currentSelection; for (let f of u) { let h = f.parentNode; h && h.nodeName == "LI" && (!d || Kd(e, d) != h) && f.remove(); } }
    } let c = null; s < 0 && i && e.input.lastFocus > Date.now() - 200 && Math.max(e.input.lastTouch, e.input.lastClick.time) < Date.now() - 300 && Or(r) && (c = Gi(e)) && c.eq(I.near(e.state.doc.resolve(0), 1)) ? (e.input.lastFocus = 0, Be(e), this.currentSelection.set(r), e.scrollToSelection()) : (s > -1 || i) && (s > -1 && (e.docView.markDirty(s, o), jd(e)), this.handleDOMChange(s, o, l, a), e.docView && e.docView.dirty ? e.updateState(e.state) : this.currentSelection.eq(r) || Be(e), this.currentSelection.set(r));
  }

  registerMutation(e, t) {
    if (t.includes(e.target))
      return null; let r = this.view.docView.nearestDesc(e.target); if (e.type == "attributes" && (r == this.view.docView || e.attributeName == "contenteditable" || e.attributeName == "style" && !e.oldValue && !e.target.getAttribute("style")) || !r || r.ignoreMutation(e))
      return null; if (e.type == "childList") {
      for (let u = 0; u < e.addedNodes.length; u++) { let d = e.addedNodes[u]; t.push(d), d.nodeType == 3 && (this.lastChangedTextNode = d); } if (r.contentDOM && r.contentDOM != r.dom && !r.contentDOM.contains(e.target))
        return { from: r.posBefore, to: r.posAfter }; let i = e.previousSibling; let s = e.nextSibling; if (fe && Ye <= 11 && e.addedNodes.length) {
        for (let u = 0; u < e.addedNodes.length; u++) { let { previousSibling: d, nextSibling: f } = e.addedNodes[u]; (!d || Array.prototype.indexOf.call(e.addedNodes, d) < 0) && (i = d), (!f || Array.prototype.indexOf.call(e.addedNodes, f) < 0) && (s = f); }
      } let o = i && i.parentNode == e.target ? ee(i) + 1 : 0; let l = r.localPosFromDOM(e.target, o, -1); let a = s && s.parentNode == e.target ? ee(s) : e.target.childNodes.length; let c = r.localPosFromDOM(e.target, a, 1); return { from: l, to: c };
    }
    else {
      return e.type == "attributes" ? { from: r.posAtStart - r.border, to: r.posAtEnd + r.border } : (this.lastChangedTextNode = e.target, { from: r.posAtStart, to: r.posAtEnd, typeOver: e.target.nodeValue == e.oldValue });
    }
  }
} let ko = new WeakMap(); let xo = !1; function jd(n) {
  if (!ko.has(n) && (ko.set(n, null), ["normal", "nowrap", "pre-line"].includes(getComputedStyle(n.dom).whiteSpace))) {
    if (n.requiresGeckoHackNode = ke, xo)
      return; console.warn("ProseMirror expects the CSS white-space property to be set, preferably to 'pre-wrap'. It is recommended to load style/prosemirror.css from the prosemirror-view package."), xo = !0;
  }
} function So(n, e) { let t = e.startContainer; let r = e.startOffset; let i = e.endContainer; let s = e.endOffset; let o = n.domAtPos(n.state.selection.anchor); return bt(o.node, o.offset, i, s) && ([t, r, i, s] = [i, s, t, r]), { anchorNode: t, anchorOffset: r, focusNode: i, focusOffset: s }; } function Wd(n, e) {
  if (e.getComposedRanges) {
    let i = e.getComposedRanges(n.root)[0]; if (i)
      return So(n, i);
  } let t; function r(i) { i.preventDefault(), i.stopImmediatePropagation(), t = i.getTargetRanges()[0]; } return n.dom.addEventListener("beforeinput", r, !0), document.execCommand("indent"), n.dom.removeEventListener("beforeinput", r, !0), t ? So(n, t) : null;
} function Kd(n, e) {
  for (let t = e.parentNode; t && t != n.dom; t = t.parentNode) {
    let r = n.docView.nearestDesc(t, !0); if (r && r.node.isBlock)
      return t;
  } return null;
} function Ud(n, e, t) {
  let { node: r, fromOffset: i, toOffset: s, from: o, to: l } = n.docView.parseRange(e, t); let a = n.domSelectionRange(); let c; let u = a.anchorNode; if (u && n.dom.contains(u.nodeType == 1 ? u : u.parentNode) && (c = [{ node: u, offset: a.anchorOffset }], Or(a) || c.push({ node: a.focusNode, offset: a.focusOffset })), ie && n.input.lastKeyCode === 8) {
    for (let g = s; g > i; g--) {
      let y = r.childNodes[g - 1]; let S = y.pmViewDesc; if (y.nodeName == "BR" && !S) { s = g; break; } if (!S || S.size)
        break;
    }
  } let d = n.state.doc; let f = n.someProp("domParser") || Ge.fromSchema(n.state.schema); let h = d.resolve(o); let p = null; let m = f.parse(r, { topNode: h.parent, topMatch: h.parent.contentMatchAt(h.index()), topOpen: !0, from: i, to: s, preserveWhitespace: h.parent.type.whitespace == "pre" ? "full" : !0, findPositions: c, ruleFromNode: _d, context: h }); if (c && c[0].pos != null) { let g = c[0].pos; let y = c[1] && c[1].pos; y == null && (y = g), p = { anchor: g + o, head: y + o }; } return { doc: m, sel: p, from: o, to: l };
} function _d(n) {
  let e = n.pmViewDesc; if (e)
    return e.parseRule(); if (n.nodeName == "BR" && n.parentNode) {
    if (le && /^(ul|ol)$/i.test(n.parentNode.nodeName)) { let t = document.createElement("div"); return t.appendChild(document.createElement("li")), { skip: t }; }
    else if (n.parentNode.lastChild == n || le && /^(tr|table)$/i.test(n.parentNode.nodeName)) {
      return { ignore: !0 };
    }
  }
  else if (n.nodeName == "IMG" && n.getAttribute("mark-placeholder")) {
    return { ignore: !0 };
  } return null;
} const qd = /^([abiqsu]|abbr|acronym|bd[io]|big|br|button|cite|code|data(list)?|del|dfn|em|img|ins|kbd|label|map|mark|meter|output|ruby|samp|small|span|strong|su[bp]|time|tt|var)$/i; function Jd(n, e, t, r, i) {
  let s = n.input.compositionPendingChanges || (n.composing ? n.input.compositionID : 0); if (n.input.compositionPendingChanges = 0, e < 0) {
    let E = n.input.lastSelectionTime > Date.now() - 50 ? n.input.lastSelectionOrigin : null; let P = Gi(n, E); if (P && !n.state.selection.eq(P)) {
      if (ie && Pe && n.input.lastKeyCode === 13 && Date.now() - 100 < n.input.lastKeyCodeTime && n.someProp("handleKeyDown", zt => zt(n, st(13, "Enter"))))
        return; let _ = n.state.tr.setSelection(P); E == "pointer" ? _.setMeta("pointer", !0) : E == "key" && _.scrollIntoView(), s && _.setMeta("composition", s), n.dispatch(_);
    } return;
  } let o = n.state.doc.resolve(e); let l = o.sharedDepth(t); e = o.before(l + 1), t = n.state.doc.resolve(t).after(l + 1); let a = n.state.selection; let c = Ud(n, e, t); let u = n.state.doc; let d = u.slice(c.from, c.to); let f; let h; n.input.lastKeyCode === 8 && Date.now() - 100 < n.input.lastKeyCodeTime ? (f = n.state.selection.to, h = "end") : (f = n.state.selection.from, h = "start"), n.input.lastKeyCode = null; let p = Xd(d.content, c.doc.content, c.from, f, h); if (p && n.input.domChangeCount++, (Pt && n.input.lastIOSEnter > Date.now() - 225 || Pe) && i.some(E => E.nodeType == 1 && !qd.test(E.nodeName)) && (!p || p.endA >= p.endB) && n.someProp("handleKeyDown", E => E(n, st(13, "Enter")))) { n.input.lastIOSEnter = 0; return; } if (!p) {
    if (r && a instanceof A && !a.empty && a.$head.sameParent(a.$anchor) && !n.composing && !(c.sel && c.sel.anchor != c.sel.head)) {
      p = { start: a.from, endA: a.to, endB: a.to };
    }
    else { if (c.sel) { let E = Co(n, n.state.doc, c.sel); if (E && !E.eq(n.state.selection)) { let P = n.state.tr.setSelection(E); s && P.setMeta("composition", s), n.dispatch(P); } } return; }
  }n.state.selection.from < n.state.selection.to && p.start == p.endB && n.state.selection instanceof A && (p.start > n.state.selection.from && p.start <= n.state.selection.from + 2 && n.state.selection.from >= c.from ? p.start = n.state.selection.from : p.endA < n.state.selection.to && p.endA >= n.state.selection.to - 2 && n.state.selection.to <= c.to && (p.endB += n.state.selection.to - p.endA, p.endA = n.state.selection.to)), fe && Ye <= 11 && p.endB == p.start + 1 && p.endA == p.start && p.start > c.from && c.doc.textBetween(p.start - c.from - 1, p.start - c.from + 1) == "  " && (p.start--, p.endA--, p.endB--); let m = c.doc.resolveNoCache(p.start - c.from); let g = c.doc.resolveNoCache(p.endB - c.from); let y = u.resolve(p.start); let S = m.sameParent(g) && m.parent.inlineContent && y.end() >= p.endA; if ((Pt && n.input.lastIOSEnter > Date.now() - 225 && (!S || i.some(E => E.nodeName == "DIV" || E.nodeName == "P")) || !S && m.pos < c.doc.content.size && (!m.sameParent(g) || !m.parent.inlineContent) && m.pos < g.pos && !/\S/.test(c.doc.textBetween(m.pos, g.pos, "", ""))) && n.someProp("handleKeyDown", E => E(n, st(13, "Enter")))) { n.input.lastIOSEnter = 0; return; } if (n.state.selection.anchor > p.start && Yd(u, p.start, p.endA, m, g) && n.someProp("handleKeyDown", E => E(n, st(8, "Backspace")))) { Pe && ie && n.domObserver.suppressSelectionUpdates(); return; }ie && p.endB == p.start && (n.input.lastChromeDelete = Date.now()), Pe && !S && m.start() != g.start() && g.parentOffset == 0 && m.depth == g.depth && c.sel && c.sel.anchor == c.sel.head && c.sel.head == p.endA && (p.endB -= 2, g = c.doc.resolveNoCache(p.endB - c.from), setTimeout(() => { n.someProp("handleKeyDown", (E) => { return E(n, st(13, "Enter")); }); }, 20)); let O = p.start; let B = p.endA; let v = (E) => { let P = E || n.state.tr.replace(O, B, c.doc.slice(p.start - c.from, p.endB - c.from)); if (c.sel) { let _ = Co(n, P.doc, c.sel); _ && !(ie && n.composing && _.empty && (p.start != p.endB || n.input.lastChromeDelete < Date.now() - 100) && (_.head == O || _.head == P.mapping.map(B) - 1) || fe && _.empty && _.head == O) && P.setSelection(_); } return s && P.setMeta("composition", s), P.scrollIntoView(); }; let F; if (S) {
    if (m.pos == g.pos) { fe && Ye <= 11 && m.parentOffset == 0 && (n.domObserver.suppressSelectionUpdates(), setTimeout(() => Be(n), 20)); let E = v(n.state.tr.delete(O, B)); let P = u.resolve(p.start).marksAcross(u.resolve(p.endA)); P && E.ensureMarks(P), n.dispatch(E); }
    else if (p.endA == p.endB && (F = Gd(m.parent.content.cut(m.parentOffset, g.parentOffset), y.parent.content.cut(y.parentOffset, p.endA - y.start())))) { let E = v(n.state.tr); F.type == "add" ? E.addMark(O, B, F.mark) : E.removeMark(O, B, F.mark), n.dispatch(E); }
    else if (m.parent.child(m.index()).isText && m.index() == g.index() - (g.textOffset ? 0 : 1)) { let E = m.parent.textBetween(m.parentOffset, g.parentOffset); let P = () => v(n.state.tr.insertText(E, O, B)); n.someProp("handleTextInput", _ => _(n, O, B, E, P)) || n.dispatch(P()); }
    else {
      n.dispatch(v());
    }
  }
  else {
    n.dispatch(v());
  }
} function Co(n, e, t) { return Math.max(t.anchor, t.head) > e.content.size ? null : Yi(n, e.resolve(t.anchor), e.resolve(t.head)); } function Gd(n, e) {
  let t = n.firstChild.marks; let r = e.firstChild.marks; let i = t; let s = r; let o; let l; let a; for (let u = 0; u < r.length; u++)i = r[u].removeFromSet(i); for (let u = 0; u < t.length; u++)s = t[u].removeFromSet(s); if (i.length == 1 && s.length == 0)
    l = i[0], o = "add", a = u => u.mark(l.addToSet(u.marks)); else if (i.length == 0 && s.length == 1)
    l = s[0], o = "remove", a = u => u.mark(l.removeFromSet(u.marks)); else return null; let c = []; for (let u = 0; u < e.childCount; u++)c.push(a(e.child(u))); if (b.from(c).eq(n))
    return { mark: l, type: o };
} function Yd(n, e, t, r, i) {
  if (t - e <= i.pos - r.pos || Qr(r, !0, !1) < i.pos)
    return !1; let s = n.resolve(e); if (!r.parent.isTextblock) { let l = s.nodeAfter; return l != null && t == e + l.nodeSize; } if (s.parentOffset < s.parent.content.size || !s.parent.isTextblock)
    return !1; let o = n.resolve(Qr(s, !0, !0)); return !o.parent.isTextblock || o.pos > t || Qr(o, !0, !1) < t ? !1 : r.parent.content.cut(r.parentOffset).eq(o.parent.content);
} function Qr(n, e, t) { let r = n.depth; let i = e ? n.end() : n.pos; for (;r > 0 && (e || n.indexAfter(r) == n.node(r).childCount);)r--, i++, e = !1; if (t) { let s = n.node(r).maybeChild(n.indexAfter(r)); for (;s && !s.isLeaf;)s = s.firstChild, i++; } return i; } function Xd(n, e, t, r, i) {
  let s = n.findDiffStart(e, t); if (s == null)
    return null; let { a: o, b: l } = n.findDiffEnd(e, t + n.size, t + e.size); if (i == "end") { let a = Math.max(0, s - Math.min(o, l)); r -= o + a - s; } if (o < s && n.size < e.size) { let a = r <= s && r >= o ? s - r : 0; s -= a, s && s < e.size && Mo(e.textBetween(s - 1, s + 1)) && (s += a ? 1 : -1), l = s + (l - o), o = s; }
  else if (l < s) { let a = r <= s && r >= l ? s - r : 0; s -= a, s && s < n.size && Mo(n.textBetween(s - 1, s + 1)) && (s += a ? 1 : -1), o = s + (o - l), l = s; } return { start: s, endA: o, endB: l };
} function Mo(n) {
  if (n.length != 2)
    return !1; let e = n.charCodeAt(0); let t = n.charCodeAt(1); return e >= 56320 && e <= 57343 && t >= 55296 && t <= 56319;
} class ma {
  constructor(e, t) { this._root = null, this.focused = !1, this.trackWrites = null, this.mounted = !1, this.markCursor = null, this.cursorWrapper = null, this.lastSelectedViewDesc = void 0, this.input = new gd(), this.prevDirectPlugins = [], this.pluginViews = [], this.requiresGeckoHackNode = !1, this.dragging = null, this._props = t, this.state = t.state, this.directPlugins = t.plugins || [], this.directPlugins.forEach(Ao), this.dispatch = this.dispatch.bind(this), this.dom = e && e.mount || document.createElement("div"), e && (e.appendChild ? e.appendChild(this.dom) : typeof e == "function" ? e(this.dom) : e.mount && (this.mounted = !0)), this.editable = Eo(this), To(this), this.nodeViews = Oo(this), this.docView = ro(this.state.doc, wo(this), Xr(this), this.dom, this), this.domObserver = new Vd(this, (r, i, s, o) => Jd(this, r, i, s, o)), this.domObserver.start(), yd(this), this.updatePluginViews(); } get composing() { return this.input.composing; } get props() { if (this._props.state != this.state) { let e = this._props; this._props = {}; for (let t in e) this._props[t] = e[t]; this._props.state = this.state; } return this._props; }update(e) { e.handleDOMEvents != this._props.handleDOMEvents && vi(this); let t = this._props; this._props = e, e.plugins && (e.plugins.forEach(Ao), this.directPlugins = e.plugins), this.updateStateInner(e.state, t); }setProps(e) { let t = {}; for (let r in this._props)t[r] = this._props[r]; t.state = this.state; for (let r in e)t[r] = e[r]; this.update(t); }updateState(e) { this.updateStateInner(e, this._props); }updateStateInner(e, t) { let r; let i = this.state; let s = !1; let o = !1; e.storedMarks && this.composing && (aa(this), o = !0), this.state = e; let l = i.plugins != e.plugins || this._props.plugins != t.plugins; if (l || this._props.plugins != t.plugins || this._props.nodeViews != t.nodeViews) { let h = Oo(this); Zd(h, this.nodeViews) && (this.nodeViews = h, s = !0); }(l || t.handleDOMEvents != this._props.handleDOMEvents) && vi(this), this.editable = Eo(this), To(this); let a = Xr(this); let c = wo(this); let u = i.plugins != e.plugins && !i.doc.eq(e.doc) ? "reset" : e.scrollToSelection > i.scrollToSelection ? "to selection" : "preserve"; let d = s || !this.docView.matchesNode(e.doc, c, a); (d || !e.selection.eq(i.selection)) && (o = !0); let f = u == "preserve" && o && this.dom.style.overflowAnchor == null && Du(this); if (o) { this.domObserver.stop(); let h = d && (fe || ie) && !this.composing && !i.selection.empty && !e.selection.empty && Qd(i.selection, e.selection); if (d) { let p = ie ? this.trackWrites = this.domSelectionRange().focusNode : null; this.composing && (this.input.compositionNode = Nd(this)), (s || !this.docView.update(e.doc, c, a, this)) && (this.docView.updateOuterDeco(c), this.docView.destroy(), this.docView = ro(e.doc, c, a, this.dom, this)), p && !this.trackWrites && (h = !0); }h || !(this.input.mouseDown && this.domObserver.currentSelection.eq(this.domSelectionRange()) && td(this)) ? Be(this, h) : (Yl(this, e.selection), this.domObserver.setCurSelection()), this.domObserver.start(); } this.updatePluginViews(i), !((r = this.dragging) === null || r === void 0) && r.node && !i.doc.eq(e.doc) && this.updateDraggedNode(this.dragging, i), u == "reset" ? this.dom.scrollTop = 0 : u == "to selection" ? this.scrollToSelection() : f && Iu(f); }scrollToSelection() {
    let e = this.domSelectionRange().focusNode; if (!(!e || !this.dom.contains(e.nodeType == 1 ? e : e.parentNode))) {
      if (!this.someProp("handleScrollToSelection", t => t(this))) {
        if (this.state.selection instanceof T) { let t = this.docView.domAfterPos(this.state.selection.from); t.nodeType == 1 && Xs(this, t.getBoundingClientRect(), e); }
        else {
          Xs(this, this.coordsAtPos(this.state.selection.head, 1), e);
        }
      }
    }
  }

  destroyPluginViews() { let e; for (;e = this.pluginViews.pop();)e.destroy && e.destroy(); }updatePluginViews(e) {
    if (!e || e.plugins != this.state.plugins || this.directPlugins != this.prevDirectPlugins) { this.prevDirectPlugins = this.directPlugins, this.destroyPluginViews(); for (let t = 0; t < this.directPlugins.length; t++) { let r = this.directPlugins[t]; r.spec.view && this.pluginViews.push(r.spec.view(this)); } for (let t = 0; t < this.state.plugins.length; t++) { let r = this.state.plugins[t]; r.spec.view && this.pluginViews.push(r.spec.view(this)); } }
    else {
      for (let t = 0; t < this.pluginViews.length; t++) { let r = this.pluginViews[t]; r.update && r.update(this, e); }
    }
  }

  updateDraggedNode(e, t) {
    let r = e.node; let i = -1; if (this.state.doc.nodeAt(r.from) == r.node) {
      i = r.from;
    }
    else { let s = r.from + (this.state.doc.content.size - t.doc.content.size); (s > 0 && this.state.doc.nodeAt(s)) == r.node && (i = s); } this.dragging = new ua(e.slice, e.move, i < 0 ? void 0 : T.create(this.state.doc, i));
  }

  someProp(e, t) {
    let r = this._props && this._props[e]; let i; if (r != null && (i = t ? t(r) : r))
      return i; for (let o = 0; o < this.directPlugins.length; o++) {
      let l = this.directPlugins[o].props[e]; if (l != null && (i = t ? t(l) : l))
        return i;
    } let s = this.state.plugins; if (s) {
      for (let o = 0; o < s.length; o++) {
        let l = s[o].props[e]; if (l != null && (i = t ? t(l) : l))
          return i;
      }
    }
  }

  hasFocus() {
    if (fe) {
      let e = this.root.activeElement; if (e == this.dom)
        return !0; if (!e || !this.dom.contains(e))
        return !1; for (;e && this.dom != e && this.dom.contains(e);) {
        if (e.contentEditable == "false")
          return !1; e = e.parentElement;
      } return !0;
    } return this.root.activeElement == this.dom;
  }

  focus() { this.domObserver.stop(), this.editable && Ru(this.dom), Be(this), this.domObserver.start(); } get root() {
    let e = this._root; if (e == null) {
      for (let t = this.dom.parentNode; t; t = t.parentNode) {
        if (t.nodeType == 9 || t.nodeType == 11 && t.host)
          return t.getSelection || (Object.getPrototypeOf(t).getSelection = () => t.ownerDocument.getSelection()), this._root = t;
      }
    } return e || document;
  }

  updateRoot() { this._root = null; }posAtCoords(e) { return Fu(this, e); }coordsAtPos(e, t = 1) { return jl(this, e, t); }domAtPos(e, t = 0) { return this.docView.domFromPos(e, t); }nodeDOM(e) { let t = this.docView.descAt(e); return t ? t.nodeDOM : null; }posAtDOM(e, t, r = -1) {
    let i = this.docView.posFromDOM(e, t, r); if (i == null)
      throw new RangeError("DOM position not inside the editor"); return i;
  }

  endOfTextblock(e, t) { return Wu(this, t || this.state, e); }pasteHTML(e, t) { return ln(this, "", e, !1, t || new ClipboardEvent("paste")); }pasteText(e, t) { return ln(this, e, null, !0, t || new ClipboardEvent("paste")); }serializeForClipboard(e) { return Xi(this, e); }destroy() { this.docView && (bd(this), this.destroyPluginViews(), this.mounted ? (this.docView.update(this.state.doc, [], Xr(this), this), this.dom.textContent = "") : this.dom.parentNode && this.dom.parentNode.removeChild(this.dom), this.docView.destroy(), this.docView = null, xu()); } get isDestroyed() { return this.docView == null; }dispatchEvent(e) { return xd(this, e); }domSelectionRange() { let e = this.domSelection(); return e ? le && this.root.nodeType === 11 && Tu(this.dom.ownerDocument) == this.dom && Wd(this, e) || e : { focusNode: null, focusOffset: 0, anchorNode: null, anchorOffset: 0 }; }domSelection() { return this.root.getSelection(); }
}ma.prototype.dispatch = function (n) { let e = this._props.dispatchTransaction; e ? e.call(this, n) : this.updateState(this.state.apply(n)); }; function wo(n) {
  let e = Object.create(null); return e.class = "ProseMirror", e.contenteditable = String(n.editable), n.someProp("attributes", (t) => {
    if (typeof t == "function" && (t = t(n.state)), t) {
      for (let r in t)r == "class" ? e.class += ` ${t[r]}` : r == "style" ? e.style = (e.style ? `${e.style};` : "") + t[r] : !e[r] && r != "contenteditable" && r != "nodeName" && (e[r] = String(t[r]));
    }
  }), e.translate || (e.translate = "no"), [oe.node(0, n.state.doc.content.size, e)];
} function To(n) {
  if (n.markCursor) { let e = document.createElement("img"); e.className = "ProseMirror-separator", e.setAttribute("mark-placeholder", "true"), e.setAttribute("alt", ""), n.cursorWrapper = { dom: e, deco: oe.widget(n.state.selection.from, e, { raw: !0, marks: n.markCursor }) }; }
  else {
    n.cursorWrapper = null;
  }
} function Eo(n) { return !n.someProp("editable", e => e(n.state) === !1); } function Qd(n, e) { let t = Math.min(n.$anchor.sharedDepth(n.head), e.$anchor.sharedDepth(e.head)); return n.$anchor.start(t) != e.$anchor.start(t); } function Oo(n) { let e = Object.create(null); function t(r) { for (let i in r)Object.prototype.hasOwnProperty.call(e, i) || (e[i] = r[i]); } return n.someProp("nodeViews", t), n.someProp("markViews", t), e; } function Zd(n, e) {
  let t = 0; let r = 0; for (let i in n) {
    if (n[i] != e[i])
      return !0; t++;
  } for (let i in e)r++; return t != r;
} function Ao(n) {
  if (n.spec.state || n.spec.filterTransaction || n.spec.appendTransaction)
    throw new RangeError("Plugins passed directly to the view must not have a state component");
} let Ze = { 8: "Backspace", 9: "Tab", 10: "Enter", 12: "NumLock", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 44: "PrintScreen", 45: "Insert", 46: "Delete", 59: ";", 61: "=", 91: "Meta", 92: "Meta", 106: "*", 107: "+", 108: ",", 109: "-", 110: ".", 111: "/", 144: "NumLock", 145: "ScrollLock", 160: "Shift", 161: "Shift", 162: "Control", 163: "Control", 164: "Alt", 165: "Alt", 173: "-", 186: ";", 187: "=", 188: ",", 189: "-", 190: ".", 191: "/", 192: "`", 219: "[", 220: "\\", 221: "]", 222: "'" }; let qn = { 48: ")", 49: "!", 50: "@", 51: "#", 52: "$", 53: "%", 54: "^", 55: "&", 56: "*", 57: "(", 59: ":", 61: "+", 173: "_", 186: ":", 187: "+", 188: "<", 189: "_", 190: ">", 191: "?", 192: "~", 219: "{", 220: "|", 221: "}", 222: "\"" }; let ef = typeof navigator < "u" && /Mac/.test(navigator.platform); let tf = typeof navigator < "u" && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent); for (var te = 0; te < 10; te++)Ze[48 + te] = Ze[96 + te] = String(te); for (var te = 1; te <= 24; te++)Ze[te + 111] = `F${te}`; for (var te = 65; te <= 90; te++)Ze[te] = String.fromCharCode(te + 32), qn[te] = String.fromCharCode(te); for (let Zr in Ze)qn.hasOwnProperty(Zr) || (qn[Zr] = Ze[Zr]); function nf(n) { let e = ef && n.metaKey && n.shiftKey && !n.ctrlKey && !n.altKey || tf && n.shiftKey && n.key && n.key.length == 1 || n.key == "Unidentified"; let t = !e && n.key || (n.shiftKey ? qn : Ze)[n.keyCode] || n.key || "Unidentified"; return t == "Esc" && (t = "Escape"), t == "Del" && (t = "Delete"), t == "Left" && (t = "ArrowLeft"), t == "Up" && (t = "ArrowUp"), t == "Right" && (t = "ArrowRight"), t == "Down" && (t = "ArrowDown"), t; } const rf = typeof navigator < "u" && /Mac|iP(hone|[oa]d)/.test(navigator.platform); const sf = typeof navigator < "u" && /Win/.test(navigator.platform); function of(n) {
  let e = n.split(/-(?!$)/); let t = e[e.length - 1]; t == "Space" && (t = " "); let r, i, s, o; for (let l = 0; l < e.length - 1; l++) {
    let a = e[l]; if (/^(cmd|meta|m)$/i.test(a))
      o = !0; else if (/^a(lt)?$/i.test(a))
      r = !0; else if (/^(c|ctrl|control)$/i.test(a))
      i = !0; else if (/^s(hift)?$/i.test(a))
      s = !0; else if (/^mod$/i.test(a))
      rf ? o = !0 : i = !0; else throw new Error(`Unrecognized modifier name: ${a}`);
  } return r && (t = `Alt-${t}`), i && (t = `Ctrl-${t}`), o && (t = `Meta-${t}`), s && (t = `Shift-${t}`), t;
} function lf(n) { let e = Object.create(null); for (let t in n)e[of(t)] = n[t]; return e; } function ei(n, e, t = !0) { return e.altKey && (n = `Alt-${n}`), e.ctrlKey && (n = `Ctrl-${n}`), e.metaKey && (n = `Meta-${n}`), t && e.shiftKey && (n = `Shift-${n}`), n; } function af(n) { return new W({ props: { handleKeyDown: ga(n) } }); } function ga(n) {
  let e = lf(n); return function (t, r) {
    let i = nf(r); let s; let o = e[ei(i, r)]; if (o && o(t.state, t.dispatch, t))
      return !0; if (i.length == 1 && i != " ") {
      if (r.shiftKey) {
        let l = e[ei(i, r, !1)]; if (l && l(t.state, t.dispatch, t))
          return !0;
      } if ((r.altKey || r.metaKey || r.ctrlKey) && !(sf && r.ctrlKey && r.altKey) && (s = Ze[r.keyCode]) && s != i) {
        let l = e[ei(s, r)]; if (l && l(t.state, t.dispatch, t))
          return !0;
      }
    } return !1;
  };
} const rs = (n, e) => n.selection.empty ? !1 : (e && e(n.tr.deleteSelection().scrollIntoView()), !0); function ya(n, e) { let { $cursor: t } = n.selection; return !t || (e ? !e.endOfTextblock("backward", n) : t.parentOffset > 0) ? null : t; } function ba(n, e, t) {
  let r = ya(n, t); if (!r)
    return !1; let i = is(r); if (!i) { let o = r.blockRange(); let l = o && Bt(o); return l == null ? !1 : (e && e(n.tr.lift(o, l).scrollIntoView()), !0); } let s = i.nodeBefore; if (Oa(n, i, e, -1))
    return !0; if (r.parent.content.size == 0 && (Lt(s, "end") || T.isSelectable(s))) {
    for (let o = r.depth; ;o--) {
      let l = Tr(n.doc, r.before(o), r.after(o), x.empty); if (l && l.slice.size < l.to - l.from) { if (e) { let a = n.tr.step(l); a.setSelection(Lt(s, "end") ? I.findFrom(a.doc.resolve(a.mapping.map(i.pos, -1)), -1) : T.create(a.doc, i.pos - s.nodeSize)), e(a.scrollIntoView()); } return !0; } if (o == 1 || r.node(o - 1).childCount > 1)
        break;
    }
  } return s.isAtom && i.depth == r.depth - 1 ? (e && e(n.tr.delete(i.pos - s.nodeSize, i.pos).scrollIntoView()), !0) : !1;
} function cf(n, e, t) {
  let r = ya(n, t); if (!r)
    return !1; let i = is(r); return i ? ka(n, i, e) : !1;
} function uf(n, e, t) {
  let r = Sa(n, t); if (!r)
    return !1; let i = ss(r); return i ? ka(n, i, e) : !1;
} function ka(n, e, t) {
  let r = e.nodeBefore; let i = r; let s = e.pos - 1; for (;!i.isTextblock; s--) {
    if (i.type.spec.isolating)
      return !1; let u = i.lastChild; if (!u)
      return !1; i = u;
  } let o = e.nodeAfter; let l = o; let a = e.pos + 1; for (;!l.isTextblock; a++) {
    if (l.type.spec.isolating)
      return !1; let u = l.firstChild; if (!u)
      return !1; l = u;
  } let c = Tr(n.doc, s, a, x.empty); if (!c || c.from != s || c instanceof J && c.slice.size >= a - s)
    return !1; if (t) { let u = n.tr.step(c); u.setSelection(A.create(u.doc, s)), t(u.scrollIntoView()); } return !0;
} function Lt(n, e, t = !1) {
  for (let r = n; r; r = e == "start" ? r.firstChild : r.lastChild) {
    if (r.isTextblock)
      return !0; if (t && r.childCount != 1)
      return !1;
  } return !1;
} function xa(n, e, t) {
  let { $head: r, empty: i } = n.selection; let s = r; if (!i)
    return !1; if (r.parent.isTextblock) {
    if (t ? !t.endOfTextblock("backward", n) : r.parentOffset > 0)
      return !1; s = is(r);
  } let o = s && s.nodeBefore; return !o || !T.isSelectable(o) ? !1 : (e && e(n.tr.setSelection(T.create(n.doc, s.pos - o.nodeSize)).scrollIntoView()), !0);
} function is(n) {
  if (!n.parent.type.spec.isolating) {
    for (let e = n.depth - 1; e >= 0; e--) {
      if (n.index(e) > 0)
        return n.doc.resolve(n.before(e + 1)); if (n.node(e).type.spec.isolating)
        break;
    }
  } return null;
} function Sa(n, e) { let { $cursor: t } = n.selection; return !t || (e ? !e.endOfTextblock("forward", n) : t.parentOffset < t.parent.content.size) ? null : t; } function Ca(n, e, t) {
  let r = Sa(n, t); if (!r)
    return !1; let i = ss(r); if (!i)
    return !1; let s = i.nodeAfter; if (Oa(n, i, e, 1))
    return !0; if (r.parent.content.size == 0 && (Lt(s, "start") || T.isSelectable(s))) { let o = Tr(n.doc, r.before(), r.after(), x.empty); if (o && o.slice.size < o.to - o.from) { if (e) { let l = n.tr.step(o); l.setSelection(Lt(s, "start") ? I.findFrom(l.doc.resolve(l.mapping.map(i.pos)), 1) : T.create(l.doc, l.mapping.map(i.pos))), e(l.scrollIntoView()); } return !0; } } return s.isAtom && i.depth == r.depth - 1 ? (e && e(n.tr.delete(i.pos, i.pos + s.nodeSize).scrollIntoView()), !0) : !1;
} function Ma(n, e, t) {
  let { $head: r, empty: i } = n.selection; let s = r; if (!i)
    return !1; if (r.parent.isTextblock) {
    if (t ? !t.endOfTextblock("forward", n) : r.parentOffset < r.parent.content.size)
      return !1; s = ss(r);
  } let o = s && s.nodeAfter; return !o || !T.isSelectable(o) ? !1 : (e && e(n.tr.setSelection(T.create(n.doc, s.pos)).scrollIntoView()), !0);
} function ss(n) {
  if (!n.parent.type.spec.isolating) {
    for (let e = n.depth - 1; e >= 0; e--) {
      let t = n.node(e); if (n.index(e) + 1 < t.childCount)
        return n.doc.resolve(n.after(e + 1)); if (t.type.spec.isolating)
        break;
    }
  } return null;
} function df(n, e) {
  let t = n.selection; let r = t instanceof T; let i; if (r) {
    if (t.node.isTextblock || !tt(n.doc, t.from))
      return !1; i = t.from;
  }
  else if (i = wr(n.doc, t.from, -1), i == null) {
    return !1;
  } if (e) { let s = n.tr.join(i); r && s.setSelection(T.create(s.doc, i - n.doc.resolve(i).nodeBefore.nodeSize)), e(s.scrollIntoView()); } return !0;
} function ff(n, e) {
  let t = n.selection; let r; if (t instanceof T) {
    if (t.node.isTextblock || !tt(n.doc, t.to))
      return !1; r = t.to;
  }
  else if (r = wr(n.doc, t.to, 1), r == null) {
    return !1;
  } return e && e(n.tr.join(r).scrollIntoView()), !0;
} function hf(n, e) { let { $from: t, $to: r } = n.selection; let i = t.blockRange(r); let s = i && Bt(i); return s == null ? !1 : (e && e(n.tr.lift(i, s).scrollIntoView()), !0); } function wa(n, e) {
  let { $head: t, $anchor: r } = n.selection; return !t.parent.type.spec.code || !t.sameParent(r)
    ? !1
    : (e && e(n.tr.insertText(`
`).scrollIntoView()), !0);
} function ls(n) {
  for (let e = 0; e < n.edgeCount; e++) {
    let { type: t } = n.edge(e); if (t.isTextblock && !t.hasRequiredAttrs())
      return t;
  } return null;
} function pf(n, e) {
  let { $head: t, $anchor: r } = n.selection; if (!t.parent.type.spec.code || !t.sameParent(r))
    return !1; let i = t.node(-1); let s = t.indexAfter(-1); let o = ls(i.contentMatchAt(s)); if (!o || !i.canReplaceWith(s, s, o))
    return !1; if (e) { let l = t.after(); let a = n.tr.replaceWith(l, l, o.createAndFill()); a.setSelection(I.near(a.doc.resolve(l), 1)), e(a.scrollIntoView()); } return !0;
} function Ta(n, e) {
  let t = n.selection; let { $from: r, $to: i } = t; if (t instanceof pe || r.parent.inlineContent || i.parent.inlineContent)
    return !1; let s = ls(i.parent.contentMatchAt(i.indexAfter())); if (!s || !s.isTextblock)
    return !1; if (e) { let o = (!r.parentOffset && i.index() < i.parent.childCount ? r : i).pos; let l = n.tr.insert(o, s.createAndFill()); l.setSelection(A.create(l.doc, o + 1)), e(l.scrollIntoView()); } return !0;
} function Ea(n, e) {
  let { $cursor: t } = n.selection; if (!t || t.parent.content.size)
    return !1; if (t.depth > 1 && t.after() != t.end(-1)) {
    let s = t.before(); if (Le(n.doc, s))
      return e && e(n.tr.split(s).scrollIntoView()), !0;
  } let r = t.blockRange(); let i = r && Bt(r); return i == null ? !1 : (e && e(n.tr.lift(r, i).scrollIntoView()), !0);
} function mf(n) {
  return (e, t) => {
    let { $from: r, $to: i } = e.selection; if (e.selection instanceof T && e.selection.node.isBlock)
      return !r.parentOffset || !Le(e.doc, r.pos) ? !1 : (t && t(e.tr.split(r.pos).scrollIntoView()), !0); if (!r.depth)
      return !1; let s = []; let o; let l; let a = !1; let c = !1; for (let h = r.depth; ;h--) {
      if (r.node(h).isBlock) { a = r.end(h) == r.pos + (r.depth - h), c = r.start(h) == r.pos - (r.depth - h), l = ls(r.node(h - 1).contentMatchAt(r.indexAfter(h - 1))), s.unshift(a && l ? { type: l } : null), o = h; break; }
      else {
        if (h == 1)
          return !1; s.unshift(null);
      }
    } let u = e.tr; (e.selection instanceof A || e.selection instanceof pe) && u.deleteSelection(); let d = u.mapping.map(r.pos); let f = Le(u.doc, d, s.length, s); if (f || (s[0] = l ? { type: l } : null, f = Le(u.doc, d, s.length, s)), !f)
      return !1; if (u.split(d, s.length, s), !a && c && r.node(o).type != l) { let h = u.mapping.map(r.before(o)); let p = u.doc.resolve(h); l && r.node(o - 1).canReplaceWith(p.index(), p.index() + 1, l) && u.setNodeMarkup(u.mapping.map(r.before(o)), l); } return t && t(u.scrollIntoView()), !0;
  };
} const gf = mf(); function yf(n, e) { let { $from: t, to: r } = n.selection; let i; let s = t.sharedDepth(r); return s == 0 ? !1 : (i = t.before(s), e && e(n.tr.setSelection(T.create(n.doc, i))), !0); } function bf(n, e, t) { let r = e.nodeBefore; let i = e.nodeAfter; let s = e.index(); return !r || !i || !r.type.compatibleContent(i.type) ? !1 : !r.content.size && e.parent.canReplace(s - 1, s) ? (t && t(n.tr.delete(e.pos - r.nodeSize, e.pos).scrollIntoView()), !0) : !e.parent.canReplace(s, s + 1) || !(i.isTextblock || tt(n.doc, e.pos)) ? !1 : (t && t(n.tr.join(e.pos).scrollIntoView()), !0); } function Oa(n, e, t, r) {
  let i = e.nodeBefore; let s = e.nodeAfter; let o; let l; let a = i.type.spec.isolating || s.type.spec.isolating; if (!a && bf(n, e, t))
    return !0; let c = !a && e.parent.canReplace(e.index(), e.index() + 1); if (c && (o = (l = i.contentMatchAt(i.childCount)).findWrapping(s.type)) && l.matchType(o[0] || s.type).validEnd) { if (t) { let h = e.pos + s.nodeSize; let p = b.empty; for (let y = o.length - 1; y >= 0; y--)p = b.from(o[y].create(null, p)); p = b.from(i.copy(p)); let m = n.tr.step(new G(e.pos - 1, h, e.pos, h, new x(p, 1, 0), o.length, !0)); let g = m.doc.resolve(h + 2 * o.length); g.nodeAfter && g.nodeAfter.type == i.type && tt(m.doc, g.pos) && m.join(g.pos), t(m.scrollIntoView()); } return !0; } let u = s.type.spec.isolating || r > 0 && a ? null : I.findFrom(e, 1); let d = u && u.$from.blockRange(u.$to); let f = d && Bt(d); if (f != null && f >= e.depth)
    return t && t(n.tr.lift(d, f).scrollIntoView()), !0; if (c && Lt(s, "start", !0) && Lt(i, "end")) { let h = i; let p = []; for (;p.push(h), !h.isTextblock;)h = h.lastChild; let m = s; let g = 1; for (;!m.isTextblock; m = m.firstChild)g++; if (h.canReplace(h.childCount, h.childCount, m.content)) { if (t) { let y = b.empty; for (let O = p.length - 1; O >= 0; O--)y = b.from(p[O].copy(y)); let S = n.tr.step(new G(e.pos - p.length, e.pos + s.nodeSize, e.pos + g, e.pos + s.nodeSize - g, new x(y, p.length, 0), 0, !0)); t(S.scrollIntoView()); } return !0; } } return !1;
} function Aa(n) {
  return function (e, t) {
    let r = e.selection; let i = n < 0 ? r.$from : r.$to; let s = i.depth; for (;i.node(s).isInline;) {
      if (!s)
        return !1; s--;
    } return i.node(s).isTextblock ? (t && t(e.tr.setSelection(A.create(e.doc, n < 0 ? i.start(s) : i.end(s)))), !0) : !1;
  };
} const kf = Aa(-1); const xf = Aa(1); function Sf(n, e = null) { return function (t, r) { let { $from: i, $to: s } = t.selection; let o = i.blockRange(s); let l = o && _i(o, n, e); return l ? (r && r(t.tr.wrap(o, l).scrollIntoView()), !0) : !1; }; } function vo(n, e = null) {
  return function (t, r) {
    let i = !1; for (let s = 0; s < t.selection.ranges.length && !i; s++) {
      let { $from: { pos: o }, $to: { pos: l } } = t.selection.ranges[s]; t.doc.nodesBetween(o, l, (a, c) => {
        if (i)
          return !1; if (!(!a.isTextblock || a.hasMarkup(n, e))) {
          if (a.type == n) {
            i = !0;
          }
          else { let u = t.doc.resolve(c); let d = u.index(); i = u.parent.canReplaceWith(d, d + 1, n); }
        }
      });
    } if (!i)
      return !1; if (r) { let s = t.tr; for (let o = 0; o < t.selection.ranges.length; o++) { let { $from: { pos: l }, $to: { pos: a } } = t.selection.ranges[o]; s.setBlockType(l, a, n, e); }r(s.scrollIntoView()); } return !0;
  };
} function as(...n) {
  return function (e, t, r) {
    for (let i = 0; i < n.length; i++) {
      if (n[i](e, t, r))
        return !0;
    } return !1;
  };
}as(rs, ba, xa); as(rs, Ca, Ma); as(wa, Ta, Ea, gf); typeof navigator < "u" ? /Mac|iP(hone|[oa]d)/.test(navigator.platform) : typeof os < "u" && os.platform && os.platform() == "darwin"; function Cf(n, e = null) {
  return function (t, r) {
    let { $from: i, $to: s } = t.selection; let o = i.blockRange(s); if (!o)
      return !1; let l = r ? t.tr : null; return Mf(l, o, n, e) ? (r && r(l.scrollIntoView()), !0) : !1;
  };
} function Mf(n, e, t, r = null) {
  let i = !1; let s = e; let o = e.$from.doc; if (e.depth >= 2 && e.$from.node(e.depth - 1).type.compatibleContent(t) && e.startIndex == 0) {
    if (e.$from.index(e.depth - 1) == 0)
      return !1; let a = o.resolve(e.start - 2); s = new $n(a, a, e.depth), e.endIndex < e.parent.childCount && (e = new $n(e.$from, o.resolve(e.$to.end(e.depth)), e.depth)), i = !0;
  } let l = _i(s, t, r, e); return l ? (n && wf(n, e, l, i, t), !0) : !1;
} function wf(n, e, t, r, i) { let s = b.empty; for (let u = t.length - 1; u >= 0; u--)s = b.from(t[u].type.create(t[u].attrs, s)); n.step(new G(e.start - (r ? 2 : 0), e.end, e.start, e.end, new x(s, 0, 0), t.length, !0)); let o = 0; for (let u = 0; u < t.length; u++)t[u].type == i && (o = u + 1); let l = t.length - o; let a = e.start + t.length - (r ? 2 : 0); let c = e.parent; for (let u = e.startIndex, d = e.endIndex, f = !0; u < d; u++, f = !1)!f && Le(n.doc, a, l) && (n.split(a, l), a += 2 * l), a += c.child(u).nodeSize; return n; } function Tf(n) { return function (e, t) { let { $from: r, $to: i } = e.selection; let s = r.blockRange(i, o => o.childCount > 0 && o.firstChild.type == n); return s ? t ? r.node(s.depth - 1).type == n ? Ef(e, t, n, s) : Of(e, t, s) : !0 : !1; }; } function Ef(n, e, t, r) {
  let i = n.tr; let s = r.end; let o = r.$to.end(r.depth); s < o && (i.step(new G(s - 1, o, s, o, new x(b.from(t.create(null, r.parent.copy())), 1, 0), 1, !0)), r = new $n(i.doc.resolve(r.$from.pos), i.doc.resolve(o), r.depth)); const l = Bt(r); if (l == null)
    return !1; i.lift(r, l); let a = i.doc.resolve(i.mapping.map(s, -1) - 1); return tt(i.doc, a.pos) && a.nodeBefore.type == a.nodeAfter.type && i.join(a.pos), e(i.scrollIntoView()), !0;
} function Of(n, e, t) {
  let r = n.tr; let i = t.parent; for (let h = t.end, p = t.endIndex - 1, m = t.startIndex; p > m; p--)h -= i.child(p).nodeSize, r.delete(h - 1, h + 1); let s = r.doc.resolve(t.start); let o = s.nodeAfter; if (r.mapping.map(t.end) != t.start + s.nodeAfter.nodeSize)
    return !1; let l = t.startIndex == 0; let a = t.endIndex == i.childCount; let c = s.node(-1); let u = s.index(-1); if (!c.canReplace(u + (l ? 0 : 1), u + 1, o.content.append(a ? b.empty : b.from(i))))
    return !1; let d = s.pos; let f = d + o.nodeSize; return r.step(new G(d - (l ? 1 : 0), f + (a ? 1 : 0), d + 1, f - 1, new x((l ? b.empty : b.from(i.copy(b.empty))).append(a ? b.empty : b.from(i.copy(b.empty))), l ? 0 : 1, a ? 0 : 1), l ? 0 : 1)), e(r.scrollIntoView()), !0;
} function Af(n) {
  return function (e, t) {
    let { $from: r, $to: i } = e.selection; let s = r.blockRange(i, c => c.childCount > 0 && c.firstChild.type == n); if (!s)
      return !1; let o = s.startIndex; if (o == 0)
      return !1; let l = s.parent; let a = l.child(o - 1); if (a.type != n)
      return !1; if (t) { let c = a.lastChild && a.lastChild.type == l.type; let u = b.from(c ? n.create() : null); let d = new x(b.from(n.create(null, b.from(l.type.create(null, u)))), c ? 3 : 1, 0); let f = s.start; let h = s.end; t(e.tr.step(new G(f - (c ? 3 : 1), h, f, h, d, 1, !0)).scrollIntoView()); } return !0;
  };
} function Nr(n) { const { state: e, transaction: t } = n; let { selection: r } = t; let { doc: i } = t; let { storedMarks: s } = t; return { ...e, apply: e.apply.bind(e), applyTransaction: e.applyTransaction.bind(e), plugins: e.plugins, schema: e.schema, reconfigure: e.reconfigure.bind(e), toJSON: e.toJSON.bind(e), get storedMarks() { return s; }, get selection() { return r; }, get doc() { return i; }, get tr() { return r = t.selection, i = t.doc, s = t.storedMarks, t; } }; } class Dr {constructor(e) { this.editor = e.editor, this.rawCommands = this.editor.extensionManager.commands, this.customState = e.state; } get hasCustomState() { return !!this.customState; } get state() { return this.customState || this.editor.state; } get commands() { const { rawCommands: e, editor: t, state: r } = this; const { view: i } = t; const { tr: s } = r; const o = this.buildProps(s); return Object.fromEntries(Object.entries(e).map(([l, a]) => [l, (...u) => { const d = a(...u)(o); return !s.getMeta("preventDispatch") && !this.hasCustomState && i.dispatch(s), d; }])); } get chain() { return () => this.createChain(); } get can() { return () => this.createCan(); }createChain(e, t = !0) { const { rawCommands: r, editor: i, state: s } = this; const { view: o } = i; const l = []; const a = !!e; const c = e || s.tr; const u = () => (!a && t && !c.getMeta("preventDispatch") && !this.hasCustomState && o.dispatch(c), l.every(f => f === !0)); const d = { ...Object.fromEntries(Object.entries(r).map(([f, h]) => [f, (...m) => { const g = this.buildProps(c, t); const y = h(...m)(g); return l.push(y), d; }])), run: u }; return d; }createCan(e) { const { rawCommands: t, state: r } = this; const i = !1; const s = e || r.tr; const o = this.buildProps(s, i); return { ...Object.fromEntries(Object.entries(t).map(([a, c]) => [a, (...u) => c(...u)({ ...o, dispatch: void 0 })])), chain: () => this.createChain(s, i) }; }buildProps(e, t = !0) { const { rawCommands: r, editor: i, state: s } = this; const { view: o } = i; const l = { tr: e, editor: i, view: o, state: Nr({ state: s, transaction: e }), dispatch: t ? () => {} : void 0, chain: () => this.createChain(e, t), can: () => this.createCan(e), get commands() { return Object.fromEntries(Object.entries(r).map(([a, c]) => [a, (...u) => c(...u)(l)])); } }; return l; }} class vf {constructor() { this.callbacks = {}; }on(e, t) { return this.callbacks[e] || (this.callbacks[e] = []), this.callbacks[e].push(t), this; }emit(e, ...t) { const r = this.callbacks[e]; return r && r.forEach(i => i.apply(this, t)), this; }off(e, t) { const r = this.callbacks[e]; return r && (t ? this.callbacks[e] = r.filter(i => i !== t) : delete this.callbacks[e]), this; }once(e, t) { const r = (...i) => { this.off(e, r), t.apply(this, i); }; return this.on(e, r); }removeAllListeners() { this.callbacks = {}; }} function C(n, e, t) { return n.config[e] === void 0 && n.parent ? C(n.parent, e, t) : typeof n.config[e] == "function" ? n.config[e].bind({ ...t, parent: n.parent ? C(n.parent, e, t) : null }) : n.config[e]; } function Ir(n) { const e = n.filter(i => i.type === "extension"); const t = n.filter(i => i.type === "node"); const r = n.filter(i => i.type === "mark"); return { baseExtensions: e, nodeExtensions: t, markExtensions: r }; } function va(n) {
  const e = []; const { nodeExtensions: t, markExtensions: r } = Ir(n); const i = [...t, ...r]; const s = { default: null, rendered: !0, renderHTML: null, parseHTML: null, keepOnSplit: !0, isRequired: !1 }; return n.forEach((o) => {
    const l = { name: o.name, options: o.options, storage: o.storage, extensions: i }; const a = C(o, "addGlobalAttributes", l); if (!a)
      return; a().forEach((u) => { u.types.forEach((d) => { Object.entries(u.attributes).forEach(([f, h]) => { e.push({ type: d, name: f, attribute: { ...s, ...h } }); }); }); });
  }), i.forEach((o) => {
    const l = { name: o.name, options: o.options, storage: o.storage }; const a = C(o, "addAttributes", l); if (!a)
      return; const c = a(); Object.entries(c).forEach(([u, d]) => { const f = { ...s, ...d }; typeof f?.default == "function" && (f.default = f.default()), f?.isRequired && f?.default === void 0 && delete f.default, e.push({ type: o.name, name: u, attribute: f }); });
  }), e;
} function X(n, e) {
  if (typeof n == "string") {
    if (!e.nodes[n])
      throw new Error(`There is no node type named '${n}'. Maybe you forgot to add the extension?`); return e.nodes[n];
  } return n;
} function K(...n) {
  return n.filter(e => !!e).reduce((e, t) => {
    const r = { ...e }; return Object.entries(t).forEach(([i, s]) => {
      if (!r[i]) { r[i] = s; return; } if (i === "class") { const l = s ? String(s).split(" ") : []; const a = r[i] ? r[i].split(" ") : []; const c = l.filter(u => !a.includes(u)); r[i] = [...a, ...c].join(" "); }
      else if (i === "style") { const l = s ? s.split(";").map(u => u.trim()).filter(Boolean) : []; const a = r[i] ? r[i].split(";").map(u => u.trim()).filter(Boolean) : []; const c = new Map(); a.forEach((u) => { const [d, f] = u.split(":").map(h => h.trim()); c.set(d, f); }), l.forEach((u) => { const [d, f] = u.split(":").map(h => h.trim()); c.set(d, f); }), r[i] = Array.from(c.entries()).map(([u, d]) => `${u}: ${d}`).join("; "); }
      else {
        r[i] = s;
      }
    }), r;
  }, {});
} function Ni(n, e) { return e.filter(t => t.type === n.type.name).filter(t => t.attribute.rendered).map(t => t.attribute.renderHTML ? t.attribute.renderHTML(n.attrs) || {} : { [t.name]: n.attrs[t.name] }).reduce((t, r) => K(t, r), {}); } function Na(n) { return typeof n == "function"; } function D(n, e = void 0, ...t) { return Na(n) ? e ? n.bind(e)(...t) : n(...t) : n; } function Nf(n = {}) { return Object.keys(n).length === 0 && n.constructor === Object; } function Df(n) { return typeof n != "string" ? n : n.match(/^[+-]?(?:\d*\.)?\d+$/) ? Number(n) : n === "true" ? !0 : n === "false" ? !1 : n; } function No(n, e) {
  return "style" in n
    ? n
    : { ...n, getAttrs: (t) => {
        const r = n.getAttrs ? n.getAttrs(t) : n.attrs; if (r === !1)
          return !1; const i = e.reduce((s, o) => { const l = o.attribute.parseHTML ? o.attribute.parseHTML(t) : Df(t.getAttribute(o.name)); return l == null ? s : { ...s, [o.name]: l }; }, {}); return { ...r, ...i };
      } };
} function Do(n) { return Object.fromEntries(Object.entries(n).filter(([e, t]) => e === "attrs" && Nf(t) ? !1 : t != null)); } function If(n, e) { let t; const r = va(n); const { nodeExtensions: i, markExtensions: s } = Ir(n); const o = (t = i.find(c => C(c, "topNode"))) === null || t === void 0 ? void 0 : t.name; const l = Object.fromEntries(i.map((c) => { const u = r.filter(y => y.type === c.name); const d = { name: c.name, options: c.options, storage: c.storage, editor: e }; const f = n.reduce((y, S) => { const O = C(S, "extendNodeSchema", d); return { ...y, ...O ? O(c) : {} }; }, {}); const h = Do({ ...f, content: D(C(c, "content", d)), marks: D(C(c, "marks", d)), group: D(C(c, "group", d)), inline: D(C(c, "inline", d)), atom: D(C(c, "atom", d)), selectable: D(C(c, "selectable", d)), draggable: D(C(c, "draggable", d)), code: D(C(c, "code", d)), whitespace: D(C(c, "whitespace", d)), linebreakReplacement: D(C(c, "linebreakReplacement", d)), defining: D(C(c, "defining", d)), isolating: D(C(c, "isolating", d)), attrs: Object.fromEntries(u.map((y) => { let S; return [y.name, { default: (S = y?.attribute) === null || S === void 0 ? void 0 : S.default }]; })) }); const p = D(C(c, "parseHTML", d)); p && (h.parseDOM = p.map(y => No(y, u))); const m = C(c, "renderHTML", d); m && (h.toDOM = y => m({ node: y, HTMLAttributes: Ni(y, u) })); const g = C(c, "renderText", d); return g && (h.toText = g), [c.name, h]; })); const a = Object.fromEntries(s.map((c) => { const u = r.filter(g => g.type === c.name); const d = { name: c.name, options: c.options, storage: c.storage, editor: e }; const f = n.reduce((g, y) => { const S = C(y, "extendMarkSchema", d); return { ...g, ...S ? S(c) : {} }; }, {}); const h = Do({ ...f, inclusive: D(C(c, "inclusive", d)), excludes: D(C(c, "excludes", d)), group: D(C(c, "group", d)), spanning: D(C(c, "spanning", d)), code: D(C(c, "code", d)), attrs: Object.fromEntries(u.map((g) => { let y; return [g.name, { default: (y = g?.attribute) === null || y === void 0 ? void 0 : y.default }]; })) }); const p = D(C(c, "parseHTML", d)); p && (h.parseDOM = p.map(g => No(g, u))); const m = C(c, "renderHTML", d); return m && (h.toDOM = g => m({ mark: g, HTMLAttributes: Ni(g, u) })), [c.name, h]; })); return new yl({ topNode: o, nodes: l, marks: a }); } function ti(n, e) { return e.nodes[n] || e.marks[n] || null; } function Io(n, e) { return Array.isArray(e) ? e.some(t => (typeof t == "string" ? t : t.name) === n.name) : e; } function cs(n, e) { const t = St.fromSchema(e).serializeFragment(n); const i = document.implementation.createHTMLDocument().createElement("div"); return i.appendChild(t), i.innerHTML; } function Rf(n, e = 500) { let t = ""; const r = n.parentOffset; return n.parent.nodesBetween(Math.max(0, r - e), r, (i, s, o, l) => { let a, c; const u = ((c = (a = i.type.spec).toText) === null || c === void 0 ? void 0 : c.call(a, { node: i, pos: s, parent: o, index: l })) || i.textContent || "%leaf%"; t += i.isAtom && !i.isText ? u : u.slice(0, Math.max(0, r - s)); }), t; } function us(n) { return Object.prototype.toString.call(n) === "[object RegExp]"; } class Rr {constructor(e) { this.find = e.find, this.handler = e.handler; }} function Pf(n, e) {
  if (us(e))
    return e.exec(n); const t = e(n); if (!t)
    return null; const r = [t.text]; return r.index = t.index, r.input = n, r.data = t.data, t.replaceWith && (t.text.includes(t.replaceWith) || console.warn("[tiptap warn]: \"inputRuleMatch.replaceWith\" must be part of \"inputRuleMatch.text\"."), r.push(t.replaceWith)), r;
} function Cn(n) {
  let e; const { editor: t, from: r, to: i, text: s, rules: o, plugin: l } = n; const { view: a } = t; if (a.composing)
    return !1; const c = a.state.doc.resolve(r); if (c.parent.type.spec.code || !((e = c.nodeBefore || c.nodeAfter) === null || e === void 0) && e.marks.find(f => f.type.spec.code))
    return !1; let u = !1; const d = Rf(c) + s; return o.forEach((f) => {
    if (u)
      return; const h = Pf(d, f.find); if (!h)
      return; const p = a.state.tr; const m = Nr({ state: a.state, transaction: p }); const g = { from: r - (h[0].length - s.length), to: i }; const { commands: y, chain: S, can: O } = new Dr({ editor: t, state: m }); f.handler({ state: m, range: g, match: h, commands: y, chain: S, can: O }) === null || !p.steps.length || (p.setMeta(l, { transform: p, from: r, to: i, text: s }), a.dispatch(p), u = !0);
  }), u;
} function Lf(n) {
  const { editor: e, rules: t } = n; const r = new W({ state: { init() { return null; }, apply(i, s, o) {
    const l = i.getMeta(r); if (l)
      return l; const a = i.getMeta("applyInputRules"); return !!a && setTimeout(() => { let { text: u } = a; typeof u == "string" ? u = u : u = cs(b.from(u), o.schema); const { from: d } = a; const f = d + u.length; Cn({ editor: e, from: d, to: f, text: u, rules: t, plugin: r }); }), i.selectionSet || i.docChanged ? null : s;
  } }, props: { handleTextInput(i, s, o, l) { return Cn({ editor: e, from: s, to: o, text: l, rules: t, plugin: r }); }, handleDOMEvents: { compositionend: i => (setTimeout(() => { const { $cursor: s } = i.state.selection; s && Cn({ editor: e, from: s.pos, to: s.pos, text: "", rules: t, plugin: r }); }), !1) }, handleKeyDown(i, s) {
    if (s.key !== "Enter")
      return !1; const { $cursor: o } = i.state.selection; return o
      ? Cn({ editor: e, from: o.pos, to: o.pos, text: `
`, rules: t, plugin: r })
      : !1;
  } }, isInputRules: !0 }); return r;
} function Bf(n) { return Object.prototype.toString.call(n).slice(8, -1); } function Mn(n) { return Bf(n) !== "Object" ? !1 : n.constructor === Object && Object.getPrototypeOf(n) === Object.prototype; } function Pr(n, e) { const t = { ...n }; return Mn(n) && Mn(e) && Object.keys(e).forEach((r) => { Mn(e[r]) && Mn(n[r]) ? t[r] = Pr(n[r], e[r]) : t[r] = e[r]; }), t; } class Se {
  constructor(e = {}) { this.type = "mark", this.name = "mark", this.parent = null, this.child = null, this.config = { name: this.name, defaultOptions: {} }, this.config = { ...this.config, ...e }, this.name = this.config.name, e.defaultOptions && Object.keys(e.defaultOptions).length > 0 && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${this.name}".`), this.options = this.config.defaultOptions, this.config.addOptions && (this.options = D(C(this, "addOptions", { name: this.name }))), this.storage = D(C(this, "addStorage", { name: this.name, options: this.options })) || {}; } static create(e = {}) { return new Se(e); }configure(e = {}) { const t = this.extend({ ...this.config, addOptions: () => Pr(this.options, e) }); return t.name = this.name, t.parent = this.parent, t; }extend(e = {}) { const t = new Se(e); return t.parent = this, this.child = t, t.name = e.name ? e.name : t.parent.name, e.defaultOptions && Object.keys(e.defaultOptions).length > 0 && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${t.name}".`), t.options = D(C(t, "addOptions", { name: t.name })), t.storage = D(C(t, "addStorage", { name: t.name, options: t.options })), t; } static handleExit({ editor: e, mark: t }) {
    const { tr: r } = e.state; const i = e.state.selection.$from; if (i.pos === i.end()) {
      const o = i.marks(); if (!o.find(c => c?.type.name === t.name))
        return !1; const a = o.find(c => c?.type.name === t.name); return a && r.removeStoredMark(a), r.insertText(" ", i.pos), e.view.dispatch(r), !0;
    } return !1;
  }
} function zf(n) { return typeof n == "number"; } class Ff {constructor(e) { this.find = e.find, this.handler = e.handler; }} function Hf(n, e, t) {
  if (us(e))
    return [...n.matchAll(e)]; const r = e(n, t); return r ? r.map((i) => { const s = [i.text]; return s.index = i.index, s.input = n, s.data = i.data, i.replaceWith && (i.text.includes(i.replaceWith) || console.warn("[tiptap warn]: \"pasteRuleMatch.replaceWith\" must be part of \"pasteRuleMatch.text\"."), s.push(i.replaceWith)), s; }) : [];
} function $f(n) {
  const { editor: e, state: t, from: r, to: i, rule: s, pasteEvent: o, dropEvent: l } = n; const { commands: a, chain: c, can: u } = new Dr({ editor: e, state: t }); const d = []; return t.doc.nodesBetween(r, i, (h, p) => {
    if (!h.isTextblock || h.type.spec.code)
      return; const m = Math.max(r, p); const g = Math.min(i, p + h.content.size); const y = h.textBetween(m - p, g - p, void 0, "￼"); Hf(y, s.find, o).forEach((O) => {
      if (O.index === void 0)
        return; const B = m + O.index + 1; const v = B + O[0].length; const F = { from: t.tr.mapping.map(B), to: t.tr.mapping.map(v) }; const E = s.handler({ state: t, range: F, match: O, commands: a, chain: c, can: u, pasteEvent: o, dropEvent: l }); d.push(E);
    });
  }), d.every(h => h !== null);
} let wn = null; function Vf(n) { let e; const t = new ClipboardEvent("paste", { clipboardData: new DataTransfer() }); return (e = t.clipboardData) === null || e === void 0 || e.setData("text/html", n), t; } function jf(n) {
  const { editor: e, rules: t } = n; let r = null; let i = !1; let s = !1; let o = typeof ClipboardEvent < "u" ? new ClipboardEvent("paste") : null; let l; try { l = typeof DragEvent < "u" ? new DragEvent("drop") : null; }
  catch { l = null; } const a = ({ state: u, from: d, to: f, rule: h, pasteEvt: p }) => {
    const m = u.tr; const g = Nr({ state: u, transaction: m }); if (!(!$f({ editor: e, state: g, from: Math.max(d - 1, 0), to: f.b - 1, rule: h, pasteEvent: p, dropEvent: l }) || !m.steps.length)) {
      try { l = typeof DragEvent < "u" ? new DragEvent("drop") : null; }
      catch { l = null; } return o = typeof ClipboardEvent < "u" ? new ClipboardEvent("paste") : null, m;
    }
  }; return t.map(u => new W({ view(d) { const f = (p) => { let m; r = !((m = d.dom.parentElement) === null || m === void 0) && m.contains(p.target) ? d.dom.parentElement : null, r && (wn = e); }; const h = () => { wn && (wn = null); }; return window.addEventListener("dragstart", f), window.addEventListener("dragend", h), { destroy() { window.removeEventListener("dragstart", f), window.removeEventListener("dragend", h); } }; }, props: { handleDOMEvents: { drop: (d, f) => { if (s = r === d.dom.parentElement, l = f, !s) { const h = wn; h?.isEditable && setTimeout(() => { const p = h.state.selection; p && h.commands.deleteRange({ from: p.from, to: p.to }); }, 10); } return !1; }, paste: (d, f) => { let h; const p = (h = f.clipboardData) === null || h === void 0 ? void 0 : h.getData("text/html"); return o = f, i = !!p?.includes("data-pm-slice"), !1; } } }, appendTransaction: (d, f, h) => {
    const p = d[0]; const m = p.getMeta("uiEvent") === "paste" && !i; const g = p.getMeta("uiEvent") === "drop" && !s; const y = p.getMeta("applyPasteRules"); const S = !!y; if (!m && !g && !S)
      return; if (S) { let { text: v } = y; typeof v == "string" ? v = v : v = cs(b.from(v), h.schema); const { from: F } = y; const E = F + v.length; const P = Vf(v); return a({ rule: u, state: h, from: F, to: { b: E }, pasteEvt: P }); } const O = f.doc.content.findDiffStart(h.doc.content); const B = f.doc.content.findDiffEnd(h.doc.content); if (!(!zf(O) || !B || O === B.b))
      return a({ rule: u, state: h, from: O, to: B, pasteEvt: o });
  } }));
} function Wf(n) { const e = n.filter((t, r) => n.indexOf(t) !== r); return Array.from(new Set(e)); } class vt {
  constructor(e, t) { this.splittableMarks = [], this.editor = t, this.extensions = vt.resolve(e), this.schema = If(this.extensions, t), this.setupExtensions(); } static resolve(e) { const t = vt.sort(vt.flatten(e)); const r = Wf(t.map(i => i.name)); return r.length && console.warn(`[tiptap warn]: Duplicate extension names found: [${r.map(i => `'${i}'`).join(", ")}]. This can lead to issues.`), t; } static flatten(e) { return e.map((t) => { const r = { name: t.name, options: t.options, storage: t.storage }; const i = C(t, "addExtensions", r); return i ? [t, ...this.flatten(i())] : t; }).flat(10); } static sort(e) { return e.sort((r, i) => { const s = C(r, "priority") || 100; const o = C(i, "priority") || 100; return s > o ? -1 : s < o ? 1 : 0; }); } get commands() { return this.extensions.reduce((e, t) => { const r = { name: t.name, options: t.options, storage: t.storage, editor: this.editor, type: ti(t.name, this.schema) }; const i = C(t, "addCommands", r); return i ? { ...e, ...i() } : e; }, {}); } get plugins() { const { editor: e } = this; const t = vt.sort([...this.extensions].reverse()); const r = []; const i = []; const s = t.map((o) => { const l = { name: o.name, options: o.options, storage: o.storage, editor: e, type: ti(o.name, this.schema) }; const a = []; const c = C(o, "addKeyboardShortcuts", l); let u = {}; if (o.type === "mark" && C(o, "exitable", l) && (u.ArrowRight = () => Se.handleExit({ editor: e, mark: o })), c) { const m = Object.fromEntries(Object.entries(c()).map(([g, y]) => [g, () => y({ editor: e })])); u = { ...u, ...m }; } const d = af(u); a.push(d); const f = C(o, "addInputRules", l); Io(o, e.options.enableInputRules) && f && r.push(...f()); const h = C(o, "addPasteRules", l); Io(o, e.options.enablePasteRules) && h && i.push(...h()); const p = C(o, "addProseMirrorPlugins", l); if (p) { const m = p(); a.push(...m); } return a; }).flat(); return [Lf({ editor: e, rules: r }), ...jf({ editor: e, rules: i }), ...s]; } get attributes() { return va(this.extensions); } get nodeViews() {
    const { editor: e } = this; const { nodeExtensions: t } = Ir(this.extensions); return Object.fromEntries(t.filter(r => !!C(r, "addNodeView")).map((r) => {
      const i = this.attributes.filter(a => a.type === r.name); const s = { name: r.name, options: r.options, storage: r.storage, editor: e, type: X(r.name, this.schema) }; const o = C(r, "addNodeView", s); if (!o)
        return []; const l = (a, c, u, d, f) => { const h = Ni(a, i); return o()({ node: a, view: c, getPos: u, decorations: d, innerDecorations: f, editor: e, extension: r, HTMLAttributes: h }); }; return [r.name, l];
    }));
  }

  setupExtensions() { this.extensions.forEach((e) => { let t; this.editor.extensionStorage[e.name] = e.storage; const r = { name: e.name, options: e.options, storage: e.storage, editor: this.editor, type: ti(e.name, this.schema) }; e.type === "mark" && (!((t = D(C(e, "keepOnSplit", r))) !== null && t !== void 0) || t) && this.splittableMarks.push(e.name); const i = C(e, "onBeforeCreate", r); const s = C(e, "onCreate", r); const o = C(e, "onUpdate", r); const l = C(e, "onSelectionUpdate", r); const a = C(e, "onTransaction", r); const c = C(e, "onFocus", r); const u = C(e, "onBlur", r); const d = C(e, "onDestroy", r); i && this.editor.on("beforeCreate", i), s && this.editor.on("create", s), o && this.editor.on("update", o), l && this.editor.on("selectionUpdate", l), a && this.editor.on("transaction", a), c && this.editor.on("focus", c), u && this.editor.on("blur", u), d && this.editor.on("destroy", d); }); }
} class L {constructor(e = {}) { this.type = "extension", this.name = "extension", this.parent = null, this.child = null, this.config = { name: this.name, defaultOptions: {} }, this.config = { ...this.config, ...e }, this.name = this.config.name, e.defaultOptions && Object.keys(e.defaultOptions).length > 0 && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${this.name}".`), this.options = this.config.defaultOptions, this.config.addOptions && (this.options = D(C(this, "addOptions", { name: this.name }))), this.storage = D(C(this, "addStorage", { name: this.name, options: this.options })) || {}; } static create(e = {}) { return new L(e); }configure(e = {}) { const t = this.extend({ ...this.config, addOptions: () => Pr(this.options, e) }); return t.name = this.name, t.parent = this.parent, t; }extend(e = {}) { const t = new L({ ...this.config, ...e }); return t.parent = this, this.child = t, t.name = e.name ? e.name : t.parent.name, e.defaultOptions && Object.keys(e.defaultOptions).length > 0 && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${t.name}".`), t.options = D(C(t, "addOptions", { name: t.name })), t.storage = D(C(t, "addStorage", { name: t.name, options: t.options })), t; }} function Da(n, e, t) {
  const { from: r, to: i } = e; const { blockSeparator: s = `

`, textSerializers: o = {} } = t || {}; let l = ""; return n.nodesBetween(r, i, (a, c, u, d) => {
    let f; a.isBlock && c > r && (l += s); const h = o?.[a.type.name]; if (h)
      return u && (l += h({ node: a, pos: c, parent: u, index: d, range: e })), !1; a.isText && (l += (f = a?.text) === null || f === void 0 ? void 0 : f.slice(Math.max(r, c) - c, i - c));
  }), l;
} function Ia(n) { return Object.fromEntries(Object.entries(n.nodes).filter(([,e]) => e.spec.toText).map(([e, t]) => [e, t.spec.toText])); } const Kf = L.create({ name: "clipboardTextSerializer", addOptions() { return { blockSeparator: void 0 }; }, addProseMirrorPlugins() { return [new W({ key: new Q("clipboardTextSerializer"), props: { clipboardTextSerializer: () => { const { editor: n } = this; const { state: e, schema: t } = n; const { doc: r, selection: i } = e; const { ranges: s } = i; const o = Math.min(...s.map(u => u.$from.pos)); const l = Math.max(...s.map(u => u.$to.pos)); const a = Ia(t); return Da(r, { from: o, to: l }, { ...this.options.blockSeparator !== void 0 ? { blockSeparator: this.options.blockSeparator } : {}, textSerializers: a }); } } })]; } }); const Uf = () => ({ editor: n, view: e }) => (requestAnimationFrame(() => { let t; n.isDestroyed || (e.dom.blur(), (t = window?.getSelection()) === null || t === void 0 || t.removeAllRanges()); }), !0); const _f = (n = !1) => ({ commands: e }) => e.setContent("", n); function qf() {
  return ({ state: n, tr: e, dispatch: t }) => {
    const { selection: r } = e; const { ranges: i } = r; return t && i.forEach(({ $from: s, $to: o }) => {
      n.doc.nodesBetween(s.pos, o.pos, (l, a) => {
        if (l.type.isText)
          return; const { doc: c, mapping: u } = e; const d = c.resolve(u.map(a)); const f = c.resolve(u.map(a + l.nodeSize)); const h = d.blockRange(f); if (!h)
          return; const p = Bt(h); if (l.type.isTextblock) { const { defaultType: m } = d.parent.contentMatchAt(d.index()); e.setNodeMarkup(h.start, m); }(p || p === 0) && e.lift(h, p);
      });
    }), !0;
  };
} const Jf = n => e => n(e); const Gf = () => ({ state: n, dispatch: e }) => Ta(n, e); const Yf = (n, e) => ({ editor: t, tr: r }) => { const { state: i } = t; const s = i.doc.slice(n.from, n.to); r.deleteRange(n.from, n.to); const o = r.mapping.map(e); return r.insert(o, s.content), r.setSelection(new A(r.doc.resolve(Math.max(o - 1, 0)))), !0; }; function Xf() {
  return ({ tr: n, dispatch: e }) => {
    const { selection: t } = n; const r = t.$anchor.node(); if (r.content.size > 0)
      return !1; const i = n.selection.$anchor; for (let s = i.depth; s > 0; s -= 1) {
      if (i.node(s).type === r.type) { if (e) { const l = i.before(s); const a = i.after(s); n.delete(l, a).scrollIntoView(); } return !0; }
    } return !1;
  };
} function Qf(n) {
  return ({ tr: e, state: t, dispatch: r }) => {
    const i = X(n, t.schema); const s = e.selection.$anchor; for (let o = s.depth; o > 0; o -= 1) {
      if (s.node(o).type === i) { if (r) { const a = s.before(o); const c = s.after(o); e.delete(a, c).scrollIntoView(); } return !0; }
    } return !1;
  };
} const Zf = n => ({ tr: e, dispatch: t }) => { const { from: r, to: i } = n; return t && e.delete(r, i), !0; }; const eh = () => ({ state: n, dispatch: e }) => rs(n, e); const th = () => ({ commands: n }) => n.keyboardShortcut("Enter"); const nh = () => ({ state: n, dispatch: e }) => pf(n, e); function Jn(n, e, t = { strict: !0 }) { const r = Object.keys(e); return r.length ? r.every(i => t.strict ? e[i] === n[i] : us(e[i]) ? e[i].test(n[i]) : e[i] === n[i]) : !0; } function Ra(n, e, t = {}) { return n.find(r => r.type === e && Jn(Object.fromEntries(Object.keys(t).map(i => [i, r.attrs[i]])), t)); } function Ro(n, e, t = {}) { return !!Ra(n, e, t); } function ds(n, e, t) {
  let r; if (!n || !e)
    return; let i = n.parent.childAfter(n.parentOffset); if ((!i.node || !i.node.marks.some(u => u.type === e)) && (i = n.parent.childBefore(n.parentOffset)), !i.node || !i.node.marks.some(u => u.type === e) || (t = t || ((r = i.node.marks[0]) === null || r === void 0 ? void 0 : r.attrs), !Ra([...i.node.marks], e, t)))
    return; let o = i.index; let l = n.start() + i.offset; let a = o + 1; let c = l + i.node.nodeSize; for (;o > 0 && Ro([...n.parent.child(o - 1).marks], e, t);)o -= 1, l -= n.parent.child(o).nodeSize; for (;a < n.parent.childCount && Ro([...n.parent.child(a).marks], e, t);)c += n.parent.child(a).nodeSize, a += 1; return { from: l, to: c };
} function rt(n, e) {
  if (typeof n == "string") {
    if (!e.marks[n])
      throw new Error(`There is no mark type named '${n}'. Maybe you forgot to add the extension?`); return e.marks[n];
  } return n;
} const rh = (n, e = {}) => ({ tr: t, state: r, dispatch: i }) => { const s = rt(n, r.schema); const { doc: o, selection: l } = t; const { $from: a, from: c, to: u } = l; if (i) { const d = ds(a, s, e); if (d && d.from <= c && d.to >= u) { const f = A.create(o, d.from, d.to); t.setSelection(f); } } return !0; }; function ih(n) {
  return (e) => {
    const t = typeof n == "function" ? n(e) : n; for (let r = 0; r < t.length; r += 1) {
      if (t[r](e))
        return !0;
    } return !1;
  };
} function Pa(n) { return n instanceof A; } function ct(n = 0, e = 0, t = 0) { return Math.min(Math.max(n, e), t); } function La(n, e = null) {
  if (!e)
    return null; const t = I.atStart(n); const r = I.atEnd(n); if (e === "start" || e === !0)
    return t; if (e === "end")
    return r; const i = t.from; const s = r.to; return e === "all" ? A.create(n, ct(0, i, s), ct(n.content.size, i, s)) : A.create(n, ct(e, i, s), ct(e, i, s));
} function sh() { return navigator.platform === "Android" || /android/i.test(navigator.userAgent); } function fs() { return ["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"].includes(navigator.platform) || navigator.userAgent.includes("Mac") && "ontouchend" in document; } function oh(n = null, e = {}) {
  return ({ editor: t, view: r, tr: i, dispatch: s }) => {
    e = { scrollIntoView: !0, ...e }; const o = () => { (fs() || sh()) && r.dom.focus(), requestAnimationFrame(() => { t.isDestroyed || (r.focus(), e?.scrollIntoView && t.commands.scrollIntoView()); }); }; if (r.hasFocus() && n === null || n === !1)
      return !0; if (s && n === null && !Pa(t.state.selection))
      return o(), !0; const l = La(i.doc, n) || t.state.selection; const a = t.state.selection.eq(l); return s && (a || i.setSelection(l), a && i.storedMarks && i.setStoredMarks(i.storedMarks), o()), !0;
  };
} const lh = (n, e) => t => n.every((r, i) => e(r, { ...t, index: i })); const ah = (n, e) => ({ tr: t, commands: r }) => r.insertContentAt({ from: t.selection.from, to: t.selection.to }, n, e); function Ba(n) { const e = n.childNodes; for (let t = e.length - 1; t >= 0; t -= 1) { const r = e[t]; r.nodeType === 3 && r.nodeValue && /^(\n\s\s|\n)$/.test(r.nodeValue) ? n.removeChild(r) : r.nodeType === 1 && Ba(r); } return n; } function Tn(n) { const e = `<body>${n}</body>`; const t = new window.DOMParser().parseFromString(e, "text/html").body; return Ba(t); } function cn(n, e, t) {
  if (n instanceof Je || n instanceof b)
    return n; t = { slice: !0, parseOptions: {}, ...t }; const r = typeof n == "object" && n !== null; const i = typeof n == "string"; if (r) {
    try {
      if (Array.isArray(n) && n.length > 0)
        return b.fromArray(n.map(l => e.nodeFromJSON(l))); const o = e.nodeFromJSON(n); return t.errorOnInvalidContent && o.check(), o;
    }
    catch (s) {
      if (t.errorOnInvalidContent)
        throw new Error("[tiptap error]: Invalid JSON content", { cause: s }); return console.warn("[tiptap warn]: Invalid content.", "Passed value:", n, "Error:", s), cn("", e, t);
    }
  } if (i) {
    if (t.errorOnInvalidContent) {
      let o = !1; let l = ""; const a = new yl({ topNode: e.spec.topNode, marks: e.spec.marks, nodes: e.spec.nodes.append({ __tiptap__private__unknown__catch__all__node: { content: "inline*", group: "block", parseDOM: [{ tag: "*", getAttrs: c => (o = !0, l = typeof c == "string" ? c : c.outerHTML, null) }] } }) }); if (t.slice ? Ge.fromSchema(a).parseSlice(Tn(n), t.parseOptions) : Ge.fromSchema(a).parse(Tn(n), t.parseOptions), t.errorOnInvalidContent && o)
        throw new Error("[tiptap error]: Invalid HTML content", { cause: new Error(`Invalid element found: ${l}`) });
    } const s = Ge.fromSchema(e); return t.slice ? s.parseSlice(Tn(n), t.parseOptions).content : s.parse(Tn(n), t.parseOptions);
  } return cn("", e, t);
} function ch(n, e, t) {
  const r = n.steps.length - 1; if (r < e)
    return; const i = n.steps[r]; if (!(i instanceof J || i instanceof G))
    return; const s = n.mapping.maps[r]; let o = 0; s.forEach((l, a, c, u) => { o === 0 && (o = u); }), n.setSelection(I.near(n.doc.resolve(o), t));
} const uh = n => !("type" in n); function dh(n, e, t) {
  return ({ tr: r, dispatch: i, editor: s }) => {
    let o; if (i) {
      t = { parseOptions: s.options.parseOptions, updateSelection: !0, applyInputRules: !1, applyPasteRules: !1, ...t }; let l; const a = (g) => { s.emit("contentError", { editor: s, error: g, disableCollaboration: () => { s.storage.collaboration && (s.storage.collaboration.isDisabled = !0); } }); }; const c = { preserveWhitespace: "full", ...t.parseOptions }; if (!t.errorOnInvalidContent && !s.options.enableContentCheck && s.options.emitContentError) {
        try { cn(e, s.schema, { parseOptions: c, errorOnInvalidContent: !0 }); }
        catch (g) { a(g); }
      } try { l = cn(e, s.schema, { parseOptions: c, errorOnInvalidContent: (o = t.errorOnInvalidContent) !== null && o !== void 0 ? o : s.options.enableContentCheck }); }
      catch (g) { return a(g), !1; } let { from: u, to: d } = typeof n == "number" ? { from: n, to: n } : { from: n.from, to: n.to }; let f = !0; let h = !0; if ((uh(l) ? l : [l]).forEach((g) => { g.check(), f = f ? g.isText && g.marks.length === 0 : !1, h = h ? g.isBlock : !1; }), u === d && h) { const { parent: g } = r.doc.resolve(u); g.isTextblock && !g.type.spec.code && !g.childCount && (u -= 1, d += 1); } let m; if (f) {
        if (Array.isArray(e)) {
          m = e.map(g => g.text || "").join("");
        }
        else if (e instanceof b) { let g = ""; e.forEach((y) => { y.text && (g += y.text); }), m = g; }
        else {
          typeof e == "object" && e && e.text ? m = e.text : m = e;
        }r.insertText(m, u, d);
      }
      else {
        m = l, r.replaceWith(u, d, m);
      }t.updateSelection && ch(r, r.steps.length - 1, -1), t.applyInputRules && r.setMeta("applyInputRules", { from: u, text: m }), t.applyPasteRules && r.setMeta("applyPasteRules", { from: u, text: m });
    } return !0;
  };
} const fh = () => ({ state: n, dispatch: e }) => df(n, e); const hh = () => ({ state: n, dispatch: e }) => ff(n, e); const ph = () => ({ state: n, dispatch: e }) => ba(n, e); const mh = () => ({ state: n, dispatch: e }) => Ca(n, e); function gh() {
  return ({ state: n, dispatch: e, tr: t }) => {
    try { const r = wr(n.doc, n.selection.$from.pos, -1); return r == null ? !1 : (t.join(r, 2), e && e(t), !0); }
    catch { return !1; }
  };
} function yh() {
  return ({ state: n, dispatch: e, tr: t }) => {
    try { const r = wr(n.doc, n.selection.$from.pos, 1); return r == null ? !1 : (t.join(r, 2), e && e(t), !0); }
    catch { return !1; }
  };
} const bh = () => ({ state: n, dispatch: e }) => cf(n, e); const kh = () => ({ state: n, dispatch: e }) => uf(n, e); function za() { return typeof navigator < "u" ? /Mac/.test(navigator.platform) : !1; } function xh(n) {
  const e = n.split(/-(?!$)/); let t = e[e.length - 1]; t === "Space" && (t = " "); let r, i, s, o; for (let l = 0; l < e.length - 1; l += 1) {
    const a = e[l]; if (/^(cmd|meta|m)$/i.test(a))
      o = !0; else if (/^a(lt)?$/i.test(a))
      r = !0; else if (/^(c|ctrl|control)$/i.test(a))
      i = !0; else if (/^s(hift)?$/i.test(a))
      s = !0; else if (/^mod$/i.test(a))
      fs() || za() ? o = !0 : i = !0; else throw new Error(`Unrecognized modifier name: ${a}`);
  } return r && (t = `Alt-${t}`), i && (t = `Ctrl-${t}`), o && (t = `Meta-${t}`), s && (t = `Shift-${t}`), t;
} const Sh = n => ({ editor: e, view: t, tr: r, dispatch: i }) => { const s = xh(n).split(/-(?!$)/); const o = s.find(c => !["Alt", "Ctrl", "Meta", "Shift"].includes(c)); const l = new KeyboardEvent("keydown", { key: o === "Space" ? " " : o, altKey: s.includes("Alt"), ctrlKey: s.includes("Ctrl"), metaKey: s.includes("Meta"), shiftKey: s.includes("Shift"), bubbles: !0, cancelable: !0 }); const a = e.captureTransaction(() => { t.someProp("handleKeyDown", c => c(t, l)); }); return a?.steps.forEach((c) => { const u = c.map(r.mapping); u && i && r.maybeStep(u); }), !0; }; function un(n, e, t = {}) {
  const { from: r, to: i, empty: s } = n.selection; const o = e ? X(e, n.schema) : null; const l = []; n.doc.nodesBetween(r, i, (d, f) => {
    if (d.isText)
      return; const h = Math.max(r, f); const p = Math.min(i, f + d.nodeSize); l.push({ node: d, from: h, to: p });
  }); const a = i - r; const c = l.filter(d => o ? o.name === d.node.type.name : !0).filter(d => Jn(d.node.attrs, t, { strict: !1 })); return s ? !!c.length : c.reduce((d, f) => d + f.to - f.from, 0) >= a;
} const Ch = (n, e = {}) => ({ state: t, dispatch: r }) => { const i = X(n, t.schema); return un(t, i, e) ? hf(t, r) : !1; }; const Mh = () => ({ state: n, dispatch: e }) => Ea(n, e); const wh = n => ({ state: e, dispatch: t }) => { const r = X(n, e.schema); return Tf(r)(e, t); }; const Th = () => ({ state: n, dispatch: e }) => wa(n, e); function Lr(n, e) { return e.nodes[n] ? "node" : e.marks[n] ? "mark" : null; } function Po(n, e) { const t = typeof e == "string" ? [e] : e; return Object.keys(n).reduce((r, i) => (t.includes(i) || (r[i] = n[i]), r), {}); } const Eh = (n, e) => ({ tr: t, state: r, dispatch: i }) => { let s = null; let o = null; const l = Lr(typeof n == "string" ? n : n.name, r.schema); return l ? (l === "node" && (s = X(n, r.schema)), l === "mark" && (o = rt(n, r.schema)), i && t.selection.ranges.forEach((a) => { r.doc.nodesBetween(a.$from.pos, a.$to.pos, (c, u) => { s && s === c.type && t.setNodeMarkup(u, void 0, Po(c.attrs, e)), o && c.marks.length && c.marks.forEach((d) => { o === d.type && t.addMark(u, u + c.nodeSize, o.create(Po(d.attrs, e))); }); }); }), !0) : !1; }; const Oh = () => ({ tr: n, dispatch: e }) => (e && n.scrollIntoView(), !0); const Ah = () => ({ tr: n, dispatch: e }) => { if (e) { const t = new pe(n.doc); n.setSelection(t); } return !0; }; const vh = () => ({ state: n, dispatch: e }) => xa(n, e); const Nh = () => ({ state: n, dispatch: e }) => Ma(n, e); const Dh = () => ({ state: n, dispatch: e }) => yf(n, e); const Ih = () => ({ state: n, dispatch: e }) => xf(n, e); const Rh = () => ({ state: n, dispatch: e }) => kf(n, e); function Di(n, e, t = {}, r = {}) { return cn(n, e, { slice: !1, parseOptions: t, errorOnInvalidContent: r.errorOnInvalidContent }); } const Ph = (n, e = !1, t = {}, r = {}) => ({ editor: i, tr: s, dispatch: o, commands: l }) => { let a, c; const { doc: u } = s; if (t.preserveWhitespace !== "full") { const d = Di(n, i.schema, t, { errorOnInvalidContent: (a = r.errorOnInvalidContent) !== null && a !== void 0 ? a : i.options.enableContentCheck }); return o && s.replaceWith(0, u.content.size, d).setMeta("preventUpdate", !e), !0; } return o && s.setMeta("preventUpdate", !e), l.insertContentAt({ from: 0, to: u.content.size }, n, { parseOptions: t, errorOnInvalidContent: (c = r.errorOnInvalidContent) !== null && c !== void 0 ? c : i.options.enableContentCheck }); }; function Fa(n, e) { const t = rt(e, n.schema); const { from: r, to: i, empty: s } = n.selection; const o = []; s ? (n.storedMarks && o.push(...n.storedMarks), o.push(...n.selection.$head.marks())) : n.doc.nodesBetween(r, i, (a) => { o.push(...a.marks); }); const l = o.find(a => a.type.name === t.name); return l ? { ...l.attrs } : {}; } function Lh(n, e) { const t = new Rl(n); return e.forEach((r) => { r.steps.forEach((i) => { t.step(i); }); }), t; } function Bh(n) {
  for (let e = 0; e < n.edgeCount; e += 1) {
    const { type: t } = n.edge(e); if (t.isTextblock && !t.hasRequiredAttrs())
      return t;
  } return null;
} function zh(n, e, t) { const r = []; return n.nodesBetween(e.from, e.to, (i, s) => { t(i) && r.push({ node: i, pos: s }); }), r; } function Fh(n, e) {
  for (let t = n.depth; t > 0; t -= 1) {
    const r = n.node(t); if (e(r))
      return { pos: t > 0 ? n.before(t) : 0, start: n.start(t), depth: t, node: r };
  }
} function hs(n) { return e => Fh(e.$from, n); } function Hh(n, e) { const t = { from: 0, to: n.content.size }; return Da(n, t, e); } function $h(n, e) { const t = X(e, n.schema); const { from: r, to: i } = n.selection; const s = []; n.doc.nodesBetween(r, i, (l) => { s.push(l); }); const o = s.reverse().find(l => l.type.name === t.name); return o ? { ...o.attrs } : {}; } function Ha(n, e) { const t = Lr(typeof e == "string" ? e : e.name, n.schema); return t === "node" ? $h(n, e) : t === "mark" ? Fa(n, e) : {}; } function Vh(n, e = JSON.stringify) { const t = {}; return n.filter((r) => { const i = e(r); return Object.prototype.hasOwnProperty.call(t, i) ? !1 : t[i] = !0; }); } function jh(n) { const e = Vh(n); return e.length === 1 ? e : e.filter((t, r) => !e.filter((s, o) => o !== r).some(s => t.oldRange.from >= s.oldRange.from && t.oldRange.to <= s.oldRange.to && t.newRange.from >= s.newRange.from && t.newRange.to <= s.newRange.to)); } function Wh(n) {
  const { mapping: e, steps: t } = n; const r = []; return e.maps.forEach((i, s) => {
    const o = []; if (i.ranges.length) {
      i.forEach((l, a) => { o.push({ from: l, to: a }); });
    }
    else {
      const { from: l, to: a } = t[s]; if (l === void 0 || a === void 0)
        return; o.push({ from: l, to: a });
    }o.forEach(({ from: l, to: a }) => { const c = e.slice(s).map(l, -1); const u = e.slice(s).map(a); const d = e.invert().map(c, -1); const f = e.invert().map(u); r.push({ oldRange: { from: d, to: f }, newRange: { from: c, to: u } }); });
  }), jh(r);
} function ps(n, e, t) { const r = []; return n === e ? t.resolve(n).marks().forEach((i) => { const s = t.resolve(n); const o = ds(s, i.type); o && r.push({ mark: i, ...o }); }) : t.nodesBetween(n, e, (i, s) => { !i || i?.nodeSize === void 0 || r.push(...i.marks.map(o => ({ from: s, to: s + i.nodeSize, mark: o }))); }), r; } function Pn(n, e, t) { return Object.fromEntries(Object.entries(t).filter(([r]) => { const i = n.find(s => s.type === e && s.name === r); return i ? i.attribute.keepOnSplit : !1; })); } function Ii(n, e, t = {}) {
  const { empty: r, ranges: i } = n.selection; const s = e ? rt(e, n.schema) : null; if (r)
    return !!(n.storedMarks || n.selection.$from.marks()).filter(d => s ? s.name === d.type.name : !0).find(d => Jn(d.attrs, t, { strict: !1 })); let o = 0; const l = []; if (i.forEach(({ $from: d, $to: f }) => {
    const h = d.pos; const p = f.pos; n.doc.nodesBetween(h, p, (m, g) => {
      if (!m.isText && !m.marks.length)
        return; const y = Math.max(h, g); const S = Math.min(p, g + m.nodeSize); const O = S - y; o += O, l.push(...m.marks.map(B => ({ mark: B, from: y, to: S })));
    });
  }), o === 0) {
    return !1;
  } const a = l.filter(d => s ? s.name === d.mark.type.name : !0).filter(d => Jn(d.mark.attrs, t, { strict: !1 })).reduce((d, f) => d + f.to - f.from, 0); const c = l.filter(d => s ? d.mark.type !== s && d.mark.type.excludes(s) : !0).reduce((d, f) => d + f.to - f.from, 0); return (a > 0 ? a + c : a) >= o;
} function Kh(n, e, t = {}) {
  if (!e)
    return un(n, null, t) || Ii(n, null, t); const r = Lr(e, n.schema); return r === "node" ? un(n, e, t) : r === "mark" ? Ii(n, e, t) : !1;
} function Lo(n, e) {
  const { nodeExtensions: t } = Ir(e); const r = t.find(o => o.name === n); if (!r)
    return !1; const i = { name: r.name, options: r.options, storage: r.storage }; const s = D(C(r, "group", i)); return typeof s != "string" ? !1 : s.split(" ").includes("list");
} function Br(n, { checkChildren: e = !0, ignoreWhitespace: t = !1 } = {}) {
  let r; if (t) {
    if (n.type.name === "hardBreak")
      return !0; if (n.isText)
      return /^\s*$/m.test((r = n.text) !== null && r !== void 0 ? r : "");
  } if (n.isText)
    return !n.text; if (n.isAtom || n.isLeaf)
    return !1; if (n.content.childCount === 0)
    return !0; if (e) { let i = !0; return n.content.forEach((s) => { i !== !1 && (Br(s, { ignoreWhitespace: t, checkChildren: e }) || (i = !1)); }), i; } return !1;
} function $a(n) { return n instanceof T; } function Uh(n, e, t) {
  let r; const { selection: i } = e; let s = null; if (Pa(i) && (s = i.$cursor), s) { const l = (r = n.storedMarks) !== null && r !== void 0 ? r : s.marks(); return !!t.isInSet(l) || !l.some(a => a.type.excludes(t)); } const { ranges: o } = i; return o.some(({ $from: l, $to: a }) => {
    let c = l.depth === 0 ? n.doc.inlineContent && n.doc.type.allowsMarkType(t) : !1; return n.doc.nodesBetween(l.pos, a.pos, (u, d, f) => {
      if (c)
        return !1; if (u.isInline) { const h = !f || f.type.allowsMarkType(t); const p = !!t.isInSet(u.marks) || !u.marks.some(m => m.type.excludes(t)); c = h && p; } return !c;
    }), c;
  });
} function _h(n, e = {}) {
  return ({ tr: t, state: r, dispatch: i }) => {
    const { selection: s } = t; const { empty: o, ranges: l } = s; const a = rt(n, r.schema); if (i) {
      if (o) { const c = Fa(r, a); t.addStoredMark(a.create({ ...c, ...e })); }
      else {
        l.forEach((c) => { const u = c.$from.pos; const d = c.$to.pos; r.doc.nodesBetween(u, d, (f, h) => { const p = Math.max(h, u); const m = Math.min(h + f.nodeSize, d); f.marks.find(y => y.type === a) ? f.marks.forEach((y) => { a === y.type && t.addMark(p, m, a.create({ ...y.attrs, ...e })); }) : t.addMark(p, m, a.create(e)); }); });
      }
    } return Uh(r, t, a);
  };
} const qh = (n, e) => ({ tr: t }) => (t.setMeta(n, e), !0); const Jh = (n, e = {}) => ({ state: t, dispatch: r, chain: i }) => { const s = X(n, t.schema); let o; return t.selection.$anchor.sameParent(t.selection.$head) && (o = t.selection.$anchor.parent.attrs), s.isTextblock ? i().command(({ commands: l }) => vo(s, { ...o, ...e })(t) ? !0 : l.clearNodes()).command(({ state: l }) => vo(s, { ...o, ...e })(l, r)).run() : (console.warn("[tiptap warn]: Currently \"setNode()\" only supports text block nodes."), !1); }; const Gh = n => ({ tr: e, dispatch: t }) => { if (t) { const { doc: r } = e; const i = ct(n, 0, r.content.size); const s = T.create(r, i); e.setSelection(s); } return !0; }; const Yh = n => ({ tr: e, dispatch: t }) => { if (t) { const { doc: r } = e; const { from: i, to: s } = typeof n == "number" ? { from: n, to: n } : n; const o = A.atStart(r).from; const l = A.atEnd(r).to; const a = ct(i, o, l); const c = ct(s, o, l); const u = A.create(r, a, c); e.setSelection(u); } return !0; }; const Xh = n => ({ state: e, dispatch: t }) => { const r = X(n, e.schema); return Af(r)(e, t); }; function Bo(n, e) { const t = n.storedMarks || n.selection.$to.parentOffset && n.selection.$from.marks(); if (t) { const r = t.filter(i => e?.includes(i.type.name)); n.tr.ensureMarks(r); } } function Qh({ keepMarks: n = !0 } = {}) {
  return ({ tr: e, state: t, dispatch: r, editor: i }) => {
    const { selection: s, doc: o } = e; const { $from: l, $to: a } = s; const c = i.extensionManager.attributes; const u = Pn(c, l.node().type.name, l.node().attrs); if (s instanceof T && s.node.isBlock)
      return !l.parentOffset || !Le(o, l.pos) ? !1 : (r && (n && Bo(t, i.extensionManager.splittableMarks), e.split(l.pos).scrollIntoView()), !0); if (!l.parent.isBlock)
      return !1; const d = a.parentOffset === a.parent.content.size; const f = l.depth === 0 ? void 0 : Bh(l.node(-1).contentMatchAt(l.indexAfter(-1))); let h = d && f ? [{ type: f, attrs: u }] : void 0; let p = Le(e.doc, e.mapping.map(l.pos), 1, h); if (!h && !p && Le(e.doc, e.mapping.map(l.pos), 1, f ? [{ type: f }] : void 0) && (p = !0, h = f ? [{ type: f, attrs: u }] : void 0), r) { if (p && (s instanceof A && e.deleteSelection(), e.split(e.mapping.map(l.pos), 1, h), f && !d && !l.parentOffset && l.parent.type !== f)) { const m = e.mapping.map(l.before()); const g = e.doc.resolve(m); l.node(-1).canReplaceWith(g.index(), g.index() + 1, f) && e.setNodeMarkup(e.mapping.map(l.before()), f); }n && Bo(t, i.extensionManager.splittableMarks), e.scrollIntoView(); } return p;
  };
} function Zh(n, e = {}) {
  return ({ tr: t, state: r, dispatch: i, editor: s }) => {
    let o; const l = X(n, r.schema); const { $from: a, $to: c } = r.selection; const u = r.selection.node; if (u && u.isBlock || a.depth < 2 || !a.sameParent(c))
      return !1; const d = a.node(-1); if (d.type !== l)
      return !1; const f = s.extensionManager.attributes; if (a.parent.content.size === 0 && a.node(-1).childCount === a.indexAfter(-1)) {
      if (a.depth === 2 || a.node(-3).type !== l || a.index(-2) !== a.node(-2).childCount - 1)
        return !1; if (i) {
        let y = b.empty; const S = a.index(-1) ? 1 : a.index(-2) ? 2 : 3; for (let P = a.depth - S; P >= a.depth - 3; P -= 1)y = b.from(a.node(P).copy(y)); const O = a.indexAfter(-1) < a.node(-2).childCount ? 1 : a.indexAfter(-2) < a.node(-3).childCount ? 2 : 3; const B = { ...Pn(f, a.node().type.name, a.node().attrs), ...e }; const v = ((o = l.contentMatch.defaultType) === null || o === void 0 ? void 0 : o.createAndFill(B)) || void 0; y = y.append(b.from(l.createAndFill(null, v) || void 0)); const F = a.before(a.depth - (S - 1)); t.replace(F, a.after(-O), new x(y, 4 - S, 0)); let E = -1; t.doc.nodesBetween(F, t.doc.content.size, (P, _) => {
          if (E > -1)
            return !1; P.isTextblock && P.content.size === 0 && (E = _ + 1);
        }), E > -1 && t.setSelection(A.near(t.doc.resolve(E))), t.scrollIntoView();
      } return !0;
    } const h = c.pos === a.end() ? d.contentMatchAt(0).defaultType : null; const p = { ...Pn(f, d.type.name, d.attrs), ...e }; const m = { ...Pn(f, a.node().type.name, a.node().attrs), ...e }; t.delete(a.pos, c.pos); const g = h ? [{ type: l, attrs: p }, { type: h, attrs: m }] : [{ type: l, attrs: p }]; if (!Le(t.doc, a.pos, 2))
      return !1; if (i) {
      const { selection: y, storedMarks: S } = r; const { splittableMarks: O } = s.extensionManager; const B = S || y.$to.parentOffset && y.$from.marks(); if (t.split(a.pos, 2, g).scrollIntoView(), !B || !i)
        return !0; const v = B.filter(F => O.includes(F.type.name)); t.ensureMarks(v);
    } return !0;
  };
} function ni(n, e) {
  const t = hs(o => o.type === e)(n.selection); if (!t)
    return !0; const r = n.doc.resolve(Math.max(0, t.pos - 1)).before(t.depth); if (r === void 0)
    return !0; const i = n.doc.nodeAt(r); return t.node.type === i?.type && tt(n.doc, t.pos) && n.join(t.pos), !0;
} function ri(n, e) {
  const t = hs(o => o.type === e)(n.selection); if (!t)
    return !0; const r = n.doc.resolve(t.start).after(t.depth); if (r === void 0)
    return !0; const i = n.doc.nodeAt(r); return t.node.type === i?.type && tt(n.doc, r) && n.join(r), !0;
} function ep(n, e, t, r = {}) {
  return ({ editor: i, tr: s, state: o, dispatch: l, chain: a, commands: c, can: u }) => {
    const { extensions: d, splittableMarks: f } = i.extensionManager; const h = X(n, o.schema); const p = X(e, o.schema); const { selection: m, storedMarks: g } = o; const { $from: y, $to: S } = m; const O = y.blockRange(S); const B = g || m.$to.parentOffset && m.$from.marks(); if (!O)
      return !1; const v = hs(F => Lo(F.type.name, d))(m); if (O.depth >= 1 && v && O.depth - v.depth <= 1) {
      if (v.node.type === h)
        return c.liftListItem(p); if (Lo(v.node.type.name, d) && h.validContent(v.node.content) && l)
        return a().command(() => (s.setNodeMarkup(v.pos, h), !0)).command(() => ni(s, h)).command(() => ri(s, h)).run();
    } return !t || !B || !l ? a().command(() => u().wrapInList(h, r) ? !0 : c.clearNodes()).wrapInList(h, r).command(() => ni(s, h)).command(() => ri(s, h)).run() : a().command(() => { const F = u().wrapInList(h, r); const E = B.filter(P => f.includes(P.type.name)); return s.ensureMarks(E), F ? !0 : c.clearNodes(); }).wrapInList(h, r).command(() => ni(s, h)).command(() => ri(s, h)).run();
  };
} const tp = (n, e = {}, t = {}) => ({ state: r, commands: i }) => { const { extendEmptyMarkRange: s = !1 } = t; const o = rt(n, r.schema); return Ii(r, o, e) ? i.unsetMark(o, { extendEmptyMarkRange: s }) : i.setMark(o, e); }; const np = (n, e, t = {}) => ({ state: r, commands: i }) => { const s = X(n, r.schema); const o = X(e, r.schema); const l = un(r, s, t); let a; return r.selection.$anchor.sameParent(r.selection.$head) && (a = r.selection.$anchor.parent.attrs), l ? i.setNode(o, a) : i.setNode(s, { ...a, ...t }); }; const rp = (n, e = {}) => ({ state: t, commands: r }) => { const i = X(n, t.schema); return un(t, i, e) ? r.lift(i) : r.wrapIn(i, e); }; function ip() {
  return ({ state: n, dispatch: e }) => {
    const t = n.plugins; for (let r = 0; r < t.length; r += 1) {
      const i = t[r]; let s; if (i.spec.isInputRules && (s = i.getState(n))) {
        if (e) {
          const o = n.tr; const l = s.transform; for (let a = l.steps.length - 1; a >= 0; a -= 1)o.step(l.steps[a].invert(l.docs[a])); if (s.text) { const a = o.doc.resolve(s.from).marks(); o.replaceWith(s.from, s.to, n.schema.text(s.text, a)); }
          else {
            o.delete(s.from, s.to);
          }
        } return !0;
      }
    } return !1;
  };
} const sp = () => ({ tr: n, dispatch: e }) => { const { selection: t } = n; const { empty: r, ranges: i } = t; return r || e && i.forEach((s) => { n.removeMark(s.$from.pos, s.$to.pos); }), !0; }; function op(n, e = {}) {
  return ({ tr: t, state: r, dispatch: i }) => {
    let s; const { extendEmptyMarkRange: o = !1 } = e; const { selection: l } = t; const a = rt(n, r.schema); const { $from: c, empty: u, ranges: d } = l; if (!i)
      return !0; if (u && o) { let { from: f, to: h } = l; const p = (s = c.marks().find(g => g.type === a)) === null || s === void 0 ? void 0 : s.attrs; const m = ds(c, a, p); m && (f = m.from, h = m.to), t.removeMark(f, h, a); }
    else {
      d.forEach((f) => { t.removeMark(f.$from.pos, f.$to.pos, a); });
    } return t.removeStoredMark(a), !0;
  };
} const lp = (n, e = {}) => ({ tr: t, state: r, dispatch: i }) => { let s = null; let o = null; const l = Lr(typeof n == "string" ? n : n.name, r.schema); return l ? (l === "node" && (s = X(n, r.schema)), l === "mark" && (o = rt(n, r.schema)), i && t.selection.ranges.forEach((a) => { const c = a.$from.pos; const u = a.$to.pos; let d, f, h, p; t.selection.empty ? r.doc.nodesBetween(c, u, (m, g) => { s && s === m.type && (h = Math.max(g, c), p = Math.min(g + m.nodeSize, u), d = g, f = m); }) : r.doc.nodesBetween(c, u, (m, g) => { g < c && s && s === m.type && (h = Math.max(g, c), p = Math.min(g + m.nodeSize, u), d = g, f = m), g >= c && g <= u && (s && s === m.type && t.setNodeMarkup(g, void 0, { ...m.attrs, ...e }), o && m.marks.length && m.marks.forEach((y) => { if (o === y.type) { const S = Math.max(g, c); const O = Math.min(g + m.nodeSize, u); t.addMark(S, O, o.create({ ...y.attrs, ...e })); } })); }), f && (d !== void 0 && t.setNodeMarkup(d, void 0, { ...f.attrs, ...e }), o && f.marks.length && f.marks.forEach((m) => { o === m.type && t.addMark(h, p, o.create({ ...m.attrs, ...e })); })); }), !0) : !1; }; const ap = (n, e = {}) => ({ state: t, dispatch: r }) => { const i = X(n, t.schema); return Sf(i, e)(t, r); }; const cp = (n, e = {}) => ({ state: t, dispatch: r }) => { const i = X(n, t.schema); return Cf(i, e)(t, r); }; let up = Object.freeze({ __proto__: null, blur: Uf, clearContent: _f, clearNodes: qf, command: Jf, createParagraphNear: Gf, cut: Yf, deleteCurrentNode: Xf, deleteNode: Qf, deleteRange: Zf, deleteSelection: eh, enter: th, exitCode: nh, extendMarkRange: rh, first: ih, focus: oh, forEach: lh, insertContent: ah, insertContentAt: dh, joinBackward: ph, joinDown: hh, joinForward: mh, joinItemBackward: gh, joinItemForward: yh, joinTextblockBackward: bh, joinTextblockForward: kh, joinUp: fh, keyboardShortcut: Sh, lift: Ch, liftEmptyBlock: Mh, liftListItem: wh, newlineInCode: Th, resetAttributes: Eh, scrollIntoView: Oh, selectAll: Ah, selectNodeBackward: vh, selectNodeForward: Nh, selectParentNode: Dh, selectTextblockEnd: Ih, selectTextblockStart: Rh, setContent: Ph, setMark: _h, setMeta: qh, setNode: Jh, setNodeSelection: Gh, setTextSelection: Yh, sinkListItem: Xh, splitBlock: Qh, splitListItem: Zh, toggleList: ep, toggleMark: tp, toggleNode: np, toggleWrap: rp, undoInputRule: ip, unsetAllMarks: sp, unsetMark: op, updateAttributes: lp, wrapIn: ap, wrapInList: cp }); const dp = L.create({ name: "commands", addCommands() { return { ...up }; } }); const fp = L.create({ name: "drop", addProseMirrorPlugins() { return [new W({ key: new Q("tiptapDrop"), props: { handleDrop: (n, e, t, r) => { this.editor.emit("drop", { editor: this.editor, event: e, slice: t, moved: r }); } } })]; } }); const hp = L.create({ name: "editable", addProseMirrorPlugins() { return [new W({ key: new Q("editable"), props: { editable: () => this.editor.options.editable } })]; } }); const pp = new Q("focusEvents"); const mp = L.create({ name: "focusEvents", addProseMirrorPlugins() { const { editor: n } = this; return [new W({ key: pp, props: { handleDOMEvents: { focus: (e, t) => { n.isFocused = !0; const r = n.state.tr.setMeta("focus", { event: t }).setMeta("addToHistory", !1); return e.dispatch(r), !1; }, blur: (e, t) => { n.isFocused = !1; const r = n.state.tr.setMeta("blur", { event: t }).setMeta("addToHistory", !1); return e.dispatch(r), !1; } } } })]; } }); const gp = L.create({ name: "keymap", addKeyboardShortcuts() { const n = () => this.editor.commands.first(({ commands: o }) => [() => o.undoInputRule(), () => o.command(({ tr: l }) => { const { selection: a, doc: c } = l; const { empty: u, $anchor: d } = a; const { pos: f, parent: h } = d; const p = d.parent.isTextblock && f > 0 ? l.doc.resolve(f - 1) : d; const m = p.parent.type.spec.isolating; const g = d.pos - d.parentOffset; const y = m && p.parent.childCount === 1 ? g === d.pos : I.atStart(c).from === f; return !u || !h.type.isTextblock || h.textContent.length || !y || y && d.parent.type.name === "paragraph" ? !1 : o.clearNodes(); }), () => o.deleteSelection(), () => o.joinBackward(), () => o.selectNodeBackward()]); const e = () => this.editor.commands.first(({ commands: o }) => [() => o.deleteSelection(), () => o.deleteCurrentNode(), () => o.joinForward(), () => o.selectNodeForward()]); const r = { "Enter": () => this.editor.commands.first(({ commands: o }) => [() => o.newlineInCode(), () => o.createParagraphNear(), () => o.liftEmptyBlock(), () => o.splitBlock()]), "Mod-Enter": () => this.editor.commands.exitCode(), "Backspace": n, "Mod-Backspace": n, "Shift-Backspace": n, "Delete": e, "Mod-Delete": e, "Mod-a": () => this.editor.commands.selectAll() }; const i = { ...r }; const s = { ...r, "Ctrl-h": n, "Alt-Backspace": n, "Ctrl-d": e, "Ctrl-Alt-Backspace": e, "Alt-Delete": e, "Alt-d": e, "Ctrl-a": () => this.editor.commands.selectTextblockStart(), "Ctrl-e": () => this.editor.commands.selectTextblockEnd() }; return fs() || za() ? s : i; }, addProseMirrorPlugins() {
  return [new W({ key: new Q("clearDocument"), appendTransaction: (n, e, t) => {
    if (n.some(m => m.getMeta("composition")))
      return; const r = n.some(m => m.docChanged) && !e.doc.eq(t.doc); const i = n.some(m => m.getMeta("preventClearDocument")); if (!r || i)
      return; const { empty: s, from: o, to: l } = e.selection; const a = I.atStart(e.doc).from; const c = I.atEnd(e.doc).to; if (s || !(o === a && l === c) || !Br(t.doc))
      return; const f = t.tr; const h = Nr({ state: t, transaction: f }); const { commands: p } = new Dr({ editor: this.editor, state: h }); if (p.clearNodes(), !!f.steps.length)
      return f;
  } })];
} }); const yp = L.create({ name: "paste", addProseMirrorPlugins() { return [new W({ key: new Q("tiptapPaste"), props: { handlePaste: (n, e, t) => { this.editor.emit("paste", { editor: this.editor, event: e, slice: t }); } } })]; } }); const bp = L.create({ name: "tabindex", addProseMirrorPlugins() { return [new W({ key: new Q("tabindex"), props: { attributes: () => this.editor.isEditable ? { tabindex: "0" } : {} } })]; } }); class ot {
  get name() { return this.node.type.name; }constructor(e, t, r = !1, i = null) { this.currentNode = null, this.actualDepth = null, this.isBlock = r, this.resolvedPos = e, this.editor = t, this.currentNode = i; } get node() { return this.currentNode || this.resolvedPos.node(); } get element() { return this.editor.view.domAtPos(this.pos).node; } get depth() { let e; return (e = this.actualDepth) !== null && e !== void 0 ? e : this.resolvedPos.depth; } get pos() { return this.resolvedPos.pos; } get content() { return this.node.content; } set content(e) { let t = this.from; let r = this.to; if (this.isBlock) { if (this.content.size === 0) { console.error(`You can’t set content on a block node. Tried to set content on ${this.name} at ${this.pos}`); return; }t = this.from + 1, r = this.to - 1; } this.editor.commands.insertContentAt({ from: t, to: r }, e); } get attributes() { return this.node.attrs; } get textContent() { return this.node.textContent; } get size() { return this.node.nodeSize; } get from() { return this.isBlock ? this.pos : this.resolvedPos.start(this.resolvedPos.depth); } get range() { return { from: this.from, to: this.to }; } get to() { return this.isBlock ? this.pos + this.size : this.resolvedPos.end(this.resolvedPos.depth) + (this.node.isText ? 0 : 1); } get parent() {
    if (this.depth === 0)
      return null; const e = this.resolvedPos.start(this.resolvedPos.depth - 1); const t = this.resolvedPos.doc.resolve(e); return new ot(t, this.editor);
  }

  get before() { let e = this.resolvedPos.doc.resolve(this.from - (this.isBlock ? 1 : 2)); return e.depth !== this.depth && (e = this.resolvedPos.doc.resolve(this.from - 3)), new ot(e, this.editor); } get after() { let e = this.resolvedPos.doc.resolve(this.to + (this.isBlock ? 2 : 1)); return e.depth !== this.depth && (e = this.resolvedPos.doc.resolve(this.to + 3)), new ot(e, this.editor); } get children() {
    const e = []; return this.node.content.forEach((t, r) => {
      const i = t.isBlock && !t.isTextblock; const s = t.isAtom && !t.isText; const o = this.pos + r + (s ? 0 : 1); if (o < 0 || o > this.resolvedPos.doc.nodeSize - 2)
        return; const l = this.resolvedPos.doc.resolve(o); if (!i && l.depth <= this.depth)
        return; const a = new ot(l, this.editor, i, i ? t : null); i && (a.actualDepth = this.depth + 1), e.push(new ot(l, this.editor, i, i ? t : null));
    }), e;
  }

  get firstChild() { return this.children[0] || null; } get lastChild() { const e = this.children; return e[e.length - 1] || null; }closest(e, t = {}) {
    let r = null; let i = this.parent; for (;i && !r;) {
      if (i.node.type.name === e) {
        if (Object.keys(t).length > 0) {
          const s = i.node.attrs; const o = Object.keys(t); for (let l = 0; l < o.length; l += 1) {
            const a = o[l]; if (s[a] !== t[a])
              break;
          }
        }
        else {
          r = i;
        }
      }i = i.parent;
    } return r;
  }

  querySelector(e, t = {}) { return this.querySelectorAll(e, t, !0)[0] || null; }querySelectorAll(e, t = {}, r = !1) {
    let i = []; if (!this.children || this.children.length === 0)
      return i; const s = Object.keys(t); return this.children.forEach((o) => { r && i.length > 0 || (o.node.type.name === e && s.every(a => t[a] === o.node.attrs[a]) && i.push(o), !(r && i.length > 0) && (i = i.concat(o.querySelectorAll(e, t, r)))); }), i;
  }

  setAttribute(e) { const { tr: t } = this.editor.state; t.setNodeMarkup(this.from, void 0, { ...this.node.attrs, ...e }), this.editor.view.dispatch(t); }
} const kp = `.ProseMirror {
  position: relative;
}

.ProseMirror {
  word-wrap: break-word;
  white-space: pre-wrap;
  white-space: break-spaces;
  -webkit-font-variant-ligatures: none;
  font-variant-ligatures: none;
  font-feature-settings: "liga" 0; /* the above doesn't seem to work in Edge */
}

.ProseMirror [contenteditable="false"] {
  white-space: normal;
}

.ProseMirror [contenteditable="false"] [contenteditable="true"] {
  white-space: pre-wrap;
}

.ProseMirror pre {
  white-space: pre-wrap;
}

img.ProseMirror-separator {
  display: inline !important;
  border: none !important;
  margin: 0 !important;
  width: 0 !important;
  height: 0 !important;
}

.ProseMirror-gapcursor {
  display: none;
  pointer-events: none;
  position: absolute;
  margin: 0;
}

.ProseMirror-gapcursor:after {
  content: "";
  display: block;
  position: absolute;
  top: -2px;
  width: 20px;
  border-top: 1px solid black;
  animation: ProseMirror-cursor-blink 1.1s steps(2, start) infinite;
}

@keyframes ProseMirror-cursor-blink {
  to {
    visibility: hidden;
  }
}

.ProseMirror-hideselection *::selection {
  background: transparent;
}

.ProseMirror-hideselection *::-moz-selection {
  background: transparent;
}

.ProseMirror-hideselection * {
  caret-color: transparent;
}

.ProseMirror-focused .ProseMirror-gapcursor {
  display: block;
}

.tippy-box[data-animation=fade][data-state=hidden] {
  opacity: 0
}`;function xp(n, e, t) {
  const r = document.querySelector("style[data-tiptap-style]"); if (r !== null)
    return r; const i = document.createElement("style"); return e && i.setAttribute("nonce", e), i.setAttribute("data-tiptap-style", ""), i.innerHTML = n, document.getElementsByTagName("head")[0].appendChild(i), i;
} let Sp = class extends vf {
  constructor(e = {}) { super(), this.isFocused = !1, this.isInitialized = !1, this.extensionStorage = {}, this.options = { element: document.createElement("div"), content: "", injectCSS: !0, injectNonce: void 0, extensions: [], autofocus: !1, editable: !0, editorProps: {}, parseOptions: {}, coreExtensionOptions: {}, enableInputRules: !0, enablePasteRules: !0, enableCoreExtensions: !0, enableContentCheck: !1, emitContentError: !1, onBeforeCreate: () => null, onCreate: () => null, onUpdate: () => null, onSelectionUpdate: () => null, onTransaction: () => null, onFocus: () => null, onBlur: () => null, onDestroy: () => null, onContentError: ({ error: t }) => { throw t; }, onPaste: () => null, onDrop: () => null }, this.isCapturingTransaction = !1, this.capturedTransaction = null, this.setOptions(e), this.createExtensionManager(), this.createCommandManager(), this.createSchema(), this.on("beforeCreate", this.options.onBeforeCreate), this.emit("beforeCreate", { editor: this }), this.on("contentError", this.options.onContentError), this.createView(), this.injectCSS(), this.on("create", this.options.onCreate), this.on("update", this.options.onUpdate), this.on("selectionUpdate", this.options.onSelectionUpdate), this.on("transaction", this.options.onTransaction), this.on("focus", this.options.onFocus), this.on("blur", this.options.onBlur), this.on("destroy", this.options.onDestroy), this.on("drop", ({ event: t, slice: r, moved: i }) => this.options.onDrop(t, r, i)), this.on("paste", ({ event: t, slice: r }) => this.options.onPaste(t, r)), window.setTimeout(() => { this.isDestroyed || (this.commands.focus(this.options.autofocus), this.emit("create", { editor: this }), this.isInitialized = !0); }, 0); } get storage() { return this.extensionStorage; } get commands() { return this.commandManager.commands; }chain() { return this.commandManager.chain(); }can() { return this.commandManager.can(); }injectCSS() { this.options.injectCSS && document && (this.css = xp(kp, this.options.injectNonce)); }setOptions(e = {}) { this.options = { ...this.options, ...e }, !(!this.view || !this.state || this.isDestroyed) && (this.options.editorProps && this.view.setProps(this.options.editorProps), this.view.updateState(this.state)); }setEditable(e, t = !0) { this.setOptions({ editable: e }), t && this.emit("update", { editor: this, transaction: this.state.tr }); } get isEditable() { return this.options.editable && this.view && this.view.editable; } get state() { return this.view.state; }registerPlugin(e, t) { const r = Na(t) ? t(e, [...this.state.plugins]) : [...this.state.plugins, e]; const i = this.state.reconfigure({ plugins: r }); return this.view.updateState(i), i; }unregisterPlugin(e) {
    if (this.isDestroyed)
      return; const t = this.state.plugins; let r = t; if ([].concat(e).forEach((s) => { const o = typeof s == "string" ? `${s}$` : s.key; r = r.filter(l => !l.key.startsWith(o)); }), t.length === r.length)
      return; const i = this.state.reconfigure({ plugins: r }); return this.view.updateState(i), i;
  }

  createExtensionManager() { let e, t; const i = [...this.options.enableCoreExtensions ? [hp, Kf.configure({ blockSeparator: (t = (e = this.options.coreExtensionOptions) === null || e === void 0 ? void 0 : e.clipboardTextSerializer) === null || t === void 0 ? void 0 : t.blockSeparator }), dp, mp, gp, bp, fp, yp].filter(s => typeof this.options.enableCoreExtensions == "object" ? this.options.enableCoreExtensions[s.name] !== !1 : !0) : [], ...this.options.extensions].filter(s => ["extension", "node", "mark"].includes(s?.type)); this.extensionManager = new vt(i, this); }createCommandManager() { this.commandManager = new Dr({ editor: this }); }createSchema() { this.schema = this.extensionManager.schema; }createView() {
    let e; let t; try { t = Di(this.options.content, this.schema, this.options.parseOptions, { errorOnInvalidContent: this.options.enableContentCheck }); }
    catch (o) {
      if (!(o instanceof Error) || !["[tiptap error]: Invalid JSON content", "[tiptap error]: Invalid HTML content"].includes(o.message))
        throw o; this.emit("contentError", { editor: this, error: o, disableCollaboration: () => { this.storage.collaboration && (this.storage.collaboration.isDisabled = !0), this.options.extensions = this.options.extensions.filter(l => l.name !== "collaboration"), this.createExtensionManager(); } }), t = Di(this.options.content, this.schema, this.options.parseOptions, { errorOnInvalidContent: !1 });
    } const r = La(t, this.options.autofocus); this.view = new ma(this.options.element, { ...this.options.editorProps, attributes: { role: "textbox", ...(e = this.options.editorProps) === null || e === void 0 ? void 0 : e.attributes }, dispatchTransaction: this.dispatchTransaction.bind(this), state: At.create({ doc: t, selection: r || void 0 }) }); const i = this.state.reconfigure({ plugins: this.extensionManager.plugins }); this.view.updateState(i), this.createNodeViews(), this.prependClass(); const s = this.view.dom; s.editor = this;
  }

  createNodeViews() { this.view.isDestroyed || this.view.setProps({ nodeViews: this.extensionManager.nodeViews }); }prependClass() { this.view.dom.className = `tiptap ${this.view.dom.className}`; }captureTransaction(e) { this.isCapturingTransaction = !0, e(), this.isCapturingTransaction = !1; const t = this.capturedTransaction; return this.capturedTransaction = null, t; }dispatchTransaction(e) {
    if (this.view.isDestroyed)
      return; if (this.isCapturingTransaction) { if (!this.capturedTransaction) { this.capturedTransaction = e; return; }e.steps.forEach((o) => { let l; return (l = this.capturedTransaction) === null || l === void 0 ? void 0 : l.step(o); }); return; } const t = this.state.apply(e); const r = !this.state.selection.eq(t.selection); this.emit("beforeTransaction", { editor: this, transaction: e, nextState: t }), this.view.updateState(t), this.emit("transaction", { editor: this, transaction: e }), r && this.emit("selectionUpdate", { editor: this, transaction: e }); const i = e.getMeta("focus"); const s = e.getMeta("blur"); i && this.emit("focus", { editor: this, event: i.event, transaction: e }), s && this.emit("blur", { editor: this, event: s.event, transaction: e }), !(!e.docChanged || e.getMeta("preventUpdate")) && this.emit("update", { editor: this, transaction: e });
  }

  getAttributes(e) { return Ha(this.state, e); }isActive(e, t) { const r = typeof e == "string" ? e : null; const i = typeof e == "string" ? t : e; return Kh(this.state, r, i); }getJSON() { return this.state.doc.toJSON(); }getHTML() { return cs(this.state.doc.content, this.schema); }getText(e) {
    const { blockSeparator: t = `

`, textSerializers: r = {} } = e || {}; return Hh(this.state.doc, { blockSeparator: t, textSerializers: { ...Ia(this.schema), ...r } });
  }

  get isEmpty() { return Br(this.state.doc); }getCharacterCount() { return console.warn("[tiptap warn]: \"editor.getCharacterCount()\" is deprecated. Please use \"editor.storage.characterCount.characters()\" instead."), this.state.doc.content.size - 2; }destroy() { if (this.emit("destroy"), this.view) { const e = this.view.dom; e && e.editor && delete e.editor, this.view.destroy(); } this.removeAllListeners(); } get isDestroyed() { let e; return !(!((e = this.view) === null || e === void 0) && e.docView); }$node(e, t) { let r; return ((r = this.$doc) === null || r === void 0 ? void 0 : r.querySelector(e, t)) || null; }$nodes(e, t) { let r; return ((r = this.$doc) === null || r === void 0 ? void 0 : r.querySelectorAll(e, t)) || null; }$pos(e) { const t = this.state.doc.resolve(e); return new ot(t, this); } get $doc() { return this.$pos(0); }
}; function xt(n) {
  return new Rr({ find: n.find, handler: ({ state: e, range: t, match: r }) => {
    const i = D(n.getAttributes, void 0, r); if (i === !1 || i === null)
      return null; const { tr: s } = e; const o = r[r.length - 1]; const l = r[0]; if (o) {
      const a = l.search(/\S/); const c = t.from + l.indexOf(o); const u = c + o.length; if (ps(t.from, t.to, e.doc).filter(h => h.mark.type.excluded.find(m => m === n.type && m !== h.mark.type)).filter(h => h.to > c).length)
        return null; u < t.to && s.delete(u, t.to), c > t.from && s.delete(t.from + a, c); const f = t.from + a + o.length; s.addMark(t.from + a, f, n.type.create(i || {})), s.removeStoredMark(n.type);
    }
  } });
} function Va(n) {
  return new Rr({ find: n.find, handler: ({ state: e, range: t, match: r }) => {
    const i = D(n.getAttributes, void 0, r) || {}; const { tr: s } = e; const o = t.from; let l = t.to; const a = n.type.create(i); if (r[1]) { const c = r[0].lastIndexOf(r[1]); let u = o + c; u > l ? u = l : l = u + r[1].length; const d = r[0][r[0].length - 1]; s.insertText(d, o + r[0].length - 1), s.replaceWith(u, l, a); }
    else if (r[0]) { const c = n.type.isInline ? o : o - 1; s.insert(c, n.type.create(i)).delete(s.mapping.map(o), s.mapping.map(l)); }s.scrollIntoView();
  } });
} function Ri(n) {
  return new Rr({ find: n.find, handler: ({ state: e, range: t, match: r }) => {
    const i = e.doc.resolve(t.from); const s = D(n.getAttributes, void 0, r) || {}; if (!i.node(-1).canReplaceWith(i.index(-1), i.indexAfter(-1), n.type))
      return null; e.tr.delete(t.from, t.to).setBlockType(t.from, t.from, n.type, s);
  } });
} function dn(n) {
  return new Rr({ find: n.find, handler: ({ state: e, range: t, match: r, chain: i }) => {
    const s = D(n.getAttributes, void 0, r) || {}; const o = e.tr.delete(t.from, t.to); const a = o.doc.resolve(t.from).blockRange(); const c = a && _i(a, n.type, s); if (!c)
      return null; if (o.wrap(a, c), n.keepMarks && n.editor) { const { selection: d, storedMarks: f } = e; const { splittableMarks: h } = n.editor.extensionManager; const p = f || d.$to.parentOffset && d.$from.marks(); if (p) { const m = p.filter(g => h.includes(g.type.name)); o.ensureMarks(m); } } if (n.keepAttributes) { const d = n.type.name === "bulletList" || n.type.name === "orderedList" ? "listItem" : "taskList"; i().updateAttributes(d, s).run(); } const u = o.doc.resolve(t.from - 1).nodeBefore; u && u.type === n.type && tt(o.doc, t.from - 1) && (!n.joinPredicate || n.joinPredicate(r, u)) && o.join(t.from - 1);
  } });
} class ue {constructor(e = {}) { this.type = "node", this.name = "node", this.parent = null, this.child = null, this.config = { name: this.name, defaultOptions: {} }, this.config = { ...this.config, ...e }, this.name = this.config.name, e.defaultOptions && Object.keys(e.defaultOptions).length > 0 && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${this.name}".`), this.options = this.config.defaultOptions, this.config.addOptions && (this.options = D(C(this, "addOptions", { name: this.name }))), this.storage = D(C(this, "addStorage", { name: this.name, options: this.options })) || {}; } static create(e = {}) { return new ue(e); }configure(e = {}) { const t = this.extend({ ...this.config, addOptions: () => Pr(this.options, e) }); return t.name = this.name, t.parent = this.parent, t; }extend(e = {}) { const t = new ue(e); return t.parent = this, this.child = t, t.name = e.name ? e.name : t.parent.name, e.defaultOptions && Object.keys(e.defaultOptions).length > 0 && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${t.name}".`), t.options = D(C(t, "addOptions", { name: t.name })), t.storage = D(C(t, "addStorage", { name: t.name, options: t.options })), t; }} function et(n) {
  return new Ff({ find: n.find, handler: ({ state: e, range: t, match: r, pasteEvent: i }) => {
    const s = D(n.getAttributes, void 0, r, i); if (s === !1 || s === null)
      return null; const { tr: o } = e; const l = r[r.length - 1]; const a = r[0]; let c = t.to; if (l) {
      const u = a.search(/\S/); const d = t.from + a.indexOf(l); const f = d + l.length; if (ps(t.from, t.to, e.doc).filter(p => p.mark.type.excluded.find(g => g === n.type && g !== p.mark.type)).filter(p => p.to > d).length)
        return null; f < t.to && o.delete(f, t.to), d > t.from && o.delete(t.from + u, d), c = t.from + u + l.length, o.addMark(t.from + u, c, n.type.create(s || {})), o.removeStoredMark(n.type);
    }
  } });
} function Cp(n, e) {
  const { selection: t } = n; const { $from: r } = t; if (t instanceof T) { const s = r.index(); return r.parent.canReplaceWith(s, s + 1, e); } let i = r.depth; for (;i >= 0;) {
    const s = r.index(i); if (r.node(i).contentMatchAt(s).matchType(e))
      return !0; i -= 1;
  } return !1;
} let Mp = /(?:^|\s)(==(?!\s+==)([^=]+)==(?!\s+==))$/; let wp = /(?:^|\s)(==(?!\s+==)([^=]+)==(?!\s+==))/g; let Tp = Se.create({ name: "highlight", addOptions() { return { multicolor: !1, HTMLAttributes: {} }; }, addAttributes() { return this.options.multicolor ? { color: { default: null, parseHTML: n => n.getAttribute("data-color") || n.style.backgroundColor, renderHTML: n => n.color ? { "data-color": n.color, "style": `background-color: ${n.color}; color: inherit` } : {} } } : {}; }, parseHTML() { return [{ tag: "mark" }]; }, renderHTML({ HTMLAttributes: n }) { return ["mark", K(this.options.HTMLAttributes, n), 0]; }, addCommands() { return { setHighlight: n => ({ commands: e }) => e.setMark(this.name, n), toggleHighlight: n => ({ commands: e }) => e.toggleMark(this.name, n), unsetHighlight: () => ({ commands: n }) => n.unsetMark(this.name) }; }, addKeyboardShortcuts() { return { "Mod-Shift-h": () => this.editor.commands.toggleHighlight() }; }, addInputRules() { return [xt({ find: Mp, type: this.type })]; }, addPasteRules() { return [et({ find: wp, type: this.type })]; } }); let Ep = Tp; let Op = /(?:^|\s)(!\[(.+|:?)\]\((\S+)(?:\s+["'](\S+)["'])?\))$/; let Ap = ue.create({ name: "image", addOptions() { return { inline: !1, allowBase64: !1, HTMLAttributes: {} }; }, inline() { return this.options.inline; }, group() { return this.options.inline ? "inline" : "block"; }, draggable: !0, addAttributes() { return { src: { default: null }, alt: { default: null }, title: { default: null }, width: { default: null }, height: { default: null } }; }, parseHTML() { return [{ tag: this.options.allowBase64 ? "img[src]" : "img[src]:not([src^=\"data:\"])" }]; }, renderHTML({ HTMLAttributes: n }) { return ["img", K(this.options.HTMLAttributes, n)]; }, addCommands() { return { setImage: n => ({ commands: e }) => e.insertContent({ type: this.name, attrs: n }) }; }, addInputRules() { return [Va({ find: Op, type: this.type, getAttributes: (n) => { const [,,e, t, r] = n; return { src: t, alt: e, title: r }; } })]; } }); let vp = Ap; const Np = "aaa1rp3bb0ott3vie4c1le2ogado5udhabi7c0ademy5centure6ountant0s9o1tor4d0s1ult4e0g1ro2tna4f0l1rica5g0akhan5ency5i0g1rbus3force5tel5kdn3l0ibaba4pay4lfinanz6state5y2sace3tom5m0azon4ericanexpress7family11x2fam3ica3sterdam8nalytics7droid5quan4z2o0l2partments8p0le4q0uarelle8r0ab1mco4chi3my2pa2t0e3s0da2ia2sociates9t0hleta5torney7u0ction5di0ble3o3spost5thor3o0s4w0s2x0a2z0ure5ba0by2idu3namex4d1k2r0celona5laycard4s5efoot5gains6seball5ketball8uhaus5yern5b0c1t1va3cg1n2d1e0ats2uty4er2rlin4st0buy5t2f1g1h0arti5i0ble3d1ke2ng0o3o1z2j1lack0friday9ockbuster8g1omberg7ue3m0s1w2n0pparibas9o0ats3ehringer8fa2m1nd2o0k0ing5sch2tik2on4t1utique6x2r0adesco6idgestone9oadway5ker3ther5ussels7s1t1uild0ers6siness6y1zz3v1w1y1z0h3ca0b1fe2l0l1vinklein9m0era3p2non3petown5ital0one8r0avan4ds2e0er0s4s2sa1e1h1ino4t0ering5holic7ba1n1re3c1d1enter4o1rn3f0a1d2g1h0anel2nel4rity4se2t2eap3intai5ristmas6ome4urch5i0priani6rcle4sco3tadel4i0c2y3k1l0aims4eaning6ick2nic1que6othing5ud3ub0med6m1n1o0ach3des3ffee4llege4ogne5m0mbank4unity6pany2re3uter5sec4ndos3struction8ulting7tact3ractors9oking4l1p2rsica5untry4pon0s4rses6pa2r0edit0card4union9icket5own3s1uise0s6u0isinella9v1w1x1y0mru3ou3z2dad1nce3ta1e1ing3sun4y2clk3ds2e0al0er2s3gree4livery5l1oitte5ta3mocrat6ntal2ist5si0gn4v2hl2iamonds6et2gital5rect0ory7scount3ver5h2y2j1k1m1np2o0cs1tor4g1mains5t1wnload7rive4tv2ubai3nlop4pont4rban5vag2r2z2earth3t2c0o2deka3u0cation8e1g1mail3erck5nergy4gineer0ing9terprises10pson4quipment8r0icsson6ni3s0q1tate5t1u0rovision8s2vents5xchange6pert3osed4ress5traspace10fage2il1rwinds6th3mily4n0s2rm0ers5shion4t3edex3edback6rrari3ero6i0delity5o2lm2nal1nce1ial7re0stone6mdale6sh0ing5t0ness6j1k1lickr3ghts4r2orist4wers5y2m1o0o0d1tball6rd1ex2sale4um3undation8x2r0ee1senius7l1ogans4ntier7tr2ujitsu5n0d2rniture7tbol5yi3ga0l0lery3o1up4me0s3p1rden4y2b0iz3d0n2e0a1nt0ing5orge5f1g0ee3h1i0ft0s3ves2ing5l0ass3e1obal2o4m0ail3bh2o1x2n1odaddy5ld0point6f2o0dyear5g0le4p1t1v2p1q1r0ainger5phics5tis4een3ipe3ocery4up4s1t1u0cci3ge2ide2tars5ru3w1y2hair2mburg5ngout5us3bo2dfc0bank7ealth0care8lp1sinki6re1mes5iphop4samitsu7tachi5v2k0t2m1n1ockey4ldings5iday5medepot5goods5s0ense7nda3rse3spital5t0ing5t0els3mail5use3w2r1sbc3t1u0ghes5yatt3undai7ibm2cbc2e1u2d1e0ee3fm2kano4l1m0amat4db2mo0bilien9n0c1dustries8finiti5o2g1k1stitute6urance4e4t0ernational10uit4vestments10o1piranga7q1r0ish4s0maili5t0anbul7t0au2v3jaguar4va3cb2e0ep2tzt3welry6io2ll2m0p2nj2o0bs1urg4t1y2p0morgan6rs3uegos4niper7kaufen5ddi3e0rryhotels6properties14fh2g1h1i0a1ds2m1ndle4tchen5wi3m1n1oeln3matsu5sher5p0mg2n2r0d1ed3uokgroup8w1y0oto4z2la0caixa5mborghini8er3nd0rover6xess5salle5t0ino3robe5w0yer5b1c1ds2ease3clerc5frak4gal2o2xus4gbt3i0dl2fe0insurance9style7ghting6ke2lly3mited4o2ncoln4k2ve1ing5k1lc1p2oan0s3cker3us3l1ndon4tte1o3ve3pl0financial11r1s1t0d0a3u0ndbeck6xe1ury5v1y2ma0drid4if1son4keup4n0agement7go3p1rket0ing3s4riott5shalls7ttel5ba2c0kinsey7d1e0d0ia3et2lbourne7me1orial6n0u2rckmsd7g1h1iami3crosoft7l1ni1t2t0subishi9k1l0b1s2m0a2n1o0bi0le4da2e1i1m1nash3ey2ster5rmon3tgage6scow4to0rcycles9v0ie4p1q1r1s0d2t0n1r2u0seum3ic4v1w1x1y1z2na0b1goya4me2vy3ba2c1e0c1t0bank4flix4work5ustar5w0s2xt0direct7us4f0l2g0o2hk2i0co2ke1on3nja3ssan1y5l1o0kia3rton4w0ruz3tv4p1r0a1w2tt2u1yc2z2obi1server7ffice5kinawa6layan0group9lo3m0ega4ne1g1l0ine5oo2pen3racle3nge4g0anic5igins6saka4tsuka4t2vh3pa0ge2nasonic7ris2s1tners4s1y3y2ccw3e0t2f0izer5g1h0armacy6d1ilips5one2to0graphy6s4ysio5ics1tet2ures6d1n0g1k2oneer5zza4k1l0ace2y0station9umbing5s3m1n0c2ohl2ker3litie5rn2st3r0axi3ess3ime3o0d0uctions8f1gressive8mo2perties3y5tection8u0dential9s1t1ub2w0c2y2qa1pon3uebec3st5racing4dio4e0ad1lestate6tor2y4cipes5d0stone5umbrella9hab3ise0n3t2liance6n0t0als5pair3ort3ublican8st0aurant8view0s5xroth6ich0ardli6oh3l1o1p2o0cks3deo3gers4om3s0vp3u0gby3hr2n2w0e2yukyu6sa0arland6fe0ty4kura4le1on3msclub4ung5ndvik0coromant12ofi4p1rl2s1ve2xo3b0i1s2c0b1haeffler7midt4olarships8ol3ule3warz5ience5ot3d1e0arch3t2cure1ity6ek2lect4ner3rvices6ven3w1x0y3fr2g1h0angrila6rp3ell3ia1ksha5oes2p0ping5uji3w3i0lk2na1gles5te3j1k0i0n2y0pe4l0ing4m0art3ile4n0cf3o0ccer3ial4ftbank4ware6hu2lar2utions7ng1y2y2pa0ce3ort2t3r0l2s1t0ada2ples4r1tebank4farm7c0group6ockholm6rage3e3ream4udio2y3yle4u0cks3pplies3y2ort5rf1gery5zuki5v1watch4iss4x1y0dney4stems6z2tab1ipei4lk2obao4rget4tamotors6r2too4x0i3c0i2d0k2eam2ch0nology8l1masek5nnis4va3f1g1h0d1eater2re6iaa2ckets5enda4ps2res2ol4j0maxx4x2k0maxx5l1m0all4n1o0day3kyo3ols3p1ray3shiba5tal3urs3wn2yota3s3r0ade1ing4ining5vel0ers0insurance16ust3v2t1ube2i1nes3shu4v0s2w1z2ua1bank3s2g1k1nicom3versity8o2ol2ps2s1y1z2va0cations7na1guard7c1e0gas3ntures6risign5mögensberater2ung14sicherung10t2g1i0ajes4deo3g1king4llas4n1p1rgin4sa1ion4va1o3laanderen9n1odka3lvo3te1ing3o2yage5u2wales2mart4ter4ng0gou5tch0es6eather0channel12bcam3er2site5d0ding5ibo2r3f1hoswho6ien2ki2lliamhill9n0dows4e1ners6me2olterskluwer11odside6rk0s2ld3w2s1tc1f3xbox3erox4ihuan4n2xx2yz3yachts4hoo3maxun5ndex5e1odobashi7ga2kohama6u0tube6t1un3za0ppos4ra3ero3ip2m1one3uerich6w2"; const Dp = "ελ1υ2бг1ел3дети4ею2католик6ом3мкд2он1сква6онлайн5рг3рус2ф2сайт3рб3укр3қаз3հայ3ישראל5קום3ابوظبي5رامكو5لاردن4بحرين5جزائر5سعودية6عليان5مغرب5مارات5یران5بارت2زار4يتك3ھارت5تونس4سودان3رية5شبكة4عراق2ب2مان4فلسطين6قطر3كاثوليك6وم3مصر2ليسيا5وريتانيا7قع4همراه5پاکستان7ڀارت4कॉम3नेट3भारत0म्3ोत5संगठन5বাংলা5ভারত2ৰত4ਭਾਰਤ4ભારત4ଭାରତ4இந்தியா6லங்கை6சிங்கப்பூர்11భారత్5ಭಾರತ4ഭാരതം5ලංකා4คอม3ไทย3ລາວ3გე2みんな3アマゾン4クラウド4グーグル4コム2ストア3セール3ファッション6ポイント4世界2中信1国1國1文网3亚马逊3企业2佛山2信息2健康2八卦2公司1益2台湾1灣2商城1店1标2嘉里0大酒店5在线2大拿2天主教3娱乐2家電2广东2微博2慈善2我爱你3手机2招聘2政务1府2新加坡2闻2时尚2書籍2机构2淡马锡3游戏2澳門2点看2移动2组织机构4网址1店1站1络2联通2谷歌2购物2通販2集团2電訊盈科4飞利浦3食品2餐厅2香格里拉3港2닷넷1컴2삼성2한국2"; const Pi = "numeric"; const Li = "ascii"; const Bi = "alpha"; const Gt = "asciinumeric"; const Kt = "alphanumeric"; const zi = "domain"; const ja = "emoji"; const Ip = "scheme"; const Rp = "slashscheme"; const ii = "whitespace"; function Pp(n, e) { return n in e || (e[n] = []), e[n]; } function ut(n, e, t) { e[Pi] && (e[Gt] = !0, e[Kt] = !0), e[Li] && (e[Gt] = !0, e[Bi] = !0), e[Gt] && (e[Kt] = !0), e[Bi] && (e[Kt] = !0), e[Kt] && (e[zi] = !0), e[ja] && (e[zi] = !0); for (const r in e) { const i = Pp(r, t); !i.includes(n) && i.push(n); } } function Lp(n, e) { const t = {}; for (const r in e)e[r].includes(n) && (t[r] = !0); return t; } function de(n = null) { this.j = {}, this.jr = [], this.jd = null, this.t = n; }de.groups = {}; de.prototype = { accepts() { return !!this.t; }, go(n) {
  const e = this; const t = e.j[n]; if (t)
    return t; for (let r = 0; r < e.jr.length; r++) {
    const i = e.jr[r][0]; const s = e.jr[r][1]; if (s && i.test(n))
      return s;
  } return e.jd;
}, has(n, e = !1) { return e ? n in this.j : !!this.go(n); }, ta(n, e, t, r) { for (let i = 0; i < n.length; i++) this.tt(n[i], e, t, r); }, tr(n, e, t, r) { r = r || de.groups; let i; return e && e.j ? i = e : (i = new de(e), t && r && ut(e, t, r)), this.jr.push([n, i]), i; }, ts(n, e, t, r) {
  let i = this; const s = n.length; if (!s)
    return i; for (let o = 0; o < s - 1; o++)i = i.tt(n[o]); return i.tt(n[s - 1], e, t, r);
}, tt(n, e, t, r) {
  r = r || de.groups; const i = this; if (e && e.j)
    return i.j[n] = e, e; const s = e; let o; let l = i.go(n); if (l ? (o = new de(), Object.assign(o.j, l.j), o.jr.push.apply(o.jr, l.jr), o.jd = l.jd, o.t = l.t) : o = new de(), s) {
    if (r) {
      if (o.t && typeof o.t == "string") { const a = Object.assign(Lp(o.t, r), t); ut(s, a, r); }
      else {
        t && ut(s, t, r);
      }
    }o.t = s;
  } return i.j[n] = o, o;
} }; const N = (n, e, t, r, i) => n.ta(e, t, r, i); const V = (n, e, t, r, i) => n.tr(e, t, r, i); const zo = (n, e, t, r, i) => n.ts(e, t, r, i); const k = (n, e, t, r, i) => n.tt(e, t, r, i); const Ie = "WORD"; const Fi = "UWORD"; const Wa = "ASCIINUMERICAL"; const Ka = "ALPHANUMERICAL"; const fn = "LOCALHOST"; const Hi = "TLD"; const $i = "UTLD"; const Ln = "SCHEME"; const Ot = "SLASH_SCHEME"; const ms = "NUM"; const Vi = "WS"; const gs = "NL"; const Yt = "OPENBRACE"; const Xt = "CLOSEBRACE"; const Gn = "OPENBRACKET"; const Yn = "CLOSEBRACKET"; const Xn = "OPENPAREN"; const Qn = "CLOSEPAREN"; const Zn = "OPENANGLEBRACKET"; const er = "CLOSEANGLEBRACKET"; const tr = "FULLWIDTHLEFTPAREN"; const nr = "FULLWIDTHRIGHTPAREN"; const rr = "LEFTCORNERBRACKET"; const ir = "RIGHTCORNERBRACKET"; const sr = "LEFTWHITECORNERBRACKET"; const or = "RIGHTWHITECORNERBRACKET"; const lr = "FULLWIDTHLESSTHAN"; const ar = "FULLWIDTHGREATERTHAN"; const cr = "AMPERSAND"; const ur = "APOSTROPHE"; const dr = "ASTERISK"; const Ve = "AT"; const fr = "BACKSLASH"; const hr = "BACKTICK"; const pr = "CARET"; const Ke = "COLON"; const ys = "COMMA"; const mr = "DOLLAR"; const Me = "DOT"; const gr = "EQUALS"; const bs = "EXCLAMATION"; const ge = "HYPHEN"; const Qt = "PERCENT"; const yr = "PIPE"; const br = "PLUS"; const kr = "POUND"; const Zt = "QUERY"; const ks = "QUOTE"; const Ua = "FULLWIDTHMIDDLEDOT"; const xs = "SEMI"; const we = "SLASH"; const en = "TILDE"; const xr = "UNDERSCORE"; const _a = "EMOJI"; const Sr = "SYM"; let qa = Object.freeze({ __proto__: null, ALPHANUMERICAL: Ka, AMPERSAND: cr, APOSTROPHE: ur, ASCIINUMERICAL: Wa, ASTERISK: dr, AT: Ve, BACKSLASH: fr, BACKTICK: hr, CARET: pr, CLOSEANGLEBRACKET: er, CLOSEBRACE: Xt, CLOSEBRACKET: Yn, CLOSEPAREN: Qn, COLON: Ke, COMMA: ys, DOLLAR: mr, DOT: Me, EMOJI: _a, EQUALS: gr, EXCLAMATION: bs, FULLWIDTHGREATERTHAN: ar, FULLWIDTHLEFTPAREN: tr, FULLWIDTHLESSTHAN: lr, FULLWIDTHMIDDLEDOT: Ua, FULLWIDTHRIGHTPAREN: nr, HYPHEN: ge, LEFTCORNERBRACKET: rr, LEFTWHITECORNERBRACKET: sr, LOCALHOST: fn, NL: gs, NUM: ms, OPENANGLEBRACKET: Zn, OPENBRACE: Yt, OPENBRACKET: Gn, OPENPAREN: Xn, PERCENT: Qt, PIPE: yr, PLUS: br, POUND: kr, QUERY: Zt, QUOTE: ks, RIGHTCORNERBRACKET: ir, RIGHTWHITECORNERBRACKET: or, SCHEME: Ln, SEMI: xs, SLASH: we, SLASH_SCHEME: Ot, SYM: Sr, TILDE: en, TLD: Hi, UNDERSCORE: xr, UTLD: $i, UWORD: Fi, WORD: Ie, WS: Vi }); const Ne = /[a-z]/; const $t = new RegExp("\\p{L}", "u"); const si = new RegExp("\\p{Emoji}", "u"); const De = /\d/; const oi = /\s/; const Fo = "\r"; const li = `
`; const Bp = "️"; const zp = "‍"; const ai = "￼"; let En = null; let On = null; function Fp(n = []) { const e = {}; de.groups = e; const t = new de(); En == null && (En = Ho(Np)), On == null && (On = Ho(Dp)), k(t, "'", ur), k(t, "{", Yt), k(t, "}", Xt), k(t, "[", Gn), k(t, "]", Yn), k(t, "(", Xn), k(t, ")", Qn), k(t, "<", Zn), k(t, ">", er), k(t, "（", tr), k(t, "）", nr), k(t, "「", rr), k(t, "」", ir), k(t, "『", sr), k(t, "』", or), k(t, "＜", lr), k(t, "＞", ar), k(t, "&", cr), k(t, "*", dr), k(t, "@", Ve), k(t, "`", hr), k(t, "^", pr), k(t, ":", Ke), k(t, ",", ys), k(t, "$", mr), k(t, ".", Me), k(t, "=", gr), k(t, "!", bs), k(t, "-", ge), k(t, "%", Qt), k(t, "|", yr), k(t, "+", br), k(t, "#", kr), k(t, "?", Zt), k(t, "\"", ks), k(t, "/", we), k(t, ";", xs), k(t, "~", en), k(t, "_", xr), k(t, "\\", fr), k(t, "・", Ua); const r = V(t, De, ms, { [Pi]: !0 }); V(r, De, r); const i = V(r, Ne, Wa, { [Gt]: !0 }); const s = V(r, $t, Ka, { [Kt]: !0 }); const o = V(t, Ne, Ie, { [Li]: !0 }); V(o, De, i), V(o, Ne, o), V(i, De, i), V(i, Ne, i); const l = V(t, $t, Fi, { [Bi]: !0 }); V(l, Ne), V(l, De, s), V(l, $t, l), V(s, De, s), V(s, Ne), V(s, $t, s); const a = k(t, li, gs, { [ii]: !0 }); const c = k(t, Fo, Vi, { [ii]: !0 }); const u = V(t, oi, Vi, { [ii]: !0 }); k(t, ai, u), k(c, li, a), k(c, ai, u), V(c, oi, u), k(u, Fo), k(u, li), V(u, oi, u), k(u, ai, u); const d = V(t, si, _a, { [ja]: !0 }); k(d, "#"), V(d, si, d), k(d, Bp, d); const f = k(d, zp); k(f, "#"), V(f, si, d); const h = [[Ne, o], [De, i]]; const p = [[Ne, null], [$t, l], [De, s]]; for (let m = 0; m < En.length; m++)Fe(t, En[m], Hi, Ie, h); for (let m = 0; m < On.length; m++)Fe(t, On[m], $i, Fi, p); ut(Hi, { tld: !0, ascii: !0 }, e), ut($i, { utld: !0, alpha: !0 }, e), Fe(t, "file", Ln, Ie, h), Fe(t, "mailto", Ln, Ie, h), Fe(t, "http", Ot, Ie, h), Fe(t, "https", Ot, Ie, h), Fe(t, "ftp", Ot, Ie, h), Fe(t, "ftps", Ot, Ie, h), ut(Ln, { scheme: !0, ascii: !0 }, e), ut(Ot, { slashscheme: !0, ascii: !0 }, e), n = n.sort((m, g) => m[0] > g[0] ? 1 : -1); for (let m = 0; m < n.length; m++) { const g = n[m][0]; const S = n[m][1] ? { [Ip]: !0 } : { [Rp]: !0 }; g.includes("-") ? S[zi] = !0 : Ne.test(g) ? De.test(g) ? S[Gt] = !0 : S[Li] = !0 : S[Pi] = !0, zo(t, g, g, S); } return zo(t, "localhost", fn, { ascii: !0 }), t.jd = new de(Sr), { start: t, tokens: Object.assign({ groups: e }, qa) }; } function Ja(n, e) { const t = Hp(e.replace(/[A-Z]/g, l => l.toLowerCase())); const r = t.length; const i = []; let s = 0; let o = 0; for (;o < r;) { let l = n; let a = null; let c = 0; let u = null; let d = -1; let f = -1; for (;o < r && (a = l.go(t[o]));)l = a, l.accepts() ? (d = 0, f = 0, u = l) : d >= 0 && (d += t[o].length, f++), c += t[o].length, s += t[o].length, o++; s -= d, o -= f, c -= d, i.push({ t: u.t, v: e.slice(s - c, s), s: s - c, e: s }); } return i; } function Hp(n) { const e = []; const t = n.length; let r = 0; for (;r < t;) { let i = n.charCodeAt(r); let s; let o = i < 55296 || i > 56319 || r + 1 === t || (s = n.charCodeAt(r + 1)) < 56320 || s > 57343 ? n[r] : n.slice(r, r + 2); e.push(o), r += o.length; } return e; } function Fe(n, e, t, r, i) { let s; const o = e.length; for (let l = 0; l < o - 1; l++) { const a = e[l]; n.j[a] ? s = n.j[a] : (s = new de(r), s.jr = i.slice(), n.j[a] = s), n = s; } return s = new de(t), s.jr = i.slice(), n.j[e[o - 1]] = s, s; } function Ho(n) {
  const e = []; const t = []; let r = 0; let i = "0123456789"; for (;r < n.length;) {
    let s = 0; for (;i.includes(n[r + s]);)s++; if (s > 0) { e.push(t.join("")); for (let o = Number.parseInt(n.substring(r, r + s), 10); o > 0; o--)t.pop(); r += s; }
    else {
      t.push(n[r]), r++;
    }
  } return e;
} const hn = { defaultProtocol: "http", events: null, format: $o, formatHref: $o, nl2br: !1, tagName: "a", target: null, rel: null, validate: !0, truncate: 1 / 0, className: null, attributes: null, ignoreTags: [], render: null }; function Ss(n, e = null) { let t = Object.assign({}, hn); n && (t = Object.assign(t, n instanceof Ss ? n.o : n)); const r = t.ignoreTags; const i = []; for (let s = 0; s < r.length; s++)i.push(r[s].toUpperCase()); this.o = t, e && (this.defaultRender = e), this.ignoreTags = i; }Ss.prototype = { o: hn, ignoreTags: [], defaultRender(n) { return n; }, check(n) { return this.get("validate", n.toString(), n); }, get(n, e, t) { const r = e != null; let i = this.o[n]; return i && (typeof i == "object" ? (i = t.t in i ? i[t.t] : hn[n], typeof i == "function" && r && (i = i(e, t))) : typeof i == "function" && r && (i = i(e, t.t, t)), i); }, getObj(n, e, t) { let r = this.o[n]; return typeof r == "function" && e != null && (r = r(e, t.t, t)), r; }, render(n) { const e = n.render(this); return (this.get("render", null, n) || this.defaultRender)(e, n.t, n); } }; function $o(n) { return n; } function Ga(n, e) { this.t = "token", this.v = n, this.tk = e; }Ga.prototype = { isLink: !1, toString() { return this.v; }, toHref(n) { return this.toString(); }, toFormattedString(n) { const e = this.toString(); const t = n.get("truncate", e, this); const r = n.get("format", e, this); return t && r.length > t ? `${r.substring(0, t)}…` : r; }, toFormattedHref(n) { return n.get("formatHref", this.toHref(n.get("defaultProtocol")), this); }, startIndex() { return this.tk[0].s; }, endIndex() { return this.tk[this.tk.length - 1].e; }, toObject(n = hn.defaultProtocol) { return { type: this.t, value: this.toString(), isLink: this.isLink, href: this.toHref(n), start: this.startIndex(), end: this.endIndex() }; }, toFormattedObject(n) { return { type: this.t, value: this.toFormattedString(n), isLink: this.isLink, href: this.toFormattedHref(n), start: this.startIndex(), end: this.endIndex() }; }, validate(n) { return n.get("validate", this.toString(), this); }, render(n) { const e = this; const t = this.toHref(n.get("defaultProtocol")); const r = n.get("formatHref", t, this); const i = n.get("tagName", t, e); const s = this.toFormattedString(n); const o = {}; const l = n.get("className", t, e); const a = n.get("target", t, e); const c = n.get("rel", t, e); const u = n.getObj("attributes", t, e); const d = n.getObj("events", t, e); return o.href = r, l && (o.class = l), a && (o.target = a), c && (o.rel = c), u && Object.assign(o, u), { tagName: i, attributes: o, content: s, eventListeners: d }; } }; function zr(n, e) { class t extends Ga {constructor(i, s) { super(i, s), this.t = n; }} for (const r in e)t.prototype[r] = e[r]; return t.t = n, t; } const Vo = zr("email", { isLink: !0, toHref() { return `mailto:${this.toString()}`; } }); const jo = zr("text"); const $p = zr("nl"); const An = zr("url", { isLink: !0, toHref(n = hn.defaultProtocol) { return this.hasProtocol() ? this.v : `${n}://${this.v}`; }, hasProtocol() { const n = this.tk; return n.length >= 2 && n[0].t !== fn && n[1].t === Ke; } }); const me = n => new de(n); function Vp({ groups: n }) { const e = n.domain.concat([cr, dr, Ve, fr, hr, pr, mr, gr, ge, ms, Qt, yr, br, kr, we, Sr, en, xr]); const t = [ur, Ke, ys, Me, bs, Qt, Zt, ks, xs, Zn, er, Yt, Xt, Yn, Gn, Xn, Qn, tr, nr, rr, ir, sr, or, lr, ar]; const r = [cr, ur, dr, fr, hr, pr, mr, gr, ge, Yt, Xt, Qt, yr, br, kr, Zt, we, Sr, en, xr]; const i = me(); const s = k(i, en); N(s, r, s), N(s, n.domain, s); const o = me(); const l = me(); const a = me(); N(i, n.domain, o), N(i, n.scheme, l), N(i, n.slashscheme, a), N(o, r, s), N(o, n.domain, o); const c = k(o, Ve); k(s, Ve, c), k(l, Ve, c), k(a, Ve, c); const u = k(s, Me); N(u, r, s), N(u, n.domain, s); const d = me(); N(c, n.domain, d), N(d, n.domain, d); const f = k(d, Me); N(f, n.domain, d); const h = me(Vo); N(f, n.tld, h), N(f, n.utld, h), k(c, fn, h); const p = k(d, ge); k(p, ge, p), N(p, n.domain, d), N(h, n.domain, d), k(h, Me, f), k(h, ge, p); const m = k(h, Ke); N(m, n.numeric, Vo); const g = k(o, ge); const y = k(o, Me); k(g, ge, g), N(g, n.domain, o), N(y, r, s), N(y, n.domain, o); const S = me(An); N(y, n.tld, S), N(y, n.utld, S), N(S, n.domain, o), N(S, r, s), k(S, Me, y), k(S, ge, g), k(S, Ve, c); const O = k(S, Ke); const B = me(An); N(O, n.numeric, B); const v = me(An); const F = me(); N(v, e, v), N(v, t, F), N(F, e, v), N(F, t, F), k(S, we, v), k(B, we, v); const E = k(l, Ke); const P = k(a, Ke); const _ = k(P, we); const zt = k(_, we); N(l, n.domain, o), k(l, Me, y), k(l, ge, g), N(a, n.domain, o), k(a, Me, y), k(a, ge, g), N(E, n.domain, v), k(E, we, v), k(E, Zt, v), N(zt, n.domain, v), N(zt, e, v), k(zt, we, v); const Os = [[Yt, Xt], [Gn, Yn], [Xn, Qn], [Zn, er], [tr, nr], [rr, ir], [sr, or], [lr, ar]]; for (let Fr = 0; Fr < Os.length; Fr++) { const [As, Hr] = Os[Fr]; const yn = k(v, As); k(F, As, yn), k(yn, Hr, v); const Ct = me(An); N(yn, e, Ct); const Ft = me(); N(yn, t), N(Ct, e, Ct), N(Ct, t, Ft), N(Ft, e, Ct), N(Ft, t, Ft), k(Ct, Hr, v), k(Ft, Hr, v); } return k(i, fn, S), k(i, gs, $p), { start: i, tokens: qa }; } function jp(n, e, t) {
  let r = t.length; let i = 0; let s = []; let o = []; for (;i < r;) {
    let l = n; let a = null; let c = null; let u = 0; let d = null; let f = -1; for (;i < r && !(a = l.go(t[i].t));)o.push(t[i++]); for (;i < r && (c = a || l.go(t[i].t));)a = null, l = c, l.accepts() ? (f = 0, d = l) : f >= 0 && f++, i++, u++; if (f < 0) {
      i -= u, i < r && (o.push(t[i]), i++);
    }
    else { o.length > 0 && (s.push(ci(jo, e, o)), o = []), i -= f, u -= f; const h = d.t; const p = t.slice(i - u, i); s.push(ci(h, e, p)); }
  } return o.length > 0 && s.push(ci(jo, e, o)), s;
} function ci(n, e, t) { const r = t[0].s; const i = t[t.length - 1].e; const s = e.slice(r, i); return new n(s, t); } const Wp = typeof console < "u" && console && console.warn || (() => {}); const Kp = "until manual call of linkify.init(). Register all schemes and plugins before invoking linkify the first time."; const H = { scanner: null, parser: null, tokenQueue: [], pluginQueue: [], customSchemes: [], initialized: !1 }; function Up() { return de.groups = {}, H.scanner = null, H.parser = null, H.tokenQueue = [], H.pluginQueue = [], H.customSchemes = [], H.initialized = !1, H; } function Wo(n, e = !1) {
  if (H.initialized && Wp(`linkifyjs: already initialized - will not register custom scheme "${n}" ${Kp}`), !/^[0-9a-z]+(-[0-9a-z]+)*$/.test(n)) {
    throw new Error(`linkifyjs: incorrect scheme format.
1. Must only contain digits, lowercase ASCII letters or "-"
2. Cannot start or end with "-"
3. "-" cannot repeat`);
  } H.customSchemes.push([n, e]);
} function _p() { H.scanner = Fp(H.customSchemes); for (let n = 0; n < H.tokenQueue.length; n++)H.tokenQueue[n][1]({ scanner: H.scanner }); H.parser = Vp(H.scanner.tokens); for (let n = 0; n < H.pluginQueue.length; n++)H.pluginQueue[n][1]({ scanner: H.scanner, parser: H.parser }); return H.initialized = !0, H; } function Cs(n) { return H.initialized || _p(), jp(H.parser.start, n, Ja(H.scanner.start, n)); }Cs.scan = Ja; function Ya(n, e = null, t = null) {
  if (e && typeof e == "object") {
    if (t)
      throw new Error(`linkifyjs: Invalid link type ${e}; must be a string`); t = e, e = null;
  } const r = new Ss(t); const i = Cs(n); const s = []; for (let o = 0; o < i.length; o++) { const l = i[o]; l.isLink && (!e || l.t === e) && r.check(l) && s.push(l.toFormattedObject(r)); } return s;
} let Ms = "[\0-   ᠎ -\u2029 　]"; let qp = new RegExp(Ms); let Jp = new RegExp(`${Ms}$`); let Gp = new RegExp(Ms, "g"); function Yp(n) { return n.length === 1 ? n[0].isLink : n.length === 3 && n[1].isLink ? ["()", "[]"].includes(n[0].value + n[2].value) : !1; } function Xp(n) {
  return new W({ key: new Q("autolink"), appendTransaction: (e, t, r) => {
    const i = e.some(c => c.docChanged) && !t.doc.eq(r.doc); const s = e.some(c => c.getMeta("preventAutolink")); if (!i || s)
      return; const { tr: o } = r; const l = Lh(t.doc, [...e]); if (Wh(l).forEach(({ newRange: c }) => {
      const u = zh(r.doc, c, h => h.isTextblock); let d, f; if (u.length > 1) {
        d = u[0], f = r.doc.textBetween(d.pos, d.pos + d.node.nodeSize, void 0, " ");
      }
      else if (u.length) {
        const h = r.doc.textBetween(c.from, c.to, " ", " "); if (!Jp.test(h))
          return; d = u[0], f = r.doc.textBetween(d.pos, c.to, void 0, " ");
      } if (d && f) {
        const h = f.split(qp).filter(Boolean); if (h.length <= 0)
          return !1; const p = h[h.length - 1]; const m = d.pos + f.lastIndexOf(p); if (!p)
          return !1; const g = Cs(p).map(y => y.toObject(n.defaultProtocol)); if (!Yp(g))
          return !1; g.filter(y => y.isLink).map(y => ({ ...y, from: m + y.start + 1, to: m + y.end + 1 })).filter(y => r.schema.marks.code ? !r.doc.rangeHasMark(y.from, y.to, r.schema.marks.code) : !0).filter(y => n.validate(y.value)).filter(y => n.shouldAutoLink(y.value)).forEach((y) => { ps(y.from, y.to, r.doc).some(S => S.mark.type === n.type) || o.addMark(y.from, y.to, n.type.create({ href: y.href })); });
      }
    }), !!o.steps.length) {
      return o;
    }
  } });
} function Qp(n) {
  return new W({ key: new Q("handleClickLink"), props: { handleClick: (e, t, r) => {
    let i, s; if (r.button !== 0 || !e.editable)
      return !1; let o = null; if (r.target instanceof HTMLAnchorElement) {
      o = r.target;
    }
    else { let u = r.target; const d = []; for (;u.nodeName !== "DIV";)d.push(u), u = u.parentNode; o = d.find(f => f.nodeName === "A"); } if (!o)
      return !1; const l = Ha(e.state, n.type.name); const a = (i = o?.href) != null ? i : l.href; const c = (s = o?.target) != null ? s : l.target; return n.enableClickSelection && n.editor.commands.extendMarkRange(n.type.name), o && a ? (window.open(a, c), !0) : !1;
  } } });
} function Zp(n) {
  return new W({ key: new Q("handlePasteLink"), props: { handlePaste: (e, t, r) => {
    const { state: i } = e; const { selection: s } = i; const { empty: o } = s; if (o)
      return !1; let l = ""; r.content.forEach((c) => { l += c.textContent; }); const a = Ya(l, { defaultProtocol: n.defaultProtocol }).find(c => c.isLink && c.value === l); return !l || !a ? !1 : n.editor.commands.setMark(n.type, { href: a.href });
  } } });
} function it(n, e) { const t = ["http", "https", "ftp", "ftps", "mailto", "tel", "callto", "sms", "cid", "xmpp"]; return e && e.forEach((r) => { const i = typeof r == "string" ? r : r.scheme; i && t.push(i); }), !n || n.replace(Gp, "").match(new RegExp(`^(?:(?:${t.join("|")}):|[^a-z]|[a-z0-9+.-]+(?:[^a-z+.-:]|$))`, "i")); } let em = Se.create({ name: "link", priority: 1e3, keepOnSplit: !1, exitable: !0, onCreate() { this.options.validate && !this.options.shouldAutoLink && (this.options.shouldAutoLink = this.options.validate, console.warn("The `validate` option is deprecated. Rename to the `shouldAutoLink` option instead.")), this.options.protocols.forEach((n) => { if (typeof n == "string") { Wo(n); return; }Wo(n.scheme, n.optionalSlashes); }); }, onDestroy() { Up(); }, inclusive() { return this.options.autolink; }, addOptions() { return { openOnClick: !0, enableClickSelection: !1, linkOnPaste: !0, autolink: !0, protocols: [], defaultProtocol: "http", HTMLAttributes: { target: "_blank", rel: "noopener noreferrer nofollow", class: null }, isAllowedUri: (n, e) => !!it(n, e.protocols), validate: n => !!n, shouldAutoLink: n => !!n }; }, addAttributes() { return { href: { default: null, parseHTML(n) { return n.getAttribute("href"); } }, target: { default: this.options.HTMLAttributes.target }, rel: { default: this.options.HTMLAttributes.rel }, class: { default: this.options.HTMLAttributes.class } }; }, parseHTML() { return [{ tag: "a[href]", getAttrs: (n) => { const e = n.getAttribute("href"); return !e || !this.options.isAllowedUri(e, { defaultValidate: t => !!it(t, this.options.protocols), protocols: this.options.protocols, defaultProtocol: this.options.defaultProtocol }) ? !1 : null; } }]; }, renderHTML({ HTMLAttributes: n }) { return this.options.isAllowedUri(n.href, { defaultValidate: e => !!it(e, this.options.protocols), protocols: this.options.protocols, defaultProtocol: this.options.defaultProtocol }) ? ["a", K(this.options.HTMLAttributes, n), 0] : ["a", K(this.options.HTMLAttributes, { ...n, href: "" }), 0]; }, addCommands() { return { setLink: n => ({ chain: e }) => { const { href: t } = n; return this.options.isAllowedUri(t, { defaultValidate: r => !!it(r, this.options.protocols), protocols: this.options.protocols, defaultProtocol: this.options.defaultProtocol }) ? e().setMark(this.name, n).setMeta("preventAutolink", !0).run() : !1; }, toggleLink: n => ({ chain: e }) => { const { href: t } = n || {}; return t && !this.options.isAllowedUri(t, { defaultValidate: r => !!it(r, this.options.protocols), protocols: this.options.protocols, defaultProtocol: this.options.defaultProtocol }) ? !1 : e().toggleMark(this.name, n, { extendEmptyMarkRange: !0 }).setMeta("preventAutolink", !0).run(); }, unsetLink: () => ({ chain: n }) => n().unsetMark(this.name, { extendEmptyMarkRange: !0 }).setMeta("preventAutolink", !0).run() }; }, addPasteRules() { return [et({ find: (n) => { const e = []; if (n) { const { protocols: t, defaultProtocol: r } = this.options; const i = Ya(n).filter(s => s.isLink && this.options.isAllowedUri(s.value, { defaultValidate: o => !!it(o, t), protocols: t, defaultProtocol: r })); i.length && i.forEach(s => e.push({ text: s.value, data: { href: s.href }, index: s.start })); } return e; }, type: this.type, getAttributes: (n) => { let e; return { href: (e = n.data) == null ? void 0 : e.href }; } })]; }, addProseMirrorPlugins() { const n = []; const { protocols: e, defaultProtocol: t } = this.options; return this.options.autolink && n.push(Xp({ type: this.type, defaultProtocol: this.options.defaultProtocol, validate: r => this.options.isAllowedUri(r, { defaultValidate: i => !!it(i, e), protocols: e, defaultProtocol: t }), shouldAutoLink: this.options.shouldAutoLink })), this.options.openOnClick === !0 && n.push(Qp({ type: this.type, editor: this.editor, enableClickSelection: this.options.enableClickSelection })), this.options.linkOnPaste && n.push(Zp({ editor: this.editor, defaultProtocol: this.options.defaultProtocol, type: this.type })), n; } }); let tm = em; let nm = L.create({ name: "textAlign", addOptions() { return { types: [], alignments: ["left", "center", "right", "justify"], defaultAlignment: null }; }, addGlobalAttributes() { return [{ types: this.options.types, attributes: { textAlign: { default: this.options.defaultAlignment, parseHTML: (n) => { const e = n.style.textAlign; return this.options.alignments.includes(e) ? e : this.options.defaultAlignment; }, renderHTML: n => n.textAlign ? { style: `text-align: ${n.textAlign}` } : {} } } }]; }, addCommands() { return { setTextAlign: n => ({ commands: e }) => this.options.alignments.includes(n) ? this.options.types.map(t => e.updateAttributes(t, { textAlign: n })).every(t => t) : !1, unsetTextAlign: () => ({ commands: n }) => this.options.types.map(e => n.resetAttributes(e, "textAlign")).every(e => e), toggleTextAlign: n => ({ editor: e, commands: t }) => this.options.alignments.includes(n) ? e.isActive({ textAlign: n }) ? t.unsetTextAlign() : t.setTextAlign(n) : !1 }; }, addKeyboardShortcuts() { return { "Mod-Shift-l": () => this.editor.commands.setTextAlign("left"), "Mod-Shift-e": () => this.editor.commands.setTextAlign("center"), "Mod-Shift-r": () => this.editor.commands.setTextAlign("right"), "Mod-Shift-j": () => this.editor.commands.setTextAlign("justify") }; } }); let rm = nm; let im = 20; let Xa = (n, e = 0) => { const t = []; return !n.children.length || e > im || Array.from(n.children).forEach((r) => { r.tagName === "SPAN" ? t.push(r) : r.children.length && t.push(...Xa(r, e + 1)); }), t; }; let sm = (n) => {
  if (!n.children.length)
    return; const e = Xa(n); e && e.forEach((t) => { let r, i; const s = t.getAttribute("style"); const o = (i = (r = t.parentElement) == null ? void 0 : r.closest("span")) == null ? void 0 : i.getAttribute("style"); t.setAttribute("style", `${o};${s}`); });
}; let Qa = Se.create({ name: "textStyle", priority: 101, addOptions() { return { HTMLAttributes: {}, mergeNestedSpanStyles: !0 }; }, parseHTML() { return [{ tag: "span", consuming: !1, getAttrs: n => n.hasAttribute("style") ? (this.options.mergeNestedSpanStyles && sm(n), {}) : !1 }]; }, renderHTML({ HTMLAttributes: n }) { return ["span", K(this.options.HTMLAttributes, n), 0]; }, addCommands() {
  return { toggleTextStyle: n => ({ commands: e }) => e.toggleMark(this.name, n), removeEmptyTextStyle: () => ({ tr: n }) => {
    const { selection: e } = n; return n.doc.nodesBetween(e.from, e.to, (t, r) => {
      if (t.isTextblock)
        return !0; t.marks.filter(i => i.type === this.type).some(i => Object.values(i.attrs).some(s => !!s)) || n.removeMark(r, r + t.nodeSize, this.type);
    }), !0;
  } };
} }); let om = L.create({ name: "backgroundColor", addOptions() { return { types: ["textStyle"] }; }, addGlobalAttributes() {
  return [{ types: this.options.types, attributes: { backgroundColor: { default: null, parseHTML: (n) => {
    let e; const t = n.getAttribute("style"); if (t) {
      const r = t.split(";").map(i => i.trim()).filter(Boolean); for (let i = r.length - 1; i >= 0; i -= 1) {
        const s = r[i].split(":"); if (s.length >= 2) {
          const o = s[0].trim().toLowerCase(); const l = s.slice(1).join(":").trim(); if (o === "background-color")
            return l.replace(/['"]+/g, "");
        }
      }
    } return (e = n.style.backgroundColor) == null ? void 0 : e.replace(/['"]+/g, "");
  }, renderHTML: n => n.backgroundColor ? { style: `background-color: ${n.backgroundColor}` } : {} } } }];
}, addCommands() { return { setBackgroundColor: n => ({ chain: e }) => e().setMark("textStyle", { backgroundColor: n }).run(), unsetBackgroundColor: () => ({ chain: n }) => n().setMark("textStyle", { backgroundColor: null }).removeEmptyTextStyle().run() }; } }); let lm = L.create({ name: "color", addOptions() { return { types: ["textStyle"] }; }, addGlobalAttributes() {
  return [{ types: this.options.types, attributes: { color: { default: null, parseHTML: (n) => {
    let e; const t = n.getAttribute("style"); if (t) {
      const r = t.split(";").map(i => i.trim()).filter(Boolean); for (let i = r.length - 1; i >= 0; i -= 1) {
        const s = r[i].split(":"); if (s.length >= 2) {
          const o = s[0].trim().toLowerCase(); const l = s.slice(1).join(":").trim(); if (o === "color")
            return l.replace(/['"]+/g, "");
        }
      }
    } return (e = n.style.color) == null ? void 0 : e.replace(/['"]+/g, "");
  }, renderHTML: n => n.color ? { style: `color: ${n.color}` } : {} } } }];
}, addCommands() { return { setColor: n => ({ chain: e }) => e().setMark("textStyle", { color: n }).run(), unsetColor: () => ({ chain: n }) => n().setMark("textStyle", { color: null }).removeEmptyTextStyle().run() }; } }); let am = L.create({ name: "fontFamily", addOptions() { return { types: ["textStyle"] }; }, addGlobalAttributes() { return [{ types: this.options.types, attributes: { fontFamily: { default: null, parseHTML: n => n.style.fontFamily, renderHTML: n => n.fontFamily ? { style: `font-family: ${n.fontFamily}` } : {} } } }]; }, addCommands() { return { setFontFamily: n => ({ chain: e }) => e().setMark("textStyle", { fontFamily: n }).run(), unsetFontFamily: () => ({ chain: n }) => n().setMark("textStyle", { fontFamily: null }).removeEmptyTextStyle().run() }; } }); let cm = L.create({ name: "fontSize", addOptions() { return { types: ["textStyle"] }; }, addGlobalAttributes() { return [{ types: this.options.types, attributes: { fontSize: { default: null, parseHTML: n => n.style.fontSize, renderHTML: n => n.fontSize ? { style: `font-size: ${n.fontSize}` } : {} } } }]; }, addCommands() { return { setFontSize: n => ({ chain: e }) => e().setMark("textStyle", { fontSize: n }).run(), unsetFontSize: () => ({ chain: n }) => n().setMark("textStyle", { fontSize: null }).removeEmptyTextStyle().run() }; } }); let um = L.create({ name: "lineHeight", addOptions() { return { types: ["textStyle"] }; }, addGlobalAttributes() { return [{ types: this.options.types, attributes: { lineHeight: { default: null, parseHTML: n => n.style.lineHeight, renderHTML: n => n.lineHeight ? { style: `line-height: ${n.lineHeight}` } : {} } } }]; }, addCommands() { return { setLineHeight: n => ({ chain: e }) => e().setMark("textStyle", { lineHeight: n }).run(), unsetLineHeight: () => ({ chain: n }) => n().setMark("textStyle", { lineHeight: null }).removeEmptyTextStyle().run() }; } }); L.create({ name: "textStyleKit", addExtensions() { const n = []; return this.options.backgroundColor !== !1 && n.push(om.configure(this.options.backgroundColor)), this.options.color !== !1 && n.push(lm.configure(this.options.color)), this.options.fontFamily !== !1 && n.push(am.configure(this.options.fontFamily)), this.options.fontSize !== !1 && n.push(cm.configure(this.options.fontSize)), this.options.lineHeight !== !1 && n.push(um.configure(this.options.lineHeight)), this.options.textStyle !== !1 && n.push(Qa.configure(this.options.textStyle)), n; } }); let dm = Se.create({ name: "underline", addOptions() { return { HTMLAttributes: {} }; }, parseHTML() { return [{ tag: "u" }, { style: "text-decoration", consuming: !1, getAttrs: n => n.includes("underline") ? {} : !1 }]; }, renderHTML({ HTMLAttributes: n }) { return ["u", K(this.options.HTMLAttributes, n), 0]; }, addCommands() { return { setUnderline: () => ({ commands: n }) => n.setMark(this.name), toggleUnderline: () => ({ commands: n }) => n.toggleMark(this.name), unsetUnderline: () => ({ commands: n }) => n.unsetMark(this.name) }; }, addKeyboardShortcuts() { return { "Mod-u": () => this.editor.commands.toggleUnderline(), "Mod-U": () => this.editor.commands.toggleUnderline() }; } }); let fm = dm; function Za(n = {}) { return new W({ view(e) { return new hm(e, n); } }); } class hm {
  constructor(e, t) { let r; this.editorView = e, this.cursorPos = null, this.element = null, this.timeout = -1, this.width = (r = t.width) !== null && r !== void 0 ? r : 1, this.color = t.color === !1 ? void 0 : t.color || "black", this.class = t.class, this.handlers = ["dragover", "dragend", "drop", "dragleave"].map((i) => { let s = (o) => { this[i](o); }; return e.dom.addEventListener(i, s), { name: i, handler: s }; }); }destroy() { this.handlers.forEach(({ name: e, handler: t }) => this.editorView.dom.removeEventListener(e, t)); }update(e, t) { this.cursorPos != null && t.doc != e.state.doc && (this.cursorPos > e.state.doc.content.size ? this.setCursor(null) : this.updateOverlay()); }setCursor(e) { e != this.cursorPos && (this.cursorPos = e, e == null ? (this.element.parentNode.removeChild(this.element), this.element = null) : this.updateOverlay()); }updateOverlay() {
    let e = this.editorView.state.doc.resolve(this.cursorPos); let t = !e.parent.inlineContent; let r; let i = this.editorView.dom; let s = i.getBoundingClientRect(); let o = s.width / i.offsetWidth; let l = s.height / i.offsetHeight; if (t) { let d = e.nodeBefore; let f = e.nodeAfter; if (d || f) { let h = this.editorView.nodeDOM(this.cursorPos - (d ? d.nodeSize : 0)); if (h) { let p = h.getBoundingClientRect(); let m = d ? p.bottom : p.top; d && f && (m = (m + this.editorView.nodeDOM(this.cursorPos).getBoundingClientRect().top) / 2); let g = this.width / 2 * l; r = { left: p.left, right: p.right, top: m - g, bottom: m + g }; } } } if (!r) { let d = this.editorView.coordsAtPos(this.cursorPos); let f = this.width / 2 * o; r = { left: d.left - f, right: d.left + f, top: d.top, bottom: d.bottom }; } let a = this.editorView.dom.offsetParent; this.element || (this.element = a.appendChild(document.createElement("div")), this.class && (this.element.className = this.class), this.element.style.cssText = "position: absolute; z-index: 50; pointer-events: none;", this.color && (this.element.style.backgroundColor = this.color)), this.element.classList.toggle("prosemirror-dropcursor-block", t), this.element.classList.toggle("prosemirror-dropcursor-inline", !t); let c, u; if (!a || a == document.body && getComputedStyle(a).position == "static") {
      c = -pageXOffset, u = -pageYOffset;
    }
    else { let d = a.getBoundingClientRect(); let f = d.width / a.offsetWidth; let h = d.height / a.offsetHeight; c = d.left - a.scrollLeft * f, u = d.top - a.scrollTop * h; } this.element.style.left = `${(r.left - c) / o}px`, this.element.style.top = `${(r.top - u) / l}px`, this.element.style.width = `${(r.right - r.left) / o}px`, this.element.style.height = `${(r.bottom - r.top) / l}px`;
  }

  scheduleRemoval(e) { clearTimeout(this.timeout), this.timeout = setTimeout(() => this.setCursor(null), e); }dragover(e) {
    if (!this.editorView.editable)
      return; let t = this.editorView.posAtCoords({ left: e.clientX, top: e.clientY }); let r = t && t.inside >= 0 && this.editorView.state.doc.nodeAt(t.inside); let i = r && r.type.spec.disableDropCursor; let s = typeof i == "function" ? i(this.editorView, t, e) : i; if (t && !s) { let o = t.pos; if (this.editorView.dragging && this.editorView.dragging.slice) { let l = Al(this.editorView.state.doc, o, this.editorView.dragging.slice); l != null && (o = l); } this.setCursor(o), this.scheduleRemoval(5e3); }
  }

  dragend() { this.scheduleRemoval(20); }drop() { this.scheduleRemoval(20); }dragleave(e) { this.editorView.dom.contains(e.relatedTarget) || this.setCursor(null); }
} class j extends I {
  constructor(e) { super(e, e); }map(e, t) { let r = e.resolve(t.map(this.head)); return j.valid(r) ? new j(r) : I.near(r); }content() { return x.empty; }eq(e) { return e instanceof j && e.head == this.head; }toJSON() { return { type: "gapcursor", pos: this.head }; } static fromJSON(e, t) {
    if (typeof t.pos != "number")
      throw new RangeError("Invalid input for GapCursor.fromJSON"); return new j(e.resolve(t.pos));
  }

  getBookmark() { return new ws(this.anchor); } static valid(e) {
    let t = e.parent; if (t.isTextblock || !pm(e) || !mm(e))
      return !1; let r = t.type.spec.allowGapCursor; if (r != null)
      return r; let i = t.contentMatchAt(e.index()).defaultType; return i && i.isTextblock;
  }

  static findGapCursorFrom(e, t, r = !1) {
    e:for (;;) {
      if (!r && j.valid(e))
        return e; let i = e.pos; let s = null; for (let o = e.depth; ;o--) {
        let l = e.node(o); if (t > 0 ? e.indexAfter(o) < l.childCount : e.index(o) > 0) { s = l.child(t > 0 ? e.indexAfter(o) : e.index(o) - 1); break; }
        else if (o == 0) {
          return null;
        } i += t; let a = e.doc.resolve(i); if (j.valid(a))
          return a;
      } for (;;) {
        let o = t > 0 ? s.firstChild : s.lastChild; if (!o) { if (s.isAtom && !s.isText && !T.isSelectable(s)) { e = e.doc.resolve(i + s.nodeSize * t), r = !1; continue e; } break; }s = o, i += t; let l = e.doc.resolve(i); if (j.valid(l))
          return l;
      } return null;
    }
  }
}j.prototype.visible = !1; j.findFrom = j.findGapCursorFrom; I.jsonID("gapcursor", j); class ws {constructor(e) { this.pos = e; }map(e) { return new ws(e.map(this.pos)); }resolve(e) { let t = e.resolve(this.pos); return j.valid(t) ? new j(t) : I.near(t); }} function pm(n) {
  for (let e = n.depth; e >= 0; e--) {
    let t = n.index(e); let r = n.node(e); if (t == 0) {
      if (r.type.spec.isolating)
        return !0; continue;
    } for (let i = r.child(t - 1); ;i = i.lastChild) {
      if (i.childCount == 0 && !i.inlineContent || i.isAtom || i.type.spec.isolating)
        return !0; if (i.inlineContent)
        return !1;
    }
  } return !0;
} function mm(n) {
  for (let e = n.depth; e >= 0; e--) {
    let t = n.indexAfter(e); let r = n.node(e); if (t == r.childCount) {
      if (r.type.spec.isolating)
        return !0; continue;
    } for (let i = r.child(t); ;i = i.firstChild) {
      if (i.childCount == 0 && !i.inlineContent || i.isAtom || i.type.spec.isolating)
        return !0; if (i.inlineContent)
        return !1;
    }
  } return !0;
} function ec() { return new W({ props: { decorations: km, createSelectionBetween(n, e, t) { return e.pos == t.pos && j.valid(t) ? new j(t) : null; }, handleClick: ym, handleKeyDown: gm, handleDOMEvents: { beforeinput: bm } } }); } const gm = ga({ ArrowLeft: vn("horiz", -1), ArrowRight: vn("horiz", 1), ArrowUp: vn("vert", -1), ArrowDown: vn("vert", 1) }); function vn(n, e) {
  const t = n == "vert" ? e > 0 ? "down" : "up" : e > 0 ? "right" : "left"; return function (r, i, s) {
    let o = r.selection; let l = e > 0 ? o.$to : o.$from; let a = o.empty; if (o instanceof A) {
      if (!s.endOfTextblock(t) || l.depth == 0)
        return !1; a = !1, l = r.doc.resolve(e > 0 ? l.after() : l.before());
    } let c = j.findGapCursorFrom(l, e, a); return c ? (i && i(r.tr.setSelection(new j(c))), !0) : !1;
  };
} function ym(n, e, t) {
  if (!n || !n.editable)
    return !1; let r = n.state.doc.resolve(e); if (!j.valid(r))
    return !1; let i = n.posAtCoords({ left: t.clientX, top: t.clientY }); return i && i.inside > -1 && T.isSelectable(n.state.doc.nodeAt(i.inside)) ? !1 : (n.dispatch(n.state.tr.setSelection(new j(r))), !0);
} function bm(n, e) {
  if (e.inputType != "insertCompositionText" || !(n.state.selection instanceof j))
    return !1; let { $from: t } = n.state.selection; let r = t.parent.contentMatchAt(t.index()).findWrapping(n.state.schema.nodes.text); if (!r)
    return !1; let i = b.empty; for (let o = r.length - 1; o >= 0; o--)i = b.from(r[o].createAndFill(null, i)); let s = n.state.tr.replace(t.pos, t.pos, new x(i, 0, 0)); return s.setSelection(A.near(s.doc.resolve(t.pos + 1))), n.dispatch(s), !1;
} function km(n) {
  if (!(n.selection instanceof j))
    return null; let e = document.createElement("div"); return e.className = "ProseMirror-gapcursor", $.create(n.doc, [oe.widget(n.selection.head, e, { key: "gapcursor" })]);
} let Cr = 200; let Y = function () {}; Y.prototype.append = function (e) { return e.length ? (e = Y.from(e), !this.length && e || e.length < Cr && this.leafAppend(e) || this.length < Cr && e.leafPrepend(this) || this.appendInner(e)) : this; }; Y.prototype.prepend = function (e) { return e.length ? Y.from(e).append(this) : this; }; Y.prototype.appendInner = function (e) { return new xm(this, e); }; Y.prototype.slice = function (e, t) { return e === void 0 && (e = 0), t === void 0 && (t = this.length), e >= t ? Y.empty : this.sliceInner(Math.max(0, e), Math.min(this.length, t)); }; Y.prototype.get = function (e) {
  if (!(e < 0 || e >= this.length))
    return this.getInner(e);
}; Y.prototype.forEach = function (e, t, r) { t === void 0 && (t = 0), r === void 0 && (r = this.length), t <= r ? this.forEachInner(e, t, r, 0) : this.forEachInvertedInner(e, t, r, 0); }; Y.prototype.map = function (e, t, r) { t === void 0 && (t = 0), r === void 0 && (r = this.length); let i = []; return this.forEach((s, o) => { return i.push(e(s, o)); }, t, r), i; }; Y.from = function (e) { return e instanceof Y ? e : e && e.length ? new tc(e) : Y.empty; }; var tc = (function (n) {
  function e(r) { n.call(this), this.values = r; }n && (e.__proto__ = n), e.prototype = Object.create(n && n.prototype), e.prototype.constructor = e; let t = { length: { configurable: !0 }, depth: { configurable: !0 } }; return e.prototype.flatten = function () { return this.values; }, e.prototype.sliceInner = function (i, s) { return i == 0 && s == this.length ? this : new e(this.values.slice(i, s)); }, e.prototype.getInner = function (i) { return this.values[i]; }, e.prototype.forEachInner = function (i, s, o, l) {
    for (let a = s; a < o; a++) {
      if (i(this.values[a], l + a) === !1)
        return !1;
    }
  }, e.prototype.forEachInvertedInner = function (i, s, o, l) {
    for (let a = s - 1; a >= o; a--) {
      if (i(this.values[a], l + a) === !1)
        return !1;
    }
  }, e.prototype.leafAppend = function (i) {
    if (this.length + i.length <= Cr)
      return new e(this.values.concat(i.flatten()));
  }, e.prototype.leafPrepend = function (i) {
    if (this.length + i.length <= Cr)
      return new e(i.flatten().concat(this.values));
  }, t.length.get = function () { return this.values.length; }, t.depth.get = function () { return 0; }, Object.defineProperties(e.prototype, t), e;
})(Y); Y.empty = new tc([]); var xm = (function (n) {
  function e(t, r) { n.call(this), this.left = t, this.right = r, this.length = t.length + r.length, this.depth = Math.max(t.depth, r.depth) + 1; } return n && (e.__proto__ = n), e.prototype = Object.create(n && n.prototype), e.prototype.constructor = e, e.prototype.flatten = function () { return this.left.flatten().concat(this.right.flatten()); }, e.prototype.getInner = function (r) { return r < this.left.length ? this.left.get(r) : this.right.get(r - this.left.length); }, e.prototype.forEachInner = function (r, i, s, o) {
    let l = this.left.length; if (i < l && this.left.forEachInner(r, i, Math.min(s, l), o) === !1 || s > l && this.right.forEachInner(r, Math.max(i - l, 0), Math.min(this.length, s) - l, o + l) === !1)
      return !1;
  }, e.prototype.forEachInvertedInner = function (r, i, s, o) {
    let l = this.left.length; if (i > l && this.right.forEachInvertedInner(r, i - l, Math.max(s, l) - l, o + l) === !1 || s < l && this.left.forEachInvertedInner(r, Math.min(i, l), s, o) === !1)
      return !1;
  }, e.prototype.sliceInner = function (r, i) {
    if (r == 0 && i == this.length)
      return this; let s = this.left.length; return i <= s ? this.left.slice(r, i) : r >= s ? this.right.slice(r - s, i - s) : this.left.slice(r, s).append(this.right.slice(0, i - s));
  }, e.prototype.leafAppend = function (r) {
    let i = this.right.leafAppend(r); if (i)
      return new e(this.left, i);
  }, e.prototype.leafPrepend = function (r) {
    let i = this.left.leafPrepend(r); if (i)
      return new e(i, this.right);
  }, e.prototype.appendInner = function (r) { return this.left.depth >= Math.max(this.right.depth, r.depth) + 1 ? new e(this.left, new e(this.right, r)) : new e(this, r); }, e;
})(Y); const Sm = 500; class Ce {
  constructor(e, t) { this.items = e, this.eventCount = t; }popEvent(e, t) {
    if (this.eventCount == 0)
      return null; let r = this.items.length; for (;;r--) {
      if (this.items.get(r - 1).selection) { --r; break; }
    } let i, s; t && (i = this.remapping(r, this.items.length), s = i.maps.length); let o = e.tr; let l; let a; let c = []; let u = []; return this.items.forEach((d, f) => {
      if (!d.step) { i || (i = this.remapping(r, f + 1), s = i.maps.length), s--, u.push(d); return; } if (i) { u.push(new Te(d.map)); let h = d.step.map(i.slice(s)); let p; h && o.maybeStep(h).doc && (p = o.mapping.maps[o.mapping.maps.length - 1], c.push(new Te(p, void 0, void 0, c.length + u.length))), s--, p && i.appendMap(p, s); }
      else {
        o.maybeStep(d.step);
      } if (d.selection)
        return l = i ? d.selection.map(i.slice(s)) : d.selection, a = new Ce(this.items.slice(0, r).append(u.reverse().concat(c)), this.eventCount - 1), !1;
    }, this.items.length, 0), { remaining: a, transform: o, selection: l };
  }

  addTransform(e, t, r, i) { let s = []; let o = this.eventCount; let l = this.items; let a = !i && l.length ? l.get(l.length - 1) : null; for (let u = 0; u < e.steps.length; u++) { let d = e.steps[u].invert(e.docs[u]); let f = new Te(e.mapping.maps[u], d, t); let h; (h = a && a.merge(f)) && (f = h, u ? s.pop() : l = l.slice(0, l.length - 1)), s.push(f), t && (o++, t = void 0), i || (a = f); } let c = o - r.depth; return c > Mm && (l = Cm(l, c), o -= c), new Ce(l.append(s), o); }remapping(e, t) { let r = new rn(); return this.items.forEach((i, s) => { let o = i.mirrorOffset != null && s - i.mirrorOffset >= e ? r.maps.length - i.mirrorOffset : void 0; r.appendMap(i.map, o); }, e, t), r; }addMaps(e) { return this.eventCount == 0 ? this : new Ce(this.items.append(e.map(t => new Te(t))), this.eventCount); }rebased(e, t) {
    if (!this.eventCount)
      return this; let r = []; let i = Math.max(0, this.items.length - t); let s = e.mapping; let o = e.steps.length; let l = this.eventCount; this.items.forEach((f) => { f.selection && l--; }, i); let a = t; this.items.forEach((f) => {
      let h = s.getMirror(--a); if (h == null)
        return; o = Math.min(o, h); let p = s.maps[h]; if (f.step) { let m = e.steps[h].invert(e.docs[h]); let g = f.selection && f.selection.map(s.slice(a + 1, h)); g && l++, r.push(new Te(p, m, g)); }
      else {
        r.push(new Te(p));
      }
    }, i); let c = []; for (let f = t; f < o; f++)c.push(new Te(s.maps[f])); let u = this.items.slice(0, i).append(c).append(r); let d = new Ce(u, l); return d.emptyItemCount() > Sm && (d = d.compress(this.items.length - r.length)), d;
  }

  emptyItemCount() { let e = 0; return this.items.forEach((t) => { t.step || e++; }), e; }compress(e = this.items.length) {
    let t = this.remapping(0, e); let r = t.maps.length; let i = []; let s = 0; return this.items.forEach((o, l) => {
      if (l >= e) {
        i.push(o), o.selection && s++;
      }
      else if (o.step) { let a = o.step.map(t.slice(r)); let c = a && a.getMap(); if (r--, c && t.appendMap(c, r), a) { let u = o.selection && o.selection.map(t.slice(r)); u && s++; let d = new Te(c.invert(), a, u); let f; let h = i.length - 1; (f = i.length && i[h].merge(d)) ? i[h] = f : i.push(d); } }
      else {
        o.map && r--;
      }
    }, this.items.length, 0), new Ce(Y.from(i.reverse()), s);
  }
}Ce.empty = new Ce(Y.empty, 0); function Cm(n, e) {
  let t; return n.forEach((r, i) => {
    if (r.selection && e-- == 0)
      return t = i, !1;
  }), n.slice(t);
} class Te {
  constructor(e, t, r, i) { this.map = e, this.step = t, this.selection = r, this.mirrorOffset = i; }merge(e) {
    if (this.step && e.step && !e.selection) {
      let t = e.step.merge(this.step); if (t)
        return new Te(t.getMap().invert(), t, this.selection);
    }
  }
} class je {constructor(e, t, r, i, s) { this.done = e, this.undone = t, this.prevRanges = r, this.prevTime = i, this.prevComposition = s; }} const Mm = 20; function wm(n, e, t, r) {
  let i = t.getMeta(mt); let s; if (i)
    return i.historyState; t.getMeta(Om) && (n = new je(n.done, n.undone, null, 0, -1)); let o = t.getMeta("appendedTransaction"); if (t.steps.length == 0)
    return n; if (o && o.getMeta(mt))
    return o.getMeta(mt).redo ? new je(n.done.addTransform(t, void 0, r, Bn(e)), n.undone, Ko(t.mapping.maps), n.prevTime, n.prevComposition) : new je(n.done, n.undone.addTransform(t, void 0, r, Bn(e)), null, n.prevTime, n.prevComposition); if (t.getMeta("addToHistory") !== !1 && !(o && o.getMeta("addToHistory") === !1)) { let l = t.getMeta("composition"); let a = n.prevTime == 0 || !o && n.prevComposition != l && (n.prevTime < (t.time || 0) - r.newGroupDelay || !Tm(t, n.prevRanges)); let c = o ? ui(n.prevRanges, t.mapping) : Ko(t.mapping.maps); return new je(n.done.addTransform(t, a ? e.selection.getBookmark() : void 0, r, Bn(e)), Ce.empty, c, t.time, l ?? n.prevComposition); }
  else {
    return (s = t.getMeta("rebased")) ? new je(n.done.rebased(t, s), n.undone.rebased(t, s), ui(n.prevRanges, t.mapping), n.prevTime, n.prevComposition) : new je(n.done.addMaps(t.mapping.maps), n.undone.addMaps(t.mapping.maps), ui(n.prevRanges, t.mapping), n.prevTime, n.prevComposition);
  }
} function Tm(n, e) {
  if (!e)
    return !1; if (!n.docChanged)
    return !0; let t = !1; return n.mapping.maps[0].forEach((r, i) => { for (let s = 0; s < e.length; s += 2)r <= e[s + 1] && i >= e[s] && (t = !0); }), t;
} function Ko(n) { let e = []; for (let t = n.length - 1; t >= 0 && e.length == 0; t--)n[t].forEach((r, i, s, o) => e.push(s, o)); return e; } function ui(n, e) {
  if (!n)
    return null; let t = []; for (let r = 0; r < n.length; r += 2) { let i = e.map(n[r], 1); let s = e.map(n[r + 1], -1); i <= s && t.push(i, s); } return t;
} function Em(n, e, t) {
  let r = Bn(e); let i = mt.get(e).spec.config; let s = (t ? n.undone : n.done).popEvent(e, r); if (!s)
    return null; let o = s.selection.resolve(s.transform.doc); let l = (t ? n.done : n.undone).addTransform(s.transform, e.selection.getBookmark(), i, r); let a = new je(t ? l : s.remaining, t ? s.remaining : l, null, 0, -1); return s.transform.setSelection(o).setMeta(mt, { redo: t, historyState: a });
} let di = !1; let Uo = null; function Bn(n) {
  let e = n.plugins; if (Uo != e) {
    di = !1, Uo = e; for (let t = 0; t < e.length; t++) {
      if (e[t].spec.historyPreserveItems) { di = !0; break; }
    }
  } return di;
} const mt = new Q("history"); const Om = new Q("closeHistory"); function nc(n = {}) { return n = { depth: n.depth || 100, newGroupDelay: n.newGroupDelay || 500 }, new W({ key: mt, state: { init() { return new je(Ce.empty, Ce.empty, null, 0, -1); }, apply(e, t, r) { return wm(t, r, e, n); } }, config: n, props: { handleDOMEvents: { beforeinput(e, t) { let r = t.inputType; let i = r == "historyUndo" ? Ts : r == "historyRedo" ? Es : null; return i ? (t.preventDefault(), i(e.state, e.dispatch)) : !1; } } } }); } function rc(n, e) {
  return (t, r) => {
    let i = mt.getState(t); if (!i || (n ? i.undone : i.done).eventCount == 0)
      return !1; if (r) { let s = Em(i, t, n); s && r(e ? s.scrollIntoView() : s); } return !0;
  };
} const Ts = rc(!1, !0); const Es = rc(!0, !0); L.create({ name: "characterCount", addOptions() { return { limit: null, mode: "textSize", textCounter: n => n.length, wordCounter: n => n.split(" ").filter(e => e !== "").length }; }, addStorage() { return { characters: () => 0, words: () => 0 }; }, onBeforeCreate() { this.storage.characters = (n) => { const e = n?.node || this.editor.state.doc; if ((n?.mode || this.options.mode) === "textSize") { const r = e.textBetween(0, e.content.size, void 0, " "); return this.options.textCounter(r); } return e.nodeSize; }, this.storage.words = (n) => { const e = n?.node || this.editor.state.doc; const t = e.textBetween(0, e.content.size, " ", " "); return this.options.wordCounter(t); }; }, addProseMirrorPlugins() {
  let n = !1; return [new W({ key: new Q("characterCount"), appendTransaction: (e, t, r) => {
    if (n)
      return; const i = this.options.limit; if (i == null || i === 0) { n = !0; return; } const s = this.storage.characters({ node: r.doc }); if (s > i) { const o = s - i; const l = 0; const a = o; console.warn(`[CharacterCount] Initial content exceeded limit of ${i} characters. Content was automatically trimmed.`); const c = r.tr.deleteRange(l, a); return n = !0, c; }n = !0;
  }, filterTransaction: (e, t) => {
    const r = this.options.limit; if (!e.docChanged || r === 0 || r === null || r === void 0)
      return !0; const i = this.storage.characters({ node: t.doc }); const s = this.storage.characters({ node: e.doc }); if (s <= r || i > r && s > r && s <= i)
      return !0; if (i > r && s > r && s > i || !e.getMeta("paste"))
      return !1; const l = e.selection.$head.pos; const a = s - r; const c = l - a; const u = l; return e.deleteRange(c, u), !(this.storage.characters({ node: e.doc }) > r);
  } })];
} }); L.create({ name: "dropCursor", addOptions() { return { color: "currentColor", width: 1, class: void 0 }; }, addProseMirrorPlugins() { return [Za(this.options)]; } }); L.create({ name: "focus", addOptions() { return { className: "has-focus", mode: "all" }; }, addProseMirrorPlugins() {
  return [new W({ key: new Q("focus"), props: { decorations: ({ doc: n, selection: e }) => {
    const { isEditable: t, isFocused: r } = this.editor; const { anchor: i } = e; const s = []; if (!t || !r)
      return $.create(n, []); let o = 0; this.options.mode === "deepest" && n.descendants((a, c) => {
      if (a.isText)
        return; if (!(i >= c && i <= c + a.nodeSize - 1))
        return !1; o += 1;
    }); let l = 0; return n.descendants((a, c) => {
      if (a.isText || !(i >= c && i <= c + a.nodeSize - 1))
        return !1; if (l += 1, this.options.mode === "deepest" && o - l > 0 || this.options.mode === "shallowest" && l > 1)
        return this.options.mode === "deepest"; s.push(oe.node(c, c + a.nodeSize, { class: this.options.className }));
    }), $.create(n, s);
  } } })];
} }); L.create({ name: "gapCursor", addProseMirrorPlugins() { return [ec()]; }, extendNodeSchema(n) { let e; const t = { name: n.name, options: n.options, storage: n.storage }; return { allowGapCursor: (e = D(C(n, "allowGapCursor", t))) != null ? e : null }; } }); let Am = L.create({ name: "placeholder", addOptions() { return { emptyEditorClass: "is-editor-empty", emptyNodeClass: "is-empty", placeholder: "Write something …", showOnlyWhenEditable: !0, showOnlyCurrent: !0, includeChildren: !1 }; }, addProseMirrorPlugins() {
  return [new W({ key: new Q("placeholder"), props: { decorations: ({ doc: n, selection: e }) => {
    const t = this.editor.isEditable || !this.options.showOnlyWhenEditable; const { anchor: r } = e; const i = []; if (!t)
      return null; const s = this.editor.isEmpty; return n.descendants((o, l) => { const a = r >= l && r <= l + o.nodeSize; const c = !o.isLeaf && Br(o); if ((a || !this.options.showOnlyCurrent) && c) { const u = [this.options.emptyNodeClass]; s && u.push(this.options.emptyEditorClass); const d = oe.node(l, l + o.nodeSize, { "class": u.join(" "), "data-placeholder": typeof this.options.placeholder == "function" ? this.options.placeholder({ editor: this.editor, node: o, pos: l, hasAnchor: a }) : this.options.placeholder }); i.push(d); } return this.options.includeChildren; }), $.create(n, i);
  } } })];
} }); L.create({ name: "selection", addOptions() { return { className: "selection" }; }, addProseMirrorPlugins() { const { editor: n, options: e } = this; return [new W({ key: new Q("selection"), props: { decorations(t) { return t.selection.empty || n.isFocused || !n.isEditable || $a(t.selection) || n.view.dragging ? null : $.create(t.doc, [oe.inline(t.selection.from, t.selection.to, { class: e.className })]); } } })]; } }); function _o({ types: n, node: e }) { return e && Array.isArray(n) && n.includes(e.type) || e?.type === n; }L.create({ name: "trailingNode", addOptions() { return { node: "paragraph", notAfter: [] }; }, addProseMirrorPlugins() {
  const n = new Q(this.name); const e = Object.entries(this.editor.schema.nodes).map(([,t]) => t).filter(t => (this.options.notAfter || []).concat(this.options.node).includes(t.name)); return [new W({ key: n, appendTransaction: (t, r, i) => {
    const { doc: s, tr: o, schema: l } = i; const a = n.getState(i); const c = s.content.size; const u = l.nodes[this.options.node]; if (a)
      return o.insert(c, u.create());
  }, state: { init: (t, r) => { const i = r.tr.doc.lastChild; return !_o({ node: i, types: e }); }, apply: (t, r) => {
    if (!t.docChanged)
      return r; const i = t.doc.lastChild; return !_o({ node: i, types: e });
  } } })];
} }); L.create({ name: "undoRedo", addOptions() { return { depth: 100, newGroupDelay: 500 }; }, addCommands() { return { undo: () => ({ state: n, dispatch: e }) => Ts(n, e), redo: () => ({ state: n, dispatch: e }) => Es(n, e) }; }, addProseMirrorPlugins() { return [nc(this.options)]; }, addKeyboardShortcuts() { return { "Mod-z": () => this.editor.commands.undo(), "Shift-Mod-z": () => this.editor.commands.redo(), "Mod-y": () => this.editor.commands.redo(), "Mod-я": () => this.editor.commands.undo(), "Shift-Mod-я": () => this.editor.commands.redo() }; } }); function qo(n) { return bc((e, t) => ({ get() { return e(), n; }, set(r) { n = r, requestAnimationFrame(() => { requestAnimationFrame(() => { t(); }); }); } })); } class vm extends Sp {constructor(e = {}) { return super(e), this.contentComponent = null, this.appContext = null, this.reactiveState = qo(this.view.state), this.reactiveExtensionStorage = qo(this.extensionStorage), this.on("beforeTransaction", ({ nextState: t }) => { this.reactiveState.value = t, this.reactiveExtensionStorage.value = this.extensionStorage; }), yc(this); } get state() { return this.reactiveState ? this.reactiveState.value : this.view.state; } get storage() { return this.reactiveExtensionStorage ? this.reactiveExtensionStorage.value : super.storage; }registerPlugin(e, t) { const r = super.registerPlugin(e, t); return this.reactiveState && (this.reactiveState.value = r), r; }unregisterPlugin(e) { const t = super.unregisterPlugin(e); return this.reactiveState && t && (this.reactiveState.value = t), t; }} const Nm = ji({ name: "EditorContent", props: { editor: { default: null, type: Object } }, setup(n) {
  const e = el(); const t = gc(); return pc(() => {
    const r = n.editor; r && r.options.element && e.value && mc(() => {
      if (!e.value || !r.options.element.firstChild)
        return; const i = M(e.value); e.value.append(...r.options.element.childNodes), r.contentComponent = t.ctx._, t && (r.appContext = { ...t.appContext, provides: t.provides }), r.setOptions({ element: i }), r.createNodeViews();
    });
  }), Wi(() => { const r = n.editor; r && (r.contentComponent = null, r.appContext = null); }), { rootEl: e };
}, render() { return hc("div", { ref: (n) => { this.rootEl = n; } }); } }); function Dm(n = {}) { const e = dc(); return fc(() => { e.value = new vm(n); }), Wi(() => { let t, r, i; const s = (t = e.value) === null || t === void 0 ? void 0 : t.options.element; const o = s?.cloneNode(!0); (r = s?.parentNode) === null || r === void 0 || r.replaceChild(o, s), (i = e.value) === null || i === void 0 || i.destroy(); }), e; } const Im = /^\s*>\s$/; const Rm = ue.create({ name: "blockquote", addOptions() { return { HTMLAttributes: {} }; }, content: "block+", group: "block", defining: !0, parseHTML() { return [{ tag: "blockquote" }]; }, renderHTML({ HTMLAttributes: n }) { return ["blockquote", K(this.options.HTMLAttributes, n), 0]; }, addCommands() { return { setBlockquote: () => ({ commands: n }) => n.wrapIn(this.name), toggleBlockquote: () => ({ commands: n }) => n.toggleWrap(this.name), unsetBlockquote: () => ({ commands: n }) => n.lift(this.name) }; }, addKeyboardShortcuts() { return { "Mod-Shift-b": () => this.editor.commands.toggleBlockquote() }; }, addInputRules() { return [dn({ find: Im, type: this.type })]; } }); const Pm = /(?:^|\s)(\*\*(?!\s+\*\*)([^*]+)\*\*(?!\s+\*\*))$/; const Lm = /(?:^|\s)(\*\*(?!\s+\*\*)([^*]+)\*\*(?!\s+\*\*))/g; const Bm = /(?:^|\s)(__(?!\s+__)([^_]+)__(?!\s+__))$/; const zm = /(?:^|\s)(__(?!\s+__)([^_]+)__(?!\s+__))/g; const Fm = Se.create({ name: "bold", addOptions() { return { HTMLAttributes: {} }; }, parseHTML() { return [{ tag: "strong" }, { tag: "b", getAttrs: n => n.style.fontWeight !== "normal" && null }, { style: "font-weight=400", clearMark: n => n.type.name === this.name }, { style: "font-weight", getAttrs: n => /^(bold(er)?|[5-9]\d{2,})$/.test(n) && null }]; }, renderHTML({ HTMLAttributes: n }) { return ["strong", K(this.options.HTMLAttributes, n), 0]; }, addCommands() { return { setBold: () => ({ commands: n }) => n.setMark(this.name), toggleBold: () => ({ commands: n }) => n.toggleMark(this.name), unsetBold: () => ({ commands: n }) => n.unsetMark(this.name) }; }, addKeyboardShortcuts() { return { "Mod-b": () => this.editor.commands.toggleBold(), "Mod-B": () => this.editor.commands.toggleBold() }; }, addInputRules() { return [xt({ find: Pm, type: this.type }), xt({ find: Bm, type: this.type })]; }, addPasteRules() { return [et({ find: Lm, type: this.type }), et({ find: zm, type: this.type })]; } }); const Hm = "listItem"; const Jo = "textStyle"; const Go = /^\s*([-+*])\s$/; const $m = ue.create({ name: "bulletList", addOptions() { return { itemTypeName: "listItem", HTMLAttributes: {}, keepMarks: !1, keepAttributes: !1 }; }, group: "block list", content() { return `${this.options.itemTypeName}+`; }, parseHTML() { return [{ tag: "ul" }]; }, renderHTML({ HTMLAttributes: n }) { return ["ul", K(this.options.HTMLAttributes, n), 0]; }, addCommands() { return { toggleBulletList: () => ({ commands: n, chain: e }) => this.options.keepAttributes ? e().toggleList(this.name, this.options.itemTypeName, this.options.keepMarks).updateAttributes(Hm, this.editor.getAttributes(Jo)).run() : n.toggleList(this.name, this.options.itemTypeName, this.options.keepMarks) }; }, addKeyboardShortcuts() { return { "Mod-Shift-8": () => this.editor.commands.toggleBulletList() }; }, addInputRules() { let n = dn({ find: Go, type: this.type }); return (this.options.keepMarks || this.options.keepAttributes) && (n = dn({ find: Go, type: this.type, keepMarks: this.options.keepMarks, keepAttributes: this.options.keepAttributes, getAttributes: () => this.editor.getAttributes(Jo), editor: this.editor })), [n]; } }); const Vm = /(^|[^`])`([^`]+)`(?!`)/; const jm = /(^|[^`])`([^`]+)`(?!`)/g; const Wm = Se.create({ name: "code", addOptions() { return { HTMLAttributes: {} }; }, excludes: "_", code: !0, exitable: !0, parseHTML() { return [{ tag: "code" }]; }, renderHTML({ HTMLAttributes: n }) { return ["code", K(this.options.HTMLAttributes, n), 0]; }, addCommands() { return { setCode: () => ({ commands: n }) => n.setMark(this.name), toggleCode: () => ({ commands: n }) => n.toggleMark(this.name), unsetCode: () => ({ commands: n }) => n.unsetMark(this.name) }; }, addKeyboardShortcuts() { return { "Mod-e": () => this.editor.commands.toggleCode() }; }, addInputRules() { return [xt({ find: Vm, type: this.type })]; }, addPasteRules() { return [et({ find: jm, type: this.type })]; } }); const Km = /^```([a-z]+)?\s$/; const Um = /^~~~([a-z]+)?\s$/; const _m = ue.create({ name: "codeBlock", addOptions() { return { languageClassPrefix: "language-", exitOnTripleEnter: !0, exitOnArrowDown: !0, defaultLanguage: null, HTMLAttributes: {} }; }, content: "text*", marks: "", group: "block", code: !0, defining: !0, addAttributes() { return { language: { default: this.options.defaultLanguage, parseHTML: (n) => { let e; const { languageClassPrefix: t } = this.options; const s = [...((e = n.firstElementChild) === null || e === void 0 ? void 0 : e.classList) || []].filter(o => o.startsWith(t)).map(o => o.replace(t, ""))[0]; return s || null; }, rendered: !1 } }; }, parseHTML() { return [{ tag: "pre", preserveWhitespace: "full" }]; }, renderHTML({ node: n, HTMLAttributes: e }) { return ["pre", K(this.options.HTMLAttributes, e), ["code", { class: n.attrs.language ? this.options.languageClassPrefix + n.attrs.language : null }, 0]]; }, addCommands() { return { setCodeBlock: n => ({ commands: e }) => e.setNode(this.name, n), toggleCodeBlock: n => ({ commands: e }) => e.toggleNode(this.name, "paragraph", n) }; }, addKeyboardShortcuts() {
  return { "Mod-Alt-c": () => this.editor.commands.toggleCodeBlock(), "Backspace": () => { const { empty: n, $anchor: e } = this.editor.state.selection; const t = e.pos === 1; return !n || e.parent.type.name !== this.name ? !1 : t || !e.parent.textContent.length ? this.editor.commands.clearNodes() : !1; }, "Enter": ({ editor: n }) => {
    if (!this.options.exitOnTripleEnter)
      return !1; const { state: e } = n; const { selection: t } = e; const { $from: r, empty: i } = t; if (!i || r.parent.type !== this.type)
      return !1; const s = r.parentOffset === r.parent.nodeSize - 2; const o = r.parent.textContent.endsWith(`

`); return !s || !o ? !1 : n.chain().command(({ tr: l }) => (l.delete(r.pos - 2, r.pos), !0)).exitCode().run();
  }, "ArrowDown": ({ editor: n }) => {
    if (!this.options.exitOnArrowDown)
      return !1; const { state: e } = n; const { selection: t, doc: r } = e; const { $from: i, empty: s } = t; if (!s || i.parent.type !== this.type || !(i.parentOffset === i.parent.nodeSize - 2))
      return !1; const l = i.after(); return l === void 0 ? !1 : r.nodeAt(l) ? n.commands.command(({ tr: c }) => (c.setSelection(I.near(r.resolve(l))), !0)) : n.commands.exitCode();
  } };
}, addInputRules() { return [Ri({ find: Km, type: this.type, getAttributes: n => ({ language: n[1] }) }), Ri({ find: Um, type: this.type, getAttributes: n => ({ language: n[1] }) })]; }, addProseMirrorPlugins() {
  return [new W({ key: new Q("codeBlockVSCodeHandler"), props: { handlePaste: (n, e) => {
    if (!e.clipboardData || this.editor.isActive(this.type.name))
      return !1; const t = e.clipboardData.getData("text/plain"); const r = e.clipboardData.getData("vscode-editor-data"); const i = r ? JSON.parse(r) : void 0; const s = i?.mode; if (!t || !s)
      return !1; const { tr: o, schema: l } = n.state; const a = l.text(t.replace(/\r\n?/g, `
`)); return o.replaceSelectionWith(this.type.create({ language: s }, a)), o.selection.$from.parent.type !== this.type && o.setSelection(A.near(o.doc.resolve(Math.max(0, o.selection.from - 2)))), o.setMeta("paste", !0), n.dispatch(o), !0;
  } } })];
} }); const qm = ue.create({ name: "doc", topNode: !0, content: "block+" }); const Jm = L.create({ name: "dropCursor", addOptions() { return { color: "currentColor", width: 1, class: void 0 }; }, addProseMirrorPlugins() { return [Za(this.options)]; } }); const Gm = L.create({ name: "gapCursor", addProseMirrorPlugins() { return [ec()]; }, extendNodeSchema(n) { let e; const t = { name: n.name, options: n.options, storage: n.storage }; return { allowGapCursor: (e = D(C(n, "allowGapCursor", t))) !== null && e !== void 0 ? e : null }; } }); const Ym = ue.create({ name: "hardBreak", addOptions() { return { keepMarks: !0, HTMLAttributes: {} }; }, inline: !0, group: "inline", selectable: !1, linebreakReplacement: !0, parseHTML() { return [{ tag: "br" }]; }, renderHTML({ HTMLAttributes: n }) { return ["br", K(this.options.HTMLAttributes, n)]; }, renderText() {
  return `
`;
}, addCommands() {
  return { setHardBreak: () => ({ commands: n, chain: e, state: t, editor: r }) => n.first([() => n.exitCode(), () => n.command(() => {
    const { selection: i, storedMarks: s } = t; if (i.$from.parent.type.spec.isolating)
      return !1; const { keepMarks: o } = this.options; const { splittableMarks: l } = r.extensionManager; const a = s || i.$to.parentOffset && i.$from.marks(); return e().insertContent({ type: this.name }).command(({ tr: c, dispatch: u }) => { if (u && a && o) { const d = a.filter(f => l.includes(f.type.name)); c.ensureMarks(d); } return !0; }).run();
  })]) };
}, addKeyboardShortcuts() { return { "Mod-Enter": () => this.editor.commands.setHardBreak(), "Shift-Enter": () => this.editor.commands.setHardBreak() }; } }); const Xm = ue.create({ name: "heading", addOptions() { return { levels: [1, 2, 3, 4, 5, 6], HTMLAttributes: {} }; }, content: "inline*", group: "block", defining: !0, addAttributes() { return { level: { default: 1, rendered: !1 } }; }, parseHTML() { return this.options.levels.map(n => ({ tag: `h${n}`, attrs: { level: n } })); }, renderHTML({ node: n, HTMLAttributes: e }) { return [`h${this.options.levels.includes(n.attrs.level) ? n.attrs.level : this.options.levels[0]}`, K(this.options.HTMLAttributes, e), 0]; }, addCommands() { return { setHeading: n => ({ commands: e }) => this.options.levels.includes(n.level) ? e.setNode(this.name, n) : !1, toggleHeading: n => ({ commands: e }) => this.options.levels.includes(n.level) ? e.toggleNode(this.name, "paragraph", n) : !1 }; }, addKeyboardShortcuts() { return this.options.levels.reduce((n, e) => ({ ...n, [`Mod-Alt-${e}`]: () => this.editor.commands.toggleHeading({ level: e }) }), {}); }, addInputRules() { return this.options.levels.map(n => Ri({ find: new RegExp(`^(#{${Math.min(...this.options.levels)},${n}})\\s$`), type: this.type, getAttributes: { level: n } })); } }); const Qm = L.create({ name: "history", addOptions() { return { depth: 100, newGroupDelay: 500 }; }, addCommands() { return { undo: () => ({ state: n, dispatch: e }) => Ts(n, e), redo: () => ({ state: n, dispatch: e }) => Es(n, e) }; }, addProseMirrorPlugins() { return [nc(this.options)]; }, addKeyboardShortcuts() { return { "Mod-z": () => this.editor.commands.undo(), "Shift-Mod-z": () => this.editor.commands.redo(), "Mod-y": () => this.editor.commands.redo(), "Mod-я": () => this.editor.commands.undo(), "Shift-Mod-я": () => this.editor.commands.redo() }; } }); const Zm = ue.create({ name: "horizontalRule", addOptions() { return { HTMLAttributes: {} }; }, group: "block", parseHTML() { return [{ tag: "hr" }]; }, renderHTML({ HTMLAttributes: n }) { return ["hr", K(this.options.HTMLAttributes, n)]; }, addCommands() {
  return { setHorizontalRule: () => ({ chain: n, state: e }) => {
    if (!Cp(e, e.schema.nodes[this.name]))
      return !1; const { selection: t } = e; const { $from: r, $to: i } = t; const s = n(); return r.parentOffset === 0 ? s.insertContentAt({ from: Math.max(r.pos - 1, 0), to: i.pos }, { type: this.name }) : $a(t) ? s.insertContentAt(i.pos, { type: this.name }) : s.insertContent({ type: this.name }), s.command(({ tr: o, dispatch: l }) => {
      let a; if (l) {
        const { $to: c } = o.selection; const u = c.end(); if (c.nodeAfter) {
          c.nodeAfter.isTextblock ? o.setSelection(A.create(o.doc, c.pos + 1)) : c.nodeAfter.isBlock ? o.setSelection(T.create(o.doc, c.pos)) : o.setSelection(A.create(o.doc, c.pos));
        }
        else { const d = (a = c.parent.type.contentMatch.defaultType) === null || a === void 0 ? void 0 : a.create(); d && (o.insert(u, d), o.setSelection(A.create(o.doc, u + 1))); }o.scrollIntoView();
      } return !0;
    }).run();
  } };
}, addInputRules() { return [Va({ find: /^(?:---|—-|___\s|\*\*\*\s)$/, type: this.type })]; } }); const eg = /(?:^|\s)(\*(?!\s+\*)([^*]+)\*(?!\s+\*))$/; const tg = /(?:^|\s)(\*(?!\s+\*)([^*]+)\*(?!\s+\*))/g; const ng = /(?:^|\s)(_(?!\s+_)([^_]+)_(?!\s+_))$/; const rg = /(?:^|\s)(_(?!\s+_)([^_]+)_(?!\s+_))/g; const ig = Se.create({ name: "italic", addOptions() { return { HTMLAttributes: {} }; }, parseHTML() { return [{ tag: "em" }, { tag: "i", getAttrs: n => n.style.fontStyle !== "normal" && null }, { style: "font-style=normal", clearMark: n => n.type.name === this.name }, { style: "font-style=italic" }]; }, renderHTML({ HTMLAttributes: n }) { return ["em", K(this.options.HTMLAttributes, n), 0]; }, addCommands() { return { setItalic: () => ({ commands: n }) => n.setMark(this.name), toggleItalic: () => ({ commands: n }) => n.toggleMark(this.name), unsetItalic: () => ({ commands: n }) => n.unsetMark(this.name) }; }, addKeyboardShortcuts() { return { "Mod-i": () => this.editor.commands.toggleItalic(), "Mod-I": () => this.editor.commands.toggleItalic() }; }, addInputRules() { return [xt({ find: eg, type: this.type }), xt({ find: ng, type: this.type })]; }, addPasteRules() { return [et({ find: tg, type: this.type }), et({ find: rg, type: this.type })]; } }); const sg = ue.create({ name: "listItem", addOptions() { return { HTMLAttributes: {}, bulletListTypeName: "bulletList", orderedListTypeName: "orderedList" }; }, content: "paragraph block*", defining: !0, parseHTML() { return [{ tag: "li" }]; }, renderHTML({ HTMLAttributes: n }) { return ["li", K(this.options.HTMLAttributes, n), 0]; }, addKeyboardShortcuts() { return { "Enter": () => this.editor.commands.splitListItem(this.name), "Tab": () => this.editor.commands.sinkListItem(this.name), "Shift-Tab": () => this.editor.commands.liftListItem(this.name) }; } }); const og = "listItem"; const Yo = "textStyle"; const Xo = /^(\d+)\.\s$/; const lg = ue.create({ name: "orderedList", addOptions() { return { itemTypeName: "listItem", HTMLAttributes: {}, keepMarks: !1, keepAttributes: !1 }; }, group: "block list", content() { return `${this.options.itemTypeName}+`; }, addAttributes() { return { start: { default: 1, parseHTML: n => n.hasAttribute("start") ? Number.parseInt(n.getAttribute("start") || "", 10) : 1 }, type: { default: null, parseHTML: n => n.getAttribute("type") } }; }, parseHTML() { return [{ tag: "ol" }]; }, renderHTML({ HTMLAttributes: n }) { const { start: e, ...t } = n; return e === 1 ? ["ol", K(this.options.HTMLAttributes, t), 0] : ["ol", K(this.options.HTMLAttributes, n), 0]; }, addCommands() { return { toggleOrderedList: () => ({ commands: n, chain: e }) => this.options.keepAttributes ? e().toggleList(this.name, this.options.itemTypeName, this.options.keepMarks).updateAttributes(og, this.editor.getAttributes(Yo)).run() : n.toggleList(this.name, this.options.itemTypeName, this.options.keepMarks) }; }, addKeyboardShortcuts() { return { "Mod-Shift-7": () => this.editor.commands.toggleOrderedList() }; }, addInputRules() { let n = dn({ find: Xo, type: this.type, getAttributes: e => ({ start: +e[1] }), joinPredicate: (e, t) => t.childCount + t.attrs.start === +e[1] }); return (this.options.keepMarks || this.options.keepAttributes) && (n = dn({ find: Xo, type: this.type, keepMarks: this.options.keepMarks, keepAttributes: this.options.keepAttributes, getAttributes: e => ({ start: +e[1], ...this.editor.getAttributes(Yo) }), joinPredicate: (e, t) => t.childCount + t.attrs.start === +e[1], editor: this.editor })), [n]; } }); const ag = ue.create({ name: "paragraph", priority: 1e3, addOptions() { return { HTMLAttributes: {} }; }, group: "block", content: "inline*", parseHTML() { return [{ tag: "p" }]; }, renderHTML({ HTMLAttributes: n }) { return ["p", K(this.options.HTMLAttributes, n), 0]; }, addCommands() { return { setParagraph: () => ({ commands: n }) => n.setNode(this.name) }; }, addKeyboardShortcuts() { return { "Mod-Alt-0": () => this.editor.commands.setParagraph() }; } }); const cg = /(?:^|\s)(~~(?!\s+~~)([^~]+)~~(?!\s+~~))$/; const ug = /(?:^|\s)(~~(?!\s+~~)([^~]+)~~(?!\s+~~))/g; const dg = Se.create({ name: "strike", addOptions() { return { HTMLAttributes: {} }; }, parseHTML() { return [{ tag: "s" }, { tag: "del" }, { tag: "strike" }, { style: "text-decoration", consuming: !1, getAttrs: n => n.includes("line-through") ? {} : !1 }]; }, renderHTML({ HTMLAttributes: n }) { return ["s", K(this.options.HTMLAttributes, n), 0]; }, addCommands() { return { setStrike: () => ({ commands: n }) => n.setMark(this.name), toggleStrike: () => ({ commands: n }) => n.toggleMark(this.name), unsetStrike: () => ({ commands: n }) => n.unsetMark(this.name) }; }, addKeyboardShortcuts() { return { "Mod-Shift-s": () => this.editor.commands.toggleStrike() }; }, addInputRules() { return [xt({ find: cg, type: this.type })]; }, addPasteRules() { return [et({ find: ug, type: this.type })]; } }); const fg = ue.create({ name: "text", group: "inline" }); const hg = L.create({ name: "starterKit", addExtensions() { const n = []; return this.options.bold !== !1 && n.push(Fm.configure(this.options.bold)), this.options.blockquote !== !1 && n.push(Rm.configure(this.options.blockquote)), this.options.bulletList !== !1 && n.push($m.configure(this.options.bulletList)), this.options.code !== !1 && n.push(Wm.configure(this.options.code)), this.options.codeBlock !== !1 && n.push(_m.configure(this.options.codeBlock)), this.options.document !== !1 && n.push(qm.configure(this.options.document)), this.options.dropcursor !== !1 && n.push(Jm.configure(this.options.dropcursor)), this.options.gapcursor !== !1 && n.push(Gm.configure(this.options.gapcursor)), this.options.hardBreak !== !1 && n.push(Ym.configure(this.options.hardBreak)), this.options.heading !== !1 && n.push(Xm.configure(this.options.heading)), this.options.history !== !1 && n.push(Qm.configure(this.options.history)), this.options.horizontalRule !== !1 && n.push(Zm.configure(this.options.horizontalRule)), this.options.italic !== !1 && n.push(ig.configure(this.options.italic)), this.options.listItem !== !1 && n.push(sg.configure(this.options.listItem)), this.options.orderedList !== !1 && n.push(lg.configure(this.options.orderedList)), this.options.paragraph !== !1 && n.push(ag.configure(this.options.paragraph)), this.options.strike !== !1 && n.push(dg.configure(this.options.strike)), this.options.text !== !1 && n.push(fg.configure(this.options.text)), n; } }); const pg = { key: 0 }; const mg = { class: "px-3 pb-2 pt-4 border border-t-0 border-dashboard-neutral-100 rounded-bl-lg rounded-br-lg -translate-y-1" }; const gg = { class: "flex flex-wrap items-center gap-1" }; const yg = ji({ __name: "tiptap.client", props: { value: {}, disabled: { type: Boolean } }, emits: ["update:value", "onBlur"], setup(n, { emit: e }) {
  const t = n; const r = e; const i = Dm({ content: t.value || "", editable: !t?.disabled, extensions: [Qa, rm.configure({ types: ["heading", "paragraph"] }), tm, fm, Ep, hg.configure({ heading: { levels: [1, 2, 3, 4, 5, 6] } }), vp, Am.configure({ placeholder: "Type something..." })], onUpdate: ({ editor: l }) => { !l || t?.disabled || r("update:value", l.getHTML()); }, onBlur: () => { r("onBlur"); } }); Wi(() => { M(i).destroy(); }), vs(t, () => { i.value?.setEditable(!t?.disabled); }); function s() {
    if (i.value && typeof window < "u") {
      const l = i.value?.getAttributes("link").href; const a = window.prompt("URL", l); if (a === null)
        return; if (a === "") { i.value.chain().focus().extendMarkRange("link").unsetLink().run(); return; } try { i.value.chain().focus().extendMarkRange("link").setLink({ href: a }).run(); }
      catch { console.error("Invalid URL:", a); }
    }
  } function o() { if (i.value && typeof window < "u") { const l = window.prompt("URL"); l && i.value.chain().focus().setImage({ src: l }).run(); } } return vs(() => t.value, (l) => { i.value?.getHTML() !== l && i.value?.commands?.setContent(l); }), (l, a) => { const c = Zo; const u = kc; const d = oc; const f = ac; const h = lc; const p = cc; return M(i) ? (hi(), fi("div", pg, [w(M(Nm), { editor: M(i), class: "from-editor-content" }, null, 8, ["editor"]), q("div", mg, [q("div", gg, [w(p, null, { default: R(() => [w(d, { "as-child": "" }, { default: R(() => [w(u, { size: "icon-xs", variant: "outline", type: "button", class: "w-auto px-2" }, { default: R(() => [a[23] || (a[23] = ze(" Format ", -1)), w(c, { name: "lucide:chevron-down" })]), _: 1 })]), _: 1 }), w(h, { class: "w-56 bg-dashboard-neutral-50 border-dashboard-neutral-100" }, { default: R(() => [w(f, { "as-child": "" }, { default: R(() => [w(u, { class: "w-full border-0 justify-start", size: "xs", variant: "outline", type: "button", onClick: a[0] || (a[0] = m => M(i).chain().focus().setParagraph().run()) }, { default: R(() => [...a[24] || (a[24] = [ze(" Paragraph ", -1)])]), _: 1 })]), _: 1 }), w(f, { "as-child": "" }, { default: R(() => [w(u, { class: "w-full border-0 justify-start", size: "xs", variant: "outline", type: "button", onClick: a[1] || (a[1] = m => M(i).chain().focus().toggleHeading({ level: 1 }).run()) }, { default: R(() => [...a[25] || (a[25] = [ze(" Heading 1 ", -1)])]), _: 1 })]), _: 1 }), w(f, { "as-child": "" }, { default: R(() => [w(u, { class: "w-full border-0 justify-start", size: "xs", variant: "outline", type: "button", onClick: a[2] || (a[2] = m => M(i).chain().focus().toggleHeading({ level: 2 }).run()) }, { default: R(() => [...a[26] || (a[26] = [ze(" Heading 2 ", -1)])]), _: 1 })]), _: 1 }), w(f, { "as-child": "" }, { default: R(() => [w(u, { class: "w-full border-0 justify-start", size: "xs", variant: "outline", type: "button", onClick: a[3] || (a[3] = m => M(i).chain().focus().toggleHeading({ level: 3 }).run()) }, { default: R(() => [...a[27] || (a[27] = [ze(" Heading 3 ", -1)])]), _: 1 })]), _: 1 }), w(f, { "as-child": "" }, { default: R(() => [w(u, { class: "w-full border-0 justify-start", size: "xs", variant: "outline", type: "button", onClick: a[4] || (a[4] = m => M(i).chain().focus().toggleHeading({ level: 4 }).run()) }, { default: R(() => [...a[28] || (a[28] = [ze(" Heading 4 ", -1)])]), _: 1 })]), _: 1 }), w(f, { "as-child": "" }, { default: R(() => [w(u, { class: "w-full border-0 justify-start", size: "xs", variant: "outline", type: "button", onClick: a[5] || (a[5] = m => M(i).chain().focus().toggleHeading({ level: 5 }).run()) }, { default: R(() => [...a[29] || (a[29] = [ze(" Heading 5 ", -1)])]), _: 1 })]), _: 1 }), w(f, { "as-child": "" }, { default: R(() => [w(u, { class: "w-full border-0 justify-start", size: "xs", variant: "outline", type: "button", onClick: a[6] || (a[6] = m => M(i).chain().focus().toggleHeading({ level: 6 }).run()) }, { default: R(() => [...a[30] || (a[30] = [ze(" Heading 6 ", -1)])]), _: 1 })]), _: 1 })]), _: 1 })]), _: 1 }), a[33] || (a[33] = q("div", { class: "mx-1.5" }, [q("span", { class: "block w-px h-4 bg-gray-300" })], -1)), w(u, { size: "icon-xs", class: ne(["text-lg", { "bg-dashboard-primary-50 text-dashboard-accent-50 hover:bg-dashboard-primary-5 hover:text-dashboard-accent-50": M(i).isActive("bold") }]), variant: "outline", disabled: !M(i).can().chain().focus().toggleBold().run(), onClick: a[7] || (a[7] = m => M(i).chain().focus().toggleBold().run()) }, { default: R(() => [w(c, { name: "lucide:bold" })]), _: 1 }, 8, ["disabled", "class"]), w(u, { size: "icon-xs", class: ne(["text-lg", { "bg-dashboard-primary-50 text-dashboard-accent-50 hover:bg-dashboard-primary-5 hover:text-dashboard-accent-50": M(i).isActive("italic") }]), variant: "outline", disabled: !M(i).can().chain().focus().toggleItalic().run(), onClick: a[8] || (a[8] = m => M(i).chain().focus().toggleItalic().run()) }, { default: R(() => [w(c, { name: "lucide:italic" })]), _: 1 }, 8, ["disabled", "class"]), w(u, { size: "icon-xs", class: ne(["text-lg", { "bg-dashboard-primary-50 text-dashboard-accent-50 hover:bg-dashboard-primary-5 hover:text-dashboard-accent-50": M(i).isActive("underline") }]), variant: "outline", disabled: !M(i).can().chain().focus().toggleUnderline().run(), onClick: a[9] || (a[9] = m => M(i).chain().focus().toggleUnderline().run()) }, { default: R(() => [w(c, { name: "lucide:underline" })]), _: 1 }, 8, ["disabled", "class"]), w(u, { size: "icon-xs", class: ne(["text-lg", { "bg-dashboard-primary-50 text-dashboard-accent-50 hover:bg-dashboard-primary-5 hover:text-dashboard-accent-50": M(i).isActive("strike") }]), variant: "outline", disabled: !M(i).can().chain().focus().toggleStrike().run(), onClick: a[10] || (a[10] = m => M(i).chain().focus().toggleStrike().run()) }, { default: R(() => [w(c, { name: "lucide:strikethrough" })]), _: 1 }, 8, ["disabled", "class"]), w(u, { size: "icon-xs", class: ne(["text-lg", { "bg-dashboard-primary-50 text-dashboard-accent-50 hover:bg-dashboard-primary-5 hover:text-dashboard-accent-50": M(i).isActive("highlight") }]), variant: "outline", disabled: !M(i).can().chain().focus().toggleHighlight().run(), onClick: a[11] || (a[11] = m => M(i).chain().focus().toggleHighlight().run()) }, { default: R(() => [...a[31] || (a[31] = [q("svg", { "class": "w-4 h-4", "aria-hidden": "true", "xmlns": "http://www.w3.org/2000/svg", "width": "24", "height": "24", "fill": "none", "viewBox": "0 0 24 24" }, [q("path", { "stroke": "currentColor", "stroke-linecap": "round", "stroke-width": "2", "d": "M9 19.2H5.5c-.3 0-.5-.2-.5-.5V16c0-.2.2-.4.5-.4h13c.3 0 .5.2.5.4v2.7c0 .3-.2.5-.5.5H18m-6-1 1.4 1.8h.2l1.4-1.7m-7-5.4L12 4c0-.1 0-.1 0 0l4 8.8m-6-2.7h4m-7 2.7h2.5m5 0H17" })], -1)])]), _: 1 }, 8, ["disabled", "class"]), w(u, { size: "icon-xs", class: ne(["text-lg", { "bg-dashboard-primary-50 text-dashboard-accent-50 hover:bg-dashboard-primary-5 hover:text-dashboard-accent-50": M(i).isActive("code") }]), variant: "outline", disabled: !M(i).can().chain().focus().toggleCode().run(), onClick: a[12] || (a[12] = m => M(i).chain().focus().toggleCode().run()) }, { default: R(() => [w(c, { name: "lucide:code-xml" })]), _: 1 }, 8, ["disabled", "class"]), w(u, { size: "icon-xs", class: ne(["text-lg", { "bg-dashboard-primary-50 text-dashboard-accent-50 hover:bg-dashboard-primary-5 hover:text-dashboard-accent-50": M(i).isActive("link") }]), variant: "outline", disabled: !M(i).can().chain().focus().toggleLink().run(), onClick: s }, { default: R(() => [w(c, { name: "lucide:link" })]), _: 1 }, 8, ["disabled", "class"]), w(u, { size: "icon-xs", class: "text-lg", variant: "outline", disabled: !M(i).isActive("link"), onClick: a[13] || (a[13] = m => M(i).chain().focus().unsetLink().run()) }, { default: R(() => [w(c, { name: "lucide:unlink" })]), _: 1 }, 8, ["disabled"]), a[34] || (a[34] = q("div", { class: "px-1.5" }, [q("span", { class: "block w-px h-4 bg-gray-300" })], -1)), w(u, { size: "icon-xs", class: ne(["text-lg", { "bg-dashboard-primary-50 text-dashboard-accent-50 hover:bg-dashboard-primary-5 hover:text-dashboard-accent-50": M(i).isActive({ textAlign: "left" }) }]), variant: "outline", onClick: a[14] || (a[14] = m => M(i).chain().focus().toggleTextAlign("left").run()) }, { default: R(() => [w(c, { name: "lucide:align-left" })]), _: 1 }, 8, ["class"]), w(u, { size: "icon-xs", class: ne(["text-lg", { "bg-dashboard-primary-50 text-dashboard-accent-50 hover:bg-dashboard-primary-5 hover:text-dashboard-accent-50": M(i).isActive({ textAlign: "center" }) }]), variant: "outline", onClick: a[15] || (a[15] = m => M(i).chain().focus().toggleTextAlign("center").run()) }, { default: R(() => [w(c, { name: "lucide:align-center" })]), _: 1 }, 8, ["class"]), w(u, { size: "icon-xs", class: ne(["text-lg", { "bg-dashboard-primary-50 text-dashboard-accent-50 hover:bg-dashboard-primary-5 hover:text-dashboard-accent-50": M(i).isActive({ textAlign: "right" }) }]), variant: "outline", onClick: a[16] || (a[16] = m => M(i).chain().focus().toggleTextAlign("right").run()) }, { default: R(() => [w(c, { name: "lucide:align-right" })]), _: 1 }, 8, ["class"]), a[35] || (a[35] = q("div", { class: "mx-1.5" }, [q("span", { class: "block w-px h-4 bg-gray-300" })], -1)), w(u, { size: "icon-xs", class: "text-lg", variant: "outline", onClick: o }, { default: R(() => [w(c, { name: "lucide:image" })]), _: 1 }), w(u, { size: "icon-xs", class: ne(["text-lg", { "bg-dashboard-primary-50 text-dashboard-accent-50 hover:bg-dashboard-primary-5 hover:text-dashboard-accent-50": M(i).isActive("bulletList") }]), variant: "outline", onClick: a[17] || (a[17] = m => M(i).chain().focus().toggleBulletList().run()) }, { default: R(() => [w(c, { name: "lucide:list" })]), _: 1 }, 8, ["class"]), w(u, { size: "icon-xs", class: ne(["text-lg", { "bg-dashboard-primary-50 text-dashboard-accent-50 hover:bg-dashboard-primary-5 hover:text-dashboard-accent-50": M(i).isActive("orderedList") }]), variant: "outline", onClick: a[18] || (a[18] = m => M(i).chain().focus().toggleOrderedList().run()) }, { default: R(() => [w(c, { name: "lucide:list-ordered" })]), _: 1 }, 8, ["class"]), w(u, { size: "icon-xs", class: ne(["text-lg", { "bg-dashboard-primary-50 text-dashboard-accent-50 hover:bg-dashboard-primary-5 hover:text-dashboard-accent-50": M(i).isActive("blockquote") }]), variant: "outline", onClick: a[19] || (a[19] = m => M(i).chain().focus().toggleBlockquote().run()) }, { default: R(() => [w(c, { name: "lucide:quote" })]), _: 1 }, 8, ["class"]), w(u, { size: "icon-xs", class: "text-lg", variant: "outline", onClick: a[20] || (a[20] = m => M(i).chain().focus().setHorizontalRule().run()) }, { default: R(() => [...a[32] || (a[32] = [q("svg", { "class": "w-5 h-5", "aria-hidden": "true", "xmlns": "http://www.w3.org/2000/svg", "width": "24", "height": "24", "fill": "currentColor", "viewBox": "0 0 24 24" }, [q("path", { "stroke": "currentColor", "stroke-linecap": "round", "stroke-width": "2", "d": "M5 12h14" }), q("path", { "stroke": "currentColor", "stroke-linecap": "round", "d": "M6 9.5h12m-12 9h12M6 7.5h12m-12 9h12M6 5.5h12m-12 9h12" })], -1)])]), _: 1 }), a[36] || (a[36] = q("div", { class: "mx-1.5" }, [q("span", { class: "block w-px h-4 bg-gray-300" })], -1)), w(u, { size: "icon-xs", class: "text-lg", variant: "outline", disabled: !M(i).can().undo(), onClick: a[21] || (a[21] = m => M(i).chain().focus().undo().run()) }, { default: R(() => [w(c, { name: "lucide:undo-2" })]), _: 1 }, 8, ["disabled"]), w(u, { size: "icon-xs", class: "text-lg", variant: "outline", disabled: !M(i).can().redo(), onClick: a[22] || (a[22] = m => M(i).chain().focus().redo().run()) }, { default: R(() => [w(c, { name: "lucide:redo-2" })]), _: 1 }, 8, ["disabled"])])])])) : tl("", !0); };
} }); const Og = Object.assign(yg, { __name: "UiTiptap" }); const Qo = 5 * 1024 * 1024; const Nn = { width: 200, height: 200 }; const Dn = { width: 4096, height: 4096 }; const bg = ["image/jpeg", "image/jpg", "image/png", "image/webp"]; function kg(n, e = 2) { const r = e < 0 ? 0 : e; const i = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]; const s = Math.floor(Math.log(n) / Math.log(1024)); return `${Number.parseFloat((n / 1024 ** s).toFixed(r))} ${i[s]}`; } function Ag(n) { return typeof n == "string" ? n : n instanceof File ? URL.createObjectURL(n) : null; } const vg = xc(File, { message: "Please select an image file." }).refine(n => n.size <= Qo, { message: `The image is too large. Please choose an image smaller than ${kg(Qo)}.` }).refine(n => bg.includes(n.type), { message: "Please upload a valid image file (JPEG, PNG, or WebP)." }).refine(n => new Promise((e) => { const t = new FileReader(); t.onload = (r) => { const i = new Image(); i.onload = () => { const s = i.width >= Nn.width && i.height >= Nn.height && i.width <= Dn.width && i.height <= Dn.height; e(s); }, i.src = r.target?.result; }, t.readAsDataURL(n); }), { message: `The image dimensions are invalid. Please upload an image between ${Nn.width}x${Nn.height} and ${Dn.width}x${Dn.height} pixels.` }); export { Tg as _, Og as a, Ag as c, vg as I };
