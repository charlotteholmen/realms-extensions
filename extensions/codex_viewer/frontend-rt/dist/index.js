var li = Object.defineProperty;
var Jr = (e) => {
  throw TypeError(e);
};
var ai = (e, t, r) => t in e ? li(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var ge = (e, t, r) => ai(e, typeof t != "symbol" ? t + "" : t, r), wr = (e, t, r) => t.has(e) || Jr("Cannot " + r);
var l = (e, t, r) => (wr(e, t, "read from private field"), r ? r.call(e) : t.get(e)), m = (e, t, r) => t.has(e) ? Jr("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), x = (e, t, r, n) => (wr(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r), A = (e, t, r) => (wr(e, t, "access private method"), r);
var dn = Array.isArray, oi = Array.prototype.indexOf, xt = Array.prototype.includes, ur = Array.from, fi = Object.defineProperty, Ft = Object.getOwnPropertyDescriptor, ui = Object.prototype, ci = Array.prototype, di = Object.getPrototypeOf, Xr = Object.isExtensible;
const vi = () => {
};
function hi(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function vn() {
  var e, t, r = new Promise((n, i) => {
    e = n, t = i;
  });
  return { promise: r, resolve: e, reject: t };
}
const z = 2, Ot = 4, cr = 8, hn = 1 << 24, Me = 16, ye = 32, Ge = 64, Sr = 128, ue = 512, O = 1024, j = 2048, Ne = 4096, q = 8192, ce = 16384, vt = 32768, Zr = 1 << 25, kt = 65536, Cr = 1 << 17, _i = 1 << 18, Tt = 1 << 19, pi = 1 << 20, Be = 1 << 25, ut = 65536, ir = 1 << 21, It = 1 << 22, Ye = 1 << 23, br = Symbol("$state"), Oe = new class extends Error {
  constructor() {
    super(...arguments);
    ge(this, "name", "StaleReactionError");
    ge(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
function gi() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function mi(e, t, r) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function wi(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function bi() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function yi(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function xi() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function ki() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Ei() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Si() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Ci() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
const Ti = 1, Ai = 2, Mi = 16, Ni = 1, Ri = 2, I = Symbol(), Fi = "http://www.w3.org/1999/xhtml";
function Di() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function Pi() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function _n(e) {
  return e === this.v;
}
function Oi(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function pn(e) {
  return !Oi(e, this.v);
}
let ve = null;
function Et(e) {
  ve = e;
}
function gn(e, t = !1, r) {
  ve = {
    p: ve,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    r: (
      /** @type {Effect} */
      E
    ),
    l: null
  };
}
function mn(e) {
  var t = (
    /** @type {ComponentContext} */
    ve
  ), r = t.e;
  if (r !== null) {
    t.e = null;
    for (var n of r)
      Ln(n);
  }
  return t.i = !0, ve = t.p, /** @type {T} */
  {};
}
function wn() {
  return !0;
}
let Ze = [];
function bn() {
  var e = Ze;
  Ze = [], hi(e);
}
function pt(e) {
  if (Ze.length === 0 && !Dt) {
    var t = Ze;
    queueMicrotask(() => {
      t === Ze && bn();
    });
  }
  Ze.push(e);
}
function Ii() {
  for (; Ze.length > 0; )
    bn();
}
function yn(e) {
  var t = E;
  if (t === null)
    return k.f |= Ye, e;
  if ((t.f & vt) === 0 && (t.f & Ot) === 0)
    throw e;
  Ue(e, t);
}
function Ue(e, t) {
  for (; t !== null; ) {
    if ((t.f & Sr) !== 0) {
      if ((t.f & vt) === 0)
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
const Li = -7169;
function R(e, t) {
  e.f = e.f & Li | t;
}
function Lr(e) {
  (e.f & ue) !== 0 || e.deps === null ? R(e, O) : R(e, Ne);
}
function xn(e) {
  if (e !== null)
    for (const t of e)
      (t.f & z) === 0 || (t.f & ut) === 0 || (t.f ^= ut, xn(
        /** @type {Derived} */
        t.deps
      ));
}
function kn(e, t, r) {
  (e.f & j) !== 0 ? t.add(e) : (e.f & Ne) !== 0 && r.add(e), xn(e.deps), R(e, O);
}
const Xe = /* @__PURE__ */ new Set();
let b = null, we = null, Tr = null, Dt = !1, yr = !1, ht = null, Xt = null;
var Qr = 0;
let ji = 1;
var gt, mt, tt, Ie, Ce, jt, Q, zt, qe, Le, Te, wt, bt, rt, F, Zt, En, Qt, Ar, er, zi;
const ar = class ar {
  constructor() {
    m(this, F);
    ge(this, "id", ji++);
    /**
     * The current values of any signals that are updated in this batch.
     * Tuple format: [value, is_derived] (note: is_derived is false for deriveds, too, if they were overridden via assignment)
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Value, [any, boolean]>}
     */
    ge(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any signals (sources and deriveds) that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Value, any>}
     */
    ge(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<(batch: Batch) => void>}
     */
    m(this, gt, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    m(this, mt, /* @__PURE__ */ new Set());
    /**
     * Callbacks that should run only when a fork is committed.
     * @type {Set<(batch: Batch) => void>}
     */
    m(this, tt, /* @__PURE__ */ new Set());
    /**
     * Async effects that are currently in flight
     * @type {Map<Effect, number>}
     */
    m(this, Ie, /* @__PURE__ */ new Map());
    /**
     * Async effects that are currently in flight, _not_ inside a pending boundary
     * @type {Map<Effect, number>}
     */
    m(this, Ce, /* @__PURE__ */ new Map());
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    m(this, jt, null);
    /**
     * The root effects that need to be flushed
     * @type {Effect[]}
     */
    m(this, Q, []);
    /**
     * Effects created while this batch was active.
     * @type {Effect[]}
     */
    m(this, zt, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    m(this, qe, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    m(this, Le, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    m(this, Te, /* @__PURE__ */ new Map());
    /**
     * Inverse of #skipped_branches which we need to tell prior batches to unskip them when committing
     * @type {Set<Effect>}
     */
    m(this, wt, /* @__PURE__ */ new Set());
    ge(this, "is_fork", !1);
    m(this, bt, !1);
    /** @type {Set<Batch>} */
    m(this, rt, /* @__PURE__ */ new Set());
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(t) {
    l(this, Te).has(t) || l(this, Te).set(t, { d: [], m: [] }), l(this, wt).delete(t);
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   * @param {(e: Effect) => void} callback
   */
  unskip_effect(t, r = (n) => this.schedule(n)) {
    var n = l(this, Te).get(t);
    if (n) {
      l(this, Te).delete(t);
      for (var i of n.d)
        R(i, j), r(i);
      for (i of n.m)
        R(i, Ne), r(i);
    }
    l(this, wt).add(t);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Value} source
   * @param {any} value
   * @param {boolean} [is_derived]
   */
  capture(t, r, n = !1) {
    t.v !== I && !this.previous.has(t) && this.previous.set(t, t.v), (t.f & Ye) === 0 && (this.current.set(t, [r, n]), we?.set(t, r)), this.is_fork || (t.v = r);
  }
  activate() {
    b = this;
  }
  deactivate() {
    b = null, we = null;
  }
  flush() {
    try {
      yr = !0, b = this, A(this, F, Qt).call(this);
    } finally {
      Qr = 0, Tr = null, ht = null, Xt = null, yr = !1, b = null, we = null, lt.clear();
    }
  }
  discard() {
    for (const t of l(this, mt)) t(this);
    l(this, mt).clear(), l(this, tt).clear(), Xe.delete(this);
  }
  /**
   * @param {Effect} effect
   */
  register_created_effect(t) {
    l(this, zt).push(t);
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  increment(t, r) {
    let n = l(this, Ie).get(r) ?? 0;
    if (l(this, Ie).set(r, n + 1), t) {
      let i = l(this, Ce).get(r) ?? 0;
      l(this, Ce).set(r, i + 1);
    }
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   * @param {boolean} skip - whether to skip updates (because this is triggered by a stale reaction)
   */
  decrement(t, r, n) {
    let i = l(this, Ie).get(r) ?? 0;
    if (i === 1 ? l(this, Ie).delete(r) : l(this, Ie).set(r, i - 1), t) {
      let s = l(this, Ce).get(r) ?? 0;
      s === 1 ? l(this, Ce).delete(r) : l(this, Ce).set(r, s - 1);
    }
    l(this, bt) || n || (x(this, bt, !0), pt(() => {
      x(this, bt, !1), this.flush();
    }));
  }
  /**
   * @param {Set<Effect>} dirty_effects
   * @param {Set<Effect>} maybe_dirty_effects
   */
  transfer_effects(t, r) {
    for (const n of t)
      l(this, qe).add(n);
    for (const n of r)
      l(this, Le).add(n);
    t.clear(), r.clear();
  }
  /** @param {(batch: Batch) => void} fn */
  oncommit(t) {
    l(this, gt).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    l(this, mt).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  on_fork_commit(t) {
    l(this, tt).add(t);
  }
  run_fork_commit_callbacks() {
    for (const t of l(this, tt)) t(this);
    l(this, tt).clear();
  }
  settled() {
    return (l(this, jt) ?? x(this, jt, vn())).promise;
  }
  static ensure() {
    if (b === null) {
      const t = b = new ar();
      yr || (Xe.add(b), Dt || pt(() => {
        b === t && t.flush();
      }));
    }
    return b;
  }
  apply() {
    {
      we = null;
      return;
    }
  }
  /**
   *
   * @param {Effect} effect
   */
  schedule(t) {
    if (Tr = t, t.b?.is_pending && (t.f & (Ot | cr | hn)) !== 0 && (t.f & vt) === 0) {
      t.b.defer_effect(t);
      return;
    }
    for (var r = t; r.parent !== null; ) {
      r = r.parent;
      var n = r.f;
      if (ht !== null && r === E && (k === null || (k.f & z) === 0))
        return;
      if ((n & (Ge | ye)) !== 0) {
        if ((n & O) === 0)
          return;
        r.f ^= O;
      }
    }
    l(this, Q).push(r);
  }
};
gt = new WeakMap(), mt = new WeakMap(), tt = new WeakMap(), Ie = new WeakMap(), Ce = new WeakMap(), jt = new WeakMap(), Q = new WeakMap(), zt = new WeakMap(), qe = new WeakMap(), Le = new WeakMap(), Te = new WeakMap(), wt = new WeakMap(), bt = new WeakMap(), rt = new WeakMap(), F = new WeakSet(), Zt = function() {
  return this.is_fork || l(this, Ce).size > 0;
}, En = function() {
  for (const n of l(this, rt))
    for (const i of l(n, Ce).keys()) {
      for (var t = !1, r = i; r.parent !== null; ) {
        if (l(this, Te).has(r)) {
          t = !0;
          break;
        }
        r = r.parent;
      }
      if (!t)
        return !0;
    }
  return !1;
}, Qt = function() {
  var f;
  if (Qr++ > 1e3 && (Xe.delete(this), Vi()), !A(this, F, Zt).call(this)) {
    for (const a of l(this, qe))
      l(this, Le).delete(a), R(a, j), this.schedule(a);
    for (const a of l(this, Le))
      R(a, Ne), this.schedule(a);
  }
  const t = l(this, Q);
  x(this, Q, []), this.apply();
  var r = ht = [], n = [], i = Xt = [];
  for (const a of t)
    try {
      A(this, F, Ar).call(this, a, r, n);
    } catch (u) {
      throw Tn(a), u;
    }
  if (b = null, i.length > 0) {
    var s = ar.ensure();
    for (const a of i)
      s.schedule(a);
  }
  if (ht = null, Xt = null, A(this, F, Zt).call(this) || A(this, F, En).call(this)) {
    A(this, F, er).call(this, n), A(this, F, er).call(this, r);
    for (const [a, u] of l(this, Te))
      Cn(a, u);
  } else {
    l(this, Ie).size === 0 && Xe.delete(this), l(this, qe).clear(), l(this, Le).clear();
    for (const a of l(this, gt)) a(this);
    l(this, gt).clear(), en(n), en(r), l(this, jt)?.resolve();
  }
  var o = (
    /** @type {Batch | null} */
    /** @type {unknown} */
    b
  );
  if (l(this, Q).length > 0) {
    const a = o ?? (o = this);
    l(a, Q).push(...l(this, Q).filter((u) => !l(a, Q).includes(u)));
  }
  o !== null && (Xe.add(o), A(f = o, F, Qt).call(f));
}, /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
Ar = function(t, r, n) {
  t.f ^= O;
  for (var i = t.first; i !== null; ) {
    var s = i.f, o = (s & (ye | Ge)) !== 0, f = o && (s & O) !== 0, a = f || (s & q) !== 0 || l(this, Te).has(i);
    if (!a && i.fn !== null) {
      o ? i.f ^= O : (s & Ot) !== 0 ? r.push(i) : Yt(i) && ((s & Me) !== 0 && l(this, Le).add(i), Ct(i));
      var u = i.first;
      if (u !== null) {
        i = u;
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
er = function(t) {
  for (var r = 0; r < t.length; r += 1)
    kn(t[r], l(this, qe), l(this, Le));
}, zi = function() {
  var v, _, h;
  for (const d of Xe) {
    var t = d.id < this.id, r = [];
    for (const [c, [w, y]] of this.current) {
      if (d.current.has(c)) {
        var n = (
          /** @type {[any, boolean]} */
          d.current.get(c)[0]
        );
        if (t && w !== n)
          d.current.set(c, [w, y]);
        else
          continue;
      }
      r.push(c);
    }
    var i = [...d.current.keys()].filter((c) => !this.current.has(c));
    if (i.length === 0)
      t && d.discard();
    else if (r.length > 0) {
      if (t)
        for (const c of l(this, wt))
          d.unskip_effect(c, (w) => {
            var y;
            (w.f & (Me | It)) !== 0 ? d.schedule(w) : A(y = d, F, er).call(y, [w]);
          });
      d.activate();
      var s = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Map();
      for (var f of r)
        Sn(f, i, s, o);
      o = /* @__PURE__ */ new Map();
      var a = [...d.current.keys()].filter(
        (c) => this.current.has(c) ? (
          /** @type {[any, boolean]} */
          this.current.get(c)[0] !== c
        ) : !0
      );
      for (const c of l(this, zt))
        (c.f & (ce | q | Cr)) === 0 && jr(c, a, o) && ((c.f & (It | Me)) !== 0 ? (R(c, j), d.schedule(c)) : l(d, qe).add(c));
      if (l(d, Q).length > 0) {
        d.apply();
        for (var u of l(d, Q))
          A(v = d, F, Ar).call(v, u, [], []);
        x(d, Q, []);
      }
      d.deactivate();
    }
  }
  for (const d of Xe)
    l(d, rt).has(this) && (l(d, rt).delete(this), l(d, rt).size === 0 && !A(_ = d, F, Zt).call(_) && (d.activate(), A(h = d, F, Qt).call(h)));
};
let ct = ar;
function Bi(e) {
  var t = Dt;
  Dt = !0;
  try {
    for (var r; ; ) {
      if (Ii(), b === null)
        return (
          /** @type {T} */
          r
        );
      b.flush();
    }
  } finally {
    Dt = t;
  }
}
function Vi() {
  try {
    xi();
  } catch (e) {
    Ue(e, Tr);
  }
}
let Pe = null;
function en(e) {
  var t = e.length;
  if (t !== 0) {
    for (var r = 0; r < t; ) {
      var n = e[r++];
      if ((n.f & (ce | q)) === 0 && Yt(n) && (Pe = /* @__PURE__ */ new Set(), Ct(n), n.deps === null && n.first === null && n.nodes === null && n.teardown === null && n.ac === null && Bn(n), Pe?.size > 0)) {
        lt.clear();
        for (const i of Pe) {
          if ((i.f & (ce | q)) !== 0) continue;
          const s = [i];
          let o = i.parent;
          for (; o !== null; )
            Pe.has(o) && (Pe.delete(o), s.push(o)), o = o.parent;
          for (let f = s.length - 1; f >= 0; f--) {
            const a = s[f];
            (a.f & (ce | q)) === 0 && Ct(a);
          }
        }
        Pe.clear();
      }
    }
    Pe = null;
  }
}
function Sn(e, t, r, n) {
  if (!r.has(e) && (r.add(e), e.reactions !== null))
    for (const i of e.reactions) {
      const s = i.f;
      (s & z) !== 0 ? Sn(
        /** @type {Derived} */
        i,
        t,
        r,
        n
      ) : (s & (It | Me)) !== 0 && (s & j) === 0 && jr(i, t, n) && (R(i, j), zr(
        /** @type {Effect} */
        i
      ));
    }
}
function jr(e, t, r) {
  const n = r.get(e);
  if (n !== void 0) return n;
  if (e.deps !== null)
    for (const i of e.deps) {
      if (xt.call(t, i))
        return !0;
      if ((i.f & z) !== 0 && jr(
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
function zr(e) {
  b.schedule(e);
}
function Cn(e, t) {
  if (!((e.f & ye) !== 0 && (e.f & O) !== 0)) {
    (e.f & j) !== 0 ? t.d.push(e) : (e.f & Ne) !== 0 && t.m.push(e), R(e, O);
    for (var r = e.first; r !== null; )
      Cn(r, t), r = r.next;
  }
}
function Tn(e) {
  R(e, O);
  for (var t = e.first; t !== null; )
    Tn(t), t = t.next;
}
function qi(e) {
  let t = 0, r = dt(0), n;
  return () => {
    Hr() && (g(r), jn(() => (t === 0 && (n = Jn(() => e(() => Pt(r)))), t += 1, () => {
      pt(() => {
        t -= 1, t === 0 && (n?.(), n = void 0, Pt(r));
      });
    })));
  };
}
var Hi = kt | Tt;
function Ui(e, t, r, n) {
  new Yi(e, t, r, n);
}
var le, Ir, ae, nt, G, oe, V, ee, je, it, He, yt, Bt, Vt, ze, or, M, Gi, Ki, Wi, Mr, tr, rr, Nr, Rr;
class Yi {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(t, r, n, i) {
    m(this, M);
    /** @type {Boundary | null} */
    ge(this, "parent");
    ge(this, "is_pending", !1);
    /**
     * API-level transformError transform function. Transforms errors before they reach the `failed` snippet.
     * Inherited from parent boundary, or defaults to identity.
     * @type {(error: unknown) => unknown}
     */
    ge(this, "transform_error");
    /** @type {TemplateNode} */
    m(this, le);
    /** @type {TemplateNode | null} */
    m(this, Ir, null);
    /** @type {BoundaryProps} */
    m(this, ae);
    /** @type {((anchor: Node) => void)} */
    m(this, nt);
    /** @type {Effect} */
    m(this, G);
    /** @type {Effect | null} */
    m(this, oe, null);
    /** @type {Effect | null} */
    m(this, V, null);
    /** @type {Effect | null} */
    m(this, ee, null);
    /** @type {DocumentFragment | null} */
    m(this, je, null);
    m(this, it, 0);
    m(this, He, 0);
    m(this, yt, !1);
    /** @type {Set<Effect>} */
    m(this, Bt, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    m(this, Vt, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    m(this, ze, null);
    m(this, or, qi(() => (x(this, ze, dt(l(this, it))), () => {
      x(this, ze, null);
    })));
    x(this, le, t), x(this, ae, r), x(this, nt, (s) => {
      var o = (
        /** @type {Effect} */
        E
      );
      o.b = this, o.f |= Sr, n(s);
    }), this.parent = /** @type {Effect} */
    E.b, this.transform_error = i ?? this.parent?.transform_error ?? ((s) => s), x(this, G, Ur(() => {
      A(this, M, Mr).call(this);
    }, Hi));
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    kn(t, l(this, Bt), l(this, Vt));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!l(this, ae).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  update_pending_count(t, r) {
    A(this, M, Nr).call(this, t, r), x(this, it, l(this, it) + t), !(!l(this, ze) || l(this, yt)) && (x(this, yt, !0), pt(() => {
      x(this, yt, !1), l(this, ze) && St(l(this, ze), l(this, it));
    }));
  }
  get_effect_pending() {
    return l(this, or).call(this), g(
      /** @type {Source<number>} */
      l(this, ze)
    );
  }
  /** @param {unknown} error */
  error(t) {
    if (!l(this, ae).onerror && !l(this, ae).failed)
      throw t;
    b?.is_fork ? (l(this, oe) && b.skip_effect(l(this, oe)), l(this, V) && b.skip_effect(l(this, V)), l(this, ee) && b.skip_effect(l(this, ee)), b.on_fork_commit(() => {
      A(this, M, Rr).call(this, t);
    })) : A(this, M, Rr).call(this, t);
  }
}
le = new WeakMap(), Ir = new WeakMap(), ae = new WeakMap(), nt = new WeakMap(), G = new WeakMap(), oe = new WeakMap(), V = new WeakMap(), ee = new WeakMap(), je = new WeakMap(), it = new WeakMap(), He = new WeakMap(), yt = new WeakMap(), Bt = new WeakMap(), Vt = new WeakMap(), ze = new WeakMap(), or = new WeakMap(), M = new WeakSet(), Gi = function() {
  try {
    x(this, oe, fe(() => l(this, nt).call(this, l(this, le))));
  } catch (t) {
    this.error(t);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
Ki = function(t) {
  const r = l(this, ae).failed;
  r && x(this, ee, fe(() => {
    r(
      l(this, le),
      () => t,
      () => () => {
      }
    );
  }));
}, Wi = function() {
  const t = l(this, ae).pending;
  t && (this.is_pending = !0, x(this, V, fe(() => t(l(this, le)))), pt(() => {
    var r = x(this, je, document.createDocumentFragment()), n = at();
    r.append(n), x(this, oe, A(this, M, rr).call(this, () => fe(() => l(this, nt).call(this, n)))), l(this, He) === 0 && (l(this, le).before(r), x(this, je, null), ot(
      /** @type {Effect} */
      l(this, V),
      () => {
        x(this, V, null);
      }
    ), A(this, M, tr).call(
      this,
      /** @type {Batch} */
      b
    ));
  }));
}, Mr = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), x(this, He, 0), x(this, it, 0), x(this, oe, fe(() => {
      l(this, nt).call(this, l(this, le));
    })), l(this, He) > 0) {
      var t = x(this, je, document.createDocumentFragment());
      Kr(l(this, oe), t);
      const r = (
        /** @type {(anchor: Node) => void} */
        l(this, ae).pending
      );
      x(this, V, fe(() => r(l(this, le))));
    } else
      A(this, M, tr).call(
        this,
        /** @type {Batch} */
        b
      );
  } catch (r) {
    this.error(r);
  }
}, /**
 * @param {Batch} batch
 */
tr = function(t) {
  this.is_pending = !1, t.transfer_effects(l(this, Bt), l(this, Vt));
}, /**
 * @template T
 * @param {() => T} fn
 */
rr = function(t) {
  var r = E, n = k, i = ve;
  Re(l(this, G)), he(l(this, G)), Et(l(this, G).ctx);
  try {
    return ct.ensure(), t();
  } catch (s) {
    return yn(s), null;
  } finally {
    Re(r), he(n), Et(i);
  }
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 * @param {Batch} batch
 */
Nr = function(t, r) {
  var n;
  if (!this.has_pending_snippet()) {
    this.parent && A(n = this.parent, M, Nr).call(n, t, r);
    return;
  }
  x(this, He, l(this, He) + t), l(this, He) === 0 && (A(this, M, tr).call(this, r), l(this, V) && ot(l(this, V), () => {
    x(this, V, null);
  }), l(this, je) && (l(this, le).before(l(this, je)), x(this, je, null)));
}, /**
 * @param {unknown} error
 */
Rr = function(t) {
  l(this, oe) && ($(l(this, oe)), x(this, oe, null)), l(this, V) && ($(l(this, V)), x(this, V, null)), l(this, ee) && ($(l(this, ee)), x(this, ee, null));
  var r = l(this, ae).onerror;
  let n = l(this, ae).failed;
  var i = !1, s = !1;
  const o = () => {
    if (i) {
      Pi();
      return;
    }
    i = !0, s && Ci(), l(this, ee) !== null && ot(l(this, ee), () => {
      x(this, ee, null);
    }), A(this, M, rr).call(this, () => {
      A(this, M, Mr).call(this);
    });
  }, f = (a) => {
    try {
      s = !0, r?.(a, o), s = !1;
    } catch (u) {
      Ue(u, l(this, G) && l(this, G).parent);
    }
    n && x(this, ee, A(this, M, rr).call(this, () => {
      try {
        return fe(() => {
          var u = (
            /** @type {Effect} */
            E
          );
          u.b = this, u.f |= Sr, n(
            l(this, le),
            () => a,
            () => o
          );
        });
      } catch (u) {
        return Ue(
          u,
          /** @type {Effect} */
          l(this, G).parent
        ), null;
      }
    }));
  };
  pt(() => {
    var a;
    try {
      a = this.transform_error(t);
    } catch (u) {
      Ue(u, l(this, G) && l(this, G).parent);
      return;
    }
    a !== null && typeof a == "object" && typeof /** @type {any} */
    a.then == "function" ? a.then(
      f,
      /** @param {unknown} e */
      (u) => Ue(u, l(this, G) && l(this, G).parent)
    ) : f(a);
  });
};
function $i(e, t, r, n) {
  const i = Br;
  var s = e.filter((h) => !h.settled);
  if (r.length === 0 && s.length === 0) {
    n(t.map(i));
    return;
  }
  var o = (
    /** @type {Effect} */
    E
  ), f = Ji(), a = s.length === 1 ? s[0].promise : s.length > 1 ? Promise.all(s.map((h) => h.promise)) : null;
  function u(h) {
    f();
    try {
      n(h);
    } catch (d) {
      (o.f & ce) === 0 && Ue(d, o);
    }
    sr();
  }
  if (r.length === 0) {
    a.then(() => u(t.map(i)));
    return;
  }
  var v = An();
  function _() {
    Promise.all(r.map((h) => /* @__PURE__ */ Xi(h))).then((h) => u([...t.map(i), ...h])).catch((h) => Ue(h, o)).finally(() => v());
  }
  a ? a.then(() => {
    f(), _(), sr();
  }) : _();
}
function Ji() {
  var e = (
    /** @type {Effect} */
    E
  ), t = k, r = ve, n = (
    /** @type {Batch} */
    b
  );
  return function(s = !0) {
    Re(e), he(t), Et(r), s && (e.f & ce) === 0 && (n?.activate(), n?.apply());
  };
}
function sr(e = !0) {
  Re(null), he(null), Et(null), e && b?.deactivate();
}
function An() {
  var e = (
    /** @type {Effect} */
    E
  ), t = (
    /** @type {Boundary} */
    e.b
  ), r = (
    /** @type {Batch} */
    b
  ), n = t.is_rendered();
  return t.update_pending_count(1, r), r.increment(n, e), (i = !1) => {
    t.update_pending_count(-1, r), r.decrement(n, e, i);
  };
}
// @__NO_SIDE_EFFECTS__
function Br(e) {
  var t = z | j;
  return E !== null && (E.f |= Tt), {
    ctx: ve,
    deps: null,
    effects: null,
    equals: _n,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      I
    ),
    wv: 0,
    parent: E,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function Xi(e, t, r) {
  let n = (
    /** @type {Effect | null} */
    E
  );
  n === null && gi();
  var i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), s = dt(
    /** @type {V} */
    I
  ), o = !k, f = /* @__PURE__ */ new Map();
  return hs(() => {
    var a = (
      /** @type {Effect} */
      E
    ), u = vn();
    i = u.promise;
    try {
      Promise.resolve(e()).then(u.resolve, u.reject).finally(sr);
    } catch (d) {
      u.reject(d), sr();
    }
    var v = (
      /** @type {Batch} */
      b
    );
    if (o) {
      if ((a.f & vt) !== 0)
        var _ = An();
      if (
        /** @type {Boundary} */
        n.b.is_rendered()
      )
        f.get(v)?.reject(Oe), f.delete(v);
      else {
        for (const d of f.values())
          d.reject(Oe);
        f.clear();
      }
      f.set(v, u);
    }
    const h = (d, c = void 0) => {
      if (_) {
        var w = c === Oe;
        _(w);
      }
      if (!(c === Oe || (a.f & ce) !== 0)) {
        if (v.activate(), c)
          s.f |= Ye, St(s, c);
        else {
          (s.f & Ye) !== 0 && (s.f ^= Ye), St(s, d);
          for (const [y, T] of f) {
            if (f.delete(y), y === v) break;
            T.reject(Oe);
          }
        }
        v.deactivate();
      }
    };
    u.promise.then(h, (d) => h(null, d || "unknown"));
  }), cs(() => {
    for (const a of f.values())
      a.reject(Oe);
  }), new Promise((a) => {
    function u(v) {
      function _() {
        v === i ? a(s) : u(i);
      }
      v.then(_, _);
    }
    u(i);
  });
}
// @__NO_SIDE_EFFECTS__
function tn(e) {
  const t = /* @__PURE__ */ Br(e);
  return Hn(t), t;
}
// @__NO_SIDE_EFFECTS__
function Zi(e) {
  const t = /* @__PURE__ */ Br(e);
  return t.equals = pn, t;
}
function Qi(e) {
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
function Vr(e) {
  var t, r = E, n = e.parent;
  if (!Ke && n !== null && (n.f & (ce | q)) !== 0)
    return Di(), e.v;
  Re(n);
  try {
    e.f &= ~ut, Qi(e), t = Kn(e);
  } finally {
    Re(r);
  }
  return t;
}
function Mn(e) {
  var t = Vr(e);
  if (!e.equals(t) && (e.wv = Yn(), (!b?.is_fork || e.deps === null) && (b !== null ? b.capture(e, t, !0) : e.v = t, e.deps === null))) {
    R(e, O);
    return;
  }
  Ke || (we !== null ? (Hr() || b?.is_fork) && we.set(e, t) : Lr(e));
}
function es(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      (t.teardown || t.ac) && (t.teardown?.(), t.ac?.abort(Oe), t.teardown = vi, t.ac = null, Lt(t, 0), Yr(t));
}
function Nn(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      t.teardown && Ct(t);
}
let Fr = /* @__PURE__ */ new Set();
const lt = /* @__PURE__ */ new Map();
let Rn = !1;
function dt(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: _n,
    rv: 0,
    wv: 0
  };
  return r;
}
// @__NO_SIDE_EFFECTS__
function K(e, t) {
  const r = dt(e);
  return Hn(r), r;
}
// @__NO_SIDE_EFFECTS__
function ts(e, t = !1, r = !0) {
  const n = dt(e);
  return t || (n.equals = pn), n;
}
function P(e, t, r = !1) {
  k !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!be || (k.f & Cr) !== 0) && wn() && (k.f & (z | Me | It | Cr)) !== 0 && (de === null || !xt.call(de, e)) && Si();
  let n = r ? _t(t) : t;
  return St(e, n, Xt);
}
function St(e, t, r = null) {
  if (!e.equals(t)) {
    lt.set(e, Ke ? t : e.v);
    var n = ct.ensure();
    if (n.capture(e, t), (e.f & z) !== 0) {
      const i = (
        /** @type {Derived} */
        e
      );
      (e.f & j) !== 0 && Vr(i), we === null && Lr(i);
    }
    e.wv = Yn(), Fn(e, j, r), E !== null && (E.f & O) !== 0 && (E.f & (ye | Ge)) === 0 && (se === null ? gs([e]) : se.push(e)), !n.is_fork && Fr.size > 0 && !Rn && rs();
  }
  return t;
}
function rs() {
  Rn = !1;
  for (const e of Fr)
    (e.f & O) !== 0 && R(e, Ne), Yt(e) && Ct(e);
  Fr.clear();
}
function Pt(e) {
  P(e, e.v + 1);
}
function Fn(e, t, r) {
  var n = e.reactions;
  if (n !== null)
    for (var i = n.length, s = 0; s < i; s++) {
      var o = n[s], f = o.f, a = (f & j) === 0;
      if (a && R(o, t), (f & z) !== 0) {
        var u = (
          /** @type {Derived} */
          o
        );
        we?.delete(u), (f & ut) === 0 && (f & ue && (E === null || (E.f & ir) === 0) && (o.f |= ut), Fn(u, Ne, r));
      } else if (a) {
        var v = (
          /** @type {Effect} */
          o
        );
        (f & Me) !== 0 && Pe !== null && Pe.add(v), r !== null ? r.push(v) : zr(v);
      }
    }
}
function _t(e) {
  if (typeof e != "object" || e === null || br in e)
    return e;
  const t = di(e);
  if (t !== ui && t !== ci)
    return e;
  var r = /* @__PURE__ */ new Map(), n = dn(e), i = /* @__PURE__ */ K(0), s = ft, o = (f) => {
    if (ft === s)
      return f();
    var a = k, u = ft;
    he(null), ln(s);
    var v = f();
    return he(a), ln(u), v;
  };
  return n && r.set("length", /* @__PURE__ */ K(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(f, a, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && ki();
        var v = r.get(a);
        return v === void 0 ? o(() => {
          var _ = /* @__PURE__ */ K(u.value);
          return r.set(a, _), _;
        }) : P(v, u.value, !0), !0;
      },
      deleteProperty(f, a) {
        var u = r.get(a);
        if (u === void 0) {
          if (a in f) {
            const v = o(() => /* @__PURE__ */ K(I));
            r.set(a, v), Pt(i);
          }
        } else
          P(u, I), Pt(i);
        return !0;
      },
      get(f, a, u) {
        if (a === br)
          return e;
        var v = r.get(a), _ = a in f;
        if (v === void 0 && (!_ || Ft(f, a)?.writable) && (v = o(() => {
          var d = _t(_ ? f[a] : I), c = /* @__PURE__ */ K(d);
          return c;
        }), r.set(a, v)), v !== void 0) {
          var h = g(v);
          return h === I ? void 0 : h;
        }
        return Reflect.get(f, a, u);
      },
      getOwnPropertyDescriptor(f, a) {
        var u = Reflect.getOwnPropertyDescriptor(f, a);
        if (u && "value" in u) {
          var v = r.get(a);
          v && (u.value = g(v));
        } else if (u === void 0) {
          var _ = r.get(a), h = _?.v;
          if (_ !== void 0 && h !== I)
            return {
              enumerable: !0,
              configurable: !0,
              value: h,
              writable: !0
            };
        }
        return u;
      },
      has(f, a) {
        if (a === br)
          return !0;
        var u = r.get(a), v = u !== void 0 && u.v !== I || Reflect.has(f, a);
        if (u !== void 0 || E !== null && (!v || Ft(f, a)?.writable)) {
          u === void 0 && (u = o(() => {
            var h = v ? _t(f[a]) : I, d = /* @__PURE__ */ K(h);
            return d;
          }), r.set(a, u));
          var _ = g(u);
          if (_ === I)
            return !1;
        }
        return v;
      },
      set(f, a, u, v) {
        var _ = r.get(a), h = a in f;
        if (n && a === "length")
          for (var d = u; d < /** @type {Source<number>} */
          _.v; d += 1) {
            var c = r.get(d + "");
            c !== void 0 ? P(c, I) : d in f && (c = o(() => /* @__PURE__ */ K(I)), r.set(d + "", c));
          }
        if (_ === void 0)
          (!h || Ft(f, a)?.writable) && (_ = o(() => /* @__PURE__ */ K(void 0)), P(_, _t(u)), r.set(a, _));
        else {
          h = _.v !== I;
          var w = o(() => _t(u));
          P(_, w);
        }
        var y = Reflect.getOwnPropertyDescriptor(f, a);
        if (y?.set && y.set.call(v, u), !h) {
          if (n && typeof a == "string") {
            var T = (
              /** @type {Source<number>} */
              r.get("length")
            ), S = Number(a);
            Number.isInteger(S) && S >= T.v && P(T, S + 1);
          }
          Pt(i);
        }
        return !0;
      },
      ownKeys(f) {
        g(i);
        var a = Reflect.ownKeys(f).filter((_) => {
          var h = r.get(_);
          return h === void 0 || h.v !== I;
        });
        for (var [u, v] of r)
          v.v !== I && !(u in f) && a.push(u);
        return a;
      },
      setPrototypeOf() {
        Ei();
      }
    }
  );
}
var rn, Dn, Pn, On;
function ns() {
  if (rn === void 0) {
    rn = window, Dn = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, r = Text.prototype;
    Pn = Ft(t, "firstChild").get, On = Ft(t, "nextSibling").get, Xr(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), Xr(r) && (r.__t = void 0);
  }
}
function at(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function lr(e) {
  return (
    /** @type {TemplateNode | null} */
    Pn.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function Ut(e) {
  return (
    /** @type {TemplateNode | null} */
    On.call(e)
  );
}
function C(e, t) {
  return /* @__PURE__ */ lr(e);
}
function is(e, t = !1) {
  {
    var r = /* @__PURE__ */ lr(e);
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ Ut(r) : r;
  }
}
function D(e, t = 1, r = !1) {
  let n = e;
  for (; t--; )
    n = /** @type {TemplateNode} */
    /* @__PURE__ */ Ut(n);
  return n;
}
function ss(e) {
  e.textContent = "";
}
function In() {
  return !1;
}
function ls(e, t, r) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElementNS(Fi, e, void 0)
  );
}
let nn = !1;
function as() {
  nn || (nn = !0, document.addEventListener(
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
function qr(e) {
  var t = k, r = E;
  he(null), Re(null);
  try {
    return e();
  } finally {
    he(t), Re(r);
  }
}
function os(e, t, r, n = r) {
  e.addEventListener(t, () => qr(r));
  const i = e.__on_r;
  i ? e.__on_r = () => {
    i(), n(!0);
  } : e.__on_r = () => n(!0), as();
}
function fs(e) {
  E === null && (k === null && yi(), bi()), Ke && wi();
}
function us(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function We(e, t) {
  var r = E;
  r !== null && (r.f & q) !== 0 && (e |= q);
  var n = {
    ctx: ve,
    deps: null,
    nodes: null,
    f: e | j | ue,
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
  b?.register_created_effect(n);
  var i = n;
  if ((e & Ot) !== 0)
    ht !== null ? ht.push(n) : ct.ensure().schedule(n);
  else if (t !== null) {
    try {
      Ct(n);
    } catch (o) {
      throw $(n), o;
    }
    i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && // either `null`, or a singular child
    (i.f & Tt) === 0 && (i = i.first, (e & Me) !== 0 && (e & kt) !== 0 && i !== null && (i.f |= kt));
  }
  if (i !== null && (i.parent = r, r !== null && us(i, r), k !== null && (k.f & z) !== 0 && (e & Ge) === 0)) {
    var s = (
      /** @type {Derived} */
      k
    );
    (s.effects ?? (s.effects = [])).push(i);
  }
  return n;
}
function Hr() {
  return k !== null && !be;
}
function cs(e) {
  const t = We(cr, null);
  return R(t, O), t.teardown = e, t;
}
function ds(e) {
  fs();
  var t = (
    /** @type {Effect} */
    E.f
  ), r = !k && (t & ye) !== 0 && (t & vt) === 0;
  if (r) {
    var n = (
      /** @type {ComponentContext} */
      ve
    );
    (n.e ?? (n.e = [])).push(e);
  } else
    return Ln(e);
}
function Ln(e) {
  return We(Ot | pi, e);
}
function vs(e) {
  ct.ensure();
  const t = We(Ge | Tt, e);
  return (r = {}) => new Promise((n) => {
    r.outro ? ot(t, () => {
      $(t), n(void 0);
    }) : ($(t), n(void 0));
  });
}
function hs(e) {
  return We(It | Tt, e);
}
function jn(e, t = 0) {
  return We(cr | t, e);
}
function ie(e, t = [], r = [], n = []) {
  $i(n, t, r, (i) => {
    We(cr, () => e(...i.map(g)));
  });
}
function Ur(e, t = 0) {
  var r = We(Me | t, e);
  return r;
}
function fe(e) {
  return We(ye | Tt, e);
}
function zn(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = Ke, n = k;
    sn(!0), he(null);
    try {
      t.call(null);
    } finally {
      sn(r), he(n);
    }
  }
}
function Yr(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    const i = r.ac;
    i !== null && qr(() => {
      i.abort(Oe);
    });
    var n = r.next;
    (r.f & Ge) !== 0 ? r.parent = null : $(r, t), r = n;
  }
}
function _s(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & ye) === 0 && $(t), t = r;
  }
}
function $(e, t = !0) {
  var r = !1;
  (t || (e.f & _i) !== 0) && e.nodes !== null && e.nodes.end !== null && (ps(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), r = !0), R(e, Zr), Yr(e, t && !r), Lt(e, 0);
  var n = e.nodes && e.nodes.t;
  if (n !== null)
    for (const s of n)
      s.stop();
  zn(e), e.f ^= Zr, e.f |= ce;
  var i = e.parent;
  i !== null && i.first !== null && Bn(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function ps(e, t) {
  for (; e !== null; ) {
    var r = e === t ? null : /* @__PURE__ */ Ut(e);
    e.remove(), e = r;
  }
}
function Bn(e) {
  var t = e.parent, r = e.prev, n = e.next;
  r !== null && (r.next = n), n !== null && (n.prev = r), t !== null && (t.first === e && (t.first = n), t.last === e && (t.last = r));
}
function ot(e, t, r = !0) {
  var n = [];
  Vn(e, n, !0);
  var i = () => {
    r && $(e), t && t();
  }, s = n.length;
  if (s > 0) {
    var o = () => --s || i();
    for (var f of n)
      f.out(o);
  } else
    i();
}
function Vn(e, t, r) {
  if ((e.f & q) === 0) {
    e.f ^= q;
    var n = e.nodes && e.nodes.t;
    if (n !== null)
      for (const f of n)
        (f.is_global || r) && t.push(f);
    for (var i = e.first; i !== null; ) {
      var s = i.next;
      if ((i.f & Ge) === 0) {
        var o = (i.f & kt) !== 0 || // If this is a branch effect without a block effect parent,
        // it means the parent block effect was pruned. In that case,
        // transparency information was transferred to the branch effect.
        (i.f & ye) !== 0 && (e.f & Me) !== 0;
        Vn(i, t, o ? r : !1);
      }
      i = s;
    }
  }
}
function Gr(e) {
  qn(e, !0);
}
function qn(e, t) {
  if ((e.f & q) !== 0) {
    e.f ^= q, (e.f & O) === 0 && (R(e, j), ct.ensure().schedule(e));
    for (var r = e.first; r !== null; ) {
      var n = r.next, i = (r.f & kt) !== 0 || (r.f & ye) !== 0;
      qn(r, i ? t : !1), r = n;
    }
    var s = e.nodes && e.nodes.t;
    if (s !== null)
      for (const o of s)
        (o.is_global || t) && o.in();
  }
}
function Kr(e, t) {
  if (e.nodes)
    for (var r = e.nodes.start, n = e.nodes.end; r !== null; ) {
      var i = r === n ? null : /* @__PURE__ */ Ut(r);
      t.append(r), r = i;
    }
}
let nr = !1, Ke = !1;
function sn(e) {
  Ke = e;
}
let k = null, be = !1;
function he(e) {
  k = e;
}
let E = null;
function Re(e) {
  E = e;
}
let de = null;
function Hn(e) {
  k !== null && (de === null ? de = [e] : de.push(e));
}
let W = null, Z = 0, se = null;
function gs(e) {
  se = e;
}
let Un = 1, Qe = 0, ft = Qe;
function ln(e) {
  ft = e;
}
function Yn() {
  return ++Un;
}
function Yt(e) {
  var t = e.f;
  if ((t & j) !== 0)
    return !0;
  if (t & z && (e.f &= ~ut), (t & Ne) !== 0) {
    for (var r = (
      /** @type {Value[]} */
      e.deps
    ), n = r.length, i = 0; i < n; i++) {
      var s = r[i];
      if (Yt(
        /** @type {Derived} */
        s
      ) && Mn(
        /** @type {Derived} */
        s
      ), s.wv > e.wv)
        return !0;
    }
    (t & ue) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    we === null && R(e, O);
  }
  return !1;
}
function Gn(e, t, r = !0) {
  var n = e.reactions;
  if (n !== null && !(de !== null && xt.call(de, e)))
    for (var i = 0; i < n.length; i++) {
      var s = n[i];
      (s.f & z) !== 0 ? Gn(
        /** @type {Derived} */
        s,
        t,
        !1
      ) : t === s && (r ? R(s, j) : (s.f & O) !== 0 && R(s, Ne), zr(
        /** @type {Effect} */
        s
      ));
    }
}
function Kn(e) {
  var w;
  var t = W, r = Z, n = se, i = k, s = de, o = ve, f = be, a = ft, u = e.f;
  W = /** @type {null | Value[]} */
  null, Z = 0, se = null, k = (u & (ye | Ge)) === 0 ? e : null, de = null, Et(e.ctx), be = !1, ft = ++Qe, e.ac !== null && (qr(() => {
    e.ac.abort(Oe);
  }), e.ac = null);
  try {
    e.f |= ir;
    var v = (
      /** @type {Function} */
      e.fn
    ), _ = v();
    e.f |= vt;
    var h = e.deps, d = b?.is_fork;
    if (W !== null) {
      var c;
      if (d || Lt(e, Z), h !== null && Z > 0)
        for (h.length = Z + W.length, c = 0; c < W.length; c++)
          h[Z + c] = W[c];
      else
        e.deps = h = W;
      if (Hr() && (e.f & ue) !== 0)
        for (c = Z; c < h.length; c++)
          ((w = h[c]).reactions ?? (w.reactions = [])).push(e);
    } else !d && h !== null && Z < h.length && (Lt(e, Z), h.length = Z);
    if (wn() && se !== null && !be && h !== null && (e.f & (z | Ne | j)) === 0)
      for (c = 0; c < /** @type {Source[]} */
      se.length; c++)
        Gn(
          se[c],
          /** @type {Effect} */
          e
        );
    if (i !== null && i !== e) {
      if (Qe++, i.deps !== null)
        for (let y = 0; y < r; y += 1)
          i.deps[y].rv = Qe;
      if (t !== null)
        for (const y of t)
          y.rv = Qe;
      se !== null && (n === null ? n = se : n.push(.../** @type {Source[]} */
      se));
    }
    return (e.f & Ye) !== 0 && (e.f ^= Ye), _;
  } catch (y) {
    return yn(y);
  } finally {
    e.f ^= ir, W = t, Z = r, se = n, k = i, de = s, Et(o), be = f, ft = a;
  }
}
function ms(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var n = oi.call(r, e);
    if (n !== -1) {
      var i = r.length - 1;
      i === 0 ? r = t.reactions = null : (r[n] = r[i], r.pop());
    }
  }
  if (r === null && (t.f & z) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (W === null || !xt.call(W, t))) {
    var s = (
      /** @type {Derived} */
      t
    );
    (s.f & ue) !== 0 && (s.f ^= ue, s.f &= ~ut), s.v !== I && Lr(s), es(s), Lt(s, 0);
  }
}
function Lt(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var n = t; n < r.length; n++)
      ms(e, r[n]);
}
function Ct(e) {
  var t = e.f;
  if ((t & ce) === 0) {
    R(e, O);
    var r = E, n = nr;
    E = e, nr = !0;
    try {
      (t & (Me | hn)) !== 0 ? _s(e) : Yr(e), zn(e);
      var i = Kn(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = Un;
      var s;
    } finally {
      nr = n, E = r;
    }
  }
}
async function ws() {
  await Promise.resolve(), Bi();
}
function g(e) {
  var t = e.f, r = (t & z) !== 0;
  if (k !== null && !be) {
    var n = E !== null && (E.f & ce) !== 0;
    if (!n && (de === null || !xt.call(de, e))) {
      var i = k.deps;
      if ((k.f & ir) !== 0)
        e.rv < Qe && (e.rv = Qe, W === null && i !== null && i[Z] === e ? Z++ : W === null ? W = [e] : W.push(e));
      else {
        (k.deps ?? (k.deps = [])).push(e);
        var s = e.reactions;
        s === null ? e.reactions = [k] : xt.call(s, k) || s.push(k);
      }
    }
  }
  if (Ke && lt.has(e))
    return lt.get(e);
  if (r) {
    var o = (
      /** @type {Derived} */
      e
    );
    if (Ke) {
      var f = o.v;
      return ((o.f & O) === 0 && o.reactions !== null || $n(o)) && (f = Vr(o)), lt.set(o, f), f;
    }
    var a = (o.f & ue) === 0 && !be && k !== null && (nr || (k.f & ue) !== 0), u = (o.f & vt) === 0;
    Yt(o) && (a && (o.f |= ue), Mn(o)), a && !u && (Nn(o), Wn(o));
  }
  if (we?.has(e))
    return we.get(e);
  if ((e.f & Ye) !== 0)
    throw e.v;
  return e.v;
}
function Wn(e) {
  if (e.f |= ue, e.deps !== null)
    for (const t of e.deps)
      (t.reactions ?? (t.reactions = [])).push(e), (t.f & z) !== 0 && (t.f & ue) === 0 && (Nn(
        /** @type {Derived} */
        t
      ), Wn(
        /** @type {Derived} */
        t
      ));
}
function $n(e) {
  if (e.v === I) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (lt.has(t) || (t.f & z) !== 0 && $n(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function Jn(e) {
  var t = be;
  try {
    return be = !0, e();
  } finally {
    be = t;
  }
}
const bs = ["touchstart", "touchmove"];
function ys(e) {
  return bs.includes(e);
}
const et = Symbol("events"), Xn = /* @__PURE__ */ new Set(), Dr = /* @__PURE__ */ new Set();
function xr(e, t, r) {
  (t[et] ?? (t[et] = {}))[e] = r;
}
function xs(e) {
  for (var t = 0; t < e.length; t++)
    Xn.add(e[t]);
  for (var r of Dr)
    r(e);
}
let an = null;
function on(e) {
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), n = e.type, i = e.composedPath?.() || [], s = (
    /** @type {null | Element} */
    i[0] || e.target
  );
  an = e;
  var o = 0, f = an === e && e[et];
  if (f) {
    var a = i.indexOf(f);
    if (a !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e[et] = t;
      return;
    }
    var u = i.indexOf(t);
    if (u === -1)
      return;
    a <= u && (o = a);
  }
  if (s = /** @type {Element} */
  i[o] || e.target, s !== t) {
    fi(e, "currentTarget", {
      configurable: !0,
      get() {
        return s || r;
      }
    });
    var v = k, _ = E;
    he(null), Re(null);
    try {
      for (var h, d = []; s !== null; ) {
        var c = s.assignedSlot || s.parentNode || /** @type {any} */
        s.host || null;
        try {
          var w = s[et]?.[n];
          w != null && (!/** @type {any} */
          s.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === s) && w.call(s, e);
        } catch (y) {
          h ? d.push(y) : h = y;
        }
        if (e.cancelBubble || c === t || c === null)
          break;
        s = c;
      }
      if (h) {
        for (let y of d)
          queueMicrotask(() => {
            throw y;
          });
        throw h;
      }
    } finally {
      e[et] = t, delete e.currentTarget, he(v), Re(_);
    }
  }
}
const ks = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (e) => e
  })
);
function Es(e) {
  return (
    /** @type {string} */
    ks?.createHTML(e) ?? e
  );
}
function Ss(e) {
  var t = ls("template");
  return t.innerHTML = Es(e.replaceAll("<!>", "<!---->")), t.content;
}
function fn(e, t) {
  var r = (
    /** @type {Effect} */
    E
  );
  r.nodes === null && (r.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function H(e, t) {
  var r = (t & Ni) !== 0, n = (t & Ri) !== 0, i, s = !e.startsWith("<!>");
  return () => {
    i === void 0 && (i = Ss(s ? e : "<!>" + e), r || (i = /** @type {TemplateNode} */
    /* @__PURE__ */ lr(i)));
    var o = (
      /** @type {TemplateNode} */
      n || Dn ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (r) {
      var f = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ lr(o)
      ), a = (
        /** @type {TemplateNode} */
        o.lastChild
      );
      fn(f, a);
    } else
      fn(o, o);
    return o;
  };
}
function B(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function X(e, t) {
  var r = t == null ? "" : typeof t == "object" ? `${t}` : t;
  r !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = r, e.nodeValue = `${r}`);
}
function Cs(e, t) {
  return Ts(e, t);
}
const Jt = /* @__PURE__ */ new Map();
function Ts(e, { target: t, anchor: r, props: n = {}, events: i, context: s, intro: o = !0, transformError: f }) {
  ns();
  var a = void 0, u = vs(() => {
    var v = r ?? t.appendChild(at());
    Ui(
      /** @type {TemplateNode} */
      v,
      {
        pending: () => {
        }
      },
      (d) => {
        gn({});
        var c = (
          /** @type {ComponentContext} */
          ve
        );
        s && (c.c = s), i && (n.$$events = i), a = e(d, n) || {}, mn();
      },
      f
    );
    var _ = /* @__PURE__ */ new Set(), h = (d) => {
      for (var c = 0; c < d.length; c++) {
        var w = d[c];
        if (!_.has(w)) {
          _.add(w);
          var y = ys(w);
          for (const U of [t, document]) {
            var T = Jt.get(U);
            T === void 0 && (T = /* @__PURE__ */ new Map(), Jt.set(U, T));
            var S = T.get(w);
            S === void 0 ? (U.addEventListener(w, on, { passive: y }), T.set(w, 1)) : T.set(w, S + 1);
          }
        }
      }
    };
    return h(ur(Xn)), Dr.add(h), () => {
      for (var d of _)
        for (const y of [t, document]) {
          var c = (
            /** @type {Map<string, number>} */
            Jt.get(y)
          ), w = (
            /** @type {number} */
            c.get(d)
          );
          --w == 0 ? (y.removeEventListener(d, on), c.delete(d), c.size === 0 && Jt.delete(y)) : c.set(d, w);
        }
      Dr.delete(h), v !== r && v.parentNode?.removeChild(v);
    };
  });
  return Pr.set(a, u), a;
}
let Pr = /* @__PURE__ */ new WeakMap();
function As(e, t) {
  const r = Pr.get(e);
  return r ? (Pr.delete(e), r(t)) : Promise.resolve();
}
var me, Ae, te, st, qt, Ht, fr;
class Ms {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, r = !0) {
    /** @type {TemplateNode} */
    ge(this, "anchor");
    /** @type {Map<Batch, Key>} */
    m(this, me, /* @__PURE__ */ new Map());
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
    m(this, Ae, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    m(this, te, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    m(this, st, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    m(this, qt, !0);
    /**
     * @param {Batch} batch
     */
    m(this, Ht, (t) => {
      if (l(this, me).has(t)) {
        var r = (
          /** @type {Key} */
          l(this, me).get(t)
        ), n = l(this, Ae).get(r);
        if (n)
          Gr(n), l(this, st).delete(r);
        else {
          var i = l(this, te).get(r);
          i && (l(this, Ae).set(r, i.effect), l(this, te).delete(r), i.fragment.lastChild.remove(), this.anchor.before(i.fragment), n = i.effect);
        }
        for (const [s, o] of l(this, me)) {
          if (l(this, me).delete(s), s === t)
            break;
          const f = l(this, te).get(o);
          f && ($(f.effect), l(this, te).delete(o));
        }
        for (const [s, o] of l(this, Ae)) {
          if (s === r || l(this, st).has(s)) continue;
          const f = () => {
            if (Array.from(l(this, me).values()).includes(s)) {
              var u = document.createDocumentFragment();
              Kr(o, u), u.append(at()), l(this, te).set(s, { effect: o, fragment: u });
            } else
              $(o);
            l(this, st).delete(s), l(this, Ae).delete(s);
          };
          l(this, qt) || !n ? (l(this, st).add(s), ot(o, f, !1)) : f();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    m(this, fr, (t) => {
      l(this, me).delete(t);
      const r = Array.from(l(this, me).values());
      for (const [n, i] of l(this, te))
        r.includes(n) || ($(i.effect), l(this, te).delete(n));
    });
    this.anchor = t, x(this, qt, r);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, r) {
    var n = (
      /** @type {Batch} */
      b
    ), i = In();
    if (r && !l(this, Ae).has(t) && !l(this, te).has(t))
      if (i) {
        var s = document.createDocumentFragment(), o = at();
        s.append(o), l(this, te).set(t, {
          effect: fe(() => r(o)),
          fragment: s
        });
      } else
        l(this, Ae).set(
          t,
          fe(() => r(this.anchor))
        );
    if (l(this, me).set(n, t), i) {
      for (const [f, a] of l(this, Ae))
        f === t ? n.unskip_effect(a) : n.skip_effect(a);
      for (const [f, a] of l(this, te))
        f === t ? n.unskip_effect(a.effect) : n.skip_effect(a.effect);
      n.oncommit(l(this, Ht)), n.ondiscard(l(this, fr));
    } else
      l(this, Ht).call(this, n);
  }
}
me = new WeakMap(), Ae = new WeakMap(), te = new WeakMap(), st = new WeakMap(), qt = new WeakMap(), Ht = new WeakMap(), fr = new WeakMap();
function Se(e, t, r = !1) {
  var n = new Ms(e), i = r ? kt : 0;
  function s(o, f) {
    n.ensure(o, f);
  }
  Ur(() => {
    var o = !1;
    t((f, a = 0) => {
      o = !0, s(a, f);
    }), o || s(-1, null);
  }, i);
}
function Ns(e, t, r) {
  for (var n = [], i = t.length, s, o = t.length, f = 0; f < i; f++) {
    let _ = t[f];
    ot(
      _,
      () => {
        if (s) {
          if (s.pending.delete(_), s.done.add(_), s.pending.size === 0) {
            var h = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            Or(e, ur(s.done)), h.delete(s), h.size === 0 && (e.outrogroups = null);
          }
        } else
          o -= 1;
      },
      !1
    );
  }
  if (o === 0) {
    var a = n.length === 0 && r !== null;
    if (a) {
      var u = (
        /** @type {Element} */
        r
      ), v = (
        /** @type {Element} */
        u.parentNode
      );
      ss(v), v.append(u), e.items.clear();
    }
    Or(e, t, !a);
  } else
    s = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ?? (e.outrogroups = /* @__PURE__ */ new Set())).add(s);
}
function Or(e, t, r = !0) {
  var n;
  if (e.pending.size > 0) {
    n = /* @__PURE__ */ new Set();
    for (const o of e.pending.values())
      for (const f of o)
        n.add(
          /** @type {EachItem} */
          e.items.get(f).e
        );
  }
  for (var i = 0; i < t.length; i++) {
    var s = t[i];
    if (n?.has(s)) {
      s.f |= Be;
      const o = document.createDocumentFragment();
      Kr(s, o);
    } else
      $(t[i], r);
  }
}
var un;
function Rs(e, t, r, n, i, s = null) {
  var o = e, f = /* @__PURE__ */ new Map();
  {
    var a = (
      /** @type {Element} */
      e
    );
    o = a.appendChild(at());
  }
  var u = null, v = /* @__PURE__ */ Zi(() => {
    var S = r();
    return dn(S) ? S : S == null ? [] : ur(S);
  }), _, h = /* @__PURE__ */ new Map(), d = !0;
  function c(S) {
    (T.effect.f & ce) === 0 && (T.pending.delete(S), T.fallback = u, Fs(T, _, o, t, n), u !== null && (_.length === 0 ? (u.f & Be) === 0 ? Gr(u) : (u.f ^= Be, Rt(u, null, o)) : ot(u, () => {
      u = null;
    })));
  }
  function w(S) {
    T.pending.delete(S);
  }
  var y = Ur(() => {
    _ = /** @type {V[]} */
    g(v);
    for (var S = _.length, U = /* @__PURE__ */ new Set(), re = (
      /** @type {Batch} */
      b
    ), Fe = In(), xe = 0; xe < S; xe += 1) {
      var $e = _[xe], J = n($e, xe), p = d ? null : f.get(J);
      p ? (p.v && St(p.v, $e), p.i && St(p.i, xe), Fe && re.unskip_effect(p.e)) : (p = Ds(
        f,
        d ? o : un ?? (un = at()),
        $e,
        J,
        xe,
        i,
        t,
        r
      ), d || (p.e.f |= Be), f.set(J, p)), U.add(J);
    }
    if (S === 0 && s && !u && (d ? u = fe(() => s(o)) : (u = fe(() => s(un ?? (un = at()))), u.f |= Be)), S > U.size && mi(), !d)
      if (h.set(re, U), Fe) {
        for (const [N, ne] of f)
          U.has(N) || re.skip_effect(ne.e);
        re.oncommit(c), re.ondiscard(w);
      } else
        c(re);
    g(v);
  }), T = { effect: y, items: f, pending: h, outrogroups: null, fallback: u };
  d = !1;
}
function Nt(e) {
  for (; e !== null && (e.f & ye) === 0; )
    e = e.next;
  return e;
}
function Fs(e, t, r, n, i) {
  var s = t.length, o = e.items, f = Nt(e.effect.first), a, u = null, v = [], _ = [], h, d, c, w;
  for (w = 0; w < s; w += 1) {
    if (h = t[w], d = i(h, w), c = /** @type {EachItem} */
    o.get(d).e, e.outrogroups !== null)
      for (const J of e.outrogroups)
        J.pending.delete(c), J.done.delete(c);
    if ((c.f & q) !== 0 && Gr(c), (c.f & Be) !== 0)
      if (c.f ^= Be, c === f)
        Rt(c, null, r);
      else {
        var y = u ? u.next : f;
        c === e.effect.last && (e.effect.last = c.prev), c.prev && (c.prev.next = c.next), c.next && (c.next.prev = c.prev), Ve(e, u, c), Ve(e, c, y), Rt(c, y, r), u = c, v = [], _ = [], f = Nt(u.next);
        continue;
      }
    if (c !== f) {
      if (a !== void 0 && a.has(c)) {
        if (v.length < _.length) {
          var T = _[0], S;
          u = T.prev;
          var U = v[0], re = v[v.length - 1];
          for (S = 0; S < v.length; S += 1)
            Rt(v[S], T, r);
          for (S = 0; S < _.length; S += 1)
            a.delete(_[S]);
          Ve(e, U.prev, re.next), Ve(e, u, U), Ve(e, re, T), f = T, u = re, w -= 1, v = [], _ = [];
        } else
          a.delete(c), Rt(c, f, r), Ve(e, c.prev, c.next), Ve(e, c, u === null ? e.effect.first : u.next), Ve(e, u, c), u = c;
        continue;
      }
      for (v = [], _ = []; f !== null && f !== c; )
        (a ?? (a = /* @__PURE__ */ new Set())).add(f), _.push(f), f = Nt(f.next);
      if (f === null)
        continue;
    }
    (c.f & Be) === 0 && v.push(c), u = c, f = Nt(c.next);
  }
  if (e.outrogroups !== null) {
    for (const J of e.outrogroups)
      J.pending.size === 0 && (Or(e, ur(J.done)), e.outrogroups?.delete(J));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (f !== null || a !== void 0) {
    var Fe = [];
    if (a !== void 0)
      for (c of a)
        (c.f & q) === 0 && Fe.push(c);
    for (; f !== null; )
      (f.f & q) === 0 && f !== e.fallback && Fe.push(f), f = Nt(f.next);
    var xe = Fe.length;
    if (xe > 0) {
      var $e = s === 0 ? r : null;
      Ns(e, Fe, $e);
    }
  }
}
function Ds(e, t, r, n, i, s, o, f) {
  var a = (o & Ti) !== 0 ? (o & Mi) === 0 ? /* @__PURE__ */ ts(r, !1, !1) : dt(r) : null, u = (o & Ai) !== 0 ? dt(i) : null;
  return {
    v: a,
    i: u,
    e: fe(() => (s(t, a ?? r, u ?? i, f), () => {
      e.delete(n);
    }))
  };
}
function Rt(e, t, r) {
  if (e.nodes)
    for (var n = e.nodes.start, i = e.nodes.end, s = t && (t.f & Be) === 0 ? (
      /** @type {EffectNodes} */
      t.nodes.start
    ) : r; n !== null; ) {
      var o = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ut(n)
      );
      if (s.before(n), n === i)
        return;
      n = o;
    }
}
function Ve(e, t, r) {
  t === null ? e.effect.first = r : t.next = r, r === null ? e.effect.last = t : r.prev = t;
}
function Ps(e, t, r = t) {
  var n = /* @__PURE__ */ new WeakSet();
  os(e, "input", async (i) => {
    var s = i ? e.defaultValue : e.value;
    if (s = kr(e) ? Er(s) : s, r(s), b !== null && n.add(b), await ws(), s !== (s = t())) {
      var o = e.selectionStart, f = e.selectionEnd, a = e.value.length;
      if (e.value = s ?? "", f !== null) {
        var u = e.value.length;
        o === f && f === a && u > a ? (e.selectionStart = u, e.selectionEnd = u) : (e.selectionStart = o, e.selectionEnd = Math.min(f, u));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  Jn(t) == null && e.value && (r(kr(e) ? Er(e.value) : e.value), b !== null && n.add(b)), jn(() => {
    var i = t();
    if (e === document.activeElement) {
      var s = (
        /** @type {Batch} */
        b
      );
      if (n.has(s))
        return;
    }
    kr(e) && i === Er(e.value) || e.type === "date" && !i && !e.value || i !== e.value && (e.value = i ?? "");
  });
}
function kr(e) {
  var t = e.type;
  return t === "number" || t === "range";
}
function Er(e) {
  return e === "" ? null : +e;
}
const Os = "5";
var cn;
typeof window < "u" && ((cn = window.__svelte ?? (window.__svelte = {})).v ?? (cn.v = /* @__PURE__ */ new Set())).add(Os);
var Is = /* @__PURE__ */ H('<div class="mb-4 p-4 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 rounded-lg text-sm"> </div>'), Ls = /* @__PURE__ */ H('<span class="px-2 py-0.5 text-xs font-medium bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300 rounded-full"> </span>'), js = /* @__PURE__ */ H('<p class="text-sm text-gray-600 dark:text-gray-400 mb-4"> </p>'), zs = /* @__PURE__ */ H('<p class="text-xs text-gray-500 dark:text-gray-500 mb-4"> </p>'), Bs = /* @__PURE__ */ H('<div><button class="text-indigo-600 dark:text-indigo-400 text-sm hover:underline mb-4 inline-block">← Back to list</button> <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6"><div class="flex items-center gap-3 mb-4"><svg class="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg> <h2 class="text-xl font-semibold text-gray-900 dark:text-white"> </h2> <!> <span class="px-2 py-0.5 text-xs font-medium bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-full">Python</span></div> <!> <!> <div class="bg-gray-900 rounded-lg p-4 overflow-auto max-h-[500px]"><pre class="text-sm text-gray-300 font-mono whitespace-pre-wrap break-words"> </pre></div></div></div>'), Vs = /* @__PURE__ */ H('<div class="flex items-center justify-center py-16"><svg class="animate-spin h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> <span class="ml-3 text-gray-500 dark:text-gray-400">Loading codexes…</span></div>'), qs = /* @__PURE__ */ H('<span class="text-gray-400 dark:text-gray-500"> </span>'), Hs = /* @__PURE__ */ H('<div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl py-12 text-center"><svg class="w-12 h-12 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg> <p class="text-gray-500 dark:text-gray-400"> </p></div>'), Us = /* @__PURE__ */ H('<p class="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2 overflow-hidden"> </p>'), Ys = /* @__PURE__ */ H('<div class="bg-gray-900 rounded-lg p-2 mb-3 overflow-hidden"><pre class="text-xs text-gray-300 font-mono truncate"> </pre></div>'), Gs = /* @__PURE__ */ H('<button class="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-4 text-left hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-200 cursor-pointer w-full"><div class="flex items-start justify-between mb-3"><div class="flex items-center gap-2 min-w-0"><svg class="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg> <h3 class="font-semibold text-gray-900 dark:text-white truncate"> </h3></div> <span class="ml-2 flex-shrink-0 px-2 py-0.5 text-xs font-medium bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-full">Python</span></div> <!> <!> <div class="flex items-center justify-between text-xs text-gray-500 dark:text-gray-500"><span> </span> <span class="text-blue-600 dark:text-blue-400">View Code →</span></div></button>'), Ks = /* @__PURE__ */ H('<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"></div>'), Ws = /* @__PURE__ */ H('<div class="mb-4"><div class="relative max-w-md"><svg class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg> <input type="text" placeholder="Search codexes…" class="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"/></div></div> <div class="mb-4 flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400"><span> </span> <!></div> <!>', 1), $s = /* @__PURE__ */ H('<div class="absolute inset-0 bg-white/80 dark:bg-gray-900/80 flex items-center justify-center rounded-lg z-10"><svg class="animate-spin h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> <span class="ml-3 text-gray-500 dark:text-gray-400">Loading details…</span></div>'), Js = /* @__PURE__ */ H('<div class="p-6 max-w-6xl mx-auto relative"><div class="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"><div><h1 class="text-2xl font-bold text-gray-900 dark:text-white">Codex Viewer</h1> <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">Browse installed codex packages</p></div> <button class="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors disabled:opacity-50"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg> Refresh</button></div> <!> <!> <!></div>');
function Xs(e, t) {
  gn(t, !0);
  let r = /* @__PURE__ */ K(_t([])), n = /* @__PURE__ */ K(!0), i = /* @__PURE__ */ K(""), s = /* @__PURE__ */ K(""), o = /* @__PURE__ */ K(null), f = /* @__PURE__ */ K(!1), a = /* @__PURE__ */ tn(() => g(s).trim() ? g(r).filter((p) => {
    const N = g(s).toLowerCase();
    return (p.name ?? "").toLowerCase().includes(N) || (p.description ?? "").toLowerCase().includes(N);
  }) : g(r));
  async function u(p, N = {}) {
    return await t.ctx.callSync(p, N);
  }
  async function v() {
    P(n, !0), P(i, "");
    try {
      const p = await u("get_all_codexes");
      P(r, p?.codexes ?? p?.data ?? (Array.isArray(p) ? p : []), !0);
    } catch (p) {
      P(i, p?.message || String(p), !0);
    } finally {
      P(n, !1);
    }
  }
  async function _(p) {
    P(f, !0), P(i, "");
    try {
      const N = p._id || p.id || p.name, ne = await u("get_codex_details", { codex_id: N });
      P(o, ne?.data ?? ne, !0);
    } catch {
      P(o, p, !0);
    } finally {
      P(f, !1);
    }
  }
  function h() {
    P(o, null);
  }
  function d(p) {
    return p ? new Date(p / 1e6).toLocaleString() : "";
  }
  ds(() => {
    v();
  });
  var c = Js(), w = C(c), y = D(C(w), 2), T = D(w, 2);
  {
    var S = (p) => {
      var N = Is(), ne = C(N);
      ie(() => X(ne, g(i))), B(p, N);
    };
    Se(T, (p) => {
      g(i) && p(S);
    });
  }
  var U = D(T, 2);
  {
    var re = (p) => {
      var N = Bs(), ne = C(N), dr = D(ne, 2), Gt = C(dr), At = D(C(Gt), 2), Kt = C(At), vr = D(At, 2);
      {
        var hr = (L) => {
          var pe = Ls(), Je = C(pe);
          ie(() => X(Je, `v${g(o).version ?? ""}`)), B(L, pe);
        };
        Se(vr, (L) => {
          g(o).version && L(hr);
        });
      }
      var Wt = D(Gt, 2);
      {
        var _r = (L) => {
          var pe = js(), Je = C(pe);
          ie(() => X(Je, g(o).description)), B(L, pe);
        };
        Se(Wt, (L) => {
          g(o).description && L(_r);
        });
      }
      var $t = D(Wt, 2);
      {
        var pr = (L) => {
          var pe = zs(), Je = C(pe);
          ie((gr) => X(Je, `Created: ${gr ?? ""}`), [() => d(g(o).created_at)]), B(L, pe);
        }, Y = /* @__PURE__ */ tn(() => d(g(o).created_at));
        Se($t, (L) => {
          g(Y) && L(pr);
        });
      }
      var ke = D($t, 2), Ee = C(ke), _e = C(Ee);
      ie(
        (L) => {
          X(Kt, g(o).name || g(o)._id || "Codex"), X(_e, L);
        },
        [
          () => g(o).code || g(o).source || g(o).code_preview || JSON.stringify(g(o), null, 2)
        ]
      ), xr("click", ne, h), B(p, N);
    }, Fe = (p) => {
      var N = Vs();
      B(p, N);
    }, xe = (p) => {
      var N = Ws(), ne = is(N), dr = C(ne), Gt = D(C(dr), 2), At = D(ne, 2), Kt = C(At), vr = C(Kt), hr = D(Kt, 2);
      {
        var Wt = (Y) => {
          var ke = qs(), Ee = C(ke);
          ie(() => X(Ee, `(${g(a).length ?? ""} matching)`)), B(Y, ke);
        };
        Se(hr, (Y) => {
          g(s) && g(a).length !== g(r).length && Y(Wt);
        });
      }
      var _r = D(At, 2);
      {
        var $t = (Y) => {
          var ke = Hs(), Ee = D(C(ke), 2), _e = C(Ee);
          ie(() => X(_e, g(s) ? "No codexes match your search" : "No codexes found")), B(Y, ke);
        }, pr = (Y) => {
          var ke = Ks();
          Rs(ke, 21, () => g(a), (Ee) => Ee._id || Ee.name, (Ee, _e) => {
            var L = Gs(), pe = C(L), Je = C(pe), gr = D(C(Je), 2), Zn = C(gr), Wr = D(pe, 2);
            {
              var Qn = (De) => {
                var Mt = Us(), mr = C(Mt);
                ie(() => X(mr, g(_e).description)), B(De, Mt);
              };
              Se(Wr, (De) => {
                g(_e).description && De(Qn);
              });
            }
            var $r = D(Wr, 2);
            {
              var ei = (De) => {
                var Mt = Ys(), mr = C(Mt), ii = C(mr);
                ie((si) => X(ii, si), [
                  () => g(_e).code_preview.split(`
`).slice(0, 3).join(`
`)
                ]), B(De, Mt);
              };
              Se($r, (De) => {
                g(_e).code_preview && De(ei);
              });
            }
            var ti = D($r, 2), ri = C(ti), ni = C(ri);
            ie(
              (De) => {
                X(Zn, g(_e).name), X(ni, `ID: ${De ?? ""}`);
              },
              [() => (g(_e)._id || "").substring(0, 8)]
            ), xr("click", L, () => _(g(_e))), B(Ee, L);
          }), B(Y, ke);
        };
        Se(_r, (Y) => {
          g(a).length === 0 ? Y($t) : Y(pr, -1);
        });
      }
      ie(() => X(vr, `${g(r).length ?? ""} total codexes`)), Ps(Gt, () => g(s), (Y) => P(s, Y)), B(p, N);
    };
    Se(U, (p) => {
      g(o) ? p(re) : g(n) ? p(Fe, 1) : p(xe, -1);
    });
  }
  var $e = D(U, 2);
  {
    var J = (p) => {
      var N = $s();
      B(p, N);
    };
    Se($e, (p) => {
      g(f) && p(J);
    });
  }
  ie(() => y.disabled = g(n)), xr("click", y, v), B(e, c), mn();
}
xs(["click"]);
function el(e, t) {
  const r = Cs(Xs, { target: e, props: { ctx: t } });
  return {
    unmount() {
      try {
        As(r);
      } catch {
      }
    }
  };
}
export {
  el as default
};
