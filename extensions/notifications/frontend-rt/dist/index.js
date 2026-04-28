var Zr = Object.defineProperty;
var Ln = (e) => {
  throw TypeError(e);
};
var Qr = (e, t, n) => t in e ? Zr(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var ve = (e, t, n) => Qr(e, typeof t != "symbol" ? t + "" : t, n), an = (e, t, n) => t.has(e) || Ln("Cannot " + n);
var l = (e, t, n) => (an(e, t, "read from private field"), n ? n.call(e) : t.get(e)), b = (e, t, n) => t.has(e) ? Ln("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), y = (e, t, n, r) => (an(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), A = (e, t, n) => (an(e, t, "access private method"), n);
var Qn = Array.isArray, $r = Array.prototype.indexOf, gt = Array.prototype.includes, tn = Array.from, ei = Object.defineProperty, Mt = Object.getOwnPropertyDescriptor, ti = Object.prototype, ni = Array.prototype, ri = Object.getPrototypeOf, qn = Object.isExtensible;
const ii = () => {
};
function si(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function $n() {
  var e, t, n = new Promise((r, i) => {
    e = r, t = i;
  });
  return { promise: n, resolve: e, reject: t };
}
const P = 2, bt = 4, nn = 8, er = 1 << 24, Ee = 16, pe = 32, Be = 64, cn = 128, le = 512, O = 1024, I = 2048, ke = 4096, q = 8192, ae = 16384, at = 32768, jn = 1 << 25, mt = 65536, vn = 1 << 17, li = 1 << 18, kt = 1 << 19, ai = 1 << 20, De = 1 << 25, it = 65536, Xt = 1 << 21, Ct = 1 << 22, Ue = 1 << 23, fn = Symbol("$state"), Ne = new class extends Error {
  constructor() {
    super(...arguments);
    ve(this, "name", "StaleReactionError");
    ve(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
function fi() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function oi(e, t, n) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function ui(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function ci() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function vi(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function di() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function hi() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function _i() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function pi() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function gi() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
const bi = 1, mi = 2, wi = 16, yi = 2, F = Symbol(), Ei = "http://www.w3.org/1999/xhtml";
function ki() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function xi() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function tr(e) {
  return e === this.v;
}
function Si(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function nr(e) {
  return !Si(e, this.v);
}
let oe = null;
function wt(e) {
  oe = e;
}
function rr(e, t = !1, n) {
  oe = {
    p: oe,
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
function ir(e) {
  var t = (
    /** @type {ComponentContext} */
    oe
  ), n = t.e;
  if (n !== null) {
    t.e = null;
    for (var r of n)
      Sr(r);
  }
  return t.i = !0, oe = t.p, /** @type {T} */
  {};
}
function sr() {
  return !0;
}
let ft = [];
function Ti() {
  var e = ft;
  ft = [], si(e);
}
function ct(e) {
  if (ft.length === 0) {
    var t = ft;
    queueMicrotask(() => {
      t === ft && Ti();
    });
  }
  ft.push(e);
}
function lr(e) {
  var t = k;
  if (t === null)
    return E.f |= Ue, e;
  if ((t.f & at) === 0 && (t.f & bt) === 0)
    throw e;
  Ve(e, t);
}
function Ve(e, t) {
  for (; t !== null; ) {
    if ((t.f & cn) !== 0) {
      if ((t.f & at) === 0)
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
const Ai = -7169;
function R(e, t) {
  e.f = e.f & Ai | t;
}
function kn(e) {
  (e.f & le) !== 0 || e.deps === null ? R(e, O) : R(e, ke);
}
function ar(e) {
  if (e !== null)
    for (const t of e)
      (t.f & P) === 0 || (t.f & it) === 0 || (t.f ^= it, ar(
        /** @type {Derived} */
        t.deps
      ));
}
function fr(e, t, n) {
  (e.f & I) !== 0 ? t.add(e) : (e.f & ke) !== 0 && n.add(e), ar(e.deps), R(e, O);
}
const Ye = /* @__PURE__ */ new Set();
let x = null, he = null, dn = null, on = !1, ot = null, Bt = null;
var Vn = 0;
let Ni = 1;
var vt, dt, We, Me, me, Dt, W, Ft, qe, Re, we, ht, _t, Xe, C, Ht, or, Yt, hn, Kt, Mi;
const Qt = class Qt {
  constructor() {
    b(this, C);
    ve(this, "id", Ni++);
    /**
     * The current values of any signals that are updated in this batch.
     * Tuple format: [value, is_derived] (note: is_derived is false for deriveds, too, if they were overridden via assignment)
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Value, [any, boolean]>}
     */
    ve(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any signals (sources and deriveds) that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Value, any>}
     */
    ve(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<(batch: Batch) => void>}
     */
    b(this, vt, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    b(this, dt, /* @__PURE__ */ new Set());
    /**
     * Callbacks that should run only when a fork is committed.
     * @type {Set<(batch: Batch) => void>}
     */
    b(this, We, /* @__PURE__ */ new Set());
    /**
     * Async effects that are currently in flight
     * @type {Map<Effect, number>}
     */
    b(this, Me, /* @__PURE__ */ new Map());
    /**
     * Async effects that are currently in flight, _not_ inside a pending boundary
     * @type {Map<Effect, number>}
     */
    b(this, me, /* @__PURE__ */ new Map());
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    b(this, Dt, null);
    /**
     * The root effects that need to be flushed
     * @type {Effect[]}
     */
    b(this, W, []);
    /**
     * Effects created while this batch was active.
     * @type {Effect[]}
     */
    b(this, Ft, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    b(this, qe, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    b(this, Re, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    b(this, we, /* @__PURE__ */ new Map());
    /**
     * Inverse of #skipped_branches which we need to tell prior batches to unskip them when committing
     * @type {Set<Effect>}
     */
    b(this, ht, /* @__PURE__ */ new Set());
    ve(this, "is_fork", !1);
    b(this, _t, !1);
    /** @type {Set<Batch>} */
    b(this, Xe, /* @__PURE__ */ new Set());
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(t) {
    l(this, we).has(t) || l(this, we).set(t, { d: [], m: [] }), l(this, ht).delete(t);
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   * @param {(e: Effect) => void} callback
   */
  unskip_effect(t, n = (r) => this.schedule(r)) {
    var r = l(this, we).get(t);
    if (r) {
      l(this, we).delete(t);
      for (var i of r.d)
        R(i, I), n(i);
      for (i of r.m)
        R(i, ke), n(i);
    }
    l(this, ht).add(t);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Value} source
   * @param {any} value
   * @param {boolean} [is_derived]
   */
  capture(t, n, r = !1) {
    t.v !== F && !this.previous.has(t) && this.previous.set(t, t.v), (t.f & Ue) === 0 && (this.current.set(t, [n, r]), he?.set(t, n)), this.is_fork || (t.v = n);
  }
  activate() {
    x = this;
  }
  deactivate() {
    x = null, he = null;
  }
  flush() {
    try {
      on = !0, x = this, A(this, C, Yt).call(this);
    } finally {
      Vn = 0, dn = null, ot = null, Bt = null, on = !1, x = null, he = null, et.clear();
    }
  }
  discard() {
    for (const t of l(this, dt)) t(this);
    l(this, dt).clear(), l(this, We).clear(), Ye.delete(this);
  }
  /**
   * @param {Effect} effect
   */
  register_created_effect(t) {
    l(this, Ft).push(t);
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  increment(t, n) {
    let r = l(this, Me).get(n) ?? 0;
    if (l(this, Me).set(n, r + 1), t) {
      let i = l(this, me).get(n) ?? 0;
      l(this, me).set(n, i + 1);
    }
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   * @param {boolean} skip - whether to skip updates (because this is triggered by a stale reaction)
   */
  decrement(t, n, r) {
    let i = l(this, Me).get(n) ?? 0;
    if (i === 1 ? l(this, Me).delete(n) : l(this, Me).set(n, i - 1), t) {
      let s = l(this, me).get(n) ?? 0;
      s === 1 ? l(this, me).delete(n) : l(this, me).set(n, s - 1);
    }
    l(this, _t) || r || (y(this, _t, !0), ct(() => {
      y(this, _t, !1), this.flush();
    }));
  }
  /**
   * @param {Set<Effect>} dirty_effects
   * @param {Set<Effect>} maybe_dirty_effects
   */
  transfer_effects(t, n) {
    for (const r of t)
      l(this, qe).add(r);
    for (const r of n)
      l(this, Re).add(r);
    t.clear(), n.clear();
  }
  /** @param {(batch: Batch) => void} fn */
  oncommit(t) {
    l(this, vt).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    l(this, dt).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  on_fork_commit(t) {
    l(this, We).add(t);
  }
  run_fork_commit_callbacks() {
    for (const t of l(this, We)) t(this);
    l(this, We).clear();
  }
  settled() {
    return (l(this, Dt) ?? y(this, Dt, $n())).promise;
  }
  static ensure() {
    if (x === null) {
      const t = x = new Qt();
      on || (Ye.add(x), ct(() => {
        x === t && t.flush();
      }));
    }
    return x;
  }
  apply() {
    {
      he = null;
      return;
    }
  }
  /**
   *
   * @param {Effect} effect
   */
  schedule(t) {
    if (dn = t, t.b?.is_pending && (t.f & (bt | nn | er)) !== 0 && (t.f & at) === 0) {
      t.b.defer_effect(t);
      return;
    }
    for (var n = t; n.parent !== null; ) {
      n = n.parent;
      var r = n.f;
      if (ot !== null && n === k && (E === null || (E.f & P) === 0))
        return;
      if ((r & (Be | pe)) !== 0) {
        if ((r & O) === 0)
          return;
        n.f ^= O;
      }
    }
    l(this, W).push(n);
  }
};
vt = new WeakMap(), dt = new WeakMap(), We = new WeakMap(), Me = new WeakMap(), me = new WeakMap(), Dt = new WeakMap(), W = new WeakMap(), Ft = new WeakMap(), qe = new WeakMap(), Re = new WeakMap(), we = new WeakMap(), ht = new WeakMap(), _t = new WeakMap(), Xe = new WeakMap(), C = new WeakSet(), Ht = function() {
  return this.is_fork || l(this, me).size > 0;
}, or = function() {
  for (const r of l(this, Xe))
    for (const i of l(r, me).keys()) {
      for (var t = !1, n = i; n.parent !== null; ) {
        if (l(this, we).has(n)) {
          t = !0;
          break;
        }
        n = n.parent;
      }
      if (!t)
        return !0;
    }
  return !1;
}, Yt = function() {
  var a;
  if (Vn++ > 1e3 && (Ye.delete(this), Ri()), !A(this, C, Ht).call(this)) {
    for (const f of l(this, qe))
      l(this, Re).delete(f), R(f, I), this.schedule(f);
    for (const f of l(this, Re))
      R(f, ke), this.schedule(f);
  }
  const t = l(this, W);
  y(this, W, []), this.apply();
  var n = ot = [], r = [], i = Bt = [];
  for (const f of t)
    try {
      A(this, C, hn).call(this, f, n, r);
    } catch (o) {
      throw vr(f), o;
    }
  if (x = null, i.length > 0) {
    var s = Qt.ensure();
    for (const f of i)
      s.schedule(f);
  }
  if (ot = null, Bt = null, A(this, C, Ht).call(this) || A(this, C, or).call(this)) {
    A(this, C, Kt).call(this, r), A(this, C, Kt).call(this, n);
    for (const [f, o] of l(this, we))
      cr(f, o);
  } else {
    l(this, Me).size === 0 && Ye.delete(this), l(this, qe).clear(), l(this, Re).clear();
    for (const f of l(this, vt)) f(this);
    l(this, vt).clear(), Un(r), Un(n), l(this, Dt)?.resolve();
  }
  var u = (
    /** @type {Batch | null} */
    /** @type {unknown} */
    x
  );
  if (l(this, W).length > 0) {
    const f = u ?? (u = this);
    l(f, W).push(...l(this, W).filter((o) => !l(f, W).includes(o)));
  }
  u !== null && (Ye.add(u), A(a = u, C, Yt).call(a));
}, /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
hn = function(t, n, r) {
  t.f ^= O;
  for (var i = t.first; i !== null; ) {
    var s = i.f, u = (s & (pe | Be)) !== 0, a = u && (s & O) !== 0, f = a || (s & q) !== 0 || l(this, we).has(i);
    if (!f && i.fn !== null) {
      u ? i.f ^= O : (s & bt) !== 0 ? n.push(i) : qt(i) && ((s & Ee) !== 0 && l(this, Re).add(i), Et(i));
      var o = i.first;
      if (o !== null) {
        i = o;
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
Kt = function(t) {
  for (var n = 0; n < t.length; n += 1)
    fr(t[n], l(this, qe), l(this, Re));
}, Mi = function() {
  var v, _, h;
  for (const d of Ye) {
    var t = d.id < this.id, n = [];
    for (const [c, [m, w]] of this.current) {
      if (d.current.has(c)) {
        var r = (
          /** @type {[any, boolean]} */
          d.current.get(c)[0]
        );
        if (t && m !== r)
          d.current.set(c, [m, w]);
        else
          continue;
      }
      n.push(c);
    }
    var i = [...d.current.keys()].filter((c) => !this.current.has(c));
    if (i.length === 0)
      t && d.discard();
    else if (n.length > 0) {
      if (t)
        for (const c of l(this, ht))
          d.unskip_effect(c, (m) => {
            var w;
            (m.f & (Ee | Ct)) !== 0 ? d.schedule(m) : A(w = d, C, Kt).call(w, [m]);
          });
      d.activate();
      var s = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Map();
      for (var a of n)
        ur(a, i, s, u);
      u = /* @__PURE__ */ new Map();
      var f = [...d.current.keys()].filter(
        (c) => this.current.has(c) ? (
          /** @type {[any, boolean]} */
          this.current.get(c)[0] !== c
        ) : !0
      );
      for (const c of l(this, Ft))
        (c.f & (ae | q | vn)) === 0 && xn(c, f, u) && ((c.f & (Ct | Ee)) !== 0 ? (R(c, I), d.schedule(c)) : l(d, qe).add(c));
      if (l(d, W).length > 0) {
        d.apply();
        for (var o of l(d, W))
          A(v = d, C, hn).call(v, o, [], []);
        y(d, W, []);
      }
      d.deactivate();
    }
  }
  for (const d of Ye)
    l(d, Xe).has(this) && (l(d, Xe).delete(this), l(d, Xe).size === 0 && !A(_ = d, C, Ht).call(_) && (d.activate(), A(h = d, C, Yt).call(h)));
};
let st = Qt;
function Ri() {
  try {
    di();
  } catch (e) {
    Ve(e, dn);
  }
}
let Ae = null;
function Un(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var r = e[n++];
      if ((r.f & (ae | q)) === 0 && qt(r) && (Ae = /* @__PURE__ */ new Set(), Et(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && Ar(r), Ae?.size > 0)) {
        et.clear();
        for (const i of Ae) {
          if ((i.f & (ae | q)) !== 0) continue;
          const s = [i];
          let u = i.parent;
          for (; u !== null; )
            Ae.has(u) && (Ae.delete(u), s.push(u)), u = u.parent;
          for (let a = s.length - 1; a >= 0; a--) {
            const f = s[a];
            (f.f & (ae | q)) === 0 && Et(f);
          }
        }
        Ae.clear();
      }
    }
    Ae = null;
  }
}
function ur(e, t, n, r) {
  if (!n.has(e) && (n.add(e), e.reactions !== null))
    for (const i of e.reactions) {
      const s = i.f;
      (s & P) !== 0 ? ur(
        /** @type {Derived} */
        i,
        t,
        n,
        r
      ) : (s & (Ct | Ee)) !== 0 && (s & I) === 0 && xn(i, t, r) && (R(i, I), Sn(
        /** @type {Effect} */
        i
      ));
    }
}
function xn(e, t, n) {
  const r = n.get(e);
  if (r !== void 0) return r;
  if (e.deps !== null)
    for (const i of e.deps) {
      if (gt.call(t, i))
        return !0;
      if ((i.f & P) !== 0 && xn(
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
function Sn(e) {
  x.schedule(e);
}
function cr(e, t) {
  if (!((e.f & pe) !== 0 && (e.f & O) !== 0)) {
    (e.f & I) !== 0 ? t.d.push(e) : (e.f & ke) !== 0 && t.m.push(e), R(e, O);
    for (var n = e.first; n !== null; )
      cr(n, t), n = n.next;
  }
}
function vr(e) {
  R(e, O);
  for (var t = e.first; t !== null; )
    vr(t), t = t.next;
}
function Ci(e) {
  let t = 0, n = lt(0), r;
  return () => {
    Nn() && (g(n), ts(() => (t === 0 && (r = ls(() => e(() => Rt(n)))), t += 1, () => {
      ct(() => {
        t -= 1, t === 0 && (r?.(), r = void 0, Rt(n));
      });
    })));
  };
}
var Oi = mt | kt;
function Di(e, t, n, r) {
  new Fi(e, t, n, r);
}
var te, En, ne, Ze, B, re, z, X, Ce, Qe, je, pt, It, Pt, Oe, $t, M, Ii, Pi, zi, _n, Gt, Jt, pn, gn;
class Fi {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(t, n, r, i) {
    b(this, M);
    /** @type {Boundary | null} */
    ve(this, "parent");
    ve(this, "is_pending", !1);
    /**
     * API-level transformError transform function. Transforms errors before they reach the `failed` snippet.
     * Inherited from parent boundary, or defaults to identity.
     * @type {(error: unknown) => unknown}
     */
    ve(this, "transform_error");
    /** @type {TemplateNode} */
    b(this, te);
    /** @type {TemplateNode | null} */
    b(this, En, null);
    /** @type {BoundaryProps} */
    b(this, ne);
    /** @type {((anchor: Node) => void)} */
    b(this, Ze);
    /** @type {Effect} */
    b(this, B);
    /** @type {Effect | null} */
    b(this, re, null);
    /** @type {Effect | null} */
    b(this, z, null);
    /** @type {Effect | null} */
    b(this, X, null);
    /** @type {DocumentFragment | null} */
    b(this, Ce, null);
    b(this, Qe, 0);
    b(this, je, 0);
    b(this, pt, !1);
    /** @type {Set<Effect>} */
    b(this, It, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    b(this, Pt, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    b(this, Oe, null);
    b(this, $t, Ci(() => (y(this, Oe, lt(l(this, Qe))), () => {
      y(this, Oe, null);
    })));
    y(this, te, t), y(this, ne, n), y(this, Ze, (s) => {
      var u = (
        /** @type {Effect} */
        k
      );
      u.b = this, u.f |= cn, r(s);
    }), this.parent = /** @type {Effect} */
    k.b, this.transform_error = i ?? this.parent?.transform_error ?? ((s) => s), y(this, B, Mn(() => {
      A(this, M, _n).call(this);
    }, Oi));
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    fr(t, l(this, It), l(this, Pt));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!l(this, ne).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  update_pending_count(t, n) {
    A(this, M, pn).call(this, t, n), y(this, Qe, l(this, Qe) + t), !(!l(this, Oe) || l(this, pt)) && (y(this, pt, !0), ct(() => {
      y(this, pt, !1), l(this, Oe) && yt(l(this, Oe), l(this, Qe));
    }));
  }
  get_effect_pending() {
    return l(this, $t).call(this), g(
      /** @type {Source<number>} */
      l(this, Oe)
    );
  }
  /** @param {unknown} error */
  error(t) {
    if (!l(this, ne).onerror && !l(this, ne).failed)
      throw t;
    x?.is_fork ? (l(this, re) && x.skip_effect(l(this, re)), l(this, z) && x.skip_effect(l(this, z)), l(this, X) && x.skip_effect(l(this, X)), x.on_fork_commit(() => {
      A(this, M, gn).call(this, t);
    })) : A(this, M, gn).call(this, t);
  }
}
te = new WeakMap(), En = new WeakMap(), ne = new WeakMap(), Ze = new WeakMap(), B = new WeakMap(), re = new WeakMap(), z = new WeakMap(), X = new WeakMap(), Ce = new WeakMap(), Qe = new WeakMap(), je = new WeakMap(), pt = new WeakMap(), It = new WeakMap(), Pt = new WeakMap(), Oe = new WeakMap(), $t = new WeakMap(), M = new WeakSet(), Ii = function() {
  try {
    y(this, re, se(() => l(this, Ze).call(this, l(this, te))));
  } catch (t) {
    this.error(t);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
Pi = function(t) {
  const n = l(this, ne).failed;
  n && y(this, X, se(() => {
    n(
      l(this, te),
      () => t,
      () => () => {
      }
    );
  }));
}, zi = function() {
  const t = l(this, ne).pending;
  t && (this.is_pending = !0, y(this, z, se(() => t(l(this, te)))), ct(() => {
    var n = y(this, Ce, document.createDocumentFragment()), r = tt();
    n.append(r), y(this, re, A(this, M, Jt).call(this, () => se(() => l(this, Ze).call(this, r)))), l(this, je) === 0 && (l(this, te).before(n), y(this, Ce, null), nt(
      /** @type {Effect} */
      l(this, z),
      () => {
        y(this, z, null);
      }
    ), A(this, M, Gt).call(
      this,
      /** @type {Batch} */
      x
    ));
  }));
}, _n = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), y(this, je, 0), y(this, Qe, 0), y(this, re, se(() => {
      l(this, Ze).call(this, l(this, te));
    })), l(this, je) > 0) {
      var t = y(this, Ce, document.createDocumentFragment());
      On(l(this, re), t);
      const n = (
        /** @type {(anchor: Node) => void} */
        l(this, ne).pending
      );
      y(this, z, se(() => n(l(this, te))));
    } else
      A(this, M, Gt).call(
        this,
        /** @type {Batch} */
        x
      );
  } catch (n) {
    this.error(n);
  }
}, /**
 * @param {Batch} batch
 */
Gt = function(t) {
  this.is_pending = !1, t.transfer_effects(l(this, It), l(this, Pt));
}, /**
 * @template T
 * @param {() => T} fn
 */
Jt = function(t) {
  var n = k, r = E, i = oe;
  xe(l(this, B)), ue(l(this, B)), wt(l(this, B).ctx);
  try {
    return st.ensure(), t();
  } catch (s) {
    return lr(s), null;
  } finally {
    xe(n), ue(r), wt(i);
  }
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 * @param {Batch} batch
 */
pn = function(t, n) {
  var r;
  if (!this.has_pending_snippet()) {
    this.parent && A(r = this.parent, M, pn).call(r, t, n);
    return;
  }
  y(this, je, l(this, je) + t), l(this, je) === 0 && (A(this, M, Gt).call(this, n), l(this, z) && nt(l(this, z), () => {
    y(this, z, null);
  }), l(this, Ce) && (l(this, te).before(l(this, Ce)), y(this, Ce, null)));
}, /**
 * @param {unknown} error
 */
gn = function(t) {
  l(this, re) && (Y(l(this, re)), y(this, re, null)), l(this, z) && (Y(l(this, z)), y(this, z, null)), l(this, X) && (Y(l(this, X)), y(this, X, null));
  var n = l(this, ne).onerror;
  let r = l(this, ne).failed;
  var i = !1, s = !1;
  const u = () => {
    if (i) {
      xi();
      return;
    }
    i = !0, s && gi(), l(this, X) !== null && nt(l(this, X), () => {
      y(this, X, null);
    }), A(this, M, Jt).call(this, () => {
      A(this, M, _n).call(this);
    });
  }, a = (f) => {
    try {
      s = !0, n?.(f, u), s = !1;
    } catch (o) {
      Ve(o, l(this, B) && l(this, B).parent);
    }
    r && y(this, X, A(this, M, Jt).call(this, () => {
      try {
        return se(() => {
          var o = (
            /** @type {Effect} */
            k
          );
          o.b = this, o.f |= cn, r(
            l(this, te),
            () => f,
            () => u
          );
        });
      } catch (o) {
        return Ve(
          o,
          /** @type {Effect} */
          l(this, B).parent
        ), null;
      }
    }));
  };
  ct(() => {
    var f;
    try {
      f = this.transform_error(t);
    } catch (o) {
      Ve(o, l(this, B) && l(this, B).parent);
      return;
    }
    f !== null && typeof f == "object" && typeof /** @type {any} */
    f.then == "function" ? f.then(
      a,
      /** @param {unknown} e */
      (o) => Ve(o, l(this, B) && l(this, B).parent)
    ) : a(f);
  });
};
function Li(e, t, n, r) {
  const i = Tn;
  var s = e.filter((h) => !h.settled);
  if (n.length === 0 && s.length === 0) {
    r(t.map(i));
    return;
  }
  var u = (
    /** @type {Effect} */
    k
  ), a = qi(), f = s.length === 1 ? s[0].promise : s.length > 1 ? Promise.all(s.map((h) => h.promise)) : null;
  function o(h) {
    a();
    try {
      r(h);
    } catch (d) {
      (u.f & ae) === 0 && Ve(d, u);
    }
    Zt();
  }
  if (n.length === 0) {
    f.then(() => o(t.map(i)));
    return;
  }
  var v = dr();
  function _() {
    Promise.all(n.map((h) => /* @__PURE__ */ ji(h))).then((h) => o([...t.map(i), ...h])).catch((h) => Ve(h, u)).finally(() => v());
  }
  f ? f.then(() => {
    a(), _(), Zt();
  }) : _();
}
function qi() {
  var e = (
    /** @type {Effect} */
    k
  ), t = E, n = oe, r = (
    /** @type {Batch} */
    x
  );
  return function(s = !0) {
    xe(e), ue(t), wt(n), s && (e.f & ae) === 0 && (r?.activate(), r?.apply());
  };
}
function Zt(e = !0) {
  xe(null), ue(null), wt(null), e && x?.deactivate();
}
function dr() {
  var e = (
    /** @type {Effect} */
    k
  ), t = (
    /** @type {Boundary} */
    e.b
  ), n = (
    /** @type {Batch} */
    x
  ), r = t.is_rendered();
  return t.update_pending_count(1, n), n.increment(r, e), (i = !1) => {
    t.update_pending_count(-1, n), n.decrement(r, e, i);
  };
}
// @__NO_SIDE_EFFECTS__
function Tn(e) {
  var t = P | I;
  return k !== null && (k.f |= kt), {
    ctx: oe,
    deps: null,
    effects: null,
    equals: tr,
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
function ji(e, t, n) {
  let r = (
    /** @type {Effect | null} */
    k
  );
  r === null && fi();
  var i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), s = lt(
    /** @type {V} */
    F
  ), u = !E, a = /* @__PURE__ */ new Map();
  return es(() => {
    var f = (
      /** @type {Effect} */
      k
    ), o = $n();
    i = o.promise;
    try {
      Promise.resolve(e()).then(o.resolve, o.reject).finally(Zt);
    } catch (d) {
      o.reject(d), Zt();
    }
    var v = (
      /** @type {Batch} */
      x
    );
    if (u) {
      if ((f.f & at) !== 0)
        var _ = dr();
      if (
        /** @type {Boundary} */
        r.b.is_rendered()
      )
        a.get(v)?.reject(Ne), a.delete(v);
      else {
        for (const d of a.values())
          d.reject(Ne);
        a.clear();
      }
      a.set(v, o);
    }
    const h = (d, c = void 0) => {
      if (_) {
        var m = c === Ne;
        _(m);
      }
      if (!(c === Ne || (f.f & ae) !== 0)) {
        if (v.activate(), c)
          s.f |= Ue, yt(s, c);
        else {
          (s.f & Ue) !== 0 && (s.f ^= Ue), yt(s, d);
          for (const [w, T] of a) {
            if (a.delete(w), w === v) break;
            T.reject(Ne);
          }
        }
        v.deactivate();
      }
    };
    o.promise.then(h, (d) => h(null, d || "unknown"));
  }), Xi(() => {
    for (const f of a.values())
      f.reject(Ne);
  }), new Promise((f) => {
    function o(v) {
      function _() {
        v === i ? f(s) : o(i);
      }
      v.then(_, _);
    }
    o(i);
  });
}
// @__NO_SIDE_EFFECTS__
function Bn(e) {
  const t = /* @__PURE__ */ Tn(e);
  return Rr(t), t;
}
// @__NO_SIDE_EFFECTS__
function Vi(e) {
  const t = /* @__PURE__ */ Tn(e);
  return t.equals = nr, t;
}
function Ui(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      Y(
        /** @type {Effect} */
        t[n]
      );
  }
}
function An(e) {
  var t, n = k, r = e.parent;
  if (!He && r !== null && (r.f & (ae | q)) !== 0)
    return ki(), e.v;
  xe(r);
  try {
    e.f &= ~it, Ui(e), t = Fr(e);
  } finally {
    xe(n);
  }
  return t;
}
function hr(e) {
  var t = An(e);
  if (!e.equals(t) && (e.wv = Or(), (!x?.is_fork || e.deps === null) && (x !== null ? x.capture(e, t, !0) : e.v = t, e.deps === null))) {
    R(e, O);
    return;
  }
  He || (he !== null ? (Nn() || x?.is_fork) && he.set(e, t) : kn(e));
}
function Bi(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      (t.teardown || t.ac) && (t.teardown?.(), t.ac?.abort(Ne), t.teardown = ii, t.ac = null, Ot(t, 0), Rn(t));
}
function _r(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      t.teardown && Et(t);
}
let bn = /* @__PURE__ */ new Set();
const et = /* @__PURE__ */ new Map();
let pr = !1;
function lt(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: tr,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function ie(e, t) {
  const n = lt(e);
  return Rr(n), n;
}
// @__NO_SIDE_EFFECTS__
function Hi(e, t = !1, n = !0) {
  const r = lt(e);
  return t || (r.equals = nr), r;
}
function L(e, t, n = !1) {
  E !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!_e || (E.f & vn) !== 0) && sr() && (E.f & (P | Ee | Ct | vn)) !== 0 && (fe === null || !gt.call(fe, e)) && pi();
  let r = n ? ut(t) : t;
  return yt(e, r, Bt);
}
function yt(e, t, n = null) {
  if (!e.equals(t)) {
    et.set(e, He ? t : e.v);
    var r = st.ensure();
    if (r.capture(e, t), (e.f & P) !== 0) {
      const i = (
        /** @type {Derived} */
        e
      );
      (e.f & I) !== 0 && An(i), he === null && kn(i);
    }
    e.wv = Or(), gr(e, I, n), k !== null && (k.f & O) !== 0 && (k.f & (pe | Be)) === 0 && (ee === null ? is([e]) : ee.push(e)), !r.is_fork && bn.size > 0 && !pr && Yi();
  }
  return t;
}
function Yi() {
  pr = !1;
  for (const e of bn)
    (e.f & O) !== 0 && R(e, ke), qt(e) && Et(e);
  bn.clear();
}
function Rt(e) {
  L(e, e.v + 1);
}
function gr(e, t, n) {
  var r = e.reactions;
  if (r !== null)
    for (var i = r.length, s = 0; s < i; s++) {
      var u = r[s], a = u.f, f = (a & I) === 0;
      if (f && R(u, t), (a & P) !== 0) {
        var o = (
          /** @type {Derived} */
          u
        );
        he?.delete(o), (a & it) === 0 && (a & le && (k === null || (k.f & Xt) === 0) && (u.f |= it), gr(o, ke, n));
      } else if (f) {
        var v = (
          /** @type {Effect} */
          u
        );
        (a & Ee) !== 0 && Ae !== null && Ae.add(v), n !== null ? n.push(v) : Sn(v);
      }
    }
}
function ut(e) {
  if (typeof e != "object" || e === null || fn in e)
    return e;
  const t = ri(e);
  if (t !== ti && t !== ni)
    return e;
  var n = /* @__PURE__ */ new Map(), r = Qn(e), i = /* @__PURE__ */ ie(0), s = rt, u = (a) => {
    if (rt === s)
      return a();
    var f = E, o = rt;
    ue(null), Kn(s);
    var v = a();
    return ue(f), Kn(o), v;
  };
  return r && n.set("length", /* @__PURE__ */ ie(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(a, f, o) {
        (!("value" in o) || o.configurable === !1 || o.enumerable === !1 || o.writable === !1) && hi();
        var v = n.get(f);
        return v === void 0 ? u(() => {
          var _ = /* @__PURE__ */ ie(o.value);
          return n.set(f, _), _;
        }) : L(v, o.value, !0), !0;
      },
      deleteProperty(a, f) {
        var o = n.get(f);
        if (o === void 0) {
          if (f in a) {
            const v = u(() => /* @__PURE__ */ ie(F));
            n.set(f, v), Rt(i);
          }
        } else
          L(o, F), Rt(i);
        return !0;
      },
      get(a, f, o) {
        if (f === fn)
          return e;
        var v = n.get(f), _ = f in a;
        if (v === void 0 && (!_ || Mt(a, f)?.writable) && (v = u(() => {
          var d = ut(_ ? a[f] : F), c = /* @__PURE__ */ ie(d);
          return c;
        }), n.set(f, v)), v !== void 0) {
          var h = g(v);
          return h === F ? void 0 : h;
        }
        return Reflect.get(a, f, o);
      },
      getOwnPropertyDescriptor(a, f) {
        var o = Reflect.getOwnPropertyDescriptor(a, f);
        if (o && "value" in o) {
          var v = n.get(f);
          v && (o.value = g(v));
        } else if (o === void 0) {
          var _ = n.get(f), h = _?.v;
          if (_ !== void 0 && h !== F)
            return {
              enumerable: !0,
              configurable: !0,
              value: h,
              writable: !0
            };
        }
        return o;
      },
      has(a, f) {
        if (f === fn)
          return !0;
        var o = n.get(f), v = o !== void 0 && o.v !== F || Reflect.has(a, f);
        if (o !== void 0 || k !== null && (!v || Mt(a, f)?.writable)) {
          o === void 0 && (o = u(() => {
            var h = v ? ut(a[f]) : F, d = /* @__PURE__ */ ie(h);
            return d;
          }), n.set(f, o));
          var _ = g(o);
          if (_ === F)
            return !1;
        }
        return v;
      },
      set(a, f, o, v) {
        var _ = n.get(f), h = f in a;
        if (r && f === "length")
          for (var d = o; d < /** @type {Source<number>} */
          _.v; d += 1) {
            var c = n.get(d + "");
            c !== void 0 ? L(c, F) : d in a && (c = u(() => /* @__PURE__ */ ie(F)), n.set(d + "", c));
          }
        if (_ === void 0)
          (!h || Mt(a, f)?.writable) && (_ = u(() => /* @__PURE__ */ ie(void 0)), L(_, ut(o)), n.set(f, _));
        else {
          h = _.v !== F;
          var m = u(() => ut(o));
          L(_, m);
        }
        var w = Reflect.getOwnPropertyDescriptor(a, f);
        if (w?.set && w.set.call(v, o), !h) {
          if (r && typeof f == "string") {
            var T = (
              /** @type {Source<number>} */
              n.get("length")
            ), S = Number(f);
            Number.isInteger(S) && S >= T.v && L(T, S + 1);
          }
          Rt(i);
        }
        return !0;
      },
      ownKeys(a) {
        g(i);
        var f = Reflect.ownKeys(a).filter((_) => {
          var h = n.get(_);
          return h === void 0 || h.v !== F;
        });
        for (var [o, v] of n)
          v.v !== F && !(o in a) && f.push(o);
        return f;
      },
      setPrototypeOf() {
        _i();
      }
    }
  );
}
var Hn, br, mr, wr;
function Ki() {
  if (Hn === void 0) {
    Hn = window, br = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    mr = Mt(t, "firstChild").get, wr = Mt(t, "nextSibling").get, qn(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), qn(n) && (n.__t = void 0);
  }
}
function tt(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function yr(e) {
  return (
    /** @type {TemplateNode | null} */
    mr.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function rn(e) {
  return (
    /** @type {TemplateNode | null} */
    wr.call(e)
  );
}
function U(e, t) {
  return /* @__PURE__ */ yr(e);
}
function ge(e, t = 1, n = !1) {
  let r = e;
  for (; t--; )
    r = /** @type {TemplateNode} */
    /* @__PURE__ */ rn(r);
  return r;
}
function Gi(e) {
  e.textContent = "";
}
function Er() {
  return !1;
}
function kr(e, t, n) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElementNS(Ei, e, void 0)
  );
}
function xr(e) {
  var t = E, n = k;
  ue(null), xe(null);
  try {
    return e();
  } finally {
    ue(t), xe(n);
  }
}
function Ji(e) {
  k === null && (E === null && vi(), ci()), He && ui();
}
function Wi(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function Fe(e, t) {
  var n = k;
  n !== null && (n.f & q) !== 0 && (e |= q);
  var r = {
    ctx: oe,
    deps: null,
    nodes: null,
    f: e | I | le,
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
  x?.register_created_effect(r);
  var i = r;
  if ((e & bt) !== 0)
    ot !== null ? ot.push(r) : st.ensure().schedule(r);
  else if (t !== null) {
    try {
      Et(r);
    } catch (u) {
      throw Y(r), u;
    }
    i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && // either `null`, or a singular child
    (i.f & kt) === 0 && (i = i.first, (e & Ee) !== 0 && (e & mt) !== 0 && i !== null && (i.f |= mt));
  }
  if (i !== null && (i.parent = n, n !== null && Wi(i, n), E !== null && (E.f & P) !== 0 && (e & Be) === 0)) {
    var s = (
      /** @type {Derived} */
      E
    );
    (s.effects ?? (s.effects = [])).push(i);
  }
  return r;
}
function Nn() {
  return E !== null && !_e;
}
function Xi(e) {
  const t = Fe(nn, null);
  return R(t, O), t.teardown = e, t;
}
function Zi(e) {
  Ji();
  var t = (
    /** @type {Effect} */
    k.f
  ), n = !E && (t & pe) !== 0 && (t & at) === 0;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      oe
    );
    (r.e ?? (r.e = [])).push(e);
  } else
    return Sr(e);
}
function Sr(e) {
  return Fe(bt | ai, e);
}
function Qi(e) {
  st.ensure();
  const t = Fe(Be | kt, e);
  return (n = {}) => new Promise((r) => {
    n.outro ? nt(t, () => {
      Y(t), r(void 0);
    }) : (Y(t), r(void 0));
  });
}
function $i(e) {
  return Fe(bt, e);
}
function es(e) {
  return Fe(Ct | kt, e);
}
function ts(e, t = 0) {
  return Fe(nn | t, e);
}
function Ke(e, t = [], n = [], r = []) {
  Li(r, t, n, (i) => {
    Fe(nn, () => e(...i.map(g)));
  });
}
function Mn(e, t = 0) {
  var n = Fe(Ee | t, e);
  return n;
}
function se(e) {
  return Fe(pe | kt, e);
}
function Tr(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = He, r = E;
    Yn(!0), ue(null);
    try {
      t.call(null);
    } finally {
      Yn(n), ue(r);
    }
  }
}
function Rn(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const i = n.ac;
    i !== null && xr(() => {
      i.abort(Ne);
    });
    var r = n.next;
    (n.f & Be) !== 0 ? n.parent = null : Y(n, t), n = r;
  }
}
function ns(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & pe) === 0 && Y(t), t = n;
  }
}
function Y(e, t = !0) {
  var n = !1;
  (t || (e.f & li) !== 0) && e.nodes !== null && e.nodes.end !== null && (rs(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), n = !0), R(e, jn), Rn(e, t && !n), Ot(e, 0);
  var r = e.nodes && e.nodes.t;
  if (r !== null)
    for (const s of r)
      s.stop();
  Tr(e), e.f ^= jn, e.f |= ae;
  var i = e.parent;
  i !== null && i.first !== null && Ar(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function rs(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : /* @__PURE__ */ rn(e);
    e.remove(), e = n;
  }
}
function Ar(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function nt(e, t, n = !0) {
  var r = [];
  Nr(e, r, !0);
  var i = () => {
    n && Y(e), t && t();
  }, s = r.length;
  if (s > 0) {
    var u = () => --s || i();
    for (var a of r)
      a.out(u);
  } else
    i();
}
function Nr(e, t, n) {
  if ((e.f & q) === 0) {
    e.f ^= q;
    var r = e.nodes && e.nodes.t;
    if (r !== null)
      for (const a of r)
        (a.is_global || n) && t.push(a);
    for (var i = e.first; i !== null; ) {
      var s = i.next;
      if ((i.f & Be) === 0) {
        var u = (i.f & mt) !== 0 || // If this is a branch effect without a block effect parent,
        // it means the parent block effect was pruned. In that case,
        // transparency information was transferred to the branch effect.
        (i.f & pe) !== 0 && (e.f & Ee) !== 0;
        Nr(i, t, u ? n : !1);
      }
      i = s;
    }
  }
}
function Cn(e) {
  Mr(e, !0);
}
function Mr(e, t) {
  if ((e.f & q) !== 0) {
    e.f ^= q, (e.f & O) === 0 && (R(e, I), st.ensure().schedule(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, i = (n.f & mt) !== 0 || (n.f & pe) !== 0;
      Mr(n, i ? t : !1), n = r;
    }
    var s = e.nodes && e.nodes.t;
    if (s !== null)
      for (const u of s)
        (u.is_global || t) && u.in();
  }
}
function On(e, t) {
  if (e.nodes)
    for (var n = e.nodes.start, r = e.nodes.end; n !== null; ) {
      var i = n === r ? null : /* @__PURE__ */ rn(n);
      t.append(n), n = i;
    }
}
let Wt = !1, He = !1;
function Yn(e) {
  He = e;
}
let E = null, _e = !1;
function ue(e) {
  E = e;
}
let k = null;
function xe(e) {
  k = e;
}
let fe = null;
function Rr(e) {
  E !== null && (fe === null ? fe = [e] : fe.push(e));
}
let H = null, J = 0, ee = null;
function is(e) {
  ee = e;
}
let Cr = 1, Ge = 0, rt = Ge;
function Kn(e) {
  rt = e;
}
function Or() {
  return ++Cr;
}
function qt(e) {
  var t = e.f;
  if ((t & I) !== 0)
    return !0;
  if (t & P && (e.f &= ~it), (t & ke) !== 0) {
    for (var n = (
      /** @type {Value[]} */
      e.deps
    ), r = n.length, i = 0; i < r; i++) {
      var s = n[i];
      if (qt(
        /** @type {Derived} */
        s
      ) && hr(
        /** @type {Derived} */
        s
      ), s.wv > e.wv)
        return !0;
    }
    (t & le) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    he === null && R(e, O);
  }
  return !1;
}
function Dr(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null && !(fe !== null && gt.call(fe, e)))
    for (var i = 0; i < r.length; i++) {
      var s = r[i];
      (s.f & P) !== 0 ? Dr(
        /** @type {Derived} */
        s,
        t,
        !1
      ) : t === s && (n ? R(s, I) : (s.f & O) !== 0 && R(s, ke), Sn(
        /** @type {Effect} */
        s
      ));
    }
}
function Fr(e) {
  var m;
  var t = H, n = J, r = ee, i = E, s = fe, u = oe, a = _e, f = rt, o = e.f;
  H = /** @type {null | Value[]} */
  null, J = 0, ee = null, E = (o & (pe | Be)) === 0 ? e : null, fe = null, wt(e.ctx), _e = !1, rt = ++Ge, e.ac !== null && (xr(() => {
    e.ac.abort(Ne);
  }), e.ac = null);
  try {
    e.f |= Xt;
    var v = (
      /** @type {Function} */
      e.fn
    ), _ = v();
    e.f |= at;
    var h = e.deps, d = x?.is_fork;
    if (H !== null) {
      var c;
      if (d || Ot(e, J), h !== null && J > 0)
        for (h.length = J + H.length, c = 0; c < H.length; c++)
          h[J + c] = H[c];
      else
        e.deps = h = H;
      if (Nn() && (e.f & le) !== 0)
        for (c = J; c < h.length; c++)
          ((m = h[c]).reactions ?? (m.reactions = [])).push(e);
    } else !d && h !== null && J < h.length && (Ot(e, J), h.length = J);
    if (sr() && ee !== null && !_e && h !== null && (e.f & (P | ke | I)) === 0)
      for (c = 0; c < /** @type {Source[]} */
      ee.length; c++)
        Dr(
          ee[c],
          /** @type {Effect} */
          e
        );
    if (i !== null && i !== e) {
      if (Ge++, i.deps !== null)
        for (let w = 0; w < n; w += 1)
          i.deps[w].rv = Ge;
      if (t !== null)
        for (const w of t)
          w.rv = Ge;
      ee !== null && (r === null ? r = ee : r.push(.../** @type {Source[]} */
      ee));
    }
    return (e.f & Ue) !== 0 && (e.f ^= Ue), _;
  } catch (w) {
    return lr(w);
  } finally {
    e.f ^= Xt, H = t, J = n, ee = r, E = i, fe = s, wt(u), _e = a, rt = f;
  }
}
function ss(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = $r.call(n, e);
    if (r !== -1) {
      var i = n.length - 1;
      i === 0 ? n = t.reactions = null : (n[r] = n[i], n.pop());
    }
  }
  if (n === null && (t.f & P) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (H === null || !gt.call(H, t))) {
    var s = (
      /** @type {Derived} */
      t
    );
    (s.f & le) !== 0 && (s.f ^= le, s.f &= ~it), s.v !== F && kn(s), Bi(s), Ot(s, 0);
  }
}
function Ot(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      ss(e, n[r]);
}
function Et(e) {
  var t = e.f;
  if ((t & ae) === 0) {
    R(e, O);
    var n = k, r = Wt;
    k = e, Wt = !0;
    try {
      (t & (Ee | er)) !== 0 ? ns(e) : Rn(e), Tr(e);
      var i = Fr(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = Cr;
      var s;
    } finally {
      Wt = r, k = n;
    }
  }
}
function g(e) {
  var t = e.f, n = (t & P) !== 0;
  if (E !== null && !_e) {
    var r = k !== null && (k.f & ae) !== 0;
    if (!r && (fe === null || !gt.call(fe, e))) {
      var i = E.deps;
      if ((E.f & Xt) !== 0)
        e.rv < Ge && (e.rv = Ge, H === null && i !== null && i[J] === e ? J++ : H === null ? H = [e] : H.push(e));
      else {
        (E.deps ?? (E.deps = [])).push(e);
        var s = e.reactions;
        s === null ? e.reactions = [E] : gt.call(s, E) || s.push(E);
      }
    }
  }
  if (He && et.has(e))
    return et.get(e);
  if (n) {
    var u = (
      /** @type {Derived} */
      e
    );
    if (He) {
      var a = u.v;
      return ((u.f & O) === 0 && u.reactions !== null || Pr(u)) && (a = An(u)), et.set(u, a), a;
    }
    var f = (u.f & le) === 0 && !_e && E !== null && (Wt || (E.f & le) !== 0), o = (u.f & at) === 0;
    qt(u) && (f && (u.f |= le), hr(u)), f && !o && (_r(u), Ir(u));
  }
  if (he?.has(e))
    return he.get(e);
  if ((e.f & Ue) !== 0)
    throw e.v;
  return e.v;
}
function Ir(e) {
  if (e.f |= le, e.deps !== null)
    for (const t of e.deps)
      (t.reactions ?? (t.reactions = [])).push(e), (t.f & P) !== 0 && (t.f & le) === 0 && (_r(
        /** @type {Derived} */
        t
      ), Ir(
        /** @type {Derived} */
        t
      ));
}
function Pr(e) {
  if (e.v === F) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (et.has(t) || (t.f & P) !== 0 && Pr(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function ls(e) {
  var t = _e;
  try {
    return _e = !0, e();
  } finally {
    _e = t;
  }
}
const as = ["touchstart", "touchmove"];
function fs(e) {
  return as.includes(e);
}
const Je = Symbol("events"), zr = /* @__PURE__ */ new Set(), mn = /* @__PURE__ */ new Set();
function St(e, t, n) {
  (t[Je] ?? (t[Je] = {}))[e] = n;
}
function os(e) {
  for (var t = 0; t < e.length; t++)
    zr.add(e[t]);
  for (var n of mn)
    n(e);
}
let Gn = null;
function Jn(e) {
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), r = e.type, i = e.composedPath?.() || [], s = (
    /** @type {null | Element} */
    i[0] || e.target
  );
  Gn = e;
  var u = 0, a = Gn === e && e[Je];
  if (a) {
    var f = i.indexOf(a);
    if (f !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e[Je] = t;
      return;
    }
    var o = i.indexOf(t);
    if (o === -1)
      return;
    f <= o && (u = f);
  }
  if (s = /** @type {Element} */
  i[u] || e.target, s !== t) {
    ei(e, "currentTarget", {
      configurable: !0,
      get() {
        return s || n;
      }
    });
    var v = E, _ = k;
    ue(null), xe(null);
    try {
      for (var h, d = []; s !== null; ) {
        var c = s.assignedSlot || s.parentNode || /** @type {any} */
        s.host || null;
        try {
          var m = s[Je]?.[r];
          m != null && (!/** @type {any} */
          s.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === s) && m.call(s, e);
        } catch (w) {
          h ? d.push(w) : h = w;
        }
        if (e.cancelBubble || c === t || c === null)
          break;
        s = c;
      }
      if (h) {
        for (let w of d)
          queueMicrotask(() => {
            throw w;
          });
        throw h;
      }
    } finally {
      e[Je] = t, delete e.currentTarget, ue(v), xe(_);
    }
  }
}
const us = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (e) => e
  })
);
function cs(e) {
  return (
    /** @type {string} */
    us?.createHTML(e) ?? e
  );
}
function vs(e) {
  var t = kr("template");
  return t.innerHTML = cs(e.replaceAll("<!>", "<!---->")), t.content;
}
function ds(e, t) {
  var n = (
    /** @type {Effect} */
    k
  );
  n.nodes === null && (n.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function Se(e, t) {
  var n = (t & yi) !== 0, r, i = !e.startsWith("<!>");
  return () => {
    r === void 0 && (r = vs(i ? e : "<!>" + e), r = /** @type {TemplateNode} */
    /* @__PURE__ */ yr(r));
    var s = (
      /** @type {TemplateNode} */
      n || br ? document.importNode(r, !0) : r.cloneNode(!0)
    );
    return ds(s, s), s;
  };
}
function be(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function ze(e, t) {
  var n = t == null ? "" : typeof t == "object" ? `${t}` : t;
  n !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = n, e.nodeValue = `${n}`);
}
function hs(e, t) {
  return _s(e, t);
}
const Vt = /* @__PURE__ */ new Map();
function _s(e, { target: t, anchor: n, props: r = {}, events: i, context: s, intro: u = !0, transformError: a }) {
  Ki();
  var f = void 0, o = Qi(() => {
    var v = n ?? t.appendChild(tt());
    Di(
      /** @type {TemplateNode} */
      v,
      {
        pending: () => {
        }
      },
      (d) => {
        rr({});
        var c = (
          /** @type {ComponentContext} */
          oe
        );
        s && (c.c = s), i && (r.$$events = i), f = e(d, r) || {}, ir();
      },
      a
    );
    var _ = /* @__PURE__ */ new Set(), h = (d) => {
      for (var c = 0; c < d.length; c++) {
        var m = d[c];
        if (!_.has(m)) {
          _.add(m);
          var w = fs(m);
          for (const j of [t, document]) {
            var T = Vt.get(j);
            T === void 0 && (T = /* @__PURE__ */ new Map(), Vt.set(j, T));
            var S = T.get(m);
            S === void 0 ? (j.addEventListener(m, Jn, { passive: w }), T.set(m, 1)) : T.set(m, S + 1);
          }
        }
      }
    };
    return h(tn(zr)), mn.add(h), () => {
      for (var d of _)
        for (const w of [t, document]) {
          var c = (
            /** @type {Map<string, number>} */
            Vt.get(w)
          ), m = (
            /** @type {number} */
            c.get(d)
          );
          --m == 0 ? (w.removeEventListener(d, Jn), c.delete(d), c.size === 0 && Vt.delete(w)) : c.set(d, m);
        }
      mn.delete(h), v !== n && v.parentNode?.removeChild(v);
    };
  });
  return wn.set(f, o), f;
}
let wn = /* @__PURE__ */ new WeakMap();
function ps(e, t) {
  const n = wn.get(e);
  return n ? (wn.delete(e), n(t)) : Promise.resolve();
}
var de, ye, Z, $e, zt, Lt, en;
class gs {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, n = !0) {
    /** @type {TemplateNode} */
    ve(this, "anchor");
    /** @type {Map<Batch, Key>} */
    b(this, de, /* @__PURE__ */ new Map());
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
    b(this, ye, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    b(this, Z, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    b(this, $e, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    b(this, zt, !0);
    /**
     * @param {Batch} batch
     */
    b(this, Lt, (t) => {
      if (l(this, de).has(t)) {
        var n = (
          /** @type {Key} */
          l(this, de).get(t)
        ), r = l(this, ye).get(n);
        if (r)
          Cn(r), l(this, $e).delete(n);
        else {
          var i = l(this, Z).get(n);
          i && (l(this, ye).set(n, i.effect), l(this, Z).delete(n), i.fragment.lastChild.remove(), this.anchor.before(i.fragment), r = i.effect);
        }
        for (const [s, u] of l(this, de)) {
          if (l(this, de).delete(s), s === t)
            break;
          const a = l(this, Z).get(u);
          a && (Y(a.effect), l(this, Z).delete(u));
        }
        for (const [s, u] of l(this, ye)) {
          if (s === n || l(this, $e).has(s)) continue;
          const a = () => {
            if (Array.from(l(this, de).values()).includes(s)) {
              var o = document.createDocumentFragment();
              On(u, o), o.append(tt()), l(this, Z).set(s, { effect: u, fragment: o });
            } else
              Y(u);
            l(this, $e).delete(s), l(this, ye).delete(s);
          };
          l(this, zt) || !r ? (l(this, $e).add(s), nt(u, a, !1)) : a();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    b(this, en, (t) => {
      l(this, de).delete(t);
      const n = Array.from(l(this, de).values());
      for (const [r, i] of l(this, Z))
        n.includes(r) || (Y(i.effect), l(this, Z).delete(r));
    });
    this.anchor = t, y(this, zt, n);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, n) {
    var r = (
      /** @type {Batch} */
      x
    ), i = Er();
    if (n && !l(this, ye).has(t) && !l(this, Z).has(t))
      if (i) {
        var s = document.createDocumentFragment(), u = tt();
        s.append(u), l(this, Z).set(t, {
          effect: se(() => n(u)),
          fragment: s
        });
      } else
        l(this, ye).set(
          t,
          se(() => n(this.anchor))
        );
    if (l(this, de).set(r, t), i) {
      for (const [a, f] of l(this, ye))
        a === t ? r.unskip_effect(f) : r.skip_effect(f);
      for (const [a, f] of l(this, Z))
        a === t ? r.unskip_effect(f.effect) : r.skip_effect(f.effect);
      r.oncommit(l(this, Lt)), r.ondiscard(l(this, en));
    } else
      l(this, Lt).call(this, r);
  }
}
de = new WeakMap(), ye = new WeakMap(), Z = new WeakMap(), $e = new WeakMap(), zt = new WeakMap(), Lt = new WeakMap(), en = new WeakMap();
function Tt(e, t, n = !1) {
  var r = new gs(e), i = n ? mt : 0;
  function s(u, a) {
    r.ensure(u, a);
  }
  Mn(() => {
    var u = !1;
    t((a, f = 0) => {
      u = !0, s(f, a);
    }), u || s(-1, null);
  }, i);
}
function bs(e, t, n) {
  for (var r = [], i = t.length, s, u = t.length, a = 0; a < i; a++) {
    let _ = t[a];
    nt(
      _,
      () => {
        if (s) {
          if (s.pending.delete(_), s.done.add(_), s.pending.size === 0) {
            var h = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            yn(e, tn(s.done)), h.delete(s), h.size === 0 && (e.outrogroups = null);
          }
        } else
          u -= 1;
      },
      !1
    );
  }
  if (u === 0) {
    var f = r.length === 0 && n !== null;
    if (f) {
      var o = (
        /** @type {Element} */
        n
      ), v = (
        /** @type {Element} */
        o.parentNode
      );
      Gi(v), v.append(o), e.items.clear();
    }
    yn(e, t, !f);
  } else
    s = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ?? (e.outrogroups = /* @__PURE__ */ new Set())).add(s);
}
function yn(e, t, n = !0) {
  var r;
  if (e.pending.size > 0) {
    r = /* @__PURE__ */ new Set();
    for (const u of e.pending.values())
      for (const a of u)
        r.add(
          /** @type {EachItem} */
          e.items.get(a).e
        );
  }
  for (var i = 0; i < t.length; i++) {
    var s = t[i];
    if (r?.has(s)) {
      s.f |= De;
      const u = document.createDocumentFragment();
      On(s, u);
    } else
      Y(t[i], n);
  }
}
var Wn;
function ms(e, t, n, r, i, s = null) {
  var u = e, a = /* @__PURE__ */ new Map();
  {
    var f = (
      /** @type {Element} */
      e
    );
    u = f.appendChild(tt());
  }
  var o = null, v = /* @__PURE__ */ Vi(() => {
    var S = n();
    return Qn(S) ? S : S == null ? [] : tn(S);
  }), _, h = /* @__PURE__ */ new Map(), d = !0;
  function c(S) {
    (T.effect.f & ae) === 0 && (T.pending.delete(S), T.fallback = o, ws(T, _, u, t, r), o !== null && (_.length === 0 ? (o.f & De) === 0 ? Cn(o) : (o.f ^= De, Nt(o, null, u)) : nt(o, () => {
      o = null;
    })));
  }
  function m(S) {
    T.pending.delete(S);
  }
  var w = Mn(() => {
    _ = /** @type {V[]} */
    g(v);
    for (var S = _.length, j = /* @__PURE__ */ new Set(), Q = (
      /** @type {Batch} */
      x
    ), Te = Er(), $ = 0; $ < S; $ += 1) {
      var Ie = _[$], V = r(Ie, $), K = d ? null : a.get(V);
      K ? (K.v && yt(K.v, Ie), K.i && yt(K.i, $), Te && Q.unskip_effect(K.e)) : (K = ys(
        a,
        d ? u : Wn ?? (Wn = tt()),
        Ie,
        V,
        $,
        i,
        t,
        n
      ), d || (K.e.f |= De), a.set(V, K)), j.add(V);
    }
    if (S === 0 && s && !o && (d ? o = se(() => s(u)) : (o = se(() => s(Wn ?? (Wn = tt()))), o.f |= De)), S > j.size && oi(), !d)
      if (h.set(Q, j), Te) {
        for (const [jt, xt] of a)
          j.has(jt) || Q.skip_effect(xt.e);
        Q.oncommit(c), Q.ondiscard(m);
      } else
        c(Q);
    g(v);
  }), T = { effect: w, items: a, pending: h, outrogroups: null, fallback: o };
  d = !1;
}
function At(e) {
  for (; e !== null && (e.f & pe) === 0; )
    e = e.next;
  return e;
}
function ws(e, t, n, r, i) {
  var s = t.length, u = e.items, a = At(e.effect.first), f, o = null, v = [], _ = [], h, d, c, m;
  for (m = 0; m < s; m += 1) {
    if (h = t[m], d = i(h, m), c = /** @type {EachItem} */
    u.get(d).e, e.outrogroups !== null)
      for (const V of e.outrogroups)
        V.pending.delete(c), V.done.delete(c);
    if ((c.f & q) !== 0 && Cn(c), (c.f & De) !== 0)
      if (c.f ^= De, c === a)
        Nt(c, null, n);
      else {
        var w = o ? o.next : a;
        c === e.effect.last && (e.effect.last = c.prev), c.prev && (c.prev.next = c.next), c.next && (c.next.prev = c.prev), Le(e, o, c), Le(e, c, w), Nt(c, w, n), o = c, v = [], _ = [], a = At(o.next);
        continue;
      }
    if (c !== a) {
      if (f !== void 0 && f.has(c)) {
        if (v.length < _.length) {
          var T = _[0], S;
          o = T.prev;
          var j = v[0], Q = v[v.length - 1];
          for (S = 0; S < v.length; S += 1)
            Nt(v[S], T, n);
          for (S = 0; S < _.length; S += 1)
            f.delete(_[S]);
          Le(e, j.prev, Q.next), Le(e, o, j), Le(e, Q, T), a = T, o = Q, m -= 1, v = [], _ = [];
        } else
          f.delete(c), Nt(c, a, n), Le(e, c.prev, c.next), Le(e, c, o === null ? e.effect.first : o.next), Le(e, o, c), o = c;
        continue;
      }
      for (v = [], _ = []; a !== null && a !== c; )
        (f ?? (f = /* @__PURE__ */ new Set())).add(a), _.push(a), a = At(a.next);
      if (a === null)
        continue;
    }
    (c.f & De) === 0 && v.push(c), o = c, a = At(c.next);
  }
  if (e.outrogroups !== null) {
    for (const V of e.outrogroups)
      V.pending.size === 0 && (yn(e, tn(V.done)), e.outrogroups?.delete(V));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (a !== null || f !== void 0) {
    var Te = [];
    if (f !== void 0)
      for (c of f)
        (c.f & q) === 0 && Te.push(c);
    for (; a !== null; )
      (a.f & q) === 0 && a !== e.fallback && Te.push(a), a = At(a.next);
    var $ = Te.length;
    if ($ > 0) {
      var Ie = s === 0 ? n : null;
      bs(e, Te, Ie);
    }
  }
}
function ys(e, t, n, r, i, s, u, a) {
  var f = (u & bi) !== 0 ? (u & wi) === 0 ? /* @__PURE__ */ Hi(n, !1, !1) : lt(n) : null, o = (u & mi) !== 0 ? lt(i) : null;
  return {
    v: f,
    i: o,
    e: se(() => (s(t, f ?? n, o ?? i, a), () => {
      e.delete(r);
    }))
  };
}
function Nt(e, t, n) {
  if (e.nodes)
    for (var r = e.nodes.start, i = e.nodes.end, s = t && (t.f & De) === 0 ? (
      /** @type {EffectNodes} */
      t.nodes.start
    ) : n; r !== null; ) {
      var u = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ rn(r)
      );
      if (s.before(r), r === i)
        return;
      r = u;
    }
}
function Le(e, t, n) {
  t === null ? e.effect.first = n : t.next = n, n === null ? e.effect.last = t : n.prev = t;
}
function Es(e, t) {
  $i(() => {
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
      const i = kr("style");
      i.id = t.hash, i.textContent = t.code, r.appendChild(i);
    }
  });
}
const Xn = [...` 	
\r\f \v\uFEFF`];
function ks(e, t, n) {
  var r = e == null ? "" : "" + e;
  if (n) {
    for (var i of Object.keys(n))
      if (n[i])
        r = r ? r + " " + i : i;
      else if (r.length)
        for (var s = i.length, u = 0; (u = r.indexOf(i, u)) >= 0; ) {
          var a = u + s;
          (u === 0 || Xn.includes(r[u - 1])) && (a === r.length || Xn.includes(r[a])) ? r = (u === 0 ? "" : r.substring(0, u)) + r.substring(a + 1) : u = a;
        }
  }
  return r === "" ? null : r;
}
function un(e, t, n, r, i, s) {
  var u = e.__className;
  if (u !== n || u === void 0) {
    var a = ks(n, r, s);
    a == null ? e.removeAttribute("class") : e.className = a, e.__className = n;
  } else if (s && i !== s)
    for (var f in s) {
      var o = !!s[f];
      (i == null || o !== !!i[f]) && e.classList.toggle(f, o);
    }
  return s;
}
function Ut(e, t, n, r) {
  var i = (
    /** @type {V} */
    r
  ), s = !0, u = () => (s && (s = !1, i = /** @type {V} */
  r), i), a;
  a = /** @type {V} */
  e[t], a === void 0 && r !== void 0 && (a = u());
  var f;
  return f = () => {
    var o = (
      /** @type {V} */
      e[t]
    );
    return o === void 0 ? u() : (s = !0, o);
  }, f;
}
const xs = "5";
var Zn;
typeof window < "u" && ((Zn = window.__svelte ?? (window.__svelte = {})).v ?? (Zn.v = /* @__PURE__ */ new Set())).add(xs);
var Ss = /* @__PURE__ */ Se('<span class="count svelte-1a3vahb"> </span>'), Ts = /* @__PURE__ */ Se('<div class="empty svelte-1a3vahb">Loading notifications…</div>'), As = /* @__PURE__ */ Se('<div class="error svelte-1a3vahb"> </div>'), Ns = /* @__PURE__ */ Se('<div class="empty svelte-1a3vahb"> </div>'), Ms = /* @__PURE__ */ Se('<span class="time svelte-1a3vahb"> </span>'), Rs = /* @__PURE__ */ Se('<p class="body svelte-1a3vahb"> </p>'), Cs = /* @__PURE__ */ Se('<button class="link small svelte-1a3vahb">Mark read</button>'), Os = /* @__PURE__ */ Se('<div><div class="item-header svelte-1a3vahb"><span class="title svelte-1a3vahb"> </span> <!></div> <!> <!></div>'), Ds = /* @__PURE__ */ Se('<div class="list svelte-1a3vahb"></div>'), Fs = /* @__PURE__ */ Se('<div class="rt-notif svelte-1a3vahb"><div class="header svelte-1a3vahb"><h2 class="svelte-1a3vahb">Notifications</h2> <!> <span class="badge svelte-1a3vahb"> </span> <div class="actions svelte-1a3vahb"><button class="link svelte-1a3vahb">Mark all read</button> <button class="refresh svelte-1a3vahb">↻</button></div></div> <div class="tabs svelte-1a3vahb"><button>All</button> <button> </button></div> <!></div>');
const Is = {
  hash: "svelte-1a3vahb",
  code: ".rt-notif.svelte-1a3vahb {font-family:system-ui, -apple-system, sans-serif;max-width:640px;margin:0 auto;padding:1.5rem;}.header.svelte-1a3vahb {display:flex;align-items:center;gap:0.5rem;margin-bottom:1rem;flex-wrap:wrap;}.header.svelte-1a3vahb h2:where(.svelte-1a3vahb) {margin:0;font-size:1.5rem;}.count.svelte-1a3vahb {background:#ef4444;color:#fff;padding:0.1rem 0.45rem;border-radius:9999px;font-size:0.7rem;font-weight:600;}.badge.svelte-1a3vahb {background:#e0e7ff;color:#3730a3;padding:0.15rem 0.5rem;border-radius:9999px;font-size:0.75rem;}.actions.svelte-1a3vahb {margin-left:auto;display:flex;gap:0.5rem;}.link.svelte-1a3vahb {background:none;border:none;color:#4f46e5;cursor:pointer;font-size:0.8rem;padding:0;}.link.svelte-1a3vahb:hover {text-decoration:underline;}.link.svelte-1a3vahb:disabled {color:#9ca3af;}.link.small.svelte-1a3vahb {font-size:0.75rem;}.refresh.svelte-1a3vahb {padding:0.25rem 0.5rem;background:#f3f4f6;border:1px solid #d1d5db;border-radius:0.375rem;cursor:pointer;}.tabs.svelte-1a3vahb {display:flex;gap:0;border-bottom:2px solid #e5e7eb;margin-bottom:1rem;}.tabs.svelte-1a3vahb button:where(.svelte-1a3vahb) {padding:0.5rem 1rem;background:none;border:none;border-bottom:2px solid transparent;margin-bottom:-2px;cursor:pointer;font-size:0.875rem;color:#6b7280;}.tabs.svelte-1a3vahb button.active:where(.svelte-1a3vahb) {border-bottom-color:#4f46e5;color:#4f46e5;font-weight:500;}.empty.svelte-1a3vahb {color:#6b7280;text-align:center;padding:2rem;}.error.svelte-1a3vahb {background:#fef2f2;color:#991b1b;border:1px solid #fecaca;padding:0.75rem;border-radius:0.5rem;}.list.svelte-1a3vahb {display:flex;flex-direction:column;gap:0.5rem;}.item.svelte-1a3vahb {background:#fff;border:1px solid #e5e7eb;border-radius:0.5rem;padding:0.75rem 1rem;}.item.unread.svelte-1a3vahb {border-left:3px solid #4f46e5;}.item-header.svelte-1a3vahb {display:flex;justify-content:space-between;align-items:center;}.title.svelte-1a3vahb {font-weight:500;font-size:0.875rem;}.time.svelte-1a3vahb {color:#9ca3af;font-size:0.75rem;}.body.svelte-1a3vahb {margin:0.35rem 0 0;color:#4b5563;font-size:0.8rem;line-height:1.4;}"
};
function Ps(e, t) {
  rr(t, !0), Es(e, Is);
  let n = Ut(t, "extensionId", 3, "notifications"), r = Ut(t, "version", 3, "");
  Ut(t, "principal", 3, ""), Ut(t, "isAuthenticated", 3, !0);
  let i = /* @__PURE__ */ ie(ut([])), s = /* @__PURE__ */ ie(!0), u = /* @__PURE__ */ ie(""), a = /* @__PURE__ */ ie("all"), f = /* @__PURE__ */ Bn(() => g(a) === "unread" ? g(i).filter((p) => !p.read) : g(i)), o = /* @__PURE__ */ Bn(() => g(i).filter((p) => !p.read).length);
  async function v(p, N = "") {
    const D = await t.backend.extension_sync_call(JSON.stringify({ extension_name: n(), function_name: p, args: N }));
    return JSON.parse(D);
  }
  async function _() {
    L(s, !0), L(u, "");
    try {
      const p = await v("get_notifications", "{}");
      L(i, p?.data ?? p?.notifications ?? (Array.isArray(p) ? p : []), !0);
    } catch (p) {
      L(u, p?.message || String(p), !0);
    } finally {
      L(s, !1);
    }
  }
  async function h(p) {
    try {
      await v("mark_as_read", JSON.stringify({ id: p, read: !0 })), L(i, g(i).map((N) => N.id === p ? { ...N, read: !0 } : N), !0);
    } catch {
    }
  }
  async function d() {
    for (const p of g(i).filter((N) => !N.read))
      await h(p.id);
  }
  Zi(() => {
    _();
  });
  function c(p) {
    if (!p) return "";
    const N = typeof p == "number" ? p : Date.parse(p);
    if (isNaN(N)) return String(p);
    const D = Math.floor((Date.now() - N) / 1e3);
    return D < 60 ? "just now" : D < 3600 ? `${Math.floor(D / 60)}m ago` : D < 86400 ? `${Math.floor(D / 3600)}h ago` : `${Math.floor(D / 86400)}d ago`;
  }
  var m = Fs(), w = U(m), T = ge(U(w), 2);
  {
    var S = (p) => {
      var N = Ss(), D = U(N);
      Ke(() => ze(D, g(o))), be(p, N);
    };
    Tt(T, (p) => {
      g(o) > 0 && p(S);
    });
  }
  var j = ge(T, 2), Q = U(j), Te = ge(j, 2), $ = U(Te), Ie = ge($, 2), V = ge(w, 2), K = U(V);
  let jt;
  var xt = ge(K, 2);
  let Dn;
  var Lr = U(xt), qr = ge(V, 2);
  {
    var jr = (p) => {
      var N = Ts();
      be(p, N);
    }, Vr = (p) => {
      var N = As(), D = U(N);
      Ke(() => ze(D, g(u))), be(p, N);
    }, Ur = (p) => {
      var N = Ns(), D = U(N);
      Ke(() => ze(D, `No ${g(a) === "unread" ? "unread " : ""}notifications`)), be(p, N);
    }, Br = (p) => {
      var N = Ds();
      ms(N, 21, () => g(f), (D) => D.id, (D, G) => {
        var sn = Os();
        let Fn;
        var In = U(sn), Pn = U(In), Hr = U(Pn), Yr = ge(Pn, 2);
        {
          var Kr = (ce) => {
            var Pe = Ms(), ln = U(Pe);
            Ke((Xr) => ze(ln, Xr), [() => c(g(G).timestamp || g(G).created_at)]), be(ce, Pe);
          };
          Tt(Yr, (ce) => {
            (g(G).timestamp || g(G).created_at) && ce(Kr);
          });
        }
        var zn = ge(In, 2);
        {
          var Gr = (ce) => {
            var Pe = Rs(), ln = U(Pe);
            Ke(() => ze(ln, g(G).message || g(G).body)), be(ce, Pe);
          };
          Tt(zn, (ce) => {
            (g(G).message || g(G).body) && ce(Gr);
          });
        }
        var Jr = ge(zn, 2);
        {
          var Wr = (ce) => {
            var Pe = Cs();
            St("click", Pe, () => h(g(G).id)), be(ce, Pe);
          };
          Tt(Jr, (ce) => {
            g(G).read || ce(Wr);
          });
        }
        Ke(() => {
          Fn = un(sn, 1, "item svelte-1a3vahb", null, Fn, { unread: !g(G).read }), ze(Hr, g(G).title || g(G).type || "Notification");
        }), be(D, sn);
      }), be(p, N);
    };
    Tt(qr, (p) => {
      g(s) ? p(jr) : g(u) ? p(Vr, 1) : g(f).length === 0 ? p(Ur, 2) : p(Br, -1);
    });
  }
  Ke(() => {
    ze(Q, `v${r() ?? ""}`), $.disabled = g(o) === 0, Ie.disabled = g(s), jt = un(K, 1, "svelte-1a3vahb", null, jt, { active: g(a) === "all" }), Dn = un(xt, 1, "svelte-1a3vahb", null, Dn, { active: g(a) === "unread" }), ze(Lr, `Unread (${g(o) ?? ""})`);
  }), St("click", $, d), St("click", Ie, _), St("click", K, () => L(a, "all")), St("click", xt, () => L(a, "unread")), be(e, m), ir();
}
os(["click"]);
function qs(e, t) {
  const n = hs(Ps, { target: e, props: t });
  return {
    unmount() {
      try {
        ps(n);
      } catch {
      }
    }
  };
}
export {
  qs as default
};
