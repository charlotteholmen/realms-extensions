var yi = Object.defineProperty;
var Rn = (e) => {
  throw TypeError(e);
};
var xi = (e, t, r) => t in e ? yi(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var Le = (e, t, r) => xi(e, typeof t != "symbol" ? t + "" : t, r), Ua = (e, t, r) => t.has(e) || Rn("Cannot " + r);
var l = (e, t, r) => (Ua(e, t, "read from private field"), r ? r.call(e) : t.get(e)), C = (e, t, r) => t.has(e) ? Rn("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), A = (e, t, r, a) => (Ua(e, t, "write to private field"), a ? a.call(e, r) : t.set(e, r), r), B = (e, t, r) => (Ua(e, t, "access private method"), r);
var Xn = Array.isArray, mi = Array.prototype.indexOf, fr = Array.prototype.includes, Oa = Array.from, ki = Object.defineProperty, Xr = Object.getOwnPropertyDescriptor, wi = Object.getOwnPropertyDescriptors, Ei = Object.prototype, Si = Array.prototype, es = Object.getPrototypeOf, Mn = Object.isExtensible;
const Ai = () => {
};
function ji(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function ts() {
  var e, t, r = new Promise((a, n) => {
    e = a, t = n;
  });
  return { promise: r, resolve: e, reject: t };
}
function Gr(e, t) {
  if (Array.isArray(e))
    return e;
  if (!(Symbol.iterator in e))
    return Array.from(e);
  const r = [];
  for (const a of e)
    if (r.push(a), r.length === t) break;
  return r;
}
const je = 2, ta = 4, Pa = 8, rs = 1 << 24, ot = 16, ct = 32, zt = 64, Ka = 128, et = 512, pe = 1024, Ae = 2048, yt = 4096, De = 8192, ut = 16384, br = 32768, Bn = 1 << 25, Lr = 65536, wa = 1 << 17, Ti = 1 << 18, $r = 1 << 19, Ci = 1 << 20, bt = 1 << 25, pr = 65536, Ea = 1 << 21, Cr = 1 << 22, $t = 1 << 23, Ha = Symbol("$state"), ha = Symbol("attributes"), Wa = Symbol("class"), Za = Symbol("style"), Wr = Symbol("text"), Da = new class extends Error {
  constructor() {
    super(...arguments);
    Le(this, "name", "StaleReactionError");
    Le(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
function Ni() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Fi(e, t, r) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function Oi(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Pi() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Di(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Ii() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Li() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Ri() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Mi() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Bi() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
const $i = 1, zi = 2, as = 4, qi = 8, Vi = 16, Ui = 1, Hi = 2, ge = Symbol("uninitialized"), ns = "http://www.w3.org/1999/xhtml";
function Yi() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function Ji() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function ss(e) {
  return e === this.v;
}
function Gi(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function is(e) {
  return !Gi(e, this.v);
}
let rt = null;
function Rr(e) {
  rt = e;
}
function ls(e, t = !1, r) {
  rt = {
    p: rt,
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
function os(e) {
  var t = (
    /** @type {ComponentContext} */
    rt
  ), r = t.e;
  if (r !== null) {
    t.e = null;
    for (var a of r)
      Ts(a);
  }
  return t.i = !0, rt = t.p, /** @type {T} */
  {};
}
function ds() {
  return !0;
}
let jr = [];
function Ki() {
  var e = jr;
  jr = [], ji(e);
}
function ur(e) {
  if (jr.length === 0) {
    var t = jr;
    queueMicrotask(() => {
      t === jr && Ki();
    });
  }
  jr.push(e);
}
function fs(e) {
  var t = R;
  if (t === null)
    return I.f |= $t, e;
  if ((t.f & br) === 0 && (t.f & ta) === 0)
    throw e;
  Bt(e, t);
}
function Bt(e, t) {
  for (; t !== null; ) {
    if ((t.f & Ka) !== 0) {
      if ((t.f & br) === 0)
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
const Wi = -7169;
function ne(e, t) {
  e.f = e.f & Wi | t;
}
function un(e) {
  (e.f & et) !== 0 || e.deps === null ? ne(e, pe) : ne(e, yt);
}
function us(e) {
  if (e !== null)
    for (const t of e)
      (t.f & je) === 0 || (t.f & pr) === 0 || (t.f ^= pr, us(
        /** @type {Derived} */
        t.deps
      ));
}
function cs(e, t, r) {
  (e.f & Ae) !== 0 ? t.add(e) : (e.f & yt) !== 0 && r.add(e), us(e.deps), ne(e, pe);
}
let Ya = null, Sr = null, V = null, Qa = null, dt = null, Xa = null, Ja = !1, Tr = null, ba = null;
var $n = 0;
let Zi = 1;
var Nr, Lt, nr, Fr, Or, sr, Pr, At, aa, Ve, na, Rt, pt, _t, Dr, ir, U, en, Zr, tn, vs, gs, ya, Qi, rn, Ar;
const Ca = class Ca {
  constructor() {
    C(this, U);
    Le(this, "id", Zi++);
    /** True as soon as `#process` was called */
    C(this, Nr, !1);
    Le(this, "linked", !0);
    /** @type {Batch | null} */
    C(this, Lt, null);
    /** @type {Batch | null} */
    C(this, nr, null);
    /** @type {Map<Effect, ReturnType<typeof deferred<any>>>} */
    Le(this, "async_deriveds", /* @__PURE__ */ new Map());
    /**
     * The current values of any signals that are updated in this batch.
     * Tuple format: [value, is_derived] (note: is_derived is false for deriveds, too, if they were overridden via assignment)
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Value, [any, boolean]>}
     */
    Le(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any signals (sources and deriveds) that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Value, any>}
     */
    Le(this, "previous", /* @__PURE__ */ new Map());
    /**
     * Async effects which this batch doesn't take into account anymore when calculating blockers,
     * as it has a value for it already.
     * @type {Set<Effect>}
     */
    Le(this, "unblocked", /* @__PURE__ */ new Set());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<(batch: Batch) => void>}
     */
    C(this, Fr, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    C(this, Or, /* @__PURE__ */ new Set());
    /**
     * Callbacks that should run only when a fork is committed.
     * @type {Set<(batch: Batch) => void>}
     */
    C(this, sr, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    C(this, Pr, 0);
    /**
     * Async effects that are currently in flight, _not_ inside a pending boundary
     * @type {Map<Effect, number>}
     */
    C(this, At, /* @__PURE__ */ new Map());
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    C(this, aa, null);
    /**
     * The root effects that need to be flushed
     * @type {Effect[]}
     */
    C(this, Ve, []);
    /**
     * Effects created while this batch was active.
     * @type {Effect[]}
     */
    C(this, na, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    C(this, Rt, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    C(this, pt, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    C(this, _t, /* @__PURE__ */ new Map());
    /**
     * Inverse of #skipped_branches which we need to tell prior batches to unskip them when committing
     * @type {Set<Effect>}
     */
    C(this, Dr, /* @__PURE__ */ new Set());
    Le(this, "is_fork", !1);
    C(this, ir, !1);
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(t) {
    l(this, _t).has(t) || l(this, _t).set(t, { d: [], m: [] }), l(this, Dr).delete(t);
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   * @param {(e: Effect) => void} callback
   */
  unskip_effect(t, r = (a) => this.schedule(a)) {
    var a = l(this, _t).get(t);
    if (a) {
      l(this, _t).delete(t);
      for (var n of a.d)
        ne(n, Ae), r(n);
      for (n of a.m)
        ne(n, yt), r(n);
    }
    l(this, Dr).add(t);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Value} source
   * @param {any} value
   * @param {boolean} [is_derived]
   */
  capture(t, r, a = !1) {
    t.v !== ge && !this.previous.has(t) && this.previous.set(t, t.v), (t.f & $t) === 0 && (this.current.set(t, [r, a]), dt?.set(t, r)), this.is_fork || (t.v = r);
  }
  activate() {
    V = this;
  }
  deactivate() {
    V = null, dt = null;
  }
  flush() {
    try {
      Ja = !0, V = this, B(this, U, Zr).call(this);
    } finally {
      $n = 0, Xa = null, Tr = null, ba = null, Ja = !1, V = null, dt = null, cr.clear();
    }
  }
  discard() {
    for (const t of l(this, Or)) t(this);
    l(this, Or).clear(), l(this, sr).clear(), B(this, U, Ar).call(this);
  }
  /**
   * @param {Effect} effect
   */
  register_created_effect(t) {
    l(this, na).push(t);
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  increment(t, r) {
    if (A(this, Pr, l(this, Pr) + 1), t) {
      let a = l(this, At).get(r) ?? 0;
      l(this, At).set(r, a + 1);
    }
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  decrement(t, r) {
    if (A(this, Pr, l(this, Pr) - 1), t) {
      let a = l(this, At).get(r) ?? 0;
      a === 1 ? l(this, At).delete(r) : l(this, At).set(r, a - 1);
    }
    l(this, ir) || (A(this, ir, !0), ur(() => {
      A(this, ir, !1), this.linked && this.flush();
    }));
  }
  /**
   * @param {Set<Effect>} dirty_effects
   * @param {Set<Effect>} maybe_dirty_effects
   */
  transfer_effects(t, r) {
    for (const a of t)
      l(this, Rt).add(a);
    for (const a of r)
      l(this, pt).add(a);
    t.clear(), r.clear();
  }
  /** @param {(batch: Batch) => void} fn */
  oncommit(t) {
    l(this, Fr).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    l(this, Or).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  on_fork_commit(t) {
    l(this, sr).add(t);
  }
  run_fork_commit_callbacks() {
    for (const t of l(this, sr)) t(this);
    l(this, sr).clear();
  }
  settled() {
    return (l(this, aa) ?? A(this, aa, ts())).promise;
  }
  static ensure() {
    var t;
    if (V === null) {
      const r = V = new Ca();
      B(t = r, U, rn).call(t), Ja || ur(() => {
        l(r, Nr) || r.flush();
      });
    }
    return V;
  }
  apply() {
    {
      dt = null;
      return;
    }
  }
  /**
   *
   * @param {Effect} effect
   */
  schedule(t) {
    if (Xa = t, t.b?.is_pending && (t.f & (ta | Pa | rs)) !== 0 && (t.f & br) === 0) {
      t.b.defer_effect(t);
      return;
    }
    for (var r = t; r.parent !== null; ) {
      r = r.parent;
      var a = r.f;
      if (Tr !== null && r === R && (I === null || (I.f & je) === 0))
        return;
      if ((a & (zt | ct)) !== 0) {
        if ((a & pe) === 0)
          return;
        r.f ^= pe;
      }
    }
    l(this, Ve).push(r);
  }
};
Nr = new WeakMap(), Lt = new WeakMap(), nr = new WeakMap(), Fr = new WeakMap(), Or = new WeakMap(), sr = new WeakMap(), Pr = new WeakMap(), At = new WeakMap(), aa = new WeakMap(), Ve = new WeakMap(), na = new WeakMap(), Rt = new WeakMap(), pt = new WeakMap(), _t = new WeakMap(), Dr = new WeakMap(), ir = new WeakMap(), U = new WeakSet(), en = function() {
  if (this.is_fork) return !0;
  for (const a of l(this, At).keys()) {
    for (var t = a, r = !1; t.parent !== null; ) {
      if (l(this, _t).has(t)) {
        r = !0;
        break;
      }
      t = t.parent;
    }
    if (!r)
      return !0;
  }
  return !1;
}, Zr = function() {
  var f, c, h;
  if (A(this, Nr, !0), $n++ > 1e3 && (B(this, U, Ar).call(this), Xi()), !B(this, U, en).call(this)) {
    for (const _ of l(this, Rt))
      l(this, pt).delete(_), ne(_, Ae), this.schedule(_);
    for (const _ of l(this, pt))
      ne(_, yt), this.schedule(_);
  }
  const t = l(this, Ve);
  A(this, Ve, []), this.apply();
  var r = Tr = [], a = [], n = ba = [];
  for (const _ of t)
    try {
      B(this, U, tn).call(this, _, r, a);
    } catch (g) {
      throw hs(_), g;
    }
  if (V = null, n.length > 0) {
    var i = Ca.ensure();
    for (const _ of n)
      i.schedule(_);
  }
  if (Tr = null, ba = null, B(this, U, en).call(this)) {
    B(this, U, ya).call(this, a), B(this, U, ya).call(this, r);
    for (const [_, g] of l(this, _t))
      _s(_, g);
    n.length > 0 && /** @type {unknown} */
    B(f = V, U, Zr).call(f);
    return;
  }
  const d = B(this, U, vs).call(this);
  if (d) {
    B(c = d, U, gs).call(c, this);
    return;
  }
  l(this, Rt).clear(), l(this, pt).clear();
  for (const _ of l(this, Fr)) _(this);
  l(this, Fr).clear(), Qa = this, zn(a), zn(r), Qa = null, l(this, aa)?.resolve();
  var u = (
    /** @type {Batch | null} */
    /** @type {unknown} */
    V
  );
  if (this.linked && l(this, Pr) === 0 && B(this, U, Ar).call(this), l(this, Ve).length > 0) {
    u === null && (u = this, B(this, U, rn).call(this));
    const _ = u;
    l(_, Ve).push(...l(this, Ve).filter((g) => !l(_, Ve).includes(g)));
  }
  u !== null && B(h = u, U, Zr).call(h);
}, /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
tn = function(t, r, a) {
  t.f ^= pe;
  for (var n = t.first; n !== null; ) {
    var i = n.f, d = (i & (ct | zt)) !== 0, u = d && (i & pe) !== 0, f = u || (i & De) !== 0 || l(this, _t).has(n);
    if (!f && n.fn !== null) {
      d ? n.f ^= pe : (i & ta) !== 0 ? r.push(n) : fa(n) && ((i & ot) !== 0 && l(this, pt).add(n), Br(n));
      var c = n.first;
      if (c !== null) {
        n = c;
        continue;
      }
    }
    for (; n !== null; ) {
      var h = n.next;
      if (h !== null) {
        n = h;
        break;
      }
      n = n.parent;
    }
  }
}, vs = function() {
  for (var t = l(this, Lt); t !== null; ) {
    if (!t.is_fork) {
      for (const [r, [, a]] of this.current)
        if (t.current.has(r) && !a)
          return t;
    }
    t = l(t, Lt);
  }
  return null;
}, /**
 * @param {Batch} batch
 */
gs = function(t) {
  var a;
  for (const [n, i] of t.current)
    !this.previous.has(n) && t.previous.has(n) && this.previous.set(n, t.previous.get(n)), this.current.set(n, i);
  for (const [n, i] of t.async_deriveds) {
    const d = this.async_deriveds.get(n);
    d && i.promise.then(d.resolve);
  }
  const r = (n) => {
    var i = n.reactions;
    if (i !== null)
      for (const f of i) {
        var d = f.f;
        if ((d & je) !== 0)
          r(
            /** @type {Derived} */
            f
          );
        else {
          var u = (
            /** @type {Effect} */
            f
          );
          d & (Cr | ot) && !this.async_deriveds.has(u) && (l(this, pt).delete(u), ne(u, Ae), this.schedule(u));
        }
      }
  };
  for (const n of this.current.keys())
    r(n);
  this.oncommit(() => t.discard()), B(a = t, U, Ar).call(a), V = this, B(this, U, Zr).call(this);
}, /**
 * @param {Effect[]} effects
 */
ya = function(t) {
  for (var r = 0; r < t.length; r += 1)
    cs(t[r], l(this, Rt), l(this, pt));
}, Qi = function() {
  var h;
  B(this, U, Ar).call(this);
  for (let _ = Ya; _ !== null; _ = l(_, nr)) {
    var t = _.id < this.id, r = [];
    for (const [g, [m, k]] of this.current) {
      if (_.current.has(g)) {
        var a = (
          /** @type {[any, boolean]} */
          _.current.get(g)[0]
        );
        if (t && m !== a)
          _.current.set(g, [m, k]);
        else
          continue;
      }
      r.push(g);
    }
    if (t)
      for (const [g, m] of this.async_deriveds) {
        const k = _.async_deriveds.get(g);
        k && m.promise.then(k.resolve);
      }
    if (l(_, Nr)) {
      var n = [..._.current.keys()].filter((g) => !this.current.has(g));
      if (n.length === 0)
        t && _.discard();
      else if (r.length > 0) {
        if (t)
          for (const g of l(this, Dr))
            _.unskip_effect(g, (m) => {
              var k;
              (m.f & (ot | Cr)) !== 0 ? _.schedule(m) : B(k = _, U, ya).call(k, [m]);
            });
        _.activate();
        var i = /* @__PURE__ */ new Set(), d = /* @__PURE__ */ new Map();
        for (var u of r)
          ps(u, n, i, d);
        d = /* @__PURE__ */ new Map();
        var f = [..._.current.keys()].filter(
          (g) => this.current.has(g) ? (
            /** @type {[any, boolean]} */
            this.current.get(g)[0] !== g.v
          ) : !0
        );
        if (f.length > 0)
          for (const g of l(this, na))
            (g.f & (ut | De | wa)) === 0 && cn(g, f, d) && ((g.f & (Cr | ot)) !== 0 ? (ne(g, Ae), _.schedule(g)) : l(_, Rt).add(g));
        if (l(_, Ve).length > 0 && !l(_, ir)) {
          _.apply();
          for (var c of l(_, Ve))
            B(h = _, U, tn).call(h, c, [], []);
          A(_, Ve, []);
        }
        _.deactivate();
      }
    }
  }
}, rn = function() {
  Sr === null ? Ya = Sr = this : (A(Sr, nr, this), A(this, Lt, Sr)), Sr = this;
}, Ar = function() {
  var t = l(this, Lt), r = l(this, nr);
  t === null ? Ya = r : A(t, nr, r), r === null ? Sr = t : A(r, Lt, t), this.linked = !1;
};
let _r = Ca;
function Xi() {
  try {
    Ii();
  } catch (e) {
    Bt(e, Xa);
  }
}
let St = null;
function zn(e) {
  var t = e.length;
  if (t !== 0) {
    for (var r = 0; r < t; ) {
      var a = e[r++];
      if ((a.f & (ut | De)) === 0 && fa(a) && (St = /* @__PURE__ */ new Set(), Br(a), a.deps === null && a.first === null && a.nodes === null && a.teardown === null && a.ac === null && Ns(a), St?.size > 0)) {
        cr.clear();
        for (const n of St) {
          if ((n.f & (ut | De)) !== 0) continue;
          const i = [n];
          let d = n.parent;
          for (; d !== null; )
            St.has(d) && (St.delete(d), i.push(d)), d = d.parent;
          for (let u = i.length - 1; u >= 0; u--) {
            const f = i[u];
            (f.f & (ut | De)) === 0 && Br(f);
          }
        }
        St.clear();
      }
    }
    St = null;
  }
}
function ps(e, t, r, a) {
  if (!r.has(e) && (r.add(e), e.reactions !== null))
    for (const n of e.reactions) {
      const i = n.f;
      (i & je) !== 0 ? ps(
        /** @type {Derived} */
        n,
        t,
        r,
        a
      ) : (i & (Cr | ot)) !== 0 && (i & Ae) === 0 && cn(n, t, a) && (ne(n, Ae), vn(
        /** @type {Effect} */
        n
      ));
    }
}
function cn(e, t, r) {
  const a = r.get(e);
  if (a !== void 0) return a;
  if (e.deps !== null)
    for (const n of e.deps) {
      if (fr.call(t, n))
        return !0;
      if ((n.f & je) !== 0 && cn(
        /** @type {Derived} */
        n,
        t,
        r
      ))
        return r.set(
          /** @type {Derived} */
          n,
          !0
        ), !0;
    }
  return r.set(e, !1), !1;
}
function vn(e) {
  V.schedule(e);
}
function _s(e, t) {
  if (!((e.f & ct) !== 0 && (e.f & pe) !== 0)) {
    (e.f & Ae) !== 0 ? t.d.push(e) : (e.f & yt) !== 0 && t.m.push(e), ne(e, pe);
    for (var r = e.first; r !== null; )
      _s(r, t), r = r.next;
  }
}
function hs(e) {
  ne(e, pe);
  for (var t = e.first; t !== null; )
    hs(t), t = t.next;
}
function el(e) {
  let t = 0, r = hr(0), a;
  return () => {
    _n() && (s(r), wl(() => (t === 0 && (a = Tl(() => e(() => ea(r)))), t += 1, () => {
      ur(() => {
        t -= 1, t === 0 && (a?.(), a = void 0, ea(r));
      });
    })));
  };
}
var tl = Lr | $r;
function rl(e, t, r, a) {
  new al(e, t, r, a);
}
var We, fn, Ze, lr, Re, Qe, Pe, Ue, jt, or, Mt, Ir, sa, ia, Tt, Na, se, nl, sl, il, an, xa, ma, nn, sn;
class al {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(t, r, a, n) {
    C(this, se);
    /** @type {Boundary | null} */
    Le(this, "parent");
    Le(this, "is_pending", !1);
    /**
     * API-level transformError transform function. Transforms errors before they reach the `failed` snippet.
     * Inherited from parent boundary, or defaults to identity.
     * @type {(error: unknown) => unknown}
     */
    Le(this, "transform_error");
    /** @type {TemplateNode} */
    C(this, We);
    /** @type {TemplateNode | null} */
    C(this, fn, null);
    /** @type {BoundaryProps} */
    C(this, Ze);
    /** @type {((anchor: Node) => void)} */
    C(this, lr);
    /** @type {Effect} */
    C(this, Re);
    /** @type {Effect | null} */
    C(this, Qe, null);
    /** @type {Effect | null} */
    C(this, Pe, null);
    /** @type {Effect | null} */
    C(this, Ue, null);
    /** @type {DocumentFragment | null} */
    C(this, jt, null);
    C(this, or, 0);
    C(this, Mt, 0);
    C(this, Ir, !1);
    /** @type {Set<Effect>} */
    C(this, sa, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    C(this, ia, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    C(this, Tt, null);
    C(this, Na, el(() => (A(this, Tt, hr(l(this, or))), () => {
      A(this, Tt, null);
    })));
    A(this, We, t), A(this, Ze, r), A(this, lr, (i) => {
      var d = (
        /** @type {Effect} */
        R
      );
      d.b = this, d.f |= Ka, a(i);
    }), this.parent = /** @type {Effect} */
    R.b, this.transform_error = n ?? this.parent?.transform_error ?? ((i) => i), A(this, Re, hn(() => {
      B(this, se, an).call(this);
    }, tl));
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    cs(t, l(this, sa), l(this, ia));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!l(this, Ze).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  update_pending_count(t, r) {
    B(this, se, nn).call(this, t, r), A(this, or, l(this, or) + t), !(!l(this, Tt) || l(this, Ir)) && (A(this, Ir, !0), ur(() => {
      A(this, Ir, !1), l(this, Tt) && Mr(l(this, Tt), l(this, or));
    }));
  }
  get_effect_pending() {
    return l(this, Na).call(this), s(
      /** @type {Source<number>} */
      l(this, Tt)
    );
  }
  /** @param {unknown} error */
  error(t) {
    if (!l(this, Ze).onerror && !l(this, Ze).failed)
      throw t;
    V?.is_fork ? (l(this, Qe) && V.skip_effect(l(this, Qe)), l(this, Pe) && V.skip_effect(l(this, Pe)), l(this, Ue) && V.skip_effect(l(this, Ue)), V.on_fork_commit(() => {
      B(this, se, sn).call(this, t);
    })) : B(this, se, sn).call(this, t);
  }
}
We = new WeakMap(), fn = new WeakMap(), Ze = new WeakMap(), lr = new WeakMap(), Re = new WeakMap(), Qe = new WeakMap(), Pe = new WeakMap(), Ue = new WeakMap(), jt = new WeakMap(), or = new WeakMap(), Mt = new WeakMap(), Ir = new WeakMap(), sa = new WeakMap(), ia = new WeakMap(), Tt = new WeakMap(), Na = new WeakMap(), se = new WeakSet(), nl = function() {
  try {
    A(this, Qe, Xe(() => l(this, lr).call(this, l(this, We))));
  } catch (t) {
    this.error(t);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
sl = function(t) {
  const r = l(this, Ze).failed;
  r && A(this, Ue, Xe(() => {
    r(
      l(this, We),
      () => t,
      () => () => {
      }
    );
  }));
}, il = function() {
  const t = l(this, Ze).pending;
  t && (this.is_pending = !0, A(this, Pe, Xe(() => t(l(this, We)))), ur(() => {
    var r = A(this, jt, document.createDocumentFragment()), a = Ct();
    r.append(a), A(this, Qe, B(this, se, ma).call(this, () => Xe(() => l(this, lr).call(this, a)))), l(this, Mt) === 0 && (l(this, We).before(r), A(this, jt, null), vr(
      /** @type {Effect} */
      l(this, Pe),
      () => {
        A(this, Pe, null);
      }
    ), B(this, se, xa).call(
      this,
      /** @type {Batch} */
      V
    ));
  }));
}, an = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), A(this, Mt, 0), A(this, or, 0), A(this, Qe, Xe(() => {
      l(this, lr).call(this, l(this, We));
    })), l(this, Mt) > 0) {
      var t = A(this, jt, document.createDocumentFragment());
      xn(l(this, Qe), t);
      const r = (
        /** @type {(anchor: Node) => void} */
        l(this, Ze).pending
      );
      A(this, Pe, Xe(() => r(l(this, We))));
    } else
      B(this, se, xa).call(
        this,
        /** @type {Batch} */
        V
      );
  } catch (r) {
    this.error(r);
  }
}, /**
 * @param {Batch} batch
 */
xa = function(t) {
  this.is_pending = !1, t.transfer_effects(l(this, sa), l(this, ia));
}, /**
 * @template T
 * @param {() => T} fn
 */
ma = function(t) {
  var r = R, a = I, n = rt;
  xt(l(this, Re)), at(l(this, Re)), Rr(l(this, Re).ctx);
  try {
    return _r.ensure(), t();
  } catch (i) {
    return fs(i), null;
  } finally {
    xt(r), at(a), Rr(n);
  }
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 * @param {Batch} batch
 */
nn = function(t, r) {
  var a;
  if (!this.has_pending_snippet()) {
    this.parent && B(a = this.parent, se, nn).call(a, t, r);
    return;
  }
  A(this, Mt, l(this, Mt) + t), l(this, Mt) === 0 && (B(this, se, xa).call(this, r), l(this, Pe) && vr(l(this, Pe), () => {
    A(this, Pe, null);
  }), l(this, jt) && (l(this, We).before(l(this, jt)), A(this, jt, null)));
}, /**
 * @param {unknown} error
 */
sn = function(t) {
  l(this, Qe) && (Be(l(this, Qe)), A(this, Qe, null)), l(this, Pe) && (Be(l(this, Pe)), A(this, Pe, null)), l(this, Ue) && (Be(l(this, Ue)), A(this, Ue, null));
  var r = l(this, Ze).onerror;
  let a = l(this, Ze).failed;
  var n = !1, i = !1;
  const d = () => {
    if (n) {
      Ji();
      return;
    }
    n = !0, i && Bi(), l(this, Ue) !== null && vr(l(this, Ue), () => {
      A(this, Ue, null);
    }), B(this, se, ma).call(this, () => {
      B(this, se, an).call(this);
    });
  }, u = (f) => {
    try {
      i = !0, r?.(f, d), i = !1;
    } catch (c) {
      Bt(c, l(this, Re) && l(this, Re).parent);
    }
    a && A(this, Ue, B(this, se, ma).call(this, () => {
      try {
        return Xe(() => {
          var c = (
            /** @type {Effect} */
            R
          );
          c.b = this, c.f |= Ka, a(
            l(this, We),
            () => f,
            () => d
          );
        });
      } catch (c) {
        return Bt(
          c,
          /** @type {Effect} */
          l(this, Re).parent
        ), null;
      }
    }));
  };
  ur(() => {
    var f;
    try {
      f = this.transform_error(t);
    } catch (c) {
      Bt(c, l(this, Re) && l(this, Re).parent);
      return;
    }
    f !== null && typeof f == "object" && typeof /** @type {any} */
    f.then == "function" ? f.then(
      u,
      /** @param {unknown} e */
      (c) => Bt(c, l(this, Re) && l(this, Re).parent)
    ) : u(f);
  });
};
function ll(e, t, r, a) {
  const n = gn;
  var i = e.filter((g) => !g.settled);
  if (r.length === 0 && i.length === 0) {
    a(t.map(n));
    return;
  }
  var d = (
    /** @type {Effect} */
    R
  ), u = ol(), f = i.length === 1 ? i[0].promise : i.length > 1 ? Promise.all(i.map((g) => g.promise)) : null;
  function c(g) {
    if ((d.f & ut) === 0) {
      u();
      try {
        a(g);
      } catch (m) {
        Bt(m, d);
      }
      Sa();
    }
  }
  var h = bs();
  if (r.length === 0) {
    f.then(() => c(t.map(n))).finally(h);
    return;
  }
  function _() {
    Promise.all(r.map((g) => /* @__PURE__ */ dl(g))).then((g) => c([...t.map(n), ...g])).catch((g) => Bt(g, d)).finally(h);
  }
  f ? f.then(() => {
    u(), _(), Sa();
  }) : _();
}
function ol() {
  var e = (
    /** @type {Effect} */
    R
  ), t = I, r = rt, a = (
    /** @type {Batch} */
    V
  );
  return function(i = !0) {
    xt(e), at(t), Rr(r), i && (e.f & ut) === 0 && (a?.activate(), a?.apply());
  };
}
function Sa(e = !0) {
  xt(null), at(null), Rr(null), e && V?.deactivate();
}
function bs() {
  var e = (
    /** @type {Effect} */
    R
  ), t = (
    /** @type {Boundary} */
    e.b
  ), r = (
    /** @type {Batch} */
    V
  ), a = t.is_rendered();
  return t.update_pending_count(1, r), r.increment(a, e), () => {
    t.update_pending_count(-1, r), r.decrement(a, e);
  };
}
// @__NO_SIDE_EFFECTS__
function gn(e) {
  var t = je | Ae;
  return R !== null && (R.f |= $r), {
    ctx: rt,
    deps: null,
    effects: null,
    equals: ss,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      ge
    ),
    wv: 0,
    parent: R,
    ac: null
  };
}
const pa = Symbol("obsolete");
// @__NO_SIDE_EFFECTS__
function dl(e, t, r) {
  let a = (
    /** @type {Effect | null} */
    R
  );
  a === null && Ni();
  var n = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), i = hr(
    /** @type {V} */
    ge
  ), d = !I, u = /* @__PURE__ */ new Set();
  return kl(() => {
    var f = (
      /** @type {Effect} */
      R
    ), c = ts();
    n = c.promise;
    try {
      Promise.resolve(e()).then(c.resolve, (m) => {
        m !== Da && c.reject(m);
      }).finally(Sa);
    } catch (m) {
      c.reject(m), Sa();
    }
    var h = (
      /** @type {Batch} */
      V
    );
    if (d) {
      if ((f.f & br) !== 0)
        var _ = bs();
      if (
        /** @type {Boundary} */
        a.b.is_rendered()
      )
        h.async_deriveds.get(f)?.reject(pa);
      else
        for (const m of u.values())
          m.reject(pa);
      u.add(c), h.async_deriveds.set(f, c);
    }
    const g = (m, k = void 0) => {
      _?.(), u.delete(c), k !== pa && (h.activate(), k ? (i.f |= $t, Mr(i, k)) : ((i.f & $t) !== 0 && (i.f ^= $t), Mr(i, m)), h.deactivate());
    };
    c.promise.then(g, (m) => g(null, m || "unknown"));
  }), xl(() => {
    for (const f of u)
      f.reject(pa);
  }), new Promise((f) => {
    function c(h) {
      function _() {
        h === n ? f(i) : c(n);
      }
      h.then(_, _);
    }
    c(n);
  });
}
// @__NO_SIDE_EFFECTS__
function ke(e) {
  const t = /* @__PURE__ */ gn(e);
  return Ps(t), t;
}
// @__NO_SIDE_EFFECTS__
function fl(e) {
  const t = /* @__PURE__ */ gn(e);
  return t.equals = is, t;
}
function ul(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var r = 0; r < t.length; r += 1)
      Be(
        /** @type {Effect} */
        t[r]
      );
  }
}
function pn(e) {
  var t, r = R, a = e.parent;
  if (!qt && a !== null && e.v !== ge && // if it was never evaluated before, it's guaranteed to fail downstream, so we try to execute instead
  (a.f & (ut | De)) !== 0)
    return Yi(), e.v;
  xt(a);
  try {
    e.f &= ~pr, ul(e), t = Rs(e);
  } finally {
    xt(r);
  }
  return t;
}
function ys(e) {
  var t = pn(e);
  if (!e.equals(t) && (e.wv = Is(), (!V?.is_fork || e.deps === null) && (V !== null ? (V.capture(e, t, !0), Qa?.capture(e, t, !0)) : e.v = t, e.deps === null))) {
    ne(e, pe);
    return;
  }
  qt || (dt !== null ? (_n() || V?.is_fork) && dt.set(e, t) : un(e));
}
function cl(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      (t.teardown || t.ac) && (t.teardown?.(), t.ac?.abort(Da), t.fn !== null && (t.teardown = Ai), t.ac = null, ra(t, 0), bn(t));
}
function xs(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      t.teardown && t.fn !== null && Br(t);
}
let Aa = /* @__PURE__ */ new Set();
const cr = /* @__PURE__ */ new Map();
let ms = !1;
function hr(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: ss,
    rv: 0,
    wv: 0
  };
  return r;
}
// @__NO_SIDE_EFFECTS__
function W(e, t) {
  const r = hr(e);
  return Ps(r), r;
}
// @__NO_SIDE_EFFECTS__
function vl(e, t = !1, r = !0) {
  const a = hr(e);
  return t || (a.equals = is), a;
}
function O(e, t, r = !1) {
  I !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!ft || (I.f & wa) !== 0) && ds() && (I.f & (je | ot | Cr | wa)) !== 0 && (tt === null || !fr.call(tt, e)) && Mi();
  let a = r ? lt(t) : t;
  return Mr(e, a, ba);
}
function Mr(e, t, r = null) {
  if (!e.equals(t)) {
    cr.set(e, qt ? t : e.v);
    var a = _r.ensure();
    if (a.capture(e, t), (e.f & je) !== 0) {
      const n = (
        /** @type {Derived} */
        e
      );
      (e.f & Ae) !== 0 && pn(n), dt === null && un(n);
    }
    e.wv = Is(), ks(e, Ae, r), R !== null && (R.f & pe) !== 0 && (R.f & (ct | zt)) === 0 && (Ke === null ? Al([e]) : Ke.push(e)), !a.is_fork && Aa.size > 0 && !ms && gl();
  }
  return t;
}
function gl() {
  ms = !1;
  for (const e of Aa) {
    (e.f & pe) !== 0 && ne(e, yt);
    let t;
    try {
      t = fa(e);
    } catch {
      t = !0;
    }
    t && Br(e);
  }
  Aa.clear();
}
function ea(e) {
  O(e, e.v + 1);
}
function ks(e, t, r) {
  var a = e.reactions;
  if (a !== null)
    for (var n = a.length, i = 0; i < n; i++) {
      var d = a[i], u = d.f, f = (u & Ae) === 0;
      if (f && ne(d, t), (u & wa) !== 0)
        Aa.add(
          /** @type {Effect} */
          d
        );
      else if ((u & je) !== 0) {
        var c = (
          /** @type {Derived} */
          d
        );
        dt?.delete(c), (u & pr) === 0 && (u & et && (R === null || (R.f & Ea) === 0) && (d.f |= pr), ks(c, yt, r));
      } else if (f) {
        var h = (
          /** @type {Effect} */
          d
        );
        (u & ot) !== 0 && St !== null && St.add(h), r !== null ? r.push(h) : vn(h);
      }
    }
}
function lt(e) {
  if (typeof e != "object" || e === null || Ha in e)
    return e;
  const t = es(e);
  if (t !== Ei && t !== Si)
    return e;
  var r = /* @__PURE__ */ new Map(), a = Xn(e), n = /* @__PURE__ */ W(0), i = gr, d = (u) => {
    if (gr === i)
      return u();
    var f = I, c = gr;
    at(null), Hn(i);
    var h = u();
    return at(f), Hn(c), h;
  };
  return a && r.set("length", /* @__PURE__ */ W(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(u, f, c) {
        (!("value" in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && Li();
        var h = r.get(f);
        return h === void 0 ? d(() => {
          var _ = /* @__PURE__ */ W(c.value);
          return r.set(f, _), _;
        }) : O(h, c.value, !0), !0;
      },
      deleteProperty(u, f) {
        var c = r.get(f);
        if (c === void 0) {
          if (f in u) {
            const h = d(() => /* @__PURE__ */ W(ge));
            r.set(f, h), ea(n);
          }
        } else
          O(c, ge), ea(n);
        return !0;
      },
      get(u, f, c) {
        if (f === Ha)
          return e;
        var h = r.get(f), _ = f in u;
        if (h === void 0 && (!_ || Xr(u, f)?.writable) && (h = d(() => {
          var m = lt(_ ? u[f] : ge), k = /* @__PURE__ */ W(m);
          return k;
        }), r.set(f, h)), h !== void 0) {
          var g = s(h);
          return g === ge ? void 0 : g;
        }
        return Reflect.get(u, f, c);
      },
      getOwnPropertyDescriptor(u, f) {
        var c = Reflect.getOwnPropertyDescriptor(u, f);
        if (c && "value" in c) {
          var h = r.get(f);
          h && (c.value = s(h));
        } else if (c === void 0) {
          var _ = r.get(f), g = _?.v;
          if (_ !== void 0 && g !== ge)
            return {
              enumerable: !0,
              configurable: !0,
              value: g,
              writable: !0
            };
        }
        return c;
      },
      has(u, f) {
        if (f === Ha)
          return !0;
        var c = r.get(f), h = c !== void 0 && c.v !== ge || Reflect.has(u, f);
        if (c !== void 0 || R !== null && (!h || Xr(u, f)?.writable)) {
          c === void 0 && (c = d(() => {
            var g = h ? lt(u[f]) : ge, m = /* @__PURE__ */ W(g);
            return m;
          }), r.set(f, c));
          var _ = s(c);
          if (_ === ge)
            return !1;
        }
        return h;
      },
      set(u, f, c, h) {
        var _ = r.get(f), g = f in u;
        if (a && f === "length")
          for (var m = c; m < /** @type {Source<number>} */
          _.v; m += 1) {
            var k = r.get(m + "");
            k !== void 0 ? O(k, ge) : m in u && (k = d(() => /* @__PURE__ */ W(ge)), r.set(m + "", k));
          }
        if (_ === void 0)
          (!g || Xr(u, f)?.writable) && (_ = d(() => /* @__PURE__ */ W(void 0)), O(_, lt(c)), r.set(f, _));
        else {
          g = _.v !== ge;
          var w = d(() => lt(c));
          O(_, w);
        }
        var y = Reflect.getOwnPropertyDescriptor(u, f);
        if (y?.set && y.set.call(h, c), !g) {
          if (a && typeof f == "string") {
            var N = (
              /** @type {Source<number>} */
              r.get("length")
            ), Y = Number(f);
            Number.isInteger(Y) && Y >= N.v && O(N, Y + 1);
          }
          ea(n);
        }
        return !0;
      },
      ownKeys(u) {
        s(n);
        var f = Reflect.ownKeys(u).filter((_) => {
          var g = r.get(_);
          return g === void 0 || g.v !== ge;
        });
        for (var [c, h] of r)
          h.v !== ge && !(c in u) && f.push(c);
        return f;
      },
      setPrototypeOf() {
        Ri();
      }
    }
  );
}
var qn, ws, Es, Ss;
function pl() {
  if (qn === void 0) {
    qn = window, ws = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, r = Text.prototype;
    Es = Xr(t, "firstChild").get, Ss = Xr(t, "nextSibling").get, Mn(e) && (e[Wa] = void 0, e[ha] = null, e[Za] = void 0, e.__e = void 0), Mn(r) && (r[Wr] = void 0);
  }
}
function Ct(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function ja(e) {
  return (
    /** @type {TemplateNode | null} */
    Es.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function da(e) {
  return (
    /** @type {TemplateNode | null} */
    Ss.call(e)
  );
}
function o(e, t) {
  return /* @__PURE__ */ ja(e);
}
function tr(e, t = !1) {
  {
    var r = /* @__PURE__ */ ja(e);
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ da(r) : r;
  }
}
function p(e, t = 1, r = !1) {
  let a = e;
  for (; t--; )
    a = /** @type {TemplateNode} */
    /* @__PURE__ */ da(a);
  return a;
}
function _l(e) {
  e.textContent = "";
}
function As() {
  return !1;
}
function hl(e, t, r) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElementNS(ns, e, void 0)
  );
}
function js(e) {
  var t = I, r = R;
  at(null), xt(null);
  try {
    return e();
  } finally {
    at(t), xt(r);
  }
}
function bl(e) {
  R === null && (I === null && Di(), Pi()), qt && Oi();
}
function yl(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function Vt(e, t) {
  var r = R;
  r !== null && (r.f & De) !== 0 && (e |= De);
  var a = {
    ctx: rt,
    deps: null,
    nodes: null,
    f: e | Ae | et,
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
  V?.register_created_effect(a);
  var n = a;
  if ((e & ta) !== 0)
    Tr !== null ? Tr.push(a) : _r.ensure().schedule(a);
  else if (t !== null) {
    try {
      Br(a);
    } catch (d) {
      throw Be(a), d;
    }
    n.deps === null && n.teardown === null && n.nodes === null && n.first === n.last && // either `null`, or a singular child
    (n.f & $r) === 0 && (n = n.first, (e & ot) !== 0 && (e & Lr) !== 0 && n !== null && (n.f |= Lr));
  }
  if (n !== null && (n.parent = r, r !== null && yl(n, r), I !== null && (I.f & je) !== 0 && (e & zt) === 0)) {
    var i = (
      /** @type {Derived} */
      I
    );
    (i.effects ?? (i.effects = [])).push(n);
  }
  return a;
}
function _n() {
  return I !== null && !ft;
}
function xl(e) {
  const t = Vt(Pa, null);
  return ne(t, pe), t.teardown = e, t;
}
function Vn(e) {
  bl();
  var t = (
    /** @type {Effect} */
    R.f
  ), r = !I && (t & ct) !== 0 && (t & br) === 0;
  if (r) {
    var a = (
      /** @type {ComponentContext} */
      rt
    );
    (a.e ?? (a.e = [])).push(e);
  } else
    return Ts(e);
}
function Ts(e) {
  return Vt(ta | Ci, e);
}
function ml(e) {
  _r.ensure();
  const t = Vt(zt | $r, e);
  return (r = {}) => new Promise((a) => {
    r.outro ? vr(t, () => {
      Be(t), a(void 0);
    }) : (Be(t), a(void 0));
  });
}
function kl(e) {
  return Vt(Cr | $r, e);
}
function wl(e, t = 0) {
  return Vt(Pa | t, e);
}
function q(e, t = [], r = [], a = []) {
  ll(a, t, r, (n) => {
    Vt(Pa, () => e(...n.map(s)));
  });
}
function hn(e, t = 0) {
  var r = Vt(ot | t, e);
  return r;
}
function Xe(e) {
  return Vt(ct | $r, e);
}
function Cs(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = qt, a = I;
    Un(!0), at(null);
    try {
      t.call(null);
    } finally {
      Un(r), at(a);
    }
  }
}
function bn(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    const n = r.ac;
    n !== null && js(() => {
      n.abort(Da);
    });
    var a = r.next;
    (r.f & zt) !== 0 ? r.parent = null : Be(r, t), r = a;
  }
}
function El(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & ct) === 0 && Be(t), t = r;
  }
}
function Be(e, t = !0) {
  var r = !1;
  (t || (e.f & Ti) !== 0) && e.nodes !== null && e.nodes.end !== null && (Sl(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), r = !0), ne(e, Bn), bn(e, t && !r), ra(e, 0);
  var a = e.nodes && e.nodes.t;
  if (a !== null)
    for (const i of a)
      i.stop();
  Cs(e), e.f ^= Bn, e.f |= ut;
  var n = e.parent;
  n !== null && n.first !== null && Ns(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function Sl(e, t) {
  for (; e !== null; ) {
    var r = e === t ? null : /* @__PURE__ */ da(e);
    e.remove(), e = r;
  }
}
function Ns(e) {
  var t = e.parent, r = e.prev, a = e.next;
  r !== null && (r.next = a), a !== null && (a.prev = r), t !== null && (t.first === e && (t.first = a), t.last === e && (t.last = r));
}
function vr(e, t, r = !0) {
  var a = [];
  Fs(e, a, !0);
  var n = () => {
    r && Be(e), t && t();
  }, i = a.length;
  if (i > 0) {
    var d = () => --i || n();
    for (var u of a)
      u.out(d);
  } else
    n();
}
function Fs(e, t, r) {
  if ((e.f & De) === 0) {
    e.f ^= De;
    var a = e.nodes && e.nodes.t;
    if (a !== null)
      for (const u of a)
        (u.is_global || r) && t.push(u);
    for (var n = e.first; n !== null; ) {
      var i = n.next;
      if ((n.f & zt) === 0) {
        var d = (n.f & Lr) !== 0 || // If this is a branch effect without a block effect parent,
        // it means the parent block effect was pruned. In that case,
        // transparency information was transferred to the branch effect.
        (n.f & ct) !== 0 && (e.f & ot) !== 0;
        Fs(n, t, d ? r : !1);
      }
      n = i;
    }
  }
}
function yn(e) {
  Os(e, !0);
}
function Os(e, t) {
  if ((e.f & De) !== 0) {
    e.f ^= De, (e.f & pe) === 0 && (ne(e, Ae), _r.ensure().schedule(e));
    for (var r = e.first; r !== null; ) {
      var a = r.next, n = (r.f & Lr) !== 0 || (r.f & ct) !== 0;
      Os(r, n ? t : !1), r = a;
    }
    var i = e.nodes && e.nodes.t;
    if (i !== null)
      for (const d of i)
        (d.is_global || t) && d.in();
  }
}
function xn(e, t) {
  if (e.nodes)
    for (var r = e.nodes.start, a = e.nodes.end; r !== null; ) {
      var n = r === a ? null : /* @__PURE__ */ da(r);
      t.append(r), r = n;
    }
}
let ka = !1, qt = !1;
function Un(e) {
  qt = e;
}
let I = null, ft = !1;
function at(e) {
  I = e;
}
let R = null;
function xt(e) {
  R = e;
}
let tt = null;
function Ps(e) {
  I !== null && (tt === null ? tt = [e] : tt.push(e));
}
let Me = null, qe = 0, Ke = null;
function Al(e) {
  Ke = e;
}
let Ds = 1, rr = 0, gr = rr;
function Hn(e) {
  gr = e;
}
function Is() {
  return ++Ds;
}
function fa(e) {
  var t = e.f;
  if ((t & Ae) !== 0)
    return !0;
  if (t & je && (e.f &= ~pr), (t & yt) !== 0) {
    for (var r = (
      /** @type {Value[]} */
      e.deps
    ), a = r.length, n = 0; n < a; n++) {
      var i = r[n];
      if (fa(
        /** @type {Derived} */
        i
      ) && ys(
        /** @type {Derived} */
        i
      ), i.wv > e.wv)
        return !0;
    }
    (t & et) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    dt === null && ne(e, pe);
  }
  return !1;
}
function Ls(e, t, r = !0) {
  var a = e.reactions;
  if (a !== null && !(tt !== null && fr.call(tt, e)))
    for (var n = 0; n < a.length; n++) {
      var i = a[n];
      (i.f & je) !== 0 ? Ls(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (r ? ne(i, Ae) : (i.f & pe) !== 0 && ne(i, yt), vn(
        /** @type {Effect} */
        i
      ));
    }
}
function Rs(e) {
  var w;
  var t = Me, r = qe, a = Ke, n = I, i = tt, d = rt, u = ft, f = gr, c = e.f;
  Me = /** @type {null | Value[]} */
  null, qe = 0, Ke = null, I = (c & (ct | zt)) === 0 ? e : null, tt = null, Rr(e.ctx), ft = !1, gr = ++rr, e.ac !== null && (js(() => {
    e.ac.abort(Da);
  }), e.ac = null);
  try {
    e.f |= Ea;
    var h = (
      /** @type {Function} */
      e.fn
    ), _ = h();
    e.f |= br;
    var g = e.deps, m = V?.is_fork;
    if (Me !== null) {
      var k;
      if (m || ra(e, qe), g !== null && qe > 0)
        for (g.length = qe + Me.length, k = 0; k < Me.length; k++)
          g[qe + k] = Me[k];
      else
        e.deps = g = Me;
      if (_n() && (e.f & et) !== 0)
        for (k = qe; k < g.length; k++)
          ((w = g[k]).reactions ?? (w.reactions = [])).push(e);
    } else !m && g !== null && qe < g.length && (ra(e, qe), g.length = qe);
    if (ds() && Ke !== null && !ft && g !== null && (e.f & (je | yt | Ae)) === 0)
      for (k = 0; k < /** @type {Source[]} */
      Ke.length; k++)
        Ls(
          Ke[k],
          /** @type {Effect} */
          e
        );
    if (n !== null && n !== e) {
      if (rr++, n.deps !== null)
        for (let y = 0; y < r; y += 1)
          n.deps[y].rv = rr;
      if (t !== null)
        for (const y of t)
          y.rv = rr;
      Ke !== null && (a === null ? a = Ke : a.push(.../** @type {Source[]} */
      Ke));
    }
    return (e.f & $t) !== 0 && (e.f ^= $t), _;
  } catch (y) {
    return fs(y);
  } finally {
    e.f ^= Ea, Me = t, qe = r, Ke = a, I = n, tt = i, Rr(d), ft = u, gr = f;
  }
}
function jl(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var a = mi.call(r, e);
    if (a !== -1) {
      var n = r.length - 1;
      n === 0 ? r = t.reactions = null : (r[a] = r[n], r.pop());
    }
  }
  if (r === null && (t.f & je) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Me === null || !fr.call(Me, t))) {
    var i = (
      /** @type {Derived} */
      t
    );
    (i.f & et) !== 0 && (i.f ^= et, i.f &= ~pr), i.v !== ge && un(i), cl(i), ra(i, 0);
  }
}
function ra(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var a = t; a < r.length; a++)
      jl(e, r[a]);
}
function Br(e) {
  var t = e.f;
  if ((t & ut) === 0) {
    ne(e, pe);
    var r = R, a = ka;
    R = e, ka = !0;
    try {
      (t & (ot | rs)) !== 0 ? El(e) : bn(e), Cs(e);
      var n = Rs(e);
      e.teardown = typeof n == "function" ? n : null, e.wv = Ds;
      var i;
    } finally {
      ka = a, R = r;
    }
  }
}
function s(e) {
  var t = e.f, r = (t & je) !== 0;
  if (I !== null && !ft) {
    var a = R !== null && (R.f & ut) !== 0;
    if (!a && (tt === null || !fr.call(tt, e))) {
      var n = I.deps;
      if ((I.f & Ea) !== 0)
        e.rv < rr && (e.rv = rr, Me === null && n !== null && n[qe] === e ? qe++ : Me === null ? Me = [e] : Me.push(e));
      else {
        I.deps ?? (I.deps = []), fr.call(I.deps, e) || I.deps.push(e);
        var i = e.reactions;
        i === null ? e.reactions = [I] : fr.call(i, I) || i.push(I);
      }
    }
  }
  if (qt && cr.has(e))
    return cr.get(e);
  if (r) {
    var d = (
      /** @type {Derived} */
      e
    );
    if (qt) {
      var u = d.v;
      return ((d.f & pe) === 0 && d.reactions !== null || Bs(d)) && (u = pn(d)), cr.set(d, u), u;
    }
    var f = (d.f & et) === 0 && !ft && I !== null && (ka || (I.f & et) !== 0), c = (d.f & br) === 0;
    fa(d) && (f && (d.f |= et), ys(d)), f && !c && (xs(d), Ms(d));
  }
  if (dt?.has(e))
    return dt.get(e);
  if ((e.f & $t) !== 0)
    throw e.v;
  return e.v;
}
function Ms(e) {
  if (e.f |= et, e.deps !== null)
    for (const t of e.deps)
      (t.reactions ?? (t.reactions = [])).push(e), (t.f & je) !== 0 && (t.f & et) === 0 && (xs(
        /** @type {Derived} */
        t
      ), Ms(
        /** @type {Derived} */
        t
      ));
}
function Bs(e) {
  if (e.v === ge) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (cr.has(t) || (t.f & je) !== 0 && Bs(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function Tl(e) {
  var t = ft;
  try {
    return ft = !0, e();
  } finally {
    ft = t;
  }
}
const Cl = ["touchstart", "touchmove"];
function Nl(e) {
  return Cl.includes(e);
}
const ar = Symbol("events"), $s = /* @__PURE__ */ new Set(), ln = /* @__PURE__ */ new Set();
function gt(e, t, r) {
  (t[ar] ?? (t[ar] = {}))[e] = r;
}
function Fl(e) {
  for (var t = 0; t < e.length; t++)
    $s.add(e[t]);
  for (var r of ln)
    r(e);
}
let Yn = null;
function Jn(e) {
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), a = e.type, n = e.composedPath?.() || [], i = (
    /** @type {null | Element} */
    n[0] || e.target
  );
  Yn = e;
  var d = 0, u = Yn === e && e[ar];
  if (u) {
    var f = n.indexOf(u);
    if (f !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e[ar] = t;
      return;
    }
    var c = n.indexOf(t);
    if (c === -1)
      return;
    f <= c && (d = f);
  }
  if (i = /** @type {Element} */
  n[d] || e.target, i !== t) {
    ki(e, "currentTarget", {
      configurable: !0,
      get() {
        return i || r;
      }
    });
    var h = I, _ = R;
    at(null), xt(null);
    try {
      for (var g, m = []; i !== null; ) {
        var k = i.assignedSlot || i.parentNode || /** @type {any} */
        i.host || null;
        try {
          var w = i[ar]?.[a];
          w != null && (!/** @type {any} */
          i.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === i) && w.call(i, e);
        } catch (y) {
          g ? m.push(y) : g = y;
        }
        if (e.cancelBubble || k === t || k === null)
          break;
        i = k;
      }
      if (g) {
        for (let y of m)
          queueMicrotask(() => {
            throw y;
          });
        throw g;
      }
    } finally {
      e[ar] = t, delete e.currentTarget, at(h), xt(_);
    }
  }
}
const Ol = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (e) => e
  })
);
function Pl(e) {
  return (
    /** @type {string} */
    Ol?.createHTML(e) ?? e
  );
}
function Dl(e) {
  var t = hl("template");
  return t.innerHTML = Pl(e.replaceAll("<!>", "<!---->")), t.content;
}
function Ta(e, t) {
  var r = (
    /** @type {Effect} */
    R
  );
  r.nodes === null && (r.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function D(e, t) {
  var r = (t & Ui) !== 0, a = (t & Hi) !== 0, n, i = !e.startsWith("<!>");
  return () => {
    n === void 0 && (n = Dl(i ? e : "<!>" + e), r || (n = /** @type {TemplateNode} */
    /* @__PURE__ */ ja(n)));
    var d = (
      /** @type {TemplateNode} */
      a || ws ? document.importNode(n, !0) : n.cloneNode(!0)
    );
    if (r) {
      var u = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ ja(d)
      ), f = (
        /** @type {TemplateNode} */
        d.lastChild
      );
      Ta(u, f);
    } else
      Ta(d, d);
    return d;
  };
}
function Gn(e = "") {
  {
    var t = Ct(e + "");
    return Ta(t, t), t;
  }
}
function Kn() {
  var e = document.createDocumentFragment(), t = document.createComment(""), r = Ct();
  return e.append(t, r), Ta(t, r), e;
}
function j(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function x(e, t) {
  var r = t == null ? "" : typeof t == "object" ? `${t}` : t;
  r !== /** @type {any} */
  (e[Wr] ?? (e[Wr] = e.nodeValue)) && (e[Wr] = r, e.nodeValue = `${r}`);
}
function Il(e, t) {
  return Ll(e, t);
}
const _a = /* @__PURE__ */ new Map();
function Ll(e, { target: t, anchor: r, props: a = {}, events: n, context: i, intro: d = !0, transformError: u }) {
  pl();
  var f = void 0, c = ml(() => {
    var h = r ?? t.appendChild(Ct());
    rl(
      /** @type {TemplateNode} */
      h,
      {
        pending: () => {
        }
      },
      (m) => {
        ls({});
        var k = (
          /** @type {ComponentContext} */
          rt
        );
        i && (k.c = i), n && (a.$$events = n), f = e(m, a) || {}, os();
      },
      u
    );
    var _ = /* @__PURE__ */ new Set(), g = (m) => {
      for (var k = 0; k < m.length; k++) {
        var w = m[k];
        if (!_.has(w)) {
          _.add(w);
          var y = Nl(w);
          for (const H of [t, document]) {
            var N = _a.get(H);
            N === void 0 && (N = /* @__PURE__ */ new Map(), _a.set(H, N));
            var Y = N.get(w);
            Y === void 0 ? (H.addEventListener(w, Jn, { passive: y }), N.set(w, 1)) : N.set(w, Y + 1);
          }
        }
      }
    };
    return g(Oa($s)), ln.add(g), () => {
      for (var m of _)
        for (const y of [t, document]) {
          var k = (
            /** @type {Map<string, number>} */
            _a.get(y)
          ), w = (
            /** @type {number} */
            k.get(m)
          );
          --w == 0 ? (y.removeEventListener(m, Jn), k.delete(m), k.size === 0 && _a.delete(y)) : k.set(m, w);
        }
      ln.delete(g), h !== r && h.parentNode?.removeChild(h);
    };
  });
  return on.set(f, c), f;
}
let on = /* @__PURE__ */ new WeakMap();
function Rl(e, t) {
  const r = on.get(e);
  return r ? (on.delete(e), r(t)) : Promise.resolve();
}
var it, ht, He, dr, la, oa, Fa;
class Ml {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, r = !0) {
    /** @type {TemplateNode} */
    Le(this, "anchor");
    /** @type {Map<Batch, Key>} */
    C(this, it, /* @__PURE__ */ new Map());
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
    C(this, ht, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    C(this, He, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    C(this, dr, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    C(this, la, !0);
    /**
     * @param {Batch} batch
     */
    C(this, oa, (t) => {
      if (l(this, it).has(t)) {
        var r = (
          /** @type {Key} */
          l(this, it).get(t)
        ), a = l(this, ht).get(r);
        if (a)
          yn(a), l(this, dr).delete(r);
        else {
          var n = l(this, He).get(r);
          n && (l(this, ht).set(r, n.effect), l(this, He).delete(r), n.fragment.lastChild.remove(), this.anchor.before(n.fragment), a = n.effect);
        }
        for (const [i, d] of l(this, it)) {
          if (l(this, it).delete(i), i === t)
            break;
          const u = l(this, He).get(d);
          u && (Be(u.effect), l(this, He).delete(d));
        }
        for (const [i, d] of l(this, ht)) {
          if (i === r || l(this, dr).has(i)) continue;
          const u = () => {
            if (Array.from(l(this, it).values()).includes(i)) {
              var c = document.createDocumentFragment();
              xn(d, c), c.append(Ct()), l(this, He).set(i, { effect: d, fragment: c });
            } else
              Be(d);
            l(this, dr).delete(i), l(this, ht).delete(i);
          };
          l(this, la) || !a ? (l(this, dr).add(i), vr(d, u, !1)) : u();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    C(this, Fa, (t) => {
      l(this, it).delete(t);
      const r = Array.from(l(this, it).values());
      for (const [a, n] of l(this, He))
        r.includes(a) || (Be(n.effect), l(this, He).delete(a));
    });
    this.anchor = t, A(this, la, r);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, r) {
    var a = (
      /** @type {Batch} */
      V
    ), n = As();
    if (r && !l(this, ht).has(t) && !l(this, He).has(t))
      if (n) {
        var i = document.createDocumentFragment(), d = Ct();
        i.append(d), l(this, He).set(t, {
          effect: Xe(() => r(d)),
          fragment: i
        });
      } else
        l(this, ht).set(
          t,
          Xe(() => r(this.anchor))
        );
    if (l(this, it).set(a, t), n) {
      for (const [u, f] of l(this, ht))
        u === t ? a.unskip_effect(f) : a.skip_effect(f);
      for (const [u, f] of l(this, He))
        u === t ? a.unskip_effect(f.effect) : a.skip_effect(f.effect);
      a.oncommit(l(this, oa)), a.ondiscard(l(this, Fa));
    } else
      l(this, oa).call(this, a);
  }
}
it = new WeakMap(), ht = new WeakMap(), He = new WeakMap(), dr = new WeakMap(), la = new WeakMap(), oa = new WeakMap(), Fa = new WeakMap();
function ze(e, t, r = !1) {
  var a = new Ml(e), n = r ? Lr : 0;
  function i(d, u) {
    a.ensure(d, u);
  }
  hn(() => {
    var d = !1;
    t((u, f = 0) => {
      d = !0, i(f, u);
    }), d || i(-1, null);
  }, n);
}
function Ee(e, t) {
  return t;
}
function Bl(e, t, r) {
  for (var a = [], n = t.length, i, d = t.length, u = 0; u < n; u++) {
    let _ = t[u];
    vr(
      _,
      () => {
        if (i) {
          if (i.pending.delete(_), i.done.add(_), i.pending.size === 0) {
            var g = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            dn(e, Oa(i.done)), g.delete(i), g.size === 0 && (e.outrogroups = null);
          }
        } else
          d -= 1;
      },
      !1
    );
  }
  if (d === 0) {
    var f = a.length === 0 && r !== null;
    if (f) {
      var c = (
        /** @type {Element} */
        r
      ), h = (
        /** @type {Element} */
        c.parentNode
      );
      _l(h), h.append(c), e.items.clear();
    }
    dn(e, t, !f);
  } else
    i = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ?? (e.outrogroups = /* @__PURE__ */ new Set())).add(i);
}
function dn(e, t, r = !0) {
  var a;
  if (e.pending.size > 0) {
    a = /* @__PURE__ */ new Set();
    for (const d of e.pending.values())
      for (const u of d)
        a.add(
          /** @type {EachItem} */
          e.items.get(u).e
        );
  }
  for (var n = 0; n < t.length; n++) {
    var i = t[n];
    if (a?.has(i)) {
      i.f |= bt;
      const d = document.createDocumentFragment();
      xn(i, d);
    } else
      Be(t[n], r);
  }
}
var Wn;
function Se(e, t, r, a, n, i = null) {
  var d = e, u = /* @__PURE__ */ new Map(), f = (t & as) !== 0;
  if (f) {
    var c = (
      /** @type {Element} */
      e
    );
    d = c.appendChild(Ct());
  }
  var h = null, _ = /* @__PURE__ */ fl(() => {
    var H = r();
    return Xn(H) ? H : H == null ? [] : Oa(H);
  }), g, m = /* @__PURE__ */ new Map(), k = !0;
  function w(H) {
    (Y.effect.f & ut) === 0 && (Y.pending.delete(H), Y.fallback = h, $l(Y, g, d, t, a), h !== null && (g.length === 0 ? (h.f & bt) === 0 ? yn(h) : (h.f ^= bt, Qr(h, null, d)) : vr(h, () => {
      h = null;
    })));
  }
  function y(H) {
    Y.pending.delete(H);
  }
  var N = hn(() => {
    g = /** @type {V[]} */
    s(_);
    for (var H = g.length, we = /* @__PURE__ */ new Set(), Ie = (
      /** @type {Batch} */
      V
    ), vt = As(), ie = 0; ie < H; ie += 1) {
      var nt = g[ie], Nt = a(nt, ie), fe = k ? null : u.get(Nt);
      fe ? (fe.v && Mr(fe.v, nt), fe.i && Mr(fe.i, ie), vt && Ie.unskip_effect(fe.e)) : (fe = zl(
        u,
        k ? d : Wn ?? (Wn = Ct()),
        nt,
        Nt,
        ie,
        n,
        t,
        r
      ), k || (fe.e.f |= bt), u.set(Nt, fe)), we.add(Nt);
    }
    if (H === 0 && i && !h && (k ? h = Xe(() => i(d)) : (h = Xe(() => i(Wn ?? (Wn = Ct()))), h.f |= bt)), H > we.size && Fi(), !k)
      if (m.set(Ie, we), vt) {
        for (const [Ft, $e] of u)
          we.has(Ft) || Ie.skip_effect($e.e);
        Ie.oncommit(w), Ie.ondiscard(y);
      } else
        w(Ie);
    s(_);
  }), Y = { effect: N, items: u, pending: m, outrogroups: null, fallback: h };
  k = !1;
}
function Kr(e) {
  for (; e !== null && (e.f & ct) === 0; )
    e = e.next;
  return e;
}
function $l(e, t, r, a, n) {
  var i = (a & qi) !== 0, d = t.length, u = e.items, f = Kr(e.effect.first), c, h = null, _, g = [], m = [], k, w, y, N;
  if (i)
    for (N = 0; N < d; N += 1)
      k = t[N], w = n(k, N), y = /** @type {EachItem} */
      u.get(w).e, (y.f & bt) === 0 && (y.nodes?.a?.measure(), (_ ?? (_ = /* @__PURE__ */ new Set())).add(y));
  for (N = 0; N < d; N += 1) {
    if (k = t[N], w = n(k, N), y = /** @type {EachItem} */
    u.get(w).e, e.outrogroups !== null)
      for (const fe of e.outrogroups)
        fe.pending.delete(y), fe.done.delete(y);
    if ((y.f & De) !== 0 && (yn(y), i && (y.nodes?.a?.unfix(), (_ ?? (_ = /* @__PURE__ */ new Set())).delete(y))), (y.f & bt) !== 0)
      if (y.f ^= bt, y === f)
        Qr(y, null, r);
      else {
        var Y = h ? h.next : f;
        y === e.effect.last && (e.effect.last = y.prev), y.prev && (y.prev.next = y.next), y.next && (y.next.prev = y.prev), It(e, h, y), It(e, y, Y), Qr(y, Y, r), h = y, g = [], m = [], f = Kr(h.next);
        continue;
      }
    if (y !== f) {
      if (c !== void 0 && c.has(y)) {
        if (g.length < m.length) {
          var H = m[0], we;
          h = H.prev;
          var Ie = g[0], vt = g[g.length - 1];
          for (we = 0; we < g.length; we += 1)
            Qr(g[we], H, r);
          for (we = 0; we < m.length; we += 1)
            c.delete(m[we]);
          It(e, Ie.prev, vt.next), It(e, h, Ie), It(e, vt, H), f = H, h = vt, N -= 1, g = [], m = [];
        } else
          c.delete(y), Qr(y, f, r), It(e, y.prev, y.next), It(e, y, h === null ? e.effect.first : h.next), It(e, h, y), h = y;
        continue;
      }
      for (g = [], m = []; f !== null && f !== y; )
        (c ?? (c = /* @__PURE__ */ new Set())).add(f), m.push(f), f = Kr(f.next);
      if (f === null)
        continue;
    }
    (y.f & bt) === 0 && g.push(y), h = y, f = Kr(y.next);
  }
  if (e.outrogroups !== null) {
    for (const fe of e.outrogroups)
      fe.pending.size === 0 && (dn(e, Oa(fe.done)), e.outrogroups?.delete(fe));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (f !== null || c !== void 0) {
    var ie = [];
    if (c !== void 0)
      for (y of c)
        (y.f & De) === 0 && ie.push(y);
    for (; f !== null; )
      (f.f & De) === 0 && f !== e.fallback && ie.push(f), f = Kr(f.next);
    var nt = ie.length;
    if (nt > 0) {
      var Nt = (a & as) !== 0 && d === 0 ? r : null;
      if (i) {
        for (N = 0; N < nt; N += 1)
          ie[N].nodes?.a?.measure();
        for (N = 0; N < nt; N += 1)
          ie[N].nodes?.a?.fix();
      }
      Bl(e, ie, Nt);
    }
  }
  i && ur(() => {
    if (_ !== void 0)
      for (y of _)
        y.nodes?.a?.apply();
  });
}
function zl(e, t, r, a, n, i, d, u) {
  var f = (d & $i) !== 0 ? (d & Vi) === 0 ? /* @__PURE__ */ vl(r, !1, !1) : hr(r) : null, c = (d & zi) !== 0 ? hr(n) : null;
  return {
    v: f,
    i: c,
    e: Xe(() => (i(t, f ?? r, c ?? n, u), () => {
      e.delete(a);
    }))
  };
}
function Qr(e, t, r) {
  if (e.nodes)
    for (var a = e.nodes.start, n = e.nodes.end, i = t && (t.f & bt) === 0 ? (
      /** @type {EffectNodes} */
      t.nodes.start
    ) : r; a !== null; ) {
      var d = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ da(a)
      );
      if (i.before(a), a === n)
        return;
      a = d;
    }
}
function It(e, t, r) {
  t === null ? e.effect.first = r : t.next = r, r === null ? e.effect.last = t : r.prev = t;
}
function zs(e) {
  var t, r, a = "";
  if (typeof e == "string" || typeof e == "number") a += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var n = e.length;
    for (t = 0; t < n; t++) e[t] && (r = zs(e[t])) && (a && (a += " "), a += r);
  } else for (r in e) e[r] && (a && (a += " "), a += r);
  return a;
}
function ql() {
  for (var e, t, r = 0, a = "", n = arguments.length; r < n; r++) (e = arguments[r]) && (t = zs(e)) && (a && (a += " "), a += t);
  return a;
}
function Je(e) {
  return typeof e == "object" ? ql(e) : e ?? "";
}
function Vl(e, t, r) {
  var a = e == null ? "" : "" + e;
  return a === "" ? null : a;
}
function Ul(e, t) {
  return e == null ? null : String(e);
}
function Ge(e, t, r, a, n, i) {
  var d = (
    /** @type {any} */
    e[Wa]
  );
  if (d !== r || d === void 0) {
    var u = Vl(r);
    u == null ? e.removeAttribute("class") : e.className = u, e[Wa] = r;
  }
  return i;
}
function Ga(e, t, r, a) {
  var n = (
    /** @type {any} */
    e[Za]
  );
  if (n !== t) {
    var i = Ul(t);
    i == null ? e.removeAttribute("style") : e.style.cssText = i, e[Za] = t;
  }
  return a;
}
const Hl = Symbol("is custom element"), Yl = Symbol("is html");
function Jl(e, t) {
  t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function Gl(e, t, r, a) {
  var n = Kl(e);
  n[t] !== (n[t] = r) && (r == null ? e.removeAttribute(t) : typeof r != "string" && Wl(e).includes(t) ? e[t] = r : e.setAttribute(t, r));
}
function Kl(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    /** @type {any} */
    e[ha] ?? (e[ha] = {
      [Hl]: e.nodeName.includes("-"),
      [Yl]: e.namespaceURI === ns
    })
  );
}
var Zn = /* @__PURE__ */ new Map();
function Wl(e) {
  var t = e.getAttribute("is") || e.nodeName, r = Zn.get(t);
  if (r) return r;
  Zn.set(t, r = []);
  for (var a, n = e, i = Element.prototype; i !== n; ) {
    a = wi(n);
    for (var d in a)
      a[d].set && // better safe than sorry, we don't want spread attributes to mess with HTML content
      d !== "innerHTML" && d !== "textContent" && d !== "innerText" && r.push(d);
    n = es(n);
  }
  return r;
}
const Zl = "5";
var Qn;
typeof window < "u" && ((Qn = window.__svelte ?? (window.__svelte = {})).v ?? (Qn.v = /* @__PURE__ */ new Set())).add(Zl);
var Ql = /* @__PURE__ */ D('<div class="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 text-red-700 dark:text-red-300 mb-6"> </div>'), Xl = /* @__PURE__ */ D('<div class="flex flex-col items-center justify-center py-16"><div class="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div> <span class="mt-3 text-gray-500 dark:text-gray-400">Loading metrics…</span></div>'), eo = /* @__PURE__ */ D('<div class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 text-center"><p class="text-gray-700 dark:text-gray-300 font-medium">No accounting data available yet.</p> <p class="text-gray-500 dark:text-gray-400 text-sm mt-2">Financial data will appear here once transactions are recorded.</p></div>'), to = /* @__PURE__ */ D('<div class="flex justify-between text-sm"><span class="text-gray-600 dark:text-gray-400"> </span> <span class="font-medium text-gray-800 dark:text-gray-200"> </span></div>'), ro = /* @__PURE__ */ D('<div class="flex justify-between text-sm"><span class="text-gray-600 dark:text-gray-400"> </span> <span class="font-medium text-gray-800 dark:text-gray-200"> </span></div>'), ao = /* @__PURE__ */ D('<div class="flex justify-between text-sm"><span class="text-gray-600 dark:text-gray-400"> </span> <span class="font-medium text-gray-800 dark:text-gray-200"> </span></div>'), no = /* @__PURE__ */ D('<div class="flex justify-between text-sm"><span class="text-gray-600 dark:text-gray-400"> </span> <span class="font-medium text-blue-700 dark:text-blue-400"> </span></div>'), so = /* @__PURE__ */ D('<div class="flex justify-between text-sm"><span class="text-gray-600 dark:text-gray-400"> </span> <span class="font-medium text-red-500 dark:text-red-400"> </span></div>'), io = /* @__PURE__ */ D('<div class="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-750 rounded-lg"><div><span class="font-medium text-gray-700 dark:text-gray-300"> </span> <p class="text-xs text-gray-500 dark:text-gray-400"> </p></div> <span> </span></div>'), lo = /* @__PURE__ */ D('<div class="p-4 bg-gray-50 dark:bg-gray-750 rounded-lg border border-gray-200 dark:border-gray-600"><div class="flex items-center justify-between mb-2"><span class="font-semibold text-gray-800 dark:text-gray-200"> </span> <span class="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full"> </span></div> <p class="text-sm text-gray-600 dark:text-gray-400"> </p></div>'), oo = /* @__PURE__ */ D('<div class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden mb-6"><div class="bg-gray-50 dark:bg-gray-750 px-6 py-4 border-b border-gray-200 dark:border-gray-700"><h3 class="text-lg font-semibold text-gray-800 dark:text-white">🏦 Funds Overview</h3></div> <div class="p-6"><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"></div></div></div>'), fo = /* @__PURE__ */ D('<tr class="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-750"><td class="py-3 px-4"><div class="font-medium text-gray-800 dark:text-gray-200"> </div> <div class="text-xs text-gray-500 dark:text-gray-400"> </div></td><td class="py-3 px-4 text-right text-gray-600 dark:text-gray-400"> </td><td class="py-3 px-4 text-right text-gray-800 dark:text-gray-200 font-medium"> </td><td> </td><td class="py-3 px-4 text-center"><span> </span></td></tr>'), uo = /* @__PURE__ */ D('<div class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden mb-6"><div class="bg-gray-50 dark:bg-gray-750 px-6 py-4 border-b border-gray-200 dark:border-gray-700"><h3 class="text-lg font-semibold text-gray-800 dark:text-white">📊 Budget Performance</h3></div> <div class="p-6 overflow-x-auto"><table class="w-full text-sm"><thead><tr class="border-b border-gray-200 dark:border-gray-600"><th class="text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">Category</th><th class="text-right py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">Planned</th><th class="text-right py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">Actual</th><th class="text-right py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">Variance</th><th class="text-center py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">Status</th></tr></thead><tbody></tbody></table></div></div>'), co = /* @__PURE__ */ D('<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6"><div class="bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-200 dark:border-gray-700 shadow-sm"><div class="text-gray-500 dark:text-gray-400 text-sm font-medium mb-1">Total Assets</div> <div class="text-2xl font-bold text-gray-800 dark:text-white"> </div></div> <div class="bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-200 dark:border-gray-700 shadow-sm"><div class="text-gray-500 dark:text-gray-400 text-sm font-medium mb-1">Total Liabilities</div> <div class="text-2xl font-bold text-gray-600 dark:text-gray-300"> </div></div> <div class="bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-200 dark:border-gray-700 shadow-sm"><div class="text-gray-500 dark:text-gray-400 text-sm font-medium mb-1">Net Position</div> <div class="text-2xl font-bold text-gray-800 dark:text-white"> </div></div> <div class="bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-200 dark:border-gray-700 shadow-sm"><div class="text-gray-500 dark:text-gray-400 text-sm font-medium mb-1">Net Income</div> <div> </div></div></div> <div class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden mb-6"><div class="bg-gray-50 dark:bg-gray-750 px-6 py-4 border-b border-gray-200 dark:border-gray-700"><h3 class="text-lg font-semibold text-gray-800 dark:text-white">📋 Balance Sheet</h3></div> <div class="p-6"><div class="grid grid-cols-1 md:grid-cols-3 gap-6"><div><h4 class="font-semibold text-blue-800 dark:text-blue-400 mb-3 flex items-center"><span class="w-3 h-3 bg-blue-800 dark:bg-blue-500 rounded-full mr-2"></span> Assets</h4> <div class="space-y-2"><!> <div class="border-t dark:border-gray-600 pt-2 mt-2 flex justify-between font-semibold"><span class="text-gray-700 dark:text-gray-300">Total Assets</span> <span class="text-blue-800 dark:text-blue-400"> </span></div></div></div> <div><h4 class="font-semibold text-red-600 dark:text-red-400 mb-3 flex items-center"><span class="w-3 h-3 bg-red-500 rounded-full mr-2"></span> Liabilities</h4> <div class="space-y-2"><!> <div class="border-t dark:border-gray-600 pt-2 mt-2 flex justify-between font-semibold"><span class="text-gray-700 dark:text-gray-300">Total Liabilities</span> <span class="text-red-600 dark:text-red-400"> </span></div></div></div> <div><h4 class="font-semibold text-blue-700 dark:text-blue-300 mb-3 flex items-center"><span class="w-3 h-3 bg-blue-400 rounded-full mr-2"></span> Fund Balance</h4> <div class="space-y-2"><!> <div class="border-t dark:border-gray-600 pt-2 mt-2 flex justify-between font-semibold"><span class="text-gray-700 dark:text-gray-300">Net Position</span> <span class="text-blue-800 dark:text-blue-400"> </span></div></div></div></div></div></div> <div class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden mb-6"><div class="bg-gray-50 dark:bg-gray-750 px-6 py-4 border-b border-gray-200 dark:border-gray-700"><h3 class="text-lg font-semibold text-gray-800 dark:text-white">📈 Income Statement</h3></div> <div class="p-6"><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div><h4 class="font-semibold text-blue-800 dark:text-blue-400 mb-3 flex items-center"><span class="w-3 h-3 bg-blue-800 dark:bg-blue-500 rounded-full mr-2"></span> Revenues</h4> <div class="space-y-2"><!> <div class="border-t dark:border-gray-600 pt-2 mt-2 flex justify-between font-semibold"><span class="text-gray-700 dark:text-gray-300">Total Revenues</span> <span class="text-blue-800 dark:text-blue-400"> </span></div></div></div> <div><h4 class="font-semibold text-red-600 dark:text-red-400 mb-3 flex items-center"><span class="w-3 h-3 bg-red-500 rounded-full mr-2"></span> Expenses</h4> <div class="space-y-2"><!> <div class="border-t dark:border-gray-600 pt-2 mt-2 flex justify-between font-semibold"><span class="text-gray-700 dark:text-gray-300">Total Expenses</span> <span class="text-red-600 dark:text-red-400"> </span></div></div></div></div> <div class="mt-6 p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800"><div class="flex justify-between items-center"><span class="font-semibold text-blue-700 dark:text-blue-300"> </span> <span> </span></div></div></div></div> <div class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden mb-6"><div class="bg-gray-50 dark:bg-gray-750 px-6 py-4 border-b border-gray-200 dark:border-gray-700"><h3 class="text-lg font-semibold text-gray-800 dark:text-white">💰 Cash Flow Statement</h3></div> <div class="p-6 space-y-4"><!> <div class="border-t dark:border-gray-600 pt-4 flex justify-between items-center"><span class="font-semibold text-gray-800 dark:text-gray-200">Net Change in Cash</span> <span> </span></div></div></div> <!> <!> <div class="text-center text-sm text-gray-500 dark:text-gray-400 py-4"> </div>', 1), vo = /* @__PURE__ */ D("<option> </option>"), go = /* @__PURE__ */ D('<span class="text-sm text-gray-500 dark:text-gray-400"> </span>'), po = /* @__PURE__ */ D('<div class="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 text-red-700 dark:text-red-300 mb-4"> </div>'), _o = /* @__PURE__ */ D('<div class="flex flex-col items-center justify-center py-12"><div class="animate-spin rounded-full h-7 w-7 border-b-2 border-blue-600"></div> <span class="mt-3 text-gray-500 dark:text-gray-400 text-sm"> </span></div>'), ho = /* @__PURE__ */ D('<div class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 text-center"><p class="text-gray-700 dark:text-gray-300 font-medium"> </p></div>'), bo = /* @__PURE__ */ D('<th class="text-left py-2.5 px-3 font-semibold text-gray-700 dark:text-gray-300 whitespace-nowrap"> </th>'), yo = /* @__PURE__ */ D('<span class="text-xs text-gray-500 dark:text-gray-400"> </span>'), xo = /* @__PURE__ */ D('<td class="py-2 px-3 text-gray-700 dark:text-gray-300 whitespace-nowrap max-w-xs truncate"><!></td>'), mo = /* @__PURE__ */ D("<tr></tr>"), ko = /* @__PURE__ */ D('<div class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden mb-4"><div class="overflow-x-auto"><table class="w-full text-sm"><thead><tr class="border-b border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-750"></tr></thead><tbody></tbody></table></div></div> <div class="flex items-center justify-center gap-2"><button class="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-40 disabled:cursor-not-allowed">First</button> <button class="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-40 disabled:cursor-not-allowed">Prev</button> <span class="text-sm text-gray-600 dark:text-gray-400 px-2"> </span> <button class="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-40 disabled:cursor-not-allowed">Next</button> <button class="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-40 disabled:cursor-not-allowed">Last</button></div>', 1), wo = /* @__PURE__ */ D('<div class="mb-4 flex flex-wrap items-center gap-4"><div class="flex items-center gap-2"><label for="entity-select" class="text-sm font-medium text-gray-700 dark:text-gray-300">Entity</label> <select id="entity-select" class="border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-1.5 text-sm bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200"></select></div> <button class="px-4 py-1.5 text-sm font-medium rounded-lg bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"> </button> <!> <span class="ml-auto text-sm text-gray-500 dark:text-gray-400"> </span></div> <!> <!>', 1), Eo = /* @__PURE__ */ D('<div class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 text-center"><p class="text-gray-700 dark:text-gray-300 font-medium">No data available for visualizations.</p></div>'), So = /* @__PURE__ */ D('<p class="text-gray-500 dark:text-gray-400 text-sm text-center py-4">No expense budgets with actual amounts</p>'), Ao = /* @__PURE__ */ D('<div><div class="flex justify-between text-sm mb-1"><span class="text-gray-700 dark:text-gray-300"> </span> <span class="font-medium text-gray-800 dark:text-gray-200"> </span></div> <div class="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-4"><div class="h-4 rounded-full transition-all"></div></div></div>'), jo = /* @__PURE__ */ D('<div class="space-y-3"></div>'), To = /* @__PURE__ */ D('<p class="text-gray-500 dark:text-gray-400 text-sm text-center py-4">No fund balance data</p>'), Co = /* @__PURE__ */ D('<div><div class="flex justify-between text-sm mb-1"><span class="text-gray-700 dark:text-gray-300"> </span> <span class="font-medium text-gray-800 dark:text-gray-200"> </span></div> <div class="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-4"><div class="h-4 rounded-full transition-all"></div></div></div>'), No = /* @__PURE__ */ D('<div class="text-center mb-4"><span class="text-2xl font-bold text-gray-800 dark:text-white"> </span> <span class="text-sm text-gray-500 dark:text-gray-400 ml-1">total</span></div> <div class="space-y-3"></div>', 1), Fo = /* @__PURE__ */ D('<p class="text-gray-500 dark:text-gray-400 text-sm text-center py-4">No revenue contribution data</p>'), Oo = /* @__PURE__ */ D('<div><div class="flex justify-between text-sm mb-1"><span class="text-gray-700 dark:text-gray-300 flex items-center gap-2"> <span> </span></span> <span class="font-medium text-gray-800 dark:text-gray-200"> </span></div> <div class="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-3"><div class="h-3 rounded-full transition-all"></div></div></div>'), Po = /* @__PURE__ */ D('<div class="space-y-3"></div>'), Do = /* @__PURE__ */ D('<div class="flex justify-between text-gray-600 dark:text-gray-400"><span> </span> <span> </span></div>'), Io = /* @__PURE__ */ D('<div class="flex justify-between text-gray-600 dark:text-gray-400"><span> </span> <span> </span></div>'), Lo = /* @__PURE__ */ D('<div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6"><div class="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700"><h4 class="font-semibold text-gray-700 dark:text-gray-200 mb-4">📊 Tax Allocation Breakdown</h4> <!></div> <div class="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700"><h4 class="font-semibold text-gray-700 dark:text-gray-200 mb-4">💰 Asset Portfolio</h4> <!></div></div> <div class="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 mb-6"><h4 class="font-semibold text-gray-700 dark:text-gray-200 mb-4">🌳 Tax Contribution Analysis</h4> <!></div> <div class="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 mb-6"><h4 class="font-semibold text-gray-700 dark:text-gray-200 mb-4">💰 Cash Flow Breakdown</h4> <div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div class="bg-white dark:bg-gray-750 rounded-lg p-4 border border-gray-200 dark:border-gray-600"><div class="flex items-center justify-between mb-3"><span class="text-sm font-medium text-blue-700 dark:text-blue-400">📈 Income</span> <span class="text-lg font-bold text-blue-800 dark:text-blue-300"> </span></div> <div class="space-y-1 text-xs"></div></div> <div class="bg-white dark:bg-gray-750 rounded-lg p-4 border border-gray-200 dark:border-gray-600"><div class="flex items-center justify-between mb-3"><span class="text-sm font-medium text-red-600 dark:text-red-400">📉 Expenses</span> <span class="text-lg font-bold text-red-500 dark:text-red-400"> </span></div> <div class="space-y-1 text-xs"></div></div></div> <div class="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800"><div class="flex items-center justify-between"><span class="text-sm font-medium text-blue-700 dark:text-blue-300">💰 Net Flow</span> <span> </span></div></div></div>', 1), Ro = /* @__PURE__ */ D('<div class="w-full max-w-5xl mx-auto px-4 py-6 font-sans"><div class="mb-6 border-b border-gray-200 dark:border-gray-700"><nav class="flex space-x-8"><button>📊 Accounting</button> <button>📈 Visualizations</button> <button>📋 Records</button> <button class="ml-auto py-3 px-3 text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 disabled:opacity-50">↻ Refresh</button></nav></div> <!> <!></div>');
function Mo(e, t) {
  ls(t, !0);
  const r = t.ctx.theme?.cn ?? ((...v) => v.filter(Boolean).join(" "));
  let a = /* @__PURE__ */ W("accounting"), n = /* @__PURE__ */ W(lt([])), i = /* @__PURE__ */ W(lt([])), d = /* @__PURE__ */ W(lt([])), u = /* @__PURE__ */ W(lt([])), f = /* @__PURE__ */ W(!0), c = /* @__PURE__ */ W("");
  const h = {
    cash: "#1E40AF",
    receivable: "#1D4ED8",
    equipment: "#2563EB",
    land: "#3B82F6",
    bond: "#60A5FA",
    payable: "#1D4ED8",
    deferred_revenue: "#2563EB",
    fund_balance: "#1E40AF",
    tax: "#1E40AF",
    fee: "#1D4ED8",
    grant: "#2563EB",
    personnel: "#3B82F6",
    supplies: "#60A5FA",
    services: "#1D4ED8",
    debt: "#2563EB",
    capital: "#1E40AF",
    operating: "#93C5FD",
    general: "#1E40AF",
    special_revenue: "#2563EB",
    capital_projects: "#60A5FA"
  }, _ = 50;
  async function g(v, b = 100, E = "desc") {
    const M = [];
    let P = 0, T = 1;
    for (; P < T && M.length < b; ) {
      const S = Math.min(_, b - M.length), F = await t.ctx.backend.get_objects_paginated(v, P, S, E), ae = typeof F == "string" ? JSON.parse(F) : F;
      if (ae?.success && ae?.data?.objectsListPaginated) {
        const ue = ae.data.objectsListPaginated.objects.map((Te) => JSON.parse(Te));
        M.push(...ue);
        const Ne = ae.data.objectsListPaginated.pagination;
        if (T = Number(Ne?.total_pages ?? 1), ue.length < S) break;
      } else {
        const ue = ae?.data ?? (Array.isArray(ae) ? ae : []);
        M.push(...ue);
        break;
      }
      P++;
    }
    return M;
  }
  async function m() {
    O(f, !0), O(c, "");
    try {
      const [v, b, E, M] = await Promise.all([
        g("Budget", 100, "asc"),
        g("LedgerEntry", 1e3, "desc"),
        g("Fund", 100, "asc"),
        g("FiscalPeriod", 100, "desc")
      ]);
      O(n, v, !0), O(i, b, !0), O(d, E, !0), O(u, M, !0);
    } catch (v) {
      O(c, v?.message || String(v), !0);
    } finally {
      O(f, !1);
    }
  }
  Vn(() => {
    m();
  });
  function k(v) {
    if (v == null) return "—";
    const b = Number(v);
    return isNaN(b) ? String(v) : b.toLocaleString(void 0, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }
  function w(v) {
    return v >= 1e6 ? `${(v / 1e6).toFixed(2)}M` : v >= 1e3 ? `${(v / 1e3).toFixed(1)}K` : v.toLocaleString();
  }
  function y(v) {
    return v.split("_").map((b) => b.charAt(0).toUpperCase() + b.slice(1)).join(" ");
  }
  let N = /* @__PURE__ */ ke(() => {
    const v = {}, b = {}, E = {};
    for (const S of s(i)) {
      const F = S.category || "other", ae = S.debit || 0, ue = S.credit || 0;
      switch (S.entry_type) {
        case "asset":
          v[F] = (v[F] || 0) + ae - ue;
          break;
        case "liability":
          b[F] = (b[F] || 0) + ue - ae;
          break;
        case "equity":
          E[F] = (E[F] || 0) + ue - ae;
          break;
      }
    }
    const M = Object.values(v).reduce((S, F) => S + F, 0), P = Object.values(b).reduce((S, F) => S + F, 0), T = Object.values(E).reduce((S, F) => S + F, 0);
    return {
      assets: v,
      liabilities: b,
      equity: E,
      totalAssets: M,
      totalLiabilities: P,
      totalEquity: T,
      netPosition: M - P
    };
  }), Y = /* @__PURE__ */ ke(() => {
    const v = {}, b = {};
    for (const P of s(i)) {
      const T = P.category || "other";
      P.entry_type === "revenue" ? v[T] = (v[T] || 0) + (P.credit || 0) - (P.debit || 0) : P.entry_type === "expense" && (b[T] = (b[T] || 0) + (P.debit || 0) - (P.credit || 0));
    }
    const E = Object.values(v).reduce((P, T) => P + T, 0), M = Object.values(b).reduce((P, T) => P + T, 0);
    return {
      revenues: v,
      expenses: b,
      totalRevenues: E,
      totalExpenses: M,
      netIncome: E - M
    };
  }), H = /* @__PURE__ */ ke(() => {
    let v = 0, b = 0, E = 0;
    for (const M of s(i).filter((P) => P.category === "cash")) {
      const P = (M.debit || 0) - (M.credit || 0), T = M.tags || "";
      T.includes("investing") || T.includes("capital") ? b += P : T.includes("financing") || T.includes("bond") ? E += P : v += P;
    }
    return {
      operating: v,
      investing: b,
      financing: E,
      netChange: v + b + E
    };
  }), we = /* @__PURE__ */ ke(() => s(n).filter((v) => v.budget_type === "expense" && (v.actual_amount || 0) > 0).map((v, b) => ({
    label: v.name || v.category || "Other",
    amount: v.actual_amount || 0,
    color: h[v.category] || `hsl(217, 91%, ${30 + b * 10}%)`
  }))), Ie = /* @__PURE__ */ ke(() => {
    const v = {};
    for (const b of s(d))
      v[b.code] = {
        name: b.name || b.code,
        balance: 0,
        color: h[b.fund_type] || "#3B82F6"
      };
    for (const b of s(i))
      if (b.fund && b.category === "cash") {
        const E = typeof b.fund == "string" ? b.fund : b.fund.code;
        v[E] && (v[E].balance += (b.debit || 0) - (b.credit || 0));
      }
    return Object.entries(v).filter(([, b]) => b.balance > 0).map(([b, E]) => ({ symbol: b, ...E }));
  }), vt = /* @__PURE__ */ ke(() => {
    const v = {};
    for (const b of s(i).filter((E) => E.entry_type === "revenue" && (E.credit || 0) > 0)) {
      const E = b.description || b.category || "Other";
      v[E] || (v[E] = {
        name: E,
        type: b.category === "tax" ? "citizen" : "organization",
        contribution: 0,
        color: b.category === "tax" ? "#3B82F6" : "#10B981"
      }), v[E].contribution += b.credit;
    }
    return Object.values(v);
  }), ie = /* @__PURE__ */ ke(() => {
    const v = {}, b = {};
    for (const S of s(i))
      if (S.entry_type === "revenue" && (S.credit || 0) > 0) {
        const F = S.category || "other";
        v[F] = (v[F] || 0) + S.credit;
      } else if (S.entry_type === "expense" && (S.debit || 0) > 0) {
        const F = S.category || "other";
        b[F] = (b[F] || 0) + S.debit;
      }
    const E = Object.entries(v).map(([S, F]) => ({ category: y(S), amount: F })), M = Object.entries(b).map(([S, F]) => ({ category: y(S), amount: F })), P = E.reduce((S, F) => S + F.amount, 0), T = M.reduce((S, F) => S + F.amount, 0);
    return {
      income: E,
      expenses: M,
      totalIncome: P,
      totalExpenses: T,
      net: P - T
    };
  });
  function nt(v, b) {
    return b <= 0 ? "0%" : `${Math.min(100, v / b * 100).toFixed(1)}%`;
  }
  const Nt = ["LedgerEntry", "Budget", "Fund", "FiscalPeriod"], fe = 50;
  let Ft = /* @__PURE__ */ W("LedgerEntry"), $e = /* @__PURE__ */ W(0), ua = /* @__PURE__ */ W(lt([])), yr = /* @__PURE__ */ W(0), Ia = /* @__PURE__ */ W(0), La = /* @__PURE__ */ W(!1), ca = /* @__PURE__ */ W(""), va = /* @__PURE__ */ W(lt([])), zr = /* @__PURE__ */ W(!1), mt = /* @__PURE__ */ W("");
  async function Ra() {
    O(La, !0), O(ca, "");
    try {
      const v = await t.ctx.backend.get_objects_paginated(s(Ft), s($e), fe, "desc"), b = typeof v == "string" ? JSON.parse(v) : v;
      if (b?.success && b?.data?.objectsListPaginated) {
        const E = b.data.objectsListPaginated.objects.map((P) => JSON.parse(P)), M = b.data.objectsListPaginated.pagination;
        O(ua, E, !0), O(Ia, Number(M?.total_items_count ?? 0), !0), O(yr, Number(M?.total_pages ?? 1), !0), E.length > 0 && O(va, Object.keys(E[0]).filter((P) => !P.startsWith("_")), !0);
      } else
        O(ua, [], !0), O(Ia, 0), O(yr, 0), O(va, [], !0);
    } catch (v) {
      O(ca, v?.message || String(v), !0);
    } finally {
      O(La, !1);
    }
  }
  function ga(v) {
    O($e, v, !0), Ra();
  }
  function qs(v) {
    O(Ft, v, !0), O($e, 0), Ra();
  }
  function mn(v) {
    if (v == null) return "";
    const b = typeof v == "object" ? JSON.stringify(v) : String(v);
    return b.includes(",") || b.includes('"') || b.includes(`
`) ? '"' + b.replace(/"/g, '""') + '"' : b;
  }
  async function Vs() {
    O(zr, !0), O(mt, "Starting...");
    try {
      const v = [];
      let b = 0, E = 1;
      for (; b < E; ) {
        O(mt, `Fetching page ${b + 1}${E > 1 ? " of " + E : ""}...`);
        const Ne = await t.ctx.backend.get_objects_paginated(s(Ft), b, fe, "desc"), Te = typeof Ne == "string" ? JSON.parse(Ne) : Ne;
        if (Te?.success && Te?.data?.objectsListPaginated) {
          const Ot = Te.data.objectsListPaginated.objects.map((Ut) => JSON.parse(Ut));
          if (v.push(...Ot), E = Number(Te.data.objectsListPaginated.pagination?.total_pages ?? 1), Ot.length < fe) break;
        } else
          break;
        b++;
      }
      if (v.length === 0) {
        O(mt, "No data to export.");
        return;
      }
      O(mt, `Building CSV (${v.length} records)...`);
      const M = Object.keys(v[0]).filter((Ne) => !Ne.startsWith("_")), P = M.map(mn).join(","), T = v.map((Ne) => M.map((Te) => mn(Ne[Te])).join(",")), S = P + `
` + T.join(`
`), F = new Blob([S], { type: "text/csv;charset=utf-8;" }), ae = URL.createObjectURL(F), ue = document.createElement("a");
      ue.href = ae, ue.download = `${s(Ft)}_${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.csv`, document.body.appendChild(ue), ue.click(), document.body.removeChild(ue), URL.revokeObjectURL(ae), O(mt, `Exported ${v.length} records.`);
    } catch (v) {
      O(mt, "Error: " + (v?.message || String(v)));
    } finally {
      O(zr, !1);
    }
  }
  let kn = !1;
  Vn(() => {
    s(a) === "records" && !kn && (kn = !0, Ra());
  });
  var wn = Ro(), En = o(wn), Us = o(En), Ma = o(Us), Ba = p(Ma, 2), $a = p(Ba, 2), Sn = p($a, 2), An = p(En, 2);
  {
    var Hs = (v) => {
      var b = Ql(), E = o(b);
      q(() => x(E, s(c))), j(v, b);
    };
    ze(An, (v) => {
      s(c) && v(Hs);
    });
  }
  var Ys = p(An, 2);
  {
    var Js = (v) => {
      var b = Xl();
      j(v, b);
    }, Gs = (v) => {
      var b = Kn(), E = tr(b);
      {
        var M = (T) => {
          var S = eo();
          j(T, S);
        }, P = (T) => {
          var S = co(), F = tr(S), ae = o(F), ue = p(o(ae), 2), Ne = o(ue), Te = p(ae, 2), Ot = p(o(Te), 2), Ut = o(Ot), xr = p(Te, 2), qr = p(o(xr), 2), mr = o(qr), G = p(xr, 2), Z = p(o(G), 2), ce = o(Z), Ye = p(F, 2), kt = p(o(Ye), 2), Ht = o(kt), Yt = o(Ht), Vr = p(o(Yt), 2), kr = o(Vr);
          Se(kr, 17, () => Object.entries(s(N).assets), Ee, (oe, te) => {
            var re = /* @__PURE__ */ ke(() => Gr(s(te), 2));
            let he = () => s(re)[0], be = () => s(re)[1];
            var K = to(), L = o(K), de = o(L), ve = p(L, 2), ye = o(ve);
            q(
              (xe, me) => {
                x(de, xe), x(ye, me);
              },
              [() => y(he()), () => w(be())]
            ), j(oe, K);
          });
          var Jt = p(kr, 2), Gt = p(o(Jt), 2), Kt = o(Gt), wr = p(Yt, 2), Wt = p(o(wr), 2), Zt = o(Wt);
          Se(Zt, 17, () => Object.entries(s(N).liabilities), Ee, (oe, te) => {
            var re = /* @__PURE__ */ ke(() => Gr(s(te), 2));
            let he = () => s(re)[0], be = () => s(re)[1];
            var K = ro(), L = o(K), de = o(L), ve = p(L, 2), ye = o(ve);
            q(
              (xe, me) => {
                x(de, xe), x(ye, me);
              },
              [() => y(he()), () => w(be())]
            ), j(oe, K);
          });
          var Qt = p(Zt, 2), Fe = p(o(Qt), 2), wt = o(Fe), Et = p(wr, 2), $ = p(o(Et), 2), z = o($);
          Se(z, 17, () => Object.entries(s(N).equity), Ee, (oe, te) => {
            var re = /* @__PURE__ */ ke(() => Gr(s(te), 2));
            let he = () => s(re)[0], be = () => s(re)[1];
            var K = ao(), L = o(K), de = o(L), ve = p(L, 2), ye = o(ve);
            q(
              (xe, me) => {
                x(de, xe), x(ye, me);
              },
              [() => y(he()), () => w(be())]
            ), j(oe, K);
          });
          var le = p(z, 2), Q = p(o(le), 2), X = o(Q), Ce = p(Ye, 2), Oe = p(o(Ce), 2), J = o(Oe), ee = o(J), _e = p(o(ee), 2), st = o(_e);
          Se(st, 17, () => Object.entries(s(Y).revenues), Ee, (oe, te) => {
            var re = /* @__PURE__ */ ke(() => Gr(s(te), 2));
            let he = () => s(re)[0], be = () => s(re)[1];
            var K = no(), L = o(K), de = o(L), ve = p(L, 2), ye = o(ve);
            q(
              (xe, me) => {
                x(de, xe), x(ye, `+${me ?? ""}`);
              },
              [() => y(he()), () => w(be())]
            ), j(oe, K);
          });
          var Pt = p(st, 2), Dt = p(o(Pt), 2), Xt = o(Dt), er = p(ee, 2), Ur = p(o(er), 2), Er = o(Ur);
          Se(Er, 17, () => Object.entries(s(Y).expenses), Ee, (oe, te) => {
            var re = /* @__PURE__ */ ke(() => Gr(s(te), 2));
            let he = () => s(re)[0], be = () => s(re)[1];
            var K = so(), L = o(K), de = o(L), ve = p(L, 2), ye = o(ve);
            q(
              (xe, me) => {
                x(de, xe), x(ye, `-${me ?? ""}`);
              },
              [() => y(he()), () => w(be())]
            ), j(oe, K);
          });
          var Hr = p(Er, 2), za = p(o(Hr), 2), qa = o(za), Zs = p(J, 2), Qs = o(Zs), jn = o(Qs), Xs = o(jn), Tn = p(jn, 2), ei = o(Tn), Cn = p(Ce, 2), ti = p(o(Cn), 2), Nn = o(ti);
          Se(
            Nn,
            17,
            () => [
              {
                label: "Operating Activities",
                sub: "Day-to-day operations",
                value: s(H).operating
              },
              {
                label: "Investing Activities",
                sub: "Capital expenditures",
                value: s(H).investing
              },
              {
                label: "Financing Activities",
                sub: "Bonds and debt",
                value: s(H).financing
              }
            ],
            Ee,
            (oe, te) => {
              var re = io(), he = o(re), be = o(he), K = o(be), L = p(be, 2), de = o(L), ve = p(he, 2), ye = o(ve);
              q(
                (xe, me) => {
                  x(K, s(te).label), x(de, s(te).sub), Ge(ve, 1, xe), x(ye, `${s(te).value >= 0 ? "+" : ""}${me ?? ""}`);
                },
                [
                  () => Je(r("text-lg font-semibold", s(te).value >= 0 ? "text-blue-800 dark:text-blue-400" : "text-red-600 dark:text-red-400")),
                  () => w(s(te).value)
                ]
              ), j(oe, re);
            }
          );
          var ri = p(Nn, 2), Fn = p(o(ri), 2), ai = o(Fn), On = p(Cn, 2);
          {
            var ni = (oe) => {
              var te = oo(), re = p(o(te), 2), he = o(re);
              Se(he, 21, () => s(d), Ee, (be, K) => {
                var L = lo(), de = o(L), ve = o(de), ye = o(ve), xe = p(ve, 2), me = o(xe), Yr = p(de, 2), Jr = o(Yr);
                q(() => {
                  x(ye, s(K).name || s(K).code), x(me, s(K).fund_type || "general"), x(Jr, s(K).description || "No description");
                }), j(be, L);
              }), j(oe, te);
            };
            ze(On, (oe) => {
              s(d).length > 0 && oe(ni);
            });
          }
          var Pn = p(On, 2);
          {
            var si = (oe) => {
              var te = uo(), re = p(o(te), 2), he = o(re), be = p(o(he));
              Se(be, 21, () => s(n), Ee, (K, L) => {
                const de = /* @__PURE__ */ ke(() => (s(L).actual_amount || 0) - (s(L).planned_amount || 0)), ve = /* @__PURE__ */ ke(() => s(L).planned_amount ? (s(de) / s(L).planned_amount * 100).toFixed(1) : "0");
                var ye = fo(), xe = o(ye), me = o(xe), Yr = o(me), Jr = p(me, 2), oi = o(Jr), Dn = p(xe), di = o(Dn), In = p(Dn), fi = o(In), Va = p(In), ui = o(Va), ci = p(Va), Ln = o(ci), vi = o(Ln);
                q(
                  (gi, pi, _i, hi, bi) => {
                    x(Yr, s(L).name || s(L).category), x(oi, s(L).budget_type || "expense"), x(di, gi), x(fi, pi), Ge(Va, 1, _i), x(ui, `${s(de) >= 0 ? "+" : ""}${hi ?? ""} (${s(ve) ?? ""}%)`), Ge(Ln, 1, bi), x(vi, s(L).status || "draft");
                  },
                  [
                    () => w(s(L).planned_amount || 0),
                    () => w(s(L).actual_amount || 0),
                    () => Je(r("py-3 px-4 text-right", s(de) >= 0 ? "text-blue-700 dark:text-blue-400" : "text-red-500 dark:text-red-400")),
                    () => w(s(de)),
                    () => Je(r("px-2 py-1 text-xs rounded-full", s(L).status === "adopted" ? "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400" : s(L).status === "draft" ? "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400" : "bg-gray-50 dark:bg-gray-700 text-gray-500 dark:text-gray-400"))
                  ]
                ), j(K, ye);
              }), j(oe, te);
            };
            ze(Pn, (oe) => {
              s(n).length > 0 && oe(si);
            });
          }
          var ii = p(Pn, 2), li = o(ii);
          q(
            (oe, te, re, he, be, K, L, de, ve, ye, xe, me, Yr, Jr) => {
              x(Ne, oe), x(Ut, te), x(mr, re), Ge(Z, 1, he), x(ce, `${s(Y).netIncome >= 0 ? "+" : ""}${be ?? ""}`), x(Kt, K), x(wt, L), x(X, de), x(Xt, ve), x(qa, ye), x(Xs, `Net Income (${s(Y).netIncome >= 0 ? "Surplus" : "Deficit"})`), Ge(Tn, 1, xe), x(ei, `${s(Y).netIncome >= 0 ? "+" : ""}${me ?? ""}`), Ge(Fn, 1, Yr), x(ai, `${s(H).netChange >= 0 ? "+" : ""}${Jr ?? ""}`), x(li, `${s(i).length ?? ""} ledger entries · ${s(d).length ?? ""} funds · ${s(n).length ?? ""} budgets`);
            },
            [
              () => w(s(N).totalAssets),
              () => w(s(N).totalLiabilities),
              () => w(s(N).netPosition),
              () => Je(r("text-2xl font-bold", s(Y).netIncome >= 0 ? "text-green-700 dark:text-green-400" : "text-red-600 dark:text-red-400")),
              () => w(s(Y).netIncome),
              () => w(s(N).totalAssets),
              () => w(s(N).totalLiabilities),
              () => w(s(N).netPosition),
              () => w(s(Y).totalRevenues),
              () => w(s(Y).totalExpenses),
              () => Je(r("text-xl font-bold", s(Y).netIncome >= 0 ? "text-blue-800 dark:text-blue-300" : "text-red-600 dark:text-red-400")),
              () => w(s(Y).netIncome),
              () => Je(r("text-xl font-bold", s(H).netChange >= 0 ? "text-blue-800 dark:text-blue-400" : "text-red-600 dark:text-red-400")),
              () => w(s(H).netChange)
            ]
          ), j(T, S);
        };
        ze(E, (T) => {
          s(i).length === 0 && s(d).length === 0 && s(n).length === 0 ? T(M) : T(P, -1);
        });
      }
      j(v, b);
    }, Ks = (v) => {
      var b = wo(), E = tr(b), M = o(E), P = p(o(M), 2);
      Se(P, 21, () => Nt, Ee, (G, Z) => {
        var ce = vo(), Ye = o(ce), kt = {};
        q(() => {
          Jl(ce, s(Z) === s(Ft)), x(Ye, s(Z)), kt !== (kt = s(Z)) && (ce.value = (ce.__value = s(Z)) ?? "");
        }), j(G, ce);
      });
      var T = p(M, 2), S = o(T), F = p(T, 2);
      {
        var ae = (G) => {
          var Z = go(), ce = o(Z);
          q(() => x(ce, s(mt))), j(G, Z);
        };
        ze(F, (G) => {
          s(mt) && !s(zr) && G(ae);
        });
      }
      var ue = p(F, 2), Ne = o(ue), Te = p(E, 2);
      {
        var Ot = (G) => {
          var Z = po(), ce = o(Z);
          q(() => x(ce, s(ca))), j(G, Z);
        };
        ze(Te, (G) => {
          s(ca) && G(Ot);
        });
      }
      var Ut = p(Te, 2);
      {
        var xr = (G) => {
          var Z = _o(), ce = p(o(Z), 2), Ye = o(ce);
          q(() => x(Ye, `Loading page ${s($e) + 1}...`)), j(G, Z);
        }, qr = (G) => {
          var Z = ho(), ce = o(Z), Ye = o(ce);
          q(() => x(Ye, `No ${s(Ft) ?? ""} records found.`)), j(G, Z);
        }, mr = (G) => {
          var Z = ko(), ce = tr(Z), Ye = o(ce), kt = o(Ye), Ht = o(kt), Yt = o(Ht);
          Se(Yt, 21, () => s(va), Ee, (Qt, Fe) => {
            var wt = bo(), Et = o(wt);
            q(() => x(Et, s(Fe))), j(Qt, wt);
          });
          var Vr = p(Ht);
          Se(Vr, 21, () => s(ua), Ee, (Qt, Fe, wt) => {
            var Et = mo();
            Se(Et, 21, () => s(va), Ee, ($, z) => {
              var le = xo(), Q = o(le);
              {
                var X = (J) => {
                  var ee = yo(), _e = o(ee);
                  q((st) => x(_e, st), [() => JSON.stringify(s(Fe)[s(z)])]), j(J, ee);
                }, Ce = (J) => {
                  var ee = Gn();
                  q((_e) => x(ee, _e), [() => k(s(Fe)[s(z)])]), j(J, ee);
                }, Oe = (J) => {
                  var ee = Gn();
                  q(() => x(ee, s(Fe)[s(z)] ?? "—")), j(J, ee);
                };
                ze(Q, (J) => {
                  typeof s(Fe)[s(z)] == "object" && s(Fe)[s(z)] !== null ? J(X) : typeof s(Fe)[s(z)] == "number" ? J(Ce, 1) : J(Oe, -1);
                });
              }
              q((J) => Gl(le, "title", J), [
                () => typeof s(Fe)[s(z)] == "object" ? JSON.stringify(s(Fe)[s(z)]) : String(s(Fe)[s(z)] ?? "")
              ]), j($, le);
            }), q(($) => Ge(Et, 1, $), [
              () => Je(r("border-b border-gray-100 dark:border-gray-700", wt % 2 === 0 ? "bg-white dark:bg-gray-800" : "bg-gray-50 dark:bg-gray-750"))
            ]), j(Qt, Et);
          });
          var kr = p(ce, 2), Jt = o(kr), Gt = p(Jt, 2), Kt = p(Gt, 2), wr = o(Kt), Wt = p(Kt, 2), Zt = p(Wt, 2);
          q(() => {
            Jt.disabled = s($e) === 0, Gt.disabled = s($e) === 0, x(wr, `Page ${s($e) + 1} of ${s(yr) ?? ""}`), Wt.disabled = s($e) >= s(yr) - 1, Zt.disabled = s($e) >= s(yr) - 1;
          }), gt("click", Jt, () => ga(0)), gt("click", Gt, () => ga(s($e) - 1)), gt("click", Wt, () => ga(s($e) + 1)), gt("click", Zt, () => ga(s(yr) - 1)), j(G, Z);
        };
        ze(Ut, (G) => {
          s(La) ? G(xr) : s(ua).length === 0 ? G(qr, 1) : G(mr, -1);
        });
      }
      q(() => {
        T.disabled = s(zr), x(S, s(zr) ? s(mt) : "Download CSV"), x(Ne, `${s(Ia) ?? ""} total records`);
      }), gt("change", P, (G) => qs(G.target.value)), gt("click", T, Vs), j(v, b);
    }, Ws = (v) => {
      var b = Kn(), E = tr(b);
      {
        var M = (T) => {
          var S = Eo();
          j(T, S);
        }, P = (T) => {
          var S = Lo(), F = tr(S), ae = o(F), ue = p(o(ae), 2);
          {
            var Ne = ($) => {
              var z = So();
              j($, z);
            }, Te = ($) => {
              const z = /* @__PURE__ */ ke(() => Math.max(...s(we).map((Q) => Q.amount)));
              var le = jo();
              Se(le, 21, () => s(we), Ee, (Q, X) => {
                var Ce = Ao(), Oe = o(Ce), J = o(Oe), ee = o(J), _e = p(J, 2), st = o(_e), Pt = p(Oe, 2), Dt = o(Pt);
                q(
                  (Xt, er) => {
                    x(ee, s(X).label), x(st, Xt), Ga(Dt, `width: ${er ?? ""}; background: ${s(X).color ?? ""}`);
                  },
                  [
                    () => w(s(X).amount),
                    () => nt(s(X).amount, s(z))
                  ]
                ), j(Q, Ce);
              }), j($, le);
            };
            ze(ue, ($) => {
              s(we).length === 0 ? $(Ne) : $(Te, -1);
            });
          }
          var Ot = p(ae, 2), Ut = p(o(Ot), 2);
          {
            var xr = ($) => {
              var z = To();
              j($, z);
            }, qr = ($) => {
              const z = /* @__PURE__ */ ke(() => Math.max(...s(Ie).map((ee) => ee.balance))), le = /* @__PURE__ */ ke(() => s(Ie).reduce((ee, _e) => ee + _e.balance, 0));
              var Q = No(), X = tr(Q), Ce = o(X), Oe = o(Ce), J = p(X, 2);
              Se(J, 21, () => s(Ie), Ee, (ee, _e) => {
                var st = Co(), Pt = o(st), Dt = o(Pt), Xt = o(Dt), er = p(Dt, 2), Ur = o(er), Er = p(Pt, 2), Hr = o(Er);
                q(
                  (za, qa) => {
                    x(Xt, `${s(_e).name ?? ""} (${s(_e).symbol ?? ""})`), x(Ur, za), Ga(Hr, `width: ${qa ?? ""}; background: ${s(_e).color ?? ""}`);
                  },
                  [
                    () => w(s(_e).balance),
                    () => nt(s(_e).balance, s(z))
                  ]
                ), j(ee, st);
              }), q((ee) => x(Oe, ee), [() => w(s(le))]), j($, Q);
            };
            ze(Ut, ($) => {
              s(Ie).length === 0 ? $(xr) : $(qr, -1);
            });
          }
          var mr = p(F, 2), G = p(o(mr), 2);
          {
            var Z = ($) => {
              var z = Fo();
              j($, z);
            }, ce = ($) => {
              const z = /* @__PURE__ */ ke(() => Math.max(...s(vt).map((Q) => Q.contribution)));
              var le = Po();
              Se(le, 21, () => s(vt).sort((Q, X) => X.contribution - Q.contribution), Ee, (Q, X) => {
                var Ce = Oo(), Oe = o(Ce), J = o(Oe), ee = o(J), _e = p(ee), st = o(_e), Pt = p(J, 2), Dt = o(Pt), Xt = p(Oe, 2), er = o(Xt);
                q(
                  (Ur, Er, Hr) => {
                    x(ee, `${s(X).name ?? ""} `), Ge(_e, 1, Ur), x(st, s(X).type), x(Dt, Er), Ga(er, `width: ${Hr ?? ""}; background: ${s(X).color ?? ""}`);
                  },
                  [
                    () => Je(r("text-xs px-1.5 py-0.5 rounded", s(X).type === "citizen" ? "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400" : "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400")),
                    () => w(s(X).contribution),
                    () => nt(s(X).contribution, s(z))
                  ]
                ), j(Q, Ce);
              }), j($, le);
            };
            ze(G, ($) => {
              s(vt).length === 0 ? $(Z) : $(ce, -1);
            });
          }
          var Ye = p(mr, 2), kt = p(o(Ye), 2), Ht = o(kt), Yt = o(Ht), Vr = p(o(Yt), 2), kr = o(Vr), Jt = p(Yt, 2);
          Se(Jt, 21, () => s(ie).income, Ee, ($, z) => {
            var le = Do(), Q = o(le), X = o(Q), Ce = p(Q, 2), Oe = o(Ce);
            q(
              (J) => {
                x(X, s(z).category), x(Oe, J);
              },
              [() => w(s(z).amount)]
            ), j($, le);
          });
          var Gt = p(Ht, 2), Kt = o(Gt), wr = p(o(Kt), 2), Wt = o(wr), Zt = p(Kt, 2);
          Se(Zt, 21, () => s(ie).expenses, Ee, ($, z) => {
            var le = Io(), Q = o(le), X = o(Q), Ce = p(Q, 2), Oe = o(Ce);
            q(
              (J) => {
                x(X, s(z).category), x(Oe, J);
              },
              [() => w(s(z).amount)]
            ), j($, le);
          });
          var Qt = p(kt, 2), Fe = o(Qt), wt = p(o(Fe), 2), Et = o(wt);
          q(
            ($, z, le, Q) => {
              x(kr, `+${$ ?? ""}`), x(Wt, `-${z ?? ""}`), Ge(wt, 1, le), x(Et, `${s(ie).net >= 0 ? "+" : ""}${Q ?? ""}`);
            },
            [
              () => w(s(ie).totalIncome),
              () => w(s(ie).totalExpenses),
              () => Je(r("text-lg font-bold", s(ie).net >= 0 ? "text-blue-800 dark:text-blue-300" : "text-red-600 dark:text-red-400")),
              () => w(s(ie).net)
            ]
          ), j(T, S);
        };
        ze(E, (T) => {
          s(i).length === 0 && s(n).length === 0 ? T(M) : T(P, -1);
        });
      }
      j(v, b);
    };
    ze(Ys, (v) => {
      s(f) ? v(Js) : s(a) === "accounting" ? v(Gs, 1) : s(a) === "records" ? v(Ks, 2) : s(a) === "visualizations" && v(Ws, 3);
    });
  }
  q(
    (v, b, E) => {
      Ge(Ma, 1, v), Ge(Ba, 1, b), Ge($a, 1, E), Sn.disabled = s(f);
    },
    [
      () => Je(r("py-3 px-1 border-b-2 font-medium text-sm transition-colors", s(a) === "accounting" ? "border-blue-500 text-blue-600 dark:text-blue-400" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400")),
      () => Je(r("py-3 px-1 border-b-2 font-medium text-sm transition-colors", s(a) === "visualizations" ? "border-blue-500 text-blue-600 dark:text-blue-400" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400")),
      () => Je(r("py-3 px-1 border-b-2 font-medium text-sm transition-colors", s(a) === "records" ? "border-blue-500 text-blue-600 dark:text-blue-400" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400"))
    ]
  ), gt("click", Ma, () => O(a, "accounting")), gt("click", Ba, () => O(a, "visualizations")), gt("click", $a, () => O(a, "records")), gt("click", Sn, m), j(e, wn), os();
}
Fl(["click", "change"]);
function zo(e, t) {
  const r = Il(Mo, { target: e, props: { ctx: t } });
  return {
    unmount() {
      try {
        Rl(r);
      } catch {
      }
    }
  };
}
export {
  zo as default
};
