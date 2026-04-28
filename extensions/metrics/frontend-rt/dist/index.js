var ps = Object.defineProperty;
var rn = (e) => {
  throw TypeError(e);
};
var gs = (e, t, r) => t in e ? ps(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var we = (e, t, r) => gs(e, typeof t != "symbol" ? t + "" : t, r), Tr = (e, t, r) => t.has(e) || rn("Cannot " + r);
var l = (e, t, r) => (Tr(e, t, "read from private field"), r ? r.call(e) : t.get(e)), g = (e, t, r) => t.has(e) ? rn("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), w = (e, t, r, n) => (Tr(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r), N = (e, t, r) => (Tr(e, t, "access private method"), r);
var wn = Array.isArray, bs = Array.prototype.indexOf, Tt = Array.prototype.includes, _r = Array.from, ms = Object.defineProperty, Lt = Object.getOwnPropertyDescriptor, ws = Object.prototype, xs = Array.prototype, ys = Object.getPrototypeOf, nn = Object.isExtensible;
const Es = () => {
};
function ks(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function xn() {
  var e, t, r = new Promise((n, s) => {
    e = n, t = s;
  });
  return { promise: r, resolve: e, reject: t };
}
const V = 2, At = 4, pr = 8, yn = 1 << 24, Fe = 16, ke = 32, Qe = 64, Fr = 128, _e = 512, P = 1024, B = 2048, Me = 4096, U = 8192, pe = 16384, pt = 32768, sn = 1 << 25, Nt = 65536, Mr = 1 << 17, Ss = 1 << 18, Rt = 1 << 19, Ts = 1 << 20, je = 1 << 25, vt = 65536, or = 1 << 21, jt = 1 << 22, Xe = 1 << 23, Ar = Symbol("$state"), Pe = new class extends Error {
  constructor() {
    super(...arguments);
    we(this, "name", "StaleReactionError");
    we(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
function As() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Ns(e, t, r) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function Cs(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Fs() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Ms(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Rs() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Ds() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Os() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Ps() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Is() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
const zs = 1, Ls = 2, qs = 16, js = 1, Bs = 2, I = Symbol(), Vs = "http://www.w3.org/1999/xhtml";
function Hs() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function Us() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function En(e) {
  return e === this.v;
}
function Ys(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function kn(e) {
  return !Ys(e, this.v);
}
let be = null;
function Ct(e) {
  be = e;
}
function Sn(e, t = !1, r) {
  be = {
    p: be,
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
function Tn(e) {
  var t = (
    /** @type {ComponentContext} */
    be
  ), r = t.e;
  if (r !== null) {
    t.e = null;
    for (var n of r)
      Gn(n);
  }
  return t.i = !0, be = t.p, /** @type {T} */
  {};
}
function An() {
  return !0;
}
let bt = [];
function Gs() {
  var e = bt;
  bt = [], ks(e);
}
function wt(e) {
  if (bt.length === 0) {
    var t = bt;
    queueMicrotask(() => {
      t === bt && Gs();
    });
  }
  bt.push(e);
}
function Nn(e) {
  var t = k;
  if (t === null)
    return y.f |= Xe, e;
  if ((t.f & pt) === 0 && (t.f & At) === 0)
    throw e;
  We(e, t);
}
function We(e, t) {
  for (; t !== null; ) {
    if ((t.f & Fr) !== 0) {
      if ((t.f & pt) === 0)
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
const Ks = -7169;
function R(e, t) {
  e.f = e.f & Ks | t;
}
function Hr(e) {
  (e.f & _e) !== 0 || e.deps === null ? R(e, P) : R(e, Me);
}
function Cn(e) {
  if (e !== null)
    for (const t of e)
      (t.f & V) === 0 || (t.f & vt) === 0 || (t.f ^= vt, Cn(
        /** @type {Derived} */
        t.deps
      ));
}
function Fn(e, t, r) {
  (e.f & B) !== 0 ? t.add(e) : (e.f & Me) !== 0 && r.add(e), Cn(e.deps), R(e, P);
}
const rt = /* @__PURE__ */ new Set();
let T = null, ye = null, Rr = null, Nr = !1, mt = null, rr = null;
var ln = 0;
let Ws = 1;
var xt, yt, it, Ie, Ae, Vt, te, Ht, Ge, ze, Ne, Et, kt, lt, O, nr, Mn, sr, Dr, ir, Js;
const cr = class cr {
  constructor() {
    g(this, O);
    we(this, "id", Ws++);
    /**
     * The current values of any signals that are updated in this batch.
     * Tuple format: [value, is_derived] (note: is_derived is false for deriveds, too, if they were overridden via assignment)
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Value, [any, boolean]>}
     */
    we(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any signals (sources and deriveds) that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Value, any>}
     */
    we(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<(batch: Batch) => void>}
     */
    g(this, xt, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    g(this, yt, /* @__PURE__ */ new Set());
    /**
     * Callbacks that should run only when a fork is committed.
     * @type {Set<(batch: Batch) => void>}
     */
    g(this, it, /* @__PURE__ */ new Set());
    /**
     * Async effects that are currently in flight
     * @type {Map<Effect, number>}
     */
    g(this, Ie, /* @__PURE__ */ new Map());
    /**
     * Async effects that are currently in flight, _not_ inside a pending boundary
     * @type {Map<Effect, number>}
     */
    g(this, Ae, /* @__PURE__ */ new Map());
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    g(this, Vt, null);
    /**
     * The root effects that need to be flushed
     * @type {Effect[]}
     */
    g(this, te, []);
    /**
     * Effects created while this batch was active.
     * @type {Effect[]}
     */
    g(this, Ht, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    g(this, Ge, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    g(this, ze, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    g(this, Ne, /* @__PURE__ */ new Map());
    /**
     * Inverse of #skipped_branches which we need to tell prior batches to unskip them when committing
     * @type {Set<Effect>}
     */
    g(this, Et, /* @__PURE__ */ new Set());
    we(this, "is_fork", !1);
    g(this, kt, !1);
    /** @type {Set<Batch>} */
    g(this, lt, /* @__PURE__ */ new Set());
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(t) {
    l(this, Ne).has(t) || l(this, Ne).set(t, { d: [], m: [] }), l(this, Et).delete(t);
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   * @param {(e: Effect) => void} callback
   */
  unskip_effect(t, r = (n) => this.schedule(n)) {
    var n = l(this, Ne).get(t);
    if (n) {
      l(this, Ne).delete(t);
      for (var s of n.d)
        R(s, B), r(s);
      for (s of n.m)
        R(s, Me), r(s);
    }
    l(this, Et).add(t);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Value} source
   * @param {any} value
   * @param {boolean} [is_derived]
   */
  capture(t, r, n = !1) {
    t.v !== I && !this.previous.has(t) && this.previous.set(t, t.v), (t.f & Xe) === 0 && (this.current.set(t, [r, n]), ye?.set(t, r)), this.is_fork || (t.v = r);
  }
  activate() {
    T = this;
  }
  deactivate() {
    T = null, ye = null;
  }
  flush() {
    try {
      Nr = !0, T = this, N(this, O, sr).call(this);
    } finally {
      ln = 0, Rr = null, mt = null, rr = null, Nr = !1, T = null, ye = null, ut.clear();
    }
  }
  discard() {
    for (const t of l(this, yt)) t(this);
    l(this, yt).clear(), l(this, it).clear(), rt.delete(this);
  }
  /**
   * @param {Effect} effect
   */
  register_created_effect(t) {
    l(this, Ht).push(t);
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  increment(t, r) {
    let n = l(this, Ie).get(r) ?? 0;
    if (l(this, Ie).set(r, n + 1), t) {
      let s = l(this, Ae).get(r) ?? 0;
      l(this, Ae).set(r, s + 1);
    }
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   * @param {boolean} skip - whether to skip updates (because this is triggered by a stale reaction)
   */
  decrement(t, r, n) {
    let s = l(this, Ie).get(r) ?? 0;
    if (s === 1 ? l(this, Ie).delete(r) : l(this, Ie).set(r, s - 1), t) {
      let i = l(this, Ae).get(r) ?? 0;
      i === 1 ? l(this, Ae).delete(r) : l(this, Ae).set(r, i - 1);
    }
    l(this, kt) || n || (w(this, kt, !0), wt(() => {
      w(this, kt, !1), this.flush();
    }));
  }
  /**
   * @param {Set<Effect>} dirty_effects
   * @param {Set<Effect>} maybe_dirty_effects
   */
  transfer_effects(t, r) {
    for (const n of t)
      l(this, Ge).add(n);
    for (const n of r)
      l(this, ze).add(n);
    t.clear(), r.clear();
  }
  /** @param {(batch: Batch) => void} fn */
  oncommit(t) {
    l(this, xt).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    l(this, yt).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  on_fork_commit(t) {
    l(this, it).add(t);
  }
  run_fork_commit_callbacks() {
    for (const t of l(this, it)) t(this);
    l(this, it).clear();
  }
  settled() {
    return (l(this, Vt) ?? w(this, Vt, xn())).promise;
  }
  static ensure() {
    if (T === null) {
      const t = T = new cr();
      Nr || (rt.add(T), wt(() => {
        T === t && t.flush();
      }));
    }
    return T;
  }
  apply() {
    {
      ye = null;
      return;
    }
  }
  /**
   *
   * @param {Effect} effect
   */
  schedule(t) {
    if (Rr = t, t.b?.is_pending && (t.f & (At | pr | yn)) !== 0 && (t.f & pt) === 0) {
      t.b.defer_effect(t);
      return;
    }
    for (var r = t; r.parent !== null; ) {
      r = r.parent;
      var n = r.f;
      if (mt !== null && r === k && (y === null || (y.f & V) === 0))
        return;
      if ((n & (Qe | ke)) !== 0) {
        if ((n & P) === 0)
          return;
        r.f ^= P;
      }
    }
    l(this, te).push(r);
  }
};
xt = new WeakMap(), yt = new WeakMap(), it = new WeakMap(), Ie = new WeakMap(), Ae = new WeakMap(), Vt = new WeakMap(), te = new WeakMap(), Ht = new WeakMap(), Ge = new WeakMap(), ze = new WeakMap(), Ne = new WeakMap(), Et = new WeakMap(), kt = new WeakMap(), lt = new WeakMap(), O = new WeakSet(), nr = function() {
  return this.is_fork || l(this, Ae).size > 0;
}, Mn = function() {
  for (const n of l(this, lt))
    for (const s of l(n, Ae).keys()) {
      for (var t = !1, r = s; r.parent !== null; ) {
        if (l(this, Ne).has(r)) {
          t = !0;
          break;
        }
        r = r.parent;
      }
      if (!t)
        return !0;
    }
  return !1;
}, sr = function() {
  var f;
  if (ln++ > 1e3 && (rt.delete(this), Xs()), !N(this, O, nr).call(this)) {
    for (const a of l(this, Ge))
      l(this, ze).delete(a), R(a, B), this.schedule(a);
    for (const a of l(this, ze))
      R(a, Me), this.schedule(a);
  }
  const t = l(this, te);
  w(this, te, []), this.apply();
  var r = mt = [], n = [], s = rr = [];
  for (const a of t)
    try {
      N(this, O, Dr).call(this, a, r, n);
    } catch (u) {
      throw On(a), u;
    }
  if (T = null, s.length > 0) {
    var i = cr.ensure();
    for (const a of s)
      i.schedule(a);
  }
  if (mt = null, rr = null, N(this, O, nr).call(this) || N(this, O, Mn).call(this)) {
    N(this, O, ir).call(this, n), N(this, O, ir).call(this, r);
    for (const [a, u] of l(this, Ne))
      Dn(a, u);
  } else {
    l(this, Ie).size === 0 && rt.delete(this), l(this, Ge).clear(), l(this, ze).clear();
    for (const a of l(this, xt)) a(this);
    l(this, xt).clear(), an(n), an(r), l(this, Vt)?.resolve();
  }
  var o = (
    /** @type {Batch | null} */
    /** @type {unknown} */
    T
  );
  if (l(this, te).length > 0) {
    const a = o ?? (o = this);
    l(a, te).push(...l(this, te).filter((u) => !l(a, te).includes(u)));
  }
  o !== null && (rt.add(o), N(f = o, O, sr).call(f));
}, /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
Dr = function(t, r, n) {
  t.f ^= P;
  for (var s = t.first; s !== null; ) {
    var i = s.f, o = (i & (ke | Qe)) !== 0, f = o && (i & P) !== 0, a = f || (i & U) !== 0 || l(this, Ne).has(s);
    if (!a && s.fn !== null) {
      o ? s.f ^= P : (i & At) !== 0 ? r.push(s) : Jt(s) && ((i & Fe) !== 0 && l(this, ze).add(s), Mt(s));
      var u = s.first;
      if (u !== null) {
        s = u;
        continue;
      }
    }
    for (; s !== null; ) {
      var v = s.next;
      if (v !== null) {
        s = v;
        break;
      }
      s = s.parent;
    }
  }
}, /**
 * @param {Effect[]} effects
 */
ir = function(t) {
  for (var r = 0; r < t.length; r += 1)
    Fn(t[r], l(this, Ge), l(this, ze));
}, Js = function() {
  var v, h, _;
  for (const c of rt) {
    var t = c.id < this.id, r = [];
    for (const [d, [b, m]] of this.current) {
      if (c.current.has(d)) {
        var n = (
          /** @type {[any, boolean]} */
          c.current.get(d)[0]
        );
        if (t && b !== n)
          c.current.set(d, [b, m]);
        else
          continue;
      }
      r.push(d);
    }
    var s = [...c.current.keys()].filter((d) => !this.current.has(d));
    if (s.length === 0)
      t && c.discard();
    else if (r.length > 0) {
      if (t)
        for (const d of l(this, Et))
          c.unskip_effect(d, (b) => {
            var m;
            (b.f & (Fe | jt)) !== 0 ? c.schedule(b) : N(m = c, O, ir).call(m, [b]);
          });
      c.activate();
      var i = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Map();
      for (var f of r)
        Rn(f, s, i, o);
      o = /* @__PURE__ */ new Map();
      var a = [...c.current.keys()].filter(
        (d) => this.current.has(d) ? (
          /** @type {[any, boolean]} */
          this.current.get(d)[0] !== d
        ) : !0
      );
      for (const d of l(this, Ht))
        (d.f & (pe | U | Mr)) === 0 && Ur(d, a, o) && ((d.f & (jt | Fe)) !== 0 ? (R(d, B), c.schedule(d)) : l(c, Ge).add(d));
      if (l(c, te).length > 0) {
        c.apply();
        for (var u of l(c, te))
          N(v = c, O, Dr).call(v, u, [], []);
        w(c, te, []);
      }
      c.deactivate();
    }
  }
  for (const c of rt)
    l(c, lt).has(this) && (l(c, lt).delete(this), l(c, lt).size === 0 && !N(h = c, O, nr).call(h) && (c.activate(), N(_ = c, O, sr).call(_)));
};
let ht = cr;
function Xs() {
  try {
    Rs();
  } catch (e) {
    We(e, Rr);
  }
}
let Oe = null;
function an(e) {
  var t = e.length;
  if (t !== 0) {
    for (var r = 0; r < t; ) {
      var n = e[r++];
      if ((n.f & (pe | U)) === 0 && Jt(n) && (Oe = /* @__PURE__ */ new Set(), Mt(n), n.deps === null && n.first === null && n.nodes === null && n.teardown === null && n.ac === null && Wn(n), Oe?.size > 0)) {
        ut.clear();
        for (const s of Oe) {
          if ((s.f & (pe | U)) !== 0) continue;
          const i = [s];
          let o = s.parent;
          for (; o !== null; )
            Oe.has(o) && (Oe.delete(o), i.push(o)), o = o.parent;
          for (let f = i.length - 1; f >= 0; f--) {
            const a = i[f];
            (a.f & (pe | U)) === 0 && Mt(a);
          }
        }
        Oe.clear();
      }
    }
    Oe = null;
  }
}
function Rn(e, t, r, n) {
  if (!r.has(e) && (r.add(e), e.reactions !== null))
    for (const s of e.reactions) {
      const i = s.f;
      (i & V) !== 0 ? Rn(
        /** @type {Derived} */
        s,
        t,
        r,
        n
      ) : (i & (jt | Fe)) !== 0 && (i & B) === 0 && Ur(s, t, n) && (R(s, B), Yr(
        /** @type {Effect} */
        s
      ));
    }
}
function Ur(e, t, r) {
  const n = r.get(e);
  if (n !== void 0) return n;
  if (e.deps !== null)
    for (const s of e.deps) {
      if (Tt.call(t, s))
        return !0;
      if ((s.f & V) !== 0 && Ur(
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
function Yr(e) {
  T.schedule(e);
}
function Dn(e, t) {
  if (!((e.f & ke) !== 0 && (e.f & P) !== 0)) {
    (e.f & B) !== 0 ? t.d.push(e) : (e.f & Me) !== 0 && t.m.push(e), R(e, P);
    for (var r = e.first; r !== null; )
      Dn(r, t), r = r.next;
  }
}
function On(e) {
  R(e, P);
  for (var t = e.first; t !== null; )
    On(t), t = t.next;
}
function Zs(e) {
  let t = 0, r = _t(0), n;
  return () => {
    Wr() && (p(r), xi(() => (t === 0 && (n = Ti(() => e(() => qt(r)))), t += 1, () => {
      wt(() => {
        t -= 1, t === 0 && (n?.(), n = void 0, qt(r));
      });
    })));
  };
}
var Qs = Nt | Rt;
function $s(e, t, r, n) {
  new ei(e, t, r, n);
}
var de, Vr, ce, at, J, ve, H, re, Le, ft, Ke, St, Ut, Yt, qe, vr, M, ti, ri, ni, Or, lr, ar, Pr, Ir;
class ei {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(t, r, n, s) {
    g(this, M);
    /** @type {Boundary | null} */
    we(this, "parent");
    we(this, "is_pending", !1);
    /**
     * API-level transformError transform function. Transforms errors before they reach the `failed` snippet.
     * Inherited from parent boundary, or defaults to identity.
     * @type {(error: unknown) => unknown}
     */
    we(this, "transform_error");
    /** @type {TemplateNode} */
    g(this, de);
    /** @type {TemplateNode | null} */
    g(this, Vr, null);
    /** @type {BoundaryProps} */
    g(this, ce);
    /** @type {((anchor: Node) => void)} */
    g(this, at);
    /** @type {Effect} */
    g(this, J);
    /** @type {Effect | null} */
    g(this, ve, null);
    /** @type {Effect | null} */
    g(this, H, null);
    /** @type {Effect | null} */
    g(this, re, null);
    /** @type {DocumentFragment | null} */
    g(this, Le, null);
    g(this, ft, 0);
    g(this, Ke, 0);
    g(this, St, !1);
    /** @type {Set<Effect>} */
    g(this, Ut, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    g(this, Yt, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    g(this, qe, null);
    g(this, vr, Zs(() => (w(this, qe, _t(l(this, ft))), () => {
      w(this, qe, null);
    })));
    w(this, de, t), w(this, ce, r), w(this, at, (i) => {
      var o = (
        /** @type {Effect} */
        k
      );
      o.b = this, o.f |= Fr, n(i);
    }), this.parent = /** @type {Effect} */
    k.b, this.transform_error = s ?? this.parent?.transform_error ?? ((i) => i), w(this, J, Jr(() => {
      N(this, M, Or).call(this);
    }, Qs));
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    Fn(t, l(this, Ut), l(this, Yt));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!l(this, ce).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  update_pending_count(t, r) {
    N(this, M, Pr).call(this, t, r), w(this, ft, l(this, ft) + t), !(!l(this, qe) || l(this, St)) && (w(this, St, !0), wt(() => {
      w(this, St, !1), l(this, qe) && Ft(l(this, qe), l(this, ft));
    }));
  }
  get_effect_pending() {
    return l(this, vr).call(this), p(
      /** @type {Source<number>} */
      l(this, qe)
    );
  }
  /** @param {unknown} error */
  error(t) {
    if (!l(this, ce).onerror && !l(this, ce).failed)
      throw t;
    T?.is_fork ? (l(this, ve) && T.skip_effect(l(this, ve)), l(this, H) && T.skip_effect(l(this, H)), l(this, re) && T.skip_effect(l(this, re)), T.on_fork_commit(() => {
      N(this, M, Ir).call(this, t);
    })) : N(this, M, Ir).call(this, t);
  }
}
de = new WeakMap(), Vr = new WeakMap(), ce = new WeakMap(), at = new WeakMap(), J = new WeakMap(), ve = new WeakMap(), H = new WeakMap(), re = new WeakMap(), Le = new WeakMap(), ft = new WeakMap(), Ke = new WeakMap(), St = new WeakMap(), Ut = new WeakMap(), Yt = new WeakMap(), qe = new WeakMap(), vr = new WeakMap(), M = new WeakSet(), ti = function() {
  try {
    w(this, ve, he(() => l(this, at).call(this, l(this, de))));
  } catch (t) {
    this.error(t);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
ri = function(t) {
  const r = l(this, ce).failed;
  r && w(this, re, he(() => {
    r(
      l(this, de),
      () => t,
      () => () => {
      }
    );
  }));
}, ni = function() {
  const t = l(this, ce).pending;
  t && (this.is_pending = !0, w(this, H, he(() => t(l(this, de)))), wt(() => {
    var r = w(this, Le, document.createDocumentFragment()), n = Ze();
    r.append(n), w(this, ve, N(this, M, ar).call(this, () => he(() => l(this, at).call(this, n)))), l(this, Ke) === 0 && (l(this, de).before(r), w(this, Le, null), dt(
      /** @type {Effect} */
      l(this, H),
      () => {
        w(this, H, null);
      }
    ), N(this, M, lr).call(
      this,
      /** @type {Batch} */
      T
    ));
  }));
}, Or = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), w(this, Ke, 0), w(this, ft, 0), w(this, ve, he(() => {
      l(this, at).call(this, l(this, de));
    })), l(this, Ke) > 0) {
      var t = w(this, Le, document.createDocumentFragment());
      Qr(l(this, ve), t);
      const r = (
        /** @type {(anchor: Node) => void} */
        l(this, ce).pending
      );
      w(this, H, he(() => r(l(this, de))));
    } else
      N(this, M, lr).call(
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
lr = function(t) {
  this.is_pending = !1, t.transfer_effects(l(this, Ut), l(this, Yt));
}, /**
 * @template T
 * @param {() => T} fn
 */
ar = function(t) {
  var r = k, n = y, s = be;
  Re(l(this, J)), me(l(this, J)), Ct(l(this, J).ctx);
  try {
    return ht.ensure(), t();
  } catch (i) {
    return Nn(i), null;
  } finally {
    Re(r), me(n), Ct(s);
  }
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 * @param {Batch} batch
 */
Pr = function(t, r) {
  var n;
  if (!this.has_pending_snippet()) {
    this.parent && N(n = this.parent, M, Pr).call(n, t, r);
    return;
  }
  w(this, Ke, l(this, Ke) + t), l(this, Ke) === 0 && (N(this, M, lr).call(this, r), l(this, H) && dt(l(this, H), () => {
    w(this, H, null);
  }), l(this, Le) && (l(this, de).before(l(this, Le)), w(this, Le, null)));
}, /**
 * @param {unknown} error
 */
Ir = function(t) {
  l(this, ve) && (Q(l(this, ve)), w(this, ve, null)), l(this, H) && (Q(l(this, H)), w(this, H, null)), l(this, re) && (Q(l(this, re)), w(this, re, null));
  var r = l(this, ce).onerror;
  let n = l(this, ce).failed;
  var s = !1, i = !1;
  const o = () => {
    if (s) {
      Us();
      return;
    }
    s = !0, i && Is(), l(this, re) !== null && dt(l(this, re), () => {
      w(this, re, null);
    }), N(this, M, ar).call(this, () => {
      N(this, M, Or).call(this);
    });
  }, f = (a) => {
    try {
      i = !0, r?.(a, o), i = !1;
    } catch (u) {
      We(u, l(this, J) && l(this, J).parent);
    }
    n && w(this, re, N(this, M, ar).call(this, () => {
      try {
        return he(() => {
          var u = (
            /** @type {Effect} */
            k
          );
          u.b = this, u.f |= Fr, n(
            l(this, de),
            () => a,
            () => o
          );
        });
      } catch (u) {
        return We(
          u,
          /** @type {Effect} */
          l(this, J).parent
        ), null;
      }
    }));
  };
  wt(() => {
    var a;
    try {
      a = this.transform_error(t);
    } catch (u) {
      We(u, l(this, J) && l(this, J).parent);
      return;
    }
    a !== null && typeof a == "object" && typeof /** @type {any} */
    a.then == "function" ? a.then(
      f,
      /** @param {unknown} e */
      (u) => We(u, l(this, J) && l(this, J).parent)
    ) : f(a);
  });
};
function si(e, t, r, n) {
  const s = Gr;
  var i = e.filter((_) => !_.settled);
  if (r.length === 0 && i.length === 0) {
    n(t.map(s));
    return;
  }
  var o = (
    /** @type {Effect} */
    k
  ), f = ii(), a = i.length === 1 ? i[0].promise : i.length > 1 ? Promise.all(i.map((_) => _.promise)) : null;
  function u(_) {
    f();
    try {
      n(_);
    } catch (c) {
      (o.f & pe) === 0 && We(c, o);
    }
    ur();
  }
  if (r.length === 0) {
    a.then(() => u(t.map(s)));
    return;
  }
  var v = Pn();
  function h() {
    Promise.all(r.map((_) => /* @__PURE__ */ li(_))).then((_) => u([...t.map(s), ..._])).catch((_) => We(_, o)).finally(() => v());
  }
  a ? a.then(() => {
    f(), h(), ur();
  }) : h();
}
function ii() {
  var e = (
    /** @type {Effect} */
    k
  ), t = y, r = be, n = (
    /** @type {Batch} */
    T
  );
  return function(i = !0) {
    Re(e), me(t), Ct(r), i && (e.f & pe) === 0 && (n?.activate(), n?.apply());
  };
}
function ur(e = !0) {
  Re(null), me(null), Ct(null), e && T?.deactivate();
}
function Pn() {
  var e = (
    /** @type {Effect} */
    k
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
function Gr(e) {
  var t = V | B;
  return k !== null && (k.f |= Rt), {
    ctx: be,
    deps: null,
    effects: null,
    equals: En,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      I
    ),
    wv: 0,
    parent: k,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function li(e, t, r) {
  let n = (
    /** @type {Effect | null} */
    k
  );
  n === null && As();
  var s = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), i = _t(
    /** @type {V} */
    I
  ), o = !y, f = /* @__PURE__ */ new Map();
  return wi(() => {
    var a = (
      /** @type {Effect} */
      k
    ), u = xn();
    s = u.promise;
    try {
      Promise.resolve(e()).then(u.resolve, u.reject).finally(ur);
    } catch (c) {
      u.reject(c), ur();
    }
    var v = (
      /** @type {Batch} */
      T
    );
    if (o) {
      if ((a.f & pt) !== 0)
        var h = Pn();
      if (
        /** @type {Boundary} */
        n.b.is_rendered()
      )
        f.get(v)?.reject(Pe), f.delete(v);
      else {
        for (const c of f.values())
          c.reject(Pe);
        f.clear();
      }
      f.set(v, u);
    }
    const _ = (c, d = void 0) => {
      if (h) {
        var b = d === Pe;
        h(b);
      }
      if (!(d === Pe || (a.f & pe) !== 0)) {
        if (v.activate(), d)
          i.f |= Xe, Ft(i, d);
        else {
          (i.f & Xe) !== 0 && (i.f ^= Xe), Ft(i, c);
          for (const [m, C] of f) {
            if (f.delete(m), m === v) break;
            C.reject(Pe);
          }
        }
        v.deactivate();
      }
    };
    u.promise.then(_, (c) => _(null, c || "unknown"));
  }), pi(() => {
    for (const a of f.values())
      a.reject(Pe);
  }), new Promise((a) => {
    function u(v) {
      function h() {
        v === s ? a(i) : u(s);
      }
      v.then(h, h);
    }
    u(s);
  });
}
// @__NO_SIDE_EFFECTS__
function fn(e) {
  const t = /* @__PURE__ */ Gr(e);
  return Zn(t), t;
}
// @__NO_SIDE_EFFECTS__
function ai(e) {
  const t = /* @__PURE__ */ Gr(e);
  return t.equals = kn, t;
}
function fi(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var r = 0; r < t.length; r += 1)
      Q(
        /** @type {Effect} */
        t[r]
      );
  }
}
function Kr(e) {
  var t, r = k, n = e.parent;
  if (!$e && n !== null && (n.f & (pe | U)) !== 0)
    return Hs(), e.v;
  Re(n);
  try {
    e.f &= ~vt, fi(e), t = ts(e);
  } finally {
    Re(r);
  }
  return t;
}
function In(e) {
  var t = Kr(e);
  if (!e.equals(t) && (e.wv = $n(), (!T?.is_fork || e.deps === null) && (T !== null ? T.capture(e, t, !0) : e.v = t, e.deps === null))) {
    R(e, P);
    return;
  }
  $e || (ye !== null ? (Wr() || T?.is_fork) && ye.set(e, t) : Hr(e));
}
function oi(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      (t.teardown || t.ac) && (t.teardown?.(), t.ac?.abort(Pe), t.teardown = Es, t.ac = null, Bt(t, 0), Xr(t));
}
function zn(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      t.teardown && Mt(t);
}
let zr = /* @__PURE__ */ new Set();
const ut = /* @__PURE__ */ new Map();
let Ln = !1;
function _t(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: En,
    rv: 0,
    wv: 0
  };
  return r;
}
// @__NO_SIDE_EFFECTS__
function X(e, t) {
  const r = _t(e);
  return Zn(r), r;
}
// @__NO_SIDE_EFFECTS__
function ui(e, t = !1, r = !0) {
  const n = _t(e);
  return t || (n.equals = kn), n;
}
function j(e, t, r = !1) {
  y !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Ee || (y.f & Mr) !== 0) && An() && (y.f & (V | Fe | jt | Mr)) !== 0 && (ge === null || !Tt.call(ge, e)) && Ps();
  let n = r ? Je(t) : t;
  return Ft(e, n, rr);
}
function Ft(e, t, r = null) {
  if (!e.equals(t)) {
    ut.set(e, $e ? t : e.v);
    var n = ht.ensure();
    if (n.capture(e, t), (e.f & V) !== 0) {
      const s = (
        /** @type {Derived} */
        e
      );
      (e.f & B) !== 0 && Kr(s), ye === null && Hr(s);
    }
    e.wv = $n(), qn(e, B, r), k !== null && (k.f & P) !== 0 && (k.f & (ke | Qe)) === 0 && (ue === null ? ki([e]) : ue.push(e)), !n.is_fork && zr.size > 0 && !Ln && di();
  }
  return t;
}
function di() {
  Ln = !1;
  for (const e of zr)
    (e.f & P) !== 0 && R(e, Me), Jt(e) && Mt(e);
  zr.clear();
}
function qt(e) {
  j(e, e.v + 1);
}
function qn(e, t, r) {
  var n = e.reactions;
  if (n !== null)
    for (var s = n.length, i = 0; i < s; i++) {
      var o = n[i], f = o.f, a = (f & B) === 0;
      if (a && R(o, t), (f & V) !== 0) {
        var u = (
          /** @type {Derived} */
          o
        );
        ye?.delete(u), (f & vt) === 0 && (f & _e && (k === null || (k.f & or) === 0) && (o.f |= vt), qn(u, Me, r));
      } else if (a) {
        var v = (
          /** @type {Effect} */
          o
        );
        (f & Fe) !== 0 && Oe !== null && Oe.add(v), r !== null ? r.push(v) : Yr(v);
      }
    }
}
function Je(e) {
  if (typeof e != "object" || e === null || Ar in e)
    return e;
  const t = ys(e);
  if (t !== ws && t !== xs)
    return e;
  var r = /* @__PURE__ */ new Map(), n = wn(e), s = /* @__PURE__ */ X(0), i = ct, o = (f) => {
    if (ct === i)
      return f();
    var a = y, u = ct;
    me(null), cn(i);
    var v = f();
    return me(a), cn(u), v;
  };
  return n && r.set("length", /* @__PURE__ */ X(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(f, a, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && Ds();
        var v = r.get(a);
        return v === void 0 ? o(() => {
          var h = /* @__PURE__ */ X(u.value);
          return r.set(a, h), h;
        }) : j(v, u.value, !0), !0;
      },
      deleteProperty(f, a) {
        var u = r.get(a);
        if (u === void 0) {
          if (a in f) {
            const v = o(() => /* @__PURE__ */ X(I));
            r.set(a, v), qt(s);
          }
        } else
          j(u, I), qt(s);
        return !0;
      },
      get(f, a, u) {
        if (a === Ar)
          return e;
        var v = r.get(a), h = a in f;
        if (v === void 0 && (!h || Lt(f, a)?.writable) && (v = o(() => {
          var c = Je(h ? f[a] : I), d = /* @__PURE__ */ X(c);
          return d;
        }), r.set(a, v)), v !== void 0) {
          var _ = p(v);
          return _ === I ? void 0 : _;
        }
        return Reflect.get(f, a, u);
      },
      getOwnPropertyDescriptor(f, a) {
        var u = Reflect.getOwnPropertyDescriptor(f, a);
        if (u && "value" in u) {
          var v = r.get(a);
          v && (u.value = p(v));
        } else if (u === void 0) {
          var h = r.get(a), _ = h?.v;
          if (h !== void 0 && _ !== I)
            return {
              enumerable: !0,
              configurable: !0,
              value: _,
              writable: !0
            };
        }
        return u;
      },
      has(f, a) {
        if (a === Ar)
          return !0;
        var u = r.get(a), v = u !== void 0 && u.v !== I || Reflect.has(f, a);
        if (u !== void 0 || k !== null && (!v || Lt(f, a)?.writable)) {
          u === void 0 && (u = o(() => {
            var _ = v ? Je(f[a]) : I, c = /* @__PURE__ */ X(_);
            return c;
          }), r.set(a, u));
          var h = p(u);
          if (h === I)
            return !1;
        }
        return v;
      },
      set(f, a, u, v) {
        var h = r.get(a), _ = a in f;
        if (n && a === "length")
          for (var c = u; c < /** @type {Source<number>} */
          h.v; c += 1) {
            var d = r.get(c + "");
            d !== void 0 ? j(d, I) : c in f && (d = o(() => /* @__PURE__ */ X(I)), r.set(c + "", d));
          }
        if (h === void 0)
          (!_ || Lt(f, a)?.writable) && (h = o(() => /* @__PURE__ */ X(void 0)), j(h, Je(u)), r.set(a, h));
        else {
          _ = h.v !== I;
          var b = o(() => Je(u));
          j(h, b);
        }
        var m = Reflect.getOwnPropertyDescriptor(f, a);
        if (m?.set && m.set.call(v, u), !_) {
          if (n && typeof a == "string") {
            var C = (
              /** @type {Source<number>} */
              r.get("length")
            ), S = Number(a);
            Number.isInteger(S) && S >= C.v && j(C, S + 1);
          }
          qt(s);
        }
        return !0;
      },
      ownKeys(f) {
        p(s);
        var a = Reflect.ownKeys(f).filter((h) => {
          var _ = r.get(h);
          return _ === void 0 || _.v !== I;
        });
        for (var [u, v] of r)
          v.v !== I && !(u in f) && a.push(u);
        return a;
      },
      setPrototypeOf() {
        Os();
      }
    }
  );
}
var on, jn, Bn, Vn;
function ci() {
  if (on === void 0) {
    on = window, jn = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, r = Text.prototype;
    Bn = Lt(t, "firstChild").get, Vn = Lt(t, "nextSibling").get, nn(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), nn(r) && (r.__t = void 0);
  }
}
function Ze(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function dr(e) {
  return (
    /** @type {TemplateNode | null} */
    Bn.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function Wt(e) {
  return (
    /** @type {TemplateNode | null} */
    Vn.call(e)
  );
}
function E(e, t) {
  return /* @__PURE__ */ dr(e);
}
function un(e, t = !1) {
  {
    var r = /* @__PURE__ */ dr(e);
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ Wt(r) : r;
  }
}
function A(e, t = 1, r = !1) {
  let n = e;
  for (; t--; )
    n = /** @type {TemplateNode} */
    /* @__PURE__ */ Wt(n);
  return n;
}
function vi(e) {
  e.textContent = "";
}
function Hn() {
  return !1;
}
function Un(e, t, r) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElementNS(Vs, e, void 0)
  );
}
function Yn(e) {
  var t = y, r = k;
  me(null), Re(null);
  try {
    return e();
  } finally {
    me(t), Re(r);
  }
}
function hi(e) {
  k === null && (y === null && Ms(), Fs()), $e && Cs();
}
function _i(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function Be(e, t) {
  var r = k;
  r !== null && (r.f & U) !== 0 && (e |= U);
  var n = {
    ctx: be,
    deps: null,
    nodes: null,
    f: e | B | _e,
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
  if ((e & At) !== 0)
    mt !== null ? mt.push(n) : ht.ensure().schedule(n);
  else if (t !== null) {
    try {
      Mt(n);
    } catch (o) {
      throw Q(n), o;
    }
    s.deps === null && s.teardown === null && s.nodes === null && s.first === s.last && // either `null`, or a singular child
    (s.f & Rt) === 0 && (s = s.first, (e & Fe) !== 0 && (e & Nt) !== 0 && s !== null && (s.f |= Nt));
  }
  if (s !== null && (s.parent = r, r !== null && _i(s, r), y !== null && (y.f & V) !== 0 && (e & Qe) === 0)) {
    var i = (
      /** @type {Derived} */
      y
    );
    (i.effects ?? (i.effects = [])).push(s);
  }
  return n;
}
function Wr() {
  return y !== null && !Ee;
}
function pi(e) {
  const t = Be(pr, null);
  return R(t, P), t.teardown = e, t;
}
function gi(e) {
  hi();
  var t = (
    /** @type {Effect} */
    k.f
  ), r = !y && (t & ke) !== 0 && (t & pt) === 0;
  if (r) {
    var n = (
      /** @type {ComponentContext} */
      be
    );
    (n.e ?? (n.e = [])).push(e);
  } else
    return Gn(e);
}
function Gn(e) {
  return Be(At | Ts, e);
}
function bi(e) {
  ht.ensure();
  const t = Be(Qe | Rt, e);
  return (r = {}) => new Promise((n) => {
    r.outro ? dt(t, () => {
      Q(t), n(void 0);
    }) : (Q(t), n(void 0));
  });
}
function mi(e) {
  return Be(At, e);
}
function wi(e) {
  return Be(jt | Rt, e);
}
function xi(e, t = 0) {
  return Be(pr | t, e);
}
function Te(e, t = [], r = [], n = []) {
  si(n, t, r, (s) => {
    Be(pr, () => e(...s.map(p)));
  });
}
function Jr(e, t = 0) {
  var r = Be(Fe | t, e);
  return r;
}
function he(e) {
  return Be(ke | Rt, e);
}
function Kn(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = $e, n = y;
    dn(!0), me(null);
    try {
      t.call(null);
    } finally {
      dn(r), me(n);
    }
  }
}
function Xr(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    const s = r.ac;
    s !== null && Yn(() => {
      s.abort(Pe);
    });
    var n = r.next;
    (r.f & Qe) !== 0 ? r.parent = null : Q(r, t), r = n;
  }
}
function yi(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & ke) === 0 && Q(t), t = r;
  }
}
function Q(e, t = !0) {
  var r = !1;
  (t || (e.f & Ss) !== 0) && e.nodes !== null && e.nodes.end !== null && (Ei(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), r = !0), R(e, sn), Xr(e, t && !r), Bt(e, 0);
  var n = e.nodes && e.nodes.t;
  if (n !== null)
    for (const i of n)
      i.stop();
  Kn(e), e.f ^= sn, e.f |= pe;
  var s = e.parent;
  s !== null && s.first !== null && Wn(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function Ei(e, t) {
  for (; e !== null; ) {
    var r = e === t ? null : /* @__PURE__ */ Wt(e);
    e.remove(), e = r;
  }
}
function Wn(e) {
  var t = e.parent, r = e.prev, n = e.next;
  r !== null && (r.next = n), n !== null && (n.prev = r), t !== null && (t.first === e && (t.first = n), t.last === e && (t.last = r));
}
function dt(e, t, r = !0) {
  var n = [];
  Jn(e, n, !0);
  var s = () => {
    r && Q(e), t && t();
  }, i = n.length;
  if (i > 0) {
    var o = () => --i || s();
    for (var f of n)
      f.out(o);
  } else
    s();
}
function Jn(e, t, r) {
  if ((e.f & U) === 0) {
    e.f ^= U;
    var n = e.nodes && e.nodes.t;
    if (n !== null)
      for (const f of n)
        (f.is_global || r) && t.push(f);
    for (var s = e.first; s !== null; ) {
      var i = s.next;
      if ((s.f & Qe) === 0) {
        var o = (s.f & Nt) !== 0 || // If this is a branch effect without a block effect parent,
        // it means the parent block effect was pruned. In that case,
        // transparency information was transferred to the branch effect.
        (s.f & ke) !== 0 && (e.f & Fe) !== 0;
        Jn(s, t, o ? r : !1);
      }
      s = i;
    }
  }
}
function Zr(e) {
  Xn(e, !0);
}
function Xn(e, t) {
  if ((e.f & U) !== 0) {
    e.f ^= U, (e.f & P) === 0 && (R(e, B), ht.ensure().schedule(e));
    for (var r = e.first; r !== null; ) {
      var n = r.next, s = (r.f & Nt) !== 0 || (r.f & ke) !== 0;
      Xn(r, s ? t : !1), r = n;
    }
    var i = e.nodes && e.nodes.t;
    if (i !== null)
      for (const o of i)
        (o.is_global || t) && o.in();
  }
}
function Qr(e, t) {
  if (e.nodes)
    for (var r = e.nodes.start, n = e.nodes.end; r !== null; ) {
      var s = r === n ? null : /* @__PURE__ */ Wt(r);
      t.append(r), r = s;
    }
}
let fr = !1, $e = !1;
function dn(e) {
  $e = e;
}
let y = null, Ee = !1;
function me(e) {
  y = e;
}
let k = null;
function Re(e) {
  k = e;
}
let ge = null;
function Zn(e) {
  y !== null && (ge === null ? ge = [e] : ge.push(e));
}
let Z = null, ee = 0, ue = null;
function ki(e) {
  ue = e;
}
let Qn = 1, nt = 0, ct = nt;
function cn(e) {
  ct = e;
}
function $n() {
  return ++Qn;
}
function Jt(e) {
  var t = e.f;
  if ((t & B) !== 0)
    return !0;
  if (t & V && (e.f &= ~vt), (t & Me) !== 0) {
    for (var r = (
      /** @type {Value[]} */
      e.deps
    ), n = r.length, s = 0; s < n; s++) {
      var i = r[s];
      if (Jt(
        /** @type {Derived} */
        i
      ) && In(
        /** @type {Derived} */
        i
      ), i.wv > e.wv)
        return !0;
    }
    (t & _e) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    ye === null && R(e, P);
  }
  return !1;
}
function es(e, t, r = !0) {
  var n = e.reactions;
  if (n !== null && !(ge !== null && Tt.call(ge, e)))
    for (var s = 0; s < n.length; s++) {
      var i = n[s];
      (i.f & V) !== 0 ? es(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (r ? R(i, B) : (i.f & P) !== 0 && R(i, Me), Yr(
        /** @type {Effect} */
        i
      ));
    }
}
function ts(e) {
  var b;
  var t = Z, r = ee, n = ue, s = y, i = ge, o = be, f = Ee, a = ct, u = e.f;
  Z = /** @type {null | Value[]} */
  null, ee = 0, ue = null, y = (u & (ke | Qe)) === 0 ? e : null, ge = null, Ct(e.ctx), Ee = !1, ct = ++nt, e.ac !== null && (Yn(() => {
    e.ac.abort(Pe);
  }), e.ac = null);
  try {
    e.f |= or;
    var v = (
      /** @type {Function} */
      e.fn
    ), h = v();
    e.f |= pt;
    var _ = e.deps, c = T?.is_fork;
    if (Z !== null) {
      var d;
      if (c || Bt(e, ee), _ !== null && ee > 0)
        for (_.length = ee + Z.length, d = 0; d < Z.length; d++)
          _[ee + d] = Z[d];
      else
        e.deps = _ = Z;
      if (Wr() && (e.f & _e) !== 0)
        for (d = ee; d < _.length; d++)
          ((b = _[d]).reactions ?? (b.reactions = [])).push(e);
    } else !c && _ !== null && ee < _.length && (Bt(e, ee), _.length = ee);
    if (An() && ue !== null && !Ee && _ !== null && (e.f & (V | Me | B)) === 0)
      for (d = 0; d < /** @type {Source[]} */
      ue.length; d++)
        es(
          ue[d],
          /** @type {Effect} */
          e
        );
    if (s !== null && s !== e) {
      if (nt++, s.deps !== null)
        for (let m = 0; m < r; m += 1)
          s.deps[m].rv = nt;
      if (t !== null)
        for (const m of t)
          m.rv = nt;
      ue !== null && (n === null ? n = ue : n.push(.../** @type {Source[]} */
      ue));
    }
    return (e.f & Xe) !== 0 && (e.f ^= Xe), h;
  } catch (m) {
    return Nn(m);
  } finally {
    e.f ^= or, Z = t, ee = r, ue = n, y = s, ge = i, Ct(o), Ee = f, ct = a;
  }
}
function Si(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var n = bs.call(r, e);
    if (n !== -1) {
      var s = r.length - 1;
      s === 0 ? r = t.reactions = null : (r[n] = r[s], r.pop());
    }
  }
  if (r === null && (t.f & V) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Z === null || !Tt.call(Z, t))) {
    var i = (
      /** @type {Derived} */
      t
    );
    (i.f & _e) !== 0 && (i.f ^= _e, i.f &= ~vt), i.v !== I && Hr(i), oi(i), Bt(i, 0);
  }
}
function Bt(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var n = t; n < r.length; n++)
      Si(e, r[n]);
}
function Mt(e) {
  var t = e.f;
  if ((t & pe) === 0) {
    R(e, P);
    var r = k, n = fr;
    k = e, fr = !0;
    try {
      (t & (Fe | yn)) !== 0 ? yi(e) : Xr(e), Kn(e);
      var s = ts(e);
      e.teardown = typeof s == "function" ? s : null, e.wv = Qn;
      var i;
    } finally {
      fr = n, k = r;
    }
  }
}
function p(e) {
  var t = e.f, r = (t & V) !== 0;
  if (y !== null && !Ee) {
    var n = k !== null && (k.f & pe) !== 0;
    if (!n && (ge === null || !Tt.call(ge, e))) {
      var s = y.deps;
      if ((y.f & or) !== 0)
        e.rv < nt && (e.rv = nt, Z === null && s !== null && s[ee] === e ? ee++ : Z === null ? Z = [e] : Z.push(e));
      else {
        (y.deps ?? (y.deps = [])).push(e);
        var i = e.reactions;
        i === null ? e.reactions = [y] : Tt.call(i, y) || i.push(y);
      }
    }
  }
  if ($e && ut.has(e))
    return ut.get(e);
  if (r) {
    var o = (
      /** @type {Derived} */
      e
    );
    if ($e) {
      var f = o.v;
      return ((o.f & P) === 0 && o.reactions !== null || ns(o)) && (f = Kr(o)), ut.set(o, f), f;
    }
    var a = (o.f & _e) === 0 && !Ee && y !== null && (fr || (y.f & _e) !== 0), u = (o.f & pt) === 0;
    Jt(o) && (a && (o.f |= _e), In(o)), a && !u && (zn(o), rs(o));
  }
  if (ye?.has(e))
    return ye.get(e);
  if ((e.f & Xe) !== 0)
    throw e.v;
  return e.v;
}
function rs(e) {
  if (e.f |= _e, e.deps !== null)
    for (const t of e.deps)
      (t.reactions ?? (t.reactions = [])).push(e), (t.f & V) !== 0 && (t.f & _e) === 0 && (zn(
        /** @type {Derived} */
        t
      ), rs(
        /** @type {Derived} */
        t
      ));
}
function ns(e) {
  if (e.v === I) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (ut.has(t) || (t.f & V) !== 0 && ns(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function Ti(e) {
  var t = Ee;
  try {
    return Ee = !0, e();
  } finally {
    Ee = t;
  }
}
const Ai = ["touchstart", "touchmove"];
function Ni(e) {
  return Ai.includes(e);
}
const st = Symbol("events"), ss = /* @__PURE__ */ new Set(), Lr = /* @__PURE__ */ new Set();
function Cr(e, t, r) {
  (t[st] ?? (t[st] = {}))[e] = r;
}
function Ci(e) {
  for (var t = 0; t < e.length; t++)
    ss.add(e[t]);
  for (var r of Lr)
    r(e);
}
let vn = null;
function hn(e) {
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), n = e.type, s = e.composedPath?.() || [], i = (
    /** @type {null | Element} */
    s[0] || e.target
  );
  vn = e;
  var o = 0, f = vn === e && e[st];
  if (f) {
    var a = s.indexOf(f);
    if (a !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e[st] = t;
      return;
    }
    var u = s.indexOf(t);
    if (u === -1)
      return;
    a <= u && (o = a);
  }
  if (i = /** @type {Element} */
  s[o] || e.target, i !== t) {
    ms(e, "currentTarget", {
      configurable: !0,
      get() {
        return i || r;
      }
    });
    var v = y, h = k;
    me(null), Re(null);
    try {
      for (var _, c = []; i !== null; ) {
        var d = i.assignedSlot || i.parentNode || /** @type {any} */
        i.host || null;
        try {
          var b = i[st]?.[n];
          b != null && (!/** @type {any} */
          i.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === i) && b.call(i, e);
        } catch (m) {
          _ ? c.push(m) : _ = m;
        }
        if (e.cancelBubble || d === t || d === null)
          break;
        i = d;
      }
      if (_) {
        for (let m of c)
          queueMicrotask(() => {
            throw m;
          });
        throw _;
      }
    } finally {
      e[st] = t, delete e.currentTarget, me(v), Re(h);
    }
  }
}
const Fi = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (e) => e
  })
);
function Mi(e) {
  return (
    /** @type {string} */
    Fi?.createHTML(e) ?? e
  );
}
function Ri(e) {
  var t = Un("template");
  return t.innerHTML = Mi(e.replaceAll("<!>", "<!---->")), t.content;
}
function qr(e, t) {
  var r = (
    /** @type {Effect} */
    k
  );
  r.nodes === null && (r.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function Y(e, t) {
  var r = (t & js) !== 0, n = (t & Bs) !== 0, s, i = !e.startsWith("<!>");
  return () => {
    s === void 0 && (s = Ri(i ? e : "<!>" + e), r || (s = /** @type {TemplateNode} */
    /* @__PURE__ */ dr(s)));
    var o = (
      /** @type {TemplateNode} */
      n || jn ? document.importNode(s, !0) : s.cloneNode(!0)
    );
    if (r) {
      var f = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ dr(o)
      ), a = (
        /** @type {TemplateNode} */
        o.lastChild
      );
      qr(f, a);
    } else
      qr(o, o);
    return o;
  };
}
function Di() {
  var e = document.createDocumentFragment(), t = document.createComment(""), r = Ze();
  return e.append(t, r), qr(t, r), e;
}
function q(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function L(e, t) {
  var r = t == null ? "" : typeof t == "object" ? `${t}` : t;
  r !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = r, e.nodeValue = `${r}`);
}
function Oi(e, t) {
  return Pi(e, t);
}
const er = /* @__PURE__ */ new Map();
function Pi(e, { target: t, anchor: r, props: n = {}, events: s, context: i, intro: o = !0, transformError: f }) {
  ci();
  var a = void 0, u = bi(() => {
    var v = r ?? t.appendChild(Ze());
    $s(
      /** @type {TemplateNode} */
      v,
      {
        pending: () => {
        }
      },
      (c) => {
        Sn({});
        var d = (
          /** @type {ComponentContext} */
          be
        );
        i && (d.c = i), s && (n.$$events = s), a = e(c, n) || {}, Tn();
      },
      f
    );
    var h = /* @__PURE__ */ new Set(), _ = (c) => {
      for (var d = 0; d < c.length; d++) {
        var b = c[d];
        if (!h.has(b)) {
          h.add(b);
          var m = Ni(b);
          for (const G of [t, document]) {
            var C = er.get(G);
            C === void 0 && (C = /* @__PURE__ */ new Map(), er.set(G, C));
            var S = C.get(b);
            S === void 0 ? (G.addEventListener(b, hn, { passive: m }), C.set(b, 1)) : C.set(b, S + 1);
          }
        }
      }
    };
    return _(_r(ss)), Lr.add(_), () => {
      for (var c of h)
        for (const m of [t, document]) {
          var d = (
            /** @type {Map<string, number>} */
            er.get(m)
          ), b = (
            /** @type {number} */
            d.get(c)
          );
          --b == 0 ? (m.removeEventListener(c, hn), d.delete(c), d.size === 0 && er.delete(m)) : d.set(c, b);
        }
      Lr.delete(_), v !== r && v.parentNode?.removeChild(v);
    };
  });
  return jr.set(a, u), a;
}
let jr = /* @__PURE__ */ new WeakMap();
function Ii(e, t) {
  const r = jr.get(e);
  return r ? (jr.delete(e), r(t)) : Promise.resolve();
}
var xe, Ce, ne, ot, Gt, Kt, hr;
class zi {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, r = !0) {
    /** @type {TemplateNode} */
    we(this, "anchor");
    /** @type {Map<Batch, Key>} */
    g(this, xe, /* @__PURE__ */ new Map());
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
    g(this, Ce, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    g(this, ne, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    g(this, ot, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    g(this, Gt, !0);
    /**
     * @param {Batch} batch
     */
    g(this, Kt, (t) => {
      if (l(this, xe).has(t)) {
        var r = (
          /** @type {Key} */
          l(this, xe).get(t)
        ), n = l(this, Ce).get(r);
        if (n)
          Zr(n), l(this, ot).delete(r);
        else {
          var s = l(this, ne).get(r);
          s && (l(this, Ce).set(r, s.effect), l(this, ne).delete(r), s.fragment.lastChild.remove(), this.anchor.before(s.fragment), n = s.effect);
        }
        for (const [i, o] of l(this, xe)) {
          if (l(this, xe).delete(i), i === t)
            break;
          const f = l(this, ne).get(o);
          f && (Q(f.effect), l(this, ne).delete(o));
        }
        for (const [i, o] of l(this, Ce)) {
          if (i === r || l(this, ot).has(i)) continue;
          const f = () => {
            if (Array.from(l(this, xe).values()).includes(i)) {
              var u = document.createDocumentFragment();
              Qr(o, u), u.append(Ze()), l(this, ne).set(i, { effect: o, fragment: u });
            } else
              Q(o);
            l(this, ot).delete(i), l(this, Ce).delete(i);
          };
          l(this, Gt) || !n ? (l(this, ot).add(i), dt(o, f, !1)) : f();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    g(this, hr, (t) => {
      l(this, xe).delete(t);
      const r = Array.from(l(this, xe).values());
      for (const [n, s] of l(this, ne))
        r.includes(n) || (Q(s.effect), l(this, ne).delete(n));
    });
    this.anchor = t, w(this, Gt, r);
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
    ), s = Hn();
    if (r && !l(this, Ce).has(t) && !l(this, ne).has(t))
      if (s) {
        var i = document.createDocumentFragment(), o = Ze();
        i.append(o), l(this, ne).set(t, {
          effect: he(() => r(o)),
          fragment: i
        });
      } else
        l(this, Ce).set(
          t,
          he(() => r(this.anchor))
        );
    if (l(this, xe).set(n, t), s) {
      for (const [f, a] of l(this, Ce))
        f === t ? n.unskip_effect(a) : n.skip_effect(a);
      for (const [f, a] of l(this, ne))
        f === t ? n.unskip_effect(a.effect) : n.skip_effect(a.effect);
      n.oncommit(l(this, Kt)), n.ondiscard(l(this, hr));
    } else
      l(this, Kt).call(this, n);
  }
}
xe = new WeakMap(), Ce = new WeakMap(), ne = new WeakMap(), ot = new WeakMap(), Gt = new WeakMap(), Kt = new WeakMap(), hr = new WeakMap();
function De(e, t, r = !1) {
  var n = new zi(e), s = r ? Nt : 0;
  function i(o, f) {
    n.ensure(o, f);
  }
  Jr(() => {
    var o = !1;
    t((f, a = 0) => {
      o = !0, i(a, f);
    }), o || i(-1, null);
  }, s);
}
function Li(e, t) {
  return t;
}
function qi(e, t, r) {
  for (var n = [], s = t.length, i, o = t.length, f = 0; f < s; f++) {
    let h = t[f];
    dt(
      h,
      () => {
        if (i) {
          if (i.pending.delete(h), i.done.add(h), i.pending.size === 0) {
            var _ = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            Br(e, _r(i.done)), _.delete(i), _.size === 0 && (e.outrogroups = null);
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
      vi(v), v.append(u), e.items.clear();
    }
    Br(e, t, !a);
  } else
    i = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ?? (e.outrogroups = /* @__PURE__ */ new Set())).add(i);
}
function Br(e, t, r = !0) {
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
      i.f |= je;
      const o = document.createDocumentFragment();
      Qr(i, o);
    } else
      Q(t[s], r);
  }
}
var _n;
function pn(e, t, r, n, s, i = null) {
  var o = e, f = /* @__PURE__ */ new Map();
  {
    var a = (
      /** @type {Element} */
      e
    );
    o = a.appendChild(Ze());
  }
  var u = null, v = /* @__PURE__ */ ai(() => {
    var S = r();
    return wn(S) ? S : S == null ? [] : _r(S);
  }), h, _ = /* @__PURE__ */ new Map(), c = !0;
  function d(S) {
    (C.effect.f & pe) === 0 && (C.pending.delete(S), C.fallback = u, ji(C, h, o, t, n), u !== null && (h.length === 0 ? (u.f & je) === 0 ? Zr(u) : (u.f ^= je, zt(u, null, o)) : dt(u, () => {
      u = null;
    })));
  }
  function b(S) {
    C.pending.delete(S);
  }
  var m = Jr(() => {
    h = /** @type {V[]} */
    p(v);
    for (var S = h.length, G = /* @__PURE__ */ new Set(), se = (
      /** @type {Batch} */
      T
    ), Se = Hn(), ie = 0; ie < S; ie += 1) {
      var Ve = h[ie], K = n(Ve, ie), le = c ? null : f.get(K);
      le ? (le.v && Ft(le.v, Ve), le.i && Ft(le.i, ie), Se && se.unskip_effect(le.e)) : (le = Bi(
        f,
        c ? o : _n ?? (_n = Ze()),
        Ve,
        K,
        ie,
        s,
        t,
        r
      ), c || (le.e.f |= je), f.set(K, le)), G.add(K);
    }
    if (S === 0 && i && !u && (c ? u = he(() => i(o)) : (u = he(() => i(_n ?? (_n = Ze()))), u.f |= je)), S > G.size && Ns(), !c)
      if (_.set(se, G), Se) {
        for (const [gr, br] of f)
          G.has(gr) || se.skip_effect(br.e);
        se.oncommit(d), se.ondiscard(b);
      } else
        d(se);
    p(v);
  }), C = { effect: m, items: f, pending: _, outrogroups: null, fallback: u };
  c = !1;
}
function It(e) {
  for (; e !== null && (e.f & ke) === 0; )
    e = e.next;
  return e;
}
function ji(e, t, r, n, s) {
  var i = t.length, o = e.items, f = It(e.effect.first), a, u = null, v = [], h = [], _, c, d, b;
  for (b = 0; b < i; b += 1) {
    if (_ = t[b], c = s(_, b), d = /** @type {EachItem} */
    o.get(c).e, e.outrogroups !== null)
      for (const K of e.outrogroups)
        K.pending.delete(d), K.done.delete(d);
    if ((d.f & U) !== 0 && Zr(d), (d.f & je) !== 0)
      if (d.f ^= je, d === f)
        zt(d, null, r);
      else {
        var m = u ? u.next : f;
        d === e.effect.last && (e.effect.last = d.prev), d.prev && (d.prev.next = d.next), d.next && (d.next.prev = d.prev), Ye(e, u, d), Ye(e, d, m), zt(d, m, r), u = d, v = [], h = [], f = It(u.next);
        continue;
      }
    if (d !== f) {
      if (a !== void 0 && a.has(d)) {
        if (v.length < h.length) {
          var C = h[0], S;
          u = C.prev;
          var G = v[0], se = v[v.length - 1];
          for (S = 0; S < v.length; S += 1)
            zt(v[S], C, r);
          for (S = 0; S < h.length; S += 1)
            a.delete(h[S]);
          Ye(e, G.prev, se.next), Ye(e, u, G), Ye(e, se, C), f = C, u = se, b -= 1, v = [], h = [];
        } else
          a.delete(d), zt(d, f, r), Ye(e, d.prev, d.next), Ye(e, d, u === null ? e.effect.first : u.next), Ye(e, u, d), u = d;
        continue;
      }
      for (v = [], h = []; f !== null && f !== d; )
        (a ?? (a = /* @__PURE__ */ new Set())).add(f), h.push(f), f = It(f.next);
      if (f === null)
        continue;
    }
    (d.f & je) === 0 && v.push(d), u = d, f = It(d.next);
  }
  if (e.outrogroups !== null) {
    for (const K of e.outrogroups)
      K.pending.size === 0 && (Br(e, _r(K.done)), e.outrogroups?.delete(K));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (f !== null || a !== void 0) {
    var Se = [];
    if (a !== void 0)
      for (d of a)
        (d.f & U) === 0 && Se.push(d);
    for (; f !== null; )
      (f.f & U) === 0 && f !== e.fallback && Se.push(f), f = It(f.next);
    var ie = Se.length;
    if (ie > 0) {
      var Ve = i === 0 ? r : null;
      qi(e, Se, Ve);
    }
  }
}
function Bi(e, t, r, n, s, i, o, f) {
  var a = (o & zs) !== 0 ? (o & qs) === 0 ? /* @__PURE__ */ ui(r, !1, !1) : _t(r) : null, u = (o & Ls) !== 0 ? _t(s) : null;
  return {
    v: a,
    i: u,
    e: he(() => (i(t, a ?? r, u ?? s, f), () => {
      e.delete(n);
    }))
  };
}
function zt(e, t, r) {
  if (e.nodes)
    for (var n = e.nodes.start, s = e.nodes.end, i = t && (t.f & je) === 0 ? (
      /** @type {EffectNodes} */
      t.nodes.start
    ) : r; n !== null; ) {
      var o = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Wt(n)
      );
      if (i.before(n), n === s)
        return;
      n = o;
    }
}
function Ye(e, t, r) {
  t === null ? e.effect.first = r : t.next = r, r === null ? e.effect.last = t : r.prev = t;
}
function Vi(e, t) {
  mi(() => {
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
      const s = Un("style");
      s.id = t.hash, s.textContent = t.code, n.appendChild(s);
    }
  });
}
const gn = [...` 	
\r\f \v\uFEFF`];
function Hi(e, t, r) {
  var n = "" + e;
  if (r) {
    for (var s of Object.keys(r))
      if (r[s])
        n = n ? n + " " + s : s;
      else if (n.length)
        for (var i = s.length, o = 0; (o = n.indexOf(s, o)) >= 0; ) {
          var f = o + i;
          (o === 0 || gn.includes(n[o - 1])) && (f === n.length || gn.includes(n[f])) ? n = (o === 0 ? "" : n.substring(0, o)) + n.substring(f + 1) : o = f;
        }
  }
  return n === "" ? null : n;
}
function bn(e, t, r, n, s, i) {
  var o = e.__className;
  if (o !== r || o === void 0) {
    var f = Hi(r, n, i);
    f == null ? e.removeAttribute("class") : e.className = f, e.__className = r;
  } else if (i && s !== i)
    for (var a in i) {
      var u = !!i[a];
      (s == null || u !== !!s[a]) && e.classList.toggle(a, u);
    }
  return i;
}
function tr(e, t, r, n) {
  var s = (
    /** @type {V} */
    n
  ), i = !0, o = () => (i && (i = !1, s = /** @type {V} */
  n), s), f;
  f = /** @type {V} */
  e[t], f === void 0 && n !== void 0 && (f = o());
  var a;
  return a = () => {
    var u = (
      /** @type {V} */
      e[t]
    );
    return u === void 0 ? o() : (i = !0, u);
  }, a;
}
const Ui = "5";
var mn;
typeof window < "u" && ((mn = window.__svelte ?? (window.__svelte = {})).v ?? (mn.v = /* @__PURE__ */ new Set())).add(Ui);
var Yi = /* @__PURE__ */ Y('<div class="error svelte-xbds9s"> </div>'), Gi = /* @__PURE__ */ Y('<div class="empty svelte-xbds9s">Loading metrics…</div>'), Ki = /* @__PURE__ */ Y('<div class="empty svelte-xbds9s">No entries</div>'), Wi = /* @__PURE__ */ Y('<tr><td class="nowrap svelte-xbds9s"> </td><td class="svelte-xbds9s"> </td><td class="red svelte-xbds9s"> </td><td class="green svelte-xbds9s"> </td></tr>'), Ji = /* @__PURE__ */ Y('<div class="note svelte-xbds9s"> </div>'), Xi = /* @__PURE__ */ Y('<div class="table-wrap svelte-xbds9s"><table class="svelte-xbds9s"><thead><tr><th class="svelte-xbds9s">Date</th><th class="svelte-xbds9s">Description</th><th class="svelte-xbds9s">Debit</th><th class="svelte-xbds9s">Credit</th></tr></thead><tbody></tbody></table> <!></div>'), Zi = /* @__PURE__ */ Y('<div class="kpi-row svelte-xbds9s"><div class="kpi svelte-xbds9s"><span class="kpi-label svelte-xbds9s">Income</span><span class="kpi-val green svelte-xbds9s"> </span></div> <div class="kpi svelte-xbds9s"><span class="kpi-label svelte-xbds9s">Expense</span><span class="kpi-val red svelte-xbds9s"> </span></div> <div class="kpi svelte-xbds9s"><span class="kpi-label svelte-xbds9s">Net</span><span class="kpi-val svelte-xbds9s"> </span></div> <div class="kpi svelte-xbds9s"><span class="kpi-label svelte-xbds9s">Funds</span><span class="kpi-val svelte-xbds9s"> </span></div></div> <div class="section svelte-xbds9s"><h3 class="svelte-xbds9s"> </h3> <!></div>', 1), Qi = /* @__PURE__ */ Y('<div class="empty svelte-xbds9s">No budgets found</div>'), $i = /* @__PURE__ */ Y('<div class="kv svelte-xbds9s"><span>Allocated</span><span> </span></div>'), el = /* @__PURE__ */ Y('<div class="kv svelte-xbds9s"><span>Spent</span><span class="red svelte-xbds9s"> </span></div>'), tl = /* @__PURE__ */ Y('<div class="kv svelte-xbds9s"><span>Remaining</span><span class="green svelte-xbds9s"> </span></div>'), rl = /* @__PURE__ */ Y('<div class="kv svelte-xbds9s"><span>Period</span><span> </span></div>'), nl = /* @__PURE__ */ Y('<div class="card svelte-xbds9s"><h4 class="svelte-xbds9s"> </h4> <!> <!> <!> <!></div>'), sl = /* @__PURE__ */ Y('<div class="grid svelte-xbds9s"></div>'), il = /* @__PURE__ */ Y('<div class="rt-met svelte-xbds9s"><div class="header svelte-xbds9s"><h2 class="svelte-xbds9s">Metrics</h2> <span class="badge svelte-xbds9s"> </span> <button class="refresh svelte-xbds9s">↻</button></div> <!> <div class="tabs svelte-xbds9s"><button>Financial</button> <button>Budgets</button></div> <!></div>');
const ll = {
  hash: "svelte-xbds9s",
  code: ".rt-met.svelte-xbds9s {font-family:system-ui, -apple-system, sans-serif;max-width:900px;margin:0 auto;padding:1.5rem;}.header.svelte-xbds9s {display:flex;align-items:center;gap:0.75rem;margin-bottom:1rem;flex-wrap:wrap;}.header.svelte-xbds9s h2:where(.svelte-xbds9s) {margin:0;font-size:1.5rem;}.badge.svelte-xbds9s {background:#e0e7ff;color:#3730a3;padding:0.15rem 0.5rem;border-radius:9999px;font-size:0.75rem;}.refresh.svelte-xbds9s {margin-left:auto;padding:0.25rem 0.5rem;background:#f3f4f6;border:1px solid #d1d5db;border-radius:0.375rem;cursor:pointer;}.tabs.svelte-xbds9s {display:flex;border-bottom:2px solid #e5e7eb;margin-bottom:1rem;}.tabs.svelte-xbds9s button:where(.svelte-xbds9s) {padding:0.5rem 1rem;background:none;border:none;border-bottom:2px solid transparent;margin-bottom:-2px;cursor:pointer;font-size:0.875rem;color:#6b7280;}.tabs.svelte-xbds9s button.active:where(.svelte-xbds9s) {border-bottom-color:#4f46e5;color:#4f46e5;font-weight:500;}.error.svelte-xbds9s {background:#fef2f2;color:#991b1b;border:1px solid #fecaca;padding:0.75rem;border-radius:0.5rem;margin-bottom:1rem;}.empty.svelte-xbds9s {color:#6b7280;text-align:center;padding:2rem;}.kpi-row.svelte-xbds9s {display:grid;grid-template-columns:repeat(auto-fit, minmax(140px, 1fr));gap:0.75rem;margin-bottom:1.5rem;}.kpi.svelte-xbds9s {background:#fff;border:1px solid #e5e7eb;border-radius:0.75rem;padding:1rem;text-align:center;}.kpi-label.svelte-xbds9s {display:block;font-size:0.75rem;color:#6b7280;margin-bottom:0.25rem;}.kpi-val.svelte-xbds9s {font-size:1.25rem;font-weight:600;}.green.svelte-xbds9s {color:#16a34a;}.red.svelte-xbds9s {color:#dc2626;}.section.svelte-xbds9s {margin-bottom:1.5rem;}.section.svelte-xbds9s h3:where(.svelte-xbds9s) {margin:0 0 0.75rem;font-size:1rem;}.table-wrap.svelte-xbds9s {overflow-x:auto;}table.svelte-xbds9s {width:100%;border-collapse:collapse;font-size:0.8rem;}th.svelte-xbds9s {text-align:left;padding:0.5rem;border-bottom:2px solid #e5e7eb;color:#6b7280;font-weight:500;}td.svelte-xbds9s {padding:0.4rem 0.5rem;border-bottom:1px solid #f3f4f6;}.nowrap.svelte-xbds9s {white-space:nowrap;}.note.svelte-xbds9s {font-size:0.75rem;color:#9ca3af;text-align:center;padding:0.5rem;}.grid.svelte-xbds9s {display:grid;grid-template-columns:repeat(auto-fill, minmax(260px, 1fr));gap:0.75rem;}.card.svelte-xbds9s {background:#fff;border:1px solid #e5e7eb;border-radius:0.75rem;padding:1rem;}.card.svelte-xbds9s h4:where(.svelte-xbds9s) {margin:0 0 0.5rem;font-size:0.9rem;}.kv.svelte-xbds9s {display:flex;justify-content:space-between;padding:0.25rem 0;font-size:0.8rem;border-bottom:1px solid #f9fafb;}"
};
function al(e, t) {
  Sn(t, !0), Vi(e, ll), tr(t, "extensionId", 3, "metrics");
  let r = tr(t, "version", 3, "");
  tr(t, "principal", 3, ""), tr(t, "isAuthenticated", 3, !0);
  let n = /* @__PURE__ */ X("financial"), s = /* @__PURE__ */ X(Je([])), i = /* @__PURE__ */ X(Je([])), o = /* @__PURE__ */ X(Je([])), f = /* @__PURE__ */ X(!0), a = /* @__PURE__ */ X("");
  async function u(x, F = 100) {
    const ae = await t.backend.get_objects_paginated(x, 0, F, "desc"), He = typeof ae == "string" ? JSON.parse(ae) : ae;
    return He?.data ?? (Array.isArray(He) ? He : []);
  }
  async function v() {
    j(f, !0), j(a, "");
    try {
      const [x, F, ae] = await Promise.all([
        u("Budget"),
        u("LedgerEntry", 200),
        u("Fund")
      ]);
      j(s, x, !0), j(i, F, !0), j(o, ae, !0);
    } catch (x) {
      j(a, x?.message || String(x), !0);
    } finally {
      j(f, !1);
    }
  }
  gi(() => {
    v();
  });
  function h(x) {
    if (x == null) return "—";
    const F = Number(x);
    return isNaN(F) ? String(x) : F.toLocaleString(void 0, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }
  let _ = /* @__PURE__ */ fn(() => p(i).filter((x) => (x.type || "").toLowerCase().includes("income") || Number(x.credit || 0) > 0).reduce((x, F) => x + Number(F.credit || F.amount || 0), 0)), c = /* @__PURE__ */ fn(() => p(i).filter((x) => (x.type || "").toLowerCase().includes("expense") || Number(x.debit || 0) > 0).reduce((x, F) => x + Number(F.debit || F.amount || 0), 0));
  var d = il(), b = E(d), m = A(E(b), 2), C = E(m), S = A(m, 2), G = A(b, 2);
  {
    var se = (x) => {
      var F = Yi(), ae = E(F);
      Te(() => L(ae, p(a))), q(x, F);
    };
    De(G, (x) => {
      p(a) && x(se);
    });
  }
  var Se = A(G, 2), ie = E(Se);
  let Ve;
  var K = A(ie, 2);
  let le;
  var gr = A(Se, 2);
  {
    var br = (x) => {
      var F = Gi();
      q(x, F);
    }, is = (x) => {
      var F = Zi(), ae = un(F), He = E(ae), mr = A(E(He)), Ue = E(mr), et = A(He, 2), gt = A(E(et)), $ = E(gt), Dt = A(et, 2), Xt = A(E(Dt)), wr = E(Xt), Zt = A(Dt, 2), xr = A(E(Zt)), Qt = E(xr), yr = A(ae, 2), Ot = E(yr), Er = E(Ot), kr = A(Ot, 2);
      {
        var Sr = (D) => {
          var W = Ki();
          q(D, W);
        }, z = (D) => {
          var W = Xi(), fe = E(W), tt = A(E(fe));
          pn(tt, 21, () => p(i).slice(0, 50), Li, (Pt, oe) => {
            var $t = Wi(), $r = E($t), os = E($r), en = A($r), us = E(en), tn = A(en), ds = E(tn), cs = A(tn), vs = E(cs);
            Te(
              (hs, _s) => {
                L(os, p(oe).date || p(oe).created_at || "—"), L(us, p(oe).description || p(oe).memo || p(oe).type || "—"), L(ds, hs), L(vs, _s);
              },
              [
                () => p(oe).debit ? h(p(oe).debit) : "",
                () => p(oe).credit ? h(p(oe).credit) : ""
              ]
            ), q(Pt, $t);
          });
          var as = A(fe, 2);
          {
            var fs = (Pt) => {
              var oe = Ji(), $t = E(oe);
              Te(() => L($t, `Showing 50 of ${p(i).length ?? ""} entries`)), q(Pt, oe);
            };
            De(as, (Pt) => {
              p(i).length > 50 && Pt(fs);
            });
          }
          q(D, W);
        };
        De(kr, (D) => {
          p(i).length === 0 ? D(Sr) : D(z, -1);
        });
      }
      Te(
        (D, W, fe) => {
          L(Ue, D), L($, W), L(wr, fe), L(Qt, p(o).length), L(Er, `Ledger Entries (${p(i).length ?? ""})`);
        },
        [
          () => h(p(_)),
          () => h(p(c)),
          () => h(p(_) - p(c))
        ]
      ), q(x, F);
    }, ls = (x) => {
      var F = Di(), ae = un(F);
      {
        var He = (Ue) => {
          var et = Qi();
          q(Ue, et);
        }, mr = (Ue) => {
          var et = sl();
          pn(et, 21, () => p(s), (gt) => gt.id || gt.name, (gt, $) => {
            var Dt = nl(), Xt = E(Dt), wr = E(Xt), Zt = A(Xt, 2);
            {
              var xr = (z) => {
                var D = $i(), W = A(E(D)), fe = E(W);
                Te((tt) => L(fe, tt), [() => h(p($).allocated)]), q(z, D);
              };
              De(Zt, (z) => {
                p($).allocated !== void 0 && z(xr);
              });
            }
            var Qt = A(Zt, 2);
            {
              var yr = (z) => {
                var D = el(), W = A(E(D)), fe = E(W);
                Te((tt) => L(fe, tt), [() => h(p($).spent)]), q(z, D);
              };
              De(Qt, (z) => {
                p($).spent !== void 0 && z(yr);
              });
            }
            var Ot = A(Qt, 2);
            {
              var Er = (z) => {
                var D = tl(), W = A(E(D)), fe = E(W);
                Te((tt) => L(fe, tt), [() => h(p($).remaining)]), q(z, D);
              };
              De(Ot, (z) => {
                p($).remaining !== void 0 && z(Er);
              });
            }
            var kr = A(Ot, 2);
            {
              var Sr = (z) => {
                var D = rl(), W = A(E(D)), fe = E(W);
                Te(() => L(fe, p($).period)), q(z, D);
              };
              De(kr, (z) => {
                p($).period && z(Sr);
              });
            }
            Te(() => L(wr, p($).name || p($).category || p($).id || "Budget")), q(gt, Dt);
          }), q(Ue, et);
        };
        De(ae, (Ue) => {
          p(s).length === 0 ? Ue(He) : Ue(mr, -1);
        });
      }
      q(x, F);
    };
    De(gr, (x) => {
      p(f) ? x(br) : p(n) === "financial" ? x(is, 1) : p(n) === "budget" && x(ls, 2);
    });
  }
  Te(() => {
    L(C, `v${r() ?? ""}`), S.disabled = p(f), Ve = bn(ie, 1, "svelte-xbds9s", null, Ve, { active: p(n) === "financial" }), le = bn(K, 1, "svelte-xbds9s", null, le, { active: p(n) === "budget" });
  }), Cr("click", S, v), Cr("click", ie, () => j(n, "financial")), Cr("click", K, () => j(n, "budget")), q(e, d), Tn();
}
Ci(["click"]);
function ul(e, t) {
  const r = Oi(al, { target: e, props: t });
  return {
    unmount() {
      try {
        Ii(r);
      } catch {
      }
    }
  };
}
export {
  ul as default
};
