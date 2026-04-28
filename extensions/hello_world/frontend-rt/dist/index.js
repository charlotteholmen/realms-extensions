var dn = Object.defineProperty;
var hr = (e) => {
  throw TypeError(e);
};
var _n = (e, t, r) => t in e ? dn(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var Q = (e, t, r) => _n(e, typeof t != "symbol" ? t + "" : t, r), Lt = (e, t, r) => t.has(e) || hr("Cannot " + r);
var s = (e, t, r) => (Lt(e, t, "read from private field"), r ? r.call(e) : t.get(e)), p = (e, t, r) => t.has(e) ? hr("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), m = (e, t, r, n) => (Lt(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r), E = (e, t, r) => (Lt(e, t, "access private method"), r);
var vn = Array.isArray, pn = Array.prototype.indexOf, Ge = Array.prototype.includes, gn = Array.from, mn = Object.defineProperty, st = Object.getOwnPropertyDescriptor, wn = Object.prototype, bn = Array.prototype, yn = Object.getPrototypeOf, dr = Object.isExtensible;
const kn = () => {
};
function En(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function Tr() {
  var e, t, r = new Promise((n, i) => {
    e = n, t = i;
  });
  return { promise: r, resolve: e, reject: t };
}
const D = 2, ot = 4, Pt = 8, Ar = 1 << 24, fe = 16, me = 32, xe = 64, Ut = 128, $ = 512, R = 1024, C = 2048, ae = 4096, G = 8192, re = 16384, Xe = 32768, _r = 1 << 25, Ze = 65536, Wt = 1 << 17, xn = 1 << 18, et = 1 << 19, Sn = 1 << 20, Le = 65536, Rt = 1 << 21, ut = 1 << 22, Ee = 1 << 23, Vt = Symbol("$state"), de = new class extends Error {
  constructor() {
    super(...arguments);
    Q(this, "name", "StaleReactionError");
    Q(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
function Tn() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function An() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Rn() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Nn() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Mn() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Cn() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
const Dn = 2, N = Symbol(), Fn = "http://www.w3.org/1999/xhtml";
function Pn() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function On() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function Rr(e) {
  return e === this.v;
}
let ne = null;
function Je(e) {
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
function Mr(e) {
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
function Cr() {
  return !0;
}
let Re = [];
function Dr() {
  var e = Re;
  Re = [], En(e);
}
function ze(e) {
  if (Re.length === 0 && !lt) {
    var t = Re;
    queueMicrotask(() => {
      t === Re && Dr();
    });
  }
  Re.push(e);
}
function In() {
  for (; Re.length > 0; )
    Dr();
}
function Fr(e) {
  var t = y;
  if (t === null)
    return w.f |= Ee, e;
  if ((t.f & Xe) === 0 && (t.f & ot) === 0)
    throw e;
  ke(e, t);
}
function ke(e, t) {
  for (; t !== null; ) {
    if ((t.f & Ut) !== 0) {
      if ((t.f & Xe) === 0)
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
const jn = -7169;
function T(e, t) {
  e.f = e.f & jn | t;
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
  (e.f & C) !== 0 ? t.add(e) : (e.f & ae) !== 0 && r.add(e), Pr(e.deps), T(e, R);
}
const Te = /* @__PURE__ */ new Set();
let g = null, ee = null, Kt = null, lt = !1, Ht = !1, Ye = null, yt = null;
var vr = 0;
let Ln = 1;
var Be, Ue, Ce, _e, ie, dt, V, _t, be, ve, se, We, Ke, De, A, kt, Ir, Et, $t, xt, Vn;
const Ct = class Ct {
  constructor() {
    p(this, A);
    Q(this, "id", Ln++);
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
    p(this, Ce, /* @__PURE__ */ new Set());
    /**
     * Async effects that are currently in flight
     * @type {Map<Effect, number>}
     */
    p(this, _e, /* @__PURE__ */ new Map());
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
    p(this, V, []);
    /**
     * Effects created while this batch was active.
     * @type {Effect[]}
     */
    p(this, _t, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    p(this, be, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    p(this, ve, /* @__PURE__ */ new Set());
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
        T(i, C), r(i);
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
    t.v !== N && !this.previous.has(t) && this.previous.set(t, t.v), (t.f & Ee) === 0 && (this.current.set(t, [r, n]), ee?.set(t, r)), this.is_fork || (t.v = r);
  }
  activate() {
    g = this;
  }
  deactivate() {
    g = null, ee = null;
  }
  flush() {
    try {
      Ht = !0, g = this, E(this, A, Et).call(this);
    } finally {
      vr = 0, Kt = null, Ye = null, yt = null, Ht = !1, g = null, ee = null, Ie.clear();
    }
  }
  discard() {
    for (const t of s(this, Ue)) t(this);
    s(this, Ue).clear(), s(this, Ce).clear(), Te.delete(this);
  }
  /**
   * @param {Effect} effect
   */
  register_created_effect(t) {
    s(this, _t).push(t);
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  increment(t, r) {
    let n = s(this, _e).get(r) ?? 0;
    if (s(this, _e).set(r, n + 1), t) {
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
    let i = s(this, _e).get(r) ?? 0;
    if (i === 1 ? s(this, _e).delete(r) : s(this, _e).set(r, i - 1), t) {
      let l = s(this, ie).get(r) ?? 0;
      l === 1 ? s(this, ie).delete(r) : s(this, ie).set(r, l - 1);
    }
    s(this, Ke) || n || (m(this, Ke, !0), ze(() => {
      m(this, Ke, !1), this.flush();
    }));
  }
  /**
   * @param {Set<Effect>} dirty_effects
   * @param {Set<Effect>} maybe_dirty_effects
   */
  transfer_effects(t, r) {
    for (const n of t)
      s(this, be).add(n);
    for (const n of r)
      s(this, ve).add(n);
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
    s(this, Ce).add(t);
  }
  run_fork_commit_callbacks() {
    for (const t of s(this, Ce)) t(this);
    s(this, Ce).clear();
  }
  settled() {
    return (s(this, dt) ?? m(this, dt, Tr())).promise;
  }
  static ensure() {
    if (g === null) {
      const t = g = new Ct();
      Ht || (Te.add(g), lt || ze(() => {
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
    if (Kt = t, t.b?.is_pending && (t.f & (ot | Pt | Ar)) !== 0 && (t.f & Xe) === 0) {
      t.b.defer_effect(t);
      return;
    }
    for (var r = t; r.parent !== null; ) {
      r = r.parent;
      var n = r.f;
      if (Ye !== null && r === y && (w === null || (w.f & D) === 0))
        return;
      if ((n & (xe | me)) !== 0) {
        if ((n & R) === 0)
          return;
        r.f ^= R;
      }
    }
    s(this, V).push(r);
  }
};
Be = new WeakMap(), Ue = new WeakMap(), Ce = new WeakMap(), _e = new WeakMap(), ie = new WeakMap(), dt = new WeakMap(), V = new WeakMap(), _t = new WeakMap(), be = new WeakMap(), ve = new WeakMap(), se = new WeakMap(), We = new WeakMap(), Ke = new WeakMap(), De = new WeakMap(), A = new WeakSet(), kt = function() {
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
  if (vr++ > 1e3 && (Te.delete(this), Yn()), !E(this, A, kt).call(this)) {
    for (const f of s(this, be))
      s(this, ve).delete(f), T(f, C), this.schedule(f);
    for (const f of s(this, ve))
      T(f, ae), this.schedule(f);
  }
  const t = s(this, V);
  m(this, V, []), this.apply();
  var r = Ye = [], n = [], i = yt = [];
  for (const f of t)
    try {
      E(this, A, $t).call(this, f, r, n);
    } catch (u) {
      throw Vr(f), u;
    }
  if (g = null, i.length > 0) {
    var l = Ct.ensure();
    for (const f of i)
      l.schedule(f);
  }
  if (Ye = null, yt = null, E(this, A, kt).call(this) || E(this, A, Ir).call(this)) {
    E(this, A, xt).call(this, n), E(this, A, xt).call(this, r);
    for (const [f, u] of s(this, se))
      Lr(f, u);
  } else {
    s(this, _e).size === 0 && Te.delete(this), s(this, be).clear(), s(this, ve).clear();
    for (const f of s(this, Be)) f(this);
    s(this, Be).clear(), pr(n), pr(r), s(this, dt)?.resolve();
  }
  var a = (
    /** @type {Batch | null} */
    /** @type {unknown} */
    g
  );
  if (s(this, V).length > 0) {
    const f = a ?? (a = this);
    s(f, V).push(...s(this, V).filter((u) => !s(f, V).includes(u)));
  }
  a !== null && (Te.add(a), E(o = a, A, Et).call(o));
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
    var l = i.f, a = (l & (me | xe)) !== 0, o = a && (l & R) !== 0, f = o || (l & G) !== 0 || s(this, se).has(i);
    if (!f && i.fn !== null) {
      a ? i.f ^= R : (l & ot) !== 0 ? r.push(i) : wt(i) && ((l & fe) !== 0 && s(this, ve).add(i), Qe(i));
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
    Or(t[r], s(this, be), s(this, ve));
}, Vn = function() {
  var d, v, _;
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
            (k.f & (fe | ut)) !== 0 ? c.schedule(k) : E(b = c, A, xt).call(b, [k]);
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
      for (const h of s(this, _t))
        (h.f & (re | G | Wt)) === 0 && nr(h, f, a) && ((h.f & (ut | fe)) !== 0 ? (T(h, C), c.schedule(h)) : s(c, be).add(h));
      if (s(c, V).length > 0) {
        c.apply();
        for (var u of s(c, V))
          E(d = c, A, $t).call(d, u, [], []);
        m(c, V, []);
      }
      c.deactivate();
    }
  }
  for (const c of Te)
    s(c, De).has(this) && (s(c, De).delete(this), s(c, De).size === 0 && !E(v = c, A, kt).call(v) && (c.activate(), E(_ = c, A, Et).call(_)));
};
let Ve = Ct;
function Hn(e) {
  var t = lt;
  lt = !0;
  try {
    for (var r; ; ) {
      if (In(), g === null)
        return (
          /** @type {T} */
          r
        );
      g.flush();
    }
  } finally {
    lt = t;
  }
}
function Yn() {
  try {
    An();
  } catch (e) {
    ke(e, Kt);
  }
}
let ce = null;
function pr(e) {
  var t = e.length;
  if (t !== 0) {
    for (var r = 0; r < t; ) {
      var n = e[r++];
      if ((n.f & (re | G)) === 0 && wt(n) && (ce = /* @__PURE__ */ new Set(), Qe(n), n.deps === null && n.first === null && n.nodes === null && n.teardown === null && n.ac === null && Qr(n), ce?.size > 0)) {
        Ie.clear();
        for (const i of ce) {
          if ((i.f & (re | G)) !== 0) continue;
          const l = [i];
          let a = i.parent;
          for (; a !== null; )
            ce.has(a) && (ce.delete(a), l.push(a)), a = a.parent;
          for (let o = l.length - 1; o >= 0; o--) {
            const f = l[o];
            (f.f & (re | G)) === 0 && Qe(f);
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
      ) : (l & (ut | fe)) !== 0 && (l & C) === 0 && nr(i, t, n) && (T(i, C), ir(
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
    (e.f & C) !== 0 ? t.d.push(e) : (e.f & ae) !== 0 && t.m.push(e), T(e, R);
    for (var r = e.first; r !== null; )
      Lr(r, t), r = r.next;
  }
}
function Vr(e) {
  T(e, R);
  for (var t = e.first; t !== null; )
    Vr(t), t = t.next;
}
function qn(e) {
  let t = 0, r = Ot(0), n;
  return () => {
    ar() && (M(r), Gr(() => (t === 0 && (n = un(() => e(() => ft(r)))), t += 1, () => {
      ze(() => {
        t -= 1, t === 0 && (n?.(), n = void 0, ft(r));
      });
    })));
  };
}
var zn = Ze | et;
function Bn(e, t, r, n) {
  new Un(e, t, r, n);
}
var B, tr, U, Fe, P, W, F, H, pe, Pe, ye, $e, vt, pt, ge, Dt, x, Wn, Kn, $n, Gt, St, Tt, Zt, Jt;
class Un {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(t, r, n, i) {
    p(this, x);
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
    p(this, H, null);
    /** @type {DocumentFragment | null} */
    p(this, pe, null);
    p(this, Pe, 0);
    p(this, ye, 0);
    p(this, $e, !1);
    /** @type {Set<Effect>} */
    p(this, vt, /* @__PURE__ */ new Set());
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
    p(this, Dt, qn(() => (m(this, ge, Ot(s(this, Pe))), () => {
      m(this, ge, null);
    })));
    m(this, B, t), m(this, U, r), m(this, Fe, (l) => {
      var a = (
        /** @type {Effect} */
        y
      );
      a.b = this, a.f |= Ut, n(l);
    }), this.parent = /** @type {Effect} */
    y.b, this.transform_error = i ?? this.parent?.transform_error ?? ((l) => l), m(this, P, Zr(() => {
      E(this, x, Gt).call(this);
    }, zn));
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    Or(t, s(this, vt), s(this, pt));
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
    E(this, x, Zt).call(this, t, r), m(this, Pe, s(this, Pe) + t), !(!s(this, ge) || s(this, $e)) && (m(this, $e, !0), ze(() => {
      m(this, $e, !1), s(this, ge) && Mt(s(this, ge), s(this, Pe));
    }));
  }
  get_effect_pending() {
    return s(this, Dt).call(this), M(
      /** @type {Source<number>} */
      s(this, ge)
    );
  }
  /** @param {unknown} error */
  error(t) {
    if (!s(this, U).onerror && !s(this, U).failed)
      throw t;
    g?.is_fork ? (s(this, W) && g.skip_effect(s(this, W)), s(this, F) && g.skip_effect(s(this, F)), s(this, H) && g.skip_effect(s(this, H)), g.on_fork_commit(() => {
      E(this, x, Jt).call(this, t);
    })) : E(this, x, Jt).call(this, t);
  }
}
B = new WeakMap(), tr = new WeakMap(), U = new WeakMap(), Fe = new WeakMap(), P = new WeakMap(), W = new WeakMap(), F = new WeakMap(), H = new WeakMap(), pe = new WeakMap(), Pe = new WeakMap(), ye = new WeakMap(), $e = new WeakMap(), vt = new WeakMap(), pt = new WeakMap(), ge = new WeakMap(), Dt = new WeakMap(), x = new WeakSet(), Wn = function() {
  try {
    m(this, W, he(() => s(this, Fe).call(this, s(this, B))));
  } catch (t) {
    this.error(t);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
Kn = function(t) {
  const r = s(this, U).failed;
  r && m(this, H, he(() => {
    r(
      s(this, B),
      () => t,
      () => () => {
      }
    );
  }));
}, $n = function() {
  const t = s(this, U).pending;
  t && (this.is_pending = !0, m(this, F, he(() => t(s(this, B)))), ze(() => {
    var r = m(this, pe, document.createDocumentFragment()), n = ct();
    r.append(n), m(this, W, E(this, x, Tt).call(this, () => he(() => s(this, Fe).call(this, n)))), s(this, ye) === 0 && (s(this, B).before(r), m(this, pe, null), at(
      /** @type {Effect} */
      s(this, F),
      () => {
        m(this, F, null);
      }
    ), E(this, x, St).call(
      this,
      /** @type {Batch} */
      g
    ));
  }));
}, Gt = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), m(this, ye, 0), m(this, Pe, 0), m(this, W, he(() => {
      s(this, Fe).call(this, s(this, B));
    })), s(this, ye) > 0) {
      var t = m(this, pe, document.createDocumentFragment());
      tn(s(this, W), t);
      const r = (
        /** @type {(anchor: Node) => void} */
        s(this, U).pending
      );
      m(this, F, he(() => r(s(this, B))));
    } else
      E(this, x, St).call(
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
  this.is_pending = !1, t.transfer_effects(s(this, vt), s(this, pt));
}, /**
 * @template T
 * @param {() => T} fn
 */
Tt = function(t) {
  var r = y, n = w, i = ne;
  oe(s(this, P)), J(s(this, P)), Je(s(this, P).ctx);
  try {
    return Ve.ensure(), t();
  } catch (l) {
    return Fr(l), null;
  } finally {
    oe(r), J(n), Je(i);
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
    this.parent && E(n = this.parent, x, Zt).call(n, t, r);
    return;
  }
  m(this, ye, s(this, ye) + t), s(this, ye) === 0 && (E(this, x, St).call(this, r), s(this, F) && at(s(this, F), () => {
    m(this, F, null);
  }), s(this, pe) && (s(this, B).before(s(this, pe)), m(this, pe, null)));
}, /**
 * @param {unknown} error
 */
Jt = function(t) {
  s(this, W) && (q(s(this, W)), m(this, W, null)), s(this, F) && (q(s(this, F)), m(this, F, null)), s(this, H) && (q(s(this, H)), m(this, H, null));
  var r = s(this, U).onerror;
  let n = s(this, U).failed;
  var i = !1, l = !1;
  const a = () => {
    if (i) {
      On();
      return;
    }
    i = !0, l && Cn(), s(this, H) !== null && at(s(this, H), () => {
      m(this, H, null);
    }), E(this, x, Tt).call(this, () => {
      E(this, x, Gt).call(this);
    });
  }, o = (f) => {
    try {
      l = !0, r?.(f, a), l = !1;
    } catch (u) {
      ke(u, s(this, P) && s(this, P).parent);
    }
    n && m(this, H, E(this, x, Tt).call(this, () => {
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
        return ke(
          u,
          /** @type {Effect} */
          s(this, P).parent
        ), null;
      }
    }));
  };
  ze(() => {
    var f;
    try {
      f = this.transform_error(t);
    } catch (u) {
      ke(u, s(this, P) && s(this, P).parent);
      return;
    }
    f !== null && typeof f == "object" && typeof /** @type {any} */
    f.then == "function" ? f.then(
      o,
      /** @param {unknown} e */
      (u) => ke(u, s(this, P) && s(this, P).parent)
    ) : o(f);
  });
};
function Gn(e, t, r, n) {
  const i = Yr;
  var l = e.filter((_) => !_.settled);
  if (r.length === 0 && l.length === 0) {
    n(t.map(i));
    return;
  }
  var a = (
    /** @type {Effect} */
    y
  ), o = Zn(), f = l.length === 1 ? l[0].promise : l.length > 1 ? Promise.all(l.map((_) => _.promise)) : null;
  function u(_) {
    o();
    try {
      n(_);
    } catch (c) {
      (a.f & re) === 0 && ke(c, a);
    }
    Nt();
  }
  if (r.length === 0) {
    f.then(() => u(t.map(i)));
    return;
  }
  var d = Hr();
  function v() {
    Promise.all(r.map((_) => /* @__PURE__ */ Jn(_))).then((_) => u([...t.map(i), ..._])).catch((_) => ke(_, a)).finally(() => d());
  }
  f ? f.then(() => {
    o(), v(), Nt();
  }) : v();
}
function Zn() {
  var e = (
    /** @type {Effect} */
    y
  ), t = w, r = ne, n = (
    /** @type {Batch} */
    g
  );
  return function(l = !0) {
    oe(e), J(t), Je(r), l && (e.f & re) === 0 && (n?.activate(), n?.apply());
  };
}
function Nt(e = !0) {
  oe(null), J(null), Je(null), e && g?.deactivate();
}
function Hr() {
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
function Yr(e) {
  var t = D | C;
  return y !== null && (y.f |= et), {
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
function Jn(e, t, r) {
  let n = (
    /** @type {Effect | null} */
    y
  );
  n === null && Tn();
  var i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), l = Ot(
    /** @type {V} */
    N
  ), a = !w, o = /* @__PURE__ */ new Map();
  return ci(() => {
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
      if ((f.f & Xe) !== 0)
        var v = Hr();
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
    const _ = (c, h = void 0) => {
      if (v) {
        var k = h === de;
        v(k);
      }
      if (!(h === de || (f.f & re) !== 0)) {
        if (d.activate(), h)
          l.f |= Ee, Mt(l, h);
        else {
          (l.f & Ee) !== 0 && (l.f ^= Ee), Mt(l, c);
          for (const [b, j] of o) {
            if (o.delete(b), b === d) break;
            j.reject(de);
          }
        }
        d.deactivate();
      }
    };
    u.promise.then(_, (c) => _(null, c || "unknown"));
  }), ai(() => {
    for (const f of o.values())
      f.reject(de);
  }), new Promise((f) => {
    function u(d) {
      function v() {
        d === i ? f(l) : u(i);
      }
      d.then(v, v);
    }
    u(i);
  });
}
// @__NO_SIDE_EFFECTS__
function Qn(e) {
  const t = /* @__PURE__ */ Yr(e);
  return rn(t), t;
}
function Xn(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var r = 0; r < t.length; r += 1)
      q(
        /** @type {Effect} */
        t[r]
      );
  }
}
function sr(e) {
  var t, r = y, n = e.parent;
  if (!He && n !== null && (n.f & (re | G)) !== 0)
    return Pn(), e.v;
  oe(n);
  try {
    e.f &= ~Le, Xn(e), t = fn(e);
  } finally {
    oe(r);
  }
  return t;
}
function qr(e) {
  var t = sr(e);
  if (!e.equals(t) && (e.wv = sn(), (!g?.is_fork || e.deps === null) && (g !== null ? g.capture(e, t, !0) : e.v = t, e.deps === null))) {
    T(e, R);
    return;
  }
  He || (ee !== null ? (ar() || g?.is_fork) && ee.set(e, t) : rr(e));
}
function ei(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      (t.teardown || t.ac) && (t.teardown?.(), t.ac?.abort(de), t.teardown = kn, t.ac = null, ht(t, 0), or(t));
}
function zr(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      t.teardown && Qe(t);
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
  return rn(r), r;
}
function I(e, t, r = !1) {
  w !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!te || (w.f & Wt) !== 0) && Cr() && (w.f & (D | fe | ut | Wt)) !== 0 && (Z === null || !Ge.call(Z, e)) && Mn();
  let n = r ? it(t) : t;
  return Mt(e, n, yt);
}
function Mt(e, t, r = null) {
  if (!e.equals(t)) {
    Ie.set(e, He ? t : e.v);
    var n = Ve.ensure();
    if (n.capture(e, t), (e.f & D) !== 0) {
      const i = (
        /** @type {Derived} */
        e
      );
      (e.f & C) !== 0 && sr(i), ee === null && rr(i);
    }
    e.wv = sn(), Ur(e, C, r), y !== null && (y.f & R) !== 0 && (y.f & (me | xe)) === 0 && (z === null ? vi([e]) : z.push(e)), !n.is_fork && Qt.size > 0 && !Br && ti();
  }
  return t;
}
function ti() {
  Br = !1;
  for (const e of Qt)
    (e.f & R) !== 0 && T(e, ae), wt(e) && Qe(e);
  Qt.clear();
}
function ft(e) {
  I(e, e.v + 1);
}
function Ur(e, t, r) {
  var n = e.reactions;
  if (n !== null)
    for (var i = n.length, l = 0; l < i; l++) {
      var a = n[l], o = a.f, f = (o & C) === 0;
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
function it(e) {
  if (typeof e != "object" || e === null || Vt in e)
    return e;
  const t = yn(e);
  if (t !== wn && t !== bn)
    return e;
  var r = /* @__PURE__ */ new Map(), n = vn(e), i = /* @__PURE__ */ K(0), l = je, a = (o) => {
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
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && Rn();
        var d = r.get(f);
        return d === void 0 ? a(() => {
          var v = /* @__PURE__ */ K(u.value);
          return r.set(f, v), v;
        }) : I(d, u.value, !0), !0;
      },
      deleteProperty(o, f) {
        var u = r.get(f);
        if (u === void 0) {
          if (f in o) {
            const d = a(() => /* @__PURE__ */ K(N));
            r.set(f, d), ft(i);
          }
        } else
          I(u, N), ft(i);
        return !0;
      },
      get(o, f, u) {
        if (f === Vt)
          return e;
        var d = r.get(f), v = f in o;
        if (d === void 0 && (!v || st(o, f)?.writable) && (d = a(() => {
          var c = it(v ? o[f] : N), h = /* @__PURE__ */ K(c);
          return h;
        }), r.set(f, d)), d !== void 0) {
          var _ = M(d);
          return _ === N ? void 0 : _;
        }
        return Reflect.get(o, f, u);
      },
      getOwnPropertyDescriptor(o, f) {
        var u = Reflect.getOwnPropertyDescriptor(o, f);
        if (u && "value" in u) {
          var d = r.get(f);
          d && (u.value = M(d));
        } else if (u === void 0) {
          var v = r.get(f), _ = v?.v;
          if (v !== void 0 && _ !== N)
            return {
              enumerable: !0,
              configurable: !0,
              value: _,
              writable: !0
            };
        }
        return u;
      },
      has(o, f) {
        if (f === Vt)
          return !0;
        var u = r.get(f), d = u !== void 0 && u.v !== N || Reflect.has(o, f);
        if (u !== void 0 || y !== null && (!d || st(o, f)?.writable)) {
          u === void 0 && (u = a(() => {
            var _ = d ? it(o[f]) : N, c = /* @__PURE__ */ K(_);
            return c;
          }), r.set(f, u));
          var v = M(u);
          if (v === N)
            return !1;
        }
        return d;
      },
      set(o, f, u, d) {
        var v = r.get(f), _ = f in o;
        if (n && f === "length")
          for (var c = u; c < /** @type {Source<number>} */
          v.v; c += 1) {
            var h = r.get(c + "");
            h !== void 0 ? I(h, N) : c in o && (h = a(() => /* @__PURE__ */ K(N)), r.set(c + "", h));
          }
        if (v === void 0)
          (!_ || st(o, f)?.writable) && (v = a(() => /* @__PURE__ */ K(void 0)), I(v, it(u)), r.set(f, v));
        else {
          _ = v.v !== N;
          var k = a(() => it(u));
          I(v, k);
        }
        var b = Reflect.getOwnPropertyDescriptor(o, f);
        if (b?.set && b.set.call(d, u), !_) {
          if (n && typeof f == "string") {
            var j = (
              /** @type {Source<number>} */
              r.get("length")
            ), we = Number(f);
            Number.isInteger(we) && we >= j.v && I(j, we + 1);
          }
          ft(i);
        }
        return !0;
      },
      ownKeys(o) {
        M(i);
        var f = Reflect.ownKeys(o).filter((v) => {
          var _ = r.get(v);
          return _ === void 0 || _.v !== N;
        });
        for (var [u, d] of r)
          d.v !== N && !(u in o) && f.push(u);
        return f;
      },
      setPrototypeOf() {
        Nn();
      }
    }
  );
}
var gr, Wr, Kr, $r;
function ri() {
  if (gr === void 0) {
    gr = window, Wr = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, r = Text.prototype;
    Kr = st(t, "firstChild").get, $r = st(t, "nextSibling").get, dr(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), dr(r) && (r.__t = void 0);
  }
}
function ct(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function qe(e) {
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
  return /* @__PURE__ */ qe(e);
}
function rt(e, t = 1, r = !1) {
  let n = e;
  for (; t--; )
    n = /** @type {TemplateNode} */
    /* @__PURE__ */ lr(n);
  return n;
}
function ni() {
  return !1;
}
function ii(e, t, r) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElementNS(Fn, e, void 0)
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
function Se(e, t) {
  var r = y;
  r !== null && (r.f & G) !== 0 && (e |= G);
  var n = {
    ctx: ne,
    deps: null,
    nodes: null,
    f: e | C | $,
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
  if ((e & ot) !== 0)
    Ye !== null ? Ye.push(n) : Ve.ensure().schedule(n);
  else if (t !== null) {
    try {
      Qe(n);
    } catch (a) {
      throw q(n), a;
    }
    i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && // either `null`, or a singular child
    (i.f & et) === 0 && (i = i.first, (e & fe) !== 0 && (e & Ze) !== 0 && i !== null && (i.f |= Ze));
  }
  if (i !== null && (i.parent = r, r !== null && fi(i, r), w !== null && (w.f & D) !== 0 && (e & xe) === 0)) {
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
  const t = Se(Pt, null);
  return T(t, R), t.teardown = e, t;
}
function oi(e) {
  return Se(ot | Sn, e);
}
function ui(e) {
  Ve.ensure();
  const t = Se(xe | et, e);
  return (r = {}) => new Promise((n) => {
    r.outro ? at(t, () => {
      q(t), n(void 0);
    }) : (q(t), n(void 0));
  });
}
function ci(e) {
  return Se(ut | et, e);
}
function Gr(e, t = 0) {
  return Se(Pt | t, e);
}
function Yt(e, t = [], r = [], n = []) {
  Gn(n, t, r, (i) => {
    Se(Pt, () => e(...i.map(M)));
  });
}
function Zr(e, t = 0) {
  var r = Se(fe | t, e);
  return r;
}
function he(e) {
  return Se(me | et, e);
}
function Jr(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = He, n = w;
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
    (r.f & xe) !== 0 ? r.parent = null : q(r, t), r = n;
  }
}
function hi(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & me) === 0 && q(t), t = r;
  }
}
function q(e, t = !0) {
  var r = !1;
  (t || (e.f & xn) !== 0) && e.nodes !== null && e.nodes.end !== null && (di(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), r = !0), T(e, _r), or(e, t && !r), ht(e, 0);
  var n = e.nodes && e.nodes.t;
  if (n !== null)
    for (const l of n)
      l.stop();
  Jr(e), e.f ^= _r, e.f |= re;
  var i = e.parent;
  i !== null && i.first !== null && Qr(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function di(e, t) {
  for (; e !== null; ) {
    var r = e === t ? null : /* @__PURE__ */ lr(e);
    e.remove(), e = r;
  }
}
function Qr(e) {
  var t = e.parent, r = e.prev, n = e.next;
  r !== null && (r.next = n), n !== null && (n.prev = r), t !== null && (t.first === e && (t.first = n), t.last === e && (t.last = r));
}
function at(e, t, r = !0) {
  var n = [];
  Xr(e, n, !0);
  var i = () => {
    r && q(e), t && t();
  }, l = n.length;
  if (l > 0) {
    var a = () => --l || i();
    for (var o of n)
      o.out(a);
  } else
    i();
}
function Xr(e, t, r) {
  if ((e.f & G) === 0) {
    e.f ^= G;
    var n = e.nodes && e.nodes.t;
    if (n !== null)
      for (const o of n)
        (o.is_global || r) && t.push(o);
    for (var i = e.first; i !== null; ) {
      var l = i.next;
      if ((i.f & xe) === 0) {
        var a = (i.f & Ze) !== 0 || // If this is a branch effect without a block effect parent,
        // it means the parent block effect was pruned. In that case,
        // transparency information was transferred to the branch effect.
        (i.f & me) !== 0 && (e.f & fe) !== 0;
        Xr(i, t, a ? r : !1);
      }
      i = l;
    }
  }
}
function _i(e) {
  en(e, !0);
}
function en(e, t) {
  if ((e.f & G) !== 0) {
    e.f ^= G, (e.f & R) === 0 && (T(e, C), Ve.ensure().schedule(e));
    for (var r = e.first; r !== null; ) {
      var n = r.next, i = (r.f & Ze) !== 0 || (r.f & me) !== 0;
      en(r, i ? t : !1), r = n;
    }
    var l = e.nodes && e.nodes.t;
    if (l !== null)
      for (const a of l)
        (a.is_global || t) && a.in();
  }
}
function tn(e, t) {
  if (e.nodes)
    for (var r = e.nodes.start, n = e.nodes.end; r !== null; ) {
      var i = r === n ? null : /* @__PURE__ */ lr(r);
      t.append(r), r = i;
    }
}
let At = !1, He = !1;
function wr(e) {
  He = e;
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
function rn(e) {
  w !== null && (Z === null ? Z = [e] : Z.push(e));
}
let O = null, L = 0, z = null;
function vi(e) {
  z = e;
}
let nn = 1, Ne = 0, je = Ne;
function br(e) {
  je = e;
}
function sn() {
  return ++nn;
}
function wt(e) {
  var t = e.f;
  if ((t & C) !== 0)
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
      ) && qr(
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
function ln(e, t, r = !0) {
  var n = e.reactions;
  if (n !== null && !(Z !== null && Ge.call(Z, e)))
    for (var i = 0; i < n.length; i++) {
      var l = n[i];
      (l.f & D) !== 0 ? ln(
        /** @type {Derived} */
        l,
        t,
        !1
      ) : t === l && (r ? T(l, C) : (l.f & R) !== 0 && T(l, ae), ir(
        /** @type {Effect} */
        l
      ));
    }
}
function fn(e) {
  var k;
  var t = O, r = L, n = z, i = w, l = Z, a = ne, o = te, f = je, u = e.f;
  O = /** @type {null | Value[]} */
  null, L = 0, z = null, w = (u & (me | xe)) === 0 ? e : null, Z = null, Je(e.ctx), te = !1, je = ++Ne, e.ac !== null && (fr(() => {
    e.ac.abort(de);
  }), e.ac = null);
  try {
    e.f |= Rt;
    var d = (
      /** @type {Function} */
      e.fn
    ), v = d();
    e.f |= Xe;
    var _ = e.deps, c = g?.is_fork;
    if (O !== null) {
      var h;
      if (c || ht(e, L), _ !== null && L > 0)
        for (_.length = L + O.length, h = 0; h < O.length; h++)
          _[L + h] = O[h];
      else
        e.deps = _ = O;
      if (ar() && (e.f & $) !== 0)
        for (h = L; h < _.length; h++)
          ((k = _[h]).reactions ?? (k.reactions = [])).push(e);
    } else !c && _ !== null && L < _.length && (ht(e, L), _.length = L);
    if (Cr() && z !== null && !te && _ !== null && (e.f & (D | ae | C)) === 0)
      for (h = 0; h < /** @type {Source[]} */
      z.length; h++)
        ln(
          z[h],
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
      z !== null && (n === null ? n = z : n.push(.../** @type {Source[]} */
      z));
    }
    return (e.f & Ee) !== 0 && (e.f ^= Ee), v;
  } catch (b) {
    return Fr(b);
  } finally {
    e.f ^= Rt, O = t, L = r, z = n, w = i, Z = l, Je(a), te = o, je = f;
  }
}
function pi(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var n = pn.call(r, e);
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
    (l.f & $) !== 0 && (l.f ^= $, l.f &= ~Le), l.v !== N && rr(l), ei(l), ht(l, 0);
  }
}
function ht(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var n = t; n < r.length; n++)
      pi(e, r[n]);
}
function Qe(e) {
  var t = e.f;
  if ((t & re) === 0) {
    T(e, R);
    var r = y, n = At;
    y = e, At = !0;
    try {
      (t & (fe | Ar)) !== 0 ? hi(e) : or(e), Jr(e);
      var i = fn(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = nn;
      var l;
    } finally {
      At = n, y = r;
    }
  }
}
async function gi() {
  await Promise.resolve(), Hn();
}
function M(e) {
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
  if (He && Ie.has(e))
    return Ie.get(e);
  if (r) {
    var a = (
      /** @type {Derived} */
      e
    );
    if (He) {
      var o = a.v;
      return ((a.f & R) === 0 && a.reactions !== null || on(a)) && (o = sr(a)), Ie.set(a, o), o;
    }
    var f = (a.f & $) === 0 && !te && w !== null && (At || (w.f & $) !== 0), u = (a.f & Xe) === 0;
    wt(a) && (f && (a.f |= $), qr(a)), f && !u && (zr(a), an(a));
  }
  if (ee?.has(e))
    return ee.get(e);
  if ((e.f & Ee) !== 0)
    throw e.v;
  return e.v;
}
function an(e) {
  if (e.f |= $, e.deps !== null)
    for (const t of e.deps)
      (t.reactions ?? (t.reactions = [])).push(e), (t.f & D) !== 0 && (t.f & $) === 0 && (zr(
        /** @type {Derived} */
        t
      ), an(
        /** @type {Derived} */
        t
      ));
}
function on(e) {
  if (e.v === N) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (Ie.has(t) || (t.f & D) !== 0 && on(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function un(e) {
  var t = te;
  try {
    return te = !0, e();
  } finally {
    te = t;
  }
}
const mi = ["touchstart", "touchmove"];
function wi(e) {
  return mi.includes(e);
}
const Me = Symbol("events"), cn = /* @__PURE__ */ new Set(), Xt = /* @__PURE__ */ new Set();
function yr(e, t, r) {
  (t[Me] ?? (t[Me] = {}))[e] = r;
}
function bi(e) {
  for (var t = 0; t < e.length; t++)
    cn.add(e[t]);
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
  var a = 0, o = kr === e && e[Me];
  if (o) {
    var f = i.indexOf(o);
    if (f !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e[Me] = t;
      return;
    }
    var u = i.indexOf(t);
    if (u === -1)
      return;
    f <= u && (a = f);
  }
  if (l = /** @type {Element} */
  i[a] || e.target, l !== t) {
    mn(e, "currentTarget", {
      configurable: !0,
      get() {
        return l || r;
      }
    });
    var d = w, v = y;
    J(null), oe(null);
    try {
      for (var _, c = []; l !== null; ) {
        var h = l.assignedSlot || l.parentNode || /** @type {any} */
        l.host || null;
        try {
          var k = l[Me]?.[n];
          k != null && (!/** @type {any} */
          l.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === l) && k.call(l, e);
        } catch (b) {
          _ ? c.push(b) : _ = b;
        }
        if (e.cancelBubble || h === t || h === null)
          break;
        l = h;
      }
      if (_) {
        for (let b of c)
          queueMicrotask(() => {
            throw b;
          });
        throw _;
      }
    } finally {
      e[Me] = t, delete e.currentTarget, J(d), oe(v);
    }
  }
}
const yi = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (e) => e
  })
);
function ki(e) {
  return (
    /** @type {string} */
    yi?.createHTML(e) ?? e
  );
}
function hn(e) {
  var t = ii("template");
  return t.innerHTML = ki(e.replaceAll("<!>", "<!---->")), t.content;
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
  var r = (t & Dn) !== 0, n, i = !e.startsWith("<!>");
  return () => {
    n === void 0 && (n = hn(i ? e : "<!>" + e), n = /** @type {TemplateNode} */
    /* @__PURE__ */ qe(n));
    var l = (
      /** @type {TemplateNode} */
      r || Wr ? document.importNode(n, !0) : n.cloneNode(!0)
    );
    return ur(l, l), l;
  };
}
// @__NO_SIDE_EFFECTS__
function Ei(e, t, r = "svg") {
  var n = !e.startsWith("<!>"), i = `<${r}>${n ? e : "<!>" + e}</${r}>`, l;
  return () => {
    if (!l) {
      var a = (
        /** @type {DocumentFragment} */
        hn(i)
      ), o = (
        /** @type {Element} */
        /* @__PURE__ */ qe(a)
      );
      for (l = document.createDocumentFragment(); /* @__PURE__ */ qe(o); )
        l.appendChild(
          /** @type {TemplateNode} */
          /* @__PURE__ */ qe(o)
        );
    }
    var f = (
      /** @type {TemplateNode} */
      l.cloneNode(!0)
    );
    {
      var u = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ qe(f)
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
function xi(e, t) {
  return /* @__PURE__ */ Ei(e, t, "svg");
}
function Si(e = "") {
  {
    var t = ct(e + "");
    return ur(t, t), t;
  }
}
function nt(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function xr(e, t) {
  var r = t == null ? "" : typeof t == "object" ? `${t}` : t;
  r !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = r, e.nodeValue = `${r}`);
}
function Ti(e, t) {
  return Ai(e, t);
}
const bt = /* @__PURE__ */ new Map();
function Ai(e, { target: t, anchor: r, props: n = {}, events: i, context: l, intro: a = !0, transformError: o }) {
  ri();
  var f = void 0, u = ui(() => {
    var d = r ?? t.appendChild(ct());
    Bn(
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
        l && (h.c = l), i && (n.$$events = i), f = e(c, n) || {}, Mr();
      },
      o
    );
    var v = /* @__PURE__ */ new Set(), _ = (c) => {
      for (var h = 0; h < c.length; h++) {
        var k = c[h];
        if (!v.has(k)) {
          v.add(k);
          var b = wi(k);
          for (const tt of [t, document]) {
            var j = bt.get(tt);
            j === void 0 && (j = /* @__PURE__ */ new Map(), bt.set(tt, j));
            var we = j.get(k);
            we === void 0 ? (tt.addEventListener(k, Er, { passive: b }), j.set(k, 1)) : j.set(k, we + 1);
          }
        }
      }
    };
    return _(gn(cn)), Xt.add(_), () => {
      for (var c of v)
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
      Xt.delete(_), d !== r && d.parentNode?.removeChild(d);
    };
  });
  return er.set(f, u), f;
}
let er = /* @__PURE__ */ new WeakMap();
function Ri(e, t) {
  const r = er.get(e);
  return r ? (er.delete(e), r(t)) : Promise.resolve();
}
var X, le, Y, Oe, gt, mt, Ft;
class Ni {
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
    p(this, Y, /* @__PURE__ */ new Map());
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
          var i = s(this, Y).get(r);
          i && (s(this, le).set(r, i.effect), s(this, Y).delete(r), i.fragment.lastChild.remove(), this.anchor.before(i.fragment), n = i.effect);
        }
        for (const [l, a] of s(this, X)) {
          if (s(this, X).delete(l), l === t)
            break;
          const o = s(this, Y).get(a);
          o && (q(o.effect), s(this, Y).delete(a));
        }
        for (const [l, a] of s(this, le)) {
          if (l === r || s(this, Oe).has(l)) continue;
          const o = () => {
            if (Array.from(s(this, X).values()).includes(l)) {
              var u = document.createDocumentFragment();
              tn(a, u), u.append(ct()), s(this, Y).set(l, { effect: a, fragment: u });
            } else
              q(a);
            s(this, Oe).delete(l), s(this, le).delete(l);
          };
          s(this, gt) || !n ? (s(this, Oe).add(l), at(a, o, !1)) : o();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    p(this, Ft, (t) => {
      s(this, X).delete(t);
      const r = Array.from(s(this, X).values());
      for (const [n, i] of s(this, Y))
        r.includes(n) || (q(i.effect), s(this, Y).delete(n));
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
    ), i = ni();
    if (r && !s(this, le).has(t) && !s(this, Y).has(t))
      if (i) {
        var l = document.createDocumentFragment(), a = ct();
        l.append(a), s(this, Y).set(t, {
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
      for (const [o, f] of s(this, Y))
        o === t ? n.unskip_effect(f.effect) : n.skip_effect(f.effect);
      n.oncommit(s(this, mt)), n.ondiscard(s(this, Ft));
    } else
      s(this, mt).call(this, n);
  }
}
X = new WeakMap(), le = new WeakMap(), Y = new WeakMap(), Oe = new WeakMap(), gt = new WeakMap(), mt = new WeakMap(), Ft = new WeakMap();
function qt(e, t, r = !1) {
  var n = new Ni(e), i = r ? Ze : 0;
  function l(a, o) {
    n.ensure(a, o);
  }
  Zr(() => {
    var a = !1;
    t((o, f = 0) => {
      a = !0, l(f, o);
    }), a || l(-1, null);
  }, i);
}
function Mi(e, t, r = t) {
  var n = /* @__PURE__ */ new WeakSet();
  li(e, "input", async (i) => {
    var l = i ? e.defaultValue : e.value;
    if (l = zt(e) ? Bt(l) : l, r(l), g !== null && n.add(g), await gi(), l !== (l = t())) {
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
  un(t) == null && e.value && (r(zt(e) ? Bt(e.value) : e.value), g !== null && n.add(g)), Gr(() => {
    var i = t();
    if (e === document.activeElement) {
      var l = (
        /** @type {Batch} */
        g
      );
      if (n.has(l))
        return;
    }
    zt(e) && i === Bt(e.value) || e.type === "date" && !i && !e.value || i !== e.value && (e.value = i ?? "");
  });
}
function zt(e) {
  var t = e.type;
  return t === "number" || t === "range";
}
function Bt(e) {
  return e === "" ? null : +e;
}
const Ci = "5";
var Sr;
typeof window < "u" && ((Sr = window.__svelte ?? (window.__svelte = {})).v ?? (Sr.v = /* @__PURE__ */ new Set())).add(Ci);
var Di = /* @__PURE__ */ xi('<svg class="inline-block w-4 h-4 mr-2 animate-spin" viewBox="0 0 24 24" fill="none"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path></svg> Calling backend…', 1), Fi = /* @__PURE__ */ cr('<div class="mt-4 p-3.5 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg"><p class="text-sm font-medium text-green-800 dark:text-green-300"> </p></div>'), Pi = /* @__PURE__ */ cr('<div class="mt-4 p-3.5 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg"><p class="text-sm text-red-800 dark:text-red-300"> </p></div>'), Oi = /* @__PURE__ */ cr(`<div class="max-w-md mx-auto p-6"><h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Hello World</h2> <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm"><label for="hw-name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Your name</label> <input id="hw-name" type="text" placeholder="Enter your name..." class="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg
				bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100
				placeholder-gray-400 dark:placeholder-gray-500
				focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500
				transition-colors"/> <button class="mt-4 w-full px-4 py-2.5 text-sm font-medium text-white bg-indigo-600 rounded-lg
				hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/40
				disabled:opacity-50 disabled:cursor-not-allowed transition-colors"><!></button> <!> <!></div></div>`);
function Ii(e, t) {
  Nr(t, !0);
  let r = /* @__PURE__ */ K(""), n = /* @__PURE__ */ K(""), i = /* @__PURE__ */ K(!1), l = /* @__PURE__ */ K(""), a = /* @__PURE__ */ Qn(() => !M(i) && M(r).trim().length > 0);
  async function o() {
    I(i, !0), I(l, ""), I(n, "");
    try {
      I(n, await t.ctx.callSync("greet", { name: M(r) }), !0);
    } catch (S) {
      I(l, S?.message ?? String(S), !0);
    } finally {
      I(i, !1);
    }
  }
  function f(S) {
    S.key === "Enter" && M(a) && o();
  }
  var u = Oi(), d = rt(Ae(u), 2), v = rt(Ae(d), 2), _ = rt(v, 2), c = Ae(_);
  {
    var h = (S) => {
      var ue = Di();
      nt(S, ue);
    }, k = (S) => {
      var ue = Si("Say Hello");
      nt(S, ue);
    };
    qt(c, (S) => {
      M(i) ? S(h) : S(k, -1);
    });
  }
  var b = rt(_, 2);
  {
    var j = (S) => {
      var ue = Fi(), It = Ae(ue), jt = Ae(It);
      Yt(() => xr(jt, M(n))), nt(S, ue);
    };
    qt(b, (S) => {
      M(n) && S(j);
    });
  }
  var we = rt(b, 2);
  {
    var tt = (S) => {
      var ue = Pi(), It = Ae(ue), jt = Ae(It);
      Yt(() => xr(jt, M(l))), nt(S, ue);
    };
    qt(we, (S) => {
      M(l) && S(tt);
    });
  }
  Yt(() => _.disabled = !M(a)), yr("keydown", v, f), Mi(v, () => M(r), (S) => I(r, S)), yr("click", _, o), nt(e, u), Mr();
}
bi(["keydown", "click"]);
function Vi(e, t) {
  const r = Ti(Ii, { target: e, props: { ctx: t } });
  return {
    unmount() {
      try {
        Ri(r);
      } catch {
      }
    }
  };
}
export {
  Vi as default
};
