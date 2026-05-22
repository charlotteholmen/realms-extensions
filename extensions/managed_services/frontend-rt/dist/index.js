var _s = Object.defineProperty;
var An = (e) => {
  throw TypeError(e);
};
var gs = (e, t, r) => t in e ? _s(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var ne = (e, t, r) => gs(e, typeof t != "symbol" ? t + "" : t, r), Br = (e, t, r) => t.has(e) || An("Cannot " + r);
var i = (e, t, r) => (Br(e, t, "read from private field"), r ? r.call(e) : t.get(e)), w = (e, t, r) => t.has(e) ? An("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), y = (e, t, r, n) => (Br(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r), A = (e, t, r) => (Br(e, t, "access private method"), r);
var Vn = Array.isArray, bs = Array.prototype.indexOf, mt = Array.prototype.includes, Mr = Array.from, xs = Object.defineProperty, Qt = Object.getOwnPropertyDescriptor, ms = Object.prototype, ys = Array.prototype, ks = Object.getPrototypeOf, Mn = Object.isExtensible;
const ws = () => {
};
function Es(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function zn() {
  var e, t, r = new Promise((n, a) => {
    e = n, t = a;
  });
  return { promise: r, resolve: e, reject: t };
}
const Q = 2, tr = 4, Rr = 8, Hn = 1 << 24, Se = 16, Re = 32, at = 64, Yr = 128, me = 512, G = 1024, $ = 2048, je = 4096, te = 8192, Me = 16384, Tt = 32768, Rn = 1 << 25, Vt = 65536, kr = 1 << 17, Cs = 1 << 18, Yt = 1 << 19, Ss = 1 << 20, Ke = 1 << 25, Et = 65536, wr = 1 << 21, Ft = 1 << 22, rt = 1 << 23, Ur = Symbol("$state"), Ts = Symbol("attributes"), Gr = Symbol("class"), As = Symbol("style"), Jt = Symbol("text"), _r = Symbol("form reset"), Nr = new class extends Error {
  constructor() {
    super(...arguments);
    ne(this, "name", "StaleReactionError");
    ne(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
function Ms() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Rs(e, t, r) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function Ns(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Ds() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Fs(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Os() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Is() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Ls() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Ps() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function js() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
const Bs = 1, Us = 2, Vs = 16, qn = 1, zs = 2, Y = Symbol("uninitialized"), Hs = "http://www.w3.org/1999/xhtml";
function qs() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function Ys() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function Yn(e) {
  return e === this.v;
}
function Gs(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Gn(e) {
  return !Gs(e, this.v);
}
let ke = null;
function zt(e) {
  ke = e;
}
function Kn(e, t = !1, r) {
  ke = {
    p: ke,
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
function Wn(e) {
  var t = (
    /** @type {ComponentContext} */
    ke
  ), r = t.e;
  if (r !== null) {
    t.e = null;
    for (var n of r)
      pa(n);
  }
  return t.i = !0, ke = t.p, /** @type {T} */
  {};
}
function Jn() {
  return !0;
}
let dt = [];
function Zn() {
  var e = dt;
  dt = [], Es(e);
}
function Ot(e) {
  if (dt.length === 0 && !Xt) {
    var t = dt;
    queueMicrotask(() => {
      t === dt && Zn();
    });
  }
  dt.push(e);
}
function Ks() {
  for (; dt.length > 0; )
    Zn();
}
function $n(e) {
  var t = T;
  if (t === null)
    return S.f |= rt, e;
  if ((t.f & Tt) === 0 && (t.f & tr) === 0)
    throw e;
  tt(e, t);
}
function tt(e, t) {
  for (; t !== null; ) {
    if ((t.f & Yr) !== 0) {
      if ((t.f & Tt) === 0)
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
const Ws = -7169;
function V(e, t) {
  e.f = e.f & Ws | t;
}
function sn(e) {
  (e.f & me) !== 0 || e.deps === null ? V(e, G) : V(e, je);
}
function Qn(e) {
  if (e !== null)
    for (const t of e)
      (t.f & Q) === 0 || (t.f & Et) === 0 || (t.f ^= Et, Qn(
        /** @type {Derived} */
        t.deps
      ));
}
function Xn(e, t, r) {
  (e.f & $) !== 0 ? t.add(e) : (e.f & je) !== 0 && r.add(e), Qn(e.deps), V(e, G);
}
let Vr = null, Mt = null, C = null, Kr = null, Te = null, Wr = null, Xt = !1, zr = !1, Nt = null, gr = null;
var Nn = 0;
let Js = 1;
var It, Qe, ht, Lt, Pt, pt, jt, He, ar, de, sr, Xe, Ie, Le, Bt, _t, N, Jr, Zt, Zr, ea, ta, br, Zs, $r, Rt;
const Sr = class Sr {
  constructor() {
    w(this, N);
    ne(this, "id", Js++);
    /** True as soon as `#process` was called */
    w(this, It, !1);
    ne(this, "linked", !0);
    /** @type {Batch | null} */
    w(this, Qe, null);
    /** @type {Batch | null} */
    w(this, ht, null);
    /** @type {Map<Effect, ReturnType<typeof deferred<any>>>} */
    ne(this, "async_deriveds", /* @__PURE__ */ new Map());
    /**
     * The current values of any signals that are updated in this batch.
     * Tuple format: [value, is_derived] (note: is_derived is false for deriveds, too, if they were overridden via assignment)
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Value, [any, boolean]>}
     */
    ne(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any signals (sources and deriveds) that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Value, any>}
     */
    ne(this, "previous", /* @__PURE__ */ new Map());
    /**
     * Async effects which this batch doesn't take into account anymore when calculating blockers,
     * as it has a value for it already.
     * @type {Set<Effect>}
     */
    ne(this, "unblocked", /* @__PURE__ */ new Set());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<(batch: Batch) => void>}
     */
    w(this, Lt, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    w(this, Pt, /* @__PURE__ */ new Set());
    /**
     * Callbacks that should run only when a fork is committed.
     * @type {Set<(batch: Batch) => void>}
     */
    w(this, pt, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    w(this, jt, 0);
    /**
     * Async effects that are currently in flight, _not_ inside a pending boundary
     * @type {Map<Effect, number>}
     */
    w(this, He, /* @__PURE__ */ new Map());
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    w(this, ar, null);
    /**
     * The root effects that need to be flushed
     * @type {Effect[]}
     */
    w(this, de, []);
    /**
     * Effects created while this batch was active.
     * @type {Effect[]}
     */
    w(this, sr, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    w(this, Xe, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    w(this, Ie, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    w(this, Le, /* @__PURE__ */ new Map());
    /**
     * Inverse of #skipped_branches which we need to tell prior batches to unskip them when committing
     * @type {Set<Effect>}
     */
    w(this, Bt, /* @__PURE__ */ new Set());
    ne(this, "is_fork", !1);
    w(this, _t, !1);
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(t) {
    i(this, Le).has(t) || i(this, Le).set(t, { d: [], m: [] }), i(this, Bt).delete(t);
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   * @param {(e: Effect) => void} callback
   */
  unskip_effect(t, r = (n) => this.schedule(n)) {
    var n = i(this, Le).get(t);
    if (n) {
      i(this, Le).delete(t);
      for (var a of n.d)
        V(a, $), r(a);
      for (a of n.m)
        V(a, je), r(a);
    }
    i(this, Bt).add(t);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Value} source
   * @param {any} value
   * @param {boolean} [is_derived]
   */
  capture(t, r, n = !1) {
    t.v !== Y && !this.previous.has(t) && this.previous.set(t, t.v), (t.f & rt) === 0 && (this.current.set(t, [r, n]), Te?.set(t, r)), this.is_fork || (t.v = r);
  }
  activate() {
    C = this;
  }
  deactivate() {
    C = null, Te = null;
  }
  flush() {
    try {
      zr = !0, C = this, A(this, N, Zt).call(this);
    } finally {
      Nn = 0, Wr = null, Nt = null, gr = null, zr = !1, C = null, Te = null, yt.clear();
    }
  }
  discard() {
    for (const t of i(this, Pt)) t(this);
    i(this, Pt).clear(), i(this, pt).clear(), A(this, N, Rt).call(this);
  }
  /**
   * @param {Effect} effect
   */
  register_created_effect(t) {
    i(this, sr).push(t);
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  increment(t, r) {
    if (y(this, jt, i(this, jt) + 1), t) {
      let n = i(this, He).get(r) ?? 0;
      i(this, He).set(r, n + 1);
    }
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  decrement(t, r) {
    if (y(this, jt, i(this, jt) - 1), t) {
      let n = i(this, He).get(r) ?? 0;
      n === 1 ? i(this, He).delete(r) : i(this, He).set(r, n - 1);
    }
    i(this, _t) || (y(this, _t, !0), Ot(() => {
      y(this, _t, !1), this.linked && this.flush();
    }));
  }
  /**
   * @param {Set<Effect>} dirty_effects
   * @param {Set<Effect>} maybe_dirty_effects
   */
  transfer_effects(t, r) {
    for (const n of t)
      i(this, Xe).add(n);
    for (const n of r)
      i(this, Ie).add(n);
    t.clear(), r.clear();
  }
  /** @param {(batch: Batch) => void} fn */
  oncommit(t) {
    i(this, Lt).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    i(this, Pt).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  on_fork_commit(t) {
    i(this, pt).add(t);
  }
  run_fork_commit_callbacks() {
    for (const t of i(this, pt)) t(this);
    i(this, pt).clear();
  }
  settled() {
    return (i(this, ar) ?? y(this, ar, zn())).promise;
  }
  static ensure() {
    var t;
    if (C === null) {
      const r = C = new Sr();
      A(t = r, N, $r).call(t), !zr && !Xt && Ot(() => {
        i(r, It) || r.flush();
      });
    }
    return C;
  }
  apply() {
    {
      Te = null;
      return;
    }
  }
  /**
   *
   * @param {Effect} effect
   */
  schedule(t) {
    if (Wr = t, t.b?.is_pending && (t.f & (tr | Rr | Hn)) !== 0 && (t.f & Tt) === 0) {
      t.b.defer_effect(t);
      return;
    }
    for (var r = t; r.parent !== null; ) {
      r = r.parent;
      var n = r.f;
      if (Nt !== null && r === T && (S === null || (S.f & Q) === 0))
        return;
      if ((n & (at | Re)) !== 0) {
        if ((n & G) === 0)
          return;
        r.f ^= G;
      }
    }
    i(this, de).push(r);
  }
};
It = new WeakMap(), Qe = new WeakMap(), ht = new WeakMap(), Lt = new WeakMap(), Pt = new WeakMap(), pt = new WeakMap(), jt = new WeakMap(), He = new WeakMap(), ar = new WeakMap(), de = new WeakMap(), sr = new WeakMap(), Xe = new WeakMap(), Ie = new WeakMap(), Le = new WeakMap(), Bt = new WeakMap(), _t = new WeakMap(), N = new WeakSet(), Jr = function() {
  if (this.is_fork) return !0;
  for (const n of i(this, He).keys()) {
    for (var t = n, r = !1; t.parent !== null; ) {
      if (i(this, Le).has(t)) {
        r = !0;
        break;
      }
      t = t.parent;
    }
    if (!r)
      return !0;
  }
  return !1;
}, Zt = function() {
  var u, f, p;
  if (y(this, It, !0), Nn++ > 1e3 && (A(this, N, Rt).call(this), Qs()), !A(this, N, Jr).call(this)) {
    for (const d of i(this, Xe))
      i(this, Ie).delete(d), V(d, $), this.schedule(d);
    for (const d of i(this, Ie))
      V(d, je), this.schedule(d);
  }
  const t = i(this, de);
  y(this, de, []), this.apply();
  var r = Nt = [], n = [], a = gr = [];
  for (const d of t)
    try {
      A(this, N, Zr).call(this, d, r, n);
    } catch (v) {
      throw aa(d), v;
    }
  if (C = null, a.length > 0) {
    var s = Sr.ensure();
    for (const d of a)
      s.schedule(d);
  }
  if (Nt = null, gr = null, A(this, N, Jr).call(this)) {
    A(this, N, br).call(this, n), A(this, N, br).call(this, r);
    for (const [d, v] of i(this, Le))
      na(d, v);
    a.length > 0 && /** @type {unknown} */
    A(u = C, N, Zt).call(u);
    return;
  }
  const o = A(this, N, ea).call(this);
  if (o) {
    A(f = o, N, ta).call(f, this);
    return;
  }
  i(this, Xe).clear(), i(this, Ie).clear();
  for (const d of i(this, Lt)) d(this);
  i(this, Lt).clear(), Kr = this, Dn(n), Dn(r), Kr = null, i(this, ar)?.resolve();
  var l = (
    /** @type {Batch | null} */
    /** @type {unknown} */
    C
  );
  if (this.linked && i(this, jt) === 0 && A(this, N, Rt).call(this), i(this, de).length > 0) {
    l === null && (l = this, A(this, N, $r).call(this));
    const d = l;
    i(d, de).push(...i(this, de).filter((v) => !i(d, de).includes(v)));
  }
  l !== null && A(p = l, N, Zt).call(p);
}, /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
Zr = function(t, r, n) {
  t.f ^= G;
  for (var a = t.first; a !== null; ) {
    var s = a.f, o = (s & (Re | at)) !== 0, l = o && (s & G) !== 0, u = l || (s & te) !== 0 || i(this, Le).has(a);
    if (!u && a.fn !== null) {
      o ? a.f ^= G : (s & tr) !== 0 ? r.push(a) : dr(a) && ((s & Se) !== 0 && i(this, Ie).add(a), qt(a));
      var f = a.first;
      if (f !== null) {
        a = f;
        continue;
      }
    }
    for (; a !== null; ) {
      var p = a.next;
      if (p !== null) {
        a = p;
        break;
      }
      a = a.parent;
    }
  }
}, ea = function() {
  for (var t = i(this, Qe); t !== null; ) {
    if (!t.is_fork) {
      for (const [r, [, n]] of this.current)
        if (t.current.has(r) && !n)
          return t;
    }
    t = i(t, Qe);
  }
  return null;
}, /**
 * @param {Batch} batch
 */
ta = function(t) {
  var n;
  for (const [a, s] of t.current)
    !this.previous.has(a) && t.previous.has(a) && this.previous.set(a, t.previous.get(a)), this.current.set(a, s);
  for (const [a, s] of t.async_deriveds) {
    const o = this.async_deriveds.get(a);
    o && s.promise.then(o.resolve);
  }
  const r = (a) => {
    var s = a.reactions;
    if (s !== null)
      for (const u of s) {
        var o = u.f;
        if ((o & Q) !== 0)
          r(
            /** @type {Derived} */
            u
          );
        else {
          var l = (
            /** @type {Effect} */
            u
          );
          o & (Ft | Se) && !this.async_deriveds.has(l) && (i(this, Ie).delete(l), V(l, $), this.schedule(l));
        }
      }
  };
  for (const a of this.current.keys())
    r(a);
  this.oncommit(() => t.discard()), A(n = t, N, Rt).call(n), C = this, A(this, N, Zt).call(this);
}, /**
 * @param {Effect[]} effects
 */
br = function(t) {
  for (var r = 0; r < t.length; r += 1)
    Xn(t[r], i(this, Xe), i(this, Ie));
}, Zs = function() {
  var p;
  A(this, N, Rt).call(this);
  for (let d = Vr; d !== null; d = i(d, ht)) {
    var t = d.id < this.id, r = [];
    for (const [v, [g, c]] of this.current) {
      if (d.current.has(v)) {
        var n = (
          /** @type {[any, boolean]} */
          d.current.get(v)[0]
        );
        if (t && g !== n)
          d.current.set(v, [g, c]);
        else
          continue;
      }
      r.push(v);
    }
    if (t)
      for (const [v, g] of this.async_deriveds) {
        const c = d.async_deriveds.get(v);
        c && g.promise.then(c.resolve);
      }
    if (i(d, It)) {
      var a = [...d.current.keys()].filter((v) => !this.current.has(v));
      if (a.length === 0)
        t && d.discard();
      else if (r.length > 0) {
        if (t)
          for (const v of i(this, Bt))
            d.unskip_effect(v, (g) => {
              var c;
              (g.f & (Se | Ft)) !== 0 ? d.schedule(g) : A(c = d, N, br).call(c, [g]);
            });
        d.activate();
        var s = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Map();
        for (var l of r)
          ra(l, a, s, o);
        o = /* @__PURE__ */ new Map();
        var u = [...d.current.keys()].filter(
          (v) => this.current.has(v) ? (
            /** @type {[any, boolean]} */
            this.current.get(v)[0] !== v.v
          ) : !0
        );
        if (u.length > 0)
          for (const v of i(this, sr))
            (v.f & (Me | te | kr)) === 0 && ln(v, u, o) && ((v.f & (Ft | Se)) !== 0 ? (V(v, $), d.schedule(v)) : i(d, Xe).add(v));
        if (i(d, de).length > 0 && !i(d, _t)) {
          d.apply();
          for (var f of i(d, de))
            A(p = d, N, Zr).call(p, f, [], []);
          y(d, de, []);
        }
        d.deactivate();
      }
    }
  }
}, $r = function() {
  Mt === null ? Vr = Mt = this : (y(Mt, ht, this), y(this, Qe, Mt)), Mt = this;
}, Rt = function() {
  var t = i(this, Qe), r = i(this, ht);
  t === null ? Vr = r : y(t, ht, r), r === null ? Mt = t : y(r, Qe, t), this.linked = !1;
};
let Ct = Sr;
function $s(e) {
  var t = Xt;
  Xt = !0;
  try {
    for (var r; ; ) {
      if (Ks(), C === null)
        return (
          /** @type {T} */
          r
        );
      C.flush();
    }
  } finally {
    Xt = t;
  }
}
function Qs() {
  try {
    Os();
  } catch (e) {
    tt(e, Wr);
  }
}
let ze = null;
function Dn(e) {
  var t = e.length;
  if (t !== 0) {
    for (var r = 0; r < t; ) {
      var n = e[r++];
      if ((n.f & (Me | te)) === 0 && dr(n) && (ze = /* @__PURE__ */ new Set(), qt(n), n.deps === null && n.first === null && n.nodes === null && n.teardown === null && n.ac === null && ba(n), ze?.size > 0)) {
        yt.clear();
        for (const a of ze) {
          if ((a.f & (Me | te)) !== 0) continue;
          const s = [a];
          let o = a.parent;
          for (; o !== null; )
            ze.has(o) && (ze.delete(o), s.push(o)), o = o.parent;
          for (let l = s.length - 1; l >= 0; l--) {
            const u = s[l];
            (u.f & (Me | te)) === 0 && qt(u);
          }
        }
        ze.clear();
      }
    }
    ze = null;
  }
}
function ra(e, t, r, n) {
  if (!r.has(e) && (r.add(e), e.reactions !== null))
    for (const a of e.reactions) {
      const s = a.f;
      (s & Q) !== 0 ? ra(
        /** @type {Derived} */
        a,
        t,
        r,
        n
      ) : (s & (Ft | Se)) !== 0 && (s & $) === 0 && ln(a, t, n) && (V(a, $), on(
        /** @type {Effect} */
        a
      ));
    }
}
function ln(e, t, r) {
  const n = r.get(e);
  if (n !== void 0) return n;
  if (e.deps !== null)
    for (const a of e.deps) {
      if (mt.call(t, a))
        return !0;
      if ((a.f & Q) !== 0 && ln(
        /** @type {Derived} */
        a,
        t,
        r
      ))
        return r.set(
          /** @type {Derived} */
          a,
          !0
        ), !0;
    }
  return r.set(e, !1), !1;
}
function on(e) {
  C.schedule(e);
}
function na(e, t) {
  if (!((e.f & Re) !== 0 && (e.f & G) !== 0)) {
    (e.f & $) !== 0 ? t.d.push(e) : (e.f & je) !== 0 && t.m.push(e), V(e, G);
    for (var r = e.first; r !== null; )
      na(r, t), r = r.next;
  }
}
function aa(e) {
  V(e, G);
  for (var t = e.first; t !== null; )
    aa(t), t = t.next;
}
function Xs(e) {
  let t = 0, r = St(0), n;
  return () => {
    dn() && (h(r), _a(() => (t === 0 && (n = Ta(() => e(() => er(r)))), t += 1, () => {
      Ot(() => {
        t -= 1, t === 0 && (n?.(), n = void 0, er(r));
      });
    })));
  };
}
var ei = Vt | Yt;
function ti(e, t, r, n) {
  new ri(e, t, r, n);
}
var _e, an, ge, gt, ae, be, ee, ce, qe, bt, et, Ut, ir, lr, Ye, Tr, z, ni, ai, si, Qr, xr, mr, Xr, en;
class ri {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(t, r, n, a) {
    w(this, z);
    /** @type {Boundary | null} */
    ne(this, "parent");
    ne(this, "is_pending", !1);
    /**
     * API-level transformError transform function. Transforms errors before they reach the `failed` snippet.
     * Inherited from parent boundary, or defaults to identity.
     * @type {(error: unknown) => unknown}
     */
    ne(this, "transform_error");
    /** @type {TemplateNode} */
    w(this, _e);
    /** @type {TemplateNode | null} */
    w(this, an, null);
    /** @type {BoundaryProps} */
    w(this, ge);
    /** @type {((anchor: Node) => void)} */
    w(this, gt);
    /** @type {Effect} */
    w(this, ae);
    /** @type {Effect | null} */
    w(this, be, null);
    /** @type {Effect | null} */
    w(this, ee, null);
    /** @type {Effect | null} */
    w(this, ce, null);
    /** @type {DocumentFragment | null} */
    w(this, qe, null);
    w(this, bt, 0);
    w(this, et, 0);
    w(this, Ut, !1);
    /** @type {Set<Effect>} */
    w(this, ir, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    w(this, lr, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    w(this, Ye, null);
    w(this, Tr, Xs(() => (y(this, Ye, St(i(this, bt))), () => {
      y(this, Ye, null);
    })));
    y(this, _e, t), y(this, ge, r), y(this, gt, (s) => {
      var o = (
        /** @type {Effect} */
        T
      );
      o.b = this, o.f |= Yr, n(s);
    }), this.parent = /** @type {Effect} */
    T.b, this.transform_error = a ?? this.parent?.transform_error ?? ((s) => s), y(this, ae, cn(() => {
      A(this, z, Qr).call(this);
    }, ei));
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    Xn(t, i(this, ir), i(this, lr));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!i(this, ge).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  update_pending_count(t, r) {
    A(this, z, Xr).call(this, t, r), y(this, bt, i(this, bt) + t), !(!i(this, Ye) || i(this, Ut)) && (y(this, Ut, !0), Ot(() => {
      y(this, Ut, !1), i(this, Ye) && Ht(i(this, Ye), i(this, bt));
    }));
  }
  get_effect_pending() {
    return i(this, Tr).call(this), h(
      /** @type {Source<number>} */
      i(this, Ye)
    );
  }
  /** @param {unknown} error */
  error(t) {
    if (!i(this, ge).onerror && !i(this, ge).failed)
      throw t;
    C?.is_fork ? (i(this, be) && C.skip_effect(i(this, be)), i(this, ee) && C.skip_effect(i(this, ee)), i(this, ce) && C.skip_effect(i(this, ce)), C.on_fork_commit(() => {
      A(this, z, en).call(this, t);
    })) : A(this, z, en).call(this, t);
  }
}
_e = new WeakMap(), an = new WeakMap(), ge = new WeakMap(), gt = new WeakMap(), ae = new WeakMap(), be = new WeakMap(), ee = new WeakMap(), ce = new WeakMap(), qe = new WeakMap(), bt = new WeakMap(), et = new WeakMap(), Ut = new WeakMap(), ir = new WeakMap(), lr = new WeakMap(), Ye = new WeakMap(), Tr = new WeakMap(), z = new WeakSet(), ni = function() {
  try {
    y(this, be, xe(() => i(this, gt).call(this, i(this, _e))));
  } catch (t) {
    this.error(t);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
ai = function(t) {
  const r = i(this, ge).failed;
  r && y(this, ce, xe(() => {
    r(
      i(this, _e),
      () => t,
      () => () => {
      }
    );
  }));
}, si = function() {
  const t = i(this, ge).pending;
  t && (this.is_pending = !0, y(this, ee, xe(() => t(i(this, _e)))), Ot(() => {
    var r = y(this, qe, document.createDocumentFragment()), n = nt();
    r.append(n), y(this, be, A(this, z, mr).call(this, () => xe(() => i(this, gt).call(this, n)))), i(this, et) === 0 && (i(this, _e).before(r), y(this, qe, null), kt(
      /** @type {Effect} */
      i(this, ee),
      () => {
        y(this, ee, null);
      }
    ), A(this, z, xr).call(
      this,
      /** @type {Batch} */
      C
    ));
  }));
}, Qr = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), y(this, et, 0), y(this, bt, 0), y(this, be, xe(() => {
      i(this, gt).call(this, i(this, _e));
    })), i(this, et) > 0) {
      var t = y(this, qe, document.createDocumentFragment());
      pn(i(this, be), t);
      const r = (
        /** @type {(anchor: Node) => void} */
        i(this, ge).pending
      );
      y(this, ee, xe(() => r(i(this, _e))));
    } else
      A(this, z, xr).call(
        this,
        /** @type {Batch} */
        C
      );
  } catch (r) {
    this.error(r);
  }
}, /**
 * @param {Batch} batch
 */
xr = function(t) {
  this.is_pending = !1, t.transfer_effects(i(this, ir), i(this, lr));
}, /**
 * @template T
 * @param {() => T} fn
 */
mr = function(t) {
  var r = T, n = S, a = ke;
  Be(i(this, ae)), we(i(this, ae)), zt(i(this, ae).ctx);
  try {
    return Ct.ensure(), t();
  } catch (s) {
    return $n(s), null;
  } finally {
    Be(r), we(n), zt(a);
  }
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 * @param {Batch} batch
 */
Xr = function(t, r) {
  var n;
  if (!this.has_pending_snippet()) {
    this.parent && A(n = this.parent, z, Xr).call(n, t, r);
    return;
  }
  y(this, et, i(this, et) + t), i(this, et) === 0 && (A(this, z, xr).call(this, r), i(this, ee) && kt(i(this, ee), () => {
    y(this, ee, null);
  }), i(this, qe) && (i(this, _e).before(i(this, qe)), y(this, qe, null)));
}, /**
 * @param {unknown} error
 */
en = function(t) {
  i(this, be) && (ie(i(this, be)), y(this, be, null)), i(this, ee) && (ie(i(this, ee)), y(this, ee, null)), i(this, ce) && (ie(i(this, ce)), y(this, ce, null));
  var r = i(this, ge).onerror;
  let n = i(this, ge).failed;
  var a = !1, s = !1;
  const o = () => {
    if (a) {
      Ys();
      return;
    }
    a = !0, s && js(), i(this, ce) !== null && kt(i(this, ce), () => {
      y(this, ce, null);
    }), A(this, z, mr).call(this, () => {
      A(this, z, Qr).call(this);
    });
  }, l = (u) => {
    try {
      s = !0, r?.(u, o), s = !1;
    } catch (f) {
      tt(f, i(this, ae) && i(this, ae).parent);
    }
    n && y(this, ce, A(this, z, mr).call(this, () => {
      try {
        return xe(() => {
          var f = (
            /** @type {Effect} */
            T
          );
          f.b = this, f.f |= Yr, n(
            i(this, _e),
            () => u,
            () => o
          );
        });
      } catch (f) {
        return tt(
          f,
          /** @type {Effect} */
          i(this, ae).parent
        ), null;
      }
    }));
  };
  Ot(() => {
    var u;
    try {
      u = this.transform_error(t);
    } catch (f) {
      tt(f, i(this, ae) && i(this, ae).parent);
      return;
    }
    u !== null && typeof u == "object" && typeof /** @type {any} */
    u.then == "function" ? u.then(
      l,
      /** @param {unknown} e */
      (f) => tt(f, i(this, ae) && i(this, ae).parent)
    ) : l(u);
  });
};
function ii(e, t, r, n) {
  const a = ia;
  var s = e.filter((v) => !v.settled);
  if (r.length === 0 && s.length === 0) {
    n(t.map(a));
    return;
  }
  var o = (
    /** @type {Effect} */
    T
  ), l = li(), u = s.length === 1 ? s[0].promise : s.length > 1 ? Promise.all(s.map((v) => v.promise)) : null;
  function f(v) {
    if ((o.f & Me) === 0) {
      l();
      try {
        n(v);
      } catch (g) {
        tt(g, o);
      }
      Er();
    }
  }
  var p = sa();
  if (r.length === 0) {
    u.then(() => f(t.map(a))).finally(p);
    return;
  }
  function d() {
    Promise.all(r.map((v) => /* @__PURE__ */ oi(v))).then((v) => f([...t.map(a), ...v])).catch((v) => tt(v, o)).finally(p);
  }
  u ? u.then(() => {
    l(), d(), Er();
  }) : d();
}
function li() {
  var e = (
    /** @type {Effect} */
    T
  ), t = S, r = ke, n = (
    /** @type {Batch} */
    C
  );
  return function(s = !0) {
    Be(e), we(t), zt(r), s && (e.f & Me) === 0 && (n?.activate(), n?.apply());
  };
}
function Er(e = !0) {
  Be(null), we(null), zt(null), e && C?.deactivate();
}
function sa() {
  var e = (
    /** @type {Effect} */
    T
  ), t = (
    /** @type {Boundary} */
    e.b
  ), r = (
    /** @type {Batch} */
    C
  ), n = t.is_rendered();
  return t.update_pending_count(1, r), r.increment(n, e), () => {
    t.update_pending_count(-1, r), r.decrement(n, e);
  };
}
// @__NO_SIDE_EFFECTS__
function ia(e) {
  var t = Q | $;
  return T !== null && (T.f |= Yt), {
    ctx: ke,
    deps: null,
    effects: null,
    equals: Yn,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      Y
    ),
    wv: 0,
    parent: T,
    ac: null
  };
}
const hr = Symbol("obsolete");
// @__NO_SIDE_EFFECTS__
function oi(e, t, r) {
  let n = (
    /** @type {Effect | null} */
    T
  );
  n === null && Ms();
  var a = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), s = St(
    /** @type {V} */
    Y
  ), o = !S, l = /* @__PURE__ */ new Set();
  return Ci(() => {
    var u = (
      /** @type {Effect} */
      T
    ), f = zn();
    a = f.promise;
    try {
      Promise.resolve(e()).then(f.resolve, (g) => {
        g !== Nr && f.reject(g);
      }).finally(Er);
    } catch (g) {
      f.reject(g), Er();
    }
    var p = (
      /** @type {Batch} */
      C
    );
    if (o) {
      if ((u.f & Tt) !== 0)
        var d = sa();
      if (
        /** @type {Boundary} */
        n.b.is_rendered()
      )
        p.async_deriveds.get(u)?.reject(hr);
      else
        for (const g of l.values())
          g.reject(hr);
      l.add(f), p.async_deriveds.set(u, f);
    }
    const v = (g, c = void 0) => {
      d?.(), l.delete(f), c !== hr && (p.activate(), c ? (s.f |= rt, Ht(s, c)) : ((s.f & rt) !== 0 && (s.f ^= rt), Ht(s, g)), p.deactivate());
    };
    f.promise.then(v, (g) => v(null, g || "unknown"));
  }), ki(() => {
    for (const u of l)
      u.reject(hr);
  }), new Promise((u) => {
    function f(p) {
      function d() {
        p === a ? u(s) : f(a);
      }
      p.then(d, d);
    }
    f(a);
  });
}
// @__NO_SIDE_EFFECTS__
function fi(e) {
  const t = /* @__PURE__ */ ia(e);
  return t.equals = Gn, t;
}
function ui(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var r = 0; r < t.length; r += 1)
      ie(
        /** @type {Effect} */
        t[r]
      );
  }
}
function fn(e) {
  var t, r = T, n = e.parent;
  if (!st && n !== null && e.v !== Y && // if it was never evaluated before, it's guaranteed to fail downstream, so we try to execute instead
  (n.f & (Me | te)) !== 0)
    return qs(), e.v;
  Be(n);
  try {
    e.f &= ~Et, ui(e), t = Ea(e);
  } finally {
    Be(r);
  }
  return t;
}
function la(e) {
  var t = fn(e);
  if (!e.equals(t) && (e.wv = ka(), (!C?.is_fork || e.deps === null) && (C !== null ? (C.capture(e, t, !0), Kr?.capture(e, t, !0)) : e.v = t, e.deps === null))) {
    V(e, G);
    return;
  }
  st || (Te !== null ? (dn() || C?.is_fork) && Te.set(e, t) : sn(e));
}
function di(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      (t.teardown || t.ac) && (t.teardown?.(), t.ac?.abort(Nr), t.fn !== null && (t.teardown = ws), t.ac = null, rr(t, 0), vn(t));
}
function oa(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      t.teardown && t.fn !== null && qt(t);
}
let Cr = /* @__PURE__ */ new Set();
const yt = /* @__PURE__ */ new Map();
let fa = !1;
function St(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Yn,
    rv: 0,
    wv: 0
  };
  return r;
}
// @__NO_SIDE_EFFECTS__
function F(e, t) {
  const r = St(e);
  return Ai(r), r;
}
// @__NO_SIDE_EFFECTS__
function ci(e, t = !1, r = !0) {
  const n = St(e);
  return t || (n.equals = Gn), n;
}
function E(e, t, r = !1) {
  S !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Ae || (S.f & kr) !== 0) && Jn() && (S.f & (Q | Se | Ft | kr)) !== 0 && (ye === null || !mt.call(ye, e)) && Ps();
  let n = r ? Dt(t) : t;
  return Ht(e, n, gr);
}
function Ht(e, t, r = null) {
  if (!e.equals(t)) {
    yt.set(e, st ? t : e.v);
    var n = Ct.ensure();
    if (n.capture(e, t), (e.f & Q) !== 0) {
      const a = (
        /** @type {Derived} */
        e
      );
      (e.f & $) !== 0 && fn(a), Te === null && sn(a);
    }
    e.wv = ka(), ua(e, $, r), T !== null && (T.f & G) !== 0 && (T.f & (Re | at)) === 0 && (pe === null ? Mi([e]) : pe.push(e)), !n.is_fork && Cr.size > 0 && !fa && vi();
  }
  return t;
}
function vi() {
  fa = !1;
  for (const e of Cr) {
    (e.f & G) !== 0 && V(e, je);
    let t;
    try {
      t = dr(e);
    } catch {
      t = !0;
    }
    t && qt(e);
  }
  Cr.clear();
}
function er(e) {
  E(e, e.v + 1);
}
function ua(e, t, r) {
  var n = e.reactions;
  if (n !== null)
    for (var a = n.length, s = 0; s < a; s++) {
      var o = n[s], l = o.f, u = (l & $) === 0;
      if (u && V(o, t), (l & kr) !== 0)
        Cr.add(
          /** @type {Effect} */
          o
        );
      else if ((l & Q) !== 0) {
        var f = (
          /** @type {Derived} */
          o
        );
        Te?.delete(f), (l & Et) === 0 && (l & me && (T === null || (T.f & wr) === 0) && (o.f |= Et), ua(f, je, r));
      } else if (u) {
        var p = (
          /** @type {Effect} */
          o
        );
        (l & Se) !== 0 && ze !== null && ze.add(p), r !== null ? r.push(p) : on(p);
      }
    }
}
function Dt(e) {
  if (typeof e != "object" || e === null || Ur in e)
    return e;
  const t = ks(e);
  if (t !== ms && t !== ys)
    return e;
  var r = /* @__PURE__ */ new Map(), n = Vn(e), a = /* @__PURE__ */ F(0), s = wt, o = (l) => {
    if (wt === s)
      return l();
    var u = S, f = wt;
    we(null), Ln(s);
    var p = l();
    return we(u), Ln(f), p;
  };
  return n && r.set("length", /* @__PURE__ */ F(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(l, u, f) {
        (!("value" in f) || f.configurable === !1 || f.enumerable === !1 || f.writable === !1) && Is();
        var p = r.get(u);
        return p === void 0 ? o(() => {
          var d = /* @__PURE__ */ F(f.value);
          return r.set(u, d), d;
        }) : E(p, f.value, !0), !0;
      },
      deleteProperty(l, u) {
        var f = r.get(u);
        if (f === void 0) {
          if (u in l) {
            const p = o(() => /* @__PURE__ */ F(Y));
            r.set(u, p), er(a);
          }
        } else
          E(f, Y), er(a);
        return !0;
      },
      get(l, u, f) {
        if (u === Ur)
          return e;
        var p = r.get(u), d = u in l;
        if (p === void 0 && (!d || Qt(l, u)?.writable) && (p = o(() => {
          var g = Dt(d ? l[u] : Y), c = /* @__PURE__ */ F(g);
          return c;
        }), r.set(u, p)), p !== void 0) {
          var v = h(p);
          return v === Y ? void 0 : v;
        }
        return Reflect.get(l, u, f);
      },
      getOwnPropertyDescriptor(l, u) {
        var f = Reflect.getOwnPropertyDescriptor(l, u);
        if (f && "value" in f) {
          var p = r.get(u);
          p && (f.value = h(p));
        } else if (f === void 0) {
          var d = r.get(u), v = d?.v;
          if (d !== void 0 && v !== Y)
            return {
              enumerable: !0,
              configurable: !0,
              value: v,
              writable: !0
            };
        }
        return f;
      },
      has(l, u) {
        if (u === Ur)
          return !0;
        var f = r.get(u), p = f !== void 0 && f.v !== Y || Reflect.has(l, u);
        if (f !== void 0 || T !== null && (!p || Qt(l, u)?.writable)) {
          f === void 0 && (f = o(() => {
            var v = p ? Dt(l[u]) : Y, g = /* @__PURE__ */ F(v);
            return g;
          }), r.set(u, f));
          var d = h(f);
          if (d === Y)
            return !1;
        }
        return p;
      },
      set(l, u, f, p) {
        var d = r.get(u), v = u in l;
        if (n && u === "length")
          for (var g = f; g < /** @type {Source<number>} */
          d.v; g += 1) {
            var c = r.get(g + "");
            c !== void 0 ? E(c, Y) : g in l && (c = o(() => /* @__PURE__ */ F(Y)), r.set(g + "", c));
          }
        if (d === void 0)
          (!v || Qt(l, u)?.writable) && (d = o(() => /* @__PURE__ */ F(void 0)), E(d, Dt(f)), r.set(u, d));
        else {
          v = d.v !== Y;
          var D = o(() => Dt(f));
          E(d, D);
        }
        var O = Reflect.getOwnPropertyDescriptor(l, u);
        if (O?.set && O.set.call(p, f), !v) {
          if (n && typeof u == "string") {
            var I = (
              /** @type {Source<number>} */
              r.get("length")
            ), M = Number(u);
            Number.isInteger(M) && M >= I.v && E(I, M + 1);
          }
          er(a);
        }
        return !0;
      },
      ownKeys(l) {
        h(a);
        var u = Reflect.ownKeys(l).filter((d) => {
          var v = r.get(d);
          return v === void 0 || v.v !== Y;
        });
        for (var [f, p] of r)
          p.v !== Y && !(f in l) && u.push(f);
        return u;
      },
      setPrototypeOf() {
        Ls();
      }
    }
  );
}
var Fn, da, ca, va;
function hi() {
  if (Fn === void 0) {
    Fn = window, da = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, r = Text.prototype;
    ca = Qt(t, "firstChild").get, va = Qt(t, "nextSibling").get, Mn(e) && (e[Gr] = void 0, e[Ts] = null, e[As] = void 0, e.__e = void 0), Mn(r) && (r[Jt] = void 0);
  }
}
function nt(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function Ge(e) {
  return (
    /** @type {TemplateNode | null} */
    ca.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function ur(e) {
  return (
    /** @type {TemplateNode | null} */
    va.call(e)
  );
}
function _(e, t) {
  return /* @__PURE__ */ Ge(e);
}
function pi(e, t = !1) {
  {
    var r = /* @__PURE__ */ Ge(e);
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ ur(r) : r;
  }
}
function m(e, t = 1, r = !1) {
  let n = e;
  for (; t--; )
    n = /** @type {TemplateNode} */
    /* @__PURE__ */ ur(n);
  return n;
}
function _i(e) {
  e.textContent = "";
}
function ha() {
  return !1;
}
function gi(e, t, r) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElementNS(Hs, e, void 0)
  );
}
let On = !1;
function bi() {
  On || (On = !0, document.addEventListener(
    "reset",
    (e) => {
      Promise.resolve().then(() => {
        if (!e.defaultPrevented)
          for (
            const t of
            /**@type {HTMLFormElement} */
            e.target.elements
          )
            t[_r]?.();
      });
    },
    // In the capture phase to guarantee we get noticed of it (no possibility of stopPropagation)
    { capture: !0 }
  ));
}
function un(e) {
  var t = S, r = T;
  we(null), Be(null);
  try {
    return e();
  } finally {
    we(t), Be(r);
  }
}
function xi(e, t, r, n = r) {
  e.addEventListener(t, () => un(r));
  const a = (
    /** @type {any} */
    e[_r]
  );
  a ? e[_r] = () => {
    a(), n(!0);
  } : e[_r] = () => n(!0), bi();
}
function mi(e) {
  T === null && (S === null && Fs(), Ds()), st && Ns();
}
function yi(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function it(e, t) {
  var r = T;
  r !== null && (r.f & te) !== 0 && (e |= te);
  var n = {
    ctx: ke,
    deps: null,
    nodes: null,
    f: e | $ | me,
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
  C?.register_created_effect(n);
  var a = n;
  if ((e & tr) !== 0)
    Nt !== null ? Nt.push(n) : Ct.ensure().schedule(n);
  else if (t !== null) {
    try {
      qt(n);
    } catch (o) {
      throw ie(n), o;
    }
    a.deps === null && a.teardown === null && a.nodes === null && a.first === a.last && // either `null`, or a singular child
    (a.f & Yt) === 0 && (a = a.first, (e & Se) !== 0 && (e & Vt) !== 0 && a !== null && (a.f |= Vt));
  }
  if (a !== null && (a.parent = r, r !== null && yi(a, r), S !== null && (S.f & Q) !== 0 && (e & at) === 0)) {
    var s = (
      /** @type {Derived} */
      S
    );
    (s.effects ?? (s.effects = [])).push(a);
  }
  return n;
}
function dn() {
  return S !== null && !Ae;
}
function ki(e) {
  const t = it(Rr, null);
  return V(t, G), t.teardown = e, t;
}
function wi(e) {
  mi();
  var t = (
    /** @type {Effect} */
    T.f
  ), r = !S && (t & Re) !== 0 && (t & Tt) === 0;
  if (r) {
    var n = (
      /** @type {ComponentContext} */
      ke
    );
    (n.e ?? (n.e = [])).push(e);
  } else
    return pa(e);
}
function pa(e) {
  return it(tr | Ss, e);
}
function Ei(e) {
  Ct.ensure();
  const t = it(at | Yt, e);
  return (r = {}) => new Promise((n) => {
    r.outro ? kt(t, () => {
      ie(t), n(void 0);
    }) : (ie(t), n(void 0));
  });
}
function Ci(e) {
  return it(Ft | Yt, e);
}
function _a(e, t = 0) {
  return it(Rr | t, e);
}
function J(e, t = [], r = [], n = []) {
  ii(n, t, r, (a) => {
    it(Rr, () => e(...a.map(h)));
  });
}
function cn(e, t = 0) {
  var r = it(Se | t, e);
  return r;
}
function xe(e) {
  return it(Re | Yt, e);
}
function ga(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = st, n = S;
    In(!0), we(null);
    try {
      t.call(null);
    } finally {
      In(r), we(n);
    }
  }
}
function vn(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    const a = r.ac;
    a !== null && un(() => {
      a.abort(Nr);
    });
    var n = r.next;
    (r.f & at) !== 0 ? r.parent = null : ie(r, t), r = n;
  }
}
function Si(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & Re) === 0 && ie(t), t = r;
  }
}
function ie(e, t = !0) {
  var r = !1;
  (t || (e.f & Cs) !== 0) && e.nodes !== null && e.nodes.end !== null && (Ti(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), r = !0), V(e, Rn), vn(e, t && !r), rr(e, 0);
  var n = e.nodes && e.nodes.t;
  if (n !== null)
    for (const s of n)
      s.stop();
  ga(e), e.f ^= Rn, e.f |= Me;
  var a = e.parent;
  a !== null && a.first !== null && ba(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function Ti(e, t) {
  for (; e !== null; ) {
    var r = e === t ? null : /* @__PURE__ */ ur(e);
    e.remove(), e = r;
  }
}
function ba(e) {
  var t = e.parent, r = e.prev, n = e.next;
  r !== null && (r.next = n), n !== null && (n.prev = r), t !== null && (t.first === e && (t.first = n), t.last === e && (t.last = r));
}
function kt(e, t, r = !0) {
  var n = [];
  xa(e, n, !0);
  var a = () => {
    r && ie(e), t && t();
  }, s = n.length;
  if (s > 0) {
    var o = () => --s || a();
    for (var l of n)
      l.out(o);
  } else
    a();
}
function xa(e, t, r) {
  if ((e.f & te) === 0) {
    e.f ^= te;
    var n = e.nodes && e.nodes.t;
    if (n !== null)
      for (const l of n)
        (l.is_global || r) && t.push(l);
    for (var a = e.first; a !== null; ) {
      var s = a.next;
      if ((a.f & at) === 0) {
        var o = (a.f & Vt) !== 0 || // If this is a branch effect without a block effect parent,
        // it means the parent block effect was pruned. In that case,
        // transparency information was transferred to the branch effect.
        (a.f & Re) !== 0 && (e.f & Se) !== 0;
        xa(a, t, o ? r : !1);
      }
      a = s;
    }
  }
}
function hn(e) {
  ma(e, !0);
}
function ma(e, t) {
  if ((e.f & te) !== 0) {
    e.f ^= te, (e.f & G) === 0 && (V(e, $), Ct.ensure().schedule(e));
    for (var r = e.first; r !== null; ) {
      var n = r.next, a = (r.f & Vt) !== 0 || (r.f & Re) !== 0;
      ma(r, a ? t : !1), r = n;
    }
    var s = e.nodes && e.nodes.t;
    if (s !== null)
      for (const o of s)
        (o.is_global || t) && o.in();
  }
}
function pn(e, t) {
  if (e.nodes)
    for (var r = e.nodes.start, n = e.nodes.end; r !== null; ) {
      var a = r === n ? null : /* @__PURE__ */ ur(r);
      t.append(r), r = a;
    }
}
let yr = !1, st = !1;
function In(e) {
  st = e;
}
let S = null, Ae = !1;
function we(e) {
  S = e;
}
let T = null;
function Be(e) {
  T = e;
}
let ye = null;
function Ai(e) {
  S !== null && (ye === null ? ye = [e] : ye.push(e));
}
let se = null, ue = 0, pe = null;
function Mi(e) {
  pe = e;
}
let ya = 1, ct = 0, wt = ct;
function Ln(e) {
  wt = e;
}
function ka() {
  return ++ya;
}
function dr(e) {
  var t = e.f;
  if ((t & $) !== 0)
    return !0;
  if (t & Q && (e.f &= ~Et), (t & je) !== 0) {
    for (var r = (
      /** @type {Value[]} */
      e.deps
    ), n = r.length, a = 0; a < n; a++) {
      var s = r[a];
      if (dr(
        /** @type {Derived} */
        s
      ) && la(
        /** @type {Derived} */
        s
      ), s.wv > e.wv)
        return !0;
    }
    (t & me) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    Te === null && V(e, G);
  }
  return !1;
}
function wa(e, t, r = !0) {
  var n = e.reactions;
  if (n !== null && !(ye !== null && mt.call(ye, e)))
    for (var a = 0; a < n.length; a++) {
      var s = n[a];
      (s.f & Q) !== 0 ? wa(
        /** @type {Derived} */
        s,
        t,
        !1
      ) : t === s && (r ? V(s, $) : (s.f & G) !== 0 && V(s, je), on(
        /** @type {Effect} */
        s
      ));
    }
}
function Ea(e) {
  var D;
  var t = se, r = ue, n = pe, a = S, s = ye, o = ke, l = Ae, u = wt, f = e.f;
  se = /** @type {null | Value[]} */
  null, ue = 0, pe = null, S = (f & (Re | at)) === 0 ? e : null, ye = null, zt(e.ctx), Ae = !1, wt = ++ct, e.ac !== null && (un(() => {
    e.ac.abort(Nr);
  }), e.ac = null);
  try {
    e.f |= wr;
    var p = (
      /** @type {Function} */
      e.fn
    ), d = p();
    e.f |= Tt;
    var v = e.deps, g = C?.is_fork;
    if (se !== null) {
      var c;
      if (g || rr(e, ue), v !== null && ue > 0)
        for (v.length = ue + se.length, c = 0; c < se.length; c++)
          v[ue + c] = se[c];
      else
        e.deps = v = se;
      if (dn() && (e.f & me) !== 0)
        for (c = ue; c < v.length; c++)
          ((D = v[c]).reactions ?? (D.reactions = [])).push(e);
    } else !g && v !== null && ue < v.length && (rr(e, ue), v.length = ue);
    if (Jn() && pe !== null && !Ae && v !== null && (e.f & (Q | je | $)) === 0)
      for (c = 0; c < /** @type {Source[]} */
      pe.length; c++)
        wa(
          pe[c],
          /** @type {Effect} */
          e
        );
    if (a !== null && a !== e) {
      if (ct++, a.deps !== null)
        for (let O = 0; O < r; O += 1)
          a.deps[O].rv = ct;
      if (t !== null)
        for (const O of t)
          O.rv = ct;
      pe !== null && (n === null ? n = pe : n.push(.../** @type {Source[]} */
      pe));
    }
    return (e.f & rt) !== 0 && (e.f ^= rt), d;
  } catch (O) {
    return $n(O);
  } finally {
    e.f ^= wr, se = t, ue = r, pe = n, S = a, ye = s, zt(o), Ae = l, wt = u;
  }
}
function Ri(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var n = bs.call(r, e);
    if (n !== -1) {
      var a = r.length - 1;
      a === 0 ? r = t.reactions = null : (r[n] = r[a], r.pop());
    }
  }
  if (r === null && (t.f & Q) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (se === null || !mt.call(se, t))) {
    var s = (
      /** @type {Derived} */
      t
    );
    (s.f & me) !== 0 && (s.f ^= me, s.f &= ~Et), s.v !== Y && sn(s), di(s), rr(s, 0);
  }
}
function rr(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var n = t; n < r.length; n++)
      Ri(e, r[n]);
}
function qt(e) {
  var t = e.f;
  if ((t & Me) === 0) {
    V(e, G);
    var r = T, n = yr;
    T = e, yr = !0;
    try {
      (t & (Se | Hn)) !== 0 ? Si(e) : vn(e), ga(e);
      var a = Ea(e);
      e.teardown = typeof a == "function" ? a : null, e.wv = ya;
      var s;
    } finally {
      yr = n, T = r;
    }
  }
}
async function Ni() {
  await Promise.resolve(), $s();
}
function h(e) {
  var t = e.f, r = (t & Q) !== 0;
  if (S !== null && !Ae) {
    var n = T !== null && (T.f & Me) !== 0;
    if (!n && (ye === null || !mt.call(ye, e))) {
      var a = S.deps;
      if ((S.f & wr) !== 0)
        e.rv < ct && (e.rv = ct, se === null && a !== null && a[ue] === e ? ue++ : se === null ? se = [e] : se.push(e));
      else {
        S.deps ?? (S.deps = []), mt.call(S.deps, e) || S.deps.push(e);
        var s = e.reactions;
        s === null ? e.reactions = [S] : mt.call(s, S) || s.push(S);
      }
    }
  }
  if (st && yt.has(e))
    return yt.get(e);
  if (r) {
    var o = (
      /** @type {Derived} */
      e
    );
    if (st) {
      var l = o.v;
      return ((o.f & G) === 0 && o.reactions !== null || Sa(o)) && (l = fn(o)), yt.set(o, l), l;
    }
    var u = (o.f & me) === 0 && !Ae && S !== null && (yr || (S.f & me) !== 0), f = (o.f & Tt) === 0;
    dr(o) && (u && (o.f |= me), la(o)), u && !f && (oa(o), Ca(o));
  }
  if (Te?.has(e))
    return Te.get(e);
  if ((e.f & rt) !== 0)
    throw e.v;
  return e.v;
}
function Ca(e) {
  if (e.f |= me, e.deps !== null)
    for (const t of e.deps)
      (t.reactions ?? (t.reactions = [])).push(e), (t.f & Q) !== 0 && (t.f & me) === 0 && (oa(
        /** @type {Derived} */
        t
      ), Ca(
        /** @type {Derived} */
        t
      ));
}
function Sa(e) {
  if (e.v === Y) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (yt.has(t) || (t.f & Q) !== 0 && Sa(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function Ta(e) {
  var t = Ae;
  try {
    return Ae = !0, e();
  } finally {
    Ae = t;
  }
}
const Di = ["touchstart", "touchmove"];
function Fi(e) {
  return Di.includes(e);
}
const vt = Symbol("events"), Aa = /* @__PURE__ */ new Set(), tn = /* @__PURE__ */ new Set();
function Ze(e, t, r) {
  (t[vt] ?? (t[vt] = {}))[e] = r;
}
function Oi(e) {
  for (var t = 0; t < e.length; t++)
    Aa.add(e[t]);
  for (var r of tn)
    r(e);
}
let Pn = null;
function jn(e) {
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), n = e.type, a = e.composedPath?.() || [], s = (
    /** @type {null | Element} */
    a[0] || e.target
  );
  Pn = e;
  var o = 0, l = Pn === e && e[vt];
  if (l) {
    var u = a.indexOf(l);
    if (u !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e[vt] = t;
      return;
    }
    var f = a.indexOf(t);
    if (f === -1)
      return;
    u <= f && (o = u);
  }
  if (s = /** @type {Element} */
  a[o] || e.target, s !== t) {
    xs(e, "currentTarget", {
      configurable: !0,
      get() {
        return s || r;
      }
    });
    var p = S, d = T;
    we(null), Be(null);
    try {
      for (var v, g = []; s !== null; ) {
        var c = s.assignedSlot || s.parentNode || /** @type {any} */
        s.host || null;
        try {
          var D = s[vt]?.[n];
          D != null && (!/** @type {any} */
          s.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === s) && D.call(s, e);
        } catch (O) {
          v ? g.push(O) : v = O;
        }
        if (e.cancelBubble || c === t || c === null)
          break;
        s = c;
      }
      if (v) {
        for (let O of g)
          queueMicrotask(() => {
            throw O;
          });
        throw v;
      }
    } finally {
      e[vt] = t, delete e.currentTarget, we(p), Be(d);
    }
  }
}
const Ii = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (e) => e
  })
);
function Li(e) {
  return (
    /** @type {string} */
    Ii?.createHTML(e) ?? e
  );
}
function Ma(e) {
  var t = gi("template");
  return t.innerHTML = Li(e.replaceAll("<!>", "<!---->")), t.content;
}
function nr(e, t) {
  var r = (
    /** @type {Effect} */
    T
  );
  r.nodes === null && (r.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function j(e, t) {
  var r = (t & qn) !== 0, n = (t & zs) !== 0, a, s = !e.startsWith("<!>");
  return () => {
    a === void 0 && (a = Ma(s ? e : "<!>" + e), r || (a = /** @type {TemplateNode} */
    /* @__PURE__ */ Ge(a)));
    var o = (
      /** @type {TemplateNode} */
      n || da ? document.importNode(a, !0) : a.cloneNode(!0)
    );
    if (r) {
      var l = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ge(o)
      ), u = (
        /** @type {TemplateNode} */
        o.lastChild
      );
      nr(l, u);
    } else
      nr(o, o);
    return o;
  };
}
// @__NO_SIDE_EFFECTS__
function Pi(e, t, r = "svg") {
  var n = !e.startsWith("<!>"), a = (t & qn) !== 0, s = `<${r}>${n ? e : "<!>" + e}</${r}>`, o;
  return () => {
    if (!o) {
      var l = (
        /** @type {DocumentFragment} */
        Ma(s)
      ), u = (
        /** @type {Element} */
        /* @__PURE__ */ Ge(l)
      );
      if (a)
        for (o = document.createDocumentFragment(); /* @__PURE__ */ Ge(u); )
          o.appendChild(
            /** @type {TemplateNode} */
            /* @__PURE__ */ Ge(u)
          );
      else
        o = /** @type {Element} */
        /* @__PURE__ */ Ge(u);
    }
    var f = (
      /** @type {TemplateNode} */
      o.cloneNode(!0)
    );
    if (a) {
      var p = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ge(f)
      ), d = (
        /** @type {TemplateNode} */
        f.lastChild
      );
      nr(p, d);
    } else
      nr(f, f);
    return f;
  };
}
// @__NO_SIDE_EFFECTS__
function cr(e, t) {
  return /* @__PURE__ */ Pi(e, t, "svg");
}
function ji(e = "") {
  {
    var t = nt(e + "");
    return nr(t, t), t;
  }
}
function R(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function P(e, t) {
  var r = t == null ? "" : typeof t == "object" ? `${t}` : t;
  r !== /** @type {any} */
  (e[Jt] ?? (e[Jt] = e.nodeValue)) && (e[Jt] = r, e.nodeValue = `${r}`);
}
function Bi(e, t) {
  return Ui(e, t);
}
const pr = /* @__PURE__ */ new Map();
function Ui(e, { target: t, anchor: r, props: n = {}, events: a, context: s, intro: o = !0, transformError: l }) {
  hi();
  var u = void 0, f = Ei(() => {
    var p = r ?? t.appendChild(nt());
    ti(
      /** @type {TemplateNode} */
      p,
      {
        pending: () => {
        }
      },
      (g) => {
        Kn({});
        var c = (
          /** @type {ComponentContext} */
          ke
        );
        s && (c.c = s), a && (n.$$events = a), u = e(g, n) || {}, Wn();
      },
      l
    );
    var d = /* @__PURE__ */ new Set(), v = (g) => {
      for (var c = 0; c < g.length; c++) {
        var D = g[c];
        if (!d.has(D)) {
          d.add(D);
          var O = Fi(D);
          for (const W of [t, document]) {
            var I = pr.get(W);
            I === void 0 && (I = /* @__PURE__ */ new Map(), pr.set(W, I));
            var M = I.get(D);
            M === void 0 ? (W.addEventListener(D, jn, { passive: O }), I.set(D, 1)) : I.set(D, M + 1);
          }
        }
      }
    };
    return v(Mr(Aa)), tn.add(v), () => {
      for (var g of d)
        for (const O of [t, document]) {
          var c = (
            /** @type {Map<string, number>} */
            pr.get(O)
          ), D = (
            /** @type {number} */
            c.get(g)
          );
          --D == 0 ? (O.removeEventListener(g, jn), c.delete(g), c.size === 0 && pr.delete(O)) : c.set(g, D);
        }
      tn.delete(v), p !== r && p.parentNode?.removeChild(p);
    };
  });
  return rn.set(u, f), u;
}
let rn = /* @__PURE__ */ new WeakMap();
function Vi(e, t) {
  const r = rn.get(e);
  return r ? (rn.delete(e), r(t)) : Promise.resolve();
}
var Ce, Pe, ve, xt, or, fr, Ar;
class zi {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, r = !0) {
    /** @type {TemplateNode} */
    ne(this, "anchor");
    /** @type {Map<Batch, Key>} */
    w(this, Ce, /* @__PURE__ */ new Map());
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
    w(this, Pe, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    w(this, ve, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    w(this, xt, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    w(this, or, !0);
    /**
     * @param {Batch} batch
     */
    w(this, fr, (t) => {
      if (i(this, Ce).has(t)) {
        var r = (
          /** @type {Key} */
          i(this, Ce).get(t)
        ), n = i(this, Pe).get(r);
        if (n)
          hn(n), i(this, xt).delete(r);
        else {
          var a = i(this, ve).get(r);
          a && (i(this, Pe).set(r, a.effect), i(this, ve).delete(r), a.fragment.lastChild.remove(), this.anchor.before(a.fragment), n = a.effect);
        }
        for (const [s, o] of i(this, Ce)) {
          if (i(this, Ce).delete(s), s === t)
            break;
          const l = i(this, ve).get(o);
          l && (ie(l.effect), i(this, ve).delete(o));
        }
        for (const [s, o] of i(this, Pe)) {
          if (s === r || i(this, xt).has(s)) continue;
          const l = () => {
            if (Array.from(i(this, Ce).values()).includes(s)) {
              var f = document.createDocumentFragment();
              pn(o, f), f.append(nt()), i(this, ve).set(s, { effect: o, fragment: f });
            } else
              ie(o);
            i(this, xt).delete(s), i(this, Pe).delete(s);
          };
          i(this, or) || !n ? (i(this, xt).add(s), kt(o, l, !1)) : l();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    w(this, Ar, (t) => {
      i(this, Ce).delete(t);
      const r = Array.from(i(this, Ce).values());
      for (const [n, a] of i(this, ve))
        r.includes(n) || (ie(a.effect), i(this, ve).delete(n));
    });
    this.anchor = t, y(this, or, r);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, r) {
    var n = (
      /** @type {Batch} */
      C
    ), a = ha();
    if (r && !i(this, Pe).has(t) && !i(this, ve).has(t))
      if (a) {
        var s = document.createDocumentFragment(), o = nt();
        s.append(o), i(this, ve).set(t, {
          effect: xe(() => r(o)),
          fragment: s
        });
      } else
        i(this, Pe).set(
          t,
          xe(() => r(this.anchor))
        );
    if (i(this, Ce).set(n, t), a) {
      for (const [l, u] of i(this, Pe))
        l === t ? n.unskip_effect(u) : n.skip_effect(u);
      for (const [l, u] of i(this, ve))
        l === t ? n.unskip_effect(u.effect) : n.skip_effect(u.effect);
      n.oncommit(i(this, fr)), n.ondiscard(i(this, Ar));
    } else
      i(this, fr).call(this, n);
  }
}
Ce = new WeakMap(), Pe = new WeakMap(), ve = new WeakMap(), xt = new WeakMap(), or = new WeakMap(), fr = new WeakMap(), Ar = new WeakMap();
function Z(e, t, r = !1) {
  var n = new zi(e), a = r ? Vt : 0;
  function s(o, l) {
    n.ensure(o, l);
  }
  cn(() => {
    var o = !1;
    t((l, u = 0) => {
      o = !0, s(u, l);
    }), o || s(-1, null);
  }, a);
}
function Hi(e, t) {
  return t;
}
function qi(e, t, r) {
  for (var n = [], a = t.length, s, o = t.length, l = 0; l < a; l++) {
    let d = t[l];
    kt(
      d,
      () => {
        if (s) {
          if (s.pending.delete(d), s.done.add(d), s.pending.size === 0) {
            var v = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            nn(e, Mr(s.done)), v.delete(s), v.size === 0 && (e.outrogroups = null);
          }
        } else
          o -= 1;
      },
      !1
    );
  }
  if (o === 0) {
    var u = n.length === 0 && r !== null;
    if (u) {
      var f = (
        /** @type {Element} */
        r
      ), p = (
        /** @type {Element} */
        f.parentNode
      );
      _i(p), p.append(f), e.items.clear();
    }
    nn(e, t, !u);
  } else
    s = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ?? (e.outrogroups = /* @__PURE__ */ new Set())).add(s);
}
function nn(e, t, r = !0) {
  var n;
  if (e.pending.size > 0) {
    n = /* @__PURE__ */ new Set();
    for (const o of e.pending.values())
      for (const l of o)
        n.add(
          /** @type {EachItem} */
          e.items.get(l).e
        );
  }
  for (var a = 0; a < t.length; a++) {
    var s = t[a];
    if (n?.has(s)) {
      s.f |= Ke;
      const o = document.createDocumentFragment();
      pn(s, o);
    } else
      ie(t[a], r);
  }
}
var Bn;
function Yi(e, t, r, n, a, s = null) {
  var o = e, l = /* @__PURE__ */ new Map();
  {
    var u = (
      /** @type {Element} */
      e
    );
    o = u.appendChild(nt());
  }
  var f = null, p = /* @__PURE__ */ fi(() => {
    var M = r();
    return Vn(M) ? M : M == null ? [] : Mr(M);
  }), d, v = /* @__PURE__ */ new Map(), g = !0;
  function c(M) {
    (I.effect.f & Me) === 0 && (I.pending.delete(M), I.fallback = f, Gi(I, d, o, t, n), f !== null && (d.length === 0 ? (f.f & Ke) === 0 ? hn(f) : (f.f ^= Ke, $t(f, null, o)) : kt(f, () => {
      f = null;
    })));
  }
  function D(M) {
    I.pending.delete(M);
  }
  var O = cn(() => {
    d = /** @type {V[]} */
    h(p);
    for (var M = d.length, W = /* @__PURE__ */ new Set(), H = (
      /** @type {Batch} */
      C
    ), he = ha(), le = 0; le < M; le += 1) {
      var Ue = d[le], oe = n(Ue, le), Ee = g ? null : l.get(oe);
      Ee ? (Ee.v && Ht(Ee.v, Ue), Ee.i && Ht(Ee.i, le), he && H.unskip_effect(Ee.e)) : (Ee = Ki(
        l,
        g ? o : Bn ?? (Bn = nt()),
        Ue,
        oe,
        le,
        a,
        t,
        r
      ), g || (Ee.e.f |= Ke), l.set(oe, Ee)), W.add(oe);
    }
    if (M === 0 && s && !f && (g ? f = xe(() => s(o)) : (f = xe(() => s(Bn ?? (Bn = nt()))), f.f |= Ke)), M > W.size && Rs(), !g)
      if (v.set(H, W), he) {
        for (const [Dr, Fr] of l)
          W.has(Dr) || H.skip_effect(Fr.e);
        H.oncommit(c), H.ondiscard(D);
      } else
        c(H);
    h(p);
  }), I = { effect: O, items: l, pending: v, outrogroups: null, fallback: f };
  g = !1;
}
function Kt(e) {
  for (; e !== null && (e.f & Re) === 0; )
    e = e.next;
  return e;
}
function Gi(e, t, r, n, a) {
  var s = t.length, o = e.items, l = Kt(e.effect.first), u, f = null, p = [], d = [], v, g, c, D;
  for (D = 0; D < s; D += 1) {
    if (v = t[D], g = a(v, D), c = /** @type {EachItem} */
    o.get(g).e, e.outrogroups !== null)
      for (const oe of e.outrogroups)
        oe.pending.delete(c), oe.done.delete(c);
    if ((c.f & te) !== 0 && hn(c), (c.f & Ke) !== 0)
      if (c.f ^= Ke, c === l)
        $t(c, null, r);
      else {
        var O = f ? f.next : l;
        c === e.effect.last && (e.effect.last = c.prev), c.prev && (c.prev.next = c.next), c.next && (c.next.prev = c.prev), $e(e, f, c), $e(e, c, O), $t(c, O, r), f = c, p = [], d = [], l = Kt(f.next);
        continue;
      }
    if (c !== l) {
      if (u !== void 0 && u.has(c)) {
        if (p.length < d.length) {
          var I = d[0], M;
          f = I.prev;
          var W = p[0], H = p[p.length - 1];
          for (M = 0; M < p.length; M += 1)
            $t(p[M], I, r);
          for (M = 0; M < d.length; M += 1)
            u.delete(d[M]);
          $e(e, W.prev, H.next), $e(e, f, W), $e(e, H, I), l = I, f = H, D -= 1, p = [], d = [];
        } else
          u.delete(c), $t(c, l, r), $e(e, c.prev, c.next), $e(e, c, f === null ? e.effect.first : f.next), $e(e, f, c), f = c;
        continue;
      }
      for (p = [], d = []; l !== null && l !== c; )
        (u ?? (u = /* @__PURE__ */ new Set())).add(l), d.push(l), l = Kt(l.next);
      if (l === null)
        continue;
    }
    (c.f & Ke) === 0 && p.push(c), f = c, l = Kt(c.next);
  }
  if (e.outrogroups !== null) {
    for (const oe of e.outrogroups)
      oe.pending.size === 0 && (nn(e, Mr(oe.done)), e.outrogroups?.delete(oe));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (l !== null || u !== void 0) {
    var he = [];
    if (u !== void 0)
      for (c of u)
        (c.f & te) === 0 && he.push(c);
    for (; l !== null; )
      (l.f & te) === 0 && l !== e.fallback && he.push(l), l = Kt(l.next);
    var le = he.length;
    if (le > 0) {
      var Ue = s === 0 ? r : null;
      qi(e, he, Ue);
    }
  }
}
function Ki(e, t, r, n, a, s, o, l) {
  var u = (o & Bs) !== 0 ? (o & Vs) === 0 ? /* @__PURE__ */ ci(r, !1, !1) : St(r) : null, f = (o & Us) !== 0 ? St(a) : null;
  return {
    v: u,
    i: f,
    e: xe(() => (s(t, u ?? r, f ?? a, l), () => {
      e.delete(n);
    }))
  };
}
function $t(e, t, r) {
  if (e.nodes)
    for (var n = e.nodes.start, a = e.nodes.end, s = t && (t.f & Ke) === 0 ? (
      /** @type {EffectNodes} */
      t.nodes.start
    ) : r; n !== null; ) {
      var o = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ ur(n)
      );
      if (s.before(n), n === a)
        return;
      n = o;
    }
}
function $e(e, t, r) {
  t === null ? e.effect.first = r : t.next = r, r === null ? e.effect.last = t : r.prev = t;
}
function Wi(e, t, r) {
  var n = e == null ? "" : "" + e;
  return n === "" ? null : n;
}
function Wt(e, t, r, n, a, s) {
  var o = (
    /** @type {any} */
    e[Gr]
  );
  if (o !== r || o === void 0) {
    var l = Wi(r);
    l == null ? e.removeAttribute("class") : e.className = l, e[Gr] = r;
  }
  return s;
}
function Ji(e, t, r = t) {
  var n = /* @__PURE__ */ new WeakSet();
  xi(e, "input", async (a) => {
    var s = a ? e.defaultValue : e.value;
    if (s = Hr(e) ? qr(s) : s, r(s), C !== null && n.add(C), await Ni(), s !== (s = t())) {
      var o = e.selectionStart, l = e.selectionEnd, u = e.value.length;
      if (e.value = s ?? "", l !== null) {
        var f = e.value.length;
        o === l && l === u && f > u ? (e.selectionStart = f, e.selectionEnd = f) : (e.selectionStart = o, e.selectionEnd = Math.min(l, f));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  Ta(t) == null && e.value && (r(Hr(e) ? qr(e.value) : e.value), C !== null && n.add(C)), _a(() => {
    var a = t();
    if (e === document.activeElement) {
      var s = (
        /** @type {Batch} */
        C
      );
      if (n.has(s))
        return;
    }
    Hr(e) && a === qr(e.value) || e.type === "date" && !a && !e.value || a !== e.value && (e.value = a ?? "");
  });
}
function Hr(e) {
  var t = e.type;
  return t === "number" || t === "range";
}
function qr(e) {
  return e === "" ? null : +e;
}
const Zi = "5";
var Un;
typeof window < "u" && ((Un = window.__svelte ?? (window.__svelte = {})).v ?? (Un.v = /* @__PURE__ */ new Set())).add(Zi);
var $i = /* @__PURE__ */ cr('<svg class="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path></svg>'), Qi = /* @__PURE__ */ cr('<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>'), Xi = /* @__PURE__ */ j('<div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-12 text-center"><svg class="w-8 h-8 animate-spin text-blue-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path></svg> <p class="text-gray-500 dark:text-gray-400">Loading managed services...</p></div>'), el = /* @__PURE__ */ j('<div class="bg-red-50 dark:bg-red-950/50 border border-red-200 dark:border-red-800 rounded-xl p-6 text-center"><p class="text-red-700 dark:text-red-300 font-medium"> </p> <button class="mt-4 px-3 py-1.5 text-sm font-medium rounded-lg bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 hover:bg-red-200 dark:hover:bg-red-800 transition-colors">Retry</button></div>'), tl = /* @__PURE__ */ j('<span class="inline-flex items-center mt-1 px-2 py-0.5 text-xs font-medium rounded-full bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-300">Update available</span>'), rl = /* @__PURE__ */ j('<span class="inline-flex items-center mt-1 px-2 py-0.5 text-xs font-medium rounded-full bg-amber-100 text-amber-700 dark:bg-amber-900/50 dark:text-amber-300"> </span>'), nl = /* @__PURE__ */ j('<span class="text-xs text-gray-400 dark:text-gray-500 mt-1"> </span>'), al = /* @__PURE__ */ cr('<svg class="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path></svg> Upgrading...', 1), sl = /* @__PURE__ */ j('<div class="flex items-center justify-between"><div><p class="text-sm text-gray-700 dark:text-gray-300">Upgrade from <span class="font-mono font-semibold"> </span> to <span class="font-mono font-semibold text-green-600 dark:text-green-400"> </span></p> <p class="text-xs text-gray-500 dark:text-gray-400 mt-0.5"> </p></div> <button class="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg bg-green-600 text-white hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"><!></button></div>'), il = /* @__PURE__ */ j('<div class="flex items-center gap-3 p-3 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg"><svg class="w-5 h-5 text-amber-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"></path></svg> <div><p class="text-sm font-medium text-amber-800 dark:text-amber-200">Insufficient credits</p> <p class="text-xs text-amber-600 dark:text-amber-400 mt-0.5"> </p></div></div>'), ll = /* @__PURE__ */ j('<div class="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-lg"><svg class="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> <p class="text-sm text-green-700 dark:text-green-300">Your realm is up to date.</p></div>'), ol = /* @__PURE__ */ j('<p class="text-sm text-gray-500 dark:text-gray-400">No version information available from the registry.</p>'), fl = /* @__PURE__ */ j('<div class="mt-3 p-3 bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-lg"><p class="text-sm text-red-700 dark:text-red-300"> </p></div>'), ul = /* @__PURE__ */ j('<div class="mt-3 p-3 bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-lg"><p class="text-sm text-green-700 dark:text-green-300"> </p></div>'), dl = /* @__PURE__ */ cr('<svg class="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path></svg> Redirecting to payment...', 1), cl = /* @__PURE__ */ cr('<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path></svg> Purchase with Credit Card', 1), vl = /* @__PURE__ */ j('<div class="p-3 bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-lg"><p class="text-sm text-red-700 dark:text-red-300"> </p></div>'), hl = /* @__PURE__ */ j('<p class="text-xs text-amber-600 dark:text-amber-400">Billing service not configured. Contact your realm administrator.</p>'), pl = /* @__PURE__ */ j('<div class="space-y-4"><div><label for="topup-slider" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"> </label> <input id="topup-slider" type="range" min="1" max="50" class="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-600"/> <div class="flex justify-between text-xs text-gray-400 dark:text-gray-500 mt-1"><span>1 credit</span> <span>50 credits</span></div></div> <div class="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg"><div><p class="text-sm font-medium text-gray-700 dark:text-gray-300"> </p> <p class="text-xs text-gray-500 dark:text-gray-400">$1 per credit</p></div> <p class="text-lg font-bold text-gray-900 dark:text-white"> </p></div> <button class="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"><!></button> <!> <!></div>'), _l = /* @__PURE__ */ j('<button class="p-1.5 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors flex-shrink-0" title="Copy to clipboard"><svg class="w-4 h-4 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg></button>'), gl = /* @__PURE__ */ j('<div><p class="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Registry Canister ID</p> <div class="flex items-center gap-2 mt-1"><code class="text-sm font-mono bg-white dark:bg-gray-800 px-3 py-1.5 rounded border border-gray-200 dark:border-gray-600 text-gray-800 dark:text-gray-200 flex-1 overflow-x-auto"> </code> <button class="p-1.5 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors flex-shrink-0" title="Copy to clipboard"><svg class="w-4 h-4 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg></button></div></div>'), bl = /* @__PURE__ */ j(`<div class="space-y-4"><div class="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg space-y-3"><h3 class="text-sm font-semibold text-gray-700 dark:text-gray-300">Transfer Tokens to Purchase Credits</h3> <p class="text-sm text-gray-600 dark:text-gray-400">You can purchase credits for this realm by transferring ckBTC, ckUSDC, or other supported tokens to the registry canister.</p> <div class="space-y-2"><div><p class="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Realm Canister ID (credit account)</p> <div class="flex items-center gap-2 mt-1"><code class="text-sm font-mono bg-white dark:bg-gray-800 px-3 py-1.5 rounded border border-gray-200 dark:border-gray-600 text-gray-800 dark:text-gray-200 flex-1 overflow-x-auto"> </code> <!></div></div> <!></div></div> <div class="p-4 bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-lg"><h4 class="text-sm font-medium text-blue-800 dark:text-blue-200 mb-2">How it works</h4> <ol class="text-sm text-blue-700 dark:text-blue-300 space-y-1.5 list-decimal list-inside"><li>Transfer ckBTC or ckUSDC to the registry canister</li> <li>Include the realm canister ID in the transfer memo</li> <li>Credits will be allocated to the realm's account</li></ol></div> <div class="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg"><h4 class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">CLI Alternative</h4> <p class="text-xs text-gray-500 dark:text-gray-400 mb-2">Operators can also add credits via the Realms CLI:</p> <code class="block text-xs font-mono bg-white dark:bg-gray-800 px-3 py-2 rounded border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 overflow-x-auto"> </code></div></div>`), xl = /* @__PURE__ */ j('<span class="text-xs text-gray-400 dark:text-gray-500"> </span>'), ml = /* @__PURE__ */ j('<div class="p-6 text-center"><svg class="w-5 h-5 animate-spin text-gray-400 mx-auto mb-2" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path></svg> <p class="text-sm text-gray-400 dark:text-gray-500">Loading transactions...</p></div>'), yl = /* @__PURE__ */ j('<div class="p-6 text-center"><p class="text-sm text-gray-400 dark:text-gray-500">No transactions yet.</p></div>'), kl = /* @__PURE__ */ j('<div class="px-5 py-3 flex items-center justify-between"><div class="min-w-0 flex-1"><div class="flex items-center gap-2"><span> </span> <span class="text-sm text-gray-700 dark:text-gray-300 truncate"> </span></div> <p class="text-xs text-gray-400 dark:text-gray-500 mt-0.5"> </p></div> <div class="text-right ml-4 flex-shrink-0"><p> </p></div></div>'), wl = /* @__PURE__ */ j('<div class="divide-y divide-gray-100 dark:divide-gray-700"></div>'), El = /* @__PURE__ */ j('<div class="text-center"><p class="text-xs text-gray-400 dark:text-gray-500">Realm canister: <span class="font-mono"> </span></p></div>'), Cl = /* @__PURE__ */ j('<div class="grid grid-cols-1 md:grid-cols-3 gap-4"><div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4"><p class="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">Current Version</p> <p class="text-xl font-bold text-gray-900 dark:text-white mt-1 font-mono"> </p></div> <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4"><p class="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">Latest Available</p> <p> </p> <!></div> <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4"><p class="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">Realm Credits</p> <p class="text-xl font-bold text-blue-600 dark:text-blue-400 mt-1"> </p> <!></div></div> <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden"><div class="bg-gray-50 dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-700 px-5 py-3"><h2 class="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide">Realm Upgrade</h2></div> <div class="p-5"><!> <!> <!></div></div> <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden"><div class="bg-gray-50 dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-700 px-5 py-3"><h2 class="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide">Top Up Credits</h2></div> <div class="flex border-b border-gray-200 dark:border-gray-700"><button>Credit Card</button> <button>Crypto (ckBTC / ckUSDC)</button></div> <div class="p-5"><!></div></div> <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden"><div class="bg-gray-50 dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-700 px-5 py-3 flex items-center justify-between"><h2 class="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide">Transaction History</h2> <!></div> <!></div> <!>', 1), Sl = /* @__PURE__ */ j('<div class="p-6 max-w-4xl mx-auto space-y-6"><div class="flex items-center justify-between"><div class="flex items-center gap-3"><div class="w-10 h-10 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center"><svg class="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg></div> <div><h1 class="text-2xl font-bold text-gray-900 dark:text-white">Managed Services</h1> <p class="text-sm text-gray-500 dark:text-gray-400">Version management, upgrades & credits</p></div></div> <button class="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"><!> Refresh</button></div> <!></div>');
function Tl(e, t) {
  Kn(t, !0);
  let r = /* @__PURE__ */ F(!0), n = /* @__PURE__ */ F(""), a = /* @__PURE__ */ F(""), s = /* @__PURE__ */ F(""), o = /* @__PURE__ */ F(""), l = /* @__PURE__ */ F(5), u = /* @__PURE__ */ F(""), f = /* @__PURE__ */ F(""), p = /* @__PURE__ */ F(!1), d = /* @__PURE__ */ F(!1), v = /* @__PURE__ */ F(""), g = /* @__PURE__ */ F(""), c = /* @__PURE__ */ F(0), D = /* @__PURE__ */ F(0), O = /* @__PURE__ */ F(0), I = /* @__PURE__ */ F(Dt([])), M = /* @__PURE__ */ F(!1), W = /* @__PURE__ */ F("card"), H = /* @__PURE__ */ F(10), he = /* @__PURE__ */ F(!1), le = /* @__PURE__ */ F("");
  async function Ue() {
    E(r, !0), E(n, "");
    try {
      const x = await t.ctx.callSync("get_config");
      E(a, x?.billing_service_url || "", !0), E(s, x?.realm_canister_id || "", !0), E(o, x?.registry_canister_id || "", !0), E(l, x?.upgrade_cost_credits || 5, !0), E(u, x?.current_version || "", !0);
      try {
        const L = await t.ctx.backend.get_available_upgrade(""), q = JSON.parse(L);
        q.success && (E(u, q.current_version || h(u), !0), E(f, q.latest_version || "", !0), E(p, q.upgrade_available || !1, !0));
      } catch (L) {
        console.warn("Could not check upgrade availability:", L.message);
      }
      try {
        const L = await t.ctx.backend.get_realm_credits(""), q = JSON.parse(L);
        q.success && q.credits && (E(c, q.credits.balance || 0, !0), E(D, q.credits.total_purchased || 0, !0), E(O, q.credits.total_spent || 0, !0));
      } catch (L) {
        console.warn("Could not fetch realm credits:", L.message);
      }
      await oe();
    } catch (x) {
      E(n, x?.message || String(x), !0);
    } finally {
      E(r, !1);
    }
  }
  async function oe() {
    E(M, !0);
    try {
      const x = await t.ctx.callAsync("get_transactions", { limit: 20 });
      E(I, x?.transactions || [], !0);
    } catch (x) {
      console.warn("Could not fetch transactions:", x.message), E(I, [], !0);
    } finally {
      E(M, !1);
    }
  }
  async function Ee() {
    E(d, !0), E(v, ""), E(g, "");
    try {
      const x = await t.ctx.backend.request_upgrade(""), L = JSON.parse(x);
      if (L.success) {
        const q = L.job_id || "";
        E(g, `Upgrade to ${L.target_version || "latest"} initiated (job: ${q})`), E(p, !1);
      } else
        E(v, L.error || "Upgrade request failed", !0);
    } catch (x) {
      E(v, x.message || "Failed to request upgrade", !0);
    } finally {
      E(d, !1);
    }
  }
  async function Dr() {
    if (!(!h(a) || h(H) < 1 || h(H) > 50)) {
      E(he, !0), E(le, "");
      try {
        const x = await fetch(`${h(a)}/checkout/create-session`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            principal_id: h(s),
            amount: h(H)
          })
        });
        if (!x.ok) {
          const q = await x.json();
          throw new Error(q.detail || "Failed to create checkout session");
        }
        const L = await x.json();
        window.location.href = L.checkout_url;
      } catch (x) {
        E(le, x.message || "Top-up failed", !0);
      } finally {
        E(he, !1);
      }
    }
  }
  function Fr(x) {
    return x ? new Date(x * 1e3).toLocaleDateString(void 0, {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    }) : "—";
  }
  function Ra(x) {
    return { topup: "Top-up", spend: "Spent", hold: "Hold" }[x] || x;
  }
  function Na(x) {
    return x === "topup" ? "text-green-600 dark:text-green-400" : x === "spend" || x === "hold" ? "text-red-600 dark:text-red-400" : "text-gray-600 dark:text-gray-400";
  }
  wi(() => {
    Ue();
  });
  var _n = Sl(), gn = _(_n), Or = m(_(gn), 2), Da = _(Or);
  {
    var Fa = (x) => {
      var L = $i();
      R(x, L);
    }, Oa = (x) => {
      var L = Qi();
      R(x, L);
    };
    Z(Da, (x) => {
      h(r) ? x(Fa) : x(Oa, -1);
    });
  }
  var Ia = m(gn, 2);
  {
    var La = (x) => {
      var L = Xi();
      R(x, L);
    }, Pa = (x) => {
      var L = el(), q = _(L), vr = _(q), Ir = m(q, 2);
      J(() => P(vr, `Error: ${h(n) ?? ""}`)), Ze("click", Ir, Ue), R(x, L);
    }, ja = (x) => {
      var L = Cl(), q = pi(L), vr = _(q), Ir = m(_(vr), 2), Ba = _(Ir), bn = m(vr, 2), Lr = m(_(bn), 2), Ua = _(Lr), Va = m(Lr, 2);
      {
        var za = (b) => {
          var k = tl();
          R(b, k);
        };
        Z(Va, (b) => {
          h(p) && b(za);
        });
      }
      var Ha = m(bn, 2), xn = m(_(Ha), 2), qa = _(xn), Ya = m(xn, 2);
      {
        var Ga = (b) => {
          var k = rl(), B = _(k);
          J(() => P(B, `Need ${h(l) ?? ""} for upgrade`)), R(b, k);
        }, Ka = (b) => {
          var k = nl(), B = _(k);
          J(() => P(B, `${h(l) ?? ""} per upgrade`)), R(b, k);
        };
        Z(Ya, (b) => {
          h(c) < h(l) ? b(Ga) : b(Ka, -1);
        });
      }
      var mn = m(q, 2), Wa = m(_(mn), 2), yn = _(Wa);
      {
        var Ja = (b) => {
          var k = sl(), B = _(k), U = _(B), re = m(_(U)), We = _(re), Ne = m(re, 2), De = _(Ne), lt = m(U, 2), ot = _(lt), Ve = m(B, 2), ft = _(Ve);
          {
            var Fe = (fe) => {
              var X = al();
              R(fe, X);
            }, ut = (fe) => {
              var X = ji();
              J(() => P(X, `Upgrade to ${h(f) ?? ""}`)), R(fe, X);
            };
            Z(ft, (fe) => {
              h(d) ? fe(Fe) : fe(ut, -1);
            });
          }
          J(() => {
            P(We, h(u)), P(De, h(f)), P(ot, `Cost: ${h(l) ?? ""} credits. Both backend and frontend will be upgraded.`), Ve.disabled = h(d);
          }), Ze("click", Ve, Ee), R(b, k);
        }, Za = (b) => {
          var k = il(), B = m(_(k), 2), U = m(_(B), 2), re = _(U);
          J(() => P(re, `You have ${h(c) ?? ""} credits but need ${h(l) ?? ""} to upgrade. Use the top-up section below to purchase more.`)), R(b, k);
        }, $a = (b) => {
          var k = ll();
          R(b, k);
        }, Qa = (b) => {
          var k = ol();
          R(b, k);
        };
        Z(yn, (b) => {
          h(p) && h(c) >= h(l) ? b(Ja) : h(p) && h(c) < h(l) ? b(Za, 1) : !h(p) && h(f) ? b($a, 2) : b(Qa, -1);
        });
      }
      var kn = m(yn, 2);
      {
        var Xa = (b) => {
          var k = fl(), B = _(k), U = _(B);
          J(() => P(U, h(v))), R(b, k);
        };
        Z(kn, (b) => {
          h(v) && b(Xa);
        });
      }
      var es = m(kn, 2);
      {
        var ts = (b) => {
          var k = ul(), B = _(k), U = _(B);
          J(() => P(U, h(g))), R(b, k);
        };
        Z(es, (b) => {
          h(g) && b(ts);
        });
      }
      var wn = m(mn, 2), En = m(_(wn), 2), Pr = _(En), Cn = m(Pr, 2), rs = m(En, 2), ns = _(rs);
      {
        var as = (b) => {
          var k = pl(), B = _(k), U = _(B), re = _(U), We = m(U, 2), Ne = m(B, 2), De = _(Ne), lt = _(De), ot = _(lt), Ve = m(De, 2), ft = _(Ve), Fe = m(Ne, 2), ut = _(Fe);
          {
            var fe = (K) => {
              var Je = dl();
              R(K, Je);
            }, X = (K) => {
              var Je = cl();
              R(K, Je);
            };
            Z(ut, (K) => {
              h(he) ? K(fe) : K(X, -1);
            });
          }
          var Oe = m(Fe, 2);
          {
            var Gt = (K) => {
              var Je = vl(), hs = _(Je), ps = _(hs);
              J(() => P(ps, h(le))), R(K, Je);
            };
            Z(Oe, (K) => {
              h(le) && K(Gt);
            });
          }
          var At = m(Oe, 2);
          {
            var jr = (K) => {
              var Je = hl();
              R(K, Je);
            };
            Z(At, (K) => {
              h(a) || K(jr);
            });
          }
          J(() => {
            P(re, `Credits to purchase (${h(H) ?? ""} credits = $${h(H) ?? ""})`), P(ot, `${h(H) ?? ""} credits`), P(ft, `$${h(H) ?? ""}.00`), Fe.disabled = h(he) || !h(a);
          }), Ji(We, () => h(H), (K) => E(H, K)), Ze("click", Fe, Dr), R(b, k);
        }, ss = (b) => {
          var k = bl(), B = _(k), U = m(_(B), 4), re = _(U), We = m(_(re), 2), Ne = _(We), De = _(Ne), lt = m(Ne, 2);
          {
            var ot = (X) => {
              var Oe = _l();
              Ze("click", Oe, () => navigator.clipboard.writeText(h(s))), R(X, Oe);
            };
            Z(lt, (X) => {
              h(s) && X(ot);
            });
          }
          var Ve = m(re, 2);
          {
            var ft = (X) => {
              var Oe = gl(), Gt = m(_(Oe), 2), At = _(Gt), jr = _(At), K = m(At, 2);
              J(() => P(jr, h(o))), Ze("click", K, () => navigator.clipboard.writeText(h(o))), R(X, Oe);
            };
            Z(Ve, (X) => {
              h(o) && X(ft);
            });
          }
          var Fe = m(B, 4), ut = m(_(Fe), 4), fe = _(ut);
          J(() => {
            P(De, h(s) || "Loading..."), P(fe, `realms registry billing add-credits --principal ${(h(s) || "<realm_canister_id>") ?? ""} --amount 10`);
          }), R(b, k);
        };
        Z(ns, (b) => {
          h(W) === "card" ? b(as) : b(ss, -1);
        });
      }
      var Sn = m(wn, 2), Tn = _(Sn), is = m(_(Tn), 2);
      {
        var ls = (b) => {
          var k = xl(), B = _(k);
          J(() => P(B, `${h(I).length ?? ""} transactions`)), R(b, k);
        };
        Z(is, (b) => {
          h(I).length > 0 && b(ls);
        });
      }
      var os = m(Tn, 2);
      {
        var fs = (b) => {
          var k = ml();
          R(b, k);
        }, us = (b) => {
          var k = yl();
          R(b, k);
        }, ds = (b) => {
          var k = wl();
          Yi(k, 21, () => h(I), Hi, (B, U) => {
            var re = kl(), We = _(re), Ne = _(We), De = _(Ne), lt = _(De), ot = m(De, 2), Ve = _(ot), ft = m(Ne, 2), Fe = _(ft), ut = m(We, 2), fe = _(ut), X = _(fe);
            J(
              (Oe, Gt, At) => {
                Wt(De, 1, `inline-flex items-center px-2 py-0.5 text-xs font-medium rounded-full ${h(U).transaction_type === "topup" ? "bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-300" : "bg-red-100 text-red-700 dark:bg-red-900/50 dark:text-red-300"}`), P(lt, Oe), P(Ve, h(U).description || "—"), P(Fe, Gt), Wt(fe, 1, `text-sm font-semibold ${At ?? ""}`), P(X, `${h(U).transaction_type === "topup" ? "+" : "-"}${h(U).amount ?? ""}`);
              },
              [
                () => Ra(h(U).transaction_type),
                () => Fr(h(U).timestamp),
                () => Na(h(U).transaction_type)
              ]
            ), R(B, re);
          }), R(b, k);
        };
        Z(os, (b) => {
          h(M) && h(I).length === 0 ? b(fs) : h(I).length === 0 ? b(us, 1) : b(ds, -1);
        });
      }
      var cs = m(Sn, 2);
      {
        var vs = (b) => {
          var k = El(), B = _(k), U = m(_(B)), re = _(U);
          J(() => P(re, h(s))), R(b, k);
        };
        Z(cs, (b) => {
          h(s) && b(vs);
        });
      }
      J(() => {
        P(Ba, h(u) || "Unknown"), Wt(Lr, 1, `text-xl font-bold mt-1 font-mono ${h(p) ? "text-green-600 dark:text-green-400" : "text-gray-900 dark:text-white"}`), P(Ua, h(f) || "None published"), P(qa, h(c)), Wt(Pr, 1, `flex-1 px-4 py-2.5 text-sm font-medium text-center transition-colors ${h(W) === "card" ? "text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400 bg-blue-50/50 dark:bg-blue-900/20" : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"}`), Wt(Cn, 1, `flex-1 px-4 py-2.5 text-sm font-medium text-center transition-colors ${h(W) === "crypto" ? "text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400 bg-blue-50/50 dark:bg-blue-900/20" : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"}`);
      }), Ze("click", Pr, () => E(W, "card")), Ze("click", Cn, () => E(W, "crypto")), R(x, L);
    };
    Z(Ia, (x) => {
      h(r) && !h(u) && !h(c) ? x(La) : h(n) && !h(u) ? x(Pa, 1) : x(ja, -1);
    });
  }
  J(() => Or.disabled = h(r)), Ze("click", Or, Ue), R(e, _n), Wn();
}
Oi(["click"]);
function Rl(e, t) {
  const r = Bi(Tl, { target: e, props: { ctx: t } });
  return {
    unmount() {
      try {
        Vi(r);
      } catch {
      }
    }
  };
}
export {
  Rl as default
};
