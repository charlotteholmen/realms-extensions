var li = Object.defineProperty;
var $r = (e) => {
  throw TypeError(e);
};
var ai = (e, t, r) => t in e ? li(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var ge = (e, t, r) => ai(e, typeof t != "symbol" ? t + "" : t, r), wr = (e, t, r) => t.has(e) || $r("Cannot " + r);
var l = (e, t, r) => (wr(e, t, "read from private field"), r ? r.call(e) : t.get(e)), m = (e, t, r) => t.has(e) ? $r("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), x = (e, t, r, n) => (wr(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r), A = (e, t, r) => (wr(e, t, "access private method"), r);
var dn = Array.isArray, oi = Array.prototype.indexOf, kt = Array.prototype.includes, cr = Array.from, fi = Object.defineProperty, Ot = Object.getOwnPropertyDescriptor, ui = Object.prototype, ci = Array.prototype, di = Object.getPrototypeOf, Xr = Object.isExtensible;
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
const B = 2, It = 4, dr = 8, hn = 1 << 24, Me = 16, ye = 32, Ge = 64, Sr = 128, ue = 512, P = 1024, z = 2048, Ne = 4096, H = 8192, ce = 16384, ht = 32768, Zr = 1 << 25, Et = 65536, Cr = 1 << 17, _i = 1 << 18, At = 1 << 19, pi = 1 << 20, Be = 1 << 25, ct = 65536, sr = 1 << 21, Lt = 1 << 22, Ye = 1 << 23, br = Symbol("$state"), Pe = new class extends Error {
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
function Oi() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function Di() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function _n(e) {
  return e === this.v;
}
function Pi(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function pn(e) {
  return !Pi(e, this.v);
}
let ve = null;
function St(e) {
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
let Qe = [];
function bn() {
  var e = Qe;
  Qe = [], hi(e);
}
function gt(e) {
  if (Qe.length === 0 && !Dt) {
    var t = Qe;
    queueMicrotask(() => {
      t === Qe && bn();
    });
  }
  Qe.push(e);
}
function Ii() {
  for (; Qe.length > 0; )
    bn();
}
function yn(e) {
  var t = E;
  if (t === null)
    return k.f |= Ye, e;
  if ((t.f & ht) === 0 && (t.f & It) === 0)
    throw e;
  Ue(e, t);
}
function Ue(e, t) {
  for (; t !== null; ) {
    if ((t.f & Sr) !== 0) {
      if ((t.f & ht) === 0)
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
  (e.f & ue) !== 0 || e.deps === null ? R(e, P) : R(e, Ne);
}
function xn(e) {
  if (e !== null)
    for (const t of e)
      (t.f & B) === 0 || (t.f & ct) === 0 || (t.f ^= ct, xn(
        /** @type {Derived} */
        t.deps
      ));
}
function kn(e, t, r) {
  (e.f & z) !== 0 ? t.add(e) : (e.f & Ne) !== 0 && r.add(e), xn(e.deps), R(e, P);
}
const Ze = /* @__PURE__ */ new Set();
let b = null, we = null, Tr = null, Dt = !1, yr = !1, _t = null, Zt = null;
var Qr = 0;
let ji = 1;
var mt, wt, rt, Ie, Ce, zt, ee, Bt, qe, Le, Te, bt, yt, nt, F, Qt, En, er, Ar, tr, zi;
const or = class or {
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
    m(this, mt, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    m(this, wt, /* @__PURE__ */ new Set());
    /**
     * Callbacks that should run only when a fork is committed.
     * @type {Set<(batch: Batch) => void>}
     */
    m(this, rt, /* @__PURE__ */ new Set());
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
    m(this, zt, null);
    /**
     * The root effects that need to be flushed
     * @type {Effect[]}
     */
    m(this, ee, []);
    /**
     * Effects created while this batch was active.
     * @type {Effect[]}
     */
    m(this, Bt, []);
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
    m(this, bt, /* @__PURE__ */ new Set());
    ge(this, "is_fork", !1);
    m(this, yt, !1);
    /** @type {Set<Batch>} */
    m(this, nt, /* @__PURE__ */ new Set());
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(t) {
    l(this, Te).has(t) || l(this, Te).set(t, { d: [], m: [] }), l(this, bt).delete(t);
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
        R(i, z), r(i);
      for (i of n.m)
        R(i, Ne), r(i);
    }
    l(this, bt).add(t);
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
      yr = !0, b = this, A(this, F, er).call(this);
    } finally {
      Qr = 0, Tr = null, _t = null, Zt = null, yr = !1, b = null, we = null, at.clear();
    }
  }
  discard() {
    for (const t of l(this, wt)) t(this);
    l(this, wt).clear(), l(this, rt).clear(), Ze.delete(this);
  }
  /**
   * @param {Effect} effect
   */
  register_created_effect(t) {
    l(this, Bt).push(t);
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
    l(this, yt) || n || (x(this, yt, !0), gt(() => {
      x(this, yt, !1), this.flush();
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
    l(this, mt).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    l(this, wt).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  on_fork_commit(t) {
    l(this, rt).add(t);
  }
  run_fork_commit_callbacks() {
    for (const t of l(this, rt)) t(this);
    l(this, rt).clear();
  }
  settled() {
    return (l(this, zt) ?? x(this, zt, vn())).promise;
  }
  static ensure() {
    if (b === null) {
      const t = b = new or();
      yr || (Ze.add(b), Dt || gt(() => {
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
    if (Tr = t, t.b?.is_pending && (t.f & (It | dr | hn)) !== 0 && (t.f & ht) === 0) {
      t.b.defer_effect(t);
      return;
    }
    for (var r = t; r.parent !== null; ) {
      r = r.parent;
      var n = r.f;
      if (_t !== null && r === E && (k === null || (k.f & B) === 0))
        return;
      if ((n & (Ge | ye)) !== 0) {
        if ((n & P) === 0)
          return;
        r.f ^= P;
      }
    }
    l(this, ee).push(r);
  }
};
mt = new WeakMap(), wt = new WeakMap(), rt = new WeakMap(), Ie = new WeakMap(), Ce = new WeakMap(), zt = new WeakMap(), ee = new WeakMap(), Bt = new WeakMap(), qe = new WeakMap(), Le = new WeakMap(), Te = new WeakMap(), bt = new WeakMap(), yt = new WeakMap(), nt = new WeakMap(), F = new WeakSet(), Qt = function() {
  return this.is_fork || l(this, Ce).size > 0;
}, En = function() {
  for (const n of l(this, nt))
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
}, er = function() {
  var f;
  if (Qr++ > 1e3 && (Ze.delete(this), Vi()), !A(this, F, Qt).call(this)) {
    for (const a of l(this, qe))
      l(this, Le).delete(a), R(a, z), this.schedule(a);
    for (const a of l(this, Le))
      R(a, Ne), this.schedule(a);
  }
  const t = l(this, ee);
  x(this, ee, []), this.apply();
  var r = _t = [], n = [], i = Zt = [];
  for (const a of t)
    try {
      A(this, F, Ar).call(this, a, r, n);
    } catch (u) {
      throw Tn(a), u;
    }
  if (b = null, i.length > 0) {
    var s = or.ensure();
    for (const a of i)
      s.schedule(a);
  }
  if (_t = null, Zt = null, A(this, F, Qt).call(this) || A(this, F, En).call(this)) {
    A(this, F, tr).call(this, n), A(this, F, tr).call(this, r);
    for (const [a, u] of l(this, Te))
      Cn(a, u);
  } else {
    l(this, Ie).size === 0 && Ze.delete(this), l(this, qe).clear(), l(this, Le).clear();
    for (const a of l(this, mt)) a(this);
    l(this, mt).clear(), en(n), en(r), l(this, zt)?.resolve();
  }
  var o = (
    /** @type {Batch | null} */
    /** @type {unknown} */
    b
  );
  if (l(this, ee).length > 0) {
    const a = o ?? (o = this);
    l(a, ee).push(...l(this, ee).filter((u) => !l(a, ee).includes(u)));
  }
  o !== null && (Ze.add(o), A(f = o, F, er).call(f));
}, /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
Ar = function(t, r, n) {
  t.f ^= P;
  for (var i = t.first; i !== null; ) {
    var s = i.f, o = (s & (ye | Ge)) !== 0, f = o && (s & P) !== 0, a = f || (s & H) !== 0 || l(this, Te).has(i);
    if (!a && i.fn !== null) {
      o ? i.f ^= P : (s & It) !== 0 ? r.push(i) : Gt(i) && ((s & Me) !== 0 && l(this, Le).add(i), Tt(i));
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
tr = function(t) {
  for (var r = 0; r < t.length; r += 1)
    kn(t[r], l(this, qe), l(this, Le));
}, zi = function() {
  var v, _, h;
  for (const d of Ze) {
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
        for (const c of l(this, bt))
          d.unskip_effect(c, (w) => {
            var y;
            (w.f & (Me | Lt)) !== 0 ? d.schedule(w) : A(y = d, F, tr).call(y, [w]);
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
      for (const c of l(this, Bt))
        (c.f & (ce | H | Cr)) === 0 && jr(c, a, o) && ((c.f & (Lt | Me)) !== 0 ? (R(c, z), d.schedule(c)) : l(d, qe).add(c));
      if (l(d, ee).length > 0) {
        d.apply();
        for (var u of l(d, ee))
          A(v = d, F, Ar).call(v, u, [], []);
        x(d, ee, []);
      }
      d.deactivate();
    }
  }
  for (const d of Ze)
    l(d, nt).has(this) && (l(d, nt).delete(this), l(d, nt).size === 0 && !A(_ = d, F, Qt).call(_) && (d.activate(), A(h = d, F, er).call(h)));
};
let dt = or;
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
let De = null;
function en(e) {
  var t = e.length;
  if (t !== 0) {
    for (var r = 0; r < t; ) {
      var n = e[r++];
      if ((n.f & (ce | H)) === 0 && Gt(n) && (De = /* @__PURE__ */ new Set(), Tt(n), n.deps === null && n.first === null && n.nodes === null && n.teardown === null && n.ac === null && Bn(n), De?.size > 0)) {
        at.clear();
        for (const i of De) {
          if ((i.f & (ce | H)) !== 0) continue;
          const s = [i];
          let o = i.parent;
          for (; o !== null; )
            De.has(o) && (De.delete(o), s.push(o)), o = o.parent;
          for (let f = s.length - 1; f >= 0; f--) {
            const a = s[f];
            (a.f & (ce | H)) === 0 && Tt(a);
          }
        }
        De.clear();
      }
    }
    De = null;
  }
}
function Sn(e, t, r, n) {
  if (!r.has(e) && (r.add(e), e.reactions !== null))
    for (const i of e.reactions) {
      const s = i.f;
      (s & B) !== 0 ? Sn(
        /** @type {Derived} */
        i,
        t,
        r,
        n
      ) : (s & (Lt | Me)) !== 0 && (s & z) === 0 && jr(i, t, n) && (R(i, z), zr(
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
      if (kt.call(t, i))
        return !0;
      if ((i.f & B) !== 0 && jr(
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
  if (!((e.f & ye) !== 0 && (e.f & P) !== 0)) {
    (e.f & z) !== 0 ? t.d.push(e) : (e.f & Ne) !== 0 && t.m.push(e), R(e, P);
    for (var r = e.first; r !== null; )
      Cn(r, t), r = r.next;
  }
}
function Tn(e) {
  R(e, P);
  for (var t = e.first; t !== null; )
    Tn(t), t = t.next;
}
function qi(e) {
  let t = 0, r = vt(0), n;
  return () => {
    Hr() && (g(r), jn(() => (t === 0 && (n = $n(() => e(() => Pt(r)))), t += 1, () => {
      gt(() => {
        t -= 1, t === 0 && (n?.(), n = void 0, Pt(r));
      });
    })));
  };
}
var Hi = Et | At;
function Ui(e, t, r, n) {
  new Yi(e, t, r, n);
}
var le, Ir, ae, it, K, oe, q, te, je, st, He, xt, Vt, qt, ze, fr, M, Gi, Ki, Ji, Mr, rr, nr, Nr, Rr;
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
    m(this, it);
    /** @type {Effect} */
    m(this, K);
    /** @type {Effect | null} */
    m(this, oe, null);
    /** @type {Effect | null} */
    m(this, q, null);
    /** @type {Effect | null} */
    m(this, te, null);
    /** @type {DocumentFragment | null} */
    m(this, je, null);
    m(this, st, 0);
    m(this, He, 0);
    m(this, xt, !1);
    /** @type {Set<Effect>} */
    m(this, Vt, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    m(this, qt, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    m(this, ze, null);
    m(this, fr, qi(() => (x(this, ze, vt(l(this, st))), () => {
      x(this, ze, null);
    })));
    x(this, le, t), x(this, ae, r), x(this, it, (s) => {
      var o = (
        /** @type {Effect} */
        E
      );
      o.b = this, o.f |= Sr, n(s);
    }), this.parent = /** @type {Effect} */
    E.b, this.transform_error = i ?? this.parent?.transform_error ?? ((s) => s), x(this, K, Ur(() => {
      A(this, M, Mr).call(this);
    }, Hi));
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    kn(t, l(this, Vt), l(this, qt));
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
    A(this, M, Nr).call(this, t, r), x(this, st, l(this, st) + t), !(!l(this, ze) || l(this, xt)) && (x(this, xt, !0), gt(() => {
      x(this, xt, !1), l(this, ze) && Ct(l(this, ze), l(this, st));
    }));
  }
  get_effect_pending() {
    return l(this, fr).call(this), g(
      /** @type {Source<number>} */
      l(this, ze)
    );
  }
  /** @param {unknown} error */
  error(t) {
    if (!l(this, ae).onerror && !l(this, ae).failed)
      throw t;
    b?.is_fork ? (l(this, oe) && b.skip_effect(l(this, oe)), l(this, q) && b.skip_effect(l(this, q)), l(this, te) && b.skip_effect(l(this, te)), b.on_fork_commit(() => {
      A(this, M, Rr).call(this, t);
    })) : A(this, M, Rr).call(this, t);
  }
}
le = new WeakMap(), Ir = new WeakMap(), ae = new WeakMap(), it = new WeakMap(), K = new WeakMap(), oe = new WeakMap(), q = new WeakMap(), te = new WeakMap(), je = new WeakMap(), st = new WeakMap(), He = new WeakMap(), xt = new WeakMap(), Vt = new WeakMap(), qt = new WeakMap(), ze = new WeakMap(), fr = new WeakMap(), M = new WeakSet(), Gi = function() {
  try {
    x(this, oe, fe(() => l(this, it).call(this, l(this, le))));
  } catch (t) {
    this.error(t);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
Ki = function(t) {
  const r = l(this, ae).failed;
  r && x(this, te, fe(() => {
    r(
      l(this, le),
      () => t,
      () => () => {
      }
    );
  }));
}, Ji = function() {
  const t = l(this, ae).pending;
  t && (this.is_pending = !0, x(this, q, fe(() => t(l(this, le)))), gt(() => {
    var r = x(this, je, document.createDocumentFragment()), n = ot();
    r.append(n), x(this, oe, A(this, M, nr).call(this, () => fe(() => l(this, it).call(this, n)))), l(this, He) === 0 && (l(this, le).before(r), x(this, je, null), ft(
      /** @type {Effect} */
      l(this, q),
      () => {
        x(this, q, null);
      }
    ), A(this, M, rr).call(
      this,
      /** @type {Batch} */
      b
    ));
  }));
}, Mr = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), x(this, He, 0), x(this, st, 0), x(this, oe, fe(() => {
      l(this, it).call(this, l(this, le));
    })), l(this, He) > 0) {
      var t = x(this, je, document.createDocumentFragment());
      Kr(l(this, oe), t);
      const r = (
        /** @type {(anchor: Node) => void} */
        l(this, ae).pending
      );
      x(this, q, fe(() => r(l(this, le))));
    } else
      A(this, M, rr).call(
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
rr = function(t) {
  this.is_pending = !1, t.transfer_effects(l(this, Vt), l(this, qt));
}, /**
 * @template T
 * @param {() => T} fn
 */
nr = function(t) {
  var r = E, n = k, i = ve;
  Re(l(this, K)), he(l(this, K)), St(l(this, K).ctx);
  try {
    return dt.ensure(), t();
  } catch (s) {
    return yn(s), null;
  } finally {
    Re(r), he(n), St(i);
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
  x(this, He, l(this, He) + t), l(this, He) === 0 && (A(this, M, rr).call(this, r), l(this, q) && ft(l(this, q), () => {
    x(this, q, null);
  }), l(this, je) && (l(this, le).before(l(this, je)), x(this, je, null)));
}, /**
 * @param {unknown} error
 */
Rr = function(t) {
  l(this, oe) && ($(l(this, oe)), x(this, oe, null)), l(this, q) && ($(l(this, q)), x(this, q, null)), l(this, te) && ($(l(this, te)), x(this, te, null));
  var r = l(this, ae).onerror;
  let n = l(this, ae).failed;
  var i = !1, s = !1;
  const o = () => {
    if (i) {
      Di();
      return;
    }
    i = !0, s && Ci(), l(this, te) !== null && ft(l(this, te), () => {
      x(this, te, null);
    }), A(this, M, nr).call(this, () => {
      A(this, M, Mr).call(this);
    });
  }, f = (a) => {
    try {
      s = !0, r?.(a, o), s = !1;
    } catch (u) {
      Ue(u, l(this, K) && l(this, K).parent);
    }
    n && x(this, te, A(this, M, nr).call(this, () => {
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
          l(this, K).parent
        ), null;
      }
    }));
  };
  gt(() => {
    var a;
    try {
      a = this.transform_error(t);
    } catch (u) {
      Ue(u, l(this, K) && l(this, K).parent);
      return;
    }
    a !== null && typeof a == "object" && typeof /** @type {any} */
    a.then == "function" ? a.then(
      f,
      /** @param {unknown} e */
      (u) => Ue(u, l(this, K) && l(this, K).parent)
    ) : f(a);
  });
};
function Wi(e, t, r, n) {
  const i = Br;
  var s = e.filter((h) => !h.settled);
  if (r.length === 0 && s.length === 0) {
    n(t.map(i));
    return;
  }
  var o = (
    /** @type {Effect} */
    E
  ), f = $i(), a = s.length === 1 ? s[0].promise : s.length > 1 ? Promise.all(s.map((h) => h.promise)) : null;
  function u(h) {
    f();
    try {
      n(h);
    } catch (d) {
      (o.f & ce) === 0 && Ue(d, o);
    }
    lr();
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
    f(), _(), lr();
  }) : _();
}
function $i() {
  var e = (
    /** @type {Effect} */
    E
  ), t = k, r = ve, n = (
    /** @type {Batch} */
    b
  );
  return function(s = !0) {
    Re(e), he(t), St(r), s && (e.f & ce) === 0 && (n?.activate(), n?.apply());
  };
}
function lr(e = !0) {
  Re(null), he(null), St(null), e && b?.deactivate();
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
  var t = B | z;
  return E !== null && (E.f |= At), {
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
  ), s = vt(
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
      Promise.resolve(e()).then(u.resolve, u.reject).finally(lr);
    } catch (d) {
      u.reject(d), lr();
    }
    var v = (
      /** @type {Batch} */
      b
    );
    if (o) {
      if ((a.f & ht) !== 0)
        var _ = An();
      if (
        /** @type {Boundary} */
        n.b.is_rendered()
      )
        f.get(v)?.reject(Pe), f.delete(v);
      else {
        for (const d of f.values())
          d.reject(Pe);
        f.clear();
      }
      f.set(v, u);
    }
    const h = (d, c = void 0) => {
      if (_) {
        var w = c === Pe;
        _(w);
      }
      if (!(c === Pe || (a.f & ce) !== 0)) {
        if (v.activate(), c)
          s.f |= Ye, Ct(s, c);
        else {
          (s.f & Ye) !== 0 && (s.f ^= Ye), Ct(s, d);
          for (const [y, T] of f) {
            if (f.delete(y), y === v) break;
            T.reject(Pe);
          }
        }
        v.deactivate();
      }
    };
    u.promise.then(h, (d) => h(null, d || "unknown"));
  }), cs(() => {
    for (const a of f.values())
      a.reject(Pe);
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
  if (!Ke && n !== null && (n.f & (ce | H)) !== 0)
    return Oi(), e.v;
  Re(n);
  try {
    e.f &= ~ct, Qi(e), t = Kn(e);
  } finally {
    Re(r);
  }
  return t;
}
function Mn(e) {
  var t = Vr(e);
  if (!e.equals(t) && (e.wv = Yn(), (!b?.is_fork || e.deps === null) && (b !== null ? b.capture(e, t, !0) : e.v = t, e.deps === null))) {
    R(e, P);
    return;
  }
  Ke || (we !== null ? (Hr() || b?.is_fork) && we.set(e, t) : Lr(e));
}
function es(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      (t.teardown || t.ac) && (t.teardown?.(), t.ac?.abort(Pe), t.teardown = vi, t.ac = null, jt(t, 0), Yr(t));
}
function Nn(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      t.teardown && Tt(t);
}
let Fr = /* @__PURE__ */ new Set();
const at = /* @__PURE__ */ new Map();
let Rn = !1;
function vt(e, t) {
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
function J(e, t) {
  const r = vt(e);
  return Hn(r), r;
}
// @__NO_SIDE_EFFECTS__
function ts(e, t = !1, r = !0) {
  const n = vt(e);
  return t || (n.equals = pn), n;
}
function D(e, t, r = !1) {
  k !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!be || (k.f & Cr) !== 0) && wn() && (k.f & (B | Me | Lt | Cr)) !== 0 && (de === null || !kt.call(de, e)) && Si();
  let n = r ? pt(t) : t;
  return Ct(e, n, Zt);
}
function Ct(e, t, r = null) {
  if (!e.equals(t)) {
    at.set(e, Ke ? t : e.v);
    var n = dt.ensure();
    if (n.capture(e, t), (e.f & B) !== 0) {
      const i = (
        /** @type {Derived} */
        e
      );
      (e.f & z) !== 0 && Vr(i), we === null && Lr(i);
    }
    e.wv = Yn(), Fn(e, z, r), E !== null && (E.f & P) !== 0 && (E.f & (ye | Ge)) === 0 && (se === null ? gs([e]) : se.push(e)), !n.is_fork && Fr.size > 0 && !Rn && rs();
  }
  return t;
}
function rs() {
  Rn = !1;
  for (const e of Fr)
    (e.f & P) !== 0 && R(e, Ne), Gt(e) && Tt(e);
  Fr.clear();
}
function Pt(e) {
  D(e, e.v + 1);
}
function Fn(e, t, r) {
  var n = e.reactions;
  if (n !== null)
    for (var i = n.length, s = 0; s < i; s++) {
      var o = n[s], f = o.f, a = (f & z) === 0;
      if (a && R(o, t), (f & B) !== 0) {
        var u = (
          /** @type {Derived} */
          o
        );
        we?.delete(u), (f & ct) === 0 && (f & ue && (E === null || (E.f & sr) === 0) && (o.f |= ct), Fn(u, Ne, r));
      } else if (a) {
        var v = (
          /** @type {Effect} */
          o
        );
        (f & Me) !== 0 && De !== null && De.add(v), r !== null ? r.push(v) : zr(v);
      }
    }
}
function pt(e) {
  if (typeof e != "object" || e === null || br in e)
    return e;
  const t = di(e);
  if (t !== ui && t !== ci)
    return e;
  var r = /* @__PURE__ */ new Map(), n = dn(e), i = /* @__PURE__ */ J(0), s = ut, o = (f) => {
    if (ut === s)
      return f();
    var a = k, u = ut;
    he(null), ln(s);
    var v = f();
    return he(a), ln(u), v;
  };
  return n && r.set("length", /* @__PURE__ */ J(
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
          var _ = /* @__PURE__ */ J(u.value);
          return r.set(a, _), _;
        }) : D(v, u.value, !0), !0;
      },
      deleteProperty(f, a) {
        var u = r.get(a);
        if (u === void 0) {
          if (a in f) {
            const v = o(() => /* @__PURE__ */ J(I));
            r.set(a, v), Pt(i);
          }
        } else
          D(u, I), Pt(i);
        return !0;
      },
      get(f, a, u) {
        if (a === br)
          return e;
        var v = r.get(a), _ = a in f;
        if (v === void 0 && (!_ || Ot(f, a)?.writable) && (v = o(() => {
          var d = pt(_ ? f[a] : I), c = /* @__PURE__ */ J(d);
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
        if (u !== void 0 || E !== null && (!v || Ot(f, a)?.writable)) {
          u === void 0 && (u = o(() => {
            var h = v ? pt(f[a]) : I, d = /* @__PURE__ */ J(h);
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
            c !== void 0 ? D(c, I) : d in f && (c = o(() => /* @__PURE__ */ J(I)), r.set(d + "", c));
          }
        if (_ === void 0)
          (!h || Ot(f, a)?.writable) && (_ = o(() => /* @__PURE__ */ J(void 0)), D(_, pt(u)), r.set(a, _));
        else {
          h = _.v !== I;
          var w = o(() => pt(u));
          D(_, w);
        }
        var y = Reflect.getOwnPropertyDescriptor(f, a);
        if (y?.set && y.set.call(v, u), !h) {
          if (n && typeof a == "string") {
            var T = (
              /** @type {Source<number>} */
              r.get("length")
            ), S = Number(a);
            Number.isInteger(S) && S >= T.v && D(T, S + 1);
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
var rn, On, Dn, Pn;
function ns() {
  if (rn === void 0) {
    rn = window, On = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, r = Text.prototype;
    Dn = Ot(t, "firstChild").get, Pn = Ot(t, "nextSibling").get, Xr(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), Xr(r) && (r.__t = void 0);
  }
}
function ot(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function ar(e) {
  return (
    /** @type {TemplateNode | null} */
    Dn.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function Yt(e) {
  return (
    /** @type {TemplateNode | null} */
    Pn.call(e)
  );
}
function C(e, t) {
  return /* @__PURE__ */ ar(e);
}
function is(e, t = !1) {
  {
    var r = /* @__PURE__ */ ar(e);
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ Yt(r) : r;
  }
}
function O(e, t = 1, r = !1) {
  let n = e;
  for (; t--; )
    n = /** @type {TemplateNode} */
    /* @__PURE__ */ Yt(n);
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
function Je(e, t) {
  var r = E;
  r !== null && (r.f & H) !== 0 && (e |= H);
  var n = {
    ctx: ve,
    deps: null,
    nodes: null,
    f: e | z | ue,
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
  if ((e & It) !== 0)
    _t !== null ? _t.push(n) : dt.ensure().schedule(n);
  else if (t !== null) {
    try {
      Tt(n);
    } catch (o) {
      throw $(n), o;
    }
    i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && // either `null`, or a singular child
    (i.f & At) === 0 && (i = i.first, (e & Me) !== 0 && (e & Et) !== 0 && i !== null && (i.f |= Et));
  }
  if (i !== null && (i.parent = r, r !== null && us(i, r), k !== null && (k.f & B) !== 0 && (e & Ge) === 0)) {
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
  const t = Je(dr, null);
  return R(t, P), t.teardown = e, t;
}
function ds(e) {
  fs();
  var t = (
    /** @type {Effect} */
    E.f
  ), r = !k && (t & ye) !== 0 && (t & ht) === 0;
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
  return Je(It | pi, e);
}
function vs(e) {
  dt.ensure();
  const t = Je(Ge | At, e);
  return (r = {}) => new Promise((n) => {
    r.outro ? ft(t, () => {
      $(t), n(void 0);
    }) : ($(t), n(void 0));
  });
}
function hs(e) {
  return Je(Lt | At, e);
}
function jn(e, t = 0) {
  return Je(dr | t, e);
}
function ie(e, t = [], r = [], n = []) {
  Wi(n, t, r, (i) => {
    Je(dr, () => e(...i.map(g)));
  });
}
function Ur(e, t = 0) {
  var r = Je(Me | t, e);
  return r;
}
function fe(e) {
  return Je(ye | At, e);
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
      i.abort(Pe);
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
  ), r = !0), R(e, Zr), Yr(e, t && !r), jt(e, 0);
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
    var r = e === t ? null : /* @__PURE__ */ Yt(e);
    e.remove(), e = r;
  }
}
function Bn(e) {
  var t = e.parent, r = e.prev, n = e.next;
  r !== null && (r.next = n), n !== null && (n.prev = r), t !== null && (t.first === e && (t.first = n), t.last === e && (t.last = r));
}
function ft(e, t, r = !0) {
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
  if ((e.f & H) === 0) {
    e.f ^= H;
    var n = e.nodes && e.nodes.t;
    if (n !== null)
      for (const f of n)
        (f.is_global || r) && t.push(f);
    for (var i = e.first; i !== null; ) {
      var s = i.next;
      if ((i.f & Ge) === 0) {
        var o = (i.f & Et) !== 0 || // If this is a branch effect without a block effect parent,
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
  if ((e.f & H) !== 0) {
    e.f ^= H, (e.f & P) === 0 && (R(e, z), dt.ensure().schedule(e));
    for (var r = e.first; r !== null; ) {
      var n = r.next, i = (r.f & Et) !== 0 || (r.f & ye) !== 0;
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
      var i = r === n ? null : /* @__PURE__ */ Yt(r);
      t.append(r), r = i;
    }
}
let ir = !1, Ke = !1;
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
let W = null, Q = 0, se = null;
function gs(e) {
  se = e;
}
let Un = 1, et = 0, ut = et;
function ln(e) {
  ut = e;
}
function Yn() {
  return ++Un;
}
function Gt(e) {
  var t = e.f;
  if ((t & z) !== 0)
    return !0;
  if (t & B && (e.f &= ~ct), (t & Ne) !== 0) {
    for (var r = (
      /** @type {Value[]} */
      e.deps
    ), n = r.length, i = 0; i < n; i++) {
      var s = r[i];
      if (Gt(
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
    we === null && R(e, P);
  }
  return !1;
}
function Gn(e, t, r = !0) {
  var n = e.reactions;
  if (n !== null && !(de !== null && kt.call(de, e)))
    for (var i = 0; i < n.length; i++) {
      var s = n[i];
      (s.f & B) !== 0 ? Gn(
        /** @type {Derived} */
        s,
        t,
        !1
      ) : t === s && (r ? R(s, z) : (s.f & P) !== 0 && R(s, Ne), zr(
        /** @type {Effect} */
        s
      ));
    }
}
function Kn(e) {
  var w;
  var t = W, r = Q, n = se, i = k, s = de, o = ve, f = be, a = ut, u = e.f;
  W = /** @type {null | Value[]} */
  null, Q = 0, se = null, k = (u & (ye | Ge)) === 0 ? e : null, de = null, St(e.ctx), be = !1, ut = ++et, e.ac !== null && (qr(() => {
    e.ac.abort(Pe);
  }), e.ac = null);
  try {
    e.f |= sr;
    var v = (
      /** @type {Function} */
      e.fn
    ), _ = v();
    e.f |= ht;
    var h = e.deps, d = b?.is_fork;
    if (W !== null) {
      var c;
      if (d || jt(e, Q), h !== null && Q > 0)
        for (h.length = Q + W.length, c = 0; c < W.length; c++)
          h[Q + c] = W[c];
      else
        e.deps = h = W;
      if (Hr() && (e.f & ue) !== 0)
        for (c = Q; c < h.length; c++)
          ((w = h[c]).reactions ?? (w.reactions = [])).push(e);
    } else !d && h !== null && Q < h.length && (jt(e, Q), h.length = Q);
    if (wn() && se !== null && !be && h !== null && (e.f & (B | Ne | z)) === 0)
      for (c = 0; c < /** @type {Source[]} */
      se.length; c++)
        Gn(
          se[c],
          /** @type {Effect} */
          e
        );
    if (i !== null && i !== e) {
      if (et++, i.deps !== null)
        for (let y = 0; y < r; y += 1)
          i.deps[y].rv = et;
      if (t !== null)
        for (const y of t)
          y.rv = et;
      se !== null && (n === null ? n = se : n.push(.../** @type {Source[]} */
      se));
    }
    return (e.f & Ye) !== 0 && (e.f ^= Ye), _;
  } catch (y) {
    return yn(y);
  } finally {
    e.f ^= sr, W = t, Q = r, se = n, k = i, de = s, St(o), be = f, ut = a;
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
  if (r === null && (t.f & B) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (W === null || !kt.call(W, t))) {
    var s = (
      /** @type {Derived} */
      t
    );
    (s.f & ue) !== 0 && (s.f ^= ue, s.f &= ~ct), s.v !== I && Lr(s), es(s), jt(s, 0);
  }
}
function jt(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var n = t; n < r.length; n++)
      ms(e, r[n]);
}
function Tt(e) {
  var t = e.f;
  if ((t & ce) === 0) {
    R(e, P);
    var r = E, n = ir;
    E = e, ir = !0;
    try {
      (t & (Me | hn)) !== 0 ? _s(e) : Yr(e), zn(e);
      var i = Kn(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = Un;
      var s;
    } finally {
      ir = n, E = r;
    }
  }
}
async function ws() {
  await Promise.resolve(), Bi();
}
function g(e) {
  var t = e.f, r = (t & B) !== 0;
  if (k !== null && !be) {
    var n = E !== null && (E.f & ce) !== 0;
    if (!n && (de === null || !kt.call(de, e))) {
      var i = k.deps;
      if ((k.f & sr) !== 0)
        e.rv < et && (e.rv = et, W === null && i !== null && i[Q] === e ? Q++ : W === null ? W = [e] : W.push(e));
      else {
        (k.deps ?? (k.deps = [])).push(e);
        var s = e.reactions;
        s === null ? e.reactions = [k] : kt.call(s, k) || s.push(k);
      }
    }
  }
  if (Ke && at.has(e))
    return at.get(e);
  if (r) {
    var o = (
      /** @type {Derived} */
      e
    );
    if (Ke) {
      var f = o.v;
      return ((o.f & P) === 0 && o.reactions !== null || Wn(o)) && (f = Vr(o)), at.set(o, f), f;
    }
    var a = (o.f & ue) === 0 && !be && k !== null && (ir || (k.f & ue) !== 0), u = (o.f & ht) === 0;
    Gt(o) && (a && (o.f |= ue), Mn(o)), a && !u && (Nn(o), Jn(o));
  }
  if (we?.has(e))
    return we.get(e);
  if ((e.f & Ye) !== 0)
    throw e.v;
  return e.v;
}
function Jn(e) {
  if (e.f |= ue, e.deps !== null)
    for (const t of e.deps)
      (t.reactions ?? (t.reactions = [])).push(e), (t.f & B) !== 0 && (t.f & ue) === 0 && (Nn(
        /** @type {Derived} */
        t
      ), Jn(
        /** @type {Derived} */
        t
      ));
}
function Wn(e) {
  if (e.v === I) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (at.has(t) || (t.f & B) !== 0 && Wn(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function $n(e) {
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
const tt = Symbol("events"), Xn = /* @__PURE__ */ new Set(), Or = /* @__PURE__ */ new Set();
function xr(e, t, r) {
  (t[tt] ?? (t[tt] = {}))[e] = r;
}
function xs(e) {
  for (var t = 0; t < e.length; t++)
    Xn.add(e[t]);
  for (var r of Or)
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
  var o = 0, f = an === e && e[tt];
  if (f) {
    var a = i.indexOf(f);
    if (a !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e[tt] = t;
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
          var w = s[tt]?.[n];
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
      e[tt] = t, delete e.currentTarget, he(v), Re(_);
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
function U(e, t) {
  var r = (t & Ni) !== 0, n = (t & Ri) !== 0, i, s = !e.startsWith("<!>");
  return () => {
    i === void 0 && (i = Ss(s ? e : "<!>" + e), r || (i = /** @type {TemplateNode} */
    /* @__PURE__ */ ar(i)));
    var o = (
      /** @type {TemplateNode} */
      n || On ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (r) {
      var f = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ ar(o)
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
function V(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function Z(e, t) {
  var r = t == null ? "" : typeof t == "object" ? `${t}` : t;
  r !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = r, e.nodeValue = `${r}`);
}
function Cs(e, t) {
  return Ts(e, t);
}
const Xt = /* @__PURE__ */ new Map();
function Ts(e, { target: t, anchor: r, props: n = {}, events: i, context: s, intro: o = !0, transformError: f }) {
  ns();
  var a = void 0, u = vs(() => {
    var v = r ?? t.appendChild(ot());
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
          for (const Y of [t, document]) {
            var T = Xt.get(Y);
            T === void 0 && (T = /* @__PURE__ */ new Map(), Xt.set(Y, T));
            var S = T.get(w);
            S === void 0 ? (Y.addEventListener(w, on, { passive: y }), T.set(w, 1)) : T.set(w, S + 1);
          }
        }
      }
    };
    return h(cr(Xn)), Or.add(h), () => {
      for (var d of _)
        for (const y of [t, document]) {
          var c = (
            /** @type {Map<string, number>} */
            Xt.get(y)
          ), w = (
            /** @type {number} */
            c.get(d)
          );
          --w == 0 ? (y.removeEventListener(d, on), c.delete(d), c.size === 0 && Xt.delete(y)) : c.set(d, w);
        }
      Or.delete(h), v !== r && v.parentNode?.removeChild(v);
    };
  });
  return Dr.set(a, u), a;
}
let Dr = /* @__PURE__ */ new WeakMap();
function As(e, t) {
  const r = Dr.get(e);
  return r ? (Dr.delete(e), r(t)) : Promise.resolve();
}
var me, Ae, re, lt, Ht, Ut, ur;
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
    m(this, re, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    m(this, lt, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    m(this, Ht, !0);
    /**
     * @param {Batch} batch
     */
    m(this, Ut, (t) => {
      if (l(this, me).has(t)) {
        var r = (
          /** @type {Key} */
          l(this, me).get(t)
        ), n = l(this, Ae).get(r);
        if (n)
          Gr(n), l(this, lt).delete(r);
        else {
          var i = l(this, re).get(r);
          i && (l(this, Ae).set(r, i.effect), l(this, re).delete(r), i.fragment.lastChild.remove(), this.anchor.before(i.fragment), n = i.effect);
        }
        for (const [s, o] of l(this, me)) {
          if (l(this, me).delete(s), s === t)
            break;
          const f = l(this, re).get(o);
          f && ($(f.effect), l(this, re).delete(o));
        }
        for (const [s, o] of l(this, Ae)) {
          if (s === r || l(this, lt).has(s)) continue;
          const f = () => {
            if (Array.from(l(this, me).values()).includes(s)) {
              var u = document.createDocumentFragment();
              Kr(o, u), u.append(ot()), l(this, re).set(s, { effect: o, fragment: u });
            } else
              $(o);
            l(this, lt).delete(s), l(this, Ae).delete(s);
          };
          l(this, Ht) || !n ? (l(this, lt).add(s), ft(o, f, !1)) : f();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    m(this, ur, (t) => {
      l(this, me).delete(t);
      const r = Array.from(l(this, me).values());
      for (const [n, i] of l(this, re))
        r.includes(n) || ($(i.effect), l(this, re).delete(n));
    });
    this.anchor = t, x(this, Ht, r);
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
    if (r && !l(this, Ae).has(t) && !l(this, re).has(t))
      if (i) {
        var s = document.createDocumentFragment(), o = ot();
        s.append(o), l(this, re).set(t, {
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
      for (const [f, a] of l(this, re))
        f === t ? n.unskip_effect(a.effect) : n.skip_effect(a.effect);
      n.oncommit(l(this, Ut)), n.ondiscard(l(this, ur));
    } else
      l(this, Ut).call(this, n);
  }
}
me = new WeakMap(), Ae = new WeakMap(), re = new WeakMap(), lt = new WeakMap(), Ht = new WeakMap(), Ut = new WeakMap(), ur = new WeakMap();
function Se(e, t, r = !1) {
  var n = new Ms(e), i = r ? Et : 0;
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
    ft(
      _,
      () => {
        if (s) {
          if (s.pending.delete(_), s.done.add(_), s.pending.size === 0) {
            var h = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            Pr(e, cr(s.done)), h.delete(s), h.size === 0 && (e.outrogroups = null);
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
    Pr(e, t, !a);
  } else
    s = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ?? (e.outrogroups = /* @__PURE__ */ new Set())).add(s);
}
function Pr(e, t, r = !0) {
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
    o = a.appendChild(ot());
  }
  var u = null, v = /* @__PURE__ */ Zi(() => {
    var S = r();
    return dn(S) ? S : S == null ? [] : cr(S);
  }), _, h = /* @__PURE__ */ new Map(), d = !0;
  function c(S) {
    (T.effect.f & ce) === 0 && (T.pending.delete(S), T.fallback = u, Fs(T, _, o, t, n), u !== null && (_.length === 0 ? (u.f & Be) === 0 ? Gr(u) : (u.f ^= Be, Ft(u, null, o)) : ft(u, () => {
      u = null;
    })));
  }
  function w(S) {
    T.pending.delete(S);
  }
  var y = Ur(() => {
    _ = /** @type {V[]} */
    g(v);
    for (var S = _.length, Y = /* @__PURE__ */ new Set(), ne = (
      /** @type {Batch} */
      b
    ), Fe = In(), xe = 0; xe < S; xe += 1) {
      var We = _[xe], X = n(We, xe), p = d ? null : f.get(X);
      p ? (p.v && Ct(p.v, We), p.i && Ct(p.i, xe), Fe && ne.unskip_effect(p.e)) : (p = Os(
        f,
        d ? o : un ?? (un = ot()),
        We,
        X,
        xe,
        i,
        t,
        r
      ), d || (p.e.f |= Be), f.set(X, p)), Y.add(X);
    }
    if (S === 0 && s && !u && (d ? u = fe(() => s(o)) : (u = fe(() => s(un ?? (un = ot()))), u.f |= Be)), S > Y.size && mi(), !d)
      if (h.set(ne, Y), Fe) {
        for (const [N, j] of f)
          Y.has(N) || ne.skip_effect(j.e);
        ne.oncommit(c), ne.ondiscard(w);
      } else
        c(ne);
    g(v);
  }), T = { effect: y, items: f, pending: h, outrogroups: null, fallback: u };
  d = !1;
}
function Rt(e) {
  for (; e !== null && (e.f & ye) === 0; )
    e = e.next;
  return e;
}
function Fs(e, t, r, n, i) {
  var s = t.length, o = e.items, f = Rt(e.effect.first), a, u = null, v = [], _ = [], h, d, c, w;
  for (w = 0; w < s; w += 1) {
    if (h = t[w], d = i(h, w), c = /** @type {EachItem} */
    o.get(d).e, e.outrogroups !== null)
      for (const X of e.outrogroups)
        X.pending.delete(c), X.done.delete(c);
    if ((c.f & H) !== 0 && Gr(c), (c.f & Be) !== 0)
      if (c.f ^= Be, c === f)
        Ft(c, null, r);
      else {
        var y = u ? u.next : f;
        c === e.effect.last && (e.effect.last = c.prev), c.prev && (c.prev.next = c.next), c.next && (c.next.prev = c.prev), Ve(e, u, c), Ve(e, c, y), Ft(c, y, r), u = c, v = [], _ = [], f = Rt(u.next);
        continue;
      }
    if (c !== f) {
      if (a !== void 0 && a.has(c)) {
        if (v.length < _.length) {
          var T = _[0], S;
          u = T.prev;
          var Y = v[0], ne = v[v.length - 1];
          for (S = 0; S < v.length; S += 1)
            Ft(v[S], T, r);
          for (S = 0; S < _.length; S += 1)
            a.delete(_[S]);
          Ve(e, Y.prev, ne.next), Ve(e, u, Y), Ve(e, ne, T), f = T, u = ne, w -= 1, v = [], _ = [];
        } else
          a.delete(c), Ft(c, f, r), Ve(e, c.prev, c.next), Ve(e, c, u === null ? e.effect.first : u.next), Ve(e, u, c), u = c;
        continue;
      }
      for (v = [], _ = []; f !== null && f !== c; )
        (a ?? (a = /* @__PURE__ */ new Set())).add(f), _.push(f), f = Rt(f.next);
      if (f === null)
        continue;
    }
    (c.f & Be) === 0 && v.push(c), u = c, f = Rt(c.next);
  }
  if (e.outrogroups !== null) {
    for (const X of e.outrogroups)
      X.pending.size === 0 && (Pr(e, cr(X.done)), e.outrogroups?.delete(X));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (f !== null || a !== void 0) {
    var Fe = [];
    if (a !== void 0)
      for (c of a)
        (c.f & H) === 0 && Fe.push(c);
    for (; f !== null; )
      (f.f & H) === 0 && f !== e.fallback && Fe.push(f), f = Rt(f.next);
    var xe = Fe.length;
    if (xe > 0) {
      var We = s === 0 ? r : null;
      Ns(e, Fe, We);
    }
  }
}
function Os(e, t, r, n, i, s, o, f) {
  var a = (o & Ti) !== 0 ? (o & Mi) === 0 ? /* @__PURE__ */ ts(r, !1, !1) : vt(r) : null, u = (o & Ai) !== 0 ? vt(i) : null;
  return {
    v: a,
    i: u,
    e: fe(() => (s(t, a ?? r, u ?? i, f), () => {
      e.delete(n);
    }))
  };
}
function Ft(e, t, r) {
  if (e.nodes)
    for (var n = e.nodes.start, i = e.nodes.end, s = t && (t.f & Be) === 0 ? (
      /** @type {EffectNodes} */
      t.nodes.start
    ) : r; n !== null; ) {
      var o = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Yt(n)
      );
      if (s.before(n), n === i)
        return;
      n = o;
    }
}
function Ve(e, t, r) {
  t === null ? e.effect.first = r : t.next = r, r === null ? e.effect.last = t : r.prev = t;
}
function Ds(e, t, r = t) {
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
  $n(t) == null && e.value && (r(kr(e) ? Er(e.value) : e.value), b !== null && n.add(b)), jn(() => {
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
const Ps = "5";
var cn;
typeof window < "u" && ((cn = window.__svelte ?? (window.__svelte = {})).v ?? (cn.v = /* @__PURE__ */ new Set())).add(Ps);
var Is = /* @__PURE__ */ U('<div class="mb-4 p-4 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 rounded-lg text-sm"> </div>'), Ls = /* @__PURE__ */ U('<span class="px-2 py-0.5 text-xs font-medium bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300 rounded-full"> </span>'), js = /* @__PURE__ */ U('<p class="text-sm text-gray-600 dark:text-gray-400 mb-4"> </p>'), zs = /* @__PURE__ */ U('<p class="text-xs text-gray-500 dark:text-gray-500 mb-4"> </p>'), Bs = /* @__PURE__ */ U('<div><button class="text-indigo-600 dark:text-indigo-400 text-sm hover:underline mb-4 inline-block">← Back to list</button> <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6"><div class="flex items-center gap-3 mb-4"><svg class="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg> <h2 class="text-xl font-semibold text-gray-900 dark:text-white"> </h2> <!> <span class="px-2 py-0.5 text-xs font-medium bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-full">Python</span></div> <!> <!> <div class="bg-gray-900 rounded-lg p-4 overflow-auto max-h-[500px]"><pre class="text-sm text-gray-300 font-mono whitespace-pre-wrap break-words"> </pre></div></div></div>'), Vs = /* @__PURE__ */ U('<div class="flex items-center justify-center py-16"><svg class="animate-spin h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> <span class="ml-3 text-gray-500 dark:text-gray-400">Loading codexes…</span></div>'), qs = /* @__PURE__ */ U('<span class="text-gray-400 dark:text-gray-500"> </span>'), Hs = /* @__PURE__ */ U('<div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl py-12 text-center"><svg class="w-12 h-12 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg> <p class="text-gray-500 dark:text-gray-400"> </p></div>'), Us = /* @__PURE__ */ U('<p class="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2 overflow-hidden"> </p>'), Ys = /* @__PURE__ */ U('<div class="bg-gray-900 rounded-lg p-2 mb-3 overflow-hidden"><pre class="text-xs text-gray-300 font-mono truncate"> </pre></div>'), Gs = /* @__PURE__ */ U('<button class="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-4 text-left hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-200 cursor-pointer w-full"><div class="flex items-start justify-between mb-3"><div class="flex items-center gap-2 min-w-0"><svg class="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg> <h3 class="font-semibold text-gray-900 dark:text-white truncate"> </h3></div> <span class="ml-2 flex-shrink-0 px-2 py-0.5 text-xs font-medium bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-full">Python</span></div> <!> <!> <div class="flex items-center justify-between text-xs text-gray-500 dark:text-gray-500"><span> </span> <span class="text-blue-600 dark:text-blue-400">View Code →</span></div></button>'), Ks = /* @__PURE__ */ U('<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"></div>'), Js = /* @__PURE__ */ U('<div class="mb-4"><div class="relative max-w-md"><svg class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg> <input type="text" placeholder="Search codexes…" class="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"/></div></div> <div class="mb-4 flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400"><span> </span> <!></div> <!>', 1), Ws = /* @__PURE__ */ U('<div class="absolute inset-0 bg-white/80 dark:bg-gray-900/80 flex items-center justify-center rounded-lg z-10"><svg class="animate-spin h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> <span class="ml-3 text-gray-500 dark:text-gray-400">Loading details…</span></div>'), $s = /* @__PURE__ */ U('<div class="p-6 max-w-6xl mx-auto relative"><div class="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"><div><h1 class="text-2xl font-bold text-gray-900 dark:text-white">Codex Viewer</h1> <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">Browse installed codex packages</p></div> <button class="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors disabled:opacity-50"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg> Refresh</button></div> <!> <!> <!></div>');
function Xs(e, t) {
  gn(t, !0);
  let r = /* @__PURE__ */ J(pt([])), n = /* @__PURE__ */ J(!0), i = /* @__PURE__ */ J(""), s = /* @__PURE__ */ J(""), o = /* @__PURE__ */ J(null), f = /* @__PURE__ */ J(!1), a = /* @__PURE__ */ tn(() => g(s).trim() ? g(r).filter((p) => {
    const N = g(s).toLowerCase();
    return (p.name ?? "").toLowerCase().includes(N) || (p.description ?? "").toLowerCase().includes(N);
  }) : g(r));
  async function u(p, N = "{}") {
    const j = await t.ctx.backend.extension_sync_call(JSON.stringify({ extension_name: "codex_viewer", function_name: p, args: N })), $e = typeof j == "string" ? JSON.parse(j) : j;
    if ($e?.success === !1) throw new Error($e.error || "Request failed");
    return $e;
  }
  async function v() {
    D(n, !0), D(i, "");
    try {
      const p = await u("get_all_codexes", "{}");
      D(r, p?.codexes ?? p?.data ?? (Array.isArray(p) ? p : []), !0);
    } catch (p) {
      D(i, p?.message || String(p), !0);
    } finally {
      D(n, !1);
    }
  }
  async function _(p) {
    D(f, !0), D(i, "");
    try {
      const N = p._id || p.id || p.name, j = await u("get_codex_details", JSON.stringify({ codex_id: N }));
      D(o, j?.data ?? j, !0);
    } catch {
      D(o, p, !0);
    } finally {
      D(f, !1);
    }
  }
  function h() {
    D(o, null);
  }
  function d(p) {
    return p ? new Date(p / 1e6).toLocaleString() : "";
  }
  ds(() => {
    v();
  });
  var c = $s(), w = C(c), y = O(C(w), 2), T = O(w, 2);
  {
    var S = (p) => {
      var N = Is(), j = C(N);
      ie(() => Z(j, g(i))), V(p, N);
    };
    Se(T, (p) => {
      g(i) && p(S);
    });
  }
  var Y = O(T, 2);
  {
    var ne = (p) => {
      var N = Bs(), j = C(N), $e = O(j, 2), Kt = C($e), Mt = O(C(Kt), 2), Jt = C(Mt), vr = O(Mt, 2);
      {
        var hr = (L) => {
          var pe = Ls(), Xe = C(pe);
          ie(() => Z(Xe, `v${g(o).version ?? ""}`)), V(L, pe);
        };
        Se(vr, (L) => {
          g(o).version && L(hr);
        });
      }
      var Wt = O(Kt, 2);
      {
        var _r = (L) => {
          var pe = js(), Xe = C(pe);
          ie(() => Z(Xe, g(o).description)), V(L, pe);
        };
        Se(Wt, (L) => {
          g(o).description && L(_r);
        });
      }
      var $t = O(Wt, 2);
      {
        var pr = (L) => {
          var pe = zs(), Xe = C(pe);
          ie((gr) => Z(Xe, `Created: ${gr ?? ""}`), [() => d(g(o).created_at)]), V(L, pe);
        }, G = /* @__PURE__ */ tn(() => d(g(o).created_at));
        Se($t, (L) => {
          g(G) && L(pr);
        });
      }
      var ke = O($t, 2), Ee = C(ke), _e = C(Ee);
      ie(
        (L) => {
          Z(Jt, g(o).name || g(o)._id || "Codex"), Z(_e, L);
        },
        [
          () => g(o).code || g(o).source || g(o).code_preview || JSON.stringify(g(o), null, 2)
        ]
      ), xr("click", j, h), V(p, N);
    }, Fe = (p) => {
      var N = Vs();
      V(p, N);
    }, xe = (p) => {
      var N = Js(), j = is(N), $e = C(j), Kt = O(C($e), 2), Mt = O(j, 2), Jt = C(Mt), vr = C(Jt), hr = O(Jt, 2);
      {
        var Wt = (G) => {
          var ke = qs(), Ee = C(ke);
          ie(() => Z(Ee, `(${g(a).length ?? ""} matching)`)), V(G, ke);
        };
        Se(hr, (G) => {
          g(s) && g(a).length !== g(r).length && G(Wt);
        });
      }
      var _r = O(Mt, 2);
      {
        var $t = (G) => {
          var ke = Hs(), Ee = O(C(ke), 2), _e = C(Ee);
          ie(() => Z(_e, g(s) ? "No codexes match your search" : "No codexes found")), V(G, ke);
        }, pr = (G) => {
          var ke = Ks();
          Rs(ke, 21, () => g(a), (Ee) => Ee._id || Ee.name, (Ee, _e) => {
            var L = Gs(), pe = C(L), Xe = C(pe), gr = O(C(Xe), 2), Zn = C(gr), Jr = O(pe, 2);
            {
              var Qn = (Oe) => {
                var Nt = Us(), mr = C(Nt);
                ie(() => Z(mr, g(_e).description)), V(Oe, Nt);
              };
              Se(Jr, (Oe) => {
                g(_e).description && Oe(Qn);
              });
            }
            var Wr = O(Jr, 2);
            {
              var ei = (Oe) => {
                var Nt = Ys(), mr = C(Nt), ii = C(mr);
                ie((si) => Z(ii, si), [
                  () => g(_e).code_preview.split(`
`).slice(0, 3).join(`
`)
                ]), V(Oe, Nt);
              };
              Se(Wr, (Oe) => {
                g(_e).code_preview && Oe(ei);
              });
            }
            var ti = O(Wr, 2), ri = C(ti), ni = C(ri);
            ie(
              (Oe) => {
                Z(Zn, g(_e).name), Z(ni, `ID: ${Oe ?? ""}`);
              },
              [() => (g(_e)._id || "").substring(0, 8)]
            ), xr("click", L, () => _(g(_e))), V(Ee, L);
          }), V(G, ke);
        };
        Se(_r, (G) => {
          g(a).length === 0 ? G($t) : G(pr, -1);
        });
      }
      ie(() => Z(vr, `${g(r).length ?? ""} total codexes`)), Ds(Kt, () => g(s), (G) => D(s, G)), V(p, N);
    };
    Se(Y, (p) => {
      g(o) ? p(ne) : g(n) ? p(Fe, 1) : p(xe, -1);
    });
  }
  var We = O(Y, 2);
  {
    var X = (p) => {
      var N = Ws();
      V(p, N);
    };
    Se(We, (p) => {
      g(f) && p(X);
    });
  }
  ie(() => y.disabled = g(n)), xr("click", y, v), V(e, c), mn();
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
