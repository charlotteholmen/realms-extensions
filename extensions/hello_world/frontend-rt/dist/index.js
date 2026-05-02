var vn = Object.defineProperty;
var hr = (e) => {
  throw TypeError(e);
};
var _n = (e, t, r) => t in e ? vn(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var Q = (e, t, r) => _n(e, typeof t != "symbol" ? t + "" : t, r), Lt = (e, t, r) => t.has(e) || hr("Cannot " + r);
var s = (e, t, r) => (Lt(e, t, "read from private field"), r ? r.call(e) : t.get(e)), p = (e, t, r) => t.has(e) ? hr("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), m = (e, t, r, n) => (Lt(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r), x = (e, t, r) => (Lt(e, t, "access private method"), r);
var pn = Array.isArray, gn = Array.prototype.indexOf, Ge = Array.prototype.includes, mn = Array.from, wn = Object.defineProperty, lt = Object.getOwnPropertyDescriptor, bn = Object.prototype, yn = Array.prototype, kn = Object.getPrototypeOf, dr = Object.isExtensible;
const En = () => {
};
function xn(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function Tr() {
  var e, t, r = new Promise((n, i) => {
    e = n, t = i;
  });
  return { promise: r, resolve: e, reject: t };
}
const D = 2, Ze = 4, Pt = 8, Ar = 1 << 24, fe = 16, me = 32, Se = 64, Ut = 128, $ = 512, R = 1024, M = 2048, ae = 4096, G = 8192, re = 16384, et = 32768, vr = 1 << 25, Je = 65536, Wt = 1 << 17, Sn = 1 << 18, tt = 1 << 19, Tn = 1 << 20, Le = 65536, Rt = 1 << 21, ut = 1 << 22, xe = 1 << 23, qt = Symbol("$state"), de = new class extends Error {
  constructor() {
    super(...arguments);
    Q(this, "name", "StaleReactionError");
    Q(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
function An() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Rn() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Nn() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Cn() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Mn() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Dn() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
const Fn = 2, N = Symbol(), Pn = "http://www.w3.org/1999/xhtml";
function On() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function In() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function Rr(e) {
  return e === this.v;
}
let ne = null;
function Qe(e) {
  ne = e;
}
function Nr(e, t = !1, r) {
  ne = {
    p: ne,
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
function Cr(e) {
  var t = (
    /** @type {ComponentContext} */
    ne
  ), r = t.e;
  if (r !== null) {
    t.e = null;
    for (var n of r)
      oi(n);
  }
  return t.i = !0, ne = t.p, /** @type {T} */
  {};
}
function Mr() {
  return !0;
}
let Re = [];
function Dr() {
  var e = Re;
  Re = [], xn(e);
}
function Ye(e) {
  if (Re.length === 0 && !ft) {
    var t = Re;
    queueMicrotask(() => {
      t === Re && Dr();
    });
  }
  Re.push(e);
}
function jn() {
  for (; Re.length > 0; )
    Dr();
}
function Fr(e) {
  var t = y;
  if (t === null)
    return w.f |= xe, e;
  if ((t.f & et) === 0 && (t.f & Ze) === 0)
    throw e;
  Ee(e, t);
}
function Ee(e, t) {
  for (; t !== null; ) {
    if ((t.f & Ut) !== 0) {
      if ((t.f & et) === 0)
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
const Ln = -7169;
function T(e, t) {
  e.f = e.f & Ln | t;
}
function rr(e) {
  (e.f & $) !== 0 || e.deps === null ? T(e, R) : T(e, ae);
}
function Pr(e) {
  if (e !== null)
    for (const t of e)
      (t.f & D) === 0 || (t.f & Le) === 0 || (t.f ^= Le, Pr(
        /** @type {Derived} */
        t.deps
      ));
}
function Or(e, t, r) {
  (e.f & M) !== 0 ? t.add(e) : (e.f & ae) !== 0 && r.add(e), Pr(e.deps), T(e, R);
}
const Te = /* @__PURE__ */ new Set();
let g = null, ee = null, Kt = null, ft = !1, Vt = !1, ze = null, yt = null;
var _r = 0;
let qn = 1;
var Be, Ue, Me, ve, ie, dt, q, vt, ye, _e, se, We, Ke, De, A, kt, Ir, Et, $t, xt, Vn;
const Mt = class Mt {
  constructor() {
    p(this, A);
    Q(this, "id", qn++);
    /**
     * The current values of any signals that are updated in this batch.
     * Tuple format: [value, is_derived] (note: is_derived is false for deriveds, too, if they were overridden via assignment)
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Value, [any, boolean]>}
     */
    Q(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any signals (sources and deriveds) that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Value, any>}
     */
    Q(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<(batch: Batch) => void>}
     */
    p(this, Be, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    p(this, Ue, /* @__PURE__ */ new Set());
    /**
     * Callbacks that should run only when a fork is committed.
     * @type {Set<(batch: Batch) => void>}
     */
    p(this, Me, /* @__PURE__ */ new Set());
    /**
     * Async effects that are currently in flight
     * @type {Map<Effect, number>}
     */
    p(this, ve, /* @__PURE__ */ new Map());
    /**
     * Async effects that are currently in flight, _not_ inside a pending boundary
     * @type {Map<Effect, number>}
     */
    p(this, ie, /* @__PURE__ */ new Map());
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    p(this, dt, null);
    /**
     * The root effects that need to be flushed
     * @type {Effect[]}
     */
    p(this, q, []);
    /**
     * Effects created while this batch was active.
     * @type {Effect[]}
     */
    p(this, vt, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    p(this, ye, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    p(this, _e, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    p(this, se, /* @__PURE__ */ new Map());
    /**
     * Inverse of #skipped_branches which we need to tell prior batches to unskip them when committing
     * @type {Set<Effect>}
     */
    p(this, We, /* @__PURE__ */ new Set());
    Q(this, "is_fork", !1);
    p(this, Ke, !1);
    /** @type {Set<Batch>} */
    p(this, De, /* @__PURE__ */ new Set());
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(t) {
    s(this, se).has(t) || s(this, se).set(t, { d: [], m: [] }), s(this, We).delete(t);
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   * @param {(e: Effect) => void} callback
   */
  unskip_effect(t, r = (n) => this.schedule(n)) {
    var n = s(this, se).get(t);
    if (n) {
      s(this, se).delete(t);
      for (var i of n.d)
        T(i, M), r(i);
      for (i of n.m)
        T(i, ae), r(i);
    }
    s(this, We).add(t);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Value} source
   * @param {any} value
   * @param {boolean} [is_derived]
   */
  capture(t, r, n = !1) {
    t.v !== N && !this.previous.has(t) && this.previous.set(t, t.v), (t.f & xe) === 0 && (this.current.set(t, [r, n]), ee?.set(t, r)), this.is_fork || (t.v = r);
  }
  activate() {
    g = this;
  }
  deactivate() {
    g = null, ee = null;
  }
  flush() {
    try {
      Vt = !0, g = this, x(this, A, Et).call(this);
    } finally {
      _r = 0, Kt = null, ze = null, yt = null, Vt = !1, g = null, ee = null, Ie.clear();
    }
  }
  discard() {
    for (const t of s(this, Ue)) t(this);
    s(this, Ue).clear(), s(this, Me).clear(), Te.delete(this);
  }
  /**
   * @param {Effect} effect
   */
  register_created_effect(t) {
    s(this, vt).push(t);
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  increment(t, r) {
    let n = s(this, ve).get(r) ?? 0;
    if (s(this, ve).set(r, n + 1), t) {
      let i = s(this, ie).get(r) ?? 0;
      s(this, ie).set(r, i + 1);
    }
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   * @param {boolean} skip - whether to skip updates (because this is triggered by a stale reaction)
   */
  decrement(t, r, n) {
    let i = s(this, ve).get(r) ?? 0;
    if (i === 1 ? s(this, ve).delete(r) : s(this, ve).set(r, i - 1), t) {
      let l = s(this, ie).get(r) ?? 0;
      l === 1 ? s(this, ie).delete(r) : s(this, ie).set(r, l - 1);
    }
    s(this, Ke) || n || (m(this, Ke, !0), Ye(() => {
      m(this, Ke, !1), this.flush();
    }));
  }
  /**
   * @param {Set<Effect>} dirty_effects
   * @param {Set<Effect>} maybe_dirty_effects
   */
  transfer_effects(t, r) {
    for (const n of t)
      s(this, ye).add(n);
    for (const n of r)
      s(this, _e).add(n);
    t.clear(), r.clear();
  }
  /** @param {(batch: Batch) => void} fn */
  oncommit(t) {
    s(this, Be).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    s(this, Ue).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  on_fork_commit(t) {
    s(this, Me).add(t);
  }
  run_fork_commit_callbacks() {
    for (const t of s(this, Me)) t(this);
    s(this, Me).clear();
  }
  settled() {
    return (s(this, dt) ?? m(this, dt, Tr())).promise;
  }
  static ensure() {
    if (g === null) {
      const t = g = new Mt();
      Vt || (Te.add(g), ft || Ye(() => {
        g === t && t.flush();
      }));
    }
    return g;
  }
  apply() {
    {
      ee = null;
      return;
    }
  }
  /**
   *
   * @param {Effect} effect
   */
  schedule(t) {
    if (Kt = t, t.b?.is_pending && (t.f & (Ze | Pt | Ar)) !== 0 && (t.f & et) === 0) {
      t.b.defer_effect(t);
      return;
    }
    for (var r = t; r.parent !== null; ) {
      r = r.parent;
      var n = r.f;
      if (ze !== null && r === y && (w === null || (w.f & D) === 0))
        return;
      if ((n & (Se | me)) !== 0) {
        if ((n & R) === 0)
          return;
        r.f ^= R;
      }
    }
    s(this, q).push(r);
  }
};
Be = new WeakMap(), Ue = new WeakMap(), Me = new WeakMap(), ve = new WeakMap(), ie = new WeakMap(), dt = new WeakMap(), q = new WeakMap(), vt = new WeakMap(), ye = new WeakMap(), _e = new WeakMap(), se = new WeakMap(), We = new WeakMap(), Ke = new WeakMap(), De = new WeakMap(), A = new WeakSet(), kt = function() {
  return this.is_fork || s(this, ie).size > 0;
}, Ir = function() {
  for (const n of s(this, De))
    for (const i of s(n, ie).keys()) {
      for (var t = !1, r = i; r.parent !== null; ) {
        if (s(this, se).has(r)) {
          t = !0;
          break;
        }
        r = r.parent;
      }
      if (!t)
        return !0;
    }
  return !1;
}, Et = function() {
  var o;
  if (_r++ > 1e3 && (Te.delete(this), Hn()), !x(this, A, kt).call(this)) {
    for (const f of s(this, ye))
      s(this, _e).delete(f), T(f, M), this.schedule(f);
    for (const f of s(this, _e))
      T(f, ae), this.schedule(f);
  }
  const t = s(this, q);
  m(this, q, []), this.apply();
  var r = ze = [], n = [], i = yt = [];
  for (const f of t)
    try {
      x(this, A, $t).call(this, f, r, n);
    } catch (u) {
      throw qr(f), u;
    }
  if (g = null, i.length > 0) {
    var l = Mt.ensure();
    for (const f of i)
      l.schedule(f);
  }
  if (ze = null, yt = null, x(this, A, kt).call(this) || x(this, A, Ir).call(this)) {
    x(this, A, xt).call(this, n), x(this, A, xt).call(this, r);
    for (const [f, u] of s(this, se))
      Lr(f, u);
  } else {
    s(this, ve).size === 0 && Te.delete(this), s(this, ye).clear(), s(this, _e).clear();
    for (const f of s(this, Be)) f(this);
    s(this, Be).clear(), pr(n), pr(r), s(this, dt)?.resolve();
  }
  var a = (
    /** @type {Batch | null} */
    /** @type {unknown} */
    g
  );
  if (s(this, q).length > 0) {
    const f = a ?? (a = this);
    s(f, q).push(...s(this, q).filter((u) => !s(f, q).includes(u)));
  }
  a !== null && (Te.add(a), x(o = a, A, Et).call(o));
}, /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
$t = function(t, r, n) {
  t.f ^= R;
  for (var i = t.first; i !== null; ) {
    var l = i.f, a = (l & (me | Se)) !== 0, o = a && (l & R) !== 0, f = o || (l & G) !== 0 || s(this, se).has(i);
    if (!f && i.fn !== null) {
      a ? i.f ^= R : (l & Ze) !== 0 ? r.push(i) : wt(i) && ((l & fe) !== 0 && s(this, _e).add(i), Xe(i));
      var u = i.first;
      if (u !== null) {
        i = u;
        continue;
      }
    }
    for (; i !== null; ) {
      var d = i.next;
      if (d !== null) {
        i = d;
        break;
      }
      i = i.parent;
    }
  }
}, /**
 * @param {Effect[]} effects
 */
xt = function(t) {
  for (var r = 0; r < t.length; r += 1)
    Or(t[r], s(this, ye), s(this, _e));
}, Vn = function() {
  var d, _, v;
  for (const c of Te) {
    var t = c.id < this.id, r = [];
    for (const [h, [k, b]] of this.current) {
      if (c.current.has(h)) {
        var n = (
          /** @type {[any, boolean]} */
          c.current.get(h)[0]
        );
        if (t && k !== n)
          c.current.set(h, [k, b]);
        else
          continue;
      }
      r.push(h);
    }
    var i = [...c.current.keys()].filter((h) => !this.current.has(h));
    if (i.length === 0)
      t && c.discard();
    else if (r.length > 0) {
      if (t)
        for (const h of s(this, We))
          c.unskip_effect(h, (k) => {
            var b;
            (k.f & (fe | ut)) !== 0 ? c.schedule(k) : x(b = c, A, xt).call(b, [k]);
          });
      c.activate();
      var l = /* @__PURE__ */ new Set(), a = /* @__PURE__ */ new Map();
      for (var o of r)
        jr(o, i, l, a);
      a = /* @__PURE__ */ new Map();
      var f = [...c.current.keys()].filter(
        (h) => this.current.has(h) ? (
          /** @type {[any, boolean]} */
          this.current.get(h)[0] !== h
        ) : !0
      );
      for (const h of s(this, vt))
        (h.f & (re | G | Wt)) === 0 && nr(h, f, a) && ((h.f & (ut | fe)) !== 0 ? (T(h, M), c.schedule(h)) : s(c, ye).add(h));
      if (s(c, q).length > 0) {
        c.apply();
        for (var u of s(c, q))
          x(d = c, A, $t).call(d, u, [], []);
        m(c, q, []);
      }
      c.deactivate();
    }
  }
  for (const c of Te)
    s(c, De).has(this) && (s(c, De).delete(this), s(c, De).size === 0 && !x(_ = c, A, kt).call(_) && (c.activate(), x(v = c, A, Et).call(v)));
};
let qe = Mt;
function zn(e) {
  var t = ft;
  ft = !0;
  try {
    for (var r; ; ) {
      if (jn(), g === null)
        return (
          /** @type {T} */
          r
        );
      g.flush();
    }
  } finally {
    ft = t;
  }
}
function Hn() {
  try {
    Rn();
  } catch (e) {
    Ee(e, Kt);
  }
}
let ce = null;
function pr(e) {
  var t = e.length;
  if (t !== 0) {
    for (var r = 0; r < t; ) {
      var n = e[r++];
      if ((n.f & (re | G)) === 0 && wt(n) && (ce = /* @__PURE__ */ new Set(), Xe(n), n.deps === null && n.first === null && n.nodes === null && n.teardown === null && n.ac === null && Xr(n), ce?.size > 0)) {
        Ie.clear();
        for (const i of ce) {
          if ((i.f & (re | G)) !== 0) continue;
          const l = [i];
          let a = i.parent;
          for (; a !== null; )
            ce.has(a) && (ce.delete(a), l.push(a)), a = a.parent;
          for (let o = l.length - 1; o >= 0; o--) {
            const f = l[o];
            (f.f & (re | G)) === 0 && Xe(f);
          }
        }
        ce.clear();
      }
    }
    ce = null;
  }
}
function jr(e, t, r, n) {
  if (!r.has(e) && (r.add(e), e.reactions !== null))
    for (const i of e.reactions) {
      const l = i.f;
      (l & D) !== 0 ? jr(
        /** @type {Derived} */
        i,
        t,
        r,
        n
      ) : (l & (ut | fe)) !== 0 && (l & M) === 0 && nr(i, t, n) && (T(i, M), ir(
        /** @type {Effect} */
        i
      ));
    }
}
function nr(e, t, r) {
  const n = r.get(e);
  if (n !== void 0) return n;
  if (e.deps !== null)
    for (const i of e.deps) {
      if (Ge.call(t, i))
        return !0;
      if ((i.f & D) !== 0 && nr(
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
function ir(e) {
  g.schedule(e);
}
function Lr(e, t) {
  if (!((e.f & me) !== 0 && (e.f & R) !== 0)) {
    (e.f & M) !== 0 ? t.d.push(e) : (e.f & ae) !== 0 && t.m.push(e), T(e, R);
    for (var r = e.first; r !== null; )
      Lr(r, t), r = r.next;
  }
}
function qr(e) {
  T(e, R);
  for (var t = e.first; t !== null; )
    qr(t), t = t.next;
}
function Yn(e) {
  let t = 0, r = Ot(0), n;
  return () => {
    ar() && (C(r), Zr(() => (t === 0 && (n = cn(() => e(() => at(r)))), t += 1, () => {
      Ye(() => {
        t -= 1, t === 0 && (n?.(), n = void 0, at(r));
      });
    })));
  };
}
var Bn = Je | tt;
function Un(e, t, r, n) {
  new Wn(e, t, r, n);
}
var B, tr, U, Fe, P, W, F, V, pe, Pe, ke, $e, _t, pt, ge, Dt, S, Kn, $n, Gn, Gt, St, Tt, Zt, Jt;
class Wn {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(t, r, n, i) {
    p(this, S);
    /** @type {Boundary | null} */
    Q(this, "parent");
    Q(this, "is_pending", !1);
    /**
     * API-level transformError transform function. Transforms errors before they reach the `failed` snippet.
     * Inherited from parent boundary, or defaults to identity.
     * @type {(error: unknown) => unknown}
     */
    Q(this, "transform_error");
    /** @type {TemplateNode} */
    p(this, B);
    /** @type {TemplateNode | null} */
    p(this, tr, null);
    /** @type {BoundaryProps} */
    p(this, U);
    /** @type {((anchor: Node) => void)} */
    p(this, Fe);
    /** @type {Effect} */
    p(this, P);
    /** @type {Effect | null} */
    p(this, W, null);
    /** @type {Effect | null} */
    p(this, F, null);
    /** @type {Effect | null} */
    p(this, V, null);
    /** @type {DocumentFragment | null} */
    p(this, pe, null);
    p(this, Pe, 0);
    p(this, ke, 0);
    p(this, $e, !1);
    /** @type {Set<Effect>} */
    p(this, _t, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    p(this, pt, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    p(this, ge, null);
    p(this, Dt, Yn(() => (m(this, ge, Ot(s(this, Pe))), () => {
      m(this, ge, null);
    })));
    m(this, B, t), m(this, U, r), m(this, Fe, (l) => {
      var a = (
        /** @type {Effect} */
        y
      );
      a.b = this, a.f |= Ut, n(l);
    }), this.parent = /** @type {Effect} */
    y.b, this.transform_error = i ?? this.parent?.transform_error ?? ((l) => l), m(this, P, Jr(() => {
      x(this, S, Gt).call(this);
    }, Bn));
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    Or(t, s(this, _t), s(this, pt));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!s(this, U).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  update_pending_count(t, r) {
    x(this, S, Zt).call(this, t, r), m(this, Pe, s(this, Pe) + t), !(!s(this, ge) || s(this, $e)) && (m(this, $e, !0), Ye(() => {
      m(this, $e, !1), s(this, ge) && Ct(s(this, ge), s(this, Pe));
    }));
  }
  get_effect_pending() {
    return s(this, Dt).call(this), C(
      /** @type {Source<number>} */
      s(this, ge)
    );
  }
  /** @param {unknown} error */
  error(t) {
    if (!s(this, U).onerror && !s(this, U).failed)
      throw t;
    g?.is_fork ? (s(this, W) && g.skip_effect(s(this, W)), s(this, F) && g.skip_effect(s(this, F)), s(this, V) && g.skip_effect(s(this, V)), g.on_fork_commit(() => {
      x(this, S, Jt).call(this, t);
    })) : x(this, S, Jt).call(this, t);
  }
}
B = new WeakMap(), tr = new WeakMap(), U = new WeakMap(), Fe = new WeakMap(), P = new WeakMap(), W = new WeakMap(), F = new WeakMap(), V = new WeakMap(), pe = new WeakMap(), Pe = new WeakMap(), ke = new WeakMap(), $e = new WeakMap(), _t = new WeakMap(), pt = new WeakMap(), ge = new WeakMap(), Dt = new WeakMap(), S = new WeakSet(), Kn = function() {
  try {
    m(this, W, he(() => s(this, Fe).call(this, s(this, B))));
  } catch (t) {
    this.error(t);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
$n = function(t) {
  const r = s(this, U).failed;
  r && m(this, V, he(() => {
    r(
      s(this, B),
      () => t,
      () => () => {
      }
    );
  }));
}, Gn = function() {
  const t = s(this, U).pending;
  t && (this.is_pending = !0, m(this, F, he(() => t(s(this, B)))), Ye(() => {
    var r = m(this, pe, document.createDocumentFragment()), n = ct();
    r.append(n), m(this, W, x(this, S, Tt).call(this, () => he(() => s(this, Fe).call(this, n)))), s(this, ke) === 0 && (s(this, B).before(r), m(this, pe, null), ot(
      /** @type {Effect} */
      s(this, F),
      () => {
        m(this, F, null);
      }
    ), x(this, S, St).call(
      this,
      /** @type {Batch} */
      g
    ));
  }));
}, Gt = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), m(this, ke, 0), m(this, Pe, 0), m(this, W, he(() => {
      s(this, Fe).call(this, s(this, B));
    })), s(this, ke) > 0) {
      var t = m(this, pe, document.createDocumentFragment());
      rn(s(this, W), t);
      const r = (
        /** @type {(anchor: Node) => void} */
        s(this, U).pending
      );
      m(this, F, he(() => r(s(this, B))));
    } else
      x(this, S, St).call(
        this,
        /** @type {Batch} */
        g
      );
  } catch (r) {
    this.error(r);
  }
}, /**
 * @param {Batch} batch
 */
St = function(t) {
  this.is_pending = !1, t.transfer_effects(s(this, _t), s(this, pt));
}, /**
 * @template T
 * @param {() => T} fn
 */
Tt = function(t) {
  var r = y, n = w, i = ne;
  oe(s(this, P)), J(s(this, P)), Qe(s(this, P).ctx);
  try {
    return qe.ensure(), t();
  } catch (l) {
    return Fr(l), null;
  } finally {
    oe(r), J(n), Qe(i);
  }
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 * @param {Batch} batch
 */
Zt = function(t, r) {
  var n;
  if (!this.has_pending_snippet()) {
    this.parent && x(n = this.parent, S, Zt).call(n, t, r);
    return;
  }
  m(this, ke, s(this, ke) + t), s(this, ke) === 0 && (x(this, S, St).call(this, r), s(this, F) && ot(s(this, F), () => {
    m(this, F, null);
  }), s(this, pe) && (s(this, B).before(s(this, pe)), m(this, pe, null)));
}, /**
 * @param {unknown} error
 */
Jt = function(t) {
  s(this, W) && (H(s(this, W)), m(this, W, null)), s(this, F) && (H(s(this, F)), m(this, F, null)), s(this, V) && (H(s(this, V)), m(this, V, null));
  var r = s(this, U).onerror;
  let n = s(this, U).failed;
  var i = !1, l = !1;
  const a = () => {
    if (i) {
      In();
      return;
    }
    i = !0, l && Dn(), s(this, V) !== null && ot(s(this, V), () => {
      m(this, V, null);
    }), x(this, S, Tt).call(this, () => {
      x(this, S, Gt).call(this);
    });
  }, o = (f) => {
    try {
      l = !0, r?.(f, a), l = !1;
    } catch (u) {
      Ee(u, s(this, P) && s(this, P).parent);
    }
    n && m(this, V, x(this, S, Tt).call(this, () => {
      try {
        return he(() => {
          var u = (
            /** @type {Effect} */
            y
          );
          u.b = this, u.f |= Ut, n(
            s(this, B),
            () => f,
            () => a
          );
        });
      } catch (u) {
        return Ee(
          u,
          /** @type {Effect} */
          s(this, P).parent
        ), null;
      }
    }));
  };
  Ye(() => {
    var f;
    try {
      f = this.transform_error(t);
    } catch (u) {
      Ee(u, s(this, P) && s(this, P).parent);
      return;
    }
    f !== null && typeof f == "object" && typeof /** @type {any} */
    f.then == "function" ? f.then(
      o,
      /** @param {unknown} e */
      (u) => Ee(u, s(this, P) && s(this, P).parent)
    ) : o(f);
  });
};
function Zn(e, t, r, n) {
  const i = zr;
  var l = e.filter((v) => !v.settled);
  if (r.length === 0 && l.length === 0) {
    n(t.map(i));
    return;
  }
  var a = (
    /** @type {Effect} */
    y
  ), o = Jn(), f = l.length === 1 ? l[0].promise : l.length > 1 ? Promise.all(l.map((v) => v.promise)) : null;
  function u(v) {
    o();
    try {
      n(v);
    } catch (c) {
      (a.f & re) === 0 && Ee(c, a);
    }
    Nt();
  }
  if (r.length === 0) {
    f.then(() => u(t.map(i)));
    return;
  }
  var d = Vr();
  function _() {
    Promise.all(r.map((v) => /* @__PURE__ */ Qn(v))).then((v) => u([...t.map(i), ...v])).catch((v) => Ee(v, a)).finally(() => d());
  }
  f ? f.then(() => {
    o(), _(), Nt();
  }) : _();
}
function Jn() {
  var e = (
    /** @type {Effect} */
    y
  ), t = w, r = ne, n = (
    /** @type {Batch} */
    g
  );
  return function(l = !0) {
    oe(e), J(t), Qe(r), l && (e.f & re) === 0 && (n?.activate(), n?.apply());
  };
}
function Nt(e = !0) {
  oe(null), J(null), Qe(null), e && g?.deactivate();
}
function Vr() {
  var e = (
    /** @type {Effect} */
    y
  ), t = (
    /** @type {Boundary} */
    e.b
  ), r = (
    /** @type {Batch} */
    g
  ), n = t.is_rendered();
  return t.update_pending_count(1, r), r.increment(n, e), (i = !1) => {
    t.update_pending_count(-1, r), r.decrement(n, e, i);
  };
}
// @__NO_SIDE_EFFECTS__
function zr(e) {
  var t = D | M;
  return y !== null && (y.f |= tt), {
    ctx: ne,
    deps: null,
    effects: null,
    equals: Rr,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      N
    ),
    wv: 0,
    parent: y,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function Qn(e, t, r) {
  let n = (
    /** @type {Effect | null} */
    y
  );
  n === null && An();
  var i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), l = Ot(
    /** @type {V} */
    N
  ), a = !w, o = /* @__PURE__ */ new Map();
  return hi(() => {
    var f = (
      /** @type {Effect} */
      y
    ), u = Tr();
    i = u.promise;
    try {
      Promise.resolve(e()).then(u.resolve, u.reject).finally(Nt);
    } catch (c) {
      u.reject(c), Nt();
    }
    var d = (
      /** @type {Batch} */
      g
    );
    if (a) {
      if ((f.f & et) !== 0)
        var _ = Vr();
      if (
        /** @type {Boundary} */
        n.b.is_rendered()
      )
        o.get(d)?.reject(de), o.delete(d);
      else {
        for (const c of o.values())
          c.reject(de);
        o.clear();
      }
      o.set(d, u);
    }
    const v = (c, h = void 0) => {
      if (_) {
        var k = h === de;
        _(k);
      }
      if (!(h === de || (f.f & re) !== 0)) {
        if (d.activate(), h)
          l.f |= xe, Ct(l, h);
        else {
          (l.f & xe) !== 0 && (l.f ^= xe), Ct(l, c);
          for (const [b, j] of o) {
            if (o.delete(b), b === d) break;
            j.reject(de);
          }
        }
        d.deactivate();
      }
    };
    u.promise.then(v, (c) => v(null, c || "unknown"));
  }), ai(() => {
    for (const f of o.values())
      f.reject(de);
  }), new Promise((f) => {
    function u(d) {
      function _() {
        d === i ? f(l) : u(i);
      }
      d.then(_, _);
    }
    u(i);
  });
}
// @__NO_SIDE_EFFECTS__
function Xn(e) {
  const t = /* @__PURE__ */ zr(e);
  return nn(t), t;
}
function ei(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var r = 0; r < t.length; r += 1)
      H(
        /** @type {Effect} */
        t[r]
      );
  }
}
function sr(e) {
  var t, r = y, n = e.parent;
  if (!Ve && n !== null && (n.f & (re | G)) !== 0)
    return On(), e.v;
  oe(n);
  try {
    e.f &= ~Le, ei(e), t = an(e);
  } finally {
    oe(r);
  }
  return t;
}
function Hr(e) {
  var t = sr(e);
  if (!e.equals(t) && (e.wv = ln(), (!g?.is_fork || e.deps === null) && (g !== null ? g.capture(e, t, !0) : e.v = t, e.deps === null))) {
    T(e, R);
    return;
  }
  Ve || (ee !== null ? (ar() || g?.is_fork) && ee.set(e, t) : rr(e));
}
function ti(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      (t.teardown || t.ac) && (t.teardown?.(), t.ac?.abort(de), t.teardown = En, t.ac = null, ht(t, 0), or(t));
}
function Yr(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      t.teardown && Xe(t);
}
let Qt = /* @__PURE__ */ new Set();
const Ie = /* @__PURE__ */ new Map();
let Br = !1;
function Ot(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Rr,
    rv: 0,
    wv: 0
  };
  return r;
}
// @__NO_SIDE_EFFECTS__
function K(e, t) {
  const r = Ot(e);
  return nn(r), r;
}
function I(e, t, r = !1) {
  w !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!te || (w.f & Wt) !== 0) && Mr() && (w.f & (D | fe | ut | Wt)) !== 0 && (Z === null || !Ge.call(Z, e)) && Mn();
  let n = r ? st(t) : t;
  return Ct(e, n, yt);
}
function Ct(e, t, r = null) {
  if (!e.equals(t)) {
    Ie.set(e, Ve ? t : e.v);
    var n = qe.ensure();
    if (n.capture(e, t), (e.f & D) !== 0) {
      const i = (
        /** @type {Derived} */
        e
      );
      (e.f & M) !== 0 && sr(i), ee === null && rr(i);
    }
    e.wv = ln(), Ur(e, M, r), y !== null && (y.f & R) !== 0 && (y.f & (me | Se)) === 0 && (Y === null ? pi([e]) : Y.push(e)), !n.is_fork && Qt.size > 0 && !Br && ri();
  }
  return t;
}
function ri() {
  Br = !1;
  for (const e of Qt)
    (e.f & R) !== 0 && T(e, ae), wt(e) && Xe(e);
  Qt.clear();
}
function at(e) {
  I(e, e.v + 1);
}
function Ur(e, t, r) {
  var n = e.reactions;
  if (n !== null)
    for (var i = n.length, l = 0; l < i; l++) {
      var a = n[l], o = a.f, f = (o & M) === 0;
      if (f && T(a, t), (o & D) !== 0) {
        var u = (
          /** @type {Derived} */
          a
        );
        ee?.delete(u), (o & Le) === 0 && (o & $ && (y === null || (y.f & Rt) === 0) && (a.f |= Le), Ur(u, ae, r));
      } else if (f) {
        var d = (
          /** @type {Effect} */
          a
        );
        (o & fe) !== 0 && ce !== null && ce.add(d), r !== null ? r.push(d) : ir(d);
      }
    }
}
function st(e) {
  if (typeof e != "object" || e === null || qt in e)
    return e;
  const t = kn(e);
  if (t !== bn && t !== yn)
    return e;
  var r = /* @__PURE__ */ new Map(), n = pn(e), i = /* @__PURE__ */ K(0), l = je, a = (o) => {
    if (je === l)
      return o();
    var f = w, u = je;
    J(null), br(l);
    var d = o();
    return J(f), br(u), d;
  };
  return n && r.set("length", /* @__PURE__ */ K(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(o, f, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && Nn();
        var d = r.get(f);
        return d === void 0 ? a(() => {
          var _ = /* @__PURE__ */ K(u.value);
          return r.set(f, _), _;
        }) : I(d, u.value, !0), !0;
      },
      deleteProperty(o, f) {
        var u = r.get(f);
        if (u === void 0) {
          if (f in o) {
            const d = a(() => /* @__PURE__ */ K(N));
            r.set(f, d), at(i);
          }
        } else
          I(u, N), at(i);
        return !0;
      },
      get(o, f, u) {
        if (f === qt)
          return e;
        var d = r.get(f), _ = f in o;
        if (d === void 0 && (!_ || lt(o, f)?.writable) && (d = a(() => {
          var c = st(_ ? o[f] : N), h = /* @__PURE__ */ K(c);
          return h;
        }), r.set(f, d)), d !== void 0) {
          var v = C(d);
          return v === N ? void 0 : v;
        }
        return Reflect.get(o, f, u);
      },
      getOwnPropertyDescriptor(o, f) {
        var u = Reflect.getOwnPropertyDescriptor(o, f);
        if (u && "value" in u) {
          var d = r.get(f);
          d && (u.value = C(d));
        } else if (u === void 0) {
          var _ = r.get(f), v = _?.v;
          if (_ !== void 0 && v !== N)
            return {
              enumerable: !0,
              configurable: !0,
              value: v,
              writable: !0
            };
        }
        return u;
      },
      has(o, f) {
        if (f === qt)
          return !0;
        var u = r.get(f), d = u !== void 0 && u.v !== N || Reflect.has(o, f);
        if (u !== void 0 || y !== null && (!d || lt(o, f)?.writable)) {
          u === void 0 && (u = a(() => {
            var v = d ? st(o[f]) : N, c = /* @__PURE__ */ K(v);
            return c;
          }), r.set(f, u));
          var _ = C(u);
          if (_ === N)
            return !1;
        }
        return d;
      },
      set(o, f, u, d) {
        var _ = r.get(f), v = f in o;
        if (n && f === "length")
          for (var c = u; c < /** @type {Source<number>} */
          _.v; c += 1) {
            var h = r.get(c + "");
            h !== void 0 ? I(h, N) : c in o && (h = a(() => /* @__PURE__ */ K(N)), r.set(c + "", h));
          }
        if (_ === void 0)
          (!v || lt(o, f)?.writable) && (_ = a(() => /* @__PURE__ */ K(void 0)), I(_, st(u)), r.set(f, _));
        else {
          v = _.v !== N;
          var k = a(() => st(u));
          I(_, k);
        }
        var b = Reflect.getOwnPropertyDescriptor(o, f);
        if (b?.set && b.set.call(d, u), !v) {
          if (n && typeof f == "string") {
            var j = (
              /** @type {Source<number>} */
              r.get("length")
            ), be = Number(f);
            Number.isInteger(be) && be >= j.v && I(j, be + 1);
          }
          at(i);
        }
        return !0;
      },
      ownKeys(o) {
        C(i);
        var f = Reflect.ownKeys(o).filter((_) => {
          var v = r.get(_);
          return v === void 0 || v.v !== N;
        });
        for (var [u, d] of r)
          d.v !== N && !(u in o) && f.push(u);
        return f;
      },
      setPrototypeOf() {
        Cn();
      }
    }
  );
}
var gr, Wr, Kr, $r;
function ni() {
  if (gr === void 0) {
    gr = window, Wr = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, r = Text.prototype;
    Kr = lt(t, "firstChild").get, $r = lt(t, "nextSibling").get, dr(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), dr(r) && (r.__t = void 0);
  }
}
function ct(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function He(e) {
  return (
    /** @type {TemplateNode | null} */
    Kr.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function lr(e) {
  return (
    /** @type {TemplateNode | null} */
    $r.call(e)
  );
}
function Ae(e, t) {
  return /* @__PURE__ */ He(e);
}
function nt(e, t = 1, r = !1) {
  let n = e;
  for (; t--; )
    n = /** @type {TemplateNode} */
    /* @__PURE__ */ lr(n);
  return n;
}
function ii() {
  return !1;
}
function Gr(e, t, r) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElementNS(Pn, e, void 0)
  );
}
let mr = !1;
function si() {
  mr || (mr = !0, document.addEventListener(
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
function fr(e) {
  var t = w, r = y;
  J(null), oe(null);
  try {
    return e();
  } finally {
    J(t), oe(r);
  }
}
function li(e, t, r, n = r) {
  e.addEventListener(t, () => fr(r));
  const i = e.__on_r;
  i ? e.__on_r = () => {
    i(), n(!0);
  } : e.__on_r = () => n(!0), si();
}
function fi(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function we(e, t) {
  var r = y;
  r !== null && (r.f & G) !== 0 && (e |= G);
  var n = {
    ctx: ne,
    deps: null,
    nodes: null,
    f: e | M | $,
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
  g?.register_created_effect(n);
  var i = n;
  if ((e & Ze) !== 0)
    ze !== null ? ze.push(n) : qe.ensure().schedule(n);
  else if (t !== null) {
    try {
      Xe(n);
    } catch (a) {
      throw H(n), a;
    }
    i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && // either `null`, or a singular child
    (i.f & tt) === 0 && (i = i.first, (e & fe) !== 0 && (e & Je) !== 0 && i !== null && (i.f |= Je));
  }
  if (i !== null && (i.parent = r, r !== null && fi(i, r), w !== null && (w.f & D) !== 0 && (e & Se) === 0)) {
    var l = (
      /** @type {Derived} */
      w
    );
    (l.effects ?? (l.effects = [])).push(i);
  }
  return n;
}
function ar() {
  return w !== null && !te;
}
function ai(e) {
  const t = we(Pt, null);
  return T(t, R), t.teardown = e, t;
}
function oi(e) {
  return we(Ze | Tn, e);
}
function ui(e) {
  qe.ensure();
  const t = we(Se | tt, e);
  return (r = {}) => new Promise((n) => {
    r.outro ? ot(t, () => {
      H(t), n(void 0);
    }) : (H(t), n(void 0));
  });
}
function ci(e) {
  return we(Ze, e);
}
function hi(e) {
  return we(ut | tt, e);
}
function Zr(e, t = 0) {
  return we(Pt | t, e);
}
function zt(e, t = [], r = [], n = []) {
  Zn(n, t, r, (i) => {
    we(Pt, () => e(...i.map(C)));
  });
}
function Jr(e, t = 0) {
  var r = we(fe | t, e);
  return r;
}
function he(e) {
  return we(me | tt, e);
}
function Qr(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = Ve, n = w;
    wr(!0), J(null);
    try {
      t.call(null);
    } finally {
      wr(r), J(n);
    }
  }
}
function or(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    const i = r.ac;
    i !== null && fr(() => {
      i.abort(de);
    });
    var n = r.next;
    (r.f & Se) !== 0 ? r.parent = null : H(r, t), r = n;
  }
}
function di(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & me) === 0 && H(t), t = r;
  }
}
function H(e, t = !0) {
  var r = !1;
  (t || (e.f & Sn) !== 0) && e.nodes !== null && e.nodes.end !== null && (vi(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), r = !0), T(e, vr), or(e, t && !r), ht(e, 0);
  var n = e.nodes && e.nodes.t;
  if (n !== null)
    for (const l of n)
      l.stop();
  Qr(e), e.f ^= vr, e.f |= re;
  var i = e.parent;
  i !== null && i.first !== null && Xr(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function vi(e, t) {
  for (; e !== null; ) {
    var r = e === t ? null : /* @__PURE__ */ lr(e);
    e.remove(), e = r;
  }
}
function Xr(e) {
  var t = e.parent, r = e.prev, n = e.next;
  r !== null && (r.next = n), n !== null && (n.prev = r), t !== null && (t.first === e && (t.first = n), t.last === e && (t.last = r));
}
function ot(e, t, r = !0) {
  var n = [];
  en(e, n, !0);
  var i = () => {
    r && H(e), t && t();
  }, l = n.length;
  if (l > 0) {
    var a = () => --l || i();
    for (var o of n)
      o.out(a);
  } else
    i();
}
function en(e, t, r) {
  if ((e.f & G) === 0) {
    e.f ^= G;
    var n = e.nodes && e.nodes.t;
    if (n !== null)
      for (const o of n)
        (o.is_global || r) && t.push(o);
    for (var i = e.first; i !== null; ) {
      var l = i.next;
      if ((i.f & Se) === 0) {
        var a = (i.f & Je) !== 0 || // If this is a branch effect without a block effect parent,
        // it means the parent block effect was pruned. In that case,
        // transparency information was transferred to the branch effect.
        (i.f & me) !== 0 && (e.f & fe) !== 0;
        en(i, t, a ? r : !1);
      }
      i = l;
    }
  }
}
function _i(e) {
  tn(e, !0);
}
function tn(e, t) {
  if ((e.f & G) !== 0) {
    e.f ^= G, (e.f & R) === 0 && (T(e, M), qe.ensure().schedule(e));
    for (var r = e.first; r !== null; ) {
      var n = r.next, i = (r.f & Je) !== 0 || (r.f & me) !== 0;
      tn(r, i ? t : !1), r = n;
    }
    var l = e.nodes && e.nodes.t;
    if (l !== null)
      for (const a of l)
        (a.is_global || t) && a.in();
  }
}
function rn(e, t) {
  if (e.nodes)
    for (var r = e.nodes.start, n = e.nodes.end; r !== null; ) {
      var i = r === n ? null : /* @__PURE__ */ lr(r);
      t.append(r), r = i;
    }
}
let At = !1, Ve = !1;
function wr(e) {
  Ve = e;
}
let w = null, te = !1;
function J(e) {
  w = e;
}
let y = null;
function oe(e) {
  y = e;
}
let Z = null;
function nn(e) {
  w !== null && (Z === null ? Z = [e] : Z.push(e));
}
let O = null, L = 0, Y = null;
function pi(e) {
  Y = e;
}
let sn = 1, Ne = 0, je = Ne;
function br(e) {
  je = e;
}
function ln() {
  return ++sn;
}
function wt(e) {
  var t = e.f;
  if ((t & M) !== 0)
    return !0;
  if (t & D && (e.f &= ~Le), (t & ae) !== 0) {
    for (var r = (
      /** @type {Value[]} */
      e.deps
    ), n = r.length, i = 0; i < n; i++) {
      var l = r[i];
      if (wt(
        /** @type {Derived} */
        l
      ) && Hr(
        /** @type {Derived} */
        l
      ), l.wv > e.wv)
        return !0;
    }
    (t & $) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    ee === null && T(e, R);
  }
  return !1;
}
function fn(e, t, r = !0) {
  var n = e.reactions;
  if (n !== null && !(Z !== null && Ge.call(Z, e)))
    for (var i = 0; i < n.length; i++) {
      var l = n[i];
      (l.f & D) !== 0 ? fn(
        /** @type {Derived} */
        l,
        t,
        !1
      ) : t === l && (r ? T(l, M) : (l.f & R) !== 0 && T(l, ae), ir(
        /** @type {Effect} */
        l
      ));
    }
}
function an(e) {
  var k;
  var t = O, r = L, n = Y, i = w, l = Z, a = ne, o = te, f = je, u = e.f;
  O = /** @type {null | Value[]} */
  null, L = 0, Y = null, w = (u & (me | Se)) === 0 ? e : null, Z = null, Qe(e.ctx), te = !1, je = ++Ne, e.ac !== null && (fr(() => {
    e.ac.abort(de);
  }), e.ac = null);
  try {
    e.f |= Rt;
    var d = (
      /** @type {Function} */
      e.fn
    ), _ = d();
    e.f |= et;
    var v = e.deps, c = g?.is_fork;
    if (O !== null) {
      var h;
      if (c || ht(e, L), v !== null && L > 0)
        for (v.length = L + O.length, h = 0; h < O.length; h++)
          v[L + h] = O[h];
      else
        e.deps = v = O;
      if (ar() && (e.f & $) !== 0)
        for (h = L; h < v.length; h++)
          ((k = v[h]).reactions ?? (k.reactions = [])).push(e);
    } else !c && v !== null && L < v.length && (ht(e, L), v.length = L);
    if (Mr() && Y !== null && !te && v !== null && (e.f & (D | ae | M)) === 0)
      for (h = 0; h < /** @type {Source[]} */
      Y.length; h++)
        fn(
          Y[h],
          /** @type {Effect} */
          e
        );
    if (i !== null && i !== e) {
      if (Ne++, i.deps !== null)
        for (let b = 0; b < r; b += 1)
          i.deps[b].rv = Ne;
      if (t !== null)
        for (const b of t)
          b.rv = Ne;
      Y !== null && (n === null ? n = Y : n.push(.../** @type {Source[]} */
      Y));
    }
    return (e.f & xe) !== 0 && (e.f ^= xe), _;
  } catch (b) {
    return Fr(b);
  } finally {
    e.f ^= Rt, O = t, L = r, Y = n, w = i, Z = l, Qe(a), te = o, je = f;
  }
}
function gi(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var n = gn.call(r, e);
    if (n !== -1) {
      var i = r.length - 1;
      i === 0 ? r = t.reactions = null : (r[n] = r[i], r.pop());
    }
  }
  if (r === null && (t.f & D) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (O === null || !Ge.call(O, t))) {
    var l = (
      /** @type {Derived} */
      t
    );
    (l.f & $) !== 0 && (l.f ^= $, l.f &= ~Le), l.v !== N && rr(l), ti(l), ht(l, 0);
  }
}
function ht(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var n = t; n < r.length; n++)
      gi(e, r[n]);
}
function Xe(e) {
  var t = e.f;
  if ((t & re) === 0) {
    T(e, R);
    var r = y, n = At;
    y = e, At = !0;
    try {
      (t & (fe | Ar)) !== 0 ? di(e) : or(e), Qr(e);
      var i = an(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = sn;
      var l;
    } finally {
      At = n, y = r;
    }
  }
}
async function mi() {
  await Promise.resolve(), zn();
}
function C(e) {
  var t = e.f, r = (t & D) !== 0;
  if (w !== null && !te) {
    var n = y !== null && (y.f & re) !== 0;
    if (!n && (Z === null || !Ge.call(Z, e))) {
      var i = w.deps;
      if ((w.f & Rt) !== 0)
        e.rv < Ne && (e.rv = Ne, O === null && i !== null && i[L] === e ? L++ : O === null ? O = [e] : O.push(e));
      else {
        (w.deps ?? (w.deps = [])).push(e);
        var l = e.reactions;
        l === null ? e.reactions = [w] : Ge.call(l, w) || l.push(w);
      }
    }
  }
  if (Ve && Ie.has(e))
    return Ie.get(e);
  if (r) {
    var a = (
      /** @type {Derived} */
      e
    );
    if (Ve) {
      var o = a.v;
      return ((a.f & R) === 0 && a.reactions !== null || un(a)) && (o = sr(a)), Ie.set(a, o), o;
    }
    var f = (a.f & $) === 0 && !te && w !== null && (At || (w.f & $) !== 0), u = (a.f & et) === 0;
    wt(a) && (f && (a.f |= $), Hr(a)), f && !u && (Yr(a), on(a));
  }
  if (ee?.has(e))
    return ee.get(e);
  if ((e.f & xe) !== 0)
    throw e.v;
  return e.v;
}
function on(e) {
  if (e.f |= $, e.deps !== null)
    for (const t of e.deps)
      (t.reactions ?? (t.reactions = [])).push(e), (t.f & D) !== 0 && (t.f & $) === 0 && (Yr(
        /** @type {Derived} */
        t
      ), on(
        /** @type {Derived} */
        t
      ));
}
function un(e) {
  if (e.v === N) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (Ie.has(t) || (t.f & D) !== 0 && un(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function cn(e) {
  var t = te;
  try {
    return te = !0, e();
  } finally {
    te = t;
  }
}
const wi = ["touchstart", "touchmove"];
function bi(e) {
  return wi.includes(e);
}
const Ce = Symbol("events"), hn = /* @__PURE__ */ new Set(), Xt = /* @__PURE__ */ new Set();
function yr(e, t, r) {
  (t[Ce] ?? (t[Ce] = {}))[e] = r;
}
function yi(e) {
  for (var t = 0; t < e.length; t++)
    hn.add(e[t]);
  for (var r of Xt)
    r(e);
}
let kr = null;
function Er(e) {
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), n = e.type, i = e.composedPath?.() || [], l = (
    /** @type {null | Element} */
    i[0] || e.target
  );
  kr = e;
  var a = 0, o = kr === e && e[Ce];
  if (o) {
    var f = i.indexOf(o);
    if (f !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e[Ce] = t;
      return;
    }
    var u = i.indexOf(t);
    if (u === -1)
      return;
    f <= u && (a = f);
  }
  if (l = /** @type {Element} */
  i[a] || e.target, l !== t) {
    wn(e, "currentTarget", {
      configurable: !0,
      get() {
        return l || r;
      }
    });
    var d = w, _ = y;
    J(null), oe(null);
    try {
      for (var v, c = []; l !== null; ) {
        var h = l.assignedSlot || l.parentNode || /** @type {any} */
        l.host || null;
        try {
          var k = l[Ce]?.[n];
          k != null && (!/** @type {any} */
          l.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === l) && k.call(l, e);
        } catch (b) {
          v ? c.push(b) : v = b;
        }
        if (e.cancelBubble || h === t || h === null)
          break;
        l = h;
      }
      if (v) {
        for (let b of c)
          queueMicrotask(() => {
            throw b;
          });
        throw v;
      }
    } finally {
      e[Ce] = t, delete e.currentTarget, J(d), oe(_);
    }
  }
}
const ki = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (e) => e
  })
);
function Ei(e) {
  return (
    /** @type {string} */
    ki?.createHTML(e) ?? e
  );
}
function dn(e) {
  var t = Gr("template");
  return t.innerHTML = Ei(e.replaceAll("<!>", "<!---->")), t.content;
}
function ur(e, t) {
  var r = (
    /** @type {Effect} */
    y
  );
  r.nodes === null && (r.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function cr(e, t) {
  var r = (t & Fn) !== 0, n, i = !e.startsWith("<!>");
  return () => {
    n === void 0 && (n = dn(i ? e : "<!>" + e), n = /** @type {TemplateNode} */
    /* @__PURE__ */ He(n));
    var l = (
      /** @type {TemplateNode} */
      r || Wr ? document.importNode(n, !0) : n.cloneNode(!0)
    );
    return ur(l, l), l;
  };
}
// @__NO_SIDE_EFFECTS__
function xi(e, t, r = "svg") {
  var n = !e.startsWith("<!>"), i = `<${r}>${n ? e : "<!>" + e}</${r}>`, l;
  return () => {
    if (!l) {
      var a = (
        /** @type {DocumentFragment} */
        dn(i)
      ), o = (
        /** @type {Element} */
        /* @__PURE__ */ He(a)
      );
      for (l = document.createDocumentFragment(); /* @__PURE__ */ He(o); )
        l.appendChild(
          /** @type {TemplateNode} */
          /* @__PURE__ */ He(o)
        );
    }
    var f = (
      /** @type {TemplateNode} */
      l.cloneNode(!0)
    );
    {
      var u = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ He(f)
      ), d = (
        /** @type {TemplateNode} */
        f.lastChild
      );
      ur(u, d);
    }
    return f;
  };
}
// @__NO_SIDE_EFFECTS__
function Si(e, t) {
  return /* @__PURE__ */ xi(e, t, "svg");
}
function Ti(e = "") {
  {
    var t = ct(e + "");
    return ur(t, t), t;
  }
}
function it(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function xr(e, t) {
  var r = t == null ? "" : typeof t == "object" ? `${t}` : t;
  r !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = r, e.nodeValue = `${r}`);
}
function Ai(e, t) {
  return Ri(e, t);
}
const bt = /* @__PURE__ */ new Map();
function Ri(e, { target: t, anchor: r, props: n = {}, events: i, context: l, intro: a = !0, transformError: o }) {
  ni();
  var f = void 0, u = ui(() => {
    var d = r ?? t.appendChild(ct());
    Un(
      /** @type {TemplateNode} */
      d,
      {
        pending: () => {
        }
      },
      (c) => {
        Nr({});
        var h = (
          /** @type {ComponentContext} */
          ne
        );
        l && (h.c = l), i && (n.$$events = i), f = e(c, n) || {}, Cr();
      },
      o
    );
    var _ = /* @__PURE__ */ new Set(), v = (c) => {
      for (var h = 0; h < c.length; h++) {
        var k = c[h];
        if (!_.has(k)) {
          _.add(k);
          var b = bi(k);
          for (const rt of [t, document]) {
            var j = bt.get(rt);
            j === void 0 && (j = /* @__PURE__ */ new Map(), bt.set(rt, j));
            var be = j.get(k);
            be === void 0 ? (rt.addEventListener(k, Er, { passive: b }), j.set(k, 1)) : j.set(k, be + 1);
          }
        }
      }
    };
    return v(mn(hn)), Xt.add(v), () => {
      for (var c of _)
        for (const b of [t, document]) {
          var h = (
            /** @type {Map<string, number>} */
            bt.get(b)
          ), k = (
            /** @type {number} */
            h.get(c)
          );
          --k == 0 ? (b.removeEventListener(c, Er), h.delete(c), h.size === 0 && bt.delete(b)) : h.set(c, k);
        }
      Xt.delete(v), d !== r && d.parentNode?.removeChild(d);
    };
  });
  return er.set(f, u), f;
}
let er = /* @__PURE__ */ new WeakMap();
function Ni(e, t) {
  const r = er.get(e);
  return r ? (er.delete(e), r(t)) : Promise.resolve();
}
var X, le, z, Oe, gt, mt, Ft;
class Ci {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, r = !0) {
    /** @type {TemplateNode} */
    Q(this, "anchor");
    /** @type {Map<Batch, Key>} */
    p(this, X, /* @__PURE__ */ new Map());
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
    p(this, le, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    p(this, z, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    p(this, Oe, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    p(this, gt, !0);
    /**
     * @param {Batch} batch
     */
    p(this, mt, (t) => {
      if (s(this, X).has(t)) {
        var r = (
          /** @type {Key} */
          s(this, X).get(t)
        ), n = s(this, le).get(r);
        if (n)
          _i(n), s(this, Oe).delete(r);
        else {
          var i = s(this, z).get(r);
          i && (s(this, le).set(r, i.effect), s(this, z).delete(r), i.fragment.lastChild.remove(), this.anchor.before(i.fragment), n = i.effect);
        }
        for (const [l, a] of s(this, X)) {
          if (s(this, X).delete(l), l === t)
            break;
          const o = s(this, z).get(a);
          o && (H(o.effect), s(this, z).delete(a));
        }
        for (const [l, a] of s(this, le)) {
          if (l === r || s(this, Oe).has(l)) continue;
          const o = () => {
            if (Array.from(s(this, X).values()).includes(l)) {
              var u = document.createDocumentFragment();
              rn(a, u), u.append(ct()), s(this, z).set(l, { effect: a, fragment: u });
            } else
              H(a);
            s(this, Oe).delete(l), s(this, le).delete(l);
          };
          s(this, gt) || !n ? (s(this, Oe).add(l), ot(a, o, !1)) : o();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    p(this, Ft, (t) => {
      s(this, X).delete(t);
      const r = Array.from(s(this, X).values());
      for (const [n, i] of s(this, z))
        r.includes(n) || (H(i.effect), s(this, z).delete(n));
    });
    this.anchor = t, m(this, gt, r);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, r) {
    var n = (
      /** @type {Batch} */
      g
    ), i = ii();
    if (r && !s(this, le).has(t) && !s(this, z).has(t))
      if (i) {
        var l = document.createDocumentFragment(), a = ct();
        l.append(a), s(this, z).set(t, {
          effect: he(() => r(a)),
          fragment: l
        });
      } else
        s(this, le).set(
          t,
          he(() => r(this.anchor))
        );
    if (s(this, X).set(n, t), i) {
      for (const [o, f] of s(this, le))
        o === t ? n.unskip_effect(f) : n.skip_effect(f);
      for (const [o, f] of s(this, z))
        o === t ? n.unskip_effect(f.effect) : n.skip_effect(f.effect);
      n.oncommit(s(this, mt)), n.ondiscard(s(this, Ft));
    } else
      s(this, mt).call(this, n);
  }
}
X = new WeakMap(), le = new WeakMap(), z = new WeakMap(), Oe = new WeakMap(), gt = new WeakMap(), mt = new WeakMap(), Ft = new WeakMap();
function Ht(e, t, r = !1) {
  var n = new Ci(e), i = r ? Je : 0;
  function l(a, o) {
    n.ensure(a, o);
  }
  Jr(() => {
    var a = !1;
    t((o, f = 0) => {
      a = !0, l(f, o);
    }), a || l(-1, null);
  }, i);
}
function Mi(e, t) {
  ci(() => {
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
      const i = Gr("style");
      i.id = t.hash, i.textContent = t.code, n.appendChild(i);
    }
  });
}
function Di(e, t, r = t) {
  var n = /* @__PURE__ */ new WeakSet();
  li(e, "input", async (i) => {
    var l = i ? e.defaultValue : e.value;
    if (l = Yt(e) ? Bt(l) : l, r(l), g !== null && n.add(g), await mi(), l !== (l = t())) {
      var a = e.selectionStart, o = e.selectionEnd, f = e.value.length;
      if (e.value = l ?? "", o !== null) {
        var u = e.value.length;
        a === o && o === f && u > f ? (e.selectionStart = u, e.selectionEnd = u) : (e.selectionStart = a, e.selectionEnd = Math.min(o, u));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  cn(t) == null && e.value && (r(Yt(e) ? Bt(e.value) : e.value), g !== null && n.add(g)), Zr(() => {
    var i = t();
    if (e === document.activeElement) {
      var l = (
        /** @type {Batch} */
        g
      );
      if (n.has(l))
        return;
    }
    Yt(e) && i === Bt(e.value) || e.type === "date" && !i && !e.value || i !== e.value && (e.value = i ?? "");
  });
}
function Yt(e) {
  var t = e.type;
  return t === "number" || t === "range";
}
function Bt(e) {
  return e === "" ? null : +e;
}
const Fi = "5";
var Sr;
typeof window < "u" && ((Sr = window.__svelte ?? (window.__svelte = {})).v ?? (Sr.v = /* @__PURE__ */ new Set())).add(Fi);
var Pi = /* @__PURE__ */ Si('<svg class="inline-block w-4 h-4 mr-2 animate-spin" viewBox="0 0 24 24" fill="none"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path></svg> Calling backend…', 1), Oi = /* @__PURE__ */ cr('<div class="mt-4 p-3.5 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg"><p class="text-sm font-medium text-green-800 dark:text-green-300"> </p></div>'), Ii = /* @__PURE__ */ cr('<div class="mt-4 p-3.5 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg"><p class="text-sm text-red-800 dark:text-red-300"> </p></div>'), ji = /* @__PURE__ */ cr(`<div class="max-w-md mx-auto p-6"><h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Hello World</h2> <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm"><label for="hw-name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Your name</label> <input id="hw-name" type="text" placeholder="Enter your name..." class="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg
				bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100
				placeholder-gray-400 dark:placeholder-gray-500
				focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500
				transition-colors"/> <button class="hw-btn svelte-1usqlc3"><!></button> <!> <!></div></div>`);
const Li = {
  hash: "svelte-1usqlc3",
  code: ".hw-btn.svelte-1usqlc3 {margin-top:1rem;display:block;width:100%;padding:0.625rem 1rem;font-size:0.875rem;font-weight:500;color:#ffffff !important;background-color:#4f46e5 !important;border:none !important;border-radius:0.5rem;cursor:pointer;transition:background-color 150ms;}.hw-btn.svelte-1usqlc3:hover:not(:disabled) {background-color:#4338ca !important;}.hw-btn.svelte-1usqlc3:disabled {opacity:0.5;cursor:not-allowed;}"
};
function qi(e, t) {
  Nr(t, !0), Mi(e, Li);
  let r = /* @__PURE__ */ K(""), n = /* @__PURE__ */ K(""), i = /* @__PURE__ */ K(!1), l = /* @__PURE__ */ K(""), a = /* @__PURE__ */ Xn(() => !C(i) && C(r).trim().length > 0);
  async function o() {
    I(i, !0), I(l, ""), I(n, "");
    try {
      const E = await t.ctx.callSync("greet", { name: C(r) });
      I(n, typeof E == "string" ? E : String(E), !0);
    } catch (E) {
      I(l, E?.message ?? String(E), !0);
    } finally {
      I(i, !1);
    }
  }
  function f(E) {
    E.key === "Enter" && C(a) && o();
  }
  var u = ji(), d = nt(Ae(u), 2), _ = nt(Ae(d), 2), v = nt(_, 2), c = Ae(v);
  {
    var h = (E) => {
      var ue = Pi();
      it(E, ue);
    }, k = (E) => {
      var ue = Ti("Say Hello");
      it(E, ue);
    };
    Ht(c, (E) => {
      C(i) ? E(h) : E(k, -1);
    });
  }
  var b = nt(v, 2);
  {
    var j = (E) => {
      var ue = Oi(), It = Ae(ue), jt = Ae(It);
      zt(() => xr(jt, C(n))), it(E, ue);
    };
    Ht(b, (E) => {
      C(n) && E(j);
    });
  }
  var be = nt(b, 2);
  {
    var rt = (E) => {
      var ue = Ii(), It = Ae(ue), jt = Ae(It);
      zt(() => xr(jt, C(l))), it(E, ue);
    };
    Ht(be, (E) => {
      C(l) && E(rt);
    });
  }
  zt(() => v.disabled = !C(a)), yr("keydown", _, f), Di(_, () => C(r), (E) => I(r, E)), yr("click", v, o), it(e, u), Cr();
}
yi(["keydown", "click"]);
function Hi(e, t) {
  const r = Ai(qi, { target: e, props: { ctx: t } });
  return {
    unmount() {
      try {
        Ni(r);
      } catch {
      }
    }
  };
}
export {
  Hi as default
};
