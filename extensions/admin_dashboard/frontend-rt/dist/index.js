var fa = Object.defineProperty;
var ms = (e) => {
  throw TypeError(e);
};
var da = (e, t, r) => t in e ? fa(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var Ze = (e, t, r) => da(e, typeof t != "symbol" ? t + "" : t, r), ki = (e, t, r) => t.has(e) || ms("Cannot " + r);
var v = (e, t, r) => (ki(e, t, "read from private field"), r ? r.call(e) : t.get(e)), Q = (e, t, r) => t.has(e) ? ms("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), W = (e, t, r, n) => (ki(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r), ce = (e, t, r) => (ki(e, t, "access private method"), r);
var Gi = Array.isArray, va = Array.prototype.indexOf, Fr = Array.prototype.includes, ci = Array.from, ga = Object.defineProperty, Ln = Object.getOwnPropertyDescriptor, pa = Object.getOwnPropertyDescriptors, ha = Object.prototype, _a = Array.prototype, Ps = Object.getPrototypeOf, ys = Object.isExtensible;
const ba = () => {
};
function xa(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function js() {
  var e, t, r = new Promise((n, i) => {
    e = n, t = i;
  });
  return { promise: r, resolve: e, reject: t };
}
function ws(e, t) {
  if (Array.isArray(e))
    return e;
  if (!(Symbol.iterator in e))
    return Array.from(e);
  const r = [];
  for (const n of e)
    if (r.push(n), r.length === t) break;
  return r;
}
const je = 2, pn = 4, fi = 8, Fs = 1 << 24, Dt = 16, It = 32, kr = 64, Di = 128, yt = 512, Le = 1024, Pe = 2048, Yt = 4096, $e = 8192, Nt = 16384, Wr = 32768, Ri = 1 << 25, hn = 65536, ni = 1 << 17, ma = 1 << 18, mn = 1 << 19, ya = 1 << 20, tr = 1 << 25, Yr = 65536, ii = 1 << 21, an = 1 << 22, wr = 1 << 23, ln = Symbol("$state"), wa = Symbol(""), Kn = Symbol("attributes"), Li = Symbol("class"), ka = Symbol("style"), Mn = Symbol("text"), Qn = Symbol("form reset"), di = new class extends Error {
  constructor() {
    super(...arguments);
    Ze(this, "name", "StaleReactionError");
    Ze(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
function Ea() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Aa(e, t, r) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function Ca(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Sa() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Ma(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Ta() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Da() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Ra() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function La() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Na() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
const Ia = 1, Oa = 2, Ba = 16, Pa = 1, ja = 2, Re = Symbol("uninitialized"), Us = "http://www.w3.org/1999/xhtml", Fa = "http://www.w3.org/2000/svg", Ua = "http://www.w3.org/1998/Math/MathML";
function Ha() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function Ja() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function Va() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function Hs(e) {
  return e === this.v;
}
function Ya(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Js(e) {
  return !Ya(e, this.v);
}
let ft = null;
function _n(e) {
  ft = e;
}
function vi(e, t = !1, r) {
  ft = {
    p: ft,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    r: (
      /** @type {Effect} */
      se
    ),
    l: null
  };
}
function gi(e) {
  var t = (
    /** @type {ComponentContext} */
    ft
  ), r = t.e;
  if (r !== null) {
    t.e = null;
    for (var n of r)
      fo(n);
  }
  return t.i = !0, ft = t.p, /** @type {T} */
  {};
}
function Vs() {
  return !0;
}
let Dr = [];
function Ys() {
  var e = Dr;
  Dr = [], xa(e);
}
function Ur(e) {
  if (Dr.length === 0 && !Nn) {
    var t = Dr;
    queueMicrotask(() => {
      t === Dr && Ys();
    });
  }
  Dr.push(e);
}
function qa() {
  for (; Dr.length > 0; )
    Ys();
}
function qs(e) {
  var t = se;
  if (t === null)
    return ne.f |= wr, e;
  if ((t.f & Wr) === 0 && (t.f & pn) === 0)
    throw e;
  yr(e, t);
}
function yr(e, t) {
  for (; t !== null; ) {
    if ((t.f & Di) !== 0) {
      if ((t.f & Wr) === 0)
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
const Ga = -7169;
function Ee(e, t) {
  e.f = e.f & Ga | t;
}
function $i(e) {
  (e.f & yt) !== 0 || e.deps === null ? Ee(e, Le) : Ee(e, Yt);
}
function Gs(e) {
  if (e !== null)
    for (const t of e)
      (t.f & je) === 0 || (t.f & Yr) === 0 || (t.f ^= Yr, Gs(
        /** @type {Derived} */
        t.deps
      ));
}
function $s(e, t, r) {
  (e.f & Pe) !== 0 ? t.add(e) : (e.f & Yt) !== 0 && r.add(e), Gs(e.deps), Ee(e, Le);
}
let Ei = null, rn = null, z = null, Ni = null, Rt = null, Ii = null, Nn = !1, Ai = !1, on = null, Zn = null;
var ks = 0;
let $a = 1;
var un, br, Nr, cn, fn, Ir, dn, zt, jn, lt, Fn, xr, Ut, Ht, vn, Or, pe, Oi, Tn, Bi, Ws, Ks, zn, Wa, Pi, sn;
const ai = class ai {
  constructor() {
    Q(this, pe);
    Ze(this, "id", $a++);
    /** True as soon as `#process` was called */
    Q(this, un, !1);
    Ze(this, "linked", !0);
    /** @type {Batch | null} */
    Q(this, br, null);
    /** @type {Batch | null} */
    Q(this, Nr, null);
    /** @type {Map<Effect, ReturnType<typeof deferred<any>>>} */
    Ze(this, "async_deriveds", /* @__PURE__ */ new Map());
    /**
     * The current values of any signals that are updated in this batch.
     * Tuple format: [value, is_derived] (note: is_derived is false for deriveds, too, if they were overridden via assignment)
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Value, [any, boolean]>}
     */
    Ze(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any signals (sources and deriveds) that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Value, any>}
     */
    Ze(this, "previous", /* @__PURE__ */ new Map());
    /**
     * Async effects which this batch doesn't take into account anymore when calculating blockers,
     * as it has a value for it already.
     * @type {Set<Effect>}
     */
    Ze(this, "unblocked", /* @__PURE__ */ new Set());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<(batch: Batch) => void>}
     */
    Q(this, cn, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    Q(this, fn, /* @__PURE__ */ new Set());
    /**
     * Callbacks that should run only when a fork is committed.
     * @type {Set<(batch: Batch) => void>}
     */
    Q(this, Ir, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    Q(this, dn, 0);
    /**
     * Async effects that are currently in flight, _not_ inside a pending boundary
     * @type {Map<Effect, number>}
     */
    Q(this, zt, /* @__PURE__ */ new Map());
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    Q(this, jn, null);
    /**
     * The root effects that need to be flushed
     * @type {Effect[]}
     */
    Q(this, lt, []);
    /**
     * Effects created while this batch was active.
     * @type {Effect[]}
     */
    Q(this, Fn, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    Q(this, xr, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    Q(this, Ut, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    Q(this, Ht, /* @__PURE__ */ new Map());
    /**
     * Inverse of #skipped_branches which we need to tell prior batches to unskip them when committing
     * @type {Set<Effect>}
     */
    Q(this, vn, /* @__PURE__ */ new Set());
    Ze(this, "is_fork", !1);
    Q(this, Or, !1);
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(t) {
    v(this, Ht).has(t) || v(this, Ht).set(t, { d: [], m: [] }), v(this, vn).delete(t);
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   * @param {(e: Effect) => void} callback
   */
  unskip_effect(t, r = (n) => this.schedule(n)) {
    var n = v(this, Ht).get(t);
    if (n) {
      v(this, Ht).delete(t);
      for (var i of n.d)
        Ee(i, Pe), r(i);
      for (i of n.m)
        Ee(i, Yt), r(i);
    }
    v(this, vn).add(t);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Value} source
   * @param {any} value
   * @param {boolean} [is_derived]
   */
  capture(t, r, n = !1) {
    t.v !== Re && !this.previous.has(t) && this.previous.set(t, t.v), (t.f & wr) === 0 && (this.current.set(t, [r, n]), Rt?.set(t, r)), this.is_fork || (t.v = r);
  }
  activate() {
    z = this;
  }
  deactivate() {
    z = null, Rt = null;
  }
  flush() {
    try {
      Ai = !0, z = this, ce(this, pe, Tn).call(this);
    } finally {
      ks = 0, Ii = null, on = null, Zn = null, Ai = !1, z = null, Rt = null, Hr.clear();
    }
  }
  discard() {
    for (const t of v(this, fn)) t(this);
    v(this, fn).clear(), v(this, Ir).clear(), ce(this, pe, sn).call(this);
  }
  /**
   * @param {Effect} effect
   */
  register_created_effect(t) {
    v(this, Fn).push(t);
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  increment(t, r) {
    if (W(this, dn, v(this, dn) + 1), t) {
      let n = v(this, zt).get(r) ?? 0;
      v(this, zt).set(r, n + 1);
    }
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  decrement(t, r) {
    if (W(this, dn, v(this, dn) - 1), t) {
      let n = v(this, zt).get(r) ?? 0;
      n === 1 ? v(this, zt).delete(r) : v(this, zt).set(r, n - 1);
    }
    v(this, Or) || (W(this, Or, !0), Ur(() => {
      W(this, Or, !1), this.linked && this.flush();
    }));
  }
  /**
   * @param {Set<Effect>} dirty_effects
   * @param {Set<Effect>} maybe_dirty_effects
   */
  transfer_effects(t, r) {
    for (const n of t)
      v(this, xr).add(n);
    for (const n of r)
      v(this, Ut).add(n);
    t.clear(), r.clear();
  }
  /** @param {(batch: Batch) => void} fn */
  oncommit(t) {
    v(this, cn).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    v(this, fn).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  on_fork_commit(t) {
    v(this, Ir).add(t);
  }
  run_fork_commit_callbacks() {
    for (const t of v(this, Ir)) t(this);
    v(this, Ir).clear();
  }
  settled() {
    return (v(this, jn) ?? W(this, jn, js())).promise;
  }
  static ensure() {
    var t;
    if (z === null) {
      const r = z = new ai();
      ce(t = r, pe, Pi).call(t), !Ai && !Nn && Ur(() => {
        v(r, un) || r.flush();
      });
    }
    return z;
  }
  apply() {
    {
      Rt = null;
      return;
    }
  }
  /**
   *
   * @param {Effect} effect
   */
  schedule(t) {
    if (Ii = t, t.b?.is_pending && (t.f & (pn | fi | Fs)) !== 0 && (t.f & Wr) === 0) {
      t.b.defer_effect(t);
      return;
    }
    for (var r = t; r.parent !== null; ) {
      r = r.parent;
      var n = r.f;
      if (on !== null && r === se && (ne === null || (ne.f & je) === 0))
        return;
      if ((n & (kr | It)) !== 0) {
        if ((n & Le) === 0)
          return;
        r.f ^= Le;
      }
    }
    v(this, lt).push(r);
  }
};
un = new WeakMap(), br = new WeakMap(), Nr = new WeakMap(), cn = new WeakMap(), fn = new WeakMap(), Ir = new WeakMap(), dn = new WeakMap(), zt = new WeakMap(), jn = new WeakMap(), lt = new WeakMap(), Fn = new WeakMap(), xr = new WeakMap(), Ut = new WeakMap(), Ht = new WeakMap(), vn = new WeakMap(), Or = new WeakMap(), pe = new WeakSet(), Oi = function() {
  if (this.is_fork) return !0;
  for (const n of v(this, zt).keys()) {
    for (var t = n, r = !1; t.parent !== null; ) {
      if (v(this, Ht).has(t)) {
        r = !0;
        break;
      }
      t = t.parent;
    }
    if (!r)
      return !0;
  }
  return !1;
}, Tn = function() {
  var u, c, _;
  if (W(this, un, !0), ks++ > 1e3 && (ce(this, pe, sn).call(this), Qa()), !ce(this, pe, Oi).call(this)) {
    for (const f of v(this, xr))
      v(this, Ut).delete(f), Ee(f, Pe), this.schedule(f);
    for (const f of v(this, Ut))
      Ee(f, Yt), this.schedule(f);
  }
  const t = v(this, lt);
  W(this, lt, []), this.apply();
  var r = on = [], n = [], i = Zn = [];
  for (const f of t)
    try {
      ce(this, pe, Bi).call(this, f, r, n);
    } catch (d) {
      throw zs(f), d;
    }
  if (z = null, i.length > 0) {
    var o = ai.ensure();
    for (const f of i)
      o.schedule(f);
  }
  if (on = null, Zn = null, ce(this, pe, Oi).call(this)) {
    ce(this, pe, zn).call(this, n), ce(this, pe, zn).call(this, r);
    for (const [f, d] of v(this, Ht))
      Zs(f, d);
    i.length > 0 && /** @type {unknown} */
    ce(u = z, pe, Tn).call(u);
    return;
  }
  const a = ce(this, pe, Ws).call(this);
  if (a) {
    ce(c = a, pe, Ks).call(c, this);
    return;
  }
  v(this, xr).clear(), v(this, Ut).clear();
  for (const f of v(this, cn)) f(this);
  v(this, cn).clear(), Ni = this, Es(n), Es(r), Ni = null, v(this, jn)?.resolve();
  var s = (
    /** @type {Batch | null} */
    /** @type {unknown} */
    z
  );
  if (this.linked && v(this, dn) === 0 && ce(this, pe, sn).call(this), v(this, lt).length > 0) {
    s === null && (s = this, ce(this, pe, Pi).call(this));
    const f = s;
    v(f, lt).push(...v(this, lt).filter((d) => !v(f, lt).includes(d)));
  }
  s !== null && ce(_ = s, pe, Tn).call(_);
}, /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
Bi = function(t, r, n) {
  t.f ^= Le;
  for (var i = t.first; i !== null; ) {
    var o = i.f, a = (o & (It | kr)) !== 0, s = a && (o & Le) !== 0, u = s || (o & $e) !== 0 || v(this, Ht).has(i);
    if (!u && i.fn !== null) {
      a ? i.f ^= Le : (o & pn) !== 0 ? r.push(i) : qn(i) && ((o & Dt) !== 0 && v(this, Ut).add(i), xn(i));
      var c = i.first;
      if (c !== null) {
        i = c;
        continue;
      }
    }
    for (; i !== null; ) {
      var _ = i.next;
      if (_ !== null) {
        i = _;
        break;
      }
      i = i.parent;
    }
  }
}, Ws = function() {
  for (var t = v(this, br); t !== null; ) {
    if (!t.is_fork) {
      for (const [r, [, n]] of this.current)
        if (t.current.has(r) && !n)
          return t;
    }
    t = v(t, br);
  }
  return null;
}, /**
 * @param {Batch} batch
 */
Ks = function(t) {
  var n;
  for (const [i, o] of t.current)
    !this.previous.has(i) && t.previous.has(i) && this.previous.set(i, t.previous.get(i)), this.current.set(i, o);
  for (const [i, o] of t.async_deriveds) {
    const a = this.async_deriveds.get(i);
    a && o.promise.then(a.resolve);
  }
  const r = (i) => {
    var o = i.reactions;
    if (o !== null)
      for (const u of o) {
        var a = u.f;
        if ((a & je) !== 0)
          r(
            /** @type {Derived} */
            u
          );
        else {
          var s = (
            /** @type {Effect} */
            u
          );
          a & (an | Dt) && !this.async_deriveds.has(s) && (v(this, Ut).delete(s), Ee(s, Pe), this.schedule(s));
        }
      }
  };
  for (const i of this.current.keys())
    r(i);
  this.oncommit(() => t.discard()), ce(n = t, pe, sn).call(n), z = this, ce(this, pe, Tn).call(this);
}, /**
 * @param {Effect[]} effects
 */
zn = function(t) {
  for (var r = 0; r < t.length; r += 1)
    $s(t[r], v(this, xr), v(this, Ut));
}, Wa = function() {
  var _;
  ce(this, pe, sn).call(this);
  for (let f = Ei; f !== null; f = v(f, Nr)) {
    var t = f.id < this.id, r = [];
    for (const [d, [C, k]] of this.current) {
      if (f.current.has(d)) {
        var n = (
          /** @type {[any, boolean]} */
          f.current.get(d)[0]
        );
        if (t && C !== n)
          f.current.set(d, [C, k]);
        else
          continue;
      }
      r.push(d);
    }
    if (t)
      for (const [d, C] of this.async_deriveds) {
        const k = f.async_deriveds.get(d);
        k && C.promise.then(k.resolve);
      }
    if (v(f, un)) {
      var i = [...f.current.keys()].filter((d) => !this.current.has(d));
      if (i.length === 0)
        t && f.discard();
      else if (r.length > 0) {
        if (t)
          for (const d of v(this, vn))
            f.unskip_effect(d, (C) => {
              var k;
              (C.f & (Dt | an)) !== 0 ? f.schedule(C) : ce(k = f, pe, zn).call(k, [C]);
            });
        f.activate();
        var o = /* @__PURE__ */ new Set(), a = /* @__PURE__ */ new Map();
        for (var s of r)
          Qs(s, i, o, a);
        a = /* @__PURE__ */ new Map();
        var u = [...f.current.keys()].filter(
          (d) => this.current.has(d) ? (
            /** @type {[any, boolean]} */
            this.current.get(d)[0] !== d.v
          ) : !0
        );
        if (u.length > 0)
          for (const d of v(this, Fn))
            (d.f & (Nt | $e | ni)) === 0 && Wi(d, u, a) && ((d.f & (an | Dt)) !== 0 ? (Ee(d, Pe), f.schedule(d)) : v(f, xr).add(d));
        if (v(f, lt).length > 0 && !v(f, Or)) {
          f.apply();
          for (var c of v(f, lt))
            ce(_ = f, pe, Bi).call(_, c, [], []);
          W(f, lt, []);
        }
        f.deactivate();
      }
    }
  }
}, Pi = function() {
  rn === null ? Ei = rn = this : (W(rn, Nr, this), W(this, br, rn)), rn = this;
}, sn = function() {
  var t = v(this, br), r = v(this, Nr);
  t === null ? Ei = r : W(t, Nr, r), r === null ? rn = t : W(r, br, t), this.linked = !1;
};
let qr = ai;
function Ka(e) {
  var t = Nn;
  Nn = !0;
  try {
    for (var r; ; ) {
      if (qa(), z === null)
        return (
          /** @type {T} */
          r
        );
      z.flush();
    }
  } finally {
    Nn = t;
  }
}
function Qa() {
  try {
    Ta();
  } catch (e) {
    yr(e, Ii);
  }
}
let Qt = null;
function Es(e) {
  var t = e.length;
  if (t !== 0) {
    for (var r = 0; r < t; ) {
      var n = e[r++];
      if ((n.f & (Nt | $e)) === 0 && qn(n) && (Qt = /* @__PURE__ */ new Set(), xn(n), n.deps === null && n.first === null && n.nodes === null && n.teardown === null && n.ac === null && ho(n), Qt?.size > 0)) {
        Hr.clear();
        for (const i of Qt) {
          if ((i.f & (Nt | $e)) !== 0) continue;
          const o = [i];
          let a = i.parent;
          for (; a !== null; )
            Qt.has(a) && (Qt.delete(a), o.push(a)), a = a.parent;
          for (let s = o.length - 1; s >= 0; s--) {
            const u = o[s];
            (u.f & (Nt | $e)) === 0 && xn(u);
          }
        }
        Qt.clear();
      }
    }
    Qt = null;
  }
}
function Qs(e, t, r, n) {
  if (!r.has(e) && (r.add(e), e.reactions !== null))
    for (const i of e.reactions) {
      const o = i.f;
      (o & je) !== 0 ? Qs(
        /** @type {Derived} */
        i,
        t,
        r,
        n
      ) : (o & (an | Dt)) !== 0 && (o & Pe) === 0 && Wi(i, t, n) && (Ee(i, Pe), Ki(
        /** @type {Effect} */
        i
      ));
    }
}
function Wi(e, t, r) {
  const n = r.get(e);
  if (n !== void 0) return n;
  if (e.deps !== null)
    for (const i of e.deps) {
      if (Fr.call(t, i))
        return !0;
      if ((i.f & je) !== 0 && Wi(
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
function Ki(e) {
  z.schedule(e);
}
function Zs(e, t) {
  if (!((e.f & It) !== 0 && (e.f & Le) !== 0)) {
    (e.f & Pe) !== 0 ? t.d.push(e) : (e.f & Yt) !== 0 && t.m.push(e), Ee(e, Le);
    for (var r = e.first; r !== null; )
      Zs(r, t), r = r.next;
  }
}
function zs(e) {
  Ee(e, Le);
  for (var t = e.first; t !== null; )
    zs(t), t = t.next;
}
function Za(e) {
  let t = 0, r = Gr(0), n;
  return () => {
    Xi() && (l(r), hi(() => (t === 0 && (n = _i(() => e(() => In(r)))), t += 1, () => {
      Ur(() => {
        t -= 1, t === 0 && (n?.(), n = void 0, In(r));
      });
    })));
  };
}
var za = hn | mn;
function Xa(e, t, r, n) {
  new el(e, t, r, n);
}
var ht, qi, _t, Br, Xe, bt, Ge, ut, Xt, Pr, mr, gn, Un, Hn, er, li, Ae, tl, rl, nl, ji, Xn, ei, Fi, Ui;
class el {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(t, r, n, i) {
    Q(this, Ae);
    /** @type {Boundary | null} */
    Ze(this, "parent");
    Ze(this, "is_pending", !1);
    /**
     * API-level transformError transform function. Transforms errors before they reach the `failed` snippet.
     * Inherited from parent boundary, or defaults to identity.
     * @type {(error: unknown) => unknown}
     */
    Ze(this, "transform_error");
    /** @type {TemplateNode} */
    Q(this, ht);
    /** @type {TemplateNode | null} */
    Q(this, qi, null);
    /** @type {BoundaryProps} */
    Q(this, _t);
    /** @type {((anchor: Node) => void)} */
    Q(this, Br);
    /** @type {Effect} */
    Q(this, Xe);
    /** @type {Effect | null} */
    Q(this, bt, null);
    /** @type {Effect | null} */
    Q(this, Ge, null);
    /** @type {Effect | null} */
    Q(this, ut, null);
    /** @type {DocumentFragment | null} */
    Q(this, Xt, null);
    Q(this, Pr, 0);
    Q(this, mr, 0);
    Q(this, gn, !1);
    /** @type {Set<Effect>} */
    Q(this, Un, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    Q(this, Hn, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    Q(this, er, null);
    Q(this, li, Za(() => (W(this, er, Gr(v(this, Pr))), () => {
      W(this, er, null);
    })));
    W(this, ht, t), W(this, _t, r), W(this, Br, (o) => {
      var a = (
        /** @type {Effect} */
        se
      );
      a.b = this, a.f |= Di, n(o);
    }), this.parent = /** @type {Effect} */
    se.b, this.transform_error = i ?? this.parent?.transform_error ?? ((o) => o), W(this, Xe, ts(() => {
      ce(this, Ae, ji).call(this);
    }, za));
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    $s(t, v(this, Un), v(this, Hn));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!v(this, _t).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  update_pending_count(t, r) {
    ce(this, Ae, Fi).call(this, t, r), W(this, Pr, v(this, Pr) + t), !(!v(this, er) || v(this, gn)) && (W(this, gn, !0), Ur(() => {
      W(this, gn, !1), v(this, er) && bn(v(this, er), v(this, Pr));
    }));
  }
  get_effect_pending() {
    return v(this, li).call(this), l(
      /** @type {Source<number>} */
      v(this, er)
    );
  }
  /** @param {unknown} error */
  error(t) {
    if (!v(this, _t).onerror && !v(this, _t).failed)
      throw t;
    z?.is_fork ? (v(this, bt) && z.skip_effect(v(this, bt)), v(this, Ge) && z.skip_effect(v(this, Ge)), v(this, ut) && z.skip_effect(v(this, ut)), z.on_fork_commit(() => {
      ce(this, Ae, Ui).call(this, t);
    })) : ce(this, Ae, Ui).call(this, t);
  }
}
ht = new WeakMap(), qi = new WeakMap(), _t = new WeakMap(), Br = new WeakMap(), Xe = new WeakMap(), bt = new WeakMap(), Ge = new WeakMap(), ut = new WeakMap(), Xt = new WeakMap(), Pr = new WeakMap(), mr = new WeakMap(), gn = new WeakMap(), Un = new WeakMap(), Hn = new WeakMap(), er = new WeakMap(), li = new WeakMap(), Ae = new WeakSet(), tl = function() {
  try {
    W(this, bt, xt(() => v(this, Br).call(this, v(this, ht))));
  } catch (t) {
    this.error(t);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
rl = function(t) {
  const r = v(this, _t).failed;
  r && W(this, ut, xt(() => {
    r(
      v(this, ht),
      () => t,
      () => () => {
      }
    );
  }));
}, nl = function() {
  const t = v(this, _t).pending;
  t && (this.is_pending = !0, W(this, Ge, xt(() => t(v(this, ht)))), Ur(() => {
    var r = W(this, Xt, document.createDocumentFragment()), n = rr();
    r.append(n), W(this, bt, ce(this, Ae, ei).call(this, () => xt(() => v(this, Br).call(this, n)))), v(this, mr) === 0 && (v(this, ht).before(r), W(this, Xt, null), Jr(
      /** @type {Effect} */
      v(this, Ge),
      () => {
        W(this, Ge, null);
      }
    ), ce(this, Ae, Xn).call(
      this,
      /** @type {Batch} */
      z
    ));
  }));
}, ji = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), W(this, mr, 0), W(this, Pr, 0), W(this, bt, xt(() => {
      v(this, Br).call(this, v(this, ht));
    })), v(this, mr) > 0) {
      var t = W(this, Xt, document.createDocumentFragment());
      is(v(this, bt), t);
      const r = (
        /** @type {(anchor: Node) => void} */
        v(this, _t).pending
      );
      W(this, Ge, xt(() => r(v(this, ht))));
    } else
      ce(this, Ae, Xn).call(
        this,
        /** @type {Batch} */
        z
      );
  } catch (r) {
    this.error(r);
  }
}, /**
 * @param {Batch} batch
 */
Xn = function(t) {
  this.is_pending = !1, t.transfer_effects(v(this, Un), v(this, Hn));
}, /**
 * @template T
 * @param {() => T} fn
 */
ei = function(t) {
  var r = se, n = ne, i = ft;
  qt(v(this, Xe)), kt(v(this, Xe)), _n(v(this, Xe).ctx);
  try {
    return qr.ensure(), t();
  } catch (o) {
    return qs(o), null;
  } finally {
    qt(r), kt(n), _n(i);
  }
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 * @param {Batch} batch
 */
Fi = function(t, r) {
  var n;
  if (!this.has_pending_snippet()) {
    this.parent && ce(n = this.parent, Ae, Fi).call(n, t, r);
    return;
  }
  W(this, mr, v(this, mr) + t), v(this, mr) === 0 && (ce(this, Ae, Xn).call(this, r), v(this, Ge) && Jr(v(this, Ge), () => {
    W(this, Ge, null);
  }), v(this, Xt) && (v(this, ht).before(v(this, Xt)), W(this, Xt, null)));
}, /**
 * @param {unknown} error
 */
Ui = function(t) {
  v(this, bt) && (nt(v(this, bt)), W(this, bt, null)), v(this, Ge) && (nt(v(this, Ge)), W(this, Ge, null)), v(this, ut) && (nt(v(this, ut)), W(this, ut, null));
  var r = v(this, _t).onerror;
  let n = v(this, _t).failed;
  var i = !1, o = !1;
  const a = () => {
    if (i) {
      Va();
      return;
    }
    i = !0, o && Na(), v(this, ut) !== null && Jr(v(this, ut), () => {
      W(this, ut, null);
    }), ce(this, Ae, ei).call(this, () => {
      ce(this, Ae, ji).call(this);
    });
  }, s = (u) => {
    try {
      o = !0, r?.(u, a), o = !1;
    } catch (c) {
      yr(c, v(this, Xe) && v(this, Xe).parent);
    }
    n && W(this, ut, ce(this, Ae, ei).call(this, () => {
      try {
        return xt(() => {
          var c = (
            /** @type {Effect} */
            se
          );
          c.b = this, c.f |= Di, n(
            v(this, ht),
            () => u,
            () => a
          );
        });
      } catch (c) {
        return yr(
          c,
          /** @type {Effect} */
          v(this, Xe).parent
        ), null;
      }
    }));
  };
  Ur(() => {
    var u;
    try {
      u = this.transform_error(t);
    } catch (c) {
      yr(c, v(this, Xe) && v(this, Xe).parent);
      return;
    }
    u !== null && typeof u == "object" && typeof /** @type {any} */
    u.then == "function" ? u.then(
      s,
      /** @param {unknown} e */
      (c) => yr(c, v(this, Xe) && v(this, Xe).parent)
    ) : s(u);
  });
};
function il(e, t, r, n) {
  const i = Qi;
  var o = e.filter((d) => !d.settled);
  if (r.length === 0 && o.length === 0) {
    n(t.map(i));
    return;
  }
  var a = (
    /** @type {Effect} */
    se
  ), s = sl(), u = o.length === 1 ? o[0].promise : o.length > 1 ? Promise.all(o.map((d) => d.promise)) : null;
  function c(d) {
    if ((a.f & Nt) === 0) {
      s();
      try {
        n(d);
      } catch (C) {
        yr(C, a);
      }
      si();
    }
  }
  var _ = Xs();
  if (r.length === 0) {
    u.then(() => c(t.map(i))).finally(_);
    return;
  }
  function f() {
    Promise.all(r.map((d) => /* @__PURE__ */ ol(d))).then((d) => c([...t.map(i), ...d])).catch((d) => yr(d, a)).finally(_);
  }
  u ? u.then(() => {
    s(), f(), si();
  }) : f();
}
function sl() {
  var e = (
    /** @type {Effect} */
    se
  ), t = ne, r = ft, n = (
    /** @type {Batch} */
    z
  );
  return function(o = !0) {
    qt(e), kt(t), _n(r), o && (e.f & Nt) === 0 && (n?.activate(), n?.apply());
  };
}
function si(e = !0) {
  qt(null), kt(null), _n(null), e && z?.deactivate();
}
function Xs() {
  var e = (
    /** @type {Effect} */
    se
  ), t = (
    /** @type {Boundary} */
    e.b
  ), r = (
    /** @type {Batch} */
    z
  ), n = t.is_rendered();
  return t.update_pending_count(1, r), r.increment(n, e), () => {
    t.update_pending_count(-1, r), r.decrement(n, e);
  };
}
// @__NO_SIDE_EFFECTS__
function Qi(e) {
  var t = je | Pe;
  return se !== null && (se.f |= mn), {
    ctx: ft,
    deps: null,
    effects: null,
    equals: Hs,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      Re
    ),
    wv: 0,
    parent: se,
    ac: null
  };
}
const $n = Symbol("obsolete");
// @__NO_SIDE_EFFECTS__
function ol(e, t, r) {
  let n = (
    /** @type {Effect | null} */
    se
  );
  n === null && Ea();
  var i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), o = Gr(
    /** @type {V} */
    Re
  ), a = !ne, s = /* @__PURE__ */ new Set();
  return xl(() => {
    var u = (
      /** @type {Effect} */
      se
    ), c = js();
    i = c.promise;
    try {
      Promise.resolve(e()).then(c.resolve, (C) => {
        C !== di && c.reject(C);
      }).finally(si);
    } catch (C) {
      c.reject(C), si();
    }
    var _ = (
      /** @type {Batch} */
      z
    );
    if (a) {
      if ((u.f & Wr) !== 0)
        var f = Xs();
      if (
        /** @type {Boundary} */
        n.b.is_rendered()
      )
        _.async_deriveds.get(u)?.reject($n);
      else
        for (const C of s.values())
          C.reject($n);
      s.add(c), _.async_deriveds.set(u, c);
    }
    const d = (C, k = void 0) => {
      f?.(), s.delete(c), k !== $n && (_.activate(), k ? (o.f |= wr, bn(o, k)) : ((o.f & wr) !== 0 && (o.f ^= wr), bn(o, C)), _.deactivate());
    };
    c.promise.then(d, (C) => d(null, C || "unknown"));
  }), es(() => {
    for (const u of s)
      u.reject($n);
  }), new Promise((u) => {
    function c(_) {
      function f() {
        _ === i ? u(o) : c(i);
      }
      _.then(f, f);
    }
    c(i);
  });
}
// @__NO_SIDE_EFFECTS__
function Mr(e) {
  const t = /* @__PURE__ */ Qi(e);
  return xo(t), t;
}
// @__NO_SIDE_EFFECTS__
function al(e) {
  const t = /* @__PURE__ */ Qi(e);
  return t.equals = Js, t;
}
function ll(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var r = 0; r < t.length; r += 1)
      nt(
        /** @type {Effect} */
        t[r]
      );
  }
}
function Zi(e) {
  var t, r = se, n = e.parent;
  if (!Er && n !== null && e.v !== Re && // if it was never evaluated before, it's guaranteed to fail downstream, so we try to execute instead
  (n.f & (Nt | $e)) !== 0)
    return Ha(), e.v;
  qt(n);
  try {
    e.f &= ~Yr, ll(e), t = ko(e);
  } finally {
    qt(r);
  }
  return t;
}
function eo(e) {
  var t = Zi(e);
  if (!e.equals(t) && (e.wv = yo(), (!z?.is_fork || e.deps === null) && (z !== null ? (z.capture(e, t, !0), Ni?.capture(e, t, !0)) : e.v = t, e.deps === null))) {
    Ee(e, Le);
    return;
  }
  Er || (Rt !== null ? (Xi() || z?.is_fork) && Rt.set(e, t) : $i(e));
}
function ul(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      (t.teardown || t.ac) && (t.teardown?.(), t.ac?.abort(di), t.fn !== null && (t.teardown = ba), t.ac = null, Bn(t, 0), rs(t));
}
function to(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      t.teardown && t.fn !== null && xn(t);
}
let oi = /* @__PURE__ */ new Set();
const Hr = /* @__PURE__ */ new Map();
let ro = !1;
function Gr(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Hs,
    rv: 0,
    wv: 0
  };
  return r;
}
// @__NO_SIDE_EFFECTS__
function D(e, t) {
  const r = Gr(e);
  return xo(r), r;
}
// @__NO_SIDE_EFFECTS__
function cl(e, t = !1, r = !0) {
  const n = Gr(e);
  return t || (n.equals = Js), n;
}
function b(e, t, r = !1) {
  ne !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Lt || (ne.f & ni) !== 0) && Vs() && (ne.f & (je | Dt | an | ni)) !== 0 && (wt === null || !Fr.call(wt, e)) && La();
  let n = r ? Vt(t) : t;
  return bn(e, n, Zn);
}
function bn(e, t, r = null) {
  if (!e.equals(t)) {
    Hr.set(e, Er ? t : e.v);
    var n = qr.ensure();
    if (n.capture(e, t), (e.f & je) !== 0) {
      const i = (
        /** @type {Derived} */
        e
      );
      (e.f & Pe) !== 0 && Zi(i), Rt === null && $i(i);
    }
    e.wv = yo(), io(e, Pe, r), se !== null && (se.f & Le) !== 0 && (se.f & (It | kr)) === 0 && (pt === null ? yl([e]) : pt.push(e)), !n.is_fork && oi.size > 0 && !ro && fl();
  }
  return t;
}
function fl() {
  ro = !1;
  for (const e of oi) {
    (e.f & Le) !== 0 && Ee(e, Yt);
    let t;
    try {
      t = qn(e);
    } catch {
      t = !0;
    }
    t && xn(e);
  }
  oi.clear();
}
function no(e, t = 1) {
  var r = l(e);
  return b(e, t === 1 ? ++r : --r);
}
function In(e) {
  b(e, e.v + 1);
}
function io(e, t, r) {
  var n = e.reactions;
  if (n !== null)
    for (var i = n.length, o = 0; o < i; o++) {
      var a = n[o], s = a.f, u = (s & Pe) === 0;
      if (u && Ee(a, t), (s & ni) !== 0)
        oi.add(
          /** @type {Effect} */
          a
        );
      else if ((s & je) !== 0) {
        var c = (
          /** @type {Derived} */
          a
        );
        Rt?.delete(c), (s & Yr) === 0 && (s & yt && (se === null || (se.f & ii) === 0) && (a.f |= Yr), io(c, Yt, r));
      } else if (u) {
        var _ = (
          /** @type {Effect} */
          a
        );
        (s & Dt) !== 0 && Qt !== null && Qt.add(_), r !== null ? r.push(_) : Ki(_);
      }
    }
}
function Vt(e) {
  if (typeof e != "object" || e === null || ln in e)
    return e;
  const t = Ps(e);
  if (t !== ha && t !== _a)
    return e;
  var r = /* @__PURE__ */ new Map(), n = Gi(e), i = /* @__PURE__ */ D(0), o = Vr, a = (s) => {
    if (Vr === o)
      return s();
    var u = ne, c = Vr;
    kt(null), Ts(o);
    var _ = s();
    return kt(u), Ts(c), _;
  };
  return n && r.set("length", /* @__PURE__ */ D(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(s, u, c) {
        (!("value" in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && Da();
        var _ = r.get(u);
        return _ === void 0 ? a(() => {
          var f = /* @__PURE__ */ D(c.value);
          return r.set(u, f), f;
        }) : b(_, c.value, !0), !0;
      },
      deleteProperty(s, u) {
        var c = r.get(u);
        if (c === void 0) {
          if (u in s) {
            const _ = a(() => /* @__PURE__ */ D(Re));
            r.set(u, _), In(i);
          }
        } else
          b(c, Re), In(i);
        return !0;
      },
      get(s, u, c) {
        if (u === ln)
          return e;
        var _ = r.get(u), f = u in s;
        if (_ === void 0 && (!f || Ln(s, u)?.writable) && (_ = a(() => {
          var C = Vt(f ? s[u] : Re), k = /* @__PURE__ */ D(C);
          return k;
        }), r.set(u, _)), _ !== void 0) {
          var d = l(_);
          return d === Re ? void 0 : d;
        }
        return Reflect.get(s, u, c);
      },
      getOwnPropertyDescriptor(s, u) {
        var c = Reflect.getOwnPropertyDescriptor(s, u);
        if (c && "value" in c) {
          var _ = r.get(u);
          _ && (c.value = l(_));
        } else if (c === void 0) {
          var f = r.get(u), d = f?.v;
          if (f !== void 0 && d !== Re)
            return {
              enumerable: !0,
              configurable: !0,
              value: d,
              writable: !0
            };
        }
        return c;
      },
      has(s, u) {
        if (u === ln)
          return !0;
        var c = r.get(u), _ = c !== void 0 && c.v !== Re || Reflect.has(s, u);
        if (c !== void 0 || se !== null && (!_ || Ln(s, u)?.writable)) {
          c === void 0 && (c = a(() => {
            var d = _ ? Vt(s[u]) : Re, C = /* @__PURE__ */ D(d);
            return C;
          }), r.set(u, c));
          var f = l(c);
          if (f === Re)
            return !1;
        }
        return _;
      },
      set(s, u, c, _) {
        var f = r.get(u), d = u in s;
        if (n && u === "length")
          for (var C = c; C < /** @type {Source<number>} */
          f.v; C += 1) {
            var k = r.get(C + "");
            k !== void 0 ? b(k, Re) : C in s && (k = a(() => /* @__PURE__ */ D(Re)), r.set(C + "", k));
          }
        if (f === void 0)
          (!d || Ln(s, u)?.writable) && (f = a(() => /* @__PURE__ */ D(void 0)), b(f, Vt(c)), r.set(u, f));
        else {
          d = f.v !== Re;
          var O = a(() => Vt(c));
          b(f, O);
        }
        var F = Reflect.getOwnPropertyDescriptor(s, u);
        if (F?.set && F.set.call(_, c), !d) {
          if (n && typeof u == "string") {
            var K = (
              /** @type {Source<number>} */
              r.get("length")
            ), P = Number(u);
            Number.isInteger(P) && P >= K.v && b(K, P + 1);
          }
          In(i);
        }
        return !0;
      },
      ownKeys(s) {
        l(i);
        var u = Reflect.ownKeys(s).filter((f) => {
          var d = r.get(f);
          return d === void 0 || d.v !== Re;
        });
        for (var [c, _] of r)
          _.v !== Re && !(c in s) && u.push(c);
        return u;
      },
      setPrototypeOf() {
        Ra();
      }
    }
  );
}
function As(e) {
  try {
    if (e !== null && typeof e == "object" && ln in e)
      return e[ln];
  } catch {
  }
  return e;
}
function dl(e, t) {
  return Object.is(As(e), As(t));
}
var Cs, so, oo, ao;
function vl() {
  if (Cs === void 0) {
    Cs = window, so = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, r = Text.prototype;
    oo = Ln(t, "firstChild").get, ao = Ln(t, "nextSibling").get, ys(e) && (e[Li] = void 0, e[Kn] = null, e[ka] = void 0, e.__e = void 0), ys(r) && (r[Mn] = void 0);
  }
}
function rr(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function mt(e) {
  return (
    /** @type {TemplateNode | null} */
    oo.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function Yn(e) {
  return (
    /** @type {TemplateNode | null} */
    ao.call(e)
  );
}
function h(e, t) {
  return /* @__PURE__ */ mt(e);
}
function ze(e, t = !1) {
  {
    var r = /* @__PURE__ */ mt(e);
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ Yn(r) : r;
  }
}
function m(e, t = 1, r = !1) {
  let n = e;
  for (; t--; )
    n = /** @type {TemplateNode} */
    /* @__PURE__ */ Yn(n);
  return n;
}
function gl(e) {
  e.textContent = "";
}
function lo() {
  return !1;
}
function uo(e, t, r) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElementNS(t ?? Us, e, void 0)
  );
}
let Ss = !1;
function pl() {
  Ss || (Ss = !0, document.addEventListener(
    "reset",
    (e) => {
      Promise.resolve().then(() => {
        if (!e.defaultPrevented)
          for (
            const t of
            /**@type {HTMLFormElement} */
            e.target.elements
          )
            t[Qn]?.();
      });
    },
    // In the capture phase to guarantee we get noticed of it (no possibility of stopPropagation)
    { capture: !0 }
  ));
}
function pi(e) {
  var t = ne, r = se;
  kt(null), qt(null);
  try {
    return e();
  } finally {
    kt(t), qt(r);
  }
}
function zi(e, t, r, n = r) {
  e.addEventListener(t, () => pi(r));
  const i = (
    /** @type {any} */
    e[Qn]
  );
  i ? e[Qn] = () => {
    i(), n(!0);
  } : e[Qn] = () => n(!0), pl();
}
function hl(e) {
  se === null && (ne === null && Ma(), Sa()), Er && Ca();
}
function _l(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function nr(e, t) {
  var r = se;
  r !== null && (r.f & $e) !== 0 && (e |= $e);
  var n = {
    ctx: ft,
    deps: null,
    nodes: null,
    f: e | Pe | yt,
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
  z?.register_created_effect(n);
  var i = n;
  if ((e & pn) !== 0)
    on !== null ? on.push(n) : qr.ensure().schedule(n);
  else if (t !== null) {
    try {
      xn(n);
    } catch (a) {
      throw nt(n), a;
    }
    i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && // either `null`, or a singular child
    (i.f & mn) === 0 && (i = i.first, (e & Dt) !== 0 && (e & hn) !== 0 && i !== null && (i.f |= hn));
  }
  if (i !== null && (i.parent = r, r !== null && _l(i, r), ne !== null && (ne.f & je) !== 0 && (e & kr) === 0)) {
    var o = (
      /** @type {Derived} */
      ne
    );
    (o.effects ?? (o.effects = [])).push(i);
  }
  return n;
}
function Xi() {
  return ne !== null && !Lt;
}
function es(e) {
  const t = nr(fi, null);
  return Ee(t, Le), t.teardown = e, t;
}
function co(e) {
  hl();
  var t = (
    /** @type {Effect} */
    se.f
  ), r = !ne && (t & It) !== 0 && (t & Wr) === 0;
  if (r) {
    var n = (
      /** @type {ComponentContext} */
      ft
    );
    (n.e ?? (n.e = [])).push(e);
  } else
    return fo(e);
}
function fo(e) {
  return nr(pn | ya, e);
}
function bl(e) {
  qr.ensure();
  const t = nr(kr | mn, e);
  return (r = {}) => new Promise((n) => {
    r.outro ? Jr(t, () => {
      nt(t), n(void 0);
    }) : (nt(t), n(void 0));
  });
}
function vo(e) {
  return nr(pn, e);
}
function xl(e) {
  return nr(an | mn, e);
}
function hi(e, t = 0) {
  return nr(fi | t, e);
}
function U(e, t = [], r = [], n = []) {
  il(n, t, r, (i) => {
    nr(fi, () => e(...i.map(l)));
  });
}
function ts(e, t = 0) {
  var r = nr(Dt | t, e);
  return r;
}
function xt(e) {
  return nr(It | mn, e);
}
function go(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = Er, n = ne;
    Ms(!0), kt(null);
    try {
      t.call(null);
    } finally {
      Ms(r), kt(n);
    }
  }
}
function rs(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    const i = r.ac;
    i !== null && pi(() => {
      i.abort(di);
    });
    var n = r.next;
    (r.f & kr) !== 0 ? r.parent = null : nt(r, t), r = n;
  }
}
function ml(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & It) === 0 && nt(t), t = r;
  }
}
function nt(e, t = !0) {
  var r = !1;
  (t || (e.f & ma) !== 0) && e.nodes !== null && e.nodes.end !== null && (po(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), r = !0), Ee(e, Ri), rs(e, t && !r), Bn(e, 0);
  var n = e.nodes && e.nodes.t;
  if (n !== null)
    for (const o of n)
      o.stop();
  go(e), e.f ^= Ri, e.f |= Nt;
  var i = e.parent;
  i !== null && i.first !== null && ho(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function po(e, t) {
  for (; e !== null; ) {
    var r = e === t ? null : /* @__PURE__ */ Yn(e);
    e.remove(), e = r;
  }
}
function ho(e) {
  var t = e.parent, r = e.prev, n = e.next;
  r !== null && (r.next = n), n !== null && (n.prev = r), t !== null && (t.first === e && (t.first = n), t.last === e && (t.last = r));
}
function Jr(e, t, r = !0) {
  var n = [];
  _o(e, n, !0);
  var i = () => {
    r && nt(e), t && t();
  }, o = n.length;
  if (o > 0) {
    var a = () => --o || i();
    for (var s of n)
      s.out(a);
  } else
    i();
}
function _o(e, t, r) {
  if ((e.f & $e) === 0) {
    e.f ^= $e;
    var n = e.nodes && e.nodes.t;
    if (n !== null)
      for (const s of n)
        (s.is_global || r) && t.push(s);
    for (var i = e.first; i !== null; ) {
      var o = i.next;
      if ((i.f & kr) === 0) {
        var a = (i.f & hn) !== 0 || // If this is a branch effect without a block effect parent,
        // it means the parent block effect was pruned. In that case,
        // transparency information was transferred to the branch effect.
        (i.f & It) !== 0 && (e.f & Dt) !== 0;
        _o(i, t, a ? r : !1);
      }
      i = o;
    }
  }
}
function ns(e) {
  bo(e, !0);
}
function bo(e, t) {
  if ((e.f & $e) !== 0) {
    e.f ^= $e, (e.f & Le) === 0 && (Ee(e, Pe), qr.ensure().schedule(e));
    for (var r = e.first; r !== null; ) {
      var n = r.next, i = (r.f & hn) !== 0 || (r.f & It) !== 0;
      bo(r, i ? t : !1), r = n;
    }
    var o = e.nodes && e.nodes.t;
    if (o !== null)
      for (const a of o)
        (a.is_global || t) && a.in();
  }
}
function is(e, t) {
  if (e.nodes)
    for (var r = e.nodes.start, n = e.nodes.end; r !== null; ) {
      var i = r === n ? null : /* @__PURE__ */ Yn(r);
      t.append(r), r = i;
    }
}
let ti = !1, Er = !1;
function Ms(e) {
  Er = e;
}
let ne = null, Lt = !1;
function kt(e) {
  ne = e;
}
let se = null;
function qt(e) {
  se = e;
}
let wt = null;
function xo(e) {
  ne !== null && (wt === null ? wt = [e] : wt.push(e));
}
let rt = null, at = 0, pt = null;
function yl(e) {
  pt = e;
}
let mo = 1, Rr = 0, Vr = Rr;
function Ts(e) {
  Vr = e;
}
function yo() {
  return ++mo;
}
function qn(e) {
  var t = e.f;
  if ((t & Pe) !== 0)
    return !0;
  if (t & je && (e.f &= ~Yr), (t & Yt) !== 0) {
    for (var r = (
      /** @type {Value[]} */
      e.deps
    ), n = r.length, i = 0; i < n; i++) {
      var o = r[i];
      if (qn(
        /** @type {Derived} */
        o
      ) && eo(
        /** @type {Derived} */
        o
      ), o.wv > e.wv)
        return !0;
    }
    (t & yt) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    Rt === null && Ee(e, Le);
  }
  return !1;
}
function wo(e, t, r = !0) {
  var n = e.reactions;
  if (n !== null && !(wt !== null && Fr.call(wt, e)))
    for (var i = 0; i < n.length; i++) {
      var o = n[i];
      (o.f & je) !== 0 ? wo(
        /** @type {Derived} */
        o,
        t,
        !1
      ) : t === o && (r ? Ee(o, Pe) : (o.f & Le) !== 0 && Ee(o, Yt), Ki(
        /** @type {Effect} */
        o
      ));
    }
}
function ko(e) {
  var O;
  var t = rt, r = at, n = pt, i = ne, o = wt, a = ft, s = Lt, u = Vr, c = e.f;
  rt = /** @type {null | Value[]} */
  null, at = 0, pt = null, ne = (c & (It | kr)) === 0 ? e : null, wt = null, _n(e.ctx), Lt = !1, Vr = ++Rr, e.ac !== null && (pi(() => {
    e.ac.abort(di);
  }), e.ac = null);
  try {
    e.f |= ii;
    var _ = (
      /** @type {Function} */
      e.fn
    ), f = _();
    e.f |= Wr;
    var d = e.deps, C = z?.is_fork;
    if (rt !== null) {
      var k;
      if (C || Bn(e, at), d !== null && at > 0)
        for (d.length = at + rt.length, k = 0; k < rt.length; k++)
          d[at + k] = rt[k];
      else
        e.deps = d = rt;
      if (Xi() && (e.f & yt) !== 0)
        for (k = at; k < d.length; k++)
          ((O = d[k]).reactions ?? (O.reactions = [])).push(e);
    } else !C && d !== null && at < d.length && (Bn(e, at), d.length = at);
    if (Vs() && pt !== null && !Lt && d !== null && (e.f & (je | Yt | Pe)) === 0)
      for (k = 0; k < /** @type {Source[]} */
      pt.length; k++)
        wo(
          pt[k],
          /** @type {Effect} */
          e
        );
    if (i !== null && i !== e) {
      if (Rr++, i.deps !== null)
        for (let F = 0; F < r; F += 1)
          i.deps[F].rv = Rr;
      if (t !== null)
        for (const F of t)
          F.rv = Rr;
      pt !== null && (n === null ? n = pt : n.push(.../** @type {Source[]} */
      pt));
    }
    return (e.f & wr) !== 0 && (e.f ^= wr), f;
  } catch (F) {
    return qs(F);
  } finally {
    e.f ^= ii, rt = t, at = r, pt = n, ne = i, wt = o, _n(a), Lt = s, Vr = u;
  }
}
function wl(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var n = va.call(r, e);
    if (n !== -1) {
      var i = r.length - 1;
      i === 0 ? r = t.reactions = null : (r[n] = r[i], r.pop());
    }
  }
  if (r === null && (t.f & je) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (rt === null || !Fr.call(rt, t))) {
    var o = (
      /** @type {Derived} */
      t
    );
    (o.f & yt) !== 0 && (o.f ^= yt, o.f &= ~Yr), o.v !== Re && $i(o), ul(o), Bn(o, 0);
  }
}
function Bn(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var n = t; n < r.length; n++)
      wl(e, r[n]);
}
function xn(e) {
  var t = e.f;
  if ((t & Nt) === 0) {
    Ee(e, Le);
    var r = se, n = ti;
    se = e, ti = !0;
    try {
      (t & (Dt | Fs)) !== 0 ? ml(e) : rs(e), go(e);
      var i = ko(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = mo;
      var o;
    } finally {
      ti = n, se = r;
    }
  }
}
async function kl() {
  await Promise.resolve(), Ka();
}
function l(e) {
  var t = e.f, r = (t & je) !== 0;
  if (ne !== null && !Lt) {
    var n = se !== null && (se.f & Nt) !== 0;
    if (!n && (wt === null || !Fr.call(wt, e))) {
      var i = ne.deps;
      if ((ne.f & ii) !== 0)
        e.rv < Rr && (e.rv = Rr, rt === null && i !== null && i[at] === e ? at++ : rt === null ? rt = [e] : rt.push(e));
      else {
        ne.deps ?? (ne.deps = []), Fr.call(ne.deps, e) || ne.deps.push(e);
        var o = e.reactions;
        o === null ? e.reactions = [ne] : Fr.call(o, ne) || o.push(ne);
      }
    }
  }
  if (Er && Hr.has(e))
    return Hr.get(e);
  if (r) {
    var a = (
      /** @type {Derived} */
      e
    );
    if (Er) {
      var s = a.v;
      return ((a.f & Le) === 0 && a.reactions !== null || Ao(a)) && (s = Zi(a)), Hr.set(a, s), s;
    }
    var u = (a.f & yt) === 0 && !Lt && ne !== null && (ti || (ne.f & yt) !== 0), c = (a.f & Wr) === 0;
    qn(a) && (u && (a.f |= yt), eo(a)), u && !c && (to(a), Eo(a));
  }
  if (Rt?.has(e))
    return Rt.get(e);
  if ((e.f & wr) !== 0)
    throw e.v;
  return e.v;
}
function Eo(e) {
  if (e.f |= yt, e.deps !== null)
    for (const t of e.deps)
      (t.reactions ?? (t.reactions = [])).push(e), (t.f & je) !== 0 && (t.f & yt) === 0 && (to(
        /** @type {Derived} */
        t
      ), Eo(
        /** @type {Derived} */
        t
      ));
}
function Ao(e) {
  if (e.v === Re) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (Hr.has(t) || (t.f & je) !== 0 && Ao(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function _i(e) {
  var t = Lt;
  try {
    return Lt = !0, e();
  } finally {
    Lt = t;
  }
}
const El = ["touchstart", "touchmove"];
function Al(e) {
  return El.includes(e);
}
const Lr = Symbol("events"), Co = /* @__PURE__ */ new Set(), Hi = /* @__PURE__ */ new Set();
function Cl(e, t, r, n = {}) {
  function i(o) {
    if (n.capture || Ji.call(t, o), !o.cancelBubble)
      return pi(() => r?.call(this, o));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? Ur(() => {
    t.addEventListener(e, i, n);
  }) : t.addEventListener(e, i, n), i;
}
function Ci(e, t, r, n, i) {
  var o = { capture: n, passive: i }, a = Cl(e, t, r, o);
  (t === document.body || // @ts-ignore
  t === window || // @ts-ignore
  t === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  t instanceof HTMLMediaElement) && es(() => {
    t.removeEventListener(e, a, o);
  });
}
function ee(e, t, r) {
  (t[Lr] ?? (t[Lr] = {}))[e] = r;
}
function ss(e) {
  for (var t = 0; t < e.length; t++)
    Co.add(e[t]);
  for (var r of Hi)
    r(e);
}
let Ds = null;
function Ji(e) {
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), n = e.type, i = e.composedPath?.() || [], o = (
    /** @type {null | Element} */
    i[0] || e.target
  );
  Ds = e;
  var a = 0, s = Ds === e && e[Lr];
  if (s) {
    var u = i.indexOf(s);
    if (u !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e[Lr] = t;
      return;
    }
    var c = i.indexOf(t);
    if (c === -1)
      return;
    u <= c && (a = u);
  }
  if (o = /** @type {Element} */
  i[a] || e.target, o !== t) {
    ga(e, "currentTarget", {
      configurable: !0,
      get() {
        return o || r;
      }
    });
    var _ = ne, f = se;
    kt(null), qt(null);
    try {
      for (var d, C = []; o !== null; ) {
        var k = o.assignedSlot || o.parentNode || /** @type {any} */
        o.host || null;
        try {
          var O = o[Lr]?.[n];
          O != null && (!/** @type {any} */
          o.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === o) && O.call(o, e);
        } catch (F) {
          d ? C.push(F) : d = F;
        }
        if (e.cancelBubble || k === t || k === null)
          break;
        o = k;
      }
      if (d) {
        for (let F of C)
          queueMicrotask(() => {
            throw F;
          });
        throw d;
      }
    } finally {
      e[Lr] = t, delete e.currentTarget, kt(_), qt(f);
    }
  }
}
const Sl = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (e) => e
  })
);
function Ml(e) {
  return (
    /** @type {string} */
    Sl?.createHTML(e) ?? e
  );
}
function So(e) {
  var t = uo("template");
  return t.innerHTML = Ml(e.replaceAll("<!>", "<!---->")), t.content;
}
function $r(e, t) {
  var r = (
    /** @type {Effect} */
    se
  );
  r.nodes === null && (r.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function N(e, t) {
  var r = (t & Pa) !== 0, n = (t & ja) !== 0, i, o = !e.startsWith("<!>");
  return () => {
    i === void 0 && (i = So(o ? e : "<!>" + e), r || (i = /** @type {TemplateNode} */
    /* @__PURE__ */ mt(i)));
    var a = (
      /** @type {TemplateNode} */
      n || so ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (r) {
      var s = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ mt(a)
      ), u = (
        /** @type {TemplateNode} */
        a.lastChild
      );
      $r(s, u);
    } else
      $r(a, a);
    return a;
  };
}
// @__NO_SIDE_EFFECTS__
function Tl(e, t, r = "svg") {
  var n = !e.startsWith("<!>"), i = `<${r}>${n ? e : "<!>" + e}</${r}>`, o;
  return () => {
    if (!o) {
      var a = (
        /** @type {DocumentFragment} */
        So(i)
      ), s = (
        /** @type {Element} */
        /* @__PURE__ */ mt(a)
      );
      for (o = document.createDocumentFragment(); /* @__PURE__ */ mt(s); )
        o.appendChild(
          /** @type {TemplateNode} */
          /* @__PURE__ */ mt(s)
        );
    }
    var u = (
      /** @type {TemplateNode} */
      o.cloneNode(!0)
    );
    {
      var c = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ mt(u)
      ), _ = (
        /** @type {TemplateNode} */
        u.lastChild
      );
      $r(c, _);
    }
    return u;
  };
}
// @__NO_SIDE_EFFECTS__
function Dl(e, t) {
  return /* @__PURE__ */ Tl(e, t, "svg");
}
function Rs(e = "") {
  {
    var t = rr(e + "");
    return $r(t, t), t;
  }
}
function Rl() {
  var e = document.createDocumentFragment(), t = document.createComment(""), r = rr();
  return e.append(t, r), $r(t, r), e;
}
function T(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function j(e, t) {
  var r = t == null ? "" : typeof t == "object" ? `${t}` : t;
  r !== /** @type {any} */
  (e[Mn] ?? (e[Mn] = e.nodeValue)) && (e[Mn] = r, e.nodeValue = `${r}`);
}
function Ll(e, t) {
  return Nl(e, t);
}
const Wn = /* @__PURE__ */ new Map();
function Nl(e, { target: t, anchor: r, props: n = {}, events: i, context: o, intro: a = !0, transformError: s }) {
  vl();
  var u = void 0, c = bl(() => {
    var _ = r ?? t.appendChild(rr());
    Xa(
      /** @type {TemplateNode} */
      _,
      {
        pending: () => {
        }
      },
      (C) => {
        vi({});
        var k = (
          /** @type {ComponentContext} */
          ft
        );
        o && (k.c = o), i && (n.$$events = i), u = e(C, n) || {}, gi();
      },
      s
    );
    var f = /* @__PURE__ */ new Set(), d = (C) => {
      for (var k = 0; k < C.length; k++) {
        var O = C[k];
        if (!f.has(O)) {
          f.add(O);
          var F = Al(O);
          for (const te of [t, document]) {
            var K = Wn.get(te);
            K === void 0 && (K = /* @__PURE__ */ new Map(), Wn.set(te, K));
            var P = K.get(O);
            P === void 0 ? (te.addEventListener(O, Ji, { passive: F }), K.set(O, 1)) : K.set(O, P + 1);
          }
        }
      }
    };
    return d(ci(Co)), Hi.add(d), () => {
      for (var C of f)
        for (const F of [t, document]) {
          var k = (
            /** @type {Map<string, number>} */
            Wn.get(F)
          ), O = (
            /** @type {number} */
            k.get(C)
          );
          --O == 0 ? (F.removeEventListener(C, Ji), k.delete(C), k.size === 0 && Wn.delete(F)) : k.set(C, O);
        }
      Hi.delete(d), _ !== r && _.parentNode?.removeChild(_);
    };
  });
  return Vi.set(u, c), u;
}
let Vi = /* @__PURE__ */ new WeakMap();
function Il(e, t) {
  const r = Vi.get(e);
  return r ? (Vi.delete(e), r(t)) : Promise.resolve();
}
var Tt, Jt, ct, jr, Jn, Vn, ui;
class Ol {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, r = !0) {
    /** @type {TemplateNode} */
    Ze(this, "anchor");
    /** @type {Map<Batch, Key>} */
    Q(this, Tt, /* @__PURE__ */ new Map());
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
    Q(this, Jt, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    Q(this, ct, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    Q(this, jr, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    Q(this, Jn, !0);
    /**
     * @param {Batch} batch
     */
    Q(this, Vn, (t) => {
      if (v(this, Tt).has(t)) {
        var r = (
          /** @type {Key} */
          v(this, Tt).get(t)
        ), n = v(this, Jt).get(r);
        if (n)
          ns(n), v(this, jr).delete(r);
        else {
          var i = v(this, ct).get(r);
          i && (v(this, Jt).set(r, i.effect), v(this, ct).delete(r), i.fragment.lastChild.remove(), this.anchor.before(i.fragment), n = i.effect);
        }
        for (const [o, a] of v(this, Tt)) {
          if (v(this, Tt).delete(o), o === t)
            break;
          const s = v(this, ct).get(a);
          s && (nt(s.effect), v(this, ct).delete(a));
        }
        for (const [o, a] of v(this, Jt)) {
          if (o === r || v(this, jr).has(o)) continue;
          const s = () => {
            if (Array.from(v(this, Tt).values()).includes(o)) {
              var c = document.createDocumentFragment();
              is(a, c), c.append(rr()), v(this, ct).set(o, { effect: a, fragment: c });
            } else
              nt(a);
            v(this, jr).delete(o), v(this, Jt).delete(o);
          };
          v(this, Jn) || !n ? (v(this, jr).add(o), Jr(a, s, !1)) : s();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    Q(this, ui, (t) => {
      v(this, Tt).delete(t);
      const r = Array.from(v(this, Tt).values());
      for (const [n, i] of v(this, ct))
        r.includes(n) || (nt(i.effect), v(this, ct).delete(n));
    });
    this.anchor = t, W(this, Jn, r);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, r) {
    var n = (
      /** @type {Batch} */
      z
    ), i = lo();
    if (r && !v(this, Jt).has(t) && !v(this, ct).has(t))
      if (i) {
        var o = document.createDocumentFragment(), a = rr();
        o.append(a), v(this, ct).set(t, {
          effect: xt(() => r(a)),
          fragment: o
        });
      } else
        v(this, Jt).set(
          t,
          xt(() => r(this.anchor))
        );
    if (v(this, Tt).set(n, t), i) {
      for (const [s, u] of v(this, Jt))
        s === t ? n.unskip_effect(u) : n.skip_effect(u);
      for (const [s, u] of v(this, ct))
        s === t ? n.unskip_effect(u.effect) : n.skip_effect(u.effect);
      n.oncommit(v(this, Vn)), n.ondiscard(v(this, ui));
    } else
      v(this, Vn).call(this, n);
  }
}
Tt = new WeakMap(), Jt = new WeakMap(), ct = new WeakMap(), jr = new WeakMap(), Jn = new WeakMap(), Vn = new WeakMap(), ui = new WeakMap();
function G(e, t, r = !1) {
  var n = new Ol(e), i = r ? hn : 0;
  function o(a, s) {
    n.ensure(a, s);
  }
  ts(() => {
    var a = !1;
    t((s, u = 0) => {
      a = !0, o(u, s);
    }), a || o(-1, null);
  }, i);
}
function Tr(e, t) {
  return t;
}
function Bl(e, t, r) {
  for (var n = [], i = t.length, o, a = t.length, s = 0; s < i; s++) {
    let f = t[s];
    Jr(
      f,
      () => {
        if (o) {
          if (o.pending.delete(f), o.done.add(f), o.pending.size === 0) {
            var d = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            Yi(e, ci(o.done)), d.delete(o), d.size === 0 && (e.outrogroups = null);
          }
        } else
          a -= 1;
      },
      !1
    );
  }
  if (a === 0) {
    var u = n.length === 0 && r !== null;
    if (u) {
      var c = (
        /** @type {Element} */
        r
      ), _ = (
        /** @type {Element} */
        c.parentNode
      );
      gl(_), _.append(c), e.items.clear();
    }
    Yi(e, t, !u);
  } else
    o = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ?? (e.outrogroups = /* @__PURE__ */ new Set())).add(o);
}
function Yi(e, t, r = !0) {
  var n;
  if (e.pending.size > 0) {
    n = /* @__PURE__ */ new Set();
    for (const a of e.pending.values())
      for (const s of a)
        n.add(
          /** @type {EachItem} */
          e.items.get(s).e
        );
  }
  for (var i = 0; i < t.length; i++) {
    var o = t[i];
    if (n?.has(o)) {
      o.f |= tr;
      const a = document.createDocumentFragment();
      is(o, a);
    } else
      nt(t[i], r);
  }
}
var Ls;
function Zt(e, t, r, n, i, o = null) {
  var a = e, s = /* @__PURE__ */ new Map();
  {
    var u = (
      /** @type {Element} */
      e
    );
    a = u.appendChild(rr());
  }
  var c = null, _ = /* @__PURE__ */ al(() => {
    var P = r();
    return Gi(P) ? P : P == null ? [] : ci(P);
  }), f, d = /* @__PURE__ */ new Map(), C = !0;
  function k(P) {
    (K.effect.f & Nt) === 0 && (K.pending.delete(P), K.fallback = c, Pl(K, f, a, t, n), c !== null && (f.length === 0 ? (c.f & tr) === 0 ? ns(c) : (c.f ^= tr, Dn(c, null, a)) : Jr(c, () => {
      c = null;
    })));
  }
  function O(P) {
    K.pending.delete(P);
  }
  var F = ts(() => {
    f = /** @type {V[]} */
    l(_);
    for (var P = f.length, te = /* @__PURE__ */ new Set(), he = (
      /** @type {Batch} */
      z
    ), fe = lo(), xe = 0; xe < P; xe += 1) {
      var x = f[xe], w = n(x, xe), g = C ? null : s.get(w);
      g ? (g.v && bn(g.v, x), g.i && bn(g.i, xe), fe && he.unskip_effect(g.e)) : (g = jl(
        s,
        C ? a : Ls ?? (Ls = rr()),
        x,
        w,
        xe,
        i,
        t,
        r
      ), C || (g.e.f |= tr), s.set(w, g)), te.add(w);
    }
    if (P === 0 && o && !c && (C ? c = xt(() => o(a)) : (c = xt(() => o(Ls ?? (Ls = rr()))), c.f |= tr)), P > te.size && Aa(), !C)
      if (d.set(he, te), fe) {
        for (const [E, y] of s)
          te.has(E) || he.skip_effect(y.e);
        he.oncommit(k), he.ondiscard(O);
      } else
        k(he);
    l(_);
  }), K = { effect: F, items: s, pending: d, outrogroups: null, fallback: c };
  C = !1;
}
function Sn(e) {
  for (; e !== null && (e.f & It) === 0; )
    e = e.next;
  return e;
}
function Pl(e, t, r, n, i) {
  var o = t.length, a = e.items, s = Sn(e.effect.first), u, c = null, _ = [], f = [], d, C, k, O;
  for (O = 0; O < o; O += 1) {
    if (d = t[O], C = i(d, O), k = /** @type {EachItem} */
    a.get(C).e, e.outrogroups !== null)
      for (const w of e.outrogroups)
        w.pending.delete(k), w.done.delete(k);
    if ((k.f & $e) !== 0 && ns(k), (k.f & tr) !== 0)
      if (k.f ^= tr, k === s)
        Dn(k, null, r);
      else {
        var F = c ? c.next : s;
        k === e.effect.last && (e.effect.last = k.prev), k.prev && (k.prev.next = k.next), k.next && (k.next.prev = k.prev), gr(e, c, k), gr(e, k, F), Dn(k, F, r), c = k, _ = [], f = [], s = Sn(c.next);
        continue;
      }
    if (k !== s) {
      if (u !== void 0 && u.has(k)) {
        if (_.length < f.length) {
          var K = f[0], P;
          c = K.prev;
          var te = _[0], he = _[_.length - 1];
          for (P = 0; P < _.length; P += 1)
            Dn(_[P], K, r);
          for (P = 0; P < f.length; P += 1)
            u.delete(f[P]);
          gr(e, te.prev, he.next), gr(e, c, te), gr(e, he, K), s = K, c = he, O -= 1, _ = [], f = [];
        } else
          u.delete(k), Dn(k, s, r), gr(e, k.prev, k.next), gr(e, k, c === null ? e.effect.first : c.next), gr(e, c, k), c = k;
        continue;
      }
      for (_ = [], f = []; s !== null && s !== k; )
        (u ?? (u = /* @__PURE__ */ new Set())).add(s), f.push(s), s = Sn(s.next);
      if (s === null)
        continue;
    }
    (k.f & tr) === 0 && _.push(k), c = k, s = Sn(k.next);
  }
  if (e.outrogroups !== null) {
    for (const w of e.outrogroups)
      w.pending.size === 0 && (Yi(e, ci(w.done)), e.outrogroups?.delete(w));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (s !== null || u !== void 0) {
    var fe = [];
    if (u !== void 0)
      for (k of u)
        (k.f & $e) === 0 && fe.push(k);
    for (; s !== null; )
      (s.f & $e) === 0 && s !== e.fallback && fe.push(s), s = Sn(s.next);
    var xe = fe.length;
    if (xe > 0) {
      var x = o === 0 ? r : null;
      Bl(e, fe, x);
    }
  }
}
function jl(e, t, r, n, i, o, a, s) {
  var u = (a & Ia) !== 0 ? (a & Ba) === 0 ? /* @__PURE__ */ cl(r, !1, !1) : Gr(r) : null, c = (a & Oa) !== 0 ? Gr(i) : null;
  return {
    v: u,
    i: c,
    e: xt(() => (o(t, u ?? r, c ?? i, s), () => {
      e.delete(n);
    }))
  };
}
function Dn(e, t, r) {
  if (e.nodes)
    for (var n = e.nodes.start, i = e.nodes.end, o = t && (t.f & tr) === 0 ? (
      /** @type {EffectNodes} */
      t.nodes.start
    ) : r; n !== null; ) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Yn(n)
      );
      if (o.before(n), n === i)
        return;
      n = a;
    }
}
function gr(e, t, r) {
  t === null ? e.effect.first = r : t.next = r, r === null ? e.effect.last = t : r.prev = t;
}
function Fl(e, t, r = !1, n = !1, i = !1, o = !1) {
  var a = e, s = "";
  if (r)
    var u = (
      /** @type {Element} */
      e
    );
  U(() => {
    var c = (
      /** @type {Effect} */
      se
    );
    if (s !== (s = t() ?? "")) {
      if (r) {
        c.nodes = null, u.innerHTML = /** @type {string} */
        s, s !== "" && $r(
          /** @type {TemplateNode} */
          /* @__PURE__ */ mt(u),
          /** @type {TemplateNode} */
          u.lastChild
        );
        return;
      }
      if (c.nodes !== null && (po(
        c.nodes.start,
        /** @type {TemplateNode} */
        c.nodes.end
      ), c.nodes = null), s !== "") {
        var _ = n ? Fa : i ? Ua : void 0, f = (
          /** @type {HTMLTemplateElement | SVGElement | MathMLElement} */
          uo(n ? "svg" : i ? "math" : "template", _)
        );
        f.innerHTML = /** @type {any} */
        s;
        var d = n || i ? f : (
          /** @type {HTMLTemplateElement} */
          f.content
        );
        if ($r(
          /** @type {TemplateNode} */
          /* @__PURE__ */ mt(d),
          /** @type {TemplateNode} */
          d.lastChild
        ), n || i)
          for (; /* @__PURE__ */ mt(d); )
            a.before(
              /** @type {TemplateNode} */
              /* @__PURE__ */ mt(d)
            );
        else
          a.before(d);
      }
    }
  });
}
function Mo(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var i = e.length;
    for (t = 0; t < i; t++) e[t] && (r = Mo(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function Ul() {
  for (var e, t, r = 0, n = "", i = arguments.length; r < i; r++) (e = arguments[r]) && (t = Mo(e)) && (n && (n += " "), n += t);
  return n;
}
function et(e) {
  return typeof e == "object" ? Ul(e) : e ?? "";
}
function Hl(e, t, r) {
  var n = e == null ? "" : "" + e;
  return n === "" ? null : n;
}
function tt(e, t, r, n, i, o) {
  var a = (
    /** @type {any} */
    e[Li]
  );
  if (a !== r || a === void 0) {
    var s = Hl(r);
    s == null ? e.removeAttribute("class") : e.className = s, e[Li] = r;
  }
  return o;
}
function To(e, t, r = !1) {
  if (e.multiple) {
    if (t == null)
      return;
    if (!Gi(t))
      return Ja();
    for (var n of e.options)
      n.selected = t.includes(On(n));
    return;
  }
  for (n of e.options) {
    var i = On(n);
    if (dl(i, t)) {
      n.selected = !0;
      return;
    }
  }
  (!r || t !== void 0) && (e.selectedIndex = -1);
}
function Jl(e) {
  var t = new MutationObserver(() => {
    To(e, e.__value);
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
  }), es(() => {
    t.disconnect();
  });
}
function Do(e, t, r = t) {
  var n = /* @__PURE__ */ new WeakSet(), i = !0;
  zi(e, "change", (o) => {
    var a = o ? "[selected]" : ":checked", s;
    if (e.multiple)
      s = [].map.call(e.querySelectorAll(a), On);
    else {
      var u = e.querySelector(a) ?? // will fall back to first non-disabled option if no option is selected
      e.querySelector("option:not([disabled])");
      s = u && On(u);
    }
    r(s), e.__value = s, z !== null && n.add(z);
  }), vo(() => {
    var o = t();
    if (e === document.activeElement) {
      var a = (
        /** @type {Batch} */
        z
      );
      if (n.has(a))
        return;
    }
    if (To(e, o, i), i && o === void 0) {
      var s = e.querySelector(":checked");
      s !== null && (o = On(s), r(o));
    }
    e.__value = o, i = !1;
  }), Jl(e);
}
function On(e) {
  return "__value" in e ? e.__value : e.value;
}
const Vl = Symbol("is custom element"), Yl = Symbol("is html");
function ri(e, t, r, n) {
  var i = ql(e);
  i[t] !== (i[t] = r) && (t === "loading" && (e[wa] = r), r == null ? e.removeAttribute(t) : typeof r != "string" && Gl(e).includes(t) ? e[t] = r : e.setAttribute(t, r));
}
function ql(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    /** @type {any} */
    e[Kn] ?? (e[Kn] = {
      [Vl]: e.nodeName.includes("-"),
      [Yl]: e.namespaceURI === Us
    })
  );
}
var Ns = /* @__PURE__ */ new Map();
function Gl(e) {
  var t = e.getAttribute("is") || e.nodeName, r = Ns.get(t);
  if (r) return r;
  Ns.set(t, r = []);
  for (var n, i = e, o = Element.prototype; o !== i; ) {
    n = pa(i);
    for (var a in n)
      n[a].set && // better safe than sorry, we don't want spread attributes to mess with HTML content
      a !== "innerHTML" && a !== "textContent" && a !== "innerText" && r.push(a);
    i = Ps(i);
  }
  return r;
}
function Ft(e, t, r = t) {
  var n = /* @__PURE__ */ new WeakSet();
  zi(e, "input", async (i) => {
    var o = i ? e.defaultValue : e.value;
    if (o = Si(e) ? Mi(o) : o, r(o), z !== null && n.add(z), await kl(), o !== (o = t())) {
      var a = e.selectionStart, s = e.selectionEnd, u = e.value.length;
      if (e.value = o ?? "", s !== null) {
        var c = e.value.length;
        a === s && s === u && c > u ? (e.selectionStart = c, e.selectionEnd = c) : (e.selectionStart = a, e.selectionEnd = Math.min(s, c));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  _i(t) == null && e.value && (r(Si(e) ? Mi(e.value) : e.value), z !== null && n.add(z)), hi(() => {
    var i = t();
    if (e === document.activeElement) {
      var o = (
        /** @type {Batch} */
        z
      );
      if (n.has(o))
        return;
    }
    Si(e) && i === Mi(e.value) || e.type === "date" && !i && !e.value || i !== e.value && (e.value = i ?? "");
  });
}
function $l(e, t, r = t) {
  zi(e, "change", (n) => {
    var i = n ? e.defaultChecked : e.checked;
    r(i);
  }), // If we are hydrating and the value has since changed,
  // then use the update value from the input instead.
  // If defaultChecked is set, then checked == defaultChecked
  _i(t) == null && r(e.checked), hi(() => {
    var n = t();
    e.checked = !!n;
  });
}
function Si(e) {
  var t = e.type;
  return t === "number" || t === "range";
}
function Mi(e) {
  return e === "" ? null : +e;
}
function Ti(e, t) {
  return e === t || e?.[ln] === t;
}
function Wl(e = {}, t, r, n) {
  var i = (
    /** @type {ComponentContext} */
    ft.r
  ), o = (
    /** @type {Effect} */
    se
  );
  return vo(() => {
    var a, s;
    return hi(() => {
      a = s, s = [], _i(() => {
        Ti(r(...s), e) || (t(e, ...s), a && Ti(r(...a), e) && t(null, ...a));
      });
    }), () => {
      let u = o;
      for (; u !== i && u.parent !== null && u.parent.f & Ri; )
        u = u.parent;
      const c = () => {
        s && Ti(r(...s), e) && t(null, ...s);
      }, _ = u.teardown;
      u.teardown = () => {
        c(), _?.();
      };
    };
  }), e;
}
function nn(e, t, r, n) {
  var i = (
    /** @type {V} */
    n
  ), o = !0, a = () => (o && (o = !1, i = /** @type {V} */
  n), i), s;
  s = /** @type {V} */
  e[t], s === void 0 && n !== void 0 && (s = a());
  var u;
  return u = () => {
    var c = (
      /** @type {V} */
      e[t]
    );
    return c === void 0 ? a() : (o = !0, c);
  }, u;
}
const Kl = "5";
var Bs;
typeof window < "u" && ((Bs = window.__svelte ?? (window.__svelte = {})).v ?? (Bs.v = /* @__PURE__ */ new Set())).add(Kl);
const yn = function(e, t) {
  let i = e;
  const o = Rn[t];
  let a = null, s = 0, u = null;
  const c = [], _ = {}, f = function(x, w) {
    s = i * 4 + 17, a = (function(g) {
      const E = new Array(g);
      for (let y = 0; y < g; y += 1) {
        E[y] = new Array(g);
        for (let M = 0; M < g; M += 1)
          E[y][M] = null;
      }
      return E;
    })(s), d(0, 0), d(s - 7, 0), d(0, s - 7), O(), k(), K(x, w), i >= 7 && F(x), u == null && (u = he(i, o, c)), P(u, w);
  }, d = function(x, w) {
    for (let g = -1; g <= 7; g += 1)
      if (!(x + g <= -1 || s <= x + g))
        for (let E = -1; E <= 7; E += 1)
          w + E <= -1 || s <= w + E || (0 <= g && g <= 6 && (E == 0 || E == 6) || 0 <= E && E <= 6 && (g == 0 || g == 6) || 2 <= g && g <= 4 && 2 <= E && E <= 4 ? a[x + g][w + E] = !0 : a[x + g][w + E] = !1);
  }, C = function() {
    let x = 0, w = 0;
    for (let g = 0; g < 8; g += 1) {
      f(!0, g);
      const E = hr.getLostPoint(_);
      (g == 0 || x > E) && (x = E, w = g);
    }
    return w;
  }, k = function() {
    for (let x = 8; x < s - 8; x += 1)
      a[x][6] == null && (a[x][6] = x % 2 == 0);
    for (let x = 8; x < s - 8; x += 1)
      a[6][x] == null && (a[6][x] = x % 2 == 0);
  }, O = function() {
    const x = hr.getPatternPosition(i);
    for (let w = 0; w < x.length; w += 1)
      for (let g = 0; g < x.length; g += 1) {
        const E = x[w], y = x[g];
        if (a[E][y] == null)
          for (let M = -2; M <= 2; M += 1)
            for (let I = -2; I <= 2; I += 1)
              M == -2 || M == 2 || I == -2 || I == 2 || M == 0 && I == 0 ? a[E + M][y + I] = !0 : a[E + M][y + I] = !1;
      }
  }, F = function(x) {
    const w = hr.getBCHTypeNumber(i);
    for (let g = 0; g < 18; g += 1) {
      const E = !x && (w >> g & 1) == 1;
      a[Math.floor(g / 3)][g % 3 + s - 8 - 3] = E;
    }
    for (let g = 0; g < 18; g += 1) {
      const E = !x && (w >> g & 1) == 1;
      a[g % 3 + s - 8 - 3][Math.floor(g / 3)] = E;
    }
  }, K = function(x, w) {
    const g = o << 3 | w, E = hr.getBCHTypeInfo(g);
    for (let y = 0; y < 15; y += 1) {
      const M = !x && (E >> y & 1) == 1;
      y < 6 ? a[y][8] = M : y < 8 ? a[y + 1][8] = M : a[s - 15 + y][8] = M;
    }
    for (let y = 0; y < 15; y += 1) {
      const M = !x && (E >> y & 1) == 1;
      y < 8 ? a[8][s - y - 1] = M : y < 9 ? a[8][15 - y - 1 + 1] = M : a[8][15 - y - 1] = M;
    }
    a[s - 8][8] = !x;
  }, P = function(x, w) {
    let g = -1, E = s - 1, y = 7, M = 0;
    const I = hr.getMaskFunction(w);
    for (let X = s - 1; X > 0; X -= 2)
      for (X == 6 && (X -= 1); ; ) {
        for (let re = 0; re < 2; re += 1)
          if (a[E][X - re] == null) {
            let de = !1;
            M < x.length && (de = (x[M] >>> y & 1) == 1), I(E, X - re) && (de = !de), a[E][X - re] = de, y -= 1, y == -1 && (M += 1, y = 7);
          }
        if (E += g, E < 0 || s <= E) {
          E -= g, g = -g;
          break;
        }
      }
  }, te = function(x, w) {
    let g = 0, E = 0, y = 0;
    const M = new Array(w.length), I = new Array(w.length);
    for (let B = 0; B < w.length; B += 1) {
      const ae = w[B].dataCount, me = w[B].totalCount - ae;
      E = Math.max(E, ae), y = Math.max(y, me), M[B] = new Array(ae);
      for (let Ne = 0; Ne < M[B].length; Ne += 1)
        M[B][Ne] = 255 & x.getBuffer()[Ne + g];
      g += ae;
      const ye = hr.getErrorCorrectPolynomial(me), sr = Pn(M[B], ye.getLength() - 1).mod(ye);
      I[B] = new Array(ye.getLength() - 1);
      for (let Ne = 0; Ne < I[B].length; Ne += 1) {
        const dt = Ne + sr.getLength() - I[B].length;
        I[B][Ne] = dt >= 0 ? sr.getAt(dt) : 0;
      }
    }
    let X = 0;
    for (let B = 0; B < w.length; B += 1)
      X += w[B].totalCount;
    const re = new Array(X);
    let de = 0;
    for (let B = 0; B < E; B += 1)
      for (let ae = 0; ae < w.length; ae += 1)
        B < M[ae].length && (re[de] = M[ae][B], de += 1);
    for (let B = 0; B < y; B += 1)
      for (let ae = 0; ae < w.length; ae += 1)
        B < I[ae].length && (re[de] = I[ae][B], de += 1);
    return re;
  }, he = function(x, w, g) {
    const E = Is.getRSBlocks(x, w), y = Os();
    for (let I = 0; I < g.length; I += 1) {
      const X = g[I];
      y.put(X.getMode(), 4), y.put(X.getLength(), hr.getLengthInBits(X.getMode(), x)), X.write(y);
    }
    let M = 0;
    for (let I = 0; I < E.length; I += 1)
      M += E[I].dataCount;
    if (y.getLengthInBits() > M * 8)
      throw "code length overflow. (" + y.getLengthInBits() + ">" + M * 8 + ")";
    for (y.getLengthInBits() + 4 <= M * 8 && y.put(0, 4); y.getLengthInBits() % 8 != 0; )
      y.putBit(!1);
    for (; !(y.getLengthInBits() >= M * 8 || (y.put(236, 8), y.getLengthInBits() >= M * 8)); )
      y.put(17, 8);
    return te(y, E);
  };
  _.addData = function(x, w) {
    w = w || "Byte";
    let g = null;
    switch (w) {
      case "Numeric":
        g = Ql(x);
        break;
      case "Alphanumeric":
        g = Zl(x);
        break;
      case "Byte":
        g = zl(x);
        break;
      case "Kanji":
        g = Xl(x);
        break;
      default:
        throw "mode:" + w;
    }
    c.push(g), u = null;
  }, _.isDark = function(x, w) {
    if (x < 0 || s <= x || w < 0 || s <= w)
      throw x + "," + w;
    return a[x][w];
  }, _.getModuleCount = function() {
    return s;
  }, _.make = function() {
    if (i < 1) {
      let x = 1;
      for (; x < 40; x++) {
        const w = Is.getRSBlocks(x, o), g = Os();
        for (let y = 0; y < c.length; y++) {
          const M = c[y];
          g.put(M.getMode(), 4), g.put(M.getLength(), hr.getLengthInBits(M.getMode(), x)), M.write(g);
        }
        let E = 0;
        for (let y = 0; y < w.length; y++)
          E += w[y].dataCount;
        if (g.getLengthInBits() <= E * 8)
          break;
      }
      i = x;
    }
    f(!1, C());
  }, _.createTableTag = function(x, w) {
    x = x || 2, w = typeof w > "u" ? x * 4 : w;
    let g = "";
    g += '<table style="', g += " border-width: 0px; border-style: none;", g += " border-collapse: collapse;", g += " padding: 0px; margin: " + w + "px;", g += '">', g += "<tbody>";
    for (let E = 0; E < _.getModuleCount(); E += 1) {
      g += "<tr>";
      for (let y = 0; y < _.getModuleCount(); y += 1)
        g += '<td style="', g += " border-width: 0px; border-style: none;", g += " border-collapse: collapse;", g += " padding: 0px; margin: 0px;", g += " width: " + x + "px;", g += " height: " + x + "px;", g += " background-color: ", g += _.isDark(E, y) ? "#000000" : "#ffffff", g += ";", g += '"/>';
      g += "</tr>";
    }
    return g += "</tbody>", g += "</table>", g;
  }, _.createSvgTag = function(x, w, g, E) {
    let y = {};
    typeof arguments[0] == "object" && (y = arguments[0], x = y.cellSize, w = y.margin, g = y.alt, E = y.title), x = x || 2, w = typeof w > "u" ? x * 4 : w, g = typeof g == "string" ? { text: g } : g || {}, g.text = g.text || null, g.id = g.text ? g.id || "qrcode-description" : null, E = typeof E == "string" ? { text: E } : E || {}, E.text = E.text || null, E.id = E.text ? E.id || "qrcode-title" : null;
    const M = _.getModuleCount() * x + w * 2;
    let I, X, re, de, B = "", ae;
    for (ae = "l" + x + ",0 0," + x + " -" + x + ",0 0,-" + x + "z ", B += '<svg version="1.1" xmlns="http://www.w3.org/2000/svg"', B += y.scalable ? "" : ' width="' + M + 'px" height="' + M + 'px"', B += ' viewBox="0 0 ' + M + " " + M + '" ', B += ' preserveAspectRatio="xMinYMin meet"', B += E.text || g.text ? ' role="img" aria-labelledby="' + fe([E.id, g.id].join(" ").trim()) + '"' : "", B += ">", B += E.text ? '<title id="' + fe(E.id) + '">' + fe(E.text) + "</title>" : "", B += g.text ? '<description id="' + fe(g.id) + '">' + fe(g.text) + "</description>" : "", B += '<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>', B += '<path d="', re = 0; re < _.getModuleCount(); re += 1)
      for (de = re * x + w, I = 0; I < _.getModuleCount(); I += 1)
        _.isDark(re, I) && (X = I * x + w, B += "M" + X + "," + de + ae);
    return B += '" stroke="transparent" fill="black"/>', B += "</svg>", B;
  }, _.createDataURL = function(x, w) {
    x = x || 2, w = typeof w > "u" ? x * 4 : w;
    const g = _.getModuleCount() * x + w * 2, E = w, y = g - w;
    return nu(g, g, function(M, I) {
      if (E <= M && M < y && E <= I && I < y) {
        const X = Math.floor((M - E) / x), re = Math.floor((I - E) / x);
        return _.isDark(re, X) ? 0 : 1;
      } else
        return 1;
    });
  }, _.createImgTag = function(x, w, g) {
    x = x || 2, w = typeof w > "u" ? x * 4 : w;
    const E = _.getModuleCount() * x + w * 2;
    let y = "";
    return y += "<img", y += ' src="', y += _.createDataURL(x, w), y += '"', y += ' width="', y += E, y += '"', y += ' height="', y += E, y += '"', g && (y += ' alt="', y += fe(g), y += '"'), y += "/>", y;
  };
  const fe = function(x) {
    let w = "";
    for (let g = 0; g < x.length; g += 1) {
      const E = x.charAt(g);
      switch (E) {
        case "<":
          w += "&lt;";
          break;
        case ">":
          w += "&gt;";
          break;
        case "&":
          w += "&amp;";
          break;
        case '"':
          w += "&quot;";
          break;
        default:
          w += E;
          break;
      }
    }
    return w;
  }, xe = function(x) {
    x = typeof x > "u" ? 2 : x;
    const g = _.getModuleCount() * 1 + x * 2, E = x, y = g - x;
    let M, I, X, re, de;
    const B = {
      "██": "█",
      "█ ": "▀",
      " █": "▄",
      "  ": " "
    }, ae = {
      "██": "▀",
      "█ ": "▀",
      " █": " ",
      "  ": " "
    };
    let me = "";
    for (M = 0; M < g; M += 2) {
      for (X = Math.floor((M - E) / 1), re = Math.floor((M + 1 - E) / 1), I = 0; I < g; I += 1)
        de = "█", E <= I && I < y && E <= M && M < y && _.isDark(X, Math.floor((I - E) / 1)) && (de = " "), E <= I && I < y && E <= M + 1 && M + 1 < y && _.isDark(re, Math.floor((I - E) / 1)) ? de += " " : de += "█", me += x < 1 && M + 1 >= y ? ae[de] : B[de];
      me += `
`;
    }
    return g % 2 && x > 0 ? me.substring(0, me.length - g - 1) + Array(g + 1).join("▀") : me.substring(0, me.length - 1);
  };
  return _.createASCII = function(x, w) {
    if (x = x || 1, x < 2)
      return xe(w);
    x -= 1, w = typeof w > "u" ? x * 2 : w;
    const g = _.getModuleCount() * x + w * 2, E = w, y = g - w;
    let M, I, X, re;
    const de = Array(x + 1).join("██"), B = Array(x + 1).join("  ");
    let ae = "", me = "";
    for (M = 0; M < g; M += 1) {
      for (X = Math.floor((M - E) / x), me = "", I = 0; I < g; I += 1)
        re = 1, E <= I && I < y && E <= M && M < y && _.isDark(X, Math.floor((I - E) / x)) && (re = 0), me += re ? de : B;
      for (X = 0; X < x; X += 1)
        ae += me + `
`;
    }
    return ae.substring(0, ae.length - 1);
  }, _.renderTo2dContext = function(x, w) {
    w = w || 2;
    const g = _.getModuleCount();
    for (let E = 0; E < g; E++)
      for (let y = 0; y < g; y++)
        x.fillStyle = _.isDark(E, y) ? "black" : "white", x.fillRect(y * w, E * w, w, w);
  }, _;
};
yn.stringToBytes = function(e) {
  const t = [];
  for (let r = 0; r < e.length; r += 1) {
    const n = e.charCodeAt(r);
    t.push(n & 255);
  }
  return t;
};
yn.createStringToBytes = function(e, t) {
  const r = (function() {
    const i = tu(e), o = function() {
      const u = i.read();
      if (u == -1) throw "eof";
      return u;
    };
    let a = 0;
    const s = {};
    for (; ; ) {
      const u = i.read();
      if (u == -1) break;
      const c = o(), _ = o(), f = o(), d = String.fromCharCode(u << 8 | c), C = _ << 8 | f;
      s[d] = C, a += 1;
    }
    if (a != t)
      throw a + " != " + t;
    return s;
  })(), n = 63;
  return function(i) {
    const o = [];
    for (let a = 0; a < i.length; a += 1) {
      const s = i.charCodeAt(a);
      if (s < 128)
        o.push(s);
      else {
        const u = r[i.charAt(a)];
        typeof u == "number" ? (u & 255) == u ? o.push(u) : (o.push(u >>> 8), o.push(u & 255)) : o.push(n);
      }
    }
    return o;
  };
};
const Je = {
  MODE_NUMBER: 1,
  MODE_ALPHA_NUM: 2,
  MODE_8BIT_BYTE: 4,
  MODE_KANJI: 8
}, Rn = {
  L: 1,
  M: 0,
  Q: 3,
  H: 2
}, pr = {
  PATTERN000: 0,
  PATTERN001: 1,
  PATTERN010: 2,
  PATTERN011: 3,
  PATTERN100: 4,
  PATTERN101: 5,
  PATTERN110: 6,
  PATTERN111: 7
}, hr = (function() {
  const e = [
    [],
    [6, 18],
    [6, 22],
    [6, 26],
    [6, 30],
    [6, 34],
    [6, 22, 38],
    [6, 24, 42],
    [6, 26, 46],
    [6, 28, 50],
    [6, 30, 54],
    [6, 32, 58],
    [6, 34, 62],
    [6, 26, 46, 66],
    [6, 26, 48, 70],
    [6, 26, 50, 74],
    [6, 30, 54, 78],
    [6, 30, 56, 82],
    [6, 30, 58, 86],
    [6, 34, 62, 90],
    [6, 28, 50, 72, 94],
    [6, 26, 50, 74, 98],
    [6, 30, 54, 78, 102],
    [6, 28, 54, 80, 106],
    [6, 32, 58, 84, 110],
    [6, 30, 58, 86, 114],
    [6, 34, 62, 90, 118],
    [6, 26, 50, 74, 98, 122],
    [6, 30, 54, 78, 102, 126],
    [6, 26, 52, 78, 104, 130],
    [6, 30, 56, 82, 108, 134],
    [6, 34, 60, 86, 112, 138],
    [6, 30, 58, 86, 114, 142],
    [6, 34, 62, 90, 118, 146],
    [6, 30, 54, 78, 102, 126, 150],
    [6, 24, 50, 76, 102, 128, 154],
    [6, 28, 54, 80, 106, 132, 158],
    [6, 32, 58, 84, 110, 136, 162],
    [6, 26, 54, 82, 110, 138, 166],
    [6, 30, 58, 86, 114, 142, 170]
  ], t = 1335, r = 7973, n = 21522, i = {}, o = function(a) {
    let s = 0;
    for (; a != 0; )
      s += 1, a >>>= 1;
    return s;
  };
  return i.getBCHTypeInfo = function(a) {
    let s = a << 10;
    for (; o(s) - o(t) >= 0; )
      s ^= t << o(s) - o(t);
    return (a << 10 | s) ^ n;
  }, i.getBCHTypeNumber = function(a) {
    let s = a << 12;
    for (; o(s) - o(r) >= 0; )
      s ^= r << o(s) - o(r);
    return a << 12 | s;
  }, i.getPatternPosition = function(a) {
    return e[a - 1];
  }, i.getMaskFunction = function(a) {
    switch (a) {
      case pr.PATTERN000:
        return function(s, u) {
          return (s + u) % 2 == 0;
        };
      case pr.PATTERN001:
        return function(s, u) {
          return s % 2 == 0;
        };
      case pr.PATTERN010:
        return function(s, u) {
          return u % 3 == 0;
        };
      case pr.PATTERN011:
        return function(s, u) {
          return (s + u) % 3 == 0;
        };
      case pr.PATTERN100:
        return function(s, u) {
          return (Math.floor(s / 2) + Math.floor(u / 3)) % 2 == 0;
        };
      case pr.PATTERN101:
        return function(s, u) {
          return s * u % 2 + s * u % 3 == 0;
        };
      case pr.PATTERN110:
        return function(s, u) {
          return (s * u % 2 + s * u % 3) % 2 == 0;
        };
      case pr.PATTERN111:
        return function(s, u) {
          return (s * u % 3 + (s + u) % 2) % 2 == 0;
        };
      default:
        throw "bad maskPattern:" + a;
    }
  }, i.getErrorCorrectPolynomial = function(a) {
    let s = Pn([1], 0);
    for (let u = 0; u < a; u += 1)
      s = s.multiply(Pn([1, _r.gexp(u)], 0));
    return s;
  }, i.getLengthInBits = function(a, s) {
    if (1 <= s && s < 10)
      switch (a) {
        case Je.MODE_NUMBER:
          return 10;
        case Je.MODE_ALPHA_NUM:
          return 9;
        case Je.MODE_8BIT_BYTE:
          return 8;
        case Je.MODE_KANJI:
          return 8;
        default:
          throw "mode:" + a;
      }
    else if (s < 27)
      switch (a) {
        case Je.MODE_NUMBER:
          return 12;
        case Je.MODE_ALPHA_NUM:
          return 11;
        case Je.MODE_8BIT_BYTE:
          return 16;
        case Je.MODE_KANJI:
          return 10;
        default:
          throw "mode:" + a;
      }
    else if (s < 41)
      switch (a) {
        case Je.MODE_NUMBER:
          return 14;
        case Je.MODE_ALPHA_NUM:
          return 13;
        case Je.MODE_8BIT_BYTE:
          return 16;
        case Je.MODE_KANJI:
          return 12;
        default:
          throw "mode:" + a;
      }
    else
      throw "type:" + s;
  }, i.getLostPoint = function(a) {
    const s = a.getModuleCount();
    let u = 0;
    for (let f = 0; f < s; f += 1)
      for (let d = 0; d < s; d += 1) {
        let C = 0;
        const k = a.isDark(f, d);
        for (let O = -1; O <= 1; O += 1)
          if (!(f + O < 0 || s <= f + O))
            for (let F = -1; F <= 1; F += 1)
              d + F < 0 || s <= d + F || O == 0 && F == 0 || k == a.isDark(f + O, d + F) && (C += 1);
        C > 5 && (u += 3 + C - 5);
      }
    for (let f = 0; f < s - 1; f += 1)
      for (let d = 0; d < s - 1; d += 1) {
        let C = 0;
        a.isDark(f, d) && (C += 1), a.isDark(f + 1, d) && (C += 1), a.isDark(f, d + 1) && (C += 1), a.isDark(f + 1, d + 1) && (C += 1), (C == 0 || C == 4) && (u += 3);
      }
    for (let f = 0; f < s; f += 1)
      for (let d = 0; d < s - 6; d += 1)
        a.isDark(f, d) && !a.isDark(f, d + 1) && a.isDark(f, d + 2) && a.isDark(f, d + 3) && a.isDark(f, d + 4) && !a.isDark(f, d + 5) && a.isDark(f, d + 6) && (u += 40);
    for (let f = 0; f < s; f += 1)
      for (let d = 0; d < s - 6; d += 1)
        a.isDark(d, f) && !a.isDark(d + 1, f) && a.isDark(d + 2, f) && a.isDark(d + 3, f) && a.isDark(d + 4, f) && !a.isDark(d + 5, f) && a.isDark(d + 6, f) && (u += 40);
    let c = 0;
    for (let f = 0; f < s; f += 1)
      for (let d = 0; d < s; d += 1)
        a.isDark(d, f) && (c += 1);
    const _ = Math.abs(100 * c / s / s - 50) / 5;
    return u += _ * 10, u;
  }, i;
})(), _r = (function() {
  const e = new Array(256), t = new Array(256);
  for (let n = 0; n < 8; n += 1)
    e[n] = 1 << n;
  for (let n = 8; n < 256; n += 1)
    e[n] = e[n - 4] ^ e[n - 5] ^ e[n - 6] ^ e[n - 8];
  for (let n = 0; n < 255; n += 1)
    t[e[n]] = n;
  const r = {};
  return r.glog = function(n) {
    if (n < 1)
      throw "glog(" + n + ")";
    return t[n];
  }, r.gexp = function(n) {
    for (; n < 0; )
      n += 255;
    for (; n >= 256; )
      n -= 255;
    return e[n];
  }, r;
})(), Pn = function(e, t) {
  if (typeof e.length > "u")
    throw e.length + "/" + t;
  const r = (function() {
    let i = 0;
    for (; i < e.length && e[i] == 0; )
      i += 1;
    const o = new Array(e.length - i + t);
    for (let a = 0; a < e.length - i; a += 1)
      o[a] = e[a + i];
    return o;
  })(), n = {};
  return n.getAt = function(i) {
    return r[i];
  }, n.getLength = function() {
    return r.length;
  }, n.multiply = function(i) {
    const o = new Array(n.getLength() + i.getLength() - 1);
    for (let a = 0; a < n.getLength(); a += 1)
      for (let s = 0; s < i.getLength(); s += 1)
        o[a + s] ^= _r.gexp(_r.glog(n.getAt(a)) + _r.glog(i.getAt(s)));
    return Pn(o, 0);
  }, n.mod = function(i) {
    if (n.getLength() - i.getLength() < 0)
      return n;
    const o = _r.glog(n.getAt(0)) - _r.glog(i.getAt(0)), a = new Array(n.getLength());
    for (let s = 0; s < n.getLength(); s += 1)
      a[s] = n.getAt(s);
    for (let s = 0; s < i.getLength(); s += 1)
      a[s] ^= _r.gexp(_r.glog(i.getAt(s)) + o);
    return Pn(a, 0).mod(i);
  }, n;
}, Is = (function() {
  const e = [
    // L
    // M
    // Q
    // H
    // 1
    [1, 26, 19],
    [1, 26, 16],
    [1, 26, 13],
    [1, 26, 9],
    // 2
    [1, 44, 34],
    [1, 44, 28],
    [1, 44, 22],
    [1, 44, 16],
    // 3
    [1, 70, 55],
    [1, 70, 44],
    [2, 35, 17],
    [2, 35, 13],
    // 4
    [1, 100, 80],
    [2, 50, 32],
    [2, 50, 24],
    [4, 25, 9],
    // 5
    [1, 134, 108],
    [2, 67, 43],
    [2, 33, 15, 2, 34, 16],
    [2, 33, 11, 2, 34, 12],
    // 6
    [2, 86, 68],
    [4, 43, 27],
    [4, 43, 19],
    [4, 43, 15],
    // 7
    [2, 98, 78],
    [4, 49, 31],
    [2, 32, 14, 4, 33, 15],
    [4, 39, 13, 1, 40, 14],
    // 8
    [2, 121, 97],
    [2, 60, 38, 2, 61, 39],
    [4, 40, 18, 2, 41, 19],
    [4, 40, 14, 2, 41, 15],
    // 9
    [2, 146, 116],
    [3, 58, 36, 2, 59, 37],
    [4, 36, 16, 4, 37, 17],
    [4, 36, 12, 4, 37, 13],
    // 10
    [2, 86, 68, 2, 87, 69],
    [4, 69, 43, 1, 70, 44],
    [6, 43, 19, 2, 44, 20],
    [6, 43, 15, 2, 44, 16],
    // 11
    [4, 101, 81],
    [1, 80, 50, 4, 81, 51],
    [4, 50, 22, 4, 51, 23],
    [3, 36, 12, 8, 37, 13],
    // 12
    [2, 116, 92, 2, 117, 93],
    [6, 58, 36, 2, 59, 37],
    [4, 46, 20, 6, 47, 21],
    [7, 42, 14, 4, 43, 15],
    // 13
    [4, 133, 107],
    [8, 59, 37, 1, 60, 38],
    [8, 44, 20, 4, 45, 21],
    [12, 33, 11, 4, 34, 12],
    // 14
    [3, 145, 115, 1, 146, 116],
    [4, 64, 40, 5, 65, 41],
    [11, 36, 16, 5, 37, 17],
    [11, 36, 12, 5, 37, 13],
    // 15
    [5, 109, 87, 1, 110, 88],
    [5, 65, 41, 5, 66, 42],
    [5, 54, 24, 7, 55, 25],
    [11, 36, 12, 7, 37, 13],
    // 16
    [5, 122, 98, 1, 123, 99],
    [7, 73, 45, 3, 74, 46],
    [15, 43, 19, 2, 44, 20],
    [3, 45, 15, 13, 46, 16],
    // 17
    [1, 135, 107, 5, 136, 108],
    [10, 74, 46, 1, 75, 47],
    [1, 50, 22, 15, 51, 23],
    [2, 42, 14, 17, 43, 15],
    // 18
    [5, 150, 120, 1, 151, 121],
    [9, 69, 43, 4, 70, 44],
    [17, 50, 22, 1, 51, 23],
    [2, 42, 14, 19, 43, 15],
    // 19
    [3, 141, 113, 4, 142, 114],
    [3, 70, 44, 11, 71, 45],
    [17, 47, 21, 4, 48, 22],
    [9, 39, 13, 16, 40, 14],
    // 20
    [3, 135, 107, 5, 136, 108],
    [3, 67, 41, 13, 68, 42],
    [15, 54, 24, 5, 55, 25],
    [15, 43, 15, 10, 44, 16],
    // 21
    [4, 144, 116, 4, 145, 117],
    [17, 68, 42],
    [17, 50, 22, 6, 51, 23],
    [19, 46, 16, 6, 47, 17],
    // 22
    [2, 139, 111, 7, 140, 112],
    [17, 74, 46],
    [7, 54, 24, 16, 55, 25],
    [34, 37, 13],
    // 23
    [4, 151, 121, 5, 152, 122],
    [4, 75, 47, 14, 76, 48],
    [11, 54, 24, 14, 55, 25],
    [16, 45, 15, 14, 46, 16],
    // 24
    [6, 147, 117, 4, 148, 118],
    [6, 73, 45, 14, 74, 46],
    [11, 54, 24, 16, 55, 25],
    [30, 46, 16, 2, 47, 17],
    // 25
    [8, 132, 106, 4, 133, 107],
    [8, 75, 47, 13, 76, 48],
    [7, 54, 24, 22, 55, 25],
    [22, 45, 15, 13, 46, 16],
    // 26
    [10, 142, 114, 2, 143, 115],
    [19, 74, 46, 4, 75, 47],
    [28, 50, 22, 6, 51, 23],
    [33, 46, 16, 4, 47, 17],
    // 27
    [8, 152, 122, 4, 153, 123],
    [22, 73, 45, 3, 74, 46],
    [8, 53, 23, 26, 54, 24],
    [12, 45, 15, 28, 46, 16],
    // 28
    [3, 147, 117, 10, 148, 118],
    [3, 73, 45, 23, 74, 46],
    [4, 54, 24, 31, 55, 25],
    [11, 45, 15, 31, 46, 16],
    // 29
    [7, 146, 116, 7, 147, 117],
    [21, 73, 45, 7, 74, 46],
    [1, 53, 23, 37, 54, 24],
    [19, 45, 15, 26, 46, 16],
    // 30
    [5, 145, 115, 10, 146, 116],
    [19, 75, 47, 10, 76, 48],
    [15, 54, 24, 25, 55, 25],
    [23, 45, 15, 25, 46, 16],
    // 31
    [13, 145, 115, 3, 146, 116],
    [2, 74, 46, 29, 75, 47],
    [42, 54, 24, 1, 55, 25],
    [23, 45, 15, 28, 46, 16],
    // 32
    [17, 145, 115],
    [10, 74, 46, 23, 75, 47],
    [10, 54, 24, 35, 55, 25],
    [19, 45, 15, 35, 46, 16],
    // 33
    [17, 145, 115, 1, 146, 116],
    [14, 74, 46, 21, 75, 47],
    [29, 54, 24, 19, 55, 25],
    [11, 45, 15, 46, 46, 16],
    // 34
    [13, 145, 115, 6, 146, 116],
    [14, 74, 46, 23, 75, 47],
    [44, 54, 24, 7, 55, 25],
    [59, 46, 16, 1, 47, 17],
    // 35
    [12, 151, 121, 7, 152, 122],
    [12, 75, 47, 26, 76, 48],
    [39, 54, 24, 14, 55, 25],
    [22, 45, 15, 41, 46, 16],
    // 36
    [6, 151, 121, 14, 152, 122],
    [6, 75, 47, 34, 76, 48],
    [46, 54, 24, 10, 55, 25],
    [2, 45, 15, 64, 46, 16],
    // 37
    [17, 152, 122, 4, 153, 123],
    [29, 74, 46, 14, 75, 47],
    [49, 54, 24, 10, 55, 25],
    [24, 45, 15, 46, 46, 16],
    // 38
    [4, 152, 122, 18, 153, 123],
    [13, 74, 46, 32, 75, 47],
    [48, 54, 24, 14, 55, 25],
    [42, 45, 15, 32, 46, 16],
    // 39
    [20, 147, 117, 4, 148, 118],
    [40, 75, 47, 7, 76, 48],
    [43, 54, 24, 22, 55, 25],
    [10, 45, 15, 67, 46, 16],
    // 40
    [19, 148, 118, 6, 149, 119],
    [18, 75, 47, 31, 76, 48],
    [34, 54, 24, 34, 55, 25],
    [20, 45, 15, 61, 46, 16]
  ], t = function(i, o) {
    const a = {};
    return a.totalCount = i, a.dataCount = o, a;
  }, r = {}, n = function(i, o) {
    switch (o) {
      case Rn.L:
        return e[(i - 1) * 4 + 0];
      case Rn.M:
        return e[(i - 1) * 4 + 1];
      case Rn.Q:
        return e[(i - 1) * 4 + 2];
      case Rn.H:
        return e[(i - 1) * 4 + 3];
      default:
        return;
    }
  };
  return r.getRSBlocks = function(i, o) {
    const a = n(i, o);
    if (typeof a > "u")
      throw "bad rs block @ typeNumber:" + i + "/errorCorrectionLevel:" + o;
    const s = a.length / 3, u = [];
    for (let c = 0; c < s; c += 1) {
      const _ = a[c * 3 + 0], f = a[c * 3 + 1], d = a[c * 3 + 2];
      for (let C = 0; C < _; C += 1)
        u.push(t(f, d));
    }
    return u;
  }, r;
})(), Os = function() {
  const e = [];
  let t = 0;
  const r = {};
  return r.getBuffer = function() {
    return e;
  }, r.getAt = function(n) {
    const i = Math.floor(n / 8);
    return (e[i] >>> 7 - n % 8 & 1) == 1;
  }, r.put = function(n, i) {
    for (let o = 0; o < i; o += 1)
      r.putBit((n >>> i - o - 1 & 1) == 1);
  }, r.getLengthInBits = function() {
    return t;
  }, r.putBit = function(n) {
    const i = Math.floor(t / 8);
    e.length <= i && e.push(0), n && (e[i] |= 128 >>> t % 8), t += 1;
  }, r;
}, Ql = function(e) {
  const t = Je.MODE_NUMBER, r = e, n = {};
  n.getMode = function() {
    return t;
  }, n.getLength = function(a) {
    return r.length;
  }, n.write = function(a) {
    const s = r;
    let u = 0;
    for (; u + 2 < s.length; )
      a.put(i(s.substring(u, u + 3)), 10), u += 3;
    u < s.length && (s.length - u == 1 ? a.put(i(s.substring(u, u + 1)), 4) : s.length - u == 2 && a.put(i(s.substring(u, u + 2)), 7));
  };
  const i = function(a) {
    let s = 0;
    for (let u = 0; u < a.length; u += 1)
      s = s * 10 + o(a.charAt(u));
    return s;
  }, o = function(a) {
    if ("0" <= a && a <= "9")
      return a.charCodeAt(0) - 48;
    throw "illegal char :" + a;
  };
  return n;
}, Zl = function(e) {
  const t = Je.MODE_ALPHA_NUM, r = e, n = {};
  n.getMode = function() {
    return t;
  }, n.getLength = function(o) {
    return r.length;
  }, n.write = function(o) {
    const a = r;
    let s = 0;
    for (; s + 1 < a.length; )
      o.put(
        i(a.charAt(s)) * 45 + i(a.charAt(s + 1)),
        11
      ), s += 2;
    s < a.length && o.put(i(a.charAt(s)), 6);
  };
  const i = function(o) {
    if ("0" <= o && o <= "9")
      return o.charCodeAt(0) - 48;
    if ("A" <= o && o <= "Z")
      return o.charCodeAt(0) - 65 + 10;
    switch (o) {
      case " ":
        return 36;
      case "$":
        return 37;
      case "%":
        return 38;
      case "*":
        return 39;
      case "+":
        return 40;
      case "-":
        return 41;
      case ".":
        return 42;
      case "/":
        return 43;
      case ":":
        return 44;
      default:
        throw "illegal char :" + o;
    }
  };
  return n;
}, zl = function(e) {
  const t = Je.MODE_8BIT_BYTE, r = yn.stringToBytes(e), n = {};
  return n.getMode = function() {
    return t;
  }, n.getLength = function(i) {
    return r.length;
  }, n.write = function(i) {
    for (let o = 0; o < r.length; o += 1)
      i.put(r[o], 8);
  }, n;
}, Xl = function(e) {
  const t = Je.MODE_KANJI, r = yn.stringToBytes;
  (function(o, a) {
    const s = r(o);
    if (s.length != 2 || (s[0] << 8 | s[1]) != a)
      throw "sjis not supported.";
  })("友", 38726);
  const n = r(e), i = {};
  return i.getMode = function() {
    return t;
  }, i.getLength = function(o) {
    return ~~(n.length / 2);
  }, i.write = function(o) {
    const a = n;
    let s = 0;
    for (; s + 1 < a.length; ) {
      let u = (255 & a[s]) << 8 | 255 & a[s + 1];
      if (33088 <= u && u <= 40956)
        u -= 33088;
      else if (57408 <= u && u <= 60351)
        u -= 49472;
      else
        throw "illegal char at " + (s + 1) + "/" + u;
      u = (u >>> 8 & 255) * 192 + (u & 255), o.put(u, 13), s += 2;
    }
    if (s < a.length)
      throw "illegal char at " + (s + 1);
  }, i;
}, Ro = function() {
  const e = [], t = {};
  return t.writeByte = function(r) {
    e.push(r & 255);
  }, t.writeShort = function(r) {
    t.writeByte(r), t.writeByte(r >>> 8);
  }, t.writeBytes = function(r, n, i) {
    n = n || 0, i = i || r.length;
    for (let o = 0; o < i; o += 1)
      t.writeByte(r[o + n]);
  }, t.writeString = function(r) {
    for (let n = 0; n < r.length; n += 1)
      t.writeByte(r.charCodeAt(n));
  }, t.toByteArray = function() {
    return e;
  }, t.toString = function() {
    let r = "";
    r += "[";
    for (let n = 0; n < e.length; n += 1)
      n > 0 && (r += ","), r += e[n];
    return r += "]", r;
  }, t;
}, eu = function() {
  let e = 0, t = 0, r = 0, n = "";
  const i = {}, o = function(s) {
    n += String.fromCharCode(a(s & 63));
  }, a = function(s) {
    if (s < 0)
      throw "n:" + s;
    if (s < 26)
      return 65 + s;
    if (s < 52)
      return 97 + (s - 26);
    if (s < 62)
      return 48 + (s - 52);
    if (s == 62)
      return 43;
    if (s == 63)
      return 47;
    throw "n:" + s;
  };
  return i.writeByte = function(s) {
    for (e = e << 8 | s & 255, t += 8, r += 1; t >= 6; )
      o(e >>> t - 6), t -= 6;
  }, i.flush = function() {
    if (t > 0 && (o(e << 6 - t), e = 0, t = 0), r % 3 != 0) {
      const s = 3 - r % 3;
      for (let u = 0; u < s; u += 1)
        n += "=";
    }
  }, i.toString = function() {
    return n;
  }, i;
}, tu = function(e) {
  const t = e;
  let r = 0, n = 0, i = 0;
  const o = {};
  o.read = function() {
    for (; i < 8; ) {
      if (r >= t.length) {
        if (i == 0)
          return -1;
        throw "unexpected end of file./" + i;
      }
      const u = t.charAt(r);
      if (r += 1, u == "=")
        return i = 0, -1;
      if (u.match(/^\s$/))
        continue;
      n = n << 6 | a(u.charCodeAt(0)), i += 6;
    }
    const s = n >>> i - 8 & 255;
    return i -= 8, s;
  };
  const a = function(s) {
    if (65 <= s && s <= 90)
      return s - 65;
    if (97 <= s && s <= 122)
      return s - 97 + 26;
    if (48 <= s && s <= 57)
      return s - 48 + 52;
    if (s == 43)
      return 62;
    if (s == 47)
      return 63;
    throw "c:" + s;
  };
  return o;
}, ru = function(e, t) {
  const r = e, n = t, i = new Array(e * t), o = {};
  o.setPixel = function(c, _, f) {
    i[_ * r + c] = f;
  }, o.write = function(c) {
    c.writeString("GIF87a"), c.writeShort(r), c.writeShort(n), c.writeByte(128), c.writeByte(0), c.writeByte(0), c.writeByte(0), c.writeByte(0), c.writeByte(0), c.writeByte(255), c.writeByte(255), c.writeByte(255), c.writeString(","), c.writeShort(0), c.writeShort(0), c.writeShort(r), c.writeShort(n), c.writeByte(0);
    const _ = 2, f = s(_);
    c.writeByte(_);
    let d = 0;
    for (; f.length - d > 255; )
      c.writeByte(255), c.writeBytes(f, d, 255), d += 255;
    c.writeByte(f.length - d), c.writeBytes(f, d, f.length - d), c.writeByte(0), c.writeString(";");
  };
  const a = function(c) {
    const _ = c;
    let f = 0, d = 0;
    const C = {};
    return C.write = function(k, O) {
      if (k >>> O)
        throw "length over";
      for (; f + O >= 8; )
        _.writeByte(255 & (k << f | d)), O -= 8 - f, k >>>= 8 - f, d = 0, f = 0;
      d = k << f | d, f = f + O;
    }, C.flush = function() {
      f > 0 && _.writeByte(d);
    }, C;
  }, s = function(c) {
    const _ = 1 << c, f = (1 << c) + 1;
    let d = c + 1;
    const C = u();
    for (let P = 0; P < _; P += 1)
      C.add(String.fromCharCode(P));
    C.add(String.fromCharCode(_)), C.add(String.fromCharCode(f));
    const k = Ro(), O = a(k);
    O.write(_, d);
    let F = 0, K = String.fromCharCode(i[F]);
    for (F += 1; F < i.length; ) {
      const P = String.fromCharCode(i[F]);
      F += 1, C.contains(K + P) ? K = K + P : (O.write(C.indexOf(K), d), C.size() < 4095 && (C.size() == 1 << d && (d += 1), C.add(K + P)), K = P);
    }
    return O.write(C.indexOf(K), d), O.write(f, d), O.flush(), k.toByteArray();
  }, u = function() {
    const c = {};
    let _ = 0;
    const f = {};
    return f.add = function(d) {
      if (f.contains(d))
        throw "dup key:" + d;
      c[d] = _, _ += 1;
    }, f.size = function() {
      return _;
    }, f.indexOf = function(d) {
      return c[d];
    }, f.contains = function(d) {
      return typeof c[d] < "u";
    }, f;
  };
  return o;
}, nu = function(e, t, r) {
  const n = ru(e, t);
  for (let s = 0; s < t; s += 1)
    for (let u = 0; u < e; u += 1)
      n.setPixel(u, s, r(u, s));
  const i = Ro();
  n.write(i);
  const o = eu(), a = i.toByteArray();
  for (let s = 0; s < a.length; s += 1)
    o.writeByte(a[s]);
  return o.flush(), "data:image/gif;base64," + o;
};
yn.stringToBytes;
var iu = /* @__PURE__ */ N("<div> </div>"), su = /* @__PURE__ */ N('<div class="fixed top-4 right-4 z-50 flex flex-col gap-2"></div>'), ou = /* @__PURE__ */ N('<div class="mt-4 pt-4 border-t border-blue-200"><div class="flex items-start gap-4"><div class="bg-white border border-gray-200 rounded-lg p-2 shrink-0" style="width: 200px; height: 200px;"></div> <div class="flex flex-col gap-2"><span class="text-sm font-medium text-blue-800">QR Code</span> <p class="text-xs text-gray-600">Scan to open the invitation link. Share via screenshot, print, or display on screen.</p> <button class="mt-1 inline-flex items-center gap-1.5 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors w-fit"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg> Download QR</button></div></div></div>'), au = /* @__PURE__ */ N('<div class="mt-4 border border-blue-200 bg-blue-50 rounded-lg p-4"><div class="flex items-center gap-2 mb-2"><span class="text-blue-800 font-medium text-sm">Invitation Link</span></div> <div class="flex items-center gap-2"><code class="flex-1 bg-white border border-blue-200 rounded px-3 py-2 text-sm font-mono break-all select-all"> </code> <button> </button></div> <p class="mt-2 text-sm text-amber-700 font-medium">⚠ Copy this link now — it cannot be retrieved later.</p> <!></div>'), lu = /* @__PURE__ */ N('<div class="text-center py-10"><div class="inline-block animate-spin h-8 w-8 border-4 border-blue-500 border-t-transparent rounded-full"></div> <p class="mt-2 text-gray-600">Loading invitations…</p></div>'), uu = /* @__PURE__ */ N('<div class="text-center py-10"><p class="text-gray-500">No invitation codes found.</p></div>'), cu = /* @__PURE__ */ N('<button class="px-3 py-1 text-xs font-medium text-red-600 border border-red-200 rounded-lg hover:bg-red-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"> </button>'), fu = /* @__PURE__ */ N('<tr class="hover:bg-gray-50 transition-colors"><td class="px-4 py-3"><span class="font-mono text-xs bg-gray-100 px-2 py-1 rounded cursor-help"> </span></td><td class="px-4 py-3"><span> </span></td><td class="px-4 py-3 text-gray-700"> </td><td class="px-4 py-3"><span> </span></td><td class="px-4 py-3 text-gray-600 text-xs"> </td><td class="px-4 py-3 text-right"><!></td></tr>'), du = /* @__PURE__ */ N('<div class="overflow-x-auto"><table class="w-full text-sm"><thead class="bg-gray-50 border-b border-gray-200"><tr><th class="px-4 py-3 text-left font-medium text-gray-600">Code Hash</th><th class="px-4 py-3 text-left font-medium text-gray-600">Profile</th><th class="px-4 py-3 text-left font-medium text-gray-600">Uses</th><th class="px-4 py-3 text-left font-medium text-gray-600">Status</th><th class="px-4 py-3 text-left font-medium text-gray-600">Expires</th><th class="px-4 py-3 text-right font-medium text-gray-600">Actions</th></tr></thead><tbody class="divide-y divide-gray-200"></tbody></table></div>'), vu = /* @__PURE__ */ N('<!> <div class="space-y-6"><div class="bg-white shadow-sm rounded-lg p-6 border border-gray-200"><h2 class="text-lg font-semibold text-gray-900 mb-4">Generate New Invitation</h2> <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4"><div><label for="inv-profile" class="block text-sm font-medium text-gray-700 mb-1">Profile</label> <select id="inv-profile" class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"><option>Member</option><option>Administrator</option></select></div> <div><label for="inv-max-uses" class="block text-sm font-medium text-gray-700 mb-1">Max Uses</label> <input id="inv-max-uses" type="number" min="1" class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/></div> <div><label for="inv-expiry" class="block text-sm font-medium text-gray-700 mb-1">Expires in (hours)</label> <input id="inv-expiry" type="number" min="1" class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/></div></div> <button class="px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed font-medium transition-colors"> </button> <!></div> <div class="bg-white shadow-sm rounded-lg border border-gray-200"><div class="px-6 py-4 border-b border-gray-200 flex items-center justify-between"><h2 class="text-lg font-semibold text-gray-900">Invitations</h2> <button class="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50" title="Refresh"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg></button></div> <!></div></div>', 1);
function gu(e, t) {
  vi(t, !0);
  const r = t.ctx.theme?.cn ?? ((...L) => L.filter(Boolean).join(" "));
  let n = /* @__PURE__ */ D(Vt([])), i = /* @__PURE__ */ D(0), o = /* @__PURE__ */ D("member"), a = /* @__PURE__ */ D(1), s = /* @__PURE__ */ D(24), u = /* @__PURE__ */ D(!1), c = /* @__PURE__ */ D(null), _ = /* @__PURE__ */ D(!1), f = /* @__PURE__ */ D(null), d = /* @__PURE__ */ D(Vt([])), C = /* @__PURE__ */ D(!1), k = /* @__PURE__ */ D(null);
  function O(L, Y = "success") {
    const Z = no(i);
    b(n, [...l(n), { id: Z, text: L, type: Y }], !0), setTimeout(
      () => {
        b(n, l(n).filter((ie) => ie.id !== Z), !0);
      },
      4e3
    );
  }
  function F(L) {
    const Y = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", Z = crypto.getRandomValues(new Uint8Array(L));
    return Array.from(Z, (ie) => Y[ie % Y.length]).join("");
  }
  async function K(L) {
    const Z = new TextEncoder().encode(L), ie = await crypto.subtle.digest("SHA-256", Z);
    return Array.from(new Uint8Array(ie)).map((ve) => ve.toString(16).padStart(2, "0")).join("");
  }
  async function P() {
    b(u, !0), b(c, null), b(f, null), b(_, !1);
    try {
      const L = F(16), Y = await K(L);
      await t.ctx.callSync("generate_registration_url", {
        code_hash: Y,
        profile: l(o),
        max_uses: l(a),
        expires_in_hours: l(s),
        user_id: "admin",
        created_by: "admin",
        frontend_url: ""
      });
      const Z = `${window.location.origin}/join?invite=${L}`;
      b(c, Z), b(f, he(Z), !0), O("Invitation code generated successfully"), await xe();
    } catch (L) {
      O(`Failed to generate invitation: ${L?.message || String(L)}`, "error");
    } finally {
      b(u, !1);
    }
  }
  async function te() {
    l(c) && (await navigator.clipboard.writeText(l(c)), b(_, !0), O("Link copied to clipboard"), setTimeout(
      () => {
        b(_, !1);
      },
      3e3
    ));
  }
  function he(L) {
    const Y = yn(0, "M");
    Y.addData(L), Y.make();
    const Z = Y.getModuleCount(), ie = 4, Me = Z + ie * 2, ve = [];
    for (let Ie = 0; Ie < Z; Ie++)
      for (let vt = 0; vt < Z; vt++)
        Y.isDark(Ie, vt) && ve.push(`<rect x="${vt + ie}" y="${Ie + ie}" width="1" height="1"/>`);
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${Me} ${Me}" shape-rendering="crispEdges"><rect width="${Me}" height="${Me}" fill="#fff"/><g fill="#000">${ve.join("")}</g></svg>`;
  }
  function fe() {
    if (!l(f)) return;
    const L = 400, Y = document.createElement("canvas");
    Y.width = L, Y.height = L;
    const Z = Y.getContext("2d"), ie = new Image(), Me = new Blob([l(f)], { type: "image/svg+xml;charset=utf-8" }), ve = URL.createObjectURL(Me);
    ie.onload = () => {
      Z.fillStyle = "#fff", Z.fillRect(0, 0, L, L), Z.drawImage(ie, 0, 0, L, L), URL.revokeObjectURL(ve);
      const Ie = document.createElement("a");
      Ie.download = "invite-qr.png", Ie.href = Y.toDataURL("image/png"), Ie.click(), O("QR code downloaded");
    }, ie.src = ve;
  }
  async function xe() {
    b(C, !0);
    try {
      const L = await t.ctx.callSync("get_registration_codes", { include_used: !0 }), Y = L?.data ?? L;
      b(d, Array.isArray(Y) ? Y : Y?.codes ?? [], !0);
    } catch (L) {
      O(`Failed to load codes: ${L?.message || String(L)}`, "error"), b(d, [], !0);
    } finally {
      b(C, !1);
    }
  }
  async function x(L) {
    b(k, L, !0);
    try {
      await t.ctx.callSync("revoke_registration_code", { code_hash: L }), O("Invitation revoked"), await xe();
    } catch (Y) {
      O(`Failed to revoke: ${Y?.message || String(Y)}`, "error");
    } finally {
      b(k, null);
    }
  }
  function w(L) {
    return L.revoked ? { label: "Revoked", color: "bg-red-100 text-red-700" } : L.max_uses > 0 && L.uses_count >= L.max_uses ? { label: "Used", color: "bg-gray-100 text-gray-700" } : L.expires_at && new Date(L.expires_at) < /* @__PURE__ */ new Date() ? { label: "Expired", color: "bg-yellow-100 text-yellow-700" } : { label: "Active", color: "bg-green-100 text-green-700" };
  }
  function g(L) {
    if (!L) return "Never";
    const Y = new Date(L), Z = /* @__PURE__ */ new Date(), ie = Y.getTime() - Z.getTime();
    return ie < 0 ? "Expired" : ie < 36e5 ? `${Math.round(ie / 6e4)}m remaining` : ie < 864e5 ? `${Math.round(ie / 36e5)}h remaining` : Y.toLocaleDateString();
  }
  co(() => {
    xe();
  });
  var E = vu(), y = ze(E);
  {
    var M = (L) => {
      var Y = su();
      Zt(Y, 21, () => l(n), (Z) => Z.id, (Z, ie) => {
        var Me = iu(), ve = h(Me);
        U(
          (Ie) => {
            tt(Me, 1, Ie), j(ve, l(ie).text);
          },
          [
            () => et(r("px-4 py-3 rounded-lg shadow-lg text-sm font-medium transition-all", l(ie).type === "error" ? "bg-red-600 text-white" : "bg-green-600 text-white"))
          ]
        ), T(Z, Me);
      }), T(L, Y);
    };
    G(y, (L) => {
      l(n).length > 0 && L(M);
    });
  }
  var I = m(y, 2), X = h(I), re = m(h(X), 2), de = h(re), B = m(h(de), 2), ae = h(B);
  ae.value = ae.__value = "member";
  var me = m(ae);
  me.value = me.__value = "admin";
  var ye = m(de, 2), ir = m(h(ye), 2), sr = m(ye, 2), Ne = m(h(sr), 2), dt = m(re, 2), Kr = h(dt), Qr = m(dt, 2);
  {
    var wn = (L) => {
      var Y = au(), Z = m(h(Y), 2), ie = h(Z), Me = h(ie), ve = m(ie, 2), Ie = h(ve), vt = m(Z, 4);
      {
        var Xr = (it) => {
          var or = ou(), Gt = h(or), Bt = h(Gt);
          Fl(Bt, () => l(f), !0);
          var Et = m(Bt, 2), At = m(h(Et), 4);
          ee("click", At, fe), T(it, or);
        };
        G(vt, (it) => {
          l(f) && it(Xr);
        });
      }
      U(
        (it) => {
          j(Me, l(c)), tt(ve, 1, it), j(Ie, l(_) ? "Copied!" : "Copy");
        },
        [
          () => et(r("px-4 py-2 rounded-lg text-sm font-medium transition-colors shrink-0", l(_) ? "bg-green-600 text-white" : "bg-blue-600 text-white hover:bg-blue-700"))
        ]
      ), ee("click", ve, te), T(L, Y);
    };
    G(Qr, (L) => {
      l(c) && L(wn);
    });
  }
  var Zr = m(X, 2), Ar = h(Zr), zr = m(h(Ar), 2), kn = m(Ar, 2);
  {
    var Ot = (L) => {
      var Y = lu();
      T(L, Y);
    }, Cr = (L) => {
      var Y = uu();
      T(L, Y);
    }, En = (L) => {
      var Y = du(), Z = h(Y), ie = m(h(Z));
      Zt(ie, 21, () => l(d), Tr, (Me, ve) => {
        const Ie = /* @__PURE__ */ Mr(() => w(l(ve)));
        var vt = fu(), Xr = h(vt), it = h(Xr), or = h(it), Gt = m(Xr), Bt = h(Gt), Et = h(Bt), At = m(Gt), ar = h(At), lr = m(At), Ct = h(lr), Pt = h(Ct), ur = m(lr), St = h(ur), Mt = m(ur), An = h(Mt);
        {
          var Gn = (cr) => {
            var $t = cu(), en = h($t);
            U(() => {
              $t.disabled = l(k) === l(ve).code_hash, j(en, l(k) === l(ve).code_hash ? "Revoking…" : "Revoke");
            }), ee("click", $t, () => x(l(ve).code_hash)), T(cr, $t);
          };
          G(An, (cr) => {
            !l(ve).revoked && !(l(ve).max_uses > 0 && l(ve).uses_count >= l(ve).max_uses) && cr(Gn);
          });
        }
        U(
          (cr, $t, en, bi) => {
            ri(it, "title", l(ve).code_hash), j(or, `${cr ?? ""}…`), tt(Bt, 1, $t), j(Et, l(ve).profile === "admin" ? "Admin" : "Member"), j(ar, `${l(ve).uses_count ?? ""} / ${(l(ve).max_uses || "∞") ?? ""}`), tt(Ct, 1, en), j(Pt, l(Ie).label), j(St, bi);
          },
          [
            () => l(ve).code_hash.slice(0, 12),
            () => et(r("px-2 py-0.5 rounded-full text-xs font-medium", l(ve).profile === "admin" ? "bg-purple-100 text-purple-700" : "bg-blue-100 text-blue-700")),
            () => et(r("px-2 py-0.5 rounded-full text-xs font-medium", l(Ie).color)),
            () => g(l(ve).expires_at)
          ]
        ), T(Me, vt);
      }), T(L, Y);
    };
    G(kn, (L) => {
      l(C) ? L(Ot) : l(d).length === 0 ? L(Cr, 1) : L(En, -1);
    });
  }
  U(() => {
    dt.disabled = l(u), j(Kr, l(u) ? "Generating…" : "Generate Invitation"), zr.disabled = l(C);
  }), Do(B, () => l(o), (L) => b(o, L)), Ft(ir, () => l(a), (L) => b(a, L)), Ft(Ne, () => l(s), (L) => b(s, L)), ee("click", dt, P), ee("click", zr, xe), T(e, E), gi();
}
ss(["click"]);
var pu = /* @__PURE__ */ N('<div class="p-6 text-center"><div class="w-14 h-14 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center"><svg class="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg></div> <h3 class="text-xl font-bold text-gray-900 mb-2">Proposal Created</h3> <p class="text-gray-600 mb-1">Your proposal <strong> </strong> has been submitted and voting is now open.</p> <p class="text-sm text-gray-500 mb-6">Realm members can now vote on this proposal in the Voting page.</p> <div class="flex justify-center gap-3"><button class="px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium transition-colors">Go to Voting</button> <button class="px-5 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 font-medium transition-colors">Close</button></div></div>'), hu = /* @__PURE__ */ N('<div class="p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-800"> </div>'), _u = /* @__PURE__ */ N('<div class="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div> Submitting...', 1), bu = /* @__PURE__ */ Dl('<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path></svg> Create Proposal & Start Voting', 1), xu = /* @__PURE__ */ N(
  `<div class="px-6 py-4 border-b border-gray-200"><div class="flex items-start justify-between"><div><h3 class="text-lg font-bold text-gray-900">Create Governance Proposal</h3> <p class="text-sm text-gray-500 mt-0.5">You don't have the <code class="text-xs bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded"> </code> permission. Submit a proposal for the realm to vote on.</p></div> <button class="text-gray-400 hover:text-gray-600 p-1"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div></div> <div class="p-6 space-y-4"><div><div class="text-sm font-medium text-gray-700 mb-1">Proposal Title</div> <div class="px-3 py-2 bg-gray-50 rounded-lg border border-gray-200 text-sm text-gray-800"> </div></div> <div><div class="text-sm font-medium text-gray-700 mb-1">Description</div> <div class="px-3 py-2 bg-gray-50 rounded-lg border border-gray-200 text-sm text-gray-800 whitespace-pre-wrap"> </div></div> <div><div class="flex items-center gap-2 mb-1"><svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg> <span class="text-sm font-medium text-gray-700">Code to Execute</span></div> <div class="bg-gray-900 rounded-lg overflow-hidden"><pre class="p-4 overflow-x-auto text-sm"><code class="text-gray-100"> </code></pre></div></div> <div class="bg-amber-50 border border-amber-200 rounded-lg p-3"><p class="text-xs text-amber-800"><strong>How it works:</strong> This will create a proposal visible to all realm members.
							Once enough members vote "Yes" (meeting the threshold and quorum), the code above will be
							executed automatically on the realm backend.</p></div> <!></div> <div class="px-6 py-4 border-t border-gray-200 flex justify-end gap-3"><button class="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 font-medium text-sm disabled:opacity-50 transition-colors">Cancel</button> <button class="inline-flex items-center gap-2 px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium text-sm disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"><!></button></div>`,
  1
), mu = /* @__PURE__ */ N('<div class="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"><div class="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"><!></div></div>');
function yu(e, t) {
  vi(t, !0);
  let r = nn(t, "open", 3, !1), n = nn(t, "title", 3, ""), i = nn(t, "description", 3, ""), o = nn(t, "codeInline", 3, ""), a = nn(t, "deniedOperation", 3, ""), s = nn(t, "onclose", 3, () => {
  }), u = /* @__PURE__ */ D(!1), c = /* @__PURE__ */ D(!1), _ = /* @__PURE__ */ D(""), f = /* @__PURE__ */ D("");
  async function d() {
    b(u, !0), b(_, "");
    try {
      const P = await t.ctx.backend.extension_sync_call("voting", "submit_proposal", JSON.stringify({
        title: n(),
        description: i(),
        code_inline: o(),
        auto_start_voting: !0
      })), te = typeof P == "string" ? JSON.parse(P) : P;
      if (te?.success === !1) {
        b(_, te.response ?? "Failed to submit proposal", !0);
        return;
      }
      const he = te?.response ? typeof te.response == "string" ? JSON.parse(te.response) : te.response : te;
      he?.success ? (b(c, !0), b(f, he.data?.id || "", !0)) : b(_, he?.error || "Failed to submit proposal", !0);
    } catch (P) {
      b(_, P?.message || String(P), !0);
    } finally {
      b(u, !1);
    }
  }
  function C() {
    b(c, !1), b(_, ""), b(f, ""), s()();
  }
  function k() {
    t.ctx.navigate?.("/extensions/voting"), C();
  }
  var O = Rl(), F = ze(O);
  {
    var K = (P) => {
      var te = mu(), he = h(te), fe = h(he);
      {
        var xe = (w) => {
          var g = pu(), E = m(h(g), 4), y = m(h(E)), M = h(y), I = m(E, 4), X = h(I), re = m(X, 2);
          U(() => j(M, l(f))), ee("click", X, k), ee("click", re, C), T(w, g);
        }, x = (w) => {
          var g = xu(), E = ze(g), y = h(E), M = h(y), I = m(h(M), 2), X = m(h(I)), re = h(X), de = m(M, 2), B = m(E, 2), ae = h(B), me = m(h(ae), 2), ye = h(me), ir = m(ae, 2), sr = m(h(ir), 2), Ne = h(sr), dt = m(ir, 2), Kr = m(h(dt), 2), Qr = h(Kr), wn = h(Qr), Zr = h(wn), Ar = m(dt, 4);
          {
            var zr = (Z) => {
              var ie = hu(), Me = h(ie);
              U(() => j(Me, l(_))), T(Z, ie);
            };
            G(Ar, (Z) => {
              l(_) && Z(zr);
            });
          }
          var kn = m(B, 2), Ot = h(kn), Cr = m(Ot, 2), En = h(Cr);
          {
            var L = (Z) => {
              var ie = _u();
              T(Z, ie);
            }, Y = (Z) => {
              var ie = bu();
              T(Z, ie);
            };
            G(En, (Z) => {
              l(u) ? Z(L) : Z(Y, -1);
            });
          }
          U(() => {
            j(re, a()), j(ye, n()), j(Ne, i()), j(Zr, o()), Ot.disabled = l(u), Cr.disabled = l(u);
          }), ee("click", de, C), ee("click", Ot, C), ee("click", Cr, d), T(w, g);
        };
        G(fe, (w) => {
          l(c) ? w(xe) : w(x, -1);
        });
      }
      ee("keydown", te, (w) => w.key === "Escape" && C()), ee("click", he, (w) => w.stopPropagation()), T(P, te);
    };
    G(F, (P) => {
      r() && P(K);
    });
  }
  T(e, O), gi();
}
ss(["keydown", "click"]);
var wu = /* @__PURE__ */ N("<div> </div>"), ku = /* @__PURE__ */ N('<div class="fixed top-4 right-4 z-50 flex flex-col gap-2"></div>'), Eu = /* @__PURE__ */ N('<br/><span class="text-gray-500"> </span>', 1), Au = /* @__PURE__ */ N('<div class="fixed inset-0 bg-black/50 z-40 flex items-center justify-center"><div class="bg-white rounded-xl shadow-xl p-6 max-w-md mx-4"><h3 class="text-lg font-bold text-gray-900 mb-2">Confirm Delete</h3> <p class="text-gray-600 mb-4">Are you sure you want to delete <strong> </strong>? <!></p> <p class="text-red-600 text-sm mb-4">This action cannot be undone.</p> <div class="flex justify-end gap-3"><button class="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 font-medium">Cancel</button> <button class="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 font-medium">Delete</button></div></div></div>'), Cu = /* @__PURE__ */ N('<div class="mb-4 bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg text-sm"> <button class="ml-2 text-red-600 hover:text-red-800 font-bold">&times;</button></div>'), Su = /* @__PURE__ */ N('<div class="text-xs text-gray-400">Loading…</div>'), Mu = /* @__PURE__ */ N('<div class="text-xs text-red-500"> </div>'), Tu = /* @__PURE__ */ N('<span class="mx-1">·</span> <span class="text-yellow-600 font-medium"> </span>', 1), Du = /* @__PURE__ */ N('<div class="text-xs text-gray-500"> <!></div>'), Ru = /* @__PURE__ */ N('<div class="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4"><div class="bg-white shadow-sm rounded-lg p-4 border border-gray-200"><div class="text-xs text-gray-500 uppercase tracking-wide">Entity Types</div> <div class="text-2xl font-bold text-gray-900 mt-1"> </div></div> <div class="bg-white shadow-sm rounded-lg p-4 border border-gray-200"><div class="text-xs text-gray-500 uppercase tracking-wide">Extensions</div> <div class="text-2xl font-bold text-gray-900 mt-1"> </div></div> <div class="bg-white shadow-sm rounded-lg p-4 border border-gray-200"><div class="text-xs text-gray-500 uppercase tracking-wide">Codexes</div> <div class="text-2xl font-bold text-gray-900 mt-1"> </div></div> <div class="bg-white shadow-sm rounded-lg p-4 border border-gray-200"><div class="text-xs text-gray-500 uppercase tracking-wide">Updates</div> <div> </div></div></div>'), Lu = /* @__PURE__ */ N('<div class="flex items-center gap-2 text-gray-400 text-sm"><div class="animate-spin h-4 w-4 border-2 border-blue-500 border-t-transparent rounded-full"></div> Loading types…</div>'), Nu = /* @__PURE__ */ N("<option> </option>"), Iu = /* @__PURE__ */ N('<select id="entity-type-select" class="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"></select>'), Ou = /* @__PURE__ */ N("<button> </button>"), Bu = /* @__PURE__ */ N('<div class="text-center py-10 p-6"><div class="inline-block animate-spin h-8 w-8 border-4 border-blue-500 border-t-transparent rounded-full"></div> <p class="mt-2 text-gray-600">Loading data…</p></div>'), Pu = /* @__PURE__ */ N('<div class="text-center py-10 p-6"><p class="text-gray-500 text-lg">No items loaded. Select an entity type and click "Load Data".</p></div>'), ju = /* @__PURE__ */ N('<span class="text-gray-700 truncate"> </span>'), Fu = /* @__PURE__ */ N('<div class="min-w-0"><span class="font-semibold text-gray-700"> </span> <span class="text-gray-600 ml-2 break-all"> </span></div>'), Uu = /* @__PURE__ */ N('<div class="mt-4 bg-gray-50 rounded-lg p-4 border border-gray-200"><div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm"></div> <div class="mt-3 pt-3 border-t border-gray-200"><details><summary class="text-xs text-gray-500 cursor-pointer hover:text-gray-700">Raw JSON</summary> <pre class="mt-2 p-3 bg-white rounded border border-gray-200 text-xs font-mono overflow-auto max-h-64 whitespace-pre-wrap break-all"> </pre></details></div></div>'), Hu = /* @__PURE__ */ N('<div class="p-4 hover:bg-gray-50 transition"><div class="flex items-center justify-between"><div class="flex-1 min-w-0"><div class="flex items-center gap-3"><button class="text-blue-600 hover:text-blue-800 font-medium whitespace-nowrap"> </button> <!></div></div> <div class="flex items-center gap-1 ml-2 shrink-0"><button class="p-1.5 hover:bg-gray-100 text-gray-600 hover:text-gray-900 rounded transition-colors" title="Copy JSON"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path></svg></button> <button class="p-1.5 hover:bg-red-50 text-gray-400 hover:text-red-600 rounded transition-colors disabled:opacity-50" title="Delete entity"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg></button></div></div> <!></div>'), Ju = /* @__PURE__ */ N('<div class="border-t border-gray-200 p-4 flex items-center justify-between"><div class="flex items-center gap-2"><button class="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed text-sm">First</button> <button class="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed text-sm">Prev</button></div> <span class="text-sm text-gray-600"> </span> <div class="flex items-center gap-2"><button class="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed text-sm">Next</button> <button class="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed text-sm">Last</button></div></div>'), Vu = /* @__PURE__ */ N('<div class="divide-y divide-gray-200"></div> <!>', 1), Yu = /* @__PURE__ */ N('<div class="mb-4 flex items-center gap-4"><button class="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed font-medium transition-colors"> </button> <div class="ml-auto text-gray-600 text-sm"><!></div></div> <div class="bg-white shadow-sm rounded-lg"><!></div>', 1), qu = /* @__PURE__ */ N('<div class="flex items-center gap-3 text-gray-600"><div class="animate-spin h-5 w-5 border-2 border-blue-500 border-t-transparent rounded-full"></div> Exporting…</div>'), Gu = /* @__PURE__ */ N(", <strong> </strong> codexes", 1), $u = /* @__PURE__ */ N('<div class="border border-gray-200 rounded-lg overflow-hidden"><div class="bg-gray-50 px-4 py-3 flex items-center justify-between border-b border-gray-200 flex-wrap gap-2"><div class="text-sm text-gray-700"><strong> </strong> entities <!></div> <div class="flex gap-2"><button class="px-4 py-1.5 bg-green-600 text-white text-sm rounded-lg hover:bg-green-700 font-medium transition-colors">Download JSON</button> <button class="px-4 py-1.5 border border-gray-300 text-sm rounded-lg hover:bg-gray-50 font-medium transition-colors">Copy to Clipboard</button></div></div> <div class="max-h-96 overflow-auto"><pre class="p-4 text-xs text-gray-800 font-mono whitespace-pre-wrap break-all"> </pre></div></div>'), Wu = /* @__PURE__ */ N('<div class="bg-white shadow-sm rounded-lg p-6"><h2 class="text-lg font-semibold text-gray-900 mb-4">Export Entities</h2> <p class="text-gray-600 text-sm mb-6">Export entities as a JSON file. You can export a single entity type or all types at once.</p> <div class="flex gap-3 mb-6"><button class="px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed font-medium transition-colors"> </button> <button class="px-5 py-2.5 bg-gray-700 text-white rounded-lg hover:bg-gray-800 disabled:bg-gray-400 disabled:cursor-not-allowed font-medium transition-colors"> </button></div> <!> <!></div>'), Ku = /* @__PURE__ */ N('<p class="text-blue-600 font-medium"> </p> <p class="text-sm text-gray-500 mt-1">Click or drop to replace</p>', 1), Qu = /* @__PURE__ */ N('<svg class="mx-auto h-10 w-10 text-gray-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg> <p class="text-gray-600 font-medium">Drop a JSON file here or click to browse</p> <p class="text-sm text-gray-400 mt-1">Accepts .json files</p>', 1), Zu = /* @__PURE__ */ N('<div role="button" tabindex="0"><input type="file" accept=".json" class="hidden"/> <!></div>'), zu = /* @__PURE__ */ N('<button class="absolute top-2 right-2 px-2 py-1 text-xs text-gray-500 hover:text-gray-700 bg-white border border-gray-200 rounded">Clear</button>'), Xu = /* @__PURE__ */ N('<div class="relative"><textarea class="w-full h-64 p-4 border border-gray-300 rounded-lg font-mono text-sm resize-y focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" spellcheck="false"></textarea> <!></div>'), ec = /* @__PURE__ */ N('<span class="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"> </span>'), tc = /* @__PURE__ */ N('<div class="bg-green-50 px-4 py-3 border-b border-green-200"><p class="text-sm font-medium text-green-800"> <!></p></div> <div class="px-4 py-3"><div class="flex flex-wrap gap-2"></div> <div class="mt-4 flex gap-3"><button class="px-5 py-2.5 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed font-medium transition-colors"> </button> <button class="px-5 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 font-medium disabled:opacity-50 transition-colors">Cancel</button></div></div>', 1), rc = /* @__PURE__ */ N('<div class="bg-red-50 px-4 py-3"><p class="text-sm font-medium text-red-800">Invalid JSON</p> <p class="text-sm text-red-600 mt-1"> </p></div>'), nc = /* @__PURE__ */ N("<div><!></div>"), ic = /* @__PURE__ */ N("<li> </li>"), sc = /* @__PURE__ */ N('<ul class="mt-1 list-disc list-inside text-red-600"></ul>'), oc = /* @__PURE__ */ N('<p class="text-red-600"> </p> <!>', 1), ac = /* @__PURE__ */ N('<div class="mt-2 text-sm text-green-700"><p> </p> <p> </p> <!></div>'), lc = /* @__PURE__ */ N('<p class="text-sm font-medium text-green-800">Import complete</p> <!>', 1), uc = /* @__PURE__ */ N('<p class="text-sm font-medium text-red-800">Import failed</p> <p class="text-sm text-red-600 mt-1"> </p>', 1), cc = /* @__PURE__ */ N('<div><div class="px-4 py-3"><!></div></div>'), fc = /* @__PURE__ */ N('<div class="bg-white shadow-sm rounded-lg p-6"><h2 class="text-lg font-semibold text-gray-900 mb-4">Import Entities</h2> <p class="text-gray-600 text-sm mb-6">Import entities from a JSON file or paste JSON directly. Existing entities with the same type and ID will be updated (upsert).</p> <div class="flex gap-2 mb-4"><button>Upload File</button> <button>JSON Editor</button></div> <!> <!> <!></div>'), dc = /* @__PURE__ */ N('<div class="flex items-center justify-center py-10"><div class="animate-spin h-8 w-8 border-4 border-blue-500 border-t-transparent rounded-full"></div></div>'), vc = /* @__PURE__ */ N('<div class="mt-2 flex items-center gap-3"><img alt="Logo preview" class="h-12 w-12 object-contain rounded border border-gray-200 bg-gray-50"/> <span class="text-xs text-gray-500">Preview</span></div>'), gc = /* @__PURE__ */ N('<div class="mt-2"><img alt="Background preview" class="h-24 w-full object-cover rounded border border-gray-200"/> <span class="text-xs text-gray-500">Preview</span></div>'), pc = /* @__PURE__ */ N('<p class="mt-1 text-xs text-red-600">Invalid canister ID format. Expected format: xxxxx-xxxxx-...-cai</p>'), hc = /* @__PURE__ */ N('<p class="mt-1 text-xs text-red-600">Invalid canister ID format. Expected format: xxxxx-xxxxx-...-cai</p>'), _c = /* @__PURE__ */ N('<div class="p-3 bg-green-50 border border-green-200 rounded-lg text-sm text-green-800"> </div>'), bc = /* @__PURE__ */ N('<div class="p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-800"> </div>'), xc = /* @__PURE__ */ N(`<div class="space-y-5"><div><label for="rs-name" class="block text-sm font-medium text-gray-700 mb-1">Realm Name</label> <input id="rs-name" type="text" class="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"/></div> <div><label for="rs-desc" class="block text-sm font-medium text-gray-700 mb-1">Description</label> <textarea id="rs-desc" rows="2" class="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-y"></textarea></div> <div><label for="rs-welcome" class="block text-sm font-medium text-gray-700 mb-1">Welcome Message</label> <textarea id="rs-welcome" rows="3" class="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-y"></textarea></div> <div><label for="rs-logo" class="block text-sm font-medium text-gray-700 mb-1">Logo URL</label> <input id="rs-logo" type="url" placeholder="https://example.com/logo.png" class="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"/> <!></div> <div><label for="rs-bg" class="block text-sm font-medium text-gray-700 mb-1">Background Image URL</label> <input id="rs-bg" type="url" placeholder="https://example.com/background.png" class="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"/> <!></div> <div class="flex items-center gap-3"><label for="rs-open-reg" class="relative inline-flex items-center cursor-pointer"><input id="rs-open-reg" type="checkbox" class="sr-only peer"/> <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-600 peer-focus:ring-2 peer-focus:ring-blue-300 after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full"></div></label> <div><span class="text-sm font-medium text-gray-700">Open Registration</span> <p class="text-xs text-gray-500">When enabled, anyone can join without an invite code.</p></div></div> <div class="border-t border-gray-200 pt-5 mt-2"><h3 class="text-base font-semibold text-gray-900 mb-1">Registry & Marketplace</h3> <p class="text-xs text-gray-500 mb-4">Configure where this realm downloads and purchases extensions, codices, and assistants.
							Changing these requires the <code class="bg-gray-100 px-1 rounded">realm.configure.infrastructure</code> permission.</p> <div class="space-y-4"><div><label for="rs-file-registry" class="block text-sm font-medium text-gray-700 mb-1">File Registry Canister ID</label> <input id="rs-file-registry" type="text" placeholder="e.g. uq2mu-kaaaa-aaaah-avqcq-cai"/> <!> <p class="mt-1 text-xs text-gray-500">The canister that stores extension, codex, and assistant artifact files.</p></div> <div><label for="rs-marketplace" class="block text-sm font-medium text-gray-700 mb-1">Marketplace Canister ID</label> <input id="rs-marketplace" type="text" placeholder="e.g. u4hsn-kaaaa-aaaah-avqda-cai"/> <!> <p class="mt-1 text-xs text-gray-500">The canister that hosts the marketplace for discovering and purchasing packages.</p></div></div></div> <!> <!> <div class="pt-2"><button class="px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed font-medium transition-colors"> </button></div></div>`), mc = /* @__PURE__ */ N(`<div class="bg-white shadow-sm rounded-lg p-6"><h2 class="text-lg font-semibold text-gray-900 mb-1">Realm Settings</h2> <p class="text-gray-600 text-sm mb-6">Configure your realm's name, description, branding, and registration settings.</p> <!></div>`), yc = /* @__PURE__ */ N('<!> <!> <div class="w-full px-4 max-w-none"><div class="flex justify-between items-center mb-6"><div><h1 class="text-3xl font-bold text-gray-900">Admin Dashboard</h1> <p class="text-gray-600 mt-1">Manage realm entities</p></div> <button class="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50" title="Refresh"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg></button></div> <!> <button class="block w-full mb-4 bg-white shadow-sm rounded-lg p-4 border border-gray-200 hover:border-blue-400 hover:shadow transition-all text-left cursor-pointer"><div class="flex items-center justify-between gap-4"><div class="flex items-center gap-3"><div class="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center text-xl">📦</div> <div><div class="text-sm font-medium text-gray-700">Packages</div> <!></div></div> <span class="text-blue-600 text-sm font-medium">Manage →</span></div></button> <!> <div class="mb-4 bg-white shadow-sm rounded-lg p-4"><div class="flex items-center gap-4 flex-wrap"><label for="entity-type-select" class="font-medium text-gray-700">Entity Type:</label> <!></div></div> <div class="mb-4 border-b border-gray-200"><nav class="flex gap-1" aria-label="Tabs"></nav></div> <!></div> <!>', 1);
function wc(e, t) {
  vi(t, !0);
  const r = t.ctx.theme?.cn ?? ((...p) => p.filter(Boolean).join(" ")), n = {
    Balance: "💵",
    Call: "📞",
    Codex: "📚",
    Contract: "📝",
    Dispute: "⚖️",
    Human: "🧑",
    Identity: "🆔",
    Instrument: "💰",
    Invoice: "🧾",
    Land: "🏞️",
    License: "📃",
    Mandate: "📜",
    Member: "👥",
    Notification: "🔔",
    Organization: "🏢",
    PaymentAccount: "💳",
    Permission: "🔐",
    Proposal: "🗳️",
    Realm: "🏛️",
    Registry: "📋",
    Service: "⚙️",
    Task: "📋",
    TaskExecution: "▶️",
    TaskSchedule: "⏰",
    TaskStep: "📌",
    Token: "🪙",
    Trade: "🤝",
    Transfer: "🔄",
    Treasury: "🏦",
    User: "👤",
    UserProfile: "📋",
    Vote: "✅",
    Zone: "🗺️"
  };
  let i = /* @__PURE__ */ D(Vt([])), o = /* @__PURE__ */ D(""), a = /* @__PURE__ */ D("browse"), s = /* @__PURE__ */ D(!0), u = /* @__PURE__ */ D(""), c = /* @__PURE__ */ D(Vt([])), _ = /* @__PURE__ */ D(0), f = /* @__PURE__ */ D(Vt([])), d = /* @__PURE__ */ D(!1), C = /* @__PURE__ */ D(null), k = /* @__PURE__ */ D(0), O = 10, F = /* @__PURE__ */ D(0), K = /* @__PURE__ */ D(0), P = /* @__PURE__ */ D(null), te = /* @__PURE__ */ D(null), he = /* @__PURE__ */ D(!1), fe = /* @__PURE__ */ D(null), xe = /* @__PURE__ */ D("file"), x = /* @__PURE__ */ D(""), w = /* @__PURE__ */ D(""), g = /* @__PURE__ */ D(null), E = /* @__PURE__ */ D(!1), y = /* @__PURE__ */ D(null), M = /* @__PURE__ */ D(void 0), I = /* @__PURE__ */ D(!1), X = /* @__PURE__ */ D(null), re = /* @__PURE__ */ D(0), de = /* @__PURE__ */ D(!0), B = /* @__PURE__ */ D(""), ae = /* @__PURE__ */ D(0), me = /* @__PURE__ */ D(0);
  function ye(p, A = "success") {
    const S = no(_);
    b(c, [...l(c), { id: S, text: p, type: A }], !0), setTimeout(
      () => {
        b(c, l(c).filter((R) => R.id !== S), !0);
      },
      4e3
    );
  }
  function ir(p) {
    return n[p] || "📊";
  }
  function sr(p) {
    return p.replace(/([A-Z])/g, " $1").trim();
  }
  async function Ne(p, A = {}) {
    return await t.ctx.callSync(p, A);
  }
  function dt(p) {
    if (p?.success && p?.data?.objectsListPaginated) {
      const A = p.data.objectsListPaginated;
      return { objects: (A.objects || []).map((R) => {
        try {
          return typeof R == "string" ? JSON.parse(R) : R;
        } catch {
          return R;
        }
      }), pagination: A.pagination };
    }
    return p?.data && Array.isArray(p.data) ? { objects: p.data, pagination: null } : { objects: [], pagination: null };
  }
  async function Kr() {
    b(s, !0), b(u, "");
    try {
      const p = await Ne("get_entity_types"), A = p?.data ?? (Array.isArray(p) ? p : []);
      b(
        i,
        A.map((S) => ({
          value: S,
          label: `${ir(S)} ${sr(S)}`,
          className: S
        })),
        !0
      ), l(i).length > 0 && !l(o) && b(o, l(i)[0].value, !0);
    } catch (p) {
      b(u, p?.message || String(p), !0), b(i, [{ value: "User", label: "👤 User", className: "User" }], !0), l(o) || b(o, "User");
    } finally {
      b(s, !1);
    }
  }
  async function Qr() {
    b(de, !0), b(B, "");
    try {
      const [p, A, S] = await Promise.all([
        t.ctx.backend.list_runtime_extensions().catch(() => "{}"),
        t.ctx.backend.list_codex_packages().catch(() => "{}"),
        t.ctx.backend.status().catch(() => null)
      ]), R = typeof p == "string" ? JSON.parse(p) : p, q = typeof A == "string" ? JSON.parse(A) : A, V = R?.success ? R.runtime_extensions ?? [] : [], _e = q?.success ? q.codex_packages ?? [] : [], Ce = R?.success ? R.all_manifests ?? {} : {}, Oe = q?.success ? q.manifests ?? {} : {};
      b(ae, Object.keys(Ce).length || V.length, !0), b(
        me,
        Array.isArray(_e) ? _e.length : Object.keys(Oe).length,
        !0
      ), b(X, l(ae) + l(me));
      const Ve = S?.success && S?.data?.status?.registries || [];
      let Ye = 0;
      for (const we of Ve)
        try {
          const oe = wn(we.canister_id);
          if (!oe) continue;
          const [H, le] = await Promise.all([
            fetch(`${oe}/api/extensions`, { headers: { Accept: "application/json" } }).then((ge) => ge.ok ? ge.json() : []).catch(() => []),
            fetch(`${oe}/api/codices`, { headers: { Accept: "application/json" } }).then((ge) => ge.ok ? ge.json() : []).catch(() => [])
          ]);
          for (const ge of H) {
            if (!V.includes(ge.ext_id)) continue;
            const Te = Ce?.[ge.ext_id]?.version;
            Te && ge.latest && Zr(ge.latest, Te) && Ye++;
          }
          for (const ge of le) {
            if (!_e.includes(ge.codex_id)) continue;
            const Te = Oe?.[ge.codex_id]?.version;
            Te && ge.latest && Zr(ge.latest, Te) && Ye++;
          }
        } catch {
        }
      b(re, Ye, !0);
    } catch (p) {
      b(B, p?.message ?? String(p), !0);
    } finally {
      b(de, !1);
    }
  }
  function wn(p) {
    if (typeof window > "u") return null;
    const A = window.location.host;
    if (A.includes("localhost") || A.includes("127.0.0.1")) {
      const R = A.split(":")[1] ?? "4943";
      return `http://${p}.localhost:${R}`;
    }
    return `https://${p}.icp0.io`;
  }
  function Zr(p, A) {
    const S = (p || "").split("-", 1)[0].split(".").map((V) => parseInt(V, 10) || 0), R = (A || "").split("-", 1)[0].split(".").map((V) => parseInt(V, 10) || 0), q = Math.max(S.length, R.length);
    for (let V = 0; V < q; V++) {
      const _e = S[V] ?? 0, Ce = R[V] ?? 0;
      if (_e !== Ce) return _e > Ce;
    }
    return !1;
  }
  async function Ar() {
    b(d, !0), b(C, null);
    try {
      const p = await t.ctx.backend.get_objects_paginated(l(o), l(k), O, "desc"), A = typeof p == "string" ? JSON.parse(p) : p, { objects: S, pagination: R } = dt(A);
      b(f, S, !0), R ? (b(F, Number(R.total_items || 0), !0), b(K, Number(R.total_pages || 0), !0)) : (b(F, S.length, !0), b(K, 1));
    } catch (p) {
      b(u, p?.message || String(p), !0), b(f, [], !0);
    } finally {
      b(d, !1);
    }
  }
  function zr(p) {
    b(C, l(C) === p ? null : p, !0);
  }
  function kn(p) {
    navigator.clipboard.writeText(JSON.stringify(p, null, 2)), ye("JSON copied to clipboard");
  }
  function Ot(p) {
    b(k, p, !0), Ar();
  }
  function Cr(p) {
    b(te, p, !0);
  }
  function En() {
    b(te, null);
  }
  async function L() {
    if (!l(te)) return;
    const p = l(te), A = p._type || l(o), S = p._id || p.id;
    b(te, null), b(P, String(S), !0);
    try {
      const R = await Ne("delete_entity", { entity_type: A, entity_id: String(S) });
      R?.success ? (b(f, l(f).filter((q) => !((q._id || q.id) === S && (q._type || l(o)) === A)), !0), b(F, Math.max(0, l(F) - 1), !0), ye(`Deleted ${A}#${S}`)) : ye(R?.error || "Delete failed", "error");
    } catch (R) {
      ye(`Delete error: ${R?.message}`, "error");
    } finally {
      b(P, null);
    }
  }
  async function Y(p = !1) {
    b(he, !0), b(fe, null);
    try {
      const A = p ? { include_codexes: !0 } : { entity_types: [l(o)], include_codexes: !0 }, S = await Ne("export_data", A);
      if (S?.success && S?.data) {
        const R = typeof S.data == "string" ? JSON.parse(S.data) : S.data;
        b(fe, R, !0);
        const q = p ? `Exported ${R.total_entities ?? "?"} entities, ${R.total_codexes ?? 0} codexes` : `Exported ${R.total_entities ?? "?"} entities`;
        ye(q);
      } else
        ye(S?.error || "Export failed", "error");
    } catch (A) {
      ye(`Export error: ${A?.message}`, "error");
    } finally {
      b(he, !1);
    }
  }
  function Z(p = !1) {
    if (!l(fe)) return;
    const A = JSON.stringify(l(fe), null, 2), S = new Blob([A], { type: "application/json" }), R = URL.createObjectURL(S), q = document.createElement("a");
    q.href = R;
    const V = (/* @__PURE__ */ new Date()).toISOString().replace(/[:.]/g, "-").slice(0, 19);
    q.download = p ? `export_all_${V}.json` : `export_${l(o)}_${V}.json`, q.click(), URL.revokeObjectURL(R), ye("Download started");
  }
  function ie() {
    l(fe) && (navigator.clipboard.writeText(JSON.stringify(l(fe), null, 2)), ye("Copied to clipboard"));
  }
  function Me(p) {
    const S = p.target.files?.[0];
    S && Ie(S);
  }
  function ve(p) {
    p.preventDefault(), b(I, !1);
    const A = p.dataTransfer?.files?.[0];
    A && Ie(A);
  }
  function Ie(p) {
    b(w, p.name, !0);
    const A = new FileReader();
    A.onload = (S) => {
      b(x, S.target?.result || "", !0), vt();
    }, A.readAsText(p);
  }
  function vt() {
    if (b(g, null), b(y, null), !!l(x).trim())
      try {
        const p = JSON.parse(l(x));
        let A = [], S = [];
        Array.isArray(p) ? A = p : p.entities ? (A = p.entities || [], S = p.codexes || []) : A = [p];
        const R = {};
        for (const q of A) {
          const V = q._type || "unknown";
          R[V] = (R[V] || 0) + 1;
        }
        b(
          g,
          {
            totalEntities: A.length,
            totalCodexes: S.length,
            typeCounts: R,
            valid: !0,
            entities: A,
            codexes: S
          },
          !0
        );
      } catch (p) {
        b(
          g,
          {
            valid: !1,
            error: p.message,
            totalEntities: 0,
            totalCodexes: 0,
            typeCounts: {},
            entities: [],
            codexes: []
          },
          !0
        );
      }
  }
  async function Xr() {
    if (!(!l(g) || !l(g).valid)) {
      b(E, !0), b(y, null);
      try {
        const p = [...l(g).entities];
        for (const S of l(g).codexes)
          p.push({ ...S, _type: "Codex" });
        const A = await Ne("import_data", { format: "json", data: JSON.stringify(p) });
        if (b(y, A, !0), A?.success) {
          const S = A.data || {};
          ye(`Imported ${S.successful || 0} of ${S.total_records || 0} records`);
        } else
          ye(A?.error || "Import failed", "error");
      } catch (p) {
        b(y, { success: !1, error: p.message }, !0), ye(`Import error: ${p?.message}`, "error");
      } finally {
        b(E, !1);
      }
    }
  }
  function it() {
    b(x, ""), b(w, ""), b(g, null), b(y, null), l(M) && (l(M).value = "");
  }
  let or = /* @__PURE__ */ D(!0), Gt = /* @__PURE__ */ D(!1), Bt = /* @__PURE__ */ D(""), Et = /* @__PURE__ */ D(""), At = /* @__PURE__ */ D(""), ar = /* @__PURE__ */ D(""), lr = /* @__PURE__ */ D(""), Ct = /* @__PURE__ */ D(""), Pt = /* @__PURE__ */ D(""), ur = /* @__PURE__ */ D(!1), St = /* @__PURE__ */ D(""), Mt = /* @__PURE__ */ D(""), An = /* @__PURE__ */ D(!1), Gn = /* @__PURE__ */ D(""), cr = /* @__PURE__ */ D(""), $t = /* @__PURE__ */ D(""), en = /* @__PURE__ */ D("");
  function bi() {
    const p = ["from ggg import Realm", "", 'realm = Realm.load("1")'];
    return l(At) && p.push(`realm.name = ${JSON.stringify(l(At))}`), l(ar) && p.push(`realm.description = ${JSON.stringify(l(ar))}`), p.push(`realm.welcome_message = ${JSON.stringify(l(lr))}`), l(Ct) && p.push(`realm.logo_url = ${JSON.stringify(l(Ct))}`), l(Pt) && p.push(`realm.background_image_url = ${JSON.stringify(l(Pt))}`), p.push(`realm.open_registration = ${l(ur) ? "True" : "False"}`), l(St) && p.push(`realm.file_registry_canister_id = ${JSON.stringify(l(St))}`), l(Mt) && p.push(`realm.marketplace_canister_id = ${JSON.stringify(l(Mt))}`), p.join(`
`);
  }
  function os(p) {
    b(Gn, "Update realm settings"), b(cr, "This proposal updates the realm configuration (name, description, welcome message, branding, and registration settings) as specified in the code below."), b($t, bi(), !0), b(en, p, !0), b(An, !0);
  }
  async function Lo() {
    b(or, !0), b(Et, "");
    try {
      const p = await t.ctx.backend.status();
      if (p?.success && p?.data?.status) {
        const A = p.data.status;
        b(At, A.realm_name || "", !0), b(ar, A.realm_description || "", !0), b(lr, A.realm_welcome_message || "", !0), b(Ct, A.logo_url || "", !0), b(Pt, A.background_image_url || "", !0), b(ur, !!A.open_registration), b(St, A.file_registry_canister_id || "", !0), b(Mt, A.marketplace_canister_id || "", !0);
      }
    } catch (p) {
      b(Et, p?.message || String(p), !0);
    } finally {
      b(or, !1);
    }
  }
  async function No() {
    b(Gt, !0), b(Bt, ""), b(Et, "");
    try {
      const p = {
        name: l(At),
        description: l(ar),
        welcome_message: l(lr),
        logo_url: l(Ct),
        background_image_url: l(Pt),
        open_registration: l(ur),
        file_registry_canister_id: l(St),
        marketplace_canister_id: l(Mt)
      }, A = await t.ctx.backend.update_realm_config(JSON.stringify(p)), S = typeof A == "string" ? JSON.parse(A) : A;
      S?.success ? (b(Bt, "Realm settings saved successfully."), ye("Realm settings updated")) : S?.denied_operation ? os(S.denied_operation) : b(Et, S?.error || "Failed to save settings", !0);
    } catch (p) {
      const A = p?.message || String(p);
      if (A.includes("Access denied") && A.includes("lacks permission")) {
        const S = A.match(/lacks permission '([^']+)'/);
        os(S?.[1] || "realm.configure");
      } else
        b(Et, A, !0);
    } finally {
      b(Gt, !1);
    }
  }
  function as(p) {
    return p ? /^[a-z0-9]{5}(-[a-z0-9]{5})*-cai$/.test(p) : !0;
  }
  let xi = /* @__PURE__ */ Mr(() => as(l(St))), mi = /* @__PURE__ */ Mr(() => as(l(Mt))), Io = /* @__PURE__ */ Mr(() => l(xi) && l(mi));
  co(() => {
    Kr(), Qr(), Lo();
  });
  const Oo = [
    { id: "browse", label: "Browse" },
    { id: "export", label: "Export" },
    { id: "import", label: "Import" },
    { id: "invitations", label: "Invitations" },
    { id: "settings", label: "Realm Settings" }
  ];
  let Bo = /* @__PURE__ */ Mr(() => l(fe) ? JSON.stringify(l(fe), null, 2) : "");
  var ls = yc(), us = ze(ls);
  {
    var Po = (p) => {
      var A = ku();
      Zt(A, 21, () => l(c), (S) => S.id, (S, R) => {
        var q = wu(), V = h(q);
        U(
          (_e) => {
            tt(q, 1, _e), j(V, l(R).text);
          },
          [
            () => et(r("px-4 py-3 rounded-lg shadow-lg text-sm font-medium transition-all", l(R).type === "error" ? "bg-red-600 text-white" : "bg-green-600 text-white"))
          ]
        ), T(S, q);
      }), T(p, A);
    };
    G(us, (p) => {
      l(c).length > 0 && p(Po);
    });
  }
  var cs = m(us, 2);
  {
    var jo = (p) => {
      var A = Au(), S = h(A), R = m(h(S), 2), q = m(h(R)), V = h(q), _e = m(q, 2);
      {
        var Ce = (we) => {
          var oe = Eu(), H = m(ze(oe)), le = h(H);
          U(() => j(le, `(${l(te).name ?? ""})`)), T(we, oe);
        };
        G(_e, (we) => {
          l(te).name && we(Ce);
        });
      }
      var Oe = m(R, 4), Ve = h(Oe), Ye = m(Ve, 2);
      U(() => j(V, `${(l(te)._type || l(o)) ?? ""}#${(l(te)._id || l(te).id) ?? ""}`)), ee("click", Ve, En), ee("click", Ye, L), T(p, A);
    };
    G(cs, (p) => {
      l(te) && p(jo);
    });
  }
  var fs = m(cs, 2), ds = h(fs), vs = m(h(ds), 2), gs = m(ds, 2);
  {
    var Fo = (p) => {
      var A = Cu(), S = h(A), R = m(S);
      U(() => j(S, `${l(u) ?? ""} `)), ee("click", R, () => b(u, "")), T(p, A);
    };
    G(gs, (p) => {
      l(u) && p(Fo);
    });
  }
  var yi = m(gs, 2), Uo = h(yi), Ho = h(Uo), Jo = m(h(Ho), 2), Vo = m(h(Jo), 2);
  {
    var Yo = (p) => {
      var A = Su();
      T(p, A);
    }, qo = (p) => {
      var A = Mu(), S = h(A);
      U(() => j(S, l(B))), T(p, A);
    }, Go = (p) => {
      var A = Du(), S = h(A), R = m(S);
      {
        var q = (V) => {
          var _e = Tu(), Ce = m(ze(_e), 2), Oe = h(Ce);
          U(() => j(Oe, `${l(re) ?? ""} update${l(re) === 1 ? "" : "s"} available`)), T(V, _e);
        };
        G(R, (V) => {
          l(re) > 0 && V(q);
        });
      }
      U(() => j(S, `${l(X) ?? 0 ?? ""} installed `)), T(p, A);
    };
    G(Vo, (p) => {
      l(de) ? p(Yo) : l(B) ? p(qo, 1) : p(Go, -1);
    });
  }
  var ps = m(yi, 2);
  {
    var $o = (p) => {
      var A = Ru(), S = h(A), R = m(h(S), 2), q = h(R), V = m(S, 2), _e = m(h(V), 2), Ce = h(_e), Oe = m(V, 2), Ve = m(h(Oe), 2), Ye = h(Ve), we = m(Oe, 2), oe = m(h(we), 2), H = h(oe);
      U(
        (le) => {
          j(q, l(i).length), j(Ce, l(ae)), j(Ye, l(me)), tt(oe, 1, le), j(H, l(de) ? "…" : l(re));
        },
        [
          () => et(r("text-2xl font-bold mt-1", l(re) > 0 ? "text-yellow-600" : "text-gray-900"))
        ]
      ), T(p, A);
    };
    G(ps, (p) => {
      l(s) || p($o);
    });
  }
  var hs = m(ps, 2), Wo = h(hs), Ko = m(h(Wo), 2);
  {
    var Qo = (p) => {
      var A = Lu();
      T(p, A);
    }, Zo = (p) => {
      var A = Iu();
      Zt(A, 21, () => l(i), Tr, (S, R) => {
        var q = Nu(), V = h(q), _e = {};
        U(() => {
          j(V, l(R).label), _e !== (_e = l(R).value) && (q.value = (q.__value = l(R).value) ?? "");
        }), T(S, q);
      }), Do(A, () => l(o), (S) => b(o, S)), T(p, A);
    };
    G(Ko, (p) => {
      l(s) ? p(Qo) : p(Zo, -1);
    });
  }
  var _s = m(hs, 2), zo = h(_s);
  Zt(zo, 21, () => Oo, Tr, (p, A) => {
    var S = Ou(), R = h(S);
    U(
      (q) => {
        tt(S, 1, q), j(R, l(A).label);
      },
      [
        () => et(r("px-5 py-2.5 text-sm font-medium rounded-t-lg border-b-2 transition-colors", l(a) === l(A).id ? "border-blue-600 text-blue-600 bg-blue-50" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"))
      ]
    ), ee("click", S, () => b(a, l(A).id, !0)), T(p, S);
  });
  var Xo = m(_s, 2);
  {
    var ea = (p) => {
      var A = Yu(), S = ze(A), R = h(S), q = h(R), V = m(R, 2), _e = h(V);
      {
        var Ce = (H) => {
          var le = Rs();
          U(() => j(le, `Showing ${l(f).length ?? ""} of ${l(F) ?? ""} items`)), T(H, le);
        };
        G(_e, (H) => {
          l(f).length > 0 && H(Ce);
        });
      }
      var Oe = m(S, 2), Ve = h(Oe);
      {
        var Ye = (H) => {
          var le = Bu();
          T(H, le);
        }, we = (H) => {
          var le = Pu();
          T(H, le);
        }, oe = (H) => {
          var le = Vu(), ge = ze(le);
          Zt(ge, 21, () => l(f), Tr, ($, ue, ke) => {
            var Se = Hu(), qe = h(Se), We = h(qe), st = h(We), Fe = h(st), Ue = h(Fe), Be = m(Fe, 2);
            {
              var Wt = (He) => {
                var gt = ju(), ot = h(gt);
                U(() => j(ot, `- ${l(ue).name ?? ""}`)), T(He, gt);
              };
              G(Be, (He) => {
                l(ue).name && He(Wt);
              });
            }
            var fr = m(We, 2), Ke = h(fr), Qe = m(Ke, 2), Kt = m(qe, 2);
            {
              var dr = (He) => {
                var gt = Uu(), ot = h(gt);
                Zt(ot, 21, () => Object.entries(l(ue)), Tr, (J, De) => {
                  var jt = /* @__PURE__ */ Mr(() => ws(l(De), 2));
                  let oa = () => l(jt)[0], wi = () => l(jt)[1];
                  var bs = Fu(), xs = h(bs), aa = h(xs), la = m(xs, 2), ua = h(la);
                  U(
                    (ca) => {
                      j(aa, `${oa() ?? ""}:`), j(ua, ca);
                    },
                    [
                      () => typeof wi() == "object" ? JSON.stringify(wi()) : String(wi())
                    ]
                  ), T(J, bs);
                });
                var vr = m(ot, 2), Cn = h(vr), Sr = m(h(Cn), 2), tn = h(Sr);
                U((J) => j(tn, J), [() => JSON.stringify(l(ue), null, 2)]), T(He, gt);
              };
              G(Kt, (He) => {
                l(C) === ke && He(dr);
              });
            }
            U(
              (He) => {
                j(Ue, `${l(C) === ke ? "▼" : "▶"}
											${(l(ue)._type || l(o)) ?? ""} #${(l(ue)._id || l(ue).id || ke + 1) ?? ""}`), Qe.disabled = He;
              },
              [
                () => l(P) === String(l(ue)._id || l(ue).id)
              ]
            ), ee("click", Fe, () => zr(ke)), ee("click", Ke, () => kn(l(ue))), ee("click", Qe, () => Cr(l(ue))), T($, Se);
          });
          var Te = m(ge, 2);
          {
            var be = ($) => {
              var ue = Ju(), ke = h(ue), Se = h(ke), qe = m(Se, 2), We = m(ke, 2), st = h(We), Fe = m(We, 2), Ue = h(Fe), Be = m(Ue, 2);
              U(() => {
                Se.disabled = l(k) === 0, qe.disabled = l(k) === 0, j(st, `Page ${l(k) + 1} of ${l(K) ?? ""}`), Ue.disabled = l(k) >= l(K) - 1, Be.disabled = l(k) >= l(K) - 1;
              }), ee("click", Se, () => Ot(0)), ee("click", qe, () => Ot(l(k) - 1)), ee("click", Ue, () => Ot(l(k) + 1)), ee("click", Be, () => Ot(l(K) - 1)), T($, ue);
            };
            G(Te, ($) => {
              l(K) > 1 && $(be);
            });
          }
          T(H, le);
        };
        G(Ve, (H) => {
          l(d) ? H(Ye) : l(f).length === 0 ? H(we, 1) : H(oe, -1);
        });
      }
      U(() => {
        R.disabled = l(d), j(q, l(d) ? "Loading…" : "Load Data");
      }), ee("click", R, Ar), T(p, A);
    }, ta = (p) => {
      var A = Wu(), S = m(h(A), 4), R = h(S), q = h(R), V = m(R, 2), _e = h(V), Ce = m(S, 2);
      {
        var Oe = (we) => {
          var oe = qu();
          T(we, oe);
        };
        G(Ce, (we) => {
          l(he) && we(Oe);
        });
      }
      var Ve = m(Ce, 2);
      {
        var Ye = (we) => {
          var oe = $u(), H = h(oe), le = h(H), ge = h(le), Te = h(ge), be = m(ge, 2);
          {
            var $ = (Fe) => {
              var Ue = Gu(), Be = m(ze(Ue)), Wt = h(Be);
              U(() => j(Wt, l(fe).total_codexes)), T(Fe, Ue);
            };
            G(be, (Fe) => {
              (l(fe).total_codexes ?? 0) > 0 && Fe($);
            });
          }
          var ue = m(le, 2), ke = h(ue), Se = m(ke, 2), qe = m(H, 2), We = h(qe), st = h(We);
          U(() => {
            j(Te, l(fe).total_entities ?? "?"), j(st, l(Bo));
          }), ee("click", ke, () => Z(!1)), ee("click", Se, ie), T(we, oe);
        };
        G(Ve, (we) => {
          l(fe) && we(Ye);
        });
      }
      U(() => {
        R.disabled = l(he), j(q, l(he) ? "Exporting…" : `Export ${l(o)}`), V.disabled = l(he), j(_e, l(he) ? "Exporting…" : "Export All Types");
      }), ee("click", R, () => Y(!1)), ee("click", V, () => Y(!0)), T(p, A);
    }, ra = (p) => {
      gu(p, {
        get ctx() {
          return t.ctx;
        }
      });
    }, na = (p) => {
      var A = fc(), S = m(h(A), 4), R = h(S), q = m(R, 2), V = m(S, 2);
      {
        var _e = (oe) => {
          var H = Zu(), le = h(H);
          Wl(le, ($) => b(M, $), () => l(M));
          var ge = m(le, 2);
          {
            var Te = ($) => {
              var ue = Ku(), ke = ze(ue), Se = h(ke);
              U(() => j(Se, l(w))), T($, ue);
            }, be = ($) => {
              var ue = Qu();
              T($, ue);
            };
            G(ge, ($) => {
              l(w) ? $(Te) : $(be, -1);
            });
          }
          U(($) => tt(H, 1, $), [
            () => et(r("border-2 border-dashed rounded-lg p-8 text-center transition-colors cursor-pointer", l(I) ? "border-blue-500 bg-blue-50" : "border-gray-300 hover:border-gray-400"))
          ]), Ci("drop", H, ve), Ci("dragover", H, ($) => {
            $.preventDefault(), b(I, !0);
          }), Ci("dragleave", H, () => b(I, !1)), ee("click", H, () => l(M)?.click()), ee("keydown", H, ($) => $.key === "Enter" && l(M)?.click()), ee("change", le, Me), T(oe, H);
        }, Ce = (oe) => {
          var H = Xu(), le = h(H);
          ri(le, "placeholder", `Paste JSON here, e.g.
[
  {"_type": "User", "_id": "1", "name": "Alice"},
  {"_type": "User", "_id": "2", "name": "Bob"}
]`);
          var ge = m(le, 2);
          {
            var Te = (be) => {
              var $ = zu();
              ee("click", $, it), T(be, $);
            };
            G(ge, (be) => {
              l(x) && be(Te);
            });
          }
          ee("input", le, vt), Ft(le, () => l(x), (be) => b(x, be)), T(oe, H);
        };
        G(V, (oe) => {
          l(xe) === "file" ? oe(_e) : oe(Ce, -1);
        });
      }
      var Oe = m(V, 2);
      {
        var Ve = (oe) => {
          var H = nc(), le = h(H);
          {
            var ge = (be) => {
              var $ = tc(), ue = ze($), ke = h(ue), Se = h(ke), qe = m(Se);
              {
                var We = (Ke) => {
                  var Qe = Rs();
                  U(() => j(Qe, `, ${l(g).totalCodexes ?? ""} codexes`)), T(Ke, Qe);
                };
                G(qe, (Ke) => {
                  l(g).totalCodexes > 0 && Ke(We);
                });
              }
              var st = m(ue, 2), Fe = h(st);
              Zt(Fe, 21, () => Object.entries(l(g).typeCounts), Tr, (Ke, Qe) => {
                var Kt = /* @__PURE__ */ Mr(() => ws(l(Qe), 2));
                let dr = () => l(Kt)[0], He = () => l(Kt)[1];
                var gt = ec(), ot = h(gt);
                U((vr) => j(ot, `${vr ?? ""} ${dr() ?? ""}: ${He() ?? ""}`), [() => ir(dr())]), T(Ke, gt);
              });
              var Ue = m(Fe, 2), Be = h(Ue), Wt = h(Be), fr = m(Be, 2);
              U(() => {
                j(Se, `Ready to import: ${l(g).totalEntities ?? ""} entities `), Be.disabled = l(E), j(Wt, l(E) ? "Importing…" : "Confirm Import"), fr.disabled = l(E);
              }), ee("click", Be, Xr), ee("click", fr, it), T(be, $);
            }, Te = (be) => {
              var $ = rc(), ue = m(h($), 2), ke = h(ue);
              U(() => j(ke, l(g).error)), T(be, $);
            };
            G(le, (be) => {
              l(g).valid ? be(ge) : be(Te, -1);
            });
          }
          U((be) => tt(H, 1, be), [
            () => et(r("mt-4 border rounded-lg overflow-hidden", l(g).valid ? "border-green-200" : "border-red-200"))
          ]), T(oe, H);
        };
        G(Oe, (oe) => {
          l(g) && oe(Ve);
        });
      }
      var Ye = m(Oe, 2);
      {
        var we = (oe) => {
          var H = cc(), le = h(H), ge = h(le);
          {
            var Te = ($) => {
              var ue = lc(), ke = m(ze(ue), 2);
              {
                var Se = (qe) => {
                  var We = ac(), st = h(We), Fe = h(st), Ue = m(st, 2), Be = h(Ue), Wt = m(Ue, 2);
                  {
                    var fr = (Ke) => {
                      var Qe = oc(), Kt = ze(Qe), dr = h(Kt), He = m(Kt, 2);
                      {
                        var gt = (ot) => {
                          var vr = sc();
                          Zt(vr, 21, () => l(y).data.errors, Tr, (Cn, Sr) => {
                            var tn = ic(), J = h(tn);
                            U(() => j(J, l(Sr))), T(Cn, tn);
                          }), T(ot, vr);
                        };
                        G(He, (ot) => {
                          l(y).data.errors?.length && ot(gt);
                        });
                      }
                      U(() => j(dr, `Failed: ${l(y).data.failed ?? ""}`)), T(Ke, Qe);
                    };
                    G(Wt, (Ke) => {
                      (l(y).data.failed ?? 0) > 0 && Ke(fr);
                    });
                  }
                  U(() => {
                    j(Fe, `Total records: ${(l(y).data.total_records || 0) ?? ""}`), j(Be, `Successful: ${(l(y).data.successful || 0) ?? ""}`);
                  }), T(qe, We);
                };
                G(ke, (qe) => {
                  l(y).data && qe(Se);
                });
              }
              T($, ue);
            }, be = ($) => {
              var ue = uc(), ke = m(ze(ue), 2), Se = h(ke);
              U(() => j(Se, l(y).error)), T($, ue);
            };
            G(ge, ($) => {
              l(y).success ? $(Te) : $(be, -1);
            });
          }
          U(($) => tt(H, 1, $), [
            () => et(r("mt-4 border rounded-lg overflow-hidden", l(y).success ? "border-green-200 bg-green-50" : "border-red-200 bg-red-50"))
          ]), T(oe, H);
        };
        G(Ye, (oe) => {
          l(y) && oe(we);
        });
      }
      U(
        (oe, H) => {
          tt(R, 1, oe), tt(q, 1, H);
        },
        [
          () => et(r("px-4 py-2 text-sm font-medium rounded-lg transition-colors", l(xe) === "file" ? "bg-blue-100 text-blue-700 border border-blue-300" : "bg-gray-100 text-gray-600 hover:bg-gray-200")),
          () => et(r("px-4 py-2 text-sm font-medium rounded-lg transition-colors", l(xe) === "editor" ? "bg-blue-100 text-blue-700 border border-blue-300" : "bg-gray-100 text-gray-600 hover:bg-gray-200"))
        ]
      ), ee("click", R, () => {
        b(xe, "file"), it();
      }), ee("click", q, () => {
        b(xe, "editor"), it();
      }), T(p, A);
    }, ia = (p) => {
      var A = mc(), S = m(h(A), 4);
      {
        var R = (V) => {
          var _e = dc();
          T(V, _e);
        }, q = (V) => {
          var _e = xc(), Ce = h(_e), Oe = m(h(Ce), 2), Ve = m(Ce, 2), Ye = m(h(Ve), 2), we = m(Ve, 2), oe = m(h(we), 2), H = m(we, 2), le = m(h(H), 2), ge = m(le, 2);
          {
            var Te = (J) => {
              var De = vc(), jt = h(De);
              U(() => ri(jt, "src", l(Ct))), T(J, De);
            };
            G(ge, (J) => {
              l(Ct) && J(Te);
            });
          }
          var be = m(H, 2), $ = m(h(be), 2), ue = m($, 2);
          {
            var ke = (J) => {
              var De = gc(), jt = h(De);
              U(() => ri(jt, "src", l(Pt))), T(J, De);
            };
            G(ue, (J) => {
              l(Pt) && J(ke);
            });
          }
          var Se = m(be, 2), qe = h(Se), We = h(qe), st = m(Se, 2), Fe = m(h(st), 4), Ue = h(Fe), Be = m(h(Ue), 2), Wt = m(Be, 2);
          {
            var fr = (J) => {
              var De = pc();
              T(J, De);
            };
            G(Wt, (J) => {
              l(St) && !l(xi) && J(fr);
            });
          }
          var Ke = m(Ue, 2), Qe = m(h(Ke), 2), Kt = m(Qe, 2);
          {
            var dr = (J) => {
              var De = hc();
              T(J, De);
            };
            G(Kt, (J) => {
              l(Mt) && !l(mi) && J(dr);
            });
          }
          var He = m(st, 2);
          {
            var gt = (J) => {
              var De = _c(), jt = h(De);
              U(() => j(jt, l(Bt))), T(J, De);
            };
            G(He, (J) => {
              l(Bt) && J(gt);
            });
          }
          var ot = m(He, 2);
          {
            var vr = (J) => {
              var De = bc(), jt = h(De);
              U(() => j(jt, l(Et))), T(J, De);
            };
            G(ot, (J) => {
              l(Et) && J(vr);
            });
          }
          var Cn = m(ot, 2), Sr = h(Cn), tn = h(Sr);
          U(
            (J, De) => {
              tt(Be, 1, J), tt(Qe, 1, De), Sr.disabled = l(Gt) || !l(Io), j(tn, l(Gt) ? "Saving…" : "Save Settings");
            },
            [
              () => et(r("w-full px-3 py-2 border rounded-lg text-sm font-mono focus:outline-none focus:ring-2 focus:border-blue-500", l(St) && !l(xi) ? "border-red-300 focus:ring-red-300" : "border-gray-300 focus:ring-blue-500")),
              () => et(r("w-full px-3 py-2 border rounded-lg text-sm font-mono focus:outline-none focus:ring-2 focus:border-blue-500", l(Mt) && !l(mi) ? "border-red-300 focus:ring-red-300" : "border-gray-300 focus:ring-blue-500"))
            ]
          ), Ft(Oe, () => l(At), (J) => b(At, J)), Ft(Ye, () => l(ar), (J) => b(ar, J)), Ft(oe, () => l(lr), (J) => b(lr, J)), Ft(le, () => l(Ct), (J) => b(Ct, J)), Ft($, () => l(Pt), (J) => b(Pt, J)), $l(We, () => l(ur), (J) => b(ur, J)), Ft(Be, () => l(St), (J) => b(St, J)), Ft(Qe, () => l(Mt), (J) => b(Mt, J)), ee("click", Sr, No), T(V, _e);
        };
        G(S, (V) => {
          l(or) ? V(R) : V(q, -1);
        });
      }
      T(p, A);
    };
    G(Xo, (p) => {
      l(a) === "browse" ? p(ea) : l(a) === "export" ? p(ta, 1) : l(a) === "invitations" ? p(ra, 2) : l(a) === "import" ? p(na, 3) : l(a) === "settings" && p(ia, 4);
    });
  }
  var sa = m(fs, 2);
  yu(sa, {
    get ctx() {
      return t.ctx;
    },
    get open() {
      return l(An);
    },
    get title() {
      return l(Gn);
    },
    get description() {
      return l(cr);
    },
    get codeInline() {
      return l($t);
    },
    get deniedOperation() {
      return l(en);
    },
    onclose: () => b(An, !1)
  }), U(() => vs.disabled = l(s)), ee("click", vs, () => {
    Kr(), Qr();
  }), ee("click", yi, () => t.ctx.navigate?.("/extensions/package_manager")), T(e, ls), gi();
}
ss(["click", "keydown", "change", "input"]);
function Ac(e, t) {
  const r = Ll(wc, { target: e, props: { ctx: t } });
  return {
    unmount() {
      try {
        Il(r);
      } catch {
      }
    }
  };
}
export {
  Ac as default
};
