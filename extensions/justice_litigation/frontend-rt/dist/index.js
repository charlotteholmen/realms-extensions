var fa = Object.defineProperty;
var jn = (e) => {
  throw TypeError(e);
};
var ua = (e, t, r) => t in e ? fa(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var Ae = (e, t, r) => ua(e, typeof t != "symbol" ? t + "" : t, r), Wr = (e, t, r) => t.has(e) || jn("Cannot " + r);
var s = (e, t, r) => (Wr(e, t, "read from private field"), r ? r.call(e) : t.get(e)), k = (e, t, r) => t.has(e) ? jn("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), C = (e, t, r, n) => (Wr(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r), F = (e, t, r) => (Wr(e, t, "access private method"), r);
var Qn = Array.isArray, da = Array.prototype.indexOf, qt = Array.prototype.includes, Fr = Array.from, ca = Object.defineProperty, er = Object.getOwnPropertyDescriptor, va = Object.prototype, ha = Array.prototype, pa = Object.getPrototypeOf, In = Object.isExtensible;
const _a = () => {
};
function ga(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function ei() {
  var e, t, r = new Promise((n, i) => {
    e = n, t = i;
  });
  return { promise: r, resolve: e, reject: t };
}
const Z = 2, nr = 4, Or = 8, ti = 1 << 24, je = 16, Re = 32, ut = 64, nn = 128, ye = 512, U = 1024, X = 2048, Ie = 4096, ee = 8192, we = 16384, Rt = 32768, qn = 1 << 25, Bt = 65536, an = 1 << 17, ba = 1 << 18, Jt = 1 << 19, ma = 1 << 20, $e = 1 << 25, Mt = 65536, Mr = 1 << 21, ir = 1 << 22, ft = 1 << 23, Xr = Symbol("$state"), Ge = new class extends Error {
  constructor() {
    super(...arguments);
    Ae(this, "name", "StaleReactionError");
    Ae(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
function xa() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function ya(e, t, r) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function wa(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function ka() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Ea(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Ca() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Sa() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Ta() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Aa() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Ma() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
const Na = 1, Da = 2, Ra = 16, Pa = 1, Fa = 2, Y = Symbol(), Oa = "http://www.w3.org/1999/xhtml";
function Va() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function La() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function ri(e) {
  return e === this.v;
}
function za(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function ni(e) {
  return !za(e, this.v);
}
let Ee = null;
function Ht(e) {
  Ee = e;
}
function ii(e, t = !1, r) {
  Ee = {
    p: Ee,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    r: (
      /** @type {Effect} */
      A
    ),
    l: null
  };
}
function ai(e) {
  var t = (
    /** @type {ComponentContext} */
    Ee
  ), r = t.e;
  if (r !== null) {
    t.e = null;
    for (var n of r)
      Ei(n);
  }
  return t.i = !0, Ee = t.p, /** @type {T} */
  {};
}
function si() {
  return !0;
}
let bt = [];
function li() {
  var e = bt;
  bt = [], ga(e);
}
function Ot(e) {
  if (bt.length === 0 && !tr) {
    var t = bt;
    queueMicrotask(() => {
      t === bt && li();
    });
  }
  bt.push(e);
}
function ja() {
  for (; bt.length > 0; )
    li();
}
function oi(e) {
  var t = A;
  if (t === null)
    return T.f |= ft, e;
  if ((t.f & Rt) === 0 && (t.f & nr) === 0)
    throw e;
  lt(e, t);
}
function lt(e, t) {
  for (; t !== null; ) {
    if ((t.f & nn) !== 0) {
      if ((t.f & Rt) === 0)
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
const Ia = -7169;
function j(e, t) {
  e.f = e.f & Ia | t;
}
function _n(e) {
  (e.f & ye) !== 0 || e.deps === null ? j(e, U) : j(e, Ie);
}
function fi(e) {
  if (e !== null)
    for (const t of e)
      (t.f & Z) === 0 || (t.f & Mt) === 0 || (t.f ^= Mt, fi(
        /** @type {Derived} */
        t.deps
      ));
}
function ui(e, t, r) {
  (e.f & X) !== 0 ? t.add(e) : (e.f & Ie) !== 0 && r.add(e), fi(e.deps), j(e, U);
}
const gt = /* @__PURE__ */ new Set();
let E = null, Ne = null, sn = null, tr = !1, Zr = !1, Pt = null, wr = null;
var Bn = 0;
let qa = 1;
var Vt, Lt, yt, Ke, Ve, lr, ue, or, at, We, Le, zt, jt, wt, q, kr, di, Er, ln, Cr, Ba;
const Dr = class Dr {
  constructor() {
    k(this, q);
    Ae(this, "id", qa++);
    /**
     * The current values of any signals that are updated in this batch.
     * Tuple format: [value, is_derived] (note: is_derived is false for deriveds, too, if they were overridden via assignment)
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Value, [any, boolean]>}
     */
    Ae(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any signals (sources and deriveds) that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Value, any>}
     */
    Ae(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<(batch: Batch) => void>}
     */
    k(this, Vt, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    k(this, Lt, /* @__PURE__ */ new Set());
    /**
     * Callbacks that should run only when a fork is committed.
     * @type {Set<(batch: Batch) => void>}
     */
    k(this, yt, /* @__PURE__ */ new Set());
    /**
     * Async effects that are currently in flight
     * @type {Map<Effect, number>}
     */
    k(this, Ke, /* @__PURE__ */ new Map());
    /**
     * Async effects that are currently in flight, _not_ inside a pending boundary
     * @type {Map<Effect, number>}
     */
    k(this, Ve, /* @__PURE__ */ new Map());
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    k(this, lr, null);
    /**
     * The root effects that need to be flushed
     * @type {Effect[]}
     */
    k(this, ue, []);
    /**
     * Effects created while this batch was active.
     * @type {Effect[]}
     */
    k(this, or, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    k(this, at, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    k(this, We, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    k(this, Le, /* @__PURE__ */ new Map());
    /**
     * Inverse of #skipped_branches which we need to tell prior batches to unskip them when committing
     * @type {Set<Effect>}
     */
    k(this, zt, /* @__PURE__ */ new Set());
    Ae(this, "is_fork", !1);
    k(this, jt, !1);
    /** @type {Set<Batch>} */
    k(this, wt, /* @__PURE__ */ new Set());
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(t) {
    s(this, Le).has(t) || s(this, Le).set(t, { d: [], m: [] }), s(this, zt).delete(t);
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   * @param {(e: Effect) => void} callback
   */
  unskip_effect(t, r = (n) => this.schedule(n)) {
    var n = s(this, Le).get(t);
    if (n) {
      s(this, Le).delete(t);
      for (var i of n.d)
        j(i, X), r(i);
      for (i of n.m)
        j(i, Ie), r(i);
    }
    s(this, zt).add(t);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Value} source
   * @param {any} value
   * @param {boolean} [is_derived]
   */
  capture(t, r, n = !1) {
    t.v !== Y && !this.previous.has(t) && this.previous.set(t, t.v), (t.f & ft) === 0 && (this.current.set(t, [r, n]), Ne?.set(t, r)), this.is_fork || (t.v = r);
  }
  activate() {
    E = this;
  }
  deactivate() {
    E = null, Ne = null;
  }
  flush() {
    try {
      Zr = !0, E = this, F(this, q, Er).call(this);
    } finally {
      Bn = 0, sn = null, Pt = null, wr = null, Zr = !1, E = null, Ne = null, St.clear();
    }
  }
  discard() {
    for (const t of s(this, Lt)) t(this);
    s(this, Lt).clear(), s(this, yt).clear(), gt.delete(this);
  }
  /**
   * @param {Effect} effect
   */
  register_created_effect(t) {
    s(this, or).push(t);
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  increment(t, r) {
    let n = s(this, Ke).get(r) ?? 0;
    if (s(this, Ke).set(r, n + 1), t) {
      let i = s(this, Ve).get(r) ?? 0;
      s(this, Ve).set(r, i + 1);
    }
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   * @param {boolean} skip - whether to skip updates (because this is triggered by a stale reaction)
   */
  decrement(t, r, n) {
    let i = s(this, Ke).get(r) ?? 0;
    if (i === 1 ? s(this, Ke).delete(r) : s(this, Ke).set(r, i - 1), t) {
      let a = s(this, Ve).get(r) ?? 0;
      a === 1 ? s(this, Ve).delete(r) : s(this, Ve).set(r, a - 1);
    }
    s(this, jt) || n || (C(this, jt, !0), Ot(() => {
      C(this, jt, !1), this.flush();
    }));
  }
  /**
   * @param {Set<Effect>} dirty_effects
   * @param {Set<Effect>} maybe_dirty_effects
   */
  transfer_effects(t, r) {
    for (const n of t)
      s(this, at).add(n);
    for (const n of r)
      s(this, We).add(n);
    t.clear(), r.clear();
  }
  /** @param {(batch: Batch) => void} fn */
  oncommit(t) {
    s(this, Vt).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    s(this, Lt).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  on_fork_commit(t) {
    s(this, yt).add(t);
  }
  run_fork_commit_callbacks() {
    for (const t of s(this, yt)) t(this);
    s(this, yt).clear();
  }
  settled() {
    return (s(this, lr) ?? C(this, lr, ei())).promise;
  }
  static ensure() {
    if (E === null) {
      const t = E = new Dr();
      Zr || (gt.add(E), tr || Ot(() => {
        E === t && t.flush();
      }));
    }
    return E;
  }
  apply() {
    {
      Ne = null;
      return;
    }
  }
  /**
   *
   * @param {Effect} effect
   */
  schedule(t) {
    if (sn = t, t.b?.is_pending && (t.f & (nr | Or | ti)) !== 0 && (t.f & Rt) === 0) {
      t.b.defer_effect(t);
      return;
    }
    for (var r = t; r.parent !== null; ) {
      r = r.parent;
      var n = r.f;
      if (Pt !== null && r === A && (T === null || (T.f & Z) === 0))
        return;
      if ((n & (ut | Re)) !== 0) {
        if ((n & U) === 0)
          return;
        r.f ^= U;
      }
    }
    s(this, ue).push(r);
  }
};
Vt = new WeakMap(), Lt = new WeakMap(), yt = new WeakMap(), Ke = new WeakMap(), Ve = new WeakMap(), lr = new WeakMap(), ue = new WeakMap(), or = new WeakMap(), at = new WeakMap(), We = new WeakMap(), Le = new WeakMap(), zt = new WeakMap(), jt = new WeakMap(), wt = new WeakMap(), q = new WeakSet(), kr = function() {
  return this.is_fork || s(this, Ve).size > 0;
}, di = function() {
  for (const n of s(this, wt))
    for (const i of s(n, Ve).keys()) {
      for (var t = !1, r = i; r.parent !== null; ) {
        if (s(this, Le).has(r)) {
          t = !0;
          break;
        }
        r = r.parent;
      }
      if (!t)
        return !0;
    }
  return !1;
}, Er = function() {
  var o;
  if (Bn++ > 1e3 && (gt.delete(this), Ua()), !F(this, q, kr).call(this)) {
    for (const l of s(this, at))
      s(this, We).delete(l), j(l, X), this.schedule(l);
    for (const l of s(this, We))
      j(l, Ie), this.schedule(l);
  }
  const t = s(this, ue);
  C(this, ue, []), this.apply();
  var r = Pt = [], n = [], i = wr = [];
  for (const l of t)
    try {
      F(this, q, ln).call(this, l, r, n);
    } catch (f) {
      throw hi(l), f;
    }
  if (E = null, i.length > 0) {
    var a = Dr.ensure();
    for (const l of i)
      a.schedule(l);
  }
  if (Pt = null, wr = null, F(this, q, kr).call(this) || F(this, q, di).call(this)) {
    F(this, q, Cr).call(this, n), F(this, q, Cr).call(this, r);
    for (const [l, f] of s(this, Le))
      vi(l, f);
  } else {
    s(this, Ke).size === 0 && gt.delete(this), s(this, at).clear(), s(this, We).clear();
    for (const l of s(this, Vt)) l(this);
    s(this, Vt).clear(), Hn(n), Hn(r), s(this, lr)?.resolve();
  }
  var u = (
    /** @type {Batch | null} */
    /** @type {unknown} */
    E
  );
  if (s(this, ue).length > 0) {
    const l = u ?? (u = this);
    s(l, ue).push(...s(this, ue).filter((f) => !s(l, ue).includes(f)));
  }
  u !== null && (gt.add(u), F(o = u, q, Er).call(o));
}, /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
ln = function(t, r, n) {
  t.f ^= U;
  for (var i = t.first; i !== null; ) {
    var a = i.f, u = (a & (Re | ut)) !== 0, o = u && (a & U) !== 0, l = o || (a & ee) !== 0 || s(this, Le).has(i);
    if (!l && i.fn !== null) {
      u ? i.f ^= U : (a & nr) !== 0 ? r.push(i) : hr(i) && ((a & je) !== 0 && s(this, We).add(i), Yt(i));
      var f = i.first;
      if (f !== null) {
        i = f;
        continue;
      }
    }
    for (; i !== null; ) {
      var v = i.next;
      if (v !== null) {
        i = v;
        break;
      }
      i = i.parent;
    }
  }
}, /**
 * @param {Effect[]} effects
 */
Cr = function(t) {
  for (var r = 0; r < t.length; r += 1)
    ui(t[r], s(this, at), s(this, We));
}, Ba = function() {
  var v, _, p;
  for (const h of gt) {
    var t = h.id < this.id, r = [];
    for (const [d, [w, y]] of this.current) {
      if (h.current.has(d)) {
        var n = (
          /** @type {[any, boolean]} */
          h.current.get(d)[0]
        );
        if (t && w !== n)
          h.current.set(d, [w, y]);
        else
          continue;
      }
      r.push(d);
    }
    var i = [...h.current.keys()].filter((d) => !this.current.has(d));
    if (i.length === 0)
      t && h.discard();
    else if (r.length > 0) {
      if (t)
        for (const d of s(this, zt))
          h.unskip_effect(d, (w) => {
            var y;
            (w.f & (je | ir)) !== 0 ? h.schedule(w) : F(y = h, q, Cr).call(y, [w]);
          });
      h.activate();
      var a = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Map();
      for (var o of r)
        ci(o, i, a, u);
      u = /* @__PURE__ */ new Map();
      var l = [...h.current.keys()].filter(
        (d) => this.current.has(d) ? (
          /** @type {[any, boolean]} */
          this.current.get(d)[0] !== d
        ) : !0
      );
      for (const d of s(this, or))
        (d.f & (we | ee | an)) === 0 && gn(d, l, u) && ((d.f & (ir | je)) !== 0 ? (j(d, X), h.schedule(d)) : s(h, at).add(d));
      if (s(h, ue).length > 0) {
        h.apply();
        for (var f of s(h, ue))
          F(v = h, q, ln).call(v, f, [], []);
        C(h, ue, []);
      }
      h.deactivate();
    }
  }
  for (const h of gt)
    s(h, wt).has(this) && (s(h, wt).delete(this), s(h, wt).size === 0 && !F(_ = h, q, kr).call(_) && (h.activate(), F(p = h, q, Er).call(p)));
};
let Nt = Dr;
function Ha(e) {
  var t = tr;
  tr = !0;
  try {
    for (var r; ; ) {
      if (ja(), E === null)
        return (
          /** @type {T} */
          r
        );
      E.flush();
    }
  } finally {
    tr = t;
  }
}
function Ua() {
  try {
    Ca();
  } catch (e) {
    lt(e, sn);
  }
}
let Je = null;
function Hn(e) {
  var t = e.length;
  if (t !== 0) {
    for (var r = 0; r < t; ) {
      var n = e[r++];
      if ((n.f & (we | ee)) === 0 && hr(n) && (Je = /* @__PURE__ */ new Set(), Yt(n), n.deps === null && n.first === null && n.nodes === null && n.teardown === null && n.ac === null && Ti(n), Je?.size > 0)) {
        St.clear();
        for (const i of Je) {
          if ((i.f & (we | ee)) !== 0) continue;
          const a = [i];
          let u = i.parent;
          for (; u !== null; )
            Je.has(u) && (Je.delete(u), a.push(u)), u = u.parent;
          for (let o = a.length - 1; o >= 0; o--) {
            const l = a[o];
            (l.f & (we | ee)) === 0 && Yt(l);
          }
        }
        Je.clear();
      }
    }
    Je = null;
  }
}
function ci(e, t, r, n) {
  if (!r.has(e) && (r.add(e), e.reactions !== null))
    for (const i of e.reactions) {
      const a = i.f;
      (a & Z) !== 0 ? ci(
        /** @type {Derived} */
        i,
        t,
        r,
        n
      ) : (a & (ir | je)) !== 0 && (a & X) === 0 && gn(i, t, n) && (j(i, X), bn(
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
      if (qt.call(t, i))
        return !0;
      if ((i.f & Z) !== 0 && gn(
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
function bn(e) {
  E.schedule(e);
}
function vi(e, t) {
  if (!((e.f & Re) !== 0 && (e.f & U) !== 0)) {
    (e.f & X) !== 0 ? t.d.push(e) : (e.f & Ie) !== 0 && t.m.push(e), j(e, U);
    for (var r = e.first; r !== null; )
      vi(r, t), r = r.next;
  }
}
function hi(e) {
  j(e, U);
  for (var t = e.first; t !== null; )
    hi(t), t = t.next;
}
function Ya(e) {
  let t = 0, r = Dt(0), n;
  return () => {
    wn() && (c(r), Ci(() => (t === 0 && (n = Li(() => e(() => rr(r)))), t += 1, () => {
      Ot(() => {
        t -= 1, t === 0 && (n?.(), n = void 0, rr(r));
      });
    })));
  };
}
var Ja = Bt | Jt;
function Ga(e, t, r, n) {
  new Ka(e, t, r, n);
}
var ge, pn, be, kt, ie, me, Q, de, Xe, Et, st, It, fr, ur, Ze, Rr, L, Wa, Xa, Za, on, Sr, Tr, fn, un;
class Ka {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(t, r, n, i) {
    k(this, L);
    /** @type {Boundary | null} */
    Ae(this, "parent");
    Ae(this, "is_pending", !1);
    /**
     * API-level transformError transform function. Transforms errors before they reach the `failed` snippet.
     * Inherited from parent boundary, or defaults to identity.
     * @type {(error: unknown) => unknown}
     */
    Ae(this, "transform_error");
    /** @type {TemplateNode} */
    k(this, ge);
    /** @type {TemplateNode | null} */
    k(this, pn, null);
    /** @type {BoundaryProps} */
    k(this, be);
    /** @type {((anchor: Node) => void)} */
    k(this, kt);
    /** @type {Effect} */
    k(this, ie);
    /** @type {Effect | null} */
    k(this, me, null);
    /** @type {Effect | null} */
    k(this, Q, null);
    /** @type {Effect | null} */
    k(this, de, null);
    /** @type {DocumentFragment | null} */
    k(this, Xe, null);
    k(this, Et, 0);
    k(this, st, 0);
    k(this, It, !1);
    /** @type {Set<Effect>} */
    k(this, fr, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    k(this, ur, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    k(this, Ze, null);
    k(this, Rr, Ya(() => (C(this, Ze, Dt(s(this, Et))), () => {
      C(this, Ze, null);
    })));
    C(this, ge, t), C(this, be, r), C(this, kt, (a) => {
      var u = (
        /** @type {Effect} */
        A
      );
      u.b = this, u.f |= nn, n(a);
    }), this.parent = /** @type {Effect} */
    A.b, this.transform_error = i ?? this.parent?.transform_error ?? ((a) => a), C(this, ie, kn(() => {
      F(this, L, on).call(this);
    }, Ja));
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    ui(t, s(this, fr), s(this, ur));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!s(this, be).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  update_pending_count(t, r) {
    F(this, L, fn).call(this, t, r), C(this, Et, s(this, Et) + t), !(!s(this, Ze) || s(this, It)) && (C(this, It, !0), Ot(() => {
      C(this, It, !1), s(this, Ze) && Ut(s(this, Ze), s(this, Et));
    }));
  }
  get_effect_pending() {
    return s(this, Rr).call(this), c(
      /** @type {Source<number>} */
      s(this, Ze)
    );
  }
  /** @param {unknown} error */
  error(t) {
    if (!s(this, be).onerror && !s(this, be).failed)
      throw t;
    E?.is_fork ? (s(this, me) && E.skip_effect(s(this, me)), s(this, Q) && E.skip_effect(s(this, Q)), s(this, de) && E.skip_effect(s(this, de)), E.on_fork_commit(() => {
      F(this, L, un).call(this, t);
    })) : F(this, L, un).call(this, t);
  }
}
ge = new WeakMap(), pn = new WeakMap(), be = new WeakMap(), kt = new WeakMap(), ie = new WeakMap(), me = new WeakMap(), Q = new WeakMap(), de = new WeakMap(), Xe = new WeakMap(), Et = new WeakMap(), st = new WeakMap(), It = new WeakMap(), fr = new WeakMap(), ur = new WeakMap(), Ze = new WeakMap(), Rr = new WeakMap(), L = new WeakSet(), Wa = function() {
  try {
    C(this, me, xe(() => s(this, kt).call(this, s(this, ge))));
  } catch (t) {
    this.error(t);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
Xa = function(t) {
  const r = s(this, be).failed;
  r && C(this, de, xe(() => {
    r(
      s(this, ge),
      () => t,
      () => () => {
      }
    );
  }));
}, Za = function() {
  const t = s(this, be).pending;
  t && (this.is_pending = !0, C(this, Q, xe(() => t(s(this, ge)))), Ot(() => {
    var r = C(this, Xe, document.createDocumentFragment()), n = Qe();
    r.append(n), C(this, me, F(this, L, Tr).call(this, () => xe(() => s(this, kt).call(this, n)))), s(this, st) === 0 && (s(this, ge).before(r), C(this, Xe, null), Tt(
      /** @type {Effect} */
      s(this, Q),
      () => {
        C(this, Q, null);
      }
    ), F(this, L, Sr).call(
      this,
      /** @type {Batch} */
      E
    ));
  }));
}, on = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), C(this, st, 0), C(this, Et, 0), C(this, me, xe(() => {
      s(this, kt).call(this, s(this, ge));
    })), s(this, st) > 0) {
      var t = C(this, Xe, document.createDocumentFragment());
      Sn(s(this, me), t);
      const r = (
        /** @type {(anchor: Node) => void} */
        s(this, be).pending
      );
      C(this, Q, xe(() => r(s(this, ge))));
    } else
      F(this, L, Sr).call(
        this,
        /** @type {Batch} */
        E
      );
  } catch (r) {
    this.error(r);
  }
}, /**
 * @param {Batch} batch
 */
Sr = function(t) {
  this.is_pending = !1, t.transfer_effects(s(this, fr), s(this, ur));
}, /**
 * @template T
 * @param {() => T} fn
 */
Tr = function(t) {
  var r = A, n = T, i = Ee;
  qe(s(this, ie)), Ce(s(this, ie)), Ht(s(this, ie).ctx);
  try {
    return Nt.ensure(), t();
  } catch (a) {
    return oi(a), null;
  } finally {
    qe(r), Ce(n), Ht(i);
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
    this.parent && F(n = this.parent, L, fn).call(n, t, r);
    return;
  }
  C(this, st, s(this, st) + t), s(this, st) === 0 && (F(this, L, Sr).call(this, r), s(this, Q) && Tt(s(this, Q), () => {
    C(this, Q, null);
  }), s(this, Xe) && (s(this, ge).before(s(this, Xe)), C(this, Xe, null)));
}, /**
 * @param {unknown} error
 */
un = function(t) {
  s(this, me) && (se(s(this, me)), C(this, me, null)), s(this, Q) && (se(s(this, Q)), C(this, Q, null)), s(this, de) && (se(s(this, de)), C(this, de, null));
  var r = s(this, be).onerror;
  let n = s(this, be).failed;
  var i = !1, a = !1;
  const u = () => {
    if (i) {
      La();
      return;
    }
    i = !0, a && Ma(), s(this, de) !== null && Tt(s(this, de), () => {
      C(this, de, null);
    }), F(this, L, Tr).call(this, () => {
      F(this, L, on).call(this);
    });
  }, o = (l) => {
    try {
      a = !0, r?.(l, u), a = !1;
    } catch (f) {
      lt(f, s(this, ie) && s(this, ie).parent);
    }
    n && C(this, de, F(this, L, Tr).call(this, () => {
      try {
        return xe(() => {
          var f = (
            /** @type {Effect} */
            A
          );
          f.b = this, f.f |= nn, n(
            s(this, ge),
            () => l,
            () => u
          );
        });
      } catch (f) {
        return lt(
          f,
          /** @type {Effect} */
          s(this, ie).parent
        ), null;
      }
    }));
  };
  Ot(() => {
    var l;
    try {
      l = this.transform_error(t);
    } catch (f) {
      lt(f, s(this, ie) && s(this, ie).parent);
      return;
    }
    l !== null && typeof l == "object" && typeof /** @type {any} */
    l.then == "function" ? l.then(
      o,
      /** @param {unknown} e */
      (f) => lt(f, s(this, ie) && s(this, ie).parent)
    ) : o(l);
  });
};
function $a(e, t, r, n) {
  const i = mn;
  var a = e.filter((p) => !p.settled);
  if (r.length === 0 && a.length === 0) {
    n(t.map(i));
    return;
  }
  var u = (
    /** @type {Effect} */
    A
  ), o = Qa(), l = a.length === 1 ? a[0].promise : a.length > 1 ? Promise.all(a.map((p) => p.promise)) : null;
  function f(p) {
    o();
    try {
      n(p);
    } catch (h) {
      (u.f & we) === 0 && lt(h, u);
    }
    Nr();
  }
  if (r.length === 0) {
    l.then(() => f(t.map(i)));
    return;
  }
  var v = pi();
  function _() {
    Promise.all(r.map((p) => /* @__PURE__ */ es(p))).then((p) => f([...t.map(i), ...p])).catch((p) => lt(p, u)).finally(() => v());
  }
  l ? l.then(() => {
    o(), _(), Nr();
  }) : _();
}
function Qa() {
  var e = (
    /** @type {Effect} */
    A
  ), t = T, r = Ee, n = (
    /** @type {Batch} */
    E
  );
  return function(a = !0) {
    qe(e), Ce(t), Ht(r), a && (e.f & we) === 0 && (n?.activate(), n?.apply());
  };
}
function Nr(e = !0) {
  qe(null), Ce(null), Ht(null), e && E?.deactivate();
}
function pi() {
  var e = (
    /** @type {Effect} */
    A
  ), t = (
    /** @type {Boundary} */
    e.b
  ), r = (
    /** @type {Batch} */
    E
  ), n = t.is_rendered();
  return t.update_pending_count(1, r), r.increment(n, e), (i = !1) => {
    t.update_pending_count(-1, r), r.decrement(n, e, i);
  };
}
// @__NO_SIDE_EFFECTS__
function mn(e) {
  var t = Z | X;
  return A !== null && (A.f |= Jt), {
    ctx: Ee,
    deps: null,
    effects: null,
    equals: ri,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      Y
    ),
    wv: 0,
    parent: A,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function es(e, t, r) {
  let n = (
    /** @type {Effect | null} */
    A
  );
  n === null && xa();
  var i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), a = Dt(
    /** @type {V} */
    Y
  ), u = !T, o = /* @__PURE__ */ new Map();
  return ps(() => {
    var l = (
      /** @type {Effect} */
      A
    ), f = ei();
    i = f.promise;
    try {
      Promise.resolve(e()).then(f.resolve, f.reject).finally(Nr);
    } catch (h) {
      f.reject(h), Nr();
    }
    var v = (
      /** @type {Batch} */
      E
    );
    if (u) {
      if ((l.f & Rt) !== 0)
        var _ = pi();
      if (
        /** @type {Boundary} */
        n.b.is_rendered()
      )
        o.get(v)?.reject(Ge), o.delete(v);
      else {
        for (const h of o.values())
          h.reject(Ge);
        o.clear();
      }
      o.set(v, f);
    }
    const p = (h, d = void 0) => {
      if (_) {
        var w = d === Ge;
        _(w);
      }
      if (!(d === Ge || (l.f & we) !== 0)) {
        if (v.activate(), d)
          a.f |= ft, Ut(a, d);
        else {
          (a.f & ft) !== 0 && (a.f ^= ft), Ut(a, h);
          for (const [y, M] of o) {
            if (o.delete(y), y === v) break;
            M.reject(Ge);
          }
        }
        v.deactivate();
      }
    };
    f.promise.then(p, (h) => p(null, h || "unknown"));
  }), vs(() => {
    for (const l of o.values())
      l.reject(Ge);
  }), new Promise((l) => {
    function f(v) {
      function _() {
        v === i ? l(a) : f(i);
      }
      v.then(_, _);
    }
    f(i);
  });
}
// @__NO_SIDE_EFFECTS__
function $r(e) {
  const t = /* @__PURE__ */ mn(e);
  return Ni(t), t;
}
// @__NO_SIDE_EFFECTS__
function ts(e) {
  const t = /* @__PURE__ */ mn(e);
  return t.equals = ni, t;
}
function rs(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var r = 0; r < t.length; r += 1)
      se(
        /** @type {Effect} */
        t[r]
      );
  }
}
function xn(e) {
  var t, r = A, n = e.parent;
  if (!dt && n !== null && (n.f & (we | ee)) !== 0)
    return Va(), e.v;
  qe(n);
  try {
    e.f &= ~Mt, rs(e), t = Fi(e);
  } finally {
    qe(r);
  }
  return t;
}
function _i(e) {
  var t = xn(e);
  if (!e.equals(t) && (e.wv = Ri(), (!E?.is_fork || e.deps === null) && (E !== null ? E.capture(e, t, !0) : e.v = t, e.deps === null))) {
    j(e, U);
    return;
  }
  dt || (Ne !== null ? (wn() || E?.is_fork) && Ne.set(e, t) : _n(e));
}
function ns(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      (t.teardown || t.ac) && (t.teardown?.(), t.ac?.abort(Ge), t.teardown = _a, t.ac = null, ar(t, 0), En(t));
}
function gi(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      t.teardown && Yt(t);
}
let dn = /* @__PURE__ */ new Set();
const St = /* @__PURE__ */ new Map();
let bi = !1;
function Dt(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: ri,
    rv: 0,
    wv: 0
  };
  return r;
}
// @__NO_SIDE_EFFECTS__
function R(e, t) {
  const r = Dt(e);
  return Ni(r), r;
}
// @__NO_SIDE_EFFECTS__
function is(e, t = !1, r = !0) {
  const n = Dt(e);
  return t || (n.equals = ni), n;
}
function m(e, t, r = !1) {
  T !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!De || (T.f & an) !== 0) && si() && (T.f & (Z | je | ir | an)) !== 0 && (ke === null || !qt.call(ke, e)) && Aa();
  let n = r ? Ft(t) : t;
  return Ut(e, n, wr);
}
function Ut(e, t, r = null) {
  if (!e.equals(t)) {
    St.set(e, dt ? t : e.v);
    var n = Nt.ensure();
    if (n.capture(e, t), (e.f & Z) !== 0) {
      const i = (
        /** @type {Derived} */
        e
      );
      (e.f & X) !== 0 && xn(i), Ne === null && _n(i);
    }
    e.wv = Ri(), mi(e, X, r), A !== null && (A.f & U) !== 0 && (A.f & (Re | ut)) === 0 && (_e === null ? bs([e]) : _e.push(e)), !n.is_fork && dn.size > 0 && !bi && as();
  }
  return t;
}
function as() {
  bi = !1;
  for (const e of dn)
    (e.f & U) !== 0 && j(e, Ie), hr(e) && Yt(e);
  dn.clear();
}
function rr(e) {
  m(e, e.v + 1);
}
function mi(e, t, r) {
  var n = e.reactions;
  if (n !== null)
    for (var i = n.length, a = 0; a < i; a++) {
      var u = n[a], o = u.f, l = (o & X) === 0;
      if (l && j(u, t), (o & Z) !== 0) {
        var f = (
          /** @type {Derived} */
          u
        );
        Ne?.delete(f), (o & Mt) === 0 && (o & ye && (A === null || (A.f & Mr) === 0) && (u.f |= Mt), mi(f, Ie, r));
      } else if (l) {
        var v = (
          /** @type {Effect} */
          u
        );
        (o & je) !== 0 && Je !== null && Je.add(v), r !== null ? r.push(v) : bn(v);
      }
    }
}
function Ft(e) {
  if (typeof e != "object" || e === null || Xr in e)
    return e;
  const t = pa(e);
  if (t !== va && t !== ha)
    return e;
  var r = /* @__PURE__ */ new Map(), n = Qn(e), i = /* @__PURE__ */ R(0), a = At, u = (o) => {
    if (At === a)
      return o();
    var l = T, f = At;
    Ce(null), Kn(a);
    var v = o();
    return Ce(l), Kn(f), v;
  };
  return n && r.set("length", /* @__PURE__ */ R(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(o, l, f) {
        (!("value" in f) || f.configurable === !1 || f.enumerable === !1 || f.writable === !1) && Sa();
        var v = r.get(l);
        return v === void 0 ? u(() => {
          var _ = /* @__PURE__ */ R(f.value);
          return r.set(l, _), _;
        }) : m(v, f.value, !0), !0;
      },
      deleteProperty(o, l) {
        var f = r.get(l);
        if (f === void 0) {
          if (l in o) {
            const v = u(() => /* @__PURE__ */ R(Y));
            r.set(l, v), rr(i);
          }
        } else
          m(f, Y), rr(i);
        return !0;
      },
      get(o, l, f) {
        if (l === Xr)
          return e;
        var v = r.get(l), _ = l in o;
        if (v === void 0 && (!_ || er(o, l)?.writable) && (v = u(() => {
          var h = Ft(_ ? o[l] : Y), d = /* @__PURE__ */ R(h);
          return d;
        }), r.set(l, v)), v !== void 0) {
          var p = c(v);
          return p === Y ? void 0 : p;
        }
        return Reflect.get(o, l, f);
      },
      getOwnPropertyDescriptor(o, l) {
        var f = Reflect.getOwnPropertyDescriptor(o, l);
        if (f && "value" in f) {
          var v = r.get(l);
          v && (f.value = c(v));
        } else if (f === void 0) {
          var _ = r.get(l), p = _?.v;
          if (_ !== void 0 && p !== Y)
            return {
              enumerable: !0,
              configurable: !0,
              value: p,
              writable: !0
            };
        }
        return f;
      },
      has(o, l) {
        if (l === Xr)
          return !0;
        var f = r.get(l), v = f !== void 0 && f.v !== Y || Reflect.has(o, l);
        if (f !== void 0 || A !== null && (!v || er(o, l)?.writable)) {
          f === void 0 && (f = u(() => {
            var p = v ? Ft(o[l]) : Y, h = /* @__PURE__ */ R(p);
            return h;
          }), r.set(l, f));
          var _ = c(f);
          if (_ === Y)
            return !1;
        }
        return v;
      },
      set(o, l, f, v) {
        var _ = r.get(l), p = l in o;
        if (n && l === "length")
          for (var h = f; h < /** @type {Source<number>} */
          _.v; h += 1) {
            var d = r.get(h + "");
            d !== void 0 ? m(d, Y) : h in o && (d = u(() => /* @__PURE__ */ R(Y)), r.set(h + "", d));
          }
        if (_ === void 0)
          (!p || er(o, l)?.writable) && (_ = u(() => /* @__PURE__ */ R(void 0)), m(_, Ft(f)), r.set(l, _));
        else {
          p = _.v !== Y;
          var w = u(() => Ft(f));
          m(_, w);
        }
        var y = Reflect.getOwnPropertyDescriptor(o, l);
        if (y?.set && y.set.call(v, f), !p) {
          if (n && typeof l == "string") {
            var M = (
              /** @type {Source<number>} */
              r.get("length")
            ), S = Number(l);
            Number.isInteger(S) && S >= M.v && m(M, S + 1);
          }
          rr(i);
        }
        return !0;
      },
      ownKeys(o) {
        c(i);
        var l = Reflect.ownKeys(o).filter((_) => {
          var p = r.get(_);
          return p === void 0 || p.v !== Y;
        });
        for (var [f, v] of r)
          v.v !== Y && !(f in o) && l.push(f);
        return l;
      },
      setPrototypeOf() {
        Ta();
      }
    }
  );
}
var Un, xi, yi, wi;
function ss() {
  if (Un === void 0) {
    Un = window, xi = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, r = Text.prototype;
    yi = er(t, "firstChild").get, wi = er(t, "nextSibling").get, In(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), In(r) && (r.__t = void 0);
  }
}
function Qe(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function ot(e) {
  return (
    /** @type {TemplateNode | null} */
    yi.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function vr(e) {
  return (
    /** @type {TemplateNode | null} */
    wi.call(e)
  );
}
function b(e, t) {
  return /* @__PURE__ */ ot(e);
}
function Qr(e, t = !1) {
  {
    var r = /* @__PURE__ */ ot(e);
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ vr(r) : r;
  }
}
function x(e, t = 1, r = !1) {
  let n = e;
  for (; t--; )
    n = /** @type {TemplateNode} */
    /* @__PURE__ */ vr(n);
  return n;
}
function ls(e) {
  e.textContent = "";
}
function ki() {
  return !1;
}
function os(e, t, r) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElementNS(Oa, e, void 0)
  );
}
let Yn = !1;
function fs() {
  Yn || (Yn = !0, document.addEventListener(
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
function yn(e) {
  var t = T, r = A;
  Ce(null), qe(null);
  try {
    return e();
  } finally {
    Ce(t), qe(r);
  }
}
function us(e, t, r, n = r) {
  e.addEventListener(t, () => yn(r));
  const i = e.__on_r;
  i ? e.__on_r = () => {
    i(), n(!0);
  } : e.__on_r = () => n(!0), fs();
}
function ds(e) {
  A === null && (T === null && Ea(), ka()), dt && wa();
}
function cs(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function ct(e, t) {
  var r = A;
  r !== null && (r.f & ee) !== 0 && (e |= ee);
  var n = {
    ctx: Ee,
    deps: null,
    nodes: null,
    f: e | X | ye,
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
  E?.register_created_effect(n);
  var i = n;
  if ((e & nr) !== 0)
    Pt !== null ? Pt.push(n) : Nt.ensure().schedule(n);
  else if (t !== null) {
    try {
      Yt(n);
    } catch (u) {
      throw se(n), u;
    }
    i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && // either `null`, or a singular child
    (i.f & Jt) === 0 && (i = i.first, (e & je) !== 0 && (e & Bt) !== 0 && i !== null && (i.f |= Bt));
  }
  if (i !== null && (i.parent = r, r !== null && cs(i, r), T !== null && (T.f & Z) !== 0 && (e & ut) === 0)) {
    var a = (
      /** @type {Derived} */
      T
    );
    (a.effects ?? (a.effects = [])).push(i);
  }
  return n;
}
function wn() {
  return T !== null && !De;
}
function vs(e) {
  const t = ct(Or, null);
  return j(t, U), t.teardown = e, t;
}
function Jn(e) {
  ds();
  var t = (
    /** @type {Effect} */
    A.f
  ), r = !T && (t & Re) !== 0 && (t & Rt) === 0;
  if (r) {
    var n = (
      /** @type {ComponentContext} */
      Ee
    );
    (n.e ?? (n.e = [])).push(e);
  } else
    return Ei(e);
}
function Ei(e) {
  return ct(nr | ma, e);
}
function hs(e) {
  Nt.ensure();
  const t = ct(ut | Jt, e);
  return (r = {}) => new Promise((n) => {
    r.outro ? Tt(t, () => {
      se(t), n(void 0);
    }) : (se(t), n(void 0));
  });
}
function ps(e) {
  return ct(ir | Jt, e);
}
function Ci(e, t = 0) {
  return ct(Or | t, e);
}
function oe(e, t = [], r = [], n = []) {
  $a(n, t, r, (i) => {
    ct(Or, () => e(...i.map(c)));
  });
}
function kn(e, t = 0) {
  var r = ct(je | t, e);
  return r;
}
function xe(e) {
  return ct(Re | Jt, e);
}
function Si(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = dt, n = T;
    Gn(!0), Ce(null);
    try {
      t.call(null);
    } finally {
      Gn(r), Ce(n);
    }
  }
}
function En(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    const i = r.ac;
    i !== null && yn(() => {
      i.abort(Ge);
    });
    var n = r.next;
    (r.f & ut) !== 0 ? r.parent = null : se(r, t), r = n;
  }
}
function _s(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & Re) === 0 && se(t), t = r;
  }
}
function se(e, t = !0) {
  var r = !1;
  (t || (e.f & ba) !== 0) && e.nodes !== null && e.nodes.end !== null && (gs(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), r = !0), j(e, qn), En(e, t && !r), ar(e, 0);
  var n = e.nodes && e.nodes.t;
  if (n !== null)
    for (const a of n)
      a.stop();
  Si(e), e.f ^= qn, e.f |= we;
  var i = e.parent;
  i !== null && i.first !== null && Ti(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function gs(e, t) {
  for (; e !== null; ) {
    var r = e === t ? null : /* @__PURE__ */ vr(e);
    e.remove(), e = r;
  }
}
function Ti(e) {
  var t = e.parent, r = e.prev, n = e.next;
  r !== null && (r.next = n), n !== null && (n.prev = r), t !== null && (t.first === e && (t.first = n), t.last === e && (t.last = r));
}
function Tt(e, t, r = !0) {
  var n = [];
  Ai(e, n, !0);
  var i = () => {
    r && se(e), t && t();
  }, a = n.length;
  if (a > 0) {
    var u = () => --a || i();
    for (var o of n)
      o.out(u);
  } else
    i();
}
function Ai(e, t, r) {
  if ((e.f & ee) === 0) {
    e.f ^= ee;
    var n = e.nodes && e.nodes.t;
    if (n !== null)
      for (const o of n)
        (o.is_global || r) && t.push(o);
    for (var i = e.first; i !== null; ) {
      var a = i.next;
      if ((i.f & ut) === 0) {
        var u = (i.f & Bt) !== 0 || // If this is a branch effect without a block effect parent,
        // it means the parent block effect was pruned. In that case,
        // transparency information was transferred to the branch effect.
        (i.f & Re) !== 0 && (e.f & je) !== 0;
        Ai(i, t, u ? r : !1);
      }
      i = a;
    }
  }
}
function Cn(e) {
  Mi(e, !0);
}
function Mi(e, t) {
  if ((e.f & ee) !== 0) {
    e.f ^= ee, (e.f & U) === 0 && (j(e, X), Nt.ensure().schedule(e));
    for (var r = e.first; r !== null; ) {
      var n = r.next, i = (r.f & Bt) !== 0 || (r.f & Re) !== 0;
      Mi(r, i ? t : !1), r = n;
    }
    var a = e.nodes && e.nodes.t;
    if (a !== null)
      for (const u of a)
        (u.is_global || t) && u.in();
  }
}
function Sn(e, t) {
  if (e.nodes)
    for (var r = e.nodes.start, n = e.nodes.end; r !== null; ) {
      var i = r === n ? null : /* @__PURE__ */ vr(r);
      t.append(r), r = i;
    }
}
let Ar = !1, dt = !1;
function Gn(e) {
  dt = e;
}
let T = null, De = !1;
function Ce(e) {
  T = e;
}
let A = null;
function qe(e) {
  A = e;
}
let ke = null;
function Ni(e) {
  T !== null && (ke === null ? ke = [e] : ke.push(e));
}
let ae = null, fe = 0, _e = null;
function bs(e) {
  _e = e;
}
let Di = 1, mt = 0, At = mt;
function Kn(e) {
  At = e;
}
function Ri() {
  return ++Di;
}
function hr(e) {
  var t = e.f;
  if ((t & X) !== 0)
    return !0;
  if (t & Z && (e.f &= ~Mt), (t & Ie) !== 0) {
    for (var r = (
      /** @type {Value[]} */
      e.deps
    ), n = r.length, i = 0; i < n; i++) {
      var a = r[i];
      if (hr(
        /** @type {Derived} */
        a
      ) && _i(
        /** @type {Derived} */
        a
      ), a.wv > e.wv)
        return !0;
    }
    (t & ye) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    Ne === null && j(e, U);
  }
  return !1;
}
function Pi(e, t, r = !0) {
  var n = e.reactions;
  if (n !== null && !(ke !== null && qt.call(ke, e)))
    for (var i = 0; i < n.length; i++) {
      var a = n[i];
      (a.f & Z) !== 0 ? Pi(
        /** @type {Derived} */
        a,
        t,
        !1
      ) : t === a && (r ? j(a, X) : (a.f & U) !== 0 && j(a, Ie), bn(
        /** @type {Effect} */
        a
      ));
    }
}
function Fi(e) {
  var w;
  var t = ae, r = fe, n = _e, i = T, a = ke, u = Ee, o = De, l = At, f = e.f;
  ae = /** @type {null | Value[]} */
  null, fe = 0, _e = null, T = (f & (Re | ut)) === 0 ? e : null, ke = null, Ht(e.ctx), De = !1, At = ++mt, e.ac !== null && (yn(() => {
    e.ac.abort(Ge);
  }), e.ac = null);
  try {
    e.f |= Mr;
    var v = (
      /** @type {Function} */
      e.fn
    ), _ = v();
    e.f |= Rt;
    var p = e.deps, h = E?.is_fork;
    if (ae !== null) {
      var d;
      if (h || ar(e, fe), p !== null && fe > 0)
        for (p.length = fe + ae.length, d = 0; d < ae.length; d++)
          p[fe + d] = ae[d];
      else
        e.deps = p = ae;
      if (wn() && (e.f & ye) !== 0)
        for (d = fe; d < p.length; d++)
          ((w = p[d]).reactions ?? (w.reactions = [])).push(e);
    } else !h && p !== null && fe < p.length && (ar(e, fe), p.length = fe);
    if (si() && _e !== null && !De && p !== null && (e.f & (Z | Ie | X)) === 0)
      for (d = 0; d < /** @type {Source[]} */
      _e.length; d++)
        Pi(
          _e[d],
          /** @type {Effect} */
          e
        );
    if (i !== null && i !== e) {
      if (mt++, i.deps !== null)
        for (let y = 0; y < r; y += 1)
          i.deps[y].rv = mt;
      if (t !== null)
        for (const y of t)
          y.rv = mt;
      _e !== null && (n === null ? n = _e : n.push(.../** @type {Source[]} */
      _e));
    }
    return (e.f & ft) !== 0 && (e.f ^= ft), _;
  } catch (y) {
    return oi(y);
  } finally {
    e.f ^= Mr, ae = t, fe = r, _e = n, T = i, ke = a, Ht(u), De = o, At = l;
  }
}
function ms(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var n = da.call(r, e);
    if (n !== -1) {
      var i = r.length - 1;
      i === 0 ? r = t.reactions = null : (r[n] = r[i], r.pop());
    }
  }
  if (r === null && (t.f & Z) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (ae === null || !qt.call(ae, t))) {
    var a = (
      /** @type {Derived} */
      t
    );
    (a.f & ye) !== 0 && (a.f ^= ye, a.f &= ~Mt), a.v !== Y && _n(a), ns(a), ar(a, 0);
  }
}
function ar(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var n = t; n < r.length; n++)
      ms(e, r[n]);
}
function Yt(e) {
  var t = e.f;
  if ((t & we) === 0) {
    j(e, U);
    var r = A, n = Ar;
    A = e, Ar = !0;
    try {
      (t & (je | ti)) !== 0 ? _s(e) : En(e), Si(e);
      var i = Fi(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = Di;
      var a;
    } finally {
      Ar = n, A = r;
    }
  }
}
async function xs() {
  await Promise.resolve(), Ha();
}
function c(e) {
  var t = e.f, r = (t & Z) !== 0;
  if (T !== null && !De) {
    var n = A !== null && (A.f & we) !== 0;
    if (!n && (ke === null || !qt.call(ke, e))) {
      var i = T.deps;
      if ((T.f & Mr) !== 0)
        e.rv < mt && (e.rv = mt, ae === null && i !== null && i[fe] === e ? fe++ : ae === null ? ae = [e] : ae.push(e));
      else {
        (T.deps ?? (T.deps = [])).push(e);
        var a = e.reactions;
        a === null ? e.reactions = [T] : qt.call(a, T) || a.push(T);
      }
    }
  }
  if (dt && St.has(e))
    return St.get(e);
  if (r) {
    var u = (
      /** @type {Derived} */
      e
    );
    if (dt) {
      var o = u.v;
      return ((u.f & U) === 0 && u.reactions !== null || Vi(u)) && (o = xn(u)), St.set(u, o), o;
    }
    var l = (u.f & ye) === 0 && !De && T !== null && (Ar || (T.f & ye) !== 0), f = (u.f & Rt) === 0;
    hr(u) && (l && (u.f |= ye), _i(u)), l && !f && (gi(u), Oi(u));
  }
  if (Ne?.has(e))
    return Ne.get(e);
  if ((e.f & ft) !== 0)
    throw e.v;
  return e.v;
}
function Oi(e) {
  if (e.f |= ye, e.deps !== null)
    for (const t of e.deps)
      (t.reactions ?? (t.reactions = [])).push(e), (t.f & Z) !== 0 && (t.f & ye) === 0 && (gi(
        /** @type {Derived} */
        t
      ), Oi(
        /** @type {Derived} */
        t
      ));
}
function Vi(e) {
  if (e.v === Y) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (St.has(t) || (t.f & Z) !== 0 && Vi(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function Li(e) {
  var t = De;
  try {
    return De = !0, e();
  } finally {
    De = t;
  }
}
const ys = ["touchstart", "touchmove"];
function ws(e) {
  return ys.includes(e);
}
const xt = Symbol("events"), zi = /* @__PURE__ */ new Set(), cn = /* @__PURE__ */ new Set();
function Oe(e, t, r) {
  (t[xt] ?? (t[xt] = {}))[e] = r;
}
function ks(e) {
  for (var t = 0; t < e.length; t++)
    zi.add(e[t]);
  for (var r of cn)
    r(e);
}
let Wn = null;
function Xn(e) {
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), n = e.type, i = e.composedPath?.() || [], a = (
    /** @type {null | Element} */
    i[0] || e.target
  );
  Wn = e;
  var u = 0, o = Wn === e && e[xt];
  if (o) {
    var l = i.indexOf(o);
    if (l !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e[xt] = t;
      return;
    }
    var f = i.indexOf(t);
    if (f === -1)
      return;
    l <= f && (u = l);
  }
  if (a = /** @type {Element} */
  i[u] || e.target, a !== t) {
    ca(e, "currentTarget", {
      configurable: !0,
      get() {
        return a || r;
      }
    });
    var v = T, _ = A;
    Ce(null), qe(null);
    try {
      for (var p, h = []; a !== null; ) {
        var d = a.assignedSlot || a.parentNode || /** @type {any} */
        a.host || null;
        try {
          var w = a[xt]?.[n];
          w != null && (!/** @type {any} */
          a.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === a) && w.call(a, e);
        } catch (y) {
          p ? h.push(y) : p = y;
        }
        if (e.cancelBubble || d === t || d === null)
          break;
        a = d;
      }
      if (p) {
        for (let y of h)
          queueMicrotask(() => {
            throw y;
          });
        throw p;
      }
    } finally {
      e[xt] = t, delete e.currentTarget, Ce(v), qe(_);
    }
  }
}
const Es = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (e) => e
  })
);
function Cs(e) {
  return (
    /** @type {string} */
    Es?.createHTML(e) ?? e
  );
}
function ji(e) {
  var t = os("template");
  return t.innerHTML = Cs(e.replaceAll("<!>", "<!---->")), t.content;
}
function sr(e, t) {
  var r = (
    /** @type {Effect} */
    A
  );
  r.nodes === null && (r.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function V(e, t) {
  var r = (t & Pa) !== 0, n = (t & Fa) !== 0, i, a = !e.startsWith("<!>");
  return () => {
    i === void 0 && (i = ji(a ? e : "<!>" + e), r || (i = /** @type {TemplateNode} */
    /* @__PURE__ */ ot(i)));
    var u = (
      /** @type {TemplateNode} */
      n || xi ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (r) {
      var o = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ ot(u)
      ), l = (
        /** @type {TemplateNode} */
        u.lastChild
      );
      sr(o, l);
    } else
      sr(u, u);
    return u;
  };
}
// @__NO_SIDE_EFFECTS__
function Ss(e, t, r = "svg") {
  var n = !e.startsWith("<!>"), i = `<${r}>${n ? e : "<!>" + e}</${r}>`, a;
  return () => {
    if (!a) {
      var u = (
        /** @type {DocumentFragment} */
        ji(i)
      ), o = (
        /** @type {Element} */
        /* @__PURE__ */ ot(u)
      );
      for (a = document.createDocumentFragment(); /* @__PURE__ */ ot(o); )
        a.appendChild(
          /** @type {TemplateNode} */
          /* @__PURE__ */ ot(o)
        );
    }
    var l = (
      /** @type {TemplateNode} */
      a.cloneNode(!0)
    );
    {
      var f = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ ot(l)
      ), v = (
        /** @type {TemplateNode} */
        l.lastChild
      );
      sr(f, v);
    }
    return l;
  };
}
// @__NO_SIDE_EFFECTS__
function Tn(e, t) {
  return /* @__PURE__ */ Ss(e, t, "svg");
}
function en(e = "") {
  {
    var t = Qe(e + "");
    return sr(t, t), t;
  }
}
function Ts() {
  var e = document.createDocumentFragment(), t = document.createComment(""), r = Qe();
  return e.append(t, r), sr(t, r), e;
}
function N(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function z(e, t) {
  var r = t == null ? "" : typeof t == "object" ? `${t}` : t;
  r !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = r, e.nodeValue = `${r}`);
}
function As(e, t) {
  return Ms(e, t);
}
const mr = /* @__PURE__ */ new Map();
function Ms(e, { target: t, anchor: r, props: n = {}, events: i, context: a, intro: u = !0, transformError: o }) {
  ss();
  var l = void 0, f = hs(() => {
    var v = r ?? t.appendChild(Qe());
    Ga(
      /** @type {TemplateNode} */
      v,
      {
        pending: () => {
        }
      },
      (h) => {
        ii({});
        var d = (
          /** @type {ComponentContext} */
          Ee
        );
        a && (d.c = a), i && (n.$$events = i), l = e(h, n) || {}, ai();
      },
      o
    );
    var _ = /* @__PURE__ */ new Set(), p = (h) => {
      for (var d = 0; d < h.length; d++) {
        var w = h[d];
        if (!_.has(w)) {
          _.add(w);
          var y = ws(w);
          for (const B of [t, document]) {
            var M = mr.get(B);
            M === void 0 && (M = /* @__PURE__ */ new Map(), mr.set(B, M));
            var S = M.get(w);
            S === void 0 ? (B.addEventListener(w, Xn, { passive: y }), M.set(w, 1)) : M.set(w, S + 1);
          }
        }
      }
    };
    return p(Fr(zi)), cn.add(p), () => {
      for (var h of _)
        for (const y of [t, document]) {
          var d = (
            /** @type {Map<string, number>} */
            mr.get(y)
          ), w = (
            /** @type {number} */
            d.get(h)
          );
          --w == 0 ? (y.removeEventListener(h, Xn), d.delete(h), d.size === 0 && mr.delete(y)) : d.set(h, w);
        }
      cn.delete(p), v !== r && v.parentNode?.removeChild(v);
    };
  });
  return vn.set(l, f), l;
}
let vn = /* @__PURE__ */ new WeakMap();
function Ns(e, t) {
  const r = vn.get(e);
  return r ? (vn.delete(e), r(t)) : Promise.resolve();
}
var Me, ze, ce, Ct, dr, cr, Pr;
class Ds {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, r = !0) {
    /** @type {TemplateNode} */
    Ae(this, "anchor");
    /** @type {Map<Batch, Key>} */
    k(this, Me, /* @__PURE__ */ new Map());
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
    k(this, ze, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    k(this, ce, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    k(this, Ct, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    k(this, dr, !0);
    /**
     * @param {Batch} batch
     */
    k(this, cr, (t) => {
      if (s(this, Me).has(t)) {
        var r = (
          /** @type {Key} */
          s(this, Me).get(t)
        ), n = s(this, ze).get(r);
        if (n)
          Cn(n), s(this, Ct).delete(r);
        else {
          var i = s(this, ce).get(r);
          i && (s(this, ze).set(r, i.effect), s(this, ce).delete(r), i.fragment.lastChild.remove(), this.anchor.before(i.fragment), n = i.effect);
        }
        for (const [a, u] of s(this, Me)) {
          if (s(this, Me).delete(a), a === t)
            break;
          const o = s(this, ce).get(u);
          o && (se(o.effect), s(this, ce).delete(u));
        }
        for (const [a, u] of s(this, ze)) {
          if (a === r || s(this, Ct).has(a)) continue;
          const o = () => {
            if (Array.from(s(this, Me).values()).includes(a)) {
              var f = document.createDocumentFragment();
              Sn(u, f), f.append(Qe()), s(this, ce).set(a, { effect: u, fragment: f });
            } else
              se(u);
            s(this, Ct).delete(a), s(this, ze).delete(a);
          };
          s(this, dr) || !n ? (s(this, Ct).add(a), Tt(u, o, !1)) : o();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    k(this, Pr, (t) => {
      s(this, Me).delete(t);
      const r = Array.from(s(this, Me).values());
      for (const [n, i] of s(this, ce))
        r.includes(n) || (se(i.effect), s(this, ce).delete(n));
    });
    this.anchor = t, C(this, dr, r);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, r) {
    var n = (
      /** @type {Batch} */
      E
    ), i = ki();
    if (r && !s(this, ze).has(t) && !s(this, ce).has(t))
      if (i) {
        var a = document.createDocumentFragment(), u = Qe();
        a.append(u), s(this, ce).set(t, {
          effect: xe(() => r(u)),
          fragment: a
        });
      } else
        s(this, ze).set(
          t,
          xe(() => r(this.anchor))
        );
    if (s(this, Me).set(n, t), i) {
      for (const [o, l] of s(this, ze))
        o === t ? n.unskip_effect(l) : n.skip_effect(l);
      for (const [o, l] of s(this, ce))
        o === t ? n.unskip_effect(l.effect) : n.skip_effect(l.effect);
      n.oncommit(s(this, cr)), n.ondiscard(s(this, Pr));
    } else
      s(this, cr).call(this, n);
  }
}
Me = new WeakMap(), ze = new WeakMap(), ce = new WeakMap(), Ct = new WeakMap(), dr = new WeakMap(), cr = new WeakMap(), Pr = new WeakMap();
function H(e, t, r = !1) {
  var n = new Ds(e), i = r ? Bt : 0;
  function a(u, o) {
    n.ensure(u, o);
  }
  kn(() => {
    var u = !1;
    t((o, l = 0) => {
      u = !0, a(l, o);
    }), u || a(-1, null);
  }, i);
}
function Rs(e, t, r) {
  for (var n = [], i = t.length, a, u = t.length, o = 0; o < i; o++) {
    let _ = t[o];
    Tt(
      _,
      () => {
        if (a) {
          if (a.pending.delete(_), a.done.add(_), a.pending.size === 0) {
            var p = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            hn(e, Fr(a.done)), p.delete(a), p.size === 0 && (e.outrogroups = null);
          }
        } else
          u -= 1;
      },
      !1
    );
  }
  if (u === 0) {
    var l = n.length === 0 && r !== null;
    if (l) {
      var f = (
        /** @type {Element} */
        r
      ), v = (
        /** @type {Element} */
        f.parentNode
      );
      ls(v), v.append(f), e.items.clear();
    }
    hn(e, t, !l);
  } else
    a = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ?? (e.outrogroups = /* @__PURE__ */ new Set())).add(a);
}
function hn(e, t, r = !0) {
  var n;
  if (e.pending.size > 0) {
    n = /* @__PURE__ */ new Set();
    for (const u of e.pending.values())
      for (const o of u)
        n.add(
          /** @type {EachItem} */
          e.items.get(o).e
        );
  }
  for (var i = 0; i < t.length; i++) {
    var a = t[i];
    if (n?.has(a)) {
      a.f |= $e;
      const u = document.createDocumentFragment();
      Sn(a, u);
    } else
      se(t[i], r);
  }
}
var Zn;
function Ps(e, t, r, n, i, a = null) {
  var u = e, o = /* @__PURE__ */ new Map();
  {
    var l = (
      /** @type {Element} */
      e
    );
    u = l.appendChild(Qe());
  }
  var f = null, v = /* @__PURE__ */ ts(() => {
    var S = r();
    return Qn(S) ? S : S == null ? [] : Fr(S);
  }), _, p = /* @__PURE__ */ new Map(), h = !0;
  function d(S) {
    (M.effect.f & we) === 0 && (M.pending.delete(S), M.fallback = f, Fs(M, _, u, t, n), f !== null && (_.length === 0 ? (f.f & $e) === 0 ? Cn(f) : (f.f ^= $e, Qt(f, null, u)) : Tt(f, () => {
      f = null;
    })));
  }
  function w(S) {
    M.pending.delete(S);
  }
  var y = kn(() => {
    _ = /** @type {V[]} */
    c(v);
    for (var S = _.length, B = /* @__PURE__ */ new Set(), G = (
      /** @type {Batch} */
      E
    ), Be = ki(), Pe = 0; Pe < S; Pe += 1) {
      var vt = _[Pe], $ = n(vt, Pe), te = h ? null : o.get($);
      te ? (te.v && Ut(te.v, vt), te.i && Ut(te.i, Pe), Be && G.unskip_effect(te.e)) : (te = Os(
        o,
        h ? u : Zn ?? (Zn = Qe()),
        vt,
        $,
        Pe,
        i,
        t,
        r
      ), h || (te.e.f |= $e), o.set($, te)), B.add($);
    }
    if (S === 0 && a && !f && (h ? f = xe(() => a(u)) : (f = xe(() => a(Zn ?? (Zn = Qe()))), f.f |= $e)), S > B.size && ya(), !h)
      if (p.set(G, B), Be) {
        for (const [Vr, Lr] of o)
          B.has(Vr) || G.skip_effect(Lr.e);
        G.oncommit(d), G.ondiscard(w);
      } else
        d(G);
    c(v);
  }), M = { effect: y, items: o, pending: p, outrogroups: null, fallback: f };
  h = !1;
}
function $t(e) {
  for (; e !== null && (e.f & Re) === 0; )
    e = e.next;
  return e;
}
function Fs(e, t, r, n, i) {
  var a = t.length, u = e.items, o = $t(e.effect.first), l, f = null, v = [], _ = [], p, h, d, w;
  for (w = 0; w < a; w += 1) {
    if (p = t[w], h = i(p, w), d = /** @type {EachItem} */
    u.get(h).e, e.outrogroups !== null)
      for (const $ of e.outrogroups)
        $.pending.delete(d), $.done.delete(d);
    if ((d.f & ee) !== 0 && Cn(d), (d.f & $e) !== 0)
      if (d.f ^= $e, d === o)
        Qt(d, null, r);
      else {
        var y = f ? f.next : o;
        d === e.effect.last && (e.effect.last = d.prev), d.prev && (d.prev.next = d.next), d.next && (d.next.prev = d.prev), it(e, f, d), it(e, d, y), Qt(d, y, r), f = d, v = [], _ = [], o = $t(f.next);
        continue;
      }
    if (d !== o) {
      if (l !== void 0 && l.has(d)) {
        if (v.length < _.length) {
          var M = _[0], S;
          f = M.prev;
          var B = v[0], G = v[v.length - 1];
          for (S = 0; S < v.length; S += 1)
            Qt(v[S], M, r);
          for (S = 0; S < _.length; S += 1)
            l.delete(_[S]);
          it(e, B.prev, G.next), it(e, f, B), it(e, G, M), o = M, f = G, w -= 1, v = [], _ = [];
        } else
          l.delete(d), Qt(d, o, r), it(e, d.prev, d.next), it(e, d, f === null ? e.effect.first : f.next), it(e, f, d), f = d;
        continue;
      }
      for (v = [], _ = []; o !== null && o !== d; )
        (l ?? (l = /* @__PURE__ */ new Set())).add(o), _.push(o), o = $t(o.next);
      if (o === null)
        continue;
    }
    (d.f & $e) === 0 && v.push(d), f = d, o = $t(d.next);
  }
  if (e.outrogroups !== null) {
    for (const $ of e.outrogroups)
      $.pending.size === 0 && (hn(e, Fr($.done)), e.outrogroups?.delete($));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (o !== null || l !== void 0) {
    var Be = [];
    if (l !== void 0)
      for (d of l)
        (d.f & ee) === 0 && Be.push(d);
    for (; o !== null; )
      (o.f & ee) === 0 && o !== e.fallback && Be.push(o), o = $t(o.next);
    var Pe = Be.length;
    if (Pe > 0) {
      var vt = a === 0 ? r : null;
      Rs(e, Be, vt);
    }
  }
}
function Os(e, t, r, n, i, a, u, o) {
  var l = (u & Na) !== 0 ? (u & Ra) === 0 ? /* @__PURE__ */ is(r, !1, !1) : Dt(r) : null, f = (u & Da) !== 0 ? Dt(i) : null;
  return {
    v: l,
    i: f,
    e: xe(() => (a(t, l ?? r, f ?? i, o), () => {
      e.delete(n);
    }))
  };
}
function Qt(e, t, r) {
  if (e.nodes)
    for (var n = e.nodes.start, i = e.nodes.end, a = t && (t.f & $e) === 0 ? (
      /** @type {EffectNodes} */
      t.nodes.start
    ) : r; n !== null; ) {
      var u = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ vr(n)
      );
      if (a.before(n), n === i)
        return;
      n = u;
    }
}
function it(e, t, r) {
  t === null ? e.effect.first = r : t.next = r, r === null ? e.effect.last = t : r.prev = t;
}
function Vs(e, t, r) {
  var n = e == null ? "" : "" + e;
  return n === "" ? null : n;
}
function xr(e, t, r, n, i, a) {
  var u = e.__className;
  if (u !== r || u === void 0) {
    var o = Vs(r);
    o == null ? e.removeAttribute("class") : e.className = o, e.__className = r;
  }
  return a;
}
function yr(e, t, r = t) {
  var n = /* @__PURE__ */ new WeakSet();
  us(e, "input", async (i) => {
    var a = i ? e.defaultValue : e.value;
    if (a = tn(e) ? rn(a) : a, r(a), E !== null && n.add(E), await xs(), a !== (a = t())) {
      var u = e.selectionStart, o = e.selectionEnd, l = e.value.length;
      if (e.value = a ?? "", o !== null) {
        var f = e.value.length;
        u === o && o === l && f > l ? (e.selectionStart = f, e.selectionEnd = f) : (e.selectionStart = u, e.selectionEnd = Math.min(o, f));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  Li(t) == null && e.value && (r(tn(e) ? rn(e.value) : e.value), E !== null && n.add(E)), Ci(() => {
    var i = t();
    if (e === document.activeElement) {
      var a = (
        /** @type {Batch} */
        E
      );
      if (n.has(a))
        return;
    }
    tn(e) && i === rn(e.value) || e.type === "date" && !i && !e.value || i !== e.value && (e.value = i ?? "");
  });
}
function tn(e) {
  var t = e.type;
  return t === "number" || t === "range";
}
function rn(e) {
  return e === "" ? null : +e;
}
const Ls = "5";
var $n;
typeof window < "u" && (($n = window.__svelte ?? (window.__svelte = {})).v ?? ($n.v = /* @__PURE__ */ new Set())).add(Ls);
var zs = /* @__PURE__ */ Tn('<svg class="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> Loading…', 1), js = /* @__PURE__ */ V('<div class="mb-4 p-4 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 rounded-lg text-sm"><span class="font-medium">Error:</span> </div>'), Is = /* @__PURE__ */ V('<div class="flex flex-col items-center justify-center py-16"><svg class="animate-spin h-10 w-10 text-indigo-500" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> <p class="mt-4 text-gray-500 dark:text-gray-400 animate-pulse">Loading cases…</p></div>'), qs = /* @__PURE__ */ V('<div class="text-center py-12"><svg class="w-12 h-12 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg> <p class="text-gray-500 dark:text-gray-400"> </p></div>'), Bs = /* @__PURE__ */ V('<th class="px-4 py-3">Defendant</th>'), Hs = /* @__PURE__ */ V('<th class="px-4 py-3 rounded-tr-lg">Actions</th>'), Us = /* @__PURE__ */ V('<th class="px-4 py-3 rounded-tr-lg"></th>'), Ys = /* @__PURE__ */ V('<div class="text-xs text-gray-500 dark:text-gray-400 truncate max-w-xs"> </div>'), Js = /* @__PURE__ */ V('<td class="px-4 py-3 font-mono text-xs text-gray-600 dark:text-gray-400"> </td>'), Gs = /* @__PURE__ */ V('<button class="px-3 py-1 text-xs font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md transition-colors">Execute Verdict</button>'), Ks = /* @__PURE__ */ V('<span class="text-xs text-gray-400">Resolved</span>'), Ws = /* @__PURE__ */ V('<tr class="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"><td class="px-4 py-3 font-mono text-xs text-indigo-600 dark:text-indigo-400"> </td><td class="px-4 py-3"><div class="font-medium text-gray-900 dark:text-white"> </div> <!></td><td class="px-4 py-3"><span> </span></td><td class="px-4 py-3 font-mono text-xs text-gray-600 dark:text-gray-400"> </td><!><td class="px-4 py-3 text-xs text-gray-600 dark:text-gray-400"> </td><td class="px-4 py-3"><!></td></tr>'), Xs = /* @__PURE__ */ V('<div class="overflow-x-auto"><table class="w-full text-sm text-left"><thead class="text-xs text-gray-700 dark:text-gray-300 uppercase bg-gray-100 dark:bg-gray-700"><tr><th class="px-4 py-3 rounded-tl-lg">Case ID</th><th class="px-4 py-3">Title</th><th class="px-4 py-3">Status</th><th class="px-4 py-3">Requester</th><!><th class="px-4 py-3">Date</th><!></tr></thead><tbody></tbody></table></div>'), Zs = /* @__PURE__ */ V('<div class="mt-4 p-3 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 rounded-lg text-sm"><span class="font-medium">Error:</span> </div>'), $s = /* @__PURE__ */ V('<div class="mt-4 p-3 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-300 rounded-lg text-sm"><span class="font-medium">Success:</span> Litigation case created!</div>'), Qs = /* @__PURE__ */ Tn('<svg class="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> Creating…', 1), el = /* @__PURE__ */ V(`<div class="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6"><h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Create New Litigation Case</h3> <p class="text-sm text-gray-500 dark:text-gray-400 mb-6">Submit a new litigation request. All fields are required.</p> <div class="space-y-4"><div><label for="jl-defendant" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Defendant Principal ID</label> <input id="jl-defendant" type="text" placeholder="Enter defendant's principal ID" class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none disabled:opacity-50"/></div> <div><label for="jl-title" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Case Title</label> <input id="jl-title" type="text" placeholder="Enter case title" class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none disabled:opacity-50"/></div> <div><label for="jl-desc" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Case Description</label> <textarea id="jl-desc" placeholder="Provide detailed description of the dispute…" rows="4" class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none disabled:opacity-50 resize-y"></textarea></div></div> <!> <!> <div class="flex justify-end gap-3 mt-6"><button class="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors disabled:opacity-50">Reset</button> <button class="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center gap-2"><!></button></div></div>`), tl = /* @__PURE__ */ V('<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"><div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5"><p class="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Total Cases</p> <p class="text-3xl font-bold text-indigo-600 dark:text-indigo-400"> </p></div> <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5"><p class="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Pending</p> <p class="text-3xl font-bold text-yellow-600 dark:text-yellow-400"> </p></div> <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5"><p class="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">In Review</p> <p class="text-3xl font-bold text-blue-600 dark:text-blue-400"> </p></div> <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5"><p class="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Resolved</p> <p class="text-3xl font-bold text-green-600 dark:text-green-400"> </p></div></div>'), rl = /* @__PURE__ */ V('<div class="mb-4 flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400"><span>Profile: <span class="font-semibold capitalize"> </span></span> <span>Total cases: <span class="font-semibold"> </span></span></div> <div class="flex border-b-2 border-gray-200 dark:border-gray-700 mb-6"><button><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path></svg> </button> <button><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg> Create Litigation</button> <button><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg> Statistics</button></div> <div class="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4 border border-gray-200 dark:border-gray-700"><!></div>', 1), nl = /* @__PURE__ */ V('<div><span class="font-medium text-gray-700 dark:text-gray-300">Description:</span> <span class="text-gray-600 dark:text-gray-400"> </span></div>'), il = /* @__PURE__ */ V('<div class="mb-4 p-3 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 rounded-lg text-sm"><span class="font-medium">Error:</span> </div>'), al = /* @__PURE__ */ V('<div class="mb-4 p-3 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-300 rounded-lg text-sm"><span class="font-medium">Success:</span> Verdict executed!</div>'), sl = /* @__PURE__ */ Tn('<svg class="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> Executing…', 1), ll = /* @__PURE__ */ V('<div class="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 mb-4 text-sm space-y-1"><div><span class="font-medium text-gray-700 dark:text-gray-300">ID:</span> <span class="text-gray-600 dark:text-gray-400"> </span></div> <div><span class="font-medium text-gray-700 dark:text-gray-300">Title:</span> <span class="text-gray-600 dark:text-gray-400"> </span></div> <!></div> <div class="mb-4"><label for="jl-verdict-code" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Verdict Code (Python/Codex)</label> <textarea id="jl-verdict-code" rows="4" placeholder="Enter Python code for the verdict execution…" class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white text-sm font-mono focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none disabled:opacity-50 resize-y"></textarea> <p class="mt-1 text-xs text-gray-500 dark:text-gray-400">Example: transfer("from_principal", "to_principal", amount, "memo")</p></div> <!> <!> <div class="flex justify-end gap-3"><button class="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors disabled:opacity-50">Cancel</button> <button class="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center gap-2"><!></button></div>', 1), ol = /* @__PURE__ */ V('<div class="fixed inset-0 z-50 flex items-center justify-center p-4"><button class="absolute inset-0 bg-black/50" aria-label="Close"></button> <div class="relative bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 w-full max-w-lg max-h-[90vh] overflow-y-auto"><div class="p-6"><div class="flex items-center gap-2 mb-4"><svg class="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"></path></svg> <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Execute Verdict</h3></div> <!></div></div></div>'), fl = /* @__PURE__ */ V('<div class="w-full max-w-5xl mx-auto px-4 py-6"><div class="flex items-center gap-3 mb-6"><div class="w-10 h-10 rounded-lg bg-indigo-100 dark:bg-indigo-900/40 flex items-center justify-center"><svg class="w-5 h-5 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg></div> <div class="flex-1"><h1 class="text-2xl font-bold text-gray-900 dark:text-white">Justice & Litigation</h1></div> <button class="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors disabled:opacity-50"><!></button></div> <!> <!> <!></div>');
function ul(e, t) {
  ii(t, !0);
  let r = /* @__PURE__ */ R("list"), n = /* @__PURE__ */ R(Ft([])), i = /* @__PURE__ */ R(0), a = /* @__PURE__ */ R("member"), u = /* @__PURE__ */ R(!0), o = /* @__PURE__ */ R(""), l = /* @__PURE__ */ R("");
  Jn(() => {
    const g = t.ctx.principal;
    if (typeof g == "string")
      m(l, g, !0);
    else if (g && typeof g.subscribe == "function")
      return g.subscribe((le) => m(l, le || "", !0));
  });
  let f = /* @__PURE__ */ R(""), v = /* @__PURE__ */ R(""), _ = /* @__PURE__ */ R(""), p = /* @__PURE__ */ R(!1), h = /* @__PURE__ */ R(""), d = /* @__PURE__ */ R(!1), w = /* @__PURE__ */ R(!1), y = /* @__PURE__ */ R(null), M = /* @__PURE__ */ R(""), S = /* @__PURE__ */ R(!1), B = /* @__PURE__ */ R(""), G = /* @__PURE__ */ R(!1), Be = /* @__PURE__ */ $r(() => c(n).filter((g) => g.status === "pending").length), Pe = /* @__PURE__ */ $r(() => c(n).filter((g) => g.status === "in_review").length), vt = /* @__PURE__ */ $r(() => c(n).filter((g) => g.status === "resolved").length);
  async function $(g, O = "{}") {
    const le = await t.ctx.backend.extension_sync_call(JSON.stringify({
      extension_name: "justice_litigation",
      function_name: g,
      args: O
    })), et = typeof le == "string" ? JSON.parse(le) : le;
    if (et?.success === !1) throw new Error(et.error || "Request failed");
    return et;
  }
  async function te() {
    m(u, !0), m(o, "");
    try {
      const g = await $("get_litigations", JSON.stringify({
        user_principal: c(l),
        user_profile: c(a)
      })), O = g?.data ?? g;
      m(n, O?.litigations ?? (Array.isArray(O) ? O : []), !0), m(i, O?.total_count ?? c(n).length, !0), O?.user_profile && m(a, O.user_profile, !0);
    } catch (g) {
      m(o, g?.message || String(g), !0);
    } finally {
      m(u, !1);
    }
  }
  async function Vr() {
    if (!c(f).trim() || !c(v).trim() || !c(_).trim()) {
      m(h, "All fields are required");
      return;
    }
    m(p, !0), m(h, ""), m(d, !1);
    try {
      await $("create_litigation", JSON.stringify({
        requester_principal: c(l),
        defendant_principal: c(_).trim(),
        case_title: c(f).trim(),
        description: c(v).trim()
      })), m(d, !0), m(f, ""), m(v, ""), m(_, ""), await te(), setTimeout(
        () => {
          m(d, !1), m(r, "list");
        },
        1500
      );
    } catch (g) {
      m(h, g?.message || String(g), !0);
    } finally {
      m(p, !1);
    }
  }
  function Lr(g) {
    m(y, g, !0), m(M, `transfer("${g.defendant_principal || ""}", "${g.requester_principal || ""}", 1000, "Compensation for ${g.case_title || ""}")`), m(B, ""), m(G, !1), m(w, !0);
  }
  function zr() {
    m(w, !1), m(y, null), m(M, ""), m(B, ""), m(G, !1);
  }
  async function Ii() {
    if (!c(y) || !c(M).trim()) {
      m(B, "Verdict code is required");
      return;
    }
    m(S, !0), m(B, ""), m(G, !1);
    try {
      await $("execute_verdict", JSON.stringify({
        litigation_id: c(y).id,
        verdict_code: c(M).trim(),
        executor_principal: c(l)
      })), m(G, !0), await te(), setTimeout(zr, 1500);
    } catch (g) {
      m(B, g?.message || String(g), !0);
    } finally {
      m(S, !1);
    }
  }
  function qi() {
    m(f, ""), m(v, ""), m(_, ""), m(h, ""), m(d, !1);
  }
  function Bi(g) {
    switch (g) {
      case "pending":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-300";
      case "in_review":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300";
      case "resolved":
        return "bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300";
    }
  }
  function Hi(g) {
    return g ? new Date(g).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    }) : "";
  }
  function An(g) {
    return g ? g.length > 16 ? `${g.slice(0, 8)}…${g.slice(-4)}` : g : "Unknown";
  }
  Jn(() => {
    c(l) ? te() : (m(u, !1), m(o, "User not authenticated"));
  });
  var Mn = fl(), Nn = b(Mn), jr = x(b(Nn), 4), Ui = b(jr);
  {
    var Yi = (g) => {
      var O = zs();
      N(g, O);
    }, Ji = (g) => {
      var O = en("↻ Refresh");
      N(g, O);
    };
    H(Ui, (g) => {
      c(u) ? g(Yi) : g(Ji, -1);
    });
  }
  var Dn = x(Nn, 2);
  {
    var Gi = (g) => {
      var O = js(), le = x(b(O));
      oe(() => z(le, ` ${c(o) ?? ""}`)), N(g, O);
    };
    H(Dn, (g) => {
      c(o) && !c(u) && g(Gi);
    });
  }
  var Rn = x(Dn, 2);
  {
    var Ki = (g) => {
      var O = Is();
      N(g, O);
    }, Wi = (g) => {
      var O = rl(), le = Qr(O), et = b(le), Ir = x(b(et)), qr = b(Ir), Br = x(et, 2), Gt = x(b(Br)), pr = b(Gt), Kt = x(le, 2), ht = b(Kt), Hr = x(b(ht)), Wt = x(ht, 2), Xt = x(Wt, 2), Ur = x(Kt, 2), Yr = b(Ur);
      {
        var Jr = (ve) => {
          var Se = Ts(), He = Qr(Se);
          {
            var Ue = (re) => {
              var ne = qs(), Te = x(b(ne), 2), he = b(Te);
              oe(() => z(he, c(a) === "admin" ? "No litigations found in the system." : "You have no litigation cases.")), N(re, ne);
            }, tt = (re) => {
              var ne = Xs(), Te = b(ne), he = b(Te), rt = b(he), nt = x(b(rt), 4);
              {
                var D = (K) => {
                  var I = Bs();
                  N(K, I);
                };
                H(nt, (K) => {
                  c(a) === "admin" && K(D);
                });
              }
              var J = x(nt, 2);
              {
                var Ye = (K) => {
                  var I = Hs();
                  N(K, I);
                }, pt = (K) => {
                  var I = Us();
                  N(K, I);
                };
                H(J, (K) => {
                  c(a) === "admin" ? K(Ye) : K(pt, -1);
                });
              }
              var Zt = x(he);
              Ps(Zt, 21, () => c(n), (K) => K.id, (K, I) => {
                var gr = Ws(), P = b(gr), Fe = b(P), br = x(P), Pn = b(br), $i = b(Pn), Qi = x(Pn, 2);
                {
                  var ea = (W) => {
                    var pe = Ys(), _t = b(pe);
                    oe(() => z(_t, c(I).description)), N(W, pe);
                  };
                  H(Qi, (W) => {
                    c(I).description && W(ea);
                  });
                }
                var Fn = x(br), On = b(Fn), ta = b(On), Vn = x(Fn), ra = b(Vn), Ln = x(Vn);
                {
                  var na = (W) => {
                    var pe = Js(), _t = b(pe);
                    oe((Kr) => z(_t, Kr), [() => An(c(I).defendant_principal)]), N(W, pe);
                  };
                  H(Ln, (W) => {
                    c(a) === "admin" && W(na);
                  });
                }
                var zn = x(Ln), ia = b(zn), aa = x(zn), sa = b(aa);
                {
                  var la = (W) => {
                    var pe = Gs();
                    Oe("click", pe, (_t) => {
                      _t.stopPropagation(), Lr(c(I));
                    }), N(W, pe);
                  }, oa = (W) => {
                    var pe = Ks();
                    N(W, pe);
                  };
                  H(sa, (W) => {
                    c(a) === "admin" && c(I).status !== "resolved" ? W(la) : c(I).status === "resolved" && W(oa, 1);
                  });
                }
                oe(
                  (W, pe, _t, Kr) => {
                    z(Fe, c(I).id), z($i, c(I).case_title), xr(On, 1, `inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${W ?? ""}`), z(ta, pe), z(ra, _t), z(ia, Kr);
                  },
                  [
                    () => Bi(c(I).status),
                    () => c(I).status?.replace("_", " ") || "unknown",
                    () => An(c(I).requester_principal),
                    () => Hi(c(I).requested_at)
                  ]
                ), N(K, gr);
              }), N(re, ne);
            };
            H(He, (re) => {
              c(n).length === 0 ? re(Ue) : re(tt, -1);
            });
          }
          N(ve, Se);
        }, Gr = (ve) => {
          var Se = el(), He = x(b(Se), 4), Ue = b(He), tt = x(b(Ue), 2), re = x(Ue, 2), ne = x(b(re), 2), Te = x(re, 2), he = x(b(Te), 2), rt = x(He, 2);
          {
            var nt = (P) => {
              var Fe = Zs(), br = x(b(Fe));
              oe(() => z(br, ` ${c(h) ?? ""}`)), N(P, Fe);
            };
            H(rt, (P) => {
              c(h) && P(nt);
            });
          }
          var D = x(rt, 2);
          {
            var J = (P) => {
              var Fe = $s();
              N(P, Fe);
            };
            H(D, (P) => {
              c(d) && P(J);
            });
          }
          var Ye = x(D, 2), pt = b(Ye), Zt = x(pt, 2), K = b(Zt);
          {
            var I = (P) => {
              var Fe = Qs();
              N(P, Fe);
            }, gr = (P) => {
              var Fe = en("Create Litigation");
              N(P, Fe);
            };
            H(K, (P) => {
              c(p) ? P(I) : P(gr, -1);
            });
          }
          oe(
            (P) => {
              tt.disabled = c(p), ne.disabled = c(p), he.disabled = c(p), pt.disabled = c(p), Zt.disabled = P;
            },
            [
              () => c(p) || !c(f).trim() || !c(v).trim() || !c(_).trim()
            ]
          ), yr(tt, () => c(_), (P) => m(_, P)), yr(ne, () => c(f), (P) => m(f, P)), yr(he, () => c(v), (P) => m(v, P)), Oe("click", pt, qi), Oe("click", Zt, Vr), N(ve, Se);
        }, _r = (ve) => {
          var Se = tl(), He = b(Se), Ue = x(b(He), 2), tt = b(Ue), re = x(He, 2), ne = x(b(re), 2), Te = b(ne), he = x(re, 2), rt = x(b(he), 2), nt = b(rt), D = x(he, 2), J = x(b(D), 2), Ye = b(J);
          oe(() => {
            z(tt, c(i)), z(Te, c(Be)), z(nt, c(Pe)), z(Ye, c(vt));
          }), N(ve, Se);
        };
        H(Yr, (ve) => {
          c(r) === "list" ? ve(Jr) : c(r) === "create" ? ve(Gr, 1) : c(r) === "stats" && ve(_r, 2);
        });
      }
      oe(() => {
        z(qr, c(a)), z(pr, c(i)), xr(ht, 1, `flex items-center gap-2 px-4 py-2.5 text-sm font-medium -mb-0.5 border-b-2 transition-colors ${c(r) === "list" ? "border-indigo-600 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400" : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"}`), z(Hr, ` ${c(a) === "admin" ? "All Litigations" : "My Litigations"}`), xr(Wt, 1, `flex items-center gap-2 px-4 py-2.5 text-sm font-medium -mb-0.5 border-b-2 transition-colors ${c(r) === "create" ? "border-indigo-600 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400" : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"}`), xr(Xt, 1, `flex items-center gap-2 px-4 py-2.5 text-sm font-medium -mb-0.5 border-b-2 transition-colors ${c(r) === "stats" ? "border-indigo-600 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400" : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"}`);
      }), Oe("click", ht, () => m(r, "list")), Oe("click", Wt, () => m(r, "create")), Oe("click", Xt, () => m(r, "stats")), N(g, O);
    };
    H(Rn, (g) => {
      c(u) ? g(Ki) : g(Wi, -1);
    });
  }
  var Xi = x(Rn, 2);
  {
    var Zi = (g) => {
      var O = ol(), le = b(O), et = x(le, 2), Ir = b(et), qr = x(b(Ir), 2);
      {
        var Br = (Gt) => {
          var pr = ll(), Kt = Qr(pr), ht = b(Kt), Hr = x(b(ht), 2), Wt = b(Hr), Xt = x(ht, 2), Ur = x(b(Xt), 2), Yr = b(Ur), Jr = x(Xt, 2);
          {
            var Gr = (D) => {
              var J = nl(), Ye = x(b(J), 2), pt = b(Ye);
              oe(() => z(pt, c(y).description)), N(D, J);
            };
            H(Jr, (D) => {
              c(y).description && D(Gr);
            });
          }
          var _r = x(Kt, 2), ve = x(b(_r), 2), Se = x(_r, 2);
          {
            var He = (D) => {
              var J = il(), Ye = x(b(J));
              oe(() => z(Ye, ` ${c(B) ?? ""}`)), N(D, J);
            };
            H(Se, (D) => {
              c(B) && D(He);
            });
          }
          var Ue = x(Se, 2);
          {
            var tt = (D) => {
              var J = al();
              N(D, J);
            };
            H(Ue, (D) => {
              c(G) && D(tt);
            });
          }
          var re = x(Ue, 2), ne = b(re), Te = x(ne, 2), he = b(Te);
          {
            var rt = (D) => {
              var J = sl();
              N(D, J);
            }, nt = (D) => {
              var J = en("Execute Verdict");
              N(D, J);
            };
            H(he, (D) => {
              c(S) ? D(rt) : D(nt, -1);
            });
          }
          oe(
            (D) => {
              z(Wt, c(y).id), z(Yr, c(y).case_title), ve.disabled = c(S), ne.disabled = c(S), Te.disabled = D;
            },
            [() => c(S) || !c(M).trim()]
          ), yr(ve, () => c(M), (D) => m(M, D)), Oe("click", ne, zr), Oe("click", Te, Ii), N(Gt, pr);
        };
        H(qr, (Gt) => {
          c(y) && Gt(Br);
        });
      }
      Oe("click", le, zr), N(g, O);
    };
    H(Xi, (g) => {
      c(w) && g(Zi);
    });
  }
  oe(() => jr.disabled = c(u)), Oe("click", jr, te), N(e, Mn), ai();
}
ks(["click"]);
function vl(e, t) {
  const r = As(ul, { target: e, props: { ctx: t } });
  return {
    unmount() {
      try {
        Ns(r);
      } catch {
      }
    }
  };
}
export {
  vl as default
};
