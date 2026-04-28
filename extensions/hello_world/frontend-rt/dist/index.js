var hr = Object.defineProperty;
var hn = (e) => {
  throw TypeError(e);
};
var _r = (e, t, n) => t in e ? hr(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Q = (e, t, n) => _r(e, typeof t != "symbol" ? t + "" : t, n), Lt = (e, t, n) => t.has(e) || hn("Cannot " + n);
var s = (e, t, n) => (Lt(e, t, "read from private field"), n ? n.call(e) : t.get(e)), p = (e, t, n) => t.has(e) ? hn("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), m = (e, t, n, r) => (Lt(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), x = (e, t, n) => (Lt(e, t, "access private method"), n);
var vr = Array.isArray, pr = Array.prototype.indexOf, Ge = Array.prototype.includes, gr = Array.from, mr = Object.defineProperty, st = Object.getOwnPropertyDescriptor, wr = Object.prototype, br = Array.prototype, yr = Object.getPrototypeOf, _n = Object.isExtensible;
const kr = () => {
};
function Er(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function An() {
  var e, t, n = new Promise((r, i) => {
    e = r, t = i;
  });
  return { promise: n, resolve: e, reject: t };
}
const D = 2, ot = 4, Pt = 8, Rn = 1 << 24, fe = 16, me = 32, xe = 64, Ut = 128, $ = 512, R = 1024, C = 2048, ae = 4096, G = 8192, ne = 16384, Xe = 32768, vn = 1 << 25, Ze = 65536, Wt = 1 << 17, xr = 1 << 18, et = 1 << 19, Sr = 1 << 20, Le = 65536, Rt = 1 << 21, ut = 1 << 22, Ee = 1 << 23, Vt = Symbol("$state"), he = new class extends Error {
  constructor() {
    super(...arguments);
    Q(this, "name", "StaleReactionError");
    Q(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
function Tr() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Ar() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Rr() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Nr() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Mr() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Cr() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
const Dr = 2, N = Symbol(), Fr = "http://www.w3.org/1999/xhtml";
function Pr() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function Or() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function Nn(e) {
  return e === this.v;
}
let re = null;
function Je(e) {
  re = e;
}
function Mn(e, t = !1, n) {
  re = {
    p: re,
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
function Cn(e) {
  var t = (
    /** @type {ComponentContext} */
    re
  ), n = t.e;
  if (n !== null) {
    t.e = null;
    for (var r of n)
      oi(r);
  }
  return t.i = !0, re = t.p, /** @type {T} */
  {};
}
function Dn() {
  return !0;
}
let Re = [];
function Fn() {
  var e = Re;
  Re = [], Er(e);
}
function ze(e) {
  if (Re.length === 0 && !lt) {
    var t = Re;
    queueMicrotask(() => {
      t === Re && Fn();
    });
  }
  Re.push(e);
}
function Ir() {
  for (; Re.length > 0; )
    Fn();
}
function Pn(e) {
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
      } catch (n) {
        e = n;
      }
    }
    t = t.parent;
  }
  throw e;
}
const jr = -7169;
function T(e, t) {
  e.f = e.f & jr | t;
}
function nn(e) {
  (e.f & $) !== 0 || e.deps === null ? T(e, R) : T(e, ae);
}
function On(e) {
  if (e !== null)
    for (const t of e)
      (t.f & D) === 0 || (t.f & Le) === 0 || (t.f ^= Le, On(
        /** @type {Derived} */
        t.deps
      ));
}
function In(e, t, n) {
  (e.f & C) !== 0 ? t.add(e) : (e.f & ae) !== 0 && n.add(e), On(e.deps), T(e, R);
}
const Te = /* @__PURE__ */ new Set();
let g = null, ee = null, Kt = null, lt = !1, Ht = !1, Ye = null, yt = null;
var pn = 0;
let Lr = 1;
var Be, Ue, Ce, _e, ie, ht, V, _t, be, ve, se, We, Ke, De, A, kt, jn, Et, $t, xt, Vr;
const Ct = class Ct {
  constructor() {
    p(this, A);
    Q(this, "id", Lr++);
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
    p(this, ht, null);
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
  unskip_effect(t, n = (r) => this.schedule(r)) {
    var r = s(this, se).get(t);
    if (r) {
      s(this, se).delete(t);
      for (var i of r.d)
        T(i, C), n(i);
      for (i of r.m)
        T(i, ae), n(i);
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
  capture(t, n, r = !1) {
    t.v !== N && !this.previous.has(t) && this.previous.set(t, t.v), (t.f & Ee) === 0 && (this.current.set(t, [n, r]), ee?.set(t, n)), this.is_fork || (t.v = n);
  }
  activate() {
    g = this;
  }
  deactivate() {
    g = null, ee = null;
  }
  flush() {
    try {
      Ht = !0, g = this, x(this, A, Et).call(this);
    } finally {
      pn = 0, Kt = null, Ye = null, yt = null, Ht = !1, g = null, ee = null, Ie.clear();
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
  increment(t, n) {
    let r = s(this, _e).get(n) ?? 0;
    if (s(this, _e).set(n, r + 1), t) {
      let i = s(this, ie).get(n) ?? 0;
      s(this, ie).set(n, i + 1);
    }
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   * @param {boolean} skip - whether to skip updates (because this is triggered by a stale reaction)
   */
  decrement(t, n, r) {
    let i = s(this, _e).get(n) ?? 0;
    if (i === 1 ? s(this, _e).delete(n) : s(this, _e).set(n, i - 1), t) {
      let l = s(this, ie).get(n) ?? 0;
      l === 1 ? s(this, ie).delete(n) : s(this, ie).set(n, l - 1);
    }
    s(this, Ke) || r || (m(this, Ke, !0), ze(() => {
      m(this, Ke, !1), this.flush();
    }));
  }
  /**
   * @param {Set<Effect>} dirty_effects
   * @param {Set<Effect>} maybe_dirty_effects
   */
  transfer_effects(t, n) {
    for (const r of t)
      s(this, be).add(r);
    for (const r of n)
      s(this, ve).add(r);
    t.clear(), n.clear();
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
    return (s(this, ht) ?? m(this, ht, An())).promise;
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
    if (Kt = t, t.b?.is_pending && (t.f & (ot | Pt | Rn)) !== 0 && (t.f & Xe) === 0) {
      t.b.defer_effect(t);
      return;
    }
    for (var n = t; n.parent !== null; ) {
      n = n.parent;
      var r = n.f;
      if (Ye !== null && n === y && (w === null || (w.f & D) === 0))
        return;
      if ((r & (xe | me)) !== 0) {
        if ((r & R) === 0)
          return;
        n.f ^= R;
      }
    }
    s(this, V).push(n);
  }
};
Be = new WeakMap(), Ue = new WeakMap(), Ce = new WeakMap(), _e = new WeakMap(), ie = new WeakMap(), ht = new WeakMap(), V = new WeakMap(), _t = new WeakMap(), be = new WeakMap(), ve = new WeakMap(), se = new WeakMap(), We = new WeakMap(), Ke = new WeakMap(), De = new WeakMap(), A = new WeakSet(), kt = function() {
  return this.is_fork || s(this, ie).size > 0;
}, jn = function() {
  for (const r of s(this, De))
    for (const i of s(r, ie).keys()) {
      for (var t = !1, n = i; n.parent !== null; ) {
        if (s(this, se).has(n)) {
          t = !0;
          break;
        }
        n = n.parent;
      }
      if (!t)
        return !0;
    }
  return !1;
}, Et = function() {
  var o;
  if (pn++ > 1e3 && (Te.delete(this), Yr()), !x(this, A, kt).call(this)) {
    for (const f of s(this, be))
      s(this, ve).delete(f), T(f, C), this.schedule(f);
    for (const f of s(this, ve))
      T(f, ae), this.schedule(f);
  }
  const t = s(this, V);
  m(this, V, []), this.apply();
  var n = Ye = [], r = [], i = yt = [];
  for (const f of t)
    try {
      x(this, A, $t).call(this, f, n, r);
    } catch (u) {
      throw Hn(f), u;
    }
  if (g = null, i.length > 0) {
    var l = Ct.ensure();
    for (const f of i)
      l.schedule(f);
  }
  if (Ye = null, yt = null, x(this, A, kt).call(this) || x(this, A, jn).call(this)) {
    x(this, A, xt).call(this, r), x(this, A, xt).call(this, n);
    for (const [f, u] of s(this, se))
      Vn(f, u);
  } else {
    s(this, _e).size === 0 && Te.delete(this), s(this, be).clear(), s(this, ve).clear();
    for (const f of s(this, Be)) f(this);
    s(this, Be).clear(), gn(r), gn(n), s(this, ht)?.resolve();
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
  a !== null && (Te.add(a), x(o = a, A, Et).call(o));
}, /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
$t = function(t, n, r) {
  t.f ^= R;
  for (var i = t.first; i !== null; ) {
    var l = i.f, a = (l & (me | xe)) !== 0, o = a && (l & R) !== 0, f = o || (l & G) !== 0 || s(this, se).has(i);
    if (!f && i.fn !== null) {
      a ? i.f ^= R : (l & ot) !== 0 ? n.push(i) : wt(i) && ((l & fe) !== 0 && s(this, ve).add(i), Qe(i));
      var u = i.first;
      if (u !== null) {
        i = u;
        continue;
      }
    }
    for (; i !== null; ) {
      var h = i.next;
      if (h !== null) {
        i = h;
        break;
      }
      i = i.parent;
    }
  }
}, /**
 * @param {Effect[]} effects
 */
xt = function(t) {
  for (var n = 0; n < t.length; n += 1)
    In(t[n], s(this, be), s(this, ve));
}, Vr = function() {
  var h, v, _;
  for (const c of Te) {
    var t = c.id < this.id, n = [];
    for (const [d, [k, b]] of this.current) {
      if (c.current.has(d)) {
        var r = (
          /** @type {[any, boolean]} */
          c.current.get(d)[0]
        );
        if (t && k !== r)
          c.current.set(d, [k, b]);
        else
          continue;
      }
      n.push(d);
    }
    var i = [...c.current.keys()].filter((d) => !this.current.has(d));
    if (i.length === 0)
      t && c.discard();
    else if (n.length > 0) {
      if (t)
        for (const d of s(this, We))
          c.unskip_effect(d, (k) => {
            var b;
            (k.f & (fe | ut)) !== 0 ? c.schedule(k) : x(b = c, A, xt).call(b, [k]);
          });
      c.activate();
      var l = /* @__PURE__ */ new Set(), a = /* @__PURE__ */ new Map();
      for (var o of n)
        Ln(o, i, l, a);
      a = /* @__PURE__ */ new Map();
      var f = [...c.current.keys()].filter(
        (d) => this.current.has(d) ? (
          /** @type {[any, boolean]} */
          this.current.get(d)[0] !== d
        ) : !0
      );
      for (const d of s(this, _t))
        (d.f & (ne | G | Wt)) === 0 && rn(d, f, a) && ((d.f & (ut | fe)) !== 0 ? (T(d, C), c.schedule(d)) : s(c, be).add(d));
      if (s(c, V).length > 0) {
        c.apply();
        for (var u of s(c, V))
          x(h = c, A, $t).call(h, u, [], []);
        m(c, V, []);
      }
      c.deactivate();
    }
  }
  for (const c of Te)
    s(c, De).has(this) && (s(c, De).delete(this), s(c, De).size === 0 && !x(v = c, A, kt).call(v) && (c.activate(), x(_ = c, A, Et).call(_)));
};
let Ve = Ct;
function Hr(e) {
  var t = lt;
  lt = !0;
  try {
    for (var n; ; ) {
      if (Ir(), g === null)
        return (
          /** @type {T} */
          n
        );
      g.flush();
    }
  } finally {
    lt = t;
  }
}
function Yr() {
  try {
    Ar();
  } catch (e) {
    ke(e, Kt);
  }
}
let ce = null;
function gn(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var r = e[n++];
      if ((r.f & (ne | G)) === 0 && wt(r) && (ce = /* @__PURE__ */ new Set(), Qe(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && Xn(r), ce?.size > 0)) {
        Ie.clear();
        for (const i of ce) {
          if ((i.f & (ne | G)) !== 0) continue;
          const l = [i];
          let a = i.parent;
          for (; a !== null; )
            ce.has(a) && (ce.delete(a), l.push(a)), a = a.parent;
          for (let o = l.length - 1; o >= 0; o--) {
            const f = l[o];
            (f.f & (ne | G)) === 0 && Qe(f);
          }
        }
        ce.clear();
      }
    }
    ce = null;
  }
}
function Ln(e, t, n, r) {
  if (!n.has(e) && (n.add(e), e.reactions !== null))
    for (const i of e.reactions) {
      const l = i.f;
      (l & D) !== 0 ? Ln(
        /** @type {Derived} */
        i,
        t,
        n,
        r
      ) : (l & (ut | fe)) !== 0 && (l & C) === 0 && rn(i, t, r) && (T(i, C), sn(
        /** @type {Effect} */
        i
      ));
    }
}
function rn(e, t, n) {
  const r = n.get(e);
  if (r !== void 0) return r;
  if (e.deps !== null)
    for (const i of e.deps) {
      if (Ge.call(t, i))
        return !0;
      if ((i.f & D) !== 0 && rn(
        /** @type {Derived} */
        i,
        t,
        n
      ))
        return n.set(
          /** @type {Derived} */
          i,
          !0
        ), !0;
    }
  return n.set(e, !1), !1;
}
function sn(e) {
  g.schedule(e);
}
function Vn(e, t) {
  if (!((e.f & me) !== 0 && (e.f & R) !== 0)) {
    (e.f & C) !== 0 ? t.d.push(e) : (e.f & ae) !== 0 && t.m.push(e), T(e, R);
    for (var n = e.first; n !== null; )
      Vn(n, t), n = n.next;
  }
}
function Hn(e) {
  T(e, R);
  for (var t = e.first; t !== null; )
    Hn(t), t = t.next;
}
function qr(e) {
  let t = 0, n = Ot(0), r;
  return () => {
    on() && (M(n), Zn(() => (t === 0 && (r = ur(() => e(() => ft(n)))), t += 1, () => {
      ze(() => {
        t -= 1, t === 0 && (r?.(), r = void 0, ft(n));
      });
    })));
  };
}
var zr = Ze | et;
function Br(e, t, n, r) {
  new Ur(e, t, n, r);
}
var B, tn, U, Fe, O, W, F, H, pe, Pe, ye, $e, vt, pt, ge, Dt, S, Wr, Kr, $r, Gt, St, Tt, Zt, Jt;
class Ur {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(t, n, r, i) {
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
    p(this, tn, null);
    /** @type {BoundaryProps} */
    p(this, U);
    /** @type {((anchor: Node) => void)} */
    p(this, Fe);
    /** @type {Effect} */
    p(this, O);
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
    p(this, Dt, qr(() => (m(this, ge, Ot(s(this, Pe))), () => {
      m(this, ge, null);
    })));
    m(this, B, t), m(this, U, n), m(this, Fe, (l) => {
      var a = (
        /** @type {Effect} */
        y
      );
      a.b = this, a.f |= Ut, r(l);
    }), this.parent = /** @type {Effect} */
    y.b, this.transform_error = i ?? this.parent?.transform_error ?? ((l) => l), m(this, O, Jn(() => {
      x(this, S, Gt).call(this);
    }, zr));
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    In(t, s(this, vt), s(this, pt));
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
  update_pending_count(t, n) {
    x(this, S, Zt).call(this, t, n), m(this, Pe, s(this, Pe) + t), !(!s(this, ge) || s(this, $e)) && (m(this, $e, !0), ze(() => {
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
      x(this, S, Jt).call(this, t);
    })) : x(this, S, Jt).call(this, t);
  }
}
B = new WeakMap(), tn = new WeakMap(), U = new WeakMap(), Fe = new WeakMap(), O = new WeakMap(), W = new WeakMap(), F = new WeakMap(), H = new WeakMap(), pe = new WeakMap(), Pe = new WeakMap(), ye = new WeakMap(), $e = new WeakMap(), vt = new WeakMap(), pt = new WeakMap(), ge = new WeakMap(), Dt = new WeakMap(), S = new WeakSet(), Wr = function() {
  try {
    m(this, W, de(() => s(this, Fe).call(this, s(this, B))));
  } catch (t) {
    this.error(t);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
Kr = function(t) {
  const n = s(this, U).failed;
  n && m(this, H, de(() => {
    n(
      s(this, B),
      () => t,
      () => () => {
      }
    );
  }));
}, $r = function() {
  const t = s(this, U).pending;
  t && (this.is_pending = !0, m(this, F, de(() => t(s(this, B)))), ze(() => {
    var n = m(this, pe, document.createDocumentFragment()), r = ct();
    n.append(r), m(this, W, x(this, S, Tt).call(this, () => de(() => s(this, Fe).call(this, r)))), s(this, ye) === 0 && (s(this, B).before(n), m(this, pe, null), at(
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
    if (this.is_pending = this.has_pending_snippet(), m(this, ye, 0), m(this, Pe, 0), m(this, W, de(() => {
      s(this, Fe).call(this, s(this, B));
    })), s(this, ye) > 0) {
      var t = m(this, pe, document.createDocumentFragment());
      nr(s(this, W), t);
      const n = (
        /** @type {(anchor: Node) => void} */
        s(this, U).pending
      );
      m(this, F, de(() => n(s(this, B))));
    } else
      x(this, S, St).call(
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
St = function(t) {
  this.is_pending = !1, t.transfer_effects(s(this, vt), s(this, pt));
}, /**
 * @template T
 * @param {() => T} fn
 */
Tt = function(t) {
  var n = y, r = w, i = re;
  oe(s(this, O)), J(s(this, O)), Je(s(this, O).ctx);
  try {
    return Ve.ensure(), t();
  } catch (l) {
    return Pn(l), null;
  } finally {
    oe(n), J(r), Je(i);
  }
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 * @param {Batch} batch
 */
Zt = function(t, n) {
  var r;
  if (!this.has_pending_snippet()) {
    this.parent && x(r = this.parent, S, Zt).call(r, t, n);
    return;
  }
  m(this, ye, s(this, ye) + t), s(this, ye) === 0 && (x(this, S, St).call(this, n), s(this, F) && at(s(this, F), () => {
    m(this, F, null);
  }), s(this, pe) && (s(this, B).before(s(this, pe)), m(this, pe, null)));
}, /**
 * @param {unknown} error
 */
Jt = function(t) {
  s(this, W) && (q(s(this, W)), m(this, W, null)), s(this, F) && (q(s(this, F)), m(this, F, null)), s(this, H) && (q(s(this, H)), m(this, H, null));
  var n = s(this, U).onerror;
  let r = s(this, U).failed;
  var i = !1, l = !1;
  const a = () => {
    if (i) {
      Or();
      return;
    }
    i = !0, l && Cr(), s(this, H) !== null && at(s(this, H), () => {
      m(this, H, null);
    }), x(this, S, Tt).call(this, () => {
      x(this, S, Gt).call(this);
    });
  }, o = (f) => {
    try {
      l = !0, n?.(f, a), l = !1;
    } catch (u) {
      ke(u, s(this, O) && s(this, O).parent);
    }
    r && m(this, H, x(this, S, Tt).call(this, () => {
      try {
        return de(() => {
          var u = (
            /** @type {Effect} */
            y
          );
          u.b = this, u.f |= Ut, r(
            s(this, B),
            () => f,
            () => a
          );
        });
      } catch (u) {
        return ke(
          u,
          /** @type {Effect} */
          s(this, O).parent
        ), null;
      }
    }));
  };
  ze(() => {
    var f;
    try {
      f = this.transform_error(t);
    } catch (u) {
      ke(u, s(this, O) && s(this, O).parent);
      return;
    }
    f !== null && typeof f == "object" && typeof /** @type {any} */
    f.then == "function" ? f.then(
      o,
      /** @param {unknown} e */
      (u) => ke(u, s(this, O) && s(this, O).parent)
    ) : o(f);
  });
};
function Gr(e, t, n, r) {
  const i = qn;
  var l = e.filter((_) => !_.settled);
  if (n.length === 0 && l.length === 0) {
    r(t.map(i));
    return;
  }
  var a = (
    /** @type {Effect} */
    y
  ), o = Zr(), f = l.length === 1 ? l[0].promise : l.length > 1 ? Promise.all(l.map((_) => _.promise)) : null;
  function u(_) {
    o();
    try {
      r(_);
    } catch (c) {
      (a.f & ne) === 0 && ke(c, a);
    }
    Nt();
  }
  if (n.length === 0) {
    f.then(() => u(t.map(i)));
    return;
  }
  var h = Yn();
  function v() {
    Promise.all(n.map((_) => /* @__PURE__ */ Jr(_))).then((_) => u([...t.map(i), ..._])).catch((_) => ke(_, a)).finally(() => h());
  }
  f ? f.then(() => {
    o(), v(), Nt();
  }) : v();
}
function Zr() {
  var e = (
    /** @type {Effect} */
    y
  ), t = w, n = re, r = (
    /** @type {Batch} */
    g
  );
  return function(l = !0) {
    oe(e), J(t), Je(n), l && (e.f & ne) === 0 && (r?.activate(), r?.apply());
  };
}
function Nt(e = !0) {
  oe(null), J(null), Je(null), e && g?.deactivate();
}
function Yn() {
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
  return t.update_pending_count(1, n), n.increment(r, e), (i = !1) => {
    t.update_pending_count(-1, n), n.decrement(r, e, i);
  };
}
// @__NO_SIDE_EFFECTS__
function qn(e) {
  var t = D | C;
  return y !== null && (y.f |= et), {
    ctx: re,
    deps: null,
    effects: null,
    equals: Nn,
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
function Jr(e, t, n) {
  let r = (
    /** @type {Effect | null} */
    y
  );
  r === null && Tr();
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
    ), u = An();
    i = u.promise;
    try {
      Promise.resolve(e()).then(u.resolve, u.reject).finally(Nt);
    } catch (c) {
      u.reject(c), Nt();
    }
    var h = (
      /** @type {Batch} */
      g
    );
    if (a) {
      if ((f.f & Xe) !== 0)
        var v = Yn();
      if (
        /** @type {Boundary} */
        r.b.is_rendered()
      )
        o.get(h)?.reject(he), o.delete(h);
      else {
        for (const c of o.values())
          c.reject(he);
        o.clear();
      }
      o.set(h, u);
    }
    const _ = (c, d = void 0) => {
      if (v) {
        var k = d === he;
        v(k);
      }
      if (!(d === he || (f.f & ne) !== 0)) {
        if (h.activate(), d)
          l.f |= Ee, Mt(l, d);
        else {
          (l.f & Ee) !== 0 && (l.f ^= Ee), Mt(l, c);
          for (const [b, j] of o) {
            if (o.delete(b), b === h) break;
            j.reject(he);
          }
        }
        h.deactivate();
      }
    };
    u.promise.then(_, (c) => _(null, c || "unknown"));
  }), ai(() => {
    for (const f of o.values())
      f.reject(he);
  }), new Promise((f) => {
    function u(h) {
      function v() {
        h === i ? f(l) : u(i);
      }
      h.then(v, v);
    }
    u(i);
  });
}
// @__NO_SIDE_EFFECTS__
function Qr(e) {
  const t = /* @__PURE__ */ qn(e);
  return rr(t), t;
}
function Xr(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      q(
        /** @type {Effect} */
        t[n]
      );
  }
}
function ln(e) {
  var t, n = y, r = e.parent;
  if (!He && r !== null && (r.f & (ne | G)) !== 0)
    return Pr(), e.v;
  oe(r);
  try {
    e.f &= ~Le, Xr(e), t = fr(e);
  } finally {
    oe(n);
  }
  return t;
}
function zn(e) {
  var t = ln(e);
  if (!e.equals(t) && (e.wv = sr(), (!g?.is_fork || e.deps === null) && (g !== null ? g.capture(e, t, !0) : e.v = t, e.deps === null))) {
    T(e, R);
    return;
  }
  He || (ee !== null ? (on() || g?.is_fork) && ee.set(e, t) : nn(e));
}
function ei(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      (t.teardown || t.ac) && (t.teardown?.(), t.ac?.abort(he), t.teardown = kr, t.ac = null, dt(t, 0), un(t));
}
function Bn(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      t.teardown && Qe(t);
}
let Qt = /* @__PURE__ */ new Set();
const Ie = /* @__PURE__ */ new Map();
let Un = !1;
function Ot(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Nn,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function K(e, t) {
  const n = Ot(e);
  return rr(n), n;
}
function P(e, t, n = !1) {
  w !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!te || (w.f & Wt) !== 0) && Dn() && (w.f & (D | fe | ut | Wt)) !== 0 && (Z === null || !Ge.call(Z, e)) && Mr();
  let r = n ? it(t) : t;
  return Mt(e, r, yt);
}
function Mt(e, t, n = null) {
  if (!e.equals(t)) {
    Ie.set(e, He ? t : e.v);
    var r = Ve.ensure();
    if (r.capture(e, t), (e.f & D) !== 0) {
      const i = (
        /** @type {Derived} */
        e
      );
      (e.f & C) !== 0 && ln(i), ee === null && nn(i);
    }
    e.wv = sr(), Wn(e, C, n), y !== null && (y.f & R) !== 0 && (y.f & (me | xe)) === 0 && (z === null ? vi([e]) : z.push(e)), !r.is_fork && Qt.size > 0 && !Un && ti();
  }
  return t;
}
function ti() {
  Un = !1;
  for (const e of Qt)
    (e.f & R) !== 0 && T(e, ae), wt(e) && Qe(e);
  Qt.clear();
}
function ft(e) {
  P(e, e.v + 1);
}
function Wn(e, t, n) {
  var r = e.reactions;
  if (r !== null)
    for (var i = r.length, l = 0; l < i; l++) {
      var a = r[l], o = a.f, f = (o & C) === 0;
      if (f && T(a, t), (o & D) !== 0) {
        var u = (
          /** @type {Derived} */
          a
        );
        ee?.delete(u), (o & Le) === 0 && (o & $ && (y === null || (y.f & Rt) === 0) && (a.f |= Le), Wn(u, ae, n));
      } else if (f) {
        var h = (
          /** @type {Effect} */
          a
        );
        (o & fe) !== 0 && ce !== null && ce.add(h), n !== null ? n.push(h) : sn(h);
      }
    }
}
function it(e) {
  if (typeof e != "object" || e === null || Vt in e)
    return e;
  const t = yr(e);
  if (t !== wr && t !== br)
    return e;
  var n = /* @__PURE__ */ new Map(), r = vr(e), i = /* @__PURE__ */ K(0), l = je, a = (o) => {
    if (je === l)
      return o();
    var f = w, u = je;
    J(null), yn(l);
    var h = o();
    return J(f), yn(u), h;
  };
  return r && n.set("length", /* @__PURE__ */ K(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(o, f, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && Rr();
        var h = n.get(f);
        return h === void 0 ? a(() => {
          var v = /* @__PURE__ */ K(u.value);
          return n.set(f, v), v;
        }) : P(h, u.value, !0), !0;
      },
      deleteProperty(o, f) {
        var u = n.get(f);
        if (u === void 0) {
          if (f in o) {
            const h = a(() => /* @__PURE__ */ K(N));
            n.set(f, h), ft(i);
          }
        } else
          P(u, N), ft(i);
        return !0;
      },
      get(o, f, u) {
        if (f === Vt)
          return e;
        var h = n.get(f), v = f in o;
        if (h === void 0 && (!v || st(o, f)?.writable) && (h = a(() => {
          var c = it(v ? o[f] : N), d = /* @__PURE__ */ K(c);
          return d;
        }), n.set(f, h)), h !== void 0) {
          var _ = M(h);
          return _ === N ? void 0 : _;
        }
        return Reflect.get(o, f, u);
      },
      getOwnPropertyDescriptor(o, f) {
        var u = Reflect.getOwnPropertyDescriptor(o, f);
        if (u && "value" in u) {
          var h = n.get(f);
          h && (u.value = M(h));
        } else if (u === void 0) {
          var v = n.get(f), _ = v?.v;
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
        var u = n.get(f), h = u !== void 0 && u.v !== N || Reflect.has(o, f);
        if (u !== void 0 || y !== null && (!h || st(o, f)?.writable)) {
          u === void 0 && (u = a(() => {
            var _ = h ? it(o[f]) : N, c = /* @__PURE__ */ K(_);
            return c;
          }), n.set(f, u));
          var v = M(u);
          if (v === N)
            return !1;
        }
        return h;
      },
      set(o, f, u, h) {
        var v = n.get(f), _ = f in o;
        if (r && f === "length")
          for (var c = u; c < /** @type {Source<number>} */
          v.v; c += 1) {
            var d = n.get(c + "");
            d !== void 0 ? P(d, N) : c in o && (d = a(() => /* @__PURE__ */ K(N)), n.set(c + "", d));
          }
        if (v === void 0)
          (!_ || st(o, f)?.writable) && (v = a(() => /* @__PURE__ */ K(void 0)), P(v, it(u)), n.set(f, v));
        else {
          _ = v.v !== N;
          var k = a(() => it(u));
          P(v, k);
        }
        var b = Reflect.getOwnPropertyDescriptor(o, f);
        if (b?.set && b.set.call(h, u), !_) {
          if (r && typeof f == "string") {
            var j = (
              /** @type {Source<number>} */
              n.get("length")
            ), we = Number(f);
            Number.isInteger(we) && we >= j.v && P(j, we + 1);
          }
          ft(i);
        }
        return !0;
      },
      ownKeys(o) {
        M(i);
        var f = Reflect.ownKeys(o).filter((v) => {
          var _ = n.get(v);
          return _ === void 0 || _.v !== N;
        });
        for (var [u, h] of n)
          h.v !== N && !(u in o) && f.push(u);
        return f;
      },
      setPrototypeOf() {
        Nr();
      }
    }
  );
}
var mn, Kn, $n, Gn;
function ni() {
  if (mn === void 0) {
    mn = window, Kn = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    $n = st(t, "firstChild").get, Gn = st(t, "nextSibling").get, _n(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), _n(n) && (n.__t = void 0);
  }
}
function ct(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function qe(e) {
  return (
    /** @type {TemplateNode | null} */
    $n.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function fn(e) {
  return (
    /** @type {TemplateNode | null} */
    Gn.call(e)
  );
}
function Ae(e, t) {
  return /* @__PURE__ */ qe(e);
}
function nt(e, t = 1, n = !1) {
  let r = e;
  for (; t--; )
    r = /** @type {TemplateNode} */
    /* @__PURE__ */ fn(r);
  return r;
}
function ri() {
  return !1;
}
function ii(e, t, n) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElementNS(Fr, e, void 0)
  );
}
let wn = !1;
function si() {
  wn || (wn = !0, document.addEventListener(
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
function an(e) {
  var t = w, n = y;
  J(null), oe(null);
  try {
    return e();
  } finally {
    J(t), oe(n);
  }
}
function li(e, t, n, r = n) {
  e.addEventListener(t, () => an(n));
  const i = e.__on_r;
  i ? e.__on_r = () => {
    i(), r(!0);
  } : e.__on_r = () => r(!0), si();
}
function fi(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function Se(e, t) {
  var n = y;
  n !== null && (n.f & G) !== 0 && (e |= G);
  var r = {
    ctx: re,
    deps: null,
    nodes: null,
    f: e | C | $,
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
  var i = r;
  if ((e & ot) !== 0)
    Ye !== null ? Ye.push(r) : Ve.ensure().schedule(r);
  else if (t !== null) {
    try {
      Qe(r);
    } catch (a) {
      throw q(r), a;
    }
    i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && // either `null`, or a singular child
    (i.f & et) === 0 && (i = i.first, (e & fe) !== 0 && (e & Ze) !== 0 && i !== null && (i.f |= Ze));
  }
  if (i !== null && (i.parent = n, n !== null && fi(i, n), w !== null && (w.f & D) !== 0 && (e & xe) === 0)) {
    var l = (
      /** @type {Derived} */
      w
    );
    (l.effects ?? (l.effects = [])).push(i);
  }
  return r;
}
function on() {
  return w !== null && !te;
}
function ai(e) {
  const t = Se(Pt, null);
  return T(t, R), t.teardown = e, t;
}
function oi(e) {
  return Se(ot | Sr, e);
}
function ui(e) {
  Ve.ensure();
  const t = Se(xe | et, e);
  return (n = {}) => new Promise((r) => {
    n.outro ? at(t, () => {
      q(t), r(void 0);
    }) : (q(t), r(void 0));
  });
}
function ci(e) {
  return Se(ut | et, e);
}
function Zn(e, t = 0) {
  return Se(Pt | t, e);
}
function Yt(e, t = [], n = [], r = []) {
  Gr(r, t, n, (i) => {
    Se(Pt, () => e(...i.map(M)));
  });
}
function Jn(e, t = 0) {
  var n = Se(fe | t, e);
  return n;
}
function de(e) {
  return Se(me | et, e);
}
function Qn(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = He, r = w;
    bn(!0), J(null);
    try {
      t.call(null);
    } finally {
      bn(n), J(r);
    }
  }
}
function un(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const i = n.ac;
    i !== null && an(() => {
      i.abort(he);
    });
    var r = n.next;
    (n.f & xe) !== 0 ? n.parent = null : q(n, t), n = r;
  }
}
function di(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & me) === 0 && q(t), t = n;
  }
}
function q(e, t = !0) {
  var n = !1;
  (t || (e.f & xr) !== 0) && e.nodes !== null && e.nodes.end !== null && (hi(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), n = !0), T(e, vn), un(e, t && !n), dt(e, 0);
  var r = e.nodes && e.nodes.t;
  if (r !== null)
    for (const l of r)
      l.stop();
  Qn(e), e.f ^= vn, e.f |= ne;
  var i = e.parent;
  i !== null && i.first !== null && Xn(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function hi(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : /* @__PURE__ */ fn(e);
    e.remove(), e = n;
  }
}
function Xn(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function at(e, t, n = !0) {
  var r = [];
  er(e, r, !0);
  var i = () => {
    n && q(e), t && t();
  }, l = r.length;
  if (l > 0) {
    var a = () => --l || i();
    for (var o of r)
      o.out(a);
  } else
    i();
}
function er(e, t, n) {
  if ((e.f & G) === 0) {
    e.f ^= G;
    var r = e.nodes && e.nodes.t;
    if (r !== null)
      for (const o of r)
        (o.is_global || n) && t.push(o);
    for (var i = e.first; i !== null; ) {
      var l = i.next;
      if ((i.f & xe) === 0) {
        var a = (i.f & Ze) !== 0 || // If this is a branch effect without a block effect parent,
        // it means the parent block effect was pruned. In that case,
        // transparency information was transferred to the branch effect.
        (i.f & me) !== 0 && (e.f & fe) !== 0;
        er(i, t, a ? n : !1);
      }
      i = l;
    }
  }
}
function _i(e) {
  tr(e, !0);
}
function tr(e, t) {
  if ((e.f & G) !== 0) {
    e.f ^= G, (e.f & R) === 0 && (T(e, C), Ve.ensure().schedule(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, i = (n.f & Ze) !== 0 || (n.f & me) !== 0;
      tr(n, i ? t : !1), n = r;
    }
    var l = e.nodes && e.nodes.t;
    if (l !== null)
      for (const a of l)
        (a.is_global || t) && a.in();
  }
}
function nr(e, t) {
  if (e.nodes)
    for (var n = e.nodes.start, r = e.nodes.end; n !== null; ) {
      var i = n === r ? null : /* @__PURE__ */ fn(n);
      t.append(n), n = i;
    }
}
let At = !1, He = !1;
function bn(e) {
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
function rr(e) {
  w !== null && (Z === null ? Z = [e] : Z.push(e));
}
let I = null, L = 0, z = null;
function vi(e) {
  z = e;
}
let ir = 1, Ne = 0, je = Ne;
function yn(e) {
  je = e;
}
function sr() {
  return ++ir;
}
function wt(e) {
  var t = e.f;
  if ((t & C) !== 0)
    return !0;
  if (t & D && (e.f &= ~Le), (t & ae) !== 0) {
    for (var n = (
      /** @type {Value[]} */
      e.deps
    ), r = n.length, i = 0; i < r; i++) {
      var l = n[i];
      if (wt(
        /** @type {Derived} */
        l
      ) && zn(
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
function lr(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null && !(Z !== null && Ge.call(Z, e)))
    for (var i = 0; i < r.length; i++) {
      var l = r[i];
      (l.f & D) !== 0 ? lr(
        /** @type {Derived} */
        l,
        t,
        !1
      ) : t === l && (n ? T(l, C) : (l.f & R) !== 0 && T(l, ae), sn(
        /** @type {Effect} */
        l
      ));
    }
}
function fr(e) {
  var k;
  var t = I, n = L, r = z, i = w, l = Z, a = re, o = te, f = je, u = e.f;
  I = /** @type {null | Value[]} */
  null, L = 0, z = null, w = (u & (me | xe)) === 0 ? e : null, Z = null, Je(e.ctx), te = !1, je = ++Ne, e.ac !== null && (an(() => {
    e.ac.abort(he);
  }), e.ac = null);
  try {
    e.f |= Rt;
    var h = (
      /** @type {Function} */
      e.fn
    ), v = h();
    e.f |= Xe;
    var _ = e.deps, c = g?.is_fork;
    if (I !== null) {
      var d;
      if (c || dt(e, L), _ !== null && L > 0)
        for (_.length = L + I.length, d = 0; d < I.length; d++)
          _[L + d] = I[d];
      else
        e.deps = _ = I;
      if (on() && (e.f & $) !== 0)
        for (d = L; d < _.length; d++)
          ((k = _[d]).reactions ?? (k.reactions = [])).push(e);
    } else !c && _ !== null && L < _.length && (dt(e, L), _.length = L);
    if (Dn() && z !== null && !te && _ !== null && (e.f & (D | ae | C)) === 0)
      for (d = 0; d < /** @type {Source[]} */
      z.length; d++)
        lr(
          z[d],
          /** @type {Effect} */
          e
        );
    if (i !== null && i !== e) {
      if (Ne++, i.deps !== null)
        for (let b = 0; b < n; b += 1)
          i.deps[b].rv = Ne;
      if (t !== null)
        for (const b of t)
          b.rv = Ne;
      z !== null && (r === null ? r = z : r.push(.../** @type {Source[]} */
      z));
    }
    return (e.f & Ee) !== 0 && (e.f ^= Ee), v;
  } catch (b) {
    return Pn(b);
  } finally {
    e.f ^= Rt, I = t, L = n, z = r, w = i, Z = l, Je(a), te = o, je = f;
  }
}
function pi(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = pr.call(n, e);
    if (r !== -1) {
      var i = n.length - 1;
      i === 0 ? n = t.reactions = null : (n[r] = n[i], n.pop());
    }
  }
  if (n === null && (t.f & D) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (I === null || !Ge.call(I, t))) {
    var l = (
      /** @type {Derived} */
      t
    );
    (l.f & $) !== 0 && (l.f ^= $, l.f &= ~Le), l.v !== N && nn(l), ei(l), dt(l, 0);
  }
}
function dt(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      pi(e, n[r]);
}
function Qe(e) {
  var t = e.f;
  if ((t & ne) === 0) {
    T(e, R);
    var n = y, r = At;
    y = e, At = !0;
    try {
      (t & (fe | Rn)) !== 0 ? di(e) : un(e), Qn(e);
      var i = fr(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = ir;
      var l;
    } finally {
      At = r, y = n;
    }
  }
}
async function gi() {
  await Promise.resolve(), Hr();
}
function M(e) {
  var t = e.f, n = (t & D) !== 0;
  if (w !== null && !te) {
    var r = y !== null && (y.f & ne) !== 0;
    if (!r && (Z === null || !Ge.call(Z, e))) {
      var i = w.deps;
      if ((w.f & Rt) !== 0)
        e.rv < Ne && (e.rv = Ne, I === null && i !== null && i[L] === e ? L++ : I === null ? I = [e] : I.push(e));
      else {
        (w.deps ?? (w.deps = [])).push(e);
        var l = e.reactions;
        l === null ? e.reactions = [w] : Ge.call(l, w) || l.push(w);
      }
    }
  }
  if (He && Ie.has(e))
    return Ie.get(e);
  if (n) {
    var a = (
      /** @type {Derived} */
      e
    );
    if (He) {
      var o = a.v;
      return ((a.f & R) === 0 && a.reactions !== null || or(a)) && (o = ln(a)), Ie.set(a, o), o;
    }
    var f = (a.f & $) === 0 && !te && w !== null && (At || (w.f & $) !== 0), u = (a.f & Xe) === 0;
    wt(a) && (f && (a.f |= $), zn(a)), f && !u && (Bn(a), ar(a));
  }
  if (ee?.has(e))
    return ee.get(e);
  if ((e.f & Ee) !== 0)
    throw e.v;
  return e.v;
}
function ar(e) {
  if (e.f |= $, e.deps !== null)
    for (const t of e.deps)
      (t.reactions ?? (t.reactions = [])).push(e), (t.f & D) !== 0 && (t.f & $) === 0 && (Bn(
        /** @type {Derived} */
        t
      ), ar(
        /** @type {Derived} */
        t
      ));
}
function or(e) {
  if (e.v === N) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (Ie.has(t) || (t.f & D) !== 0 && or(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function ur(e) {
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
const Me = Symbol("events"), cr = /* @__PURE__ */ new Set(), Xt = /* @__PURE__ */ new Set();
function kn(e, t, n) {
  (t[Me] ?? (t[Me] = {}))[e] = n;
}
function bi(e) {
  for (var t = 0; t < e.length; t++)
    cr.add(e[t]);
  for (var n of Xt)
    n(e);
}
let En = null;
function xn(e) {
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), r = e.type, i = e.composedPath?.() || [], l = (
    /** @type {null | Element} */
    i[0] || e.target
  );
  En = e;
  var a = 0, o = En === e && e[Me];
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
    mr(e, "currentTarget", {
      configurable: !0,
      get() {
        return l || n;
      }
    });
    var h = w, v = y;
    J(null), oe(null);
    try {
      for (var _, c = []; l !== null; ) {
        var d = l.assignedSlot || l.parentNode || /** @type {any} */
        l.host || null;
        try {
          var k = l[Me]?.[r];
          k != null && (!/** @type {any} */
          l.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === l) && k.call(l, e);
        } catch (b) {
          _ ? c.push(b) : _ = b;
        }
        if (e.cancelBubble || d === t || d === null)
          break;
        l = d;
      }
      if (_) {
        for (let b of c)
          queueMicrotask(() => {
            throw b;
          });
        throw _;
      }
    } finally {
      e[Me] = t, delete e.currentTarget, J(h), oe(v);
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
function dr(e) {
  var t = ii("template");
  return t.innerHTML = ki(e.replaceAll("<!>", "<!---->")), t.content;
}
function cn(e, t) {
  var n = (
    /** @type {Effect} */
    y
  );
  n.nodes === null && (n.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function dn(e, t) {
  var n = (t & Dr) !== 0, r, i = !e.startsWith("<!>");
  return () => {
    r === void 0 && (r = dr(i ? e : "<!>" + e), r = /** @type {TemplateNode} */
    /* @__PURE__ */ qe(r));
    var l = (
      /** @type {TemplateNode} */
      n || Kn ? document.importNode(r, !0) : r.cloneNode(!0)
    );
    return cn(l, l), l;
  };
}
// @__NO_SIDE_EFFECTS__
function Ei(e, t, n = "svg") {
  var r = !e.startsWith("<!>"), i = `<${n}>${r ? e : "<!>" + e}</${n}>`, l;
  return () => {
    if (!l) {
      var a = (
        /** @type {DocumentFragment} */
        dr(i)
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
      ), h = (
        /** @type {TemplateNode} */
        f.lastChild
      );
      cn(u, h);
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
    return cn(t, t), t;
  }
}
function rt(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function Sn(e, t) {
  var n = t == null ? "" : typeof t == "object" ? `${t}` : t;
  n !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = n, e.nodeValue = `${n}`);
}
function Ti(e, t) {
  return Ai(e, t);
}
const bt = /* @__PURE__ */ new Map();
function Ai(e, { target: t, anchor: n, props: r = {}, events: i, context: l, intro: a = !0, transformError: o }) {
  ni();
  var f = void 0, u = ui(() => {
    var h = n ?? t.appendChild(ct());
    Br(
      /** @type {TemplateNode} */
      h,
      {
        pending: () => {
        }
      },
      (c) => {
        Mn({});
        var d = (
          /** @type {ComponentContext} */
          re
        );
        l && (d.c = l), i && (r.$$events = i), f = e(c, r) || {}, Cn();
      },
      o
    );
    var v = /* @__PURE__ */ new Set(), _ = (c) => {
      for (var d = 0; d < c.length; d++) {
        var k = c[d];
        if (!v.has(k)) {
          v.add(k);
          var b = wi(k);
          for (const tt of [t, document]) {
            var j = bt.get(tt);
            j === void 0 && (j = /* @__PURE__ */ new Map(), bt.set(tt, j));
            var we = j.get(k);
            we === void 0 ? (tt.addEventListener(k, xn, { passive: b }), j.set(k, 1)) : j.set(k, we + 1);
          }
        }
      }
    };
    return _(gr(cr)), Xt.add(_), () => {
      for (var c of v)
        for (const b of [t, document]) {
          var d = (
            /** @type {Map<string, number>} */
            bt.get(b)
          ), k = (
            /** @type {number} */
            d.get(c)
          );
          --k == 0 ? (b.removeEventListener(c, xn), d.delete(c), d.size === 0 && bt.delete(b)) : d.set(c, k);
        }
      Xt.delete(_), h !== n && h.parentNode?.removeChild(h);
    };
  });
  return en.set(f, u), f;
}
let en = /* @__PURE__ */ new WeakMap();
function Ri(e, t) {
  const n = en.get(e);
  return n ? (en.delete(e), n(t)) : Promise.resolve();
}
var X, le, Y, Oe, gt, mt, Ft;
class Ni {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, n = !0) {
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
        var n = (
          /** @type {Key} */
          s(this, X).get(t)
        ), r = s(this, le).get(n);
        if (r)
          _i(r), s(this, Oe).delete(n);
        else {
          var i = s(this, Y).get(n);
          i && (s(this, le).set(n, i.effect), s(this, Y).delete(n), i.fragment.lastChild.remove(), this.anchor.before(i.fragment), r = i.effect);
        }
        for (const [l, a] of s(this, X)) {
          if (s(this, X).delete(l), l === t)
            break;
          const o = s(this, Y).get(a);
          o && (q(o.effect), s(this, Y).delete(a));
        }
        for (const [l, a] of s(this, le)) {
          if (l === n || s(this, Oe).has(l)) continue;
          const o = () => {
            if (Array.from(s(this, X).values()).includes(l)) {
              var u = document.createDocumentFragment();
              nr(a, u), u.append(ct()), s(this, Y).set(l, { effect: a, fragment: u });
            } else
              q(a);
            s(this, Oe).delete(l), s(this, le).delete(l);
          };
          s(this, gt) || !r ? (s(this, Oe).add(l), at(a, o, !1)) : o();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    p(this, Ft, (t) => {
      s(this, X).delete(t);
      const n = Array.from(s(this, X).values());
      for (const [r, i] of s(this, Y))
        n.includes(r) || (q(i.effect), s(this, Y).delete(r));
    });
    this.anchor = t, m(this, gt, n);
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
    ), i = ri();
    if (n && !s(this, le).has(t) && !s(this, Y).has(t))
      if (i) {
        var l = document.createDocumentFragment(), a = ct();
        l.append(a), s(this, Y).set(t, {
          effect: de(() => n(a)),
          fragment: l
        });
      } else
        s(this, le).set(
          t,
          de(() => n(this.anchor))
        );
    if (s(this, X).set(r, t), i) {
      for (const [o, f] of s(this, le))
        o === t ? r.unskip_effect(f) : r.skip_effect(f);
      for (const [o, f] of s(this, Y))
        o === t ? r.unskip_effect(f.effect) : r.skip_effect(f.effect);
      r.oncommit(s(this, mt)), r.ondiscard(s(this, Ft));
    } else
      s(this, mt).call(this, r);
  }
}
X = new WeakMap(), le = new WeakMap(), Y = new WeakMap(), Oe = new WeakMap(), gt = new WeakMap(), mt = new WeakMap(), Ft = new WeakMap();
function qt(e, t, n = !1) {
  var r = new Ni(e), i = n ? Ze : 0;
  function l(a, o) {
    r.ensure(a, o);
  }
  Jn(() => {
    var a = !1;
    t((o, f = 0) => {
      a = !0, l(f, o);
    }), a || l(-1, null);
  }, i);
}
function Mi(e, t, n = t) {
  var r = /* @__PURE__ */ new WeakSet();
  li(e, "input", async (i) => {
    var l = i ? e.defaultValue : e.value;
    if (l = zt(e) ? Bt(l) : l, n(l), g !== null && r.add(g), await gi(), l !== (l = t())) {
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
  ur(t) == null && e.value && (n(zt(e) ? Bt(e.value) : e.value), g !== null && r.add(g)), Zn(() => {
    var i = t();
    if (e === document.activeElement) {
      var l = (
        /** @type {Batch} */
        g
      );
      if (r.has(l))
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
var Tn;
typeof window < "u" && ((Tn = window.__svelte ?? (window.__svelte = {})).v ?? (Tn.v = /* @__PURE__ */ new Set())).add(Ci);
var Di = /* @__PURE__ */ xi('<svg class="inline-block w-4 h-4 mr-2 animate-spin" viewBox="0 0 24 24" fill="none"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path></svg> Calling backend…', 1), Fi = /* @__PURE__ */ dn('<div class="mt-4 p-3.5 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg"><p class="text-sm font-medium text-green-800 dark:text-green-300"> </p></div>'), Pi = /* @__PURE__ */ dn('<div class="mt-4 p-3.5 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg"><p class="text-sm text-red-800 dark:text-red-300"> </p></div>'), Oi = /* @__PURE__ */ dn(`<div class="max-w-md mx-auto p-6"><h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Hello World</h2> <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm"><label for="hw-name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Your name</label> <input id="hw-name" type="text" placeholder="Enter your name..." class="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg
				bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100
				placeholder-gray-400 dark:placeholder-gray-500
				focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500
				transition-colors"/> <button class="mt-4 w-full px-4 py-2.5 text-sm font-medium text-white bg-indigo-600 rounded-lg
				hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/40
				disabled:opacity-50 disabled:cursor-not-allowed transition-colors"><!></button> <!> <!></div></div>`);
function Ii(e, t) {
  Mn(t, !0);
  let n = /* @__PURE__ */ K(""), r = /* @__PURE__ */ K(""), i = /* @__PURE__ */ K(!1), l = /* @__PURE__ */ K(""), a = /* @__PURE__ */ Qr(() => !M(i) && M(n).trim().length > 0);
  async function o() {
    P(i, !0), P(l, ""), P(r, "");
    try {
      const E = await t.ctx.backend.extension_sync_call({
        extension_name: "hello_world",
        function_name: "greet",
        args: M(n) || ""
      });
      E.success ? P(r, E.response, !0) : P(l, E.response, !0);
    } catch (E) {
      P(l, E?.message ?? String(E), !0);
    } finally {
      P(i, !1);
    }
  }
  function f(E) {
    E.key === "Enter" && M(a) && o();
  }
  var u = Oi(), h = nt(Ae(u), 2), v = nt(Ae(h), 2), _ = nt(v, 2), c = Ae(_);
  {
    var d = (E) => {
      var ue = Di();
      rt(E, ue);
    }, k = (E) => {
      var ue = Si("Say Hello");
      rt(E, ue);
    };
    qt(c, (E) => {
      M(i) ? E(d) : E(k, -1);
    });
  }
  var b = nt(_, 2);
  {
    var j = (E) => {
      var ue = Fi(), It = Ae(ue), jt = Ae(It);
      Yt(() => Sn(jt, M(r))), rt(E, ue);
    };
    qt(b, (E) => {
      M(r) && E(j);
    });
  }
  var we = nt(b, 2);
  {
    var tt = (E) => {
      var ue = Pi(), It = Ae(ue), jt = Ae(It);
      Yt(() => Sn(jt, M(l))), rt(E, ue);
    };
    qt(we, (E) => {
      M(l) && E(tt);
    });
  }
  Yt(() => _.disabled = !M(a)), kn("keydown", v, f), Mi(v, () => M(n), (E) => P(n, E)), kn("click", _, o), rt(e, u), Cn();
}
bi(["keydown", "click"]);
function Vi(e, t) {
  const n = Ti(Ii, { target: e, props: { ctx: t } });
  return {
    unmount() {
      try {
        Ri(n);
      } catch {
      }
    }
  };
}
export {
  Vi as default
};
