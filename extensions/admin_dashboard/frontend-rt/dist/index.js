var ra = Object.defineProperty;
var di = (e) => {
  throw TypeError(e);
};
var na = (e, t, r) => t in e ? ra(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var We = (e, t, r) => na(e, typeof t != "symbol" ? t + "" : t, r), fn = (e, t, r) => t.has(e) || di("Cannot " + r);
var o = (e, t, r) => (fn(e, t, "read from private field"), r ? r.call(e) : t.get(e)), M = (e, t, r) => t.has(e) ? di("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), P = (e, t, r, n) => (fn(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r), G = (e, t, r) => (fn(e, t, "access private method"), r);
var Cn = Array.isArray, ia = Array.prototype.indexOf, lr = Array.prototype.includes, Qr = Array.from, sa = Object.defineProperty, br = Object.getOwnPropertyDescriptor, aa = Object.prototype, oa = Array.prototype, la = Object.getPrototypeOf, ci = Object.isExtensible;
const fa = () => {
};
function ua(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function Ti() {
  var e, t, r = new Promise((n, i) => {
    e = n, t = i;
  });
  return { promise: r, resolve: e, reject: t };
}
function vi(e, t) {
  if (Array.isArray(e))
    return e;
  if (!(Symbol.iterator in e))
    return Array.from(e);
  const r = [];
  for (const n of e)
    if (r.push(n), r.length === t) break;
  return r;
}
const _e = 2, fr = 4, en = 8, Ai = 1 << 24, at = 16, Xe = 32, Tt = 64, _n = 128, ze = 512, se = 1024, pe = 2048, ot = 4096, ge = 8192, $e = 16384, Yt = 32768, hn = 1 << 25, ur = 65536, gn = 1 << 17, da = 1 << 18, pr = 1 << 19, ca = 1 << 20, _t = 1 << 25, Ht = 65536, Wr = 1 << 21, wr = 1 << 22, Et = 1 << 23, rr = Symbol("$state"), ut = new class extends Error {
  constructor() {
    super(...arguments);
    We(this, "name", "StaleReactionError");
    We(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
function va() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function pa(e, t, r) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function _a(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function ha() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function ga(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function ba() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function ma() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function xa() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function ya() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function wa() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
const ka = 1, Ea = 2, Sa = 16, Ta = 1, Aa = 2, fe = Symbol(), Ni = "http://www.w3.org/1999/xhtml";
function Na() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function Oa() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function Ca() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function Oi(e) {
  return e === this.v;
}
function Ma(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Ci(e) {
  return !Ma(e, this.v);
}
let Re = null;
function dr(e) {
  Re = e;
}
function Mi(e, t = !1, r) {
  Re = {
    p: Re,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    r: (
      /** @type {Effect} */
      F
    ),
    l: null
  };
}
function Ii(e) {
  var t = (
    /** @type {ComponentContext} */
    Re
  ), r = t.e;
  if (r !== null) {
    t.e = null;
    for (var n of r)
      Xi(n);
  }
  return t.i = !0, Re = t.p, /** @type {T} */
  {};
}
function Ri() {
  return !0;
}
let Rt = [];
function ji() {
  var e = Rt;
  Rt = [], ua(e);
}
function Bt(e) {
  if (Rt.length === 0 && !mr) {
    var t = Rt;
    queueMicrotask(() => {
      t === Rt && ji();
    });
  }
  Rt.push(e);
}
function Ia() {
  for (; Rt.length > 0; )
    ji();
}
function Di(e) {
  var t = F;
  if (t === null)
    return L.f |= Et, e;
  if ((t.f & Yt) === 0 && (t.f & fr) === 0)
    throw e;
  wt(e, t);
}
function wt(e, t) {
  for (; t !== null; ) {
    if ((t.f & _n) !== 0) {
      if ((t.f & Yt) === 0)
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
const Ra = -7169;
function ee(e, t) {
  e.f = e.f & Ra | t;
}
function Mn(e) {
  (e.f & ze) !== 0 || e.deps === null ? ee(e, se) : ee(e, ot);
}
function Pi(e) {
  if (e !== null)
    for (const t of e)
      (t.f & _e) === 0 || (t.f & Ht) === 0 || (t.f ^= Ht, Pi(
        /** @type {Derived} */
        t.deps
      ));
}
function Li(e, t, r) {
  (e.f & pe) !== 0 ? t.add(e) : (e.f & ot) !== 0 && r.add(e), Pi(e.deps), ee(e, se);
}
const Mt = /* @__PURE__ */ new Set();
let N = null, Ke = null, bn = null, mr = !1, un = !1, tr = null, Ur = null;
var pi = 0;
let ja = 1;
var nr, ir, Pt, dt, nt, Er, Ce, Sr, xt, ct, it, sr, ar, Lt, ne, Br, Fi, qr, mn, zr, Da;
const Kr = class Kr {
  constructor() {
    M(this, ne);
    We(this, "id", ja++);
    /**
     * The current values of any signals that are updated in this batch.
     * Tuple format: [value, is_derived] (note: is_derived is false for deriveds, too, if they were overridden via assignment)
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Value, [any, boolean]>}
     */
    We(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any signals (sources and deriveds) that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Value, any>}
     */
    We(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<(batch: Batch) => void>}
     */
    M(this, nr, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    M(this, ir, /* @__PURE__ */ new Set());
    /**
     * Callbacks that should run only when a fork is committed.
     * @type {Set<(batch: Batch) => void>}
     */
    M(this, Pt, /* @__PURE__ */ new Set());
    /**
     * Async effects that are currently in flight
     * @type {Map<Effect, number>}
     */
    M(this, dt, /* @__PURE__ */ new Map());
    /**
     * Async effects that are currently in flight, _not_ inside a pending boundary
     * @type {Map<Effect, number>}
     */
    M(this, nt, /* @__PURE__ */ new Map());
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    M(this, Er, null);
    /**
     * The root effects that need to be flushed
     * @type {Effect[]}
     */
    M(this, Ce, []);
    /**
     * Effects created while this batch was active.
     * @type {Effect[]}
     */
    M(this, Sr, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    M(this, xt, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    M(this, ct, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    M(this, it, /* @__PURE__ */ new Map());
    /**
     * Inverse of #skipped_branches which we need to tell prior batches to unskip them when committing
     * @type {Set<Effect>}
     */
    M(this, sr, /* @__PURE__ */ new Set());
    We(this, "is_fork", !1);
    M(this, ar, !1);
    /** @type {Set<Batch>} */
    M(this, Lt, /* @__PURE__ */ new Set());
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(t) {
    o(this, it).has(t) || o(this, it).set(t, { d: [], m: [] }), o(this, sr).delete(t);
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   * @param {(e: Effect) => void} callback
   */
  unskip_effect(t, r = (n) => this.schedule(n)) {
    var n = o(this, it).get(t);
    if (n) {
      o(this, it).delete(t);
      for (var i of n.d)
        ee(i, pe), r(i);
      for (i of n.m)
        ee(i, ot), r(i);
    }
    o(this, sr).add(t);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Value} source
   * @param {any} value
   * @param {boolean} [is_derived]
   */
  capture(t, r, n = !1) {
    t.v !== fe && !this.previous.has(t) && this.previous.set(t, t.v), (t.f & Et) === 0 && (this.current.set(t, [r, n]), Ke?.set(t, r)), this.is_fork || (t.v = r);
  }
  activate() {
    N = this;
  }
  deactivate() {
    N = null, Ke = null;
  }
  flush() {
    try {
      un = !0, N = this, G(this, ne, qr).call(this);
    } finally {
      pi = 0, bn = null, tr = null, Ur = null, un = !1, N = null, Ke = null, qt.clear();
    }
  }
  discard() {
    for (const t of o(this, ir)) t(this);
    o(this, ir).clear(), o(this, Pt).clear(), Mt.delete(this);
  }
  /**
   * @param {Effect} effect
   */
  register_created_effect(t) {
    o(this, Sr).push(t);
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  increment(t, r) {
    let n = o(this, dt).get(r) ?? 0;
    if (o(this, dt).set(r, n + 1), t) {
      let i = o(this, nt).get(r) ?? 0;
      o(this, nt).set(r, i + 1);
    }
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   * @param {boolean} skip - whether to skip updates (because this is triggered by a stale reaction)
   */
  decrement(t, r, n) {
    let i = o(this, dt).get(r) ?? 0;
    if (i === 1 ? o(this, dt).delete(r) : o(this, dt).set(r, i - 1), t) {
      let s = o(this, nt).get(r) ?? 0;
      s === 1 ? o(this, nt).delete(r) : o(this, nt).set(r, s - 1);
    }
    o(this, ar) || n || (P(this, ar, !0), Bt(() => {
      P(this, ar, !1), this.flush();
    }));
  }
  /**
   * @param {Set<Effect>} dirty_effects
   * @param {Set<Effect>} maybe_dirty_effects
   */
  transfer_effects(t, r) {
    for (const n of t)
      o(this, xt).add(n);
    for (const n of r)
      o(this, ct).add(n);
    t.clear(), r.clear();
  }
  /** @param {(batch: Batch) => void} fn */
  oncommit(t) {
    o(this, nr).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    o(this, ir).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  on_fork_commit(t) {
    o(this, Pt).add(t);
  }
  run_fork_commit_callbacks() {
    for (const t of o(this, Pt)) t(this);
    o(this, Pt).clear();
  }
  settled() {
    return (o(this, Er) ?? P(this, Er, Ti())).promise;
  }
  static ensure() {
    if (N === null) {
      const t = N = new Kr();
      un || (Mt.add(N), mr || Bt(() => {
        N === t && t.flush();
      }));
    }
    return N;
  }
  apply() {
    {
      Ke = null;
      return;
    }
  }
  /**
   *
   * @param {Effect} effect
   */
  schedule(t) {
    if (bn = t, t.b?.is_pending && (t.f & (fr | en | Ai)) !== 0 && (t.f & Yt) === 0) {
      t.b.defer_effect(t);
      return;
    }
    for (var r = t; r.parent !== null; ) {
      r = r.parent;
      var n = r.f;
      if (tr !== null && r === F && (L === null || (L.f & _e) === 0))
        return;
      if ((n & (Tt | Xe)) !== 0) {
        if ((n & se) === 0)
          return;
        r.f ^= se;
      }
    }
    o(this, Ce).push(r);
  }
};
nr = new WeakMap(), ir = new WeakMap(), Pt = new WeakMap(), dt = new WeakMap(), nt = new WeakMap(), Er = new WeakMap(), Ce = new WeakMap(), Sr = new WeakMap(), xt = new WeakMap(), ct = new WeakMap(), it = new WeakMap(), sr = new WeakMap(), ar = new WeakMap(), Lt = new WeakMap(), ne = new WeakSet(), Br = function() {
  return this.is_fork || o(this, nt).size > 0;
}, Fi = function() {
  for (const n of o(this, Lt))
    for (const i of o(n, nt).keys()) {
      for (var t = !1, r = i; r.parent !== null; ) {
        if (o(this, it).has(r)) {
          t = !0;
          break;
        }
        r = r.parent;
      }
      if (!t)
        return !0;
    }
  return !1;
}, qr = function() {
  var l;
  if (pi++ > 1e3 && (Mt.delete(this), La()), !G(this, ne, Br).call(this)) {
    for (const f of o(this, xt))
      o(this, ct).delete(f), ee(f, pe), this.schedule(f);
    for (const f of o(this, ct))
      ee(f, ot), this.schedule(f);
  }
  const t = o(this, Ce);
  P(this, Ce, []), this.apply();
  var r = tr = [], n = [], i = Ur = [];
  for (const f of t)
    try {
      G(this, ne, mn).call(this, f, r, n);
    } catch (d) {
      throw Bi(f), d;
    }
  if (N = null, i.length > 0) {
    var s = Kr.ensure();
    for (const f of i)
      s.schedule(f);
  }
  if (tr = null, Ur = null, G(this, ne, Br).call(this) || G(this, ne, Fi).call(this)) {
    G(this, ne, zr).call(this, n), G(this, ne, zr).call(this, r);
    for (const [f, d] of o(this, it))
      Ui(f, d);
  } else {
    o(this, dt).size === 0 && Mt.delete(this), o(this, xt).clear(), o(this, ct).clear();
    for (const f of o(this, nr)) f(this);
    o(this, nr).clear(), _i(n), _i(r), o(this, Er)?.resolve();
  }
  var u = (
    /** @type {Batch | null} */
    /** @type {unknown} */
    N
  );
  if (o(this, Ce).length > 0) {
    const f = u ?? (u = this);
    o(f, Ce).push(...o(this, Ce).filter((d) => !o(f, Ce).includes(d)));
  }
  u !== null && (Mt.add(u), G(l = u, ne, qr).call(l));
}, /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
mn = function(t, r, n) {
  t.f ^= se;
  for (var i = t.first; i !== null; ) {
    var s = i.f, u = (s & (Xe | Tt)) !== 0, l = u && (s & se) !== 0, f = l || (s & ge) !== 0 || o(this, it).has(i);
    if (!f && i.fn !== null) {
      u ? i.f ^= se : (s & fr) !== 0 ? r.push(i) : Mr(i) && ((s & at) !== 0 && o(this, ct).add(i), vr(i));
      var d = i.first;
      if (d !== null) {
        i = d;
        continue;
      }
    }
    for (; i !== null; ) {
      var b = i.next;
      if (b !== null) {
        i = b;
        break;
      }
      i = i.parent;
    }
  }
}, /**
 * @param {Effect[]} effects
 */
zr = function(t) {
  for (var r = 0; r < t.length; r += 1)
    Li(t[r], o(this, xt), o(this, ct));
}, Da = function() {
  var b, y, k;
  for (const g of Mt) {
    var t = g.id < this.id, r = [];
    for (const [v, [j, O]] of this.current) {
      if (g.current.has(v)) {
        var n = (
          /** @type {[any, boolean]} */
          g.current.get(v)[0]
        );
        if (t && j !== n)
          g.current.set(v, [j, O]);
        else
          continue;
      }
      r.push(v);
    }
    var i = [...g.current.keys()].filter((v) => !this.current.has(v));
    if (i.length === 0)
      t && g.discard();
    else if (r.length > 0) {
      if (t)
        for (const v of o(this, sr))
          g.unskip_effect(v, (j) => {
            var O;
            (j.f & (at | wr)) !== 0 ? g.schedule(j) : G(O = g, ne, zr).call(O, [j]);
          });
      g.activate();
      var s = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Map();
      for (var l of r)
        Ji(l, i, s, u);
      u = /* @__PURE__ */ new Map();
      var f = [...g.current.keys()].filter(
        (v) => this.current.has(v) ? (
          /** @type {[any, boolean]} */
          this.current.get(v)[0] !== v
        ) : !0
      );
      for (const v of o(this, Sr))
        (v.f & ($e | ge | gn)) === 0 && In(v, f, u) && ((v.f & (wr | at)) !== 0 ? (ee(v, pe), g.schedule(v)) : o(g, xt).add(v));
      if (o(g, Ce).length > 0) {
        g.apply();
        for (var d of o(g, Ce))
          G(b = g, ne, mn).call(b, d, [], []);
        P(g, Ce, []);
      }
      g.deactivate();
    }
  }
  for (const g of Mt)
    o(g, Lt).has(this) && (o(g, Lt).delete(this), o(g, Lt).size === 0 && !G(y = g, ne, Br).call(y) && (g.activate(), G(k = g, ne, qr).call(k)));
};
let Vt = Kr;
function Pa(e) {
  var t = mr;
  mr = !0;
  try {
    for (var r; ; ) {
      if (Ia(), N === null)
        return (
          /** @type {T} */
          r
        );
      N.flush();
    }
  } finally {
    mr = t;
  }
}
function La() {
  try {
    ba();
  } catch (e) {
    wt(e, bn);
  }
}
let ft = null;
function _i(e) {
  var t = e.length;
  if (t !== 0) {
    for (var r = 0; r < t; ) {
      var n = e[r++];
      if ((n.f & ($e | ge)) === 0 && Mr(n) && (ft = /* @__PURE__ */ new Set(), vr(n), n.deps === null && n.first === null && n.nodes === null && n.teardown === null && n.ac === null && ts(n), ft?.size > 0)) {
        qt.clear();
        for (const i of ft) {
          if ((i.f & ($e | ge)) !== 0) continue;
          const s = [i];
          let u = i.parent;
          for (; u !== null; )
            ft.has(u) && (ft.delete(u), s.push(u)), u = u.parent;
          for (let l = s.length - 1; l >= 0; l--) {
            const f = s[l];
            (f.f & ($e | ge)) === 0 && vr(f);
          }
        }
        ft.clear();
      }
    }
    ft = null;
  }
}
function Ji(e, t, r, n) {
  if (!r.has(e) && (r.add(e), e.reactions !== null))
    for (const i of e.reactions) {
      const s = i.f;
      (s & _e) !== 0 ? Ji(
        /** @type {Derived} */
        i,
        t,
        r,
        n
      ) : (s & (wr | at)) !== 0 && (s & pe) === 0 && In(i, t, n) && (ee(i, pe), Rn(
        /** @type {Effect} */
        i
      ));
    }
}
function In(e, t, r) {
  const n = r.get(e);
  if (n !== void 0) return n;
  if (e.deps !== null)
    for (const i of e.deps) {
      if (lr.call(t, i))
        return !0;
      if ((i.f & _e) !== 0 && In(
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
function Rn(e) {
  N.schedule(e);
}
function Ui(e, t) {
  if (!((e.f & Xe) !== 0 && (e.f & se) !== 0)) {
    (e.f & pe) !== 0 ? t.d.push(e) : (e.f & ot) !== 0 && t.m.push(e), ee(e, se);
    for (var r = e.first; r !== null; )
      Ui(r, t), r = r.next;
  }
}
function Bi(e) {
  ee(e, se);
  for (var t = e.first; t !== null; )
    Bi(t), t = t.next;
}
function Fa(e) {
  let t = 0, r = Wt(0), n;
  return () => {
    Pn() && (a(r), Fn(() => (t === 0 && (n = zn(() => e(() => xr(r)))), t += 1, () => {
      Bt(() => {
        t -= 1, t === 0 && (n?.(), n = void 0, xr(r));
      });
    })));
  };
}
var Ja = ur | pr;
function Ua(e, t, r, n) {
  new Ba(e, t, r, n);
}
var Je, On, Ue, Ft, xe, Be, he, Me, vt, Jt, yt, or, Tr, Ar, pt, Zr, Q, qa, za, $a, xn, $r, Hr, yn, wn;
class Ba {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(t, r, n, i) {
    M(this, Q);
    /** @type {Boundary | null} */
    We(this, "parent");
    We(this, "is_pending", !1);
    /**
     * API-level transformError transform function. Transforms errors before they reach the `failed` snippet.
     * Inherited from parent boundary, or defaults to identity.
     * @type {(error: unknown) => unknown}
     */
    We(this, "transform_error");
    /** @type {TemplateNode} */
    M(this, Je);
    /** @type {TemplateNode | null} */
    M(this, On, null);
    /** @type {BoundaryProps} */
    M(this, Ue);
    /** @type {((anchor: Node) => void)} */
    M(this, Ft);
    /** @type {Effect} */
    M(this, xe);
    /** @type {Effect | null} */
    M(this, Be, null);
    /** @type {Effect | null} */
    M(this, he, null);
    /** @type {Effect | null} */
    M(this, Me, null);
    /** @type {DocumentFragment | null} */
    M(this, vt, null);
    M(this, Jt, 0);
    M(this, yt, 0);
    M(this, or, !1);
    /** @type {Set<Effect>} */
    M(this, Tr, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    M(this, Ar, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    M(this, pt, null);
    M(this, Zr, Fa(() => (P(this, pt, Wt(o(this, Jt))), () => {
      P(this, pt, null);
    })));
    P(this, Je, t), P(this, Ue, r), P(this, Ft, (s) => {
      var u = (
        /** @type {Effect} */
        F
      );
      u.b = this, u.f |= _n, n(s);
    }), this.parent = /** @type {Effect} */
    F.b, this.transform_error = i ?? this.parent?.transform_error ?? ((s) => s), P(this, xe, Jn(() => {
      G(this, Q, xn).call(this);
    }, Ja));
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    Li(t, o(this, Tr), o(this, Ar));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!o(this, Ue).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  update_pending_count(t, r) {
    G(this, Q, yn).call(this, t, r), P(this, Jt, o(this, Jt) + t), !(!o(this, pt) || o(this, or)) && (P(this, or, !0), Bt(() => {
      P(this, or, !1), o(this, pt) && cr(o(this, pt), o(this, Jt));
    }));
  }
  get_effect_pending() {
    return o(this, Zr).call(this), a(
      /** @type {Source<number>} */
      o(this, pt)
    );
  }
  /** @param {unknown} error */
  error(t) {
    if (!o(this, Ue).onerror && !o(this, Ue).failed)
      throw t;
    N?.is_fork ? (o(this, Be) && N.skip_effect(o(this, Be)), o(this, he) && N.skip_effect(o(this, he)), o(this, Me) && N.skip_effect(o(this, Me)), N.on_fork_commit(() => {
      G(this, Q, wn).call(this, t);
    })) : G(this, Q, wn).call(this, t);
  }
}
Je = new WeakMap(), On = new WeakMap(), Ue = new WeakMap(), Ft = new WeakMap(), xe = new WeakMap(), Be = new WeakMap(), he = new WeakMap(), Me = new WeakMap(), vt = new WeakMap(), Jt = new WeakMap(), yt = new WeakMap(), or = new WeakMap(), Tr = new WeakMap(), Ar = new WeakMap(), pt = new WeakMap(), Zr = new WeakMap(), Q = new WeakSet(), qa = function() {
  try {
    P(this, Be, qe(() => o(this, Ft).call(this, o(this, Je))));
  } catch (t) {
    this.error(t);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
za = function(t) {
  const r = o(this, Ue).failed;
  r && P(this, Me, qe(() => {
    r(
      o(this, Je),
      () => t,
      () => () => {
      }
    );
  }));
}, $a = function() {
  const t = o(this, Ue).pending;
  t && (this.is_pending = !0, P(this, he, qe(() => t(o(this, Je)))), Bt(() => {
    var r = P(this, vt, document.createDocumentFragment()), n = St();
    r.append(n), P(this, Be, G(this, Q, Hr).call(this, () => qe(() => o(this, Ft).call(this, n)))), o(this, yt) === 0 && (o(this, Je).before(r), P(this, vt, null), zt(
      /** @type {Effect} */
      o(this, he),
      () => {
        P(this, he, null);
      }
    ), G(this, Q, $r).call(
      this,
      /** @type {Batch} */
      N
    ));
  }));
}, xn = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), P(this, yt, 0), P(this, Jt, 0), P(this, Be, qe(() => {
      o(this, Ft).call(this, o(this, Je));
    })), o(this, yt) > 0) {
      var t = P(this, vt, document.createDocumentFragment());
      qn(o(this, Be), t);
      const r = (
        /** @type {(anchor: Node) => void} */
        o(this, Ue).pending
      );
      P(this, he, qe(() => r(o(this, Je))));
    } else
      G(this, Q, $r).call(
        this,
        /** @type {Batch} */
        N
      );
  } catch (r) {
    this.error(r);
  }
}, /**
 * @param {Batch} batch
 */
$r = function(t) {
  this.is_pending = !1, t.transfer_effects(o(this, Tr), o(this, Ar));
}, /**
 * @template T
 * @param {() => T} fn
 */
Hr = function(t) {
  var r = F, n = L, i = Re;
  lt(o(this, xe)), Ve(o(this, xe)), dr(o(this, xe).ctx);
  try {
    return Vt.ensure(), t();
  } catch (s) {
    return Di(s), null;
  } finally {
    lt(r), Ve(n), dr(i);
  }
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 * @param {Batch} batch
 */
yn = function(t, r) {
  var n;
  if (!this.has_pending_snippet()) {
    this.parent && G(n = this.parent, Q, yn).call(n, t, r);
    return;
  }
  P(this, yt, o(this, yt) + t), o(this, yt) === 0 && (G(this, Q, $r).call(this, r), o(this, he) && zt(o(this, he), () => {
    P(this, he, null);
  }), o(this, vt) && (o(this, Je).before(o(this, vt)), P(this, vt, null)));
}, /**
 * @param {unknown} error
 */
wn = function(t) {
  o(this, Be) && (we(o(this, Be)), P(this, Be, null)), o(this, he) && (we(o(this, he)), P(this, he, null)), o(this, Me) && (we(o(this, Me)), P(this, Me, null));
  var r = o(this, Ue).onerror;
  let n = o(this, Ue).failed;
  var i = !1, s = !1;
  const u = () => {
    if (i) {
      Ca();
      return;
    }
    i = !0, s && wa(), o(this, Me) !== null && zt(o(this, Me), () => {
      P(this, Me, null);
    }), G(this, Q, Hr).call(this, () => {
      G(this, Q, xn).call(this);
    });
  }, l = (f) => {
    try {
      s = !0, r?.(f, u), s = !1;
    } catch (d) {
      wt(d, o(this, xe) && o(this, xe).parent);
    }
    n && P(this, Me, G(this, Q, Hr).call(this, () => {
      try {
        return qe(() => {
          var d = (
            /** @type {Effect} */
            F
          );
          d.b = this, d.f |= _n, n(
            o(this, Je),
            () => f,
            () => u
          );
        });
      } catch (d) {
        return wt(
          d,
          /** @type {Effect} */
          o(this, xe).parent
        ), null;
      }
    }));
  };
  Bt(() => {
    var f;
    try {
      f = this.transform_error(t);
    } catch (d) {
      wt(d, o(this, xe) && o(this, xe).parent);
      return;
    }
    f !== null && typeof f == "object" && typeof /** @type {any} */
    f.then == "function" ? f.then(
      l,
      /** @param {unknown} e */
      (d) => wt(d, o(this, xe) && o(this, xe).parent)
    ) : l(f);
  });
};
function Ha(e, t, r, n) {
  const i = jn;
  var s = e.filter((k) => !k.settled);
  if (r.length === 0 && s.length === 0) {
    n(t.map(i));
    return;
  }
  var u = (
    /** @type {Effect} */
    F
  ), l = Va(), f = s.length === 1 ? s[0].promise : s.length > 1 ? Promise.all(s.map((k) => k.promise)) : null;
  function d(k) {
    l();
    try {
      n(k);
    } catch (g) {
      (u.f & $e) === 0 && wt(g, u);
    }
    Yr();
  }
  if (r.length === 0) {
    f.then(() => d(t.map(i)));
    return;
  }
  var b = qi();
  function y() {
    Promise.all(r.map((k) => /* @__PURE__ */ Wa(k))).then((k) => d([...t.map(i), ...k])).catch((k) => wt(k, u)).finally(() => b());
  }
  f ? f.then(() => {
    l(), y(), Yr();
  }) : y();
}
function Va() {
  var e = (
    /** @type {Effect} */
    F
  ), t = L, r = Re, n = (
    /** @type {Batch} */
    N
  );
  return function(s = !0) {
    lt(e), Ve(t), dr(r), s && (e.f & $e) === 0 && (n?.activate(), n?.apply());
  };
}
function Yr(e = !0) {
  lt(null), Ve(null), dr(null), e && N?.deactivate();
}
function qi() {
  var e = (
    /** @type {Effect} */
    F
  ), t = (
    /** @type {Boundary} */
    e.b
  ), r = (
    /** @type {Batch} */
    N
  ), n = t.is_rendered();
  return t.update_pending_count(1, r), r.increment(n, e), (i = !1) => {
    t.update_pending_count(-1, r), r.decrement(n, e, i);
  };
}
// @__NO_SIDE_EFFECTS__
function jn(e) {
  var t = _e | pe;
  return F !== null && (F.f |= pr), {
    ctx: Re,
    deps: null,
    effects: null,
    equals: Oi,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      fe
    ),
    wv: 0,
    parent: F,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function Wa(e, t, r) {
  let n = (
    /** @type {Effect | null} */
    F
  );
  n === null && va();
  var i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), s = Wt(
    /** @type {V} */
    fe
  ), u = !L, l = /* @__PURE__ */ new Map();
  return fo(() => {
    var f = (
      /** @type {Effect} */
      F
    ), d = Ti();
    i = d.promise;
    try {
      Promise.resolve(e()).then(d.resolve, d.reject).finally(Yr);
    } catch (g) {
      d.reject(g), Yr();
    }
    var b = (
      /** @type {Batch} */
      N
    );
    if (u) {
      if ((f.f & Yt) !== 0)
        var y = qi();
      if (
        /** @type {Boundary} */
        n.b.is_rendered()
      )
        l.get(b)?.reject(ut), l.delete(b);
      else {
        for (const g of l.values())
          g.reject(ut);
        l.clear();
      }
      l.set(b, d);
    }
    const k = (g, v = void 0) => {
      if (y) {
        var j = v === ut;
        y(j);
      }
      if (!(v === ut || (f.f & $e) !== 0)) {
        if (b.activate(), v)
          s.f |= Et, cr(s, v);
        else {
          (s.f & Et) !== 0 && (s.f ^= Et), cr(s, g);
          for (const [O, $] of l) {
            if (l.delete(O), O === b) break;
            $.reject(ut);
          }
        }
        b.deactivate();
      }
    };
    d.promise.then(k, (g) => k(null, g || "unknown"));
  }), Ln(() => {
    for (const f of l.values())
      f.reject(ut);
  }), new Promise((f) => {
    function d(b) {
      function y() {
        b === i ? f(s) : d(i);
      }
      b.then(y, y);
    }
    d(i);
  });
}
// @__NO_SIDE_EFFECTS__
function dn(e) {
  const t = /* @__PURE__ */ jn(e);
  return is(t), t;
}
// @__NO_SIDE_EFFECTS__
function Ya(e) {
  const t = /* @__PURE__ */ jn(e);
  return t.equals = Ci, t;
}
function Ga(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var r = 0; r < t.length; r += 1)
      we(
        /** @type {Effect} */
        t[r]
      );
  }
}
function Dn(e) {
  var t, r = F, n = e.parent;
  if (!At && n !== null && (n.f & ($e | ge)) !== 0)
    return Na(), e.v;
  lt(n);
  try {
    e.f &= ~Ht, Ga(e), t = ls(e);
  } finally {
    lt(r);
  }
  return t;
}
function zi(e) {
  var t = Dn(e);
  if (!e.equals(t) && (e.wv = as(), (!N?.is_fork || e.deps === null) && (N !== null ? N.capture(e, t, !0) : e.v = t, e.deps === null))) {
    ee(e, se);
    return;
  }
  At || (Ke !== null ? (Pn() || N?.is_fork) && Ke.set(e, t) : Mn(e));
}
function Ka(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      (t.teardown || t.ac) && (t.teardown?.(), t.ac?.abort(ut), t.teardown = fa, t.ac = null, kr(t, 0), Un(t));
}
function $i(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      t.teardown && vr(t);
}
let kn = /* @__PURE__ */ new Set();
const qt = /* @__PURE__ */ new Map();
let Hi = !1;
function Wt(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Oi,
    rv: 0,
    wv: 0
  };
  return r;
}
// @__NO_SIDE_EFFECTS__
function R(e, t) {
  const r = Wt(e);
  return is(r), r;
}
// @__NO_SIDE_EFFECTS__
function Za(e, t = !1, r = !0) {
  const n = Wt(e);
  return t || (n.equals = Ci), n;
}
function m(e, t, r = !1) {
  L !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Ze || (L.f & gn) !== 0) && Ri() && (L.f & (_e | at | wr | gn)) !== 0 && (He === null || !lr.call(He, e)) && ya();
  let n = r ? kt(t) : t;
  return cr(e, n, Ur);
}
function cr(e, t, r = null) {
  if (!e.equals(t)) {
    qt.set(e, At ? t : e.v);
    var n = Vt.ensure();
    if (n.capture(e, t), (e.f & _e) !== 0) {
      const i = (
        /** @type {Derived} */
        e
      );
      (e.f & pe) !== 0 && Dn(i), Ke === null && Mn(i);
    }
    e.wv = as(), Vi(e, pe, r), F !== null && (F.f & se) !== 0 && (F.f & (Xe | Tt)) === 0 && (Fe === null ? vo([e]) : Fe.push(e)), !n.is_fork && kn.size > 0 && !Hi && Xa();
  }
  return t;
}
function Xa() {
  Hi = !1;
  for (const e of kn)
    (e.f & se) !== 0 && ee(e, ot), Mr(e) && vr(e);
  kn.clear();
}
function Qa(e, t = 1) {
  var r = a(e);
  return m(e, t === 1 ? ++r : --r);
}
function xr(e) {
  m(e, e.v + 1);
}
function Vi(e, t, r) {
  var n = e.reactions;
  if (n !== null)
    for (var i = n.length, s = 0; s < i; s++) {
      var u = n[s], l = u.f, f = (l & pe) === 0;
      if (f && ee(u, t), (l & _e) !== 0) {
        var d = (
          /** @type {Derived} */
          u
        );
        Ke?.delete(d), (l & Ht) === 0 && (l & ze && (F === null || (F.f & Wr) === 0) && (u.f |= Ht), Vi(d, ot, r));
      } else if (f) {
        var b = (
          /** @type {Effect} */
          u
        );
        (l & at) !== 0 && ft !== null && ft.add(b), r !== null ? r.push(b) : Rn(b);
      }
    }
}
function kt(e) {
  if (typeof e != "object" || e === null || rr in e)
    return e;
  const t = la(e);
  if (t !== aa && t !== oa)
    return e;
  var r = /* @__PURE__ */ new Map(), n = Cn(e), i = /* @__PURE__ */ R(0), s = $t, u = (l) => {
    if ($t === s)
      return l();
    var f = L, d = $t;
    Ve(null), xi(s);
    var b = l();
    return Ve(f), xi(d), b;
  };
  return n && r.set("length", /* @__PURE__ */ R(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(l, f, d) {
        (!("value" in d) || d.configurable === !1 || d.enumerable === !1 || d.writable === !1) && ma();
        var b = r.get(f);
        return b === void 0 ? u(() => {
          var y = /* @__PURE__ */ R(d.value);
          return r.set(f, y), y;
        }) : m(b, d.value, !0), !0;
      },
      deleteProperty(l, f) {
        var d = r.get(f);
        if (d === void 0) {
          if (f in l) {
            const b = u(() => /* @__PURE__ */ R(fe));
            r.set(f, b), xr(i);
          }
        } else
          m(d, fe), xr(i);
        return !0;
      },
      get(l, f, d) {
        if (f === rr)
          return e;
        var b = r.get(f), y = f in l;
        if (b === void 0 && (!y || br(l, f)?.writable) && (b = u(() => {
          var g = kt(y ? l[f] : fe), v = /* @__PURE__ */ R(g);
          return v;
        }), r.set(f, b)), b !== void 0) {
          var k = a(b);
          return k === fe ? void 0 : k;
        }
        return Reflect.get(l, f, d);
      },
      getOwnPropertyDescriptor(l, f) {
        var d = Reflect.getOwnPropertyDescriptor(l, f);
        if (d && "value" in d) {
          var b = r.get(f);
          b && (d.value = a(b));
        } else if (d === void 0) {
          var y = r.get(f), k = y?.v;
          if (y !== void 0 && k !== fe)
            return {
              enumerable: !0,
              configurable: !0,
              value: k,
              writable: !0
            };
        }
        return d;
      },
      has(l, f) {
        if (f === rr)
          return !0;
        var d = r.get(f), b = d !== void 0 && d.v !== fe || Reflect.has(l, f);
        if (d !== void 0 || F !== null && (!b || br(l, f)?.writable)) {
          d === void 0 && (d = u(() => {
            var k = b ? kt(l[f]) : fe, g = /* @__PURE__ */ R(k);
            return g;
          }), r.set(f, d));
          var y = a(d);
          if (y === fe)
            return !1;
        }
        return b;
      },
      set(l, f, d, b) {
        var y = r.get(f), k = f in l;
        if (n && f === "length")
          for (var g = d; g < /** @type {Source<number>} */
          y.v; g += 1) {
            var v = r.get(g + "");
            v !== void 0 ? m(v, fe) : g in l && (v = u(() => /* @__PURE__ */ R(fe)), r.set(g + "", v));
          }
        if (y === void 0)
          (!k || br(l, f)?.writable) && (y = u(() => /* @__PURE__ */ R(void 0)), m(y, kt(d)), r.set(f, y));
        else {
          k = y.v !== fe;
          var j = u(() => kt(d));
          m(y, j);
        }
        var O = Reflect.getOwnPropertyDescriptor(l, f);
        if (O?.set && O.set.call(b, d), !k) {
          if (n && typeof f == "string") {
            var $ = (
              /** @type {Source<number>} */
              r.get("length")
            ), B = Number(f);
            Number.isInteger(B) && B >= $.v && m($, B + 1);
          }
          xr(i);
        }
        return !0;
      },
      ownKeys(l) {
        a(i);
        var f = Reflect.ownKeys(l).filter((y) => {
          var k = r.get(y);
          return k === void 0 || k.v !== fe;
        });
        for (var [d, b] of r)
          b.v !== fe && !(d in l) && f.push(d);
        return f;
      },
      setPrototypeOf() {
        xa();
      }
    }
  );
}
function hi(e) {
  try {
    if (e !== null && typeof e == "object" && rr in e)
      return e[rr];
  } catch {
  }
  return e;
}
function eo(e, t) {
  return Object.is(hi(e), hi(t));
}
var gi, Wi, Yi, Gi;
function to() {
  if (gi === void 0) {
    gi = window, Wi = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, r = Text.prototype;
    Yi = br(t, "firstChild").get, Gi = br(t, "nextSibling").get, ci(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), ci(r) && (r.__t = void 0);
  }
}
function St(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function Gr(e) {
  return (
    /** @type {TemplateNode | null} */
    Yi.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function Cr(e) {
  return (
    /** @type {TemplateNode | null} */
    Gi.call(e)
  );
}
function _(e, t) {
  return /* @__PURE__ */ Gr(e);
}
function Ye(e, t = !1) {
  {
    var r = /* @__PURE__ */ Gr(e);
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ Cr(r) : r;
  }
}
function w(e, t = 1, r = !1) {
  let n = e;
  for (; t--; )
    n = /** @type {TemplateNode} */
    /* @__PURE__ */ Cr(n);
  return n;
}
function ro(e) {
  e.textContent = "";
}
function Ki() {
  return !1;
}
function no(e, t, r) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElementNS(Ni, e, void 0)
  );
}
let bi = !1;
function io() {
  bi || (bi = !0, document.addEventListener(
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
function tn(e) {
  var t = L, r = F;
  Ve(null), lt(null);
  try {
    return e();
  } finally {
    Ve(t), lt(r);
  }
}
function Zi(e, t, r, n = r) {
  e.addEventListener(t, () => tn(r));
  const i = e.__on_r;
  i ? e.__on_r = () => {
    i(), n(!0);
  } : e.__on_r = () => n(!0), io();
}
function so(e) {
  F === null && (L === null && ga(), ha()), At && _a();
}
function ao(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function ht(e, t) {
  var r = F;
  r !== null && (r.f & ge) !== 0 && (e |= ge);
  var n = {
    ctx: Re,
    deps: null,
    nodes: null,
    f: e | pe | ze,
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
  N?.register_created_effect(n);
  var i = n;
  if ((e & fr) !== 0)
    tr !== null ? tr.push(n) : Vt.ensure().schedule(n);
  else if (t !== null) {
    try {
      vr(n);
    } catch (u) {
      throw we(n), u;
    }
    i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && // either `null`, or a singular child
    (i.f & pr) === 0 && (i = i.first, (e & at) !== 0 && (e & ur) !== 0 && i !== null && (i.f |= ur));
  }
  if (i !== null && (i.parent = r, r !== null && ao(i, r), L !== null && (L.f & _e) !== 0 && (e & Tt) === 0)) {
    var s = (
      /** @type {Derived} */
      L
    );
    (s.effects ?? (s.effects = [])).push(i);
  }
  return n;
}
function Pn() {
  return L !== null && !Ze;
}
function Ln(e) {
  const t = ht(en, null);
  return ee(t, se), t.teardown = e, t;
}
function oo(e) {
  so();
  var t = (
    /** @type {Effect} */
    F.f
  ), r = !L && (t & Xe) !== 0 && (t & Yt) === 0;
  if (r) {
    var n = (
      /** @type {ComponentContext} */
      Re
    );
    (n.e ?? (n.e = [])).push(e);
  } else
    return Xi(e);
}
function Xi(e) {
  return ht(fr | ca, e);
}
function lo(e) {
  Vt.ensure();
  const t = ht(Tt | pr, e);
  return (r = {}) => new Promise((n) => {
    r.outro ? zt(t, () => {
      we(t), n(void 0);
    }) : (we(t), n(void 0));
  });
}
function Qi(e) {
  return ht(fr, e);
}
function fo(e) {
  return ht(wr | pr, e);
}
function Fn(e, t = 0) {
  return ht(en | t, e);
}
function J(e, t = [], r = [], n = []) {
  Ha(n, t, r, (i) => {
    ht(en, () => e(...i.map(a)));
  });
}
function Jn(e, t = 0) {
  var r = ht(at | t, e);
  return r;
}
function qe(e) {
  return ht(Xe | pr, e);
}
function es(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = At, n = L;
    mi(!0), Ve(null);
    try {
      t.call(null);
    } finally {
      mi(r), Ve(n);
    }
  }
}
function Un(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    const i = r.ac;
    i !== null && tn(() => {
      i.abort(ut);
    });
    var n = r.next;
    (r.f & Tt) !== 0 ? r.parent = null : we(r, t), r = n;
  }
}
function uo(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & Xe) === 0 && we(t), t = r;
  }
}
function we(e, t = !0) {
  var r = !1;
  (t || (e.f & da) !== 0) && e.nodes !== null && e.nodes.end !== null && (co(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), r = !0), ee(e, hn), Un(e, t && !r), kr(e, 0);
  var n = e.nodes && e.nodes.t;
  if (n !== null)
    for (const s of n)
      s.stop();
  es(e), e.f ^= hn, e.f |= $e;
  var i = e.parent;
  i !== null && i.first !== null && ts(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function co(e, t) {
  for (; e !== null; ) {
    var r = e === t ? null : /* @__PURE__ */ Cr(e);
    e.remove(), e = r;
  }
}
function ts(e) {
  var t = e.parent, r = e.prev, n = e.next;
  r !== null && (r.next = n), n !== null && (n.prev = r), t !== null && (t.first === e && (t.first = n), t.last === e && (t.last = r));
}
function zt(e, t, r = !0) {
  var n = [];
  rs(e, n, !0);
  var i = () => {
    r && we(e), t && t();
  }, s = n.length;
  if (s > 0) {
    var u = () => --s || i();
    for (var l of n)
      l.out(u);
  } else
    i();
}
function rs(e, t, r) {
  if ((e.f & ge) === 0) {
    e.f ^= ge;
    var n = e.nodes && e.nodes.t;
    if (n !== null)
      for (const l of n)
        (l.is_global || r) && t.push(l);
    for (var i = e.first; i !== null; ) {
      var s = i.next;
      if ((i.f & Tt) === 0) {
        var u = (i.f & ur) !== 0 || // If this is a branch effect without a block effect parent,
        // it means the parent block effect was pruned. In that case,
        // transparency information was transferred to the branch effect.
        (i.f & Xe) !== 0 && (e.f & at) !== 0;
        rs(i, t, u ? r : !1);
      }
      i = s;
    }
  }
}
function Bn(e) {
  ns(e, !0);
}
function ns(e, t) {
  if ((e.f & ge) !== 0) {
    e.f ^= ge, (e.f & se) === 0 && (ee(e, pe), Vt.ensure().schedule(e));
    for (var r = e.first; r !== null; ) {
      var n = r.next, i = (r.f & ur) !== 0 || (r.f & Xe) !== 0;
      ns(r, i ? t : !1), r = n;
    }
    var s = e.nodes && e.nodes.t;
    if (s !== null)
      for (const u of s)
        (u.is_global || t) && u.in();
  }
}
function qn(e, t) {
  if (e.nodes)
    for (var r = e.nodes.start, n = e.nodes.end; r !== null; ) {
      var i = r === n ? null : /* @__PURE__ */ Cr(r);
      t.append(r), r = i;
    }
}
let Vr = !1, At = !1;
function mi(e) {
  At = e;
}
let L = null, Ze = !1;
function Ve(e) {
  L = e;
}
let F = null;
function lt(e) {
  F = e;
}
let He = null;
function is(e) {
  L !== null && (He === null ? He = [e] : He.push(e));
}
let ye = null, Oe = 0, Fe = null;
function vo(e) {
  Fe = e;
}
let ss = 1, jt = 0, $t = jt;
function xi(e) {
  $t = e;
}
function as() {
  return ++ss;
}
function Mr(e) {
  var t = e.f;
  if ((t & pe) !== 0)
    return !0;
  if (t & _e && (e.f &= ~Ht), (t & ot) !== 0) {
    for (var r = (
      /** @type {Value[]} */
      e.deps
    ), n = r.length, i = 0; i < n; i++) {
      var s = r[i];
      if (Mr(
        /** @type {Derived} */
        s
      ) && zi(
        /** @type {Derived} */
        s
      ), s.wv > e.wv)
        return !0;
    }
    (t & ze) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    Ke === null && ee(e, se);
  }
  return !1;
}
function os(e, t, r = !0) {
  var n = e.reactions;
  if (n !== null && !(He !== null && lr.call(He, e)))
    for (var i = 0; i < n.length; i++) {
      var s = n[i];
      (s.f & _e) !== 0 ? os(
        /** @type {Derived} */
        s,
        t,
        !1
      ) : t === s && (r ? ee(s, pe) : (s.f & se) !== 0 && ee(s, ot), Rn(
        /** @type {Effect} */
        s
      ));
    }
}
function ls(e) {
  var j;
  var t = ye, r = Oe, n = Fe, i = L, s = He, u = Re, l = Ze, f = $t, d = e.f;
  ye = /** @type {null | Value[]} */
  null, Oe = 0, Fe = null, L = (d & (Xe | Tt)) === 0 ? e : null, He = null, dr(e.ctx), Ze = !1, $t = ++jt, e.ac !== null && (tn(() => {
    e.ac.abort(ut);
  }), e.ac = null);
  try {
    e.f |= Wr;
    var b = (
      /** @type {Function} */
      e.fn
    ), y = b();
    e.f |= Yt;
    var k = e.deps, g = N?.is_fork;
    if (ye !== null) {
      var v;
      if (g || kr(e, Oe), k !== null && Oe > 0)
        for (k.length = Oe + ye.length, v = 0; v < ye.length; v++)
          k[Oe + v] = ye[v];
      else
        e.deps = k = ye;
      if (Pn() && (e.f & ze) !== 0)
        for (v = Oe; v < k.length; v++)
          ((j = k[v]).reactions ?? (j.reactions = [])).push(e);
    } else !g && k !== null && Oe < k.length && (kr(e, Oe), k.length = Oe);
    if (Ri() && Fe !== null && !Ze && k !== null && (e.f & (_e | ot | pe)) === 0)
      for (v = 0; v < /** @type {Source[]} */
      Fe.length; v++)
        os(
          Fe[v],
          /** @type {Effect} */
          e
        );
    if (i !== null && i !== e) {
      if (jt++, i.deps !== null)
        for (let O = 0; O < r; O += 1)
          i.deps[O].rv = jt;
      if (t !== null)
        for (const O of t)
          O.rv = jt;
      Fe !== null && (n === null ? n = Fe : n.push(.../** @type {Source[]} */
      Fe));
    }
    return (e.f & Et) !== 0 && (e.f ^= Et), y;
  } catch (O) {
    return Di(O);
  } finally {
    e.f ^= Wr, ye = t, Oe = r, Fe = n, L = i, He = s, dr(u), Ze = l, $t = f;
  }
}
function po(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var n = ia.call(r, e);
    if (n !== -1) {
      var i = r.length - 1;
      i === 0 ? r = t.reactions = null : (r[n] = r[i], r.pop());
    }
  }
  if (r === null && (t.f & _e) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (ye === null || !lr.call(ye, t))) {
    var s = (
      /** @type {Derived} */
      t
    );
    (s.f & ze) !== 0 && (s.f ^= ze, s.f &= ~Ht), s.v !== fe && Mn(s), Ka(s), kr(s, 0);
  }
}
function kr(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var n = t; n < r.length; n++)
      po(e, r[n]);
}
function vr(e) {
  var t = e.f;
  if ((t & $e) === 0) {
    ee(e, se);
    var r = F, n = Vr;
    F = e, Vr = !0;
    try {
      (t & (at | Ai)) !== 0 ? uo(e) : Un(e), es(e);
      var i = ls(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = ss;
      var s;
    } finally {
      Vr = n, F = r;
    }
  }
}
async function _o() {
  await Promise.resolve(), Pa();
}
function a(e) {
  var t = e.f, r = (t & _e) !== 0;
  if (L !== null && !Ze) {
    var n = F !== null && (F.f & $e) !== 0;
    if (!n && (He === null || !lr.call(He, e))) {
      var i = L.deps;
      if ((L.f & Wr) !== 0)
        e.rv < jt && (e.rv = jt, ye === null && i !== null && i[Oe] === e ? Oe++ : ye === null ? ye = [e] : ye.push(e));
      else {
        (L.deps ?? (L.deps = [])).push(e);
        var s = e.reactions;
        s === null ? e.reactions = [L] : lr.call(s, L) || s.push(L);
      }
    }
  }
  if (At && qt.has(e))
    return qt.get(e);
  if (r) {
    var u = (
      /** @type {Derived} */
      e
    );
    if (At) {
      var l = u.v;
      return ((u.f & se) === 0 && u.reactions !== null || us(u)) && (l = Dn(u)), qt.set(u, l), l;
    }
    var f = (u.f & ze) === 0 && !Ze && L !== null && (Vr || (L.f & ze) !== 0), d = (u.f & Yt) === 0;
    Mr(u) && (f && (u.f |= ze), zi(u)), f && !d && ($i(u), fs(u));
  }
  if (Ke?.has(e))
    return Ke.get(e);
  if ((e.f & Et) !== 0)
    throw e.v;
  return e.v;
}
function fs(e) {
  if (e.f |= ze, e.deps !== null)
    for (const t of e.deps)
      (t.reactions ?? (t.reactions = [])).push(e), (t.f & _e) !== 0 && (t.f & ze) === 0 && ($i(
        /** @type {Derived} */
        t
      ), fs(
        /** @type {Derived} */
        t
      ));
}
function us(e) {
  if (e.v === fe) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (qt.has(t) || (t.f & _e) !== 0 && us(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function zn(e) {
  var t = Ze;
  try {
    return Ze = !0, e();
  } finally {
    Ze = t;
  }
}
const ho = ["touchstart", "touchmove"];
function go(e) {
  return ho.includes(e);
}
const Dt = Symbol("events"), ds = /* @__PURE__ */ new Set(), En = /* @__PURE__ */ new Set();
function bo(e, t, r, n = {}) {
  function i(s) {
    if (n.capture || Sn.call(t, s), !s.cancelBubble)
      return tn(() => r?.call(this, s));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? Bt(() => {
    t.addEventListener(e, i, n);
  }) : t.addEventListener(e, i, n), i;
}
function cn(e, t, r, n, i) {
  var s = { capture: n, passive: i }, u = bo(e, t, r, s);
  (t === document.body || // @ts-ignore
  t === window || // @ts-ignore
  t === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  t instanceof HTMLMediaElement) && Ln(() => {
    t.removeEventListener(e, u, s);
  });
}
function W(e, t, r) {
  (t[Dt] ?? (t[Dt] = {}))[e] = r;
}
function mo(e) {
  for (var t = 0; t < e.length; t++)
    ds.add(e[t]);
  for (var r of En)
    r(e);
}
let yi = null;
function Sn(e) {
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), n = e.type, i = e.composedPath?.() || [], s = (
    /** @type {null | Element} */
    i[0] || e.target
  );
  yi = e;
  var u = 0, l = yi === e && e[Dt];
  if (l) {
    var f = i.indexOf(l);
    if (f !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e[Dt] = t;
      return;
    }
    var d = i.indexOf(t);
    if (d === -1)
      return;
    f <= d && (u = f);
  }
  if (s = /** @type {Element} */
  i[u] || e.target, s !== t) {
    sa(e, "currentTarget", {
      configurable: !0,
      get() {
        return s || r;
      }
    });
    var b = L, y = F;
    Ve(null), lt(null);
    try {
      for (var k, g = []; s !== null; ) {
        var v = s.assignedSlot || s.parentNode || /** @type {any} */
        s.host || null;
        try {
          var j = s[Dt]?.[n];
          j != null && (!/** @type {any} */
          s.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === s) && j.call(s, e);
        } catch (O) {
          k ? g.push(O) : k = O;
        }
        if (e.cancelBubble || v === t || v === null)
          break;
        s = v;
      }
      if (k) {
        for (let O of g)
          queueMicrotask(() => {
            throw O;
          });
        throw k;
      }
    } finally {
      e[Dt] = t, delete e.currentTarget, Ve(b), lt(y);
    }
  }
}
const xo = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (e) => e
  })
);
function yo(e) {
  return (
    /** @type {string} */
    xo?.createHTML(e) ?? e
  );
}
function wo(e) {
  var t = no("template");
  return t.innerHTML = yo(e.replaceAll("<!>", "<!---->")), t.content;
}
function Tn(e, t) {
  var r = (
    /** @type {Effect} */
    F
  );
  r.nodes === null && (r.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function S(e, t) {
  var r = (t & Ta) !== 0, n = (t & Aa) !== 0, i, s = !e.startsWith("<!>");
  return () => {
    i === void 0 && (i = wo(s ? e : "<!>" + e), r || (i = /** @type {TemplateNode} */
    /* @__PURE__ */ Gr(i)));
    var u = (
      /** @type {TemplateNode} */
      n || Wi ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (r) {
      var l = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Gr(u)
      ), f = (
        /** @type {TemplateNode} */
        u.lastChild
      );
      Tn(l, f);
    } else
      Tn(u, u);
    return u;
  };
}
function wi(e = "") {
  {
    var t = St(e + "");
    return Tn(t, t), t;
  }
}
function E(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function D(e, t) {
  var r = t == null ? "" : typeof t == "object" ? `${t}` : t;
  r !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = r, e.nodeValue = `${r}`);
}
function ko(e, t) {
  return Eo(e, t);
}
const Jr = /* @__PURE__ */ new Map();
function Eo(e, { target: t, anchor: r, props: n = {}, events: i, context: s, intro: u = !0, transformError: l }) {
  to();
  var f = void 0, d = lo(() => {
    var b = r ?? t.appendChild(St());
    Ua(
      /** @type {TemplateNode} */
      b,
      {
        pending: () => {
        }
      },
      (g) => {
        Mi({});
        var v = (
          /** @type {ComponentContext} */
          Re
        );
        s && (v.c = s), i && (n.$$events = i), f = e(g, n) || {}, Ii();
      },
      l
    );
    var y = /* @__PURE__ */ new Set(), k = (g) => {
      for (var v = 0; v < g.length; v++) {
        var j = g[v];
        if (!y.has(j)) {
          y.add(j);
          var O = go(j);
          for (const Z of [t, document]) {
            var $ = Jr.get(Z);
            $ === void 0 && ($ = /* @__PURE__ */ new Map(), Jr.set(Z, $));
            var B = $.get(j);
            B === void 0 ? (Z.addEventListener(j, Sn, { passive: O }), $.set(j, 1)) : $.set(j, B + 1);
          }
        }
      }
    };
    return k(Qr(ds)), En.add(k), () => {
      for (var g of y)
        for (const O of [t, document]) {
          var v = (
            /** @type {Map<string, number>} */
            Jr.get(O)
          ), j = (
            /** @type {number} */
            v.get(g)
          );
          --j == 0 ? (O.removeEventListener(g, Sn), v.delete(g), v.size === 0 && Jr.delete(O)) : v.set(g, j);
        }
      En.delete(k), b !== r && b.parentNode?.removeChild(b);
    };
  });
  return An.set(f, d), f;
}
let An = /* @__PURE__ */ new WeakMap();
function So(e, t) {
  const r = An.get(e);
  return r ? (An.delete(e), r(t)) : Promise.resolve();
}
var Ge, st, Ie, Ut, Nr, Or, Xr;
class To {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, r = !0) {
    /** @type {TemplateNode} */
    We(this, "anchor");
    /** @type {Map<Batch, Key>} */
    M(this, Ge, /* @__PURE__ */ new Map());
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
    M(this, st, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    M(this, Ie, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    M(this, Ut, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    M(this, Nr, !0);
    /**
     * @param {Batch} batch
     */
    M(this, Or, (t) => {
      if (o(this, Ge).has(t)) {
        var r = (
          /** @type {Key} */
          o(this, Ge).get(t)
        ), n = o(this, st).get(r);
        if (n)
          Bn(n), o(this, Ut).delete(r);
        else {
          var i = o(this, Ie).get(r);
          i && (o(this, st).set(r, i.effect), o(this, Ie).delete(r), i.fragment.lastChild.remove(), this.anchor.before(i.fragment), n = i.effect);
        }
        for (const [s, u] of o(this, Ge)) {
          if (o(this, Ge).delete(s), s === t)
            break;
          const l = o(this, Ie).get(u);
          l && (we(l.effect), o(this, Ie).delete(u));
        }
        for (const [s, u] of o(this, st)) {
          if (s === r || o(this, Ut).has(s)) continue;
          const l = () => {
            if (Array.from(o(this, Ge).values()).includes(s)) {
              var d = document.createDocumentFragment();
              qn(u, d), d.append(St()), o(this, Ie).set(s, { effect: u, fragment: d });
            } else
              we(u);
            o(this, Ut).delete(s), o(this, st).delete(s);
          };
          o(this, Nr) || !n ? (o(this, Ut).add(s), zt(u, l, !1)) : l();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    M(this, Xr, (t) => {
      o(this, Ge).delete(t);
      const r = Array.from(o(this, Ge).values());
      for (const [n, i] of o(this, Ie))
        r.includes(n) || (we(i.effect), o(this, Ie).delete(n));
    });
    this.anchor = t, P(this, Nr, r);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, r) {
    var n = (
      /** @type {Batch} */
      N
    ), i = Ki();
    if (r && !o(this, st).has(t) && !o(this, Ie).has(t))
      if (i) {
        var s = document.createDocumentFragment(), u = St();
        s.append(u), o(this, Ie).set(t, {
          effect: qe(() => r(u)),
          fragment: s
        });
      } else
        o(this, st).set(
          t,
          qe(() => r(this.anchor))
        );
    if (o(this, Ge).set(n, t), i) {
      for (const [l, f] of o(this, st))
        l === t ? n.unskip_effect(f) : n.skip_effect(f);
      for (const [l, f] of o(this, Ie))
        l === t ? n.unskip_effect(f.effect) : n.skip_effect(f.effect);
      n.oncommit(o(this, Or)), n.ondiscard(o(this, Xr));
    } else
      o(this, Or).call(this, n);
  }
}
Ge = new WeakMap(), st = new WeakMap(), Ie = new WeakMap(), Ut = new WeakMap(), Nr = new WeakMap(), Or = new WeakMap(), Xr = new WeakMap();
function V(e, t, r = !1) {
  var n = new To(e), i = r ? ur : 0;
  function s(u, l) {
    n.ensure(u, l);
  }
  Jn(() => {
    var u = !1;
    t((l, f = 0) => {
      u = !0, s(f, l);
    }), u || s(-1, null);
  }, i);
}
function er(e, t) {
  return t;
}
function Ao(e, t, r) {
  for (var n = [], i = t.length, s, u = t.length, l = 0; l < i; l++) {
    let y = t[l];
    zt(
      y,
      () => {
        if (s) {
          if (s.pending.delete(y), s.done.add(y), s.pending.size === 0) {
            var k = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            Nn(e, Qr(s.done)), k.delete(s), k.size === 0 && (e.outrogroups = null);
          }
        } else
          u -= 1;
      },
      !1
    );
  }
  if (u === 0) {
    var f = n.length === 0 && r !== null;
    if (f) {
      var d = (
        /** @type {Element} */
        r
      ), b = (
        /** @type {Element} */
        d.parentNode
      );
      ro(b), b.append(d), e.items.clear();
    }
    Nn(e, t, !f);
  } else
    s = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ?? (e.outrogroups = /* @__PURE__ */ new Set())).add(s);
}
function Nn(e, t, r = !0) {
  var n;
  if (e.pending.size > 0) {
    n = /* @__PURE__ */ new Set();
    for (const u of e.pending.values())
      for (const l of u)
        n.add(
          /** @type {EachItem} */
          e.items.get(l).e
        );
  }
  for (var i = 0; i < t.length; i++) {
    var s = t[i];
    if (n?.has(s)) {
      s.f |= _t;
      const u = document.createDocumentFragment();
      qn(s, u);
    } else
      we(t[i], r);
  }
}
var ki;
function It(e, t, r, n, i, s = null) {
  var u = e, l = /* @__PURE__ */ new Map();
  {
    var f = (
      /** @type {Element} */
      e
    );
    u = f.appendChild(St());
  }
  var d = null, b = /* @__PURE__ */ Ya(() => {
    var B = r();
    return Cn(B) ? B : B == null ? [] : Qr(B);
  }), y, k = /* @__PURE__ */ new Map(), g = !0;
  function v(B) {
    ($.effect.f & $e) === 0 && ($.pending.delete(B), $.fallback = d, No($, y, u, t, n), d !== null && (y.length === 0 ? (d.f & _t) === 0 ? Bn(d) : (d.f ^= _t, gr(d, null, u)) : zt(d, () => {
      d = null;
    })));
  }
  function j(B) {
    $.pending.delete(B);
  }
  var O = Jn(() => {
    y = /** @type {V[]} */
    a(b);
    for (var B = y.length, Z = /* @__PURE__ */ new Set(), ae = (
      /** @type {Batch} */
      N
    ), te = Ki(), be = 0; be < B; be += 1) {
      var ke = y[be], ce = n(ke, be), Y = g ? null : l.get(ce);
      Y ? (Y.v && cr(Y.v, ke), Y.i && cr(Y.i, be), te && ae.unskip_effect(Y.e)) : (Y = Oo(
        l,
        g ? u : ki ?? (ki = St()),
        ke,
        ce,
        be,
        i,
        t,
        r
      ), g || (Y.e.f |= _t), l.set(ce, Y)), Z.add(ce);
    }
    if (B === 0 && s && !d && (g ? d = qe(() => s(u)) : (d = qe(() => s(ki ?? (ki = St()))), d.f |= _t)), B > Z.size && pa(), !g)
      if (k.set(ae, Z), te) {
        for (const [Nt, oe] of l)
          Z.has(Nt) || ae.skip_effect(oe.e);
        ae.oncommit(v), ae.ondiscard(j);
      } else
        v(ae);
    a(b);
  }), $ = { effect: O, items: l, pending: k, outrogroups: null, fallback: d };
  g = !1;
}
function hr(e) {
  for (; e !== null && (e.f & Xe) === 0; )
    e = e.next;
  return e;
}
function No(e, t, r, n, i) {
  var s = t.length, u = e.items, l = hr(e.effect.first), f, d = null, b = [], y = [], k, g, v, j;
  for (j = 0; j < s; j += 1) {
    if (k = t[j], g = i(k, j), v = /** @type {EachItem} */
    u.get(g).e, e.outrogroups !== null)
      for (const ce of e.outrogroups)
        ce.pending.delete(v), ce.done.delete(v);
    if ((v.f & ge) !== 0 && Bn(v), (v.f & _t) !== 0)
      if (v.f ^= _t, v === l)
        gr(v, null, r);
      else {
        var O = d ? d.next : l;
        v === e.effect.last && (e.effect.last = v.prev), v.prev && (v.prev.next = v.next), v.next && (v.next.prev = v.prev), gt(e, d, v), gt(e, v, O), gr(v, O, r), d = v, b = [], y = [], l = hr(d.next);
        continue;
      }
    if (v !== l) {
      if (f !== void 0 && f.has(v)) {
        if (b.length < y.length) {
          var $ = y[0], B;
          d = $.prev;
          var Z = b[0], ae = b[b.length - 1];
          for (B = 0; B < b.length; B += 1)
            gr(b[B], $, r);
          for (B = 0; B < y.length; B += 1)
            f.delete(y[B]);
          gt(e, Z.prev, ae.next), gt(e, d, Z), gt(e, ae, $), l = $, d = ae, j -= 1, b = [], y = [];
        } else
          f.delete(v), gr(v, l, r), gt(e, v.prev, v.next), gt(e, v, d === null ? e.effect.first : d.next), gt(e, d, v), d = v;
        continue;
      }
      for (b = [], y = []; l !== null && l !== v; )
        (f ?? (f = /* @__PURE__ */ new Set())).add(l), y.push(l), l = hr(l.next);
      if (l === null)
        continue;
    }
    (v.f & _t) === 0 && b.push(v), d = v, l = hr(v.next);
  }
  if (e.outrogroups !== null) {
    for (const ce of e.outrogroups)
      ce.pending.size === 0 && (Nn(e, Qr(ce.done)), e.outrogroups?.delete(ce));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (l !== null || f !== void 0) {
    var te = [];
    if (f !== void 0)
      for (v of f)
        (v.f & ge) === 0 && te.push(v);
    for (; l !== null; )
      (l.f & ge) === 0 && l !== e.fallback && te.push(l), l = hr(l.next);
    var be = te.length;
    if (be > 0) {
      var ke = s === 0 ? r : null;
      Ao(e, te, ke);
    }
  }
}
function Oo(e, t, r, n, i, s, u, l) {
  var f = (u & ka) !== 0 ? (u & Sa) === 0 ? /* @__PURE__ */ Za(r, !1, !1) : Wt(r) : null, d = (u & Ea) !== 0 ? Wt(i) : null;
  return {
    v: f,
    i: d,
    e: qe(() => (s(t, f ?? r, d ?? i, l), () => {
      e.delete(n);
    }))
  };
}
function gr(e, t, r) {
  if (e.nodes)
    for (var n = e.nodes.start, i = e.nodes.end, s = t && (t.f & _t) === 0 ? (
      /** @type {EffectNodes} */
      t.nodes.start
    ) : r; n !== null; ) {
      var u = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Cr(n)
      );
      if (s.before(n), n === i)
        return;
      n = u;
    }
}
function gt(e, t, r) {
  t === null ? e.effect.first = r : t.next = r, r === null ? e.effect.last = t : r.prev = t;
}
function cs(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var i = e.length;
    for (t = 0; t < i; t++) e[t] && (r = cs(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function Co() {
  for (var e, t, r = 0, n = "", i = arguments.length; r < i; r++) (e = arguments[r]) && (t = cs(e)) && (n && (n += " "), n += t);
  return n;
}
function bt(e) {
  return typeof e == "object" ? Co(e) : e ?? "";
}
function Mo(e, t, r) {
  var n = e == null ? "" : "" + e;
  return n === "" ? null : n;
}
function mt(e, t, r, n, i, s) {
  var u = e.__className;
  if (u !== r || u === void 0) {
    var l = Mo(r);
    l == null ? e.removeAttribute("class") : e.className = l, e.__className = r;
  }
  return s;
}
function vs(e, t, r = !1) {
  if (e.multiple) {
    if (t == null)
      return;
    if (!Cn(t))
      return Oa();
    for (var n of e.options)
      n.selected = t.includes(yr(n));
    return;
  }
  for (n of e.options) {
    var i = yr(n);
    if (eo(i, t)) {
      n.selected = !0;
      return;
    }
  }
  (!r || t !== void 0) && (e.selectedIndex = -1);
}
function Io(e) {
  var t = new MutationObserver(() => {
    vs(e, e.__value);
  });
  t.observe(e, {
    // Listen to option element changes
    childList: !0,
    subtree: !0,
    // because of <optgroup>
    // Listen to option element value attribute changes
    // (doesn't get notified of select value changes,
    // because that property is not reflected as an attribute)
    attributes: !0,
    attributeFilter: ["value"]
  }), Ln(() => {
    t.disconnect();
  });
}
function Ro(e, t, r = t) {
  var n = /* @__PURE__ */ new WeakSet(), i = !0;
  Zi(e, "change", (s) => {
    var u = s ? "[selected]" : ":checked", l;
    if (e.multiple)
      l = [].map.call(e.querySelectorAll(u), yr);
    else {
      var f = e.querySelector(u) ?? // will fall back to first non-disabled option if no option is selected
      e.querySelector("option:not([disabled])");
      l = f && yr(f);
    }
    r(l), e.__value = l, N !== null && n.add(N);
  }), Qi(() => {
    var s = t();
    if (e === document.activeElement) {
      var u = (
        /** @type {Batch} */
        N
      );
      if (n.has(u))
        return;
    }
    if (vs(e, s, i), i && s === void 0) {
      var l = e.querySelector(":checked");
      l !== null && (s = yr(l), r(s));
    }
    e.__value = s, i = !1;
  }), Io(e);
}
function yr(e) {
  return "__value" in e ? e.__value : e.value;
}
const jo = Symbol("is custom element"), Do = Symbol("is html");
function Po(e, t, r, n) {
  var i = Lo(e);
  i[t] !== (i[t] = r) && e.setAttribute(t, r);
}
function Lo(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [jo]: e.nodeName.includes("-"),
      [Do]: e.namespaceURI === Ni
    })
  );
}
function Fo(e, t, r = t) {
  var n = /* @__PURE__ */ new WeakSet();
  Zi(e, "input", async (i) => {
    var s = i ? e.defaultValue : e.value;
    if (s = vn(e) ? pn(s) : s, r(s), N !== null && n.add(N), await _o(), s !== (s = t())) {
      var u = e.selectionStart, l = e.selectionEnd, f = e.value.length;
      if (e.value = s ?? "", l !== null) {
        var d = e.value.length;
        u === l && l === f && d > f ? (e.selectionStart = d, e.selectionEnd = d) : (e.selectionStart = u, e.selectionEnd = Math.min(l, d));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  zn(t) == null && e.value && (r(vn(e) ? pn(e.value) : e.value), N !== null && n.add(N)), Fn(() => {
    var i = t();
    if (e === document.activeElement) {
      var s = (
        /** @type {Batch} */
        N
      );
      if (n.has(s))
        return;
    }
    vn(e) && i === pn(e.value) || e.type === "date" && !i && !e.value || i !== e.value && (e.value = i ?? "");
  });
}
function vn(e) {
  var t = e.type;
  return t === "number" || t === "range";
}
function pn(e) {
  return e === "" ? null : +e;
}
function Ei(e, t) {
  return e === t || e?.[rr] === t;
}
function Jo(e = {}, t, r, n) {
  var i = (
    /** @type {ComponentContext} */
    Re.r
  ), s = (
    /** @type {Effect} */
    F
  );
  return Qi(() => {
    var u, l;
    return Fn(() => {
      u = l, l = [], zn(() => {
        e !== r(...l) && (t(e, ...l), u && Ei(r(...u), e) && t(null, ...u));
      });
    }), () => {
      let f = s;
      for (; f !== i && f.parent !== null && f.parent.f & hn; )
        f = f.parent;
      const d = () => {
        l && Ei(r(...l), e) && t(null, ...l);
      }, b = f.teardown;
      f.teardown = () => {
        d(), b?.();
      };
    };
  }), e;
}
const Uo = "5";
var Si;
typeof window < "u" && ((Si = window.__svelte ?? (window.__svelte = {})).v ?? (Si.v = /* @__PURE__ */ new Set())).add(Uo);
var Bo = /* @__PURE__ */ S("<div> </div>"), qo = /* @__PURE__ */ S('<div class="fixed top-4 right-4 z-50 flex flex-col gap-2"></div>'), zo = /* @__PURE__ */ S('<br/><span class="text-gray-500"> </span>', 1), $o = /* @__PURE__ */ S('<div class="fixed inset-0 bg-black/50 z-40 flex items-center justify-center"><div class="bg-white rounded-xl shadow-xl p-6 max-w-md mx-4"><h3 class="text-lg font-bold text-gray-900 mb-2">Confirm Delete</h3> <p class="text-gray-600 mb-4">Are you sure you want to delete <strong> </strong>? <!></p> <p class="text-red-600 text-sm mb-4">This action cannot be undone.</p> <div class="flex justify-end gap-3"><button class="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 font-medium">Cancel</button> <button class="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 font-medium">Delete</button></div></div></div>'), Ho = /* @__PURE__ */ S('<div class="mb-4 bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg text-sm"> <button class="ml-2 text-red-600 hover:text-red-800 font-bold">&times;</button></div>'), Vo = /* @__PURE__ */ S('<div class="text-xs text-gray-400">Loading…</div>'), Wo = /* @__PURE__ */ S('<div class="text-xs text-red-500"> </div>'), Yo = /* @__PURE__ */ S('<span class="mx-1">·</span> <span class="text-yellow-600 font-medium"> </span>', 1), Go = /* @__PURE__ */ S('<div class="text-xs text-gray-500"> <!></div>'), Ko = /* @__PURE__ */ S('<div class="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4"><div class="bg-white shadow-sm rounded-lg p-4 border border-gray-200"><div class="text-xs text-gray-500 uppercase tracking-wide">Entity Types</div> <div class="text-2xl font-bold text-gray-900 mt-1"> </div></div> <div class="bg-white shadow-sm rounded-lg p-4 border border-gray-200"><div class="text-xs text-gray-500 uppercase tracking-wide">Extensions</div> <div class="text-2xl font-bold text-gray-900 mt-1"> </div></div> <div class="bg-white shadow-sm rounded-lg p-4 border border-gray-200"><div class="text-xs text-gray-500 uppercase tracking-wide">Codexes</div> <div class="text-2xl font-bold text-gray-900 mt-1"> </div></div> <div class="bg-white shadow-sm rounded-lg p-4 border border-gray-200"><div class="text-xs text-gray-500 uppercase tracking-wide">Updates</div> <div> </div></div></div>'), Zo = /* @__PURE__ */ S('<div class="flex items-center gap-2 text-gray-400 text-sm"><div class="animate-spin h-4 w-4 border-2 border-blue-500 border-t-transparent rounded-full"></div> Loading types…</div>'), Xo = /* @__PURE__ */ S("<option> </option>"), Qo = /* @__PURE__ */ S('<select id="entity-type-select" class="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"></select>'), el = /* @__PURE__ */ S("<button> </button>"), tl = /* @__PURE__ */ S('<div class="text-center py-10 p-6"><div class="inline-block animate-spin h-8 w-8 border-4 border-blue-500 border-t-transparent rounded-full"></div> <p class="mt-2 text-gray-600">Loading data…</p></div>'), rl = /* @__PURE__ */ S('<div class="text-center py-10 p-6"><p class="text-gray-500 text-lg">No items loaded. Select an entity type and click "Load Data".</p></div>'), nl = /* @__PURE__ */ S('<span class="text-gray-700 truncate"> </span>'), il = /* @__PURE__ */ S('<div class="min-w-0"><span class="font-semibold text-gray-700"> </span> <span class="text-gray-600 ml-2 break-all"> </span></div>'), sl = /* @__PURE__ */ S('<div class="mt-4 bg-gray-50 rounded-lg p-4 border border-gray-200"><div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm"></div> <div class="mt-3 pt-3 border-t border-gray-200"><details><summary class="text-xs text-gray-500 cursor-pointer hover:text-gray-700">Raw JSON</summary> <pre class="mt-2 p-3 bg-white rounded border border-gray-200 text-xs font-mono overflow-auto max-h-64 whitespace-pre-wrap break-all"> </pre></details></div></div>'), al = /* @__PURE__ */ S('<div class="p-4 hover:bg-gray-50 transition"><div class="flex items-center justify-between"><div class="flex-1 min-w-0"><div class="flex items-center gap-3"><button class="text-blue-600 hover:text-blue-800 font-medium whitespace-nowrap"> </button> <!></div></div> <div class="flex items-center gap-1 ml-2 shrink-0"><button class="p-1.5 hover:bg-gray-100 text-gray-600 hover:text-gray-900 rounded transition-colors" title="Copy JSON"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path></svg></button> <button class="p-1.5 hover:bg-red-50 text-gray-400 hover:text-red-600 rounded transition-colors disabled:opacity-50" title="Delete entity"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg></button></div></div> <!></div>'), ol = /* @__PURE__ */ S('<div class="border-t border-gray-200 p-4 flex items-center justify-between"><div class="flex items-center gap-2"><button class="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed text-sm">First</button> <button class="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed text-sm">Prev</button></div> <span class="text-sm text-gray-600"> </span> <div class="flex items-center gap-2"><button class="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed text-sm">Next</button> <button class="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed text-sm">Last</button></div></div>'), ll = /* @__PURE__ */ S('<div class="divide-y divide-gray-200"></div> <!>', 1), fl = /* @__PURE__ */ S('<div class="mb-4 flex items-center gap-4"><button class="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed font-medium transition-colors"> </button> <div class="ml-auto text-gray-600 text-sm"><!></div></div> <div class="bg-white shadow-sm rounded-lg"><!></div>', 1), ul = /* @__PURE__ */ S('<div class="flex items-center gap-3 text-gray-600"><div class="animate-spin h-5 w-5 border-2 border-blue-500 border-t-transparent rounded-full"></div> Exporting…</div>'), dl = /* @__PURE__ */ S(", <strong> </strong> codexes", 1), cl = /* @__PURE__ */ S('<div class="border border-gray-200 rounded-lg overflow-hidden"><div class="bg-gray-50 px-4 py-3 flex items-center justify-between border-b border-gray-200 flex-wrap gap-2"><div class="text-sm text-gray-700"><strong> </strong> entities <!></div> <div class="flex gap-2"><button class="px-4 py-1.5 bg-green-600 text-white text-sm rounded-lg hover:bg-green-700 font-medium transition-colors">Download JSON</button> <button class="px-4 py-1.5 border border-gray-300 text-sm rounded-lg hover:bg-gray-50 font-medium transition-colors">Copy to Clipboard</button></div></div> <div class="max-h-96 overflow-auto"><pre class="p-4 text-xs text-gray-800 font-mono whitespace-pre-wrap break-all"> </pre></div></div>'), vl = /* @__PURE__ */ S('<div class="bg-white shadow-sm rounded-lg p-6"><h2 class="text-lg font-semibold text-gray-900 mb-4">Export Entities</h2> <p class="text-gray-600 text-sm mb-6">Export entities as a JSON file. You can export a single entity type or all types at once.</p> <div class="flex gap-3 mb-6"><button class="px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed font-medium transition-colors"> </button> <button class="px-5 py-2.5 bg-gray-700 text-white rounded-lg hover:bg-gray-800 disabled:bg-gray-400 disabled:cursor-not-allowed font-medium transition-colors"> </button></div> <!> <!></div>'), pl = /* @__PURE__ */ S('<p class="text-blue-600 font-medium"> </p> <p class="text-sm text-gray-500 mt-1">Click or drop to replace</p>', 1), _l = /* @__PURE__ */ S('<svg class="mx-auto h-10 w-10 text-gray-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg> <p class="text-gray-600 font-medium">Drop a JSON file here or click to browse</p> <p class="text-sm text-gray-400 mt-1">Accepts .json files</p>', 1), hl = /* @__PURE__ */ S('<div role="button" tabindex="0"><input type="file" accept=".json" class="hidden"/> <!></div>'), gl = /* @__PURE__ */ S('<button class="absolute top-2 right-2 px-2 py-1 text-xs text-gray-500 hover:text-gray-700 bg-white border border-gray-200 rounded">Clear</button>'), bl = /* @__PURE__ */ S('<div class="relative"><textarea class="w-full h-64 p-4 border border-gray-300 rounded-lg font-mono text-sm resize-y focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" spellcheck="false"></textarea> <!></div>'), ml = /* @__PURE__ */ S('<span class="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"> </span>'), xl = /* @__PURE__ */ S('<div class="bg-green-50 px-4 py-3 border-b border-green-200"><p class="text-sm font-medium text-green-800"> <!></p></div> <div class="px-4 py-3"><div class="flex flex-wrap gap-2"></div> <div class="mt-4 flex gap-3"><button class="px-5 py-2.5 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed font-medium transition-colors"> </button> <button class="px-5 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 font-medium disabled:opacity-50 transition-colors">Cancel</button></div></div>', 1), yl = /* @__PURE__ */ S('<div class="bg-red-50 px-4 py-3"><p class="text-sm font-medium text-red-800">Invalid JSON</p> <p class="text-sm text-red-600 mt-1"> </p></div>'), wl = /* @__PURE__ */ S("<div><!></div>"), kl = /* @__PURE__ */ S("<li> </li>"), El = /* @__PURE__ */ S('<ul class="mt-1 list-disc list-inside text-red-600"></ul>'), Sl = /* @__PURE__ */ S('<p class="text-red-600"> </p> <!>', 1), Tl = /* @__PURE__ */ S('<div class="mt-2 text-sm text-green-700"><p> </p> <p> </p> <!></div>'), Al = /* @__PURE__ */ S('<p class="text-sm font-medium text-green-800">Import complete</p> <!>', 1), Nl = /* @__PURE__ */ S('<p class="text-sm font-medium text-red-800">Import failed</p> <p class="text-sm text-red-600 mt-1"> </p>', 1), Ol = /* @__PURE__ */ S('<div><div class="px-4 py-3"><!></div></div>'), Cl = /* @__PURE__ */ S('<div class="bg-white shadow-sm rounded-lg p-6"><h2 class="text-lg font-semibold text-gray-900 mb-4">Import Entities</h2> <p class="text-gray-600 text-sm mb-6">Import entities from a JSON file or paste JSON directly. Existing entities with the same type and ID will be updated (upsert).</p> <div class="flex gap-2 mb-4"><button>Upload File</button> <button>JSON Editor</button></div> <!> <!> <!></div>'), Ml = /* @__PURE__ */ S('<!> <!> <div class="w-full px-4 max-w-none"><div class="flex justify-between items-center mb-6"><div><h1 class="text-3xl font-bold text-gray-900">Admin Dashboard</h1> <p class="text-gray-600 mt-1">Manage realm entities</p></div> <button class="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50" title="Refresh"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg></button></div> <!> <button class="block w-full mb-4 bg-white shadow-sm rounded-lg p-4 border border-gray-200 hover:border-blue-400 hover:shadow transition-all text-left cursor-pointer"><div class="flex items-center justify-between gap-4"><div class="flex items-center gap-3"><div class="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center text-xl">📦</div> <div><div class="text-sm font-medium text-gray-700">Packages</div> <!></div></div> <span class="text-blue-600 text-sm font-medium">Manage →</span></div></button> <!> <div class="mb-4 bg-white shadow-sm rounded-lg p-4"><div class="flex items-center gap-4 flex-wrap"><label for="entity-type-select" class="font-medium text-gray-700">Entity Type:</label> <!></div></div> <div class="mb-4 border-b border-gray-200"><nav class="flex gap-1" aria-label="Tabs"></nav></div> <!></div>', 1);
function Il(e, t) {
  Mi(t, !0);
  const r = t.ctx.theme?.cn ?? ((...c) => c.filter(Boolean).join(" ")), n = {
    Balance: "💵",
    Call: "📞",
    Codex: "📚",
    Contract: "📝",
    Dispute: "⚖️",
    Human: "🧑",
    Identity: "🆔",
    Instrument: "💰",
    Invoice: "🧾",
    Land: "🏞️",
    License: "📃",
    Mandate: "📜",
    Member: "👥",
    Notification: "🔔",
    Organization: "🏢",
    PaymentAccount: "💳",
    Permission: "🔐",
    Proposal: "🗳️",
    Realm: "🏛️",
    Registry: "📋",
    Service: "⚙️",
    Task: "📋",
    TaskExecution: "▶️",
    TaskSchedule: "⏰",
    TaskStep: "📌",
    Token: "🪙",
    Trade: "🤝",
    Transfer: "🔄",
    Treasury: "🏦",
    User: "👤",
    UserProfile: "📋",
    Vote: "✅",
    Zone: "🗺️"
  };
  let i = /* @__PURE__ */ R(kt([])), s = /* @__PURE__ */ R(""), u = /* @__PURE__ */ R("browse"), l = /* @__PURE__ */ R(!0), f = /* @__PURE__ */ R(""), d = /* @__PURE__ */ R(kt([])), b = /* @__PURE__ */ R(0), y = /* @__PURE__ */ R(kt([])), k = /* @__PURE__ */ R(!1), g = /* @__PURE__ */ R(null), v = /* @__PURE__ */ R(0), j = 10, O = /* @__PURE__ */ R(0), $ = /* @__PURE__ */ R(0), B = /* @__PURE__ */ R(null), Z = /* @__PURE__ */ R(null), ae = /* @__PURE__ */ R(!1), te = /* @__PURE__ */ R(null), be = /* @__PURE__ */ R("file"), ke = /* @__PURE__ */ R(""), ce = /* @__PURE__ */ R(""), Y = /* @__PURE__ */ R(null), Nt = /* @__PURE__ */ R(!1), oe = /* @__PURE__ */ R(null), Gt = /* @__PURE__ */ R(void 0), Ir = /* @__PURE__ */ R(!1), $n = /* @__PURE__ */ R(null), Kt = /* @__PURE__ */ R(0), Rr = /* @__PURE__ */ R(!0), jr = /* @__PURE__ */ R(""), rn = /* @__PURE__ */ R(0), nn = /* @__PURE__ */ R(0);
  function je(c, p = "success") {
    const h = Qa(b);
    m(d, [...a(d), { id: h, text: c, type: p }], !0), setTimeout(
      () => {
        m(d, a(d).filter((x) => x.id !== h), !0);
      },
      4e3
    );
  }
  function Hn(c) {
    return n[c] || "📊";
  }
  function ps(c) {
    return c.replace(/([A-Z])/g, " $1").trim();
  }
  async function Dr(c, p = "{}") {
    const h = await t.ctx.backend.extension_sync_call(JSON.stringify({ extension_name: "admin_dashboard", function_name: c, args: p }));
    return typeof h == "string" ? JSON.parse(h) : h;
  }
  function _s(c) {
    if (c?.success && c?.data?.objectsListPaginated) {
      const p = c.data.objectsListPaginated;
      return { objects: (p.objects || []).map((x) => {
        try {
          return typeof x == "string" ? JSON.parse(x) : x;
        } catch {
          return x;
        }
      }), pagination: p.pagination };
    }
    return c?.data && Array.isArray(c.data) ? { objects: c.data, pagination: null } : { objects: [], pagination: null };
  }
  async function Vn() {
    m(l, !0), m(f, "");
    try {
      const c = await Dr("get_entity_types", "{}"), p = c?.data ?? (Array.isArray(c) ? c : []);
      m(
        i,
        p.map((h) => ({
          value: h,
          label: `${Hn(h)} ${ps(h)}`,
          className: h
        })),
        !0
      ), a(i).length > 0 && !a(s) && m(s, a(i)[0].value, !0);
    } catch (c) {
      m(f, c?.message || String(c), !0), m(i, [{ value: "User", label: "👤 User", className: "User" }], !0), a(s) || m(s, "User");
    } finally {
      m(l, !1);
    }
  }
  async function Wn() {
    m(Rr, !0), m(jr, "");
    try {
      const [c, p, h] = await Promise.all([
        t.ctx.backend.list_runtime_extensions().catch(() => "{}"),
        t.ctx.backend.list_codex_packages().catch(() => "{}"),
        t.ctx.backend.status().catch(() => null)
      ]), x = typeof c == "string" ? JSON.parse(c) : c, A = typeof p == "string" ? JSON.parse(p) : p, I = x?.success ? x.runtime_extensions ?? [] : [], K = A?.success ? A.codex_packages ?? [] : [], le = x?.success ? x.all_manifests ?? {} : {}, ve = A?.success ? A.manifests ?? {} : {};
      m(rn, Object.keys(le).length || I.length, !0), m(
        nn,
        Array.isArray(K) ? K.length : Object.keys(ve).length,
        !0
      ), m($n, a(rn) + a(nn));
      const De = h?.success && h?.data?.status?.registries || [];
      let Ee = 0;
      for (const ie of De)
        try {
          const U = hs(ie.canister_id);
          if (!U) continue;
          const [T, z] = await Promise.all([
            fetch(`${U}/api/extensions`, { headers: { Accept: "application/json" } }).then((H) => H.ok ? H.json() : []).catch(() => []),
            fetch(`${U}/api/codices`, { headers: { Accept: "application/json" } }).then((H) => H.ok ? H.json() : []).catch(() => [])
          ]);
          for (const H of T) {
            if (!I.includes(H.ext_id)) continue;
            const ue = le?.[H.ext_id]?.version;
            ue && H.latest && Yn(H.latest, ue) && Ee++;
          }
          for (const H of z) {
            if (!K.includes(H.codex_id)) continue;
            const ue = ve?.[H.codex_id]?.version;
            ue && H.latest && Yn(H.latest, ue) && Ee++;
          }
        } catch {
        }
      m(Kt, Ee, !0);
    } catch (c) {
      m(jr, c?.message ?? String(c), !0);
    } finally {
      m(Rr, !1);
    }
  }
  function hs(c) {
    if (typeof window > "u") return null;
    const p = window.location.host;
    if (p.includes("localhost") || p.includes("127.0.0.1")) {
      const x = p.split(":")[1] ?? "4943";
      return `http://${c}.localhost:${x}`;
    }
    return `https://${c}.icp0.io`;
  }
  function Yn(c, p) {
    const h = (c || "").split("-", 1)[0].split(".").map((I) => parseInt(I, 10) || 0), x = (p || "").split("-", 1)[0].split(".").map((I) => parseInt(I, 10) || 0), A = Math.max(h.length, x.length);
    for (let I = 0; I < A; I++) {
      const K = h[I] ?? 0, le = x[I] ?? 0;
      if (K !== le) return K > le;
    }
    return !1;
  }
  async function Gn() {
    m(k, !0), m(g, null);
    try {
      const c = await t.ctx.backend.get_objects_paginated(a(s), a(v), j, "desc"), p = typeof c == "string" ? JSON.parse(c) : c, { objects: h, pagination: x } = _s(p);
      m(y, h, !0), x ? (m(O, Number(x.total_items || 0), !0), m($, Number(x.total_pages || 0), !0)) : (m(O, h.length, !0), m($, 1));
    } catch (c) {
      m(f, c?.message || String(c), !0), m(y, [], !0);
    } finally {
      m(k, !1);
    }
  }
  function gs(c) {
    m(g, a(g) === c ? null : c, !0);
  }
  function bs(c) {
    navigator.clipboard.writeText(JSON.stringify(c, null, 2)), je("JSON copied to clipboard");
  }
  function Pr(c) {
    m(v, c, !0), Gn();
  }
  function ms(c) {
    m(Z, c, !0);
  }
  function xs() {
    m(Z, null);
  }
  async function ys() {
    if (!a(Z)) return;
    const c = a(Z), p = c._type || a(s), h = c._id || c.id;
    m(Z, null), m(B, String(h), !0);
    try {
      const x = await Dr("delete_entity", JSON.stringify({ entity_type: p, entity_id: String(h) }));
      x?.success ? (m(y, a(y).filter((A) => !((A._id || A.id) === h && (A._type || a(s)) === p)), !0), m(O, Math.max(0, a(O) - 1), !0), je(`Deleted ${p}#${h}`)) : je(x?.error || "Delete failed", "error");
    } catch (x) {
      je(`Delete error: ${x?.message}`, "error");
    } finally {
      m(B, null);
    }
  }
  async function Kn(c = !1) {
    m(ae, !0), m(te, null);
    try {
      const p = c ? { include_codexes: !0 } : { entity_types: [a(s)], include_codexes: !0 }, h = await Dr("export_data", JSON.stringify(p));
      if (h?.success && h?.data) {
        const x = typeof h.data == "string" ? JSON.parse(h.data) : h.data;
        m(te, x, !0);
        const A = c ? `Exported ${x.total_entities ?? "?"} entities, ${x.total_codexes ?? 0} codexes` : `Exported ${x.total_entities ?? "?"} entities`;
        je(A);
      } else
        je(h?.error || "Export failed", "error");
    } catch (p) {
      je(`Export error: ${p?.message}`, "error");
    } finally {
      m(ae, !1);
    }
  }
  function ws(c = !1) {
    if (!a(te)) return;
    const p = JSON.stringify(a(te), null, 2), h = new Blob([p], { type: "application/json" }), x = URL.createObjectURL(h), A = document.createElement("a");
    A.href = x;
    const I = (/* @__PURE__ */ new Date()).toISOString().replace(/[:.]/g, "-").slice(0, 19);
    A.download = c ? `export_all_${I}.json` : `export_${a(s)}_${I}.json`, A.click(), URL.revokeObjectURL(x), je("Download started");
  }
  function ks() {
    a(te) && (navigator.clipboard.writeText(JSON.stringify(a(te), null, 2)), je("Copied to clipboard"));
  }
  function Es(c) {
    const h = c.target.files?.[0];
    h && Zn(h);
  }
  function Ss(c) {
    c.preventDefault(), m(Ir, !1);
    const p = c.dataTransfer?.files?.[0];
    p && Zn(p);
  }
  function Zn(c) {
    m(ce, c.name, !0);
    const p = new FileReader();
    p.onload = (h) => {
      m(ke, h.target?.result || "", !0), Xn();
    }, p.readAsText(c);
  }
  function Xn() {
    if (m(Y, null), m(oe, null), !!a(ke).trim())
      try {
        const c = JSON.parse(a(ke));
        let p = [], h = [];
        Array.isArray(c) ? p = c : c.entities ? (p = c.entities || [], h = c.codexes || []) : p = [c];
        const x = {};
        for (const A of p) {
          const I = A._type || "unknown";
          x[I] = (x[I] || 0) + 1;
        }
        m(
          Y,
          {
            totalEntities: p.length,
            totalCodexes: h.length,
            typeCounts: x,
            valid: !0,
            entities: p,
            codexes: h
          },
          !0
        );
      } catch (c) {
        m(
          Y,
          {
            valid: !1,
            error: c.message,
            totalEntities: 0,
            totalCodexes: 0,
            typeCounts: {},
            entities: [],
            codexes: []
          },
          !0
        );
      }
  }
  async function Ts() {
    if (!(!a(Y) || !a(Y).valid)) {
      m(Nt, !0), m(oe, null);
      try {
        const c = [...a(Y).entities];
        for (const h of a(Y).codexes)
          c.push({ ...h, _type: "Codex" });
        const p = await Dr("import_data", JSON.stringify({ format: "json", data: JSON.stringify(c) }));
        if (m(oe, p, !0), p?.success) {
          const h = p.data || {};
          je(`Imported ${h.successful || 0} of ${h.total_records || 0} records`);
        } else
          je(p?.error || "Import failed", "error");
      } catch (c) {
        m(oe, { success: !1, error: c.message }, !0), je(`Import error: ${c?.message}`, "error");
      } finally {
        m(Nt, !1);
      }
    }
  }
  function Lr() {
    m(ke, ""), m(ce, ""), m(Y, null), m(oe, null), a(Gt) && (a(Gt).value = "");
  }
  oo(() => {
    Vn(), Wn();
  });
  const As = [
    { id: "browse", label: "Browse" },
    { id: "export", label: "Export" },
    { id: "import", label: "Import" }
  ];
  let Ns = /* @__PURE__ */ dn(() => a(te) ? JSON.stringify(a(te), null, 2) : "");
  var Qn = Ml(), ei = Ye(Qn);
  {
    var Os = (c) => {
      var p = qo();
      It(p, 21, () => a(d), (h) => h.id, (h, x) => {
        var A = Bo(), I = _(A);
        J(
          (K) => {
            mt(A, 1, K), D(I, a(x).text);
          },
          [
            () => bt(r("px-4 py-3 rounded-lg shadow-lg text-sm font-medium transition-all", a(x).type === "error" ? "bg-red-600 text-white" : "bg-green-600 text-white"))
          ]
        ), E(h, A);
      }), E(c, p);
    };
    V(ei, (c) => {
      a(d).length > 0 && c(Os);
    });
  }
  var ti = w(ei, 2);
  {
    var Cs = (c) => {
      var p = $o(), h = _(p), x = w(_(h), 2), A = w(_(x)), I = _(A), K = w(A, 2);
      {
        var le = (ie) => {
          var U = zo(), T = w(Ye(U)), z = _(T);
          J(() => D(z, `(${a(Z).name ?? ""})`)), E(ie, U);
        };
        V(K, (ie) => {
          a(Z).name && ie(le);
        });
      }
      var ve = w(x, 4), De = _(ve), Ee = w(De, 2);
      J(() => D(I, `${(a(Z)._type || a(s)) ?? ""}#${(a(Z)._id || a(Z).id) ?? ""}`)), W("click", De, xs), W("click", Ee, ys), E(c, p);
    };
    V(ti, (c) => {
      a(Z) && c(Cs);
    });
  }
  var Ms = w(ti, 2), ri = _(Ms), ni = w(_(ri), 2), ii = w(ri, 2);
  {
    var Is = (c) => {
      var p = Ho(), h = _(p), x = w(h);
      J(() => D(h, `${a(f) ?? ""} `)), W("click", x, () => m(f, "")), E(c, p);
    };
    V(ii, (c) => {
      a(f) && c(Is);
    });
  }
  var sn = w(ii, 2), Rs = _(sn), js = _(Rs), Ds = w(_(js), 2), Ps = w(_(Ds), 2);
  {
    var Ls = (c) => {
      var p = Vo();
      E(c, p);
    }, Fs = (c) => {
      var p = Wo(), h = _(p);
      J(() => D(h, a(jr))), E(c, p);
    }, Js = (c) => {
      var p = Go(), h = _(p), x = w(h);
      {
        var A = (I) => {
          var K = Yo(), le = w(Ye(K), 2), ve = _(le);
          J(() => D(ve, `${a(Kt) ?? ""} update${a(Kt) === 1 ? "" : "s"} available`)), E(I, K);
        };
        V(x, (I) => {
          a(Kt) > 0 && I(A);
        });
      }
      J(() => D(h, `${a($n) ?? 0 ?? ""} installed `)), E(c, p);
    };
    V(Ps, (c) => {
      a(Rr) ? c(Ls) : a(jr) ? c(Fs, 1) : c(Js, -1);
    });
  }
  var si = w(sn, 2);
  {
    var Us = (c) => {
      var p = Ko(), h = _(p), x = w(_(h), 2), A = _(x), I = w(h, 2), K = w(_(I), 2), le = _(K), ve = w(I, 2), De = w(_(ve), 2), Ee = _(De), ie = w(ve, 2), U = w(_(ie), 2), T = _(U);
      J(
        (z) => {
          D(A, a(i).length), D(le, a(rn)), D(Ee, a(nn)), mt(U, 1, z), D(T, a(Rr) ? "…" : a(Kt));
        },
        [
          () => bt(r("text-2xl font-bold mt-1", a(Kt) > 0 ? "text-yellow-600" : "text-gray-900"))
        ]
      ), E(c, p);
    };
    V(si, (c) => {
      a(l) || c(Us);
    });
  }
  var ai = w(si, 2), Bs = _(ai), qs = w(_(Bs), 2);
  {
    var zs = (c) => {
      var p = Zo();
      E(c, p);
    }, $s = (c) => {
      var p = Qo();
      It(p, 21, () => a(i), er, (h, x) => {
        var A = Xo(), I = _(A), K = {};
        J(() => {
          D(I, a(x).label), K !== (K = a(x).value) && (A.value = (A.__value = a(x).value) ?? "");
        }), E(h, A);
      }), Ro(p, () => a(s), (h) => m(s, h)), E(c, p);
    };
    V(qs, (c) => {
      a(l) ? c(zs) : c($s, -1);
    });
  }
  var oi = w(ai, 2), Hs = _(oi);
  It(Hs, 21, () => As, er, (c, p) => {
    var h = el(), x = _(h);
    J(
      (A) => {
        mt(h, 1, A), D(x, a(p).label);
      },
      [
        () => bt(r("px-5 py-2.5 text-sm font-medium rounded-t-lg border-b-2 transition-colors", a(u) === a(p).id ? "border-blue-600 text-blue-600 bg-blue-50" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"))
      ]
    ), W("click", h, () => m(u, a(p).id, !0)), E(c, h);
  });
  var Vs = w(oi, 2);
  {
    var Ws = (c) => {
      var p = fl(), h = Ye(p), x = _(h), A = _(x), I = w(x, 2), K = _(I);
      {
        var le = (T) => {
          var z = wi();
          J(() => D(z, `Showing ${a(y).length ?? ""} of ${a(O) ?? ""} items`)), E(T, z);
        };
        V(K, (T) => {
          a(y).length > 0 && T(le);
        });
      }
      var ve = w(h, 2), De = _(ve);
      {
        var Ee = (T) => {
          var z = tl();
          E(T, z);
        }, ie = (T) => {
          var z = rl();
          E(T, z);
        }, U = (T) => {
          var z = ll(), H = Ye(z);
          It(H, 21, () => a(y), er, (C, q, re) => {
            var de = al(), Se = _(de), Pe = _(Se), Qe = _(Pe), me = _(Qe), Te = _(me), Ae = w(me, 2);
            {
              var Ot = (Ne) => {
                var tt = nl(), rt = _(tt);
                J(() => D(rt, `- ${a(q).name ?? ""}`)), E(Ne, tt);
              };
              V(Ae, (Ne) => {
                a(q).name && Ne(Ot);
              });
            }
            var Zt = w(Pe, 2), Le = _(Zt), et = w(Le, 2), Ct = w(Se, 2);
            {
              var Xt = (Ne) => {
                var tt = sl(), rt = _(tt);
                It(rt, 21, () => Object.entries(a(q)), er, (_r, Ks) => {
                  var li = /* @__PURE__ */ dn(() => vi(a(Ks), 2));
                  let Zs = () => a(li)[0], ln = () => a(li)[1];
                  var fi = il(), ui = _(fi), Xs = _(ui), Qs = w(ui, 2), ea = _(Qs);
                  J(
                    (ta) => {
                      D(Xs, `${Zs() ?? ""}:`), D(ea, ta);
                    },
                    [
                      () => typeof ln() == "object" ? JSON.stringify(ln()) : String(ln())
                    ]
                  ), E(_r, fi);
                });
                var Qt = w(rt, 2), an = _(Qt), on = w(_(an), 2), Fr = _(on);
                J((_r) => D(Fr, _r), [() => JSON.stringify(a(q), null, 2)]), E(Ne, tt);
              };
              V(Ct, (Ne) => {
                a(g) === re && Ne(Xt);
              });
            }
            J(
              (Ne) => {
                D(Te, `${a(g) === re ? "▼" : "▶"}
											${(a(q)._type || a(s)) ?? ""} #${(a(q)._id || a(q).id || re + 1) ?? ""}`), et.disabled = Ne;
              },
              [
                () => a(B) === String(a(q)._id || a(q).id)
              ]
            ), W("click", me, () => gs(re)), W("click", Le, () => bs(a(q))), W("click", et, () => ms(a(q))), E(C, de);
          });
          var ue = w(H, 2);
          {
            var X = (C) => {
              var q = ol(), re = _(q), de = _(re), Se = w(de, 2), Pe = w(re, 2), Qe = _(Pe), me = w(Pe, 2), Te = _(me), Ae = w(Te, 2);
              J(() => {
                de.disabled = a(v) === 0, Se.disabled = a(v) === 0, D(Qe, `Page ${a(v) + 1} of ${a($) ?? ""}`), Te.disabled = a(v) >= a($) - 1, Ae.disabled = a(v) >= a($) - 1;
              }), W("click", de, () => Pr(0)), W("click", Se, () => Pr(a(v) - 1)), W("click", Te, () => Pr(a(v) + 1)), W("click", Ae, () => Pr(a($) - 1)), E(C, q);
            };
            V(ue, (C) => {
              a($) > 1 && C(X);
            });
          }
          E(T, z);
        };
        V(De, (T) => {
          a(k) ? T(Ee) : a(y).length === 0 ? T(ie, 1) : T(U, -1);
        });
      }
      J(() => {
        x.disabled = a(k), D(A, a(k) ? "Loading…" : "Load Data");
      }), W("click", x, Gn), E(c, p);
    }, Ys = (c) => {
      var p = vl(), h = w(_(p), 4), x = _(h), A = _(x), I = w(x, 2), K = _(I), le = w(h, 2);
      {
        var ve = (ie) => {
          var U = ul();
          E(ie, U);
        };
        V(le, (ie) => {
          a(ae) && ie(ve);
        });
      }
      var De = w(le, 2);
      {
        var Ee = (ie) => {
          var U = cl(), T = _(U), z = _(T), H = _(z), ue = _(H), X = w(H, 2);
          {
            var C = (me) => {
              var Te = dl(), Ae = w(Ye(Te)), Ot = _(Ae);
              J(() => D(Ot, a(te).total_codexes)), E(me, Te);
            };
            V(X, (me) => {
              (a(te).total_codexes ?? 0) > 0 && me(C);
            });
          }
          var q = w(z, 2), re = _(q), de = w(re, 2), Se = w(T, 2), Pe = _(Se), Qe = _(Pe);
          J(() => {
            D(ue, a(te).total_entities ?? "?"), D(Qe, a(Ns));
          }), W("click", re, () => ws(!1)), W("click", de, ks), E(ie, U);
        };
        V(De, (ie) => {
          a(te) && ie(Ee);
        });
      }
      J(() => {
        x.disabled = a(ae), D(A, a(ae) ? "Exporting…" : `Export ${a(s)}`), I.disabled = a(ae), D(K, a(ae) ? "Exporting…" : "Export All Types");
      }), W("click", x, () => Kn(!1)), W("click", I, () => Kn(!0)), E(c, p);
    }, Gs = (c) => {
      var p = Cl(), h = w(_(p), 4), x = _(h), A = w(x, 2), I = w(h, 2);
      {
        var K = (U) => {
          var T = hl(), z = _(T);
          Jo(z, (C) => m(Gt, C), () => a(Gt));
          var H = w(z, 2);
          {
            var ue = (C) => {
              var q = pl(), re = Ye(q), de = _(re);
              J(() => D(de, a(ce))), E(C, q);
            }, X = (C) => {
              var q = _l();
              E(C, q);
            };
            V(H, (C) => {
              a(ce) ? C(ue) : C(X, -1);
            });
          }
          J((C) => mt(T, 1, C), [
            () => bt(r("border-2 border-dashed rounded-lg p-8 text-center transition-colors cursor-pointer", a(Ir) ? "border-blue-500 bg-blue-50" : "border-gray-300 hover:border-gray-400"))
          ]), cn("drop", T, Ss), cn("dragover", T, (C) => {
            C.preventDefault(), m(Ir, !0);
          }), cn("dragleave", T, () => m(Ir, !1)), W("click", T, () => a(Gt)?.click()), W("keydown", T, (C) => C.key === "Enter" && a(Gt)?.click()), W("change", z, Es), E(U, T);
        }, le = (U) => {
          var T = bl(), z = _(T);
          Po(z, "placeholder", `Paste JSON here, e.g.
[
  {"_type": "User", "_id": "1", "name": "Alice"},
  {"_type": "User", "_id": "2", "name": "Bob"}
]`);
          var H = w(z, 2);
          {
            var ue = (X) => {
              var C = gl();
              W("click", C, Lr), E(X, C);
            };
            V(H, (X) => {
              a(ke) && X(ue);
            });
          }
          W("input", z, Xn), Fo(z, () => a(ke), (X) => m(ke, X)), E(U, T);
        };
        V(I, (U) => {
          a(be) === "file" ? U(K) : U(le, -1);
        });
      }
      var ve = w(I, 2);
      {
        var De = (U) => {
          var T = wl(), z = _(T);
          {
            var H = (X) => {
              var C = xl(), q = Ye(C), re = _(q), de = _(re), Se = w(de);
              {
                var Pe = (Le) => {
                  var et = wi();
                  J(() => D(et, `, ${a(Y).totalCodexes ?? ""} codexes`)), E(Le, et);
                };
                V(Se, (Le) => {
                  a(Y).totalCodexes > 0 && Le(Pe);
                });
              }
              var Qe = w(q, 2), me = _(Qe);
              It(me, 21, () => Object.entries(a(Y).typeCounts), er, (Le, et) => {
                var Ct = /* @__PURE__ */ dn(() => vi(a(et), 2));
                let Xt = () => a(Ct)[0], Ne = () => a(Ct)[1];
                var tt = ml(), rt = _(tt);
                J((Qt) => D(rt, `${Qt ?? ""} ${Xt() ?? ""}: ${Ne() ?? ""}`), [() => Hn(Xt())]), E(Le, tt);
              });
              var Te = w(me, 2), Ae = _(Te), Ot = _(Ae), Zt = w(Ae, 2);
              J(() => {
                D(de, `Ready to import: ${a(Y).totalEntities ?? ""} entities `), Ae.disabled = a(Nt), D(Ot, a(Nt) ? "Importing…" : "Confirm Import"), Zt.disabled = a(Nt);
              }), W("click", Ae, Ts), W("click", Zt, Lr), E(X, C);
            }, ue = (X) => {
              var C = yl(), q = w(_(C), 2), re = _(q);
              J(() => D(re, a(Y).error)), E(X, C);
            };
            V(z, (X) => {
              a(Y).valid ? X(H) : X(ue, -1);
            });
          }
          J((X) => mt(T, 1, X), [
            () => bt(r("mt-4 border rounded-lg overflow-hidden", a(Y).valid ? "border-green-200" : "border-red-200"))
          ]), E(U, T);
        };
        V(ve, (U) => {
          a(Y) && U(De);
        });
      }
      var Ee = w(ve, 2);
      {
        var ie = (U) => {
          var T = Ol(), z = _(T), H = _(z);
          {
            var ue = (C) => {
              var q = Al(), re = w(Ye(q), 2);
              {
                var de = (Se) => {
                  var Pe = Tl(), Qe = _(Pe), me = _(Qe), Te = w(Qe, 2), Ae = _(Te), Ot = w(Te, 2);
                  {
                    var Zt = (Le) => {
                      var et = Sl(), Ct = Ye(et), Xt = _(Ct), Ne = w(Ct, 2);
                      {
                        var tt = (rt) => {
                          var Qt = El();
                          It(Qt, 21, () => a(oe).data.errors, er, (an, on) => {
                            var Fr = kl(), _r = _(Fr);
                            J(() => D(_r, a(on))), E(an, Fr);
                          }), E(rt, Qt);
                        };
                        V(Ne, (rt) => {
                          a(oe).data.errors?.length && rt(tt);
                        });
                      }
                      J(() => D(Xt, `Failed: ${a(oe).data.failed ?? ""}`)), E(Le, et);
                    };
                    V(Ot, (Le) => {
                      (a(oe).data.failed ?? 0) > 0 && Le(Zt);
                    });
                  }
                  J(() => {
                    D(me, `Total records: ${(a(oe).data.total_records || 0) ?? ""}`), D(Ae, `Successful: ${(a(oe).data.successful || 0) ?? ""}`);
                  }), E(Se, Pe);
                };
                V(re, (Se) => {
                  a(oe).data && Se(de);
                });
              }
              E(C, q);
            }, X = (C) => {
              var q = Nl(), re = w(Ye(q), 2), de = _(re);
              J(() => D(de, a(oe).error)), E(C, q);
            };
            V(H, (C) => {
              a(oe).success ? C(ue) : C(X, -1);
            });
          }
          J((C) => mt(T, 1, C), [
            () => bt(r("mt-4 border rounded-lg overflow-hidden", a(oe).success ? "border-green-200 bg-green-50" : "border-red-200 bg-red-50"))
          ]), E(U, T);
        };
        V(Ee, (U) => {
          a(oe) && U(ie);
        });
      }
      J(
        (U, T) => {
          mt(x, 1, U), mt(A, 1, T);
        },
        [
          () => bt(r("px-4 py-2 text-sm font-medium rounded-lg transition-colors", a(be) === "file" ? "bg-blue-100 text-blue-700 border border-blue-300" : "bg-gray-100 text-gray-600 hover:bg-gray-200")),
          () => bt(r("px-4 py-2 text-sm font-medium rounded-lg transition-colors", a(be) === "editor" ? "bg-blue-100 text-blue-700 border border-blue-300" : "bg-gray-100 text-gray-600 hover:bg-gray-200"))
        ]
      ), W("click", x, () => {
        m(be, "file"), Lr();
      }), W("click", A, () => {
        m(be, "editor"), Lr();
      }), E(c, p);
    };
    V(Vs, (c) => {
      a(u) === "browse" ? c(Ws) : a(u) === "export" ? c(Ys, 1) : a(u) === "import" && c(Gs, 2);
    });
  }
  J(() => ni.disabled = a(l)), W("click", ni, () => {
    Vn(), Wn();
  }), W("click", sn, () => t.ctx.navigate?.("/extensions/package_manager")), E(e, Qn), Ii();
}
mo(["click", "keydown", "change", "input"]);
function Dl(e, t) {
  const r = ko(Il, { target: e, props: { ctx: t } });
  return {
    unmount() {
      try {
        So(r);
      } catch {
      }
    }
  };
}
export {
  Dl as default
};
