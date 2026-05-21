var Di = Object.defineProperty;
var ts = (e) => {
  throw TypeError(e);
};
var Ci = (e, t, r) => t in e ? Di(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var ge = (e, t, r) => Ci(e, typeof t != "symbol" ? t + "" : t, r), gn = (e, t, r) => t.has(e) || ts("Cannot " + r);
var a = (e, t, r) => (gn(e, t, "read from private field"), r ? r.call(e) : t.get(e)), T = (e, t, r) => t.has(e) ? ts("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), A = (e, t, r, n) => (gn(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r), P = (e, t, r) => (gn(e, t, "access private method"), r);
var jn = Array.isArray, Mi = Array.prototype.indexOf, Wt = Array.prototype.includes, vn = Array.from, Ni = Object.defineProperty, Rr = Object.getOwnPropertyDescriptor, Fi = Object.getOwnPropertyDescriptors, Ri = Object.prototype, Pi = Array.prototype, xs = Object.getPrototypeOf, rs = Object.isExtensible;
const Oi = () => {
};
function Li(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function ys() {
  var e, t, r = new Promise((n, s) => {
    e = n, t = s;
  });
  return { promise: r, resolve: e, reject: t };
}
function Ii(e, t) {
  if (Array.isArray(e))
    return e;
  if (!(Symbol.iterator in e))
    return Array.from(e);
  const r = [];
  for (const n of e)
    if (r.push(n), r.length === t) break;
  return r;
}
const le = 2, gr = 4, dn = 8, bs = 1 << 24, We = 16, Xe = 32, Rt = 64, kn = 128, ze = 512, ne = 1024, ae = 2048, ut = 4096, he = 8192, Qe = 16384, rr = 32768, ns = 1 << 25, xr = 65536, sn = 1 << 17, ji = 1 << 18, Er = 1 << 19, Hi = 1 << 20, ft = 1 << 25, $t = 65536, an = 1 << 21, cr = 1 << 22, Nt = 1 << 23, Pr = Symbol("$state"), Qr = Symbol("attributes"), Sn = Symbol("class"), zi = Symbol("style"), Mr = Symbol("text"), Xr = Symbol("form reset"), pn = new class extends Error {
  constructor() {
    super(...arguments);
    ge(this, "name", "StaleReactionError");
    ge(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
function qi() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Ui(e, t, r) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function Vi(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Bi() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Yi(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Gi() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Ki() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Wi() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Zi() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Ji() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
const Qi = 1, Xi = 2, ws = 4, $i = 8, ea = 16, ta = 2, re = Symbol("uninitialized"), Es = "http://www.w3.org/1999/xhtml";
function ra() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function na() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function sa() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function ks(e) {
  return e === this.v;
}
function ia(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Ss(e) {
  return !ia(e, this.v);
}
let Ue = null;
function yr(e) {
  Ue = e;
}
function As(e, t = !1, r) {
  Ue = {
    p: Ue,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    r: (
      /** @type {Effect} */
      R
    ),
    l: null
  };
}
function Ts(e) {
  var t = (
    /** @type {ComponentContext} */
    Ue
  ), r = t.e;
  if (r !== null) {
    t.e = null;
    for (var n of r)
      Zs(n);
  }
  return t.i = !0, Ue = t.p, /** @type {T} */
  {};
}
function Ds() {
  return !0;
}
let Ht = [];
function Cs() {
  var e = Ht;
  Ht = [], Li(e);
}
function Zt(e) {
  if (Ht.length === 0 && !Or) {
    var t = Ht;
    queueMicrotask(() => {
      t === Ht && Cs();
    });
  }
  Ht.push(e);
}
function aa() {
  for (; Ht.length > 0; )
    Cs();
}
function Ms(e) {
  var t = R;
  if (t === null)
    return F.f |= Nt, e;
  if ((t.f & rr) === 0 && (t.f & gr) === 0)
    throw e;
  Mt(e, t);
}
function Mt(e, t) {
  for (; t !== null; ) {
    if ((t.f & kn) !== 0) {
      if ((t.f & rr) === 0)
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
const la = -7169;
function K(e, t) {
  e.f = e.f & la | t;
}
function Hn(e) {
  (e.f & ze) !== 0 || e.deps === null ? K(e, ne) : K(e, ut);
}
function Ns(e) {
  if (e !== null)
    for (const t of e)
      (t.f & le) === 0 || (t.f & $t) === 0 || (t.f ^= $t, Ns(
        /** @type {Derived} */
        t.deps
      ));
}
function Fs(e, t, r) {
  (e.f & ae) !== 0 ? t.add(e) : (e.f & ut) !== 0 && r.add(e), Ns(e.deps), K(e, ne);
}
let xn = null, lr = null, D = null, An = null, Ze = null, Tn = null, Or = !1, yn = !1, ur = null, $r = null;
var ss = 0;
let oa = 1;
var vr, Tt, Ut, dr, pr, Vt, _r, gt, Hr, Te, zr, Dt, it, at, hr, Bt, I, Dn, Nr, Cn, Rs, Ps, en, fa, Mn, fr;
const fn = class fn {
  constructor() {
    T(this, I);
    ge(this, "id", oa++);
    /** True as soon as `#process` was called */
    T(this, vr, !1);
    ge(this, "linked", !0);
    /** @type {Batch | null} */
    T(this, Tt, null);
    /** @type {Batch | null} */
    T(this, Ut, null);
    /** @type {Map<Effect, ReturnType<typeof deferred<any>>>} */
    ge(this, "async_deriveds", /* @__PURE__ */ new Map());
    /**
     * The current values of any signals that are updated in this batch.
     * Tuple format: [value, is_derived] (note: is_derived is false for deriveds, too, if they were overridden via assignment)
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Value, [any, boolean]>}
     */
    ge(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any signals (sources and deriveds) that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Value, any>}
     */
    ge(this, "previous", /* @__PURE__ */ new Map());
    /**
     * Async effects which this batch doesn't take into account anymore when calculating blockers,
     * as it has a value for it already.
     * @type {Set<Effect>}
     */
    ge(this, "unblocked", /* @__PURE__ */ new Set());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<(batch: Batch) => void>}
     */
    T(this, dr, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    T(this, pr, /* @__PURE__ */ new Set());
    /**
     * Callbacks that should run only when a fork is committed.
     * @type {Set<(batch: Batch) => void>}
     */
    T(this, Vt, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    T(this, _r, 0);
    /**
     * Async effects that are currently in flight, _not_ inside a pending boundary
     * @type {Map<Effect, number>}
     */
    T(this, gt, /* @__PURE__ */ new Map());
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    T(this, Hr, null);
    /**
     * The root effects that need to be flushed
     * @type {Effect[]}
     */
    T(this, Te, []);
    /**
     * Effects created while this batch was active.
     * @type {Effect[]}
     */
    T(this, zr, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    T(this, Dt, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    T(this, it, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    T(this, at, /* @__PURE__ */ new Map());
    /**
     * Inverse of #skipped_branches which we need to tell prior batches to unskip them when committing
     * @type {Set<Effect>}
     */
    T(this, hr, /* @__PURE__ */ new Set());
    ge(this, "is_fork", !1);
    T(this, Bt, !1);
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(t) {
    a(this, at).has(t) || a(this, at).set(t, { d: [], m: [] }), a(this, hr).delete(t);
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   * @param {(e: Effect) => void} callback
   */
  unskip_effect(t, r = (n) => this.schedule(n)) {
    var n = a(this, at).get(t);
    if (n) {
      a(this, at).delete(t);
      for (var s of n.d)
        K(s, ae), r(s);
      for (s of n.m)
        K(s, ut), r(s);
    }
    a(this, hr).add(t);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Value} source
   * @param {any} value
   * @param {boolean} [is_derived]
   */
  capture(t, r, n = !1) {
    t.v !== re && !this.previous.has(t) && this.previous.set(t, t.v), (t.f & Nt) === 0 && (this.current.set(t, [r, n]), Ze?.set(t, r)), this.is_fork || (t.v = r);
  }
  activate() {
    D = this;
  }
  deactivate() {
    D = null, Ze = null;
  }
  flush() {
    try {
      yn = !0, D = this, P(this, I, Nr).call(this);
    } finally {
      ss = 0, Tn = null, ur = null, $r = null, yn = !1, D = null, Ze = null, Jt.clear();
    }
  }
  discard() {
    for (const t of a(this, pr)) t(this);
    a(this, pr).clear(), a(this, Vt).clear(), P(this, I, fr).call(this);
  }
  /**
   * @param {Effect} effect
   */
  register_created_effect(t) {
    a(this, zr).push(t);
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  increment(t, r) {
    if (A(this, _r, a(this, _r) + 1), t) {
      let n = a(this, gt).get(r) ?? 0;
      a(this, gt).set(r, n + 1);
    }
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  decrement(t, r) {
    if (A(this, _r, a(this, _r) - 1), t) {
      let n = a(this, gt).get(r) ?? 0;
      n === 1 ? a(this, gt).delete(r) : a(this, gt).set(r, n - 1);
    }
    a(this, Bt) || (A(this, Bt, !0), Zt(() => {
      A(this, Bt, !1), this.linked && this.flush();
    }));
  }
  /**
   * @param {Set<Effect>} dirty_effects
   * @param {Set<Effect>} maybe_dirty_effects
   */
  transfer_effects(t, r) {
    for (const n of t)
      a(this, Dt).add(n);
    for (const n of r)
      a(this, it).add(n);
    t.clear(), r.clear();
  }
  /** @param {(batch: Batch) => void} fn */
  oncommit(t) {
    a(this, dr).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    a(this, pr).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  on_fork_commit(t) {
    a(this, Vt).add(t);
  }
  run_fork_commit_callbacks() {
    for (const t of a(this, Vt)) t(this);
    a(this, Vt).clear();
  }
  settled() {
    return (a(this, Hr) ?? A(this, Hr, ys())).promise;
  }
  static ensure() {
    var t;
    if (D === null) {
      const r = D = new fn();
      P(t = r, I, Mn).call(t), !yn && !Or && Zt(() => {
        a(r, vr) || r.flush();
      });
    }
    return D;
  }
  apply() {
    {
      Ze = null;
      return;
    }
  }
  /**
   *
   * @param {Effect} effect
   */
  schedule(t) {
    if (Tn = t, t.b?.is_pending && (t.f & (gr | dn | bs)) !== 0 && (t.f & rr) === 0) {
      t.b.defer_effect(t);
      return;
    }
    for (var r = t; r.parent !== null; ) {
      r = r.parent;
      var n = r.f;
      if (ur !== null && r === R && (F === null || (F.f & le) === 0))
        return;
      if ((n & (Rt | Xe)) !== 0) {
        if ((n & ne) === 0)
          return;
        r.f ^= ne;
      }
    }
    a(this, Te).push(r);
  }
};
vr = new WeakMap(), Tt = new WeakMap(), Ut = new WeakMap(), dr = new WeakMap(), pr = new WeakMap(), Vt = new WeakMap(), _r = new WeakMap(), gt = new WeakMap(), Hr = new WeakMap(), Te = new WeakMap(), zr = new WeakMap(), Dt = new WeakMap(), it = new WeakMap(), at = new WeakMap(), hr = new WeakMap(), Bt = new WeakMap(), I = new WeakSet(), Dn = function() {
  if (this.is_fork) return !0;
  for (const n of a(this, gt).keys()) {
    for (var t = n, r = !1; t.parent !== null; ) {
      if (a(this, at).has(t)) {
        r = !0;
        break;
      }
      t = t.parent;
    }
    if (!r)
      return !0;
  }
  return !1;
}, Nr = function() {
  var o, c, p;
  if (A(this, vr, !0), ss++ > 1e3 && (P(this, I, fr).call(this), ca()), !P(this, I, Dn).call(this)) {
    for (const d of a(this, Dt))
      a(this, it).delete(d), K(d, ae), this.schedule(d);
    for (const d of a(this, it))
      K(d, ut), this.schedule(d);
  }
  const t = a(this, Te);
  A(this, Te, []), this.apply();
  var r = ur = [], n = [], s = $r = [];
  for (const d of t)
    try {
      P(this, I, Cn).call(this, d, r, n);
    } catch (v) {
      throw Is(d), v;
    }
  if (D = null, s.length > 0) {
    var i = fn.ensure();
    for (const d of s)
      i.schedule(d);
  }
  if (ur = null, $r = null, P(this, I, Dn).call(this)) {
    P(this, I, en).call(this, n), P(this, I, en).call(this, r);
    for (const [d, v] of a(this, at))
      Ls(d, v);
    s.length > 0 && /** @type {unknown} */
    P(o = D, I, Nr).call(o);
    return;
  }
  const f = P(this, I, Rs).call(this);
  if (f) {
    P(c = f, I, Ps).call(c, this);
    return;
  }
  a(this, Dt).clear(), a(this, it).clear();
  for (const d of a(this, dr)) d(this);
  a(this, dr).clear(), An = this, is(n), is(r), An = null, a(this, Hr)?.resolve();
  var u = (
    /** @type {Batch | null} */
    /** @type {unknown} */
    D
  );
  if (this.linked && a(this, _r) === 0 && P(this, I, fr).call(this), a(this, Te).length > 0) {
    u === null && (u = this, P(this, I, Mn).call(this));
    const d = u;
    a(d, Te).push(...a(this, Te).filter((v) => !a(d, Te).includes(v)));
  }
  u !== null && P(p = u, I, Nr).call(p);
}, /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
Cn = function(t, r, n) {
  t.f ^= ne;
  for (var s = t.first; s !== null; ) {
    var i = s.f, f = (i & (Xe | Rt)) !== 0, u = f && (i & ne) !== 0, o = u || (i & he) !== 0 || a(this, at).has(s);
    if (!o && s.fn !== null) {
      f ? s.f ^= ne : (i & gr) !== 0 ? r.push(s) : Gr(s) && ((i & We) !== 0 && a(this, it).add(s), wr(s));
      var c = s.first;
      if (c !== null) {
        s = c;
        continue;
      }
    }
    for (; s !== null; ) {
      var p = s.next;
      if (p !== null) {
        s = p;
        break;
      }
      s = s.parent;
    }
  }
}, Rs = function() {
  for (var t = a(this, Tt); t !== null; ) {
    if (!t.is_fork) {
      for (const [r, [, n]] of this.current)
        if (t.current.has(r) && !n)
          return t;
    }
    t = a(t, Tt);
  }
  return null;
}, /**
 * @param {Batch} batch
 */
Ps = function(t) {
  var n;
  for (const [s, i] of t.current)
    !this.previous.has(s) && t.previous.has(s) && this.previous.set(s, t.previous.get(s)), this.current.set(s, i);
  for (const [s, i] of t.async_deriveds) {
    const f = this.async_deriveds.get(s);
    f && i.promise.then(f.resolve);
  }
  const r = (s) => {
    var i = s.reactions;
    if (i !== null)
      for (const o of i) {
        var f = o.f;
        if ((f & le) !== 0)
          r(
            /** @type {Derived} */
            o
          );
        else {
          var u = (
            /** @type {Effect} */
            o
          );
          f & (cr | We) && !this.async_deriveds.has(u) && (a(this, it).delete(u), K(u, ae), this.schedule(u));
        }
      }
  };
  for (const s of this.current.keys())
    r(s);
  this.oncommit(() => t.discard()), P(n = t, I, fr).call(n), D = this, P(this, I, Nr).call(this);
}, /**
 * @param {Effect[]} effects
 */
en = function(t) {
  for (var r = 0; r < t.length; r += 1)
    Fs(t[r], a(this, Dt), a(this, it));
}, fa = function() {
  var p;
  P(this, I, fr).call(this);
  for (let d = xn; d !== null; d = a(d, Ut)) {
    var t = d.id < this.id, r = [];
    for (const [v, [m, g]] of this.current) {
      if (d.current.has(v)) {
        var n = (
          /** @type {[any, boolean]} */
          d.current.get(v)[0]
        );
        if (t && m !== n)
          d.current.set(v, [m, g]);
        else
          continue;
      }
      r.push(v);
    }
    if (t)
      for (const [v, m] of this.async_deriveds) {
        const g = d.async_deriveds.get(v);
        g && m.promise.then(g.resolve);
      }
    if (a(d, vr)) {
      var s = [...d.current.keys()].filter((v) => !this.current.has(v));
      if (s.length === 0)
        t && d.discard();
      else if (r.length > 0) {
        if (t)
          for (const v of a(this, hr))
            d.unskip_effect(v, (m) => {
              var g;
              (m.f & (We | cr)) !== 0 ? d.schedule(m) : P(g = d, I, en).call(g, [m]);
            });
        d.activate();
        var i = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Map();
        for (var u of r)
          Os(u, s, i, f);
        f = /* @__PURE__ */ new Map();
        var o = [...d.current.keys()].filter(
          (v) => this.current.has(v) ? (
            /** @type {[any, boolean]} */
            this.current.get(v)[0] !== v.v
          ) : !0
        );
        if (o.length > 0)
          for (const v of a(this, zr))
            (v.f & (Qe | he | sn)) === 0 && zn(v, o, f) && ((v.f & (cr | We)) !== 0 ? (K(v, ae), d.schedule(v)) : a(d, Dt).add(v));
        if (a(d, Te).length > 0 && !a(d, Bt)) {
          d.apply();
          for (var c of a(d, Te))
            P(p = d, I, Cn).call(p, c, [], []);
          A(d, Te, []);
        }
        d.deactivate();
      }
    }
  }
}, Mn = function() {
  lr === null ? xn = lr = this : (A(lr, Ut, this), A(this, Tt, lr)), lr = this;
}, fr = function() {
  var t = a(this, Tt), r = a(this, Ut);
  t === null ? xn = r : A(t, Ut, r), r === null ? lr = t : A(r, Tt, t), this.linked = !1;
};
let er = fn;
function ua(e) {
  var t = Or;
  Or = !0;
  try {
    for (var r; ; ) {
      if (aa(), D === null)
        return (
          /** @type {T} */
          r
        );
      D.flush();
    }
  } finally {
    Or = t;
  }
}
function ca() {
  try {
    Gi();
  } catch (e) {
    Mt(e, Tn);
  }
}
let mt = null;
function is(e) {
  var t = e.length;
  if (t !== 0) {
    for (var r = 0; r < t; ) {
      var n = e[r++];
      if ((n.f & (Qe | he)) === 0 && Gr(n) && (mt = /* @__PURE__ */ new Set(), wr(n), n.deps === null && n.first === null && n.nodes === null && n.teardown === null && n.ac === null && Xs(n), mt?.size > 0)) {
        Jt.clear();
        for (const s of mt) {
          if ((s.f & (Qe | he)) !== 0) continue;
          const i = [s];
          let f = s.parent;
          for (; f !== null; )
            mt.has(f) && (mt.delete(f), i.push(f)), f = f.parent;
          for (let u = i.length - 1; u >= 0; u--) {
            const o = i[u];
            (o.f & (Qe | he)) === 0 && wr(o);
          }
        }
        mt.clear();
      }
    }
    mt = null;
  }
}
function Os(e, t, r, n) {
  if (!r.has(e) && (r.add(e), e.reactions !== null))
    for (const s of e.reactions) {
      const i = s.f;
      (i & le) !== 0 ? Os(
        /** @type {Derived} */
        s,
        t,
        r,
        n
      ) : (i & (cr | We)) !== 0 && (i & ae) === 0 && zn(s, t, n) && (K(s, ae), qn(
        /** @type {Effect} */
        s
      ));
    }
}
function zn(e, t, r) {
  const n = r.get(e);
  if (n !== void 0) return n;
  if (e.deps !== null)
    for (const s of e.deps) {
      if (Wt.call(t, s))
        return !0;
      if ((s.f & le) !== 0 && zn(
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
function qn(e) {
  D.schedule(e);
}
function Ls(e, t) {
  if (!((e.f & Xe) !== 0 && (e.f & ne) !== 0)) {
    (e.f & ae) !== 0 ? t.d.push(e) : (e.f & ut) !== 0 && t.m.push(e), K(e, ne);
    for (var r = e.first; r !== null; )
      Ls(r, t), r = r.next;
  }
}
function Is(e) {
  K(e, ne);
  for (var t = e.first; t !== null; )
    Is(t), t = t.next;
}
function va(e) {
  let t = 0, r = tr(0), n;
  return () => {
    Gn() && (l(r), Js(() => (t === 0 && (n = oi(() => e(() => Lr(r)))), t += 1, () => {
      Zt(() => {
        t -= 1, t === 0 && (n?.(), n = void 0, Lr(r));
      });
    })));
  };
}
var da = xr | Er;
function pa(e, t, r, n) {
  new _a(e, t, r, n);
}
var Le, In, Ie, Yt, ye, je, _e, De, xt, Gt, Ct, mr, qr, Ur, yt, un, W, ha, ma, ga, Nn, tn, rn, Fn, Rn;
class _a {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(t, r, n, s) {
    T(this, W);
    /** @type {Boundary | null} */
    ge(this, "parent");
    ge(this, "is_pending", !1);
    /**
     * API-level transformError transform function. Transforms errors before they reach the `failed` snippet.
     * Inherited from parent boundary, or defaults to identity.
     * @type {(error: unknown) => unknown}
     */
    ge(this, "transform_error");
    /** @type {TemplateNode} */
    T(this, Le);
    /** @type {TemplateNode | null} */
    T(this, In, null);
    /** @type {BoundaryProps} */
    T(this, Ie);
    /** @type {((anchor: Node) => void)} */
    T(this, Yt);
    /** @type {Effect} */
    T(this, ye);
    /** @type {Effect | null} */
    T(this, je, null);
    /** @type {Effect | null} */
    T(this, _e, null);
    /** @type {Effect | null} */
    T(this, De, null);
    /** @type {DocumentFragment | null} */
    T(this, xt, null);
    T(this, Gt, 0);
    T(this, Ct, 0);
    T(this, mr, !1);
    /** @type {Set<Effect>} */
    T(this, qr, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    T(this, Ur, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    T(this, yt, null);
    T(this, un, va(() => (A(this, yt, tr(a(this, Gt))), () => {
      A(this, yt, null);
    })));
    A(this, Le, t), A(this, Ie, r), A(this, Yt, (i) => {
      var f = (
        /** @type {Effect} */
        R
      );
      f.b = this, f.f |= kn, n(i);
    }), this.parent = /** @type {Effect} */
    R.b, this.transform_error = s ?? this.parent?.transform_error ?? ((i) => i), A(this, ye, Kn(() => {
      P(this, W, Nn).call(this);
    }, da));
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    Fs(t, a(this, qr), a(this, Ur));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!a(this, Ie).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  update_pending_count(t, r) {
    P(this, W, Fn).call(this, t, r), A(this, Gt, a(this, Gt) + t), !(!a(this, yt) || a(this, mr)) && (A(this, mr, !0), Zt(() => {
      A(this, mr, !1), a(this, yt) && br(a(this, yt), a(this, Gt));
    }));
  }
  get_effect_pending() {
    return a(this, un).call(this), l(
      /** @type {Source<number>} */
      a(this, yt)
    );
  }
  /** @param {unknown} error */
  error(t) {
    if (!a(this, Ie).onerror && !a(this, Ie).failed)
      throw t;
    D?.is_fork ? (a(this, je) && D.skip_effect(a(this, je)), a(this, _e) && D.skip_effect(a(this, _e)), a(this, De) && D.skip_effect(a(this, De)), D.on_fork_commit(() => {
      P(this, W, Rn).call(this, t);
    })) : P(this, W, Rn).call(this, t);
  }
}
Le = new WeakMap(), In = new WeakMap(), Ie = new WeakMap(), Yt = new WeakMap(), ye = new WeakMap(), je = new WeakMap(), _e = new WeakMap(), De = new WeakMap(), xt = new WeakMap(), Gt = new WeakMap(), Ct = new WeakMap(), mr = new WeakMap(), qr = new WeakMap(), Ur = new WeakMap(), yt = new WeakMap(), un = new WeakMap(), W = new WeakSet(), ha = function() {
  try {
    A(this, je, He(() => a(this, Yt).call(this, a(this, Le))));
  } catch (t) {
    this.error(t);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
ma = function(t) {
  const r = a(this, Ie).failed;
  r && A(this, De, He(() => {
    r(
      a(this, Le),
      () => t,
      () => () => {
      }
    );
  }));
}, ga = function() {
  const t = a(this, Ie).pending;
  t && (this.is_pending = !0, A(this, _e, He(() => t(a(this, Le)))), Zt(() => {
    var r = A(this, xt, document.createDocumentFragment()), n = Ft();
    r.append(n), A(this, je, P(this, W, rn).call(this, () => He(() => a(this, Yt).call(this, n)))), a(this, Ct) === 0 && (a(this, Le).before(r), A(this, xt, null), Qt(
      /** @type {Effect} */
      a(this, _e),
      () => {
        A(this, _e, null);
      }
    ), P(this, W, tn).call(
      this,
      /** @type {Batch} */
      D
    ));
  }));
}, Nn = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), A(this, Ct, 0), A(this, Gt, 0), A(this, je, He(() => {
      a(this, Yt).call(this, a(this, Le));
    })), a(this, Ct) > 0) {
      var t = A(this, xt, document.createDocumentFragment());
      Jn(a(this, je), t);
      const r = (
        /** @type {(anchor: Node) => void} */
        a(this, Ie).pending
      );
      A(this, _e, He(() => r(a(this, Le))));
    } else
      P(this, W, tn).call(
        this,
        /** @type {Batch} */
        D
      );
  } catch (r) {
    this.error(r);
  }
}, /**
 * @param {Batch} batch
 */
tn = function(t) {
  this.is_pending = !1, t.transfer_effects(a(this, qr), a(this, Ur));
}, /**
 * @template T
 * @param {() => T} fn
 */
rn = function(t) {
  var r = R, n = F, s = Ue;
  ct(a(this, ye)), Ve(a(this, ye)), yr(a(this, ye).ctx);
  try {
    return er.ensure(), t();
  } catch (i) {
    return Ms(i), null;
  } finally {
    ct(r), Ve(n), yr(s);
  }
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 * @param {Batch} batch
 */
Fn = function(t, r) {
  var n;
  if (!this.has_pending_snippet()) {
    this.parent && P(n = this.parent, W, Fn).call(n, t, r);
    return;
  }
  A(this, Ct, a(this, Ct) + t), a(this, Ct) === 0 && (P(this, W, tn).call(this, r), a(this, _e) && Qt(a(this, _e), () => {
    A(this, _e, null);
  }), a(this, xt) && (a(this, Le).before(a(this, xt)), A(this, xt, null)));
}, /**
 * @param {unknown} error
 */
Rn = function(t) {
  a(this, je) && (we(a(this, je)), A(this, je, null)), a(this, _e) && (we(a(this, _e)), A(this, _e, null)), a(this, De) && (we(a(this, De)), A(this, De, null));
  var r = a(this, Ie).onerror;
  let n = a(this, Ie).failed;
  var s = !1, i = !1;
  const f = () => {
    if (s) {
      sa();
      return;
    }
    s = !0, i && Ji(), a(this, De) !== null && Qt(a(this, De), () => {
      A(this, De, null);
    }), P(this, W, rn).call(this, () => {
      P(this, W, Nn).call(this);
    });
  }, u = (o) => {
    try {
      i = !0, r?.(o, f), i = !1;
    } catch (c) {
      Mt(c, a(this, ye) && a(this, ye).parent);
    }
    n && A(this, De, P(this, W, rn).call(this, () => {
      try {
        return He(() => {
          var c = (
            /** @type {Effect} */
            R
          );
          c.b = this, c.f |= kn, n(
            a(this, Le),
            () => o,
            () => f
          );
        });
      } catch (c) {
        return Mt(
          c,
          /** @type {Effect} */
          a(this, ye).parent
        ), null;
      }
    }));
  };
  Zt(() => {
    var o;
    try {
      o = this.transform_error(t);
    } catch (c) {
      Mt(c, a(this, ye) && a(this, ye).parent);
      return;
    }
    o !== null && typeof o == "object" && typeof /** @type {any} */
    o.then == "function" ? o.then(
      u,
      /** @param {unknown} e */
      (c) => Mt(c, a(this, ye) && a(this, ye).parent)
    ) : u(o);
  });
};
function xa(e, t, r, n) {
  const s = Un;
  var i = e.filter((v) => !v.settled);
  if (r.length === 0 && i.length === 0) {
    n(t.map(s));
    return;
  }
  var f = (
    /** @type {Effect} */
    R
  ), u = ya(), o = i.length === 1 ? i[0].promise : i.length > 1 ? Promise.all(i.map((v) => v.promise)) : null;
  function c(v) {
    if ((f.f & Qe) === 0) {
      u();
      try {
        n(v);
      } catch (m) {
        Mt(m, f);
      }
      ln();
    }
  }
  var p = js();
  if (r.length === 0) {
    o.then(() => c(t.map(s))).finally(p);
    return;
  }
  function d() {
    Promise.all(r.map((v) => /* @__PURE__ */ ba(v))).then((v) => c([...t.map(s), ...v])).catch((v) => Mt(v, f)).finally(p);
  }
  o ? o.then(() => {
    u(), d(), ln();
  }) : d();
}
function ya() {
  var e = (
    /** @type {Effect} */
    R
  ), t = F, r = Ue, n = (
    /** @type {Batch} */
    D
  );
  return function(i = !0) {
    ct(e), Ve(t), yr(r), i && (e.f & Qe) === 0 && (n?.activate(), n?.apply());
  };
}
function ln(e = !0) {
  ct(null), Ve(null), yr(null), e && D?.deactivate();
}
function js() {
  var e = (
    /** @type {Effect} */
    R
  ), t = (
    /** @type {Boundary} */
    e.b
  ), r = (
    /** @type {Batch} */
    D
  ), n = t.is_rendered();
  return t.update_pending_count(1, r), r.increment(n, e), () => {
    t.update_pending_count(-1, r), r.decrement(n, e);
  };
}
// @__NO_SIDE_EFFECTS__
function Un(e) {
  var t = le | ae;
  return R !== null && (R.f |= Er), {
    ctx: Ue,
    deps: null,
    effects: null,
    equals: ks,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      re
    ),
    wv: 0,
    parent: R,
    ac: null
  };
}
const Kr = Symbol("obsolete");
// @__NO_SIDE_EFFECTS__
function ba(e, t, r) {
  let n = (
    /** @type {Effect | null} */
    R
  );
  n === null && qi();
  var s = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), i = tr(
    /** @type {V} */
    re
  ), f = !F, u = /* @__PURE__ */ new Set();
  return ja(() => {
    var o = (
      /** @type {Effect} */
      R
    ), c = ys();
    s = c.promise;
    try {
      Promise.resolve(e()).then(c.resolve, (m) => {
        m !== pn && c.reject(m);
      }).finally(ln);
    } catch (m) {
      c.reject(m), ln();
    }
    var p = (
      /** @type {Batch} */
      D
    );
    if (f) {
      if ((o.f & rr) !== 0)
        var d = js();
      if (
        /** @type {Boundary} */
        n.b.is_rendered()
      )
        p.async_deriveds.get(o)?.reject(Kr);
      else
        for (const m of u.values())
          m.reject(Kr);
      u.add(c), p.async_deriveds.set(o, c);
    }
    const v = (m, g = void 0) => {
      d?.(), u.delete(c), g !== Kr && (p.activate(), g ? (i.f |= Nt, br(i, g)) : ((i.f & Nt) !== 0 && (i.f ^= Nt), br(i, m)), p.deactivate());
    };
    c.promise.then(v, (m) => v(null, m || "unknown"));
  }), Ws(() => {
    for (const o of u)
      o.reject(Kr);
  }), new Promise((o) => {
    function c(p) {
      function d() {
        p === s ? o(i) : c(s);
      }
      p.then(d, d);
    }
    c(s);
  });
}
// @__NO_SIDE_EFFECTS__
function bn(e) {
  const t = /* @__PURE__ */ Un(e);
  return ti(t), t;
}
// @__NO_SIDE_EFFECTS__
function wa(e) {
  const t = /* @__PURE__ */ Un(e);
  return t.equals = Ss, t;
}
function Ea(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var r = 0; r < t.length; r += 1)
      we(
        /** @type {Effect} */
        t[r]
      );
  }
}
function Vn(e) {
  var t, r = R, n = e.parent;
  if (!Pt && n !== null && e.v !== re && // if it was never evaluated before, it's guaranteed to fail downstream, so we try to execute instead
  (n.f & (Qe | he)) !== 0)
    return ra(), e.v;
  ct(n);
  try {
    e.f &= ~$t, Ea(e), t = ii(e);
  } finally {
    ct(r);
  }
  return t;
}
function Hs(e) {
  var t = Vn(e);
  if (!e.equals(t) && (e.wv = ni(), (!D?.is_fork || e.deps === null) && (D !== null ? (D.capture(e, t, !0), An?.capture(e, t, !0)) : e.v = t, e.deps === null))) {
    K(e, ne);
    return;
  }
  Pt || (Ze !== null ? (Gn() || D?.is_fork) && Ze.set(e, t) : Hn(e));
}
function ka(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      (t.teardown || t.ac) && (t.teardown?.(), t.ac?.abort(pn), t.fn !== null && (t.teardown = Oi), t.ac = null, jr(t, 0), Wn(t));
}
function zs(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      t.teardown && t.fn !== null && wr(t);
}
let on = /* @__PURE__ */ new Set();
const Jt = /* @__PURE__ */ new Map();
let qs = !1;
function tr(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: ks,
    rv: 0,
    wv: 0
  };
  return r;
}
// @__NO_SIDE_EFFECTS__
function H(e, t) {
  const r = tr(e);
  return ti(r), r;
}
// @__NO_SIDE_EFFECTS__
function Sa(e, t = !1, r = !0) {
  const n = tr(e);
  return t || (n.equals = Ss), n;
}
function M(e, t, r = !1) {
  F !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Je || (F.f & sn) !== 0) && Ds() && (F.f & (le | We | cr | sn)) !== 0 && (qe === null || !Wt.call(qe, e)) && Zi();
  let n = r ? ot(t) : t;
  return br(e, n, $r);
}
function br(e, t, r = null) {
  if (!e.equals(t)) {
    Jt.set(e, Pt ? t : e.v);
    var n = er.ensure();
    if (n.capture(e, t), (e.f & le) !== 0) {
      const s = (
        /** @type {Derived} */
        e
      );
      (e.f & ae) !== 0 && Vn(s), Ze === null && Hn(s);
    }
    e.wv = ni(), Us(e, ae, r), R !== null && (R.f & ne) !== 0 && (R.f & (Xe | Rt)) === 0 && (Oe === null ? qa([e]) : Oe.push(e)), !n.is_fork && on.size > 0 && !qs && Aa();
  }
  return t;
}
function Aa() {
  qs = !1;
  for (const e of on) {
    (e.f & ne) !== 0 && K(e, ut);
    let t;
    try {
      t = Gr(e);
    } catch {
      t = !0;
    }
    t && wr(e);
  }
  on.clear();
}
function Ta(e, t = 1) {
  var r = l(e);
  return M(e, t === 1 ? ++r : --r);
}
function Lr(e) {
  M(e, e.v + 1);
}
function Us(e, t, r) {
  var n = e.reactions;
  if (n !== null)
    for (var s = n.length, i = 0; i < s; i++) {
      var f = n[i], u = f.f, o = (u & ae) === 0;
      if (o && K(f, t), (u & sn) !== 0)
        on.add(
          /** @type {Effect} */
          f
        );
      else if ((u & le) !== 0) {
        var c = (
          /** @type {Derived} */
          f
        );
        Ze?.delete(c), (u & $t) === 0 && (u & ze && (R === null || (R.f & an) === 0) && (f.f |= $t), Us(c, ut, r));
      } else if (o) {
        var p = (
          /** @type {Effect} */
          f
        );
        (u & We) !== 0 && mt !== null && mt.add(p), r !== null ? r.push(p) : qn(p);
      }
    }
}
function ot(e) {
  if (typeof e != "object" || e === null || Pr in e)
    return e;
  const t = xs(e);
  if (t !== Ri && t !== Pi)
    return e;
  var r = /* @__PURE__ */ new Map(), n = jn(e), s = /* @__PURE__ */ H(0), i = Xt, f = (u) => {
    if (Xt === i)
      return u();
    var o = F, c = Xt;
    Ve(null), us(i);
    var p = u();
    return Ve(o), us(c), p;
  };
  return n && r.set("length", /* @__PURE__ */ H(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(u, o, c) {
        (!("value" in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && Ki();
        var p = r.get(o);
        return p === void 0 ? f(() => {
          var d = /* @__PURE__ */ H(c.value);
          return r.set(o, d), d;
        }) : M(p, c.value, !0), !0;
      },
      deleteProperty(u, o) {
        var c = r.get(o);
        if (c === void 0) {
          if (o in u) {
            const p = f(() => /* @__PURE__ */ H(re));
            r.set(o, p), Lr(s);
          }
        } else
          M(c, re), Lr(s);
        return !0;
      },
      get(u, o, c) {
        if (o === Pr)
          return e;
        var p = r.get(o), d = o in u;
        if (p === void 0 && (!d || Rr(u, o)?.writable) && (p = f(() => {
          var m = ot(d ? u[o] : re), g = /* @__PURE__ */ H(m);
          return g;
        }), r.set(o, p)), p !== void 0) {
          var v = l(p);
          return v === re ? void 0 : v;
        }
        return Reflect.get(u, o, c);
      },
      getOwnPropertyDescriptor(u, o) {
        var c = Reflect.getOwnPropertyDescriptor(u, o);
        if (c && "value" in c) {
          var p = r.get(o);
          p && (c.value = l(p));
        } else if (c === void 0) {
          var d = r.get(o), v = d?.v;
          if (d !== void 0 && v !== re)
            return {
              enumerable: !0,
              configurable: !0,
              value: v,
              writable: !0
            };
        }
        return c;
      },
      has(u, o) {
        if (o === Pr)
          return !0;
        var c = r.get(o), p = c !== void 0 && c.v !== re || Reflect.has(u, o);
        if (c !== void 0 || R !== null && (!p || Rr(u, o)?.writable)) {
          c === void 0 && (c = f(() => {
            var v = p ? ot(u[o]) : re, m = /* @__PURE__ */ H(v);
            return m;
          }), r.set(o, c));
          var d = l(c);
          if (d === re)
            return !1;
        }
        return p;
      },
      set(u, o, c, p) {
        var d = r.get(o), v = o in u;
        if (n && o === "length")
          for (var m = c; m < /** @type {Source<number>} */
          d.v; m += 1) {
            var g = r.get(m + "");
            g !== void 0 ? M(g, re) : m in u && (g = f(() => /* @__PURE__ */ H(re)), r.set(m + "", g));
          }
        if (d === void 0)
          (!v || Rr(u, o)?.writable) && (d = f(() => /* @__PURE__ */ H(void 0)), M(d, ot(c)), r.set(o, d));
        else {
          v = d.v !== re;
          var j = f(() => ot(c));
          M(d, j);
        }
        var _ = Reflect.getOwnPropertyDescriptor(u, o);
        if (_?.set && _.set.call(p, c), !v) {
          if (n && typeof o == "string") {
            var N = (
              /** @type {Source<number>} */
              r.get("length")
            ), G = Number(o);
            Number.isInteger(G) && G >= N.v && M(N, G + 1);
          }
          Lr(s);
        }
        return !0;
      },
      ownKeys(u) {
        l(s);
        var o = Reflect.ownKeys(u).filter((d) => {
          var v = r.get(d);
          return v === void 0 || v.v !== re;
        });
        for (var [c, p] of r)
          p.v !== re && !(c in u) && o.push(c);
        return o;
      },
      setPrototypeOf() {
        Wi();
      }
    }
  );
}
function as(e) {
  try {
    if (e !== null && typeof e == "object" && Pr in e)
      return e[Pr];
  } catch {
  }
  return e;
}
function Da(e, t) {
  return Object.is(as(e), as(t));
}
var ls, Vs, Bs, Ys;
function Ca() {
  if (ls === void 0) {
    ls = window, Vs = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, r = Text.prototype;
    Bs = Rr(t, "firstChild").get, Ys = Rr(t, "nextSibling").get, rs(e) && (e[Sn] = void 0, e[Qr] = null, e[zi] = void 0, e.__e = void 0), rs(r) && (r[Mr] = void 0);
  }
}
function Ft(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function Bn(e) {
  return (
    /** @type {TemplateNode | null} */
    Bs.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function Yr(e) {
  return (
    /** @type {TemplateNode | null} */
    Ys.call(e)
  );
}
function x(e, t) {
  return /* @__PURE__ */ Bn(e);
}
function Wr(e, t = !1) {
  {
    var r = /* @__PURE__ */ Bn(e);
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ Yr(r) : r;
  }
}
function y(e, t = 1, r = !1) {
  let n = e;
  for (; t--; )
    n = /** @type {TemplateNode} */
    /* @__PURE__ */ Yr(n);
  return n;
}
function Ma(e) {
  e.textContent = "";
}
function Gs() {
  return !1;
}
function Na(e, t, r) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElementNS(Es, e, void 0)
  );
}
let os = !1;
function Fa() {
  os || (os = !0, document.addEventListener(
    "reset",
    (e) => {
      Promise.resolve().then(() => {
        if (!e.defaultPrevented)
          for (
            const t of
            /**@type {HTMLFormElement} */
            e.target.elements
          )
            t[Xr]?.();
      });
    },
    // In the capture phase to guarantee we get noticed of it (no possibility of stopPropagation)
    { capture: !0 }
  ));
}
function Yn(e) {
  var t = F, r = R;
  Ve(null), ct(null);
  try {
    return e();
  } finally {
    Ve(t), ct(r);
  }
}
function Ks(e, t, r, n = r) {
  e.addEventListener(t, () => Yn(r));
  const s = (
    /** @type {any} */
    e[Xr]
  );
  s ? e[Xr] = () => {
    s(), n(!0);
  } : e[Xr] = () => n(!0), Fa();
}
function Ra(e) {
  R === null && (F === null && Yi(), Bi()), Pt && Vi();
}
function Pa(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function bt(e, t) {
  var r = R;
  r !== null && (r.f & he) !== 0 && (e |= he);
  var n = {
    ctx: Ue,
    deps: null,
    nodes: null,
    f: e | ae | ze,
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
  D?.register_created_effect(n);
  var s = n;
  if ((e & gr) !== 0)
    ur !== null ? ur.push(n) : er.ensure().schedule(n);
  else if (t !== null) {
    try {
      wr(n);
    } catch (f) {
      throw we(n), f;
    }
    s.deps === null && s.teardown === null && s.nodes === null && s.first === s.last && // either `null`, or a singular child
    (s.f & Er) === 0 && (s = s.first, (e & We) !== 0 && (e & xr) !== 0 && s !== null && (s.f |= xr));
  }
  if (s !== null && (s.parent = r, r !== null && Pa(s, r), F !== null && (F.f & le) !== 0 && (e & Rt) === 0)) {
    var i = (
      /** @type {Derived} */
      F
    );
    (i.effects ?? (i.effects = [])).push(s);
  }
  return n;
}
function Gn() {
  return F !== null && !Je;
}
function Ws(e) {
  const t = bt(dn, null);
  return K(t, ne), t.teardown = e, t;
}
function Oa(e) {
  Ra();
  var t = (
    /** @type {Effect} */
    R.f
  ), r = !F && (t & Xe) !== 0 && (t & rr) === 0;
  if (r) {
    var n = (
      /** @type {ComponentContext} */
      Ue
    );
    (n.e ?? (n.e = [])).push(e);
  } else
    return Zs(e);
}
function Zs(e) {
  return bt(gr | Hi, e);
}
function La(e) {
  er.ensure();
  const t = bt(Rt | Er, e);
  return (r = {}) => new Promise((n) => {
    r.outro ? Qt(t, () => {
      we(t), n(void 0);
    }) : (we(t), n(void 0));
  });
}
function Ia(e) {
  return bt(gr, e);
}
function ja(e) {
  return bt(cr | Er, e);
}
function Js(e, t = 0) {
  return bt(dn | t, e);
}
function Y(e, t = [], r = [], n = []) {
  xa(n, t, r, (s) => {
    bt(dn, () => e(...s.map(l)));
  });
}
function Kn(e, t = 0) {
  var r = bt(We | t, e);
  return r;
}
function He(e) {
  return bt(Xe | Er, e);
}
function Qs(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = Pt, n = F;
    fs(!0), Ve(null);
    try {
      t.call(null);
    } finally {
      fs(r), Ve(n);
    }
  }
}
function Wn(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    const s = r.ac;
    s !== null && Yn(() => {
      s.abort(pn);
    });
    var n = r.next;
    (r.f & Rt) !== 0 ? r.parent = null : we(r, t), r = n;
  }
}
function Ha(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & Xe) === 0 && we(t), t = r;
  }
}
function we(e, t = !0) {
  var r = !1;
  (t || (e.f & ji) !== 0) && e.nodes !== null && e.nodes.end !== null && (za(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), r = !0), K(e, ns), Wn(e, t && !r), jr(e, 0);
  var n = e.nodes && e.nodes.t;
  if (n !== null)
    for (const i of n)
      i.stop();
  Qs(e), e.f ^= ns, e.f |= Qe;
  var s = e.parent;
  s !== null && s.first !== null && Xs(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function za(e, t) {
  for (; e !== null; ) {
    var r = e === t ? null : /* @__PURE__ */ Yr(e);
    e.remove(), e = r;
  }
}
function Xs(e) {
  var t = e.parent, r = e.prev, n = e.next;
  r !== null && (r.next = n), n !== null && (n.prev = r), t !== null && (t.first === e && (t.first = n), t.last === e && (t.last = r));
}
function Qt(e, t, r = !0) {
  var n = [];
  $s(e, n, !0);
  var s = () => {
    r && we(e), t && t();
  }, i = n.length;
  if (i > 0) {
    var f = () => --i || s();
    for (var u of n)
      u.out(f);
  } else
    s();
}
function $s(e, t, r) {
  if ((e.f & he) === 0) {
    e.f ^= he;
    var n = e.nodes && e.nodes.t;
    if (n !== null)
      for (const u of n)
        (u.is_global || r) && t.push(u);
    for (var s = e.first; s !== null; ) {
      var i = s.next;
      if ((s.f & Rt) === 0) {
        var f = (s.f & xr) !== 0 || // If this is a branch effect without a block effect parent,
        // it means the parent block effect was pruned. In that case,
        // transparency information was transferred to the branch effect.
        (s.f & Xe) !== 0 && (e.f & We) !== 0;
        $s(s, t, f ? r : !1);
      }
      s = i;
    }
  }
}
function Zn(e) {
  ei(e, !0);
}
function ei(e, t) {
  if ((e.f & he) !== 0) {
    e.f ^= he, (e.f & ne) === 0 && (K(e, ae), er.ensure().schedule(e));
    for (var r = e.first; r !== null; ) {
      var n = r.next, s = (r.f & xr) !== 0 || (r.f & Xe) !== 0;
      ei(r, s ? t : !1), r = n;
    }
    var i = e.nodes && e.nodes.t;
    if (i !== null)
      for (const f of i)
        (f.is_global || t) && f.in();
  }
}
function Jn(e, t) {
  if (e.nodes)
    for (var r = e.nodes.start, n = e.nodes.end; r !== null; ) {
      var s = r === n ? null : /* @__PURE__ */ Yr(r);
      t.append(r), r = s;
    }
}
let nn = !1, Pt = !1;
function fs(e) {
  Pt = e;
}
let F = null, Je = !1;
function Ve(e) {
  F = e;
}
let R = null;
function ct(e) {
  R = e;
}
let qe = null;
function ti(e) {
  F !== null && (qe === null ? qe = [e] : qe.push(e));
}
let be = null, Ae = 0, Oe = null;
function qa(e) {
  Oe = e;
}
let ri = 1, zt = 0, Xt = zt;
function us(e) {
  Xt = e;
}
function ni() {
  return ++ri;
}
function Gr(e) {
  var t = e.f;
  if ((t & ae) !== 0)
    return !0;
  if (t & le && (e.f &= ~$t), (t & ut) !== 0) {
    for (var r = (
      /** @type {Value[]} */
      e.deps
    ), n = r.length, s = 0; s < n; s++) {
      var i = r[s];
      if (Gr(
        /** @type {Derived} */
        i
      ) && Hs(
        /** @type {Derived} */
        i
      ), i.wv > e.wv)
        return !0;
    }
    (t & ze) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    Ze === null && K(e, ne);
  }
  return !1;
}
function si(e, t, r = !0) {
  var n = e.reactions;
  if (n !== null && !(qe !== null && Wt.call(qe, e)))
    for (var s = 0; s < n.length; s++) {
      var i = n[s];
      (i.f & le) !== 0 ? si(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (r ? K(i, ae) : (i.f & ne) !== 0 && K(i, ut), qn(
        /** @type {Effect} */
        i
      ));
    }
}
function ii(e) {
  var j;
  var t = be, r = Ae, n = Oe, s = F, i = qe, f = Ue, u = Je, o = Xt, c = e.f;
  be = /** @type {null | Value[]} */
  null, Ae = 0, Oe = null, F = (c & (Xe | Rt)) === 0 ? e : null, qe = null, yr(e.ctx), Je = !1, Xt = ++zt, e.ac !== null && (Yn(() => {
    e.ac.abort(pn);
  }), e.ac = null);
  try {
    e.f |= an;
    var p = (
      /** @type {Function} */
      e.fn
    ), d = p();
    e.f |= rr;
    var v = e.deps, m = D?.is_fork;
    if (be !== null) {
      var g;
      if (m || jr(e, Ae), v !== null && Ae > 0)
        for (v.length = Ae + be.length, g = 0; g < be.length; g++)
          v[Ae + g] = be[g];
      else
        e.deps = v = be;
      if (Gn() && (e.f & ze) !== 0)
        for (g = Ae; g < v.length; g++)
          ((j = v[g]).reactions ?? (j.reactions = [])).push(e);
    } else !m && v !== null && Ae < v.length && (jr(e, Ae), v.length = Ae);
    if (Ds() && Oe !== null && !Je && v !== null && (e.f & (le | ut | ae)) === 0)
      for (g = 0; g < /** @type {Source[]} */
      Oe.length; g++)
        si(
          Oe[g],
          /** @type {Effect} */
          e
        );
    if (s !== null && s !== e) {
      if (zt++, s.deps !== null)
        for (let _ = 0; _ < r; _ += 1)
          s.deps[_].rv = zt;
      if (t !== null)
        for (const _ of t)
          _.rv = zt;
      Oe !== null && (n === null ? n = Oe : n.push(.../** @type {Source[]} */
      Oe));
    }
    return (e.f & Nt) !== 0 && (e.f ^= Nt), d;
  } catch (_) {
    return Ms(_);
  } finally {
    e.f ^= an, be = t, Ae = r, Oe = n, F = s, qe = i, yr(f), Je = u, Xt = o;
  }
}
function Ua(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var n = Mi.call(r, e);
    if (n !== -1) {
      var s = r.length - 1;
      s === 0 ? r = t.reactions = null : (r[n] = r[s], r.pop());
    }
  }
  if (r === null && (t.f & le) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (be === null || !Wt.call(be, t))) {
    var i = (
      /** @type {Derived} */
      t
    );
    (i.f & ze) !== 0 && (i.f ^= ze, i.f &= ~$t), i.v !== re && Hn(i), ka(i), jr(i, 0);
  }
}
function jr(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var n = t; n < r.length; n++)
      Ua(e, r[n]);
}
function wr(e) {
  var t = e.f;
  if ((t & Qe) === 0) {
    K(e, ne);
    var r = R, n = nn;
    R = e, nn = !0;
    try {
      (t & (We | bs)) !== 0 ? Ha(e) : Wn(e), Qs(e);
      var s = ii(e);
      e.teardown = typeof s == "function" ? s : null, e.wv = ri;
      var i;
    } finally {
      nn = n, R = r;
    }
  }
}
async function Va() {
  await Promise.resolve(), ua();
}
function l(e) {
  var t = e.f, r = (t & le) !== 0;
  if (F !== null && !Je) {
    var n = R !== null && (R.f & Qe) !== 0;
    if (!n && (qe === null || !Wt.call(qe, e))) {
      var s = F.deps;
      if ((F.f & an) !== 0)
        e.rv < zt && (e.rv = zt, be === null && s !== null && s[Ae] === e ? Ae++ : be === null ? be = [e] : be.push(e));
      else {
        F.deps ?? (F.deps = []), Wt.call(F.deps, e) || F.deps.push(e);
        var i = e.reactions;
        i === null ? e.reactions = [F] : Wt.call(i, F) || i.push(F);
      }
    }
  }
  if (Pt && Jt.has(e))
    return Jt.get(e);
  if (r) {
    var f = (
      /** @type {Derived} */
      e
    );
    if (Pt) {
      var u = f.v;
      return ((f.f & ne) === 0 && f.reactions !== null || li(f)) && (u = Vn(f)), Jt.set(f, u), u;
    }
    var o = (f.f & ze) === 0 && !Je && F !== null && (nn || (F.f & ze) !== 0), c = (f.f & rr) === 0;
    Gr(f) && (o && (f.f |= ze), Hs(f)), o && !c && (zs(f), ai(f));
  }
  if (Ze?.has(e))
    return Ze.get(e);
  if ((e.f & Nt) !== 0)
    throw e.v;
  return e.v;
}
function ai(e) {
  if (e.f |= ze, e.deps !== null)
    for (const t of e.deps)
      (t.reactions ?? (t.reactions = [])).push(e), (t.f & le) !== 0 && (t.f & ze) === 0 && (zs(
        /** @type {Derived} */
        t
      ), ai(
        /** @type {Derived} */
        t
      ));
}
function li(e) {
  if (e.v === re) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (Jt.has(t) || (t.f & le) !== 0 && li(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function oi(e) {
  var t = Je;
  try {
    return Je = !0, e();
  } finally {
    Je = t;
  }
}
const Ba = ["touchstart", "touchmove"];
function Ya(e) {
  return Ba.includes(e);
}
const qt = Symbol("events"), fi = /* @__PURE__ */ new Set(), Pn = /* @__PURE__ */ new Set();
function pe(e, t, r) {
  (t[qt] ?? (t[qt] = {}))[e] = r;
}
function Ga(e) {
  for (var t = 0; t < e.length; t++)
    fi.add(e[t]);
  for (var r of Pn)
    r(e);
}
let cs = null;
function vs(e) {
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), n = e.type, s = e.composedPath?.() || [], i = (
    /** @type {null | Element} */
    s[0] || e.target
  );
  cs = e;
  var f = 0, u = cs === e && e[qt];
  if (u) {
    var o = s.indexOf(u);
    if (o !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e[qt] = t;
      return;
    }
    var c = s.indexOf(t);
    if (c === -1)
      return;
    o <= c && (f = o);
  }
  if (i = /** @type {Element} */
  s[f] || e.target, i !== t) {
    Ni(e, "currentTarget", {
      configurable: !0,
      get() {
        return i || r;
      }
    });
    var p = F, d = R;
    Ve(null), ct(null);
    try {
      for (var v, m = []; i !== null; ) {
        var g = i.assignedSlot || i.parentNode || /** @type {any} */
        i.host || null;
        try {
          var j = i[qt]?.[n];
          j != null && (!/** @type {any} */
          i.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === i) && j.call(i, e);
        } catch (_) {
          v ? m.push(_) : v = _;
        }
        if (e.cancelBubble || g === t || g === null)
          break;
        i = g;
      }
      if (v) {
        for (let _ of m)
          queueMicrotask(() => {
            throw _;
          });
        throw v;
      }
    } finally {
      e[qt] = t, delete e.currentTarget, Ve(p), ct(d);
    }
  }
}
const Ka = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (e) => e
  })
);
function Wa(e) {
  return (
    /** @type {string} */
    Ka?.createHTML(e) ?? e
  );
}
function Za(e) {
  var t = Na("template");
  return t.innerHTML = Wa(e.replaceAll("<!>", "<!---->")), t.content;
}
function ui(e, t) {
  var r = (
    /** @type {Effect} */
    R
  );
  r.nodes === null && (r.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function S(e, t) {
  var r = (t & ta) !== 0, n, s = !e.startsWith("<!>");
  return () => {
    n === void 0 && (n = Za(s ? e : "<!>" + e), n = /** @type {TemplateNode} */
    /* @__PURE__ */ Bn(n));
    var i = (
      /** @type {TemplateNode} */
      r || Vs ? document.importNode(n, !0) : n.cloneNode(!0)
    );
    return ui(i, i), i;
  };
}
function Zr() {
  var e = document.createDocumentFragment(), t = document.createComment(""), r = Ft();
  return e.append(t, r), ui(t, r), e;
}
function E(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function U(e, t) {
  var r = t == null ? "" : typeof t == "object" ? `${t}` : t;
  r !== /** @type {any} */
  (e[Mr] ?? (e[Mr] = e.nodeValue)) && (e[Mr] = r, e.nodeValue = `${r}`);
}
function Ja(e, t) {
  return Qa(e, t);
}
const Jr = /* @__PURE__ */ new Map();
function Qa(e, { target: t, anchor: r, props: n = {}, events: s, context: i, intro: f = !0, transformError: u }) {
  Ca();
  var o = void 0, c = La(() => {
    var p = r ?? t.appendChild(Ft());
    pa(
      /** @type {TemplateNode} */
      p,
      {
        pending: () => {
        }
      },
      (m) => {
        As({});
        var g = (
          /** @type {ComponentContext} */
          Ue
        );
        i && (g.c = i), s && (n.$$events = s), o = e(m, n) || {}, Ts();
      },
      u
    );
    var d = /* @__PURE__ */ new Set(), v = (m) => {
      for (var g = 0; g < m.length; g++) {
        var j = m[g];
        if (!d.has(j)) {
          d.add(j);
          var _ = Ya(j);
          for (const V of [t, document]) {
            var N = Jr.get(V);
            N === void 0 && (N = /* @__PURE__ */ new Map(), Jr.set(V, N));
            var G = N.get(j);
            G === void 0 ? (V.addEventListener(j, vs, { passive: _ }), N.set(j, 1)) : N.set(j, G + 1);
          }
        }
      }
    };
    return v(vn(fi)), Pn.add(v), () => {
      for (var m of d)
        for (const _ of [t, document]) {
          var g = (
            /** @type {Map<string, number>} */
            Jr.get(_)
          ), j = (
            /** @type {number} */
            g.get(m)
          );
          --j == 0 ? (_.removeEventListener(m, vs), g.delete(m), g.size === 0 && Jr.delete(_)) : g.set(m, j);
        }
      Pn.delete(v), p !== r && p.parentNode?.removeChild(p);
    };
  });
  return On.set(o, c), o;
}
let On = /* @__PURE__ */ new WeakMap();
function Xa(e, t) {
  const r = On.get(e);
  return r ? (On.delete(e), r(t)) : Promise.resolve();
}
var Ke, lt, Ce, Kt, Vr, Br, cn;
class $a {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, r = !0) {
    /** @type {TemplateNode} */
    ge(this, "anchor");
    /** @type {Map<Batch, Key>} */
    T(this, Ke, /* @__PURE__ */ new Map());
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
    T(this, lt, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    T(this, Ce, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    T(this, Kt, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    T(this, Vr, !0);
    /**
     * @param {Batch} batch
     */
    T(this, Br, (t) => {
      if (a(this, Ke).has(t)) {
        var r = (
          /** @type {Key} */
          a(this, Ke).get(t)
        ), n = a(this, lt).get(r);
        if (n)
          Zn(n), a(this, Kt).delete(r);
        else {
          var s = a(this, Ce).get(r);
          s && (a(this, lt).set(r, s.effect), a(this, Ce).delete(r), s.fragment.lastChild.remove(), this.anchor.before(s.fragment), n = s.effect);
        }
        for (const [i, f] of a(this, Ke)) {
          if (a(this, Ke).delete(i), i === t)
            break;
          const u = a(this, Ce).get(f);
          u && (we(u.effect), a(this, Ce).delete(f));
        }
        for (const [i, f] of a(this, lt)) {
          if (i === r || a(this, Kt).has(i)) continue;
          const u = () => {
            if (Array.from(a(this, Ke).values()).includes(i)) {
              var c = document.createDocumentFragment();
              Jn(f, c), c.append(Ft()), a(this, Ce).set(i, { effect: f, fragment: c });
            } else
              we(f);
            a(this, Kt).delete(i), a(this, lt).delete(i);
          };
          a(this, Vr) || !n ? (a(this, Kt).add(i), Qt(f, u, !1)) : u();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    T(this, cn, (t) => {
      a(this, Ke).delete(t);
      const r = Array.from(a(this, Ke).values());
      for (const [n, s] of a(this, Ce))
        r.includes(n) || (we(s.effect), a(this, Ce).delete(n));
    });
    this.anchor = t, A(this, Vr, r);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, r) {
    var n = (
      /** @type {Batch} */
      D
    ), s = Gs();
    if (r && !a(this, lt).has(t) && !a(this, Ce).has(t))
      if (s) {
        var i = document.createDocumentFragment(), f = Ft();
        i.append(f), a(this, Ce).set(t, {
          effect: He(() => r(f)),
          fragment: i
        });
      } else
        a(this, lt).set(
          t,
          He(() => r(this.anchor))
        );
    if (a(this, Ke).set(n, t), s) {
      for (const [u, o] of a(this, lt))
        u === t ? n.unskip_effect(o) : n.skip_effect(o);
      for (const [u, o] of a(this, Ce))
        u === t ? n.unskip_effect(o.effect) : n.skip_effect(o.effect);
      n.oncommit(a(this, Br)), n.ondiscard(a(this, cn));
    } else
      a(this, Br).call(this, n);
  }
}
Ke = new WeakMap(), lt = new WeakMap(), Ce = new WeakMap(), Kt = new WeakMap(), Vr = new WeakMap(), Br = new WeakMap(), cn = new WeakMap();
function Q(e, t, r = !1) {
  var n = new $a(e), s = r ? xr : 0;
  function i(f, u) {
    n.ensure(f, u);
  }
  Kn(() => {
    var f = !1;
    t((u, o = 0) => {
      f = !0, i(o, u);
    }), f || i(-1, null);
  }, s);
}
function st(e, t) {
  return t;
}
function el(e, t, r) {
  for (var n = [], s = t.length, i, f = t.length, u = 0; u < s; u++) {
    let d = t[u];
    Qt(
      d,
      () => {
        if (i) {
          if (i.pending.delete(d), i.done.add(d), i.pending.size === 0) {
            var v = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            Ln(e, vn(i.done)), v.delete(i), v.size === 0 && (e.outrogroups = null);
          }
        } else
          f -= 1;
      },
      !1
    );
  }
  if (f === 0) {
    var o = n.length === 0 && r !== null;
    if (o) {
      var c = (
        /** @type {Element} */
        r
      ), p = (
        /** @type {Element} */
        c.parentNode
      );
      Ma(p), p.append(c), e.items.clear();
    }
    Ln(e, t, !o);
  } else
    i = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ?? (e.outrogroups = /* @__PURE__ */ new Set())).add(i);
}
function Ln(e, t, r = !0) {
  var n;
  if (e.pending.size > 0) {
    n = /* @__PURE__ */ new Set();
    for (const f of e.pending.values())
      for (const u of f)
        n.add(
          /** @type {EachItem} */
          e.items.get(u).e
        );
  }
  for (var s = 0; s < t.length; s++) {
    var i = t[s];
    if (n?.has(i)) {
      i.f |= ft;
      const f = document.createDocumentFragment();
      Jn(i, f);
    } else
      we(t[s], r);
  }
}
var ds;
function xe(e, t, r, n, s, i = null) {
  var f = e, u = /* @__PURE__ */ new Map(), o = (t & ws) !== 0;
  if (o) {
    var c = (
      /** @type {Element} */
      e
    );
    f = c.appendChild(Ft());
  }
  var p = null, d = /* @__PURE__ */ wa(() => {
    var V = r();
    return jn(V) ? V : V == null ? [] : vn(V);
  }), v, m = /* @__PURE__ */ new Map(), g = !0;
  function j(V) {
    (G.effect.f & Qe) === 0 && (G.pending.delete(V), G.fallback = p, tl(G, v, f, t, n), p !== null && (v.length === 0 ? (p.f & ft) === 0 ? Zn(p) : (p.f ^= ft, Fr(p, null, f)) : Qt(p, () => {
      p = null;
    })));
  }
  function _(V) {
    G.pending.delete(V);
  }
  var N = Kn(() => {
    v = /** @type {V[]} */
    l(d);
    for (var V = v.length, ie = /* @__PURE__ */ new Set(), me = (
      /** @type {Batch} */
      D
    ), Me = Gs(), oe = 0; oe < V; oe += 1) {
      var ue = v[oe], C = n(ue, oe), L = g ? null : u.get(C);
      L ? (L.v && br(L.v, ue), L.i && br(L.i, oe), Me && me.unskip_effect(L.e)) : (L = rl(
        u,
        g ? f : ds ?? (ds = Ft()),
        ue,
        C,
        oe,
        s,
        t,
        r
      ), g || (L.e.f |= ft), u.set(C, L)), ie.add(C);
    }
    if (V === 0 && i && !p && (g ? p = He(() => i(f)) : (p = He(() => i(ds ?? (ds = Ft()))), p.f |= ft)), V > ie.size && Ui(), !g)
      if (m.set(me, ie), Me) {
        for (const [Ot, _n] of u)
          ie.has(Ot) || me.skip_effect(_n.e);
        me.oncommit(j), me.ondiscard(_);
      } else
        j(me);
    l(d);
  }), G = { effect: N, items: u, pending: m, outrogroups: null, fallback: p };
  g = !1;
}
function Cr(e) {
  for (; e !== null && (e.f & Xe) === 0; )
    e = e.next;
  return e;
}
function tl(e, t, r, n, s) {
  var i = (n & $i) !== 0, f = t.length, u = e.items, o = Cr(e.effect.first), c, p = null, d, v = [], m = [], g, j, _, N;
  if (i)
    for (N = 0; N < f; N += 1)
      g = t[N], j = s(g, N), _ = /** @type {EachItem} */
      u.get(j).e, (_.f & ft) === 0 && (_.nodes?.a?.measure(), (d ?? (d = /* @__PURE__ */ new Set())).add(_));
  for (N = 0; N < f; N += 1) {
    if (g = t[N], j = s(g, N), _ = /** @type {EachItem} */
    u.get(j).e, e.outrogroups !== null)
      for (const L of e.outrogroups)
        L.pending.delete(_), L.done.delete(_);
    if ((_.f & he) !== 0 && (Zn(_), i && (_.nodes?.a?.unfix(), (d ?? (d = /* @__PURE__ */ new Set())).delete(_))), (_.f & ft) !== 0)
      if (_.f ^= ft, _ === o)
        Fr(_, null, r);
      else {
        var G = p ? p.next : o;
        _ === e.effect.last && (e.effect.last = _.prev), _.prev && (_.prev.next = _.next), _.next && (_.next.prev = _.prev), At(e, p, _), At(e, _, G), Fr(_, G, r), p = _, v = [], m = [], o = Cr(p.next);
        continue;
      }
    if (_ !== o) {
      if (c !== void 0 && c.has(_)) {
        if (v.length < m.length) {
          var V = m[0], ie;
          p = V.prev;
          var me = v[0], Me = v[v.length - 1];
          for (ie = 0; ie < v.length; ie += 1)
            Fr(v[ie], V, r);
          for (ie = 0; ie < m.length; ie += 1)
            c.delete(m[ie]);
          At(e, me.prev, Me.next), At(e, p, me), At(e, Me, V), o = V, p = Me, N -= 1, v = [], m = [];
        } else
          c.delete(_), Fr(_, o, r), At(e, _.prev, _.next), At(e, _, p === null ? e.effect.first : p.next), At(e, p, _), p = _;
        continue;
      }
      for (v = [], m = []; o !== null && o !== _; )
        (c ?? (c = /* @__PURE__ */ new Set())).add(o), m.push(o), o = Cr(o.next);
      if (o === null)
        continue;
    }
    (_.f & ft) === 0 && v.push(_), p = _, o = Cr(_.next);
  }
  if (e.outrogroups !== null) {
    for (const L of e.outrogroups)
      L.pending.size === 0 && (Ln(e, vn(L.done)), e.outrogroups?.delete(L));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (o !== null || c !== void 0) {
    var oe = [];
    if (c !== void 0)
      for (_ of c)
        (_.f & he) === 0 && oe.push(_);
    for (; o !== null; )
      (o.f & he) === 0 && o !== e.fallback && oe.push(o), o = Cr(o.next);
    var ue = oe.length;
    if (ue > 0) {
      var C = (n & ws) !== 0 && f === 0 ? r : null;
      if (i) {
        for (N = 0; N < ue; N += 1)
          oe[N].nodes?.a?.measure();
        for (N = 0; N < ue; N += 1)
          oe[N].nodes?.a?.fix();
      }
      el(e, oe, C);
    }
  }
  i && Zt(() => {
    if (d !== void 0)
      for (_ of d)
        _.nodes?.a?.apply();
  });
}
function rl(e, t, r, n, s, i, f, u) {
  var o = (f & Qi) !== 0 ? (f & ea) === 0 ? /* @__PURE__ */ Sa(r, !1, !1) : tr(r) : null, c = (f & Xi) !== 0 ? tr(s) : null;
  return {
    v: o,
    i: c,
    e: He(() => (i(t, o ?? r, c ?? s, u), () => {
      e.delete(n);
    }))
  };
}
function Fr(e, t, r) {
  if (e.nodes)
    for (var n = e.nodes.start, s = e.nodes.end, i = t && (t.f & ft) === 0 ? (
      /** @type {EffectNodes} */
      t.nodes.start
    ) : r; n !== null; ) {
      var f = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Yr(n)
      );
      if (i.before(n), n === s)
        return;
      n = f;
    }
}
function At(e, t, r) {
  t === null ? e.effect.first = r : t.next = r, r === null ? e.effect.last = t : r.prev = t;
}
function ci(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var s = e.length;
    for (t = 0; t < s; t++) e[t] && (r = ci(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function nl() {
  for (var e, t, r = 0, n = "", s = arguments.length; r < s; r++) (e = arguments[r]) && (t = ci(e)) && (n && (n += " "), n += t);
  return n;
}
function ps(e) {
  return typeof e == "object" ? nl(e) : e ?? "";
}
function sl(e, t, r) {
  var n = e == null ? "" : "" + e;
  return n === "" ? null : n;
}
function _s(e, t, r, n, s, i) {
  var f = (
    /** @type {any} */
    e[Sn]
  );
  if (f !== r || f === void 0) {
    var u = sl(r);
    u == null ? e.removeAttribute("class") : e.className = u, e[Sn] = r;
  }
  return i;
}
function vi(e, t, r = !1) {
  if (e.multiple) {
    if (t == null)
      return;
    if (!jn(t))
      return na();
    for (var n of e.options)
      n.selected = t.includes(Ir(n));
    return;
  }
  for (n of e.options) {
    var s = Ir(n);
    if (Da(s, t)) {
      n.selected = !0;
      return;
    }
  }
  (!r || t !== void 0) && (e.selectedIndex = -1);
}
function il(e) {
  var t = new MutationObserver(() => {
    vi(e, e.__value);
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
  }), Ws(() => {
    t.disconnect();
  });
}
function hs(e, t, r = t) {
  var n = /* @__PURE__ */ new WeakSet(), s = !0;
  Ks(e, "change", (i) => {
    var f = i ? "[selected]" : ":checked", u;
    if (e.multiple)
      u = [].map.call(e.querySelectorAll(f), Ir);
    else {
      var o = e.querySelector(f) ?? // will fall back to first non-disabled option if no option is selected
      e.querySelector("option:not([disabled])");
      u = o && Ir(o);
    }
    r(u), e.__value = u, D !== null && n.add(D);
  }), Ia(() => {
    var i = t();
    if (e === document.activeElement) {
      var f = (
        /** @type {Batch} */
        D
      );
      if (n.has(f))
        return;
    }
    if (vi(e, i, s), s && i === void 0) {
      var u = e.querySelector(":checked");
      u !== null && (i = Ir(u), r(i));
    }
    e.__value = i, s = !1;
  }), il(e);
}
function Ir(e) {
  return "__value" in e ? e.__value : e.value;
}
const al = Symbol("is custom element"), ll = Symbol("is html");
function ol(e, t, r, n) {
  var s = fl(e);
  s[t] !== (s[t] = r) && (r == null ? e.removeAttribute(t) : typeof r != "string" && ul(e).includes(t) ? e[t] = r : e.setAttribute(t, r));
}
function fl(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    /** @type {any} */
    e[Qr] ?? (e[Qr] = {
      [al]: e.nodeName.includes("-"),
      [ll]: e.namespaceURI === Es
    })
  );
}
var ms = /* @__PURE__ */ new Map();
function ul(e) {
  var t = e.getAttribute("is") || e.nodeName, r = ms.get(t);
  if (r) return r;
  ms.set(t, r = []);
  for (var n, s = e, i = Element.prototype; i !== s; ) {
    n = Fi(s);
    for (var f in n)
      n[f].set && // better safe than sorry, we don't want spread attributes to mess with HTML content
      f !== "innerHTML" && f !== "textContent" && f !== "innerText" && r.push(f);
    s = xs(s);
  }
  return r;
}
function or(e, t, r = t) {
  var n = /* @__PURE__ */ new WeakSet();
  Ks(e, "input", async (s) => {
    var i = s ? e.defaultValue : e.value;
    if (i = wn(e) ? En(i) : i, r(i), D !== null && n.add(D), await Va(), i !== (i = t())) {
      var f = e.selectionStart, u = e.selectionEnd, o = e.value.length;
      if (e.value = i ?? "", u !== null) {
        var c = e.value.length;
        f === u && u === o && c > o ? (e.selectionStart = c, e.selectionEnd = c) : (e.selectionStart = f, e.selectionEnd = Math.min(u, c));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  oi(t) == null && e.value && (r(wn(e) ? En(e.value) : e.value), D !== null && n.add(D)), Js(() => {
    var s = t();
    if (e === document.activeElement) {
      var i = (
        /** @type {Batch} */
        D
      );
      if (n.has(i))
        return;
    }
    wn(e) && s === En(e.value) || e.type === "date" && !s && !e.value || s !== e.value && (e.value = s ?? "");
  });
}
function wn(e) {
  var t = e.type;
  return t === "number" || t === "range";
}
function En(e) {
  return e === "" ? null : +e;
}
const cl = "5";
var gs;
typeof window < "u" && ((gs = window.__svelte ?? (window.__svelte = {})).v ?? (gs.v = /* @__PURE__ */ new Set())).add(cl);
var vl = /* @__PURE__ */ S("<div> </div>"), dl = /* @__PURE__ */ S('<div class="fixed top-4 right-4 z-50 space-y-2"></div>'), pl = /* @__PURE__ */ S("<button> </button>"), _l = /* @__PURE__ */ S('<div class="p-4 border border-gray-200 rounded-xl bg-gray-50 space-y-3"><input placeholder="Department name" class="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"/> <input placeholder="Description (optional)" class="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"/> <input placeholder="Head principal (optional)" class="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"/> <button class="px-4 py-2 bg-gray-900 text-white text-sm rounded-lg hover:bg-gray-800 disabled:opacity-50">Create</button></div>'), hl = /* @__PURE__ */ S('<div class="flex justify-center py-8"><svg class="animate-spin h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg></div>'), ml = /* @__PURE__ */ S('<p class="text-center text-gray-500 py-8">No departments yet. Create one to get started.</p>'), gl = /* @__PURE__ */ S('<span class="ml-2 text-sm text-gray-500"> </span>'), xl = /* @__PURE__ */ S('<div class="text-sm"><span class="font-medium text-gray-700">Head:</span> </div>'), yl = /* @__PURE__ */ S('<div class="text-sm"><span class="font-medium text-gray-700">Extensions:</span> </div>'), bl = /* @__PURE__ */ S('<p class="text-sm text-gray-400">No members</p>'), wl = /* @__PURE__ */ S('<div class="flex items-center justify-between text-sm bg-white px-3 py-1.5 rounded-lg"><span> </span> <button class="text-red-500 hover:text-red-700 text-xs">Remove</button></div>'), El = /* @__PURE__ */ S('<div class="space-y-1"></div>'), kl = /* @__PURE__ */ S('<div class="px-4 py-3 border-t border-gray-100 bg-gray-50 space-y-3"><!> <!> <div class="text-sm font-medium text-gray-700 mt-2">Members:</div> <!> <div class="flex gap-2 mt-2"><input placeholder="User principal" class="flex-1 px-3 py-1.5 border border-gray-300 rounded-lg text-sm"/> <button class="px-3 py-1.5 bg-gray-900 text-white text-sm rounded-lg hover:bg-gray-800">Add</button></div> <button class="mt-2 text-sm text-red-600 hover:text-red-800">Delete department</button></div>'), Sl = /* @__PURE__ */ S('<div class="border border-gray-200 rounded-xl overflow-hidden"><button class="w-full px-4 py-3 flex items-center justify-between bg-white hover:bg-gray-50 text-left"><div><span class="font-medium text-gray-900"> </span> <!></div> <div class="flex items-center gap-3 text-sm text-gray-500"><span> </span> <span class="text-xs"> </span></div></button> <!></div>'), Al = /* @__PURE__ */ S('<div class="space-y-4"><div class="flex items-center justify-between"><h2 class="text-lg font-semibold text-gray-800"> </h2> <button class="px-3 py-1.5 text-sm bg-gray-900 text-white rounded-lg hover:bg-gray-800"> </button></div> <!> <!></div>'), Tl = /* @__PURE__ */ S('<div class="flex justify-center py-8"><svg class="animate-spin h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg></div>'), Dl = /* @__PURE__ */ S('<p class="text-center text-gray-500 py-8">No Extension entities found. Extensions are seeded when installed.</p>'), Cl = /* @__PURE__ */ S('<span class="ml-2 text-sm text-gray-500"> </span>'), Ml = /* @__PURE__ */ S('<span class="text-sm text-gray-400">None</span>'), Nl = /* @__PURE__ */ S('<span class="inline-flex items-center gap-1 px-2 py-0.5 bg-blue-50 text-blue-700 text-xs rounded-full"> <button class="text-blue-400 hover:text-blue-600">&times;</button></span>'), Fl = /* @__PURE__ */ S('<div class="flex flex-wrap gap-1"></div>'), Rl = /* @__PURE__ */ S('<span class="text-sm text-gray-400">None</span>'), Pl = /* @__PURE__ */ S('<span class="inline-flex items-center gap-1 px-2 py-0.5 bg-purple-50 text-purple-700 text-xs rounded-full"> <button class="text-purple-400 hover:text-purple-600">&times;</button></span>'), Ol = /* @__PURE__ */ S('<div class="flex flex-wrap gap-1"></div>'), Ll = /* @__PURE__ */ S('<span class="text-sm text-gray-400">None</span>'), Il = /* @__PURE__ */ S('<span class="inline-flex items-center gap-1 px-2 py-0.5 bg-green-50 text-green-700 text-xs rounded-full"> <button class="text-green-400 hover:text-green-600">&times;</button></span>'), jl = /* @__PURE__ */ S('<div class="flex flex-wrap gap-1"></div>'), Hl = /* @__PURE__ */ S('<div class="px-4 py-3 border-t border-gray-100 bg-gray-50 space-y-3"><div><div class="text-sm font-medium text-gray-700 mb-1">Profile-level access (from manifest):</div> <!></div> <div><div class="text-sm font-medium text-gray-700 mb-1">Department access:</div> <!></div> <div><div class="text-sm font-medium text-gray-700 mb-1">Direct user access:</div> <!></div> <div class="pt-2 border-t border-gray-200"><div class="text-sm font-medium text-gray-700 mb-2">Grant access:</div> <div class="flex gap-2 flex-wrap"><select class="px-2 py-1.5 border border-gray-300 rounded-lg text-sm"><option>User</option><option>Department</option><option>Profile</option></select> <input class="flex-1 min-w-0 px-3 py-1.5 border border-gray-300 rounded-lg text-sm"/> <button class="px-3 py-1.5 bg-gray-900 text-white text-sm rounded-lg hover:bg-gray-800">Grant</button></div></div></div>'), zl = /* @__PURE__ */ S('<div class="border border-gray-200 rounded-xl overflow-hidden"><button class="w-full px-4 py-3 flex items-center justify-between bg-white hover:bg-gray-50 text-left"><div><span class="font-medium text-gray-900"> </span> <!></div> <span class="text-xs text-gray-500"> </span></button> <!></div>'), ql = /* @__PURE__ */ S('<div class="space-y-4"><h2 class="text-lg font-semibold text-gray-800"> </h2> <!></div>'), Ul = /* @__PURE__ */ S('<div class="flex justify-center py-8"><svg class="animate-spin h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg></div>'), Vl = /* @__PURE__ */ S('<p class="text-center text-gray-500 py-8">No users found.</p>'), Bl = /* @__PURE__ */ S('<span class="ml-2 text-xs text-gray-400"> </span>'), Yl = /* @__PURE__ */ S('<span class="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full"> </span>'), Gl = /* @__PURE__ */ S('<span class="inline-flex items-center gap-1 px-2 py-0.5 bg-gray-100 text-gray-700 text-xs rounded-full"> <button class="text-gray-400 hover:text-red-600">&times;</button></span>'), Kl = /* @__PURE__ */ S("<option> </option>"), Wl = /* @__PURE__ */ S('<span class="px-2 py-0.5 bg-purple-50 text-purple-700 text-xs rounded-full"> </span>'), Zl = /* @__PURE__ */ S('<div><div class="text-sm font-medium text-gray-700 mb-1">Departments:</div> <div class="flex flex-wrap gap-1"></div></div>'), Jl = /* @__PURE__ */ S('<span class="px-2 py-0.5 bg-green-50 text-green-700 text-xs rounded-full"> </span>'), Ql = /* @__PURE__ */ S('<div><div class="text-sm font-medium text-gray-700 mb-1">Direct extension access:</div> <div class="flex flex-wrap gap-1"></div></div>'), Xl = /* @__PURE__ */ S('<div class="px-4 py-3 border-t border-gray-100 bg-gray-50 space-y-3"><div class="text-xs text-gray-500 font-mono break-all"> </div> <div><div class="text-sm font-medium text-gray-700 mb-1">Profiles:</div> <div class="flex flex-wrap gap-1"></div> <div class="flex gap-2 mt-2"><select class="px-2 py-1.5 border border-gray-300 rounded-lg text-sm"><option>Assign profile...</option><!></select> <button class="px-3 py-1.5 bg-gray-900 text-white text-sm rounded-lg hover:bg-gray-800 disabled:opacity-50">Assign</button></div></div> <!> <!></div>'), $l = /* @__PURE__ */ S('<div class="border border-gray-200 rounded-xl overflow-hidden"><button class="w-full px-4 py-3 flex items-center justify-between bg-white hover:bg-gray-50 text-left"><div><span class="font-medium text-gray-900"> </span> <!></div> <div class="flex items-center gap-2"><!> <span class="text-xs text-gray-500"> </span></div></button> <!></div>'), eo = /* @__PURE__ */ S('<div class="space-y-4"><div class="flex items-center justify-between gap-4"><h2 class="text-lg font-semibold text-gray-800"> </h2> <input placeholder="Search..." class="px-3 py-1.5 border border-gray-300 rounded-lg text-sm w-48"/></div> <!></div>'), to = /* @__PURE__ */ S('<div class="max-w-5xl mx-auto p-4 sm:p-6"><div class="mb-6"><h1 class="text-2xl font-bold text-gray-900">Access Manager</h1> <p class="text-sm text-gray-500 mt-1">Manage departments, extension visibility, and user roles</p></div> <!> <div class="border-b border-gray-200 mb-6"><nav class="flex gap-6"></nav></div> <!></div>');
function ro(e, t) {
  As(t, !0);
  const r = t.ctx.theme?.cn ?? ((...h) => h.filter(Boolean).join(" "));
  let n = /* @__PURE__ */ H("departments"), s = /* @__PURE__ */ H(ot([])), i = /* @__PURE__ */ H(0), f = /* @__PURE__ */ H(ot([])), u = /* @__PURE__ */ H(!1), o = /* @__PURE__ */ H(!1), c = /* @__PURE__ */ H(""), p = /* @__PURE__ */ H(""), d = /* @__PURE__ */ H(""), v = /* @__PURE__ */ H(null), m = /* @__PURE__ */ H(""), g = /* @__PURE__ */ H(ot([])), j = /* @__PURE__ */ H(!1), _ = /* @__PURE__ */ H(null), N = /* @__PURE__ */ H(""), G = /* @__PURE__ */ H("user"), V = /* @__PURE__ */ H(ot([])), ie = /* @__PURE__ */ H(!1), me = /* @__PURE__ */ H(null), Me = /* @__PURE__ */ H(""), oe = /* @__PURE__ */ H(ot([])), ue = /* @__PURE__ */ H("");
  function C(h, b = "success") {
    const w = Ta(i);
    M(s, [...l(s), { id: w, text: h, type: b }], !0), setTimeout(
      () => {
        M(s, l(s).filter((X) => X.id !== w), !0);
      },
      4e3
    );
  }
  async function L(h, b = {}) {
    return await t.ctx.callSync(h, b);
  }
  async function Ot() {
    M(u, !0);
    try {
      const h = await L("list_departments");
      M(f, h?.data?.departments ?? [], !0);
    } catch (h) {
      C(h?.message || "Failed to load departments", "error");
    } finally {
      M(u, !1);
    }
  }
  async function _n() {
    if (l(c).trim())
      try {
        const h = await L("create_department", {
          name: l(c).trim(),
          description: l(p).trim(),
          head_principal: l(d).trim() || void 0
        });
        h?.success ? (C(`Department "${l(c)}" created`), M(c, ""), M(p, ""), M(d, ""), M(o, !1), await Ot()) : C(h?.error || "Failed to create", "error");
      } catch (h) {
        C(h?.message || "Error", "error");
      }
  }
  async function di(h) {
    if (confirm(`Delete department "${h}"?`))
      try {
        const b = await L("delete_department", { name: h });
        b?.success ? (C(`Department "${h}" deleted`), await Ot()) : C(b?.error || "Failed", "error");
      } catch (b) {
        C(b?.message || "Error", "error");
      }
  }
  async function pi(h) {
    if (l(m).trim())
      try {
        const b = await L("add_department_member", {
          department: h,
          user_principal: l(m).trim()
        });
        b?.success ? (C("Member added"), M(m, ""), await Ot()) : C(b?.error || "Failed", "error");
      } catch (b) {
        C(b?.message || "Error", "error");
      }
  }
  async function _i(h, b) {
    try {
      const w = await L("remove_department_member", { department: h, user_principal: b });
      w?.success ? (C("Member removed"), await Ot()) : C(w?.error || "Failed", "error");
    } catch (w) {
      C(w?.message || "Error", "error");
    }
  }
  async function kr() {
    M(j, !0);
    try {
      const h = await L("list_extensions");
      M(g, h?.data?.extensions ?? [], !0);
    } catch (h) {
      C(h?.message || "Failed to load extensions", "error");
    } finally {
      M(j, !1);
    }
  }
  async function hi(h) {
    if (!l(N).trim()) return;
    let b = "", w = { extension: h };
    l(G) === "user" ? (b = "grant_extension_to_user", w.user_principal = l(N).trim()) : l(G) === "department" ? (b = "grant_extension_to_department", w.department = l(N).trim()) : (b = "grant_extension_to_profile", w.profile = l(N).trim());
    try {
      const X = await L(b, w);
      X?.success ? (C("Access granted"), M(N, ""), await kr()) : C(X?.error || "Failed", "error");
    } catch (X) {
      C(X?.message || "Error", "error");
    }
  }
  async function mi(h, b) {
    try {
      const w = await L("revoke_extension_from_user", { extension: h, user_principal: b });
      w?.success ? (C("Revoked"), await kr()) : C(w?.error || "Failed", "error");
    } catch (w) {
      C(w?.message || "Error", "error");
    }
  }
  async function gi(h, b) {
    try {
      const w = await L("revoke_extension_from_department", { extension: h, department: b });
      w?.success ? (C("Revoked"), await kr()) : C(w?.error || "Failed", "error");
    } catch (w) {
      C(w?.message || "Error", "error");
    }
  }
  async function xi(h, b) {
    try {
      const w = await L("revoke_extension_from_profile", { extension: h, profile: b });
      w?.success ? (C("Revoked"), await kr()) : C(w?.error || "Failed", "error");
    } catch (w) {
      C(w?.message || "Error", "error");
    }
  }
  async function hn() {
    M(ie, !0);
    try {
      const [h, b] = await Promise.all([L("list_users"), L("get_available_profiles")]);
      M(V, h?.data?.users ?? [], !0), M(oe, b?.data?.profiles ?? [], !0);
    } catch (h) {
      C(h?.message || "Failed to load users", "error");
    } finally {
      M(ie, !1);
    }
  }
  async function yi(h) {
    if (l(ue))
      try {
        const b = await L("assign_profile", {
          target_principal: h,
          profile_name: l(ue)
        });
        b?.success ? (C(`Profile "${l(ue)}" assigned`), M(ue, ""), await hn()) : C(b?.error || "Failed", "error");
      } catch (b) {
        C(b?.message || "Error", "error");
      }
  }
  async function bi(h, b) {
    if (confirm(`Revoke "${b}" from this user?`))
      try {
        const w = await L("revoke_profile", { target_principal: h, profile_name: b });
        w?.success ? (C("Profile revoked"), await hn()) : C(w?.error || "Failed", "error");
      } catch (w) {
        C(w?.message || "Error", "error");
      }
  }
  Oa(() => {
    l(n) === "departments" ? Ot() : l(n) === "extensions" ? kr() : l(n) === "users" && hn();
  });
  let Qn = /* @__PURE__ */ bn(() => l(Me) ? l(V).filter((h) => h.principal.toLowerCase().includes(l(Me).toLowerCase()) || (h.nickname || "").toLowerCase().includes(l(Me).toLowerCase())) : l(V));
  function Sr(h) {
    return !h || h.length < 12 ? h : h.slice(0, 5) + "..." + h.slice(-5);
  }
  var Xn = to(), $n = y(x(Xn), 2);
  {
    var wi = (h) => {
      var b = dl();
      xe(b, 21, () => l(s), (w) => w.id, (w, X) => {
        var Be = vl(), Ee = x(Be);
        Y(
          (vt) => {
            _s(Be, 1, vt), U(Ee, l(X).text);
          },
          [
            () => ps(r("px-4 py-2 rounded-lg shadow-lg text-sm font-medium transition-all", l(X).type === "success" ? "bg-green-50 text-green-800 border border-green-200" : "bg-red-50 text-red-800 border border-red-200"))
          ]
        ), E(w, Be);
      }), E(h, b);
    };
    Q($n, (h) => {
      l(s).length > 0 && h(wi);
    });
  }
  var es = y($n, 2), Ei = x(es);
  xe(
    Ei,
    20,
    () => [
      ["departments", "Departments"],
      ["extensions", "Extensions"],
      ["users", "Users"]
    ],
    st,
    (h, b) => {
      var w = /* @__PURE__ */ bn(() => Ii(b, 2));
      let X = () => l(w)[0], Be = () => l(w)[1];
      var Ee = pl(), vt = x(Ee);
      Y(
        (wt) => {
          _s(Ee, 1, wt), U(vt, Be());
        },
        [
          () => ps(r("pb-3 text-sm font-medium border-b-2 transition-colors", l(n) === X() ? "border-gray-900 text-gray-900" : "border-transparent text-gray-500 hover:text-gray-700"))
        ]
      ), pe("click", Ee, () => M(n, X(), !0)), E(h, Ee);
    }
  );
  var ki = y(es, 2);
  {
    var Si = (h) => {
      var b = Al(), w = x(b), X = x(w), Be = x(X), Ee = y(X, 2), vt = x(Ee), wt = y(w, 2);
      {
        var ke = ($) => {
          var O = _l(), et = x(O), Se = y(et, 2), B = y(Se, 2), tt = y(B, 2);
          Y((ve) => tt.disabled = ve, [() => !l(c).trim()]), or(et, () => l(c), (ve) => M(c, ve)), or(Se, () => l(p), (ve) => M(p, ve)), or(B, () => l(d), (ve) => M(d, ve)), pe("click", tt, _n), E($, O);
        };
        Q(wt, ($) => {
          l(o) && $(ke);
        });
      }
      var $e = y(wt, 2);
      {
        var ce = ($) => {
          var O = hl();
          E($, O);
        }, Ne = ($) => {
          var O = ml();
          E($, O);
        }, Z = ($) => {
          var O = Zr(), et = Wr(O);
          xe(et, 17, () => l(f), (Se) => Se.name, (Se, B) => {
            var tt = Sl(), ve = x(tt), nr = x(ve), sr = x(nr), Ar = x(sr), ir = y(sr, 2);
            {
              var Ye = (Re) => {
                var rt = gl(), ht = x(rt);
                Y(() => U(ht, `— ${l(B).description ?? ""}`)), E(Re, rt);
              };
              Q(ir, (Re) => {
                l(B).description && Re(Ye);
              });
            }
            var dt = y(nr, 2), pt = x(dt), Tr = x(pt), de = y(pt, 2), Ge = x(de), Fe = y(ve, 2);
            {
              var _t = (Re) => {
                var rt = kl(), ht = x(rt);
                {
                  var Lt = (z) => {
                    var k = xl(), q = y(x(k));
                    Y((J) => U(q, ` ${J ?? ""}`), [
                      () => l(B).head.nickname || Sr(l(B).head.principal)
                    ]), E(z, k);
                  };
                  Q(ht, (z) => {
                    l(B).head && z(Lt);
                  });
                }
                var Et = y(ht, 2);
                {
                  var Dr = (z) => {
                    var k = yl(), q = y(x(k));
                    Y((J) => U(q, ` ${J ?? ""}`), [() => l(B).extensions.join(", ")]), E(z, k);
                  };
                  Q(Et, (z) => {
                    l(B).extensions.length > 0 && z(Dr);
                  });
                }
                var It = y(Et, 4);
                {
                  var ar = (z) => {
                    var k = bl();
                    E(z, k);
                  }, jt = (z) => {
                    var k = El();
                    xe(k, 21, () => l(B).members, st, (q, J) => {
                      var ee = wl(), fe = x(ee), Pe = x(fe), nt = y(fe, 2);
                      Y((mn) => U(Pe, mn), [
                        () => l(J).nickname || Sr(l(J).principal)
                      ]), pe("click", nt, () => _i(l(B).name, l(J).principal)), E(q, ee);
                    }), E(z, k);
                  };
                  Q(It, (z) => {
                    l(B).members.length === 0 ? z(ar) : z(jt, -1);
                  });
                }
                var kt = y(It, 2), St = x(kt), se = y(St, 2), te = y(kt, 2);
                or(St, () => l(m), (z) => M(m, z)), pe("click", se, () => pi(l(B).name)), pe("click", te, () => di(l(B).name)), E(Re, rt);
              };
              Q(Fe, (Re) => {
                l(v) === l(B).name && Re(_t);
              });
            }
            Y(() => {
              U(Ar, l(B).name), U(Tr, `${l(B).member_count ?? ""} members`), U(Ge, l(v) === l(B).name ? "▲" : "▼");
            }), pe("click", ve, () => M(v, l(v) === l(B).name ? null : l(B).name, !0)), E(Se, tt);
          }), E($, O);
        };
        Q($e, ($) => {
          l(u) ? $(ce) : l(f).length === 0 ? $(Ne, 1) : $(Z, -1);
        });
      }
      Y(() => {
        U(Be, `Departments (${l(f).length ?? ""})`), U(vt, l(o) ? "Cancel" : "+ New Department");
      }), pe("click", Ee, () => M(o, !l(o))), E(h, b);
    }, Ai = (h) => {
      var b = ql(), w = x(b), X = x(w), Be = y(w, 2);
      {
        var Ee = (ke) => {
          var $e = Tl();
          E(ke, $e);
        }, vt = (ke) => {
          var $e = Dl();
          E(ke, $e);
        }, wt = (ke) => {
          var $e = Zr(), ce = Wr($e);
          xe(ce, 17, () => l(g), (Ne) => Ne.name, (Ne, Z) => {
            var $ = zl(), O = x($), et = x(O), Se = x(et), B = x(Se), tt = y(Se, 2);
            {
              var ve = (Ye) => {
                var dt = Cl(), pt = x(dt);
                Y(() => U(pt, `— ${l(Z).description ?? ""}`)), E(Ye, dt);
              };
              Q(tt, (Ye) => {
                l(Z).description && Ye(ve);
              });
            }
            var nr = y(et, 2), sr = x(nr), Ar = y(O, 2);
            {
              var ir = (Ye) => {
                var dt = Hl(), pt = x(dt), Tr = y(x(pt), 2);
                {
                  var de = (k) => {
                    var q = Ml();
                    E(k, q);
                  }, Ge = (k) => {
                    var q = Fl();
                    xe(q, 21, () => l(Z).profiles, st, (J, ee) => {
                      var fe = Nl(), Pe = x(fe), nt = y(Pe);
                      Y(() => U(Pe, `${l(ee) ?? ""} `)), pe("click", nt, () => xi(l(Z).name, l(ee))), E(J, fe);
                    }), E(k, q);
                  };
                  Q(Tr, (k) => {
                    l(Z).profiles.length === 0 ? k(de) : k(Ge, -1);
                  });
                }
                var Fe = y(pt, 2), _t = y(x(Fe), 2);
                {
                  var Re = (k) => {
                    var q = Rl();
                    E(k, q);
                  }, rt = (k) => {
                    var q = Ol();
                    xe(q, 21, () => l(Z).departments, st, (J, ee) => {
                      var fe = Pl(), Pe = x(fe), nt = y(Pe);
                      Y(() => U(Pe, `${l(ee) ?? ""} `)), pe("click", nt, () => gi(l(Z).name, l(ee))), E(J, fe);
                    }), E(k, q);
                  };
                  Q(_t, (k) => {
                    l(Z).departments.length === 0 ? k(Re) : k(rt, -1);
                  });
                }
                var ht = y(Fe, 2), Lt = y(x(ht), 2);
                {
                  var Et = (k) => {
                    var q = Ll();
                    E(k, q);
                  }, Dr = (k) => {
                    var q = jl();
                    xe(q, 21, () => l(Z).users, st, (J, ee) => {
                      var fe = Il(), Pe = x(fe), nt = y(Pe);
                      Y((mn) => U(Pe, `${mn ?? ""} `), [
                        () => l(ee).nickname || Sr(l(ee).principal)
                      ]), pe("click", nt, () => mi(l(Z).name, l(ee).principal)), E(J, fe);
                    }), E(k, q);
                  };
                  Q(Lt, (k) => {
                    l(Z).users.length === 0 ? k(Et) : k(Dr, -1);
                  });
                }
                var It = y(ht, 2), ar = y(x(It), 2), jt = x(ar), kt = x(jt);
                kt.value = kt.__value = "user";
                var St = y(kt);
                St.value = St.__value = "department";
                var se = y(St);
                se.value = se.__value = "profile";
                var te = y(jt, 2), z = y(te, 2);
                Y(() => ol(te, "placeholder", l(G) === "user" ? "Principal" : l(G) === "department" ? "Dept name" : "Profile name")), hs(jt, () => l(G), (k) => M(G, k)), or(te, () => l(N), (k) => M(N, k)), pe("click", z, () => hi(l(Z).name)), E(Ye, dt);
              };
              Q(Ar, (Ye) => {
                l(_) === l(Z).name && Ye(ir);
              });
            }
            Y(() => {
              U(B, l(Z).name), U(sr, l(_) === l(Z).name ? "▲" : "▼");
            }), pe("click", O, () => M(_, l(_) === l(Z).name ? null : l(Z).name, !0)), E(Ne, $);
          }), E(ke, $e);
        };
        Q(Be, (ke) => {
          l(j) ? ke(Ee) : l(g).length === 0 ? ke(vt, 1) : ke(wt, -1);
        });
      }
      Y(() => U(X, `Extension Access (${l(g).length ?? ""})`)), E(h, b);
    }, Ti = (h) => {
      var b = eo(), w = x(b), X = x(w), Be = x(X), Ee = y(X, 2), vt = y(w, 2);
      {
        var wt = (ce) => {
          var Ne = Ul();
          E(ce, Ne);
        }, ke = (ce) => {
          var Ne = Vl();
          E(ce, Ne);
        }, $e = (ce) => {
          var Ne = Zr(), Z = Wr(Ne);
          xe(Z, 17, () => l(Qn), ($) => $.principal, ($, O) => {
            var et = $l(), Se = x(et), B = x(Se), tt = x(B), ve = x(tt), nr = y(tt, 2);
            {
              var sr = (de) => {
                var Ge = Bl(), Fe = x(Ge);
                Y((_t) => U(Fe, _t), [() => Sr(l(O).principal)]), E(de, Ge);
              };
              Q(nr, (de) => {
                l(O).nickname && de(sr);
              });
            }
            var Ar = y(B, 2), ir = x(Ar);
            xe(ir, 17, () => l(O).profiles, st, (de, Ge) => {
              var Fe = Yl(), _t = x(Fe);
              Y(() => U(_t, l(Ge))), E(de, Fe);
            });
            var Ye = y(ir, 2), dt = x(Ye), pt = y(Se, 2);
            {
              var Tr = (de) => {
                var Ge = Xl(), Fe = x(Ge), _t = x(Fe), Re = y(Fe, 2), rt = y(x(Re), 2);
                xe(rt, 21, () => l(O).profiles, st, (se, te) => {
                  var z = Gl(), k = x(z), q = y(k);
                  Y(() => U(k, `${l(te) ?? ""} `)), pe("click", q, () => bi(l(O).principal, l(te))), E(se, z);
                });
                var ht = y(rt, 2), Lt = x(ht), Et = x(Lt);
                Et.value = Et.__value = "";
                var Dr = y(Et);
                xe(Dr, 17, () => l(oe), st, (se, te) => {
                  var z = Zr(), k = Wr(z);
                  {
                    var q = (ee) => {
                      var fe = Kl(), Pe = x(fe), nt = {};
                      Y(() => {
                        U(Pe, l(te).name), nt !== (nt = l(te).name) && (fe.value = (fe.__value = l(te).name) ?? "");
                      }), E(ee, fe);
                    }, J = /* @__PURE__ */ bn(() => !l(O).profiles.includes(l(te).name));
                    Q(k, (ee) => {
                      l(J) && ee(q);
                    });
                  }
                  E(se, z);
                });
                var It = y(Lt, 2), ar = y(Re, 2);
                {
                  var jt = (se) => {
                    var te = Zl(), z = y(x(te), 2);
                    xe(z, 21, () => l(O).departments, st, (k, q) => {
                      var J = Wl(), ee = x(J);
                      Y(() => U(ee, l(q))), E(k, J);
                    }), E(se, te);
                  };
                  Q(ar, (se) => {
                    l(O).departments?.length > 0 && se(jt);
                  });
                }
                var kt = y(ar, 2);
                {
                  var St = (se) => {
                    var te = Ql(), z = y(x(te), 2);
                    xe(z, 21, () => l(O).direct_extensions, st, (k, q) => {
                      var J = Jl(), ee = x(J);
                      Y(() => U(ee, l(q))), E(k, J);
                    }), E(se, te);
                  };
                  Q(kt, (se) => {
                    l(O).direct_extensions?.length > 0 && se(St);
                  });
                }
                Y(() => {
                  U(_t, l(O).principal), It.disabled = !l(ue);
                }), hs(Lt, () => l(ue), (se) => M(ue, se)), pe("click", It, () => yi(l(O).principal)), E(de, Ge);
              };
              Q(pt, (de) => {
                l(me) === l(O).principal && de(Tr);
              });
            }
            Y(
              (de) => {
                U(ve, de), U(dt, l(me) === l(O).principal ? "▲" : "▼");
              },
              [
                () => l(O).nickname || Sr(l(O).principal)
              ]
            ), pe("click", Se, () => M(me, l(me) === l(O).principal ? null : l(O).principal, !0)), E($, et);
          }), E(ce, Ne);
        };
        Q(vt, (ce) => {
          l(ie) ? ce(wt) : l(Qn).length === 0 ? ce(ke, 1) : ce($e, -1);
        });
      }
      Y(() => U(Be, `Users (${l(V).length ?? ""})`)), or(Ee, () => l(Me), (ce) => M(Me, ce)), E(h, b);
    };
    Q(ki, (h) => {
      l(n) === "departments" ? h(Si) : l(n) === "extensions" ? h(Ai, 1) : l(n) === "users" && h(Ti, 2);
    });
  }
  E(e, Xn), Ts();
}
Ga(["click"]);
function io(e, t) {
  const r = Ja(ro, { target: e, props: { ctx: t } });
  return {
    unmount() {
      try {
        Xa(r);
      } catch {
      }
    }
  };
}
export {
  io as default
};
