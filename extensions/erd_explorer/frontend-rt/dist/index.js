var gi = Object.defineProperty;
var tn = (e) => {
  throw TypeError(e);
};
var mi = (e, t, r) => t in e ? gi(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var pe = (e, t, r) => mi(e, typeof t != "symbol" ? t + "" : t, r), Rr = (e, t, r) => t.has(e) || tn("Cannot " + r);
var l = (e, t, r) => (Rr(e, t, "read from private field"), r ? r.call(e) : t.get(e)), m = (e, t, r) => t.has(e) ? tn("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), y = (e, t, r, n) => (Rr(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r), A = (e, t, r) => (Rr(e, t, "access private method"), r);
var gn = Array.isArray, bi = Array.prototype.indexOf, Mt = Array.prototype.includes, yr = Array.from, wi = Object.defineProperty, Bt = Object.getOwnPropertyDescriptor, yi = Object.prototype, Ei = Array.prototype, xi = Object.getPrototypeOf, rn = Object.isExtensible;
const ki = () => {
};
function Si(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function mn() {
  var e, t, r = new Promise((n, i) => {
    e = n, t = i;
  });
  return { promise: r, resolve: e, reject: t };
}
const G = 2, Dt = 4, Er = 8, bn = 1 << 24, Ae = 16, ye = 32, Je = 64, Mr = 128, ue = 512, I = 1024, Y = 2048, Ne = 4096, J = 8192, ce = 16384, gt = 32768, nn = 1 << 25, Ft = 65536, Dr = 1 << 17, Ti = 1 << 18, jt = 1 << 19, Ai = 1 << 20, Te = 1 << 25, ht = 65536, _r = 1 << 21, Yt = 1 << 22, We = 1 << 23, Cr = Symbol("$state"), Ie = new class extends Error {
  constructor() {
    super(...arguments);
    pe(this, "name", "StaleReactionError");
    pe(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
function Ni() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Ri(e, t, r) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function Ci(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Oi() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Mi(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Di() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Fi() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Ii() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function zi() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Pi() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
const ji = 1, Li = 2, wn = 4, qi = 8, Vi = 16, Hi = 1, Bi = 2, j = Symbol(), Ui = "http://www.w3.org/1999/xhtml";
function Yi() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function Gi() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function yn(e) {
  return e === this.v;
}
function Ki(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function En(e) {
  return !Ki(e, this.v);
}
let ve = null;
function It(e) {
  ve = e;
}
function xn(e, t = !1, r) {
  ve = {
    p: ve,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    r: (
      /** @type {Effect} */
      x
    ),
    l: null
  };
}
function kn(e) {
  var t = (
    /** @type {ComponentContext} */
    ve
  ), r = t.e;
  if (r !== null) {
    t.e = null;
    for (var n of r)
      Un(n);
  }
  return t.i = !0, ve = t.p, /** @type {T} */
  {};
}
function Sn() {
  return !0;
}
let St = [];
function Wi() {
  var e = St;
  St = [], Si(e);
}
function ot(e) {
  if (St.length === 0) {
    var t = St;
    queueMicrotask(() => {
      t === St && Wi();
    });
  }
  St.push(e);
}
function Tn(e) {
  var t = x;
  if (t === null)
    return E.f |= We, e;
  if ((t.f & gt) === 0 && (t.f & Dt) === 0)
    throw e;
  Ke(e, t);
}
function Ke(e, t) {
  for (; t !== null; ) {
    if ((t.f & Mr) !== 0) {
      if ((t.f & gt) === 0)
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
const Ji = -7169;
function O(e, t) {
  e.f = e.f & Ji | t;
}
function Ur(e) {
  (e.f & ue) !== 0 || e.deps === null ? O(e, I) : O(e, Ne);
}
function An(e) {
  if (e !== null)
    for (const t of e)
      (t.f & G) === 0 || (t.f & ht) === 0 || (t.f ^= ht, An(
        /** @type {Derived} */
        t.deps
      ));
}
function Nn(e, t, r) {
  (e.f & Y) !== 0 ? t.add(e) : (e.f & Ne) !== 0 && r.add(e), An(e.deps), O(e, I);
}
const et = /* @__PURE__ */ new Set();
let k = null, be = null, Fr = null, Or = !1, Tt = null, ar = null;
var sn = 0;
let Xi = 1;
var At, Nt, it, ze, xe, Kt, re, Wt, Ye, Pe, ke, Rt, Ct, st, F, or, Rn, ur, Ir, cr, Zi;
const mr = class mr {
  constructor() {
    m(this, F);
    pe(this, "id", Xi++);
    /**
     * The current values of any signals that are updated in this batch.
     * Tuple format: [value, is_derived] (note: is_derived is false for deriveds, too, if they were overridden via assignment)
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Value, [any, boolean]>}
     */
    pe(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any signals (sources and deriveds) that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Value, any>}
     */
    pe(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<(batch: Batch) => void>}
     */
    m(this, At, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    m(this, Nt, /* @__PURE__ */ new Set());
    /**
     * Callbacks that should run only when a fork is committed.
     * @type {Set<(batch: Batch) => void>}
     */
    m(this, it, /* @__PURE__ */ new Set());
    /**
     * Async effects that are currently in flight
     * @type {Map<Effect, number>}
     */
    m(this, ze, /* @__PURE__ */ new Map());
    /**
     * Async effects that are currently in flight, _not_ inside a pending boundary
     * @type {Map<Effect, number>}
     */
    m(this, xe, /* @__PURE__ */ new Map());
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    m(this, Kt, null);
    /**
     * The root effects that need to be flushed
     * @type {Effect[]}
     */
    m(this, re, []);
    /**
     * Effects created while this batch was active.
     * @type {Effect[]}
     */
    m(this, Wt, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    m(this, Ye, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    m(this, Pe, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    m(this, ke, /* @__PURE__ */ new Map());
    /**
     * Inverse of #skipped_branches which we need to tell prior batches to unskip them when committing
     * @type {Set<Effect>}
     */
    m(this, Rt, /* @__PURE__ */ new Set());
    pe(this, "is_fork", !1);
    m(this, Ct, !1);
    /** @type {Set<Batch>} */
    m(this, st, /* @__PURE__ */ new Set());
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(t) {
    l(this, ke).has(t) || l(this, ke).set(t, { d: [], m: [] }), l(this, Rt).delete(t);
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   * @param {(e: Effect) => void} callback
   */
  unskip_effect(t, r = (n) => this.schedule(n)) {
    var n = l(this, ke).get(t);
    if (n) {
      l(this, ke).delete(t);
      for (var i of n.d)
        O(i, Y), r(i);
      for (i of n.m)
        O(i, Ne), r(i);
    }
    l(this, Rt).add(t);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Value} source
   * @param {any} value
   * @param {boolean} [is_derived]
   */
  capture(t, r, n = !1) {
    t.v !== j && !this.previous.has(t) && this.previous.set(t, t.v), (t.f & We) === 0 && (this.current.set(t, [r, n]), be?.set(t, r)), this.is_fork || (t.v = r);
  }
  activate() {
    k = this;
  }
  deactivate() {
    k = null, be = null;
  }
  flush() {
    try {
      Or = !0, k = this, A(this, F, ur).call(this);
    } finally {
      sn = 0, Fr = null, Tt = null, ar = null, Or = !1, k = null, be = null, ut.clear();
    }
  }
  discard() {
    for (const t of l(this, Nt)) t(this);
    l(this, Nt).clear(), l(this, it).clear(), et.delete(this);
  }
  /**
   * @param {Effect} effect
   */
  register_created_effect(t) {
    l(this, Wt).push(t);
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  increment(t, r) {
    let n = l(this, ze).get(r) ?? 0;
    if (l(this, ze).set(r, n + 1), t) {
      let i = l(this, xe).get(r) ?? 0;
      l(this, xe).set(r, i + 1);
    }
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   * @param {boolean} skip - whether to skip updates (because this is triggered by a stale reaction)
   */
  decrement(t, r, n) {
    let i = l(this, ze).get(r) ?? 0;
    if (i === 1 ? l(this, ze).delete(r) : l(this, ze).set(r, i - 1), t) {
      let s = l(this, xe).get(r) ?? 0;
      s === 1 ? l(this, xe).delete(r) : l(this, xe).set(r, s - 1);
    }
    l(this, Ct) || n || (y(this, Ct, !0), ot(() => {
      y(this, Ct, !1), this.flush();
    }));
  }
  /**
   * @param {Set<Effect>} dirty_effects
   * @param {Set<Effect>} maybe_dirty_effects
   */
  transfer_effects(t, r) {
    for (const n of t)
      l(this, Ye).add(n);
    for (const n of r)
      l(this, Pe).add(n);
    t.clear(), r.clear();
  }
  /** @param {(batch: Batch) => void} fn */
  oncommit(t) {
    l(this, At).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    l(this, Nt).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  on_fork_commit(t) {
    l(this, it).add(t);
  }
  run_fork_commit_callbacks() {
    for (const t of l(this, it)) t(this);
    l(this, it).clear();
  }
  settled() {
    return (l(this, Kt) ?? y(this, Kt, mn())).promise;
  }
  static ensure() {
    if (k === null) {
      const t = k = new mr();
      Or || (et.add(k), ot(() => {
        k === t && t.flush();
      }));
    }
    return k;
  }
  apply() {
    {
      be = null;
      return;
    }
  }
  /**
   *
   * @param {Effect} effect
   */
  schedule(t) {
    if (Fr = t, t.b?.is_pending && (t.f & (Dt | Er | bn)) !== 0 && (t.f & gt) === 0) {
      t.b.defer_effect(t);
      return;
    }
    for (var r = t; r.parent !== null; ) {
      r = r.parent;
      var n = r.f;
      if (Tt !== null && r === x && (E === null || (E.f & G) === 0))
        return;
      if ((n & (Je | ye)) !== 0) {
        if ((n & I) === 0)
          return;
        r.f ^= I;
      }
    }
    l(this, re).push(r);
  }
};
At = new WeakMap(), Nt = new WeakMap(), it = new WeakMap(), ze = new WeakMap(), xe = new WeakMap(), Kt = new WeakMap(), re = new WeakMap(), Wt = new WeakMap(), Ye = new WeakMap(), Pe = new WeakMap(), ke = new WeakMap(), Rt = new WeakMap(), Ct = new WeakMap(), st = new WeakMap(), F = new WeakSet(), or = function() {
  return this.is_fork || l(this, xe).size > 0;
}, Rn = function() {
  for (const n of l(this, st))
    for (const i of l(n, xe).keys()) {
      for (var t = !1, r = i; r.parent !== null; ) {
        if (l(this, ke).has(r)) {
          t = !0;
          break;
        }
        r = r.parent;
      }
      if (!t)
        return !0;
    }
  return !1;
}, ur = function() {
  var o;
  if (sn++ > 1e3 && (et.delete(this), Qi()), !A(this, F, or).call(this)) {
    for (const f of l(this, Ye))
      l(this, Pe).delete(f), O(f, Y), this.schedule(f);
    for (const f of l(this, Pe))
      O(f, Ne), this.schedule(f);
  }
  const t = l(this, re);
  y(this, re, []), this.apply();
  var r = Tt = [], n = [], i = ar = [];
  for (const f of t)
    try {
      A(this, F, Ir).call(this, f, r, n);
    } catch (u) {
      throw Mn(f), u;
    }
  if (k = null, i.length > 0) {
    var s = mr.ensure();
    for (const f of i)
      s.schedule(f);
  }
  if (Tt = null, ar = null, A(this, F, or).call(this) || A(this, F, Rn).call(this)) {
    A(this, F, cr).call(this, n), A(this, F, cr).call(this, r);
    for (const [f, u] of l(this, ke))
      On(f, u);
  } else {
    l(this, ze).size === 0 && et.delete(this), l(this, Ye).clear(), l(this, Pe).clear();
    for (const f of l(this, At)) f(this);
    l(this, At).clear(), ln(n), ln(r), l(this, Kt)?.resolve();
  }
  var a = (
    /** @type {Batch | null} */
    /** @type {unknown} */
    k
  );
  if (l(this, re).length > 0) {
    const f = a ?? (a = this);
    l(f, re).push(...l(this, re).filter((u) => !l(f, re).includes(u)));
  }
  a !== null && (et.add(a), A(o = a, F, ur).call(o));
}, /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
Ir = function(t, r, n) {
  t.f ^= I;
  for (var i = t.first; i !== null; ) {
    var s = i.f, a = (s & (ye | Je)) !== 0, o = a && (s & I) !== 0, f = o || (s & J) !== 0 || l(this, ke).has(i);
    if (!f && i.fn !== null) {
      a ? i.f ^= I : (s & Dt) !== 0 ? r.push(i) : er(i) && ((s & Ae) !== 0 && l(this, Pe).add(i), Pt(i));
      var u = i.first;
      if (u !== null) {
        i = u;
        continue;
      }
    }
    for (; i !== null; ) {
      var c = i.next;
      if (c !== null) {
        i = c;
        break;
      }
      i = i.parent;
    }
  }
}, /**
 * @param {Effect[]} effects
 */
cr = function(t) {
  for (var r = 0; r < t.length; r += 1)
    Nn(t[r], l(this, Ye), l(this, Pe));
}, Zi = function() {
  var c, g, h;
  for (const v of et) {
    var t = v.id < this.id, r = [];
    for (const [_, [b, d]] of this.current) {
      if (v.current.has(_)) {
        var n = (
          /** @type {[any, boolean]} */
          v.current.get(_)[0]
        );
        if (t && b !== n)
          v.current.set(_, [b, d]);
        else
          continue;
      }
      r.push(_);
    }
    var i = [...v.current.keys()].filter((_) => !this.current.has(_));
    if (i.length === 0)
      t && v.discard();
    else if (r.length > 0) {
      if (t)
        for (const _ of l(this, Rt))
          v.unskip_effect(_, (b) => {
            var d;
            (b.f & (Ae | Yt)) !== 0 ? v.schedule(b) : A(d = v, F, cr).call(d, [b]);
          });
      v.activate();
      var s = /* @__PURE__ */ new Set(), a = /* @__PURE__ */ new Map();
      for (var o of r)
        Cn(o, i, s, a);
      a = /* @__PURE__ */ new Map();
      var f = [...v.current.keys()].filter(
        (_) => this.current.has(_) ? (
          /** @type {[any, boolean]} */
          this.current.get(_)[0] !== _
        ) : !0
      );
      for (const _ of l(this, Wt))
        (_.f & (ce | J | Dr)) === 0 && Yr(_, f, a) && ((_.f & (Yt | Ae)) !== 0 ? (O(_, Y), v.schedule(_)) : l(v, Ye).add(_));
      if (l(v, re).length > 0) {
        v.apply();
        for (var u of l(v, re))
          A(c = v, F, Ir).call(c, u, [], []);
        y(v, re, []);
      }
      v.deactivate();
    }
  }
  for (const v of et)
    l(v, st).has(this) && (l(v, st).delete(this), l(v, st).size === 0 && !A(g = v, F, or).call(g) && (v.activate(), A(h = v, F, ur).call(h)));
};
let _t = mr;
function Qi() {
  try {
    Di();
  } catch (e) {
    Ke(e, Fr);
  }
}
let Fe = null;
function ln(e) {
  var t = e.length;
  if (t !== 0) {
    for (var r = 0; r < t; ) {
      var n = e[r++];
      if ((n.f & (ce | J)) === 0 && er(n) && (Fe = /* @__PURE__ */ new Set(), Pt(n), n.deps === null && n.first === null && n.nodes === null && n.teardown === null && n.ac === null && Gn(n), Fe?.size > 0)) {
        ut.clear();
        for (const i of Fe) {
          if ((i.f & (ce | J)) !== 0) continue;
          const s = [i];
          let a = i.parent;
          for (; a !== null; )
            Fe.has(a) && (Fe.delete(a), s.push(a)), a = a.parent;
          for (let o = s.length - 1; o >= 0; o--) {
            const f = s[o];
            (f.f & (ce | J)) === 0 && Pt(f);
          }
        }
        Fe.clear();
      }
    }
    Fe = null;
  }
}
function Cn(e, t, r, n) {
  if (!r.has(e) && (r.add(e), e.reactions !== null))
    for (const i of e.reactions) {
      const s = i.f;
      (s & G) !== 0 ? Cn(
        /** @type {Derived} */
        i,
        t,
        r,
        n
      ) : (s & (Yt | Ae)) !== 0 && (s & Y) === 0 && Yr(i, t, n) && (O(i, Y), Gr(
        /** @type {Effect} */
        i
      ));
    }
}
function Yr(e, t, r) {
  const n = r.get(e);
  if (n !== void 0) return n;
  if (e.deps !== null)
    for (const i of e.deps) {
      if (Mt.call(t, i))
        return !0;
      if ((i.f & G) !== 0 && Yr(
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
function Gr(e) {
  k.schedule(e);
}
function On(e, t) {
  if (!((e.f & ye) !== 0 && (e.f & I) !== 0)) {
    (e.f & Y) !== 0 ? t.d.push(e) : (e.f & Ne) !== 0 && t.m.push(e), O(e, I);
    for (var r = e.first; r !== null; )
      On(r, t), r = r.next;
  }
}
function Mn(e) {
  O(e, I);
  for (var t = e.first; t !== null; )
    Mn(t), t = t.next;
}
function $i(e) {
  let t = 0, r = pt(0), n;
  return () => {
    Jr() && (p(r), ks(() => (t === 0 && (n = Rs(() => e(() => Ut(r)))), t += 1, () => {
      ot(() => {
        t -= 1, t === 0 && (n?.(), n = void 0, Ut(r));
      });
    })));
  };
}
var es = Ft | jt;
function ts(e, t, r, n) {
  new rs(e, t, r, n);
}
var le, Br, fe, lt, Z, ae, W, ne, je, ft, Ge, Ot, Jt, Xt, Le, br, C, ns, is, ss, zr, dr, vr, Pr, jr;
class rs {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(t, r, n, i) {
    m(this, C);
    /** @type {Boundary | null} */
    pe(this, "parent");
    pe(this, "is_pending", !1);
    /**
     * API-level transformError transform function. Transforms errors before they reach the `failed` snippet.
     * Inherited from parent boundary, or defaults to identity.
     * @type {(error: unknown) => unknown}
     */
    pe(this, "transform_error");
    /** @type {TemplateNode} */
    m(this, le);
    /** @type {TemplateNode | null} */
    m(this, Br, null);
    /** @type {BoundaryProps} */
    m(this, fe);
    /** @type {((anchor: Node) => void)} */
    m(this, lt);
    /** @type {Effect} */
    m(this, Z);
    /** @type {Effect | null} */
    m(this, ae, null);
    /** @type {Effect | null} */
    m(this, W, null);
    /** @type {Effect | null} */
    m(this, ne, null);
    /** @type {DocumentFragment | null} */
    m(this, je, null);
    m(this, ft, 0);
    m(this, Ge, 0);
    m(this, Ot, !1);
    /** @type {Set<Effect>} */
    m(this, Jt, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    m(this, Xt, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    m(this, Le, null);
    m(this, br, $i(() => (y(this, Le, pt(l(this, ft))), () => {
      y(this, Le, null);
    })));
    y(this, le, t), y(this, fe, r), y(this, lt, (s) => {
      var a = (
        /** @type {Effect} */
        x
      );
      a.b = this, a.f |= Mr, n(s);
    }), this.parent = /** @type {Effect} */
    x.b, this.transform_error = i ?? this.parent?.transform_error ?? ((s) => s), y(this, Z, Xr(() => {
      A(this, C, zr).call(this);
    }, es));
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    Nn(t, l(this, Jt), l(this, Xt));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!l(this, fe).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  update_pending_count(t, r) {
    A(this, C, Pr).call(this, t, r), y(this, ft, l(this, ft) + t), !(!l(this, Le) || l(this, Ot)) && (y(this, Ot, !0), ot(() => {
      y(this, Ot, !1), l(this, Le) && zt(l(this, Le), l(this, ft));
    }));
  }
  get_effect_pending() {
    return l(this, br).call(this), p(
      /** @type {Source<number>} */
      l(this, Le)
    );
  }
  /** @param {unknown} error */
  error(t) {
    if (!l(this, fe).onerror && !l(this, fe).failed)
      throw t;
    k?.is_fork ? (l(this, ae) && k.skip_effect(l(this, ae)), l(this, W) && k.skip_effect(l(this, W)), l(this, ne) && k.skip_effect(l(this, ne)), k.on_fork_commit(() => {
      A(this, C, jr).call(this, t);
    })) : A(this, C, jr).call(this, t);
  }
}
le = new WeakMap(), Br = new WeakMap(), fe = new WeakMap(), lt = new WeakMap(), Z = new WeakMap(), ae = new WeakMap(), W = new WeakMap(), ne = new WeakMap(), je = new WeakMap(), ft = new WeakMap(), Ge = new WeakMap(), Ot = new WeakMap(), Jt = new WeakMap(), Xt = new WeakMap(), Le = new WeakMap(), br = new WeakMap(), C = new WeakSet(), ns = function() {
  try {
    y(this, ae, oe(() => l(this, lt).call(this, l(this, le))));
  } catch (t) {
    this.error(t);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
is = function(t) {
  const r = l(this, fe).failed;
  r && y(this, ne, oe(() => {
    r(
      l(this, le),
      () => t,
      () => () => {
      }
    );
  }));
}, ss = function() {
  const t = l(this, fe).pending;
  t && (this.is_pending = !0, y(this, W, oe(() => t(l(this, le)))), ot(() => {
    var r = y(this, je, document.createDocumentFragment()), n = ct();
    r.append(n), y(this, ae, A(this, C, vr).call(this, () => oe(() => l(this, lt).call(this, n)))), l(this, Ge) === 0 && (l(this, le).before(r), y(this, je, null), dt(
      /** @type {Effect} */
      l(this, W),
      () => {
        y(this, W, null);
      }
    ), A(this, C, dr).call(
      this,
      /** @type {Batch} */
      k
    ));
  }));
}, zr = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), y(this, Ge, 0), y(this, ft, 0), y(this, ae, oe(() => {
      l(this, lt).call(this, l(this, le));
    })), l(this, Ge) > 0) {
      var t = y(this, je, document.createDocumentFragment());
      $r(l(this, ae), t);
      const r = (
        /** @type {(anchor: Node) => void} */
        l(this, fe).pending
      );
      y(this, W, oe(() => r(l(this, le))));
    } else
      A(this, C, dr).call(
        this,
        /** @type {Batch} */
        k
      );
  } catch (r) {
    this.error(r);
  }
}, /**
 * @param {Batch} batch
 */
dr = function(t) {
  this.is_pending = !1, t.transfer_effects(l(this, Jt), l(this, Xt));
}, /**
 * @template T
 * @param {() => T} fn
 */
vr = function(t) {
  var r = x, n = E, i = ve;
  Re(l(this, Z)), he(l(this, Z)), It(l(this, Z).ctx);
  try {
    return _t.ensure(), t();
  } catch (s) {
    return Tn(s), null;
  } finally {
    Re(r), he(n), It(i);
  }
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 * @param {Batch} batch
 */
Pr = function(t, r) {
  var n;
  if (!this.has_pending_snippet()) {
    this.parent && A(n = this.parent, C, Pr).call(n, t, r);
    return;
  }
  y(this, Ge, l(this, Ge) + t), l(this, Ge) === 0 && (A(this, C, dr).call(this, r), l(this, W) && dt(l(this, W), () => {
    y(this, W, null);
  }), l(this, je) && (l(this, le).before(l(this, je)), y(this, je, null)));
}, /**
 * @param {unknown} error
 */
jr = function(t) {
  l(this, ae) && ($(l(this, ae)), y(this, ae, null)), l(this, W) && ($(l(this, W)), y(this, W, null)), l(this, ne) && ($(l(this, ne)), y(this, ne, null));
  var r = l(this, fe).onerror;
  let n = l(this, fe).failed;
  var i = !1, s = !1;
  const a = () => {
    if (i) {
      Gi();
      return;
    }
    i = !0, s && Pi(), l(this, ne) !== null && dt(l(this, ne), () => {
      y(this, ne, null);
    }), A(this, C, vr).call(this, () => {
      A(this, C, zr).call(this);
    });
  }, o = (f) => {
    try {
      s = !0, r?.(f, a), s = !1;
    } catch (u) {
      Ke(u, l(this, Z) && l(this, Z).parent);
    }
    n && y(this, ne, A(this, C, vr).call(this, () => {
      try {
        return oe(() => {
          var u = (
            /** @type {Effect} */
            x
          );
          u.b = this, u.f |= Mr, n(
            l(this, le),
            () => f,
            () => a
          );
        });
      } catch (u) {
        return Ke(
          u,
          /** @type {Effect} */
          l(this, Z).parent
        ), null;
      }
    }));
  };
  ot(() => {
    var f;
    try {
      f = this.transform_error(t);
    } catch (u) {
      Ke(u, l(this, Z) && l(this, Z).parent);
      return;
    }
    f !== null && typeof f == "object" && typeof /** @type {any} */
    f.then == "function" ? f.then(
      o,
      /** @param {unknown} e */
      (u) => Ke(u, l(this, Z) && l(this, Z).parent)
    ) : o(f);
  });
};
function ls(e, t, r, n) {
  const i = Kr;
  var s = e.filter((h) => !h.settled);
  if (r.length === 0 && s.length === 0) {
    n(t.map(i));
    return;
  }
  var a = (
    /** @type {Effect} */
    x
  ), o = fs(), f = s.length === 1 ? s[0].promise : s.length > 1 ? Promise.all(s.map((h) => h.promise)) : null;
  function u(h) {
    o();
    try {
      n(h);
    } catch (v) {
      (a.f & ce) === 0 && Ke(v, a);
    }
    pr();
  }
  if (r.length === 0) {
    f.then(() => u(t.map(i)));
    return;
  }
  var c = Dn();
  function g() {
    Promise.all(r.map((h) => /* @__PURE__ */ as(h))).then((h) => u([...t.map(i), ...h])).catch((h) => Ke(h, a)).finally(() => c());
  }
  f ? f.then(() => {
    o(), g(), pr();
  }) : g();
}
function fs() {
  var e = (
    /** @type {Effect} */
    x
  ), t = E, r = ve, n = (
    /** @type {Batch} */
    k
  );
  return function(s = !0) {
    Re(e), he(t), It(r), s && (e.f & ce) === 0 && (n?.activate(), n?.apply());
  };
}
function pr(e = !0) {
  Re(null), he(null), It(null), e && k?.deactivate();
}
function Dn() {
  var e = (
    /** @type {Effect} */
    x
  ), t = (
    /** @type {Boundary} */
    e.b
  ), r = (
    /** @type {Batch} */
    k
  ), n = t.is_rendered();
  return t.update_pending_count(1, r), r.increment(n, e), (i = !1) => {
    t.update_pending_count(-1, r), r.decrement(n, e, i);
  };
}
// @__NO_SIDE_EFFECTS__
function Kr(e) {
  var t = G | Y;
  return x !== null && (x.f |= jt), {
    ctx: ve,
    deps: null,
    effects: null,
    equals: yn,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      j
    ),
    wv: 0,
    parent: x,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function as(e, t, r) {
  let n = (
    /** @type {Effect | null} */
    x
  );
  n === null && Ni();
  var i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), s = pt(
    /** @type {V} */
    j
  ), a = !E, o = /* @__PURE__ */ new Map();
  return xs(() => {
    var f = (
      /** @type {Effect} */
      x
    ), u = mn();
    i = u.promise;
    try {
      Promise.resolve(e()).then(u.resolve, u.reject).finally(pr);
    } catch (v) {
      u.reject(v), pr();
    }
    var c = (
      /** @type {Batch} */
      k
    );
    if (a) {
      if ((f.f & gt) !== 0)
        var g = Dn();
      if (
        /** @type {Boundary} */
        n.b.is_rendered()
      )
        o.get(c)?.reject(Ie), o.delete(c);
      else {
        for (const v of o.values())
          v.reject(Ie);
        o.clear();
      }
      o.set(c, u);
    }
    const h = (v, _ = void 0) => {
      if (g) {
        var b = _ === Ie;
        g(b);
      }
      if (!(_ === Ie || (f.f & ce) !== 0)) {
        if (c.activate(), _)
          s.f |= We, zt(s, _);
        else {
          (s.f & We) !== 0 && (s.f ^= We), zt(s, v);
          for (const [d, w] of o) {
            if (o.delete(d), d === c) break;
            w.reject(Ie);
          }
        }
        c.deactivate();
      }
    };
    u.promise.then(h, (v) => h(null, v || "unknown"));
  }), bs(() => {
    for (const f of o.values())
      f.reject(Ie);
  }), new Promise((f) => {
    function u(c) {
      function g() {
        c === i ? f(s) : u(i);
      }
      c.then(g, g);
    }
    u(i);
  });
}
// @__NO_SIDE_EFFECTS__
function os(e) {
  const t = /* @__PURE__ */ Kr(e);
  return Jn(t), t;
}
// @__NO_SIDE_EFFECTS__
function us(e) {
  const t = /* @__PURE__ */ Kr(e);
  return t.equals = En, t;
}
function cs(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var r = 0; r < t.length; r += 1)
      $(
        /** @type {Effect} */
        t[r]
      );
  }
}
function Wr(e) {
  var t, r = x, n = e.parent;
  if (!Xe && n !== null && (n.f & (ce | J)) !== 0)
    return Yi(), e.v;
  Re(n);
  try {
    e.f &= ~ht, cs(e), t = $n(e);
  } finally {
    Re(r);
  }
  return t;
}
function Fn(e) {
  var t = Wr(e);
  if (!e.equals(t) && (e.wv = Zn(), (!k?.is_fork || e.deps === null) && (k !== null ? k.capture(e, t, !0) : e.v = t, e.deps === null))) {
    O(e, I);
    return;
  }
  Xe || (be !== null ? (Jr() || k?.is_fork) && be.set(e, t) : Ur(e));
}
function ds(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      (t.teardown || t.ac) && (t.teardown?.(), t.ac?.abort(Ie), t.teardown = ki, t.ac = null, Gt(t, 0), Zr(t));
}
function In(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      t.teardown && Pt(t);
}
let Lr = /* @__PURE__ */ new Set();
const ut = /* @__PURE__ */ new Map();
let zn = !1;
function pt(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: yn,
    rv: 0,
    wv: 0
  };
  return r;
}
// @__NO_SIDE_EFFECTS__
function U(e, t) {
  const r = pt(e);
  return Jn(r), r;
}
// @__NO_SIDE_EFFECTS__
function vs(e, t = !1, r = !0) {
  const n = pt(e);
  return t || (n.equals = En), n;
}
function D(e, t, r = !1) {
  E !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!we || (E.f & Dr) !== 0) && Sn() && (E.f & (G | Ae | Yt | Dr)) !== 0 && (de === null || !Mt.call(de, e)) && zi();
  let n = r ? tt(t) : t;
  return zt(e, n, ar);
}
function zt(e, t, r = null) {
  if (!e.equals(t)) {
    ut.set(e, Xe ? t : e.v);
    var n = _t.ensure();
    if (n.capture(e, t), (e.f & G) !== 0) {
      const i = (
        /** @type {Derived} */
        e
      );
      (e.f & Y) !== 0 && Wr(i), be === null && Ur(i);
    }
    e.wv = Zn(), Pn(e, Y, r), x !== null && (x.f & I) !== 0 && (x.f & (ye | Je)) === 0 && (se === null ? As([e]) : se.push(e)), !n.is_fork && Lr.size > 0 && !zn && hs();
  }
  return t;
}
function hs() {
  zn = !1;
  for (const e of Lr)
    (e.f & I) !== 0 && O(e, Ne), er(e) && Pt(e);
  Lr.clear();
}
function Ut(e) {
  D(e, e.v + 1);
}
function Pn(e, t, r) {
  var n = e.reactions;
  if (n !== null)
    for (var i = n.length, s = 0; s < i; s++) {
      var a = n[s], o = a.f, f = (o & Y) === 0;
      if (f && O(a, t), (o & G) !== 0) {
        var u = (
          /** @type {Derived} */
          a
        );
        be?.delete(u), (o & ht) === 0 && (o & ue && (x === null || (x.f & _r) === 0) && (a.f |= ht), Pn(u, Ne, r));
      } else if (f) {
        var c = (
          /** @type {Effect} */
          a
        );
        (o & Ae) !== 0 && Fe !== null && Fe.add(c), r !== null ? r.push(c) : Gr(c);
      }
    }
}
function tt(e) {
  if (typeof e != "object" || e === null || Cr in e)
    return e;
  const t = xi(e);
  if (t !== yi && t !== Ei)
    return e;
  var r = /* @__PURE__ */ new Map(), n = gn(e), i = /* @__PURE__ */ U(0), s = vt, a = (o) => {
    if (vt === s)
      return o();
    var f = E, u = vt;
    he(null), un(s);
    var c = o();
    return he(f), un(u), c;
  };
  return n && r.set("length", /* @__PURE__ */ U(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(o, f, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && Fi();
        var c = r.get(f);
        return c === void 0 ? a(() => {
          var g = /* @__PURE__ */ U(u.value);
          return r.set(f, g), g;
        }) : D(c, u.value, !0), !0;
      },
      deleteProperty(o, f) {
        var u = r.get(f);
        if (u === void 0) {
          if (f in o) {
            const c = a(() => /* @__PURE__ */ U(j));
            r.set(f, c), Ut(i);
          }
        } else
          D(u, j), Ut(i);
        return !0;
      },
      get(o, f, u) {
        if (f === Cr)
          return e;
        var c = r.get(f), g = f in o;
        if (c === void 0 && (!g || Bt(o, f)?.writable) && (c = a(() => {
          var v = tt(g ? o[f] : j), _ = /* @__PURE__ */ U(v);
          return _;
        }), r.set(f, c)), c !== void 0) {
          var h = p(c);
          return h === j ? void 0 : h;
        }
        return Reflect.get(o, f, u);
      },
      getOwnPropertyDescriptor(o, f) {
        var u = Reflect.getOwnPropertyDescriptor(o, f);
        if (u && "value" in u) {
          var c = r.get(f);
          c && (u.value = p(c));
        } else if (u === void 0) {
          var g = r.get(f), h = g?.v;
          if (g !== void 0 && h !== j)
            return {
              enumerable: !0,
              configurable: !0,
              value: h,
              writable: !0
            };
        }
        return u;
      },
      has(o, f) {
        if (f === Cr)
          return !0;
        var u = r.get(f), c = u !== void 0 && u.v !== j || Reflect.has(o, f);
        if (u !== void 0 || x !== null && (!c || Bt(o, f)?.writable)) {
          u === void 0 && (u = a(() => {
            var h = c ? tt(o[f]) : j, v = /* @__PURE__ */ U(h);
            return v;
          }), r.set(f, u));
          var g = p(u);
          if (g === j)
            return !1;
        }
        return c;
      },
      set(o, f, u, c) {
        var g = r.get(f), h = f in o;
        if (n && f === "length")
          for (var v = u; v < /** @type {Source<number>} */
          g.v; v += 1) {
            var _ = r.get(v + "");
            _ !== void 0 ? D(_, j) : v in o && (_ = a(() => /* @__PURE__ */ U(j)), r.set(v + "", _));
          }
        if (g === void 0)
          (!h || Bt(o, f)?.writable) && (g = a(() => /* @__PURE__ */ U(void 0)), D(g, tt(u)), r.set(f, g));
        else {
          h = g.v !== j;
          var b = a(() => tt(u));
          D(g, b);
        }
        var d = Reflect.getOwnPropertyDescriptor(o, f);
        if (d?.set && d.set.call(c, u), !h) {
          if (n && typeof f == "string") {
            var w = (
              /** @type {Source<number>} */
              r.get("length")
            ), z = Number(f);
            Number.isInteger(z) && z >= w.v && D(w, z + 1);
          }
          Ut(i);
        }
        return !0;
      },
      ownKeys(o) {
        p(i);
        var f = Reflect.ownKeys(o).filter((g) => {
          var h = r.get(g);
          return h === void 0 || h.v !== j;
        });
        for (var [u, c] of r)
          c.v !== j && !(u in o) && f.push(u);
        return f;
      },
      setPrototypeOf() {
        Ii();
      }
    }
  );
}
var fn, jn, Ln, qn;
function _s() {
  if (fn === void 0) {
    fn = window, jn = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, r = Text.prototype;
    Ln = Bt(t, "firstChild").get, qn = Bt(t, "nextSibling").get, rn(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), rn(r) && (r.__t = void 0);
  }
}
function ct(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function gr(e) {
  return (
    /** @type {TemplateNode | null} */
    Ln.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function $t(e) {
  return (
    /** @type {TemplateNode | null} */
    qn.call(e)
  );
}
function T(e, t) {
  return /* @__PURE__ */ gr(e);
}
function an(e, t = !1) {
  {
    var r = /* @__PURE__ */ gr(e);
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ $t(r) : r;
  }
}
function M(e, t = 1, r = !1) {
  let n = e;
  for (; t--; )
    n = /** @type {TemplateNode} */
    /* @__PURE__ */ $t(n);
  return n;
}
function ps(e) {
  e.textContent = "";
}
function Vn() {
  return !1;
}
function Hn(e, t, r) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElementNS(Ui, e, void 0)
  );
}
function Bn(e) {
  var t = E, r = x;
  he(null), Re(null);
  try {
    return e();
  } finally {
    he(t), Re(r);
  }
}
function gs(e) {
  x === null && (E === null && Mi(), Oi()), Xe && Ci();
}
function ms(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function qe(e, t) {
  var r = x;
  r !== null && (r.f & J) !== 0 && (e |= J);
  var n = {
    ctx: ve,
    deps: null,
    nodes: null,
    f: e | Y | ue,
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
  k?.register_created_effect(n);
  var i = n;
  if ((e & Dt) !== 0)
    Tt !== null ? Tt.push(n) : _t.ensure().schedule(n);
  else if (t !== null) {
    try {
      Pt(n);
    } catch (a) {
      throw $(n), a;
    }
    i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && // either `null`, or a singular child
    (i.f & jt) === 0 && (i = i.first, (e & Ae) !== 0 && (e & Ft) !== 0 && i !== null && (i.f |= Ft));
  }
  if (i !== null && (i.parent = r, r !== null && ms(i, r), E !== null && (E.f & G) !== 0 && (e & Je) === 0)) {
    var s = (
      /** @type {Derived} */
      E
    );
    (s.effects ?? (s.effects = [])).push(i);
  }
  return n;
}
function Jr() {
  return E !== null && !we;
}
function bs(e) {
  const t = qe(Er, null);
  return O(t, I), t.teardown = e, t;
}
function ws(e) {
  gs();
  var t = (
    /** @type {Effect} */
    x.f
  ), r = !E && (t & ye) !== 0 && (t & gt) === 0;
  if (r) {
    var n = (
      /** @type {ComponentContext} */
      ve
    );
    (n.e ?? (n.e = [])).push(e);
  } else
    return Un(e);
}
function Un(e) {
  return qe(Dt | Ai, e);
}
function ys(e) {
  _t.ensure();
  const t = qe(Je | jt, e);
  return (r = {}) => new Promise((n) => {
    r.outro ? dt(t, () => {
      $(t), n(void 0);
    }) : ($(t), n(void 0));
  });
}
function Es(e) {
  return qe(Dt, e);
}
function xs(e) {
  return qe(Yt | jt, e);
}
function ks(e, t = 0) {
  return qe(Er | t, e);
}
function ge(e, t = [], r = [], n = []) {
  ls(n, t, r, (i) => {
    qe(Er, () => e(...i.map(p)));
  });
}
function Xr(e, t = 0) {
  var r = qe(Ae | t, e);
  return r;
}
function oe(e) {
  return qe(ye | jt, e);
}
function Yn(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = Xe, n = E;
    on(!0), he(null);
    try {
      t.call(null);
    } finally {
      on(r), he(n);
    }
  }
}
function Zr(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    const i = r.ac;
    i !== null && Bn(() => {
      i.abort(Ie);
    });
    var n = r.next;
    (r.f & Je) !== 0 ? r.parent = null : $(r, t), r = n;
  }
}
function Ss(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & ye) === 0 && $(t), t = r;
  }
}
function $(e, t = !0) {
  var r = !1;
  (t || (e.f & Ti) !== 0) && e.nodes !== null && e.nodes.end !== null && (Ts(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), r = !0), O(e, nn), Zr(e, t && !r), Gt(e, 0);
  var n = e.nodes && e.nodes.t;
  if (n !== null)
    for (const s of n)
      s.stop();
  Yn(e), e.f ^= nn, e.f |= ce;
  var i = e.parent;
  i !== null && i.first !== null && Gn(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function Ts(e, t) {
  for (; e !== null; ) {
    var r = e === t ? null : /* @__PURE__ */ $t(e);
    e.remove(), e = r;
  }
}
function Gn(e) {
  var t = e.parent, r = e.prev, n = e.next;
  r !== null && (r.next = n), n !== null && (n.prev = r), t !== null && (t.first === e && (t.first = n), t.last === e && (t.last = r));
}
function dt(e, t, r = !0) {
  var n = [];
  Kn(e, n, !0);
  var i = () => {
    r && $(e), t && t();
  }, s = n.length;
  if (s > 0) {
    var a = () => --s || i();
    for (var o of n)
      o.out(a);
  } else
    i();
}
function Kn(e, t, r) {
  if ((e.f & J) === 0) {
    e.f ^= J;
    var n = e.nodes && e.nodes.t;
    if (n !== null)
      for (const o of n)
        (o.is_global || r) && t.push(o);
    for (var i = e.first; i !== null; ) {
      var s = i.next;
      if ((i.f & Je) === 0) {
        var a = (i.f & Ft) !== 0 || // If this is a branch effect without a block effect parent,
        // it means the parent block effect was pruned. In that case,
        // transparency information was transferred to the branch effect.
        (i.f & ye) !== 0 && (e.f & Ae) !== 0;
        Kn(i, t, a ? r : !1);
      }
      i = s;
    }
  }
}
function Qr(e) {
  Wn(e, !0);
}
function Wn(e, t) {
  if ((e.f & J) !== 0) {
    e.f ^= J, (e.f & I) === 0 && (O(e, Y), _t.ensure().schedule(e));
    for (var r = e.first; r !== null; ) {
      var n = r.next, i = (r.f & Ft) !== 0 || (r.f & ye) !== 0;
      Wn(r, i ? t : !1), r = n;
    }
    var s = e.nodes && e.nodes.t;
    if (s !== null)
      for (const a of s)
        (a.is_global || t) && a.in();
  }
}
function $r(e, t) {
  if (e.nodes)
    for (var r = e.nodes.start, n = e.nodes.end; r !== null; ) {
      var i = r === n ? null : /* @__PURE__ */ $t(r);
      t.append(r), r = i;
    }
}
let hr = !1, Xe = !1;
function on(e) {
  Xe = e;
}
let E = null, we = !1;
function he(e) {
  E = e;
}
let x = null;
function Re(e) {
  x = e;
}
let de = null;
function Jn(e) {
  E !== null && (de === null ? de = [e] : de.push(e));
}
let Q = null, te = 0, se = null;
function As(e) {
  se = e;
}
let Xn = 1, rt = 0, vt = rt;
function un(e) {
  vt = e;
}
function Zn() {
  return ++Xn;
}
function er(e) {
  var t = e.f;
  if ((t & Y) !== 0)
    return !0;
  if (t & G && (e.f &= ~ht), (t & Ne) !== 0) {
    for (var r = (
      /** @type {Value[]} */
      e.deps
    ), n = r.length, i = 0; i < n; i++) {
      var s = r[i];
      if (er(
        /** @type {Derived} */
        s
      ) && Fn(
        /** @type {Derived} */
        s
      ), s.wv > e.wv)
        return !0;
    }
    (t & ue) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    be === null && O(e, I);
  }
  return !1;
}
function Qn(e, t, r = !0) {
  var n = e.reactions;
  if (n !== null && !(de !== null && Mt.call(de, e)))
    for (var i = 0; i < n.length; i++) {
      var s = n[i];
      (s.f & G) !== 0 ? Qn(
        /** @type {Derived} */
        s,
        t,
        !1
      ) : t === s && (r ? O(s, Y) : (s.f & I) !== 0 && O(s, Ne), Gr(
        /** @type {Effect} */
        s
      ));
    }
}
function $n(e) {
  var b;
  var t = Q, r = te, n = se, i = E, s = de, a = ve, o = we, f = vt, u = e.f;
  Q = /** @type {null | Value[]} */
  null, te = 0, se = null, E = (u & (ye | Je)) === 0 ? e : null, de = null, It(e.ctx), we = !1, vt = ++rt, e.ac !== null && (Bn(() => {
    e.ac.abort(Ie);
  }), e.ac = null);
  try {
    e.f |= _r;
    var c = (
      /** @type {Function} */
      e.fn
    ), g = c();
    e.f |= gt;
    var h = e.deps, v = k?.is_fork;
    if (Q !== null) {
      var _;
      if (v || Gt(e, te), h !== null && te > 0)
        for (h.length = te + Q.length, _ = 0; _ < Q.length; _++)
          h[te + _] = Q[_];
      else
        e.deps = h = Q;
      if (Jr() && (e.f & ue) !== 0)
        for (_ = te; _ < h.length; _++)
          ((b = h[_]).reactions ?? (b.reactions = [])).push(e);
    } else !v && h !== null && te < h.length && (Gt(e, te), h.length = te);
    if (Sn() && se !== null && !we && h !== null && (e.f & (G | Ne | Y)) === 0)
      for (_ = 0; _ < /** @type {Source[]} */
      se.length; _++)
        Qn(
          se[_],
          /** @type {Effect} */
          e
        );
    if (i !== null && i !== e) {
      if (rt++, i.deps !== null)
        for (let d = 0; d < r; d += 1)
          i.deps[d].rv = rt;
      if (t !== null)
        for (const d of t)
          d.rv = rt;
      se !== null && (n === null ? n = se : n.push(.../** @type {Source[]} */
      se));
    }
    return (e.f & We) !== 0 && (e.f ^= We), g;
  } catch (d) {
    return Tn(d);
  } finally {
    e.f ^= _r, Q = t, te = r, se = n, E = i, de = s, It(a), we = o, vt = f;
  }
}
function Ns(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var n = bi.call(r, e);
    if (n !== -1) {
      var i = r.length - 1;
      i === 0 ? r = t.reactions = null : (r[n] = r[i], r.pop());
    }
  }
  if (r === null && (t.f & G) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Q === null || !Mt.call(Q, t))) {
    var s = (
      /** @type {Derived} */
      t
    );
    (s.f & ue) !== 0 && (s.f ^= ue, s.f &= ~ht), s.v !== j && Ur(s), ds(s), Gt(s, 0);
  }
}
function Gt(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var n = t; n < r.length; n++)
      Ns(e, r[n]);
}
function Pt(e) {
  var t = e.f;
  if ((t & ce) === 0) {
    O(e, I);
    var r = x, n = hr;
    x = e, hr = !0;
    try {
      (t & (Ae | bn)) !== 0 ? Ss(e) : Zr(e), Yn(e);
      var i = $n(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = Xn;
      var s;
    } finally {
      hr = n, x = r;
    }
  }
}
function p(e) {
  var t = e.f, r = (t & G) !== 0;
  if (E !== null && !we) {
    var n = x !== null && (x.f & ce) !== 0;
    if (!n && (de === null || !Mt.call(de, e))) {
      var i = E.deps;
      if ((E.f & _r) !== 0)
        e.rv < rt && (e.rv = rt, Q === null && i !== null && i[te] === e ? te++ : Q === null ? Q = [e] : Q.push(e));
      else {
        (E.deps ?? (E.deps = [])).push(e);
        var s = e.reactions;
        s === null ? e.reactions = [E] : Mt.call(s, E) || s.push(E);
      }
    }
  }
  if (Xe && ut.has(e))
    return ut.get(e);
  if (r) {
    var a = (
      /** @type {Derived} */
      e
    );
    if (Xe) {
      var o = a.v;
      return ((a.f & I) === 0 && a.reactions !== null || ti(a)) && (o = Wr(a)), ut.set(a, o), o;
    }
    var f = (a.f & ue) === 0 && !we && E !== null && (hr || (E.f & ue) !== 0), u = (a.f & gt) === 0;
    er(a) && (f && (a.f |= ue), Fn(a)), f && !u && (In(a), ei(a));
  }
  if (be?.has(e))
    return be.get(e);
  if ((e.f & We) !== 0)
    throw e.v;
  return e.v;
}
function ei(e) {
  if (e.f |= ue, e.deps !== null)
    for (const t of e.deps)
      (t.reactions ?? (t.reactions = [])).push(e), (t.f & G) !== 0 && (t.f & ue) === 0 && (In(
        /** @type {Derived} */
        t
      ), ei(
        /** @type {Derived} */
        t
      ));
}
function ti(e) {
  if (e.v === j) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (ut.has(t) || (t.f & G) !== 0 && ti(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function Rs(e) {
  var t = we;
  try {
    return we = !0, e();
  } finally {
    we = t;
  }
}
const Cs = ["touchstart", "touchmove"];
function Os(e) {
  return Cs.includes(e);
}
const nt = Symbol("events"), ri = /* @__PURE__ */ new Set(), qr = /* @__PURE__ */ new Set();
function sr(e, t, r) {
  (t[nt] ?? (t[nt] = {}))[e] = r;
}
function Ms(e) {
  for (var t = 0; t < e.length; t++)
    ri.add(e[t]);
  for (var r of qr)
    r(e);
}
let cn = null;
function dn(e) {
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), n = e.type, i = e.composedPath?.() || [], s = (
    /** @type {null | Element} */
    i[0] || e.target
  );
  cn = e;
  var a = 0, o = cn === e && e[nt];
  if (o) {
    var f = i.indexOf(o);
    if (f !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e[nt] = t;
      return;
    }
    var u = i.indexOf(t);
    if (u === -1)
      return;
    f <= u && (a = f);
  }
  if (s = /** @type {Element} */
  i[a] || e.target, s !== t) {
    wi(e, "currentTarget", {
      configurable: !0,
      get() {
        return s || r;
      }
    });
    var c = E, g = x;
    he(null), Re(null);
    try {
      for (var h, v = []; s !== null; ) {
        var _ = s.assignedSlot || s.parentNode || /** @type {any} */
        s.host || null;
        try {
          var b = s[nt]?.[n];
          b != null && (!/** @type {any} */
          s.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === s) && b.call(s, e);
        } catch (d) {
          h ? v.push(d) : h = d;
        }
        if (e.cancelBubble || _ === t || _ === null)
          break;
        s = _;
      }
      if (h) {
        for (let d of v)
          queueMicrotask(() => {
            throw d;
          });
        throw h;
      }
    } finally {
      e[nt] = t, delete e.currentTarget, he(c), Re(g);
    }
  }
}
const Ds = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (e) => e
  })
);
function Fs(e) {
  return (
    /** @type {string} */
    Ds?.createHTML(e) ?? e
  );
}
function Is(e) {
  var t = Hn("template");
  return t.innerHTML = Fs(e.replaceAll("<!>", "<!---->")), t.content;
}
function vn(e, t) {
  var r = (
    /** @type {Effect} */
    x
  );
  r.nodes === null && (r.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function V(e, t) {
  var r = (t & Hi) !== 0, n = (t & Bi) !== 0, i, s = !e.startsWith("<!>");
  return () => {
    i === void 0 && (i = Is(s ? e : "<!>" + e), r || (i = /** @type {TemplateNode} */
    /* @__PURE__ */ gr(i)));
    var a = (
      /** @type {TemplateNode} */
      n || jn ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (r) {
      var o = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ gr(a)
      ), f = (
        /** @type {TemplateNode} */
        a.lastChild
      );
      vn(o, f);
    } else
      vn(a, a);
    return a;
  };
}
function q(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function X(e, t) {
  var r = t == null ? "" : typeof t == "object" ? `${t}` : t;
  r !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = r, e.nodeValue = `${r}`);
}
function zs(e, t) {
  return Ps(e, t);
}
const lr = /* @__PURE__ */ new Map();
function Ps(e, { target: t, anchor: r, props: n = {}, events: i, context: s, intro: a = !0, transformError: o }) {
  _s();
  var f = void 0, u = ys(() => {
    var c = r ?? t.appendChild(ct());
    ts(
      /** @type {TemplateNode} */
      c,
      {
        pending: () => {
        }
      },
      (v) => {
        xn({});
        var _ = (
          /** @type {ComponentContext} */
          ve
        );
        s && (_.c = s), i && (n.$$events = i), f = e(v, n) || {}, kn();
      },
      o
    );
    var g = /* @__PURE__ */ new Set(), h = (v) => {
      for (var _ = 0; _ < v.length; _++) {
        var b = v[_];
        if (!g.has(b)) {
          g.add(b);
          var d = Os(b);
          for (const N of [t, document]) {
            var w = lr.get(N);
            w === void 0 && (w = /* @__PURE__ */ new Map(), lr.set(N, w));
            var z = w.get(b);
            z === void 0 ? (N.addEventListener(b, dn, { passive: d }), w.set(b, 1)) : w.set(b, z + 1);
          }
        }
      }
    };
    return h(yr(ri)), qr.add(h), () => {
      for (var v of g)
        for (const d of [t, document]) {
          var _ = (
            /** @type {Map<string, number>} */
            lr.get(d)
          ), b = (
            /** @type {number} */
            _.get(v)
          );
          --b == 0 ? (d.removeEventListener(v, dn), _.delete(v), _.size === 0 && lr.delete(d)) : _.set(v, b);
        }
      qr.delete(h), c !== r && c.parentNode?.removeChild(c);
    };
  });
  return Vr.set(f, u), f;
}
let Vr = /* @__PURE__ */ new WeakMap();
function js(e, t) {
  const r = Vr.get(e);
  return r ? (Vr.delete(e), r(t)) : Promise.resolve();
}
var me, Se, ie, at, Zt, Qt, wr;
class Ls {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, r = !0) {
    /** @type {TemplateNode} */
    pe(this, "anchor");
    /** @type {Map<Batch, Key>} */
    m(this, me, /* @__PURE__ */ new Map());
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
    m(this, Se, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    m(this, ie, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    m(this, at, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    m(this, Zt, !0);
    /**
     * @param {Batch} batch
     */
    m(this, Qt, (t) => {
      if (l(this, me).has(t)) {
        var r = (
          /** @type {Key} */
          l(this, me).get(t)
        ), n = l(this, Se).get(r);
        if (n)
          Qr(n), l(this, at).delete(r);
        else {
          var i = l(this, ie).get(r);
          i && (l(this, Se).set(r, i.effect), l(this, ie).delete(r), i.fragment.lastChild.remove(), this.anchor.before(i.fragment), n = i.effect);
        }
        for (const [s, a] of l(this, me)) {
          if (l(this, me).delete(s), s === t)
            break;
          const o = l(this, ie).get(a);
          o && ($(o.effect), l(this, ie).delete(a));
        }
        for (const [s, a] of l(this, Se)) {
          if (s === r || l(this, at).has(s)) continue;
          const o = () => {
            if (Array.from(l(this, me).values()).includes(s)) {
              var u = document.createDocumentFragment();
              $r(a, u), u.append(ct()), l(this, ie).set(s, { effect: a, fragment: u });
            } else
              $(a);
            l(this, at).delete(s), l(this, Se).delete(s);
          };
          l(this, Zt) || !n ? (l(this, at).add(s), dt(a, o, !1)) : o();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    m(this, wr, (t) => {
      l(this, me).delete(t);
      const r = Array.from(l(this, me).values());
      for (const [n, i] of l(this, ie))
        r.includes(n) || ($(i.effect), l(this, ie).delete(n));
    });
    this.anchor = t, y(this, Zt, r);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, r) {
    var n = (
      /** @type {Batch} */
      k
    ), i = Vn();
    if (r && !l(this, Se).has(t) && !l(this, ie).has(t))
      if (i) {
        var s = document.createDocumentFragment(), a = ct();
        s.append(a), l(this, ie).set(t, {
          effect: oe(() => r(a)),
          fragment: s
        });
      } else
        l(this, Se).set(
          t,
          oe(() => r(this.anchor))
        );
    if (l(this, me).set(n, t), i) {
      for (const [o, f] of l(this, Se))
        o === t ? n.unskip_effect(f) : n.skip_effect(f);
      for (const [o, f] of l(this, ie))
        o === t ? n.unskip_effect(f.effect) : n.skip_effect(f.effect);
      n.oncommit(l(this, Qt)), n.ondiscard(l(this, wr));
    } else
      l(this, Qt).call(this, n);
  }
}
me = new WeakMap(), Se = new WeakMap(), ie = new WeakMap(), at = new WeakMap(), Zt = new WeakMap(), Qt = new WeakMap(), wr = new WeakMap();
function xt(e, t, r = !1) {
  var n = new Ls(e), i = r ? Ft : 0;
  function s(a, o) {
    n.ensure(a, o);
  }
  Xr(() => {
    var a = !1;
    t((o, f = 0) => {
      a = !0, s(f, o);
    }), a || s(-1, null);
  }, i);
}
function qt(e, t) {
  return t;
}
function qs(e, t, r) {
  for (var n = [], i = t.length, s, a = t.length, o = 0; o < i; o++) {
    let g = t[o];
    dt(
      g,
      () => {
        if (s) {
          if (s.pending.delete(g), s.done.add(g), s.pending.size === 0) {
            var h = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            Hr(e, yr(s.done)), h.delete(s), h.size === 0 && (e.outrogroups = null);
          }
        } else
          a -= 1;
      },
      !1
    );
  }
  if (a === 0) {
    var f = n.length === 0 && r !== null;
    if (f) {
      var u = (
        /** @type {Element} */
        r
      ), c = (
        /** @type {Element} */
        u.parentNode
      );
      ps(c), c.append(u), e.items.clear();
    }
    Hr(e, t, !f);
  } else
    s = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ?? (e.outrogroups = /* @__PURE__ */ new Set())).add(s);
}
function Hr(e, t, r = !0) {
  var n;
  if (e.pending.size > 0) {
    n = /* @__PURE__ */ new Set();
    for (const a of e.pending.values())
      for (const o of a)
        n.add(
          /** @type {EachItem} */
          e.items.get(o).e
        );
  }
  for (var i = 0; i < t.length; i++) {
    var s = t[i];
    if (n?.has(s)) {
      s.f |= Te;
      const a = document.createDocumentFragment();
      $r(s, a);
    } else
      $(t[i], r);
  }
}
var hn;
function kt(e, t, r, n, i, s = null) {
  var a = e, o = /* @__PURE__ */ new Map(), f = (t & wn) !== 0;
  if (f) {
    var u = (
      /** @type {Element} */
      e
    );
    a = u.appendChild(ct());
  }
  var c = null, g = /* @__PURE__ */ us(() => {
    var N = r();
    return gn(N) ? N : N == null ? [] : yr(N);
  }), h, v = /* @__PURE__ */ new Map(), _ = !0;
  function b(N) {
    (z.effect.f & ce) === 0 && (z.pending.delete(N), z.fallback = c, Vs(z, h, a, t, n), c !== null && (h.length === 0 ? (c.f & Te) === 0 ? Qr(c) : (c.f ^= Te, Ht(c, null, a)) : dt(c, () => {
      c = null;
    })));
  }
  function d(N) {
    z.pending.delete(N);
  }
  var w = Xr(() => {
    h = /** @type {V[]} */
    p(g);
    for (var N = h.length, H = /* @__PURE__ */ new Set(), _e = (
      /** @type {Batch} */
      k
    ), Ce = Vn(), B = 0; B < N; B += 1) {
      var Oe = h[B], Ve = n(Oe, B), P = _ ? null : o.get(Ve);
      P ? (P.v && zt(P.v, Oe), P.i && zt(P.i, B), Ce && _e.unskip_effect(P.e)) : (P = Hs(
        o,
        _ ? a : hn ?? (hn = ct()),
        Oe,
        Ve,
        B,
        i,
        t,
        r
      ), _ || (P.e.f |= Te), o.set(Ve, P)), H.add(Ve);
    }
    if (N === 0 && s && !c && (_ ? c = oe(() => s(a)) : (c = oe(() => s(hn ?? (hn = ct()))), c.f |= Te)), N > H.size && Ri(), !_)
      if (v.set(_e, H), Ce) {
        for (const [xr, S] of o)
          H.has(xr) || _e.skip_effect(S.e);
        _e.oncommit(b), _e.ondiscard(d);
      } else
        b(_e);
    p(g);
  }), z = { effect: w, items: o, pending: v, outrogroups: null, fallback: c };
  _ = !1;
}
function Vt(e) {
  for (; e !== null && (e.f & ye) === 0; )
    e = e.next;
  return e;
}
function Vs(e, t, r, n, i) {
  var s = (n & qi) !== 0, a = t.length, o = e.items, f = Vt(e.effect.first), u, c = null, g, h = [], v = [], _, b, d, w;
  if (s)
    for (w = 0; w < a; w += 1)
      _ = t[w], b = i(_, w), d = /** @type {EachItem} */
      o.get(b).e, (d.f & Te) === 0 && (d.nodes?.a?.measure(), (g ?? (g = /* @__PURE__ */ new Set())).add(d));
  for (w = 0; w < a; w += 1) {
    if (_ = t[w], b = i(_, w), d = /** @type {EachItem} */
    o.get(b).e, e.outrogroups !== null)
      for (const P of e.outrogroups)
        P.pending.delete(d), P.done.delete(d);
    if ((d.f & J) !== 0 && (Qr(d), s && (d.nodes?.a?.unfix(), (g ?? (g = /* @__PURE__ */ new Set())).delete(d))), (d.f & Te) !== 0)
      if (d.f ^= Te, d === f)
        Ht(d, null, r);
      else {
        var z = c ? c.next : f;
        d === e.effect.last && (e.effect.last = d.prev), d.prev && (d.prev.next = d.next), d.next && (d.next.prev = d.prev), Ue(e, c, d), Ue(e, d, z), Ht(d, z, r), c = d, h = [], v = [], f = Vt(c.next);
        continue;
      }
    if (d !== f) {
      if (u !== void 0 && u.has(d)) {
        if (h.length < v.length) {
          var N = v[0], H;
          c = N.prev;
          var _e = h[0], Ce = h[h.length - 1];
          for (H = 0; H < h.length; H += 1)
            Ht(h[H], N, r);
          for (H = 0; H < v.length; H += 1)
            u.delete(v[H]);
          Ue(e, _e.prev, Ce.next), Ue(e, c, _e), Ue(e, Ce, N), f = N, c = Ce, w -= 1, h = [], v = [];
        } else
          u.delete(d), Ht(d, f, r), Ue(e, d.prev, d.next), Ue(e, d, c === null ? e.effect.first : c.next), Ue(e, c, d), c = d;
        continue;
      }
      for (h = [], v = []; f !== null && f !== d; )
        (u ?? (u = /* @__PURE__ */ new Set())).add(f), v.push(f), f = Vt(f.next);
      if (f === null)
        continue;
    }
    (d.f & Te) === 0 && h.push(d), c = d, f = Vt(d.next);
  }
  if (e.outrogroups !== null) {
    for (const P of e.outrogroups)
      P.pending.size === 0 && (Hr(e, yr(P.done)), e.outrogroups?.delete(P));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (f !== null || u !== void 0) {
    var B = [];
    if (u !== void 0)
      for (d of u)
        (d.f & J) === 0 && B.push(d);
    for (; f !== null; )
      (f.f & J) === 0 && f !== e.fallback && B.push(f), f = Vt(f.next);
    var Oe = B.length;
    if (Oe > 0) {
      var Ve = (n & wn) !== 0 && a === 0 ? r : null;
      if (s) {
        for (w = 0; w < Oe; w += 1)
          B[w].nodes?.a?.measure();
        for (w = 0; w < Oe; w += 1)
          B[w].nodes?.a?.fix();
      }
      qs(e, B, Ve);
    }
  }
  s && ot(() => {
    if (g !== void 0)
      for (d of g)
        d.nodes?.a?.apply();
  });
}
function Hs(e, t, r, n, i, s, a, o) {
  var f = (a & ji) !== 0 ? (a & Vi) === 0 ? /* @__PURE__ */ vs(r, !1, !1) : pt(r) : null, u = (a & Li) !== 0 ? pt(i) : null;
  return {
    v: f,
    i: u,
    e: oe(() => (s(t, f ?? r, u ?? i, o), () => {
      e.delete(n);
    }))
  };
}
function Ht(e, t, r) {
  if (e.nodes)
    for (var n = e.nodes.start, i = e.nodes.end, s = t && (t.f & Te) === 0 ? (
      /** @type {EffectNodes} */
      t.nodes.start
    ) : r; n !== null; ) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ $t(n)
      );
      if (s.before(n), n === i)
        return;
      n = a;
    }
}
function Ue(e, t, r) {
  t === null ? e.effect.first = r : t.next = r, r === null ? e.effect.last = t : r.prev = t;
}
function Bs(e, t) {
  Es(() => {
    var r = e.getRootNode(), n = (
      /** @type {ShadowRoot} */
      r.host ? (
        /** @type {ShadowRoot} */
        r
      ) : (
        /** @type {Document} */
        r.head ?? /** @type {Document} */
        r.ownerDocument.head
      )
    );
    if (!n.querySelector("#" + t.hash)) {
      const i = Hn("style");
      i.id = t.hash, i.textContent = t.code, n.appendChild(i);
    }
  });
}
const _n = [...` 	
\r\f \v\uFEFF`];
function Us(e, t, r) {
  var n = "" + e;
  if (r) {
    for (var i of Object.keys(r))
      if (r[i])
        n = n ? n + " " + i : i;
      else if (n.length)
        for (var s = i.length, a = 0; (a = n.indexOf(i, a)) >= 0; ) {
          var o = a + s;
          (a === 0 || _n.includes(n[a - 1])) && (o === n.length || _n.includes(n[o])) ? n = (a === 0 ? "" : n.substring(0, a)) + n.substring(o + 1) : a = o;
        }
  }
  return n === "" ? null : n;
}
function Ys(e, t, r, n, i, s) {
  var a = e.__className;
  if (a !== r || a === void 0) {
    var o = Us(r, n, s);
    o == null ? e.removeAttribute("class") : e.className = o, e.__className = r;
  } else if (s && i !== s)
    for (var f in s) {
      var u = !!s[f];
      (i == null || u !== !!i[f]) && e.classList.toggle(f, u);
    }
  return s;
}
function fr(e, t, r, n) {
  var i = (
    /** @type {V} */
    n
  ), s = !0, a = () => (s && (s = !1, i = /** @type {V} */
  n), i), o;
  o = /** @type {V} */
  e[t], o === void 0 && n !== void 0 && (o = a());
  var f;
  return f = () => {
    var u = (
      /** @type {V} */
      e[t]
    );
    return u === void 0 ? a() : (s = !0, u);
  }, f;
}
const Gs = "5";
var pn;
typeof window < "u" && ((pn = window.__svelte ?? (window.__svelte = {})).v ?? (pn.v = /* @__PURE__ */ new Set())).add(Gs);
var Ks = /* @__PURE__ */ V('<div class="error svelte-15t67c9"> </div>'), Ws = /* @__PURE__ */ V('<div class="empty svelte-15t67c9">Loading schema…</div>'), Js = /* @__PURE__ */ V('<button> <span class="field-count svelte-15t67c9"> </span></button>'), Xs = /* @__PURE__ */ V('<div class="empty svelte-15t67c9">Select an entity to explore its schema and data</div>'), Zs = /* @__PURE__ */ V('<div class="field svelte-15t67c9"><span class="fname svelte-15t67c9"> </span> <span class="ftype svelte-15t67c9"> </span></div>'), Qs = /* @__PURE__ */ V('<span class="tag svelte-15t67c9"> </span>'), $s = /* @__PURE__ */ V('<div class="rel svelte-15t67c9"><span> </span> <span> </span> <!></div>'), el = /* @__PURE__ */ V('<div class="section svelte-15t67c9"><h4 class="svelte-15t67c9">Relationships</h4> <!></div>'), tl = /* @__PURE__ */ V('<div class="empty svelte-15t67c9">Loading records…</div>'), rl = /* @__PURE__ */ V('<div class="empty svelte-15t67c9">No records</div>'), nl = /* @__PURE__ */ V('<th class="svelte-15t67c9"> </th>'), il = /* @__PURE__ */ V('<td class="svelte-15t67c9"> </td>'), sl = /* @__PURE__ */ V("<tr></tr>"), ll = /* @__PURE__ */ V('<div class="table-wrap svelte-15t67c9"><table class="svelte-15t67c9"><thead><tr></tr></thead><tbody></tbody></table></div> <div class="pagination svelte-15t67c9"><button class="pg svelte-15t67c9">← Prev</button> <span> </span> <button class="pg svelte-15t67c9">Next →</button></div>', 1), fl = /* @__PURE__ */ V('<h3 class="svelte-15t67c9"> </h3> <div class="section svelte-15t67c9"><h4 class="svelte-15t67c9">Fields</h4> <div class="field-list svelte-15t67c9"></div></div> <!> <div class="section svelte-15t67c9"><h4 class="svelte-15t67c9">Data</h4> <!></div>', 1), al = /* @__PURE__ */ V('<div class="two-col svelte-15t67c9"><div class="sidebar svelte-15t67c9"><h3 class="svelte-15t67c9"> </h3> <!></div> <div class="main svelte-15t67c9"><!></div></div>'), ol = /* @__PURE__ */ V('<div class="rt-erd svelte-15t67c9"><div class="header svelte-15t67c9"><h2 class="svelte-15t67c9">ERD Explorer</h2> <span class="badge svelte-15t67c9"> </span> <button class="refresh svelte-15t67c9">↻</button></div> <!> <!></div>');
const ul = {
  hash: "svelte-15t67c9",
  code: `.rt-erd.svelte-15t67c9 {font-family:system-ui, -apple-system, sans-serif;max-width:1000px;margin:0 auto;padding:1.5rem;}.header.svelte-15t67c9 {display:flex;align-items:center;gap:0.75rem;margin-bottom:1rem;flex-wrap:wrap;}.header.svelte-15t67c9 h2:where(.svelte-15t67c9) {margin:0;font-size:1.5rem;}.badge.svelte-15t67c9 {background:#e0e7ff;color:#3730a3;padding:0.15rem 0.5rem;border-radius:9999px;font-size:0.75rem;}.refresh.svelte-15t67c9 {margin-left:auto;padding:0.35rem 0.75rem;background:#f3f4f6;border:1px solid #d1d5db;border-radius:0.5rem;cursor:pointer;font-size:0.8rem;}.error.svelte-15t67c9 {background:#fef2f2;color:#991b1b;border:1px solid #fecaca;padding:0.75rem;border-radius:0.5rem;margin-bottom:1rem;}.empty.svelte-15t67c9 {color:#6b7280;text-align:center;padding:2rem;}.two-col.svelte-15t67c9 {display:grid;grid-template-columns:200px 1fr;gap:1.5rem;}
	@media (max-width: 640px) {.two-col.svelte-15t67c9 {grid-template-columns:1fr;} }.sidebar.svelte-15t67c9 h3:where(.svelte-15t67c9) {margin:0 0 0.5rem;font-size:0.85rem;}.entity-btn.svelte-15t67c9 {display:flex;justify-content:space-between;width:100%;padding:0.4rem 0.5rem;background:none;border:1px solid transparent;border-radius:0.375rem;cursor:pointer;font-size:0.8rem;text-align:left;color:#374151;font-family:inherit;}.entity-btn.svelte-15t67c9:hover {background:#f3f4f6;}.entity-btn.active.svelte-15t67c9 {background:#eef2ff;border-color:#a5b4fc;color:#4f46e5;}.field-count.svelte-15t67c9 {color:#9ca3af;font-size:0.7rem;}.main.svelte-15t67c9 h3:where(.svelte-15t67c9) {margin:0 0 1rem;font-size:1.1rem;}.section.svelte-15t67c9 {margin-bottom:1.25rem;}.section.svelte-15t67c9 h4:where(.svelte-15t67c9) {margin:0 0 0.5rem;font-size:0.85rem;color:#6b7280;}.field-list.svelte-15t67c9 {background:#fff;border:1px solid #e5e7eb;border-radius:0.5rem;overflow:hidden;}.field.svelte-15t67c9 {display:flex;justify-content:space-between;padding:0.35rem 0.75rem;border-bottom:1px solid #f3f4f6;font-size:0.8rem;}.fname.svelte-15t67c9 {font-weight:500;}.ftype.svelte-15t67c9 {color:#6b7280;font-family:ui-monospace, monospace;font-size:0.75rem;}.rel.svelte-15t67c9 {display:flex;gap:0.5rem;padding:0.3rem 0;font-size:0.8rem;align-items:center;}.tag.svelte-15t67c9 {background:#f3f4f6;padding:0.1rem 0.4rem;border-radius:0.25rem;font-size:0.7rem;}.table-wrap.svelte-15t67c9 {overflow-x:auto;}table.svelte-15t67c9 {width:100%;border-collapse:collapse;font-size:0.75rem;}th.svelte-15t67c9 {text-align:left;padding:0.4rem;border-bottom:2px solid #e5e7eb;color:#6b7280;font-weight:500;}td.svelte-15t67c9 {padding:0.35rem 0.4rem;border-bottom:1px solid #f3f4f6;max-width:200px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}.pagination.svelte-15t67c9 {display:flex;align-items:center;gap:0.75rem;margin-top:0.75rem;font-size:0.8rem;}.pg.svelte-15t67c9 {padding:0.25rem 0.5rem;background:#f3f4f6;border:1px solid #d1d5db;border-radius:0.375rem;cursor:pointer;font-size:0.75rem;}.pg.svelte-15t67c9:disabled {opacity:0.4;cursor:not-allowed;}`
};
function cl(e, t) {
  xn(t, !0), Bs(e, ul);
  let r = fr(t, "extensionId", 3, "erd_explorer"), n = fr(t, "version", 3, "");
  fr(t, "principal", 3, ""), fr(t, "isAuthenticated", 3, !0);
  let i = /* @__PURE__ */ U(null), s = /* @__PURE__ */ U(tt([])), a = /* @__PURE__ */ U(""), o = /* @__PURE__ */ U(tt([])), f = /* @__PURE__ */ U(!0), u = /* @__PURE__ */ U(!1), c = /* @__PURE__ */ U(""), g = /* @__PURE__ */ U(0), h = 20;
  async function v(S, R = "{}") {
    const L = await t.backend.extension_sync_call(JSON.stringify({ extension_name: r(), function_name: S, args: R }));
    return JSON.parse(L);
  }
  async function _() {
    D(f, !0), D(c, "");
    try {
      const S = await v("get_entity_schema", "{}");
      D(i, S?.data ?? S, !0), p(i) && typeof p(i) == "object" && D(s, Object.keys(p(i)).filter((R) => !R.startsWith("_")), !0);
    } catch (S) {
      D(c, S?.message || String(S), !0);
    } finally {
      D(f, !1);
    }
  }
  async function b(S, R = 0) {
    D(a, S, !0), D(g, R, !0), D(u, !0);
    try {
      const L = await v("get_entity_data", JSON.stringify({ entity_type: S, offset: R * h, limit: h }));
      D(o, L?.data ?? (Array.isArray(L) ? L : []), !0);
    } catch (L) {
      D(c, L?.message || String(L), !0), D(o, [], !0);
    } finally {
      D(u, !1);
    }
  }
  ws(() => {
    _();
  });
  function d(S) {
    if (!p(i)?.[S]) return [];
    const R = p(i)[S];
    return R.fields && typeof R.fields == "object" ? Object.keys(R.fields) : typeof R == "object" ? Object.keys(R).filter((L) => L !== "relationships") : [];
  }
  function w(S) {
    if (!p(i)?.[S]?.relationships) return [];
    const R = p(i)[S].relationships;
    return Array.isArray(R) ? R : Object.entries(R).map(([L, mt]) => ({ name: L, ...typeof mt == "object" ? mt : { target: mt } }));
  }
  var z = ol(), N = T(z), H = M(T(N), 2), _e = T(H), Ce = M(H, 2), B = M(N, 2);
  {
    var Oe = (S) => {
      var R = Ks(), L = T(R);
      ge(() => X(L, p(c))), q(S, R);
    };
    xt(B, (S) => {
      p(c) && S(Oe);
    });
  }
  var Ve = M(B, 2);
  {
    var P = (S) => {
      var R = Ws();
      q(S, R);
    }, xr = (S) => {
      var R = al(), L = T(R), mt = T(L), ni = T(mt), ii = M(mt, 2);
      kt(ii, 17, () => p(s), qt, (He, Me) => {
        var Ze = Js();
        let tr;
        var Lt = T(Ze), kr = M(Lt), rr = T(kr);
        ge(
          (Sr) => {
            tr = Ys(Ze, 1, "entity-btn svelte-15t67c9", null, tr, { active: p(Me) === p(a) }), X(Lt, `${p(Me) ?? ""} `), X(rr, `${Sr ?? ""} fields`);
          },
          [() => d(p(Me)).length]
        ), sr("click", Ze, () => b(p(Me))), q(He, Ze);
      });
      var si = M(L, 2), li = T(si);
      {
        var fi = (He) => {
          var Me = Xs();
          q(He, Me);
        }, ai = (He) => {
          var Me = fl(), Ze = an(Me), tr = T(Ze), Lt = M(Ze, 2), kr = M(T(Lt), 2);
          kt(kr, 21, () => d(p(a)), qt, (K, ee) => {
            var Qe = Zs(), bt = T(Qe), Ee = T(bt), wt = M(bt, 2), yt = T(wt);
            ge(() => {
              X(Ee, p(ee)), X(yt, p(i)[p(a)]?.fields?.[p(ee)]?.type ?? p(i)[p(a)]?.[p(ee)] ?? "");
            }), q(K, Qe);
          });
          var rr = M(Lt, 2);
          {
            var Sr = (K) => {
              var ee = el(), Qe = M(T(ee), 2);
              kt(Qe, 17, () => w(p(a)), qt, (bt, Ee) => {
                var wt = $s(), yt = T(wt), Tr = T(yt), Et = M(yt, 2), nr = T(Et), Ar = M(Et, 2);
                {
                  var ir = (De) => {
                    var Be = Qs(), $e = T(Be);
                    ge(() => X($e, p(Ee).type)), q(De, Be);
                  };
                  xt(Ar, (De) => {
                    p(Ee).type && De(ir);
                  });
                }
                ge(() => {
                  X(Tr, p(Ee).name || "—"), X(nr, `→ ${(p(Ee).target || p(Ee).entity || "—") ?? ""}`);
                }), q(bt, wt);
              }), q(K, ee);
            }, oi = /* @__PURE__ */ os(() => w(p(a)).length > 0);
            xt(rr, (K) => {
              p(oi) && K(Sr);
            });
          }
          var ui = M(rr, 2), ci = M(T(ui), 2);
          {
            var di = (K) => {
              var ee = tl();
              q(K, ee);
            }, vi = (K) => {
              var ee = rl();
              q(K, ee);
            }, hi = (K) => {
              var ee = ll(), Qe = an(ee), bt = T(Qe), Ee = T(bt), wt = T(Ee);
              kt(wt, 21, () => d(p(a)).slice(0, 6), qt, (De, Be) => {
                var $e = nl(), Nr = T($e);
                ge(() => X(Nr, p(Be))), q(De, $e);
              });
              var yt = M(Ee);
              kt(yt, 23, () => p(o), (De, Be) => De.id || Be, (De, Be) => {
                var $e = sl();
                kt($e, 21, () => d(p(a)).slice(0, 6), qt, (Nr, _i) => {
                  var en = il(), pi = T(en);
                  ge(() => X(pi, p(Be)[p(_i)] ?? "—")), q(Nr, en);
                }), q(De, $e);
              });
              var Tr = M(Qe, 2), Et = T(Tr), nr = M(Et, 2), Ar = T(nr), ir = M(nr, 2);
              ge(() => {
                Et.disabled = p(g) === 0, X(Ar, `Page ${p(g) + 1}`), ir.disabled = p(o).length < h;
              }), sr("click", Et, () => b(p(a), p(g) - 1)), sr("click", ir, () => b(p(a), p(g) + 1)), q(K, ee);
            };
            xt(ci, (K) => {
              p(u) ? K(di) : p(o).length === 0 ? K(vi, 1) : K(hi, -1);
            });
          }
          ge(() => X(tr, p(a))), q(He, Me);
        };
        xt(li, (He) => {
          p(a) ? He(ai, -1) : He(fi);
        });
      }
      ge(() => X(ni, `Entities (${p(s).length ?? ""})`)), q(S, R);
    };
    xt(Ve, (S) => {
      p(f) ? S(P) : S(xr, -1);
    });
  }
  ge(() => {
    X(_e, `v${n() ?? ""}`), Ce.disabled = p(f);
  }), sr("click", Ce, _), q(e, z), kn();
}
Ms(["click"]);
function hl(e, t) {
  const r = zs(cl, { target: e, props: t });
  return {
    unmount() {
      try {
        js(r);
      } catch {
      }
    }
  };
}
export {
  hl as default
};
