var ci = Object.defineProperty;
var Xn = (e) => {
  throw TypeError(e);
};
var di = (e, t, n) => t in e ? ci(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var be = (e, t, n) => di(e, typeof t != "symbol" ? t + "" : t, n), bn = (e, t, n) => t.has(e) || Xn("Cannot " + n);
var l = (e, t, n) => (bn(e, t, "read from private field"), n ? n.call(e) : t.get(e)), g = (e, t, n) => t.has(e) ? Xn("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), x = (e, t, n, r) => (bn(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), A = (e, t, n) => (bn(e, t, "access private method"), n);
var _r = Array.isArray, hi = Array.prototype.indexOf, Tt = Array.prototype.includes, vn = Array.from, vi = Object.defineProperty, It = Object.getOwnPropertyDescriptor, _i = Object.getOwnPropertyDescriptors, pi = Object.prototype, gi = Array.prototype, pr = Object.getPrototypeOf, Qn = Object.isExtensible;
const mi = () => {
};
function wi(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function gr() {
  var e, t, n = new Promise((r, i) => {
    e = r, t = i;
  });
  return { promise: n, resolve: e, reject: t };
}
const H = 2, St = 4, _n = 8, mr = 1 << 24, Me = 16, ke = 32, Ge = 64, Tn = 128, he = 512, P = 1024, B = 2048, Ne = 4096, Y = 8192, ve = 16384, pt = 32768, Sn = 1 << 25, At = 65536, An = 1 << 17, wr = 1 << 18, gt = 1 << 19, bi = 1 << 20, Fe = 1 << 25, ht = 65536, on = 1 << 21, jt = 1 << 22, Ye = 1 << 23, Qt = Symbol("$state"), yi = Symbol(""), Le = new class extends Error {
  constructor() {
    super(...arguments);
    be(this, "name", "StaleReactionError");
    be(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
function xi(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function Ei() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function ki(e, t, n) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function Ti(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Si() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Ai(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Mi() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Ni() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Ci() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Ri() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Li() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
const Oi = 1, Di = 2, Ii = 16, Pi = 1, Fi = 2, F = Symbol(), br = "http://www.w3.org/1999/xhtml";
function ji() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function zi() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function yr(e) {
  return e === this.v;
}
function Bi(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function xr(e) {
  return !Bi(e, this.v);
}
let X = null;
function Mt(e) {
  X = e;
}
function Er(e, t = !1, n) {
  X = {
    p: X,
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
function kr(e) {
  var t = (
    /** @type {ComponentContext} */
    X
  ), n = t.e;
  if (n !== null) {
    t.e = null;
    for (var r of n)
      Ur(r);
  }
  return t.i = !0, X = t.p, /** @type {T} */
  {};
}
function Tr() {
  return !0;
}
let tt = [];
function Sr() {
  var e = tt;
  tt = [], wi(e);
}
function ft(e) {
  if (tt.length === 0 && !Pt) {
    var t = tt;
    queueMicrotask(() => {
      t === tt && Sr();
    });
  }
  tt.push(e);
}
function Hi() {
  for (; tt.length > 0; )
    Sr();
}
function Ar(e) {
  var t = k;
  if (t === null)
    return E.f |= Ye, e;
  if ((t.f & pt) === 0 && (t.f & St) === 0)
    throw e;
  Ue(e, t);
}
function Ue(e, t) {
  for (; t !== null; ) {
    if ((t.f & Tn) !== 0) {
      if ((t.f & pt) === 0)
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
const Vi = -7169;
function D(e, t) {
  e.f = e.f & Vi | t;
}
function jn(e) {
  (e.f & he) !== 0 || e.deps === null ? D(e, P) : D(e, Ne);
}
function Mr(e) {
  if (e !== null)
    for (const t of e)
      (t.f & H) === 0 || (t.f & ht) === 0 || (t.f ^= ht, Mr(
        /** @type {Derived} */
        t.deps
      ));
}
function Nr(e, t, n) {
  (e.f & B) !== 0 ? t.add(e) : (e.f & Ne) !== 0 && n.add(e), Mr(e.deps), D(e, P);
}
const Je = /* @__PURE__ */ new Set();
let b = null, xe = null, Mn = null, Pt = !1, yn = !1, wt = null, en = null;
var er = 0;
let qi = 1;
var bt, yt, it, Oe, Te, Bt, te, Ht, Ve, De, Se, xt, Et, st, I, tn, Cr, nn, Nn, rn, Ui;
const cn = class cn {
  constructor() {
    g(this, I);
    be(this, "id", qi++);
    /**
     * The current values of any signals that are updated in this batch.
     * Tuple format: [value, is_derived] (note: is_derived is false for deriveds, too, if they were overridden via assignment)
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Value, [any, boolean]>}
     */
    be(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any signals (sources and deriveds) that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Value, any>}
     */
    be(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<(batch: Batch) => void>}
     */
    g(this, bt, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    g(this, yt, /* @__PURE__ */ new Set());
    /**
     * Callbacks that should run only when a fork is committed.
     * @type {Set<(batch: Batch) => void>}
     */
    g(this, it, /* @__PURE__ */ new Set());
    /**
     * Async effects that are currently in flight
     * @type {Map<Effect, number>}
     */
    g(this, Oe, /* @__PURE__ */ new Map());
    /**
     * Async effects that are currently in flight, _not_ inside a pending boundary
     * @type {Map<Effect, number>}
     */
    g(this, Te, /* @__PURE__ */ new Map());
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    g(this, Bt, null);
    /**
     * The root effects that need to be flushed
     * @type {Effect[]}
     */
    g(this, te, []);
    /**
     * Effects created while this batch was active.
     * @type {Effect[]}
     */
    g(this, Ht, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    g(this, Ve, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    g(this, De, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    g(this, Se, /* @__PURE__ */ new Map());
    /**
     * Inverse of #skipped_branches which we need to tell prior batches to unskip them when committing
     * @type {Set<Effect>}
     */
    g(this, xt, /* @__PURE__ */ new Set());
    be(this, "is_fork", !1);
    g(this, Et, !1);
    /** @type {Set<Batch>} */
    g(this, st, /* @__PURE__ */ new Set());
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(t) {
    l(this, Se).has(t) || l(this, Se).set(t, { d: [], m: [] }), l(this, xt).delete(t);
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   * @param {(e: Effect) => void} callback
   */
  unskip_effect(t, n = (r) => this.schedule(r)) {
    var r = l(this, Se).get(t);
    if (r) {
      l(this, Se).delete(t);
      for (var i of r.d)
        D(i, B), n(i);
      for (i of r.m)
        D(i, Ne), n(i);
    }
    l(this, xt).add(t);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Value} source
   * @param {any} value
   * @param {boolean} [is_derived]
   */
  capture(t, n, r = !1) {
    t.v !== F && !this.previous.has(t) && this.previous.set(t, t.v), (t.f & Ye) === 0 && (this.current.set(t, [n, r]), xe?.set(t, n)), this.is_fork || (t.v = n);
  }
  activate() {
    b = this;
  }
  deactivate() {
    b = null, xe = null;
  }
  flush() {
    try {
      yn = !0, b = this, A(this, I, nn).call(this);
    } finally {
      er = 0, Mn = null, wt = null, en = null, yn = !1, b = null, xe = null, ut.clear();
    }
  }
  discard() {
    for (const t of l(this, yt)) t(this);
    l(this, yt).clear(), l(this, it).clear(), Je.delete(this);
  }
  /**
   * @param {Effect} effect
   */
  register_created_effect(t) {
    l(this, Ht).push(t);
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  increment(t, n) {
    let r = l(this, Oe).get(n) ?? 0;
    if (l(this, Oe).set(n, r + 1), t) {
      let i = l(this, Te).get(n) ?? 0;
      l(this, Te).set(n, i + 1);
    }
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   * @param {boolean} skip - whether to skip updates (because this is triggered by a stale reaction)
   */
  decrement(t, n, r) {
    let i = l(this, Oe).get(n) ?? 0;
    if (i === 1 ? l(this, Oe).delete(n) : l(this, Oe).set(n, i - 1), t) {
      let s = l(this, Te).get(n) ?? 0;
      s === 1 ? l(this, Te).delete(n) : l(this, Te).set(n, s - 1);
    }
    l(this, Et) || r || (x(this, Et, !0), ft(() => {
      x(this, Et, !1), this.flush();
    }));
  }
  /**
   * @param {Set<Effect>} dirty_effects
   * @param {Set<Effect>} maybe_dirty_effects
   */
  transfer_effects(t, n) {
    for (const r of t)
      l(this, Ve).add(r);
    for (const r of n)
      l(this, De).add(r);
    t.clear(), n.clear();
  }
  /** @param {(batch: Batch) => void} fn */
  oncommit(t) {
    l(this, bt).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    l(this, yt).add(t);
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
    return (l(this, Bt) ?? x(this, Bt, gr())).promise;
  }
  static ensure() {
    if (b === null) {
      const t = b = new cn();
      yn || (Je.add(b), Pt || ft(() => {
        b === t && t.flush();
      }));
    }
    return b;
  }
  apply() {
    {
      xe = null;
      return;
    }
  }
  /**
   *
   * @param {Effect} effect
   */
  schedule(t) {
    if (Mn = t, t.b?.is_pending && (t.f & (St | _n | mr)) !== 0 && (t.f & pt) === 0) {
      t.b.defer_effect(t);
      return;
    }
    for (var n = t; n.parent !== null; ) {
      n = n.parent;
      var r = n.f;
      if (wt !== null && n === k && (E === null || (E.f & H) === 0))
        return;
      if ((r & (Ge | ke)) !== 0) {
        if ((r & P) === 0)
          return;
        n.f ^= P;
      }
    }
    l(this, te).push(n);
  }
};
bt = new WeakMap(), yt = new WeakMap(), it = new WeakMap(), Oe = new WeakMap(), Te = new WeakMap(), Bt = new WeakMap(), te = new WeakMap(), Ht = new WeakMap(), Ve = new WeakMap(), De = new WeakMap(), Se = new WeakMap(), xt = new WeakMap(), Et = new WeakMap(), st = new WeakMap(), I = new WeakSet(), tn = function() {
  return this.is_fork || l(this, Te).size > 0;
}, Cr = function() {
  for (const r of l(this, st))
    for (const i of l(r, Te).keys()) {
      for (var t = !1, n = i; n.parent !== null; ) {
        if (l(this, Se).has(n)) {
          t = !0;
          break;
        }
        n = n.parent;
      }
      if (!t)
        return !0;
    }
  return !1;
}, nn = function() {
  var o;
  if (er++ > 1e3 && (Je.delete(this), $i()), !A(this, I, tn).call(this)) {
    for (const a of l(this, Ve))
      l(this, De).delete(a), D(a, B), this.schedule(a);
    for (const a of l(this, De))
      D(a, Ne), this.schedule(a);
  }
  const t = l(this, te);
  x(this, te, []), this.apply();
  var n = wt = [], r = [], i = en = [];
  for (const a of t)
    try {
      A(this, I, Nn).call(this, a, n, r);
    } catch (u) {
      throw Or(a), u;
    }
  if (b = null, i.length > 0) {
    var s = cn.ensure();
    for (const a of i)
      s.schedule(a);
  }
  if (wt = null, en = null, A(this, I, tn).call(this) || A(this, I, Cr).call(this)) {
    A(this, I, rn).call(this, r), A(this, I, rn).call(this, n);
    for (const [a, u] of l(this, Se))
      Lr(a, u);
  } else {
    l(this, Oe).size === 0 && Je.delete(this), l(this, Ve).clear(), l(this, De).clear();
    for (const a of l(this, bt)) a(this);
    l(this, bt).clear(), tr(r), tr(n), l(this, Bt)?.resolve();
  }
  var f = (
    /** @type {Batch | null} */
    /** @type {unknown} */
    b
  );
  if (l(this, te).length > 0) {
    const a = f ?? (f = this);
    l(a, te).push(...l(this, te).filter((u) => !l(a, te).includes(u)));
  }
  f !== null && (Je.add(f), A(o = f, I, nn).call(o));
}, /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
Nn = function(t, n, r) {
  t.f ^= P;
  for (var i = t.first; i !== null; ) {
    var s = i.f, f = (s & (ke | Ge)) !== 0, o = f && (s & P) !== 0, a = o || (s & Y) !== 0 || l(this, Se).has(i);
    if (!a && i.fn !== null) {
      f ? i.f ^= P : (s & St) !== 0 ? n.push(i) : Gt(i) && ((s & Me) !== 0 && l(this, De).add(i), Ct(i));
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
rn = function(t) {
  for (var n = 0; n < t.length; n += 1)
    Nr(t[n], l(this, Ve), l(this, De));
}, Ui = function() {
  var d, _, v;
  for (const h of Je) {
    var t = h.id < this.id, n = [];
    for (const [c, [m, y]] of this.current) {
      if (h.current.has(c)) {
        var r = (
          /** @type {[any, boolean]} */
          h.current.get(c)[0]
        );
        if (t && m !== r)
          h.current.set(c, [m, y]);
        else
          continue;
      }
      n.push(c);
    }
    var i = [...h.current.keys()].filter((c) => !this.current.has(c));
    if (i.length === 0)
      t && h.discard();
    else if (n.length > 0) {
      if (t)
        for (const c of l(this, xt))
          h.unskip_effect(c, (m) => {
            var y;
            (m.f & (Me | jt)) !== 0 ? h.schedule(m) : A(y = h, I, rn).call(y, [m]);
          });
      h.activate();
      var s = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Map();
      for (var o of n)
        Rr(o, i, s, f);
      f = /* @__PURE__ */ new Map();
      var a = [...h.current.keys()].filter(
        (c) => this.current.has(c) ? (
          /** @type {[any, boolean]} */
          this.current.get(c)[0] !== c
        ) : !0
      );
      for (const c of l(this, Ht))
        (c.f & (ve | Y | An)) === 0 && zn(c, a, f) && ((c.f & (jt | Me)) !== 0 ? (D(c, B), h.schedule(c)) : l(h, Ve).add(c));
      if (l(h, te).length > 0) {
        h.apply();
        for (var u of l(h, te))
          A(d = h, I, Nn).call(d, u, [], []);
        x(h, te, []);
      }
      h.deactivate();
    }
  }
  for (const h of Je)
    l(h, st).has(this) && (l(h, st).delete(this), l(h, st).size === 0 && !A(_ = h, I, tn).call(_) && (h.activate(), A(v = h, I, nn).call(v)));
};
let vt = cn;
function Yi(e) {
  var t = Pt;
  Pt = !0;
  try {
    for (var n; ; ) {
      if (Hi(), b === null)
        return (
          /** @type {T} */
          n
        );
      b.flush();
    }
  } finally {
    Pt = t;
  }
}
function $i() {
  try {
    Mi();
  } catch (e) {
    Ue(e, Mn);
  }
}
let Re = null;
function tr(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var r = e[n++];
      if ((r.f & (ve | Y)) === 0 && Gt(r) && (Re = /* @__PURE__ */ new Set(), Ct(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && $r(r), Re?.size > 0)) {
        ut.clear();
        for (const i of Re) {
          if ((i.f & (ve | Y)) !== 0) continue;
          const s = [i];
          let f = i.parent;
          for (; f !== null; )
            Re.has(f) && (Re.delete(f), s.push(f)), f = f.parent;
          for (let o = s.length - 1; o >= 0; o--) {
            const a = s[o];
            (a.f & (ve | Y)) === 0 && Ct(a);
          }
        }
        Re.clear();
      }
    }
    Re = null;
  }
}
function Rr(e, t, n, r) {
  if (!n.has(e) && (n.add(e), e.reactions !== null))
    for (const i of e.reactions) {
      const s = i.f;
      (s & H) !== 0 ? Rr(
        /** @type {Derived} */
        i,
        t,
        n,
        r
      ) : (s & (jt | Me)) !== 0 && (s & B) === 0 && zn(i, t, r) && (D(i, B), Bn(
        /** @type {Effect} */
        i
      ));
    }
}
function zn(e, t, n) {
  const r = n.get(e);
  if (r !== void 0) return r;
  if (e.deps !== null)
    for (const i of e.deps) {
      if (Tt.call(t, i))
        return !0;
      if ((i.f & H) !== 0 && zn(
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
function Bn(e) {
  b.schedule(e);
}
function Lr(e, t) {
  if (!((e.f & ke) !== 0 && (e.f & P) !== 0)) {
    (e.f & B) !== 0 ? t.d.push(e) : (e.f & Ne) !== 0 && t.m.push(e), D(e, P);
    for (var n = e.first; n !== null; )
      Lr(n, t), n = n.next;
  }
}
function Or(e) {
  D(e, P);
  for (var t = e.first; t !== null; )
    Or(t), t = t.next;
}
function Gi(e) {
  let t = 0, n = _t(0), r;
  return () => {
    qn() && (p(n), Un(() => (t === 0 && (r = mn(() => e(() => Ft(n)))), t += 1, () => {
      ft(() => {
        t -= 1, t === 0 && (r?.(), r = void 0, Ft(n));
      });
    })));
  };
}
var Zi = At | gt;
function Wi(e, t, n, r) {
  new Ki(e, t, n, r);
}
var fe, Fn, ue, lt, W, ce, V, ne, Ie, at, qe, kt, Vt, qt, Pe, dn, O, Ji, Xi, Qi, Cn, sn, ln, Rn, Ln;
class Ki {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(t, n, r, i) {
    g(this, O);
    /** @type {Boundary | null} */
    be(this, "parent");
    be(this, "is_pending", !1);
    /**
     * API-level transformError transform function. Transforms errors before they reach the `failed` snippet.
     * Inherited from parent boundary, or defaults to identity.
     * @type {(error: unknown) => unknown}
     */
    be(this, "transform_error");
    /** @type {TemplateNode} */
    g(this, fe);
    /** @type {TemplateNode | null} */
    g(this, Fn, null);
    /** @type {BoundaryProps} */
    g(this, ue);
    /** @type {((anchor: Node) => void)} */
    g(this, lt);
    /** @type {Effect} */
    g(this, W);
    /** @type {Effect | null} */
    g(this, ce, null);
    /** @type {Effect | null} */
    g(this, V, null);
    /** @type {Effect | null} */
    g(this, ne, null);
    /** @type {DocumentFragment | null} */
    g(this, Ie, null);
    g(this, at, 0);
    g(this, qe, 0);
    g(this, kt, !1);
    /** @type {Set<Effect>} */
    g(this, Vt, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    g(this, qt, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    g(this, Pe, null);
    g(this, dn, Gi(() => (x(this, Pe, _t(l(this, at))), () => {
      x(this, Pe, null);
    })));
    x(this, fe, t), x(this, ue, n), x(this, lt, (s) => {
      var f = (
        /** @type {Effect} */
        k
      );
      f.b = this, f.f |= Tn, r(s);
    }), this.parent = /** @type {Effect} */
    k.b, this.transform_error = i ?? this.parent?.transform_error ?? ((s) => s), x(this, W, gn(() => {
      A(this, O, Cn).call(this);
    }, Zi));
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    Nr(t, l(this, Vt), l(this, qt));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!l(this, ue).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  update_pending_count(t, n) {
    A(this, O, Rn).call(this, t, n), x(this, at, l(this, at) + t), !(!l(this, Pe) || l(this, kt)) && (x(this, kt, !0), ft(() => {
      x(this, kt, !1), l(this, Pe) && Nt(l(this, Pe), l(this, at));
    }));
  }
  get_effect_pending() {
    return l(this, dn).call(this), p(
      /** @type {Source<number>} */
      l(this, Pe)
    );
  }
  /** @param {unknown} error */
  error(t) {
    if (!l(this, ue).onerror && !l(this, ue).failed)
      throw t;
    b?.is_fork ? (l(this, ce) && b.skip_effect(l(this, ce)), l(this, V) && b.skip_effect(l(this, V)), l(this, ne) && b.skip_effect(l(this, ne)), b.on_fork_commit(() => {
      A(this, O, Ln).call(this, t);
    })) : A(this, O, Ln).call(this, t);
  }
}
fe = new WeakMap(), Fn = new WeakMap(), ue = new WeakMap(), lt = new WeakMap(), W = new WeakMap(), ce = new WeakMap(), V = new WeakMap(), ne = new WeakMap(), Ie = new WeakMap(), at = new WeakMap(), qe = new WeakMap(), kt = new WeakMap(), Vt = new WeakMap(), qt = new WeakMap(), Pe = new WeakMap(), dn = new WeakMap(), O = new WeakSet(), Ji = function() {
  try {
    x(this, ce, de(() => l(this, lt).call(this, l(this, fe))));
  } catch (t) {
    this.error(t);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
Xi = function(t) {
  const n = l(this, ue).failed;
  n && x(this, ne, de(() => {
    n(
      l(this, fe),
      () => t,
      () => () => {
      }
    );
  }));
}, Qi = function() {
  const t = l(this, ue).pending;
  t && (this.is_pending = !0, x(this, V, de(() => t(l(this, fe)))), ft(() => {
    var n = x(this, Ie, document.createDocumentFragment()), r = $e();
    n.append(r), x(this, ce, A(this, O, ln).call(this, () => de(() => l(this, lt).call(this, r)))), l(this, qe) === 0 && (l(this, fe).before(n), x(this, Ie, null), ct(
      /** @type {Effect} */
      l(this, V),
      () => {
        x(this, V, null);
      }
    ), A(this, O, sn).call(
      this,
      /** @type {Batch} */
      b
    ));
  }));
}, Cn = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), x(this, qe, 0), x(this, at, 0), x(this, ce, de(() => {
      l(this, lt).call(this, l(this, fe));
    })), l(this, qe) > 0) {
      var t = x(this, Ie, document.createDocumentFragment());
      Gn(l(this, ce), t);
      const n = (
        /** @type {(anchor: Node) => void} */
        l(this, ue).pending
      );
      x(this, V, de(() => n(l(this, fe))));
    } else
      A(this, O, sn).call(
        this,
        /** @type {Batch} */
        b
      );
  } catch (n) {
    this.error(n);
  }
}, /**
 * @param {Batch} batch
 */
sn = function(t) {
  this.is_pending = !1, t.transfer_effects(l(this, Vt), l(this, qt));
}, /**
 * @template T
 * @param {() => T} fn
 */
ln = function(t) {
  var n = k, r = E, i = X;
  Ce(l(this, W)), pe(l(this, W)), Mt(l(this, W).ctx);
  try {
    return vt.ensure(), t();
  } catch (s) {
    return Ar(s), null;
  } finally {
    Ce(n), pe(r), Mt(i);
  }
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 * @param {Batch} batch
 */
Rn = function(t, n) {
  var r;
  if (!this.has_pending_snippet()) {
    this.parent && A(r = this.parent, O, Rn).call(r, t, n);
    return;
  }
  x(this, qe, l(this, qe) + t), l(this, qe) === 0 && (A(this, O, sn).call(this, n), l(this, V) && ct(l(this, V), () => {
    x(this, V, null);
  }), l(this, Ie) && (l(this, fe).before(l(this, Ie)), x(this, Ie, null)));
}, /**
 * @param {unknown} error
 */
Ln = function(t) {
  l(this, ce) && (J(l(this, ce)), x(this, ce, null)), l(this, V) && (J(l(this, V)), x(this, V, null)), l(this, ne) && (J(l(this, ne)), x(this, ne, null));
  var n = l(this, ue).onerror;
  let r = l(this, ue).failed;
  var i = !1, s = !1;
  const f = () => {
    if (i) {
      zi();
      return;
    }
    i = !0, s && Li(), l(this, ne) !== null && ct(l(this, ne), () => {
      x(this, ne, null);
    }), A(this, O, ln).call(this, () => {
      A(this, O, Cn).call(this);
    });
  }, o = (a) => {
    try {
      s = !0, n?.(a, f), s = !1;
    } catch (u) {
      Ue(u, l(this, W) && l(this, W).parent);
    }
    r && x(this, ne, A(this, O, ln).call(this, () => {
      try {
        return de(() => {
          var u = (
            /** @type {Effect} */
            k
          );
          u.b = this, u.f |= Tn, r(
            l(this, fe),
            () => a,
            () => f
          );
        });
      } catch (u) {
        return Ue(
          u,
          /** @type {Effect} */
          l(this, W).parent
        ), null;
      }
    }));
  };
  ft(() => {
    var a;
    try {
      a = this.transform_error(t);
    } catch (u) {
      Ue(u, l(this, W) && l(this, W).parent);
      return;
    }
    a !== null && typeof a == "object" && typeof /** @type {any} */
    a.then == "function" ? a.then(
      o,
      /** @param {unknown} e */
      (u) => Ue(u, l(this, W) && l(this, W).parent)
    ) : o(a);
  });
};
function es(e, t, n, r) {
  const i = Hn;
  var s = e.filter((v) => !v.settled);
  if (n.length === 0 && s.length === 0) {
    r(t.map(i));
    return;
  }
  var f = (
    /** @type {Effect} */
    k
  ), o = ts(), a = s.length === 1 ? s[0].promise : s.length > 1 ? Promise.all(s.map((v) => v.promise)) : null;
  function u(v) {
    o();
    try {
      r(v);
    } catch (h) {
      (f.f & ve) === 0 && Ue(h, f);
    }
    fn();
  }
  if (n.length === 0) {
    a.then(() => u(t.map(i)));
    return;
  }
  var d = Dr();
  function _() {
    Promise.all(n.map((v) => /* @__PURE__ */ ns(v))).then((v) => u([...t.map(i), ...v])).catch((v) => Ue(v, f)).finally(() => d());
  }
  a ? a.then(() => {
    o(), _(), fn();
  }) : _();
}
function ts() {
  var e = (
    /** @type {Effect} */
    k
  ), t = E, n = X, r = (
    /** @type {Batch} */
    b
  );
  return function(s = !0) {
    Ce(e), pe(t), Mt(n), s && (e.f & ve) === 0 && (r?.activate(), r?.apply());
  };
}
function fn(e = !0) {
  Ce(null), pe(null), Mt(null), e && b?.deactivate();
}
function Dr() {
  var e = (
    /** @type {Effect} */
    k
  ), t = (
    /** @type {Boundary} */
    e.b
  ), n = (
    /** @type {Batch} */
    b
  ), r = t.is_rendered();
  return t.update_pending_count(1, n), n.increment(r, e), (i = !1) => {
    t.update_pending_count(-1, n), n.decrement(r, e, i);
  };
}
// @__NO_SIDE_EFFECTS__
function Hn(e) {
  var t = H | B;
  return k !== null && (k.f |= gt), {
    ctx: X,
    deps: null,
    effects: null,
    equals: yr,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      F
    ),
    wv: 0,
    parent: k,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function ns(e, t, n) {
  let r = (
    /** @type {Effect | null} */
    k
  );
  r === null && Ei();
  var i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), s = _t(
    /** @type {V} */
    F
  ), f = !E, o = /* @__PURE__ */ new Map();
  return ws(() => {
    var a = (
      /** @type {Effect} */
      k
    ), u = gr();
    i = u.promise;
    try {
      Promise.resolve(e()).then(u.resolve, u.reject).finally(fn);
    } catch (h) {
      u.reject(h), fn();
    }
    var d = (
      /** @type {Batch} */
      b
    );
    if (f) {
      if ((a.f & pt) !== 0)
        var _ = Dr();
      if (
        /** @type {Boundary} */
        r.b.is_rendered()
      )
        o.get(d)?.reject(Le), o.delete(d);
      else {
        for (const h of o.values())
          h.reject(Le);
        o.clear();
      }
      o.set(d, u);
    }
    const v = (h, c = void 0) => {
      if (_) {
        var m = c === Le;
        _(m);
      }
      if (!(c === Le || (a.f & ve) !== 0)) {
        if (d.activate(), c)
          s.f |= Ye, Nt(s, c);
        else {
          (s.f & Ye) !== 0 && (s.f ^= Ye), Nt(s, h);
          for (const [y, M] of o) {
            if (o.delete(y), y === d) break;
            M.reject(Le);
          }
        }
        d.deactivate();
      }
    };
    u.promise.then(v, (h) => v(null, h || "unknown"));
  }), qr(() => {
    for (const a of o.values())
      a.reject(Le);
  }), new Promise((a) => {
    function u(d) {
      function _() {
        d === i ? a(s) : u(i);
      }
      d.then(_, _);
    }
    u(i);
  });
}
// @__NO_SIDE_EFFECTS__
function xn(e) {
  const t = /* @__PURE__ */ Hn(e);
  return Wr(t), t;
}
// @__NO_SIDE_EFFECTS__
function rs(e) {
  const t = /* @__PURE__ */ Hn(e);
  return t.equals = xr, t;
}
function is(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      J(
        /** @type {Effect} */
        t[n]
      );
  }
}
function Vn(e) {
  var t, n = k, r = e.parent;
  if (!Ze && r !== null && (r.f & (ve | Y)) !== 0)
    return ji(), e.v;
  Ce(r);
  try {
    e.f &= ~ht, is(e), t = Qr(e);
  } finally {
    Ce(n);
  }
  return t;
}
function Ir(e) {
  var t = Vn(e);
  if (!e.equals(t) && (e.wv = Jr(), (!b?.is_fork || e.deps === null) && (b !== null ? b.capture(e, t, !0) : e.v = t, e.deps === null))) {
    D(e, P);
    return;
  }
  Ze || (xe !== null ? (qn() || b?.is_fork) && xe.set(e, t) : jn(e));
}
function ss(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      (t.teardown || t.ac) && (t.teardown?.(), t.ac?.abort(Le), t.teardown = mi, t.ac = null, zt(t, 0), Yn(t));
}
function Pr(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      t.teardown && Ct(t);
}
let On = /* @__PURE__ */ new Set();
const ut = /* @__PURE__ */ new Map();
let Fr = !1;
function _t(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: yr,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function q(e, t) {
  const n = _t(e);
  return Wr(n), n;
}
// @__NO_SIDE_EFFECTS__
function ls(e, t = !1, n = !0) {
  const r = _t(e);
  return t || (r.equals = xr), r;
}
function U(e, t, n = !1) {
  E !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Ee || (E.f & An) !== 0) && Tr() && (E.f & (H | Me | jt | An)) !== 0 && (_e === null || !Tt.call(_e, e)) && Ri();
  let r = n ? nt(t) : t;
  return Nt(e, r, en);
}
function Nt(e, t, n = null) {
  if (!e.equals(t)) {
    ut.set(e, Ze ? t : e.v);
    var r = vt.ensure();
    if (r.capture(e, t), (e.f & H) !== 0) {
      const i = (
        /** @type {Derived} */
        e
      );
      (e.f & B) !== 0 && Vn(i), xe === null && jn(i);
    }
    e.wv = Jr(), jr(e, B, n), k !== null && (k.f & P) !== 0 && (k.f & (ke | Ge)) === 0 && (oe === null ? xs([e]) : oe.push(e)), !r.is_fork && On.size > 0 && !Fr && as();
  }
  return t;
}
function as() {
  Fr = !1;
  for (const e of On)
    (e.f & P) !== 0 && D(e, Ne), Gt(e) && Ct(e);
  On.clear();
}
function Ft(e) {
  U(e, e.v + 1);
}
function jr(e, t, n) {
  var r = e.reactions;
  if (r !== null)
    for (var i = r.length, s = 0; s < i; s++) {
      var f = r[s], o = f.f, a = (o & B) === 0;
      if (a && D(f, t), (o & H) !== 0) {
        var u = (
          /** @type {Derived} */
          f
        );
        xe?.delete(u), (o & ht) === 0 && (o & he && (k === null || (k.f & on) === 0) && (f.f |= ht), jr(u, Ne, n));
      } else if (a) {
        var d = (
          /** @type {Effect} */
          f
        );
        (o & Me) !== 0 && Re !== null && Re.add(d), n !== null ? n.push(d) : Bn(d);
      }
    }
}
function nt(e) {
  if (typeof e != "object" || e === null || Qt in e)
    return e;
  const t = pr(e);
  if (t !== pi && t !== gi)
    return e;
  var n = /* @__PURE__ */ new Map(), r = _r(e), i = /* @__PURE__ */ q(0), s = dt, f = (o) => {
    if (dt === s)
      return o();
    var a = E, u = dt;
    pe(null), sr(s);
    var d = o();
    return pe(a), sr(u), d;
  };
  return r && n.set("length", /* @__PURE__ */ q(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(o, a, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && Ni();
        var d = n.get(a);
        return d === void 0 ? f(() => {
          var _ = /* @__PURE__ */ q(u.value);
          return n.set(a, _), _;
        }) : U(d, u.value, !0), !0;
      },
      deleteProperty(o, a) {
        var u = n.get(a);
        if (u === void 0) {
          if (a in o) {
            const d = f(() => /* @__PURE__ */ q(F));
            n.set(a, d), Ft(i);
          }
        } else
          U(u, F), Ft(i);
        return !0;
      },
      get(o, a, u) {
        if (a === Qt)
          return e;
        var d = n.get(a), _ = a in o;
        if (d === void 0 && (!_ || It(o, a)?.writable) && (d = f(() => {
          var h = nt(_ ? o[a] : F), c = /* @__PURE__ */ q(h);
          return c;
        }), n.set(a, d)), d !== void 0) {
          var v = p(d);
          return v === F ? void 0 : v;
        }
        return Reflect.get(o, a, u);
      },
      getOwnPropertyDescriptor(o, a) {
        var u = Reflect.getOwnPropertyDescriptor(o, a);
        if (u && "value" in u) {
          var d = n.get(a);
          d && (u.value = p(d));
        } else if (u === void 0) {
          var _ = n.get(a), v = _?.v;
          if (_ !== void 0 && v !== F)
            return {
              enumerable: !0,
              configurable: !0,
              value: v,
              writable: !0
            };
        }
        return u;
      },
      has(o, a) {
        if (a === Qt)
          return !0;
        var u = n.get(a), d = u !== void 0 && u.v !== F || Reflect.has(o, a);
        if (u !== void 0 || k !== null && (!d || It(o, a)?.writable)) {
          u === void 0 && (u = f(() => {
            var v = d ? nt(o[a]) : F, h = /* @__PURE__ */ q(v);
            return h;
          }), n.set(a, u));
          var _ = p(u);
          if (_ === F)
            return !1;
        }
        return d;
      },
      set(o, a, u, d) {
        var _ = n.get(a), v = a in o;
        if (r && a === "length")
          for (var h = u; h < /** @type {Source<number>} */
          _.v; h += 1) {
            var c = n.get(h + "");
            c !== void 0 ? U(c, F) : h in o && (c = f(() => /* @__PURE__ */ q(F)), n.set(h + "", c));
          }
        if (_ === void 0)
          (!v || It(o, a)?.writable) && (_ = f(() => /* @__PURE__ */ q(void 0)), U(_, nt(u)), n.set(a, _));
        else {
          v = _.v !== F;
          var m = f(() => nt(u));
          U(_, m);
        }
        var y = Reflect.getOwnPropertyDescriptor(o, a);
        if (y?.set && y.set.call(d, u), !v) {
          if (r && typeof a == "string") {
            var M = (
              /** @type {Source<number>} */
              n.get("length")
            ), T = Number(a);
            Number.isInteger(T) && T >= M.v && U(M, T + 1);
          }
          Ft(i);
        }
        return !0;
      },
      ownKeys(o) {
        p(i);
        var a = Reflect.ownKeys(o).filter((_) => {
          var v = n.get(_);
          return v === void 0 || v.v !== F;
        });
        for (var [u, d] of n)
          d.v !== F && !(u in o) && a.push(u);
        return a;
      },
      setPrototypeOf() {
        Ci();
      }
    }
  );
}
var nr, zr, Br, Hr;
function os() {
  if (nr === void 0) {
    nr = window, zr = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    Br = It(t, "firstChild").get, Hr = It(t, "nextSibling").get, Qn(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), Qn(n) && (n.__t = void 0);
  }
}
function $e(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function un(e) {
  return (
    /** @type {TemplateNode | null} */
    Br.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function $t(e) {
  return (
    /** @type {TemplateNode | null} */
    Hr.call(e)
  );
}
function z(e, t) {
  return /* @__PURE__ */ un(e);
}
function fs(e, t = !1) {
  {
    var n = /* @__PURE__ */ un(e);
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ $t(n) : n;
  }
}
function Z(e, t = 1, n = !1) {
  let r = e;
  for (; t--; )
    r = /** @type {TemplateNode} */
    /* @__PURE__ */ $t(r);
  return r;
}
function us(e) {
  e.textContent = "";
}
function Vr() {
  return !1;
}
function cs(e, t, n) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElementNS(br, e, void 0)
  );
}
let rr = !1;
function ds() {
  rr || (rr = !0, document.addEventListener(
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
function pn(e) {
  var t = E, n = k;
  pe(null), Ce(null);
  try {
    return e();
  } finally {
    pe(t), Ce(n);
  }
}
function hs(e, t, n, r = n) {
  e.addEventListener(t, () => pn(n));
  const i = e.__on_r;
  i ? e.__on_r = () => {
    i(), r(!0);
  } : e.__on_r = () => r(!0), ds();
}
function vs(e) {
  k === null && (E === null && Ai(), Si()), Ze && Ti();
}
function _s(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function je(e, t) {
  var n = k;
  n !== null && (n.f & Y) !== 0 && (e |= Y);
  var r = {
    ctx: X,
    deps: null,
    nodes: null,
    f: e | B | he,
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
  b?.register_created_effect(r);
  var i = r;
  if ((e & St) !== 0)
    wt !== null ? wt.push(r) : vt.ensure().schedule(r);
  else if (t !== null) {
    try {
      Ct(r);
    } catch (f) {
      throw J(r), f;
    }
    i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && // either `null`, or a singular child
    (i.f & gt) === 0 && (i = i.first, (e & Me) !== 0 && (e & At) !== 0 && i !== null && (i.f |= At));
  }
  if (i !== null && (i.parent = n, n !== null && _s(i, n), E !== null && (E.f & H) !== 0 && (e & Ge) === 0)) {
    var s = (
      /** @type {Derived} */
      E
    );
    (s.effects ?? (s.effects = [])).push(i);
  }
  return r;
}
function qn() {
  return E !== null && !Ee;
}
function qr(e) {
  const t = je(_n, null);
  return D(t, P), t.teardown = e, t;
}
function ps(e) {
  vs();
  var t = (
    /** @type {Effect} */
    k.f
  ), n = !E && (t & ke) !== 0 && (t & pt) === 0;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      X
    );
    (r.e ?? (r.e = [])).push(e);
  } else
    return Ur(e);
}
function Ur(e) {
  return je(St | bi, e);
}
function gs(e) {
  vt.ensure();
  const t = je(Ge | gt, e);
  return (n = {}) => new Promise((r) => {
    n.outro ? ct(t, () => {
      J(t), r(void 0);
    }) : (J(t), r(void 0));
  });
}
function ms(e) {
  return je(St, e);
}
function ws(e) {
  return je(jt | gt, e);
}
function Un(e, t = 0) {
  return je(_n | t, e);
}
function Xe(e, t = [], n = [], r = []) {
  es(r, t, n, (i) => {
    je(_n, () => e(...i.map(p)));
  });
}
function gn(e, t = 0) {
  var n = je(Me | t, e);
  return n;
}
function de(e) {
  return je(ke | gt, e);
}
function Yr(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = Ze, r = E;
    ir(!0), pe(null);
    try {
      t.call(null);
    } finally {
      ir(n), pe(r);
    }
  }
}
function Yn(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const i = n.ac;
    i !== null && pn(() => {
      i.abort(Le);
    });
    var r = n.next;
    (n.f & Ge) !== 0 ? n.parent = null : J(n, t), n = r;
  }
}
function bs(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & ke) === 0 && J(t), t = n;
  }
}
function J(e, t = !0) {
  var n = !1;
  (t || (e.f & wr) !== 0) && e.nodes !== null && e.nodes.end !== null && (ys(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), n = !0), D(e, Sn), Yn(e, t && !n), zt(e, 0);
  var r = e.nodes && e.nodes.t;
  if (r !== null)
    for (const s of r)
      s.stop();
  Yr(e), e.f ^= Sn, e.f |= ve;
  var i = e.parent;
  i !== null && i.first !== null && $r(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function ys(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : /* @__PURE__ */ $t(e);
    e.remove(), e = n;
  }
}
function $r(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function ct(e, t, n = !0) {
  var r = [];
  Gr(e, r, !0);
  var i = () => {
    n && J(e), t && t();
  }, s = r.length;
  if (s > 0) {
    var f = () => --s || i();
    for (var o of r)
      o.out(f);
  } else
    i();
}
function Gr(e, t, n) {
  if ((e.f & Y) === 0) {
    e.f ^= Y;
    var r = e.nodes && e.nodes.t;
    if (r !== null)
      for (const o of r)
        (o.is_global || n) && t.push(o);
    for (var i = e.first; i !== null; ) {
      var s = i.next;
      if ((i.f & Ge) === 0) {
        var f = (i.f & At) !== 0 || // If this is a branch effect without a block effect parent,
        // it means the parent block effect was pruned. In that case,
        // transparency information was transferred to the branch effect.
        (i.f & ke) !== 0 && (e.f & Me) !== 0;
        Gr(i, t, f ? n : !1);
      }
      i = s;
    }
  }
}
function $n(e) {
  Zr(e, !0);
}
function Zr(e, t) {
  if ((e.f & Y) !== 0) {
    e.f ^= Y, (e.f & P) === 0 && (D(e, B), vt.ensure().schedule(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, i = (n.f & At) !== 0 || (n.f & ke) !== 0;
      Zr(n, i ? t : !1), n = r;
    }
    var s = e.nodes && e.nodes.t;
    if (s !== null)
      for (const f of s)
        (f.is_global || t) && f.in();
  }
}
function Gn(e, t) {
  if (e.nodes)
    for (var n = e.nodes.start, r = e.nodes.end; n !== null; ) {
      var i = n === r ? null : /* @__PURE__ */ $t(n);
      t.append(n), n = i;
    }
}
let an = !1, Ze = !1;
function ir(e) {
  Ze = e;
}
let E = null, Ee = !1;
function pe(e) {
  E = e;
}
let k = null;
function Ce(e) {
  k = e;
}
let _e = null;
function Wr(e) {
  E !== null && (_e === null ? _e = [e] : _e.push(e));
}
let K = null, ee = 0, oe = null;
function xs(e) {
  oe = e;
}
let Kr = 1, rt = 0, dt = rt;
function sr(e) {
  dt = e;
}
function Jr() {
  return ++Kr;
}
function Gt(e) {
  var t = e.f;
  if ((t & B) !== 0)
    return !0;
  if (t & H && (e.f &= ~ht), (t & Ne) !== 0) {
    for (var n = (
      /** @type {Value[]} */
      e.deps
    ), r = n.length, i = 0; i < r; i++) {
      var s = n[i];
      if (Gt(
        /** @type {Derived} */
        s
      ) && Ir(
        /** @type {Derived} */
        s
      ), s.wv > e.wv)
        return !0;
    }
    (t & he) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    xe === null && D(e, P);
  }
  return !1;
}
function Xr(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null && !(_e !== null && Tt.call(_e, e)))
    for (var i = 0; i < r.length; i++) {
      var s = r[i];
      (s.f & H) !== 0 ? Xr(
        /** @type {Derived} */
        s,
        t,
        !1
      ) : t === s && (n ? D(s, B) : (s.f & P) !== 0 && D(s, Ne), Bn(
        /** @type {Effect} */
        s
      ));
    }
}
function Qr(e) {
  var m;
  var t = K, n = ee, r = oe, i = E, s = _e, f = X, o = Ee, a = dt, u = e.f;
  K = /** @type {null | Value[]} */
  null, ee = 0, oe = null, E = (u & (ke | Ge)) === 0 ? e : null, _e = null, Mt(e.ctx), Ee = !1, dt = ++rt, e.ac !== null && (pn(() => {
    e.ac.abort(Le);
  }), e.ac = null);
  try {
    e.f |= on;
    var d = (
      /** @type {Function} */
      e.fn
    ), _ = d();
    e.f |= pt;
    var v = e.deps, h = b?.is_fork;
    if (K !== null) {
      var c;
      if (h || zt(e, ee), v !== null && ee > 0)
        for (v.length = ee + K.length, c = 0; c < K.length; c++)
          v[ee + c] = K[c];
      else
        e.deps = v = K;
      if (qn() && (e.f & he) !== 0)
        for (c = ee; c < v.length; c++)
          ((m = v[c]).reactions ?? (m.reactions = [])).push(e);
    } else !h && v !== null && ee < v.length && (zt(e, ee), v.length = ee);
    if (Tr() && oe !== null && !Ee && v !== null && (e.f & (H | Ne | B)) === 0)
      for (c = 0; c < /** @type {Source[]} */
      oe.length; c++)
        Xr(
          oe[c],
          /** @type {Effect} */
          e
        );
    if (i !== null && i !== e) {
      if (rt++, i.deps !== null)
        for (let y = 0; y < n; y += 1)
          i.deps[y].rv = rt;
      if (t !== null)
        for (const y of t)
          y.rv = rt;
      oe !== null && (r === null ? r = oe : r.push(.../** @type {Source[]} */
      oe));
    }
    return (e.f & Ye) !== 0 && (e.f ^= Ye), _;
  } catch (y) {
    return Ar(y);
  } finally {
    e.f ^= on, K = t, ee = n, oe = r, E = i, _e = s, Mt(f), Ee = o, dt = a;
  }
}
function Es(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = hi.call(n, e);
    if (r !== -1) {
      var i = n.length - 1;
      i === 0 ? n = t.reactions = null : (n[r] = n[i], n.pop());
    }
  }
  if (n === null && (t.f & H) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (K === null || !Tt.call(K, t))) {
    var s = (
      /** @type {Derived} */
      t
    );
    (s.f & he) !== 0 && (s.f ^= he, s.f &= ~ht), s.v !== F && jn(s), ss(s), zt(s, 0);
  }
}
function zt(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      Es(e, n[r]);
}
function Ct(e) {
  var t = e.f;
  if ((t & ve) === 0) {
    D(e, P);
    var n = k, r = an;
    k = e, an = !0;
    try {
      (t & (Me | mr)) !== 0 ? bs(e) : Yn(e), Yr(e);
      var i = Qr(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = Kr;
      var s;
    } finally {
      an = r, k = n;
    }
  }
}
async function ei() {
  await Promise.resolve(), Yi();
}
function p(e) {
  var t = e.f, n = (t & H) !== 0;
  if (E !== null && !Ee) {
    var r = k !== null && (k.f & ve) !== 0;
    if (!r && (_e === null || !Tt.call(_e, e))) {
      var i = E.deps;
      if ((E.f & on) !== 0)
        e.rv < rt && (e.rv = rt, K === null && i !== null && i[ee] === e ? ee++ : K === null ? K = [e] : K.push(e));
      else {
        (E.deps ?? (E.deps = [])).push(e);
        var s = e.reactions;
        s === null ? e.reactions = [E] : Tt.call(s, E) || s.push(E);
      }
    }
  }
  if (Ze && ut.has(e))
    return ut.get(e);
  if (n) {
    var f = (
      /** @type {Derived} */
      e
    );
    if (Ze) {
      var o = f.v;
      return ((f.f & P) === 0 && f.reactions !== null || ni(f)) && (o = Vn(f)), ut.set(f, o), o;
    }
    var a = (f.f & he) === 0 && !Ee && E !== null && (an || (E.f & he) !== 0), u = (f.f & pt) === 0;
    Gt(f) && (a && (f.f |= he), Ir(f)), a && !u && (Pr(f), ti(f));
  }
  if (xe?.has(e))
    return xe.get(e);
  if ((e.f & Ye) !== 0)
    throw e.v;
  return e.v;
}
function ti(e) {
  if (e.f |= he, e.deps !== null)
    for (const t of e.deps)
      (t.reactions ?? (t.reactions = [])).push(e), (t.f & H) !== 0 && (t.f & he) === 0 && (Pr(
        /** @type {Derived} */
        t
      ), ti(
        /** @type {Derived} */
        t
      ));
}
function ni(e) {
  if (e.v === F) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (ut.has(t) || (t.f & H) !== 0 && ni(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function mn(e) {
  var t = Ee;
  try {
    return Ee = !0, e();
  } finally {
    Ee = t;
  }
}
const ks = ["touchstart", "touchmove"];
function Ts(e) {
  return ks.includes(e);
}
const Jt = Symbol("events"), Ss = /* @__PURE__ */ new Set(), lr = /* @__PURE__ */ new Set();
function As(e, t, n, r = {}) {
  function i(s) {
    if (r.capture || Dn.call(t, s), !s.cancelBubble)
      return pn(() => n?.call(this, s));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? ft(() => {
    t.addEventListener(e, i, r);
  }) : t.addEventListener(e, i, r), i;
}
function Ms(e, t, n, r, i) {
  var s = { capture: r, passive: i }, f = As(e, t, n, s);
  (t === document.body || // @ts-ignore
  t === window || // @ts-ignore
  t === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  t instanceof HTMLMediaElement) && qr(() => {
    t.removeEventListener(e, f, s);
  });
}
let ar = null;
function Dn(e) {
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), r = e.type, i = e.composedPath?.() || [], s = (
    /** @type {null | Element} */
    i[0] || e.target
  );
  ar = e;
  var f = 0, o = ar === e && e[Jt];
  if (o) {
    var a = i.indexOf(o);
    if (a !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e[Jt] = t;
      return;
    }
    var u = i.indexOf(t);
    if (u === -1)
      return;
    a <= u && (f = a);
  }
  if (s = /** @type {Element} */
  i[f] || e.target, s !== t) {
    vi(e, "currentTarget", {
      configurable: !0,
      get() {
        return s || n;
      }
    });
    var d = E, _ = k;
    pe(null), Ce(null);
    try {
      for (var v, h = []; s !== null; ) {
        var c = s.assignedSlot || s.parentNode || /** @type {any} */
        s.host || null;
        try {
          var m = s[Jt]?.[r];
          m != null && (!/** @type {any} */
          s.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === s) && m.call(s, e);
        } catch (y) {
          v ? h.push(y) : v = y;
        }
        if (e.cancelBubble || c === t || c === null)
          break;
        s = c;
      }
      if (v) {
        for (let y of h)
          queueMicrotask(() => {
            throw y;
          });
        throw v;
      }
    } finally {
      e[Jt] = t, delete e.currentTarget, pe(d), Ce(_);
    }
  }
}
const Ns = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (e) => e
  })
);
function Cs(e) {
  return (
    /** @type {string} */
    Ns?.createHTML(e) ?? e
  );
}
function Rs(e) {
  var t = cs("template");
  return t.innerHTML = Cs(e.replaceAll("<!>", "<!---->")), t.content;
}
function or(e, t) {
  var n = (
    /** @type {Effect} */
    k
  );
  n.nodes === null && (n.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function ge(e, t) {
  var n = (t & Pi) !== 0, r = (t & Fi) !== 0, i, s = !e.startsWith("<!>");
  return () => {
    i === void 0 && (i = Rs(s ? e : "<!>" + e), n || (i = /** @type {TemplateNode} */
    /* @__PURE__ */ un(i)));
    var f = (
      /** @type {TemplateNode} */
      r || zr ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (n) {
      var o = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ un(f)
      ), a = (
        /** @type {TemplateNode} */
        f.lastChild
      );
      or(o, a);
    } else
      or(f, f);
    return f;
  };
}
function ae(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function Qe(e, t) {
  var n = t == null ? "" : typeof t == "object" ? `${t}` : t;
  n !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = n, e.nodeValue = `${n}`);
}
function Ls(e, t) {
  return Os(e, t);
}
const Xt = /* @__PURE__ */ new Map();
function Os(e, { target: t, anchor: n, props: r = {}, events: i, context: s, intro: f = !0, transformError: o }) {
  os();
  var a = void 0, u = gs(() => {
    var d = n ?? t.appendChild($e());
    Wi(
      /** @type {TemplateNode} */
      d,
      {
        pending: () => {
        }
      },
      (h) => {
        Er({});
        var c = (
          /** @type {ComponentContext} */
          X
        );
        s && (c.c = s), i && (r.$$events = i), a = e(h, r) || {}, kr();
      },
      o
    );
    var _ = /* @__PURE__ */ new Set(), v = (h) => {
      for (var c = 0; c < h.length; c++) {
        var m = h[c];
        if (!_.has(m)) {
          _.add(m);
          var y = Ts(m);
          for (const w of [t, document]) {
            var M = Xt.get(w);
            M === void 0 && (M = /* @__PURE__ */ new Map(), Xt.set(w, M));
            var T = M.get(m);
            T === void 0 ? (w.addEventListener(m, Dn, { passive: y }), M.set(m, 1)) : M.set(m, T + 1);
          }
        }
      }
    };
    return v(vn(Ss)), lr.add(v), () => {
      for (var h of _)
        for (const y of [t, document]) {
          var c = (
            /** @type {Map<string, number>} */
            Xt.get(y)
          ), m = (
            /** @type {number} */
            c.get(h)
          );
          --m == 0 ? (y.removeEventListener(h, Dn), c.delete(h), c.size === 0 && Xt.delete(y)) : c.set(h, m);
        }
      lr.delete(v), d !== n && d.parentNode?.removeChild(d);
    };
  });
  return In.set(a, u), a;
}
let In = /* @__PURE__ */ new WeakMap();
function Ds(e, t) {
  const n = In.get(e);
  return n ? (In.delete(e), n(t)) : Promise.resolve();
}
var ye, Ae, re, ot, Ut, Yt, hn;
class Is {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, n = !0) {
    /** @type {TemplateNode} */
    be(this, "anchor");
    /** @type {Map<Batch, Key>} */
    g(this, ye, /* @__PURE__ */ new Map());
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
    g(this, Ae, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    g(this, re, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    g(this, ot, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    g(this, Ut, !0);
    /**
     * @param {Batch} batch
     */
    g(this, Yt, (t) => {
      if (l(this, ye).has(t)) {
        var n = (
          /** @type {Key} */
          l(this, ye).get(t)
        ), r = l(this, Ae).get(n);
        if (r)
          $n(r), l(this, ot).delete(n);
        else {
          var i = l(this, re).get(n);
          i && (l(this, Ae).set(n, i.effect), l(this, re).delete(n), i.fragment.lastChild.remove(), this.anchor.before(i.fragment), r = i.effect);
        }
        for (const [s, f] of l(this, ye)) {
          if (l(this, ye).delete(s), s === t)
            break;
          const o = l(this, re).get(f);
          o && (J(o.effect), l(this, re).delete(f));
        }
        for (const [s, f] of l(this, Ae)) {
          if (s === n || l(this, ot).has(s)) continue;
          const o = () => {
            if (Array.from(l(this, ye).values()).includes(s)) {
              var u = document.createDocumentFragment();
              Gn(f, u), u.append($e()), l(this, re).set(s, { effect: f, fragment: u });
            } else
              J(f);
            l(this, ot).delete(s), l(this, Ae).delete(s);
          };
          l(this, Ut) || !r ? (l(this, ot).add(s), ct(f, o, !1)) : o();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    g(this, hn, (t) => {
      l(this, ye).delete(t);
      const n = Array.from(l(this, ye).values());
      for (const [r, i] of l(this, re))
        n.includes(r) || (J(i.effect), l(this, re).delete(r));
    });
    this.anchor = t, x(this, Ut, n);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, n) {
    var r = (
      /** @type {Batch} */
      b
    ), i = Vr();
    if (n && !l(this, Ae).has(t) && !l(this, re).has(t))
      if (i) {
        var s = document.createDocumentFragment(), f = $e();
        s.append(f), l(this, re).set(t, {
          effect: de(() => n(f)),
          fragment: s
        });
      } else
        l(this, Ae).set(
          t,
          de(() => n(this.anchor))
        );
    if (l(this, ye).set(r, t), i) {
      for (const [o, a] of l(this, Ae))
        o === t ? r.unskip_effect(a) : r.skip_effect(a);
      for (const [o, a] of l(this, re))
        o === t ? r.unskip_effect(a.effect) : r.skip_effect(a.effect);
      r.oncommit(l(this, Yt)), r.ondiscard(l(this, hn));
    } else
      l(this, Yt).call(this, r);
  }
}
ye = new WeakMap(), Ae = new WeakMap(), re = new WeakMap(), ot = new WeakMap(), Ut = new WeakMap(), Yt = new WeakMap(), hn = new WeakMap();
function et(e, t, n = !1) {
  var r = new Is(e), i = n ? At : 0;
  function s(f, o) {
    r.ensure(f, o);
  }
  gn(() => {
    var f = !1;
    t((o, a = 0) => {
      f = !0, s(a, o);
    }), f || s(-1, null);
  }, i);
}
function fr(e, t) {
  return t;
}
function Ps(e, t, n) {
  for (var r = [], i = t.length, s, f = t.length, o = 0; o < i; o++) {
    let _ = t[o];
    ct(
      _,
      () => {
        if (s) {
          if (s.pending.delete(_), s.done.add(_), s.pending.size === 0) {
            var v = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            Pn(e, vn(s.done)), v.delete(s), v.size === 0 && (e.outrogroups = null);
          }
        } else
          f -= 1;
      },
      !1
    );
  }
  if (f === 0) {
    var a = r.length === 0 && n !== null;
    if (a) {
      var u = (
        /** @type {Element} */
        n
      ), d = (
        /** @type {Element} */
        u.parentNode
      );
      us(d), d.append(u), e.items.clear();
    }
    Pn(e, t, !a);
  } else
    s = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ?? (e.outrogroups = /* @__PURE__ */ new Set())).add(s);
}
function Pn(e, t, n = !0) {
  var r;
  if (e.pending.size > 0) {
    r = /* @__PURE__ */ new Set();
    for (const f of e.pending.values())
      for (const o of f)
        r.add(
          /** @type {EachItem} */
          e.items.get(o).e
        );
  }
  for (var i = 0; i < t.length; i++) {
    var s = t[i];
    if (r?.has(s)) {
      s.f |= Fe;
      const f = document.createDocumentFragment();
      Gn(s, f);
    } else
      J(t[i], n);
  }
}
var ur;
function cr(e, t, n, r, i, s = null) {
  var f = e, o = /* @__PURE__ */ new Map();
  {
    var a = (
      /** @type {Element} */
      e
    );
    f = a.appendChild($e());
  }
  var u = null, d = /* @__PURE__ */ rs(() => {
    var T = n();
    return _r(T) ? T : T == null ? [] : vn(T);
  }), _, v = /* @__PURE__ */ new Map(), h = !0;
  function c(T) {
    (M.effect.f & ve) === 0 && (M.pending.delete(T), M.fallback = u, Fs(M, _, f, t, r), u !== null && (_.length === 0 ? (u.f & Fe) === 0 ? $n(u) : (u.f ^= Fe, Dt(u, null, f)) : ct(u, () => {
      u = null;
    })));
  }
  function m(T) {
    M.pending.delete(T);
  }
  var y = gn(() => {
    _ = /** @type {V[]} */
    p(d);
    for (var T = _.length, w = /* @__PURE__ */ new Set(), S = (
      /** @type {Batch} */
      b
    ), $ = Vr(), R = 0; R < T; R += 1) {
      var G = _[R], N = r(G, R), j = h ? null : o.get(N);
      j ? (j.v && Nt(j.v, G), j.i && Nt(j.i, R), $ && S.unskip_effect(j.e)) : (j = js(
        o,
        h ? f : ur ?? (ur = $e()),
        G,
        N,
        R,
        i,
        t,
        n
      ), h || (j.e.f |= Fe), o.set(N, j)), w.add(N);
    }
    if (T === 0 && s && !u && (h ? u = de(() => s(f)) : (u = de(() => s(ur ?? (ur = $e()))), u.f |= Fe)), T > w.size && ki(), !h)
      if (v.set(S, w), $) {
        for (const [L, me] of o)
          w.has(L) || S.skip_effect(me.e);
        S.oncommit(c), S.ondiscard(m);
      } else
        c(S);
    p(d);
  }), M = { effect: y, items: o, pending: v, outrogroups: null, fallback: u };
  h = !1;
}
function Lt(e) {
  for (; e !== null && (e.f & ke) === 0; )
    e = e.next;
  return e;
}
function Fs(e, t, n, r, i) {
  var s = t.length, f = e.items, o = Lt(e.effect.first), a, u = null, d = [], _ = [], v, h, c, m;
  for (m = 0; m < s; m += 1) {
    if (v = t[m], h = i(v, m), c = /** @type {EachItem} */
    f.get(h).e, e.outrogroups !== null)
      for (const N of e.outrogroups)
        N.pending.delete(c), N.done.delete(c);
    if ((c.f & Y) !== 0 && $n(c), (c.f & Fe) !== 0)
      if (c.f ^= Fe, c === o)
        Dt(c, null, n);
      else {
        var y = u ? u.next : o;
        c === e.effect.last && (e.effect.last = c.prev), c.prev && (c.prev.next = c.next), c.next && (c.next.prev = c.prev), He(e, u, c), He(e, c, y), Dt(c, y, n), u = c, d = [], _ = [], o = Lt(u.next);
        continue;
      }
    if (c !== o) {
      if (a !== void 0 && a.has(c)) {
        if (d.length < _.length) {
          var M = _[0], T;
          u = M.prev;
          var w = d[0], S = d[d.length - 1];
          for (T = 0; T < d.length; T += 1)
            Dt(d[T], M, n);
          for (T = 0; T < _.length; T += 1)
            a.delete(_[T]);
          He(e, w.prev, S.next), He(e, u, w), He(e, S, M), o = M, u = S, m -= 1, d = [], _ = [];
        } else
          a.delete(c), Dt(c, o, n), He(e, c.prev, c.next), He(e, c, u === null ? e.effect.first : u.next), He(e, u, c), u = c;
        continue;
      }
      for (d = [], _ = []; o !== null && o !== c; )
        (a ?? (a = /* @__PURE__ */ new Set())).add(o), _.push(o), o = Lt(o.next);
      if (o === null)
        continue;
    }
    (c.f & Fe) === 0 && d.push(c), u = c, o = Lt(c.next);
  }
  if (e.outrogroups !== null) {
    for (const N of e.outrogroups)
      N.pending.size === 0 && (Pn(e, vn(N.done)), e.outrogroups?.delete(N));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (o !== null || a !== void 0) {
    var $ = [];
    if (a !== void 0)
      for (c of a)
        (c.f & Y) === 0 && $.push(c);
    for (; o !== null; )
      (o.f & Y) === 0 && o !== e.fallback && $.push(o), o = Lt(o.next);
    var R = $.length;
    if (R > 0) {
      var G = s === 0 ? n : null;
      Ps(e, $, G);
    }
  }
}
function js(e, t, n, r, i, s, f, o) {
  var a = (f & Oi) !== 0 ? (f & Ii) === 0 ? /* @__PURE__ */ ls(n, !1, !1) : _t(n) : null, u = (f & Di) !== 0 ? _t(i) : null;
  return {
    v: a,
    i: u,
    e: de(() => (s(t, a ?? n, u ?? i, o), () => {
      e.delete(r);
    }))
  };
}
function Dt(e, t, n) {
  if (e.nodes)
    for (var r = e.nodes.start, i = e.nodes.end, s = t && (t.f & Fe) === 0 ? (
      /** @type {EffectNodes} */
      t.nodes.start
    ) : n; r !== null; ) {
      var f = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ $t(r)
      );
      if (s.before(r), r === i)
        return;
      r = f;
    }
}
function He(e, t, n) {
  t === null ? e.effect.first = n : t.next = n, n === null ? e.effect.last = t : n.prev = t;
}
function zs(e, t) {
  var n;
  n = document.head.appendChild($e());
  try {
    gn(() => t(n), wr | gt);
  } finally {
  }
}
function Bs(e, t) {
  return e == null ? null : String(e);
}
function Hs(e, t, n, r) {
  var i = e.__style;
  if (i !== t) {
    var s = Bs(t);
    s == null ? e.removeAttribute("style") : e.style.cssText = s, e.__style = t;
  }
  return r;
}
const Vs = Symbol("is custom element"), qs = Symbol("is html");
function Ot(e, t, n, r) {
  var i = Us(e);
  i[t] !== (i[t] = n) && (t === "loading" && (e[yi] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && Ys(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function Us(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [Vs]: e.nodeName.includes("-"),
      [qs]: e.namespaceURI === br
    })
  );
}
var dr = /* @__PURE__ */ new Map();
function Ys(e) {
  var t = e.getAttribute("is") || e.nodeName, n = dr.get(t);
  if (n) return n;
  dr.set(t, n = []);
  for (var r, i = e, s = Element.prototype; s !== i; ) {
    r = _i(i);
    for (var f in r)
      r[f].set && n.push(f);
    i = pr(i);
  }
  return n;
}
function $s(e, t, n = t) {
  var r = /* @__PURE__ */ new WeakSet();
  hs(e, "input", async (i) => {
    var s = i ? e.defaultValue : e.value;
    if (s = En(e) ? kn(s) : s, n(s), b !== null && r.add(b), await ei(), s !== (s = t())) {
      var f = e.selectionStart, o = e.selectionEnd, a = e.value.length;
      if (e.value = s ?? "", o !== null) {
        var u = e.value.length;
        f === o && o === a && u > a ? (e.selectionStart = u, e.selectionEnd = u) : (e.selectionStart = f, e.selectionEnd = Math.min(o, u));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  mn(t) == null && e.value && (n(En(e) ? kn(e.value) : e.value), b !== null && r.add(b)), Un(() => {
    var i = t();
    if (e === document.activeElement) {
      var s = (
        /** @type {Batch} */
        b
      );
      if (r.has(s))
        return;
    }
    En(e) && i === kn(e.value) || e.type === "date" && !i && !e.value || i !== e.value && (e.value = i ?? "");
  });
}
function En(e) {
  var t = e.type;
  return t === "number" || t === "range";
}
function kn(e) {
  return e === "" ? null : +e;
}
function hr(e, t) {
  return e === t || e?.[Qt] === t;
}
function Gs(e = {}, t, n, r) {
  var i = (
    /** @type {ComponentContext} */
    X.r
  ), s = (
    /** @type {Effect} */
    k
  );
  return ms(() => {
    var f, o;
    return Un(() => {
      f = o, o = [], mn(() => {
        e !== n(...o) && (t(e, ...o), f && hr(n(...f), e) && t(null, ...f));
      });
    }), () => {
      let a = s;
      for (; a !== i && a.parent !== null && a.parent.f & Sn; )
        a = a.parent;
      const u = () => {
        o && hr(n(...o), e) && t(null, ...o);
      }, d = a.teardown;
      a.teardown = () => {
        u(), d?.();
      };
    };
  }), e;
}
function Zs(e) {
  X === null && xi(), ps(() => {
    const t = mn(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
const Ws = "5";
var vr;
typeof window < "u" && ((vr = window.__svelte ?? (window.__svelte = {})).v ?? (vr.v = /* @__PURE__ */ new Set())).add(Ws);
var Ks = /* @__PURE__ */ ge('<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=" crossorigin=""/>'), Js = /* @__PURE__ */ ge('<div class="flex items-center justify-center py-12"><svg class="animate-spin h-8 w-8 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> <span class="ml-3 text-gray-500">Loading dashboard...</span></div>'), Xs = /* @__PURE__ */ ge('<p class="text-base text-gray-700 leading-relaxed mb-2 max-w-3xl"> </p>'), Qs = /* @__PURE__ */ ge('<p class="text-sm text-gray-600 italic mb-6 max-w-3xl"> </p>'), el = /* @__PURE__ */ ge('<div class="rounded-lg bg-white/60 backdrop-blur-sm border border-white/80 p-3"><p class="text-xs text-gray-500 font-medium"> </p> <p class="text-2xl font-bold text-gray-900"> </p></div>'), tl = /* @__PURE__ */ ge('<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-6"></div>'), nl = /* @__PURE__ */ ge('<div class="rounded-lg border border-gray-200 shadow-md relative"><div class="p-8"><div class="flex items-center gap-3 mb-3"><img class="w-12 h-12 object-contain"/> <h1 class="text-3xl font-bold text-gray-900"> </h1></div> <!> <!> <!> <a href="/join" class="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gray-900 text-white font-semibold hover:bg-black transition-colors shadow-md">Join this Realm <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg></a></div></div>'), rl = /* @__PURE__ */ ge('<div class="rounded-lg border border-gray-200 shadow-md bg-white p-6"><h3 class="text-xl font-semibold text-gray-900 mb-1">Realm Zones</h3> <p class="text-sm text-gray-500 mb-4"> </p> <div class="w-full h-80 rounded-lg overflow-hidden border border-gray-200 relative z-0"></div></div>'), il = /* @__PURE__ */ ge('<div class="flex flex-col items-center space-y-2"><img class="w-14 h-14 rounded-full ring-2 ring-gray-200 hover:ring-gray-300 transition-all duration-200"/> <span class="text-xs text-gray-600 text-center truncate w-full"> </span></div>'), sl = /* @__PURE__ */ ge('<div class="rounded-lg border border-gray-200 shadow-md bg-white p-6"><h3 class="text-lg font-semibold text-gray-900 mb-4">Latest Members</h3> <div class="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-4"></div></div>'), ll = /* @__PURE__ */ ge('<!> <div class="rounded-lg border border-gray-200 shadow-md bg-white p-5"><div class="flex items-center gap-3 mb-3"><div class="w-9 h-9 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0"><svg class="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg></div> <div><h3 class="text-lg font-semibold text-gray-900">Ask the AI Assistant</h3> <p class="text-xs text-gray-500">Get answers about this realm, its governance, and services</p></div></div> <form class="flex gap-2"><input type="text" placeholder="Ask anything about this realm..." class="flex-1 rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none"/> <button type="submit" class="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg> Ask</button></form></div> <!> <!>', 1), al = /* @__PURE__ */ ge('<div class="mt-px pt-20 space-y-4"><!></div>');
function ol(e, t) {
  Er(t, !0);
  let n = /* @__PURE__ */ q(null), r = /* @__PURE__ */ q(null), i = /* @__PURE__ */ q(nt([])), s = /* @__PURE__ */ q(nt([])), f = /* @__PURE__ */ q(!0), o = /* @__PURE__ */ q(""), a = /* @__PURE__ */ q(void 0);
  function u(w) {
    return w?.success && w?.data?.objectsListPaginated ? (w.data.objectsListPaginated.objects || []).map((S) => JSON.parse(S)) : [];
  }
  async function d() {
    U(f, !0);
    try {
      const w = t.ctx.backend, [S, $, R, G] = await Promise.all([
        w.status(),
        w.get_objects_paginated("Realm", 0, 1, "asc"),
        w.get_objects_paginated("Zone", 0, 200, "asc"),
        w.get_objects_paginated("User", 0, 8, "desc")
      ]);
      S?.success && S?.data?.status && U(n, S.data.status, !0);
      const N = u($);
      N.length > 0 && U(r, N[0], !0);
      const j = u(R);
      U(i, j.filter((L) => L.h3_index || L.latitude && L.longitude), !0), U(s, u(G), !0);
    } catch (w) {
      console.error("Error loading dashboard data:", w);
    }
    U(f, !1);
  }
  const _ = 3;
  async function v() {
    if (!p(a) || p(i).length === 0) return;
    const w = await import(
      /* @vite-ignore */
      "https://esm.sh/leaflet@1.9.4"
    ), { cellToBoundary: S, gridDisk: $ } = await import(
      /* @vite-ignore */
      "https://esm.sh/h3-js@4.2.1"
    ), R = w.map(p(a)).setView([20, 0], 2), G = w.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
      attribution: '&copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: "abcd",
      maxZoom: 19
    });
    G.on("tileerror", function() {
      R._fallbackTiles || (R._fallbackTiles = !0, R.removeLayer(G), w.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        maxZoom: 19
      }).addTo(R));
    }), G.addTo(R);
    const N = [], j = /* @__PURE__ */ new Set();
    for (const L of p(i)) {
      if (L.h3_index)
        try {
          const me = $(L.h3_index, _);
          for (const we of me) {
            if (j.has(we)) continue;
            j.add(we);
            const mt = S(we).map((se) => [se[0], se[1]]), C = we === L.h3_index, ie = C ? 0.45 : 0.15, ze = C ? 2 : 0.8;
            w.polygon(mt, {
              color: "#4338ca",
              weight: ze,
              fillColor: "#6366f1",
              fillOpacity: ie
            }).addTo(R), C && mt.forEach((se) => N.push(se));
          }
        } catch {
          L.latitude && L.longitude && N.push([Number(L.latitude), Number(L.longitude)]);
        }
      if (L.latitude && L.longitude) {
        const me = Number(L.latitude), we = Number(L.longitude);
        w.circleMarker([me, we], {
          radius: 14,
          fillColor: "#6366f1",
          color: "#6366f1",
          weight: 0,
          fillOpacity: 0.25
        }).addTo(R);
        const Zt = w.circleMarker([me, we], {
          radius: 8,
          fillColor: "#6366f1",
          color: "#fff",
          weight: 2,
          fillOpacity: 0.9
        }).addTo(R), mt = L.name || L.h3_index || "", C = L.description || "";
        Zt.bindPopup(`<strong>${mt}</strong>${C ? "<br/>" + C : ""}`), N.some((ie) => ie[0] === me && ie[1] === we) || N.push([me, we]);
      }
    }
    N.length > 0 && R.fitBounds(w.latLngBounds(N), { padding: [40, 40], maxZoom: 5 });
  }
  function h() {
    p(o).trim() && t.ctx.navigate(`/extensions/llm_chat?q=${encodeURIComponent(p(o).trim())}`);
  }
  let c = /* @__PURE__ */ xn(() => p(n) ? [
    {
      label: "Users",
      value: Number(p(n).users_count),
      color: "blue"
    },
    {
      label: "Organizations",
      value: Number(p(n).organizations_count),
      color: "purple"
    },
    {
      label: "Proposals",
      value: Number(p(n).proposals_count),
      color: "amber"
    },
    {
      label: "Votes",
      value: Number(p(n).votes_count),
      color: "green"
    },
    {
      label: "Transfers",
      value: Number(p(n).transfers_count),
      color: "rose"
    },
    {
      label: "Licenses",
      value: Number(p(n).licenses_count),
      color: "cyan"
    }
  ] : []);
  Zs(async () => {
    await d(), await ei(), await v();
  });
  var m = al();
  zs("fq8fhm", (w) => {
    var S = Ks();
    ae(w, S);
  });
  var y = z(m);
  {
    var M = (w) => {
      var S = Js();
      ae(w, S);
    }, T = (w) => {
      var S = ll(), $ = fs(S);
      {
        var R = (C) => {
          const ie = /* @__PURE__ */ xn(() => p(r).welcome_image ? p(r).welcome_image.split(".").pop() || "png" : ""), ze = /* @__PURE__ */ xn(() => p(r).welcome_image ? `/images/welcome.${p(ie)}` : "/images/default_welcome.jpg");
          var se = nl(), le = z(se), We = z(le), Ke = z(We), Wt = Z(Ke, 2), wn = z(Wt), Kt = Z(We, 2);
          {
            var ri = (Q) => {
              var Be = Xs(), Rt = z(Be);
              Xe(() => Qe(Rt, p(r).description)), ae(Q, Be);
            };
            et(Kt, (Q) => {
              p(r).description && Q(ri);
            });
          }
          var Zn = Z(Kt, 2);
          {
            var ii = (Q) => {
              var Be = Qs(), Rt = z(Be);
              Xe(() => Qe(Rt, p(r).welcome_message)), ae(Q, Be);
            };
            et(Zn, (Q) => {
              p(r).welcome_message && Q(ii);
            });
          }
          var si = Z(Zn, 2);
          {
            var li = (Q) => {
              var Be = tl();
              cr(Be, 21, () => p(c), fr, (Rt, Wn) => {
                var Kn = el(), Jn = z(Kn), ai = z(Jn), oi = Z(Jn, 2), fi = z(oi);
                Xe(
                  (ui) => {
                    Qe(ai, p(Wn).label), Qe(fi, ui);
                  },
                  [() => p(Wn).value.toLocaleString()]
                ), ae(Rt, Kn);
              }), ae(Q, Be);
            };
            et(si, (Q) => {
              p(c).length > 0 && Q(li);
            });
          }
          Xe(
            (Q) => {
              Hs(se, `background: linear-gradient(rgba(255,255,255,0.75), rgba(255,255,255,0.75)), url('${p(ze) ?? ""}') center/cover no-repeat;`), Ot(Ke, "src", Q), Ot(Ke, "alt", p(r).name || "Realm"), Qe(wn, p(r).name || "Realm");
            },
            [
              () => "/images/logo.png"
            ]
          ), ae(C, se);
        };
        et($, (C) => {
          p(r) && C(R);
        });
      }
      var G = Z($, 2), N = Z(z(G), 2), j = z(N), L = Z(j, 2), me = Z(G, 2);
      {
        var we = (C) => {
          var ie = rl(), ze = Z(z(ie), 2), se = z(ze), le = Z(ze, 2);
          Gs(le, (We) => U(a, We), () => p(a)), Xe(() => Qe(se, `${p(i).length ?? ""} zone${p(i).length !== 1 ? "s" : ""} in this realm`)), ae(C, ie);
        };
        et(me, (C) => {
          p(i).length > 0 && C(we);
        });
      }
      var Zt = Z(me, 2);
      {
        var mt = (C) => {
          var ie = sl(), ze = Z(z(ie), 2);
          cr(ze, 21, () => p(s), fr, (se, le) => {
            var We = il(), Ke = z(We), Wt = Z(Ke, 2), wn = z(Wt);
            Xe(
              (Kt) => {
                Ot(Ke, "src", `https://api.dicebear.com/9.x/glass/svg?seed=${p(le).name || p(le).id}`), Ot(Ke, "alt", p(le).name || p(le).id), Ot(Wt, "title", p(le).name || p(le).id), Qe(wn, Kt);
              },
              [() => p(le).name || p(le).id.substring(0, 8)]
            ), ae(se, We);
          }), ae(C, ie);
        };
        et(Zt, (C) => {
          p(s).length > 0 && C(mt);
        });
      }
      Xe((C) => L.disabled = C, [() => !p(o).trim()]), Ms("submit", N, (C) => {
        C.preventDefault(), h();
      }), $s(j, () => p(o), (C) => U(o, C)), ae(w, S);
    };
    et(y, (w) => {
      p(f) ? w(M) : w(T, -1);
    });
  }
  ae(e, m), kr();
}
function cl(e, t) {
  const n = Ls(ol, { target: e, props: { ctx: t } });
  return {
    unmount() {
      try {
        Ds(n);
      } catch {
      }
    }
  };
}
export {
  cl as default
};
