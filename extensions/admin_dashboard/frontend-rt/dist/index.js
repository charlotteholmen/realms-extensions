var sa = Object.defineProperty;
var ps = (e) => {
  throw TypeError(e);
};
var oa = (e, t, r) => t in e ? sa(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var Qe = (e, t, r) => oa(e, typeof t != "symbol" ? t + "" : t, r), xi = (e, t, r) => t.has(e) || ps("Cannot " + r);
var v = (e, t, r) => (xi(e, t, "read from private field"), r ? r.call(e) : t.get(e)), $ = (e, t, r) => t.has(e) ? ps("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), q = (e, t, r, n) => (xi(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r), ce = (e, t, r) => (xi(e, t, "access private method"), r);
var Ji = Array.isArray, aa = Array.prototype.indexOf, Lr = Array.prototype.includes, oi = Array.from, la = Object.defineProperty, En = Object.getOwnPropertyDescriptor, ua = Object.getOwnPropertyDescriptors, ca = Object.prototype, fa = Array.prototype, Rs = Object.getPrototypeOf, hs = Object.isExtensible;
const da = () => {
};
function va(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function Ns() {
  var e, t, r = new Promise((n, i) => {
    e = n, t = i;
  });
  return { promise: r, resolve: e, reject: t };
}
function _s(e, t) {
  if (Array.isArray(e))
    return e;
  if (!(Symbol.iterator in e))
    return Array.from(e);
  const r = [];
  for (const n of e)
    if (r.push(n), r.length === t) break;
  return r;
}
const Ie = 2, an = 4, ai = 8, Os = 1 << 24, Ct = 16, Dt = 32, _r = 64, Ci = 128, xt = 512, Re = 1024, Pe = 2048, Ht = 4096, qe = 8192, Tt = 16384, Ur = 32768, Si = 1 << 25, ln = 65536, Xn = 1 << 17, ga = 1 << 18, dn = 1 << 19, pa = 1 << 20, Qt = 1 << 25, Pr = 65536, ei = 1 << 21, zr = 1 << 22, hr = 1 << 23, Xr = Symbol("$state"), ha = Symbol(""), Yn = Symbol("attributes"), Mi = Symbol("class"), _a = Symbol("style"), mn = Symbol("text"), Gn = Symbol("form reset"), li = new class extends Error {
  constructor() {
    super(...arguments);
    Qe(this, "name", "StaleReactionError");
    Qe(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
function ba() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function xa(e, t, r) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function ma(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function ya() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function wa(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function ka() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Ea() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Aa() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Ca() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Sa() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
const Ma = 1, Ta = 2, Da = 16, La = 1, Ra = 2, Le = Symbol("uninitialized"), Bs = "http://www.w3.org/1999/xhtml", Na = "http://www.w3.org/2000/svg", Oa = "http://www.w3.org/1998/Math/MathML";
function Ba() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function Pa() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function Ia() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function Ps(e) {
  return e === this.v;
}
function ja(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Is(e) {
  return !ja(e, this.v);
}
let lt = null;
function un(e) {
  lt = e;
}
function ui(e, t = !1, r) {
  lt = {
    p: lt,
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
function ci(e) {
  var t = (
    /** @type {ComponentContext} */
    lt
  ), r = t.e;
  if (r !== null) {
    t.e = null;
    for (var n of r)
      oo(n);
  }
  return t.i = !0, lt = t.p, /** @type {T} */
  {};
}
function js() {
  return !0;
}
let wr = [];
function Fs() {
  var e = wr;
  wr = [], va(e);
}
function Rr(e) {
  if (wr.length === 0 && !An) {
    var t = wr;
    queueMicrotask(() => {
      t === wr && Fs();
    });
  }
  wr.push(e);
}
function Fa() {
  for (; wr.length > 0; )
    Fs();
}
function Us(e) {
  var t = se;
  if (t === null)
    return ne.f |= hr, e;
  if ((t.f & Ur) === 0 && (t.f & an) === 0)
    throw e;
  pr(e, t);
}
function pr(e, t) {
  for (; t !== null; ) {
    if ((t.f & Ci) !== 0) {
      if ((t.f & Ur) === 0)
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
const Ua = -7169;
function Ee(e, t) {
  e.f = e.f & Ua | t;
}
function Vi(e) {
  (e.f & xt) !== 0 || e.deps === null ? Ee(e, Re) : Ee(e, Ht);
}
function Hs(e) {
  if (e !== null)
    for (const t of e)
      (t.f & Ie) === 0 || (t.f & Pr) === 0 || (t.f ^= Pr, Hs(
        /** @type {Derived} */
        t.deps
      ));
}
function Js(e, t, r) {
  (e.f & Pe) !== 0 ? t.add(e) : (e.f & Ht) !== 0 && r.add(e), Hs(e.deps), Ee(e, Re);
}
let mi = null, $r = null, Z = null, Ti = null, St = null, Di = null, An = !1, yi = !1, Zr = null, qn = null;
var bs = 0;
let Ha = 1;
var en, dr, Ar, tn, rn, Cr, nn, Wt, Dn, st, Ln, vr, It, jt, sn, Sr, pe, Li, yn, Ri, Vs, Ys, Wn, Ja, Ni, Qr;
const ni = class ni {
  constructor() {
    $(this, pe);
    Qe(this, "id", Ha++);
    /** True as soon as `#process` was called */
    $(this, en, !1);
    Qe(this, "linked", !0);
    /** @type {Batch | null} */
    $(this, dr, null);
    /** @type {Batch | null} */
    $(this, Ar, null);
    /** @type {Map<Effect, ReturnType<typeof deferred<any>>>} */
    Qe(this, "async_deriveds", /* @__PURE__ */ new Map());
    /**
     * The current values of any signals that are updated in this batch.
     * Tuple format: [value, is_derived] (note: is_derived is false for deriveds, too, if they were overridden via assignment)
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Value, [any, boolean]>}
     */
    Qe(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any signals (sources and deriveds) that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Value, any>}
     */
    Qe(this, "previous", /* @__PURE__ */ new Map());
    /**
     * Async effects which this batch doesn't take into account anymore when calculating blockers,
     * as it has a value for it already.
     * @type {Set<Effect>}
     */
    Qe(this, "unblocked", /* @__PURE__ */ new Set());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<(batch: Batch) => void>}
     */
    $(this, tn, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    $(this, rn, /* @__PURE__ */ new Set());
    /**
     * Callbacks that should run only when a fork is committed.
     * @type {Set<(batch: Batch) => void>}
     */
    $(this, Cr, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    $(this, nn, 0);
    /**
     * Async effects that are currently in flight, _not_ inside a pending boundary
     * @type {Map<Effect, number>}
     */
    $(this, Wt, /* @__PURE__ */ new Map());
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    $(this, Dn, null);
    /**
     * The root effects that need to be flushed
     * @type {Effect[]}
     */
    $(this, st, []);
    /**
     * Effects created while this batch was active.
     * @type {Effect[]}
     */
    $(this, Ln, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    $(this, vr, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    $(this, It, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    $(this, jt, /* @__PURE__ */ new Map());
    /**
     * Inverse of #skipped_branches which we need to tell prior batches to unskip them when committing
     * @type {Set<Effect>}
     */
    $(this, sn, /* @__PURE__ */ new Set());
    Qe(this, "is_fork", !1);
    $(this, Sr, !1);
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(t) {
    v(this, jt).has(t) || v(this, jt).set(t, { d: [], m: [] }), v(this, sn).delete(t);
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   * @param {(e: Effect) => void} callback
   */
  unskip_effect(t, r = (n) => this.schedule(n)) {
    var n = v(this, jt).get(t);
    if (n) {
      v(this, jt).delete(t);
      for (var i of n.d)
        Ee(i, Pe), r(i);
      for (i of n.m)
        Ee(i, Ht), r(i);
    }
    v(this, sn).add(t);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Value} source
   * @param {any} value
   * @param {boolean} [is_derived]
   */
  capture(t, r, n = !1) {
    t.v !== Le && !this.previous.has(t) && this.previous.set(t, t.v), (t.f & hr) === 0 && (this.current.set(t, [r, n]), St?.set(t, r)), this.is_fork || (t.v = r);
  }
  activate() {
    Z = this;
  }
  deactivate() {
    Z = null, St = null;
  }
  flush() {
    try {
      yi = !0, Z = this, ce(this, pe, yn).call(this);
    } finally {
      bs = 0, Di = null, Zr = null, qn = null, yi = !1, Z = null, St = null, Nr.clear();
    }
  }
  discard() {
    for (const t of v(this, rn)) t(this);
    v(this, rn).clear(), v(this, Cr).clear(), ce(this, pe, Qr).call(this);
  }
  /**
   * @param {Effect} effect
   */
  register_created_effect(t) {
    v(this, Ln).push(t);
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  increment(t, r) {
    if (q(this, nn, v(this, nn) + 1), t) {
      let n = v(this, Wt).get(r) ?? 0;
      v(this, Wt).set(r, n + 1);
    }
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  decrement(t, r) {
    if (q(this, nn, v(this, nn) - 1), t) {
      let n = v(this, Wt).get(r) ?? 0;
      n === 1 ? v(this, Wt).delete(r) : v(this, Wt).set(r, n - 1);
    }
    v(this, Sr) || (q(this, Sr, !0), Rr(() => {
      q(this, Sr, !1), this.linked && this.flush();
    }));
  }
  /**
   * @param {Set<Effect>} dirty_effects
   * @param {Set<Effect>} maybe_dirty_effects
   */
  transfer_effects(t, r) {
    for (const n of t)
      v(this, vr).add(n);
    for (const n of r)
      v(this, It).add(n);
    t.clear(), r.clear();
  }
  /** @param {(batch: Batch) => void} fn */
  oncommit(t) {
    v(this, tn).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    v(this, rn).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  on_fork_commit(t) {
    v(this, Cr).add(t);
  }
  run_fork_commit_callbacks() {
    for (const t of v(this, Cr)) t(this);
    v(this, Cr).clear();
  }
  settled() {
    return (v(this, Dn) ?? q(this, Dn, Ns())).promise;
  }
  static ensure() {
    var t;
    if (Z === null) {
      const r = Z = new ni();
      ce(t = r, pe, Ni).call(t), !yi && !An && Rr(() => {
        v(r, en) || r.flush();
      });
    }
    return Z;
  }
  apply() {
    {
      St = null;
      return;
    }
  }
  /**
   *
   * @param {Effect} effect
   */
  schedule(t) {
    if (Di = t, t.b?.is_pending && (t.f & (an | ai | Os)) !== 0 && (t.f & Ur) === 0) {
      t.b.defer_effect(t);
      return;
    }
    for (var r = t; r.parent !== null; ) {
      r = r.parent;
      var n = r.f;
      if (Zr !== null && r === se && (ne === null || (ne.f & Ie) === 0))
        return;
      if ((n & (_r | Dt)) !== 0) {
        if ((n & Re) === 0)
          return;
        r.f ^= Re;
      }
    }
    v(this, st).push(r);
  }
};
en = new WeakMap(), dr = new WeakMap(), Ar = new WeakMap(), tn = new WeakMap(), rn = new WeakMap(), Cr = new WeakMap(), nn = new WeakMap(), Wt = new WeakMap(), Dn = new WeakMap(), st = new WeakMap(), Ln = new WeakMap(), vr = new WeakMap(), It = new WeakMap(), jt = new WeakMap(), sn = new WeakMap(), Sr = new WeakMap(), pe = new WeakSet(), Li = function() {
  if (this.is_fork) return !0;
  for (const n of v(this, Wt).keys()) {
    for (var t = n, r = !1; t.parent !== null; ) {
      if (v(this, jt).has(t)) {
        r = !0;
        break;
      }
      t = t.parent;
    }
    if (!r)
      return !0;
  }
  return !1;
}, yn = function() {
  var u, c, _;
  if (q(this, en, !0), bs++ > 1e3 && (ce(this, pe, Qr).call(this), Ya()), !ce(this, pe, Li).call(this)) {
    for (const f of v(this, vr))
      v(this, It).delete(f), Ee(f, Pe), this.schedule(f);
    for (const f of v(this, It))
      Ee(f, Ht), this.schedule(f);
  }
  const t = v(this, st);
  q(this, st, []), this.apply();
  var r = Zr = [], n = [], i = qn = [];
  for (const f of t)
    try {
      ce(this, pe, Ri).call(this, f, r, n);
    } catch (d) {
      throw Ws(f), d;
    }
  if (Z = null, i.length > 0) {
    var o = ni.ensure();
    for (const f of i)
      o.schedule(f);
  }
  if (Zr = null, qn = null, ce(this, pe, Li).call(this)) {
    ce(this, pe, Wn).call(this, n), ce(this, pe, Wn).call(this, r);
    for (const [f, d] of v(this, jt))
      qs(f, d);
    i.length > 0 && /** @type {unknown} */
    ce(u = Z, pe, yn).call(u);
    return;
  }
  const a = ce(this, pe, Vs).call(this);
  if (a) {
    ce(c = a, pe, Ys).call(c, this);
    return;
  }
  v(this, vr).clear(), v(this, It).clear();
  for (const f of v(this, tn)) f(this);
  v(this, tn).clear(), Ti = this, xs(n), xs(r), Ti = null, v(this, Dn)?.resolve();
  var s = (
    /** @type {Batch | null} */
    /** @type {unknown} */
    Z
  );
  if (this.linked && v(this, nn) === 0 && ce(this, pe, Qr).call(this), v(this, st).length > 0) {
    s === null && (s = this, ce(this, pe, Ni).call(this));
    const f = s;
    v(f, st).push(...v(this, st).filter((d) => !v(f, st).includes(d)));
  }
  s !== null && ce(_ = s, pe, yn).call(_);
}, /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
Ri = function(t, r, n) {
  t.f ^= Re;
  for (var i = t.first; i !== null; ) {
    var o = i.f, a = (o & (Dt | _r)) !== 0, s = a && (o & Re) !== 0, u = s || (o & qe) !== 0 || v(this, jt).has(i);
    if (!u && i.fn !== null) {
      a ? i.f ^= Re : (o & an) !== 0 ? r.push(i) : In(i) && ((o & Ct) !== 0 && v(this, It).add(i), fn(i));
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
}, Vs = function() {
  for (var t = v(this, dr); t !== null; ) {
    if (!t.is_fork) {
      for (const [r, [, n]] of this.current)
        if (t.current.has(r) && !n)
          return t;
    }
    t = v(t, dr);
  }
  return null;
}, /**
 * @param {Batch} batch
 */
Ys = function(t) {
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
        if ((a & Ie) !== 0)
          r(
            /** @type {Derived} */
            u
          );
        else {
          var s = (
            /** @type {Effect} */
            u
          );
          a & (zr | Ct) && !this.async_deriveds.has(s) && (v(this, It).delete(s), Ee(s, Pe), this.schedule(s));
        }
      }
  };
  for (const i of this.current.keys())
    r(i);
  this.oncommit(() => t.discard()), ce(n = t, pe, Qr).call(n), Z = this, ce(this, pe, yn).call(this);
}, /**
 * @param {Effect[]} effects
 */
Wn = function(t) {
  for (var r = 0; r < t.length; r += 1)
    Js(t[r], v(this, vr), v(this, It));
}, Ja = function() {
  var _;
  ce(this, pe, Qr).call(this);
  for (let f = mi; f !== null; f = v(f, Ar)) {
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
    if (v(f, en)) {
      var i = [...f.current.keys()].filter((d) => !this.current.has(d));
      if (i.length === 0)
        t && f.discard();
      else if (r.length > 0) {
        if (t)
          for (const d of v(this, sn))
            f.unskip_effect(d, (C) => {
              var k;
              (C.f & (Ct | zr)) !== 0 ? f.schedule(C) : ce(k = f, pe, Wn).call(k, [C]);
            });
        f.activate();
        var o = /* @__PURE__ */ new Set(), a = /* @__PURE__ */ new Map();
        for (var s of r)
          Gs(s, i, o, a);
        a = /* @__PURE__ */ new Map();
        var u = [...f.current.keys()].filter(
          (d) => this.current.has(d) ? (
            /** @type {[any, boolean]} */
            this.current.get(d)[0] !== d.v
          ) : !0
        );
        if (u.length > 0)
          for (const d of v(this, Ln))
            (d.f & (Tt | qe | Xn)) === 0 && Yi(d, u, a) && ((d.f & (zr | Ct)) !== 0 ? (Ee(d, Pe), f.schedule(d)) : v(f, vr).add(d));
        if (v(f, st).length > 0 && !v(f, Sr)) {
          f.apply();
          for (var c of v(f, st))
            ce(_ = f, pe, Ri).call(_, c, [], []);
          q(f, st, []);
        }
        f.deactivate();
      }
    }
  }
}, Ni = function() {
  $r === null ? mi = $r = this : (q($r, Ar, this), q(this, dr, $r)), $r = this;
}, Qr = function() {
  var t = v(this, dr), r = v(this, Ar);
  t === null ? mi = r : q(t, Ar, r), r === null ? $r = t : q(r, dr, t), this.linked = !1;
};
let Ir = ni;
function Va(e) {
  var t = An;
  An = !0;
  try {
    for (var r; ; ) {
      if (Fa(), Z === null)
        return (
          /** @type {T} */
          r
        );
      Z.flush();
    }
  } finally {
    An = t;
  }
}
function Ya() {
  try {
    ka();
  } catch (e) {
    pr(e, Di);
  }
}
let Gt = null;
function xs(e) {
  var t = e.length;
  if (t !== 0) {
    for (var r = 0; r < t; ) {
      var n = e[r++];
      if ((n.f & (Tt | qe)) === 0 && In(n) && (Gt = /* @__PURE__ */ new Set(), fn(n), n.deps === null && n.first === null && n.nodes === null && n.teardown === null && n.ac === null && co(n), Gt?.size > 0)) {
        Nr.clear();
        for (const i of Gt) {
          if ((i.f & (Tt | qe)) !== 0) continue;
          const o = [i];
          let a = i.parent;
          for (; a !== null; )
            Gt.has(a) && (Gt.delete(a), o.push(a)), a = a.parent;
          for (let s = o.length - 1; s >= 0; s--) {
            const u = o[s];
            (u.f & (Tt | qe)) === 0 && fn(u);
          }
        }
        Gt.clear();
      }
    }
    Gt = null;
  }
}
function Gs(e, t, r, n) {
  if (!r.has(e) && (r.add(e), e.reactions !== null))
    for (const i of e.reactions) {
      const o = i.f;
      (o & Ie) !== 0 ? Gs(
        /** @type {Derived} */
        i,
        t,
        r,
        n
      ) : (o & (zr | Ct)) !== 0 && (o & Pe) === 0 && Yi(i, t, n) && (Ee(i, Pe), Gi(
        /** @type {Effect} */
        i
      ));
    }
}
function Yi(e, t, r) {
  const n = r.get(e);
  if (n !== void 0) return n;
  if (e.deps !== null)
    for (const i of e.deps) {
      if (Lr.call(t, i))
        return !0;
      if ((i.f & Ie) !== 0 && Yi(
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
function Gi(e) {
  Z.schedule(e);
}
function qs(e, t) {
  if (!((e.f & Dt) !== 0 && (e.f & Re) !== 0)) {
    (e.f & Pe) !== 0 ? t.d.push(e) : (e.f & Ht) !== 0 && t.m.push(e), Ee(e, Re);
    for (var r = e.first; r !== null; )
      qs(r, t), r = r.next;
  }
}
function Ws(e) {
  Ee(e, Re);
  for (var t = e.first; t !== null; )
    Ws(t), t = t.next;
}
function Ga(e) {
  let t = 0, r = jr(0), n;
  return () => {
    Ki() && (l(r), di(() => (t === 0 && (n = vi(() => e(() => Cn(r)))), t += 1, () => {
      Rr(() => {
        t -= 1, t === 0 && (n?.(), n = void 0, Cn(r));
      });
    })));
  };
}
var qa = ln | dn;
function Wa(e, t, r, n) {
  new $a(e, t, r, n);
}
var dt, Hi, vt, Mr, ze, gt, Ge, ot, $t, Tr, gr, on, Rn, Nn, Kt, ii, Ae, Ka, Qa, Za, Oi, $n, Kn, Bi, Pi;
class $a {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(t, r, n, i) {
    $(this, Ae);
    /** @type {Boundary | null} */
    Qe(this, "parent");
    Qe(this, "is_pending", !1);
    /**
     * API-level transformError transform function. Transforms errors before they reach the `failed` snippet.
     * Inherited from parent boundary, or defaults to identity.
     * @type {(error: unknown) => unknown}
     */
    Qe(this, "transform_error");
    /** @type {TemplateNode} */
    $(this, dt);
    /** @type {TemplateNode | null} */
    $(this, Hi, null);
    /** @type {BoundaryProps} */
    $(this, vt);
    /** @type {((anchor: Node) => void)} */
    $(this, Mr);
    /** @type {Effect} */
    $(this, ze);
    /** @type {Effect | null} */
    $(this, gt, null);
    /** @type {Effect | null} */
    $(this, Ge, null);
    /** @type {Effect | null} */
    $(this, ot, null);
    /** @type {DocumentFragment | null} */
    $(this, $t, null);
    $(this, Tr, 0);
    $(this, gr, 0);
    $(this, on, !1);
    /** @type {Set<Effect>} */
    $(this, Rn, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    $(this, Nn, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    $(this, Kt, null);
    $(this, ii, Ga(() => (q(this, Kt, jr(v(this, Tr))), () => {
      q(this, Kt, null);
    })));
    q(this, dt, t), q(this, vt, r), q(this, Mr, (o) => {
      var a = (
        /** @type {Effect} */
        se
      );
      a.b = this, a.f |= Ci, n(o);
    }), this.parent = /** @type {Effect} */
    se.b, this.transform_error = i ?? this.parent?.transform_error ?? ((o) => o), q(this, ze, Zi(() => {
      ce(this, Ae, Oi).call(this);
    }, qa));
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    Js(t, v(this, Rn), v(this, Nn));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!v(this, vt).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  update_pending_count(t, r) {
    ce(this, Ae, Bi).call(this, t, r), q(this, Tr, v(this, Tr) + t), !(!v(this, Kt) || v(this, on)) && (q(this, on, !0), Rr(() => {
      q(this, on, !1), v(this, Kt) && cn(v(this, Kt), v(this, Tr));
    }));
  }
  get_effect_pending() {
    return v(this, ii).call(this), l(
      /** @type {Source<number>} */
      v(this, Kt)
    );
  }
  /** @param {unknown} error */
  error(t) {
    if (!v(this, vt).onerror && !v(this, vt).failed)
      throw t;
    Z?.is_fork ? (v(this, gt) && Z.skip_effect(v(this, gt)), v(this, Ge) && Z.skip_effect(v(this, Ge)), v(this, ot) && Z.skip_effect(v(this, ot)), Z.on_fork_commit(() => {
      ce(this, Ae, Pi).call(this, t);
    })) : ce(this, Ae, Pi).call(this, t);
  }
}
dt = new WeakMap(), Hi = new WeakMap(), vt = new WeakMap(), Mr = new WeakMap(), ze = new WeakMap(), gt = new WeakMap(), Ge = new WeakMap(), ot = new WeakMap(), $t = new WeakMap(), Tr = new WeakMap(), gr = new WeakMap(), on = new WeakMap(), Rn = new WeakMap(), Nn = new WeakMap(), Kt = new WeakMap(), ii = new WeakMap(), Ae = new WeakSet(), Ka = function() {
  try {
    q(this, gt, _t(() => v(this, Mr).call(this, v(this, dt))));
  } catch (t) {
    this.error(t);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
Qa = function(t) {
  const r = v(this, vt).failed;
  r && q(this, ot, _t(() => {
    r(
      v(this, dt),
      () => t,
      () => () => {
      }
    );
  }));
}, Za = function() {
  const t = v(this, vt).pending;
  t && (this.is_pending = !0, q(this, Ge, _t(() => t(v(this, dt)))), Rr(() => {
    var r = q(this, $t, document.createDocumentFragment()), n = Zt();
    r.append(n), q(this, gt, ce(this, Ae, Kn).call(this, () => _t(() => v(this, Mr).call(this, n)))), v(this, gr) === 0 && (v(this, dt).before(r), q(this, $t, null), Or(
      /** @type {Effect} */
      v(this, Ge),
      () => {
        q(this, Ge, null);
      }
    ), ce(this, Ae, $n).call(
      this,
      /** @type {Batch} */
      Z
    ));
  }));
}, Oi = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), q(this, gr, 0), q(this, Tr, 0), q(this, gt, _t(() => {
      v(this, Mr).call(this, v(this, dt));
    })), v(this, gr) > 0) {
      var t = q(this, $t, document.createDocumentFragment());
      es(v(this, gt), t);
      const r = (
        /** @type {(anchor: Node) => void} */
        v(this, vt).pending
      );
      q(this, Ge, _t(() => r(v(this, dt))));
    } else
      ce(this, Ae, $n).call(
        this,
        /** @type {Batch} */
        Z
      );
  } catch (r) {
    this.error(r);
  }
}, /**
 * @param {Batch} batch
 */
$n = function(t) {
  this.is_pending = !1, t.transfer_effects(v(this, Rn), v(this, Nn));
}, /**
 * @template T
 * @param {() => T} fn
 */
Kn = function(t) {
  var r = se, n = ne, i = lt;
  Jt(v(this, ze)), yt(v(this, ze)), un(v(this, ze).ctx);
  try {
    return Ir.ensure(), t();
  } catch (o) {
    return Us(o), null;
  } finally {
    Jt(r), yt(n), un(i);
  }
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 * @param {Batch} batch
 */
Bi = function(t, r) {
  var n;
  if (!this.has_pending_snippet()) {
    this.parent && ce(n = this.parent, Ae, Bi).call(n, t, r);
    return;
  }
  q(this, gr, v(this, gr) + t), v(this, gr) === 0 && (ce(this, Ae, $n).call(this, r), v(this, Ge) && Or(v(this, Ge), () => {
    q(this, Ge, null);
  }), v(this, $t) && (v(this, dt).before(v(this, $t)), q(this, $t, null)));
}, /**
 * @param {unknown} error
 */
Pi = function(t) {
  v(this, gt) && (et(v(this, gt)), q(this, gt, null)), v(this, Ge) && (et(v(this, Ge)), q(this, Ge, null)), v(this, ot) && (et(v(this, ot)), q(this, ot, null));
  var r = v(this, vt).onerror;
  let n = v(this, vt).failed;
  var i = !1, o = !1;
  const a = () => {
    if (i) {
      Ia();
      return;
    }
    i = !0, o && Sa(), v(this, ot) !== null && Or(v(this, ot), () => {
      q(this, ot, null);
    }), ce(this, Ae, Kn).call(this, () => {
      ce(this, Ae, Oi).call(this);
    });
  }, s = (u) => {
    try {
      o = !0, r?.(u, a), o = !1;
    } catch (c) {
      pr(c, v(this, ze) && v(this, ze).parent);
    }
    n && q(this, ot, ce(this, Ae, Kn).call(this, () => {
      try {
        return _t(() => {
          var c = (
            /** @type {Effect} */
            se
          );
          c.b = this, c.f |= Ci, n(
            v(this, dt),
            () => u,
            () => a
          );
        });
      } catch (c) {
        return pr(
          c,
          /** @type {Effect} */
          v(this, ze).parent
        ), null;
      }
    }));
  };
  Rr(() => {
    var u;
    try {
      u = this.transform_error(t);
    } catch (c) {
      pr(c, v(this, ze) && v(this, ze).parent);
      return;
    }
    u !== null && typeof u == "object" && typeof /** @type {any} */
    u.then == "function" ? u.then(
      s,
      /** @param {unknown} e */
      (c) => pr(c, v(this, ze) && v(this, ze).parent)
    ) : s(u);
  });
};
function za(e, t, r, n) {
  const i = qi;
  var o = e.filter((d) => !d.settled);
  if (r.length === 0 && o.length === 0) {
    n(t.map(i));
    return;
  }
  var a = (
    /** @type {Effect} */
    se
  ), s = Xa(), u = o.length === 1 ? o[0].promise : o.length > 1 ? Promise.all(o.map((d) => d.promise)) : null;
  function c(d) {
    if ((a.f & Tt) === 0) {
      s();
      try {
        n(d);
      } catch (C) {
        pr(C, a);
      }
      ti();
    }
  }
  var _ = $s();
  if (r.length === 0) {
    u.then(() => c(t.map(i))).finally(_);
    return;
  }
  function f() {
    Promise.all(r.map((d) => /* @__PURE__ */ el(d))).then((d) => c([...t.map(i), ...d])).catch((d) => pr(d, a)).finally(_);
  }
  u ? u.then(() => {
    s(), f(), ti();
  }) : f();
}
function Xa() {
  var e = (
    /** @type {Effect} */
    se
  ), t = ne, r = lt, n = (
    /** @type {Batch} */
    Z
  );
  return function(o = !0) {
    Jt(e), yt(t), un(r), o && (e.f & Tt) === 0 && (n?.activate(), n?.apply());
  };
}
function ti(e = !0) {
  Jt(null), yt(null), un(null), e && Z?.deactivate();
}
function $s() {
  var e = (
    /** @type {Effect} */
    se
  ), t = (
    /** @type {Boundary} */
    e.b
  ), r = (
    /** @type {Batch} */
    Z
  ), n = t.is_rendered();
  return t.update_pending_count(1, r), r.increment(n, e), () => {
    t.update_pending_count(-1, r), r.decrement(n, e);
  };
}
// @__NO_SIDE_EFFECTS__
function qi(e) {
  var t = Ie | Pe;
  return se !== null && (se.f |= dn), {
    ctx: lt,
    deps: null,
    effects: null,
    equals: Ps,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      Le
    ),
    wv: 0,
    parent: se,
    ac: null
  };
}
const Jn = Symbol("obsolete");
// @__NO_SIDE_EFFECTS__
function el(e, t, r) {
  let n = (
    /** @type {Effect | null} */
    se
  );
  n === null && ba();
  var i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), o = jr(
    /** @type {V} */
    Le
  ), a = !ne, s = /* @__PURE__ */ new Set();
  return vl(() => {
    var u = (
      /** @type {Effect} */
      se
    ), c = Ns();
    i = c.promise;
    try {
      Promise.resolve(e()).then(c.resolve, (C) => {
        C !== li && c.reject(C);
      }).finally(ti);
    } catch (C) {
      c.reject(C), ti();
    }
    var _ = (
      /** @type {Batch} */
      Z
    );
    if (a) {
      if ((u.f & Ur) !== 0)
        var f = $s();
      if (
        /** @type {Boundary} */
        n.b.is_rendered()
      )
        _.async_deriveds.get(u)?.reject(Jn);
      else
        for (const C of s.values())
          C.reject(Jn);
      s.add(c), _.async_deriveds.set(u, c);
    }
    const d = (C, k = void 0) => {
      f?.(), s.delete(c), k !== Jn && (_.activate(), k ? (o.f |= hr, cn(o, k)) : ((o.f & hr) !== 0 && (o.f ^= hr), cn(o, C)), _.deactivate());
    };
    c.promise.then(d, (C) => d(null, C || "unknown"));
  }), Qi(() => {
    for (const u of s)
      u.reject(Jn);
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
function Qn(e) {
  const t = /* @__PURE__ */ qi(e);
  return go(t), t;
}
// @__NO_SIDE_EFFECTS__
function tl(e) {
  const t = /* @__PURE__ */ qi(e);
  return t.equals = Is, t;
}
function rl(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var r = 0; r < t.length; r += 1)
      et(
        /** @type {Effect} */
        t[r]
      );
  }
}
function Wi(e) {
  var t, r = se, n = e.parent;
  if (!br && n !== null && e.v !== Le && // if it was never evaluated before, it's guaranteed to fail downstream, so we try to execute instead
  (n.f & (Tt | qe)) !== 0)
    return Ba(), e.v;
  Jt(n);
  try {
    e.f &= ~Pr, rl(e), t = bo(e);
  } finally {
    Jt(r);
  }
  return t;
}
function Ks(e) {
  var t = Wi(e);
  if (!e.equals(t) && (e.wv = ho(), (!Z?.is_fork || e.deps === null) && (Z !== null ? (Z.capture(e, t, !0), Ti?.capture(e, t, !0)) : e.v = t, e.deps === null))) {
    Ee(e, Re);
    return;
  }
  br || (St !== null ? (Ki() || Z?.is_fork) && St.set(e, t) : Vi(e));
}
function nl(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      (t.teardown || t.ac) && (t.teardown?.(), t.ac?.abort(li), t.fn !== null && (t.teardown = da), t.ac = null, Mn(t, 0), zi(t));
}
function Qs(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      t.teardown && t.fn !== null && fn(t);
}
let ri = /* @__PURE__ */ new Set();
const Nr = /* @__PURE__ */ new Map();
let Zs = !1;
function jr(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Ps,
    rv: 0,
    wv: 0
  };
  return r;
}
// @__NO_SIDE_EFFECTS__
function L(e, t) {
  const r = jr(e);
  return go(r), r;
}
// @__NO_SIDE_EFFECTS__
function il(e, t = !1, r = !0) {
  const n = jr(e);
  return t || (n.equals = Is), n;
}
function x(e, t, r = !1) {
  ne !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Mt || (ne.f & Xn) !== 0) && js() && (ne.f & (Ie | Ct | zr | Xn)) !== 0 && (mt === null || !Lr.call(mt, e)) && Ca();
  let n = r ? Ut(t) : t;
  return cn(e, n, qn);
}
function cn(e, t, r = null) {
  if (!e.equals(t)) {
    Nr.set(e, br ? t : e.v);
    var n = Ir.ensure();
    if (n.capture(e, t), (e.f & Ie) !== 0) {
      const i = (
        /** @type {Derived} */
        e
      );
      (e.f & Pe) !== 0 && Wi(i), St === null && Vi(i);
    }
    e.wv = ho(), Xs(e, Pe, r), se !== null && (se.f & Re) !== 0 && (se.f & (Dt | _r)) === 0 && (ft === null ? pl([e]) : ft.push(e)), !n.is_fork && ri.size > 0 && !Zs && sl();
  }
  return t;
}
function sl() {
  Zs = !1;
  for (const e of ri) {
    (e.f & Re) !== 0 && Ee(e, Ht);
    let t;
    try {
      t = In(e);
    } catch {
      t = !0;
    }
    t && fn(e);
  }
  ri.clear();
}
function zs(e, t = 1) {
  var r = l(e);
  return x(e, t === 1 ? ++r : --r);
}
function Cn(e) {
  x(e, e.v + 1);
}
function Xs(e, t, r) {
  var n = e.reactions;
  if (n !== null)
    for (var i = n.length, o = 0; o < i; o++) {
      var a = n[o], s = a.f, u = (s & Pe) === 0;
      if (u && Ee(a, t), (s & Xn) !== 0)
        ri.add(
          /** @type {Effect} */
          a
        );
      else if ((s & Ie) !== 0) {
        var c = (
          /** @type {Derived} */
          a
        );
        St?.delete(c), (s & Pr) === 0 && (s & xt && (se === null || (se.f & ei) === 0) && (a.f |= Pr), Xs(c, Ht, r));
      } else if (u) {
        var _ = (
          /** @type {Effect} */
          a
        );
        (s & Ct) !== 0 && Gt !== null && Gt.add(_), r !== null ? r.push(_) : Gi(_);
      }
    }
}
function Ut(e) {
  if (typeof e != "object" || e === null || Xr in e)
    return e;
  const t = Rs(e);
  if (t !== ca && t !== fa)
    return e;
  var r = /* @__PURE__ */ new Map(), n = Ji(e), i = /* @__PURE__ */ L(0), o = Br, a = (s) => {
    if (Br === o)
      return s();
    var u = ne, c = Br;
    yt(null), Es(o);
    var _ = s();
    return yt(u), Es(c), _;
  };
  return n && r.set("length", /* @__PURE__ */ L(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(s, u, c) {
        (!("value" in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && Ea();
        var _ = r.get(u);
        return _ === void 0 ? a(() => {
          var f = /* @__PURE__ */ L(c.value);
          return r.set(u, f), f;
        }) : x(_, c.value, !0), !0;
      },
      deleteProperty(s, u) {
        var c = r.get(u);
        if (c === void 0) {
          if (u in s) {
            const _ = a(() => /* @__PURE__ */ L(Le));
            r.set(u, _), Cn(i);
          }
        } else
          x(c, Le), Cn(i);
        return !0;
      },
      get(s, u, c) {
        if (u === Xr)
          return e;
        var _ = r.get(u), f = u in s;
        if (_ === void 0 && (!f || En(s, u)?.writable) && (_ = a(() => {
          var C = Ut(f ? s[u] : Le), k = /* @__PURE__ */ L(C);
          return k;
        }), r.set(u, _)), _ !== void 0) {
          var d = l(_);
          return d === Le ? void 0 : d;
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
          if (f !== void 0 && d !== Le)
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
        if (u === Xr)
          return !0;
        var c = r.get(u), _ = c !== void 0 && c.v !== Le || Reflect.has(s, u);
        if (c !== void 0 || se !== null && (!_ || En(s, u)?.writable)) {
          c === void 0 && (c = a(() => {
            var d = _ ? Ut(s[u]) : Le, C = /* @__PURE__ */ L(d);
            return C;
          }), r.set(u, c));
          var f = l(c);
          if (f === Le)
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
            k !== void 0 ? x(k, Le) : C in s && (k = a(() => /* @__PURE__ */ L(Le)), r.set(C + "", k));
          }
        if (f === void 0)
          (!d || En(s, u)?.writable) && (f = a(() => /* @__PURE__ */ L(void 0)), x(f, Ut(c)), r.set(u, f));
        else {
          d = f.v !== Le;
          var B = a(() => Ut(c));
          x(f, B);
        }
        var F = Reflect.getOwnPropertyDescriptor(s, u);
        if (F?.set && F.set.call(_, c), !d) {
          if (n && typeof u == "string") {
            var W = (
              /** @type {Source<number>} */
              r.get("length")
            ), I = Number(u);
            Number.isInteger(I) && I >= W.v && x(W, I + 1);
          }
          Cn(i);
        }
        return !0;
      },
      ownKeys(s) {
        l(i);
        var u = Reflect.ownKeys(s).filter((f) => {
          var d = r.get(f);
          return d === void 0 || d.v !== Le;
        });
        for (var [c, _] of r)
          _.v !== Le && !(c in s) && u.push(c);
        return u;
      },
      setPrototypeOf() {
        Aa();
      }
    }
  );
}
function ms(e) {
  try {
    if (e !== null && typeof e == "object" && Xr in e)
      return e[Xr];
  } catch {
  }
  return e;
}
function ol(e, t) {
  return Object.is(ms(e), ms(t));
}
var ys, eo, to, ro;
function al() {
  if (ys === void 0) {
    ys = window, eo = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, r = Text.prototype;
    to = En(t, "firstChild").get, ro = En(t, "nextSibling").get, hs(e) && (e[Mi] = void 0, e[Yn] = null, e[_a] = void 0, e.__e = void 0), hs(r) && (r[mn] = void 0);
  }
}
function Zt(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function bt(e) {
  return (
    /** @type {TemplateNode | null} */
    to.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function Pn(e) {
  return (
    /** @type {TemplateNode | null} */
    ro.call(e)
  );
}
function h(e, t) {
  return /* @__PURE__ */ bt(e);
}
function Ze(e, t = !1) {
  {
    var r = /* @__PURE__ */ bt(e);
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ Pn(r) : r;
  }
}
function w(e, t = 1, r = !1) {
  let n = e;
  for (; t--; )
    n = /** @type {TemplateNode} */
    /* @__PURE__ */ Pn(n);
  return n;
}
function ll(e) {
  e.textContent = "";
}
function no() {
  return !1;
}
function io(e, t, r) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElementNS(t ?? Bs, e, void 0)
  );
}
let ws = !1;
function ul() {
  ws || (ws = !0, document.addEventListener(
    "reset",
    (e) => {
      Promise.resolve().then(() => {
        if (!e.defaultPrevented)
          for (
            const t of
            /**@type {HTMLFormElement} */
            e.target.elements
          )
            t[Gn]?.();
      });
    },
    // In the capture phase to guarantee we get noticed of it (no possibility of stopPropagation)
    { capture: !0 }
  ));
}
function fi(e) {
  var t = ne, r = se;
  yt(null), Jt(null);
  try {
    return e();
  } finally {
    yt(t), Jt(r);
  }
}
function $i(e, t, r, n = r) {
  e.addEventListener(t, () => fi(r));
  const i = (
    /** @type {any} */
    e[Gn]
  );
  i ? e[Gn] = () => {
    i(), n(!0);
  } : e[Gn] = () => n(!0), ul();
}
function cl(e) {
  se === null && (ne === null && wa(), ya()), br && ma();
}
function fl(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function zt(e, t) {
  var r = se;
  r !== null && (r.f & qe) !== 0 && (e |= qe);
  var n = {
    ctx: lt,
    deps: null,
    nodes: null,
    f: e | Pe | xt,
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
  Z?.register_created_effect(n);
  var i = n;
  if ((e & an) !== 0)
    Zr !== null ? Zr.push(n) : Ir.ensure().schedule(n);
  else if (t !== null) {
    try {
      fn(n);
    } catch (a) {
      throw et(n), a;
    }
    i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && // either `null`, or a singular child
    (i.f & dn) === 0 && (i = i.first, (e & Ct) !== 0 && (e & ln) !== 0 && i !== null && (i.f |= ln));
  }
  if (i !== null && (i.parent = r, r !== null && fl(i, r), ne !== null && (ne.f & Ie) !== 0 && (e & _r) === 0)) {
    var o = (
      /** @type {Derived} */
      ne
    );
    (o.effects ?? (o.effects = [])).push(i);
  }
  return n;
}
function Ki() {
  return ne !== null && !Mt;
}
function Qi(e) {
  const t = zt(ai, null);
  return Ee(t, Re), t.teardown = e, t;
}
function so(e) {
  cl();
  var t = (
    /** @type {Effect} */
    se.f
  ), r = !ne && (t & Dt) !== 0 && (t & Ur) === 0;
  if (r) {
    var n = (
      /** @type {ComponentContext} */
      lt
    );
    (n.e ?? (n.e = [])).push(e);
  } else
    return oo(e);
}
function oo(e) {
  return zt(an | pa, e);
}
function dl(e) {
  Ir.ensure();
  const t = zt(_r | dn, e);
  return (r = {}) => new Promise((n) => {
    r.outro ? Or(t, () => {
      et(t), n(void 0);
    }) : (et(t), n(void 0));
  });
}
function ao(e) {
  return zt(an, e);
}
function vl(e) {
  return zt(zr | dn, e);
}
function di(e, t = 0) {
  return zt(ai | t, e);
}
function U(e, t = [], r = [], n = []) {
  za(n, t, r, (i) => {
    zt(ai, () => e(...i.map(l)));
  });
}
function Zi(e, t = 0) {
  var r = zt(Ct | t, e);
  return r;
}
function _t(e) {
  return zt(Dt | dn, e);
}
function lo(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = br, n = ne;
    ks(!0), yt(null);
    try {
      t.call(null);
    } finally {
      ks(r), yt(n);
    }
  }
}
function zi(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    const i = r.ac;
    i !== null && fi(() => {
      i.abort(li);
    });
    var n = r.next;
    (r.f & _r) !== 0 ? r.parent = null : et(r, t), r = n;
  }
}
function gl(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & Dt) === 0 && et(t), t = r;
  }
}
function et(e, t = !0) {
  var r = !1;
  (t || (e.f & ga) !== 0) && e.nodes !== null && e.nodes.end !== null && (uo(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), r = !0), Ee(e, Si), zi(e, t && !r), Mn(e, 0);
  var n = e.nodes && e.nodes.t;
  if (n !== null)
    for (const o of n)
      o.stop();
  lo(e), e.f ^= Si, e.f |= Tt;
  var i = e.parent;
  i !== null && i.first !== null && co(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function uo(e, t) {
  for (; e !== null; ) {
    var r = e === t ? null : /* @__PURE__ */ Pn(e);
    e.remove(), e = r;
  }
}
function co(e) {
  var t = e.parent, r = e.prev, n = e.next;
  r !== null && (r.next = n), n !== null && (n.prev = r), t !== null && (t.first === e && (t.first = n), t.last === e && (t.last = r));
}
function Or(e, t, r = !0) {
  var n = [];
  fo(e, n, !0);
  var i = () => {
    r && et(e), t && t();
  }, o = n.length;
  if (o > 0) {
    var a = () => --o || i();
    for (var s of n)
      s.out(a);
  } else
    i();
}
function fo(e, t, r) {
  if ((e.f & qe) === 0) {
    e.f ^= qe;
    var n = e.nodes && e.nodes.t;
    if (n !== null)
      for (const s of n)
        (s.is_global || r) && t.push(s);
    for (var i = e.first; i !== null; ) {
      var o = i.next;
      if ((i.f & _r) === 0) {
        var a = (i.f & ln) !== 0 || // If this is a branch effect without a block effect parent,
        // it means the parent block effect was pruned. In that case,
        // transparency information was transferred to the branch effect.
        (i.f & Dt) !== 0 && (e.f & Ct) !== 0;
        fo(i, t, a ? r : !1);
      }
      i = o;
    }
  }
}
function Xi(e) {
  vo(e, !0);
}
function vo(e, t) {
  if ((e.f & qe) !== 0) {
    e.f ^= qe, (e.f & Re) === 0 && (Ee(e, Pe), Ir.ensure().schedule(e));
    for (var r = e.first; r !== null; ) {
      var n = r.next, i = (r.f & ln) !== 0 || (r.f & Dt) !== 0;
      vo(r, i ? t : !1), r = n;
    }
    var o = e.nodes && e.nodes.t;
    if (o !== null)
      for (const a of o)
        (a.is_global || t) && a.in();
  }
}
function es(e, t) {
  if (e.nodes)
    for (var r = e.nodes.start, n = e.nodes.end; r !== null; ) {
      var i = r === n ? null : /* @__PURE__ */ Pn(r);
      t.append(r), r = i;
    }
}
let Zn = !1, br = !1;
function ks(e) {
  br = e;
}
let ne = null, Mt = !1;
function yt(e) {
  ne = e;
}
let se = null;
function Jt(e) {
  se = e;
}
let mt = null;
function go(e) {
  ne !== null && (mt === null ? mt = [e] : mt.push(e));
}
let Xe = null, it = 0, ft = null;
function pl(e) {
  ft = e;
}
let po = 1, kr = 0, Br = kr;
function Es(e) {
  Br = e;
}
function ho() {
  return ++po;
}
function In(e) {
  var t = e.f;
  if ((t & Pe) !== 0)
    return !0;
  if (t & Ie && (e.f &= ~Pr), (t & Ht) !== 0) {
    for (var r = (
      /** @type {Value[]} */
      e.deps
    ), n = r.length, i = 0; i < n; i++) {
      var o = r[i];
      if (In(
        /** @type {Derived} */
        o
      ) && Ks(
        /** @type {Derived} */
        o
      ), o.wv > e.wv)
        return !0;
    }
    (t & xt) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    St === null && Ee(e, Re);
  }
  return !1;
}
function _o(e, t, r = !0) {
  var n = e.reactions;
  if (n !== null && !(mt !== null && Lr.call(mt, e)))
    for (var i = 0; i < n.length; i++) {
      var o = n[i];
      (o.f & Ie) !== 0 ? _o(
        /** @type {Derived} */
        o,
        t,
        !1
      ) : t === o && (r ? Ee(o, Pe) : (o.f & Re) !== 0 && Ee(o, Ht), Gi(
        /** @type {Effect} */
        o
      ));
    }
}
function bo(e) {
  var B;
  var t = Xe, r = it, n = ft, i = ne, o = mt, a = lt, s = Mt, u = Br, c = e.f;
  Xe = /** @type {null | Value[]} */
  null, it = 0, ft = null, ne = (c & (Dt | _r)) === 0 ? e : null, mt = null, un(e.ctx), Mt = !1, Br = ++kr, e.ac !== null && (fi(() => {
    e.ac.abort(li);
  }), e.ac = null);
  try {
    e.f |= ei;
    var _ = (
      /** @type {Function} */
      e.fn
    ), f = _();
    e.f |= Ur;
    var d = e.deps, C = Z?.is_fork;
    if (Xe !== null) {
      var k;
      if (C || Mn(e, it), d !== null && it > 0)
        for (d.length = it + Xe.length, k = 0; k < Xe.length; k++)
          d[it + k] = Xe[k];
      else
        e.deps = d = Xe;
      if (Ki() && (e.f & xt) !== 0)
        for (k = it; k < d.length; k++)
          ((B = d[k]).reactions ?? (B.reactions = [])).push(e);
    } else !C && d !== null && it < d.length && (Mn(e, it), d.length = it);
    if (js() && ft !== null && !Mt && d !== null && (e.f & (Ie | Ht | Pe)) === 0)
      for (k = 0; k < /** @type {Source[]} */
      ft.length; k++)
        _o(
          ft[k],
          /** @type {Effect} */
          e
        );
    if (i !== null && i !== e) {
      if (kr++, i.deps !== null)
        for (let F = 0; F < r; F += 1)
          i.deps[F].rv = kr;
      if (t !== null)
        for (const F of t)
          F.rv = kr;
      ft !== null && (n === null ? n = ft : n.push(.../** @type {Source[]} */
      ft));
    }
    return (e.f & hr) !== 0 && (e.f ^= hr), f;
  } catch (F) {
    return Us(F);
  } finally {
    e.f ^= ei, Xe = t, it = r, ft = n, ne = i, mt = o, un(a), Mt = s, Br = u;
  }
}
function hl(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var n = aa.call(r, e);
    if (n !== -1) {
      var i = r.length - 1;
      i === 0 ? r = t.reactions = null : (r[n] = r[i], r.pop());
    }
  }
  if (r === null && (t.f & Ie) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Xe === null || !Lr.call(Xe, t))) {
    var o = (
      /** @type {Derived} */
      t
    );
    (o.f & xt) !== 0 && (o.f ^= xt, o.f &= ~Pr), o.v !== Le && Vi(o), nl(o), Mn(o, 0);
  }
}
function Mn(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var n = t; n < r.length; n++)
      hl(e, r[n]);
}
function fn(e) {
  var t = e.f;
  if ((t & Tt) === 0) {
    Ee(e, Re);
    var r = se, n = Zn;
    se = e, Zn = !0;
    try {
      (t & (Ct | Os)) !== 0 ? gl(e) : zi(e), lo(e);
      var i = bo(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = po;
      var o;
    } finally {
      Zn = n, se = r;
    }
  }
}
async function _l() {
  await Promise.resolve(), Va();
}
function l(e) {
  var t = e.f, r = (t & Ie) !== 0;
  if (ne !== null && !Mt) {
    var n = se !== null && (se.f & Tt) !== 0;
    if (!n && (mt === null || !Lr.call(mt, e))) {
      var i = ne.deps;
      if ((ne.f & ei) !== 0)
        e.rv < kr && (e.rv = kr, Xe === null && i !== null && i[it] === e ? it++ : Xe === null ? Xe = [e] : Xe.push(e));
      else {
        ne.deps ?? (ne.deps = []), Lr.call(ne.deps, e) || ne.deps.push(e);
        var o = e.reactions;
        o === null ? e.reactions = [ne] : Lr.call(o, ne) || o.push(ne);
      }
    }
  }
  if (br && Nr.has(e))
    return Nr.get(e);
  if (r) {
    var a = (
      /** @type {Derived} */
      e
    );
    if (br) {
      var s = a.v;
      return ((a.f & Re) === 0 && a.reactions !== null || mo(a)) && (s = Wi(a)), Nr.set(a, s), s;
    }
    var u = (a.f & xt) === 0 && !Mt && ne !== null && (Zn || (ne.f & xt) !== 0), c = (a.f & Ur) === 0;
    In(a) && (u && (a.f |= xt), Ks(a)), u && !c && (Qs(a), xo(a));
  }
  if (St?.has(e))
    return St.get(e);
  if ((e.f & hr) !== 0)
    throw e.v;
  return e.v;
}
function xo(e) {
  if (e.f |= xt, e.deps !== null)
    for (const t of e.deps)
      (t.reactions ?? (t.reactions = [])).push(e), (t.f & Ie) !== 0 && (t.f & xt) === 0 && (Qs(
        /** @type {Derived} */
        t
      ), xo(
        /** @type {Derived} */
        t
      ));
}
function mo(e) {
  if (e.v === Le) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (Nr.has(t) || (t.f & Ie) !== 0 && mo(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function vi(e) {
  var t = Mt;
  try {
    return Mt = !0, e();
  } finally {
    Mt = t;
  }
}
const bl = ["touchstart", "touchmove"];
function xl(e) {
  return bl.includes(e);
}
const Er = Symbol("events"), yo = /* @__PURE__ */ new Set(), Ii = /* @__PURE__ */ new Set();
function ml(e, t, r, n = {}) {
  function i(o) {
    if (n.capture || ji.call(t, o), !o.cancelBubble)
      return fi(() => r?.call(this, o));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? Rr(() => {
    t.addEventListener(e, i, n);
  }) : t.addEventListener(e, i, n), i;
}
function wi(e, t, r, n, i) {
  var o = { capture: n, passive: i }, a = ml(e, t, r, o);
  (t === document.body || // @ts-ignore
  t === window || // @ts-ignore
  t === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  t instanceof HTMLMediaElement) && Qi(() => {
    t.removeEventListener(e, a, o);
  });
}
function X(e, t, r) {
  (t[Er] ?? (t[Er] = {}))[e] = r;
}
function ts(e) {
  for (var t = 0; t < e.length; t++)
    yo.add(e[t]);
  for (var r of Ii)
    r(e);
}
let As = null;
function ji(e) {
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), n = e.type, i = e.composedPath?.() || [], o = (
    /** @type {null | Element} */
    i[0] || e.target
  );
  As = e;
  var a = 0, s = As === e && e[Er];
  if (s) {
    var u = i.indexOf(s);
    if (u !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e[Er] = t;
      return;
    }
    var c = i.indexOf(t);
    if (c === -1)
      return;
    u <= c && (a = u);
  }
  if (o = /** @type {Element} */
  i[a] || e.target, o !== t) {
    la(e, "currentTarget", {
      configurable: !0,
      get() {
        return o || r;
      }
    });
    var _ = ne, f = se;
    yt(null), Jt(null);
    try {
      for (var d, C = []; o !== null; ) {
        var k = o.assignedSlot || o.parentNode || /** @type {any} */
        o.host || null;
        try {
          var B = o[Er]?.[n];
          B != null && (!/** @type {any} */
          o.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === o) && B.call(o, e);
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
      e[Er] = t, delete e.currentTarget, yt(_), Jt(f);
    }
  }
}
const yl = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (e) => e
  })
);
function wl(e) {
  return (
    /** @type {string} */
    yl?.createHTML(e) ?? e
  );
}
function wo(e) {
  var t = io("template");
  return t.innerHTML = wl(e.replaceAll("<!>", "<!---->")), t.content;
}
function Fr(e, t) {
  var r = (
    /** @type {Effect} */
    se
  );
  r.nodes === null && (r.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function N(e, t) {
  var r = (t & La) !== 0, n = (t & Ra) !== 0, i, o = !e.startsWith("<!>");
  return () => {
    i === void 0 && (i = wo(o ? e : "<!>" + e), r || (i = /** @type {TemplateNode} */
    /* @__PURE__ */ bt(i)));
    var a = (
      /** @type {TemplateNode} */
      n || eo ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (r) {
      var s = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ bt(a)
      ), u = (
        /** @type {TemplateNode} */
        a.lastChild
      );
      Fr(s, u);
    } else
      Fr(a, a);
    return a;
  };
}
// @__NO_SIDE_EFFECTS__
function kl(e, t, r = "svg") {
  var n = !e.startsWith("<!>"), i = `<${r}>${n ? e : "<!>" + e}</${r}>`, o;
  return () => {
    if (!o) {
      var a = (
        /** @type {DocumentFragment} */
        wo(i)
      ), s = (
        /** @type {Element} */
        /* @__PURE__ */ bt(a)
      );
      for (o = document.createDocumentFragment(); /* @__PURE__ */ bt(s); )
        o.appendChild(
          /** @type {TemplateNode} */
          /* @__PURE__ */ bt(s)
        );
    }
    var u = (
      /** @type {TemplateNode} */
      o.cloneNode(!0)
    );
    {
      var c = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ bt(u)
      ), _ = (
        /** @type {TemplateNode} */
        u.lastChild
      );
      Fr(c, _);
    }
    return u;
  };
}
// @__NO_SIDE_EFFECTS__
function El(e, t) {
  return /* @__PURE__ */ kl(e, t, "svg");
}
function Cs(e = "") {
  {
    var t = Zt(e + "");
    return Fr(t, t), t;
  }
}
function Al() {
  var e = document.createDocumentFragment(), t = document.createComment(""), r = Zt();
  return e.append(t, r), Fr(t, r), e;
}
function D(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function j(e, t) {
  var r = t == null ? "" : typeof t == "object" ? `${t}` : t;
  r !== /** @type {any} */
  (e[mn] ?? (e[mn] = e.nodeValue)) && (e[mn] = r, e.nodeValue = `${r}`);
}
function Cl(e, t) {
  return Sl(e, t);
}
const Vn = /* @__PURE__ */ new Map();
function Sl(e, { target: t, anchor: r, props: n = {}, events: i, context: o, intro: a = !0, transformError: s }) {
  al();
  var u = void 0, c = dl(() => {
    var _ = r ?? t.appendChild(Zt());
    Wa(
      /** @type {TemplateNode} */
      _,
      {
        pending: () => {
        }
      },
      (C) => {
        ui({});
        var k = (
          /** @type {ComponentContext} */
          lt
        );
        o && (k.c = o), i && (n.$$events = i), u = e(C, n) || {}, ci();
      },
      s
    );
    var f = /* @__PURE__ */ new Set(), d = (C) => {
      for (var k = 0; k < C.length; k++) {
        var B = C[k];
        if (!f.has(B)) {
          f.add(B);
          var F = xl(B);
          for (const ee of [t, document]) {
            var W = Vn.get(ee);
            W === void 0 && (W = /* @__PURE__ */ new Map(), Vn.set(ee, W));
            var I = W.get(B);
            I === void 0 ? (ee.addEventListener(B, ji, { passive: F }), W.set(B, 1)) : W.set(B, I + 1);
          }
        }
      }
    };
    return d(oi(yo)), Ii.add(d), () => {
      for (var C of f)
        for (const F of [t, document]) {
          var k = (
            /** @type {Map<string, number>} */
            Vn.get(F)
          ), B = (
            /** @type {number} */
            k.get(C)
          );
          --B == 0 ? (F.removeEventListener(C, ji), k.delete(C), k.size === 0 && Vn.delete(F)) : k.set(C, B);
        }
      Ii.delete(d), _ !== r && _.parentNode?.removeChild(_);
    };
  });
  return Fi.set(u, c), u;
}
let Fi = /* @__PURE__ */ new WeakMap();
function Ml(e, t) {
  const r = Fi.get(e);
  return r ? (Fi.delete(e), r(t)) : Promise.resolve();
}
var At, Ft, at, Dr, On, Bn, si;
class Tl {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, r = !0) {
    /** @type {TemplateNode} */
    Qe(this, "anchor");
    /** @type {Map<Batch, Key>} */
    $(this, At, /* @__PURE__ */ new Map());
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
    $(this, Ft, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    $(this, at, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    $(this, Dr, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    $(this, On, !0);
    /**
     * @param {Batch} batch
     */
    $(this, Bn, (t) => {
      if (v(this, At).has(t)) {
        var r = (
          /** @type {Key} */
          v(this, At).get(t)
        ), n = v(this, Ft).get(r);
        if (n)
          Xi(n), v(this, Dr).delete(r);
        else {
          var i = v(this, at).get(r);
          i && (v(this, Ft).set(r, i.effect), v(this, at).delete(r), i.fragment.lastChild.remove(), this.anchor.before(i.fragment), n = i.effect);
        }
        for (const [o, a] of v(this, At)) {
          if (v(this, At).delete(o), o === t)
            break;
          const s = v(this, at).get(a);
          s && (et(s.effect), v(this, at).delete(a));
        }
        for (const [o, a] of v(this, Ft)) {
          if (o === r || v(this, Dr).has(o)) continue;
          const s = () => {
            if (Array.from(v(this, At).values()).includes(o)) {
              var c = document.createDocumentFragment();
              es(a, c), c.append(Zt()), v(this, at).set(o, { effect: a, fragment: c });
            } else
              et(a);
            v(this, Dr).delete(o), v(this, Ft).delete(o);
          };
          v(this, On) || !n ? (v(this, Dr).add(o), Or(a, s, !1)) : s();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    $(this, si, (t) => {
      v(this, At).delete(t);
      const r = Array.from(v(this, At).values());
      for (const [n, i] of v(this, at))
        r.includes(n) || (et(i.effect), v(this, at).delete(n));
    });
    this.anchor = t, q(this, On, r);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, r) {
    var n = (
      /** @type {Batch} */
      Z
    ), i = no();
    if (r && !v(this, Ft).has(t) && !v(this, at).has(t))
      if (i) {
        var o = document.createDocumentFragment(), a = Zt();
        o.append(a), v(this, at).set(t, {
          effect: _t(() => r(a)),
          fragment: o
        });
      } else
        v(this, Ft).set(
          t,
          _t(() => r(this.anchor))
        );
    if (v(this, At).set(n, t), i) {
      for (const [s, u] of v(this, Ft))
        s === t ? n.unskip_effect(u) : n.skip_effect(u);
      for (const [s, u] of v(this, at))
        s === t ? n.unskip_effect(u.effect) : n.skip_effect(u.effect);
      n.oncommit(v(this, Bn)), n.ondiscard(v(this, si));
    } else
      v(this, Bn).call(this, n);
  }
}
At = new WeakMap(), Ft = new WeakMap(), at = new WeakMap(), Dr = new WeakMap(), On = new WeakMap(), Bn = new WeakMap(), si = new WeakMap();
function K(e, t, r = !1) {
  var n = new Tl(e), i = r ? ln : 0;
  function o(a, s) {
    n.ensure(a, s);
  }
  Zi(() => {
    var a = !1;
    t((s, u = 0) => {
      a = !0, o(u, s);
    }), a || o(-1, null);
  }, i);
}
function yr(e, t) {
  return t;
}
function Dl(e, t, r) {
  for (var n = [], i = t.length, o, a = t.length, s = 0; s < i; s++) {
    let f = t[s];
    Or(
      f,
      () => {
        if (o) {
          if (o.pending.delete(f), o.done.add(f), o.pending.size === 0) {
            var d = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            Ui(e, oi(o.done)), d.delete(o), d.size === 0 && (e.outrogroups = null);
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
      ll(_), _.append(c), e.items.clear();
    }
    Ui(e, t, !u);
  } else
    o = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ?? (e.outrogroups = /* @__PURE__ */ new Set())).add(o);
}
function Ui(e, t, r = !0) {
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
      o.f |= Qt;
      const a = document.createDocumentFragment();
      es(o, a);
    } else
      et(t[i], r);
  }
}
var Ss;
function qt(e, t, r, n, i, o = null) {
  var a = e, s = /* @__PURE__ */ new Map();
  {
    var u = (
      /** @type {Element} */
      e
    );
    a = u.appendChild(Zt());
  }
  var c = null, _ = /* @__PURE__ */ tl(() => {
    var I = r();
    return Ji(I) ? I : I == null ? [] : oi(I);
  }), f, d = /* @__PURE__ */ new Map(), C = !0;
  function k(I) {
    (W.effect.f & Tt) === 0 && (W.pending.delete(I), W.fallback = c, Ll(W, f, a, t, n), c !== null && (f.length === 0 ? (c.f & Qt) === 0 ? Xi(c) : (c.f ^= Qt, wn(c, null, a)) : Or(c, () => {
      c = null;
    })));
  }
  function B(I) {
    W.pending.delete(I);
  }
  var F = Zi(() => {
    f = /** @type {V[]} */
    l(_);
    for (var I = f.length, ee = /* @__PURE__ */ new Set(), he = (
      /** @type {Batch} */
      Z
    ), fe = no(), xe = 0; xe < I; xe += 1) {
      var b = f[xe], y = n(b, xe), g = C ? null : s.get(y);
      g ? (g.v && cn(g.v, b), g.i && cn(g.i, xe), fe && he.unskip_effect(g.e)) : (g = Rl(
        s,
        C ? a : Ss ?? (Ss = Zt()),
        b,
        y,
        xe,
        i,
        t,
        r
      ), C || (g.e.f |= Qt), s.set(y, g)), ee.add(y);
    }
    if (I === 0 && o && !c && (C ? c = _t(() => o(a)) : (c = _t(() => o(Ss ?? (Ss = Zt()))), c.f |= Qt)), I > ee.size && xa(), !C)
      if (d.set(he, ee), fe) {
        for (const [E, m] of s)
          ee.has(E) || he.skip_effect(m.e);
        he.oncommit(k), he.ondiscard(B);
      } else
        k(he);
    l(_);
  }), W = { effect: F, items: s, pending: d, outrogroups: null, fallback: c };
  C = !1;
}
function xn(e) {
  for (; e !== null && (e.f & Dt) === 0; )
    e = e.next;
  return e;
}
function Ll(e, t, r, n, i) {
  var o = t.length, a = e.items, s = xn(e.effect.first), u, c = null, _ = [], f = [], d, C, k, B;
  for (B = 0; B < o; B += 1) {
    if (d = t[B], C = i(d, B), k = /** @type {EachItem} */
    a.get(C).e, e.outrogroups !== null)
      for (const y of e.outrogroups)
        y.pending.delete(k), y.done.delete(k);
    if ((k.f & qe) !== 0 && Xi(k), (k.f & Qt) !== 0)
      if (k.f ^= Qt, k === s)
        wn(k, null, r);
      else {
        var F = c ? c.next : s;
        k === e.effect.last && (e.effect.last = k.prev), k.prev && (k.prev.next = k.next), k.next && (k.next.prev = k.prev), ar(e, c, k), ar(e, k, F), wn(k, F, r), c = k, _ = [], f = [], s = xn(c.next);
        continue;
      }
    if (k !== s) {
      if (u !== void 0 && u.has(k)) {
        if (_.length < f.length) {
          var W = f[0], I;
          c = W.prev;
          var ee = _[0], he = _[_.length - 1];
          for (I = 0; I < _.length; I += 1)
            wn(_[I], W, r);
          for (I = 0; I < f.length; I += 1)
            u.delete(f[I]);
          ar(e, ee.prev, he.next), ar(e, c, ee), ar(e, he, W), s = W, c = he, B -= 1, _ = [], f = [];
        } else
          u.delete(k), wn(k, s, r), ar(e, k.prev, k.next), ar(e, k, c === null ? e.effect.first : c.next), ar(e, c, k), c = k;
        continue;
      }
      for (_ = [], f = []; s !== null && s !== k; )
        (u ?? (u = /* @__PURE__ */ new Set())).add(s), f.push(s), s = xn(s.next);
      if (s === null)
        continue;
    }
    (k.f & Qt) === 0 && _.push(k), c = k, s = xn(k.next);
  }
  if (e.outrogroups !== null) {
    for (const y of e.outrogroups)
      y.pending.size === 0 && (Ui(e, oi(y.done)), e.outrogroups?.delete(y));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (s !== null || u !== void 0) {
    var fe = [];
    if (u !== void 0)
      for (k of u)
        (k.f & qe) === 0 && fe.push(k);
    for (; s !== null; )
      (s.f & qe) === 0 && s !== e.fallback && fe.push(s), s = xn(s.next);
    var xe = fe.length;
    if (xe > 0) {
      var b = o === 0 ? r : null;
      Dl(e, fe, b);
    }
  }
}
function Rl(e, t, r, n, i, o, a, s) {
  var u = (a & Ma) !== 0 ? (a & Da) === 0 ? /* @__PURE__ */ il(r, !1, !1) : jr(r) : null, c = (a & Ta) !== 0 ? jr(i) : null;
  return {
    v: u,
    i: c,
    e: _t(() => (o(t, u ?? r, c ?? i, s), () => {
      e.delete(n);
    }))
  };
}
function wn(e, t, r) {
  if (e.nodes)
    for (var n = e.nodes.start, i = e.nodes.end, o = t && (t.f & Qt) === 0 ? (
      /** @type {EffectNodes} */
      t.nodes.start
    ) : r; n !== null; ) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Pn(n)
      );
      if (o.before(n), n === i)
        return;
      n = a;
    }
}
function ar(e, t, r) {
  t === null ? e.effect.first = r : t.next = r, r === null ? e.effect.last = t : r.prev = t;
}
function Nl(e, t, r = !1, n = !1, i = !1, o = !1) {
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
        s, s !== "" && Fr(
          /** @type {TemplateNode} */
          /* @__PURE__ */ bt(u),
          /** @type {TemplateNode} */
          u.lastChild
        );
        return;
      }
      if (c.nodes !== null && (uo(
        c.nodes.start,
        /** @type {TemplateNode} */
        c.nodes.end
      ), c.nodes = null), s !== "") {
        var _ = n ? Na : i ? Oa : void 0, f = (
          /** @type {HTMLTemplateElement | SVGElement | MathMLElement} */
          io(n ? "svg" : i ? "math" : "template", _)
        );
        f.innerHTML = /** @type {any} */
        s;
        var d = n || i ? f : (
          /** @type {HTMLTemplateElement} */
          f.content
        );
        if (Fr(
          /** @type {TemplateNode} */
          /* @__PURE__ */ bt(d),
          /** @type {TemplateNode} */
          d.lastChild
        ), n || i)
          for (; /* @__PURE__ */ bt(d); )
            a.before(
              /** @type {TemplateNode} */
              /* @__PURE__ */ bt(d)
            );
        else
          a.before(d);
      }
    }
  });
}
function ko(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var i = e.length;
    for (t = 0; t < i; t++) e[t] && (r = ko(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function Ol() {
  for (var e, t, r = 0, n = "", i = arguments.length; r < i; r++) (e = arguments[r]) && (t = ko(e)) && (n && (n += " "), n += t);
  return n;
}
function pt(e) {
  return typeof e == "object" ? Ol(e) : e ?? "";
}
function Bl(e, t, r) {
  var n = e == null ? "" : "" + e;
  return n === "" ? null : n;
}
function ht(e, t, r, n, i, o) {
  var a = (
    /** @type {any} */
    e[Mi]
  );
  if (a !== r || a === void 0) {
    var s = Bl(r);
    s == null ? e.removeAttribute("class") : e.className = s, e[Mi] = r;
  }
  return o;
}
function Eo(e, t, r = !1) {
  if (e.multiple) {
    if (t == null)
      return;
    if (!Ji(t))
      return Pa();
    for (var n of e.options)
      n.selected = t.includes(Sn(n));
    return;
  }
  for (n of e.options) {
    var i = Sn(n);
    if (ol(i, t)) {
      n.selected = !0;
      return;
    }
  }
  (!r || t !== void 0) && (e.selectedIndex = -1);
}
function Pl(e) {
  var t = new MutationObserver(() => {
    Eo(e, e.__value);
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
  }), Qi(() => {
    t.disconnect();
  });
}
function Ao(e, t, r = t) {
  var n = /* @__PURE__ */ new WeakSet(), i = !0;
  $i(e, "change", (o) => {
    var a = o ? "[selected]" : ":checked", s;
    if (e.multiple)
      s = [].map.call(e.querySelectorAll(a), Sn);
    else {
      var u = e.querySelector(a) ?? // will fall back to first non-disabled option if no option is selected
      e.querySelector("option:not([disabled])");
      s = u && Sn(u);
    }
    r(s), e.__value = s, Z !== null && n.add(Z);
  }), ao(() => {
    var o = t();
    if (e === document.activeElement) {
      var a = (
        /** @type {Batch} */
        Z
      );
      if (n.has(a))
        return;
    }
    if (Eo(e, o, i), i && o === void 0) {
      var s = e.querySelector(":checked");
      s !== null && (o = Sn(s), r(o));
    }
    e.__value = o, i = !1;
  }), Pl(e);
}
function Sn(e) {
  return "__value" in e ? e.__value : e.value;
}
const Il = Symbol("is custom element"), jl = Symbol("is html");
function zn(e, t, r, n) {
  var i = Fl(e);
  i[t] !== (i[t] = r) && (t === "loading" && (e[ha] = r), r == null ? e.removeAttribute(t) : typeof r != "string" && Ul(e).includes(t) ? e[t] = r : e.setAttribute(t, r));
}
function Fl(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    /** @type {any} */
    e[Yn] ?? (e[Yn] = {
      [Il]: e.nodeName.includes("-"),
      [jl]: e.namespaceURI === Bs
    })
  );
}
var Ms = /* @__PURE__ */ new Map();
function Ul(e) {
  var t = e.getAttribute("is") || e.nodeName, r = Ms.get(t);
  if (r) return r;
  Ms.set(t, r = []);
  for (var n, i = e, o = Element.prototype; o !== i; ) {
    n = ua(i);
    for (var a in n)
      n[a].set && // better safe than sorry, we don't want spread attributes to mess with HTML content
      a !== "innerHTML" && a !== "textContent" && a !== "innerText" && r.push(a);
    i = Rs(i);
  }
  return r;
}
function fr(e, t, r = t) {
  var n = /* @__PURE__ */ new WeakSet();
  $i(e, "input", async (i) => {
    var o = i ? e.defaultValue : e.value;
    if (o = ki(e) ? Ei(o) : o, r(o), Z !== null && n.add(Z), await _l(), o !== (o = t())) {
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
  vi(t) == null && e.value && (r(ki(e) ? Ei(e.value) : e.value), Z !== null && n.add(Z)), di(() => {
    var i = t();
    if (e === document.activeElement) {
      var o = (
        /** @type {Batch} */
        Z
      );
      if (n.has(o))
        return;
    }
    ki(e) && i === Ei(e.value) || e.type === "date" && !i && !e.value || i !== e.value && (e.value = i ?? "");
  });
}
function Hl(e, t, r = t) {
  $i(e, "change", (n) => {
    var i = n ? e.defaultChecked : e.checked;
    r(i);
  }), // If we are hydrating and the value has since changed,
  // then use the update value from the input instead.
  // If defaultChecked is set, then checked == defaultChecked
  vi(t) == null && r(e.checked), di(() => {
    var n = t();
    e.checked = !!n;
  });
}
function ki(e) {
  var t = e.type;
  return t === "number" || t === "range";
}
function Ei(e) {
  return e === "" ? null : +e;
}
function Ai(e, t) {
  return e === t || e?.[Xr] === t;
}
function Jl(e = {}, t, r, n) {
  var i = (
    /** @type {ComponentContext} */
    lt.r
  ), o = (
    /** @type {Effect} */
    se
  );
  return ao(() => {
    var a, s;
    return di(() => {
      a = s, s = [], vi(() => {
        Ai(r(...s), e) || (t(e, ...s), a && Ai(r(...a), e) && t(null, ...a));
      });
    }), () => {
      let u = o;
      for (; u !== i && u.parent !== null && u.parent.f & Si; )
        u = u.parent;
      const c = () => {
        s && Ai(r(...s), e) && t(null, ...s);
      }, _ = u.teardown;
      u.teardown = () => {
        c(), _?.();
      };
    };
  }), e;
}
function Kr(e, t, r, n) {
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
const Vl = "5";
var Ls;
typeof window < "u" && ((Ls = window.__svelte ?? (window.__svelte = {})).v ?? (Ls.v = /* @__PURE__ */ new Set())).add(Vl);
const vn = function(e, t) {
  let i = e;
  const o = kn[t];
  let a = null, s = 0, u = null;
  const c = [], _ = {}, f = function(b, y) {
    s = i * 4 + 17, a = (function(g) {
      const E = new Array(g);
      for (let m = 0; m < g; m += 1) {
        E[m] = new Array(g);
        for (let M = 0; M < g; M += 1)
          E[m][M] = null;
      }
      return E;
    })(s), d(0, 0), d(s - 7, 0), d(0, s - 7), B(), k(), W(b, y), i >= 7 && F(b), u == null && (u = he(i, o, c)), I(u, y);
  }, d = function(b, y) {
    for (let g = -1; g <= 7; g += 1)
      if (!(b + g <= -1 || s <= b + g))
        for (let E = -1; E <= 7; E += 1)
          y + E <= -1 || s <= y + E || (0 <= g && g <= 6 && (E == 0 || E == 6) || 0 <= E && E <= 6 && (g == 0 || g == 6) || 2 <= g && g <= 4 && 2 <= E && E <= 4 ? a[b + g][y + E] = !0 : a[b + g][y + E] = !1);
  }, C = function() {
    let b = 0, y = 0;
    for (let g = 0; g < 8; g += 1) {
      f(!0, g);
      const E = ur.getLostPoint(_);
      (g == 0 || b > E) && (b = E, y = g);
    }
    return y;
  }, k = function() {
    for (let b = 8; b < s - 8; b += 1)
      a[b][6] == null && (a[b][6] = b % 2 == 0);
    for (let b = 8; b < s - 8; b += 1)
      a[6][b] == null && (a[6][b] = b % 2 == 0);
  }, B = function() {
    const b = ur.getPatternPosition(i);
    for (let y = 0; y < b.length; y += 1)
      for (let g = 0; g < b.length; g += 1) {
        const E = b[y], m = b[g];
        if (a[E][m] == null)
          for (let M = -2; M <= 2; M += 1)
            for (let O = -2; O <= 2; O += 1)
              M == -2 || M == 2 || O == -2 || O == 2 || M == 0 && O == 0 ? a[E + M][m + O] = !0 : a[E + M][m + O] = !1;
      }
  }, F = function(b) {
    const y = ur.getBCHTypeNumber(i);
    for (let g = 0; g < 18; g += 1) {
      const E = !b && (y >> g & 1) == 1;
      a[Math.floor(g / 3)][g % 3 + s - 8 - 3] = E;
    }
    for (let g = 0; g < 18; g += 1) {
      const E = !b && (y >> g & 1) == 1;
      a[g % 3 + s - 8 - 3][Math.floor(g / 3)] = E;
    }
  }, W = function(b, y) {
    const g = o << 3 | y, E = ur.getBCHTypeInfo(g);
    for (let m = 0; m < 15; m += 1) {
      const M = !b && (E >> m & 1) == 1;
      m < 6 ? a[m][8] = M : m < 8 ? a[m + 1][8] = M : a[s - 15 + m][8] = M;
    }
    for (let m = 0; m < 15; m += 1) {
      const M = !b && (E >> m & 1) == 1;
      m < 8 ? a[8][s - m - 1] = M : m < 9 ? a[8][15 - m - 1 + 1] = M : a[8][15 - m - 1] = M;
    }
    a[s - 8][8] = !b;
  }, I = function(b, y) {
    let g = -1, E = s - 1, m = 7, M = 0;
    const O = ur.getMaskFunction(y);
    for (let z = s - 1; z > 0; z -= 2)
      for (z == 6 && (z -= 1); ; ) {
        for (let te = 0; te < 2; te += 1)
          if (a[E][z - te] == null) {
            let de = !1;
            M < b.length && (de = (b[M] >>> m & 1) == 1), O(E, z - te) && (de = !de), a[E][z - te] = de, m -= 1, m == -1 && (M += 1, m = 7);
          }
        if (E += g, E < 0 || s <= E) {
          E -= g, g = -g;
          break;
        }
      }
  }, ee = function(b, y) {
    let g = 0, E = 0, m = 0;
    const M = new Array(y.length), O = new Array(y.length);
    for (let P = 0; P < y.length; P += 1) {
      const ae = y[P].dataCount, me = y[P].totalCount - ae;
      E = Math.max(E, ae), m = Math.max(m, me), M[P] = new Array(ae);
      for (let Ne = 0; Ne < M[P].length; Ne += 1)
        M[P][Ne] = 255 & b.getBuffer()[Ne + g];
      g += ae;
      const ye = ur.getErrorCorrectPolynomial(me), er = Tn(M[P], ye.getLength() - 1).mod(ye);
      O[P] = new Array(ye.getLength() - 1);
      for (let Ne = 0; Ne < O[P].length; Ne += 1) {
        const ut = Ne + er.getLength() - O[P].length;
        O[P][Ne] = ut >= 0 ? er.getAt(ut) : 0;
      }
    }
    let z = 0;
    for (let P = 0; P < y.length; P += 1)
      z += y[P].totalCount;
    const te = new Array(z);
    let de = 0;
    for (let P = 0; P < E; P += 1)
      for (let ae = 0; ae < y.length; ae += 1)
        P < M[ae].length && (te[de] = M[ae][P], de += 1);
    for (let P = 0; P < m; P += 1)
      for (let ae = 0; ae < y.length; ae += 1)
        P < O[ae].length && (te[de] = O[ae][P], de += 1);
    return te;
  }, he = function(b, y, g) {
    const E = Ts.getRSBlocks(b, y), m = Ds();
    for (let O = 0; O < g.length; O += 1) {
      const z = g[O];
      m.put(z.getMode(), 4), m.put(z.getLength(), ur.getLengthInBits(z.getMode(), b)), z.write(m);
    }
    let M = 0;
    for (let O = 0; O < E.length; O += 1)
      M += E[O].dataCount;
    if (m.getLengthInBits() > M * 8)
      throw "code length overflow. (" + m.getLengthInBits() + ">" + M * 8 + ")";
    for (m.getLengthInBits() + 4 <= M * 8 && m.put(0, 4); m.getLengthInBits() % 8 != 0; )
      m.putBit(!1);
    for (; !(m.getLengthInBits() >= M * 8 || (m.put(236, 8), m.getLengthInBits() >= M * 8)); )
      m.put(17, 8);
    return ee(m, E);
  };
  _.addData = function(b, y) {
    y = y || "Byte";
    let g = null;
    switch (y) {
      case "Numeric":
        g = Yl(b);
        break;
      case "Alphanumeric":
        g = Gl(b);
        break;
      case "Byte":
        g = ql(b);
        break;
      case "Kanji":
        g = Wl(b);
        break;
      default:
        throw "mode:" + y;
    }
    c.push(g), u = null;
  }, _.isDark = function(b, y) {
    if (b < 0 || s <= b || y < 0 || s <= y)
      throw b + "," + y;
    return a[b][y];
  }, _.getModuleCount = function() {
    return s;
  }, _.make = function() {
    if (i < 1) {
      let b = 1;
      for (; b < 40; b++) {
        const y = Ts.getRSBlocks(b, o), g = Ds();
        for (let m = 0; m < c.length; m++) {
          const M = c[m];
          g.put(M.getMode(), 4), g.put(M.getLength(), ur.getLengthInBits(M.getMode(), b)), M.write(g);
        }
        let E = 0;
        for (let m = 0; m < y.length; m++)
          E += y[m].dataCount;
        if (g.getLengthInBits() <= E * 8)
          break;
      }
      i = b;
    }
    f(!1, C());
  }, _.createTableTag = function(b, y) {
    b = b || 2, y = typeof y > "u" ? b * 4 : y;
    let g = "";
    g += '<table style="', g += " border-width: 0px; border-style: none;", g += " border-collapse: collapse;", g += " padding: 0px; margin: " + y + "px;", g += '">', g += "<tbody>";
    for (let E = 0; E < _.getModuleCount(); E += 1) {
      g += "<tr>";
      for (let m = 0; m < _.getModuleCount(); m += 1)
        g += '<td style="', g += " border-width: 0px; border-style: none;", g += " border-collapse: collapse;", g += " padding: 0px; margin: 0px;", g += " width: " + b + "px;", g += " height: " + b + "px;", g += " background-color: ", g += _.isDark(E, m) ? "#000000" : "#ffffff", g += ";", g += '"/>';
      g += "</tr>";
    }
    return g += "</tbody>", g += "</table>", g;
  }, _.createSvgTag = function(b, y, g, E) {
    let m = {};
    typeof arguments[0] == "object" && (m = arguments[0], b = m.cellSize, y = m.margin, g = m.alt, E = m.title), b = b || 2, y = typeof y > "u" ? b * 4 : y, g = typeof g == "string" ? { text: g } : g || {}, g.text = g.text || null, g.id = g.text ? g.id || "qrcode-description" : null, E = typeof E == "string" ? { text: E } : E || {}, E.text = E.text || null, E.id = E.text ? E.id || "qrcode-title" : null;
    const M = _.getModuleCount() * b + y * 2;
    let O, z, te, de, P = "", ae;
    for (ae = "l" + b + ",0 0," + b + " -" + b + ",0 0,-" + b + "z ", P += '<svg version="1.1" xmlns="http://www.w3.org/2000/svg"', P += m.scalable ? "" : ' width="' + M + 'px" height="' + M + 'px"', P += ' viewBox="0 0 ' + M + " " + M + '" ', P += ' preserveAspectRatio="xMinYMin meet"', P += E.text || g.text ? ' role="img" aria-labelledby="' + fe([E.id, g.id].join(" ").trim()) + '"' : "", P += ">", P += E.text ? '<title id="' + fe(E.id) + '">' + fe(E.text) + "</title>" : "", P += g.text ? '<description id="' + fe(g.id) + '">' + fe(g.text) + "</description>" : "", P += '<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>', P += '<path d="', te = 0; te < _.getModuleCount(); te += 1)
      for (de = te * b + y, O = 0; O < _.getModuleCount(); O += 1)
        _.isDark(te, O) && (z = O * b + y, P += "M" + z + "," + de + ae);
    return P += '" stroke="transparent" fill="black"/>', P += "</svg>", P;
  }, _.createDataURL = function(b, y) {
    b = b || 2, y = typeof y > "u" ? b * 4 : y;
    const g = _.getModuleCount() * b + y * 2, E = y, m = g - y;
    return Zl(g, g, function(M, O) {
      if (E <= M && M < m && E <= O && O < m) {
        const z = Math.floor((M - E) / b), te = Math.floor((O - E) / b);
        return _.isDark(te, z) ? 0 : 1;
      } else
        return 1;
    });
  }, _.createImgTag = function(b, y, g) {
    b = b || 2, y = typeof y > "u" ? b * 4 : y;
    const E = _.getModuleCount() * b + y * 2;
    let m = "";
    return m += "<img", m += ' src="', m += _.createDataURL(b, y), m += '"', m += ' width="', m += E, m += '"', m += ' height="', m += E, m += '"', g && (m += ' alt="', m += fe(g), m += '"'), m += "/>", m;
  };
  const fe = function(b) {
    let y = "";
    for (let g = 0; g < b.length; g += 1) {
      const E = b.charAt(g);
      switch (E) {
        case "<":
          y += "&lt;";
          break;
        case ">":
          y += "&gt;";
          break;
        case "&":
          y += "&amp;";
          break;
        case '"':
          y += "&quot;";
          break;
        default:
          y += E;
          break;
      }
    }
    return y;
  }, xe = function(b) {
    b = typeof b > "u" ? 2 : b;
    const g = _.getModuleCount() * 1 + b * 2, E = b, m = g - b;
    let M, O, z, te, de;
    const P = {
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
      for (z = Math.floor((M - E) / 1), te = Math.floor((M + 1 - E) / 1), O = 0; O < g; O += 1)
        de = "█", E <= O && O < m && E <= M && M < m && _.isDark(z, Math.floor((O - E) / 1)) && (de = " "), E <= O && O < m && E <= M + 1 && M + 1 < m && _.isDark(te, Math.floor((O - E) / 1)) ? de += " " : de += "█", me += b < 1 && M + 1 >= m ? ae[de] : P[de];
      me += `
`;
    }
    return g % 2 && b > 0 ? me.substring(0, me.length - g - 1) + Array(g + 1).join("▀") : me.substring(0, me.length - 1);
  };
  return _.createASCII = function(b, y) {
    if (b = b || 1, b < 2)
      return xe(y);
    b -= 1, y = typeof y > "u" ? b * 2 : y;
    const g = _.getModuleCount() * b + y * 2, E = y, m = g - y;
    let M, O, z, te;
    const de = Array(b + 1).join("██"), P = Array(b + 1).join("  ");
    let ae = "", me = "";
    for (M = 0; M < g; M += 1) {
      for (z = Math.floor((M - E) / b), me = "", O = 0; O < g; O += 1)
        te = 1, E <= O && O < m && E <= M && M < m && _.isDark(z, Math.floor((O - E) / b)) && (te = 0), me += te ? de : P;
      for (z = 0; z < b; z += 1)
        ae += me + `
`;
    }
    return ae.substring(0, ae.length - 1);
  }, _.renderTo2dContext = function(b, y) {
    y = y || 2;
    const g = _.getModuleCount();
    for (let E = 0; E < g; E++)
      for (let m = 0; m < g; m++)
        b.fillStyle = _.isDark(E, m) ? "black" : "white", b.fillRect(m * y, E * y, y, y);
  }, _;
};
vn.stringToBytes = function(e) {
  const t = [];
  for (let r = 0; r < e.length; r += 1) {
    const n = e.charCodeAt(r);
    t.push(n & 255);
  }
  return t;
};
vn.createStringToBytes = function(e, t) {
  const r = (function() {
    const i = Kl(e), o = function() {
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
const Ue = {
  MODE_NUMBER: 1,
  MODE_ALPHA_NUM: 2,
  MODE_8BIT_BYTE: 4,
  MODE_KANJI: 8
}, kn = {
  L: 1,
  M: 0,
  Q: 3,
  H: 2
}, lr = {
  PATTERN000: 0,
  PATTERN001: 1,
  PATTERN010: 2,
  PATTERN011: 3,
  PATTERN100: 4,
  PATTERN101: 5,
  PATTERN110: 6,
  PATTERN111: 7
}, ur = (function() {
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
      case lr.PATTERN000:
        return function(s, u) {
          return (s + u) % 2 == 0;
        };
      case lr.PATTERN001:
        return function(s, u) {
          return s % 2 == 0;
        };
      case lr.PATTERN010:
        return function(s, u) {
          return u % 3 == 0;
        };
      case lr.PATTERN011:
        return function(s, u) {
          return (s + u) % 3 == 0;
        };
      case lr.PATTERN100:
        return function(s, u) {
          return (Math.floor(s / 2) + Math.floor(u / 3)) % 2 == 0;
        };
      case lr.PATTERN101:
        return function(s, u) {
          return s * u % 2 + s * u % 3 == 0;
        };
      case lr.PATTERN110:
        return function(s, u) {
          return (s * u % 2 + s * u % 3) % 2 == 0;
        };
      case lr.PATTERN111:
        return function(s, u) {
          return (s * u % 3 + (s + u) % 2) % 2 == 0;
        };
      default:
        throw "bad maskPattern:" + a;
    }
  }, i.getErrorCorrectPolynomial = function(a) {
    let s = Tn([1], 0);
    for (let u = 0; u < a; u += 1)
      s = s.multiply(Tn([1, cr.gexp(u)], 0));
    return s;
  }, i.getLengthInBits = function(a, s) {
    if (1 <= s && s < 10)
      switch (a) {
        case Ue.MODE_NUMBER:
          return 10;
        case Ue.MODE_ALPHA_NUM:
          return 9;
        case Ue.MODE_8BIT_BYTE:
          return 8;
        case Ue.MODE_KANJI:
          return 8;
        default:
          throw "mode:" + a;
      }
    else if (s < 27)
      switch (a) {
        case Ue.MODE_NUMBER:
          return 12;
        case Ue.MODE_ALPHA_NUM:
          return 11;
        case Ue.MODE_8BIT_BYTE:
          return 16;
        case Ue.MODE_KANJI:
          return 10;
        default:
          throw "mode:" + a;
      }
    else if (s < 41)
      switch (a) {
        case Ue.MODE_NUMBER:
          return 14;
        case Ue.MODE_ALPHA_NUM:
          return 13;
        case Ue.MODE_8BIT_BYTE:
          return 16;
        case Ue.MODE_KANJI:
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
        for (let B = -1; B <= 1; B += 1)
          if (!(f + B < 0 || s <= f + B))
            for (let F = -1; F <= 1; F += 1)
              d + F < 0 || s <= d + F || B == 0 && F == 0 || k == a.isDark(f + B, d + F) && (C += 1);
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
})(), cr = (function() {
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
})(), Tn = function(e, t) {
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
        o[a + s] ^= cr.gexp(cr.glog(n.getAt(a)) + cr.glog(i.getAt(s)));
    return Tn(o, 0);
  }, n.mod = function(i) {
    if (n.getLength() - i.getLength() < 0)
      return n;
    const o = cr.glog(n.getAt(0)) - cr.glog(i.getAt(0)), a = new Array(n.getLength());
    for (let s = 0; s < n.getLength(); s += 1)
      a[s] = n.getAt(s);
    for (let s = 0; s < i.getLength(); s += 1)
      a[s] ^= cr.gexp(cr.glog(i.getAt(s)) + o);
    return Tn(a, 0).mod(i);
  }, n;
}, Ts = (function() {
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
      case kn.L:
        return e[(i - 1) * 4 + 0];
      case kn.M:
        return e[(i - 1) * 4 + 1];
      case kn.Q:
        return e[(i - 1) * 4 + 2];
      case kn.H:
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
})(), Ds = function() {
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
}, Yl = function(e) {
  const t = Ue.MODE_NUMBER, r = e, n = {};
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
}, Gl = function(e) {
  const t = Ue.MODE_ALPHA_NUM, r = e, n = {};
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
}, ql = function(e) {
  const t = Ue.MODE_8BIT_BYTE, r = vn.stringToBytes(e), n = {};
  return n.getMode = function() {
    return t;
  }, n.getLength = function(i) {
    return r.length;
  }, n.write = function(i) {
    for (let o = 0; o < r.length; o += 1)
      i.put(r[o], 8);
  }, n;
}, Wl = function(e) {
  const t = Ue.MODE_KANJI, r = vn.stringToBytes;
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
}, Co = function() {
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
}, $l = function() {
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
}, Kl = function(e) {
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
}, Ql = function(e, t) {
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
    return C.write = function(k, B) {
      if (k >>> B)
        throw "length over";
      for (; f + B >= 8; )
        _.writeByte(255 & (k << f | d)), B -= 8 - f, k >>>= 8 - f, d = 0, f = 0;
      d = k << f | d, f = f + B;
    }, C.flush = function() {
      f > 0 && _.writeByte(d);
    }, C;
  }, s = function(c) {
    const _ = 1 << c, f = (1 << c) + 1;
    let d = c + 1;
    const C = u();
    for (let I = 0; I < _; I += 1)
      C.add(String.fromCharCode(I));
    C.add(String.fromCharCode(_)), C.add(String.fromCharCode(f));
    const k = Co(), B = a(k);
    B.write(_, d);
    let F = 0, W = String.fromCharCode(i[F]);
    for (F += 1; F < i.length; ) {
      const I = String.fromCharCode(i[F]);
      F += 1, C.contains(W + I) ? W = W + I : (B.write(C.indexOf(W), d), C.size() < 4095 && (C.size() == 1 << d && (d += 1), C.add(W + I)), W = I);
    }
    return B.write(C.indexOf(W), d), B.write(f, d), B.flush(), k.toByteArray();
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
}, Zl = function(e, t, r) {
  const n = Ql(e, t);
  for (let s = 0; s < t; s += 1)
    for (let u = 0; u < e; u += 1)
      n.setPixel(u, s, r(u, s));
  const i = Co();
  n.write(i);
  const o = $l(), a = i.toByteArray();
  for (let s = 0; s < a.length; s += 1)
    o.writeByte(a[s]);
  return o.flush(), "data:image/gif;base64," + o;
};
vn.stringToBytes;
var zl = /* @__PURE__ */ N("<div> </div>"), Xl = /* @__PURE__ */ N('<div class="fixed top-4 right-4 z-50 flex flex-col gap-2"></div>'), eu = /* @__PURE__ */ N('<div class="mt-4 pt-4 border-t border-blue-200"><div class="flex items-start gap-4"><div class="bg-white border border-gray-200 rounded-lg p-2 shrink-0" style="width: 200px; height: 200px;"></div> <div class="flex flex-col gap-2"><span class="text-sm font-medium text-blue-800">QR Code</span> <p class="text-xs text-gray-600">Scan to open the invitation link. Share via screenshot, print, or display on screen.</p> <button class="mt-1 inline-flex items-center gap-1.5 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors w-fit"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg> Download QR</button></div></div></div>'), tu = /* @__PURE__ */ N('<div class="mt-4 border border-blue-200 bg-blue-50 rounded-lg p-4"><div class="flex items-center gap-2 mb-2"><span class="text-blue-800 font-medium text-sm">Invitation Link</span></div> <div class="flex items-center gap-2"><code class="flex-1 bg-white border border-blue-200 rounded px-3 py-2 text-sm font-mono break-all select-all"> </code> <button> </button></div> <p class="mt-2 text-sm text-amber-700 font-medium">⚠ Copy this link now — it cannot be retrieved later.</p> <!></div>'), ru = /* @__PURE__ */ N('<div class="text-center py-10"><div class="inline-block animate-spin h-8 w-8 border-4 border-blue-500 border-t-transparent rounded-full"></div> <p class="mt-2 text-gray-600">Loading invitations…</p></div>'), nu = /* @__PURE__ */ N('<div class="text-center py-10"><p class="text-gray-500">No invitation codes found.</p></div>'), iu = /* @__PURE__ */ N('<button class="px-3 py-1 text-xs font-medium text-red-600 border border-red-200 rounded-lg hover:bg-red-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"> </button>'), su = /* @__PURE__ */ N('<tr class="hover:bg-gray-50 transition-colors"><td class="px-4 py-3"><span class="font-mono text-xs bg-gray-100 px-2 py-1 rounded cursor-help"> </span></td><td class="px-4 py-3"><span> </span></td><td class="px-4 py-3 text-gray-700"> </td><td class="px-4 py-3"><span> </span></td><td class="px-4 py-3 text-gray-600 text-xs"> </td><td class="px-4 py-3 text-right"><!></td></tr>'), ou = /* @__PURE__ */ N('<div class="overflow-x-auto"><table class="w-full text-sm"><thead class="bg-gray-50 border-b border-gray-200"><tr><th class="px-4 py-3 text-left font-medium text-gray-600">Code Hash</th><th class="px-4 py-3 text-left font-medium text-gray-600">Profile</th><th class="px-4 py-3 text-left font-medium text-gray-600">Uses</th><th class="px-4 py-3 text-left font-medium text-gray-600">Status</th><th class="px-4 py-3 text-left font-medium text-gray-600">Expires</th><th class="px-4 py-3 text-right font-medium text-gray-600">Actions</th></tr></thead><tbody class="divide-y divide-gray-200"></tbody></table></div>'), au = /* @__PURE__ */ N('<!> <div class="space-y-6"><div class="bg-white shadow-sm rounded-lg p-6 border border-gray-200"><h2 class="text-lg font-semibold text-gray-900 mb-4">Generate New Invitation</h2> <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4"><div><label for="inv-profile" class="block text-sm font-medium text-gray-700 mb-1">Profile</label> <select id="inv-profile" class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"><option>Member</option><option>Administrator</option></select></div> <div><label for="inv-max-uses" class="block text-sm font-medium text-gray-700 mb-1">Max Uses</label> <input id="inv-max-uses" type="number" min="1" class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/></div> <div><label for="inv-expiry" class="block text-sm font-medium text-gray-700 mb-1">Expires in (hours)</label> <input id="inv-expiry" type="number" min="1" class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/></div></div> <button class="px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed font-medium transition-colors"> </button> <!></div> <div class="bg-white shadow-sm rounded-lg border border-gray-200"><div class="px-6 py-4 border-b border-gray-200 flex items-center justify-between"><h2 class="text-lg font-semibold text-gray-900">Invitations</h2> <button class="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50" title="Refresh"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg></button></div> <!></div></div>', 1);
function lu(e, t) {
  ui(t, !0);
  const r = t.ctx.theme?.cn ?? ((...R) => R.filter(Boolean).join(" "));
  let n = /* @__PURE__ */ L(Ut([])), i = /* @__PURE__ */ L(0), o = /* @__PURE__ */ L("member"), a = /* @__PURE__ */ L(1), s = /* @__PURE__ */ L(24), u = /* @__PURE__ */ L(!1), c = /* @__PURE__ */ L(null), _ = /* @__PURE__ */ L(!1), f = /* @__PURE__ */ L(null), d = /* @__PURE__ */ L(Ut([])), C = /* @__PURE__ */ L(!1), k = /* @__PURE__ */ L(null);
  function B(R, V = "success") {
    const Q = zs(i);
    x(n, [...l(n), { id: Q, text: R, type: V }], !0), setTimeout(
      () => {
        x(n, l(n).filter((ie) => ie.id !== Q), !0);
      },
      4e3
    );
  }
  function F(R) {
    const V = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", Q = crypto.getRandomValues(new Uint8Array(R));
    return Array.from(Q, (ie) => V[ie % V.length]).join("");
  }
  async function W(R) {
    const Q = new TextEncoder().encode(R), ie = await crypto.subtle.digest("SHA-256", Q);
    return Array.from(new Uint8Array(ie)).map((ve) => ve.toString(16).padStart(2, "0")).join("");
  }
  async function I() {
    x(u, !0), x(c, null), x(f, null), x(_, !1);
    try {
      const R = F(16), V = await W(R);
      await t.ctx.callSync("generate_registration_url", {
        code_hash: V,
        profile: l(o),
        max_uses: l(a),
        expires_in_hours: l(s),
        user_id: "admin",
        created_by: "admin",
        frontend_url: ""
      });
      const Q = `${window.location.origin}/join?invite=${R}`;
      x(c, Q), x(f, he(Q), !0), B("Invitation code generated successfully"), await xe();
    } catch (R) {
      B(`Failed to generate invitation: ${R?.message || String(R)}`, "error");
    } finally {
      x(u, !1);
    }
  }
  async function ee() {
    l(c) && (await navigator.clipboard.writeText(l(c)), x(_, !0), B("Link copied to clipboard"), setTimeout(
      () => {
        x(_, !1);
      },
      3e3
    ));
  }
  function he(R) {
    const V = vn(0, "M");
    V.addData(R), V.make();
    const Q = V.getModuleCount(), ie = 4, Me = Q + ie * 2, ve = [];
    for (let Oe = 0; Oe < Q; Oe++)
      for (let ct = 0; ct < Q; ct++)
        V.isDark(Oe, ct) && ve.push(`<rect x="${ct + ie}" y="${Oe + ie}" width="1" height="1"/>`);
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${Me} ${Me}" shape-rendering="crispEdges"><rect width="${Me}" height="${Me}" fill="#fff"/><g fill="#000">${ve.join("")}</g></svg>`;
  }
  function fe() {
    if (!l(f)) return;
    const R = 400, V = document.createElement("canvas");
    V.width = R, V.height = R;
    const Q = V.getContext("2d"), ie = new Image(), Me = new Blob([l(f)], { type: "image/svg+xml;charset=utf-8" }), ve = URL.createObjectURL(Me);
    ie.onload = () => {
      Q.fillStyle = "#fff", Q.fillRect(0, 0, R, R), Q.drawImage(ie, 0, 0, R, R), URL.revokeObjectURL(ve);
      const Oe = document.createElement("a");
      Oe.download = "invite-qr.png", Oe.href = V.toDataURL("image/png"), Oe.click(), B("QR code downloaded");
    }, ie.src = ve;
  }
  async function xe() {
    x(C, !0);
    try {
      const R = await t.ctx.callSync("get_registration_codes", { include_used: !0 }), V = R?.data ?? R;
      x(d, Array.isArray(V) ? V : V?.codes ?? [], !0);
    } catch (R) {
      B(`Failed to load codes: ${R?.message || String(R)}`, "error"), x(d, [], !0);
    } finally {
      x(C, !1);
    }
  }
  async function b(R) {
    x(k, R, !0);
    try {
      await t.ctx.callSync("revoke_registration_code", { code_hash: R }), B("Invitation revoked"), await xe();
    } catch (V) {
      B(`Failed to revoke: ${V?.message || String(V)}`, "error");
    } finally {
      x(k, null);
    }
  }
  function y(R) {
    return R.revoked ? { label: "Revoked", color: "bg-red-100 text-red-700" } : R.max_uses > 0 && R.uses_count >= R.max_uses ? { label: "Used", color: "bg-gray-100 text-gray-700" } : R.expires_at && new Date(R.expires_at) < /* @__PURE__ */ new Date() ? { label: "Expired", color: "bg-yellow-100 text-yellow-700" } : { label: "Active", color: "bg-green-100 text-green-700" };
  }
  function g(R) {
    if (!R) return "Never";
    const V = new Date(R), Q = /* @__PURE__ */ new Date(), ie = V.getTime() - Q.getTime();
    return ie < 0 ? "Expired" : ie < 36e5 ? `${Math.round(ie / 6e4)}m remaining` : ie < 864e5 ? `${Math.round(ie / 36e5)}h remaining` : V.toLocaleDateString();
  }
  so(() => {
    xe();
  });
  var E = au(), m = Ze(E);
  {
    var M = (R) => {
      var V = Xl();
      qt(V, 21, () => l(n), (Q) => Q.id, (Q, ie) => {
        var Me = zl(), ve = h(Me);
        U(
          (Oe) => {
            ht(Me, 1, Oe), j(ve, l(ie).text);
          },
          [
            () => pt(r("px-4 py-3 rounded-lg shadow-lg text-sm font-medium transition-all", l(ie).type === "error" ? "bg-red-600 text-white" : "bg-green-600 text-white"))
          ]
        ), D(Q, Me);
      }), D(R, V);
    };
    K(m, (R) => {
      l(n).length > 0 && R(M);
    });
  }
  var O = w(m, 2), z = h(O), te = w(h(z), 2), de = h(te), P = w(h(de), 2), ae = h(P);
  ae.value = ae.__value = "member";
  var me = w(ae);
  me.value = me.__value = "admin";
  var ye = w(de, 2), Xt = w(h(ye), 2), er = w(ye, 2), Ne = w(h(er), 2), ut = w(te, 2), Hr = h(ut), Jr = w(ut, 2);
  {
    var gn = (R) => {
      var V = tu(), Q = w(h(V), 2), ie = h(Q), Me = h(ie), ve = w(ie, 2), Oe = h(ve), ct = w(Q, 4);
      {
        var Gr = (tt) => {
          var tr = eu(), Vt = h(tr), Rt = h(Vt);
          Nl(Rt, () => l(f), !0);
          var wt = w(Rt, 2), kt = w(h(wt), 4);
          X("click", kt, fe), D(tt, tr);
        };
        K(ct, (tt) => {
          l(f) && tt(Gr);
        });
      }
      U(
        (tt) => {
          j(Me, l(c)), ht(ve, 1, tt), j(Oe, l(_) ? "Copied!" : "Copy");
        },
        [
          () => pt(r("px-4 py-2 rounded-lg text-sm font-medium transition-colors shrink-0", l(_) ? "bg-green-600 text-white" : "bg-blue-600 text-white hover:bg-blue-700"))
        ]
      ), X("click", ve, ee), D(R, V);
    };
    K(Jr, (R) => {
      l(c) && R(gn);
    });
  }
  var Vr = w(z, 2), xr = h(Vr), Yr = w(h(xr), 2), pn = w(xr, 2);
  {
    var Lt = (R) => {
      var V = ru();
      D(R, V);
    }, mr = (R) => {
      var V = nu();
      D(R, V);
    }, hn = (R) => {
      var V = ou(), Q = h(V), ie = w(h(Q));
      qt(ie, 21, () => l(d), yr, (Me, ve) => {
        const Oe = /* @__PURE__ */ Qn(() => y(l(ve)));
        var ct = su(), Gr = h(ct), tt = h(Gr), tr = h(tt), Vt = w(Gr), Rt = h(Vt), wt = h(Rt), kt = w(Vt), rr = h(kt), nr = w(kt), Et = h(nr), Nt = h(Et), ir = w(nr), _n = h(ir), jn = w(ir), Fn = h(jn);
        {
          var Un = (sr) => {
            var or = iu(), qr = h(or);
            U(() => {
              or.disabled = l(k) === l(ve).code_hash, j(qr, l(k) === l(ve).code_hash ? "Revoking…" : "Revoke");
            }), X("click", or, () => b(l(ve).code_hash)), D(sr, or);
          };
          K(Fn, (sr) => {
            !l(ve).revoked && !(l(ve).max_uses > 0 && l(ve).uses_count >= l(ve).max_uses) && sr(Un);
          });
        }
        U(
          (sr, or, qr, gi) => {
            zn(tt, "title", l(ve).code_hash), j(tr, `${sr ?? ""}…`), ht(Rt, 1, or), j(wt, l(ve).profile === "admin" ? "Admin" : "Member"), j(rr, `${l(ve).uses_count ?? ""} / ${(l(ve).max_uses || "∞") ?? ""}`), ht(Et, 1, qr), j(Nt, l(Oe).label), j(_n, gi);
          },
          [
            () => l(ve).code_hash.slice(0, 12),
            () => pt(r("px-2 py-0.5 rounded-full text-xs font-medium", l(ve).profile === "admin" ? "bg-purple-100 text-purple-700" : "bg-blue-100 text-blue-700")),
            () => pt(r("px-2 py-0.5 rounded-full text-xs font-medium", l(Oe).color)),
            () => g(l(ve).expires_at)
          ]
        ), D(Me, ct);
      }), D(R, V);
    };
    K(pn, (R) => {
      l(C) ? R(Lt) : l(d).length === 0 ? R(mr, 1) : R(hn, -1);
    });
  }
  U(() => {
    ut.disabled = l(u), j(Hr, l(u) ? "Generating…" : "Generate Invitation"), Yr.disabled = l(C);
  }), Ao(P, () => l(o), (R) => x(o, R)), fr(Xt, () => l(a), (R) => x(a, R)), fr(Ne, () => l(s), (R) => x(s, R)), X("click", ut, I), X("click", Yr, xe), D(e, E), ci();
}
ts(["click"]);
var uu = /* @__PURE__ */ N('<div class="p-6 text-center"><div class="w-14 h-14 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center"><svg class="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg></div> <h3 class="text-xl font-bold text-gray-900 mb-2">Proposal Created</h3> <p class="text-gray-600 mb-1">Your proposal <strong> </strong> has been submitted and voting is now open.</p> <p class="text-sm text-gray-500 mb-6">Realm members can now vote on this proposal in the Voting page.</p> <div class="flex justify-center gap-3"><button class="px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium transition-colors">Go to Voting</button> <button class="px-5 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 font-medium transition-colors">Close</button></div></div>'), cu = /* @__PURE__ */ N('<div class="p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-800"> </div>'), fu = /* @__PURE__ */ N('<div class="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div> Submitting...', 1), du = /* @__PURE__ */ El('<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path></svg> Create Proposal & Start Voting', 1), vu = /* @__PURE__ */ N(
  `<div class="px-6 py-4 border-b border-gray-200"><div class="flex items-start justify-between"><div><h3 class="text-lg font-bold text-gray-900">Create Governance Proposal</h3> <p class="text-sm text-gray-500 mt-0.5">You don't have the <code class="text-xs bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded"> </code> permission. Submit a proposal for the realm to vote on.</p></div> <button class="text-gray-400 hover:text-gray-600 p-1"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div></div> <div class="p-6 space-y-4"><div><div class="text-sm font-medium text-gray-700 mb-1">Proposal Title</div> <div class="px-3 py-2 bg-gray-50 rounded-lg border border-gray-200 text-sm text-gray-800"> </div></div> <div><div class="text-sm font-medium text-gray-700 mb-1">Description</div> <div class="px-3 py-2 bg-gray-50 rounded-lg border border-gray-200 text-sm text-gray-800 whitespace-pre-wrap"> </div></div> <div><div class="flex items-center gap-2 mb-1"><svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg> <span class="text-sm font-medium text-gray-700">Code to Execute</span></div> <div class="bg-gray-900 rounded-lg overflow-hidden"><pre class="p-4 overflow-x-auto text-sm"><code class="text-gray-100"> </code></pre></div></div> <div class="bg-amber-50 border border-amber-200 rounded-lg p-3"><p class="text-xs text-amber-800"><strong>How it works:</strong> This will create a proposal visible to all realm members.
							Once enough members vote "Yes" (meeting the threshold and quorum), the code above will be
							executed automatically on the realm backend.</p></div> <!></div> <div class="px-6 py-4 border-t border-gray-200 flex justify-end gap-3"><button class="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 font-medium text-sm disabled:opacity-50 transition-colors">Cancel</button> <button class="inline-flex items-center gap-2 px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium text-sm disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"><!></button></div>`,
  1
), gu = /* @__PURE__ */ N('<div class="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"><div class="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"><!></div></div>');
function pu(e, t) {
  ui(t, !0);
  let r = Kr(t, "open", 3, !1), n = Kr(t, "title", 3, ""), i = Kr(t, "description", 3, ""), o = Kr(t, "codeInline", 3, ""), a = Kr(t, "deniedOperation", 3, ""), s = Kr(t, "onclose", 3, () => {
  }), u = /* @__PURE__ */ L(!1), c = /* @__PURE__ */ L(!1), _ = /* @__PURE__ */ L(""), f = /* @__PURE__ */ L("");
  async function d() {
    x(u, !0), x(_, "");
    try {
      const I = await t.ctx.backend.extension_sync_call("voting", "submit_proposal", JSON.stringify({
        title: n(),
        description: i(),
        code_inline: o(),
        auto_start_voting: !0
      })), ee = typeof I == "string" ? JSON.parse(I) : I;
      if (ee?.success === !1) {
        x(_, ee.response ?? "Failed to submit proposal", !0);
        return;
      }
      const he = ee?.response ? typeof ee.response == "string" ? JSON.parse(ee.response) : ee.response : ee;
      he?.success ? (x(c, !0), x(f, he.data?.id || "", !0)) : x(_, he?.error || "Failed to submit proposal", !0);
    } catch (I) {
      x(_, I?.message || String(I), !0);
    } finally {
      x(u, !1);
    }
  }
  function C() {
    x(c, !1), x(_, ""), x(f, ""), s()();
  }
  function k() {
    t.ctx.navigate?.("/extensions/voting"), C();
  }
  var B = Al(), F = Ze(B);
  {
    var W = (I) => {
      var ee = gu(), he = h(ee), fe = h(he);
      {
        var xe = (y) => {
          var g = uu(), E = w(h(g), 4), m = w(h(E)), M = h(m), O = w(E, 4), z = h(O), te = w(z, 2);
          U(() => j(M, l(f))), X("click", z, k), X("click", te, C), D(y, g);
        }, b = (y) => {
          var g = vu(), E = Ze(g), m = h(E), M = h(m), O = w(h(M), 2), z = w(h(O)), te = h(z), de = w(M, 2), P = w(E, 2), ae = h(P), me = w(h(ae), 2), ye = h(me), Xt = w(ae, 2), er = w(h(Xt), 2), Ne = h(er), ut = w(Xt, 2), Hr = w(h(ut), 2), Jr = h(Hr), gn = h(Jr), Vr = h(gn), xr = w(ut, 4);
          {
            var Yr = (Q) => {
              var ie = cu(), Me = h(ie);
              U(() => j(Me, l(_))), D(Q, ie);
            };
            K(xr, (Q) => {
              l(_) && Q(Yr);
            });
          }
          var pn = w(P, 2), Lt = h(pn), mr = w(Lt, 2), hn = h(mr);
          {
            var R = (Q) => {
              var ie = fu();
              D(Q, ie);
            }, V = (Q) => {
              var ie = du();
              D(Q, ie);
            };
            K(hn, (Q) => {
              l(u) ? Q(R) : Q(V, -1);
            });
          }
          U(() => {
            j(te, a()), j(ye, n()), j(Ne, i()), j(Vr, o()), Lt.disabled = l(u), mr.disabled = l(u);
          }), X("click", de, C), X("click", Lt, C), X("click", mr, d), D(y, g);
        };
        K(fe, (y) => {
          l(c) ? y(xe) : y(b, -1);
        });
      }
      X("keydown", ee, (y) => y.key === "Escape" && C()), X("click", he, (y) => y.stopPropagation()), D(I, ee);
    };
    K(F, (I) => {
      r() && I(W);
    });
  }
  D(e, B), ci();
}
ts(["keydown", "click"]);
var hu = /* @__PURE__ */ N("<div> </div>"), _u = /* @__PURE__ */ N('<div class="fixed top-4 right-4 z-50 flex flex-col gap-2"></div>'), bu = /* @__PURE__ */ N('<br/><span class="text-gray-500"> </span>', 1), xu = /* @__PURE__ */ N('<div class="fixed inset-0 bg-black/50 z-40 flex items-center justify-center"><div class="bg-white rounded-xl shadow-xl p-6 max-w-md mx-4"><h3 class="text-lg font-bold text-gray-900 mb-2">Confirm Delete</h3> <p class="text-gray-600 mb-4">Are you sure you want to delete <strong> </strong>? <!></p> <p class="text-red-600 text-sm mb-4">This action cannot be undone.</p> <div class="flex justify-end gap-3"><button class="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 font-medium">Cancel</button> <button class="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 font-medium">Delete</button></div></div></div>'), mu = /* @__PURE__ */ N('<div class="mb-4 bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg text-sm"> <button class="ml-2 text-red-600 hover:text-red-800 font-bold">&times;</button></div>'), yu = /* @__PURE__ */ N('<div class="text-xs text-gray-400">Loading…</div>'), wu = /* @__PURE__ */ N('<div class="text-xs text-red-500"> </div>'), ku = /* @__PURE__ */ N('<span class="mx-1">·</span> <span class="text-yellow-600 font-medium"> </span>', 1), Eu = /* @__PURE__ */ N('<div class="text-xs text-gray-500"> <!></div>'), Au = /* @__PURE__ */ N('<div class="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4"><div class="bg-white shadow-sm rounded-lg p-4 border border-gray-200"><div class="text-xs text-gray-500 uppercase tracking-wide">Entity Types</div> <div class="text-2xl font-bold text-gray-900 mt-1"> </div></div> <div class="bg-white shadow-sm rounded-lg p-4 border border-gray-200"><div class="text-xs text-gray-500 uppercase tracking-wide">Extensions</div> <div class="text-2xl font-bold text-gray-900 mt-1"> </div></div> <div class="bg-white shadow-sm rounded-lg p-4 border border-gray-200"><div class="text-xs text-gray-500 uppercase tracking-wide">Codexes</div> <div class="text-2xl font-bold text-gray-900 mt-1"> </div></div> <div class="bg-white shadow-sm rounded-lg p-4 border border-gray-200"><div class="text-xs text-gray-500 uppercase tracking-wide">Updates</div> <div> </div></div></div>'), Cu = /* @__PURE__ */ N('<div class="flex items-center gap-2 text-gray-400 text-sm"><div class="animate-spin h-4 w-4 border-2 border-blue-500 border-t-transparent rounded-full"></div> Loading types…</div>'), Su = /* @__PURE__ */ N("<option> </option>"), Mu = /* @__PURE__ */ N('<select id="entity-type-select" class="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"></select>'), Tu = /* @__PURE__ */ N("<button> </button>"), Du = /* @__PURE__ */ N('<div class="text-center py-10 p-6"><div class="inline-block animate-spin h-8 w-8 border-4 border-blue-500 border-t-transparent rounded-full"></div> <p class="mt-2 text-gray-600">Loading data…</p></div>'), Lu = /* @__PURE__ */ N('<div class="text-center py-10 p-6"><p class="text-gray-500 text-lg">No items loaded. Select an entity type and click "Load Data".</p></div>'), Ru = /* @__PURE__ */ N('<span class="text-gray-700 truncate"> </span>'), Nu = /* @__PURE__ */ N('<div class="min-w-0"><span class="font-semibold text-gray-700"> </span> <span class="text-gray-600 ml-2 break-all"> </span></div>'), Ou = /* @__PURE__ */ N('<div class="mt-4 bg-gray-50 rounded-lg p-4 border border-gray-200"><div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm"></div> <div class="mt-3 pt-3 border-t border-gray-200"><details><summary class="text-xs text-gray-500 cursor-pointer hover:text-gray-700">Raw JSON</summary> <pre class="mt-2 p-3 bg-white rounded border border-gray-200 text-xs font-mono overflow-auto max-h-64 whitespace-pre-wrap break-all"> </pre></details></div></div>'), Bu = /* @__PURE__ */ N('<div class="p-4 hover:bg-gray-50 transition"><div class="flex items-center justify-between"><div class="flex-1 min-w-0"><div class="flex items-center gap-3"><button class="text-blue-600 hover:text-blue-800 font-medium whitespace-nowrap"> </button> <!></div></div> <div class="flex items-center gap-1 ml-2 shrink-0"><button class="p-1.5 hover:bg-gray-100 text-gray-600 hover:text-gray-900 rounded transition-colors" title="Copy JSON"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path></svg></button> <button class="p-1.5 hover:bg-red-50 text-gray-400 hover:text-red-600 rounded transition-colors disabled:opacity-50" title="Delete entity"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg></button></div></div> <!></div>'), Pu = /* @__PURE__ */ N('<div class="border-t border-gray-200 p-4 flex items-center justify-between"><div class="flex items-center gap-2"><button class="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed text-sm">First</button> <button class="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed text-sm">Prev</button></div> <span class="text-sm text-gray-600"> </span> <div class="flex items-center gap-2"><button class="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed text-sm">Next</button> <button class="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed text-sm">Last</button></div></div>'), Iu = /* @__PURE__ */ N('<div class="divide-y divide-gray-200"></div> <!>', 1), ju = /* @__PURE__ */ N('<div class="mb-4 flex items-center gap-4"><button class="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed font-medium transition-colors"> </button> <div class="ml-auto text-gray-600 text-sm"><!></div></div> <div class="bg-white shadow-sm rounded-lg"><!></div>', 1), Fu = /* @__PURE__ */ N('<div class="flex items-center gap-3 text-gray-600"><div class="animate-spin h-5 w-5 border-2 border-blue-500 border-t-transparent rounded-full"></div> Exporting…</div>'), Uu = /* @__PURE__ */ N(", <strong> </strong> codexes", 1), Hu = /* @__PURE__ */ N('<div class="border border-gray-200 rounded-lg overflow-hidden"><div class="bg-gray-50 px-4 py-3 flex items-center justify-between border-b border-gray-200 flex-wrap gap-2"><div class="text-sm text-gray-700"><strong> </strong> entities <!></div> <div class="flex gap-2"><button class="px-4 py-1.5 bg-green-600 text-white text-sm rounded-lg hover:bg-green-700 font-medium transition-colors">Download JSON</button> <button class="px-4 py-1.5 border border-gray-300 text-sm rounded-lg hover:bg-gray-50 font-medium transition-colors">Copy to Clipboard</button></div></div> <div class="max-h-96 overflow-auto"><pre class="p-4 text-xs text-gray-800 font-mono whitespace-pre-wrap break-all"> </pre></div></div>'), Ju = /* @__PURE__ */ N('<div class="bg-white shadow-sm rounded-lg p-6"><h2 class="text-lg font-semibold text-gray-900 mb-4">Export Entities</h2> <p class="text-gray-600 text-sm mb-6">Export entities as a JSON file. You can export a single entity type or all types at once.</p> <div class="flex gap-3 mb-6"><button class="px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed font-medium transition-colors"> </button> <button class="px-5 py-2.5 bg-gray-700 text-white rounded-lg hover:bg-gray-800 disabled:bg-gray-400 disabled:cursor-not-allowed font-medium transition-colors"> </button></div> <!> <!></div>'), Vu = /* @__PURE__ */ N('<p class="text-blue-600 font-medium"> </p> <p class="text-sm text-gray-500 mt-1">Click or drop to replace</p>', 1), Yu = /* @__PURE__ */ N('<svg class="mx-auto h-10 w-10 text-gray-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg> <p class="text-gray-600 font-medium">Drop a JSON file here or click to browse</p> <p class="text-sm text-gray-400 mt-1">Accepts .json files</p>', 1), Gu = /* @__PURE__ */ N('<div role="button" tabindex="0"><input type="file" accept=".json" class="hidden"/> <!></div>'), qu = /* @__PURE__ */ N('<button class="absolute top-2 right-2 px-2 py-1 text-xs text-gray-500 hover:text-gray-700 bg-white border border-gray-200 rounded">Clear</button>'), Wu = /* @__PURE__ */ N('<div class="relative"><textarea class="w-full h-64 p-4 border border-gray-300 rounded-lg font-mono text-sm resize-y focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" spellcheck="false"></textarea> <!></div>'), $u = /* @__PURE__ */ N('<span class="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"> </span>'), Ku = /* @__PURE__ */ N('<div class="bg-green-50 px-4 py-3 border-b border-green-200"><p class="text-sm font-medium text-green-800"> <!></p></div> <div class="px-4 py-3"><div class="flex flex-wrap gap-2"></div> <div class="mt-4 flex gap-3"><button class="px-5 py-2.5 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed font-medium transition-colors"> </button> <button class="px-5 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 font-medium disabled:opacity-50 transition-colors">Cancel</button></div></div>', 1), Qu = /* @__PURE__ */ N('<div class="bg-red-50 px-4 py-3"><p class="text-sm font-medium text-red-800">Invalid JSON</p> <p class="text-sm text-red-600 mt-1"> </p></div>'), Zu = /* @__PURE__ */ N("<div><!></div>"), zu = /* @__PURE__ */ N("<li> </li>"), Xu = /* @__PURE__ */ N('<ul class="mt-1 list-disc list-inside text-red-600"></ul>'), ec = /* @__PURE__ */ N('<p class="text-red-600"> </p> <!>', 1), tc = /* @__PURE__ */ N('<div class="mt-2 text-sm text-green-700"><p> </p> <p> </p> <!></div>'), rc = /* @__PURE__ */ N('<p class="text-sm font-medium text-green-800">Import complete</p> <!>', 1), nc = /* @__PURE__ */ N('<p class="text-sm font-medium text-red-800">Import failed</p> <p class="text-sm text-red-600 mt-1"> </p>', 1), ic = /* @__PURE__ */ N('<div><div class="px-4 py-3"><!></div></div>'), sc = /* @__PURE__ */ N('<div class="bg-white shadow-sm rounded-lg p-6"><h2 class="text-lg font-semibold text-gray-900 mb-4">Import Entities</h2> <p class="text-gray-600 text-sm mb-6">Import entities from a JSON file or paste JSON directly. Existing entities with the same type and ID will be updated (upsert).</p> <div class="flex gap-2 mb-4"><button>Upload File</button> <button>JSON Editor</button></div> <!> <!> <!></div>'), oc = /* @__PURE__ */ N('<div class="flex items-center justify-center py-10"><div class="animate-spin h-8 w-8 border-4 border-blue-500 border-t-transparent rounded-full"></div></div>'), ac = /* @__PURE__ */ N('<div class="mt-2 flex items-center gap-3"><img alt="Logo preview" class="h-12 w-12 object-contain rounded border border-gray-200 bg-gray-50"/> <span class="text-xs text-gray-500">Preview</span></div>'), lc = /* @__PURE__ */ N('<div class="mt-2"><img alt="Background preview" class="h-24 w-full object-cover rounded border border-gray-200"/> <span class="text-xs text-gray-500">Preview</span></div>'), uc = /* @__PURE__ */ N('<div class="p-3 bg-green-50 border border-green-200 rounded-lg text-sm text-green-800"> </div>'), cc = /* @__PURE__ */ N('<div class="p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-800"> </div>'), fc = /* @__PURE__ */ N(`<div class="space-y-5"><div><label for="rs-name" class="block text-sm font-medium text-gray-700 mb-1">Realm Name</label> <input id="rs-name" type="text" class="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"/></div> <div><label for="rs-desc" class="block text-sm font-medium text-gray-700 mb-1">Description</label> <textarea id="rs-desc" rows="2" class="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-y"></textarea></div> <div><label for="rs-welcome" class="block text-sm font-medium text-gray-700 mb-1">Welcome Message</label> <textarea id="rs-welcome" rows="3" class="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-y"></textarea></div> <div><label for="rs-logo" class="block text-sm font-medium text-gray-700 mb-1">Logo URL</label> <input id="rs-logo" type="url" placeholder="https://example.com/logo.png" class="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"/> <!></div> <div><label for="rs-bg" class="block text-sm font-medium text-gray-700 mb-1">Background Image URL</label> <input id="rs-bg" type="url" placeholder="https://example.com/background.png" class="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"/> <!></div> <div class="flex items-center gap-3"><label for="rs-open-reg" class="relative inline-flex items-center cursor-pointer"><input id="rs-open-reg" type="checkbox" class="sr-only peer"/> <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-600 peer-focus:ring-2 peer-focus:ring-blue-300 after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full"></div></label> <div><span class="text-sm font-medium text-gray-700">Open Registration</span> <p class="text-xs text-gray-500">When enabled, anyone can join without an invite code.</p></div></div> <!> <!> <div class="pt-2"><button class="px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed font-medium transition-colors"> </button></div></div>`), dc = /* @__PURE__ */ N(`<div class="bg-white shadow-sm rounded-lg p-6"><h2 class="text-lg font-semibold text-gray-900 mb-1">Realm Settings</h2> <p class="text-gray-600 text-sm mb-6">Configure your realm's name, description, branding, and registration settings.</p> <!></div>`), vc = /* @__PURE__ */ N('<!> <!> <div class="w-full px-4 max-w-none"><div class="flex justify-between items-center mb-6"><div><h1 class="text-3xl font-bold text-gray-900">Admin Dashboard</h1> <p class="text-gray-600 mt-1">Manage realm entities</p></div> <button class="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50" title="Refresh"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg></button></div> <!> <button class="block w-full mb-4 bg-white shadow-sm rounded-lg p-4 border border-gray-200 hover:border-blue-400 hover:shadow transition-all text-left cursor-pointer"><div class="flex items-center justify-between gap-4"><div class="flex items-center gap-3"><div class="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center text-xl">📦</div> <div><div class="text-sm font-medium text-gray-700">Packages</div> <!></div></div> <span class="text-blue-600 text-sm font-medium">Manage →</span></div></button> <!> <div class="mb-4 bg-white shadow-sm rounded-lg p-4"><div class="flex items-center gap-4 flex-wrap"><label for="entity-type-select" class="font-medium text-gray-700">Entity Type:</label> <!></div></div> <div class="mb-4 border-b border-gray-200"><nav class="flex gap-1" aria-label="Tabs"></nav></div> <!></div> <!>', 1);
function gc(e, t) {
  ui(t, !0);
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
  let i = /* @__PURE__ */ L(Ut([])), o = /* @__PURE__ */ L(""), a = /* @__PURE__ */ L("browse"), s = /* @__PURE__ */ L(!0), u = /* @__PURE__ */ L(""), c = /* @__PURE__ */ L(Ut([])), _ = /* @__PURE__ */ L(0), f = /* @__PURE__ */ L(Ut([])), d = /* @__PURE__ */ L(!1), C = /* @__PURE__ */ L(null), k = /* @__PURE__ */ L(0), B = 10, F = /* @__PURE__ */ L(0), W = /* @__PURE__ */ L(0), I = /* @__PURE__ */ L(null), ee = /* @__PURE__ */ L(null), he = /* @__PURE__ */ L(!1), fe = /* @__PURE__ */ L(null), xe = /* @__PURE__ */ L("file"), b = /* @__PURE__ */ L(""), y = /* @__PURE__ */ L(""), g = /* @__PURE__ */ L(null), E = /* @__PURE__ */ L(!1), m = /* @__PURE__ */ L(null), M = /* @__PURE__ */ L(void 0), O = /* @__PURE__ */ L(!1), z = /* @__PURE__ */ L(null), te = /* @__PURE__ */ L(0), de = /* @__PURE__ */ L(!0), P = /* @__PURE__ */ L(""), ae = /* @__PURE__ */ L(0), me = /* @__PURE__ */ L(0);
  function ye(p, A = "success") {
    const S = zs(_);
    x(c, [...l(c), { id: S, text: p, type: A }], !0), setTimeout(
      () => {
        x(c, l(c).filter((T) => T.id !== S), !0);
      },
      4e3
    );
  }
  function Xt(p) {
    return n[p] || "📊";
  }
  function er(p) {
    return p.replace(/([A-Z])/g, " $1").trim();
  }
  async function Ne(p, A = {}) {
    return await t.ctx.callSync(p, A);
  }
  function ut(p) {
    if (p?.success && p?.data?.objectsListPaginated) {
      const A = p.data.objectsListPaginated;
      return { objects: (A.objects || []).map((T) => {
        try {
          return typeof T == "string" ? JSON.parse(T) : T;
        } catch {
          return T;
        }
      }), pagination: A.pagination };
    }
    return p?.data && Array.isArray(p.data) ? { objects: p.data, pagination: null } : { objects: [], pagination: null };
  }
  async function Hr() {
    x(s, !0), x(u, "");
    try {
      const p = await Ne("get_entity_types"), A = p?.data ?? (Array.isArray(p) ? p : []);
      x(
        i,
        A.map((S) => ({
          value: S,
          label: `${Xt(S)} ${er(S)}`,
          className: S
        })),
        !0
      ), l(i).length > 0 && !l(o) && x(o, l(i)[0].value, !0);
    } catch (p) {
      x(u, p?.message || String(p), !0), x(i, [{ value: "User", label: "👤 User", className: "User" }], !0), l(o) || x(o, "User");
    } finally {
      x(s, !1);
    }
  }
  async function Jr() {
    x(de, !0), x(P, "");
    try {
      const [p, A, S] = await Promise.all([
        t.ctx.backend.list_runtime_extensions().catch(() => "{}"),
        t.ctx.backend.list_codex_packages().catch(() => "{}"),
        t.ctx.backend.status().catch(() => null)
      ]), T = typeof p == "string" ? JSON.parse(p) : p, Y = typeof A == "string" ? JSON.parse(A) : A, J = T?.success ? T.runtime_extensions ?? [] : [], _e = Y?.success ? Y.codex_packages ?? [] : [], Ce = T?.success ? T.all_manifests ?? {} : {}, Be = Y?.success ? Y.manifests ?? {} : {};
      x(ae, Object.keys(Ce).length || J.length, !0), x(
        me,
        Array.isArray(_e) ? _e.length : Object.keys(Be).length,
        !0
      ), x(z, l(ae) + l(me));
      const He = S?.success && S?.data?.status?.registries || [];
      let Je = 0;
      for (const we of He)
        try {
          const oe = gn(we.canister_id);
          if (!oe) continue;
          const [H, le] = await Promise.all([
            fetch(`${oe}/api/extensions`, { headers: { Accept: "application/json" } }).then((ge) => ge.ok ? ge.json() : []).catch(() => []),
            fetch(`${oe}/api/codices`, { headers: { Accept: "application/json" } }).then((ge) => ge.ok ? ge.json() : []).catch(() => [])
          ]);
          for (const ge of H) {
            if (!J.includes(ge.ext_id)) continue;
            const Te = Ce?.[ge.ext_id]?.version;
            Te && ge.latest && Vr(ge.latest, Te) && Je++;
          }
          for (const ge of le) {
            if (!_e.includes(ge.codex_id)) continue;
            const Te = Be?.[ge.codex_id]?.version;
            Te && ge.latest && Vr(ge.latest, Te) && Je++;
          }
        } catch {
        }
      x(te, Je, !0);
    } catch (p) {
      x(P, p?.message ?? String(p), !0);
    } finally {
      x(de, !1);
    }
  }
  function gn(p) {
    if (typeof window > "u") return null;
    const A = window.location.host;
    if (A.includes("localhost") || A.includes("127.0.0.1")) {
      const T = A.split(":")[1] ?? "4943";
      return `http://${p}.localhost:${T}`;
    }
    return `https://${p}.icp0.io`;
  }
  function Vr(p, A) {
    const S = (p || "").split("-", 1)[0].split(".").map((J) => parseInt(J, 10) || 0), T = (A || "").split("-", 1)[0].split(".").map((J) => parseInt(J, 10) || 0), Y = Math.max(S.length, T.length);
    for (let J = 0; J < Y; J++) {
      const _e = S[J] ?? 0, Ce = T[J] ?? 0;
      if (_e !== Ce) return _e > Ce;
    }
    return !1;
  }
  async function xr() {
    x(d, !0), x(C, null);
    try {
      const p = await t.ctx.backend.get_objects_paginated(l(o), l(k), B, "desc"), A = typeof p == "string" ? JSON.parse(p) : p, { objects: S, pagination: T } = ut(A);
      x(f, S, !0), T ? (x(F, Number(T.total_items || 0), !0), x(W, Number(T.total_pages || 0), !0)) : (x(F, S.length, !0), x(W, 1));
    } catch (p) {
      x(u, p?.message || String(p), !0), x(f, [], !0);
    } finally {
      x(d, !1);
    }
  }
  function Yr(p) {
    x(C, l(C) === p ? null : p, !0);
  }
  function pn(p) {
    navigator.clipboard.writeText(JSON.stringify(p, null, 2)), ye("JSON copied to clipboard");
  }
  function Lt(p) {
    x(k, p, !0), xr();
  }
  function mr(p) {
    x(ee, p, !0);
  }
  function hn() {
    x(ee, null);
  }
  async function R() {
    if (!l(ee)) return;
    const p = l(ee), A = p._type || l(o), S = p._id || p.id;
    x(ee, null), x(I, String(S), !0);
    try {
      const T = await Ne("delete_entity", { entity_type: A, entity_id: String(S) });
      T?.success ? (x(f, l(f).filter((Y) => !((Y._id || Y.id) === S && (Y._type || l(o)) === A)), !0), x(F, Math.max(0, l(F) - 1), !0), ye(`Deleted ${A}#${S}`)) : ye(T?.error || "Delete failed", "error");
    } catch (T) {
      ye(`Delete error: ${T?.message}`, "error");
    } finally {
      x(I, null);
    }
  }
  async function V(p = !1) {
    x(he, !0), x(fe, null);
    try {
      const A = p ? { include_codexes: !0 } : { entity_types: [l(o)], include_codexes: !0 }, S = await Ne("export_data", A);
      if (S?.success && S?.data) {
        const T = typeof S.data == "string" ? JSON.parse(S.data) : S.data;
        x(fe, T, !0);
        const Y = p ? `Exported ${T.total_entities ?? "?"} entities, ${T.total_codexes ?? 0} codexes` : `Exported ${T.total_entities ?? "?"} entities`;
        ye(Y);
      } else
        ye(S?.error || "Export failed", "error");
    } catch (A) {
      ye(`Export error: ${A?.message}`, "error");
    } finally {
      x(he, !1);
    }
  }
  function Q(p = !1) {
    if (!l(fe)) return;
    const A = JSON.stringify(l(fe), null, 2), S = new Blob([A], { type: "application/json" }), T = URL.createObjectURL(S), Y = document.createElement("a");
    Y.href = T;
    const J = (/* @__PURE__ */ new Date()).toISOString().replace(/[:.]/g, "-").slice(0, 19);
    Y.download = p ? `export_all_${J}.json` : `export_${l(o)}_${J}.json`, Y.click(), URL.revokeObjectURL(T), ye("Download started");
  }
  function ie() {
    l(fe) && (navigator.clipboard.writeText(JSON.stringify(l(fe), null, 2)), ye("Copied to clipboard"));
  }
  function Me(p) {
    const S = p.target.files?.[0];
    S && Oe(S);
  }
  function ve(p) {
    p.preventDefault(), x(O, !1);
    const A = p.dataTransfer?.files?.[0];
    A && Oe(A);
  }
  function Oe(p) {
    x(y, p.name, !0);
    const A = new FileReader();
    A.onload = (S) => {
      x(b, S.target?.result || "", !0), ct();
    }, A.readAsText(p);
  }
  function ct() {
    if (x(g, null), x(m, null), !!l(b).trim())
      try {
        const p = JSON.parse(l(b));
        let A = [], S = [];
        Array.isArray(p) ? A = p : p.entities ? (A = p.entities || [], S = p.codexes || []) : A = [p];
        const T = {};
        for (const Y of A) {
          const J = Y._type || "unknown";
          T[J] = (T[J] || 0) + 1;
        }
        x(
          g,
          {
            totalEntities: A.length,
            totalCodexes: S.length,
            typeCounts: T,
            valid: !0,
            entities: A,
            codexes: S
          },
          !0
        );
      } catch (p) {
        x(
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
  async function Gr() {
    if (!(!l(g) || !l(g).valid)) {
      x(E, !0), x(m, null);
      try {
        const p = [...l(g).entities];
        for (const S of l(g).codexes)
          p.push({ ...S, _type: "Codex" });
        const A = await Ne("import_data", { format: "json", data: JSON.stringify(p) });
        if (x(m, A, !0), A?.success) {
          const S = A.data || {};
          ye(`Imported ${S.successful || 0} of ${S.total_records || 0} records`);
        } else
          ye(A?.error || "Import failed", "error");
      } catch (p) {
        x(m, { success: !1, error: p.message }, !0), ye(`Import error: ${p?.message}`, "error");
      } finally {
        x(E, !1);
      }
    }
  }
  function tt() {
    x(b, ""), x(y, ""), x(g, null), x(m, null), l(M) && (l(M).value = "");
  }
  let tr = /* @__PURE__ */ L(!0), Vt = /* @__PURE__ */ L(!1), Rt = /* @__PURE__ */ L(""), wt = /* @__PURE__ */ L(""), kt = /* @__PURE__ */ L(""), rr = /* @__PURE__ */ L(""), nr = /* @__PURE__ */ L(""), Et = /* @__PURE__ */ L(""), Nt = /* @__PURE__ */ L(""), ir = /* @__PURE__ */ L(!1), _n = /* @__PURE__ */ L(!1), jn = /* @__PURE__ */ L(""), Fn = /* @__PURE__ */ L(""), Un = /* @__PURE__ */ L(""), sr = /* @__PURE__ */ L("");
  function or() {
    const p = ["from ggg import Realm", "", 'realm = Realm.load("1")'];
    return l(kt) && p.push(`realm.name = ${JSON.stringify(l(kt))}`), l(rr) && p.push(`realm.description = ${JSON.stringify(l(rr))}`), p.push(`realm.welcome_message = ${JSON.stringify(l(nr))}`), l(Et) && p.push(`realm.logo_url = ${JSON.stringify(l(Et))}`), l(Nt) && p.push(`realm.background_image_url = ${JSON.stringify(l(Nt))}`), p.push(`realm.open_registration = ${l(ir) ? "True" : "False"}`), p.join(`
`);
  }
  function qr(p) {
    x(jn, "Update realm settings"), x(Fn, "This proposal updates the realm configuration (name, description, welcome message, branding, and registration settings) as specified in the code below."), x(Un, or(), !0), x(sr, p, !0), x(_n, !0);
  }
  async function gi() {
    x(tr, !0), x(wt, "");
    try {
      const p = await t.ctx.backend.status();
      if (p?.success && p?.data?.status) {
        const A = p.data.status;
        x(kt, A.realm_name || "", !0), x(rr, A.realm_description || "", !0), x(nr, A.realm_welcome_message || "", !0), x(Et, A.logo_url || "", !0), x(Nt, A.background_image_url || "", !0), x(ir, !!A.open_registration);
      }
    } catch (p) {
      x(wt, p?.message || String(p), !0);
    } finally {
      x(tr, !1);
    }
  }
  async function So() {
    x(Vt, !0), x(Rt, ""), x(wt, "");
    try {
      const p = {
        name: l(kt),
        description: l(rr),
        welcome_message: l(nr),
        logo_url: l(Et),
        background_image_url: l(Nt),
        open_registration: l(ir)
      }, A = await t.ctx.backend.update_realm_config(JSON.stringify(p)), S = typeof A == "string" ? JSON.parse(A) : A;
      S?.success ? (x(Rt, "Realm settings saved successfully."), ye("Realm settings updated")) : S?.denied_operation ? qr(S.denied_operation) : x(wt, S?.error || "Failed to save settings", !0);
    } catch (p) {
      const A = p?.message || String(p);
      if (A.includes("Access denied") && A.includes("lacks permission")) {
        const S = A.match(/lacks permission '([^']+)'/);
        qr(S?.[1] || "realm.configure");
      } else
        x(wt, A, !0);
    } finally {
      x(Vt, !1);
    }
  }
  so(() => {
    Hr(), Jr(), gi();
  });
  const Mo = [
    { id: "browse", label: "Browse" },
    { id: "export", label: "Export" },
    { id: "import", label: "Import" },
    { id: "invitations", label: "Invitations" },
    { id: "settings", label: "Realm Settings" }
  ];
  let To = /* @__PURE__ */ Qn(() => l(fe) ? JSON.stringify(l(fe), null, 2) : "");
  var rs = vc(), ns = Ze(rs);
  {
    var Do = (p) => {
      var A = _u();
      qt(A, 21, () => l(c), (S) => S.id, (S, T) => {
        var Y = hu(), J = h(Y);
        U(
          (_e) => {
            ht(Y, 1, _e), j(J, l(T).text);
          },
          [
            () => pt(r("px-4 py-3 rounded-lg shadow-lg text-sm font-medium transition-all", l(T).type === "error" ? "bg-red-600 text-white" : "bg-green-600 text-white"))
          ]
        ), D(S, Y);
      }), D(p, A);
    };
    K(ns, (p) => {
      l(c).length > 0 && p(Do);
    });
  }
  var is = w(ns, 2);
  {
    var Lo = (p) => {
      var A = xu(), S = h(A), T = w(h(S), 2), Y = w(h(T)), J = h(Y), _e = w(Y, 2);
      {
        var Ce = (we) => {
          var oe = bu(), H = w(Ze(oe)), le = h(H);
          U(() => j(le, `(${l(ee).name ?? ""})`)), D(we, oe);
        };
        K(_e, (we) => {
          l(ee).name && we(Ce);
        });
      }
      var Be = w(T, 4), He = h(Be), Je = w(He, 2);
      U(() => j(J, `${(l(ee)._type || l(o)) ?? ""}#${(l(ee)._id || l(ee).id) ?? ""}`)), X("click", He, hn), X("click", Je, R), D(p, A);
    };
    K(is, (p) => {
      l(ee) && p(Lo);
    });
  }
  var ss = w(is, 2), os = h(ss), as = w(h(os), 2), ls = w(os, 2);
  {
    var Ro = (p) => {
      var A = mu(), S = h(A), T = w(S);
      U(() => j(S, `${l(u) ?? ""} `)), X("click", T, () => x(u, "")), D(p, A);
    };
    K(ls, (p) => {
      l(u) && p(Ro);
    });
  }
  var pi = w(ls, 2), No = h(pi), Oo = h(No), Bo = w(h(Oo), 2), Po = w(h(Bo), 2);
  {
    var Io = (p) => {
      var A = yu();
      D(p, A);
    }, jo = (p) => {
      var A = wu(), S = h(A);
      U(() => j(S, l(P))), D(p, A);
    }, Fo = (p) => {
      var A = Eu(), S = h(A), T = w(S);
      {
        var Y = (J) => {
          var _e = ku(), Ce = w(Ze(_e), 2), Be = h(Ce);
          U(() => j(Be, `${l(te) ?? ""} update${l(te) === 1 ? "" : "s"} available`)), D(J, _e);
        };
        K(T, (J) => {
          l(te) > 0 && J(Y);
        });
      }
      U(() => j(S, `${l(z) ?? 0 ?? ""} installed `)), D(p, A);
    };
    K(Po, (p) => {
      l(de) ? p(Io) : l(P) ? p(jo, 1) : p(Fo, -1);
    });
  }
  var us = w(pi, 2);
  {
    var Uo = (p) => {
      var A = Au(), S = h(A), T = w(h(S), 2), Y = h(T), J = w(S, 2), _e = w(h(J), 2), Ce = h(_e), Be = w(J, 2), He = w(h(Be), 2), Je = h(He), we = w(Be, 2), oe = w(h(we), 2), H = h(oe);
      U(
        (le) => {
          j(Y, l(i).length), j(Ce, l(ae)), j(Je, l(me)), ht(oe, 1, le), j(H, l(de) ? "…" : l(te));
        },
        [
          () => pt(r("text-2xl font-bold mt-1", l(te) > 0 ? "text-yellow-600" : "text-gray-900"))
        ]
      ), D(p, A);
    };
    K(us, (p) => {
      l(s) || p(Uo);
    });
  }
  var cs = w(us, 2), Ho = h(cs), Jo = w(h(Ho), 2);
  {
    var Vo = (p) => {
      var A = Cu();
      D(p, A);
    }, Yo = (p) => {
      var A = Mu();
      qt(A, 21, () => l(i), yr, (S, T) => {
        var Y = Su(), J = h(Y), _e = {};
        U(() => {
          j(J, l(T).label), _e !== (_e = l(T).value) && (Y.value = (Y.__value = l(T).value) ?? "");
        }), D(S, Y);
      }), Ao(A, () => l(o), (S) => x(o, S)), D(p, A);
    };
    K(Jo, (p) => {
      l(s) ? p(Vo) : p(Yo, -1);
    });
  }
  var fs = w(cs, 2), Go = h(fs);
  qt(Go, 21, () => Mo, yr, (p, A) => {
    var S = Tu(), T = h(S);
    U(
      (Y) => {
        ht(S, 1, Y), j(T, l(A).label);
      },
      [
        () => pt(r("px-5 py-2.5 text-sm font-medium rounded-t-lg border-b-2 transition-colors", l(a) === l(A).id ? "border-blue-600 text-blue-600 bg-blue-50" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"))
      ]
    ), X("click", S, () => x(a, l(A).id, !0)), D(p, S);
  });
  var qo = w(fs, 2);
  {
    var Wo = (p) => {
      var A = ju(), S = Ze(A), T = h(S), Y = h(T), J = w(T, 2), _e = h(J);
      {
        var Ce = (H) => {
          var le = Cs();
          U(() => j(le, `Showing ${l(f).length ?? ""} of ${l(F) ?? ""} items`)), D(H, le);
        };
        K(_e, (H) => {
          l(f).length > 0 && H(Ce);
        });
      }
      var Be = w(S, 2), He = h(Be);
      {
        var Je = (H) => {
          var le = Du();
          D(H, le);
        }, we = (H) => {
          var le = Lu();
          D(H, le);
        }, oe = (H) => {
          var le = Iu(), ge = Ze(le);
          qt(ge, 21, () => l(f), yr, (G, ue, ke) => {
            var Se = Bu(), Ve = h(Se), We = h(Ve), rt = h(We), je = h(rt), Fe = h(je), Ye = w(je, 2);
            {
              var Yt = (nt) => {
                var Bt = Ru(), Pt = h(Bt);
                U(() => j(Pt, `- ${l(ue).name ?? ""}`)), D(nt, Bt);
              };
              K(Ye, (nt) => {
                l(ue).name && nt(Yt);
              });
            }
            var Ot = w(We, 2), $e = h(Ot), re = w($e, 2), De = w(Ve, 2);
            {
              var Ke = (nt) => {
                var Bt = Ou(), Pt = h(Bt);
                qt(Pt, 21, () => Object.entries(l(ue)), yr, (bn, Xo) => {
                  var ds = /* @__PURE__ */ Qn(() => _s(l(Xo), 2));
                  let ea = () => l(ds)[0], bi = () => l(ds)[1];
                  var vs = Nu(), gs = h(vs), ta = h(gs), ra = w(gs, 2), na = h(ra);
                  U(
                    (ia) => {
                      j(ta, `${ea() ?? ""}:`), j(na, ia);
                    },
                    [
                      () => typeof bi() == "object" ? JSON.stringify(bi()) : String(bi())
                    ]
                  ), D(bn, vs);
                });
                var Wr = w(Pt, 2), hi = h(Wr), _i = w(h(hi), 2), Hn = h(_i);
                U((bn) => j(Hn, bn), [() => JSON.stringify(l(ue), null, 2)]), D(nt, Bt);
              };
              K(De, (nt) => {
                l(C) === ke && nt(Ke);
              });
            }
            U(
              (nt) => {
                j(Fe, `${l(C) === ke ? "▼" : "▶"}
											${(l(ue)._type || l(o)) ?? ""} #${(l(ue)._id || l(ue).id || ke + 1) ?? ""}`), re.disabled = nt;
              },
              [
                () => l(I) === String(l(ue)._id || l(ue).id)
              ]
            ), X("click", je, () => Yr(ke)), X("click", $e, () => pn(l(ue))), X("click", re, () => mr(l(ue))), D(G, Se);
          });
          var Te = w(ge, 2);
          {
            var be = (G) => {
              var ue = Pu(), ke = h(ue), Se = h(ke), Ve = w(Se, 2), We = w(ke, 2), rt = h(We), je = w(We, 2), Fe = h(je), Ye = w(Fe, 2);
              U(() => {
                Se.disabled = l(k) === 0, Ve.disabled = l(k) === 0, j(rt, `Page ${l(k) + 1} of ${l(W) ?? ""}`), Fe.disabled = l(k) >= l(W) - 1, Ye.disabled = l(k) >= l(W) - 1;
              }), X("click", Se, () => Lt(0)), X("click", Ve, () => Lt(l(k) - 1)), X("click", Fe, () => Lt(l(k) + 1)), X("click", Ye, () => Lt(l(W) - 1)), D(G, ue);
            };
            K(Te, (G) => {
              l(W) > 1 && G(be);
            });
          }
          D(H, le);
        };
        K(He, (H) => {
          l(d) ? H(Je) : l(f).length === 0 ? H(we, 1) : H(oe, -1);
        });
      }
      U(() => {
        T.disabled = l(d), j(Y, l(d) ? "Loading…" : "Load Data");
      }), X("click", T, xr), D(p, A);
    }, $o = (p) => {
      var A = Ju(), S = w(h(A), 4), T = h(S), Y = h(T), J = w(T, 2), _e = h(J), Ce = w(S, 2);
      {
        var Be = (we) => {
          var oe = Fu();
          D(we, oe);
        };
        K(Ce, (we) => {
          l(he) && we(Be);
        });
      }
      var He = w(Ce, 2);
      {
        var Je = (we) => {
          var oe = Hu(), H = h(oe), le = h(H), ge = h(le), Te = h(ge), be = w(ge, 2);
          {
            var G = (je) => {
              var Fe = Uu(), Ye = w(Ze(Fe)), Yt = h(Ye);
              U(() => j(Yt, l(fe).total_codexes)), D(je, Fe);
            };
            K(be, (je) => {
              (l(fe).total_codexes ?? 0) > 0 && je(G);
            });
          }
          var ue = w(le, 2), ke = h(ue), Se = w(ke, 2), Ve = w(H, 2), We = h(Ve), rt = h(We);
          U(() => {
            j(Te, l(fe).total_entities ?? "?"), j(rt, l(To));
          }), X("click", ke, () => Q(!1)), X("click", Se, ie), D(we, oe);
        };
        K(He, (we) => {
          l(fe) && we(Je);
        });
      }
      U(() => {
        T.disabled = l(he), j(Y, l(he) ? "Exporting…" : `Export ${l(o)}`), J.disabled = l(he), j(_e, l(he) ? "Exporting…" : "Export All Types");
      }), X("click", T, () => V(!1)), X("click", J, () => V(!0)), D(p, A);
    }, Ko = (p) => {
      lu(p, {
        get ctx() {
          return t.ctx;
        }
      });
    }, Qo = (p) => {
      var A = sc(), S = w(h(A), 4), T = h(S), Y = w(T, 2), J = w(S, 2);
      {
        var _e = (oe) => {
          var H = Gu(), le = h(H);
          Jl(le, (G) => x(M, G), () => l(M));
          var ge = w(le, 2);
          {
            var Te = (G) => {
              var ue = Vu(), ke = Ze(ue), Se = h(ke);
              U(() => j(Se, l(y))), D(G, ue);
            }, be = (G) => {
              var ue = Yu();
              D(G, ue);
            };
            K(ge, (G) => {
              l(y) ? G(Te) : G(be, -1);
            });
          }
          U((G) => ht(H, 1, G), [
            () => pt(r("border-2 border-dashed rounded-lg p-8 text-center transition-colors cursor-pointer", l(O) ? "border-blue-500 bg-blue-50" : "border-gray-300 hover:border-gray-400"))
          ]), wi("drop", H, ve), wi("dragover", H, (G) => {
            G.preventDefault(), x(O, !0);
          }), wi("dragleave", H, () => x(O, !1)), X("click", H, () => l(M)?.click()), X("keydown", H, (G) => G.key === "Enter" && l(M)?.click()), X("change", le, Me), D(oe, H);
        }, Ce = (oe) => {
          var H = Wu(), le = h(H);
          zn(le, "placeholder", `Paste JSON here, e.g.
[
  {"_type": "User", "_id": "1", "name": "Alice"},
  {"_type": "User", "_id": "2", "name": "Bob"}
]`);
          var ge = w(le, 2);
          {
            var Te = (be) => {
              var G = qu();
              X("click", G, tt), D(be, G);
            };
            K(ge, (be) => {
              l(b) && be(Te);
            });
          }
          X("input", le, ct), fr(le, () => l(b), (be) => x(b, be)), D(oe, H);
        };
        K(J, (oe) => {
          l(xe) === "file" ? oe(_e) : oe(Ce, -1);
        });
      }
      var Be = w(J, 2);
      {
        var He = (oe) => {
          var H = Zu(), le = h(H);
          {
            var ge = (be) => {
              var G = Ku(), ue = Ze(G), ke = h(ue), Se = h(ke), Ve = w(Se);
              {
                var We = ($e) => {
                  var re = Cs();
                  U(() => j(re, `, ${l(g).totalCodexes ?? ""} codexes`)), D($e, re);
                };
                K(Ve, ($e) => {
                  l(g).totalCodexes > 0 && $e(We);
                });
              }
              var rt = w(ue, 2), je = h(rt);
              qt(je, 21, () => Object.entries(l(g).typeCounts), yr, ($e, re) => {
                var De = /* @__PURE__ */ Qn(() => _s(l(re), 2));
                let Ke = () => l(De)[0], nt = () => l(De)[1];
                var Bt = $u(), Pt = h(Bt);
                U((Wr) => j(Pt, `${Wr ?? ""} ${Ke() ?? ""}: ${nt() ?? ""}`), [() => Xt(Ke())]), D($e, Bt);
              });
              var Fe = w(je, 2), Ye = h(Fe), Yt = h(Ye), Ot = w(Ye, 2);
              U(() => {
                j(Se, `Ready to import: ${l(g).totalEntities ?? ""} entities `), Ye.disabled = l(E), j(Yt, l(E) ? "Importing…" : "Confirm Import"), Ot.disabled = l(E);
              }), X("click", Ye, Gr), X("click", Ot, tt), D(be, G);
            }, Te = (be) => {
              var G = Qu(), ue = w(h(G), 2), ke = h(ue);
              U(() => j(ke, l(g).error)), D(be, G);
            };
            K(le, (be) => {
              l(g).valid ? be(ge) : be(Te, -1);
            });
          }
          U((be) => ht(H, 1, be), [
            () => pt(r("mt-4 border rounded-lg overflow-hidden", l(g).valid ? "border-green-200" : "border-red-200"))
          ]), D(oe, H);
        };
        K(Be, (oe) => {
          l(g) && oe(He);
        });
      }
      var Je = w(Be, 2);
      {
        var we = (oe) => {
          var H = ic(), le = h(H), ge = h(le);
          {
            var Te = (G) => {
              var ue = rc(), ke = w(Ze(ue), 2);
              {
                var Se = (Ve) => {
                  var We = tc(), rt = h(We), je = h(rt), Fe = w(rt, 2), Ye = h(Fe), Yt = w(Fe, 2);
                  {
                    var Ot = ($e) => {
                      var re = ec(), De = Ze(re), Ke = h(De), nt = w(De, 2);
                      {
                        var Bt = (Pt) => {
                          var Wr = Xu();
                          qt(Wr, 21, () => l(m).data.errors, yr, (hi, _i) => {
                            var Hn = zu(), bn = h(Hn);
                            U(() => j(bn, l(_i))), D(hi, Hn);
                          }), D(Pt, Wr);
                        };
                        K(nt, (Pt) => {
                          l(m).data.errors?.length && Pt(Bt);
                        });
                      }
                      U(() => j(Ke, `Failed: ${l(m).data.failed ?? ""}`)), D($e, re);
                    };
                    K(Yt, ($e) => {
                      (l(m).data.failed ?? 0) > 0 && $e(Ot);
                    });
                  }
                  U(() => {
                    j(je, `Total records: ${(l(m).data.total_records || 0) ?? ""}`), j(Ye, `Successful: ${(l(m).data.successful || 0) ?? ""}`);
                  }), D(Ve, We);
                };
                K(ke, (Ve) => {
                  l(m).data && Ve(Se);
                });
              }
              D(G, ue);
            }, be = (G) => {
              var ue = nc(), ke = w(Ze(ue), 2), Se = h(ke);
              U(() => j(Se, l(m).error)), D(G, ue);
            };
            K(ge, (G) => {
              l(m).success ? G(Te) : G(be, -1);
            });
          }
          U((G) => ht(H, 1, G), [
            () => pt(r("mt-4 border rounded-lg overflow-hidden", l(m).success ? "border-green-200 bg-green-50" : "border-red-200 bg-red-50"))
          ]), D(oe, H);
        };
        K(Je, (oe) => {
          l(m) && oe(we);
        });
      }
      U(
        (oe, H) => {
          ht(T, 1, oe), ht(Y, 1, H);
        },
        [
          () => pt(r("px-4 py-2 text-sm font-medium rounded-lg transition-colors", l(xe) === "file" ? "bg-blue-100 text-blue-700 border border-blue-300" : "bg-gray-100 text-gray-600 hover:bg-gray-200")),
          () => pt(r("px-4 py-2 text-sm font-medium rounded-lg transition-colors", l(xe) === "editor" ? "bg-blue-100 text-blue-700 border border-blue-300" : "bg-gray-100 text-gray-600 hover:bg-gray-200"))
        ]
      ), X("click", T, () => {
        x(xe, "file"), tt();
      }), X("click", Y, () => {
        x(xe, "editor"), tt();
      }), D(p, A);
    }, Zo = (p) => {
      var A = dc(), S = w(h(A), 4);
      {
        var T = (J) => {
          var _e = oc();
          D(J, _e);
        }, Y = (J) => {
          var _e = fc(), Ce = h(_e), Be = w(h(Ce), 2), He = w(Ce, 2), Je = w(h(He), 2), we = w(He, 2), oe = w(h(we), 2), H = w(we, 2), le = w(h(H), 2), ge = w(le, 2);
          {
            var Te = (re) => {
              var De = ac(), Ke = h(De);
              U(() => zn(Ke, "src", l(Et))), D(re, De);
            };
            K(ge, (re) => {
              l(Et) && re(Te);
            });
          }
          var be = w(H, 2), G = w(h(be), 2), ue = w(G, 2);
          {
            var ke = (re) => {
              var De = lc(), Ke = h(De);
              U(() => zn(Ke, "src", l(Nt))), D(re, De);
            };
            K(ue, (re) => {
              l(Nt) && re(ke);
            });
          }
          var Se = w(be, 2), Ve = h(Se), We = h(Ve), rt = w(Se, 2);
          {
            var je = (re) => {
              var De = uc(), Ke = h(De);
              U(() => j(Ke, l(Rt))), D(re, De);
            };
            K(rt, (re) => {
              l(Rt) && re(je);
            });
          }
          var Fe = w(rt, 2);
          {
            var Ye = (re) => {
              var De = cc(), Ke = h(De);
              U(() => j(Ke, l(wt))), D(re, De);
            };
            K(Fe, (re) => {
              l(wt) && re(Ye);
            });
          }
          var Yt = w(Fe, 2), Ot = h(Yt), $e = h(Ot);
          U(() => {
            Ot.disabled = l(Vt), j($e, l(Vt) ? "Saving…" : "Save Settings");
          }), fr(Be, () => l(kt), (re) => x(kt, re)), fr(Je, () => l(rr), (re) => x(rr, re)), fr(oe, () => l(nr), (re) => x(nr, re)), fr(le, () => l(Et), (re) => x(Et, re)), fr(G, () => l(Nt), (re) => x(Nt, re)), Hl(We, () => l(ir), (re) => x(ir, re)), X("click", Ot, So), D(J, _e);
        };
        K(S, (J) => {
          l(tr) ? J(T) : J(Y, -1);
        });
      }
      D(p, A);
    };
    K(qo, (p) => {
      l(a) === "browse" ? p(Wo) : l(a) === "export" ? p($o, 1) : l(a) === "invitations" ? p(Ko, 2) : l(a) === "import" ? p(Qo, 3) : l(a) === "settings" && p(Zo, 4);
    });
  }
  var zo = w(ss, 2);
  pu(zo, {
    get ctx() {
      return t.ctx;
    },
    get open() {
      return l(_n);
    },
    get title() {
      return l(jn);
    },
    get description() {
      return l(Fn);
    },
    get codeInline() {
      return l(Un);
    },
    get deniedOperation() {
      return l(sr);
    },
    onclose: () => x(_n, !1)
  }), U(() => as.disabled = l(s)), X("click", as, () => {
    Hr(), Jr();
  }), X("click", pi, () => t.ctx.navigate?.("/extensions/package_manager")), D(e, rs), ci();
}
ts(["click", "keydown", "change", "input"]);
function _c(e, t) {
  const r = Cl(gc, { target: e, props: { ctx: t } });
  return {
    unmount() {
      try {
        Ml(r);
      } catch {
      }
    }
  };
}
export {
  _c as default
};
