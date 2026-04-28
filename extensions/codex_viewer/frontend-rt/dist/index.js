var ri = Object.defineProperty;
var Xr = (e) => {
  throw TypeError(e);
};
var ni = (e, t, r) => t in e ? ri(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var _e = (e, t, r) => ni(e, typeof t != "symbol" ? t + "" : t, r), mr = (e, t, r) => t.has(e) || Xr("Cannot " + r);
var l = (e, t, r) => (mr(e, t, "read from private field"), r ? r.call(e) : t.get(e)), g = (e, t, r) => t.has(e) ? Xr("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), y = (e, t, r, n) => (mr(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r), A = (e, t, r) => (mr(e, t, "access private method"), r);
var cn = Array.isArray, ii = Array.prototype.indexOf, Et = Array.prototype.includes, ur = Array.from, si = Object.defineProperty, Ot = Object.getOwnPropertyDescriptor, li = Object.prototype, ai = Array.prototype, fi = Object.getPrototypeOf, Zr = Object.isExtensible;
const oi = () => {
};
function ui(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function vn() {
  var e, t, r = new Promise((n, i) => {
    e = n, t = i;
  });
  return { promise: r, resolve: e, reject: t };
}
const j = 2, xt = 4, cr = 8, dn = 1 << 24, Ae = 16, ye = 32, Ke = 64, kr = 128, fe = 512, D = 1024, q = 2048, Ce = 4096, H = 8192, oe = 16384, dt = 32768, Qr = 1 << 25, kt = 65536, Sr = 1 << 17, ci = 1 << 18, Ct = 1 << 19, vi = 1 << 20, ze = 1 << 25, ut = 65536, ir = 1 << 21, It = 1 << 22, Ye = 1 << 23, wr = Symbol("$state"), Fe = new class extends Error {
  constructor() {
    super(...arguments);
    _e(this, "name", "StaleReactionError");
    _e(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
function di() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function hi(e, t, r) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function _i(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function pi() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function gi(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function mi() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function wi() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function bi() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function yi() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Ei() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
const xi = 1, ki = 2, Si = 16, Ti = 1, Ai = 2, I = Symbol(), Ci = "http://www.w3.org/1999/xhtml";
function Ni() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function Ri() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function hn(e) {
  return e === this.v;
}
function Mi(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function _n(e) {
  return !Mi(e, this.v);
}
let ce = null;
function St(e) {
  ce = e;
}
function pn(e, t = !1, r) {
  ce = {
    p: ce,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    r: (
      /** @type {Effect} */
      x
    ),
    l: null
  };
}
function gn(e) {
  var t = (
    /** @type {ComponentContext} */
    ce
  ), r = t.e;
  if (r !== null) {
    t.e = null;
    for (var n of r)
      zn(n);
  }
  return t.i = !0, ce = t.p, /** @type {T} */
  {};
}
function mn() {
  return !0;
}
let $e = [];
function wn() {
  var e = $e;
  $e = [], ui(e);
}
function pt(e) {
  if ($e.length === 0 && !Dt) {
    var t = $e;
    queueMicrotask(() => {
      t === $e && wn();
    });
  }
  $e.push(e);
}
function Fi() {
  for (; $e.length > 0; )
    wn();
}
function bn(e) {
  var t = x;
  if (t === null)
    return E.f |= Ye, e;
  if ((t.f & dt) === 0 && (t.f & xt) === 0)
    throw e;
  Ue(e, t);
}
function Ue(e, t) {
  for (; t !== null; ) {
    if ((t.f & kr) !== 0) {
      if ((t.f & dt) === 0)
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
const Oi = -7169;
function R(e, t) {
  e.f = e.f & Oi | t;
}
function zr(e) {
  (e.f & fe) !== 0 || e.deps === null ? R(e, D) : R(e, Ce);
}
function yn(e) {
  if (e !== null)
    for (const t of e)
      (t.f & j) === 0 || (t.f & ut) === 0 || (t.f ^= ut, yn(
        /** @type {Derived} */
        t.deps
      ));
}
function En(e, t, r) {
  (e.f & q) !== 0 ? t.add(e) : (e.f & Ce) !== 0 && r.add(e), yn(e.deps), R(e, D);
}
const Qe = /* @__PURE__ */ new Set();
let w = null, we = null, Tr = null, Dt = !1, br = !1, ht = null, Zt = null;
var $r = 0;
let Di = 1;
var gt, mt, rt, Oe, ke, Lt, $, Vt, Be, De, Se, wt, bt, nt, F, Qt, xn, $t, Ar, er, Pi;
const ar = class ar {
  constructor() {
    g(this, F);
    _e(this, "id", Di++);
    /**
     * The current values of any signals that are updated in this batch.
     * Tuple format: [value, is_derived] (note: is_derived is false for deriveds, too, if they were overridden via assignment)
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Value, [any, boolean]>}
     */
    _e(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any signals (sources and deriveds) that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Value, any>}
     */
    _e(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<(batch: Batch) => void>}
     */
    g(this, gt, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    g(this, mt, /* @__PURE__ */ new Set());
    /**
     * Callbacks that should run only when a fork is committed.
     * @type {Set<(batch: Batch) => void>}
     */
    g(this, rt, /* @__PURE__ */ new Set());
    /**
     * Async effects that are currently in flight
     * @type {Map<Effect, number>}
     */
    g(this, Oe, /* @__PURE__ */ new Map());
    /**
     * Async effects that are currently in flight, _not_ inside a pending boundary
     * @type {Map<Effect, number>}
     */
    g(this, ke, /* @__PURE__ */ new Map());
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    g(this, Lt, null);
    /**
     * The root effects that need to be flushed
     * @type {Effect[]}
     */
    g(this, $, []);
    /**
     * Effects created while this batch was active.
     * @type {Effect[]}
     */
    g(this, Vt, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    g(this, Be, /* @__PURE__ */ new Set());
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
    g(this, wt, /* @__PURE__ */ new Set());
    _e(this, "is_fork", !1);
    g(this, bt, !1);
    /** @type {Set<Batch>} */
    g(this, nt, /* @__PURE__ */ new Set());
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(t) {
    l(this, Se).has(t) || l(this, Se).set(t, { d: [], m: [] }), l(this, wt).delete(t);
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   * @param {(e: Effect) => void} callback
   */
  unskip_effect(t, r = (n) => this.schedule(n)) {
    var n = l(this, Se).get(t);
    if (n) {
      l(this, Se).delete(t);
      for (var i of n.d)
        R(i, q), r(i);
      for (i of n.m)
        R(i, Ce), r(i);
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
    w = this;
  }
  deactivate() {
    w = null, we = null;
  }
  flush() {
    try {
      br = !0, w = this, A(this, F, $t).call(this);
    } finally {
      $r = 0, Tr = null, ht = null, Zt = null, br = !1, w = null, we = null, at.clear();
    }
  }
  discard() {
    for (const t of l(this, mt)) t(this);
    l(this, mt).clear(), l(this, rt).clear(), Qe.delete(this);
  }
  /**
   * @param {Effect} effect
   */
  register_created_effect(t) {
    l(this, Vt).push(t);
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  increment(t, r) {
    let n = l(this, Oe).get(r) ?? 0;
    if (l(this, Oe).set(r, n + 1), t) {
      let i = l(this, ke).get(r) ?? 0;
      l(this, ke).set(r, i + 1);
    }
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   * @param {boolean} skip - whether to skip updates (because this is triggered by a stale reaction)
   */
  decrement(t, r, n) {
    let i = l(this, Oe).get(r) ?? 0;
    if (i === 1 ? l(this, Oe).delete(r) : l(this, Oe).set(r, i - 1), t) {
      let s = l(this, ke).get(r) ?? 0;
      s === 1 ? l(this, ke).delete(r) : l(this, ke).set(r, s - 1);
    }
    l(this, bt) || n || (y(this, bt, !0), pt(() => {
      y(this, bt, !1), this.flush();
    }));
  }
  /**
   * @param {Set<Effect>} dirty_effects
   * @param {Set<Effect>} maybe_dirty_effects
   */
  transfer_effects(t, r) {
    for (const n of t)
      l(this, Be).add(n);
    for (const n of r)
      l(this, De).add(n);
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
    l(this, rt).add(t);
  }
  run_fork_commit_callbacks() {
    for (const t of l(this, rt)) t(this);
    l(this, rt).clear();
  }
  settled() {
    return (l(this, Lt) ?? y(this, Lt, vn())).promise;
  }
  static ensure() {
    if (w === null) {
      const t = w = new ar();
      br || (Qe.add(w), Dt || pt(() => {
        w === t && t.flush();
      }));
    }
    return w;
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
    if (Tr = t, t.b?.is_pending && (t.f & (xt | cr | dn)) !== 0 && (t.f & dt) === 0) {
      t.b.defer_effect(t);
      return;
    }
    for (var r = t; r.parent !== null; ) {
      r = r.parent;
      var n = r.f;
      if (ht !== null && r === x && (E === null || (E.f & j) === 0))
        return;
      if ((n & (Ke | ye)) !== 0) {
        if ((n & D) === 0)
          return;
        r.f ^= D;
      }
    }
    l(this, $).push(r);
  }
};
gt = new WeakMap(), mt = new WeakMap(), rt = new WeakMap(), Oe = new WeakMap(), ke = new WeakMap(), Lt = new WeakMap(), $ = new WeakMap(), Vt = new WeakMap(), Be = new WeakMap(), De = new WeakMap(), Se = new WeakMap(), wt = new WeakMap(), bt = new WeakMap(), nt = new WeakMap(), F = new WeakSet(), Qt = function() {
  return this.is_fork || l(this, ke).size > 0;
}, xn = function() {
  for (const n of l(this, nt))
    for (const i of l(n, ke).keys()) {
      for (var t = !1, r = i; r.parent !== null; ) {
        if (l(this, Se).has(r)) {
          t = !0;
          break;
        }
        r = r.parent;
      }
      if (!t)
        return !0;
    }
  return !1;
}, $t = function() {
  var f;
  if ($r++ > 1e3 && (Qe.delete(this), zi()), !A(this, F, Qt).call(this)) {
    for (const a of l(this, Be))
      l(this, De).delete(a), R(a, q), this.schedule(a);
    for (const a of l(this, De))
      R(a, Ce), this.schedule(a);
  }
  const t = l(this, $);
  y(this, $, []), this.apply();
  var r = ht = [], n = [], i = Zt = [];
  for (const a of t)
    try {
      A(this, F, Ar).call(this, a, r, n);
    } catch (o) {
      throw Tn(a), o;
    }
  if (w = null, i.length > 0) {
    var s = ar.ensure();
    for (const a of i)
      s.schedule(a);
  }
  if (ht = null, Zt = null, A(this, F, Qt).call(this) || A(this, F, xn).call(this)) {
    A(this, F, er).call(this, n), A(this, F, er).call(this, r);
    for (const [a, o] of l(this, Se))
      Sn(a, o);
  } else {
    l(this, Oe).size === 0 && Qe.delete(this), l(this, Be).clear(), l(this, De).clear();
    for (const a of l(this, gt)) a(this);
    l(this, gt).clear(), en(n), en(r), l(this, Lt)?.resolve();
  }
  var u = (
    /** @type {Batch | null} */
    /** @type {unknown} */
    w
  );
  if (l(this, $).length > 0) {
    const a = u ?? (u = this);
    l(a, $).push(...l(this, $).filter((o) => !l(a, $).includes(o)));
  }
  u !== null && (Qe.add(u), A(f = u, F, $t).call(f));
}, /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
Ar = function(t, r, n) {
  t.f ^= D;
  for (var i = t.first; i !== null; ) {
    var s = i.f, u = (s & (ye | Ke)) !== 0, f = u && (s & D) !== 0, a = f || (s & H) !== 0 || l(this, Se).has(i);
    if (!a && i.fn !== null) {
      u ? i.f ^= D : (s & xt) !== 0 ? r.push(i) : Yt(i) && ((s & Ae) !== 0 && l(this, De).add(i), At(i));
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
er = function(t) {
  for (var r = 0; r < t.length; r += 1)
    En(t[r], l(this, Be), l(this, De));
}, Pi = function() {
  var v, _, h;
  for (const d of Qe) {
    var t = d.id < this.id, r = [];
    for (const [c, [m, b]] of this.current) {
      if (d.current.has(c)) {
        var n = (
          /** @type {[any, boolean]} */
          d.current.get(c)[0]
        );
        if (t && m !== n)
          d.current.set(c, [m, b]);
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
          d.unskip_effect(c, (m) => {
            var b;
            (m.f & (Ae | It)) !== 0 ? d.schedule(m) : A(b = d, F, er).call(b, [m]);
          });
      d.activate();
      var s = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Map();
      for (var f of r)
        kn(f, i, s, u);
      u = /* @__PURE__ */ new Map();
      var a = [...d.current.keys()].filter(
        (c) => this.current.has(c) ? (
          /** @type {[any, boolean]} */
          this.current.get(c)[0] !== c
        ) : !0
      );
      for (const c of l(this, Vt))
        (c.f & (oe | H | Sr)) === 0 && Lr(c, a, u) && ((c.f & (It | Ae)) !== 0 ? (R(c, q), d.schedule(c)) : l(d, Be).add(c));
      if (l(d, $).length > 0) {
        d.apply();
        for (var o of l(d, $))
          A(v = d, F, Ar).call(v, o, [], []);
        y(d, $, []);
      }
      d.deactivate();
    }
  }
  for (const d of Qe)
    l(d, nt).has(this) && (l(d, nt).delete(this), l(d, nt).size === 0 && !A(_ = d, F, Qt).call(_) && (d.activate(), A(h = d, F, $t).call(h)));
};
let ct = ar;
function Ii(e) {
  var t = Dt;
  Dt = !0;
  try {
    for (var r; ; ) {
      if (Fi(), w === null)
        return (
          /** @type {T} */
          r
        );
      w.flush();
    }
  } finally {
    Dt = t;
  }
}
function zi() {
  try {
    mi();
  } catch (e) {
    Ue(e, Tr);
  }
}
let Me = null;
function en(e) {
  var t = e.length;
  if (t !== 0) {
    for (var r = 0; r < t; ) {
      var n = e[r++];
      if ((n.f & (oe | H)) === 0 && Yt(n) && (Me = /* @__PURE__ */ new Set(), At(n), n.deps === null && n.first === null && n.nodes === null && n.teardown === null && n.ac === null && qn(n), Me?.size > 0)) {
        at.clear();
        for (const i of Me) {
          if ((i.f & (oe | H)) !== 0) continue;
          const s = [i];
          let u = i.parent;
          for (; u !== null; )
            Me.has(u) && (Me.delete(u), s.push(u)), u = u.parent;
          for (let f = s.length - 1; f >= 0; f--) {
            const a = s[f];
            (a.f & (oe | H)) === 0 && At(a);
          }
        }
        Me.clear();
      }
    }
    Me = null;
  }
}
function kn(e, t, r, n) {
  if (!r.has(e) && (r.add(e), e.reactions !== null))
    for (const i of e.reactions) {
      const s = i.f;
      (s & j) !== 0 ? kn(
        /** @type {Derived} */
        i,
        t,
        r,
        n
      ) : (s & (It | Ae)) !== 0 && (s & q) === 0 && Lr(i, t, n) && (R(i, q), Vr(
        /** @type {Effect} */
        i
      ));
    }
}
function Lr(e, t, r) {
  const n = r.get(e);
  if (n !== void 0) return n;
  if (e.deps !== null)
    for (const i of e.deps) {
      if (Et.call(t, i))
        return !0;
      if ((i.f & j) !== 0 && Lr(
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
function Vr(e) {
  w.schedule(e);
}
function Sn(e, t) {
  if (!((e.f & ye) !== 0 && (e.f & D) !== 0)) {
    (e.f & q) !== 0 ? t.d.push(e) : (e.f & Ce) !== 0 && t.m.push(e), R(e, D);
    for (var r = e.first; r !== null; )
      Sn(r, t), r = r.next;
  }
}
function Tn(e) {
  R(e, D);
  for (var t = e.first; t !== null; )
    Tn(t), t = t.next;
}
function Li(e) {
  let t = 0, r = vt(0), n;
  return () => {
    Hr() && (p(r), Ln(() => (t === 0 && (n = Xn(() => e(() => Pt(r)))), t += 1, () => {
      pt(() => {
        t -= 1, t === 0 && (n?.(), n = void 0, Pt(r));
      });
    })));
  };
}
var Vi = kt | Ct;
function qi(e, t, r, n) {
  new ji(e, t, r, n);
}
var ie, Ir, se, it, G, le, B, ee, Pe, st, He, yt, qt, jt, Ie, fr, C, Bi, Hi, Ui, Cr, tr, rr, Nr, Rr;
class ji {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(t, r, n, i) {
    g(this, C);
    /** @type {Boundary | null} */
    _e(this, "parent");
    _e(this, "is_pending", !1);
    /**
     * API-level transformError transform function. Transforms errors before they reach the `failed` snippet.
     * Inherited from parent boundary, or defaults to identity.
     * @type {(error: unknown) => unknown}
     */
    _e(this, "transform_error");
    /** @type {TemplateNode} */
    g(this, ie);
    /** @type {TemplateNode | null} */
    g(this, Ir, null);
    /** @type {BoundaryProps} */
    g(this, se);
    /** @type {((anchor: Node) => void)} */
    g(this, it);
    /** @type {Effect} */
    g(this, G);
    /** @type {Effect | null} */
    g(this, le, null);
    /** @type {Effect | null} */
    g(this, B, null);
    /** @type {Effect | null} */
    g(this, ee, null);
    /** @type {DocumentFragment | null} */
    g(this, Pe, null);
    g(this, st, 0);
    g(this, He, 0);
    g(this, yt, !1);
    /** @type {Set<Effect>} */
    g(this, qt, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    g(this, jt, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    g(this, Ie, null);
    g(this, fr, Li(() => (y(this, Ie, vt(l(this, st))), () => {
      y(this, Ie, null);
    })));
    y(this, ie, t), y(this, se, r), y(this, it, (s) => {
      var u = (
        /** @type {Effect} */
        x
      );
      u.b = this, u.f |= kr, n(s);
    }), this.parent = /** @type {Effect} */
    x.b, this.transform_error = i ?? this.parent?.transform_error ?? ((s) => s), y(this, G, Ur(() => {
      A(this, C, Cr).call(this);
    }, Vi));
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    En(t, l(this, qt), l(this, jt));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!l(this, se).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  update_pending_count(t, r) {
    A(this, C, Nr).call(this, t, r), y(this, st, l(this, st) + t), !(!l(this, Ie) || l(this, yt)) && (y(this, yt, !0), pt(() => {
      y(this, yt, !1), l(this, Ie) && Tt(l(this, Ie), l(this, st));
    }));
  }
  get_effect_pending() {
    return l(this, fr).call(this), p(
      /** @type {Source<number>} */
      l(this, Ie)
    );
  }
  /** @param {unknown} error */
  error(t) {
    if (!l(this, se).onerror && !l(this, se).failed)
      throw t;
    w?.is_fork ? (l(this, le) && w.skip_effect(l(this, le)), l(this, B) && w.skip_effect(l(this, B)), l(this, ee) && w.skip_effect(l(this, ee)), w.on_fork_commit(() => {
      A(this, C, Rr).call(this, t);
    })) : A(this, C, Rr).call(this, t);
  }
}
ie = new WeakMap(), Ir = new WeakMap(), se = new WeakMap(), it = new WeakMap(), G = new WeakMap(), le = new WeakMap(), B = new WeakMap(), ee = new WeakMap(), Pe = new WeakMap(), st = new WeakMap(), He = new WeakMap(), yt = new WeakMap(), qt = new WeakMap(), jt = new WeakMap(), Ie = new WeakMap(), fr = new WeakMap(), C = new WeakSet(), Bi = function() {
  try {
    y(this, le, ae(() => l(this, it).call(this, l(this, ie))));
  } catch (t) {
    this.error(t);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
Hi = function(t) {
  const r = l(this, se).failed;
  r && y(this, ee, ae(() => {
    r(
      l(this, ie),
      () => t,
      () => () => {
      }
    );
  }));
}, Ui = function() {
  const t = l(this, se).pending;
  t && (this.is_pending = !0, y(this, B, ae(() => t(l(this, ie)))), pt(() => {
    var r = y(this, Pe, document.createDocumentFragment()), n = Ge();
    r.append(n), y(this, le, A(this, C, rr).call(this, () => ae(() => l(this, it).call(this, n)))), l(this, He) === 0 && (l(this, ie).before(r), y(this, Pe, null), ft(
      /** @type {Effect} */
      l(this, B),
      () => {
        y(this, B, null);
      }
    ), A(this, C, tr).call(
      this,
      /** @type {Batch} */
      w
    ));
  }));
}, Cr = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), y(this, He, 0), y(this, st, 0), y(this, le, ae(() => {
      l(this, it).call(this, l(this, ie));
    })), l(this, He) > 0) {
      var t = y(this, Pe, document.createDocumentFragment());
      Kr(l(this, le), t);
      const r = (
        /** @type {(anchor: Node) => void} */
        l(this, se).pending
      );
      y(this, B, ae(() => r(l(this, ie))));
    } else
      A(this, C, tr).call(
        this,
        /** @type {Batch} */
        w
      );
  } catch (r) {
    this.error(r);
  }
}, /**
 * @param {Batch} batch
 */
tr = function(t) {
  this.is_pending = !1, t.transfer_effects(l(this, qt), l(this, jt));
}, /**
 * @template T
 * @param {() => T} fn
 */
rr = function(t) {
  var r = x, n = E, i = ce;
  Ne(l(this, G)), ve(l(this, G)), St(l(this, G).ctx);
  try {
    return ct.ensure(), t();
  } catch (s) {
    return bn(s), null;
  } finally {
    Ne(r), ve(n), St(i);
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
    this.parent && A(n = this.parent, C, Nr).call(n, t, r);
    return;
  }
  y(this, He, l(this, He) + t), l(this, He) === 0 && (A(this, C, tr).call(this, r), l(this, B) && ft(l(this, B), () => {
    y(this, B, null);
  }), l(this, Pe) && (l(this, ie).before(l(this, Pe)), y(this, Pe, null)));
}, /**
 * @param {unknown} error
 */
Rr = function(t) {
  l(this, le) && (W(l(this, le)), y(this, le, null)), l(this, B) && (W(l(this, B)), y(this, B, null)), l(this, ee) && (W(l(this, ee)), y(this, ee, null));
  var r = l(this, se).onerror;
  let n = l(this, se).failed;
  var i = !1, s = !1;
  const u = () => {
    if (i) {
      Ri();
      return;
    }
    i = !0, s && Ei(), l(this, ee) !== null && ft(l(this, ee), () => {
      y(this, ee, null);
    }), A(this, C, rr).call(this, () => {
      A(this, C, Cr).call(this);
    });
  }, f = (a) => {
    try {
      s = !0, r?.(a, u), s = !1;
    } catch (o) {
      Ue(o, l(this, G) && l(this, G).parent);
    }
    n && y(this, ee, A(this, C, rr).call(this, () => {
      try {
        return ae(() => {
          var o = (
            /** @type {Effect} */
            x
          );
          o.b = this, o.f |= kr, n(
            l(this, ie),
            () => a,
            () => u
          );
        });
      } catch (o) {
        return Ue(
          o,
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
    } catch (o) {
      Ue(o, l(this, G) && l(this, G).parent);
      return;
    }
    a !== null && typeof a == "object" && typeof /** @type {any} */
    a.then == "function" ? a.then(
      f,
      /** @param {unknown} e */
      (o) => Ue(o, l(this, G) && l(this, G).parent)
    ) : f(a);
  });
};
function Yi(e, t, r, n) {
  const i = qr;
  var s = e.filter((h) => !h.settled);
  if (r.length === 0 && s.length === 0) {
    n(t.map(i));
    return;
  }
  var u = (
    /** @type {Effect} */
    x
  ), f = Gi(), a = s.length === 1 ? s[0].promise : s.length > 1 ? Promise.all(s.map((h) => h.promise)) : null;
  function o(h) {
    f();
    try {
      n(h);
    } catch (d) {
      (u.f & oe) === 0 && Ue(d, u);
    }
    sr();
  }
  if (r.length === 0) {
    a.then(() => o(t.map(i)));
    return;
  }
  var v = An();
  function _() {
    Promise.all(r.map((h) => /* @__PURE__ */ Ki(h))).then((h) => o([...t.map(i), ...h])).catch((h) => Ue(h, u)).finally(() => v());
  }
  a ? a.then(() => {
    f(), _(), sr();
  }) : _();
}
function Gi() {
  var e = (
    /** @type {Effect} */
    x
  ), t = E, r = ce, n = (
    /** @type {Batch} */
    w
  );
  return function(s = !0) {
    Ne(e), ve(t), St(r), s && (e.f & oe) === 0 && (n?.activate(), n?.apply());
  };
}
function sr(e = !0) {
  Ne(null), ve(null), St(null), e && w?.deactivate();
}
function An() {
  var e = (
    /** @type {Effect} */
    x
  ), t = (
    /** @type {Boundary} */
    e.b
  ), r = (
    /** @type {Batch} */
    w
  ), n = t.is_rendered();
  return t.update_pending_count(1, r), r.increment(n, e), (i = !1) => {
    t.update_pending_count(-1, r), r.decrement(n, e, i);
  };
}
// @__NO_SIDE_EFFECTS__
function qr(e) {
  var t = j | q;
  return x !== null && (x.f |= Ct), {
    ctx: ce,
    deps: null,
    effects: null,
    equals: hn,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      I
    ),
    wv: 0,
    parent: x,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function Ki(e, t, r) {
  let n = (
    /** @type {Effect | null} */
    x
  );
  n === null && di();
  var i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), s = vt(
    /** @type {V} */
    I
  ), u = !E, f = /* @__PURE__ */ new Map();
  return us(() => {
    var a = (
      /** @type {Effect} */
      x
    ), o = vn();
    i = o.promise;
    try {
      Promise.resolve(e()).then(o.resolve, o.reject).finally(sr);
    } catch (d) {
      o.reject(d), sr();
    }
    var v = (
      /** @type {Batch} */
      w
    );
    if (u) {
      if ((a.f & dt) !== 0)
        var _ = An();
      if (
        /** @type {Boundary} */
        n.b.is_rendered()
      )
        f.get(v)?.reject(Fe), f.delete(v);
      else {
        for (const d of f.values())
          d.reject(Fe);
        f.clear();
      }
      f.set(v, o);
    }
    const h = (d, c = void 0) => {
      if (_) {
        var m = c === Fe;
        _(m);
      }
      if (!(c === Fe || (a.f & oe) !== 0)) {
        if (v.activate(), c)
          s.f |= Ye, Tt(s, c);
        else {
          (s.f & Ye) !== 0 && (s.f ^= Ye), Tt(s, d);
          for (const [b, T] of f) {
            if (f.delete(b), b === v) break;
            T.reject(Fe);
          }
        }
        v.deactivate();
      }
    };
    o.promise.then(h, (d) => h(null, d || "unknown"));
  }), ls(() => {
    for (const a of f.values())
      a.reject(Fe);
  }), new Promise((a) => {
    function o(v) {
      function _() {
        v === i ? a(s) : o(i);
      }
      v.then(_, _);
    }
    o(i);
  });
}
// @__NO_SIDE_EFFECTS__
function Ji(e) {
  const t = /* @__PURE__ */ qr(e);
  return Hn(t), t;
}
// @__NO_SIDE_EFFECTS__
function Wi(e) {
  const t = /* @__PURE__ */ qr(e);
  return t.equals = _n, t;
}
function Xi(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var r = 0; r < t.length; r += 1)
      W(
        /** @type {Effect} */
        t[r]
      );
  }
}
function jr(e) {
  var t, r = x, n = e.parent;
  if (!Je && n !== null && (n.f & (oe | H)) !== 0)
    return Ni(), e.v;
  Ne(n);
  try {
    e.f &= ~ut, Xi(e), t = Kn(e);
  } finally {
    Ne(r);
  }
  return t;
}
function Cn(e) {
  var t = jr(e);
  if (!e.equals(t) && (e.wv = Yn(), (!w?.is_fork || e.deps === null) && (w !== null ? w.capture(e, t, !0) : e.v = t, e.deps === null))) {
    R(e, D);
    return;
  }
  Je || (we !== null ? (Hr() || w?.is_fork) && we.set(e, t) : zr(e));
}
function Zi(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      (t.teardown || t.ac) && (t.teardown?.(), t.ac?.abort(Fe), t.teardown = oi, t.ac = null, zt(t, 0), Yr(t));
}
function Nn(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      t.teardown && At(t);
}
let Mr = /* @__PURE__ */ new Set();
const at = /* @__PURE__ */ new Map();
let Rn = !1;
function vt(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: hn,
    rv: 0,
    wv: 0
  };
  return r;
}
// @__NO_SIDE_EFFECTS__
function K(e, t) {
  const r = vt(e);
  return Hn(r), r;
}
// @__NO_SIDE_EFFECTS__
function Qi(e, t = !1, r = !0) {
  const n = vt(e);
  return t || (n.equals = _n), n;
}
function O(e, t, r = !1) {
  E !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!be || (E.f & Sr) !== 0) && mn() && (E.f & (j | Ae | It | Sr)) !== 0 && (ue === null || !Et.call(ue, e)) && yi();
  let n = r ? _t(t) : t;
  return Tt(e, n, Zt);
}
function Tt(e, t, r = null) {
  if (!e.equals(t)) {
    at.set(e, Je ? t : e.v);
    var n = ct.ensure();
    if (n.capture(e, t), (e.f & j) !== 0) {
      const i = (
        /** @type {Derived} */
        e
      );
      (e.f & q) !== 0 && jr(i), we === null && zr(i);
    }
    e.wv = Yn(), Mn(e, q, r), x !== null && (x.f & D) !== 0 && (x.f & (ye | Ke)) === 0 && (ne === null ? ds([e]) : ne.push(e)), !n.is_fork && Mr.size > 0 && !Rn && $i();
  }
  return t;
}
function $i() {
  Rn = !1;
  for (const e of Mr)
    (e.f & D) !== 0 && R(e, Ce), Yt(e) && At(e);
  Mr.clear();
}
function Pt(e) {
  O(e, e.v + 1);
}
function Mn(e, t, r) {
  var n = e.reactions;
  if (n !== null)
    for (var i = n.length, s = 0; s < i; s++) {
      var u = n[s], f = u.f, a = (f & q) === 0;
      if (a && R(u, t), (f & j) !== 0) {
        var o = (
          /** @type {Derived} */
          u
        );
        we?.delete(o), (f & ut) === 0 && (f & fe && (x === null || (x.f & ir) === 0) && (u.f |= ut), Mn(o, Ce, r));
      } else if (a) {
        var v = (
          /** @type {Effect} */
          u
        );
        (f & Ae) !== 0 && Me !== null && Me.add(v), r !== null ? r.push(v) : Vr(v);
      }
    }
}
function _t(e) {
  if (typeof e != "object" || e === null || wr in e)
    return e;
  const t = fi(e);
  if (t !== li && t !== ai)
    return e;
  var r = /* @__PURE__ */ new Map(), n = cn(e), i = /* @__PURE__ */ K(0), s = ot, u = (f) => {
    if (ot === s)
      return f();
    var a = E, o = ot;
    ve(null), ln(s);
    var v = f();
    return ve(a), ln(o), v;
  };
  return n && r.set("length", /* @__PURE__ */ K(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(f, a, o) {
        (!("value" in o) || o.configurable === !1 || o.enumerable === !1 || o.writable === !1) && wi();
        var v = r.get(a);
        return v === void 0 ? u(() => {
          var _ = /* @__PURE__ */ K(o.value);
          return r.set(a, _), _;
        }) : O(v, o.value, !0), !0;
      },
      deleteProperty(f, a) {
        var o = r.get(a);
        if (o === void 0) {
          if (a in f) {
            const v = u(() => /* @__PURE__ */ K(I));
            r.set(a, v), Pt(i);
          }
        } else
          O(o, I), Pt(i);
        return !0;
      },
      get(f, a, o) {
        if (a === wr)
          return e;
        var v = r.get(a), _ = a in f;
        if (v === void 0 && (!_ || Ot(f, a)?.writable) && (v = u(() => {
          var d = _t(_ ? f[a] : I), c = /* @__PURE__ */ K(d);
          return c;
        }), r.set(a, v)), v !== void 0) {
          var h = p(v);
          return h === I ? void 0 : h;
        }
        return Reflect.get(f, a, o);
      },
      getOwnPropertyDescriptor(f, a) {
        var o = Reflect.getOwnPropertyDescriptor(f, a);
        if (o && "value" in o) {
          var v = r.get(a);
          v && (o.value = p(v));
        } else if (o === void 0) {
          var _ = r.get(a), h = _?.v;
          if (_ !== void 0 && h !== I)
            return {
              enumerable: !0,
              configurable: !0,
              value: h,
              writable: !0
            };
        }
        return o;
      },
      has(f, a) {
        if (a === wr)
          return !0;
        var o = r.get(a), v = o !== void 0 && o.v !== I || Reflect.has(f, a);
        if (o !== void 0 || x !== null && (!v || Ot(f, a)?.writable)) {
          o === void 0 && (o = u(() => {
            var h = v ? _t(f[a]) : I, d = /* @__PURE__ */ K(h);
            return d;
          }), r.set(a, o));
          var _ = p(o);
          if (_ === I)
            return !1;
        }
        return v;
      },
      set(f, a, o, v) {
        var _ = r.get(a), h = a in f;
        if (n && a === "length")
          for (var d = o; d < /** @type {Source<number>} */
          _.v; d += 1) {
            var c = r.get(d + "");
            c !== void 0 ? O(c, I) : d in f && (c = u(() => /* @__PURE__ */ K(I)), r.set(d + "", c));
          }
        if (_ === void 0)
          (!h || Ot(f, a)?.writable) && (_ = u(() => /* @__PURE__ */ K(void 0)), O(_, _t(o)), r.set(a, _));
        else {
          h = _.v !== I;
          var m = u(() => _t(o));
          O(_, m);
        }
        var b = Reflect.getOwnPropertyDescriptor(f, a);
        if (b?.set && b.set.call(v, o), !h) {
          if (n && typeof a == "string") {
            var T = (
              /** @type {Source<number>} */
              r.get("length")
            ), S = Number(a);
            Number.isInteger(S) && S >= T.v && O(T, S + 1);
          }
          Pt(i);
        }
        return !0;
      },
      ownKeys(f) {
        p(i);
        var a = Reflect.ownKeys(f).filter((_) => {
          var h = r.get(_);
          return h === void 0 || h.v !== I;
        });
        for (var [o, v] of r)
          v.v !== I && !(o in f) && a.push(o);
        return a;
      },
      setPrototypeOf() {
        bi();
      }
    }
  );
}
var tn, Fn, On, Dn;
function es() {
  if (tn === void 0) {
    tn = window, Fn = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, r = Text.prototype;
    On = Ot(t, "firstChild").get, Dn = Ot(t, "nextSibling").get, Zr(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), Zr(r) && (r.__t = void 0);
  }
}
function Ge(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function lr(e) {
  return (
    /** @type {TemplateNode | null} */
    On.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function Ut(e) {
  return (
    /** @type {TemplateNode | null} */
    Dn.call(e)
  );
}
function z(e, t) {
  return /* @__PURE__ */ lr(e);
}
function rn(e, t = !1) {
  {
    var r = /* @__PURE__ */ lr(e);
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ Ut(r) : r;
  }
}
function re(e, t = 1, r = !1) {
  let n = e;
  for (; t--; )
    n = /** @type {TemplateNode} */
    /* @__PURE__ */ Ut(n);
  return n;
}
function ts(e) {
  e.textContent = "";
}
function Pn() {
  return !1;
}
function In(e, t, r) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElementNS(Ci, e, void 0)
  );
}
let nn = !1;
function rs() {
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
function Br(e) {
  var t = E, r = x;
  ve(null), Ne(null);
  try {
    return e();
  } finally {
    ve(t), Ne(r);
  }
}
function ns(e, t, r, n = r) {
  e.addEventListener(t, () => Br(r));
  const i = e.__on_r;
  i ? e.__on_r = () => {
    i(), n(!0);
  } : e.__on_r = () => n(!0), rs();
}
function is(e) {
  x === null && (E === null && gi(), pi()), Je && _i();
}
function ss(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function Le(e, t) {
  var r = x;
  r !== null && (r.f & H) !== 0 && (e |= H);
  var n = {
    ctx: ce,
    deps: null,
    nodes: null,
    f: e | q | fe,
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
  w?.register_created_effect(n);
  var i = n;
  if ((e & xt) !== 0)
    ht !== null ? ht.push(n) : ct.ensure().schedule(n);
  else if (t !== null) {
    try {
      At(n);
    } catch (u) {
      throw W(n), u;
    }
    i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && // either `null`, or a singular child
    (i.f & Ct) === 0 && (i = i.first, (e & Ae) !== 0 && (e & kt) !== 0 && i !== null && (i.f |= kt));
  }
  if (i !== null && (i.parent = r, r !== null && ss(i, r), E !== null && (E.f & j) !== 0 && (e & Ke) === 0)) {
    var s = (
      /** @type {Derived} */
      E
    );
    (s.effects ?? (s.effects = [])).push(i);
  }
  return n;
}
function Hr() {
  return E !== null && !be;
}
function ls(e) {
  const t = Le(cr, null);
  return R(t, D), t.teardown = e, t;
}
function as(e) {
  is();
  var t = (
    /** @type {Effect} */
    x.f
  ), r = !E && (t & ye) !== 0 && (t & dt) === 0;
  if (r) {
    var n = (
      /** @type {ComponentContext} */
      ce
    );
    (n.e ?? (n.e = [])).push(e);
  } else
    return zn(e);
}
function zn(e) {
  return Le(xt | vi, e);
}
function fs(e) {
  ct.ensure();
  const t = Le(Ke | Ct, e);
  return (r = {}) => new Promise((n) => {
    r.outro ? ft(t, () => {
      W(t), n(void 0);
    }) : (W(t), n(void 0));
  });
}
function os(e) {
  return Le(xt, e);
}
function us(e) {
  return Le(It | Ct, e);
}
function Ln(e, t = 0) {
  return Le(cr | t, e);
}
function pe(e, t = [], r = [], n = []) {
  Yi(n, t, r, (i) => {
    Le(cr, () => e(...i.map(p)));
  });
}
function Ur(e, t = 0) {
  var r = Le(Ae | t, e);
  return r;
}
function ae(e) {
  return Le(ye | Ct, e);
}
function Vn(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = Je, n = E;
    sn(!0), ve(null);
    try {
      t.call(null);
    } finally {
      sn(r), ve(n);
    }
  }
}
function Yr(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    const i = r.ac;
    i !== null && Br(() => {
      i.abort(Fe);
    });
    var n = r.next;
    (r.f & Ke) !== 0 ? r.parent = null : W(r, t), r = n;
  }
}
function cs(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & ye) === 0 && W(t), t = r;
  }
}
function W(e, t = !0) {
  var r = !1;
  (t || (e.f & ci) !== 0) && e.nodes !== null && e.nodes.end !== null && (vs(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), r = !0), R(e, Qr), Yr(e, t && !r), zt(e, 0);
  var n = e.nodes && e.nodes.t;
  if (n !== null)
    for (const s of n)
      s.stop();
  Vn(e), e.f ^= Qr, e.f |= oe;
  var i = e.parent;
  i !== null && i.first !== null && qn(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function vs(e, t) {
  for (; e !== null; ) {
    var r = e === t ? null : /* @__PURE__ */ Ut(e);
    e.remove(), e = r;
  }
}
function qn(e) {
  var t = e.parent, r = e.prev, n = e.next;
  r !== null && (r.next = n), n !== null && (n.prev = r), t !== null && (t.first === e && (t.first = n), t.last === e && (t.last = r));
}
function ft(e, t, r = !0) {
  var n = [];
  jn(e, n, !0);
  var i = () => {
    r && W(e), t && t();
  }, s = n.length;
  if (s > 0) {
    var u = () => --s || i();
    for (var f of n)
      f.out(u);
  } else
    i();
}
function jn(e, t, r) {
  if ((e.f & H) === 0) {
    e.f ^= H;
    var n = e.nodes && e.nodes.t;
    if (n !== null)
      for (const f of n)
        (f.is_global || r) && t.push(f);
    for (var i = e.first; i !== null; ) {
      var s = i.next;
      if ((i.f & Ke) === 0) {
        var u = (i.f & kt) !== 0 || // If this is a branch effect without a block effect parent,
        // it means the parent block effect was pruned. In that case,
        // transparency information was transferred to the branch effect.
        (i.f & ye) !== 0 && (e.f & Ae) !== 0;
        jn(i, t, u ? r : !1);
      }
      i = s;
    }
  }
}
function Gr(e) {
  Bn(e, !0);
}
function Bn(e, t) {
  if ((e.f & H) !== 0) {
    e.f ^= H, (e.f & D) === 0 && (R(e, q), ct.ensure().schedule(e));
    for (var r = e.first; r !== null; ) {
      var n = r.next, i = (r.f & kt) !== 0 || (r.f & ye) !== 0;
      Bn(r, i ? t : !1), r = n;
    }
    var s = e.nodes && e.nodes.t;
    if (s !== null)
      for (const u of s)
        (u.is_global || t) && u.in();
  }
}
function Kr(e, t) {
  if (e.nodes)
    for (var r = e.nodes.start, n = e.nodes.end; r !== null; ) {
      var i = r === n ? null : /* @__PURE__ */ Ut(r);
      t.append(r), r = i;
    }
}
let nr = !1, Je = !1;
function sn(e) {
  Je = e;
}
let E = null, be = !1;
function ve(e) {
  E = e;
}
let x = null;
function Ne(e) {
  x = e;
}
let ue = null;
function Hn(e) {
  E !== null && (ue === null ? ue = [e] : ue.push(e));
}
let J = null, Q = 0, ne = null;
function ds(e) {
  ne = e;
}
let Un = 1, et = 0, ot = et;
function ln(e) {
  ot = e;
}
function Yn() {
  return ++Un;
}
function Yt(e) {
  var t = e.f;
  if ((t & q) !== 0)
    return !0;
  if (t & j && (e.f &= ~ut), (t & Ce) !== 0) {
    for (var r = (
      /** @type {Value[]} */
      e.deps
    ), n = r.length, i = 0; i < n; i++) {
      var s = r[i];
      if (Yt(
        /** @type {Derived} */
        s
      ) && Cn(
        /** @type {Derived} */
        s
      ), s.wv > e.wv)
        return !0;
    }
    (t & fe) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    we === null && R(e, D);
  }
  return !1;
}
function Gn(e, t, r = !0) {
  var n = e.reactions;
  if (n !== null && !(ue !== null && Et.call(ue, e)))
    for (var i = 0; i < n.length; i++) {
      var s = n[i];
      (s.f & j) !== 0 ? Gn(
        /** @type {Derived} */
        s,
        t,
        !1
      ) : t === s && (r ? R(s, q) : (s.f & D) !== 0 && R(s, Ce), Vr(
        /** @type {Effect} */
        s
      ));
    }
}
function Kn(e) {
  var m;
  var t = J, r = Q, n = ne, i = E, s = ue, u = ce, f = be, a = ot, o = e.f;
  J = /** @type {null | Value[]} */
  null, Q = 0, ne = null, E = (o & (ye | Ke)) === 0 ? e : null, ue = null, St(e.ctx), be = !1, ot = ++et, e.ac !== null && (Br(() => {
    e.ac.abort(Fe);
  }), e.ac = null);
  try {
    e.f |= ir;
    var v = (
      /** @type {Function} */
      e.fn
    ), _ = v();
    e.f |= dt;
    var h = e.deps, d = w?.is_fork;
    if (J !== null) {
      var c;
      if (d || zt(e, Q), h !== null && Q > 0)
        for (h.length = Q + J.length, c = 0; c < J.length; c++)
          h[Q + c] = J[c];
      else
        e.deps = h = J;
      if (Hr() && (e.f & fe) !== 0)
        for (c = Q; c < h.length; c++)
          ((m = h[c]).reactions ?? (m.reactions = [])).push(e);
    } else !d && h !== null && Q < h.length && (zt(e, Q), h.length = Q);
    if (mn() && ne !== null && !be && h !== null && (e.f & (j | Ce | q)) === 0)
      for (c = 0; c < /** @type {Source[]} */
      ne.length; c++)
        Gn(
          ne[c],
          /** @type {Effect} */
          e
        );
    if (i !== null && i !== e) {
      if (et++, i.deps !== null)
        for (let b = 0; b < r; b += 1)
          i.deps[b].rv = et;
      if (t !== null)
        for (const b of t)
          b.rv = et;
      ne !== null && (n === null ? n = ne : n.push(.../** @type {Source[]} */
      ne));
    }
    return (e.f & Ye) !== 0 && (e.f ^= Ye), _;
  } catch (b) {
    return bn(b);
  } finally {
    e.f ^= ir, J = t, Q = r, ne = n, E = i, ue = s, St(u), be = f, ot = a;
  }
}
function hs(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var n = ii.call(r, e);
    if (n !== -1) {
      var i = r.length - 1;
      i === 0 ? r = t.reactions = null : (r[n] = r[i], r.pop());
    }
  }
  if (r === null && (t.f & j) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (J === null || !Et.call(J, t))) {
    var s = (
      /** @type {Derived} */
      t
    );
    (s.f & fe) !== 0 && (s.f ^= fe, s.f &= ~ut), s.v !== I && zr(s), Zi(s), zt(s, 0);
  }
}
function zt(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var n = t; n < r.length; n++)
      hs(e, r[n]);
}
function At(e) {
  var t = e.f;
  if ((t & oe) === 0) {
    R(e, D);
    var r = x, n = nr;
    x = e, nr = !0;
    try {
      (t & (Ae | dn)) !== 0 ? cs(e) : Yr(e), Vn(e);
      var i = Kn(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = Un;
      var s;
    } finally {
      nr = n, x = r;
    }
  }
}
async function _s() {
  await Promise.resolve(), Ii();
}
function p(e) {
  var t = e.f, r = (t & j) !== 0;
  if (E !== null && !be) {
    var n = x !== null && (x.f & oe) !== 0;
    if (!n && (ue === null || !Et.call(ue, e))) {
      var i = E.deps;
      if ((E.f & ir) !== 0)
        e.rv < et && (e.rv = et, J === null && i !== null && i[Q] === e ? Q++ : J === null ? J = [e] : J.push(e));
      else {
        (E.deps ?? (E.deps = [])).push(e);
        var s = e.reactions;
        s === null ? e.reactions = [E] : Et.call(s, E) || s.push(E);
      }
    }
  }
  if (Je && at.has(e))
    return at.get(e);
  if (r) {
    var u = (
      /** @type {Derived} */
      e
    );
    if (Je) {
      var f = u.v;
      return ((u.f & D) === 0 && u.reactions !== null || Wn(u)) && (f = jr(u)), at.set(u, f), f;
    }
    var a = (u.f & fe) === 0 && !be && E !== null && (nr || (E.f & fe) !== 0), o = (u.f & dt) === 0;
    Yt(u) && (a && (u.f |= fe), Cn(u)), a && !o && (Nn(u), Jn(u));
  }
  if (we?.has(e))
    return we.get(e);
  if ((e.f & Ye) !== 0)
    throw e.v;
  return e.v;
}
function Jn(e) {
  if (e.f |= fe, e.deps !== null)
    for (const t of e.deps)
      (t.reactions ?? (t.reactions = [])).push(e), (t.f & j) !== 0 && (t.f & fe) === 0 && (Nn(
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
    if (at.has(t) || (t.f & j) !== 0 && Wn(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function Xn(e) {
  var t = be;
  try {
    return be = !0, e();
  } finally {
    be = t;
  }
}
const ps = ["touchstart", "touchmove"];
function gs(e) {
  return ps.includes(e);
}
const tt = Symbol("events"), Zn = /* @__PURE__ */ new Set(), Fr = /* @__PURE__ */ new Set();
function yr(e, t, r) {
  (t[tt] ?? (t[tt] = {}))[e] = r;
}
function ms(e) {
  for (var t = 0; t < e.length; t++)
    Zn.add(e[t]);
  for (var r of Fr)
    r(e);
}
let an = null;
function fn(e) {
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), n = e.type, i = e.composedPath?.() || [], s = (
    /** @type {null | Element} */
    i[0] || e.target
  );
  an = e;
  var u = 0, f = an === e && e[tt];
  if (f) {
    var a = i.indexOf(f);
    if (a !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e[tt] = t;
      return;
    }
    var o = i.indexOf(t);
    if (o === -1)
      return;
    a <= o && (u = a);
  }
  if (s = /** @type {Element} */
  i[u] || e.target, s !== t) {
    si(e, "currentTarget", {
      configurable: !0,
      get() {
        return s || r;
      }
    });
    var v = E, _ = x;
    ve(null), Ne(null);
    try {
      for (var h, d = []; s !== null; ) {
        var c = s.assignedSlot || s.parentNode || /** @type {any} */
        s.host || null;
        try {
          var m = s[tt]?.[n];
          m != null && (!/** @type {any} */
          s.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === s) && m.call(s, e);
        } catch (b) {
          h ? d.push(b) : h = b;
        }
        if (e.cancelBubble || c === t || c === null)
          break;
        s = c;
      }
      if (h) {
        for (let b of d)
          queueMicrotask(() => {
            throw b;
          });
        throw h;
      }
    } finally {
      e[tt] = t, delete e.currentTarget, ve(v), Ne(_);
    }
  }
}
const ws = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (e) => e
  })
);
function bs(e) {
  return (
    /** @type {string} */
    ws?.createHTML(e) ?? e
  );
}
function ys(e) {
  var t = In("template");
  return t.innerHTML = bs(e.replaceAll("<!>", "<!---->")), t.content;
}
function Or(e, t) {
  var r = (
    /** @type {Effect} */
    x
  );
  r.nodes === null && (r.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function U(e, t) {
  var r = (t & Ti) !== 0, n = (t & Ai) !== 0, i, s = !e.startsWith("<!>");
  return () => {
    i === void 0 && (i = ys(s ? e : "<!>" + e), r || (i = /** @type {TemplateNode} */
    /* @__PURE__ */ lr(i)));
    var u = (
      /** @type {TemplateNode} */
      n || Fn ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (r) {
      var f = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ lr(u)
      ), a = (
        /** @type {TemplateNode} */
        u.lastChild
      );
      Or(f, a);
    } else
      Or(u, u);
    return u;
  };
}
function Es() {
  var e = document.createDocumentFragment(), t = document.createComment(""), r = Ge();
  return e.append(t, r), Or(t, r), e;
}
function V(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function ge(e, t) {
  var r = t == null ? "" : typeof t == "object" ? `${t}` : t;
  r !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = r, e.nodeValue = `${r}`);
}
function xs(e, t) {
  return ks(e, t);
}
const Wt = /* @__PURE__ */ new Map();
function ks(e, { target: t, anchor: r, props: n = {}, events: i, context: s, intro: u = !0, transformError: f }) {
  es();
  var a = void 0, o = fs(() => {
    var v = r ?? t.appendChild(Ge());
    qi(
      /** @type {TemplateNode} */
      v,
      {
        pending: () => {
        }
      },
      (d) => {
        pn({});
        var c = (
          /** @type {ComponentContext} */
          ce
        );
        s && (c.c = s), i && (n.$$events = i), a = e(d, n) || {}, gn();
      },
      f
    );
    var _ = /* @__PURE__ */ new Set(), h = (d) => {
      for (var c = 0; c < d.length; c++) {
        var m = d[c];
        if (!_.has(m)) {
          _.add(m);
          var b = gs(m);
          for (const Y of [t, document]) {
            var T = Wt.get(Y);
            T === void 0 && (T = /* @__PURE__ */ new Map(), Wt.set(Y, T));
            var S = T.get(m);
            S === void 0 ? (Y.addEventListener(m, fn, { passive: b }), T.set(m, 1)) : T.set(m, S + 1);
          }
        }
      }
    };
    return h(ur(Zn)), Fr.add(h), () => {
      for (var d of _)
        for (const b of [t, document]) {
          var c = (
            /** @type {Map<string, number>} */
            Wt.get(b)
          ), m = (
            /** @type {number} */
            c.get(d)
          );
          --m == 0 ? (b.removeEventListener(d, fn), c.delete(d), c.size === 0 && Wt.delete(b)) : c.set(d, m);
        }
      Fr.delete(h), v !== r && v.parentNode?.removeChild(v);
    };
  });
  return Dr.set(a, o), a;
}
let Dr = /* @__PURE__ */ new WeakMap();
function Ss(e, t) {
  const r = Dr.get(e);
  return r ? (Dr.delete(e), r(t)) : Promise.resolve();
}
var me, Te, te, lt, Bt, Ht, or;
class Ts {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, r = !0) {
    /** @type {TemplateNode} */
    _e(this, "anchor");
    /** @type {Map<Batch, Key>} */
    g(this, me, /* @__PURE__ */ new Map());
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
    g(this, Te, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    g(this, te, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    g(this, lt, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    g(this, Bt, !0);
    /**
     * @param {Batch} batch
     */
    g(this, Ht, (t) => {
      if (l(this, me).has(t)) {
        var r = (
          /** @type {Key} */
          l(this, me).get(t)
        ), n = l(this, Te).get(r);
        if (n)
          Gr(n), l(this, lt).delete(r);
        else {
          var i = l(this, te).get(r);
          i && (l(this, Te).set(r, i.effect), l(this, te).delete(r), i.fragment.lastChild.remove(), this.anchor.before(i.fragment), n = i.effect);
        }
        for (const [s, u] of l(this, me)) {
          if (l(this, me).delete(s), s === t)
            break;
          const f = l(this, te).get(u);
          f && (W(f.effect), l(this, te).delete(u));
        }
        for (const [s, u] of l(this, Te)) {
          if (s === r || l(this, lt).has(s)) continue;
          const f = () => {
            if (Array.from(l(this, me).values()).includes(s)) {
              var o = document.createDocumentFragment();
              Kr(u, o), o.append(Ge()), l(this, te).set(s, { effect: u, fragment: o });
            } else
              W(u);
            l(this, lt).delete(s), l(this, Te).delete(s);
          };
          l(this, Bt) || !n ? (l(this, lt).add(s), ft(u, f, !1)) : f();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    g(this, or, (t) => {
      l(this, me).delete(t);
      const r = Array.from(l(this, me).values());
      for (const [n, i] of l(this, te))
        r.includes(n) || (W(i.effect), l(this, te).delete(n));
    });
    this.anchor = t, y(this, Bt, r);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, r) {
    var n = (
      /** @type {Batch} */
      w
    ), i = Pn();
    if (r && !l(this, Te).has(t) && !l(this, te).has(t))
      if (i) {
        var s = document.createDocumentFragment(), u = Ge();
        s.append(u), l(this, te).set(t, {
          effect: ae(() => r(u)),
          fragment: s
        });
      } else
        l(this, Te).set(
          t,
          ae(() => r(this.anchor))
        );
    if (l(this, me).set(n, t), i) {
      for (const [f, a] of l(this, Te))
        f === t ? n.unskip_effect(a) : n.skip_effect(a);
      for (const [f, a] of l(this, te))
        f === t ? n.unskip_effect(a.effect) : n.skip_effect(a.effect);
      n.oncommit(l(this, Ht)), n.ondiscard(l(this, or));
    } else
      l(this, Ht).call(this, n);
  }
}
me = new WeakMap(), Te = new WeakMap(), te = new WeakMap(), lt = new WeakMap(), Bt = new WeakMap(), Ht = new WeakMap(), or = new WeakMap();
function xe(e, t, r = !1) {
  var n = new Ts(e), i = r ? kt : 0;
  function s(u, f) {
    n.ensure(u, f);
  }
  Ur(() => {
    var u = !1;
    t((f, a = 0) => {
      u = !0, s(a, f);
    }), u || s(-1, null);
  }, i);
}
function As(e, t, r) {
  for (var n = [], i = t.length, s, u = t.length, f = 0; f < i; f++) {
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
            Pr(e, ur(s.done)), h.delete(s), h.size === 0 && (e.outrogroups = null);
          }
        } else
          u -= 1;
      },
      !1
    );
  }
  if (u === 0) {
    var a = n.length === 0 && r !== null;
    if (a) {
      var o = (
        /** @type {Element} */
        r
      ), v = (
        /** @type {Element} */
        o.parentNode
      );
      ts(v), v.append(o), e.items.clear();
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
    for (const u of e.pending.values())
      for (const f of u)
        n.add(
          /** @type {EachItem} */
          e.items.get(f).e
        );
  }
  for (var i = 0; i < t.length; i++) {
    var s = t[i];
    if (n?.has(s)) {
      s.f |= ze;
      const u = document.createDocumentFragment();
      Kr(s, u);
    } else
      W(t[i], r);
  }
}
var on;
function Cs(e, t, r, n, i, s = null) {
  var u = e, f = /* @__PURE__ */ new Map();
  {
    var a = (
      /** @type {Element} */
      e
    );
    u = a.appendChild(Ge());
  }
  var o = null, v = /* @__PURE__ */ Wi(() => {
    var S = r();
    return cn(S) ? S : S == null ? [] : ur(S);
  }), _, h = /* @__PURE__ */ new Map(), d = !0;
  function c(S) {
    (T.effect.f & oe) === 0 && (T.pending.delete(S), T.fallback = o, Ns(T, _, u, t, n), o !== null && (_.length === 0 ? (o.f & ze) === 0 ? Gr(o) : (o.f ^= ze, Ft(o, null, u)) : ft(o, () => {
      o = null;
    })));
  }
  function m(S) {
    T.pending.delete(S);
  }
  var b = Ur(() => {
    _ = /** @type {V[]} */
    p(v);
    for (var S = _.length, Y = /* @__PURE__ */ new Set(), X = (
      /** @type {Batch} */
      w
    ), Re = Pn(), de = 0; de < S; de += 1) {
      var We = _[de], Z = n(We, de), he = d ? null : f.get(Z);
      he ? (he.v && Tt(he.v, We), he.i && Tt(he.i, de), Re && X.unskip_effect(he.e)) : (he = Rs(
        f,
        d ? u : on ?? (on = Ge()),
        We,
        Z,
        de,
        i,
        t,
        r
      ), d || (he.e.f |= ze), f.set(Z, he)), Y.add(Z);
    }
    if (S === 0 && s && !o && (d ? o = ae(() => s(u)) : (o = ae(() => s(on ?? (on = Ge()))), o.f |= ze)), S > Y.size && hi(), !d)
      if (h.set(X, Y), Re) {
        for (const [vr, k] of f)
          Y.has(vr) || X.skip_effect(k.e);
        X.oncommit(c), X.ondiscard(m);
      } else
        c(X);
    p(v);
  }), T = { effect: b, items: f, pending: h, outrogroups: null, fallback: o };
  d = !1;
}
function Mt(e) {
  for (; e !== null && (e.f & ye) === 0; )
    e = e.next;
  return e;
}
function Ns(e, t, r, n, i) {
  var s = t.length, u = e.items, f = Mt(e.effect.first), a, o = null, v = [], _ = [], h, d, c, m;
  for (m = 0; m < s; m += 1) {
    if (h = t[m], d = i(h, m), c = /** @type {EachItem} */
    u.get(d).e, e.outrogroups !== null)
      for (const Z of e.outrogroups)
        Z.pending.delete(c), Z.done.delete(c);
    if ((c.f & H) !== 0 && Gr(c), (c.f & ze) !== 0)
      if (c.f ^= ze, c === f)
        Ft(c, null, r);
      else {
        var b = o ? o.next : f;
        c === e.effect.last && (e.effect.last = c.prev), c.prev && (c.prev.next = c.next), c.next && (c.next.prev = c.prev), je(e, o, c), je(e, c, b), Ft(c, b, r), o = c, v = [], _ = [], f = Mt(o.next);
        continue;
      }
    if (c !== f) {
      if (a !== void 0 && a.has(c)) {
        if (v.length < _.length) {
          var T = _[0], S;
          o = T.prev;
          var Y = v[0], X = v[v.length - 1];
          for (S = 0; S < v.length; S += 1)
            Ft(v[S], T, r);
          for (S = 0; S < _.length; S += 1)
            a.delete(_[S]);
          je(e, Y.prev, X.next), je(e, o, Y), je(e, X, T), f = T, o = X, m -= 1, v = [], _ = [];
        } else
          a.delete(c), Ft(c, f, r), je(e, c.prev, c.next), je(e, c, o === null ? e.effect.first : o.next), je(e, o, c), o = c;
        continue;
      }
      for (v = [], _ = []; f !== null && f !== c; )
        (a ?? (a = /* @__PURE__ */ new Set())).add(f), _.push(f), f = Mt(f.next);
      if (f === null)
        continue;
    }
    (c.f & ze) === 0 && v.push(c), o = c, f = Mt(c.next);
  }
  if (e.outrogroups !== null) {
    for (const Z of e.outrogroups)
      Z.pending.size === 0 && (Pr(e, ur(Z.done)), e.outrogroups?.delete(Z));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (f !== null || a !== void 0) {
    var Re = [];
    if (a !== void 0)
      for (c of a)
        (c.f & H) === 0 && Re.push(c);
    for (; f !== null; )
      (f.f & H) === 0 && f !== e.fallback && Re.push(f), f = Mt(f.next);
    var de = Re.length;
    if (de > 0) {
      var We = s === 0 ? r : null;
      As(e, Re, We);
    }
  }
}
function Rs(e, t, r, n, i, s, u, f) {
  var a = (u & xi) !== 0 ? (u & Si) === 0 ? /* @__PURE__ */ Qi(r, !1, !1) : vt(r) : null, o = (u & ki) !== 0 ? vt(i) : null;
  return {
    v: a,
    i: o,
    e: ae(() => (s(t, a ?? r, o ?? i, f), () => {
      e.delete(n);
    }))
  };
}
function Ft(e, t, r) {
  if (e.nodes)
    for (var n = e.nodes.start, i = e.nodes.end, s = t && (t.f & ze) === 0 ? (
      /** @type {EffectNodes} */
      t.nodes.start
    ) : r; n !== null; ) {
      var u = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ut(n)
      );
      if (s.before(n), n === i)
        return;
      n = u;
    }
}
function je(e, t, r) {
  t === null ? e.effect.first = r : t.next = r, r === null ? e.effect.last = t : r.prev = t;
}
function Ms(e, t) {
  os(() => {
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
      const i = In("style");
      i.id = t.hash, i.textContent = t.code, n.appendChild(i);
    }
  });
}
function Fs(e, t, r = t) {
  var n = /* @__PURE__ */ new WeakSet();
  ns(e, "input", async (i) => {
    var s = i ? e.defaultValue : e.value;
    if (s = Er(e) ? xr(s) : s, r(s), w !== null && n.add(w), await _s(), s !== (s = t())) {
      var u = e.selectionStart, f = e.selectionEnd, a = e.value.length;
      if (e.value = s ?? "", f !== null) {
        var o = e.value.length;
        u === f && f === a && o > a ? (e.selectionStart = o, e.selectionEnd = o) : (e.selectionStart = u, e.selectionEnd = Math.min(f, o));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  Xn(t) == null && e.value && (r(Er(e) ? xr(e.value) : e.value), w !== null && n.add(w)), Ln(() => {
    var i = t();
    if (e === document.activeElement) {
      var s = (
        /** @type {Batch} */
        w
      );
      if (n.has(s))
        return;
    }
    Er(e) && i === xr(e.value) || e.type === "date" && !i && !e.value || i !== e.value && (e.value = i ?? "");
  });
}
function Er(e) {
  var t = e.type;
  return t === "number" || t === "range";
}
function xr(e) {
  return e === "" ? null : +e;
}
function Xt(e, t, r, n) {
  var i = (
    /** @type {V} */
    n
  ), s = !0, u = () => (s && (s = !1, i = /** @type {V} */
  n), i), f;
  f = /** @type {V} */
  e[t], f === void 0 && n !== void 0 && (f = u());
  var a;
  return a = () => {
    var o = (
      /** @type {V} */
      e[t]
    );
    return o === void 0 ? u() : (s = !0, o);
  }, a;
}
const Os = "5";
var un;
typeof window < "u" && ((un = window.__svelte ?? (window.__svelte = {})).v ?? (un.v = /* @__PURE__ */ new Set())).add(Os);
var Ds = /* @__PURE__ */ U('<div class="error svelte-1vl5es8"> </div>'), Ps = /* @__PURE__ */ U('<p class="desc svelte-1vl5es8"> </p>'), Is = /* @__PURE__ */ U('<div class="meta svelte-1vl5es8"> </div>'), zs = /* @__PURE__ */ U('<pre class="code svelte-1vl5es8"> </pre>'), Ls = /* @__PURE__ */ U('<pre class="code svelte-1vl5es8"> </pre>'), Vs = /* @__PURE__ */ U('<div class="detail"><button class="back svelte-1vl5es8">← Back to list</button> <div class="card svelte-1vl5es8"><h3 class="svelte-1vl5es8"> </h3> <!> <!> <!></div></div>'), qs = /* @__PURE__ */ U('<div class="empty svelte-1vl5es8">Loading codexes…</div>'), js = /* @__PURE__ */ U('<div class="empty svelte-1vl5es8"> </div>'), Bs = /* @__PURE__ */ U('<p class="desc svelte-1vl5es8"> </p>'), Hs = /* @__PURE__ */ U('<span class="tag svelte-1vl5es8"> </span>'), Us = /* @__PURE__ */ U('<button class="card clickable svelte-1vl5es8"><h3 class="svelte-1vl5es8"> </h3> <!> <!></button>'), Ys = /* @__PURE__ */ U('<div class="grid svelte-1vl5es8"></div>'), Gs = /* @__PURE__ */ U('<div class="search-row svelte-1vl5es8"><input type="text" placeholder="Search codexes…" class="svelte-1vl5es8"/></div> <!>', 1), Ks = /* @__PURE__ */ U('<div class="overlay svelte-1vl5es8">Loading codex details…</div>'), Js = /* @__PURE__ */ U('<div class="rt-cv svelte-1vl5es8"><div class="header svelte-1vl5es8"><h2 class="svelte-1vl5es8">Codex Viewer</h2> <span class="badge svelte-1vl5es8"> </span> <button class="refresh svelte-1vl5es8">↻ Refresh</button></div> <!> <!> <!></div>');
const Ws = {
  hash: "svelte-1vl5es8",
  code: ".rt-cv.svelte-1vl5es8 {font-family:system-ui, -apple-system, sans-serif;max-width:900px;margin:0 auto;padding:1.5rem;position:relative;}.header.svelte-1vl5es8 {display:flex;align-items:center;gap:0.75rem;margin-bottom:1.5rem;flex-wrap:wrap;}.header.svelte-1vl5es8 h2:where(.svelte-1vl5es8) {margin:0;font-size:1.5rem;}.badge.svelte-1vl5es8 {background:#e0e7ff;color:#3730a3;padding:0.15rem 0.5rem;border-radius:9999px;font-size:0.75rem;}.refresh.svelte-1vl5es8 {margin-left:auto;padding:0.35rem 0.75rem;background:#f3f4f6;border:1px solid #d1d5db;border-radius:0.5rem;cursor:pointer;font-size:0.8rem;}.error.svelte-1vl5es8 {background:#fef2f2;color:#991b1b;border:1px solid #fecaca;padding:0.75rem;border-radius:0.5rem;margin-bottom:1rem;}.empty.svelte-1vl5es8 {color:#6b7280;text-align:center;padding:2rem;}.search-row.svelte-1vl5es8 {margin-bottom:1rem;}.search-row.svelte-1vl5es8 input:where(.svelte-1vl5es8) {width:100%;padding:0.5rem 0.75rem;border:1px solid #d1d5db;border-radius:0.5rem;font-size:0.875rem;box-sizing:border-box;}.grid.svelte-1vl5es8 {display:grid;grid-template-columns:repeat(auto-fill, minmax(260px, 1fr));gap:0.75rem;}.card.svelte-1vl5es8 {background:#fff;border:1px solid #e5e7eb;border-radius:0.75rem;padding:1rem 1.25rem;text-align:left;}.clickable.svelte-1vl5es8 {cursor:pointer;width:100%;font-family:inherit;}.clickable.svelte-1vl5es8:hover {border-color:#a5b4fc;background:#f5f3ff;}.card.svelte-1vl5es8 h3:where(.svelte-1vl5es8) {margin:0 0 0.25rem;font-size:0.95rem;}.desc.svelte-1vl5es8 {margin:0.25rem 0;color:#6b7280;font-size:0.8rem;line-height:1.4;}.meta.svelte-1vl5es8 {font-size:0.8rem;color:#6b7280;margin:0.5rem 0;}.tag.svelte-1vl5es8 {background:#f0fdf4;color:#166534;padding:0.1rem 0.4rem;border-radius:0.25rem;font-size:0.7rem;}.code.svelte-1vl5es8 {background:#f9fafb;border:1px solid #e5e7eb;border-radius:0.5rem;padding:0.75rem;font-size:0.75rem;font-family:ui-monospace, monospace;overflow-x:auto;white-space:pre-wrap;word-break:break-word;max-height:500px;overflow-y:auto;margin-top:1rem;}.back.svelte-1vl5es8 {background:none;border:none;color:#4f46e5;cursor:pointer;font-size:0.85rem;padding:0;margin-bottom:1rem;}.back.svelte-1vl5es8:hover {text-decoration:underline;}.overlay.svelte-1vl5es8 {position:absolute;inset:0;background:rgba(255,255,255,0.8);display:flex;align-items:center;justify-content:center;color:#6b7280;border-radius:0.75rem;}"
};
function Xs(e, t) {
  pn(t, !0), Ms(e, Ws);
  let r = Xt(t, "extensionId", 3, "codex_viewer"), n = Xt(t, "version", 3, "");
  Xt(t, "principal", 3, ""), Xt(t, "isAuthenticated", 3, !0);
  let i = /* @__PURE__ */ K(_t([])), s = /* @__PURE__ */ K(null), u = /* @__PURE__ */ K(!0), f = /* @__PURE__ */ K(!1), a = /* @__PURE__ */ K(""), o = /* @__PURE__ */ K(""), v = /* @__PURE__ */ Ji(() => p(o).trim() ? p(i).filter((k) => {
    const N = p(o).toLowerCase();
    return (k.name ?? k.id ?? "").toLowerCase().includes(N) || (k.description ?? "").toLowerCase().includes(N);
  }) : p(i));
  async function _(k, N = "{}") {
    const Ve = await t.backend.extension_sync_call(JSON.stringify({ extension_name: r(), function_name: k, args: N }));
    return JSON.parse(Ve);
  }
  async function h() {
    O(u, !0), O(a, "");
    try {
      const k = await _("get_all_codexes", "{}");
      O(i, k?.data ?? (Array.isArray(k) ? k : []), !0);
    } catch (k) {
      O(a, k?.message || String(k), !0);
    } finally {
      O(u, !1);
    }
  }
  async function d(k) {
    O(f, !0), O(a, "");
    try {
      const N = await _("get_codex_details", JSON.stringify({ codex_id: k }));
      O(s, N?.data ?? N, !0);
    } catch (N) {
      O(a, N?.message || String(N), !0);
    } finally {
      O(f, !1);
    }
  }
  function c() {
    O(s, null);
  }
  as(() => {
    h();
  });
  var m = Js(), b = z(m), T = re(z(b), 2), S = z(T), Y = re(T, 2), X = re(b, 2);
  {
    var Re = (k) => {
      var N = Ds(), Ve = z(N);
      pe(() => ge(Ve, p(a))), V(k, N);
    };
    xe(X, (k) => {
      p(a) && k(Re);
    });
  }
  var de = re(X, 2);
  {
    var We = (k) => {
      var N = Vs(), Ve = z(N), dr = re(Ve, 2), Gt = z(dr), qe = z(Gt), Xe = re(Gt, 2);
      {
        var Kt = (M) => {
          var P = Ps(), L = z(P);
          pe(() => ge(L, p(s).description)), V(M, P);
        };
        xe(Xe, (M) => {
          p(s).description && M(Kt);
        });
      }
      var Jt = re(Xe, 2);
      {
        var hr = (M) => {
          var P = Is(), L = z(P);
          pe(() => ge(L, `Version: ${p(s).version ?? ""}`)), V(M, P);
        };
        xe(Jt, (M) => {
          p(s).version && M(hr);
        });
      }
      var _r = re(Jt, 2);
      {
        var pr = (M) => {
          var P = zs(), L = z(P);
          pe(() => ge(L, p(s).code || p(s).source)), V(M, P);
        }, Ee = (M) => {
          var P = Ls(), L = z(P);
          pe((Nt) => ge(L, Nt), [() => JSON.stringify(p(s), null, 2)]), V(M, P);
        };
        xe(_r, (M) => {
          p(s).code || p(s).source ? M(pr) : M(Ee, -1);
        });
      }
      pe(() => ge(qe, p(s).name || p(s).id || "Codex")), yr("click", Ve, c), V(k, N);
    }, Z = (k) => {
      var N = Es(), Ve = rn(N);
      {
        var dr = (qe) => {
          var Xe = qs();
          V(qe, Xe);
        }, Gt = (qe) => {
          var Xe = Gs(), Kt = rn(Xe), Jt = z(Kt), hr = re(Kt, 2);
          {
            var _r = (Ee) => {
              var M = js(), P = z(M);
              pe(() => ge(P, p(o) ? "No matches" : "No codexes found")), V(Ee, M);
            }, pr = (Ee) => {
              var M = Ys();
              Cs(M, 21, () => p(v), (P) => P.id || P.name, (P, L) => {
                var Nt = Us(), Jr = z(Nt), Qn = z(Jr), Wr = re(Jr, 2);
                {
                  var $n = (Ze) => {
                    var Rt = Bs(), gr = z(Rt);
                    pe(() => ge(gr, p(L).description)), V(Ze, Rt);
                  };
                  xe(Wr, (Ze) => {
                    p(L).description && Ze($n);
                  });
                }
                var ei = re(Wr, 2);
                {
                  var ti = (Ze) => {
                    var Rt = Hs(), gr = z(Rt);
                    pe(() => ge(gr, p(L).version)), V(Ze, Rt);
                  };
                  xe(ei, (Ze) => {
                    p(L).version && Ze(ti);
                  });
                }
                pe(() => ge(Qn, p(L).name || p(L).id)), yr("click", Nt, () => d(p(L).id || p(L).name)), V(P, Nt);
              }), V(Ee, M);
            };
            xe(hr, (Ee) => {
              p(v).length === 0 ? Ee(_r) : Ee(pr, -1);
            });
          }
          Fs(Jt, () => p(o), (Ee) => O(o, Ee)), V(qe, Xe);
        };
        xe(Ve, (qe) => {
          p(u) ? qe(dr) : qe(Gt, -1);
        });
      }
      V(k, N);
    };
    xe(de, (k) => {
      p(s) ? k(We) : k(Z, -1);
    });
  }
  var he = re(de, 2);
  {
    var vr = (k) => {
      var N = Ks();
      V(k, N);
    };
    xe(he, (k) => {
      p(f) && k(vr);
    });
  }
  pe(() => {
    ge(S, `v${n() ?? ""}`), Y.disabled = p(u);
  }), yr("click", Y, h), V(e, m), gn();
}
ms(["click"]);
function $s(e, t) {
  const r = xs(Xs, { target: e, props: t });
  return {
    unmount() {
      try {
        Ss(r);
      } catch {
      }
    }
  };
}
export {
  $s as default
};
