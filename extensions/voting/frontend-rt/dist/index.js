var Ji = Object.defineProperty;
var Cs = (e) => {
  throw TypeError(e);
};
var $i = (e, t, r) => t in e ? Ji(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var Ie = (e, t, r) => $i(e, typeof t != "symbol" ? t + "" : t, r), In = (e, t, r) => t.has(e) || Cs("Cannot " + r);
var l = (e, t, r) => (In(e, t, "read from private field"), r ? r.call(e) : t.get(e)), M = (e, t, r) => t.has(e) ? Cs("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), P = (e, t, r, n) => (In(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r), V = (e, t, r) => (In(e, t, "access private method"), r);
var zs = Array.isArray, Xi = Array.prototype.indexOf, Cr = Array.prototype.includes, kn = Array.from, Zi = Object.defineProperty, Ur = Object.getOwnPropertyDescriptor, Qi = Object.getOwnPropertyDescriptors, ea = Object.prototype, ta = Array.prototype, Vs = Object.getPrototypeOf, Ms = Object.isExtensible;
const ra = () => {
};
function na(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function Us() {
  var e, t, r = new Promise((n, s) => {
    e = n, t = s;
  });
  return { promise: r, resolve: e, reject: t };
}
const ue = 2, Yr = 4, En = 8, qs = 1 << 24, $e = 16, qe = 32, Nt = 64, Wn = 128, Ne = 512, te = 1024, le = 2048, Xe = 4096, ce = 8192, Pe = 16384, or = 32768, Ss = 1 << 25, Mr = 65536, Gn = 1 << 17, sa = 1 << 18, Nr = 1 << 19, ia = 1 << 20, Je = 1 << 25, sr = 65536, gn = 1 << 21, Wr = 1 << 22, At = 1 << 23, zn = Symbol("$state"), aa = Symbol(""), at = new class extends Error {
  constructor() {
    super(...arguments);
    Ie(this, "name", "StaleReactionError");
    Ie(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
function oa(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function la() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function ua(e, t, r) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function fa(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function da() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function ca(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function va() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function ha() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function pa() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function _a() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function ga() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
const ba = 1, xa = 2, Hs = 4, ma = 8, ya = 16, Ys = 1, wa = 2, se = Symbol(), Ws = "http://www.w3.org/1999/xhtml";
function ka() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function Ea() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function Gs(e) {
  return e === this.v;
}
function Ca(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Ks(e) {
  return !Ca(e, this.v);
}
let Ee = null;
function Sr(e) {
  Ee = e;
}
function Js(e, t = !1, r) {
  Ee = {
    p: Ee,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    r: (
      /** @type {Effect} */
      L
    ),
    l: null
  };
}
function $s(e) {
  var t = (
    /** @type {ComponentContext} */
    Ee
  ), r = t.e;
  if (r !== null) {
    t.e = null;
    for (var n of r)
      gi(n);
  }
  return t.i = !0, Ee = t.p, /** @type {T} */
  {};
}
function Xs() {
  return !0;
}
let Yt = [];
function Zs() {
  var e = Yt;
  Yt = [], na(e);
}
function Tt(e) {
  if (Yt.length === 0 && !qr) {
    var t = Yt;
    queueMicrotask(() => {
      t === Yt && Zs();
    });
  }
  Yt.push(e);
}
function Ma() {
  for (; Yt.length > 0; )
    Zs();
}
function Qs(e) {
  var t = L;
  if (t === null)
    return j.f |= At, e;
  if ((t.f & or) === 0 && (t.f & Yr) === 0)
    throw e;
  St(e, t);
}
function St(e, t) {
  for (; t !== null; ) {
    if ((t.f & Wn) !== 0) {
      if ((t.f & or) === 0)
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
const Sa = -7169;
function J(e, t) {
  e.f = e.f & Sa | t;
}
function is(e) {
  (e.f & Ne) !== 0 || e.deps === null ? J(e, te) : J(e, Xe);
}
function ei(e) {
  if (e !== null)
    for (const t of e)
      (t.f & ue) === 0 || (t.f & sr) === 0 || (t.f ^= sr, ei(
        /** @type {Derived} */
        t.deps
      ));
}
function ti(e, t, r) {
  (e.f & le) !== 0 ? t.add(e) : (e.f & Xe) !== 0 && r.add(e), ei(e.deps), J(e, te);
}
const Ht = /* @__PURE__ */ new Set();
let T = null, Ve = null, Kn = null, qr = !1, Vn = !1, xr = null, fn = null;
var As = 0;
let Aa = 1;
var mr, yr, Jt, ot, We, Kr, ye, Jr, Ct, lt, Ge, wr, kr, $t, Q, dn, ri, cn, Jn, vn, Ta;
const mn = class mn {
  constructor() {
    M(this, Q);
    Ie(this, "id", Aa++);
    /**
     * The current values of any signals that are updated in this batch.
     * Tuple format: [value, is_derived] (note: is_derived is false for deriveds, too, if they were overridden via assignment)
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Value, [any, boolean]>}
     */
    Ie(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any signals (sources and deriveds) that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Value, any>}
     */
    Ie(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<(batch: Batch) => void>}
     */
    M(this, mr, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    M(this, yr, /* @__PURE__ */ new Set());
    /**
     * Callbacks that should run only when a fork is committed.
     * @type {Set<(batch: Batch) => void>}
     */
    M(this, Jt, /* @__PURE__ */ new Set());
    /**
     * Async effects that are currently in flight
     * @type {Map<Effect, number>}
     */
    M(this, ot, /* @__PURE__ */ new Map());
    /**
     * Async effects that are currently in flight, _not_ inside a pending boundary
     * @type {Map<Effect, number>}
     */
    M(this, We, /* @__PURE__ */ new Map());
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    M(this, Kr, null);
    /**
     * The root effects that need to be flushed
     * @type {Effect[]}
     */
    M(this, ye, []);
    /**
     * Effects created while this batch was active.
     * @type {Effect[]}
     */
    M(this, Jr, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    M(this, Ct, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    M(this, lt, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    M(this, Ge, /* @__PURE__ */ new Map());
    /**
     * Inverse of #skipped_branches which we need to tell prior batches to unskip them when committing
     * @type {Set<Effect>}
     */
    M(this, wr, /* @__PURE__ */ new Set());
    Ie(this, "is_fork", !1);
    M(this, kr, !1);
    /** @type {Set<Batch>} */
    M(this, $t, /* @__PURE__ */ new Set());
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(t) {
    l(this, Ge).has(t) || l(this, Ge).set(t, { d: [], m: [] }), l(this, wr).delete(t);
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   * @param {(e: Effect) => void} callback
   */
  unskip_effect(t, r = (n) => this.schedule(n)) {
    var n = l(this, Ge).get(t);
    if (n) {
      l(this, Ge).delete(t);
      for (var s of n.d)
        J(s, le), r(s);
      for (s of n.m)
        J(s, Xe), r(s);
    }
    l(this, wr).add(t);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Value} source
   * @param {any} value
   * @param {boolean} [is_derived]
   */
  capture(t, r, n = !1) {
    t.v !== se && !this.previous.has(t) && this.previous.set(t, t.v), (t.f & At) === 0 && (this.current.set(t, [r, n]), Ve?.set(t, r)), this.is_fork || (t.v = r);
  }
  activate() {
    T = this;
  }
  deactivate() {
    T = null, Ve = null;
  }
  flush() {
    try {
      Vn = !0, T = this, V(this, Q, cn).call(this);
    } finally {
      As = 0, Kn = null, xr = null, fn = null, Vn = !1, T = null, Ve = null, er.clear();
    }
  }
  discard() {
    for (const t of l(this, yr)) t(this);
    l(this, yr).clear(), l(this, Jt).clear(), Ht.delete(this);
  }
  /**
   * @param {Effect} effect
   */
  register_created_effect(t) {
    l(this, Jr).push(t);
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  increment(t, r) {
    let n = l(this, ot).get(r) ?? 0;
    if (l(this, ot).set(r, n + 1), t) {
      let s = l(this, We).get(r) ?? 0;
      l(this, We).set(r, s + 1);
    }
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   * @param {boolean} skip - whether to skip updates (because this is triggered by a stale reaction)
   */
  decrement(t, r, n) {
    let s = l(this, ot).get(r) ?? 0;
    if (s === 1 ? l(this, ot).delete(r) : l(this, ot).set(r, s - 1), t) {
      let i = l(this, We).get(r) ?? 0;
      i === 1 ? l(this, We).delete(r) : l(this, We).set(r, i - 1);
    }
    l(this, kr) || n || (P(this, kr, !0), Tt(() => {
      P(this, kr, !1), this.flush();
    }));
  }
  /**
   * @param {Set<Effect>} dirty_effects
   * @param {Set<Effect>} maybe_dirty_effects
   */
  transfer_effects(t, r) {
    for (const n of t)
      l(this, Ct).add(n);
    for (const n of r)
      l(this, lt).add(n);
    t.clear(), r.clear();
  }
  /** @param {(batch: Batch) => void} fn */
  oncommit(t) {
    l(this, mr).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    l(this, yr).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  on_fork_commit(t) {
    l(this, Jt).add(t);
  }
  run_fork_commit_callbacks() {
    for (const t of l(this, Jt)) t(this);
    l(this, Jt).clear();
  }
  settled() {
    return (l(this, Kr) ?? P(this, Kr, Us())).promise;
  }
  static ensure() {
    if (T === null) {
      const t = T = new mn();
      Vn || (Ht.add(T), qr || Tt(() => {
        T === t && t.flush();
      }));
    }
    return T;
  }
  apply() {
    {
      Ve = null;
      return;
    }
  }
  /**
   *
   * @param {Effect} effect
   */
  schedule(t) {
    if (Kn = t, t.b?.is_pending && (t.f & (Yr | En | qs)) !== 0 && (t.f & or) === 0) {
      t.b.defer_effect(t);
      return;
    }
    for (var r = t; r.parent !== null; ) {
      r = r.parent;
      var n = r.f;
      if (xr !== null && r === L && (j === null || (j.f & ue) === 0))
        return;
      if ((n & (Nt | qe)) !== 0) {
        if ((n & te) === 0)
          return;
        r.f ^= te;
      }
    }
    l(this, ye).push(r);
  }
};
mr = new WeakMap(), yr = new WeakMap(), Jt = new WeakMap(), ot = new WeakMap(), We = new WeakMap(), Kr = new WeakMap(), ye = new WeakMap(), Jr = new WeakMap(), Ct = new WeakMap(), lt = new WeakMap(), Ge = new WeakMap(), wr = new WeakMap(), kr = new WeakMap(), $t = new WeakMap(), Q = new WeakSet(), dn = function() {
  return this.is_fork || l(this, We).size > 0;
}, ri = function() {
  for (const n of l(this, $t))
    for (const s of l(n, We).keys()) {
      for (var t = !1, r = s; r.parent !== null; ) {
        if (l(this, Ge).has(r)) {
          t = !0;
          break;
        }
        r = r.parent;
      }
      if (!t)
        return !0;
    }
  return !1;
}, cn = function() {
  var d;
  if (As++ > 1e3 && (Ht.delete(this), Pa()), !V(this, Q, dn).call(this)) {
    for (const a of l(this, Ct))
      l(this, lt).delete(a), J(a, le), this.schedule(a);
    for (const a of l(this, lt))
      J(a, Xe), this.schedule(a);
  }
  const t = l(this, ye);
  P(this, ye, []), this.apply();
  var r = xr = [], n = [], s = fn = [];
  for (const a of t)
    try {
      V(this, Q, Jn).call(this, a, r, n);
    } catch (f) {
      throw ii(a), f;
    }
  if (T = null, s.length > 0) {
    var i = mn.ensure();
    for (const a of s)
      i.schedule(a);
  }
  if (xr = null, fn = null, V(this, Q, dn).call(this) || V(this, Q, ri).call(this)) {
    V(this, Q, vn).call(this, n), V(this, Q, vn).call(this, r);
    for (const [a, f] of l(this, Ge))
      si(a, f);
  } else {
    l(this, ot).size === 0 && Ht.delete(this), l(this, Ct).clear(), l(this, lt).clear();
    for (const a of l(this, mr)) a(this);
    l(this, mr).clear(), Ts(n), Ts(r), l(this, Kr)?.resolve();
  }
  var u = (
    /** @type {Batch | null} */
    /** @type {unknown} */
    T
  );
  if (l(this, ye).length > 0) {
    const a = u ?? (u = this);
    l(a, ye).push(...l(this, ye).filter((f) => !l(a, ye).includes(f)));
  }
  u !== null && (Ht.add(u), V(d = u, Q, cn).call(d));
}, /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
Jn = function(t, r, n) {
  t.f ^= te;
  for (var s = t.first; s !== null; ) {
    var i = s.f, u = (i & (qe | Nt)) !== 0, d = u && (i & te) !== 0, a = d || (i & ce) !== 0 || l(this, Ge).has(s);
    if (!a && s.fn !== null) {
      u ? s.f ^= te : (i & Yr) !== 0 ? r.push(s) : tn(s) && ((i & $e) !== 0 && l(this, lt).add(s), Tr(s));
      var f = s.first;
      if (f !== null) {
        s = f;
        continue;
      }
    }
    for (; s !== null; ) {
      var p = s.next;
      if (p !== null) {
        s = p;
        break;
      }
      s = s.parent;
    }
  }
}, /**
 * @param {Effect[]} effects
 */
vn = function(t) {
  for (var r = 0; r < t.length; r += 1)
    ti(t[r], l(this, Ct), l(this, lt));
}, Ta = function() {
  var p, v, x;
  for (const b of Ht) {
    var t = b.id < this.id, r = [];
    for (const [w, [C, _]] of this.current) {
      if (b.current.has(w)) {
        var n = (
          /** @type {[any, boolean]} */
          b.current.get(w)[0]
        );
        if (t && C !== n)
          b.current.set(w, [C, _]);
        else
          continue;
      }
      r.push(w);
    }
    var s = [...b.current.keys()].filter((w) => !this.current.has(w));
    if (s.length === 0)
      t && b.discard();
    else if (r.length > 0) {
      if (t)
        for (const w of l(this, wr))
          b.unskip_effect(w, (C) => {
            var _;
            (C.f & ($e | Wr)) !== 0 ? b.schedule(C) : V(_ = b, Q, vn).call(_, [C]);
          });
      b.activate();
      var i = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Map();
      for (var d of r)
        ni(d, s, i, u);
      u = /* @__PURE__ */ new Map();
      var a = [...b.current.keys()].filter(
        (w) => this.current.has(w) ? (
          /** @type {[any, boolean]} */
          this.current.get(w)[0] !== w
        ) : !0
      );
      for (const w of l(this, Jr))
        (w.f & (Pe | ce | Gn)) === 0 && as(w, a, u) && ((w.f & (Wr | $e)) !== 0 ? (J(w, le), b.schedule(w)) : l(b, Ct).add(w));
      if (l(b, ye).length > 0) {
        b.apply();
        for (var f of l(b, ye))
          V(p = b, Q, Jn).call(p, f, [], []);
        P(b, ye, []);
      }
      b.deactivate();
    }
  }
  for (const b of Ht)
    l(b, $t).has(this) && (l(b, $t).delete(this), l(b, $t).size === 0 && !V(v = b, Q, dn).call(v) && (b.activate(), V(x = b, Q, cn).call(x)));
};
let ir = mn;
function Na(e) {
  var t = qr;
  qr = !0;
  try {
    for (var r; ; ) {
      if (Ma(), T === null)
        return (
          /** @type {T} */
          r
        );
      T.flush();
    }
  } finally {
    qr = t;
  }
}
function Pa() {
  try {
    va();
  } catch (e) {
    St(e, Kn);
  }
}
let it = null;
function Ts(e) {
  var t = e.length;
  if (t !== 0) {
    for (var r = 0; r < t; ) {
      var n = e[r++];
      if ((n.f & (Pe | ce)) === 0 && tn(n) && (it = /* @__PURE__ */ new Set(), Tr(n), n.deps === null && n.first === null && n.nodes === null && n.teardown === null && n.ac === null && mi(n), it?.size > 0)) {
        er.clear();
        for (const s of it) {
          if ((s.f & (Pe | ce)) !== 0) continue;
          const i = [s];
          let u = s.parent;
          for (; u !== null; )
            it.has(u) && (it.delete(u), i.push(u)), u = u.parent;
          for (let d = i.length - 1; d >= 0; d--) {
            const a = i[d];
            (a.f & (Pe | ce)) === 0 && Tr(a);
          }
        }
        it.clear();
      }
    }
    it = null;
  }
}
function ni(e, t, r, n) {
  if (!r.has(e) && (r.add(e), e.reactions !== null))
    for (const s of e.reactions) {
      const i = s.f;
      (i & ue) !== 0 ? ni(
        /** @type {Derived} */
        s,
        t,
        r,
        n
      ) : (i & (Wr | $e)) !== 0 && (i & le) === 0 && as(s, t, n) && (J(s, le), os(
        /** @type {Effect} */
        s
      ));
    }
}
function as(e, t, r) {
  const n = r.get(e);
  if (n !== void 0) return n;
  if (e.deps !== null)
    for (const s of e.deps) {
      if (Cr.call(t, s))
        return !0;
      if ((s.f & ue) !== 0 && as(
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
function os(e) {
  T.schedule(e);
}
function si(e, t) {
  if (!((e.f & qe) !== 0 && (e.f & te) !== 0)) {
    (e.f & le) !== 0 ? t.d.push(e) : (e.f & Xe) !== 0 && t.m.push(e), J(e, te);
    for (var r = e.first; r !== null; )
      si(r, t), r = r.next;
  }
}
function ii(e) {
  J(e, te);
  for (var t = e.first; t !== null; )
    ii(t), t = t.next;
}
function Ra(e) {
  let t = 0, r = ar(0), n;
  return () => {
    fs() && (o(r), bi(() => (t === 0 && (n = ps(() => e(() => Hr(r)))), t += 1, () => {
      Tt(() => {
        t -= 1, t === 0 && (n?.(), n = void 0, Hr(r));
      });
    })));
  };
}
var Da = Mr | Nr;
function ja(e, t, r, n) {
  new La(e, t, r, n);
}
var Me, ss, Se, Xt, he, Ae, de, we, ut, Zt, Mt, Er, $r, Xr, ft, yn, Y, Fa, Oa, Ba, $n, hn, pn, Xn, Zn;
class La {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(t, r, n, s) {
    M(this, Y);
    /** @type {Boundary | null} */
    Ie(this, "parent");
    Ie(this, "is_pending", !1);
    /**
     * API-level transformError transform function. Transforms errors before they reach the `failed` snippet.
     * Inherited from parent boundary, or defaults to identity.
     * @type {(error: unknown) => unknown}
     */
    Ie(this, "transform_error");
    /** @type {TemplateNode} */
    M(this, Me);
    /** @type {TemplateNode | null} */
    M(this, ss, null);
    /** @type {BoundaryProps} */
    M(this, Se);
    /** @type {((anchor: Node) => void)} */
    M(this, Xt);
    /** @type {Effect} */
    M(this, he);
    /** @type {Effect | null} */
    M(this, Ae, null);
    /** @type {Effect | null} */
    M(this, de, null);
    /** @type {Effect | null} */
    M(this, we, null);
    /** @type {DocumentFragment | null} */
    M(this, ut, null);
    M(this, Zt, 0);
    M(this, Mt, 0);
    M(this, Er, !1);
    /** @type {Set<Effect>} */
    M(this, $r, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    M(this, Xr, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    M(this, ft, null);
    M(this, yn, Ra(() => (P(this, ft, ar(l(this, Zt))), () => {
      P(this, ft, null);
    })));
    P(this, Me, t), P(this, Se, r), P(this, Xt, (i) => {
      var u = (
        /** @type {Effect} */
        L
      );
      u.b = this, u.f |= Wn, n(i);
    }), this.parent = /** @type {Effect} */
    L.b, this.transform_error = s ?? this.parent?.transform_error ?? ((i) => i), P(this, he, ds(() => {
      V(this, Y, $n).call(this);
    }, Da));
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    ti(t, l(this, $r), l(this, Xr));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!l(this, Se).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  update_pending_count(t, r) {
    V(this, Y, Xn).call(this, t, r), P(this, Zt, l(this, Zt) + t), !(!l(this, ft) || l(this, Er)) && (P(this, Er, !0), Tt(() => {
      P(this, Er, !1), l(this, ft) && Ar(l(this, ft), l(this, Zt));
    }));
  }
  get_effect_pending() {
    return l(this, yn).call(this), o(
      /** @type {Source<number>} */
      l(this, ft)
    );
  }
  /** @param {unknown} error */
  error(t) {
    if (!l(this, Se).onerror && !l(this, Se).failed)
      throw t;
    T?.is_fork ? (l(this, Ae) && T.skip_effect(l(this, Ae)), l(this, de) && T.skip_effect(l(this, de)), l(this, we) && T.skip_effect(l(this, we)), T.on_fork_commit(() => {
      V(this, Y, Zn).call(this, t);
    })) : V(this, Y, Zn).call(this, t);
  }
}
Me = new WeakMap(), ss = new WeakMap(), Se = new WeakMap(), Xt = new WeakMap(), he = new WeakMap(), Ae = new WeakMap(), de = new WeakMap(), we = new WeakMap(), ut = new WeakMap(), Zt = new WeakMap(), Mt = new WeakMap(), Er = new WeakMap(), $r = new WeakMap(), Xr = new WeakMap(), ft = new WeakMap(), yn = new WeakMap(), Y = new WeakSet(), Fa = function() {
  try {
    P(this, Ae, Te(() => l(this, Xt).call(this, l(this, Me))));
  } catch (t) {
    this.error(t);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
Oa = function(t) {
  const r = l(this, Se).failed;
  r && P(this, we, Te(() => {
    r(
      l(this, Me),
      () => t,
      () => () => {
      }
    );
  }));
}, Ba = function() {
  const t = l(this, Se).pending;
  t && (this.is_pending = !0, P(this, de, Te(() => t(l(this, Me)))), Tt(() => {
    var r = P(this, ut, document.createDocumentFragment()), n = tr();
    r.append(n), P(this, Ae, V(this, Y, pn).call(this, () => Te(() => l(this, Xt).call(this, n)))), l(this, Mt) === 0 && (l(this, Me).before(r), P(this, ut, null), rr(
      /** @type {Effect} */
      l(this, de),
      () => {
        P(this, de, null);
      }
    ), V(this, Y, hn).call(
      this,
      /** @type {Batch} */
      T
    ));
  }));
}, $n = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), P(this, Mt, 0), P(this, Zt, 0), P(this, Ae, Te(() => {
      l(this, Xt).call(this, l(this, Me));
    })), l(this, Mt) > 0) {
      var t = P(this, ut, document.createDocumentFragment());
      hs(l(this, Ae), t);
      const r = (
        /** @type {(anchor: Node) => void} */
        l(this, Se).pending
      );
      P(this, de, Te(() => r(l(this, Me))));
    } else
      V(this, Y, hn).call(
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
hn = function(t) {
  this.is_pending = !1, t.transfer_effects(l(this, $r), l(this, Xr));
}, /**
 * @template T
 * @param {() => T} fn
 */
pn = function(t) {
  var r = L, n = j, s = Ee;
  Ze(l(this, he)), De(l(this, he)), Sr(l(this, he).ctx);
  try {
    return ir.ensure(), t();
  } catch (i) {
    return Qs(i), null;
  } finally {
    Ze(r), De(n), Sr(s);
  }
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 * @param {Batch} batch
 */
Xn = function(t, r) {
  var n;
  if (!this.has_pending_snippet()) {
    this.parent && V(n = this.parent, Y, Xn).call(n, t, r);
    return;
  }
  P(this, Mt, l(this, Mt) + t), l(this, Mt) === 0 && (V(this, Y, hn).call(this, r), l(this, de) && rr(l(this, de), () => {
    P(this, de, null);
  }), l(this, ut) && (l(this, Me).before(l(this, ut)), P(this, ut, null)));
}, /**
 * @param {unknown} error
 */
Zn = function(t) {
  l(this, Ae) && (_e(l(this, Ae)), P(this, Ae, null)), l(this, de) && (_e(l(this, de)), P(this, de, null)), l(this, we) && (_e(l(this, we)), P(this, we, null));
  var r = l(this, Se).onerror;
  let n = l(this, Se).failed;
  var s = !1, i = !1;
  const u = () => {
    if (s) {
      Ea();
      return;
    }
    s = !0, i && ga(), l(this, we) !== null && rr(l(this, we), () => {
      P(this, we, null);
    }), V(this, Y, pn).call(this, () => {
      V(this, Y, $n).call(this);
    });
  }, d = (a) => {
    try {
      i = !0, r?.(a, u), i = !1;
    } catch (f) {
      St(f, l(this, he) && l(this, he).parent);
    }
    n && P(this, we, V(this, Y, pn).call(this, () => {
      try {
        return Te(() => {
          var f = (
            /** @type {Effect} */
            L
          );
          f.b = this, f.f |= Wn, n(
            l(this, Me),
            () => a,
            () => u
          );
        });
      } catch (f) {
        return St(
          f,
          /** @type {Effect} */
          l(this, he).parent
        ), null;
      }
    }));
  };
  Tt(() => {
    var a;
    try {
      a = this.transform_error(t);
    } catch (f) {
      St(f, l(this, he) && l(this, he).parent);
      return;
    }
    a !== null && typeof a == "object" && typeof /** @type {any} */
    a.then == "function" ? a.then(
      d,
      /** @param {unknown} e */
      (f) => St(f, l(this, he) && l(this, he).parent)
    ) : d(a);
  });
};
function Ia(e, t, r, n) {
  const s = ls;
  var i = e.filter((x) => !x.settled);
  if (r.length === 0 && i.length === 0) {
    n(t.map(s));
    return;
  }
  var u = (
    /** @type {Effect} */
    L
  ), d = za(), a = i.length === 1 ? i[0].promise : i.length > 1 ? Promise.all(i.map((x) => x.promise)) : null;
  function f(x) {
    d();
    try {
      n(x);
    } catch (b) {
      (u.f & Pe) === 0 && St(b, u);
    }
    bn();
  }
  if (r.length === 0) {
    a.then(() => f(t.map(s)));
    return;
  }
  var p = ai();
  function v() {
    Promise.all(r.map((x) => /* @__PURE__ */ Va(x))).then((x) => f([...t.map(s), ...x])).catch((x) => St(x, u)).finally(() => p());
  }
  a ? a.then(() => {
    d(), v(), bn();
  }) : v();
}
function za() {
  var e = (
    /** @type {Effect} */
    L
  ), t = j, r = Ee, n = (
    /** @type {Batch} */
    T
  );
  return function(i = !0) {
    Ze(e), De(t), Sr(r), i && (e.f & Pe) === 0 && (n?.activate(), n?.apply());
  };
}
function bn(e = !0) {
  Ze(null), De(null), Sr(null), e && T?.deactivate();
}
function ai() {
  var e = (
    /** @type {Effect} */
    L
  ), t = (
    /** @type {Boundary} */
    e.b
  ), r = (
    /** @type {Batch} */
    T
  ), n = t.is_rendered();
  return t.update_pending_count(1, r), r.increment(n, e), (s = !1) => {
    t.update_pending_count(-1, r), r.decrement(n, e, s);
  };
}
// @__NO_SIDE_EFFECTS__
function ls(e) {
  var t = ue | le;
  return L !== null && (L.f |= Nr), {
    ctx: Ee,
    deps: null,
    effects: null,
    equals: Gs,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      se
    ),
    wv: 0,
    parent: L,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function Va(e, t, r) {
  let n = (
    /** @type {Effect | null} */
    L
  );
  n === null && la();
  var s = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), i = ar(
    /** @type {V} */
    se
  ), u = !j, d = /* @__PURE__ */ new Map();
  return to(() => {
    var a = (
      /** @type {Effect} */
      L
    ), f = Us();
    s = f.promise;
    try {
      Promise.resolve(e()).then(f.resolve, f.reject).finally(bn);
    } catch (b) {
      f.reject(b), bn();
    }
    var p = (
      /** @type {Batch} */
      T
    );
    if (u) {
      if ((a.f & or) !== 0)
        var v = ai();
      if (
        /** @type {Boundary} */
        n.b.is_rendered()
      )
        d.get(p)?.reject(at), d.delete(p);
      else {
        for (const b of d.values())
          b.reject(at);
        d.clear();
      }
      d.set(p, f);
    }
    const x = (b, w = void 0) => {
      if (v) {
        var C = w === at;
        v(C);
      }
      if (!(w === at || (a.f & Pe) !== 0)) {
        if (p.activate(), w)
          i.f |= At, Ar(i, w);
        else {
          (i.f & At) !== 0 && (i.f ^= At), Ar(i, b);
          for (const [_, S] of d) {
            if (d.delete(_), _ === p) break;
            S.reject(at);
          }
        }
        p.deactivate();
      }
    };
    f.promise.then(x, (b) => x(null, b || "unknown"));
  }), pi(() => {
    for (const a of d.values())
      a.reject(at);
  }), new Promise((a) => {
    function f(p) {
      function v() {
        p === s ? a(i) : f(s);
      }
      p.then(v, v);
    }
    f(s);
  });
}
// @__NO_SIDE_EFFECTS__
function Br(e) {
  const t = /* @__PURE__ */ ls(e);
  return ki(t), t;
}
// @__NO_SIDE_EFFECTS__
function Ua(e) {
  const t = /* @__PURE__ */ ls(e);
  return t.equals = Ks, t;
}
function qa(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var r = 0; r < t.length; r += 1)
      _e(
        /** @type {Effect} */
        t[r]
      );
  }
}
function us(e) {
  var t, r = L, n = e.parent;
  if (!Pt && n !== null && (n.f & (Pe | ce)) !== 0)
    return ka(), e.v;
  Ze(n);
  try {
    e.f &= ~sr, qa(e), t = Si(e);
  } finally {
    Ze(r);
  }
  return t;
}
function oi(e) {
  var t = us(e);
  if (!e.equals(t) && (e.wv = Ci(), (!T?.is_fork || e.deps === null) && (T !== null ? T.capture(e, t, !0) : e.v = t, e.deps === null))) {
    J(e, te);
    return;
  }
  Pt || (Ve !== null ? (fs() || T?.is_fork) && Ve.set(e, t) : is(e));
}
function Ha(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      (t.teardown || t.ac) && (t.teardown?.(), t.ac?.abort(at), t.teardown = ra, t.ac = null, Gr(t, 0), cs(t));
}
function li(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      t.teardown && Tr(t);
}
let Qn = /* @__PURE__ */ new Set();
const er = /* @__PURE__ */ new Map();
let ui = !1;
function ar(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Gs,
    rv: 0,
    wv: 0
  };
  return r;
}
// @__NO_SIDE_EFFECTS__
function O(e, t) {
  const r = ar(e);
  return ki(r), r;
}
// @__NO_SIDE_EFFECTS__
function Ya(e, t = !1, r = !0) {
  const n = ar(e);
  return t || (n.equals = Ks), n;
}
function g(e, t, r = !1) {
  j !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Ue || (j.f & Gn) !== 0) && Xs() && (j.f & (ue | $e | Wr | Gn)) !== 0 && (Re === null || !Cr.call(Re, e)) && _a();
  let n = r ? Wt(t) : t;
  return Ar(e, n, fn);
}
function Ar(e, t, r = null) {
  if (!e.equals(t)) {
    er.set(e, Pt ? t : e.v);
    var n = ir.ensure();
    if (n.capture(e, t), (e.f & ue) !== 0) {
      const s = (
        /** @type {Derived} */
        e
      );
      (e.f & le) !== 0 && us(s), Ve === null && is(s);
    }
    e.wv = Ci(), fi(e, le, r), L !== null && (L.f & te) !== 0 && (L.f & (qe | Nt)) === 0 && (Ce === null ? so([e]) : Ce.push(e)), !n.is_fork && Qn.size > 0 && !ui && Wa();
  }
  return t;
}
function Wa() {
  ui = !1;
  for (const e of Qn)
    (e.f & te) !== 0 && J(e, Xe), tn(e) && Tr(e);
  Qn.clear();
}
function Ns(e, t = 1) {
  var r = o(e), n = t === 1 ? r++ : r--;
  return g(e, r), n;
}
function Hr(e) {
  g(e, e.v + 1);
}
function fi(e, t, r) {
  var n = e.reactions;
  if (n !== null)
    for (var s = n.length, i = 0; i < s; i++) {
      var u = n[i], d = u.f, a = (d & le) === 0;
      if (a && J(u, t), (d & ue) !== 0) {
        var f = (
          /** @type {Derived} */
          u
        );
        Ve?.delete(f), (d & sr) === 0 && (d & Ne && (L === null || (L.f & gn) === 0) && (u.f |= sr), fi(f, Xe, r));
      } else if (a) {
        var p = (
          /** @type {Effect} */
          u
        );
        (d & $e) !== 0 && it !== null && it.add(p), r !== null ? r.push(p) : os(p);
      }
    }
}
function Wt(e) {
  if (typeof e != "object" || e === null || zn in e)
    return e;
  const t = Vs(e);
  if (t !== ea && t !== ta)
    return e;
  var r = /* @__PURE__ */ new Map(), n = zs(e), s = /* @__PURE__ */ O(0), i = nr, u = (d) => {
    if (nr === i)
      return d();
    var a = j, f = nr;
    De(null), js(i);
    var p = d();
    return De(a), js(f), p;
  };
  return n && r.set("length", /* @__PURE__ */ O(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(d, a, f) {
        (!("value" in f) || f.configurable === !1 || f.enumerable === !1 || f.writable === !1) && ha();
        var p = r.get(a);
        return p === void 0 ? u(() => {
          var v = /* @__PURE__ */ O(f.value);
          return r.set(a, v), v;
        }) : g(p, f.value, !0), !0;
      },
      deleteProperty(d, a) {
        var f = r.get(a);
        if (f === void 0) {
          if (a in d) {
            const p = u(() => /* @__PURE__ */ O(se));
            r.set(a, p), Hr(s);
          }
        } else
          g(f, se), Hr(s);
        return !0;
      },
      get(d, a, f) {
        if (a === zn)
          return e;
        var p = r.get(a), v = a in d;
        if (p === void 0 && (!v || Ur(d, a)?.writable) && (p = u(() => {
          var b = Wt(v ? d[a] : se), w = /* @__PURE__ */ O(b);
          return w;
        }), r.set(a, p)), p !== void 0) {
          var x = o(p);
          return x === se ? void 0 : x;
        }
        return Reflect.get(d, a, f);
      },
      getOwnPropertyDescriptor(d, a) {
        var f = Reflect.getOwnPropertyDescriptor(d, a);
        if (f && "value" in f) {
          var p = r.get(a);
          p && (f.value = o(p));
        } else if (f === void 0) {
          var v = r.get(a), x = v?.v;
          if (v !== void 0 && x !== se)
            return {
              enumerable: !0,
              configurable: !0,
              value: x,
              writable: !0
            };
        }
        return f;
      },
      has(d, a) {
        if (a === zn)
          return !0;
        var f = r.get(a), p = f !== void 0 && f.v !== se || Reflect.has(d, a);
        if (f !== void 0 || L !== null && (!p || Ur(d, a)?.writable)) {
          f === void 0 && (f = u(() => {
            var x = p ? Wt(d[a]) : se, b = /* @__PURE__ */ O(x);
            return b;
          }), r.set(a, f));
          var v = o(f);
          if (v === se)
            return !1;
        }
        return p;
      },
      set(d, a, f, p) {
        var v = r.get(a), x = a in d;
        if (n && a === "length")
          for (var b = f; b < /** @type {Source<number>} */
          v.v; b += 1) {
            var w = r.get(b + "");
            w !== void 0 ? g(w, se) : b in d && (w = u(() => /* @__PURE__ */ O(se)), r.set(b + "", w));
          }
        if (v === void 0)
          (!x || Ur(d, a)?.writable) && (v = u(() => /* @__PURE__ */ O(void 0)), g(v, Wt(f)), r.set(a, v));
        else {
          x = v.v !== se;
          var C = u(() => Wt(f));
          g(v, C);
        }
        var _ = Reflect.getOwnPropertyDescriptor(d, a);
        if (_?.set && _.set.call(p, f), !x) {
          if (n && typeof a == "string") {
            var S = (
              /** @type {Source<number>} */
              r.get("length")
            ), H = Number(a);
            Number.isInteger(H) && H >= S.v && g(S, H + 1);
          }
          Hr(s);
        }
        return !0;
      },
      ownKeys(d) {
        o(s);
        var a = Reflect.ownKeys(d).filter((v) => {
          var x = r.get(v);
          return x === void 0 || x.v !== se;
        });
        for (var [f, p] of r)
          p.v !== se && !(f in d) && a.push(f);
        return a;
      },
      setPrototypeOf() {
        pa();
      }
    }
  );
}
var Ps, di, ci, vi;
function Ga() {
  if (Ps === void 0) {
    Ps = window, di = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, r = Text.prototype;
    ci = Ur(t, "firstChild").get, vi = Ur(t, "nextSibling").get, Ms(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), Ms(r) && (r.__t = void 0);
  }
}
function tr(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function dt(e) {
  return (
    /** @type {TemplateNode | null} */
    ci.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function en(e) {
  return (
    /** @type {TemplateNode | null} */
    vi.call(e)
  );
}
function h(e, t) {
  return /* @__PURE__ */ dt(e);
}
function on(e, t = !1) {
  {
    var r = /* @__PURE__ */ dt(e);
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ en(r) : r;
  }
}
function y(e, t = 1, r = !1) {
  let n = e;
  for (; t--; )
    n = /** @type {TemplateNode} */
    /* @__PURE__ */ en(n);
  return n;
}
function Ka(e) {
  e.textContent = "";
}
function hi() {
  return !1;
}
function Ja(e, t, r) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElementNS(Ws, e, void 0)
  );
}
let Rs = !1;
function $a() {
  Rs || (Rs = !0, document.addEventListener(
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
function Cn(e) {
  var t = j, r = L;
  De(null), Ze(null);
  try {
    return e();
  } finally {
    De(t), Ze(r);
  }
}
function Xa(e, t, r, n = r) {
  e.addEventListener(t, () => Cn(r));
  const s = e.__on_r;
  s ? e.__on_r = () => {
    s(), n(!0);
  } : e.__on_r = () => n(!0), $a();
}
function Za(e) {
  L === null && (j === null && ca(), da()), Pt && fa();
}
function Qa(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function Rt(e, t) {
  var r = L;
  r !== null && (r.f & ce) !== 0 && (e |= ce);
  var n = {
    ctx: Ee,
    deps: null,
    nodes: null,
    f: e | le | Ne,
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
  var s = n;
  if ((e & Yr) !== 0)
    xr !== null ? xr.push(n) : ir.ensure().schedule(n);
  else if (t !== null) {
    try {
      Tr(n);
    } catch (u) {
      throw _e(n), u;
    }
    s.deps === null && s.teardown === null && s.nodes === null && s.first === s.last && // either `null`, or a singular child
    (s.f & Nr) === 0 && (s = s.first, (e & $e) !== 0 && (e & Mr) !== 0 && s !== null && (s.f |= Mr));
  }
  if (s !== null && (s.parent = r, r !== null && Qa(s, r), j !== null && (j.f & ue) !== 0 && (e & Nt) === 0)) {
    var i = (
      /** @type {Derived} */
      j
    );
    (i.effects ?? (i.effects = [])).push(s);
  }
  return n;
}
function fs() {
  return j !== null && !Ue;
}
function pi(e) {
  const t = Rt(En, null);
  return J(t, te), t.teardown = e, t;
}
function _i(e) {
  Za();
  var t = (
    /** @type {Effect} */
    L.f
  ), r = !j && (t & qe) !== 0 && (t & or) === 0;
  if (r) {
    var n = (
      /** @type {ComponentContext} */
      Ee
    );
    (n.e ?? (n.e = [])).push(e);
  } else
    return gi(e);
}
function gi(e) {
  return Rt(Yr | ia, e);
}
function eo(e) {
  ir.ensure();
  const t = Rt(Nt | Nr, e);
  return (r = {}) => new Promise((n) => {
    r.outro ? rr(t, () => {
      _e(t), n(void 0);
    }) : (_e(t), n(void 0));
  });
}
function to(e) {
  return Rt(Wr | Nr, e);
}
function bi(e, t = 0) {
  return Rt(En | t, e);
}
function q(e, t = [], r = [], n = []) {
  Ia(n, t, r, (s) => {
    Rt(En, () => e(...s.map(o)));
  });
}
function ds(e, t = 0) {
  var r = Rt($e | t, e);
  return r;
}
function Te(e) {
  return Rt(qe | Nr, e);
}
function xi(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = Pt, n = j;
    Ds(!0), De(null);
    try {
      t.call(null);
    } finally {
      Ds(r), De(n);
    }
  }
}
function cs(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    const s = r.ac;
    s !== null && Cn(() => {
      s.abort(at);
    });
    var n = r.next;
    (r.f & Nt) !== 0 ? r.parent = null : _e(r, t), r = n;
  }
}
function ro(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & qe) === 0 && _e(t), t = r;
  }
}
function _e(e, t = !0) {
  var r = !1;
  (t || (e.f & sa) !== 0) && e.nodes !== null && e.nodes.end !== null && (no(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), r = !0), J(e, Ss), cs(e, t && !r), Gr(e, 0);
  var n = e.nodes && e.nodes.t;
  if (n !== null)
    for (const i of n)
      i.stop();
  xi(e), e.f ^= Ss, e.f |= Pe;
  var s = e.parent;
  s !== null && s.first !== null && mi(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function no(e, t) {
  for (; e !== null; ) {
    var r = e === t ? null : /* @__PURE__ */ en(e);
    e.remove(), e = r;
  }
}
function mi(e) {
  var t = e.parent, r = e.prev, n = e.next;
  r !== null && (r.next = n), n !== null && (n.prev = r), t !== null && (t.first === e && (t.first = n), t.last === e && (t.last = r));
}
function rr(e, t, r = !0) {
  var n = [];
  yi(e, n, !0);
  var s = () => {
    r && _e(e), t && t();
  }, i = n.length;
  if (i > 0) {
    var u = () => --i || s();
    for (var d of n)
      d.out(u);
  } else
    s();
}
function yi(e, t, r) {
  if ((e.f & ce) === 0) {
    e.f ^= ce;
    var n = e.nodes && e.nodes.t;
    if (n !== null)
      for (const d of n)
        (d.is_global || r) && t.push(d);
    for (var s = e.first; s !== null; ) {
      var i = s.next;
      if ((s.f & Nt) === 0) {
        var u = (s.f & Mr) !== 0 || // If this is a branch effect without a block effect parent,
        // it means the parent block effect was pruned. In that case,
        // transparency information was transferred to the branch effect.
        (s.f & qe) !== 0 && (e.f & $e) !== 0;
        yi(s, t, u ? r : !1);
      }
      s = i;
    }
  }
}
function vs(e) {
  wi(e, !0);
}
function wi(e, t) {
  if ((e.f & ce) !== 0) {
    e.f ^= ce, (e.f & te) === 0 && (J(e, le), ir.ensure().schedule(e));
    for (var r = e.first; r !== null; ) {
      var n = r.next, s = (r.f & Mr) !== 0 || (r.f & qe) !== 0;
      wi(r, s ? t : !1), r = n;
    }
    var i = e.nodes && e.nodes.t;
    if (i !== null)
      for (const u of i)
        (u.is_global || t) && u.in();
  }
}
function hs(e, t) {
  if (e.nodes)
    for (var r = e.nodes.start, n = e.nodes.end; r !== null; ) {
      var s = r === n ? null : /* @__PURE__ */ en(r);
      t.append(r), r = s;
    }
}
let _n = !1, Pt = !1;
function Ds(e) {
  Pt = e;
}
let j = null, Ue = !1;
function De(e) {
  j = e;
}
let L = null;
function Ze(e) {
  L = e;
}
let Re = null;
function ki(e) {
  j !== null && (Re === null ? Re = [e] : Re.push(e));
}
let pe = null, me = 0, Ce = null;
function so(e) {
  Ce = e;
}
let Ei = 1, Gt = 0, nr = Gt;
function js(e) {
  nr = e;
}
function Ci() {
  return ++Ei;
}
function tn(e) {
  var t = e.f;
  if ((t & le) !== 0)
    return !0;
  if (t & ue && (e.f &= ~sr), (t & Xe) !== 0) {
    for (var r = (
      /** @type {Value[]} */
      e.deps
    ), n = r.length, s = 0; s < n; s++) {
      var i = r[s];
      if (tn(
        /** @type {Derived} */
        i
      ) && oi(
        /** @type {Derived} */
        i
      ), i.wv > e.wv)
        return !0;
    }
    (t & Ne) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    Ve === null && J(e, te);
  }
  return !1;
}
function Mi(e, t, r = !0) {
  var n = e.reactions;
  if (n !== null && !(Re !== null && Cr.call(Re, e)))
    for (var s = 0; s < n.length; s++) {
      var i = n[s];
      (i.f & ue) !== 0 ? Mi(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (r ? J(i, le) : (i.f & te) !== 0 && J(i, Xe), os(
        /** @type {Effect} */
        i
      ));
    }
}
function Si(e) {
  var C;
  var t = pe, r = me, n = Ce, s = j, i = Re, u = Ee, d = Ue, a = nr, f = e.f;
  pe = /** @type {null | Value[]} */
  null, me = 0, Ce = null, j = (f & (qe | Nt)) === 0 ? e : null, Re = null, Sr(e.ctx), Ue = !1, nr = ++Gt, e.ac !== null && (Cn(() => {
    e.ac.abort(at);
  }), e.ac = null);
  try {
    e.f |= gn;
    var p = (
      /** @type {Function} */
      e.fn
    ), v = p();
    e.f |= or;
    var x = e.deps, b = T?.is_fork;
    if (pe !== null) {
      var w;
      if (b || Gr(e, me), x !== null && me > 0)
        for (x.length = me + pe.length, w = 0; w < pe.length; w++)
          x[me + w] = pe[w];
      else
        e.deps = x = pe;
      if (fs() && (e.f & Ne) !== 0)
        for (w = me; w < x.length; w++)
          ((C = x[w]).reactions ?? (C.reactions = [])).push(e);
    } else !b && x !== null && me < x.length && (Gr(e, me), x.length = me);
    if (Xs() && Ce !== null && !Ue && x !== null && (e.f & (ue | Xe | le)) === 0)
      for (w = 0; w < /** @type {Source[]} */
      Ce.length; w++)
        Mi(
          Ce[w],
          /** @type {Effect} */
          e
        );
    if (s !== null && s !== e) {
      if (Gt++, s.deps !== null)
        for (let _ = 0; _ < r; _ += 1)
          s.deps[_].rv = Gt;
      if (t !== null)
        for (const _ of t)
          _.rv = Gt;
      Ce !== null && (n === null ? n = Ce : n.push(.../** @type {Source[]} */
      Ce));
    }
    return (e.f & At) !== 0 && (e.f ^= At), v;
  } catch (_) {
    return Qs(_);
  } finally {
    e.f ^= gn, pe = t, me = r, Ce = n, j = s, Re = i, Sr(u), Ue = d, nr = a;
  }
}
function io(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var n = Xi.call(r, e);
    if (n !== -1) {
      var s = r.length - 1;
      s === 0 ? r = t.reactions = null : (r[n] = r[s], r.pop());
    }
  }
  if (r === null && (t.f & ue) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (pe === null || !Cr.call(pe, t))) {
    var i = (
      /** @type {Derived} */
      t
    );
    (i.f & Ne) !== 0 && (i.f ^= Ne, i.f &= ~sr), i.v !== se && is(i), Ha(i), Gr(i, 0);
  }
}
function Gr(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var n = t; n < r.length; n++)
      io(e, r[n]);
}
function Tr(e) {
  var t = e.f;
  if ((t & Pe) === 0) {
    J(e, te);
    var r = L, n = _n;
    L = e, _n = !0;
    try {
      (t & ($e | qs)) !== 0 ? ro(e) : cs(e), xi(e);
      var s = Si(e);
      e.teardown = typeof s == "function" ? s : null, e.wv = Ei;
      var i;
    } finally {
      _n = n, L = r;
    }
  }
}
async function ao() {
  await Promise.resolve(), Na();
}
function o(e) {
  var t = e.f, r = (t & ue) !== 0;
  if (j !== null && !Ue) {
    var n = L !== null && (L.f & Pe) !== 0;
    if (!n && (Re === null || !Cr.call(Re, e))) {
      var s = j.deps;
      if ((j.f & gn) !== 0)
        e.rv < Gt && (e.rv = Gt, pe === null && s !== null && s[me] === e ? me++ : pe === null ? pe = [e] : pe.push(e));
      else {
        (j.deps ?? (j.deps = [])).push(e);
        var i = e.reactions;
        i === null ? e.reactions = [j] : Cr.call(i, j) || i.push(j);
      }
    }
  }
  if (Pt && er.has(e))
    return er.get(e);
  if (r) {
    var u = (
      /** @type {Derived} */
      e
    );
    if (Pt) {
      var d = u.v;
      return ((u.f & te) === 0 && u.reactions !== null || Ti(u)) && (d = us(u)), er.set(u, d), d;
    }
    var a = (u.f & Ne) === 0 && !Ue && j !== null && (_n || (j.f & Ne) !== 0), f = (u.f & or) === 0;
    tn(u) && (a && (u.f |= Ne), oi(u)), a && !f && (li(u), Ai(u));
  }
  if (Ve?.has(e))
    return Ve.get(e);
  if ((e.f & At) !== 0)
    throw e.v;
  return e.v;
}
function Ai(e) {
  if (e.f |= Ne, e.deps !== null)
    for (const t of e.deps)
      (t.reactions ?? (t.reactions = [])).push(e), (t.f & ue) !== 0 && (t.f & Ne) === 0 && (li(
        /** @type {Derived} */
        t
      ), Ai(
        /** @type {Derived} */
        t
      ));
}
function Ti(e) {
  if (e.v === se) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (er.has(t) || (t.f & ue) !== 0 && Ti(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function ps(e) {
  var t = Ue;
  try {
    return Ue = !0, e();
  } finally {
    Ue = t;
  }
}
const oo = ["touchstart", "touchmove"];
function lo(e) {
  return oo.includes(e);
}
const Kt = Symbol("events"), Ni = /* @__PURE__ */ new Set(), es = /* @__PURE__ */ new Set();
function uo(e, t, r, n = {}) {
  function s(i) {
    if (n.capture || ts.call(t, i), !i.cancelBubble)
      return Cn(() => r?.call(this, i));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? Tt(() => {
    t.addEventListener(e, s, n);
  }) : t.addEventListener(e, s, n), s;
}
function fo(e, t, r, n, s) {
  var i = { capture: n, passive: s }, u = uo(e, t, r, i);
  (t === document.body || // @ts-ignore
  t === window || // @ts-ignore
  t === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  t instanceof HTMLMediaElement) && pi(() => {
    t.removeEventListener(e, u, i);
  });
}
function K(e, t, r) {
  (t[Kt] ?? (t[Kt] = {}))[e] = r;
}
function co(e) {
  for (var t = 0; t < e.length; t++)
    Ni.add(e[t]);
  for (var r of es)
    r(e);
}
let Ls = null;
function ts(e) {
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), n = e.type, s = e.composedPath?.() || [], i = (
    /** @type {null | Element} */
    s[0] || e.target
  );
  Ls = e;
  var u = 0, d = Ls === e && e[Kt];
  if (d) {
    var a = s.indexOf(d);
    if (a !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e[Kt] = t;
      return;
    }
    var f = s.indexOf(t);
    if (f === -1)
      return;
    a <= f && (u = a);
  }
  if (i = /** @type {Element} */
  s[u] || e.target, i !== t) {
    Zi(e, "currentTarget", {
      configurable: !0,
      get() {
        return i || r;
      }
    });
    var p = j, v = L;
    De(null), Ze(null);
    try {
      for (var x, b = []; i !== null; ) {
        var w = i.assignedSlot || i.parentNode || /** @type {any} */
        i.host || null;
        try {
          var C = i[Kt]?.[n];
          C != null && (!/** @type {any} */
          i.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === i) && C.call(i, e);
        } catch (_) {
          x ? b.push(_) : x = _;
        }
        if (e.cancelBubble || w === t || w === null)
          break;
        i = w;
      }
      if (x) {
        for (let _ of b)
          queueMicrotask(() => {
            throw _;
          });
        throw x;
      }
    } finally {
      e[Kt] = t, delete e.currentTarget, De(p), Ze(v);
    }
  }
}
const vo = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (e) => e
  })
);
function ho(e) {
  return (
    /** @type {string} */
    vo?.createHTML(e) ?? e
  );
}
function Pi(e) {
  var t = Ja("template");
  return t.innerHTML = ho(e.replaceAll("<!>", "<!---->")), t.content;
}
function xn(e, t) {
  var r = (
    /** @type {Effect} */
    L
  );
  r.nodes === null && (r.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function N(e, t) {
  var r = (t & Ys) !== 0, n = (t & wa) !== 0, s, i = !e.startsWith("<!>");
  return () => {
    s === void 0 && (s = Pi(i ? e : "<!>" + e), r || (s = /** @type {TemplateNode} */
    /* @__PURE__ */ dt(s)));
    var u = (
      /** @type {TemplateNode} */
      n || di ? document.importNode(s, !0) : s.cloneNode(!0)
    );
    if (r) {
      var d = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ dt(u)
      ), a = (
        /** @type {TemplateNode} */
        u.lastChild
      );
      xn(d, a);
    } else
      xn(u, u);
    return u;
  };
}
// @__NO_SIDE_EFFECTS__
function po(e, t, r = "svg") {
  var n = !e.startsWith("<!>"), s = (t & Ys) !== 0, i = `<${r}>${n ? e : "<!>" + e}</${r}>`, u;
  return () => {
    if (!u) {
      var d = (
        /** @type {DocumentFragment} */
        Pi(i)
      ), a = (
        /** @type {Element} */
        /* @__PURE__ */ dt(d)
      );
      if (s)
        for (u = document.createDocumentFragment(); /* @__PURE__ */ dt(a); )
          u.appendChild(
            /** @type {TemplateNode} */
            /* @__PURE__ */ dt(a)
          );
      else
        u = /** @type {Element} */
        /* @__PURE__ */ dt(a);
    }
    var f = (
      /** @type {TemplateNode} */
      u.cloneNode(!0)
    );
    if (s) {
      var p = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ dt(f)
      ), v = (
        /** @type {TemplateNode} */
        f.lastChild
      );
      xn(p, v);
    } else
      xn(f, f);
    return f;
  };
}
// @__NO_SIDE_EFFECTS__
function lr(e, t) {
  return /* @__PURE__ */ po(e, t, "svg");
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
function _o(e, t) {
  return go(e, t);
}
const ln = /* @__PURE__ */ new Map();
function go(e, { target: t, anchor: r, props: n = {}, events: s, context: i, intro: u = !0, transformError: d }) {
  Ga();
  var a = void 0, f = eo(() => {
    var p = r ?? t.appendChild(tr());
    ja(
      /** @type {TemplateNode} */
      p,
      {
        pending: () => {
        }
      },
      (b) => {
        Js({});
        var w = (
          /** @type {ComponentContext} */
          Ee
        );
        i && (w.c = i), s && (n.$$events = s), a = e(b, n) || {}, $s();
      },
      d
    );
    var v = /* @__PURE__ */ new Set(), x = (b) => {
      for (var w = 0; w < b.length; w++) {
        var C = b[w];
        if (!v.has(C)) {
          v.add(C);
          var _ = lo(C);
          for (const F of [t, document]) {
            var S = ln.get(F);
            S === void 0 && (S = /* @__PURE__ */ new Map(), ln.set(F, S));
            var H = S.get(C);
            H === void 0 ? (F.addEventListener(C, ts, { passive: _ }), S.set(C, 1)) : S.set(C, H + 1);
          }
        }
      }
    };
    return x(kn(Ni)), es.add(x), () => {
      for (var b of v)
        for (const _ of [t, document]) {
          var w = (
            /** @type {Map<string, number>} */
            ln.get(_)
          ), C = (
            /** @type {number} */
            w.get(b)
          );
          --C == 0 ? (_.removeEventListener(b, ts), w.delete(b), w.size === 0 && ln.delete(_)) : w.set(b, C);
        }
      es.delete(x), p !== r && p.parentNode?.removeChild(p);
    };
  });
  return rs.set(a, f), a;
}
let rs = /* @__PURE__ */ new WeakMap();
function bo(e, t) {
  const r = rs.get(e);
  return r ? (rs.delete(e), r(t)) : Promise.resolve();
}
var ze, Ke, ke, Qt, Zr, Qr, wn;
class xo {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, r = !0) {
    /** @type {TemplateNode} */
    Ie(this, "anchor");
    /** @type {Map<Batch, Key>} */
    M(this, ze, /* @__PURE__ */ new Map());
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
    M(this, Ke, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    M(this, ke, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    M(this, Qt, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    M(this, Zr, !0);
    /**
     * @param {Batch} batch
     */
    M(this, Qr, (t) => {
      if (l(this, ze).has(t)) {
        var r = (
          /** @type {Key} */
          l(this, ze).get(t)
        ), n = l(this, Ke).get(r);
        if (n)
          vs(n), l(this, Qt).delete(r);
        else {
          var s = l(this, ke).get(r);
          s && (l(this, Ke).set(r, s.effect), l(this, ke).delete(r), s.fragment.lastChild.remove(), this.anchor.before(s.fragment), n = s.effect);
        }
        for (const [i, u] of l(this, ze)) {
          if (l(this, ze).delete(i), i === t)
            break;
          const d = l(this, ke).get(u);
          d && (_e(d.effect), l(this, ke).delete(u));
        }
        for (const [i, u] of l(this, Ke)) {
          if (i === r || l(this, Qt).has(i)) continue;
          const d = () => {
            if (Array.from(l(this, ze).values()).includes(i)) {
              var f = document.createDocumentFragment();
              hs(u, f), f.append(tr()), l(this, ke).set(i, { effect: u, fragment: f });
            } else
              _e(u);
            l(this, Qt).delete(i), l(this, Ke).delete(i);
          };
          l(this, Zr) || !n ? (l(this, Qt).add(i), rr(u, d, !1)) : d();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    M(this, wn, (t) => {
      l(this, ze).delete(t);
      const r = Array.from(l(this, ze).values());
      for (const [n, s] of l(this, ke))
        r.includes(n) || (_e(s.effect), l(this, ke).delete(n));
    });
    this.anchor = t, P(this, Zr, r);
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
    ), s = hi();
    if (r && !l(this, Ke).has(t) && !l(this, ke).has(t))
      if (s) {
        var i = document.createDocumentFragment(), u = tr();
        i.append(u), l(this, ke).set(t, {
          effect: Te(() => r(u)),
          fragment: i
        });
      } else
        l(this, Ke).set(
          t,
          Te(() => r(this.anchor))
        );
    if (l(this, ze).set(n, t), s) {
      for (const [d, a] of l(this, Ke))
        d === t ? n.unskip_effect(a) : n.skip_effect(a);
      for (const [d, a] of l(this, ke))
        d === t ? n.unskip_effect(a.effect) : n.skip_effect(a.effect);
      n.oncommit(l(this, Qr)), n.ondiscard(l(this, wn));
    } else
      l(this, Qr).call(this, n);
  }
}
ze = new WeakMap(), Ke = new WeakMap(), ke = new WeakMap(), Qt = new WeakMap(), Zr = new WeakMap(), Qr = new WeakMap(), wn = new WeakMap();
function B(e, t, r = !1) {
  var n = new xo(e), s = r ? Mr : 0;
  function i(u, d) {
    n.ensure(u, d);
  }
  ds(() => {
    var u = !1;
    t((d, a = 0) => {
      u = !0, i(a, d);
    }), u || i(-1, null);
  }, s);
}
function Un(e, t) {
  return t;
}
function mo(e, t, r) {
  for (var n = [], s = t.length, i, u = t.length, d = 0; d < s; d++) {
    let v = t[d];
    rr(
      v,
      () => {
        if (i) {
          if (i.pending.delete(v), i.done.add(v), i.pending.size === 0) {
            var x = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            ns(e, kn(i.done)), x.delete(i), x.size === 0 && (e.outrogroups = null);
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
      var f = (
        /** @type {Element} */
        r
      ), p = (
        /** @type {Element} */
        f.parentNode
      );
      Ka(p), p.append(f), e.items.clear();
    }
    ns(e, t, !a);
  } else
    i = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ?? (e.outrogroups = /* @__PURE__ */ new Set())).add(i);
}
function ns(e, t, r = !0) {
  var n;
  if (e.pending.size > 0) {
    n = /* @__PURE__ */ new Set();
    for (const u of e.pending.values())
      for (const d of u)
        n.add(
          /** @type {EachItem} */
          e.items.get(d).e
        );
  }
  for (var s = 0; s < t.length; s++) {
    var i = t[s];
    if (n?.has(i)) {
      i.f |= Je;
      const u = document.createDocumentFragment();
      hs(i, u);
    } else
      _e(t[s], r);
  }
}
var Fs;
function qn(e, t, r, n, s, i = null) {
  var u = e, d = /* @__PURE__ */ new Map(), a = (t & Hs) !== 0;
  if (a) {
    var f = (
      /** @type {Element} */
      e
    );
    u = f.appendChild(tr());
  }
  var p = null, v = /* @__PURE__ */ Ua(() => {
    var F = r();
    return zs(F) ? F : F == null ? [] : kn(F);
  }), x, b = /* @__PURE__ */ new Map(), w = !0;
  function C(F) {
    (H.effect.f & Pe) === 0 && (H.pending.delete(F), H.fallback = p, yo(H, x, u, t, n), p !== null && (x.length === 0 ? (p.f & Je) === 0 ? vs(p) : (p.f ^= Je, Vr(p, null, u)) : rr(p, () => {
      p = null;
    })));
  }
  function _(F) {
    H.pending.delete(F);
  }
  var S = ds(() => {
    x = /** @type {V[]} */
    o(v);
    for (var F = x.length, U = /* @__PURE__ */ new Set(), fe = (
      /** @type {Batch} */
      T
    ), je = hi(), ie = 0; ie < F; ie += 1) {
      var Qe = x[ie], Le = n(Qe, ie), $ = w ? null : d.get(Le);
      $ ? ($.v && Ar($.v, Qe), $.i && Ar($.i, ie), je && fe.unskip_effect($.e)) : ($ = wo(
        d,
        w ? u : Fs ?? (Fs = tr()),
        Qe,
        Le,
        ie,
        s,
        t,
        r
      ), w || ($.e.f |= Je), d.set(Le, $)), U.add(Le);
    }
    if (F === 0 && i && !p && (w ? p = Te(() => i(u)) : (p = Te(() => i(Fs ?? (Fs = tr()))), p.f |= Je)), F > U.size && ua(), !w)
      if (b.set(fe, U), je) {
        for (const [Dt, Mn] of d)
          U.has(Dt) || fe.skip_effect(Mn.e);
        fe.oncommit(C), fe.ondiscard(_);
      } else
        C(fe);
    o(v);
  }), H = { effect: S, items: d, pending: b, outrogroups: null, fallback: p };
  w = !1;
}
function Ir(e) {
  for (; e !== null && (e.f & qe) === 0; )
    e = e.next;
  return e;
}
function yo(e, t, r, n, s) {
  var i = (n & ma) !== 0, u = t.length, d = e.items, a = Ir(e.effect.first), f, p = null, v, x = [], b = [], w, C, _, S;
  if (i)
    for (S = 0; S < u; S += 1)
      w = t[S], C = s(w, S), _ = /** @type {EachItem} */
      d.get(C).e, (_.f & Je) === 0 && (_.nodes?.a?.measure(), (v ?? (v = /* @__PURE__ */ new Set())).add(_));
  for (S = 0; S < u; S += 1) {
    if (w = t[S], C = s(w, S), _ = /** @type {EachItem} */
    d.get(C).e, e.outrogroups !== null)
      for (const $ of e.outrogroups)
        $.pending.delete(_), $.done.delete(_);
    if ((_.f & ce) !== 0 && (vs(_), i && (_.nodes?.a?.unfix(), (v ?? (v = /* @__PURE__ */ new Set())).delete(_))), (_.f & Je) !== 0)
      if (_.f ^= Je, _ === a)
        Vr(_, null, r);
      else {
        var H = p ? p.next : a;
        _ === e.effect.last && (e.effect.last = _.prev), _.prev && (_.prev.next = _.next), _.next && (_.next.prev = _.prev), kt(e, p, _), kt(e, _, H), Vr(_, H, r), p = _, x = [], b = [], a = Ir(p.next);
        continue;
      }
    if (_ !== a) {
      if (f !== void 0 && f.has(_)) {
        if (x.length < b.length) {
          var F = b[0], U;
          p = F.prev;
          var fe = x[0], je = x[x.length - 1];
          for (U = 0; U < x.length; U += 1)
            Vr(x[U], F, r);
          for (U = 0; U < b.length; U += 1)
            f.delete(b[U]);
          kt(e, fe.prev, je.next), kt(e, p, fe), kt(e, je, F), a = F, p = je, S -= 1, x = [], b = [];
        } else
          f.delete(_), Vr(_, a, r), kt(e, _.prev, _.next), kt(e, _, p === null ? e.effect.first : p.next), kt(e, p, _), p = _;
        continue;
      }
      for (x = [], b = []; a !== null && a !== _; )
        (f ?? (f = /* @__PURE__ */ new Set())).add(a), b.push(a), a = Ir(a.next);
      if (a === null)
        continue;
    }
    (_.f & Je) === 0 && x.push(_), p = _, a = Ir(_.next);
  }
  if (e.outrogroups !== null) {
    for (const $ of e.outrogroups)
      $.pending.size === 0 && (ns(e, kn($.done)), e.outrogroups?.delete($));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (a !== null || f !== void 0) {
    var ie = [];
    if (f !== void 0)
      for (_ of f)
        (_.f & ce) === 0 && ie.push(_);
    for (; a !== null; )
      (a.f & ce) === 0 && a !== e.fallback && ie.push(a), a = Ir(a.next);
    var Qe = ie.length;
    if (Qe > 0) {
      var Le = (n & Hs) !== 0 && u === 0 ? r : null;
      if (i) {
        for (S = 0; S < Qe; S += 1)
          ie[S].nodes?.a?.measure();
        for (S = 0; S < Qe; S += 1)
          ie[S].nodes?.a?.fix();
      }
      mo(e, ie, Le);
    }
  }
  i && Tt(() => {
    if (v !== void 0)
      for (_ of v)
        _.nodes?.a?.apply();
  });
}
function wo(e, t, r, n, s, i, u, d) {
  var a = (u & ba) !== 0 ? (u & ya) === 0 ? /* @__PURE__ */ Ya(r, !1, !1) : ar(r) : null, f = (u & xa) !== 0 ? ar(s) : null;
  return {
    v: a,
    i: f,
    e: Te(() => (i(t, a ?? r, f ?? s, d), () => {
      e.delete(n);
    }))
  };
}
function Vr(e, t, r) {
  if (e.nodes)
    for (var n = e.nodes.start, s = e.nodes.end, i = t && (t.f & Je) === 0 ? (
      /** @type {EffectNodes} */
      t.nodes.start
    ) : r; n !== null; ) {
      var u = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ en(n)
      );
      if (i.before(n), n === s)
        return;
      n = u;
    }
}
function kt(e, t, r) {
  t === null ? e.effect.first = r : t.next = r, r === null ? e.effect.last = t : r.prev = t;
}
function ko(e, t, r) {
  var n = e == null ? "" : "" + e;
  return n === "" ? null : n;
}
function Eo(e, t) {
  return e == null ? null : String(e);
}
function un(e, t, r, n, s, i) {
  var u = e.__className;
  if (u !== r || u === void 0) {
    var d = ko(r);
    d == null ? e.removeAttribute("class") : e.className = d, e.__className = r;
  }
  return i;
}
function Os(e, t, r, n) {
  var s = e.__style;
  if (s !== t) {
    var i = Eo(t);
    i == null ? e.removeAttribute("style") : e.style.cssText = i, e.__style = t;
  }
  return n;
}
const Co = Symbol("is custom element"), Mo = Symbol("is html");
function Et(e, t, r, n) {
  var s = So(e);
  s[t] !== (s[t] = r) && (t === "loading" && (e[aa] = r), r == null ? e.removeAttribute(t) : typeof r != "string" && Ao(e).includes(t) ? e[t] = r : e.setAttribute(t, r));
}
function So(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [Co]: e.nodeName.includes("-"),
      [Mo]: e.namespaceURI === Ws
    })
  );
}
var Bs = /* @__PURE__ */ new Map();
function Ao(e) {
  var t = e.getAttribute("is") || e.nodeName, r = Bs.get(t);
  if (r) return r;
  Bs.set(t, r = []);
  for (var n, s = e, i = Element.prototype; i !== s; ) {
    n = Qi(s);
    for (var u in n)
      n[u].set && r.push(u);
    s = Vs(s);
  }
  return r;
}
function zr(e, t, r = t) {
  var n = /* @__PURE__ */ new WeakSet();
  Xa(e, "input", async (s) => {
    var i = s ? e.defaultValue : e.value;
    if (i = Hn(e) ? Yn(i) : i, r(i), T !== null && n.add(T), await ao(), i !== (i = t())) {
      var u = e.selectionStart, d = e.selectionEnd, a = e.value.length;
      if (e.value = i ?? "", d !== null) {
        var f = e.value.length;
        u === d && d === a && f > a ? (e.selectionStart = f, e.selectionEnd = f) : (e.selectionStart = u, e.selectionEnd = Math.min(d, f));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  ps(t) == null && e.value && (r(Hn(e) ? Yn(e.value) : e.value), T !== null && n.add(T)), bi(() => {
    var s = t();
    if (e === document.activeElement) {
      var i = (
        /** @type {Batch} */
        T
      );
      if (n.has(i))
        return;
    }
    Hn(e) && s === Yn(e.value) || e.type === "date" && !s && !e.value || s !== e.value && (e.value = s ?? "");
  });
}
function Hn(e) {
  var t = e.type;
  return t === "number" || t === "range";
}
function Yn(e) {
  return e === "" ? null : +e;
}
function To(e) {
  Ee === null && oa(), _i(() => {
    const t = ps(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
const No = "5";
var Is;
typeof window < "u" && ((Is = window.__svelte ?? (window.__svelte = {})).v ?? (Is.v = /* @__PURE__ */ new Set())).add(No);
var Po = /* @__PURE__ */ N('<div class="mb-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 flex items-start gap-2"><svg class="w-5 h-5 flex-shrink-0 mt-0.5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span> </span> <button class="ml-auto text-red-400 hover:text-red-600">&times;</button></div>'), Ro = /* @__PURE__ */ N('<div class="mb-4 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700 flex items-center gap-2"><svg class="w-5 h-5 flex-shrink-0 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span> </span></div>'), Do = /* @__PURE__ */ N("<span> </span>"), jo = /* @__PURE__ */ N('<div class="text-xs text-gray-400 mt-1"> </div>'), Lo = /* @__PURE__ */ N('<div class="mb-4"><div class="flex justify-between text-xs text-gray-500 mb-1"><span>Approval</span> <span> </span></div> <div class="w-full bg-gray-200 rounded-full h-2.5"><div class="bg-green-500 h-2.5 rounded-full transition-all duration-300"></div></div> <!></div>'), Fo = /* @__PURE__ */ N('<div class="w-3.5 h-3.5 border-2 border-green-400 border-t-transparent rounded-full animate-spin"></div>'), Oo = /* @__PURE__ */ lr('<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>'), Bo = /* @__PURE__ */ N('<div class="w-3.5 h-3.5 border-2 border-red-400 border-t-transparent rounded-full animate-spin"></div>'), Io = /* @__PURE__ */ lr('<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>'), zo = /* @__PURE__ */ N('<div class="w-3.5 h-3.5 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>'), Vo = /* @__PURE__ */ lr('<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path></svg>'), Uo = /* @__PURE__ */ N('<div class="flex gap-2 pt-2"><button class="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg border border-green-300 text-green-700 text-sm font-medium hover:bg-green-50 disabled:opacity-50 transition-colors"><!> Yes</button> <button class="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg border border-red-300 text-red-700 text-sm font-medium hover:bg-red-50 disabled:opacity-50 transition-colors"><!> No</button> <button class="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg border border-gray-300 text-gray-600 text-sm font-medium hover:bg-gray-50 disabled:opacity-50 transition-colors"><!> Abstain</button></div>'), qo = /* @__PURE__ */ N('<div class="rounded-lg border border-gray-200 bg-white p-5"><h3 class="text-base font-semibold text-gray-900 mb-3">Voting Results</h3> <div class="grid grid-cols-4 gap-4 mb-4"><div class="text-center"><div class="text-2xl font-bold text-green-600"> </div> <div class="text-xs text-gray-500">Yes</div></div> <div class="text-center"><div class="text-2xl font-bold text-red-600"> </div> <div class="text-xs text-gray-500">No</div></div> <div class="text-center"><div class="text-2xl font-bold text-gray-500"> </div> <div class="text-xs text-gray-500">Abstain</div></div> <div class="text-center"><div class="text-2xl font-bold text-gray-900"> </div> <div class="text-xs text-gray-500">Total</div></div></div> <!> <!></div>'), Ho = /* @__PURE__ */ N('<div class="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div> Executing…', 1), Yo = /* @__PURE__ */ lr('<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"></path></svg> Approve & Execute', 1), Wo = /* @__PURE__ */ N('<div class="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"> </div>'), Go = /* @__PURE__ */ N('<div class="rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700 flex items-center gap-2"><svg class="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> </div>'), Ko = /* @__PURE__ */ N('<code class="text-xs text-gray-400 bg-gray-100 px-1.5 py-0.5 rounded"> </code>'), Jo = /* @__PURE__ */ N('<div class="flex items-center gap-3 p-2 bg-gray-50 rounded text-sm"><span class="font-mono font-medium text-gray-800 min-w-[140px]"> </span> <a target="_blank" rel="noopener noreferrer" class="text-indigo-600 hover:underline truncate flex-1 text-xs"> </a> <!></div>'), $o = /* @__PURE__ */ N('<div class="rounded-lg border border-gray-200 bg-white p-5"><h3 class="text-base font-semibold text-gray-900 mb-3"> </h3> <div class="space-y-2"></div></div>'), Xo = /* @__PURE__ */ N('<a target="_blank" rel="noopener noreferrer" class="text-xs text-indigo-600 hover:underline">View source</a>'), Zo = /* @__PURE__ */ N('<div class="flex items-center justify-center py-8"><svg class="animate-spin h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path></svg> <span class="ml-3 text-gray-500 text-sm">Loading code…</span></div>'), Qo = /* @__PURE__ */ N('<div class="text-sm text-red-600 mb-3"> </div> <button class="text-sm px-3 py-1.5 rounded border border-gray-300 text-gray-600 hover:bg-gray-100">Retry</button>', 1), el = /* @__PURE__ */ N('<div class="mt-3 pt-3 border-t border-gray-200 flex justify-between items-center text-xs text-gray-500"><span>Checksum: <code class="bg-gray-100 px-1.5 py-0.5 rounded"> </code></span> <span> </span></div>'), tl = /* @__PURE__ */ N('<div class="bg-gray-900 rounded-lg overflow-hidden"><pre class="p-4 overflow-x-auto text-sm"><code class="text-gray-100"> </code></pre></div> <!>', 1), rl = /* @__PURE__ */ N('<div class="text-center py-8 text-gray-400 text-sm">No code available for this proposal.</div>'), nl = /* @__PURE__ */ N('<button class="text-sm text-indigo-600 hover:text-indigo-800 mb-4 inline-flex items-center gap-1"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg> Back to proposals</button> <div class="space-y-5"><div><div class="flex items-center gap-3 mb-2 flex-wrap"><h2 class="text-2xl font-bold text-gray-900"> </h2> <span> </span></div> <div class="flex flex-wrap gap-4 text-sm text-gray-500"><span>Proposer: <code class="text-xs bg-gray-100 px-1.5 py-0.5 rounded"> </code></span> <span> </span> <!></div></div> <div class="rounded-lg border border-gray-200 bg-white p-5"><h3 class="text-base font-semibold text-gray-900 mb-2">Description</h3> <p class="text-gray-700 whitespace-pre-wrap text-sm leading-relaxed"> </p></div> <!> <div class="flex flex-wrap gap-3 items-center"><button class="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-900 text-white text-sm font-medium hover:bg-black disabled:opacity-50 transition-colors"><!></button> <span class="text-xs text-gray-400">Demo feature</span></div> <!> <!> <!> <div class="rounded-lg border border-gray-200 bg-gray-50 overflow-hidden"><div class="bg-gray-100 px-4 py-2.5 border-b flex items-center justify-between"><div class="flex items-center gap-2"><svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg> <h3 class="font-semibold text-sm text-gray-800">Proposal Code</h3></div> <div class="flex items-center gap-2"><!> <span class="bg-gray-200 text-gray-600 px-2 py-0.5 rounded text-xs"> </span></div></div> <div class="p-4"><!></div></div> <div class="text-xs text-gray-400 pb-4"><span class="font-medium">Security note:</span> Always review proposal code carefully before voting.</div></div>', 1), sl = /* @__PURE__ */ N('<div class="flex items-center justify-between mb-2"><span class="text-xs font-medium text-gray-400"></span> <button type="button" class="text-red-400 hover:text-red-600 text-xs">&times;</button></div>'), il = /* @__PURE__ */ N('<div class="w-4 h-4 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>'), al = /* @__PURE__ */ lr('<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>'), ol = /* @__PURE__ */ N('<div><!> <div class="space-y-2"><div><label class="block text-xs font-medium text-gray-600 mb-0.5">Code URL</label> <input type="url" placeholder="https://example.com/codex.py" class="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none disabled:bg-gray-50"/></div> <div class="grid grid-cols-2 gap-2"><div><label class="block text-xs font-medium text-gray-600 mb-0.5">Codex Name</label> <input placeholder="my_codex" class="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none disabled:bg-gray-50"/></div> <div><label class="block text-xs font-medium text-gray-600 mb-0.5">Checksum</label> <div class="flex gap-1"><input placeholder="Auto-calculated" class="flex-1 rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none disabled:bg-gray-50"/> <button type="button" class="px-2.5 py-2 rounded-lg border border-gray-300 text-gray-500 hover:bg-gray-50 disabled:opacity-40"><!></button></div></div></div></div></div>'), ll = /* @__PURE__ */ N('<div class="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div> Submitting…', 1), ul = /* @__PURE__ */ lr('<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> Submit Proposal', 1), fl = /* @__PURE__ */ N('<div class="rounded-lg border border-gray-200 bg-white p-6"><div class="mb-5"><h2 class="text-xl font-semibold text-gray-900 mb-1">Submit a Proposal</h2> <p class="text-sm text-gray-500">Propose a new codex or code change for the realm.</p></div> <form class="space-y-4"><div><label for="rt-title" class="block text-sm font-medium text-gray-700 mb-1">Title *</label> <input id="rt-title" type="text" placeholder="Proposal title" required="" class="w-full rounded-lg border border-gray-300 px-3.5 py-2.5 text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none disabled:bg-gray-50 disabled:text-gray-400"/></div> <div><label for="rt-desc" class="block text-sm font-medium text-gray-700 mb-1">Description *</label> <textarea id="rt-desc" placeholder="Describe what this proposal does and why…" rows="5" required="" class="w-full rounded-lg border border-gray-300 px-3.5 py-2.5 text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none resize-y disabled:bg-gray-50 disabled:text-gray-400"></textarea></div> <div><div class="flex items-center justify-between mb-2"><label class="block text-sm font-medium text-gray-700">Codex Files *</label> <button type="button" class="inline-flex items-center gap-1 px-2.5 py-1 text-xs rounded border border-gray-300 text-gray-600 hover:bg-gray-50 disabled:opacity-50"><svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg> Add codex</button></div> <p class="text-xs text-gray-400 mb-3">Provide URLs to Python codex files for governance review.</p> <!></div> <div class="bg-amber-50 border border-amber-200 rounded-lg p-4"><h4 class="font-medium text-amber-800 text-sm mb-1">Security Notice</h4> <ul class="text-xs text-amber-700 space-y-0.5"><li>• All proposals are publicly visible to realm members</li> <li>• Code is fetched and checksummed for integrity verification</li> <li>• Approved codices will be executed on the realm backend</li></ul></div> <div class="flex justify-end gap-3 pt-2"><button type="button" class="px-4 py-2 rounded-lg border border-gray-300 text-sm text-gray-700 hover:bg-gray-50 disabled:opacity-50">Cancel</button> <button type="submit" class="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-gray-900 text-white text-sm font-medium hover:bg-black disabled:opacity-40 disabled:cursor-not-allowed transition-colors"><!></button></div></form></div>'), dl = /* @__PURE__ */ N('<div class="w-3.5 h-3.5 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div> Loading…', 1), cl = /* @__PURE__ */ lr('<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg> Refresh', 1), vl = /* @__PURE__ */ N('<div class="flex items-center justify-center py-12"><svg class="animate-spin h-7 w-7 text-gray-400" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path></svg> <span class="ml-3 text-gray-500 text-sm">Loading proposals…</span></div>'), hl = /* @__PURE__ */ N('<div class="text-center py-12"><svg class="mx-auto h-10 w-10 text-gray-300 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path></svg> <p class="text-gray-500 text-sm">No proposals yet</p> <p class="text-gray-400 text-xs mt-1">Be the first to submit a proposal for this realm.</p></div>'), pl = /* @__PURE__ */ N('<div class="pt-2 border-t border-gray-100"><div class="flex justify-between items-center mb-2"><div class="flex gap-3 text-xs"><span class="text-green-600"> </span> <span class="text-red-600"> </span> <span class="text-gray-500"> </span></div></div> <div class="w-full bg-gray-200 rounded-full h-1.5 mb-2"><div class="bg-green-500 h-1.5 rounded-full"></div></div> <div class="flex gap-1"><button class="flex-1 py-1.5 rounded border border-green-300 text-xs text-green-700 hover:bg-green-50 disabled:opacity-50">Yes</button> <button class="flex-1 py-1.5 rounded border border-red-300 text-xs text-red-700 hover:bg-red-50 disabled:opacity-50">No</button> <button class="flex-1 py-1.5 rounded border border-gray-300 text-xs text-gray-600 hover:bg-gray-50 disabled:opacity-50">Abstain</button></div></div>'), _l = /* @__PURE__ */ N('<div class="p-4 hover:bg-gray-50 transition-colors"><div class="flex items-start justify-between mb-2"><div class="flex-1 min-w-0"><h3 class="text-sm font-medium text-gray-900 truncate"> </h3> <span> </span></div> <button class="ml-2 p-1.5 rounded border border-gray-300 text-gray-500 hover:bg-gray-100"><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg></button></div> <p class="text-xs text-gray-500 line-clamp-2 mb-2"> </p> <div class="flex items-center justify-between text-xs text-gray-400 mb-2"><code> </code> <span> </span></div> <!></div>'), gl = /* @__PURE__ */ N('<div class="flex items-center justify-between px-5 py-3 border-t border-gray-200"><span class="text-xs text-gray-500"> </span> <div class="flex items-center gap-2"><button class="inline-flex items-center gap-1 px-2.5 py-1 text-xs rounded border border-gray-300 text-gray-600 hover:bg-gray-50 disabled:opacity-40"><svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg> Prev</button> <span class="text-xs text-gray-500"> </span> <button class="inline-flex items-center gap-1 px-2.5 py-1 text-xs rounded border border-gray-300 text-gray-600 hover:bg-gray-50 disabled:opacity-40">Next <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></button></div></div>'), bl = /* @__PURE__ */ N('<div class="divide-y divide-gray-100"></div> <!>', 1), xl = /* @__PURE__ */ N('<div class="rounded-lg border border-gray-200 bg-white"><div class="flex items-center justify-between px-5 py-3 border-b border-gray-200"><div class="flex gap-1"><button><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path></svg> Proposals</button> <button class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-100"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg> Submit Proposal</button></div> <button class="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-50 disabled:opacity-50"><!></button></div> <!></div>'), ml = /* @__PURE__ */ N('<div class="w-full px-6 pt-8 max-w-none"><div class="mb-6"><h1 class="text-3xl font-bold text-gray-900 mb-1">Voting</h1> <p class="text-gray-500 text-sm">Create proposals, review code changes, and vote on governance decisions.</p></div> <!> <!> <!></div>');
function yl(e, t) {
  Js(t, !0);
  let r = /* @__PURE__ */ O(Wt([])), n = /* @__PURE__ */ O(!0), s = /* @__PURE__ */ O(""), i = /* @__PURE__ */ O("list"), u = /* @__PURE__ */ O(""), d = /* @__PURE__ */ O(""), a = /* @__PURE__ */ O(Wt([{ url: "", name: "", checksum: "", calculating: !1 }])), f = /* @__PURE__ */ O(!1), p = /* @__PURE__ */ O(""), v = /* @__PURE__ */ O(null), x = /* @__PURE__ */ O(""), b = /* @__PURE__ */ O(""), w = /* @__PURE__ */ O(!1), C = /* @__PURE__ */ O(""), _ = /* @__PURE__ */ O(!1), S = /* @__PURE__ */ O(""), H = /* @__PURE__ */ O(""), F = /* @__PURE__ */ O(""), U = /* @__PURE__ */ O(1);
  const fe = 10;
  let je = /* @__PURE__ */ Br(() => [...o(r)].sort((c, m) => (m.created_at || 0) - (c.created_at || 0))), ie = /* @__PURE__ */ Br(() => Math.max(1, Math.ceil(o(je).length / fe))), Qe = /* @__PURE__ */ Br(() => o(je).slice((o(U) - 1) * fe, o(U) * fe));
  _i(() => {
    o(r).length >= 0 && g(U, 1);
  });
  async function Le(c, m = {}) {
    const A = await t.ctx.callSync(c, m);
    return typeof A == "string" ? JSON.parse(A) : A;
  }
  async function $(c, m = {}) {
    const A = await t.ctx.callAsync(c, m);
    return typeof A == "string" ? JSON.parse(A) : A;
  }
  async function Dt() {
    g(n, !0), g(s, "");
    try {
      const c = await Le("get_proposals");
      c?.success ? g(r, c.data?.proposals ?? c.data ?? [], !0) : c?.data ? g(r, Array.isArray(c.data) ? c.data : c.data.proposals ?? [], !0) : Array.isArray(c) ? g(r, c, !0) : g(s, c?.error || "Failed to load proposals", !0);
    } catch (c) {
      g(s, c?.message || String(c), !0);
    } finally {
      g(n, !1);
    }
  }
  async function Mn(c) {
    g(v, c, !0), g(i, "detail"), g(x, ""), g(b, ""), g(C, ""), g(S, ""), g(H, ""), await _s(c);
  }
  async function _s(c) {
    g(w, !0), g(C, "");
    try {
      const m = await $("fetch_proposal_code", { proposal_id: c.id });
      m?.success ? (g(x, m.data?.code ?? "", !0), g(b, m.data?.checksum ?? "", !0)) : g(C, m?.error || "Failed to fetch code", !0);
    } catch (m) {
      g(C, m?.message || String(m), !0);
    } finally {
      g(w, !1);
    }
  }
  async function ur(c, m) {
    g(F, c + m), g(s, "");
    try {
      const A = t.ctx.principal || "anonymous", re = await Le("cast_vote", { proposal_id: c, vote: m, voter: A });
      if (re?.success) {
        if (o(v)?.id === c) {
          const oe = await Le("get_proposal", { proposal_id: c });
          oe?.success ? g(v, oe.data ?? oe, !0) : g(v, oe?.data ?? o(v), !0);
        }
        await Dt();
      } else
        g(s, re?.error || "Failed to cast vote", !0);
    } catch (A) {
      g(s, A?.message || String(A), !0);
    } finally {
      g(F, "");
    }
  }
  async function Ri() {
    if (o(v)) {
      g(_, !0), g(H, ""), g(S, "");
      try {
        const c = await $("demo_approve_and_execute", { proposal_id: o(v).id });
        c?.success ? (g(S, c.data?.message || "Proposal approved and executed", !0), c.data?.proposal && g(v, { ...o(v), ...c.data.proposal }, !0), await Dt()) : g(H, c?.error || "Failed to approve and execute", !0);
      } catch (c) {
        g(H, c?.message || String(c), !0);
      } finally {
        g(_, !1);
      }
    }
  }
  function Di(c) {
    try {
      const m = new URL(c).pathname.split("/").pop() || "";
      return m.endsWith(".py") ? m.slice(0, -3) : m;
    } catch {
      return "";
    }
  }
  function rn(c) {
    try {
      return new URL(c), !0;
    } catch {
      return !1;
    }
  }
  function ji(c) {
    const m = o(a)[c];
    m.url && rn(m.url) && !m.name && (o(a)[c].name = Di(m.url));
  }
  function Li() {
    g(
      a,
      [
        ...o(a),
        { url: "", name: "", checksum: "", calculating: !1 }
      ],
      !0
    );
  }
  function Fi(c) {
    o(a).length <= 1 || g(a, o(a).filter((m, A) => A !== c), !0);
  }
  async function Oi(c) {
    const m = o(a)[c];
    if (!m.url.trim() || !rn(m.url)) {
      g(s, "Please enter a valid URL");
      return;
    }
    o(a)[c].calculating = !0, g(s, "");
    try {
      const A = await $("fetch_proposal_code", { code_url: m.url.trim() });
      A?.success ? o(a)[c].checksum = A.data?.checksum ?? "" : g(s, A?.error || "Failed to fetch checksum", !0);
    } catch (A) {
      g(s, A?.message || String(A), !0);
    } finally {
      o(a)[c].calculating = !1;
    }
  }
  function Bi() {
    return o(a).some((c) => c.url.trim() && rn(c.url.trim()));
  }
  async function Ii() {
    if (!o(u).trim() || !o(d).trim()) {
      g(s, "Title and description are required");
      return;
    }
    const c = o(a).filter((m) => m.url.trim() && m.name.trim());
    if (c.length === 0) {
      g(s, "At least one codex entry with URL and name is required");
      return;
    }
    for (const m of c)
      if (!rn(m.url)) {
        g(s, "One or more codex URLs are invalid");
        return;
      }
    g(f, !0), g(s, ""), g(p, "");
    try {
      const m = {
        title: o(u).trim(),
        description: o(d).trim(),
        proposer: t.ctx.principal || "anonymous"
      };
      c.length === 1 ? (m.code_url = c[0].url.trim(), m.code_checksum = c[0].checksum.trim(), m.codex_name = c[0].name.trim()) : m.codices = c.map((re) => ({
        url: re.url.trim(),
        name: re.name.trim(),
        checksum: re.checksum.trim()
      }));
      const A = await Le("submit_proposal", m);
      A?.success ? (g(p, "Proposal submitted successfully!"), g(u, ""), g(d, ""), g(a, [{ url: "", name: "", checksum: "", calculating: !1 }], !0), await Dt(), setTimeout(
        () => {
          g(p, ""), g(i, "list");
        },
        1500
      )) : g(s, A?.error || "Failed to submit proposal", !0);
    } catch (m) {
      g(s, m?.message || String(m), !0);
    } finally {
      g(f, !1);
    }
  }
  function zi() {
    g(u, ""), g(d, ""), g(a, [{ url: "", name: "", checksum: "", calculating: !1 }], !0), g(s, ""), g(p, ""), g(i, "list");
  }
  function gs(c) {
    if (!c) return "bg-gray-100 text-gray-700";
    const m = c.toLowerCase();
    return m === "voting" ? "bg-emerald-100 text-emerald-700" : m === "pending_review" || m === "pending_vote" ? "bg-amber-100 text-amber-700" : m === "accepted" || m === "executed" || m === "passed" ? "bg-green-100 text-green-700" : m === "executing" ? "bg-purple-100 text-purple-700" : m === "rejected" || m === "failed" ? "bg-red-100 text-red-700" : "bg-gray-100 text-gray-700";
  }
  function bs(c) {
    return c ? c.replace(/_/g, " ").replace(/\b\w/g, (m) => m.toUpperCase()) : "Unknown";
  }
  function Vi(c) {
    if (!c && c !== 0) return "N/A";
    const m = typeof c == "number" ? new Date(c * 1e3) : new Date(c);
    return isNaN(m.getTime()) ? "N/A" : m.toLocaleDateString();
  }
  function xs(c) {
    if (!c && c !== 0) return "N/A";
    const m = typeof c == "number" ? new Date(c * 1e3) : new Date(c);
    return isNaN(m.getTime()) ? "N/A" : m.toLocaleString();
  }
  function ms(c) {
    return !c || c.length <= 16 ? c || "unknown" : c.slice(0, 8) + "..." + c.slice(-6);
  }
  function ys(c) {
    try {
      return (typeof c.metadata == "string" ? JSON.parse(c.metadata) : c.metadata || {}).codices || [];
    } catch {
      return [];
    }
  }
  To(() => {
    Dt();
  });
  var ws = ml(), ks = y(h(ws), 2);
  {
    var Ui = (c) => {
      var m = Po(), A = y(h(m), 2), re = h(A), oe = y(A, 2);
      q(() => D(re, o(s))), K("click", oe, () => g(s, "")), E(c, m);
    };
    B(ks, (c) => {
      o(s) && c(Ui);
    });
  }
  var Es = y(ks, 2);
  {
    var qi = (c) => {
      var m = Ro(), A = y(h(m), 2), re = h(A);
      q(() => D(re, o(p))), E(c, m);
    };
    B(Es, (c) => {
      o(p) && c(qi);
    });
  }
  var Hi = y(Es, 2);
  {
    var Yi = (c) => {
      var m = nl(), A = on(m), re = y(A, 2), oe = h(re), jt = h(oe), et = h(jt), fr = h(et), Lt = y(et, 2), dr = h(Lt), Pr = y(jt, 2), cr = h(Pr), Ft = y(h(cr)), vr = h(Ft), W = y(cr, 2), ve = h(W), hr = y(W, 2);
      {
        var X = (k) => {
          var R = Do(), G = h(R);
          q((ae) => D(G, `Deadline: ${ae ?? ""}`), [
            () => xs(o(v).voting_deadline)
          ]), E(k, R);
        };
        B(hr, (k) => {
          o(v).voting_deadline && k(X);
        });
      }
      var ee = y(oe, 2), ne = y(h(ee), 2), I = h(ne), Fe = y(ee, 2);
      {
        var ct = (k) => {
          var R = qo(), G = y(h(R), 2), ae = h(G), xe = h(ae), bt = h(xe), xt = y(ae, 2), st = h(xt), mt = h(st), yt = y(xt, 2), gr = h(yt), zt = h(gr), jr = y(yt, 2), Lr = h(jr), Fr = h(Lr), Ye = y(G, 2);
          {
            var sn = (Vt) => {
              var Or = Lo(), Ut = h(Or), Dn = y(h(Ut), 2), jn = h(Dn), an = y(Ut, 2), br = h(an), Ln = y(an, 2);
              {
                var Fn = (qt) => {
                  var wt = jo(), On = h(wt);
                  q((Bn) => D(On, `Threshold: ${Bn ?? ""}%`), [
                    () => (o(v).required_threshold * 100).toFixed(0)
                  ]), E(qt, wt);
                };
                B(Ln, (qt) => {
                  o(v).required_threshold && qt(Fn);
                });
              }
              q(
                (qt, wt) => {
                  D(jn, `${qt ?? ""}%`), Os(br, `width: ${wt ?? ""}%`);
                },
                [
                  () => ((o(v).votes?.yes ?? 0) / Math.max(o(v).total_voters, 1) * 100).toFixed(1),
                  () => (o(v).votes?.yes ?? 0) / Math.max(o(v).total_voters, 1) * 100
                ]
              ), E(Vt, Or);
            };
            B(Ye, (Vt) => {
              o(v).total_voters > 0 && Vt(sn);
            });
          }
          var Pn = y(Ye, 2);
          {
            var Rn = (Vt) => {
              var Or = Uo(), Ut = h(Or), Dn = h(Ut);
              {
                var jn = (Z) => {
                  var Be = Fo();
                  E(Z, Be);
                }, an = (Z) => {
                  var Be = Oo();
                  E(Z, Be);
                };
                B(Dn, (Z) => {
                  o(F) === o(v).id + "yes" ? Z(jn) : Z(an, -1);
                });
              }
              var br = y(Ut, 2), Ln = h(br);
              {
                var Fn = (Z) => {
                  var Be = Bo();
                  E(Z, Be);
                }, qt = (Z) => {
                  var Be = Io();
                  E(Z, Be);
                };
                B(Ln, (Z) => {
                  o(F) === o(v).id + "no" ? Z(Fn) : Z(qt, -1);
                });
              }
              var wt = y(br, 2), On = h(wt);
              {
                var Bn = (Z) => {
                  var Be = zo();
                  E(Z, Be);
                }, Ki = (Z) => {
                  var Be = Vo();
                  E(Z, Be);
                };
                B(On, (Z) => {
                  o(F) === o(v).id + "abstain" ? Z(Bn) : Z(Ki, -1);
                });
              }
              q(() => {
                Ut.disabled = !!o(F), br.disabled = !!o(F), wt.disabled = !!o(F);
              }), K("click", Ut, () => ur(o(v).id, "yes")), K("click", br, () => ur(o(v).id, "no")), K("click", wt, () => ur(o(v).id, "abstain")), E(Vt, Or);
            };
            B(Pn, (Vt) => {
              o(v).status === "voting" && Vt(Rn);
            });
          }
          q(() => {
            D(bt, o(v).votes?.yes ?? 0), D(mt, o(v).votes?.no ?? 0), D(zt, o(v).votes?.abstain ?? 0), D(Fr, o(v).total_voters ?? 0);
          }), E(k, R);
        };
        B(Fe, (k) => {
          (o(v).status === "voting" || o(v).total_voters > 0) && k(ct);
        });
      }
      var tt = y(Fe, 2), ge = h(tt), rt = h(ge);
      {
        var Oe = (k) => {
          var R = Ho();
          E(k, R);
        }, vt = (k) => {
          var R = Yo();
          E(k, R);
        };
        B(rt, (k) => {
          o(_) ? k(Oe) : k(vt, -1);
        });
      }
      var nt = y(tt, 2);
      {
        var Ot = (k) => {
          var R = Wo(), G = h(R);
          q(() => D(G, o(H))), E(k, R);
        };
        B(nt, (k) => {
          o(H) && k(Ot);
        });
      }
      var ht = y(nt, 2);
      {
        var pr = (k) => {
          var R = Go(), G = y(h(R));
          q(() => D(G, ` ${o(S) ?? ""}`)), E(k, R);
        };
        B(ht, (k) => {
          o(S) && k(pr);
        });
      }
      var pt = y(ht, 2);
      {
        var Rr = (k) => {
          const R = /* @__PURE__ */ Br(() => ys(o(v)));
          var G = $o(), ae = h(G), xe = h(ae), bt = y(ae, 2);
          qn(bt, 21, () => o(R), Un, (xt, st) => {
            var mt = Jo(), yt = h(mt), gr = h(yt), zt = y(yt, 2), jr = h(zt), Lr = y(zt, 2);
            {
              var Fr = (Ye) => {
                var sn = Ko(), Pn = h(sn);
                q((Rn) => D(Pn, `${Rn ?? ""}…`), [() => o(st).checksum.slice(0, 20)]), E(Ye, sn);
              };
              B(Lr, (Ye) => {
                o(st).checksum && Ye(Fr);
              });
            }
            q(
              (Ye) => {
                D(gr, o(st).name), Et(zt, "href", o(st).url), D(jr, Ye);
              },
              [() => o(st).url.split("/").pop()]
            ), E(xt, mt);
          }), q(() => D(xe, `Codices (${o(R).length ?? ""})`)), E(k, G);
        }, _t = /* @__PURE__ */ Br(() => ys(o(v)).length > 1);
        B(pt, (k) => {
          o(_t) && k(Rr);
        });
      }
      var Bt = y(pt, 2), _r = h(Bt), Dr = y(h(_r), 2), He = h(Dr);
      {
        var z = (k) => {
          var R = Xo();
          q(() => Et(R, "href", o(v).code_url)), E(k, R);
        };
        B(He, (k) => {
          o(v).code_url && k(z);
        });
      }
      var be = y(He, 2), gt = h(be), It = y(_r, 2), Sn = h(It);
      {
        var nn = (k) => {
          var R = Zo();
          E(k, R);
        }, An = (k) => {
          var R = Qo(), G = on(R), ae = h(G), xe = y(G, 2);
          q(() => D(ae, o(C))), K("click", xe, () => _s(o(v))), E(k, R);
        }, Tn = (k) => {
          var R = tl(), G = on(R), ae = h(G), xe = h(ae), bt = h(xe), xt = y(G, 2);
          {
            var st = (mt) => {
              var yt = el(), gr = h(yt), zt = y(h(gr)), jr = h(zt), Lr = y(gr, 2), Fr = h(Lr);
              q(
                (Ye) => {
                  D(jr, o(b)), D(Fr, `${Ye ?? ""} lines`);
                },
                [() => o(x).split(`
`).length]
              ), E(mt, yt);
            };
            B(xt, (mt) => {
              o(b) && mt(st);
            });
          }
          q(() => D(bt, o(x))), E(k, R);
        }, Nn = (k) => {
          var R = rl();
          E(k, R);
        };
        B(Sn, (k) => {
          o(w) ? k(nn) : o(C) ? k(An, 1) : o(x) ? k(Tn, 2) : k(Nn, -1);
        });
      }
      q(
        (k, R, G, ae, xe) => {
          D(fr, o(v).title), un(Lt, 1, `px-2.5 py-0.5 rounded-full text-xs font-semibold ${k ?? ""}`), D(dr, R), D(vr, G), D(ve, `Created: ${ae ?? ""}`), D(I, o(v).description), ge.disabled = o(_), D(gt, xe);
        },
        [
          () => gs(o(v).status),
          () => bs(o(v).status),
          () => ms(o(v).proposer),
          () => xs(o(v).created_at),
          () => o(v).code_url ? o(v).code_url.split("/").pop() : "proposal.py"
        ]
      ), K("click", A, () => {
        g(i, "list"), g(v, null);
      }), K("click", ge, Ri), E(c, m);
    }, Wi = (c) => {
      var m = fl(), A = y(h(m), 2), re = h(A), oe = y(h(re), 2), jt = y(re, 2), et = y(h(jt), 2), fr = y(jt, 2), Lt = h(fr), dr = y(h(Lt), 2), Pr = y(Lt, 4);
      qn(Pr, 17, () => o(a), Un, (X, ee, ne) => {
        var I = ol(), Fe = h(I);
        {
          var ct = (z) => {
            var be = sl(), gt = h(be);
            gt.textContent = `Codex ${ne + 1}`;
            var It = y(gt, 2);
            q(() => It.disabled = o(f)), K("click", It, () => Fi(ne)), E(z, be);
          };
          B(Fe, (z) => {
            o(a).length > 1 && z(ct);
          });
        }
        var tt = y(Fe, 2), ge = h(tt), rt = h(ge);
        Et(rt, "for", `codex-url-${ne}`);
        var Oe = y(rt, 2);
        Et(Oe, "id", `codex-url-${ne}`);
        var vt = y(ge, 2), nt = h(vt), Ot = h(nt);
        Et(Ot, "for", `codex-name-${ne}`);
        var ht = y(Ot, 2);
        Et(ht, "id", `codex-name-${ne}`);
        var pr = y(nt, 2), pt = h(pr);
        Et(pt, "for", `codex-cksum-${ne}`);
        var Rr = y(pt, 2), _t = h(Rr);
        Et(_t, "id", `codex-cksum-${ne}`);
        var Bt = y(_t, 2), _r = h(Bt);
        {
          var Dr = (z) => {
            var be = il();
            E(z, be);
          }, He = (z) => {
            var be = al();
            E(z, be);
          };
          B(_r, (z) => {
            o(ee).calculating ? z(Dr) : z(He, -1);
          });
        }
        q(
          (z) => {
            un(I, 1, `border border-gray-200 rounded-lg p-3 mb-3 ${o(a).length > 1 ? "bg-gray-50" : ""}`), Oe.disabled = o(f), ht.disabled = o(f), _t.disabled = o(f) || o(ee).calculating, Bt.disabled = z;
          },
          [
            () => o(f) || o(ee).calculating || !o(ee).url.trim()
          ]
        ), K("change", Oe, () => ji(ne)), zr(Oe, () => o(ee).url, (z) => o(ee).url = z), zr(ht, () => o(ee).name, (z) => o(ee).name = z), zr(_t, () => o(ee).checksum, (z) => o(ee).checksum = z), K("click", Bt, () => Oi(ne)), E(X, I);
      });
      var cr = y(fr, 4), Ft = h(cr), vr = y(Ft, 2), W = h(vr);
      {
        var ve = (X) => {
          var ee = ll();
          E(X, ee);
        }, hr = (X) => {
          var ee = ul();
          E(X, ee);
        };
        B(W, (X) => {
          o(f) ? X(ve) : X(hr, -1);
        });
      }
      q(
        (X) => {
          oe.disabled = o(f), et.disabled = o(f), dr.disabled = o(f), Ft.disabled = o(f), vr.disabled = X;
        },
        [
          () => o(f) || !o(u).trim() || !o(d).trim() || !Bi()
        ]
      ), fo("submit", A, (X) => {
        X.preventDefault(), Ii();
      }), zr(oe, () => o(u), (X) => g(u, X)), zr(et, () => o(d), (X) => g(d, X)), K("click", dr, Li), K("click", Ft, zi), E(c, m);
    }, Gi = (c) => {
      var m = xl(), A = h(m), re = h(A), oe = h(re), jt = y(oe, 2), et = y(re, 2), fr = h(et);
      {
        var Lt = (W) => {
          var ve = dl();
          E(W, ve);
        }, dr = (W) => {
          var ve = cl();
          E(W, ve);
        };
        B(fr, (W) => {
          o(n) ? W(Lt) : W(dr, -1);
        });
      }
      var Pr = y(A, 2);
      {
        var cr = (W) => {
          var ve = vl();
          E(W, ve);
        }, Ft = (W) => {
          var ve = hl();
          E(W, ve);
        }, vr = (W) => {
          var ve = bl(), hr = on(ve);
          qn(hr, 21, () => o(Qe), Un, (ne, I) => {
            var Fe = _l(), ct = h(Fe), tt = h(ct), ge = h(tt), rt = h(ge), Oe = y(ge, 2), vt = h(Oe), nt = y(tt, 2), Ot = y(ct, 2), ht = h(Ot), pr = y(Ot, 2), pt = h(pr), Rr = h(pt), _t = y(pt, 2), Bt = h(_t), _r = y(pr, 2);
            {
              var Dr = (He) => {
                var z = pl(), be = h(z), gt = h(be), It = h(gt), Sn = h(It), nn = y(It, 2), An = h(nn), Tn = y(nn, 2), Nn = h(Tn), k = y(be, 2), R = h(k), G = y(k, 2), ae = h(G), xe = y(ae, 2), bt = y(xe, 2);
                q(
                  (xt) => {
                    D(Sn, `Y:${o(I).votes?.yes ?? 0 ?? ""}`), D(An, `N:${o(I).votes?.no ?? 0 ?? ""}`), D(Nn, `A:${o(I).votes?.abstain ?? 0 ?? ""}`), Os(R, `width: ${xt ?? ""}%`), ae.disabled = !!o(F), xe.disabled = !!o(F), bt.disabled = !!o(F);
                  },
                  [
                    () => (o(I).votes?.yes ?? 0) / Math.max(o(I).total_voters, 1) * 100
                  ]
                ), K("click", ae, () => ur(o(I).id, "yes")), K("click", xe, () => ur(o(I).id, "no")), K("click", bt, () => ur(o(I).id, "abstain")), E(He, z);
              };
              B(_r, (He) => {
                o(I).status === "voting" && He(Dr);
              });
            }
            q(
              (He, z, be, gt) => {
                D(rt, o(I).title), un(Oe, 1, `inline-flex mt-1 px-2 py-0.5 rounded-full text-xs font-semibold ${He ?? ""}`), D(vt, z), D(ht, o(I).description), D(Rr, be), D(Bt, gt);
              },
              [
                () => gs(o(I).status),
                () => bs(o(I).status),
                () => ms(o(I).proposer),
                () => Vi(o(I).created_at)
              ]
            ), K("click", nt, () => Mn(o(I))), E(ne, Fe);
          });
          var X = y(hr, 2);
          {
            var ee = (ne) => {
              var I = gl(), Fe = h(I), ct = h(Fe), tt = y(Fe, 2), ge = h(tt), rt = y(ge, 2), Oe = h(rt), vt = y(rt, 2);
              q(
                (nt) => {
                  D(ct, `${(o(U) - 1) * fe + 1}–${nt ?? ""} of ${o(je).length ?? ""}`), ge.disabled = o(U) <= 1, D(Oe, `${o(U) ?? ""} / ${o(ie) ?? ""}`), vt.disabled = o(U) >= o(ie);
                },
                [
                  () => Math.min(o(U) * fe, o(je).length)
                ]
              ), K("click", ge, () => Ns(U, -1)), K("click", vt, () => Ns(U)), E(ne, I);
            };
            B(X, (ne) => {
              o(ie) > 1 && ne(ee);
            });
          }
          E(W, ve);
        };
        B(Pr, (W) => {
          o(n) ? W(cr) : o(r).length === 0 ? W(Ft, 1) : W(vr, -1);
        });
      }
      q(() => {
        un(oe, 1, `inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium ${o(i) === "list" ? "bg-gray-900 text-white" : "text-gray-600 hover:bg-gray-100"}`), et.disabled = o(n);
      }), K("click", oe, () => g(i, "list")), K("click", jt, () => g(i, "form")), K("click", et, Dt), E(c, m);
    };
    B(Hi, (c) => {
      o(i) === "detail" && o(v) ? c(Yi) : o(i) === "form" ? c(Wi, 1) : c(Gi, -1);
    });
  }
  E(e, ws), $s();
}
co(["click", "change"]);
function El(e, t) {
  const r = _o(yl, { target: e, props: { ctx: t } });
  return {
    unmount() {
      try {
        bo(r);
      } catch {
      }
    }
  };
}
export {
  El as default
};
