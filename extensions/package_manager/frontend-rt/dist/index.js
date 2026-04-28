var Ga = Object.defineProperty;
var yi = (e) => {
  throw TypeError(e);
};
var Wa = (e, t, r) => t in e ? Ga(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var tt = (e, t, r) => Wa(e, typeof t != "symbol" ? t + "" : t, r), Nn = (e, t, r) => t.has(e) || yi("Cannot " + r);
var s = (e, t, r) => (Nn(e, t, "read from private field"), r ? r.call(e) : t.get(e)), I = (e, t, r) => t.has(e) ? yi("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), O = (e, t, r, n) => (Nn(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r), K = (e, t, r) => (Nn(e, t, "access private method"), r);
var Pi = Array.isArray, Xa = Array.prototype.indexOf, xr = Array.prototype.includes, dn = Array.from, Za = Object.defineProperty, Nr = Object.getOwnPropertyDescriptor, Qa = Object.prototype, $a = Array.prototype, es = Object.getPrototypeOf, mi = Object.isExtensible;
const ts = () => {
};
function rs(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function Oi() {
  var e, t, r = new Promise((n, i) => {
    e = n, t = i;
  });
  return { promise: r, resolve: e, reject: t };
}
const ke = 2, br = 4, cn = 8, Di = 1 << 24, ct = 16, st = 32, Ut = 64, Ln = 128, Ke = 512, oe = 1024, me = 2048, vt = 4096, Se = 8192, Ge = 16384, ar = 32768, Bn = 1 << 25, yr = 65536, Un = 1 << 17, ns = 1 << 18, Er = 1 << 19, is = 1 << 20, Et = 1 << 25, rr = 65536, sn = 1 << 21, Or = 1 << 22, Lt = 1 << 23, Zr = Symbol("$state"), bt = new class extends Error {
  constructor() {
    super(...arguments);
    tt(this, "name", "StaleReactionError");
    tt(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
function as() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function ss(e, t, r) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function os(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function ls() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function fs(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function us() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function ds() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function cs() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function vs() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function hs() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
const gs = 1, _s = 2, ps = 16, xs = 1, bs = 2, ce = Symbol(), ys = "http://www.w3.org/1999/xhtml", ms = "http://www.w3.org/2000/svg", ks = "http://www.w3.org/1998/Math/MathML";
function ws() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function Es() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function Li(e) {
  return e === this.v;
}
function Ss(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Bi(e) {
  return !Ss(e, this.v);
}
let ze = null;
function mr(e) {
  ze = e;
}
function Ui(e, t = !1, r) {
  ze = {
    p: ze,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    r: (
      /** @type {Effect} */
      D
    ),
    l: null
  };
}
function zi(e) {
  var t = (
    /** @type {ComponentContext} */
    ze
  ), r = t.e;
  if (r !== null) {
    t.e = null;
    for (var n of r)
      oa(n);
  }
  return t.i = !0, ze = t.p, /** @type {T} */
  {};
}
function ji() {
  return !0;
}
let Yt = [];
function Vi() {
  var e = Yt;
  Yt = [], rs(e);
}
function cr(e) {
  if (Yt.length === 0 && !Fr) {
    var t = Yt;
    queueMicrotask(() => {
      t === Yt && Vi();
    });
  }
  Yt.push(e);
}
function Ts() {
  for (; Yt.length > 0; )
    Vi();
}
function qi(e) {
  var t = D;
  if (t === null)
    return B.f |= Lt, e;
  if ((t.f & ar) === 0 && (t.f & br) === 0)
    throw e;
  Ot(e, t);
}
function Ot(e, t) {
  for (; t !== null; ) {
    if ((t.f & Ln) !== 0) {
      if ((t.f & ar) === 0)
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
const Cs = -7169;
function te(e, t) {
  e.f = e.f & Cs | t;
}
function Xn(e) {
  (e.f & Ke) !== 0 || e.deps === null ? te(e, oe) : te(e, vt);
}
function Hi(e) {
  if (e !== null)
    for (const t of e)
      (t.f & ke) === 0 || (t.f & rr) === 0 || (t.f ^= rr, Hi(
        /** @type {Derived} */
        t.deps
      ));
}
function Yi(e, t, r) {
  (e.f & me) !== 0 ? t.add(e) : (e.f & vt) !== 0 && r.add(e), Hi(e.deps), te(e, oe);
}
const Ht = /* @__PURE__ */ new Set();
let N = null, it = null, zn = null, Fr = !1, Fn = !1, dr = null, Qr = null;
var ki = 0;
let As = 1;
var vr, hr, Gt, yt, ft, Br, Le, Ur, Ft, mt, ut, gr, _r, Wt, ie, $r, Ji, en, jn, tn, Is;
const ln = class ln {
  constructor() {
    I(this, ie);
    tt(this, "id", As++);
    /**
     * The current values of any signals that are updated in this batch.
     * Tuple format: [value, is_derived] (note: is_derived is false for deriveds, too, if they were overridden via assignment)
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Value, [any, boolean]>}
     */
    tt(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any signals (sources and deriveds) that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Value, any>}
     */
    tt(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<(batch: Batch) => void>}
     */
    I(this, vr, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    I(this, hr, /* @__PURE__ */ new Set());
    /**
     * Callbacks that should run only when a fork is committed.
     * @type {Set<(batch: Batch) => void>}
     */
    I(this, Gt, /* @__PURE__ */ new Set());
    /**
     * Async effects that are currently in flight
     * @type {Map<Effect, number>}
     */
    I(this, yt, /* @__PURE__ */ new Map());
    /**
     * Async effects that are currently in flight, _not_ inside a pending boundary
     * @type {Map<Effect, number>}
     */
    I(this, ft, /* @__PURE__ */ new Map());
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    I(this, Br, null);
    /**
     * The root effects that need to be flushed
     * @type {Effect[]}
     */
    I(this, Le, []);
    /**
     * Effects created while this batch was active.
     * @type {Effect[]}
     */
    I(this, Ur, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    I(this, Ft, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    I(this, mt, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    I(this, ut, /* @__PURE__ */ new Map());
    /**
     * Inverse of #skipped_branches which we need to tell prior batches to unskip them when committing
     * @type {Set<Effect>}
     */
    I(this, gr, /* @__PURE__ */ new Set());
    tt(this, "is_fork", !1);
    I(this, _r, !1);
    /** @type {Set<Batch>} */
    I(this, Wt, /* @__PURE__ */ new Set());
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(t) {
    s(this, ut).has(t) || s(this, ut).set(t, { d: [], m: [] }), s(this, gr).delete(t);
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   * @param {(e: Effect) => void} callback
   */
  unskip_effect(t, r = (n) => this.schedule(n)) {
    var n = s(this, ut).get(t);
    if (n) {
      s(this, ut).delete(t);
      for (var i of n.d)
        te(i, me), r(i);
      for (i of n.m)
        te(i, vt), r(i);
    }
    s(this, gr).add(t);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Value} source
   * @param {any} value
   * @param {boolean} [is_derived]
   */
  capture(t, r, n = !1) {
    t.v !== ce && !this.previous.has(t) && this.previous.set(t, t.v), (t.f & Lt) === 0 && (this.current.set(t, [r, n]), it?.set(t, r)), this.is_fork || (t.v = r);
  }
  activate() {
    N = this;
  }
  deactivate() {
    N = null, it = null;
  }
  flush() {
    try {
      Fn = !0, N = this, K(this, ie, en).call(this);
    } finally {
      ki = 0, zn = null, dr = null, Qr = null, Fn = !1, N = null, it = null, $t.clear();
    }
  }
  discard() {
    for (const t of s(this, hr)) t(this);
    s(this, hr).clear(), s(this, Gt).clear(), Ht.delete(this);
  }
  /**
   * @param {Effect} effect
   */
  register_created_effect(t) {
    s(this, Ur).push(t);
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  increment(t, r) {
    let n = s(this, yt).get(r) ?? 0;
    if (s(this, yt).set(r, n + 1), t) {
      let i = s(this, ft).get(r) ?? 0;
      s(this, ft).set(r, i + 1);
    }
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   * @param {boolean} skip - whether to skip updates (because this is triggered by a stale reaction)
   */
  decrement(t, r, n) {
    let i = s(this, yt).get(r) ?? 0;
    if (i === 1 ? s(this, yt).delete(r) : s(this, yt).set(r, i - 1), t) {
      let a = s(this, ft).get(r) ?? 0;
      a === 1 ? s(this, ft).delete(r) : s(this, ft).set(r, a - 1);
    }
    s(this, _r) || n || (O(this, _r, !0), cr(() => {
      O(this, _r, !1), this.flush();
    }));
  }
  /**
   * @param {Set<Effect>} dirty_effects
   * @param {Set<Effect>} maybe_dirty_effects
   */
  transfer_effects(t, r) {
    for (const n of t)
      s(this, Ft).add(n);
    for (const n of r)
      s(this, mt).add(n);
    t.clear(), r.clear();
  }
  /** @param {(batch: Batch) => void} fn */
  oncommit(t) {
    s(this, vr).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    s(this, hr).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  on_fork_commit(t) {
    s(this, Gt).add(t);
  }
  run_fork_commit_callbacks() {
    for (const t of s(this, Gt)) t(this);
    s(this, Gt).clear();
  }
  settled() {
    return (s(this, Br) ?? O(this, Br, Oi())).promise;
  }
  static ensure() {
    if (N === null) {
      const t = N = new ln();
      Fn || (Ht.add(N), Fr || cr(() => {
        N === t && t.flush();
      }));
    }
    return N;
  }
  apply() {
    {
      it = null;
      return;
    }
  }
  /**
   *
   * @param {Effect} effect
   */
  schedule(t) {
    if (zn = t, t.b?.is_pending && (t.f & (br | cn | Di)) !== 0 && (t.f & ar) === 0) {
      t.b.defer_effect(t);
      return;
    }
    for (var r = t; r.parent !== null; ) {
      r = r.parent;
      var n = r.f;
      if (dr !== null && r === D && (B === null || (B.f & ke) === 0))
        return;
      if ((n & (Ut | st)) !== 0) {
        if ((n & oe) === 0)
          return;
        r.f ^= oe;
      }
    }
    s(this, Le).push(r);
  }
};
vr = new WeakMap(), hr = new WeakMap(), Gt = new WeakMap(), yt = new WeakMap(), ft = new WeakMap(), Br = new WeakMap(), Le = new WeakMap(), Ur = new WeakMap(), Ft = new WeakMap(), mt = new WeakMap(), ut = new WeakMap(), gr = new WeakMap(), _r = new WeakMap(), Wt = new WeakMap(), ie = new WeakSet(), $r = function() {
  return this.is_fork || s(this, ft).size > 0;
}, Ji = function() {
  for (const n of s(this, Wt))
    for (const i of s(n, ft).keys()) {
      for (var t = !1, r = i; r.parent !== null; ) {
        if (s(this, ut).has(r)) {
          t = !0;
          break;
        }
        r = r.parent;
      }
      if (!t)
        return !0;
    }
  return !1;
}, en = function() {
  var l;
  if (ki++ > 1e3 && (Ht.delete(this), Ms()), !K(this, ie, $r).call(this)) {
    for (const o of s(this, Ft))
      s(this, mt).delete(o), te(o, me), this.schedule(o);
    for (const o of s(this, mt))
      te(o, vt), this.schedule(o);
  }
  const t = s(this, Le);
  O(this, Le, []), this.apply();
  var r = dr = [], n = [], i = Qr = [];
  for (const o of t)
    try {
      K(this, ie, jn).call(this, o, r, n);
    } catch (f) {
      throw Wi(o), f;
    }
  if (N = null, i.length > 0) {
    var a = ln.ensure();
    for (const o of i)
      a.schedule(o);
  }
  if (dr = null, Qr = null, K(this, ie, $r).call(this) || K(this, ie, Ji).call(this)) {
    K(this, ie, tn).call(this, n), K(this, ie, tn).call(this, r);
    for (const [o, f] of s(this, ut))
      Gi(o, f);
  } else {
    s(this, yt).size === 0 && Ht.delete(this), s(this, Ft).clear(), s(this, mt).clear();
    for (const o of s(this, vr)) o(this);
    s(this, vr).clear(), wi(n), wi(r), s(this, Br)?.resolve();
  }
  var c = (
    /** @type {Batch | null} */
    /** @type {unknown} */
    N
  );
  if (s(this, Le).length > 0) {
    const o = c ?? (c = this);
    s(o, Le).push(...s(this, Le).filter((f) => !s(o, Le).includes(f)));
  }
  c !== null && (Ht.add(c), K(l = c, ie, en).call(l));
}, /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
jn = function(t, r, n) {
  t.f ^= oe;
  for (var i = t.first; i !== null; ) {
    var a = i.f, c = (a & (st | Ut)) !== 0, l = c && (a & oe) !== 0, o = l || (a & Se) !== 0 || s(this, ut).has(i);
    if (!o && i.fn !== null) {
      c ? i.f ^= oe : (a & br) !== 0 ? r.push(i) : Yr(i) && ((a & ct) !== 0 && s(this, mt).add(i), wr(i));
      var f = i.first;
      if (f !== null) {
        i = f;
        continue;
      }
    }
    for (; i !== null; ) {
      var p = i.next;
      if (p !== null) {
        i = p;
        break;
      }
      i = i.parent;
    }
  }
}, /**
 * @param {Effect[]} effects
 */
tn = function(t) {
  for (var r = 0; r < t.length; r += 1)
    Yi(t[r], s(this, Ft), s(this, mt));
}, Is = function() {
  var p, m, b;
  for (const x of Ht) {
    var t = x.id < this.id, r = [];
    for (const [v, [C, A]] of this.current) {
      if (x.current.has(v)) {
        var n = (
          /** @type {[any, boolean]} */
          x.current.get(v)[0]
        );
        if (t && C !== n)
          x.current.set(v, [C, A]);
        else
          continue;
      }
      r.push(v);
    }
    var i = [...x.current.keys()].filter((v) => !this.current.has(v));
    if (i.length === 0)
      t && x.discard();
    else if (r.length > 0) {
      if (t)
        for (const v of s(this, gr))
          x.unskip_effect(v, (C) => {
            var A;
            (C.f & (ct | Or)) !== 0 ? x.schedule(C) : K(A = x, ie, tn).call(A, [C]);
          });
      x.activate();
      var a = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Map();
      for (var l of r)
        Ki(l, i, a, c);
      c = /* @__PURE__ */ new Map();
      var o = [...x.current.keys()].filter(
        (v) => this.current.has(v) ? (
          /** @type {[any, boolean]} */
          this.current.get(v)[0] !== v
        ) : !0
      );
      for (const v of s(this, Ur))
        (v.f & (Ge | Se | Un)) === 0 && Zn(v, o, c) && ((v.f & (Or | ct)) !== 0 ? (te(v, me), x.schedule(v)) : s(x, Ft).add(v));
      if (s(x, Le).length > 0) {
        x.apply();
        for (var f of s(x, Le))
          K(p = x, ie, jn).call(p, f, [], []);
        O(x, Le, []);
      }
      x.deactivate();
    }
  }
  for (const x of Ht)
    s(x, Wt).has(this) && (s(x, Wt).delete(this), s(x, Wt).size === 0 && !K(m = x, ie, $r).call(m) && (x.activate(), K(b = x, ie, en).call(b)));
};
let nr = ln;
function Rs(e) {
  var t = Fr;
  Fr = !0;
  try {
    for (var r; ; ) {
      if (Ts(), N === null)
        return (
          /** @type {T} */
          r
        );
      N.flush();
    }
  } finally {
    Fr = t;
  }
}
function Ms() {
  try {
    us();
  } catch (e) {
    Ot(e, zn);
  }
}
let xt = null;
function wi(e) {
  var t = e.length;
  if (t !== 0) {
    for (var r = 0; r < t; ) {
      var n = e[r++];
      if ((n.f & (Ge | Se)) === 0 && Yr(n) && (xt = /* @__PURE__ */ new Set(), wr(n), n.deps === null && n.first === null && n.nodes === null && n.teardown === null && n.ac === null && ua(n), xt?.size > 0)) {
        $t.clear();
        for (const i of xt) {
          if ((i.f & (Ge | Se)) !== 0) continue;
          const a = [i];
          let c = i.parent;
          for (; c !== null; )
            xt.has(c) && (xt.delete(c), a.push(c)), c = c.parent;
          for (let l = a.length - 1; l >= 0; l--) {
            const o = a[l];
            (o.f & (Ge | Se)) === 0 && wr(o);
          }
        }
        xt.clear();
      }
    }
    xt = null;
  }
}
function Ki(e, t, r, n) {
  if (!r.has(e) && (r.add(e), e.reactions !== null))
    for (const i of e.reactions) {
      const a = i.f;
      (a & ke) !== 0 ? Ki(
        /** @type {Derived} */
        i,
        t,
        r,
        n
      ) : (a & (Or | ct)) !== 0 && (a & me) === 0 && Zn(i, t, n) && (te(i, me), Qn(
        /** @type {Effect} */
        i
      ));
    }
}
function Zn(e, t, r) {
  const n = r.get(e);
  if (n !== void 0) return n;
  if (e.deps !== null)
    for (const i of e.deps) {
      if (xr.call(t, i))
        return !0;
      if ((i.f & ke) !== 0 && Zn(
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
function Qn(e) {
  N.schedule(e);
}
function Gi(e, t) {
  if (!((e.f & st) !== 0 && (e.f & oe) !== 0)) {
    (e.f & me) !== 0 ? t.d.push(e) : (e.f & vt) !== 0 && t.m.push(e), te(e, oe);
    for (var r = e.first; r !== null; )
      Gi(r, t), r = r.next;
  }
}
function Wi(e) {
  te(e, oe);
  for (var t = e.first; t !== null; )
    Wi(t), t = t.next;
}
function Ns(e) {
  let t = 0, r = ir(0), n;
  return () => {
    ri() && (d(r), vn(() => (t === 0 && (n = hn(() => e(() => Pr(r)))), t += 1, () => {
      cr(() => {
        t -= 1, t === 0 && (n?.(), n = void 0, Pr(r));
      });
    })));
  };
}
var Fs = yr | Er;
function Ps(e, t, r, n) {
  new Os(e, t, r, n);
}
var Ve, Wn, qe, Xt, Ae, He, Ee, Be, kt, Zt, Pt, pr, zr, jr, wt, fn, Q, Ds, Ls, Bs, Vn, rn, nn, qn, Hn;
class Os {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(t, r, n, i) {
    I(this, Q);
    /** @type {Boundary | null} */
    tt(this, "parent");
    tt(this, "is_pending", !1);
    /**
     * API-level transformError transform function. Transforms errors before they reach the `failed` snippet.
     * Inherited from parent boundary, or defaults to identity.
     * @type {(error: unknown) => unknown}
     */
    tt(this, "transform_error");
    /** @type {TemplateNode} */
    I(this, Ve);
    /** @type {TemplateNode | null} */
    I(this, Wn, null);
    /** @type {BoundaryProps} */
    I(this, qe);
    /** @type {((anchor: Node) => void)} */
    I(this, Xt);
    /** @type {Effect} */
    I(this, Ae);
    /** @type {Effect | null} */
    I(this, He, null);
    /** @type {Effect | null} */
    I(this, Ee, null);
    /** @type {Effect | null} */
    I(this, Be, null);
    /** @type {DocumentFragment | null} */
    I(this, kt, null);
    I(this, Zt, 0);
    I(this, Pt, 0);
    I(this, pr, !1);
    /** @type {Set<Effect>} */
    I(this, zr, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    I(this, jr, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    I(this, wt, null);
    I(this, fn, Ns(() => (O(this, wt, ir(s(this, Zt))), () => {
      O(this, wt, null);
    })));
    O(this, Ve, t), O(this, qe, r), O(this, Xt, (a) => {
      var c = (
        /** @type {Effect} */
        D
      );
      c.b = this, c.f |= Ln, n(a);
    }), this.parent = /** @type {Effect} */
    D.b, this.transform_error = i ?? this.parent?.transform_error ?? ((a) => a), O(this, Ae, ni(() => {
      K(this, Q, Vn).call(this);
    }, Fs));
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    Yi(t, s(this, zr), s(this, jr));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!s(this, qe).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  update_pending_count(t, r) {
    K(this, Q, qn).call(this, t, r), O(this, Zt, s(this, Zt) + t), !(!s(this, wt) || s(this, pr)) && (O(this, pr, !0), cr(() => {
      O(this, pr, !1), s(this, wt) && kr(s(this, wt), s(this, Zt));
    }));
  }
  get_effect_pending() {
    return s(this, fn).call(this), d(
      /** @type {Source<number>} */
      s(this, wt)
    );
  }
  /** @param {unknown} error */
  error(t) {
    if (!s(this, qe).onerror && !s(this, qe).failed)
      throw t;
    N?.is_fork ? (s(this, He) && N.skip_effect(s(this, He)), s(this, Ee) && N.skip_effect(s(this, Ee)), s(this, Be) && N.skip_effect(s(this, Be)), N.on_fork_commit(() => {
      K(this, Q, Hn).call(this, t);
    })) : K(this, Q, Hn).call(this, t);
  }
}
Ve = new WeakMap(), Wn = new WeakMap(), qe = new WeakMap(), Xt = new WeakMap(), Ae = new WeakMap(), He = new WeakMap(), Ee = new WeakMap(), Be = new WeakMap(), kt = new WeakMap(), Zt = new WeakMap(), Pt = new WeakMap(), pr = new WeakMap(), zr = new WeakMap(), jr = new WeakMap(), wt = new WeakMap(), fn = new WeakMap(), Q = new WeakSet(), Ds = function() {
  try {
    O(this, He, Je(() => s(this, Xt).call(this, s(this, Ve))));
  } catch (t) {
    this.error(t);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
Ls = function(t) {
  const r = s(this, qe).failed;
  r && O(this, Be, Je(() => {
    r(
      s(this, Ve),
      () => t,
      () => () => {
      }
    );
  }));
}, Bs = function() {
  const t = s(this, qe).pending;
  t && (this.is_pending = !0, O(this, Ee, Je(() => t(s(this, Ve)))), cr(() => {
    var r = O(this, kt, document.createDocumentFragment()), n = Bt();
    r.append(n), O(this, He, K(this, Q, nn).call(this, () => Je(() => s(this, Xt).call(this, n)))), s(this, Pt) === 0 && (s(this, Ve).before(r), O(this, kt, null), er(
      /** @type {Effect} */
      s(this, Ee),
      () => {
        O(this, Ee, null);
      }
    ), K(this, Q, rn).call(
      this,
      /** @type {Batch} */
      N
    ));
  }));
}, Vn = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), O(this, Pt, 0), O(this, Zt, 0), O(this, He, Je(() => {
      s(this, Xt).call(this, s(this, Ve));
    })), s(this, Pt) > 0) {
      var t = O(this, kt, document.createDocumentFragment());
      si(s(this, He), t);
      const r = (
        /** @type {(anchor: Node) => void} */
        s(this, qe).pending
      );
      O(this, Ee, Je(() => r(s(this, Ve))));
    } else
      K(this, Q, rn).call(
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
rn = function(t) {
  this.is_pending = !1, t.transfer_effects(s(this, zr), s(this, jr));
}, /**
 * @template T
 * @param {() => T} fn
 */
nn = function(t) {
  var r = D, n = B, i = ze;
  ht(s(this, Ae)), Xe(s(this, Ae)), mr(s(this, Ae).ctx);
  try {
    return nr.ensure(), t();
  } catch (a) {
    return qi(a), null;
  } finally {
    ht(r), Xe(n), mr(i);
  }
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 * @param {Batch} batch
 */
qn = function(t, r) {
  var n;
  if (!this.has_pending_snippet()) {
    this.parent && K(n = this.parent, Q, qn).call(n, t, r);
    return;
  }
  O(this, Pt, s(this, Pt) + t), s(this, Pt) === 0 && (K(this, Q, rn).call(this, r), s(this, Ee) && er(s(this, Ee), () => {
    O(this, Ee, null);
  }), s(this, kt) && (s(this, Ve).before(s(this, kt)), O(this, kt, null)));
}, /**
 * @param {unknown} error
 */
Hn = function(t) {
  s(this, He) && (Re(s(this, He)), O(this, He, null)), s(this, Ee) && (Re(s(this, Ee)), O(this, Ee, null)), s(this, Be) && (Re(s(this, Be)), O(this, Be, null));
  var r = s(this, qe).onerror;
  let n = s(this, qe).failed;
  var i = !1, a = !1;
  const c = () => {
    if (i) {
      Es();
      return;
    }
    i = !0, a && hs(), s(this, Be) !== null && er(s(this, Be), () => {
      O(this, Be, null);
    }), K(this, Q, nn).call(this, () => {
      K(this, Q, Vn).call(this);
    });
  }, l = (o) => {
    try {
      a = !0, r?.(o, c), a = !1;
    } catch (f) {
      Ot(f, s(this, Ae) && s(this, Ae).parent);
    }
    n && O(this, Be, K(this, Q, nn).call(this, () => {
      try {
        return Je(() => {
          var f = (
            /** @type {Effect} */
            D
          );
          f.b = this, f.f |= Ln, n(
            s(this, Ve),
            () => o,
            () => c
          );
        });
      } catch (f) {
        return Ot(
          f,
          /** @type {Effect} */
          s(this, Ae).parent
        ), null;
      }
    }));
  };
  cr(() => {
    var o;
    try {
      o = this.transform_error(t);
    } catch (f) {
      Ot(f, s(this, Ae) && s(this, Ae).parent);
      return;
    }
    o !== null && typeof o == "object" && typeof /** @type {any} */
    o.then == "function" ? o.then(
      l,
      /** @param {unknown} e */
      (f) => Ot(f, s(this, Ae) && s(this, Ae).parent)
    ) : l(o);
  });
};
function Us(e, t, r, n) {
  const i = $n;
  var a = e.filter((b) => !b.settled);
  if (r.length === 0 && a.length === 0) {
    n(t.map(i));
    return;
  }
  var c = (
    /** @type {Effect} */
    D
  ), l = zs(), o = a.length === 1 ? a[0].promise : a.length > 1 ? Promise.all(a.map((b) => b.promise)) : null;
  function f(b) {
    l();
    try {
      n(b);
    } catch (x) {
      (c.f & Ge) === 0 && Ot(x, c);
    }
    on();
  }
  if (r.length === 0) {
    o.then(() => f(t.map(i)));
    return;
  }
  var p = Xi();
  function m() {
    Promise.all(r.map((b) => /* @__PURE__ */ js(b))).then((b) => f([...t.map(i), ...b])).catch((b) => Ot(b, c)).finally(() => p());
  }
  o ? o.then(() => {
    l(), m(), on();
  }) : m();
}
function zs() {
  var e = (
    /** @type {Effect} */
    D
  ), t = B, r = ze, n = (
    /** @type {Batch} */
    N
  );
  return function(a = !0) {
    ht(e), Xe(t), mr(r), a && (e.f & Ge) === 0 && (n?.activate(), n?.apply());
  };
}
function on(e = !0) {
  ht(null), Xe(null), mr(null), e && N?.deactivate();
}
function Xi() {
  var e = (
    /** @type {Effect} */
    D
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
function $n(e) {
  var t = ke | me;
  return D !== null && (D.f |= Er), {
    ctx: ze,
    deps: null,
    effects: null,
    equals: Li,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      ce
    ),
    wv: 0,
    parent: D,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function js(e, t, r) {
  let n = (
    /** @type {Effect | null} */
    D
  );
  n === null && as();
  var i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), a = ir(
    /** @type {V} */
    ce
  ), c = !B, l = /* @__PURE__ */ new Map();
  return ro(() => {
    var o = (
      /** @type {Effect} */
      D
    ), f = Oi();
    i = f.promise;
    try {
      Promise.resolve(e()).then(f.resolve, f.reject).finally(on);
    } catch (x) {
      f.reject(x), on();
    }
    var p = (
      /** @type {Batch} */
      N
    );
    if (c) {
      if ((o.f & ar) !== 0)
        var m = Xi();
      if (
        /** @type {Boundary} */
        n.b.is_rendered()
      )
        l.get(p)?.reject(bt), l.delete(p);
      else {
        for (const x of l.values())
          x.reject(bt);
        l.clear();
      }
      l.set(p, f);
    }
    const b = (x, v = void 0) => {
      if (m) {
        var C = v === bt;
        m(C);
      }
      if (!(v === bt || (o.f & Ge) !== 0)) {
        if (p.activate(), v)
          a.f |= Lt, kr(a, v);
        else {
          (a.f & Lt) !== 0 && (a.f ^= Lt), kr(a, x);
          for (const [A, Y] of l) {
            if (l.delete(A), A === p) break;
            Y.reject(bt);
          }
        }
        p.deactivate();
      }
    };
    f.promise.then(b, (x) => b(null, x || "unknown"));
  }), Qs(() => {
    for (const o of l.values())
      o.reject(bt);
  }), new Promise((o) => {
    function f(p) {
      function m() {
        p === i ? o(a) : f(i);
      }
      p.then(m, m);
    }
    f(i);
  });
}
// @__NO_SIDE_EFFECTS__
function rt(e) {
  const t = /* @__PURE__ */ $n(e);
  return va(t), t;
}
// @__NO_SIDE_EFFECTS__
function Vs(e) {
  const t = /* @__PURE__ */ $n(e);
  return t.equals = Bi, t;
}
function qs(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var r = 0; r < t.length; r += 1)
      Re(
        /** @type {Effect} */
        t[r]
      );
  }
}
function ei(e) {
  var t, r = D, n = e.parent;
  if (!zt && n !== null && (n.f & (Ge | Se)) !== 0)
    return ws(), e.v;
  ht(n);
  try {
    e.f &= ~rr, qs(e), t = pa(e);
  } finally {
    ht(r);
  }
  return t;
}
function Zi(e) {
  var t = ei(e);
  if (!e.equals(t) && (e.wv = ga(), (!N?.is_fork || e.deps === null) && (N !== null ? N.capture(e, t, !0) : e.v = t, e.deps === null))) {
    te(e, oe);
    return;
  }
  zt || (it !== null ? (ri() || N?.is_fork) && it.set(e, t) : Xn(e));
}
function Hs(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      (t.teardown || t.ac) && (t.teardown?.(), t.ac?.abort(bt), t.teardown = ts, t.ac = null, Dr(t, 0), ii(t));
}
function Qi(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      t.teardown && wr(t);
}
let Yn = /* @__PURE__ */ new Set();
const $t = /* @__PURE__ */ new Map();
let $i = !1;
function ir(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Li,
    rv: 0,
    wv: 0
  };
  return r;
}
// @__NO_SIDE_EFFECTS__
function J(e, t) {
  const r = ir(e);
  return va(r), r;
}
// @__NO_SIDE_EFFECTS__
function Ys(e, t = !1, r = !0) {
  const n = ir(e);
  return t || (n.equals = Bi), n;
}
function T(e, t, r = !1) {
  B !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!at || (B.f & Un) !== 0) && ji() && (B.f & (ke | ct | Or | Un)) !== 0 && (We === null || !xr.call(We, e)) && vs();
  let n = r ? Ye(t) : t;
  return kr(e, n, Qr);
}
function kr(e, t, r = null) {
  if (!e.equals(t)) {
    $t.set(e, zt ? t : e.v);
    var n = nr.ensure();
    if (n.capture(e, t), (e.f & ke) !== 0) {
      const i = (
        /** @type {Derived} */
        e
      );
      (e.f & me) !== 0 && ei(i), it === null && Xn(i);
    }
    e.wv = ga(), ea(e, me, r), D !== null && (D.f & oe) !== 0 && (D.f & (st | Ut)) === 0 && (je === null ? io([e]) : je.push(e)), !n.is_fork && Yn.size > 0 && !$i && Js();
  }
  return t;
}
function Js() {
  $i = !1;
  for (const e of Yn)
    (e.f & oe) !== 0 && te(e, vt), Yr(e) && wr(e);
  Yn.clear();
}
function Pr(e) {
  T(e, e.v + 1);
}
function ea(e, t, r) {
  var n = e.reactions;
  if (n !== null)
    for (var i = n.length, a = 0; a < i; a++) {
      var c = n[a], l = c.f, o = (l & me) === 0;
      if (o && te(c, t), (l & ke) !== 0) {
        var f = (
          /** @type {Derived} */
          c
        );
        it?.delete(f), (l & rr) === 0 && (l & Ke && (D === null || (D.f & sn) === 0) && (c.f |= rr), ea(f, vt, r));
      } else if (o) {
        var p = (
          /** @type {Effect} */
          c
        );
        (l & ct) !== 0 && xt !== null && xt.add(p), r !== null ? r.push(p) : Qn(p);
      }
    }
}
function Ye(e) {
  if (typeof e != "object" || e === null || Zr in e)
    return e;
  const t = es(e);
  if (t !== Qa && t !== $a)
    return e;
  var r = /* @__PURE__ */ new Map(), n = Pi(e), i = /* @__PURE__ */ J(0), a = tr, c = (l) => {
    if (tr === a)
      return l();
    var o = B, f = tr;
    Xe(null), Ci(a);
    var p = l();
    return Xe(o), Ci(f), p;
  };
  return n && r.set("length", /* @__PURE__ */ J(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(l, o, f) {
        (!("value" in f) || f.configurable === !1 || f.enumerable === !1 || f.writable === !1) && ds();
        var p = r.get(o);
        return p === void 0 ? c(() => {
          var m = /* @__PURE__ */ J(f.value);
          return r.set(o, m), m;
        }) : T(p, f.value, !0), !0;
      },
      deleteProperty(l, o) {
        var f = r.get(o);
        if (f === void 0) {
          if (o in l) {
            const p = c(() => /* @__PURE__ */ J(ce));
            r.set(o, p), Pr(i);
          }
        } else
          T(f, ce), Pr(i);
        return !0;
      },
      get(l, o, f) {
        if (o === Zr)
          return e;
        var p = r.get(o), m = o in l;
        if (p === void 0 && (!m || Nr(l, o)?.writable) && (p = c(() => {
          var x = Ye(m ? l[o] : ce), v = /* @__PURE__ */ J(x);
          return v;
        }), r.set(o, p)), p !== void 0) {
          var b = d(p);
          return b === ce ? void 0 : b;
        }
        return Reflect.get(l, o, f);
      },
      getOwnPropertyDescriptor(l, o) {
        var f = Reflect.getOwnPropertyDescriptor(l, o);
        if (f && "value" in f) {
          var p = r.get(o);
          p && (f.value = d(p));
        } else if (f === void 0) {
          var m = r.get(o), b = m?.v;
          if (m !== void 0 && b !== ce)
            return {
              enumerable: !0,
              configurable: !0,
              value: b,
              writable: !0
            };
        }
        return f;
      },
      has(l, o) {
        if (o === Zr)
          return !0;
        var f = r.get(o), p = f !== void 0 && f.v !== ce || Reflect.has(l, o);
        if (f !== void 0 || D !== null && (!p || Nr(l, o)?.writable)) {
          f === void 0 && (f = c(() => {
            var b = p ? Ye(l[o]) : ce, x = /* @__PURE__ */ J(b);
            return x;
          }), r.set(o, f));
          var m = d(f);
          if (m === ce)
            return !1;
        }
        return p;
      },
      set(l, o, f, p) {
        var m = r.get(o), b = o in l;
        if (n && o === "length")
          for (var x = f; x < /** @type {Source<number>} */
          m.v; x += 1) {
            var v = r.get(x + "");
            v !== void 0 ? T(v, ce) : x in l && (v = c(() => /* @__PURE__ */ J(ce)), r.set(x + "", v));
          }
        if (m === void 0)
          (!b || Nr(l, o)?.writable) && (m = c(() => /* @__PURE__ */ J(void 0)), T(m, Ye(f)), r.set(o, m));
        else {
          b = m.v !== ce;
          var C = c(() => Ye(f));
          T(m, C);
        }
        var A = Reflect.getOwnPropertyDescriptor(l, o);
        if (A?.set && A.set.call(p, f), !b) {
          if (n && typeof o == "string") {
            var Y = (
              /** @type {Source<number>} */
              r.get("length")
            ), U = Number(o);
            Number.isInteger(U) && U >= Y.v && T(Y, U + 1);
          }
          Pr(i);
        }
        return !0;
      },
      ownKeys(l) {
        d(i);
        var o = Reflect.ownKeys(l).filter((m) => {
          var b = r.get(m);
          return b === void 0 || b.v !== ce;
        });
        for (var [f, p] of r)
          p.v !== ce && !(f in l) && o.push(f);
        return o;
      },
      setPrototypeOf() {
        cs();
      }
    }
  );
}
var Ei, ta, ra, na;
function Ks() {
  if (Ei === void 0) {
    Ei = window, ta = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, r = Text.prototype;
    ra = Nr(t, "firstChild").get, na = Nr(t, "nextSibling").get, mi(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), mi(r) && (r.__t = void 0);
  }
}
function Bt(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function Dt(e) {
  return (
    /** @type {TemplateNode | null} */
    ra.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function Hr(e) {
  return (
    /** @type {TemplateNode | null} */
    na.call(e)
  );
}
function k(e, t) {
  return /* @__PURE__ */ Dt(e);
}
function Wr(e, t = !1) {
  {
    var r = /* @__PURE__ */ Dt(e);
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ Hr(r) : r;
  }
}
function w(e, t = 1, r = !1) {
  let n = e;
  for (; t--; )
    n = /** @type {TemplateNode} */
    /* @__PURE__ */ Hr(n);
  return n;
}
function Gs(e) {
  e.textContent = "";
}
function ia() {
  return !1;
}
function aa(e, t, r) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElementNS(t ?? ys, e, void 0)
  );
}
let Si = !1;
function Ws() {
  Si || (Si = !0, document.addEventListener(
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
function ti(e) {
  var t = B, r = D;
  Xe(null), ht(null);
  try {
    return e();
  } finally {
    Xe(t), ht(r);
  }
}
function sa(e, t, r, n = r) {
  e.addEventListener(t, () => ti(r));
  const i = e.__on_r;
  i ? e.__on_r = () => {
    i(), n(!0);
  } : e.__on_r = () => n(!0), Ws();
}
function Xs(e) {
  D === null && (B === null && fs(), ls()), zt && os();
}
function Zs(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function St(e, t) {
  var r = D;
  r !== null && (r.f & Se) !== 0 && (e |= Se);
  var n = {
    ctx: ze,
    deps: null,
    nodes: null,
    f: e | me | Ke,
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
  if ((e & br) !== 0)
    dr !== null ? dr.push(n) : nr.ensure().schedule(n);
  else if (t !== null) {
    try {
      wr(n);
    } catch (c) {
      throw Re(n), c;
    }
    i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && // either `null`, or a singular child
    (i.f & Er) === 0 && (i = i.first, (e & ct) !== 0 && (e & yr) !== 0 && i !== null && (i.f |= yr));
  }
  if (i !== null && (i.parent = r, r !== null && Zs(i, r), B !== null && (B.f & ke) !== 0 && (e & Ut) === 0)) {
    var a = (
      /** @type {Derived} */
      B
    );
    (a.effects ?? (a.effects = [])).push(i);
  }
  return n;
}
function ri() {
  return B !== null && !at;
}
function Qs(e) {
  const t = St(cn, null);
  return te(t, oe), t.teardown = e, t;
}
function $s(e) {
  Xs();
  var t = (
    /** @type {Effect} */
    D.f
  ), r = !B && (t & st) !== 0 && (t & ar) === 0;
  if (r) {
    var n = (
      /** @type {ComponentContext} */
      ze
    );
    (n.e ?? (n.e = [])).push(e);
  } else
    return oa(e);
}
function oa(e) {
  return St(br | is, e);
}
function eo(e) {
  nr.ensure();
  const t = St(Ut | Er, e);
  return (r = {}) => new Promise((n) => {
    r.outro ? er(t, () => {
      Re(t), n(void 0);
    }) : (Re(t), n(void 0));
  });
}
function to(e) {
  return St(br, e);
}
function ro(e) {
  return St(Or | Er, e);
}
function vn(e, t = 0) {
  return St(cn | t, e);
}
function P(e, t = [], r = [], n = []) {
  Us(n, t, r, (i) => {
    St(cn, () => e(...i.map(d)));
  });
}
function ni(e, t = 0) {
  var r = St(ct | t, e);
  return r;
}
function Je(e) {
  return St(st | Er, e);
}
function la(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = zt, n = B;
    Ti(!0), Xe(null);
    try {
      t.call(null);
    } finally {
      Ti(r), Xe(n);
    }
  }
}
function ii(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    const i = r.ac;
    i !== null && ti(() => {
      i.abort(bt);
    });
    var n = r.next;
    (r.f & Ut) !== 0 ? r.parent = null : Re(r, t), r = n;
  }
}
function no(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & st) === 0 && Re(t), t = r;
  }
}
function Re(e, t = !0) {
  var r = !1;
  (t || (e.f & ns) !== 0) && e.nodes !== null && e.nodes.end !== null && (fa(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), r = !0), te(e, Bn), ii(e, t && !r), Dr(e, 0);
  var n = e.nodes && e.nodes.t;
  if (n !== null)
    for (const a of n)
      a.stop();
  la(e), e.f ^= Bn, e.f |= Ge;
  var i = e.parent;
  i !== null && i.first !== null && ua(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function fa(e, t) {
  for (; e !== null; ) {
    var r = e === t ? null : /* @__PURE__ */ Hr(e);
    e.remove(), e = r;
  }
}
function ua(e) {
  var t = e.parent, r = e.prev, n = e.next;
  r !== null && (r.next = n), n !== null && (n.prev = r), t !== null && (t.first === e && (t.first = n), t.last === e && (t.last = r));
}
function er(e, t, r = !0) {
  var n = [];
  da(e, n, !0);
  var i = () => {
    r && Re(e), t && t();
  }, a = n.length;
  if (a > 0) {
    var c = () => --a || i();
    for (var l of n)
      l.out(c);
  } else
    i();
}
function da(e, t, r) {
  if ((e.f & Se) === 0) {
    e.f ^= Se;
    var n = e.nodes && e.nodes.t;
    if (n !== null)
      for (const l of n)
        (l.is_global || r) && t.push(l);
    for (var i = e.first; i !== null; ) {
      var a = i.next;
      if ((i.f & Ut) === 0) {
        var c = (i.f & yr) !== 0 || // If this is a branch effect without a block effect parent,
        // it means the parent block effect was pruned. In that case,
        // transparency information was transferred to the branch effect.
        (i.f & st) !== 0 && (e.f & ct) !== 0;
        da(i, t, c ? r : !1);
      }
      i = a;
    }
  }
}
function ai(e) {
  ca(e, !0);
}
function ca(e, t) {
  if ((e.f & Se) !== 0) {
    e.f ^= Se, (e.f & oe) === 0 && (te(e, me), nr.ensure().schedule(e));
    for (var r = e.first; r !== null; ) {
      var n = r.next, i = (r.f & yr) !== 0 || (r.f & st) !== 0;
      ca(r, i ? t : !1), r = n;
    }
    var a = e.nodes && e.nodes.t;
    if (a !== null)
      for (const c of a)
        (c.is_global || t) && c.in();
  }
}
function si(e, t) {
  if (e.nodes)
    for (var r = e.nodes.start, n = e.nodes.end; r !== null; ) {
      var i = r === n ? null : /* @__PURE__ */ Hr(r);
      t.append(r), r = i;
    }
}
let an = !1, zt = !1;
function Ti(e) {
  zt = e;
}
let B = null, at = !1;
function Xe(e) {
  B = e;
}
let D = null;
function ht(e) {
  D = e;
}
let We = null;
function va(e) {
  B !== null && (We === null ? We = [e] : We.push(e));
}
let Ie = null, De = 0, je = null;
function io(e) {
  je = e;
}
let ha = 1, Jt = 0, tr = Jt;
function Ci(e) {
  tr = e;
}
function ga() {
  return ++ha;
}
function Yr(e) {
  var t = e.f;
  if ((t & me) !== 0)
    return !0;
  if (t & ke && (e.f &= ~rr), (t & vt) !== 0) {
    for (var r = (
      /** @type {Value[]} */
      e.deps
    ), n = r.length, i = 0; i < n; i++) {
      var a = r[i];
      if (Yr(
        /** @type {Derived} */
        a
      ) && Zi(
        /** @type {Derived} */
        a
      ), a.wv > e.wv)
        return !0;
    }
    (t & Ke) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    it === null && te(e, oe);
  }
  return !1;
}
function _a(e, t, r = !0) {
  var n = e.reactions;
  if (n !== null && !(We !== null && xr.call(We, e)))
    for (var i = 0; i < n.length; i++) {
      var a = n[i];
      (a.f & ke) !== 0 ? _a(
        /** @type {Derived} */
        a,
        t,
        !1
      ) : t === a && (r ? te(a, me) : (a.f & oe) !== 0 && te(a, vt), Qn(
        /** @type {Effect} */
        a
      ));
    }
}
function pa(e) {
  var C;
  var t = Ie, r = De, n = je, i = B, a = We, c = ze, l = at, o = tr, f = e.f;
  Ie = /** @type {null | Value[]} */
  null, De = 0, je = null, B = (f & (st | Ut)) === 0 ? e : null, We = null, mr(e.ctx), at = !1, tr = ++Jt, e.ac !== null && (ti(() => {
    e.ac.abort(bt);
  }), e.ac = null);
  try {
    e.f |= sn;
    var p = (
      /** @type {Function} */
      e.fn
    ), m = p();
    e.f |= ar;
    var b = e.deps, x = N?.is_fork;
    if (Ie !== null) {
      var v;
      if (x || Dr(e, De), b !== null && De > 0)
        for (b.length = De + Ie.length, v = 0; v < Ie.length; v++)
          b[De + v] = Ie[v];
      else
        e.deps = b = Ie;
      if (ri() && (e.f & Ke) !== 0)
        for (v = De; v < b.length; v++)
          ((C = b[v]).reactions ?? (C.reactions = [])).push(e);
    } else !x && b !== null && De < b.length && (Dr(e, De), b.length = De);
    if (ji() && je !== null && !at && b !== null && (e.f & (ke | vt | me)) === 0)
      for (v = 0; v < /** @type {Source[]} */
      je.length; v++)
        _a(
          je[v],
          /** @type {Effect} */
          e
        );
    if (i !== null && i !== e) {
      if (Jt++, i.deps !== null)
        for (let A = 0; A < r; A += 1)
          i.deps[A].rv = Jt;
      if (t !== null)
        for (const A of t)
          A.rv = Jt;
      je !== null && (n === null ? n = je : n.push(.../** @type {Source[]} */
      je));
    }
    return (e.f & Lt) !== 0 && (e.f ^= Lt), m;
  } catch (A) {
    return qi(A);
  } finally {
    e.f ^= sn, Ie = t, De = r, je = n, B = i, We = a, mr(c), at = l, tr = o;
  }
}
function ao(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var n = Xa.call(r, e);
    if (n !== -1) {
      var i = r.length - 1;
      i === 0 ? r = t.reactions = null : (r[n] = r[i], r.pop());
    }
  }
  if (r === null && (t.f & ke) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Ie === null || !xr.call(Ie, t))) {
    var a = (
      /** @type {Derived} */
      t
    );
    (a.f & Ke) !== 0 && (a.f ^= Ke, a.f &= ~rr), a.v !== ce && Xn(a), Hs(a), Dr(a, 0);
  }
}
function Dr(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var n = t; n < r.length; n++)
      ao(e, r[n]);
}
function wr(e) {
  var t = e.f;
  if ((t & Ge) === 0) {
    te(e, oe);
    var r = D, n = an;
    D = e, an = !0;
    try {
      (t & (ct | Di)) !== 0 ? no(e) : ii(e), la(e);
      var i = pa(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = ha;
      var a;
    } finally {
      an = n, D = r;
    }
  }
}
async function so() {
  await Promise.resolve(), Rs();
}
function d(e) {
  var t = e.f, r = (t & ke) !== 0;
  if (B !== null && !at) {
    var n = D !== null && (D.f & Ge) !== 0;
    if (!n && (We === null || !xr.call(We, e))) {
      var i = B.deps;
      if ((B.f & sn) !== 0)
        e.rv < Jt && (e.rv = Jt, Ie === null && i !== null && i[De] === e ? De++ : Ie === null ? Ie = [e] : Ie.push(e));
      else {
        (B.deps ?? (B.deps = [])).push(e);
        var a = e.reactions;
        a === null ? e.reactions = [B] : xr.call(a, B) || a.push(B);
      }
    }
  }
  if (zt && $t.has(e))
    return $t.get(e);
  if (r) {
    var c = (
      /** @type {Derived} */
      e
    );
    if (zt) {
      var l = c.v;
      return ((c.f & oe) === 0 && c.reactions !== null || ba(c)) && (l = ei(c)), $t.set(c, l), l;
    }
    var o = (c.f & Ke) === 0 && !at && B !== null && (an || (B.f & Ke) !== 0), f = (c.f & ar) === 0;
    Yr(c) && (o && (c.f |= Ke), Zi(c)), o && !f && (Qi(c), xa(c));
  }
  if (it?.has(e))
    return it.get(e);
  if ((e.f & Lt) !== 0)
    throw e.v;
  return e.v;
}
function xa(e) {
  if (e.f |= Ke, e.deps !== null)
    for (const t of e.deps)
      (t.reactions ?? (t.reactions = [])).push(e), (t.f & ke) !== 0 && (t.f & Ke) === 0 && (Qi(
        /** @type {Derived} */
        t
      ), xa(
        /** @type {Derived} */
        t
      ));
}
function ba(e) {
  if (e.v === ce) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if ($t.has(t) || (t.f & ke) !== 0 && ba(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function hn(e) {
  var t = at;
  try {
    return at = !0, e();
  } finally {
    at = t;
  }
}
const oo = ["touchstart", "touchmove"];
function lo(e) {
  return oo.includes(e);
}
const Kt = Symbol("events"), ya = /* @__PURE__ */ new Set(), Jn = /* @__PURE__ */ new Set();
function Ce(e, t, r) {
  (t[Kt] ?? (t[Kt] = {}))[e] = r;
}
function fo(e) {
  for (var t = 0; t < e.length; t++)
    ya.add(e[t]);
  for (var r of Jn)
    r(e);
}
let Ai = null;
function Ii(e) {
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), n = e.type, i = e.composedPath?.() || [], a = (
    /** @type {null | Element} */
    i[0] || e.target
  );
  Ai = e;
  var c = 0, l = Ai === e && e[Kt];
  if (l) {
    var o = i.indexOf(l);
    if (o !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e[Kt] = t;
      return;
    }
    var f = i.indexOf(t);
    if (f === -1)
      return;
    o <= f && (c = o);
  }
  if (a = /** @type {Element} */
  i[c] || e.target, a !== t) {
    Za(e, "currentTarget", {
      configurable: !0,
      get() {
        return a || r;
      }
    });
    var p = B, m = D;
    Xe(null), ht(null);
    try {
      for (var b, x = []; a !== null; ) {
        var v = a.assignedSlot || a.parentNode || /** @type {any} */
        a.host || null;
        try {
          var C = a[Kt]?.[n];
          C != null && (!/** @type {any} */
          a.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === a) && C.call(a, e);
        } catch (A) {
          b ? x.push(A) : b = A;
        }
        if (e.cancelBubble || v === t || v === null)
          break;
        a = v;
      }
      if (b) {
        for (let A of x)
          queueMicrotask(() => {
            throw A;
          });
        throw b;
      }
    } finally {
      e[Kt] = t, delete e.currentTarget, Xe(p), ht(m);
    }
  }
}
const uo = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (e) => e
  })
);
function co(e) {
  return (
    /** @type {string} */
    uo?.createHTML(e) ?? e
  );
}
function vo(e) {
  var t = aa("template");
  return t.innerHTML = co(e.replaceAll("<!>", "<!---->")), t.content;
}
function Lr(e, t) {
  var r = (
    /** @type {Effect} */
    D
  );
  r.nodes === null && (r.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function F(e, t) {
  var r = (t & xs) !== 0, n = (t & bs) !== 0, i, a = !e.startsWith("<!>");
  return () => {
    i === void 0 && (i = vo(a ? e : "<!>" + e), r || (i = /** @type {TemplateNode} */
    /* @__PURE__ */ Dt(i)));
    var c = (
      /** @type {TemplateNode} */
      n || ta ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (r) {
      var l = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Dt(c)
      ), o = (
        /** @type {TemplateNode} */
        c.lastChild
      );
      Lr(l, o);
    } else
      Lr(c, c);
    return c;
  };
}
function ho(e = "") {
  {
    var t = Bt(e + "");
    return Lr(t, t), t;
  }
}
function M(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function G(e, t) {
  var r = t == null ? "" : typeof t == "object" ? `${t}` : t;
  r !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = r, e.nodeValue = `${r}`);
}
function go(e, t) {
  return _o(e, t);
}
const Xr = /* @__PURE__ */ new Map();
function _o(e, { target: t, anchor: r, props: n = {}, events: i, context: a, intro: c = !0, transformError: l }) {
  Ks();
  var o = void 0, f = eo(() => {
    var p = r ?? t.appendChild(Bt());
    Ps(
      /** @type {TemplateNode} */
      p,
      {
        pending: () => {
        }
      },
      (x) => {
        Ui({});
        var v = (
          /** @type {ComponentContext} */
          ze
        );
        a && (v.c = a), i && (n.$$events = i), o = e(x, n) || {}, zi();
      },
      l
    );
    var m = /* @__PURE__ */ new Set(), b = (x) => {
      for (var v = 0; v < x.length; v++) {
        var C = x[v];
        if (!m.has(C)) {
          m.add(C);
          var A = lo(C);
          for (const le of [t, document]) {
            var Y = Xr.get(le);
            Y === void 0 && (Y = /* @__PURE__ */ new Map(), Xr.set(le, Y));
            var U = Y.get(C);
            U === void 0 ? (le.addEventListener(C, Ii, { passive: A }), Y.set(C, 1)) : Y.set(C, U + 1);
          }
        }
      }
    };
    return b(dn(ya)), Jn.add(b), () => {
      for (var x of m)
        for (const A of [t, document]) {
          var v = (
            /** @type {Map<string, number>} */
            Xr.get(A)
          ), C = (
            /** @type {number} */
            v.get(x)
          );
          --C == 0 ? (A.removeEventListener(x, Ii), v.delete(x), v.size === 0 && Xr.delete(A)) : v.set(x, C);
        }
      Jn.delete(b), p !== r && p.parentNode?.removeChild(p);
    };
  });
  return Kn.set(o, f), o;
}
let Kn = /* @__PURE__ */ new WeakMap();
function po(e, t) {
  const r = Kn.get(e);
  return r ? (Kn.delete(e), r(t)) : Promise.resolve();
}
var nt, dt, Ue, Qt, Vr, qr, un;
class xo {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, r = !0) {
    /** @type {TemplateNode} */
    tt(this, "anchor");
    /** @type {Map<Batch, Key>} */
    I(this, nt, /* @__PURE__ */ new Map());
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
    I(this, dt, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    I(this, Ue, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    I(this, Qt, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    I(this, Vr, !0);
    /**
     * @param {Batch} batch
     */
    I(this, qr, (t) => {
      if (s(this, nt).has(t)) {
        var r = (
          /** @type {Key} */
          s(this, nt).get(t)
        ), n = s(this, dt).get(r);
        if (n)
          ai(n), s(this, Qt).delete(r);
        else {
          var i = s(this, Ue).get(r);
          i && (s(this, dt).set(r, i.effect), s(this, Ue).delete(r), i.fragment.lastChild.remove(), this.anchor.before(i.fragment), n = i.effect);
        }
        for (const [a, c] of s(this, nt)) {
          if (s(this, nt).delete(a), a === t)
            break;
          const l = s(this, Ue).get(c);
          l && (Re(l.effect), s(this, Ue).delete(c));
        }
        for (const [a, c] of s(this, dt)) {
          if (a === r || s(this, Qt).has(a)) continue;
          const l = () => {
            if (Array.from(s(this, nt).values()).includes(a)) {
              var f = document.createDocumentFragment();
              si(c, f), f.append(Bt()), s(this, Ue).set(a, { effect: c, fragment: f });
            } else
              Re(c);
            s(this, Qt).delete(a), s(this, dt).delete(a);
          };
          s(this, Vr) || !n ? (s(this, Qt).add(a), er(c, l, !1)) : l();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    I(this, un, (t) => {
      s(this, nt).delete(t);
      const r = Array.from(s(this, nt).values());
      for (const [n, i] of s(this, Ue))
        r.includes(n) || (Re(i.effect), s(this, Ue).delete(n));
    });
    this.anchor = t, O(this, Vr, r);
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
    ), i = ia();
    if (r && !s(this, dt).has(t) && !s(this, Ue).has(t))
      if (i) {
        var a = document.createDocumentFragment(), c = Bt();
        a.append(c), s(this, Ue).set(t, {
          effect: Je(() => r(c)),
          fragment: a
        });
      } else
        s(this, dt).set(
          t,
          Je(() => r(this.anchor))
        );
    if (s(this, nt).set(n, t), i) {
      for (const [l, o] of s(this, dt))
        l === t ? n.unskip_effect(o) : n.skip_effect(o);
      for (const [l, o] of s(this, Ue))
        l === t ? n.unskip_effect(o.effect) : n.skip_effect(o.effect);
      n.oncommit(s(this, qr)), n.ondiscard(s(this, un));
    } else
      s(this, qr).call(this, n);
  }
}
nt = new WeakMap(), dt = new WeakMap(), Ue = new WeakMap(), Qt = new WeakMap(), Vr = new WeakMap(), qr = new WeakMap(), un = new WeakMap();
function de(e, t, r = !1) {
  var n = new xo(e), i = r ? yr : 0;
  function a(c, l) {
    n.ensure(c, l);
  }
  ni(() => {
    var c = !1;
    t((l, o = 0) => {
      c = !0, a(o, l);
    }), c || a(-1, null);
  }, i);
}
function Ri(e, t) {
  return t;
}
function bo(e, t, r) {
  for (var n = [], i = t.length, a, c = t.length, l = 0; l < i; l++) {
    let m = t[l];
    er(
      m,
      () => {
        if (a) {
          if (a.pending.delete(m), a.done.add(m), a.pending.size === 0) {
            var b = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            Gn(e, dn(a.done)), b.delete(a), b.size === 0 && (e.outrogroups = null);
          }
        } else
          c -= 1;
      },
      !1
    );
  }
  if (c === 0) {
    var o = n.length === 0 && r !== null;
    if (o) {
      var f = (
        /** @type {Element} */
        r
      ), p = (
        /** @type {Element} */
        f.parentNode
      );
      Gs(p), p.append(f), e.items.clear();
    }
    Gn(e, t, !o);
  } else
    a = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ?? (e.outrogroups = /* @__PURE__ */ new Set())).add(a);
}
function Gn(e, t, r = !0) {
  var n;
  if (e.pending.size > 0) {
    n = /* @__PURE__ */ new Set();
    for (const c of e.pending.values())
      for (const l of c)
        n.add(
          /** @type {EachItem} */
          e.items.get(l).e
        );
  }
  for (var i = 0; i < t.length; i++) {
    var a = t[i];
    if (n?.has(a)) {
      a.f |= Et;
      const c = document.createDocumentFragment();
      si(a, c);
    } else
      Re(t[i], r);
  }
}
var Mi;
function Ir(e, t, r, n, i, a = null) {
  var c = e, l = /* @__PURE__ */ new Map();
  {
    var o = (
      /** @type {Element} */
      e
    );
    c = o.appendChild(Bt());
  }
  var f = null, p = /* @__PURE__ */ Vs(() => {
    var U = r();
    return Pi(U) ? U : U == null ? [] : dn(U);
  }), m, b = /* @__PURE__ */ new Map(), x = !0;
  function v(U) {
    (Y.effect.f & Ge) === 0 && (Y.pending.delete(U), Y.fallback = f, yo(Y, m, c, t, n), f !== null && (m.length === 0 ? (f.f & Et) === 0 ? ai(f) : (f.f ^= Et, Mr(f, null, c)) : er(f, () => {
      f = null;
    })));
  }
  function C(U) {
    Y.pending.delete(U);
  }
  var A = ni(() => {
    m = /** @type {V[]} */
    d(p);
    for (var U = m.length, le = /* @__PURE__ */ new Set(), ve = (
      /** @type {Batch} */
      N
    ), gt = ia(), _e = 0; _e < U; _e += 1) {
      var Te = m[_e], $ = n(Te, _e), Me = x ? null : l.get($);
      Me ? (Me.v && kr(Me.v, Te), Me.i && kr(Me.i, _e), gt && ve.unskip_effect(Me.e)) : (Me = mo(
        l,
        x ? c : Mi ?? (Mi = Bt()),
        Te,
        $,
        _e,
        i,
        t,
        r
      ), x || (Me.e.f |= Et), l.set($, Me)), le.add($);
    }
    if (U === 0 && a && !f && (x ? f = Je(() => a(c)) : (f = Je(() => a(Mi ?? (Mi = Bt()))), f.f |= Et)), U > le.size && ss(), !x)
      if (b.set(ve, le), gt) {
        for (const [sr, or] of l)
          le.has(sr) || ve.skip_effect(or.e);
        ve.oncommit(v), ve.ondiscard(C);
      } else
        v(ve);
    d(p);
  }), Y = { effect: A, items: l, pending: b, outrogroups: null, fallback: f };
  x = !1;
}
function Rr(e) {
  for (; e !== null && (e.f & st) === 0; )
    e = e.next;
  return e;
}
function yo(e, t, r, n, i) {
  var a = t.length, c = e.items, l = Rr(e.effect.first), o, f = null, p = [], m = [], b, x, v, C;
  for (C = 0; C < a; C += 1) {
    if (b = t[C], x = i(b, C), v = /** @type {EachItem} */
    c.get(x).e, e.outrogroups !== null)
      for (const $ of e.outrogroups)
        $.pending.delete(v), $.done.delete(v);
    if ((v.f & Se) !== 0 && ai(v), (v.f & Et) !== 0)
      if (v.f ^= Et, v === l)
        Mr(v, null, r);
      else {
        var A = f ? f.next : l;
        v === e.effect.last && (e.effect.last = v.prev), v.prev && (v.prev.next = v.next), v.next && (v.next.prev = v.prev), Nt(e, f, v), Nt(e, v, A), Mr(v, A, r), f = v, p = [], m = [], l = Rr(f.next);
        continue;
      }
    if (v !== l) {
      if (o !== void 0 && o.has(v)) {
        if (p.length < m.length) {
          var Y = m[0], U;
          f = Y.prev;
          var le = p[0], ve = p[p.length - 1];
          for (U = 0; U < p.length; U += 1)
            Mr(p[U], Y, r);
          for (U = 0; U < m.length; U += 1)
            o.delete(m[U]);
          Nt(e, le.prev, ve.next), Nt(e, f, le), Nt(e, ve, Y), l = Y, f = ve, C -= 1, p = [], m = [];
        } else
          o.delete(v), Mr(v, l, r), Nt(e, v.prev, v.next), Nt(e, v, f === null ? e.effect.first : f.next), Nt(e, f, v), f = v;
        continue;
      }
      for (p = [], m = []; l !== null && l !== v; )
        (o ?? (o = /* @__PURE__ */ new Set())).add(l), m.push(l), l = Rr(l.next);
      if (l === null)
        continue;
    }
    (v.f & Et) === 0 && p.push(v), f = v, l = Rr(v.next);
  }
  if (e.outrogroups !== null) {
    for (const $ of e.outrogroups)
      $.pending.size === 0 && (Gn(e, dn($.done)), e.outrogroups?.delete($));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (l !== null || o !== void 0) {
    var gt = [];
    if (o !== void 0)
      for (v of o)
        (v.f & Se) === 0 && gt.push(v);
    for (; l !== null; )
      (l.f & Se) === 0 && l !== e.fallback && gt.push(l), l = Rr(l.next);
    var _e = gt.length;
    if (_e > 0) {
      var Te = a === 0 ? r : null;
      bo(e, gt, Te);
    }
  }
}
function mo(e, t, r, n, i, a, c, l) {
  var o = (c & gs) !== 0 ? (c & ps) === 0 ? /* @__PURE__ */ Ys(r, !1, !1) : ir(r) : null, f = (c & _s) !== 0 ? ir(i) : null;
  return {
    v: o,
    i: f,
    e: Je(() => (a(t, o ?? r, f ?? i, l), () => {
      e.delete(n);
    }))
  };
}
function Mr(e, t, r) {
  if (e.nodes)
    for (var n = e.nodes.start, i = e.nodes.end, a = t && (t.f & Et) === 0 ? (
      /** @type {EffectNodes} */
      t.nodes.start
    ) : r; n !== null; ) {
      var c = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Hr(n)
      );
      if (a.before(n), n === i)
        return;
      n = c;
    }
}
function Nt(e, t, r) {
  t === null ? e.effect.first = r : t.next = r, r === null ? e.effect.last = t : r.prev = t;
}
function Pn(e, t, r = !1, n = !1, i = !1, a = !1) {
  var c = e, l = "";
  if (r)
    var o = (
      /** @type {Element} */
      e
    );
  P(() => {
    var f = (
      /** @type {Effect} */
      D
    );
    if (l !== (l = t() ?? "")) {
      if (r) {
        f.nodes = null, o.innerHTML = /** @type {string} */
        l, l !== "" && Lr(
          /** @type {TemplateNode} */
          /* @__PURE__ */ Dt(o),
          /** @type {TemplateNode} */
          o.lastChild
        );
        return;
      }
      if (f.nodes !== null && (fa(
        f.nodes.start,
        /** @type {TemplateNode} */
        f.nodes.end
      ), f.nodes = null), l !== "") {
        var p = n ? ms : i ? ks : void 0, m = (
          /** @type {HTMLTemplateElement | SVGElement | MathMLElement} */
          aa(n ? "svg" : i ? "math" : "template", p)
        );
        m.innerHTML = /** @type {any} */
        l;
        var b = n || i ? m : (
          /** @type {HTMLTemplateElement} */
          m.content
        );
        if (Lr(
          /** @type {TemplateNode} */
          /* @__PURE__ */ Dt(b),
          /** @type {TemplateNode} */
          b.lastChild
        ), n || i)
          for (; /* @__PURE__ */ Dt(b); )
            c.before(
              /** @type {TemplateNode} */
              /* @__PURE__ */ Dt(b)
            );
        else
          c.before(b);
      }
    }
  });
}
function ma(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var i = e.length;
    for (t = 0; t < i; t++) e[t] && (r = ma(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function ko() {
  for (var e, t, r = 0, n = "", i = arguments.length; r < i; r++) (e = arguments[r]) && (t = ma(e)) && (n && (n += " "), n += t);
  return n;
}
function g(e) {
  return typeof e == "object" ? ko(e) : e ?? "";
}
function wo(e, t, r) {
  var n = e == null ? "" : "" + e;
  return n === "" ? null : n;
}
function _(e, t, r, n, i, a) {
  var c = e.__className;
  if (c !== r || c === void 0) {
    var l = wo(r);
    l == null ? e.removeAttribute("class") : e.className = l, e.__className = r;
  }
  return a;
}
function Eo(e, t, r = t) {
  var n = /* @__PURE__ */ new WeakSet();
  sa(e, "input", async (i) => {
    var a = i ? e.defaultValue : e.value;
    if (a = On(e) ? Dn(a) : a, r(a), N !== null && n.add(N), await so(), a !== (a = t())) {
      var c = e.selectionStart, l = e.selectionEnd, o = e.value.length;
      if (e.value = a ?? "", l !== null) {
        var f = e.value.length;
        c === l && l === o && f > o ? (e.selectionStart = f, e.selectionEnd = f) : (e.selectionStart = c, e.selectionEnd = Math.min(l, f));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  hn(t) == null && e.value && (r(On(e) ? Dn(e.value) : e.value), N !== null && n.add(N)), vn(() => {
    var i = t();
    if (e === document.activeElement) {
      var a = (
        /** @type {Batch} */
        N
      );
      if (n.has(a))
        return;
    }
    On(e) && i === Dn(e.value) || e.type === "date" && !i && !e.value || i !== e.value && (e.value = i ?? "");
  });
}
function So(e, t, r = t) {
  sa(e, "change", (n) => {
    var i = n ? e.defaultChecked : e.checked;
    r(i);
  }), // If we are hydrating and the value has since changed,
  // then use the update value from the input instead.
  // If defaultChecked is set, then checked == defaultChecked
  hn(t) == null && r(e.checked), vn(() => {
    var n = t();
    e.checked = !!n;
  });
}
function On(e) {
  var t = e.type;
  return t === "number" || t === "range";
}
function Dn(e) {
  return e === "" ? null : +e;
}
function Ni(e, t) {
  return e === t || e?.[Zr] === t;
}
function To(e = {}, t, r, n) {
  var i = (
    /** @type {ComponentContext} */
    ze.r
  ), a = (
    /** @type {Effect} */
    D
  );
  return to(() => {
    var c, l;
    return vn(() => {
      c = l, l = [], hn(() => {
        e !== r(...l) && (t(e, ...l), c && Ni(r(...c), e) && t(null, ...c));
      });
    }), () => {
      let o = a;
      for (; o !== i && o.parent !== null && o.parent.f & Bn; )
        o = o.parent;
      const f = () => {
        l && Ni(r(...l), e) && t(null, ...l);
      }, p = o.teardown;
      o.teardown = () => {
        f(), p?.();
      };
    };
  }), e;
}
const Co = "5";
var Fi;
typeof window < "u" && ((Fi = window.__svelte ?? (window.__svelte = {})).v ?? (Fi.v = /* @__PURE__ */ new Set())).add(Co);
var Ao = /* @__PURE__ */ F("<div> </div>"), Io = /* @__PURE__ */ F("<div></div>"), Ro = /* @__PURE__ */ F("<button>Upload</button>"), Mo = /* @__PURE__ */ F("<p>Loading installed packages…</p>"), No = /* @__PURE__ */ F("<div> </div>"), Fo = /* @__PURE__ */ F("<p>No packages installed yet. Browse a registry or upload files to install your first package.</p>"), Po = /* @__PURE__ */ F("<span><!> </span>"), Oo = /* @__PURE__ */ F("<button>Update</button>"), Do = /* @__PURE__ */ F("<button>Reload</button>"), Lo = /* @__PURE__ */ F("<!> <!> <button>Uninstall</button>", 1), Bo = /* @__PURE__ */ F("<tr><td><span> </span></td><td> </td><td> </td><td> </td><td><span> </span></td><td> </td><td><!></td></tr>"), Uo = /* @__PURE__ */ F("<div><table><thead><tr><th>Type</th><th>ID</th><th>Installed</th><th>Latest</th><th>Status</th><th>Source</th><th>Actions</th></tr></thead><tbody></tbody></table></div>"), zo = /* @__PURE__ */ F("<div><!></div>"), jo = /* @__PURE__ */ F("<p>Loading realm info…</p>"), Vo = /* @__PURE__ */ F("<div> </div>"), qo = /* @__PURE__ */ F("<p>No file registries are linked to this realm. Connect one from the realm's settings before browsing.</p>"), Ho = /* @__PURE__ */ F("<div> </div>"), Yo = /* @__PURE__ */ F("<div></div>"), Jo = /* @__PURE__ */ F("<p>Loading registry catalog…</p>"), Ko = /* @__PURE__ */ F("<p>This registry has no published packages.</p>"), Go = /* @__PURE__ */ F("<span>update available</span>"), Wo = /* @__PURE__ */ F("<span>installed</span>"), Xo = /* @__PURE__ */ F("<span>not installed</span>"), Zo = /* @__PURE__ */ F("<span><!> </span>"), Qo = /* @__PURE__ */ F("<button>Install</button>"), $o = /* @__PURE__ */ F("<button>Update</button>"), el = /* @__PURE__ */ F("<span> </span>"), tl = /* @__PURE__ */ F("<tr><td><span> </span></td><td> </td><td> </td><td> </td><td><!></td><td><!></td></tr>"), rl = /* @__PURE__ */ F("<div><table><thead><tr><th>Type</th><th>ID</th><th>Latest</th><th>Registry</th><th>Status</th><th>Actions</th></tr></thead><tbody></tbody></table></div>"), nl = /* @__PURE__ */ F("<!> <!>", 1), il = /* @__PURE__ */ F("<div><!></div>"), al = /* @__PURE__ */ F("<div> </div>"), sl = /* @__PURE__ */ F("<li> <span> </span></li>"), ol = /* @__PURE__ */ F("<div> <button>clear</button></div> <!> <ul></ul>", 1), ll = /* @__PURE__ */ F('<label><input type="checkbox"/> Run <code>init.py</code> after install</label>'), fl = /* @__PURE__ */ F("<!> Installing…", 1), ul = /* @__PURE__ */ F('<div><div><span>What are you installing?</span> <div><button>extension</button> <button>codex</button></div></div> <div><label for="pm-id"> </label> <input id="pm-id" type="text" placeholder="my_extension"/></div> <div><span>Files (pick a folder)</span> <input type="file" multiple="" webkitdirectory=""/></div> <!> <!> <button><!></button></div>'), dl = /* @__PURE__ */ F(`<div><div><div><h1>Package Manager <span> </span></h1> <p>Install, update, and uninstall extensions and codex packages from
				connected file registries.</p></div> <button>Refresh</button></div> <!> <nav><button>Installed <span> </span></button> <button>Browse <span> </span></button> <!></nav> <!> <!> <!></div>`);
function cl(e, t) {
  Ui(t, !0);
  const r = t.ctx.theme?.cn ?? ((...u) => u.filter(Boolean).join(" "));
  t.ctx.config?.fileRegistryCanisterId;
  function n(u) {
    const h = typeof window < "u" ? window.location.host : "";
    if (h.includes("localhost") || h.includes("127.0.0.1")) {
      const E = h.split(":")[1] ?? "4943";
      return `http://${u}.localhost:${E}`;
    }
    return `https://${u}.icp0.io`;
  }
  async function i(u) {
    const h = await fetch(u, { headers: { Accept: "application/json" } });
    if (!h.ok) throw new Error(`HTTP ${h.status} from ${u}: ${await h.text().catch(() => "")}`);
    return await h.json();
  }
  async function a(u) {
    return i(`${n(u)}/api/extensions`);
  }
  async function c(u) {
    return i(`${n(u)}/api/codices`);
  }
  function l(u, h) {
    const y = u.split("-", 1)[0].split(".").map((z) => parseInt(z, 10) || 0), E = h.split("-", 1)[0].split(".").map((z) => parseInt(z, 10) || 0), L = Math.max(y.length, E.length);
    for (let z = 0; z < L; z++) {
      const W = y[z] ?? 0, S = E[z] ?? 0;
      if (W !== S) return W - S;
    }
    return u === h ? 0 : u < h ? -1 : 1;
  }
  function o(u) {
    return typeof u == "string" ? JSON.parse(u) : u;
  }
  let f = /* @__PURE__ */ J("installed"), p = /* @__PURE__ */ J(Ye([])), m = /* @__PURE__ */ J(!0), b = /* @__PURE__ */ J(""), x = /* @__PURE__ */ J(Ye([])), v = /* @__PURE__ */ J(!0), C = /* @__PURE__ */ J(""), A = /* @__PURE__ */ J(Ye([])), Y = /* @__PURE__ */ J(!1), U = /* @__PURE__ */ J(Ye([])), le = /* @__PURE__ */ J(Ye({})), ve = /* @__PURE__ */ J(Ye([])), gt = 0, _e = /* @__PURE__ */ J("extension"), Te = /* @__PURE__ */ J(""), $ = /* @__PURE__ */ J(Ye([])), Me = /* @__PURE__ */ J(!0), sr = /* @__PURE__ */ J(!1), or = /* @__PURE__ */ J(null), gn = /* @__PURE__ */ rt(() => d($).reduce((u, h) => u + h.size, 0)), ka = /* @__PURE__ */ rt(() => d(gn) > 1.8 * 1024 * 1024), oi = /* @__PURE__ */ rt(() => t.ctx.isAuthenticated !== !1);
  function lr(u, h) {
    return `${u}:${h}`;
  }
  function _n(u, h, y) {
    T(le, { ...d(le), [lr(u, h)]: y }, !0);
  }
  function pn(u, h) {
    const y = { ...d(le) };
    delete y[lr(u, h)], T(le, y, !0);
  }
  function Ze(u, h) {
    const y = ++gt;
    T(ve, [...d(ve), { id: y, type: u, text: h }], !0), setTimeout(
      () => {
        T(ve, d(ve).filter((E) => E.id !== y), !0);
      },
      5e3
    );
  }
  function xn(u) {
    return u < 1024 ? `${u} B` : u < 1024 * 1024 ? `${(u / 1024).toFixed(1)} KB` : `${(u / (1024 * 1024)).toFixed(2)} MB`;
  }
  function bn(u, h = 8) {
    return u.length > h ? `${u.slice(0, h)}…` : u;
  }
  function yn() {
    typeof window < "u" && window.dispatchEvent(new CustomEvent("realms:extensions-changed"));
  }
  async function wa() {
    T(m, !0), T(b, "");
    try {
      const u = await t.ctx.backend.status(), h = o(u);
      h?.success && h?.data?.status ? T(p, h.data.status.registries ?? [], !0) : (T(p, [], !0), T(b, "status() did not return a success payload"));
    } catch (u) {
      T(b, u?.message ?? String(u), !0), T(p, [], !0);
    } finally {
      T(m, !1);
    }
  }
  async function Jr() {
    T(v, !0), T(C, "");
    try {
      const [u, h] = await Promise.all([
        t.ctx.backend.list_runtime_extensions(),
        t.ctx.backend.list_codex_packages()
      ]), y = [], E = o(u);
      if (E?.success) {
        const z = E.runtime_extensions ?? [], W = E.all_manifests ?? {}, S = E.sources ?? {};
        for (const R of z) {
          const X = W?.[R] ?? {};
          y.push({
            kind: "extension",
            id: R,
            version: X?.version ?? "",
            source: S?.[R] ?? null,
            manifest: X
          });
        }
      }
      const L = o(h);
      if (L?.success) {
        const z = L.codex_packages ?? [], W = L.manifests ?? {};
        for (const S of z) {
          const R = W?.[S] ?? {};
          y.push({
            kind: "codex",
            id: S,
            version: R?.version ?? "",
            source: null,
            manifest: R
          });
        }
      }
      T(
        x,
        y.sort((z, W) => z.kind === W.kind ? z.id.localeCompare(W.id) : z.kind.localeCompare(W.kind)),
        !0
      );
    } catch (u) {
      T(C, u?.message ?? String(u), !0);
    } finally {
      T(v, !1);
    }
  }
  async function li() {
    T(Y, !0), T(U, [], !0);
    const u = [];
    for (const h of d(p))
      try {
        const [y, E] = await Promise.all([
          a(h.canister_id),
          c(h.canister_id)
        ]);
        for (const L of y)
          u.push({
            kind: "extension",
            id: L.ext_id,
            versions: L.versions,
            latest: L.latest,
            manifest: L.manifest,
            registryCanisterId: h.canister_id
          });
        for (const L of E)
          u.push({
            kind: "codex",
            id: L.codex_id,
            versions: L.versions,
            latest: L.latest,
            manifest: null,
            registryCanisterId: h.canister_id
          });
      } catch (y) {
        T(
          U,
          [
            ...d(U),
            `Failed to load from registry ${bn(h.canister_id)}: ${y?.message ?? String(y)}`
          ],
          !0
        );
      }
    T(
      A,
      u.sort((h, y) => h.kind === y.kind ? h.id.localeCompare(y.id) : h.kind.localeCompare(y.kind)),
      !0
    ), T(Y, !1);
  }
  async function fi() {
    await wa(), await Promise.all([Jr(), li()]);
  }
  async function Ea(u) {
    if (confirm(`Uninstall ${u.id}? Data written by the package will remain, but the package itself will be removed.`)) {
      _n(u.kind, u.id, `Uninstalling ${u.id}…`);
      try {
        const y = JSON.stringify(u.kind === "extension" ? { extension_id: u.id } : { codex_id: u.id }), E = u.kind === "extension" ? await t.ctx.backend.uninstall_extension(y) : await t.ctx.backend.uninstall_codex(y), L = o(E);
        if (!L?.success) throw new Error(L?.error ?? "Unknown error");
        Ze("success", `Uninstalled ${u.id}`), yn(), await Promise.all([Jr(), li()]);
      } catch (y) {
        Ze("error", y?.message ?? String(y));
      } finally {
        pn(u.kind, u.id);
      }
    }
  }
  async function Sa(u) {
    _n(u.kind, u.id, `Reloading ${u.id}…`);
    try {
      const h = await t.ctx.backend.reload_codex(JSON.stringify({ codex_id: u.id, run_init: !1 })), y = o(h);
      if (!y?.success) throw new Error(y?.error ?? "Unknown error");
      y.init_warning && Ze("info", `Init warning: ${y.init_warning}`), Ze("success", `Reloaded ${u.id}`);
    } catch (h) {
      Ze("error", h?.message ?? String(h));
    } finally {
      pn(u.kind, u.id);
    }
  }
  async function Ta(u) {
    const h = d(A).find((E) => E.kind === u.kind && E.id === u.id);
    !h || !h.latest || u.version && l(h.latest, u.version) <= 0 || !confirm(`Update ${u.id} from v${u.version || "?"} to v${h.latest}?`) || await mn(h, h.latest);
  }
  async function mn(u, h) {
    _n(u.kind, u.id, `Installing ${u.id}…`);
    try {
      let y;
      u.kind === "extension" ? y = await t.ctx.backend.install_extension_from_registry(JSON.stringify({
        registry_canister_id: u.registryCanisterId,
        ext_id: u.id,
        version: h
      })) : y = await t.ctx.backend.install_codex_from_registry(JSON.stringify({
        registry_canister_id: u.registryCanisterId,
        codex_id: u.id,
        version: h,
        run_init: !0
      }));
      const E = o(y);
      if (!E?.success) throw new Error(E?.error ?? "Unknown error");
      E.init_warning && Ze("info", `Init warning: ${E.init_warning}`), Ze("success", `Installed ${u.id} (v${h})`), yn(), await Jr();
    } catch (y) {
      Ze("error", y?.message ?? String(y));
    } finally {
      pn(u.kind, u.id);
    }
  }
  async function Ca(u) {
    return await new Promise((h, y) => {
      const E = new FileReader();
      E.onload = () => h(String(E.result ?? "")), E.onerror = () => y(E.error), E.readAsText(u);
    });
  }
  async function Aa(u) {
    const h = u.target;
    if (!h.files) return;
    const y = [];
    for (const E of Array.from(h.files)) {
      const L = E.webkitRelativePath;
      let z = L && L.length > 0 ? L : E.name;
      const W = z.indexOf("/");
      L && W >= 0 && (z = z.slice(W + 1)), y.push({ path: z, size: E.size, content: await Ca(E) });
    }
    T($, y, !0);
  }
  function ui() {
    T($, [], !0), d(or) && (d(or).value = "");
  }
  async function Ia() {
    if (!(!d(Te) || d($).length === 0)) {
      T(sr, !0);
      try {
        const u = {};
        for (const E of d($)) u[E.path] = E.content;
        let h;
        d(_e) === "extension" ? h = await t.ctx.backend.install_extension(JSON.stringify({ extension_id: d(Te), files: u })) : h = await t.ctx.backend.install_codex(JSON.stringify({
          codex_id: d(Te),
          files: u,
          run_init: d(Me)
        }));
        const y = o(h);
        if (!y?.success) throw new Error(y?.error ?? "Unknown error");
        y.init_warning && Ze("info", `Init warning: ${y.init_warning}`), Ze("success", `Installed ${d(Te)}`), yn(), ui(), T(Te, ""), await Jr();
      } catch (u) {
        Ze("error", u?.message ?? String(u));
      } finally {
        T(sr, !1);
      }
    }
  }
  function di(u) {
    return d(A).find((h) => h.kind === u.kind && h.id === u.id);
  }
  function Ra(u) {
    const h = di(u);
    return !h || !h.latest || !u.version ? "unknown" : l(h.latest, u.version) > 0 ? "outdated" : "installed";
  }
  function Ma(u) {
    return d(x).find((h) => h.kind === u.kind && h.id === u.id);
  }
  function ci(u) {
    return u === "extension" ? "bg-indigo-100 dark:bg-indigo-900/40 text-indigo-800 dark:text-indigo-300" : "bg-purple-100 dark:bg-purple-900/40 text-purple-800 dark:text-purple-300";
  }
  function Na(u) {
    return u === "outdated" ? {
      cls: "bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-300",
      label: "update available"
    } : u === "installed" ? {
      cls: "bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-300",
      label: "installed"
    } : {
      cls: "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400",
      label: "unknown"
    };
  }
  const kn = '<svg class="inline-block w-3.5 h-3.5 animate-spin" viewBox="0 0 24 24" fill="none"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"/></svg>';
  $s(() => {
    fi();
  });
  var wn = dl(), En = k(wn), vi = k(En), Sn = k(vi), hi = w(k(Sn)), Fa = k(hi), Pa = w(Sn, 2), Tn = w(vi, 2), gi = w(En, 2);
  {
    var Oa = (u) => {
      var h = Io();
      Ir(h, 21, () => d(ve), (y) => y.id, (y, E) => {
        var L = Ao(), z = k(L);
        P(
          (W) => {
            _(L, 1, W), G(z, d(E).text);
          },
          [
            () => g(r("px-4 py-3 rounded-lg text-sm text-white shadow-lg", d(E).type === "success" ? "bg-green-700" : d(E).type === "error" ? "bg-red-700" : "bg-blue-700"))
          ]
        ), M(y, L);
      }), P((y) => _(h, 1, y), [
        () => g(r("fixed top-5 right-5 z-50 flex flex-col gap-2 w-80"))
      ]), M(u, h);
    };
    de(gi, (u) => {
      d(ve).length > 0 && u(Oa);
    });
  }
  var Cn = w(gi, 2), Kr = k(Cn), _i = w(k(Kr)), Da = k(_i), Gr = w(Kr, 2), pi = w(k(Gr)), La = k(pi), Ba = w(Gr, 2);
  {
    var Ua = (u) => {
      var h = Ro();
      P((y) => _(h, 1, y), [
        () => g(r("px-5 py-2.5 text-sm font-medium border-b-2 transition-colors", d(f) === "upload" ? "border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400" : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"))
      ]), Ce("click", h, () => T(f, "upload")), M(u, h);
    };
    de(Ba, (u) => {
      d(oi) && u(Ua);
    });
  }
  var xi = w(Cn, 2);
  {
    var za = (u) => {
      var h = zo(), y = k(h);
      {
        var E = (S) => {
          var R = Mo();
          P((X) => _(R, 1, X), [
            () => g(r("text-sm text-gray-500 dark:text-gray-400 text-center py-12"))
          ]), M(S, R);
        }, L = (S) => {
          var R = No(), X = k(R);
          P(
            (Ne) => {
              _(R, 1, Ne), G(X, d(C));
            },
            [
              () => g(r("p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-sm text-red-800 dark:text-red-300"))
            ]
          ), M(S, R);
        }, z = (S) => {
          var R = Fo();
          P((X) => _(R, 1, X), [
            () => g(r("text-sm text-gray-500 dark:text-gray-400 text-center py-12"))
          ]), M(S, R);
        }, W = (S) => {
          var R = Uo(), X = k(R), Ne = k(X), Tt = k(Ne), jt = k(Tt), Ct = w(jt), Vt = w(Ct), fe = w(Vt), ae = w(fe), we = w(ae), Qe = w(we), $e = w(Ne);
          Ir($e, 21, () => d(x), (Fe) => lr(Fe.kind, Fe.id), (Fe, Z) => {
            const q = /* @__PURE__ */ rt(() => Ra(d(Z))), re = /* @__PURE__ */ rt(() => di(d(Z))), se = /* @__PURE__ */ rt(() => Na(d(q))), Pe = /* @__PURE__ */ rt(() => d(le)[lr(d(Z).kind, d(Z).id)]);
            var he = Bo(), ne = k(he), H = k(ne), pe = k(H), ee = w(ne), ge = k(ee), ue = w(ee), xe = k(ue), be = w(ue), At = k(be), _t = w(be), It = k(_t), Sr = k(It), qt = w(_t), An = k(qt), fr = w(qt), In = k(fr);
            {
              var Tr = (ot) => {
                var lt = Po(), pt = k(lt);
                Pn(pt, () => kn);
                var Rt = w(pt);
                P(
                  (Mt) => {
                    _(lt, 1, Mt), G(Rt, ` ${d(Pe) ?? ""}`);
                  },
                  [
                    () => g(r("inline-flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400"))
                  ]
                ), M(ot, lt);
              }, Rn = (ot) => {
                var lt = Lo(), pt = Wr(lt);
                {
                  var Rt = (Oe) => {
                    var et = Oo();
                    P((j) => _(et, 1, j), [
                      () => g(r("text-xs font-medium px-3 py-1 rounded-lg bg-amber-600 text-white hover:bg-amber-700 mr-1.5"))
                    ]), Ce("click", et, () => Ta(d(Z))), M(Oe, et);
                  };
                  de(pt, (Oe) => {
                    d(q) === "outdated" && Oe(Rt);
                  });
                }
                var Mt = w(pt, 2);
                {
                  var Cr = (Oe) => {
                    var et = Do();
                    P((j) => _(et, 1, j), [
                      () => g(r("text-xs font-medium px-3 py-1 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 mr-1.5"))
                    ]), Ce("click", et, () => Sa(d(Z))), M(Oe, et);
                  };
                  de(Mt, (Oe) => {
                    d(Z).kind === "codex" && Oe(Cr);
                  });
                }
                var ur = w(Mt, 2);
                P((Oe) => _(ur, 1, Oe), [
                  () => g(r("text-xs font-medium px-3 py-1 rounded-lg bg-red-600 text-white hover:bg-red-700"))
                ]), Ce("click", ur, () => Ea(d(Z))), M(ot, lt);
              };
              de(In, (ot) => {
                d(Pe) ? ot(Tr) : ot(Rn, -1);
              });
            }
            P(
              (ot, lt, pt, Rt, Mt, Cr, ur, Oe, et, j, V) => {
                _(he, 1, ot), _(ne, 1, lt), _(H, 1, pt), G(pe, d(Z).kind), _(ee, 1, Rt), G(ge, d(Z).id), _(ue, 1, Mt), G(xe, d(Z).version || "—"), _(be, 1, Cr), G(At, d(re)?.latest ?? "—"), _(_t, 1, ur), _(It, 1, Oe), G(Sr, d(se).label), _(qt, 1, et), G(An, j), _(fr, 1, V);
              },
              [
                () => g(r("hover:bg-gray-50 dark:hover:bg-gray-700/30")),
                () => g(r("px-4 py-3")),
                () => g(r("inline-block text-xs font-medium px-2 py-0.5 rounded-full", ci(d(Z).kind))),
                () => g(r("px-4 py-3 font-mono text-xs text-gray-700 dark:text-gray-300")),
                () => g(r("px-4 py-3 text-gray-700 dark:text-gray-300")),
                () => g(r("px-4 py-3 text-gray-700 dark:text-gray-300")),
                () => g(r("px-4 py-3")),
                () => g(r("inline-block text-xs font-medium px-2 py-0.5 rounded-full", d(se).cls)),
                () => g(r("px-4 py-3 font-mono text-xs text-gray-500 dark:text-gray-400")),
                () => d(Z).source?.registry_canister_id ? bn(d(Z).source.registry_canister_id) : "—",
                () => g(r("px-4 py-3 text-right whitespace-nowrap"))
              ]
            ), M(Fe, he);
          }), P(
            (Fe, Z, q, re, se, Pe, he, ne, H, pe, ee) => {
              _(R, 1, Fe), _(X, 1, Z), _(Tt, 1, q), _(jt, 1, re), _(Ct, 1, se), _(Vt, 1, Pe), _(fe, 1, he), _(ae, 1, ne), _(we, 1, H), _(Qe, 1, pe), _($e, 1, ee);
            },
            [
              () => g(r("overflow-x-auto")),
              () => g(r("w-full text-sm")),
              () => g(r("bg-gray-50 dark:bg-gray-700/50")),
              () => g(r("px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide")),
              () => g(r("px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide")),
              () => g(r("px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide")),
              () => g(r("px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide")),
              () => g(r("px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide")),
              () => g(r("px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide")),
              () => g(r("px-4 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide")),
              () => g(r("divide-y divide-gray-100 dark:divide-gray-700"))
            ]
          ), M(S, R);
        };
        de(y, (S) => {
          d(v) ? S(E) : d(C) ? S(L, 1) : d(x).length === 0 ? S(z, 2) : S(W, -1);
        });
      }
      P((S) => _(h, 1, S), [
        () => g(r("bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5"))
      ]), M(u, h);
    };
    de(xi, (u) => {
      d(f) === "installed" && u(za);
    });
  }
  var bi = w(xi, 2);
  {
    var ja = (u) => {
      var h = il(), y = k(h);
      {
        var E = (S) => {
          var R = jo();
          P((X) => _(R, 1, X), [
            () => g(r("text-sm text-gray-500 dark:text-gray-400 text-center py-12"))
          ]), M(S, R);
        }, L = (S) => {
          var R = Vo(), X = k(R);
          P(
            (Ne) => {
              _(R, 1, Ne), G(X, `Could not read realm.registries: ${d(b) ?? ""}`);
            },
            [
              () => g(r("p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-sm text-red-800 dark:text-red-300 mb-4"))
            ]
          ), M(S, R);
        }, z = (S) => {
          var R = qo();
          P((X) => _(R, 1, X), [
            () => g(r("text-sm text-gray-500 dark:text-gray-400 text-center py-12"))
          ]), M(S, R);
        }, W = (S) => {
          var R = nl(), X = Wr(R);
          {
            var Ne = (fe) => {
              var ae = Yo();
              Ir(ae, 21, () => d(U), Ri, (we, Qe) => {
                var $e = Ho(), Fe = k($e);
                P(
                  (Z) => {
                    _($e, 1, Z), G(Fe, d(Qe));
                  },
                  [
                    () => g(r("p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-sm text-red-800 dark:text-red-300"))
                  ]
                ), M(we, $e);
              }), P((we) => _(ae, 1, we), [() => g(r("space-y-2 mb-4"))]), M(fe, ae);
            };
            de(X, (fe) => {
              d(U).length > 0 && fe(Ne);
            });
          }
          var Tt = w(X, 2);
          {
            var jt = (fe) => {
              var ae = Jo();
              P((we) => _(ae, 1, we), [
                () => g(r("text-sm text-gray-500 dark:text-gray-400 text-center py-12"))
              ]), M(fe, ae);
            }, Ct = (fe) => {
              var ae = Ko();
              P((we) => _(ae, 1, we), [
                () => g(r("text-sm text-gray-500 dark:text-gray-400 text-center py-12"))
              ]), M(fe, ae);
            }, Vt = (fe) => {
              var ae = rl(), we = k(ae), Qe = k(we), $e = k(Qe), Fe = k($e), Z = w(Fe), q = w(Z), re = w(q), se = w(re), Pe = w(se), he = w(Qe);
              Ir(he, 21, () => d(A), (ne) => lr(ne.kind, ne.id) + ":" + ne.registryCanisterId, (ne, H) => {
                const pe = /* @__PURE__ */ rt(() => Ma(d(H))), ee = /* @__PURE__ */ rt(() => d(pe)?.version ?? ""), ge = /* @__PURE__ */ rt(() => d(pe) && d(H).latest && d(ee) && l(d(H).latest, d(ee)) > 0), ue = /* @__PURE__ */ rt(() => d(le)[lr(d(H).kind, d(H).id)]);
                var xe = tl(), be = k(xe), At = k(be), _t = k(At), It = w(be), Sr = k(It), qt = w(It), An = k(qt), fr = w(qt), In = k(fr), Tr = w(fr), Rn = k(Tr);
                {
                  var ot = (j) => {
                    var V = Go();
                    P((ye) => _(V, 1, ye), [
                      () => g(r("inline-block text-xs font-medium px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-300"))
                    ]), M(j, V);
                  }, lt = (j) => {
                    var V = Wo();
                    P((ye) => _(V, 1, ye), [
                      () => g(r("inline-block text-xs font-medium px-2 py-0.5 rounded-full bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-300"))
                    ]), M(j, V);
                  }, pt = (j) => {
                    var V = Xo();
                    P((ye) => _(V, 1, ye), [
                      () => g(r("inline-block text-xs font-medium px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400"))
                    ]), M(j, V);
                  };
                  de(Rn, (j) => {
                    d(pe) && d(ge) ? j(ot) : d(pe) ? j(lt, 1) : j(pt, -1);
                  });
                }
                var Rt = w(Tr), Mt = k(Rt);
                {
                  var Cr = (j) => {
                    var V = Zo(), ye = k(V);
                    Pn(ye, () => kn);
                    var Ar = w(ye);
                    P(
                      (Mn) => {
                        _(V, 1, Mn), G(Ar, ` ${d(ue) ?? ""}`);
                      },
                      [
                        () => g(r("inline-flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400"))
                      ]
                    ), M(j, V);
                  }, ur = (j) => {
                    var V = Qo();
                    P(
                      (ye) => {
                        V.disabled = !d(H).latest, _(V, 1, ye);
                      },
                      [
                        () => g(r("text-xs font-medium px-3 py-1 rounded-lg bg-green-600 text-white hover:bg-green-700 disabled:opacity-50"))
                      ]
                    ), Ce("click", V, () => mn(d(H), d(H).latest)), M(j, V);
                  }, Oe = (j) => {
                    var V = $o();
                    P((ye) => _(V, 1, ye), [
                      () => g(r("text-xs font-medium px-3 py-1 rounded-lg bg-amber-600 text-white hover:bg-amber-700"))
                    ]), Ce("click", V, () => mn(d(H), d(H).latest)), M(j, V);
                  }, et = (j) => {
                    var V = el(), ye = k(V);
                    P(
                      (Ar) => {
                        _(V, 1, Ar), G(ye, `v${d(ee) ?? ""}`);
                      },
                      [() => g(r("text-xs text-gray-400 dark:text-gray-500"))]
                    ), M(j, V);
                  };
                  de(Mt, (j) => {
                    d(ue) ? j(Cr) : d(pe) ? d(ge) ? j(Oe, 2) : j(et, -1) : j(ur, 1);
                  });
                }
                P(
                  (j, V, ye, Ar, Mn, Ha, Ya, Ja, Ka) => {
                    _(xe, 1, j), _(be, 1, V), _(At, 1, ye), G(_t, d(H).kind), _(It, 1, Ar), G(Sr, d(H).id), _(qt, 1, Mn), G(An, d(H).latest || "—"), _(fr, 1, Ha), G(In, Ya), _(Tr, 1, Ja), _(Rt, 1, Ka);
                  },
                  [
                    () => g(r("hover:bg-gray-50 dark:hover:bg-gray-700/30")),
                    () => g(r("px-4 py-3")),
                    () => g(r("inline-block text-xs font-medium px-2 py-0.5 rounded-full", ci(d(H).kind))),
                    () => g(r("px-4 py-3 font-mono text-xs text-gray-700 dark:text-gray-300")),
                    () => g(r("px-4 py-3 text-gray-700 dark:text-gray-300")),
                    () => g(r("px-4 py-3 font-mono text-xs text-gray-500 dark:text-gray-400")),
                    () => bn(d(H).registryCanisterId),
                    () => g(r("px-4 py-3")),
                    () => g(r("px-4 py-3 text-right whitespace-nowrap"))
                  ]
                ), M(ne, xe);
              }), P(
                (ne, H, pe, ee, ge, ue, xe, be, At, _t) => {
                  _(ae, 1, ne), _(we, 1, H), _($e, 1, pe), _(Fe, 1, ee), _(Z, 1, ge), _(q, 1, ue), _(re, 1, xe), _(se, 1, be), _(Pe, 1, At), _(he, 1, _t);
                },
                [
                  () => g(r("overflow-x-auto")),
                  () => g(r("w-full text-sm")),
                  () => g(r("bg-gray-50 dark:bg-gray-700/50")),
                  () => g(r("px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide")),
                  () => g(r("px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide")),
                  () => g(r("px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide")),
                  () => g(r("px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide")),
                  () => g(r("px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide")),
                  () => g(r("px-4 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide")),
                  () => g(r("divide-y divide-gray-100 dark:divide-gray-700"))
                ]
              ), M(fe, ae);
            };
            de(Tt, (fe) => {
              d(Y) ? fe(jt) : d(A).length === 0 ? fe(Ct, 1) : fe(Vt, -1);
            });
          }
          M(S, R);
        };
        de(y, (S) => {
          d(m) ? S(E) : d(b) ? S(L, 1) : d(p).length === 0 ? S(z, 2) : S(W, -1);
        });
      }
      P((S) => _(h, 1, S), [
        () => g(r("bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5"))
      ]), M(u, h);
    };
    de(bi, (u) => {
      d(f) === "browse" && u(ja);
    });
  }
  var Va = w(bi, 2);
  {
    var qa = (u) => {
      var h = ul(), y = k(h), E = k(y), L = w(E, 2), z = k(L), W = w(z, 2), S = w(y, 2), R = k(S), X = k(R), Ne = w(R, 2), Tt = w(S, 2), jt = k(Tt), Ct = w(jt, 2);
      To(Ct, (q) => T(or, q), () => d(or));
      var Vt = w(Tt, 2);
      {
        var fe = (q) => {
          var re = ol(), se = Wr(re), Pe = k(se), he = w(Pe), ne = w(se, 2);
          {
            var H = (ee) => {
              var ge = al(), ue = k(ge);
              P(
                (xe, be) => {
                  _(ge, 1, xe), G(ue, `Total payload ${be ?? ""} exceeds the ~1.8 MB ingress safe limit.
						The install call will likely be rejected; consider publishing through a file registry instead.`);
                },
                [
                  () => g(r("p-3 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg text-sm text-amber-800 dark:text-amber-300 mb-3")),
                  () => xn(d(gn))
                ]
              ), M(ee, ge);
            };
            de(ne, (ee) => {
              d(ka) && ee(H);
            });
          }
          var pe = w(ne, 2);
          Ir(pe, 21, () => d($), Ri, (ee, ge) => {
            var ue = sl(), xe = k(ue), be = w(xe), At = k(be);
            P(
              (_t, It, Sr) => {
                _(ue, 1, _t), G(xe, `${d(ge).path ?? ""} `), _(be, 1, It), G(At, `(${Sr ?? ""})`);
              },
              [
                () => g(r("mb-0.5")),
                () => g(r("text-gray-400 dark:text-gray-500")),
                () => xn(d(ge).size)
              ]
            ), M(ee, ue);
          }), P(
            (ee, ge, ue, xe) => {
              _(se, 1, ee), G(Pe, `${d($).length ?? ""} files selected · ${ge ?? ""} `), _(he, 1, ue), _(pe, 1, xe);
            },
            [
              () => g(r("text-xs text-gray-500 dark:text-gray-400 mb-2")),
              () => xn(d(gn)),
              () => g(r("ml-2 text-indigo-600 dark:text-indigo-400 underline hover:text-indigo-800")),
              () => g(r("max-h-44 overflow-auto text-xs font-mono text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-700 rounded-lg p-2 mb-4 bg-gray-50 dark:bg-gray-900/30 list-none"))
            ]
          ), Ce("click", he, ui), M(q, re);
        };
        de(Vt, (q) => {
          d($).length > 0 && q(fe);
        });
      }
      var ae = w(Vt, 2);
      {
        var we = (q) => {
          var re = ll(), se = k(re), Pe = w(se, 2);
          P(
            (he, ne, H) => {
              _(re, 1, he), _(se, 1, ne), _(Pe, 1, H);
            },
            [
              () => g(r("flex items-center gap-2 mb-4 text-sm text-gray-700 dark:text-gray-300")),
              () => g(r("w-4 h-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500")),
              () => g(r("bg-gray-100 dark:bg-gray-700 px-1 rounded text-xs"))
            ]
          ), So(se, () => d(Me), (he) => T(Me, he)), M(q, re);
        };
        de(ae, (q) => {
          d(_e) === "codex" && q(we);
        });
      }
      var Qe = w(ae, 2), $e = k(Qe);
      {
        var Fe = (q) => {
          var re = fl(), se = Wr(re);
          Pn(se, () => kn), M(q, re);
        }, Z = (q) => {
          var re = ho("Install");
          M(q, re);
        };
        de($e, (q) => {
          d(sr) ? q(Fe) : q(Z, -1);
        });
      }
      P(
        (q, re, se, Pe, he, ne, H, pe, ee, ge, ue, xe, be) => {
          _(h, 1, q), _(y, 1, re), _(E, 1, se), _(L, 1, Pe), _(z, 1, he), _(W, 1, ne), _(S, 1, H), _(R, 1, pe), G(X, d(_e) === "extension" ? "Extension ID" : "Codex ID"), _(Ne, 1, ee), _(Tt, 1, ge), _(jt, 1, ue), _(Ct, 1, xe), Qe.disabled = !d(Te) || d($).length === 0 || d(sr), _(Qe, 1, be);
        },
        [
          () => g(r("bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5 max-w-2xl")),
          () => g(r("mb-4")),
          () => g(r("block text-xs font-medium text-gray-500 dark:text-gray-400 mb-1.5")),
          () => g(r("inline-flex border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden")),
          () => g(r("px-4 py-1.5 text-xs font-medium transition-colors", d(_e) === "extension" ? "bg-indigo-600 text-white" : "bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600")),
          () => g(r("px-4 py-1.5 text-xs font-medium transition-colors", d(_e) === "codex" ? "bg-indigo-600 text-white" : "bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600")),
          () => g(r("mb-4")),
          () => g(r("block text-xs font-medium text-gray-500 dark:text-gray-400 mb-1.5")),
          () => g(r("w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-indigo-500/40")),
          () => g(r("mb-4")),
          () => g(r("block text-xs font-medium text-gray-500 dark:text-gray-400 mb-1.5")),
          () => g(r("block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-indigo-50 dark:file:bg-indigo-900/40 file:text-indigo-700 dark:file:text-indigo-300 hover:file:bg-indigo-100 dark:hover:file:bg-indigo-800/40")),
          () => g(r("px-5 py-2.5 text-sm font-medium text-white bg-green-600 rounded-lg", "hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors inline-flex items-center gap-2"))
        ]
      ), Ce("click", z, () => T(_e, "extension")), Ce("click", W, () => T(_e, "codex")), Eo(Ne, () => d(Te), (q) => T(Te, q)), Ce("change", Ct, Aa), Ce("click", Qe, Ia), M(u, h);
    };
    de(Va, (u) => {
      d(f) === "upload" && d(oi) && u(qa);
    });
  }
  P(
    (u, h, y, E, L, z, W, S, R, X, Ne) => {
      _(wn, 1, u), _(En, 1, h), _(Sn, 1, y), _(hi, 1, E), G(Fa, `v${(t.ctx.config?.version || "") ?? ""}`), _(Pa, 1, L), Tn.disabled = d(v) || d(Y) || d(m), _(Tn, 1, z), _(Cn, 1, W), _(Kr, 1, S), _(_i, 1, R), G(Da, d(x).length), _(Gr, 1, X), _(pi, 1, Ne), G(La, d(A).length);
    },
    [
      () => g(r("max-w-5xl mx-auto p-6")),
      () => g(r("flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4", "bg-gradient-to-br from-indigo-50 to-blue-100 dark:from-indigo-900/30 dark:to-blue-900/20", "border-2 border-indigo-200 dark:border-indigo-800 rounded-xl p-5 mb-5")),
      () => g(r("text-xl font-bold text-indigo-900 dark:text-indigo-200 mb-1")),
      () => g(r("text-xs font-normal text-indigo-600 dark:text-indigo-400 ml-2")),
      () => g(r("text-sm text-indigo-700/80 dark:text-indigo-300/80")),
      () => g(r("px-4 py-2 text-sm font-medium border border-indigo-300 dark:border-indigo-700 rounded-lg", "text-indigo-700 dark:text-indigo-300 bg-white/60 dark:bg-gray-800/40", "hover:bg-white dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors")),
      () => g(r("flex border-b border-gray-200 dark:border-gray-700 mb-5")),
      () => g(r("px-5 py-2.5 text-sm font-medium border-b-2 inline-flex items-center gap-2 transition-colors", d(f) === "installed" ? "border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400" : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300")),
      () => g(r("text-xs px-2 py-0.5 rounded-full", d(f) === "installed" ? "bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300" : "bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400")),
      () => g(r("px-5 py-2.5 text-sm font-medium border-b-2 inline-flex items-center gap-2 transition-colors", d(f) === "browse" ? "border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400" : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300")),
      () => g(r("text-xs px-2 py-0.5 rounded-full", d(f) === "browse" ? "bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300" : "bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400"))
    ]
  ), Ce("click", Tn, fi), Ce("click", Kr, () => T(f, "installed")), Ce("click", Gr, () => T(f, "browse")), M(e, wn), zi();
}
fo(["click", "change"]);
function gl(e, t) {
  const r = go(cl, { target: e, props: { ctx: t } });
  return {
    unmount() {
      try {
        po(r);
      } catch {
      }
    }
  };
}
export {
  gl as default
};
