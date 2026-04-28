var qs = Object.defineProperty;
var vn = (e) => {
  throw TypeError(e);
};
var Vs = (e, t, r) => t in e ? qs(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var Ee = (e, t, r) => Vs(e, typeof t != "symbol" ? t + "" : t, r), Mr = (e, t, r) => t.has(e) || vn("Cannot " + r);
var l = (e, t, r) => (Mr(e, t, "read from private field"), r ? r.call(e) : t.get(e)), m = (e, t, r) => t.has(e) ? vn("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), E = (e, t, r, n) => (Mr(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r), N = (e, t, r) => (Mr(e, t, "access private method"), r);
var Nn = Array.isArray, $s = Array.prototype.indexOf, Lt = Array.prototype.includes, yr = Array.from, Bs = Object.defineProperty, Gt = Object.getOwnPropertyDescriptor, Ys = Object.getOwnPropertyDescriptors, Gs = Object.prototype, Ws = Array.prototype, Pn = Object.getPrototypeOf, hn = Object.isExtensible;
const Ks = () => {
};
function Js(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function Rn() {
  var e, t, r = new Promise((n, s) => {
    e = n, t = s;
  });
  return { promise: r, resolve: e, reject: t };
}
const Q = 2, Ot = 4, xr = 8, In = 1 << 24, Fe = 16, Me = 32, lt = 64, Lr = 128, we = 512, q = 1024, Z = 2048, je = 4096, te = 8192, me = 16384, St = 32768, Or = 1 << 25, Dt = 65536, Dr = 1 << 17, Xs = 1 << 18, zt = 1 << 19, Zs = 1 << 20, Oe = 1 << 25, kt = 65536, _r = 1 << 21, Jt = 1 << 22, it = 1 << 23, or = Symbol("$state"), Ve = new class extends Error {
  constructor() {
    super(...arguments);
    Ee(this, "name", "StaleReactionError");
    Ee(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
function Qs(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function ei() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function ti(e, t, r) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function ri(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function ni() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function si(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function ii() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function ai() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function li() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function oi() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function fi() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
const ui = 1, ci = 2, Ln = 4, di = 8, vi = 16, hi = 1, pi = 2, $ = Symbol(), On = "http://www.w3.org/1999/xhtml", _i = "http://www.w3.org/2000/svg", gi = "http://www.w3.org/1998/Math/MathML";
function bi() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function wi() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function Dn(e) {
  return e === this.v;
}
function mi(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Fn(e) {
  return !mi(e, this.v);
}
let ae = null;
function Ft(e) {
  ae = e;
}
function jn(e, t = !1, r) {
  ae = {
    p: ae,
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
function Un(e) {
  var t = (
    /** @type {ComponentContext} */
    ae
  ), r = t.e;
  if (r !== null) {
    t.e = null;
    for (var n of r)
      is(n);
  }
  return t.i = !0, ae = t.p, /** @type {T} */
  {};
}
function Hn() {
  return !0;
}
let ct = [];
function zn() {
  var e = ct;
  ct = [], Js(e);
}
function wt(e) {
  if (ct.length === 0 && !Wt) {
    var t = ct;
    queueMicrotask(() => {
      t === ct && zn();
    });
  }
  ct.push(e);
}
function yi() {
  for (; ct.length > 0; )
    zn();
}
function qn(e) {
  var t = T;
  if (t === null)
    return A.f |= it, e;
  if ((t.f & St) === 0 && (t.f & Ot) === 0)
    throw e;
  nt(e, t);
}
function nt(e, t) {
  for (; t !== null; ) {
    if ((t.f & Lr) !== 0) {
      if ((t.f & St) === 0)
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
const xi = -7169;
function D(e, t) {
  e.f = e.f & xi | t;
}
function Wr(e) {
  (e.f & we) !== 0 || e.deps === null ? D(e, q) : D(e, je);
}
function Vn(e) {
  if (e !== null)
    for (const t of e)
      (t.f & Q) === 0 || (t.f & kt) === 0 || (t.f ^= kt, Vn(
        /** @type {Derived} */
        t.deps
      ));
}
function $n(e, t, r) {
  (e.f & Z) !== 0 ? t.add(e) : (e.f & je) !== 0 && r.add(e), Vn(e.deps), D(e, q);
}
const ut = /* @__PURE__ */ new Set();
let k = null, Se = null, Fr = null, Wt = !1, Cr = !1, Mt = null, fr = null;
var pn = 0;
let ki = 1;
var Ct, Nt, ht, $e, Re, Zt, oe, Qt, tt, Be, Ie, Pt, Rt, pt, U, ur, Bn, cr, jr, dr, Ei;
const br = class br {
  constructor() {
    m(this, U);
    Ee(this, "id", ki++);
    /**
     * The current values of any signals that are updated in this batch.
     * Tuple format: [value, is_derived] (note: is_derived is false for deriveds, too, if they were overridden via assignment)
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Value, [any, boolean]>}
     */
    Ee(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any signals (sources and deriveds) that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Value, any>}
     */
    Ee(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<(batch: Batch) => void>}
     */
    m(this, Ct, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    m(this, Nt, /* @__PURE__ */ new Set());
    /**
     * Callbacks that should run only when a fork is committed.
     * @type {Set<(batch: Batch) => void>}
     */
    m(this, ht, /* @__PURE__ */ new Set());
    /**
     * Async effects that are currently in flight
     * @type {Map<Effect, number>}
     */
    m(this, $e, /* @__PURE__ */ new Map());
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
    m(this, Zt, null);
    /**
     * The root effects that need to be flushed
     * @type {Effect[]}
     */
    m(this, oe, []);
    /**
     * Effects created while this batch was active.
     * @type {Effect[]}
     */
    m(this, Qt, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    m(this, tt, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    m(this, Be, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    m(this, Ie, /* @__PURE__ */ new Map());
    /**
     * Inverse of #skipped_branches which we need to tell prior batches to unskip them when committing
     * @type {Set<Effect>}
     */
    m(this, Pt, /* @__PURE__ */ new Set());
    Ee(this, "is_fork", !1);
    m(this, Rt, !1);
    /** @type {Set<Batch>} */
    m(this, pt, /* @__PURE__ */ new Set());
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(t) {
    l(this, Ie).has(t) || l(this, Ie).set(t, { d: [], m: [] }), l(this, Pt).delete(t);
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   * @param {(e: Effect) => void} callback
   */
  unskip_effect(t, r = (n) => this.schedule(n)) {
    var n = l(this, Ie).get(t);
    if (n) {
      l(this, Ie).delete(t);
      for (var s of n.d)
        D(s, Z), r(s);
      for (s of n.m)
        D(s, je), r(s);
    }
    l(this, Pt).add(t);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Value} source
   * @param {any} value
   * @param {boolean} [is_derived]
   */
  capture(t, r, n = !1) {
    t.v !== $ && !this.previous.has(t) && this.previous.set(t, t.v), (t.f & it) === 0 && (this.current.set(t, [r, n]), Se?.set(t, r)), this.is_fork || (t.v = r);
  }
  activate() {
    k = this;
  }
  deactivate() {
    k = null, Se = null;
  }
  flush() {
    try {
      Cr = !0, k = this, N(this, U, cr).call(this);
    } finally {
      pn = 0, Fr = null, Mt = null, fr = null, Cr = !1, k = null, Se = null, mt.clear();
    }
  }
  discard() {
    for (const t of l(this, Nt)) t(this);
    l(this, Nt).clear(), l(this, ht).clear(), ut.delete(this);
  }
  /**
   * @param {Effect} effect
   */
  register_created_effect(t) {
    l(this, Qt).push(t);
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  increment(t, r) {
    let n = l(this, $e).get(r) ?? 0;
    if (l(this, $e).set(r, n + 1), t) {
      let s = l(this, Re).get(r) ?? 0;
      l(this, Re).set(r, s + 1);
    }
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   * @param {boolean} skip - whether to skip updates (because this is triggered by a stale reaction)
   */
  decrement(t, r, n) {
    let s = l(this, $e).get(r) ?? 0;
    if (s === 1 ? l(this, $e).delete(r) : l(this, $e).set(r, s - 1), t) {
      let i = l(this, Re).get(r) ?? 0;
      i === 1 ? l(this, Re).delete(r) : l(this, Re).set(r, i - 1);
    }
    l(this, Rt) || n || (E(this, Rt, !0), wt(() => {
      E(this, Rt, !1), this.flush();
    }));
  }
  /**
   * @param {Set<Effect>} dirty_effects
   * @param {Set<Effect>} maybe_dirty_effects
   */
  transfer_effects(t, r) {
    for (const n of t)
      l(this, tt).add(n);
    for (const n of r)
      l(this, Be).add(n);
    t.clear(), r.clear();
  }
  /** @param {(batch: Batch) => void} fn */
  oncommit(t) {
    l(this, Ct).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    l(this, Nt).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  on_fork_commit(t) {
    l(this, ht).add(t);
  }
  run_fork_commit_callbacks() {
    for (const t of l(this, ht)) t(this);
    l(this, ht).clear();
  }
  settled() {
    return (l(this, Zt) ?? E(this, Zt, Rn())).promise;
  }
  static ensure() {
    if (k === null) {
      const t = k = new br();
      Cr || (ut.add(k), Wt || wt(() => {
        k === t && t.flush();
      }));
    }
    return k;
  }
  apply() {
    {
      Se = null;
      return;
    }
  }
  /**
   *
   * @param {Effect} effect
   */
  schedule(t) {
    if (Fr = t, t.b?.is_pending && (t.f & (Ot | xr | In)) !== 0 && (t.f & St) === 0) {
      t.b.defer_effect(t);
      return;
    }
    for (var r = t; r.parent !== null; ) {
      r = r.parent;
      var n = r.f;
      if (Mt !== null && r === T && (A === null || (A.f & Q) === 0))
        return;
      if ((n & (lt | Me)) !== 0) {
        if ((n & q) === 0)
          return;
        r.f ^= q;
      }
    }
    l(this, oe).push(r);
  }
};
Ct = new WeakMap(), Nt = new WeakMap(), ht = new WeakMap(), $e = new WeakMap(), Re = new WeakMap(), Zt = new WeakMap(), oe = new WeakMap(), Qt = new WeakMap(), tt = new WeakMap(), Be = new WeakMap(), Ie = new WeakMap(), Pt = new WeakMap(), Rt = new WeakMap(), pt = new WeakMap(), U = new WeakSet(), ur = function() {
  return this.is_fork || l(this, Re).size > 0;
}, Bn = function() {
  for (const n of l(this, pt))
    for (const s of l(n, Re).keys()) {
      for (var t = !1, r = s; r.parent !== null; ) {
        if (l(this, Ie).has(r)) {
          t = !0;
          break;
        }
        r = r.parent;
      }
      if (!t)
        return !0;
    }
  return !1;
}, cr = function() {
  var f;
  if (pn++ > 1e3 && (ut.delete(this), Si()), !N(this, U, ur).call(this)) {
    for (const a of l(this, tt))
      l(this, Be).delete(a), D(a, Z), this.schedule(a);
    for (const a of l(this, Be))
      D(a, je), this.schedule(a);
  }
  const t = l(this, oe);
  E(this, oe, []), this.apply();
  var r = Mt = [], n = [], s = fr = [];
  for (const a of t)
    try {
      N(this, U, jr).call(this, a, r, n);
    } catch (u) {
      throw Wn(a), u;
    }
  if (k = null, s.length > 0) {
    var i = br.ensure();
    for (const a of s)
      i.schedule(a);
  }
  if (Mt = null, fr = null, N(this, U, ur).call(this) || N(this, U, Bn).call(this)) {
    N(this, U, dr).call(this, n), N(this, U, dr).call(this, r);
    for (const [a, u] of l(this, Ie))
      Gn(a, u);
  } else {
    l(this, $e).size === 0 && ut.delete(this), l(this, tt).clear(), l(this, Be).clear();
    for (const a of l(this, Ct)) a(this);
    l(this, Ct).clear(), _n(n), _n(r), l(this, Zt)?.resolve();
  }
  var o = (
    /** @type {Batch | null} */
    /** @type {unknown} */
    k
  );
  if (l(this, oe).length > 0) {
    const a = o ?? (o = this);
    l(a, oe).push(...l(this, oe).filter((u) => !l(a, oe).includes(u)));
  }
  o !== null && (ut.add(o), N(f = o, U, cr).call(f));
}, /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
jr = function(t, r, n) {
  t.f ^= q;
  for (var s = t.first; s !== null; ) {
    var i = s.f, o = (i & (Me | lt)) !== 0, f = o && (i & q) !== 0, a = f || (i & te) !== 0 || l(this, Ie).has(s);
    if (!a && s.fn !== null) {
      o ? s.f ^= q : (i & Ot) !== 0 ? r.push(s) : ir(s) && ((i & Fe) !== 0 && l(this, Be).add(s), Ut(s));
      var u = s.first;
      if (u !== null) {
        s = u;
        continue;
      }
    }
    for (; s !== null; ) {
      var c = s.next;
      if (c !== null) {
        s = c;
        break;
      }
      s = s.parent;
    }
  }
}, /**
 * @param {Effect[]} effects
 */
dr = function(t) {
  for (var r = 0; r < t.length; r += 1)
    $n(t[r], l(this, tt), l(this, Be));
}, Ei = function() {
  var c, g, v;
  for (const p of ut) {
    var t = p.id < this.id, r = [];
    for (const [_, [y, h]] of this.current) {
      if (p.current.has(_)) {
        var n = (
          /** @type {[any, boolean]} */
          p.current.get(_)[0]
        );
        if (t && y !== n)
          p.current.set(_, [y, h]);
        else
          continue;
      }
      r.push(_);
    }
    var s = [...p.current.keys()].filter((_) => !this.current.has(_));
    if (s.length === 0)
      t && p.discard();
    else if (r.length > 0) {
      if (t)
        for (const _ of l(this, Pt))
          p.unskip_effect(_, (y) => {
            var h;
            (y.f & (Fe | Jt)) !== 0 ? p.schedule(y) : N(h = p, U, dr).call(h, [y]);
          });
      p.activate();
      var i = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Map();
      for (var f of r)
        Yn(f, s, i, o);
      o = /* @__PURE__ */ new Map();
      var a = [...p.current.keys()].filter(
        (_) => this.current.has(_) ? (
          /** @type {[any, boolean]} */
          this.current.get(_)[0] !== _
        ) : !0
      );
      for (const _ of l(this, Qt))
        (_.f & (me | te | Dr)) === 0 && Kr(_, a, o) && ((_.f & (Jt | Fe)) !== 0 ? (D(_, Z), p.schedule(_)) : l(p, tt).add(_));
      if (l(p, oe).length > 0) {
        p.apply();
        for (var u of l(p, oe))
          N(c = p, U, jr).call(c, u, [], []);
        E(p, oe, []);
      }
      p.deactivate();
    }
  }
  for (const p of ut)
    l(p, pt).has(this) && (l(p, pt).delete(this), l(p, pt).size === 0 && !N(g = p, U, ur).call(g) && (p.activate(), N(v = p, U, cr).call(v)));
};
let Et = br;
function Ti(e) {
  var t = Wt;
  Wt = !0;
  try {
    for (var r; ; ) {
      if (yi(), k === null)
        return (
          /** @type {T} */
          r
        );
      k.flush();
    }
  } finally {
    Wt = t;
  }
}
function Si() {
  try {
    ii();
  } catch (e) {
    nt(e, Fr);
  }
}
let qe = null;
function _n(e) {
  var t = e.length;
  if (t !== 0) {
    for (var r = 0; r < t; ) {
      var n = e[r++];
      if ((n.f & (me | te)) === 0 && ir(n) && (qe = /* @__PURE__ */ new Set(), Ut(n), n.deps === null && n.first === null && n.nodes === null && n.teardown === null && n.ac === null && fs(n), qe?.size > 0)) {
        mt.clear();
        for (const s of qe) {
          if ((s.f & (me | te)) !== 0) continue;
          const i = [s];
          let o = s.parent;
          for (; o !== null; )
            qe.has(o) && (qe.delete(o), i.push(o)), o = o.parent;
          for (let f = i.length - 1; f >= 0; f--) {
            const a = i[f];
            (a.f & (me | te)) === 0 && Ut(a);
          }
        }
        qe.clear();
      }
    }
    qe = null;
  }
}
function Yn(e, t, r, n) {
  if (!r.has(e) && (r.add(e), e.reactions !== null))
    for (const s of e.reactions) {
      const i = s.f;
      (i & Q) !== 0 ? Yn(
        /** @type {Derived} */
        s,
        t,
        r,
        n
      ) : (i & (Jt | Fe)) !== 0 && (i & Z) === 0 && Kr(s, t, n) && (D(s, Z), Jr(
        /** @type {Effect} */
        s
      ));
    }
}
function Kr(e, t, r) {
  const n = r.get(e);
  if (n !== void 0) return n;
  if (e.deps !== null)
    for (const s of e.deps) {
      if (Lt.call(t, s))
        return !0;
      if ((s.f & Q) !== 0 && Kr(
        /** @type {Derived} */
        s,
        t,
        r
      ))
        return r.set(
          /** @type {Derived} */
          s,
          !0
        ), !0;
    }
  return r.set(e, !1), !1;
}
function Jr(e) {
  k.schedule(e);
}
function Gn(e, t) {
  if (!((e.f & Me) !== 0 && (e.f & q) !== 0)) {
    (e.f & Z) !== 0 ? t.d.push(e) : (e.f & je) !== 0 && t.m.push(e), D(e, q);
    for (var r = e.first; r !== null; )
      Gn(r, t), r = r.next;
  }
}
function Wn(e) {
  D(e, q);
  for (var t = e.first; t !== null; )
    Wn(t), t = t.next;
}
function Ai(e) {
  let t = 0, r = Tt(0), n;
  return () => {
    en() && (d(r), tn(() => (t === 0 && (n = kr(() => e(() => Kt(r)))), t += 1, () => {
      wt(() => {
        t -= 1, t === 0 && (n?.(), n = void 0, Kt(r));
      });
    })));
  };
}
var Mi = Dt | zt;
function Ci(e, t, r, n) {
  new Ni(e, t, r, n);
}
var pe, Gr, _e, _t, ne, ge, ee, fe, Ye, gt, rt, It, er, tr, Ge, wr, O, Pi, Ri, Ii, Ur, vr, hr, Hr, zr;
class Ni {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(t, r, n, s) {
    m(this, O);
    /** @type {Boundary | null} */
    Ee(this, "parent");
    Ee(this, "is_pending", !1);
    /**
     * API-level transformError transform function. Transforms errors before they reach the `failed` snippet.
     * Inherited from parent boundary, or defaults to identity.
     * @type {(error: unknown) => unknown}
     */
    Ee(this, "transform_error");
    /** @type {TemplateNode} */
    m(this, pe);
    /** @type {TemplateNode | null} */
    m(this, Gr, null);
    /** @type {BoundaryProps} */
    m(this, _e);
    /** @type {((anchor: Node) => void)} */
    m(this, _t);
    /** @type {Effect} */
    m(this, ne);
    /** @type {Effect | null} */
    m(this, ge, null);
    /** @type {Effect | null} */
    m(this, ee, null);
    /** @type {Effect | null} */
    m(this, fe, null);
    /** @type {DocumentFragment | null} */
    m(this, Ye, null);
    m(this, gt, 0);
    m(this, rt, 0);
    m(this, It, !1);
    /** @type {Set<Effect>} */
    m(this, er, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    m(this, tr, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    m(this, Ge, null);
    m(this, wr, Ai(() => (E(this, Ge, Tt(l(this, gt))), () => {
      E(this, Ge, null);
    })));
    E(this, pe, t), E(this, _e, r), E(this, _t, (i) => {
      var o = (
        /** @type {Effect} */
        T
      );
      o.b = this, o.f |= Lr, n(i);
    }), this.parent = /** @type {Effect} */
    T.b, this.transform_error = s ?? this.parent?.transform_error ?? ((i) => i), E(this, ne, rn(() => {
      N(this, O, Ur).call(this);
    }, Mi));
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    $n(t, l(this, er), l(this, tr));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!l(this, _e).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  update_pending_count(t, r) {
    N(this, O, Hr).call(this, t, r), E(this, gt, l(this, gt) + t), !(!l(this, Ge) || l(this, It)) && (E(this, It, !0), wt(() => {
      E(this, It, !1), l(this, Ge) && jt(l(this, Ge), l(this, gt));
    }));
  }
  get_effect_pending() {
    return l(this, wr).call(this), d(
      /** @type {Source<number>} */
      l(this, Ge)
    );
  }
  /** @param {unknown} error */
  error(t) {
    if (!l(this, _e).onerror && !l(this, _e).failed)
      throw t;
    k?.is_fork ? (l(this, ge) && k.skip_effect(l(this, ge)), l(this, ee) && k.skip_effect(l(this, ee)), l(this, fe) && k.skip_effect(l(this, fe)), k.on_fork_commit(() => {
      N(this, O, zr).call(this, t);
    })) : N(this, O, zr).call(this, t);
  }
}
pe = new WeakMap(), Gr = new WeakMap(), _e = new WeakMap(), _t = new WeakMap(), ne = new WeakMap(), ge = new WeakMap(), ee = new WeakMap(), fe = new WeakMap(), Ye = new WeakMap(), gt = new WeakMap(), rt = new WeakMap(), It = new WeakMap(), er = new WeakMap(), tr = new WeakMap(), Ge = new WeakMap(), wr = new WeakMap(), O = new WeakSet(), Pi = function() {
  try {
    E(this, ge, be(() => l(this, _t).call(this, l(this, pe))));
  } catch (t) {
    this.error(t);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
Ri = function(t) {
  const r = l(this, _e).failed;
  r && E(this, fe, be(() => {
    r(
      l(this, pe),
      () => t,
      () => () => {
      }
    );
  }));
}, Ii = function() {
  const t = l(this, _e).pending;
  t && (this.is_pending = !0, E(this, ee, be(() => t(l(this, pe)))), wt(() => {
    var r = E(this, Ye, document.createDocumentFragment()), n = at();
    r.append(n), E(this, ge, N(this, O, hr).call(this, () => be(() => l(this, _t).call(this, n)))), l(this, rt) === 0 && (l(this, pe).before(r), E(this, Ye, null), yt(
      /** @type {Effect} */
      l(this, ee),
      () => {
        E(this, ee, null);
      }
    ), N(this, O, vr).call(
      this,
      /** @type {Batch} */
      k
    ));
  }));
}, Ur = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), E(this, rt, 0), E(this, gt, 0), E(this, ge, be(() => {
      l(this, _t).call(this, l(this, pe));
    })), l(this, rt) > 0) {
      var t = E(this, Ye, document.createDocumentFragment());
      an(l(this, ge), t);
      const r = (
        /** @type {(anchor: Node) => void} */
        l(this, _e).pending
      );
      E(this, ee, be(() => r(l(this, pe))));
    } else
      N(this, O, vr).call(
        this,
        /** @type {Batch} */
        k
      );
  } catch (r) {
    this.error(r);
  }
}, /**
 * @param {Batch} batch
 */
vr = function(t) {
  this.is_pending = !1, t.transfer_effects(l(this, er), l(this, tr));
}, /**
 * @template T
 * @param {() => T} fn
 */
hr = function(t) {
  var r = T, n = A, s = ae;
  Ue(l(this, ne)), xe(l(this, ne)), Ft(l(this, ne).ctx);
  try {
    return Et.ensure(), t();
  } catch (i) {
    return qn(i), null;
  } finally {
    Ue(r), xe(n), Ft(s);
  }
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 * @param {Batch} batch
 */
Hr = function(t, r) {
  var n;
  if (!this.has_pending_snippet()) {
    this.parent && N(n = this.parent, O, Hr).call(n, t, r);
    return;
  }
  E(this, rt, l(this, rt) + t), l(this, rt) === 0 && (N(this, O, vr).call(this, r), l(this, ee) && yt(l(this, ee), () => {
    E(this, ee, null);
  }), l(this, Ye) && (l(this, pe).before(l(this, Ye)), E(this, Ye, null)));
}, /**
 * @param {unknown} error
 */
zr = function(t) {
  l(this, ge) && (ie(l(this, ge)), E(this, ge, null)), l(this, ee) && (ie(l(this, ee)), E(this, ee, null)), l(this, fe) && (ie(l(this, fe)), E(this, fe, null));
  var r = l(this, _e).onerror;
  let n = l(this, _e).failed;
  var s = !1, i = !1;
  const o = () => {
    if (s) {
      wi();
      return;
    }
    s = !0, i && fi(), l(this, fe) !== null && yt(l(this, fe), () => {
      E(this, fe, null);
    }), N(this, O, hr).call(this, () => {
      N(this, O, Ur).call(this);
    });
  }, f = (a) => {
    try {
      i = !0, r?.(a, o), i = !1;
    } catch (u) {
      nt(u, l(this, ne) && l(this, ne).parent);
    }
    n && E(this, fe, N(this, O, hr).call(this, () => {
      try {
        return be(() => {
          var u = (
            /** @type {Effect} */
            T
          );
          u.b = this, u.f |= Lr, n(
            l(this, pe),
            () => a,
            () => o
          );
        });
      } catch (u) {
        return nt(
          u,
          /** @type {Effect} */
          l(this, ne).parent
        ), null;
      }
    }));
  };
  wt(() => {
    var a;
    try {
      a = this.transform_error(t);
    } catch (u) {
      nt(u, l(this, ne) && l(this, ne).parent);
      return;
    }
    a !== null && typeof a == "object" && typeof /** @type {any} */
    a.then == "function" ? a.then(
      f,
      /** @param {unknown} e */
      (u) => nt(u, l(this, ne) && l(this, ne).parent)
    ) : f(a);
  });
};
function Li(e, t, r, n) {
  const s = Jn;
  var i = e.filter((v) => !v.settled);
  if (r.length === 0 && i.length === 0) {
    n(t.map(s));
    return;
  }
  var o = (
    /** @type {Effect} */
    T
  ), f = Oi(), a = i.length === 1 ? i[0].promise : i.length > 1 ? Promise.all(i.map((v) => v.promise)) : null;
  function u(v) {
    f();
    try {
      n(v);
    } catch (p) {
      (o.f & me) === 0 && nt(p, o);
    }
    gr();
  }
  if (r.length === 0) {
    a.then(() => u(t.map(s)));
    return;
  }
  var c = Kn();
  function g() {
    Promise.all(r.map((v) => /* @__PURE__ */ Di(v))).then((v) => u([...t.map(s), ...v])).catch((v) => nt(v, o)).finally(() => c());
  }
  a ? a.then(() => {
    f(), g(), gr();
  }) : g();
}
function Oi() {
  var e = (
    /** @type {Effect} */
    T
  ), t = A, r = ae, n = (
    /** @type {Batch} */
    k
  );
  return function(i = !0) {
    Ue(e), xe(t), Ft(r), i && (e.f & me) === 0 && (n?.activate(), n?.apply());
  };
}
function gr(e = !0) {
  Ue(null), xe(null), Ft(null), e && k?.deactivate();
}
function Kn() {
  var e = (
    /** @type {Effect} */
    T
  ), t = (
    /** @type {Boundary} */
    e.b
  ), r = (
    /** @type {Batch} */
    k
  ), n = t.is_rendered();
  return t.update_pending_count(1, r), r.increment(n, e), (s = !1) => {
    t.update_pending_count(-1, r), r.decrement(n, e, s);
  };
}
// @__NO_SIDE_EFFECTS__
function Jn(e) {
  var t = Q | Z;
  return T !== null && (T.f |= zt), {
    ctx: ae,
    deps: null,
    effects: null,
    equals: Dn,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      $
    ),
    wv: 0,
    parent: T,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function Di(e, t, r) {
  let n = (
    /** @type {Effect | null} */
    T
  );
  n === null && ei();
  var s = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), i = Tt(
    /** @type {V} */
    $
  ), o = !A, f = /* @__PURE__ */ new Map();
  return Ji(() => {
    var a = (
      /** @type {Effect} */
      T
    ), u = Rn();
    s = u.promise;
    try {
      Promise.resolve(e()).then(u.resolve, u.reject).finally(gr);
    } catch (p) {
      u.reject(p), gr();
    }
    var c = (
      /** @type {Batch} */
      k
    );
    if (o) {
      if ((a.f & St) !== 0)
        var g = Kn();
      if (
        /** @type {Boundary} */
        n.b.is_rendered()
      )
        f.get(c)?.reject(Ve), f.delete(c);
      else {
        for (const p of f.values())
          p.reject(Ve);
        f.clear();
      }
      f.set(c, u);
    }
    const v = (p, _ = void 0) => {
      if (g) {
        var y = _ === Ve;
        g(y);
      }
      if (!(_ === Ve || (a.f & me) !== 0)) {
        if (c.activate(), _)
          i.f |= it, jt(i, _);
        else {
          (i.f & it) !== 0 && (i.f ^= it), jt(i, p);
          for (const [h, S] of f) {
            if (f.delete(h), h === c) break;
            S.reject(Ve);
          }
        }
        c.deactivate();
      }
    };
    u.promise.then(v, (p) => v(null, p || "unknown"));
  }), Wi(() => {
    for (const a of f.values())
      a.reject(Ve);
  }), new Promise((a) => {
    function u(c) {
      function g() {
        c === s ? a(i) : u(s);
      }
      c.then(g, g);
    }
    u(s);
  });
}
// @__NO_SIDE_EFFECTS__
function Fi(e) {
  const t = /* @__PURE__ */ Jn(e);
  return t.equals = Fn, t;
}
function ji(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var r = 0; r < t.length; r += 1)
      ie(
        /** @type {Effect} */
        t[r]
      );
  }
}
function Xr(e) {
  var t, r = T, n = e.parent;
  if (!ot && n !== null && (n.f & (me | te)) !== 0)
    return bi(), e.v;
  Ue(n);
  try {
    e.f &= ~kt, ji(e), t = ps(e);
  } finally {
    Ue(r);
  }
  return t;
}
function Xn(e) {
  var t = Xr(e);
  if (!e.equals(t) && (e.wv = vs(), (!k?.is_fork || e.deps === null) && (k !== null ? k.capture(e, t, !0) : e.v = t, e.deps === null))) {
    D(e, q);
    return;
  }
  ot || (Se !== null ? (en() || k?.is_fork) && Se.set(e, t) : Wr(e));
}
function Ui(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      (t.teardown || t.ac) && (t.teardown?.(), t.ac?.abort(Ve), t.teardown = Ks, t.ac = null, Xt(t, 0), nn(t));
}
function Zn(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      t.teardown && Ut(t);
}
let qr = /* @__PURE__ */ new Set();
const mt = /* @__PURE__ */ new Map();
let Qn = !1;
function Tt(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Dn,
    rv: 0,
    wv: 0
  };
  return r;
}
// @__NO_SIDE_EFFECTS__
function L(e, t) {
  const r = Tt(e);
  return Zi(r), r;
}
// @__NO_SIDE_EFFECTS__
function Hi(e, t = !1, r = !0) {
  const n = Tt(e);
  return t || (n.equals = Fn), n;
}
function w(e, t, r = !1) {
  A !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Ae || (A.f & Dr) !== 0) && Hn() && (A.f & (Q | Fe | Jt | Dr)) !== 0 && (ye === null || !Lt.call(ye, e)) && oi();
  let n = r ? st(t) : t;
  return jt(e, n, fr);
}
function jt(e, t, r = null) {
  if (!e.equals(t)) {
    mt.set(e, ot ? t : e.v);
    var n = Et.ensure();
    if (n.capture(e, t), (e.f & Q) !== 0) {
      const s = (
        /** @type {Derived} */
        e
      );
      (e.f & Z) !== 0 && Xr(s), Se === null && Wr(s);
    }
    e.wv = vs(), es(e, Z, r), T !== null && (T.f & q) !== 0 && (T.f & (Me | lt)) === 0 && (he === null ? Qi([e]) : he.push(e)), !n.is_fork && qr.size > 0 && !Qn && zi();
  }
  return t;
}
function zi() {
  Qn = !1;
  for (const e of qr)
    (e.f & q) !== 0 && D(e, je), ir(e) && Ut(e);
  qr.clear();
}
function Kt(e) {
  w(e, e.v + 1);
}
function es(e, t, r) {
  var n = e.reactions;
  if (n !== null)
    for (var s = n.length, i = 0; i < s; i++) {
      var o = n[i], f = o.f, a = (f & Z) === 0;
      if (a && D(o, t), (f & Q) !== 0) {
        var u = (
          /** @type {Derived} */
          o
        );
        Se?.delete(u), (f & kt) === 0 && (f & we && (T === null || (T.f & _r) === 0) && (o.f |= kt), es(u, je, r));
      } else if (a) {
        var c = (
          /** @type {Effect} */
          o
        );
        (f & Fe) !== 0 && qe !== null && qe.add(c), r !== null ? r.push(c) : Jr(c);
      }
    }
}
function st(e) {
  if (typeof e != "object" || e === null || or in e)
    return e;
  const t = Pn(e);
  if (t !== Gs && t !== Ws)
    return e;
  var r = /* @__PURE__ */ new Map(), n = Nn(e), s = /* @__PURE__ */ L(0), i = xt, o = (f) => {
    if (xt === i)
      return f();
    var a = A, u = xt;
    xe(null), yn(i);
    var c = f();
    return xe(a), yn(u), c;
  };
  return n && r.set("length", /* @__PURE__ */ L(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(f, a, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && ai();
        var c = r.get(a);
        return c === void 0 ? o(() => {
          var g = /* @__PURE__ */ L(u.value);
          return r.set(a, g), g;
        }) : w(c, u.value, !0), !0;
      },
      deleteProperty(f, a) {
        var u = r.get(a);
        if (u === void 0) {
          if (a in f) {
            const c = o(() => /* @__PURE__ */ L($));
            r.set(a, c), Kt(s);
          }
        } else
          w(u, $), Kt(s);
        return !0;
      },
      get(f, a, u) {
        if (a === or)
          return e;
        var c = r.get(a), g = a in f;
        if (c === void 0 && (!g || Gt(f, a)?.writable) && (c = o(() => {
          var p = st(g ? f[a] : $), _ = /* @__PURE__ */ L(p);
          return _;
        }), r.set(a, c)), c !== void 0) {
          var v = d(c);
          return v === $ ? void 0 : v;
        }
        return Reflect.get(f, a, u);
      },
      getOwnPropertyDescriptor(f, a) {
        var u = Reflect.getOwnPropertyDescriptor(f, a);
        if (u && "value" in u) {
          var c = r.get(a);
          c && (u.value = d(c));
        } else if (u === void 0) {
          var g = r.get(a), v = g?.v;
          if (g !== void 0 && v !== $)
            return {
              enumerable: !0,
              configurable: !0,
              value: v,
              writable: !0
            };
        }
        return u;
      },
      has(f, a) {
        if (a === or)
          return !0;
        var u = r.get(a), c = u !== void 0 && u.v !== $ || Reflect.has(f, a);
        if (u !== void 0 || T !== null && (!c || Gt(f, a)?.writable)) {
          u === void 0 && (u = o(() => {
            var v = c ? st(f[a]) : $, p = /* @__PURE__ */ L(v);
            return p;
          }), r.set(a, u));
          var g = d(u);
          if (g === $)
            return !1;
        }
        return c;
      },
      set(f, a, u, c) {
        var g = r.get(a), v = a in f;
        if (n && a === "length")
          for (var p = u; p < /** @type {Source<number>} */
          g.v; p += 1) {
            var _ = r.get(p + "");
            _ !== void 0 ? w(_, $) : p in f && (_ = o(() => /* @__PURE__ */ L($)), r.set(p + "", _));
          }
        if (g === void 0)
          (!v || Gt(f, a)?.writable) && (g = o(() => /* @__PURE__ */ L(void 0)), w(g, st(u)), r.set(a, g));
        else {
          v = g.v !== $;
          var y = o(() => st(u));
          w(g, y);
        }
        var h = Reflect.getOwnPropertyDescriptor(f, a);
        if (h?.set && h.set.call(c, u), !v) {
          if (n && typeof a == "string") {
            var S = (
              /** @type {Source<number>} */
              r.get("length")
            ), B = Number(a);
            Number.isInteger(B) && B >= S.v && w(S, B + 1);
          }
          Kt(s);
        }
        return !0;
      },
      ownKeys(f) {
        d(s);
        var a = Reflect.ownKeys(f).filter((g) => {
          var v = r.get(g);
          return v === void 0 || v.v !== $;
        });
        for (var [u, c] of r)
          c.v !== $ && !(u in f) && a.push(u);
        return a;
      },
      setPrototypeOf() {
        li();
      }
    }
  );
}
var gn, ts, rs, ns;
function qi() {
  if (gn === void 0) {
    gn = window, ts = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, r = Text.prototype;
    rs = Gt(t, "firstChild").get, ns = Gt(t, "nextSibling").get, hn(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), hn(r) && (r.__t = void 0);
  }
}
function at(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function De(e) {
  return (
    /** @type {TemplateNode | null} */
    rs.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function sr(e) {
  return (
    /** @type {TemplateNode | null} */
    ns.call(e)
  );
}
function M(e, t) {
  return /* @__PURE__ */ De(e);
}
function bn(e, t = !1) {
  {
    var r = /* @__PURE__ */ De(e);
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ sr(r) : r;
  }
}
function Ne(e, t = 1, r = !1) {
  let n = e;
  for (; t--; )
    n = /** @type {TemplateNode} */
    /* @__PURE__ */ sr(n);
  return n;
}
function Vi(e) {
  e.textContent = "";
}
function ss() {
  return !1;
}
function Zr(e, t, r) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElementNS(t ?? On, e, void 0)
  );
}
let wn = !1;
function $i() {
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
function Qr(e) {
  var t = A, r = T;
  xe(null), Ue(null);
  try {
    return e();
  } finally {
    xe(t), Ue(r);
  }
}
function Bi(e, t, r, n = r) {
  e.addEventListener(t, () => Qr(r));
  const s = e.__on_r;
  s ? e.__on_r = () => {
    s(), n(!0);
  } : e.__on_r = () => n(!0), $i();
}
function Yi(e) {
  T === null && (A === null && si(), ni()), ot && ri();
}
function Gi(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function We(e, t) {
  var r = T;
  r !== null && (r.f & te) !== 0 && (e |= te);
  var n = {
    ctx: ae,
    deps: null,
    nodes: null,
    f: e | Z | we,
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
  k?.register_created_effect(n);
  var s = n;
  if ((e & Ot) !== 0)
    Mt !== null ? Mt.push(n) : Et.ensure().schedule(n);
  else if (t !== null) {
    try {
      Ut(n);
    } catch (o) {
      throw ie(n), o;
    }
    s.deps === null && s.teardown === null && s.nodes === null && s.first === s.last && // either `null`, or a singular child
    (s.f & zt) === 0 && (s = s.first, (e & Fe) !== 0 && (e & Dt) !== 0 && s !== null && (s.f |= Dt));
  }
  if (s !== null && (s.parent = r, r !== null && Gi(s, r), A !== null && (A.f & Q) !== 0 && (e & lt) === 0)) {
    var i = (
      /** @type {Derived} */
      A
    );
    (i.effects ?? (i.effects = [])).push(s);
  }
  return n;
}
function en() {
  return A !== null && !Ae;
}
function Wi(e) {
  const t = We(xr, null);
  return D(t, q), t.teardown = e, t;
}
function Vr(e) {
  Yi();
  var t = (
    /** @type {Effect} */
    T.f
  ), r = !A && (t & Me) !== 0 && (t & St) === 0;
  if (r) {
    var n = (
      /** @type {ComponentContext} */
      ae
    );
    (n.e ?? (n.e = [])).push(e);
  } else
    return is(e);
}
function is(e) {
  return We(Ot | Zs, e);
}
function Ki(e) {
  Et.ensure();
  const t = We(lt | zt, e);
  return (r = {}) => new Promise((n) => {
    r.outro ? yt(t, () => {
      ie(t), n(void 0);
    }) : (ie(t), n(void 0));
  });
}
function as(e) {
  return We(Ot, e);
}
function Ji(e) {
  return We(Jt | zt, e);
}
function tn(e, t = 0) {
  return We(xr | t, e);
}
function Pe(e, t = [], r = [], n = []) {
  Li(n, t, r, (s) => {
    We(xr, () => e(...s.map(d)));
  });
}
function rn(e, t = 0) {
  var r = We(Fe | t, e);
  return r;
}
function be(e) {
  return We(Me | zt, e);
}
function ls(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = ot, n = A;
    mn(!0), xe(null);
    try {
      t.call(null);
    } finally {
      mn(r), xe(n);
    }
  }
}
function nn(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    const s = r.ac;
    s !== null && Qr(() => {
      s.abort(Ve);
    });
    var n = r.next;
    (r.f & lt) !== 0 ? r.parent = null : ie(r, t), r = n;
  }
}
function Xi(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & Me) === 0 && ie(t), t = r;
  }
}
function ie(e, t = !0) {
  var r = !1;
  (t || (e.f & Xs) !== 0) && e.nodes !== null && e.nodes.end !== null && (os(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), r = !0), D(e, Or), nn(e, t && !r), Xt(e, 0);
  var n = e.nodes && e.nodes.t;
  if (n !== null)
    for (const i of n)
      i.stop();
  ls(e), e.f ^= Or, e.f |= me;
  var s = e.parent;
  s !== null && s.first !== null && fs(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function os(e, t) {
  for (; e !== null; ) {
    var r = e === t ? null : /* @__PURE__ */ sr(e);
    e.remove(), e = r;
  }
}
function fs(e) {
  var t = e.parent, r = e.prev, n = e.next;
  r !== null && (r.next = n), n !== null && (n.prev = r), t !== null && (t.first === e && (t.first = n), t.last === e && (t.last = r));
}
function yt(e, t, r = !0) {
  var n = [];
  us(e, n, !0);
  var s = () => {
    r && ie(e), t && t();
  }, i = n.length;
  if (i > 0) {
    var o = () => --i || s();
    for (var f of n)
      f.out(o);
  } else
    s();
}
function us(e, t, r) {
  if ((e.f & te) === 0) {
    e.f ^= te;
    var n = e.nodes && e.nodes.t;
    if (n !== null)
      for (const f of n)
        (f.is_global || r) && t.push(f);
    for (var s = e.first; s !== null; ) {
      var i = s.next;
      if ((s.f & lt) === 0) {
        var o = (s.f & Dt) !== 0 || // If this is a branch effect without a block effect parent,
        // it means the parent block effect was pruned. In that case,
        // transparency information was transferred to the branch effect.
        (s.f & Me) !== 0 && (e.f & Fe) !== 0;
        us(s, t, o ? r : !1);
      }
      s = i;
    }
  }
}
function sn(e) {
  cs(e, !0);
}
function cs(e, t) {
  if ((e.f & te) !== 0) {
    e.f ^= te, (e.f & q) === 0 && (D(e, Z), Et.ensure().schedule(e));
    for (var r = e.first; r !== null; ) {
      var n = r.next, s = (r.f & Dt) !== 0 || (r.f & Me) !== 0;
      cs(r, s ? t : !1), r = n;
    }
    var i = e.nodes && e.nodes.t;
    if (i !== null)
      for (const o of i)
        (o.is_global || t) && o.in();
  }
}
function an(e, t) {
  if (e.nodes)
    for (var r = e.nodes.start, n = e.nodes.end; r !== null; ) {
      var s = r === n ? null : /* @__PURE__ */ sr(r);
      t.append(r), r = s;
    }
}
let pr = !1, ot = !1;
function mn(e) {
  ot = e;
}
let A = null, Ae = !1;
function xe(e) {
  A = e;
}
let T = null;
function Ue(e) {
  T = e;
}
let ye = null;
function Zi(e) {
  A !== null && (ye === null ? ye = [e] : ye.push(e));
}
let se = null, le = 0, he = null;
function Qi(e) {
  he = e;
}
let ds = 1, dt = 0, xt = dt;
function yn(e) {
  xt = e;
}
function vs() {
  return ++ds;
}
function ir(e) {
  var t = e.f;
  if ((t & Z) !== 0)
    return !0;
  if (t & Q && (e.f &= ~kt), (t & je) !== 0) {
    for (var r = (
      /** @type {Value[]} */
      e.deps
    ), n = r.length, s = 0; s < n; s++) {
      var i = r[s];
      if (ir(
        /** @type {Derived} */
        i
      ) && Xn(
        /** @type {Derived} */
        i
      ), i.wv > e.wv)
        return !0;
    }
    (t & we) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    Se === null && D(e, q);
  }
  return !1;
}
function hs(e, t, r = !0) {
  var n = e.reactions;
  if (n !== null && !(ye !== null && Lt.call(ye, e)))
    for (var s = 0; s < n.length; s++) {
      var i = n[s];
      (i.f & Q) !== 0 ? hs(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (r ? D(i, Z) : (i.f & q) !== 0 && D(i, je), Jr(
        /** @type {Effect} */
        i
      ));
    }
}
function ps(e) {
  var y;
  var t = se, r = le, n = he, s = A, i = ye, o = ae, f = Ae, a = xt, u = e.f;
  se = /** @type {null | Value[]} */
  null, le = 0, he = null, A = (u & (Me | lt)) === 0 ? e : null, ye = null, Ft(e.ctx), Ae = !1, xt = ++dt, e.ac !== null && (Qr(() => {
    e.ac.abort(Ve);
  }), e.ac = null);
  try {
    e.f |= _r;
    var c = (
      /** @type {Function} */
      e.fn
    ), g = c();
    e.f |= St;
    var v = e.deps, p = k?.is_fork;
    if (se !== null) {
      var _;
      if (p || Xt(e, le), v !== null && le > 0)
        for (v.length = le + se.length, _ = 0; _ < se.length; _++)
          v[le + _] = se[_];
      else
        e.deps = v = se;
      if (en() && (e.f & we) !== 0)
        for (_ = le; _ < v.length; _++)
          ((y = v[_]).reactions ?? (y.reactions = [])).push(e);
    } else !p && v !== null && le < v.length && (Xt(e, le), v.length = le);
    if (Hn() && he !== null && !Ae && v !== null && (e.f & (Q | je | Z)) === 0)
      for (_ = 0; _ < /** @type {Source[]} */
      he.length; _++)
        hs(
          he[_],
          /** @type {Effect} */
          e
        );
    if (s !== null && s !== e) {
      if (dt++, s.deps !== null)
        for (let h = 0; h < r; h += 1)
          s.deps[h].rv = dt;
      if (t !== null)
        for (const h of t)
          h.rv = dt;
      he !== null && (n === null ? n = he : n.push(.../** @type {Source[]} */
      he));
    }
    return (e.f & it) !== 0 && (e.f ^= it), g;
  } catch (h) {
    return qn(h);
  } finally {
    e.f ^= _r, se = t, le = r, he = n, A = s, ye = i, Ft(o), Ae = f, xt = a;
  }
}
function ea(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var n = $s.call(r, e);
    if (n !== -1) {
      var s = r.length - 1;
      s === 0 ? r = t.reactions = null : (r[n] = r[s], r.pop());
    }
  }
  if (r === null && (t.f & Q) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (se === null || !Lt.call(se, t))) {
    var i = (
      /** @type {Derived} */
      t
    );
    (i.f & we) !== 0 && (i.f ^= we, i.f &= ~kt), i.v !== $ && Wr(i), Ui(i), Xt(i, 0);
  }
}
function Xt(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var n = t; n < r.length; n++)
      ea(e, r[n]);
}
function Ut(e) {
  var t = e.f;
  if ((t & me) === 0) {
    D(e, q);
    var r = T, n = pr;
    T = e, pr = !0;
    try {
      (t & (Fe | In)) !== 0 ? Xi(e) : nn(e), ls(e);
      var s = ps(e);
      e.teardown = typeof s == "function" ? s : null, e.wv = ds;
      var i;
    } finally {
      pr = n, T = r;
    }
  }
}
async function _s() {
  await Promise.resolve(), Ti();
}
function d(e) {
  var t = e.f, r = (t & Q) !== 0;
  if (A !== null && !Ae) {
    var n = T !== null && (T.f & me) !== 0;
    if (!n && (ye === null || !Lt.call(ye, e))) {
      var s = A.deps;
      if ((A.f & _r) !== 0)
        e.rv < dt && (e.rv = dt, se === null && s !== null && s[le] === e ? le++ : se === null ? se = [e] : se.push(e));
      else {
        (A.deps ?? (A.deps = [])).push(e);
        var i = e.reactions;
        i === null ? e.reactions = [A] : Lt.call(i, A) || i.push(A);
      }
    }
  }
  if (ot && mt.has(e))
    return mt.get(e);
  if (r) {
    var o = (
      /** @type {Derived} */
      e
    );
    if (ot) {
      var f = o.v;
      return ((o.f & q) === 0 && o.reactions !== null || bs(o)) && (f = Xr(o)), mt.set(o, f), f;
    }
    var a = (o.f & we) === 0 && !Ae && A !== null && (pr || (A.f & we) !== 0), u = (o.f & St) === 0;
    ir(o) && (a && (o.f |= we), Xn(o)), a && !u && (Zn(o), gs(o));
  }
  if (Se?.has(e))
    return Se.get(e);
  if ((e.f & it) !== 0)
    throw e.v;
  return e.v;
}
function gs(e) {
  if (e.f |= we, e.deps !== null)
    for (const t of e.deps)
      (t.reactions ?? (t.reactions = [])).push(e), (t.f & Q) !== 0 && (t.f & we) === 0 && (Zn(
        /** @type {Derived} */
        t
      ), gs(
        /** @type {Derived} */
        t
      ));
}
function bs(e) {
  if (e.v === $) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (mt.has(t) || (t.f & Q) !== 0 && bs(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function kr(e) {
  var t = Ae;
  try {
    return Ae = !0, e();
  } finally {
    Ae = t;
  }
}
const ta = ["touchstart", "touchmove"];
function ra(e) {
  return ta.includes(e);
}
const vt = Symbol("events"), ws = /* @__PURE__ */ new Set(), $r = /* @__PURE__ */ new Set();
function $t(e, t, r) {
  (t[vt] ?? (t[vt] = {}))[e] = r;
}
function na(e) {
  for (var t = 0; t < e.length; t++)
    ws.add(e[t]);
  for (var r of $r)
    r(e);
}
let xn = null;
function kn(e) {
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), n = e.type, s = e.composedPath?.() || [], i = (
    /** @type {null | Element} */
    s[0] || e.target
  );
  xn = e;
  var o = 0, f = xn === e && e[vt];
  if (f) {
    var a = s.indexOf(f);
    if (a !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e[vt] = t;
      return;
    }
    var u = s.indexOf(t);
    if (u === -1)
      return;
    a <= u && (o = a);
  }
  if (i = /** @type {Element} */
  s[o] || e.target, i !== t) {
    Bs(e, "currentTarget", {
      configurable: !0,
      get() {
        return i || r;
      }
    });
    var c = A, g = T;
    xe(null), Ue(null);
    try {
      for (var v, p = []; i !== null; ) {
        var _ = i.assignedSlot || i.parentNode || /** @type {any} */
        i.host || null;
        try {
          var y = i[vt]?.[n];
          y != null && (!/** @type {any} */
          i.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === i) && y.call(i, e);
        } catch (h) {
          v ? p.push(h) : v = h;
        }
        if (e.cancelBubble || _ === t || _ === null)
          break;
        i = _;
      }
      if (v) {
        for (let h of p)
          queueMicrotask(() => {
            throw h;
          });
        throw v;
      }
    } finally {
      e[vt] = t, delete e.currentTarget, xe(c), Ue(g);
    }
  }
}
const sa = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (e) => e
  })
);
function ia(e) {
  return (
    /** @type {string} */
    sa?.createHTML(e) ?? e
  );
}
function ms(e) {
  var t = Zr("template");
  return t.innerHTML = ia(e.replaceAll("<!>", "<!---->")), t.content;
}
function Ht(e, t) {
  var r = (
    /** @type {Effect} */
    T
  );
  r.nodes === null && (r.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function F(e, t) {
  var r = (t & hi) !== 0, n = (t & pi) !== 0, s, i = !e.startsWith("<!>");
  return () => {
    s === void 0 && (s = ms(i ? e : "<!>" + e), r || (s = /** @type {TemplateNode} */
    /* @__PURE__ */ De(s)));
    var o = (
      /** @type {TemplateNode} */
      n || ts ? document.importNode(s, !0) : s.cloneNode(!0)
    );
    if (r) {
      var f = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ De(o)
      ), a = (
        /** @type {TemplateNode} */
        o.lastChild
      );
      Ht(f, a);
    } else
      Ht(o, o);
    return o;
  };
}
// @__NO_SIDE_EFFECTS__
function aa(e, t, r = "svg") {
  var n = !e.startsWith("<!>"), s = `<${r}>${n ? e : "<!>" + e}</${r}>`, i;
  return () => {
    if (!i) {
      var o = (
        /** @type {DocumentFragment} */
        ms(s)
      ), f = (
        /** @type {Element} */
        /* @__PURE__ */ De(o)
      );
      i = /** @type {Element} */
      /* @__PURE__ */ De(f);
    }
    var a = (
      /** @type {TemplateNode} */
      i.cloneNode(!0)
    );
    return Ht(a, a), a;
  };
}
// @__NO_SIDE_EFFECTS__
function ys(e, t) {
  return /* @__PURE__ */ aa(e, t, "svg");
}
function la() {
  var e = document.createDocumentFragment(), t = document.createComment(""), r = at();
  return e.append(t, r), Ht(t, r), e;
}
function P(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function Qe(e, t) {
  var r = t == null ? "" : typeof t == "object" ? `${t}` : t;
  r !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = r, e.nodeValue = `${r}`);
}
function oa(e, t) {
  return fa(e, t);
}
const lr = /* @__PURE__ */ new Map();
function fa(e, { target: t, anchor: r, props: n = {}, events: s, context: i, intro: o = !0, transformError: f }) {
  qi();
  var a = void 0, u = Ki(() => {
    var c = r ?? t.appendChild(at());
    Ci(
      /** @type {TemplateNode} */
      c,
      {
        pending: () => {
        }
      },
      (p) => {
        jn({});
        var _ = (
          /** @type {ComponentContext} */
          ae
        );
        i && (_.c = i), s && (n.$$events = s), a = e(p, n) || {}, Un();
      },
      f
    );
    var g = /* @__PURE__ */ new Set(), v = (p) => {
      for (var _ = 0; _ < p.length; _++) {
        var y = p[_];
        if (!g.has(y)) {
          g.add(y);
          var h = ra(y);
          for (const C of [t, document]) {
            var S = lr.get(C);
            S === void 0 && (S = /* @__PURE__ */ new Map(), lr.set(C, S));
            var B = S.get(y);
            B === void 0 ? (C.addEventListener(y, kn, { passive: h }), S.set(y, 1)) : S.set(y, B + 1);
          }
        }
      }
    };
    return v(yr(ws)), $r.add(v), () => {
      for (var p of g)
        for (const h of [t, document]) {
          var _ = (
            /** @type {Map<string, number>} */
            lr.get(h)
          ), y = (
            /** @type {number} */
            _.get(p)
          );
          --y == 0 ? (h.removeEventListener(p, kn), _.delete(p), _.size === 0 && lr.delete(h)) : _.set(p, y);
        }
      $r.delete(v), c !== r && c.parentNode?.removeChild(c);
    };
  });
  return Br.set(a, u), a;
}
let Br = /* @__PURE__ */ new WeakMap();
function ua(e, t) {
  const r = Br.get(e);
  return r ? (Br.delete(e), r(t)) : Promise.resolve();
}
var Te, Le, ue, bt, rr, nr, mr;
class ca {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, r = !0) {
    /** @type {TemplateNode} */
    Ee(this, "anchor");
    /** @type {Map<Batch, Key>} */
    m(this, Te, /* @__PURE__ */ new Map());
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
    m(this, Le, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    m(this, ue, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    m(this, bt, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    m(this, rr, !0);
    /**
     * @param {Batch} batch
     */
    m(this, nr, (t) => {
      if (l(this, Te).has(t)) {
        var r = (
          /** @type {Key} */
          l(this, Te).get(t)
        ), n = l(this, Le).get(r);
        if (n)
          sn(n), l(this, bt).delete(r);
        else {
          var s = l(this, ue).get(r);
          s && (l(this, Le).set(r, s.effect), l(this, ue).delete(r), s.fragment.lastChild.remove(), this.anchor.before(s.fragment), n = s.effect);
        }
        for (const [i, o] of l(this, Te)) {
          if (l(this, Te).delete(i), i === t)
            break;
          const f = l(this, ue).get(o);
          f && (ie(f.effect), l(this, ue).delete(o));
        }
        for (const [i, o] of l(this, Le)) {
          if (i === r || l(this, bt).has(i)) continue;
          const f = () => {
            if (Array.from(l(this, Te).values()).includes(i)) {
              var u = document.createDocumentFragment();
              an(o, u), u.append(at()), l(this, ue).set(i, { effect: o, fragment: u });
            } else
              ie(o);
            l(this, bt).delete(i), l(this, Le).delete(i);
          };
          l(this, rr) || !n ? (l(this, bt).add(i), yt(o, f, !1)) : f();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    m(this, mr, (t) => {
      l(this, Te).delete(t);
      const r = Array.from(l(this, Te).values());
      for (const [n, s] of l(this, ue))
        r.includes(n) || (ie(s.effect), l(this, ue).delete(n));
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
      k
    ), s = ss();
    if (r && !l(this, Le).has(t) && !l(this, ue).has(t))
      if (s) {
        var i = document.createDocumentFragment(), o = at();
        i.append(o), l(this, ue).set(t, {
          effect: be(() => r(o)),
          fragment: i
        });
      } else
        l(this, Le).set(
          t,
          be(() => r(this.anchor))
        );
    if (l(this, Te).set(n, t), s) {
      for (const [f, a] of l(this, Le))
        f === t ? n.unskip_effect(a) : n.skip_effect(a);
      for (const [f, a] of l(this, ue))
        f === t ? n.unskip_effect(a.effect) : n.skip_effect(a.effect);
      n.oncommit(l(this, nr)), n.ondiscard(l(this, mr));
    } else
      l(this, nr).call(this, n);
  }
}
Te = new WeakMap(), Le = new WeakMap(), ue = new WeakMap(), bt = new WeakMap(), rr = new WeakMap(), nr = new WeakMap(), mr = new WeakMap();
function ve(e, t, r = !1) {
  var n = new ca(e), s = r ? Dt : 0;
  function i(o, f) {
    n.ensure(o, f);
  }
  rn(() => {
    var o = !1;
    t((f, a = 0) => {
      o = !0, i(a, f);
    }), o || i(-1, null);
  }, s);
}
function Nr(e, t) {
  return t;
}
function da(e, t, r) {
  for (var n = [], s = t.length, i, o = t.length, f = 0; f < s; f++) {
    let g = t[f];
    yt(
      g,
      () => {
        if (i) {
          if (i.pending.delete(g), i.done.add(g), i.pending.size === 0) {
            var v = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            Yr(e, yr(i.done)), v.delete(i), v.size === 0 && (e.outrogroups = null);
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
      ), c = (
        /** @type {Element} */
        u.parentNode
      );
      Vi(c), c.append(u), e.items.clear();
    }
    Yr(e, t, !a);
  } else
    i = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ?? (e.outrogroups = /* @__PURE__ */ new Set())).add(i);
}
function Yr(e, t, r = !0) {
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
  for (var s = 0; s < t.length; s++) {
    var i = t[s];
    if (n?.has(i)) {
      i.f |= Oe;
      const o = document.createDocumentFragment();
      an(i, o);
    } else
      ie(t[s], r);
  }
}
var En;
function Pr(e, t, r, n, s, i = null) {
  var o = e, f = /* @__PURE__ */ new Map(), a = (t & Ln) !== 0;
  if (a) {
    var u = (
      /** @type {Element} */
      e
    );
    o = u.appendChild(at());
  }
  var c = null, g = /* @__PURE__ */ Fi(() => {
    var C = r();
    return Nn(C) ? C : C == null ? [] : yr(C);
  }), v, p = /* @__PURE__ */ new Map(), _ = !0;
  function y(C) {
    (B.effect.f & me) === 0 && (B.pending.delete(C), B.fallback = c, va(B, v, o, t, n), c !== null && (v.length === 0 ? (c.f & Oe) === 0 ? sn(c) : (c.f ^= Oe, Yt(c, null, o)) : yt(c, () => {
      c = null;
    })));
  }
  function h(C) {
    B.pending.delete(C);
  }
  var S = rn(() => {
    v = /** @type {V[]} */
    d(g);
    for (var C = v.length, Y = /* @__PURE__ */ new Set(), ce = (
      /** @type {Batch} */
      k
    ), He = ss(), J = 0; J < C; J += 1) {
      var ze = v[J], Ke = n(ze, J), V = _ ? null : f.get(Ke);
      V ? (V.v && jt(V.v, ze), V.i && jt(V.i, J), He && ce.unskip_effect(V.e)) : (V = ha(
        f,
        _ ? o : En ?? (En = at()),
        ze,
        Ke,
        J,
        s,
        t,
        r
      ), _ || (V.e.f |= Oe), f.set(Ke, V)), Y.add(Ke);
    }
    if (C === 0 && i && !c && (_ ? c = be(() => i(o)) : (c = be(() => i(En ?? (En = at()))), c.f |= Oe)), C > Y.size && ti(), !_)
      if (p.set(ce, Y), He) {
        for (const [qt, ft] of f)
          Y.has(qt) || ce.skip_effect(ft.e);
        ce.oncommit(y), ce.ondiscard(h);
      } else
        y(ce);
    d(g);
  }), B = { effect: S, items: f, pending: p, outrogroups: null, fallback: c };
  _ = !1;
}
function Bt(e) {
  for (; e !== null && (e.f & Me) === 0; )
    e = e.next;
  return e;
}
function va(e, t, r, n, s) {
  var i = (n & di) !== 0, o = t.length, f = e.items, a = Bt(e.effect.first), u, c = null, g, v = [], p = [], _, y, h, S;
  if (i)
    for (S = 0; S < o; S += 1)
      _ = t[S], y = s(_, S), h = /** @type {EachItem} */
      f.get(y).e, (h.f & Oe) === 0 && (h.nodes?.a?.measure(), (g ?? (g = /* @__PURE__ */ new Set())).add(h));
  for (S = 0; S < o; S += 1) {
    if (_ = t[S], y = s(_, S), h = /** @type {EachItem} */
    f.get(y).e, e.outrogroups !== null)
      for (const V of e.outrogroups)
        V.pending.delete(h), V.done.delete(h);
    if ((h.f & te) !== 0 && (sn(h), i && (h.nodes?.a?.unfix(), (g ?? (g = /* @__PURE__ */ new Set())).delete(h))), (h.f & Oe) !== 0)
      if (h.f ^= Oe, h === a)
        Yt(h, null, r);
      else {
        var B = c ? c.next : a;
        h === e.effect.last && (e.effect.last = h.prev), h.prev && (h.prev.next = h.next), h.next && (h.next.prev = h.prev), et(e, c, h), et(e, h, B), Yt(h, B, r), c = h, v = [], p = [], a = Bt(c.next);
        continue;
      }
    if (h !== a) {
      if (u !== void 0 && u.has(h)) {
        if (v.length < p.length) {
          var C = p[0], Y;
          c = C.prev;
          var ce = v[0], He = v[v.length - 1];
          for (Y = 0; Y < v.length; Y += 1)
            Yt(v[Y], C, r);
          for (Y = 0; Y < p.length; Y += 1)
            u.delete(p[Y]);
          et(e, ce.prev, He.next), et(e, c, ce), et(e, He, C), a = C, c = He, S -= 1, v = [], p = [];
        } else
          u.delete(h), Yt(h, a, r), et(e, h.prev, h.next), et(e, h, c === null ? e.effect.first : c.next), et(e, c, h), c = h;
        continue;
      }
      for (v = [], p = []; a !== null && a !== h; )
        (u ?? (u = /* @__PURE__ */ new Set())).add(a), p.push(a), a = Bt(a.next);
      if (a === null)
        continue;
    }
    (h.f & Oe) === 0 && v.push(h), c = h, a = Bt(h.next);
  }
  if (e.outrogroups !== null) {
    for (const V of e.outrogroups)
      V.pending.size === 0 && (Yr(e, yr(V.done)), e.outrogroups?.delete(V));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (a !== null || u !== void 0) {
    var J = [];
    if (u !== void 0)
      for (h of u)
        (h.f & te) === 0 && J.push(h);
    for (; a !== null; )
      (a.f & te) === 0 && a !== e.fallback && J.push(a), a = Bt(a.next);
    var ze = J.length;
    if (ze > 0) {
      var Ke = (n & Ln) !== 0 && o === 0 ? r : null;
      if (i) {
        for (S = 0; S < ze; S += 1)
          J[S].nodes?.a?.measure();
        for (S = 0; S < ze; S += 1)
          J[S].nodes?.a?.fix();
      }
      da(e, J, Ke);
    }
  }
  i && wt(() => {
    if (g !== void 0)
      for (h of g)
        h.nodes?.a?.apply();
  });
}
function ha(e, t, r, n, s, i, o, f) {
  var a = (o & ui) !== 0 ? (o & vi) === 0 ? /* @__PURE__ */ Hi(r, !1, !1) : Tt(r) : null, u = (o & ci) !== 0 ? Tt(s) : null;
  return {
    v: a,
    i: u,
    e: be(() => (i(t, a ?? r, u ?? s, f), () => {
      e.delete(n);
    }))
  };
}
function Yt(e, t, r) {
  if (e.nodes)
    for (var n = e.nodes.start, s = e.nodes.end, i = t && (t.f & Oe) === 0 ? (
      /** @type {EffectNodes} */
      t.nodes.start
    ) : r; n !== null; ) {
      var o = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ sr(n)
      );
      if (i.before(n), n === s)
        return;
      n = o;
    }
}
function et(e, t, r) {
  t === null ? e.effect.first = r : t.next = r, r === null ? e.effect.last = t : r.prev = t;
}
function pa(e, t, r = !1, n = !1, s = !1, i = !1) {
  var o = e, f = "";
  if (r)
    var a = (
      /** @type {Element} */
      e
    );
  Pe(() => {
    var u = (
      /** @type {Effect} */
      T
    );
    if (f !== (f = t() ?? "")) {
      if (r) {
        u.nodes = null, a.innerHTML = /** @type {string} */
        f, f !== "" && Ht(
          /** @type {TemplateNode} */
          /* @__PURE__ */ De(a),
          /** @type {TemplateNode} */
          a.lastChild
        );
        return;
      }
      if (u.nodes !== null && (os(
        u.nodes.start,
        /** @type {TemplateNode} */
        u.nodes.end
      ), u.nodes = null), f !== "") {
        var c = n ? _i : s ? gi : void 0, g = (
          /** @type {HTMLTemplateElement | SVGElement | MathMLElement} */
          Zr(n ? "svg" : s ? "math" : "template", c)
        );
        g.innerHTML = /** @type {any} */
        f;
        var v = n || s ? g : (
          /** @type {HTMLTemplateElement} */
          g.content
        );
        if (Ht(
          /** @type {TemplateNode} */
          /* @__PURE__ */ De(v),
          /** @type {TemplateNode} */
          v.lastChild
        ), n || s)
          for (; /* @__PURE__ */ De(v); )
            o.before(
              /** @type {TemplateNode} */
              /* @__PURE__ */ De(v)
            );
        else
          o.before(v);
      }
    }
  });
}
function _a(e, t) {
  as(() => {
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
      const s = Zr("style");
      s.id = t.hash, s.textContent = t.code, n.appendChild(s);
    }
  });
}
function ga(e, t, r) {
  var n = e == null ? "" : "" + e;
  return n = n ? n + " " + t : t, n === "" ? null : n;
}
function Tn(e, t, r, n, s, i) {
  var o = e.__className;
  if (o !== r || o === void 0) {
    var f = ga(r, n);
    f == null ? e.removeAttribute("class") : e.className = f, e.__className = r;
  }
  return i;
}
const ba = Symbol("is custom element"), wa = Symbol("is html");
function ma(e, t, r, n) {
  var s = ya(e);
  s[t] !== (s[t] = r) && (r == null ? e.removeAttribute(t) : typeof r != "string" && xa(e).includes(t) ? e[t] = r : e.setAttribute(t, r));
}
function ya(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [ba]: e.nodeName.includes("-"),
      [wa]: e.namespaceURI === On
    })
  );
}
var Sn = /* @__PURE__ */ new Map();
function xa(e) {
  var t = e.getAttribute("is") || e.nodeName, r = Sn.get(t);
  if (r) return r;
  Sn.set(t, r = []);
  for (var n, s = e, i = Element.prototype; i !== s; ) {
    n = Ys(s);
    for (var o in n)
      n[o].set && r.push(o);
    s = Pn(s);
  }
  return r;
}
function ka(e, t, r = t) {
  var n = /* @__PURE__ */ new WeakSet();
  Bi(e, "input", async (s) => {
    var i = s ? e.defaultValue : e.value;
    if (i = Rr(e) ? Ir(i) : i, r(i), k !== null && n.add(k), await _s(), i !== (i = t())) {
      var o = e.selectionStart, f = e.selectionEnd, a = e.value.length;
      if (e.value = i ?? "", f !== null) {
        var u = e.value.length;
        o === f && f === a && u > a ? (e.selectionStart = u, e.selectionEnd = u) : (e.selectionStart = o, e.selectionEnd = Math.min(f, u));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  kr(t) == null && e.value && (r(Rr(e) ? Ir(e.value) : e.value), k !== null && n.add(k)), tn(() => {
    var s = t();
    if (e === document.activeElement) {
      var i = (
        /** @type {Batch} */
        k
      );
      if (n.has(i))
        return;
    }
    Rr(e) && s === Ir(e.value) || e.type === "date" && !s && !e.value || s !== e.value && (e.value = s ?? "");
  });
}
function Rr(e) {
  var t = e.type;
  return t === "number" || t === "range";
}
function Ir(e) {
  return e === "" ? null : +e;
}
function An(e, t) {
  return e === t || e?.[or] === t;
}
function Mn(e = {}, t, r, n) {
  var s = (
    /** @type {ComponentContext} */
    ae.r
  ), i = (
    /** @type {Effect} */
    T
  );
  return as(() => {
    var o, f;
    return tn(() => {
      o = f, f = [], kr(() => {
        e !== r(...f) && (t(e, ...f), o && An(r(...o), e) && t(null, ...o));
      });
    }), () => {
      let a = i;
      for (; a !== s && a.parent !== null && a.parent.f & Or; )
        a = a.parent;
      const u = () => {
        f && An(r(...f), e) && t(null, ...f);
      }, c = a.teardown;
      a.teardown = () => {
        u(), c?.();
      };
    };
  }), e;
}
function Ea(e) {
  ae === null && Qs(), Vr(() => {
    const t = kr(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
const Ta = "5";
var Cn;
typeof window < "u" && ((Cn = window.__svelte ?? (window.__svelte = {})).v ?? (Cn.v = /* @__PURE__ */ new Set())).add(Ta);
var Sa = /* @__PURE__ */ F('<button><span class="text-lg svelte-beco3k"> </span> <span class="text-sm font-medium svelte-beco3k"> </span></button>'), Aa = /* @__PURE__ */ F('<div class="flex gap-2 px-4 py-3 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 flex-shrink-0 svelte-beco3k"></div>'), Ma = /* @__PURE__ */ F('<span class="text-2xl svelte-beco3k"> </span>'), Ca = /* @__PURE__ */ F('<span class="text-2xl svelte-beco3k">🤖</span>'), Na = /* @__PURE__ */ F(`<p class="svelte-beco3k">Welcome back! I'm your AI assistant. Ask me anything about this realm
												— governance, proposals, codices, or general questions.</p>`), Pa = /* @__PURE__ */ F(`<p class="svelte-beco3k">Hello! I'm the realm's AI assistant. Feel free to ask me about this
												realm, its governance structure, or anything you'd like to know.</p>`), Ra = /* @__PURE__ */ F('<div class="flex justify-start mb-6 mt-8 svelte-beco3k"><div class="flex items-start space-x-4 max-w-[85%] svelte-beco3k"><div class="flex-shrink-0 w-12 h-12 rounded-full overflow-hidden border-2 border-gray-200 dark:border-gray-600 shadow-lg flex items-center justify-center bg-white dark:bg-gray-700 svelte-beco3k"><!></div> <div class="flex-1 svelte-beco3k"><div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl rounded-bl-md px-6 py-5 shadow-lg svelte-beco3k"><div class="text-sm text-gray-600 dark:text-gray-400 space-y-3 leading-relaxed svelte-beco3k"><!></div></div></div></div></div>'), Ia = /* @__PURE__ */ F('<span class="text-xl svelte-beco3k"> </span>'), La = /* @__PURE__ */ F('<span class="text-xl svelte-beco3k">🤖</span>'), Oa = /* @__PURE__ */ F('<div class="flex-shrink-0 w-10 h-10 rounded-full overflow-hidden border-2 border-gray-200 dark:border-gray-600 shadow-md flex items-center justify-center bg-white dark:bg-gray-700 svelte-beco3k"><!></div>'), Da = /* @__PURE__ */ F('<div class="bg-indigo-600 text-white rounded-2xl rounded-br-md px-5 py-4 shadow-lg svelte-beco3k"><div class="text-sm leading-relaxed whitespace-pre-wrap font-sans m-0 svelte-beco3k"> </div></div>'), Fa = /* @__PURE__ */ F('<div class="markdown-content prose prose-sm max-w-none dark:prose-invert svelte-beco3k"></div>'), ja = /* @__PURE__ */ F('<div><div class="flex items-start space-x-4 max-w-[85%] svelte-beco3k"><!> <div class="flex-1 svelte-beco3k"><!></div></div></div>'), Ua = /* @__PURE__ */ F('<span class="text-xl svelte-beco3k"> </span>'), Ha = /* @__PURE__ */ F('<span class="text-xl svelte-beco3k">🤖</span>'), za = /* @__PURE__ */ F('<div class="mb-6 flex justify-start svelte-beco3k"><div class="flex items-start space-x-4 max-w-[85%] svelte-beco3k"><div class="flex-shrink-0 w-10 h-10 rounded-full overflow-hidden border-2 border-gray-200 dark:border-gray-600 shadow-md flex items-center justify-center bg-white dark:bg-gray-700 svelte-beco3k"><!></div> <div class="flex-1 svelte-beco3k"><div class="flex items-center space-x-3 text-gray-600 dark:text-gray-400 svelte-beco3k"><div class="typing-animation svelte-beco3k"><span class="svelte-beco3k"></span> <span class="svelte-beco3k"></span> <span class="svelte-beco3k"></span></div></div></div></div></div>'), qa = /* @__PURE__ */ F('<div class="mb-4 svelte-beco3k"><div class="inline-block rounded-lg px-4 py-2 bg-red-50 border border-red-200 text-red-800 svelte-beco3k"> </div></div>'), Va = /* @__PURE__ */ F("<!> <!> <!>", 1), $a = /* @__PURE__ */ F('<div class="flex items-center gap-2 text-gray-500 dark:text-gray-400 svelte-beco3k"><svg class="animate-spin h-4 w-4 svelte-beco3k" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25 svelte-beco3k" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75 svelte-beco3k" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path></svg> <span class="text-xs svelte-beco3k">Loading suggestions...</span></div>'), Ba = /* @__PURE__ */ F('<button class="px-3 py-1.5 text-xs bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 whitespace-nowrap svelte-beco3k"> </button>'), Ya = /* @__PURE__ */ ys('<svg class="animate-spin h-4 w-4 svelte-beco3k" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25 svelte-beco3k" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75 svelte-beco3k" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path></svg>'), Ga = /* @__PURE__ */ ys('<svg class="w-4 h-4 svelte-beco3k" fill="currentColor" viewBox="0 0 20 20"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" class="svelte-beco3k"></path></svg>'), Wa = /* @__PURE__ */ F('<div class="w-full flex flex-col max-w-none svelte-beco3k" style="height: calc(100vh - 80px);"><h2 class="text-2xl font-bold text-gray-900 mb-6 flex-shrink-0 svelte-beco3k">AI Chat</h2> <div class="w-full flex flex-col flex-grow min-h-0 svelte-beco3k"><!> <div class="w-full flex-grow flex flex-col m-0 p-0 rounded-none border border-gray-200 bg-white max-w-none min-h-0 svelte-beco3k"><div class="flex-grow overflow-y-auto p-4 bg-gray-50 dark:bg-gray-800 svelte-beco3k" style="min-height: 300px;"><!></div></div> <div class="flex-shrink-0 flex flex-col p-4 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 svelte-beco3k"><div class="mb-3 px-1 svelte-beco3k"><div class="flex flex-wrap gap-2 justify-center svelte-beco3k"><!></div></div> <div class="flex gap-2 svelte-beco3k"><textarea class="flex-grow resize-none px-4 py-3 rounded-lg border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white svelte-beco3k" placeholder="Type a message..." rows="1" style="min-height: 40px; max-height: 120px; overflow-y: auto; height: 40px;"></textarea> <button class="px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors duration-200 flex items-center justify-center min-w-[50px] svelte-beco3k" title="Send message (Enter)"><!></button></div></div></div></div>');
const Ka = {
  hash: "svelte-beco3k",
  code: `.typing-animation.svelte-beco3k {display:flex;align-items:center;gap:2px;}.typing-animation.svelte-beco3k span:where(.svelte-beco3k) {width:6px;height:6px;background-color:#9ca3af;border-radius:50%;
		animation: svelte-beco3k-typing 1.4s infinite ease-in-out;}.typing-animation.svelte-beco3k span:where(.svelte-beco3k):nth-child(1) {animation-delay:0s;}.typing-animation.svelte-beco3k span:where(.svelte-beco3k):nth-child(2) {animation-delay:0.2s;}.typing-animation.svelte-beco3k span:where(.svelte-beco3k):nth-child(3) {animation-delay:0.4s;}

	@keyframes svelte-beco3k-typing {
		0%,
		60%,
		100% {
			transform: translateY(0);
			opacity: 0.4;
		}
		30% {
			transform: translateY(-10px);
			opacity: 1;
		}
	}`
};
function Ja(e, t) {
  jn(t, !0), _a(e, Ka);
  let r = /* @__PURE__ */ L(st([])), n = /* @__PURE__ */ L(""), s = /* @__PURE__ */ L(!1), i = /* @__PURE__ */ L(""), o = /* @__PURE__ */ L(void 0), f = /* @__PURE__ */ L(st([])), a = /* @__PURE__ */ L(!1), u = /* @__PURE__ */ L(void 0), c = /* @__PURE__ */ L(st([])), g = /* @__PURE__ */ L(null), v = /* @__PURE__ */ L(!1), p = /* @__PURE__ */ L(null), _ = /* @__PURE__ */ L(!1);
  const y = "https://geister-api.realmsgos.dev/";
  let h = `${y}api/ask`, S = `${y}suggestions`, B = `${y}api/personas/assistants`, C = "", Y = "", ce, He, J = /* @__PURE__ */ L(!1);
  Ea(async () => {
    C = t.ctx.config?.canisterId || "", ce = t.ctx.principal?.subscribe?.((b) => {
      Y = b || "";
    }), He = t.ctx.isAuthenticated?.subscribe?.((b) => {
      w(J, b, !0);
    }), ze(), await V(), d(_) || await qt();
  });
  function ze() {
    try {
      const b = new URLSearchParams(window.location.search), x = b.get("explain");
      if (!x) return;
      const [H, R] = x.split(":");
      if (H === "codex" && R)
        w(_, !0), t.ctx.backend.extension_sync_call("codex_viewer", "get_codex_details", JSON.stringify({ codex_id: R })).then((I) => {
          if (I.success) {
            const re = (typeof I.response == "string" ? JSON.parse(I.response) : I.response).codex?.name || `codex_${R}`, z = `/extensions/codex_viewer/${R}`;
            w(p, R, !0), w(n, `Please explain this codex: [${re}](${z})`), setTimeout(() => ft(), 300);
          }
        }).catch((I) => {
          console.error("Failed to fetch codex for explanation:", I), w(_, !1);
        });
      else if (H === "financial_statements") {
        w(_, !0);
        const I = b.get("context") || "";
        w(n, `Please explain the following financial statements of this realm in plain language. Highlight key insights, any concerns, and the overall financial health:

${I}`), setTimeout(() => ft(), 300);
      }
    } catch (b) {
      console.error("Error handling explain param:", b);
    }
  }
  Vr(() => {
    d(r), _s().then(Ke);
  });
  function Ke() {
    d(o) && (d(o).scrollTop = d(o).scrollHeight);
  }
  async function V() {
    if (!d(v)) {
      w(v, !0);
      try {
        const b = await fetch(B, {
          method: "GET",
          headers: { "Content-Type": "application/json" }
        });
        if (!b.ok) throw new Error(`HTTP ${b.status}`);
        const x = await b.json();
        x.assistants && Array.isArray(x.assistants) && (w(c, x.assistants, !0), d(c).length > 0 && !d(g) && w(g, d(c)[0], !0));
      } catch (b) {
        console.error("Error fetching assistants:", b);
      } finally {
        w(v, !1);
      }
    }
  }
  async function qt() {
    if (!d(a)) {
      w(a, !0);
      try {
        const b = new URLSearchParams({
          user_principal: Y || "",
          realm_principal: C || "",
          persona: d(g)?.id || "ashoka"
        }), x = await fetch(`${S}?${b.toString()}`, {
          method: "GET",
          headers: { "Content-Type": "application/json" }
        });
        if (!x.ok) throw new Error(`HTTP ${x.status}`);
        const H = await x.json();
        H.suggestions && Array.isArray(H.suggestions) && w(f, H.suggestions, !0);
      } catch (b) {
        console.error("Error fetching suggestions:", b);
      } finally {
        w(a, !1);
      }
    }
  }
  async function ft() {
    if (!d(n).trim()) return;
    w(
      r,
      [
        ...d(r),
        { text: d(n), isUser: !0 }
      ],
      !0
    );
    const b = d(n);
    w(n, ""), w(s, !0), w(i, "");
    try {
      const x = {
        question: b,
        realm_principal: C,
        user_principal: Y,
        stream: !0,
        persona: d(g)?.id || "ashoka"
      };
      d(p) && (x.explain_codex_id = d(p), w(p, null));
      const H = await fetch(h, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "text/event-stream"
        },
        body: JSON.stringify(x)
      });
      if (!H.ok) throw new Error(`HTTP error! Status: ${H.status}`);
      const R = H.body?.getReader();
      if (!R) throw new Error("Response body is not readable");
      const I = new TextDecoder();
      let j = "";
      try {
        for (; ; ) {
          const { done: re, value: z } = await R.read();
          if (re) break;
          const ke = I.decode(z, { stream: !0 }).split(`
`);
          for (const G of ke)
            if (G.startsWith("data: ")) {
              const de = G.slice(6);
              if (de === "[DONE]") continue;
              try {
                const Je = JSON.parse(de);
                Je.text && (j += Je.text);
              } catch {
                j += de;
              }
            } else G.trim() && !G.startsWith(":") && (j += G);
          j && (d(r).length === 0 || d(r)[d(r).length - 1].isUser) ? w(r, [...d(r), { text: j, isUser: !1 }], !0) : j && w(r, d(r).map((G, de) => de === d(r).length - 1 && !G.isUser ? { ...G, text: j } : G), !0);
        }
      } finally {
        R.releaseLock();
      }
      j.trim() || (d(r).length > 0 && !d(r)[d(r).length - 1].isUser ? w(r, d(r).map((re, z) => z === d(r).length - 1 ? { ...re, text: "No response from LLM" } : re), !0) : w(
        r,
        [
          ...d(r),
          { text: "No response from LLM", isUser: !1 }
        ],
        !0
      )), w(s, !1), await qt();
    } catch (x) {
      console.error("Error calling LLM:", x), x instanceof TypeError || x instanceof Error && x.message.includes("fetch") ? w(i, "Connection error. Please check your network and try again.") : x instanceof Error && x.message.includes("HTTP error") ? w(i, "Server error. Please try again later.") : w(i, "Failed to get a response. Please try again."), d(r).length > 0 && !d(r)[d(r).length - 1].isUser && w(r, d(r).slice(0, -1), !0);
    } finally {
      w(s, !1);
    }
  }
  function xs(b) {
    return b.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/\*(.+?)\*/g, "<em>$1</em>").replace(/`(.+?)`/g, "<code>$1</code>").replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" class="text-blue-600 underline">$1</a>').replace(/^### (.+)$/gm, '<h3 class="text-lg font-semibold mt-4 mb-2">$1</h3>').replace(/^## (.+)$/gm, '<h2 class="text-xl font-semibold mt-4 mb-2">$1</h2>').replace(/^# (.+)$/gm, '<h1 class="text-2xl font-bold mt-4 mb-2">$1</h1>').replace(/^- (.+)$/gm, '<li class="ml-4 list-disc">$1</li>').replace(/^(\d+)\. (.+)$/gm, '<li class="ml-4 list-decimal">$2</li>').replace(/\n{2,}/g, '</p><p class="my-2">').replace(/\n/g, "<br/>").replace(/^/, '<p class="my-2">').replace(/$/, "</p>");
  }
  function ln() {
    if (d(u)) {
      d(u).style.height = "auto";
      const b = Math.max(40, Math.min(d(u).scrollHeight, 120));
      d(u).style.height = b + "px";
    }
  }
  function ks(b) {
    b.key === "Enter" && !b.shiftKey && (b.preventDefault(), ft()), setTimeout(ln, 0);
  }
  function Es(b) {
    w(n, b, !0), ft();
  }
  function Ts(b) {
    w(g, b, !0), w(r, [], !0), qt();
  }
  Vr(() => () => {
    ce?.(), He?.();
  });
  var on = Wa(), Ss = Ne(M(on), 2), fn = M(Ss);
  {
    var As = (b) => {
      var x = Aa();
      Pr(x, 21, () => d(c), Nr, (H, R) => {
        var I = Sa(), j = M(I), re = M(j), z = Ne(j, 2), X = M(z);
        Pe(() => {
          Tn(
            I,
            1,
            `flex items-center gap-2 px-3 py-2 rounded-lg border transition-colors duration-200
							${d(g)?.id === d(R).id ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300" : "border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"}`,
            "svelte-beco3k"
          ), ma(I, "title", d(R).description), Qe(re, d(R).emoji), Qe(X, d(R).name);
        }), $t("click", I, () => Ts(d(R))), P(H, I);
      }), P(b, x);
    };
    ve(fn, (b) => {
      d(c).length > 1 && b(As);
    });
  }
  var un = Ne(fn, 2), cn = M(un), Ms = M(cn);
  {
    var Cs = (b) => {
      var x = Ra(), H = M(x), R = M(H), I = M(R);
      {
        var j = (W) => {
          var K = Ma(), Xe = M(K);
          Pe(() => Qe(Xe, d(g).emoji)), P(W, K);
        }, re = (W) => {
          var K = Ca();
          P(W, K);
        };
        ve(I, (W) => {
          d(g) ? W(j) : W(re, -1);
        });
      }
      var z = Ne(R, 2), X = M(z), ke = M(X), G = M(ke);
      {
        var de = (W) => {
          var K = Na();
          P(W, K);
        }, Je = (W) => {
          var K = Pa();
          P(W, K);
        };
        ve(G, (W) => {
          d(J) ? W(de) : W(Je, -1);
        });
      }
      P(b, x);
    }, Ns = (b) => {
      var x = Va(), H = bn(x);
      Pr(H, 17, () => d(r), Nr, (z, X) => {
        var ke = ja(), G = M(ke), de = M(G);
        {
          var Je = (Ce) => {
            var Ze = Oa(), Sr = M(Ze);
            {
              var Ar = (At) => {
                var ar = Ia(), zs = M(ar);
                Pe(() => Qe(zs, d(g).emoji)), P(At, ar);
              }, Hs = (At) => {
                var ar = La();
                P(At, ar);
              };
              ve(Sr, (At) => {
                d(g) ? At(Ar) : At(Hs, -1);
              });
            }
            P(Ce, Ze);
          };
          ve(de, (Ce) => {
            d(X).isUser || Ce(Je);
          });
        }
        var W = Ne(de, 2), K = M(W);
        {
          var Xe = (Ce) => {
            var Ze = Da(), Sr = M(Ze), Ar = M(Sr);
            Pe(() => Qe(Ar, d(X).text)), P(Ce, Ze);
          }, Tr = (Ce) => {
            var Ze = Fa();
            pa(Ze, () => xs(d(X).text), !0), P(Ce, Ze);
          };
          ve(K, (Ce) => {
            d(X).isUser ? Ce(Xe) : Ce(Tr, -1);
          });
        }
        Pe(() => Tn(ke, 1, `mb-6 ${d(X).isUser ? "flex justify-end" : "flex justify-start"}`, "svelte-beco3k")), P(z, ke);
      });
      var R = Ne(H, 2);
      {
        var I = (z) => {
          var X = za(), ke = M(X), G = M(ke), de = M(G);
          {
            var Je = (K) => {
              var Xe = Ua(), Tr = M(Xe);
              Pe(() => Qe(Tr, d(g).emoji)), P(K, Xe);
            }, W = (K) => {
              var Xe = Ha();
              P(K, Xe);
            };
            ve(de, (K) => {
              d(g) ? K(Je) : K(W, -1);
            });
          }
          P(z, X);
        };
        ve(R, (z) => {
          d(s) && z(I);
        });
      }
      var j = Ne(R, 2);
      {
        var re = (z) => {
          var X = qa(), ke = M(X), G = M(ke);
          Pe(() => Qe(G, d(i))), P(z, X);
        };
        ve(j, (z) => {
          d(i) && z(re);
        });
      }
      P(b, x);
    };
    ve(Ms, (b) => {
      d(r).length === 0 && !d(_) ? b(Cs) : b(Ns, -1);
    });
  }
  Mn(cn, (b) => w(o, b), () => d(o));
  var Ps = Ne(un, 2), dn = M(Ps), Rs = M(dn), Is = M(Rs);
  {
    var Ls = (b) => {
      var x = $a();
      P(b, x);
    }, Os = (b) => {
      var x = la(), H = bn(x);
      Pr(H, 17, () => d(f), Nr, (R, I) => {
        var j = Ba(), re = M(j);
        Pe(() => Qe(re, d(I))), $t("click", j, () => Es(d(I))), P(R, j);
      }), P(b, x);
    };
    ve(Is, (b) => {
      d(a) ? b(Ls) : d(f).length > 0 && b(Os, 1);
    });
  }
  var Ds = Ne(dn, 2), Vt = M(Ds);
  Mn(Vt, (b) => w(u, b), () => d(u));
  var Er = Ne(Vt, 2), Fs = M(Er);
  {
    var js = (b) => {
      var x = Ya();
      P(b, x);
    }, Us = (b) => {
      var x = Ga();
      P(b, x);
    };
    ve(Fs, (b) => {
      d(s) ? b(js) : b(Us, -1);
    });
  }
  Pe((b) => Er.disabled = b, [() => d(s) || !d(n).trim()]), $t("keydown", Vt, ks), $t("input", Vt, () => ln()), ka(Vt, () => d(n), (b) => w(n, b)), $t("click", Er, () => ft()), P(e, on), Un();
}
na(["click", "keydown", "input"]);
function Qa(e, t) {
  const r = oa(Ja, { target: e, props: { ctx: t } });
  return {
    unmount() {
      try {
        ua(r);
      } catch {
      }
    }
  };
}
export {
  Qa as default
};
