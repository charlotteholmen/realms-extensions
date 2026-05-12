var fa = Object.defineProperty;
var jn = (e) => {
  throw TypeError(e);
};
var ua = (e, t, r) => t in e ? fa(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var Te = (e, t, r) => ua(e, typeof t != "symbol" ? t + "" : t, r), Jr = (e, t, r) => t.has(e) || jn("Cannot " + r);
var s = (e, t, r) => (Jr(e, t, "read from private field"), r ? r.call(e) : t.get(e)), k = (e, t, r) => t.has(e) ? jn("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), C = (e, t, r, n) => (Jr(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r), F = (e, t, r) => (Jr(e, t, "access private method"), r);
var Qn = Array.isArray, da = Array.prototype.indexOf, Ot = Array.prototype.includes, Fr = Array.from, ca = Object.defineProperty, Qt = Object.getOwnPropertyDescriptor, va = Object.prototype, ha = Array.prototype, pa = Object.getPrototypeOf, On = Object.isExtensible;
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
const Z = 2, rr = 4, Vr = 8, ti = 1 << 24, Ie = 16, Re = 32, ft = 64, nn = 128, xe = 512, U = 1024, X = 2048, je = 4096, ee = 8192, ye = 16384, Rt = 32768, qn = 1 << 25, qt = 65536, an = 1 << 17, ba = 1 << 18, Yt = 1 << 19, ma = 1 << 20, $e = 1 << 25, At = 65536, Mr = 1 << 21, nr = 1 << 22, ot = 1 << 23, Xr = Symbol("$state"), Ke = new class extends Error {
  constructor() {
    super(...arguments);
    Te(this, "name", "StaleReactionError");
    Te(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
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
const Da = 1, Ra = 2, Na = 16, Pa = 1, Fa = 2, Y = Symbol(), Va = "http://www.w3.org/1999/xhtml";
function La() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function za() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function ri(e) {
  return e === this.v;
}
function Ia(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function ni(e) {
  return !Ia(e, this.v);
}
let ke = null;
function Bt(e) {
  ke = e;
}
function ii(e, t = !1, r) {
  ke = {
    p: ke,
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
    ke
  ), r = t.e;
  if (r !== null) {
    t.e = null;
    for (var n of r)
      Ei(n);
  }
  return t.i = !0, ke = t.p, /** @type {T} */
  {};
}
function si() {
  return !0;
}
let gt = [];
function li() {
  var e = gt;
  gt = [], ga(e);
}
function Ft(e) {
  if (gt.length === 0 && !er) {
    var t = gt;
    queueMicrotask(() => {
      t === gt && li();
    });
  }
  gt.push(e);
}
function ja() {
  for (; gt.length > 0; )
    li();
}
function oi(e) {
  var t = A;
  if (t === null)
    return T.f |= ot, e;
  if ((t.f & Rt) === 0 && (t.f & rr) === 0)
    throw e;
  st(e, t);
}
function st(e, t) {
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
const Oa = -7169;
function O(e, t) {
  e.f = e.f & Oa | t;
}
function _n(e) {
  (e.f & xe) !== 0 || e.deps === null ? O(e, U) : O(e, je);
}
function fi(e) {
  if (e !== null)
    for (const t of e)
      (t.f & Z) === 0 || (t.f & At) === 0 || (t.f ^= At, fi(
        /** @type {Derived} */
        t.deps
      ));
}
function ui(e, t, r) {
  (e.f & X) !== 0 ? t.add(e) : (e.f & je) !== 0 && r.add(e), fi(e.deps), O(e, U);
}
const _t = /* @__PURE__ */ new Set();
let E = null, Me = null, sn = null, er = !1, Zr = !1, Nt = null, wr = null;
var Bn = 0;
let qa = 1;
var Vt, Lt, xt, We, Ve, sr, fe, lr, it, Je, Le, zt, It, yt, q, kr, di, Er, ln, Cr, Ba;
const Rr = class Rr {
  constructor() {
    k(this, q);
    Te(this, "id", qa++);
    /**
     * The current values of any signals that are updated in this batch.
     * Tuple format: [value, is_derived] (note: is_derived is false for deriveds, too, if they were overridden via assignment)
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Value, [any, boolean]>}
     */
    Te(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any signals (sources and deriveds) that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Value, any>}
     */
    Te(this, "previous", /* @__PURE__ */ new Map());
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
    k(this, xt, /* @__PURE__ */ new Set());
    /**
     * Async effects that are currently in flight
     * @type {Map<Effect, number>}
     */
    k(this, We, /* @__PURE__ */ new Map());
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
    k(this, sr, null);
    /**
     * The root effects that need to be flushed
     * @type {Effect[]}
     */
    k(this, fe, []);
    /**
     * Effects created while this batch was active.
     * @type {Effect[]}
     */
    k(this, lr, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    k(this, it, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    k(this, Je, /* @__PURE__ */ new Set());
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
    Te(this, "is_fork", !1);
    k(this, It, !1);
    /** @type {Set<Batch>} */
    k(this, yt, /* @__PURE__ */ new Set());
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
        O(i, X), r(i);
      for (i of n.m)
        O(i, je), r(i);
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
    t.v !== Y && !this.previous.has(t) && this.previous.set(t, t.v), (t.f & ot) === 0 && (this.current.set(t, [r, n]), Me?.set(t, r)), this.is_fork || (t.v = r);
  }
  activate() {
    E = this;
  }
  deactivate() {
    E = null, Me = null;
  }
  flush() {
    try {
      Zr = !0, E = this, F(this, q, Er).call(this);
    } finally {
      Bn = 0, sn = null, Nt = null, wr = null, Zr = !1, E = null, Me = null, Ct.clear();
    }
  }
  discard() {
    for (const t of s(this, Lt)) t(this);
    s(this, Lt).clear(), s(this, xt).clear(), _t.delete(this);
  }
  /**
   * @param {Effect} effect
   */
  register_created_effect(t) {
    s(this, lr).push(t);
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  increment(t, r) {
    let n = s(this, We).get(r) ?? 0;
    if (s(this, We).set(r, n + 1), t) {
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
    let i = s(this, We).get(r) ?? 0;
    if (i === 1 ? s(this, We).delete(r) : s(this, We).set(r, i - 1), t) {
      let a = s(this, Ve).get(r) ?? 0;
      a === 1 ? s(this, Ve).delete(r) : s(this, Ve).set(r, a - 1);
    }
    s(this, It) || n || (C(this, It, !0), Ft(() => {
      C(this, It, !1), this.flush();
    }));
  }
  /**
   * @param {Set<Effect>} dirty_effects
   * @param {Set<Effect>} maybe_dirty_effects
   */
  transfer_effects(t, r) {
    for (const n of t)
      s(this, it).add(n);
    for (const n of r)
      s(this, Je).add(n);
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
    s(this, xt).add(t);
  }
  run_fork_commit_callbacks() {
    for (const t of s(this, xt)) t(this);
    s(this, xt).clear();
  }
  settled() {
    return (s(this, sr) ?? C(this, sr, ei())).promise;
  }
  static ensure() {
    if (E === null) {
      const t = E = new Rr();
      Zr || (_t.add(E), er || Ft(() => {
        E === t && t.flush();
      }));
    }
    return E;
  }
  apply() {
    {
      Me = null;
      return;
    }
  }
  /**
   *
   * @param {Effect} effect
   */
  schedule(t) {
    if (sn = t, t.b?.is_pending && (t.f & (rr | Vr | ti)) !== 0 && (t.f & Rt) === 0) {
      t.b.defer_effect(t);
      return;
    }
    for (var r = t; r.parent !== null; ) {
      r = r.parent;
      var n = r.f;
      if (Nt !== null && r === A && (T === null || (T.f & Z) === 0))
        return;
      if ((n & (ft | Re)) !== 0) {
        if ((n & U) === 0)
          return;
        r.f ^= U;
      }
    }
    s(this, fe).push(r);
  }
};
Vt = new WeakMap(), Lt = new WeakMap(), xt = new WeakMap(), We = new WeakMap(), Ve = new WeakMap(), sr = new WeakMap(), fe = new WeakMap(), lr = new WeakMap(), it = new WeakMap(), Je = new WeakMap(), Le = new WeakMap(), zt = new WeakMap(), It = new WeakMap(), yt = new WeakMap(), q = new WeakSet(), kr = function() {
  return this.is_fork || s(this, Ve).size > 0;
}, di = function() {
  for (const n of s(this, yt))
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
  if (Bn++ > 1e3 && (_t.delete(this), Ua()), !F(this, q, kr).call(this)) {
    for (const l of s(this, it))
      s(this, Je).delete(l), O(l, X), this.schedule(l);
    for (const l of s(this, Je))
      O(l, je), this.schedule(l);
  }
  const t = s(this, fe);
  C(this, fe, []), this.apply();
  var r = Nt = [], n = [], i = wr = [];
  for (const l of t)
    try {
      F(this, q, ln).call(this, l, r, n);
    } catch (f) {
      throw hi(l), f;
    }
  if (E = null, i.length > 0) {
    var a = Rr.ensure();
    for (const l of i)
      a.schedule(l);
  }
  if (Nt = null, wr = null, F(this, q, kr).call(this) || F(this, q, di).call(this)) {
    F(this, q, Cr).call(this, n), F(this, q, Cr).call(this, r);
    for (const [l, f] of s(this, Le))
      vi(l, f);
  } else {
    s(this, We).size === 0 && _t.delete(this), s(this, it).clear(), s(this, Je).clear();
    for (const l of s(this, Vt)) l(this);
    s(this, Vt).clear(), Hn(n), Hn(r), s(this, sr)?.resolve();
  }
  var u = (
    /** @type {Batch | null} */
    /** @type {unknown} */
    E
  );
  if (s(this, fe).length > 0) {
    const l = u ?? (u = this);
    s(l, fe).push(...s(this, fe).filter((f) => !s(l, fe).includes(f)));
  }
  u !== null && (_t.add(u), F(o = u, q, Er).call(o));
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
    var a = i.f, u = (a & (Re | ft)) !== 0, o = u && (a & U) !== 0, l = o || (a & ee) !== 0 || s(this, Le).has(i);
    if (!l && i.fn !== null) {
      u ? i.f ^= U : (a & rr) !== 0 ? r.push(i) : vr(i) && ((a & Ie) !== 0 && s(this, Je).add(i), Ut(i));
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
    ui(t[r], s(this, it), s(this, Je));
}, Ba = function() {
  var v, _, p;
  for (const h of _t) {
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
            (w.f & (Ie | nr)) !== 0 ? h.schedule(w) : F(y = h, q, Cr).call(y, [w]);
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
      for (const d of s(this, lr))
        (d.f & (ye | ee | an)) === 0 && gn(d, l, u) && ((d.f & (nr | Ie)) !== 0 ? (O(d, X), h.schedule(d)) : s(h, it).add(d));
      if (s(h, fe).length > 0) {
        h.apply();
        for (var f of s(h, fe))
          F(v = h, q, ln).call(v, f, [], []);
        C(h, fe, []);
      }
      h.deactivate();
    }
  }
  for (const h of _t)
    s(h, yt).has(this) && (s(h, yt).delete(this), s(h, yt).size === 0 && !F(_ = h, q, kr).call(_) && (h.activate(), F(p = h, q, Er).call(p)));
};
let Mt = Rr;
function Ha(e) {
  var t = er;
  er = !0;
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
    er = t;
  }
}
function Ua() {
  try {
    Ca();
  } catch (e) {
    st(e, sn);
  }
}
let Ge = null;
function Hn(e) {
  var t = e.length;
  if (t !== 0) {
    for (var r = 0; r < t; ) {
      var n = e[r++];
      if ((n.f & (ye | ee)) === 0 && vr(n) && (Ge = /* @__PURE__ */ new Set(), Ut(n), n.deps === null && n.first === null && n.nodes === null && n.teardown === null && n.ac === null && Ti(n), Ge?.size > 0)) {
        Ct.clear();
        for (const i of Ge) {
          if ((i.f & (ye | ee)) !== 0) continue;
          const a = [i];
          let u = i.parent;
          for (; u !== null; )
            Ge.has(u) && (Ge.delete(u), a.push(u)), u = u.parent;
          for (let o = a.length - 1; o >= 0; o--) {
            const l = a[o];
            (l.f & (ye | ee)) === 0 && Ut(l);
          }
        }
        Ge.clear();
      }
    }
    Ge = null;
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
      ) : (a & (nr | Ie)) !== 0 && (a & X) === 0 && gn(i, t, n) && (O(i, X), bn(
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
      if (Ot.call(t, i))
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
    (e.f & X) !== 0 ? t.d.push(e) : (e.f & je) !== 0 && t.m.push(e), O(e, U);
    for (var r = e.first; r !== null; )
      vi(r, t), r = r.next;
  }
}
function hi(e) {
  O(e, U);
  for (var t = e.first; t !== null; )
    hi(t), t = t.next;
}
function Ya(e) {
  let t = 0, r = Dt(0), n;
  return () => {
    wn() && (c(r), Ci(() => (t === 0 && (n = zi(() => e(() => tr(r)))), t += 1, () => {
      Ft(() => {
        t -= 1, t === 0 && (n?.(), n = void 0, tr(r));
      });
    })));
  };
}
var Ga = qt | Yt;
function Ka(e, t, r, n) {
  new Wa(e, t, r, n);
}
var _e, pn, ge, wt, ie, be, Q, ue, Xe, kt, at, jt, or, fr, Ze, Nr, z, Ja, Xa, Za, on, Sr, Tr, fn, un;
class Wa {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(t, r, n, i) {
    k(this, z);
    /** @type {Boundary | null} */
    Te(this, "parent");
    Te(this, "is_pending", !1);
    /**
     * API-level transformError transform function. Transforms errors before they reach the `failed` snippet.
     * Inherited from parent boundary, or defaults to identity.
     * @type {(error: unknown) => unknown}
     */
    Te(this, "transform_error");
    /** @type {TemplateNode} */
    k(this, _e);
    /** @type {TemplateNode | null} */
    k(this, pn, null);
    /** @type {BoundaryProps} */
    k(this, ge);
    /** @type {((anchor: Node) => void)} */
    k(this, wt);
    /** @type {Effect} */
    k(this, ie);
    /** @type {Effect | null} */
    k(this, be, null);
    /** @type {Effect | null} */
    k(this, Q, null);
    /** @type {Effect | null} */
    k(this, ue, null);
    /** @type {DocumentFragment | null} */
    k(this, Xe, null);
    k(this, kt, 0);
    k(this, at, 0);
    k(this, jt, !1);
    /** @type {Set<Effect>} */
    k(this, or, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    k(this, fr, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    k(this, Ze, null);
    k(this, Nr, Ya(() => (C(this, Ze, Dt(s(this, kt))), () => {
      C(this, Ze, null);
    })));
    C(this, _e, t), C(this, ge, r), C(this, wt, (a) => {
      var u = (
        /** @type {Effect} */
        A
      );
      u.b = this, u.f |= nn, n(a);
    }), this.parent = /** @type {Effect} */
    A.b, this.transform_error = i ?? this.parent?.transform_error ?? ((a) => a), C(this, ie, kn(() => {
      F(this, z, on).call(this);
    }, Ga));
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    ui(t, s(this, or), s(this, fr));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!s(this, ge).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  update_pending_count(t, r) {
    F(this, z, fn).call(this, t, r), C(this, kt, s(this, kt) + t), !(!s(this, Ze) || s(this, jt)) && (C(this, jt, !0), Ft(() => {
      C(this, jt, !1), s(this, Ze) && Ht(s(this, Ze), s(this, kt));
    }));
  }
  get_effect_pending() {
    return s(this, Nr).call(this), c(
      /** @type {Source<number>} */
      s(this, Ze)
    );
  }
  /** @param {unknown} error */
  error(t) {
    if (!s(this, ge).onerror && !s(this, ge).failed)
      throw t;
    E?.is_fork ? (s(this, be) && E.skip_effect(s(this, be)), s(this, Q) && E.skip_effect(s(this, Q)), s(this, ue) && E.skip_effect(s(this, ue)), E.on_fork_commit(() => {
      F(this, z, un).call(this, t);
    })) : F(this, z, un).call(this, t);
  }
}
_e = new WeakMap(), pn = new WeakMap(), ge = new WeakMap(), wt = new WeakMap(), ie = new WeakMap(), be = new WeakMap(), Q = new WeakMap(), ue = new WeakMap(), Xe = new WeakMap(), kt = new WeakMap(), at = new WeakMap(), jt = new WeakMap(), or = new WeakMap(), fr = new WeakMap(), Ze = new WeakMap(), Nr = new WeakMap(), z = new WeakSet(), Ja = function() {
  try {
    C(this, be, me(() => s(this, wt).call(this, s(this, _e))));
  } catch (t) {
    this.error(t);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
Xa = function(t) {
  const r = s(this, ge).failed;
  r && C(this, ue, me(() => {
    r(
      s(this, _e),
      () => t,
      () => () => {
      }
    );
  }));
}, Za = function() {
  const t = s(this, ge).pending;
  t && (this.is_pending = !0, C(this, Q, me(() => t(s(this, _e)))), Ft(() => {
    var r = C(this, Xe, document.createDocumentFragment()), n = Qe();
    r.append(n), C(this, be, F(this, z, Tr).call(this, () => me(() => s(this, wt).call(this, n)))), s(this, at) === 0 && (s(this, _e).before(r), C(this, Xe, null), St(
      /** @type {Effect} */
      s(this, Q),
      () => {
        C(this, Q, null);
      }
    ), F(this, z, Sr).call(
      this,
      /** @type {Batch} */
      E
    ));
  }));
}, on = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), C(this, at, 0), C(this, kt, 0), C(this, be, me(() => {
      s(this, wt).call(this, s(this, _e));
    })), s(this, at) > 0) {
      var t = C(this, Xe, document.createDocumentFragment());
      Sn(s(this, be), t);
      const r = (
        /** @type {(anchor: Node) => void} */
        s(this, ge).pending
      );
      C(this, Q, me(() => r(s(this, _e))));
    } else
      F(this, z, Sr).call(
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
  this.is_pending = !1, t.transfer_effects(s(this, or), s(this, fr));
}, /**
 * @template T
 * @param {() => T} fn
 */
Tr = function(t) {
  var r = A, n = T, i = ke;
  Oe(s(this, ie)), Ee(s(this, ie)), Bt(s(this, ie).ctx);
  try {
    return Mt.ensure(), t();
  } catch (a) {
    return oi(a), null;
  } finally {
    Oe(r), Ee(n), Bt(i);
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
    this.parent && F(n = this.parent, z, fn).call(n, t, r);
    return;
  }
  C(this, at, s(this, at) + t), s(this, at) === 0 && (F(this, z, Sr).call(this, r), s(this, Q) && St(s(this, Q), () => {
    C(this, Q, null);
  }), s(this, Xe) && (s(this, _e).before(s(this, Xe)), C(this, Xe, null)));
}, /**
 * @param {unknown} error
 */
un = function(t) {
  s(this, be) && (se(s(this, be)), C(this, be, null)), s(this, Q) && (se(s(this, Q)), C(this, Q, null)), s(this, ue) && (se(s(this, ue)), C(this, ue, null));
  var r = s(this, ge).onerror;
  let n = s(this, ge).failed;
  var i = !1, a = !1;
  const u = () => {
    if (i) {
      za();
      return;
    }
    i = !0, a && Ma(), s(this, ue) !== null && St(s(this, ue), () => {
      C(this, ue, null);
    }), F(this, z, Tr).call(this, () => {
      F(this, z, on).call(this);
    });
  }, o = (l) => {
    try {
      a = !0, r?.(l, u), a = !1;
    } catch (f) {
      st(f, s(this, ie) && s(this, ie).parent);
    }
    n && C(this, ue, F(this, z, Tr).call(this, () => {
      try {
        return me(() => {
          var f = (
            /** @type {Effect} */
            A
          );
          f.b = this, f.f |= nn, n(
            s(this, _e),
            () => l,
            () => u
          );
        });
      } catch (f) {
        return st(
          f,
          /** @type {Effect} */
          s(this, ie).parent
        ), null;
      }
    }));
  };
  Ft(() => {
    var l;
    try {
      l = this.transform_error(t);
    } catch (f) {
      st(f, s(this, ie) && s(this, ie).parent);
      return;
    }
    l !== null && typeof l == "object" && typeof /** @type {any} */
    l.then == "function" ? l.then(
      o,
      /** @param {unknown} e */
      (f) => st(f, s(this, ie) && s(this, ie).parent)
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
      (u.f & ye) === 0 && st(h, u);
    }
    Dr();
  }
  if (r.length === 0) {
    l.then(() => f(t.map(i)));
    return;
  }
  var v = pi();
  function _() {
    Promise.all(r.map((p) => /* @__PURE__ */ es(p))).then((p) => f([...t.map(i), ...p])).catch((p) => st(p, u)).finally(() => v());
  }
  l ? l.then(() => {
    o(), _(), Dr();
  }) : _();
}
function Qa() {
  var e = (
    /** @type {Effect} */
    A
  ), t = T, r = ke, n = (
    /** @type {Batch} */
    E
  );
  return function(a = !0) {
    Oe(e), Ee(t), Bt(r), a && (e.f & ye) === 0 && (n?.activate(), n?.apply());
  };
}
function Dr(e = !0) {
  Oe(null), Ee(null), Bt(null), e && E?.deactivate();
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
  return A !== null && (A.f |= Yt), {
    ctx: ke,
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
      Promise.resolve(e()).then(f.resolve, f.reject).finally(Dr);
    } catch (h) {
      f.reject(h), Dr();
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
        o.get(v)?.reject(Ke), o.delete(v);
      else {
        for (const h of o.values())
          h.reject(Ke);
        o.clear();
      }
      o.set(v, f);
    }
    const p = (h, d = void 0) => {
      if (_) {
        var w = d === Ke;
        _(w);
      }
      if (!(d === Ke || (l.f & ye) !== 0)) {
        if (v.activate(), d)
          a.f |= ot, Ht(a, d);
        else {
          (a.f & ot) !== 0 && (a.f ^= ot), Ht(a, h);
          for (const [y, M] of o) {
            if (o.delete(y), y === v) break;
            M.reject(Ke);
          }
        }
        v.deactivate();
      }
    };
    f.promise.then(p, (h) => p(null, h || "unknown"));
  }), vs(() => {
    for (const l of o.values())
      l.reject(Ke);
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
  return Di(t), t;
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
  if (!ut && n !== null && (n.f & (ye | ee)) !== 0)
    return La(), e.v;
  Oe(n);
  try {
    e.f &= ~At, rs(e), t = Fi(e);
  } finally {
    Oe(r);
  }
  return t;
}
function _i(e) {
  var t = xn(e);
  if (!e.equals(t) && (e.wv = Ni(), (!E?.is_fork || e.deps === null) && (E !== null ? E.capture(e, t, !0) : e.v = t, e.deps === null))) {
    O(e, U);
    return;
  }
  ut || (Me !== null ? (wn() || E?.is_fork) && Me.set(e, t) : _n(e));
}
function ns(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      (t.teardown || t.ac) && (t.teardown?.(), t.ac?.abort(Ke), t.teardown = _a, t.ac = null, ir(t, 0), En(t));
}
function gi(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      t.teardown && Ut(t);
}
let dn = /* @__PURE__ */ new Set();
const Ct = /* @__PURE__ */ new Map();
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
function N(e, t) {
  const r = Dt(e);
  return Di(r), r;
}
// @__NO_SIDE_EFFECTS__
function is(e, t = !1, r = !0) {
  const n = Dt(e);
  return t || (n.equals = ni), n;
}
function m(e, t, r = !1) {
  T !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!De || (T.f & an) !== 0) && si() && (T.f & (Z | Ie | nr | an)) !== 0 && (we === null || !Ot.call(we, e)) && Aa();
  let n = r ? Pt(t) : t;
  return Ht(e, n, wr);
}
function Ht(e, t, r = null) {
  if (!e.equals(t)) {
    Ct.set(e, ut ? t : e.v);
    var n = Mt.ensure();
    if (n.capture(e, t), (e.f & Z) !== 0) {
      const i = (
        /** @type {Derived} */
        e
      );
      (e.f & X) !== 0 && xn(i), Me === null && _n(i);
    }
    e.wv = Ni(), mi(e, X, r), A !== null && (A.f & U) !== 0 && (A.f & (Re | ft)) === 0 && (pe === null ? bs([e]) : pe.push(e)), !n.is_fork && dn.size > 0 && !bi && as();
  }
  return t;
}
function as() {
  bi = !1;
  for (const e of dn)
    (e.f & U) !== 0 && O(e, je), vr(e) && Ut(e);
  dn.clear();
}
function tr(e) {
  m(e, e.v + 1);
}
function mi(e, t, r) {
  var n = e.reactions;
  if (n !== null)
    for (var i = n.length, a = 0; a < i; a++) {
      var u = n[a], o = u.f, l = (o & X) === 0;
      if (l && O(u, t), (o & Z) !== 0) {
        var f = (
          /** @type {Derived} */
          u
        );
        Me?.delete(f), (o & At) === 0 && (o & xe && (A === null || (A.f & Mr) === 0) && (u.f |= At), mi(f, je, r));
      } else if (l) {
        var v = (
          /** @type {Effect} */
          u
        );
        (o & Ie) !== 0 && Ge !== null && Ge.add(v), r !== null ? r.push(v) : bn(v);
      }
    }
}
function Pt(e) {
  if (typeof e != "object" || e === null || Xr in e)
    return e;
  const t = pa(e);
  if (t !== va && t !== ha)
    return e;
  var r = /* @__PURE__ */ new Map(), n = Qn(e), i = /* @__PURE__ */ N(0), a = Tt, u = (o) => {
    if (Tt === a)
      return o();
    var l = T, f = Tt;
    Ee(null), Wn(a);
    var v = o();
    return Ee(l), Wn(f), v;
  };
  return n && r.set("length", /* @__PURE__ */ N(
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
          var _ = /* @__PURE__ */ N(f.value);
          return r.set(l, _), _;
        }) : m(v, f.value, !0), !0;
      },
      deleteProperty(o, l) {
        var f = r.get(l);
        if (f === void 0) {
          if (l in o) {
            const v = u(() => /* @__PURE__ */ N(Y));
            r.set(l, v), tr(i);
          }
        } else
          m(f, Y), tr(i);
        return !0;
      },
      get(o, l, f) {
        if (l === Xr)
          return e;
        var v = r.get(l), _ = l in o;
        if (v === void 0 && (!_ || Qt(o, l)?.writable) && (v = u(() => {
          var h = Pt(_ ? o[l] : Y), d = /* @__PURE__ */ N(h);
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
        if (f !== void 0 || A !== null && (!v || Qt(o, l)?.writable)) {
          f === void 0 && (f = u(() => {
            var p = v ? Pt(o[l]) : Y, h = /* @__PURE__ */ N(p);
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
            d !== void 0 ? m(d, Y) : h in o && (d = u(() => /* @__PURE__ */ N(Y)), r.set(h + "", d));
          }
        if (_ === void 0)
          (!p || Qt(o, l)?.writable) && (_ = u(() => /* @__PURE__ */ N(void 0)), m(_, Pt(f)), r.set(l, _));
        else {
          p = _.v !== Y;
          var w = u(() => Pt(f));
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
          tr(i);
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
    yi = Qt(t, "firstChild").get, wi = Qt(t, "nextSibling").get, On(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), On(r) && (r.__t = void 0);
  }
}
function Qe(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function lt(e) {
  return (
    /** @type {TemplateNode | null} */
    yi.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function cr(e) {
  return (
    /** @type {TemplateNode | null} */
    wi.call(e)
  );
}
function b(e, t) {
  return /* @__PURE__ */ lt(e);
}
function Qr(e, t = !1) {
  {
    var r = /* @__PURE__ */ lt(e);
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ cr(r) : r;
  }
}
function x(e, t = 1, r = !1) {
  let n = e;
  for (; t--; )
    n = /** @type {TemplateNode} */
    /* @__PURE__ */ cr(n);
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
    document.createElementNS(Va, e, void 0)
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
  Ee(null), Oe(null);
  try {
    return e();
  } finally {
    Ee(t), Oe(r);
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
  A === null && (T === null && Ea(), ka()), ut && wa();
}
function cs(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function dt(e, t) {
  var r = A;
  r !== null && (r.f & ee) !== 0 && (e |= ee);
  var n = {
    ctx: ke,
    deps: null,
    nodes: null,
    f: e | X | xe,
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
  if ((e & rr) !== 0)
    Nt !== null ? Nt.push(n) : Mt.ensure().schedule(n);
  else if (t !== null) {
    try {
      Ut(n);
    } catch (u) {
      throw se(n), u;
    }
    i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && // either `null`, or a singular child
    (i.f & Yt) === 0 && (i = i.first, (e & Ie) !== 0 && (e & qt) !== 0 && i !== null && (i.f |= qt));
  }
  if (i !== null && (i.parent = r, r !== null && cs(i, r), T !== null && (T.f & Z) !== 0 && (e & ft) === 0)) {
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
  const t = dt(Vr, null);
  return O(t, U), t.teardown = e, t;
}
function Gn(e) {
  ds();
  var t = (
    /** @type {Effect} */
    A.f
  ), r = !T && (t & Re) !== 0 && (t & Rt) === 0;
  if (r) {
    var n = (
      /** @type {ComponentContext} */
      ke
    );
    (n.e ?? (n.e = [])).push(e);
  } else
    return Ei(e);
}
function Ei(e) {
  return dt(rr | ma, e);
}
function hs(e) {
  Mt.ensure();
  const t = dt(ft | Yt, e);
  return (r = {}) => new Promise((n) => {
    r.outro ? St(t, () => {
      se(t), n(void 0);
    }) : (se(t), n(void 0));
  });
}
function ps(e) {
  return dt(nr | Yt, e);
}
function Ci(e, t = 0) {
  return dt(Vr | t, e);
}
function le(e, t = [], r = [], n = []) {
  $a(n, t, r, (i) => {
    dt(Vr, () => e(...i.map(c)));
  });
}
function kn(e, t = 0) {
  var r = dt(Ie | t, e);
  return r;
}
function me(e) {
  return dt(Re | Yt, e);
}
function Si(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = ut, n = T;
    Kn(!0), Ee(null);
    try {
      t.call(null);
    } finally {
      Kn(r), Ee(n);
    }
  }
}
function En(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    const i = r.ac;
    i !== null && yn(() => {
      i.abort(Ke);
    });
    var n = r.next;
    (r.f & ft) !== 0 ? r.parent = null : se(r, t), r = n;
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
  ), r = !0), O(e, qn), En(e, t && !r), ir(e, 0);
  var n = e.nodes && e.nodes.t;
  if (n !== null)
    for (const a of n)
      a.stop();
  Si(e), e.f ^= qn, e.f |= ye;
  var i = e.parent;
  i !== null && i.first !== null && Ti(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function gs(e, t) {
  for (; e !== null; ) {
    var r = e === t ? null : /* @__PURE__ */ cr(e);
    e.remove(), e = r;
  }
}
function Ti(e) {
  var t = e.parent, r = e.prev, n = e.next;
  r !== null && (r.next = n), n !== null && (n.prev = r), t !== null && (t.first === e && (t.first = n), t.last === e && (t.last = r));
}
function St(e, t, r = !0) {
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
      if ((i.f & ft) === 0) {
        var u = (i.f & qt) !== 0 || // If this is a branch effect without a block effect parent,
        // it means the parent block effect was pruned. In that case,
        // transparency information was transferred to the branch effect.
        (i.f & Re) !== 0 && (e.f & Ie) !== 0;
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
    e.f ^= ee, (e.f & U) === 0 && (O(e, X), Mt.ensure().schedule(e));
    for (var r = e.first; r !== null; ) {
      var n = r.next, i = (r.f & qt) !== 0 || (r.f & Re) !== 0;
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
      var i = r === n ? null : /* @__PURE__ */ cr(r);
      t.append(r), r = i;
    }
}
let Ar = !1, ut = !1;
function Kn(e) {
  ut = e;
}
let T = null, De = !1;
function Ee(e) {
  T = e;
}
let A = null;
function Oe(e) {
  A = e;
}
let we = null;
function Di(e) {
  T !== null && (we === null ? we = [e] : we.push(e));
}
let ae = null, oe = 0, pe = null;
function bs(e) {
  pe = e;
}
let Ri = 1, bt = 0, Tt = bt;
function Wn(e) {
  Tt = e;
}
function Ni() {
  return ++Ri;
}
function vr(e) {
  var t = e.f;
  if ((t & X) !== 0)
    return !0;
  if (t & Z && (e.f &= ~At), (t & je) !== 0) {
    for (var r = (
      /** @type {Value[]} */
      e.deps
    ), n = r.length, i = 0; i < n; i++) {
      var a = r[i];
      if (vr(
        /** @type {Derived} */
        a
      ) && _i(
        /** @type {Derived} */
        a
      ), a.wv > e.wv)
        return !0;
    }
    (t & xe) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    Me === null && O(e, U);
  }
  return !1;
}
function Pi(e, t, r = !0) {
  var n = e.reactions;
  if (n !== null && !(we !== null && Ot.call(we, e)))
    for (var i = 0; i < n.length; i++) {
      var a = n[i];
      (a.f & Z) !== 0 ? Pi(
        /** @type {Derived} */
        a,
        t,
        !1
      ) : t === a && (r ? O(a, X) : (a.f & U) !== 0 && O(a, je), bn(
        /** @type {Effect} */
        a
      ));
    }
}
function Fi(e) {
  var w;
  var t = ae, r = oe, n = pe, i = T, a = we, u = ke, o = De, l = Tt, f = e.f;
  ae = /** @type {null | Value[]} */
  null, oe = 0, pe = null, T = (f & (Re | ft)) === 0 ? e : null, we = null, Bt(e.ctx), De = !1, Tt = ++bt, e.ac !== null && (yn(() => {
    e.ac.abort(Ke);
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
      if (h || ir(e, oe), p !== null && oe > 0)
        for (p.length = oe + ae.length, d = 0; d < ae.length; d++)
          p[oe + d] = ae[d];
      else
        e.deps = p = ae;
      if (wn() && (e.f & xe) !== 0)
        for (d = oe; d < p.length; d++)
          ((w = p[d]).reactions ?? (w.reactions = [])).push(e);
    } else !h && p !== null && oe < p.length && (ir(e, oe), p.length = oe);
    if (si() && pe !== null && !De && p !== null && (e.f & (Z | je | X)) === 0)
      for (d = 0; d < /** @type {Source[]} */
      pe.length; d++)
        Pi(
          pe[d],
          /** @type {Effect} */
          e
        );
    if (i !== null && i !== e) {
      if (bt++, i.deps !== null)
        for (let y = 0; y < r; y += 1)
          i.deps[y].rv = bt;
      if (t !== null)
        for (const y of t)
          y.rv = bt;
      pe !== null && (n === null ? n = pe : n.push(.../** @type {Source[]} */
      pe));
    }
    return (e.f & ot) !== 0 && (e.f ^= ot), _;
  } catch (y) {
    return oi(y);
  } finally {
    e.f ^= Mr, ae = t, oe = r, pe = n, T = i, we = a, Bt(u), De = o, Tt = l;
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
  (ae === null || !Ot.call(ae, t))) {
    var a = (
      /** @type {Derived} */
      t
    );
    (a.f & xe) !== 0 && (a.f ^= xe, a.f &= ~At), a.v !== Y && _n(a), ns(a), ir(a, 0);
  }
}
function ir(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var n = t; n < r.length; n++)
      ms(e, r[n]);
}
function Ut(e) {
  var t = e.f;
  if ((t & ye) === 0) {
    O(e, U);
    var r = A, n = Ar;
    A = e, Ar = !0;
    try {
      (t & (Ie | ti)) !== 0 ? _s(e) : En(e), Si(e);
      var i = Fi(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = Ri;
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
    var n = A !== null && (A.f & ye) !== 0;
    if (!n && (we === null || !Ot.call(we, e))) {
      var i = T.deps;
      if ((T.f & Mr) !== 0)
        e.rv < bt && (e.rv = bt, ae === null && i !== null && i[oe] === e ? oe++ : ae === null ? ae = [e] : ae.push(e));
      else {
        (T.deps ?? (T.deps = [])).push(e);
        var a = e.reactions;
        a === null ? e.reactions = [T] : Ot.call(a, T) || a.push(T);
      }
    }
  }
  if (ut && Ct.has(e))
    return Ct.get(e);
  if (r) {
    var u = (
      /** @type {Derived} */
      e
    );
    if (ut) {
      var o = u.v;
      return ((u.f & U) === 0 && u.reactions !== null || Li(u)) && (o = xn(u)), Ct.set(u, o), o;
    }
    var l = (u.f & xe) === 0 && !De && T !== null && (Ar || (T.f & xe) !== 0), f = (u.f & Rt) === 0;
    vr(u) && (l && (u.f |= xe), _i(u)), l && !f && (gi(u), Vi(u));
  }
  if (Me?.has(e))
    return Me.get(e);
  if ((e.f & ot) !== 0)
    throw e.v;
  return e.v;
}
function Vi(e) {
  if (e.f |= xe, e.deps !== null)
    for (const t of e.deps)
      (t.reactions ?? (t.reactions = [])).push(e), (t.f & Z) !== 0 && (t.f & xe) === 0 && (gi(
        /** @type {Derived} */
        t
      ), Vi(
        /** @type {Derived} */
        t
      ));
}
function Li(e) {
  if (e.v === Y) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (Ct.has(t) || (t.f & Z) !== 0 && Li(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function zi(e) {
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
const mt = Symbol("events"), Ii = /* @__PURE__ */ new Set(), cn = /* @__PURE__ */ new Set();
function Fe(e, t, r) {
  (t[mt] ?? (t[mt] = {}))[e] = r;
}
function ks(e) {
  for (var t = 0; t < e.length; t++)
    Ii.add(e[t]);
  for (var r of cn)
    r(e);
}
let Jn = null;
function Xn(e) {
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), n = e.type, i = e.composedPath?.() || [], a = (
    /** @type {null | Element} */
    i[0] || e.target
  );
  Jn = e;
  var u = 0, o = Jn === e && e[mt];
  if (o) {
    var l = i.indexOf(o);
    if (l !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e[mt] = t;
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
    Ee(null), Oe(null);
    try {
      for (var p, h = []; a !== null; ) {
        var d = a.assignedSlot || a.parentNode || /** @type {any} */
        a.host || null;
        try {
          var w = a[mt]?.[n];
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
      e[mt] = t, delete e.currentTarget, Ee(v), Oe(_);
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
function ar(e, t) {
  var r = (
    /** @type {Effect} */
    A
  );
  r.nodes === null && (r.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function L(e, t) {
  var r = (t & Pa) !== 0, n = (t & Fa) !== 0, i, a = !e.startsWith("<!>");
  return () => {
    i === void 0 && (i = ji(a ? e : "<!>" + e), r || (i = /** @type {TemplateNode} */
    /* @__PURE__ */ lt(i)));
    var u = (
      /** @type {TemplateNode} */
      n || xi ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (r) {
      var o = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ lt(u)
      ), l = (
        /** @type {TemplateNode} */
        u.lastChild
      );
      ar(o, l);
    } else
      ar(u, u);
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
        /* @__PURE__ */ lt(u)
      );
      for (a = document.createDocumentFragment(); /* @__PURE__ */ lt(o); )
        a.appendChild(
          /** @type {TemplateNode} */
          /* @__PURE__ */ lt(o)
        );
    }
    var l = (
      /** @type {TemplateNode} */
      a.cloneNode(!0)
    );
    {
      var f = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ lt(l)
      ), v = (
        /** @type {TemplateNode} */
        l.lastChild
      );
      ar(f, v);
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
    return ar(t, t), t;
  }
}
function Ts() {
  var e = document.createDocumentFragment(), t = document.createComment(""), r = Qe();
  return e.append(t, r), ar(t, r), e;
}
function D(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function j(e, t) {
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
    Ka(
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
          ke
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
    return p(Fr(Ii)), cn.add(p), () => {
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
function Ds(e, t) {
  const r = vn.get(e);
  return r ? (vn.delete(e), r(t)) : Promise.resolve();
}
var Ae, ze, de, Et, ur, dr, Pr;
class Rs {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, r = !0) {
    /** @type {TemplateNode} */
    Te(this, "anchor");
    /** @type {Map<Batch, Key>} */
    k(this, Ae, /* @__PURE__ */ new Map());
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
    k(this, de, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    k(this, Et, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    k(this, ur, !0);
    /**
     * @param {Batch} batch
     */
    k(this, dr, (t) => {
      if (s(this, Ae).has(t)) {
        var r = (
          /** @type {Key} */
          s(this, Ae).get(t)
        ), n = s(this, ze).get(r);
        if (n)
          Cn(n), s(this, Et).delete(r);
        else {
          var i = s(this, de).get(r);
          i && (s(this, ze).set(r, i.effect), s(this, de).delete(r), i.fragment.lastChild.remove(), this.anchor.before(i.fragment), n = i.effect);
        }
        for (const [a, u] of s(this, Ae)) {
          if (s(this, Ae).delete(a), a === t)
            break;
          const o = s(this, de).get(u);
          o && (se(o.effect), s(this, de).delete(u));
        }
        for (const [a, u] of s(this, ze)) {
          if (a === r || s(this, Et).has(a)) continue;
          const o = () => {
            if (Array.from(s(this, Ae).values()).includes(a)) {
              var f = document.createDocumentFragment();
              Sn(u, f), f.append(Qe()), s(this, de).set(a, { effect: u, fragment: f });
            } else
              se(u);
            s(this, Et).delete(a), s(this, ze).delete(a);
          };
          s(this, ur) || !n ? (s(this, Et).add(a), St(u, o, !1)) : o();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    k(this, Pr, (t) => {
      s(this, Ae).delete(t);
      const r = Array.from(s(this, Ae).values());
      for (const [n, i] of s(this, de))
        r.includes(n) || (se(i.effect), s(this, de).delete(n));
    });
    this.anchor = t, C(this, ur, r);
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
    if (r && !s(this, ze).has(t) && !s(this, de).has(t))
      if (i) {
        var a = document.createDocumentFragment(), u = Qe();
        a.append(u), s(this, de).set(t, {
          effect: me(() => r(u)),
          fragment: a
        });
      } else
        s(this, ze).set(
          t,
          me(() => r(this.anchor))
        );
    if (s(this, Ae).set(n, t), i) {
      for (const [o, l] of s(this, ze))
        o === t ? n.unskip_effect(l) : n.skip_effect(l);
      for (const [o, l] of s(this, de))
        o === t ? n.unskip_effect(l.effect) : n.skip_effect(l.effect);
      n.oncommit(s(this, dr)), n.ondiscard(s(this, Pr));
    } else
      s(this, dr).call(this, n);
  }
}
Ae = new WeakMap(), ze = new WeakMap(), de = new WeakMap(), Et = new WeakMap(), ur = new WeakMap(), dr = new WeakMap(), Pr = new WeakMap();
function H(e, t, r = !1) {
  var n = new Rs(e), i = r ? qt : 0;
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
function Ns(e, t, r) {
  for (var n = [], i = t.length, a, u = t.length, o = 0; o < i; o++) {
    let _ = t[o];
    St(
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
    (M.effect.f & ye) === 0 && (M.pending.delete(S), M.fallback = f, Fs(M, _, u, t, n), f !== null && (_.length === 0 ? (f.f & $e) === 0 ? Cn(f) : (f.f ^= $e, $t(f, null, u)) : St(f, () => {
      f = null;
    })));
  }
  function w(S) {
    M.pending.delete(S);
  }
  var y = kn(() => {
    _ = /** @type {V[]} */
    c(v);
    for (var S = _.length, B = /* @__PURE__ */ new Set(), K = (
      /** @type {Batch} */
      E
    ), qe = ki(), Ne = 0; Ne < S; Ne += 1) {
      var ct = _[Ne], $ = n(ct, Ne), te = h ? null : o.get($);
      te ? (te.v && Ht(te.v, ct), te.i && Ht(te.i, Ne), qe && K.unskip_effect(te.e)) : (te = Vs(
        o,
        h ? u : Zn ?? (Zn = Qe()),
        ct,
        $,
        Ne,
        i,
        t,
        r
      ), h || (te.e.f |= $e), o.set($, te)), B.add($);
    }
    if (S === 0 && a && !f && (h ? f = me(() => a(u)) : (f = me(() => a(Zn ?? (Zn = Qe()))), f.f |= $e)), S > B.size && ya(), !h)
      if (p.set(K, B), qe) {
        for (const [Lr, zr] of o)
          B.has(Lr) || K.skip_effect(zr.e);
        K.oncommit(d), K.ondiscard(w);
      } else
        d(K);
    c(v);
  }), M = { effect: y, items: o, pending: p, outrogroups: null, fallback: f };
  h = !1;
}
function Zt(e) {
  for (; e !== null && (e.f & Re) === 0; )
    e = e.next;
  return e;
}
function Fs(e, t, r, n, i) {
  var a = t.length, u = e.items, o = Zt(e.effect.first), l, f = null, v = [], _ = [], p, h, d, w;
  for (w = 0; w < a; w += 1) {
    if (p = t[w], h = i(p, w), d = /** @type {EachItem} */
    u.get(h).e, e.outrogroups !== null)
      for (const $ of e.outrogroups)
        $.pending.delete(d), $.done.delete(d);
    if ((d.f & ee) !== 0 && Cn(d), (d.f & $e) !== 0)
      if (d.f ^= $e, d === o)
        $t(d, null, r);
      else {
        var y = f ? f.next : o;
        d === e.effect.last && (e.effect.last = d.prev), d.prev && (d.prev.next = d.next), d.next && (d.next.prev = d.prev), nt(e, f, d), nt(e, d, y), $t(d, y, r), f = d, v = [], _ = [], o = Zt(f.next);
        continue;
      }
    if (d !== o) {
      if (l !== void 0 && l.has(d)) {
        if (v.length < _.length) {
          var M = _[0], S;
          f = M.prev;
          var B = v[0], K = v[v.length - 1];
          for (S = 0; S < v.length; S += 1)
            $t(v[S], M, r);
          for (S = 0; S < _.length; S += 1)
            l.delete(_[S]);
          nt(e, B.prev, K.next), nt(e, f, B), nt(e, K, M), o = M, f = K, w -= 1, v = [], _ = [];
        } else
          l.delete(d), $t(d, o, r), nt(e, d.prev, d.next), nt(e, d, f === null ? e.effect.first : f.next), nt(e, f, d), f = d;
        continue;
      }
      for (v = [], _ = []; o !== null && o !== d; )
        (l ?? (l = /* @__PURE__ */ new Set())).add(o), _.push(o), o = Zt(o.next);
      if (o === null)
        continue;
    }
    (d.f & $e) === 0 && v.push(d), f = d, o = Zt(d.next);
  }
  if (e.outrogroups !== null) {
    for (const $ of e.outrogroups)
      $.pending.size === 0 && (hn(e, Fr($.done)), e.outrogroups?.delete($));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (o !== null || l !== void 0) {
    var qe = [];
    if (l !== void 0)
      for (d of l)
        (d.f & ee) === 0 && qe.push(d);
    for (; o !== null; )
      (o.f & ee) === 0 && o !== e.fallback && qe.push(o), o = Zt(o.next);
    var Ne = qe.length;
    if (Ne > 0) {
      var ct = a === 0 ? r : null;
      Ns(e, qe, ct);
    }
  }
}
function Vs(e, t, r, n, i, a, u, o) {
  var l = (u & Da) !== 0 ? (u & Na) === 0 ? /* @__PURE__ */ is(r, !1, !1) : Dt(r) : null, f = (u & Ra) !== 0 ? Dt(i) : null;
  return {
    v: l,
    i: f,
    e: me(() => (a(t, l ?? r, f ?? i, o), () => {
      e.delete(n);
    }))
  };
}
function $t(e, t, r) {
  if (e.nodes)
    for (var n = e.nodes.start, i = e.nodes.end, a = t && (t.f & $e) === 0 ? (
      /** @type {EffectNodes} */
      t.nodes.start
    ) : r; n !== null; ) {
      var u = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ cr(n)
      );
      if (a.before(n), n === i)
        return;
      n = u;
    }
}
function nt(e, t, r) {
  t === null ? e.effect.first = r : t.next = r, r === null ? e.effect.last = t : r.prev = t;
}
function Ls(e, t, r) {
  var n = e == null ? "" : "" + e;
  return n === "" ? null : n;
}
function xr(e, t, r, n, i, a) {
  var u = e.__className;
  if (u !== r || u === void 0) {
    var o = Ls(r);
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
  zi(t) == null && e.value && (r(tn(e) ? rn(e.value) : e.value), E !== null && n.add(E)), Ci(() => {
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
const zs = "5";
var $n;
typeof window < "u" && (($n = window.__svelte ?? (window.__svelte = {})).v ?? ($n.v = /* @__PURE__ */ new Set())).add(zs);
var Is = /* @__PURE__ */ Tn('<svg class="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> Loading…', 1), js = /* @__PURE__ */ L('<div class="mb-4 p-4 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 rounded-lg text-sm"><span class="font-medium">Error:</span> </div>'), Os = /* @__PURE__ */ L('<div class="flex flex-col items-center justify-center py-16"><svg class="animate-spin h-10 w-10 text-indigo-500" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> <p class="mt-4 text-gray-500 dark:text-gray-400 animate-pulse">Loading cases…</p></div>'), qs = /* @__PURE__ */ L('<div class="text-center py-12"><svg class="w-12 h-12 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg> <p class="text-gray-500 dark:text-gray-400"> </p></div>'), Bs = /* @__PURE__ */ L('<th class="px-4 py-3">Defendant</th>'), Hs = /* @__PURE__ */ L('<th class="px-4 py-3 rounded-tr-lg">Actions</th>'), Us = /* @__PURE__ */ L('<th class="px-4 py-3 rounded-tr-lg"></th>'), Ys = /* @__PURE__ */ L('<div class="text-xs text-gray-500 dark:text-gray-400 truncate max-w-xs"> </div>'), Gs = /* @__PURE__ */ L('<td class="px-4 py-3 font-mono text-xs text-gray-600 dark:text-gray-400"> </td>'), Ks = /* @__PURE__ */ L('<button class="px-3 py-1 text-xs font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md transition-colors">Execute Verdict</button>'), Ws = /* @__PURE__ */ L('<span class="text-xs text-gray-400">Resolved</span>'), Js = /* @__PURE__ */ L('<tr class="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"><td class="px-4 py-3 font-mono text-xs text-indigo-600 dark:text-indigo-400"> </td><td class="px-4 py-3"><div class="font-medium text-gray-900 dark:text-white"> </div> <!></td><td class="px-4 py-3"><span> </span></td><td class="px-4 py-3 font-mono text-xs text-gray-600 dark:text-gray-400"> </td><!><td class="px-4 py-3 text-xs text-gray-600 dark:text-gray-400"> </td><td class="px-4 py-3"><!></td></tr>'), Xs = /* @__PURE__ */ L('<div class="overflow-x-auto"><table class="w-full text-sm text-left"><thead class="text-xs text-gray-700 dark:text-gray-300 uppercase bg-gray-100 dark:bg-gray-700"><tr><th class="px-4 py-3 rounded-tl-lg">Case ID</th><th class="px-4 py-3">Title</th><th class="px-4 py-3">Status</th><th class="px-4 py-3">Requester</th><!><th class="px-4 py-3">Date</th><!></tr></thead><tbody></tbody></table></div>'), Zs = /* @__PURE__ */ L('<div class="mt-4 p-3 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 rounded-lg text-sm"><span class="font-medium">Error:</span> </div>'), $s = /* @__PURE__ */ L('<div class="mt-4 p-3 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-300 rounded-lg text-sm"><span class="font-medium">Success:</span> Litigation case created!</div>'), Qs = /* @__PURE__ */ Tn('<svg class="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> Creating…', 1), el = /* @__PURE__ */ L(`<div class="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6"><h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Create New Litigation Case</h3> <p class="text-sm text-gray-500 dark:text-gray-400 mb-6">Submit a new litigation request. All fields are required.</p> <div class="space-y-4"><div><label for="jl-defendant" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Defendant Principal ID</label> <input id="jl-defendant" type="text" placeholder="Enter defendant's principal ID" class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none disabled:opacity-50"/></div> <div><label for="jl-title" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Case Title</label> <input id="jl-title" type="text" placeholder="Enter case title" class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none disabled:opacity-50"/></div> <div><label for="jl-desc" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Case Description</label> <textarea id="jl-desc" placeholder="Provide detailed description of the dispute…" rows="4" class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none disabled:opacity-50 resize-y"></textarea></div></div> <!> <!> <div class="flex justify-end gap-3 mt-6"><button class="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors disabled:opacity-50">Reset</button> <button class="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center gap-2"><!></button></div></div>`), tl = /* @__PURE__ */ L('<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"><div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5"><p class="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Total Cases</p> <p class="text-3xl font-bold text-indigo-600 dark:text-indigo-400"> </p></div> <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5"><p class="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Pending</p> <p class="text-3xl font-bold text-yellow-600 dark:text-yellow-400"> </p></div> <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5"><p class="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">In Review</p> <p class="text-3xl font-bold text-blue-600 dark:text-blue-400"> </p></div> <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5"><p class="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Resolved</p> <p class="text-3xl font-bold text-green-600 dark:text-green-400"> </p></div></div>'), rl = /* @__PURE__ */ L('<div class="mb-4 flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400"><span>Profile: <span class="font-semibold capitalize"> </span></span> <span>Total cases: <span class="font-semibold"> </span></span></div> <div class="flex border-b-2 border-gray-200 dark:border-gray-700 mb-6"><button><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path></svg> </button> <button><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg> Create Litigation</button> <button><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg> Statistics</button></div> <div class="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4 border border-gray-200 dark:border-gray-700"><!></div>', 1), nl = /* @__PURE__ */ L('<div><span class="font-medium text-gray-700 dark:text-gray-300">Description:</span> <span class="text-gray-600 dark:text-gray-400"> </span></div>'), il = /* @__PURE__ */ L('<div class="mb-4 p-3 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 rounded-lg text-sm"><span class="font-medium">Error:</span> </div>'), al = /* @__PURE__ */ L('<div class="mb-4 p-3 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-300 rounded-lg text-sm"><span class="font-medium">Success:</span> Verdict executed!</div>'), sl = /* @__PURE__ */ Tn('<svg class="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> Executing…', 1), ll = /* @__PURE__ */ L('<div class="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 mb-4 text-sm space-y-1"><div><span class="font-medium text-gray-700 dark:text-gray-300">ID:</span> <span class="text-gray-600 dark:text-gray-400"> </span></div> <div><span class="font-medium text-gray-700 dark:text-gray-300">Title:</span> <span class="text-gray-600 dark:text-gray-400"> </span></div> <!></div> <div class="mb-4"><label for="jl-verdict-code" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Verdict Code (Python/Codex)</label> <textarea id="jl-verdict-code" rows="4" placeholder="Enter Python code for the verdict execution…" class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white text-sm font-mono focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none disabled:opacity-50 resize-y"></textarea> <p class="mt-1 text-xs text-gray-500 dark:text-gray-400">Example: transfer("from_principal", "to_principal", amount, "memo")</p></div> <!> <!> <div class="flex justify-end gap-3"><button class="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors disabled:opacity-50">Cancel</button> <button class="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center gap-2"><!></button></div>', 1), ol = /* @__PURE__ */ L('<div class="fixed inset-0 z-50 flex items-center justify-center p-4"><button class="absolute inset-0 bg-black/50" aria-label="Close"></button> <div class="relative bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 w-full max-w-lg max-h-[90vh] overflow-y-auto"><div class="p-6"><div class="flex items-center gap-2 mb-4"><svg class="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"></path></svg> <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Execute Verdict</h3></div> <!></div></div></div>'), fl = /* @__PURE__ */ L('<div class="w-full max-w-5xl mx-auto px-4 py-6"><div class="flex items-center gap-3 mb-6"><div class="w-10 h-10 rounded-lg bg-indigo-100 dark:bg-indigo-900/40 flex items-center justify-center"><svg class="w-5 h-5 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg></div> <div class="flex-1"><h1 class="text-2xl font-bold text-gray-900 dark:text-white">Justice & Litigation</h1></div> <button class="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors disabled:opacity-50"><!></button></div> <!> <!> <!></div>');
function ul(e, t) {
  ii(t, !0);
  let r = /* @__PURE__ */ N("list"), n = /* @__PURE__ */ N(Pt([])), i = /* @__PURE__ */ N(0), a = /* @__PURE__ */ N("member"), u = /* @__PURE__ */ N(!0), o = /* @__PURE__ */ N(""), l = /* @__PURE__ */ N("");
  Gn(() => {
    const g = t.ctx.principal;
    if (typeof g == "string")
      m(l, g, !0);
    else if (g && typeof g.subscribe == "function")
      return g.subscribe((Be) => m(l, Be || "", !0));
  });
  let f = /* @__PURE__ */ N(""), v = /* @__PURE__ */ N(""), _ = /* @__PURE__ */ N(""), p = /* @__PURE__ */ N(!1), h = /* @__PURE__ */ N(""), d = /* @__PURE__ */ N(!1), w = /* @__PURE__ */ N(!1), y = /* @__PURE__ */ N(null), M = /* @__PURE__ */ N(""), S = /* @__PURE__ */ N(!1), B = /* @__PURE__ */ N(""), K = /* @__PURE__ */ N(!1), qe = /* @__PURE__ */ $r(() => c(n).filter((g) => g.status === "pending").length), Ne = /* @__PURE__ */ $r(() => c(n).filter((g) => g.status === "in_review").length), ct = /* @__PURE__ */ $r(() => c(n).filter((g) => g.status === "resolved").length);
  async function $(g, V = {}) {
    return await t.ctx.callSync(g, V);
  }
  async function te() {
    m(u, !0), m(o, "");
    try {
      const g = await $("get_litigations", {
        user_principal: c(l),
        user_profile: c(a)
      }), V = g?.data ?? g;
      m(n, V?.litigations ?? (Array.isArray(V) ? V : []), !0), m(i, V?.total_count ?? c(n).length, !0), V?.user_profile && m(a, V.user_profile, !0);
    } catch (g) {
      m(o, g?.message || String(g), !0);
    } finally {
      m(u, !1);
    }
  }
  async function Lr() {
    if (!c(f).trim() || !c(v).trim() || !c(_).trim()) {
      m(h, "All fields are required");
      return;
    }
    m(p, !0), m(h, ""), m(d, !1);
    try {
      await $("create_litigation", {
        requester_principal: c(l),
        defendant_principal: c(_).trim(),
        case_title: c(f).trim(),
        description: c(v).trim()
      }), m(d, !0), m(f, ""), m(v, ""), m(_, ""), await te(), setTimeout(
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
  function zr(g) {
    m(y, g, !0), m(M, `transfer("${g.defendant_principal || ""}", "${g.requester_principal || ""}", 1000, "Compensation for ${g.case_title || ""}")`), m(B, ""), m(K, !1), m(w, !0);
  }
  function Ir() {
    m(w, !1), m(y, null), m(M, ""), m(B, ""), m(K, !1);
  }
  async function Oi() {
    if (!c(y) || !c(M).trim()) {
      m(B, "Verdict code is required");
      return;
    }
    m(S, !0), m(B, ""), m(K, !1);
    try {
      await $("execute_verdict", {
        litigation_id: c(y).id,
        verdict_code: c(M).trim(),
        executor_principal: c(l)
      }), m(K, !0), await te(), setTimeout(Ir, 1500);
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
  Gn(() => {
    c(l) ? te() : (m(u, !1), m(o, "User not authenticated"));
  });
  var Mn = fl(), Dn = b(Mn), jr = x(b(Dn), 4), Ui = b(jr);
  {
    var Yi = (g) => {
      var V = Is();
      D(g, V);
    }, Gi = (g) => {
      var V = en("↻ Refresh");
      D(g, V);
    };
    H(Ui, (g) => {
      c(u) ? g(Yi) : g(Gi, -1);
    });
  }
  var Rn = x(Dn, 2);
  {
    var Ki = (g) => {
      var V = js(), Be = x(b(V));
      le(() => j(Be, ` ${c(o) ?? ""}`)), D(g, V);
    };
    H(Rn, (g) => {
      c(o) && !c(u) && g(Ki);
    });
  }
  var Nn = x(Rn, 2);
  {
    var Wi = (g) => {
      var V = Os();
      D(g, V);
    }, Ji = (g) => {
      var V = rl(), Be = Qr(V), hr = b(Be), Or = x(b(hr)), qr = b(Or), Br = x(hr, 2), Gt = x(b(Br)), pr = b(Gt), Kt = x(Be, 2), vt = b(Kt), Hr = x(b(vt)), Wt = x(vt, 2), Jt = x(Wt, 2), Ur = x(Kt, 2), Yr = b(Ur);
      {
        var Gr = (ce) => {
          var Ce = Ts(), He = Qr(Ce);
          {
            var Ue = (re) => {
              var ne = qs(), Se = x(b(ne), 2), ve = b(Se);
              le(() => j(ve, c(a) === "admin" ? "No litigations found in the system." : "You have no litigation cases.")), D(re, ne);
            }, et = (re) => {
              var ne = Xs(), Se = b(ne), ve = b(Se), tt = b(ve), rt = x(b(tt), 4);
              {
                var R = (W) => {
                  var I = Bs();
                  D(W, I);
                };
                H(rt, (W) => {
                  c(a) === "admin" && W(R);
                });
              }
              var G = x(rt, 2);
              {
                var Ye = (W) => {
                  var I = Hs();
                  D(W, I);
                }, ht = (W) => {
                  var I = Us();
                  D(W, I);
                };
                H(G, (W) => {
                  c(a) === "admin" ? W(Ye) : W(ht, -1);
                });
              }
              var Xt = x(ve);
              Ps(Xt, 21, () => c(n), (W) => W.id, (W, I) => {
                var gr = Js(), P = b(gr), Pe = b(P), br = x(P), Pn = b(br), $i = b(Pn), Qi = x(Pn, 2);
                {
                  var ea = (J) => {
                    var he = Ys(), pt = b(he);
                    le(() => j(pt, c(I).description)), D(J, he);
                  };
                  H(Qi, (J) => {
                    c(I).description && J(ea);
                  });
                }
                var Fn = x(br), Vn = b(Fn), ta = b(Vn), Ln = x(Fn), ra = b(Ln), zn = x(Ln);
                {
                  var na = (J) => {
                    var he = Gs(), pt = b(he);
                    le((Wr) => j(pt, Wr), [() => An(c(I).defendant_principal)]), D(J, he);
                  };
                  H(zn, (J) => {
                    c(a) === "admin" && J(na);
                  });
                }
                var In = x(zn), ia = b(In), aa = x(In), sa = b(aa);
                {
                  var la = (J) => {
                    var he = Ks();
                    Fe("click", he, (pt) => {
                      pt.stopPropagation(), zr(c(I));
                    }), D(J, he);
                  }, oa = (J) => {
                    var he = Ws();
                    D(J, he);
                  };
                  H(sa, (J) => {
                    c(a) === "admin" && c(I).status !== "resolved" ? J(la) : c(I).status === "resolved" && J(oa, 1);
                  });
                }
                le(
                  (J, he, pt, Wr) => {
                    j(Pe, c(I).case_number || c(I).id), j($i, c(I).case_title), xr(Vn, 1, `inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${J ?? ""}`), j(ta, he), j(ra, pt), j(ia, Wr);
                  },
                  [
                    () => Bi(c(I).status),
                    () => c(I).status?.replace("_", " ") || "unknown",
                    () => An(c(I).requester_principal),
                    () => Hi(c(I).requested_at)
                  ]
                ), D(W, gr);
              }), D(re, ne);
            };
            H(He, (re) => {
              c(n).length === 0 ? re(Ue) : re(et, -1);
            });
          }
          D(ce, Ce);
        }, Kr = (ce) => {
          var Ce = el(), He = x(b(Ce), 4), Ue = b(He), et = x(b(Ue), 2), re = x(Ue, 2), ne = x(b(re), 2), Se = x(re, 2), ve = x(b(Se), 2), tt = x(He, 2);
          {
            var rt = (P) => {
              var Pe = Zs(), br = x(b(Pe));
              le(() => j(br, ` ${c(h) ?? ""}`)), D(P, Pe);
            };
            H(tt, (P) => {
              c(h) && P(rt);
            });
          }
          var R = x(tt, 2);
          {
            var G = (P) => {
              var Pe = $s();
              D(P, Pe);
            };
            H(R, (P) => {
              c(d) && P(G);
            });
          }
          var Ye = x(R, 2), ht = b(Ye), Xt = x(ht, 2), W = b(Xt);
          {
            var I = (P) => {
              var Pe = Qs();
              D(P, Pe);
            }, gr = (P) => {
              var Pe = en("Create Litigation");
              D(P, Pe);
            };
            H(W, (P) => {
              c(p) ? P(I) : P(gr, -1);
            });
          }
          le(
            (P) => {
              et.disabled = c(p), ne.disabled = c(p), ve.disabled = c(p), ht.disabled = c(p), Xt.disabled = P;
            },
            [
              () => c(p) || !c(f).trim() || !c(v).trim() || !c(_).trim()
            ]
          ), yr(et, () => c(_), (P) => m(_, P)), yr(ne, () => c(f), (P) => m(f, P)), yr(ve, () => c(v), (P) => m(v, P)), Fe("click", ht, qi), Fe("click", Xt, Lr), D(ce, Ce);
        }, _r = (ce) => {
          var Ce = tl(), He = b(Ce), Ue = x(b(He), 2), et = b(Ue), re = x(He, 2), ne = x(b(re), 2), Se = b(ne), ve = x(re, 2), tt = x(b(ve), 2), rt = b(tt), R = x(ve, 2), G = x(b(R), 2), Ye = b(G);
          le(() => {
            j(et, c(i)), j(Se, c(qe)), j(rt, c(Ne)), j(Ye, c(ct));
          }), D(ce, Ce);
        };
        H(Yr, (ce) => {
          c(r) === "list" ? ce(Gr) : c(r) === "create" ? ce(Kr, 1) : c(r) === "stats" && ce(_r, 2);
        });
      }
      le(() => {
        j(qr, c(a)), j(pr, c(i)), xr(vt, 1, `flex items-center gap-2 px-4 py-2.5 text-sm font-medium -mb-0.5 border-b-2 transition-colors ${c(r) === "list" ? "border-indigo-600 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400" : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"}`), j(Hr, ` ${c(a) === "admin" ? "All Litigations" : "My Litigations"}`), xr(Wt, 1, `flex items-center gap-2 px-4 py-2.5 text-sm font-medium -mb-0.5 border-b-2 transition-colors ${c(r) === "create" ? "border-indigo-600 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400" : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"}`), xr(Jt, 1, `flex items-center gap-2 px-4 py-2.5 text-sm font-medium -mb-0.5 border-b-2 transition-colors ${c(r) === "stats" ? "border-indigo-600 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400" : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"}`);
      }), Fe("click", vt, () => m(r, "list")), Fe("click", Wt, () => m(r, "create")), Fe("click", Jt, () => m(r, "stats")), D(g, V);
    };
    H(Nn, (g) => {
      c(u) ? g(Wi) : g(Ji, -1);
    });
  }
  var Xi = x(Nn, 2);
  {
    var Zi = (g) => {
      var V = ol(), Be = b(V), hr = x(Be, 2), Or = b(hr), qr = x(b(Or), 2);
      {
        var Br = (Gt) => {
          var pr = ll(), Kt = Qr(pr), vt = b(Kt), Hr = x(b(vt), 2), Wt = b(Hr), Jt = x(vt, 2), Ur = x(b(Jt), 2), Yr = b(Ur), Gr = x(Jt, 2);
          {
            var Kr = (R) => {
              var G = nl(), Ye = x(b(G), 2), ht = b(Ye);
              le(() => j(ht, c(y).description)), D(R, G);
            };
            H(Gr, (R) => {
              c(y).description && R(Kr);
            });
          }
          var _r = x(Kt, 2), ce = x(b(_r), 2), Ce = x(_r, 2);
          {
            var He = (R) => {
              var G = il(), Ye = x(b(G));
              le(() => j(Ye, ` ${c(B) ?? ""}`)), D(R, G);
            };
            H(Ce, (R) => {
              c(B) && R(He);
            });
          }
          var Ue = x(Ce, 2);
          {
            var et = (R) => {
              var G = al();
              D(R, G);
            };
            H(Ue, (R) => {
              c(K) && R(et);
            });
          }
          var re = x(Ue, 2), ne = b(re), Se = x(ne, 2), ve = b(Se);
          {
            var tt = (R) => {
              var G = sl();
              D(R, G);
            }, rt = (R) => {
              var G = en("Execute Verdict");
              D(R, G);
            };
            H(ve, (R) => {
              c(S) ? R(tt) : R(rt, -1);
            });
          }
          le(
            (R) => {
              j(Wt, c(y).id), j(Yr, c(y).case_title), ce.disabled = c(S), ne.disabled = c(S), Se.disabled = R;
            },
            [() => c(S) || !c(M).trim()]
          ), yr(ce, () => c(M), (R) => m(M, R)), Fe("click", ne, Ir), Fe("click", Se, Oi), D(Gt, pr);
        };
        H(qr, (Gt) => {
          c(y) && Gt(Br);
        });
      }
      Fe("click", Be, Ir), D(g, V);
    };
    H(Xi, (g) => {
      c(w) && g(Zi);
    });
  }
  le(() => jr.disabled = c(u)), Fe("click", jr, te), D(e, Mn), ai();
}
ks(["click"]);
function vl(e, t) {
  const r = As(ul, { target: e, props: { ctx: t } });
  return {
    unmount() {
      try {
        Ds(r);
      } catch {
      }
    }
  };
}
export {
  vl as default
};
