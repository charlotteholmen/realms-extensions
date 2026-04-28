var li = Object.defineProperty;
var $r = (e) => {
  throw TypeError(e);
};
var oi = (e, t, r) => t in e ? li(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var ye = (e, t, r) => oi(e, typeof t != "symbol" ? t + "" : t, r), Mr = (e, t, r) => t.has(e) || $r("Cannot " + r);
var a = (e, t, r) => (Mr(e, t, "read from private field"), r ? r.call(e) : t.get(e)), b = (e, t, r) => t.has(e) ? $r("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), k = (e, t, r, n) => (Mr(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r), R = (e, t, r) => (Mr(e, t, "access private method"), r);
var pn = Array.isArray, fi = Array.prototype.indexOf, Dt = Array.prototype.includes, mr = Array.from, ui = Object.defineProperty, Kt = Object.getOwnPropertyDescriptor, ci = Object.getOwnPropertyDescriptors, di = Object.prototype, vi = Array.prototype, _n = Object.getPrototypeOf, en = Object.isExtensible;
const hi = () => {
};
function pi(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function gn() {
  var e, t, r = new Promise((n, i) => {
    e = n, t = i;
  });
  return { promise: r, resolve: e, reject: t };
}
const H = 2, Qt = 4, yr = 8, bn = 1 << 24, Re = 16, Ne = 32, Je = 64, Nr = 128, ve = 512, L = 1024, U = 2048, Ie = 4096, K = 8192, he = 16384, zt = 32768, tn = 1 << 25, Ot = 65536, Ir = 1 << 17, _i = 1 << 18, Lt = 1 << 19, gi = 1 << 20, Ue = 1 << 25, gt = 65536, vr = 1 << 21, Zt = 1 << 22, Ze = 1 << 23, Ar = Symbol("$state"), bi = Symbol(""), ze = new class extends Error {
  constructor() {
    super(...arguments);
    ye(this, "name", "StaleReactionError");
    ye(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
function mi() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function yi(e, t, r) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function wi() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function xi() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function ki() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Ei() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Si() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
const Ti = 1, Ci = 2, Mi = 16, Ai = 1, Ri = 2, B = Symbol(), mn = "http://www.w3.org/1999/xhtml";
function Ni() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function Ii() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function yn(e) {
  return e === this.v;
}
function Di(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function wn(e) {
  return !Di(e, this.v);
}
let Se = null;
function Pt(e) {
  Se = e;
}
function xn(e, t = !1, r) {
  Se = {
    p: Se,
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
function kn(e) {
  var t = (
    /** @type {ComponentContext} */
    Se
  ), r = t.e;
  if (r !== null) {
    t.e = null;
    for (var n of r)
      as(n);
  }
  return t.i = !0, Se = t.p, /** @type {T} */
  {};
}
function En() {
  return !0;
}
let St = [];
function Oi() {
  var e = St;
  St = [], pi(e);
}
function Ct(e) {
  if (St.length === 0) {
    var t = St;
    queueMicrotask(() => {
      t === St && Oi();
    });
  }
  St.push(e);
}
function Sn(e) {
  var t = S;
  if (t === null)
    return E.f |= Ze, e;
  if ((t.f & zt) === 0 && (t.f & Qt) === 0)
    throw e;
  Qe(e, t);
}
function Qe(e, t) {
  for (; t !== null; ) {
    if ((t.f & Nr) !== 0) {
      if ((t.f & zt) === 0)
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
const Pi = -7169;
function P(e, t) {
  e.f = e.f & Pi | t;
}
function Ur(e) {
  (e.f & ve) !== 0 || e.deps === null ? P(e, L) : P(e, Ie);
}
function Tn(e) {
  if (e !== null)
    for (const t of e)
      (t.f & H) === 0 || (t.f & gt) === 0 || (t.f ^= gt, Tn(
        /** @type {Derived} */
        t.deps
      ));
}
function Cn(e, t, r) {
  (e.f & U) !== 0 ? t.add(e) : (e.f & Ie) !== 0 && r.add(e), Tn(e.deps), P(e, L);
}
const it = /* @__PURE__ */ new Set();
let T = null, ke = null, Dr = null, Rr = !1, Tt = null, ar = null;
var rn = 0;
let Fi = 1;
var Mt, At, ft, Le, Ce, Jt, ne, $t, Ke, Ve, Me, Rt, Nt, ut, j, lr, Mn, or, Or, fr, ji;
const _r = class _r {
  constructor() {
    b(this, j);
    ye(this, "id", Fi++);
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
    b(this, Mt, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    b(this, At, /* @__PURE__ */ new Set());
    /**
     * Callbacks that should run only when a fork is committed.
     * @type {Set<(batch: Batch) => void>}
     */
    b(this, ft, /* @__PURE__ */ new Set());
    /**
     * Async effects that are currently in flight
     * @type {Map<Effect, number>}
     */
    b(this, Le, /* @__PURE__ */ new Map());
    /**
     * Async effects that are currently in flight, _not_ inside a pending boundary
     * @type {Map<Effect, number>}
     */
    b(this, Ce, /* @__PURE__ */ new Map());
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    b(this, Jt, null);
    /**
     * The root effects that need to be flushed
     * @type {Effect[]}
     */
    b(this, ne, []);
    /**
     * Effects created while this batch was active.
     * @type {Effect[]}
     */
    b(this, $t, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    b(this, Ke, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    b(this, Ve, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    b(this, Me, /* @__PURE__ */ new Map());
    /**
     * Inverse of #skipped_branches which we need to tell prior batches to unskip them when committing
     * @type {Set<Effect>}
     */
    b(this, Rt, /* @__PURE__ */ new Set());
    ye(this, "is_fork", !1);
    b(this, Nt, !1);
    /** @type {Set<Batch>} */
    b(this, ut, /* @__PURE__ */ new Set());
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(t) {
    a(this, Me).has(t) || a(this, Me).set(t, { d: [], m: [] }), a(this, Rt).delete(t);
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   * @param {(e: Effect) => void} callback
   */
  unskip_effect(t, r = (n) => this.schedule(n)) {
    var n = a(this, Me).get(t);
    if (n) {
      a(this, Me).delete(t);
      for (var i of n.d)
        P(i, U), r(i);
      for (i of n.m)
        P(i, Ie), r(i);
    }
    a(this, Rt).add(t);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Value} source
   * @param {any} value
   * @param {boolean} [is_derived]
   */
  capture(t, r, n = !1) {
    t.v !== B && !this.previous.has(t) && this.previous.set(t, t.v), (t.f & Ze) === 0 && (this.current.set(t, [r, n]), ke?.set(t, r)), this.is_fork || (t.v = r);
  }
  activate() {
    T = this;
  }
  deactivate() {
    T = null, ke = null;
  }
  flush() {
    try {
      Rr = !0, T = this, R(this, j, or).call(this);
    } finally {
      rn = 0, Dr = null, Tt = null, ar = null, Rr = !1, T = null, ke = null, ht.clear();
    }
  }
  discard() {
    for (const t of a(this, At)) t(this);
    a(this, At).clear(), a(this, ft).clear(), it.delete(this);
  }
  /**
   * @param {Effect} effect
   */
  register_created_effect(t) {
    a(this, $t).push(t);
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  increment(t, r) {
    let n = a(this, Le).get(r) ?? 0;
    if (a(this, Le).set(r, n + 1), t) {
      let i = a(this, Ce).get(r) ?? 0;
      a(this, Ce).set(r, i + 1);
    }
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   * @param {boolean} skip - whether to skip updates (because this is triggered by a stale reaction)
   */
  decrement(t, r, n) {
    let i = a(this, Le).get(r) ?? 0;
    if (i === 1 ? a(this, Le).delete(r) : a(this, Le).set(r, i - 1), t) {
      let s = a(this, Ce).get(r) ?? 0;
      s === 1 ? a(this, Ce).delete(r) : a(this, Ce).set(r, s - 1);
    }
    a(this, Nt) || n || (k(this, Nt, !0), Ct(() => {
      k(this, Nt, !1), this.flush();
    }));
  }
  /**
   * @param {Set<Effect>} dirty_effects
   * @param {Set<Effect>} maybe_dirty_effects
   */
  transfer_effects(t, r) {
    for (const n of t)
      a(this, Ke).add(n);
    for (const n of r)
      a(this, Ve).add(n);
    t.clear(), r.clear();
  }
  /** @param {(batch: Batch) => void} fn */
  oncommit(t) {
    a(this, Mt).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    a(this, At).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  on_fork_commit(t) {
    a(this, ft).add(t);
  }
  run_fork_commit_callbacks() {
    for (const t of a(this, ft)) t(this);
    a(this, ft).clear();
  }
  settled() {
    return (a(this, Jt) ?? k(this, Jt, gn())).promise;
  }
  static ensure() {
    if (T === null) {
      const t = T = new _r();
      Rr || (it.add(T), Ct(() => {
        T === t && t.flush();
      }));
    }
    return T;
  }
  apply() {
    {
      ke = null;
      return;
    }
  }
  /**
   *
   * @param {Effect} effect
   */
  schedule(t) {
    if (Dr = t, t.b?.is_pending && (t.f & (Qt | yr | bn)) !== 0 && (t.f & zt) === 0) {
      t.b.defer_effect(t);
      return;
    }
    for (var r = t; r.parent !== null; ) {
      r = r.parent;
      var n = r.f;
      if (Tt !== null && r === S && (E === null || (E.f & H) === 0))
        return;
      if ((n & (Je | Ne)) !== 0) {
        if ((n & L) === 0)
          return;
        r.f ^= L;
      }
    }
    a(this, ne).push(r);
  }
};
Mt = new WeakMap(), At = new WeakMap(), ft = new WeakMap(), Le = new WeakMap(), Ce = new WeakMap(), Jt = new WeakMap(), ne = new WeakMap(), $t = new WeakMap(), Ke = new WeakMap(), Ve = new WeakMap(), Me = new WeakMap(), Rt = new WeakMap(), Nt = new WeakMap(), ut = new WeakMap(), j = new WeakSet(), lr = function() {
  return this.is_fork || a(this, Ce).size > 0;
}, Mn = function() {
  for (const n of a(this, ut))
    for (const i of a(n, Ce).keys()) {
      for (var t = !1, r = i; r.parent !== null; ) {
        if (a(this, Me).has(r)) {
          t = !0;
          break;
        }
        r = r.parent;
      }
      if (!t)
        return !0;
    }
  return !1;
}, or = function() {
  var o;
  if (rn++ > 1e3 && (it.delete(this), zi()), !R(this, j, lr).call(this)) {
    for (const l of a(this, Ke))
      a(this, Ve).delete(l), P(l, U), this.schedule(l);
    for (const l of a(this, Ve))
      P(l, Ie), this.schedule(l);
  }
  const t = a(this, ne);
  k(this, ne, []), this.apply();
  var r = Tt = [], n = [], i = ar = [];
  for (const l of t)
    try {
      R(this, j, Or).call(this, l, r, n);
    } catch (u) {
      throw Nn(l), u;
    }
  if (T = null, i.length > 0) {
    var s = _r.ensure();
    for (const l of i)
      s.schedule(l);
  }
  if (Tt = null, ar = null, R(this, j, lr).call(this) || R(this, j, Mn).call(this)) {
    R(this, j, fr).call(this, n), R(this, j, fr).call(this, r);
    for (const [l, u] of a(this, Me))
      Rn(l, u);
  } else {
    a(this, Le).size === 0 && it.delete(this), a(this, Ke).clear(), a(this, Ve).clear();
    for (const l of a(this, Mt)) l(this);
    a(this, Mt).clear(), nn(n), nn(r), a(this, Jt)?.resolve();
  }
  var f = (
    /** @type {Batch | null} */
    /** @type {unknown} */
    T
  );
  if (a(this, ne).length > 0) {
    const l = f ?? (f = this);
    a(l, ne).push(...a(this, ne).filter((u) => !a(l, ne).includes(u)));
  }
  f !== null && (it.add(f), R(o = f, j, or).call(o));
}, /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
Or = function(t, r, n) {
  t.f ^= L;
  for (var i = t.first; i !== null; ) {
    var s = i.f, f = (s & (Ne | Je)) !== 0, o = f && (s & L) !== 0, l = o || (s & K) !== 0 || a(this, Me).has(i);
    if (!l && i.fn !== null) {
      f ? i.f ^= L : (s & Qt) !== 0 ? r.push(i) : ir(i) && ((s & Re) !== 0 && a(this, Ve).add(i), jt(i));
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
fr = function(t) {
  for (var r = 0; r < t.length; r += 1)
    Cn(t[r], a(this, Ke), a(this, Ve));
}, ji = function() {
  var d, h, p;
  for (const v of it) {
    var t = v.id < this.id, r = [];
    for (const [c, [m, x]] of this.current) {
      if (v.current.has(c)) {
        var n = (
          /** @type {[any, boolean]} */
          v.current.get(c)[0]
        );
        if (t && m !== n)
          v.current.set(c, [m, x]);
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
        for (const c of a(this, Rt))
          v.unskip_effect(c, (m) => {
            var x;
            (m.f & (Re | Zt)) !== 0 ? v.schedule(m) : R(x = v, j, fr).call(x, [m]);
          });
      v.activate();
      var s = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Map();
      for (var o of r)
        An(o, i, s, f);
      f = /* @__PURE__ */ new Map();
      var l = [...v.current.keys()].filter(
        (c) => this.current.has(c) ? (
          /** @type {[any, boolean]} */
          this.current.get(c)[0] !== c
        ) : !0
      );
      for (const c of a(this, $t))
        (c.f & (he | K | Ir)) === 0 && Hr(c, l, f) && ((c.f & (Zt | Re)) !== 0 ? (P(c, U), v.schedule(c)) : a(v, Ke).add(c));
      if (a(v, ne).length > 0) {
        v.apply();
        for (var u of a(v, ne))
          R(d = v, j, Or).call(d, u, [], []);
        k(v, ne, []);
      }
      v.deactivate();
    }
  }
  for (const v of it)
    a(v, ut).has(this) && (a(v, ut).delete(this), a(v, ut).size === 0 && !R(h = v, j, lr).call(h) && (v.activate(), R(p = v, j, or).call(p)));
};
let bt = _r;
function zi() {
  try {
    wi();
  } catch (e) {
    Qe(e, Dr);
  }
}
let je = null;
function nn(e) {
  var t = e.length;
  if (t !== 0) {
    for (var r = 0; r < t; ) {
      var n = e[r++];
      if ((n.f & (he | K)) === 0 && ir(n) && (je = /* @__PURE__ */ new Set(), jt(n), n.deps === null && n.first === null && n.nodes === null && n.teardown === null && n.ac === null && Un(n), je?.size > 0)) {
        ht.clear();
        for (const i of je) {
          if ((i.f & (he | K)) !== 0) continue;
          const s = [i];
          let f = i.parent;
          for (; f !== null; )
            je.has(f) && (je.delete(f), s.push(f)), f = f.parent;
          for (let o = s.length - 1; o >= 0; o--) {
            const l = s[o];
            (l.f & (he | K)) === 0 && jt(l);
          }
        }
        je.clear();
      }
    }
    je = null;
  }
}
function An(e, t, r, n) {
  if (!r.has(e) && (r.add(e), e.reactions !== null))
    for (const i of e.reactions) {
      const s = i.f;
      (s & H) !== 0 ? An(
        /** @type {Derived} */
        i,
        t,
        r,
        n
      ) : (s & (Zt | Re)) !== 0 && (s & U) === 0 && Hr(i, t, n) && (P(i, U), Yr(
        /** @type {Effect} */
        i
      ));
    }
}
function Hr(e, t, r) {
  const n = r.get(e);
  if (n !== void 0) return n;
  if (e.deps !== null)
    for (const i of e.deps) {
      if (Dt.call(t, i))
        return !0;
      if ((i.f & H) !== 0 && Hr(
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
function Yr(e) {
  T.schedule(e);
}
function Rn(e, t) {
  if (!((e.f & Ne) !== 0 && (e.f & L) !== 0)) {
    (e.f & U) !== 0 ? t.d.push(e) : (e.f & Ie) !== 0 && t.m.push(e), P(e, L);
    for (var r = e.first; r !== null; )
      Rn(r, t), r = r.next;
  }
}
function Nn(e) {
  P(e, L);
  for (var t = e.first; t !== null; )
    Nn(t), t = t.next;
}
function Li(e) {
  let t = 0, r = mt(0), n;
  return () => {
    Wr() && (_(r), fs(() => (t === 0 && (n = hs(() => e(() => Wt(r)))), t += 1, () => {
      Ct(() => {
        t -= 1, t === 0 && (n?.(), n = void 0, Wt(r));
      });
    })));
  };
}
var Vi = Ot | Lt;
function Bi(e, t, r, n) {
  new qi(e, t, r, n);
}
var fe, qr, ue, ct, X, ce, G, ie, Be, dt, We, It, er, tr, qe, gr, O, Ui, Hi, Yi, Pr, ur, cr, Fr, jr;
class qi {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(t, r, n, i) {
    b(this, O);
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
    b(this, fe);
    /** @type {TemplateNode | null} */
    b(this, qr, null);
    /** @type {BoundaryProps} */
    b(this, ue);
    /** @type {((anchor: Node) => void)} */
    b(this, ct);
    /** @type {Effect} */
    b(this, X);
    /** @type {Effect | null} */
    b(this, ce, null);
    /** @type {Effect | null} */
    b(this, G, null);
    /** @type {Effect | null} */
    b(this, ie, null);
    /** @type {DocumentFragment | null} */
    b(this, Be, null);
    b(this, dt, 0);
    b(this, We, 0);
    b(this, It, !1);
    /** @type {Set<Effect>} */
    b(this, er, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    b(this, tr, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    b(this, qe, null);
    b(this, gr, Li(() => (k(this, qe, mt(a(this, dt))), () => {
      k(this, qe, null);
    })));
    k(this, fe, t), k(this, ue, r), k(this, ct, (s) => {
      var f = (
        /** @type {Effect} */
        S
      );
      f.b = this, f.f |= Nr, n(s);
    }), this.parent = /** @type {Effect} */
    S.b, this.transform_error = i ?? this.parent?.transform_error ?? ((s) => s), k(this, X, Qr(() => {
      R(this, O, Pr).call(this);
    }, Vi));
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    Cn(t, a(this, er), a(this, tr));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!a(this, ue).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  update_pending_count(t, r) {
    R(this, O, Fr).call(this, t, r), k(this, dt, a(this, dt) + t), !(!a(this, qe) || a(this, It)) && (k(this, It, !0), Ct(() => {
      k(this, It, !1), a(this, qe) && Ft(a(this, qe), a(this, dt));
    }));
  }
  get_effect_pending() {
    return a(this, gr).call(this), _(
      /** @type {Source<number>} */
      a(this, qe)
    );
  }
  /** @param {unknown} error */
  error(t) {
    if (!a(this, ue).onerror && !a(this, ue).failed)
      throw t;
    T?.is_fork ? (a(this, ce) && T.skip_effect(a(this, ce)), a(this, G) && T.skip_effect(a(this, G)), a(this, ie) && T.skip_effect(a(this, ie)), T.on_fork_commit(() => {
      R(this, O, jr).call(this, t);
    })) : R(this, O, jr).call(this, t);
  }
}
fe = new WeakMap(), qr = new WeakMap(), ue = new WeakMap(), ct = new WeakMap(), X = new WeakMap(), ce = new WeakMap(), G = new WeakMap(), ie = new WeakMap(), Be = new WeakMap(), dt = new WeakMap(), We = new WeakMap(), It = new WeakMap(), er = new WeakMap(), tr = new WeakMap(), qe = new WeakMap(), gr = new WeakMap(), O = new WeakSet(), Ui = function() {
  try {
    k(this, ce, de(() => a(this, ct).call(this, a(this, fe))));
  } catch (t) {
    this.error(t);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
Hi = function(t) {
  const r = a(this, ue).failed;
  r && k(this, ie, de(() => {
    r(
      a(this, fe),
      () => t,
      () => () => {
      }
    );
  }));
}, Yi = function() {
  const t = a(this, ue).pending;
  t && (this.is_pending = !0, k(this, G, de(() => t(a(this, fe)))), Ct(() => {
    var r = k(this, Be, document.createDocumentFragment()), n = Xe();
    r.append(n), k(this, ce, R(this, O, cr).call(this, () => de(() => a(this, ct).call(this, n)))), a(this, We) === 0 && (a(this, fe).before(r), k(this, Be, null), pt(
      /** @type {Effect} */
      a(this, G),
      () => {
        k(this, G, null);
      }
    ), R(this, O, ur).call(
      this,
      /** @type {Batch} */
      T
    ));
  }));
}, Pr = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), k(this, We, 0), k(this, dt, 0), k(this, ce, de(() => {
      a(this, ct).call(this, a(this, fe));
    })), a(this, We) > 0) {
      var t = k(this, Be, document.createDocumentFragment());
      Jr(a(this, ce), t);
      const r = (
        /** @type {(anchor: Node) => void} */
        a(this, ue).pending
      );
      k(this, G, de(() => r(a(this, fe))));
    } else
      R(this, O, ur).call(
        this,
        /** @type {Batch} */
        T
      );
  } catch (r) {
    this.error(r);
  }
}, /**
 * @param {Batch} batch
 */
ur = function(t) {
  this.is_pending = !1, t.transfer_effects(a(this, er), a(this, tr));
}, /**
 * @template T
 * @param {() => T} fn
 */
cr = function(t) {
  var r = S, n = E, i = Se;
  De(a(this, X)), _e(a(this, X)), Pt(a(this, X).ctx);
  try {
    return bt.ensure(), t();
  } catch (s) {
    return Sn(s), null;
  } finally {
    De(r), _e(n), Pt(i);
  }
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 * @param {Batch} batch
 */
Fr = function(t, r) {
  var n;
  if (!this.has_pending_snippet()) {
    this.parent && R(n = this.parent, O, Fr).call(n, t, r);
    return;
  }
  k(this, We, a(this, We) + t), a(this, We) === 0 && (R(this, O, ur).call(this, r), a(this, G) && pt(a(this, G), () => {
    k(this, G, null);
  }), a(this, Be) && (a(this, fe).before(a(this, Be)), k(this, Be, null)));
}, /**
 * @param {unknown} error
 */
jr = function(t) {
  a(this, ce) && ($(a(this, ce)), k(this, ce, null)), a(this, G) && ($(a(this, G)), k(this, G, null)), a(this, ie) && ($(a(this, ie)), k(this, ie, null));
  var r = a(this, ue).onerror;
  let n = a(this, ue).failed;
  var i = !1, s = !1;
  const f = () => {
    if (i) {
      Ii();
      return;
    }
    i = !0, s && Si(), a(this, ie) !== null && pt(a(this, ie), () => {
      k(this, ie, null);
    }), R(this, O, cr).call(this, () => {
      R(this, O, Pr).call(this);
    });
  }, o = (l) => {
    try {
      s = !0, r?.(l, f), s = !1;
    } catch (u) {
      Qe(u, a(this, X) && a(this, X).parent);
    }
    n && k(this, ie, R(this, O, cr).call(this, () => {
      try {
        return de(() => {
          var u = (
            /** @type {Effect} */
            S
          );
          u.b = this, u.f |= Nr, n(
            a(this, fe),
            () => l,
            () => f
          );
        });
      } catch (u) {
        return Qe(
          u,
          /** @type {Effect} */
          a(this, X).parent
        ), null;
      }
    }));
  };
  Ct(() => {
    var l;
    try {
      l = this.transform_error(t);
    } catch (u) {
      Qe(u, a(this, X) && a(this, X).parent);
      return;
    }
    l !== null && typeof l == "object" && typeof /** @type {any} */
    l.then == "function" ? l.then(
      o,
      /** @param {unknown} e */
      (u) => Qe(u, a(this, X) && a(this, X).parent)
    ) : o(l);
  });
};
function Gi(e, t, r, n) {
  const i = Gr;
  var s = e.filter((p) => !p.settled);
  if (r.length === 0 && s.length === 0) {
    n(t.map(i));
    return;
  }
  var f = (
    /** @type {Effect} */
    S
  ), o = Ki(), l = s.length === 1 ? s[0].promise : s.length > 1 ? Promise.all(s.map((p) => p.promise)) : null;
  function u(p) {
    o();
    try {
      n(p);
    } catch (v) {
      (f.f & he) === 0 && Qe(v, f);
    }
    hr();
  }
  if (r.length === 0) {
    l.then(() => u(t.map(i)));
    return;
  }
  var d = In();
  function h() {
    Promise.all(r.map((p) => /* @__PURE__ */ Wi(p))).then((p) => u([...t.map(i), ...p])).catch((p) => Qe(p, f)).finally(() => d());
  }
  l ? l.then(() => {
    o(), h(), hr();
  }) : h();
}
function Ki() {
  var e = (
    /** @type {Effect} */
    S
  ), t = E, r = Se, n = (
    /** @type {Batch} */
    T
  );
  return function(s = !0) {
    De(e), _e(t), Pt(r), s && (e.f & he) === 0 && (n?.activate(), n?.apply());
  };
}
function hr(e = !0) {
  De(null), _e(null), Pt(null), e && T?.deactivate();
}
function In() {
  var e = (
    /** @type {Effect} */
    S
  ), t = (
    /** @type {Boundary} */
    e.b
  ), r = (
    /** @type {Batch} */
    T
  ), n = t.is_rendered();
  return t.update_pending_count(1, r), r.increment(n, e), (i = !1) => {
    t.update_pending_count(-1, r), r.decrement(n, e, i);
  };
}
// @__NO_SIDE_EFFECTS__
function Gr(e) {
  var t = H | U;
  return S !== null && (S.f |= Lt), {
    ctx: Se,
    deps: null,
    effects: null,
    equals: yn,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      B
    ),
    wv: 0,
    parent: S,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function Wi(e, t, r) {
  let n = (
    /** @type {Effect | null} */
    S
  );
  n === null && mi();
  var i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), s = mt(
    /** @type {V} */
    B
  ), f = !E, o = /* @__PURE__ */ new Map();
  return os(() => {
    var l = (
      /** @type {Effect} */
      S
    ), u = gn();
    i = u.promise;
    try {
      Promise.resolve(e()).then(u.resolve, u.reject).finally(hr);
    } catch (v) {
      u.reject(v), hr();
    }
    var d = (
      /** @type {Batch} */
      T
    );
    if (f) {
      if ((l.f & zt) !== 0)
        var h = In();
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
    const p = (v, c = void 0) => {
      if (h) {
        var m = c === ze;
        h(m);
      }
      if (!(c === ze || (l.f & he) !== 0)) {
        if (d.activate(), c)
          s.f |= Ze, Ft(s, c);
        else {
          (s.f & Ze) !== 0 && (s.f ^= Ze), Ft(s, v);
          for (const [x, I] of o) {
            if (o.delete(x), x === d) break;
            I.reject(ze);
          }
        }
        d.deactivate();
      }
    };
    u.promise.then(p, (v) => p(null, v || "unknown"));
  }), ss(() => {
    for (const l of o.values())
      l.reject(ze);
  }), new Promise((l) => {
    function u(d) {
      function h() {
        d === i ? l(s) : u(i);
      }
      d.then(h, h);
    }
    u(i);
  });
}
// @__NO_SIDE_EFFECTS__
function Qi(e) {
  const t = /* @__PURE__ */ Gr(e);
  return Gn(t), t;
}
// @__NO_SIDE_EFFECTS__
function Zi(e) {
  const t = /* @__PURE__ */ Gr(e);
  return t.equals = wn, t;
}
function Xi(e) {
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
function Kr(e) {
  var t, r = S, n = e.parent;
  if (!yt && n !== null && (n.f & (he | K)) !== 0)
    return Ni(), e.v;
  De(n);
  try {
    e.f &= ~gt, Xi(e), t = Zn(e);
  } finally {
    De(r);
  }
  return t;
}
function Dn(e) {
  var t = Kr(e);
  if (!e.equals(t) && (e.wv = Wn(), (!T?.is_fork || e.deps === null) && (T !== null ? T.capture(e, t, !0) : e.v = t, e.deps === null))) {
    P(e, L);
    return;
  }
  yt || (ke !== null ? (Wr() || T?.is_fork) && ke.set(e, t) : Ur(e));
}
function Ji(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      (t.teardown || t.ac) && (t.teardown?.(), t.ac?.abort(ze), t.teardown = hi, t.ac = null, Xt(t, 0), Zr(t));
}
function On(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      t.teardown && jt(t);
}
let zr = /* @__PURE__ */ new Set();
const ht = /* @__PURE__ */ new Map();
let Pn = !1;
function mt(e, t) {
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
function q(e, t) {
  const r = mt(e);
  return Gn(r), r;
}
// @__NO_SIDE_EFFECTS__
function $i(e, t = !1, r = !0) {
  const n = mt(e);
  return t || (n.equals = wn), n;
}
function g(e, t, r = !1) {
  E !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Ee || (E.f & Ir) !== 0) && En() && (E.f & (H | Re | Zt | Ir)) !== 0 && (pe === null || !Dt.call(pe, e)) && Ei();
  let n = r ? Yt(t) : t;
  return Ft(e, n, ar);
}
function Ft(e, t, r = null) {
  if (!e.equals(t)) {
    ht.set(e, yt ? t : e.v);
    var n = bt.ensure();
    if (n.capture(e, t), (e.f & H) !== 0) {
      const i = (
        /** @type {Derived} */
        e
      );
      (e.f & U) !== 0 && Kr(i), ke === null && Ur(i);
    }
    e.wv = Wn(), Fn(e, U, r), S !== null && (S.f & L) !== 0 && (S.f & (Ne | Je)) === 0 && (oe === null ? ds([e]) : oe.push(e)), !n.is_fork && zr.size > 0 && !Pn && es();
  }
  return t;
}
function es() {
  Pn = !1;
  for (const e of zr)
    (e.f & L) !== 0 && P(e, Ie), ir(e) && jt(e);
  zr.clear();
}
function Wt(e) {
  g(e, e.v + 1);
}
function Fn(e, t, r) {
  var n = e.reactions;
  if (n !== null)
    for (var i = n.length, s = 0; s < i; s++) {
      var f = n[s], o = f.f, l = (o & U) === 0;
      if (l && P(f, t), (o & H) !== 0) {
        var u = (
          /** @type {Derived} */
          f
        );
        ke?.delete(u), (o & gt) === 0 && (o & ve && (S === null || (S.f & vr) === 0) && (f.f |= gt), Fn(u, Ie, r));
      } else if (l) {
        var d = (
          /** @type {Effect} */
          f
        );
        (o & Re) !== 0 && je !== null && je.add(d), r !== null ? r.push(d) : Yr(d);
      }
    }
}
function Yt(e) {
  if (typeof e != "object" || e === null || Ar in e)
    return e;
  const t = _n(e);
  if (t !== di && t !== vi)
    return e;
  var r = /* @__PURE__ */ new Map(), n = pn(e), i = /* @__PURE__ */ q(0), s = _t, f = (o) => {
    if (_t === s)
      return o();
    var l = E, u = _t;
    _e(null), ln(s);
    var d = o();
    return _e(l), ln(u), d;
  };
  return n && r.set("length", /* @__PURE__ */ q(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(o, l, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && xi();
        var d = r.get(l);
        return d === void 0 ? f(() => {
          var h = /* @__PURE__ */ q(u.value);
          return r.set(l, h), h;
        }) : g(d, u.value, !0), !0;
      },
      deleteProperty(o, l) {
        var u = r.get(l);
        if (u === void 0) {
          if (l in o) {
            const d = f(() => /* @__PURE__ */ q(B));
            r.set(l, d), Wt(i);
          }
        } else
          g(u, B), Wt(i);
        return !0;
      },
      get(o, l, u) {
        if (l === Ar)
          return e;
        var d = r.get(l), h = l in o;
        if (d === void 0 && (!h || Kt(o, l)?.writable) && (d = f(() => {
          var v = Yt(h ? o[l] : B), c = /* @__PURE__ */ q(v);
          return c;
        }), r.set(l, d)), d !== void 0) {
          var p = _(d);
          return p === B ? void 0 : p;
        }
        return Reflect.get(o, l, u);
      },
      getOwnPropertyDescriptor(o, l) {
        var u = Reflect.getOwnPropertyDescriptor(o, l);
        if (u && "value" in u) {
          var d = r.get(l);
          d && (u.value = _(d));
        } else if (u === void 0) {
          var h = r.get(l), p = h?.v;
          if (h !== void 0 && p !== B)
            return {
              enumerable: !0,
              configurable: !0,
              value: p,
              writable: !0
            };
        }
        return u;
      },
      has(o, l) {
        if (l === Ar)
          return !0;
        var u = r.get(l), d = u !== void 0 && u.v !== B || Reflect.has(o, l);
        if (u !== void 0 || S !== null && (!d || Kt(o, l)?.writable)) {
          u === void 0 && (u = f(() => {
            var p = d ? Yt(o[l]) : B, v = /* @__PURE__ */ q(p);
            return v;
          }), r.set(l, u));
          var h = _(u);
          if (h === B)
            return !1;
        }
        return d;
      },
      set(o, l, u, d) {
        var h = r.get(l), p = l in o;
        if (n && l === "length")
          for (var v = u; v < /** @type {Source<number>} */
          h.v; v += 1) {
            var c = r.get(v + "");
            c !== void 0 ? g(c, B) : v in o && (c = f(() => /* @__PURE__ */ q(B)), r.set(v + "", c));
          }
        if (h === void 0)
          (!p || Kt(o, l)?.writable) && (h = f(() => /* @__PURE__ */ q(void 0)), g(h, Yt(u)), r.set(l, h));
        else {
          p = h.v !== B;
          var m = f(() => Yt(u));
          g(h, m);
        }
        var x = Reflect.getOwnPropertyDescriptor(o, l);
        if (x?.set && x.set.call(d, u), !p) {
          if (n && typeof l == "string") {
            var I = (
              /** @type {Source<number>} */
              r.get("length")
            ), C = Number(l);
            Number.isInteger(C) && C >= I.v && g(I, C + 1);
          }
          Wt(i);
        }
        return !0;
      },
      ownKeys(o) {
        _(i);
        var l = Reflect.ownKeys(o).filter((h) => {
          var p = r.get(h);
          return p === void 0 || p.v !== B;
        });
        for (var [u, d] of r)
          d.v !== B && !(u in o) && l.push(u);
        return l;
      },
      setPrototypeOf() {
        ki();
      }
    }
  );
}
var sn, jn, zn, Ln;
function ts() {
  if (sn === void 0) {
    sn = window, jn = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, r = Text.prototype;
    zn = Kt(t, "firstChild").get, Ln = Kt(t, "nextSibling").get, en(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), en(r) && (r.__t = void 0);
  }
}
function Xe(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function at(e) {
  return (
    /** @type {TemplateNode | null} */
    zn.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function wr(e) {
  return (
    /** @type {TemplateNode | null} */
    Ln.call(e)
  );
}
function A(e, t) {
  return /* @__PURE__ */ at(e);
}
function D(e, t = 1, r = !1) {
  let n = e;
  for (; t--; )
    n = /** @type {TemplateNode} */
    /* @__PURE__ */ wr(n);
  return n;
}
function rs(e) {
  e.textContent = "";
}
function Vn() {
  return !1;
}
function ns(e, t, r) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElementNS(mn, e, void 0)
  );
}
function Bn(e) {
  var t = E, r = S;
  _e(null), De(null);
  try {
    return e();
  } finally {
    _e(t), De(r);
  }
}
function is(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function $e(e, t) {
  var r = S;
  r !== null && (r.f & K) !== 0 && (e |= K);
  var n = {
    ctx: Se,
    deps: null,
    nodes: null,
    f: e | U | ve,
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
  T?.register_created_effect(n);
  var i = n;
  if ((e & Qt) !== 0)
    Tt !== null ? Tt.push(n) : bt.ensure().schedule(n);
  else if (t !== null) {
    try {
      jt(n);
    } catch (f) {
      throw $(n), f;
    }
    i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && // either `null`, or a singular child
    (i.f & Lt) === 0 && (i = i.first, (e & Re) !== 0 && (e & Ot) !== 0 && i !== null && (i.f |= Ot));
  }
  if (i !== null && (i.parent = r, r !== null && is(i, r), E !== null && (E.f & H) !== 0 && (e & Je) === 0)) {
    var s = (
      /** @type {Derived} */
      E
    );
    (s.effects ?? (s.effects = [])).push(i);
  }
  return n;
}
function Wr() {
  return E !== null && !Ee;
}
function ss(e) {
  const t = $e(yr, null);
  return P(t, L), t.teardown = e, t;
}
function as(e) {
  return $e(Qt | gi, e);
}
function ls(e) {
  bt.ensure();
  const t = $e(Je | Lt, e);
  return (r = {}) => new Promise((n) => {
    r.outro ? pt(t, () => {
      $(t), n(void 0);
    }) : ($(t), n(void 0));
  });
}
function os(e) {
  return $e(Zt | Lt, e);
}
function fs(e, t = 0) {
  return $e(yr | t, e);
}
function we(e, t = [], r = [], n = []) {
  Gi(n, t, r, (i) => {
    $e(yr, () => e(...i.map(_)));
  });
}
function Qr(e, t = 0) {
  var r = $e(Re | t, e);
  return r;
}
function de(e) {
  return $e(Ne | Lt, e);
}
function qn(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = yt, n = E;
    an(!0), _e(null);
    try {
      t.call(null);
    } finally {
      an(r), _e(n);
    }
  }
}
function Zr(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    const i = r.ac;
    i !== null && Bn(() => {
      i.abort(ze);
    });
    var n = r.next;
    (r.f & Je) !== 0 ? r.parent = null : $(r, t), r = n;
  }
}
function us(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & Ne) === 0 && $(t), t = r;
  }
}
function $(e, t = !0) {
  var r = !1;
  (t || (e.f & _i) !== 0) && e.nodes !== null && e.nodes.end !== null && (cs(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), r = !0), P(e, tn), Zr(e, t && !r), Xt(e, 0);
  var n = e.nodes && e.nodes.t;
  if (n !== null)
    for (const s of n)
      s.stop();
  qn(e), e.f ^= tn, e.f |= he;
  var i = e.parent;
  i !== null && i.first !== null && Un(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function cs(e, t) {
  for (; e !== null; ) {
    var r = e === t ? null : /* @__PURE__ */ wr(e);
    e.remove(), e = r;
  }
}
function Un(e) {
  var t = e.parent, r = e.prev, n = e.next;
  r !== null && (r.next = n), n !== null && (n.prev = r), t !== null && (t.first === e && (t.first = n), t.last === e && (t.last = r));
}
function pt(e, t, r = !0) {
  var n = [];
  Hn(e, n, !0);
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
function Hn(e, t, r) {
  if ((e.f & K) === 0) {
    e.f ^= K;
    var n = e.nodes && e.nodes.t;
    if (n !== null)
      for (const o of n)
        (o.is_global || r) && t.push(o);
    for (var i = e.first; i !== null; ) {
      var s = i.next;
      if ((i.f & Je) === 0) {
        var f = (i.f & Ot) !== 0 || // If this is a branch effect without a block effect parent,
        // it means the parent block effect was pruned. In that case,
        // transparency information was transferred to the branch effect.
        (i.f & Ne) !== 0 && (e.f & Re) !== 0;
        Hn(i, t, f ? r : !1);
      }
      i = s;
    }
  }
}
function Xr(e) {
  Yn(e, !0);
}
function Yn(e, t) {
  if ((e.f & K) !== 0) {
    e.f ^= K, (e.f & L) === 0 && (P(e, U), bt.ensure().schedule(e));
    for (var r = e.first; r !== null; ) {
      var n = r.next, i = (r.f & Ot) !== 0 || (r.f & Ne) !== 0;
      Yn(r, i ? t : !1), r = n;
    }
    var s = e.nodes && e.nodes.t;
    if (s !== null)
      for (const f of s)
        (f.is_global || t) && f.in();
  }
}
function Jr(e, t) {
  if (e.nodes)
    for (var r = e.nodes.start, n = e.nodes.end; r !== null; ) {
      var i = r === n ? null : /* @__PURE__ */ wr(r);
      t.append(r), r = i;
    }
}
let dr = !1, yt = !1;
function an(e) {
  yt = e;
}
let E = null, Ee = !1;
function _e(e) {
  E = e;
}
let S = null;
function De(e) {
  S = e;
}
let pe = null;
function Gn(e) {
  E !== null && (pe === null ? pe = [e] : pe.push(e));
}
let J = null, re = 0, oe = null;
function ds(e) {
  oe = e;
}
let Kn = 1, lt = 0, _t = lt;
function ln(e) {
  _t = e;
}
function Wn() {
  return ++Kn;
}
function ir(e) {
  var t = e.f;
  if ((t & U) !== 0)
    return !0;
  if (t & H && (e.f &= ~gt), (t & Ie) !== 0) {
    for (var r = (
      /** @type {Value[]} */
      e.deps
    ), n = r.length, i = 0; i < n; i++) {
      var s = r[i];
      if (ir(
        /** @type {Derived} */
        s
      ) && Dn(
        /** @type {Derived} */
        s
      ), s.wv > e.wv)
        return !0;
    }
    (t & ve) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    ke === null && P(e, L);
  }
  return !1;
}
function Qn(e, t, r = !0) {
  var n = e.reactions;
  if (n !== null && !(pe !== null && Dt.call(pe, e)))
    for (var i = 0; i < n.length; i++) {
      var s = n[i];
      (s.f & H) !== 0 ? Qn(
        /** @type {Derived} */
        s,
        t,
        !1
      ) : t === s && (r ? P(s, U) : (s.f & L) !== 0 && P(s, Ie), Yr(
        /** @type {Effect} */
        s
      ));
    }
}
function Zn(e) {
  var m;
  var t = J, r = re, n = oe, i = E, s = pe, f = Se, o = Ee, l = _t, u = e.f;
  J = /** @type {null | Value[]} */
  null, re = 0, oe = null, E = (u & (Ne | Je)) === 0 ? e : null, pe = null, Pt(e.ctx), Ee = !1, _t = ++lt, e.ac !== null && (Bn(() => {
    e.ac.abort(ze);
  }), e.ac = null);
  try {
    e.f |= vr;
    var d = (
      /** @type {Function} */
      e.fn
    ), h = d();
    e.f |= zt;
    var p = e.deps, v = T?.is_fork;
    if (J !== null) {
      var c;
      if (v || Xt(e, re), p !== null && re > 0)
        for (p.length = re + J.length, c = 0; c < J.length; c++)
          p[re + c] = J[c];
      else
        e.deps = p = J;
      if (Wr() && (e.f & ve) !== 0)
        for (c = re; c < p.length; c++)
          ((m = p[c]).reactions ?? (m.reactions = [])).push(e);
    } else !v && p !== null && re < p.length && (Xt(e, re), p.length = re);
    if (En() && oe !== null && !Ee && p !== null && (e.f & (H | Ie | U)) === 0)
      for (c = 0; c < /** @type {Source[]} */
      oe.length; c++)
        Qn(
          oe[c],
          /** @type {Effect} */
          e
        );
    if (i !== null && i !== e) {
      if (lt++, i.deps !== null)
        for (let x = 0; x < r; x += 1)
          i.deps[x].rv = lt;
      if (t !== null)
        for (const x of t)
          x.rv = lt;
      oe !== null && (n === null ? n = oe : n.push(.../** @type {Source[]} */
      oe));
    }
    return (e.f & Ze) !== 0 && (e.f ^= Ze), h;
  } catch (x) {
    return Sn(x);
  } finally {
    e.f ^= vr, J = t, re = r, oe = n, E = i, pe = s, Pt(f), Ee = o, _t = l;
  }
}
function vs(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var n = fi.call(r, e);
    if (n !== -1) {
      var i = r.length - 1;
      i === 0 ? r = t.reactions = null : (r[n] = r[i], r.pop());
    }
  }
  if (r === null && (t.f & H) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (J === null || !Dt.call(J, t))) {
    var s = (
      /** @type {Derived} */
      t
    );
    (s.f & ve) !== 0 && (s.f ^= ve, s.f &= ~gt), s.v !== B && Ur(s), Ji(s), Xt(s, 0);
  }
}
function Xt(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var n = t; n < r.length; n++)
      vs(e, r[n]);
}
function jt(e) {
  var t = e.f;
  if ((t & he) === 0) {
    P(e, L);
    var r = S, n = dr;
    S = e, dr = !0;
    try {
      (t & (Re | bn)) !== 0 ? us(e) : Zr(e), qn(e);
      var i = Zn(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = Kn;
      var s;
    } finally {
      dr = n, S = r;
    }
  }
}
function _(e) {
  var t = e.f, r = (t & H) !== 0;
  if (E !== null && !Ee) {
    var n = S !== null && (S.f & he) !== 0;
    if (!n && (pe === null || !Dt.call(pe, e))) {
      var i = E.deps;
      if ((E.f & vr) !== 0)
        e.rv < lt && (e.rv = lt, J === null && i !== null && i[re] === e ? re++ : J === null ? J = [e] : J.push(e));
      else {
        (E.deps ?? (E.deps = [])).push(e);
        var s = e.reactions;
        s === null ? e.reactions = [E] : Dt.call(s, E) || s.push(E);
      }
    }
  }
  if (yt && ht.has(e))
    return ht.get(e);
  if (r) {
    var f = (
      /** @type {Derived} */
      e
    );
    if (yt) {
      var o = f.v;
      return ((f.f & L) === 0 && f.reactions !== null || Jn(f)) && (o = Kr(f)), ht.set(f, o), o;
    }
    var l = (f.f & ve) === 0 && !Ee && E !== null && (dr || (E.f & ve) !== 0), u = (f.f & zt) === 0;
    ir(f) && (l && (f.f |= ve), Dn(f)), l && !u && (On(f), Xn(f));
  }
  if (ke?.has(e))
    return ke.get(e);
  if ((e.f & Ze) !== 0)
    throw e.v;
  return e.v;
}
function Xn(e) {
  if (e.f |= ve, e.deps !== null)
    for (const t of e.deps)
      (t.reactions ?? (t.reactions = [])).push(e), (t.f & H) !== 0 && (t.f & ve) === 0 && (On(
        /** @type {Derived} */
        t
      ), Xn(
        /** @type {Derived} */
        t
      ));
}
function Jn(e) {
  if (e.v === B) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (ht.has(t) || (t.f & H) !== 0 && Jn(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function hs(e) {
  var t = Ee;
  try {
    return Ee = !0, e();
  } finally {
    Ee = t;
  }
}
const ps = ["touchstart", "touchmove"];
function _s(e) {
  return ps.includes(e);
}
const ot = Symbol("events"), $n = /* @__PURE__ */ new Set(), Lr = /* @__PURE__ */ new Set();
function st(e, t, r) {
  (t[ot] ?? (t[ot] = {}))[e] = r;
}
function gs(e) {
  for (var t = 0; t < e.length; t++)
    $n.add(e[t]);
  for (var r of Lr)
    r(e);
}
let on = null;
function fn(e) {
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), n = e.type, i = e.composedPath?.() || [], s = (
    /** @type {null | Element} */
    i[0] || e.target
  );
  on = e;
  var f = 0, o = on === e && e[ot];
  if (o) {
    var l = i.indexOf(o);
    if (l !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e[ot] = t;
      return;
    }
    var u = i.indexOf(t);
    if (u === -1)
      return;
    l <= u && (f = l);
  }
  if (s = /** @type {Element} */
  i[f] || e.target, s !== t) {
    ui(e, "currentTarget", {
      configurable: !0,
      get() {
        return s || r;
      }
    });
    var d = E, h = S;
    _e(null), De(null);
    try {
      for (var p, v = []; s !== null; ) {
        var c = s.assignedSlot || s.parentNode || /** @type {any} */
        s.host || null;
        try {
          var m = s[ot]?.[n];
          m != null && (!/** @type {any} */
          s.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === s) && m.call(s, e);
        } catch (x) {
          p ? v.push(x) : p = x;
        }
        if (e.cancelBubble || c === t || c === null)
          break;
        s = c;
      }
      if (p) {
        for (let x of v)
          queueMicrotask(() => {
            throw x;
          });
        throw p;
      }
    } finally {
      e[ot] = t, delete e.currentTarget, _e(d), De(h);
    }
  }
}
const bs = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (e) => e
  })
);
function ms(e) {
  return (
    /** @type {string} */
    bs?.createHTML(e) ?? e
  );
}
function ei(e) {
  var t = ns("template");
  return t.innerHTML = ms(e.replaceAll("<!>", "<!---->")), t.content;
}
function pr(e, t) {
  var r = (
    /** @type {Effect} */
    S
  );
  r.nodes === null && (r.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function V(e, t) {
  var r = (t & Ri) !== 0, n, i = !e.startsWith("<!>");
  return () => {
    n === void 0 && (n = ei(i ? e : "<!>" + e), n = /** @type {TemplateNode} */
    /* @__PURE__ */ at(n));
    var s = (
      /** @type {TemplateNode} */
      r || jn ? document.importNode(n, !0) : n.cloneNode(!0)
    );
    return pr(s, s), s;
  };
}
// @__NO_SIDE_EFFECTS__
function ys(e, t, r = "svg") {
  var n = !e.startsWith("<!>"), i = (t & Ai) !== 0, s = `<${r}>${n ? e : "<!>" + e}</${r}>`, f;
  return () => {
    if (!f) {
      var o = (
        /** @type {DocumentFragment} */
        ei(s)
      ), l = (
        /** @type {Element} */
        /* @__PURE__ */ at(o)
      );
      if (i)
        for (f = document.createDocumentFragment(); /* @__PURE__ */ at(l); )
          f.appendChild(
            /** @type {TemplateNode} */
            /* @__PURE__ */ at(l)
          );
      else
        f = /** @type {Element} */
        /* @__PURE__ */ at(l);
    }
    var u = (
      /** @type {TemplateNode} */
      f.cloneNode(!0)
    );
    if (i) {
      var d = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ at(u)
      ), h = (
        /** @type {TemplateNode} */
        u.lastChild
      );
      pr(d, h);
    } else
      pr(u, u);
    return u;
  };
}
// @__NO_SIDE_EFFECTS__
function xr(e, t) {
  return /* @__PURE__ */ ys(e, t, "svg");
}
function un(e = "") {
  {
    var t = Xe(e + "");
    return pr(t, t), t;
  }
}
function N(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function Et(e, t) {
  var r = t == null ? "" : typeof t == "object" ? `${t}` : t;
  r !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = r, e.nodeValue = `${r}`);
}
function ws(e, t) {
  return xs(e, t);
}
const sr = /* @__PURE__ */ new Map();
function xs(e, { target: t, anchor: r, props: n = {}, events: i, context: s, intro: f = !0, transformError: o }) {
  ts();
  var l = void 0, u = ls(() => {
    var d = r ?? t.appendChild(Xe());
    Bi(
      /** @type {TemplateNode} */
      d,
      {
        pending: () => {
        }
      },
      (v) => {
        xn({});
        var c = (
          /** @type {ComponentContext} */
          Se
        );
        s && (c.c = s), i && (n.$$events = i), l = e(v, n) || {}, kn();
      },
      o
    );
    var h = /* @__PURE__ */ new Set(), p = (v) => {
      for (var c = 0; c < v.length; c++) {
        var m = v[c];
        if (!h.has(m)) {
          h.add(m);
          var x = _s(m);
          for (const ee of [t, document]) {
            var I = sr.get(ee);
            I === void 0 && (I = /* @__PURE__ */ new Map(), sr.set(ee, I));
            var C = I.get(m);
            C === void 0 ? (ee.addEventListener(m, fn, { passive: x }), I.set(m, 1)) : I.set(m, C + 1);
          }
        }
      }
    };
    return p(mr($n)), Lr.add(p), () => {
      for (var v of h)
        for (const x of [t, document]) {
          var c = (
            /** @type {Map<string, number>} */
            sr.get(x)
          ), m = (
            /** @type {number} */
            c.get(v)
          );
          --m == 0 ? (x.removeEventListener(v, fn), c.delete(v), c.size === 0 && sr.delete(x)) : c.set(v, m);
        }
      Lr.delete(p), d !== r && d.parentNode?.removeChild(d);
    };
  });
  return Vr.set(l, u), l;
}
let Vr = /* @__PURE__ */ new WeakMap();
function ks(e, t) {
  const r = Vr.get(e);
  return r ? (Vr.delete(e), r(t)) : Promise.resolve();
}
var xe, Ae, se, vt, rr, nr, br;
class Es {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, r = !0) {
    /** @type {TemplateNode} */
    ye(this, "anchor");
    /** @type {Map<Batch, Key>} */
    b(this, xe, /* @__PURE__ */ new Map());
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
    b(this, Ae, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    b(this, se, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    b(this, vt, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    b(this, rr, !0);
    /**
     * @param {Batch} batch
     */
    b(this, nr, (t) => {
      if (a(this, xe).has(t)) {
        var r = (
          /** @type {Key} */
          a(this, xe).get(t)
        ), n = a(this, Ae).get(r);
        if (n)
          Xr(n), a(this, vt).delete(r);
        else {
          var i = a(this, se).get(r);
          i && (a(this, Ae).set(r, i.effect), a(this, se).delete(r), i.fragment.lastChild.remove(), this.anchor.before(i.fragment), n = i.effect);
        }
        for (const [s, f] of a(this, xe)) {
          if (a(this, xe).delete(s), s === t)
            break;
          const o = a(this, se).get(f);
          o && ($(o.effect), a(this, se).delete(f));
        }
        for (const [s, f] of a(this, Ae)) {
          if (s === r || a(this, vt).has(s)) continue;
          const o = () => {
            if (Array.from(a(this, xe).values()).includes(s)) {
              var u = document.createDocumentFragment();
              Jr(f, u), u.append(Xe()), a(this, se).set(s, { effect: f, fragment: u });
            } else
              $(f);
            a(this, vt).delete(s), a(this, Ae).delete(s);
          };
          a(this, rr) || !n ? (a(this, vt).add(s), pt(f, o, !1)) : o();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    b(this, br, (t) => {
      a(this, xe).delete(t);
      const r = Array.from(a(this, xe).values());
      for (const [n, i] of a(this, se))
        r.includes(n) || ($(i.effect), a(this, se).delete(n));
    });
    this.anchor = t, k(this, rr, r);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, r) {
    var n = (
      /** @type {Batch} */
      T
    ), i = Vn();
    if (r && !a(this, Ae).has(t) && !a(this, se).has(t))
      if (i) {
        var s = document.createDocumentFragment(), f = Xe();
        s.append(f), a(this, se).set(t, {
          effect: de(() => r(f)),
          fragment: s
        });
      } else
        a(this, Ae).set(
          t,
          de(() => r(this.anchor))
        );
    if (a(this, xe).set(n, t), i) {
      for (const [o, l] of a(this, Ae))
        o === t ? n.unskip_effect(l) : n.skip_effect(l);
      for (const [o, l] of a(this, se))
        o === t ? n.unskip_effect(l.effect) : n.skip_effect(l.effect);
      n.oncommit(a(this, nr)), n.ondiscard(a(this, br));
    } else
      a(this, nr).call(this, n);
  }
}
xe = new WeakMap(), Ae = new WeakMap(), se = new WeakMap(), vt = new WeakMap(), rr = new WeakMap(), nr = new WeakMap(), br = new WeakMap();
function Y(e, t, r = !1) {
  var n = new Es(e), i = r ? Ot : 0;
  function s(f, o) {
    n.ensure(f, o);
  }
  Qr(() => {
    var f = !1;
    t((o, l = 0) => {
      f = !0, s(l, o);
    }), f || s(-1, null);
  }, i);
}
function Ss(e, t) {
  return t;
}
function Ts(e, t, r) {
  for (var n = [], i = t.length, s, f = t.length, o = 0; o < i; o++) {
    let h = t[o];
    pt(
      h,
      () => {
        if (s) {
          if (s.pending.delete(h), s.done.add(h), s.pending.size === 0) {
            var p = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            Br(e, mr(s.done)), p.delete(s), p.size === 0 && (e.outrogroups = null);
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
      rs(d), d.append(u), e.items.clear();
    }
    Br(e, t, !l);
  } else
    s = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ?? (e.outrogroups = /* @__PURE__ */ new Set())).add(s);
}
function Br(e, t, r = !0) {
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
      s.f |= Ue;
      const f = document.createDocumentFragment();
      Jr(s, f);
    } else
      $(t[i], r);
  }
}
var cn;
function Cs(e, t, r, n, i, s = null) {
  var f = e, o = /* @__PURE__ */ new Map();
  {
    var l = (
      /** @type {Element} */
      e
    );
    f = l.appendChild(Xe());
  }
  var u = null, d = /* @__PURE__ */ Zi(() => {
    var C = r();
    return pn(C) ? C : C == null ? [] : mr(C);
  }), h, p = /* @__PURE__ */ new Map(), v = !0;
  function c(C) {
    (I.effect.f & he) === 0 && (I.pending.delete(C), I.fallback = u, Ms(I, h, f, t, n), u !== null && (h.length === 0 ? (u.f & Ue) === 0 ? Xr(u) : (u.f ^= Ue, Gt(u, null, f)) : pt(u, () => {
      u = null;
    })));
  }
  function m(C) {
    I.pending.delete(C);
  }
  var x = Qr(() => {
    h = /** @type {V[]} */
    _(d);
    for (var C = h.length, ee = /* @__PURE__ */ new Set(), W = (
      /** @type {Batch} */
      T
    ), Te = Vn(), ge = 0; ge < C; ge += 1) {
      var et = h[ge], te = n(et, ge), be = v ? null : o.get(te);
      be ? (be.v && Ft(be.v, et), be.i && Ft(be.i, ge), Te && W.unskip_effect(be.e)) : (be = As(
        o,
        v ? f : cn ?? (cn = Xe()),
        et,
        te,
        ge,
        i,
        t,
        r
      ), v || (be.e.f |= Ue), o.set(te, be)), ee.add(te);
    }
    if (C === 0 && s && !u && (v ? u = de(() => s(f)) : (u = de(() => s(cn ?? (cn = Xe()))), u.f |= Ue)), C > ee.size && yi(), !v)
      if (p.set(W, ee), Te) {
        for (const [kr, Er] of o)
          ee.has(kr) || W.skip_effect(Er.e);
        W.oncommit(c), W.ondiscard(m);
      } else
        c(W);
    _(d);
  }), I = { effect: x, items: o, pending: p, outrogroups: null, fallback: u };
  v = !1;
}
function Ut(e) {
  for (; e !== null && (e.f & Ne) === 0; )
    e = e.next;
  return e;
}
function Ms(e, t, r, n, i) {
  var s = t.length, f = e.items, o = Ut(e.effect.first), l, u = null, d = [], h = [], p, v, c, m;
  for (m = 0; m < s; m += 1) {
    if (p = t[m], v = i(p, m), c = /** @type {EachItem} */
    f.get(v).e, e.outrogroups !== null)
      for (const te of e.outrogroups)
        te.pending.delete(c), te.done.delete(c);
    if ((c.f & K) !== 0 && Xr(c), (c.f & Ue) !== 0)
      if (c.f ^= Ue, c === o)
        Gt(c, null, r);
      else {
        var x = u ? u.next : o;
        c === e.effect.last && (e.effect.last = c.prev), c.prev && (c.prev.next = c.next), c.next && (c.next.prev = c.prev), Ge(e, u, c), Ge(e, c, x), Gt(c, x, r), u = c, d = [], h = [], o = Ut(u.next);
        continue;
      }
    if (c !== o) {
      if (l !== void 0 && l.has(c)) {
        if (d.length < h.length) {
          var I = h[0], C;
          u = I.prev;
          var ee = d[0], W = d[d.length - 1];
          for (C = 0; C < d.length; C += 1)
            Gt(d[C], I, r);
          for (C = 0; C < h.length; C += 1)
            l.delete(h[C]);
          Ge(e, ee.prev, W.next), Ge(e, u, ee), Ge(e, W, I), o = I, u = W, m -= 1, d = [], h = [];
        } else
          l.delete(c), Gt(c, o, r), Ge(e, c.prev, c.next), Ge(e, c, u === null ? e.effect.first : u.next), Ge(e, u, c), u = c;
        continue;
      }
      for (d = [], h = []; o !== null && o !== c; )
        (l ?? (l = /* @__PURE__ */ new Set())).add(o), h.push(o), o = Ut(o.next);
      if (o === null)
        continue;
    }
    (c.f & Ue) === 0 && d.push(c), u = c, o = Ut(c.next);
  }
  if (e.outrogroups !== null) {
    for (const te of e.outrogroups)
      te.pending.size === 0 && (Br(e, mr(te.done)), e.outrogroups?.delete(te));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (o !== null || l !== void 0) {
    var Te = [];
    if (l !== void 0)
      for (c of l)
        (c.f & K) === 0 && Te.push(c);
    for (; o !== null; )
      (o.f & K) === 0 && o !== e.fallback && Te.push(o), o = Ut(o.next);
    var ge = Te.length;
    if (ge > 0) {
      var et = s === 0 ? r : null;
      Ts(e, Te, et);
    }
  }
}
function As(e, t, r, n, i, s, f, o) {
  var l = (f & Ti) !== 0 ? (f & Mi) === 0 ? /* @__PURE__ */ $i(r, !1, !1) : mt(r) : null, u = (f & Ci) !== 0 ? mt(i) : null;
  return {
    v: l,
    i: u,
    e: de(() => (s(t, l ?? r, u ?? i, o), () => {
      e.delete(n);
    }))
  };
}
function Gt(e, t, r) {
  if (e.nodes)
    for (var n = e.nodes.start, i = e.nodes.end, s = t && (t.f & Ue) === 0 ? (
      /** @type {EffectNodes} */
      t.nodes.start
    ) : r; n !== null; ) {
      var f = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ wr(n)
      );
      if (s.before(n), n === i)
        return;
      n = f;
    }
}
function Ge(e, t, r) {
  t === null ? e.effect.first = r : t.next = r, r === null ? e.effect.last = t : r.prev = t;
}
function Rs(e, t, r) {
  var n = e == null ? "" : "" + e;
  return n === "" ? null : n;
}
function Ht(e, t, r, n, i, s) {
  var f = e.__className;
  if (f !== r || f === void 0) {
    var o = Rs(r);
    o == null ? e.removeAttribute("class") : t ? e.className = o : e.setAttribute("class", o), e.__className = r;
  }
  return s;
}
const Ns = Symbol("is custom element"), Is = Symbol("is html");
function dn(e, t, r, n) {
  var i = Ds(e);
  i[t] !== (i[t] = r) && (t === "loading" && (e[bi] = r), r == null ? e.removeAttribute(t) : typeof r != "string" && Os(e).includes(t) ? e[t] = r : e.setAttribute(t, r));
}
function Ds(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [Ns]: e.nodeName.includes("-"),
      [Is]: e.namespaceURI === mn
    })
  );
}
var vn = /* @__PURE__ */ new Map();
function Os(e) {
  var t = e.getAttribute("is") || e.nodeName, r = vn.get(t);
  if (r) return r;
  vn.set(t, r = []);
  for (var n, i = e, s = Element.prototype; s !== i; ) {
    n = ci(i);
    for (var f in n)
      n[f].set && r.push(f);
    i = _n(i);
  }
  return r;
}
const Ps = "5";
var hn;
typeof window < "u" && ((hn = window.__svelte ?? (window.__svelte = {})).v ?? (hn.v = /* @__PURE__ */ new Set())).add(Ps);
var Fs = /* @__PURE__ */ xr('<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg>'), js = /* @__PURE__ */ V("<div></div>"), zs = /* @__PURE__ */ V('<div><div class="flex flex-col items-center"><div><!></div> <span> </span></div> <!></div>'), Ls = /* @__PURE__ */ V('<div class="flex items-center justify-between"></div>'), Vs = /* @__PURE__ */ V('<div class="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950 dark:to-indigo-950 border-2 border-blue-200 dark:border-blue-800 rounded-xl p-8 text-center"><div class="w-16 h-16 mx-auto mb-4 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-md"><svg class="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg></div> <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Verify Your Passport Identity</h2> <p class="text-gray-600 dark:text-gray-400 mb-6 max-w-md mx-auto">Use zero-knowledge proofs to verify your passport securely and privately. Your passport data never leaves your device.</p> <button class="px-8 py-3 text-base font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">Start Verification</button></div>'), Bs = /* @__PURE__ */ V('<div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-12 text-center"><svg class="animate-spin h-8 w-8 text-blue-600 mx-auto mb-4" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path></svg> <p class="text-gray-600 dark:text-gray-400 font-medium">Generating verification link...</p> <p class="text-sm text-gray-400 dark:text-gray-500 mt-1">This may take a few seconds</p></div>'), qs = /* @__PURE__ */ V('<div class="inline-block bg-white p-4 rounded-xl shadow-lg border border-gray-100 mb-4"><img alt="Passport Verification QR Code" class="block" width="200" height="200"/></div>'), Us = /* @__PURE__ */ xr('<svg class="w-3.5 h-3.5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> Copied!', 1), Hs = /* @__PURE__ */ xr('<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path></svg> Copy link', 1), Ys = /* @__PURE__ */ V('<div class="flex items-center justify-center gap-2 flex-wrap mb-6"><a target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 text-sm text-blue-600 dark:text-blue-400 hover:underline"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg> Open verification link</a> <button class="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"><!></button></div>'), Gs = /* @__PURE__ */ V('<p class="text-xs text-gray-500 dark:text-gray-400 font-mono break-all"><strong>Session ID:</strong> </p>'), Ks = /* @__PURE__ */ V('<p class="text-xs text-gray-500 dark:text-gray-400 font-mono break-all"><strong>Event ID:</strong> </p>'), Ws = /* @__PURE__ */ V('<div class="px-6 pb-4 space-y-1"><!> <!></div>'), Qs = /* @__PURE__ */ V('<div class="border-t border-gray-200 dark:border-gray-700"><button class="w-full px-6 py-3 flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"><span>Technical Details</span> <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button> <!></div>'), Zs = /* @__PURE__ */ xr('<svg class="animate-spin h-4 w-4" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path></svg> Checking...', 1), Xs = /* @__PURE__ */ V('<div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden"><div class="bg-gray-50 dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-700 px-6 py-3"><p class="text-sm font-medium text-gray-600 dark:text-gray-400">Scan the QR code with your RariMe app to verify your passport</p></div> <div class="p-6 text-center"><!> <!> <div class="bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-4 text-left"><p class="text-sm text-blue-800 dark:text-blue-300">Open your RariMe app and scan the QR code above. Once you have submitted the proof from your phone, press <strong>Check Status</strong> below.</p></div></div> <!> <div class="border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 px-6 py-4 flex gap-3 justify-center"><button class="px-6 py-2.5 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50 rounded-lg flex items-center gap-2 transition-colors"><!></button> <button class="px-6 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors">Cancel</button></div></div>'), Js = /* @__PURE__ */ V('<div><p class="text-xs text-gray-500 dark:text-gray-400">Citizenship</p> <p class="text-sm font-semibold text-gray-800 dark:text-gray-200"> </p></div>'), $s = /* @__PURE__ */ V('<div><p class="text-xs text-gray-500 dark:text-gray-400">Verified</p> <p class="text-sm font-semibold text-gray-800 dark:text-gray-200"> </p></div>'), ea = /* @__PURE__ */ V('<div class="bg-white/60 dark:bg-gray-800/60 rounded-lg p-4 mb-4 max-w-sm mx-auto text-left space-y-2"><!> <!></div>'), ta = /* @__PURE__ */ V('<div class="bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-950 dark:to-emerald-950 border-2 border-green-200 dark:border-green-800 rounded-xl p-8 text-center"><div class="w-16 h-16 mx-auto mb-4 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-md"><svg class="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div> <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Passport Verified Successfully!</h2> <!> <p class="text-sm text-gray-600 dark:text-gray-400 max-w-md mx-auto">Your passport identity has been securely linked to your account using zero-knowledge proofs.</p></div>'), ra = /* @__PURE__ */ V('<div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-8 text-center"><div class="w-16 h-16 mx-auto mb-4 bg-red-50 dark:bg-red-950 rounded-full flex items-center justify-center"><svg class="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div> <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Verification Failed</h2> <p class="text-gray-600 dark:text-gray-400 mb-6">Passport verification was not successful. Please try again.</p> <button class="px-6 py-2.5 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">Try Again</button></div>'), na = /* @__PURE__ */ V('<div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-8 text-center"><div class="w-16 h-16 mx-auto mb-4 bg-red-50 dark:bg-red-950 rounded-full flex items-center justify-center"><svg class="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div> <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Error Occurred</h2> <p class="text-gray-600 dark:text-gray-400 mb-6"> </p> <button class="px-6 py-2.5 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">Try Again</button></div>'), ia = /* @__PURE__ */ V('<div class="p-6 max-w-2xl mx-auto space-y-6"><div class="flex items-center gap-3"><div class="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center"><svg class="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg></div> <div><h1 class="text-2xl font-bold text-gray-900 dark:text-white">Passport Verification</h1> <p class="text-sm text-gray-500 dark:text-gray-400">Zero-knowledge identity verification via RariMe</p></div></div> <!> <!></div>');
function sa(e, t) {
  xn(t, !0);
  let r = /* @__PURE__ */ q("idle"), n = /* @__PURE__ */ q(""), i = /* @__PURE__ */ q(""), s = /* @__PURE__ */ q(""), f = /* @__PURE__ */ q(null), o = /* @__PURE__ */ q(""), l = /* @__PURE__ */ q(""), u = /* @__PURE__ */ q(!1), d = /* @__PURE__ */ q(!1), h = /* @__PURE__ */ q(!1), p = /* @__PURE__ */ Qi(() => _(r) === "idle" ? 0 : _(r) === "generating" ? 1 : _(r) === "pending" ? 2 : 3);
  const v = [
    { label: "Start", index: 0 },
    { label: "Scan", index: 2 },
    { label: "Verified", index: 3 }
  ];
  async function c(y, w = {}) {
    return await t.ctx.callSync(y, w);
  }
  async function m(y, w = {}) {
    return await t.ctx.callAsync(y, w);
  }
  async function x() {
    try {
      g(r, "generating"), g(s, "");
      const y = await c("get_current_application_id");
      g(l, y?.application_id ?? y?.data?.application_id ?? "", !0);
      const w = t.ctx.principal || "", M = await m("get_verification_link", { user_id: w });
      if (M?.data?.attributes) {
        const ae = M.data.attributes.rarime_app_url || M.data.attributes.get_proof_params;
        g(n, ae, !0), g(i, `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(ae)}`), g(o, M.data.id || w, !0), g(r, "pending");
      } else M?.link || M?.data?.link ? (g(n, M.link ?? M.data.link, !0), g(i, `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(_(n))}`), g(o, w, !0), g(r, "pending")) : (g(r, "error"), g(s, "Invalid response format from verification service"));
    } catch (y) {
      g(r, "error"), g(s, y?.message || "Network error occurred", !0);
    }
  }
  async function I() {
    try {
      g(d, !0);
      const y = t.ctx.principal || "", w = await m("check_verification_status", { user_id: y });
      if (w?.data?.attributes) {
        const M = w.data.attributes.status;
        M === "verified" ? (g(r, "verified"), g(f, w.data.attributes, !0), await C(w)) : M === "failed" && (g(r, "failed"), g(s, "Passport verification failed"));
      } else {
        const M = w?.status ?? w?.verification_status ?? "";
        (M === "verified" || M === "approved") && (g(r, "verified"), g(f, w, !0));
      }
    } catch (y) {
      console.error("Error checking verification status:", y);
    } finally {
      g(d, !1);
    }
  }
  async function C(y) {
    try {
      await c("create_passport_identity", y);
    } catch (w) {
      console.error("Error creating passport identity:", w);
    }
  }
  async function ee() {
    try {
      await navigator.clipboard.writeText(_(n)), g(u, !0), setTimeout(
        () => {
          g(u, !1);
        },
        2e3
      );
    } catch {
    }
  }
  function W() {
    g(r, "idle"), g(n, ""), g(i, ""), g(s, ""), g(f, null), g(o, ""), g(l, ""), g(u, !1), g(h, !1);
  }
  var Te = ia(), ge = D(A(Te), 2);
  {
    var et = (y) => {
      var w = Ls();
      Cs(w, 21, () => v, Ss, (M, ae, me) => {
        let wt = () => _(ae).label, Oe = () => _(ae).index;
        var He = zs(), xt = A(He), tt = A(xt), Q = A(tt);
        {
          var Pe = (z) => {
            var le = Fs();
            N(z, le);
          }, rt = (z) => {
            var le = un();
            le.nodeValue = me + 1, N(z, le);
          };
          Y(Q, (z) => {
            _(p) > Oe() ? z(Pe) : z(rt, -1);
          });
        }
        var Ye = D(tt, 2), Vt = A(Ye), F = D(xt, 2);
        {
          var Z = (z) => {
            var le = js();
            we(() => Ht(le, 1, `flex-1 h-0.5 mx-3 mb-5 ${_(p) > Oe() ? "bg-blue-600" : "bg-gray-200 dark:bg-gray-700"}`)), N(z, le);
          };
          Y(F, (z) => {
            me < v.length - 1 && z(Z);
          });
        }
        we(() => {
          Ht(He, 1, `flex items-center ${me < v.length - 1 ? "flex-1" : ""}`), Ht(tt, 1, `w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold
							${_(p) >= Oe() ? "bg-blue-600 text-white" : "bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400"}`), Ht(Ye, 1, `text-xs mt-1 ${_(p) >= Oe() ? "text-blue-600 dark:text-blue-400 font-medium" : "text-gray-400 dark:text-gray-500"}`), Et(Vt, wt());
        }), N(M, He);
      }), N(y, w);
    };
    Y(ge, (y) => {
      _(r) !== "error" && _(r) !== "failed" && y(et);
    });
  }
  var te = D(ge, 2);
  {
    var be = (y) => {
      var w = Vs(), M = D(A(w), 6);
      st("click", M, x), N(y, w);
    }, kr = (y) => {
      var w = Bs();
      N(y, w);
    }, Er = (y) => {
      var w = Xs(), M = D(A(w), 2), ae = A(M);
      {
        var me = (F) => {
          var Z = qs(), z = A(Z);
          we(() => dn(z, "src", _(i))), N(F, Z);
        };
        Y(ae, (F) => {
          _(i) && F(me);
        });
      }
      var wt = D(ae, 2);
      {
        var Oe = (F) => {
          var Z = Ys(), z = A(Z), le = D(z, 2), Sr = A(le);
          {
            var Tr = (Fe) => {
              var kt = Us();
              N(Fe, kt);
            }, Bt = (Fe) => {
              var kt = Hs();
              N(Fe, kt);
            };
            Y(Sr, (Fe) => {
              _(u) ? Fe(Tr) : Fe(Bt, -1);
            });
          }
          we(() => dn(z, "href", _(n))), st("click", le, ee), N(F, Z);
        };
        Y(wt, (F) => {
          _(n) && F(Oe);
        });
      }
      var He = D(M, 2);
      {
        var xt = (F) => {
          var Z = Qs(), z = A(Z), le = D(A(z), 2), Sr = D(z, 2);
          {
            var Tr = (Bt) => {
              var Fe = Ws(), kt = A(Fe);
              {
                var ii = (nt) => {
                  var qt = Gs(), Cr = D(A(qt));
                  we(() => Et(Cr, ` ${_(o) ?? ""}`)), N(nt, qt);
                };
                Y(kt, (nt) => {
                  _(o) && nt(ii);
                });
              }
              var si = D(kt, 2);
              {
                var ai = (nt) => {
                  var qt = Ks(), Cr = D(A(qt));
                  we(() => Et(Cr, ` ${_(l) ?? ""}`)), N(nt, qt);
                };
                Y(si, (nt) => {
                  _(l) && nt(ai);
                });
              }
              N(Bt, Fe);
            };
            Y(Sr, (Bt) => {
              _(h) && Bt(Tr);
            });
          }
          we(() => Ht(le, 0, `w-4 h-4 transition-transform ${_(h) ? "rotate-180" : ""}`)), st("click", z, () => g(h, !_(h))), N(F, Z);
        };
        Y(He, (F) => {
          (_(o) || _(l)) && F(xt);
        });
      }
      var tt = D(He, 2), Q = A(tt), Pe = A(Q);
      {
        var rt = (F) => {
          var Z = Zs();
          N(F, Z);
        }, Ye = (F) => {
          var Z = un("Check Status");
          N(F, Z);
        };
        Y(Pe, (F) => {
          _(d) ? F(rt) : F(Ye, -1);
        });
      }
      var Vt = D(Q, 2);
      we(() => Q.disabled = _(d)), st("click", Q, I), st("click", Vt, W), N(y, w);
    }, ti = (y) => {
      var w = ta(), M = D(A(w), 4);
      {
        var ae = (me) => {
          var wt = ea(), Oe = A(wt);
          {
            var He = (Q) => {
              var Pe = Js(), rt = D(A(Pe), 2), Ye = A(rt);
              we(() => Et(Ye, _(f).citizenship)), N(Q, Pe);
            };
            Y(Oe, (Q) => {
              _(f).citizenship && Q(He);
            });
          }
          var xt = D(Oe, 2);
          {
            var tt = (Q) => {
              var Pe = $s(), rt = D(A(Pe), 2), Ye = A(rt);
              we((Vt) => Et(Ye, Vt), [
                () => new Date(_(f).verified_at).toLocaleString()
              ]), N(Q, Pe);
            };
            Y(xt, (Q) => {
              _(f).verified_at && Q(tt);
            });
          }
          N(me, wt);
        };
        Y(M, (me) => {
          _(f) && me(ae);
        });
      }
      N(y, w);
    }, ri = (y) => {
      var w = ra(), M = D(A(w), 6);
      st("click", M, W), N(y, w);
    }, ni = (y) => {
      var w = na(), M = D(A(w), 4), ae = A(M), me = D(M, 2);
      we(() => Et(ae, _(s))), st("click", me, W), N(y, w);
    };
    Y(te, (y) => {
      _(r) === "idle" ? y(be) : _(r) === "generating" ? y(kr, 1) : _(r) === "pending" ? y(Er, 2) : _(r) === "verified" ? y(ti, 3) : _(r) === "failed" ? y(ri, 4) : _(r) === "error" && y(ni, 5);
    });
  }
  N(e, Te), kn();
}
gs(["click"]);
function oa(e, t) {
  const r = ws(sa, { target: e, props: { ctx: t } });
  return {
    unmount() {
      try {
        ks(r);
      } catch {
      }
    }
  };
}
export {
  oa as default
};
