var bi = Object.defineProperty;
var ln = (e) => {
  throw TypeError(e);
};
var yi = (e, t, r) => t in e ? bi(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var ye = (e, t, r) => yi(e, typeof t != "symbol" ? t + "" : t, r), Cr = (e, t, r) => t.has(e) || ln("Cannot " + r);
var l = (e, t, r) => (Cr(e, t, "read from private field"), r ? r.call(e) : t.get(e)), m = (e, t, r) => t.has(e) ? ln("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), w = (e, t, r, n) => (Cr(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r), D = (e, t, r) => (Cr(e, t, "access private method"), r);
var En = Array.isArray, wi = Array.prototype.indexOf, Rt = Array.prototype.includes, Er = Array.from, Ei = Object.defineProperty, Bt = Object.getOwnPropertyDescriptor, xi = Object.prototype, ki = Array.prototype, Si = Object.getPrototypeOf, an = Object.isExtensible;
const Ti = () => {
};
function Ai(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function xn() {
  var e, t, r = new Promise((n, i) => {
    e = n, t = i;
  });
  return { promise: r, resolve: e, reject: t };
}
const H = 2, Dt = 4, xr = 8, kn = 1 << 24, Re = 16, ke = 32, Ze = 64, Pr = 128, de = 512, L = 1024, B = 2048, De = 4096, J = 8192, ve = 16384, pt = 32768, fn = 1 << 25, Ft = 65536, zr = 1 << 17, Ci = 1 << 18, It = 1 << 19, Ni = 1 << 20, Ve = 1 << 25, vt = 65536, pr = 1 << 21, Yt = 1 << 22, We = 1 << 23, Nr = Symbol("$state"), Pe = new class extends Error {
  constructor() {
    super(...arguments);
    ye(this, "name", "StaleReactionError");
    ye(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
function Mi() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Ri(e, t, r) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function Di(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Fi() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Oi(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Pi() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function zi() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Ii() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Li() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function ji() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
const Vi = 1, qi = 2, Bi = 16, Hi = 1, Ui = 2, V = Symbol(), Yi = "http://www.w3.org/1999/xhtml";
function Ji() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function Gi() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function Sn(e) {
  return e === this.v;
}
function Ki(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Tn(e) {
  return !Ki(e, this.v);
}
let _e = null;
function Ot(e) {
  _e = e;
}
function An(e, t = !1, r) {
  _e = {
    p: _e,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    r: (
      /** @type {Effect} */
      k
    ),
    l: null
  };
}
function Cn(e) {
  var t = (
    /** @type {ComponentContext} */
    _e
  ), r = t.e;
  if (r !== null) {
    t.e = null;
    for (var n of r)
      Wn(n);
  }
  return t.i = !0, _e = t.p, /** @type {T} */
  {};
}
function Nn() {
  return !0;
}
let rt = [];
function Mn() {
  var e = rt;
  rt = [], Ai(e);
}
function St(e) {
  if (rt.length === 0 && !Ht) {
    var t = rt;
    queueMicrotask(() => {
      t === rt && Mn();
    });
  }
  rt.push(e);
}
function Wi() {
  for (; rt.length > 0; )
    Mn();
}
function Rn(e) {
  var t = k;
  if (t === null)
    return E.f |= We, e;
  if ((t.f & pt) === 0 && (t.f & Dt) === 0)
    throw e;
  Ke(e, t);
}
function Ke(e, t) {
  for (; t !== null; ) {
    if ((t.f & Pr) !== 0) {
      if ((t.f & pt) === 0)
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
const Xi = -7169;
function P(e, t) {
  e.f = e.f & Xi | t;
}
function Kr(e) {
  (e.f & de) !== 0 || e.deps === null ? P(e, L) : P(e, De);
}
function Dn(e) {
  if (e !== null)
    for (const t of e)
      (t.f & H) === 0 || (t.f & vt) === 0 || (t.f ^= vt, Dn(
        /** @type {Derived} */
        t.deps
      ));
}
function Fn(e, t, r) {
  (e.f & B) !== 0 ? t.add(e) : (e.f & De) !== 0 && r.add(e), Dn(e.deps), P(e, L);
}
const et = /* @__PURE__ */ new Set();
let y = null, Ee = null, Ir = null, Ht = !1, Mr = !1, xt = null, or = null;
var on = 0;
let Zi = 1;
var Tt, At, st, ze, Ce, Gt, te, Kt, Je, Ie, Ne, Ct, Nt, lt, z, ur, On, cr, Lr, dr, Qi;
const br = class br {
  constructor() {
    m(this, z);
    ye(this, "id", Zi++);
    /**
     * The current values of any signals that are updated in this batch.
     * Tuple format: [value, is_derived] (note: is_derived is false for deriveds, too, if they were overridden via assignment)
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Value, [any, boolean]>}
     */
    ye(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any signals (sources and deriveds) that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Value, any>}
     */
    ye(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<(batch: Batch) => void>}
     */
    m(this, Tt, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    m(this, At, /* @__PURE__ */ new Set());
    /**
     * Callbacks that should run only when a fork is committed.
     * @type {Set<(batch: Batch) => void>}
     */
    m(this, st, /* @__PURE__ */ new Set());
    /**
     * Async effects that are currently in flight
     * @type {Map<Effect, number>}
     */
    m(this, ze, /* @__PURE__ */ new Map());
    /**
     * Async effects that are currently in flight, _not_ inside a pending boundary
     * @type {Map<Effect, number>}
     */
    m(this, Ce, /* @__PURE__ */ new Map());
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    m(this, Gt, null);
    /**
     * The root effects that need to be flushed
     * @type {Effect[]}
     */
    m(this, te, []);
    /**
     * Effects created while this batch was active.
     * @type {Effect[]}
     */
    m(this, Kt, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    m(this, Je, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    m(this, Ie, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    m(this, Ne, /* @__PURE__ */ new Map());
    /**
     * Inverse of #skipped_branches which we need to tell prior batches to unskip them when committing
     * @type {Set<Effect>}
     */
    m(this, Ct, /* @__PURE__ */ new Set());
    ye(this, "is_fork", !1);
    m(this, Nt, !1);
    /** @type {Set<Batch>} */
    m(this, lt, /* @__PURE__ */ new Set());
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(t) {
    l(this, Ne).has(t) || l(this, Ne).set(t, { d: [], m: [] }), l(this, Ct).delete(t);
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   * @param {(e: Effect) => void} callback
   */
  unskip_effect(t, r = (n) => this.schedule(n)) {
    var n = l(this, Ne).get(t);
    if (n) {
      l(this, Ne).delete(t);
      for (var i of n.d)
        P(i, B), r(i);
      for (i of n.m)
        P(i, De), r(i);
    }
    l(this, Ct).add(t);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Value} source
   * @param {any} value
   * @param {boolean} [is_derived]
   */
  capture(t, r, n = !1) {
    t.v !== V && !this.previous.has(t) && this.previous.set(t, t.v), (t.f & We) === 0 && (this.current.set(t, [r, n]), Ee?.set(t, r)), this.is_fork || (t.v = r);
  }
  activate() {
    y = this;
  }
  deactivate() {
    y = null, Ee = null;
  }
  flush() {
    try {
      Mr = !0, y = this, D(this, z, cr).call(this);
    } finally {
      on = 0, Ir = null, xt = null, or = null, Mr = !1, y = null, Ee = null, ut.clear();
    }
  }
  discard() {
    for (const t of l(this, At)) t(this);
    l(this, At).clear(), l(this, st).clear(), et.delete(this);
  }
  /**
   * @param {Effect} effect
   */
  register_created_effect(t) {
    l(this, Kt).push(t);
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  increment(t, r) {
    let n = l(this, ze).get(r) ?? 0;
    if (l(this, ze).set(r, n + 1), t) {
      let i = l(this, Ce).get(r) ?? 0;
      l(this, Ce).set(r, i + 1);
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
      let s = l(this, Ce).get(r) ?? 0;
      s === 1 ? l(this, Ce).delete(r) : l(this, Ce).set(r, s - 1);
    }
    l(this, Nt) || n || (w(this, Nt, !0), St(() => {
      w(this, Nt, !1), this.flush();
    }));
  }
  /**
   * @param {Set<Effect>} dirty_effects
   * @param {Set<Effect>} maybe_dirty_effects
   */
  transfer_effects(t, r) {
    for (const n of t)
      l(this, Je).add(n);
    for (const n of r)
      l(this, Ie).add(n);
    t.clear(), r.clear();
  }
  /** @param {(batch: Batch) => void} fn */
  oncommit(t) {
    l(this, Tt).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    l(this, At).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  on_fork_commit(t) {
    l(this, st).add(t);
  }
  run_fork_commit_callbacks() {
    for (const t of l(this, st)) t(this);
    l(this, st).clear();
  }
  settled() {
    return (l(this, Gt) ?? w(this, Gt, xn())).promise;
  }
  static ensure() {
    if (y === null) {
      const t = y = new br();
      Mr || (et.add(y), Ht || St(() => {
        y === t && t.flush();
      }));
    }
    return y;
  }
  apply() {
    {
      Ee = null;
      return;
    }
  }
  /**
   *
   * @param {Effect} effect
   */
  schedule(t) {
    if (Ir = t, t.b?.is_pending && (t.f & (Dt | xr | kn)) !== 0 && (t.f & pt) === 0) {
      t.b.defer_effect(t);
      return;
    }
    for (var r = t; r.parent !== null; ) {
      r = r.parent;
      var n = r.f;
      if (xt !== null && r === k && (E === null || (E.f & H) === 0))
        return;
      if ((n & (Ze | ke)) !== 0) {
        if ((n & L) === 0)
          return;
        r.f ^= L;
      }
    }
    l(this, te).push(r);
  }
};
Tt = new WeakMap(), At = new WeakMap(), st = new WeakMap(), ze = new WeakMap(), Ce = new WeakMap(), Gt = new WeakMap(), te = new WeakMap(), Kt = new WeakMap(), Je = new WeakMap(), Ie = new WeakMap(), Ne = new WeakMap(), Ct = new WeakMap(), Nt = new WeakMap(), lt = new WeakMap(), z = new WeakSet(), ur = function() {
  return this.is_fork || l(this, Ce).size > 0;
}, On = function() {
  for (const n of l(this, lt))
    for (const i of l(n, Ce).keys()) {
      for (var t = !1, r = i; r.parent !== null; ) {
        if (l(this, Ne).has(r)) {
          t = !0;
          break;
        }
        r = r.parent;
      }
      if (!t)
        return !0;
    }
  return !1;
}, cr = function() {
  var a;
  if (on++ > 1e3 && (et.delete(this), es()), !D(this, z, ur).call(this)) {
    for (const f of l(this, Je))
      l(this, Ie).delete(f), P(f, B), this.schedule(f);
    for (const f of l(this, Ie))
      P(f, De), this.schedule(f);
  }
  const t = l(this, te);
  w(this, te, []), this.apply();
  var r = xt = [], n = [], i = or = [];
  for (const f of t)
    try {
      D(this, z, Lr).call(this, f, r, n);
    } catch (u) {
      throw In(f), u;
    }
  if (y = null, i.length > 0) {
    var s = br.ensure();
    for (const f of i)
      s.schedule(f);
  }
  if (xt = null, or = null, D(this, z, ur).call(this) || D(this, z, On).call(this)) {
    D(this, z, dr).call(this, n), D(this, z, dr).call(this, r);
    for (const [f, u] of l(this, Ne))
      zn(f, u);
  } else {
    l(this, ze).size === 0 && et.delete(this), l(this, Je).clear(), l(this, Ie).clear();
    for (const f of l(this, Tt)) f(this);
    l(this, Tt).clear(), un(n), un(r), l(this, Gt)?.resolve();
  }
  var o = (
    /** @type {Batch | null} */
    /** @type {unknown} */
    y
  );
  if (l(this, te).length > 0) {
    const f = o ?? (o = this);
    l(f, te).push(...l(this, te).filter((u) => !l(f, te).includes(u)));
  }
  o !== null && (et.add(o), D(a = o, z, cr).call(a));
}, /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
Lr = function(t, r, n) {
  t.f ^= L;
  for (var i = t.first; i !== null; ) {
    var s = i.f, o = (s & (ke | Ze)) !== 0, a = o && (s & L) !== 0, f = a || (s & J) !== 0 || l(this, Ne).has(i);
    if (!f && i.fn !== null) {
      o ? i.f ^= L : (s & Dt) !== 0 ? r.push(i) : er(i) && ((s & Re) !== 0 && l(this, Ie).add(i), zt(i));
      var u = i.first;
      if (u !== null) {
        i = u;
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
dr = function(t) {
  for (var r = 0; r < t.length; r += 1)
    Fn(t[r], l(this, Je), l(this, Ie));
}, Qi = function() {
  var v, _, h;
  for (const d of et) {
    var t = d.id < this.id, r = [];
    for (const [c, [g, b]] of this.current) {
      if (d.current.has(c)) {
        var n = (
          /** @type {[any, boolean]} */
          d.current.get(c)[0]
        );
        if (t && g !== n)
          d.current.set(c, [g, b]);
        else
          continue;
      }
      r.push(c);
    }
    var i = [...d.current.keys()].filter((c) => !this.current.has(c));
    if (i.length === 0)
      t && d.discard();
    else if (r.length > 0) {
      if (t)
        for (const c of l(this, Ct))
          d.unskip_effect(c, (g) => {
            var b;
            (g.f & (Re | Yt)) !== 0 ? d.schedule(g) : D(b = d, z, dr).call(b, [g]);
          });
      d.activate();
      var s = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Map();
      for (var a of r)
        Pn(a, i, s, o);
      o = /* @__PURE__ */ new Map();
      var f = [...d.current.keys()].filter(
        (c) => this.current.has(c) ? (
          /** @type {[any, boolean]} */
          this.current.get(c)[0] !== c
        ) : !0
      );
      for (const c of l(this, Kt))
        (c.f & (ve | J | zr)) === 0 && Wr(c, f, o) && ((c.f & (Yt | Re)) !== 0 ? (P(c, B), d.schedule(c)) : l(d, Je).add(c));
      if (l(d, te).length > 0) {
        d.apply();
        for (var u of l(d, te))
          D(v = d, z, Lr).call(v, u, [], []);
        w(d, te, []);
      }
      d.deactivate();
    }
  }
  for (const d of et)
    l(d, lt).has(this) && (l(d, lt).delete(this), l(d, lt).size === 0 && !D(_ = d, z, ur).call(_) && (d.activate(), D(h = d, z, cr).call(h)));
};
let ht = br;
function $i(e) {
  var t = Ht;
  Ht = !0;
  try {
    for (var r; ; ) {
      if (Wi(), y === null)
        return (
          /** @type {T} */
          r
        );
      y.flush();
    }
  } finally {
    Ht = t;
  }
}
function es() {
  try {
    Pi();
  } catch (e) {
    Ke(e, Ir);
  }
}
let Oe = null;
function un(e) {
  var t = e.length;
  if (t !== 0) {
    for (var r = 0; r < t; ) {
      var n = e[r++];
      if ((n.f & (ve | J)) === 0 && er(n) && (Oe = /* @__PURE__ */ new Set(), zt(n), n.deps === null && n.first === null && n.nodes === null && n.teardown === null && n.ac === null && Qn(n), Oe?.size > 0)) {
        ut.clear();
        for (const i of Oe) {
          if ((i.f & (ve | J)) !== 0) continue;
          const s = [i];
          let o = i.parent;
          for (; o !== null; )
            Oe.has(o) && (Oe.delete(o), s.push(o)), o = o.parent;
          for (let a = s.length - 1; a >= 0; a--) {
            const f = s[a];
            (f.f & (ve | J)) === 0 && zt(f);
          }
        }
        Oe.clear();
      }
    }
    Oe = null;
  }
}
function Pn(e, t, r, n) {
  if (!r.has(e) && (r.add(e), e.reactions !== null))
    for (const i of e.reactions) {
      const s = i.f;
      (s & H) !== 0 ? Pn(
        /** @type {Derived} */
        i,
        t,
        r,
        n
      ) : (s & (Yt | Re)) !== 0 && (s & B) === 0 && Wr(i, t, n) && (P(i, B), Xr(
        /** @type {Effect} */
        i
      ));
    }
}
function Wr(e, t, r) {
  const n = r.get(e);
  if (n !== void 0) return n;
  if (e.deps !== null)
    for (const i of e.deps) {
      if (Rt.call(t, i))
        return !0;
      if ((i.f & H) !== 0 && Wr(
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
function Xr(e) {
  y.schedule(e);
}
function zn(e, t) {
  if (!((e.f & ke) !== 0 && (e.f & L) !== 0)) {
    (e.f & B) !== 0 ? t.d.push(e) : (e.f & De) !== 0 && t.m.push(e), P(e, L);
    for (var r = e.first; r !== null; )
      zn(r, t), r = r.next;
  }
}
function In(e) {
  P(e, L);
  for (var t = e.first; t !== null; )
    In(t), t = t.next;
}
function ts(e) {
  let t = 0, r = _t(0), n;
  return () => {
    $r() && (p(r), Xn(() => (t === 0 && (n = ai(() => e(() => Ut(r)))), t += 1, () => {
      St(() => {
        t -= 1, t === 0 && (n?.(), n = void 0, Ut(r));
      });
    })));
  };
}
var rs = Ft | It;
function ns(e, t, r, n) {
  new is(e, t, r, n);
}
var fe, Gr, oe, at, X, ue, Y, re, Le, ft, Ge, Mt, Wt, Xt, je, yr, O, ss, ls, as, jr, vr, hr, Vr, qr;
class is {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(t, r, n, i) {
    m(this, O);
    /** @type {Boundary | null} */
    ye(this, "parent");
    ye(this, "is_pending", !1);
    /**
     * API-level transformError transform function. Transforms errors before they reach the `failed` snippet.
     * Inherited from parent boundary, or defaults to identity.
     * @type {(error: unknown) => unknown}
     */
    ye(this, "transform_error");
    /** @type {TemplateNode} */
    m(this, fe);
    /** @type {TemplateNode | null} */
    m(this, Gr, null);
    /** @type {BoundaryProps} */
    m(this, oe);
    /** @type {((anchor: Node) => void)} */
    m(this, at);
    /** @type {Effect} */
    m(this, X);
    /** @type {Effect | null} */
    m(this, ue, null);
    /** @type {Effect | null} */
    m(this, Y, null);
    /** @type {Effect | null} */
    m(this, re, null);
    /** @type {DocumentFragment | null} */
    m(this, Le, null);
    m(this, ft, 0);
    m(this, Ge, 0);
    m(this, Mt, !1);
    /** @type {Set<Effect>} */
    m(this, Wt, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    m(this, Xt, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    m(this, je, null);
    m(this, yr, ts(() => (w(this, je, _t(l(this, ft))), () => {
      w(this, je, null);
    })));
    w(this, fe, t), w(this, oe, r), w(this, at, (s) => {
      var o = (
        /** @type {Effect} */
        k
      );
      o.b = this, o.f |= Pr, n(s);
    }), this.parent = /** @type {Effect} */
    k.b, this.transform_error = i ?? this.parent?.transform_error ?? ((s) => s), w(this, X, en(() => {
      D(this, O, jr).call(this);
    }, rs));
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    Fn(t, l(this, Wt), l(this, Xt));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!l(this, oe).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  update_pending_count(t, r) {
    D(this, O, Vr).call(this, t, r), w(this, ft, l(this, ft) + t), !(!l(this, je) || l(this, Mt)) && (w(this, Mt, !0), St(() => {
      w(this, Mt, !1), l(this, je) && Pt(l(this, je), l(this, ft));
    }));
  }
  get_effect_pending() {
    return l(this, yr).call(this), p(
      /** @type {Source<number>} */
      l(this, je)
    );
  }
  /** @param {unknown} error */
  error(t) {
    if (!l(this, oe).onerror && !l(this, oe).failed)
      throw t;
    y?.is_fork ? (l(this, ue) && y.skip_effect(l(this, ue)), l(this, Y) && y.skip_effect(l(this, Y)), l(this, re) && y.skip_effect(l(this, re)), y.on_fork_commit(() => {
      D(this, O, qr).call(this, t);
    })) : D(this, O, qr).call(this, t);
  }
}
fe = new WeakMap(), Gr = new WeakMap(), oe = new WeakMap(), at = new WeakMap(), X = new WeakMap(), ue = new WeakMap(), Y = new WeakMap(), re = new WeakMap(), Le = new WeakMap(), ft = new WeakMap(), Ge = new WeakMap(), Mt = new WeakMap(), Wt = new WeakMap(), Xt = new WeakMap(), je = new WeakMap(), yr = new WeakMap(), O = new WeakSet(), ss = function() {
  try {
    w(this, ue, ce(() => l(this, at).call(this, l(this, fe))));
  } catch (t) {
    this.error(t);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
ls = function(t) {
  const r = l(this, oe).failed;
  r && w(this, re, ce(() => {
    r(
      l(this, fe),
      () => t,
      () => () => {
      }
    );
  }));
}, as = function() {
  const t = l(this, oe).pending;
  t && (this.is_pending = !0, w(this, Y, ce(() => t(l(this, fe)))), St(() => {
    var r = w(this, Le, document.createDocumentFragment()), n = Xe();
    r.append(n), w(this, ue, D(this, O, hr).call(this, () => ce(() => l(this, at).call(this, n)))), l(this, Ge) === 0 && (l(this, fe).before(r), w(this, Le, null), ct(
      /** @type {Effect} */
      l(this, Y),
      () => {
        w(this, Y, null);
      }
    ), D(this, O, vr).call(
      this,
      /** @type {Batch} */
      y
    ));
  }));
}, jr = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), w(this, Ge, 0), w(this, ft, 0), w(this, ue, ce(() => {
      l(this, at).call(this, l(this, fe));
    })), l(this, Ge) > 0) {
      var t = w(this, Le, document.createDocumentFragment());
      nn(l(this, ue), t);
      const r = (
        /** @type {(anchor: Node) => void} */
        l(this, oe).pending
      );
      w(this, Y, ce(() => r(l(this, fe))));
    } else
      D(this, O, vr).call(
        this,
        /** @type {Batch} */
        y
      );
  } catch (r) {
    this.error(r);
  }
}, /**
 * @param {Batch} batch
 */
vr = function(t) {
  this.is_pending = !1, t.transfer_effects(l(this, Wt), l(this, Xt));
}, /**
 * @template T
 * @param {() => T} fn
 */
hr = function(t) {
  var r = k, n = E, i = _e;
  Fe(l(this, X)), pe(l(this, X)), Ot(l(this, X).ctx);
  try {
    return ht.ensure(), t();
  } catch (s) {
    return Rn(s), null;
  } finally {
    Fe(r), pe(n), Ot(i);
  }
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 * @param {Batch} batch
 */
Vr = function(t, r) {
  var n;
  if (!this.has_pending_snippet()) {
    this.parent && D(n = this.parent, O, Vr).call(n, t, r);
    return;
  }
  w(this, Ge, l(this, Ge) + t), l(this, Ge) === 0 && (D(this, O, vr).call(this, r), l(this, Y) && ct(l(this, Y), () => {
    w(this, Y, null);
  }), l(this, Le) && (l(this, fe).before(l(this, Le)), w(this, Le, null)));
}, /**
 * @param {unknown} error
 */
qr = function(t) {
  l(this, ue) && (Q(l(this, ue)), w(this, ue, null)), l(this, Y) && (Q(l(this, Y)), w(this, Y, null)), l(this, re) && (Q(l(this, re)), w(this, re, null));
  var r = l(this, oe).onerror;
  let n = l(this, oe).failed;
  var i = !1, s = !1;
  const o = () => {
    if (i) {
      Gi();
      return;
    }
    i = !0, s && ji(), l(this, re) !== null && ct(l(this, re), () => {
      w(this, re, null);
    }), D(this, O, hr).call(this, () => {
      D(this, O, jr).call(this);
    });
  }, a = (f) => {
    try {
      s = !0, r?.(f, o), s = !1;
    } catch (u) {
      Ke(u, l(this, X) && l(this, X).parent);
    }
    n && w(this, re, D(this, O, hr).call(this, () => {
      try {
        return ce(() => {
          var u = (
            /** @type {Effect} */
            k
          );
          u.b = this, u.f |= Pr, n(
            l(this, fe),
            () => f,
            () => o
          );
        });
      } catch (u) {
        return Ke(
          u,
          /** @type {Effect} */
          l(this, X).parent
        ), null;
      }
    }));
  };
  St(() => {
    var f;
    try {
      f = this.transform_error(t);
    } catch (u) {
      Ke(u, l(this, X) && l(this, X).parent);
      return;
    }
    f !== null && typeof f == "object" && typeof /** @type {any} */
    f.then == "function" ? f.then(
      a,
      /** @param {unknown} e */
      (u) => Ke(u, l(this, X) && l(this, X).parent)
    ) : a(f);
  });
};
function fs(e, t, r, n) {
  const i = jn;
  var s = e.filter((h) => !h.settled);
  if (r.length === 0 && s.length === 0) {
    n(t.map(i));
    return;
  }
  var o = (
    /** @type {Effect} */
    k
  ), a = os(), f = s.length === 1 ? s[0].promise : s.length > 1 ? Promise.all(s.map((h) => h.promise)) : null;
  function u(h) {
    a();
    try {
      n(h);
    } catch (d) {
      (o.f & ve) === 0 && Ke(d, o);
    }
    gr();
  }
  if (r.length === 0) {
    f.then(() => u(t.map(i)));
    return;
  }
  var v = Ln();
  function _() {
    Promise.all(r.map((h) => /* @__PURE__ */ us(h))).then((h) => u([...t.map(i), ...h])).catch((h) => Ke(h, o)).finally(() => v());
  }
  f ? f.then(() => {
    a(), _(), gr();
  }) : _();
}
function os() {
  var e = (
    /** @type {Effect} */
    k
  ), t = E, r = _e, n = (
    /** @type {Batch} */
    y
  );
  return function(s = !0) {
    Fe(e), pe(t), Ot(r), s && (e.f & ve) === 0 && (n?.activate(), n?.apply());
  };
}
function gr(e = !0) {
  Fe(null), pe(null), Ot(null), e && y?.deactivate();
}
function Ln() {
  var e = (
    /** @type {Effect} */
    k
  ), t = (
    /** @type {Boundary} */
    e.b
  ), r = (
    /** @type {Batch} */
    y
  ), n = t.is_rendered();
  return t.update_pending_count(1, r), r.increment(n, e), (i = !1) => {
    t.update_pending_count(-1, r), r.decrement(n, e, i);
  };
}
// @__NO_SIDE_EFFECTS__
function jn(e) {
  var t = H | B;
  return k !== null && (k.f |= It), {
    ctx: _e,
    deps: null,
    effects: null,
    equals: Sn,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      V
    ),
    wv: 0,
    parent: k,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function us(e, t, r) {
  let n = (
    /** @type {Effect | null} */
    k
  );
  n === null && Mi();
  var i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), s = _t(
    /** @type {V} */
    V
  ), o = !E, a = /* @__PURE__ */ new Map();
  return Ts(() => {
    var f = (
      /** @type {Effect} */
      k
    ), u = xn();
    i = u.promise;
    try {
      Promise.resolve(e()).then(u.resolve, u.reject).finally(gr);
    } catch (d) {
      u.reject(d), gr();
    }
    var v = (
      /** @type {Batch} */
      y
    );
    if (o) {
      if ((f.f & pt) !== 0)
        var _ = Ln();
      if (
        /** @type {Boundary} */
        n.b.is_rendered()
      )
        a.get(v)?.reject(Pe), a.delete(v);
      else {
        for (const d of a.values())
          d.reject(Pe);
        a.clear();
      }
      a.set(v, u);
    }
    const h = (d, c = void 0) => {
      if (_) {
        var g = c === Pe;
        _(g);
      }
      if (!(c === Pe || (f.f & ve) !== 0)) {
        if (v.activate(), c)
          s.f |= We, Pt(s, c);
        else {
          (s.f & We) !== 0 && (s.f ^= We), Pt(s, d);
          for (const [b, R] of a) {
            if (a.delete(b), b === v) break;
            R.reject(Pe);
          }
        }
        v.deactivate();
      }
    };
    u.promise.then(h, (d) => h(null, d || "unknown"));
  }), Es(() => {
    for (const f of a.values())
      f.reject(Pe);
  }), new Promise((f) => {
    function u(v) {
      function _() {
        v === i ? f(s) : u(i);
      }
      v.then(_, _);
    }
    u(i);
  });
}
// @__NO_SIDE_EFFECTS__
function cs(e) {
  const t = /* @__PURE__ */ jn(e);
  return t.equals = Tn, t;
}
function ds(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var r = 0; r < t.length; r += 1)
      Q(
        /** @type {Effect} */
        t[r]
      );
  }
}
function Zr(e) {
  var t, r = k, n = e.parent;
  if (!Qe && n !== null && (n.f & (ve | J)) !== 0)
    return Ji(), e.v;
  Fe(n);
  try {
    e.f &= ~vt, ds(e), t = ii(e);
  } finally {
    Fe(r);
  }
  return t;
}
function Vn(e) {
  var t = Zr(e);
  if (!e.equals(t) && (e.wv = ri(), (!y?.is_fork || e.deps === null) && (y !== null ? y.capture(e, t, !0) : e.v = t, e.deps === null))) {
    P(e, L);
    return;
  }
  Qe || (Ee !== null ? ($r() || y?.is_fork) && Ee.set(e, t) : Kr(e));
}
function vs(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      (t.teardown || t.ac) && (t.teardown?.(), t.ac?.abort(Pe), t.teardown = Ti, t.ac = null, Jt(t, 0), tn(t));
}
function qn(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      t.teardown && zt(t);
}
let Br = /* @__PURE__ */ new Set();
const ut = /* @__PURE__ */ new Map();
let Bn = !1;
function _t(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Sn,
    rv: 0,
    wv: 0
  };
  return r;
}
// @__NO_SIDE_EFFECTS__
function I(e, t) {
  const r = _t(e);
  return Ns(r), r;
}
// @__NO_SIDE_EFFECTS__
function hs(e, t = !1, r = !0) {
  const n = _t(e);
  return t || (n.equals = Tn), n;
}
function T(e, t, r = !1) {
  E !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!xe || (E.f & zr) !== 0) && Nn() && (E.f & (H | Re | Yt | zr)) !== 0 && (he === null || !Rt.call(he, e)) && Li();
  let n = r ? kt(t) : t;
  return Pt(e, n, or);
}
function Pt(e, t, r = null) {
  if (!e.equals(t)) {
    ut.set(e, Qe ? t : e.v);
    var n = ht.ensure();
    if (n.capture(e, t), (e.f & H) !== 0) {
      const i = (
        /** @type {Derived} */
        e
      );
      (e.f & B) !== 0 && Zr(i), Ee === null && Kr(i);
    }
    e.wv = ri(), Hn(e, B, r), k !== null && (k.f & L) !== 0 && (k.f & (ke | Ze)) === 0 && (ae === null ? Ms([e]) : ae.push(e)), !n.is_fork && Br.size > 0 && !Bn && _s();
  }
  return t;
}
function _s() {
  Bn = !1;
  for (const e of Br)
    (e.f & L) !== 0 && P(e, De), er(e) && zt(e);
  Br.clear();
}
function Ut(e) {
  T(e, e.v + 1);
}
function Hn(e, t, r) {
  var n = e.reactions;
  if (n !== null)
    for (var i = n.length, s = 0; s < i; s++) {
      var o = n[s], a = o.f, f = (a & B) === 0;
      if (f && P(o, t), (a & H) !== 0) {
        var u = (
          /** @type {Derived} */
          o
        );
        Ee?.delete(u), (a & vt) === 0 && (a & de && (k === null || (k.f & pr) === 0) && (o.f |= vt), Hn(u, De, r));
      } else if (f) {
        var v = (
          /** @type {Effect} */
          o
        );
        (a & Re) !== 0 && Oe !== null && Oe.add(v), r !== null ? r.push(v) : Xr(v);
      }
    }
}
function kt(e) {
  if (typeof e != "object" || e === null || Nr in e)
    return e;
  const t = Si(e);
  if (t !== xi && t !== ki)
    return e;
  var r = /* @__PURE__ */ new Map(), n = En(e), i = /* @__PURE__ */ I(0), s = dt, o = (a) => {
    if (dt === s)
      return a();
    var f = E, u = dt;
    pe(null), hn(s);
    var v = a();
    return pe(f), hn(u), v;
  };
  return n && r.set("length", /* @__PURE__ */ I(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(a, f, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && zi();
        var v = r.get(f);
        return v === void 0 ? o(() => {
          var _ = /* @__PURE__ */ I(u.value);
          return r.set(f, _), _;
        }) : T(v, u.value, !0), !0;
      },
      deleteProperty(a, f) {
        var u = r.get(f);
        if (u === void 0) {
          if (f in a) {
            const v = o(() => /* @__PURE__ */ I(V));
            r.set(f, v), Ut(i);
          }
        } else
          T(u, V), Ut(i);
        return !0;
      },
      get(a, f, u) {
        if (f === Nr)
          return e;
        var v = r.get(f), _ = f in a;
        if (v === void 0 && (!_ || Bt(a, f)?.writable) && (v = o(() => {
          var d = kt(_ ? a[f] : V), c = /* @__PURE__ */ I(d);
          return c;
        }), r.set(f, v)), v !== void 0) {
          var h = p(v);
          return h === V ? void 0 : h;
        }
        return Reflect.get(a, f, u);
      },
      getOwnPropertyDescriptor(a, f) {
        var u = Reflect.getOwnPropertyDescriptor(a, f);
        if (u && "value" in u) {
          var v = r.get(f);
          v && (u.value = p(v));
        } else if (u === void 0) {
          var _ = r.get(f), h = _?.v;
          if (_ !== void 0 && h !== V)
            return {
              enumerable: !0,
              configurable: !0,
              value: h,
              writable: !0
            };
        }
        return u;
      },
      has(a, f) {
        if (f === Nr)
          return !0;
        var u = r.get(f), v = u !== void 0 && u.v !== V || Reflect.has(a, f);
        if (u !== void 0 || k !== null && (!v || Bt(a, f)?.writable)) {
          u === void 0 && (u = o(() => {
            var h = v ? kt(a[f]) : V, d = /* @__PURE__ */ I(h);
            return d;
          }), r.set(f, u));
          var _ = p(u);
          if (_ === V)
            return !1;
        }
        return v;
      },
      set(a, f, u, v) {
        var _ = r.get(f), h = f in a;
        if (n && f === "length")
          for (var d = u; d < /** @type {Source<number>} */
          _.v; d += 1) {
            var c = r.get(d + "");
            c !== void 0 ? T(c, V) : d in a && (c = o(() => /* @__PURE__ */ I(V)), r.set(d + "", c));
          }
        if (_ === void 0)
          (!h || Bt(a, f)?.writable) && (_ = o(() => /* @__PURE__ */ I(void 0)), T(_, kt(u)), r.set(f, _));
        else {
          h = _.v !== V;
          var g = o(() => kt(u));
          T(_, g);
        }
        var b = Reflect.getOwnPropertyDescriptor(a, f);
        if (b?.set && b.set.call(v, u), !h) {
          if (n && typeof f == "string") {
            var R = (
              /** @type {Source<number>} */
              r.get("length")
            ), A = Number(f);
            Number.isInteger(A) && A >= R.v && T(R, A + 1);
          }
          Ut(i);
        }
        return !0;
      },
      ownKeys(a) {
        p(i);
        var f = Reflect.ownKeys(a).filter((_) => {
          var h = r.get(_);
          return h === void 0 || h.v !== V;
        });
        for (var [u, v] of r)
          v.v !== V && !(u in a) && f.push(u);
        return f;
      },
      setPrototypeOf() {
        Ii();
      }
    }
  );
}
var cn, Un, Yn, Jn;
function ps() {
  if (cn === void 0) {
    cn = window, Un = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, r = Text.prototype;
    Yn = Bt(t, "firstChild").get, Jn = Bt(t, "nextSibling").get, an(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), an(r) && (r.__t = void 0);
  }
}
function Xe(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function mr(e) {
  return (
    /** @type {TemplateNode | null} */
    Yn.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function $t(e) {
  return (
    /** @type {TemplateNode | null} */
    Jn.call(e)
  );
}
function M(e, t) {
  return /* @__PURE__ */ mr(e);
}
function Rr(e, t = !1) {
  {
    var r = /* @__PURE__ */ mr(e);
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ $t(r) : r;
  }
}
function F(e, t = 1, r = !1) {
  let n = e;
  for (; t--; )
    n = /** @type {TemplateNode} */
    /* @__PURE__ */ $t(n);
  return n;
}
function gs(e) {
  e.textContent = "";
}
function Gn() {
  return !1;
}
function Kn(e, t, r) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElementNS(Yi, e, void 0)
  );
}
let dn = !1;
function ms() {
  dn || (dn = !0, document.addEventListener(
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
function Qr(e) {
  var t = E, r = k;
  pe(null), Fe(null);
  try {
    return e();
  } finally {
    pe(t), Fe(r);
  }
}
function bs(e, t, r, n = r) {
  e.addEventListener(t, () => Qr(r));
  const i = e.__on_r;
  i ? e.__on_r = () => {
    i(), n(!0);
  } : e.__on_r = () => n(!0), ms();
}
function ys(e) {
  k === null && (E === null && Oi(), Fi()), Qe && Di();
}
function ws(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function qe(e, t) {
  var r = k;
  r !== null && (r.f & J) !== 0 && (e |= J);
  var n = {
    ctx: _e,
    deps: null,
    nodes: null,
    f: e | B | de,
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
  y?.register_created_effect(n);
  var i = n;
  if ((e & Dt) !== 0)
    xt !== null ? xt.push(n) : ht.ensure().schedule(n);
  else if (t !== null) {
    try {
      zt(n);
    } catch (o) {
      throw Q(n), o;
    }
    i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && // either `null`, or a singular child
    (i.f & It) === 0 && (i = i.first, (e & Re) !== 0 && (e & Ft) !== 0 && i !== null && (i.f |= Ft));
  }
  if (i !== null && (i.parent = r, r !== null && ws(i, r), E !== null && (E.f & H) !== 0 && (e & Ze) === 0)) {
    var s = (
      /** @type {Derived} */
      E
    );
    (s.effects ?? (s.effects = [])).push(i);
  }
  return n;
}
function $r() {
  return E !== null && !xe;
}
function Es(e) {
  const t = qe(xr, null);
  return P(t, L), t.teardown = e, t;
}
function xs(e) {
  ys();
  var t = (
    /** @type {Effect} */
    k.f
  ), r = !E && (t & ke) !== 0 && (t & pt) === 0;
  if (r) {
    var n = (
      /** @type {ComponentContext} */
      _e
    );
    (n.e ?? (n.e = [])).push(e);
  } else
    return Wn(e);
}
function Wn(e) {
  return qe(Dt | Ni, e);
}
function ks(e) {
  ht.ensure();
  const t = qe(Ze | It, e);
  return (r = {}) => new Promise((n) => {
    r.outro ? ct(t, () => {
      Q(t), n(void 0);
    }) : (Q(t), n(void 0));
  });
}
function Ss(e) {
  return qe(Dt, e);
}
function Ts(e) {
  return qe(Yt | It, e);
}
function Xn(e, t = 0) {
  return qe(xr | t, e);
}
function W(e, t = [], r = [], n = []) {
  fs(n, t, r, (i) => {
    qe(xr, () => e(...i.map(p)));
  });
}
function en(e, t = 0) {
  var r = qe(Re | t, e);
  return r;
}
function ce(e) {
  return qe(ke | It, e);
}
function Zn(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = Qe, n = E;
    vn(!0), pe(null);
    try {
      t.call(null);
    } finally {
      vn(r), pe(n);
    }
  }
}
function tn(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    const i = r.ac;
    i !== null && Qr(() => {
      i.abort(Pe);
    });
    var n = r.next;
    (r.f & Ze) !== 0 ? r.parent = null : Q(r, t), r = n;
  }
}
function As(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & ke) === 0 && Q(t), t = r;
  }
}
function Q(e, t = !0) {
  var r = !1;
  (t || (e.f & Ci) !== 0) && e.nodes !== null && e.nodes.end !== null && (Cs(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), r = !0), P(e, fn), tn(e, t && !r), Jt(e, 0);
  var n = e.nodes && e.nodes.t;
  if (n !== null)
    for (const s of n)
      s.stop();
  Zn(e), e.f ^= fn, e.f |= ve;
  var i = e.parent;
  i !== null && i.first !== null && Qn(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function Cs(e, t) {
  for (; e !== null; ) {
    var r = e === t ? null : /* @__PURE__ */ $t(e);
    e.remove(), e = r;
  }
}
function Qn(e) {
  var t = e.parent, r = e.prev, n = e.next;
  r !== null && (r.next = n), n !== null && (n.prev = r), t !== null && (t.first === e && (t.first = n), t.last === e && (t.last = r));
}
function ct(e, t, r = !0) {
  var n = [];
  $n(e, n, !0);
  var i = () => {
    r && Q(e), t && t();
  }, s = n.length;
  if (s > 0) {
    var o = () => --s || i();
    for (var a of n)
      a.out(o);
  } else
    i();
}
function $n(e, t, r) {
  if ((e.f & J) === 0) {
    e.f ^= J;
    var n = e.nodes && e.nodes.t;
    if (n !== null)
      for (const a of n)
        (a.is_global || r) && t.push(a);
    for (var i = e.first; i !== null; ) {
      var s = i.next;
      if ((i.f & Ze) === 0) {
        var o = (i.f & Ft) !== 0 || // If this is a branch effect without a block effect parent,
        // it means the parent block effect was pruned. In that case,
        // transparency information was transferred to the branch effect.
        (i.f & ke) !== 0 && (e.f & Re) !== 0;
        $n(i, t, o ? r : !1);
      }
      i = s;
    }
  }
}
function rn(e) {
  ei(e, !0);
}
function ei(e, t) {
  if ((e.f & J) !== 0) {
    e.f ^= J, (e.f & L) === 0 && (P(e, B), ht.ensure().schedule(e));
    for (var r = e.first; r !== null; ) {
      var n = r.next, i = (r.f & Ft) !== 0 || (r.f & ke) !== 0;
      ei(r, i ? t : !1), r = n;
    }
    var s = e.nodes && e.nodes.t;
    if (s !== null)
      for (const o of s)
        (o.is_global || t) && o.in();
  }
}
function nn(e, t) {
  if (e.nodes)
    for (var r = e.nodes.start, n = e.nodes.end; r !== null; ) {
      var i = r === n ? null : /* @__PURE__ */ $t(r);
      t.append(r), r = i;
    }
}
let _r = !1, Qe = !1;
function vn(e) {
  Qe = e;
}
let E = null, xe = !1;
function pe(e) {
  E = e;
}
let k = null;
function Fe(e) {
  k = e;
}
let he = null;
function Ns(e) {
  E !== null && (he === null ? he = [e] : he.push(e));
}
let Z = null, ee = 0, ae = null;
function Ms(e) {
  ae = e;
}
let ti = 1, nt = 0, dt = nt;
function hn(e) {
  dt = e;
}
function ri() {
  return ++ti;
}
function er(e) {
  var t = e.f;
  if ((t & B) !== 0)
    return !0;
  if (t & H && (e.f &= ~vt), (t & De) !== 0) {
    for (var r = (
      /** @type {Value[]} */
      e.deps
    ), n = r.length, i = 0; i < n; i++) {
      var s = r[i];
      if (er(
        /** @type {Derived} */
        s
      ) && Vn(
        /** @type {Derived} */
        s
      ), s.wv > e.wv)
        return !0;
    }
    (t & de) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    Ee === null && P(e, L);
  }
  return !1;
}
function ni(e, t, r = !0) {
  var n = e.reactions;
  if (n !== null && !(he !== null && Rt.call(he, e)))
    for (var i = 0; i < n.length; i++) {
      var s = n[i];
      (s.f & H) !== 0 ? ni(
        /** @type {Derived} */
        s,
        t,
        !1
      ) : t === s && (r ? P(s, B) : (s.f & L) !== 0 && P(s, De), Xr(
        /** @type {Effect} */
        s
      ));
    }
}
function ii(e) {
  var g;
  var t = Z, r = ee, n = ae, i = E, s = he, o = _e, a = xe, f = dt, u = e.f;
  Z = /** @type {null | Value[]} */
  null, ee = 0, ae = null, E = (u & (ke | Ze)) === 0 ? e : null, he = null, Ot(e.ctx), xe = !1, dt = ++nt, e.ac !== null && (Qr(() => {
    e.ac.abort(Pe);
  }), e.ac = null);
  try {
    e.f |= pr;
    var v = (
      /** @type {Function} */
      e.fn
    ), _ = v();
    e.f |= pt;
    var h = e.deps, d = y?.is_fork;
    if (Z !== null) {
      var c;
      if (d || Jt(e, ee), h !== null && ee > 0)
        for (h.length = ee + Z.length, c = 0; c < Z.length; c++)
          h[ee + c] = Z[c];
      else
        e.deps = h = Z;
      if ($r() && (e.f & de) !== 0)
        for (c = ee; c < h.length; c++)
          ((g = h[c]).reactions ?? (g.reactions = [])).push(e);
    } else !d && h !== null && ee < h.length && (Jt(e, ee), h.length = ee);
    if (Nn() && ae !== null && !xe && h !== null && (e.f & (H | De | B)) === 0)
      for (c = 0; c < /** @type {Source[]} */
      ae.length; c++)
        ni(
          ae[c],
          /** @type {Effect} */
          e
        );
    if (i !== null && i !== e) {
      if (nt++, i.deps !== null)
        for (let b = 0; b < r; b += 1)
          i.deps[b].rv = nt;
      if (t !== null)
        for (const b of t)
          b.rv = nt;
      ae !== null && (n === null ? n = ae : n.push(.../** @type {Source[]} */
      ae));
    }
    return (e.f & We) !== 0 && (e.f ^= We), _;
  } catch (b) {
    return Rn(b);
  } finally {
    e.f ^= pr, Z = t, ee = r, ae = n, E = i, he = s, Ot(o), xe = a, dt = f;
  }
}
function Rs(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var n = wi.call(r, e);
    if (n !== -1) {
      var i = r.length - 1;
      i === 0 ? r = t.reactions = null : (r[n] = r[i], r.pop());
    }
  }
  if (r === null && (t.f & H) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Z === null || !Rt.call(Z, t))) {
    var s = (
      /** @type {Derived} */
      t
    );
    (s.f & de) !== 0 && (s.f ^= de, s.f &= ~vt), s.v !== V && Kr(s), vs(s), Jt(s, 0);
  }
}
function Jt(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var n = t; n < r.length; n++)
      Rs(e, r[n]);
}
function zt(e) {
  var t = e.f;
  if ((t & ve) === 0) {
    P(e, L);
    var r = k, n = _r;
    k = e, _r = !0;
    try {
      (t & (Re | kn)) !== 0 ? As(e) : tn(e), Zn(e);
      var i = ii(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = ti;
      var s;
    } finally {
      _r = n, k = r;
    }
  }
}
async function Ds() {
  await Promise.resolve(), $i();
}
function p(e) {
  var t = e.f, r = (t & H) !== 0;
  if (E !== null && !xe) {
    var n = k !== null && (k.f & ve) !== 0;
    if (!n && (he === null || !Rt.call(he, e))) {
      var i = E.deps;
      if ((E.f & pr) !== 0)
        e.rv < nt && (e.rv = nt, Z === null && i !== null && i[ee] === e ? ee++ : Z === null ? Z = [e] : Z.push(e));
      else {
        (E.deps ?? (E.deps = [])).push(e);
        var s = e.reactions;
        s === null ? e.reactions = [E] : Rt.call(s, E) || s.push(E);
      }
    }
  }
  if (Qe && ut.has(e))
    return ut.get(e);
  if (r) {
    var o = (
      /** @type {Derived} */
      e
    );
    if (Qe) {
      var a = o.v;
      return ((o.f & L) === 0 && o.reactions !== null || li(o)) && (a = Zr(o)), ut.set(o, a), a;
    }
    var f = (o.f & de) === 0 && !xe && E !== null && (_r || (E.f & de) !== 0), u = (o.f & pt) === 0;
    er(o) && (f && (o.f |= de), Vn(o)), f && !u && (qn(o), si(o));
  }
  if (Ee?.has(e))
    return Ee.get(e);
  if ((e.f & We) !== 0)
    throw e.v;
  return e.v;
}
function si(e) {
  if (e.f |= de, e.deps !== null)
    for (const t of e.deps)
      (t.reactions ?? (t.reactions = [])).push(e), (t.f & H) !== 0 && (t.f & de) === 0 && (qn(
        /** @type {Derived} */
        t
      ), si(
        /** @type {Derived} */
        t
      ));
}
function li(e) {
  if (e.v === V) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (ut.has(t) || (t.f & H) !== 0 && li(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function ai(e) {
  var t = xe;
  try {
    return xe = !0, e();
  } finally {
    xe = t;
  }
}
const Fs = ["touchstart", "touchmove"];
function Os(e) {
  return Fs.includes(e);
}
const it = Symbol("events"), fi = /* @__PURE__ */ new Set(), Hr = /* @__PURE__ */ new Set();
function tt(e, t, r) {
  (t[it] ?? (t[it] = {}))[e] = r;
}
function Ps(e) {
  for (var t = 0; t < e.length; t++)
    fi.add(e[t]);
  for (var r of Hr)
    r(e);
}
let _n = null;
function pn(e) {
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), n = e.type, i = e.composedPath?.() || [], s = (
    /** @type {null | Element} */
    i[0] || e.target
  );
  _n = e;
  var o = 0, a = _n === e && e[it];
  if (a) {
    var f = i.indexOf(a);
    if (f !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e[it] = t;
      return;
    }
    var u = i.indexOf(t);
    if (u === -1)
      return;
    f <= u && (o = f);
  }
  if (s = /** @type {Element} */
  i[o] || e.target, s !== t) {
    Ei(e, "currentTarget", {
      configurable: !0,
      get() {
        return s || r;
      }
    });
    var v = E, _ = k;
    pe(null), Fe(null);
    try {
      for (var h, d = []; s !== null; ) {
        var c = s.assignedSlot || s.parentNode || /** @type {any} */
        s.host || null;
        try {
          var g = s[it]?.[n];
          g != null && (!/** @type {any} */
          s.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === s) && g.call(s, e);
        } catch (b) {
          h ? d.push(b) : h = b;
        }
        if (e.cancelBubble || c === t || c === null)
          break;
        s = c;
      }
      if (h) {
        for (let b of d)
          queueMicrotask(() => {
            throw b;
          });
        throw h;
      }
    } finally {
      e[it] = t, delete e.currentTarget, pe(v), Fe(_);
    }
  }
}
const zs = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (e) => e
  })
);
function Is(e) {
  return (
    /** @type {string} */
    zs?.createHTML(e) ?? e
  );
}
function Ls(e) {
  var t = Kn("template");
  return t.innerHTML = Is(e.replaceAll("<!>", "<!---->")), t.content;
}
function Ur(e, t) {
  var r = (
    /** @type {Effect} */
    k
  );
  r.nodes === null && (r.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function q(e, t) {
  var r = (t & Hi) !== 0, n = (t & Ui) !== 0, i, s = !e.startsWith("<!>");
  return () => {
    i === void 0 && (i = Ls(s ? e : "<!>" + e), r || (i = /** @type {TemplateNode} */
    /* @__PURE__ */ mr(i)));
    var o = (
      /** @type {TemplateNode} */
      n || Un ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (r) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ mr(o)
      ), f = (
        /** @type {TemplateNode} */
        o.lastChild
      );
      Ur(a, f);
    } else
      Ur(o, o);
    return o;
  };
}
function js() {
  var e = document.createDocumentFragment(), t = document.createComment(""), r = Xe();
  return e.append(t, r), Ur(t, r), e;
}
function j(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function U(e, t) {
  var r = t == null ? "" : typeof t == "object" ? `${t}` : t;
  r !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = r, e.nodeValue = `${r}`);
}
function Vs(e, t) {
  return qs(e, t);
}
const ar = /* @__PURE__ */ new Map();
function qs(e, { target: t, anchor: r, props: n = {}, events: i, context: s, intro: o = !0, transformError: a }) {
  ps();
  var f = void 0, u = ks(() => {
    var v = r ?? t.appendChild(Xe());
    ns(
      /** @type {TemplateNode} */
      v,
      {
        pending: () => {
        }
      },
      (d) => {
        An({});
        var c = (
          /** @type {ComponentContext} */
          _e
        );
        s && (c.c = s), i && (n.$$events = i), f = e(d, n) || {}, Cn();
      },
      a
    );
    var _ = /* @__PURE__ */ new Set(), h = (d) => {
      for (var c = 0; c < d.length; c++) {
        var g = d[c];
        if (!_.has(g)) {
          _.add(g);
          var b = Os(g);
          for (const $ of [t, document]) {
            var R = ar.get($);
            R === void 0 && (R = /* @__PURE__ */ new Map(), ar.set($, R));
            var A = R.get(g);
            A === void 0 ? ($.addEventListener(g, pn, { passive: b }), R.set(g, 1)) : R.set(g, A + 1);
          }
        }
      }
    };
    return h(Er(fi)), Hr.add(h), () => {
      for (var d of _)
        for (const b of [t, document]) {
          var c = (
            /** @type {Map<string, number>} */
            ar.get(b)
          ), g = (
            /** @type {number} */
            c.get(d)
          );
          --g == 0 ? (b.removeEventListener(d, pn), c.delete(d), c.size === 0 && ar.delete(b)) : c.set(d, g);
        }
      Hr.delete(h), v !== r && v.parentNode?.removeChild(v);
    };
  });
  return Yr.set(f, u), f;
}
let Yr = /* @__PURE__ */ new WeakMap();
function Bs(e, t) {
  const r = Yr.get(e);
  return r ? (Yr.delete(e), r(t)) : Promise.resolve();
}
var we, Me, ne, ot, Zt, Qt, wr;
class Hs {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, r = !0) {
    /** @type {TemplateNode} */
    ye(this, "anchor");
    /** @type {Map<Batch, Key>} */
    m(this, we, /* @__PURE__ */ new Map());
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
    m(this, Me, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    m(this, ne, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    m(this, ot, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    m(this, Zt, !0);
    /**
     * @param {Batch} batch
     */
    m(this, Qt, (t) => {
      if (l(this, we).has(t)) {
        var r = (
          /** @type {Key} */
          l(this, we).get(t)
        ), n = l(this, Me).get(r);
        if (n)
          rn(n), l(this, ot).delete(r);
        else {
          var i = l(this, ne).get(r);
          i && (l(this, Me).set(r, i.effect), l(this, ne).delete(r), i.fragment.lastChild.remove(), this.anchor.before(i.fragment), n = i.effect);
        }
        for (const [s, o] of l(this, we)) {
          if (l(this, we).delete(s), s === t)
            break;
          const a = l(this, ne).get(o);
          a && (Q(a.effect), l(this, ne).delete(o));
        }
        for (const [s, o] of l(this, Me)) {
          if (s === r || l(this, ot).has(s)) continue;
          const a = () => {
            if (Array.from(l(this, we).values()).includes(s)) {
              var u = document.createDocumentFragment();
              nn(o, u), u.append(Xe()), l(this, ne).set(s, { effect: o, fragment: u });
            } else
              Q(o);
            l(this, ot).delete(s), l(this, Me).delete(s);
          };
          l(this, Zt) || !n ? (l(this, ot).add(s), ct(o, a, !1)) : a();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    m(this, wr, (t) => {
      l(this, we).delete(t);
      const r = Array.from(l(this, we).values());
      for (const [n, i] of l(this, ne))
        r.includes(n) || (Q(i.effect), l(this, ne).delete(n));
    });
    this.anchor = t, w(this, Zt, r);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, r) {
    var n = (
      /** @type {Batch} */
      y
    ), i = Gn();
    if (r && !l(this, Me).has(t) && !l(this, ne).has(t))
      if (i) {
        var s = document.createDocumentFragment(), o = Xe();
        s.append(o), l(this, ne).set(t, {
          effect: ce(() => r(o)),
          fragment: s
        });
      } else
        l(this, Me).set(
          t,
          ce(() => r(this.anchor))
        );
    if (l(this, we).set(n, t), i) {
      for (const [a, f] of l(this, Me))
        a === t ? n.unskip_effect(f) : n.skip_effect(f);
      for (const [a, f] of l(this, ne))
        a === t ? n.unskip_effect(f.effect) : n.skip_effect(f.effect);
      n.oncommit(l(this, Qt)), n.ondiscard(l(this, wr));
    } else
      l(this, Qt).call(this, n);
  }
}
we = new WeakMap(), Me = new WeakMap(), ne = new WeakMap(), ot = new WeakMap(), Zt = new WeakMap(), Qt = new WeakMap(), wr = new WeakMap();
function le(e, t, r = !1) {
  var n = new Hs(e), i = r ? Ft : 0;
  function s(o, a) {
    n.ensure(o, a);
  }
  en(() => {
    var o = !1;
    t((a, f = 0) => {
      o = !0, s(f, a);
    }), o || s(-1, null);
  }, i);
}
function Us(e, t, r) {
  for (var n = [], i = t.length, s, o = t.length, a = 0; a < i; a++) {
    let _ = t[a];
    ct(
      _,
      () => {
        if (s) {
          if (s.pending.delete(_), s.done.add(_), s.pending.size === 0) {
            var h = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            Jr(e, Er(s.done)), h.delete(s), h.size === 0 && (e.outrogroups = null);
          }
        } else
          o -= 1;
      },
      !1
    );
  }
  if (o === 0) {
    var f = n.length === 0 && r !== null;
    if (f) {
      var u = (
        /** @type {Element} */
        r
      ), v = (
        /** @type {Element} */
        u.parentNode
      );
      gs(v), v.append(u), e.items.clear();
    }
    Jr(e, t, !f);
  } else
    s = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ?? (e.outrogroups = /* @__PURE__ */ new Set())).add(s);
}
function Jr(e, t, r = !0) {
  var n;
  if (e.pending.size > 0) {
    n = /* @__PURE__ */ new Set();
    for (const o of e.pending.values())
      for (const a of o)
        n.add(
          /** @type {EachItem} */
          e.items.get(a).e
        );
  }
  for (var i = 0; i < t.length; i++) {
    var s = t[i];
    if (n?.has(s)) {
      s.f |= Ve;
      const o = document.createDocumentFragment();
      nn(s, o);
    } else
      Q(t[i], r);
  }
}
var gn;
function Ys(e, t, r, n, i, s = null) {
  var o = e, a = /* @__PURE__ */ new Map();
  {
    var f = (
      /** @type {Element} */
      e
    );
    o = f.appendChild(Xe());
  }
  var u = null, v = /* @__PURE__ */ cs(() => {
    var A = r();
    return En(A) ? A : A == null ? [] : Er(A);
  }), _, h = /* @__PURE__ */ new Map(), d = !0;
  function c(A) {
    (R.effect.f & ve) === 0 && (R.pending.delete(A), R.fallback = u, Js(R, _, o, t, n), u !== null && (_.length === 0 ? (u.f & Ve) === 0 ? rn(u) : (u.f ^= Ve, qt(u, null, o)) : ct(u, () => {
      u = null;
    })));
  }
  function g(A) {
    R.pending.delete(A);
  }
  var b = en(() => {
    _ = /** @type {V[]} */
    p(v);
    for (var A = _.length, $ = /* @__PURE__ */ new Set(), ie = (
      /** @type {Batch} */
      y
    ), Se = Gn(), ge = 0; ge < A; ge += 1) {
      var Be = _[ge], G = n(Be, ge), me = d ? null : a.get(G);
      me ? (me.v && Pt(me.v, Be), me.i && Pt(me.i, ge), Se && ie.unskip_effect(me.e)) : (me = Gs(
        a,
        d ? o : gn ?? (gn = Xe()),
        Be,
        G,
        ge,
        i,
        t,
        r
      ), d || (me.e.f |= Ve), a.set(G, me)), $.add(G);
    }
    if (A === 0 && s && !u && (d ? u = ce(() => s(o)) : (u = ce(() => s(gn ?? (gn = Xe()))), u.f |= Ve)), A > $.size && Ri(), !d)
      if (h.set(ie, $), Se) {
        for (const [tr, rr] of a)
          $.has(tr) || ie.skip_effect(rr.e);
        ie.oncommit(c), ie.ondiscard(g);
      } else
        c(ie);
    p(v);
  }), R = { effect: b, items: a, pending: h, outrogroups: null, fallback: u };
  d = !1;
}
function Vt(e) {
  for (; e !== null && (e.f & ke) === 0; )
    e = e.next;
  return e;
}
function Js(e, t, r, n, i) {
  var s = t.length, o = e.items, a = Vt(e.effect.first), f, u = null, v = [], _ = [], h, d, c, g;
  for (g = 0; g < s; g += 1) {
    if (h = t[g], d = i(h, g), c = /** @type {EachItem} */
    o.get(d).e, e.outrogroups !== null)
      for (const G of e.outrogroups)
        G.pending.delete(c), G.done.delete(c);
    if ((c.f & J) !== 0 && rn(c), (c.f & Ve) !== 0)
      if (c.f ^= Ve, c === a)
        qt(c, null, r);
      else {
        var b = u ? u.next : a;
        c === e.effect.last && (e.effect.last = c.prev), c.prev && (c.prev.next = c.next), c.next && (c.next.prev = c.prev), Ye(e, u, c), Ye(e, c, b), qt(c, b, r), u = c, v = [], _ = [], a = Vt(u.next);
        continue;
      }
    if (c !== a) {
      if (f !== void 0 && f.has(c)) {
        if (v.length < _.length) {
          var R = _[0], A;
          u = R.prev;
          var $ = v[0], ie = v[v.length - 1];
          for (A = 0; A < v.length; A += 1)
            qt(v[A], R, r);
          for (A = 0; A < _.length; A += 1)
            f.delete(_[A]);
          Ye(e, $.prev, ie.next), Ye(e, u, $), Ye(e, ie, R), a = R, u = ie, g -= 1, v = [], _ = [];
        } else
          f.delete(c), qt(c, a, r), Ye(e, c.prev, c.next), Ye(e, c, u === null ? e.effect.first : u.next), Ye(e, u, c), u = c;
        continue;
      }
      for (v = [], _ = []; a !== null && a !== c; )
        (f ?? (f = /* @__PURE__ */ new Set())).add(a), _.push(a), a = Vt(a.next);
      if (a === null)
        continue;
    }
    (c.f & Ve) === 0 && v.push(c), u = c, a = Vt(c.next);
  }
  if (e.outrogroups !== null) {
    for (const G of e.outrogroups)
      G.pending.size === 0 && (Jr(e, Er(G.done)), e.outrogroups?.delete(G));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (a !== null || f !== void 0) {
    var Se = [];
    if (f !== void 0)
      for (c of f)
        (c.f & J) === 0 && Se.push(c);
    for (; a !== null; )
      (a.f & J) === 0 && a !== e.fallback && Se.push(a), a = Vt(a.next);
    var ge = Se.length;
    if (ge > 0) {
      var Be = s === 0 ? r : null;
      Us(e, Se, Be);
    }
  }
}
function Gs(e, t, r, n, i, s, o, a) {
  var f = (o & Vi) !== 0 ? (o & Bi) === 0 ? /* @__PURE__ */ hs(r, !1, !1) : _t(r) : null, u = (o & qi) !== 0 ? _t(i) : null;
  return {
    v: f,
    i: u,
    e: ce(() => (s(t, f ?? r, u ?? i, a), () => {
      e.delete(n);
    }))
  };
}
function qt(e, t, r) {
  if (e.nodes)
    for (var n = e.nodes.start, i = e.nodes.end, s = t && (t.f & Ve) === 0 ? (
      /** @type {EffectNodes} */
      t.nodes.start
    ) : r; n !== null; ) {
      var o = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ $t(n)
      );
      if (s.before(n), n === i)
        return;
      n = o;
    }
}
function Ye(e, t, r) {
  t === null ? e.effect.first = r : t.next = r, r === null ? e.effect.last = t : r.prev = t;
}
function Ks(e, t) {
  Ss(() => {
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
      const i = Kn("style");
      i.id = t.hash, i.textContent = t.code, n.appendChild(i);
    }
  });
}
const mn = [...` 	
\r\f \v\uFEFF`];
function Ws(e, t, r) {
  var n = "" + e;
  if (r) {
    for (var i of Object.keys(r))
      if (r[i])
        n = n ? n + " " + i : i;
      else if (n.length)
        for (var s = i.length, o = 0; (o = n.indexOf(i, o)) >= 0; ) {
          var a = o + s;
          (o === 0 || mn.includes(n[o - 1])) && (a === n.length || mn.includes(n[a])) ? n = (o === 0 ? "" : n.substring(0, o)) + n.substring(a + 1) : o = a;
        }
  }
  return n === "" ? null : n;
}
function Xs(e, t) {
  return e == null ? null : String(e);
}
function bn(e, t, r, n, i, s) {
  var o = e.__className;
  if (o !== r || o === void 0) {
    var a = Ws(r, n, s);
    a == null ? e.removeAttribute("class") : e.className = a, e.__className = r;
  } else if (s && i !== s)
    for (var f in s) {
      var u = !!s[f];
      (i == null || u !== !!i[f]) && e.classList.toggle(f, u);
    }
  return s;
}
function yn(e, t, r, n) {
  var i = e.__style;
  if (i !== t) {
    var s = Xs(t);
    s == null ? e.removeAttribute("style") : e.style.cssText = s, e.__style = t;
  }
  return n;
}
function Dr(e, t, r = t) {
  var n = /* @__PURE__ */ new WeakSet();
  bs(e, "input", async (i) => {
    var s = i ? e.defaultValue : e.value;
    if (s = Fr(e) ? Or(s) : s, r(s), y !== null && n.add(y), await Ds(), s !== (s = t())) {
      var o = e.selectionStart, a = e.selectionEnd, f = e.value.length;
      if (e.value = s ?? "", a !== null) {
        var u = e.value.length;
        o === a && a === f && u > f ? (e.selectionStart = u, e.selectionEnd = u) : (e.selectionStart = o, e.selectionEnd = Math.min(a, u));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  ai(t) == null && e.value && (r(Fr(e) ? Or(e.value) : e.value), y !== null && n.add(y)), Xn(() => {
    var i = t();
    if (e === document.activeElement) {
      var s = (
        /** @type {Batch} */
        y
      );
      if (n.has(s))
        return;
    }
    Fr(e) && i === Or(e.value) || e.type === "date" && !i && !e.value || i !== e.value && (e.value = i ?? "");
  });
}
function Fr(e) {
  var t = e.type;
  return t === "number" || t === "range";
}
function Or(e) {
  return e === "" ? null : +e;
}
function fr(e, t, r, n) {
  var i = (
    /** @type {V} */
    n
  ), s = !0, o = () => (s && (s = !1, i = /** @type {V} */
  n), i), a;
  a = /** @type {V} */
  e[t], a === void 0 && n !== void 0 && (a = o());
  var f;
  return f = () => {
    var u = (
      /** @type {V} */
      e[t]
    );
    return u === void 0 ? o() : (s = !0, u);
  }, f;
}
const Zs = "5";
var wn;
typeof window < "u" && ((wn = window.__svelte ?? (window.__svelte = {})).v ?? (wn.v = /* @__PURE__ */ new Set())).add(Zs);
var Qs = /* @__PURE__ */ q('<div class="error svelte-2upyea"> </div>'), $s = /* @__PURE__ */ q('<div class="success svelte-2upyea"> </div>'), el = /* @__PURE__ */ q('<span class="status svelte-2upyea"> </span>'), tl = /* @__PURE__ */ q('<p class="desc svelte-2upyea"> </p>'), rl = /* @__PURE__ */ q('<div class="meta svelte-2upyea"> </div>'), nl = /* @__PURE__ */ q('<div class="meta svelte-2upyea"> </div>'), il = /* @__PURE__ */ q('<div class="meta svelte-2upyea"> </div>'), sl = /* @__PURE__ */ q('<button class="back svelte-2upyea">← Back</button> <div class="card svelte-2upyea"><h3> </h3> <!> <!> <!> <!> <!> <div class="actions svelte-2upyea"><button class="btn svelte-2upyea">Execute Verdict</button></div> <pre class="output svelte-2upyea"> </pre></div>', 1), ll = /* @__PURE__ */ q('<div class="empty svelte-2upyea">Loading cases…</div>'), al = /* @__PURE__ */ q('<div class="empty svelte-2upyea">No cases filed</div>'), fl = /* @__PURE__ */ q('<span class="status svelte-2upyea"> </span>'), ol = /* @__PURE__ */ q('<p class="desc svelte-2upyea"> </p>'), ul = /* @__PURE__ */ q('<button class="card clickable svelte-2upyea"><div class="row-top svelte-2upyea"><span class="title svelte-2upyea"> </span> <!></div> <!></button>'), cl = /* @__PURE__ */ q('<div class="list svelte-2upyea"></div>'), dl = /* @__PURE__ */ q('<div class="card svelte-2upyea"><label class="svelte-2upyea">Title <input type="text" placeholder="Case title" class="svelte-2upyea"/></label> <label class="svelte-2upyea">Description <textarea rows="3" placeholder="Describe the dispute…" class="svelte-2upyea"></textarea></label> <label class="svelte-2upyea">Defendant (optional) <input type="text" placeholder="Principal or name" class="svelte-2upyea"/></label> <button class="primary svelte-2upyea"> </button></div>'), vl = /* @__PURE__ */ q('<div class="tabs svelte-2upyea"><button> </button> <button>File New Case</button></div> <!>', 1), hl = /* @__PURE__ */ q('<div class="rt-jl svelte-2upyea"><div class="header svelte-2upyea"><h2 class="svelte-2upyea">Justice & Litigation</h2> <span class="badge svelte-2upyea"> </span> <button class="refresh svelte-2upyea">↻</button></div> <!> <!> <!></div>');
const _l = {
  hash: "svelte-2upyea",
  code: ".rt-jl.svelte-2upyea {font-family:system-ui, -apple-system, sans-serif;max-width:720px;margin:0 auto;padding:1.5rem;}.header.svelte-2upyea {display:flex;align-items:center;gap:0.75rem;margin-bottom:1rem;flex-wrap:wrap;}.header.svelte-2upyea h2:where(.svelte-2upyea) {margin:0;font-size:1.5rem;}.badge.svelte-2upyea {background:#e0e7ff;color:#3730a3;padding:0.15rem 0.5rem;border-radius:9999px;font-size:0.75rem;}.refresh.svelte-2upyea {margin-left:auto;padding:0.25rem 0.5rem;background:#f3f4f6;border:1px solid #d1d5db;border-radius:0.375rem;cursor:pointer;}.tabs.svelte-2upyea {display:flex;border-bottom:2px solid #e5e7eb;margin-bottom:1rem;}.tabs.svelte-2upyea button:where(.svelte-2upyea) {padding:0.5rem 1rem;background:none;border:none;border-bottom:2px solid transparent;margin-bottom:-2px;cursor:pointer;font-size:0.875rem;color:#6b7280;}.tabs.svelte-2upyea button.active:where(.svelte-2upyea) {border-bottom-color:#4f46e5;color:#4f46e5;font-weight:500;}.error.svelte-2upyea {background:#fef2f2;color:#991b1b;border:1px solid #fecaca;padding:0.75rem;border-radius:0.5rem;margin-bottom:1rem;}.success.svelte-2upyea {background:#ecfdf5;color:#065f46;border:1px solid #a7f3d0;padding:0.75rem;border-radius:0.5rem;margin-bottom:1rem;}.empty.svelte-2upyea {color:#6b7280;text-align:center;padding:2rem;}.list.svelte-2upyea {display:flex;flex-direction:column;gap:0.5rem;}.card.svelte-2upyea {background:#fff;border:1px solid #e5e7eb;border-radius:0.75rem;padding:1rem 1.25rem;margin-bottom:0.75rem;width:100%;text-align:left;font-family:inherit;}.clickable.svelte-2upyea {cursor:pointer;}.clickable.svelte-2upyea:hover {border-color:#a5b4fc;}.row-top.svelte-2upyea {display:flex;justify-content:space-between;align-items:center;}.title.svelte-2upyea {font-weight:500;font-size:0.9rem;}.status.svelte-2upyea {font-size:0.75rem;font-weight:600;text-transform:uppercase;}.desc.svelte-2upyea {margin:0.35rem 0 0;color:#4b5563;font-size:0.8rem;line-height:1.4;}.meta.svelte-2upyea {font-size:0.8rem;color:#6b7280;margin:0.25rem 0;}.actions.svelte-2upyea {display:flex;gap:0.5rem;margin:0.75rem 0;}.btn.svelte-2upyea {padding:0.4rem 0.8rem;background:#4f46e5;color:#fff;border:none;border-radius:0.375rem;cursor:pointer;font-size:0.8rem;}.back.svelte-2upyea {background:none;border:none;color:#4f46e5;cursor:pointer;font-size:0.85rem;padding:0;margin-bottom:1rem;}.back.svelte-2upyea:hover {text-decoration:underline;}label.svelte-2upyea {display:block;font-size:0.8rem;font-weight:500;color:#374151;margin-bottom:0.75rem;}input.svelte-2upyea, textarea.svelte-2upyea {display:block;width:100%;margin-top:0.25rem;padding:0.5rem 0.75rem;border:1px solid #d1d5db;border-radius:0.5rem;font-size:0.85rem;box-sizing:border-box;font-family:inherit;}.primary.svelte-2upyea {padding:0.5rem 1.25rem;background:#4f46e5;color:#fff;border:none;border-radius:0.5rem;cursor:pointer;font-size:0.85rem;}.primary.svelte-2upyea:hover:not(:disabled) {background:#4338ca;}.primary.svelte-2upyea:disabled {opacity:0.5;cursor:not-allowed;}.output.svelte-2upyea {background:#f9fafb;border:1px solid #e5e7eb;border-radius:0.5rem;padding:0.75rem;font-size:0.7rem;font-family:ui-monospace, monospace;overflow-x:auto;white-space:pre-wrap;max-height:300px;overflow-y:auto;margin-top:0.5rem;}"
};
function pl(e, t) {
  An(t, !0), Ks(e, _l);
  let r = fr(t, "extensionId", 3, "justice_litigation"), n = fr(t, "version", 3, "");
  fr(t, "principal", 3, ""), fr(t, "isAuthenticated", 3, !0);
  let i = /* @__PURE__ */ I(kt([])), s = /* @__PURE__ */ I(!0), o = /* @__PURE__ */ I(""), a = /* @__PURE__ */ I("list"), f = /* @__PURE__ */ I(""), u = /* @__PURE__ */ I(""), v = /* @__PURE__ */ I(""), _ = /* @__PURE__ */ I(!1), h = /* @__PURE__ */ I(""), d = /* @__PURE__ */ I(null), c = /* @__PURE__ */ I(!1);
  async function g(x, C = "{}") {
    const be = await t.backend.extension_sync_call(JSON.stringify({ extension_name: r(), function_name: x, args: C }));
    return JSON.parse(be);
  }
  async function b() {
    T(s, !0), T(o, "");
    try {
      const x = await g("get_litigations", "{}");
      T(i, x?.data ?? (Array.isArray(x) ? x : []), !0);
    } catch (x) {
      T(o, x?.message || String(x), !0);
    } finally {
      T(s, !1);
    }
  }
  async function R(x) {
    T(c, !0);
    try {
      const C = await g("get_case", JSON.stringify({ case_id: x }));
      T(d, C?.data ?? C, !0);
    } catch (C) {
      T(o, C?.message || String(C), !0);
    } finally {
      T(c, !1);
    }
  }
  async function A() {
    if (p(f).trim()) {
      T(_, !0), T(h, ""), T(o, "");
      try {
        await g("create_litigation", JSON.stringify({
          title: p(f),
          description: p(u),
          defendant: p(v) || void 0
        })), T(h, "Case filed successfully!"), T(f, ""), T(u, ""), T(v, ""), await b();
      } catch (x) {
        T(o, x?.message || String(x), !0);
      } finally {
        T(_, !1);
      }
    }
  }
  async function $(x) {
    try {
      await g("execute_verdict", JSON.stringify({ case_id: x })), p(d) && await R(x), await b();
    } catch (C) {
      T(o, C?.message || String(C), !0);
    }
  }
  function ie() {
    T(d, null);
  }
  xs(() => {
    b();
  });
  function Se(x) {
    if (!x) return "#6b7280";
    const C = x.toLowerCase();
    return C.includes("open") || C.includes("active") ? "#059669" : C.includes("resolved") || C.includes("closed") ? "#16a34a" : C.includes("dismissed") ? "#dc2626" : "#6b7280";
  }
  var ge = hl(), Be = M(ge), G = F(M(Be), 2), me = M(G), tr = F(G, 2), rr = F(Be, 2);
  {
    var oi = (x) => {
      var C = Qs(), be = M(C);
      W(() => U(be, p(o))), j(x, C);
    };
    le(rr, (x) => {
      p(o) && x(oi);
    });
  }
  var sn = F(rr, 2);
  {
    var ui = (x) => {
      var C = $s(), be = M(C);
      W(() => U(be, p(h))), j(x, C);
    };
    le(sn, (x) => {
      p(h) && x(ui);
    });
  }
  var ci = F(sn, 2);
  {
    var di = (x) => {
      var C = sl(), be = Rr(C), gt = F(be, 2), Lt = M(gt), kr = M(Lt), jt = F(Lt, 2);
      {
        var nr = (S) => {
          var N = el(), se = M(N);
          W(
            (lr) => {
              yn(N, `color:${lr ?? ""}`), U(se, p(d).status);
            },
            [() => Se(p(d).status)]
          ), j(S, N);
        };
        le(jt, (S) => {
          p(d).status && S(nr);
        });
      }
      var ir = F(jt, 2);
      {
        var Sr = (S) => {
          var N = tl(), se = M(N);
          W(() => U(se, p(d).description)), j(S, N);
        };
        le(ir, (S) => {
          p(d).description && S(Sr);
        });
      }
      var sr = F(ir, 2);
      {
        var He = (S) => {
          var N = rl(), se = M(N);
          W(() => U(se, `Plaintiff: ${p(d).plaintiff ?? ""}`)), j(S, N);
        };
        le(sr, (S) => {
          p(d).plaintiff && S(He);
        });
      }
      var Ue = F(sr, 2);
      {
        var mt = (S) => {
          var N = nl(), se = M(N);
          W(() => U(se, `Defendant: ${p(d).defendant ?? ""}`)), j(S, N);
        };
        le(Ue, (S) => {
          p(d).defendant && S(mt);
        });
      }
      var bt = F(Ue, 2);
      {
        var yt = (S) => {
          var N = il(), se = M(N);
          W(() => U(se, `Verdict: ${p(d).verdict ?? ""}`)), j(S, N);
        };
        le(bt, (S) => {
          p(d).verdict && S(yt);
        });
      }
      var wt = F(bt, 2), K = M(wt), Te = F(wt, 2), Ae = M(Te);
      W(
        (S) => {
          U(kr, p(d).title || p(d).id), U(Ae, S);
        },
        [() => JSON.stringify(p(d), null, 2)]
      ), tt("click", be, ie), tt("click", K, () => $(p(d).id)), j(x, C);
    }, vi = (x) => {
      var C = vl(), be = Rr(C), gt = M(be);
      let Lt;
      var kr = M(gt), jt = F(gt, 2);
      let nr;
      var ir = F(be, 2);
      {
        var Sr = (He) => {
          var Ue = js(), mt = Rr(Ue);
          {
            var bt = (K) => {
              var Te = ll();
              j(K, Te);
            }, yt = (K) => {
              var Te = al();
              j(K, Te);
            }, wt = (K) => {
              var Te = cl();
              Ys(Te, 21, () => p(i), (Ae) => Ae.id || Ae.title, (Ae, S) => {
                var N = ul(), se = M(N), lr = M(se), hi = M(lr), _i = F(lr, 2);
                {
                  var pi = ($e) => {
                    var Et = fl(), Tr = M(Et);
                    W(
                      (Ar) => {
                        yn(Et, `color:${Ar ?? ""}`), U(Tr, p(S).status);
                      },
                      [() => Se(p(S).status)]
                    ), j($e, Et);
                  };
                  le(_i, ($e) => {
                    p(S).status && $e(pi);
                  });
                }
                var gi = F(se, 2);
                {
                  var mi = ($e) => {
                    var Et = ol(), Tr = M(Et);
                    W((Ar) => U(Tr, `${Ar ?? ""}${p(S).description.length > 100 ? "…" : ""}`), [() => p(S).description.slice(0, 100)]), j($e, Et);
                  };
                  le(gi, ($e) => {
                    p(S).description && $e(mi);
                  });
                }
                W(() => U(hi, p(S).title || p(S).id)), tt("click", N, () => R(p(S).id)), j(Ae, N);
              }), j(K, Te);
            };
            le(mt, (K) => {
              p(s) ? K(bt) : p(i).length === 0 ? K(yt, 1) : K(wt, -1);
            });
          }
          j(He, Ue);
        }, sr = (He) => {
          var Ue = dl(), mt = M(Ue), bt = F(M(mt)), yt = F(mt, 2), wt = F(M(yt)), K = F(yt, 2), Te = F(M(K)), Ae = F(K, 2), S = M(Ae);
          W(
            (N) => {
              Ae.disabled = N, U(S, p(_) ? "Filing…" : "File Case");
            },
            [() => p(_) || !p(f).trim()]
          ), Dr(bt, () => p(f), (N) => T(f, N)), Dr(wt, () => p(u), (N) => T(u, N)), Dr(Te, () => p(v), (N) => T(v, N)), tt("click", Ae, A), j(He, Ue);
        };
        le(ir, (He) => {
          p(a) === "list" ? He(Sr) : He(sr, -1);
        });
      }
      W(() => {
        Lt = bn(gt, 1, "svelte-2upyea", null, Lt, { active: p(a) === "list" }), U(kr, `Cases (${p(i).length ?? ""})`), nr = bn(jt, 1, "svelte-2upyea", null, nr, { active: p(a) === "create" });
      }), tt("click", gt, () => T(a, "list")), tt("click", jt, () => T(a, "create")), j(x, C);
    };
    le(ci, (x) => {
      p(d) ? x(di) : x(vi, -1);
    });
  }
  W(() => {
    U(me, `v${n() ?? ""}`), tr.disabled = p(s);
  }), tt("click", tr, b), j(e, ge), Cn();
}
Ps(["click"]);
function bl(e, t) {
  const r = Vs(pl, { target: e, props: t });
  return {
    unmount() {
      try {
        Bs(r);
      } catch {
      }
    }
  };
}
export {
  bl as default
};
