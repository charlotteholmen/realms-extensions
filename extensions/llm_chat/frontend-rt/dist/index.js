var Ds = Object.defineProperty;
var fr = (e) => {
  throw TypeError(e);
};
var Fs = (e, t, n) => t in e ? Ds(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var ye = (e, t, n) => Fs(e, typeof t != "symbol" ? t + "" : t, n), Sn = (e, t, n) => t.has(e) || fr("Cannot " + n);
var o = (e, t, n) => (Sn(e, t, "read from private field"), n ? n.call(e) : t.get(e)), x = (e, t, n) => t.has(e) ? fr("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), E = (e, t, n, r) => (Sn(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), N = (e, t, n) => (Sn(e, t, "access private method"), n);
var Tr = Array.isArray, js = Array.prototype.indexOf, It = Array.prototype.includes, wn = Array.from, zs = Object.defineProperty, Bt = Object.getOwnPropertyDescriptor, Us = Object.getOwnPropertyDescriptors, Hs = Object.prototype, qs = Array.prototype, Sr = Object.getPrototypeOf, ur = Object.isExtensible;
const Vs = () => {
};
function $s(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function Ar() {
  var e, t, n = new Promise((r, s) => {
    e = r, t = s;
  });
  return { promise: n, resolve: e, reject: t };
}
const Q = 2, Lt = 4, xn = 8, Mr = 1 << 24, Oe = 16, Ae = 32, st = 64, In = 128, me = 512, $ = 1024, Z = 2048, De = 4096, te = 8192, we = 16384, yt = 32768, Ln = 1 << 25, Ot = 65536, On = 1 << 17, Bs = 1 << 18, Ut = 1 << 19, Ys = 1 << 20, Ie = 1 << 25, wt = 65536, pn = 1 << 21, Wt = 1 << 22, nt = 1 << 23, on = Symbol("$state"), qe = new class extends Error {
  constructor() {
    super(...arguments);
    ye(this, "name", "StaleReactionError");
    ye(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
function Gs(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function Ws() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Ks(e, t, n) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function Js(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Xs() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Zs(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Qs() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function ei() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function ti() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function ni() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function ri() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
const si = 1, ii = 2, Cr = 4, ai = 8, oi = 16, li = 1, fi = 2, Y = Symbol(), Nr = "http://www.w3.org/1999/xhtml", ui = "http://www.w3.org/2000/svg", ci = "http://www.w3.org/1998/Math/MathML";
function di() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function vi() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function Pr(e) {
  return e === this.v;
}
function hi(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Rr(e) {
  return !hi(e, this.v);
}
let ae = null;
function Dt(e) {
  ae = e;
}
function Ir(e, t = !1, n) {
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
function Lr(e) {
  var t = (
    /** @type {ComponentContext} */
    ae
  ), n = t.e;
  if (n !== null) {
    t.e = null;
    for (var r of n)
      es(r);
  }
  return t.i = !0, ae = t.p, /** @type {T} */
  {};
}
function Or() {
  return !0;
}
let lt = [];
function Dr() {
  var e = lt;
  lt = [], $s(e);
}
function _t(e) {
  if (lt.length === 0 && !Yt) {
    var t = lt;
    queueMicrotask(() => {
      t === lt && Dr();
    });
  }
  lt.push(e);
}
function pi() {
  for (; lt.length > 0; )
    Dr();
}
function Fr(e) {
  var t = T;
  if (t === null)
    return A.f |= nt, e;
  if ((t.f & yt) === 0 && (t.f & Lt) === 0)
    throw e;
  et(e, t);
}
function et(e, t) {
  for (; t !== null; ) {
    if ((t.f & In) !== 0) {
      if ((t.f & yt) === 0)
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
const _i = -7169;
function U(e, t) {
  e.f = e.f & _i | t;
}
function Gn(e) {
  (e.f & me) !== 0 || e.deps === null ? U(e, $) : U(e, De);
}
function jr(e) {
  if (e !== null)
    for (const t of e)
      (t.f & Q) === 0 || (t.f & wt) === 0 || (t.f ^= wt, jr(
        /** @type {Derived} */
        t.deps
      ));
}
function zr(e, t, n) {
  (e.f & Z) !== 0 ? t.add(e) : (e.f & De) !== 0 && n.add(e), jr(e.deps), U(e, $);
}
const ot = /* @__PURE__ */ new Set();
let y = null, Te = null, Dn = null, Yt = !1, An = !1, At = null, ln = null;
var cr = 0;
let gi = 1;
var Mt, Ct, ct, Ve, Ne, Jt, fe, Xt, Ze, $e, Pe, Nt, Pt, dt, q, fn, Ur, un, Fn, cn, bi;
const gn = class gn {
  constructor() {
    x(this, q);
    ye(this, "id", gi++);
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
    x(this, Mt, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    x(this, Ct, /* @__PURE__ */ new Set());
    /**
     * Callbacks that should run only when a fork is committed.
     * @type {Set<(batch: Batch) => void>}
     */
    x(this, ct, /* @__PURE__ */ new Set());
    /**
     * Async effects that are currently in flight
     * @type {Map<Effect, number>}
     */
    x(this, Ve, /* @__PURE__ */ new Map());
    /**
     * Async effects that are currently in flight, _not_ inside a pending boundary
     * @type {Map<Effect, number>}
     */
    x(this, Ne, /* @__PURE__ */ new Map());
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    x(this, Jt, null);
    /**
     * The root effects that need to be flushed
     * @type {Effect[]}
     */
    x(this, fe, []);
    /**
     * Effects created while this batch was active.
     * @type {Effect[]}
     */
    x(this, Xt, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    x(this, Ze, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    x(this, $e, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    x(this, Pe, /* @__PURE__ */ new Map());
    /**
     * Inverse of #skipped_branches which we need to tell prior batches to unskip them when committing
     * @type {Set<Effect>}
     */
    x(this, Nt, /* @__PURE__ */ new Set());
    ye(this, "is_fork", !1);
    x(this, Pt, !1);
    /** @type {Set<Batch>} */
    x(this, dt, /* @__PURE__ */ new Set());
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(t) {
    o(this, Pe).has(t) || o(this, Pe).set(t, { d: [], m: [] }), o(this, Nt).delete(t);
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   * @param {(e: Effect) => void} callback
   */
  unskip_effect(t, n = (r) => this.schedule(r)) {
    var r = o(this, Pe).get(t);
    if (r) {
      o(this, Pe).delete(t);
      for (var s of r.d)
        U(s, Z), n(s);
      for (s of r.m)
        U(s, De), n(s);
    }
    o(this, Nt).add(t);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Value} source
   * @param {any} value
   * @param {boolean} [is_derived]
   */
  capture(t, n, r = !1) {
    t.v !== Y && !this.previous.has(t) && this.previous.set(t, t.v), (t.f & nt) === 0 && (this.current.set(t, [n, r]), Te?.set(t, n)), this.is_fork || (t.v = n);
  }
  activate() {
    y = this;
  }
  deactivate() {
    y = null, Te = null;
  }
  flush() {
    try {
      An = !0, y = this, N(this, q, un).call(this);
    } finally {
      cr = 0, Dn = null, At = null, ln = null, An = !1, y = null, Te = null, gt.clear();
    }
  }
  discard() {
    for (const t of o(this, Ct)) t(this);
    o(this, Ct).clear(), o(this, ct).clear(), ot.delete(this);
  }
  /**
   * @param {Effect} effect
   */
  register_created_effect(t) {
    o(this, Xt).push(t);
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  increment(t, n) {
    let r = o(this, Ve).get(n) ?? 0;
    if (o(this, Ve).set(n, r + 1), t) {
      let s = o(this, Ne).get(n) ?? 0;
      o(this, Ne).set(n, s + 1);
    }
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   * @param {boolean} skip - whether to skip updates (because this is triggered by a stale reaction)
   */
  decrement(t, n, r) {
    let s = o(this, Ve).get(n) ?? 0;
    if (s === 1 ? o(this, Ve).delete(n) : o(this, Ve).set(n, s - 1), t) {
      let i = o(this, Ne).get(n) ?? 0;
      i === 1 ? o(this, Ne).delete(n) : o(this, Ne).set(n, i - 1);
    }
    o(this, Pt) || r || (E(this, Pt, !0), _t(() => {
      E(this, Pt, !1), this.flush();
    }));
  }
  /**
   * @param {Set<Effect>} dirty_effects
   * @param {Set<Effect>} maybe_dirty_effects
   */
  transfer_effects(t, n) {
    for (const r of t)
      o(this, Ze).add(r);
    for (const r of n)
      o(this, $e).add(r);
    t.clear(), n.clear();
  }
  /** @param {(batch: Batch) => void} fn */
  oncommit(t) {
    o(this, Mt).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    o(this, Ct).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  on_fork_commit(t) {
    o(this, ct).add(t);
  }
  run_fork_commit_callbacks() {
    for (const t of o(this, ct)) t(this);
    o(this, ct).clear();
  }
  settled() {
    return (o(this, Jt) ?? E(this, Jt, Ar())).promise;
  }
  static ensure() {
    if (y === null) {
      const t = y = new gn();
      An || (ot.add(y), Yt || _t(() => {
        y === t && t.flush();
      }));
    }
    return y;
  }
  apply() {
    {
      Te = null;
      return;
    }
  }
  /**
   *
   * @param {Effect} effect
   */
  schedule(t) {
    if (Dn = t, t.b?.is_pending && (t.f & (Lt | xn | Mr)) !== 0 && (t.f & yt) === 0) {
      t.b.defer_effect(t);
      return;
    }
    for (var n = t; n.parent !== null; ) {
      n = n.parent;
      var r = n.f;
      if (At !== null && n === T && (A === null || (A.f & Q) === 0))
        return;
      if ((r & (st | Ae)) !== 0) {
        if ((r & $) === 0)
          return;
        n.f ^= $;
      }
    }
    o(this, fe).push(n);
  }
};
Mt = new WeakMap(), Ct = new WeakMap(), ct = new WeakMap(), Ve = new WeakMap(), Ne = new WeakMap(), Jt = new WeakMap(), fe = new WeakMap(), Xt = new WeakMap(), Ze = new WeakMap(), $e = new WeakMap(), Pe = new WeakMap(), Nt = new WeakMap(), Pt = new WeakMap(), dt = new WeakMap(), q = new WeakSet(), fn = function() {
  return this.is_fork || o(this, Ne).size > 0;
}, Ur = function() {
  for (const r of o(this, dt))
    for (const s of o(r, Ne).keys()) {
      for (var t = !1, n = s; n.parent !== null; ) {
        if (o(this, Pe).has(n)) {
          t = !0;
          break;
        }
        n = n.parent;
      }
      if (!t)
        return !0;
    }
  return !1;
}, un = function() {
  var f;
  if (cr++ > 1e3 && (ot.delete(this), wi()), !N(this, q, fn).call(this)) {
    for (const a of o(this, Ze))
      o(this, $e).delete(a), U(a, Z), this.schedule(a);
    for (const a of o(this, $e))
      U(a, De), this.schedule(a);
  }
  const t = o(this, fe);
  E(this, fe, []), this.apply();
  var n = At = [], r = [], s = ln = [];
  for (const a of t)
    try {
      N(this, q, Fn).call(this, a, n, r);
    } catch (u) {
      throw Vr(a), u;
    }
  if (y = null, s.length > 0) {
    var i = gn.ensure();
    for (const a of s)
      i.schedule(a);
  }
  if (At = null, ln = null, N(this, q, fn).call(this) || N(this, q, Ur).call(this)) {
    N(this, q, cn).call(this, r), N(this, q, cn).call(this, n);
    for (const [a, u] of o(this, Pe))
      qr(a, u);
  } else {
    o(this, Ve).size === 0 && ot.delete(this), o(this, Ze).clear(), o(this, $e).clear();
    for (const a of o(this, Mt)) a(this);
    o(this, Mt).clear(), dr(r), dr(n), o(this, Jt)?.resolve();
  }
  var l = (
    /** @type {Batch | null} */
    /** @type {unknown} */
    y
  );
  if (o(this, fe).length > 0) {
    const a = l ?? (l = this);
    o(a, fe).push(...o(this, fe).filter((u) => !o(a, fe).includes(u)));
  }
  l !== null && (ot.add(l), N(f = l, q, un).call(f));
}, /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
Fn = function(t, n, r) {
  t.f ^= $;
  for (var s = t.first; s !== null; ) {
    var i = s.f, l = (i & (Ae | st)) !== 0, f = l && (i & $) !== 0, a = f || (i & te) !== 0 || o(this, Pe).has(s);
    if (!a && s.fn !== null) {
      l ? s.f ^= $ : (i & Lt) !== 0 ? n.push(s) : rn(s) && ((i & Oe) !== 0 && o(this, $e).add(s), jt(s));
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
cn = function(t) {
  for (var n = 0; n < t.length; n += 1)
    zr(t[n], o(this, Ze), o(this, $e));
}, bi = function() {
  var c, g, v;
  for (const p of ot) {
    var t = p.id < this.id, n = [];
    for (const [_, [k, h]] of this.current) {
      if (p.current.has(_)) {
        var r = (
          /** @type {[any, boolean]} */
          p.current.get(_)[0]
        );
        if (t && k !== r)
          p.current.set(_, [k, h]);
        else
          continue;
      }
      n.push(_);
    }
    var s = [...p.current.keys()].filter((_) => !this.current.has(_));
    if (s.length === 0)
      t && p.discard();
    else if (n.length > 0) {
      if (t)
        for (const _ of o(this, Nt))
          p.unskip_effect(_, (k) => {
            var h;
            (k.f & (Oe | Wt)) !== 0 ? p.schedule(k) : N(h = p, q, cn).call(h, [k]);
          });
      p.activate();
      var i = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Map();
      for (var f of n)
        Hr(f, s, i, l);
      l = /* @__PURE__ */ new Map();
      var a = [...p.current.keys()].filter(
        (_) => this.current.has(_) ? (
          /** @type {[any, boolean]} */
          this.current.get(_)[0] !== _
        ) : !0
      );
      for (const _ of o(this, Xt))
        (_.f & (we | te | On)) === 0 && Wn(_, a, l) && ((_.f & (Wt | Oe)) !== 0 ? (U(_, Z), p.schedule(_)) : o(p, Ze).add(_));
      if (o(p, fe).length > 0) {
        p.apply();
        for (var u of o(p, fe))
          N(c = p, q, Fn).call(c, u, [], []);
        E(p, fe, []);
      }
      p.deactivate();
    }
  }
  for (const p of ot)
    o(p, dt).has(this) && (o(p, dt).delete(this), o(p, dt).size === 0 && !N(g = p, q, fn).call(g) && (p.activate(), N(v = p, q, un).call(v)));
};
let xt = gn;
function mi(e) {
  var t = Yt;
  Yt = !0;
  try {
    for (var n; ; ) {
      if (pi(), y === null)
        return (
          /** @type {T} */
          n
        );
      y.flush();
    }
  } finally {
    Yt = t;
  }
}
function wi() {
  try {
    Qs();
  } catch (e) {
    et(e, Dn);
  }
}
let He = null;
function dr(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var r = e[n++];
      if ((r.f & (we | te)) === 0 && rn(r) && (He = /* @__PURE__ */ new Set(), jt(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && ss(r), He?.size > 0)) {
        gt.clear();
        for (const s of He) {
          if ((s.f & (we | te)) !== 0) continue;
          const i = [s];
          let l = s.parent;
          for (; l !== null; )
            He.has(l) && (He.delete(l), i.push(l)), l = l.parent;
          for (let f = i.length - 1; f >= 0; f--) {
            const a = i[f];
            (a.f & (we | te)) === 0 && jt(a);
          }
        }
        He.clear();
      }
    }
    He = null;
  }
}
function Hr(e, t, n, r) {
  if (!n.has(e) && (n.add(e), e.reactions !== null))
    for (const s of e.reactions) {
      const i = s.f;
      (i & Q) !== 0 ? Hr(
        /** @type {Derived} */
        s,
        t,
        n,
        r
      ) : (i & (Wt | Oe)) !== 0 && (i & Z) === 0 && Wn(s, t, r) && (U(s, Z), Kn(
        /** @type {Effect} */
        s
      ));
    }
}
function Wn(e, t, n) {
  const r = n.get(e);
  if (r !== void 0) return r;
  if (e.deps !== null)
    for (const s of e.deps) {
      if (It.call(t, s))
        return !0;
      if ((s.f & Q) !== 0 && Wn(
        /** @type {Derived} */
        s,
        t,
        n
      ))
        return n.set(
          /** @type {Derived} */
          s,
          !0
        ), !0;
    }
  return n.set(e, !1), !1;
}
function Kn(e) {
  y.schedule(e);
}
function qr(e, t) {
  if (!((e.f & Ae) !== 0 && (e.f & $) !== 0)) {
    (e.f & Z) !== 0 ? t.d.push(e) : (e.f & De) !== 0 && t.m.push(e), U(e, $);
    for (var n = e.first; n !== null; )
      qr(n, t), n = n.next;
  }
}
function Vr(e) {
  U(e, $);
  for (var t = e.first; t !== null; )
    Vr(t), t = t.next;
}
function xi(e) {
  let t = 0, n = kt(0), r;
  return () => {
    Qn() && (d(n), er(() => (t === 0 && (r = kn(() => e(() => Gt(n)))), t += 1, () => {
      _t(() => {
        t -= 1, t === 0 && (r?.(), r = void 0, Gt(n));
      });
    })));
  };
}
var ki = Ot | Ut;
function yi(e, t, n, r) {
  new Ei(e, t, n, r);
}
var pe, Yn, _e, vt, re, ge, ee, ue, Be, ht, Qe, Rt, Zt, Qt, Ye, bn, j, Ti, Si, Ai, jn, dn, vn, zn, Un;
class Ei {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(t, n, r, s) {
    x(this, j);
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
    x(this, pe);
    /** @type {TemplateNode | null} */
    x(this, Yn, null);
    /** @type {BoundaryProps} */
    x(this, _e);
    /** @type {((anchor: Node) => void)} */
    x(this, vt);
    /** @type {Effect} */
    x(this, re);
    /** @type {Effect | null} */
    x(this, ge, null);
    /** @type {Effect | null} */
    x(this, ee, null);
    /** @type {Effect | null} */
    x(this, ue, null);
    /** @type {DocumentFragment | null} */
    x(this, Be, null);
    x(this, ht, 0);
    x(this, Qe, 0);
    x(this, Rt, !1);
    /** @type {Set<Effect>} */
    x(this, Zt, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    x(this, Qt, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    x(this, Ye, null);
    x(this, bn, xi(() => (E(this, Ye, kt(o(this, ht))), () => {
      E(this, Ye, null);
    })));
    E(this, pe, t), E(this, _e, n), E(this, vt, (i) => {
      var l = (
        /** @type {Effect} */
        T
      );
      l.b = this, l.f |= In, r(i);
    }), this.parent = /** @type {Effect} */
    T.b, this.transform_error = s ?? this.parent?.transform_error ?? ((i) => i), E(this, re, tr(() => {
      N(this, j, jn).call(this);
    }, ki));
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    zr(t, o(this, Zt), o(this, Qt));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!o(this, _e).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  update_pending_count(t, n) {
    N(this, j, zn).call(this, t, n), E(this, ht, o(this, ht) + t), !(!o(this, Ye) || o(this, Rt)) && (E(this, Rt, !0), _t(() => {
      E(this, Rt, !1), o(this, Ye) && Ft(o(this, Ye), o(this, ht));
    }));
  }
  get_effect_pending() {
    return o(this, bn).call(this), d(
      /** @type {Source<number>} */
      o(this, Ye)
    );
  }
  /** @param {unknown} error */
  error(t) {
    if (!o(this, _e).onerror && !o(this, _e).failed)
      throw t;
    y?.is_fork ? (o(this, ge) && y.skip_effect(o(this, ge)), o(this, ee) && y.skip_effect(o(this, ee)), o(this, ue) && y.skip_effect(o(this, ue)), y.on_fork_commit(() => {
      N(this, j, Un).call(this, t);
    })) : N(this, j, Un).call(this, t);
  }
}
pe = new WeakMap(), Yn = new WeakMap(), _e = new WeakMap(), vt = new WeakMap(), re = new WeakMap(), ge = new WeakMap(), ee = new WeakMap(), ue = new WeakMap(), Be = new WeakMap(), ht = new WeakMap(), Qe = new WeakMap(), Rt = new WeakMap(), Zt = new WeakMap(), Qt = new WeakMap(), Ye = new WeakMap(), bn = new WeakMap(), j = new WeakSet(), Ti = function() {
  try {
    E(this, ge, be(() => o(this, vt).call(this, o(this, pe))));
  } catch (t) {
    this.error(t);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
Si = function(t) {
  const n = o(this, _e).failed;
  n && E(this, ue, be(() => {
    n(
      o(this, pe),
      () => t,
      () => () => {
      }
    );
  }));
}, Ai = function() {
  const t = o(this, _e).pending;
  t && (this.is_pending = !0, E(this, ee, be(() => t(o(this, pe)))), _t(() => {
    var n = E(this, Be, document.createDocumentFragment()), r = rt();
    n.append(r), E(this, ge, N(this, j, vn).call(this, () => be(() => o(this, vt).call(this, r)))), o(this, Qe) === 0 && (o(this, pe).before(n), E(this, Be, null), bt(
      /** @type {Effect} */
      o(this, ee),
      () => {
        E(this, ee, null);
      }
    ), N(this, j, dn).call(
      this,
      /** @type {Batch} */
      y
    ));
  }));
}, jn = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), E(this, Qe, 0), E(this, ht, 0), E(this, ge, be(() => {
      o(this, vt).call(this, o(this, pe));
    })), o(this, Qe) > 0) {
      var t = E(this, Be, document.createDocumentFragment());
      sr(o(this, ge), t);
      const n = (
        /** @type {(anchor: Node) => void} */
        o(this, _e).pending
      );
      E(this, ee, be(() => n(o(this, pe))));
    } else
      N(this, j, dn).call(
        this,
        /** @type {Batch} */
        y
      );
  } catch (n) {
    this.error(n);
  }
}, /**
 * @param {Batch} batch
 */
dn = function(t) {
  this.is_pending = !1, t.transfer_effects(o(this, Zt), o(this, Qt));
}, /**
 * @template T
 * @param {() => T} fn
 */
vn = function(t) {
  var n = T, r = A, s = ae;
  Fe(o(this, re)), ke(o(this, re)), Dt(o(this, re).ctx);
  try {
    return xt.ensure(), t();
  } catch (i) {
    return Fr(i), null;
  } finally {
    Fe(n), ke(r), Dt(s);
  }
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 * @param {Batch} batch
 */
zn = function(t, n) {
  var r;
  if (!this.has_pending_snippet()) {
    this.parent && N(r = this.parent, j, zn).call(r, t, n);
    return;
  }
  E(this, Qe, o(this, Qe) + t), o(this, Qe) === 0 && (N(this, j, dn).call(this, n), o(this, ee) && bt(o(this, ee), () => {
    E(this, ee, null);
  }), o(this, Be) && (o(this, pe).before(o(this, Be)), E(this, Be, null)));
}, /**
 * @param {unknown} error
 */
Un = function(t) {
  o(this, ge) && (ie(o(this, ge)), E(this, ge, null)), o(this, ee) && (ie(o(this, ee)), E(this, ee, null)), o(this, ue) && (ie(o(this, ue)), E(this, ue, null));
  var n = o(this, _e).onerror;
  let r = o(this, _e).failed;
  var s = !1, i = !1;
  const l = () => {
    if (s) {
      vi();
      return;
    }
    s = !0, i && ri(), o(this, ue) !== null && bt(o(this, ue), () => {
      E(this, ue, null);
    }), N(this, j, vn).call(this, () => {
      N(this, j, jn).call(this);
    });
  }, f = (a) => {
    try {
      i = !0, n?.(a, l), i = !1;
    } catch (u) {
      et(u, o(this, re) && o(this, re).parent);
    }
    r && E(this, ue, N(this, j, vn).call(this, () => {
      try {
        return be(() => {
          var u = (
            /** @type {Effect} */
            T
          );
          u.b = this, u.f |= In, r(
            o(this, pe),
            () => a,
            () => l
          );
        });
      } catch (u) {
        return et(
          u,
          /** @type {Effect} */
          o(this, re).parent
        ), null;
      }
    }));
  };
  _t(() => {
    var a;
    try {
      a = this.transform_error(t);
    } catch (u) {
      et(u, o(this, re) && o(this, re).parent);
      return;
    }
    a !== null && typeof a == "object" && typeof /** @type {any} */
    a.then == "function" ? a.then(
      f,
      /** @param {unknown} e */
      (u) => et(u, o(this, re) && o(this, re).parent)
    ) : f(a);
  });
};
function Mi(e, t, n, r) {
  const s = Br;
  var i = e.filter((v) => !v.settled);
  if (n.length === 0 && i.length === 0) {
    r(t.map(s));
    return;
  }
  var l = (
    /** @type {Effect} */
    T
  ), f = Ci(), a = i.length === 1 ? i[0].promise : i.length > 1 ? Promise.all(i.map((v) => v.promise)) : null;
  function u(v) {
    f();
    try {
      r(v);
    } catch (p) {
      (l.f & we) === 0 && et(p, l);
    }
    _n();
  }
  if (n.length === 0) {
    a.then(() => u(t.map(s)));
    return;
  }
  var c = $r();
  function g() {
    Promise.all(n.map((v) => /* @__PURE__ */ Ni(v))).then((v) => u([...t.map(s), ...v])).catch((v) => et(v, l)).finally(() => c());
  }
  a ? a.then(() => {
    f(), g(), _n();
  }) : g();
}
function Ci() {
  var e = (
    /** @type {Effect} */
    T
  ), t = A, n = ae, r = (
    /** @type {Batch} */
    y
  );
  return function(i = !0) {
    Fe(e), ke(t), Dt(n), i && (e.f & we) === 0 && (r?.activate(), r?.apply());
  };
}
function _n(e = !0) {
  Fe(null), ke(null), Dt(null), e && y?.deactivate();
}
function $r() {
  var e = (
    /** @type {Effect} */
    T
  ), t = (
    /** @type {Boundary} */
    e.b
  ), n = (
    /** @type {Batch} */
    y
  ), r = t.is_rendered();
  return t.update_pending_count(1, n), n.increment(r, e), (s = !1) => {
    t.update_pending_count(-1, n), n.decrement(r, e, s);
  };
}
// @__NO_SIDE_EFFECTS__
function Br(e) {
  var t = Q | Z;
  return T !== null && (T.f |= Ut), {
    ctx: ae,
    deps: null,
    effects: null,
    equals: Pr,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      Y
    ),
    wv: 0,
    parent: T,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function Ni(e, t, n) {
  let r = (
    /** @type {Effect | null} */
    T
  );
  r === null && Ws();
  var s = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), i = kt(
    /** @type {V} */
    Y
  ), l = !A, f = /* @__PURE__ */ new Map();
  return $i(() => {
    var a = (
      /** @type {Effect} */
      T
    ), u = Ar();
    s = u.promise;
    try {
      Promise.resolve(e()).then(u.resolve, u.reject).finally(_n);
    } catch (p) {
      u.reject(p), _n();
    }
    var c = (
      /** @type {Batch} */
      y
    );
    if (l) {
      if ((a.f & yt) !== 0)
        var g = $r();
      if (
        /** @type {Boundary} */
        r.b.is_rendered()
      )
        f.get(c)?.reject(qe), f.delete(c);
      else {
        for (const p of f.values())
          p.reject(qe);
        f.clear();
      }
      f.set(c, u);
    }
    const v = (p, _ = void 0) => {
      if (g) {
        var k = _ === qe;
        g(k);
      }
      if (!(_ === qe || (a.f & we) !== 0)) {
        if (c.activate(), _)
          i.f |= nt, Ft(i, _);
        else {
          (i.f & nt) !== 0 && (i.f ^= nt), Ft(i, p);
          for (const [h, S] of f) {
            if (f.delete(h), h === c) break;
            S.reject(qe);
          }
        }
        c.deactivate();
      }
    };
    u.promise.then(v, (p) => v(null, p || "unknown"));
  }), qi(() => {
    for (const a of f.values())
      a.reject(qe);
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
function Pi(e) {
  const t = /* @__PURE__ */ Br(e);
  return t.equals = Rr, t;
}
function Ri(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      ie(
        /** @type {Effect} */
        t[n]
      );
  }
}
function Jn(e) {
  var t, n = T, r = e.parent;
  if (!it && r !== null && (r.f & (we | te)) !== 0)
    return di(), e.v;
  Fe(r);
  try {
    e.f &= ~wt, Ri(e), t = us(e);
  } finally {
    Fe(n);
  }
  return t;
}
function Yr(e) {
  var t = Jn(e);
  if (!e.equals(t) && (e.wv = ls(), (!y?.is_fork || e.deps === null) && (y !== null ? y.capture(e, t, !0) : e.v = t, e.deps === null))) {
    U(e, $);
    return;
  }
  it || (Te !== null ? (Qn() || y?.is_fork) && Te.set(e, t) : Gn(e));
}
function Ii(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      (t.teardown || t.ac) && (t.teardown?.(), t.ac?.abort(qe), t.teardown = Vs, t.ac = null, Kt(t, 0), nr(t));
}
function Gr(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      t.teardown && jt(t);
}
let Hn = /* @__PURE__ */ new Set();
const gt = /* @__PURE__ */ new Map();
let Wr = !1;
function kt(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Pr,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function F(e, t) {
  const n = kt(e);
  return Yi(n), n;
}
// @__NO_SIDE_EFFECTS__
function Li(e, t = !1, n = !0) {
  const r = kt(e);
  return t || (r.equals = Rr), r;
}
function m(e, t, n = !1) {
  A !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Se || (A.f & On) !== 0) && Or() && (A.f & (Q | Oe | Wt | On)) !== 0 && (xe === null || !It.call(xe, e)) && ni();
  let r = n ? tt(t) : t;
  return Ft(e, r, ln);
}
function Ft(e, t, n = null) {
  if (!e.equals(t)) {
    gt.set(e, it ? t : e.v);
    var r = xt.ensure();
    if (r.capture(e, t), (e.f & Q) !== 0) {
      const s = (
        /** @type {Derived} */
        e
      );
      (e.f & Z) !== 0 && Jn(s), Te === null && Gn(s);
    }
    e.wv = ls(), Kr(e, Z, n), T !== null && (T.f & $) !== 0 && (T.f & (Ae | st)) === 0 && (he === null ? Gi([e]) : he.push(e)), !r.is_fork && Hn.size > 0 && !Wr && Oi();
  }
  return t;
}
function Oi() {
  Wr = !1;
  for (const e of Hn)
    (e.f & $) !== 0 && U(e, De), rn(e) && jt(e);
  Hn.clear();
}
function Gt(e) {
  m(e, e.v + 1);
}
function Kr(e, t, n) {
  var r = e.reactions;
  if (r !== null)
    for (var s = r.length, i = 0; i < s; i++) {
      var l = r[i], f = l.f, a = (f & Z) === 0;
      if (a && U(l, t), (f & Q) !== 0) {
        var u = (
          /** @type {Derived} */
          l
        );
        Te?.delete(u), (f & wt) === 0 && (f & me && (T === null || (T.f & pn) === 0) && (l.f |= wt), Kr(u, De, n));
      } else if (a) {
        var c = (
          /** @type {Effect} */
          l
        );
        (f & Oe) !== 0 && He !== null && He.add(c), n !== null ? n.push(c) : Kn(c);
      }
    }
}
function tt(e) {
  if (typeof e != "object" || e === null || on in e)
    return e;
  const t = Sr(e);
  if (t !== Hs && t !== qs)
    return e;
  var n = /* @__PURE__ */ new Map(), r = Tr(e), s = /* @__PURE__ */ F(0), i = mt, l = (f) => {
    if (mt === i)
      return f();
    var a = A, u = mt;
    ke(null), _r(i);
    var c = f();
    return ke(a), _r(u), c;
  };
  return r && n.set("length", /* @__PURE__ */ F(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(f, a, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && ei();
        var c = n.get(a);
        return c === void 0 ? l(() => {
          var g = /* @__PURE__ */ F(u.value);
          return n.set(a, g), g;
        }) : m(c, u.value, !0), !0;
      },
      deleteProperty(f, a) {
        var u = n.get(a);
        if (u === void 0) {
          if (a in f) {
            const c = l(() => /* @__PURE__ */ F(Y));
            n.set(a, c), Gt(s);
          }
        } else
          m(u, Y), Gt(s);
        return !0;
      },
      get(f, a, u) {
        if (a === on)
          return e;
        var c = n.get(a), g = a in f;
        if (c === void 0 && (!g || Bt(f, a)?.writable) && (c = l(() => {
          var p = tt(g ? f[a] : Y), _ = /* @__PURE__ */ F(p);
          return _;
        }), n.set(a, c)), c !== void 0) {
          var v = d(c);
          return v === Y ? void 0 : v;
        }
        return Reflect.get(f, a, u);
      },
      getOwnPropertyDescriptor(f, a) {
        var u = Reflect.getOwnPropertyDescriptor(f, a);
        if (u && "value" in u) {
          var c = n.get(a);
          c && (u.value = d(c));
        } else if (u === void 0) {
          var g = n.get(a), v = g?.v;
          if (g !== void 0 && v !== Y)
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
        if (a === on)
          return !0;
        var u = n.get(a), c = u !== void 0 && u.v !== Y || Reflect.has(f, a);
        if (u !== void 0 || T !== null && (!c || Bt(f, a)?.writable)) {
          u === void 0 && (u = l(() => {
            var v = c ? tt(f[a]) : Y, p = /* @__PURE__ */ F(v);
            return p;
          }), n.set(a, u));
          var g = d(u);
          if (g === Y)
            return !1;
        }
        return c;
      },
      set(f, a, u, c) {
        var g = n.get(a), v = a in f;
        if (r && a === "length")
          for (var p = u; p < /** @type {Source<number>} */
          g.v; p += 1) {
            var _ = n.get(p + "");
            _ !== void 0 ? m(_, Y) : p in f && (_ = l(() => /* @__PURE__ */ F(Y)), n.set(p + "", _));
          }
        if (g === void 0)
          (!v || Bt(f, a)?.writable) && (g = l(() => /* @__PURE__ */ F(void 0)), m(g, tt(u)), n.set(a, g));
        else {
          v = g.v !== Y;
          var k = l(() => tt(u));
          m(g, k);
        }
        var h = Reflect.getOwnPropertyDescriptor(f, a);
        if (h?.set && h.set.call(c, u), !v) {
          if (r && typeof a == "string") {
            var S = (
              /** @type {Source<number>} */
              n.get("length")
            ), G = Number(a);
            Number.isInteger(G) && G >= S.v && m(S, G + 1);
          }
          Gt(s);
        }
        return !0;
      },
      ownKeys(f) {
        d(s);
        var a = Reflect.ownKeys(f).filter((g) => {
          var v = n.get(g);
          return v === void 0 || v.v !== Y;
        });
        for (var [u, c] of n)
          c.v !== Y && !(u in f) && a.push(u);
        return a;
      },
      setPrototypeOf() {
        ti();
      }
    }
  );
}
var vr, Jr, Xr, Zr;
function Di() {
  if (vr === void 0) {
    vr = window, Jr = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    Xr = Bt(t, "firstChild").get, Zr = Bt(t, "nextSibling").get, ur(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), ur(n) && (n.__t = void 0);
  }
}
function rt(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function Le(e) {
  return (
    /** @type {TemplateNode | null} */
    Xr.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function nn(e) {
  return (
    /** @type {TemplateNode | null} */
    Zr.call(e)
  );
}
function P(e, t) {
  return /* @__PURE__ */ Le(e);
}
function Mn(e, t = !1) {
  {
    var n = /* @__PURE__ */ Le(e);
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ nn(n) : n;
  }
}
function Ce(e, t = 1, n = !1) {
  let r = e;
  for (; t--; )
    r = /** @type {TemplateNode} */
    /* @__PURE__ */ nn(r);
  return r;
}
function Fi(e) {
  e.textContent = "";
}
function Qr() {
  return !1;
}
function Xn(e, t, n) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElementNS(t ?? Nr, e, void 0)
  );
}
let hr = !1;
function ji() {
  hr || (hr = !0, document.addEventListener(
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
function Zn(e) {
  var t = A, n = T;
  ke(null), Fe(null);
  try {
    return e();
  } finally {
    ke(t), Fe(n);
  }
}
function zi(e, t, n, r = n) {
  e.addEventListener(t, () => Zn(n));
  const s = e.__on_r;
  s ? e.__on_r = () => {
    s(), r(!0);
  } : e.__on_r = () => r(!0), ji();
}
function Ui(e) {
  T === null && (A === null && Zs(), Xs()), it && Js();
}
function Hi(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function Ge(e, t) {
  var n = T;
  n !== null && (n.f & te) !== 0 && (e |= te);
  var r = {
    ctx: ae,
    deps: null,
    nodes: null,
    f: e | Z | me,
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
  y?.register_created_effect(r);
  var s = r;
  if ((e & Lt) !== 0)
    At !== null ? At.push(r) : xt.ensure().schedule(r);
  else if (t !== null) {
    try {
      jt(r);
    } catch (l) {
      throw ie(r), l;
    }
    s.deps === null && s.teardown === null && s.nodes === null && s.first === s.last && // either `null`, or a singular child
    (s.f & Ut) === 0 && (s = s.first, (e & Oe) !== 0 && (e & Ot) !== 0 && s !== null && (s.f |= Ot));
  }
  if (s !== null && (s.parent = n, n !== null && Hi(s, n), A !== null && (A.f & Q) !== 0 && (e & st) === 0)) {
    var i = (
      /** @type {Derived} */
      A
    );
    (i.effects ?? (i.effects = [])).push(s);
  }
  return r;
}
function Qn() {
  return A !== null && !Se;
}
function qi(e) {
  const t = Ge(xn, null);
  return U(t, $), t.teardown = e, t;
}
function qn(e) {
  Ui();
  var t = (
    /** @type {Effect} */
    T.f
  ), n = !A && (t & Ae) !== 0 && (t & yt) === 0;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      ae
    );
    (r.e ?? (r.e = [])).push(e);
  } else
    return es(e);
}
function es(e) {
  return Ge(Lt | Ys, e);
}
function Vi(e) {
  xt.ensure();
  const t = Ge(st | Ut, e);
  return (n = {}) => new Promise((r) => {
    n.outro ? bt(t, () => {
      ie(t), r(void 0);
    }) : (ie(t), r(void 0));
  });
}
function ts(e) {
  return Ge(Lt, e);
}
function $i(e) {
  return Ge(Wt | Ut, e);
}
function er(e, t = 0) {
  return Ge(xn | t, e);
}
function Ue(e, t = [], n = [], r = []) {
  Mi(r, t, n, (s) => {
    Ge(xn, () => e(...s.map(d)));
  });
}
function tr(e, t = 0) {
  var n = Ge(Oe | t, e);
  return n;
}
function be(e) {
  return Ge(Ae | Ut, e);
}
function ns(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = it, r = A;
    pr(!0), ke(null);
    try {
      t.call(null);
    } finally {
      pr(n), ke(r);
    }
  }
}
function nr(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const s = n.ac;
    s !== null && Zn(() => {
      s.abort(qe);
    });
    var r = n.next;
    (n.f & st) !== 0 ? n.parent = null : ie(n, t), n = r;
  }
}
function Bi(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & Ae) === 0 && ie(t), t = n;
  }
}
function ie(e, t = !0) {
  var n = !1;
  (t || (e.f & Bs) !== 0) && e.nodes !== null && e.nodes.end !== null && (rs(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), n = !0), U(e, Ln), nr(e, t && !n), Kt(e, 0);
  var r = e.nodes && e.nodes.t;
  if (r !== null)
    for (const i of r)
      i.stop();
  ns(e), e.f ^= Ln, e.f |= we;
  var s = e.parent;
  s !== null && s.first !== null && ss(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function rs(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : /* @__PURE__ */ nn(e);
    e.remove(), e = n;
  }
}
function ss(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function bt(e, t, n = !0) {
  var r = [];
  is(e, r, !0);
  var s = () => {
    n && ie(e), t && t();
  }, i = r.length;
  if (i > 0) {
    var l = () => --i || s();
    for (var f of r)
      f.out(l);
  } else
    s();
}
function is(e, t, n) {
  if ((e.f & te) === 0) {
    e.f ^= te;
    var r = e.nodes && e.nodes.t;
    if (r !== null)
      for (const f of r)
        (f.is_global || n) && t.push(f);
    for (var s = e.first; s !== null; ) {
      var i = s.next;
      if ((s.f & st) === 0) {
        var l = (s.f & Ot) !== 0 || // If this is a branch effect without a block effect parent,
        // it means the parent block effect was pruned. In that case,
        // transparency information was transferred to the branch effect.
        (s.f & Ae) !== 0 && (e.f & Oe) !== 0;
        is(s, t, l ? n : !1);
      }
      s = i;
    }
  }
}
function rr(e) {
  as(e, !0);
}
function as(e, t) {
  if ((e.f & te) !== 0) {
    e.f ^= te, (e.f & $) === 0 && (U(e, Z), xt.ensure().schedule(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, s = (n.f & Ot) !== 0 || (n.f & Ae) !== 0;
      as(n, s ? t : !1), n = r;
    }
    var i = e.nodes && e.nodes.t;
    if (i !== null)
      for (const l of i)
        (l.is_global || t) && l.in();
  }
}
function sr(e, t) {
  if (e.nodes)
    for (var n = e.nodes.start, r = e.nodes.end; n !== null; ) {
      var s = n === r ? null : /* @__PURE__ */ nn(n);
      t.append(n), n = s;
    }
}
let hn = !1, it = !1;
function pr(e) {
  it = e;
}
let A = null, Se = !1;
function ke(e) {
  A = e;
}
let T = null;
function Fe(e) {
  T = e;
}
let xe = null;
function Yi(e) {
  A !== null && (xe === null ? xe = [e] : xe.push(e));
}
let se = null, le = 0, he = null;
function Gi(e) {
  he = e;
}
let os = 1, ft = 0, mt = ft;
function _r(e) {
  mt = e;
}
function ls() {
  return ++os;
}
function rn(e) {
  var t = e.f;
  if ((t & Z) !== 0)
    return !0;
  if (t & Q && (e.f &= ~wt), (t & De) !== 0) {
    for (var n = (
      /** @type {Value[]} */
      e.deps
    ), r = n.length, s = 0; s < r; s++) {
      var i = n[s];
      if (rn(
        /** @type {Derived} */
        i
      ) && Yr(
        /** @type {Derived} */
        i
      ), i.wv > e.wv)
        return !0;
    }
    (t & me) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    Te === null && U(e, $);
  }
  return !1;
}
function fs(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null && !(xe !== null && It.call(xe, e)))
    for (var s = 0; s < r.length; s++) {
      var i = r[s];
      (i.f & Q) !== 0 ? fs(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (n ? U(i, Z) : (i.f & $) !== 0 && U(i, De), Kn(
        /** @type {Effect} */
        i
      ));
    }
}
function us(e) {
  var k;
  var t = se, n = le, r = he, s = A, i = xe, l = ae, f = Se, a = mt, u = e.f;
  se = /** @type {null | Value[]} */
  null, le = 0, he = null, A = (u & (Ae | st)) === 0 ? e : null, xe = null, Dt(e.ctx), Se = !1, mt = ++ft, e.ac !== null && (Zn(() => {
    e.ac.abort(qe);
  }), e.ac = null);
  try {
    e.f |= pn;
    var c = (
      /** @type {Function} */
      e.fn
    ), g = c();
    e.f |= yt;
    var v = e.deps, p = y?.is_fork;
    if (se !== null) {
      var _;
      if (p || Kt(e, le), v !== null && le > 0)
        for (v.length = le + se.length, _ = 0; _ < se.length; _++)
          v[le + _] = se[_];
      else
        e.deps = v = se;
      if (Qn() && (e.f & me) !== 0)
        for (_ = le; _ < v.length; _++)
          ((k = v[_]).reactions ?? (k.reactions = [])).push(e);
    } else !p && v !== null && le < v.length && (Kt(e, le), v.length = le);
    if (Or() && he !== null && !Se && v !== null && (e.f & (Q | De | Z)) === 0)
      for (_ = 0; _ < /** @type {Source[]} */
      he.length; _++)
        fs(
          he[_],
          /** @type {Effect} */
          e
        );
    if (s !== null && s !== e) {
      if (ft++, s.deps !== null)
        for (let h = 0; h < n; h += 1)
          s.deps[h].rv = ft;
      if (t !== null)
        for (const h of t)
          h.rv = ft;
      he !== null && (r === null ? r = he : r.push(.../** @type {Source[]} */
      he));
    }
    return (e.f & nt) !== 0 && (e.f ^= nt), g;
  } catch (h) {
    return Fr(h);
  } finally {
    e.f ^= pn, se = t, le = n, he = r, A = s, xe = i, Dt(l), Se = f, mt = a;
  }
}
function Wi(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = js.call(n, e);
    if (r !== -1) {
      var s = n.length - 1;
      s === 0 ? n = t.reactions = null : (n[r] = n[s], n.pop());
    }
  }
  if (n === null && (t.f & Q) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (se === null || !It.call(se, t))) {
    var i = (
      /** @type {Derived} */
      t
    );
    (i.f & me) !== 0 && (i.f ^= me, i.f &= ~wt), i.v !== Y && Gn(i), Ii(i), Kt(i, 0);
  }
}
function Kt(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      Wi(e, n[r]);
}
function jt(e) {
  var t = e.f;
  if ((t & we) === 0) {
    U(e, $);
    var n = T, r = hn;
    T = e, hn = !0;
    try {
      (t & (Oe | Mr)) !== 0 ? Bi(e) : nr(e), ns(e);
      var s = us(e);
      e.teardown = typeof s == "function" ? s : null, e.wv = os;
      var i;
    } finally {
      hn = r, T = n;
    }
  }
}
async function cs() {
  await Promise.resolve(), mi();
}
function d(e) {
  var t = e.f, n = (t & Q) !== 0;
  if (A !== null && !Se) {
    var r = T !== null && (T.f & we) !== 0;
    if (!r && (xe === null || !It.call(xe, e))) {
      var s = A.deps;
      if ((A.f & pn) !== 0)
        e.rv < ft && (e.rv = ft, se === null && s !== null && s[le] === e ? le++ : se === null ? se = [e] : se.push(e));
      else {
        (A.deps ?? (A.deps = [])).push(e);
        var i = e.reactions;
        i === null ? e.reactions = [A] : It.call(i, A) || i.push(A);
      }
    }
  }
  if (it && gt.has(e))
    return gt.get(e);
  if (n) {
    var l = (
      /** @type {Derived} */
      e
    );
    if (it) {
      var f = l.v;
      return ((l.f & $) === 0 && l.reactions !== null || vs(l)) && (f = Jn(l)), gt.set(l, f), f;
    }
    var a = (l.f & me) === 0 && !Se && A !== null && (hn || (A.f & me) !== 0), u = (l.f & yt) === 0;
    rn(l) && (a && (l.f |= me), Yr(l)), a && !u && (Gr(l), ds(l));
  }
  if (Te?.has(e))
    return Te.get(e);
  if ((e.f & nt) !== 0)
    throw e.v;
  return e.v;
}
function ds(e) {
  if (e.f |= me, e.deps !== null)
    for (const t of e.deps)
      (t.reactions ?? (t.reactions = [])).push(e), (t.f & Q) !== 0 && (t.f & me) === 0 && (Gr(
        /** @type {Derived} */
        t
      ), ds(
        /** @type {Derived} */
        t
      ));
}
function vs(e) {
  if (e.v === Y) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (gt.has(t) || (t.f & Q) !== 0 && vs(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function kn(e) {
  var t = Se;
  try {
    return Se = !0, e();
  } finally {
    Se = t;
  }
}
const Ki = ["touchstart", "touchmove"];
function Ji(e) {
  return Ki.includes(e);
}
const ut = Symbol("events"), hs = /* @__PURE__ */ new Set(), Vn = /* @__PURE__ */ new Set();
function St(e, t, n) {
  (t[ut] ?? (t[ut] = {}))[e] = n;
}
function Xi(e) {
  for (var t = 0; t < e.length; t++)
    hs.add(e[t]);
  for (var n of Vn)
    n(e);
}
let gr = null;
function br(e) {
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), r = e.type, s = e.composedPath?.() || [], i = (
    /** @type {null | Element} */
    s[0] || e.target
  );
  gr = e;
  var l = 0, f = gr === e && e[ut];
  if (f) {
    var a = s.indexOf(f);
    if (a !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e[ut] = t;
      return;
    }
    var u = s.indexOf(t);
    if (u === -1)
      return;
    a <= u && (l = a);
  }
  if (i = /** @type {Element} */
  s[l] || e.target, i !== t) {
    zs(e, "currentTarget", {
      configurable: !0,
      get() {
        return i || n;
      }
    });
    var c = A, g = T;
    ke(null), Fe(null);
    try {
      for (var v, p = []; i !== null; ) {
        var _ = i.assignedSlot || i.parentNode || /** @type {any} */
        i.host || null;
        try {
          var k = i[ut]?.[r];
          k != null && (!/** @type {any} */
          i.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === i) && k.call(i, e);
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
      e[ut] = t, delete e.currentTarget, ke(c), Fe(g);
    }
  }
}
const Zi = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (e) => e
  })
);
function Qi(e) {
  return (
    /** @type {string} */
    Zi?.createHTML(e) ?? e
  );
}
function ps(e) {
  var t = Xn("template");
  return t.innerHTML = Qi(e.replaceAll("<!>", "<!---->")), t.content;
}
function zt(e, t) {
  var n = (
    /** @type {Effect} */
    T
  );
  n.nodes === null && (n.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function V(e, t) {
  var n = (t & li) !== 0, r = (t & fi) !== 0, s, i = !e.startsWith("<!>");
  return () => {
    s === void 0 && (s = ps(i ? e : "<!>" + e), n || (s = /** @type {TemplateNode} */
    /* @__PURE__ */ Le(s)));
    var l = (
      /** @type {TemplateNode} */
      r || Jr ? document.importNode(s, !0) : s.cloneNode(!0)
    );
    if (n) {
      var f = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Le(l)
      ), a = (
        /** @type {TemplateNode} */
        l.lastChild
      );
      zt(f, a);
    } else
      zt(l, l);
    return l;
  };
}
// @__NO_SIDE_EFFECTS__
function ea(e, t, n = "svg") {
  var r = !e.startsWith("<!>"), s = `<${n}>${r ? e : "<!>" + e}</${n}>`, i;
  return () => {
    if (!i) {
      var l = (
        /** @type {DocumentFragment} */
        ps(s)
      ), f = (
        /** @type {Element} */
        /* @__PURE__ */ Le(l)
      );
      i = /** @type {Element} */
      /* @__PURE__ */ Le(f);
    }
    var a = (
      /** @type {TemplateNode} */
      i.cloneNode(!0)
    );
    return zt(a, a), a;
  };
}
// @__NO_SIDE_EFFECTS__
function _s(e, t) {
  return /* @__PURE__ */ ea(e, t, "svg");
}
function mr() {
  var e = document.createDocumentFragment(), t = document.createComment(""), n = rt();
  return e.append(t, n), zt(t, n), e;
}
function R(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function Je(e, t) {
  var n = t == null ? "" : typeof t == "object" ? `${t}` : t;
  n !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = n, e.nodeValue = `${n}`);
}
function ta(e, t) {
  return na(e, t);
}
const an = /* @__PURE__ */ new Map();
function na(e, { target: t, anchor: n, props: r = {}, events: s, context: i, intro: l = !0, transformError: f }) {
  Di();
  var a = void 0, u = Vi(() => {
    var c = n ?? t.appendChild(rt());
    yi(
      /** @type {TemplateNode} */
      c,
      {
        pending: () => {
        }
      },
      (p) => {
        Ir({});
        var _ = (
          /** @type {ComponentContext} */
          ae
        );
        i && (_.c = i), s && (r.$$events = s), a = e(p, r) || {}, Lr();
      },
      f
    );
    var g = /* @__PURE__ */ new Set(), v = (p) => {
      for (var _ = 0; _ < p.length; _++) {
        var k = p[_];
        if (!g.has(k)) {
          g.add(k);
          var h = Ji(k);
          for (const C of [t, document]) {
            var S = an.get(C);
            S === void 0 && (S = /* @__PURE__ */ new Map(), an.set(C, S));
            var G = S.get(k);
            G === void 0 ? (C.addEventListener(k, br, { passive: h }), S.set(k, 1)) : S.set(k, G + 1);
          }
        }
      }
    };
    return v(wn(hs)), Vn.add(v), () => {
      for (var p of g)
        for (const h of [t, document]) {
          var _ = (
            /** @type {Map<string, number>} */
            an.get(h)
          ), k = (
            /** @type {number} */
            _.get(p)
          );
          --k == 0 ? (h.removeEventListener(p, br), _.delete(p), _.size === 0 && an.delete(h)) : _.set(p, k);
        }
      Vn.delete(v), c !== n && c.parentNode?.removeChild(c);
    };
  });
  return $n.set(a, u), a;
}
let $n = /* @__PURE__ */ new WeakMap();
function ra(e, t) {
  const n = $n.get(e);
  return n ? ($n.delete(e), n(t)) : Promise.resolve();
}
var Ee, Re, ce, pt, en, tn, mn;
class sa {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, n = !0) {
    /** @type {TemplateNode} */
    ye(this, "anchor");
    /** @type {Map<Batch, Key>} */
    x(this, Ee, /* @__PURE__ */ new Map());
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
    x(this, Re, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    x(this, ce, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    x(this, pt, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    x(this, en, !0);
    /**
     * @param {Batch} batch
     */
    x(this, tn, (t) => {
      if (o(this, Ee).has(t)) {
        var n = (
          /** @type {Key} */
          o(this, Ee).get(t)
        ), r = o(this, Re).get(n);
        if (r)
          rr(r), o(this, pt).delete(n);
        else {
          var s = o(this, ce).get(n);
          s && (o(this, Re).set(n, s.effect), o(this, ce).delete(n), s.fragment.lastChild.remove(), this.anchor.before(s.fragment), r = s.effect);
        }
        for (const [i, l] of o(this, Ee)) {
          if (o(this, Ee).delete(i), i === t)
            break;
          const f = o(this, ce).get(l);
          f && (ie(f.effect), o(this, ce).delete(l));
        }
        for (const [i, l] of o(this, Re)) {
          if (i === n || o(this, pt).has(i)) continue;
          const f = () => {
            if (Array.from(o(this, Ee).values()).includes(i)) {
              var u = document.createDocumentFragment();
              sr(l, u), u.append(rt()), o(this, ce).set(i, { effect: l, fragment: u });
            } else
              ie(l);
            o(this, pt).delete(i), o(this, Re).delete(i);
          };
          o(this, en) || !r ? (o(this, pt).add(i), bt(l, f, !1)) : f();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    x(this, mn, (t) => {
      o(this, Ee).delete(t);
      const n = Array.from(o(this, Ee).values());
      for (const [r, s] of o(this, ce))
        n.includes(r) || (ie(s.effect), o(this, ce).delete(r));
    });
    this.anchor = t, E(this, en, n);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, n) {
    var r = (
      /** @type {Batch} */
      y
    ), s = Qr();
    if (n && !o(this, Re).has(t) && !o(this, ce).has(t))
      if (s) {
        var i = document.createDocumentFragment(), l = rt();
        i.append(l), o(this, ce).set(t, {
          effect: be(() => n(l)),
          fragment: i
        });
      } else
        o(this, Re).set(
          t,
          be(() => n(this.anchor))
        );
    if (o(this, Ee).set(r, t), s) {
      for (const [f, a] of o(this, Re))
        f === t ? r.unskip_effect(a) : r.skip_effect(a);
      for (const [f, a] of o(this, ce))
        f === t ? r.unskip_effect(a.effect) : r.skip_effect(a.effect);
      r.oncommit(o(this, tn)), r.ondiscard(o(this, mn));
    } else
      o(this, tn).call(this, r);
  }
}
Ee = new WeakMap(), Re = new WeakMap(), ce = new WeakMap(), pt = new WeakMap(), en = new WeakMap(), tn = new WeakMap(), mn = new WeakMap();
function ve(e, t, n = !1) {
  var r = new sa(e), s = n ? Ot : 0;
  function i(l, f) {
    r.ensure(l, f);
  }
  tr(() => {
    var l = !1;
    t((f, a = 0) => {
      l = !0, i(a, f);
    }), l || i(-1, null);
  }, s);
}
function Cn(e, t) {
  return t;
}
function ia(e, t, n) {
  for (var r = [], s = t.length, i, l = t.length, f = 0; f < s; f++) {
    let g = t[f];
    bt(
      g,
      () => {
        if (i) {
          if (i.pending.delete(g), i.done.add(g), i.pending.size === 0) {
            var v = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            Bn(e, wn(i.done)), v.delete(i), v.size === 0 && (e.outrogroups = null);
          }
        } else
          l -= 1;
      },
      !1
    );
  }
  if (l === 0) {
    var a = r.length === 0 && n !== null;
    if (a) {
      var u = (
        /** @type {Element} */
        n
      ), c = (
        /** @type {Element} */
        u.parentNode
      );
      Fi(c), c.append(u), e.items.clear();
    }
    Bn(e, t, !a);
  } else
    i = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ?? (e.outrogroups = /* @__PURE__ */ new Set())).add(i);
}
function Bn(e, t, n = !0) {
  var r;
  if (e.pending.size > 0) {
    r = /* @__PURE__ */ new Set();
    for (const l of e.pending.values())
      for (const f of l)
        r.add(
          /** @type {EachItem} */
          e.items.get(f).e
        );
  }
  for (var s = 0; s < t.length; s++) {
    var i = t[s];
    if (r?.has(i)) {
      i.f |= Ie;
      const l = document.createDocumentFragment();
      sr(i, l);
    } else
      ie(t[s], n);
  }
}
var wr;
function Nn(e, t, n, r, s, i = null) {
  var l = e, f = /* @__PURE__ */ new Map(), a = (t & Cr) !== 0;
  if (a) {
    var u = (
      /** @type {Element} */
      e
    );
    l = u.appendChild(rt());
  }
  var c = null, g = /* @__PURE__ */ Pi(() => {
    var C = n();
    return Tr(C) ? C : C == null ? [] : wn(C);
  }), v, p = /* @__PURE__ */ new Map(), _ = !0;
  function k(C) {
    (G.effect.f & we) === 0 && (G.pending.delete(C), G.fallback = c, aa(G, v, l, t, r), c !== null && (v.length === 0 ? (c.f & Ie) === 0 ? rr(c) : (c.f ^= Ie, $t(c, null, l)) : bt(c, () => {
      c = null;
    })));
  }
  function h(C) {
    G.pending.delete(C);
  }
  var S = tr(() => {
    v = /** @type {V[]} */
    d(g);
    for (var C = v.length, W = /* @__PURE__ */ new Set(), de = (
      /** @type {Batch} */
      y
    ), je = Qr(), J = 0; J < C; J += 1) {
      var ze = v[J], We = r(ze, J), B = _ ? null : f.get(We);
      B ? (B.v && Ft(B.v, ze), B.i && Ft(B.i, J), je && de.unskip_effect(B.e)) : (B = oa(
        f,
        _ ? l : wr ?? (wr = rt()),
        ze,
        We,
        J,
        s,
        t,
        n
      ), _ || (B.e.f |= Ie), f.set(We, B)), W.add(We);
    }
    if (C === 0 && i && !c && (_ ? c = be(() => i(l)) : (c = be(() => i(wr ?? (wr = rt()))), c.f |= Ie)), C > W.size && Ks(), !_)
      if (p.set(de, W), je) {
        for (const [Ht, at] of f)
          W.has(Ht) || de.skip_effect(at.e);
        de.oncommit(k), de.ondiscard(h);
      } else
        k(de);
    d(g);
  }), G = { effect: S, items: f, pending: p, outrogroups: null, fallback: c };
  _ = !1;
}
function Vt(e) {
  for (; e !== null && (e.f & Ae) === 0; )
    e = e.next;
  return e;
}
function aa(e, t, n, r, s) {
  var i = (r & ai) !== 0, l = t.length, f = e.items, a = Vt(e.effect.first), u, c = null, g, v = [], p = [], _, k, h, S;
  if (i)
    for (S = 0; S < l; S += 1)
      _ = t[S], k = s(_, S), h = /** @type {EachItem} */
      f.get(k).e, (h.f & Ie) === 0 && (h.nodes?.a?.measure(), (g ?? (g = /* @__PURE__ */ new Set())).add(h));
  for (S = 0; S < l; S += 1) {
    if (_ = t[S], k = s(_, S), h = /** @type {EachItem} */
    f.get(k).e, e.outrogroups !== null)
      for (const B of e.outrogroups)
        B.pending.delete(h), B.done.delete(h);
    if ((h.f & te) !== 0 && (rr(h), i && (h.nodes?.a?.unfix(), (g ?? (g = /* @__PURE__ */ new Set())).delete(h))), (h.f & Ie) !== 0)
      if (h.f ^= Ie, h === a)
        $t(h, null, n);
      else {
        var G = c ? c.next : a;
        h === e.effect.last && (e.effect.last = h.prev), h.prev && (h.prev.next = h.next), h.next && (h.next.prev = h.prev), Xe(e, c, h), Xe(e, h, G), $t(h, G, n), c = h, v = [], p = [], a = Vt(c.next);
        continue;
      }
    if (h !== a) {
      if (u !== void 0 && u.has(h)) {
        if (v.length < p.length) {
          var C = p[0], W;
          c = C.prev;
          var de = v[0], je = v[v.length - 1];
          for (W = 0; W < v.length; W += 1)
            $t(v[W], C, n);
          for (W = 0; W < p.length; W += 1)
            u.delete(p[W]);
          Xe(e, de.prev, je.next), Xe(e, c, de), Xe(e, je, C), a = C, c = je, S -= 1, v = [], p = [];
        } else
          u.delete(h), $t(h, a, n), Xe(e, h.prev, h.next), Xe(e, h, c === null ? e.effect.first : c.next), Xe(e, c, h), c = h;
        continue;
      }
      for (v = [], p = []; a !== null && a !== h; )
        (u ?? (u = /* @__PURE__ */ new Set())).add(a), p.push(a), a = Vt(a.next);
      if (a === null)
        continue;
    }
    (h.f & Ie) === 0 && v.push(h), c = h, a = Vt(h.next);
  }
  if (e.outrogroups !== null) {
    for (const B of e.outrogroups)
      B.pending.size === 0 && (Bn(e, wn(B.done)), e.outrogroups?.delete(B));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (a !== null || u !== void 0) {
    var J = [];
    if (u !== void 0)
      for (h of u)
        (h.f & te) === 0 && J.push(h);
    for (; a !== null; )
      (a.f & te) === 0 && a !== e.fallback && J.push(a), a = Vt(a.next);
    var ze = J.length;
    if (ze > 0) {
      var We = (r & Cr) !== 0 && l === 0 ? n : null;
      if (i) {
        for (S = 0; S < ze; S += 1)
          J[S].nodes?.a?.measure();
        for (S = 0; S < ze; S += 1)
          J[S].nodes?.a?.fix();
      }
      ia(e, J, We);
    }
  }
  i && _t(() => {
    if (g !== void 0)
      for (h of g)
        h.nodes?.a?.apply();
  });
}
function oa(e, t, n, r, s, i, l, f) {
  var a = (l & si) !== 0 ? (l & oi) === 0 ? /* @__PURE__ */ Li(n, !1, !1) : kt(n) : null, u = (l & ii) !== 0 ? kt(s) : null;
  return {
    v: a,
    i: u,
    e: be(() => (i(t, a ?? n, u ?? s, f), () => {
      e.delete(r);
    }))
  };
}
function $t(e, t, n) {
  if (e.nodes)
    for (var r = e.nodes.start, s = e.nodes.end, i = t && (t.f & Ie) === 0 ? (
      /** @type {EffectNodes} */
      t.nodes.start
    ) : n; r !== null; ) {
      var l = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ nn(r)
      );
      if (i.before(r), r === s)
        return;
      r = l;
    }
}
function Xe(e, t, n) {
  t === null ? e.effect.first = n : t.next = n, n === null ? e.effect.last = t : n.prev = t;
}
function la(e, t, n = !1, r = !1, s = !1, i = !1) {
  var l = e, f = "";
  if (n)
    var a = (
      /** @type {Element} */
      e
    );
  Ue(() => {
    var u = (
      /** @type {Effect} */
      T
    );
    if (f !== (f = t() ?? "")) {
      if (n) {
        u.nodes = null, a.innerHTML = /** @type {string} */
        f, f !== "" && zt(
          /** @type {TemplateNode} */
          /* @__PURE__ */ Le(a),
          /** @type {TemplateNode} */
          a.lastChild
        );
        return;
      }
      if (u.nodes !== null && (rs(
        u.nodes.start,
        /** @type {TemplateNode} */
        u.nodes.end
      ), u.nodes = null), f !== "") {
        var c = r ? ui : s ? ci : void 0, g = (
          /** @type {HTMLTemplateElement | SVGElement | MathMLElement} */
          Xn(r ? "svg" : s ? "math" : "template", c)
        );
        g.innerHTML = /** @type {any} */
        f;
        var v = r || s ? g : (
          /** @type {HTMLTemplateElement} */
          g.content
        );
        if (zt(
          /** @type {TemplateNode} */
          /* @__PURE__ */ Le(v),
          /** @type {TemplateNode} */
          v.lastChild
        ), r || s)
          for (; /* @__PURE__ */ Le(v); )
            l.before(
              /** @type {TemplateNode} */
              /* @__PURE__ */ Le(v)
            );
        else
          l.before(v);
      }
    }
  });
}
function fa(e, t) {
  ts(() => {
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
      const s = Xn("style");
      s.id = t.hash, s.textContent = t.code, r.appendChild(s);
    }
  });
}
function ua(e, t, n) {
  var r = e == null ? "" : "" + e;
  return r = r ? r + " " + t : t, r === "" ? null : r;
}
function ca(e, t, n, r, s, i) {
  var l = e.__className;
  if (l !== n || l === void 0) {
    var f = ua(n, r);
    f == null ? e.removeAttribute("class") : e.className = f, e.__className = n;
  }
  return i;
}
const da = Symbol("is custom element"), va = Symbol("is html");
function ha(e, t, n, r) {
  var s = pa(e);
  s[t] !== (s[t] = n) && (n == null ? e.removeAttribute(t) : typeof n != "string" && _a(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function pa(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [da]: e.nodeName.includes("-"),
      [va]: e.namespaceURI === Nr
    })
  );
}
var xr = /* @__PURE__ */ new Map();
function _a(e) {
  var t = e.getAttribute("is") || e.nodeName, n = xr.get(t);
  if (n) return n;
  xr.set(t, n = []);
  for (var r, s = e, i = Element.prototype; i !== s; ) {
    r = Us(s);
    for (var l in r)
      r[l].set && n.push(l);
    s = Sr(s);
  }
  return n;
}
function ga(e, t, n = t) {
  var r = /* @__PURE__ */ new WeakSet();
  zi(e, "input", async (s) => {
    var i = s ? e.defaultValue : e.value;
    if (i = Pn(e) ? Rn(i) : i, n(i), y !== null && r.add(y), await cs(), i !== (i = t())) {
      var l = e.selectionStart, f = e.selectionEnd, a = e.value.length;
      if (e.value = i ?? "", f !== null) {
        var u = e.value.length;
        l === f && f === a && u > a ? (e.selectionStart = u, e.selectionEnd = u) : (e.selectionStart = l, e.selectionEnd = Math.min(f, u));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  kn(t) == null && e.value && (n(Pn(e) ? Rn(e.value) : e.value), y !== null && r.add(y)), er(() => {
    var s = t();
    if (e === document.activeElement) {
      var i = (
        /** @type {Batch} */
        y
      );
      if (r.has(i))
        return;
    }
    Pn(e) && s === Rn(e.value) || e.type === "date" && !s && !e.value || s !== e.value && (e.value = s ?? "");
  });
}
function Pn(e) {
  var t = e.type;
  return t === "number" || t === "range";
}
function Rn(e) {
  return e === "" ? null : +e;
}
function kr(e, t) {
  return e === t || e?.[on] === t;
}
function yr(e = {}, t, n, r) {
  var s = (
    /** @type {ComponentContext} */
    ae.r
  ), i = (
    /** @type {Effect} */
    T
  );
  return ts(() => {
    var l, f;
    return er(() => {
      l = f, f = [], kn(() => {
        e !== n(...f) && (t(e, ...f), l && kr(n(...l), e) && t(null, ...l));
      });
    }), () => {
      let a = i;
      for (; a !== s && a.parent !== null && a.parent.f & Ln; )
        a = a.parent;
      const u = () => {
        f && kr(n(...f), e) && t(null, ...f);
      }, c = a.teardown;
      a.teardown = () => {
        u(), c?.();
      };
    };
  }), e;
}
function ba(e) {
  ae === null && Gs(), qn(() => {
    const t = kn(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
const ma = "5";
var Er;
typeof window < "u" && ((Er = window.__svelte ?? (window.__svelte = {})).v ?? (Er.v = /* @__PURE__ */ new Set())).add(ma);
var wa = /* @__PURE__ */ V('<button><span class="text-lg svelte-beco3k"> </span> <span class="text-sm font-medium svelte-beco3k"> </span></button>'), xa = /* @__PURE__ */ V('<div class="assistant-selector svelte-beco3k"></div>'), ka = /* @__PURE__ */ V('<span class="svelte-beco3k"> </span>'), ya = /* @__PURE__ */ V('<span class="svelte-beco3k">🏛</span>'), Ea = /* @__PURE__ */ V(`<p class="svelte-beco3k">Welcome back! I'm your AI assistant. Ask me anything about this realm — governance, proposals, codices, or general questions.</p>`), Ta = /* @__PURE__ */ V(`<p class="svelte-beco3k">Hello! I'm the realm's AI assistant. Feel free to ask me about this realm, its governance structure, or anything you'd like to know.</p>`), Sa = /* @__PURE__ */ V('<div class="welcome-message svelte-beco3k"><div class="avatar svelte-beco3k"><!></div> <div class="bubble assistant-bubble svelte-beco3k"><!></div></div>'), Aa = /* @__PURE__ */ V('<div class="message-row user-row svelte-beco3k"><div class="bubble user-bubble svelte-beco3k"> </div></div>'), Ma = /* @__PURE__ */ V('<span class="svelte-beco3k"> </span>'), Ca = /* @__PURE__ */ V('<span class="svelte-beco3k">🏛</span>'), Na = /* @__PURE__ */ V('<div class="message-row assistant-row svelte-beco3k"><div class="avatar small svelte-beco3k"><!></div> <div class="bubble assistant-bubble markdown-content svelte-beco3k"></div></div>'), Pa = /* @__PURE__ */ V('<span class="svelte-beco3k"> </span>'), Ra = /* @__PURE__ */ V('<span class="svelte-beco3k">🏛</span>'), Ia = /* @__PURE__ */ V('<div class="message-row assistant-row svelte-beco3k"><div class="avatar small svelte-beco3k"><!></div> <div class="bubble assistant-bubble svelte-beco3k"><div class="typing-animation svelte-beco3k"><span class="svelte-beco3k"></span> <span class="svelte-beco3k"></span> <span class="svelte-beco3k"></span></div></div></div>'), La = /* @__PURE__ */ V('<div class="error-banner svelte-beco3k"><span class="svelte-beco3k"> </span> <button class="error-dismiss svelte-beco3k" title="Dismiss">&times;</button></div>'), Oa = /* @__PURE__ */ V("<!> <!> <!>", 1), Da = /* @__PURE__ */ V('<span class="suggestion-loading svelte-beco3k">Loading suggestions...</span>'), Fa = /* @__PURE__ */ V('<button class="suggestion-chip svelte-beco3k"> </button>'), ja = /* @__PURE__ */ V('<div class="suggestions svelte-beco3k"><!></div>'), za = /* @__PURE__ */ _s('<svg class="animate-spin h-5 w-5 svelte-beco3k" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25 svelte-beco3k" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75 svelte-beco3k" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path></svg>'), Ua = /* @__PURE__ */ _s('<svg class="h-5 w-5 svelte-beco3k" fill="currentColor" viewBox="0 0 20 20"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" class="svelte-beco3k"></path></svg>'), Ha = /* @__PURE__ */ V('<div class="llm-chat-root svelte-beco3k"><!> <div class="messages-area svelte-beco3k"><!></div> <div class="input-section svelte-beco3k"><!> <div class="input-row svelte-beco3k"><textarea class="chat-input svelte-beco3k" placeholder="Type a message..." rows="1"></textarea> <button class="send-btn svelte-beco3k" title="Send message (Enter)"><!></button></div></div></div>');
const qa = {
  hash: "svelte-beco3k",
  code: `.llm-chat-root.svelte-beco3k {display:flex;flex-direction:column;height:calc(100vh - 240px);min-height:300px;overflow:hidden;border-radius:12px;border:1px solid #e5e7eb;background:#ffffff;}

	/* Assistant selector */.assistant-selector.svelte-beco3k {display:flex;gap:8px;padding:10px 16px;border-bottom:1px solid #e5e7eb;flex-shrink:0;overflow-x:auto;}.assistant-btn.svelte-beco3k {display:flex;align-items:center;gap:6px;padding:6px 12px;border-radius:8px;border:1px solid #e5e7eb;background:#fff;cursor:pointer;transition:all 0.15s ease;white-space:nowrap;}.assistant-btn.svelte-beco3k:hover {background:#f3f4f6;border-color:#d1d5db;}.assistant-btn.active.svelte-beco3k {border-color:#6366f1;background:#eef2ff;color:#4338ca;}

	/* Messages area */.messages-area.svelte-beco3k {flex:1;min-height:0;overflow-y:auto;padding:20px 16px;background:#f9fafb;display:flex;flex-direction:column;gap:16px;}

	/* Welcome message */.welcome-message.svelte-beco3k {display:flex;align-items:flex-start;gap:12px;margin-top:20px;}

	/* Message rows */.message-row.svelte-beco3k {display:flex;gap:10px;max-width:100%;}.user-row.svelte-beco3k {justify-content:flex-end;}.assistant-row.svelte-beco3k {justify-content:flex-start;align-items:flex-start;}

	/* Avatar */.avatar.svelte-beco3k {flex-shrink:0;width:40px;height:40px;border-radius:50%;background:#fff;border:2px solid #e5e7eb;display:flex;align-items:center;justify-content:center;font-size:20px;box-shadow:0 1px 3px rgba(0, 0, 0, 0.08);}.avatar.small.svelte-beco3k {width:32px;height:32px;font-size:16px;}

	/* Bubbles */.bubble.svelte-beco3k {padding:12px 16px;border-radius:16px;line-height:1.5;font-size:14px;max-width:80%;word-wrap:break-word;overflow-wrap:break-word;}.user-bubble.svelte-beco3k {background:#4f46e5;color:#fff;border-bottom-right-radius:4px;box-shadow:0 1px 3px rgba(79, 70, 229, 0.3);white-space:pre-wrap;}.assistant-bubble.svelte-beco3k {background:#fff;color:#1f2937;border:1px solid #e5e7eb;border-bottom-left-radius:4px;box-shadow:0 1px 2px rgba(0, 0, 0, 0.05);}

	/* Markdown content inside assistant bubbles */.markdown-content.svelte-beco3k h1,
	.markdown-content.svelte-beco3k h2,
	.markdown-content.svelte-beco3k h3 {margin-top:12px;margin-bottom:4px;font-weight:600;}.markdown-content.svelte-beco3k h1 {font-size:1.125rem;}.markdown-content.svelte-beco3k h2 {font-size:1rem;}.markdown-content.svelte-beco3k h3 {font-size:0.9375rem;}.markdown-content.svelte-beco3k li {margin-left:16px;margin-bottom:2px;}.markdown-content.svelte-beco3k pre {margin:8px 0;border-radius:6px;}.markdown-content.svelte-beco3k strong {font-weight:600;}.markdown-content.svelte-beco3k a {color:#4f46e5;text-decoration:underline;}

	/* Error banner */.error-banner.svelte-beco3k {display:flex;align-items:center;justify-content:space-between;gap:8px;padding:8px 14px;border-radius:8px;background:#fef2f2;border:1px solid #fecaca;color:#991b1b;font-size:13px;}.error-dismiss.svelte-beco3k {background:none;border:none;font-size:18px;cursor:pointer;color:#991b1b;padding:0 4px;line-height:1;opacity:0.7;}.error-dismiss.svelte-beco3k:hover {opacity:1;}

	/* Typing animation */.typing-animation.svelte-beco3k {display:flex;align-items:center;gap:4px;padding:4px 0;}.typing-animation.svelte-beco3k span:where(.svelte-beco3k) {width:7px;height:7px;background-color:#9ca3af;border-radius:50%;
		animation: svelte-beco3k-typing 1.4s infinite ease-in-out;}.typing-animation.svelte-beco3k span:where(.svelte-beco3k):nth-child(1) {animation-delay:0s;}.typing-animation.svelte-beco3k span:where(.svelte-beco3k):nth-child(2) {animation-delay:0.2s;}.typing-animation.svelte-beco3k span:where(.svelte-beco3k):nth-child(3) {animation-delay:0.4s;}

	@keyframes svelte-beco3k-typing {
		0%, 60%, 100% {
			transform: translateY(0);
			opacity: 0.4;
		}
		30% {
			transform: translateY(-6px);
			opacity: 1;
		}
	}

	/* Input section */.input-section.svelte-beco3k {flex-shrink:0;padding:12px 16px;border-top:1px solid #e5e7eb;background:#fff;}.suggestions.svelte-beco3k {display:flex;flex-wrap:wrap;gap:6px;margin-bottom:10px;justify-content:center;}.suggestion-loading.svelte-beco3k {font-size:12px;color:#9ca3af;}.suggestion-chip.svelte-beco3k {padding:5px 12px;font-size:12px;border-radius:16px;border:1px solid #e5e7eb;background:#f9fafb;color:#4b5563;cursor:pointer;transition:all 0.15s ease;white-space:nowrap;}.suggestion-chip.svelte-beco3k:hover {background:#eef2ff;border-color:#c7d2fe;color:#4338ca;}.input-row.svelte-beco3k {display:flex;gap:8px;align-items:flex-end;}.chat-input.svelte-beco3k {flex:1;resize:none;padding:10px 14px;border-radius:12px;border:1px solid #d1d5db;font-size:14px;line-height:1.4;min-height:42px;max-height:120px;overflow-y:auto;transition:border-color 0.15s ease, box-shadow 0.15s ease;outline:none;}.chat-input.svelte-beco3k:focus {border-color:#6366f1;box-shadow:0 0 0 3px rgba(99, 102, 241, 0.1);}.chat-input.svelte-beco3k::placeholder {color:#9ca3af;}.send-btn.svelte-beco3k {display:flex;align-items:center;justify-content:center;width:42px;height:42px;border-radius:12px;border:none;background:#4f46e5;color:#fff;cursor:pointer;transition:background 0.15s ease, opacity 0.15s ease;flex-shrink:0;}.send-btn.svelte-beco3k:hover:not(:disabled) {background:#4338ca;}.send-btn.svelte-beco3k:disabled {opacity:0.4;cursor:not-allowed;}`
};
function Va(e, t) {
  Ir(t, !0), fa(e, qa);
  let n = /* @__PURE__ */ F(tt([])), r = /* @__PURE__ */ F(""), s = /* @__PURE__ */ F(!1), i = /* @__PURE__ */ F(""), l = /* @__PURE__ */ F(void 0), f = /* @__PURE__ */ F(tt([])), a = /* @__PURE__ */ F(!1), u = /* @__PURE__ */ F(void 0), c = /* @__PURE__ */ F(tt([])), g = /* @__PURE__ */ F(null), v = /* @__PURE__ */ F(!1), p = /* @__PURE__ */ F(null), _ = /* @__PURE__ */ F(!1);
  const k = "https://geister-api.realmsgos.dev/";
  let h = `${k}api/ask`, S = `${k}suggestions`, G = `${k}api/personas/assistants`, C = "", W = "", de, je, J = /* @__PURE__ */ F(!1);
  ba(async () => {
    C = t.ctx.config?.canisterId || "", de = t.ctx.principal?.subscribe?.((b) => {
      W = b || "";
    }), je = t.ctx.isAuthenticated?.subscribe?.((b) => {
      m(J, b, !0);
    }), ze(), await B(), d(_) || await Ht();
  });
  function ze() {
    try {
      const b = new URLSearchParams(window.location.search), w = b.get("explain");
      if (!w) return;
      const [H, L] = w.split(":");
      if (H === "codex" && L)
        m(_, !0), t.ctx.backend.extension_sync_call("codex_viewer", "get_codex_details", JSON.stringify({ codex_id: L })).then((O) => {
          if (O.success) {
            const K = (typeof O.response == "string" ? JSON.parse(O.response) : O.response).codex?.name || `codex_${L}`, z = `/extensions/codex_viewer/${L}`;
            m(p, L, !0), m(r, `Please explain this codex: [${K}](${z})`), setTimeout(() => at(), 300);
          }
        }).catch((O) => {
          console.error("Failed to fetch codex for explanation:", O), m(_, !1);
        });
      else if (H === "financial_statements") {
        m(_, !0);
        const O = b.get("context") || "";
        m(r, `Please explain the following financial statements of this realm in plain language. Highlight key insights, any concerns, and the overall financial health:

${O}`), setTimeout(() => at(), 300);
      }
    } catch (b) {
      console.error("Error handling explain param:", b);
    }
  }
  qn(() => {
    d(n), cs().then(We);
  });
  function We() {
    d(l) && (d(l).scrollTop = d(l).scrollHeight);
  }
  async function B() {
    if (!d(v)) {
      m(v, !0);
      try {
        const b = await fetch(G, {
          method: "GET",
          headers: { "Content-Type": "application/json" }
        });
        if (!b.ok) throw new Error(`HTTP ${b.status}`);
        const w = await b.json();
        w.assistants && Array.isArray(w.assistants) && (m(c, w.assistants, !0), d(c).length > 0 && !d(g) && m(g, d(c)[0], !0));
      } catch (b) {
        console.error("Error fetching assistants:", b);
      } finally {
        m(v, !1);
      }
    }
  }
  async function Ht() {
    if (!d(a)) {
      m(a, !0);
      try {
        const b = new URLSearchParams({
          user_principal: W || "",
          realm_principal: C || "",
          persona: d(g)?.id || "ashoka"
        }), w = await fetch(`${S}?${b.toString()}`, {
          method: "GET",
          headers: { "Content-Type": "application/json" }
        });
        if (!w.ok) throw new Error(`HTTP ${w.status}`);
        const H = await w.json();
        H.suggestions && Array.isArray(H.suggestions) && m(f, H.suggestions, !0);
      } catch (b) {
        console.error("Error fetching suggestions:", b);
      } finally {
        m(a, !1);
      }
    }
  }
  async function at() {
    if (!d(r).trim()) return;
    m(i, ""), m(
      n,
      [
        ...d(n),
        { text: d(r), isUser: !0 }
      ],
      !0
    );
    const b = d(r);
    m(r, ""), m(s, !0);
    try {
      const w = {
        question: b,
        realm_principal: C,
        user_principal: W,
        stream: !0,
        persona: d(g)?.id || "ashoka"
      };
      d(p) && (w.explain_codex_id = d(p), m(p, null));
      const H = await fetch(h, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "text/event-stream"
        },
        body: JSON.stringify(w)
      });
      if (!H.ok) throw new Error(`HTTP error! Status: ${H.status}`);
      const L = H.body?.getReader();
      if (!L) throw new Error("Response body is not readable");
      const O = new TextDecoder();
      let I = "";
      try {
        for (; ; ) {
          const { done: K, value: z } = await L.read();
          if (K) break;
          const ne = O.decode(z, { stream: !0 }).split(`
`);
          for (const M of ne)
            if (M.startsWith("data: ")) {
              const D = M.slice(6);
              if (D === "[DONE]") continue;
              try {
                const Ke = JSON.parse(D);
                Ke.text && (I += Ke.text);
              } catch {
                I += D;
              }
            } else M.trim() && !M.startsWith(":") && (I += M);
          I && (d(n).length === 0 || d(n)[d(n).length - 1].isUser) ? m(n, [...d(n), { text: I, isUser: !1 }], !0) : I && m(n, d(n).map((M, D) => D === d(n).length - 1 && !M.isUser ? { ...M, text: I } : M), !0);
        }
      } finally {
        L.releaseLock();
      }
      I.trim() || (d(n).length > 0 && !d(n)[d(n).length - 1].isUser ? m(n, d(n).map((K, z) => z === d(n).length - 1 ? { ...K, text: "No response from LLM" } : K), !0) : m(
        n,
        [
          ...d(n),
          { text: "No response from LLM", isUser: !1 }
        ],
        !0
      )), m(s, !1), await Ht();
    } catch (w) {
      console.error("Error calling LLM:", w), w instanceof TypeError || w instanceof Error && w.message.includes("fetch") ? m(i, "Connection error. Please check your network and try again.") : w instanceof Error && w.message.includes("HTTP error") ? m(i, "Server error. Please try again later.") : m(i, "Failed to get a response. Please try again."), d(n).length > 0 && !d(n)[d(n).length - 1].isUser && m(n, d(n).slice(0, -1), !0);
    } finally {
      m(s, !1);
    }
  }
  function gs() {
    m(i, "");
  }
  function bs(b) {
    let w = b.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    return w = w.replace(/```([^`]*?)```/gs, '<pre class="bg-gray-100 dark:bg-gray-900 rounded-md p-3 my-2 overflow-x-auto text-xs font-mono"><code>$1</code></pre>').replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/\*(.+?)\*/g, "<em>$1</em>").replace(/`(.+?)`/g, '<code class="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-xs font-mono">$1</code>').replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" class="text-indigo-600 dark:text-indigo-400 underline hover:text-indigo-800">$1</a>').replace(/^### (.+)$/gm, '<h3 class="text-base font-semibold mt-3 mb-1">$1</h3>').replace(/^## (.+)$/gm, '<h2 class="text-lg font-semibold mt-3 mb-1">$1</h2>').replace(/^# (.+)$/gm, '<h1 class="text-xl font-bold mt-3 mb-1">$1</h1>').replace(/^- (.+)$/gm, '<li class="ml-4 list-disc">$1</li>').replace(/^(\d+)\. (.+)$/gm, '<li class="ml-4 list-decimal">$2</li>').replace(/\n{2,}/g, "<br/><br/>").replace(/\n/g, "<br/>"), w;
  }
  function ir() {
    if (d(u)) {
      d(u).style.height = "auto";
      const b = Math.max(40, Math.min(d(u).scrollHeight, 120));
      d(u).style.height = b + "px";
    }
  }
  function ms(b) {
    b.key === "Enter" && !b.shiftKey && (b.preventDefault(), at()), setTimeout(ir, 0);
  }
  function ws(b) {
    m(r, b, !0), at();
  }
  function xs(b) {
    m(g, b, !0), m(n, [], !0), Ht();
  }
  qn(() => () => {
    de?.(), je?.();
  });
  var ar = Ha(), or = P(ar);
  {
    var ks = (b) => {
      var w = xa();
      Nn(w, 21, () => d(c), Cn, (H, L) => {
        var O = wa(), I = P(O), K = P(I), z = Ce(I, 2), X = P(z);
        Ue(() => {
          ca(O, 1, `assistant-btn ${d(g)?.id === d(L).id ? "active" : ""}`, "svelte-beco3k"), ha(O, "title", d(L).description), Je(K, d(L).emoji), Je(X, d(L).name);
        }), St("click", O, () => xs(d(L))), R(H, O);
      }), R(b, w);
    };
    ve(or, (b) => {
      d(c).length > 1 && b(ks);
    });
  }
  var yn = Ce(or, 2), ys = P(yn);
  {
    var Es = (b) => {
      var w = Sa(), H = P(w), L = P(H);
      {
        var O = (M) => {
          var D = ka(), Ke = P(D);
          Ue(() => Je(Ke, d(g).emoji)), R(M, D);
        }, I = (M) => {
          var D = ya();
          R(M, D);
        };
        ve(L, (M) => {
          d(g) ? M(O) : M(I, -1);
        });
      }
      var K = Ce(H, 2), z = P(K);
      {
        var X = (M) => {
          var D = Ea();
          R(M, D);
        }, ne = (M) => {
          var D = Ta();
          R(M, D);
        };
        ve(z, (M) => {
          d(J) ? M(X) : M(ne, -1);
        });
      }
      R(b, w);
    }, Ts = (b) => {
      var w = Oa(), H = Mn(w);
      Nn(H, 17, () => d(n), Cn, (z, X) => {
        var ne = mr(), M = Mn(ne);
        {
          var D = (oe) => {
            var Me = Aa(), Et = P(Me), Tn = P(Et);
            Ue(() => Je(Tn, d(X).text)), R(oe, Me);
          }, Ke = (oe) => {
            var Me = Na(), Et = P(Me), Tn = P(Et);
            {
              var Rs = (Tt) => {
                var sn = Ma(), Os = P(sn);
                Ue(() => Je(Os, d(g).emoji)), R(Tt, sn);
              }, Is = (Tt) => {
                var sn = Ca();
                R(Tt, sn);
              };
              ve(Tn, (Tt) => {
                d(g) ? Tt(Rs) : Tt(Is, -1);
              });
            }
            var Ls = Ce(Et, 2);
            la(Ls, () => bs(d(X).text), !0), R(oe, Me);
          };
          ve(M, (oe) => {
            d(X).isUser ? oe(D) : oe(Ke, -1);
          });
        }
        R(z, ne);
      });
      var L = Ce(H, 2);
      {
        var O = (z) => {
          var X = Ia(), ne = P(X), M = P(ne);
          {
            var D = (oe) => {
              var Me = Pa(), Et = P(Me);
              Ue(() => Je(Et, d(g).emoji)), R(oe, Me);
            }, Ke = (oe) => {
              var Me = Ra();
              R(oe, Me);
            };
            ve(M, (oe) => {
              d(g) ? oe(D) : oe(Ke, -1);
            });
          }
          R(z, X);
        };
        ve(L, (z) => {
          d(s) && z(O);
        });
      }
      var I = Ce(L, 2);
      {
        var K = (z) => {
          var X = La(), ne = P(X), M = P(ne), D = Ce(ne, 2);
          Ue(() => Je(M, d(i))), St("click", D, gs), R(z, X);
        };
        ve(I, (z) => {
          d(i) && z(K);
        });
      }
      R(b, w);
    };
    ve(ys, (b) => {
      d(n).length === 0 && !d(_) ? b(Es) : b(Ts, -1);
    });
  }
  yr(yn, (b) => m(l, b), () => d(l));
  var Ss = Ce(yn, 2), lr = P(Ss);
  {
    var As = (b) => {
      var w = ja(), H = P(w);
      {
        var L = (I) => {
          var K = Da();
          R(I, K);
        }, O = (I) => {
          var K = mr(), z = Mn(K);
          Nn(z, 17, () => d(f), Cn, (X, ne) => {
            var M = Fa(), D = P(M);
            Ue(() => Je(D, d(ne))), St("click", M, () => ws(d(ne))), R(X, M);
          }), R(I, K);
        };
        ve(H, (I) => {
          d(a) ? I(L) : I(O, -1);
        });
      }
      R(b, w);
    };
    ve(lr, (b) => {
      (d(f).length > 0 || d(a)) && b(As);
    });
  }
  var Ms = Ce(lr, 2), qt = P(Ms);
  yr(qt, (b) => m(u, b), () => d(u));
  var En = Ce(qt, 2), Cs = P(En);
  {
    var Ns = (b) => {
      var w = za();
      R(b, w);
    }, Ps = (b) => {
      var w = Ua();
      R(b, w);
    };
    ve(Cs, (b) => {
      d(s) ? b(Ns) : b(Ps, -1);
    });
  }
  Ue((b) => En.disabled = b, [() => d(s) || !d(r).trim()]), St("keydown", qt, ms), St("input", qt, () => ir()), ga(qt, () => d(r), (b) => m(r, b)), St("click", En, () => at()), R(e, ar), Lr();
}
Xi(["click", "keydown", "input"]);
function Ya(e, t) {
  const n = ta(Va, { target: e, props: { ctx: t } });
  return {
    unmount() {
      try {
        ra(n);
      } catch {
      }
    }
  };
}
export {
  Ya as default
};
