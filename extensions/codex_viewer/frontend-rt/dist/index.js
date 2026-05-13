var ps = Object.defineProperty;
var dn = (e) => {
  throw TypeError(e);
};
var _s = (e, t, r) => t in e ? ps(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var ke = (e, t, r) => _s(e, typeof t != "symbol" ? t + "" : t, r), Pr = (e, t, r) => t.has(e) || dn("Cannot " + r);
var l = (e, t, r) => (Pr(e, t, "read from private field"), r ? r.call(e) : t.get(e)), b = (e, t, r) => t.has(e) ? dn("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), y = (e, t, r, n) => (Pr(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r), M = (e, t, r) => (Pr(e, t, "access private method"), r);
var Sn = Array.isArray, gs = Array.prototype.indexOf, zt = Array.prototype.includes, mr = Array.from, bs = Object.defineProperty, qt = Object.getOwnPropertyDescriptor, ms = Object.prototype, ws = Array.prototype, xs = Object.getPrototypeOf, vn = Object.isExtensible;
const ys = () => {
};
function ks(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function Mn() {
  var e, t, r = new Promise((n, s) => {
    e = n, t = s;
  });
  return { promise: r, resolve: e, reject: t };
}
const q = 2, Ft = 4, wr = 8, Tn = 1 << 24, De = 16, Te = 32, et = 64, jr = 128, ve = 512, O = 1024, H = 2048, Ie = 4096, U = 8192, he = 16384, xt = 32768, hn = 1 << 25, Pt = 65536, Br = 1 << 17, Es = 1 << 18, Lt = 1 << 19, Cs = 1 << 20, Ye = 1 << 25, bt = 65536, vr = 1 << 21, Ut = 1 << 22, Qe = 1 << 23, Dr = Symbol("$state"), Be = new class extends Error {
  constructor() {
    super(...arguments);
    ke(this, "name", "StaleReactionError");
    ke(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
function Ss() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Ms(e, t, r) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function Ts(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function As() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Ns(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Rs() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function zs() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Fs() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Ps() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Ds() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
const Is = 1, Os = 2, Ls = 16, js = 1, Bs = 2, B = Symbol(), Vs = "http://www.w3.org/1999/xhtml", Hs = "http://www.w3.org/2000/svg", qs = "http://www.w3.org/1998/Math/MathML";
function $s() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function Ys() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function An(e) {
  return e === this.v;
}
function Us(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Nn(e) {
  return !Us(e, this.v);
}
let _e = null;
function Dt(e) {
  _e = e;
}
function Rn(e, t = !1, r) {
  _e = {
    p: _e,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    r: (
      /** @type {Effect} */
      E
    ),
    l: null
  };
}
function zn(e) {
  var t = (
    /** @type {ComponentContext} */
    _e
  ), r = t.e;
  if (r !== null) {
    t.e = null;
    for (var n of r)
      Xn(n);
  }
  return t.i = !0, _e = t.p, /** @type {T} */
  {};
}
function Fn() {
  return !0;
}
let lt = [];
function Pn() {
  var e = lt;
  lt = [], ks(e);
}
function St(e) {
  if (lt.length === 0 && !$t) {
    var t = lt;
    queueMicrotask(() => {
      t === lt && Pn();
    });
  }
  lt.push(e);
}
function Gs() {
  for (; lt.length > 0; )
    Pn();
}
function Dn(e) {
  var t = E;
  if (t === null)
    return k.f |= Qe, e;
  if ((t.f & xt) === 0 && (t.f & Ft) === 0)
    throw e;
  Xe(e, t);
}
function Xe(e, t) {
  for (; t !== null; ) {
    if ((t.f & jr) !== 0) {
      if ((t.f & xt) === 0)
        throw e;
      try {
        t.b.error(e);
        return;
      } catch (r) {
        e = r;
      }
    }
    t = t.parent;
  }
  throw e;
}
const Ks = -7169;
function F(e, t) {
  e.f = e.f & Ks | t;
}
function Xr(e) {
  (e.f & ve) !== 0 || e.deps === null ? F(e, O) : F(e, Ie);
}
function In(e) {
  if (e !== null)
    for (const t of e)
      (t.f & q) === 0 || (t.f & bt) === 0 || (t.f ^= bt, In(
        /** @type {Derived} */
        t.deps
      ));
}
function On(e, t, r) {
  (e.f & H) !== 0 ? t.add(e) : (e.f & Ie) !== 0 && r.add(e), In(e.deps), F(e, O);
}
const it = /* @__PURE__ */ new Set();
let w = null, Se = null, Vr = null, $t = !1, Ir = !1, Et = null, lr = null;
var pn = 0;
let Ws = 1;
var Mt, Tt, ft, Ve, ze, Kt, ne, Wt, We, He, Fe, At, Nt, ut, I, ar, Ln, or, Hr, fr, Js;
const _r = class _r {
  constructor() {
    b(this, I);
    ke(this, "id", Ws++);
    /**
     * The current values of any signals that are updated in this batch.
     * Tuple format: [value, is_derived] (note: is_derived is false for deriveds, too, if they were overridden via assignment)
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Value, [any, boolean]>}
     */
    ke(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any signals (sources and deriveds) that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Value, any>}
     */
    ke(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<(batch: Batch) => void>}
     */
    b(this, Mt, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    b(this, Tt, /* @__PURE__ */ new Set());
    /**
     * Callbacks that should run only when a fork is committed.
     * @type {Set<(batch: Batch) => void>}
     */
    b(this, ft, /* @__PURE__ */ new Set());
    /**
     * Async effects that are currently in flight
     * @type {Map<Effect, number>}
     */
    b(this, Ve, /* @__PURE__ */ new Map());
    /**
     * Async effects that are currently in flight, _not_ inside a pending boundary
     * @type {Map<Effect, number>}
     */
    b(this, ze, /* @__PURE__ */ new Map());
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    b(this, Kt, null);
    /**
     * The root effects that need to be flushed
     * @type {Effect[]}
     */
    b(this, ne, []);
    /**
     * Effects created while this batch was active.
     * @type {Effect[]}
     */
    b(this, Wt, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    b(this, We, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    b(this, He, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    b(this, Fe, /* @__PURE__ */ new Map());
    /**
     * Inverse of #skipped_branches which we need to tell prior batches to unskip them when committing
     * @type {Set<Effect>}
     */
    b(this, At, /* @__PURE__ */ new Set());
    ke(this, "is_fork", !1);
    b(this, Nt, !1);
    /** @type {Set<Batch>} */
    b(this, ut, /* @__PURE__ */ new Set());
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(t) {
    l(this, Fe).has(t) || l(this, Fe).set(t, { d: [], m: [] }), l(this, At).delete(t);
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   * @param {(e: Effect) => void} callback
   */
  unskip_effect(t, r = (n) => this.schedule(n)) {
    var n = l(this, Fe).get(t);
    if (n) {
      l(this, Fe).delete(t);
      for (var s of n.d)
        F(s, H), r(s);
      for (s of n.m)
        F(s, Ie), r(s);
    }
    l(this, At).add(t);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Value} source
   * @param {any} value
   * @param {boolean} [is_derived]
   */
  capture(t, r, n = !1) {
    t.v !== B && !this.previous.has(t) && this.previous.set(t, t.v), (t.f & Qe) === 0 && (this.current.set(t, [r, n]), Se?.set(t, r)), this.is_fork || (t.v = r);
  }
  activate() {
    w = this;
  }
  deactivate() {
    w = null, Se = null;
  }
  flush() {
    try {
      Ir = !0, w = this, M(this, I, or).call(this);
    } finally {
      pn = 0, Vr = null, Et = null, lr = null, Ir = !1, w = null, Se = null, ht.clear();
    }
  }
  discard() {
    for (const t of l(this, Tt)) t(this);
    l(this, Tt).clear(), l(this, ft).clear(), it.delete(this);
  }
  /**
   * @param {Effect} effect
   */
  register_created_effect(t) {
    l(this, Wt).push(t);
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  increment(t, r) {
    let n = l(this, Ve).get(r) ?? 0;
    if (l(this, Ve).set(r, n + 1), t) {
      let s = l(this, ze).get(r) ?? 0;
      l(this, ze).set(r, s + 1);
    }
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   * @param {boolean} skip - whether to skip updates (because this is triggered by a stale reaction)
   */
  decrement(t, r, n) {
    let s = l(this, Ve).get(r) ?? 0;
    if (s === 1 ? l(this, Ve).delete(r) : l(this, Ve).set(r, s - 1), t) {
      let i = l(this, ze).get(r) ?? 0;
      i === 1 ? l(this, ze).delete(r) : l(this, ze).set(r, i - 1);
    }
    l(this, Nt) || n || (y(this, Nt, !0), St(() => {
      y(this, Nt, !1), this.flush();
    }));
  }
  /**
   * @param {Set<Effect>} dirty_effects
   * @param {Set<Effect>} maybe_dirty_effects
   */
  transfer_effects(t, r) {
    for (const n of t)
      l(this, We).add(n);
    for (const n of r)
      l(this, He).add(n);
    t.clear(), r.clear();
  }
  /** @param {(batch: Batch) => void} fn */
  oncommit(t) {
    l(this, Mt).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    l(this, Tt).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  on_fork_commit(t) {
    l(this, ft).add(t);
  }
  run_fork_commit_callbacks() {
    for (const t of l(this, ft)) t(this);
    l(this, ft).clear();
  }
  settled() {
    return (l(this, Kt) ?? y(this, Kt, Mn())).promise;
  }
  static ensure() {
    if (w === null) {
      const t = w = new _r();
      Ir || (it.add(w), $t || St(() => {
        w === t && t.flush();
      }));
    }
    return w;
  }
  apply() {
    {
      Se = null;
      return;
    }
  }
  /**
   *
   * @param {Effect} effect
   */
  schedule(t) {
    if (Vr = t, t.b?.is_pending && (t.f & (Ft | wr | Tn)) !== 0 && (t.f & xt) === 0) {
      t.b.defer_effect(t);
      return;
    }
    for (var r = t; r.parent !== null; ) {
      r = r.parent;
      var n = r.f;
      if (Et !== null && r === E && (k === null || (k.f & q) === 0))
        return;
      if ((n & (et | Te)) !== 0) {
        if ((n & O) === 0)
          return;
        r.f ^= O;
      }
    }
    l(this, ne).push(r);
  }
};
Mt = new WeakMap(), Tt = new WeakMap(), ft = new WeakMap(), Ve = new WeakMap(), ze = new WeakMap(), Kt = new WeakMap(), ne = new WeakMap(), Wt = new WeakMap(), We = new WeakMap(), He = new WeakMap(), Fe = new WeakMap(), At = new WeakMap(), Nt = new WeakMap(), ut = new WeakMap(), I = new WeakSet(), ar = function() {
  return this.is_fork || l(this, ze).size > 0;
}, Ln = function() {
  for (const n of l(this, ut))
    for (const s of l(n, ze).keys()) {
      for (var t = !1, r = s; r.parent !== null; ) {
        if (l(this, Fe).has(r)) {
          t = !0;
          break;
        }
        r = r.parent;
      }
      if (!t)
        return !0;
    }
  return !1;
}, or = function() {
  var f;
  if (pn++ > 1e3 && (it.delete(this), Zs()), !M(this, I, ar).call(this)) {
    for (const o of l(this, We))
      l(this, He).delete(o), F(o, H), this.schedule(o);
    for (const o of l(this, He))
      F(o, Ie), this.schedule(o);
  }
  const t = l(this, ne);
  y(this, ne, []), this.apply();
  var r = Et = [], n = [], s = lr = [];
  for (const o of t)
    try {
      M(this, I, Hr).call(this, o, r, n);
    } catch (u) {
      throw Vn(o), u;
    }
  if (w = null, s.length > 0) {
    var i = _r.ensure();
    for (const o of s)
      i.schedule(o);
  }
  if (Et = null, lr = null, M(this, I, ar).call(this) || M(this, I, Ln).call(this)) {
    M(this, I, fr).call(this, n), M(this, I, fr).call(this, r);
    for (const [o, u] of l(this, Fe))
      Bn(o, u);
  } else {
    l(this, Ve).size === 0 && it.delete(this), l(this, We).clear(), l(this, He).clear();
    for (const o of l(this, Mt)) o(this);
    l(this, Mt).clear(), _n(n), _n(r), l(this, Kt)?.resolve();
  }
  var a = (
    /** @type {Batch | null} */
    /** @type {unknown} */
    w
  );
  if (l(this, ne).length > 0) {
    const o = a ?? (a = this);
    l(o, ne).push(...l(this, ne).filter((u) => !l(o, ne).includes(u)));
  }
  a !== null && (it.add(a), M(f = a, I, or).call(f));
}, /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
Hr = function(t, r, n) {
  t.f ^= O;
  for (var s = t.first; s !== null; ) {
    var i = s.f, a = (i & (Te | et)) !== 0, f = a && (i & O) !== 0, o = f || (i & U) !== 0 || l(this, Fe).has(s);
    if (!o && s.fn !== null) {
      a ? s.f ^= O : (i & Ft) !== 0 ? r.push(s) : tr(s) && ((i & De) !== 0 && l(this, He).add(s), Ot(s));
      var u = s.first;
      if (u !== null) {
        s = u;
        continue;
      }
    }
    for (; s !== null; ) {
      var d = s.next;
      if (d !== null) {
        s = d;
        break;
      }
      s = s.parent;
    }
  }
}, /**
 * @param {Effect[]} effects
 */
fr = function(t) {
  for (var r = 0; r < t.length; r += 1)
    On(t[r], l(this, We), l(this, He));
}, Js = function() {
  var d, p, h;
  for (const v of it) {
    var t = v.id < this.id, r = [];
    for (const [c, [m, x]] of this.current) {
      if (v.current.has(c)) {
        var n = (
          /** @type {[any, boolean]} */
          v.current.get(c)[0]
        );
        if (t && m !== n)
          v.current.set(c, [m, x]);
        else
          continue;
      }
      r.push(c);
    }
    var s = [...v.current.keys()].filter((c) => !this.current.has(c));
    if (s.length === 0)
      t && v.discard();
    else if (r.length > 0) {
      if (t)
        for (const c of l(this, At))
          v.unskip_effect(c, (m) => {
            var x;
            (m.f & (De | Ut)) !== 0 ? v.schedule(m) : M(x = v, I, fr).call(x, [m]);
          });
      v.activate();
      var i = /* @__PURE__ */ new Set(), a = /* @__PURE__ */ new Map();
      for (var f of r)
        jn(f, s, i, a);
      a = /* @__PURE__ */ new Map();
      var o = [...v.current.keys()].filter(
        (c) => this.current.has(c) ? (
          /** @type {[any, boolean]} */
          this.current.get(c)[0] !== c
        ) : !0
      );
      for (const c of l(this, Wt))
        (c.f & (he | U | Br)) === 0 && Zr(c, o, a) && ((c.f & (Ut | De)) !== 0 ? (F(c, H), v.schedule(c)) : l(v, We).add(c));
      if (l(v, ne).length > 0) {
        v.apply();
        for (var u of l(v, ne))
          M(d = v, I, Hr).call(d, u, [], []);
        y(v, ne, []);
      }
      v.deactivate();
    }
  }
  for (const v of it)
    l(v, ut).has(this) && (l(v, ut).delete(this), l(v, ut).size === 0 && !M(p = v, I, ar).call(p) && (v.activate(), M(h = v, I, or).call(h)));
};
let mt = _r;
function Xs(e) {
  var t = $t;
  $t = !0;
  try {
    for (var r; ; ) {
      if (Gs(), w === null)
        return (
          /** @type {T} */
          r
        );
      w.flush();
    }
  } finally {
    $t = t;
  }
}
function Zs() {
  try {
    Rs();
  } catch (e) {
    Xe(e, Vr);
  }
}
let je = null;
function _n(e) {
  var t = e.length;
  if (t !== 0) {
    for (var r = 0; r < t; ) {
      var n = e[r++];
      if ((n.f & (he | U)) === 0 && tr(n) && (je = /* @__PURE__ */ new Set(), Ot(n), n.deps === null && n.first === null && n.nodes === null && n.teardown === null && n.ac === null && ts(n), je?.size > 0)) {
        ht.clear();
        for (const s of je) {
          if ((s.f & (he | U)) !== 0) continue;
          const i = [s];
          let a = s.parent;
          for (; a !== null; )
            je.has(a) && (je.delete(a), i.push(a)), a = a.parent;
          for (let f = i.length - 1; f >= 0; f--) {
            const o = i[f];
            (o.f & (he | U)) === 0 && Ot(o);
          }
        }
        je.clear();
      }
    }
    je = null;
  }
}
function jn(e, t, r, n) {
  if (!r.has(e) && (r.add(e), e.reactions !== null))
    for (const s of e.reactions) {
      const i = s.f;
      (i & q) !== 0 ? jn(
        /** @type {Derived} */
        s,
        t,
        r,
        n
      ) : (i & (Ut | De)) !== 0 && (i & H) === 0 && Zr(s, t, n) && (F(s, H), Qr(
        /** @type {Effect} */
        s
      ));
    }
}
function Zr(e, t, r) {
  const n = r.get(e);
  if (n !== void 0) return n;
  if (e.deps !== null)
    for (const s of e.deps) {
      if (zt.call(t, s))
        return !0;
      if ((s.f & q) !== 0 && Zr(
        /** @type {Derived} */
        s,
        t,
        r
      ))
        return r.set(
          /** @type {Derived} */
          s,
          !0
        ), !0;
    }
  return r.set(e, !1), !1;
}
function Qr(e) {
  w.schedule(e);
}
function Bn(e, t) {
  if (!((e.f & Te) !== 0 && (e.f & O) !== 0)) {
    (e.f & H) !== 0 ? t.d.push(e) : (e.f & Ie) !== 0 && t.m.push(e), F(e, O);
    for (var r = e.first; r !== null; )
      Bn(r, t), r = r.next;
  }
}
function Vn(e) {
  F(e, O);
  for (var t = e.first; t !== null; )
    Vn(t), t = t.next;
}
function Qs(e) {
  let t = 0, r = wt(0), n;
  return () => {
    sn() && (_(r), Zn(() => (t === 0 && (n = cs(() => e(() => Yt(r)))), t += 1, () => {
      St(() => {
        t -= 1, t === 0 && (n?.(), n = void 0, Yt(r));
      });
    })));
  };
}
var ei = Pt | Lt;
function ti(e, t, r, n) {
  new ri(e, t, r, n);
}
var fe, Jr, ue, ct, J, ce, Y, se, qe, dt, Je, Rt, Jt, Xt, $e, gr, R, ni, si, ii, qr, ur, cr, $r, Yr;
class ri {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(t, r, n, s) {
    b(this, R);
    /** @type {Boundary | null} */
    ke(this, "parent");
    ke(this, "is_pending", !1);
    /**
     * API-level transformError transform function. Transforms errors before they reach the `failed` snippet.
     * Inherited from parent boundary, or defaults to identity.
     * @type {(error: unknown) => unknown}
     */
    ke(this, "transform_error");
    /** @type {TemplateNode} */
    b(this, fe);
    /** @type {TemplateNode | null} */
    b(this, Jr, null);
    /** @type {BoundaryProps} */
    b(this, ue);
    /** @type {((anchor: Node) => void)} */
    b(this, ct);
    /** @type {Effect} */
    b(this, J);
    /** @type {Effect | null} */
    b(this, ce, null);
    /** @type {Effect | null} */
    b(this, Y, null);
    /** @type {Effect | null} */
    b(this, se, null);
    /** @type {DocumentFragment | null} */
    b(this, qe, null);
    b(this, dt, 0);
    b(this, Je, 0);
    b(this, Rt, !1);
    /** @type {Set<Effect>} */
    b(this, Jt, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    b(this, Xt, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    b(this, $e, null);
    b(this, gr, Qs(() => (y(this, $e, wt(l(this, dt))), () => {
      y(this, $e, null);
    })));
    y(this, fe, t), y(this, ue, r), y(this, ct, (i) => {
      var a = (
        /** @type {Effect} */
        E
      );
      a.b = this, a.f |= jr, n(i);
    }), this.parent = /** @type {Effect} */
    E.b, this.transform_error = s ?? this.parent?.transform_error ?? ((i) => i), y(this, J, ln(() => {
      M(this, R, qr).call(this);
    }, ei));
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    On(t, l(this, Jt), l(this, Xt));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!l(this, ue).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  update_pending_count(t, r) {
    M(this, R, $r).call(this, t, r), y(this, dt, l(this, dt) + t), !(!l(this, $e) || l(this, Rt)) && (y(this, Rt, !0), St(() => {
      y(this, Rt, !1), l(this, $e) && It(l(this, $e), l(this, dt));
    }));
  }
  get_effect_pending() {
    return l(this, gr).call(this), _(
      /** @type {Source<number>} */
      l(this, $e)
    );
  }
  /** @param {unknown} error */
  error(t) {
    if (!l(this, ue).onerror && !l(this, ue).failed)
      throw t;
    w?.is_fork ? (l(this, ce) && w.skip_effect(l(this, ce)), l(this, Y) && w.skip_effect(l(this, Y)), l(this, se) && w.skip_effect(l(this, se)), w.on_fork_commit(() => {
      M(this, R, Yr).call(this, t);
    })) : M(this, R, Yr).call(this, t);
  }
}
fe = new WeakMap(), Jr = new WeakMap(), ue = new WeakMap(), ct = new WeakMap(), J = new WeakMap(), ce = new WeakMap(), Y = new WeakMap(), se = new WeakMap(), qe = new WeakMap(), dt = new WeakMap(), Je = new WeakMap(), Rt = new WeakMap(), Jt = new WeakMap(), Xt = new WeakMap(), $e = new WeakMap(), gr = new WeakMap(), R = new WeakSet(), ni = function() {
  try {
    y(this, ce, de(() => l(this, ct).call(this, l(this, fe))));
  } catch (t) {
    this.error(t);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
si = function(t) {
  const r = l(this, ue).failed;
  r && y(this, se, de(() => {
    r(
      l(this, fe),
      () => t,
      () => () => {
      }
    );
  }));
}, ii = function() {
  const t = l(this, ue).pending;
  t && (this.is_pending = !0, y(this, Y, de(() => t(l(this, fe)))), St(() => {
    var r = y(this, qe, document.createDocumentFragment()), n = pt();
    r.append(n), y(this, ce, M(this, R, cr).call(this, () => de(() => l(this, ct).call(this, n)))), l(this, Je) === 0 && (l(this, fe).before(r), y(this, qe, null), _t(
      /** @type {Effect} */
      l(this, Y),
      () => {
        y(this, Y, null);
      }
    ), M(this, R, ur).call(
      this,
      /** @type {Batch} */
      w
    ));
  }));
}, qr = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), y(this, Je, 0), y(this, dt, 0), y(this, ce, de(() => {
      l(this, ct).call(this, l(this, fe));
    })), l(this, Je) > 0) {
      var t = y(this, qe, document.createDocumentFragment());
      fn(l(this, ce), t);
      const r = (
        /** @type {(anchor: Node) => void} */
        l(this, ue).pending
      );
      y(this, Y, de(() => r(l(this, fe))));
    } else
      M(this, R, ur).call(
        this,
        /** @type {Batch} */
        w
      );
  } catch (r) {
    this.error(r);
  }
}, /**
 * @param {Batch} batch
 */
ur = function(t) {
  this.is_pending = !1, t.transfer_effects(l(this, Jt), l(this, Xt));
}, /**
 * @template T
 * @param {() => T} fn
 */
cr = function(t) {
  var r = E, n = k, s = _e;
  Oe(l(this, J)), ge(l(this, J)), Dt(l(this, J).ctx);
  try {
    return mt.ensure(), t();
  } catch (i) {
    return Dn(i), null;
  } finally {
    Oe(r), ge(n), Dt(s);
  }
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 * @param {Batch} batch
 */
$r = function(t, r) {
  var n;
  if (!this.has_pending_snippet()) {
    this.parent && M(n = this.parent, R, $r).call(n, t, r);
    return;
  }
  y(this, Je, l(this, Je) + t), l(this, Je) === 0 && (M(this, R, ur).call(this, r), l(this, Y) && _t(l(this, Y), () => {
    y(this, Y, null);
  }), l(this, qe) && (l(this, fe).before(l(this, qe)), y(this, qe, null)));
}, /**
 * @param {unknown} error
 */
Yr = function(t) {
  l(this, ce) && (Q(l(this, ce)), y(this, ce, null)), l(this, Y) && (Q(l(this, Y)), y(this, Y, null)), l(this, se) && (Q(l(this, se)), y(this, se, null));
  var r = l(this, ue).onerror;
  let n = l(this, ue).failed;
  var s = !1, i = !1;
  const a = () => {
    if (s) {
      Ys();
      return;
    }
    s = !0, i && Ds(), l(this, se) !== null && _t(l(this, se), () => {
      y(this, se, null);
    }), M(this, R, cr).call(this, () => {
      M(this, R, qr).call(this);
    });
  }, f = (o) => {
    try {
      i = !0, r?.(o, a), i = !1;
    } catch (u) {
      Xe(u, l(this, J) && l(this, J).parent);
    }
    n && y(this, se, M(this, R, cr).call(this, () => {
      try {
        return de(() => {
          var u = (
            /** @type {Effect} */
            E
          );
          u.b = this, u.f |= jr, n(
            l(this, fe),
            () => o,
            () => a
          );
        });
      } catch (u) {
        return Xe(
          u,
          /** @type {Effect} */
          l(this, J).parent
        ), null;
      }
    }));
  };
  St(() => {
    var o;
    try {
      o = this.transform_error(t);
    } catch (u) {
      Xe(u, l(this, J) && l(this, J).parent);
      return;
    }
    o !== null && typeof o == "object" && typeof /** @type {any} */
    o.then == "function" ? o.then(
      f,
      /** @param {unknown} e */
      (u) => Xe(u, l(this, J) && l(this, J).parent)
    ) : f(o);
  });
};
function li(e, t, r, n) {
  const s = en;
  var i = e.filter((h) => !h.settled);
  if (r.length === 0 && i.length === 0) {
    n(t.map(s));
    return;
  }
  var a = (
    /** @type {Effect} */
    E
  ), f = ai(), o = i.length === 1 ? i[0].promise : i.length > 1 ? Promise.all(i.map((h) => h.promise)) : null;
  function u(h) {
    f();
    try {
      n(h);
    } catch (v) {
      (a.f & he) === 0 && Xe(v, a);
    }
    hr();
  }
  if (r.length === 0) {
    o.then(() => u(t.map(s)));
    return;
  }
  var d = Hn();
  function p() {
    Promise.all(r.map((h) => /* @__PURE__ */ oi(h))).then((h) => u([...t.map(s), ...h])).catch((h) => Xe(h, a)).finally(() => d());
  }
  o ? o.then(() => {
    f(), p(), hr();
  }) : p();
}
function ai() {
  var e = (
    /** @type {Effect} */
    E
  ), t = k, r = _e, n = (
    /** @type {Batch} */
    w
  );
  return function(i = !0) {
    Oe(e), ge(t), Dt(r), i && (e.f & he) === 0 && (n?.activate(), n?.apply());
  };
}
function hr(e = !0) {
  Oe(null), ge(null), Dt(null), e && w?.deactivate();
}
function Hn() {
  var e = (
    /** @type {Effect} */
    E
  ), t = (
    /** @type {Boundary} */
    e.b
  ), r = (
    /** @type {Batch} */
    w
  ), n = t.is_rendered();
  return t.update_pending_count(1, r), r.increment(n, e), (s = !1) => {
    t.update_pending_count(-1, r), r.decrement(n, e, s);
  };
}
// @__NO_SIDE_EFFECTS__
function en(e) {
  var t = q | H;
  return E !== null && (E.f |= Lt), {
    ctx: _e,
    deps: null,
    effects: null,
    equals: An,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      B
    ),
    wv: 0,
    parent: E,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function oi(e, t, r) {
  let n = (
    /** @type {Effect | null} */
    E
  );
  n === null && Ss();
  var s = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), i = wt(
    /** @type {V} */
    B
  ), a = !k, f = /* @__PURE__ */ new Map();
  return Ci(() => {
    var o = (
      /** @type {Effect} */
      E
    ), u = Mn();
    s = u.promise;
    try {
      Promise.resolve(e()).then(u.resolve, u.reject).finally(hr);
    } catch (v) {
      u.reject(v), hr();
    }
    var d = (
      /** @type {Batch} */
      w
    );
    if (a) {
      if ((o.f & xt) !== 0)
        var p = Hn();
      if (
        /** @type {Boundary} */
        n.b.is_rendered()
      )
        f.get(d)?.reject(Be), f.delete(d);
      else {
        for (const v of f.values())
          v.reject(Be);
        f.clear();
      }
      f.set(d, u);
    }
    const h = (v, c = void 0) => {
      if (p) {
        var m = c === Be;
        p(m);
      }
      if (!(c === Be || (o.f & he) !== 0)) {
        if (d.activate(), c)
          i.f |= Qe, It(i, c);
        else {
          (i.f & Qe) !== 0 && (i.f ^= Qe), It(i, v);
          for (const [x, T] of f) {
            if (f.delete(x), x === d) break;
            T.reject(Be);
          }
        }
        d.deactivate();
      }
    };
    u.promise.then(h, (v) => h(null, v || "unknown"));
  }), xi(() => {
    for (const o of f.values())
      o.reject(Be);
  }), new Promise((o) => {
    function u(d) {
      function p() {
        d === s ? o(i) : u(s);
      }
      d.then(p, p);
    }
    u(s);
  });
}
// @__NO_SIDE_EFFECTS__
function sr(e) {
  const t = /* @__PURE__ */ en(e);
  return ss(t), t;
}
// @__NO_SIDE_EFFECTS__
function fi(e) {
  const t = /* @__PURE__ */ en(e);
  return t.equals = Nn, t;
}
function ui(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var r = 0; r < t.length; r += 1)
      Q(
        /** @type {Effect} */
        t[r]
      );
  }
}
function tn(e) {
  var t, r = E, n = e.parent;
  if (!tt && n !== null && (n.f & (he | U)) !== 0)
    return $s(), e.v;
  Oe(n);
  try {
    e.f &= ~bt, ui(e), t = os(e);
  } finally {
    Oe(r);
  }
  return t;
}
function qn(e) {
  var t = tn(e);
  if (!e.equals(t) && (e.wv = ls(), (!w?.is_fork || e.deps === null) && (w !== null ? w.capture(e, t, !0) : e.v = t, e.deps === null))) {
    F(e, O);
    return;
  }
  tt || (Se !== null ? (sn() || w?.is_fork) && Se.set(e, t) : Xr(e));
}
function ci(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      (t.teardown || t.ac) && (t.teardown?.(), t.ac?.abort(Be), t.teardown = ys, t.ac = null, Gt(t, 0), an(t));
}
function $n(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      t.teardown && Ot(t);
}
let Ur = /* @__PURE__ */ new Set();
const ht = /* @__PURE__ */ new Map();
let Yn = !1;
function wt(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: An,
    rv: 0,
    wv: 0
  };
  return r;
}
// @__NO_SIDE_EFFECTS__
function X(e, t) {
  const r = wt(e);
  return ss(r), r;
}
// @__NO_SIDE_EFFECTS__
function di(e, t = !1, r = !0) {
  const n = wt(e);
  return t || (n.equals = Nn), n;
}
function D(e, t, r = !1) {
  k !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Me || (k.f & Br) !== 0) && Fn() && (k.f & (q | De | Ut | Br)) !== 0 && (pe === null || !zt.call(pe, e)) && Ps();
  let n = r ? Ct(t) : t;
  return It(e, n, lr);
}
function It(e, t, r = null) {
  if (!e.equals(t)) {
    ht.set(e, tt ? t : e.v);
    var n = mt.ensure();
    if (n.capture(e, t), (e.f & q) !== 0) {
      const s = (
        /** @type {Derived} */
        e
      );
      (e.f & H) !== 0 && tn(s), Se === null && Xr(s);
    }
    e.wv = ls(), Un(e, H, r), E !== null && (E.f & O) !== 0 && (E.f & (Te | et)) === 0 && (oe === null ? Mi([e]) : oe.push(e)), !n.is_fork && Ur.size > 0 && !Yn && vi();
  }
  return t;
}
function vi() {
  Yn = !1;
  for (const e of Ur)
    (e.f & O) !== 0 && F(e, Ie), tr(e) && Ot(e);
  Ur.clear();
}
function Yt(e) {
  D(e, e.v + 1);
}
function Un(e, t, r) {
  var n = e.reactions;
  if (n !== null)
    for (var s = n.length, i = 0; i < s; i++) {
      var a = n[i], f = a.f, o = (f & H) === 0;
      if (o && F(a, t), (f & q) !== 0) {
        var u = (
          /** @type {Derived} */
          a
        );
        Se?.delete(u), (f & bt) === 0 && (f & ve && (E === null || (E.f & vr) === 0) && (a.f |= bt), Un(u, Ie, r));
      } else if (o) {
        var d = (
          /** @type {Effect} */
          a
        );
        (f & De) !== 0 && je !== null && je.add(d), r !== null ? r.push(d) : Qr(d);
      }
    }
}
function Ct(e) {
  if (typeof e != "object" || e === null || Dr in e)
    return e;
  const t = xs(e);
  if (t !== ms && t !== ws)
    return e;
  var r = /* @__PURE__ */ new Map(), n = Sn(e), s = /* @__PURE__ */ X(0), i = gt, a = (f) => {
    if (gt === i)
      return f();
    var o = k, u = gt;
    ge(null), wn(i);
    var d = f();
    return ge(o), wn(u), d;
  };
  return n && r.set("length", /* @__PURE__ */ X(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(f, o, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && zs();
        var d = r.get(o);
        return d === void 0 ? a(() => {
          var p = /* @__PURE__ */ X(u.value);
          return r.set(o, p), p;
        }) : D(d, u.value, !0), !0;
      },
      deleteProperty(f, o) {
        var u = r.get(o);
        if (u === void 0) {
          if (o in f) {
            const d = a(() => /* @__PURE__ */ X(B));
            r.set(o, d), Yt(s);
          }
        } else
          D(u, B), Yt(s);
        return !0;
      },
      get(f, o, u) {
        if (o === Dr)
          return e;
        var d = r.get(o), p = o in f;
        if (d === void 0 && (!p || qt(f, o)?.writable) && (d = a(() => {
          var v = Ct(p ? f[o] : B), c = /* @__PURE__ */ X(v);
          return c;
        }), r.set(o, d)), d !== void 0) {
          var h = _(d);
          return h === B ? void 0 : h;
        }
        return Reflect.get(f, o, u);
      },
      getOwnPropertyDescriptor(f, o) {
        var u = Reflect.getOwnPropertyDescriptor(f, o);
        if (u && "value" in u) {
          var d = r.get(o);
          d && (u.value = _(d));
        } else if (u === void 0) {
          var p = r.get(o), h = p?.v;
          if (p !== void 0 && h !== B)
            return {
              enumerable: !0,
              configurable: !0,
              value: h,
              writable: !0
            };
        }
        return u;
      },
      has(f, o) {
        if (o === Dr)
          return !0;
        var u = r.get(o), d = u !== void 0 && u.v !== B || Reflect.has(f, o);
        if (u !== void 0 || E !== null && (!d || qt(f, o)?.writable)) {
          u === void 0 && (u = a(() => {
            var h = d ? Ct(f[o]) : B, v = /* @__PURE__ */ X(h);
            return v;
          }), r.set(o, u));
          var p = _(u);
          if (p === B)
            return !1;
        }
        return d;
      },
      set(f, o, u, d) {
        var p = r.get(o), h = o in f;
        if (n && o === "length")
          for (var v = u; v < /** @type {Source<number>} */
          p.v; v += 1) {
            var c = r.get(v + "");
            c !== void 0 ? D(c, B) : v in f && (c = a(() => /* @__PURE__ */ X(B)), r.set(v + "", c));
          }
        if (p === void 0)
          (!h || qt(f, o)?.writable) && (p = a(() => /* @__PURE__ */ X(void 0)), D(p, Ct(u)), r.set(o, p));
        else {
          h = p.v !== B;
          var m = a(() => Ct(u));
          D(p, m);
        }
        var x = Reflect.getOwnPropertyDescriptor(f, o);
        if (x?.set && x.set.call(d, u), !h) {
          if (n && typeof o == "string") {
            var T = (
              /** @type {Source<number>} */
              r.get("length")
            ), S = Number(o);
            Number.isInteger(S) && S >= T.v && D(T, S + 1);
          }
          Yt(s);
        }
        return !0;
      },
      ownKeys(f) {
        _(s);
        var o = Reflect.ownKeys(f).filter((p) => {
          var h = r.get(p);
          return h === void 0 || h.v !== B;
        });
        for (var [u, d] of r)
          d.v !== B && !(u in f) && o.push(u);
        return o;
      },
      setPrototypeOf() {
        Fs();
      }
    }
  );
}
var gn, Gn, Kn, Wn;
function hi() {
  if (gn === void 0) {
    gn = window, Gn = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, r = Text.prototype;
    Kn = qt(t, "firstChild").get, Wn = qt(t, "nextSibling").get, vn(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), vn(r) && (r.__t = void 0);
  }
}
function pt(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function Ze(e) {
  return (
    /** @type {TemplateNode | null} */
    Kn.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function er(e) {
  return (
    /** @type {TemplateNode | null} */
    Wn.call(e)
  );
}
function C(e, t) {
  return /* @__PURE__ */ Ze(e);
}
function pi(e, t = !1) {
  {
    var r = /* @__PURE__ */ Ze(e);
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ er(r) : r;
  }
}
function A(e, t = 1, r = !1) {
  let n = e;
  for (; t--; )
    n = /** @type {TemplateNode} */
    /* @__PURE__ */ er(n);
  return n;
}
function _i(e) {
  e.textContent = "";
}
function Jn() {
  return !1;
}
function rn(e, t, r) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElementNS(t ?? Vs, e, void 0)
  );
}
let bn = !1;
function gi() {
  bn || (bn = !0, document.addEventListener(
    "reset",
    (e) => {
      Promise.resolve().then(() => {
        if (!e.defaultPrevented)
          for (
            const t of
            /**@type {HTMLFormElement} */
            e.target.elements
          )
            t.__on_r?.();
      });
    },
    // In the capture phase to guarantee we get noticed of it (no possibility of stopPropagation)
    { capture: !0 }
  ));
}
function nn(e) {
  var t = k, r = E;
  ge(null), Oe(null);
  try {
    return e();
  } finally {
    ge(t), Oe(r);
  }
}
function bi(e, t, r, n = r) {
  e.addEventListener(t, () => nn(r));
  const s = e.__on_r;
  s ? e.__on_r = () => {
    s(), n(!0);
  } : e.__on_r = () => n(!0), gi();
}
function mi(e) {
  E === null && (k === null && Ns(), As()), tt && Ts();
}
function wi(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function Ue(e, t) {
  var r = E;
  r !== null && (r.f & U) !== 0 && (e |= U);
  var n = {
    ctx: _e,
    deps: null,
    nodes: null,
    f: e | H | ve,
    first: null,
    fn: t,
    last: null,
    next: null,
    parent: r,
    b: r && r.b,
    prev: null,
    teardown: null,
    wv: 0,
    ac: null
  };
  w?.register_created_effect(n);
  var s = n;
  if ((e & Ft) !== 0)
    Et !== null ? Et.push(n) : mt.ensure().schedule(n);
  else if (t !== null) {
    try {
      Ot(n);
    } catch (a) {
      throw Q(n), a;
    }
    s.deps === null && s.teardown === null && s.nodes === null && s.first === s.last && // either `null`, or a singular child
    (s.f & Lt) === 0 && (s = s.first, (e & De) !== 0 && (e & Pt) !== 0 && s !== null && (s.f |= Pt));
  }
  if (s !== null && (s.parent = r, r !== null && wi(s, r), k !== null && (k.f & q) !== 0 && (e & et) === 0)) {
    var i = (
      /** @type {Derived} */
      k
    );
    (i.effects ?? (i.effects = [])).push(s);
  }
  return n;
}
function sn() {
  return k !== null && !Me;
}
function xi(e) {
  const t = Ue(wr, null);
  return F(t, O), t.teardown = e, t;
}
function yi(e) {
  mi();
  var t = (
    /** @type {Effect} */
    E.f
  ), r = !k && (t & Te) !== 0 && (t & xt) === 0;
  if (r) {
    var n = (
      /** @type {ComponentContext} */
      _e
    );
    (n.e ?? (n.e = [])).push(e);
  } else
    return Xn(e);
}
function Xn(e) {
  return Ue(Ft | Cs, e);
}
function ki(e) {
  mt.ensure();
  const t = Ue(et | Lt, e);
  return (r = {}) => new Promise((n) => {
    r.outro ? _t(t, () => {
      Q(t), n(void 0);
    }) : (Q(t), n(void 0));
  });
}
function Ei(e) {
  return Ue(Ft, e);
}
function Ci(e) {
  return Ue(Ut | Lt, e);
}
function Zn(e, t = 0) {
  return Ue(wr | t, e);
}
function $(e, t = [], r = [], n = []) {
  li(n, t, r, (s) => {
    Ue(wr, () => e(...s.map(_)));
  });
}
function ln(e, t = 0) {
  var r = Ue(De | t, e);
  return r;
}
function de(e) {
  return Ue(Te | Lt, e);
}
function Qn(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = tt, n = k;
    mn(!0), ge(null);
    try {
      t.call(null);
    } finally {
      mn(r), ge(n);
    }
  }
}
function an(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    const s = r.ac;
    s !== null && nn(() => {
      s.abort(Be);
    });
    var n = r.next;
    (r.f & et) !== 0 ? r.parent = null : Q(r, t), r = n;
  }
}
function Si(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & Te) === 0 && Q(t), t = r;
  }
}
function Q(e, t = !0) {
  var r = !1;
  (t || (e.f & Es) !== 0) && e.nodes !== null && e.nodes.end !== null && (es(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), r = !0), F(e, hn), an(e, t && !r), Gt(e, 0);
  var n = e.nodes && e.nodes.t;
  if (n !== null)
    for (const i of n)
      i.stop();
  Qn(e), e.f ^= hn, e.f |= he;
  var s = e.parent;
  s !== null && s.first !== null && ts(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function es(e, t) {
  for (; e !== null; ) {
    var r = e === t ? null : /* @__PURE__ */ er(e);
    e.remove(), e = r;
  }
}
function ts(e) {
  var t = e.parent, r = e.prev, n = e.next;
  r !== null && (r.next = n), n !== null && (n.prev = r), t !== null && (t.first === e && (t.first = n), t.last === e && (t.last = r));
}
function _t(e, t, r = !0) {
  var n = [];
  rs(e, n, !0);
  var s = () => {
    r && Q(e), t && t();
  }, i = n.length;
  if (i > 0) {
    var a = () => --i || s();
    for (var f of n)
      f.out(a);
  } else
    s();
}
function rs(e, t, r) {
  if ((e.f & U) === 0) {
    e.f ^= U;
    var n = e.nodes && e.nodes.t;
    if (n !== null)
      for (const f of n)
        (f.is_global || r) && t.push(f);
    for (var s = e.first; s !== null; ) {
      var i = s.next;
      if ((s.f & et) === 0) {
        var a = (s.f & Pt) !== 0 || // If this is a branch effect without a block effect parent,
        // it means the parent block effect was pruned. In that case,
        // transparency information was transferred to the branch effect.
        (s.f & Te) !== 0 && (e.f & De) !== 0;
        rs(s, t, a ? r : !1);
      }
      s = i;
    }
  }
}
function on(e) {
  ns(e, !0);
}
function ns(e, t) {
  if ((e.f & U) !== 0) {
    e.f ^= U, (e.f & O) === 0 && (F(e, H), mt.ensure().schedule(e));
    for (var r = e.first; r !== null; ) {
      var n = r.next, s = (r.f & Pt) !== 0 || (r.f & Te) !== 0;
      ns(r, s ? t : !1), r = n;
    }
    var i = e.nodes && e.nodes.t;
    if (i !== null)
      for (const a of i)
        (a.is_global || t) && a.in();
  }
}
function fn(e, t) {
  if (e.nodes)
    for (var r = e.nodes.start, n = e.nodes.end; r !== null; ) {
      var s = r === n ? null : /* @__PURE__ */ er(r);
      t.append(r), r = s;
    }
}
let dr = !1, tt = !1;
function mn(e) {
  tt = e;
}
let k = null, Me = !1;
function ge(e) {
  k = e;
}
let E = null;
function Oe(e) {
  E = e;
}
let pe = null;
function ss(e) {
  k !== null && (pe === null ? pe = [e] : pe.push(e));
}
let Z = null, re = 0, oe = null;
function Mi(e) {
  oe = e;
}
let is = 1, at = 0, gt = at;
function wn(e) {
  gt = e;
}
function ls() {
  return ++is;
}
function tr(e) {
  var t = e.f;
  if ((t & H) !== 0)
    return !0;
  if (t & q && (e.f &= ~bt), (t & Ie) !== 0) {
    for (var r = (
      /** @type {Value[]} */
      e.deps
    ), n = r.length, s = 0; s < n; s++) {
      var i = r[s];
      if (tr(
        /** @type {Derived} */
        i
      ) && qn(
        /** @type {Derived} */
        i
      ), i.wv > e.wv)
        return !0;
    }
    (t & ve) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    Se === null && F(e, O);
  }
  return !1;
}
function as(e, t, r = !0) {
  var n = e.reactions;
  if (n !== null && !(pe !== null && zt.call(pe, e)))
    for (var s = 0; s < n.length; s++) {
      var i = n[s];
      (i.f & q) !== 0 ? as(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (r ? F(i, H) : (i.f & O) !== 0 && F(i, Ie), Qr(
        /** @type {Effect} */
        i
      ));
    }
}
function os(e) {
  var m;
  var t = Z, r = re, n = oe, s = k, i = pe, a = _e, f = Me, o = gt, u = e.f;
  Z = /** @type {null | Value[]} */
  null, re = 0, oe = null, k = (u & (Te | et)) === 0 ? e : null, pe = null, Dt(e.ctx), Me = !1, gt = ++at, e.ac !== null && (nn(() => {
    e.ac.abort(Be);
  }), e.ac = null);
  try {
    e.f |= vr;
    var d = (
      /** @type {Function} */
      e.fn
    ), p = d();
    e.f |= xt;
    var h = e.deps, v = w?.is_fork;
    if (Z !== null) {
      var c;
      if (v || Gt(e, re), h !== null && re > 0)
        for (h.length = re + Z.length, c = 0; c < Z.length; c++)
          h[re + c] = Z[c];
      else
        e.deps = h = Z;
      if (sn() && (e.f & ve) !== 0)
        for (c = re; c < h.length; c++)
          ((m = h[c]).reactions ?? (m.reactions = [])).push(e);
    } else !v && h !== null && re < h.length && (Gt(e, re), h.length = re);
    if (Fn() && oe !== null && !Me && h !== null && (e.f & (q | Ie | H)) === 0)
      for (c = 0; c < /** @type {Source[]} */
      oe.length; c++)
        as(
          oe[c],
          /** @type {Effect} */
          e
        );
    if (s !== null && s !== e) {
      if (at++, s.deps !== null)
        for (let x = 0; x < r; x += 1)
          s.deps[x].rv = at;
      if (t !== null)
        for (const x of t)
          x.rv = at;
      oe !== null && (n === null ? n = oe : n.push(.../** @type {Source[]} */
      oe));
    }
    return (e.f & Qe) !== 0 && (e.f ^= Qe), p;
  } catch (x) {
    return Dn(x);
  } finally {
    e.f ^= vr, Z = t, re = r, oe = n, k = s, pe = i, Dt(a), Me = f, gt = o;
  }
}
function Ti(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var n = gs.call(r, e);
    if (n !== -1) {
      var s = r.length - 1;
      s === 0 ? r = t.reactions = null : (r[n] = r[s], r.pop());
    }
  }
  if (r === null && (t.f & q) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Z === null || !zt.call(Z, t))) {
    var i = (
      /** @type {Derived} */
      t
    );
    (i.f & ve) !== 0 && (i.f ^= ve, i.f &= ~bt), i.v !== B && Xr(i), ci(i), Gt(i, 0);
  }
}
function Gt(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var n = t; n < r.length; n++)
      Ti(e, r[n]);
}
function Ot(e) {
  var t = e.f;
  if ((t & he) === 0) {
    F(e, O);
    var r = E, n = dr;
    E = e, dr = !0;
    try {
      (t & (De | Tn)) !== 0 ? Si(e) : an(e), Qn(e);
      var s = os(e);
      e.teardown = typeof s == "function" ? s : null, e.wv = is;
      var i;
    } finally {
      dr = n, E = r;
    }
  }
}
async function Ai() {
  await Promise.resolve(), Xs();
}
function _(e) {
  var t = e.f, r = (t & q) !== 0;
  if (k !== null && !Me) {
    var n = E !== null && (E.f & he) !== 0;
    if (!n && (pe === null || !zt.call(pe, e))) {
      var s = k.deps;
      if ((k.f & vr) !== 0)
        e.rv < at && (e.rv = at, Z === null && s !== null && s[re] === e ? re++ : Z === null ? Z = [e] : Z.push(e));
      else {
        (k.deps ?? (k.deps = [])).push(e);
        var i = e.reactions;
        i === null ? e.reactions = [k] : zt.call(i, k) || i.push(k);
      }
    }
  }
  if (tt && ht.has(e))
    return ht.get(e);
  if (r) {
    var a = (
      /** @type {Derived} */
      e
    );
    if (tt) {
      var f = a.v;
      return ((a.f & O) === 0 && a.reactions !== null || us(a)) && (f = tn(a)), ht.set(a, f), f;
    }
    var o = (a.f & ve) === 0 && !Me && k !== null && (dr || (k.f & ve) !== 0), u = (a.f & xt) === 0;
    tr(a) && (o && (a.f |= ve), qn(a)), o && !u && ($n(a), fs(a));
  }
  if (Se?.has(e))
    return Se.get(e);
  if ((e.f & Qe) !== 0)
    throw e.v;
  return e.v;
}
function fs(e) {
  if (e.f |= ve, e.deps !== null)
    for (const t of e.deps)
      (t.reactions ?? (t.reactions = [])).push(e), (t.f & q) !== 0 && (t.f & ve) === 0 && ($n(
        /** @type {Derived} */
        t
      ), fs(
        /** @type {Derived} */
        t
      ));
}
function us(e) {
  if (e.v === B) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (ht.has(t) || (t.f & q) !== 0 && us(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function cs(e) {
  var t = Me;
  try {
    return Me = !0, e();
  } finally {
    Me = t;
  }
}
const Ni = ["touchstart", "touchmove"];
function Ri(e) {
  return Ni.includes(e);
}
const ot = Symbol("events"), ds = /* @__PURE__ */ new Set(), Gr = /* @__PURE__ */ new Set();
function Bt(e, t, r) {
  (t[ot] ?? (t[ot] = {}))[e] = r;
}
function zi(e) {
  for (var t = 0; t < e.length; t++)
    ds.add(e[t]);
  for (var r of Gr)
    r(e);
}
let xn = null;
function yn(e) {
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), n = e.type, s = e.composedPath?.() || [], i = (
    /** @type {null | Element} */
    s[0] || e.target
  );
  xn = e;
  var a = 0, f = xn === e && e[ot];
  if (f) {
    var o = s.indexOf(f);
    if (o !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e[ot] = t;
      return;
    }
    var u = s.indexOf(t);
    if (u === -1)
      return;
    o <= u && (a = o);
  }
  if (i = /** @type {Element} */
  s[a] || e.target, i !== t) {
    bs(e, "currentTarget", {
      configurable: !0,
      get() {
        return i || r;
      }
    });
    var d = k, p = E;
    ge(null), Oe(null);
    try {
      for (var h, v = []; i !== null; ) {
        var c = i.assignedSlot || i.parentNode || /** @type {any} */
        i.host || null;
        try {
          var m = i[ot]?.[n];
          m != null && (!/** @type {any} */
          i.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === i) && m.call(i, e);
        } catch (x) {
          h ? v.push(x) : h = x;
        }
        if (e.cancelBubble || c === t || c === null)
          break;
        i = c;
      }
      if (h) {
        for (let x of v)
          queueMicrotask(() => {
            throw x;
          });
        throw h;
      }
    } finally {
      e[ot] = t, delete e.currentTarget, ge(d), Oe(p);
    }
  }
}
const Fi = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (e) => e
  })
);
function Pi(e) {
  return (
    /** @type {string} */
    Fi?.createHTML(e) ?? e
  );
}
function Di(e) {
  var t = rn("template");
  return t.innerHTML = Pi(e.replaceAll("<!>", "<!---->")), t.content;
}
function pr(e, t) {
  var r = (
    /** @type {Effect} */
    E
  );
  r.nodes === null && (r.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function V(e, t) {
  var r = (t & js) !== 0, n = (t & Bs) !== 0, s, i = !e.startsWith("<!>");
  return () => {
    s === void 0 && (s = Di(i ? e : "<!>" + e), r || (s = /** @type {TemplateNode} */
    /* @__PURE__ */ Ze(s)));
    var a = (
      /** @type {TemplateNode} */
      n || Gn ? document.importNode(s, !0) : s.cloneNode(!0)
    );
    if (r) {
      var f = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ze(a)
      ), o = (
        /** @type {TemplateNode} */
        a.lastChild
      );
      pr(f, o);
    } else
      pr(a, a);
    return a;
  };
}
function j(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function W(e, t) {
  var r = t == null ? "" : typeof t == "object" ? `${t}` : t;
  r !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = r, e.nodeValue = `${r}`);
}
function Ii(e, t) {
  return Oi(e, t);
}
const ir = /* @__PURE__ */ new Map();
function Oi(e, { target: t, anchor: r, props: n = {}, events: s, context: i, intro: a = !0, transformError: f }) {
  hi();
  var o = void 0, u = ki(() => {
    var d = r ?? t.appendChild(pt());
    ti(
      /** @type {TemplateNode} */
      d,
      {
        pending: () => {
        }
      },
      (v) => {
        Rn({});
        var c = (
          /** @type {ComponentContext} */
          _e
        );
        i && (c.c = i), s && (n.$$events = s), o = e(v, n) || {}, zn();
      },
      f
    );
    var p = /* @__PURE__ */ new Set(), h = (v) => {
      for (var c = 0; c < v.length; c++) {
        var m = v[c];
        if (!p.has(m)) {
          p.add(m);
          var x = Ri(m);
          for (const G of [t, document]) {
            var T = ir.get(G);
            T === void 0 && (T = /* @__PURE__ */ new Map(), ir.set(G, T));
            var S = T.get(m);
            S === void 0 ? (G.addEventListener(m, yn, { passive: x }), T.set(m, 1)) : T.set(m, S + 1);
          }
        }
      }
    };
    return h(mr(ds)), Gr.add(h), () => {
      for (var v of p)
        for (const x of [t, document]) {
          var c = (
            /** @type {Map<string, number>} */
            ir.get(x)
          ), m = (
            /** @type {number} */
            c.get(v)
          );
          --m == 0 ? (x.removeEventListener(v, yn), c.delete(v), c.size === 0 && ir.delete(x)) : c.set(v, m);
        }
      Gr.delete(h), d !== r && d.parentNode?.removeChild(d);
    };
  });
  return Kr.set(o, u), o;
}
let Kr = /* @__PURE__ */ new WeakMap();
function Li(e, t) {
  const r = Kr.get(e);
  return r ? (Kr.delete(e), r(t)) : Promise.resolve();
}
var Ce, Pe, ie, vt, Zt, Qt, br;
class ji {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, r = !0) {
    /** @type {TemplateNode} */
    ke(this, "anchor");
    /** @type {Map<Batch, Key>} */
    b(this, Ce, /* @__PURE__ */ new Map());
    /**
     * Map of keys to effects that are currently rendered in the DOM.
     * These effects are visible and actively part of the document tree.
     * Example:
     * ```
     * {#if condition}
     * 	foo
     * {:else}
     * 	bar
     * {/if}
     * ```
     * Can result in the entries `true->Effect` and `false->Effect`
     * @type {Map<Key, Effect>}
     */
    b(this, Pe, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    b(this, ie, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    b(this, vt, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    b(this, Zt, !0);
    /**
     * @param {Batch} batch
     */
    b(this, Qt, (t) => {
      if (l(this, Ce).has(t)) {
        var r = (
          /** @type {Key} */
          l(this, Ce).get(t)
        ), n = l(this, Pe).get(r);
        if (n)
          on(n), l(this, vt).delete(r);
        else {
          var s = l(this, ie).get(r);
          s && (l(this, Pe).set(r, s.effect), l(this, ie).delete(r), s.fragment.lastChild.remove(), this.anchor.before(s.fragment), n = s.effect);
        }
        for (const [i, a] of l(this, Ce)) {
          if (l(this, Ce).delete(i), i === t)
            break;
          const f = l(this, ie).get(a);
          f && (Q(f.effect), l(this, ie).delete(a));
        }
        for (const [i, a] of l(this, Pe)) {
          if (i === r || l(this, vt).has(i)) continue;
          const f = () => {
            if (Array.from(l(this, Ce).values()).includes(i)) {
              var u = document.createDocumentFragment();
              fn(a, u), u.append(pt()), l(this, ie).set(i, { effect: a, fragment: u });
            } else
              Q(a);
            l(this, vt).delete(i), l(this, Pe).delete(i);
          };
          l(this, Zt) || !n ? (l(this, vt).add(i), _t(a, f, !1)) : f();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    b(this, br, (t) => {
      l(this, Ce).delete(t);
      const r = Array.from(l(this, Ce).values());
      for (const [n, s] of l(this, ie))
        r.includes(n) || (Q(s.effect), l(this, ie).delete(n));
    });
    this.anchor = t, y(this, Zt, r);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, r) {
    var n = (
      /** @type {Batch} */
      w
    ), s = Jn();
    if (r && !l(this, Pe).has(t) && !l(this, ie).has(t))
      if (s) {
        var i = document.createDocumentFragment(), a = pt();
        i.append(a), l(this, ie).set(t, {
          effect: de(() => r(a)),
          fragment: i
        });
      } else
        l(this, Pe).set(
          t,
          de(() => r(this.anchor))
        );
    if (l(this, Ce).set(n, t), s) {
      for (const [f, o] of l(this, Pe))
        f === t ? n.unskip_effect(o) : n.skip_effect(o);
      for (const [f, o] of l(this, ie))
        f === t ? n.unskip_effect(o.effect) : n.skip_effect(o.effect);
      n.oncommit(l(this, Qt)), n.ondiscard(l(this, br));
    } else
      l(this, Qt).call(this, n);
  }
}
Ce = new WeakMap(), Pe = new WeakMap(), ie = new WeakMap(), vt = new WeakMap(), Zt = new WeakMap(), Qt = new WeakMap(), br = new WeakMap();
function Ee(e, t, r = !1) {
  var n = new ji(e), s = r ? Pt : 0;
  function i(a, f) {
    n.ensure(a, f);
  }
  ln(() => {
    var a = !1;
    t((f, o = 0) => {
      a = !0, i(o, f);
    }), a || i(-1, null);
  }, s);
}
function Bi(e, t) {
  return t;
}
function Vi(e, t, r) {
  for (var n = [], s = t.length, i, a = t.length, f = 0; f < s; f++) {
    let p = t[f];
    _t(
      p,
      () => {
        if (i) {
          if (i.pending.delete(p), i.done.add(p), i.pending.size === 0) {
            var h = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            Wr(e, mr(i.done)), h.delete(i), h.size === 0 && (e.outrogroups = null);
          }
        } else
          a -= 1;
      },
      !1
    );
  }
  if (a === 0) {
    var o = n.length === 0 && r !== null;
    if (o) {
      var u = (
        /** @type {Element} */
        r
      ), d = (
        /** @type {Element} */
        u.parentNode
      );
      _i(d), d.append(u), e.items.clear();
    }
    Wr(e, t, !o);
  } else
    i = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ?? (e.outrogroups = /* @__PURE__ */ new Set())).add(i);
}
function Wr(e, t, r = !0) {
  var n;
  if (e.pending.size > 0) {
    n = /* @__PURE__ */ new Set();
    for (const a of e.pending.values())
      for (const f of a)
        n.add(
          /** @type {EachItem} */
          e.items.get(f).e
        );
  }
  for (var s = 0; s < t.length; s++) {
    var i = t[s];
    if (n?.has(i)) {
      i.f |= Ye;
      const a = document.createDocumentFragment();
      fn(i, a);
    } else
      Q(t[s], r);
  }
}
var kn;
function En(e, t, r, n, s, i = null) {
  var a = e, f = /* @__PURE__ */ new Map();
  {
    var o = (
      /** @type {Element} */
      e
    );
    a = o.appendChild(pt());
  }
  var u = null, d = /* @__PURE__ */ fi(() => {
    var S = r();
    return Sn(S) ? S : S == null ? [] : mr(S);
  }), p, h = /* @__PURE__ */ new Map(), v = !0;
  function c(S) {
    (T.effect.f & he) === 0 && (T.pending.delete(S), T.fallback = u, Hi(T, p, a, t, n), u !== null && (p.length === 0 ? (u.f & Ye) === 0 ? on(u) : (u.f ^= Ye, Ht(u, null, a)) : _t(u, () => {
      u = null;
    })));
  }
  function m(S) {
    T.pending.delete(S);
  }
  var x = ln(() => {
    p = /** @type {V[]} */
    _(d);
    for (var S = p.length, G = /* @__PURE__ */ new Set(), ee = (
      /** @type {Batch} */
      w
    ), Ae = Jn(), Ne = 0; Ne < S; Ne += 1) {
      var Ge = p[Ne], te = n(Ge, Ne), be = v ? null : f.get(te);
      be ? (be.v && It(be.v, Ge), be.i && It(be.i, Ne), Ae && ee.unskip_effect(be.e)) : (be = qi(
        f,
        v ? a : kn ?? (kn = pt()),
        Ge,
        te,
        Ne,
        s,
        t,
        r
      ), v || (be.e.f |= Ye), f.set(te, be)), G.add(te);
    }
    if (S === 0 && i && !u && (v ? u = de(() => i(a)) : (u = de(() => i(kn ?? (kn = pt()))), u.f |= Ye)), S > G.size && Ms(), !v)
      if (h.set(ee, G), Ae) {
        for (const [xr, yr] of f)
          G.has(xr) || ee.skip_effect(yr.e);
        ee.oncommit(c), ee.ondiscard(m);
      } else
        c(ee);
    _(d);
  }), T = { effect: x, items: f, pending: h, outrogroups: null, fallback: u };
  v = !1;
}
function Vt(e) {
  for (; e !== null && (e.f & Te) === 0; )
    e = e.next;
  return e;
}
function Hi(e, t, r, n, s) {
  var i = t.length, a = e.items, f = Vt(e.effect.first), o, u = null, d = [], p = [], h, v, c, m;
  for (m = 0; m < i; m += 1) {
    if (h = t[m], v = s(h, m), c = /** @type {EachItem} */
    a.get(v).e, e.outrogroups !== null)
      for (const te of e.outrogroups)
        te.pending.delete(c), te.done.delete(c);
    if ((c.f & U) !== 0 && on(c), (c.f & Ye) !== 0)
      if (c.f ^= Ye, c === f)
        Ht(c, null, r);
      else {
        var x = u ? u.next : f;
        c === e.effect.last && (e.effect.last = c.prev), c.prev && (c.prev.next = c.next), c.next && (c.next.prev = c.prev), Ke(e, u, c), Ke(e, c, x), Ht(c, x, r), u = c, d = [], p = [], f = Vt(u.next);
        continue;
      }
    if (c !== f) {
      if (o !== void 0 && o.has(c)) {
        if (d.length < p.length) {
          var T = p[0], S;
          u = T.prev;
          var G = d[0], ee = d[d.length - 1];
          for (S = 0; S < d.length; S += 1)
            Ht(d[S], T, r);
          for (S = 0; S < p.length; S += 1)
            o.delete(p[S]);
          Ke(e, G.prev, ee.next), Ke(e, u, G), Ke(e, ee, T), f = T, u = ee, m -= 1, d = [], p = [];
        } else
          o.delete(c), Ht(c, f, r), Ke(e, c.prev, c.next), Ke(e, c, u === null ? e.effect.first : u.next), Ke(e, u, c), u = c;
        continue;
      }
      for (d = [], p = []; f !== null && f !== c; )
        (o ?? (o = /* @__PURE__ */ new Set())).add(f), p.push(f), f = Vt(f.next);
      if (f === null)
        continue;
    }
    (c.f & Ye) === 0 && d.push(c), u = c, f = Vt(c.next);
  }
  if (e.outrogroups !== null) {
    for (const te of e.outrogroups)
      te.pending.size === 0 && (Wr(e, mr(te.done)), e.outrogroups?.delete(te));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (f !== null || o !== void 0) {
    var Ae = [];
    if (o !== void 0)
      for (c of o)
        (c.f & U) === 0 && Ae.push(c);
    for (; f !== null; )
      (f.f & U) === 0 && f !== e.fallback && Ae.push(f), f = Vt(f.next);
    var Ne = Ae.length;
    if (Ne > 0) {
      var Ge = i === 0 ? r : null;
      Vi(e, Ae, Ge);
    }
  }
}
function qi(e, t, r, n, s, i, a, f) {
  var o = (a & Is) !== 0 ? (a & Ls) === 0 ? /* @__PURE__ */ di(r, !1, !1) : wt(r) : null, u = (a & Os) !== 0 ? wt(s) : null;
  return {
    v: o,
    i: u,
    e: de(() => (i(t, o ?? r, u ?? s, f), () => {
      e.delete(n);
    }))
  };
}
function Ht(e, t, r) {
  if (e.nodes)
    for (var n = e.nodes.start, s = e.nodes.end, i = t && (t.f & Ye) === 0 ? (
      /** @type {EffectNodes} */
      t.nodes.start
    ) : r; n !== null; ) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ er(n)
      );
      if (i.before(n), n === s)
        return;
      n = a;
    }
}
function Ke(e, t, r) {
  t === null ? e.effect.first = r : t.next = r, r === null ? e.effect.last = t : r.prev = t;
}
function $i(e, t, r = !1, n = !1, s = !1, i = !1) {
  var a = e, f = "";
  if (r)
    var o = (
      /** @type {Element} */
      e
    );
  $(() => {
    var u = (
      /** @type {Effect} */
      E
    );
    if (f !== (f = t() ?? "")) {
      if (r) {
        u.nodes = null, o.innerHTML = /** @type {string} */
        f, f !== "" && pr(
          /** @type {TemplateNode} */
          /* @__PURE__ */ Ze(o),
          /** @type {TemplateNode} */
          o.lastChild
        );
        return;
      }
      if (u.nodes !== null && (es(
        u.nodes.start,
        /** @type {TemplateNode} */
        u.nodes.end
      ), u.nodes = null), f !== "") {
        var d = n ? Hs : s ? qs : void 0, p = (
          /** @type {HTMLTemplateElement | SVGElement | MathMLElement} */
          rn(n ? "svg" : s ? "math" : "template", d)
        );
        p.innerHTML = /** @type {any} */
        f;
        var h = n || s ? p : (
          /** @type {HTMLTemplateElement} */
          p.content
        );
        if (pr(
          /** @type {TemplateNode} */
          /* @__PURE__ */ Ze(h),
          /** @type {TemplateNode} */
          h.lastChild
        ), n || s)
          for (; /* @__PURE__ */ Ze(h); )
            a.before(
              /** @type {TemplateNode} */
              /* @__PURE__ */ Ze(h)
            );
        else
          a.before(h);
      }
    }
  });
}
function Yi(e, t) {
  Ei(() => {
    var r = e.getRootNode(), n = (
      /** @type {ShadowRoot} */
      r.host ? (
        /** @type {ShadowRoot} */
        r
      ) : (
        /** @type {Document} */
        r.head ?? /** @type {Document} */
        r.ownerDocument.head
      )
    );
    if (!n.querySelector("#" + t.hash)) {
      const s = rn("style");
      s.id = t.hash, s.textContent = t.code, n.appendChild(s);
    }
  });
}
function Ui(e, t, r = t) {
  var n = /* @__PURE__ */ new WeakSet();
  bi(e, "input", async (s) => {
    var i = s ? e.defaultValue : e.value;
    if (i = Or(e) ? Lr(i) : i, r(i), w !== null && n.add(w), await Ai(), i !== (i = t())) {
      var a = e.selectionStart, f = e.selectionEnd, o = e.value.length;
      if (e.value = i ?? "", f !== null) {
        var u = e.value.length;
        a === f && f === o && u > o ? (e.selectionStart = u, e.selectionEnd = u) : (e.selectionStart = a, e.selectionEnd = Math.min(f, u));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  cs(t) == null && e.value && (r(Or(e) ? Lr(e.value) : e.value), w !== null && n.add(w)), Zn(() => {
    var s = t();
    if (e === document.activeElement) {
      var i = (
        /** @type {Batch} */
        w
      );
      if (n.has(i))
        return;
    }
    Or(e) && s === Lr(e.value) || e.type === "date" && !s && !e.value || s !== e.value && (e.value = s ?? "");
  });
}
function Or(e) {
  var t = e.type;
  return t === "number" || t === "range";
}
function Lr(e) {
  return e === "" ? null : +e;
}
const Gi = "5";
var Cn;
typeof window < "u" && ((Cn = window.__svelte ?? (window.__svelte = {})).v ?? (Cn.v = /* @__PURE__ */ new Set())).add(Gi);
var Ki = /* @__PURE__ */ V('<div class="error-banner svelte-1vl5es8"> </div>'), Wi = /* @__PURE__ */ V('<span class="badge badge-green svelte-1vl5es8"> </span>'), Ji = /* @__PURE__ */ V('<p class="detail-description svelte-1vl5es8"> </p>'), Xi = /* @__PURE__ */ V('<p class="detail-meta svelte-1vl5es8"> </p>'), Zi = /* @__PURE__ */ V('<tr class="code-line svelte-1vl5es8"><td class="line-number svelte-1vl5es8"></td><td class="line-content svelte-1vl5es8"></td></tr>'), Qi = /* @__PURE__ */ V('<div class="code-container svelte-1vl5es8"><div class="code-toolbar svelte-1vl5es8"><span> </span> <button class="btn-copy svelte-1vl5es8">Copy</button></div> <div class="code-scroll svelte-1vl5es8"><table class="code-table svelte-1vl5es8"><tbody></tbody></table></div></div>'), el = /* @__PURE__ */ V('<div class="code-container svelte-1vl5es8"><div class="code-toolbar svelte-1vl5es8"><span>No code available</span></div> <pre class="code-fallback svelte-1vl5es8"> </pre></div>'), tl = /* @__PURE__ */ V('<div><button class="back-link svelte-1vl5es8">← Back to list</button> <div class="detail-card svelte-1vl5es8"><div class="detail-header svelte-1vl5es8"><div class="detail-title-row svelte-1vl5es8"><svg class="icon-code svelte-1vl5es8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg> <h2 class="detail-name svelte-1vl5es8"> </h2> <!> <span class="badge badge-blue svelte-1vl5es8">Python</span></div> <button class="btn-explain svelte-1vl5es8" title="Ask AI to explain this codex in simple terms"><svg class="icon-sm svelte-1vl5es8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg> Explain with AI</button></div> <!> <!> <!></div></div>'), rl = /* @__PURE__ */ V('<div class="center-message svelte-1vl5es8"><svg class="spinner svelte-1vl5es8" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> <span>Loading codexes…</span></div>'), nl = /* @__PURE__ */ V('<span class="stats-filtered svelte-1vl5es8"> </span>'), sl = /* @__PURE__ */ V('<div class="empty-state svelte-1vl5es8"><svg class="empty-icon svelte-1vl5es8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg> <p> </p></div>'), il = /* @__PURE__ */ V('<p class="card-desc svelte-1vl5es8"> </p>'), ll = /* @__PURE__ */ V('<div class="card-preview svelte-1vl5es8"><pre class="svelte-1vl5es8"> </pre></div>'), al = /* @__PURE__ */ V('<button class="card svelte-1vl5es8"><div class="card-header svelte-1vl5es8"><div class="card-title svelte-1vl5es8"><svg class="icon-code-sm svelte-1vl5es8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg> <h3 class="card-name svelte-1vl5es8"> </h3></div> <span class="badge badge-blue svelte-1vl5es8">Python</span></div> <!> <!> <div class="card-footer svelte-1vl5es8"><span> </span> <span class="view-link svelte-1vl5es8">View Code →</span></div></button>'), ol = /* @__PURE__ */ V('<div class="grid svelte-1vl5es8"></div>'), fl = /* @__PURE__ */ V('<div class="search-box svelte-1vl5es8"><svg class="search-icon svelte-1vl5es8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg> <input type="text" placeholder="Search codexes…" class="search-input svelte-1vl5es8"/></div> <div class="stats svelte-1vl5es8"><span> </span> <!></div> <!>', 1), ul = /* @__PURE__ */ V('<div class="loading-overlay svelte-1vl5es8"><svg class="spinner svelte-1vl5es8" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> <span>Loading details…</span></div>'), cl = /* @__PURE__ */ V('<div class="codex-root svelte-1vl5es8"><div class="header svelte-1vl5es8"><div><h1 class="title svelte-1vl5es8">Codex Viewer</h1> <p class="subtitle svelte-1vl5es8">Browse installed codex packages</p></div> <button class="btn-refresh svelte-1vl5es8"><svg class="icon svelte-1vl5es8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg> Refresh</button></div> <!> <!> <!></div>');
const dl = {
  hash: "svelte-1vl5es8",
  code: `.codex-root.svelte-1vl5es8 {padding:24px;max-width:1100px;margin:0 auto;position:relative;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;}.header.svelte-1vl5es8 {margin-bottom:24px;display:flex;justify-content:space-between;align-items:flex-start;gap:16px;}.title.svelte-1vl5es8 {font-size:1.5rem;font-weight:700;color:#111827;margin:0;}.subtitle.svelte-1vl5es8 {font-size:0.875rem;color:#6b7280;margin:4px 0 0;}.btn-refresh.svelte-1vl5es8 {display:inline-flex;align-items:center;gap:6px;padding:6px 12px;font-size:0.875rem;font-weight:500;border-radius:8px;border:1px solid #d1d5db;background:#fff;color:#374151;cursor:pointer;transition:background 0.15s;}.btn-refresh.svelte-1vl5es8:hover {background:#f9fafb;}.btn-refresh.svelte-1vl5es8:disabled {opacity:0.5;cursor:not-allowed;}.icon.svelte-1vl5es8 {width:16px;height:16px;}.icon-sm.svelte-1vl5es8 {width:18px;height:18px;}.error-banner.svelte-1vl5es8 {margin-bottom:16px;padding:12px 16px;background:#fef2f2;border:1px solid #fecaca;color:#b91c1c;border-radius:8px;font-size:0.875rem;}

	/* Detail view */.back-link.svelte-1vl5es8 {color:#4f46e5;font-size:0.875rem;background:none;border:none;cursor:pointer;margin-bottom:16px;padding:0;}.back-link.svelte-1vl5es8:hover {text-decoration:underline;}.detail-card.svelte-1vl5es8 {background:#fff;border:1px solid #e5e7eb;border-radius:12px;overflow:hidden;}.detail-header.svelte-1vl5es8 {padding:20px 24px;border-bottom:1px solid #e5e7eb;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px;}.detail-title-row.svelte-1vl5es8 {display:flex;align-items:center;gap:10px;}.icon-code.svelte-1vl5es8 {width:24px;height:24px;color:#2563eb;flex-shrink:0;}.detail-name.svelte-1vl5es8 {font-size:1.25rem;font-weight:600;color:#111827;margin:0;}.badge.svelte-1vl5es8 {display:inline-block;padding:2px 8px;font-size:0.75rem;font-weight:500;border-radius:9999px;}.badge-green.svelte-1vl5es8 {background:#dcfce7;color:#166534;}.badge-blue.svelte-1vl5es8 {background:#dbeafe;color:#1e40af;}.btn-explain.svelte-1vl5es8 {display:inline-flex;align-items:center;gap:6px;padding:8px 14px;font-size:0.875rem;font-weight:500;border-radius:8px;border:none;background:linear-gradient(135deg, #6366f1, #8b5cf6);color:#fff;cursor:pointer;transition:opacity 0.15s, transform 0.1s;box-shadow:0 2px 6px rgba(99, 102, 241, 0.3);}.btn-explain.svelte-1vl5es8:hover {opacity:0.9;transform:translateY(-1px);}.btn-explain.svelte-1vl5es8:active {transform:translateY(0);}.detail-description.svelte-1vl5es8 {padding:12px 24px 0;font-size:0.875rem;color:#4b5563;margin:0;}.detail-meta.svelte-1vl5es8 {padding:8px 24px 0;font-size:0.75rem;color:#9ca3af;margin:0;}

	/* Code block */.code-container.svelte-1vl5es8 {margin:16px 24px 24px;border-radius:10px;overflow:hidden;border:1px solid #374151;background:#1e1e2e;}.code-toolbar.svelte-1vl5es8 {display:flex;justify-content:space-between;align-items:center;padding:8px 16px;background:#2d2d3d;border-bottom:1px solid #374151;font-size:0.75rem;color:#9ca3af;}.btn-copy.svelte-1vl5es8 {padding:3px 10px;font-size:0.75rem;border-radius:4px;border:1px solid #4b5563;background:#374151;color:#d1d5db;cursor:pointer;transition:background 0.15s;}.btn-copy.svelte-1vl5es8:hover {background:#4b5563;}.code-scroll.svelte-1vl5es8 {overflow-x:auto;max-height:600px;overflow-y:auto;}.code-table.svelte-1vl5es8 {border-collapse:collapse;width:100%;font-family:'JetBrains Mono', 'Fira Code', 'Monaco', 'Menlo', monospace;font-size:0.8125rem;line-height:1.6;}.code-line.svelte-1vl5es8:hover {background:rgba(255, 255, 255, 0.03);}.line-number.svelte-1vl5es8 {padding:0 14px;text-align:right;color:#4b5563;user-select:none;white-space:nowrap;vertical-align:top;border-right:1px solid #374151;width:1%;}.line-content.svelte-1vl5es8 {padding:0 16px;white-space:pre;color:#e2e8f0;}.code-fallback.svelte-1vl5es8 {padding:16px;margin:0;color:#a0aec0;font-size:0.8125rem;font-family:'JetBrains Mono', monospace;white-space:pre-wrap;word-break:break-word;}

	/* Syntax highlighting */.hl-keyword {color:#c678dd;font-weight:500;}.hl-string {color:#98c379;}.hl-comment {color:#5c6370;font-style:italic;}.hl-number {color:#d19a66;}.hl-builtin {color:#61afef;}.hl-decorator {color:#e5c07b;}.hl-funcname {color:#61afef;font-weight:500;}

	/* List view */.search-box.svelte-1vl5es8 {position:relative;max-width:400px;margin-bottom:16px;}.search-icon.svelte-1vl5es8 {position:absolute;left:12px;top:50%;transform:translateY(-50%);width:20px;height:20px;color:#9ca3af;}.search-input.svelte-1vl5es8 {width:100%;padding:8px 12px 8px 40px;border:1px solid #d1d5db;border-radius:8px;font-size:0.875rem;outline:none;transition:border-color 0.15s;}.search-input.svelte-1vl5es8:focus {border-color:#6366f1;box-shadow:0 0 0 2px rgba(99, 102, 241, 0.15);}.stats.svelte-1vl5es8 {margin-bottom:16px;font-size:0.875rem;color:#6b7280;}.stats-filtered.svelte-1vl5es8 {color:#9ca3af;margin-left:8px;}.empty-state.svelte-1vl5es8 {text-align:center;padding:48px 16px;background:#f9fafb;border:1px solid #e5e7eb;border-radius:12px;color:#6b7280;}.empty-icon.svelte-1vl5es8 {width:48px;height:48px;margin:0 auto 16px;color:#9ca3af;}.grid.svelte-1vl5es8 {display:grid;grid-template-columns:repeat(auto-fill, minmax(300px, 1fr));gap:16px;}.card.svelte-1vl5es8 {background:#fff;border:1px solid #e5e7eb;border-radius:12px;padding:16px;text-align:left;cursor:pointer;transition:box-shadow 0.2s, border-color 0.2s;width:100%;}.card.svelte-1vl5es8:hover {box-shadow:0 4px 12px rgba(0,0,0,0.08);border-color:#a5b4fc;}.card-header.svelte-1vl5es8 {display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:10px;}.card-title.svelte-1vl5es8 {display:flex;align-items:center;gap:8px;min-width:0;}.icon-code-sm.svelte-1vl5es8 {width:20px;height:20px;color:#2563eb;flex-shrink:0;}.card-name.svelte-1vl5es8 {font-weight:600;color:#111827;margin:0;font-size:0.95rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}.card-desc.svelte-1vl5es8 {font-size:0.8125rem;color:#6b7280;margin:0 0 10px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;}.card-preview.svelte-1vl5es8 {background:#1e1e2e;border-radius:6px;padding:8px 10px;margin-bottom:10px;overflow:hidden;}.card-preview.svelte-1vl5es8 pre:where(.svelte-1vl5es8) {margin:0;font-size:0.7rem;color:#a0aec0;font-family:'JetBrains Mono', monospace;white-space:pre;overflow:hidden;text-overflow:ellipsis;}.card-footer.svelte-1vl5es8 {display:flex;justify-content:space-between;font-size:0.75rem;color:#9ca3af;}.view-link.svelte-1vl5es8 {color:#4f46e5;}.center-message.svelte-1vl5es8 {display:flex;align-items:center;justify-content:center;padding:48px 0;gap:12px;color:#6b7280;}.spinner.svelte-1vl5es8 {width:32px;height:32px; animation: svelte-1vl5es8-spin 1s linear infinite;}
	@keyframes svelte-1vl5es8-spin { to { transform: rotate(360deg); } }.loading-overlay.svelte-1vl5es8 {position:absolute;inset:0;background:rgba(255, 255, 255, 0.85);display:flex;align-items:center;justify-content:center;border-radius:12px;z-index:10;gap:12px;color:#6b7280;}`
};
function vl(e, t) {
  Rn(t, !0), Yi(e, dl);
  let r = /* @__PURE__ */ X(Ct([])), n = /* @__PURE__ */ X(!0), s = /* @__PURE__ */ X(""), i = /* @__PURE__ */ X(""), a = /* @__PURE__ */ X(null), f = /* @__PURE__ */ X(!1), o = /* @__PURE__ */ sr(() => _(i).trim() ? _(r).filter((g) => {
    const N = _(i).toLowerCase();
    return (g.name ?? "").toLowerCase().includes(N) || (g.description ?? "").toLowerCase().includes(N);
  }) : _(r));
  async function u(g, N = {}) {
    return await t.ctx.callSync(g, N);
  }
  async function d() {
    D(n, !0), D(s, "");
    try {
      const g = await u("get_all_codexes");
      D(r, g?.codexes ?? g?.data ?? (Array.isArray(g) ? g : []), !0);
    } catch (g) {
      D(s, g?.message || String(g), !0);
    } finally {
      D(n, !1);
    }
  }
  async function p(g) {
    D(f, !0), D(s, "");
    try {
      const N = g._id || g.id || g.name, le = await u("get_codex_details", { codex_id: N }), me = le?.codex ?? le?.data ?? le;
      me && typeof me == "object" && (me.code || me.name) ? D(a, me, !0) : D(a, g, !0);
    } catch {
      D(a, g, !0);
    } finally {
      D(f, !1);
    }
  }
  function h() {
    D(a, null);
  }
  function v(g) {
    return g ? new Date(g / 1e6).toLocaleString() : "";
  }
  function c(g) {
    return g ? g.replace(/\\n/g, `
`).replace(/\\t/g, "	").replace(/\\"/g, '"').replace(/\\\\/g, "\\").replace(/^"""\s*\n?/, "").replace(/\n?"""$/, "").trim() : "";
  }
  function m(g) {
    return g.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").split(`
`).map((me) => {
      let z = me;
      z = z.replace(/(#.*)$/gm, '<span class="hl-comment">$1</span>'), z = z.replace(/("""[\s\S]*?"""|'''[\s\S]*?'''|"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')/g, '<span class="hl-string">$1</span>'), z = z.replace(/\b(\d+\.?\d*(?:e[+-]?\d+)?)\b/g, '<span class="hl-number">$1</span>');
      const rt = /\b(def|class|import|from|return|if|elif|else|for|while|try|except|finally|with|as|raise|pass|break|continue|and|or|not|in|is|None|True|False|self|lambda|yield|async|await|global|nonlocal)\b/g;
      z = z.replace(rt, '<span class="hl-keyword">$1</span>');
      const yt = /\b(print|len|range|int|str|float|list|dict|set|tuple|type|isinstance|getattr|setattr|hasattr|sum|min|max|abs|round|enumerate|zip|map|filter|sorted|reversed|open|super)\b/g;
      return z = z.replace(yt, '<span class="hl-builtin">$1</span>'), z = z.replace(/^(\s*@\w+)/gm, '<span class="hl-decorator">$1</span>'), z = z.replace(/\b(def|class)\b(\s+)(\w+)/g, '<span class="hl-keyword">$1</span>$2<span class="hl-funcname">$3</span>'), z;
    }).join(`
`);
  }
  function x(g) {
    return g._id || g.id || g.name || "";
  }
  function T() {
    if (!_(a)) return;
    const g = x(_(a)), N = `/extensions/llm_chat?explain=codex:${encodeURIComponent(g)}`;
    window.open(N, "_blank");
  }
  yi(() => {
    d();
  });
  var S = cl(), G = C(S), ee = A(C(G), 2), Ae = A(G, 2);
  {
    var Ne = (g) => {
      var N = Ki(), le = C(N);
      $(() => W(le, _(s))), j(g, N);
    };
    Ee(Ae, (g) => {
      _(s) && g(Ne);
    });
  }
  var Ge = A(Ae, 2);
  {
    var te = (g) => {
      var N = tl(), le = C(N), me = A(le, 2), z = C(me), rt = C(z), yt = A(C(rt), 2), kr = C(yt), Er = A(yt, 2);
      {
        var Cr = (P) => {
          var L = Wi(), ae = C(L);
          $(() => W(ae, `v${_(a).version ?? ""}`)), j(P, L);
        };
        Ee(Er, (P) => {
          _(a).version && P(Cr);
        });
      }
      var Sr = A(rt, 2), rr = A(z, 2);
      {
        var K = (P) => {
          var L = Ji(), ae = C(L);
          $(() => W(ae, _(a).description)), j(P, L);
        };
        Ee(rr, (P) => {
          _(a).description && P(K);
        });
      }
      var we = A(rr, 2);
      {
        var Re = (P) => {
          var L = Xi(), ae = C(L);
          $((Le) => W(ae, `Created: ${Le ?? ""}`), [() => v(_(a).created_at)]), j(P, L);
        }, xe = /* @__PURE__ */ sr(() => v(_(a).created_at));
        Ee(we, (P) => {
          _(xe) && P(Re);
        });
      }
      var jt = A(we, 2);
      {
        var nr = (P) => {
          const L = /* @__PURE__ */ sr(() => c(_(a).code || _(a).source || _(a).code_preview));
          var ae = Qi(), Le = C(ae), kt = C(Le), Ar = C(kt), Nr = A(kt, 2), Rr = A(Le, 2), ye = C(Rr), nt = C(ye);
          En(nt, 21, () => _(L).split(`
`), Bi, (st, zr, Fr) => {
            var un = Zi(), cn = C(un);
            cn.textContent = Fr + 1;
            var hs = A(cn);
            $i(hs, () => m(_(zr)), !0), j(st, un);
          }), $((st) => W(Ar, `Python • ${st ?? ""} lines`), [() => _(L).split(`
`).length]), Bt("click", Nr, () => navigator.clipboard.writeText(_(L))), j(P, ae);
        }, Mr = /* @__PURE__ */ sr(() => c(_(a).code || _(a).source || _(a).code_preview)), Tr = (P) => {
          var L = el(), ae = A(C(L), 2), Le = C(ae);
          $((kt) => W(Le, kt), [() => JSON.stringify(_(a), null, 2)]), j(P, L);
        };
        Ee(jt, (P) => {
          _(Mr) ? P(nr) : P(Tr, -1);
        });
      }
      $(() => W(kr, _(a).name || _(a)._id || "Codex")), Bt("click", le, h), Bt("click", Sr, T), j(g, N);
    }, be = (g) => {
      var N = rl();
      j(g, N);
    }, xr = (g) => {
      var N = fl(), le = pi(N), me = A(C(le), 2), z = A(le, 2), rt = C(z), yt = C(rt), kr = A(rt, 2);
      {
        var Er = (K) => {
          var we = nl(), Re = C(we);
          $(() => W(Re, `(${_(o).length ?? ""} matching)`)), j(K, we);
        };
        Ee(kr, (K) => {
          _(i) && _(o).length !== _(r).length && K(Er);
        });
      }
      var Cr = A(z, 2);
      {
        var Sr = (K) => {
          var we = sl(), Re = A(C(we), 2), xe = C(Re);
          $(() => W(xe, _(i) ? "No codexes match your search" : "No codexes found")), j(K, we);
        }, rr = (K) => {
          var we = ol();
          En(we, 21, () => _(o), (Re) => Re._id || Re.name, (Re, xe) => {
            var jt = al(), nr = C(jt), Mr = C(nr), Tr = A(C(Mr), 2), P = C(Tr), L = A(nr, 2);
            {
              var ae = (ye) => {
                var nt = il(), st = C(nt);
                $(() => W(st, _(xe).description)), j(ye, nt);
              };
              Ee(L, (ye) => {
                _(xe).description && ye(ae);
              });
            }
            var Le = A(L, 2);
            {
              var kt = (ye) => {
                var nt = ll(), st = C(nt), zr = C(st);
                $((Fr) => W(zr, Fr), [
                  () => _(xe).code_preview.split(`
`).slice(0, 3).join(`
`)
                ]), j(ye, nt);
              };
              Ee(Le, (ye) => {
                _(xe).code_preview && ye(kt);
              });
            }
            var Ar = A(Le, 2), Nr = C(Ar), Rr = C(Nr);
            $(
              (ye) => {
                W(P, _(xe).name), W(Rr, `ID: ${ye ?? ""}`);
              },
              [() => (_(xe)._id || "").substring(0, 12)]
            ), Bt("click", jt, () => p(_(xe))), j(Re, jt);
          }), j(K, we);
        };
        Ee(Cr, (K) => {
          _(o).length === 0 ? K(Sr) : K(rr, -1);
        });
      }
      $(() => W(yt, `${_(r).length ?? ""} total codexes`)), Ui(me, () => _(i), (K) => D(i, K)), j(g, N);
    };
    Ee(Ge, (g) => {
      _(a) ? g(te) : _(n) ? g(be, 1) : g(xr, -1);
    });
  }
  var yr = A(Ge, 2);
  {
    var vs = (g) => {
      var N = ul();
      j(g, N);
    };
    Ee(yr, (g) => {
      _(f) && g(vs);
    });
  }
  $(() => ee.disabled = _(n)), Bt("click", ee, d), j(e, S), zn();
}
zi(["click"]);
function _l(e, t) {
  const r = Ii(vl, { target: e, props: { ctx: t } });
  return {
    unmount() {
      try {
        Li(r);
      } catch {
      }
    }
  };
}
export {
  _l as default
};
