var oi = Object.defineProperty;
var $r = (e) => {
  throw TypeError(e);
};
var li = (e, t, r) => t in e ? oi(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var me = (e, t, r) => li(e, typeof t != "symbol" ? t + "" : t, r), Mr = (e, t, r) => t.has(e) || $r("Cannot " + r);
var a = (e, t, r) => (Mr(e, t, "read from private field"), r ? r.call(e) : t.get(e)), b = (e, t, r) => t.has(e) ? $r("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), E = (e, t, r, n) => (Mr(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r), N = (e, t, r) => (Mr(e, t, "access private method"), r);
var pn = Array.isArray, fi = Array.prototype.indexOf, It = Array.prototype.includes, yr = Array.from, ui = Object.defineProperty, Jt = Object.getOwnPropertyDescriptor, ci = Object.getOwnPropertyDescriptors, di = Object.prototype, vi = Array.prototype, _n = Object.getPrototypeOf, en = Object.isExtensible;
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
const Y = 2, Wt = 4, mr = 8, bn = 1 << 24, Ne = 16, Re = 32, Xe = 64, Rr = 128, ve = 512, V = 1024, H = 2048, Oe = 4096, K = 8192, he = 16384, zt = 32768, tn = 1 << 25, Dt = 65536, Or = 1 << 17, _i = 1 << 18, Lt = 1 << 19, gi = 1 << 20, Ue = 1 << 25, gt = 65536, vr = 1 << 21, Qt = 1 << 22, Qe = 1 << 23, Ar = Symbol("$state"), bi = Symbol(""), ze = new class extends Error {
  constructor() {
    super(...arguments);
    me(this, "name", "StaleReactionError");
    me(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
function yi() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function mi(e, t, r) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function xi() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function wi() {
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
const Ti = 1, Ci = 2, Mi = 16, Ai = 1, Ni = 2, q = Symbol(), yn = "http://www.w3.org/1999/xhtml";
function Ri() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function Oi() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function mn(e) {
  return e === this.v;
}
function Ii(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function xn(e) {
  return !Ii(e, this.v);
}
let Se = null;
function Pt(e) {
  Se = e;
}
function wn(e, t = !1, r) {
  Se = {
    p: Se,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    r: (
      /** @type {Effect} */
      T
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
function Di() {
  var e = St;
  St = [], pi(e);
}
function Ct(e) {
  if (St.length === 0) {
    var t = St;
    queueMicrotask(() => {
      t === St && Di();
    });
  }
  St.push(e);
}
function Sn(e) {
  var t = T;
  if (t === null)
    return S.f |= Qe, e;
  if ((t.f & zt) === 0 && (t.f & Wt) === 0)
    throw e;
  We(e, t);
}
function We(e, t) {
  for (; t !== null; ) {
    if ((t.f & Rr) !== 0) {
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
function F(e, t) {
  e.f = e.f & Pi | t;
}
function Ur(e) {
  (e.f & ve) !== 0 || e.deps === null ? F(e, V) : F(e, Oe);
}
function Tn(e) {
  if (e !== null)
    for (const t of e)
      (t.f & Y) === 0 || (t.f & gt) === 0 || (t.f ^= gt, Tn(
        /** @type {Derived} */
        t.deps
      ));
}
function Cn(e, t, r) {
  (e.f & H) !== 0 ? t.add(e) : (e.f & Oe) !== 0 && r.add(e), Tn(e.deps), F(e, V);
}
const it = /* @__PURE__ */ new Set();
let C = null, ke = null, Ir = null, Nr = !1, Tt = null, ar = null;
var rn = 0;
let Fi = 1;
var Mt, At, ft, Le, Ce, Xt, ie, $t, Je, Ve, Me, Nt, Rt, ut, z, or, Mn, lr, Dr, fr, ji;
const _r = class _r {
  constructor() {
    b(this, z);
    me(this, "id", Fi++);
    /**
     * The current values of any signals that are updated in this batch.
     * Tuple format: [value, is_derived] (note: is_derived is false for deriveds, too, if they were overridden via assignment)
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Value, [any, boolean]>}
     */
    me(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any signals (sources and deriveds) that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Value, any>}
     */
    me(this, "previous", /* @__PURE__ */ new Map());
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
    b(this, Xt, null);
    /**
     * The root effects that need to be flushed
     * @type {Effect[]}
     */
    b(this, ie, []);
    /**
     * Effects created while this batch was active.
     * @type {Effect[]}
     */
    b(this, $t, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    b(this, Je, /* @__PURE__ */ new Set());
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
    b(this, Nt, /* @__PURE__ */ new Set());
    me(this, "is_fork", !1);
    b(this, Rt, !1);
    /** @type {Set<Batch>} */
    b(this, ut, /* @__PURE__ */ new Set());
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(t) {
    a(this, Me).has(t) || a(this, Me).set(t, { d: [], m: [] }), a(this, Nt).delete(t);
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
        F(i, H), r(i);
      for (i of n.m)
        F(i, Oe), r(i);
    }
    a(this, Nt).add(t);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Value} source
   * @param {any} value
   * @param {boolean} [is_derived]
   */
  capture(t, r, n = !1) {
    t.v !== q && !this.previous.has(t) && this.previous.set(t, t.v), (t.f & Qe) === 0 && (this.current.set(t, [r, n]), ke?.set(t, r)), this.is_fork || (t.v = r);
  }
  activate() {
    C = this;
  }
  deactivate() {
    C = null, ke = null;
  }
  flush() {
    try {
      Nr = !0, C = this, N(this, z, lr).call(this);
    } finally {
      rn = 0, Ir = null, Tt = null, ar = null, Nr = !1, C = null, ke = null, ht.clear();
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
    a(this, Rt) || n || (E(this, Rt, !0), Ct(() => {
      E(this, Rt, !1), this.flush();
    }));
  }
  /**
   * @param {Set<Effect>} dirty_effects
   * @param {Set<Effect>} maybe_dirty_effects
   */
  transfer_effects(t, r) {
    for (const n of t)
      a(this, Je).add(n);
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
    return (a(this, Xt) ?? E(this, Xt, gn())).promise;
  }
  static ensure() {
    if (C === null) {
      const t = C = new _r();
      Nr || (it.add(C), Ct(() => {
        C === t && t.flush();
      }));
    }
    return C;
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
    if (Ir = t, t.b?.is_pending && (t.f & (Wt | mr | bn)) !== 0 && (t.f & zt) === 0) {
      t.b.defer_effect(t);
      return;
    }
    for (var r = t; r.parent !== null; ) {
      r = r.parent;
      var n = r.f;
      if (Tt !== null && r === T && (S === null || (S.f & Y) === 0))
        return;
      if ((n & (Xe | Re)) !== 0) {
        if ((n & V) === 0)
          return;
        r.f ^= V;
      }
    }
    a(this, ie).push(r);
  }
};
Mt = new WeakMap(), At = new WeakMap(), ft = new WeakMap(), Le = new WeakMap(), Ce = new WeakMap(), Xt = new WeakMap(), ie = new WeakMap(), $t = new WeakMap(), Je = new WeakMap(), Ve = new WeakMap(), Me = new WeakMap(), Nt = new WeakMap(), Rt = new WeakMap(), ut = new WeakMap(), z = new WeakSet(), or = function() {
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
}, lr = function() {
  var l;
  if (rn++ > 1e3 && (it.delete(this), zi()), !N(this, z, or).call(this)) {
    for (const o of a(this, Je))
      a(this, Ve).delete(o), F(o, H), this.schedule(o);
    for (const o of a(this, Ve))
      F(o, Oe), this.schedule(o);
  }
  const t = a(this, ie);
  E(this, ie, []), this.apply();
  var r = Tt = [], n = [], i = ar = [];
  for (const o of t)
    try {
      N(this, z, Dr).call(this, o, r, n);
    } catch (u) {
      throw Rn(o), u;
    }
  if (C = null, i.length > 0) {
    var s = _r.ensure();
    for (const o of i)
      s.schedule(o);
  }
  if (Tt = null, ar = null, N(this, z, or).call(this) || N(this, z, Mn).call(this)) {
    N(this, z, fr).call(this, n), N(this, z, fr).call(this, r);
    for (const [o, u] of a(this, Me))
      Nn(o, u);
  } else {
    a(this, Le).size === 0 && it.delete(this), a(this, Je).clear(), a(this, Ve).clear();
    for (const o of a(this, Mt)) o(this);
    a(this, Mt).clear(), nn(n), nn(r), a(this, Xt)?.resolve();
  }
  var f = (
    /** @type {Batch | null} */
    /** @type {unknown} */
    C
  );
  if (a(this, ie).length > 0) {
    const o = f ?? (f = this);
    a(o, ie).push(...a(this, ie).filter((u) => !a(o, ie).includes(u)));
  }
  f !== null && (it.add(f), N(l = f, z, lr).call(l));
}, /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
Dr = function(t, r, n) {
  t.f ^= V;
  for (var i = t.first; i !== null; ) {
    var s = i.f, f = (s & (Re | Xe)) !== 0, l = f && (s & V) !== 0, o = l || (s & K) !== 0 || a(this, Me).has(i);
    if (!o && i.fn !== null) {
      f ? i.f ^= V : (s & Wt) !== 0 ? r.push(i) : ir(i) && ((s & Ne) !== 0 && a(this, Ve).add(i), jt(i));
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
    Cn(t[r], a(this, Je), a(this, Ve));
}, ji = function() {
  var d, h, p;
  for (const v of it) {
    var t = v.id < this.id, r = [];
    for (const [c, [y, w]] of this.current) {
      if (v.current.has(c)) {
        var n = (
          /** @type {[any, boolean]} */
          v.current.get(c)[0]
        );
        if (t && y !== n)
          v.current.set(c, [y, w]);
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
        for (const c of a(this, Nt))
          v.unskip_effect(c, (y) => {
            var w;
            (y.f & (Ne | Qt)) !== 0 ? v.schedule(y) : N(w = v, z, fr).call(w, [y]);
          });
      v.activate();
      var s = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Map();
      for (var l of r)
        An(l, i, s, f);
      f = /* @__PURE__ */ new Map();
      var o = [...v.current.keys()].filter(
        (c) => this.current.has(c) ? (
          /** @type {[any, boolean]} */
          this.current.get(c)[0] !== c
        ) : !0
      );
      for (const c of a(this, $t))
        (c.f & (he | K | Or)) === 0 && Hr(c, o, f) && ((c.f & (Qt | Ne)) !== 0 ? (F(c, H), v.schedule(c)) : a(v, Je).add(c));
      if (a(v, ie).length > 0) {
        v.apply();
        for (var u of a(v, ie))
          N(d = v, z, Dr).call(d, u, [], []);
        E(v, ie, []);
      }
      v.deactivate();
    }
  }
  for (const v of it)
    a(v, ut).has(this) && (a(v, ut).delete(this), a(v, ut).size === 0 && !N(h = v, z, or).call(h) && (v.activate(), N(p = v, z, lr).call(p)));
};
let bt = _r;
function zi() {
  try {
    xi();
  } catch (e) {
    We(e, Ir);
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
          for (let l = s.length - 1; l >= 0; l--) {
            const o = s[l];
            (o.f & (he | K)) === 0 && jt(o);
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
      (s & Y) !== 0 ? An(
        /** @type {Derived} */
        i,
        t,
        r,
        n
      ) : (s & (Qt | Ne)) !== 0 && (s & H) === 0 && Hr(i, t, n) && (F(i, H), Yr(
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
      if (It.call(t, i))
        return !0;
      if ((i.f & Y) !== 0 && Hr(
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
  C.schedule(e);
}
function Nn(e, t) {
  if (!((e.f & Re) !== 0 && (e.f & V) !== 0)) {
    (e.f & H) !== 0 ? t.d.push(e) : (e.f & Oe) !== 0 && t.m.push(e), F(e, V);
    for (var r = e.first; r !== null; )
      Nn(r, t), r = r.next;
  }
}
function Rn(e) {
  F(e, V);
  for (var t = e.first; t !== null; )
    Rn(t), t = t.next;
}
function Li(e) {
  let t = 0, r = yt(0), n;
  return () => {
    Kr() && (_(r), fs(() => (t === 0 && (n = hs(() => e(() => Kt(r)))), t += 1, () => {
      Ct(() => {
        t -= 1, t === 0 && (n?.(), n = void 0, Kt(r));
      });
    })));
  };
}
var Vi = Dt | Lt;
function Bi(e, t, r, n) {
  new qi(e, t, r, n);
}
var fe, qr, ue, ct, X, ce, J, se, Be, dt, Ke, Ot, er, tr, qe, gr, P, Ui, Hi, Yi, Pr, ur, cr, Fr, jr;
class qi {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(t, r, n, i) {
    b(this, P);
    /** @type {Boundary | null} */
    me(this, "parent");
    me(this, "is_pending", !1);
    /**
     * API-level transformError transform function. Transforms errors before they reach the `failed` snippet.
     * Inherited from parent boundary, or defaults to identity.
     * @type {(error: unknown) => unknown}
     */
    me(this, "transform_error");
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
    b(this, J, null);
    /** @type {Effect | null} */
    b(this, se, null);
    /** @type {DocumentFragment | null} */
    b(this, Be, null);
    b(this, dt, 0);
    b(this, Ke, 0);
    b(this, Ot, !1);
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
    b(this, gr, Li(() => (E(this, qe, yt(a(this, dt))), () => {
      E(this, qe, null);
    })));
    E(this, fe, t), E(this, ue, r), E(this, ct, (s) => {
      var f = (
        /** @type {Effect} */
        T
      );
      f.b = this, f.f |= Rr, n(s);
    }), this.parent = /** @type {Effect} */
    T.b, this.transform_error = i ?? this.parent?.transform_error ?? ((s) => s), E(this, X, Wr(() => {
      N(this, P, Pr).call(this);
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
    N(this, P, Fr).call(this, t, r), E(this, dt, a(this, dt) + t), !(!a(this, qe) || a(this, Ot)) && (E(this, Ot, !0), Ct(() => {
      E(this, Ot, !1), a(this, qe) && Ft(a(this, qe), a(this, dt));
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
    C?.is_fork ? (a(this, ce) && C.skip_effect(a(this, ce)), a(this, J) && C.skip_effect(a(this, J)), a(this, se) && C.skip_effect(a(this, se)), C.on_fork_commit(() => {
      N(this, P, jr).call(this, t);
    })) : N(this, P, jr).call(this, t);
  }
}
fe = new WeakMap(), qr = new WeakMap(), ue = new WeakMap(), ct = new WeakMap(), X = new WeakMap(), ce = new WeakMap(), J = new WeakMap(), se = new WeakMap(), Be = new WeakMap(), dt = new WeakMap(), Ke = new WeakMap(), Ot = new WeakMap(), er = new WeakMap(), tr = new WeakMap(), qe = new WeakMap(), gr = new WeakMap(), P = new WeakSet(), Ui = function() {
  try {
    E(this, ce, de(() => a(this, ct).call(this, a(this, fe))));
  } catch (t) {
    this.error(t);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
Hi = function(t) {
  const r = a(this, ue).failed;
  r && E(this, se, de(() => {
    r(
      a(this, fe),
      () => t,
      () => () => {
      }
    );
  }));
}, Yi = function() {
  const t = a(this, ue).pending;
  t && (this.is_pending = !0, E(this, J, de(() => t(a(this, fe)))), Ct(() => {
    var r = E(this, Be, document.createDocumentFragment()), n = Ze();
    r.append(n), E(this, ce, N(this, P, cr).call(this, () => de(() => a(this, ct).call(this, n)))), a(this, Ke) === 0 && (a(this, fe).before(r), E(this, Be, null), pt(
      /** @type {Effect} */
      a(this, J),
      () => {
        E(this, J, null);
      }
    ), N(this, P, ur).call(
      this,
      /** @type {Batch} */
      C
    ));
  }));
}, Pr = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), E(this, Ke, 0), E(this, dt, 0), E(this, ce, de(() => {
      a(this, ct).call(this, a(this, fe));
    })), a(this, Ke) > 0) {
      var t = E(this, Be, document.createDocumentFragment());
      Xr(a(this, ce), t);
      const r = (
        /** @type {(anchor: Node) => void} */
        a(this, ue).pending
      );
      E(this, J, de(() => r(a(this, fe))));
    } else
      N(this, P, ur).call(
        this,
        /** @type {Batch} */
        C
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
  var r = T, n = S, i = Se;
  Ie(a(this, X)), _e(a(this, X)), Pt(a(this, X).ctx);
  try {
    return bt.ensure(), t();
  } catch (s) {
    return Sn(s), null;
  } finally {
    Ie(r), _e(n), Pt(i);
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
    this.parent && N(n = this.parent, P, Fr).call(n, t, r);
    return;
  }
  E(this, Ke, a(this, Ke) + t), a(this, Ke) === 0 && (N(this, P, ur).call(this, r), a(this, J) && pt(a(this, J), () => {
    E(this, J, null);
  }), a(this, Be) && (a(this, fe).before(a(this, Be)), E(this, Be, null)));
}, /**
 * @param {unknown} error
 */
jr = function(t) {
  a(this, ce) && (ee(a(this, ce)), E(this, ce, null)), a(this, J) && (ee(a(this, J)), E(this, J, null)), a(this, se) && (ee(a(this, se)), E(this, se, null));
  var r = a(this, ue).onerror;
  let n = a(this, ue).failed;
  var i = !1, s = !1;
  const f = () => {
    if (i) {
      Oi();
      return;
    }
    i = !0, s && Si(), a(this, se) !== null && pt(a(this, se), () => {
      E(this, se, null);
    }), N(this, P, cr).call(this, () => {
      N(this, P, Pr).call(this);
    });
  }, l = (o) => {
    try {
      s = !0, r?.(o, f), s = !1;
    } catch (u) {
      We(u, a(this, X) && a(this, X).parent);
    }
    n && E(this, se, N(this, P, cr).call(this, () => {
      try {
        return de(() => {
          var u = (
            /** @type {Effect} */
            T
          );
          u.b = this, u.f |= Rr, n(
            a(this, fe),
            () => o,
            () => f
          );
        });
      } catch (u) {
        return We(
          u,
          /** @type {Effect} */
          a(this, X).parent
        ), null;
      }
    }));
  };
  Ct(() => {
    var o;
    try {
      o = this.transform_error(t);
    } catch (u) {
      We(u, a(this, X) && a(this, X).parent);
      return;
    }
    o !== null && typeof o == "object" && typeof /** @type {any} */
    o.then == "function" ? o.then(
      l,
      /** @param {unknown} e */
      (u) => We(u, a(this, X) && a(this, X).parent)
    ) : l(o);
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
    T
  ), l = Ji(), o = s.length === 1 ? s[0].promise : s.length > 1 ? Promise.all(s.map((p) => p.promise)) : null;
  function u(p) {
    l();
    try {
      n(p);
    } catch (v) {
      (f.f & he) === 0 && We(v, f);
    }
    hr();
  }
  if (r.length === 0) {
    o.then(() => u(t.map(i)));
    return;
  }
  var d = On();
  function h() {
    Promise.all(r.map((p) => /* @__PURE__ */ Ki(p))).then((p) => u([...t.map(i), ...p])).catch((p) => We(p, f)).finally(() => d());
  }
  o ? o.then(() => {
    l(), h(), hr();
  }) : h();
}
function Ji() {
  var e = (
    /** @type {Effect} */
    T
  ), t = S, r = Se, n = (
    /** @type {Batch} */
    C
  );
  return function(s = !0) {
    Ie(e), _e(t), Pt(r), s && (e.f & he) === 0 && (n?.activate(), n?.apply());
  };
}
function hr(e = !0) {
  Ie(null), _e(null), Pt(null), e && C?.deactivate();
}
function On() {
  var e = (
    /** @type {Effect} */
    T
  ), t = (
    /** @type {Boundary} */
    e.b
  ), r = (
    /** @type {Batch} */
    C
  ), n = t.is_rendered();
  return t.update_pending_count(1, r), r.increment(n, e), (i = !1) => {
    t.update_pending_count(-1, r), r.decrement(n, e, i);
  };
}
// @__NO_SIDE_EFFECTS__
function Gr(e) {
  var t = Y | H;
  return T !== null && (T.f |= Lt), {
    ctx: Se,
    deps: null,
    effects: null,
    equals: mn,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      q
    ),
    wv: 0,
    parent: T,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function Ki(e, t, r) {
  let n = (
    /** @type {Effect | null} */
    T
  );
  n === null && yi();
  var i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), s = yt(
    /** @type {V} */
    q
  ), f = !S, l = /* @__PURE__ */ new Map();
  return ls(() => {
    var o = (
      /** @type {Effect} */
      T
    ), u = gn();
    i = u.promise;
    try {
      Promise.resolve(e()).then(u.resolve, u.reject).finally(hr);
    } catch (v) {
      u.reject(v), hr();
    }
    var d = (
      /** @type {Batch} */
      C
    );
    if (f) {
      if ((o.f & zt) !== 0)
        var h = On();
      if (
        /** @type {Boundary} */
        n.b.is_rendered()
      )
        l.get(d)?.reject(ze), l.delete(d);
      else {
        for (const v of l.values())
          v.reject(ze);
        l.clear();
      }
      l.set(d, u);
    }
    const p = (v, c = void 0) => {
      if (h) {
        var y = c === ze;
        h(y);
      }
      if (!(c === ze || (o.f & he) !== 0)) {
        if (d.activate(), c)
          s.f |= Qe, Ft(s, c);
        else {
          (s.f & Qe) !== 0 && (s.f ^= Qe), Ft(s, v);
          for (const [w, O] of l) {
            if (l.delete(w), w === d) break;
            O.reject(ze);
          }
        }
        d.deactivate();
      }
    };
    u.promise.then(p, (v) => p(null, v || "unknown"));
  }), ss(() => {
    for (const o of l.values())
      o.reject(ze);
  }), new Promise((o) => {
    function u(d) {
      function h() {
        d === i ? o(s) : u(i);
      }
      d.then(h, h);
    }
    u(i);
  });
}
// @__NO_SIDE_EFFECTS__
function Wi(e) {
  const t = /* @__PURE__ */ Gr(e);
  return Gn(t), t;
}
// @__NO_SIDE_EFFECTS__
function Qi(e) {
  const t = /* @__PURE__ */ Gr(e);
  return t.equals = xn, t;
}
function Zi(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var r = 0; r < t.length; r += 1)
      ee(
        /** @type {Effect} */
        t[r]
      );
  }
}
function Jr(e) {
  var t, r = T, n = e.parent;
  if (!mt && n !== null && (n.f & (he | K)) !== 0)
    return Ri(), e.v;
  Ie(n);
  try {
    e.f &= ~gt, Zi(e), t = Qn(e);
  } finally {
    Ie(r);
  }
  return t;
}
function In(e) {
  var t = Jr(e);
  if (!e.equals(t) && (e.wv = Kn(), (!C?.is_fork || e.deps === null) && (C !== null ? C.capture(e, t, !0) : e.v = t, e.deps === null))) {
    F(e, V);
    return;
  }
  mt || (ke !== null ? (Kr() || C?.is_fork) && ke.set(e, t) : Ur(e));
}
function Xi(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      (t.teardown || t.ac) && (t.teardown?.(), t.ac?.abort(ze), t.teardown = hi, t.ac = null, Zt(t, 0), Qr(t));
}
function Dn(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      t.teardown && jt(t);
}
let zr = /* @__PURE__ */ new Set();
const ht = /* @__PURE__ */ new Map();
let Pn = !1;
function yt(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: mn,
    rv: 0,
    wv: 0
  };
  return r;
}
// @__NO_SIDE_EFFECTS__
function U(e, t) {
  const r = yt(e);
  return Gn(r), r;
}
// @__NO_SIDE_EFFECTS__
function $i(e, t = !1, r = !0) {
  const n = yt(e);
  return t || (n.equals = xn), n;
}
function g(e, t, r = !1) {
  S !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Ee || (S.f & Or) !== 0) && En() && (S.f & (Y | Ne | Qt | Or)) !== 0 && (pe === null || !It.call(pe, e)) && Ei();
  let n = r ? Yt(t) : t;
  return Ft(e, n, ar);
}
function Ft(e, t, r = null) {
  if (!e.equals(t)) {
    ht.set(e, mt ? t : e.v);
    var n = bt.ensure();
    if (n.capture(e, t), (e.f & Y) !== 0) {
      const i = (
        /** @type {Derived} */
        e
      );
      (e.f & H) !== 0 && Jr(i), ke === null && Ur(i);
    }
    e.wv = Kn(), Fn(e, H, r), T !== null && (T.f & V) !== 0 && (T.f & (Re | Xe)) === 0 && (le === null ? ds([e]) : le.push(e)), !n.is_fork && zr.size > 0 && !Pn && es();
  }
  return t;
}
function es() {
  Pn = !1;
  for (const e of zr)
    (e.f & V) !== 0 && F(e, Oe), ir(e) && jt(e);
  zr.clear();
}
function Kt(e) {
  g(e, e.v + 1);
}
function Fn(e, t, r) {
  var n = e.reactions;
  if (n !== null)
    for (var i = n.length, s = 0; s < i; s++) {
      var f = n[s], l = f.f, o = (l & H) === 0;
      if (o && F(f, t), (l & Y) !== 0) {
        var u = (
          /** @type {Derived} */
          f
        );
        ke?.delete(u), (l & gt) === 0 && (l & ve && (T === null || (T.f & vr) === 0) && (f.f |= gt), Fn(u, Oe, r));
      } else if (o) {
        var d = (
          /** @type {Effect} */
          f
        );
        (l & Ne) !== 0 && je !== null && je.add(d), r !== null ? r.push(d) : Yr(d);
      }
    }
}
function Yt(e) {
  if (typeof e != "object" || e === null || Ar in e)
    return e;
  const t = _n(e);
  if (t !== di && t !== vi)
    return e;
  var r = /* @__PURE__ */ new Map(), n = pn(e), i = /* @__PURE__ */ U(0), s = _t, f = (l) => {
    if (_t === s)
      return l();
    var o = S, u = _t;
    _e(null), on(s);
    var d = l();
    return _e(o), on(u), d;
  };
  return n && r.set("length", /* @__PURE__ */ U(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(l, o, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && wi();
        var d = r.get(o);
        return d === void 0 ? f(() => {
          var h = /* @__PURE__ */ U(u.value);
          return r.set(o, h), h;
        }) : g(d, u.value, !0), !0;
      },
      deleteProperty(l, o) {
        var u = r.get(o);
        if (u === void 0) {
          if (o in l) {
            const d = f(() => /* @__PURE__ */ U(q));
            r.set(o, d), Kt(i);
          }
        } else
          g(u, q), Kt(i);
        return !0;
      },
      get(l, o, u) {
        if (o === Ar)
          return e;
        var d = r.get(o), h = o in l;
        if (d === void 0 && (!h || Jt(l, o)?.writable) && (d = f(() => {
          var v = Yt(h ? l[o] : q), c = /* @__PURE__ */ U(v);
          return c;
        }), r.set(o, d)), d !== void 0) {
          var p = _(d);
          return p === q ? void 0 : p;
        }
        return Reflect.get(l, o, u);
      },
      getOwnPropertyDescriptor(l, o) {
        var u = Reflect.getOwnPropertyDescriptor(l, o);
        if (u && "value" in u) {
          var d = r.get(o);
          d && (u.value = _(d));
        } else if (u === void 0) {
          var h = r.get(o), p = h?.v;
          if (h !== void 0 && p !== q)
            return {
              enumerable: !0,
              configurable: !0,
              value: p,
              writable: !0
            };
        }
        return u;
      },
      has(l, o) {
        if (o === Ar)
          return !0;
        var u = r.get(o), d = u !== void 0 && u.v !== q || Reflect.has(l, o);
        if (u !== void 0 || T !== null && (!d || Jt(l, o)?.writable)) {
          u === void 0 && (u = f(() => {
            var p = d ? Yt(l[o]) : q, v = /* @__PURE__ */ U(p);
            return v;
          }), r.set(o, u));
          var h = _(u);
          if (h === q)
            return !1;
        }
        return d;
      },
      set(l, o, u, d) {
        var h = r.get(o), p = o in l;
        if (n && o === "length")
          for (var v = u; v < /** @type {Source<number>} */
          h.v; v += 1) {
            var c = r.get(v + "");
            c !== void 0 ? g(c, q) : v in l && (c = f(() => /* @__PURE__ */ U(q)), r.set(v + "", c));
          }
        if (h === void 0)
          (!p || Jt(l, o)?.writable) && (h = f(() => /* @__PURE__ */ U(void 0)), g(h, Yt(u)), r.set(o, h));
        else {
          p = h.v !== q;
          var y = f(() => Yt(u));
          g(h, y);
        }
        var w = Reflect.getOwnPropertyDescriptor(l, o);
        if (w?.set && w.set.call(d, u), !p) {
          if (n && typeof o == "string") {
            var O = (
              /** @type {Source<number>} */
              r.get("length")
            ), M = Number(o);
            Number.isInteger(M) && M >= O.v && g(O, M + 1);
          }
          Kt(i);
        }
        return !0;
      },
      ownKeys(l) {
        _(i);
        var o = Reflect.ownKeys(l).filter((h) => {
          var p = r.get(h);
          return p === void 0 || p.v !== q;
        });
        for (var [u, d] of r)
          d.v !== q && !(u in l) && o.push(u);
        return o;
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
    zn = Jt(t, "firstChild").get, Ln = Jt(t, "nextSibling").get, en(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), en(r) && (r.__t = void 0);
  }
}
function Ze(e = "") {
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
function xr(e) {
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
    /* @__PURE__ */ xr(n);
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
    document.createElementNS(yn, e, void 0)
  );
}
function Bn(e) {
  var t = S, r = T;
  _e(null), Ie(null);
  try {
    return e();
  } finally {
    _e(t), Ie(r);
  }
}
function is(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function $e(e, t) {
  var r = T;
  r !== null && (r.f & K) !== 0 && (e |= K);
  var n = {
    ctx: Se,
    deps: null,
    nodes: null,
    f: e | H | ve,
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
  C?.register_created_effect(n);
  var i = n;
  if ((e & Wt) !== 0)
    Tt !== null ? Tt.push(n) : bt.ensure().schedule(n);
  else if (t !== null) {
    try {
      jt(n);
    } catch (f) {
      throw ee(n), f;
    }
    i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && // either `null`, or a singular child
    (i.f & Lt) === 0 && (i = i.first, (e & Ne) !== 0 && (e & Dt) !== 0 && i !== null && (i.f |= Dt));
  }
  if (i !== null && (i.parent = r, r !== null && is(i, r), S !== null && (S.f & Y) !== 0 && (e & Xe) === 0)) {
    var s = (
      /** @type {Derived} */
      S
    );
    (s.effects ?? (s.effects = [])).push(i);
  }
  return n;
}
function Kr() {
  return S !== null && !Ee;
}
function ss(e) {
  const t = $e(mr, null);
  return F(t, V), t.teardown = e, t;
}
function as(e) {
  return $e(Wt | gi, e);
}
function os(e) {
  bt.ensure();
  const t = $e(Xe | Lt, e);
  return (r = {}) => new Promise((n) => {
    r.outro ? pt(t, () => {
      ee(t), n(void 0);
    }) : (ee(t), n(void 0));
  });
}
function ls(e) {
  return $e(Qt | Lt, e);
}
function fs(e, t = 0) {
  return $e(mr | t, e);
}
function xe(e, t = [], r = [], n = []) {
  Gi(n, t, r, (i) => {
    $e(mr, () => e(...i.map(_)));
  });
}
function Wr(e, t = 0) {
  var r = $e(Ne | t, e);
  return r;
}
function de(e) {
  return $e(Re | Lt, e);
}
function qn(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = mt, n = S;
    an(!0), _e(null);
    try {
      t.call(null);
    } finally {
      an(r), _e(n);
    }
  }
}
function Qr(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    const i = r.ac;
    i !== null && Bn(() => {
      i.abort(ze);
    });
    var n = r.next;
    (r.f & Xe) !== 0 ? r.parent = null : ee(r, t), r = n;
  }
}
function us(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & Re) === 0 && ee(t), t = r;
  }
}
function ee(e, t = !0) {
  var r = !1;
  (t || (e.f & _i) !== 0) && e.nodes !== null && e.nodes.end !== null && (cs(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), r = !0), F(e, tn), Qr(e, t && !r), Zt(e, 0);
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
    var r = e === t ? null : /* @__PURE__ */ xr(e);
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
    r && ee(e), t && t();
  }, s = n.length;
  if (s > 0) {
    var f = () => --s || i();
    for (var l of n)
      l.out(f);
  } else
    i();
}
function Hn(e, t, r) {
  if ((e.f & K) === 0) {
    e.f ^= K;
    var n = e.nodes && e.nodes.t;
    if (n !== null)
      for (const l of n)
        (l.is_global || r) && t.push(l);
    for (var i = e.first; i !== null; ) {
      var s = i.next;
      if ((i.f & Xe) === 0) {
        var f = (i.f & Dt) !== 0 || // If this is a branch effect without a block effect parent,
        // it means the parent block effect was pruned. In that case,
        // transparency information was transferred to the branch effect.
        (i.f & Re) !== 0 && (e.f & Ne) !== 0;
        Hn(i, t, f ? r : !1);
      }
      i = s;
    }
  }
}
function Zr(e) {
  Yn(e, !0);
}
function Yn(e, t) {
  if ((e.f & K) !== 0) {
    e.f ^= K, (e.f & V) === 0 && (F(e, H), bt.ensure().schedule(e));
    for (var r = e.first; r !== null; ) {
      var n = r.next, i = (r.f & Dt) !== 0 || (r.f & Re) !== 0;
      Yn(r, i ? t : !1), r = n;
    }
    var s = e.nodes && e.nodes.t;
    if (s !== null)
      for (const f of s)
        (f.is_global || t) && f.in();
  }
}
function Xr(e, t) {
  if (e.nodes)
    for (var r = e.nodes.start, n = e.nodes.end; r !== null; ) {
      var i = r === n ? null : /* @__PURE__ */ xr(r);
      t.append(r), r = i;
    }
}
let dr = !1, mt = !1;
function an(e) {
  mt = e;
}
let S = null, Ee = !1;
function _e(e) {
  S = e;
}
let T = null;
function Ie(e) {
  T = e;
}
let pe = null;
function Gn(e) {
  S !== null && (pe === null ? pe = [e] : pe.push(e));
}
let $ = null, ne = 0, le = null;
function ds(e) {
  le = e;
}
let Jn = 1, ot = 0, _t = ot;
function on(e) {
  _t = e;
}
function Kn() {
  return ++Jn;
}
function ir(e) {
  var t = e.f;
  if ((t & H) !== 0)
    return !0;
  if (t & Y && (e.f &= ~gt), (t & Oe) !== 0) {
    for (var r = (
      /** @type {Value[]} */
      e.deps
    ), n = r.length, i = 0; i < n; i++) {
      var s = r[i];
      if (ir(
        /** @type {Derived} */
        s
      ) && In(
        /** @type {Derived} */
        s
      ), s.wv > e.wv)
        return !0;
    }
    (t & ve) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    ke === null && F(e, V);
  }
  return !1;
}
function Wn(e, t, r = !0) {
  var n = e.reactions;
  if (n !== null && !(pe !== null && It.call(pe, e)))
    for (var i = 0; i < n.length; i++) {
      var s = n[i];
      (s.f & Y) !== 0 ? Wn(
        /** @type {Derived} */
        s,
        t,
        !1
      ) : t === s && (r ? F(s, H) : (s.f & V) !== 0 && F(s, Oe), Yr(
        /** @type {Effect} */
        s
      ));
    }
}
function Qn(e) {
  var y;
  var t = $, r = ne, n = le, i = S, s = pe, f = Se, l = Ee, o = _t, u = e.f;
  $ = /** @type {null | Value[]} */
  null, ne = 0, le = null, S = (u & (Re | Xe)) === 0 ? e : null, pe = null, Pt(e.ctx), Ee = !1, _t = ++ot, e.ac !== null && (Bn(() => {
    e.ac.abort(ze);
  }), e.ac = null);
  try {
    e.f |= vr;
    var d = (
      /** @type {Function} */
      e.fn
    ), h = d();
    e.f |= zt;
    var p = e.deps, v = C?.is_fork;
    if ($ !== null) {
      var c;
      if (v || Zt(e, ne), p !== null && ne > 0)
        for (p.length = ne + $.length, c = 0; c < $.length; c++)
          p[ne + c] = $[c];
      else
        e.deps = p = $;
      if (Kr() && (e.f & ve) !== 0)
        for (c = ne; c < p.length; c++)
          ((y = p[c]).reactions ?? (y.reactions = [])).push(e);
    } else !v && p !== null && ne < p.length && (Zt(e, ne), p.length = ne);
    if (En() && le !== null && !Ee && p !== null && (e.f & (Y | Oe | H)) === 0)
      for (c = 0; c < /** @type {Source[]} */
      le.length; c++)
        Wn(
          le[c],
          /** @type {Effect} */
          e
        );
    if (i !== null && i !== e) {
      if (ot++, i.deps !== null)
        for (let w = 0; w < r; w += 1)
          i.deps[w].rv = ot;
      if (t !== null)
        for (const w of t)
          w.rv = ot;
      le !== null && (n === null ? n = le : n.push(.../** @type {Source[]} */
      le));
    }
    return (e.f & Qe) !== 0 && (e.f ^= Qe), h;
  } catch (w) {
    return Sn(w);
  } finally {
    e.f ^= vr, $ = t, ne = r, le = n, S = i, pe = s, Pt(f), Ee = l, _t = o;
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
  if (r === null && (t.f & Y) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  ($ === null || !It.call($, t))) {
    var s = (
      /** @type {Derived} */
      t
    );
    (s.f & ve) !== 0 && (s.f ^= ve, s.f &= ~gt), s.v !== q && Ur(s), Xi(s), Zt(s, 0);
  }
}
function Zt(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var n = t; n < r.length; n++)
      vs(e, r[n]);
}
function jt(e) {
  var t = e.f;
  if ((t & he) === 0) {
    F(e, V);
    var r = T, n = dr;
    T = e, dr = !0;
    try {
      (t & (Ne | bn)) !== 0 ? us(e) : Qr(e), qn(e);
      var i = Qn(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = Jn;
      var s;
    } finally {
      dr = n, T = r;
    }
  }
}
function _(e) {
  var t = e.f, r = (t & Y) !== 0;
  if (S !== null && !Ee) {
    var n = T !== null && (T.f & he) !== 0;
    if (!n && (pe === null || !It.call(pe, e))) {
      var i = S.deps;
      if ((S.f & vr) !== 0)
        e.rv < ot && (e.rv = ot, $ === null && i !== null && i[ne] === e ? ne++ : $ === null ? $ = [e] : $.push(e));
      else {
        (S.deps ?? (S.deps = [])).push(e);
        var s = e.reactions;
        s === null ? e.reactions = [S] : It.call(s, S) || s.push(S);
      }
    }
  }
  if (mt && ht.has(e))
    return ht.get(e);
  if (r) {
    var f = (
      /** @type {Derived} */
      e
    );
    if (mt) {
      var l = f.v;
      return ((f.f & V) === 0 && f.reactions !== null || Xn(f)) && (l = Jr(f)), ht.set(f, l), l;
    }
    var o = (f.f & ve) === 0 && !Ee && S !== null && (dr || (S.f & ve) !== 0), u = (f.f & zt) === 0;
    ir(f) && (o && (f.f |= ve), In(f)), o && !u && (Dn(f), Zn(f));
  }
  if (ke?.has(e))
    return ke.get(e);
  if ((e.f & Qe) !== 0)
    throw e.v;
  return e.v;
}
function Zn(e) {
  if (e.f |= ve, e.deps !== null)
    for (const t of e.deps)
      (t.reactions ?? (t.reactions = [])).push(e), (t.f & Y) !== 0 && (t.f & ve) === 0 && (Dn(
        /** @type {Derived} */
        t
      ), Zn(
        /** @type {Derived} */
        t
      ));
}
function Xn(e) {
  if (e.v === q) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (ht.has(t) || (t.f & Y) !== 0 && Xn(
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
const lt = Symbol("events"), $n = /* @__PURE__ */ new Set(), Lr = /* @__PURE__ */ new Set();
function st(e, t, r) {
  (t[lt] ?? (t[lt] = {}))[e] = r;
}
function gs(e) {
  for (var t = 0; t < e.length; t++)
    $n.add(e[t]);
  for (var r of Lr)
    r(e);
}
let ln = null;
function fn(e) {
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), n = e.type, i = e.composedPath?.() || [], s = (
    /** @type {null | Element} */
    i[0] || e.target
  );
  ln = e;
  var f = 0, l = ln === e && e[lt];
  if (l) {
    var o = i.indexOf(l);
    if (o !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e[lt] = t;
      return;
    }
    var u = i.indexOf(t);
    if (u === -1)
      return;
    o <= u && (f = o);
  }
  if (s = /** @type {Element} */
  i[f] || e.target, s !== t) {
    ui(e, "currentTarget", {
      configurable: !0,
      get() {
        return s || r;
      }
    });
    var d = S, h = T;
    _e(null), Ie(null);
    try {
      for (var p, v = []; s !== null; ) {
        var c = s.assignedSlot || s.parentNode || /** @type {any} */
        s.host || null;
        try {
          var y = s[lt]?.[n];
          y != null && (!/** @type {any} */
          s.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === s) && y.call(s, e);
        } catch (w) {
          p ? v.push(w) : p = w;
        }
        if (e.cancelBubble || c === t || c === null)
          break;
        s = c;
      }
      if (p) {
        for (let w of v)
          queueMicrotask(() => {
            throw w;
          });
        throw p;
      }
    } finally {
      e[lt] = t, delete e.currentTarget, _e(d), Ie(h);
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
function ys(e) {
  return (
    /** @type {string} */
    bs?.createHTML(e) ?? e
  );
}
function ei(e) {
  var t = ns("template");
  return t.innerHTML = ys(e.replaceAll("<!>", "<!---->")), t.content;
}
function pr(e, t) {
  var r = (
    /** @type {Effect} */
    T
  );
  r.nodes === null && (r.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function B(e, t) {
  var r = (t & Ni) !== 0, n, i = !e.startsWith("<!>");
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
function ms(e, t, r = "svg") {
  var n = !e.startsWith("<!>"), i = (t & Ai) !== 0, s = `<${r}>${n ? e : "<!>" + e}</${r}>`, f;
  return () => {
    if (!f) {
      var l = (
        /** @type {DocumentFragment} */
        ei(s)
      ), o = (
        /** @type {Element} */
        /* @__PURE__ */ at(l)
      );
      if (i)
        for (f = document.createDocumentFragment(); /* @__PURE__ */ at(o); )
          f.appendChild(
            /** @type {TemplateNode} */
            /* @__PURE__ */ at(o)
          );
      else
        f = /** @type {Element} */
        /* @__PURE__ */ at(o);
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
function wr(e, t) {
  return /* @__PURE__ */ ms(e, t, "svg");
}
function un(e = "") {
  {
    var t = Ze(e + "");
    return pr(t, t), t;
  }
}
function R(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function Et(e, t) {
  var r = t == null ? "" : typeof t == "object" ? `${t}` : t;
  r !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = r, e.nodeValue = `${r}`);
}
function xs(e, t) {
  return ws(e, t);
}
const sr = /* @__PURE__ */ new Map();
function ws(e, { target: t, anchor: r, props: n = {}, events: i, context: s, intro: f = !0, transformError: l }) {
  ts();
  var o = void 0, u = os(() => {
    var d = r ?? t.appendChild(Ze());
    Bi(
      /** @type {TemplateNode} */
      d,
      {
        pending: () => {
        }
      },
      (v) => {
        wn({});
        var c = (
          /** @type {ComponentContext} */
          Se
        );
        s && (c.c = s), i && (n.$$events = i), o = e(v, n) || {}, kn();
      },
      l
    );
    var h = /* @__PURE__ */ new Set(), p = (v) => {
      for (var c = 0; c < v.length; c++) {
        var y = v[c];
        if (!h.has(y)) {
          h.add(y);
          var w = _s(y);
          for (const te of [t, document]) {
            var O = sr.get(te);
            O === void 0 && (O = /* @__PURE__ */ new Map(), sr.set(te, O));
            var M = O.get(y);
            M === void 0 ? (te.addEventListener(y, fn, { passive: w }), O.set(y, 1)) : O.set(y, M + 1);
          }
        }
      }
    };
    return p(yr($n)), Lr.add(p), () => {
      for (var v of h)
        for (const w of [t, document]) {
          var c = (
            /** @type {Map<string, number>} */
            sr.get(w)
          ), y = (
            /** @type {number} */
            c.get(v)
          );
          --y == 0 ? (w.removeEventListener(v, fn), c.delete(v), c.size === 0 && sr.delete(w)) : c.set(v, y);
        }
      Lr.delete(p), d !== r && d.parentNode?.removeChild(d);
    };
  });
  return Vr.set(o, u), o;
}
let Vr = /* @__PURE__ */ new WeakMap();
function ks(e, t) {
  const r = Vr.get(e);
  return r ? (Vr.delete(e), r(t)) : Promise.resolve();
}
var we, Ae, ae, vt, rr, nr, br;
class Es {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, r = !0) {
    /** @type {TemplateNode} */
    me(this, "anchor");
    /** @type {Map<Batch, Key>} */
    b(this, we, /* @__PURE__ */ new Map());
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
    b(this, ae, /* @__PURE__ */ new Map());
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
      if (a(this, we).has(t)) {
        var r = (
          /** @type {Key} */
          a(this, we).get(t)
        ), n = a(this, Ae).get(r);
        if (n)
          Zr(n), a(this, vt).delete(r);
        else {
          var i = a(this, ae).get(r);
          i && (a(this, Ae).set(r, i.effect), a(this, ae).delete(r), i.fragment.lastChild.remove(), this.anchor.before(i.fragment), n = i.effect);
        }
        for (const [s, f] of a(this, we)) {
          if (a(this, we).delete(s), s === t)
            break;
          const l = a(this, ae).get(f);
          l && (ee(l.effect), a(this, ae).delete(f));
        }
        for (const [s, f] of a(this, Ae)) {
          if (s === r || a(this, vt).has(s)) continue;
          const l = () => {
            if (Array.from(a(this, we).values()).includes(s)) {
              var u = document.createDocumentFragment();
              Xr(f, u), u.append(Ze()), a(this, ae).set(s, { effect: f, fragment: u });
            } else
              ee(f);
            a(this, vt).delete(s), a(this, Ae).delete(s);
          };
          a(this, rr) || !n ? (a(this, vt).add(s), pt(f, l, !1)) : l();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    b(this, br, (t) => {
      a(this, we).delete(t);
      const r = Array.from(a(this, we).values());
      for (const [n, i] of a(this, ae))
        r.includes(n) || (ee(i.effect), a(this, ae).delete(n));
    });
    this.anchor = t, E(this, rr, r);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, r) {
    var n = (
      /** @type {Batch} */
      C
    ), i = Vn();
    if (r && !a(this, Ae).has(t) && !a(this, ae).has(t))
      if (i) {
        var s = document.createDocumentFragment(), f = Ze();
        s.append(f), a(this, ae).set(t, {
          effect: de(() => r(f)),
          fragment: s
        });
      } else
        a(this, Ae).set(
          t,
          de(() => r(this.anchor))
        );
    if (a(this, we).set(n, t), i) {
      for (const [l, o] of a(this, Ae))
        l === t ? n.unskip_effect(o) : n.skip_effect(o);
      for (const [l, o] of a(this, ae))
        l === t ? n.unskip_effect(o.effect) : n.skip_effect(o.effect);
      n.oncommit(a(this, nr)), n.ondiscard(a(this, br));
    } else
      a(this, nr).call(this, n);
  }
}
we = new WeakMap(), Ae = new WeakMap(), ae = new WeakMap(), vt = new WeakMap(), rr = new WeakMap(), nr = new WeakMap(), br = new WeakMap();
function G(e, t, r = !1) {
  var n = new Es(e), i = r ? Dt : 0;
  function s(f, l) {
    n.ensure(f, l);
  }
  Wr(() => {
    var f = !1;
    t((l, o = 0) => {
      f = !0, s(o, l);
    }), f || s(-1, null);
  }, i);
}
function Ss(e, t) {
  return t;
}
function Ts(e, t, r) {
  for (var n = [], i = t.length, s, f = t.length, l = 0; l < i; l++) {
    let h = t[l];
    pt(
      h,
      () => {
        if (s) {
          if (s.pending.delete(h), s.done.add(h), s.pending.size === 0) {
            var p = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            Br(e, yr(s.done)), p.delete(s), p.size === 0 && (e.outrogroups = null);
          }
        } else
          f -= 1;
      },
      !1
    );
  }
  if (f === 0) {
    var o = n.length === 0 && r !== null;
    if (o) {
      var u = (
        /** @type {Element} */
        r
      ), d = (
        /** @type {Element} */
        u.parentNode
      );
      rs(d), d.append(u), e.items.clear();
    }
    Br(e, t, !o);
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
      for (const l of f)
        n.add(
          /** @type {EachItem} */
          e.items.get(l).e
        );
  }
  for (var i = 0; i < t.length; i++) {
    var s = t[i];
    if (n?.has(s)) {
      s.f |= Ue;
      const f = document.createDocumentFragment();
      Xr(s, f);
    } else
      ee(t[i], r);
  }
}
var cn;
function Cs(e, t, r, n, i, s = null) {
  var f = e, l = /* @__PURE__ */ new Map();
  {
    var o = (
      /** @type {Element} */
      e
    );
    f = o.appendChild(Ze());
  }
  var u = null, d = /* @__PURE__ */ Qi(() => {
    var M = r();
    return pn(M) ? M : M == null ? [] : yr(M);
  }), h, p = /* @__PURE__ */ new Map(), v = !0;
  function c(M) {
    (O.effect.f & he) === 0 && (O.pending.delete(M), O.fallback = u, Ms(O, h, f, t, n), u !== null && (h.length === 0 ? (u.f & Ue) === 0 ? Zr(u) : (u.f ^= Ue, Gt(u, null, f)) : pt(u, () => {
      u = null;
    })));
  }
  function y(M) {
    O.pending.delete(M);
  }
  var w = Wr(() => {
    h = /** @type {V[]} */
    _(d);
    for (var M = h.length, te = /* @__PURE__ */ new Set(), W = (
      /** @type {Batch} */
      C
    ), Te = Vn(), ge = 0; ge < M; ge += 1) {
      var et = h[ge], re = n(et, ge), be = v ? null : l.get(re);
      be ? (be.v && Ft(be.v, et), be.i && Ft(be.i, ge), Te && W.unskip_effect(be.e)) : (be = As(
        l,
        v ? f : cn ?? (cn = Ze()),
        et,
        re,
        ge,
        i,
        t,
        r
      ), v || (be.e.f |= Ue), l.set(re, be)), te.add(re);
    }
    if (M === 0 && s && !u && (v ? u = de(() => s(f)) : (u = de(() => s(cn ?? (cn = Ze()))), u.f |= Ue)), M > te.size && mi(), !v)
      if (p.set(W, te), Te) {
        for (const [kr, Er] of l)
          te.has(kr) || W.skip_effect(Er.e);
        W.oncommit(c), W.ondiscard(y);
      } else
        c(W);
    _(d);
  }), O = { effect: w, items: l, pending: p, outrogroups: null, fallback: u };
  v = !1;
}
function Ut(e) {
  for (; e !== null && (e.f & Re) === 0; )
    e = e.next;
  return e;
}
function Ms(e, t, r, n, i) {
  var s = t.length, f = e.items, l = Ut(e.effect.first), o, u = null, d = [], h = [], p, v, c, y;
  for (y = 0; y < s; y += 1) {
    if (p = t[y], v = i(p, y), c = /** @type {EachItem} */
    f.get(v).e, e.outrogroups !== null)
      for (const re of e.outrogroups)
        re.pending.delete(c), re.done.delete(c);
    if ((c.f & K) !== 0 && Zr(c), (c.f & Ue) !== 0)
      if (c.f ^= Ue, c === l)
        Gt(c, null, r);
      else {
        var w = u ? u.next : l;
        c === e.effect.last && (e.effect.last = c.prev), c.prev && (c.prev.next = c.next), c.next && (c.next.prev = c.prev), Ge(e, u, c), Ge(e, c, w), Gt(c, w, r), u = c, d = [], h = [], l = Ut(u.next);
        continue;
      }
    if (c !== l) {
      if (o !== void 0 && o.has(c)) {
        if (d.length < h.length) {
          var O = h[0], M;
          u = O.prev;
          var te = d[0], W = d[d.length - 1];
          for (M = 0; M < d.length; M += 1)
            Gt(d[M], O, r);
          for (M = 0; M < h.length; M += 1)
            o.delete(h[M]);
          Ge(e, te.prev, W.next), Ge(e, u, te), Ge(e, W, O), l = O, u = W, y -= 1, d = [], h = [];
        } else
          o.delete(c), Gt(c, l, r), Ge(e, c.prev, c.next), Ge(e, c, u === null ? e.effect.first : u.next), Ge(e, u, c), u = c;
        continue;
      }
      for (d = [], h = []; l !== null && l !== c; )
        (o ?? (o = /* @__PURE__ */ new Set())).add(l), h.push(l), l = Ut(l.next);
      if (l === null)
        continue;
    }
    (c.f & Ue) === 0 && d.push(c), u = c, l = Ut(c.next);
  }
  if (e.outrogroups !== null) {
    for (const re of e.outrogroups)
      re.pending.size === 0 && (Br(e, yr(re.done)), e.outrogroups?.delete(re));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (l !== null || o !== void 0) {
    var Te = [];
    if (o !== void 0)
      for (c of o)
        (c.f & K) === 0 && Te.push(c);
    for (; l !== null; )
      (l.f & K) === 0 && l !== e.fallback && Te.push(l), l = Ut(l.next);
    var ge = Te.length;
    if (ge > 0) {
      var et = s === 0 ? r : null;
      Ts(e, Te, et);
    }
  }
}
function As(e, t, r, n, i, s, f, l) {
  var o = (f & Ti) !== 0 ? (f & Mi) === 0 ? /* @__PURE__ */ $i(r, !1, !1) : yt(r) : null, u = (f & Ci) !== 0 ? yt(i) : null;
  return {
    v: o,
    i: u,
    e: de(() => (s(t, o ?? r, u ?? i, l), () => {
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
        /* @__PURE__ */ xr(n)
      );
      if (s.before(n), n === i)
        return;
      n = f;
    }
}
function Ge(e, t, r) {
  t === null ? e.effect.first = r : t.next = r, r === null ? e.effect.last = t : r.prev = t;
}
function Ns(e, t, r) {
  var n = e == null ? "" : "" + e;
  return n === "" ? null : n;
}
function Ht(e, t, r, n, i, s) {
  var f = e.__className;
  if (f !== r || f === void 0) {
    var l = Ns(r);
    l == null ? e.removeAttribute("class") : t ? e.className = l : e.setAttribute("class", l), e.__className = r;
  }
  return s;
}
const Rs = Symbol("is custom element"), Os = Symbol("is html");
function dn(e, t, r, n) {
  var i = Is(e);
  i[t] !== (i[t] = r) && (t === "loading" && (e[bi] = r), r == null ? e.removeAttribute(t) : typeof r != "string" && Ds(e).includes(t) ? e[t] = r : e.setAttribute(t, r));
}
function Is(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [Rs]: e.nodeName.includes("-"),
      [Os]: e.namespaceURI === yn
    })
  );
}
var vn = /* @__PURE__ */ new Map();
function Ds(e) {
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
var Fs = /* @__PURE__ */ wr('<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg>'), js = /* @__PURE__ */ B("<div></div>"), zs = /* @__PURE__ */ B('<div><div class="flex flex-col items-center"><div><!></div> <span> </span></div> <!></div>'), Ls = /* @__PURE__ */ B('<div class="flex items-center justify-between"></div>'), Vs = /* @__PURE__ */ B('<div class="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950 dark:to-indigo-950 border-2 border-blue-200 dark:border-blue-800 rounded-xl p-8 text-center"><div class="w-16 h-16 mx-auto mb-4 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-md"><svg class="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg></div> <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Verify Your Passport Identity</h2> <p class="text-gray-600 dark:text-gray-400 mb-6 max-w-md mx-auto">Use zero-knowledge proofs to verify your passport securely and privately. Your passport data never leaves your device.</p> <button class="px-8 py-3 text-base font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">Start Verification</button></div>'), Bs = /* @__PURE__ */ B('<div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-12 text-center"><svg class="animate-spin h-8 w-8 text-blue-600 mx-auto mb-4" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path></svg> <p class="text-gray-600 dark:text-gray-400 font-medium">Generating verification link...</p> <p class="text-sm text-gray-400 dark:text-gray-500 mt-1">This may take a few seconds</p></div>'), qs = /* @__PURE__ */ B('<div class="inline-block bg-white p-4 rounded-xl shadow-lg border border-gray-100 mb-4"><img alt="Passport Verification QR Code" class="block" width="200" height="200"/></div>'), Us = /* @__PURE__ */ wr('<svg class="w-3.5 h-3.5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> Copied!', 1), Hs = /* @__PURE__ */ wr('<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path></svg> Copy link', 1), Ys = /* @__PURE__ */ B('<div class="flex items-center justify-center gap-2 flex-wrap mb-6"><a target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 text-sm text-blue-600 dark:text-blue-400 hover:underline"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg> Open verification link</a> <button class="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"><!></button></div>'), Gs = /* @__PURE__ */ B('<p class="text-xs text-gray-500 dark:text-gray-400 font-mono break-all"><strong>Session ID:</strong> </p>'), Js = /* @__PURE__ */ B('<p class="text-xs text-gray-500 dark:text-gray-400 font-mono break-all"><strong>Event ID:</strong> </p>'), Ks = /* @__PURE__ */ B('<div class="px-6 pb-4 space-y-1"><!> <!></div>'), Ws = /* @__PURE__ */ B('<div class="border-t border-gray-200 dark:border-gray-700"><button class="w-full px-6 py-3 flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"><span>Technical Details</span> <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button> <!></div>'), Qs = /* @__PURE__ */ wr('<svg class="animate-spin h-4 w-4" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path></svg> Checking...', 1), Zs = /* @__PURE__ */ B('<div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden"><div class="bg-gray-50 dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-700 px-6 py-3"><p class="text-sm font-medium text-gray-600 dark:text-gray-400">Scan the QR code with your RariMe app to verify your passport</p></div> <div class="p-6 text-center"><!> <!> <div class="bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-4 text-left"><p class="text-sm text-blue-800 dark:text-blue-300">Open your RariMe app and scan the QR code above. Once you have submitted the proof from your phone, press <strong>Check Status</strong> below.</p></div></div> <!> <div class="border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 px-6 py-4 flex gap-3 justify-center"><button class="px-6 py-2.5 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50 rounded-lg flex items-center gap-2 transition-colors"><!></button> <button class="px-6 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors">Cancel</button></div></div>'), Xs = /* @__PURE__ */ B('<div><p class="text-xs text-gray-500 dark:text-gray-400">Citizenship</p> <p class="text-sm font-semibold text-gray-800 dark:text-gray-200"> </p></div>'), $s = /* @__PURE__ */ B('<div><p class="text-xs text-gray-500 dark:text-gray-400">Verified</p> <p class="text-sm font-semibold text-gray-800 dark:text-gray-200"> </p></div>'), ea = /* @__PURE__ */ B('<div class="bg-white/60 dark:bg-gray-800/60 rounded-lg p-4 mb-4 max-w-sm mx-auto text-left space-y-2"><!> <!></div>'), ta = /* @__PURE__ */ B('<div class="bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-950 dark:to-emerald-950 border-2 border-green-200 dark:border-green-800 rounded-xl p-8 text-center"><div class="w-16 h-16 mx-auto mb-4 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-md"><svg class="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div> <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Passport Verified Successfully!</h2> <!> <p class="text-sm text-gray-600 dark:text-gray-400 max-w-md mx-auto">Your passport identity has been securely linked to your account using zero-knowledge proofs.</p></div>'), ra = /* @__PURE__ */ B('<div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-8 text-center"><div class="w-16 h-16 mx-auto mb-4 bg-red-50 dark:bg-red-950 rounded-full flex items-center justify-center"><svg class="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div> <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Verification Failed</h2> <p class="text-gray-600 dark:text-gray-400 mb-6">Passport verification was not successful. Please try again.</p> <button class="px-6 py-2.5 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">Try Again</button></div>'), na = /* @__PURE__ */ B('<div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-8 text-center"><div class="w-16 h-16 mx-auto mb-4 bg-red-50 dark:bg-red-950 rounded-full flex items-center justify-center"><svg class="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div> <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Error Occurred</h2> <p class="text-gray-600 dark:text-gray-400 mb-6"> </p> <button class="px-6 py-2.5 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">Try Again</button></div>'), ia = /* @__PURE__ */ B('<div class="p-6 max-w-2xl mx-auto space-y-6"><div class="flex items-center gap-3"><div class="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center"><svg class="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg></div> <div><h1 class="text-2xl font-bold text-gray-900 dark:text-white">Passport Verification</h1> <p class="text-sm text-gray-500 dark:text-gray-400">Zero-knowledge identity verification via RariMe</p></div></div> <!> <!></div>');
function sa(e, t) {
  wn(t, !0);
  let r = /* @__PURE__ */ U("idle"), n = /* @__PURE__ */ U(""), i = /* @__PURE__ */ U(""), s = /* @__PURE__ */ U(""), f = /* @__PURE__ */ U(null), l = /* @__PURE__ */ U(""), o = /* @__PURE__ */ U(""), u = /* @__PURE__ */ U(!1), d = /* @__PURE__ */ U(!1), h = /* @__PURE__ */ U(!1), p = /* @__PURE__ */ Wi(() => _(r) === "idle" ? 0 : _(r) === "generating" ? 1 : _(r) === "pending" ? 2 : 3);
  const v = [
    { label: "Start", index: 0 },
    { label: "Scan", index: 2 },
    { label: "Verified", index: 3 }
  ];
  async function c(m, x = "") {
    const k = await t.ctx.backend.extension_sync_call(JSON.stringify({
      extension_name: "passport_verification",
      function_name: m,
      args: x
    })), I = typeof k == "string" ? JSON.parse(k) : k;
    return I?.response ? typeof I.response == "string" ? JSON.parse(I.response) : I.response : I;
  }
  async function y(m, x = "") {
    const k = await t.ctx.backend.extension_async_call(JSON.stringify({
      extension_name: "passport_verification",
      function_name: m,
      args: x
    })), I = typeof k == "string" ? JSON.parse(k) : k;
    return I?.response ? typeof I.response == "string" ? JSON.parse(I.response) : I.response : I;
  }
  async function w() {
    try {
      g(r, "generating"), g(s, "");
      const m = await c("get_current_application_id", "");
      g(o, m?.application_id ?? m?.data?.application_id ?? "", !0);
      const x = t.ctx.principal || "", k = await y("get_verification_link", x);
      if (k?.data?.attributes) {
        const I = k.data.attributes.rarime_app_url || k.data.attributes.get_proof_params;
        g(n, I, !0), g(i, `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(I)}`), g(l, k.data.id || x, !0), g(r, "pending");
      } else k?.link || k?.data?.link ? (g(n, k.link ?? k.data.link, !0), g(i, `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(_(n))}`), g(l, x, !0), g(r, "pending")) : (g(r, "error"), g(s, "Invalid response format from verification service"));
    } catch (m) {
      g(r, "error"), g(s, m?.message || "Network error occurred", !0);
    }
  }
  async function O() {
    try {
      g(d, !0);
      const m = t.ctx.principal || "", x = await y("check_verification_status", m);
      if (x?.data?.attributes) {
        const k = x.data.attributes.status;
        k === "verified" ? (g(r, "verified"), g(f, x.data.attributes, !0), await M(x)) : k === "failed" && (g(r, "failed"), g(s, "Passport verification failed"));
      } else {
        const k = x?.status ?? x?.verification_status ?? "";
        (k === "verified" || k === "approved") && (g(r, "verified"), g(f, x, !0));
      }
    } catch (m) {
      console.error("Error checking verification status:", m);
    } finally {
      g(d, !1);
    }
  }
  async function M(m) {
    try {
      await c("create_passport_identity", JSON.stringify(m));
    } catch (x) {
      console.error("Error creating passport identity:", x);
    }
  }
  async function te() {
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
    g(r, "idle"), g(n, ""), g(i, ""), g(s, ""), g(f, null), g(l, ""), g(o, ""), g(u, !1), g(h, !1);
  }
  var Te = ia(), ge = D(A(Te), 2);
  {
    var et = (m) => {
      var x = Ls();
      Cs(x, 21, () => v, Ss, (k, I, ye) => {
        let xt = () => _(I).label, De = () => _(I).index;
        var He = zs(), wt = A(He), tt = A(wt), Q = A(tt);
        {
          var Pe = (L) => {
            var oe = Fs();
            R(L, oe);
          }, rt = (L) => {
            var oe = un();
            oe.nodeValue = ye + 1, R(L, oe);
          };
          G(Q, (L) => {
            _(p) > De() ? L(Pe) : L(rt, -1);
          });
        }
        var Ye = D(tt, 2), Vt = A(Ye), j = D(wt, 2);
        {
          var Z = (L) => {
            var oe = js();
            xe(() => Ht(oe, 1, `flex-1 h-0.5 mx-3 mb-5 ${_(p) > De() ? "bg-blue-600" : "bg-gray-200 dark:bg-gray-700"}`)), R(L, oe);
          };
          G(j, (L) => {
            ye < v.length - 1 && L(Z);
          });
        }
        xe(() => {
          Ht(He, 1, `flex items-center ${ye < v.length - 1 ? "flex-1" : ""}`), Ht(tt, 1, `w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold
							${_(p) >= De() ? "bg-blue-600 text-white" : "bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400"}`), Ht(Ye, 1, `text-xs mt-1 ${_(p) >= De() ? "text-blue-600 dark:text-blue-400 font-medium" : "text-gray-400 dark:text-gray-500"}`), Et(Vt, xt());
        }), R(k, He);
      }), R(m, x);
    };
    G(ge, (m) => {
      _(r) !== "error" && _(r) !== "failed" && m(et);
    });
  }
  var re = D(ge, 2);
  {
    var be = (m) => {
      var x = Vs(), k = D(A(x), 6);
      st("click", k, w), R(m, x);
    }, kr = (m) => {
      var x = Bs();
      R(m, x);
    }, Er = (m) => {
      var x = Zs(), k = D(A(x), 2), I = A(k);
      {
        var ye = (j) => {
          var Z = qs(), L = A(Z);
          xe(() => dn(L, "src", _(i))), R(j, Z);
        };
        G(I, (j) => {
          _(i) && j(ye);
        });
      }
      var xt = D(I, 2);
      {
        var De = (j) => {
          var Z = Ys(), L = A(Z), oe = D(L, 2), Sr = A(oe);
          {
            var Tr = (Fe) => {
              var kt = Us();
              R(Fe, kt);
            }, Bt = (Fe) => {
              var kt = Hs();
              R(Fe, kt);
            };
            G(Sr, (Fe) => {
              _(u) ? Fe(Tr) : Fe(Bt, -1);
            });
          }
          xe(() => dn(L, "href", _(n))), st("click", oe, te), R(j, Z);
        };
        G(xt, (j) => {
          _(n) && j(De);
        });
      }
      var He = D(k, 2);
      {
        var wt = (j) => {
          var Z = Ws(), L = A(Z), oe = D(A(L), 2), Sr = D(L, 2);
          {
            var Tr = (Bt) => {
              var Fe = Ks(), kt = A(Fe);
              {
                var ii = (nt) => {
                  var qt = Gs(), Cr = D(A(qt));
                  xe(() => Et(Cr, ` ${_(l) ?? ""}`)), R(nt, qt);
                };
                G(kt, (nt) => {
                  _(l) && nt(ii);
                });
              }
              var si = D(kt, 2);
              {
                var ai = (nt) => {
                  var qt = Js(), Cr = D(A(qt));
                  xe(() => Et(Cr, ` ${_(o) ?? ""}`)), R(nt, qt);
                };
                G(si, (nt) => {
                  _(o) && nt(ai);
                });
              }
              R(Bt, Fe);
            };
            G(Sr, (Bt) => {
              _(h) && Bt(Tr);
            });
          }
          xe(() => Ht(oe, 0, `w-4 h-4 transition-transform ${_(h) ? "rotate-180" : ""}`)), st("click", L, () => g(h, !_(h))), R(j, Z);
        };
        G(He, (j) => {
          (_(l) || _(o)) && j(wt);
        });
      }
      var tt = D(He, 2), Q = A(tt), Pe = A(Q);
      {
        var rt = (j) => {
          var Z = Qs();
          R(j, Z);
        }, Ye = (j) => {
          var Z = un("Check Status");
          R(j, Z);
        };
        G(Pe, (j) => {
          _(d) ? j(rt) : j(Ye, -1);
        });
      }
      var Vt = D(Q, 2);
      xe(() => Q.disabled = _(d)), st("click", Q, O), st("click", Vt, W), R(m, x);
    }, ti = (m) => {
      var x = ta(), k = D(A(x), 4);
      {
        var I = (ye) => {
          var xt = ea(), De = A(xt);
          {
            var He = (Q) => {
              var Pe = Xs(), rt = D(A(Pe), 2), Ye = A(rt);
              xe(() => Et(Ye, _(f).citizenship)), R(Q, Pe);
            };
            G(De, (Q) => {
              _(f).citizenship && Q(He);
            });
          }
          var wt = D(De, 2);
          {
            var tt = (Q) => {
              var Pe = $s(), rt = D(A(Pe), 2), Ye = A(rt);
              xe((Vt) => Et(Ye, Vt), [
                () => new Date(_(f).verified_at).toLocaleString()
              ]), R(Q, Pe);
            };
            G(wt, (Q) => {
              _(f).verified_at && Q(tt);
            });
          }
          R(ye, xt);
        };
        G(k, (ye) => {
          _(f) && ye(I);
        });
      }
      R(m, x);
    }, ri = (m) => {
      var x = ra(), k = D(A(x), 6);
      st("click", k, W), R(m, x);
    }, ni = (m) => {
      var x = na(), k = D(A(x), 4), I = A(k), ye = D(k, 2);
      xe(() => Et(I, _(s))), st("click", ye, W), R(m, x);
    };
    G(re, (m) => {
      _(r) === "idle" ? m(be) : _(r) === "generating" ? m(kr, 1) : _(r) === "pending" ? m(Er, 2) : _(r) === "verified" ? m(ti, 3) : _(r) === "failed" ? m(ri, 4) : _(r) === "error" && m(ni, 5);
    });
  }
  R(e, Te), kn();
}
gs(["click"]);
function la(e, t) {
  const r = xs(sa, { target: e, props: { ctx: t } });
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
  la as default
};
