var Yi = Object.defineProperty;
var Rn = (e) => {
  throw TypeError(e);
};
var Wi = (e, t, r) => t in e ? Yi(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var ae = (e, t, r) => Wi(e, typeof t != "symbol" ? t + "" : t, r), Jr = (e, t, r) => t.has(e) || Rn("Cannot " + r);
var a = (e, t, r) => (Jr(e, t, "read from private field"), r ? r.call(e) : t.get(e)), E = (e, t, r) => t.has(e) ? Rn("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), y = (e, t, r, n) => (Jr(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r), P = (e, t, r) => (Jr(e, t, "access private method"), r);
var pn = Array.isArray, Ki = Array.prototype.indexOf, Xt = Array.prototype.includes, Gr = Array.from, Ji = Object.defineProperty, dr = Object.getOwnPropertyDescriptor, Qi = Object.prototype, Zi = Array.prototype, Xi = Object.getPrototypeOf, Nn = Object.isExtensible;
const $i = () => {
};
function es(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function Wn() {
  var e, t, r = new Promise((n, i) => {
    e = n, t = i;
  });
  return { promise: r, resolve: e, reject: t };
}
const J = 2, $t = 4, Yr = 8, Kn = 1 << 24, Pe = 16, Le = 32, _t = 64, en = 128, Ee = 512, V = 1024, K = 2048, Ue = 4096, re = 8192, Fe = 16384, It = 32768, Fn = 1 << 25, er = 65536, Ir = 1 << 17, ts = 1 << 18, ir = 1 << 19, rs = 1 << 20, qe = 1 << 25, Lt = 65536, jr = 1 << 21, Vt = 1 << 22, ht = 1 << 23, vr = Symbol("$state"), ns = Symbol("attributes"), tn = Symbol("class"), is = Symbol("style"), fr = Symbol("text"), Rr = Symbol("form reset"), Wr = new class extends Error {
  constructor() {
    super(...arguments);
    ae(this, "name", "StaleReactionError");
    ae(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
function ss(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function as() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function ls(e, t, r) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function os(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function fs() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function us(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function cs() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function ds() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function vs() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function hs() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function ps() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
const _s = 1, gs = 2, Jn = 4, ms = 8, bs = 16, ws = 1, xs = 2, U = Symbol("uninitialized"), ys = "http://www.w3.org/1999/xhtml";
function ks() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function Es() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function Ss() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function Qn(e) {
  return e === this.v;
}
function Cs(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Zn(e) {
  return !Cs(e, this.v);
}
let _e = null;
function tr(e) {
  _e = e;
}
function Xn(e, t = !1, r) {
  _e = {
    p: _e,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    r: (
      /** @type {Effect} */
      T
    ),
    l: null
  };
}
function $n(e) {
  var t = (
    /** @type {ComponentContext} */
    _e
  ), r = t.e;
  if (r !== null) {
    t.e = null;
    for (var n of r)
      xi(n);
  }
  return t.i = !0, _e = t.p, /** @type {T} */
  {};
}
function ei() {
  return !0;
}
let yt = [];
function ti() {
  var e = yt;
  yt = [], es(e);
}
function Pt(e) {
  if (yt.length === 0 && !hr) {
    var t = yt;
    queueMicrotask(() => {
      t === yt && ti();
    });
  }
  yt.push(e);
}
function As() {
  for (; yt.length > 0; )
    ti();
}
function ri(e) {
  var t = T;
  if (t === null)
    return A.f |= ht, e;
  if ((t.f & It) === 0 && (t.f & $t) === 0)
    throw e;
  dt(e, t);
}
function dt(e, t) {
  for (; t !== null; ) {
    if ((t.f & en) !== 0) {
      if ((t.f & It) === 0)
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
const Ms = -7169;
function H(e, t) {
  e.f = e.f & Ms | t;
}
function _n(e) {
  (e.f & Ee) !== 0 || e.deps === null ? H(e, V) : H(e, Ue);
}
function ni(e) {
  if (e !== null)
    for (const t of e)
      (t.f & J) === 0 || (t.f & Lt) === 0 || (t.f ^= Lt, ni(
        /** @type {Derived} */
        t.deps
      ));
}
function ii(e, t, r) {
  (e.f & K) !== 0 ? t.add(e) : (e.f & Ue) !== 0 && r.add(e), ni(e.deps), H(e, V);
}
let Qr = null, zt = null, S = null, rn = null, Re = null, nn = null, hr = !1, Zr = !1, Ut = null, Nr = null;
var Ln = 0;
let Ts = 1;
var Gt, ft, St, Yt, Wt, Ct, Kt, Qe, mr, ve, br, ut, Be, He, Jt, Qt, N, sn, ur, an, si, ai, Fr, Ps, ln, qt;
const qr = class qr {
  constructor() {
    E(this, N);
    ae(this, "id", Ts++);
    /** True as soon as `#process` was called */
    E(this, Gt, !1);
    ae(this, "linked", !0);
    /** @type {Batch | null} */
    E(this, ft, null);
    /** @type {Batch | null} */
    E(this, St, null);
    /** @type {Map<Effect, ReturnType<typeof deferred<any>>>} */
    ae(this, "async_deriveds", /* @__PURE__ */ new Map());
    /**
     * The current values of any signals that are updated in this batch.
     * Tuple format: [value, is_derived] (note: is_derived is false for deriveds, too, if they were overridden via assignment)
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Value, [any, boolean]>}
     */
    ae(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any signals (sources and deriveds) that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Value, any>}
     */
    ae(this, "previous", /* @__PURE__ */ new Map());
    /**
     * Async effects which this batch doesn't take into account anymore when calculating blockers,
     * as it has a value for it already.
     * @type {Set<Effect>}
     */
    ae(this, "unblocked", /* @__PURE__ */ new Set());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<(batch: Batch) => void>}
     */
    E(this, Yt, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    E(this, Wt, /* @__PURE__ */ new Set());
    /**
     * Callbacks that should run only when a fork is committed.
     * @type {Set<(batch: Batch) => void>}
     */
    E(this, Ct, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    E(this, Kt, 0);
    /**
     * Async effects that are currently in flight, _not_ inside a pending boundary
     * @type {Map<Effect, number>}
     */
    E(this, Qe, /* @__PURE__ */ new Map());
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    E(this, mr, null);
    /**
     * The root effects that need to be flushed
     * @type {Effect[]}
     */
    E(this, ve, []);
    /**
     * Effects created while this batch was active.
     * @type {Effect[]}
     */
    E(this, br, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    E(this, ut, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    E(this, Be, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    E(this, He, /* @__PURE__ */ new Map());
    /**
     * Inverse of #skipped_branches which we need to tell prior batches to unskip them when committing
     * @type {Set<Effect>}
     */
    E(this, Jt, /* @__PURE__ */ new Set());
    ae(this, "is_fork", !1);
    E(this, Qt, !1);
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(t) {
    a(this, He).has(t) || a(this, He).set(t, { d: [], m: [] }), a(this, Jt).delete(t);
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   * @param {(e: Effect) => void} callback
   */
  unskip_effect(t, r = (n) => this.schedule(n)) {
    var n = a(this, He).get(t);
    if (n) {
      a(this, He).delete(t);
      for (var i of n.d)
        H(i, K), r(i);
      for (i of n.m)
        H(i, Ue), r(i);
    }
    a(this, Jt).add(t);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Value} source
   * @param {any} value
   * @param {boolean} [is_derived]
   */
  capture(t, r, n = !1) {
    t.v !== U && !this.previous.has(t) && this.previous.set(t, t.v), (t.f & ht) === 0 && (this.current.set(t, [r, n]), Re?.set(t, r)), this.is_fork || (t.v = r);
  }
  activate() {
    S = this;
  }
  deactivate() {
    S = null, Re = null;
  }
  flush() {
    try {
      Zr = !0, S = this, P(this, N, ur).call(this);
    } finally {
      Ln = 0, nn = null, Ut = null, Nr = null, Zr = !1, S = null, Re = null, Rt.clear();
    }
  }
  discard() {
    for (const t of a(this, Wt)) t(this);
    a(this, Wt).clear(), a(this, Ct).clear(), P(this, N, qt).call(this);
  }
  /**
   * @param {Effect} effect
   */
  register_created_effect(t) {
    a(this, br).push(t);
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  increment(t, r) {
    if (y(this, Kt, a(this, Kt) + 1), t) {
      let n = a(this, Qe).get(r) ?? 0;
      a(this, Qe).set(r, n + 1);
    }
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  decrement(t, r) {
    if (y(this, Kt, a(this, Kt) - 1), t) {
      let n = a(this, Qe).get(r) ?? 0;
      n === 1 ? a(this, Qe).delete(r) : a(this, Qe).set(r, n - 1);
    }
    a(this, Qt) || (y(this, Qt, !0), Pt(() => {
      y(this, Qt, !1), this.linked && this.flush();
    }));
  }
  /**
   * @param {Set<Effect>} dirty_effects
   * @param {Set<Effect>} maybe_dirty_effects
   */
  transfer_effects(t, r) {
    for (const n of t)
      a(this, ut).add(n);
    for (const n of r)
      a(this, Be).add(n);
    t.clear(), r.clear();
  }
  /** @param {(batch: Batch) => void} fn */
  oncommit(t) {
    a(this, Yt).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    a(this, Wt).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  on_fork_commit(t) {
    a(this, Ct).add(t);
  }
  run_fork_commit_callbacks() {
    for (const t of a(this, Ct)) t(this);
    a(this, Ct).clear();
  }
  settled() {
    return (a(this, mr) ?? y(this, mr, Wn())).promise;
  }
  static ensure() {
    var t;
    if (S === null) {
      const r = S = new qr();
      P(t = r, N, ln).call(t), !Zr && !hr && Pt(() => {
        a(r, Gt) || r.flush();
      });
    }
    return S;
  }
  apply() {
    {
      Re = null;
      return;
    }
  }
  /**
   *
   * @param {Effect} effect
   */
  schedule(t) {
    if (nn = t, t.b?.is_pending && (t.f & ($t | Yr | Kn)) !== 0 && (t.f & It) === 0) {
      t.b.defer_effect(t);
      return;
    }
    for (var r = t; r.parent !== null; ) {
      r = r.parent;
      var n = r.f;
      if (Ut !== null && r === T && (A === null || (A.f & J) === 0))
        return;
      if ((n & (_t | Le)) !== 0) {
        if ((n & V) === 0)
          return;
        r.f ^= V;
      }
    }
    a(this, ve).push(r);
  }
};
Gt = new WeakMap(), ft = new WeakMap(), St = new WeakMap(), Yt = new WeakMap(), Wt = new WeakMap(), Ct = new WeakMap(), Kt = new WeakMap(), Qe = new WeakMap(), mr = new WeakMap(), ve = new WeakMap(), br = new WeakMap(), ut = new WeakMap(), Be = new WeakMap(), He = new WeakMap(), Jt = new WeakMap(), Qt = new WeakMap(), N = new WeakSet(), sn = function() {
  if (this.is_fork) return !0;
  for (const n of a(this, Qe).keys()) {
    for (var t = n, r = !1; t.parent !== null; ) {
      if (a(this, He).has(t)) {
        r = !0;
        break;
      }
      t = t.parent;
    }
    if (!r)
      return !0;
  }
  return !1;
}, ur = function() {
  var l, u, h;
  if (y(this, Gt, !0), Ln++ > 1e3 && (P(this, N, qt).call(this), Ns()), !P(this, N, sn).call(this)) {
    for (const v of a(this, ut))
      a(this, Be).delete(v), H(v, K), this.schedule(v);
    for (const v of a(this, Be))
      H(v, Ue), this.schedule(v);
  }
  const t = a(this, ve);
  y(this, ve, []), this.apply();
  var r = Ut = [], n = [], i = Nr = [];
  for (const v of t)
    try {
      P(this, N, an).call(this, v, r, n);
    } catch (d) {
      throw fi(v), d;
    }
  if (S = null, i.length > 0) {
    var s = qr.ensure();
    for (const v of i)
      s.schedule(v);
  }
  if (Ut = null, Nr = null, P(this, N, sn).call(this)) {
    P(this, N, Fr).call(this, n), P(this, N, Fr).call(this, r);
    for (const [v, d] of a(this, He))
      oi(v, d);
    i.length > 0 && /** @type {unknown} */
    P(l = S, N, ur).call(l);
    return;
  }
  const o = P(this, N, si).call(this);
  if (o) {
    P(u = o, N, ai).call(u, this);
    return;
  }
  a(this, ut).clear(), a(this, Be).clear();
  for (const v of a(this, Yt)) v(this);
  a(this, Yt).clear(), rn = this, On(n), On(r), rn = null, a(this, mr)?.resolve();
  var f = (
    /** @type {Batch | null} */
    /** @type {unknown} */
    S
  );
  if (this.linked && a(this, Kt) === 0 && P(this, N, qt).call(this), a(this, ve).length > 0) {
    f === null && (f = this, P(this, N, ln).call(this));
    const v = f;
    a(v, ve).push(...a(this, ve).filter((d) => !a(v, ve).includes(d)));
  }
  f !== null && P(h = f, N, ur).call(h);
}, /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
an = function(t, r, n) {
  t.f ^= V;
  for (var i = t.first; i !== null; ) {
    var s = i.f, o = (s & (Le | _t)) !== 0, f = o && (s & V) !== 0, l = f || (s & re) !== 0 || a(this, He).has(i);
    if (!l && i.fn !== null) {
      o ? i.f ^= V : (s & $t) !== 0 ? r.push(i) : Sr(i) && ((s & Pe) !== 0 && a(this, Be).add(i), nr(i));
      var u = i.first;
      if (u !== null) {
        i = u;
        continue;
      }
    }
    for (; i !== null; ) {
      var h = i.next;
      if (h !== null) {
        i = h;
        break;
      }
      i = i.parent;
    }
  }
}, si = function() {
  for (var t = a(this, ft); t !== null; ) {
    if (!t.is_fork) {
      for (const [r, [, n]] of this.current)
        if (t.current.has(r) && !n)
          return t;
    }
    t = a(t, ft);
  }
  return null;
}, /**
 * @param {Batch} batch
 */
ai = function(t) {
  var n;
  for (const [i, s] of t.current)
    !this.previous.has(i) && t.previous.has(i) && this.previous.set(i, t.previous.get(i)), this.current.set(i, s);
  for (const [i, s] of t.async_deriveds) {
    const o = this.async_deriveds.get(i);
    o && s.promise.then(o.resolve);
  }
  const r = (i) => {
    var s = i.reactions;
    if (s !== null)
      for (const l of s) {
        var o = l.f;
        if ((o & J) !== 0)
          r(
            /** @type {Derived} */
            l
          );
        else {
          var f = (
            /** @type {Effect} */
            l
          );
          o & (Vt | Pe) && !this.async_deriveds.has(f) && (a(this, Be).delete(f), H(f, K), this.schedule(f));
        }
      }
  };
  for (const i of this.current.keys())
    r(i);
  this.oncommit(() => t.discard()), P(n = t, N, qt).call(n), S = this, P(this, N, ur).call(this);
}, /**
 * @param {Effect[]} effects
 */
Fr = function(t) {
  for (var r = 0; r < t.length; r += 1)
    ii(t[r], a(this, ut), a(this, Be));
}, Ps = function() {
  var h;
  P(this, N, qt).call(this);
  for (let v = Qr; v !== null; v = a(v, St)) {
    var t = v.id < this.id, r = [];
    for (const [d, [m, b]] of this.current) {
      if (v.current.has(d)) {
        var n = (
          /** @type {[any, boolean]} */
          v.current.get(d)[0]
        );
        if (t && m !== n)
          v.current.set(d, [m, b]);
        else
          continue;
      }
      r.push(d);
    }
    if (t)
      for (const [d, m] of this.async_deriveds) {
        const b = v.async_deriveds.get(d);
        b && m.promise.then(b.resolve);
      }
    if (a(v, Gt)) {
      var i = [...v.current.keys()].filter((d) => !this.current.has(d));
      if (i.length === 0)
        t && v.discard();
      else if (r.length > 0) {
        if (t)
          for (const d of a(this, Jt))
            v.unskip_effect(d, (m) => {
              var b;
              (m.f & (Pe | Vt)) !== 0 ? v.schedule(m) : P(b = v, N, Fr).call(b, [m]);
            });
        v.activate();
        var s = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Map();
        for (var f of r)
          li(f, i, s, o);
        o = /* @__PURE__ */ new Map();
        var l = [...v.current.keys()].filter(
          (d) => this.current.has(d) ? (
            /** @type {[any, boolean]} */
            this.current.get(d)[0] !== d.v
          ) : !0
        );
        if (l.length > 0)
          for (const d of a(this, br))
            (d.f & (Fe | re | Ir)) === 0 && gn(d, l, o) && ((d.f & (Vt | Pe)) !== 0 ? (H(d, K), v.schedule(d)) : a(v, ut).add(d));
        if (a(v, ve).length > 0) {
          v.apply();
          for (var u of a(v, ve))
            P(h = v, N, an).call(h, u, [], []);
          y(v, ve, []);
        }
        v.deactivate();
      }
    }
  }
}, ln = function() {
  zt === null ? Qr = zt = this : (y(zt, St, this), y(this, ft, zt)), zt = this;
}, qt = function() {
  var t = a(this, ft), r = a(this, St);
  t === null ? Qr = r : y(t, St, r), r === null ? zt = t : y(r, ft, t), this.linked = !1;
};
let Ot = qr;
function Rs(e) {
  var t = hr;
  hr = !0;
  try {
    for (var r; ; ) {
      if (As(), S === null)
        return (
          /** @type {T} */
          r
        );
      S.flush();
    }
  } finally {
    hr = t;
  }
}
function Ns() {
  try {
    cs();
  } catch (e) {
    dt(e, nn);
  }
}
let Je = null;
function On(e) {
  var t = e.length;
  if (t !== 0) {
    for (var r = 0; r < t; ) {
      var n = e[r++];
      if ((n.f & (Fe | re)) === 0 && Sr(n) && (Je = /* @__PURE__ */ new Set(), nr(n), n.deps === null && n.first === null && n.nodes === null && n.teardown === null && n.ac === null && Ei(n), Je?.size > 0)) {
        Rt.clear();
        for (const i of Je) {
          if ((i.f & (Fe | re)) !== 0) continue;
          const s = [i];
          let o = i.parent;
          for (; o !== null; )
            Je.has(o) && (Je.delete(o), s.push(o)), o = o.parent;
          for (let f = s.length - 1; f >= 0; f--) {
            const l = s[f];
            (l.f & (Fe | re)) === 0 && nr(l);
          }
        }
        Je.clear();
      }
    }
    Je = null;
  }
}
function li(e, t, r, n) {
  if (!r.has(e) && (r.add(e), e.reactions !== null))
    for (const i of e.reactions) {
      const s = i.f;
      (s & J) !== 0 ? li(
        /** @type {Derived} */
        i,
        t,
        r,
        n
      ) : (s & (Vt | Pe)) !== 0 && (s & K) === 0 && gn(i, t, n) && (H(i, K), mn(
        /** @type {Effect} */
        i
      ));
    }
}
function gn(e, t, r) {
  const n = r.get(e);
  if (n !== void 0) return n;
  if (e.deps !== null)
    for (const i of e.deps) {
      if (Xt.call(t, i))
        return !0;
      if ((i.f & J) !== 0 && gn(
        /** @type {Derived} */
        i,
        t,
        r
      ))
        return r.set(
          /** @type {Derived} */
          i,
          !0
        ), !0;
    }
  return r.set(e, !1), !1;
}
function mn(e) {
  S.schedule(e);
}
function oi(e, t) {
  if (!((e.f & Le) !== 0 && (e.f & V) !== 0)) {
    (e.f & K) !== 0 ? t.d.push(e) : (e.f & Ue) !== 0 && t.m.push(e), H(e, V);
    for (var r = e.first; r !== null; )
      oi(r, t), r = r.next;
  }
}
function fi(e) {
  H(e, V);
  for (var t = e.first; t !== null; )
    fi(t), t = t.next;
}
function Fs(e) {
  let t = 0, r = Dt(0), n;
  return () => {
    yn() && (c(r), yi(() => (t === 0 && (n = An(() => e(() => pr(r)))), t += 1, () => {
      Pt(() => {
        t -= 1, t === 0 && (n?.(), n = void 0, pr(r));
      });
    })));
  };
}
var Ls = er | ir;
function Os(e, t, r, n) {
  new Ds(e, t, r, n);
}
var we, hn, xe, At, oe, ye, te, he, Ze, Mt, ct, Zt, wr, xr, Xe, Ur, z, Is, js, Bs, on, Lr, Or, fn, un;
class Ds {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(t, r, n, i) {
    E(this, z);
    /** @type {Boundary | null} */
    ae(this, "parent");
    ae(this, "is_pending", !1);
    /**
     * API-level transformError transform function. Transforms errors before they reach the `failed` snippet.
     * Inherited from parent boundary, or defaults to identity.
     * @type {(error: unknown) => unknown}
     */
    ae(this, "transform_error");
    /** @type {TemplateNode} */
    E(this, we);
    /** @type {TemplateNode | null} */
    E(this, hn, null);
    /** @type {BoundaryProps} */
    E(this, xe);
    /** @type {((anchor: Node) => void)} */
    E(this, At);
    /** @type {Effect} */
    E(this, oe);
    /** @type {Effect | null} */
    E(this, ye, null);
    /** @type {Effect | null} */
    E(this, te, null);
    /** @type {Effect | null} */
    E(this, he, null);
    /** @type {DocumentFragment | null} */
    E(this, Ze, null);
    E(this, Mt, 0);
    E(this, ct, 0);
    E(this, Zt, !1);
    /** @type {Set<Effect>} */
    E(this, wr, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    E(this, xr, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    E(this, Xe, null);
    E(this, Ur, Fs(() => (y(this, Xe, Dt(a(this, Mt))), () => {
      y(this, Xe, null);
    })));
    y(this, we, t), y(this, xe, r), y(this, At, (s) => {
      var o = (
        /** @type {Effect} */
        T
      );
      o.b = this, o.f |= en, n(s);
    }), this.parent = /** @type {Effect} */
    T.b, this.transform_error = i ?? this.parent?.transform_error ?? ((s) => s), y(this, oe, kn(() => {
      P(this, z, on).call(this);
    }, Ls));
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    ii(t, a(this, wr), a(this, xr));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!a(this, xe).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  update_pending_count(t, r) {
    P(this, z, fn).call(this, t, r), y(this, Mt, a(this, Mt) + t), !(!a(this, Xe) || a(this, Zt)) && (y(this, Zt, !0), Pt(() => {
      y(this, Zt, !1), a(this, Xe) && rr(a(this, Xe), a(this, Mt));
    }));
  }
  get_effect_pending() {
    return a(this, Ur).call(this), c(
      /** @type {Source<number>} */
      a(this, Xe)
    );
  }
  /** @param {unknown} error */
  error(t) {
    if (!a(this, xe).onerror && !a(this, xe).failed)
      throw t;
    S?.is_fork ? (a(this, ye) && S.skip_effect(a(this, ye)), a(this, te) && S.skip_effect(a(this, te)), a(this, he) && S.skip_effect(a(this, he)), S.on_fork_commit(() => {
      P(this, z, un).call(this, t);
    })) : P(this, z, un).call(this, t);
  }
}
we = new WeakMap(), hn = new WeakMap(), xe = new WeakMap(), At = new WeakMap(), oe = new WeakMap(), ye = new WeakMap(), te = new WeakMap(), he = new WeakMap(), Ze = new WeakMap(), Mt = new WeakMap(), ct = new WeakMap(), Zt = new WeakMap(), wr = new WeakMap(), xr = new WeakMap(), Xe = new WeakMap(), Ur = new WeakMap(), z = new WeakSet(), Is = function() {
  try {
    y(this, ye, ke(() => a(this, At).call(this, a(this, we))));
  } catch (t) {
    this.error(t);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
js = function(t) {
  const r = a(this, xe).failed;
  r && y(this, he, ke(() => {
    r(
      a(this, we),
      () => t,
      () => () => {
      }
    );
  }));
}, Bs = function() {
  const t = a(this, xe).pending;
  t && (this.is_pending = !0, y(this, te, ke(() => t(a(this, we)))), Pt(() => {
    var r = y(this, Ze, document.createDocumentFragment()), n = pt();
    r.append(n), y(this, ye, P(this, z, Or).call(this, () => ke(() => a(this, At).call(this, n)))), a(this, ct) === 0 && (a(this, we).before(r), y(this, Ze, null), Nt(
      /** @type {Effect} */
      a(this, te),
      () => {
        y(this, te, null);
      }
    ), P(this, z, Lr).call(
      this,
      /** @type {Batch} */
      S
    ));
  }));
}, on = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), y(this, ct, 0), y(this, Mt, 0), y(this, ye, ke(() => {
      a(this, At).call(this, a(this, we));
    })), a(this, ct) > 0) {
      var t = y(this, Ze, document.createDocumentFragment());
      Cn(a(this, ye), t);
      const r = (
        /** @type {(anchor: Node) => void} */
        a(this, xe).pending
      );
      y(this, te, ke(() => r(a(this, we))));
    } else
      P(this, z, Lr).call(
        this,
        /** @type {Batch} */
        S
      );
  } catch (r) {
    this.error(r);
  }
}, /**
 * @param {Batch} batch
 */
Lr = function(t) {
  this.is_pending = !1, t.transfer_effects(a(this, wr), a(this, xr));
}, /**
 * @template T
 * @param {() => T} fn
 */
Or = function(t) {
  var r = T, n = A, i = _e;
  Ve(a(this, oe)), Ce(a(this, oe)), tr(a(this, oe).ctx);
  try {
    return Ot.ensure(), t();
  } catch (s) {
    return ri(s), null;
  } finally {
    Ve(r), Ce(n), tr(i);
  }
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 * @param {Batch} batch
 */
fn = function(t, r) {
  var n;
  if (!this.has_pending_snippet()) {
    this.parent && P(n = this.parent, z, fn).call(n, t, r);
    return;
  }
  y(this, ct, a(this, ct) + t), a(this, ct) === 0 && (P(this, z, Lr).call(this, r), a(this, te) && Nt(a(this, te), () => {
    y(this, te, null);
  }), a(this, Ze) && (a(this, we).before(a(this, Ze)), y(this, Ze, null)));
}, /**
 * @param {unknown} error
 */
un = function(t) {
  a(this, ye) && (ue(a(this, ye)), y(this, ye, null)), a(this, te) && (ue(a(this, te)), y(this, te, null)), a(this, he) && (ue(a(this, he)), y(this, he, null));
  var r = a(this, xe).onerror;
  let n = a(this, xe).failed;
  var i = !1, s = !1;
  const o = () => {
    if (i) {
      Ss();
      return;
    }
    i = !0, s && ps(), a(this, he) !== null && Nt(a(this, he), () => {
      y(this, he, null);
    }), P(this, z, Or).call(this, () => {
      P(this, z, on).call(this);
    });
  }, f = (l) => {
    try {
      s = !0, r?.(l, o), s = !1;
    } catch (u) {
      dt(u, a(this, oe) && a(this, oe).parent);
    }
    n && y(this, he, P(this, z, Or).call(this, () => {
      try {
        return ke(() => {
          var u = (
            /** @type {Effect} */
            T
          );
          u.b = this, u.f |= en, n(
            a(this, we),
            () => l,
            () => o
          );
        });
      } catch (u) {
        return dt(
          u,
          /** @type {Effect} */
          a(this, oe).parent
        ), null;
      }
    }));
  };
  Pt(() => {
    var l;
    try {
      l = this.transform_error(t);
    } catch (u) {
      dt(u, a(this, oe) && a(this, oe).parent);
      return;
    }
    l !== null && typeof l == "object" && typeof /** @type {any} */
    l.then == "function" ? l.then(
      f,
      /** @param {unknown} e */
      (u) => dt(u, a(this, oe) && a(this, oe).parent)
    ) : f(l);
  });
};
function Hs(e, t, r, n) {
  const i = bn;
  var s = e.filter((d) => !d.settled);
  if (r.length === 0 && s.length === 0) {
    n(t.map(i));
    return;
  }
  var o = (
    /** @type {Effect} */
    T
  ), f = zs(), l = s.length === 1 ? s[0].promise : s.length > 1 ? Promise.all(s.map((d) => d.promise)) : null;
  function u(d) {
    if ((o.f & Fe) === 0) {
      f();
      try {
        n(d);
      } catch (m) {
        dt(m, o);
      }
      Br();
    }
  }
  var h = ui();
  if (r.length === 0) {
    l.then(() => u(t.map(i))).finally(h);
    return;
  }
  function v() {
    Promise.all(r.map((d) => /* @__PURE__ */ qs(d))).then((d) => u([...t.map(i), ...d])).catch((d) => dt(d, o)).finally(h);
  }
  l ? l.then(() => {
    f(), v(), Br();
  }) : v();
}
function zs() {
  var e = (
    /** @type {Effect} */
    T
  ), t = A, r = _e, n = (
    /** @type {Batch} */
    S
  );
  return function(s = !0) {
    Ve(e), Ce(t), tr(r), s && (e.f & Fe) === 0 && (n?.activate(), n?.apply());
  };
}
function Br(e = !0) {
  Ve(null), Ce(null), tr(null), e && S?.deactivate();
}
function ui() {
  var e = (
    /** @type {Effect} */
    T
  ), t = (
    /** @type {Boundary} */
    e.b
  ), r = (
    /** @type {Batch} */
    S
  ), n = t.is_rendered();
  return t.update_pending_count(1, r), r.increment(n, e), () => {
    t.update_pending_count(-1, r), r.decrement(n, e);
  };
}
// @__NO_SIDE_EFFECTS__
function bn(e) {
  var t = J | K;
  return T !== null && (T.f |= ir), {
    ctx: _e,
    deps: null,
    effects: null,
    equals: Qn,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      U
    ),
    wv: 0,
    parent: T,
    ac: null
  };
}
const Mr = Symbol("obsolete");
// @__NO_SIDE_EFFECTS__
function qs(e, t, r) {
  let n = (
    /** @type {Effect | null} */
    T
  );
  n === null && as();
  var i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), s = Dt(
    /** @type {V} */
    U
  ), o = !A, f = /* @__PURE__ */ new Set();
  return sa(() => {
    var l = (
      /** @type {Effect} */
      T
    ), u = Wn();
    i = u.promise;
    try {
      Promise.resolve(e()).then(u.resolve, (m) => {
        m !== Wr && u.reject(m);
      }).finally(Br);
    } catch (m) {
      u.reject(m), Br();
    }
    var h = (
      /** @type {Batch} */
      S
    );
    if (o) {
      if ((l.f & It) !== 0)
        var v = ui();
      if (
        /** @type {Boundary} */
        n.b.is_rendered()
      )
        h.async_deriveds.get(l)?.reject(Mr);
      else
        for (const m of f.values())
          m.reject(Mr);
      f.add(u), h.async_deriveds.set(l, u);
    }
    const d = (m, b = void 0) => {
      v?.(), f.delete(u), b !== Mr && (h.activate(), b ? (s.f |= ht, rr(s, b)) : ((s.f & ht) !== 0 && (s.f ^= ht), rr(s, m)), h.deactivate());
    };
    u.promise.then(d, (m) => d(null, m || "unknown"));
  }), wi(() => {
    for (const l of f)
      l.reject(Mr);
  }), new Promise((l) => {
    function u(h) {
      function v() {
        h === i ? l(s) : u(i);
      }
      h.then(v, v);
    }
    u(i);
  });
}
// @__NO_SIDE_EFFECTS__
function Us(e) {
  const t = /* @__PURE__ */ bn(e);
  return Ai(t), t;
}
// @__NO_SIDE_EFFECTS__
function Vs(e) {
  const t = /* @__PURE__ */ bn(e);
  return t.equals = Zn, t;
}
function Gs(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var r = 0; r < t.length; r += 1)
      ue(
        /** @type {Effect} */
        t[r]
      );
  }
}
function wn(e) {
  var t, r = T, n = e.parent;
  if (!gt && n !== null && e.v !== U && // if it was never evaluated before, it's guaranteed to fail downstream, so we try to execute instead
  (n.f & (Fe | re)) !== 0)
    return ks(), e.v;
  Ve(n);
  try {
    e.f &= ~Lt, Gs(e), t = Ri(e);
  } finally {
    Ve(r);
  }
  return t;
}
function ci(e) {
  var t = wn(e);
  if (!e.equals(t) && (e.wv = Ti(), (!S?.is_fork || e.deps === null) && (S !== null ? (S.capture(e, t, !0), rn?.capture(e, t, !0)) : e.v = t, e.deps === null))) {
    H(e, V);
    return;
  }
  gt || (Re !== null ? (yn() || S?.is_fork) && Re.set(e, t) : _n(e));
}
function Ys(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      (t.teardown || t.ac) && (t.teardown?.(), t.ac?.abort(Wr), t.fn !== null && (t.teardown = $i), t.ac = null, gr(t, 0), En(t));
}
function di(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      t.teardown && t.fn !== null && nr(t);
}
let Hr = /* @__PURE__ */ new Set();
const Rt = /* @__PURE__ */ new Map();
let vi = !1;
function Dt(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Qn,
    rv: 0,
    wv: 0
  };
  return r;
}
// @__NO_SIDE_EFFECTS__
function B(e, t) {
  const r = Dt(e);
  return Ai(r), r;
}
// @__NO_SIDE_EFFECTS__
function Ws(e, t = !1, r = !0) {
  const n = Dt(e);
  return t || (n.equals = Zn), n;
}
function _(e, t, r = !1) {
  A !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Ne || (A.f & Ir) !== 0) && ei() && (A.f & (J | Pe | Vt | Ir)) !== 0 && (Se === null || !Xt.call(Se, e)) && hs();
  let n = r ? $e(t) : t;
  return rr(e, n, Nr);
}
function rr(e, t, r = null) {
  if (!e.equals(t)) {
    Rt.set(e, gt ? t : e.v);
    var n = Ot.ensure();
    if (n.capture(e, t), (e.f & J) !== 0) {
      const i = (
        /** @type {Derived} */
        e
      );
      (e.f & K) !== 0 && wn(i), Re === null && _n(i);
    }
    e.wv = Ti(), hi(e, K, r), T !== null && (T.f & V) !== 0 && (T.f & (Le | _t)) === 0 && (be === null ? oa([e]) : be.push(e)), !n.is_fork && Hr.size > 0 && !vi && Ks();
  }
  return t;
}
function Ks() {
  vi = !1;
  for (const e of Hr) {
    (e.f & V) !== 0 && H(e, Ue);
    let t;
    try {
      t = Sr(e);
    } catch {
      t = !0;
    }
    t && nr(e);
  }
  Hr.clear();
}
function pr(e) {
  _(e, e.v + 1);
}
function hi(e, t, r) {
  var n = e.reactions;
  if (n !== null)
    for (var i = n.length, s = 0; s < i; s++) {
      var o = n[s], f = o.f, l = (f & K) === 0;
      if (l && H(o, t), (f & Ir) !== 0)
        Hr.add(
          /** @type {Effect} */
          o
        );
      else if ((f & J) !== 0) {
        var u = (
          /** @type {Derived} */
          o
        );
        Re?.delete(u), (f & Lt) === 0 && (f & Ee && (T === null || (T.f & jr) === 0) && (o.f |= Lt), hi(u, Ue, r));
      } else if (l) {
        var h = (
          /** @type {Effect} */
          o
        );
        (f & Pe) !== 0 && Je !== null && Je.add(h), r !== null ? r.push(h) : mn(h);
      }
    }
}
function $e(e) {
  if (typeof e != "object" || e === null || vr in e)
    return e;
  const t = Xi(e);
  if (t !== Qi && t !== Zi)
    return e;
  var r = /* @__PURE__ */ new Map(), n = pn(e), i = /* @__PURE__ */ B(0), s = Ft, o = (f) => {
    if (Ft === s)
      return f();
    var l = A, u = Ft;
    Ce(null), Hn(s);
    var h = f();
    return Ce(l), Hn(u), h;
  };
  return n && r.set("length", /* @__PURE__ */ B(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(f, l, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && ds();
        var h = r.get(l);
        return h === void 0 ? o(() => {
          var v = /* @__PURE__ */ B(u.value);
          return r.set(l, v), v;
        }) : _(h, u.value, !0), !0;
      },
      deleteProperty(f, l) {
        var u = r.get(l);
        if (u === void 0) {
          if (l in f) {
            const h = o(() => /* @__PURE__ */ B(U));
            r.set(l, h), pr(i);
          }
        } else
          _(u, U), pr(i);
        return !0;
      },
      get(f, l, u) {
        if (l === vr)
          return e;
        var h = r.get(l), v = l in f;
        if (h === void 0 && (!v || dr(f, l)?.writable) && (h = o(() => {
          var m = $e(v ? f[l] : U), b = /* @__PURE__ */ B(m);
          return b;
        }), r.set(l, h)), h !== void 0) {
          var d = c(h);
          return d === U ? void 0 : d;
        }
        return Reflect.get(f, l, u);
      },
      getOwnPropertyDescriptor(f, l) {
        var u = Reflect.getOwnPropertyDescriptor(f, l);
        if (u && "value" in u) {
          var h = r.get(l);
          h && (u.value = c(h));
        } else if (u === void 0) {
          var v = r.get(l), d = v?.v;
          if (v !== void 0 && d !== U)
            return {
              enumerable: !0,
              configurable: !0,
              value: d,
              writable: !0
            };
        }
        return u;
      },
      has(f, l) {
        if (l === vr)
          return !0;
        var u = r.get(l), h = u !== void 0 && u.v !== U || Reflect.has(f, l);
        if (u !== void 0 || T !== null && (!h || dr(f, l)?.writable)) {
          u === void 0 && (u = o(() => {
            var d = h ? $e(f[l]) : U, m = /* @__PURE__ */ B(d);
            return m;
          }), r.set(l, u));
          var v = c(u);
          if (v === U)
            return !1;
        }
        return h;
      },
      set(f, l, u, h) {
        var v = r.get(l), d = l in f;
        if (n && l === "length")
          for (var m = u; m < /** @type {Source<number>} */
          v.v; m += 1) {
            var b = r.get(m + "");
            b !== void 0 ? _(b, U) : m in f && (b = o(() => /* @__PURE__ */ B(U)), r.set(m + "", b));
          }
        if (v === void 0)
          (!d || dr(f, l)?.writable) && (v = o(() => /* @__PURE__ */ B(void 0)), _(v, $e(u)), r.set(l, v));
        else {
          d = v.v !== U;
          var M = o(() => $e(u));
          _(v, M);
        }
        var g = Reflect.getOwnPropertyDescriptor(f, l);
        if (g?.set && g.set.call(h, u), !d) {
          if (n && typeof l == "string") {
            var C = (
              /** @type {Source<number>} */
              r.get("length")
            ), I = Number(l);
            Number.isInteger(I) && I >= C.v && _(C, I + 1);
          }
          pr(i);
        }
        return !0;
      },
      ownKeys(f) {
        c(i);
        var l = Reflect.ownKeys(f).filter((v) => {
          var d = r.get(v);
          return d === void 0 || d.v !== U;
        });
        for (var [u, h] of r)
          h.v !== U && !(u in f) && l.push(u);
        return l;
      },
      setPrototypeOf() {
        vs();
      }
    }
  );
}
function Dn(e) {
  try {
    if (e !== null && typeof e == "object" && vr in e)
      return e[vr];
  } catch {
  }
  return e;
}
function Js(e, t) {
  return Object.is(Dn(e), Dn(t));
}
var In, pi, _i, gi;
function Qs() {
  if (In === void 0) {
    In = window, pi = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, r = Text.prototype;
    _i = dr(t, "firstChild").get, gi = dr(t, "nextSibling").get, Nn(e) && (e[tn] = void 0, e[ns] = null, e[is] = void 0, e.__e = void 0), Nn(r) && (r[fr] = void 0);
  }
}
function pt(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function vt(e) {
  return (
    /** @type {TemplateNode | null} */
    _i.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function Er(e) {
  return (
    /** @type {TemplateNode | null} */
    gi.call(e)
  );
}
function w(e, t) {
  return /* @__PURE__ */ vt(e);
}
function Tr(e, t = !1) {
  {
    var r = /* @__PURE__ */ vt(e);
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ Er(r) : r;
  }
}
function k(e, t = 1, r = !1) {
  let n = e;
  for (; t--; )
    n = /** @type {TemplateNode} */
    /* @__PURE__ */ Er(n);
  return n;
}
function Zs(e) {
  e.textContent = "";
}
function mi() {
  return !1;
}
function Xs(e, t, r) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElementNS(ys, e, void 0)
  );
}
let jn = !1;
function $s() {
  jn || (jn = !0, document.addEventListener(
    "reset",
    (e) => {
      Promise.resolve().then(() => {
        if (!e.defaultPrevented)
          for (
            const t of
            /**@type {HTMLFormElement} */
            e.target.elements
          )
            t[Rr]?.();
      });
    },
    // In the capture phase to guarantee we get noticed of it (no possibility of stopPropagation)
    { capture: !0 }
  ));
}
function xn(e) {
  var t = A, r = T;
  Ce(null), Ve(null);
  try {
    return e();
  } finally {
    Ce(t), Ve(r);
  }
}
function bi(e, t, r, n = r) {
  e.addEventListener(t, () => xn(r));
  const i = (
    /** @type {any} */
    e[Rr]
  );
  i ? e[Rr] = () => {
    i(), n(!0);
  } : e[Rr] = () => n(!0), $s();
}
function ea(e) {
  T === null && (A === null && us(), fs()), gt && os();
}
function ta(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function et(e, t) {
  var r = T;
  r !== null && (r.f & re) !== 0 && (e |= re);
  var n = {
    ctx: _e,
    deps: null,
    nodes: null,
    f: e | K | Ee,
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
  S?.register_created_effect(n);
  var i = n;
  if ((e & $t) !== 0)
    Ut !== null ? Ut.push(n) : Ot.ensure().schedule(n);
  else if (t !== null) {
    try {
      nr(n);
    } catch (o) {
      throw ue(n), o;
    }
    i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && // either `null`, or a singular child
    (i.f & ir) === 0 && (i = i.first, (e & Pe) !== 0 && (e & er) !== 0 && i !== null && (i.f |= er));
  }
  if (i !== null && (i.parent = r, r !== null && ta(i, r), A !== null && (A.f & J) !== 0 && (e & _t) === 0)) {
    var s = (
      /** @type {Derived} */
      A
    );
    (s.effects ?? (s.effects = [])).push(i);
  }
  return n;
}
function yn() {
  return A !== null && !Ne;
}
function wi(e) {
  const t = et(Yr, null);
  return H(t, V), t.teardown = e, t;
}
function ra(e) {
  ea();
  var t = (
    /** @type {Effect} */
    T.f
  ), r = !A && (t & Le) !== 0 && (t & It) === 0;
  if (r) {
    var n = (
      /** @type {ComponentContext} */
      _e
    );
    (n.e ?? (n.e = [])).push(e);
  } else
    return xi(e);
}
function xi(e) {
  return et($t | rs, e);
}
function na(e) {
  Ot.ensure();
  const t = et(_t | ir, e);
  return (r = {}) => new Promise((n) => {
    r.outro ? Nt(t, () => {
      ue(t), n(void 0);
    }) : (ue(t), n(void 0));
  });
}
function ia(e) {
  return et($t, e);
}
function sa(e) {
  return et(Vt | ir, e);
}
function yi(e, t = 0) {
  return et(Yr | t, e);
}
function ee(e, t = [], r = [], n = []) {
  Hs(n, t, r, (i) => {
    et(Yr, () => e(...i.map(c)));
  });
}
function kn(e, t = 0) {
  var r = et(Pe | t, e);
  return r;
}
function ke(e) {
  return et(Le | ir, e);
}
function ki(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = gt, n = A;
    Bn(!0), Ce(null);
    try {
      t.call(null);
    } finally {
      Bn(r), Ce(n);
    }
  }
}
function En(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    const i = r.ac;
    i !== null && xn(() => {
      i.abort(Wr);
    });
    var n = r.next;
    (r.f & _t) !== 0 ? r.parent = null : ue(r, t), r = n;
  }
}
function aa(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & Le) === 0 && ue(t), t = r;
  }
}
function ue(e, t = !0) {
  var r = !1;
  (t || (e.f & ts) !== 0) && e.nodes !== null && e.nodes.end !== null && (la(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), r = !0), H(e, Fn), En(e, t && !r), gr(e, 0);
  var n = e.nodes && e.nodes.t;
  if (n !== null)
    for (const s of n)
      s.stop();
  ki(e), e.f ^= Fn, e.f |= Fe;
  var i = e.parent;
  i !== null && i.first !== null && Ei(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function la(e, t) {
  for (; e !== null; ) {
    var r = e === t ? null : /* @__PURE__ */ Er(e);
    e.remove(), e = r;
  }
}
function Ei(e) {
  var t = e.parent, r = e.prev, n = e.next;
  r !== null && (r.next = n), n !== null && (n.prev = r), t !== null && (t.first === e && (t.first = n), t.last === e && (t.last = r));
}
function Nt(e, t, r = !0) {
  var n = [];
  Si(e, n, !0);
  var i = () => {
    r && ue(e), t && t();
  }, s = n.length;
  if (s > 0) {
    var o = () => --s || i();
    for (var f of n)
      f.out(o);
  } else
    i();
}
function Si(e, t, r) {
  if ((e.f & re) === 0) {
    e.f ^= re;
    var n = e.nodes && e.nodes.t;
    if (n !== null)
      for (const f of n)
        (f.is_global || r) && t.push(f);
    for (var i = e.first; i !== null; ) {
      var s = i.next;
      if ((i.f & _t) === 0) {
        var o = (i.f & er) !== 0 || // If this is a branch effect without a block effect parent,
        // it means the parent block effect was pruned. In that case,
        // transparency information was transferred to the branch effect.
        (i.f & Le) !== 0 && (e.f & Pe) !== 0;
        Si(i, t, o ? r : !1);
      }
      i = s;
    }
  }
}
function Sn(e) {
  Ci(e, !0);
}
function Ci(e, t) {
  if ((e.f & re) !== 0) {
    e.f ^= re, (e.f & V) === 0 && (H(e, K), Ot.ensure().schedule(e));
    for (var r = e.first; r !== null; ) {
      var n = r.next, i = (r.f & er) !== 0 || (r.f & Le) !== 0;
      Ci(r, i ? t : !1), r = n;
    }
    var s = e.nodes && e.nodes.t;
    if (s !== null)
      for (const o of s)
        (o.is_global || t) && o.in();
  }
}
function Cn(e, t) {
  if (e.nodes)
    for (var r = e.nodes.start, n = e.nodes.end; r !== null; ) {
      var i = r === n ? null : /* @__PURE__ */ Er(r);
      t.append(r), r = i;
    }
}
let Dr = !1, gt = !1;
function Bn(e) {
  gt = e;
}
let A = null, Ne = !1;
function Ce(e) {
  A = e;
}
let T = null;
function Ve(e) {
  T = e;
}
let Se = null;
function Ai(e) {
  A !== null && (Se === null ? Se = [e] : Se.push(e));
}
let fe = null, de = 0, be = null;
function oa(e) {
  be = e;
}
let Mi = 1, kt = 0, Ft = kt;
function Hn(e) {
  Ft = e;
}
function Ti() {
  return ++Mi;
}
function Sr(e) {
  var t = e.f;
  if ((t & K) !== 0)
    return !0;
  if (t & J && (e.f &= ~Lt), (t & Ue) !== 0) {
    for (var r = (
      /** @type {Value[]} */
      e.deps
    ), n = r.length, i = 0; i < n; i++) {
      var s = r[i];
      if (Sr(
        /** @type {Derived} */
        s
      ) && ci(
        /** @type {Derived} */
        s
      ), s.wv > e.wv)
        return !0;
    }
    (t & Ee) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    Re === null && H(e, V);
  }
  return !1;
}
function Pi(e, t, r = !0) {
  var n = e.reactions;
  if (n !== null && !(Se !== null && Xt.call(Se, e)))
    for (var i = 0; i < n.length; i++) {
      var s = n[i];
      (s.f & J) !== 0 ? Pi(
        /** @type {Derived} */
        s,
        t,
        !1
      ) : t === s && (r ? H(s, K) : (s.f & V) !== 0 && H(s, Ue), mn(
        /** @type {Effect} */
        s
      ));
    }
}
function Ri(e) {
  var M;
  var t = fe, r = de, n = be, i = A, s = Se, o = _e, f = Ne, l = Ft, u = e.f;
  fe = /** @type {null | Value[]} */
  null, de = 0, be = null, A = (u & (Le | _t)) === 0 ? e : null, Se = null, tr(e.ctx), Ne = !1, Ft = ++kt, e.ac !== null && (xn(() => {
    e.ac.abort(Wr);
  }), e.ac = null);
  try {
    e.f |= jr;
    var h = (
      /** @type {Function} */
      e.fn
    ), v = h();
    e.f |= It;
    var d = e.deps, m = S?.is_fork;
    if (fe !== null) {
      var b;
      if (m || gr(e, de), d !== null && de > 0)
        for (d.length = de + fe.length, b = 0; b < fe.length; b++)
          d[de + b] = fe[b];
      else
        e.deps = d = fe;
      if (yn() && (e.f & Ee) !== 0)
        for (b = de; b < d.length; b++)
          ((M = d[b]).reactions ?? (M.reactions = [])).push(e);
    } else !m && d !== null && de < d.length && (gr(e, de), d.length = de);
    if (ei() && be !== null && !Ne && d !== null && (e.f & (J | Ue | K)) === 0)
      for (b = 0; b < /** @type {Source[]} */
      be.length; b++)
        Pi(
          be[b],
          /** @type {Effect} */
          e
        );
    if (i !== null && i !== e) {
      if (kt++, i.deps !== null)
        for (let g = 0; g < r; g += 1)
          i.deps[g].rv = kt;
      if (t !== null)
        for (const g of t)
          g.rv = kt;
      be !== null && (n === null ? n = be : n.push(.../** @type {Source[]} */
      be));
    }
    return (e.f & ht) !== 0 && (e.f ^= ht), v;
  } catch (g) {
    return ri(g);
  } finally {
    e.f ^= jr, fe = t, de = r, be = n, A = i, Se = s, tr(o), Ne = f, Ft = l;
  }
}
function fa(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var n = Ki.call(r, e);
    if (n !== -1) {
      var i = r.length - 1;
      i === 0 ? r = t.reactions = null : (r[n] = r[i], r.pop());
    }
  }
  if (r === null && (t.f & J) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (fe === null || !Xt.call(fe, t))) {
    var s = (
      /** @type {Derived} */
      t
    );
    (s.f & Ee) !== 0 && (s.f ^= Ee, s.f &= ~Lt), s.v !== U && _n(s), Ys(s), gr(s, 0);
  }
}
function gr(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var n = t; n < r.length; n++)
      fa(e, r[n]);
}
function nr(e) {
  var t = e.f;
  if ((t & Fe) === 0) {
    H(e, V);
    var r = T, n = Dr;
    T = e, Dr = !0;
    try {
      (t & (Pe | Kn)) !== 0 ? aa(e) : En(e), ki(e);
      var i = Ri(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = Mi;
      var s;
    } finally {
      Dr = n, T = r;
    }
  }
}
async function ua() {
  await Promise.resolve(), Rs();
}
function c(e) {
  var t = e.f, r = (t & J) !== 0;
  if (A !== null && !Ne) {
    var n = T !== null && (T.f & Fe) !== 0;
    if (!n && (Se === null || !Xt.call(Se, e))) {
      var i = A.deps;
      if ((A.f & jr) !== 0)
        e.rv < kt && (e.rv = kt, fe === null && i !== null && i[de] === e ? de++ : fe === null ? fe = [e] : fe.push(e));
      else {
        (A.deps ?? (A.deps = [])).push(e);
        var s = e.reactions;
        s === null ? e.reactions = [A] : Xt.call(s, A) || s.push(A);
      }
    }
  }
  if (gt && Rt.has(e))
    return Rt.get(e);
  if (r) {
    var o = (
      /** @type {Derived} */
      e
    );
    if (gt) {
      var f = o.v;
      return ((o.f & V) === 0 && o.reactions !== null || Fi(o)) && (f = wn(o)), Rt.set(o, f), f;
    }
    var l = (o.f & Ee) === 0 && !Ne && A !== null && (Dr || (A.f & Ee) !== 0), u = (o.f & It) === 0;
    Sr(o) && (l && (o.f |= Ee), ci(o)), l && !u && (di(o), Ni(o));
  }
  if (Re?.has(e))
    return Re.get(e);
  if ((e.f & ht) !== 0)
    throw e.v;
  return e.v;
}
function Ni(e) {
  if (e.f |= Ee, e.deps !== null)
    for (const t of e.deps)
      (t.reactions ?? (t.reactions = [])).push(e), (t.f & J) !== 0 && (t.f & Ee) === 0 && (di(
        /** @type {Derived} */
        t
      ), Ni(
        /** @type {Derived} */
        t
      ));
}
function Fi(e) {
  if (e.v === U) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (Rt.has(t) || (t.f & J) !== 0 && Fi(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function An(e) {
  var t = Ne;
  try {
    return Ne = !0, e();
  } finally {
    Ne = t;
  }
}
const ca = ["touchstart", "touchmove"];
function da(e) {
  return ca.includes(e);
}
const Et = Symbol("events"), Li = /* @__PURE__ */ new Set(), cn = /* @__PURE__ */ new Set();
function le(e, t, r) {
  (t[Et] ?? (t[Et] = {}))[e] = r;
}
function va(e) {
  for (var t = 0; t < e.length; t++)
    Li.add(e[t]);
  for (var r of cn)
    r(e);
}
let zn = null;
function qn(e) {
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), n = e.type, i = e.composedPath?.() || [], s = (
    /** @type {null | Element} */
    i[0] || e.target
  );
  zn = e;
  var o = 0, f = zn === e && e[Et];
  if (f) {
    var l = i.indexOf(f);
    if (l !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e[Et] = t;
      return;
    }
    var u = i.indexOf(t);
    if (u === -1)
      return;
    l <= u && (o = l);
  }
  if (s = /** @type {Element} */
  i[o] || e.target, s !== t) {
    Ji(e, "currentTarget", {
      configurable: !0,
      get() {
        return s || r;
      }
    });
    var h = A, v = T;
    Ce(null), Ve(null);
    try {
      for (var d, m = []; s !== null; ) {
        var b = s.assignedSlot || s.parentNode || /** @type {any} */
        s.host || null;
        try {
          var M = s[Et]?.[n];
          M != null && (!/** @type {any} */
          s.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === s) && M.call(s, e);
        } catch (g) {
          d ? m.push(g) : d = g;
        }
        if (e.cancelBubble || b === t || b === null)
          break;
        s = b;
      }
      if (d) {
        for (let g of m)
          queueMicrotask(() => {
            throw g;
          });
        throw d;
      }
    } finally {
      e[Et] = t, delete e.currentTarget, Ce(h), Ve(v);
    }
  }
}
const ha = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (e) => e
  })
);
function pa(e) {
  return (
    /** @type {string} */
    ha?.createHTML(e) ?? e
  );
}
function Oi(e) {
  var t = Xs("template");
  return t.innerHTML = pa(e.replaceAll("<!>", "<!---->")), t.content;
}
function zr(e, t) {
  var r = (
    /** @type {Effect} */
    T
  );
  r.nodes === null && (r.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function L(e, t) {
  var r = (t & ws) !== 0, n = (t & xs) !== 0, i, s = !e.startsWith("<!>");
  return () => {
    i === void 0 && (i = Oi(s ? e : "<!>" + e), r || (i = /** @type {TemplateNode} */
    /* @__PURE__ */ vt(i)));
    var o = (
      /** @type {TemplateNode} */
      n || pi ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (r) {
      var f = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ vt(o)
      ), l = (
        /** @type {TemplateNode} */
        o.lastChild
      );
      zr(f, l);
    } else
      zr(o, o);
    return o;
  };
}
// @__NO_SIDE_EFFECTS__
function _a(e, t, r = "svg") {
  var n = !e.startsWith("<!>"), i = `<${r}>${n ? e : "<!>" + e}</${r}>`, s;
  return () => {
    if (!s) {
      var o = (
        /** @type {DocumentFragment} */
        Oi(i)
      ), f = (
        /** @type {Element} */
        /* @__PURE__ */ vt(o)
      );
      for (s = document.createDocumentFragment(); /* @__PURE__ */ vt(f); )
        s.appendChild(
          /** @type {TemplateNode} */
          /* @__PURE__ */ vt(f)
        );
    }
    var l = (
      /** @type {TemplateNode} */
      s.cloneNode(!0)
    );
    {
      var u = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ vt(l)
      ), h = (
        /** @type {TemplateNode} */
        l.lastChild
      );
      zr(u, h);
    }
    return l;
  };
}
// @__NO_SIDE_EFFECTS__
function ga(e, t) {
  return /* @__PURE__ */ _a(e, t, "svg");
}
function ma(e = "") {
  {
    var t = pt(e + "");
    return zr(t, t), t;
  }
}
function F(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function W(e, t) {
  var r = t == null ? "" : typeof t == "object" ? `${t}` : t;
  r !== /** @type {any} */
  (e[fr] ?? (e[fr] = e.nodeValue)) && (e[fr] = r, e.nodeValue = `${r}`);
}
function ba(e, t) {
  return wa(e, t);
}
const Pr = /* @__PURE__ */ new Map();
function wa(e, { target: t, anchor: r, props: n = {}, events: i, context: s, intro: o = !0, transformError: f }) {
  Qs();
  var l = void 0, u = na(() => {
    var h = r ?? t.appendChild(pt());
    Os(
      /** @type {TemplateNode} */
      h,
      {
        pending: () => {
        }
      },
      (m) => {
        Xn({});
        var b = (
          /** @type {ComponentContext} */
          _e
        );
        s && (b.c = s), i && (n.$$events = i), l = e(m, n) || {}, $n();
      },
      f
    );
    var v = /* @__PURE__ */ new Set(), d = (m) => {
      for (var b = 0; b < m.length; b++) {
        var M = m[b];
        if (!v.has(M)) {
          v.add(M);
          var g = da(M);
          for (const D of [t, document]) {
            var C = Pr.get(D);
            C === void 0 && (C = /* @__PURE__ */ new Map(), Pr.set(D, C));
            var I = C.get(M);
            I === void 0 ? (D.addEventListener(M, qn, { passive: g }), C.set(M, 1)) : C.set(M, I + 1);
          }
        }
      }
    };
    return d(Gr(Li)), cn.add(d), () => {
      for (var m of v)
        for (const g of [t, document]) {
          var b = (
            /** @type {Map<string, number>} */
            Pr.get(g)
          ), M = (
            /** @type {number} */
            b.get(m)
          );
          --M == 0 ? (g.removeEventListener(m, qn), b.delete(m), b.size === 0 && Pr.delete(g)) : b.set(m, M);
        }
      cn.delete(d), h !== r && h.parentNode?.removeChild(h);
    };
  });
  return dn.set(l, u), l;
}
let dn = /* @__PURE__ */ new WeakMap();
function xa(e, t) {
  const r = dn.get(e);
  return r ? (dn.delete(e), r(t)) : Promise.resolve();
}
var Te, ze, pe, Tt, yr, kr, Vr;
class ya {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, r = !0) {
    /** @type {TemplateNode} */
    ae(this, "anchor");
    /** @type {Map<Batch, Key>} */
    E(this, Te, /* @__PURE__ */ new Map());
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
    E(this, ze, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    E(this, pe, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    E(this, Tt, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    E(this, yr, !0);
    /**
     * @param {Batch} batch
     */
    E(this, kr, (t) => {
      if (a(this, Te).has(t)) {
        var r = (
          /** @type {Key} */
          a(this, Te).get(t)
        ), n = a(this, ze).get(r);
        if (n)
          Sn(n), a(this, Tt).delete(r);
        else {
          var i = a(this, pe).get(r);
          i && (a(this, ze).set(r, i.effect), a(this, pe).delete(r), i.fragment.lastChild.remove(), this.anchor.before(i.fragment), n = i.effect);
        }
        for (const [s, o] of a(this, Te)) {
          if (a(this, Te).delete(s), s === t)
            break;
          const f = a(this, pe).get(o);
          f && (ue(f.effect), a(this, pe).delete(o));
        }
        for (const [s, o] of a(this, ze)) {
          if (s === r || a(this, Tt).has(s)) continue;
          const f = () => {
            if (Array.from(a(this, Te).values()).includes(s)) {
              var u = document.createDocumentFragment();
              Cn(o, u), u.append(pt()), a(this, pe).set(s, { effect: o, fragment: u });
            } else
              ue(o);
            a(this, Tt).delete(s), a(this, ze).delete(s);
          };
          a(this, yr) || !n ? (a(this, Tt).add(s), Nt(o, f, !1)) : f();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    E(this, Vr, (t) => {
      a(this, Te).delete(t);
      const r = Array.from(a(this, Te).values());
      for (const [n, i] of a(this, pe))
        r.includes(n) || (ue(i.effect), a(this, pe).delete(n));
    });
    this.anchor = t, y(this, yr, r);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, r) {
    var n = (
      /** @type {Batch} */
      S
    ), i = mi();
    if (r && !a(this, ze).has(t) && !a(this, pe).has(t))
      if (i) {
        var s = document.createDocumentFragment(), o = pt();
        s.append(o), a(this, pe).set(t, {
          effect: ke(() => r(o)),
          fragment: s
        });
      } else
        a(this, ze).set(
          t,
          ke(() => r(this.anchor))
        );
    if (a(this, Te).set(n, t), i) {
      for (const [f, l] of a(this, ze))
        f === t ? n.unskip_effect(l) : n.skip_effect(l);
      for (const [f, l] of a(this, pe))
        f === t ? n.unskip_effect(l.effect) : n.skip_effect(l.effect);
      n.oncommit(a(this, kr)), n.ondiscard(a(this, Vr));
    } else
      a(this, kr).call(this, n);
  }
}
Te = new WeakMap(), ze = new WeakMap(), pe = new WeakMap(), Tt = new WeakMap(), yr = new WeakMap(), kr = new WeakMap(), Vr = new WeakMap();
function ce(e, t, r = !1) {
  var n = new ya(e), i = r ? er : 0;
  function s(o, f) {
    n.ensure(o, f);
  }
  kn(() => {
    var o = !1;
    t((f, l = 0) => {
      o = !0, s(l, f);
    }), o || s(-1, null);
  }, i);
}
function wt(e, t) {
  return t;
}
function ka(e, t, r) {
  for (var n = [], i = t.length, s, o = t.length, f = 0; f < i; f++) {
    let v = t[f];
    Nt(
      v,
      () => {
        if (s) {
          if (s.pending.delete(v), s.done.add(v), s.pending.size === 0) {
            var d = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            vn(e, Gr(s.done)), d.delete(s), d.size === 0 && (e.outrogroups = null);
          }
        } else
          o -= 1;
      },
      !1
    );
  }
  if (o === 0) {
    var l = n.length === 0 && r !== null;
    if (l) {
      var u = (
        /** @type {Element} */
        r
      ), h = (
        /** @type {Element} */
        u.parentNode
      );
      Zs(h), h.append(u), e.items.clear();
    }
    vn(e, t, !l);
  } else
    s = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ?? (e.outrogroups = /* @__PURE__ */ new Set())).add(s);
}
function vn(e, t, r = !0) {
  var n;
  if (e.pending.size > 0) {
    n = /* @__PURE__ */ new Set();
    for (const o of e.pending.values())
      for (const f of o)
        n.add(
          /** @type {EachItem} */
          e.items.get(f).e
        );
  }
  for (var i = 0; i < t.length; i++) {
    var s = t[i];
    if (n?.has(s)) {
      s.f |= qe;
      const o = document.createDocumentFragment();
      Cn(s, o);
    } else
      ue(t[i], r);
  }
}
var Un;
function xt(e, t, r, n, i, s = null) {
  var o = e, f = /* @__PURE__ */ new Map(), l = (t & Jn) !== 0;
  if (l) {
    var u = (
      /** @type {Element} */
      e
    );
    o = u.appendChild(pt());
  }
  var h = null, v = /* @__PURE__ */ Vs(() => {
    var D = r();
    return pn(D) ? D : D == null ? [] : Gr(D);
  }), d, m = /* @__PURE__ */ new Map(), b = !0;
  function M(D) {
    (I.effect.f & Fe) === 0 && (I.pending.delete(D), I.fallback = h, Ea(I, d, o, t, n), h !== null && (d.length === 0 ? (h.f & qe) === 0 ? Sn(h) : (h.f ^= qe, cr(h, null, o)) : Nt(h, () => {
      h = null;
    })));
  }
  function g(D) {
    I.pending.delete(D);
  }
  var C = kn(() => {
    d = /** @type {V[]} */
    c(v);
    for (var D = d.length, Z = /* @__PURE__ */ new Set(), X = (
      /** @type {Batch} */
      S
    ), tt = mi(), $ = 0; $ < D; $ += 1) {
      var Ge = d[$], rt = n(Ge, $), G = b ? null : f.get(rt);
      G ? (G.v && rr(G.v, Ge), G.i && rr(G.i, $), tt && X.unskip_effect(G.e)) : (G = Sa(
        f,
        b ? o : Un ?? (Un = pt()),
        Ge,
        rt,
        $,
        i,
        t,
        r
      ), b || (G.e.f |= qe), f.set(rt, G)), Z.add(rt);
    }
    if (D === 0 && s && !h && (b ? h = ke(() => s(o)) : (h = ke(() => s(Un ?? (Un = pt()))), h.f |= qe)), D > Z.size && ls(), !b)
      if (m.set(X, Z), tt) {
        for (const [sr, Cr] of f)
          Z.has(sr) || X.skip_effect(Cr.e);
        X.oncommit(M), X.ondiscard(g);
      } else
        M(X);
    c(v);
  }), I = { effect: C, items: f, pending: m, outrogroups: null, fallback: h };
  b = !1;
}
function or(e) {
  for (; e !== null && (e.f & Le) === 0; )
    e = e.next;
  return e;
}
function Ea(e, t, r, n, i) {
  var s = (n & ms) !== 0, o = t.length, f = e.items, l = or(e.effect.first), u, h = null, v, d = [], m = [], b, M, g, C;
  if (s)
    for (C = 0; C < o; C += 1)
      b = t[C], M = i(b, C), g = /** @type {EachItem} */
      f.get(M).e, (g.f & qe) === 0 && (g.nodes?.a?.measure(), (v ?? (v = /* @__PURE__ */ new Set())).add(g));
  for (C = 0; C < o; C += 1) {
    if (b = t[C], M = i(b, C), g = /** @type {EachItem} */
    f.get(M).e, e.outrogroups !== null)
      for (const G of e.outrogroups)
        G.pending.delete(g), G.done.delete(g);
    if ((g.f & re) !== 0 && (Sn(g), s && (g.nodes?.a?.unfix(), (v ?? (v = /* @__PURE__ */ new Set())).delete(g))), (g.f & qe) !== 0)
      if (g.f ^= qe, g === l)
        cr(g, null, r);
      else {
        var I = h ? h.next : l;
        g === e.effect.last && (e.effect.last = g.prev), g.prev && (g.prev.next = g.next), g.next && (g.next.prev = g.prev), ot(e, h, g), ot(e, g, I), cr(g, I, r), h = g, d = [], m = [], l = or(h.next);
        continue;
      }
    if (g !== l) {
      if (u !== void 0 && u.has(g)) {
        if (d.length < m.length) {
          var D = m[0], Z;
          h = D.prev;
          var X = d[0], tt = d[d.length - 1];
          for (Z = 0; Z < d.length; Z += 1)
            cr(d[Z], D, r);
          for (Z = 0; Z < m.length; Z += 1)
            u.delete(m[Z]);
          ot(e, X.prev, tt.next), ot(e, h, X), ot(e, tt, D), l = D, h = tt, C -= 1, d = [], m = [];
        } else
          u.delete(g), cr(g, l, r), ot(e, g.prev, g.next), ot(e, g, h === null ? e.effect.first : h.next), ot(e, h, g), h = g;
        continue;
      }
      for (d = [], m = []; l !== null && l !== g; )
        (u ?? (u = /* @__PURE__ */ new Set())).add(l), m.push(l), l = or(l.next);
      if (l === null)
        continue;
    }
    (g.f & qe) === 0 && d.push(g), h = g, l = or(g.next);
  }
  if (e.outrogroups !== null) {
    for (const G of e.outrogroups)
      G.pending.size === 0 && (vn(e, Gr(G.done)), e.outrogroups?.delete(G));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (l !== null || u !== void 0) {
    var $ = [];
    if (u !== void 0)
      for (g of u)
        (g.f & re) === 0 && $.push(g);
    for (; l !== null; )
      (l.f & re) === 0 && l !== e.fallback && $.push(l), l = or(l.next);
    var Ge = $.length;
    if (Ge > 0) {
      var rt = (n & Jn) !== 0 && o === 0 ? r : null;
      if (s) {
        for (C = 0; C < Ge; C += 1)
          $[C].nodes?.a?.measure();
        for (C = 0; C < Ge; C += 1)
          $[C].nodes?.a?.fix();
      }
      ka(e, $, rt);
    }
  }
  s && Pt(() => {
    if (v !== void 0)
      for (g of v)
        g.nodes?.a?.apply();
  });
}
function Sa(e, t, r, n, i, s, o, f) {
  var l = (o & _s) !== 0 ? (o & bs) === 0 ? /* @__PURE__ */ Ws(r, !1, !1) : Dt(r) : null, u = (o & gs) !== 0 ? Dt(i) : null;
  return {
    v: l,
    i: u,
    e: ke(() => (s(t, l ?? r, u ?? i, f), () => {
      e.delete(n);
    }))
  };
}
function cr(e, t, r) {
  if (e.nodes)
    for (var n = e.nodes.start, i = e.nodes.end, s = t && (t.f & qe) === 0 ? (
      /** @type {EffectNodes} */
      t.nodes.start
    ) : r; n !== null; ) {
      var o = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Er(n)
      );
      if (s.before(n), n === i)
        return;
      n = o;
    }
}
function ot(e, t, r) {
  t === null ? e.effect.first = r : t.next = r, r === null ? e.effect.last = t : r.prev = t;
}
function Ca(e, t, r) {
  var n = e == null ? "" : "" + e;
  return n === "" ? null : n;
}
function Vn(e, t, r, n, i, s) {
  var o = (
    /** @type {any} */
    e[tn]
  );
  if (o !== r || o === void 0) {
    var f = Ca(r);
    f == null ? e.removeAttribute("class") : e.className = f, e[tn] = r;
  }
  return s;
}
function Di(e, t, r = !1) {
  if (e.multiple) {
    if (t == null)
      return;
    if (!pn(t))
      return Es();
    for (var n of e.options)
      n.selected = t.includes(_r(n));
    return;
  }
  for (n of e.options) {
    var i = _r(n);
    if (Js(i, t)) {
      n.selected = !0;
      return;
    }
  }
  (!r || t !== void 0) && (e.selectedIndex = -1);
}
function Aa(e) {
  var t = new MutationObserver(() => {
    Di(e, e.__value);
  });
  t.observe(e, {
    // Listen to option element changes
    childList: !0,
    subtree: !0,
    // because of <optgroup>
    // Listen to option element value attribute changes
    // (doesn't get notified of select value changes,
    // because that property is not reflected as an attribute)
    attributes: !0,
    attributeFilter: ["value"]
  }), wi(() => {
    t.disconnect();
  });
}
function Ma(e, t, r = t) {
  var n = /* @__PURE__ */ new WeakSet(), i = !0;
  bi(e, "change", (s) => {
    var o = s ? "[selected]" : ":checked", f;
    if (e.multiple)
      f = [].map.call(e.querySelectorAll(o), _r);
    else {
      var l = e.querySelector(o) ?? // will fall back to first non-disabled option if no option is selected
      e.querySelector("option:not([disabled])");
      f = l && _r(l);
    }
    r(f), e.__value = f, S !== null && n.add(S);
  }), ia(() => {
    var s = t();
    if (e === document.activeElement) {
      var o = (
        /** @type {Batch} */
        S
      );
      if (n.has(o))
        return;
    }
    if (Di(e, s, i), i && s === void 0) {
      var f = e.querySelector(":checked");
      f !== null && (s = _r(f), r(s));
    }
    e.__value = s, i = !1;
  }), Aa(e);
}
function _r(e) {
  return "__value" in e ? e.__value : e.value;
}
function Gn(e, t, r = t) {
  var n = /* @__PURE__ */ new WeakSet();
  bi(e, "input", async (i) => {
    var s = i ? e.defaultValue : e.value;
    if (s = Xr(e) ? $r(s) : s, r(s), S !== null && n.add(S), await ua(), s !== (s = t())) {
      var o = e.selectionStart, f = e.selectionEnd, l = e.value.length;
      if (e.value = s ?? "", f !== null) {
        var u = e.value.length;
        o === f && f === l && u > l ? (e.selectionStart = u, e.selectionEnd = u) : (e.selectionStart = o, e.selectionEnd = Math.min(f, u));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  An(t) == null && e.value && (r(Xr(e) ? $r(e.value) : e.value), S !== null && n.add(S)), yi(() => {
    var i = t();
    if (e === document.activeElement) {
      var s = (
        /** @type {Batch} */
        S
      );
      if (n.has(s))
        return;
    }
    Xr(e) && i === $r(e.value) || e.type === "date" && !i && !e.value || i !== e.value && (e.value = i ?? "");
  });
}
function Xr(e) {
  var t = e.type;
  return t === "number" || t === "range";
}
function $r(e) {
  return e === "" ? null : +e;
}
function Ta(e) {
  _e === null && ss(), ra(() => {
    const t = An(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
const Pa = "5";
var Yn;
typeof window < "u" && ((Yn = window.__svelte ?? (window.__svelte = {})).v ?? (Yn.v = /* @__PURE__ */ new Set())).add(Pa);
var Ra = /* @__PURE__ */ L('<div class="mb-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 flex items-start gap-2"><svg class="w-5 h-5 flex-shrink-0 mt-0.5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span class="flex-1"> </span> <button class="ml-auto text-red-400 hover:text-red-600">&times;</button></div>'), Na = /* @__PURE__ */ L('<div class="mb-4 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700 flex items-center gap-2"><svg class="w-5 h-5 flex-shrink-0 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span> </span> <button class="ml-auto text-green-400 hover:text-green-600">&times;</button></div>'), Fa = /* @__PURE__ */ L('<p class="text-sm text-gray-400 italic">No profiles assigned</p>'), La = /* @__PURE__ */ L('<span> <button class="ml-0.5 opacity-60 hover:opacity-100" title="Revoke profile"><svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></span>'), Oa = /* @__PURE__ */ L('<div class="flex flex-wrap gap-2 mb-4"></div>'), Da = /* @__PURE__ */ L('<span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-700"> <button class="ml-0.5 opacity-60 hover:opacity-100" title="Revoke permission"><svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></span>'), Ia = /* @__PURE__ */ L('<h3 class="text-sm font-semibold text-gray-700 mb-2 mt-4">Direct Permissions</h3> <div class="flex flex-wrap gap-2"></div>', 1), ja = /* @__PURE__ */ L('<div class="flex items-center gap-2 text-gray-400 text-sm"><div class="w-4 h-4 border-2 border-gray-300 border-t-transparent rounded-full animate-spin"></div> Loading...</div>'), Ba = /* @__PURE__ */ L('<p class="text-sm text-gray-400">No operations</p>'), Ha = /* @__PURE__ */ L('<code class="px-2 py-0.5 rounded text-xs bg-gray-100 text-gray-600"> </code>'), za = /* @__PURE__ */ L('<div class="flex flex-wrap gap-1.5"></div>'), qa = /* @__PURE__ */ L('<button class="text-sm text-indigo-600 hover:text-indigo-800 mb-4 inline-flex items-center gap-1"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg> Back to users</button> <div class="space-y-5"><div class="rounded-lg border border-gray-200 bg-white p-5"><div class="flex items-center justify-between mb-3"><div><h2 class="text-xl font-bold text-gray-900"> </h2> <code class="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded"> </code></div> <div class="flex gap-2"><button class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-900 text-white text-sm font-medium hover:bg-black transition-colors"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg> Assign Role</button> <button class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gray-300 text-gray-700 text-sm font-medium hover:bg-gray-50 transition-colors"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"></path></svg> Grant Permission</button></div></div> <h3 class="text-sm font-semibold text-gray-700 mb-2">Assigned Profiles</h3> <!> <!></div> <div class="rounded-lg border border-gray-200 bg-white p-5"><h3 class="text-base font-semibold text-gray-900 mb-3"> </h3> <!></div></div>', 1), Ua = /* @__PURE__ */ L("<option> </option>"), Va = /* @__PURE__ */ L('<code class="px-1.5 py-0.5 text-xs bg-white border rounded text-gray-600"> </code>'), Ga = /* @__PURE__ */ L('<div class="mb-4 p-3 bg-gray-50 rounded-lg border border-gray-200"><h4 class="text-xs font-semibold text-gray-600 mb-1"> </h4> <div class="flex flex-wrap gap-1"></div></div>'), Ya = /* @__PURE__ */ L('<div class="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>'), Wa = /* @__PURE__ */ L('<button class="text-sm text-indigo-600 hover:text-indigo-800 mb-4 inline-flex items-center gap-1"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg> Back to user detail</button> <div class="rounded-lg border border-gray-200 bg-white p-6 max-w-lg"><h2 class="text-xl font-semibold text-gray-900 mb-1">Assign Profile</h2> <p class="text-sm text-gray-500 mb-4">Assign a role to <strong> </strong></p> <div class="mb-4"><label for="profile-select" class="block text-sm font-medium text-gray-700 mb-1">Profile</label> <select id="profile-select" class="w-full rounded-lg border border-gray-300 px-3.5 py-2.5 text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none"><option>Select a profile...</option><!></select></div> <!> <div class="flex gap-3"><button class="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-900 text-white text-sm font-medium hover:bg-black disabled:opacity-40 disabled:cursor-not-allowed transition-colors"><!> Assign Directly</button> <button class="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-indigo-300 text-indigo-700 text-sm font-medium hover:bg-indigo-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors">Propose (Governance Vote)</button></div></div>', 1), Ka = /* @__PURE__ */ L('<div class="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>'), Ja = /* @__PURE__ */ L('<button class="text-sm text-indigo-600 hover:text-indigo-800 mb-4 inline-flex items-center gap-1"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg> Back to user detail</button> <div class="rounded-lg border border-gray-200 bg-white p-6 max-w-lg"><h2 class="text-xl font-semibold text-gray-900 mb-1">Grant Permission</h2> <p class="text-sm text-gray-500 mb-4">Grant a fine-grained permission to <strong> </strong></p> <div class="mb-4"><label for="perm-input" class="block text-sm font-medium text-gray-700 mb-1">Permission name</label> <input id="perm-input" type="text" placeholder="e.g. role.assign, transfer.create" class="w-full rounded-lg border border-gray-300 px-3.5 py-2.5 text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none"/> <p class="text-xs text-gray-400 mt-1">Enter an operation name (e.g. role.assign, permission.view)</p></div> <button class="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-900 text-white text-sm font-medium hover:bg-black disabled:opacity-40 disabled:cursor-not-allowed transition-colors"><!> Grant Permission</button></div>', 1), Qa = /* @__PURE__ */ L('<div class="w-3.5 h-3.5 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div> Loading...', 1), Za = /* @__PURE__ */ ga('<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg> Refresh', 1), Xa = /* @__PURE__ */ L('<div class="flex items-center justify-center py-12"><svg class="animate-spin h-7 w-7 text-gray-400" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path></svg> <span class="ml-3 text-gray-500 text-sm">Loading users...</span></div>'), $a = /* @__PURE__ */ L('<div class="text-center py-12"><svg class="mx-auto h-10 w-10 text-gray-300 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg> <p class="text-gray-500 text-sm"> </p></div>'), el = /* @__PURE__ */ L("<span> </span>"), tl = /* @__PURE__ */ L('<span class="text-xs text-gray-400 italic">no profiles</span>'), rl = /* @__PURE__ */ L('<div class="px-5 py-3 hover:bg-gray-50 transition-colors flex items-center justify-between"><div class="flex-1 min-w-0"><div class="flex items-center gap-2 mb-1"><span class="text-sm font-medium text-gray-900 truncate"> </span> <code class="text-xs text-gray-400"> </code></div> <div class="flex flex-wrap gap-1.5"><!> <!></div></div> <button class="ml-3 p-2 rounded-lg border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 transition-colors" title="View user details"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></button></div>'), nl = /* @__PURE__ */ L('<div class="divide-y divide-gray-100"></div>'), il = /* @__PURE__ */ L('<div class="rounded-lg border border-gray-200 bg-white"><div class="flex items-center justify-between px-5 py-3 border-b border-gray-200"><div class="flex-1 max-w-sm"><input type="text" placeholder="Search by principal, nickname, or profile..." class="w-full rounded-lg border border-gray-300 px-3.5 py-2 text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none"/></div> <button class="ml-3 inline-flex items-center gap-1.5 px-3 py-1.5 text-sm rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-50 disabled:opacity-50"><!></button></div> <!> <div class="px-5 py-3 border-t border-gray-200 text-xs text-gray-400"> <!></div></div>'), sl = /* @__PURE__ */ L('<div class="w-full px-6 pt-8 max-w-none"><div class="mb-6"><h1 class="text-3xl font-bold text-gray-900 mb-1">Role Manager</h1> <p class="text-gray-500 text-sm">Assign and manage user roles and permissions.</p></div> <!> <!> <!></div>');
function al(e, t) {
  Xn(t, !0);
  let r = /* @__PURE__ */ B($e([])), n = /* @__PURE__ */ B($e([])), i = /* @__PURE__ */ B(!0), s = /* @__PURE__ */ B(""), o = /* @__PURE__ */ B(""), f = /* @__PURE__ */ B("users"), l = /* @__PURE__ */ B(""), u = /* @__PURE__ */ B(null), h = /* @__PURE__ */ B($e([])), v = /* @__PURE__ */ B($e([])), d = /* @__PURE__ */ B(!1), m = /* @__PURE__ */ B(""), b = /* @__PURE__ */ B(!1), M = /* @__PURE__ */ B(""), g = /* @__PURE__ */ B(!1), C = /* @__PURE__ */ Us(() => c(l).trim() ? c(r).filter((p) => p.principal.toLowerCase().includes(c(l).toLowerCase()) || p.nickname.toLowerCase().includes(c(l).toLowerCase()) || p.profiles.some((x) => x.toLowerCase().includes(c(l).toLowerCase()))) : c(r));
  async function I(p, x = {}) {
    const q = await t.ctx.callSync(p, x);
    return typeof q == "string" ? JSON.parse(q) : q;
  }
  async function D() {
    _(i, !0), _(s, "");
    try {
      const p = await I("list_users_with_profiles");
      p?.success ? _(r, p.data?.users ?? [], !0) : _(s, p?.error || "Failed to load users", !0);
    } catch (p) {
      _(s, p?.message || String(p), !0);
    } finally {
      _(i, !1);
    }
  }
  async function Z() {
    try {
      const p = await I("get_available_profiles");
      p?.success && _(n, p.data?.profiles ?? [], !0);
    } catch (p) {
      console.error("Failed to load profiles:", p);
    }
  }
  async function X(p) {
    _(u, p, !0), _(f, "detail"), _(d, !0), _(h, [], !0), _(v, [], !0);
    try {
      const x = await I("get_user_effective_permissions", { target_principal: p.principal });
      x?.success && (_(h, x.data?.effective_operations ?? [], !0), _(v, x.data?.direct_permissions ?? [], !0), _(u, { ...p, profiles: x.data?.profiles ?? p.profiles }, !0));
    } catch (x) {
      _(s, x?.message || String(x), !0);
    } finally {
      _(d, !1);
    }
  }
  async function tt() {
    if (!(!c(u) || !c(m))) {
      _(b, !0), _(s, ""), _(o, "");
      try {
        const p = await I("assign_profile", {
          target_principal: c(u).principal,
          profile_name: c(m)
        });
        p?.success ? (_(o, p.data?.message || "Profile assigned", !0), _(m, ""), _(f, "detail"), await X({
          ...c(u),
          profiles: p.data?.profiles ?? c(u).profiles
        }), await D()) : p?.governance_blocked ? _(s, p.error + ' Use "Propose" to create a governance proposal.') : _(s, p?.error || "Failed to assign profile", !0);
      } catch (p) {
        _(s, p?.message || String(p), !0);
      } finally {
        _(b, !1);
      }
    }
  }
  async function $(p) {
    if (c(u)) {
      _(s, ""), _(o, "");
      try {
        const x = await I("revoke_profile", {
          target_principal: c(u).principal,
          profile_name: p
        });
        x?.success ? (_(o, x.data?.message || "Profile revoked", !0), await X({
          ...c(u),
          profiles: x.data?.profiles ?? c(u).profiles
        }), await D()) : _(s, x?.error || "Failed to revoke profile", !0);
      } catch (x) {
        _(s, x?.message || String(x), !0);
      }
    }
  }
  async function Ge() {
    if (!(!c(u) || !c(M).trim())) {
      _(g, !0), _(s, ""), _(o, "");
      try {
        const p = await I("grant_permission", {
          target_principal: c(u).principal,
          permission_name: c(M).trim()
        });
        p?.success ? (_(o, p.data?.message || "Permission granted", !0), _(M, ""), _(f, "detail"), await X(c(u))) : _(s, p?.error || "Failed to grant permission", !0);
      } catch (p) {
        _(s, p?.message || String(p), !0);
      } finally {
        _(g, !1);
      }
    }
  }
  async function rt(p) {
    if (c(u)) {
      _(s, ""), _(o, "");
      try {
        const x = await I("revoke_permission", {
          target_principal: c(u).principal,
          permission_name: p
        });
        x?.success ? (_(o, x.data?.message || "Permission revoked", !0), await X(c(u))) : _(s, x?.error || "Failed to revoke permission", !0);
      } catch (x) {
        _(s, x?.message || String(x), !0);
      }
    }
  }
  async function G() {
    if (!(!c(u) || !c(m))) {
      _(b, !0), _(s, ""), _(o, "");
      try {
        const p = await I("propose_role_assignment", {
          target_principal: c(u).principal,
          profile_name: c(m)
        });
        p?.success ? (_(o, p.data?.message || "Governance proposal created", !0), _(m, ""), _(f, "detail")) : _(s, p?.error || "Failed to create proposal", !0);
      } catch (p) {
        _(s, p?.message || String(p), !0);
      } finally {
        _(b, !1);
      }
    }
  }
  function sr(p) {
    return !p || p.length <= 16 ? p || "unknown" : p.slice(0, 8) + "..." + p.slice(-6);
  }
  function Cr(p) {
    return {
      admin: "bg-red-100 text-red-700",
      member: "bg-blue-100 text-blue-700",
      observer: "bg-gray-100 text-gray-600",
      legislator: "bg-purple-100 text-purple-700",
      executor: "bg-amber-100 text-amber-700",
      judge: "bg-indigo-100 text-indigo-700",
      enforcer: "bg-orange-100 text-orange-700",
      treasurer: "bg-emerald-100 text-emerald-700",
      merchant: "bg-cyan-100 text-cyan-700",
      operator: "bg-teal-100 text-teal-700",
      developer: "bg-violet-100 text-violet-700",
      user_manager: "bg-pink-100 text-pink-700"
    }[p] || "bg-gray-100 text-gray-700";
  }
  Ta(() => {
    D(), Z();
  });
  var Mn = sl(), Tn = k(w(Mn), 2);
  {
    var Ii = (p) => {
      var x = Ra(), q = k(w(x), 2), ge = w(q), ne = k(q, 2);
      ee(() => W(ge, c(s))), le("click", ne, () => _(s, "")), F(p, x);
    };
    ce(Tn, (p) => {
      c(s) && p(Ii);
    });
  }
  var Pn = k(Tn, 2);
  {
    var ji = (p) => {
      var x = Na(), q = k(w(x), 2), ge = w(q), ne = k(q, 2);
      ee(() => W(ge, c(o))), le("click", ne, () => _(o, "")), F(p, x);
    };
    ce(Pn, (p) => {
      c(o) && p(ji);
    });
  }
  var Bi = k(Pn, 2);
  {
    var Hi = (p) => {
      var x = qa(), q = Tr(x), ge = k(q, 2), ne = w(ge), Oe = w(ne), nt = w(Oe), De = w(nt), it = w(De), me = k(De, 2), mt = w(me), st = k(nt, 2), ie = w(st), Ye = k(ie, 2), Ie = k(Oe, 4);
      {
        var ar = (j) => {
          var Q = Fa();
          F(j, Q);
        }, lr = (j) => {
          var Q = Oa();
          xt(Q, 21, () => c(u).profiles, wt, (bt, je) => {
            var Ae = La(), Ke = w(Ae), Ht = k(Ke);
            ee(
              (Me) => {
                Vn(Ae, 1, `inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${Me ?? ""}`), W(Ke, `${c(je) ?? ""} `);
              },
              [() => Cr(c(je))]
            ), le("click", Ht, () => $(c(je))), F(bt, Ae);
          }), F(j, Q);
        };
        ce(Ie, (j) => {
          c(u).profiles.length === 0 ? j(ar) : j(lr, -1);
        });
      }
      var O = k(Ie, 2);
      {
        var R = (j) => {
          var Q = Ia(), bt = k(Tr(Q), 2);
          xt(bt, 21, () => c(v), wt, (je, Ae) => {
            var Ke = Da(), Ht = w(Ke), Me = k(Ht);
            ee(() => W(Ht, `${c(Ae) ?? ""} `)), le("click", Me, () => rt(c(Ae))), F(je, Ke);
          }), F(j, Q);
        };
        ce(O, (j) => {
          c(v).length > 0 && j(R);
        });
      }
      var se = k(ne, 2), Y = w(se), at = w(Y), We = k(Y, 2);
      {
        var lt = (j) => {
          var Q = ja();
          F(j, Q);
        }, jt = (j) => {
          var Q = Ba();
          F(j, Q);
        }, Bt = (j) => {
          var Q = za();
          xt(Q, 21, () => c(h), wt, (bt, je) => {
            var Ae = Ha(), Ke = w(Ae);
            ee(() => W(Ke, c(je))), F(bt, Ae);
          }), F(j, Q);
        };
        ce(We, (j) => {
          c(d) ? j(lt) : c(h).length === 0 ? j(jt, 1) : j(Bt, -1);
        });
      }
      ee(() => {
        W(it, c(u).nickname || "Unnamed User"), W(mt, c(u).principal), W(at, `Effective Operations (${c(h).length ?? ""})`);
      }), le("click", q, () => {
        _(f, "users"), _(u, null), _(o, "");
      }), le("click", ie, () => {
        _(f, "assign"), _(m, "");
      }), le("click", Ye, () => {
        _(f, "permission"), _(M, "");
      }), F(p, x);
    }, zi = (p) => {
      var x = Wa(), q = Tr(x), ge = k(q, 2), ne = k(w(ge), 2), Oe = k(w(ne)), nt = w(Oe), De = k(ne, 2), it = k(w(De), 2), me = w(it);
      me.value = me.__value = "";
      var mt = k(me);
      xt(mt, 17, () => c(n).filter((R) => !c(u)?.profiles.includes(R.name)), wt, (R, se) => {
        var Y = Ua(), at = w(Y), We = {};
        ee(() => {
          W(at, c(se).name), We !== (We = c(se).name) && (Y.value = (Y.__value = c(se).name) ?? "");
        }), F(R, Y);
      });
      var st = k(De, 2);
      {
        var ie = (R) => {
          var se = Ga(), Y = w(se), at = w(Y), We = k(Y, 2);
          xt(We, 21, () => c(n).find((lt) => lt.name === c(m))?.allowed_to ?? [], wt, (lt, jt) => {
            var Bt = Va(), j = w(Bt);
            ee(() => W(j, c(jt))), F(lt, Bt);
          }), ee(() => W(at, `Operations granted by "${c(m) ?? ""}":`)), F(R, se);
        };
        ce(st, (R) => {
          c(m) && R(ie);
        });
      }
      var Ye = k(st, 2), Ie = w(Ye), ar = w(Ie);
      {
        var lr = (R) => {
          var se = Ya();
          F(R, se);
        };
        ce(ar, (R) => {
          c(b) && R(lr);
        });
      }
      var O = k(Ie, 2);
      ee(
        (R) => {
          W(nt, R), Ie.disabled = c(b) || !c(m), O.disabled = c(b) || !c(m);
        },
        [
          () => c(u).nickname || sr(c(u).principal)
        ]
      ), le("click", q, () => {
        _(f, "detail");
      }), Ma(it, () => c(m), (R) => _(m, R)), le("click", Ie, tt), le("click", O, G), F(p, x);
    }, qi = (p) => {
      var x = Ja(), q = Tr(x), ge = k(q, 2), ne = k(w(ge), 2), Oe = k(w(ne)), nt = w(Oe), De = k(ne, 2), it = k(w(De), 2), me = k(De, 2), mt = w(me);
      {
        var st = (ie) => {
          var Ye = Ka();
          F(ie, Ye);
        };
        ce(mt, (ie) => {
          c(g) && ie(st);
        });
      }
      ee(
        (ie, Ye) => {
          W(nt, ie), me.disabled = Ye;
        },
        [
          () => c(u).nickname || sr(c(u).principal),
          () => c(g) || !c(M).trim()
        ]
      ), le("click", q, () => {
        _(f, "detail");
      }), Gn(it, () => c(M), (ie) => _(M, ie)), le("click", me, Ge), F(p, x);
    }, Ui = (p) => {
      var x = il(), q = w(x), ge = w(q), ne = w(ge), Oe = k(ge, 2), nt = w(Oe);
      {
        var De = (O) => {
          var R = Qa();
          F(O, R);
        }, it = (O) => {
          var R = Za();
          F(O, R);
        };
        ce(nt, (O) => {
          c(i) ? O(De) : O(it, -1);
        });
      }
      var me = k(q, 2);
      {
        var mt = (O) => {
          var R = Xa();
          F(O, R);
        }, st = (O) => {
          var R = $a(), se = k(w(R), 2), Y = w(se);
          ee(() => W(Y, c(l) ? "No users match your search" : "No users found")), F(O, R);
        }, ie = (O) => {
          var R = nl();
          xt(R, 21, () => c(C), wt, (se, Y) => {
            var at = rl(), We = w(at), lt = w(We), jt = w(lt), Bt = w(jt), j = k(jt, 2), Q = w(j), bt = k(lt, 2), je = w(bt);
            xt(je, 17, () => c(Y).profiles, wt, (Me, Ar) => {
              var Kr = el(), Vi = w(Kr);
              ee(
                (Gi) => {
                  Vn(Kr, 1, `px-2 py-0.5 rounded-full text-xs font-semibold ${Gi ?? ""}`), W(Vi, c(Ar));
                },
                [() => Cr(c(Ar))]
              ), F(Me, Kr);
            });
            var Ae = k(je, 2);
            {
              var Ke = (Me) => {
                var Ar = tl();
                F(Me, Ar);
              };
              ce(Ae, (Me) => {
                c(Y).profiles.length === 0 && Me(Ke);
              });
            }
            var Ht = k(We, 2);
            ee(
              (Me) => {
                W(Bt, c(Y).nickname || "Unnamed"), W(Q, Me);
              },
              [() => sr(c(Y).principal)]
            ), le("click", Ht, () => X(c(Y))), F(se, at);
          }), F(O, R);
        };
        ce(me, (O) => {
          c(i) ? O(mt) : c(C).length === 0 ? O(st, 1) : O(ie, -1);
        });
      }
      var Ye = k(me, 2), Ie = w(Ye), ar = k(Ie);
      {
        var lr = (O) => {
          var R = ma(" (filtered)");
          F(O, R);
        };
        ce(ar, (O) => {
          c(l) && O(lr);
        });
      }
      ee(() => {
        Oe.disabled = c(i), W(Ie, `${c(C).length ?? ""} user${c(C).length !== 1 ? "s" : ""} `);
      }), Gn(ne, () => c(l), (O) => _(l, O)), le("click", Oe, D), F(p, x);
    };
    ce(Bi, (p) => {
      c(f) === "detail" && c(u) ? p(Hi) : c(f) === "assign" && c(u) ? p(zi, 1) : c(f) === "permission" && c(u) ? p(qi, 2) : p(Ui, -1);
    });
  }
  F(e, Mn), $n();
}
va(["click"]);
function fl(e, t) {
  const r = ba(al, { target: e, props: { ctx: t } });
  return {
    unmount() {
      try {
        xa(r);
      } catch {
      }
    }
  };
}
export {
  fl as default
};
