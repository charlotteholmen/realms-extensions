var Wo = Object.defineProperty;
var us = (e) => {
  throw TypeError(e);
};
var Qo = (e, t, r) => t in e ? Wo(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var Qe = (e, t, r) => Qo(e, typeof t != "symbol" ? t + "" : t, r), pi = (e, t, r) => t.has(e) || us("Cannot " + r);
var v = (e, t, r) => (pi(e, t, "read from private field"), r ? r.call(e) : t.get(e)), q = (e, t, r) => t.has(e) ? us("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), G = (e, t, r, n) => (pi(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r), se = (e, t, r) => (pi(e, t, "access private method"), r);
var Fi = Array.isArray, Zo = Array.prototype.indexOf, Ar = Array.prototype.includes, Xn = Array.from, Xo = Object.defineProperty, vn = Object.getOwnPropertyDescriptor, zo = Object.getOwnPropertyDescriptors, ea = Object.prototype, ta = Array.prototype, Ss = Object.getPrototypeOf, fs = Object.isExtensible;
const ra = () => {
};
function na(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function Ts() {
  var e, t, r = new Promise((n, i) => {
    e = n, t = i;
  });
  return { promise: r, resolve: e, reject: t };
}
function cs(e, t) {
  if (Array.isArray(e))
    return e;
  if (!(Symbol.iterator in e))
    return Array.from(e);
  const r = [];
  for (const n of e)
    if (r.push(n), r.length === t) break;
  return r;
}
const Oe = 2, Qr = 4, zn = 8, Cs = 1 << 24, wt = 16, St = 32, cr = 64, ki = 128, _t = 512, Le = 1024, Ie = 2048, It = 4096, Ge = 8192, At = 16384, Br = 32768, Ei = 1 << 25, Zr = 65536, Yn = 1 << 17, ia = 1 << 18, tn = 1 << 19, sa = 1 << 20, Kt = 1 << 25, Dr = 65536, Gn = 1 << 21, Jr = 1 << 22, ur = 1 << 23, $r = Symbol("$state"), oa = Symbol(""), On = Symbol("attributes"), Ai = Symbol("class"), aa = Symbol("style"), un = Symbol("text"), Pn = Symbol("form reset"), ei = new class extends Error {
  constructor() {
    super(...arguments);
    Qe(this, "name", "StaleReactionError");
    Qe(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
function la() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function ua(e, t, r) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function fa(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function ca() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function da(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function va() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function ha() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function ga() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function pa() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function _a() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
const ba = 1, xa = 2, ma = 16, ya = 1, wa = 2, De = Symbol("uninitialized"), Ms = "http://www.w3.org/1999/xhtml", ka = "http://www.w3.org/2000/svg", Ea = "http://www.w3.org/1998/Math/MathML";
function Aa() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function Sa() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function Ta() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function Ds(e) {
  return e === this.v;
}
function Ca(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Ls(e) {
  return !Ca(e, this.v);
}
let at = null;
function Xr(e) {
  at = e;
}
function Ui(e, t = !1, r) {
  at = {
    p: at,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    r: (
      /** @type {Effect} */
      z
    ),
    l: null
  };
}
function Hi(e) {
  var t = (
    /** @type {ComponentContext} */
    at
  ), r = t.e;
  if (r !== null) {
    t.e = null;
    for (var n of r)
      eo(n);
  }
  return t.i = !0, at = t.p, /** @type {T} */
  {};
}
function Rs() {
  return !0;
}
let pr = [];
function Bs() {
  var e = pr;
  pr = [], na(e);
}
function Sr(e) {
  if (pr.length === 0 && !hn) {
    var t = pr;
    queueMicrotask(() => {
      t === pr && Bs();
    });
  }
  pr.push(e);
}
function Ma() {
  for (; pr.length > 0; )
    Bs();
}
function Ns(e) {
  var t = z;
  if (t === null)
    return X.f |= ur, e;
  if ((t.f & Br) === 0 && (t.f & Qr) === 0)
    throw e;
  ar(e, t);
}
function ar(e, t) {
  for (; t !== null; ) {
    if ((t.f & ki) !== 0) {
      if ((t.f & Br) === 0)
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
const Da = -7169;
function ye(e, t) {
  e.f = e.f & Da | t;
}
function Ji(e) {
  (e.f & _t) !== 0 || e.deps === null ? ye(e, Le) : ye(e, It);
}
function Is(e) {
  if (e !== null)
    for (const t of e)
      (t.f & Oe) === 0 || (t.f & Dr) === 0 || (t.f ^= Dr, Is(
        /** @type {Derived} */
        t.deps
      ));
}
function Os(e, t, r) {
  (e.f & Ie) !== 0 ? t.add(e) : (e.f & It) !== 0 && r.add(e), Is(e.deps), ye(e, Le);
}
let _i = null, Fr = null, K = null, Si = null, kt = null, Ti = null, hn = !1, bi = !1, Hr = null, jn = null;
var ds = 0;
let La = 1;
var Vr, ir, xr, Yr, Gr, mr, qr, Yt, mn, it, yn, sr, Lt, Rt, Kr, yr, fe, Ci, fn, Mi, Ps, js, Fn, Ra, Di, Ur;
const Wn = class Wn {
  constructor() {
    q(this, fe);
    Qe(this, "id", La++);
    /** True as soon as `#process` was called */
    q(this, Vr, !1);
    Qe(this, "linked", !0);
    /** @type {Batch | null} */
    q(this, ir, null);
    /** @type {Batch | null} */
    q(this, xr, null);
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
    q(this, Yr, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    q(this, Gr, /* @__PURE__ */ new Set());
    /**
     * Callbacks that should run only when a fork is committed.
     * @type {Set<(batch: Batch) => void>}
     */
    q(this, mr, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    q(this, qr, 0);
    /**
     * Async effects that are currently in flight, _not_ inside a pending boundary
     * @type {Map<Effect, number>}
     */
    q(this, Yt, /* @__PURE__ */ new Map());
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    q(this, mn, null);
    /**
     * The root effects that need to be flushed
     * @type {Effect[]}
     */
    q(this, it, []);
    /**
     * Effects created while this batch was active.
     * @type {Effect[]}
     */
    q(this, yn, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    q(this, sr, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    q(this, Lt, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    q(this, Rt, /* @__PURE__ */ new Map());
    /**
     * Inverse of #skipped_branches which we need to tell prior batches to unskip them when committing
     * @type {Set<Effect>}
     */
    q(this, Kr, /* @__PURE__ */ new Set());
    Qe(this, "is_fork", !1);
    q(this, yr, !1);
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(t) {
    v(this, Rt).has(t) || v(this, Rt).set(t, { d: [], m: [] }), v(this, Kr).delete(t);
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   * @param {(e: Effect) => void} callback
   */
  unskip_effect(t, r = (n) => this.schedule(n)) {
    var n = v(this, Rt).get(t);
    if (n) {
      v(this, Rt).delete(t);
      for (var i of n.d)
        ye(i, Ie), r(i);
      for (i of n.m)
        ye(i, It), r(i);
    }
    v(this, Kr).add(t);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Value} source
   * @param {any} value
   * @param {boolean} [is_derived]
   */
  capture(t, r, n = !1) {
    t.v !== De && !this.previous.has(t) && this.previous.set(t, t.v), (t.f & ur) === 0 && (this.current.set(t, [r, n]), kt?.set(t, r)), this.is_fork || (t.v = r);
  }
  activate() {
    K = this;
  }
  deactivate() {
    K = null, kt = null;
  }
  flush() {
    try {
      bi = !0, K = this, se(this, fe, fn).call(this);
    } finally {
      ds = 0, Ti = null, Hr = null, jn = null, bi = !1, K = null, kt = null, Tr.clear();
    }
  }
  discard() {
    for (const t of v(this, Gr)) t(this);
    v(this, Gr).clear(), v(this, mr).clear(), se(this, fe, Ur).call(this);
  }
  /**
   * @param {Effect} effect
   */
  register_created_effect(t) {
    v(this, yn).push(t);
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  increment(t, r) {
    if (G(this, qr, v(this, qr) + 1), t) {
      let n = v(this, Yt).get(r) ?? 0;
      v(this, Yt).set(r, n + 1);
    }
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  decrement(t, r) {
    if (G(this, qr, v(this, qr) - 1), t) {
      let n = v(this, Yt).get(r) ?? 0;
      n === 1 ? v(this, Yt).delete(r) : v(this, Yt).set(r, n - 1);
    }
    v(this, yr) || (G(this, yr, !0), Sr(() => {
      G(this, yr, !1), this.linked && this.flush();
    }));
  }
  /**
   * @param {Set<Effect>} dirty_effects
   * @param {Set<Effect>} maybe_dirty_effects
   */
  transfer_effects(t, r) {
    for (const n of t)
      v(this, sr).add(n);
    for (const n of r)
      v(this, Lt).add(n);
    t.clear(), r.clear();
  }
  /** @param {(batch: Batch) => void} fn */
  oncommit(t) {
    v(this, Yr).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    v(this, Gr).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  on_fork_commit(t) {
    v(this, mr).add(t);
  }
  run_fork_commit_callbacks() {
    for (const t of v(this, mr)) t(this);
    v(this, mr).clear();
  }
  settled() {
    return (v(this, mn) ?? G(this, mn, Ts())).promise;
  }
  static ensure() {
    var t;
    if (K === null) {
      const r = K = new Wn();
      se(t = r, fe, Di).call(t), !bi && !hn && Sr(() => {
        v(r, Vr) || r.flush();
      });
    }
    return K;
  }
  apply() {
    {
      kt = null;
      return;
    }
  }
  /**
   *
   * @param {Effect} effect
   */
  schedule(t) {
    if (Ti = t, t.b?.is_pending && (t.f & (Qr | zn | Cs)) !== 0 && (t.f & Br) === 0) {
      t.b.defer_effect(t);
      return;
    }
    for (var r = t; r.parent !== null; ) {
      r = r.parent;
      var n = r.f;
      if (Hr !== null && r === z && (X === null || (X.f & Oe) === 0))
        return;
      if ((n & (cr | St)) !== 0) {
        if ((n & Le) === 0)
          return;
        r.f ^= Le;
      }
    }
    v(this, it).push(r);
  }
};
Vr = new WeakMap(), ir = new WeakMap(), xr = new WeakMap(), Yr = new WeakMap(), Gr = new WeakMap(), mr = new WeakMap(), qr = new WeakMap(), Yt = new WeakMap(), mn = new WeakMap(), it = new WeakMap(), yn = new WeakMap(), sr = new WeakMap(), Lt = new WeakMap(), Rt = new WeakMap(), Kr = new WeakMap(), yr = new WeakMap(), fe = new WeakSet(), Ci = function() {
  if (this.is_fork) return !0;
  for (const n of v(this, Yt).keys()) {
    for (var t = n, r = !1; t.parent !== null; ) {
      if (v(this, Rt).has(t)) {
        r = !0;
        break;
      }
      t = t.parent;
    }
    if (!r)
      return !0;
  }
  return !1;
}, fn = function() {
  var l, f, p;
  if (G(this, Vr, !0), ds++ > 1e3 && (se(this, fe, Ur).call(this), Na()), !se(this, fe, Ci).call(this)) {
    for (const c of v(this, sr))
      v(this, Lt).delete(c), ye(c, Ie), this.schedule(c);
    for (const c of v(this, Lt))
      ye(c, It), this.schedule(c);
  }
  const t = v(this, it);
  G(this, it, []), this.apply();
  var r = Hr = [], n = [], i = jn = [];
  for (const c of t)
    try {
      se(this, fe, Mi).call(this, c, r, n);
    } catch (d) {
      throw Hs(c), d;
    }
  if (K = null, i.length > 0) {
    var a = Wn.ensure();
    for (const c of i)
      a.schedule(c);
  }
  if (Hr = null, jn = null, se(this, fe, Ci).call(this)) {
    se(this, fe, Fn).call(this, n), se(this, fe, Fn).call(this, r);
    for (const [c, d] of v(this, Rt))
      Us(c, d);
    i.length > 0 && /** @type {unknown} */
    se(l = K, fe, fn).call(l);
    return;
  }
  const o = se(this, fe, Ps).call(this);
  if (o) {
    se(f = o, fe, js).call(f, this);
    return;
  }
  v(this, sr).clear(), v(this, Lt).clear();
  for (const c of v(this, Yr)) c(this);
  v(this, Yr).clear(), Si = this, vs(n), vs(r), Si = null, v(this, mn)?.resolve();
  var s = (
    /** @type {Batch | null} */
    /** @type {unknown} */
    K
  );
  if (this.linked && v(this, qr) === 0 && se(this, fe, Ur).call(this), v(this, it).length > 0) {
    s === null && (s = this, se(this, fe, Di).call(this));
    const c = s;
    v(c, it).push(...v(this, it).filter((d) => !v(c, it).includes(d)));
  }
  s !== null && se(p = s, fe, fn).call(p);
}, /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
Mi = function(t, r, n) {
  t.f ^= Le;
  for (var i = t.first; i !== null; ) {
    var a = i.f, o = (a & (St | cr)) !== 0, s = o && (a & Le) !== 0, l = s || (a & Ge) !== 0 || v(this, Rt).has(i);
    if (!l && i.fn !== null) {
      o ? i.f ^= Le : (a & Qr) !== 0 ? r.push(i) : Tn(i) && ((a & wt) !== 0 && v(this, Lt).add(i), en(i));
      var f = i.first;
      if (f !== null) {
        i = f;
        continue;
      }
    }
    for (; i !== null; ) {
      var p = i.next;
      if (p !== null) {
        i = p;
        break;
      }
      i = i.parent;
    }
  }
}, Ps = function() {
  for (var t = v(this, ir); t !== null; ) {
    if (!t.is_fork) {
      for (const [r, [, n]] of this.current)
        if (t.current.has(r) && !n)
          return t;
    }
    t = v(t, ir);
  }
  return null;
}, /**
 * @param {Batch} batch
 */
js = function(t) {
  var n;
  for (const [i, a] of t.current)
    !this.previous.has(i) && t.previous.has(i) && this.previous.set(i, t.previous.get(i)), this.current.set(i, a);
  for (const [i, a] of t.async_deriveds) {
    const o = this.async_deriveds.get(i);
    o && a.promise.then(o.resolve);
  }
  const r = (i) => {
    var a = i.reactions;
    if (a !== null)
      for (const l of a) {
        var o = l.f;
        if ((o & Oe) !== 0)
          r(
            /** @type {Derived} */
            l
          );
        else {
          var s = (
            /** @type {Effect} */
            l
          );
          o & (Jr | wt) && !this.async_deriveds.has(s) && (v(this, Lt).delete(s), ye(s, Ie), this.schedule(s));
        }
      }
  };
  for (const i of this.current.keys())
    r(i);
  this.oncommit(() => t.discard()), se(n = t, fe, Ur).call(n), K = this, se(this, fe, fn).call(this);
}, /**
 * @param {Effect[]} effects
 */
Fn = function(t) {
  for (var r = 0; r < t.length; r += 1)
    Os(t[r], v(this, sr), v(this, Lt));
}, Ra = function() {
  var p;
  se(this, fe, Ur).call(this);
  for (let c = _i; c !== null; c = v(c, xr)) {
    var t = c.id < this.id, r = [];
    for (const [d, [S, y]] of this.current) {
      if (c.current.has(d)) {
        var n = (
          /** @type {[any, boolean]} */
          c.current.get(d)[0]
        );
        if (t && S !== n)
          c.current.set(d, [S, y]);
        else
          continue;
      }
      r.push(d);
    }
    if (t)
      for (const [d, S] of this.async_deriveds) {
        const y = c.async_deriveds.get(d);
        y && S.promise.then(y.resolve);
      }
    if (v(c, Vr)) {
      var i = [...c.current.keys()].filter((d) => !this.current.has(d));
      if (i.length === 0)
        t && c.discard();
      else if (r.length > 0) {
        if (t)
          for (const d of v(this, Kr))
            c.unskip_effect(d, (S) => {
              var y;
              (S.f & (wt | Jr)) !== 0 ? c.schedule(S) : se(y = c, fe, Fn).call(y, [S]);
            });
        c.activate();
        var a = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Map();
        for (var s of r)
          Fs(s, i, a, o);
        o = /* @__PURE__ */ new Map();
        var l = [...c.current.keys()].filter(
          (d) => this.current.has(d) ? (
            /** @type {[any, boolean]} */
            this.current.get(d)[0] !== d.v
          ) : !0
        );
        if (l.length > 0)
          for (const d of v(this, yn))
            (d.f & (At | Ge | Yn)) === 0 && $i(d, l, o) && ((d.f & (Jr | wt)) !== 0 ? (ye(d, Ie), c.schedule(d)) : v(c, sr).add(d));
        if (v(c, it).length > 0 && !v(c, yr)) {
          c.apply();
          for (var f of v(c, it))
            se(p = c, fe, Mi).call(p, f, [], []);
          G(c, it, []);
        }
        c.deactivate();
      }
    }
  }
}, Di = function() {
  Fr === null ? _i = Fr = this : (G(Fr, xr, this), G(this, ir, Fr)), Fr = this;
}, Ur = function() {
  var t = v(this, ir), r = v(this, xr);
  t === null ? _i = r : G(t, xr, r), r === null ? Fr = t : G(r, ir, t), this.linked = !1;
};
let Lr = Wn;
function Ba(e) {
  var t = hn;
  hn = !0;
  try {
    for (var r; ; ) {
      if (Ma(), K === null)
        return (
          /** @type {T} */
          r
        );
      K.flush();
    }
  } finally {
    hn = t;
  }
}
function Na() {
  try {
    va();
  } catch (e) {
    ar(e, Ti);
  }
}
let $t = null;
function vs(e) {
  var t = e.length;
  if (t !== 0) {
    for (var r = 0; r < t; ) {
      var n = e[r++];
      if ((n.f & (At | Ge)) === 0 && Tn(n) && ($t = /* @__PURE__ */ new Set(), en(n), n.deps === null && n.first === null && n.nodes === null && n.teardown === null && n.ac === null && io(n), $t?.size > 0)) {
        Tr.clear();
        for (const i of $t) {
          if ((i.f & (At | Ge)) !== 0) continue;
          const a = [i];
          let o = i.parent;
          for (; o !== null; )
            $t.has(o) && ($t.delete(o), a.push(o)), o = o.parent;
          for (let s = a.length - 1; s >= 0; s--) {
            const l = a[s];
            (l.f & (At | Ge)) === 0 && en(l);
          }
        }
        $t.clear();
      }
    }
    $t = null;
  }
}
function Fs(e, t, r, n) {
  if (!r.has(e) && (r.add(e), e.reactions !== null))
    for (const i of e.reactions) {
      const a = i.f;
      (a & Oe) !== 0 ? Fs(
        /** @type {Derived} */
        i,
        t,
        r,
        n
      ) : (a & (Jr | wt)) !== 0 && (a & Ie) === 0 && $i(i, t, n) && (ye(i, Ie), Vi(
        /** @type {Effect} */
        i
      ));
    }
}
function $i(e, t, r) {
  const n = r.get(e);
  if (n !== void 0) return n;
  if (e.deps !== null)
    for (const i of e.deps) {
      if (Ar.call(t, i))
        return !0;
      if ((i.f & Oe) !== 0 && $i(
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
function Vi(e) {
  K.schedule(e);
}
function Us(e, t) {
  if (!((e.f & St) !== 0 && (e.f & Le) !== 0)) {
    (e.f & Ie) !== 0 ? t.d.push(e) : (e.f & It) !== 0 && t.m.push(e), ye(e, Le);
    for (var r = e.first; r !== null; )
      Us(r, t), r = r.next;
  }
}
function Hs(e) {
  ye(e, Le);
  for (var t = e.first; t !== null; )
    Hs(t), t = t.next;
}
function Ia(e) {
  let t = 0, r = Rr(0), n;
  return () => {
    Ki() && (u(r), ri(() => (t === 0 && (n = ni(() => e(() => gn(r)))), t += 1, () => {
      Sr(() => {
        t -= 1, t === 0 && (n?.(), n = void 0, gn(r));
      });
    })));
  };
}
var Oa = Zr | tn;
function Pa(e, t, r, n) {
  new ja(e, t, r, n);
}
var ct, ji, dt, wr, Ze, vt, Ye, st, Gt, kr, or, Wr, wn, kn, qt, Qn, we, Fa, Ua, Ha, Li, Un, Hn, Ri, Bi;
class ja {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(t, r, n, i) {
    q(this, we);
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
    q(this, ct);
    /** @type {TemplateNode | null} */
    q(this, ji, null);
    /** @type {BoundaryProps} */
    q(this, dt);
    /** @type {((anchor: Node) => void)} */
    q(this, wr);
    /** @type {Effect} */
    q(this, Ze);
    /** @type {Effect | null} */
    q(this, vt, null);
    /** @type {Effect | null} */
    q(this, Ye, null);
    /** @type {Effect | null} */
    q(this, st, null);
    /** @type {DocumentFragment | null} */
    q(this, Gt, null);
    q(this, kr, 0);
    q(this, or, 0);
    q(this, Wr, !1);
    /** @type {Set<Effect>} */
    q(this, wn, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    q(this, kn, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    q(this, qt, null);
    q(this, Qn, Ia(() => (G(this, qt, Rr(v(this, kr))), () => {
      G(this, qt, null);
    })));
    G(this, ct, t), G(this, dt, r), G(this, wr, (a) => {
      var o = (
        /** @type {Effect} */
        z
      );
      o.b = this, o.f |= ki, n(a);
    }), this.parent = /** @type {Effect} */
    z.b, this.transform_error = i ?? this.parent?.transform_error ?? ((a) => a), G(this, Ze, Qi(() => {
      se(this, we, Li).call(this);
    }, Oa));
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    Os(t, v(this, wn), v(this, kn));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!v(this, dt).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  update_pending_count(t, r) {
    se(this, we, Ri).call(this, t, r), G(this, kr, v(this, kr) + t), !(!v(this, qt) || v(this, Wr)) && (G(this, Wr, !0), Sr(() => {
      G(this, Wr, !1), v(this, qt) && zr(v(this, qt), v(this, kr));
    }));
  }
  get_effect_pending() {
    return v(this, Qn).call(this), u(
      /** @type {Source<number>} */
      v(this, qt)
    );
  }
  /** @param {unknown} error */
  error(t) {
    if (!v(this, dt).onerror && !v(this, dt).failed)
      throw t;
    K?.is_fork ? (v(this, vt) && K.skip_effect(v(this, vt)), v(this, Ye) && K.skip_effect(v(this, Ye)), v(this, st) && K.skip_effect(v(this, st)), K.on_fork_commit(() => {
      se(this, we, Bi).call(this, t);
    })) : se(this, we, Bi).call(this, t);
  }
}
ct = new WeakMap(), ji = new WeakMap(), dt = new WeakMap(), wr = new WeakMap(), Ze = new WeakMap(), vt = new WeakMap(), Ye = new WeakMap(), st = new WeakMap(), Gt = new WeakMap(), kr = new WeakMap(), or = new WeakMap(), Wr = new WeakMap(), wn = new WeakMap(), kn = new WeakMap(), qt = new WeakMap(), Qn = new WeakMap(), we = new WeakSet(), Fa = function() {
  try {
    G(this, vt, pt(() => v(this, wr).call(this, v(this, ct))));
  } catch (t) {
    this.error(t);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
Ua = function(t) {
  const r = v(this, dt).failed;
  r && G(this, st, pt(() => {
    r(
      v(this, ct),
      () => t,
      () => () => {
      }
    );
  }));
}, Ha = function() {
  const t = v(this, dt).pending;
  t && (this.is_pending = !0, G(this, Ye, pt(() => t(v(this, ct)))), Sr(() => {
    var r = G(this, Gt, document.createDocumentFragment()), n = fr();
    r.append(n), G(this, vt, se(this, we, Hn).call(this, () => pt(() => v(this, wr).call(this, n)))), v(this, or) === 0 && (v(this, ct).before(r), G(this, Gt, null), Cr(
      /** @type {Effect} */
      v(this, Ye),
      () => {
        G(this, Ye, null);
      }
    ), se(this, we, Un).call(
      this,
      /** @type {Batch} */
      K
    ));
  }));
}, Li = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), G(this, or, 0), G(this, kr, 0), G(this, vt, pt(() => {
      v(this, wr).call(this, v(this, ct));
    })), v(this, or) > 0) {
      var t = G(this, Gt, document.createDocumentFragment());
      zi(v(this, vt), t);
      const r = (
        /** @type {(anchor: Node) => void} */
        v(this, dt).pending
      );
      G(this, Ye, pt(() => r(v(this, ct))));
    } else
      se(this, we, Un).call(
        this,
        /** @type {Batch} */
        K
      );
  } catch (r) {
    this.error(r);
  }
}, /**
 * @param {Batch} batch
 */
Un = function(t) {
  this.is_pending = !1, t.transfer_effects(v(this, wn), v(this, kn));
}, /**
 * @template T
 * @param {() => T} fn
 */
Hn = function(t) {
  var r = z, n = X, i = at;
  Ot(v(this, Ze)), xt(v(this, Ze)), Xr(v(this, Ze).ctx);
  try {
    return Lr.ensure(), t();
  } catch (a) {
    return Ns(a), null;
  } finally {
    Ot(r), xt(n), Xr(i);
  }
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 * @param {Batch} batch
 */
Ri = function(t, r) {
  var n;
  if (!this.has_pending_snippet()) {
    this.parent && se(n = this.parent, we, Ri).call(n, t, r);
    return;
  }
  G(this, or, v(this, or) + t), v(this, or) === 0 && (se(this, we, Un).call(this, r), v(this, Ye) && Cr(v(this, Ye), () => {
    G(this, Ye, null);
  }), v(this, Gt) && (v(this, ct).before(v(this, Gt)), G(this, Gt, null)));
}, /**
 * @param {unknown} error
 */
Bi = function(t) {
  v(this, vt) && (ze(v(this, vt)), G(this, vt, null)), v(this, Ye) && (ze(v(this, Ye)), G(this, Ye, null)), v(this, st) && (ze(v(this, st)), G(this, st, null));
  var r = v(this, dt).onerror;
  let n = v(this, dt).failed;
  var i = !1, a = !1;
  const o = () => {
    if (i) {
      Ta();
      return;
    }
    i = !0, a && _a(), v(this, st) !== null && Cr(v(this, st), () => {
      G(this, st, null);
    }), se(this, we, Hn).call(this, () => {
      se(this, we, Li).call(this);
    });
  }, s = (l) => {
    try {
      a = !0, r?.(l, o), a = !1;
    } catch (f) {
      ar(f, v(this, Ze) && v(this, Ze).parent);
    }
    n && G(this, st, se(this, we, Hn).call(this, () => {
      try {
        return pt(() => {
          var f = (
            /** @type {Effect} */
            z
          );
          f.b = this, f.f |= ki, n(
            v(this, ct),
            () => l,
            () => o
          );
        });
      } catch (f) {
        return ar(
          f,
          /** @type {Effect} */
          v(this, Ze).parent
        ), null;
      }
    }));
  };
  Sr(() => {
    var l;
    try {
      l = this.transform_error(t);
    } catch (f) {
      ar(f, v(this, Ze) && v(this, Ze).parent);
      return;
    }
    l !== null && typeof l == "object" && typeof /** @type {any} */
    l.then == "function" ? l.then(
      s,
      /** @param {unknown} e */
      (f) => ar(f, v(this, Ze) && v(this, Ze).parent)
    ) : s(l);
  });
};
function Ja(e, t, r, n) {
  const i = Yi;
  var a = e.filter((d) => !d.settled);
  if (r.length === 0 && a.length === 0) {
    n(t.map(i));
    return;
  }
  var o = (
    /** @type {Effect} */
    z
  ), s = $a(), l = a.length === 1 ? a[0].promise : a.length > 1 ? Promise.all(a.map((d) => d.promise)) : null;
  function f(d) {
    if ((o.f & At) === 0) {
      s();
      try {
        n(d);
      } catch (S) {
        ar(S, o);
      }
      qn();
    }
  }
  var p = Js();
  if (r.length === 0) {
    l.then(() => f(t.map(i))).finally(p);
    return;
  }
  function c() {
    Promise.all(r.map((d) => /* @__PURE__ */ Va(d))).then((d) => f([...t.map(i), ...d])).catch((d) => ar(d, o)).finally(p);
  }
  l ? l.then(() => {
    s(), c(), qn();
  }) : c();
}
function $a() {
  var e = (
    /** @type {Effect} */
    z
  ), t = X, r = at, n = (
    /** @type {Batch} */
    K
  );
  return function(a = !0) {
    Ot(e), xt(t), Xr(r), a && (e.f & At) === 0 && (n?.activate(), n?.apply());
  };
}
function qn(e = !0) {
  Ot(null), xt(null), Xr(null), e && K?.deactivate();
}
function Js() {
  var e = (
    /** @type {Effect} */
    z
  ), t = (
    /** @type {Boundary} */
    e.b
  ), r = (
    /** @type {Batch} */
    K
  ), n = t.is_rendered();
  return t.update_pending_count(1, r), r.increment(n, e), () => {
    t.update_pending_count(-1, r), r.decrement(n, e);
  };
}
// @__NO_SIDE_EFFECTS__
function Yi(e) {
  var t = Oe | Ie;
  return z !== null && (z.f |= tn), {
    ctx: at,
    deps: null,
    effects: null,
    equals: Ds,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      De
    ),
    wv: 0,
    parent: z,
    ac: null
  };
}
const Nn = Symbol("obsolete");
// @__NO_SIDE_EFFECTS__
function Va(e, t, r) {
  let n = (
    /** @type {Effect | null} */
    z
  );
  n === null && la();
  var i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), a = Rr(
    /** @type {V} */
    De
  ), o = !X, s = /* @__PURE__ */ new Set();
  return nl(() => {
    var l = (
      /** @type {Effect} */
      z
    ), f = Ts();
    i = f.promise;
    try {
      Promise.resolve(e()).then(f.resolve, (S) => {
        S !== ei && f.reject(S);
      }).finally(qn);
    } catch (S) {
      f.reject(S), qn();
    }
    var p = (
      /** @type {Batch} */
      K
    );
    if (o) {
      if ((l.f & Br) !== 0)
        var c = Js();
      if (
        /** @type {Boundary} */
        n.b.is_rendered()
      )
        p.async_deriveds.get(l)?.reject(Nn);
      else
        for (const S of s.values())
          S.reject(Nn);
      s.add(f), p.async_deriveds.set(l, f);
    }
    const d = (S, y = void 0) => {
      c?.(), s.delete(f), y !== Nn && (p.activate(), y ? (a.f |= ur, zr(a, y)) : ((a.f & ur) !== 0 && (a.f ^= ur), zr(a, S)), p.deactivate());
    };
    f.promise.then(d, (S) => d(null, S || "unknown"));
  }), Wi(() => {
    for (const l of s)
      l.reject(Nn);
  }), new Promise((l) => {
    function f(p) {
      function c() {
        p === i ? l(a) : f(i);
      }
      p.then(c, c);
    }
    f(i);
  });
}
// @__NO_SIDE_EFFECTS__
function Jn(e) {
  const t = /* @__PURE__ */ Yi(e);
  return ao(t), t;
}
// @__NO_SIDE_EFFECTS__
function Ya(e) {
  const t = /* @__PURE__ */ Yi(e);
  return t.equals = Ls, t;
}
function Ga(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var r = 0; r < t.length; r += 1)
      ze(
        /** @type {Effect} */
        t[r]
      );
  }
}
function Gi(e) {
  var t, r = z, n = e.parent;
  if (!dr && n !== null && e.v !== De && // if it was never evaluated before, it's guaranteed to fail downstream, so we try to execute instead
  (n.f & (At | Ge)) !== 0)
    return Aa(), e.v;
  Ot(n);
  try {
    e.f &= ~Dr, Ga(e), t = co(e);
  } finally {
    Ot(r);
  }
  return t;
}
function $s(e) {
  var t = Gi(e);
  if (!e.equals(t) && (e.wv = uo(), (!K?.is_fork || e.deps === null) && (K !== null ? (K.capture(e, t, !0), Si?.capture(e, t, !0)) : e.v = t, e.deps === null))) {
    ye(e, Le);
    return;
  }
  dr || (kt !== null ? (Ki() || K?.is_fork) && kt.set(e, t) : Ji(e));
}
function qa(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      (t.teardown || t.ac) && (t.teardown?.(), t.ac?.abort(ei), t.fn !== null && (t.teardown = ra), t.ac = null, _n(t, 0), Zi(t));
}
function Vs(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      t.teardown && t.fn !== null && en(t);
}
let Kn = /* @__PURE__ */ new Set();
const Tr = /* @__PURE__ */ new Map();
let Ys = !1;
function Rr(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Ds,
    rv: 0,
    wv: 0
  };
  return r;
}
// @__NO_SIDE_EFFECTS__
function B(e, t) {
  const r = Rr(e);
  return ao(r), r;
}
// @__NO_SIDE_EFFECTS__
function Ka(e, t = !1, r = !0) {
  const n = Rr(e);
  return t || (n.equals = Ls), n;
}
function m(e, t, r = !1) {
  X !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Et || (X.f & Yn) !== 0) && Rs() && (X.f & (Oe | wt | Jr | Yn)) !== 0 && (bt === null || !Ar.call(bt, e)) && pa();
  let n = r ? Nt(t) : t;
  return zr(e, n, jn);
}
function zr(e, t, r = null) {
  if (!e.equals(t)) {
    Tr.set(e, dr ? t : e.v);
    var n = Lr.ensure();
    if (n.capture(e, t), (e.f & Oe) !== 0) {
      const i = (
        /** @type {Derived} */
        e
      );
      (e.f & Ie) !== 0 && Gi(i), kt === null && Ji(i);
    }
    e.wv = uo(), qs(e, Ie, r), z !== null && (z.f & Le) !== 0 && (z.f & (St | cr)) === 0 && (ft === null ? sl([e]) : ft.push(e)), !n.is_fork && Kn.size > 0 && !Ys && Wa();
  }
  return t;
}
function Wa() {
  Ys = !1;
  for (const e of Kn) {
    (e.f & Le) !== 0 && ye(e, It);
    let t;
    try {
      t = Tn(e);
    } catch {
      t = !0;
    }
    t && en(e);
  }
  Kn.clear();
}
function Gs(e, t = 1) {
  var r = u(e);
  return m(e, t === 1 ? ++r : --r);
}
function gn(e) {
  m(e, e.v + 1);
}
function qs(e, t, r) {
  var n = e.reactions;
  if (n !== null)
    for (var i = n.length, a = 0; a < i; a++) {
      var o = n[a], s = o.f, l = (s & Ie) === 0;
      if (l && ye(o, t), (s & Yn) !== 0)
        Kn.add(
          /** @type {Effect} */
          o
        );
      else if ((s & Oe) !== 0) {
        var f = (
          /** @type {Derived} */
          o
        );
        kt?.delete(f), (s & Dr) === 0 && (s & _t && (z === null || (z.f & Gn) === 0) && (o.f |= Dr), qs(f, It, r));
      } else if (l) {
        var p = (
          /** @type {Effect} */
          o
        );
        (s & wt) !== 0 && $t !== null && $t.add(p), r !== null ? r.push(p) : Vi(p);
      }
    }
}
function Nt(e) {
  if (typeof e != "object" || e === null || $r in e)
    return e;
  const t = Ss(e);
  if (t !== ea && t !== ta)
    return e;
  var r = /* @__PURE__ */ new Map(), n = Fi(e), i = /* @__PURE__ */ B(0), a = Mr, o = (s) => {
    if (Mr === a)
      return s();
    var l = X, f = Mr;
    xt(null), bs(a);
    var p = s();
    return xt(l), bs(f), p;
  };
  return n && r.set("length", /* @__PURE__ */ B(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(s, l, f) {
        (!("value" in f) || f.configurable === !1 || f.enumerable === !1 || f.writable === !1) && ha();
        var p = r.get(l);
        return p === void 0 ? o(() => {
          var c = /* @__PURE__ */ B(f.value);
          return r.set(l, c), c;
        }) : m(p, f.value, !0), !0;
      },
      deleteProperty(s, l) {
        var f = r.get(l);
        if (f === void 0) {
          if (l in s) {
            const p = o(() => /* @__PURE__ */ B(De));
            r.set(l, p), gn(i);
          }
        } else
          m(f, De), gn(i);
        return !0;
      },
      get(s, l, f) {
        if (l === $r)
          return e;
        var p = r.get(l), c = l in s;
        if (p === void 0 && (!c || vn(s, l)?.writable) && (p = o(() => {
          var S = Nt(c ? s[l] : De), y = /* @__PURE__ */ B(S);
          return y;
        }), r.set(l, p)), p !== void 0) {
          var d = u(p);
          return d === De ? void 0 : d;
        }
        return Reflect.get(s, l, f);
      },
      getOwnPropertyDescriptor(s, l) {
        var f = Reflect.getOwnPropertyDescriptor(s, l);
        if (f && "value" in f) {
          var p = r.get(l);
          p && (f.value = u(p));
        } else if (f === void 0) {
          var c = r.get(l), d = c?.v;
          if (c !== void 0 && d !== De)
            return {
              enumerable: !0,
              configurable: !0,
              value: d,
              writable: !0
            };
        }
        return f;
      },
      has(s, l) {
        if (l === $r)
          return !0;
        var f = r.get(l), p = f !== void 0 && f.v !== De || Reflect.has(s, l);
        if (f !== void 0 || z !== null && (!p || vn(s, l)?.writable)) {
          f === void 0 && (f = o(() => {
            var d = p ? Nt(s[l]) : De, S = /* @__PURE__ */ B(d);
            return S;
          }), r.set(l, f));
          var c = u(f);
          if (c === De)
            return !1;
        }
        return p;
      },
      set(s, l, f, p) {
        var c = r.get(l), d = l in s;
        if (n && l === "length")
          for (var S = f; S < /** @type {Source<number>} */
          c.v; S += 1) {
            var y = r.get(S + "");
            y !== void 0 ? m(y, De) : S in s && (y = o(() => /* @__PURE__ */ B(De)), r.set(S + "", y));
          }
        if (c === void 0)
          (!d || vn(s, l)?.writable) && (c = o(() => /* @__PURE__ */ B(void 0)), m(c, Nt(f)), r.set(l, c));
        else {
          d = c.v !== De;
          var I = o(() => Nt(f));
          m(c, I);
        }
        var j = Reflect.getOwnPropertyDescriptor(s, l);
        if (j?.set && j.set.call(p, f), !d) {
          if (n && typeof l == "string") {
            var W = (
              /** @type {Source<number>} */
              r.get("length")
            ), H = Number(l);
            Number.isInteger(H) && H >= W.v && m(W, H + 1);
          }
          gn(i);
        }
        return !0;
      },
      ownKeys(s) {
        u(i);
        var l = Reflect.ownKeys(s).filter((c) => {
          var d = r.get(c);
          return d === void 0 || d.v !== De;
        });
        for (var [f, p] of r)
          p.v !== De && !(f in s) && l.push(f);
        return l;
      },
      setPrototypeOf() {
        ga();
      }
    }
  );
}
function hs(e) {
  try {
    if (e !== null && typeof e == "object" && $r in e)
      return e[$r];
  } catch {
  }
  return e;
}
function Qa(e, t) {
  return Object.is(hs(e), hs(t));
}
var gs, Ks, Ws, Qs;
function Za() {
  if (gs === void 0) {
    gs = window, Ks = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, r = Text.prototype;
    Ws = vn(t, "firstChild").get, Qs = vn(t, "nextSibling").get, fs(e) && (e[Ai] = void 0, e[On] = null, e[aa] = void 0, e.__e = void 0), fs(r) && (r[un] = void 0);
  }
}
function fr(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function lr(e) {
  return (
    /** @type {TemplateNode | null} */
    Ws.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function Sn(e) {
  return (
    /** @type {TemplateNode | null} */
    Qs.call(e)
  );
}
function _(e, t) {
  return /* @__PURE__ */ lr(e);
}
function ut(e, t = !1) {
  {
    var r = /* @__PURE__ */ lr(e);
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ Sn(r) : r;
  }
}
function E(e, t = 1, r = !1) {
  let n = e;
  for (; t--; )
    n = /** @type {TemplateNode} */
    /* @__PURE__ */ Sn(n);
  return n;
}
function Xa(e) {
  e.textContent = "";
}
function Zs() {
  return !1;
}
function Xs(e, t, r) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElementNS(t ?? Ms, e, void 0)
  );
}
let ps = !1;
function za() {
  ps || (ps = !0, document.addEventListener(
    "reset",
    (e) => {
      Promise.resolve().then(() => {
        if (!e.defaultPrevented)
          for (
            const t of
            /**@type {HTMLFormElement} */
            e.target.elements
          )
            t[Pn]?.();
      });
    },
    // In the capture phase to guarantee we get noticed of it (no possibility of stopPropagation)
    { capture: !0 }
  ));
}
function ti(e) {
  var t = X, r = z;
  xt(null), Ot(null);
  try {
    return e();
  } finally {
    xt(t), Ot(r);
  }
}
function qi(e, t, r, n = r) {
  e.addEventListener(t, () => ti(r));
  const i = (
    /** @type {any} */
    e[Pn]
  );
  i ? e[Pn] = () => {
    i(), n(!0);
  } : e[Pn] = () => n(!0), za();
}
function el(e) {
  z === null && (X === null && da(), ca()), dr && fa();
}
function tl(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function Wt(e, t) {
  var r = z;
  r !== null && (r.f & Ge) !== 0 && (e |= Ge);
  var n = {
    ctx: at,
    deps: null,
    nodes: null,
    f: e | Ie | _t,
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
  K?.register_created_effect(n);
  var i = n;
  if ((e & Qr) !== 0)
    Hr !== null ? Hr.push(n) : Lr.ensure().schedule(n);
  else if (t !== null) {
    try {
      en(n);
    } catch (o) {
      throw ze(n), o;
    }
    i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && // either `null`, or a singular child
    (i.f & tn) === 0 && (i = i.first, (e & wt) !== 0 && (e & Zr) !== 0 && i !== null && (i.f |= Zr));
  }
  if (i !== null && (i.parent = r, r !== null && tl(i, r), X !== null && (X.f & Oe) !== 0 && (e & cr) === 0)) {
    var a = (
      /** @type {Derived} */
      X
    );
    (a.effects ?? (a.effects = [])).push(i);
  }
  return n;
}
function Ki() {
  return X !== null && !Et;
}
function Wi(e) {
  const t = Wt(zn, null);
  return ye(t, Le), t.teardown = e, t;
}
function zs(e) {
  el();
  var t = (
    /** @type {Effect} */
    z.f
  ), r = !X && (t & St) !== 0 && (t & Br) === 0;
  if (r) {
    var n = (
      /** @type {ComponentContext} */
      at
    );
    (n.e ?? (n.e = [])).push(e);
  } else
    return eo(e);
}
function eo(e) {
  return Wt(Qr | sa, e);
}
function rl(e) {
  Lr.ensure();
  const t = Wt(cr | tn, e);
  return (r = {}) => new Promise((n) => {
    r.outro ? Cr(t, () => {
      ze(t), n(void 0);
    }) : (ze(t), n(void 0));
  });
}
function to(e) {
  return Wt(Qr, e);
}
function nl(e) {
  return Wt(Jr | tn, e);
}
function ri(e, t = 0) {
  return Wt(zn | t, e);
}
function $(e, t = [], r = [], n = []) {
  Ja(n, t, r, (i) => {
    Wt(zn, () => e(...i.map(u)));
  });
}
function Qi(e, t = 0) {
  var r = Wt(wt | t, e);
  return r;
}
function pt(e) {
  return Wt(St | tn, e);
}
function ro(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = dr, n = X;
    _s(!0), xt(null);
    try {
      t.call(null);
    } finally {
      _s(r), xt(n);
    }
  }
}
function Zi(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    const i = r.ac;
    i !== null && ti(() => {
      i.abort(ei);
    });
    var n = r.next;
    (r.f & cr) !== 0 ? r.parent = null : ze(r, t), r = n;
  }
}
function il(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & St) === 0 && ze(t), t = r;
  }
}
function ze(e, t = !0) {
  var r = !1;
  (t || (e.f & ia) !== 0) && e.nodes !== null && e.nodes.end !== null && (no(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), r = !0), ye(e, Ei), Zi(e, t && !r), _n(e, 0);
  var n = e.nodes && e.nodes.t;
  if (n !== null)
    for (const a of n)
      a.stop();
  ro(e), e.f ^= Ei, e.f |= At;
  var i = e.parent;
  i !== null && i.first !== null && io(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function no(e, t) {
  for (; e !== null; ) {
    var r = e === t ? null : /* @__PURE__ */ Sn(e);
    e.remove(), e = r;
  }
}
function io(e) {
  var t = e.parent, r = e.prev, n = e.next;
  r !== null && (r.next = n), n !== null && (n.prev = r), t !== null && (t.first === e && (t.first = n), t.last === e && (t.last = r));
}
function Cr(e, t, r = !0) {
  var n = [];
  so(e, n, !0);
  var i = () => {
    r && ze(e), t && t();
  }, a = n.length;
  if (a > 0) {
    var o = () => --a || i();
    for (var s of n)
      s.out(o);
  } else
    i();
}
function so(e, t, r) {
  if ((e.f & Ge) === 0) {
    e.f ^= Ge;
    var n = e.nodes && e.nodes.t;
    if (n !== null)
      for (const s of n)
        (s.is_global || r) && t.push(s);
    for (var i = e.first; i !== null; ) {
      var a = i.next;
      if ((i.f & cr) === 0) {
        var o = (i.f & Zr) !== 0 || // If this is a branch effect without a block effect parent,
        // it means the parent block effect was pruned. In that case,
        // transparency information was transferred to the branch effect.
        (i.f & St) !== 0 && (e.f & wt) !== 0;
        so(i, t, o ? r : !1);
      }
      i = a;
    }
  }
}
function Xi(e) {
  oo(e, !0);
}
function oo(e, t) {
  if ((e.f & Ge) !== 0) {
    e.f ^= Ge, (e.f & Le) === 0 && (ye(e, Ie), Lr.ensure().schedule(e));
    for (var r = e.first; r !== null; ) {
      var n = r.next, i = (r.f & Zr) !== 0 || (r.f & St) !== 0;
      oo(r, i ? t : !1), r = n;
    }
    var a = e.nodes && e.nodes.t;
    if (a !== null)
      for (const o of a)
        (o.is_global || t) && o.in();
  }
}
function zi(e, t) {
  if (e.nodes)
    for (var r = e.nodes.start, n = e.nodes.end; r !== null; ) {
      var i = r === n ? null : /* @__PURE__ */ Sn(r);
      t.append(r), r = i;
    }
}
let $n = !1, dr = !1;
function _s(e) {
  dr = e;
}
let X = null, Et = !1;
function xt(e) {
  X = e;
}
let z = null;
function Ot(e) {
  z = e;
}
let bt = null;
function ao(e) {
  X !== null && (bt === null ? bt = [e] : bt.push(e));
}
let Xe = null, nt = 0, ft = null;
function sl(e) {
  ft = e;
}
let lo = 1, _r = 0, Mr = _r;
function bs(e) {
  Mr = e;
}
function uo() {
  return ++lo;
}
function Tn(e) {
  var t = e.f;
  if ((t & Ie) !== 0)
    return !0;
  if (t & Oe && (e.f &= ~Dr), (t & It) !== 0) {
    for (var r = (
      /** @type {Value[]} */
      e.deps
    ), n = r.length, i = 0; i < n; i++) {
      var a = r[i];
      if (Tn(
        /** @type {Derived} */
        a
      ) && $s(
        /** @type {Derived} */
        a
      ), a.wv > e.wv)
        return !0;
    }
    (t & _t) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    kt === null && ye(e, Le);
  }
  return !1;
}
function fo(e, t, r = !0) {
  var n = e.reactions;
  if (n !== null && !(bt !== null && Ar.call(bt, e)))
    for (var i = 0; i < n.length; i++) {
      var a = n[i];
      (a.f & Oe) !== 0 ? fo(
        /** @type {Derived} */
        a,
        t,
        !1
      ) : t === a && (r ? ye(a, Ie) : (a.f & Le) !== 0 && ye(a, It), Vi(
        /** @type {Effect} */
        a
      ));
    }
}
function co(e) {
  var I;
  var t = Xe, r = nt, n = ft, i = X, a = bt, o = at, s = Et, l = Mr, f = e.f;
  Xe = /** @type {null | Value[]} */
  null, nt = 0, ft = null, X = (f & (St | cr)) === 0 ? e : null, bt = null, Xr(e.ctx), Et = !1, Mr = ++_r, e.ac !== null && (ti(() => {
    e.ac.abort(ei);
  }), e.ac = null);
  try {
    e.f |= Gn;
    var p = (
      /** @type {Function} */
      e.fn
    ), c = p();
    e.f |= Br;
    var d = e.deps, S = K?.is_fork;
    if (Xe !== null) {
      var y;
      if (S || _n(e, nt), d !== null && nt > 0)
        for (d.length = nt + Xe.length, y = 0; y < Xe.length; y++)
          d[nt + y] = Xe[y];
      else
        e.deps = d = Xe;
      if (Ki() && (e.f & _t) !== 0)
        for (y = nt; y < d.length; y++)
          ((I = d[y]).reactions ?? (I.reactions = [])).push(e);
    } else !S && d !== null && nt < d.length && (_n(e, nt), d.length = nt);
    if (Rs() && ft !== null && !Et && d !== null && (e.f & (Oe | It | Ie)) === 0)
      for (y = 0; y < /** @type {Source[]} */
      ft.length; y++)
        fo(
          ft[y],
          /** @type {Effect} */
          e
        );
    if (i !== null && i !== e) {
      if (_r++, i.deps !== null)
        for (let j = 0; j < r; j += 1)
          i.deps[j].rv = _r;
      if (t !== null)
        for (const j of t)
          j.rv = _r;
      ft !== null && (n === null ? n = ft : n.push(.../** @type {Source[]} */
      ft));
    }
    return (e.f & ur) !== 0 && (e.f ^= ur), c;
  } catch (j) {
    return Ns(j);
  } finally {
    e.f ^= Gn, Xe = t, nt = r, ft = n, X = i, bt = a, Xr(o), Et = s, Mr = l;
  }
}
function ol(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var n = Zo.call(r, e);
    if (n !== -1) {
      var i = r.length - 1;
      i === 0 ? r = t.reactions = null : (r[n] = r[i], r.pop());
    }
  }
  if (r === null && (t.f & Oe) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Xe === null || !Ar.call(Xe, t))) {
    var a = (
      /** @type {Derived} */
      t
    );
    (a.f & _t) !== 0 && (a.f ^= _t, a.f &= ~Dr), a.v !== De && Ji(a), qa(a), _n(a, 0);
  }
}
function _n(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var n = t; n < r.length; n++)
      ol(e, r[n]);
}
function en(e) {
  var t = e.f;
  if ((t & At) === 0) {
    ye(e, Le);
    var r = z, n = $n;
    z = e, $n = !0;
    try {
      (t & (wt | Cs)) !== 0 ? il(e) : Zi(e), ro(e);
      var i = co(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = lo;
      var a;
    } finally {
      $n = n, z = r;
    }
  }
}
async function al() {
  await Promise.resolve(), Ba();
}
function u(e) {
  var t = e.f, r = (t & Oe) !== 0;
  if (X !== null && !Et) {
    var n = z !== null && (z.f & At) !== 0;
    if (!n && (bt === null || !Ar.call(bt, e))) {
      var i = X.deps;
      if ((X.f & Gn) !== 0)
        e.rv < _r && (e.rv = _r, Xe === null && i !== null && i[nt] === e ? nt++ : Xe === null ? Xe = [e] : Xe.push(e));
      else {
        X.deps ?? (X.deps = []), Ar.call(X.deps, e) || X.deps.push(e);
        var a = e.reactions;
        a === null ? e.reactions = [X] : Ar.call(a, X) || a.push(X);
      }
    }
  }
  if (dr && Tr.has(e))
    return Tr.get(e);
  if (r) {
    var o = (
      /** @type {Derived} */
      e
    );
    if (dr) {
      var s = o.v;
      return ((o.f & Le) === 0 && o.reactions !== null || ho(o)) && (s = Gi(o)), Tr.set(o, s), s;
    }
    var l = (o.f & _t) === 0 && !Et && X !== null && ($n || (X.f & _t) !== 0), f = (o.f & Br) === 0;
    Tn(o) && (l && (o.f |= _t), $s(o)), l && !f && (Vs(o), vo(o));
  }
  if (kt?.has(e))
    return kt.get(e);
  if ((e.f & ur) !== 0)
    throw e.v;
  return e.v;
}
function vo(e) {
  if (e.f |= _t, e.deps !== null)
    for (const t of e.deps)
      (t.reactions ?? (t.reactions = [])).push(e), (t.f & Oe) !== 0 && (t.f & _t) === 0 && (Vs(
        /** @type {Derived} */
        t
      ), vo(
        /** @type {Derived} */
        t
      ));
}
function ho(e) {
  if (e.v === De) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (Tr.has(t) || (t.f & Oe) !== 0 && ho(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function ni(e) {
  var t = Et;
  try {
    return Et = !0, e();
  } finally {
    Et = t;
  }
}
const ll = ["touchstart", "touchmove"];
function ul(e) {
  return ll.includes(e);
}
const br = Symbol("events"), go = /* @__PURE__ */ new Set(), Ni = /* @__PURE__ */ new Set();
function fl(e, t, r, n = {}) {
  function i(a) {
    if (n.capture || Ii.call(t, a), !a.cancelBubble)
      return ti(() => r?.call(this, a));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? Sr(() => {
    t.addEventListener(e, i, n);
  }) : t.addEventListener(e, i, n), i;
}
function xi(e, t, r, n, i) {
  var a = { capture: n, passive: i }, o = fl(e, t, r, a);
  (t === document.body || // @ts-ignore
  t === window || // @ts-ignore
  t === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  t instanceof HTMLMediaElement) && Wi(() => {
    t.removeEventListener(e, o, a);
  });
}
function oe(e, t, r) {
  (t[br] ?? (t[br] = {}))[e] = r;
}
function po(e) {
  for (var t = 0; t < e.length; t++)
    go.add(e[t]);
  for (var r of Ni)
    r(e);
}
let xs = null;
function Ii(e) {
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), n = e.type, i = e.composedPath?.() || [], a = (
    /** @type {null | Element} */
    i[0] || e.target
  );
  xs = e;
  var o = 0, s = xs === e && e[br];
  if (s) {
    var l = i.indexOf(s);
    if (l !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e[br] = t;
      return;
    }
    var f = i.indexOf(t);
    if (f === -1)
      return;
    l <= f && (o = l);
  }
  if (a = /** @type {Element} */
  i[o] || e.target, a !== t) {
    Xo(e, "currentTarget", {
      configurable: !0,
      get() {
        return a || r;
      }
    });
    var p = X, c = z;
    xt(null), Ot(null);
    try {
      for (var d, S = []; a !== null; ) {
        var y = a.assignedSlot || a.parentNode || /** @type {any} */
        a.host || null;
        try {
          var I = a[br]?.[n];
          I != null && (!/** @type {any} */
          a.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === a) && I.call(a, e);
        } catch (j) {
          d ? S.push(j) : d = j;
        }
        if (e.cancelBubble || y === t || y === null)
          break;
        a = y;
      }
      if (d) {
        for (let j of S)
          queueMicrotask(() => {
            throw j;
          });
        throw d;
      }
    } finally {
      e[br] = t, delete e.currentTarget, xt(p), Ot(c);
    }
  }
}
const cl = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (e) => e
  })
);
function dl(e) {
  return (
    /** @type {string} */
    cl?.createHTML(e) ?? e
  );
}
function vl(e) {
  var t = Xs("template");
  return t.innerHTML = dl(e.replaceAll("<!>", "<!---->")), t.content;
}
function bn(e, t) {
  var r = (
    /** @type {Effect} */
    z
  );
  r.nodes === null && (r.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function R(e, t) {
  var r = (t & ya) !== 0, n = (t & wa) !== 0, i, a = !e.startsWith("<!>");
  return () => {
    i === void 0 && (i = vl(a ? e : "<!>" + e), r || (i = /** @type {TemplateNode} */
    /* @__PURE__ */ lr(i)));
    var o = (
      /** @type {TemplateNode} */
      n || Ks ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (r) {
      var s = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ lr(o)
      ), l = (
        /** @type {TemplateNode} */
        o.lastChild
      );
      bn(s, l);
    } else
      bn(o, o);
    return o;
  };
}
function ms(e = "") {
  {
    var t = fr(e + "");
    return bn(t, t), t;
  }
}
function L(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function P(e, t) {
  var r = t == null ? "" : typeof t == "object" ? `${t}` : t;
  r !== /** @type {any} */
  (e[un] ?? (e[un] = e.nodeValue)) && (e[un] = r, e.nodeValue = `${r}`);
}
function hl(e, t) {
  return gl(e, t);
}
const In = /* @__PURE__ */ new Map();
function gl(e, { target: t, anchor: r, props: n = {}, events: i, context: a, intro: o = !0, transformError: s }) {
  Za();
  var l = void 0, f = rl(() => {
    var p = r ?? t.appendChild(fr());
    Pa(
      /** @type {TemplateNode} */
      p,
      {
        pending: () => {
        }
      },
      (S) => {
        Ui({});
        var y = (
          /** @type {ComponentContext} */
          at
        );
        a && (y.c = a), i && (n.$$events = i), l = e(S, n) || {}, Hi();
      },
      s
    );
    var c = /* @__PURE__ */ new Set(), d = (S) => {
      for (var y = 0; y < S.length; y++) {
        var I = S[y];
        if (!c.has(I)) {
          c.add(I);
          var j = ul(I);
          for (const pe of [t, document]) {
            var W = In.get(pe);
            W === void 0 && (W = /* @__PURE__ */ new Map(), In.set(pe, W));
            var H = W.get(I);
            H === void 0 ? (pe.addEventListener(I, Ii, { passive: j }), W.set(I, 1)) : W.set(I, H + 1);
          }
        }
      }
    };
    return d(Xn(go)), Ni.add(d), () => {
      for (var S of c)
        for (const j of [t, document]) {
          var y = (
            /** @type {Map<string, number>} */
            In.get(j)
          ), I = (
            /** @type {number} */
            y.get(S)
          );
          --I == 0 ? (j.removeEventListener(S, Ii), y.delete(S), y.size === 0 && In.delete(j)) : y.set(S, I);
        }
      Ni.delete(d), p !== r && p.parentNode?.removeChild(p);
    };
  });
  return Oi.set(l, f), l;
}
let Oi = /* @__PURE__ */ new WeakMap();
function pl(e, t) {
  const r = Oi.get(e);
  return r ? (Oi.delete(e), r(t)) : Promise.resolve();
}
var yt, Bt, ot, Er, En, An, Zn;
class _l {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, r = !0) {
    /** @type {TemplateNode} */
    Qe(this, "anchor");
    /** @type {Map<Batch, Key>} */
    q(this, yt, /* @__PURE__ */ new Map());
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
    q(this, Bt, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    q(this, ot, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    q(this, Er, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    q(this, En, !0);
    /**
     * @param {Batch} batch
     */
    q(this, An, (t) => {
      if (v(this, yt).has(t)) {
        var r = (
          /** @type {Key} */
          v(this, yt).get(t)
        ), n = v(this, Bt).get(r);
        if (n)
          Xi(n), v(this, Er).delete(r);
        else {
          var i = v(this, ot).get(r);
          i && (v(this, Bt).set(r, i.effect), v(this, ot).delete(r), i.fragment.lastChild.remove(), this.anchor.before(i.fragment), n = i.effect);
        }
        for (const [a, o] of v(this, yt)) {
          if (v(this, yt).delete(a), a === t)
            break;
          const s = v(this, ot).get(o);
          s && (ze(s.effect), v(this, ot).delete(o));
        }
        for (const [a, o] of v(this, Bt)) {
          if (a === r || v(this, Er).has(a)) continue;
          const s = () => {
            if (Array.from(v(this, yt).values()).includes(a)) {
              var f = document.createDocumentFragment();
              zi(o, f), f.append(fr()), v(this, ot).set(a, { effect: o, fragment: f });
            } else
              ze(o);
            v(this, Er).delete(a), v(this, Bt).delete(a);
          };
          v(this, En) || !n ? (v(this, Er).add(a), Cr(o, s, !1)) : s();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    q(this, Zn, (t) => {
      v(this, yt).delete(t);
      const r = Array.from(v(this, yt).values());
      for (const [n, i] of v(this, ot))
        r.includes(n) || (ze(i.effect), v(this, ot).delete(n));
    });
    this.anchor = t, G(this, En, r);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, r) {
    var n = (
      /** @type {Batch} */
      K
    ), i = Zs();
    if (r && !v(this, Bt).has(t) && !v(this, ot).has(t))
      if (i) {
        var a = document.createDocumentFragment(), o = fr();
        a.append(o), v(this, ot).set(t, {
          effect: pt(() => r(o)),
          fragment: a
        });
      } else
        v(this, Bt).set(
          t,
          pt(() => r(this.anchor))
        );
    if (v(this, yt).set(n, t), i) {
      for (const [s, l] of v(this, Bt))
        s === t ? n.unskip_effect(l) : n.skip_effect(l);
      for (const [s, l] of v(this, ot))
        s === t ? n.unskip_effect(l.effect) : n.skip_effect(l.effect);
      n.oncommit(v(this, An)), n.ondiscard(v(this, Zn));
    } else
      v(this, An).call(this, n);
  }
}
yt = new WeakMap(), Bt = new WeakMap(), ot = new WeakMap(), Er = new WeakMap(), En = new WeakMap(), An = new WeakMap(), Zn = new WeakMap();
function Z(e, t, r = !1) {
  var n = new _l(e), i = r ? Zr : 0;
  function a(o, s) {
    n.ensure(o, s);
  }
  Qi(() => {
    var o = !1;
    t((s, l = 0) => {
      o = !0, a(l, s);
    }), o || a(-1, null);
  }, i);
}
function gr(e, t) {
  return t;
}
function bl(e, t, r) {
  for (var n = [], i = t.length, a, o = t.length, s = 0; s < i; s++) {
    let c = t[s];
    Cr(
      c,
      () => {
        if (a) {
          if (a.pending.delete(c), a.done.add(c), a.pending.size === 0) {
            var d = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            Pi(e, Xn(a.done)), d.delete(a), d.size === 0 && (e.outrogroups = null);
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
      var f = (
        /** @type {Element} */
        r
      ), p = (
        /** @type {Element} */
        f.parentNode
      );
      Xa(p), p.append(f), e.items.clear();
    }
    Pi(e, t, !l);
  } else
    a = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ?? (e.outrogroups = /* @__PURE__ */ new Set())).add(a);
}
function Pi(e, t, r = !0) {
  var n;
  if (e.pending.size > 0) {
    n = /* @__PURE__ */ new Set();
    for (const o of e.pending.values())
      for (const s of o)
        n.add(
          /** @type {EachItem} */
          e.items.get(s).e
        );
  }
  for (var i = 0; i < t.length; i++) {
    var a = t[i];
    if (n?.has(a)) {
      a.f |= Kt;
      const o = document.createDocumentFragment();
      zi(a, o);
    } else
      ze(t[i], r);
  }
}
var ys;
function Vt(e, t, r, n, i, a = null) {
  var o = e, s = /* @__PURE__ */ new Map();
  {
    var l = (
      /** @type {Element} */
      e
    );
    o = l.appendChild(fr());
  }
  var f = null, p = /* @__PURE__ */ Ya(() => {
    var H = r();
    return Fi(H) ? H : H == null ? [] : Xn(H);
  }), c, d = /* @__PURE__ */ new Map(), S = !0;
  function y(H) {
    (W.effect.f & At) === 0 && (W.pending.delete(H), W.fallback = f, xl(W, c, o, t, n), f !== null && (c.length === 0 ? (f.f & Kt) === 0 ? Xi(f) : (f.f ^= Kt, cn(f, null, o)) : Cr(f, () => {
      f = null;
    })));
  }
  function I(H) {
    W.pending.delete(H);
  }
  var j = Qi(() => {
    c = /** @type {V[]} */
    u(p);
    for (var H = c.length, pe = /* @__PURE__ */ new Set(), be = (
      /** @type {Batch} */
      K
    ), de = Zs(), ke = 0; ke < H; ke += 1) {
      var b = c[ke], w = n(b, ke), h = S ? null : s.get(w);
      h ? (h.v && zr(h.v, b), h.i && zr(h.i, ke), de && be.unskip_effect(h.e)) : (h = ml(
        s,
        S ? o : ys ?? (ys = fr()),
        b,
        w,
        ke,
        i,
        t,
        r
      ), S || (h.e.f |= Kt), s.set(w, h)), pe.add(w);
    }
    if (H === 0 && a && !f && (S ? f = pt(() => a(o)) : (f = pt(() => a(ys ?? (ys = fr()))), f.f |= Kt)), H > pe.size && ua(), !S)
      if (d.set(be, pe), de) {
        for (const [k, x] of s)
          pe.has(k) || be.skip_effect(x.e);
        be.oncommit(y), be.ondiscard(I);
      } else
        y(be);
    u(p);
  }), W = { effect: j, items: s, pending: d, outrogroups: null, fallback: f };
  S = !1;
}
function ln(e) {
  for (; e !== null && (e.f & St) === 0; )
    e = e.next;
  return e;
}
function xl(e, t, r, n, i) {
  var a = t.length, o = e.items, s = ln(e.effect.first), l, f = null, p = [], c = [], d, S, y, I;
  for (I = 0; I < a; I += 1) {
    if (d = t[I], S = i(d, I), y = /** @type {EachItem} */
    o.get(S).e, e.outrogroups !== null)
      for (const w of e.outrogroups)
        w.pending.delete(y), w.done.delete(y);
    if ((y.f & Ge) !== 0 && Xi(y), (y.f & Kt) !== 0)
      if (y.f ^= Kt, y === s)
        cn(y, null, r);
      else {
        var j = f ? f.next : s;
        y === e.effect.last && (e.effect.last = y.prev), y.prev && (y.prev.next = y.next), y.next && (y.next.prev = y.prev), zt(e, f, y), zt(e, y, j), cn(y, j, r), f = y, p = [], c = [], s = ln(f.next);
        continue;
      }
    if (y !== s) {
      if (l !== void 0 && l.has(y)) {
        if (p.length < c.length) {
          var W = c[0], H;
          f = W.prev;
          var pe = p[0], be = p[p.length - 1];
          for (H = 0; H < p.length; H += 1)
            cn(p[H], W, r);
          for (H = 0; H < c.length; H += 1)
            l.delete(c[H]);
          zt(e, pe.prev, be.next), zt(e, f, pe), zt(e, be, W), s = W, f = be, I -= 1, p = [], c = [];
        } else
          l.delete(y), cn(y, s, r), zt(e, y.prev, y.next), zt(e, y, f === null ? e.effect.first : f.next), zt(e, f, y), f = y;
        continue;
      }
      for (p = [], c = []; s !== null && s !== y; )
        (l ?? (l = /* @__PURE__ */ new Set())).add(s), c.push(s), s = ln(s.next);
      if (s === null)
        continue;
    }
    (y.f & Kt) === 0 && p.push(y), f = y, s = ln(y.next);
  }
  if (e.outrogroups !== null) {
    for (const w of e.outrogroups)
      w.pending.size === 0 && (Pi(e, Xn(w.done)), e.outrogroups?.delete(w));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (s !== null || l !== void 0) {
    var de = [];
    if (l !== void 0)
      for (y of l)
        (y.f & Ge) === 0 && de.push(y);
    for (; s !== null; )
      (s.f & Ge) === 0 && s !== e.fallback && de.push(s), s = ln(s.next);
    var ke = de.length;
    if (ke > 0) {
      var b = a === 0 ? r : null;
      bl(e, de, b);
    }
  }
}
function ml(e, t, r, n, i, a, o, s) {
  var l = (o & ba) !== 0 ? (o & ma) === 0 ? /* @__PURE__ */ Ka(r, !1, !1) : Rr(r) : null, f = (o & xa) !== 0 ? Rr(i) : null;
  return {
    v: l,
    i: f,
    e: pt(() => (a(t, l ?? r, f ?? i, s), () => {
      e.delete(n);
    }))
  };
}
function cn(e, t, r) {
  if (e.nodes)
    for (var n = e.nodes.start, i = e.nodes.end, a = t && (t.f & Kt) === 0 ? (
      /** @type {EffectNodes} */
      t.nodes.start
    ) : r; n !== null; ) {
      var o = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Sn(n)
      );
      if (a.before(n), n === i)
        return;
      n = o;
    }
}
function zt(e, t, r) {
  t === null ? e.effect.first = r : t.next = r, r === null ? e.effect.last = t : r.prev = t;
}
function yl(e, t, r = !1, n = !1, i = !1, a = !1) {
  var o = e, s = "";
  if (r)
    var l = (
      /** @type {Element} */
      e
    );
  $(() => {
    var f = (
      /** @type {Effect} */
      z
    );
    if (s !== (s = t() ?? "")) {
      if (r) {
        f.nodes = null, l.innerHTML = /** @type {string} */
        s, s !== "" && bn(
          /** @type {TemplateNode} */
          /* @__PURE__ */ lr(l),
          /** @type {TemplateNode} */
          l.lastChild
        );
        return;
      }
      if (f.nodes !== null && (no(
        f.nodes.start,
        /** @type {TemplateNode} */
        f.nodes.end
      ), f.nodes = null), s !== "") {
        var p = n ? ka : i ? Ea : void 0, c = (
          /** @type {HTMLTemplateElement | SVGElement | MathMLElement} */
          Xs(n ? "svg" : i ? "math" : "template", p)
        );
        c.innerHTML = /** @type {any} */
        s;
        var d = n || i ? c : (
          /** @type {HTMLTemplateElement} */
          c.content
        );
        if (bn(
          /** @type {TemplateNode} */
          /* @__PURE__ */ lr(d),
          /** @type {TemplateNode} */
          d.lastChild
        ), n || i)
          for (; /* @__PURE__ */ lr(d); )
            o.before(
              /** @type {TemplateNode} */
              /* @__PURE__ */ lr(d)
            );
        else
          o.before(d);
      }
    }
  });
}
function _o(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var i = e.length;
    for (t = 0; t < i; t++) e[t] && (r = _o(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function wl() {
  for (var e, t, r = 0, n = "", i = arguments.length; r < i; r++) (e = arguments[r]) && (t = _o(e)) && (n && (n += " "), n += t);
  return n;
}
function ht(e) {
  return typeof e == "object" ? wl(e) : e ?? "";
}
function kl(e, t, r) {
  var n = e == null ? "" : "" + e;
  return n === "" ? null : n;
}
function gt(e, t, r, n, i, a) {
  var o = (
    /** @type {any} */
    e[Ai]
  );
  if (o !== r || o === void 0) {
    var s = kl(r);
    s == null ? e.removeAttribute("class") : e.className = s, e[Ai] = r;
  }
  return a;
}
function bo(e, t, r = !1) {
  if (e.multiple) {
    if (t == null)
      return;
    if (!Fi(t))
      return Sa();
    for (var n of e.options)
      n.selected = t.includes(pn(n));
    return;
  }
  for (n of e.options) {
    var i = pn(n);
    if (Qa(i, t)) {
      n.selected = !0;
      return;
    }
  }
  (!r || t !== void 0) && (e.selectedIndex = -1);
}
function El(e) {
  var t = new MutationObserver(() => {
    bo(e, e.__value);
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
  }), Wi(() => {
    t.disconnect();
  });
}
function xo(e, t, r = t) {
  var n = /* @__PURE__ */ new WeakSet(), i = !0;
  qi(e, "change", (a) => {
    var o = a ? "[selected]" : ":checked", s;
    if (e.multiple)
      s = [].map.call(e.querySelectorAll(o), pn);
    else {
      var l = e.querySelector(o) ?? // will fall back to first non-disabled option if no option is selected
      e.querySelector("option:not([disabled])");
      s = l && pn(l);
    }
    r(s), e.__value = s, K !== null && n.add(K);
  }), to(() => {
    var a = t();
    if (e === document.activeElement) {
      var o = (
        /** @type {Batch} */
        K
      );
      if (n.has(o))
        return;
    }
    if (bo(e, a, i), i && a === void 0) {
      var s = e.querySelector(":checked");
      s !== null && (a = pn(s), r(a));
    }
    e.__value = a, i = !1;
  }), El(e);
}
function pn(e) {
  return "__value" in e ? e.__value : e.value;
}
const Al = Symbol("is custom element"), Sl = Symbol("is html");
function Vn(e, t, r, n) {
  var i = Tl(e);
  i[t] !== (i[t] = r) && (t === "loading" && (e[oa] = r), r == null ? e.removeAttribute(t) : typeof r != "string" && Cl(e).includes(t) ? e[t] = r : e.setAttribute(t, r));
}
function Tl(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    /** @type {any} */
    e[On] ?? (e[On] = {
      [Al]: e.nodeName.includes("-"),
      [Sl]: e.namespaceURI === Ms
    })
  );
}
var ws = /* @__PURE__ */ new Map();
function Cl(e) {
  var t = e.getAttribute("is") || e.nodeName, r = ws.get(t);
  if (r) return r;
  ws.set(t, r = []);
  for (var n, i = e, a = Element.prototype; a !== i; ) {
    n = zo(i);
    for (var o in n)
      n[o].set && // better safe than sorry, we don't want spread attributes to mess with HTML content
      o !== "innerHTML" && o !== "textContent" && o !== "innerText" && r.push(o);
    i = Ss(i);
  }
  return r;
}
function nr(e, t, r = t) {
  var n = /* @__PURE__ */ new WeakSet();
  qi(e, "input", async (i) => {
    var a = i ? e.defaultValue : e.value;
    if (a = mi(e) ? yi(a) : a, r(a), K !== null && n.add(K), await al(), a !== (a = t())) {
      var o = e.selectionStart, s = e.selectionEnd, l = e.value.length;
      if (e.value = a ?? "", s !== null) {
        var f = e.value.length;
        o === s && s === l && f > l ? (e.selectionStart = f, e.selectionEnd = f) : (e.selectionStart = o, e.selectionEnd = Math.min(s, f));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  ni(t) == null && e.value && (r(mi(e) ? yi(e.value) : e.value), K !== null && n.add(K)), ri(() => {
    var i = t();
    if (e === document.activeElement) {
      var a = (
        /** @type {Batch} */
        K
      );
      if (n.has(a))
        return;
    }
    mi(e) && i === yi(e.value) || e.type === "date" && !i && !e.value || i !== e.value && (e.value = i ?? "");
  });
}
function Ml(e, t, r = t) {
  qi(e, "change", (n) => {
    var i = n ? e.defaultChecked : e.checked;
    r(i);
  }), // If we are hydrating and the value has since changed,
  // then use the update value from the input instead.
  // If defaultChecked is set, then checked == defaultChecked
  ni(t) == null && r(e.checked), ri(() => {
    var n = t();
    e.checked = !!n;
  });
}
function mi(e) {
  var t = e.type;
  return t === "number" || t === "range";
}
function yi(e) {
  return e === "" ? null : +e;
}
function wi(e, t) {
  return e === t || e?.[$r] === t;
}
function Dl(e = {}, t, r, n) {
  var i = (
    /** @type {ComponentContext} */
    at.r
  ), a = (
    /** @type {Effect} */
    z
  );
  return to(() => {
    var o, s;
    return ri(() => {
      o = s, s = [], ni(() => {
        wi(r(...s), e) || (t(e, ...s), o && wi(r(...o), e) && t(null, ...o));
      });
    }), () => {
      let l = a;
      for (; l !== i && l.parent !== null && l.parent.f & Ei; )
        l = l.parent;
      const f = () => {
        s && wi(r(...s), e) && t(null, ...s);
      }, p = l.teardown;
      l.teardown = () => {
        f(), p?.();
      };
    };
  }), e;
}
const Ll = "5";
var As;
typeof window < "u" && ((As = window.__svelte ?? (window.__svelte = {})).v ?? (As.v = /* @__PURE__ */ new Set())).add(Ll);
const rn = function(e, t) {
  let i = e;
  const a = dn[t];
  let o = null, s = 0, l = null;
  const f = [], p = {}, c = function(b, w) {
    s = i * 4 + 17, o = (function(h) {
      const k = new Array(h);
      for (let x = 0; x < h; x += 1) {
        k[x] = new Array(h);
        for (let C = 0; C < h; C += 1)
          k[x][C] = null;
      }
      return k;
    })(s), d(0, 0), d(s - 7, 0), d(0, s - 7), I(), y(), W(b, w), i >= 7 && j(b), l == null && (l = be(i, a, f)), H(l, w);
  }, d = function(b, w) {
    for (let h = -1; h <= 7; h += 1)
      if (!(b + h <= -1 || s <= b + h))
        for (let k = -1; k <= 7; k += 1)
          w + k <= -1 || s <= w + k || (0 <= h && h <= 6 && (k == 0 || k == 6) || 0 <= k && k <= 6 && (h == 0 || h == 6) || 2 <= h && h <= 4 && 2 <= k && k <= 4 ? o[b + h][w + k] = !0 : o[b + h][w + k] = !1);
  }, S = function() {
    let b = 0, w = 0;
    for (let h = 0; h < 8; h += 1) {
      c(!0, h);
      const k = tr.getLostPoint(p);
      (h == 0 || b > k) && (b = k, w = h);
    }
    return w;
  }, y = function() {
    for (let b = 8; b < s - 8; b += 1)
      o[b][6] == null && (o[b][6] = b % 2 == 0);
    for (let b = 8; b < s - 8; b += 1)
      o[6][b] == null && (o[6][b] = b % 2 == 0);
  }, I = function() {
    const b = tr.getPatternPosition(i);
    for (let w = 0; w < b.length; w += 1)
      for (let h = 0; h < b.length; h += 1) {
        const k = b[w], x = b[h];
        if (o[k][x] == null)
          for (let C = -2; C <= 2; C += 1)
            for (let N = -2; N <= 2; N += 1)
              C == -2 || C == 2 || N == -2 || N == 2 || C == 0 && N == 0 ? o[k + C][x + N] = !0 : o[k + C][x + N] = !1;
      }
  }, j = function(b) {
    const w = tr.getBCHTypeNumber(i);
    for (let h = 0; h < 18; h += 1) {
      const k = !b && (w >> h & 1) == 1;
      o[Math.floor(h / 3)][h % 3 + s - 8 - 3] = k;
    }
    for (let h = 0; h < 18; h += 1) {
      const k = !b && (w >> h & 1) == 1;
      o[h % 3 + s - 8 - 3][Math.floor(h / 3)] = k;
    }
  }, W = function(b, w) {
    const h = a << 3 | w, k = tr.getBCHTypeInfo(h);
    for (let x = 0; x < 15; x += 1) {
      const C = !b && (k >> x & 1) == 1;
      x < 6 ? o[x][8] = C : x < 8 ? o[x + 1][8] = C : o[s - 15 + x][8] = C;
    }
    for (let x = 0; x < 15; x += 1) {
      const C = !b && (k >> x & 1) == 1;
      x < 8 ? o[8][s - x - 1] = C : x < 9 ? o[8][15 - x - 1 + 1] = C : o[8][15 - x - 1] = C;
    }
    o[s - 8][8] = !b;
  }, H = function(b, w) {
    let h = -1, k = s - 1, x = 7, C = 0;
    const N = tr.getMaskFunction(w);
    for (let ee = s - 1; ee > 0; ee -= 2)
      for (ee == 6 && (ee -= 1); ; ) {
        for (let re = 0; re < 2; re += 1)
          if (o[k][ee - re] == null) {
            let ve = !1;
            C < b.length && (ve = (b[C] >>> x & 1) == 1), N(k, ee - re) && (ve = !ve), o[k][ee - re] = ve, x -= 1, x == -1 && (C += 1, x = 7);
          }
        if (k += h, k < 0 || s <= k) {
          k -= h, h = -h;
          break;
        }
      }
  }, pe = function(b, w) {
    let h = 0, k = 0, x = 0;
    const C = new Array(w.length), N = new Array(w.length);
    for (let O = 0; O < w.length; O += 1) {
      const ae = w[O].dataCount, Ae = w[O].totalCount - ae;
      k = Math.max(k, ae), x = Math.max(x, Ae), C[O] = new Array(ae);
      for (let Pe = 0; Pe < C[O].length; Pe += 1)
        C[O][Pe] = 255 & b.getBuffer()[Pe + h];
      h += ae;
      const Se = tr.getErrorCorrectPolynomial(Ae), Nr = xn(C[O], Se.getLength() - 1).mod(Se);
      N[O] = new Array(Se.getLength() - 1);
      for (let Pe = 0; Pe < N[O].length; Pe += 1) {
        const Pt = Pe + Nr.getLength() - N[O].length;
        N[O][Pe] = Pt >= 0 ? Nr.getAt(Pt) : 0;
      }
    }
    let ee = 0;
    for (let O = 0; O < w.length; O += 1)
      ee += w[O].totalCount;
    const re = new Array(ee);
    let ve = 0;
    for (let O = 0; O < k; O += 1)
      for (let ae = 0; ae < w.length; ae += 1)
        O < C[ae].length && (re[ve] = C[ae][O], ve += 1);
    for (let O = 0; O < x; O += 1)
      for (let ae = 0; ae < w.length; ae += 1)
        O < N[ae].length && (re[ve] = N[ae][O], ve += 1);
    return re;
  }, be = function(b, w, h) {
    const k = ks.getRSBlocks(b, w), x = Es();
    for (let N = 0; N < h.length; N += 1) {
      const ee = h[N];
      x.put(ee.getMode(), 4), x.put(ee.getLength(), tr.getLengthInBits(ee.getMode(), b)), ee.write(x);
    }
    let C = 0;
    for (let N = 0; N < k.length; N += 1)
      C += k[N].dataCount;
    if (x.getLengthInBits() > C * 8)
      throw "code length overflow. (" + x.getLengthInBits() + ">" + C * 8 + ")";
    for (x.getLengthInBits() + 4 <= C * 8 && x.put(0, 4); x.getLengthInBits() % 8 != 0; )
      x.putBit(!1);
    for (; !(x.getLengthInBits() >= C * 8 || (x.put(236, 8), x.getLengthInBits() >= C * 8)); )
      x.put(17, 8);
    return pe(x, k);
  };
  p.addData = function(b, w) {
    w = w || "Byte";
    let h = null;
    switch (w) {
      case "Numeric":
        h = Rl(b);
        break;
      case "Alphanumeric":
        h = Bl(b);
        break;
      case "Byte":
        h = Nl(b);
        break;
      case "Kanji":
        h = Il(b);
        break;
      default:
        throw "mode:" + w;
    }
    f.push(h), l = null;
  }, p.isDark = function(b, w) {
    if (b < 0 || s <= b || w < 0 || s <= w)
      throw b + "," + w;
    return o[b][w];
  }, p.getModuleCount = function() {
    return s;
  }, p.make = function() {
    if (i < 1) {
      let b = 1;
      for (; b < 40; b++) {
        const w = ks.getRSBlocks(b, a), h = Es();
        for (let x = 0; x < f.length; x++) {
          const C = f[x];
          h.put(C.getMode(), 4), h.put(C.getLength(), tr.getLengthInBits(C.getMode(), b)), C.write(h);
        }
        let k = 0;
        for (let x = 0; x < w.length; x++)
          k += w[x].dataCount;
        if (h.getLengthInBits() <= k * 8)
          break;
      }
      i = b;
    }
    c(!1, S());
  }, p.createTableTag = function(b, w) {
    b = b || 2, w = typeof w > "u" ? b * 4 : w;
    let h = "";
    h += '<table style="', h += " border-width: 0px; border-style: none;", h += " border-collapse: collapse;", h += " padding: 0px; margin: " + w + "px;", h += '">', h += "<tbody>";
    for (let k = 0; k < p.getModuleCount(); k += 1) {
      h += "<tr>";
      for (let x = 0; x < p.getModuleCount(); x += 1)
        h += '<td style="', h += " border-width: 0px; border-style: none;", h += " border-collapse: collapse;", h += " padding: 0px; margin: 0px;", h += " width: " + b + "px;", h += " height: " + b + "px;", h += " background-color: ", h += p.isDark(k, x) ? "#000000" : "#ffffff", h += ";", h += '"/>';
      h += "</tr>";
    }
    return h += "</tbody>", h += "</table>", h;
  }, p.createSvgTag = function(b, w, h, k) {
    let x = {};
    typeof arguments[0] == "object" && (x = arguments[0], b = x.cellSize, w = x.margin, h = x.alt, k = x.title), b = b || 2, w = typeof w > "u" ? b * 4 : w, h = typeof h == "string" ? { text: h } : h || {}, h.text = h.text || null, h.id = h.text ? h.id || "qrcode-description" : null, k = typeof k == "string" ? { text: k } : k || {}, k.text = k.text || null, k.id = k.text ? k.id || "qrcode-title" : null;
    const C = p.getModuleCount() * b + w * 2;
    let N, ee, re, ve, O = "", ae;
    for (ae = "l" + b + ",0 0," + b + " -" + b + ",0 0,-" + b + "z ", O += '<svg version="1.1" xmlns="http://www.w3.org/2000/svg"', O += x.scalable ? "" : ' width="' + C + 'px" height="' + C + 'px"', O += ' viewBox="0 0 ' + C + " " + C + '" ', O += ' preserveAspectRatio="xMinYMin meet"', O += k.text || h.text ? ' role="img" aria-labelledby="' + de([k.id, h.id].join(" ").trim()) + '"' : "", O += ">", O += k.text ? '<title id="' + de(k.id) + '">' + de(k.text) + "</title>" : "", O += h.text ? '<description id="' + de(h.id) + '">' + de(h.text) + "</description>" : "", O += '<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>', O += '<path d="', re = 0; re < p.getModuleCount(); re += 1)
      for (ve = re * b + w, N = 0; N < p.getModuleCount(); N += 1)
        p.isDark(re, N) && (ee = N * b + w, O += "M" + ee + "," + ve + ae);
    return O += '" stroke="transparent" fill="black"/>', O += "</svg>", O;
  }, p.createDataURL = function(b, w) {
    b = b || 2, w = typeof w > "u" ? b * 4 : w;
    const h = p.getModuleCount() * b + w * 2, k = w, x = h - w;
    return Fl(h, h, function(C, N) {
      if (k <= C && C < x && k <= N && N < x) {
        const ee = Math.floor((C - k) / b), re = Math.floor((N - k) / b);
        return p.isDark(re, ee) ? 0 : 1;
      } else
        return 1;
    });
  }, p.createImgTag = function(b, w, h) {
    b = b || 2, w = typeof w > "u" ? b * 4 : w;
    const k = p.getModuleCount() * b + w * 2;
    let x = "";
    return x += "<img", x += ' src="', x += p.createDataURL(b, w), x += '"', x += ' width="', x += k, x += '"', x += ' height="', x += k, x += '"', h && (x += ' alt="', x += de(h), x += '"'), x += "/>", x;
  };
  const de = function(b) {
    let w = "";
    for (let h = 0; h < b.length; h += 1) {
      const k = b.charAt(h);
      switch (k) {
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
          w += k;
          break;
      }
    }
    return w;
  }, ke = function(b) {
    b = typeof b > "u" ? 2 : b;
    const h = p.getModuleCount() * 1 + b * 2, k = b, x = h - b;
    let C, N, ee, re, ve;
    const O = {
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
    let Ae = "";
    for (C = 0; C < h; C += 2) {
      for (ee = Math.floor((C - k) / 1), re = Math.floor((C + 1 - k) / 1), N = 0; N < h; N += 1)
        ve = "█", k <= N && N < x && k <= C && C < x && p.isDark(ee, Math.floor((N - k) / 1)) && (ve = " "), k <= N && N < x && k <= C + 1 && C + 1 < x && p.isDark(re, Math.floor((N - k) / 1)) ? ve += " " : ve += "█", Ae += b < 1 && C + 1 >= x ? ae[ve] : O[ve];
      Ae += `
`;
    }
    return h % 2 && b > 0 ? Ae.substring(0, Ae.length - h - 1) + Array(h + 1).join("▀") : Ae.substring(0, Ae.length - 1);
  };
  return p.createASCII = function(b, w) {
    if (b = b || 1, b < 2)
      return ke(w);
    b -= 1, w = typeof w > "u" ? b * 2 : w;
    const h = p.getModuleCount() * b + w * 2, k = w, x = h - w;
    let C, N, ee, re;
    const ve = Array(b + 1).join("██"), O = Array(b + 1).join("  ");
    let ae = "", Ae = "";
    for (C = 0; C < h; C += 1) {
      for (ee = Math.floor((C - k) / b), Ae = "", N = 0; N < h; N += 1)
        re = 1, k <= N && N < x && k <= C && C < x && p.isDark(ee, Math.floor((N - k) / b)) && (re = 0), Ae += re ? ve : O;
      for (ee = 0; ee < b; ee += 1)
        ae += Ae + `
`;
    }
    return ae.substring(0, ae.length - 1);
  }, p.renderTo2dContext = function(b, w) {
    w = w || 2;
    const h = p.getModuleCount();
    for (let k = 0; k < h; k++)
      for (let x = 0; x < h; x++)
        b.fillStyle = p.isDark(k, x) ? "black" : "white", b.fillRect(x * w, k * w, w, w);
  }, p;
};
rn.stringToBytes = function(e) {
  const t = [];
  for (let r = 0; r < e.length; r += 1) {
    const n = e.charCodeAt(r);
    t.push(n & 255);
  }
  return t;
};
rn.createStringToBytes = function(e, t) {
  const r = (function() {
    const i = Pl(e), a = function() {
      const l = i.read();
      if (l == -1) throw "eof";
      return l;
    };
    let o = 0;
    const s = {};
    for (; ; ) {
      const l = i.read();
      if (l == -1) break;
      const f = a(), p = a(), c = a(), d = String.fromCharCode(l << 8 | f), S = p << 8 | c;
      s[d] = S, o += 1;
    }
    if (o != t)
      throw o + " != " + t;
    return s;
  })(), n = 63;
  return function(i) {
    const a = [];
    for (let o = 0; o < i.length; o += 1) {
      const s = i.charCodeAt(o);
      if (s < 128)
        a.push(s);
      else {
        const l = r[i.charAt(o)];
        typeof l == "number" ? (l & 255) == l ? a.push(l) : (a.push(l >>> 8), a.push(l & 255)) : a.push(n);
      }
    }
    return a;
  };
};
const Ue = {
  MODE_NUMBER: 1,
  MODE_ALPHA_NUM: 2,
  MODE_8BIT_BYTE: 4,
  MODE_KANJI: 8
}, dn = {
  L: 1,
  M: 0,
  Q: 3,
  H: 2
}, er = {
  PATTERN000: 0,
  PATTERN001: 1,
  PATTERN010: 2,
  PATTERN011: 3,
  PATTERN100: 4,
  PATTERN101: 5,
  PATTERN110: 6,
  PATTERN111: 7
}, tr = (function() {
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
  ], t = 1335, r = 7973, n = 21522, i = {}, a = function(o) {
    let s = 0;
    for (; o != 0; )
      s += 1, o >>>= 1;
    return s;
  };
  return i.getBCHTypeInfo = function(o) {
    let s = o << 10;
    for (; a(s) - a(t) >= 0; )
      s ^= t << a(s) - a(t);
    return (o << 10 | s) ^ n;
  }, i.getBCHTypeNumber = function(o) {
    let s = o << 12;
    for (; a(s) - a(r) >= 0; )
      s ^= r << a(s) - a(r);
    return o << 12 | s;
  }, i.getPatternPosition = function(o) {
    return e[o - 1];
  }, i.getMaskFunction = function(o) {
    switch (o) {
      case er.PATTERN000:
        return function(s, l) {
          return (s + l) % 2 == 0;
        };
      case er.PATTERN001:
        return function(s, l) {
          return s % 2 == 0;
        };
      case er.PATTERN010:
        return function(s, l) {
          return l % 3 == 0;
        };
      case er.PATTERN011:
        return function(s, l) {
          return (s + l) % 3 == 0;
        };
      case er.PATTERN100:
        return function(s, l) {
          return (Math.floor(s / 2) + Math.floor(l / 3)) % 2 == 0;
        };
      case er.PATTERN101:
        return function(s, l) {
          return s * l % 2 + s * l % 3 == 0;
        };
      case er.PATTERN110:
        return function(s, l) {
          return (s * l % 2 + s * l % 3) % 2 == 0;
        };
      case er.PATTERN111:
        return function(s, l) {
          return (s * l % 3 + (s + l) % 2) % 2 == 0;
        };
      default:
        throw "bad maskPattern:" + o;
    }
  }, i.getErrorCorrectPolynomial = function(o) {
    let s = xn([1], 0);
    for (let l = 0; l < o; l += 1)
      s = s.multiply(xn([1, rr.gexp(l)], 0));
    return s;
  }, i.getLengthInBits = function(o, s) {
    if (1 <= s && s < 10)
      switch (o) {
        case Ue.MODE_NUMBER:
          return 10;
        case Ue.MODE_ALPHA_NUM:
          return 9;
        case Ue.MODE_8BIT_BYTE:
          return 8;
        case Ue.MODE_KANJI:
          return 8;
        default:
          throw "mode:" + o;
      }
    else if (s < 27)
      switch (o) {
        case Ue.MODE_NUMBER:
          return 12;
        case Ue.MODE_ALPHA_NUM:
          return 11;
        case Ue.MODE_8BIT_BYTE:
          return 16;
        case Ue.MODE_KANJI:
          return 10;
        default:
          throw "mode:" + o;
      }
    else if (s < 41)
      switch (o) {
        case Ue.MODE_NUMBER:
          return 14;
        case Ue.MODE_ALPHA_NUM:
          return 13;
        case Ue.MODE_8BIT_BYTE:
          return 16;
        case Ue.MODE_KANJI:
          return 12;
        default:
          throw "mode:" + o;
      }
    else
      throw "type:" + s;
  }, i.getLostPoint = function(o) {
    const s = o.getModuleCount();
    let l = 0;
    for (let c = 0; c < s; c += 1)
      for (let d = 0; d < s; d += 1) {
        let S = 0;
        const y = o.isDark(c, d);
        for (let I = -1; I <= 1; I += 1)
          if (!(c + I < 0 || s <= c + I))
            for (let j = -1; j <= 1; j += 1)
              d + j < 0 || s <= d + j || I == 0 && j == 0 || y == o.isDark(c + I, d + j) && (S += 1);
        S > 5 && (l += 3 + S - 5);
      }
    for (let c = 0; c < s - 1; c += 1)
      for (let d = 0; d < s - 1; d += 1) {
        let S = 0;
        o.isDark(c, d) && (S += 1), o.isDark(c + 1, d) && (S += 1), o.isDark(c, d + 1) && (S += 1), o.isDark(c + 1, d + 1) && (S += 1), (S == 0 || S == 4) && (l += 3);
      }
    for (let c = 0; c < s; c += 1)
      for (let d = 0; d < s - 6; d += 1)
        o.isDark(c, d) && !o.isDark(c, d + 1) && o.isDark(c, d + 2) && o.isDark(c, d + 3) && o.isDark(c, d + 4) && !o.isDark(c, d + 5) && o.isDark(c, d + 6) && (l += 40);
    for (let c = 0; c < s; c += 1)
      for (let d = 0; d < s - 6; d += 1)
        o.isDark(d, c) && !o.isDark(d + 1, c) && o.isDark(d + 2, c) && o.isDark(d + 3, c) && o.isDark(d + 4, c) && !o.isDark(d + 5, c) && o.isDark(d + 6, c) && (l += 40);
    let f = 0;
    for (let c = 0; c < s; c += 1)
      for (let d = 0; d < s; d += 1)
        o.isDark(d, c) && (f += 1);
    const p = Math.abs(100 * f / s / s - 50) / 5;
    return l += p * 10, l;
  }, i;
})(), rr = (function() {
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
})(), xn = function(e, t) {
  if (typeof e.length > "u")
    throw e.length + "/" + t;
  const r = (function() {
    let i = 0;
    for (; i < e.length && e[i] == 0; )
      i += 1;
    const a = new Array(e.length - i + t);
    for (let o = 0; o < e.length - i; o += 1)
      a[o] = e[o + i];
    return a;
  })(), n = {};
  return n.getAt = function(i) {
    return r[i];
  }, n.getLength = function() {
    return r.length;
  }, n.multiply = function(i) {
    const a = new Array(n.getLength() + i.getLength() - 1);
    for (let o = 0; o < n.getLength(); o += 1)
      for (let s = 0; s < i.getLength(); s += 1)
        a[o + s] ^= rr.gexp(rr.glog(n.getAt(o)) + rr.glog(i.getAt(s)));
    return xn(a, 0);
  }, n.mod = function(i) {
    if (n.getLength() - i.getLength() < 0)
      return n;
    const a = rr.glog(n.getAt(0)) - rr.glog(i.getAt(0)), o = new Array(n.getLength());
    for (let s = 0; s < n.getLength(); s += 1)
      o[s] = n.getAt(s);
    for (let s = 0; s < i.getLength(); s += 1)
      o[s] ^= rr.gexp(rr.glog(i.getAt(s)) + a);
    return xn(o, 0).mod(i);
  }, n;
}, ks = (function() {
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
  ], t = function(i, a) {
    const o = {};
    return o.totalCount = i, o.dataCount = a, o;
  }, r = {}, n = function(i, a) {
    switch (a) {
      case dn.L:
        return e[(i - 1) * 4 + 0];
      case dn.M:
        return e[(i - 1) * 4 + 1];
      case dn.Q:
        return e[(i - 1) * 4 + 2];
      case dn.H:
        return e[(i - 1) * 4 + 3];
      default:
        return;
    }
  };
  return r.getRSBlocks = function(i, a) {
    const o = n(i, a);
    if (typeof o > "u")
      throw "bad rs block @ typeNumber:" + i + "/errorCorrectionLevel:" + a;
    const s = o.length / 3, l = [];
    for (let f = 0; f < s; f += 1) {
      const p = o[f * 3 + 0], c = o[f * 3 + 1], d = o[f * 3 + 2];
      for (let S = 0; S < p; S += 1)
        l.push(t(c, d));
    }
    return l;
  }, r;
})(), Es = function() {
  const e = [];
  let t = 0;
  const r = {};
  return r.getBuffer = function() {
    return e;
  }, r.getAt = function(n) {
    const i = Math.floor(n / 8);
    return (e[i] >>> 7 - n % 8 & 1) == 1;
  }, r.put = function(n, i) {
    for (let a = 0; a < i; a += 1)
      r.putBit((n >>> i - a - 1 & 1) == 1);
  }, r.getLengthInBits = function() {
    return t;
  }, r.putBit = function(n) {
    const i = Math.floor(t / 8);
    e.length <= i && e.push(0), n && (e[i] |= 128 >>> t % 8), t += 1;
  }, r;
}, Rl = function(e) {
  const t = Ue.MODE_NUMBER, r = e, n = {};
  n.getMode = function() {
    return t;
  }, n.getLength = function(o) {
    return r.length;
  }, n.write = function(o) {
    const s = r;
    let l = 0;
    for (; l + 2 < s.length; )
      o.put(i(s.substring(l, l + 3)), 10), l += 3;
    l < s.length && (s.length - l == 1 ? o.put(i(s.substring(l, l + 1)), 4) : s.length - l == 2 && o.put(i(s.substring(l, l + 2)), 7));
  };
  const i = function(o) {
    let s = 0;
    for (let l = 0; l < o.length; l += 1)
      s = s * 10 + a(o.charAt(l));
    return s;
  }, a = function(o) {
    if ("0" <= o && o <= "9")
      return o.charCodeAt(0) - 48;
    throw "illegal char :" + o;
  };
  return n;
}, Bl = function(e) {
  const t = Ue.MODE_ALPHA_NUM, r = e, n = {};
  n.getMode = function() {
    return t;
  }, n.getLength = function(a) {
    return r.length;
  }, n.write = function(a) {
    const o = r;
    let s = 0;
    for (; s + 1 < o.length; )
      a.put(
        i(o.charAt(s)) * 45 + i(o.charAt(s + 1)),
        11
      ), s += 2;
    s < o.length && a.put(i(o.charAt(s)), 6);
  };
  const i = function(a) {
    if ("0" <= a && a <= "9")
      return a.charCodeAt(0) - 48;
    if ("A" <= a && a <= "Z")
      return a.charCodeAt(0) - 65 + 10;
    switch (a) {
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
        throw "illegal char :" + a;
    }
  };
  return n;
}, Nl = function(e) {
  const t = Ue.MODE_8BIT_BYTE, r = rn.stringToBytes(e), n = {};
  return n.getMode = function() {
    return t;
  }, n.getLength = function(i) {
    return r.length;
  }, n.write = function(i) {
    for (let a = 0; a < r.length; a += 1)
      i.put(r[a], 8);
  }, n;
}, Il = function(e) {
  const t = Ue.MODE_KANJI, r = rn.stringToBytes;
  (function(a, o) {
    const s = r(a);
    if (s.length != 2 || (s[0] << 8 | s[1]) != o)
      throw "sjis not supported.";
  })("友", 38726);
  const n = r(e), i = {};
  return i.getMode = function() {
    return t;
  }, i.getLength = function(a) {
    return ~~(n.length / 2);
  }, i.write = function(a) {
    const o = n;
    let s = 0;
    for (; s + 1 < o.length; ) {
      let l = (255 & o[s]) << 8 | 255 & o[s + 1];
      if (33088 <= l && l <= 40956)
        l -= 33088;
      else if (57408 <= l && l <= 60351)
        l -= 49472;
      else
        throw "illegal char at " + (s + 1) + "/" + l;
      l = (l >>> 8 & 255) * 192 + (l & 255), a.put(l, 13), s += 2;
    }
    if (s < o.length)
      throw "illegal char at " + (s + 1);
  }, i;
}, mo = function() {
  const e = [], t = {};
  return t.writeByte = function(r) {
    e.push(r & 255);
  }, t.writeShort = function(r) {
    t.writeByte(r), t.writeByte(r >>> 8);
  }, t.writeBytes = function(r, n, i) {
    n = n || 0, i = i || r.length;
    for (let a = 0; a < i; a += 1)
      t.writeByte(r[a + n]);
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
}, Ol = function() {
  let e = 0, t = 0, r = 0, n = "";
  const i = {}, a = function(s) {
    n += String.fromCharCode(o(s & 63));
  }, o = function(s) {
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
      a(e >>> t - 6), t -= 6;
  }, i.flush = function() {
    if (t > 0 && (a(e << 6 - t), e = 0, t = 0), r % 3 != 0) {
      const s = 3 - r % 3;
      for (let l = 0; l < s; l += 1)
        n += "=";
    }
  }, i.toString = function() {
    return n;
  }, i;
}, Pl = function(e) {
  const t = e;
  let r = 0, n = 0, i = 0;
  const a = {};
  a.read = function() {
    for (; i < 8; ) {
      if (r >= t.length) {
        if (i == 0)
          return -1;
        throw "unexpected end of file./" + i;
      }
      const l = t.charAt(r);
      if (r += 1, l == "=")
        return i = 0, -1;
      if (l.match(/^\s$/))
        continue;
      n = n << 6 | o(l.charCodeAt(0)), i += 6;
    }
    const s = n >>> i - 8 & 255;
    return i -= 8, s;
  };
  const o = function(s) {
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
  return a;
}, jl = function(e, t) {
  const r = e, n = t, i = new Array(e * t), a = {};
  a.setPixel = function(f, p, c) {
    i[p * r + f] = c;
  }, a.write = function(f) {
    f.writeString("GIF87a"), f.writeShort(r), f.writeShort(n), f.writeByte(128), f.writeByte(0), f.writeByte(0), f.writeByte(0), f.writeByte(0), f.writeByte(0), f.writeByte(255), f.writeByte(255), f.writeByte(255), f.writeString(","), f.writeShort(0), f.writeShort(0), f.writeShort(r), f.writeShort(n), f.writeByte(0);
    const p = 2, c = s(p);
    f.writeByte(p);
    let d = 0;
    for (; c.length - d > 255; )
      f.writeByte(255), f.writeBytes(c, d, 255), d += 255;
    f.writeByte(c.length - d), f.writeBytes(c, d, c.length - d), f.writeByte(0), f.writeString(";");
  };
  const o = function(f) {
    const p = f;
    let c = 0, d = 0;
    const S = {};
    return S.write = function(y, I) {
      if (y >>> I)
        throw "length over";
      for (; c + I >= 8; )
        p.writeByte(255 & (y << c | d)), I -= 8 - c, y >>>= 8 - c, d = 0, c = 0;
      d = y << c | d, c = c + I;
    }, S.flush = function() {
      c > 0 && p.writeByte(d);
    }, S;
  }, s = function(f) {
    const p = 1 << f, c = (1 << f) + 1;
    let d = f + 1;
    const S = l();
    for (let H = 0; H < p; H += 1)
      S.add(String.fromCharCode(H));
    S.add(String.fromCharCode(p)), S.add(String.fromCharCode(c));
    const y = mo(), I = o(y);
    I.write(p, d);
    let j = 0, W = String.fromCharCode(i[j]);
    for (j += 1; j < i.length; ) {
      const H = String.fromCharCode(i[j]);
      j += 1, S.contains(W + H) ? W = W + H : (I.write(S.indexOf(W), d), S.size() < 4095 && (S.size() == 1 << d && (d += 1), S.add(W + H)), W = H);
    }
    return I.write(S.indexOf(W), d), I.write(c, d), I.flush(), y.toByteArray();
  }, l = function() {
    const f = {};
    let p = 0;
    const c = {};
    return c.add = function(d) {
      if (c.contains(d))
        throw "dup key:" + d;
      f[d] = p, p += 1;
    }, c.size = function() {
      return p;
    }, c.indexOf = function(d) {
      return f[d];
    }, c.contains = function(d) {
      return typeof f[d] < "u";
    }, c;
  };
  return a;
}, Fl = function(e, t, r) {
  const n = jl(e, t);
  for (let s = 0; s < t; s += 1)
    for (let l = 0; l < e; l += 1)
      n.setPixel(l, s, r(l, s));
  const i = mo();
  n.write(i);
  const a = Ol(), o = i.toByteArray();
  for (let s = 0; s < o.length; s += 1)
    a.writeByte(o[s]);
  return a.flush(), "data:image/gif;base64," + a;
};
rn.stringToBytes;
var Ul = /* @__PURE__ */ R("<div> </div>"), Hl = /* @__PURE__ */ R('<div class="fixed top-4 right-4 z-50 flex flex-col gap-2"></div>'), Jl = /* @__PURE__ */ R('<div class="mt-4 pt-4 border-t border-blue-200"><div class="flex items-start gap-4"><div class="bg-white border border-gray-200 rounded-lg p-2 shrink-0" style="width: 200px; height: 200px;"></div> <div class="flex flex-col gap-2"><span class="text-sm font-medium text-blue-800">QR Code</span> <p class="text-xs text-gray-600">Scan to open the invitation link. Share via screenshot, print, or display on screen.</p> <button class="mt-1 inline-flex items-center gap-1.5 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors w-fit"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg> Download QR</button></div></div></div>'), $l = /* @__PURE__ */ R('<div class="mt-4 border border-blue-200 bg-blue-50 rounded-lg p-4"><div class="flex items-center gap-2 mb-2"><span class="text-blue-800 font-medium text-sm">Invitation Link</span></div> <div class="flex items-center gap-2"><code class="flex-1 bg-white border border-blue-200 rounded px-3 py-2 text-sm font-mono break-all select-all"> </code> <button> </button></div> <p class="mt-2 text-sm text-amber-700 font-medium">⚠ Copy this link now — it cannot be retrieved later.</p> <!></div>'), Vl = /* @__PURE__ */ R('<div class="text-center py-10"><div class="inline-block animate-spin h-8 w-8 border-4 border-blue-500 border-t-transparent rounded-full"></div> <p class="mt-2 text-gray-600">Loading invitations…</p></div>'), Yl = /* @__PURE__ */ R('<div class="text-center py-10"><p class="text-gray-500">No invitation codes found.</p></div>'), Gl = /* @__PURE__ */ R('<button class="px-3 py-1 text-xs font-medium text-red-600 border border-red-200 rounded-lg hover:bg-red-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"> </button>'), ql = /* @__PURE__ */ R('<tr class="hover:bg-gray-50 transition-colors"><td class="px-4 py-3"><span class="font-mono text-xs bg-gray-100 px-2 py-1 rounded cursor-help"> </span></td><td class="px-4 py-3"><span> </span></td><td class="px-4 py-3 text-gray-700"> </td><td class="px-4 py-3"><span> </span></td><td class="px-4 py-3 text-gray-600 text-xs"> </td><td class="px-4 py-3 text-right"><!></td></tr>'), Kl = /* @__PURE__ */ R('<div class="overflow-x-auto"><table class="w-full text-sm"><thead class="bg-gray-50 border-b border-gray-200"><tr><th class="px-4 py-3 text-left font-medium text-gray-600">Code Hash</th><th class="px-4 py-3 text-left font-medium text-gray-600">Profile</th><th class="px-4 py-3 text-left font-medium text-gray-600">Uses</th><th class="px-4 py-3 text-left font-medium text-gray-600">Status</th><th class="px-4 py-3 text-left font-medium text-gray-600">Expires</th><th class="px-4 py-3 text-right font-medium text-gray-600">Actions</th></tr></thead><tbody class="divide-y divide-gray-200"></tbody></table></div>'), Wl = /* @__PURE__ */ R('<!> <div class="space-y-6"><div class="bg-white shadow-sm rounded-lg p-6 border border-gray-200"><h2 class="text-lg font-semibold text-gray-900 mb-4">Generate New Invitation</h2> <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4"><div><label for="inv-profile" class="block text-sm font-medium text-gray-700 mb-1">Profile</label> <select id="inv-profile" class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"><option>Member</option><option>Administrator</option></select></div> <div><label for="inv-max-uses" class="block text-sm font-medium text-gray-700 mb-1">Max Uses</label> <input id="inv-max-uses" type="number" min="1" class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/></div> <div><label for="inv-expiry" class="block text-sm font-medium text-gray-700 mb-1">Expires in (hours)</label> <input id="inv-expiry" type="number" min="1" class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/></div></div> <button class="px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed font-medium transition-colors"> </button> <!></div> <div class="bg-white shadow-sm rounded-lg border border-gray-200"><div class="px-6 py-4 border-b border-gray-200 flex items-center justify-between"><h2 class="text-lg font-semibold text-gray-900">Invitations</h2> <button class="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50" title="Refresh"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg></button></div> <!></div></div>', 1);
function Ql(e, t) {
  Ui(t, !0);
  const r = t.ctx.theme?.cn ?? ((...D) => D.filter(Boolean).join(" "));
  let n = /* @__PURE__ */ B(Nt([])), i = /* @__PURE__ */ B(0), a = /* @__PURE__ */ B("member"), o = /* @__PURE__ */ B(1), s = /* @__PURE__ */ B(24), l = /* @__PURE__ */ B(!1), f = /* @__PURE__ */ B(null), p = /* @__PURE__ */ B(!1), c = /* @__PURE__ */ B(null), d = /* @__PURE__ */ B(Nt([])), S = /* @__PURE__ */ B(!1), y = /* @__PURE__ */ B(null);
  function I(D, V = "success") {
    const ce = Gs(i);
    m(n, [...u(n), { id: ce, text: D, type: V }], !0), setTimeout(
      () => {
        m(n, u(n).filter((he) => he.id !== ce), !0);
      },
      4e3
    );
  }
  function j(D) {
    const V = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", ce = crypto.getRandomValues(new Uint8Array(D));
    return Array.from(ce, (he) => V[he % V.length]).join("");
  }
  async function W(D) {
    const ce = new TextEncoder().encode(D), he = await crypto.subtle.digest("SHA-256", ce);
    return Array.from(new Uint8Array(he)).map((le) => le.toString(16).padStart(2, "0")).join("");
  }
  async function H() {
    m(l, !0), m(f, null), m(c, null), m(p, !1);
    try {
      const D = j(16), V = await W(D);
      await t.ctx.callSync("generate_registration_url", {
        code_hash: V,
        profile: u(a),
        max_uses: u(o),
        expires_in_hours: u(s),
        user_id: "admin",
        created_by: "admin",
        frontend_url: ""
      });
      const ce = `${window.location.origin}/join?invite=${D}`;
      m(f, ce), m(c, be(ce), !0), I("Invitation code generated successfully"), await ke();
    } catch (D) {
      I(`Failed to generate invitation: ${D?.message || String(D)}`, "error");
    } finally {
      m(l, !1);
    }
  }
  async function pe() {
    u(f) && (await navigator.clipboard.writeText(u(f)), m(p, !0), I("Link copied to clipboard"), setTimeout(
      () => {
        m(p, !1);
      },
      3e3
    ));
  }
  function be(D) {
    const V = rn(0, "M");
    V.addData(D), V.make();
    const ce = V.getModuleCount(), he = 4, Ne = ce + he * 2, le = [];
    for (let Re = 0; Re < ce; Re++)
      for (let lt = 0; lt < ce; lt++)
        V.isDark(Re, lt) && le.push(`<rect x="${lt + he}" y="${Re + he}" width="1" height="1"/>`);
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${Ne} ${Ne}" shape-rendering="crispEdges"><rect width="${Ne}" height="${Ne}" fill="#fff"/><g fill="#000">${le.join("")}</g></svg>`;
  }
  function de() {
    if (!u(c)) return;
    const D = 400, V = document.createElement("canvas");
    V.width = D, V.height = D;
    const ce = V.getContext("2d"), he = new Image(), Ne = new Blob([u(c)], { type: "image/svg+xml;charset=utf-8" }), le = URL.createObjectURL(Ne);
    he.onload = () => {
      ce.fillStyle = "#fff", ce.fillRect(0, 0, D, D), ce.drawImage(he, 0, 0, D, D), URL.revokeObjectURL(le);
      const Re = document.createElement("a");
      Re.download = "invite-qr.png", Re.href = V.toDataURL("image/png"), Re.click(), I("QR code downloaded");
    }, he.src = le;
  }
  async function ke() {
    m(S, !0);
    try {
      const D = await t.ctx.callSync("get_registration_codes", { include_used: !0 }), V = D?.data ?? D;
      m(d, Array.isArray(V) ? V : V?.codes ?? [], !0);
    } catch (D) {
      I(`Failed to load codes: ${D?.message || String(D)}`, "error"), m(d, [], !0);
    } finally {
      m(S, !1);
    }
  }
  async function b(D) {
    m(y, D, !0);
    try {
      await t.ctx.callSync("revoke_registration_code", { code_hash: D }), I("Invitation revoked"), await ke();
    } catch (V) {
      I(`Failed to revoke: ${V?.message || String(V)}`, "error");
    } finally {
      m(y, null);
    }
  }
  function w(D) {
    return D.revoked ? { label: "Revoked", color: "bg-red-100 text-red-700" } : D.max_uses > 0 && D.uses_count >= D.max_uses ? { label: "Used", color: "bg-gray-100 text-gray-700" } : D.expires_at && new Date(D.expires_at) < /* @__PURE__ */ new Date() ? { label: "Expired", color: "bg-yellow-100 text-yellow-700" } : { label: "Active", color: "bg-green-100 text-green-700" };
  }
  function h(D) {
    if (!D) return "Never";
    const V = new Date(D), ce = /* @__PURE__ */ new Date(), he = V.getTime() - ce.getTime();
    return he < 0 ? "Expired" : he < 36e5 ? `${Math.round(he / 6e4)}m remaining` : he < 864e5 ? `${Math.round(he / 36e5)}h remaining` : V.toLocaleDateString();
  }
  zs(() => {
    ke();
  });
  var k = Wl(), x = ut(k);
  {
    var C = (D) => {
      var V = Hl();
      Vt(V, 21, () => u(n), (ce) => ce.id, (ce, he) => {
        var Ne = Ul(), le = _(Ne);
        $(
          (Re) => {
            gt(Ne, 1, Re), P(le, u(he).text);
          },
          [
            () => ht(r("px-4 py-3 rounded-lg shadow-lg text-sm font-medium transition-all", u(he).type === "error" ? "bg-red-600 text-white" : "bg-green-600 text-white"))
          ]
        ), L(ce, Ne);
      }), L(D, V);
    };
    Z(x, (D) => {
      u(n).length > 0 && D(C);
    });
  }
  var N = E(x, 2), ee = _(N), re = E(_(ee), 2), ve = _(re), O = E(_(ve), 2), ae = _(O);
  ae.value = ae.__value = "member";
  var Ae = E(ae);
  Ae.value = Ae.__value = "admin";
  var Se = E(ve, 2), nn = E(_(Se), 2), Nr = E(Se, 2), Pe = E(_(Nr), 2), Pt = E(re, 2), Cn = _(Pt), Mn = E(Pt, 2);
  {
    var ii = (D) => {
      var V = $l(), ce = E(_(V), 2), he = _(ce), Ne = _(he), le = E(he, 2), Re = _(le), lt = E(ce, 4);
      {
        var Or = (et) => {
          var Qt = Jl(), jt = _(Qt), Tt = _(jt);
          yl(Tt, () => u(c), !0);
          var mt = E(Tt, 2), Ft = E(_(mt), 4);
          oe("click", Ft, de), L(et, Qt);
        };
        Z(lt, (et) => {
          u(c) && et(Or);
        });
      }
      $(
        (et) => {
          P(Ne, u(f)), gt(le, 1, et), P(Re, u(p) ? "Copied!" : "Copy");
        },
        [
          () => ht(r("px-4 py-2 rounded-lg text-sm font-medium transition-colors shrink-0", u(p) ? "bg-green-600 text-white" : "bg-blue-600 text-white hover:bg-blue-700"))
        ]
      ), oe("click", le, pe), L(D, V);
    };
    Z(Mn, (D) => {
      u(f) && D(ii);
    });
  }
  var Dn = E(ee, 2), sn = _(Dn), Ln = E(_(sn), 2), si = E(sn, 2);
  {
    var Ir = (D) => {
      var V = Vl();
      L(D, V);
    }, oi = (D) => {
      var V = Yl();
      L(D, V);
    }, ai = (D) => {
      var V = Kl(), ce = _(V), he = E(_(ce));
      Vt(he, 21, () => u(d), gr, (Ne, le) => {
        const Re = /* @__PURE__ */ Jn(() => w(u(le)));
        var lt = ql(), Or = _(lt), et = _(Or), Qt = _(et), jt = E(Or), Tt = _(jt), mt = _(Tt), Ft = E(jt), Pr = _(Ft), vr = E(Ft), Ut = _(vr), Zt = _(Ut), hr = E(vr), li = _(hr), ui = E(hr), fi = _(ui);
        {
          var ci = (Xt) => {
            var Ht = Gl(), on = _(Ht);
            $(() => {
              Ht.disabled = u(y) === u(le).code_hash, P(on, u(y) === u(le).code_hash ? "Revoking…" : "Revoke");
            }), oe("click", Ht, () => b(u(le).code_hash)), L(Xt, Ht);
          };
          Z(fi, (Xt) => {
            !u(le).revoked && !(u(le).max_uses > 0 && u(le).uses_count >= u(le).max_uses) && Xt(ci);
          });
        }
        $(
          (Xt, Ht, on, Rn) => {
            Vn(et, "title", u(le).code_hash), P(Qt, `${Xt ?? ""}…`), gt(Tt, 1, Ht), P(mt, u(le).profile === "admin" ? "Admin" : "Member"), P(Pr, `${u(le).uses_count ?? ""} / ${(u(le).max_uses || "∞") ?? ""}`), gt(Ut, 1, on), P(Zt, u(Re).label), P(li, Rn);
          },
          [
            () => u(le).code_hash.slice(0, 12),
            () => ht(r("px-2 py-0.5 rounded-full text-xs font-medium", u(le).profile === "admin" ? "bg-purple-100 text-purple-700" : "bg-blue-100 text-blue-700")),
            () => ht(r("px-2 py-0.5 rounded-full text-xs font-medium", u(Re).color)),
            () => h(u(le).expires_at)
          ]
        ), L(Ne, lt);
      }), L(D, V);
    };
    Z(si, (D) => {
      u(S) ? D(Ir) : u(d).length === 0 ? D(oi, 1) : D(ai, -1);
    });
  }
  $(() => {
    Pt.disabled = u(l), P(Cn, u(l) ? "Generating…" : "Generate Invitation"), Ln.disabled = u(S);
  }), xo(O, () => u(a), (D) => m(a, D)), nr(nn, () => u(o), (D) => m(o, D)), nr(Pe, () => u(s), (D) => m(s, D)), oe("click", Pt, H), oe("click", Ln, ke), L(e, k), Hi();
}
po(["click"]);
var Zl = /* @__PURE__ */ R("<div> </div>"), Xl = /* @__PURE__ */ R('<div class="fixed top-4 right-4 z-50 flex flex-col gap-2"></div>'), zl = /* @__PURE__ */ R('<br/><span class="text-gray-500"> </span>', 1), eu = /* @__PURE__ */ R('<div class="fixed inset-0 bg-black/50 z-40 flex items-center justify-center"><div class="bg-white rounded-xl shadow-xl p-6 max-w-md mx-4"><h3 class="text-lg font-bold text-gray-900 mb-2">Confirm Delete</h3> <p class="text-gray-600 mb-4">Are you sure you want to delete <strong> </strong>? <!></p> <p class="text-red-600 text-sm mb-4">This action cannot be undone.</p> <div class="flex justify-end gap-3"><button class="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 font-medium">Cancel</button> <button class="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 font-medium">Delete</button></div></div></div>'), tu = /* @__PURE__ */ R('<div class="mb-4 bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg text-sm"> <button class="ml-2 text-red-600 hover:text-red-800 font-bold">&times;</button></div>'), ru = /* @__PURE__ */ R('<div class="text-xs text-gray-400">Loading…</div>'), nu = /* @__PURE__ */ R('<div class="text-xs text-red-500"> </div>'), iu = /* @__PURE__ */ R('<span class="mx-1">·</span> <span class="text-yellow-600 font-medium"> </span>', 1), su = /* @__PURE__ */ R('<div class="text-xs text-gray-500"> <!></div>'), ou = /* @__PURE__ */ R('<div class="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4"><div class="bg-white shadow-sm rounded-lg p-4 border border-gray-200"><div class="text-xs text-gray-500 uppercase tracking-wide">Entity Types</div> <div class="text-2xl font-bold text-gray-900 mt-1"> </div></div> <div class="bg-white shadow-sm rounded-lg p-4 border border-gray-200"><div class="text-xs text-gray-500 uppercase tracking-wide">Extensions</div> <div class="text-2xl font-bold text-gray-900 mt-1"> </div></div> <div class="bg-white shadow-sm rounded-lg p-4 border border-gray-200"><div class="text-xs text-gray-500 uppercase tracking-wide">Codexes</div> <div class="text-2xl font-bold text-gray-900 mt-1"> </div></div> <div class="bg-white shadow-sm rounded-lg p-4 border border-gray-200"><div class="text-xs text-gray-500 uppercase tracking-wide">Updates</div> <div> </div></div></div>'), au = /* @__PURE__ */ R('<div class="flex items-center gap-2 text-gray-400 text-sm"><div class="animate-spin h-4 w-4 border-2 border-blue-500 border-t-transparent rounded-full"></div> Loading types…</div>'), lu = /* @__PURE__ */ R("<option> </option>"), uu = /* @__PURE__ */ R('<select id="entity-type-select" class="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"></select>'), fu = /* @__PURE__ */ R("<button> </button>"), cu = /* @__PURE__ */ R('<div class="text-center py-10 p-6"><div class="inline-block animate-spin h-8 w-8 border-4 border-blue-500 border-t-transparent rounded-full"></div> <p class="mt-2 text-gray-600">Loading data…</p></div>'), du = /* @__PURE__ */ R('<div class="text-center py-10 p-6"><p class="text-gray-500 text-lg">No items loaded. Select an entity type and click "Load Data".</p></div>'), vu = /* @__PURE__ */ R('<span class="text-gray-700 truncate"> </span>'), hu = /* @__PURE__ */ R('<div class="min-w-0"><span class="font-semibold text-gray-700"> </span> <span class="text-gray-600 ml-2 break-all"> </span></div>'), gu = /* @__PURE__ */ R('<div class="mt-4 bg-gray-50 rounded-lg p-4 border border-gray-200"><div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm"></div> <div class="mt-3 pt-3 border-t border-gray-200"><details><summary class="text-xs text-gray-500 cursor-pointer hover:text-gray-700">Raw JSON</summary> <pre class="mt-2 p-3 bg-white rounded border border-gray-200 text-xs font-mono overflow-auto max-h-64 whitespace-pre-wrap break-all"> </pre></details></div></div>'), pu = /* @__PURE__ */ R('<div class="p-4 hover:bg-gray-50 transition"><div class="flex items-center justify-between"><div class="flex-1 min-w-0"><div class="flex items-center gap-3"><button class="text-blue-600 hover:text-blue-800 font-medium whitespace-nowrap"> </button> <!></div></div> <div class="flex items-center gap-1 ml-2 shrink-0"><button class="p-1.5 hover:bg-gray-100 text-gray-600 hover:text-gray-900 rounded transition-colors" title="Copy JSON"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path></svg></button> <button class="p-1.5 hover:bg-red-50 text-gray-400 hover:text-red-600 rounded transition-colors disabled:opacity-50" title="Delete entity"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg></button></div></div> <!></div>'), _u = /* @__PURE__ */ R('<div class="border-t border-gray-200 p-4 flex items-center justify-between"><div class="flex items-center gap-2"><button class="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed text-sm">First</button> <button class="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed text-sm">Prev</button></div> <span class="text-sm text-gray-600"> </span> <div class="flex items-center gap-2"><button class="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed text-sm">Next</button> <button class="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed text-sm">Last</button></div></div>'), bu = /* @__PURE__ */ R('<div class="divide-y divide-gray-200"></div> <!>', 1), xu = /* @__PURE__ */ R('<div class="mb-4 flex items-center gap-4"><button class="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed font-medium transition-colors"> </button> <div class="ml-auto text-gray-600 text-sm"><!></div></div> <div class="bg-white shadow-sm rounded-lg"><!></div>', 1), mu = /* @__PURE__ */ R('<div class="flex items-center gap-3 text-gray-600"><div class="animate-spin h-5 w-5 border-2 border-blue-500 border-t-transparent rounded-full"></div> Exporting…</div>'), yu = /* @__PURE__ */ R(", <strong> </strong> codexes", 1), wu = /* @__PURE__ */ R('<div class="border border-gray-200 rounded-lg overflow-hidden"><div class="bg-gray-50 px-4 py-3 flex items-center justify-between border-b border-gray-200 flex-wrap gap-2"><div class="text-sm text-gray-700"><strong> </strong> entities <!></div> <div class="flex gap-2"><button class="px-4 py-1.5 bg-green-600 text-white text-sm rounded-lg hover:bg-green-700 font-medium transition-colors">Download JSON</button> <button class="px-4 py-1.5 border border-gray-300 text-sm rounded-lg hover:bg-gray-50 font-medium transition-colors">Copy to Clipboard</button></div></div> <div class="max-h-96 overflow-auto"><pre class="p-4 text-xs text-gray-800 font-mono whitespace-pre-wrap break-all"> </pre></div></div>'), ku = /* @__PURE__ */ R('<div class="bg-white shadow-sm rounded-lg p-6"><h2 class="text-lg font-semibold text-gray-900 mb-4">Export Entities</h2> <p class="text-gray-600 text-sm mb-6">Export entities as a JSON file. You can export a single entity type or all types at once.</p> <div class="flex gap-3 mb-6"><button class="px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed font-medium transition-colors"> </button> <button class="px-5 py-2.5 bg-gray-700 text-white rounded-lg hover:bg-gray-800 disabled:bg-gray-400 disabled:cursor-not-allowed font-medium transition-colors"> </button></div> <!> <!></div>'), Eu = /* @__PURE__ */ R('<p class="text-blue-600 font-medium"> </p> <p class="text-sm text-gray-500 mt-1">Click or drop to replace</p>', 1), Au = /* @__PURE__ */ R('<svg class="mx-auto h-10 w-10 text-gray-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg> <p class="text-gray-600 font-medium">Drop a JSON file here or click to browse</p> <p class="text-sm text-gray-400 mt-1">Accepts .json files</p>', 1), Su = /* @__PURE__ */ R('<div role="button" tabindex="0"><input type="file" accept=".json" class="hidden"/> <!></div>'), Tu = /* @__PURE__ */ R('<button class="absolute top-2 right-2 px-2 py-1 text-xs text-gray-500 hover:text-gray-700 bg-white border border-gray-200 rounded">Clear</button>'), Cu = /* @__PURE__ */ R('<div class="relative"><textarea class="w-full h-64 p-4 border border-gray-300 rounded-lg font-mono text-sm resize-y focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" spellcheck="false"></textarea> <!></div>'), Mu = /* @__PURE__ */ R('<span class="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"> </span>'), Du = /* @__PURE__ */ R('<div class="bg-green-50 px-4 py-3 border-b border-green-200"><p class="text-sm font-medium text-green-800"> <!></p></div> <div class="px-4 py-3"><div class="flex flex-wrap gap-2"></div> <div class="mt-4 flex gap-3"><button class="px-5 py-2.5 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed font-medium transition-colors"> </button> <button class="px-5 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 font-medium disabled:opacity-50 transition-colors">Cancel</button></div></div>', 1), Lu = /* @__PURE__ */ R('<div class="bg-red-50 px-4 py-3"><p class="text-sm font-medium text-red-800">Invalid JSON</p> <p class="text-sm text-red-600 mt-1"> </p></div>'), Ru = /* @__PURE__ */ R("<div><!></div>"), Bu = /* @__PURE__ */ R("<li> </li>"), Nu = /* @__PURE__ */ R('<ul class="mt-1 list-disc list-inside text-red-600"></ul>'), Iu = /* @__PURE__ */ R('<p class="text-red-600"> </p> <!>', 1), Ou = /* @__PURE__ */ R('<div class="mt-2 text-sm text-green-700"><p> </p> <p> </p> <!></div>'), Pu = /* @__PURE__ */ R('<p class="text-sm font-medium text-green-800">Import complete</p> <!>', 1), ju = /* @__PURE__ */ R('<p class="text-sm font-medium text-red-800">Import failed</p> <p class="text-sm text-red-600 mt-1"> </p>', 1), Fu = /* @__PURE__ */ R('<div><div class="px-4 py-3"><!></div></div>'), Uu = /* @__PURE__ */ R('<div class="bg-white shadow-sm rounded-lg p-6"><h2 class="text-lg font-semibold text-gray-900 mb-4">Import Entities</h2> <p class="text-gray-600 text-sm mb-6">Import entities from a JSON file or paste JSON directly. Existing entities with the same type and ID will be updated (upsert).</p> <div class="flex gap-2 mb-4"><button>Upload File</button> <button>JSON Editor</button></div> <!> <!> <!></div>'), Hu = /* @__PURE__ */ R('<div class="flex items-center justify-center py-10"><div class="animate-spin h-8 w-8 border-4 border-blue-500 border-t-transparent rounded-full"></div></div>'), Ju = /* @__PURE__ */ R('<div class="mt-2 flex items-center gap-3"><img alt="Logo preview" class="h-12 w-12 object-contain rounded border border-gray-200 bg-gray-50"/> <span class="text-xs text-gray-500">Preview</span></div>'), $u = /* @__PURE__ */ R('<div class="mt-2"><img alt="Background preview" class="h-24 w-full object-cover rounded border border-gray-200"/> <span class="text-xs text-gray-500">Preview</span></div>'), Vu = /* @__PURE__ */ R('<div class="p-3 bg-green-50 border border-green-200 rounded-lg text-sm text-green-800"> </div>'), Yu = /* @__PURE__ */ R('<div class="p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-800"> </div>'), Gu = /* @__PURE__ */ R(`<div class="space-y-5"><div><label for="rs-name" class="block text-sm font-medium text-gray-700 mb-1">Realm Name</label> <input id="rs-name" type="text" class="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"/></div> <div><label for="rs-desc" class="block text-sm font-medium text-gray-700 mb-1">Description</label> <textarea id="rs-desc" rows="2" class="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-y"></textarea></div> <div><label for="rs-welcome" class="block text-sm font-medium text-gray-700 mb-1">Welcome Message</label> <textarea id="rs-welcome" rows="3" class="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-y"></textarea></div> <div><label for="rs-logo" class="block text-sm font-medium text-gray-700 mb-1">Logo URL</label> <input id="rs-logo" type="url" placeholder="https://example.com/logo.png" class="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"/> <!></div> <div><label for="rs-bg" class="block text-sm font-medium text-gray-700 mb-1">Background Image URL</label> <input id="rs-bg" type="url" placeholder="https://example.com/background.png" class="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"/> <!></div> <div class="flex items-center gap-3"><label for="rs-open-reg" class="relative inline-flex items-center cursor-pointer"><input id="rs-open-reg" type="checkbox" class="sr-only peer"/> <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-600 peer-focus:ring-2 peer-focus:ring-blue-300 after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full"></div></label> <div><span class="text-sm font-medium text-gray-700">Open Registration</span> <p class="text-xs text-gray-500">When enabled, anyone can join without an invite code.</p></div></div> <!> <!> <div class="pt-2"><button class="px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed font-medium transition-colors"> </button></div></div>`), qu = /* @__PURE__ */ R(`<div class="bg-white shadow-sm rounded-lg p-6"><h2 class="text-lg font-semibold text-gray-900 mb-1">Realm Settings</h2> <p class="text-gray-600 text-sm mb-6">Configure your realm's name, description, branding, and registration settings.</p> <!></div>`), Ku = /* @__PURE__ */ R('<!> <!> <div class="w-full px-4 max-w-none"><div class="flex justify-between items-center mb-6"><div><h1 class="text-3xl font-bold text-gray-900">Admin Dashboard</h1> <p class="text-gray-600 mt-1">Manage realm entities</p></div> <button class="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50" title="Refresh"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg></button></div> <!> <button class="block w-full mb-4 bg-white shadow-sm rounded-lg p-4 border border-gray-200 hover:border-blue-400 hover:shadow transition-all text-left cursor-pointer"><div class="flex items-center justify-between gap-4"><div class="flex items-center gap-3"><div class="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center text-xl">📦</div> <div><div class="text-sm font-medium text-gray-700">Packages</div> <!></div></div> <span class="text-blue-600 text-sm font-medium">Manage →</span></div></button> <!> <div class="mb-4 bg-white shadow-sm rounded-lg p-4"><div class="flex items-center gap-4 flex-wrap"><label for="entity-type-select" class="font-medium text-gray-700">Entity Type:</label> <!></div></div> <div class="mb-4 border-b border-gray-200"><nav class="flex gap-1" aria-label="Tabs"></nav></div> <!></div>', 1);
function Wu(e, t) {
  Ui(t, !0);
  const r = t.ctx.theme?.cn ?? ((...g) => g.filter(Boolean).join(" ")), n = {
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
  let i = /* @__PURE__ */ B(Nt([])), a = /* @__PURE__ */ B(""), o = /* @__PURE__ */ B("browse"), s = /* @__PURE__ */ B(!0), l = /* @__PURE__ */ B(""), f = /* @__PURE__ */ B(Nt([])), p = /* @__PURE__ */ B(0), c = /* @__PURE__ */ B(Nt([])), d = /* @__PURE__ */ B(!1), S = /* @__PURE__ */ B(null), y = /* @__PURE__ */ B(0), I = 10, j = /* @__PURE__ */ B(0), W = /* @__PURE__ */ B(0), H = /* @__PURE__ */ B(null), pe = /* @__PURE__ */ B(null), be = /* @__PURE__ */ B(!1), de = /* @__PURE__ */ B(null), ke = /* @__PURE__ */ B("file"), b = /* @__PURE__ */ B(""), w = /* @__PURE__ */ B(""), h = /* @__PURE__ */ B(null), k = /* @__PURE__ */ B(!1), x = /* @__PURE__ */ B(null), C = /* @__PURE__ */ B(void 0), N = /* @__PURE__ */ B(!1), ee = /* @__PURE__ */ B(null), re = /* @__PURE__ */ B(0), ve = /* @__PURE__ */ B(!0), O = /* @__PURE__ */ B(""), ae = /* @__PURE__ */ B(0), Ae = /* @__PURE__ */ B(0);
  function Se(g, A = "success") {
    const T = Gs(p);
    m(f, [...u(f), { id: T, text: g, type: A }], !0), setTimeout(
      () => {
        m(f, u(f).filter((M) => M.id !== T), !0);
      },
      4e3
    );
  }
  function nn(g) {
    return n[g] || "📊";
  }
  function Nr(g) {
    return g.replace(/([A-Z])/g, " $1").trim();
  }
  async function Pe(g, A = {}) {
    return await t.ctx.callSync(g, A);
  }
  function Pt(g) {
    if (g?.success && g?.data?.objectsListPaginated) {
      const A = g.data.objectsListPaginated;
      return { objects: (A.objects || []).map((M) => {
        try {
          return typeof M == "string" ? JSON.parse(M) : M;
        } catch {
          return M;
        }
      }), pagination: A.pagination };
    }
    return g?.data && Array.isArray(g.data) ? { objects: g.data, pagination: null } : { objects: [], pagination: null };
  }
  async function Cn() {
    m(s, !0), m(l, "");
    try {
      const g = await Pe("get_entity_types"), A = g?.data ?? (Array.isArray(g) ? g : []);
      m(
        i,
        A.map((T) => ({
          value: T,
          label: `${nn(T)} ${Nr(T)}`,
          className: T
        })),
        !0
      ), u(i).length > 0 && !u(a) && m(a, u(i)[0].value, !0);
    } catch (g) {
      m(l, g?.message || String(g), !0), m(i, [{ value: "User", label: "👤 User", className: "User" }], !0), u(a) || m(a, "User");
    } finally {
      m(s, !1);
    }
  }
  async function Mn() {
    m(ve, !0), m(O, "");
    try {
      const [g, A, T] = await Promise.all([
        t.ctx.backend.list_runtime_extensions().catch(() => "{}"),
        t.ctx.backend.list_codex_packages().catch(() => "{}"),
        t.ctx.backend.status().catch(() => null)
      ]), M = typeof g == "string" ? JSON.parse(g) : g, J = typeof A == "string" ? JSON.parse(A) : A, U = M?.success ? M.runtime_extensions ?? [] : [], ge = J?.success ? J.codex_packages ?? [] : [], Ee = M?.success ? M.all_manifests ?? {} : {}, Be = J?.success ? J.manifests ?? {} : {};
      m(ae, Object.keys(Ee).length || U.length, !0), m(
        Ae,
        Array.isArray(ge) ? ge.length : Object.keys(Be).length,
        !0
      ), m(ee, u(ae) + u(Ae));
      const He = T?.success && T?.data?.status?.registries || [];
      let Je = 0;
      for (const xe of He)
        try {
          const te = ii(xe.canister_id);
          if (!te) continue;
          const [F, ne] = await Promise.all([
            fetch(`${te}/api/extensions`, { headers: { Accept: "application/json" } }).then((ue) => ue.ok ? ue.json() : []).catch(() => []),
            fetch(`${te}/api/codices`, { headers: { Accept: "application/json" } }).then((ue) => ue.ok ? ue.json() : []).catch(() => [])
          ]);
          for (const ue of F) {
            if (!U.includes(ue.ext_id)) continue;
            const Ce = Ee?.[ue.ext_id]?.version;
            Ce && ue.latest && Dn(ue.latest, Ce) && Je++;
          }
          for (const ue of ne) {
            if (!ge.includes(ue.codex_id)) continue;
            const Ce = Be?.[ue.codex_id]?.version;
            Ce && ue.latest && Dn(ue.latest, Ce) && Je++;
          }
        } catch {
        }
      m(re, Je, !0);
    } catch (g) {
      m(O, g?.message ?? String(g), !0);
    } finally {
      m(ve, !1);
    }
  }
  function ii(g) {
    if (typeof window > "u") return null;
    const A = window.location.host;
    if (A.includes("localhost") || A.includes("127.0.0.1")) {
      const M = A.split(":")[1] ?? "4943";
      return `http://${g}.localhost:${M}`;
    }
    return `https://${g}.icp0.io`;
  }
  function Dn(g, A) {
    const T = (g || "").split("-", 1)[0].split(".").map((U) => parseInt(U, 10) || 0), M = (A || "").split("-", 1)[0].split(".").map((U) => parseInt(U, 10) || 0), J = Math.max(T.length, M.length);
    for (let U = 0; U < J; U++) {
      const ge = T[U] ?? 0, Ee = M[U] ?? 0;
      if (ge !== Ee) return ge > Ee;
    }
    return !1;
  }
  async function sn() {
    m(d, !0), m(S, null);
    try {
      const g = await t.ctx.backend.get_objects_paginated(u(a), u(y), I, "desc"), A = typeof g == "string" ? JSON.parse(g) : g, { objects: T, pagination: M } = Pt(A);
      m(c, T, !0), M ? (m(j, Number(M.total_items || 0), !0), m(W, Number(M.total_pages || 0), !0)) : (m(j, T.length, !0), m(W, 1));
    } catch (g) {
      m(l, g?.message || String(g), !0), m(c, [], !0);
    } finally {
      m(d, !1);
    }
  }
  function Ln(g) {
    m(S, u(S) === g ? null : g, !0);
  }
  function si(g) {
    navigator.clipboard.writeText(JSON.stringify(g, null, 2)), Se("JSON copied to clipboard");
  }
  function Ir(g) {
    m(y, g, !0), sn();
  }
  function oi(g) {
    m(pe, g, !0);
  }
  function ai() {
    m(pe, null);
  }
  async function D() {
    if (!u(pe)) return;
    const g = u(pe), A = g._type || u(a), T = g._id || g.id;
    m(pe, null), m(H, String(T), !0);
    try {
      const M = await Pe("delete_entity", { entity_type: A, entity_id: String(T) });
      M?.success ? (m(c, u(c).filter((J) => !((J._id || J.id) === T && (J._type || u(a)) === A)), !0), m(j, Math.max(0, u(j) - 1), !0), Se(`Deleted ${A}#${T}`)) : Se(M?.error || "Delete failed", "error");
    } catch (M) {
      Se(`Delete error: ${M?.message}`, "error");
    } finally {
      m(H, null);
    }
  }
  async function V(g = !1) {
    m(be, !0), m(de, null);
    try {
      const A = g ? { include_codexes: !0 } : { entity_types: [u(a)], include_codexes: !0 }, T = await Pe("export_data", A);
      if (T?.success && T?.data) {
        const M = typeof T.data == "string" ? JSON.parse(T.data) : T.data;
        m(de, M, !0);
        const J = g ? `Exported ${M.total_entities ?? "?"} entities, ${M.total_codexes ?? 0} codexes` : `Exported ${M.total_entities ?? "?"} entities`;
        Se(J);
      } else
        Se(T?.error || "Export failed", "error");
    } catch (A) {
      Se(`Export error: ${A?.message}`, "error");
    } finally {
      m(be, !1);
    }
  }
  function ce(g = !1) {
    if (!u(de)) return;
    const A = JSON.stringify(u(de), null, 2), T = new Blob([A], { type: "application/json" }), M = URL.createObjectURL(T), J = document.createElement("a");
    J.href = M;
    const U = (/* @__PURE__ */ new Date()).toISOString().replace(/[:.]/g, "-").slice(0, 19);
    J.download = g ? `export_all_${U}.json` : `export_${u(a)}_${U}.json`, J.click(), URL.revokeObjectURL(M), Se("Download started");
  }
  function he() {
    u(de) && (navigator.clipboard.writeText(JSON.stringify(u(de), null, 2)), Se("Copied to clipboard"));
  }
  function Ne(g) {
    const T = g.target.files?.[0];
    T && Re(T);
  }
  function le(g) {
    g.preventDefault(), m(N, !1);
    const A = g.dataTransfer?.files?.[0];
    A && Re(A);
  }
  function Re(g) {
    m(w, g.name, !0);
    const A = new FileReader();
    A.onload = (T) => {
      m(b, T.target?.result || "", !0), lt();
    }, A.readAsText(g);
  }
  function lt() {
    if (m(h, null), m(x, null), !!u(b).trim())
      try {
        const g = JSON.parse(u(b));
        let A = [], T = [];
        Array.isArray(g) ? A = g : g.entities ? (A = g.entities || [], T = g.codexes || []) : A = [g];
        const M = {};
        for (const J of A) {
          const U = J._type || "unknown";
          M[U] = (M[U] || 0) + 1;
        }
        m(
          h,
          {
            totalEntities: A.length,
            totalCodexes: T.length,
            typeCounts: M,
            valid: !0,
            entities: A,
            codexes: T
          },
          !0
        );
      } catch (g) {
        m(
          h,
          {
            valid: !1,
            error: g.message,
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
  async function Or() {
    if (!(!u(h) || !u(h).valid)) {
      m(k, !0), m(x, null);
      try {
        const g = [...u(h).entities];
        for (const T of u(h).codexes)
          g.push({ ...T, _type: "Codex" });
        const A = await Pe("import_data", { format: "json", data: JSON.stringify(g) });
        if (m(x, A, !0), A?.success) {
          const T = A.data || {};
          Se(`Imported ${T.successful || 0} of ${T.total_records || 0} records`);
        } else
          Se(A?.error || "Import failed", "error");
      } catch (g) {
        m(x, { success: !1, error: g.message }, !0), Se(`Import error: ${g?.message}`, "error");
      } finally {
        m(k, !1);
      }
    }
  }
  function et() {
    m(b, ""), m(w, ""), m(h, null), m(x, null), u(C) && (u(C).value = "");
  }
  let Qt = /* @__PURE__ */ B(!0), jt = /* @__PURE__ */ B(!1), Tt = /* @__PURE__ */ B(""), mt = /* @__PURE__ */ B(""), Ft = /* @__PURE__ */ B(""), Pr = /* @__PURE__ */ B(""), vr = /* @__PURE__ */ B(""), Ut = /* @__PURE__ */ B(""), Zt = /* @__PURE__ */ B(""), hr = /* @__PURE__ */ B(!1);
  async function li() {
    m(Qt, !0), m(mt, "");
    try {
      const g = await t.ctx.backend.status();
      if (g?.success && g?.data?.status) {
        const A = g.data.status;
        m(Ft, A.realm_name || "", !0), m(Pr, A.realm_description || "", !0), m(vr, A.realm_welcome_message || "", !0), m(Ut, A.logo_url || "", !0), m(Zt, A.background_image_url || "", !0), m(hr, !!A.open_registration);
      }
    } catch (g) {
      m(mt, g?.message || String(g), !0);
    } finally {
      m(Qt, !1);
    }
  }
  async function ui() {
    m(jt, !0), m(Tt, ""), m(mt, "");
    try {
      const g = {
        name: u(Ft),
        description: u(Pr),
        welcome_message: u(vr),
        logo_url: u(Ut),
        background_image_url: u(Zt),
        open_registration: u(hr)
      }, A = await t.ctx.backend.update_realm_config(JSON.stringify(g)), T = typeof A == "string" ? JSON.parse(A) : A;
      T?.success ? (m(Tt, "Realm settings saved successfully."), Se("Realm settings updated")) : m(mt, T?.error || "Failed to save settings", !0);
    } catch (g) {
      m(mt, g?.message || String(g), !0);
    } finally {
      m(jt, !1);
    }
  }
  zs(() => {
    Cn(), Mn(), li();
  });
  const fi = [
    { id: "browse", label: "Browse" },
    { id: "export", label: "Export" },
    { id: "import", label: "Import" },
    { id: "invitations", label: "Invitations" },
    { id: "settings", label: "Realm Settings" }
  ];
  let ci = /* @__PURE__ */ Jn(() => u(de) ? JSON.stringify(u(de), null, 2) : "");
  var Xt = Ku(), Ht = ut(Xt);
  {
    var on = (g) => {
      var A = Xl();
      Vt(A, 21, () => u(f), (T) => T.id, (T, M) => {
        var J = Zl(), U = _(J);
        $(
          (ge) => {
            gt(J, 1, ge), P(U, u(M).text);
          },
          [
            () => ht(r("px-4 py-3 rounded-lg shadow-lg text-sm font-medium transition-all", u(M).type === "error" ? "bg-red-600 text-white" : "bg-green-600 text-white"))
          ]
        ), L(T, J);
      }), L(g, A);
    };
    Z(Ht, (g) => {
      u(f).length > 0 && g(on);
    });
  }
  var Rn = E(Ht, 2);
  {
    var yo = (g) => {
      var A = eu(), T = _(A), M = E(_(T), 2), J = E(_(M)), U = _(J), ge = E(J, 2);
      {
        var Ee = (xe) => {
          var te = zl(), F = E(ut(te)), ne = _(F);
          $(() => P(ne, `(${u(pe).name ?? ""})`)), L(xe, te);
        };
        Z(ge, (xe) => {
          u(pe).name && xe(Ee);
        });
      }
      var Be = E(M, 4), He = _(Be), Je = E(He, 2);
      $(() => P(U, `${(u(pe)._type || u(a)) ?? ""}#${(u(pe)._id || u(pe).id) ?? ""}`)), oe("click", He, ai), oe("click", Je, D), L(g, A);
    };
    Z(Rn, (g) => {
      u(pe) && g(yo);
    });
  }
  var wo = E(Rn, 2), es = _(wo), ts = E(_(es), 2), rs = E(es, 2);
  {
    var ko = (g) => {
      var A = tu(), T = _(A), M = E(T);
      $(() => P(T, `${u(l) ?? ""} `)), oe("click", M, () => m(l, "")), L(g, A);
    };
    Z(rs, (g) => {
      u(l) && g(ko);
    });
  }
  var di = E(rs, 2), Eo = _(di), Ao = _(Eo), So = E(_(Ao), 2), To = E(_(So), 2);
  {
    var Co = (g) => {
      var A = ru();
      L(g, A);
    }, Mo = (g) => {
      var A = nu(), T = _(A);
      $(() => P(T, u(O))), L(g, A);
    }, Do = (g) => {
      var A = su(), T = _(A), M = E(T);
      {
        var J = (U) => {
          var ge = iu(), Ee = E(ut(ge), 2), Be = _(Ee);
          $(() => P(Be, `${u(re) ?? ""} update${u(re) === 1 ? "" : "s"} available`)), L(U, ge);
        };
        Z(M, (U) => {
          u(re) > 0 && U(J);
        });
      }
      $(() => P(T, `${u(ee) ?? 0 ?? ""} installed `)), L(g, A);
    };
    Z(To, (g) => {
      u(ve) ? g(Co) : u(O) ? g(Mo, 1) : g(Do, -1);
    });
  }
  var ns = E(di, 2);
  {
    var Lo = (g) => {
      var A = ou(), T = _(A), M = E(_(T), 2), J = _(M), U = E(T, 2), ge = E(_(U), 2), Ee = _(ge), Be = E(U, 2), He = E(_(Be), 2), Je = _(He), xe = E(Be, 2), te = E(_(xe), 2), F = _(te);
      $(
        (ne) => {
          P(J, u(i).length), P(Ee, u(ae)), P(Je, u(Ae)), gt(te, 1, ne), P(F, u(ve) ? "…" : u(re));
        },
        [
          () => ht(r("text-2xl font-bold mt-1", u(re) > 0 ? "text-yellow-600" : "text-gray-900"))
        ]
      ), L(g, A);
    };
    Z(ns, (g) => {
      u(s) || g(Lo);
    });
  }
  var is = E(ns, 2), Ro = _(is), Bo = E(_(Ro), 2);
  {
    var No = (g) => {
      var A = au();
      L(g, A);
    }, Io = (g) => {
      var A = uu();
      Vt(A, 21, () => u(i), gr, (T, M) => {
        var J = lu(), U = _(J), ge = {};
        $(() => {
          P(U, u(M).label), ge !== (ge = u(M).value) && (J.value = (J.__value = u(M).value) ?? "");
        }), L(T, J);
      }), xo(A, () => u(a), (T) => m(a, T)), L(g, A);
    };
    Z(Bo, (g) => {
      u(s) ? g(No) : g(Io, -1);
    });
  }
  var ss = E(is, 2), Oo = _(ss);
  Vt(Oo, 21, () => fi, gr, (g, A) => {
    var T = fu(), M = _(T);
    $(
      (J) => {
        gt(T, 1, J), P(M, u(A).label);
      },
      [
        () => ht(r("px-5 py-2.5 text-sm font-medium rounded-t-lg border-b-2 transition-colors", u(o) === u(A).id ? "border-blue-600 text-blue-600 bg-blue-50" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"))
      ]
    ), oe("click", T, () => m(o, u(A).id, !0)), L(g, T);
  });
  var Po = E(ss, 2);
  {
    var jo = (g) => {
      var A = xu(), T = ut(A), M = _(T), J = _(M), U = E(M, 2), ge = _(U);
      {
        var Ee = (F) => {
          var ne = ms();
          $(() => P(ne, `Showing ${u(c).length ?? ""} of ${u(j) ?? ""} items`)), L(F, ne);
        };
        Z(ge, (F) => {
          u(c).length > 0 && F(Ee);
        });
      }
      var Be = E(T, 2), He = _(Be);
      {
        var Je = (F) => {
          var ne = cu();
          L(F, ne);
        }, xe = (F) => {
          var ne = du();
          L(F, ne);
        }, te = (F) => {
          var ne = bu(), ue = ut(ne);
          Vt(ue, 21, () => u(c), gr, (Y, ie, me) => {
            var Te = pu(), $e = _(Te), qe = _($e), tt = _(qe), je = _(tt), Fe = _(je), Ve = E(je, 2);
            {
              var Jt = (rt) => {
                var Mt = vu(), Dt = _(Mt);
                $(() => P(Dt, `- ${u(ie).name ?? ""}`)), L(rt, Mt);
              };
              Z(Ve, (rt) => {
                u(ie).name && rt(Jt);
              });
            }
            var Ct = E(qe, 2), Ke = _(Ct), Q = E(Ke, 2), Me = E($e, 2);
            {
              var We = (rt) => {
                var Mt = gu(), Dt = _(Mt);
                Vt(Dt, 21, () => Object.entries(u(ie)), gr, (an, $o) => {
                  var os = /* @__PURE__ */ Jn(() => cs(u($o), 2));
                  let Vo = () => u(os)[0], gi = () => u(os)[1];
                  var as = hu(), ls = _(as), Yo = _(ls), Go = E(ls, 2), qo = _(Go);
                  $(
                    (Ko) => {
                      P(Yo, `${Vo() ?? ""}:`), P(qo, Ko);
                    },
                    [
                      () => typeof gi() == "object" ? JSON.stringify(gi()) : String(gi())
                    ]
                  ), L(an, as);
                });
                var jr = E(Dt, 2), vi = _(jr), hi = E(_(vi), 2), Bn = _(hi);
                $((an) => P(Bn, an), [() => JSON.stringify(u(ie), null, 2)]), L(rt, Mt);
              };
              Z(Me, (rt) => {
                u(S) === me && rt(We);
              });
            }
            $(
              (rt) => {
                P(Fe, `${u(S) === me ? "▼" : "▶"}
											${(u(ie)._type || u(a)) ?? ""} #${(u(ie)._id || u(ie).id || me + 1) ?? ""}`), Q.disabled = rt;
              },
              [
                () => u(H) === String(u(ie)._id || u(ie).id)
              ]
            ), oe("click", je, () => Ln(me)), oe("click", Ke, () => si(u(ie))), oe("click", Q, () => oi(u(ie))), L(Y, Te);
          });
          var Ce = E(ue, 2);
          {
            var _e = (Y) => {
              var ie = _u(), me = _(ie), Te = _(me), $e = E(Te, 2), qe = E(me, 2), tt = _(qe), je = E(qe, 2), Fe = _(je), Ve = E(Fe, 2);
              $(() => {
                Te.disabled = u(y) === 0, $e.disabled = u(y) === 0, P(tt, `Page ${u(y) + 1} of ${u(W) ?? ""}`), Fe.disabled = u(y) >= u(W) - 1, Ve.disabled = u(y) >= u(W) - 1;
              }), oe("click", Te, () => Ir(0)), oe("click", $e, () => Ir(u(y) - 1)), oe("click", Fe, () => Ir(u(y) + 1)), oe("click", Ve, () => Ir(u(W) - 1)), L(Y, ie);
            };
            Z(Ce, (Y) => {
              u(W) > 1 && Y(_e);
            });
          }
          L(F, ne);
        };
        Z(He, (F) => {
          u(d) ? F(Je) : u(c).length === 0 ? F(xe, 1) : F(te, -1);
        });
      }
      $(() => {
        M.disabled = u(d), P(J, u(d) ? "Loading…" : "Load Data");
      }), oe("click", M, sn), L(g, A);
    }, Fo = (g) => {
      var A = ku(), T = E(_(A), 4), M = _(T), J = _(M), U = E(M, 2), ge = _(U), Ee = E(T, 2);
      {
        var Be = (xe) => {
          var te = mu();
          L(xe, te);
        };
        Z(Ee, (xe) => {
          u(be) && xe(Be);
        });
      }
      var He = E(Ee, 2);
      {
        var Je = (xe) => {
          var te = wu(), F = _(te), ne = _(F), ue = _(ne), Ce = _(ue), _e = E(ue, 2);
          {
            var Y = (je) => {
              var Fe = yu(), Ve = E(ut(Fe)), Jt = _(Ve);
              $(() => P(Jt, u(de).total_codexes)), L(je, Fe);
            };
            Z(_e, (je) => {
              (u(de).total_codexes ?? 0) > 0 && je(Y);
            });
          }
          var ie = E(ne, 2), me = _(ie), Te = E(me, 2), $e = E(F, 2), qe = _($e), tt = _(qe);
          $(() => {
            P(Ce, u(de).total_entities ?? "?"), P(tt, u(ci));
          }), oe("click", me, () => ce(!1)), oe("click", Te, he), L(xe, te);
        };
        Z(He, (xe) => {
          u(de) && xe(Je);
        });
      }
      $(() => {
        M.disabled = u(be), P(J, u(be) ? "Exporting…" : `Export ${u(a)}`), U.disabled = u(be), P(ge, u(be) ? "Exporting…" : "Export All Types");
      }), oe("click", M, () => V(!1)), oe("click", U, () => V(!0)), L(g, A);
    }, Uo = (g) => {
      Ql(g, {
        get ctx() {
          return t.ctx;
        }
      });
    }, Ho = (g) => {
      var A = Uu(), T = E(_(A), 4), M = _(T), J = E(M, 2), U = E(T, 2);
      {
        var ge = (te) => {
          var F = Su(), ne = _(F);
          Dl(ne, (Y) => m(C, Y), () => u(C));
          var ue = E(ne, 2);
          {
            var Ce = (Y) => {
              var ie = Eu(), me = ut(ie), Te = _(me);
              $(() => P(Te, u(w))), L(Y, ie);
            }, _e = (Y) => {
              var ie = Au();
              L(Y, ie);
            };
            Z(ue, (Y) => {
              u(w) ? Y(Ce) : Y(_e, -1);
            });
          }
          $((Y) => gt(F, 1, Y), [
            () => ht(r("border-2 border-dashed rounded-lg p-8 text-center transition-colors cursor-pointer", u(N) ? "border-blue-500 bg-blue-50" : "border-gray-300 hover:border-gray-400"))
          ]), xi("drop", F, le), xi("dragover", F, (Y) => {
            Y.preventDefault(), m(N, !0);
          }), xi("dragleave", F, () => m(N, !1)), oe("click", F, () => u(C)?.click()), oe("keydown", F, (Y) => Y.key === "Enter" && u(C)?.click()), oe("change", ne, Ne), L(te, F);
        }, Ee = (te) => {
          var F = Cu(), ne = _(F);
          Vn(ne, "placeholder", `Paste JSON here, e.g.
[
  {"_type": "User", "_id": "1", "name": "Alice"},
  {"_type": "User", "_id": "2", "name": "Bob"}
]`);
          var ue = E(ne, 2);
          {
            var Ce = (_e) => {
              var Y = Tu();
              oe("click", Y, et), L(_e, Y);
            };
            Z(ue, (_e) => {
              u(b) && _e(Ce);
            });
          }
          oe("input", ne, lt), nr(ne, () => u(b), (_e) => m(b, _e)), L(te, F);
        };
        Z(U, (te) => {
          u(ke) === "file" ? te(ge) : te(Ee, -1);
        });
      }
      var Be = E(U, 2);
      {
        var He = (te) => {
          var F = Ru(), ne = _(F);
          {
            var ue = (_e) => {
              var Y = Du(), ie = ut(Y), me = _(ie), Te = _(me), $e = E(Te);
              {
                var qe = (Ke) => {
                  var Q = ms();
                  $(() => P(Q, `, ${u(h).totalCodexes ?? ""} codexes`)), L(Ke, Q);
                };
                Z($e, (Ke) => {
                  u(h).totalCodexes > 0 && Ke(qe);
                });
              }
              var tt = E(ie, 2), je = _(tt);
              Vt(je, 21, () => Object.entries(u(h).typeCounts), gr, (Ke, Q) => {
                var Me = /* @__PURE__ */ Jn(() => cs(u(Q), 2));
                let We = () => u(Me)[0], rt = () => u(Me)[1];
                var Mt = Mu(), Dt = _(Mt);
                $((jr) => P(Dt, `${jr ?? ""} ${We() ?? ""}: ${rt() ?? ""}`), [() => nn(We())]), L(Ke, Mt);
              });
              var Fe = E(je, 2), Ve = _(Fe), Jt = _(Ve), Ct = E(Ve, 2);
              $(() => {
                P(Te, `Ready to import: ${u(h).totalEntities ?? ""} entities `), Ve.disabled = u(k), P(Jt, u(k) ? "Importing…" : "Confirm Import"), Ct.disabled = u(k);
              }), oe("click", Ve, Or), oe("click", Ct, et), L(_e, Y);
            }, Ce = (_e) => {
              var Y = Lu(), ie = E(_(Y), 2), me = _(ie);
              $(() => P(me, u(h).error)), L(_e, Y);
            };
            Z(ne, (_e) => {
              u(h).valid ? _e(ue) : _e(Ce, -1);
            });
          }
          $((_e) => gt(F, 1, _e), [
            () => ht(r("mt-4 border rounded-lg overflow-hidden", u(h).valid ? "border-green-200" : "border-red-200"))
          ]), L(te, F);
        };
        Z(Be, (te) => {
          u(h) && te(He);
        });
      }
      var Je = E(Be, 2);
      {
        var xe = (te) => {
          var F = Fu(), ne = _(F), ue = _(ne);
          {
            var Ce = (Y) => {
              var ie = Pu(), me = E(ut(ie), 2);
              {
                var Te = ($e) => {
                  var qe = Ou(), tt = _(qe), je = _(tt), Fe = E(tt, 2), Ve = _(Fe), Jt = E(Fe, 2);
                  {
                    var Ct = (Ke) => {
                      var Q = Iu(), Me = ut(Q), We = _(Me), rt = E(Me, 2);
                      {
                        var Mt = (Dt) => {
                          var jr = Nu();
                          Vt(jr, 21, () => u(x).data.errors, gr, (vi, hi) => {
                            var Bn = Bu(), an = _(Bn);
                            $(() => P(an, u(hi))), L(vi, Bn);
                          }), L(Dt, jr);
                        };
                        Z(rt, (Dt) => {
                          u(x).data.errors?.length && Dt(Mt);
                        });
                      }
                      $(() => P(We, `Failed: ${u(x).data.failed ?? ""}`)), L(Ke, Q);
                    };
                    Z(Jt, (Ke) => {
                      (u(x).data.failed ?? 0) > 0 && Ke(Ct);
                    });
                  }
                  $(() => {
                    P(je, `Total records: ${(u(x).data.total_records || 0) ?? ""}`), P(Ve, `Successful: ${(u(x).data.successful || 0) ?? ""}`);
                  }), L($e, qe);
                };
                Z(me, ($e) => {
                  u(x).data && $e(Te);
                });
              }
              L(Y, ie);
            }, _e = (Y) => {
              var ie = ju(), me = E(ut(ie), 2), Te = _(me);
              $(() => P(Te, u(x).error)), L(Y, ie);
            };
            Z(ue, (Y) => {
              u(x).success ? Y(Ce) : Y(_e, -1);
            });
          }
          $((Y) => gt(F, 1, Y), [
            () => ht(r("mt-4 border rounded-lg overflow-hidden", u(x).success ? "border-green-200 bg-green-50" : "border-red-200 bg-red-50"))
          ]), L(te, F);
        };
        Z(Je, (te) => {
          u(x) && te(xe);
        });
      }
      $(
        (te, F) => {
          gt(M, 1, te), gt(J, 1, F);
        },
        [
          () => ht(r("px-4 py-2 text-sm font-medium rounded-lg transition-colors", u(ke) === "file" ? "bg-blue-100 text-blue-700 border border-blue-300" : "bg-gray-100 text-gray-600 hover:bg-gray-200")),
          () => ht(r("px-4 py-2 text-sm font-medium rounded-lg transition-colors", u(ke) === "editor" ? "bg-blue-100 text-blue-700 border border-blue-300" : "bg-gray-100 text-gray-600 hover:bg-gray-200"))
        ]
      ), oe("click", M, () => {
        m(ke, "file"), et();
      }), oe("click", J, () => {
        m(ke, "editor"), et();
      }), L(g, A);
    }, Jo = (g) => {
      var A = qu(), T = E(_(A), 4);
      {
        var M = (U) => {
          var ge = Hu();
          L(U, ge);
        }, J = (U) => {
          var ge = Gu(), Ee = _(ge), Be = E(_(Ee), 2), He = E(Ee, 2), Je = E(_(He), 2), xe = E(He, 2), te = E(_(xe), 2), F = E(xe, 2), ne = E(_(F), 2), ue = E(ne, 2);
          {
            var Ce = (Q) => {
              var Me = Ju(), We = _(Me);
              $(() => Vn(We, "src", u(Ut))), L(Q, Me);
            };
            Z(ue, (Q) => {
              u(Ut) && Q(Ce);
            });
          }
          var _e = E(F, 2), Y = E(_(_e), 2), ie = E(Y, 2);
          {
            var me = (Q) => {
              var Me = $u(), We = _(Me);
              $(() => Vn(We, "src", u(Zt))), L(Q, Me);
            };
            Z(ie, (Q) => {
              u(Zt) && Q(me);
            });
          }
          var Te = E(_e, 2), $e = _(Te), qe = _($e), tt = E(Te, 2);
          {
            var je = (Q) => {
              var Me = Vu(), We = _(Me);
              $(() => P(We, u(Tt))), L(Q, Me);
            };
            Z(tt, (Q) => {
              u(Tt) && Q(je);
            });
          }
          var Fe = E(tt, 2);
          {
            var Ve = (Q) => {
              var Me = Yu(), We = _(Me);
              $(() => P(We, u(mt))), L(Q, Me);
            };
            Z(Fe, (Q) => {
              u(mt) && Q(Ve);
            });
          }
          var Jt = E(Fe, 2), Ct = _(Jt), Ke = _(Ct);
          $(() => {
            Ct.disabled = u(jt), P(Ke, u(jt) ? "Saving…" : "Save Settings");
          }), nr(Be, () => u(Ft), (Q) => m(Ft, Q)), nr(Je, () => u(Pr), (Q) => m(Pr, Q)), nr(te, () => u(vr), (Q) => m(vr, Q)), nr(ne, () => u(Ut), (Q) => m(Ut, Q)), nr(Y, () => u(Zt), (Q) => m(Zt, Q)), Ml(qe, () => u(hr), (Q) => m(hr, Q)), oe("click", Ct, ui), L(U, ge);
        };
        Z(T, (U) => {
          u(Qt) ? U(M) : U(J, -1);
        });
      }
      L(g, A);
    };
    Z(Po, (g) => {
      u(o) === "browse" ? g(jo) : u(o) === "export" ? g(Fo, 1) : u(o) === "invitations" ? g(Uo, 2) : u(o) === "import" ? g(Ho, 3) : u(o) === "settings" && g(Jo, 4);
    });
  }
  $(() => ts.disabled = u(s)), oe("click", ts, () => {
    Cn(), Mn();
  }), oe("click", di, () => t.ctx.navigate?.("/extensions/package_manager")), L(e, Xt), Hi();
}
po(["click", "keydown", "change", "input"]);
function Xu(e, t) {
  const r = hl(Wu, { target: e, props: { ctx: t } });
  return {
    unmount() {
      try {
        pl(r);
      } catch {
      }
    }
  };
}
export {
  Xu as default
};
