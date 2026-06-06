var Ci = Object.defineProperty;
var or = (e) => {
  throw TypeError(e);
};
var Mi = (e, t, n) => t in e ? Ci(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var ze = (e, t, n) => Mi(e, typeof t != "symbol" ? t + "" : t, n), bs = (e, t, n) => t.has(e) || or("Cannot " + n);
var a = (e, t, n) => (bs(e, t, "read from private field"), n ? n.call(e) : t.get(e)), T = (e, t, n) => t.has(e) ? or("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), C = (e, t, n, s) => (bs(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), B = (e, t, n) => (bs(e, t, "access private method"), n);
var xr = Array.isArray, Ni = Array.prototype.indexOf, on = Array.prototype.includes, as = Array.from, Pi = Object.defineProperty, Sn = Object.getOwnPropertyDescriptor, Li = Object.getOwnPropertyDescriptors, Ii = Object.prototype, Di = Array.prototype, yr = Object.getPrototypeOf, ar = Object.isExtensible;
const Oi = () => {
};
function Ri(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function Er() {
  var e, t, n = new Promise((s, r) => {
    e = s, t = r;
  });
  return { promise: n, resolve: e, reject: t };
}
const ae = 2, an = 4, ls = 8, Sr = 1 << 24, Ze = 16, Ue = 32, Et = 64, xs = 128, Le = 512, te = 1024, oe = 2048, et = 4096, de = 8192, Ie = 16384, Yt = 32768, ys = 1 << 25, ln = 65536, Es = 1 << 17, zi = 1 << 18, dn = 1 << 19, ji = 1 << 20, Xe = 1 << 25, Vt = 65536, ns = 1 << 21, Cn = 1 << 22, yt = 1 << 23, Gn = Symbol("$state"), Hi = Symbol(""), it = new class extends Error {
  constructor() {
    super(...arguments);
    ze(this, "name", "StaleReactionError");
    ze(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
function Fi(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function Ui() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Vi(e, t, n) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function Bi(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function qi() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function $i(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Yi() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Gi() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Wi() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Ki() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Ji() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
const Xi = 1, Qi = 2, Tr = 4, Zi = 8, eo = 16, to = 1, no = 2, re = Symbol(), Ar = "http://www.w3.org/1999/xhtml", so = "http://www.w3.org/2000/svg", ro = "http://www.w3.org/1998/Math/MathML";
function io() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function oo() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function Cr(e) {
  return e === this.v;
}
function ao(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Mr(e) {
  return !ao(e, this.v);
}
let _e = null;
function cn(e) {
  _e = e;
}
function Nr(e, t = !1, n) {
  _e = {
    p: _e,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    r: (
      /** @type {Effect} */
      M
    ),
    l: null
  };
}
function Pr(e) {
  var t = (
    /** @type {ComponentContext} */
    _e
  ), n = t.e;
  if (n !== null) {
    t.e = null;
    for (var s of n)
      Xr(s);
  }
  return t.i = !0, _e = t.p, /** @type {T} */
  {};
}
function Lr() {
  return !0;
}
let Nt = [];
function Ir() {
  var e = Nt;
  Nt = [], Ri(e);
}
function jt(e) {
  if (Nt.length === 0 && !Tn) {
    var t = Nt;
    queueMicrotask(() => {
      t === Nt && Ir();
    });
  }
  Nt.push(e);
}
function lo() {
  for (; Nt.length > 0; )
    Ir();
}
function Dr(e) {
  var t = M;
  if (t === null)
    return P.f |= yt, e;
  if ((t.f & Yt) === 0 && (t.f & an) === 0)
    throw e;
  xt(e, t);
}
function xt(e, t) {
  for (; t !== null; ) {
    if ((t.f & xs) !== 0) {
      if ((t.f & Yt) === 0)
        throw e;
      try {
        t.b.error(e);
        return;
      } catch (n) {
        e = n;
      }
    }
    t = t.parent;
  }
  throw e;
}
const co = -7169;
function J(e, t) {
  e.f = e.f & co | t;
}
function Rs(e) {
  (e.f & Le) !== 0 || e.deps === null ? J(e, te) : J(e, et);
}
function Or(e) {
  if (e !== null)
    for (const t of e)
      (t.f & ae) === 0 || (t.f & Vt) === 0 || (t.f ^= Vt, Or(
        /** @type {Derived} */
        t.deps
      ));
}
function Rr(e, t, n) {
  (e.f & oe) !== 0 ? t.add(e) : (e.f & et) !== 0 && n.add(e), Or(e.deps), J(e, te);
}
const Mt = /* @__PURE__ */ new Set();
let A = null, He = null, Ss = null, Tn = !1, _s = !1, Zt = null, Wn = null;
var lr = 0;
let fo = 1;
var en, tn, It, ot, Ge, Nn, xe, Pn, wt, at, We, nn, sn, Dt, Z, Kn, zr, Jn, Ts, Xn, uo;
const rs = class rs {
  constructor() {
    T(this, Z);
    ze(this, "id", fo++);
    /**
     * The current values of any signals that are updated in this batch.
     * Tuple format: [value, is_derived] (note: is_derived is false for deriveds, too, if they were overridden via assignment)
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Value, [any, boolean]>}
     */
    ze(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any signals (sources and deriveds) that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Value, any>}
     */
    ze(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<(batch: Batch) => void>}
     */
    T(this, en, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    T(this, tn, /* @__PURE__ */ new Set());
    /**
     * Callbacks that should run only when a fork is committed.
     * @type {Set<(batch: Batch) => void>}
     */
    T(this, It, /* @__PURE__ */ new Set());
    /**
     * Async effects that are currently in flight
     * @type {Map<Effect, number>}
     */
    T(this, ot, /* @__PURE__ */ new Map());
    /**
     * Async effects that are currently in flight, _not_ inside a pending boundary
     * @type {Map<Effect, number>}
     */
    T(this, Ge, /* @__PURE__ */ new Map());
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    T(this, Nn, null);
    /**
     * The root effects that need to be flushed
     * @type {Effect[]}
     */
    T(this, xe, []);
    /**
     * Effects created while this batch was active.
     * @type {Effect[]}
     */
    T(this, Pn, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    T(this, wt, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    T(this, at, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    T(this, We, /* @__PURE__ */ new Map());
    /**
     * Inverse of #skipped_branches which we need to tell prior batches to unskip them when committing
     * @type {Set<Effect>}
     */
    T(this, nn, /* @__PURE__ */ new Set());
    ze(this, "is_fork", !1);
    T(this, sn, !1);
    /** @type {Set<Batch>} */
    T(this, Dt, /* @__PURE__ */ new Set());
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(t) {
    a(this, We).has(t) || a(this, We).set(t, { d: [], m: [] }), a(this, nn).delete(t);
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   * @param {(e: Effect) => void} callback
   */
  unskip_effect(t, n = (s) => this.schedule(s)) {
    var s = a(this, We).get(t);
    if (s) {
      a(this, We).delete(t);
      for (var r of s.d)
        J(r, oe), n(r);
      for (r of s.m)
        J(r, et), n(r);
    }
    a(this, nn).add(t);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Value} source
   * @param {any} value
   * @param {boolean} [is_derived]
   */
  capture(t, n, s = !1) {
    t.v !== re && !this.previous.has(t) && this.previous.set(t, t.v), (t.f & yt) === 0 && (this.current.set(t, [n, s]), He?.set(t, n)), this.is_fork || (t.v = n);
  }
  activate() {
    A = this;
  }
  deactivate() {
    A = null, He = null;
  }
  flush() {
    try {
      _s = !0, A = this, B(this, Z, Jn).call(this);
    } finally {
      lr = 0, Ss = null, Zt = null, Wn = null, _s = !1, A = null, He = null, Ht.clear();
    }
  }
  discard() {
    for (const t of a(this, tn)) t(this);
    a(this, tn).clear(), a(this, It).clear(), Mt.delete(this);
  }
  /**
   * @param {Effect} effect
   */
  register_created_effect(t) {
    a(this, Pn).push(t);
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  increment(t, n) {
    let s = a(this, ot).get(n) ?? 0;
    if (a(this, ot).set(n, s + 1), t) {
      let r = a(this, Ge).get(n) ?? 0;
      a(this, Ge).set(n, r + 1);
    }
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   * @param {boolean} skip - whether to skip updates (because this is triggered by a stale reaction)
   */
  decrement(t, n, s) {
    let r = a(this, ot).get(n) ?? 0;
    if (r === 1 ? a(this, ot).delete(n) : a(this, ot).set(n, r - 1), t) {
      let i = a(this, Ge).get(n) ?? 0;
      i === 1 ? a(this, Ge).delete(n) : a(this, Ge).set(n, i - 1);
    }
    a(this, sn) || s || (C(this, sn, !0), jt(() => {
      C(this, sn, !1), this.flush();
    }));
  }
  /**
   * @param {Set<Effect>} dirty_effects
   * @param {Set<Effect>} maybe_dirty_effects
   */
  transfer_effects(t, n) {
    for (const s of t)
      a(this, wt).add(s);
    for (const s of n)
      a(this, at).add(s);
    t.clear(), n.clear();
  }
  /** @param {(batch: Batch) => void} fn */
  oncommit(t) {
    a(this, en).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    a(this, tn).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  on_fork_commit(t) {
    a(this, It).add(t);
  }
  run_fork_commit_callbacks() {
    for (const t of a(this, It)) t(this);
    a(this, It).clear();
  }
  settled() {
    return (a(this, Nn) ?? C(this, Nn, Er())).promise;
  }
  static ensure() {
    if (A === null) {
      const t = A = new rs();
      _s || (Mt.add(A), Tn || jt(() => {
        A === t && t.flush();
      }));
    }
    return A;
  }
  apply() {
    {
      He = null;
      return;
    }
  }
  /**
   *
   * @param {Effect} effect
   */
  schedule(t) {
    if (Ss = t, t.b?.is_pending && (t.f & (an | ls | Sr)) !== 0 && (t.f & Yt) === 0) {
      t.b.defer_effect(t);
      return;
    }
    for (var n = t; n.parent !== null; ) {
      n = n.parent;
      var s = n.f;
      if (Zt !== null && n === M && (P === null || (P.f & ae) === 0))
        return;
      if ((s & (Et | Ue)) !== 0) {
        if ((s & te) === 0)
          return;
        n.f ^= te;
      }
    }
    a(this, xe).push(n);
  }
};
en = new WeakMap(), tn = new WeakMap(), It = new WeakMap(), ot = new WeakMap(), Ge = new WeakMap(), Nn = new WeakMap(), xe = new WeakMap(), Pn = new WeakMap(), wt = new WeakMap(), at = new WeakMap(), We = new WeakMap(), nn = new WeakMap(), sn = new WeakMap(), Dt = new WeakMap(), Z = new WeakSet(), Kn = function() {
  return this.is_fork || a(this, Ge).size > 0;
}, zr = function() {
  for (const s of a(this, Dt))
    for (const r of a(s, Ge).keys()) {
      for (var t = !1, n = r; n.parent !== null; ) {
        if (a(this, We).has(n)) {
          t = !0;
          break;
        }
        n = n.parent;
      }
      if (!t)
        return !0;
    }
  return !1;
}, Jn = function() {
  var f;
  if (lr++ > 1e3 && (Mt.delete(this), po()), !B(this, Z, Kn).call(this)) {
    for (const o of a(this, wt))
      a(this, at).delete(o), J(o, oe), this.schedule(o);
    for (const o of a(this, at))
      J(o, et), this.schedule(o);
  }
  const t = a(this, xe);
  C(this, xe, []), this.apply();
  var n = Zt = [], s = [], r = Wn = [];
  for (const o of t)
    try {
      B(this, Z, Ts).call(this, o, n, s);
    } catch (u) {
      throw Fr(o), u;
    }
  if (A = null, r.length > 0) {
    var i = rs.ensure();
    for (const o of r)
      i.schedule(o);
  }
  if (Zt = null, Wn = null, B(this, Z, Kn).call(this) || B(this, Z, zr).call(this)) {
    B(this, Z, Xn).call(this, s), B(this, Z, Xn).call(this, n);
    for (const [o, u] of a(this, We))
      Hr(o, u);
  } else {
    a(this, ot).size === 0 && Mt.delete(this), a(this, wt).clear(), a(this, at).clear();
    for (const o of a(this, en)) o(this);
    a(this, en).clear(), cr(s), cr(n), a(this, Nn)?.resolve();
  }
  var c = (
    /** @type {Batch | null} */
    /** @type {unknown} */
    A
  );
  if (a(this, xe).length > 0) {
    const o = c ?? (c = this);
    a(o, xe).push(...a(this, xe).filter((u) => !a(o, xe).includes(u)));
  }
  c !== null && (Mt.add(c), B(f = c, Z, Jn).call(f));
}, /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
Ts = function(t, n, s) {
  t.f ^= te;
  for (var r = t.first; r !== null; ) {
    var i = r.f, c = (i & (Ue | Et)) !== 0, f = c && (i & te) !== 0, o = f || (i & de) !== 0 || a(this, We).has(r);
    if (!o && r.fn !== null) {
      c ? r.f ^= te : (i & an) !== 0 ? n.push(r) : zn(r) && ((i & Ze) !== 0 && a(this, at).add(r), un(r));
      var u = r.first;
      if (u !== null) {
        r = u;
        continue;
      }
    }
    for (; r !== null; ) {
      var d = r.next;
      if (d !== null) {
        r = d;
        break;
      }
      r = r.parent;
    }
  }
}, /**
 * @param {Effect[]} effects
 */
Xn = function(t) {
  for (var n = 0; n < t.length; n += 1)
    Rr(t[n], a(this, wt), a(this, at));
}, uo = function() {
  var d, w, p;
  for (const g of Mt) {
    var t = g.id < this.id, n = [];
    for (const [_, [S, v]] of this.current) {
      if (g.current.has(_)) {
        var s = (
          /** @type {[any, boolean]} */
          g.current.get(_)[0]
        );
        if (t && S !== s)
          g.current.set(_, [S, v]);
        else
          continue;
      }
      n.push(_);
    }
    var r = [...g.current.keys()].filter((_) => !this.current.has(_));
    if (r.length === 0)
      t && g.discard();
    else if (n.length > 0) {
      if (t)
        for (const _ of a(this, nn))
          g.unskip_effect(_, (S) => {
            var v;
            (S.f & (Ze | Cn)) !== 0 ? g.schedule(S) : B(v = g, Z, Xn).call(v, [S]);
          });
      g.activate();
      var i = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Map();
      for (var f of n)
        jr(f, r, i, c);
      c = /* @__PURE__ */ new Map();
      var o = [...g.current.keys()].filter(
        (_) => this.current.has(_) ? (
          /** @type {[any, boolean]} */
          this.current.get(_)[0] !== _
        ) : !0
      );
      for (const _ of a(this, Pn))
        (_.f & (Ie | de | Es)) === 0 && zs(_, o, c) && ((_.f & (Cn | Ze)) !== 0 ? (J(_, oe), g.schedule(_)) : a(g, wt).add(_));
      if (a(g, xe).length > 0) {
        g.apply();
        for (var u of a(g, xe))
          B(d = g, Z, Ts).call(d, u, [], []);
        C(g, xe, []);
      }
      g.deactivate();
    }
  }
  for (const g of Mt)
    a(g, Dt).has(this) && (a(g, Dt).delete(this), a(g, Dt).size === 0 && !B(w = g, Z, Kn).call(w) && (g.activate(), B(p = g, Z, Jn).call(p)));
};
let Bt = rs;
function vo(e) {
  var t = Tn;
  Tn = !0;
  try {
    for (var n; ; ) {
      if (lo(), A === null)
        return (
          /** @type {T} */
          n
        );
      A.flush();
    }
  } finally {
    Tn = t;
  }
}
function po() {
  try {
    Yi();
  } catch (e) {
    xt(e, Ss);
  }
}
let rt = null;
function cr(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var s = e[n++];
      if ((s.f & (Ie | de)) === 0 && zn(s) && (rt = /* @__PURE__ */ new Set(), un(s), s.deps === null && s.first === null && s.nodes === null && s.teardown === null && s.ac === null && ti(s), rt?.size > 0)) {
        Ht.clear();
        for (const r of rt) {
          if ((r.f & (Ie | de)) !== 0) continue;
          const i = [r];
          let c = r.parent;
          for (; c !== null; )
            rt.has(c) && (rt.delete(c), i.push(c)), c = c.parent;
          for (let f = i.length - 1; f >= 0; f--) {
            const o = i[f];
            (o.f & (Ie | de)) === 0 && un(o);
          }
        }
        rt.clear();
      }
    }
    rt = null;
  }
}
function jr(e, t, n, s) {
  if (!n.has(e) && (n.add(e), e.reactions !== null))
    for (const r of e.reactions) {
      const i = r.f;
      (i & ae) !== 0 ? jr(
        /** @type {Derived} */
        r,
        t,
        n,
        s
      ) : (i & (Cn | Ze)) !== 0 && (i & oe) === 0 && zs(r, t, s) && (J(r, oe), js(
        /** @type {Effect} */
        r
      ));
    }
}
function zs(e, t, n) {
  const s = n.get(e);
  if (s !== void 0) return s;
  if (e.deps !== null)
    for (const r of e.deps) {
      if (on.call(t, r))
        return !0;
      if ((r.f & ae) !== 0 && zs(
        /** @type {Derived} */
        r,
        t,
        n
      ))
        return n.set(
          /** @type {Derived} */
          r,
          !0
        ), !0;
    }
  return n.set(e, !1), !1;
}
function js(e) {
  A.schedule(e);
}
function Hr(e, t) {
  if (!((e.f & Ue) !== 0 && (e.f & te) !== 0)) {
    (e.f & oe) !== 0 ? t.d.push(e) : (e.f & et) !== 0 && t.m.push(e), J(e, te);
    for (var n = e.first; n !== null; )
      Hr(n, t), n = n.next;
  }
}
function Fr(e) {
  J(e, te);
  for (var t = e.first; t !== null; )
    Fr(t), t = t.next;
}
function ho(e) {
  let t = 0, n = qt(0), s;
  return () => {
    Vs() && (l(n), Bs(() => (t === 0 && (s = cs(() => e(() => An(n)))), t += 1, () => {
      jt(() => {
        t -= 1, t === 0 && (s?.(), s = void 0, An(n));
      });
    })));
  };
}
var go = ln | dn;
function bo(e, t, n, s) {
  new _o(e, t, n, s);
}
var Ce, Os, Me, Ot, he, Ne, ue, ye, lt, Rt, mt, rn, Ln, In, ct, is, K, ko, wo, mo, As, Qn, Zn, Cs, Ms;
class _o {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(t, n, s, r) {
    T(this, K);
    /** @type {Boundary | null} */
    ze(this, "parent");
    ze(this, "is_pending", !1);
    /**
     * API-level transformError transform function. Transforms errors before they reach the `failed` snippet.
     * Inherited from parent boundary, or defaults to identity.
     * @type {(error: unknown) => unknown}
     */
    ze(this, "transform_error");
    /** @type {TemplateNode} */
    T(this, Ce);
    /** @type {TemplateNode | null} */
    T(this, Os, null);
    /** @type {BoundaryProps} */
    T(this, Me);
    /** @type {((anchor: Node) => void)} */
    T(this, Ot);
    /** @type {Effect} */
    T(this, he);
    /** @type {Effect | null} */
    T(this, Ne, null);
    /** @type {Effect | null} */
    T(this, ue, null);
    /** @type {Effect | null} */
    T(this, ye, null);
    /** @type {DocumentFragment | null} */
    T(this, lt, null);
    T(this, Rt, 0);
    T(this, mt, 0);
    T(this, rn, !1);
    /** @type {Set<Effect>} */
    T(this, Ln, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    T(this, In, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    T(this, ct, null);
    T(this, is, ho(() => (C(this, ct, qt(a(this, Rt))), () => {
      C(this, ct, null);
    })));
    C(this, Ce, t), C(this, Me, n), C(this, Ot, (i) => {
      var c = (
        /** @type {Effect} */
        M
      );
      c.b = this, c.f |= xs, s(i);
    }), this.parent = /** @type {Effect} */
    M.b, this.transform_error = r ?? this.parent?.transform_error ?? ((i) => i), C(this, he, qs(() => {
      B(this, K, As).call(this);
    }, go));
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    Rr(t, a(this, Ln), a(this, In));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!a(this, Me).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  update_pending_count(t, n) {
    B(this, K, Cs).call(this, t, n), C(this, Rt, a(this, Rt) + t), !(!a(this, ct) || a(this, rn)) && (C(this, rn, !0), jt(() => {
      C(this, rn, !1), a(this, ct) && fn(a(this, ct), a(this, Rt));
    }));
  }
  get_effect_pending() {
    return a(this, is).call(this), l(
      /** @type {Source<number>} */
      a(this, ct)
    );
  }
  /** @param {unknown} error */
  error(t) {
    if (!a(this, Me).onerror && !a(this, Me).failed)
      throw t;
    A?.is_fork ? (a(this, Ne) && A.skip_effect(a(this, Ne)), a(this, ue) && A.skip_effect(a(this, ue)), a(this, ye) && A.skip_effect(a(this, ye)), A.on_fork_commit(() => {
      B(this, K, Ms).call(this, t);
    })) : B(this, K, Ms).call(this, t);
  }
}
Ce = new WeakMap(), Os = new WeakMap(), Me = new WeakMap(), Ot = new WeakMap(), he = new WeakMap(), Ne = new WeakMap(), ue = new WeakMap(), ye = new WeakMap(), lt = new WeakMap(), Rt = new WeakMap(), mt = new WeakMap(), rn = new WeakMap(), Ln = new WeakMap(), In = new WeakMap(), ct = new WeakMap(), is = new WeakMap(), K = new WeakSet(), ko = function() {
  try {
    C(this, Ne, Pe(() => a(this, Ot).call(this, a(this, Ce))));
  } catch (t) {
    this.error(t);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
wo = function(t) {
  const n = a(this, Me).failed;
  n && C(this, ye, Pe(() => {
    n(
      a(this, Ce),
      () => t,
      () => () => {
      }
    );
  }));
}, mo = function() {
  const t = a(this, Me).pending;
  t && (this.is_pending = !0, C(this, ue, Pe(() => t(a(this, Ce)))), jt(() => {
    var n = C(this, lt, document.createDocumentFragment()), s = ft();
    n.append(s), C(this, Ne, B(this, K, Zn).call(this, () => Pe(() => a(this, Ot).call(this, s)))), a(this, mt) === 0 && (a(this, Ce).before(n), C(this, lt, null), Ft(
      /** @type {Effect} */
      a(this, ue),
      () => {
        C(this, ue, null);
      }
    ), B(this, K, Qn).call(
      this,
      /** @type {Batch} */
      A
    ));
  }));
}, As = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), C(this, mt, 0), C(this, Rt, 0), C(this, Ne, Pe(() => {
      a(this, Ot).call(this, a(this, Ce));
    })), a(this, mt) > 0) {
      var t = C(this, lt, document.createDocumentFragment());
      Gs(a(this, Ne), t);
      const n = (
        /** @type {(anchor: Node) => void} */
        a(this, Me).pending
      );
      C(this, ue, Pe(() => n(a(this, Ce))));
    } else
      B(this, K, Qn).call(
        this,
        /** @type {Batch} */
        A
      );
  } catch (n) {
    this.error(n);
  }
}, /**
 * @param {Batch} batch
 */
Qn = function(t) {
  this.is_pending = !1, t.transfer_effects(a(this, Ln), a(this, In));
}, /**
 * @template T
 * @param {() => T} fn
 */
Zn = function(t) {
  var n = M, s = P, r = _e;
  tt(a(this, he)), Oe(a(this, he)), cn(a(this, he).ctx);
  try {
    return Bt.ensure(), t();
  } catch (i) {
    return Dr(i), null;
  } finally {
    tt(n), Oe(s), cn(r);
  }
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 * @param {Batch} batch
 */
Cs = function(t, n) {
  var s;
  if (!this.has_pending_snippet()) {
    this.parent && B(s = this.parent, K, Cs).call(s, t, n);
    return;
  }
  C(this, mt, a(this, mt) + t), a(this, mt) === 0 && (B(this, K, Qn).call(this, n), a(this, ue) && Ft(a(this, ue), () => {
    C(this, ue, null);
  }), a(this, lt) && (a(this, Ce).before(a(this, lt)), C(this, lt, null)));
}, /**
 * @param {unknown} error
 */
Ms = function(t) {
  a(this, Ne) && (be(a(this, Ne)), C(this, Ne, null)), a(this, ue) && (be(a(this, ue)), C(this, ue, null)), a(this, ye) && (be(a(this, ye)), C(this, ye, null));
  var n = a(this, Me).onerror;
  let s = a(this, Me).failed;
  var r = !1, i = !1;
  const c = () => {
    if (r) {
      oo();
      return;
    }
    r = !0, i && Ji(), a(this, ye) !== null && Ft(a(this, ye), () => {
      C(this, ye, null);
    }), B(this, K, Zn).call(this, () => {
      B(this, K, As).call(this);
    });
  }, f = (o) => {
    try {
      i = !0, n?.(o, c), i = !1;
    } catch (u) {
      xt(u, a(this, he) && a(this, he).parent);
    }
    s && C(this, ye, B(this, K, Zn).call(this, () => {
      try {
        return Pe(() => {
          var u = (
            /** @type {Effect} */
            M
          );
          u.b = this, u.f |= xs, s(
            a(this, Ce),
            () => o,
            () => c
          );
        });
      } catch (u) {
        return xt(
          u,
          /** @type {Effect} */
          a(this, he).parent
        ), null;
      }
    }));
  };
  jt(() => {
    var o;
    try {
      o = this.transform_error(t);
    } catch (u) {
      xt(u, a(this, he) && a(this, he).parent);
      return;
    }
    o !== null && typeof o == "object" && typeof /** @type {any} */
    o.then == "function" ? o.then(
      f,
      /** @param {unknown} e */
      (u) => xt(u, a(this, he) && a(this, he).parent)
    ) : f(o);
  });
};
function xo(e, t, n, s) {
  const r = Vr;
  var i = e.filter((p) => !p.settled);
  if (n.length === 0 && i.length === 0) {
    s(t.map(r));
    return;
  }
  var c = (
    /** @type {Effect} */
    M
  ), f = yo(), o = i.length === 1 ? i[0].promise : i.length > 1 ? Promise.all(i.map((p) => p.promise)) : null;
  function u(p) {
    f();
    try {
      s(p);
    } catch (g) {
      (c.f & Ie) === 0 && xt(g, c);
    }
    ss();
  }
  if (n.length === 0) {
    o.then(() => u(t.map(r)));
    return;
  }
  var d = Ur();
  function w() {
    Promise.all(n.map((p) => /* @__PURE__ */ Eo(p))).then((p) => u([...t.map(r), ...p])).catch((p) => xt(p, c)).finally(() => d());
  }
  o ? o.then(() => {
    f(), w(), ss();
  }) : w();
}
function yo() {
  var e = (
    /** @type {Effect} */
    M
  ), t = P, n = _e, s = (
    /** @type {Batch} */
    A
  );
  return function(i = !0) {
    tt(e), Oe(t), cn(n), i && (e.f & Ie) === 0 && (s?.activate(), s?.apply());
  };
}
function ss(e = !0) {
  tt(null), Oe(null), cn(null), e && A?.deactivate();
}
function Ur() {
  var e = (
    /** @type {Effect} */
    M
  ), t = (
    /** @type {Boundary} */
    e.b
  ), n = (
    /** @type {Batch} */
    A
  ), s = t.is_rendered();
  return t.update_pending_count(1, n), n.increment(s, e), (r = !1) => {
    t.update_pending_count(-1, n), n.decrement(s, e, r);
  };
}
// @__NO_SIDE_EFFECTS__
function Vr(e) {
  var t = ae | oe;
  return M !== null && (M.f |= dn), {
    ctx: _e,
    deps: null,
    effects: null,
    equals: Cr,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      re
    ),
    wv: 0,
    parent: M,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function Eo(e, t, n) {
  let s = (
    /** @type {Effect | null} */
    M
  );
  s === null && Ui();
  var r = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), i = qt(
    /** @type {V} */
    re
  ), c = !P, f = /* @__PURE__ */ new Map();
  return jo(() => {
    var o = (
      /** @type {Effect} */
      M
    ), u = Er();
    r = u.promise;
    try {
      Promise.resolve(e()).then(u.resolve, u.reject).finally(ss);
    } catch (g) {
      u.reject(g), ss();
    }
    var d = (
      /** @type {Batch} */
      A
    );
    if (c) {
      if ((o.f & Yt) !== 0)
        var w = Ur();
      if (
        /** @type {Boundary} */
        s.b.is_rendered()
      )
        f.get(d)?.reject(it), f.delete(d);
      else {
        for (const g of f.values())
          g.reject(it);
        f.clear();
      }
      f.set(d, u);
    }
    const p = (g, _ = void 0) => {
      if (w) {
        var S = _ === it;
        w(S);
      }
      if (!(_ === it || (o.f & Ie) !== 0)) {
        if (d.activate(), _)
          i.f |= yt, fn(i, _);
        else {
          (i.f & yt) !== 0 && (i.f ^= yt), fn(i, g);
          for (const [v, y] of f) {
            if (f.delete(v), v === d) break;
            y.reject(it);
          }
        }
        d.deactivate();
      }
    };
    u.promise.then(p, (g) => p(null, g || "unknown"));
  }), Ro(() => {
    for (const o of f.values())
      o.reject(it);
  }), new Promise((o) => {
    function u(d) {
      function w() {
        d === r ? o(i) : u(r);
      }
      d.then(w, w);
    }
    u(r);
  });
}
// @__NO_SIDE_EFFECTS__
function So(e) {
  const t = /* @__PURE__ */ Vr(e);
  return t.equals = Mr, t;
}
function To(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      be(
        /** @type {Effect} */
        t[n]
      );
  }
}
function Hs(e) {
  var t, n = M, s = e.parent;
  if (!St && s !== null && (s.f & (Ie | de)) !== 0)
    return io(), e.v;
  tt(s);
  try {
    e.f &= ~Vt, To(e), t = ai(e);
  } finally {
    tt(n);
  }
  return t;
}
function Br(e) {
  var t = Hs(e);
  if (!e.equals(t) && (e.wv = ii(), (!A?.is_fork || e.deps === null) && (A !== null ? A.capture(e, t, !0) : e.v = t, e.deps === null))) {
    J(e, te);
    return;
  }
  St || (He !== null ? (Vs() || A?.is_fork) && He.set(e, t) : Rs(e));
}
function Ao(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      (t.teardown || t.ac) && (t.teardown?.(), t.ac?.abort(it), t.teardown = Oi, t.ac = null, Mn(t, 0), $s(t));
}
function qr(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      t.teardown && un(t);
}
let Ns = /* @__PURE__ */ new Set();
const Ht = /* @__PURE__ */ new Map();
let $r = !1;
function qt(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Cr,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function I(e, t) {
  const n = qt(e);
  return Fo(n), n;
}
// @__NO_SIDE_EFFECTS__
function Co(e, t = !1, n = !0) {
  const s = qt(e);
  return t || (s.equals = Mr), s;
}
function b(e, t, n = !1) {
  P !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Fe || (P.f & Es) !== 0) && Lr() && (P.f & (ae | Ze | Cn | Es)) !== 0 && (De === null || !on.call(De, e)) && Ki();
  let s = n ? Je(t) : t;
  return fn(e, s, Wn);
}
function fn(e, t, n = null) {
  if (!e.equals(t)) {
    Ht.set(e, St ? t : e.v);
    var s = Bt.ensure();
    if (s.capture(e, t), (e.f & ae) !== 0) {
      const r = (
        /** @type {Derived} */
        e
      );
      (e.f & oe) !== 0 && Hs(r), He === null && Rs(r);
    }
    e.wv = ii(), Yr(e, oe, n), M !== null && (M.f & te) !== 0 && (M.f & (Ue | Et)) === 0 && (Ae === null ? Uo([e]) : Ae.push(e)), !s.is_fork && Ns.size > 0 && !$r && Mo();
  }
  return t;
}
function Mo() {
  $r = !1;
  for (const e of Ns)
    (e.f & te) !== 0 && J(e, et), zn(e) && un(e);
  Ns.clear();
}
function An(e) {
  b(e, e.v + 1);
}
function Yr(e, t, n) {
  var s = e.reactions;
  if (s !== null)
    for (var r = s.length, i = 0; i < r; i++) {
      var c = s[i], f = c.f, o = (f & oe) === 0;
      if (o && J(c, t), (f & ae) !== 0) {
        var u = (
          /** @type {Derived} */
          c
        );
        He?.delete(u), (f & Vt) === 0 && (f & Le && (M === null || (M.f & ns) === 0) && (c.f |= Vt), Yr(u, et, n));
      } else if (o) {
        var d = (
          /** @type {Effect} */
          c
        );
        (f & Ze) !== 0 && rt !== null && rt.add(d), n !== null ? n.push(d) : js(d);
      }
    }
}
function Je(e) {
  if (typeof e != "object" || e === null || Gn in e)
    return e;
  const t = yr(e);
  if (t !== Ii && t !== Di)
    return e;
  var n = /* @__PURE__ */ new Map(), s = xr(e), r = /* @__PURE__ */ I(0), i = Ut, c = (f) => {
    if (Ut === i)
      return f();
    var o = P, u = Ut;
    Oe(null), vr(i);
    var d = f();
    return Oe(o), vr(u), d;
  };
  return s && n.set("length", /* @__PURE__ */ I(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(f, o, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && Gi();
        var d = n.get(o);
        return d === void 0 ? c(() => {
          var w = /* @__PURE__ */ I(u.value);
          return n.set(o, w), w;
        }) : b(d, u.value, !0), !0;
      },
      deleteProperty(f, o) {
        var u = n.get(o);
        if (u === void 0) {
          if (o in f) {
            const d = c(() => /* @__PURE__ */ I(re));
            n.set(o, d), An(r);
          }
        } else
          b(u, re), An(r);
        return !0;
      },
      get(f, o, u) {
        if (o === Gn)
          return e;
        var d = n.get(o), w = o in f;
        if (d === void 0 && (!w || Sn(f, o)?.writable) && (d = c(() => {
          var g = Je(w ? f[o] : re), _ = /* @__PURE__ */ I(g);
          return _;
        }), n.set(o, d)), d !== void 0) {
          var p = l(d);
          return p === re ? void 0 : p;
        }
        return Reflect.get(f, o, u);
      },
      getOwnPropertyDescriptor(f, o) {
        var u = Reflect.getOwnPropertyDescriptor(f, o);
        if (u && "value" in u) {
          var d = n.get(o);
          d && (u.value = l(d));
        } else if (u === void 0) {
          var w = n.get(o), p = w?.v;
          if (w !== void 0 && p !== re)
            return {
              enumerable: !0,
              configurable: !0,
              value: p,
              writable: !0
            };
        }
        return u;
      },
      has(f, o) {
        if (o === Gn)
          return !0;
        var u = n.get(o), d = u !== void 0 && u.v !== re || Reflect.has(f, o);
        if (u !== void 0 || M !== null && (!d || Sn(f, o)?.writable)) {
          u === void 0 && (u = c(() => {
            var p = d ? Je(f[o]) : re, g = /* @__PURE__ */ I(p);
            return g;
          }), n.set(o, u));
          var w = l(u);
          if (w === re)
            return !1;
        }
        return d;
      },
      set(f, o, u, d) {
        var w = n.get(o), p = o in f;
        if (s && o === "length")
          for (var g = u; g < /** @type {Source<number>} */
          w.v; g += 1) {
            var _ = n.get(g + "");
            _ !== void 0 ? b(_, re) : g in f && (_ = c(() => /* @__PURE__ */ I(re)), n.set(g + "", _));
          }
        if (w === void 0)
          (!p || Sn(f, o)?.writable) && (w = c(() => /* @__PURE__ */ I(void 0)), b(w, Je(u)), n.set(o, w));
        else {
          p = w.v !== re;
          var S = c(() => Je(u));
          b(w, S);
        }
        var v = Reflect.getOwnPropertyDescriptor(f, o);
        if (v?.set && v.set.call(d, u), !p) {
          if (s && typeof o == "string") {
            var y = (
              /** @type {Source<number>} */
              n.get("length")
            ), U = Number(o);
            Number.isInteger(U) && U >= y.v && b(y, U + 1);
          }
          An(r);
        }
        return !0;
      },
      ownKeys(f) {
        l(r);
        var o = Reflect.ownKeys(f).filter((w) => {
          var p = n.get(w);
          return p === void 0 || p.v !== re;
        });
        for (var [u, d] of n)
          d.v !== re && !(u in f) && o.push(u);
        return o;
      },
      setPrototypeOf() {
        Wi();
      }
    }
  );
}
var fr, Gr, Wr, Kr;
function No() {
  if (fr === void 0) {
    fr = window, Gr = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    Wr = Sn(t, "firstChild").get, Kr = Sn(t, "nextSibling").get, ar(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), ar(n) && (n.__t = void 0);
  }
}
function ft(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function Qe(e) {
  return (
    /** @type {TemplateNode | null} */
    Wr.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function Rn(e) {
  return (
    /** @type {TemplateNode | null} */
    Kr.call(e)
  );
}
function x(e, t) {
  return /* @__PURE__ */ Qe(e);
}
function xn(e, t = !1) {
  {
    var n = /* @__PURE__ */ Qe(e);
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ Rn(n) : n;
  }
}
function O(e, t = 1, n = !1) {
  let s = e;
  for (; t--; )
    s = /** @type {TemplateNode} */
    /* @__PURE__ */ Rn(s);
  return s;
}
function Po(e) {
  e.textContent = "";
}
function Jr() {
  return !1;
}
function Fs(e, t, n) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElementNS(t ?? Ar, e, void 0)
  );
}
let ur = !1;
function Lo() {
  ur || (ur = !0, document.addEventListener(
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
function Us(e) {
  var t = P, n = M;
  Oe(null), tt(null);
  try {
    return e();
  } finally {
    Oe(t), tt(n);
  }
}
function Io(e, t, n, s = n) {
  e.addEventListener(t, () => Us(n));
  const r = e.__on_r;
  r ? e.__on_r = () => {
    r(), s(!0);
  } : e.__on_r = () => s(!0), Lo();
}
function Do(e) {
  M === null && (P === null && $i(), qi()), St && Bi();
}
function Oo(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function ut(e, t) {
  var n = M;
  n !== null && (n.f & de) !== 0 && (e |= de);
  var s = {
    ctx: _e,
    deps: null,
    nodes: null,
    f: e | oe | Le,
    first: null,
    fn: t,
    last: null,
    next: null,
    parent: n,
    b: n && n.b,
    prev: null,
    teardown: null,
    wv: 0,
    ac: null
  };
  A?.register_created_effect(s);
  var r = s;
  if ((e & an) !== 0)
    Zt !== null ? Zt.push(s) : Bt.ensure().schedule(s);
  else if (t !== null) {
    try {
      un(s);
    } catch (c) {
      throw be(s), c;
    }
    r.deps === null && r.teardown === null && r.nodes === null && r.first === r.last && // either `null`, or a singular child
    (r.f & dn) === 0 && (r = r.first, (e & Ze) !== 0 && (e & ln) !== 0 && r !== null && (r.f |= ln));
  }
  if (r !== null && (r.parent = n, n !== null && Oo(r, n), P !== null && (P.f & ae) !== 0 && (e & Et) === 0)) {
    var i = (
      /** @type {Derived} */
      P
    );
    (i.effects ?? (i.effects = [])).push(r);
  }
  return s;
}
function Vs() {
  return P !== null && !Fe;
}
function Ro(e) {
  const t = ut(ls, null);
  return J(t, te), t.teardown = e, t;
}
function es(e) {
  Do();
  var t = (
    /** @type {Effect} */
    M.f
  ), n = !P && (t & Ue) !== 0 && (t & Yt) === 0;
  if (n) {
    var s = (
      /** @type {ComponentContext} */
      _e
    );
    (s.e ?? (s.e = [])).push(e);
  } else
    return Xr(e);
}
function Xr(e) {
  return ut(an | ji, e);
}
function zo(e) {
  Bt.ensure();
  const t = ut(Et | dn, e);
  return (n = {}) => new Promise((s) => {
    n.outro ? Ft(t, () => {
      be(t), s(void 0);
    }) : (be(t), s(void 0));
  });
}
function Qr(e) {
  return ut(an, e);
}
function jo(e) {
  return ut(Cn | dn, e);
}
function Bs(e, t = 0) {
  return ut(ls | t, e);
}
function we(e, t = [], n = [], s = []) {
  xo(s, t, n, (r) => {
    ut(ls, () => e(...r.map(l)));
  });
}
function qs(e, t = 0) {
  var n = ut(Ze | t, e);
  return n;
}
function Pe(e) {
  return ut(Ue | dn, e);
}
function Zr(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = St, s = P;
    dr(!0), Oe(null);
    try {
      t.call(null);
    } finally {
      dr(n), Oe(s);
    }
  }
}
function $s(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const r = n.ac;
    r !== null && Us(() => {
      r.abort(it);
    });
    var s = n.next;
    (n.f & Et) !== 0 ? n.parent = null : be(n, t), n = s;
  }
}
function Ho(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & Ue) === 0 && be(t), t = n;
  }
}
function be(e, t = !0) {
  var n = !1;
  (t || (e.f & zi) !== 0) && e.nodes !== null && e.nodes.end !== null && (ei(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), n = !0), J(e, ys), $s(e, t && !n), Mn(e, 0);
  var s = e.nodes && e.nodes.t;
  if (s !== null)
    for (const i of s)
      i.stop();
  Zr(e), e.f ^= ys, e.f |= Ie;
  var r = e.parent;
  r !== null && r.first !== null && ti(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function ei(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : /* @__PURE__ */ Rn(e);
    e.remove(), e = n;
  }
}
function ti(e) {
  var t = e.parent, n = e.prev, s = e.next;
  n !== null && (n.next = s), s !== null && (s.prev = n), t !== null && (t.first === e && (t.first = s), t.last === e && (t.last = n));
}
function Ft(e, t, n = !0) {
  var s = [];
  ni(e, s, !0);
  var r = () => {
    n && be(e), t && t();
  }, i = s.length;
  if (i > 0) {
    var c = () => --i || r();
    for (var f of s)
      f.out(c);
  } else
    r();
}
function ni(e, t, n) {
  if ((e.f & de) === 0) {
    e.f ^= de;
    var s = e.nodes && e.nodes.t;
    if (s !== null)
      for (const f of s)
        (f.is_global || n) && t.push(f);
    for (var r = e.first; r !== null; ) {
      var i = r.next;
      if ((r.f & Et) === 0) {
        var c = (r.f & ln) !== 0 || // If this is a branch effect without a block effect parent,
        // it means the parent block effect was pruned. In that case,
        // transparency information was transferred to the branch effect.
        (r.f & Ue) !== 0 && (e.f & Ze) !== 0;
        ni(r, t, c ? n : !1);
      }
      r = i;
    }
  }
}
function Ys(e) {
  si(e, !0);
}
function si(e, t) {
  if ((e.f & de) !== 0) {
    e.f ^= de, (e.f & te) === 0 && (J(e, oe), Bt.ensure().schedule(e));
    for (var n = e.first; n !== null; ) {
      var s = n.next, r = (n.f & ln) !== 0 || (n.f & Ue) !== 0;
      si(n, r ? t : !1), n = s;
    }
    var i = e.nodes && e.nodes.t;
    if (i !== null)
      for (const c of i)
        (c.is_global || t) && c.in();
  }
}
function Gs(e, t) {
  if (e.nodes)
    for (var n = e.nodes.start, s = e.nodes.end; n !== null; ) {
      var r = n === s ? null : /* @__PURE__ */ Rn(n);
      t.append(n), n = r;
    }
}
let ts = !1, St = !1;
function dr(e) {
  St = e;
}
let P = null, Fe = !1;
function Oe(e) {
  P = e;
}
let M = null;
function tt(e) {
  M = e;
}
let De = null;
function Fo(e) {
  P !== null && (De === null ? De = [e] : De.push(e));
}
let ge = null, me = 0, Ae = null;
function Uo(e) {
  Ae = e;
}
let ri = 1, Pt = 0, Ut = Pt;
function vr(e) {
  Ut = e;
}
function ii() {
  return ++ri;
}
function zn(e) {
  var t = e.f;
  if ((t & oe) !== 0)
    return !0;
  if (t & ae && (e.f &= ~Vt), (t & et) !== 0) {
    for (var n = (
      /** @type {Value[]} */
      e.deps
    ), s = n.length, r = 0; r < s; r++) {
      var i = n[r];
      if (zn(
        /** @type {Derived} */
        i
      ) && Br(
        /** @type {Derived} */
        i
      ), i.wv > e.wv)
        return !0;
    }
    (t & Le) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    He === null && J(e, te);
  }
  return !1;
}
function oi(e, t, n = !0) {
  var s = e.reactions;
  if (s !== null && !(De !== null && on.call(De, e)))
    for (var r = 0; r < s.length; r++) {
      var i = s[r];
      (i.f & ae) !== 0 ? oi(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (n ? J(i, oe) : (i.f & te) !== 0 && J(i, et), js(
        /** @type {Effect} */
        i
      ));
    }
}
function ai(e) {
  var S;
  var t = ge, n = me, s = Ae, r = P, i = De, c = _e, f = Fe, o = Ut, u = e.f;
  ge = /** @type {null | Value[]} */
  null, me = 0, Ae = null, P = (u & (Ue | Et)) === 0 ? e : null, De = null, cn(e.ctx), Fe = !1, Ut = ++Pt, e.ac !== null && (Us(() => {
    e.ac.abort(it);
  }), e.ac = null);
  try {
    e.f |= ns;
    var d = (
      /** @type {Function} */
      e.fn
    ), w = d();
    e.f |= Yt;
    var p = e.deps, g = A?.is_fork;
    if (ge !== null) {
      var _;
      if (g || Mn(e, me), p !== null && me > 0)
        for (p.length = me + ge.length, _ = 0; _ < ge.length; _++)
          p[me + _] = ge[_];
      else
        e.deps = p = ge;
      if (Vs() && (e.f & Le) !== 0)
        for (_ = me; _ < p.length; _++)
          ((S = p[_]).reactions ?? (S.reactions = [])).push(e);
    } else !g && p !== null && me < p.length && (Mn(e, me), p.length = me);
    if (Lr() && Ae !== null && !Fe && p !== null && (e.f & (ae | et | oe)) === 0)
      for (_ = 0; _ < /** @type {Source[]} */
      Ae.length; _++)
        oi(
          Ae[_],
          /** @type {Effect} */
          e
        );
    if (r !== null && r !== e) {
      if (Pt++, r.deps !== null)
        for (let v = 0; v < n; v += 1)
          r.deps[v].rv = Pt;
      if (t !== null)
        for (const v of t)
          v.rv = Pt;
      Ae !== null && (s === null ? s = Ae : s.push(.../** @type {Source[]} */
      Ae));
    }
    return (e.f & yt) !== 0 && (e.f ^= yt), w;
  } catch (v) {
    return Dr(v);
  } finally {
    e.f ^= ns, ge = t, me = n, Ae = s, P = r, De = i, cn(c), Fe = f, Ut = o;
  }
}
function Vo(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var s = Ni.call(n, e);
    if (s !== -1) {
      var r = n.length - 1;
      r === 0 ? n = t.reactions = null : (n[s] = n[r], n.pop());
    }
  }
  if (n === null && (t.f & ae) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (ge === null || !on.call(ge, t))) {
    var i = (
      /** @type {Derived} */
      t
    );
    (i.f & Le) !== 0 && (i.f ^= Le, i.f &= ~Vt), i.v !== re && Rs(i), Ao(i), Mn(i, 0);
  }
}
function Mn(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var s = t; s < n.length; s++)
      Vo(e, n[s]);
}
function un(e) {
  var t = e.f;
  if ((t & Ie) === 0) {
    J(e, te);
    var n = M, s = ts;
    M = e, ts = !0;
    try {
      (t & (Ze | Sr)) !== 0 ? Ho(e) : $s(e), Zr(e);
      var r = ai(e);
      e.teardown = typeof r == "function" ? r : null, e.wv = ri;
      var i;
    } finally {
      ts = s, M = n;
    }
  }
}
async function Ps() {
  await Promise.resolve(), vo();
}
function l(e) {
  var t = e.f, n = (t & ae) !== 0;
  if (P !== null && !Fe) {
    var s = M !== null && (M.f & Ie) !== 0;
    if (!s && (De === null || !on.call(De, e))) {
      var r = P.deps;
      if ((P.f & ns) !== 0)
        e.rv < Pt && (e.rv = Pt, ge === null && r !== null && r[me] === e ? me++ : ge === null ? ge = [e] : ge.push(e));
      else {
        (P.deps ?? (P.deps = [])).push(e);
        var i = e.reactions;
        i === null ? e.reactions = [P] : on.call(i, P) || i.push(P);
      }
    }
  }
  if (St && Ht.has(e))
    return Ht.get(e);
  if (n) {
    var c = (
      /** @type {Derived} */
      e
    );
    if (St) {
      var f = c.v;
      return ((c.f & te) === 0 && c.reactions !== null || ci(c)) && (f = Hs(c)), Ht.set(c, f), f;
    }
    var o = (c.f & Le) === 0 && !Fe && P !== null && (ts || (P.f & Le) !== 0), u = (c.f & Yt) === 0;
    zn(c) && (o && (c.f |= Le), Br(c)), o && !u && (qr(c), li(c));
  }
  if (He?.has(e))
    return He.get(e);
  if ((e.f & yt) !== 0)
    throw e.v;
  return e.v;
}
function li(e) {
  if (e.f |= Le, e.deps !== null)
    for (const t of e.deps)
      (t.reactions ?? (t.reactions = [])).push(e), (t.f & ae) !== 0 && (t.f & Le) === 0 && (qr(
        /** @type {Derived} */
        t
      ), li(
        /** @type {Derived} */
        t
      ));
}
function ci(e) {
  if (e.v === re) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (Ht.has(t) || (t.f & ae) !== 0 && ci(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function cs(e) {
  var t = Fe;
  try {
    return Fe = !0, e();
  } finally {
    Fe = t;
  }
}
const Bo = ["touchstart", "touchmove"];
function qo(e) {
  return Bo.includes(e);
}
const Lt = Symbol("events"), fi = /* @__PURE__ */ new Set(), Ls = /* @__PURE__ */ new Set();
function ee(e, t, n) {
  (t[Lt] ?? (t[Lt] = {}))[e] = n;
}
function $o(e) {
  for (var t = 0; t < e.length; t++)
    fi.add(e[t]);
  for (var n of Ls)
    n(e);
}
let pr = null;
function hr(e) {
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), s = e.type, r = e.composedPath?.() || [], i = (
    /** @type {null | Element} */
    r[0] || e.target
  );
  pr = e;
  var c = 0, f = pr === e && e[Lt];
  if (f) {
    var o = r.indexOf(f);
    if (o !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e[Lt] = t;
      return;
    }
    var u = r.indexOf(t);
    if (u === -1)
      return;
    o <= u && (c = o);
  }
  if (i = /** @type {Element} */
  r[c] || e.target, i !== t) {
    Pi(e, "currentTarget", {
      configurable: !0,
      get() {
        return i || n;
      }
    });
    var d = P, w = M;
    Oe(null), tt(null);
    try {
      for (var p, g = []; i !== null; ) {
        var _ = i.assignedSlot || i.parentNode || /** @type {any} */
        i.host || null;
        try {
          var S = i[Lt]?.[s];
          S != null && (!/** @type {any} */
          i.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === i) && S.call(i, e);
        } catch (v) {
          p ? g.push(v) : p = v;
        }
        if (e.cancelBubble || _ === t || _ === null)
          break;
        i = _;
      }
      if (p) {
        for (let v of g)
          queueMicrotask(() => {
            throw v;
          });
        throw p;
      }
    } finally {
      e[Lt] = t, delete e.currentTarget, Oe(d), tt(w);
    }
  }
}
const Yo = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (e) => e
  })
);
function Go(e) {
  return (
    /** @type {string} */
    Yo?.createHTML(e) ?? e
  );
}
function ui(e) {
  var t = Fs("template");
  return t.innerHTML = Go(e.replaceAll("<!>", "<!---->")), t.content;
}
function $t(e, t) {
  var n = (
    /** @type {Effect} */
    M
  );
  n.nodes === null && (n.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function F(e, t) {
  var n = (t & to) !== 0, s = (t & no) !== 0, r, i = !e.startsWith("<!>");
  return () => {
    r === void 0 && (r = ui(i ? e : "<!>" + e), n || (r = /** @type {TemplateNode} */
    /* @__PURE__ */ Qe(r)));
    var c = (
      /** @type {TemplateNode} */
      s || Gr ? document.importNode(r, !0) : r.cloneNode(!0)
    );
    if (n) {
      var f = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Qe(c)
      ), o = (
        /** @type {TemplateNode} */
        c.lastChild
      );
      $t(f, o);
    } else
      $t(c, c);
    return c;
  };
}
// @__NO_SIDE_EFFECTS__
function Wo(e, t, n = "svg") {
  var s = !e.startsWith("<!>"), r = `<${n}>${s ? e : "<!>" + e}</${n}>`, i;
  return () => {
    if (!i) {
      var c = (
        /** @type {DocumentFragment} */
        ui(r)
      ), f = (
        /** @type {Element} */
        /* @__PURE__ */ Qe(c)
      );
      i = /** @type {Element} */
      /* @__PURE__ */ Qe(f);
    }
    var o = (
      /** @type {TemplateNode} */
      i.cloneNode(!0)
    );
    return $t(o, o), o;
  };
}
// @__NO_SIDE_EFFECTS__
function vn(e, t) {
  return /* @__PURE__ */ Wo(e, t, "svg");
}
function Kt(e = "") {
  {
    var t = ft(e + "");
    return $t(t, t), t;
  }
}
function $n() {
  var e = document.createDocumentFragment(), t = document.createComment(""), n = ft();
  return e.append(t, n), $t(t, n), e;
}
function E(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function Te(e, t) {
  var n = t == null ? "" : typeof t == "object" ? `${t}` : t;
  n !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = n, e.nodeValue = `${n}`);
}
function Ko(e, t) {
  return Jo(e, t);
}
const Yn = /* @__PURE__ */ new Map();
function Jo(e, { target: t, anchor: n, props: s = {}, events: r, context: i, intro: c = !0, transformError: f }) {
  No();
  var o = void 0, u = zo(() => {
    var d = n ?? t.appendChild(ft());
    bo(
      /** @type {TemplateNode} */
      d,
      {
        pending: () => {
        }
      },
      (g) => {
        Nr({});
        var _ = (
          /** @type {ComponentContext} */
          _e
        );
        i && (_.c = i), r && (s.$$events = r), o = e(g, s) || {}, Pr();
      },
      f
    );
    var w = /* @__PURE__ */ new Set(), p = (g) => {
      for (var _ = 0; _ < g.length; _++) {
        var S = g[_];
        if (!w.has(S)) {
          w.add(S);
          var v = qo(S);
          for (const z of [t, document]) {
            var y = Yn.get(z);
            y === void 0 && (y = /* @__PURE__ */ new Map(), Yn.set(z, y));
            var U = y.get(S);
            U === void 0 ? (z.addEventListener(S, hr, { passive: v }), y.set(S, 1)) : y.set(S, U + 1);
          }
        }
      }
    };
    return p(as(fi)), Ls.add(p), () => {
      for (var g of w)
        for (const v of [t, document]) {
          var _ = (
            /** @type {Map<string, number>} */
            Yn.get(v)
          ), S = (
            /** @type {number} */
            _.get(g)
          );
          --S == 0 ? (v.removeEventListener(g, hr), _.delete(g), _.size === 0 && Yn.delete(v)) : _.set(g, S);
        }
      Ls.delete(p), d !== n && d.parentNode?.removeChild(d);
    };
  });
  return Is.set(o, u), o;
}
let Is = /* @__PURE__ */ new WeakMap();
function Xo(e, t) {
  const n = Is.get(e);
  return n ? (Is.delete(e), n(t)) : Promise.resolve();
}
var je, Ke, Ee, zt, Dn, On, os;
class Qo {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, n = !0) {
    /** @type {TemplateNode} */
    ze(this, "anchor");
    /** @type {Map<Batch, Key>} */
    T(this, je, /* @__PURE__ */ new Map());
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
    T(this, Ke, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    T(this, Ee, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    T(this, zt, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    T(this, Dn, !0);
    /**
     * @param {Batch} batch
     */
    T(this, On, (t) => {
      if (a(this, je).has(t)) {
        var n = (
          /** @type {Key} */
          a(this, je).get(t)
        ), s = a(this, Ke).get(n);
        if (s)
          Ys(s), a(this, zt).delete(n);
        else {
          var r = a(this, Ee).get(n);
          r && (a(this, Ke).set(n, r.effect), a(this, Ee).delete(n), r.fragment.lastChild.remove(), this.anchor.before(r.fragment), s = r.effect);
        }
        for (const [i, c] of a(this, je)) {
          if (a(this, je).delete(i), i === t)
            break;
          const f = a(this, Ee).get(c);
          f && (be(f.effect), a(this, Ee).delete(c));
        }
        for (const [i, c] of a(this, Ke)) {
          if (i === n || a(this, zt).has(i)) continue;
          const f = () => {
            if (Array.from(a(this, je).values()).includes(i)) {
              var u = document.createDocumentFragment();
              Gs(c, u), u.append(ft()), a(this, Ee).set(i, { effect: c, fragment: u });
            } else
              be(c);
            a(this, zt).delete(i), a(this, Ke).delete(i);
          };
          a(this, Dn) || !s ? (a(this, zt).add(i), Ft(c, f, !1)) : f();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    T(this, os, (t) => {
      a(this, je).delete(t);
      const n = Array.from(a(this, je).values());
      for (const [s, r] of a(this, Ee))
        n.includes(s) || (be(r.effect), a(this, Ee).delete(s));
    });
    this.anchor = t, C(this, Dn, n);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, n) {
    var s = (
      /** @type {Batch} */
      A
    ), r = Jr();
    if (n && !a(this, Ke).has(t) && !a(this, Ee).has(t))
      if (r) {
        var i = document.createDocumentFragment(), c = ft();
        i.append(c), a(this, Ee).set(t, {
          effect: Pe(() => n(c)),
          fragment: i
        });
      } else
        a(this, Ke).set(
          t,
          Pe(() => n(this.anchor))
        );
    if (a(this, je).set(s, t), r) {
      for (const [f, o] of a(this, Ke))
        f === t ? s.unskip_effect(o) : s.skip_effect(o);
      for (const [f, o] of a(this, Ee))
        f === t ? s.unskip_effect(o.effect) : s.skip_effect(o.effect);
      s.oncommit(a(this, On)), s.ondiscard(a(this, os));
    } else
      a(this, On).call(this, s);
  }
}
je = new WeakMap(), Ke = new WeakMap(), Ee = new WeakMap(), zt = new WeakMap(), Dn = new WeakMap(), On = new WeakMap(), os = new WeakMap();
function Q(e, t, n = !1) {
  var s = new Qo(e), r = n ? ln : 0;
  function i(c, f) {
    s.ensure(c, f);
  }
  qs(() => {
    var c = !1;
    t((f, o = 0) => {
      c = !0, i(o, f);
    }), c || i(-1, null);
  }, r);
}
function Jt(e, t) {
  return t;
}
function Zo(e, t, n) {
  for (var s = [], r = t.length, i, c = t.length, f = 0; f < r; f++) {
    let w = t[f];
    Ft(
      w,
      () => {
        if (i) {
          if (i.pending.delete(w), i.done.add(w), i.pending.size === 0) {
            var p = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            Ds(e, as(i.done)), p.delete(i), p.size === 0 && (e.outrogroups = null);
          }
        } else
          c -= 1;
      },
      !1
    );
  }
  if (c === 0) {
    var o = s.length === 0 && n !== null;
    if (o) {
      var u = (
        /** @type {Element} */
        n
      ), d = (
        /** @type {Element} */
        u.parentNode
      );
      Po(d), d.append(u), e.items.clear();
    }
    Ds(e, t, !o);
  } else
    i = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ?? (e.outrogroups = /* @__PURE__ */ new Set())).add(i);
}
function Ds(e, t, n = !0) {
  var s;
  if (e.pending.size > 0) {
    s = /* @__PURE__ */ new Set();
    for (const c of e.pending.values())
      for (const f of c)
        s.add(
          /** @type {EachItem} */
          e.items.get(f).e
        );
  }
  for (var r = 0; r < t.length; r++) {
    var i = t[r];
    if (s?.has(i)) {
      i.f |= Xe;
      const c = document.createDocumentFragment();
      Gs(i, c);
    } else
      be(t[r], n);
  }
}
var gr;
function Xt(e, t, n, s, r, i = null) {
  var c = e, f = /* @__PURE__ */ new Map(), o = (t & Tr) !== 0;
  if (o) {
    var u = (
      /** @type {Element} */
      e
    );
    c = u.appendChild(ft());
  }
  var d = null, w = /* @__PURE__ */ So(() => {
    var z = n();
    return xr(z) ? z : z == null ? [] : as(z);
  }), p, g = /* @__PURE__ */ new Map(), _ = !0;
  function S(z) {
    (U.effect.f & Ie) === 0 && (U.pending.delete(z), U.fallback = d, ea(U, p, c, t, s), d !== null && (p.length === 0 ? (d.f & Xe) === 0 ? Ys(d) : (d.f ^= Xe, En(d, null, c)) : Ft(d, () => {
      d = null;
    })));
  }
  function v(z) {
    U.pending.delete(z);
  }
  var y = qs(() => {
    p = /** @type {V[]} */
    l(w);
    for (var z = p.length, ne = /* @__PURE__ */ new Set(), le = (
      /** @type {Batch} */
      A
    ), dt = Jr(), ce = 0; ce < z; ce += 1) {
      var nt = p[ce], vt = s(nt, ce), q = _ ? null : f.get(vt);
      q ? (q.v && fn(q.v, nt), q.i && fn(q.i, ce), dt && le.unskip_effect(q.e)) : (q = ta(
        f,
        _ ? c : gr ?? (gr = ft()),
        nt,
        vt,
        ce,
        r,
        t,
        n
      ), _ || (q.e.f |= Xe), f.set(vt, q)), ne.add(vt);
    }
    if (z === 0 && i && !d && (_ ? d = Pe(() => i(c)) : (d = Pe(() => i(gr ?? (gr = ft()))), d.f |= Xe)), z > ne.size && Vi(), !_)
      if (g.set(le, ne), dt) {
        for (const [jn, Hn] of f)
          ne.has(jn) || le.skip_effect(Hn.e);
        le.oncommit(S), le.ondiscard(v);
      } else
        S(le);
    l(w);
  }), U = { effect: y, items: f, pending: g, outrogroups: null, fallback: d };
  _ = !1;
}
function yn(e) {
  for (; e !== null && (e.f & Ue) === 0; )
    e = e.next;
  return e;
}
function ea(e, t, n, s, r) {
  var i = (s & Zi) !== 0, c = t.length, f = e.items, o = yn(e.effect.first), u, d = null, w, p = [], g = [], _, S, v, y;
  if (i)
    for (y = 0; y < c; y += 1)
      _ = t[y], S = r(_, y), v = /** @type {EachItem} */
      f.get(S).e, (v.f & Xe) === 0 && (v.nodes?.a?.measure(), (w ?? (w = /* @__PURE__ */ new Set())).add(v));
  for (y = 0; y < c; y += 1) {
    if (_ = t[y], S = r(_, y), v = /** @type {EachItem} */
    f.get(S).e, e.outrogroups !== null)
      for (const q of e.outrogroups)
        q.pending.delete(v), q.done.delete(v);
    if ((v.f & de) !== 0 && (Ys(v), i && (v.nodes?.a?.unfix(), (w ?? (w = /* @__PURE__ */ new Set())).delete(v))), (v.f & Xe) !== 0)
      if (v.f ^= Xe, v === o)
        En(v, null, n);
      else {
        var U = d ? d.next : o;
        v === e.effect.last && (e.effect.last = v.prev), v.prev && (v.prev.next = v.next), v.next && (v.next.prev = v.prev), kt(e, d, v), kt(e, v, U), En(v, U, n), d = v, p = [], g = [], o = yn(d.next);
        continue;
      }
    if (v !== o) {
      if (u !== void 0 && u.has(v)) {
        if (p.length < g.length) {
          var z = g[0], ne;
          d = z.prev;
          var le = p[0], dt = p[p.length - 1];
          for (ne = 0; ne < p.length; ne += 1)
            En(p[ne], z, n);
          for (ne = 0; ne < g.length; ne += 1)
            u.delete(g[ne]);
          kt(e, le.prev, dt.next), kt(e, d, le), kt(e, dt, z), o = z, d = dt, y -= 1, p = [], g = [];
        } else
          u.delete(v), En(v, o, n), kt(e, v.prev, v.next), kt(e, v, d === null ? e.effect.first : d.next), kt(e, d, v), d = v;
        continue;
      }
      for (p = [], g = []; o !== null && o !== v; )
        (u ?? (u = /* @__PURE__ */ new Set())).add(o), g.push(o), o = yn(o.next);
      if (o === null)
        continue;
    }
    (v.f & Xe) === 0 && p.push(v), d = v, o = yn(v.next);
  }
  if (e.outrogroups !== null) {
    for (const q of e.outrogroups)
      q.pending.size === 0 && (Ds(e, as(q.done)), e.outrogroups?.delete(q));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (o !== null || u !== void 0) {
    var ce = [];
    if (u !== void 0)
      for (v of u)
        (v.f & de) === 0 && ce.push(v);
    for (; o !== null; )
      (o.f & de) === 0 && o !== e.fallback && ce.push(o), o = yn(o.next);
    var nt = ce.length;
    if (nt > 0) {
      var vt = (s & Tr) !== 0 && c === 0 ? n : null;
      if (i) {
        for (y = 0; y < nt; y += 1)
          ce[y].nodes?.a?.measure();
        for (y = 0; y < nt; y += 1)
          ce[y].nodes?.a?.fix();
      }
      Zo(e, ce, vt);
    }
  }
  i && jt(() => {
    if (w !== void 0)
      for (v of w)
        v.nodes?.a?.apply();
  });
}
function ta(e, t, n, s, r, i, c, f) {
  var o = (c & Xi) !== 0 ? (c & eo) === 0 ? /* @__PURE__ */ Co(n, !1, !1) : qt(n) : null, u = (c & Qi) !== 0 ? qt(r) : null;
  return {
    v: o,
    i: u,
    e: Pe(() => (i(t, o ?? n, u ?? r, f), () => {
      e.delete(s);
    }))
  };
}
function En(e, t, n) {
  if (e.nodes)
    for (var s = e.nodes.start, r = e.nodes.end, i = t && (t.f & Xe) === 0 ? (
      /** @type {EffectNodes} */
      t.nodes.start
    ) : n; s !== null; ) {
      var c = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Rn(s)
      );
      if (i.before(s), s === r)
        return;
      s = c;
    }
}
function kt(e, t, n) {
  t === null ? e.effect.first = n : t.next = n, n === null ? e.effect.last = t : n.prev = t;
}
function na(e, t, n = !1, s = !1, r = !1, i = !1) {
  var c = e, f = "";
  if (n)
    var o = (
      /** @type {Element} */
      e
    );
  we(() => {
    var u = (
      /** @type {Effect} */
      M
    );
    if (f !== (f = t() ?? "")) {
      if (n) {
        u.nodes = null, o.innerHTML = /** @type {string} */
        f, f !== "" && $t(
          /** @type {TemplateNode} */
          /* @__PURE__ */ Qe(o),
          /** @type {TemplateNode} */
          o.lastChild
        );
        return;
      }
      if (u.nodes !== null && (ei(
        u.nodes.start,
        /** @type {TemplateNode} */
        u.nodes.end
      ), u.nodes = null), f !== "") {
        var d = s ? so : r ? ro : void 0, w = (
          /** @type {HTMLTemplateElement | SVGElement | MathMLElement} */
          Fs(s ? "svg" : r ? "math" : "template", d)
        );
        w.innerHTML = /** @type {any} */
        f;
        var p = s || r ? w : (
          /** @type {HTMLTemplateElement} */
          w.content
        );
        if ($t(
          /** @type {TemplateNode} */
          /* @__PURE__ */ Qe(p),
          /** @type {TemplateNode} */
          p.lastChild
        ), s || r)
          for (; /* @__PURE__ */ Qe(p); )
            c.before(
              /** @type {TemplateNode} */
              /* @__PURE__ */ Qe(p)
            );
        else
          c.before(p);
      }
    }
  });
}
function sa(e, t) {
  Qr(() => {
    var n = e.getRootNode(), s = (
      /** @type {ShadowRoot} */
      n.host ? (
        /** @type {ShadowRoot} */
        n
      ) : (
        /** @type {Document} */
        n.head ?? /** @type {Document} */
        n.ownerDocument.head
      )
    );
    if (!s.querySelector("#" + t.hash)) {
      const r = Fs("style");
      r.id = t.hash, r.textContent = t.code, s.appendChild(r);
    }
  });
}
function ra(e, t, n) {
  var s = e == null ? "" : "" + e;
  return s = s ? s + " " + t : t, s === "" ? null : s;
}
function ia(e, t) {
  return e == null ? null : String(e);
}
function Qt(e, t, n, s, r, i) {
  var c = e.__className;
  if (c !== n || c === void 0) {
    var f = ra(n, s);
    f == null ? e.removeAttribute("class") : e.className = f, e.__className = n;
  }
  return i;
}
function br(e, t, n, s) {
  var r = e.__style;
  if (r !== t) {
    var i = ia(t);
    i == null ? e.removeAttribute("style") : e.style.cssText = i, e.__style = t;
  }
  return s;
}
const oa = Symbol("is custom element"), aa = Symbol("is html");
function ks(e, t, n, s) {
  var r = la(e);
  r[t] !== (r[t] = n) && (t === "loading" && (e[Hi] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && ca(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function la(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [oa]: e.nodeName.includes("-"),
      [aa]: e.namespaceURI === Ar
    })
  );
}
var _r = /* @__PURE__ */ new Map();
function ca(e) {
  var t = e.getAttribute("is") || e.nodeName, n = _r.get(t);
  if (n) return n;
  _r.set(t, n = []);
  for (var s, r = e, i = Element.prototype; i !== r; ) {
    s = Li(r);
    for (var c in s)
      s[c].set && n.push(c);
    r = yr(r);
  }
  return n;
}
function fa(e, t, n = t) {
  var s = /* @__PURE__ */ new WeakSet();
  Io(e, "input", async (r) => {
    var i = r ? e.defaultValue : e.value;
    if (i = ws(e) ? ms(i) : i, n(i), A !== null && s.add(A), await Ps(), i !== (i = t())) {
      var c = e.selectionStart, f = e.selectionEnd, o = e.value.length;
      if (e.value = i ?? "", f !== null) {
        var u = e.value.length;
        c === f && f === o && u > o ? (e.selectionStart = u, e.selectionEnd = u) : (e.selectionStart = c, e.selectionEnd = Math.min(f, u));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  cs(t) == null && e.value && (n(ws(e) ? ms(e.value) : e.value), A !== null && s.add(A)), Bs(() => {
    var r = t();
    if (e === document.activeElement) {
      var i = (
        /** @type {Batch} */
        A
      );
      if (s.has(i))
        return;
    }
    ws(e) && r === ms(e.value) || e.type === "date" && !r && !e.value || r !== e.value && (e.value = r ?? "");
  });
}
function ws(e) {
  var t = e.type;
  return t === "number" || t === "range";
}
function ms(e) {
  return e === "" ? null : +e;
}
function kr(e, t) {
  return e === t || e?.[Gn] === t;
}
function wr(e = {}, t, n, s) {
  var r = (
    /** @type {ComponentContext} */
    _e.r
  ), i = (
    /** @type {Effect} */
    M
  );
  return Qr(() => {
    var c, f;
    return Bs(() => {
      c = f, f = [], cs(() => {
        e !== n(...f) && (t(e, ...f), c && kr(n(...c), e) && t(null, ...c));
      });
    }), () => {
      let o = i;
      for (; o !== r && o.parent !== null && o.parent.f & ys; )
        o = o.parent;
      const u = () => {
        f && kr(n(...f), e) && t(null, ...f);
      }, d = o.teardown;
      o.teardown = () => {
        u(), d?.();
      };
    };
  }), e;
}
function ua(e) {
  _e === null && Fi(), es(() => {
    const t = cs(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
const da = "5";
var mr;
typeof window < "u" && ((mr = window.__svelte ?? (window.__svelte = {})).v ?? (mr.v = /* @__PURE__ */ new Set())).add(da);
var va = /* @__PURE__ */ F('<button><span class="settings-assistant-emoji svelte-beco3k"> </span> <span class="settings-assistant-name svelte-beco3k"> </span></button>'), pa = /* @__PURE__ */ F('<div class="settings-assistant-grid svelte-beco3k"></div>'), ha = /* @__PURE__ */ F('<p class="settings-section-desc svelte-beco3k">Loading assistants…</p>'), ga = /* @__PURE__ */ F('<div class="settings-history-item svelte-beco3k"><div class="settings-history-body svelte-beco3k"><div class="settings-history-title svelte-beco3k"> </div> <div class="settings-history-meta svelte-beco3k"> </div></div> <button class="settings-history-delete svelte-beco3k" title="Delete"><svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-beco3k"><path d="M3 4h10M6 4V3h4v1M5 4v8h6V4H5z" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" class="svelte-beco3k"></path></svg></button></div>'), ba = /* @__PURE__ */ F('<div class="settings-history-list svelte-beco3k"></div>'), _a = /* @__PURE__ */ F('<p class="settings-section-desc svelte-beco3k"> </p>'), ka = /* @__PURE__ */ F('<section class="settings-section svelte-beco3k"><h2 class="settings-section-title svelte-beco3k">Conversation history</h2> <!> <button class="settings-danger-btn svelte-beco3k"><!></button></section>'), wa = /* @__PURE__ */ F(`<div class="settings-page svelte-beco3k"><h1 class="settings-title svelte-beco3k">AI Assistant — Settings</h1> <section class="settings-section svelte-beco3k"><h2 class="settings-section-title svelte-beco3k">Default assistant</h2> <p class="settings-section-desc svelte-beco3k">Which persona opens when you start a new conversation.</p> <!></section> <section class="settings-section svelte-beco3k"><h2 class="settings-section-title svelte-beco3k">Preferences</h2> <div class="settings-toggle svelte-beco3k"><div class="settings-toggle-info svelte-beco3k"><span class="settings-toggle-label svelte-beco3k">Show suggestion chips</span> <span class="settings-toggle-desc svelte-beco3k">Display quick-reply suggestions after each response.</span></div> <button role="switch" aria-label="Show suggestion chips"></button></div> <div class="settings-toggle svelte-beco3k"><div class="settings-toggle-info svelte-beco3k"><span class="settings-toggle-label svelte-beco3k">Share page context</span> <span class="settings-toggle-desc svelte-beco3k">Send the current page you're viewing as context to the assistant.</span></div> <button role="switch" aria-label="Share page context"></button></div></section> <!> <section class="settings-section svelte-beco3k"><h2 class="settings-section-title svelte-beco3k">About</h2> <div class="settings-about-row svelte-beco3k"><span class="settings-about-label svelte-beco3k">Extension version</span> <span class="settings-about-value svelte-beco3k">1.0.1</span></div> <div class="settings-about-row svelte-beco3k"><span class="settings-about-label svelte-beco3k">API status</span> <span><!></span></div> <button class="settings-link-btn svelte-beco3k">Check again</button></section></div>`), ma = /* @__PURE__ */ F('<div class="chat-toolbar svelte-beco3k"><button class="toolbar-btn svelte-beco3k" title="New conversation"><svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-beco3k"><path d="M10 4v12M4 10h12" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" class="svelte-beco3k"></path></svg> <span class="svelte-beco3k">New chat</span></button> <button title="Conversation history"><svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-beco3k"><circle cx="10" cy="10" r="7.5" stroke="currentColor" stroke-width="1.5" class="svelte-beco3k"></circle><path d="M10 6.5V10l2.5 2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="svelte-beco3k"></path></svg> <span class="svelte-beco3k">History</span></button></div>'), xa = /* @__PURE__ */ F('<button><span class="text-lg svelte-beco3k"> </span> <span class="text-sm font-medium svelte-beco3k"> </span></button>'), ya = /* @__PURE__ */ F('<div class="assistant-selector svelte-beco3k"></div>'), Ea = /* @__PURE__ */ F('<div class="history-loading svelte-beco3k">Loading conversations…</div>'), Sa = /* @__PURE__ */ F('<div class="history-empty svelte-beco3k">No past conversations yet. Start chatting!</div>'), Ta = /* @__PURE__ */ F('<div class="history-item svelte-beco3k" role="button" tabindex="0"><div class="history-item-body svelte-beco3k"><div class="history-title svelte-beco3k"> </div> <div class="history-meta svelte-beco3k"> </div></div> <button class="history-delete svelte-beco3k" title="Delete"><svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-beco3k"><path d="M3 4h10M6 4V3h4v1M5 4v8h6V4H5z" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" class="svelte-beco3k"></path></svg></button></div>'), Aa = /* @__PURE__ */ F('<div class="history-panel svelte-beco3k"><!></div>'), Ca = /* @__PURE__ */ F(`<p class="svelte-beco3k">Welcome back! I'm your AI assistant. Ask me anything about this realm — governance, proposals, codices, or general questions.</p>`), Ma = /* @__PURE__ */ F(`<p class="svelte-beco3k">Hello! I'm the realm's AI assistant. Feel free to ask me about this realm, its governance structure, or anything you'd like to know.</p>`), Na = /* @__PURE__ */ F('<div class="welcome-message svelte-beco3k"><div class="assistant-content markdown-content svelte-beco3k"><!></div></div>'), Pa = /* @__PURE__ */ vn('<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-beco3k"><path d="M3 8l3.5 3.5L13 4.5" stroke="#4f46e5" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" class="svelte-beco3k"></path></svg>'), La = /* @__PURE__ */ vn('<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-beco3k"><rect x="5" y="5" width="9" height="9" rx="1.5" stroke="currentColor" stroke-width="1.3" class="svelte-beco3k"></rect><path d="M11 5V3.5A1.5 1.5 0 0 0 9.5 2h-6A1.5 1.5 0 0 0 2 3.5v6A1.5 1.5 0 0 0 3.5 11H5" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" class="svelte-beco3k"></path></svg>'), Ia = /* @__PURE__ */ F('<div class="message-row user-row svelte-beco3k"><div class="user-message-wrap svelte-beco3k"><button class="copy-btn svelte-beco3k" title="Copy"><!></button> <div class="bubble user-bubble svelte-beco3k"> </div></div></div>'), Da = /* @__PURE__ */ vn('<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-beco3k"><path d="M3 8l3.5 3.5L13 4.5" stroke="#4f46e5" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" class="svelte-beco3k"></path></svg>'), Oa = /* @__PURE__ */ vn('<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-beco3k"><rect x="5" y="5" width="9" height="9" rx="1.5" stroke="currentColor" stroke-width="1.3" class="svelte-beco3k"></rect><path d="M11 5V3.5A1.5 1.5 0 0 0 9.5 2h-6A1.5 1.5 0 0 0 2 3.5v6A1.5 1.5 0 0 0 3.5 11H5" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" class="svelte-beco3k"></path></svg>'), Ra = /* @__PURE__ */ F('<div class="message-row assistant-row svelte-beco3k"><div class="assistant-message-wrap svelte-beco3k"><div class="assistant-content markdown-content svelte-beco3k"></div> <button class="copy-btn copy-btn--assistant svelte-beco3k" title="Copy"><!></button></div></div>'), za = /* @__PURE__ */ F('<div class="message-row assistant-row svelte-beco3k"><div class="assistant-content svelte-beco3k"><div class="typing-animation svelte-beco3k"><span class="svelte-beco3k"></span> <span class="svelte-beco3k"></span> <span class="svelte-beco3k"></span></div></div></div>'), ja = /* @__PURE__ */ F('<div class="error-banner svelte-beco3k"><span class="svelte-beco3k"> </span> <button class="error-dismiss svelte-beco3k" title="Dismiss">&times;</button></div>'), Ha = /* @__PURE__ */ F("<!> <!> <!>", 1), Fa = /* @__PURE__ */ F('<span class="suggestion-loading svelte-beco3k">Loading suggestions...</span>'), Ua = /* @__PURE__ */ F('<button class="suggestion-chip svelte-beco3k"> </button>'), Va = /* @__PURE__ */ F('<div class="suggestions svelte-beco3k"><!></div>'), Ba = /* @__PURE__ */ vn('<svg class="animate-spin h-5 w-5 svelte-beco3k" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25 svelte-beco3k" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75 svelte-beco3k" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path></svg>'), qa = /* @__PURE__ */ vn('<svg class="h-5 w-5 svelte-beco3k" fill="currentColor" viewBox="0 0 20 20"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" class="svelte-beco3k"></path></svg>'), $a = /* @__PURE__ */ F('<div class="llm-chat-root svelte-beco3k"><!> <!> <!> <div class="messages-area svelte-beco3k"><!></div> <div class="input-section svelte-beco3k"><!> <div class="input-row svelte-beco3k"><textarea class="chat-input svelte-beco3k" placeholder="Type a message..." rows="1"></textarea> <button class="send-btn svelte-beco3k" title="Send message (Enter)"><!></button></div></div></div>');
const Ya = {
  hash: "svelte-beco3k",
  code: `.llm-chat-root.svelte-beco3k {display:flex;flex-direction:column;
		/* height is set via inline style driven by visualViewport on mobile;
		   the fallback keeps it correct on desktop */max-height:100%;min-height:300px;overflow:hidden;background:transparent;
		/* Prevent the component itself from scrolling — only messages-area scrolls */overscroll-behavior:none;
		/* Flush to the top of the sidebar panel — no stray gap */margin-top:0;padding-top:0;}

	/* Top toolbar */.chat-toolbar.svelte-beco3k {display:flex;gap:6px;padding:6px 14px;border-bottom:1px solid #e5e7eb;flex-shrink:0;}.toolbar-btn.svelte-beco3k {display:flex;align-items:center;gap:5px;padding:5px 10px;border-radius:8px;border:1px solid #e5e7eb;background:#f9fafb;color:#4b5563;font-size:13px;cursor:pointer;transition:all 0.15s ease;}.toolbar-btn.svelte-beco3k svg:where(.svelte-beco3k) {width:15px;height:15px;flex-shrink:0;}.toolbar-btn.svelte-beco3k:hover {background:#eef2ff;border-color:#c7d2fe;color:#4338ca;}.toolbar-btn.active.svelte-beco3k {background:#eef2ff;border-color:#6366f1;color:#4338ca;}

	/* History panel */.history-panel.svelte-beco3k {flex:1;min-height:0;overflow-y:auto;padding:8px 14px;display:flex;flex-direction:column;gap:4px;}.history-loading.svelte-beco3k,
	.history-empty.svelte-beco3k {padding:24px 0;text-align:center;color:#9ca3af;font-size:13px;}.history-item.svelte-beco3k {display:flex;align-items:center;gap:8px;padding:10px 12px;border-radius:10px;border:1px solid #f3f4f6;background:#fafafa;cursor:pointer;transition:background 0.12s ease, border-color 0.12s ease;}.history-item.svelte-beco3k:hover {background:#eef2ff;border-color:#c7d2fe;}.history-item-body.svelte-beco3k {flex:1;min-width:0;}.history-title.svelte-beco3k {font-size:13px;font-weight:500;color:#1f2937;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}.history-meta.svelte-beco3k {font-size:11px;color:#9ca3af;margin-top:2px;}.history-delete.svelte-beco3k {flex-shrink:0;display:flex;align-items:center;justify-content:center;width:26px;height:26px;border:none;background:transparent;color:#d1d5db;cursor:pointer;border-radius:6px;padding:4px;transition:color 0.15s ease, background 0.15s ease;}.history-delete.svelte-beco3k svg:where(.svelte-beco3k) {width:14px;height:14px;}.history-delete.svelte-beco3k:hover {color:#ef4444;background:#fef2f2;}

	/* Assistant selector */.assistant-selector.svelte-beco3k {display:flex;gap:8px;padding:10px 0;border-bottom:1px solid #e5e7eb;flex-shrink:0;overflow-x:auto;}.assistant-btn.svelte-beco3k {display:flex;align-items:center;gap:6px;padding:6px 12px;border-radius:8px;border:1px solid #e5e7eb;background:#fff;cursor:pointer;transition:all 0.15s ease;white-space:nowrap;}.assistant-btn.svelte-beco3k:hover {background:#f3f4f6;border-color:#d1d5db;}.assistant-btn.active.svelte-beco3k {border-color:#6366f1;background:#eef2ff;color:#4338ca;}

	/* Messages area */.messages-area.svelte-beco3k {flex:1;min-height:0;overflow-y:auto;padding:8px 14px 16px;background:transparent;display:flex;flex-direction:column;gap:16px;}

	/* Welcome message */.welcome-message.svelte-beco3k {display:flex;align-items:flex-start;gap:12px;margin-top:4px;}

	/* Message rows */.message-row.svelte-beco3k {display:flex;gap:10px;max-width:100%;}.user-row.svelte-beco3k {justify-content:flex-end;}.assistant-row.svelte-beco3k {justify-content:flex-start;align-items:flex-start;}

	/* Avatar */.avatar.svelte-beco3k {flex-shrink:0;width:40px;height:40px;border-radius:50%;background:#fff;border:2px solid #e5e7eb;display:flex;align-items:center;justify-content:center;font-size:20px;box-shadow:0 1px 3px rgba(0, 0, 0, 0.08);}.avatar.small.svelte-beco3k {width:32px;height:32px;font-size:16px;}

	/* User message wrapper (bubble + copy) */.user-message-wrap.svelte-beco3k {display:flex;align-items:flex-end;gap:6px;max-width:80%;}

	/* Assistant message wrapper (content + copy) */.assistant-message-wrap.svelte-beco3k {display:flex;flex-direction:column;flex:1;min-width:0;gap:4px;}

	/* Copy button */.copy-btn.svelte-beco3k {flex-shrink:0;display:flex;align-items:center;justify-content:center;width:26px;height:26px;border:none;background:transparent;color:#9ca3af;cursor:pointer;border-radius:6px;padding:4px;transition:color 0.15s ease, background 0.15s ease;}.copy-btn.svelte-beco3k:hover {color:#4f46e5;background:#eef2ff;}.copy-btn.svelte-beco3k svg:where(.svelte-beco3k) {width:14px;height:14px;}.copy-btn--assistant.svelte-beco3k {align-self:flex-start;margin-left:2px;}

	/* Bubbles */.bubble.svelte-beco3k {padding:10px 14px;border-radius:16px;line-height:1.5;font-size:14px;word-wrap:break-word;overflow-wrap:break-word;}.user-bubble.svelte-beco3k {background:#4f46e5;color:#fff;border-bottom-right-radius:4px;box-shadow:0 1px 3px rgba(79, 70, 229, 0.3);white-space:pre-wrap;}

	/* Assistant content — no bubble, full width */.assistant-content.svelte-beco3k {flex:1;min-width:0;line-height:1.6;font-size:14px;color:#1f2937;word-wrap:break-word;overflow-wrap:break-word;padding:2px 0;}

	/* Markdown content inside assistant messages */.markdown-content.svelte-beco3k h1,
	.markdown-content.svelte-beco3k h2,
	.markdown-content.svelte-beco3k h3 {margin-top:12px;margin-bottom:4px;font-weight:600;}.markdown-content.svelte-beco3k h1 {font-size:1.125rem;}.markdown-content.svelte-beco3k h2 {font-size:1rem;}.markdown-content.svelte-beco3k h3 {font-size:0.9375rem;}.markdown-content.svelte-beco3k li {margin-left:16px;margin-bottom:2px;}.markdown-content.svelte-beco3k pre {margin:8px 0;border-radius:6px;}.markdown-content.svelte-beco3k strong {font-weight:600;}.markdown-content.svelte-beco3k a {color:#4f46e5;text-decoration:underline;}

	/* Error banner */.error-banner.svelte-beco3k {display:flex;align-items:center;justify-content:space-between;gap:8px;padding:8px 14px;border-radius:8px;background:#fef2f2;border:1px solid #fecaca;color:#991b1b;font-size:13px;}.error-dismiss.svelte-beco3k {background:none;border:none;font-size:18px;cursor:pointer;color:#991b1b;padding:0 4px;line-height:1;opacity:0.7;}.error-dismiss.svelte-beco3k:hover {opacity:1;}

	/* Typing animation */.typing-animation.svelte-beco3k {display:flex;align-items:center;gap:4px;padding:4px 0;}.typing-animation.svelte-beco3k span:where(.svelte-beco3k) {width:7px;height:7px;background-color:#9ca3af;border-radius:50%;
		animation: svelte-beco3k-typing 1.4s infinite ease-in-out;}.typing-animation.svelte-beco3k span:where(.svelte-beco3k):nth-child(1) {animation-delay:0s;}.typing-animation.svelte-beco3k span:where(.svelte-beco3k):nth-child(2) {animation-delay:0.2s;}.typing-animation.svelte-beco3k span:where(.svelte-beco3k):nth-child(3) {animation-delay:0.4s;}

	@keyframes svelte-beco3k-typing {
		0%, 60%, 100% {
			transform: translateY(0);
			opacity: 0.4;
		}
		30% {
			transform: translateY(-6px);
			opacity: 1;
		}
	}

	/* Input section */.input-section.svelte-beco3k {flex-shrink:0;padding:10px 14px;border-top:1px solid #e5e7eb;background:transparent;}.suggestions.svelte-beco3k {display:flex;flex-wrap:wrap;gap:6px;margin-bottom:10px;justify-content:center;}.suggestion-loading.svelte-beco3k {font-size:12px;color:#9ca3af;}.suggestion-chip.svelte-beco3k {padding:5px 12px;font-size:12px;border-radius:16px;border:1px solid #e5e7eb;background:#f9fafb;color:#4b5563;cursor:pointer;transition:all 0.15s ease;white-space:nowrap;}.suggestion-chip.svelte-beco3k:hover {background:#eef2ff;border-color:#c7d2fe;color:#4338ca;}.input-row.svelte-beco3k {display:flex;gap:8px;align-items:flex-end;}.chat-input.svelte-beco3k {flex:1;resize:none;padding:10px 14px;border-radius:12px;border:1px solid #d1d5db;font-size:16px; /* 16px prevents iOS auto-zoom on focus */line-height:1.4;min-height:42px;max-height:120px;overflow-y:auto;transition:border-color 0.15s ease, box-shadow 0.15s ease;outline:none;touch-action:manipulation;}.chat-input.svelte-beco3k:focus {border-color:#6366f1;box-shadow:0 0 0 3px rgba(99, 102, 241, 0.1);}.chat-input.svelte-beco3k::placeholder {color:#9ca3af;}.send-btn.svelte-beco3k {display:flex;align-items:center;justify-content:center;width:42px;height:42px;border-radius:12px;border:none;background:#4f46e5;color:#fff;cursor:pointer;transition:background 0.15s ease, opacity 0.15s ease;flex-shrink:0;}.send-btn.svelte-beco3k:hover:not(:disabled) {background:#4338ca;}.send-btn.svelte-beco3k:disabled {opacity:0.4;cursor:not-allowed;}

	/* ══════════════════════ Settings page ══════════════════════ */.settings-page.svelte-beco3k {max-width:680px;margin:0 auto;padding:36px 24px 60px;font-family:inherit;color:#111;}.settings-title.svelte-beco3k {font-size:1.35rem;font-weight:700;margin:0 0 32px;color:#111;}.settings-section.svelte-beco3k {background:#fff;border:1px solid #e5e7eb;border-radius:12px;padding:20px 22px;margin-bottom:18px;display:flex;flex-direction:column;gap:14px;}.settings-section-title.svelte-beco3k {font-size:0.85rem;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;color:#6b7280;margin:0;}.settings-section-desc.svelte-beco3k {font-size:0.875rem;color:#6b7280;margin:-8px 0 0;}

	/* Default assistant grid */.settings-assistant-grid.svelte-beco3k {display:flex;flex-wrap:wrap;gap:10px;}.settings-assistant-btn.svelte-beco3k {display:flex;flex-direction:column;align-items:center;gap:5px;padding:10px 16px;border:1.5px solid #e5e7eb;border-radius:10px;background:#f9fafb;cursor:pointer;transition:border-color 0.15s, background 0.15s;min-width:80px;}.settings-assistant-btn.selected.svelte-beco3k {border-color:#4f46e5;background:#eef2ff;}.settings-assistant-emoji.svelte-beco3k {font-size:1.5rem;}.settings-assistant-name.svelte-beco3k {font-size:0.8rem;font-weight:500;color:#374151;}

	/* Toggle rows */.settings-toggle.svelte-beco3k {display:flex;align-items:center;justify-content:space-between;gap:16px;cursor:pointer;}.settings-toggle-info.svelte-beco3k {display:flex;flex-direction:column;gap:2px;}.settings-toggle-label.svelte-beco3k {font-size:0.9rem;font-weight:500;color:#111;}.settings-toggle-desc.svelte-beco3k {font-size:0.8rem;color:#6b7280;}.settings-switch.svelte-beco3k {flex-shrink:0;width:40px;height:22px;border-radius:11px;background:#d1d5db;border:none;position:relative;cursor:pointer;transition:background 0.2s;outline:none;padding:0;}.settings-switch.svelte-beco3k::after {content:'';position:absolute;top:3px;left:3px;width:16px;height:16px;border-radius:50%;background:#fff;box-shadow:0 1px 3px rgba(0,0,0,0.2);transition:transform 0.2s;}.settings-switch.on.svelte-beco3k {background:#4f46e5;}.settings-switch.on.svelte-beco3k::after {transform:translateX(18px);}

	/* History list */.settings-history-list.svelte-beco3k {display:flex;flex-direction:column;gap:6px;max-height:260px;overflow-y:auto;border:1px solid #e5e7eb;border-radius:8px;padding:6px;}.settings-history-item.svelte-beco3k {display:flex;align-items:center;gap:10px;padding:8px 10px;border-radius:7px;background:#f9fafb;}.settings-history-body.svelte-beco3k {flex:1;min-width:0;}.settings-history-title.svelte-beco3k {font-size:0.875rem;font-weight:500;color:#111;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}.settings-history-meta.svelte-beco3k {font-size:0.75rem;color:#9ca3af;margin-top:2px;}.settings-history-delete.svelte-beco3k {flex-shrink:0;width:28px;height:28px;border:none;background:transparent;cursor:pointer;border-radius:6px;color:#9ca3af;display:flex;align-items:center;justify-content:center;transition:background 0.15s, color 0.15s;}.settings-history-delete.svelte-beco3k:hover {background:#fee2e2;color:#dc2626;}.settings-danger-btn.svelte-beco3k {align-self:flex-start;padding:7px 14px;border:1.5px solid #fca5a5;border-radius:8px;background:#fff;color:#dc2626;font-size:0.85rem;font-weight:500;cursor:pointer;transition:background 0.15s;}.settings-danger-btn.svelte-beco3k:hover:not(:disabled) {background:#fee2e2;}.settings-danger-btn.svelte-beco3k:disabled {opacity:0.5;cursor:not-allowed;}

	/* About */.settings-about-row.svelte-beco3k {display:flex;justify-content:space-between;align-items:center;font-size:0.875rem;}.settings-about-label.svelte-beco3k {color:#6b7280;}.settings-about-value.svelte-beco3k {font-weight:500;color:#111;}.settings-api-status.svelte-beco3k {font-size:0.85rem;font-weight:500;}.settings-api-status.online.svelte-beco3k {color:#16a34a;}.settings-api-status.offline.svelte-beco3k {color:#dc2626;}.settings-api-status.unknown.svelte-beco3k {color:#9ca3af;}.settings-link-btn.svelte-beco3k {align-self:flex-start;padding:6px 12px;border:1px solid #e5e7eb;border-radius:7px;background:#f9fafb;color:#4f46e5;font-size:0.8rem;cursor:pointer;transition:background 0.15s;}.settings-link-btn.svelte-beco3k:hover {background:#eef2ff;}`
};
function Ga(e, t) {
  Nr(t, !0), sa(e, Ya);
  let n = /* @__PURE__ */ I(Je([])), s = /* @__PURE__ */ I(""), r = /* @__PURE__ */ I(!1), i = /* @__PURE__ */ I(""), c = /* @__PURE__ */ I(void 0), f = /* @__PURE__ */ I(Je([])), o = /* @__PURE__ */ I(!1), u = /* @__PURE__ */ I(void 0), d = /* @__PURE__ */ I(Je([])), w = /* @__PURE__ */ I(null), p = /* @__PURE__ */ I(!1), g = /* @__PURE__ */ I(null), _ = /* @__PURE__ */ I("calc(100dvh - 102px)"), S = /* @__PURE__ */ I(null), v = /* @__PURE__ */ I(!1), y = /* @__PURE__ */ I(null), U = /* @__PURE__ */ I(Je([])), z = /* @__PURE__ */ I(!1), ne = /* @__PURE__ */ I(!1);
  const le = "https://geister-api.realmsgos.dev/", dt = 9e4;
  let ce = `${le}api/ask`, nt = `${le}suggestions`, vt = `${le}api/personas/assistants`, q = `${le}api/conversations`;
  function jn(h, k) {
    return k === 502 || k === 530 ? "The AI backend is temporarily offline. Please try again in a few minutes." : k === 504 || k === 524 ? "The request timed out before the server could respond. Please try again." : k && k >= 500 ? "Server error. Please try again later." : h instanceof DOMException && h.name === "TimeoutError" || h instanceof Error && h.name === "AbortError" ? "The request timed out before the server could respond. Please try again." : h instanceof TypeError || h instanceof Error && h.message.includes("fetch") ? "Could not reach the AI service. Check your network or try again shortly." : h instanceof Error && h.message.includes("HTTP error") ? jn(h, Number(h.message.match(/Status:\s*(\d+)/)?.[1])) : "Failed to get a response. Please try again.";
  }
  function Hn(h) {
    const k = h.toLowerCase();
    return k.includes("llm backend") || k.includes("cannot reach ollama") || k.includes("ollama at");
  }
  let pn = "", pt = "", Ws, Ks, ht = /* @__PURE__ */ I(!1);
  const Js = !!t.ctx.sidebarPanel, Xs = "llm_chat_prefs";
  function di() {
    try {
      return JSON.parse(localStorage.getItem(Xs) || "{}");
    } catch {
      return {};
    }
  }
  function vi(h) {
    try {
      localStorage.setItem(Xs, JSON.stringify(h));
    } catch {
    }
  }
  const fs = di();
  let Gt = /* @__PURE__ */ I(Je(fs.defaultAssistant || "")), Tt = /* @__PURE__ */ I(fs.showSuggestions !== !1), hn = /* @__PURE__ */ I(fs.sharePageContext !== !1);
  es(() => {
    vi({
      defaultAssistant: l(Gt),
      showSuggestions: l(Tt),
      sharePageContext: l(hn)
    });
  });
  let gn = /* @__PURE__ */ I("unknown"), Fn = /* @__PURE__ */ I(!1), us = /* @__PURE__ */ I(!1);
  async function Qs() {
    try {
      const h = await fetch(`${le}api/personas/assistants`, { method: "HEAD", signal: AbortSignal.timeout(5e3) });
      b(gn, h.ok ? "online" : "offline", !0);
    } catch {
      b(gn, "offline");
    }
  }
  async function pi() {
    if (!(!pt || !l(ht))) {
      b(Fn, !0);
      try {
        await ds(), await Promise.all(l(U).map((h) => fetch(`${q}/${h.conversation_id}`, { method: "DELETE" }))), b(U, [], !0), b(n, [], !0), b(y, null), b(us, !0), setTimeout(
          () => {
            b(us, !1);
          },
          2e3
        );
      } catch {
      } finally {
        b(Fn, !1);
      }
    }
  }
  ua(async () => {
    pn = t.ctx.config?.canisterId || globalThis.__CANISTER_IDS?.realm_backend || "", Ws = t.ctx.principal?.subscribe?.((k) => {
      pt = k || "";
    }), Ks = t.ctx.isAuthenticated?.subscribe?.((k) => {
      b(ht, k, !0);
    });
    const h = window.visualViewport;
    if (h) {
      const k = () => {
        b(_, `${h.height - h.offsetTop}px`);
      };
      k(), h.addEventListener("resize", k), h.addEventListener("scroll", k), window.__chatVpCleanup = () => {
        h.removeEventListener("resize", k), h.removeEventListener("scroll", k);
      };
    }
    if (hi(), await gi(), l(Gt) && l(d).length > 0) {
      const k = l(d).find((L) => L.id === l(Gt));
      k && b(w, k, !0);
    }
    !l(v) && l(Tt) && await Un(), Js || (Qs(), l(ht) && await ds());
  });
  function hi() {
    try {
      const h = new URLSearchParams(window.location.search), k = h.get("explain");
      if (!k) return;
      const [L, $] = k.split(":");
      if (L === "codex" && $)
        b(v, !0), t.ctx.backend.extension_sync_call("codex_viewer", "get_codex_details", JSON.stringify({ codex_id: $ })).then((R) => {
          if (R.success) {
            const ie = (typeof R.response == "string" ? JSON.parse(R.response) : R.response).codex?.name || `codex_${$}`, ke = `/extensions/codex_viewer/${$}`;
            b(S, $, !0), b(s, `Please explain this codex: [${ie}](${ke})`), setTimeout(() => bn(), 300);
          }
        }).catch((R) => {
          console.error("Failed to fetch codex for explanation:", R), b(v, !1);
        });
      else if (L === "financial_statements") {
        b(v, !0);
        const R = h.get("context") || "";
        b(s, `Please explain the following financial statements of this realm in plain language. Highlight key insights, any concerns, and the overall financial health:

${R}`), setTimeout(() => bn(), 300);
      }
    } catch (h) {
      console.error("Error handling explain param:", h);
    }
  }
  es(() => {
    l(n), Ps().then(Zs);
  });
  function Zs() {
    l(c) && (l(c).scrollTop = l(c).scrollHeight);
  }
  async function gi() {
    if (!l(p)) {
      b(p, !0);
      try {
        const h = await fetch(vt, {
          method: "GET",
          headers: { "Content-Type": "application/json" }
        });
        if (!h.ok) throw new Error(`HTTP ${h.status}`);
        const k = await h.json();
        k.assistants && Array.isArray(k.assistants) && (b(d, k.assistants, !0), l(d).length > 0 && !l(w) && b(w, l(d)[0], !0));
      } catch (h) {
        console.error("Error fetching assistants:", h);
      } finally {
        b(p, !1);
      }
    }
  }
  async function Un() {
    if (!l(o)) {
      b(o, !0);
      try {
        const h = new URLSearchParams({
          user_principal: pt || "",
          realm_principal: pn || "",
          persona: l(w)?.id || "ashoka"
        }), k = await fetch(`${nt}?${h.toString()}`, {
          method: "GET",
          headers: { "Content-Type": "application/json" }
        });
        if (!k.ok) throw new Error(`HTTP ${k.status}`);
        const L = await k.json();
        L.suggestions && Array.isArray(L.suggestions) && b(f, L.suggestions, !0);
      } catch (h) {
        console.error("Error fetching suggestions:", h);
      } finally {
        b(o, !1);
      }
    }
  }
  async function bn() {
    if (!l(s).trim()) return;
    b(i, ""), b(
      n,
      [
        ...l(n),
        { text: l(s), isUser: !0 }
      ],
      !0
    );
    const h = l(s);
    b(s, ""), b(r, !0);
    try {
      await wi();
      const k = {
        question: h,
        realm_principal: pn,
        user_principal: pt,
        stream: !0,
        persona: l(w)?.id || "ashoka",
        ...l(y) ? { conversation_id: l(y) } : {}
      };
      l(S) && (k.explain_codex_id = l(S), b(S, null));
      const L = await fetch(ce, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "text/event-stream"
        },
        body: JSON.stringify(k),
        signal: AbortSignal.timeout(dt)
      });
      if (!L.ok) {
        let ie = "";
        try {
          const ke = await L.json();
          ie = typeof ke?.error == "string" ? ke.error : "";
        } catch {
        }
        throw ie && Hn(ie) ? Object.assign(new Error(ie), { httpStatus: L.status }) : Object.assign(new Error(`HTTP error! Status: ${L.status}`), { httpStatus: L.status });
      }
      const $ = L.body?.getReader();
      if (!$) throw new Error("Response body is not readable");
      const R = new TextDecoder();
      let ve = "";
      try {
        for (; ; ) {
          const { done: ie, value: ke } = await $.read();
          if (ie) break;
          const _n = R.decode(ke, { stream: !0 }).split(`
`);
          for (const fe of _n)
            if (fe.startsWith("data: ")) {
              const Ve = fe.slice(6);
              if (Ve === "[DONE]") continue;
              try {
                const Wt = JSON.parse(Ve);
                Wt.text && (ve += Wt.text);
              } catch {
                ve += Ve;
              }
            } else fe.trim() && !fe.startsWith(":") && (ve += fe);
          ve && (l(n).length === 0 || l(n)[l(n).length - 1].isUser) ? b(n, [...l(n), { text: ve, isUser: !1 }], !0) : ve && b(n, l(n).map((fe, Ve) => Ve === l(n).length - 1 && !fe.isUser ? { ...fe, text: ve } : fe), !0);
        }
      } finally {
        $.releaseLock();
      }
      ve.trim() ? Hn(ve) && b(i, "The AI backend is temporarily offline. Please try again in a few minutes.") : l(n).length > 0 && !l(n)[l(n).length - 1].isUser ? b(n, l(n).map((ie, ke) => ke === l(n).length - 1 ? { ...ie, text: "No response from LLM" } : ie), !0) : b(
        n,
        [
          ...l(n),
          { text: "No response from LLM", isUser: !1 }
        ],
        !0
      ), b(r, !1), await Un();
    } catch (k) {
      console.error("Error calling LLM:", k), b(i, jn(k, k?.httpStatus), !0), l(n).length > 0 && !l(n)[l(n).length - 1].isUser && b(n, l(n).slice(0, -1), !0);
    } finally {
      b(r, !1);
    }
  }
  function bi() {
    b(i, "");
  }
  async function ds() {
    if (!(!pt || !l(ht))) {
      b(ne, !0);
      try {
        const h = new URLSearchParams({
          user_principal: pt,
          realm_principal: pn
        }), k = await fetch(`${q}?${h}`, { headers: { "Content-Type": "application/json" } });
        if (!k.ok) return;
        const L = await k.json();
        b(U, (L.conversations || []).sort(($, R) => new Date(R.updated_at).getTime() - new Date($.updated_at).getTime()), !0);
      } catch {
      } finally {
        b(ne, !1);
      }
    }
  }
  async function er(h) {
    b(z, !1), b(n, [], !0), b(y, h.conversation_id, !0);
    const k = l(d).find((L) => L.id === h.persona);
    k && b(w, k, !0);
    try {
      const L = await fetch(`${q}/${h.conversation_id}/messages`, { headers: { "Content-Type": "application/json" } });
      if (!L.ok) return;
      const $ = await L.json();
      b(n, ($.messages || []).map((R) => ({ text: R.content, isUser: R.role === "user" })), !0), await Ps(), Zs();
    } catch {
    }
  }
  async function _i() {
    b(z, !1), b(n, [], !0), b(y, null), b(i, ""), b(f, [], !0), await Un();
  }
  async function tr(h, k) {
    k.stopPropagation();
    try {
      await fetch(`${q}/${h}`, { method: "DELETE" }), b(U, l(U).filter((L) => L.conversation_id !== h), !0), l(y) === h && (b(n, [], !0), b(y, null));
    } catch {
    }
  }
  async function ki() {
    b(z, !0), await ds();
  }
  function nr(h) {
    const k = new Date(h), $ = (/* @__PURE__ */ new Date()).getTime() - k.getTime(), R = Math.floor($ / 864e5);
    return R === 0 ? k.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) : R === 1 ? "Yesterday" : R < 7 ? k.toLocaleDateString([], { weekday: "short" }) : k.toLocaleDateString([], { month: "short", day: "numeric" });
  }
  async function wi() {
    if (!(l(y) || !pt || !l(ht)))
      try {
        const h = await fetch(q, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            user_principal: pt,
            realm_principal: pn,
            persona: l(w)?.id || "ashoka"
          })
        });
        if (h.ok) {
          const k = await h.json();
          b(y, k.conversation_id || null, !0);
        }
      } catch {
      }
  }
  function sr(h, k) {
    const L = () => {
      b(g, k, !0), setTimeout(
        () => {
          b(g, null);
        },
        1500
      );
    }, $ = () => {
      const R = document.createElement("textarea");
      R.value = h, R.style.cssText = "position:fixed;top:-9999px;left:-9999px;opacity:0", document.body.appendChild(R), R.focus(), R.select();
      try {
        document.execCommand("copy"), L();
      } catch {
      }
      document.body.removeChild(R);
    };
    navigator.clipboard ? navigator.clipboard.writeText(h).then(L).catch($) : $();
  }
  function mi(h) {
    let k = h.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    return k = k.replace(/```([^`]*?)```/gs, '<pre class="bg-gray-100 dark:bg-gray-900 rounded-md p-3 my-2 overflow-x-auto text-xs font-mono"><code>$1</code></pre>').replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/\*(.+?)\*/g, "<em>$1</em>").replace(/`(.+?)`/g, '<code class="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-xs font-mono">$1</code>').replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" class="text-indigo-600 dark:text-indigo-400 underline hover:text-indigo-800">$1</a>').replace(/^### (.+)$/gm, '<h3 class="text-base font-semibold mt-3 mb-1">$1</h3>').replace(/^## (.+)$/gm, '<h2 class="text-lg font-semibold mt-3 mb-1">$1</h2>').replace(/^# (.+)$/gm, '<h1 class="text-xl font-bold mt-3 mb-1">$1</h1>').replace(/^- (.+)$/gm, '<li class="ml-4 list-disc">$1</li>').replace(/^(\d+)\. (.+)$/gm, '<li class="ml-4 list-decimal">$2</li>').replace(/\n{2,}/g, "<br/><br/>").replace(/\n/g, "<br/>"), k;
  }
  function rr() {
    if (l(u)) {
      l(u).style.height = "auto";
      const h = Math.max(40, Math.min(l(u).scrollHeight, 120));
      l(u).style.height = h + "px";
    }
  }
  function xi(h) {
    h.key === "Enter" && !h.shiftKey && (h.preventDefault(), bn()), setTimeout(rr, 0);
  }
  function yi(h) {
    b(s, h, !0), bn();
  }
  function Ei(h) {
    b(w, h, !0), b(n, [], !0), Un();
  }
  es(() => () => {
    Ws?.(), Ks?.(), window.__chatVpCleanup?.();
  });
  var ir = $n(), Si = xn(ir);
  {
    var Ti = (h) => {
      var k = wa(), L = O(x(k), 2), $ = O(x(L), 4);
      {
        var R = (m) => {
          var N = pa();
          Xt(N, 21, () => l(d), Jt, (se, V) => {
            var Y = va(), G = x(Y), j = x(G), H = O(G, 2), X = x(H);
            we(() => {
              Qt(Y, 1, `settings-assistant-btn ${l(Gt) === l(V).id || !l(Gt) && l(d)[0].id === l(V).id ? "selected" : ""}`, "svelte-beco3k"), Te(j, l(V).emoji), Te(X, l(V).name);
            }), ee("click", Y, () => b(Gt, l(V).id, !0)), E(se, Y);
          }), E(m, N);
        }, ve = (m) => {
          var N = ha();
          E(m, N);
        };
        Q($, (m) => {
          l(d).length > 0 ? m(R) : m(ve, -1);
        });
      }
      var ie = O(L, 2), ke = O(x(ie), 2), st = O(x(ke), 2), _n = O(ke, 2), fe = O(x(_n), 2), Ve = O(ie, 2);
      {
        var Wt = (m) => {
          var N = ka(), se = O(x(N), 2);
          {
            var V = (D) => {
              var W = ba();
              Xt(W, 21, () => l(U), Jt, (gt, Be) => {
                var Re = ga(), qe = x(Re), bt = x(qe), $e = x(bt), Se = O(bt, 2), wn = x(Se), mn = O(qe, 2);
                we(
                  (Ct) => {
                    Te($e, l(Be).title), Te(wn, `${Ct ?? ""} · ${l(Be).message_count ?? ""} message${l(Be).message_count === 1 ? "" : "s"}`);
                  },
                  [() => nr(l(Be).updated_at)]
                ), ee("click", mn, (Ct) => tr(l(Be).conversation_id, Ct)), E(gt, Re);
              }), E(D, W);
            }, Y = (D) => {
              var W = _a(), gt = x(W);
              we(() => Te(gt, l(ne) ? "Loading…" : "No conversations yet.")), E(D, W);
            };
            Q(se, (D) => {
              l(U).length > 0 ? D(V) : D(Y, -1);
            });
          }
          var G = O(se, 2), j = x(G);
          {
            var H = (D) => {
              var W = Kt("✓ History cleared");
              E(D, W);
            }, X = (D) => {
              var W = Kt("Clearing…");
              E(D, W);
            }, pe = (D) => {
              var W = Kt("Clear all history");
              E(D, W);
            };
            Q(j, (D) => {
              l(us) ? D(H) : l(Fn) ? D(X, 1) : D(pe, -1);
            });
          }
          we(() => G.disabled = l(Fn) || l(U).length === 0), ee("click", G, pi), E(m, N);
        };
        Q(Ve, (m) => {
          l(ht) && m(Wt);
        });
      }
      var Vn = O(Ve, 2), Bn = O(x(Vn), 4), qn = O(x(Bn), 2), At = x(qn);
      {
        var kn = (m) => {
          var N = Kt("● Online");
          E(m, N);
        }, vs = (m) => {
          var N = Kt("● Offline");
          E(m, N);
        }, ps = (m) => {
          var N = Kt("Checking…");
          E(m, N);
        };
        Q(At, (m) => {
          l(gn) === "online" ? m(kn) : l(gn) === "offline" ? m(vs, 1) : m(ps, -1);
        });
      }
      var hs = O(Bn, 2);
      we(() => {
        Qt(st, 1, `settings-switch ${l(Tt) ? "on" : ""}`, "svelte-beco3k"), ks(st, "aria-checked", l(Tt)), Qt(fe, 1, `settings-switch ${l(hn) ? "on" : ""}`, "svelte-beco3k"), ks(fe, "aria-checked", l(hn)), Qt(qn, 1, `settings-api-status ${l(gn) ?? ""}`, "svelte-beco3k");
      }), ee("click", st, () => b(Tt, !l(Tt))), ee("click", fe, () => b(hn, !l(hn))), ee("click", hs, Qs), E(h, k);
    }, Ai = (h) => {
      var k = $a(), L = x(k);
      {
        var $ = (m) => {
          var N = ma(), se = x(N), V = O(se, 2);
          we(() => Qt(V, 1, `toolbar-btn ${l(z) ? "active" : ""}`, "svelte-beco3k")), ee("click", se, _i), ee("click", V, function(...Y) {
            (l(z) ? () => b(z, !1) : ki)?.apply(this, Y);
          }), E(m, N);
        };
        Q(L, (m) => {
          l(ht) && m($);
        });
      }
      var R = O(L, 2);
      {
        var ve = (m) => {
          var N = ya();
          Xt(N, 21, () => l(d), Jt, (se, V) => {
            var Y = xa(), G = x(Y), j = x(G), H = O(G, 2), X = x(H);
            we(() => {
              Qt(Y, 1, `assistant-btn ${l(w)?.id === l(V).id ? "active" : ""}`, "svelte-beco3k"), ks(Y, "title", l(V).description), Te(j, l(V).emoji), Te(X, l(V).name);
            }), ee("click", Y, () => Ei(l(V))), E(se, Y);
          }), E(m, N);
        };
        Q(R, (m) => {
          l(d).length > 1 && m(ve);
        });
      }
      var ie = O(R, 2);
      {
        var ke = (m) => {
          var N = Aa(), se = x(N);
          {
            var V = (j) => {
              var H = Ea();
              E(j, H);
            }, Y = (j) => {
              var H = Sa();
              E(j, H);
            }, G = (j) => {
              var H = $n(), X = xn(H);
              Xt(X, 17, () => l(U), Jt, (pe, D) => {
                var W = Ta(), gt = x(W), Be = x(gt), Re = x(Be), qe = O(Be, 2), bt = x(qe), $e = O(gt, 2);
                we(
                  (Se) => {
                    Te(Re, l(D).title), Te(bt, `${Se ?? ""} · ${l(D).message_count ?? ""} msg${l(D).message_count === 1 ? "" : "s"}`);
                  },
                  [() => nr(l(D).updated_at)]
                ), ee("click", W, () => er(l(D))), ee("keydown", W, (Se) => Se.key === "Enter" && er(l(D))), ee("click", $e, (Se) => tr(l(D).conversation_id, Se)), E(pe, W);
              }), E(j, H);
            };
            Q(se, (j) => {
              l(ne) ? j(V) : l(U).length === 0 ? j(Y, 1) : j(G, -1);
            });
          }
          E(m, N);
        };
        Q(ie, (m) => {
          l(z) && m(ke);
        });
      }
      var st = O(ie, 2), _n = x(st);
      {
        var fe = (m) => {
          var N = Na(), se = x(N), V = x(se);
          {
            var Y = (j) => {
              var H = Ca();
              E(j, H);
            }, G = (j) => {
              var H = Ma();
              E(j, H);
            };
            Q(V, (j) => {
              l(ht) ? j(Y) : j(G, -1);
            });
          }
          E(m, N);
        }, Ve = (m) => {
          var N = Ha(), se = xn(N);
          Xt(se, 17, () => l(n), Jt, (H, X, pe) => {
            var D = $n(), W = xn(D);
            {
              var gt = (Re) => {
                var qe = Ia(), bt = x(qe), $e = x(bt), Se = x($e);
                {
                  var wn = (Ye) => {
                    var gs = Pa();
                    E(Ye, gs);
                  }, mn = (Ye) => {
                    var gs = La();
                    E(Ye, gs);
                  };
                  Q(Se, (Ye) => {
                    l(g) === pe ? Ye(wn) : Ye(mn, -1);
                  });
                }
                var Ct = O($e, 2), _t = x(Ct);
                we(() => Te(_t, l(X).text)), ee("click", $e, () => sr(l(X).text, pe)), E(Re, qe);
              }, Be = (Re) => {
                var qe = Ra(), bt = x(qe), $e = x(bt);
                na($e, () => mi(l(X).text), !0);
                var Se = O($e, 2), wn = x(Se);
                {
                  var mn = (_t) => {
                    var Ye = Da();
                    E(_t, Ye);
                  }, Ct = (_t) => {
                    var Ye = Oa();
                    E(_t, Ye);
                  };
                  Q(wn, (_t) => {
                    l(g) === pe ? _t(mn) : _t(Ct, -1);
                  });
                }
                ee("click", Se, () => sr(l(X).text, pe)), E(Re, qe);
              };
              Q(W, (Re) => {
                l(X).isUser ? Re(gt) : Re(Be, -1);
              });
            }
            E(H, D);
          });
          var V = O(se, 2);
          {
            var Y = (H) => {
              var X = za();
              E(H, X);
            };
            Q(V, (H) => {
              l(r) && H(Y);
            });
          }
          var G = O(V, 2);
          {
            var j = (H) => {
              var X = ja(), pe = x(X), D = x(pe), W = O(pe, 2);
              we(() => Te(D, l(i))), ee("click", W, bi), E(H, X);
            };
            Q(G, (H) => {
              l(i) && H(j);
            });
          }
          E(m, N);
        };
        Q(_n, (m) => {
          l(n).length === 0 && !l(v) ? m(fe) : m(Ve, -1);
        });
      }
      wr(st, (m) => b(c, m), () => l(c));
      var Wt = O(st, 2), Vn = x(Wt);
      {
        var Bn = (m) => {
          var N = Va(), se = x(N);
          {
            var V = (G) => {
              var j = Fa();
              E(G, j);
            }, Y = (G) => {
              var j = $n(), H = xn(j);
              Xt(H, 17, () => l(f), Jt, (X, pe) => {
                var D = Ua(), W = x(D);
                we(() => Te(W, l(pe))), ee("click", D, () => yi(l(pe))), E(X, D);
              }), E(G, j);
            };
            Q(se, (G) => {
              l(o) ? G(V) : G(Y, -1);
            });
          }
          E(m, N);
        };
        Q(Vn, (m) => {
          l(Tt) && (l(f).length > 0 || l(o)) && m(Bn);
        });
      }
      var qn = O(Vn, 2), At = x(qn);
      wr(At, (m) => b(u, m), () => l(u));
      var kn = O(At, 2), vs = x(kn);
      {
        var ps = (m) => {
          var N = Ba();
          E(m, N);
        }, hs = (m) => {
          var N = qa();
          E(m, N);
        };
        Q(vs, (m) => {
          l(r) ? m(ps) : m(hs, -1);
        });
      }
      we(
        (m) => {
          br(k, `height: ${l(_) ?? ""}`), br(st, l(z) ? "display:none" : ""), kn.disabled = m;
        },
        [() => l(r) || !l(s).trim()]
      ), ee("keydown", At, xi), ee("input", At, () => rr()), fa(At, () => l(s), (m) => b(s, m)), ee("click", kn, () => bn()), E(h, k);
    };
    Q(Si, (h) => {
      Js ? h(Ai, -1) : h(Ti);
    });
  }
  E(e, ir), Pr();
}
$o(["click", "keydown", "input"]);
function Ja(e, t) {
  const n = Ko(Ga, { target: e, props: { ctx: t } });
  return {
    unmount() {
      try {
        Xo(n);
      } catch {
      }
    }
  };
}
export {
  Ja as default
};
