var yi = Object.defineProperty;
var Ln = (e) => {
  throw TypeError(e);
};
var xi = (e, t, r) => t in e ? yi(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var De = (e, t, r) => xi(e, typeof t != "symbol" ? t + "" : t, r), Ua = (e, t, r) => t.has(e) || Ln("Cannot " + r);
var o = (e, t, r) => (Ua(e, t, "read from private field"), r ? r.call(e) : t.get(e)), T = (e, t, r) => t.has(e) ? Ln("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), S = (e, t, r, a) => (Ua(e, t, "write to private field"), a ? a.call(e, r) : t.set(e, r), r), M = (e, t, r) => (Ua(e, t, "access private method"), r);
var Xn = Array.isArray, mi = Array.prototype.indexOf, lr = Array.prototype.includes, Oa = Array.from, ki = Object.defineProperty, Xr = Object.getOwnPropertyDescriptor, wi = Object.getOwnPropertyDescriptors, Ei = Object.prototype, Si = Array.prototype, es = Object.getPrototypeOf, Rn = Object.isExtensible;
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
const Ae = 2, ta = 4, Pa = 8, rs = 1 << 24, it = 16, ft = 32, Rt = 64, Ka = 128, Qe = 512, ge = 1024, Se = 2048, ht = 4096, Fe = 8192, dt = 16384, _r = 32768, Mn = 1 << 25, Dr = 65536, wa = 1 << 17, Ti = 1 << 18, Mr = 1 << 19, Ci = 1 << 20, _t = 1 << 25, vr = 65536, Ea = 1 << 21, jr = 1 << 22, Lt = 1 << 23, Ha = Symbol("$state"), ha = Symbol("attributes"), Wa = Symbol("class"), Za = Symbol("style"), Wr = Symbol("text"), Da = new class extends Error {
  constructor() {
    super(...arguments);
    De(this, "name", "StaleReactionError");
    De(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
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
const $i = 1, zi = 2, as = 4, qi = 8, Vi = 16, Ui = 1, Hi = 2, ve = Symbol("uninitialized"), ns = "http://www.w3.org/1999/xhtml";
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
let et = null;
function Ir(e) {
  et = e;
}
function os(e, t = !1, r) {
  et = {
    p: et,
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
function ls(e) {
  var t = (
    /** @type {ComponentContext} */
    et
  ), r = t.e;
  if (r !== null) {
    t.e = null;
    for (var a of r)
      Ts(a);
  }
  return t.i = !0, et = t.p, /** @type {T} */
  {};
}
function ds() {
  return !0;
}
let Sr = [];
function Ki() {
  var e = Sr;
  Sr = [], ji(e);
}
function dr(e) {
  if (Sr.length === 0) {
    var t = Sr;
    queueMicrotask(() => {
      t === Sr && Ki();
    });
  }
  Sr.push(e);
}
function fs(e) {
  var t = R;
  if (t === null)
    return I.f |= Lt, e;
  if ((t.f & _r) === 0 && (t.f & ta) === 0)
    throw e;
  It(e, t);
}
function It(e, t) {
  for (; t !== null; ) {
    if ((t.f & Ka) !== 0) {
      if ((t.f & _r) === 0)
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
function ae(e, t) {
  e.f = e.f & Wi | t;
}
function un(e) {
  (e.f & Qe) !== 0 || e.deps === null ? ae(e, ge) : ae(e, ht);
}
function us(e) {
  if (e !== null)
    for (const t of e)
      (t.f & Ae) === 0 || (t.f & vr) === 0 || (t.f ^= vr, us(
        /** @type {Derived} */
        t.deps
      ));
}
function cs(e, t, r) {
  (e.f & Se) !== 0 ? t.add(e) : (e.f & ht) !== 0 && r.add(e), us(e.deps), ae(e, ge);
}
let Ya = null, wr = null, q = null, Qa = null, ot = null, Xa = null, Ja = !1, Ar = null, ba = null;
var Bn = 0;
let Zi = 1;
var Tr, Ot, rr, Cr, Nr, ar, Fr, Et, aa, ze, na, Pt, vt, gt, Or, nr, V, en, Zr, tn, vs, gs, ya, Qi, rn, Er;
const Ca = class Ca {
  constructor() {
    T(this, V);
    De(this, "id", Zi++);
    /** True as soon as `#process` was called */
    T(this, Tr, !1);
    De(this, "linked", !0);
    /** @type {Batch | null} */
    T(this, Ot, null);
    /** @type {Batch | null} */
    T(this, rr, null);
    /** @type {Map<Effect, ReturnType<typeof deferred<any>>>} */
    De(this, "async_deriveds", /* @__PURE__ */ new Map());
    /**
     * The current values of any signals that are updated in this batch.
     * Tuple format: [value, is_derived] (note: is_derived is false for deriveds, too, if they were overridden via assignment)
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Value, [any, boolean]>}
     */
    De(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any signals (sources and deriveds) that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Value, any>}
     */
    De(this, "previous", /* @__PURE__ */ new Map());
    /**
     * Async effects which this batch doesn't take into account anymore when calculating blockers,
     * as it has a value for it already.
     * @type {Set<Effect>}
     */
    De(this, "unblocked", /* @__PURE__ */ new Set());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<(batch: Batch) => void>}
     */
    T(this, Cr, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    T(this, Nr, /* @__PURE__ */ new Set());
    /**
     * Callbacks that should run only when a fork is committed.
     * @type {Set<(batch: Batch) => void>}
     */
    T(this, ar, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    T(this, Fr, 0);
    /**
     * Async effects that are currently in flight, _not_ inside a pending boundary
     * @type {Map<Effect, number>}
     */
    T(this, Et, /* @__PURE__ */ new Map());
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    T(this, aa, null);
    /**
     * The root effects that need to be flushed
     * @type {Effect[]}
     */
    T(this, ze, []);
    /**
     * Effects created while this batch was active.
     * @type {Effect[]}
     */
    T(this, na, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    T(this, Pt, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    T(this, vt, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    T(this, gt, /* @__PURE__ */ new Map());
    /**
     * Inverse of #skipped_branches which we need to tell prior batches to unskip them when committing
     * @type {Set<Effect>}
     */
    T(this, Or, /* @__PURE__ */ new Set());
    De(this, "is_fork", !1);
    T(this, nr, !1);
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(t) {
    o(this, gt).has(t) || o(this, gt).set(t, { d: [], m: [] }), o(this, Or).delete(t);
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   * @param {(e: Effect) => void} callback
   */
  unskip_effect(t, r = (a) => this.schedule(a)) {
    var a = o(this, gt).get(t);
    if (a) {
      o(this, gt).delete(t);
      for (var n of a.d)
        ae(n, Se), r(n);
      for (n of a.m)
        ae(n, ht), r(n);
    }
    o(this, Or).add(t);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Value} source
   * @param {any} value
   * @param {boolean} [is_derived]
   */
  capture(t, r, a = !1) {
    t.v !== ve && !this.previous.has(t) && this.previous.set(t, t.v), (t.f & Lt) === 0 && (this.current.set(t, [r, a]), ot?.set(t, r)), this.is_fork || (t.v = r);
  }
  activate() {
    q = this;
  }
  deactivate() {
    q = null, ot = null;
  }
  flush() {
    try {
      Ja = !0, q = this, M(this, V, Zr).call(this);
    } finally {
      Bn = 0, Xa = null, Ar = null, ba = null, Ja = !1, q = null, ot = null, fr.clear();
    }
  }
  discard() {
    for (const t of o(this, Nr)) t(this);
    o(this, Nr).clear(), o(this, ar).clear(), M(this, V, Er).call(this);
  }
  /**
   * @param {Effect} effect
   */
  register_created_effect(t) {
    o(this, na).push(t);
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  increment(t, r) {
    if (S(this, Fr, o(this, Fr) + 1), t) {
      let a = o(this, Et).get(r) ?? 0;
      o(this, Et).set(r, a + 1);
    }
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  decrement(t, r) {
    if (S(this, Fr, o(this, Fr) - 1), t) {
      let a = o(this, Et).get(r) ?? 0;
      a === 1 ? o(this, Et).delete(r) : o(this, Et).set(r, a - 1);
    }
    o(this, nr) || (S(this, nr, !0), dr(() => {
      S(this, nr, !1), this.linked && this.flush();
    }));
  }
  /**
   * @param {Set<Effect>} dirty_effects
   * @param {Set<Effect>} maybe_dirty_effects
   */
  transfer_effects(t, r) {
    for (const a of t)
      o(this, Pt).add(a);
    for (const a of r)
      o(this, vt).add(a);
    t.clear(), r.clear();
  }
  /** @param {(batch: Batch) => void} fn */
  oncommit(t) {
    o(this, Cr).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    o(this, Nr).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  on_fork_commit(t) {
    o(this, ar).add(t);
  }
  run_fork_commit_callbacks() {
    for (const t of o(this, ar)) t(this);
    o(this, ar).clear();
  }
  settled() {
    return (o(this, aa) ?? S(this, aa, ts())).promise;
  }
  static ensure() {
    var t;
    if (q === null) {
      const r = q = new Ca();
      M(t = r, V, rn).call(t), Ja || dr(() => {
        o(r, Tr) || r.flush();
      });
    }
    return q;
  }
  apply() {
    {
      ot = null;
      return;
    }
  }
  /**
   *
   * @param {Effect} effect
   */
  schedule(t) {
    if (Xa = t, t.b?.is_pending && (t.f & (ta | Pa | rs)) !== 0 && (t.f & _r) === 0) {
      t.b.defer_effect(t);
      return;
    }
    for (var r = t; r.parent !== null; ) {
      r = r.parent;
      var a = r.f;
      if (Ar !== null && r === R && (I === null || (I.f & Ae) === 0))
        return;
      if ((a & (Rt | ft)) !== 0) {
        if ((a & ge) === 0)
          return;
        r.f ^= ge;
      }
    }
    o(this, ze).push(r);
  }
};
Tr = new WeakMap(), Ot = new WeakMap(), rr = new WeakMap(), Cr = new WeakMap(), Nr = new WeakMap(), ar = new WeakMap(), Fr = new WeakMap(), Et = new WeakMap(), aa = new WeakMap(), ze = new WeakMap(), na = new WeakMap(), Pt = new WeakMap(), vt = new WeakMap(), gt = new WeakMap(), Or = new WeakMap(), nr = new WeakMap(), V = new WeakSet(), en = function() {
  if (this.is_fork) return !0;
  for (const a of o(this, Et).keys()) {
    for (var t = a, r = !1; t.parent !== null; ) {
      if (o(this, gt).has(t)) {
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
  var l, c, g;
  if (S(this, Tr, !0), Bn++ > 1e3 && (M(this, V, Er).call(this), Xi()), !M(this, V, en).call(this)) {
    for (const p of o(this, Pt))
      o(this, vt).delete(p), ae(p, Se), this.schedule(p);
    for (const p of o(this, vt))
      ae(p, ht), this.schedule(p);
  }
  const t = o(this, ze);
  S(this, ze, []), this.apply();
  var r = Ar = [], a = [], n = ba = [];
  for (const p of t)
    try {
      M(this, V, tn).call(this, p, r, a);
    } catch (v) {
      throw hs(p), v;
    }
  if (q = null, n.length > 0) {
    var i = Ca.ensure();
    for (const p of n)
      i.schedule(p);
  }
  if (Ar = null, ba = null, M(this, V, en).call(this)) {
    M(this, V, ya).call(this, a), M(this, V, ya).call(this, r);
    for (const [p, v] of o(this, gt))
      _s(p, v);
    n.length > 0 && /** @type {unknown} */
    M(l = q, V, Zr).call(l);
    return;
  }
  const d = M(this, V, vs).call(this);
  if (d) {
    M(c = d, V, gs).call(c, this);
    return;
  }
  o(this, Pt).clear(), o(this, vt).clear();
  for (const p of o(this, Cr)) p(this);
  o(this, Cr).clear(), Qa = this, $n(a), $n(r), Qa = null, o(this, aa)?.resolve();
  var u = (
    /** @type {Batch | null} */
    /** @type {unknown} */
    q
  );
  if (this.linked && o(this, Fr) === 0 && M(this, V, Er).call(this), o(this, ze).length > 0) {
    u === null && (u = this, M(this, V, rn).call(this));
    const p = u;
    o(p, ze).push(...o(this, ze).filter((v) => !o(p, ze).includes(v)));
  }
  u !== null && M(g = u, V, Zr).call(g);
}, /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
tn = function(t, r, a) {
  t.f ^= ge;
  for (var n = t.first; n !== null; ) {
    var i = n.f, d = (i & (ft | Rt)) !== 0, u = d && (i & ge) !== 0, l = u || (i & Fe) !== 0 || o(this, gt).has(n);
    if (!l && n.fn !== null) {
      d ? n.f ^= ge : (i & ta) !== 0 ? r.push(n) : fa(n) && ((i & it) !== 0 && o(this, vt).add(n), Rr(n));
      var c = n.first;
      if (c !== null) {
        n = c;
        continue;
      }
    }
    for (; n !== null; ) {
      var g = n.next;
      if (g !== null) {
        n = g;
        break;
      }
      n = n.parent;
    }
  }
}, vs = function() {
  for (var t = o(this, Ot); t !== null; ) {
    if (!t.is_fork) {
      for (const [r, [, a]] of this.current)
        if (t.current.has(r) && !a)
          return t;
    }
    t = o(t, Ot);
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
      for (const l of i) {
        var d = l.f;
        if ((d & Ae) !== 0)
          r(
            /** @type {Derived} */
            l
          );
        else {
          var u = (
            /** @type {Effect} */
            l
          );
          d & (jr | it) && !this.async_deriveds.has(u) && (o(this, vt).delete(u), ae(u, Se), this.schedule(u));
        }
      }
  };
  for (const n of this.current.keys())
    r(n);
  this.oncommit(() => t.discard()), M(a = t, V, Er).call(a), q = this, M(this, V, Zr).call(this);
}, /**
 * @param {Effect[]} effects
 */
ya = function(t) {
  for (var r = 0; r < t.length; r += 1)
    cs(t[r], o(this, Pt), o(this, vt));
}, Qi = function() {
  var g;
  M(this, V, Er).call(this);
  for (let p = Ya; p !== null; p = o(p, rr)) {
    var t = p.id < this.id, r = [];
    for (const [v, [m, k]] of this.current) {
      if (p.current.has(v)) {
        var a = (
          /** @type {[any, boolean]} */
          p.current.get(v)[0]
        );
        if (t && m !== a)
          p.current.set(v, [m, k]);
        else
          continue;
      }
      r.push(v);
    }
    if (t)
      for (const [v, m] of this.async_deriveds) {
        const k = p.async_deriveds.get(v);
        k && m.promise.then(k.resolve);
      }
    if (o(p, Tr)) {
      var n = [...p.current.keys()].filter((v) => !this.current.has(v));
      if (n.length === 0)
        t && p.discard();
      else if (r.length > 0) {
        if (t)
          for (const v of o(this, Or))
            p.unskip_effect(v, (m) => {
              var k;
              (m.f & (it | jr)) !== 0 ? p.schedule(m) : M(k = p, V, ya).call(k, [m]);
            });
        p.activate();
        var i = /* @__PURE__ */ new Set(), d = /* @__PURE__ */ new Map();
        for (var u of r)
          ps(u, n, i, d);
        d = /* @__PURE__ */ new Map();
        var l = [...p.current.keys()].filter(
          (v) => this.current.has(v) ? (
            /** @type {[any, boolean]} */
            this.current.get(v)[0] !== v.v
          ) : !0
        );
        if (l.length > 0)
          for (const v of o(this, na))
            (v.f & (dt | Fe | wa)) === 0 && cn(v, l, d) && ((v.f & (jr | it)) !== 0 ? (ae(v, Se), p.schedule(v)) : o(p, Pt).add(v));
        if (o(p, ze).length > 0 && !o(p, nr)) {
          p.apply();
          for (var c of o(p, ze))
            M(g = p, V, tn).call(g, c, [], []);
          S(p, ze, []);
        }
        p.deactivate();
      }
    }
  }
}, rn = function() {
  wr === null ? Ya = wr = this : (S(wr, rr, this), S(this, Ot, wr)), wr = this;
}, Er = function() {
  var t = o(this, Ot), r = o(this, rr);
  t === null ? Ya = r : S(t, rr, r), r === null ? wr = t : S(r, Ot, t), this.linked = !1;
};
let gr = Ca;
function Xi() {
  try {
    Ii();
  } catch (e) {
    It(e, Xa);
  }
}
let wt = null;
function $n(e) {
  var t = e.length;
  if (t !== 0) {
    for (var r = 0; r < t; ) {
      var a = e[r++];
      if ((a.f & (dt | Fe)) === 0 && fa(a) && (wt = /* @__PURE__ */ new Set(), Rr(a), a.deps === null && a.first === null && a.nodes === null && a.teardown === null && a.ac === null && Ns(a), wt?.size > 0)) {
        fr.clear();
        for (const n of wt) {
          if ((n.f & (dt | Fe)) !== 0) continue;
          const i = [n];
          let d = n.parent;
          for (; d !== null; )
            wt.has(d) && (wt.delete(d), i.push(d)), d = d.parent;
          for (let u = i.length - 1; u >= 0; u--) {
            const l = i[u];
            (l.f & (dt | Fe)) === 0 && Rr(l);
          }
        }
        wt.clear();
      }
    }
    wt = null;
  }
}
function ps(e, t, r, a) {
  if (!r.has(e) && (r.add(e), e.reactions !== null))
    for (const n of e.reactions) {
      const i = n.f;
      (i & Ae) !== 0 ? ps(
        /** @type {Derived} */
        n,
        t,
        r,
        a
      ) : (i & (jr | it)) !== 0 && (i & Se) === 0 && cn(n, t, a) && (ae(n, Se), vn(
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
      if (lr.call(t, n))
        return !0;
      if ((n.f & Ae) !== 0 && cn(
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
  q.schedule(e);
}
function _s(e, t) {
  if (!((e.f & ft) !== 0 && (e.f & ge) !== 0)) {
    (e.f & Se) !== 0 ? t.d.push(e) : (e.f & ht) !== 0 && t.m.push(e), ae(e, ge);
    for (var r = e.first; r !== null; )
      _s(r, t), r = r.next;
  }
}
function hs(e) {
  ae(e, ge);
  for (var t = e.first; t !== null; )
    hs(t), t = t.next;
}
function eo(e) {
  let t = 0, r = pr(0), a;
  return () => {
    _n() && (s(r), Eo(() => (t === 0 && (a = Co(() => e(() => ea(r)))), t += 1, () => {
      dr(() => {
        t -= 1, t === 0 && (a?.(), a = void 0, ea(r));
      });
    })));
  };
}
var to = Dr | Mr;
function ro(e, t, r, a) {
  new ao(e, t, r, a);
}
var Ge, fn, Ke, sr, Ie, We, Ne, qe, St, ir, Dt, Pr, sa, ia, At, Na, ne, no, so, io, an, xa, ma, nn, sn;
class ao {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(t, r, a, n) {
    T(this, ne);
    /** @type {Boundary | null} */
    De(this, "parent");
    De(this, "is_pending", !1);
    /**
     * API-level transformError transform function. Transforms errors before they reach the `failed` snippet.
     * Inherited from parent boundary, or defaults to identity.
     * @type {(error: unknown) => unknown}
     */
    De(this, "transform_error");
    /** @type {TemplateNode} */
    T(this, Ge);
    /** @type {TemplateNode | null} */
    T(this, fn, null);
    /** @type {BoundaryProps} */
    T(this, Ke);
    /** @type {((anchor: Node) => void)} */
    T(this, sr);
    /** @type {Effect} */
    T(this, Ie);
    /** @type {Effect | null} */
    T(this, We, null);
    /** @type {Effect | null} */
    T(this, Ne, null);
    /** @type {Effect | null} */
    T(this, qe, null);
    /** @type {DocumentFragment | null} */
    T(this, St, null);
    T(this, ir, 0);
    T(this, Dt, 0);
    T(this, Pr, !1);
    /** @type {Set<Effect>} */
    T(this, sa, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    T(this, ia, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    T(this, At, null);
    T(this, Na, eo(() => (S(this, At, pr(o(this, ir))), () => {
      S(this, At, null);
    })));
    S(this, Ge, t), S(this, Ke, r), S(this, sr, (i) => {
      var d = (
        /** @type {Effect} */
        R
      );
      d.b = this, d.f |= Ka, a(i);
    }), this.parent = /** @type {Effect} */
    R.b, this.transform_error = n ?? this.parent?.transform_error ?? ((i) => i), S(this, Ie, hn(() => {
      M(this, ne, an).call(this);
    }, to));
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    cs(t, o(this, sa), o(this, ia));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!o(this, Ke).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  update_pending_count(t, r) {
    M(this, ne, nn).call(this, t, r), S(this, ir, o(this, ir) + t), !(!o(this, At) || o(this, Pr)) && (S(this, Pr, !0), dr(() => {
      S(this, Pr, !1), o(this, At) && Lr(o(this, At), o(this, ir));
    }));
  }
  get_effect_pending() {
    return o(this, Na).call(this), s(
      /** @type {Source<number>} */
      o(this, At)
    );
  }
  /** @param {unknown} error */
  error(t) {
    if (!o(this, Ke).onerror && !o(this, Ke).failed)
      throw t;
    q?.is_fork ? (o(this, We) && q.skip_effect(o(this, We)), o(this, Ne) && q.skip_effect(o(this, Ne)), o(this, qe) && q.skip_effect(o(this, qe)), q.on_fork_commit(() => {
      M(this, ne, sn).call(this, t);
    })) : M(this, ne, sn).call(this, t);
  }
}
Ge = new WeakMap(), fn = new WeakMap(), Ke = new WeakMap(), sr = new WeakMap(), Ie = new WeakMap(), We = new WeakMap(), Ne = new WeakMap(), qe = new WeakMap(), St = new WeakMap(), ir = new WeakMap(), Dt = new WeakMap(), Pr = new WeakMap(), sa = new WeakMap(), ia = new WeakMap(), At = new WeakMap(), Na = new WeakMap(), ne = new WeakSet(), no = function() {
  try {
    S(this, We, Ze(() => o(this, sr).call(this, o(this, Ge))));
  } catch (t) {
    this.error(t);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
so = function(t) {
  const r = o(this, Ke).failed;
  r && S(this, qe, Ze(() => {
    r(
      o(this, Ge),
      () => t,
      () => () => {
      }
    );
  }));
}, io = function() {
  const t = o(this, Ke).pending;
  t && (this.is_pending = !0, S(this, Ne, Ze(() => t(o(this, Ge)))), dr(() => {
    var r = S(this, St, document.createDocumentFragment()), a = jt();
    r.append(a), S(this, We, M(this, ne, ma).call(this, () => Ze(() => o(this, sr).call(this, a)))), o(this, Dt) === 0 && (o(this, Ge).before(r), S(this, St, null), ur(
      /** @type {Effect} */
      o(this, Ne),
      () => {
        S(this, Ne, null);
      }
    ), M(this, ne, xa).call(
      this,
      /** @type {Batch} */
      q
    ));
  }));
}, an = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), S(this, Dt, 0), S(this, ir, 0), S(this, We, Ze(() => {
      o(this, sr).call(this, o(this, Ge));
    })), o(this, Dt) > 0) {
      var t = S(this, St, document.createDocumentFragment());
      xn(o(this, We), t);
      const r = (
        /** @type {(anchor: Node) => void} */
        o(this, Ke).pending
      );
      S(this, Ne, Ze(() => r(o(this, Ge))));
    } else
      M(this, ne, xa).call(
        this,
        /** @type {Batch} */
        q
      );
  } catch (r) {
    this.error(r);
  }
}, /**
 * @param {Batch} batch
 */
xa = function(t) {
  this.is_pending = !1, t.transfer_effects(o(this, sa), o(this, ia));
}, /**
 * @template T
 * @param {() => T} fn
 */
ma = function(t) {
  var r = R, a = I, n = et;
  bt(o(this, Ie)), tt(o(this, Ie)), Ir(o(this, Ie).ctx);
  try {
    return gr.ensure(), t();
  } catch (i) {
    return fs(i), null;
  } finally {
    bt(r), tt(a), Ir(n);
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
    this.parent && M(a = this.parent, ne, nn).call(a, t, r);
    return;
  }
  S(this, Dt, o(this, Dt) + t), o(this, Dt) === 0 && (M(this, ne, xa).call(this, r), o(this, Ne) && ur(o(this, Ne), () => {
    S(this, Ne, null);
  }), o(this, St) && (o(this, Ge).before(o(this, St)), S(this, St, null)));
}, /**
 * @param {unknown} error
 */
sn = function(t) {
  o(this, We) && (Re(o(this, We)), S(this, We, null)), o(this, Ne) && (Re(o(this, Ne)), S(this, Ne, null)), o(this, qe) && (Re(o(this, qe)), S(this, qe, null));
  var r = o(this, Ke).onerror;
  let a = o(this, Ke).failed;
  var n = !1, i = !1;
  const d = () => {
    if (n) {
      Ji();
      return;
    }
    n = !0, i && Bi(), o(this, qe) !== null && ur(o(this, qe), () => {
      S(this, qe, null);
    }), M(this, ne, ma).call(this, () => {
      M(this, ne, an).call(this);
    });
  }, u = (l) => {
    try {
      i = !0, r?.(l, d), i = !1;
    } catch (c) {
      It(c, o(this, Ie) && o(this, Ie).parent);
    }
    a && S(this, qe, M(this, ne, ma).call(this, () => {
      try {
        return Ze(() => {
          var c = (
            /** @type {Effect} */
            R
          );
          c.b = this, c.f |= Ka, a(
            o(this, Ge),
            () => l,
            () => d
          );
        });
      } catch (c) {
        return It(
          c,
          /** @type {Effect} */
          o(this, Ie).parent
        ), null;
      }
    }));
  };
  dr(() => {
    var l;
    try {
      l = this.transform_error(t);
    } catch (c) {
      It(c, o(this, Ie) && o(this, Ie).parent);
      return;
    }
    l !== null && typeof l == "object" && typeof /** @type {any} */
    l.then == "function" ? l.then(
      u,
      /** @param {unknown} e */
      (c) => It(c, o(this, Ie) && o(this, Ie).parent)
    ) : u(l);
  });
};
function oo(e, t, r, a) {
  const n = gn;
  var i = e.filter((v) => !v.settled);
  if (r.length === 0 && i.length === 0) {
    a(t.map(n));
    return;
  }
  var d = (
    /** @type {Effect} */
    R
  ), u = lo(), l = i.length === 1 ? i[0].promise : i.length > 1 ? Promise.all(i.map((v) => v.promise)) : null;
  function c(v) {
    if ((d.f & dt) === 0) {
      u();
      try {
        a(v);
      } catch (m) {
        It(m, d);
      }
      Sa();
    }
  }
  var g = bs();
  if (r.length === 0) {
    l.then(() => c(t.map(n))).finally(g);
    return;
  }
  function p() {
    Promise.all(r.map((v) => /* @__PURE__ */ fo(v))).then((v) => c([...t.map(n), ...v])).catch((v) => It(v, d)).finally(g);
  }
  l ? l.then(() => {
    u(), p(), Sa();
  }) : p();
}
function lo() {
  var e = (
    /** @type {Effect} */
    R
  ), t = I, r = et, a = (
    /** @type {Batch} */
    q
  );
  return function(i = !0) {
    bt(e), tt(t), Ir(r), i && (e.f & dt) === 0 && (a?.activate(), a?.apply());
  };
}
function Sa(e = !0) {
  bt(null), tt(null), Ir(null), e && q?.deactivate();
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
    q
  ), a = t.is_rendered();
  return t.update_pending_count(1, r), r.increment(a, e), () => {
    t.update_pending_count(-1, r), r.decrement(a, e);
  };
}
// @__NO_SIDE_EFFECTS__
function gn(e) {
  var t = Ae | Se;
  return R !== null && (R.f |= Mr), {
    ctx: et,
    deps: null,
    effects: null,
    equals: ss,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      ve
    ),
    wv: 0,
    parent: R,
    ac: null
  };
}
const pa = Symbol("obsolete");
// @__NO_SIDE_EFFECTS__
function fo(e, t, r) {
  let a = (
    /** @type {Effect | null} */
    R
  );
  a === null && Ni();
  var n = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), i = pr(
    /** @type {V} */
    ve
  ), d = !I, u = /* @__PURE__ */ new Set();
  return wo(() => {
    var l = (
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
    var g = (
      /** @type {Batch} */
      q
    );
    if (d) {
      if ((l.f & _r) !== 0)
        var p = bs();
      if (
        /** @type {Boundary} */
        a.b.is_rendered()
      )
        g.async_deriveds.get(l)?.reject(pa);
      else
        for (const m of u.values())
          m.reject(pa);
      u.add(c), g.async_deriveds.set(l, c);
    }
    const v = (m, k = void 0) => {
      p?.(), u.delete(c), k !== pa && (g.activate(), k ? (i.f |= Lt, Lr(i, k)) : ((i.f & Lt) !== 0 && (i.f ^= Lt), Lr(i, m)), g.deactivate());
    };
    c.promise.then(v, (m) => v(null, m || "unknown"));
  }), mo(() => {
    for (const l of u)
      l.reject(pa);
  }), new Promise((l) => {
    function c(g) {
      function p() {
        g === n ? l(i) : c(n);
      }
      g.then(p, p);
    }
    c(n);
  });
}
// @__NO_SIDE_EFFECTS__
function me(e) {
  const t = /* @__PURE__ */ gn(e);
  return Ps(t), t;
}
// @__NO_SIDE_EFFECTS__
function uo(e) {
  const t = /* @__PURE__ */ gn(e);
  return t.equals = is, t;
}
function co(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var r = 0; r < t.length; r += 1)
      Re(
        /** @type {Effect} */
        t[r]
      );
  }
}
function pn(e) {
  var t, r = R, a = e.parent;
  if (!Mt && a !== null && e.v !== ve && // if it was never evaluated before, it's guaranteed to fail downstream, so we try to execute instead
  (a.f & (dt | Fe)) !== 0)
    return Yi(), e.v;
  bt(a);
  try {
    e.f &= ~vr, co(e), t = Rs(e);
  } finally {
    bt(r);
  }
  return t;
}
function ys(e) {
  var t = pn(e);
  if (!e.equals(t) && (e.wv = Is(), (!q?.is_fork || e.deps === null) && (q !== null ? (q.capture(e, t, !0), Qa?.capture(e, t, !0)) : e.v = t, e.deps === null))) {
    ae(e, ge);
    return;
  }
  Mt || (ot !== null ? (_n() || q?.is_fork) && ot.set(e, t) : un(e));
}
function vo(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      (t.teardown || t.ac) && (t.teardown?.(), t.ac?.abort(Da), t.fn !== null && (t.teardown = Ai), t.ac = null, ra(t, 0), bn(t));
}
function xs(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      t.teardown && t.fn !== null && Rr(t);
}
let Aa = /* @__PURE__ */ new Set();
const fr = /* @__PURE__ */ new Map();
let ms = !1;
function pr(e, t) {
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
  const r = pr(e);
  return Ps(r), r;
}
// @__NO_SIDE_EFFECTS__
function go(e, t = !1, r = !0) {
  const a = pr(e);
  return t || (a.equals = is), a;
}
function O(e, t, r = !1) {
  I !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!lt || (I.f & wa) !== 0) && ds() && (I.f & (Ae | it | jr | wa)) !== 0 && (Xe === null || !lr.call(Xe, e)) && Mi();
  let a = r ? st(t) : t;
  return Lr(e, a, ba);
}
function Lr(e, t, r = null) {
  if (!e.equals(t)) {
    fr.set(e, Mt ? t : e.v);
    var a = gr.ensure();
    if (a.capture(e, t), (e.f & Ae) !== 0) {
      const n = (
        /** @type {Derived} */
        e
      );
      (e.f & Se) !== 0 && pn(n), ot === null && un(n);
    }
    e.wv = Is(), ks(e, Se, r), R !== null && (R.f & ge) !== 0 && (R.f & (ft | Rt)) === 0 && (Je === null ? jo([e]) : Je.push(e)), !a.is_fork && Aa.size > 0 && !ms && po();
  }
  return t;
}
function po() {
  ms = !1;
  for (const e of Aa) {
    (e.f & ge) !== 0 && ae(e, ht);
    let t;
    try {
      t = fa(e);
    } catch {
      t = !0;
    }
    t && Rr(e);
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
      var d = a[i], u = d.f, l = (u & Se) === 0;
      if (l && ae(d, t), (u & wa) !== 0)
        Aa.add(
          /** @type {Effect} */
          d
        );
      else if ((u & Ae) !== 0) {
        var c = (
          /** @type {Derived} */
          d
        );
        ot?.delete(c), (u & vr) === 0 && (u & Qe && (R === null || (R.f & Ea) === 0) && (d.f |= vr), ks(c, ht, r));
      } else if (l) {
        var g = (
          /** @type {Effect} */
          d
        );
        (u & it) !== 0 && wt !== null && wt.add(g), r !== null ? r.push(g) : vn(g);
      }
    }
}
function st(e) {
  if (typeof e != "object" || e === null || Ha in e)
    return e;
  const t = es(e);
  if (t !== Ei && t !== Si)
    return e;
  var r = /* @__PURE__ */ new Map(), a = Xn(e), n = /* @__PURE__ */ W(0), i = cr, d = (u) => {
    if (cr === i)
      return u();
    var l = I, c = cr;
    tt(null), Un(i);
    var g = u();
    return tt(l), Un(c), g;
  };
  return a && r.set("length", /* @__PURE__ */ W(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(u, l, c) {
        (!("value" in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && Li();
        var g = r.get(l);
        return g === void 0 ? d(() => {
          var p = /* @__PURE__ */ W(c.value);
          return r.set(l, p), p;
        }) : O(g, c.value, !0), !0;
      },
      deleteProperty(u, l) {
        var c = r.get(l);
        if (c === void 0) {
          if (l in u) {
            const g = d(() => /* @__PURE__ */ W(ve));
            r.set(l, g), ea(n);
          }
        } else
          O(c, ve), ea(n);
        return !0;
      },
      get(u, l, c) {
        if (l === Ha)
          return e;
        var g = r.get(l), p = l in u;
        if (g === void 0 && (!p || Xr(u, l)?.writable) && (g = d(() => {
          var m = st(p ? u[l] : ve), k = /* @__PURE__ */ W(m);
          return k;
        }), r.set(l, g)), g !== void 0) {
          var v = s(g);
          return v === ve ? void 0 : v;
        }
        return Reflect.get(u, l, c);
      },
      getOwnPropertyDescriptor(u, l) {
        var c = Reflect.getOwnPropertyDescriptor(u, l);
        if (c && "value" in c) {
          var g = r.get(l);
          g && (c.value = s(g));
        } else if (c === void 0) {
          var p = r.get(l), v = p?.v;
          if (p !== void 0 && v !== ve)
            return {
              enumerable: !0,
              configurable: !0,
              value: v,
              writable: !0
            };
        }
        return c;
      },
      has(u, l) {
        if (l === Ha)
          return !0;
        var c = r.get(l), g = c !== void 0 && c.v !== ve || Reflect.has(u, l);
        if (c !== void 0 || R !== null && (!g || Xr(u, l)?.writable)) {
          c === void 0 && (c = d(() => {
            var v = g ? st(u[l]) : ve, m = /* @__PURE__ */ W(v);
            return m;
          }), r.set(l, c));
          var p = s(c);
          if (p === ve)
            return !1;
        }
        return g;
      },
      set(u, l, c, g) {
        var p = r.get(l), v = l in u;
        if (a && l === "length")
          for (var m = c; m < /** @type {Source<number>} */
          p.v; m += 1) {
            var k = r.get(m + "");
            k !== void 0 ? O(k, ve) : m in u && (k = d(() => /* @__PURE__ */ W(ve)), r.set(m + "", k));
          }
        if (p === void 0)
          (!v || Xr(u, l)?.writable) && (p = d(() => /* @__PURE__ */ W(void 0)), O(p, st(c)), r.set(l, p));
        else {
          v = p.v !== ve;
          var w = d(() => st(c));
          O(p, w);
        }
        var y = Reflect.getOwnPropertyDescriptor(u, l);
        if (y?.set && y.set.call(g, c), !v) {
          if (a && typeof l == "string") {
            var C = (
              /** @type {Source<number>} */
              r.get("length")
            ), Y = Number(l);
            Number.isInteger(Y) && Y >= C.v && O(C, Y + 1);
          }
          ea(n);
        }
        return !0;
      },
      ownKeys(u) {
        s(n);
        var l = Reflect.ownKeys(u).filter((p) => {
          var v = r.get(p);
          return v === void 0 || v.v !== ve;
        });
        for (var [c, g] of r)
          g.v !== ve && !(c in u) && l.push(c);
        return l;
      },
      setPrototypeOf() {
        Ri();
      }
    }
  );
}
var zn, ws, Es, Ss;
function _o() {
  if (zn === void 0) {
    zn = window, ws = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, r = Text.prototype;
    Es = Xr(t, "firstChild").get, Ss = Xr(t, "nextSibling").get, Rn(e) && (e[Wa] = void 0, e[ha] = null, e[Za] = void 0, e.__e = void 0), Rn(r) && (r[Wr] = void 0);
  }
}
function jt(e = "") {
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
function f(e, t) {
  return /* @__PURE__ */ ja(e);
}
function Xt(e, t = !1) {
  {
    var r = /* @__PURE__ */ ja(e);
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ da(r) : r;
  }
}
function _(e, t = 1, r = !1) {
  let a = e;
  for (; t--; )
    a = /** @type {TemplateNode} */
    /* @__PURE__ */ da(a);
  return a;
}
function ho(e) {
  e.textContent = "";
}
function As() {
  return !1;
}
function bo(e, t, r) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElementNS(ns, e, void 0)
  );
}
function js(e) {
  var t = I, r = R;
  tt(null), bt(null);
  try {
    return e();
  } finally {
    tt(t), bt(r);
  }
}
function yo(e) {
  R === null && (I === null && Di(), Pi()), Mt && Oi();
}
function xo(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function Bt(e, t) {
  var r = R;
  r !== null && (r.f & Fe) !== 0 && (e |= Fe);
  var a = {
    ctx: et,
    deps: null,
    nodes: null,
    f: e | Se | Qe,
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
  q?.register_created_effect(a);
  var n = a;
  if ((e & ta) !== 0)
    Ar !== null ? Ar.push(a) : gr.ensure().schedule(a);
  else if (t !== null) {
    try {
      Rr(a);
    } catch (d) {
      throw Re(a), d;
    }
    n.deps === null && n.teardown === null && n.nodes === null && n.first === n.last && // either `null`, or a singular child
    (n.f & Mr) === 0 && (n = n.first, (e & it) !== 0 && (e & Dr) !== 0 && n !== null && (n.f |= Dr));
  }
  if (n !== null && (n.parent = r, r !== null && xo(n, r), I !== null && (I.f & Ae) !== 0 && (e & Rt) === 0)) {
    var i = (
      /** @type {Derived} */
      I
    );
    (i.effects ?? (i.effects = [])).push(n);
  }
  return a;
}
function _n() {
  return I !== null && !lt;
}
function mo(e) {
  const t = Bt(Pa, null);
  return ae(t, ge), t.teardown = e, t;
}
function qn(e) {
  yo();
  var t = (
    /** @type {Effect} */
    R.f
  ), r = !I && (t & ft) !== 0 && (t & _r) === 0;
  if (r) {
    var a = (
      /** @type {ComponentContext} */
      et
    );
    (a.e ?? (a.e = [])).push(e);
  } else
    return Ts(e);
}
function Ts(e) {
  return Bt(ta | Ci, e);
}
function ko(e) {
  gr.ensure();
  const t = Bt(Rt | Mr, e);
  return (r = {}) => new Promise((a) => {
    r.outro ? ur(t, () => {
      Re(t), a(void 0);
    }) : (Re(t), a(void 0));
  });
}
function wo(e) {
  return Bt(jr | Mr, e);
}
function Eo(e, t = 0) {
  return Bt(Pa | t, e);
}
function z(e, t = [], r = [], a = []) {
  oo(a, t, r, (n) => {
    Bt(Pa, () => e(...n.map(s)));
  });
}
function hn(e, t = 0) {
  var r = Bt(it | t, e);
  return r;
}
function Ze(e) {
  return Bt(ft | Mr, e);
}
function Cs(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = Mt, a = I;
    Vn(!0), tt(null);
    try {
      t.call(null);
    } finally {
      Vn(r), tt(a);
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
    (r.f & Rt) !== 0 ? r.parent = null : Re(r, t), r = a;
  }
}
function So(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & ft) === 0 && Re(t), t = r;
  }
}
function Re(e, t = !0) {
  var r = !1;
  (t || (e.f & Ti) !== 0) && e.nodes !== null && e.nodes.end !== null && (Ao(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), r = !0), ae(e, Mn), bn(e, t && !r), ra(e, 0);
  var a = e.nodes && e.nodes.t;
  if (a !== null)
    for (const i of a)
      i.stop();
  Cs(e), e.f ^= Mn, e.f |= dt;
  var n = e.parent;
  n !== null && n.first !== null && Ns(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function Ao(e, t) {
  for (; e !== null; ) {
    var r = e === t ? null : /* @__PURE__ */ da(e);
    e.remove(), e = r;
  }
}
function Ns(e) {
  var t = e.parent, r = e.prev, a = e.next;
  r !== null && (r.next = a), a !== null && (a.prev = r), t !== null && (t.first === e && (t.first = a), t.last === e && (t.last = r));
}
function ur(e, t, r = !0) {
  var a = [];
  Fs(e, a, !0);
  var n = () => {
    r && Re(e), t && t();
  }, i = a.length;
  if (i > 0) {
    var d = () => --i || n();
    for (var u of a)
      u.out(d);
  } else
    n();
}
function Fs(e, t, r) {
  if ((e.f & Fe) === 0) {
    e.f ^= Fe;
    var a = e.nodes && e.nodes.t;
    if (a !== null)
      for (const u of a)
        (u.is_global || r) && t.push(u);
    for (var n = e.first; n !== null; ) {
      var i = n.next;
      if ((n.f & Rt) === 0) {
        var d = (n.f & Dr) !== 0 || // If this is a branch effect without a block effect parent,
        // it means the parent block effect was pruned. In that case,
        // transparency information was transferred to the branch effect.
        (n.f & ft) !== 0 && (e.f & it) !== 0;
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
  if ((e.f & Fe) !== 0) {
    e.f ^= Fe, (e.f & ge) === 0 && (ae(e, Se), gr.ensure().schedule(e));
    for (var r = e.first; r !== null; ) {
      var a = r.next, n = (r.f & Dr) !== 0 || (r.f & ft) !== 0;
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
let ka = !1, Mt = !1;
function Vn(e) {
  Mt = e;
}
let I = null, lt = !1;
function tt(e) {
  I = e;
}
let R = null;
function bt(e) {
  R = e;
}
let Xe = null;
function Ps(e) {
  I !== null && (Xe === null ? Xe = [e] : Xe.push(e));
}
let Le = null, $e = 0, Je = null;
function jo(e) {
  Je = e;
}
let Ds = 1, er = 0, cr = er;
function Un(e) {
  cr = e;
}
function Is() {
  return ++Ds;
}
function fa(e) {
  var t = e.f;
  if ((t & Se) !== 0)
    return !0;
  if (t & Ae && (e.f &= ~vr), (t & ht) !== 0) {
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
    (t & Qe) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    ot === null && ae(e, ge);
  }
  return !1;
}
function Ls(e, t, r = !0) {
  var a = e.reactions;
  if (a !== null && !(Xe !== null && lr.call(Xe, e)))
    for (var n = 0; n < a.length; n++) {
      var i = a[n];
      (i.f & Ae) !== 0 ? Ls(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (r ? ae(i, Se) : (i.f & ge) !== 0 && ae(i, ht), vn(
        /** @type {Effect} */
        i
      ));
    }
}
function Rs(e) {
  var w;
  var t = Le, r = $e, a = Je, n = I, i = Xe, d = et, u = lt, l = cr, c = e.f;
  Le = /** @type {null | Value[]} */
  null, $e = 0, Je = null, I = (c & (ft | Rt)) === 0 ? e : null, Xe = null, Ir(e.ctx), lt = !1, cr = ++er, e.ac !== null && (js(() => {
    e.ac.abort(Da);
  }), e.ac = null);
  try {
    e.f |= Ea;
    var g = (
      /** @type {Function} */
      e.fn
    ), p = g();
    e.f |= _r;
    var v = e.deps, m = q?.is_fork;
    if (Le !== null) {
      var k;
      if (m || ra(e, $e), v !== null && $e > 0)
        for (v.length = $e + Le.length, k = 0; k < Le.length; k++)
          v[$e + k] = Le[k];
      else
        e.deps = v = Le;
      if (_n() && (e.f & Qe) !== 0)
        for (k = $e; k < v.length; k++)
          ((w = v[k]).reactions ?? (w.reactions = [])).push(e);
    } else !m && v !== null && $e < v.length && (ra(e, $e), v.length = $e);
    if (ds() && Je !== null && !lt && v !== null && (e.f & (Ae | ht | Se)) === 0)
      for (k = 0; k < /** @type {Source[]} */
      Je.length; k++)
        Ls(
          Je[k],
          /** @type {Effect} */
          e
        );
    if (n !== null && n !== e) {
      if (er++, n.deps !== null)
        for (let y = 0; y < r; y += 1)
          n.deps[y].rv = er;
      if (t !== null)
        for (const y of t)
          y.rv = er;
      Je !== null && (a === null ? a = Je : a.push(.../** @type {Source[]} */
      Je));
    }
    return (e.f & Lt) !== 0 && (e.f ^= Lt), p;
  } catch (y) {
    return fs(y);
  } finally {
    e.f ^= Ea, Le = t, $e = r, Je = a, I = n, Xe = i, Ir(d), lt = u, cr = l;
  }
}
function To(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var a = mi.call(r, e);
    if (a !== -1) {
      var n = r.length - 1;
      n === 0 ? r = t.reactions = null : (r[a] = r[n], r.pop());
    }
  }
  if (r === null && (t.f & Ae) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Le === null || !lr.call(Le, t))) {
    var i = (
      /** @type {Derived} */
      t
    );
    (i.f & Qe) !== 0 && (i.f ^= Qe, i.f &= ~vr), i.v !== ve && un(i), vo(i), ra(i, 0);
  }
}
function ra(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var a = t; a < r.length; a++)
      To(e, r[a]);
}
function Rr(e) {
  var t = e.f;
  if ((t & dt) === 0) {
    ae(e, ge);
    var r = R, a = ka;
    R = e, ka = !0;
    try {
      (t & (it | rs)) !== 0 ? So(e) : bn(e), Cs(e);
      var n = Rs(e);
      e.teardown = typeof n == "function" ? n : null, e.wv = Ds;
      var i;
    } finally {
      ka = a, R = r;
    }
  }
}
function s(e) {
  var t = e.f, r = (t & Ae) !== 0;
  if (I !== null && !lt) {
    var a = R !== null && (R.f & dt) !== 0;
    if (!a && (Xe === null || !lr.call(Xe, e))) {
      var n = I.deps;
      if ((I.f & Ea) !== 0)
        e.rv < er && (e.rv = er, Le === null && n !== null && n[$e] === e ? $e++ : Le === null ? Le = [e] : Le.push(e));
      else {
        I.deps ?? (I.deps = []), lr.call(I.deps, e) || I.deps.push(e);
        var i = e.reactions;
        i === null ? e.reactions = [I] : lr.call(i, I) || i.push(I);
      }
    }
  }
  if (Mt && fr.has(e))
    return fr.get(e);
  if (r) {
    var d = (
      /** @type {Derived} */
      e
    );
    if (Mt) {
      var u = d.v;
      return ((d.f & ge) === 0 && d.reactions !== null || Bs(d)) && (u = pn(d)), fr.set(d, u), u;
    }
    var l = (d.f & Qe) === 0 && !lt && I !== null && (ka || (I.f & Qe) !== 0), c = (d.f & _r) === 0;
    fa(d) && (l && (d.f |= Qe), ys(d)), l && !c && (xs(d), Ms(d));
  }
  if (ot?.has(e))
    return ot.get(e);
  if ((e.f & Lt) !== 0)
    throw e.v;
  return e.v;
}
function Ms(e) {
  if (e.f |= Qe, e.deps !== null)
    for (const t of e.deps)
      (t.reactions ?? (t.reactions = [])).push(e), (t.f & Ae) !== 0 && (t.f & Qe) === 0 && (xs(
        /** @type {Derived} */
        t
      ), Ms(
        /** @type {Derived} */
        t
      ));
}
function Bs(e) {
  if (e.v === ve) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (fr.has(t) || (t.f & Ae) !== 0 && Bs(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function Co(e) {
  var t = lt;
  try {
    return lt = !0, e();
  } finally {
    lt = t;
  }
}
const No = ["touchstart", "touchmove"];
function Fo(e) {
  return No.includes(e);
}
const tr = Symbol("events"), $s = /* @__PURE__ */ new Set(), on = /* @__PURE__ */ new Set();
function ct(e, t, r) {
  (t[tr] ?? (t[tr] = {}))[e] = r;
}
function Oo(e) {
  for (var t = 0; t < e.length; t++)
    $s.add(e[t]);
  for (var r of on)
    r(e);
}
let Hn = null;
function Yn(e) {
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), a = e.type, n = e.composedPath?.() || [], i = (
    /** @type {null | Element} */
    n[0] || e.target
  );
  Hn = e;
  var d = 0, u = Hn === e && e[tr];
  if (u) {
    var l = n.indexOf(u);
    if (l !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e[tr] = t;
      return;
    }
    var c = n.indexOf(t);
    if (c === -1)
      return;
    l <= c && (d = l);
  }
  if (i = /** @type {Element} */
  n[d] || e.target, i !== t) {
    ki(e, "currentTarget", {
      configurable: !0,
      get() {
        return i || r;
      }
    });
    var g = I, p = R;
    tt(null), bt(null);
    try {
      for (var v, m = []; i !== null; ) {
        var k = i.assignedSlot || i.parentNode || /** @type {any} */
        i.host || null;
        try {
          var w = i[tr]?.[a];
          w != null && (!/** @type {any} */
          i.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === i) && w.call(i, e);
        } catch (y) {
          v ? m.push(y) : v = y;
        }
        if (e.cancelBubble || k === t || k === null)
          break;
        i = k;
      }
      if (v) {
        for (let y of m)
          queueMicrotask(() => {
            throw y;
          });
        throw v;
      }
    } finally {
      e[tr] = t, delete e.currentTarget, tt(g), bt(p);
    }
  }
}
const Po = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (e) => e
  })
);
function Do(e) {
  return (
    /** @type {string} */
    Po?.createHTML(e) ?? e
  );
}
function Io(e) {
  var t = bo("template");
  return t.innerHTML = Do(e.replaceAll("<!>", "<!---->")), t.content;
}
function Ta(e, t) {
  var r = (
    /** @type {Effect} */
    R
  );
  r.nodes === null && (r.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function P(e, t) {
  var r = (t & Ui) !== 0, a = (t & Hi) !== 0, n, i = !e.startsWith("<!>");
  return () => {
    n === void 0 && (n = Io(i ? e : "<!>" + e), r || (n = /** @type {TemplateNode} */
    /* @__PURE__ */ ja(n)));
    var d = (
      /** @type {TemplateNode} */
      a || ws ? document.importNode(n, !0) : n.cloneNode(!0)
    );
    if (r) {
      var u = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ ja(d)
      ), l = (
        /** @type {TemplateNode} */
        d.lastChild
      );
      Ta(u, l);
    } else
      Ta(d, d);
    return d;
  };
}
function Jn(e = "") {
  {
    var t = jt(e + "");
    return Ta(t, t), t;
  }
}
function Gn() {
  var e = document.createDocumentFragment(), t = document.createComment(""), r = jt();
  return e.append(t, r), Ta(t, r), e;
}
function A(e, t) {
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
function Lo(e, t) {
  return Ro(e, t);
}
const _a = /* @__PURE__ */ new Map();
function Ro(e, { target: t, anchor: r, props: a = {}, events: n, context: i, intro: d = !0, transformError: u }) {
  _o();
  var l = void 0, c = ko(() => {
    var g = r ?? t.appendChild(jt());
    ro(
      /** @type {TemplateNode} */
      g,
      {
        pending: () => {
        }
      },
      (m) => {
        os({});
        var k = (
          /** @type {ComponentContext} */
          et
        );
        i && (k.c = i), n && (a.$$events = n), l = e(m, a) || {}, ls();
      },
      u
    );
    var p = /* @__PURE__ */ new Set(), v = (m) => {
      for (var k = 0; k < m.length; k++) {
        var w = m[k];
        if (!p.has(w)) {
          p.add(w);
          var y = Fo(w);
          for (const H of [t, document]) {
            var C = _a.get(H);
            C === void 0 && (C = /* @__PURE__ */ new Map(), _a.set(H, C));
            var Y = C.get(w);
            Y === void 0 ? (H.addEventListener(w, Yn, { passive: y }), C.set(w, 1)) : C.set(w, Y + 1);
          }
        }
      }
    };
    return v(Oa($s)), on.add(v), () => {
      for (var m of p)
        for (const y of [t, document]) {
          var k = (
            /** @type {Map<string, number>} */
            _a.get(y)
          ), w = (
            /** @type {number} */
            k.get(m)
          );
          --w == 0 ? (y.removeEventListener(m, Yn), k.delete(m), k.size === 0 && _a.delete(y)) : k.set(m, w);
        }
      on.delete(v), g !== r && g.parentNode?.removeChild(g);
    };
  });
  return ln.set(l, c), l;
}
let ln = /* @__PURE__ */ new WeakMap();
function Mo(e, t) {
  const r = ln.get(e);
  return r ? (ln.delete(e), r(t)) : Promise.resolve();
}
var nt, pt, Ve, or, oa, la, Fa;
class Bo {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, r = !0) {
    /** @type {TemplateNode} */
    De(this, "anchor");
    /** @type {Map<Batch, Key>} */
    T(this, nt, /* @__PURE__ */ new Map());
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
    T(this, pt, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    T(this, Ve, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    T(this, or, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    T(this, oa, !0);
    /**
     * @param {Batch} batch
     */
    T(this, la, (t) => {
      if (o(this, nt).has(t)) {
        var r = (
          /** @type {Key} */
          o(this, nt).get(t)
        ), a = o(this, pt).get(r);
        if (a)
          yn(a), o(this, or).delete(r);
        else {
          var n = o(this, Ve).get(r);
          n && (o(this, pt).set(r, n.effect), o(this, Ve).delete(r), n.fragment.lastChild.remove(), this.anchor.before(n.fragment), a = n.effect);
        }
        for (const [i, d] of o(this, nt)) {
          if (o(this, nt).delete(i), i === t)
            break;
          const u = o(this, Ve).get(d);
          u && (Re(u.effect), o(this, Ve).delete(d));
        }
        for (const [i, d] of o(this, pt)) {
          if (i === r || o(this, or).has(i)) continue;
          const u = () => {
            if (Array.from(o(this, nt).values()).includes(i)) {
              var c = document.createDocumentFragment();
              xn(d, c), c.append(jt()), o(this, Ve).set(i, { effect: d, fragment: c });
            } else
              Re(d);
            o(this, or).delete(i), o(this, pt).delete(i);
          };
          o(this, oa) || !a ? (o(this, or).add(i), ur(d, u, !1)) : u();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    T(this, Fa, (t) => {
      o(this, nt).delete(t);
      const r = Array.from(o(this, nt).values());
      for (const [a, n] of o(this, Ve))
        r.includes(a) || (Re(n.effect), o(this, Ve).delete(a));
    });
    this.anchor = t, S(this, oa, r);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, r) {
    var a = (
      /** @type {Batch} */
      q
    ), n = As();
    if (r && !o(this, pt).has(t) && !o(this, Ve).has(t))
      if (n) {
        var i = document.createDocumentFragment(), d = jt();
        i.append(d), o(this, Ve).set(t, {
          effect: Ze(() => r(d)),
          fragment: i
        });
      } else
        o(this, pt).set(
          t,
          Ze(() => r(this.anchor))
        );
    if (o(this, nt).set(a, t), n) {
      for (const [u, l] of o(this, pt))
        u === t ? a.unskip_effect(l) : a.skip_effect(l);
      for (const [u, l] of o(this, Ve))
        u === t ? a.unskip_effect(l.effect) : a.skip_effect(l.effect);
      a.oncommit(o(this, la)), a.ondiscard(o(this, Fa));
    } else
      o(this, la).call(this, a);
  }
}
nt = new WeakMap(), pt = new WeakMap(), Ve = new WeakMap(), or = new WeakMap(), oa = new WeakMap(), la = new WeakMap(), Fa = new WeakMap();
function Be(e, t, r = !1) {
  var a = new Bo(e), n = r ? Dr : 0;
  function i(d, u) {
    a.ensure(d, u);
  }
  hn(() => {
    var d = !1;
    t((u, l = 0) => {
      d = !0, i(l, u);
    }), d || i(-1, null);
  }, n);
}
function we(e, t) {
  return t;
}
function $o(e, t, r) {
  for (var a = [], n = t.length, i, d = t.length, u = 0; u < n; u++) {
    let p = t[u];
    ur(
      p,
      () => {
        if (i) {
          if (i.pending.delete(p), i.done.add(p), i.pending.size === 0) {
            var v = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            dn(e, Oa(i.done)), v.delete(i), v.size === 0 && (e.outrogroups = null);
          }
        } else
          d -= 1;
      },
      !1
    );
  }
  if (d === 0) {
    var l = a.length === 0 && r !== null;
    if (l) {
      var c = (
        /** @type {Element} */
        r
      ), g = (
        /** @type {Element} */
        c.parentNode
      );
      ho(g), g.append(c), e.items.clear();
    }
    dn(e, t, !l);
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
      i.f |= _t;
      const d = document.createDocumentFragment();
      xn(i, d);
    } else
      Re(t[n], r);
  }
}
var Kn;
function Ee(e, t, r, a, n, i = null) {
  var d = e, u = /* @__PURE__ */ new Map(), l = (t & as) !== 0;
  if (l) {
    var c = (
      /** @type {Element} */
      e
    );
    d = c.appendChild(jt());
  }
  var g = null, p = /* @__PURE__ */ uo(() => {
    var H = r();
    return Xn(H) ? H : H == null ? [] : Oa(H);
  }), v, m = /* @__PURE__ */ new Map(), k = !0;
  function w(H) {
    (Y.effect.f & dt) === 0 && (Y.pending.delete(H), Y.fallback = g, zo(Y, v, d, t, a), g !== null && (v.length === 0 ? (g.f & _t) === 0 ? yn(g) : (g.f ^= _t, Qr(g, null, d)) : ur(g, () => {
      g = null;
    })));
  }
  function y(H) {
    Y.pending.delete(H);
  }
  var C = hn(() => {
    v = /** @type {V[]} */
    s(p);
    for (var H = v.length, ke = /* @__PURE__ */ new Set(), Oe = (
      /** @type {Batch} */
      q
    ), ut = As(), se = 0; se < H; se += 1) {
      var rt = v[se], Tt = a(rt, se), fe = k ? null : u.get(Tt);
      fe ? (fe.v && Lr(fe.v, rt), fe.i && Lr(fe.i, se), ut && Oe.unskip_effect(fe.e)) : (fe = qo(
        u,
        k ? d : Kn ?? (Kn = jt()),
        rt,
        Tt,
        se,
        n,
        t,
        r
      ), k || (fe.e.f |= _t), u.set(Tt, fe)), ke.add(Tt);
    }
    if (H === 0 && i && !g && (k ? g = Ze(() => i(d)) : (g = Ze(() => i(Kn ?? (Kn = jt()))), g.f |= _t)), H > ke.size && Fi(), !k)
      if (m.set(Oe, ke), ut) {
        for (const [$t, Me] of u)
          ke.has($t) || Oe.skip_effect(Me.e);
        Oe.oncommit(w), Oe.ondiscard(y);
      } else
        w(Oe);
    s(p);
  }), Y = { effect: C, items: u, pending: m, outrogroups: null, fallback: g };
  k = !1;
}
function Kr(e) {
  for (; e !== null && (e.f & ft) === 0; )
    e = e.next;
  return e;
}
function zo(e, t, r, a, n) {
  var i = (a & qi) !== 0, d = t.length, u = e.items, l = Kr(e.effect.first), c, g = null, p, v = [], m = [], k, w, y, C;
  if (i)
    for (C = 0; C < d; C += 1)
      k = t[C], w = n(k, C), y = /** @type {EachItem} */
      u.get(w).e, (y.f & _t) === 0 && (y.nodes?.a?.measure(), (p ?? (p = /* @__PURE__ */ new Set())).add(y));
  for (C = 0; C < d; C += 1) {
    if (k = t[C], w = n(k, C), y = /** @type {EachItem} */
    u.get(w).e, e.outrogroups !== null)
      for (const fe of e.outrogroups)
        fe.pending.delete(y), fe.done.delete(y);
    if ((y.f & Fe) !== 0 && (yn(y), i && (y.nodes?.a?.unfix(), (p ?? (p = /* @__PURE__ */ new Set())).delete(y))), (y.f & _t) !== 0)
      if (y.f ^= _t, y === l)
        Qr(y, null, r);
      else {
        var Y = g ? g.next : l;
        y === e.effect.last && (e.effect.last = y.prev), y.prev && (y.prev.next = y.next), y.next && (y.next.prev = y.prev), Ft(e, g, y), Ft(e, y, Y), Qr(y, Y, r), g = y, v = [], m = [], l = Kr(g.next);
        continue;
      }
    if (y !== l) {
      if (c !== void 0 && c.has(y)) {
        if (v.length < m.length) {
          var H = m[0], ke;
          g = H.prev;
          var Oe = v[0], ut = v[v.length - 1];
          for (ke = 0; ke < v.length; ke += 1)
            Qr(v[ke], H, r);
          for (ke = 0; ke < m.length; ke += 1)
            c.delete(m[ke]);
          Ft(e, Oe.prev, ut.next), Ft(e, g, Oe), Ft(e, ut, H), l = H, g = ut, C -= 1, v = [], m = [];
        } else
          c.delete(y), Qr(y, l, r), Ft(e, y.prev, y.next), Ft(e, y, g === null ? e.effect.first : g.next), Ft(e, g, y), g = y;
        continue;
      }
      for (v = [], m = []; l !== null && l !== y; )
        (c ?? (c = /* @__PURE__ */ new Set())).add(l), m.push(l), l = Kr(l.next);
      if (l === null)
        continue;
    }
    (y.f & _t) === 0 && v.push(y), g = y, l = Kr(y.next);
  }
  if (e.outrogroups !== null) {
    for (const fe of e.outrogroups)
      fe.pending.size === 0 && (dn(e, Oa(fe.done)), e.outrogroups?.delete(fe));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (l !== null || c !== void 0) {
    var se = [];
    if (c !== void 0)
      for (y of c)
        (y.f & Fe) === 0 && se.push(y);
    for (; l !== null; )
      (l.f & Fe) === 0 && l !== e.fallback && se.push(l), l = Kr(l.next);
    var rt = se.length;
    if (rt > 0) {
      var Tt = (a & as) !== 0 && d === 0 ? r : null;
      if (i) {
        for (C = 0; C < rt; C += 1)
          se[C].nodes?.a?.measure();
        for (C = 0; C < rt; C += 1)
          se[C].nodes?.a?.fix();
      }
      $o(e, se, Tt);
    }
  }
  i && dr(() => {
    if (p !== void 0)
      for (y of p)
        y.nodes?.a?.apply();
  });
}
function qo(e, t, r, a, n, i, d, u) {
  var l = (d & $i) !== 0 ? (d & Vi) === 0 ? /* @__PURE__ */ go(r, !1, !1) : pr(r) : null, c = (d & zi) !== 0 ? pr(n) : null;
  return {
    v: l,
    i: c,
    e: Ze(() => (i(t, l ?? r, c ?? n, u), () => {
      e.delete(a);
    }))
  };
}
function Qr(e, t, r) {
  if (e.nodes)
    for (var a = e.nodes.start, n = e.nodes.end, i = t && (t.f & _t) === 0 ? (
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
function Ft(e, t, r) {
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
function Vo() {
  for (var e, t, r = 0, a = "", n = arguments.length; r < n; r++) (e = arguments[r]) && (t = zs(e)) && (a && (a += " "), a += t);
  return a;
}
function He(e) {
  return typeof e == "object" ? Vo(e) : e ?? "";
}
function Uo(e, t, r) {
  var a = e == null ? "" : "" + e;
  return a === "" ? null : a;
}
function Ho(e, t) {
  return e == null ? null : String(e);
}
function Ye(e, t, r, a, n, i) {
  var d = (
    /** @type {any} */
    e[Wa]
  );
  if (d !== r || d === void 0) {
    var u = Uo(r);
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
    var i = Ho(t);
    i == null ? e.removeAttribute("style") : e.style.cssText = i, e[Za] = t;
  }
  return a;
}
const Yo = Symbol("is custom element"), Jo = Symbol("is html");
function Go(e, t) {
  t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function Ko(e, t, r, a) {
  var n = Wo(e);
  n[t] !== (n[t] = r) && (r == null ? e.removeAttribute(t) : typeof r != "string" && Zo(e).includes(t) ? e[t] = r : e.setAttribute(t, r));
}
function Wo(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    /** @type {any} */
    e[ha] ?? (e[ha] = {
      [Yo]: e.nodeName.includes("-"),
      [Jo]: e.namespaceURI === ns
    })
  );
}
var Wn = /* @__PURE__ */ new Map();
function Zo(e) {
  var t = e.getAttribute("is") || e.nodeName, r = Wn.get(t);
  if (r) return r;
  Wn.set(t, r = []);
  for (var a, n = e, i = Element.prototype; i !== n; ) {
    a = wi(n);
    for (var d in a)
      a[d].set && // better safe than sorry, we don't want spread attributes to mess with HTML content
      d !== "innerHTML" && d !== "textContent" && d !== "innerText" && r.push(d);
    n = es(n);
  }
  return r;
}
const Qo = "5";
var Qn;
typeof window < "u" && ((Qn = window.__svelte ?? (window.__svelte = {})).v ?? (Qn.v = /* @__PURE__ */ new Set())).add(Qo);
function Zn(e) {
  if (e == null) return "";
  const t = typeof e == "object" ? JSON.stringify(e) : String(e);
  return t.includes(",") || t.includes('"') || t.includes(`
`) ? '"' + t.replace(/"/g, '""') + '"' : t;
}
async function Xo(e, t, r, a, n) {
  const i = [];
  let d = 0, u = 1;
  for (; d < u; ) {
    n?.(`Fetching page ${d + 1}${u > 1 ? " of " + u : ""}...`);
    const l = await e.get_objects_paginated(t, d, r, a), c = typeof l == "string" ? JSON.parse(l) : l;
    if (c?.success && c?.data?.objectsListPaginated) {
      const g = c.data.objectsListPaginated.objects.map((p) => JSON.parse(p));
      if (i.push(...g), u = Number(c.data.objectsListPaginated.pagination?.total_pages ?? 1), g.length < r) break;
    } else
      break;
    d++;
  }
  return i;
}
function el(e, t, r) {
  if (e.length === 0)
    return new Blob([""], { type: "text/csv;charset=utf-8;" });
  const a = new Set(r ?? []), n = t ?? Object.keys(e[0]).filter((l) => !l.startsWith("_") && !a.has(l)), i = n.map(Zn).join(","), d = e.map((l) => n.map((c) => Zn(l[c])).join(",")), u = i + `
` + d.join(`
`);
  return new Blob([u], { type: "text/csv;charset=utf-8;" });
}
function tl(e, t) {
  const r = URL.createObjectURL(e), a = document.createElement("a");
  a.href = r, a.download = t, document.body.appendChild(a), a.click(), document.body.removeChild(a), URL.revokeObjectURL(r);
}
async function rl(e) {
  const {
    backend: t,
    entity: r,
    pageSize: a = 50,
    order: n = "desc",
    filter: i,
    columns: d,
    excludeColumns: u,
    filename: l,
    onProgress: c
  } = e;
  let g = await Xo(t, r, a, n, c);
  if (i && (g = g.filter(i)), g.length === 0)
    return c?.("No records to export."), 0;
  c?.(`Building CSV (${g.length} records)...`);
  const p = el(g, d, u), v = l ?? `${r}_${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.csv`;
  return tl(p, v), c?.(`Exported ${g.length} records.`), g.length;
}
var al = /* @__PURE__ */ P('<div class="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 text-red-700 dark:text-red-300 mb-6"> </div>'), nl = /* @__PURE__ */ P('<div class="flex flex-col items-center justify-center py-16"><div class="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div> <span class="mt-3 text-gray-500 dark:text-gray-400">Loading metrics…</span></div>'), sl = /* @__PURE__ */ P('<div class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 text-center"><p class="text-gray-700 dark:text-gray-300 font-medium">No accounting data available yet.</p> <p class="text-gray-500 dark:text-gray-400 text-sm mt-2">Financial data will appear here once transactions are recorded.</p></div>'), il = /* @__PURE__ */ P('<div class="flex justify-between text-sm"><span class="text-gray-600 dark:text-gray-400"> </span> <span class="font-medium text-gray-800 dark:text-gray-200"> </span></div>'), ol = /* @__PURE__ */ P('<div class="flex justify-between text-sm"><span class="text-gray-600 dark:text-gray-400"> </span> <span class="font-medium text-gray-800 dark:text-gray-200"> </span></div>'), ll = /* @__PURE__ */ P('<div class="flex justify-between text-sm"><span class="text-gray-600 dark:text-gray-400"> </span> <span class="font-medium text-gray-800 dark:text-gray-200"> </span></div>'), dl = /* @__PURE__ */ P('<div class="flex justify-between text-sm"><span class="text-gray-600 dark:text-gray-400"> </span> <span class="font-medium text-blue-700 dark:text-blue-400"> </span></div>'), fl = /* @__PURE__ */ P('<div class="flex justify-between text-sm"><span class="text-gray-600 dark:text-gray-400"> </span> <span class="font-medium text-red-500 dark:text-red-400"> </span></div>'), ul = /* @__PURE__ */ P('<div class="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-750 rounded-lg"><div><span class="font-medium text-gray-700 dark:text-gray-300"> </span> <p class="text-xs text-gray-500 dark:text-gray-400"> </p></div> <span> </span></div>'), cl = /* @__PURE__ */ P('<div class="p-4 bg-gray-50 dark:bg-gray-750 rounded-lg border border-gray-200 dark:border-gray-600"><div class="flex items-center justify-between mb-2"><span class="font-semibold text-gray-800 dark:text-gray-200"> </span> <span class="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full"> </span></div> <p class="text-sm text-gray-600 dark:text-gray-400"> </p></div>'), vl = /* @__PURE__ */ P('<div class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden mb-6"><div class="bg-gray-50 dark:bg-gray-750 px-6 py-4 border-b border-gray-200 dark:border-gray-700"><h3 class="text-lg font-semibold text-gray-800 dark:text-white">🏦 Funds Overview</h3></div> <div class="p-6"><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"></div></div></div>'), gl = /* @__PURE__ */ P('<tr class="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-750"><td class="py-3 px-4"><div class="font-medium text-gray-800 dark:text-gray-200"> </div> <div class="text-xs text-gray-500 dark:text-gray-400"> </div></td><td class="py-3 px-4 text-right text-gray-600 dark:text-gray-400"> </td><td class="py-3 px-4 text-right text-gray-800 dark:text-gray-200 font-medium"> </td><td> </td><td class="py-3 px-4 text-center"><span> </span></td></tr>'), pl = /* @__PURE__ */ P('<div class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden mb-6"><div class="bg-gray-50 dark:bg-gray-750 px-6 py-4 border-b border-gray-200 dark:border-gray-700"><h3 class="text-lg font-semibold text-gray-800 dark:text-white">📊 Budget Performance</h3></div> <div class="p-6 overflow-x-auto"><table class="w-full text-sm"><thead><tr class="border-b border-gray-200 dark:border-gray-600"><th class="text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">Category</th><th class="text-right py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">Planned</th><th class="text-right py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">Actual</th><th class="text-right py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">Variance</th><th class="text-center py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">Status</th></tr></thead><tbody></tbody></table></div></div>'), _l = /* @__PURE__ */ P('<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6"><div class="bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-200 dark:border-gray-700 shadow-sm"><div class="text-gray-500 dark:text-gray-400 text-sm font-medium mb-1">Total Assets</div> <div class="text-2xl font-bold text-gray-800 dark:text-white"> </div></div> <div class="bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-200 dark:border-gray-700 shadow-sm"><div class="text-gray-500 dark:text-gray-400 text-sm font-medium mb-1">Total Liabilities</div> <div class="text-2xl font-bold text-gray-600 dark:text-gray-300"> </div></div> <div class="bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-200 dark:border-gray-700 shadow-sm"><div class="text-gray-500 dark:text-gray-400 text-sm font-medium mb-1">Net Position</div> <div class="text-2xl font-bold text-gray-800 dark:text-white"> </div></div> <div class="bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-200 dark:border-gray-700 shadow-sm"><div class="text-gray-500 dark:text-gray-400 text-sm font-medium mb-1">Net Income</div> <div> </div></div></div> <div class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden mb-6"><div class="bg-gray-50 dark:bg-gray-750 px-6 py-4 border-b border-gray-200 dark:border-gray-700"><h3 class="text-lg font-semibold text-gray-800 dark:text-white">📋 Balance Sheet</h3></div> <div class="p-6"><div class="grid grid-cols-1 md:grid-cols-3 gap-6"><div><h4 class="font-semibold text-blue-800 dark:text-blue-400 mb-3 flex items-center"><span class="w-3 h-3 bg-blue-800 dark:bg-blue-500 rounded-full mr-2"></span> Assets</h4> <div class="space-y-2"><!> <div class="border-t dark:border-gray-600 pt-2 mt-2 flex justify-between font-semibold"><span class="text-gray-700 dark:text-gray-300">Total Assets</span> <span class="text-blue-800 dark:text-blue-400"> </span></div></div></div> <div><h4 class="font-semibold text-red-600 dark:text-red-400 mb-3 flex items-center"><span class="w-3 h-3 bg-red-500 rounded-full mr-2"></span> Liabilities</h4> <div class="space-y-2"><!> <div class="border-t dark:border-gray-600 pt-2 mt-2 flex justify-between font-semibold"><span class="text-gray-700 dark:text-gray-300">Total Liabilities</span> <span class="text-red-600 dark:text-red-400"> </span></div></div></div> <div><h4 class="font-semibold text-blue-700 dark:text-blue-300 mb-3 flex items-center"><span class="w-3 h-3 bg-blue-400 rounded-full mr-2"></span> Fund Balance</h4> <div class="space-y-2"><!> <div class="border-t dark:border-gray-600 pt-2 mt-2 flex justify-between font-semibold"><span class="text-gray-700 dark:text-gray-300">Net Position</span> <span class="text-blue-800 dark:text-blue-400"> </span></div></div></div></div></div></div> <div class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden mb-6"><div class="bg-gray-50 dark:bg-gray-750 px-6 py-4 border-b border-gray-200 dark:border-gray-700"><h3 class="text-lg font-semibold text-gray-800 dark:text-white">📈 Income Statement</h3></div> <div class="p-6"><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div><h4 class="font-semibold text-blue-800 dark:text-blue-400 mb-3 flex items-center"><span class="w-3 h-3 bg-blue-800 dark:bg-blue-500 rounded-full mr-2"></span> Revenues</h4> <div class="space-y-2"><!> <div class="border-t dark:border-gray-600 pt-2 mt-2 flex justify-between font-semibold"><span class="text-gray-700 dark:text-gray-300">Total Revenues</span> <span class="text-blue-800 dark:text-blue-400"> </span></div></div></div> <div><h4 class="font-semibold text-red-600 dark:text-red-400 mb-3 flex items-center"><span class="w-3 h-3 bg-red-500 rounded-full mr-2"></span> Expenses</h4> <div class="space-y-2"><!> <div class="border-t dark:border-gray-600 pt-2 mt-2 flex justify-between font-semibold"><span class="text-gray-700 dark:text-gray-300">Total Expenses</span> <span class="text-red-600 dark:text-red-400"> </span></div></div></div></div> <div class="mt-6 p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800"><div class="flex justify-between items-center"><span class="font-semibold text-blue-700 dark:text-blue-300"> </span> <span> </span></div></div></div></div> <div class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden mb-6"><div class="bg-gray-50 dark:bg-gray-750 px-6 py-4 border-b border-gray-200 dark:border-gray-700"><h3 class="text-lg font-semibold text-gray-800 dark:text-white">💰 Cash Flow Statement</h3></div> <div class="p-6 space-y-4"><!> <div class="border-t dark:border-gray-600 pt-4 flex justify-between items-center"><span class="font-semibold text-gray-800 dark:text-gray-200">Net Change in Cash</span> <span> </span></div></div></div> <!> <!> <div class="text-center text-sm text-gray-500 dark:text-gray-400 py-4"> </div>', 1), hl = /* @__PURE__ */ P("<option> </option>"), bl = /* @__PURE__ */ P('<span class="text-sm text-gray-500 dark:text-gray-400"> </span>'), yl = /* @__PURE__ */ P('<div class="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 text-red-700 dark:text-red-300 mb-4"> </div>'), xl = /* @__PURE__ */ P('<div class="flex flex-col items-center justify-center py-12"><div class="animate-spin rounded-full h-7 w-7 border-b-2 border-blue-600"></div> <span class="mt-3 text-gray-500 dark:text-gray-400 text-sm"> </span></div>'), ml = /* @__PURE__ */ P('<div class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 text-center"><p class="text-gray-700 dark:text-gray-300 font-medium"> </p></div>'), kl = /* @__PURE__ */ P('<th class="text-left py-2.5 px-3 font-semibold text-gray-700 dark:text-gray-300 whitespace-nowrap"> </th>'), wl = /* @__PURE__ */ P('<span class="text-xs text-gray-500 dark:text-gray-400"> </span>'), El = /* @__PURE__ */ P('<td class="py-2 px-3 text-gray-700 dark:text-gray-300 whitespace-nowrap max-w-xs truncate"><!></td>'), Sl = /* @__PURE__ */ P("<tr></tr>"), Al = /* @__PURE__ */ P('<div class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden mb-4"><div class="overflow-x-auto"><table class="w-full text-sm"><thead><tr class="border-b border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-750"></tr></thead><tbody></tbody></table></div></div> <div class="flex items-center justify-center gap-2"><button class="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-40 disabled:cursor-not-allowed">First</button> <button class="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-40 disabled:cursor-not-allowed">Prev</button> <span class="text-sm text-gray-600 dark:text-gray-400 px-2"> </span> <button class="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-40 disabled:cursor-not-allowed">Next</button> <button class="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-40 disabled:cursor-not-allowed">Last</button></div>', 1), jl = /* @__PURE__ */ P('<div class="mb-4 flex flex-wrap items-center gap-4"><div class="flex items-center gap-2"><label for="entity-select" class="text-sm font-medium text-gray-700 dark:text-gray-300">Entity</label> <select id="entity-select" class="border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-1.5 text-sm bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200"></select></div> <button class="px-4 py-1.5 text-sm font-medium rounded-lg bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"> </button> <!> <span class="ml-auto text-sm text-gray-500 dark:text-gray-400"> </span></div> <!> <!>', 1), Tl = /* @__PURE__ */ P('<div class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 text-center"><p class="text-gray-700 dark:text-gray-300 font-medium">No data available for visualizations.</p></div>'), Cl = /* @__PURE__ */ P('<p class="text-gray-500 dark:text-gray-400 text-sm text-center py-4">No expense budgets with actual amounts</p>'), Nl = /* @__PURE__ */ P('<div><div class="flex justify-between text-sm mb-1"><span class="text-gray-700 dark:text-gray-300"> </span> <span class="font-medium text-gray-800 dark:text-gray-200"> </span></div> <div class="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-4"><div class="h-4 rounded-full transition-all"></div></div></div>'), Fl = /* @__PURE__ */ P('<div class="space-y-3"></div>'), Ol = /* @__PURE__ */ P('<p class="text-gray-500 dark:text-gray-400 text-sm text-center py-4">No fund balance data</p>'), Pl = /* @__PURE__ */ P('<div><div class="flex justify-between text-sm mb-1"><span class="text-gray-700 dark:text-gray-300"> </span> <span class="font-medium text-gray-800 dark:text-gray-200"> </span></div> <div class="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-4"><div class="h-4 rounded-full transition-all"></div></div></div>'), Dl = /* @__PURE__ */ P('<div class="text-center mb-4"><span class="text-2xl font-bold text-gray-800 dark:text-white"> </span> <span class="text-sm text-gray-500 dark:text-gray-400 ml-1">total</span></div> <div class="space-y-3"></div>', 1), Il = /* @__PURE__ */ P('<p class="text-gray-500 dark:text-gray-400 text-sm text-center py-4">No revenue contribution data</p>'), Ll = /* @__PURE__ */ P('<div><div class="flex justify-between text-sm mb-1"><span class="text-gray-700 dark:text-gray-300 flex items-center gap-2"> <span> </span></span> <span class="font-medium text-gray-800 dark:text-gray-200"> </span></div> <div class="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-3"><div class="h-3 rounded-full transition-all"></div></div></div>'), Rl = /* @__PURE__ */ P('<div class="space-y-3"></div>'), Ml = /* @__PURE__ */ P('<div class="flex justify-between text-gray-600 dark:text-gray-400"><span> </span> <span> </span></div>'), Bl = /* @__PURE__ */ P('<div class="flex justify-between text-gray-600 dark:text-gray-400"><span> </span> <span> </span></div>'), $l = /* @__PURE__ */ P('<div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6"><div class="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700"><h4 class="font-semibold text-gray-700 dark:text-gray-200 mb-4">📊 Tax Allocation Breakdown</h4> <!></div> <div class="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700"><h4 class="font-semibold text-gray-700 dark:text-gray-200 mb-4">💰 Asset Portfolio</h4> <!></div></div> <div class="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 mb-6"><h4 class="font-semibold text-gray-700 dark:text-gray-200 mb-4">🌳 Tax Contribution Analysis</h4> <!></div> <div class="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 mb-6"><h4 class="font-semibold text-gray-700 dark:text-gray-200 mb-4">💰 Cash Flow Breakdown</h4> <div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div class="bg-white dark:bg-gray-750 rounded-lg p-4 border border-gray-200 dark:border-gray-600"><div class="flex items-center justify-between mb-3"><span class="text-sm font-medium text-blue-700 dark:text-blue-400">📈 Income</span> <span class="text-lg font-bold text-blue-800 dark:text-blue-300"> </span></div> <div class="space-y-1 text-xs"></div></div> <div class="bg-white dark:bg-gray-750 rounded-lg p-4 border border-gray-200 dark:border-gray-600"><div class="flex items-center justify-between mb-3"><span class="text-sm font-medium text-red-600 dark:text-red-400">📉 Expenses</span> <span class="text-lg font-bold text-red-500 dark:text-red-400"> </span></div> <div class="space-y-1 text-xs"></div></div></div> <div class="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800"><div class="flex items-center justify-between"><span class="text-sm font-medium text-blue-700 dark:text-blue-300">💰 Net Flow</span> <span> </span></div></div></div>', 1), zl = /* @__PURE__ */ P('<div class="w-full max-w-5xl mx-auto px-4 py-6 font-sans"><div class="mb-6 border-b border-gray-200 dark:border-gray-700"><nav class="flex space-x-8"><button>📊 Accounting</button> <button>📈 Visualizations</button> <button>📋 Records</button> <button class="ml-auto py-3 px-3 text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 disabled:opacity-50">↻ Refresh</button></nav></div> <!> <!></div>');
function ql(e, t) {
  os(t, !0);
  const r = t.ctx.theme?.cn ?? ((...h) => h.filter(Boolean).join(" "));
  let a = /* @__PURE__ */ W("accounting"), n = /* @__PURE__ */ W(st([])), i = /* @__PURE__ */ W(st([])), d = /* @__PURE__ */ W(st([])), u = /* @__PURE__ */ W(st([])), l = /* @__PURE__ */ W(!0), c = /* @__PURE__ */ W("");
  const g = {
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
  }, p = 50;
  async function v(h, b = 100, E = "desc") {
    const U = [];
    let D = 0, N = 1;
    for (; D < N && U.length < b; ) {
      const j = Math.min(p, b - U.length), F = await t.ctx.backend.get_objects_paginated(h, D, j, E), ue = typeof F == "string" ? JSON.parse(F) : F;
      if (ue?.success && ue?.data?.objectsListPaginated) {
        const Pe = ue.data.objectsListPaginated.objects.map((yt) => JSON.parse(yt));
        U.push(...Pe);
        const qt = ue.data.objectsListPaginated.pagination;
        if (N = Number(qt?.total_pages ?? 1), Pe.length < j) break;
      } else {
        const Pe = ue?.data ?? (Array.isArray(ue) ? ue : []);
        U.push(...Pe);
        break;
      }
      D++;
    }
    return U;
  }
  async function m() {
    O(l, !0), O(c, "");
    try {
      const [h, b, E, U] = await Promise.all([
        v("Budget", 100, "asc"),
        v("LedgerEntry", 1e3, "desc"),
        v("Fund", 100, "asc"),
        v("FiscalPeriod", 100, "desc")
      ]);
      O(n, h, !0), O(i, b, !0), O(d, E, !0), O(u, U, !0);
    } catch (h) {
      O(c, h?.message || String(h), !0);
    } finally {
      O(l, !1);
    }
  }
  qn(() => {
    m();
  });
  function k(h) {
    if (h == null) return "—";
    const b = Number(h);
    return isNaN(b) ? String(h) : b.toLocaleString(void 0, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }
  function w(h) {
    return h >= 1e6 ? `${(h / 1e6).toFixed(2)}M` : h >= 1e3 ? `${(h / 1e3).toFixed(1)}K` : h.toLocaleString();
  }
  function y(h) {
    return h.split("_").map((b) => b.charAt(0).toUpperCase() + b.slice(1)).join(" ");
  }
  let C = /* @__PURE__ */ me(() => {
    const h = {}, b = {}, E = {};
    for (const j of s(i)) {
      const F = j.category || "other", ue = j.debit || 0, Pe = j.credit || 0;
      switch (j.entry_type) {
        case "asset":
          h[F] = (h[F] || 0) + ue - Pe;
          break;
        case "liability":
          b[F] = (b[F] || 0) + Pe - ue;
          break;
        case "equity":
          E[F] = (E[F] || 0) + Pe - ue;
          break;
      }
    }
    const U = Object.values(h).reduce((j, F) => j + F, 0), D = Object.values(b).reduce((j, F) => j + F, 0), N = Object.values(E).reduce((j, F) => j + F, 0);
    return {
      assets: h,
      liabilities: b,
      equity: E,
      totalAssets: U,
      totalLiabilities: D,
      totalEquity: N,
      netPosition: U - D
    };
  }), Y = /* @__PURE__ */ me(() => {
    const h = {}, b = {};
    for (const D of s(i)) {
      const N = D.category || "other";
      D.entry_type === "revenue" ? h[N] = (h[N] || 0) + (D.credit || 0) - (D.debit || 0) : D.entry_type === "expense" && (b[N] = (b[N] || 0) + (D.debit || 0) - (D.credit || 0));
    }
    const E = Object.values(h).reduce((D, N) => D + N, 0), U = Object.values(b).reduce((D, N) => D + N, 0);
    return {
      revenues: h,
      expenses: b,
      totalRevenues: E,
      totalExpenses: U,
      netIncome: E - U
    };
  }), H = /* @__PURE__ */ me(() => {
    let h = 0, b = 0, E = 0;
    for (const U of s(i).filter((D) => D.category === "cash")) {
      const D = (U.debit || 0) - (U.credit || 0), N = U.tags || "";
      N.includes("investing") || N.includes("capital") ? b += D : N.includes("financing") || N.includes("bond") ? E += D : h += D;
    }
    return {
      operating: h,
      investing: b,
      financing: E,
      netChange: h + b + E
    };
  }), ke = /* @__PURE__ */ me(() => s(n).filter((h) => h.budget_type === "expense" && (h.actual_amount || 0) > 0).map((h, b) => ({
    label: h.name || h.category || "Other",
    amount: h.actual_amount || 0,
    color: g[h.category] || `hsl(217, 91%, ${30 + b * 10}%)`
  }))), Oe = /* @__PURE__ */ me(() => {
    const h = {};
    for (const b of s(d))
      h[b.code] = {
        name: b.name || b.code,
        balance: 0,
        color: g[b.fund_type] || "#3B82F6"
      };
    for (const b of s(i))
      if (b.fund && b.category === "cash") {
        const E = typeof b.fund == "string" ? b.fund : b.fund.code;
        h[E] && (h[E].balance += (b.debit || 0) - (b.credit || 0));
      }
    return Object.entries(h).filter(([, b]) => b.balance > 0).map(([b, E]) => ({ symbol: b, ...E }));
  }), ut = /* @__PURE__ */ me(() => {
    const h = {};
    for (const b of s(i).filter((E) => E.entry_type === "revenue" && (E.credit || 0) > 0)) {
      const E = b.description || b.category || "Other";
      h[E] || (h[E] = {
        name: E,
        type: b.category === "tax" ? "citizen" : "organization",
        contribution: 0,
        color: b.category === "tax" ? "#3B82F6" : "#10B981"
      }), h[E].contribution += b.credit;
    }
    return Object.values(h);
  }), se = /* @__PURE__ */ me(() => {
    const h = {}, b = {};
    for (const j of s(i))
      if (j.entry_type === "revenue" && (j.credit || 0) > 0) {
        const F = j.category || "other";
        h[F] = (h[F] || 0) + j.credit;
      } else if (j.entry_type === "expense" && (j.debit || 0) > 0) {
        const F = j.category || "other";
        b[F] = (b[F] || 0) + j.debit;
      }
    const E = Object.entries(h).map(([j, F]) => ({ category: y(j), amount: F })), U = Object.entries(b).map(([j, F]) => ({ category: y(j), amount: F })), D = E.reduce((j, F) => j + F.amount, 0), N = U.reduce((j, F) => j + F.amount, 0);
    return {
      income: E,
      expenses: U,
      totalIncome: D,
      totalExpenses: N,
      net: D - N
    };
  });
  function rt(h, b) {
    return b <= 0 ? "0%" : `${Math.min(100, h / b * 100).toFixed(1)}%`;
  }
  const Tt = ["LedgerEntry", "Budget", "Fund", "FiscalPeriod"], fe = 50;
  let $t = /* @__PURE__ */ W("LedgerEntry"), Me = /* @__PURE__ */ W(0), ua = /* @__PURE__ */ W(st([])), hr = /* @__PURE__ */ W(0), Ia = /* @__PURE__ */ W(0), La = /* @__PURE__ */ W(!1), ca = /* @__PURE__ */ W(""), va = /* @__PURE__ */ W(st([])), Br = /* @__PURE__ */ W(!1), zt = /* @__PURE__ */ W("");
  async function Ra() {
    O(La, !0), O(ca, "");
    try {
      const h = await t.ctx.backend.get_objects_paginated(s($t), s(Me), fe, "desc"), b = typeof h == "string" ? JSON.parse(h) : h;
      if (b?.success && b?.data?.objectsListPaginated) {
        const E = b.data.objectsListPaginated.objects.map((D) => JSON.parse(D)), U = b.data.objectsListPaginated.pagination;
        O(ua, E, !0), O(Ia, Number(U?.total_items_count ?? 0), !0), O(hr, Number(U?.total_pages ?? 1), !0), E.length > 0 && O(va, Object.keys(E[0]).filter((D) => !D.startsWith("_")), !0);
      } else
        O(ua, [], !0), O(Ia, 0), O(hr, 0), O(va, [], !0);
    } catch (h) {
      O(ca, h?.message || String(h), !0);
    } finally {
      O(La, !1);
    }
  }
  function ga(h) {
    O(Me, h, !0), Ra();
  }
  function qs(h) {
    O($t, h, !0), O(Me, 0), Ra();
  }
  async function Vs() {
    O(Br, !0), O(zt, "Starting...");
    try {
      await rl({
        backend: t.ctx.backend,
        entity: s($t),
        pageSize: fe,
        order: "desc",
        onProgress: (b) => {
          O(zt, b, !0);
        }
      }) === 0 && O(zt, "No data to export.");
    } catch (h) {
      O(zt, "Error: " + (h?.message || String(h)));
    } finally {
      O(Br, !1);
    }
  }
  let mn = !1;
  qn(() => {
    s(a) === "records" && !mn && (mn = !0, Ra());
  });
  var kn = zl(), wn = f(kn), Us = f(wn), Ma = f(Us), Ba = _(Ma, 2), $a = _(Ba, 2), En = _($a, 2), Sn = _(wn, 2);
  {
    var Hs = (h) => {
      var b = al(), E = f(b);
      z(() => x(E, s(c))), A(h, b);
    };
    Be(Sn, (h) => {
      s(c) && h(Hs);
    });
  }
  var Ys = _(Sn, 2);
  {
    var Js = (h) => {
      var b = nl();
      A(h, b);
    }, Gs = (h) => {
      var b = Gn(), E = Xt(b);
      {
        var U = (N) => {
          var j = sl();
          A(N, j);
        }, D = (N) => {
          var j = _l(), F = Xt(j), ue = f(F), Pe = _(f(ue), 2), qt = f(Pe), yt = _(ue, 2), $r = _(f(yt), 2), zr = f($r), br = _(yt, 2), qr = _(f(br), 2), yr = f(qr), G = _(br, 2), Z = _(f(G), 2), de = f(Z), Ue = _(F, 2), xt = _(f(Ue), 2), Vt = f(xt), Ut = f(Vt), Vr = _(f(Ut), 2), xr = f(Vr);
          Ee(xr, 17, () => Object.entries(s(C).assets), we, (oe, te) => {
            var re = /* @__PURE__ */ me(() => Gr(s(te), 2));
            let _e = () => s(re)[0], he = () => s(re)[1];
            var K = il(), L = f(K), le = f(L), ce = _(L, 2), be = f(ce);
            z(
              (ye, xe) => {
                x(le, ye), x(be, xe);
              },
              [() => y(_e()), () => w(he())]
            ), A(oe, K);
          });
          var Ht = _(xr, 2), Yt = _(f(Ht), 2), Jt = f(Yt), mr = _(Ut, 2), Gt = _(f(mr), 2), Kt = f(Gt);
          Ee(Kt, 17, () => Object.entries(s(C).liabilities), we, (oe, te) => {
            var re = /* @__PURE__ */ me(() => Gr(s(te), 2));
            let _e = () => s(re)[0], he = () => s(re)[1];
            var K = ol(), L = f(K), le = f(L), ce = _(L, 2), be = f(ce);
            z(
              (ye, xe) => {
                x(le, ye), x(be, xe);
              },
              [() => y(_e()), () => w(he())]
            ), A(oe, K);
          });
          var Wt = _(Kt, 2), Te = _(f(Wt), 2), mt = f(Te), kt = _(mr, 2), B = _(f(kt), 2), $ = f(B);
          Ee($, 17, () => Object.entries(s(C).equity), we, (oe, te) => {
            var re = /* @__PURE__ */ me(() => Gr(s(te), 2));
            let _e = () => s(re)[0], he = () => s(re)[1];
            var K = ll(), L = f(K), le = f(L), ce = _(L, 2), be = f(ce);
            z(
              (ye, xe) => {
                x(le, ye), x(be, xe);
              },
              [() => y(_e()), () => w(he())]
            ), A(oe, K);
          });
          var ie = _($, 2), Q = _(f(ie), 2), X = f(Q), je = _(Ue, 2), Ce = _(f(je), 2), J = f(Ce), ee = f(J), pe = _(f(ee), 2), at = f(pe);
          Ee(at, 17, () => Object.entries(s(Y).revenues), we, (oe, te) => {
            var re = /* @__PURE__ */ me(() => Gr(s(te), 2));
            let _e = () => s(re)[0], he = () => s(re)[1];
            var K = dl(), L = f(K), le = f(L), ce = _(L, 2), be = f(ce);
            z(
              (ye, xe) => {
                x(le, ye), x(be, `+${xe ?? ""}`);
              },
              [() => y(_e()), () => w(he())]
            ), A(oe, K);
          });
          var Ct = _(at, 2), Nt = _(f(Ct), 2), Zt = f(Nt), Qt = _(ee, 2), Ur = _(f(Qt), 2), kr = f(Ur);
          Ee(kr, 17, () => Object.entries(s(Y).expenses), we, (oe, te) => {
            var re = /* @__PURE__ */ me(() => Gr(s(te), 2));
            let _e = () => s(re)[0], he = () => s(re)[1];
            var K = fl(), L = f(K), le = f(L), ce = _(L, 2), be = f(ce);
            z(
              (ye, xe) => {
                x(le, ye), x(be, `-${xe ?? ""}`);
              },
              [() => y(_e()), () => w(he())]
            ), A(oe, K);
          });
          var Hr = _(kr, 2), za = _(f(Hr), 2), qa = f(za), Zs = _(J, 2), Qs = f(Zs), An = f(Qs), Xs = f(An), jn = _(An, 2), ei = f(jn), Tn = _(je, 2), ti = _(f(Tn), 2), Cn = f(ti);
          Ee(
            Cn,
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
            we,
            (oe, te) => {
              var re = ul(), _e = f(re), he = f(_e), K = f(he), L = _(he, 2), le = f(L), ce = _(_e, 2), be = f(ce);
              z(
                (ye, xe) => {
                  x(K, s(te).label), x(le, s(te).sub), Ye(ce, 1, ye), x(be, `${s(te).value >= 0 ? "+" : ""}${xe ?? ""}`);
                },
                [
                  () => He(r("text-lg font-semibold", s(te).value >= 0 ? "text-blue-800 dark:text-blue-400" : "text-red-600 dark:text-red-400")),
                  () => w(s(te).value)
                ]
              ), A(oe, re);
            }
          );
          var ri = _(Cn, 2), Nn = _(f(ri), 2), ai = f(Nn), Fn = _(Tn, 2);
          {
            var ni = (oe) => {
              var te = vl(), re = _(f(te), 2), _e = f(re);
              Ee(_e, 21, () => s(d), we, (he, K) => {
                var L = cl(), le = f(L), ce = f(le), be = f(ce), ye = _(ce, 2), xe = f(ye), Yr = _(le, 2), Jr = f(Yr);
                z(() => {
                  x(be, s(K).name || s(K).code), x(xe, s(K).fund_type || "general"), x(Jr, s(K).description || "No description");
                }), A(he, L);
              }), A(oe, te);
            };
            Be(Fn, (oe) => {
              s(d).length > 0 && oe(ni);
            });
          }
          var On = _(Fn, 2);
          {
            var si = (oe) => {
              var te = pl(), re = _(f(te), 2), _e = f(re), he = _(f(_e));
              Ee(he, 21, () => s(n), we, (K, L) => {
                const le = /* @__PURE__ */ me(() => (s(L).actual_amount || 0) - (s(L).planned_amount || 0)), ce = /* @__PURE__ */ me(() => s(L).planned_amount ? (s(le) / s(L).planned_amount * 100).toFixed(1) : "0");
                var be = gl(), ye = f(be), xe = f(ye), Yr = f(xe), Jr = _(xe, 2), li = f(Jr), Pn = _(ye), di = f(Pn), Dn = _(Pn), fi = f(Dn), Va = _(Dn), ui = f(Va), ci = _(Va), In = f(ci), vi = f(In);
                z(
                  (gi, pi, _i, hi, bi) => {
                    x(Yr, s(L).name || s(L).category), x(li, s(L).budget_type || "expense"), x(di, gi), x(fi, pi), Ye(Va, 1, _i), x(ui, `${s(le) >= 0 ? "+" : ""}${hi ?? ""} (${s(ce) ?? ""}%)`), Ye(In, 1, bi), x(vi, s(L).status || "draft");
                  },
                  [
                    () => w(s(L).planned_amount || 0),
                    () => w(s(L).actual_amount || 0),
                    () => He(r("py-3 px-4 text-right", s(le) >= 0 ? "text-blue-700 dark:text-blue-400" : "text-red-500 dark:text-red-400")),
                    () => w(s(le)),
                    () => He(r("px-2 py-1 text-xs rounded-full", s(L).status === "adopted" ? "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400" : s(L).status === "draft" ? "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400" : "bg-gray-50 dark:bg-gray-700 text-gray-500 dark:text-gray-400"))
                  ]
                ), A(K, be);
              }), A(oe, te);
            };
            Be(On, (oe) => {
              s(n).length > 0 && oe(si);
            });
          }
          var ii = _(On, 2), oi = f(ii);
          z(
            (oe, te, re, _e, he, K, L, le, ce, be, ye, xe, Yr, Jr) => {
              x(qt, oe), x(zr, te), x(yr, re), Ye(Z, 1, _e), x(de, `${s(Y).netIncome >= 0 ? "+" : ""}${he ?? ""}`), x(Jt, K), x(mt, L), x(X, le), x(Zt, ce), x(qa, be), x(Xs, `Net Income (${s(Y).netIncome >= 0 ? "Surplus" : "Deficit"})`), Ye(jn, 1, ye), x(ei, `${s(Y).netIncome >= 0 ? "+" : ""}${xe ?? ""}`), Ye(Nn, 1, Yr), x(ai, `${s(H).netChange >= 0 ? "+" : ""}${Jr ?? ""}`), x(oi, `${s(i).length ?? ""} ledger entries · ${s(d).length ?? ""} funds · ${s(n).length ?? ""} budgets`);
            },
            [
              () => w(s(C).totalAssets),
              () => w(s(C).totalLiabilities),
              () => w(s(C).netPosition),
              () => He(r("text-2xl font-bold", s(Y).netIncome >= 0 ? "text-green-700 dark:text-green-400" : "text-red-600 dark:text-red-400")),
              () => w(s(Y).netIncome),
              () => w(s(C).totalAssets),
              () => w(s(C).totalLiabilities),
              () => w(s(C).netPosition),
              () => w(s(Y).totalRevenues),
              () => w(s(Y).totalExpenses),
              () => He(r("text-xl font-bold", s(Y).netIncome >= 0 ? "text-blue-800 dark:text-blue-300" : "text-red-600 dark:text-red-400")),
              () => w(s(Y).netIncome),
              () => He(r("text-xl font-bold", s(H).netChange >= 0 ? "text-blue-800 dark:text-blue-400" : "text-red-600 dark:text-red-400")),
              () => w(s(H).netChange)
            ]
          ), A(N, j);
        };
        Be(E, (N) => {
          s(i).length === 0 && s(d).length === 0 && s(n).length === 0 ? N(U) : N(D, -1);
        });
      }
      A(h, b);
    }, Ks = (h) => {
      var b = jl(), E = Xt(b), U = f(E), D = _(f(U), 2);
      Ee(D, 21, () => Tt, we, (G, Z) => {
        var de = hl(), Ue = f(de), xt = {};
        z(() => {
          Go(de, s(Z) === s($t)), x(Ue, s(Z)), xt !== (xt = s(Z)) && (de.value = (de.__value = s(Z)) ?? "");
        }), A(G, de);
      });
      var N = _(U, 2), j = f(N), F = _(N, 2);
      {
        var ue = (G) => {
          var Z = bl(), de = f(Z);
          z(() => x(de, s(zt))), A(G, Z);
        };
        Be(F, (G) => {
          s(zt) && !s(Br) && G(ue);
        });
      }
      var Pe = _(F, 2), qt = f(Pe), yt = _(E, 2);
      {
        var $r = (G) => {
          var Z = yl(), de = f(Z);
          z(() => x(de, s(ca))), A(G, Z);
        };
        Be(yt, (G) => {
          s(ca) && G($r);
        });
      }
      var zr = _(yt, 2);
      {
        var br = (G) => {
          var Z = xl(), de = _(f(Z), 2), Ue = f(de);
          z(() => x(Ue, `Loading page ${s(Me) + 1}...`)), A(G, Z);
        }, qr = (G) => {
          var Z = ml(), de = f(Z), Ue = f(de);
          z(() => x(Ue, `No ${s($t) ?? ""} records found.`)), A(G, Z);
        }, yr = (G) => {
          var Z = Al(), de = Xt(Z), Ue = f(de), xt = f(Ue), Vt = f(xt), Ut = f(Vt);
          Ee(Ut, 21, () => s(va), we, (Wt, Te) => {
            var mt = kl(), kt = f(mt);
            z(() => x(kt, s(Te))), A(Wt, mt);
          });
          var Vr = _(Vt);
          Ee(Vr, 21, () => s(ua), we, (Wt, Te, mt) => {
            var kt = Sl();
            Ee(kt, 21, () => s(va), we, (B, $) => {
              var ie = El(), Q = f(ie);
              {
                var X = (J) => {
                  var ee = wl(), pe = f(ee);
                  z((at) => x(pe, at), [() => JSON.stringify(s(Te)[s($)])]), A(J, ee);
                }, je = (J) => {
                  var ee = Jn();
                  z((pe) => x(ee, pe), [() => k(s(Te)[s($)])]), A(J, ee);
                }, Ce = (J) => {
                  var ee = Jn();
                  z(() => x(ee, s(Te)[s($)] ?? "—")), A(J, ee);
                };
                Be(Q, (J) => {
                  typeof s(Te)[s($)] == "object" && s(Te)[s($)] !== null ? J(X) : typeof s(Te)[s($)] == "number" ? J(je, 1) : J(Ce, -1);
                });
              }
              z((J) => Ko(ie, "title", J), [
                () => typeof s(Te)[s($)] == "object" ? JSON.stringify(s(Te)[s($)]) : String(s(Te)[s($)] ?? "")
              ]), A(B, ie);
            }), z((B) => Ye(kt, 1, B), [
              () => He(r("border-b border-gray-100 dark:border-gray-700", mt % 2 === 0 ? "bg-white dark:bg-gray-800" : "bg-gray-50 dark:bg-gray-750"))
            ]), A(Wt, kt);
          });
          var xr = _(de, 2), Ht = f(xr), Yt = _(Ht, 2), Jt = _(Yt, 2), mr = f(Jt), Gt = _(Jt, 2), Kt = _(Gt, 2);
          z(() => {
            Ht.disabled = s(Me) === 0, Yt.disabled = s(Me) === 0, x(mr, `Page ${s(Me) + 1} of ${s(hr) ?? ""}`), Gt.disabled = s(Me) >= s(hr) - 1, Kt.disabled = s(Me) >= s(hr) - 1;
          }), ct("click", Ht, () => ga(0)), ct("click", Yt, () => ga(s(Me) - 1)), ct("click", Gt, () => ga(s(Me) + 1)), ct("click", Kt, () => ga(s(hr) - 1)), A(G, Z);
        };
        Be(zr, (G) => {
          s(La) ? G(br) : s(ua).length === 0 ? G(qr, 1) : G(yr, -1);
        });
      }
      z(() => {
        N.disabled = s(Br), x(j, s(Br) ? s(zt) : "Download CSV"), x(qt, `${s(Ia) ?? ""} total records`);
      }), ct("change", D, (G) => qs(G.target.value)), ct("click", N, Vs), A(h, b);
    }, Ws = (h) => {
      var b = Gn(), E = Xt(b);
      {
        var U = (N) => {
          var j = Tl();
          A(N, j);
        }, D = (N) => {
          var j = $l(), F = Xt(j), ue = f(F), Pe = _(f(ue), 2);
          {
            var qt = (B) => {
              var $ = Cl();
              A(B, $);
            }, yt = (B) => {
              const $ = /* @__PURE__ */ me(() => Math.max(...s(ke).map((Q) => Q.amount)));
              var ie = Fl();
              Ee(ie, 21, () => s(ke), we, (Q, X) => {
                var je = Nl(), Ce = f(je), J = f(Ce), ee = f(J), pe = _(J, 2), at = f(pe), Ct = _(Ce, 2), Nt = f(Ct);
                z(
                  (Zt, Qt) => {
                    x(ee, s(X).label), x(at, Zt), Ga(Nt, `width: ${Qt ?? ""}; background: ${s(X).color ?? ""}`);
                  },
                  [
                    () => w(s(X).amount),
                    () => rt(s(X).amount, s($))
                  ]
                ), A(Q, je);
              }), A(B, ie);
            };
            Be(Pe, (B) => {
              s(ke).length === 0 ? B(qt) : B(yt, -1);
            });
          }
          var $r = _(ue, 2), zr = _(f($r), 2);
          {
            var br = (B) => {
              var $ = Ol();
              A(B, $);
            }, qr = (B) => {
              const $ = /* @__PURE__ */ me(() => Math.max(...s(Oe).map((ee) => ee.balance))), ie = /* @__PURE__ */ me(() => s(Oe).reduce((ee, pe) => ee + pe.balance, 0));
              var Q = Dl(), X = Xt(Q), je = f(X), Ce = f(je), J = _(X, 2);
              Ee(J, 21, () => s(Oe), we, (ee, pe) => {
                var at = Pl(), Ct = f(at), Nt = f(Ct), Zt = f(Nt), Qt = _(Nt, 2), Ur = f(Qt), kr = _(Ct, 2), Hr = f(kr);
                z(
                  (za, qa) => {
                    x(Zt, `${s(pe).name ?? ""} (${s(pe).symbol ?? ""})`), x(Ur, za), Ga(Hr, `width: ${qa ?? ""}; background: ${s(pe).color ?? ""}`);
                  },
                  [
                    () => w(s(pe).balance),
                    () => rt(s(pe).balance, s($))
                  ]
                ), A(ee, at);
              }), z((ee) => x(Ce, ee), [() => w(s(ie))]), A(B, Q);
            };
            Be(zr, (B) => {
              s(Oe).length === 0 ? B(br) : B(qr, -1);
            });
          }
          var yr = _(F, 2), G = _(f(yr), 2);
          {
            var Z = (B) => {
              var $ = Il();
              A(B, $);
            }, de = (B) => {
              const $ = /* @__PURE__ */ me(() => Math.max(...s(ut).map((Q) => Q.contribution)));
              var ie = Rl();
              Ee(ie, 21, () => s(ut).sort((Q, X) => X.contribution - Q.contribution), we, (Q, X) => {
                var je = Ll(), Ce = f(je), J = f(Ce), ee = f(J), pe = _(ee), at = f(pe), Ct = _(J, 2), Nt = f(Ct), Zt = _(Ce, 2), Qt = f(Zt);
                z(
                  (Ur, kr, Hr) => {
                    x(ee, `${s(X).name ?? ""} `), Ye(pe, 1, Ur), x(at, s(X).type), x(Nt, kr), Ga(Qt, `width: ${Hr ?? ""}; background: ${s(X).color ?? ""}`);
                  },
                  [
                    () => He(r("text-xs px-1.5 py-0.5 rounded", s(X).type === "citizen" ? "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400" : "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400")),
                    () => w(s(X).contribution),
                    () => rt(s(X).contribution, s($))
                  ]
                ), A(Q, je);
              }), A(B, ie);
            };
            Be(G, (B) => {
              s(ut).length === 0 ? B(Z) : B(de, -1);
            });
          }
          var Ue = _(yr, 2), xt = _(f(Ue), 2), Vt = f(xt), Ut = f(Vt), Vr = _(f(Ut), 2), xr = f(Vr), Ht = _(Ut, 2);
          Ee(Ht, 21, () => s(se).income, we, (B, $) => {
            var ie = Ml(), Q = f(ie), X = f(Q), je = _(Q, 2), Ce = f(je);
            z(
              (J) => {
                x(X, s($).category), x(Ce, J);
              },
              [() => w(s($).amount)]
            ), A(B, ie);
          });
          var Yt = _(Vt, 2), Jt = f(Yt), mr = _(f(Jt), 2), Gt = f(mr), Kt = _(Jt, 2);
          Ee(Kt, 21, () => s(se).expenses, we, (B, $) => {
            var ie = Bl(), Q = f(ie), X = f(Q), je = _(Q, 2), Ce = f(je);
            z(
              (J) => {
                x(X, s($).category), x(Ce, J);
              },
              [() => w(s($).amount)]
            ), A(B, ie);
          });
          var Wt = _(xt, 2), Te = f(Wt), mt = _(f(Te), 2), kt = f(mt);
          z(
            (B, $, ie, Q) => {
              x(xr, `+${B ?? ""}`), x(Gt, `-${$ ?? ""}`), Ye(mt, 1, ie), x(kt, `${s(se).net >= 0 ? "+" : ""}${Q ?? ""}`);
            },
            [
              () => w(s(se).totalIncome),
              () => w(s(se).totalExpenses),
              () => He(r("text-lg font-bold", s(se).net >= 0 ? "text-blue-800 dark:text-blue-300" : "text-red-600 dark:text-red-400")),
              () => w(s(se).net)
            ]
          ), A(N, j);
        };
        Be(E, (N) => {
          s(i).length === 0 && s(n).length === 0 ? N(U) : N(D, -1);
        });
      }
      A(h, b);
    };
    Be(Ys, (h) => {
      s(l) ? h(Js) : s(a) === "accounting" ? h(Gs, 1) : s(a) === "records" ? h(Ks, 2) : s(a) === "visualizations" && h(Ws, 3);
    });
  }
  z(
    (h, b, E) => {
      Ye(Ma, 1, h), Ye(Ba, 1, b), Ye($a, 1, E), En.disabled = s(l);
    },
    [
      () => He(r("py-3 px-1 border-b-2 font-medium text-sm transition-colors", s(a) === "accounting" ? "border-blue-500 text-blue-600 dark:text-blue-400" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400")),
      () => He(r("py-3 px-1 border-b-2 font-medium text-sm transition-colors", s(a) === "visualizations" ? "border-blue-500 text-blue-600 dark:text-blue-400" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400")),
      () => He(r("py-3 px-1 border-b-2 font-medium text-sm transition-colors", s(a) === "records" ? "border-blue-500 text-blue-600 dark:text-blue-400" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400"))
    ]
  ), ct("click", Ma, () => O(a, "accounting")), ct("click", Ba, () => O(a, "visualizations")), ct("click", $a, () => O(a, "records")), ct("click", En, m), A(e, kn), ls();
}
Oo(["click", "change"]);
function Hl(e, t) {
  const r = Lo(ql, { target: e, props: { ctx: t } });
  return {
    unmount() {
      try {
        Mo(r);
      } catch {
      }
    }
  };
}
export {
  Hl as default
};
