var Hr = Object.defineProperty;
var Tn = (e) => {
  throw TypeError(e);
};
var Kr = (e, t, n) => t in e ? Hr(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var re = (e, t, n) => Kr(e, typeof t != "symbol" ? t + "" : t, n), Jt = (e, t, n) => t.has(e) || Tn("Cannot " + n);
var i = (e, t, n) => (Jt(e, t, "read from private field"), n ? n.call(e) : t.get(e)), m = (e, t, n) => t.has(e) ? Tn("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), b = (e, t, n, r) => (Jt(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), E = (e, t, n) => (Jt(e, t, "access private method"), n);
var Wr = Array.isArray, Zr = Array.prototype.indexOf, tt = Array.prototype.includes, Qr = Array.from, Xr = Object.defineProperty, ut = Object.getOwnPropertyDescriptor, $r = Object.prototype, es = Array.prototype, ts = Object.getPrototypeOf, An = Object.isExtensible;
const ns = () => {
};
function rs(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function Ln() {
  var e, t, n = new Promise((r, s) => {
    e = r, t = s;
  });
  return { promise: n, resolve: e, reject: t };
}
const F = 2, nt = 4, Bt = 8, zn = 1 << 24, de = 16, qe = 32, Ne = 64, Qt = 128, $ = 512, C = 1024, P = 2048, ve = 4096, ee = 8192, ae = 16384, lt = 32768, Nn = 1 << 25, rt = 65536, Xt = 1 << 17, ss = 1 << 18, at = 1 << 19, is = 1 << 20, Ue = 65536, Ft = 1 << 21, ht = 1 << 22, Ae = 1 << 23, Ht = Symbol("$state"), me = new class extends Error {
  constructor() {
    super(...arguments);
    re(this, "name", "StaleReactionError");
    re(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
function ls() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function as() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function fs() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function os() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function us() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function cs() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
const ds = 2, D = Symbol(), vs = "http://www.w3.org/1999/xhtml";
function hs() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function _s() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function Un(e) {
  return e === this.v;
}
let fe = null;
function st(e) {
  fe = e;
}
function Vn(e, t = !1, n) {
  fe = {
    p: fe,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    r: (
      /** @type {Effect} */
      y
    ),
    l: null
  };
}
function Bn(e) {
  var t = (
    /** @type {ComponentContext} */
    fe
  ), n = t.e;
  if (n !== null) {
    t.e = null;
    for (var r of n)
      Vs(r);
  }
  return t.i = !0, fe = t.p, /** @type {T} */
  {};
}
function Yn() {
  return !0;
}
let Oe = [];
function Gn() {
  var e = Oe;
  Oe = [], rs(e);
}
function We(e) {
  if (Oe.length === 0 && !ct) {
    var t = Oe;
    queueMicrotask(() => {
      t === Oe && Gn();
    });
  }
  Oe.push(e);
}
function ps() {
  for (; Oe.length > 0; )
    Gn();
}
function Jn(e) {
  var t = y;
  if (t === null)
    return w.f |= Ae, e;
  if ((t.f & lt) === 0 && (t.f & nt) === 0)
    throw e;
  Te(e, t);
}
function Te(e, t) {
  for (; t !== null; ) {
    if ((t.f & Qt) !== 0) {
      if ((t.f & lt) === 0)
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
const ms = -7169;
function R(e, t) {
  e.f = e.f & ms | t;
}
function on(e) {
  (e.f & $) !== 0 || e.deps === null ? R(e, C) : R(e, ve);
}
function Hn(e) {
  if (e !== null)
    for (const t of e)
      (t.f & F) === 0 || (t.f & Ue) === 0 || (t.f ^= Ue, Hn(
        /** @type {Derived} */
        t.deps
      ));
}
function Kn(e, t, n) {
  (e.f & P) !== 0 ? t.add(e) : (e.f & ve) !== 0 && n.add(e), Hn(e.deps), R(e, C);
}
const Re = /* @__PURE__ */ new Set();
let g = null, ie = null, $t = null, ct = !1, Kt = !1, He = null, Nt = null;
var Rn = 0;
let gs = 1;
var Ze, Qe, Me, ge, oe, pt, G, mt, Ee, be, ue, Xe, $e, Pe, O, Rt, Wn, Ot, en, Ct, bs;
const zt = class zt {
  constructor() {
    m(this, O);
    re(this, "id", gs++);
    /**
     * The current values of any signals that are updated in this batch.
     * Tuple format: [value, is_derived] (note: is_derived is false for deriveds, too, if they were overridden via assignment)
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Value, [any, boolean]>}
     */
    re(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any signals (sources and deriveds) that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Value, any>}
     */
    re(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<(batch: Batch) => void>}
     */
    m(this, Ze, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    m(this, Qe, /* @__PURE__ */ new Set());
    /**
     * Callbacks that should run only when a fork is committed.
     * @type {Set<(batch: Batch) => void>}
     */
    m(this, Me, /* @__PURE__ */ new Set());
    /**
     * Async effects that are currently in flight
     * @type {Map<Effect, number>}
     */
    m(this, ge, /* @__PURE__ */ new Map());
    /**
     * Async effects that are currently in flight, _not_ inside a pending boundary
     * @type {Map<Effect, number>}
     */
    m(this, oe, /* @__PURE__ */ new Map());
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    m(this, pt, null);
    /**
     * The root effects that need to be flushed
     * @type {Effect[]}
     */
    m(this, G, []);
    /**
     * Effects created while this batch was active.
     * @type {Effect[]}
     */
    m(this, mt, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    m(this, Ee, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    m(this, be, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    m(this, ue, /* @__PURE__ */ new Map());
    /**
     * Inverse of #skipped_branches which we need to tell prior batches to unskip them when committing
     * @type {Set<Effect>}
     */
    m(this, Xe, /* @__PURE__ */ new Set());
    re(this, "is_fork", !1);
    m(this, $e, !1);
    /** @type {Set<Batch>} */
    m(this, Pe, /* @__PURE__ */ new Set());
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(t) {
    i(this, ue).has(t) || i(this, ue).set(t, { d: [], m: [] }), i(this, Xe).delete(t);
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   * @param {(e: Effect) => void} callback
   */
  unskip_effect(t, n = (r) => this.schedule(r)) {
    var r = i(this, ue).get(t);
    if (r) {
      i(this, ue).delete(t);
      for (var s of r.d)
        R(s, P), n(s);
      for (s of r.m)
        R(s, ve), n(s);
    }
    i(this, Xe).add(t);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Value} source
   * @param {any} value
   * @param {boolean} [is_derived]
   */
  capture(t, n, r = !1) {
    t.v !== D && !this.previous.has(t) && this.previous.set(t, t.v), (t.f & Ae) === 0 && (this.current.set(t, [n, r]), ie?.set(t, n)), this.is_fork || (t.v = n);
  }
  activate() {
    g = this;
  }
  deactivate() {
    g = null, ie = null;
  }
  flush() {
    try {
      Kt = !0, g = this, E(this, O, Ot).call(this);
    } finally {
      Rn = 0, $t = null, He = null, Nt = null, Kt = !1, g = null, ie = null, Le.clear();
    }
  }
  discard() {
    for (const t of i(this, Qe)) t(this);
    i(this, Qe).clear(), i(this, Me).clear(), Re.delete(this);
  }
  /**
   * @param {Effect} effect
   */
  register_created_effect(t) {
    i(this, mt).push(t);
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  increment(t, n) {
    let r = i(this, ge).get(n) ?? 0;
    if (i(this, ge).set(n, r + 1), t) {
      let s = i(this, oe).get(n) ?? 0;
      i(this, oe).set(n, s + 1);
    }
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   * @param {boolean} skip - whether to skip updates (because this is triggered by a stale reaction)
   */
  decrement(t, n, r) {
    let s = i(this, ge).get(n) ?? 0;
    if (s === 1 ? i(this, ge).delete(n) : i(this, ge).set(n, s - 1), t) {
      let l = i(this, oe).get(n) ?? 0;
      l === 1 ? i(this, oe).delete(n) : i(this, oe).set(n, l - 1);
    }
    i(this, $e) || r || (b(this, $e, !0), We(() => {
      b(this, $e, !1), this.flush();
    }));
  }
  /**
   * @param {Set<Effect>} dirty_effects
   * @param {Set<Effect>} maybe_dirty_effects
   */
  transfer_effects(t, n) {
    for (const r of t)
      i(this, Ee).add(r);
    for (const r of n)
      i(this, be).add(r);
    t.clear(), n.clear();
  }
  /** @param {(batch: Batch) => void} fn */
  oncommit(t) {
    i(this, Ze).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    i(this, Qe).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  on_fork_commit(t) {
    i(this, Me).add(t);
  }
  run_fork_commit_callbacks() {
    for (const t of i(this, Me)) t(this);
    i(this, Me).clear();
  }
  settled() {
    return (i(this, pt) ?? b(this, pt, Ln())).promise;
  }
  static ensure() {
    if (g === null) {
      const t = g = new zt();
      Kt || (Re.add(g), ct || We(() => {
        g === t && t.flush();
      }));
    }
    return g;
  }
  apply() {
    {
      ie = null;
      return;
    }
  }
  /**
   *
   * @param {Effect} effect
   */
  schedule(t) {
    if ($t = t, t.b?.is_pending && (t.f & (nt | Bt | zn)) !== 0 && (t.f & lt) === 0) {
      t.b.defer_effect(t);
      return;
    }
    for (var n = t; n.parent !== null; ) {
      n = n.parent;
      var r = n.f;
      if (He !== null && n === y && (w === null || (w.f & F) === 0))
        return;
      if ((r & (Ne | qe)) !== 0) {
        if ((r & C) === 0)
          return;
        n.f ^= C;
      }
    }
    i(this, G).push(n);
  }
};
Ze = new WeakMap(), Qe = new WeakMap(), Me = new WeakMap(), ge = new WeakMap(), oe = new WeakMap(), pt = new WeakMap(), G = new WeakMap(), mt = new WeakMap(), Ee = new WeakMap(), be = new WeakMap(), ue = new WeakMap(), Xe = new WeakMap(), $e = new WeakMap(), Pe = new WeakMap(), O = new WeakSet(), Rt = function() {
  return this.is_fork || i(this, oe).size > 0;
}, Wn = function() {
  for (const r of i(this, Pe))
    for (const s of i(r, oe).keys()) {
      for (var t = !1, n = s; n.parent !== null; ) {
        if (i(this, ue).has(n)) {
          t = !0;
          break;
        }
        n = n.parent;
      }
      if (!t)
        return !0;
    }
  return !1;
}, Ot = function() {
  var o;
  if (Rn++ > 1e3 && (Re.delete(this), ys()), !E(this, O, Rt).call(this)) {
    for (const a of i(this, Ee))
      i(this, be).delete(a), R(a, P), this.schedule(a);
    for (const a of i(this, be))
      R(a, ve), this.schedule(a);
  }
  const t = i(this, G);
  b(this, G, []), this.apply();
  var n = He = [], r = [], s = Nt = [];
  for (const a of t)
    try {
      E(this, O, en).call(this, a, n, r);
    } catch (u) {
      throw Xn(a), u;
    }
  if (g = null, s.length > 0) {
    var l = zt.ensure();
    for (const a of s)
      l.schedule(a);
  }
  if (He = null, Nt = null, E(this, O, Rt).call(this) || E(this, O, Wn).call(this)) {
    E(this, O, Ct).call(this, r), E(this, O, Ct).call(this, n);
    for (const [a, u] of i(this, ue))
      Qn(a, u);
  } else {
    i(this, ge).size === 0 && Re.delete(this), i(this, Ee).clear(), i(this, be).clear();
    for (const a of i(this, Ze)) a(this);
    i(this, Ze).clear(), On(r), On(n), i(this, pt)?.resolve();
  }
  var f = (
    /** @type {Batch | null} */
    /** @type {unknown} */
    g
  );
  if (i(this, G).length > 0) {
    const a = f ?? (f = this);
    i(a, G).push(...i(this, G).filter((u) => !i(a, G).includes(u)));
  }
  f !== null && (Re.add(f), E(o = f, O, Ot).call(o));
}, /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
en = function(t, n, r) {
  t.f ^= C;
  for (var s = t.first; s !== null; ) {
    var l = s.f, f = (l & (qe | Ne)) !== 0, o = f && (l & C) !== 0, a = o || (l & ee) !== 0 || i(this, ue).has(s);
    if (!a && s.fn !== null) {
      f ? s.f ^= C : (l & nt) !== 0 ? n.push(s) : qt(s) && ((l & de) !== 0 && i(this, be).add(s), it(s));
      var u = s.first;
      if (u !== null) {
        s = u;
        continue;
      }
    }
    for (; s !== null; ) {
      var v = s.next;
      if (v !== null) {
        s = v;
        break;
      }
      s = s.parent;
    }
  }
}, /**
 * @param {Effect[]} effects
 */
Ct = function(t) {
  for (var n = 0; n < t.length; n += 1)
    Kn(t[n], i(this, Ee), i(this, be));
}, bs = function() {
  var v, _, h;
  for (const d of Re) {
    var t = d.id < this.id, n = [];
    for (const [c, [k, q]] of this.current) {
      if (d.current.has(c)) {
        var r = (
          /** @type {[any, boolean]} */
          d.current.get(c)[0]
        );
        if (t && k !== r)
          d.current.set(c, [k, q]);
        else
          continue;
      }
      n.push(c);
    }
    var s = [...d.current.keys()].filter((c) => !this.current.has(c));
    if (s.length === 0)
      t && d.discard();
    else if (n.length > 0) {
      if (t)
        for (const c of i(this, Xe))
          d.unskip_effect(c, (k) => {
            var q;
            (k.f & (de | ht)) !== 0 ? d.schedule(k) : E(q = d, O, Ct).call(q, [k]);
          });
      d.activate();
      var l = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Map();
      for (var o of n)
        Zn(o, s, l, f);
      f = /* @__PURE__ */ new Map();
      var a = [...d.current.keys()].filter(
        (c) => this.current.has(c) ? (
          /** @type {[any, boolean]} */
          this.current.get(c)[0] !== c
        ) : !0
      );
      for (const c of i(this, mt))
        (c.f & (ae | ee | Xt)) === 0 && un(c, a, f) && ((c.f & (ht | de)) !== 0 ? (R(c, P), d.schedule(c)) : i(d, Ee).add(c));
      if (i(d, G).length > 0) {
        d.apply();
        for (var u of i(d, G))
          E(v = d, O, en).call(v, u, [], []);
        b(d, G, []);
      }
      d.deactivate();
    }
  }
  for (const d of Re)
    i(d, Pe).has(this) && (i(d, Pe).delete(this), i(d, Pe).size === 0 && !E(_ = d, O, Rt).call(_) && (d.activate(), E(h = d, O, Ot).call(h)));
};
let Ve = zt;
function ws(e) {
  var t = ct;
  ct = !0;
  try {
    for (var n; ; ) {
      if (ps(), g === null)
        return (
          /** @type {T} */
          n
        );
      g.flush();
    }
  } finally {
    ct = t;
  }
}
function ys() {
  try {
    as();
  } catch (e) {
    Te(e, $t);
  }
}
let _e = null;
function On(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var r = e[n++];
      if ((r.f & (ae | ee)) === 0 && qt(r) && (_e = /* @__PURE__ */ new Set(), it(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && dr(r), _e?.size > 0)) {
        Le.clear();
        for (const s of _e) {
          if ((s.f & (ae | ee)) !== 0) continue;
          const l = [s];
          let f = s.parent;
          for (; f !== null; )
            _e.has(f) && (_e.delete(f), l.push(f)), f = f.parent;
          for (let o = l.length - 1; o >= 0; o--) {
            const a = l[o];
            (a.f & (ae | ee)) === 0 && it(a);
          }
        }
        _e.clear();
      }
    }
    _e = null;
  }
}
function Zn(e, t, n, r) {
  if (!n.has(e) && (n.add(e), e.reactions !== null))
    for (const s of e.reactions) {
      const l = s.f;
      (l & F) !== 0 ? Zn(
        /** @type {Derived} */
        s,
        t,
        n,
        r
      ) : (l & (ht | de)) !== 0 && (l & P) === 0 && un(s, t, r) && (R(s, P), cn(
        /** @type {Effect} */
        s
      ));
    }
}
function un(e, t, n) {
  const r = n.get(e);
  if (r !== void 0) return r;
  if (e.deps !== null)
    for (const s of e.deps) {
      if (tt.call(t, s))
        return !0;
      if ((s.f & F) !== 0 && un(
        /** @type {Derived} */
        s,
        t,
        n
      ))
        return n.set(
          /** @type {Derived} */
          s,
          !0
        ), !0;
    }
  return n.set(e, !1), !1;
}
function cn(e) {
  g.schedule(e);
}
function Qn(e, t) {
  if (!((e.f & qe) !== 0 && (e.f & C) !== 0)) {
    (e.f & P) !== 0 ? t.d.push(e) : (e.f & ve) !== 0 && t.m.push(e), R(e, C);
    for (var n = e.first; n !== null; )
      Qn(n, t), n = n.next;
  }
}
function Xn(e) {
  R(e, C);
  for (var t = e.first; t !== null; )
    Xn(t), t = t.next;
}
function qs(e) {
  let t = 0, n = Yt(0), r;
  return () => {
    _n() && (x(n), or(() => (t === 0 && (r = qr(() => e(() => dt(n)))), t += 1, () => {
      We(() => {
        t -= 1, t === 0 && (r?.(), r = void 0, dt(n));
      });
    })));
  };
}
var ks = rt | at;
function xs(e, t, n, r) {
  new Es(e, t, n, r);
}
var Z, fn, Q, Fe, z, X, I, J, we, Ie, Se, et, gt, bt, ye, Ut, N, Ss, Ts, As, tn, Dt, Mt, nn, rn;
class Es {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(t, n, r, s) {
    m(this, N);
    /** @type {Boundary | null} */
    re(this, "parent");
    re(this, "is_pending", !1);
    /**
     * API-level transformError transform function. Transforms errors before they reach the `failed` snippet.
     * Inherited from parent boundary, or defaults to identity.
     * @type {(error: unknown) => unknown}
     */
    re(this, "transform_error");
    /** @type {TemplateNode} */
    m(this, Z);
    /** @type {TemplateNode | null} */
    m(this, fn, null);
    /** @type {BoundaryProps} */
    m(this, Q);
    /** @type {((anchor: Node) => void)} */
    m(this, Fe);
    /** @type {Effect} */
    m(this, z);
    /** @type {Effect | null} */
    m(this, X, null);
    /** @type {Effect | null} */
    m(this, I, null);
    /** @type {Effect | null} */
    m(this, J, null);
    /** @type {DocumentFragment | null} */
    m(this, we, null);
    m(this, Ie, 0);
    m(this, Se, 0);
    m(this, et, !1);
    /** @type {Set<Effect>} */
    m(this, gt, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    m(this, bt, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    m(this, ye, null);
    m(this, Ut, qs(() => (b(this, ye, Yt(i(this, Ie))), () => {
      b(this, ye, null);
    })));
    b(this, Z, t), b(this, Q, n), b(this, Fe, (l) => {
      var f = (
        /** @type {Effect} */
        y
      );
      f.b = this, f.f |= Qt, r(l);
    }), this.parent = /** @type {Effect} */
    y.b, this.transform_error = s ?? this.parent?.transform_error ?? ((l) => l), b(this, z, ur(() => {
      E(this, N, tn).call(this);
    }, ks));
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    Kn(t, i(this, gt), i(this, bt));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!i(this, Q).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  update_pending_count(t, n) {
    E(this, N, nn).call(this, t, n), b(this, Ie, i(this, Ie) + t), !(!i(this, ye) || i(this, et)) && (b(this, et, !0), We(() => {
      b(this, et, !1), i(this, ye) && jt(i(this, ye), i(this, Ie));
    }));
  }
  get_effect_pending() {
    return i(this, Ut).call(this), x(
      /** @type {Source<number>} */
      i(this, ye)
    );
  }
  /** @param {unknown} error */
  error(t) {
    if (!i(this, Q).onerror && !i(this, Q).failed)
      throw t;
    g?.is_fork ? (i(this, X) && g.skip_effect(i(this, X)), i(this, I) && g.skip_effect(i(this, I)), i(this, J) && g.skip_effect(i(this, J)), g.on_fork_commit(() => {
      E(this, N, rn).call(this, t);
    })) : E(this, N, rn).call(this, t);
  }
}
Z = new WeakMap(), fn = new WeakMap(), Q = new WeakMap(), Fe = new WeakMap(), z = new WeakMap(), X = new WeakMap(), I = new WeakMap(), J = new WeakMap(), we = new WeakMap(), Ie = new WeakMap(), Se = new WeakMap(), et = new WeakMap(), gt = new WeakMap(), bt = new WeakMap(), ye = new WeakMap(), Ut = new WeakMap(), N = new WeakSet(), Ss = function() {
  try {
    b(this, X, pe(() => i(this, Fe).call(this, i(this, Z))));
  } catch (t) {
    this.error(t);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
Ts = function(t) {
  const n = i(this, Q).failed;
  n && b(this, J, pe(() => {
    n(
      i(this, Z),
      () => t,
      () => () => {
      }
    );
  }));
}, As = function() {
  const t = i(this, Q).pending;
  t && (this.is_pending = !0, b(this, I, pe(() => t(i(this, Z)))), We(() => {
    var n = b(this, we, document.createDocumentFragment()), r = Lt();
    n.append(r), b(this, X, E(this, N, Mt).call(this, () => pe(() => i(this, Fe).call(this, r)))), i(this, Se) === 0 && (i(this, Z).before(n), b(this, we, null), vt(
      /** @type {Effect} */
      i(this, I),
      () => {
        b(this, I, null);
      }
    ), E(this, N, Dt).call(
      this,
      /** @type {Batch} */
      g
    ));
  }));
}, tn = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), b(this, Se, 0), b(this, Ie, 0), b(this, X, pe(() => {
      i(this, Fe).call(this, i(this, Z));
    })), i(this, Se) > 0) {
      var t = b(this, we, document.createDocumentFragment());
      _r(i(this, X), t);
      const n = (
        /** @type {(anchor: Node) => void} */
        i(this, Q).pending
      );
      b(this, I, pe(() => n(i(this, Z))));
    } else
      E(this, N, Dt).call(
        this,
        /** @type {Batch} */
        g
      );
  } catch (n) {
    this.error(n);
  }
}, /**
 * @param {Batch} batch
 */
Dt = function(t) {
  this.is_pending = !1, t.transfer_effects(i(this, gt), i(this, bt));
}, /**
 * @template T
 * @param {() => T} fn
 */
Mt = function(t) {
  var n = y, r = w, s = fe;
  he(i(this, z)), ne(i(this, z)), st(i(this, z).ctx);
  try {
    return Ve.ensure(), t();
  } catch (l) {
    return Jn(l), null;
  } finally {
    he(n), ne(r), st(s);
  }
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 * @param {Batch} batch
 */
nn = function(t, n) {
  var r;
  if (!this.has_pending_snippet()) {
    this.parent && E(r = this.parent, N, nn).call(r, t, n);
    return;
  }
  b(this, Se, i(this, Se) + t), i(this, Se) === 0 && (E(this, N, Dt).call(this, n), i(this, I) && vt(i(this, I), () => {
    b(this, I, null);
  }), i(this, we) && (i(this, Z).before(i(this, we)), b(this, we, null)));
}, /**
 * @param {unknown} error
 */
rn = function(t) {
  i(this, X) && (K(i(this, X)), b(this, X, null)), i(this, I) && (K(i(this, I)), b(this, I, null)), i(this, J) && (K(i(this, J)), b(this, J, null));
  var n = i(this, Q).onerror;
  let r = i(this, Q).failed;
  var s = !1, l = !1;
  const f = () => {
    if (s) {
      _s();
      return;
    }
    s = !0, l && cs(), i(this, J) !== null && vt(i(this, J), () => {
      b(this, J, null);
    }), E(this, N, Mt).call(this, () => {
      E(this, N, tn).call(this);
    });
  }, o = (a) => {
    try {
      l = !0, n?.(a, f), l = !1;
    } catch (u) {
      Te(u, i(this, z) && i(this, z).parent);
    }
    r && b(this, J, E(this, N, Mt).call(this, () => {
      try {
        return pe(() => {
          var u = (
            /** @type {Effect} */
            y
          );
          u.b = this, u.f |= Qt, r(
            i(this, Z),
            () => a,
            () => f
          );
        });
      } catch (u) {
        return Te(
          u,
          /** @type {Effect} */
          i(this, z).parent
        ), null;
      }
    }));
  };
  We(() => {
    var a;
    try {
      a = this.transform_error(t);
    } catch (u) {
      Te(u, i(this, z) && i(this, z).parent);
      return;
    }
    a !== null && typeof a == "object" && typeof /** @type {any} */
    a.then == "function" ? a.then(
      o,
      /** @param {unknown} e */
      (u) => Te(u, i(this, z) && i(this, z).parent)
    ) : o(a);
  });
};
function Ns(e, t, n, r) {
  const s = Os;
  var l = e.filter((h) => !h.settled);
  if (n.length === 0 && l.length === 0) {
    r(t.map(s));
    return;
  }
  var f = (
    /** @type {Effect} */
    y
  ), o = Rs(), a = l.length === 1 ? l[0].promise : l.length > 1 ? Promise.all(l.map((h) => h.promise)) : null;
  function u(h) {
    o();
    try {
      r(h);
    } catch (d) {
      (f.f & ae) === 0 && Te(d, f);
    }
    It();
  }
  if (n.length === 0) {
    a.then(() => u(t.map(s)));
    return;
  }
  var v = $n();
  function _() {
    Promise.all(n.map((h) => /* @__PURE__ */ Cs(h))).then((h) => u([...t.map(s), ...h])).catch((h) => Te(h, f)).finally(() => v());
  }
  a ? a.then(() => {
    o(), _(), It();
  }) : _();
}
function Rs() {
  var e = (
    /** @type {Effect} */
    y
  ), t = w, n = fe, r = (
    /** @type {Batch} */
    g
  );
  return function(l = !0) {
    he(e), ne(t), st(n), l && (e.f & ae) === 0 && (r?.activate(), r?.apply());
  };
}
function It(e = !0) {
  he(null), ne(null), st(null), e && g?.deactivate();
}
function $n() {
  var e = (
    /** @type {Effect} */
    y
  ), t = (
    /** @type {Boundary} */
    e.b
  ), n = (
    /** @type {Batch} */
    g
  ), r = t.is_rendered();
  return t.update_pending_count(1, n), n.increment(r, e), (s = !1) => {
    t.update_pending_count(-1, n), n.decrement(r, e, s);
  };
}
// @__NO_SIDE_EFFECTS__
function Os(e) {
  var t = F | P;
  return y !== null && (y.f |= at), {
    ctx: fe,
    deps: null,
    effects: null,
    equals: Un,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      D
    ),
    wv: 0,
    parent: y,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function Cs(e, t, n) {
  let r = (
    /** @type {Effect | null} */
    y
  );
  r === null && ls();
  var s = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), l = Yt(
    /** @type {V} */
    D
  ), f = !w, o = /* @__PURE__ */ new Map();
  return Gs(() => {
    var a = (
      /** @type {Effect} */
      y
    ), u = Ln();
    s = u.promise;
    try {
      Promise.resolve(e()).then(u.resolve, u.reject).finally(It);
    } catch (d) {
      u.reject(d), It();
    }
    var v = (
      /** @type {Batch} */
      g
    );
    if (f) {
      if ((a.f & lt) !== 0)
        var _ = $n();
      if (
        /** @type {Boundary} */
        r.b.is_rendered()
      )
        o.get(v)?.reject(me), o.delete(v);
      else {
        for (const d of o.values())
          d.reject(me);
        o.clear();
      }
      o.set(v, u);
    }
    const h = (d, c = void 0) => {
      if (_) {
        var k = c === me;
        _(k);
      }
      if (!(c === me || (a.f & ae) !== 0)) {
        if (v.activate(), c)
          l.f |= Ae, jt(l, c);
        else {
          (l.f & Ae) !== 0 && (l.f ^= Ae), jt(l, d);
          for (const [q, V] of o) {
            if (o.delete(q), q === v) break;
            V.reject(me);
          }
        }
        v.deactivate();
      }
    };
    u.promise.then(h, (d) => h(null, d || "unknown"));
  }), Us(() => {
    for (const a of o.values())
      a.reject(me);
  }), new Promise((a) => {
    function u(v) {
      function _() {
        v === s ? a(l) : u(s);
      }
      v.then(_, _);
    }
    u(s);
  });
}
function Ds(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      K(
        /** @type {Effect} */
        t[n]
      );
  }
}
function dn(e) {
  var t, n = y, r = e.parent;
  if (!Be && r !== null && (r.f & (ae | ee)) !== 0)
    return hs(), e.v;
  he(r);
  try {
    e.f &= ~Ue, Ds(e), t = br(e);
  } finally {
    he(n);
  }
  return t;
}
function er(e) {
  var t = dn(e);
  if (!e.equals(t) && (e.wv = mr(), (!g?.is_fork || e.deps === null) && (g !== null ? g.capture(e, t, !0) : e.v = t, e.deps === null))) {
    R(e, C);
    return;
  }
  Be || (ie !== null ? (_n() || g?.is_fork) && ie.set(e, t) : on(e));
}
function Ms(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      (t.teardown || t.ac) && (t.teardown?.(), t.ac?.abort(me), t.teardown = ns, t.ac = null, _t(t, 0), pn(t));
}
function tr(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      t.teardown && it(t);
}
let sn = /* @__PURE__ */ new Set();
const Le = /* @__PURE__ */ new Map();
let nr = !1;
function Yt(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Un,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function j(e, t) {
  const n = Yt(e);
  return Ws(n), n;
}
function M(e, t, n = !1) {
  w !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!le || (w.f & Xt) !== 0) && Yn() && (w.f & (F | de | ht | Xt)) !== 0 && (te === null || !tt.call(te, e)) && us();
  let r = n ? Ke(t) : t;
  return jt(e, r, Nt);
}
function jt(e, t, n = null) {
  if (!e.equals(t)) {
    Le.set(e, Be ? t : e.v);
    var r = Ve.ensure();
    if (r.capture(e, t), (e.f & F) !== 0) {
      const s = (
        /** @type {Derived} */
        e
      );
      (e.f & P) !== 0 && dn(s), ie === null && on(s);
    }
    e.wv = mr(), rr(e, P, n), y !== null && (y.f & C) !== 0 && (y.f & (qe | Ne)) === 0 && (W === null ? Zs([e]) : W.push(e)), !r.is_fork && sn.size > 0 && !nr && Ps();
  }
  return t;
}
function Ps() {
  nr = !1;
  for (const e of sn)
    (e.f & C) !== 0 && R(e, ve), qt(e) && it(e);
  sn.clear();
}
function dt(e) {
  M(e, e.v + 1);
}
function rr(e, t, n) {
  var r = e.reactions;
  if (r !== null)
    for (var s = r.length, l = 0; l < s; l++) {
      var f = r[l], o = f.f, a = (o & P) === 0;
      if (a && R(f, t), (o & F) !== 0) {
        var u = (
          /** @type {Derived} */
          f
        );
        ie?.delete(u), (o & Ue) === 0 && (o & $ && (y === null || (y.f & Ft) === 0) && (f.f |= Ue), rr(u, ve, n));
      } else if (a) {
        var v = (
          /** @type {Effect} */
          f
        );
        (o & de) !== 0 && _e !== null && _e.add(v), n !== null ? n.push(v) : cn(v);
      }
    }
}
function Ke(e) {
  if (typeof e != "object" || e === null || Ht in e)
    return e;
  const t = ts(e);
  if (t !== $r && t !== es)
    return e;
  var n = /* @__PURE__ */ new Map(), r = Wr(e), s = /* @__PURE__ */ j(0), l = ze, f = (o) => {
    if (ze === l)
      return o();
    var a = w, u = ze;
    ne(null), Pn(l);
    var v = o();
    return ne(a), Pn(u), v;
  };
  return r && n.set("length", /* @__PURE__ */ j(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(o, a, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && fs();
        var v = n.get(a);
        return v === void 0 ? f(() => {
          var _ = /* @__PURE__ */ j(u.value);
          return n.set(a, _), _;
        }) : M(v, u.value, !0), !0;
      },
      deleteProperty(o, a) {
        var u = n.get(a);
        if (u === void 0) {
          if (a in o) {
            const v = f(() => /* @__PURE__ */ j(D));
            n.set(a, v), dt(s);
          }
        } else
          M(u, D), dt(s);
        return !0;
      },
      get(o, a, u) {
        if (a === Ht)
          return e;
        var v = n.get(a), _ = a in o;
        if (v === void 0 && (!_ || ut(o, a)?.writable) && (v = f(() => {
          var d = Ke(_ ? o[a] : D), c = /* @__PURE__ */ j(d);
          return c;
        }), n.set(a, v)), v !== void 0) {
          var h = x(v);
          return h === D ? void 0 : h;
        }
        return Reflect.get(o, a, u);
      },
      getOwnPropertyDescriptor(o, a) {
        var u = Reflect.getOwnPropertyDescriptor(o, a);
        if (u && "value" in u) {
          var v = n.get(a);
          v && (u.value = x(v));
        } else if (u === void 0) {
          var _ = n.get(a), h = _?.v;
          if (_ !== void 0 && h !== D)
            return {
              enumerable: !0,
              configurable: !0,
              value: h,
              writable: !0
            };
        }
        return u;
      },
      has(o, a) {
        if (a === Ht)
          return !0;
        var u = n.get(a), v = u !== void 0 && u.v !== D || Reflect.has(o, a);
        if (u !== void 0 || y !== null && (!v || ut(o, a)?.writable)) {
          u === void 0 && (u = f(() => {
            var h = v ? Ke(o[a]) : D, d = /* @__PURE__ */ j(h);
            return d;
          }), n.set(a, u));
          var _ = x(u);
          if (_ === D)
            return !1;
        }
        return v;
      },
      set(o, a, u, v) {
        var _ = n.get(a), h = a in o;
        if (r && a === "length")
          for (var d = u; d < /** @type {Source<number>} */
          _.v; d += 1) {
            var c = n.get(d + "");
            c !== void 0 ? M(c, D) : d in o && (c = f(() => /* @__PURE__ */ j(D)), n.set(d + "", c));
          }
        if (_ === void 0)
          (!h || ut(o, a)?.writable) && (_ = f(() => /* @__PURE__ */ j(void 0)), M(_, Ke(u)), n.set(a, _));
        else {
          h = _.v !== D;
          var k = f(() => Ke(u));
          M(_, k);
        }
        var q = Reflect.getOwnPropertyDescriptor(o, a);
        if (q?.set && q.set.call(v, u), !h) {
          if (r && typeof a == "string") {
            var V = (
              /** @type {Source<number>} */
              n.get("length")
            ), xe = Number(a);
            Number.isInteger(xe) && xe >= V.v && M(V, xe + 1);
          }
          dt(s);
        }
        return !0;
      },
      ownKeys(o) {
        x(s);
        var a = Reflect.ownKeys(o).filter((_) => {
          var h = n.get(_);
          return h === void 0 || h.v !== D;
        });
        for (var [u, v] of n)
          v.v !== D && !(u in o) && a.push(u);
        return a;
      },
      setPrototypeOf() {
        os();
      }
    }
  );
}
var Cn, sr, ir, lr;
function Fs() {
  if (Cn === void 0) {
    Cn = window, sr = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    ir = ut(t, "firstChild").get, lr = ut(t, "nextSibling").get, An(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), An(n) && (n.__t = void 0);
  }
}
function Lt(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function ar(e) {
  return (
    /** @type {TemplateNode | null} */
    ir.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function vn(e) {
  return (
    /** @type {TemplateNode | null} */
    lr.call(e)
  );
}
function S(e, t) {
  return /* @__PURE__ */ ar(e);
}
function A(e, t = 1, n = !1) {
  let r = e;
  for (; t--; )
    r = /** @type {TemplateNode} */
    /* @__PURE__ */ vn(r);
  return r;
}
function Is() {
  return !1;
}
function fr(e, t, n) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElementNS(vs, e, void 0)
  );
}
let Dn = !1;
function js() {
  Dn || (Dn = !0, document.addEventListener(
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
function hn(e) {
  var t = w, n = y;
  ne(null), he(null);
  try {
    return e();
  } finally {
    ne(t), he(n);
  }
}
function Ls(e, t, n, r = n) {
  e.addEventListener(t, () => hn(n));
  const s = e.__on_r;
  s ? e.__on_r = () => {
    s(), r(!0);
  } : e.__on_r = () => r(!0), js();
}
function zs(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function ke(e, t) {
  var n = y;
  n !== null && (n.f & ee) !== 0 && (e |= ee);
  var r = {
    ctx: fe,
    deps: null,
    nodes: null,
    f: e | P | $,
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
  g?.register_created_effect(r);
  var s = r;
  if ((e & nt) !== 0)
    He !== null ? He.push(r) : Ve.ensure().schedule(r);
  else if (t !== null) {
    try {
      it(r);
    } catch (f) {
      throw K(r), f;
    }
    s.deps === null && s.teardown === null && s.nodes === null && s.first === s.last && // either `null`, or a singular child
    (s.f & at) === 0 && (s = s.first, (e & de) !== 0 && (e & rt) !== 0 && s !== null && (s.f |= rt));
  }
  if (s !== null && (s.parent = n, n !== null && zs(s, n), w !== null && (w.f & F) !== 0 && (e & Ne) === 0)) {
    var l = (
      /** @type {Derived} */
      w
    );
    (l.effects ?? (l.effects = [])).push(s);
  }
  return r;
}
function _n() {
  return w !== null && !le;
}
function Us(e) {
  const t = ke(Bt, null);
  return R(t, C), t.teardown = e, t;
}
function Vs(e) {
  return ke(nt | is, e);
}
function Bs(e) {
  Ve.ensure();
  const t = ke(Ne | at, e);
  return (n = {}) => new Promise((r) => {
    n.outro ? vt(t, () => {
      K(t), r(void 0);
    }) : (K(t), r(void 0));
  });
}
function Ys(e) {
  return ke(nt, e);
}
function Gs(e) {
  return ke(ht | at, e);
}
function or(e, t = 0) {
  return ke(Bt | t, e);
}
function Ge(e, t = [], n = [], r = []) {
  Ns(r, t, n, (s) => {
    ke(Bt, () => e(...s.map(x)));
  });
}
function ur(e, t = 0) {
  var n = ke(de | t, e);
  return n;
}
function pe(e) {
  return ke(qe | at, e);
}
function cr(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = Be, r = w;
    Mn(!0), ne(null);
    try {
      t.call(null);
    } finally {
      Mn(n), ne(r);
    }
  }
}
function pn(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const s = n.ac;
    s !== null && hn(() => {
      s.abort(me);
    });
    var r = n.next;
    (n.f & Ne) !== 0 ? n.parent = null : K(n, t), n = r;
  }
}
function Js(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & qe) === 0 && K(t), t = n;
  }
}
function K(e, t = !0) {
  var n = !1;
  (t || (e.f & ss) !== 0) && e.nodes !== null && e.nodes.end !== null && (Hs(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), n = !0), R(e, Nn), pn(e, t && !n), _t(e, 0);
  var r = e.nodes && e.nodes.t;
  if (r !== null)
    for (const l of r)
      l.stop();
  cr(e), e.f ^= Nn, e.f |= ae;
  var s = e.parent;
  s !== null && s.first !== null && dr(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function Hs(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : /* @__PURE__ */ vn(e);
    e.remove(), e = n;
  }
}
function dr(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function vt(e, t, n = !0) {
  var r = [];
  vr(e, r, !0);
  var s = () => {
    n && K(e), t && t();
  }, l = r.length;
  if (l > 0) {
    var f = () => --l || s();
    for (var o of r)
      o.out(f);
  } else
    s();
}
function vr(e, t, n) {
  if ((e.f & ee) === 0) {
    e.f ^= ee;
    var r = e.nodes && e.nodes.t;
    if (r !== null)
      for (const o of r)
        (o.is_global || n) && t.push(o);
    for (var s = e.first; s !== null; ) {
      var l = s.next;
      if ((s.f & Ne) === 0) {
        var f = (s.f & rt) !== 0 || // If this is a branch effect without a block effect parent,
        // it means the parent block effect was pruned. In that case,
        // transparency information was transferred to the branch effect.
        (s.f & qe) !== 0 && (e.f & de) !== 0;
        vr(s, t, f ? n : !1);
      }
      s = l;
    }
  }
}
function Ks(e) {
  hr(e, !0);
}
function hr(e, t) {
  if ((e.f & ee) !== 0) {
    e.f ^= ee, (e.f & C) === 0 && (R(e, P), Ve.ensure().schedule(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, s = (n.f & rt) !== 0 || (n.f & qe) !== 0;
      hr(n, s ? t : !1), n = r;
    }
    var l = e.nodes && e.nodes.t;
    if (l !== null)
      for (const f of l)
        (f.is_global || t) && f.in();
  }
}
function _r(e, t) {
  if (e.nodes)
    for (var n = e.nodes.start, r = e.nodes.end; n !== null; ) {
      var s = n === r ? null : /* @__PURE__ */ vn(n);
      t.append(n), n = s;
    }
}
let Pt = !1, Be = !1;
function Mn(e) {
  Be = e;
}
let w = null, le = !1;
function ne(e) {
  w = e;
}
let y = null;
function he(e) {
  y = e;
}
let te = null;
function Ws(e) {
  w !== null && (te === null ? te = [e] : te.push(e));
}
let U = null, Y = 0, W = null;
function Zs(e) {
  W = e;
}
let pr = 1, Ce = 0, ze = Ce;
function Pn(e) {
  ze = e;
}
function mr() {
  return ++pr;
}
function qt(e) {
  var t = e.f;
  if ((t & P) !== 0)
    return !0;
  if (t & F && (e.f &= ~Ue), (t & ve) !== 0) {
    for (var n = (
      /** @type {Value[]} */
      e.deps
    ), r = n.length, s = 0; s < r; s++) {
      var l = n[s];
      if (qt(
        /** @type {Derived} */
        l
      ) && er(
        /** @type {Derived} */
        l
      ), l.wv > e.wv)
        return !0;
    }
    (t & $) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    ie === null && R(e, C);
  }
  return !1;
}
function gr(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null && !(te !== null && tt.call(te, e)))
    for (var s = 0; s < r.length; s++) {
      var l = r[s];
      (l.f & F) !== 0 ? gr(
        /** @type {Derived} */
        l,
        t,
        !1
      ) : t === l && (n ? R(l, P) : (l.f & C) !== 0 && R(l, ve), cn(
        /** @type {Effect} */
        l
      ));
    }
}
function br(e) {
  var k;
  var t = U, n = Y, r = W, s = w, l = te, f = fe, o = le, a = ze, u = e.f;
  U = /** @type {null | Value[]} */
  null, Y = 0, W = null, w = (u & (qe | Ne)) === 0 ? e : null, te = null, st(e.ctx), le = !1, ze = ++Ce, e.ac !== null && (hn(() => {
    e.ac.abort(me);
  }), e.ac = null);
  try {
    e.f |= Ft;
    var v = (
      /** @type {Function} */
      e.fn
    ), _ = v();
    e.f |= lt;
    var h = e.deps, d = g?.is_fork;
    if (U !== null) {
      var c;
      if (d || _t(e, Y), h !== null && Y > 0)
        for (h.length = Y + U.length, c = 0; c < U.length; c++)
          h[Y + c] = U[c];
      else
        e.deps = h = U;
      if (_n() && (e.f & $) !== 0)
        for (c = Y; c < h.length; c++)
          ((k = h[c]).reactions ?? (k.reactions = [])).push(e);
    } else !d && h !== null && Y < h.length && (_t(e, Y), h.length = Y);
    if (Yn() && W !== null && !le && h !== null && (e.f & (F | ve | P)) === 0)
      for (c = 0; c < /** @type {Source[]} */
      W.length; c++)
        gr(
          W[c],
          /** @type {Effect} */
          e
        );
    if (s !== null && s !== e) {
      if (Ce++, s.deps !== null)
        for (let q = 0; q < n; q += 1)
          s.deps[q].rv = Ce;
      if (t !== null)
        for (const q of t)
          q.rv = Ce;
      W !== null && (r === null ? r = W : r.push(.../** @type {Source[]} */
      W));
    }
    return (e.f & Ae) !== 0 && (e.f ^= Ae), _;
  } catch (q) {
    return Jn(q);
  } finally {
    e.f ^= Ft, U = t, Y = n, W = r, w = s, te = l, st(f), le = o, ze = a;
  }
}
function Qs(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = Zr.call(n, e);
    if (r !== -1) {
      var s = n.length - 1;
      s === 0 ? n = t.reactions = null : (n[r] = n[s], n.pop());
    }
  }
  if (n === null && (t.f & F) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (U === null || !tt.call(U, t))) {
    var l = (
      /** @type {Derived} */
      t
    );
    (l.f & $) !== 0 && (l.f ^= $, l.f &= ~Ue), l.v !== D && on(l), Ms(l), _t(l, 0);
  }
}
function _t(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      Qs(e, n[r]);
}
function it(e) {
  var t = e.f;
  if ((t & ae) === 0) {
    R(e, C);
    var n = y, r = Pt;
    y = e, Pt = !0;
    try {
      (t & (de | zn)) !== 0 ? Js(e) : pn(e), cr(e);
      var s = br(e);
      e.teardown = typeof s == "function" ? s : null, e.wv = pr;
      var l;
    } finally {
      Pt = r, y = n;
    }
  }
}
async function Xs() {
  await Promise.resolve(), ws();
}
function x(e) {
  var t = e.f, n = (t & F) !== 0;
  if (w !== null && !le) {
    var r = y !== null && (y.f & ae) !== 0;
    if (!r && (te === null || !tt.call(te, e))) {
      var s = w.deps;
      if ((w.f & Ft) !== 0)
        e.rv < Ce && (e.rv = Ce, U === null && s !== null && s[Y] === e ? Y++ : U === null ? U = [e] : U.push(e));
      else {
        (w.deps ?? (w.deps = [])).push(e);
        var l = e.reactions;
        l === null ? e.reactions = [w] : tt.call(l, w) || l.push(w);
      }
    }
  }
  if (Be && Le.has(e))
    return Le.get(e);
  if (n) {
    var f = (
      /** @type {Derived} */
      e
    );
    if (Be) {
      var o = f.v;
      return ((f.f & C) === 0 && f.reactions !== null || yr(f)) && (o = dn(f)), Le.set(f, o), o;
    }
    var a = (f.f & $) === 0 && !le && w !== null && (Pt || (w.f & $) !== 0), u = (f.f & lt) === 0;
    qt(f) && (a && (f.f |= $), er(f)), a && !u && (tr(f), wr(f));
  }
  if (ie?.has(e))
    return ie.get(e);
  if ((e.f & Ae) !== 0)
    throw e.v;
  return e.v;
}
function wr(e) {
  if (e.f |= $, e.deps !== null)
    for (const t of e.deps)
      (t.reactions ?? (t.reactions = [])).push(e), (t.f & F) !== 0 && (t.f & $) === 0 && (tr(
        /** @type {Derived} */
        t
      ), wr(
        /** @type {Derived} */
        t
      ));
}
function yr(e) {
  if (e.v === D) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (Le.has(t) || (t.f & F) !== 0 && yr(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function qr(e) {
  var t = le;
  try {
    return le = !0, e();
  } finally {
    le = t;
  }
}
const $s = ["touchstart", "touchmove"];
function ei(e) {
  return $s.includes(e);
}
const De = Symbol("events"), kr = /* @__PURE__ */ new Set(), ln = /* @__PURE__ */ new Set();
function St(e, t, n) {
  (t[De] ?? (t[De] = {}))[e] = n;
}
function ti(e) {
  for (var t = 0; t < e.length; t++)
    kr.add(e[t]);
  for (var n of ln)
    n(e);
}
let Fn = null;
function In(e) {
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), r = e.type, s = e.composedPath?.() || [], l = (
    /** @type {null | Element} */
    s[0] || e.target
  );
  Fn = e;
  var f = 0, o = Fn === e && e[De];
  if (o) {
    var a = s.indexOf(o);
    if (a !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e[De] = t;
      return;
    }
    var u = s.indexOf(t);
    if (u === -1)
      return;
    a <= u && (f = a);
  }
  if (l = /** @type {Element} */
  s[f] || e.target, l !== t) {
    Xr(e, "currentTarget", {
      configurable: !0,
      get() {
        return l || n;
      }
    });
    var v = w, _ = y;
    ne(null), he(null);
    try {
      for (var h, d = []; l !== null; ) {
        var c = l.assignedSlot || l.parentNode || /** @type {any} */
        l.host || null;
        try {
          var k = l[De]?.[r];
          k != null && (!/** @type {any} */
          l.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === l) && k.call(l, e);
        } catch (q) {
          h ? d.push(q) : h = q;
        }
        if (e.cancelBubble || c === t || c === null)
          break;
        l = c;
      }
      if (h) {
        for (let q of d)
          queueMicrotask(() => {
            throw q;
          });
        throw h;
      }
    } finally {
      e[De] = t, delete e.currentTarget, ne(v), he(_);
    }
  }
}
const ni = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (e) => e
  })
);
function ri(e) {
  return (
    /** @type {string} */
    ni?.createHTML(e) ?? e
  );
}
function si(e) {
  var t = fr("template");
  return t.innerHTML = ri(e.replaceAll("<!>", "<!---->")), t.content;
}
function ii(e, t) {
  var n = (
    /** @type {Effect} */
    y
  );
  n.nodes === null && (n.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function ft(e, t) {
  var n = (t & ds) !== 0, r, s = !e.startsWith("<!>");
  return () => {
    r === void 0 && (r = si(s ? e : "<!>" + e), r = /** @type {TemplateNode} */
    /* @__PURE__ */ ar(r));
    var l = (
      /** @type {TemplateNode} */
      n || sr ? document.importNode(r, !0) : r.cloneNode(!0)
    );
    return ii(l, l), l;
  };
}
function Je(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function B(e, t) {
  var n = t == null ? "" : typeof t == "object" ? `${t}` : t;
  n !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = n, e.nodeValue = `${n}`);
}
function li(e, t) {
  return ai(e, t);
}
const Tt = /* @__PURE__ */ new Map();
function ai(e, { target: t, anchor: n, props: r = {}, events: s, context: l, intro: f = !0, transformError: o }) {
  Fs();
  var a = void 0, u = Bs(() => {
    var v = n ?? t.appendChild(Lt());
    xs(
      /** @type {TemplateNode} */
      v,
      {
        pending: () => {
        }
      },
      (d) => {
        Vn({});
        var c = (
          /** @type {ComponentContext} */
          fe
        );
        l && (c.c = l), s && (r.$$events = s), a = e(d, r) || {}, Bn();
      },
      o
    );
    var _ = /* @__PURE__ */ new Set(), h = (d) => {
      for (var c = 0; c < d.length; c++) {
        var k = d[c];
        if (!_.has(k)) {
          _.add(k);
          var q = ei(k);
          for (const Ye of [t, document]) {
            var V = Tt.get(Ye);
            V === void 0 && (V = /* @__PURE__ */ new Map(), Tt.set(Ye, V));
            var xe = V.get(k);
            xe === void 0 ? (Ye.addEventListener(k, In, { passive: q }), V.set(k, 1)) : V.set(k, xe + 1);
          }
        }
      }
    };
    return h(Qr(kr)), ln.add(h), () => {
      for (var d of _)
        for (const q of [t, document]) {
          var c = (
            /** @type {Map<string, number>} */
            Tt.get(q)
          ), k = (
            /** @type {number} */
            c.get(d)
          );
          --k == 0 ? (q.removeEventListener(d, In), c.delete(d), c.size === 0 && Tt.delete(q)) : c.set(d, k);
        }
      ln.delete(h), v !== n && v.parentNode?.removeChild(v);
    };
  });
  return an.set(a, u), a;
}
let an = /* @__PURE__ */ new WeakMap();
function fi(e, t) {
  const n = an.get(e);
  return n ? (an.delete(e), n(t)) : Promise.resolve();
}
var se, ce, H, je, wt, yt, Vt;
class oi {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, n = !0) {
    /** @type {TemplateNode} */
    re(this, "anchor");
    /** @type {Map<Batch, Key>} */
    m(this, se, /* @__PURE__ */ new Map());
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
    m(this, ce, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    m(this, H, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    m(this, je, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    m(this, wt, !0);
    /**
     * @param {Batch} batch
     */
    m(this, yt, (t) => {
      if (i(this, se).has(t)) {
        var n = (
          /** @type {Key} */
          i(this, se).get(t)
        ), r = i(this, ce).get(n);
        if (r)
          Ks(r), i(this, je).delete(n);
        else {
          var s = i(this, H).get(n);
          s && (i(this, ce).set(n, s.effect), i(this, H).delete(n), s.fragment.lastChild.remove(), this.anchor.before(s.fragment), r = s.effect);
        }
        for (const [l, f] of i(this, se)) {
          if (i(this, se).delete(l), l === t)
            break;
          const o = i(this, H).get(f);
          o && (K(o.effect), i(this, H).delete(f));
        }
        for (const [l, f] of i(this, ce)) {
          if (l === n || i(this, je).has(l)) continue;
          const o = () => {
            if (Array.from(i(this, se).values()).includes(l)) {
              var u = document.createDocumentFragment();
              _r(f, u), u.append(Lt()), i(this, H).set(l, { effect: f, fragment: u });
            } else
              K(f);
            i(this, je).delete(l), i(this, ce).delete(l);
          };
          i(this, wt) || !r ? (i(this, je).add(l), vt(f, o, !1)) : o();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    m(this, Vt, (t) => {
      i(this, se).delete(t);
      const n = Array.from(i(this, se).values());
      for (const [r, s] of i(this, H))
        n.includes(r) || (K(s.effect), i(this, H).delete(r));
    });
    this.anchor = t, b(this, wt, n);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, n) {
    var r = (
      /** @type {Batch} */
      g
    ), s = Is();
    if (n && !i(this, ce).has(t) && !i(this, H).has(t))
      if (s) {
        var l = document.createDocumentFragment(), f = Lt();
        l.append(f), i(this, H).set(t, {
          effect: pe(() => n(f)),
          fragment: l
        });
      } else
        i(this, ce).set(
          t,
          pe(() => n(this.anchor))
        );
    if (i(this, se).set(r, t), s) {
      for (const [o, a] of i(this, ce))
        o === t ? r.unskip_effect(a) : r.skip_effect(a);
      for (const [o, a] of i(this, H))
        o === t ? r.unskip_effect(a.effect) : r.skip_effect(a.effect);
      r.oncommit(i(this, yt)), r.ondiscard(i(this, Vt));
    } else
      i(this, yt).call(this, r);
  }
}
se = new WeakMap(), ce = new WeakMap(), H = new WeakMap(), je = new WeakMap(), wt = new WeakMap(), yt = new WeakMap(), Vt = new WeakMap();
function ot(e, t, n = !1) {
  var r = new oi(e), s = n ? rt : 0;
  function l(f, o) {
    r.ensure(f, o);
  }
  ur(() => {
    var f = !1;
    t((o, a = 0) => {
      f = !0, l(a, o);
    }), f || l(-1, null);
  }, s);
}
function ui(e, t) {
  Ys(() => {
    var n = e.getRootNode(), r = (
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
    if (!r.querySelector("#" + t.hash)) {
      const s = fr("style");
      s.id = t.hash, s.textContent = t.code, r.appendChild(s);
    }
  });
}
function ci(e, t, n = t) {
  var r = /* @__PURE__ */ new WeakSet();
  Ls(e, "input", async (s) => {
    var l = s ? e.defaultValue : e.value;
    if (l = Wt(e) ? Zt(l) : l, n(l), g !== null && r.add(g), await Xs(), l !== (l = t())) {
      var f = e.selectionStart, o = e.selectionEnd, a = e.value.length;
      if (e.value = l ?? "", o !== null) {
        var u = e.value.length;
        f === o && o === a && u > a ? (e.selectionStart = u, e.selectionEnd = u) : (e.selectionStart = f, e.selectionEnd = Math.min(o, u));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  qr(t) == null && e.value && (n(Wt(e) ? Zt(e.value) : e.value), g !== null && r.add(g)), or(() => {
    var s = t();
    if (e === document.activeElement) {
      var l = (
        /** @type {Batch} */
        g
      );
      if (r.has(l))
        return;
    }
    Wt(e) && s === Zt(e.value) || e.type === "date" && !s && !e.value || s !== e.value && (e.value = s ?? "");
  });
}
function Wt(e) {
  var t = e.type;
  return t === "number" || t === "range";
}
function Zt(e) {
  return e === "" ? null : +e;
}
function At(e, t, n, r) {
  var s = (
    /** @type {V} */
    r
  ), l = !0, f = () => (l && (l = !1, s = /** @type {V} */
  r), s), o;
  o = /** @type {V} */
  e[t], o === void 0 && r !== void 0 && (o = f());
  var a;
  return a = () => {
    var u = (
      /** @type {V} */
      e[t]
    );
    return u === void 0 ? f() : (l = !0, u);
  }, a;
}
const di = "5";
var jn;
typeof window < "u" && ((jn = window.__svelte ?? (window.__svelte = {})).v ?? (jn.v = /* @__PURE__ */ new Set())).add(di);
var vi = /* @__PURE__ */ ft('<div class="error svelte-qiq0ml"> </div>'), hi = /* @__PURE__ */ ft('<pre class="output svelte-qiq0ml"> </pre>'), _i = /* @__PURE__ */ ft('<pre class="output svelte-qiq0ml"> </pre>'), pi = /* @__PURE__ */ ft('<pre class="output svelte-qiq0ml"> </pre>'), mi = /* @__PURE__ */ ft('<pre class="output svelte-qiq0ml"> </pre>'), gi = /* @__PURE__ */ ft('<div class="rt-tb svelte-qiq0ml"><div class="header svelte-qiq0ml"><h2 class="svelte-qiq0ml">Test Bench</h2> <span class="badge svelte-qiq0ml"> </span></div> <!> <div class="card svelte-qiq0ml"><h3 class="svelte-qiq0ml">Greet</h3> <div class="row svelte-qiq0ml"><input type="text" placeholder="Name" class="svelte-qiq0ml"/> <button class="svelte-qiq0ml"> </button></div> <!></div> <div class="card svelte-qiq0ml"><h3 class="svelte-qiq0ml">Extension Async Call</h3> <button class="svelte-qiq0ml"> </button> <!></div> <div class="card svelte-qiq0ml"><h3 class="svelte-qiq0ml">Universe</h3> <button class="svelte-qiq0ml"> </button> <!></div> <div class="card svelte-qiq0ml"><h3 class="svelte-qiq0ml">Snapshots</h3> <button class="svelte-qiq0ml"> </button> <!></div> <div class="card svelte-qiq0ml"><h3 class="svelte-qiq0ml">Context</h3> <div class="kv svelte-qiq0ml"><span class="k svelte-qiq0ml">Extension ID</span><span class="v svelte-qiq0ml"> </span></div> <div class="kv svelte-qiq0ml"><span class="k svelte-qiq0ml">Principal</span><span class="v mono svelte-qiq0ml"> </span></div> <div class="kv svelte-qiq0ml"><span class="k svelte-qiq0ml">Authenticated</span><span class="v svelte-qiq0ml"> </span></div></div></div>');
const bi = {
  hash: "svelte-qiq0ml",
  code: ".rt-tb.svelte-qiq0ml {font-family:system-ui, -apple-system, sans-serif;max-width:640px;margin:0 auto;padding:1.5rem;}.header.svelte-qiq0ml {display:flex;align-items:center;gap:0.75rem;margin-bottom:1.5rem;}.header.svelte-qiq0ml h2:where(.svelte-qiq0ml) {margin:0;font-size:1.5rem;}.badge.svelte-qiq0ml {background:#e0e7ff;color:#3730a3;padding:0.15rem 0.5rem;border-radius:9999px;font-size:0.75rem;}.card.svelte-qiq0ml {background:#fff;border:1px solid #e5e7eb;border-radius:0.75rem;padding:1.25rem;margin-bottom:1rem;}.card.svelte-qiq0ml h3:where(.svelte-qiq0ml) {margin:0 0 0.75rem;font-size:1rem;}.row.svelte-qiq0ml {display:flex;gap:0.5rem;}input.svelte-qiq0ml {flex:1;padding:0.5rem 0.75rem;border:1px solid #d1d5db;border-radius:0.5rem;font-size:0.875rem;}button.svelte-qiq0ml {padding:0.5rem 1rem;background:#4f46e5;color:#fff;border:none;border-radius:0.5rem;cursor:pointer;font-size:0.8rem;white-space:nowrap;}button.svelte-qiq0ml:hover:not(:disabled) {background:#4338ca;}button.svelte-qiq0ml:disabled {opacity:0.5;cursor:not-allowed;}.output.svelte-qiq0ml {background:#f9fafb;border:1px solid #e5e7eb;border-radius:0.5rem;padding:0.75rem;margin-top:0.75rem;font-size:0.75rem;font-family:ui-monospace, monospace;overflow-x:auto;white-space:pre-wrap;word-break:break-word;max-height:300px;overflow-y:auto;}.error.svelte-qiq0ml {background:#fef2f2;color:#991b1b;border:1px solid #fecaca;padding:0.75rem;border-radius:0.5rem;margin-bottom:1rem;font-size:0.875rem;}.kv.svelte-qiq0ml {display:flex;justify-content:space-between;padding:0.35rem 0;border-bottom:1px solid #f3f4f6;font-size:0.85rem;}.k.svelte-qiq0ml {color:#6b7280;}.v.svelte-qiq0ml {font-weight:500;}.mono.svelte-qiq0ml {font-family:ui-monospace, monospace;font-size:0.75rem;}"
};
function wi(e, t) {
  Vn(t, !0), ui(e, bi);
  let n = At(t, "extensionId", 3, "test_bench"), r = At(t, "version", 3, ""), s = At(t, "principal", 3, ""), l = At(t, "isAuthenticated", 3, !0), f = /* @__PURE__ */ j("Tester"), o = /* @__PURE__ */ j(""), a = /* @__PURE__ */ j(""), u = /* @__PURE__ */ j(""), v = /* @__PURE__ */ j(""), _ = /* @__PURE__ */ j(Ke({})), h = /* @__PURE__ */ j("");
  async function d(p, T = "") {
    const L = await t.backend.extension_async_call(JSON.stringify({ extension_name: n(), function_name: p, args: T }));
    return JSON.parse(L);
  }
  async function c(p, T) {
    M(_, { ...x(_), [p]: !0 }, !0), M(h, "");
    try {
      await T();
    } catch (L) {
      M(h, `${p}: ${L?.message || String(L)}`);
    } finally {
      M(_, { ...x(_), [p]: !1 }, !0);
    }
  }
  async function k() {
    await c("greet", async () => {
      const p = await t.backend.greet(x(f));
      M(o, typeof p == "string" ? p : JSON.stringify(p, null, 2), !0);
    });
  }
  async function q() {
    await c("async", async () => {
      const p = await d("get_data", "from frontend-rt");
      M(a, JSON.stringify(p, null, 2), !0);
    });
  }
  async function V() {
    await c("universe", async () => {
      const p = await t.backend.get_universe(), T = typeof p == "string" ? JSON.parse(p) : p;
      M(u, JSON.stringify(T, null, 2), !0);
    });
  }
  async function xe() {
    await c("snapshots", async () => {
      const p = await t.backend.get_snapshots(), T = typeof p == "string" ? JSON.parse(p) : p;
      M(v, JSON.stringify(T, null, 2), !0);
    });
  }
  var Ye = gi(), mn = S(Ye), xr = A(S(mn), 2), Er = S(xr), gn = A(mn, 2);
  {
    var Sr = (p) => {
      var T = vi(), L = S(T);
      Ge(() => B(L, x(h))), Je(p, T);
    };
    ot(gn, (p) => {
      x(h) && p(Sr);
    });
  }
  var bn = A(gn, 2), wn = A(S(bn), 2), yn = S(wn), Gt = A(yn, 2), Tr = S(Gt), Ar = A(wn, 2);
  {
    var Nr = (p) => {
      var T = hi(), L = S(T);
      Ge(() => B(L, x(o))), Je(p, T);
    };
    ot(Ar, (p) => {
      x(o) && p(Nr);
    });
  }
  var qn = A(bn, 2), kt = A(S(qn), 2), Rr = S(kt), Or = A(kt, 2);
  {
    var Cr = (p) => {
      var T = _i(), L = S(T);
      Ge(() => B(L, x(a))), Je(p, T);
    };
    ot(Or, (p) => {
      x(a) && p(Cr);
    });
  }
  var kn = A(qn, 2), xt = A(S(kn), 2), Dr = S(xt), Mr = A(xt, 2);
  {
    var Pr = (p) => {
      var T = pi(), L = S(T);
      Ge(() => B(L, x(u))), Je(p, T);
    };
    ot(Mr, (p) => {
      x(u) && p(Pr);
    });
  }
  var xn = A(kn, 2), Et = A(S(xn), 2), Fr = S(Et), Ir = A(Et, 2);
  {
    var jr = (p) => {
      var T = mi(), L = S(T);
      Ge(() => B(L, x(v))), Je(p, T);
    };
    ot(Ir, (p) => {
      x(v) && p(jr);
    });
  }
  var Lr = A(xn, 2), En = A(S(Lr), 2), zr = A(S(En)), Ur = S(zr), Sn = A(En, 2), Vr = A(S(Sn)), Br = S(Vr), Yr = A(Sn, 2), Gr = A(S(Yr)), Jr = S(Gr);
  Ge(() => {
    B(Er, `v${r() ?? ""}`), Gt.disabled = x(_).greet, B(Tr, x(_).greet ? "…" : "Greet"), kt.disabled = x(_).async, B(Rr, x(_).async ? "Running…" : "Call get_data (async)"), xt.disabled = x(_).universe, B(Dr, x(_).universe ? "Loading…" : "Get Universe"), Et.disabled = x(_).snapshots, B(Fr, x(_).snapshots ? "Loading…" : "Get Snapshots"), B(Ur, n()), B(Br, s() || "(anonymous)"), B(Jr, l() ? "Yes" : "No");
  }), ci(yn, () => x(f), (p) => M(f, p)), St("click", Gt, k), St("click", kt, q), St("click", xt, V), St("click", Et, xe), Je(e, Ye), Bn();
}
ti(["click"]);
function ki(e, t) {
  const n = li(wi, { target: e, props: t });
  return {
    unmount() {
      try {
        fi(n);
      } catch {
      }
    }
  };
}
export {
  ki as default
};
