var mi = Object.defineProperty;
var ln = (e) => {
  throw TypeError(e);
};
var bi = (e, t, r) => t in e ? mi(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var ye = (e, t, r) => bi(e, typeof t != "symbol" ? t + "" : t, r), Ar = (e, t, r) => t.has(e) || ln("Cannot " + r);
var a = (e, t, r) => (Ar(e, t, "read from private field"), r ? r.call(e) : t.get(e)), m = (e, t, r) => t.has(e) ? ln("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), k = (e, t, r, n) => (Ar(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r), R = (e, t, r) => (Ar(e, t, "access private method"), r);
var xn = Array.isArray, wi = Array.prototype.indexOf, Rt = Array.prototype.includes, kr = Array.from, xi = Object.defineProperty, Ut = Object.getOwnPropertyDescriptor, yi = Object.prototype, ki = Array.prototype, Ei = Object.getPrototypeOf, an = Object.isExtensible;
const ji = () => {
};
function Si(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function yn() {
  var e, t, r = new Promise((n, i) => {
    e = n, t = i;
  });
  return { promise: r, resolve: e, reject: t };
}
const H = 2, Ct = 4, Er = 8, kn = 1 << 24, Oe = 16, Se = 32, Ze = 64, Fr = 128, he = 512, P = 1024, B = 2048, Fe = 4096, K = 8192, _e = 16384, mt = 32768, on = 1 << 25, Mt = 65536, Dr = 1 << 17, Ti = 1 << 18, Lt = 1 << 19, Ai = 1 << 20, He = 1 << 25, _t = 65536, gr = 1 << 21, Kt = 1 << 22, We = 1 << 23, Nr = Symbol("$state"), ze = new class extends Error {
  constructor() {
    super(...arguments);
    ye(this, "name", "StaleReactionError");
    ye(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
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
function Mi() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Oi(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Fi() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Di() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Li() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Pi() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function zi() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
const Ii = 1, qi = 2, Vi = 16, Bi = 1, Hi = 2, q = Symbol(), Ui = "http://www.w3.org/1999/xhtml";
function Yi() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function Gi() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function En(e) {
  return e === this.v;
}
function Ki(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function jn(e) {
  return !Ki(e, this.v);
}
let ge = null;
function Ot(e) {
  ge = e;
}
function Sn(e, t = !1, r) {
  ge = {
    p: ge,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    r: (
      /** @type {Effect} */
      S
    ),
    l: null
  };
}
function Tn(e) {
  var t = (
    /** @type {ComponentContext} */
    ge
  ), r = t.e;
  if (r !== null) {
    t.e = null;
    for (var n of r)
      Jn(n);
  }
  return t.i = !0, ge = t.p, /** @type {T} */
  {};
}
function An() {
  return !0;
}
let it = [];
function Nn() {
  var e = it;
  it = [], Si(e);
}
function Et(e) {
  if (it.length === 0 && !Yt) {
    var t = it;
    queueMicrotask(() => {
      t === it && Nn();
    });
  }
  it.push(e);
}
function Ji() {
  for (; it.length > 0; )
    Nn();
}
function Rn(e) {
  var t = S;
  if (t === null)
    return j.f |= We, e;
  if ((t.f & mt) === 0 && (t.f & Ct) === 0)
    throw e;
  Je(e, t);
}
function Je(e, t) {
  for (; t !== null; ) {
    if ((t.f & Fr) !== 0) {
      if ((t.f & mt) === 0)
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
const Wi = -7169;
function F(e, t) {
  e.f = e.f & Wi | t;
}
function Kr(e) {
  (e.f & he) !== 0 || e.deps === null ? F(e, P) : F(e, Fe);
}
function Cn(e) {
  if (e !== null)
    for (const t of e)
      (t.f & H) === 0 || (t.f & _t) === 0 || (t.f ^= _t, Cn(
        /** @type {Derived} */
        t.deps
      ));
}
function Mn(e, t, r) {
  (e.f & B) !== 0 ? t.add(e) : (e.f & Fe) !== 0 && r.add(e), Cn(e.deps), F(e, P);
}
const nt = /* @__PURE__ */ new Set();
let y = null, Ee = null, Lr = null, Yt = !1, Rr = !1, yt = null, ur = null;
var fn = 0;
let Xi = 1;
var jt, St, at, Ie, Re, Wt, ie, Xt, Ge, qe, Ce, Tt, At, ot, D, cr, On, vr, Pr, dr, Zi;
const wr = class wr {
  constructor() {
    m(this, D);
    ye(this, "id", Xi++);
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
    m(this, jt, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    m(this, St, /* @__PURE__ */ new Set());
    /**
     * Callbacks that should run only when a fork is committed.
     * @type {Set<(batch: Batch) => void>}
     */
    m(this, at, /* @__PURE__ */ new Set());
    /**
     * Async effects that are currently in flight
     * @type {Map<Effect, number>}
     */
    m(this, Ie, /* @__PURE__ */ new Map());
    /**
     * Async effects that are currently in flight, _not_ inside a pending boundary
     * @type {Map<Effect, number>}
     */
    m(this, Re, /* @__PURE__ */ new Map());
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    m(this, Wt, null);
    /**
     * The root effects that need to be flushed
     * @type {Effect[]}
     */
    m(this, ie, []);
    /**
     * Effects created while this batch was active.
     * @type {Effect[]}
     */
    m(this, Xt, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    m(this, Ge, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    m(this, qe, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    m(this, Ce, /* @__PURE__ */ new Map());
    /**
     * Inverse of #skipped_branches which we need to tell prior batches to unskip them when committing
     * @type {Set<Effect>}
     */
    m(this, Tt, /* @__PURE__ */ new Set());
    ye(this, "is_fork", !1);
    m(this, At, !1);
    /** @type {Set<Batch>} */
    m(this, ot, /* @__PURE__ */ new Set());
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(t) {
    a(this, Ce).has(t) || a(this, Ce).set(t, { d: [], m: [] }), a(this, Tt).delete(t);
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   * @param {(e: Effect) => void} callback
   */
  unskip_effect(t, r = (n) => this.schedule(n)) {
    var n = a(this, Ce).get(t);
    if (n) {
      a(this, Ce).delete(t);
      for (var i of n.d)
        F(i, B), r(i);
      for (i of n.m)
        F(i, Fe), r(i);
    }
    a(this, Tt).add(t);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Value} source
   * @param {any} value
   * @param {boolean} [is_derived]
   */
  capture(t, r, n = !1) {
    t.v !== q && !this.previous.has(t) && this.previous.set(t, t.v), (t.f & We) === 0 && (this.current.set(t, [r, n]), Ee?.set(t, r)), this.is_fork || (t.v = r);
  }
  activate() {
    y = this;
  }
  deactivate() {
    y = null, Ee = null;
  }
  flush() {
    try {
      Rr = !0, y = this, R(this, D, vr).call(this);
    } finally {
      fn = 0, Lr = null, yt = null, ur = null, Rr = !1, y = null, Ee = null, vt.clear();
    }
  }
  discard() {
    for (const t of a(this, St)) t(this);
    a(this, St).clear(), a(this, at).clear(), nt.delete(this);
  }
  /**
   * @param {Effect} effect
   */
  register_created_effect(t) {
    a(this, Xt).push(t);
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  increment(t, r) {
    let n = a(this, Ie).get(r) ?? 0;
    if (a(this, Ie).set(r, n + 1), t) {
      let i = a(this, Re).get(r) ?? 0;
      a(this, Re).set(r, i + 1);
    }
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   * @param {boolean} skip - whether to skip updates (because this is triggered by a stale reaction)
   */
  decrement(t, r, n) {
    let i = a(this, Ie).get(r) ?? 0;
    if (i === 1 ? a(this, Ie).delete(r) : a(this, Ie).set(r, i - 1), t) {
      let s = a(this, Re).get(r) ?? 0;
      s === 1 ? a(this, Re).delete(r) : a(this, Re).set(r, s - 1);
    }
    a(this, At) || n || (k(this, At, !0), Et(() => {
      k(this, At, !1), this.flush();
    }));
  }
  /**
   * @param {Set<Effect>} dirty_effects
   * @param {Set<Effect>} maybe_dirty_effects
   */
  transfer_effects(t, r) {
    for (const n of t)
      a(this, Ge).add(n);
    for (const n of r)
      a(this, qe).add(n);
    t.clear(), r.clear();
  }
  /** @param {(batch: Batch) => void} fn */
  oncommit(t) {
    a(this, jt).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    a(this, St).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  on_fork_commit(t) {
    a(this, at).add(t);
  }
  run_fork_commit_callbacks() {
    for (const t of a(this, at)) t(this);
    a(this, at).clear();
  }
  settled() {
    return (a(this, Wt) ?? k(this, Wt, yn())).promise;
  }
  static ensure() {
    if (y === null) {
      const t = y = new wr();
      Rr || (nt.add(y), Yt || Et(() => {
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
    if (Lr = t, t.b?.is_pending && (t.f & (Ct | Er | kn)) !== 0 && (t.f & mt) === 0) {
      t.b.defer_effect(t);
      return;
    }
    for (var r = t; r.parent !== null; ) {
      r = r.parent;
      var n = r.f;
      if (yt !== null && r === S && (j === null || (j.f & H) === 0))
        return;
      if ((n & (Ze | Se)) !== 0) {
        if ((n & P) === 0)
          return;
        r.f ^= P;
      }
    }
    a(this, ie).push(r);
  }
};
jt = new WeakMap(), St = new WeakMap(), at = new WeakMap(), Ie = new WeakMap(), Re = new WeakMap(), Wt = new WeakMap(), ie = new WeakMap(), Xt = new WeakMap(), Ge = new WeakMap(), qe = new WeakMap(), Ce = new WeakMap(), Tt = new WeakMap(), At = new WeakMap(), ot = new WeakMap(), D = new WeakSet(), cr = function() {
  return this.is_fork || a(this, Re).size > 0;
}, On = function() {
  for (const n of a(this, ot))
    for (const i of a(n, Re).keys()) {
      for (var t = !1, r = i; r.parent !== null; ) {
        if (a(this, Ce).has(r)) {
          t = !0;
          break;
        }
        r = r.parent;
      }
      if (!t)
        return !0;
    }
  return !1;
}, vr = function() {
  var o;
  if (fn++ > 1e3 && (nt.delete(this), $i()), !R(this, D, cr).call(this)) {
    for (const l of a(this, Ge))
      a(this, qe).delete(l), F(l, B), this.schedule(l);
    for (const l of a(this, qe))
      F(l, Fe), this.schedule(l);
  }
  const t = a(this, ie);
  k(this, ie, []), this.apply();
  var r = yt = [], n = [], i = ur = [];
  for (const l of t)
    try {
      R(this, D, Pr).call(this, l, r, n);
    } catch (u) {
      throw Ln(l), u;
    }
  if (y = null, i.length > 0) {
    var s = wr.ensure();
    for (const l of i)
      s.schedule(l);
  }
  if (yt = null, ur = null, R(this, D, cr).call(this) || R(this, D, On).call(this)) {
    R(this, D, dr).call(this, n), R(this, D, dr).call(this, r);
    for (const [l, u] of a(this, Ce))
      Dn(l, u);
  } else {
    a(this, Ie).size === 0 && nt.delete(this), a(this, Ge).clear(), a(this, qe).clear();
    for (const l of a(this, jt)) l(this);
    a(this, jt).clear(), un(n), un(r), a(this, Wt)?.resolve();
  }
  var f = (
    /** @type {Batch | null} */
    /** @type {unknown} */
    y
  );
  if (a(this, ie).length > 0) {
    const l = f ?? (f = this);
    a(l, ie).push(...a(this, ie).filter((u) => !a(l, ie).includes(u)));
  }
  f !== null && (nt.add(f), R(o = f, D, vr).call(o));
}, /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
Pr = function(t, r, n) {
  t.f ^= P;
  for (var i = t.first; i !== null; ) {
    var s = i.f, f = (s & (Se | Ze)) !== 0, o = f && (s & P) !== 0, l = o || (s & K) !== 0 || a(this, Ce).has(i);
    if (!l && i.fn !== null) {
      f ? i.f ^= P : (s & Ct) !== 0 ? r.push(i) : rr(i) && ((s & Oe) !== 0 && a(this, qe).add(i), Dt(i));
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
dr = function(t) {
  for (var r = 0; r < t.length; r += 1)
    Mn(t[r], a(this, Ge), a(this, qe));
}, Zi = function() {
  var d, _, h;
  for (const v of nt) {
    var t = v.id < this.id, r = [];
    for (const [c, [b, w]] of this.current) {
      if (v.current.has(c)) {
        var n = (
          /** @type {[any, boolean]} */
          v.current.get(c)[0]
        );
        if (t && b !== n)
          v.current.set(c, [b, w]);
        else
          continue;
      }
      r.push(c);
    }
    var i = [...v.current.keys()].filter((c) => !this.current.has(c));
    if (i.length === 0)
      t && v.discard();
    else if (r.length > 0) {
      if (t)
        for (const c of a(this, Tt))
          v.unskip_effect(c, (b) => {
            var w;
            (b.f & (Oe | Kt)) !== 0 ? v.schedule(b) : R(w = v, D, dr).call(w, [b]);
          });
      v.activate();
      var s = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Map();
      for (var o of r)
        Fn(o, i, s, f);
      f = /* @__PURE__ */ new Map();
      var l = [...v.current.keys()].filter(
        (c) => this.current.has(c) ? (
          /** @type {[any, boolean]} */
          this.current.get(c)[0] !== c
        ) : !0
      );
      for (const c of a(this, Xt))
        (c.f & (_e | K | Dr)) === 0 && Jr(c, l, f) && ((c.f & (Kt | Oe)) !== 0 ? (F(c, B), v.schedule(c)) : a(v, Ge).add(c));
      if (a(v, ie).length > 0) {
        v.apply();
        for (var u of a(v, ie))
          R(d = v, D, Pr).call(d, u, [], []);
        k(v, ie, []);
      }
      v.deactivate();
    }
  }
  for (const v of nt)
    a(v, ot).has(this) && (a(v, ot).delete(this), a(v, ot).size === 0 && !R(_ = v, D, cr).call(_) && (v.activate(), R(h = v, D, vr).call(h)));
};
let pt = wr;
function Qi(e) {
  var t = Yt;
  Yt = !0;
  try {
    for (var r; ; ) {
      if (Ji(), y === null)
        return (
          /** @type {T} */
          r
        );
      y.flush();
    }
  } finally {
    Yt = t;
  }
}
function $i() {
  try {
    Fi();
  } catch (e) {
    Je(e, Lr);
  }
}
let Pe = null;
function un(e) {
  var t = e.length;
  if (t !== 0) {
    for (var r = 0; r < t; ) {
      var n = e[r++];
      if ((n.f & (_e | K)) === 0 && rr(n) && (Pe = /* @__PURE__ */ new Set(), Dt(n), n.deps === null && n.first === null && n.nodes === null && n.teardown === null && n.ac === null && Zn(n), Pe?.size > 0)) {
        vt.clear();
        for (const i of Pe) {
          if ((i.f & (_e | K)) !== 0) continue;
          const s = [i];
          let f = i.parent;
          for (; f !== null; )
            Pe.has(f) && (Pe.delete(f), s.push(f)), f = f.parent;
          for (let o = s.length - 1; o >= 0; o--) {
            const l = s[o];
            (l.f & (_e | K)) === 0 && Dt(l);
          }
        }
        Pe.clear();
      }
    }
    Pe = null;
  }
}
function Fn(e, t, r, n) {
  if (!r.has(e) && (r.add(e), e.reactions !== null))
    for (const i of e.reactions) {
      const s = i.f;
      (s & H) !== 0 ? Fn(
        /** @type {Derived} */
        i,
        t,
        r,
        n
      ) : (s & (Kt | Oe)) !== 0 && (s & B) === 0 && Jr(i, t, n) && (F(i, B), Wr(
        /** @type {Effect} */
        i
      ));
    }
}
function Jr(e, t, r) {
  const n = r.get(e);
  if (n !== void 0) return n;
  if (e.deps !== null)
    for (const i of e.deps) {
      if (Rt.call(t, i))
        return !0;
      if ((i.f & H) !== 0 && Jr(
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
function Wr(e) {
  y.schedule(e);
}
function Dn(e, t) {
  if (!((e.f & Se) !== 0 && (e.f & P) !== 0)) {
    (e.f & B) !== 0 ? t.d.push(e) : (e.f & Fe) !== 0 && t.m.push(e), F(e, P);
    for (var r = e.first; r !== null; )
      Dn(r, t), r = r.next;
  }
}
function Ln(e) {
  F(e, P);
  for (var t = e.first; t !== null; )
    Ln(t), t = t.next;
}
function es(e) {
  let t = 0, r = gt(0), n;
  return () => {
    Qr() && (p(r), Wn(() => (t === 0 && (n = li(() => e(() => Gt(r)))), t += 1, () => {
      Et(() => {
        t -= 1, t === 0 && (n?.(), n = void 0, Gt(r));
      });
    })));
  };
}
var ts = Mt | Lt;
function rs(e, t, r, n) {
  new ns(e, t, r, n);
}
var ue, Gr, ce, ft, Z, ve, G, se, Ve, ut, Ke, Nt, Zt, Qt, Be, xr, O, is, ss, ls, zr, hr, _r, Ir, qr;
class ns {
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
    m(this, ue);
    /** @type {TemplateNode | null} */
    m(this, Gr, null);
    /** @type {BoundaryProps} */
    m(this, ce);
    /** @type {((anchor: Node) => void)} */
    m(this, ft);
    /** @type {Effect} */
    m(this, Z);
    /** @type {Effect | null} */
    m(this, ve, null);
    /** @type {Effect | null} */
    m(this, G, null);
    /** @type {Effect | null} */
    m(this, se, null);
    /** @type {DocumentFragment | null} */
    m(this, Ve, null);
    m(this, ut, 0);
    m(this, Ke, 0);
    m(this, Nt, !1);
    /** @type {Set<Effect>} */
    m(this, Zt, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    m(this, Qt, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    m(this, Be, null);
    m(this, xr, es(() => (k(this, Be, gt(a(this, ut))), () => {
      k(this, Be, null);
    })));
    k(this, ue, t), k(this, ce, r), k(this, ft, (s) => {
      var f = (
        /** @type {Effect} */
        S
      );
      f.b = this, f.f |= Fr, n(s);
    }), this.parent = /** @type {Effect} */
    S.b, this.transform_error = i ?? this.parent?.transform_error ?? ((s) => s), k(this, Z, $r(() => {
      R(this, O, zr).call(this);
    }, ts));
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    Mn(t, a(this, Zt), a(this, Qt));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!a(this, ce).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  update_pending_count(t, r) {
    R(this, O, Ir).call(this, t, r), k(this, ut, a(this, ut) + t), !(!a(this, Be) || a(this, Nt)) && (k(this, Nt, !0), Et(() => {
      k(this, Nt, !1), a(this, Be) && Ft(a(this, Be), a(this, ut));
    }));
  }
  get_effect_pending() {
    return a(this, xr).call(this), p(
      /** @type {Source<number>} */
      a(this, Be)
    );
  }
  /** @param {unknown} error */
  error(t) {
    if (!a(this, ce).onerror && !a(this, ce).failed)
      throw t;
    y?.is_fork ? (a(this, ve) && y.skip_effect(a(this, ve)), a(this, G) && y.skip_effect(a(this, G)), a(this, se) && y.skip_effect(a(this, se)), y.on_fork_commit(() => {
      R(this, O, qr).call(this, t);
    })) : R(this, O, qr).call(this, t);
  }
}
ue = new WeakMap(), Gr = new WeakMap(), ce = new WeakMap(), ft = new WeakMap(), Z = new WeakMap(), ve = new WeakMap(), G = new WeakMap(), se = new WeakMap(), Ve = new WeakMap(), ut = new WeakMap(), Ke = new WeakMap(), Nt = new WeakMap(), Zt = new WeakMap(), Qt = new WeakMap(), Be = new WeakMap(), xr = new WeakMap(), O = new WeakSet(), is = function() {
  try {
    k(this, ve, de(() => a(this, ft).call(this, a(this, ue))));
  } catch (t) {
    this.error(t);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
ss = function(t) {
  const r = a(this, ce).failed;
  r && k(this, se, de(() => {
    r(
      a(this, ue),
      () => t,
      () => () => {
      }
    );
  }));
}, ls = function() {
  const t = a(this, ce).pending;
  t && (this.is_pending = !0, k(this, G, de(() => t(a(this, ue)))), Et(() => {
    var r = k(this, Ve, document.createDocumentFragment()), n = Xe();
    r.append(n), k(this, ve, R(this, O, _r).call(this, () => de(() => a(this, ft).call(this, n)))), a(this, Ke) === 0 && (a(this, ue).before(r), k(this, Ve, null), dt(
      /** @type {Effect} */
      a(this, G),
      () => {
        k(this, G, null);
      }
    ), R(this, O, hr).call(
      this,
      /** @type {Batch} */
      y
    ));
  }));
}, zr = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), k(this, Ke, 0), k(this, ut, 0), k(this, ve, de(() => {
      a(this, ft).call(this, a(this, ue));
    })), a(this, Ke) > 0) {
      var t = k(this, Ve, document.createDocumentFragment());
      rn(a(this, ve), t);
      const r = (
        /** @type {(anchor: Node) => void} */
        a(this, ce).pending
      );
      k(this, G, de(() => r(a(this, ue))));
    } else
      R(this, O, hr).call(
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
hr = function(t) {
  this.is_pending = !1, t.transfer_effects(a(this, Zt), a(this, Qt));
}, /**
 * @template T
 * @param {() => T} fn
 */
_r = function(t) {
  var r = S, n = j, i = ge;
  De(a(this, Z)), me(a(this, Z)), Ot(a(this, Z).ctx);
  try {
    return pt.ensure(), t();
  } catch (s) {
    return Rn(s), null;
  } finally {
    De(r), me(n), Ot(i);
  }
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 * @param {Batch} batch
 */
Ir = function(t, r) {
  var n;
  if (!this.has_pending_snippet()) {
    this.parent && R(n = this.parent, O, Ir).call(n, t, r);
    return;
  }
  k(this, Ke, a(this, Ke) + t), a(this, Ke) === 0 && (R(this, O, hr).call(this, r), a(this, G) && dt(a(this, G), () => {
    k(this, G, null);
  }), a(this, Ve) && (a(this, ue).before(a(this, Ve)), k(this, Ve, null)));
}, /**
 * @param {unknown} error
 */
qr = function(t) {
  a(this, ve) && ($(a(this, ve)), k(this, ve, null)), a(this, G) && ($(a(this, G)), k(this, G, null)), a(this, se) && ($(a(this, se)), k(this, se, null));
  var r = a(this, ce).onerror;
  let n = a(this, ce).failed;
  var i = !1, s = !1;
  const f = () => {
    if (i) {
      Gi();
      return;
    }
    i = !0, s && zi(), a(this, se) !== null && dt(a(this, se), () => {
      k(this, se, null);
    }), R(this, O, _r).call(this, () => {
      R(this, O, zr).call(this);
    });
  }, o = (l) => {
    try {
      s = !0, r?.(l, f), s = !1;
    } catch (u) {
      Je(u, a(this, Z) && a(this, Z).parent);
    }
    n && k(this, se, R(this, O, _r).call(this, () => {
      try {
        return de(() => {
          var u = (
            /** @type {Effect} */
            S
          );
          u.b = this, u.f |= Fr, n(
            a(this, ue),
            () => l,
            () => f
          );
        });
      } catch (u) {
        return Je(
          u,
          /** @type {Effect} */
          a(this, Z).parent
        ), null;
      }
    }));
  };
  Et(() => {
    var l;
    try {
      l = this.transform_error(t);
    } catch (u) {
      Je(u, a(this, Z) && a(this, Z).parent);
      return;
    }
    l !== null && typeof l == "object" && typeof /** @type {any} */
    l.then == "function" ? l.then(
      o,
      /** @param {unknown} e */
      (u) => Je(u, a(this, Z) && a(this, Z).parent)
    ) : o(l);
  });
};
function as(e, t, r, n) {
  const i = zn;
  var s = e.filter((h) => !h.settled);
  if (r.length === 0 && s.length === 0) {
    n(t.map(i));
    return;
  }
  var f = (
    /** @type {Effect} */
    S
  ), o = os(), l = s.length === 1 ? s[0].promise : s.length > 1 ? Promise.all(s.map((h) => h.promise)) : null;
  function u(h) {
    o();
    try {
      n(h);
    } catch (v) {
      (f.f & _e) === 0 && Je(v, f);
    }
    mr();
  }
  if (r.length === 0) {
    l.then(() => u(t.map(i)));
    return;
  }
  var d = Pn();
  function _() {
    Promise.all(r.map((h) => /* @__PURE__ */ fs(h))).then((h) => u([...t.map(i), ...h])).catch((h) => Je(h, f)).finally(() => d());
  }
  l ? l.then(() => {
    o(), _(), mr();
  }) : _();
}
function os() {
  var e = (
    /** @type {Effect} */
    S
  ), t = j, r = ge, n = (
    /** @type {Batch} */
    y
  );
  return function(s = !0) {
    De(e), me(t), Ot(r), s && (e.f & _e) === 0 && (n?.activate(), n?.apply());
  };
}
function mr(e = !0) {
  De(null), me(null), Ot(null), e && y?.deactivate();
}
function Pn() {
  var e = (
    /** @type {Effect} */
    S
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
function zn(e) {
  var t = H | B;
  return S !== null && (S.f |= Lt), {
    ctx: ge,
    deps: null,
    effects: null,
    equals: En,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      q
    ),
    wv: 0,
    parent: S,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function fs(e, t, r) {
  let n = (
    /** @type {Effect | null} */
    S
  );
  n === null && Ni();
  var i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), s = gt(
    /** @type {V} */
    q
  ), f = !j, o = /* @__PURE__ */ new Map();
  return js(() => {
    var l = (
      /** @type {Effect} */
      S
    ), u = yn();
    i = u.promise;
    try {
      Promise.resolve(e()).then(u.resolve, u.reject).finally(mr);
    } catch (v) {
      u.reject(v), mr();
    }
    var d = (
      /** @type {Batch} */
      y
    );
    if (f) {
      if ((l.f & mt) !== 0)
        var _ = Pn();
      if (
        /** @type {Boundary} */
        n.b.is_rendered()
      )
        o.get(d)?.reject(ze), o.delete(d);
      else {
        for (const v of o.values())
          v.reject(ze);
        o.clear();
      }
      o.set(d, u);
    }
    const h = (v, c = void 0) => {
      if (_) {
        var b = c === ze;
        _(b);
      }
      if (!(c === ze || (l.f & _e) !== 0)) {
        if (d.activate(), c)
          s.f |= We, Ft(s, c);
        else {
          (s.f & We) !== 0 && (s.f ^= We), Ft(s, v);
          for (const [w, C] of o) {
            if (o.delete(w), w === d) break;
            C.reject(ze);
          }
        }
        d.deactivate();
      }
    };
    u.promise.then(h, (v) => h(null, v || "unknown"));
  }), xs(() => {
    for (const l of o.values())
      l.reject(ze);
  }), new Promise((l) => {
    function u(d) {
      function _() {
        d === i ? l(s) : u(i);
      }
      d.then(_, _);
    }
    u(i);
  });
}
// @__NO_SIDE_EFFECTS__
function us(e) {
  const t = /* @__PURE__ */ zn(e);
  return t.equals = jn, t;
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
function Xr(e) {
  var t, r = S, n = e.parent;
  if (!Qe && n !== null && (n.f & (_e | K)) !== 0)
    return Yi(), e.v;
  De(n);
  try {
    e.f &= ~_t, cs(e), t = ni(e);
  } finally {
    De(r);
  }
  return t;
}
function In(e) {
  var t = Xr(e);
  if (!e.equals(t) && (e.wv = ti(), (!y?.is_fork || e.deps === null) && (y !== null ? y.capture(e, t, !0) : e.v = t, e.deps === null))) {
    F(e, P);
    return;
  }
  Qe || (Ee !== null ? (Qr() || y?.is_fork) && Ee.set(e, t) : Kr(e));
}
function vs(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      (t.teardown || t.ac) && (t.teardown?.(), t.ac?.abort(ze), t.teardown = ji, t.ac = null, Jt(t, 0), en(t));
}
function qn(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      t.teardown && Dt(t);
}
let Vr = /* @__PURE__ */ new Set();
const vt = /* @__PURE__ */ new Map();
let Vn = !1;
function gt(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: En,
    rv: 0,
    wv: 0
  };
  return r;
}
// @__NO_SIDE_EFFECTS__
function L(e, t) {
  const r = gt(e);
  return As(r), r;
}
// @__NO_SIDE_EFFECTS__
function ds(e, t = !1, r = !0) {
  const n = gt(e);
  return t || (n.equals = jn), n;
}
function A(e, t, r = !1) {
  j !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!je || (j.f & Dr) !== 0) && An() && (j.f & (H | Oe | Kt | Dr)) !== 0 && (pe === null || !Rt.call(pe, e)) && Pi();
  let n = r ? kt(t) : t;
  return Ft(e, n, ur);
}
function Ft(e, t, r = null) {
  if (!e.equals(t)) {
    vt.set(e, Qe ? t : e.v);
    var n = pt.ensure();
    if (n.capture(e, t), (e.f & H) !== 0) {
      const i = (
        /** @type {Derived} */
        e
      );
      (e.f & B) !== 0 && Xr(i), Ee === null && Kr(i);
    }
    e.wv = ti(), Bn(e, B, r), S !== null && (S.f & P) !== 0 && (S.f & (Se | Ze)) === 0 && (fe === null ? Ns([e]) : fe.push(e)), !n.is_fork && Vr.size > 0 && !Vn && hs();
  }
  return t;
}
function hs() {
  Vn = !1;
  for (const e of Vr)
    (e.f & P) !== 0 && F(e, Fe), rr(e) && Dt(e);
  Vr.clear();
}
function Gt(e) {
  A(e, e.v + 1);
}
function Bn(e, t, r) {
  var n = e.reactions;
  if (n !== null)
    for (var i = n.length, s = 0; s < i; s++) {
      var f = n[s], o = f.f, l = (o & B) === 0;
      if (l && F(f, t), (o & H) !== 0) {
        var u = (
          /** @type {Derived} */
          f
        );
        Ee?.delete(u), (o & _t) === 0 && (o & he && (S === null || (S.f & gr) === 0) && (f.f |= _t), Bn(u, Fe, r));
      } else if (l) {
        var d = (
          /** @type {Effect} */
          f
        );
        (o & Oe) !== 0 && Pe !== null && Pe.add(d), r !== null ? r.push(d) : Wr(d);
      }
    }
}
function kt(e) {
  if (typeof e != "object" || e === null || Nr in e)
    return e;
  const t = Ei(e);
  if (t !== yi && t !== ki)
    return e;
  var r = /* @__PURE__ */ new Map(), n = xn(e), i = /* @__PURE__ */ L(0), s = ht, f = (o) => {
    if (ht === s)
      return o();
    var l = j, u = ht;
    me(null), hn(s);
    var d = o();
    return me(l), hn(u), d;
  };
  return n && r.set("length", /* @__PURE__ */ L(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(o, l, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && Di();
        var d = r.get(l);
        return d === void 0 ? f(() => {
          var _ = /* @__PURE__ */ L(u.value);
          return r.set(l, _), _;
        }) : A(d, u.value, !0), !0;
      },
      deleteProperty(o, l) {
        var u = r.get(l);
        if (u === void 0) {
          if (l in o) {
            const d = f(() => /* @__PURE__ */ L(q));
            r.set(l, d), Gt(i);
          }
        } else
          A(u, q), Gt(i);
        return !0;
      },
      get(o, l, u) {
        if (l === Nr)
          return e;
        var d = r.get(l), _ = l in o;
        if (d === void 0 && (!_ || Ut(o, l)?.writable) && (d = f(() => {
          var v = kt(_ ? o[l] : q), c = /* @__PURE__ */ L(v);
          return c;
        }), r.set(l, d)), d !== void 0) {
          var h = p(d);
          return h === q ? void 0 : h;
        }
        return Reflect.get(o, l, u);
      },
      getOwnPropertyDescriptor(o, l) {
        var u = Reflect.getOwnPropertyDescriptor(o, l);
        if (u && "value" in u) {
          var d = r.get(l);
          d && (u.value = p(d));
        } else if (u === void 0) {
          var _ = r.get(l), h = _?.v;
          if (_ !== void 0 && h !== q)
            return {
              enumerable: !0,
              configurable: !0,
              value: h,
              writable: !0
            };
        }
        return u;
      },
      has(o, l) {
        if (l === Nr)
          return !0;
        var u = r.get(l), d = u !== void 0 && u.v !== q || Reflect.has(o, l);
        if (u !== void 0 || S !== null && (!d || Ut(o, l)?.writable)) {
          u === void 0 && (u = f(() => {
            var h = d ? kt(o[l]) : q, v = /* @__PURE__ */ L(h);
            return v;
          }), r.set(l, u));
          var _ = p(u);
          if (_ === q)
            return !1;
        }
        return d;
      },
      set(o, l, u, d) {
        var _ = r.get(l), h = l in o;
        if (n && l === "length")
          for (var v = u; v < /** @type {Source<number>} */
          _.v; v += 1) {
            var c = r.get(v + "");
            c !== void 0 ? A(c, q) : v in o && (c = f(() => /* @__PURE__ */ L(q)), r.set(v + "", c));
          }
        if (_ === void 0)
          (!h || Ut(o, l)?.writable) && (_ = f(() => /* @__PURE__ */ L(void 0)), A(_, kt(u)), r.set(l, _));
        else {
          h = _.v !== q;
          var b = f(() => kt(u));
          A(_, b);
        }
        var w = Reflect.getOwnPropertyDescriptor(o, l);
        if (w?.set && w.set.call(d, u), !h) {
          if (n && typeof l == "string") {
            var C = (
              /** @type {Source<number>} */
              r.get("length")
            ), T = Number(l);
            Number.isInteger(T) && T >= C.v && A(C, T + 1);
          }
          Gt(i);
        }
        return !0;
      },
      ownKeys(o) {
        p(i);
        var l = Reflect.ownKeys(o).filter((_) => {
          var h = r.get(_);
          return h === void 0 || h.v !== q;
        });
        for (var [u, d] of r)
          d.v !== q && !(u in o) && l.push(u);
        return l;
      },
      setPrototypeOf() {
        Li();
      }
    }
  );
}
var cn, Hn, Un, Yn;
function _s() {
  if (cn === void 0) {
    cn = window, Hn = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, r = Text.prototype;
    Un = Ut(t, "firstChild").get, Yn = Ut(t, "nextSibling").get, an(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), an(r) && (r.__t = void 0);
  }
}
function Xe(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function br(e) {
  return (
    /** @type {TemplateNode | null} */
    Un.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function tr(e) {
  return (
    /** @type {TemplateNode | null} */
    Yn.call(e)
  );
}
function x(e, t) {
  return /* @__PURE__ */ br(e);
}
function Cr(e, t = !1) {
  {
    var r = /* @__PURE__ */ br(e);
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ tr(r) : r;
  }
}
function E(e, t = 1, r = !1) {
  let n = e;
  for (; t--; )
    n = /** @type {TemplateNode} */
    /* @__PURE__ */ tr(n);
  return n;
}
function ps(e) {
  e.textContent = "";
}
function Gn() {
  return !1;
}
function Kn(e, t, r) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElementNS(Ui, e, void 0)
  );
}
let vn = !1;
function gs() {
  vn || (vn = !0, document.addEventListener(
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
function Zr(e) {
  var t = j, r = S;
  me(null), De(null);
  try {
    return e();
  } finally {
    me(t), De(r);
  }
}
function ms(e, t, r, n = r) {
  e.addEventListener(t, () => Zr(r));
  const i = e.__on_r;
  i ? e.__on_r = () => {
    i(), n(!0);
  } : e.__on_r = () => n(!0), gs();
}
function bs(e) {
  S === null && (j === null && Oi(), Mi()), Qe && Ci();
}
function ws(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function Ue(e, t) {
  var r = S;
  r !== null && (r.f & K) !== 0 && (e |= K);
  var n = {
    ctx: ge,
    deps: null,
    nodes: null,
    f: e | B | he,
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
  if ((e & Ct) !== 0)
    yt !== null ? yt.push(n) : pt.ensure().schedule(n);
  else if (t !== null) {
    try {
      Dt(n);
    } catch (f) {
      throw $(n), f;
    }
    i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && // either `null`, or a singular child
    (i.f & Lt) === 0 && (i = i.first, (e & Oe) !== 0 && (e & Mt) !== 0 && i !== null && (i.f |= Mt));
  }
  if (i !== null && (i.parent = r, r !== null && ws(i, r), j !== null && (j.f & H) !== 0 && (e & Ze) === 0)) {
    var s = (
      /** @type {Derived} */
      j
    );
    (s.effects ?? (s.effects = [])).push(i);
  }
  return n;
}
function Qr() {
  return j !== null && !je;
}
function xs(e) {
  const t = Ue(Er, null);
  return F(t, P), t.teardown = e, t;
}
function ys(e) {
  bs();
  var t = (
    /** @type {Effect} */
    S.f
  ), r = !j && (t & Se) !== 0 && (t & mt) === 0;
  if (r) {
    var n = (
      /** @type {ComponentContext} */
      ge
    );
    (n.e ?? (n.e = [])).push(e);
  } else
    return Jn(e);
}
function Jn(e) {
  return Ue(Ct | Ai, e);
}
function ks(e) {
  pt.ensure();
  const t = Ue(Ze | Lt, e);
  return (r = {}) => new Promise((n) => {
    r.outro ? dt(t, () => {
      $(t), n(void 0);
    }) : ($(t), n(void 0));
  });
}
function Es(e) {
  return Ue(Ct, e);
}
function js(e) {
  return Ue(Kt | Lt, e);
}
function Wn(e, t = 0) {
  return Ue(Er | t, e);
}
function X(e, t = [], r = [], n = []) {
  as(n, t, r, (i) => {
    Ue(Er, () => e(...i.map(p)));
  });
}
function $r(e, t = 0) {
  var r = Ue(Oe | t, e);
  return r;
}
function de(e) {
  return Ue(Se | Lt, e);
}
function Xn(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = Qe, n = j;
    dn(!0), me(null);
    try {
      t.call(null);
    } finally {
      dn(r), me(n);
    }
  }
}
function en(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    const i = r.ac;
    i !== null && Zr(() => {
      i.abort(ze);
    });
    var n = r.next;
    (r.f & Ze) !== 0 ? r.parent = null : $(r, t), r = n;
  }
}
function Ss(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & Se) === 0 && $(t), t = r;
  }
}
function $(e, t = !0) {
  var r = !1;
  (t || (e.f & Ti) !== 0) && e.nodes !== null && e.nodes.end !== null && (Ts(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), r = !0), F(e, on), en(e, t && !r), Jt(e, 0);
  var n = e.nodes && e.nodes.t;
  if (n !== null)
    for (const s of n)
      s.stop();
  Xn(e), e.f ^= on, e.f |= _e;
  var i = e.parent;
  i !== null && i.first !== null && Zn(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function Ts(e, t) {
  for (; e !== null; ) {
    var r = e === t ? null : /* @__PURE__ */ tr(e);
    e.remove(), e = r;
  }
}
function Zn(e) {
  var t = e.parent, r = e.prev, n = e.next;
  r !== null && (r.next = n), n !== null && (n.prev = r), t !== null && (t.first === e && (t.first = n), t.last === e && (t.last = r));
}
function dt(e, t, r = !0) {
  var n = [];
  Qn(e, n, !0);
  var i = () => {
    r && $(e), t && t();
  }, s = n.length;
  if (s > 0) {
    var f = () => --s || i();
    for (var o of n)
      o.out(f);
  } else
    i();
}
function Qn(e, t, r) {
  if ((e.f & K) === 0) {
    e.f ^= K;
    var n = e.nodes && e.nodes.t;
    if (n !== null)
      for (const o of n)
        (o.is_global || r) && t.push(o);
    for (var i = e.first; i !== null; ) {
      var s = i.next;
      if ((i.f & Ze) === 0) {
        var f = (i.f & Mt) !== 0 || // If this is a branch effect without a block effect parent,
        // it means the parent block effect was pruned. In that case,
        // transparency information was transferred to the branch effect.
        (i.f & Se) !== 0 && (e.f & Oe) !== 0;
        Qn(i, t, f ? r : !1);
      }
      i = s;
    }
  }
}
function tn(e) {
  $n(e, !0);
}
function $n(e, t) {
  if ((e.f & K) !== 0) {
    e.f ^= K, (e.f & P) === 0 && (F(e, B), pt.ensure().schedule(e));
    for (var r = e.first; r !== null; ) {
      var n = r.next, i = (r.f & Mt) !== 0 || (r.f & Se) !== 0;
      $n(r, i ? t : !1), r = n;
    }
    var s = e.nodes && e.nodes.t;
    if (s !== null)
      for (const f of s)
        (f.is_global || t) && f.in();
  }
}
function rn(e, t) {
  if (e.nodes)
    for (var r = e.nodes.start, n = e.nodes.end; r !== null; ) {
      var i = r === n ? null : /* @__PURE__ */ tr(r);
      t.append(r), r = i;
    }
}
let pr = !1, Qe = !1;
function dn(e) {
  Qe = e;
}
let j = null, je = !1;
function me(e) {
  j = e;
}
let S = null;
function De(e) {
  S = e;
}
let pe = null;
function As(e) {
  j !== null && (pe === null ? pe = [e] : pe.push(e));
}
let Q = null, ne = 0, fe = null;
function Ns(e) {
  fe = e;
}
let ei = 1, st = 0, ht = st;
function hn(e) {
  ht = e;
}
function ti() {
  return ++ei;
}
function rr(e) {
  var t = e.f;
  if ((t & B) !== 0)
    return !0;
  if (t & H && (e.f &= ~_t), (t & Fe) !== 0) {
    for (var r = (
      /** @type {Value[]} */
      e.deps
    ), n = r.length, i = 0; i < n; i++) {
      var s = r[i];
      if (rr(
        /** @type {Derived} */
        s
      ) && In(
        /** @type {Derived} */
        s
      ), s.wv > e.wv)
        return !0;
    }
    (t & he) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    Ee === null && F(e, P);
  }
  return !1;
}
function ri(e, t, r = !0) {
  var n = e.reactions;
  if (n !== null && !(pe !== null && Rt.call(pe, e)))
    for (var i = 0; i < n.length; i++) {
      var s = n[i];
      (s.f & H) !== 0 ? ri(
        /** @type {Derived} */
        s,
        t,
        !1
      ) : t === s && (r ? F(s, B) : (s.f & P) !== 0 && F(s, Fe), Wr(
        /** @type {Effect} */
        s
      ));
    }
}
function ni(e) {
  var b;
  var t = Q, r = ne, n = fe, i = j, s = pe, f = ge, o = je, l = ht, u = e.f;
  Q = /** @type {null | Value[]} */
  null, ne = 0, fe = null, j = (u & (Se | Ze)) === 0 ? e : null, pe = null, Ot(e.ctx), je = !1, ht = ++st, e.ac !== null && (Zr(() => {
    e.ac.abort(ze);
  }), e.ac = null);
  try {
    e.f |= gr;
    var d = (
      /** @type {Function} */
      e.fn
    ), _ = d();
    e.f |= mt;
    var h = e.deps, v = y?.is_fork;
    if (Q !== null) {
      var c;
      if (v || Jt(e, ne), h !== null && ne > 0)
        for (h.length = ne + Q.length, c = 0; c < Q.length; c++)
          h[ne + c] = Q[c];
      else
        e.deps = h = Q;
      if (Qr() && (e.f & he) !== 0)
        for (c = ne; c < h.length; c++)
          ((b = h[c]).reactions ?? (b.reactions = [])).push(e);
    } else !v && h !== null && ne < h.length && (Jt(e, ne), h.length = ne);
    if (An() && fe !== null && !je && h !== null && (e.f & (H | Fe | B)) === 0)
      for (c = 0; c < /** @type {Source[]} */
      fe.length; c++)
        ri(
          fe[c],
          /** @type {Effect} */
          e
        );
    if (i !== null && i !== e) {
      if (st++, i.deps !== null)
        for (let w = 0; w < r; w += 1)
          i.deps[w].rv = st;
      if (t !== null)
        for (const w of t)
          w.rv = st;
      fe !== null && (n === null ? n = fe : n.push(.../** @type {Source[]} */
      fe));
    }
    return (e.f & We) !== 0 && (e.f ^= We), _;
  } catch (w) {
    return Rn(w);
  } finally {
    e.f ^= gr, Q = t, ne = r, fe = n, j = i, pe = s, Ot(f), je = o, ht = l;
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
  (Q === null || !Rt.call(Q, t))) {
    var s = (
      /** @type {Derived} */
      t
    );
    (s.f & he) !== 0 && (s.f ^= he, s.f &= ~_t), s.v !== q && Kr(s), vs(s), Jt(s, 0);
  }
}
function Jt(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var n = t; n < r.length; n++)
      Rs(e, r[n]);
}
function Dt(e) {
  var t = e.f;
  if ((t & _e) === 0) {
    F(e, P);
    var r = S, n = pr;
    S = e, pr = !0;
    try {
      (t & (Oe | kn)) !== 0 ? Ss(e) : en(e), Xn(e);
      var i = ni(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = ei;
      var s;
    } finally {
      pr = n, S = r;
    }
  }
}
async function Cs() {
  await Promise.resolve(), Qi();
}
function p(e) {
  var t = e.f, r = (t & H) !== 0;
  if (j !== null && !je) {
    var n = S !== null && (S.f & _e) !== 0;
    if (!n && (pe === null || !Rt.call(pe, e))) {
      var i = j.deps;
      if ((j.f & gr) !== 0)
        e.rv < st && (e.rv = st, Q === null && i !== null && i[ne] === e ? ne++ : Q === null ? Q = [e] : Q.push(e));
      else {
        (j.deps ?? (j.deps = [])).push(e);
        var s = e.reactions;
        s === null ? e.reactions = [j] : Rt.call(s, j) || s.push(j);
      }
    }
  }
  if (Qe && vt.has(e))
    return vt.get(e);
  if (r) {
    var f = (
      /** @type {Derived} */
      e
    );
    if (Qe) {
      var o = f.v;
      return ((f.f & P) === 0 && f.reactions !== null || si(f)) && (o = Xr(f)), vt.set(f, o), o;
    }
    var l = (f.f & he) === 0 && !je && j !== null && (pr || (j.f & he) !== 0), u = (f.f & mt) === 0;
    rr(f) && (l && (f.f |= he), In(f)), l && !u && (qn(f), ii(f));
  }
  if (Ee?.has(e))
    return Ee.get(e);
  if ((e.f & We) !== 0)
    throw e.v;
  return e.v;
}
function ii(e) {
  if (e.f |= he, e.deps !== null)
    for (const t of e.deps)
      (t.reactions ?? (t.reactions = [])).push(e), (t.f & H) !== 0 && (t.f & he) === 0 && (qn(
        /** @type {Derived} */
        t
      ), ii(
        /** @type {Derived} */
        t
      ));
}
function si(e) {
  if (e.v === q) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (vt.has(t) || (t.f & H) !== 0 && si(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function li(e) {
  var t = je;
  try {
    return je = !0, e();
  } finally {
    je = t;
  }
}
const Ms = ["touchstart", "touchmove"];
function Os(e) {
  return Ms.includes(e);
}
const lt = Symbol("events"), ai = /* @__PURE__ */ new Set(), Br = /* @__PURE__ */ new Set();
function xt(e, t, r) {
  (t[lt] ?? (t[lt] = {}))[e] = r;
}
function Fs(e) {
  for (var t = 0; t < e.length; t++)
    ai.add(e[t]);
  for (var r of Br)
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
  var f = 0, o = _n === e && e[lt];
  if (o) {
    var l = i.indexOf(o);
    if (l !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e[lt] = t;
      return;
    }
    var u = i.indexOf(t);
    if (u === -1)
      return;
    l <= u && (f = l);
  }
  if (s = /** @type {Element} */
  i[f] || e.target, s !== t) {
    xi(e, "currentTarget", {
      configurable: !0,
      get() {
        return s || r;
      }
    });
    var d = j, _ = S;
    me(null), De(null);
    try {
      for (var h, v = []; s !== null; ) {
        var c = s.assignedSlot || s.parentNode || /** @type {any} */
        s.host || null;
        try {
          var b = s[lt]?.[n];
          b != null && (!/** @type {any} */
          s.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === s) && b.call(s, e);
        } catch (w) {
          h ? v.push(w) : h = w;
        }
        if (e.cancelBubble || c === t || c === null)
          break;
        s = c;
      }
      if (h) {
        for (let w of v)
          queueMicrotask(() => {
            throw w;
          });
        throw h;
      }
    } finally {
      e[lt] = t, delete e.currentTarget, me(d), De(_);
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
function Ls(e) {
  return (
    /** @type {string} */
    Ds?.createHTML(e) ?? e
  );
}
function Ps(e) {
  var t = Kn("template");
  return t.innerHTML = Ls(e.replaceAll("<!>", "<!---->")), t.content;
}
function Hr(e, t) {
  var r = (
    /** @type {Effect} */
    S
  );
  r.nodes === null && (r.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function V(e, t) {
  var r = (t & Bi) !== 0, n = (t & Hi) !== 0, i, s = !e.startsWith("<!>");
  return () => {
    i === void 0 && (i = Ps(s ? e : "<!>" + e), r || (i = /** @type {TemplateNode} */
    /* @__PURE__ */ br(i)));
    var f = (
      /** @type {TemplateNode} */
      n || Hn ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (r) {
      var o = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ br(f)
      ), l = (
        /** @type {TemplateNode} */
        f.lastChild
      );
      Hr(o, l);
    } else
      Hr(f, f);
    return f;
  };
}
function zs() {
  var e = document.createDocumentFragment(), t = document.createComment(""), r = Xe();
  return e.append(t, r), Hr(t, r), e;
}
function z(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function I(e, t) {
  var r = t == null ? "" : typeof t == "object" ? `${t}` : t;
  r !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = r, e.nodeValue = `${r}`);
}
function Is(e, t) {
  return qs(e, t);
}
const ar = /* @__PURE__ */ new Map();
function qs(e, { target: t, anchor: r, props: n = {}, events: i, context: s, intro: f = !0, transformError: o }) {
  _s();
  var l = void 0, u = ks(() => {
    var d = r ?? t.appendChild(Xe());
    rs(
      /** @type {TemplateNode} */
      d,
      {
        pending: () => {
        }
      },
      (v) => {
        Sn({});
        var c = (
          /** @type {ComponentContext} */
          ge
        );
        s && (c.c = s), i && (n.$$events = i), l = e(v, n) || {}, Tn();
      },
      o
    );
    var _ = /* @__PURE__ */ new Set(), h = (v) => {
      for (var c = 0; c < v.length; c++) {
        var b = v[c];
        if (!_.has(b)) {
          _.add(b);
          var w = Os(b);
          for (const ee of [t, document]) {
            var C = ar.get(ee);
            C === void 0 && (C = /* @__PURE__ */ new Map(), ar.set(ee, C));
            var T = C.get(b);
            T === void 0 ? (ee.addEventListener(b, pn, { passive: w }), C.set(b, 1)) : C.set(b, T + 1);
          }
        }
      }
    };
    return h(kr(ai)), Br.add(h), () => {
      for (var v of _)
        for (const w of [t, document]) {
          var c = (
            /** @type {Map<string, number>} */
            ar.get(w)
          ), b = (
            /** @type {number} */
            c.get(v)
          );
          --b == 0 ? (w.removeEventListener(v, pn), c.delete(v), c.size === 0 && ar.delete(w)) : c.set(v, b);
        }
      Br.delete(h), d !== r && d.parentNode?.removeChild(d);
    };
  });
  return Ur.set(l, u), l;
}
let Ur = /* @__PURE__ */ new WeakMap();
function Vs(e, t) {
  const r = Ur.get(e);
  return r ? (Ur.delete(e), r(t)) : Promise.resolve();
}
var ke, Me, le, ct, $t, er, yr;
class Bs {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, r = !0) {
    /** @type {TemplateNode} */
    ye(this, "anchor");
    /** @type {Map<Batch, Key>} */
    m(this, ke, /* @__PURE__ */ new Map());
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
    m(this, le, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    m(this, ct, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    m(this, $t, !0);
    /**
     * @param {Batch} batch
     */
    m(this, er, (t) => {
      if (a(this, ke).has(t)) {
        var r = (
          /** @type {Key} */
          a(this, ke).get(t)
        ), n = a(this, Me).get(r);
        if (n)
          tn(n), a(this, ct).delete(r);
        else {
          var i = a(this, le).get(r);
          i && (a(this, Me).set(r, i.effect), a(this, le).delete(r), i.fragment.lastChild.remove(), this.anchor.before(i.fragment), n = i.effect);
        }
        for (const [s, f] of a(this, ke)) {
          if (a(this, ke).delete(s), s === t)
            break;
          const o = a(this, le).get(f);
          o && ($(o.effect), a(this, le).delete(f));
        }
        for (const [s, f] of a(this, Me)) {
          if (s === r || a(this, ct).has(s)) continue;
          const o = () => {
            if (Array.from(a(this, ke).values()).includes(s)) {
              var u = document.createDocumentFragment();
              rn(f, u), u.append(Xe()), a(this, le).set(s, { effect: f, fragment: u });
            } else
              $(f);
            a(this, ct).delete(s), a(this, Me).delete(s);
          };
          a(this, $t) || !n ? (a(this, ct).add(s), dt(f, o, !1)) : o();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    m(this, yr, (t) => {
      a(this, ke).delete(t);
      const r = Array.from(a(this, ke).values());
      for (const [n, i] of a(this, le))
        r.includes(n) || ($(i.effect), a(this, le).delete(n));
    });
    this.anchor = t, k(this, $t, r);
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
    if (r && !a(this, Me).has(t) && !a(this, le).has(t))
      if (i) {
        var s = document.createDocumentFragment(), f = Xe();
        s.append(f), a(this, le).set(t, {
          effect: de(() => r(f)),
          fragment: s
        });
      } else
        a(this, Me).set(
          t,
          de(() => r(this.anchor))
        );
    if (a(this, ke).set(n, t), i) {
      for (const [o, l] of a(this, Me))
        o === t ? n.unskip_effect(l) : n.skip_effect(l);
      for (const [o, l] of a(this, le))
        o === t ? n.unskip_effect(l.effect) : n.skip_effect(l.effect);
      n.oncommit(a(this, er)), n.ondiscard(a(this, yr));
    } else
      a(this, er).call(this, n);
  }
}
ke = new WeakMap(), Me = new WeakMap(), le = new WeakMap(), ct = new WeakMap(), $t = new WeakMap(), er = new WeakMap(), yr = new WeakMap();
function oe(e, t, r = !1) {
  var n = new Bs(e), i = r ? Mt : 0;
  function s(f, o) {
    n.ensure(f, o);
  }
  $r(() => {
    var f = !1;
    t((o, l = 0) => {
      f = !0, s(l, o);
    }), f || s(-1, null);
  }, i);
}
function Hs(e, t, r) {
  for (var n = [], i = t.length, s, f = t.length, o = 0; o < i; o++) {
    let _ = t[o];
    dt(
      _,
      () => {
        if (s) {
          if (s.pending.delete(_), s.done.add(_), s.pending.size === 0) {
            var h = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            Yr(e, kr(s.done)), h.delete(s), h.size === 0 && (e.outrogroups = null);
          }
        } else
          f -= 1;
      },
      !1
    );
  }
  if (f === 0) {
    var l = n.length === 0 && r !== null;
    if (l) {
      var u = (
        /** @type {Element} */
        r
      ), d = (
        /** @type {Element} */
        u.parentNode
      );
      ps(d), d.append(u), e.items.clear();
    }
    Yr(e, t, !l);
  } else
    s = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ?? (e.outrogroups = /* @__PURE__ */ new Set())).add(s);
}
function Yr(e, t, r = !0) {
  var n;
  if (e.pending.size > 0) {
    n = /* @__PURE__ */ new Set();
    for (const f of e.pending.values())
      for (const o of f)
        n.add(
          /** @type {EachItem} */
          e.items.get(o).e
        );
  }
  for (var i = 0; i < t.length; i++) {
    var s = t[i];
    if (n?.has(s)) {
      s.f |= He;
      const f = document.createDocumentFragment();
      rn(s, f);
    } else
      $(t[i], r);
  }
}
var gn;
function Us(e, t, r, n, i, s = null) {
  var f = e, o = /* @__PURE__ */ new Map();
  {
    var l = (
      /** @type {Element} */
      e
    );
    f = l.appendChild(Xe());
  }
  var u = null, d = /* @__PURE__ */ us(() => {
    var T = r();
    return xn(T) ? T : T == null ? [] : kr(T);
  }), _, h = /* @__PURE__ */ new Map(), v = !0;
  function c(T) {
    (C.effect.f & _e) === 0 && (C.pending.delete(T), C.fallback = u, Ys(C, _, f, t, n), u !== null && (_.length === 0 ? (u.f & He) === 0 ? tn(u) : (u.f ^= He, Ht(u, null, f)) : dt(u, () => {
      u = null;
    })));
  }
  function b(T) {
    C.pending.delete(T);
  }
  var w = $r(() => {
    _ = /** @type {V[]} */
    p(d);
    for (var T = _.length, ee = /* @__PURE__ */ new Set(), te = (
      /** @type {Batch} */
      y
    ), Te = Gn(), be = 0; be < T; be += 1) {
      var $e = _[be], J = n($e, be), ae = v ? null : o.get(J);
      ae ? (ae.v && Ft(ae.v, $e), ae.i && Ft(ae.i, be), Te && te.unskip_effect(ae.e)) : (ae = Gs(
        o,
        v ? f : gn ?? (gn = Xe()),
        $e,
        J,
        be,
        i,
        t,
        r
      ), v || (ae.e.f |= He), o.set(J, ae)), ee.add(J);
    }
    if (T === 0 && s && !u && (v ? u = de(() => s(f)) : (u = de(() => s(gn ?? (gn = Xe()))), u.f |= He)), T > ee.size && Ri(), !v)
      if (h.set(te, ee), Te) {
        for (const [jr, nr] of o)
          ee.has(jr) || te.skip_effect(nr.e);
        te.oncommit(c), te.ondiscard(b);
      } else
        c(te);
    p(d);
  }), C = { effect: w, items: o, pending: h, outrogroups: null, fallback: u };
  v = !1;
}
function Bt(e) {
  for (; e !== null && (e.f & Se) === 0; )
    e = e.next;
  return e;
}
function Ys(e, t, r, n, i) {
  var s = t.length, f = e.items, o = Bt(e.effect.first), l, u = null, d = [], _ = [], h, v, c, b;
  for (b = 0; b < s; b += 1) {
    if (h = t[b], v = i(h, b), c = /** @type {EachItem} */
    f.get(v).e, e.outrogroups !== null)
      for (const J of e.outrogroups)
        J.pending.delete(c), J.done.delete(c);
    if ((c.f & K) !== 0 && tn(c), (c.f & He) !== 0)
      if (c.f ^= He, c === o)
        Ht(c, null, r);
      else {
        var w = u ? u.next : o;
        c === e.effect.last && (e.effect.last = c.prev), c.prev && (c.prev.next = c.next), c.next && (c.next.prev = c.prev), Ye(e, u, c), Ye(e, c, w), Ht(c, w, r), u = c, d = [], _ = [], o = Bt(u.next);
        continue;
      }
    if (c !== o) {
      if (l !== void 0 && l.has(c)) {
        if (d.length < _.length) {
          var C = _[0], T;
          u = C.prev;
          var ee = d[0], te = d[d.length - 1];
          for (T = 0; T < d.length; T += 1)
            Ht(d[T], C, r);
          for (T = 0; T < _.length; T += 1)
            l.delete(_[T]);
          Ye(e, ee.prev, te.next), Ye(e, u, ee), Ye(e, te, C), o = C, u = te, b -= 1, d = [], _ = [];
        } else
          l.delete(c), Ht(c, o, r), Ye(e, c.prev, c.next), Ye(e, c, u === null ? e.effect.first : u.next), Ye(e, u, c), u = c;
        continue;
      }
      for (d = [], _ = []; o !== null && o !== c; )
        (l ?? (l = /* @__PURE__ */ new Set())).add(o), _.push(o), o = Bt(o.next);
      if (o === null)
        continue;
    }
    (c.f & He) === 0 && d.push(c), u = c, o = Bt(c.next);
  }
  if (e.outrogroups !== null) {
    for (const J of e.outrogroups)
      J.pending.size === 0 && (Yr(e, kr(J.done)), e.outrogroups?.delete(J));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (o !== null || l !== void 0) {
    var Te = [];
    if (l !== void 0)
      for (c of l)
        (c.f & K) === 0 && Te.push(c);
    for (; o !== null; )
      (o.f & K) === 0 && o !== e.fallback && Te.push(o), o = Bt(o.next);
    var be = Te.length;
    if (be > 0) {
      var $e = s === 0 ? r : null;
      Hs(e, Te, $e);
    }
  }
}
function Gs(e, t, r, n, i, s, f, o) {
  var l = (f & Ii) !== 0 ? (f & Vi) === 0 ? /* @__PURE__ */ ds(r, !1, !1) : gt(r) : null, u = (f & qi) !== 0 ? gt(i) : null;
  return {
    v: l,
    i: u,
    e: de(() => (s(t, l ?? r, u ?? i, o), () => {
      e.delete(n);
    }))
  };
}
function Ht(e, t, r) {
  if (e.nodes)
    for (var n = e.nodes.start, i = e.nodes.end, s = t && (t.f & He) === 0 ? (
      /** @type {EffectNodes} */
      t.nodes.start
    ) : r; n !== null; ) {
      var f = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ tr(n)
      );
      if (s.before(n), n === i)
        return;
      n = f;
    }
}
function Ye(e, t, r) {
  t === null ? e.effect.first = r : t.next = r, r === null ? e.effect.last = t : r.prev = t;
}
function Ks(e, t) {
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
      const i = Kn("style");
      i.id = t.hash, i.textContent = t.code, n.appendChild(i);
    }
  });
}
const mn = [...` 	
\r\f \v\uFEFF`];
function Js(e, t, r) {
  var n = "" + e;
  if (r) {
    for (var i of Object.keys(r))
      if (r[i])
        n = n ? n + " " + i : i;
      else if (n.length)
        for (var s = i.length, f = 0; (f = n.indexOf(i, f)) >= 0; ) {
          var o = f + s;
          (f === 0 || mn.includes(n[f - 1])) && (o === n.length || mn.includes(n[o])) ? n = (f === 0 ? "" : n.substring(0, f)) + n.substring(o + 1) : f = o;
        }
  }
  return n === "" ? null : n;
}
function bn(e, t, r, n, i, s) {
  var f = e.__className;
  if (f !== r || f === void 0) {
    var o = Js(r, n, s);
    o == null ? e.removeAttribute("class") : e.className = o, e.__className = r;
  } else if (s && i !== s)
    for (var l in s) {
      var u = !!s[l];
      (i == null || u !== !!i[l]) && e.classList.toggle(l, u);
    }
  return s;
}
function or(e, t, r = t) {
  var n = /* @__PURE__ */ new WeakSet();
  ms(e, "input", async (i) => {
    var s = i ? e.defaultValue : e.value;
    if (s = Mr(e) ? Or(s) : s, r(s), y !== null && n.add(y), await Cs(), s !== (s = t())) {
      var f = e.selectionStart, o = e.selectionEnd, l = e.value.length;
      if (e.value = s ?? "", o !== null) {
        var u = e.value.length;
        f === o && o === l && u > l ? (e.selectionStart = u, e.selectionEnd = u) : (e.selectionStart = f, e.selectionEnd = Math.min(o, u));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  li(t) == null && e.value && (r(Mr(e) ? Or(e.value) : e.value), y !== null && n.add(y)), Wn(() => {
    var i = t();
    if (e === document.activeElement) {
      var s = (
        /** @type {Batch} */
        y
      );
      if (n.has(s))
        return;
    }
    Mr(e) && i === Or(e.value) || e.type === "date" && !i && !e.value || i !== e.value && (e.value = i ?? "");
  });
}
function Mr(e) {
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
  ), s = !0, f = () => (s && (s = !1, i = /** @type {V} */
  n), i), o;
  o = /** @type {V} */
  e[t], o === void 0 && n !== void 0 && (o = f());
  var l;
  return l = () => {
    var u = (
      /** @type {V} */
      e[t]
    );
    return u === void 0 ? f() : (s = !0, u);
  }, l;
}
const Ws = "5";
var wn;
typeof window < "u" && ((wn = window.__svelte ?? (window.__svelte = {})).v ?? (wn.v = /* @__PURE__ */ new Set())).add(Ws);
var Xs = /* @__PURE__ */ V('<div class="error svelte-16j89hx"> </div>'), Zs = /* @__PURE__ */ V('<div class="success svelte-16j89hx"> </div>'), Qs = /* @__PURE__ */ V('<p class="desc svelte-16j89hx"> </p>'), $s = /* @__PURE__ */ V('<div class="kv svelte-16j89hx"><span>Location</span><span> </span></div>'), el = /* @__PURE__ */ V('<div class="kv svelte-16j89hx"><span>Area</span><span> </span></div>'), tl = /* @__PURE__ */ V('<div class="kv svelte-16j89hx"><span>Owner</span><span class="mono svelte-16j89hx"> </span></div>'), rl = /* @__PURE__ */ V('<div class="kv svelte-16j89hx"><span>H3 Index</span><span class="mono svelte-16j89hx"> </span></div>'), nl = /* @__PURE__ */ V('<div class="kv svelte-16j89hx"><span>NFT Token</span><span> </span></div>'), il = /* @__PURE__ */ V('<div class="kv svelte-16j89hx"><span>Status</span><span> </span></div>'), sl = /* @__PURE__ */ V('<button class="back svelte-16j89hx">← Back</button> <div class="card svelte-16j89hx"><h3 class="svelte-16j89hx"> </h3> <!> <div class="details svelte-16j89hx"><!> <!> <!> <!> <!> <!></div> <pre class="output svelte-16j89hx"> </pre></div>', 1), ll = /* @__PURE__ */ V('<div class="empty svelte-16j89hx">Loading land parcels…</div>'), al = /* @__PURE__ */ V('<div class="empty svelte-16j89hx">No land parcels registered</div>'), ol = /* @__PURE__ */ V('<tr><td class="fw svelte-16j89hx"> </td><td class="svelte-16j89hx"> </td><td class="svelte-16j89hx"> </td><td class="mono svelte-16j89hx"> </td><td class="svelte-16j89hx"><button class="link svelte-16j89hx">View</button></td></tr>'), fl = /* @__PURE__ */ V('<div class="table-wrap svelte-16j89hx"><table class="svelte-16j89hx"><thead><tr><th class="svelte-16j89hx">Name</th><th class="svelte-16j89hx">Location</th><th class="svelte-16j89hx">Area</th><th class="svelte-16j89hx">Owner</th><th class="svelte-16j89hx"></th></tr></thead><tbody></tbody></table></div>'), ul = /* @__PURE__ */ V('<div class="card svelte-16j89hx"><label class="svelte-16j89hx">Name <input type="text" placeholder="Parcel name" class="svelte-16j89hx"/></label> <label class="svelte-16j89hx">Description <textarea rows="2" placeholder="Description" class="svelte-16j89hx"></textarea></label> <label class="svelte-16j89hx">Location <input type="text" placeholder="Location or coordinates" class="svelte-16j89hx"/></label> <label class="svelte-16j89hx">Area <input type="text" placeholder="Area (sq m)" class="svelte-16j89hx"/></label> <button class="primary svelte-16j89hx"> </button></div>'), cl = /* @__PURE__ */ V('<div class="tabs svelte-16j89hx"><button> </button> <button>Register Land</button></div> <!>', 1), vl = /* @__PURE__ */ V('<div class="rt-lr svelte-16j89hx"><div class="header svelte-16j89hx"><h2 class="svelte-16j89hx">Land Registry</h2> <span class="badge svelte-16j89hx"> </span> <button class="refresh svelte-16j89hx">↻</button></div> <!> <!> <!></div>');
const dl = {
  hash: "svelte-16j89hx",
  code: ".rt-lr.svelte-16j89hx {font-family:system-ui, -apple-system, sans-serif;max-width:800px;margin:0 auto;padding:1.5rem;}.header.svelte-16j89hx {display:flex;align-items:center;gap:0.75rem;margin-bottom:1rem;flex-wrap:wrap;}.header.svelte-16j89hx h2:where(.svelte-16j89hx) {margin:0;font-size:1.5rem;}.badge.svelte-16j89hx {background:#e0e7ff;color:#3730a3;padding:0.15rem 0.5rem;border-radius:9999px;font-size:0.75rem;}.refresh.svelte-16j89hx {margin-left:auto;padding:0.35rem 0.75rem;background:#f3f4f6;border:1px solid #d1d5db;border-radius:0.5rem;cursor:pointer;font-size:0.8rem;}.tabs.svelte-16j89hx {display:flex;border-bottom:2px solid #e5e7eb;margin-bottom:1rem;}.tabs.svelte-16j89hx button:where(.svelte-16j89hx) {padding:0.5rem 1rem;background:none;border:none;border-bottom:2px solid transparent;margin-bottom:-2px;cursor:pointer;font-size:0.875rem;color:#6b7280;}.tabs.svelte-16j89hx button.active:where(.svelte-16j89hx) {border-bottom-color:#4f46e5;color:#4f46e5;font-weight:500;}.error.svelte-16j89hx {background:#fef2f2;color:#991b1b;border:1px solid #fecaca;padding:0.75rem;border-radius:0.5rem;margin-bottom:1rem;}.success.svelte-16j89hx {background:#ecfdf5;color:#065f46;border:1px solid #a7f3d0;padding:0.75rem;border-radius:0.5rem;margin-bottom:1rem;}.empty.svelte-16j89hx {color:#6b7280;text-align:center;padding:2rem;}.table-wrap.svelte-16j89hx {overflow-x:auto;}table.svelte-16j89hx {width:100%;border-collapse:collapse;font-size:0.8rem;}th.svelte-16j89hx {text-align:left;padding:0.5rem;border-bottom:2px solid #e5e7eb;color:#6b7280;font-weight:500;}td.svelte-16j89hx {padding:0.4rem 0.5rem;border-bottom:1px solid #f3f4f6;}.fw.svelte-16j89hx {font-weight:500;}.mono.svelte-16j89hx {font-family:ui-monospace, monospace;font-size:0.75rem;}.link.svelte-16j89hx {background:none;border:none;color:#4f46e5;cursor:pointer;font-size:0.8rem;padding:0;}.link.svelte-16j89hx:hover {text-decoration:underline;}.card.svelte-16j89hx {background:#fff;border:1px solid #e5e7eb;border-radius:0.75rem;padding:1.25rem;}.card.svelte-16j89hx h3:where(.svelte-16j89hx) {margin:0 0 0.5rem;}.desc.svelte-16j89hx {color:#4b5563;font-size:0.85rem;margin:0 0 0.75rem;}.details.svelte-16j89hx {margin-bottom:0.75rem;}.kv.svelte-16j89hx {display:flex;justify-content:space-between;padding:0.3rem 0;border-bottom:1px solid #f3f4f6;font-size:0.85rem;}.back.svelte-16j89hx {background:none;border:none;color:#4f46e5;cursor:pointer;font-size:0.85rem;padding:0;margin-bottom:1rem;}.back.svelte-16j89hx:hover {text-decoration:underline;}label.svelte-16j89hx {display:block;font-size:0.8rem;font-weight:500;color:#374151;margin-bottom:0.75rem;}input.svelte-16j89hx, textarea.svelte-16j89hx {display:block;width:100%;margin-top:0.25rem;padding:0.5rem 0.75rem;border:1px solid #d1d5db;border-radius:0.5rem;font-size:0.85rem;box-sizing:border-box;font-family:inherit;}.primary.svelte-16j89hx {padding:0.5rem 1.25rem;background:#4f46e5;color:#fff;border:none;border-radius:0.5rem;cursor:pointer;font-size:0.85rem;}.primary.svelte-16j89hx:hover:not(:disabled) {background:#4338ca;}.primary.svelte-16j89hx:disabled {opacity:0.5;cursor:not-allowed;}.output.svelte-16j89hx {background:#f9fafb;border:1px solid #e5e7eb;border-radius:0.5rem;padding:0.75rem;font-size:0.7rem;font-family:ui-monospace, monospace;overflow-x:auto;white-space:pre-wrap;max-height:300px;overflow-y:auto;}"
};
function hl(e, t) {
  Sn(t, !0), Ks(e, dl);
  let r = fr(t, "extensionId", 3, "land_registry"), n = fr(t, "version", 3, "");
  fr(t, "principal", 3, ""), fr(t, "isAuthenticated", 3, !0);
  let i = /* @__PURE__ */ L("list"), s = /* @__PURE__ */ L(kt([])), f = /* @__PURE__ */ L(!0), o = /* @__PURE__ */ L(""), l = /* @__PURE__ */ L(null), u = /* @__PURE__ */ L(""), d = /* @__PURE__ */ L(""), _ = /* @__PURE__ */ L(""), h = /* @__PURE__ */ L(""), v = /* @__PURE__ */ L(!1), c = /* @__PURE__ */ L("");
  async function b(N, re = "{}") {
    const we = await t.backend.extension_sync_call(JSON.stringify({ extension_name: r(), function_name: N, args: re }));
    return JSON.parse(we);
  }
  async function w() {
    A(f, !0), A(o, "");
    try {
      const N = await b("get_lands", "{}");
      A(s, N?.data ?? (Array.isArray(N) ? N : []), !0);
    } catch (N) {
      A(o, N?.message || String(N), !0);
    } finally {
      A(f, !1);
    }
  }
  async function C() {
    if (p(u).trim()) {
      A(v, !0), A(c, ""), A(o, "");
      try {
        await b("create_land", JSON.stringify({
          name: p(u),
          description: p(d) || void 0,
          location: p(_) || void 0,
          area: p(h) ? Number(p(h)) : void 0
        })), A(c, "Land parcel created!"), A(u, ""), A(d, ""), A(_, ""), A(h, ""), await w();
      } catch (N) {
        A(o, N?.message || String(N), !0);
      } finally {
        A(v, !1);
      }
    }
  }
  function T(N) {
    A(l, N, !0);
  }
  function ee() {
    A(l, null);
  }
  ys(() => {
    w();
  });
  var te = vl(), Te = x(te), be = E(x(Te), 2), $e = x(be), J = E(be, 2), ae = E(Te, 2);
  {
    var jr = (N) => {
      var re = Xs(), we = x(re);
      X(() => I(we, p(o))), z(N, re);
    };
    oe(ae, (N) => {
      p(o) && N(jr);
    });
  }
  var nr = E(ae, 2);
  {
    var oi = (N) => {
      var re = Zs(), we = x(re);
      X(() => I(we, p(c))), z(N, re);
    };
    oe(nr, (N) => {
      p(c) && N(oi);
    });
  }
  var fi = E(nr, 2);
  {
    var ui = (N) => {
      var re = sl(), we = Cr(re), bt = E(we, 2), Pt = x(bt), Sr = x(Pt), zt = E(Pt, 2);
      {
        var ir = (g) => {
          var M = Qs(), Y = x(M);
          X(() => I(Y, p(l).description)), z(g, M);
        };
        oe(zt, (g) => {
          p(l).description && g(ir);
        });
      }
      var sr = E(zt, 2), lr = x(sr);
      {
        var Tr = (g) => {
          var M = $s(), Y = E(x(M)), W = x(Y);
          X(() => I(W, p(l).location)), z(g, M);
        };
        oe(lr, (g) => {
          p(l).location && g(Tr);
        });
      }
      var Le = E(lr, 2);
      {
        var et = (g) => {
          var M = el(), Y = E(x(M)), W = x(Y);
          X(() => I(W, p(l).area)), z(g, M);
        };
        oe(Le, (g) => {
          p(l).area && g(et);
        });
      }
      var tt = E(Le, 2);
      {
        var It = (g) => {
          var M = tl(), Y = E(x(M)), W = x(Y);
          X(() => I(W, p(l).owner)), z(g, M);
        };
        oe(tt, (g) => {
          p(l).owner && g(It);
        });
      }
      var rt = E(tt, 2);
      {
        var qt = (g) => {
          var M = rl(), Y = E(x(M)), W = x(Y);
          X(() => I(W, p(l).h3_index)), z(g, M);
        };
        oe(rt, (g) => {
          p(l).h3_index && g(qt);
        });
      }
      var U = E(rt, 2);
      {
        var Ae = (g) => {
          var M = nl(), Y = E(x(M)), W = x(Y);
          X(() => I(W, p(l).nft_token_id)), z(g, M);
        };
        oe(U, (g) => {
          p(l).nft_token_id && g(Ae);
        });
      }
      var wt = E(U, 2);
      {
        var Vt = (g) => {
          var M = il(), Y = E(x(M)), W = x(Y);
          X(() => I(W, p(l).status)), z(g, M);
        };
        oe(wt, (g) => {
          p(l).status && g(Vt);
        });
      }
      var Ne = E(sr, 2), xe = x(Ne);
      X(
        (g) => {
          I(Sr, p(l).name || p(l).id), I(xe, g);
        },
        [() => JSON.stringify(p(l), null, 2)]
      ), xt("click", we, ee), z(N, re);
    }, ci = (N) => {
      var re = cl(), we = Cr(re), bt = x(we);
      let Pt;
      var Sr = x(bt), zt = E(bt, 2);
      let ir;
      var sr = E(we, 2);
      {
        var lr = (Le) => {
          var et = zs(), tt = Cr(et);
          {
            var It = (U) => {
              var Ae = ll();
              z(U, Ae);
            }, rt = (U) => {
              var Ae = al();
              z(U, Ae);
            }, qt = (U) => {
              var Ae = fl(), wt = x(Ae), Vt = E(x(wt));
              Us(Vt, 21, () => p(s), (Ne) => Ne.id || Ne.name, (Ne, xe) => {
                var g = ol(), M = x(g), Y = x(M), W = E(M), vi = x(W), nn = E(W), di = x(nn), sn = E(nn), hi = x(sn), _i = E(sn), pi = x(_i);
                X(
                  (gi) => {
                    I(Y, p(xe).name || p(xe).id), I(vi, p(xe).location || "—"), I(di, p(xe).area || "—"), I(hi, `${gi ?? ""}${p(xe).owner ? "…" : "—"}`);
                  },
                  [() => (p(xe).owner || "").slice(0, 12)]
                ), xt("click", pi, () => T(p(xe))), z(Ne, g);
              }), z(U, Ae);
            };
            oe(tt, (U) => {
              p(f) ? U(It) : p(s).length === 0 ? U(rt, 1) : U(qt, -1);
            });
          }
          z(Le, et);
        }, Tr = (Le) => {
          var et = ul(), tt = x(et), It = E(x(tt)), rt = E(tt, 2), qt = E(x(rt)), U = E(rt, 2), Ae = E(x(U)), wt = E(U, 2), Vt = E(x(wt)), Ne = E(wt, 2), xe = x(Ne);
          X(
            (g) => {
              Ne.disabled = g, I(xe, p(v) ? "Registering…" : "Register Land");
            },
            [() => p(v) || !p(u).trim()]
          ), or(It, () => p(u), (g) => A(u, g)), or(qt, () => p(d), (g) => A(d, g)), or(Ae, () => p(_), (g) => A(_, g)), or(Vt, () => p(h), (g) => A(h, g)), xt("click", Ne, C), z(Le, et);
        };
        oe(sr, (Le) => {
          p(i) === "list" ? Le(lr) : Le(Tr, -1);
        });
      }
      X(() => {
        Pt = bn(bt, 1, "svelte-16j89hx", null, Pt, { active: p(i) === "list" }), I(Sr, `Parcels (${p(s).length ?? ""})`), ir = bn(zt, 1, "svelte-16j89hx", null, ir, { active: p(i) === "create" });
      }), xt("click", bt, () => A(i, "list")), xt("click", zt, () => A(i, "create")), z(N, re);
    };
    oe(fi, (N) => {
      p(l) ? N(ui) : N(ci, -1);
    });
  }
  X(() => {
    I($e, `v${n() ?? ""}`), J.disabled = p(f);
  }), xt("click", J, w), z(e, te), Tn();
}
Fs(["click"]);
function gl(e, t) {
  const r = Is(hl, { target: e, props: t });
  return {
    unmount() {
      try {
        Vs(r);
      } catch {
      }
    }
  };
}
export {
  gl as default
};
