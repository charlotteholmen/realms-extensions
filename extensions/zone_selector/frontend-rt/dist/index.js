var ki = Object.defineProperty;
var tr = (e) => {
  throw TypeError(e);
};
var Ti = (e, t, n) => t in e ? ki(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var _e = (e, t, n) => Ti(e, typeof t != "symbol" ? t + "" : t, n), bn = (e, t, n) => t.has(e) || tr("Cannot " + n);
var l = (e, t, n) => (bn(e, t, "read from private field"), n ? n.call(e) : t.get(e)), x = (e, t, n) => t.has(e) ? tr("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), k = (e, t, n, r) => (bn(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), N = (e, t, n) => (bn(e, t, "access private method"), n);
var _r = Array.isArray, Si = Array.prototype.indexOf, xt = Array.prototype.includes, _n = Array.from, Ai = Object.defineProperty, zt = Object.getOwnPropertyDescriptor, Mi = Object.prototype, Ci = Array.prototype, Ni = Object.getPrototypeOf, nr = Object.isExtensible;
const Fi = () => {
};
function Li(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function gr() {
  var e, t, n = new Promise((r, i) => {
    e = r, t = i;
  });
  return { promise: n, resolve: e, reject: t };
}
const j = 2, Et = 4, gn = 8, mr = 1 << 24, Se = 16, ye = 32, Ue = 64, En = 128, ue = 512, z = 1024, q = 2048, Ae = 4096, Y = 8192, ce = 16384, ut = 32768, kn = 1 << 25, kt = 65536, Tn = 1 << 17, Oi = 1 << 18, Mt = 1 << 19, Ri = 1 << 20, Ie = 1 << 25, ot = 65536, un = 1 << 21, Dt = 1 << 22, Ze = 1 << 23, tn = Symbol("$state"), Fe = new class extends Error {
  constructor() {
    super(...arguments);
    _e(this, "name", "StaleReactionError");
    _e(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
function zi(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function Ii() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Pi(e, t, n) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function Di(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Bi() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Vi(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function qi() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function ji() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Zi() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Hi() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Ui() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
const Yi = 1, $i = 2, Gi = 16, Ji = 1, Ki = 2, I = Symbol(), Wi = "http://www.w3.org/1999/xhtml";
function Xi() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function Qi() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function wr(e) {
  return e === this.v;
}
function es(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function yr(e) {
  return !es(e, this.v);
}
let Q = null;
function Tt(e) {
  Q = e;
}
function br(e, t = !1, n) {
  Q = {
    p: Q,
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
function xr(e) {
  var t = (
    /** @type {ComponentContext} */
    Q
  ), n = t.e;
  if (n !== null) {
    t.e = null;
    for (var r of n)
      Zr(r);
  }
  return t.i = !0, Q = t.p, /** @type {T} */
  {};
}
function Er() {
  return !0;
}
let Ke = [];
function kr() {
  var e = Ke;
  Ke = [], Li(e);
}
function _t(e) {
  if (Ke.length === 0 && !It) {
    var t = Ke;
    queueMicrotask(() => {
      t === Ke && kr();
    });
  }
  Ke.push(e);
}
function ts() {
  for (; Ke.length > 0; )
    kr();
}
function Tr(e) {
  var t = S;
  if (t === null)
    return T.f |= Ze, e;
  if ((t.f & ut) === 0 && (t.f & Et) === 0)
    throw e;
  je(e, t);
}
function je(e, t) {
  for (; t !== null; ) {
    if ((t.f & En) !== 0) {
      if ((t.f & ut) === 0)
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
const ns = -7169;
function O(e, t) {
  e.f = e.f & ns | t;
}
function Pn(e) {
  (e.f & ue) !== 0 || e.deps === null ? O(e, z) : O(e, Ae);
}
function Sr(e) {
  if (e !== null)
    for (const t of e)
      (t.f & j) === 0 || (t.f & ot) === 0 || (t.f ^= ot, Sr(
        /** @type {Derived} */
        t.deps
      ));
}
function Ar(e, t, n) {
  (e.f & q) !== 0 ? t.add(e) : (e.f & Ae) !== 0 && n.add(e), Sr(e.deps), O(e, z);
}
const Ge = /* @__PURE__ */ new Set();
let A = null, me = null, Sn = null, It = !1, xn = !1, vt = null, nn = null;
var rr = 0;
let rs = 1;
var gt, mt, Qe, Le, Ee, Vt, ne, qt, Ve, Oe, ke, wt, yt, et, R, rn, Mr, sn, An, ln, is;
const hn = class hn {
  constructor() {
    x(this, R);
    _e(this, "id", rs++);
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
    x(this, gt, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    x(this, mt, /* @__PURE__ */ new Set());
    /**
     * Callbacks that should run only when a fork is committed.
     * @type {Set<(batch: Batch) => void>}
     */
    x(this, Qe, /* @__PURE__ */ new Set());
    /**
     * Async effects that are currently in flight
     * @type {Map<Effect, number>}
     */
    x(this, Le, /* @__PURE__ */ new Map());
    /**
     * Async effects that are currently in flight, _not_ inside a pending boundary
     * @type {Map<Effect, number>}
     */
    x(this, Ee, /* @__PURE__ */ new Map());
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    x(this, Vt, null);
    /**
     * The root effects that need to be flushed
     * @type {Effect[]}
     */
    x(this, ne, []);
    /**
     * Effects created while this batch was active.
     * @type {Effect[]}
     */
    x(this, qt, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    x(this, Ve, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    x(this, Oe, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    x(this, ke, /* @__PURE__ */ new Map());
    /**
     * Inverse of #skipped_branches which we need to tell prior batches to unskip them when committing
     * @type {Set<Effect>}
     */
    x(this, wt, /* @__PURE__ */ new Set());
    _e(this, "is_fork", !1);
    x(this, yt, !1);
    /** @type {Set<Batch>} */
    x(this, et, /* @__PURE__ */ new Set());
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(t) {
    l(this, ke).has(t) || l(this, ke).set(t, { d: [], m: [] }), l(this, wt).delete(t);
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   * @param {(e: Effect) => void} callback
   */
  unskip_effect(t, n = (r) => this.schedule(r)) {
    var r = l(this, ke).get(t);
    if (r) {
      l(this, ke).delete(t);
      for (var i of r.d)
        O(i, q), n(i);
      for (i of r.m)
        O(i, Ae), n(i);
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
  capture(t, n, r = !1) {
    t.v !== I && !this.previous.has(t) && this.previous.set(t, t.v), (t.f & Ze) === 0 && (this.current.set(t, [n, r]), me?.set(t, n)), this.is_fork || (t.v = n);
  }
  activate() {
    A = this;
  }
  deactivate() {
    A = null, me = null;
  }
  flush() {
    try {
      xn = !0, A = this, N(this, R, sn).call(this);
    } finally {
      rr = 0, Sn = null, vt = null, nn = null, xn = !1, A = null, me = null, it.clear();
    }
  }
  discard() {
    for (const t of l(this, mt)) t(this);
    l(this, mt).clear(), l(this, Qe).clear(), Ge.delete(this);
  }
  /**
   * @param {Effect} effect
   */
  register_created_effect(t) {
    l(this, qt).push(t);
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  increment(t, n) {
    let r = l(this, Le).get(n) ?? 0;
    if (l(this, Le).set(n, r + 1), t) {
      let i = l(this, Ee).get(n) ?? 0;
      l(this, Ee).set(n, i + 1);
    }
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   * @param {boolean} skip - whether to skip updates (because this is triggered by a stale reaction)
   */
  decrement(t, n, r) {
    let i = l(this, Le).get(n) ?? 0;
    if (i === 1 ? l(this, Le).delete(n) : l(this, Le).set(n, i - 1), t) {
      let s = l(this, Ee).get(n) ?? 0;
      s === 1 ? l(this, Ee).delete(n) : l(this, Ee).set(n, s - 1);
    }
    l(this, yt) || r || (k(this, yt, !0), _t(() => {
      k(this, yt, !1), this.flush();
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
      l(this, Oe).add(r);
    t.clear(), n.clear();
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
    l(this, Qe).add(t);
  }
  run_fork_commit_callbacks() {
    for (const t of l(this, Qe)) t(this);
    l(this, Qe).clear();
  }
  settled() {
    return (l(this, Vt) ?? k(this, Vt, gr())).promise;
  }
  static ensure() {
    if (A === null) {
      const t = A = new hn();
      xn || (Ge.add(A), It || _t(() => {
        A === t && t.flush();
      }));
    }
    return A;
  }
  apply() {
    {
      me = null;
      return;
    }
  }
  /**
   *
   * @param {Effect} effect
   */
  schedule(t) {
    if (Sn = t, t.b?.is_pending && (t.f & (Et | gn | mr)) !== 0 && (t.f & ut) === 0) {
      t.b.defer_effect(t);
      return;
    }
    for (var n = t; n.parent !== null; ) {
      n = n.parent;
      var r = n.f;
      if (vt !== null && n === S && (T === null || (T.f & j) === 0))
        return;
      if ((r & (Ue | ye)) !== 0) {
        if ((r & z) === 0)
          return;
        n.f ^= z;
      }
    }
    l(this, ne).push(n);
  }
};
gt = new WeakMap(), mt = new WeakMap(), Qe = new WeakMap(), Le = new WeakMap(), Ee = new WeakMap(), Vt = new WeakMap(), ne = new WeakMap(), qt = new WeakMap(), Ve = new WeakMap(), Oe = new WeakMap(), ke = new WeakMap(), wt = new WeakMap(), yt = new WeakMap(), et = new WeakMap(), R = new WeakSet(), rn = function() {
  return this.is_fork || l(this, Ee).size > 0;
}, Mr = function() {
  for (const r of l(this, et))
    for (const i of l(r, Ee).keys()) {
      for (var t = !1, n = i; n.parent !== null; ) {
        if (l(this, ke).has(n)) {
          t = !0;
          break;
        }
        n = n.parent;
      }
      if (!t)
        return !0;
    }
  return !1;
}, sn = function() {
  var o;
  if (rr++ > 1e3 && (Ge.delete(this), ls()), !N(this, R, rn).call(this)) {
    for (const a of l(this, Ve))
      l(this, Oe).delete(a), O(a, q), this.schedule(a);
    for (const a of l(this, Oe))
      O(a, Ae), this.schedule(a);
  }
  const t = l(this, ne);
  k(this, ne, []), this.apply();
  var n = vt = [], r = [], i = nn = [];
  for (const a of t)
    try {
      N(this, R, An).call(this, a, n, r);
    } catch (u) {
      throw Fr(a), u;
    }
  if (A = null, i.length > 0) {
    var s = hn.ensure();
    for (const a of i)
      s.schedule(a);
  }
  if (vt = null, nn = null, N(this, R, rn).call(this) || N(this, R, Mr).call(this)) {
    N(this, R, ln).call(this, r), N(this, R, ln).call(this, n);
    for (const [a, u] of l(this, ke))
      Nr(a, u);
  } else {
    l(this, Le).size === 0 && Ge.delete(this), l(this, Ve).clear(), l(this, Oe).clear();
    for (const a of l(this, gt)) a(this);
    l(this, gt).clear(), ir(r), ir(n), l(this, Vt)?.resolve();
  }
  var f = (
    /** @type {Batch | null} */
    /** @type {unknown} */
    A
  );
  if (l(this, ne).length > 0) {
    const a = f ?? (f = this);
    l(a, ne).push(...l(this, ne).filter((u) => !l(a, ne).includes(u)));
  }
  f !== null && (Ge.add(f), N(o = f, R, sn).call(o));
}, /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
An = function(t, n, r) {
  t.f ^= z;
  for (var i = t.first; i !== null; ) {
    var s = i.f, f = (s & (ye | Ue)) !== 0, o = f && (s & z) !== 0, a = o || (s & Y) !== 0 || l(this, ke).has(i);
    if (!a && i.fn !== null) {
      f ? i.f ^= z : (s & Et) !== 0 ? n.push(i) : $t(i) && ((s & Se) !== 0 && l(this, Oe).add(i), At(i));
      var u = i.first;
      if (u !== null) {
        i = u;
        continue;
      }
    }
    for (; i !== null; ) {
      var h = i.next;
      if (h !== null) {
        i = h;
        break;
      }
      i = i.parent;
    }
  }
}, /**
 * @param {Effect[]} effects
 */
ln = function(t) {
  for (var n = 0; n < t.length; n += 1)
    Ar(t[n], l(this, Ve), l(this, Oe));
}, is = function() {
  var h, p, _;
  for (const d of Ge) {
    var t = d.id < this.id, n = [];
    for (const [c, [m, b]] of this.current) {
      if (d.current.has(c)) {
        var r = (
          /** @type {[any, boolean]} */
          d.current.get(c)[0]
        );
        if (t && m !== r)
          d.current.set(c, [m, b]);
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
        for (const c of l(this, wt))
          d.unskip_effect(c, (m) => {
            var b;
            (m.f & (Se | Dt)) !== 0 ? d.schedule(m) : N(b = d, R, ln).call(b, [m]);
          });
      d.activate();
      var s = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Map();
      for (var o of n)
        Cr(o, i, s, f);
      f = /* @__PURE__ */ new Map();
      var a = [...d.current.keys()].filter(
        (c) => this.current.has(c) ? (
          /** @type {[any, boolean]} */
          this.current.get(c)[0] !== c
        ) : !0
      );
      for (const c of l(this, qt))
        (c.f & (ce | Y | Tn)) === 0 && Dn(c, a, f) && ((c.f & (Dt | Se)) !== 0 ? (O(c, q), d.schedule(c)) : l(d, Ve).add(c));
      if (l(d, ne).length > 0) {
        d.apply();
        for (var u of l(d, ne))
          N(h = d, R, An).call(h, u, [], []);
        k(d, ne, []);
      }
      d.deactivate();
    }
  }
  for (const d of Ge)
    l(d, et).has(this) && (l(d, et).delete(this), l(d, et).size === 0 && !N(p = d, R, rn).call(p) && (d.activate(), N(_ = d, R, sn).call(_)));
};
let at = hn;
function ss(e) {
  var t = It;
  It = !0;
  try {
    for (var n; ; ) {
      if (ts(), A === null)
        return (
          /** @type {T} */
          n
        );
      A.flush();
    }
  } finally {
    It = t;
  }
}
function ls() {
  try {
    qi();
  } catch (e) {
    je(e, Sn);
  }
}
let Ne = null;
function ir(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var r = e[n++];
      if ((r.f & (ce | Y)) === 0 && $t(r) && (Ne = /* @__PURE__ */ new Set(), At(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && Yr(r), Ne?.size > 0)) {
        it.clear();
        for (const i of Ne) {
          if ((i.f & (ce | Y)) !== 0) continue;
          const s = [i];
          let f = i.parent;
          for (; f !== null; )
            Ne.has(f) && (Ne.delete(f), s.push(f)), f = f.parent;
          for (let o = s.length - 1; o >= 0; o--) {
            const a = s[o];
            (a.f & (ce | Y)) === 0 && At(a);
          }
        }
        Ne.clear();
      }
    }
    Ne = null;
  }
}
function Cr(e, t, n, r) {
  if (!n.has(e) && (n.add(e), e.reactions !== null))
    for (const i of e.reactions) {
      const s = i.f;
      (s & j) !== 0 ? Cr(
        /** @type {Derived} */
        i,
        t,
        n,
        r
      ) : (s & (Dt | Se)) !== 0 && (s & q) === 0 && Dn(i, t, r) && (O(i, q), Bn(
        /** @type {Effect} */
        i
      ));
    }
}
function Dn(e, t, n) {
  const r = n.get(e);
  if (r !== void 0) return r;
  if (e.deps !== null)
    for (const i of e.deps) {
      if (xt.call(t, i))
        return !0;
      if ((i.f & j) !== 0 && Dn(
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
  A.schedule(e);
}
function Nr(e, t) {
  if (!((e.f & ye) !== 0 && (e.f & z) !== 0)) {
    (e.f & q) !== 0 ? t.d.push(e) : (e.f & Ae) !== 0 && t.m.push(e), O(e, z);
    for (var n = e.first; n !== null; )
      Nr(n, t), n = n.next;
  }
}
function Fr(e) {
  O(e, z);
  for (var t = e.first; t !== null; )
    Fr(t), t = t.next;
}
function os(e) {
  let t = 0, n = ft(0), r;
  return () => {
    jn() && (v(n), Hr(() => (t === 0 && (r = $n(() => e(() => Pt(n)))), t += 1, () => {
      _t(() => {
        t -= 1, t === 0 && (r?.(), r = void 0, Pt(n));
      });
    })));
  };
}
var as = kt | Mt;
function fs(e, t, n, r) {
  new us(e, t, n, r);
}
var le, In, oe, tt, K, ae, U, re, Re, nt, qe, bt, jt, Zt, ze, vn, L, cs, ds, hs, Mn, on, an, Cn, Nn;
class us {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(t, n, r, i) {
    x(this, L);
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
    x(this, le);
    /** @type {TemplateNode | null} */
    x(this, In, null);
    /** @type {BoundaryProps} */
    x(this, oe);
    /** @type {((anchor: Node) => void)} */
    x(this, tt);
    /** @type {Effect} */
    x(this, K);
    /** @type {Effect | null} */
    x(this, ae, null);
    /** @type {Effect | null} */
    x(this, U, null);
    /** @type {Effect | null} */
    x(this, re, null);
    /** @type {DocumentFragment | null} */
    x(this, Re, null);
    x(this, nt, 0);
    x(this, qe, 0);
    x(this, bt, !1);
    /** @type {Set<Effect>} */
    x(this, jt, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    x(this, Zt, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    x(this, ze, null);
    x(this, vn, os(() => (k(this, ze, ft(l(this, nt))), () => {
      k(this, ze, null);
    })));
    k(this, le, t), k(this, oe, n), k(this, tt, (s) => {
      var f = (
        /** @type {Effect} */
        S
      );
      f.b = this, f.f |= En, r(s);
    }), this.parent = /** @type {Effect} */
    S.b, this.transform_error = i ?? this.parent?.transform_error ?? ((s) => s), k(this, K, Zn(() => {
      N(this, L, Mn).call(this);
    }, as));
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    Ar(t, l(this, jt), l(this, Zt));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!l(this, oe).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  update_pending_count(t, n) {
    N(this, L, Cn).call(this, t, n), k(this, nt, l(this, nt) + t), !(!l(this, ze) || l(this, bt)) && (k(this, bt, !0), _t(() => {
      k(this, bt, !1), l(this, ze) && St(l(this, ze), l(this, nt));
    }));
  }
  get_effect_pending() {
    return l(this, vn).call(this), v(
      /** @type {Source<number>} */
      l(this, ze)
    );
  }
  /** @param {unknown} error */
  error(t) {
    if (!l(this, oe).onerror && !l(this, oe).failed)
      throw t;
    A?.is_fork ? (l(this, ae) && A.skip_effect(l(this, ae)), l(this, U) && A.skip_effect(l(this, U)), l(this, re) && A.skip_effect(l(this, re)), A.on_fork_commit(() => {
      N(this, L, Nn).call(this, t);
    })) : N(this, L, Nn).call(this, t);
  }
}
le = new WeakMap(), In = new WeakMap(), oe = new WeakMap(), tt = new WeakMap(), K = new WeakMap(), ae = new WeakMap(), U = new WeakMap(), re = new WeakMap(), Re = new WeakMap(), nt = new WeakMap(), qe = new WeakMap(), bt = new WeakMap(), jt = new WeakMap(), Zt = new WeakMap(), ze = new WeakMap(), vn = new WeakMap(), L = new WeakSet(), cs = function() {
  try {
    k(this, ae, fe(() => l(this, tt).call(this, l(this, le))));
  } catch (t) {
    this.error(t);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
ds = function(t) {
  const n = l(this, oe).failed;
  n && k(this, re, fe(() => {
    n(
      l(this, le),
      () => t,
      () => () => {
      }
    );
  }));
}, hs = function() {
  const t = l(this, oe).pending;
  t && (this.is_pending = !0, k(this, U, fe(() => t(l(this, le)))), _t(() => {
    var n = k(this, Re, document.createDocumentFragment()), r = He();
    n.append(r), k(this, ae, N(this, L, an).call(this, () => fe(() => l(this, tt).call(this, r)))), l(this, qe) === 0 && (l(this, le).before(n), k(this, Re, null), st(
      /** @type {Effect} */
      l(this, U),
      () => {
        k(this, U, null);
      }
    ), N(this, L, on).call(
      this,
      /** @type {Batch} */
      A
    ));
  }));
}, Mn = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), k(this, qe, 0), k(this, nt, 0), k(this, ae, fe(() => {
      l(this, tt).call(this, l(this, le));
    })), l(this, qe) > 0) {
      var t = k(this, Re, document.createDocumentFragment());
      Yn(l(this, ae), t);
      const n = (
        /** @type {(anchor: Node) => void} */
        l(this, oe).pending
      );
      k(this, U, fe(() => n(l(this, le))));
    } else
      N(this, L, on).call(
        this,
        /** @type {Batch} */
        A
      );
  } catch (n) {
    this.error(n);
  }
}, /**
 * @param {Batch} batch
 */
on = function(t) {
  this.is_pending = !1, t.transfer_effects(l(this, jt), l(this, Zt));
}, /**
 * @template T
 * @param {() => T} fn
 */
an = function(t) {
  var n = S, r = T, i = Q;
  Me(l(this, K)), he(l(this, K)), Tt(l(this, K).ctx);
  try {
    return at.ensure(), t();
  } catch (s) {
    return Tr(s), null;
  } finally {
    Me(n), he(r), Tt(i);
  }
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 * @param {Batch} batch
 */
Cn = function(t, n) {
  var r;
  if (!this.has_pending_snippet()) {
    this.parent && N(r = this.parent, L, Cn).call(r, t, n);
    return;
  }
  k(this, qe, l(this, qe) + t), l(this, qe) === 0 && (N(this, L, on).call(this, n), l(this, U) && st(l(this, U), () => {
    k(this, U, null);
  }), l(this, Re) && (l(this, le).before(l(this, Re)), k(this, Re, null)));
}, /**
 * @param {unknown} error
 */
Nn = function(t) {
  l(this, ae) && (X(l(this, ae)), k(this, ae, null)), l(this, U) && (X(l(this, U)), k(this, U, null)), l(this, re) && (X(l(this, re)), k(this, re, null));
  var n = l(this, oe).onerror;
  let r = l(this, oe).failed;
  var i = !1, s = !1;
  const f = () => {
    if (i) {
      Qi();
      return;
    }
    i = !0, s && Ui(), l(this, re) !== null && st(l(this, re), () => {
      k(this, re, null);
    }), N(this, L, an).call(this, () => {
      N(this, L, Mn).call(this);
    });
  }, o = (a) => {
    try {
      s = !0, n?.(a, f), s = !1;
    } catch (u) {
      je(u, l(this, K) && l(this, K).parent);
    }
    r && k(this, re, N(this, L, an).call(this, () => {
      try {
        return fe(() => {
          var u = (
            /** @type {Effect} */
            S
          );
          u.b = this, u.f |= En, r(
            l(this, le),
            () => a,
            () => f
          );
        });
      } catch (u) {
        return je(
          u,
          /** @type {Effect} */
          l(this, K).parent
        ), null;
      }
    }));
  };
  _t(() => {
    var a;
    try {
      a = this.transform_error(t);
    } catch (u) {
      je(u, l(this, K) && l(this, K).parent);
      return;
    }
    a !== null && typeof a == "object" && typeof /** @type {any} */
    a.then == "function" ? a.then(
      o,
      /** @param {unknown} e */
      (u) => je(u, l(this, K) && l(this, K).parent)
    ) : o(a);
  });
};
function vs(e, t, n, r) {
  const i = Vn;
  var s = e.filter((_) => !_.settled);
  if (n.length === 0 && s.length === 0) {
    r(t.map(i));
    return;
  }
  var f = (
    /** @type {Effect} */
    S
  ), o = ps(), a = s.length === 1 ? s[0].promise : s.length > 1 ? Promise.all(s.map((_) => _.promise)) : null;
  function u(_) {
    o();
    try {
      r(_);
    } catch (d) {
      (f.f & ce) === 0 && je(d, f);
    }
    cn();
  }
  if (n.length === 0) {
    a.then(() => u(t.map(i)));
    return;
  }
  var h = Lr();
  function p() {
    Promise.all(n.map((_) => /* @__PURE__ */ _s(_))).then((_) => u([...t.map(i), ..._])).catch((_) => je(_, f)).finally(() => h());
  }
  a ? a.then(() => {
    o(), p(), cn();
  }) : p();
}
function ps() {
  var e = (
    /** @type {Effect} */
    S
  ), t = T, n = Q, r = (
    /** @type {Batch} */
    A
  );
  return function(s = !0) {
    Me(e), he(t), Tt(n), s && (e.f & ce) === 0 && (r?.activate(), r?.apply());
  };
}
function cn(e = !0) {
  Me(null), he(null), Tt(null), e && A?.deactivate();
}
function Lr() {
  var e = (
    /** @type {Effect} */
    S
  ), t = (
    /** @type {Boundary} */
    e.b
  ), n = (
    /** @type {Batch} */
    A
  ), r = t.is_rendered();
  return t.update_pending_count(1, n), n.increment(r, e), (i = !1) => {
    t.update_pending_count(-1, n), n.decrement(r, e, i);
  };
}
// @__NO_SIDE_EFFECTS__
function Vn(e) {
  var t = j | q;
  return S !== null && (S.f |= Mt), {
    ctx: Q,
    deps: null,
    effects: null,
    equals: wr,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      I
    ),
    wv: 0,
    parent: S,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function _s(e, t, n) {
  let r = (
    /** @type {Effect | null} */
    S
  );
  r === null && Ii();
  var i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), s = ft(
    /** @type {V} */
    I
  ), f = !T, o = /* @__PURE__ */ new Map();
  return Fs(() => {
    var a = (
      /** @type {Effect} */
      S
    ), u = gr();
    i = u.promise;
    try {
      Promise.resolve(e()).then(u.resolve, u.reject).finally(cn);
    } catch (d) {
      u.reject(d), cn();
    }
    var h = (
      /** @type {Batch} */
      A
    );
    if (f) {
      if ((a.f & ut) !== 0)
        var p = Lr();
      if (
        /** @type {Boundary} */
        r.b.is_rendered()
      )
        o.get(h)?.reject(Fe), o.delete(h);
      else {
        for (const d of o.values())
          d.reject(Fe);
        o.clear();
      }
      o.set(h, u);
    }
    const _ = (d, c = void 0) => {
      if (p) {
        var m = c === Fe;
        p(m);
      }
      if (!(c === Fe || (a.f & ce) !== 0)) {
        if (h.activate(), c)
          s.f |= Ze, St(s, c);
        else {
          (s.f & Ze) !== 0 && (s.f ^= Ze), St(s, d);
          for (const [b, C] of o) {
            if (o.delete(b), b === h) break;
            C.reject(Fe);
          }
        }
        h.deactivate();
      }
    };
    u.promise.then(_, (d) => _(null, d || "unknown"));
  }), Ms(() => {
    for (const a of o.values())
      a.reject(Fe);
  }), new Promise((a) => {
    function u(h) {
      function p() {
        h === i ? a(s) : u(i);
      }
      h.then(p, p);
    }
    u(i);
  });
}
// @__NO_SIDE_EFFECTS__
function gs(e) {
  const t = /* @__PURE__ */ Vn(e);
  return Jr(t), t;
}
// @__NO_SIDE_EFFECTS__
function ms(e) {
  const t = /* @__PURE__ */ Vn(e);
  return t.equals = yr, t;
}
function ws(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      X(
        /** @type {Effect} */
        t[n]
      );
  }
}
function qn(e) {
  var t, n = S, r = e.parent;
  if (!Ye && r !== null && (r.f & (ce | Y)) !== 0)
    return Xi(), e.v;
  Me(r);
  try {
    e.f &= ~ot, ws(e), t = Qr(e);
  } finally {
    Me(n);
  }
  return t;
}
function Or(e) {
  var t = qn(e);
  if (!e.equals(t) && (e.wv = Wr(), (!A?.is_fork || e.deps === null) && (A !== null ? A.capture(e, t, !0) : e.v = t, e.deps === null))) {
    O(e, z);
    return;
  }
  Ye || (me !== null ? (jn() || A?.is_fork) && me.set(e, t) : Pn(e));
}
function ys(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      (t.teardown || t.ac) && (t.teardown?.(), t.ac?.abort(Fe), t.teardown = Fi, t.ac = null, Bt(t, 0), Hn(t));
}
function Rr(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      t.teardown && At(t);
}
let Fn = /* @__PURE__ */ new Set();
const it = /* @__PURE__ */ new Map();
let zr = !1;
function ft(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: wr,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function P(e, t) {
  const n = ft(e);
  return Jr(n), n;
}
// @__NO_SIDE_EFFECTS__
function bs(e, t = !1, n = !0) {
  const r = ft(e);
  return t || (r.equals = yr), r;
}
function w(e, t, n = !1) {
  T !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!we || (T.f & Tn) !== 0) && Er() && (T.f & (j | Se | Dt | Tn)) !== 0 && (de === null || !xt.call(de, e)) && Hi();
  let r = n ? pt(t) : t;
  return St(e, r, nn);
}
function St(e, t, n = null) {
  if (!e.equals(t)) {
    it.set(e, Ye ? t : e.v);
    var r = at.ensure();
    if (r.capture(e, t), (e.f & j) !== 0) {
      const i = (
        /** @type {Derived} */
        e
      );
      (e.f & q) !== 0 && qn(i), me === null && Pn(i);
    }
    e.wv = Wr(), Ir(e, q, n), S !== null && (S.f & z) !== 0 && (S.f & (ye | Ue)) === 0 && (se === null ? Rs([e]) : se.push(e)), !r.is_fork && Fn.size > 0 && !zr && xs();
  }
  return t;
}
function xs() {
  zr = !1;
  for (const e of Fn)
    (e.f & z) !== 0 && O(e, Ae), $t(e) && At(e);
  Fn.clear();
}
function Pt(e) {
  w(e, e.v + 1);
}
function Ir(e, t, n) {
  var r = e.reactions;
  if (r !== null)
    for (var i = r.length, s = 0; s < i; s++) {
      var f = r[s], o = f.f, a = (o & q) === 0;
      if (a && O(f, t), (o & j) !== 0) {
        var u = (
          /** @type {Derived} */
          f
        );
        me?.delete(u), (o & ot) === 0 && (o & ue && (S === null || (S.f & un) === 0) && (f.f |= ot), Ir(u, Ae, n));
      } else if (a) {
        var h = (
          /** @type {Effect} */
          f
        );
        (o & Se) !== 0 && Ne !== null && Ne.add(h), n !== null ? n.push(h) : Bn(h);
      }
    }
}
function pt(e) {
  if (typeof e != "object" || e === null || tn in e)
    return e;
  const t = Ni(e);
  if (t !== Mi && t !== Ci)
    return e;
  var n = /* @__PURE__ */ new Map(), r = _r(e), i = /* @__PURE__ */ P(0), s = lt, f = (o) => {
    if (lt === s)
      return o();
    var a = T, u = lt;
    he(null), ar(s);
    var h = o();
    return he(a), ar(u), h;
  };
  return r && n.set("length", /* @__PURE__ */ P(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(o, a, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && ji();
        var h = n.get(a);
        return h === void 0 ? f(() => {
          var p = /* @__PURE__ */ P(u.value);
          return n.set(a, p), p;
        }) : w(h, u.value, !0), !0;
      },
      deleteProperty(o, a) {
        var u = n.get(a);
        if (u === void 0) {
          if (a in o) {
            const h = f(() => /* @__PURE__ */ P(I));
            n.set(a, h), Pt(i);
          }
        } else
          w(u, I), Pt(i);
        return !0;
      },
      get(o, a, u) {
        if (a === tn)
          return e;
        var h = n.get(a), p = a in o;
        if (h === void 0 && (!p || zt(o, a)?.writable) && (h = f(() => {
          var d = pt(p ? o[a] : I), c = /* @__PURE__ */ P(d);
          return c;
        }), n.set(a, h)), h !== void 0) {
          var _ = v(h);
          return _ === I ? void 0 : _;
        }
        return Reflect.get(o, a, u);
      },
      getOwnPropertyDescriptor(o, a) {
        var u = Reflect.getOwnPropertyDescriptor(o, a);
        if (u && "value" in u) {
          var h = n.get(a);
          h && (u.value = v(h));
        } else if (u === void 0) {
          var p = n.get(a), _ = p?.v;
          if (p !== void 0 && _ !== I)
            return {
              enumerable: !0,
              configurable: !0,
              value: _,
              writable: !0
            };
        }
        return u;
      },
      has(o, a) {
        if (a === tn)
          return !0;
        var u = n.get(a), h = u !== void 0 && u.v !== I || Reflect.has(o, a);
        if (u !== void 0 || S !== null && (!h || zt(o, a)?.writable)) {
          u === void 0 && (u = f(() => {
            var _ = h ? pt(o[a]) : I, d = /* @__PURE__ */ P(_);
            return d;
          }), n.set(a, u));
          var p = v(u);
          if (p === I)
            return !1;
        }
        return h;
      },
      set(o, a, u, h) {
        var p = n.get(a), _ = a in o;
        if (r && a === "length")
          for (var d = u; d < /** @type {Source<number>} */
          p.v; d += 1) {
            var c = n.get(d + "");
            c !== void 0 ? w(c, I) : d in o && (c = f(() => /* @__PURE__ */ P(I)), n.set(d + "", c));
          }
        if (p === void 0)
          (!_ || zt(o, a)?.writable) && (p = f(() => /* @__PURE__ */ P(void 0)), w(p, pt(u)), n.set(a, p));
        else {
          _ = p.v !== I;
          var m = f(() => pt(u));
          w(p, m);
        }
        var b = Reflect.getOwnPropertyDescriptor(o, a);
        if (b?.set && b.set.call(h, u), !_) {
          if (r && typeof a == "string") {
            var C = (
              /** @type {Source<number>} */
              n.get("length")
            ), E = Number(a);
            Number.isInteger(E) && E >= C.v && w(C, E + 1);
          }
          Pt(i);
        }
        return !0;
      },
      ownKeys(o) {
        v(i);
        var a = Reflect.ownKeys(o).filter((p) => {
          var _ = n.get(p);
          return _ === void 0 || _.v !== I;
        });
        for (var [u, h] of n)
          h.v !== I && !(u in o) && a.push(u);
        return a;
      },
      setPrototypeOf() {
        Zi();
      }
    }
  );
}
var sr, Pr, Dr, Br;
function Es() {
  if (sr === void 0) {
    sr = window, Pr = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    Dr = zt(t, "firstChild").get, Br = zt(t, "nextSibling").get, nr(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), nr(n) && (n.__t = void 0);
  }
}
function He(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function dn(e) {
  return (
    /** @type {TemplateNode | null} */
    Dr.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function Yt(e) {
  return (
    /** @type {TemplateNode | null} */
    Br.call(e)
  );
}
function B(e, t) {
  return /* @__PURE__ */ dn(e);
}
function lr(e, t = !1) {
  {
    var n = /* @__PURE__ */ dn(e);
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ Yt(n) : n;
  }
}
function ee(e, t = 1, n = !1) {
  let r = e;
  for (; t--; )
    r = /** @type {TemplateNode} */
    /* @__PURE__ */ Yt(r);
  return r;
}
function ks(e) {
  e.textContent = "";
}
function Vr() {
  return !1;
}
function Ts(e, t, n) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElementNS(Wi, e, void 0)
  );
}
function qr(e) {
  var t = T, n = S;
  he(null), Me(null);
  try {
    return e();
  } finally {
    he(t), Me(n);
  }
}
function Ss(e) {
  S === null && (T === null && Vi(), Bi()), Ye && Di();
}
function As(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function Pe(e, t) {
  var n = S;
  n !== null && (n.f & Y) !== 0 && (e |= Y);
  var r = {
    ctx: Q,
    deps: null,
    nodes: null,
    f: e | q | ue,
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
  A?.register_created_effect(r);
  var i = r;
  if ((e & Et) !== 0)
    vt !== null ? vt.push(r) : at.ensure().schedule(r);
  else if (t !== null) {
    try {
      At(r);
    } catch (f) {
      throw X(r), f;
    }
    i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && // either `null`, or a singular child
    (i.f & Mt) === 0 && (i = i.first, (e & Se) !== 0 && (e & kt) !== 0 && i !== null && (i.f |= kt));
  }
  if (i !== null && (i.parent = n, n !== null && As(i, n), T !== null && (T.f & j) !== 0 && (e & Ue) === 0)) {
    var s = (
      /** @type {Derived} */
      T
    );
    (s.effects ?? (s.effects = [])).push(i);
  }
  return r;
}
function jn() {
  return T !== null && !we;
}
function Ms(e) {
  const t = Pe(gn, null);
  return O(t, z), t.teardown = e, t;
}
function jr(e) {
  Ss();
  var t = (
    /** @type {Effect} */
    S.f
  ), n = !T && (t & ye) !== 0 && (t & ut) === 0;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      Q
    );
    (r.e ?? (r.e = [])).push(e);
  } else
    return Zr(e);
}
function Zr(e) {
  return Pe(Et | Ri, e);
}
function Cs(e) {
  at.ensure();
  const t = Pe(Ue | Mt, e);
  return (n = {}) => new Promise((r) => {
    n.outro ? st(t, () => {
      X(t), r(void 0);
    }) : (X(t), r(void 0));
  });
}
function Ns(e) {
  return Pe(Et, e);
}
function Fs(e) {
  return Pe(Dt | Mt, e);
}
function Hr(e, t = 0) {
  return Pe(gn | t, e);
}
function Je(e, t = [], n = [], r = []) {
  vs(r, t, n, (i) => {
    Pe(gn, () => e(...i.map(v)));
  });
}
function Zn(e, t = 0) {
  var n = Pe(Se | t, e);
  return n;
}
function fe(e) {
  return Pe(ye | Mt, e);
}
function Ur(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = Ye, r = T;
    or(!0), he(null);
    try {
      t.call(null);
    } finally {
      or(n), he(r);
    }
  }
}
function Hn(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const i = n.ac;
    i !== null && qr(() => {
      i.abort(Fe);
    });
    var r = n.next;
    (n.f & Ue) !== 0 ? n.parent = null : X(n, t), n = r;
  }
}
function Ls(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & ye) === 0 && X(t), t = n;
  }
}
function X(e, t = !0) {
  var n = !1;
  (t || (e.f & Oi) !== 0) && e.nodes !== null && e.nodes.end !== null && (Os(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), n = !0), O(e, kn), Hn(e, t && !n), Bt(e, 0);
  var r = e.nodes && e.nodes.t;
  if (r !== null)
    for (const s of r)
      s.stop();
  Ur(e), e.f ^= kn, e.f |= ce;
  var i = e.parent;
  i !== null && i.first !== null && Yr(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function Os(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : /* @__PURE__ */ Yt(e);
    e.remove(), e = n;
  }
}
function Yr(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function st(e, t, n = !0) {
  var r = [];
  $r(e, r, !0);
  var i = () => {
    n && X(e), t && t();
  }, s = r.length;
  if (s > 0) {
    var f = () => --s || i();
    for (var o of r)
      o.out(f);
  } else
    i();
}
function $r(e, t, n) {
  if ((e.f & Y) === 0) {
    e.f ^= Y;
    var r = e.nodes && e.nodes.t;
    if (r !== null)
      for (const o of r)
        (o.is_global || n) && t.push(o);
    for (var i = e.first; i !== null; ) {
      var s = i.next;
      if ((i.f & Ue) === 0) {
        var f = (i.f & kt) !== 0 || // If this is a branch effect without a block effect parent,
        // it means the parent block effect was pruned. In that case,
        // transparency information was transferred to the branch effect.
        (i.f & ye) !== 0 && (e.f & Se) !== 0;
        $r(i, t, f ? n : !1);
      }
      i = s;
    }
  }
}
function Un(e) {
  Gr(e, !0);
}
function Gr(e, t) {
  if ((e.f & Y) !== 0) {
    e.f ^= Y, (e.f & z) === 0 && (O(e, q), at.ensure().schedule(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, i = (n.f & kt) !== 0 || (n.f & ye) !== 0;
      Gr(n, i ? t : !1), n = r;
    }
    var s = e.nodes && e.nodes.t;
    if (s !== null)
      for (const f of s)
        (f.is_global || t) && f.in();
  }
}
function Yn(e, t) {
  if (e.nodes)
    for (var n = e.nodes.start, r = e.nodes.end; n !== null; ) {
      var i = n === r ? null : /* @__PURE__ */ Yt(n);
      t.append(n), n = i;
    }
}
let fn = !1, Ye = !1;
function or(e) {
  Ye = e;
}
let T = null, we = !1;
function he(e) {
  T = e;
}
let S = null;
function Me(e) {
  S = e;
}
let de = null;
function Jr(e) {
  T !== null && (de === null ? de = [e] : de.push(e));
}
let W = null, te = 0, se = null;
function Rs(e) {
  se = e;
}
let Kr = 1, We = 0, lt = We;
function ar(e) {
  lt = e;
}
function Wr() {
  return ++Kr;
}
function $t(e) {
  var t = e.f;
  if ((t & q) !== 0)
    return !0;
  if (t & j && (e.f &= ~ot), (t & Ae) !== 0) {
    for (var n = (
      /** @type {Value[]} */
      e.deps
    ), r = n.length, i = 0; i < r; i++) {
      var s = n[i];
      if ($t(
        /** @type {Derived} */
        s
      ) && Or(
        /** @type {Derived} */
        s
      ), s.wv > e.wv)
        return !0;
    }
    (t & ue) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    me === null && O(e, z);
  }
  return !1;
}
function Xr(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null && !(de !== null && xt.call(de, e)))
    for (var i = 0; i < r.length; i++) {
      var s = r[i];
      (s.f & j) !== 0 ? Xr(
        /** @type {Derived} */
        s,
        t,
        !1
      ) : t === s && (n ? O(s, q) : (s.f & z) !== 0 && O(s, Ae), Bn(
        /** @type {Effect} */
        s
      ));
    }
}
function Qr(e) {
  var m;
  var t = W, n = te, r = se, i = T, s = de, f = Q, o = we, a = lt, u = e.f;
  W = /** @type {null | Value[]} */
  null, te = 0, se = null, T = (u & (ye | Ue)) === 0 ? e : null, de = null, Tt(e.ctx), we = !1, lt = ++We, e.ac !== null && (qr(() => {
    e.ac.abort(Fe);
  }), e.ac = null);
  try {
    e.f |= un;
    var h = (
      /** @type {Function} */
      e.fn
    ), p = h();
    e.f |= ut;
    var _ = e.deps, d = A?.is_fork;
    if (W !== null) {
      var c;
      if (d || Bt(e, te), _ !== null && te > 0)
        for (_.length = te + W.length, c = 0; c < W.length; c++)
          _[te + c] = W[c];
      else
        e.deps = _ = W;
      if (jn() && (e.f & ue) !== 0)
        for (c = te; c < _.length; c++)
          ((m = _[c]).reactions ?? (m.reactions = [])).push(e);
    } else !d && _ !== null && te < _.length && (Bt(e, te), _.length = te);
    if (Er() && se !== null && !we && _ !== null && (e.f & (j | Ae | q)) === 0)
      for (c = 0; c < /** @type {Source[]} */
      se.length; c++)
        Xr(
          se[c],
          /** @type {Effect} */
          e
        );
    if (i !== null && i !== e) {
      if (We++, i.deps !== null)
        for (let b = 0; b < n; b += 1)
          i.deps[b].rv = We;
      if (t !== null)
        for (const b of t)
          b.rv = We;
      se !== null && (r === null ? r = se : r.push(.../** @type {Source[]} */
      se));
    }
    return (e.f & Ze) !== 0 && (e.f ^= Ze), p;
  } catch (b) {
    return Tr(b);
  } finally {
    e.f ^= un, W = t, te = n, se = r, T = i, de = s, Tt(f), we = o, lt = a;
  }
}
function zs(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = Si.call(n, e);
    if (r !== -1) {
      var i = n.length - 1;
      i === 0 ? n = t.reactions = null : (n[r] = n[i], n.pop());
    }
  }
  if (n === null && (t.f & j) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (W === null || !xt.call(W, t))) {
    var s = (
      /** @type {Derived} */
      t
    );
    (s.f & ue) !== 0 && (s.f ^= ue, s.f &= ~ot), s.v !== I && Pn(s), ys(s), Bt(s, 0);
  }
}
function Bt(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      zs(e, n[r]);
}
function At(e) {
  var t = e.f;
  if ((t & ce) === 0) {
    O(e, z);
    var n = S, r = fn;
    S = e, fn = !0;
    try {
      (t & (Se | mr)) !== 0 ? Ls(e) : Hn(e), Ur(e);
      var i = Qr(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = Kr;
      var s;
    } finally {
      fn = r, S = n;
    }
  }
}
async function fr() {
  await Promise.resolve(), ss();
}
function v(e) {
  var t = e.f, n = (t & j) !== 0;
  if (T !== null && !we) {
    var r = S !== null && (S.f & ce) !== 0;
    if (!r && (de === null || !xt.call(de, e))) {
      var i = T.deps;
      if ((T.f & un) !== 0)
        e.rv < We && (e.rv = We, W === null && i !== null && i[te] === e ? te++ : W === null ? W = [e] : W.push(e));
      else {
        (T.deps ?? (T.deps = [])).push(e);
        var s = e.reactions;
        s === null ? e.reactions = [T] : xt.call(s, T) || s.push(T);
      }
    }
  }
  if (Ye && it.has(e))
    return it.get(e);
  if (n) {
    var f = (
      /** @type {Derived} */
      e
    );
    if (Ye) {
      var o = f.v;
      return ((f.f & z) === 0 && f.reactions !== null || ti(f)) && (o = qn(f)), it.set(f, o), o;
    }
    var a = (f.f & ue) === 0 && !we && T !== null && (fn || (T.f & ue) !== 0), u = (f.f & ut) === 0;
    $t(f) && (a && (f.f |= ue), Or(f)), a && !u && (Rr(f), ei(f));
  }
  if (me?.has(e))
    return me.get(e);
  if ((e.f & Ze) !== 0)
    throw e.v;
  return e.v;
}
function ei(e) {
  if (e.f |= ue, e.deps !== null)
    for (const t of e.deps)
      (t.reactions ?? (t.reactions = [])).push(e), (t.f & j) !== 0 && (t.f & ue) === 0 && (Rr(
        /** @type {Derived} */
        t
      ), ei(
        /** @type {Derived} */
        t
      ));
}
function ti(e) {
  if (e.v === I) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (it.has(t) || (t.f & j) !== 0 && ti(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function $n(e) {
  var t = we;
  try {
    return we = !0, e();
  } finally {
    we = t;
  }
}
const Is = ["touchstart", "touchmove"];
function Ps(e) {
  return Is.includes(e);
}
const Xe = Symbol("events"), ni = /* @__PURE__ */ new Set(), Ln = /* @__PURE__ */ new Set();
function Qt(e, t, n) {
  (t[Xe] ?? (t[Xe] = {}))[e] = n;
}
function Ds(e) {
  for (var t = 0; t < e.length; t++)
    ni.add(e[t]);
  for (var n of Ln)
    n(e);
}
let ur = null;
function cr(e) {
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), r = e.type, i = e.composedPath?.() || [], s = (
    /** @type {null | Element} */
    i[0] || e.target
  );
  ur = e;
  var f = 0, o = ur === e && e[Xe];
  if (o) {
    var a = i.indexOf(o);
    if (a !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e[Xe] = t;
      return;
    }
    var u = i.indexOf(t);
    if (u === -1)
      return;
    a <= u && (f = a);
  }
  if (s = /** @type {Element} */
  i[f] || e.target, s !== t) {
    Ai(e, "currentTarget", {
      configurable: !0,
      get() {
        return s || n;
      }
    });
    var h = T, p = S;
    he(null), Me(null);
    try {
      for (var _, d = []; s !== null; ) {
        var c = s.assignedSlot || s.parentNode || /** @type {any} */
        s.host || null;
        try {
          var m = s[Xe]?.[r];
          m != null && (!/** @type {any} */
          s.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === s) && m.call(s, e);
        } catch (b) {
          _ ? d.push(b) : _ = b;
        }
        if (e.cancelBubble || c === t || c === null)
          break;
        s = c;
      }
      if (_) {
        for (let b of d)
          queueMicrotask(() => {
            throw b;
          });
        throw _;
      }
    } finally {
      e[Xe] = t, delete e.currentTarget, he(h), Me(p);
    }
  }
}
const Bs = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (e) => e
  })
);
function Vs(e) {
  return (
    /** @type {string} */
    Bs?.createHTML(e) ?? e
  );
}
function qs(e) {
  var t = Ts("template");
  return t.innerHTML = Vs(e.replaceAll("<!>", "<!---->")), t.content;
}
function On(e, t) {
  var n = (
    /** @type {Effect} */
    S
  );
  n.nodes === null && (n.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function $(e, t) {
  var n = (t & Ji) !== 0, r = (t & Ki) !== 0, i, s = !e.startsWith("<!>");
  return () => {
    i === void 0 && (i = qs(s ? e : "<!>" + e), n || (i = /** @type {TemplateNode} */
    /* @__PURE__ */ dn(i)));
    var f = (
      /** @type {TemplateNode} */
      r || Pr ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (n) {
      var o = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ dn(f)
      ), a = (
        /** @type {TemplateNode} */
        f.lastChild
      );
      On(o, a);
    } else
      On(f, f);
    return f;
  };
}
function js() {
  var e = document.createDocumentFragment(), t = document.createComment(""), n = He();
  return e.append(t, n), On(t, n), e;
}
function V(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function De(e, t) {
  var n = t == null ? "" : typeof t == "object" ? `${t}` : t;
  n !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = n, e.nodeValue = `${n}`);
}
function Zs(e, t) {
  return Hs(e, t);
}
const en = /* @__PURE__ */ new Map();
function Hs(e, { target: t, anchor: n, props: r = {}, events: i, context: s, intro: f = !0, transformError: o }) {
  Es();
  var a = void 0, u = Cs(() => {
    var h = n ?? t.appendChild(He());
    fs(
      /** @type {TemplateNode} */
      h,
      {
        pending: () => {
        }
      },
      (d) => {
        br({});
        var c = (
          /** @type {ComponentContext} */
          Q
        );
        s && (c.c = s), i && (r.$$events = i), a = e(d, r) || {}, xr();
      },
      o
    );
    var p = /* @__PURE__ */ new Set(), _ = (d) => {
      for (var c = 0; c < d.length; c++) {
        var m = d[c];
        if (!p.has(m)) {
          p.add(m);
          var b = Ps(m);
          for (const Z of [t, document]) {
            var C = en.get(Z);
            C === void 0 && (C = /* @__PURE__ */ new Map(), en.set(Z, C));
            var E = C.get(m);
            E === void 0 ? (Z.addEventListener(m, cr, { passive: b }), C.set(m, 1)) : C.set(m, E + 1);
          }
        }
      }
    };
    return _(_n(ni)), Ln.add(_), () => {
      for (var d of p)
        for (const b of [t, document]) {
          var c = (
            /** @type {Map<string, number>} */
            en.get(b)
          ), m = (
            /** @type {number} */
            c.get(d)
          );
          --m == 0 ? (b.removeEventListener(d, cr), c.delete(d), c.size === 0 && en.delete(b)) : c.set(d, m);
        }
      Ln.delete(_), h !== n && h.parentNode?.removeChild(h);
    };
  });
  return Rn.set(a, u), a;
}
let Rn = /* @__PURE__ */ new WeakMap();
function Us(e, t) {
  const n = Rn.get(e);
  return n ? (Rn.delete(e), n(t)) : Promise.resolve();
}
var ge, Te, ie, rt, Ht, Ut, pn;
class Ys {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, n = !0) {
    /** @type {TemplateNode} */
    _e(this, "anchor");
    /** @type {Map<Batch, Key>} */
    x(this, ge, /* @__PURE__ */ new Map());
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
    x(this, Te, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    x(this, ie, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    x(this, rt, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    x(this, Ht, !0);
    /**
     * @param {Batch} batch
     */
    x(this, Ut, (t) => {
      if (l(this, ge).has(t)) {
        var n = (
          /** @type {Key} */
          l(this, ge).get(t)
        ), r = l(this, Te).get(n);
        if (r)
          Un(r), l(this, rt).delete(n);
        else {
          var i = l(this, ie).get(n);
          i && (l(this, Te).set(n, i.effect), l(this, ie).delete(n), i.fragment.lastChild.remove(), this.anchor.before(i.fragment), r = i.effect);
        }
        for (const [s, f] of l(this, ge)) {
          if (l(this, ge).delete(s), s === t)
            break;
          const o = l(this, ie).get(f);
          o && (X(o.effect), l(this, ie).delete(f));
        }
        for (const [s, f] of l(this, Te)) {
          if (s === n || l(this, rt).has(s)) continue;
          const o = () => {
            if (Array.from(l(this, ge).values()).includes(s)) {
              var u = document.createDocumentFragment();
              Yn(f, u), u.append(He()), l(this, ie).set(s, { effect: f, fragment: u });
            } else
              X(f);
            l(this, rt).delete(s), l(this, Te).delete(s);
          };
          l(this, Ht) || !r ? (l(this, rt).add(s), st(f, o, !1)) : o();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    x(this, pn, (t) => {
      l(this, ge).delete(t);
      const n = Array.from(l(this, ge).values());
      for (const [r, i] of l(this, ie))
        n.includes(r) || (X(i.effect), l(this, ie).delete(r));
    });
    this.anchor = t, k(this, Ht, n);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, n) {
    var r = (
      /** @type {Batch} */
      A
    ), i = Vr();
    if (n && !l(this, Te).has(t) && !l(this, ie).has(t))
      if (i) {
        var s = document.createDocumentFragment(), f = He();
        s.append(f), l(this, ie).set(t, {
          effect: fe(() => n(f)),
          fragment: s
        });
      } else
        l(this, Te).set(
          t,
          fe(() => n(this.anchor))
        );
    if (l(this, ge).set(r, t), i) {
      for (const [o, a] of l(this, Te))
        o === t ? r.unskip_effect(a) : r.skip_effect(a);
      for (const [o, a] of l(this, ie))
        o === t ? r.unskip_effect(a.effect) : r.skip_effect(a.effect);
      r.oncommit(l(this, Ut)), r.ondiscard(l(this, pn));
    } else
      l(this, Ut).call(this, r);
  }
}
ge = new WeakMap(), Te = new WeakMap(), ie = new WeakMap(), rt = new WeakMap(), Ht = new WeakMap(), Ut = new WeakMap(), pn = new WeakMap();
function Ce(e, t, n = !1) {
  var r = new Ys(e), i = n ? kt : 0;
  function s(f, o) {
    r.ensure(f, o);
  }
  Zn(() => {
    var f = !1;
    t((o, a = 0) => {
      f = !0, s(a, o);
    }), f || s(-1, null);
  }, i);
}
function $s(e, t) {
  return t;
}
function Gs(e, t, n) {
  for (var r = [], i = t.length, s, f = t.length, o = 0; o < i; o++) {
    let p = t[o];
    st(
      p,
      () => {
        if (s) {
          if (s.pending.delete(p), s.done.add(p), s.pending.size === 0) {
            var _ = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            zn(e, _n(s.done)), _.delete(s), _.size === 0 && (e.outrogroups = null);
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
      ), h = (
        /** @type {Element} */
        u.parentNode
      );
      ks(h), h.append(u), e.items.clear();
    }
    zn(e, t, !a);
  } else
    s = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ?? (e.outrogroups = /* @__PURE__ */ new Set())).add(s);
}
function zn(e, t, n = !0) {
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
      s.f |= Ie;
      const f = document.createDocumentFragment();
      Yn(s, f);
    } else
      X(t[i], n);
  }
}
var dr;
function Js(e, t, n, r, i, s = null) {
  var f = e, o = /* @__PURE__ */ new Map();
  {
    var a = (
      /** @type {Element} */
      e
    );
    f = a.appendChild(He());
  }
  var u = null, h = /* @__PURE__ */ ms(() => {
    var E = n();
    return _r(E) ? E : E == null ? [] : _n(E);
  }), p, _ = /* @__PURE__ */ new Map(), d = !0;
  function c(E) {
    (C.effect.f & ce) === 0 && (C.pending.delete(E), C.fallback = u, Ks(C, p, f, t, r), u !== null && (p.length === 0 ? (u.f & Ie) === 0 ? Un(u) : (u.f ^= Ie, Rt(u, null, f)) : st(u, () => {
      u = null;
    })));
  }
  function m(E) {
    C.pending.delete(E);
  }
  var b = Zn(() => {
    p = /** @type {V[]} */
    v(h);
    for (var E = p.length, Z = /* @__PURE__ */ new Set(), G = (
      /** @type {Batch} */
      A
    ), be = Vr(), xe = 0; xe < E; xe += 1) {
      var $e = p[xe], J = r($e, xe), ve = d ? null : o.get(J);
      ve ? (ve.v && St(ve.v, $e), ve.i && St(ve.i, xe), be && G.unskip_effect(ve.e)) : (ve = Ws(
        o,
        d ? f : dr ?? (dr = He()),
        $e,
        J,
        xe,
        i,
        t,
        n
      ), d || (ve.e.f |= Ie), o.set(J, ve)), Z.add(J);
    }
    if (E === 0 && s && !u && (d ? u = fe(() => s(f)) : (u = fe(() => s(dr ?? (dr = He()))), u.f |= Ie)), E > Z.size && Pi(), !d)
      if (_.set(G, Z), be) {
        for (const [Ct, Gt] of o)
          Z.has(Ct) || G.skip_effect(Gt.e);
        G.oncommit(c), G.ondiscard(m);
      } else
        c(G);
    v(h);
  }), C = { effect: b, items: o, pending: _, outrogroups: null, fallback: u };
  d = !1;
}
function Ot(e) {
  for (; e !== null && (e.f & ye) === 0; )
    e = e.next;
  return e;
}
function Ks(e, t, n, r, i) {
  var s = t.length, f = e.items, o = Ot(e.effect.first), a, u = null, h = [], p = [], _, d, c, m;
  for (m = 0; m < s; m += 1) {
    if (_ = t[m], d = i(_, m), c = /** @type {EachItem} */
    f.get(d).e, e.outrogroups !== null)
      for (const J of e.outrogroups)
        J.pending.delete(c), J.done.delete(c);
    if ((c.f & Y) !== 0 && Un(c), (c.f & Ie) !== 0)
      if (c.f ^= Ie, c === o)
        Rt(c, null, n);
      else {
        var b = u ? u.next : o;
        c === e.effect.last && (e.effect.last = c.prev), c.prev && (c.prev.next = c.next), c.next && (c.next.prev = c.prev), Be(e, u, c), Be(e, c, b), Rt(c, b, n), u = c, h = [], p = [], o = Ot(u.next);
        continue;
      }
    if (c !== o) {
      if (a !== void 0 && a.has(c)) {
        if (h.length < p.length) {
          var C = p[0], E;
          u = C.prev;
          var Z = h[0], G = h[h.length - 1];
          for (E = 0; E < h.length; E += 1)
            Rt(h[E], C, n);
          for (E = 0; E < p.length; E += 1)
            a.delete(p[E]);
          Be(e, Z.prev, G.next), Be(e, u, Z), Be(e, G, C), o = C, u = G, m -= 1, h = [], p = [];
        } else
          a.delete(c), Rt(c, o, n), Be(e, c.prev, c.next), Be(e, c, u === null ? e.effect.first : u.next), Be(e, u, c), u = c;
        continue;
      }
      for (h = [], p = []; o !== null && o !== c; )
        (a ?? (a = /* @__PURE__ */ new Set())).add(o), p.push(o), o = Ot(o.next);
      if (o === null)
        continue;
    }
    (c.f & Ie) === 0 && h.push(c), u = c, o = Ot(c.next);
  }
  if (e.outrogroups !== null) {
    for (const J of e.outrogroups)
      J.pending.size === 0 && (zn(e, _n(J.done)), e.outrogroups?.delete(J));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (o !== null || a !== void 0) {
    var be = [];
    if (a !== void 0)
      for (c of a)
        (c.f & Y) === 0 && be.push(c);
    for (; o !== null; )
      (o.f & Y) === 0 && o !== e.fallback && be.push(o), o = Ot(o.next);
    var xe = be.length;
    if (xe > 0) {
      var $e = s === 0 ? n : null;
      Gs(e, be, $e);
    }
  }
}
function Ws(e, t, n, r, i, s, f, o) {
  var a = (f & Yi) !== 0 ? (f & Gi) === 0 ? /* @__PURE__ */ bs(n, !1, !1) : ft(n) : null, u = (f & $i) !== 0 ? ft(i) : null;
  return {
    v: a,
    i: u,
    e: fe(() => (s(t, a ?? n, u ?? i, o), () => {
      e.delete(r);
    }))
  };
}
function Rt(e, t, n) {
  if (e.nodes)
    for (var r = e.nodes.start, i = e.nodes.end, s = t && (t.f & Ie) === 0 ? (
      /** @type {EffectNodes} */
      t.nodes.start
    ) : n; r !== null; ) {
      var f = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Yt(r)
      );
      if (s.before(r), r === i)
        return;
      r = f;
    }
}
function Be(e, t, n) {
  t === null ? e.effect.first = n : t.next = n, n === null ? e.effect.last = t : n.prev = t;
}
function Xs(e, t, n) {
  var r = e == null ? "" : "" + e;
  return r === "" ? null : r;
}
function hr(e, t, n, r, i, s) {
  var f = e.__className;
  if (f !== n || f === void 0) {
    var o = Xs(n);
    o == null ? e.removeAttribute("class") : e.className = o, e.__className = n;
  }
  return s;
}
function vr(e, t) {
  return e === t || e?.[tn] === t;
}
function Qs(e = {}, t, n, r) {
  var i = (
    /** @type {ComponentContext} */
    Q.r
  ), s = (
    /** @type {Effect} */
    S
  );
  return Ns(() => {
    var f, o;
    return Hr(() => {
      f = o, o = [], $n(() => {
        e !== n(...o) && (t(e, ...o), f && vr(n(...f), e) && t(null, ...f));
      });
    }), () => {
      let a = s;
      for (; a !== i && a.parent !== null && a.parent.f & kn; )
        a = a.parent;
      const u = () => {
        o && vr(n(...o), e) && t(null, ...o);
      }, h = a.teardown;
      a.teardown = () => {
        u(), h?.();
      };
    };
  }), e;
}
function el(e) {
  Q === null && zi(), jr(() => {
    const t = $n(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
const tl = "5";
var pr;
typeof window < "u" && ((pr = window.__svelte ?? (window.__svelte = {})).v ?? (pr.v = /* @__PURE__ */ new Set())).add(tl);
var nl = /* @__PURE__ */ $('<div class="bg-yellow-50 border border-yellow-300 text-yellow-800 px-4 py-3 rounded-lg mb-4 text-sm">Please log in to manage your zones of influence</div>'), rl = /* @__PURE__ */ $('<svg class="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> <span>Getting location...</span>', 1), il = /* @__PURE__ */ $('<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg> <span>Use My Location</span>', 1), sl = /* @__PURE__ */ $('<p class="mt-2 text-xs text-amber-600"> </p>'), ll = /* @__PURE__ */ $('<p class="mt-2 text-xs text-green-600"> </p>'), ol = /* @__PURE__ */ $('<div class="bg-red-50 border border-red-300 text-red-800 px-4 py-3 rounded-lg mb-4 text-sm"> </div>'), al = /* @__PURE__ */ $('<div class="bg-green-50 border border-green-300 text-green-800 px-4 py-3 rounded-lg mb-4 text-sm"> </div>'), fl = /* @__PURE__ */ $('<div class="flex items-center justify-center py-12"><svg class="animate-spin h-8 w-8 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> <span class="ml-3 text-gray-500">Loading zones...</span></div>'), ul = /* @__PURE__ */ $('<div><p class="text-sm text-gray-500 mb-3">Click on the map to add a zone of influence at that location</p> <div class="w-full rounded-lg border border-gray-200 relative z-0" style="height:400px;min-height:350px"></div> <div class="mt-3 flex items-center gap-4 text-xs text-gray-500"><div class="flex items-center gap-1"><span class="inline-block w-3 h-3 rounded-full bg-green-500"></span><span>Your zones</span></div> <div class="flex items-center gap-1"><span class="inline-block w-3 h-3 rounded-full bg-gray-500"></span><span>Other zones</span></div> <div class="flex items-center gap-1"><span class="inline-block w-3 h-3 rounded border-2 border-blue-500 border-dashed"></span><span>Click preview</span></div></div></div>'), cl = /* @__PURE__ */ $(`<div class="text-center py-12 text-gray-500"><svg class="mx-auto h-12 w-12 mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path></svg> <p>You haven't added any zones yet</p></div>`), dl = /* @__PURE__ */ $('<p class="text-xs text-gray-400 font-mono"> </p>'), hl = /* @__PURE__ */ $('<div class="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm border border-gray-200"><div><h4 class="font-medium text-gray-900"> </h4> <p class="text-sm text-gray-500"> </p> <!></div> <button class="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors" title="Remove zone"><svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg></button></div>'), vl = /* @__PURE__ */ $('<div class="space-y-3"></div>'), pl = /* @__PURE__ */ $(`<div class="mb-6 p-4 bg-gray-50 rounded-lg border border-gray-200"><h3 class="text-base font-semibold mb-1 text-gray-800">Quick Add</h3> <p class="text-xs text-gray-500 mb-3">Use your device's location to quickly add a zone (permission required)</p> <button class="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"><!></button> <!> <!></div> <!> <!> <div class="border-b border-gray-200 mb-6"><nav class="-mb-px flex space-x-8"><button>Map Selection</button> <button> </button></nav></div> <!>`, 1), _l = /* @__PURE__ */ $('<div class="max-w-3xl mx-auto p-4"><div class="mb-6"><h2 class="text-2xl font-bold text-gray-900">Zones of Influence</h2> <p class="text-gray-600 text-sm mt-1">Set your zones of influence to appear on the realm map</p></div> <!></div>');
function gl(e, t) {
  br(t, !0);
  const n = "zone_selector", r = 6;
  let i = /* @__PURE__ */ P("map"), s = /* @__PURE__ */ P(pt([])), f = /* @__PURE__ */ P(!0), o = /* @__PURE__ */ P(""), a = /* @__PURE__ */ P(""), u = /* @__PURE__ */ P(!1), h = /* @__PURE__ */ P(""), p = /* @__PURE__ */ P(null), _ = /* @__PURE__ */ P(void 0), d = /* @__PURE__ */ P(null), c = null, m = null, b = null, C = null, E = /* @__PURE__ */ gs(() => t.ctx.principal || null);
  async function Z(y, g = "{}") {
    const H = await t.ctx.backend.extension_sync_call(JSON.stringify({ extension_name: n, function_name: y, args: g }));
    return JSON.parse(H);
  }
  async function G() {
    if (v(E)) {
      w(f, !0), w(o, "");
      try {
        const y = await Z("get_my_zones", JSON.stringify({ user_id: v(E) }));
        y?.success ? w(s, y.data || [], !0) : w(s, y?.data ?? (Array.isArray(y) ? y : []), !0);
      } catch (y) {
        w(o, y?.message || String(y), !0);
      } finally {
        w(f, !1);
      }
    }
  }
  async function be(y, g, H = "My Zone") {
    if (!v(E)) {
      w(o, "You must be logged in to add zones");
      return;
    }
    w(f, !0), w(o, ""), w(a, "");
    try {
      const D = await Z("add_zone", JSON.stringify({
        user_id: v(E),
        latitude: y,
        longitude: g,
        name: H,
        description: `Zone of influence at ${y.toFixed(4)}, ${g.toFixed(4)}`,
        resolution: r
      }));
      D?.success ? (w(a, "Zone added successfully!"), await G()) : w(o, D?.error || "Failed to add zone", !0);
    } catch (D) {
      w(o, D?.message || String(D), !0);
    } finally {
      w(f, !1);
    }
  }
  async function xe(y) {
    if (v(E) && confirm("Are you sure you want to remove this zone?")) {
      w(f, !0), w(o, ""), w(a, "");
      try {
        const g = await Z("remove_zone", JSON.stringify({ user_id: v(E), zone_id: y }));
        g?.success ? (w(a, "Zone removed successfully!"), await G()) : w(o, g?.error || "Failed to remove zone", !0);
      } catch (g) {
        w(o, g?.message || String(g), !0);
      } finally {
        w(f, !1);
      }
    }
  }
  function $e() {
    if (!navigator.geolocation) {
      w(h, "Geolocation is not supported by your browser");
      return;
    }
    w(u, !0), w(h, ""), navigator.geolocation.getCurrentPosition(
      async (y) => {
        w(
          p,
          {
            lat: y.coords.latitude,
            lng: y.coords.longitude
          },
          !0
        ), w(u, !1), confirm(`Add your current location as a zone of influence?

Latitude: ${v(p).lat.toFixed(4)}
Longitude: ${v(p).lng.toFixed(4)}`) && await be(v(p).lat, v(p).lng, "My Location");
      },
      (y) => {
        w(u, !1), y.code === y.PERMISSION_DENIED ? w(h, "Location permission denied. You can still select zones manually on the map.") : y.code === y.POSITION_UNAVAILABLE ? w(h, "Location information unavailable.") : y.code === y.TIMEOUT ? w(h, "Location request timed out.") : w(h, "An error occurred while getting your location.");
      },
      { enableHighAccuracy: !0, timeout: 1e4, maximumAge: 0 }
    );
  }
  async function J() {
    if (!v(_) || v(d)) return;
    if (c = await import(
      /* @vite-ignore */
      "https://esm.sh/leaflet@1.9.4"
    ), m = await import(
      /* @vite-ignore */
      "https://esm.sh/h3-js@4.2.1"
    ), !document.querySelector('link[href*="leaflet"]')) {
      const g = document.createElement("link");
      g.rel = "stylesheet", g.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css", document.head.appendChild(g), await new Promise((H) => setTimeout(H, 150));
    }
    w(d, c.map(v(_)).setView([20, 0], 2), !0);
    const y = c.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
      attribution: '&copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: "abcd",
      maxZoom: 19
    });
    y.on("tileerror", () => {
      v(d)._fb || (v(d)._fb = !0, v(d).removeLayer(y), c.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        maxZoom: 19
      }).addTo(v(d)));
    }), y.addTo(v(d)), b = c.layerGroup().addTo(v(d)), C = c.layerGroup().addTo(v(d)), v(d).on("click", ve), Ct();
  }
  function ve(y) {
    const { lat: g, lng: H } = y.latlng;
    if (m) {
      C.clearLayers();
      const Jt = m.latLngToCell(g, H, r), ct = m.cellToBoundary(Jt).map((Nt) => [Nt[0], Nt[1]]);
      c.polygon(ct, {
        color: "#3B82F6",
        fillColor: "#3B82F6",
        fillOpacity: 0.3,
        weight: 2,
        dashArray: "5, 5"
      }).addTo(C), Ct();
    }
    const D = prompt("Enter a name for this zone:", "My Zone");
    D !== null && be(g, H, D);
  }
  function Ct() {
    if (!c || !v(d) || !b) return;
    b.clearLayers();
    for (const g of v(s)) {
      if (!g.latitude || !g.longitude) continue;
      const H = g.user_id === v(E), D = H ? "#10B981" : "#6B7280";
      if (m && g.h3_index && !g.h3_index.startsWith("manual_"))
        try {
          const Kt = m.cellToBoundary(g.h3_index).map((ct) => [ct[0], ct[1]]);
          c.polygon(Kt, {
            color: D,
            fillColor: D,
            fillOpacity: H ? 0.4 : 0.2,
            weight: H ? 2 : 1
          }).addTo(b).bindPopup(`<b>${g.name}</b><br>H3: ${g.h3_index}`);
        } catch {
        }
      c.circleMarker([g.latitude, g.longitude], {
        radius: 8,
        fillColor: D,
        color: "#fff",
        weight: 2,
        opacity: 1,
        fillOpacity: 0.8
      }).addTo(b).bindPopup(`<div class="text-sm"><b>${g.name}</b><br><span class="text-gray-500">${g.latitude.toFixed(4)}, ${g.longitude.toFixed(4)}</span>${g.h3_index ? `<br><span class="text-xs font-mono">${g.h3_index}</span>` : ""}</div>`);
    }
    const y = v(s).filter((g) => g.latitude && g.longitude);
    y.length > 0 && v(d).fitBounds(c.latLngBounds(y.map((g) => [g.latitude, g.longitude])), { padding: [50, 50], maxZoom: 10 });
  }
  jr(() => {
    v(i) === "map" && v(s).length >= 0 && v(d) && Ct();
  }), el(async () => {
    await G(), await fr(), v(_) && await J();
  });
  var Gt = _l(), ri = ee(B(Gt), 2);
  {
    var ii = (y) => {
      var g = nl();
      V(y, g);
    }, si = (y) => {
      var g = pl(), H = lr(g), D = ee(B(H), 4), Jt = B(D);
      {
        var Kt = (M) => {
          var F = rl();
          V(M, F);
        }, ct = (M) => {
          var F = il();
          V(M, F);
        };
        Ce(Jt, (M) => {
          v(u) ? M(Kt) : M(ct, -1);
        });
      }
      var Nt = ee(D, 2);
      {
        var li = (M) => {
          var F = sl(), pe = B(F);
          Je(() => De(pe, v(h))), V(M, F);
        };
        Ce(Nt, (M) => {
          v(h) && M(li);
        });
      }
      var oi = ee(Nt, 2);
      {
        var ai = (M) => {
          var F = ll(), pe = B(F);
          Je((Ft, yn) => De(pe, `Current location: ${Ft ?? ""}, ${yn ?? ""}`), [
            () => v(p).lat.toFixed(4),
            () => v(p).lng.toFixed(4)
          ]), V(M, F);
        };
        Ce(oi, (M) => {
          v(p) && M(ai);
        });
      }
      var Gn = ee(H, 2);
      {
        var fi = (M) => {
          var F = ol(), pe = B(F);
          Je(() => De(pe, v(o))), V(M, F);
        };
        Ce(Gn, (M) => {
          v(o) && M(fi);
        });
      }
      var Jn = ee(Gn, 2);
      {
        var ui = (M) => {
          var F = al(), pe = B(F);
          Je(() => De(pe, v(a))), V(M, F);
        };
        Ce(Jn, (M) => {
          v(a) && M(ui);
        });
      }
      var Kn = ee(Jn, 2), ci = B(Kn), mn = B(ci), wn = ee(mn, 2), di = B(wn), hi = ee(Kn, 2);
      {
        var vi = (M) => {
          var F = fl();
          V(M, F);
        }, pi = (M) => {
          var F = ul(), pe = ee(B(F), 2);
          Qs(pe, (Ft) => w(_, Ft), () => v(_)), V(M, F);
        }, _i = (M) => {
          var F = js(), pe = lr(F);
          {
            var Ft = (dt) => {
              var Wt = cl();
              V(dt, Wt);
            }, yn = (dt) => {
              var Wt = vl();
              Js(Wt, 21, () => v(s), $s, (gi, ht) => {
                var Wn = hl(), Xn = B(Wn), Qn = B(Xn), mi = B(Qn), er = ee(Qn, 2), wi = B(er), yi = ee(er, 2);
                {
                  var bi = (Lt) => {
                    var Xt = dl(), Ei = B(Xt);
                    Je(() => De(Ei, `H3: ${v(ht).h3_index ?? ""}`)), V(Lt, Xt);
                  };
                  Ce(yi, (Lt) => {
                    v(ht).h3_index && Lt(bi);
                  });
                }
                var xi = ee(Xn, 2);
                Je(
                  (Lt, Xt) => {
                    De(mi, v(ht).name), De(wi, `${Lt ?? ""}, ${Xt ?? ""}`);
                  },
                  [
                    () => v(ht).latitude?.toFixed(4),
                    () => v(ht).longitude?.toFixed(4)
                  ]
                ), Qt("click", xi, () => xe(v(ht).id)), V(gi, Wn);
              }), V(dt, Wt);
            };
            Ce(pe, (dt) => {
              v(s).length === 0 ? dt(Ft) : dt(yn, -1);
            });
          }
          V(M, F);
        };
        Ce(hi, (M) => {
          v(f) ? M(vi) : v(i) === "map" ? M(pi, 1) : v(i) === "list" && M(_i, 2);
        });
      }
      Je(() => {
        D.disabled = v(u), hr(mn, 1, `py-2 px-1 border-b-2 font-medium text-sm transition-colors ${v(i) === "map" ? "border-blue-500 text-blue-600" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"}`), hr(wn, 1, `py-2 px-1 border-b-2 font-medium text-sm transition-colors ${v(i) === "list" ? "border-blue-500 text-blue-600" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"}`), De(di, `My Zones (${v(s).length ?? ""})`);
      }), Qt("click", D, $e), Qt("click", mn, () => {
        w(i, "map"), fr().then(() => {
          v(_) && !v(d) ? J() : v(d) && v(d).invalidateSize();
        });
      }), Qt("click", wn, () => w(i, "list")), V(y, g);
    };
    Ce(ri, (y) => {
      v(E) ? y(si, -1) : y(ii);
    });
  }
  V(e, Gt), xr();
}
Ds(["click"]);
function yl(e, t) {
  const n = Zs(gl, { target: e, props: { ctx: t } });
  return {
    unmount() {
      try {
        Us(n);
      } catch {
      }
    }
  };
}
export {
  yl as default
};
