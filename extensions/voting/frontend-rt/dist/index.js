var Xa = Object.defineProperty;
var As = (e) => {
  throw TypeError(e);
};
var Za = (e, t, r) => t in e ? Xa(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var nt = (e, t, r) => Za(e, typeof t != "symbol" ? t + "" : t, r), Hn = (e, t, r) => t.has(e) || As("Cannot " + r);
var l = (e, t, r) => (Hn(e, t, "read from private field"), r ? r.call(e) : t.get(e)), N = (e, t, r) => t.has(e) ? As("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), L = (e, t, r, n) => (Hn(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r), Y = (e, t, r) => (Hn(e, t, "access private method"), r);
var Us = Array.isArray, Qa = Array.prototype.indexOf, jr = Array.prototype.includes, Nn = Array.from, $a = Object.defineProperty, Kr = Object.getOwnPropertyDescriptor, ei = Object.getOwnPropertyDescriptors, ti = Object.prototype, ri = Array.prototype, qs = Object.getPrototypeOf, Ts = Object.isExtensible;
const ni = () => {
};
function si(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function Hs() {
  var e, t, r = new Promise((n, s) => {
    e = n, t = s;
  });
  return { promise: r, resolve: e, reject: t };
}
const ce = 2, Qr = 4, Pn = 8, Ys = 1 << 24, pt = 16, ot = 32, zt = 64, Zn = 128, Ye = 512, ae = 1024, fe = 2048, _t = 4096, xe = 8192, Je = 16384, xr = 32768, Ns = 1 << 25, Lr = 65536, Qn = 1 << 17, ai = 1 << 18, Ir = 1 << 19, ii = 1 << 20, ht = 1 << 25, _r = 65536, Cn = 1 << 21, $r = 1 << 22, Ft = 1 << 23, Yn = Symbol("$state"), oi = Symbol(""), wt = new class extends Error {
  constructor() {
    super(...arguments);
    nt(this, "name", "StaleReactionError");
    nt(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
function li(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function di() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function ui(e, t, r) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function fi(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function ci() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function vi(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function hi() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function pi() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function _i() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function gi() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function bi() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
const xi = 1, mi = 2, Js = 4, yi = 8, wi = 16, Ws = 1, ki = 2, oe = Symbol(), Gs = "http://www.w3.org/1999/xhtml";
function Ei() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function Ci() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function Ks(e) {
  return e === this.v;
}
function Si(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Xs(e) {
  return !Si(e, this.v);
}
let De = null;
function Or(e) {
  De = e;
}
function Zs(e, t = !1, r) {
  De = {
    p: De,
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
function Qs(e) {
  var t = (
    /** @type {ComponentContext} */
    De
  ), r = t.e;
  if (r !== null) {
    t.e = null;
    for (var n of r)
      xa(n);
  }
  return t.i = !0, De = t.p, /** @type {T} */
  {};
}
function $s() {
  return !0;
}
let sr = [];
function ea() {
  var e = sr;
  sr = [], si(e);
}
function Bt(e) {
  if (sr.length === 0 && !Xr) {
    var t = sr;
    queueMicrotask(() => {
      t === sr && ea();
    });
  }
  sr.push(e);
}
function Mi() {
  for (; sr.length > 0; )
    ea();
}
function ta(e) {
  var t = F;
  if (t === null)
    return O.f |= Ft, e;
  if ((t.f & xr) === 0 && (t.f & Qr) === 0)
    throw e;
  Ot(e, t);
}
function Ot(e, t) {
  for (; t !== null; ) {
    if ((t.f & Zn) !== 0) {
      if ((t.f & xr) === 0)
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
const Ai = -7169;
function $(e, t) {
  e.f = e.f & Ai | t;
}
function us(e) {
  (e.f & Ye) !== 0 || e.deps === null ? $(e, ae) : $(e, _t);
}
function ra(e) {
  if (e !== null)
    for (const t of e)
      (t.f & ce) === 0 || (t.f & _r) === 0 || (t.f ^= _r, ra(
        /** @type {Derived} */
        t.deps
      ));
}
function na(e, t, r) {
  (e.f & fe) !== 0 ? t.add(e) : (e.f & _t) !== 0 && r.add(e), ra(e.deps), $(e, ae);
}
const nr = /* @__PURE__ */ new Set();
let j = null, at = null, $n = null, Xr = !1, Jn = !1, Ar = null, bn = null;
var Ps = 0;
let Ti = 1;
var Tr, Nr, lr, kt, ft, rn, Ne, nn, jt, Et, ct, Pr, Rr, dr, ne, xn, sa, mn, es, yn, Ni;
const Mn = class Mn {
  constructor() {
    N(this, ne);
    nt(this, "id", Ti++);
    /**
     * The current values of any signals that are updated in this batch.
     * Tuple format: [value, is_derived] (note: is_derived is false for deriveds, too, if they were overridden via assignment)
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Value, [any, boolean]>}
     */
    nt(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any signals (sources and deriveds) that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Value, any>}
     */
    nt(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<(batch: Batch) => void>}
     */
    N(this, Tr, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    N(this, Nr, /* @__PURE__ */ new Set());
    /**
     * Callbacks that should run only when a fork is committed.
     * @type {Set<(batch: Batch) => void>}
     */
    N(this, lr, /* @__PURE__ */ new Set());
    /**
     * Async effects that are currently in flight
     * @type {Map<Effect, number>}
     */
    N(this, kt, /* @__PURE__ */ new Map());
    /**
     * Async effects that are currently in flight, _not_ inside a pending boundary
     * @type {Map<Effect, number>}
     */
    N(this, ft, /* @__PURE__ */ new Map());
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    N(this, rn, null);
    /**
     * The root effects that need to be flushed
     * @type {Effect[]}
     */
    N(this, Ne, []);
    /**
     * Effects created while this batch was active.
     * @type {Effect[]}
     */
    N(this, nn, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    N(this, jt, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    N(this, Et, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    N(this, ct, /* @__PURE__ */ new Map());
    /**
     * Inverse of #skipped_branches which we need to tell prior batches to unskip them when committing
     * @type {Set<Effect>}
     */
    N(this, Pr, /* @__PURE__ */ new Set());
    nt(this, "is_fork", !1);
    N(this, Rr, !1);
    /** @type {Set<Batch>} */
    N(this, dr, /* @__PURE__ */ new Set());
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(t) {
    l(this, ct).has(t) || l(this, ct).set(t, { d: [], m: [] }), l(this, Pr).delete(t);
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   * @param {(e: Effect) => void} callback
   */
  unskip_effect(t, r = (n) => this.schedule(n)) {
    var n = l(this, ct).get(t);
    if (n) {
      l(this, ct).delete(t);
      for (var s of n.d)
        $(s, fe), r(s);
      for (s of n.m)
        $(s, _t), r(s);
    }
    l(this, Pr).add(t);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Value} source
   * @param {any} value
   * @param {boolean} [is_derived]
   */
  capture(t, r, n = !1) {
    t.v !== oe && !this.previous.has(t) && this.previous.set(t, t.v), (t.f & Ft) === 0 && (this.current.set(t, [r, n]), at?.set(t, r)), this.is_fork || (t.v = r);
  }
  activate() {
    j = this;
  }
  deactivate() {
    j = null, at = null;
  }
  flush() {
    try {
      Jn = !0, j = this, Y(this, ne, mn).call(this);
    } finally {
      Ps = 0, $n = null, Ar = null, bn = null, Jn = !1, j = null, at = null, vr.clear();
    }
  }
  discard() {
    for (const t of l(this, Nr)) t(this);
    l(this, Nr).clear(), l(this, lr).clear(), nr.delete(this);
  }
  /**
   * @param {Effect} effect
   */
  register_created_effect(t) {
    l(this, nn).push(t);
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  increment(t, r) {
    let n = l(this, kt).get(r) ?? 0;
    if (l(this, kt).set(r, n + 1), t) {
      let s = l(this, ft).get(r) ?? 0;
      l(this, ft).set(r, s + 1);
    }
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   * @param {boolean} skip - whether to skip updates (because this is triggered by a stale reaction)
   */
  decrement(t, r, n) {
    let s = l(this, kt).get(r) ?? 0;
    if (s === 1 ? l(this, kt).delete(r) : l(this, kt).set(r, s - 1), t) {
      let i = l(this, ft).get(r) ?? 0;
      i === 1 ? l(this, ft).delete(r) : l(this, ft).set(r, i - 1);
    }
    l(this, Rr) || n || (L(this, Rr, !0), Bt(() => {
      L(this, Rr, !1), this.flush();
    }));
  }
  /**
   * @param {Set<Effect>} dirty_effects
   * @param {Set<Effect>} maybe_dirty_effects
   */
  transfer_effects(t, r) {
    for (const n of t)
      l(this, jt).add(n);
    for (const n of r)
      l(this, Et).add(n);
    t.clear(), r.clear();
  }
  /** @param {(batch: Batch) => void} fn */
  oncommit(t) {
    l(this, Tr).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    l(this, Nr).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  on_fork_commit(t) {
    l(this, lr).add(t);
  }
  run_fork_commit_callbacks() {
    for (const t of l(this, lr)) t(this);
    l(this, lr).clear();
  }
  settled() {
    return (l(this, rn) ?? L(this, rn, Hs())).promise;
  }
  static ensure() {
    if (j === null) {
      const t = j = new Mn();
      Jn || (nr.add(j), Xr || Bt(() => {
        j === t && t.flush();
      }));
    }
    return j;
  }
  apply() {
    {
      at = null;
      return;
    }
  }
  /**
   *
   * @param {Effect} effect
   */
  schedule(t) {
    if ($n = t, t.b?.is_pending && (t.f & (Qr | Pn | Ys)) !== 0 && (t.f & xr) === 0) {
      t.b.defer_effect(t);
      return;
    }
    for (var r = t; r.parent !== null; ) {
      r = r.parent;
      var n = r.f;
      if (Ar !== null && r === F && (O === null || (O.f & ce) === 0))
        return;
      if ((n & (zt | ot)) !== 0) {
        if ((n & ae) === 0)
          return;
        r.f ^= ae;
      }
    }
    l(this, Ne).push(r);
  }
};
Tr = new WeakMap(), Nr = new WeakMap(), lr = new WeakMap(), kt = new WeakMap(), ft = new WeakMap(), rn = new WeakMap(), Ne = new WeakMap(), nn = new WeakMap(), jt = new WeakMap(), Et = new WeakMap(), ct = new WeakMap(), Pr = new WeakMap(), Rr = new WeakMap(), dr = new WeakMap(), ne = new WeakSet(), xn = function() {
  return this.is_fork || l(this, ft).size > 0;
}, sa = function() {
  for (const n of l(this, dr))
    for (const s of l(n, ft).keys()) {
      for (var t = !1, r = s; r.parent !== null; ) {
        if (l(this, ct).has(r)) {
          t = !0;
          break;
        }
        r = r.parent;
      }
      if (!t)
        return !0;
    }
  return !1;
}, mn = function() {
  var c;
  if (Ps++ > 1e3 && (nr.delete(this), Ri()), !Y(this, ne, xn).call(this)) {
    for (const o of l(this, jt))
      l(this, Et).delete(o), $(o, fe), this.schedule(o);
    for (const o of l(this, Et))
      $(o, _t), this.schedule(o);
  }
  const t = l(this, Ne);
  L(this, Ne, []), this.apply();
  var r = Ar = [], n = [], s = bn = [];
  for (const o of t)
    try {
      Y(this, ne, es).call(this, o, r, n);
    } catch (u) {
      throw oa(o), u;
    }
  if (j = null, s.length > 0) {
    var i = Mn.ensure();
    for (const o of s)
      i.schedule(o);
  }
  if (Ar = null, bn = null, Y(this, ne, xn).call(this) || Y(this, ne, sa).call(this)) {
    Y(this, ne, yn).call(this, n), Y(this, ne, yn).call(this, r);
    for (const [o, u] of l(this, ct))
      ia(o, u);
  } else {
    l(this, kt).size === 0 && nr.delete(this), l(this, jt).clear(), l(this, Et).clear();
    for (const o of l(this, Tr)) o(this);
    l(this, Tr).clear(), Rs(n), Rs(r), l(this, rn)?.resolve();
  }
  var d = (
    /** @type {Batch | null} */
    /** @type {unknown} */
    j
  );
  if (l(this, Ne).length > 0) {
    const o = d ?? (d = this);
    l(o, Ne).push(...l(this, Ne).filter((u) => !l(o, Ne).includes(u)));
  }
  d !== null && (nr.add(d), Y(c = d, ne, mn).call(c));
}, /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
es = function(t, r, n) {
  t.f ^= ae;
  for (var s = t.first; s !== null; ) {
    var i = s.f, d = (i & (ot | zt)) !== 0, c = d && (i & ae) !== 0, o = c || (i & xe) !== 0 || l(this, ct).has(s);
    if (!o && s.fn !== null) {
      d ? s.f ^= ae : (i & Qr) !== 0 ? r.push(s) : un(s) && ((i & pt) !== 0 && l(this, Et).add(s), Br(s));
      var u = s.first;
      if (u !== null) {
        s = u;
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
yn = function(t) {
  for (var r = 0; r < t.length; r += 1)
    na(t[r], l(this, jt), l(this, Et));
}, Ni = function() {
  var p, h, m;
  for (const x of nr) {
    var t = x.id < this.id, r = [];
    for (const [w, [T, g]] of this.current) {
      if (x.current.has(w)) {
        var n = (
          /** @type {[any, boolean]} */
          x.current.get(w)[0]
        );
        if (t && T !== n)
          x.current.set(w, [T, g]);
        else
          continue;
      }
      r.push(w);
    }
    var s = [...x.current.keys()].filter((w) => !this.current.has(w));
    if (s.length === 0)
      t && x.discard();
    else if (r.length > 0) {
      if (t)
        for (const w of l(this, Pr))
          x.unskip_effect(w, (T) => {
            var g;
            (T.f & (pt | $r)) !== 0 ? x.schedule(T) : Y(g = x, ne, yn).call(g, [T]);
          });
      x.activate();
      var i = /* @__PURE__ */ new Set(), d = /* @__PURE__ */ new Map();
      for (var c of r)
        aa(c, s, i, d);
      d = /* @__PURE__ */ new Map();
      var o = [...x.current.keys()].filter(
        (w) => this.current.has(w) ? (
          /** @type {[any, boolean]} */
          this.current.get(w)[0] !== w
        ) : !0
      );
      for (const w of l(this, nn))
        (w.f & (Je | xe | Qn)) === 0 && fs(w, o, d) && ((w.f & ($r | pt)) !== 0 ? ($(w, fe), x.schedule(w)) : l(x, jt).add(w));
      if (l(x, Ne).length > 0) {
        x.apply();
        for (var u of l(x, Ne))
          Y(p = x, ne, es).call(p, u, [], []);
        L(x, Ne, []);
      }
      x.deactivate();
    }
  }
  for (const x of nr)
    l(x, dr).has(this) && (l(x, dr).delete(this), l(x, dr).size === 0 && !Y(h = x, ne, xn).call(h) && (x.activate(), Y(m = x, ne, mn).call(m)));
};
let gr = Mn;
function Pi(e) {
  var t = Xr;
  Xr = !0;
  try {
    for (var r; ; ) {
      if (Mi(), j === null)
        return (
          /** @type {T} */
          r
        );
      j.flush();
    }
  } finally {
    Xr = t;
  }
}
function Ri() {
  try {
    hi();
  } catch (e) {
    Ot(e, $n);
  }
}
let yt = null;
function Rs(e) {
  var t = e.length;
  if (t !== 0) {
    for (var r = 0; r < t; ) {
      var n = e[r++];
      if ((n.f & (Je | xe)) === 0 && un(n) && (yt = /* @__PURE__ */ new Set(), Br(n), n.deps === null && n.first === null && n.nodes === null && n.teardown === null && n.ac === null && wa(n), yt?.size > 0)) {
        vr.clear();
        for (const s of yt) {
          if ((s.f & (Je | xe)) !== 0) continue;
          const i = [s];
          let d = s.parent;
          for (; d !== null; )
            yt.has(d) && (yt.delete(d), i.push(d)), d = d.parent;
          for (let c = i.length - 1; c >= 0; c--) {
            const o = i[c];
            (o.f & (Je | xe)) === 0 && Br(o);
          }
        }
        yt.clear();
      }
    }
    yt = null;
  }
}
function aa(e, t, r, n) {
  if (!r.has(e) && (r.add(e), e.reactions !== null))
    for (const s of e.reactions) {
      const i = s.f;
      (i & ce) !== 0 ? aa(
        /** @type {Derived} */
        s,
        t,
        r,
        n
      ) : (i & ($r | pt)) !== 0 && (i & fe) === 0 && fs(s, t, n) && ($(s, fe), cs(
        /** @type {Effect} */
        s
      ));
    }
}
function fs(e, t, r) {
  const n = r.get(e);
  if (n !== void 0) return n;
  if (e.deps !== null)
    for (const s of e.deps) {
      if (jr.call(t, s))
        return !0;
      if ((s.f & ce) !== 0 && fs(
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
function cs(e) {
  j.schedule(e);
}
function ia(e, t) {
  if (!((e.f & ot) !== 0 && (e.f & ae) !== 0)) {
    (e.f & fe) !== 0 ? t.d.push(e) : (e.f & _t) !== 0 && t.m.push(e), $(e, ae);
    for (var r = e.first; r !== null; )
      ia(r, t), r = r.next;
  }
}
function oa(e) {
  $(e, ae);
  for (var t = e.first; t !== null; )
    oa(t), t = t.next;
}
function Di(e) {
  let t = 0, r = br(0), n;
  return () => {
    ps() && (a(r), ma(() => (t === 0 && (n = ms(() => e(() => Zr(r)))), t += 1, () => {
      Bt(() => {
        t -= 1, t === 0 && (n?.(), n = void 0, Zr(r));
      });
    })));
  };
}
var ji = Lr | Ir;
function Li(e, t, r, n) {
  new Oi(e, t, r, n);
}
var Ve, ds, Ue, ur, we, qe, be, Pe, Ct, fr, Lt, Dr, sn, an, St, An, Z, Fi, Bi, Ii, ts, wn, kn, rs, ns;
class Oi {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(t, r, n, s) {
    N(this, Z);
    /** @type {Boundary | null} */
    nt(this, "parent");
    nt(this, "is_pending", !1);
    /**
     * API-level transformError transform function. Transforms errors before they reach the `failed` snippet.
     * Inherited from parent boundary, or defaults to identity.
     * @type {(error: unknown) => unknown}
     */
    nt(this, "transform_error");
    /** @type {TemplateNode} */
    N(this, Ve);
    /** @type {TemplateNode | null} */
    N(this, ds, null);
    /** @type {BoundaryProps} */
    N(this, Ue);
    /** @type {((anchor: Node) => void)} */
    N(this, ur);
    /** @type {Effect} */
    N(this, we);
    /** @type {Effect | null} */
    N(this, qe, null);
    /** @type {Effect | null} */
    N(this, be, null);
    /** @type {Effect | null} */
    N(this, Pe, null);
    /** @type {DocumentFragment | null} */
    N(this, Ct, null);
    N(this, fr, 0);
    N(this, Lt, 0);
    N(this, Dr, !1);
    /** @type {Set<Effect>} */
    N(this, sn, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    N(this, an, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    N(this, St, null);
    N(this, An, Di(() => (L(this, St, br(l(this, fr))), () => {
      L(this, St, null);
    })));
    L(this, Ve, t), L(this, Ue, r), L(this, ur, (i) => {
      var d = (
        /** @type {Effect} */
        F
      );
      d.b = this, d.f |= Zn, n(i);
    }), this.parent = /** @type {Effect} */
    F.b, this.transform_error = s ?? this.parent?.transform_error ?? ((i) => i), L(this, we, _s(() => {
      Y(this, Z, ts).call(this);
    }, ji));
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    na(t, l(this, sn), l(this, an));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!l(this, Ue).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  update_pending_count(t, r) {
    Y(this, Z, rs).call(this, t, r), L(this, fr, l(this, fr) + t), !(!l(this, St) || l(this, Dr)) && (L(this, Dr, !0), Bt(() => {
      L(this, Dr, !1), l(this, St) && Fr(l(this, St), l(this, fr));
    }));
  }
  get_effect_pending() {
    return l(this, An).call(this), a(
      /** @type {Source<number>} */
      l(this, St)
    );
  }
  /** @param {unknown} error */
  error(t) {
    if (!l(this, Ue).onerror && !l(this, Ue).failed)
      throw t;
    j?.is_fork ? (l(this, qe) && j.skip_effect(l(this, qe)), l(this, be) && j.skip_effect(l(this, be)), l(this, Pe) && j.skip_effect(l(this, Pe)), j.on_fork_commit(() => {
      Y(this, Z, ns).call(this, t);
    })) : Y(this, Z, ns).call(this, t);
  }
}
Ve = new WeakMap(), ds = new WeakMap(), Ue = new WeakMap(), ur = new WeakMap(), we = new WeakMap(), qe = new WeakMap(), be = new WeakMap(), Pe = new WeakMap(), Ct = new WeakMap(), fr = new WeakMap(), Lt = new WeakMap(), Dr = new WeakMap(), sn = new WeakMap(), an = new WeakMap(), St = new WeakMap(), An = new WeakMap(), Z = new WeakSet(), Fi = function() {
  try {
    L(this, qe, He(() => l(this, ur).call(this, l(this, Ve))));
  } catch (t) {
    this.error(t);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
Bi = function(t) {
  const r = l(this, Ue).failed;
  r && L(this, Pe, He(() => {
    r(
      l(this, Ve),
      () => t,
      () => () => {
      }
    );
  }));
}, Ii = function() {
  const t = l(this, Ue).pending;
  t && (this.is_pending = !0, L(this, be, He(() => t(l(this, Ve)))), Bt(() => {
    var r = L(this, Ct, document.createDocumentFragment()), n = It();
    r.append(n), L(this, qe, Y(this, Z, kn).call(this, () => He(() => l(this, ur).call(this, n)))), l(this, Lt) === 0 && (l(this, Ve).before(r), L(this, Ct, null), hr(
      /** @type {Effect} */
      l(this, be),
      () => {
        L(this, be, null);
      }
    ), Y(this, Z, wn).call(
      this,
      /** @type {Batch} */
      j
    ));
  }));
}, ts = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), L(this, Lt, 0), L(this, fr, 0), L(this, qe, He(() => {
      l(this, ur).call(this, l(this, Ve));
    })), l(this, Lt) > 0) {
      var t = L(this, Ct, document.createDocumentFragment());
      xs(l(this, qe), t);
      const r = (
        /** @type {(anchor: Node) => void} */
        l(this, Ue).pending
      );
      L(this, be, He(() => r(l(this, Ve))));
    } else
      Y(this, Z, wn).call(
        this,
        /** @type {Batch} */
        j
      );
  } catch (r) {
    this.error(r);
  }
}, /**
 * @param {Batch} batch
 */
wn = function(t) {
  this.is_pending = !1, t.transfer_effects(l(this, sn), l(this, an));
}, /**
 * @template T
 * @param {() => T} fn
 */
kn = function(t) {
  var r = F, n = O, s = De;
  gt(l(this, we)), Ge(l(this, we)), Or(l(this, we).ctx);
  try {
    return gr.ensure(), t();
  } catch (i) {
    return ta(i), null;
  } finally {
    gt(r), Ge(n), Or(s);
  }
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 * @param {Batch} batch
 */
rs = function(t, r) {
  var n;
  if (!this.has_pending_snippet()) {
    this.parent && Y(n = this.parent, Z, rs).call(n, t, r);
    return;
  }
  L(this, Lt, l(this, Lt) + t), l(this, Lt) === 0 && (Y(this, Z, wn).call(this, r), l(this, be) && hr(l(this, be), () => {
    L(this, be, null);
  }), l(this, Ct) && (l(this, Ve).before(l(this, Ct)), L(this, Ct, null)));
}, /**
 * @param {unknown} error
 */
ns = function(t) {
  l(this, qe) && (Ee(l(this, qe)), L(this, qe, null)), l(this, be) && (Ee(l(this, be)), L(this, be, null)), l(this, Pe) && (Ee(l(this, Pe)), L(this, Pe, null));
  var r = l(this, Ue).onerror;
  let n = l(this, Ue).failed;
  var s = !1, i = !1;
  const d = () => {
    if (s) {
      Ci();
      return;
    }
    s = !0, i && bi(), l(this, Pe) !== null && hr(l(this, Pe), () => {
      L(this, Pe, null);
    }), Y(this, Z, kn).call(this, () => {
      Y(this, Z, ts).call(this);
    });
  }, c = (o) => {
    try {
      i = !0, r?.(o, d), i = !1;
    } catch (u) {
      Ot(u, l(this, we) && l(this, we).parent);
    }
    n && L(this, Pe, Y(this, Z, kn).call(this, () => {
      try {
        return He(() => {
          var u = (
            /** @type {Effect} */
            F
          );
          u.b = this, u.f |= Zn, n(
            l(this, Ve),
            () => o,
            () => d
          );
        });
      } catch (u) {
        return Ot(
          u,
          /** @type {Effect} */
          l(this, we).parent
        ), null;
      }
    }));
  };
  Bt(() => {
    var o;
    try {
      o = this.transform_error(t);
    } catch (u) {
      Ot(u, l(this, we) && l(this, we).parent);
      return;
    }
    o !== null && typeof o == "object" && typeof /** @type {any} */
    o.then == "function" ? o.then(
      c,
      /** @param {unknown} e */
      (u) => Ot(u, l(this, we) && l(this, we).parent)
    ) : c(o);
  });
};
function zi(e, t, r, n) {
  const s = vs;
  var i = e.filter((m) => !m.settled);
  if (r.length === 0 && i.length === 0) {
    n(t.map(s));
    return;
  }
  var d = (
    /** @type {Effect} */
    F
  ), c = Vi(), o = i.length === 1 ? i[0].promise : i.length > 1 ? Promise.all(i.map((m) => m.promise)) : null;
  function u(m) {
    c();
    try {
      n(m);
    } catch (x) {
      (d.f & Je) === 0 && Ot(x, d);
    }
    Sn();
  }
  if (r.length === 0) {
    o.then(() => u(t.map(s)));
    return;
  }
  var p = la();
  function h() {
    Promise.all(r.map((m) => /* @__PURE__ */ Ui(m))).then((m) => u([...t.map(s), ...m])).catch((m) => Ot(m, d)).finally(() => p());
  }
  o ? o.then(() => {
    c(), h(), Sn();
  }) : h();
}
function Vi() {
  var e = (
    /** @type {Effect} */
    F
  ), t = O, r = De, n = (
    /** @type {Batch} */
    j
  );
  return function(i = !0) {
    gt(e), Ge(t), Or(r), i && (e.f & Je) === 0 && (n?.activate(), n?.apply());
  };
}
function Sn(e = !0) {
  gt(null), Ge(null), Or(null), e && j?.deactivate();
}
function la() {
  var e = (
    /** @type {Effect} */
    F
  ), t = (
    /** @type {Boundary} */
    e.b
  ), r = (
    /** @type {Batch} */
    j
  ), n = t.is_rendered();
  return t.update_pending_count(1, r), r.increment(n, e), (s = !1) => {
    t.update_pending_count(-1, r), r.decrement(n, e, s);
  };
}
// @__NO_SIDE_EFFECTS__
function vs(e) {
  var t = ce | fe;
  return F !== null && (F.f |= Ir), {
    ctx: De,
    deps: null,
    effects: null,
    equals: Ks,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      oe
    ),
    wv: 0,
    parent: F,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function Ui(e, t, r) {
  let n = (
    /** @type {Effect | null} */
    F
  );
  n === null && di();
  var s = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), i = br(
    /** @type {V} */
    oe
  ), d = !O, c = /* @__PURE__ */ new Map();
  return ro(() => {
    var o = (
      /** @type {Effect} */
      F
    ), u = Hs();
    s = u.promise;
    try {
      Promise.resolve(e()).then(u.resolve, u.reject).finally(Sn);
    } catch (x) {
      u.reject(x), Sn();
    }
    var p = (
      /** @type {Batch} */
      j
    );
    if (d) {
      if ((o.f & xr) !== 0)
        var h = la();
      if (
        /** @type {Boundary} */
        n.b.is_rendered()
      )
        c.get(p)?.reject(wt), c.delete(p);
      else {
        for (const x of c.values())
          x.reject(wt);
        c.clear();
      }
      c.set(p, u);
    }
    const m = (x, w = void 0) => {
      if (h) {
        var T = w === wt;
        h(T);
      }
      if (!(w === wt || (o.f & Je) !== 0)) {
        if (p.activate(), w)
          i.f |= Ft, Fr(i, w);
        else {
          (i.f & Ft) !== 0 && (i.f ^= Ft), Fr(i, x);
          for (const [g, P] of c) {
            if (c.delete(g), g === p) break;
            P.reject(wt);
          }
        }
        p.deactivate();
      }
    };
    u.promise.then(m, (x) => m(null, x || "unknown"));
  }), ga(() => {
    for (const o of c.values())
      o.reject(wt);
  }), new Promise((o) => {
    function u(p) {
      function h() {
        p === s ? o(i) : u(s);
      }
      p.then(h, h);
    }
    u(s);
  });
}
// @__NO_SIDE_EFFECTS__
function qr(e) {
  const t = /* @__PURE__ */ vs(e);
  return Ca(t), t;
}
// @__NO_SIDE_EFFECTS__
function qi(e) {
  const t = /* @__PURE__ */ vs(e);
  return t.equals = Xs, t;
}
function Hi(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var r = 0; r < t.length; r += 1)
      Ee(
        /** @type {Effect} */
        t[r]
      );
  }
}
function hs(e) {
  var t, r = F, n = e.parent;
  if (!Vt && n !== null && (n.f & (Je | xe)) !== 0)
    return Ei(), e.v;
  gt(n);
  try {
    e.f &= ~_r, Hi(e), t = Ta(e);
  } finally {
    gt(r);
  }
  return t;
}
function da(e) {
  var t = hs(e);
  if (!e.equals(t) && (e.wv = Ma(), (!j?.is_fork || e.deps === null) && (j !== null ? j.capture(e, t, !0) : e.v = t, e.deps === null))) {
    $(e, ae);
    return;
  }
  Vt || (at !== null ? (ps() || j?.is_fork) && at.set(e, t) : us(e));
}
function Yi(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      (t.teardown || t.ac) && (t.teardown?.(), t.ac?.abort(wt), t.teardown = ni, t.ac = null, en(t, 0), gs(t));
}
function ua(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      t.teardown && Br(t);
}
let ss = /* @__PURE__ */ new Set();
const vr = /* @__PURE__ */ new Map();
let fa = !1;
function br(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Ks,
    rv: 0,
    wv: 0
  };
  return r;
}
// @__NO_SIDE_EFFECTS__
function U(e, t) {
  const r = br(e);
  return Ca(r), r;
}
// @__NO_SIDE_EFFECTS__
function Ji(e, t = !1, r = !0) {
  const n = br(e);
  return t || (n.equals = Xs), n;
}
function b(e, t, r = !1) {
  O !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!it || (O.f & Qn) !== 0) && $s() && (O.f & (ce | pt | $r | Qn)) !== 0 && (We === null || !jr.call(We, e)) && gi();
  let n = r ? ar(t) : t;
  return Fr(e, n, bn);
}
function Fr(e, t, r = null) {
  if (!e.equals(t)) {
    vr.set(e, Vt ? t : e.v);
    var n = gr.ensure();
    if (n.capture(e, t), (e.f & ce) !== 0) {
      const s = (
        /** @type {Derived} */
        e
      );
      (e.f & fe) !== 0 && hs(s), at === null && us(s);
    }
    e.wv = Ma(), ca(e, fe, r), F !== null && (F.f & ae) !== 0 && (F.f & (ot | zt)) === 0 && (ze === null ? ao([e]) : ze.push(e)), !n.is_fork && ss.size > 0 && !fa && Wi();
  }
  return t;
}
function Wi() {
  fa = !1;
  for (const e of ss)
    (e.f & ae) !== 0 && $(e, _t), un(e) && Br(e);
  ss.clear();
}
function Ds(e, t = 1) {
  var r = a(e), n = t === 1 ? r++ : r--;
  return b(e, r), n;
}
function Zr(e) {
  b(e, e.v + 1);
}
function ca(e, t, r) {
  var n = e.reactions;
  if (n !== null)
    for (var s = n.length, i = 0; i < s; i++) {
      var d = n[i], c = d.f, o = (c & fe) === 0;
      if (o && $(d, t), (c & ce) !== 0) {
        var u = (
          /** @type {Derived} */
          d
        );
        at?.delete(u), (c & _r) === 0 && (c & Ye && (F === null || (F.f & Cn) === 0) && (d.f |= _r), ca(u, _t, r));
      } else if (o) {
        var p = (
          /** @type {Effect} */
          d
        );
        (c & pt) !== 0 && yt !== null && yt.add(p), r !== null ? r.push(p) : cs(p);
      }
    }
}
function ar(e) {
  if (typeof e != "object" || e === null || Yn in e)
    return e;
  const t = qs(e);
  if (t !== ti && t !== ri)
    return e;
  var r = /* @__PURE__ */ new Map(), n = Us(e), s = /* @__PURE__ */ U(0), i = pr, d = (c) => {
    if (pr === i)
      return c();
    var o = O, u = pr;
    Ge(null), Fs(i);
    var p = c();
    return Ge(o), Fs(u), p;
  };
  return n && r.set("length", /* @__PURE__ */ U(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(c, o, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && pi();
        var p = r.get(o);
        return p === void 0 ? d(() => {
          var h = /* @__PURE__ */ U(u.value);
          return r.set(o, h), h;
        }) : b(p, u.value, !0), !0;
      },
      deleteProperty(c, o) {
        var u = r.get(o);
        if (u === void 0) {
          if (o in c) {
            const p = d(() => /* @__PURE__ */ U(oe));
            r.set(o, p), Zr(s);
          }
        } else
          b(u, oe), Zr(s);
        return !0;
      },
      get(c, o, u) {
        if (o === Yn)
          return e;
        var p = r.get(o), h = o in c;
        if (p === void 0 && (!h || Kr(c, o)?.writable) && (p = d(() => {
          var x = ar(h ? c[o] : oe), w = /* @__PURE__ */ U(x);
          return w;
        }), r.set(o, p)), p !== void 0) {
          var m = a(p);
          return m === oe ? void 0 : m;
        }
        return Reflect.get(c, o, u);
      },
      getOwnPropertyDescriptor(c, o) {
        var u = Reflect.getOwnPropertyDescriptor(c, o);
        if (u && "value" in u) {
          var p = r.get(o);
          p && (u.value = a(p));
        } else if (u === void 0) {
          var h = r.get(o), m = h?.v;
          if (h !== void 0 && m !== oe)
            return {
              enumerable: !0,
              configurable: !0,
              value: m,
              writable: !0
            };
        }
        return u;
      },
      has(c, o) {
        if (o === Yn)
          return !0;
        var u = r.get(o), p = u !== void 0 && u.v !== oe || Reflect.has(c, o);
        if (u !== void 0 || F !== null && (!p || Kr(c, o)?.writable)) {
          u === void 0 && (u = d(() => {
            var m = p ? ar(c[o]) : oe, x = /* @__PURE__ */ U(m);
            return x;
          }), r.set(o, u));
          var h = a(u);
          if (h === oe)
            return !1;
        }
        return p;
      },
      set(c, o, u, p) {
        var h = r.get(o), m = o in c;
        if (n && o === "length")
          for (var x = u; x < /** @type {Source<number>} */
          h.v; x += 1) {
            var w = r.get(x + "");
            w !== void 0 ? b(w, oe) : x in c && (w = d(() => /* @__PURE__ */ U(oe)), r.set(x + "", w));
          }
        if (h === void 0)
          (!m || Kr(c, o)?.writable) && (h = d(() => /* @__PURE__ */ U(void 0)), b(h, ar(u)), r.set(o, h));
        else {
          m = h.v !== oe;
          var T = d(() => ar(u));
          b(h, T);
        }
        var g = Reflect.getOwnPropertyDescriptor(c, o);
        if (g?.set && g.set.call(p, u), !m) {
          if (n && typeof o == "string") {
            var P = (
              /** @type {Source<number>} */
              r.get("length")
            ), K = Number(o);
            Number.isInteger(K) && K >= P.v && b(P, K + 1);
          }
          Zr(s);
        }
        return !0;
      },
      ownKeys(c) {
        a(s);
        var o = Reflect.ownKeys(c).filter((h) => {
          var m = r.get(h);
          return m === void 0 || m.v !== oe;
        });
        for (var [u, p] of r)
          p.v !== oe && !(u in c) && o.push(u);
        return o;
      },
      setPrototypeOf() {
        _i();
      }
    }
  );
}
var js, va, ha, pa;
function Gi() {
  if (js === void 0) {
    js = window, va = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, r = Text.prototype;
    ha = Kr(t, "firstChild").get, pa = Kr(t, "nextSibling").get, Ts(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), Ts(r) && (r.__t = void 0);
  }
}
function It(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function Mt(e) {
  return (
    /** @type {TemplateNode | null} */
    ha.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function dn(e) {
  return (
    /** @type {TemplateNode | null} */
    pa.call(e)
  );
}
function f(e, t) {
  return /* @__PURE__ */ Mt(e);
}
function Hr(e, t = !1) {
  {
    var r = /* @__PURE__ */ Mt(e);
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ dn(r) : r;
  }
}
function _(e, t = 1, r = !1) {
  let n = e;
  for (; t--; )
    n = /** @type {TemplateNode} */
    /* @__PURE__ */ dn(n);
  return n;
}
function Ki(e) {
  e.textContent = "";
}
function _a() {
  return !1;
}
function Xi(e, t, r) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElementNS(Gs, e, void 0)
  );
}
let Ls = !1;
function Zi() {
  Ls || (Ls = !0, document.addEventListener(
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
function Rn(e) {
  var t = O, r = F;
  Ge(null), gt(null);
  try {
    return e();
  } finally {
    Ge(t), gt(r);
  }
}
function Qi(e, t, r, n = r) {
  e.addEventListener(t, () => Rn(r));
  const s = e.__on_r;
  s ? e.__on_r = () => {
    s(), n(!0);
  } : e.__on_r = () => n(!0), Zi();
}
function $i(e) {
  F === null && (O === null && vi(), ci()), Vt && fi();
}
function eo(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function Ut(e, t) {
  var r = F;
  r !== null && (r.f & xe) !== 0 && (e |= xe);
  var n = {
    ctx: De,
    deps: null,
    nodes: null,
    f: e | fe | Ye,
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
  j?.register_created_effect(n);
  var s = n;
  if ((e & Qr) !== 0)
    Ar !== null ? Ar.push(n) : gr.ensure().schedule(n);
  else if (t !== null) {
    try {
      Br(n);
    } catch (d) {
      throw Ee(n), d;
    }
    s.deps === null && s.teardown === null && s.nodes === null && s.first === s.last && // either `null`, or a singular child
    (s.f & Ir) === 0 && (s = s.first, (e & pt) !== 0 && (e & Lr) !== 0 && s !== null && (s.f |= Lr));
  }
  if (s !== null && (s.parent = r, r !== null && eo(s, r), O !== null && (O.f & ce) !== 0 && (e & zt) === 0)) {
    var i = (
      /** @type {Derived} */
      O
    );
    (i.effects ?? (i.effects = [])).push(s);
  }
  return n;
}
function ps() {
  return O !== null && !it;
}
function ga(e) {
  const t = Ut(Pn, null);
  return $(t, ae), t.teardown = e, t;
}
function ba(e) {
  $i();
  var t = (
    /** @type {Effect} */
    F.f
  ), r = !O && (t & ot) !== 0 && (t & xr) === 0;
  if (r) {
    var n = (
      /** @type {ComponentContext} */
      De
    );
    (n.e ?? (n.e = [])).push(e);
  } else
    return xa(e);
}
function xa(e) {
  return Ut(Qr | ii, e);
}
function to(e) {
  gr.ensure();
  const t = Ut(zt | Ir, e);
  return (r = {}) => new Promise((n) => {
    r.outro ? hr(t, () => {
      Ee(t), n(void 0);
    }) : (Ee(t), n(void 0));
  });
}
function ro(e) {
  return Ut($r | Ir, e);
}
function ma(e, t = 0) {
  return Ut(Pn | t, e);
}
function V(e, t = [], r = [], n = []) {
  zi(n, t, r, (s) => {
    Ut(Pn, () => e(...s.map(a)));
  });
}
function _s(e, t = 0) {
  var r = Ut(pt | t, e);
  return r;
}
function He(e) {
  return Ut(ot | Ir, e);
}
function ya(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = Vt, n = O;
    Os(!0), Ge(null);
    try {
      t.call(null);
    } finally {
      Os(r), Ge(n);
    }
  }
}
function gs(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    const s = r.ac;
    s !== null && Rn(() => {
      s.abort(wt);
    });
    var n = r.next;
    (r.f & zt) !== 0 ? r.parent = null : Ee(r, t), r = n;
  }
}
function no(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & ot) === 0 && Ee(t), t = r;
  }
}
function Ee(e, t = !0) {
  var r = !1;
  (t || (e.f & ai) !== 0) && e.nodes !== null && e.nodes.end !== null && (so(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), r = !0), $(e, Ns), gs(e, t && !r), en(e, 0);
  var n = e.nodes && e.nodes.t;
  if (n !== null)
    for (const i of n)
      i.stop();
  ya(e), e.f ^= Ns, e.f |= Je;
  var s = e.parent;
  s !== null && s.first !== null && wa(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function so(e, t) {
  for (; e !== null; ) {
    var r = e === t ? null : /* @__PURE__ */ dn(e);
    e.remove(), e = r;
  }
}
function wa(e) {
  var t = e.parent, r = e.prev, n = e.next;
  r !== null && (r.next = n), n !== null && (n.prev = r), t !== null && (t.first === e && (t.first = n), t.last === e && (t.last = r));
}
function hr(e, t, r = !0) {
  var n = [];
  ka(e, n, !0);
  var s = () => {
    r && Ee(e), t && t();
  }, i = n.length;
  if (i > 0) {
    var d = () => --i || s();
    for (var c of n)
      c.out(d);
  } else
    s();
}
function ka(e, t, r) {
  if ((e.f & xe) === 0) {
    e.f ^= xe;
    var n = e.nodes && e.nodes.t;
    if (n !== null)
      for (const c of n)
        (c.is_global || r) && t.push(c);
    for (var s = e.first; s !== null; ) {
      var i = s.next;
      if ((s.f & zt) === 0) {
        var d = (s.f & Lr) !== 0 || // If this is a branch effect without a block effect parent,
        // it means the parent block effect was pruned. In that case,
        // transparency information was transferred to the branch effect.
        (s.f & ot) !== 0 && (e.f & pt) !== 0;
        ka(s, t, d ? r : !1);
      }
      s = i;
    }
  }
}
function bs(e) {
  Ea(e, !0);
}
function Ea(e, t) {
  if ((e.f & xe) !== 0) {
    e.f ^= xe, (e.f & ae) === 0 && ($(e, fe), gr.ensure().schedule(e));
    for (var r = e.first; r !== null; ) {
      var n = r.next, s = (r.f & Lr) !== 0 || (r.f & ot) !== 0;
      Ea(r, s ? t : !1), r = n;
    }
    var i = e.nodes && e.nodes.t;
    if (i !== null)
      for (const d of i)
        (d.is_global || t) && d.in();
  }
}
function xs(e, t) {
  if (e.nodes)
    for (var r = e.nodes.start, n = e.nodes.end; r !== null; ) {
      var s = r === n ? null : /* @__PURE__ */ dn(r);
      t.append(r), r = s;
    }
}
let En = !1, Vt = !1;
function Os(e) {
  Vt = e;
}
let O = null, it = !1;
function Ge(e) {
  O = e;
}
let F = null;
function gt(e) {
  F = e;
}
let We = null;
function Ca(e) {
  O !== null && (We === null ? We = [e] : We.push(e));
}
let ke = null, Te = 0, ze = null;
function ao(e) {
  ze = e;
}
let Sa = 1, ir = 0, pr = ir;
function Fs(e) {
  pr = e;
}
function Ma() {
  return ++Sa;
}
function un(e) {
  var t = e.f;
  if ((t & fe) !== 0)
    return !0;
  if (t & ce && (e.f &= ~_r), (t & _t) !== 0) {
    for (var r = (
      /** @type {Value[]} */
      e.deps
    ), n = r.length, s = 0; s < n; s++) {
      var i = r[s];
      if (un(
        /** @type {Derived} */
        i
      ) && da(
        /** @type {Derived} */
        i
      ), i.wv > e.wv)
        return !0;
    }
    (t & Ye) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    at === null && $(e, ae);
  }
  return !1;
}
function Aa(e, t, r = !0) {
  var n = e.reactions;
  if (n !== null && !(We !== null && jr.call(We, e)))
    for (var s = 0; s < n.length; s++) {
      var i = n[s];
      (i.f & ce) !== 0 ? Aa(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (r ? $(i, fe) : (i.f & ae) !== 0 && $(i, _t), cs(
        /** @type {Effect} */
        i
      ));
    }
}
function Ta(e) {
  var T;
  var t = ke, r = Te, n = ze, s = O, i = We, d = De, c = it, o = pr, u = e.f;
  ke = /** @type {null | Value[]} */
  null, Te = 0, ze = null, O = (u & (ot | zt)) === 0 ? e : null, We = null, Or(e.ctx), it = !1, pr = ++ir, e.ac !== null && (Rn(() => {
    e.ac.abort(wt);
  }), e.ac = null);
  try {
    e.f |= Cn;
    var p = (
      /** @type {Function} */
      e.fn
    ), h = p();
    e.f |= xr;
    var m = e.deps, x = j?.is_fork;
    if (ke !== null) {
      var w;
      if (x || en(e, Te), m !== null && Te > 0)
        for (m.length = Te + ke.length, w = 0; w < ke.length; w++)
          m[Te + w] = ke[w];
      else
        e.deps = m = ke;
      if (ps() && (e.f & Ye) !== 0)
        for (w = Te; w < m.length; w++)
          ((T = m[w]).reactions ?? (T.reactions = [])).push(e);
    } else !x && m !== null && Te < m.length && (en(e, Te), m.length = Te);
    if ($s() && ze !== null && !it && m !== null && (e.f & (ce | _t | fe)) === 0)
      for (w = 0; w < /** @type {Source[]} */
      ze.length; w++)
        Aa(
          ze[w],
          /** @type {Effect} */
          e
        );
    if (s !== null && s !== e) {
      if (ir++, s.deps !== null)
        for (let g = 0; g < r; g += 1)
          s.deps[g].rv = ir;
      if (t !== null)
        for (const g of t)
          g.rv = ir;
      ze !== null && (n === null ? n = ze : n.push(.../** @type {Source[]} */
      ze));
    }
    return (e.f & Ft) !== 0 && (e.f ^= Ft), h;
  } catch (g) {
    return ta(g);
  } finally {
    e.f ^= Cn, ke = t, Te = r, ze = n, O = s, We = i, Or(d), it = c, pr = o;
  }
}
function io(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var n = Qa.call(r, e);
    if (n !== -1) {
      var s = r.length - 1;
      s === 0 ? r = t.reactions = null : (r[n] = r[s], r.pop());
    }
  }
  if (r === null && (t.f & ce) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (ke === null || !jr.call(ke, t))) {
    var i = (
      /** @type {Derived} */
      t
    );
    (i.f & Ye) !== 0 && (i.f ^= Ye, i.f &= ~_r), i.v !== oe && us(i), Yi(i), en(i, 0);
  }
}
function en(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var n = t; n < r.length; n++)
      io(e, r[n]);
}
function Br(e) {
  var t = e.f;
  if ((t & Je) === 0) {
    $(e, ae);
    var r = F, n = En;
    F = e, En = !0;
    try {
      (t & (pt | Ys)) !== 0 ? no(e) : gs(e), ya(e);
      var s = Ta(e);
      e.teardown = typeof s == "function" ? s : null, e.wv = Sa;
      var i;
    } finally {
      En = n, F = r;
    }
  }
}
async function oo() {
  await Promise.resolve(), Pi();
}
function a(e) {
  var t = e.f, r = (t & ce) !== 0;
  if (O !== null && !it) {
    var n = F !== null && (F.f & Je) !== 0;
    if (!n && (We === null || !jr.call(We, e))) {
      var s = O.deps;
      if ((O.f & Cn) !== 0)
        e.rv < ir && (e.rv = ir, ke === null && s !== null && s[Te] === e ? Te++ : ke === null ? ke = [e] : ke.push(e));
      else {
        (O.deps ?? (O.deps = [])).push(e);
        var i = e.reactions;
        i === null ? e.reactions = [O] : jr.call(i, O) || i.push(O);
      }
    }
  }
  if (Vt && vr.has(e))
    return vr.get(e);
  if (r) {
    var d = (
      /** @type {Derived} */
      e
    );
    if (Vt) {
      var c = d.v;
      return ((d.f & ae) === 0 && d.reactions !== null || Pa(d)) && (c = hs(d)), vr.set(d, c), c;
    }
    var o = (d.f & Ye) === 0 && !it && O !== null && (En || (O.f & Ye) !== 0), u = (d.f & xr) === 0;
    un(d) && (o && (d.f |= Ye), da(d)), o && !u && (ua(d), Na(d));
  }
  if (at?.has(e))
    return at.get(e);
  if ((e.f & Ft) !== 0)
    throw e.v;
  return e.v;
}
function Na(e) {
  if (e.f |= Ye, e.deps !== null)
    for (const t of e.deps)
      (t.reactions ?? (t.reactions = [])).push(e), (t.f & ce) !== 0 && (t.f & Ye) === 0 && (ua(
        /** @type {Derived} */
        t
      ), Na(
        /** @type {Derived} */
        t
      ));
}
function Pa(e) {
  if (e.v === oe) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (vr.has(t) || (t.f & ce) !== 0 && Pa(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function ms(e) {
  var t = it;
  try {
    return it = !0, e();
  } finally {
    it = t;
  }
}
const lo = ["touchstart", "touchmove"];
function uo(e) {
  return lo.includes(e);
}
const or = Symbol("events"), Ra = /* @__PURE__ */ new Set(), as = /* @__PURE__ */ new Set();
function fo(e, t, r, n = {}) {
  function s(i) {
    if (n.capture || is.call(t, i), !i.cancelBubble)
      return Rn(() => r?.call(this, i));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? Bt(() => {
    t.addEventListener(e, s, n);
  }) : t.addEventListener(e, s, n), s;
}
function co(e, t, r, n, s) {
  var i = { capture: n, passive: s }, d = fo(e, t, r, i);
  (t === document.body || // @ts-ignore
  t === window || // @ts-ignore
  t === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  t instanceof HTMLMediaElement) && ga(() => {
    t.removeEventListener(e, d, i);
  });
}
function J(e, t, r) {
  (t[or] ?? (t[or] = {}))[e] = r;
}
function vo(e) {
  for (var t = 0; t < e.length; t++)
    Ra.add(e[t]);
  for (var r of as)
    r(e);
}
let Bs = null;
function is(e) {
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), n = e.type, s = e.composedPath?.() || [], i = (
    /** @type {null | Element} */
    s[0] || e.target
  );
  Bs = e;
  var d = 0, c = Bs === e && e[or];
  if (c) {
    var o = s.indexOf(c);
    if (o !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e[or] = t;
      return;
    }
    var u = s.indexOf(t);
    if (u === -1)
      return;
    o <= u && (d = o);
  }
  if (i = /** @type {Element} */
  s[d] || e.target, i !== t) {
    $a(e, "currentTarget", {
      configurable: !0,
      get() {
        return i || r;
      }
    });
    var p = O, h = F;
    Ge(null), gt(null);
    try {
      for (var m, x = []; i !== null; ) {
        var w = i.assignedSlot || i.parentNode || /** @type {any} */
        i.host || null;
        try {
          var T = i[or]?.[n];
          T != null && (!/** @type {any} */
          i.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === i) && T.call(i, e);
        } catch (g) {
          m ? x.push(g) : m = g;
        }
        if (e.cancelBubble || w === t || w === null)
          break;
        i = w;
      }
      if (m) {
        for (let g of x)
          queueMicrotask(() => {
            throw g;
          });
        throw m;
      }
    } finally {
      e[or] = t, delete e.currentTarget, Ge(p), gt(h);
    }
  }
}
const ho = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (e) => e
  })
);
function po(e) {
  return (
    /** @type {string} */
    ho?.createHTML(e) ?? e
  );
}
function Da(e) {
  var t = Xi("template");
  return t.innerHTML = po(e.replaceAll("<!>", "<!---->")), t.content;
}
function tn(e, t) {
  var r = (
    /** @type {Effect} */
    F
  );
  r.nodes === null && (r.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function M(e, t) {
  var r = (t & Ws) !== 0, n = (t & ki) !== 0, s, i = !e.startsWith("<!>");
  return () => {
    s === void 0 && (s = Da(i ? e : "<!>" + e), r || (s = /** @type {TemplateNode} */
    /* @__PURE__ */ Mt(s)));
    var d = (
      /** @type {TemplateNode} */
      n || va ? document.importNode(s, !0) : s.cloneNode(!0)
    );
    if (r) {
      var c = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Mt(d)
      ), o = (
        /** @type {TemplateNode} */
        d.lastChild
      );
      tn(c, o);
    } else
      tn(d, d);
    return d;
  };
}
// @__NO_SIDE_EFFECTS__
function _o(e, t, r = "svg") {
  var n = !e.startsWith("<!>"), s = (t & Ws) !== 0, i = `<${r}>${n ? e : "<!>" + e}</${r}>`, d;
  return () => {
    if (!d) {
      var c = (
        /** @type {DocumentFragment} */
        Da(i)
      ), o = (
        /** @type {Element} */
        /* @__PURE__ */ Mt(c)
      );
      if (s)
        for (d = document.createDocumentFragment(); /* @__PURE__ */ Mt(o); )
          d.appendChild(
            /** @type {TemplateNode} */
            /* @__PURE__ */ Mt(o)
          );
      else
        d = /** @type {Element} */
        /* @__PURE__ */ Mt(o);
    }
    var u = (
      /** @type {TemplateNode} */
      d.cloneNode(!0)
    );
    if (s) {
      var p = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Mt(u)
      ), h = (
        /** @type {TemplateNode} */
        u.lastChild
      );
      tn(p, h);
    } else
      tn(u, u);
    return u;
  };
}
// @__NO_SIDE_EFFECTS__
function mr(e, t) {
  return /* @__PURE__ */ _o(e, t, "svg");
}
function Wn(e = "") {
  {
    var t = It(e + "");
    return tn(t, t), t;
  }
}
function E(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function A(e, t) {
  var r = t == null ? "" : typeof t == "object" ? `${t}` : t;
  r !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = r, e.nodeValue = `${r}`);
}
function go(e, t) {
  return bo(e, t);
}
const pn = /* @__PURE__ */ new Map();
function bo(e, { target: t, anchor: r, props: n = {}, events: s, context: i, intro: d = !0, transformError: c }) {
  Gi();
  var o = void 0, u = to(() => {
    var p = r ?? t.appendChild(It());
    Li(
      /** @type {TemplateNode} */
      p,
      {
        pending: () => {
        }
      },
      (x) => {
        Zs({});
        var w = (
          /** @type {ComponentContext} */
          De
        );
        i && (w.c = i), s && (n.$$events = s), o = e(x, n) || {}, Qs();
      },
      c
    );
    var h = /* @__PURE__ */ new Set(), m = (x) => {
      for (var w = 0; w < x.length; w++) {
        var T = x[w];
        if (!h.has(T)) {
          h.add(T);
          var g = uo(T);
          for (const R of [t, document]) {
            var P = pn.get(R);
            P === void 0 && (P = /* @__PURE__ */ new Map(), pn.set(R, P));
            var K = P.get(T);
            K === void 0 ? (R.addEventListener(T, is, { passive: g }), P.set(T, 1)) : P.set(T, K + 1);
          }
        }
      }
    };
    return m(Nn(Ra)), as.add(m), () => {
      for (var x of h)
        for (const g of [t, document]) {
          var w = (
            /** @type {Map<string, number>} */
            pn.get(g)
          ), T = (
            /** @type {number} */
            w.get(x)
          );
          --T == 0 ? (g.removeEventListener(x, is), w.delete(x), w.size === 0 && pn.delete(g)) : w.set(x, T);
        }
      as.delete(m), p !== r && p.parentNode?.removeChild(p);
    };
  });
  return os.set(o, u), o;
}
let os = /* @__PURE__ */ new WeakMap();
function xo(e, t) {
  const r = os.get(e);
  return r ? (os.delete(e), r(t)) : Promise.resolve();
}
var st, vt, Re, cr, on, ln, Tn;
class mo {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, r = !0) {
    /** @type {TemplateNode} */
    nt(this, "anchor");
    /** @type {Map<Batch, Key>} */
    N(this, st, /* @__PURE__ */ new Map());
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
    N(this, vt, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    N(this, Re, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    N(this, cr, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    N(this, on, !0);
    /**
     * @param {Batch} batch
     */
    N(this, ln, (t) => {
      if (l(this, st).has(t)) {
        var r = (
          /** @type {Key} */
          l(this, st).get(t)
        ), n = l(this, vt).get(r);
        if (n)
          bs(n), l(this, cr).delete(r);
        else {
          var s = l(this, Re).get(r);
          s && (l(this, vt).set(r, s.effect), l(this, Re).delete(r), s.fragment.lastChild.remove(), this.anchor.before(s.fragment), n = s.effect);
        }
        for (const [i, d] of l(this, st)) {
          if (l(this, st).delete(i), i === t)
            break;
          const c = l(this, Re).get(d);
          c && (Ee(c.effect), l(this, Re).delete(d));
        }
        for (const [i, d] of l(this, vt)) {
          if (i === r || l(this, cr).has(i)) continue;
          const c = () => {
            if (Array.from(l(this, st).values()).includes(i)) {
              var u = document.createDocumentFragment();
              xs(d, u), u.append(It()), l(this, Re).set(i, { effect: d, fragment: u });
            } else
              Ee(d);
            l(this, cr).delete(i), l(this, vt).delete(i);
          };
          l(this, on) || !n ? (l(this, cr).add(i), hr(d, c, !1)) : c();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    N(this, Tn, (t) => {
      l(this, st).delete(t);
      const r = Array.from(l(this, st).values());
      for (const [n, s] of l(this, Re))
        r.includes(n) || (Ee(s.effect), l(this, Re).delete(n));
    });
    this.anchor = t, L(this, on, r);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, r) {
    var n = (
      /** @type {Batch} */
      j
    ), s = _a();
    if (r && !l(this, vt).has(t) && !l(this, Re).has(t))
      if (s) {
        var i = document.createDocumentFragment(), d = It();
        i.append(d), l(this, Re).set(t, {
          effect: He(() => r(d)),
          fragment: i
        });
      } else
        l(this, vt).set(
          t,
          He(() => r(this.anchor))
        );
    if (l(this, st).set(n, t), s) {
      for (const [c, o] of l(this, vt))
        c === t ? n.unskip_effect(o) : n.skip_effect(o);
      for (const [c, o] of l(this, Re))
        c === t ? n.unskip_effect(o.effect) : n.skip_effect(o.effect);
      n.oncommit(l(this, ln)), n.ondiscard(l(this, Tn));
    } else
      l(this, ln).call(this, n);
  }
}
st = new WeakMap(), vt = new WeakMap(), Re = new WeakMap(), cr = new WeakMap(), on = new WeakMap(), ln = new WeakMap(), Tn = new WeakMap();
function I(e, t, r = !1) {
  var n = new mo(e), s = r ? Lr : 0;
  function i(d, c) {
    n.ensure(d, c);
  }
  _s(() => {
    var d = !1;
    t((c, o = 0) => {
      d = !0, i(o, c);
    }), d || i(-1, null);
  }, s);
}
function _n(e, t) {
  return t;
}
function yo(e, t, r) {
  for (var n = [], s = t.length, i, d = t.length, c = 0; c < s; c++) {
    let h = t[c];
    hr(
      h,
      () => {
        if (i) {
          if (i.pending.delete(h), i.done.add(h), i.pending.size === 0) {
            var m = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            ls(e, Nn(i.done)), m.delete(i), m.size === 0 && (e.outrogroups = null);
          }
        } else
          d -= 1;
      },
      !1
    );
  }
  if (d === 0) {
    var o = n.length === 0 && r !== null;
    if (o) {
      var u = (
        /** @type {Element} */
        r
      ), p = (
        /** @type {Element} */
        u.parentNode
      );
      Ki(p), p.append(u), e.items.clear();
    }
    ls(e, t, !o);
  } else
    i = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ?? (e.outrogroups = /* @__PURE__ */ new Set())).add(i);
}
function ls(e, t, r = !0) {
  var n;
  if (e.pending.size > 0) {
    n = /* @__PURE__ */ new Set();
    for (const d of e.pending.values())
      for (const c of d)
        n.add(
          /** @type {EachItem} */
          e.items.get(c).e
        );
  }
  for (var s = 0; s < t.length; s++) {
    var i = t[s];
    if (n?.has(i)) {
      i.f |= ht;
      const d = document.createDocumentFragment();
      xs(i, d);
    } else
      Ee(t[s], r);
  }
}
var Is;
function gn(e, t, r, n, s, i = null) {
  var d = e, c = /* @__PURE__ */ new Map(), o = (t & Js) !== 0;
  if (o) {
    var u = (
      /** @type {Element} */
      e
    );
    d = u.appendChild(It());
  }
  var p = null, h = /* @__PURE__ */ qi(() => {
    var R = r();
    return Us(R) ? R : R == null ? [] : Nn(R);
  }), m, x = /* @__PURE__ */ new Map(), w = !0;
  function T(R) {
    (K.effect.f & Je) === 0 && (K.pending.delete(R), K.fallback = p, wo(K, m, d, t, n), p !== null && (m.length === 0 ? (p.f & ht) === 0 ? bs(p) : (p.f ^= ht, Gr(p, null, d)) : hr(p, () => {
      p = null;
    })));
  }
  function g(R) {
    K.pending.delete(R);
  }
  var P = _s(() => {
    m = /** @type {V[]} */
    a(h);
    for (var R = m.length, W = /* @__PURE__ */ new Set(), ve = (
      /** @type {Batch} */
      j
    ), Ke = _a(), le = 0; le < R; le += 1) {
      var lt = m[le], Xe = n(lt, le), ee = w ? null : c.get(Xe);
      ee ? (ee.v && Fr(ee.v, lt), ee.i && Fr(ee.i, le), Ke && ve.unskip_effect(ee.e)) : (ee = ko(
        c,
        w ? d : Is ?? (Is = It()),
        lt,
        Xe,
        le,
        s,
        t,
        r
      ), w || (ee.e.f |= ht), c.set(Xe, ee)), W.add(Xe);
    }
    if (R === 0 && i && !p && (w ? p = He(() => i(d)) : (p = He(() => i(Is ?? (Is = It()))), p.f |= ht)), R > W.size && ui(), !w)
      if (x.set(ve, W), Ke) {
        for (const [qt, fn] of c)
          W.has(qt) || ve.skip_effect(fn.e);
        ve.oncommit(T), ve.ondiscard(g);
      } else
        T(ve);
    a(h);
  }), K = { effect: P, items: c, pending: x, outrogroups: null, fallback: p };
  w = !1;
}
function Yr(e) {
  for (; e !== null && (e.f & ot) === 0; )
    e = e.next;
  return e;
}
function wo(e, t, r, n, s) {
  var i = (n & yi) !== 0, d = t.length, c = e.items, o = Yr(e.effect.first), u, p = null, h, m = [], x = [], w, T, g, P;
  if (i)
    for (P = 0; P < d; P += 1)
      w = t[P], T = s(w, P), g = /** @type {EachItem} */
      c.get(T).e, (g.f & ht) === 0 && (g.nodes?.a?.measure(), (h ?? (h = /* @__PURE__ */ new Set())).add(g));
  for (P = 0; P < d; P += 1) {
    if (w = t[P], T = s(w, P), g = /** @type {EachItem} */
    c.get(T).e, e.outrogroups !== null)
      for (const ee of e.outrogroups)
        ee.pending.delete(g), ee.done.delete(g);
    if ((g.f & xe) !== 0 && (bs(g), i && (g.nodes?.a?.unfix(), (h ?? (h = /* @__PURE__ */ new Set())).delete(g))), (g.f & ht) !== 0)
      if (g.f ^= ht, g === o)
        Gr(g, null, r);
      else {
        var K = p ? p.next : o;
        g === e.effect.last && (e.effect.last = g.prev), g.prev && (g.prev.next = g.next), g.next && (g.next.prev = g.prev), Dt(e, p, g), Dt(e, g, K), Gr(g, K, r), p = g, m = [], x = [], o = Yr(p.next);
        continue;
      }
    if (g !== o) {
      if (u !== void 0 && u.has(g)) {
        if (m.length < x.length) {
          var R = x[0], W;
          p = R.prev;
          var ve = m[0], Ke = m[m.length - 1];
          for (W = 0; W < m.length; W += 1)
            Gr(m[W], R, r);
          for (W = 0; W < x.length; W += 1)
            u.delete(x[W]);
          Dt(e, ve.prev, Ke.next), Dt(e, p, ve), Dt(e, Ke, R), o = R, p = Ke, P -= 1, m = [], x = [];
        } else
          u.delete(g), Gr(g, o, r), Dt(e, g.prev, g.next), Dt(e, g, p === null ? e.effect.first : p.next), Dt(e, p, g), p = g;
        continue;
      }
      for (m = [], x = []; o !== null && o !== g; )
        (u ?? (u = /* @__PURE__ */ new Set())).add(o), x.push(o), o = Yr(o.next);
      if (o === null)
        continue;
    }
    (g.f & ht) === 0 && m.push(g), p = g, o = Yr(g.next);
  }
  if (e.outrogroups !== null) {
    for (const ee of e.outrogroups)
      ee.pending.size === 0 && (ls(e, Nn(ee.done)), e.outrogroups?.delete(ee));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (o !== null || u !== void 0) {
    var le = [];
    if (u !== void 0)
      for (g of u)
        (g.f & xe) === 0 && le.push(g);
    for (; o !== null; )
      (o.f & xe) === 0 && o !== e.fallback && le.push(o), o = Yr(o.next);
    var lt = le.length;
    if (lt > 0) {
      var Xe = (n & Js) !== 0 && d === 0 ? r : null;
      if (i) {
        for (P = 0; P < lt; P += 1)
          le[P].nodes?.a?.measure();
        for (P = 0; P < lt; P += 1)
          le[P].nodes?.a?.fix();
      }
      yo(e, le, Xe);
    }
  }
  i && Bt(() => {
    if (h !== void 0)
      for (g of h)
        g.nodes?.a?.apply();
  });
}
function ko(e, t, r, n, s, i, d, c) {
  var o = (d & xi) !== 0 ? (d & wi) === 0 ? /* @__PURE__ */ Ji(r, !1, !1) : br(r) : null, u = (d & mi) !== 0 ? br(s) : null;
  return {
    v: o,
    i: u,
    e: He(() => (i(t, o ?? r, u ?? s, c), () => {
      e.delete(n);
    }))
  };
}
function Gr(e, t, r) {
  if (e.nodes)
    for (var n = e.nodes.start, s = e.nodes.end, i = t && (t.f & ht) === 0 ? (
      /** @type {EffectNodes} */
      t.nodes.start
    ) : r; n !== null; ) {
      var d = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ dn(n)
      );
      if (i.before(n), n === s)
        return;
      n = d;
    }
}
function Dt(e, t, r) {
  t === null ? e.effect.first = r : t.next = r, r === null ? e.effect.last = t : r.prev = t;
}
function Eo(e, t, r) {
  var n = e == null ? "" : "" + e;
  return n === "" ? null : n;
}
function Co(e, t) {
  return e == null ? null : String(e);
}
function Jr(e, t, r, n, s, i) {
  var d = e.__className;
  if (d !== r || d === void 0) {
    var c = Eo(r);
    c == null ? e.removeAttribute("class") : e.className = c, e.__className = r;
  }
  return i;
}
function Gn(e, t, r, n) {
  var s = e.__style;
  if (s !== t) {
    var i = Co(t);
    i == null ? e.removeAttribute("style") : e.style.cssText = i, e.__style = t;
  }
  return n;
}
const So = Symbol("is custom element"), Mo = Symbol("is html");
function mt(e, t, r, n) {
  var s = Ao(e);
  s[t] !== (s[t] = r) && (t === "loading" && (e[oi] = r), r == null ? e.removeAttribute(t) : typeof r != "string" && To(e).includes(t) ? e[t] = r : e.setAttribute(t, r));
}
function Ao(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [So]: e.nodeName.includes("-"),
      [Mo]: e.namespaceURI === Gs
    })
  );
}
var zs = /* @__PURE__ */ new Map();
function To(e) {
  var t = e.getAttribute("is") || e.nodeName, r = zs.get(t);
  if (r) return r;
  zs.set(t, r = []);
  for (var n, s = e, i = Element.prototype; i !== s; ) {
    n = ei(s);
    for (var d in n)
      n[d].set && r.push(d);
    s = qs(s);
  }
  return r;
}
function Wr(e, t, r = t) {
  var n = /* @__PURE__ */ new WeakSet();
  Qi(e, "input", async (s) => {
    var i = s ? e.defaultValue : e.value;
    if (i = Kn(e) ? Xn(i) : i, r(i), j !== null && n.add(j), await oo(), i !== (i = t())) {
      var d = e.selectionStart, c = e.selectionEnd, o = e.value.length;
      if (e.value = i ?? "", c !== null) {
        var u = e.value.length;
        d === c && c === o && u > o ? (e.selectionStart = u, e.selectionEnd = u) : (e.selectionStart = d, e.selectionEnd = Math.min(c, u));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  ms(t) == null && e.value && (r(Kn(e) ? Xn(e.value) : e.value), j !== null && n.add(j)), ma(() => {
    var s = t();
    if (e === document.activeElement) {
      var i = (
        /** @type {Batch} */
        j
      );
      if (n.has(i))
        return;
    }
    Kn(e) && s === Xn(e.value) || e.type === "date" && !s && !e.value || s !== e.value && (e.value = s ?? "");
  });
}
function Kn(e) {
  var t = e.type;
  return t === "number" || t === "range";
}
function Xn(e) {
  return e === "" ? null : +e;
}
function No(e) {
  De === null && li(), ba(() => {
    const t = ms(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
const Po = "5";
var Vs;
typeof window < "u" && ((Vs = window.__svelte ?? (window.__svelte = {})).v ?? (Vs.v = /* @__PURE__ */ new Set())).add(Po);
var Ro = /* @__PURE__ */ M('<div class="mb-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 flex items-start gap-2"><svg class="w-5 h-5 flex-shrink-0 mt-0.5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span> </span> <button class="ml-auto text-red-400 hover:text-red-600">&times;</button></div>'), Do = /* @__PURE__ */ M('<div class="mb-4 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700 flex items-center gap-2"><svg class="w-5 h-5 flex-shrink-0 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span> </span></div>'), jo = /* @__PURE__ */ M("<span> </span>"), Lo = /* @__PURE__ */ M('<div class="text-xs text-gray-400 mt-1"> </div>'), Oo = /* @__PURE__ */ M('<div class="mb-4"><div class="flex justify-between text-xs text-gray-500 mb-1"><span>Approval</span> <span> </span></div> <div class="w-full bg-gray-200 rounded-full h-2.5"><div class="bg-green-500 h-2.5 rounded-full transition-all duration-300"></div></div> <!></div>'), Fo = /* @__PURE__ */ M('<div class="w-3.5 h-3.5 border-2 border-green-400 border-t-transparent rounded-full animate-spin"></div>'), Bo = /* @__PURE__ */ mr('<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>'), Io = /* @__PURE__ */ M('<div class="w-3.5 h-3.5 border-2 border-red-400 border-t-transparent rounded-full animate-spin"></div>'), zo = /* @__PURE__ */ mr('<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>'), Vo = /* @__PURE__ */ M('<div class="w-3.5 h-3.5 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>'), Uo = /* @__PURE__ */ mr('<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path></svg>'), qo = /* @__PURE__ */ M('<div class="flex gap-2 pt-2"><button class="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg border border-green-300 text-green-700 text-sm font-medium hover:bg-green-50 disabled:opacity-50 transition-colors"><!> Yes</button> <button class="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg border border-red-300 text-red-700 text-sm font-medium hover:bg-red-50 disabled:opacity-50 transition-colors"><!> No</button> <button class="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg border border-gray-300 text-gray-600 text-sm font-medium hover:bg-gray-50 disabled:opacity-50 transition-colors"><!> Abstain</button></div>'), Ho = /* @__PURE__ */ M('<div class="rounded-lg border border-gray-200 bg-white p-5"><h3 class="text-base font-semibold text-gray-900 mb-3">Voting Results</h3> <div class="grid grid-cols-4 gap-4 mb-4"><div class="text-center"><div class="text-2xl font-bold text-green-600"> </div> <div class="text-xs text-gray-500">Yes</div></div> <div class="text-center"><div class="text-2xl font-bold text-red-600"> </div> <div class="text-xs text-gray-500">No</div></div> <div class="text-center"><div class="text-2xl font-bold text-gray-500"> </div> <div class="text-xs text-gray-500">Abstain</div></div> <div class="text-center"><div class="text-2xl font-bold text-gray-900"> </div> <div class="text-xs text-gray-500">Total</div></div></div> <!> <!></div>'), Yo = /* @__PURE__ */ M('<div class="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div> Executing…', 1), Jo = /* @__PURE__ */ mr('<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"></path></svg> Approve & Execute', 1), Wo = /* @__PURE__ */ M('<div class="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"> </div>'), Go = /* @__PURE__ */ M('<div class="rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700 flex items-center gap-2"><svg class="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> </div>'), Ko = /* @__PURE__ */ M('<code class="text-xs text-gray-400 bg-gray-100 px-1.5 py-0.5 rounded"> </code>'), Xo = /* @__PURE__ */ M('<div class="flex items-center gap-3 p-2 bg-gray-50 rounded text-sm"><span class="font-mono font-medium text-gray-800 min-w-[140px]"> </span> <a target="_blank" rel="noopener noreferrer" class="text-indigo-600 hover:underline truncate flex-1 text-xs"> </a> <!></div>'), Zo = /* @__PURE__ */ M('<div class="rounded-lg border border-gray-200 bg-white p-5"><h3 class="text-base font-semibold text-gray-900 mb-3"> </h3> <div class="space-y-2"></div></div>'), Qo = /* @__PURE__ */ M('<a target="_blank" rel="noopener noreferrer" class="text-xs text-indigo-600 hover:underline">View source</a>'), $o = /* @__PURE__ */ M('<div class="flex items-center justify-center py-8"><svg class="animate-spin h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path></svg> <span class="ml-3 text-gray-500 text-sm">Loading code…</span></div>'), el = /* @__PURE__ */ M('<div class="text-sm text-red-600 mb-3"> </div> <button class="text-sm px-3 py-1.5 rounded border border-gray-300 text-gray-600 hover:bg-gray-100">Retry</button>', 1), tl = /* @__PURE__ */ M('<div class="mt-3 pt-3 border-t border-gray-200 flex justify-between items-center text-xs text-gray-500"><span>Checksum: <code class="bg-gray-100 px-1.5 py-0.5 rounded"> </code></span> <span> </span></div>'), rl = /* @__PURE__ */ M('<div class="bg-gray-900 rounded-lg overflow-hidden"><pre class="p-4 overflow-x-auto text-sm"><code class="text-gray-100"> </code></pre></div> <!>', 1), nl = /* @__PURE__ */ M('<div class="text-center py-8 text-gray-400 text-sm">No code available for this proposal.</div>'), sl = /* @__PURE__ */ M('<button class="text-sm text-indigo-600 hover:text-indigo-800 mb-4 inline-flex items-center gap-1"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg> Back to proposals</button> <div class="space-y-5"><div><div class="flex items-center gap-3 mb-2 flex-wrap"><h2 class="text-2xl font-bold text-gray-900"> </h2> <span> </span></div> <div class="flex flex-wrap gap-4 text-sm text-gray-500"><span>Proposer: <code class="text-xs bg-gray-100 px-1.5 py-0.5 rounded"> </code></span> <span> </span> <!></div></div> <div class="rounded-lg border border-gray-200 bg-white p-5"><h3 class="text-base font-semibold text-gray-900 mb-2">Description</h3> <p class="text-gray-700 whitespace-pre-wrap text-sm leading-relaxed"> </p></div> <!> <div class="flex flex-wrap gap-3 items-center"><button class="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-900 text-white text-sm font-medium hover:bg-black disabled:opacity-50 transition-colors"><!></button> <span class="text-xs text-gray-400">Demo feature</span></div> <!> <!> <!> <div class="rounded-lg border border-gray-200 bg-gray-50 overflow-hidden"><div class="bg-gray-100 px-4 py-2.5 border-b flex items-center justify-between"><div class="flex items-center gap-2"><svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg> <h3 class="font-semibold text-sm text-gray-800">Proposal Code</h3></div> <div class="flex items-center gap-2"><!> <span class="bg-gray-200 text-gray-600 px-2 py-0.5 rounded text-xs"> </span></div></div> <div class="p-4"><!></div></div> <div class="text-xs text-gray-400 pb-4"><span class="font-medium">Security note:</span> Always review proposal code carefully before voting.</div></div>', 1), al = /* @__PURE__ */ M('<div class="flex items-center justify-between mb-2"><span class="text-xs font-medium text-gray-400"></span> <button type="button" class="text-red-400 hover:text-red-600 text-xs">&times;</button></div>'), il = /* @__PURE__ */ M('<div class="w-4 h-4 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>'), ol = /* @__PURE__ */ mr('<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>'), ll = /* @__PURE__ */ M('<div><!> <div class="space-y-2"><div><label class="block text-xs font-medium text-gray-600 mb-0.5">Code URL</label> <input type="url" placeholder="https://example.com/codex.py" class="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none disabled:bg-gray-50"/></div> <div class="grid grid-cols-2 gap-2"><div><label class="block text-xs font-medium text-gray-600 mb-0.5">Codex Name</label> <input placeholder="my_codex" class="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none disabled:bg-gray-50"/></div> <div><label class="block text-xs font-medium text-gray-600 mb-0.5">Checksum</label> <div class="flex gap-1"><input placeholder="Auto-calculated" class="flex-1 rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none disabled:bg-gray-50"/> <button type="button" class="px-2.5 py-2 rounded-lg border border-gray-300 text-gray-500 hover:bg-gray-50 disabled:opacity-40"><!></button></div></div></div></div></div>'), dl = /* @__PURE__ */ M('<div class="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div> Submitting…', 1), ul = /* @__PURE__ */ mr('<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> Submit Proposal', 1), fl = /* @__PURE__ */ M('<div class="rounded-lg border border-gray-200 bg-white p-6"><div class="mb-5"><h2 class="text-xl font-semibold text-gray-900 mb-1">Submit a Proposal</h2> <p class="text-sm text-gray-500">Propose a new codex or code change for the realm.</p></div> <form class="space-y-4"><div><label for="rt-title" class="block text-sm font-medium text-gray-700 mb-1">Title *</label> <input id="rt-title" type="text" placeholder="Proposal title" required="" class="w-full rounded-lg border border-gray-300 px-3.5 py-2.5 text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none disabled:bg-gray-50 disabled:text-gray-400"/></div> <div><label for="rt-desc" class="block text-sm font-medium text-gray-700 mb-1">Description *</label> <textarea id="rt-desc" placeholder="Describe what this proposal does and why…" rows="5" required="" class="w-full rounded-lg border border-gray-300 px-3.5 py-2.5 text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none resize-y disabled:bg-gray-50 disabled:text-gray-400"></textarea></div> <div><div class="flex items-center justify-between mb-2"><label class="block text-sm font-medium text-gray-700">Codex Files *</label> <button type="button" class="inline-flex items-center gap-1 px-2.5 py-1 text-xs rounded border border-gray-300 text-gray-600 hover:bg-gray-50 disabled:opacity-50"><svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg> Add codex</button></div> <p class="text-xs text-gray-400 mb-3">Provide URLs to Python codex files for governance review.</p> <!></div> <div class="bg-amber-50 border border-amber-200 rounded-lg p-4"><h4 class="font-medium text-amber-800 text-sm mb-1">Security Notice</h4> <ul class="text-xs text-amber-700 space-y-0.5"><li>• All proposals are publicly visible to realm members</li> <li>• Code is fetched and checksummed for integrity verification</li> <li>• Approved codices will be executed on the realm backend</li></ul></div> <div class="flex justify-end gap-3 pt-2"><button type="button" class="px-4 py-2 rounded-lg border border-gray-300 text-sm text-gray-700 hover:bg-gray-50 disabled:opacity-50">Cancel</button> <button type="submit" class="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-gray-900 text-white text-sm font-medium hover:bg-black disabled:opacity-40 disabled:cursor-not-allowed transition-colors"><!></button></div></form></div>'), cl = /* @__PURE__ */ M('<div class="w-3.5 h-3.5 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div> Loading…', 1), vl = /* @__PURE__ */ mr('<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg> Refresh', 1), hl = /* @__PURE__ */ M('<div class="flex items-center justify-center py-12"><svg class="animate-spin h-7 w-7 text-gray-400" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path></svg> <span class="ml-3 text-gray-500 text-sm">Loading proposals…</span></div>'), pl = /* @__PURE__ */ M('<div class="text-center py-12"><svg class="mx-auto h-10 w-10 text-gray-300 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path></svg> <p class="text-gray-500 text-sm">No proposals yet</p> <p class="text-gray-400 text-xs mt-1">Be the first to submit a proposal for this realm.</p></div>'), _l = /* @__PURE__ */ M('<div class="text-xs space-y-1"><div class="flex gap-2"><span class="text-green-600"> </span> <span class="text-red-600"> </span> <span class="text-gray-500"> </span></div> <div class="w-full bg-gray-200 rounded-full h-1"><div class="bg-green-500 h-1 rounded-full"></div></div></div>'), gl = /* @__PURE__ */ M('<span class="text-xs text-gray-300">—</span>'), bl = /* @__PURE__ */ M('<div class="w-3 h-3 border-2 border-green-400 border-t-transparent rounded-full animate-spin inline-block"></div>'), xl = /* @__PURE__ */ M('<div class="w-3 h-3 border-2 border-red-400 border-t-transparent rounded-full animate-spin inline-block"></div>'), ml = /* @__PURE__ */ M('<div class="w-3 h-3 border-2 border-gray-400 border-t-transparent rounded-full animate-spin inline-block"></div>'), yl = /* @__PURE__ */ M('<button class="px-2 py-1 rounded border border-green-300 text-xs text-green-700 hover:bg-green-50 disabled:opacity-50"><!></button> <button class="px-2 py-1 rounded border border-red-300 text-xs text-red-700 hover:bg-red-50 disabled:opacity-50"><!></button> <button class="px-2 py-1 rounded border border-gray-300 text-xs text-gray-600 hover:bg-gray-50 disabled:opacity-50"><!></button>', 1), wl = /* @__PURE__ */ M('<tr class="hover:bg-gray-50 transition-colors"><td class="px-5 py-3"><div class="truncate"><div class="text-sm font-medium text-gray-900 truncate"> </div> <div class="text-xs text-gray-500 truncate"> </div></div></td><td class="px-3 py-3"><span> </span></td><td class="px-3 py-3 truncate"><code class="text-xs text-gray-500"> </code></td><td class="px-3 py-3 text-xs text-gray-500"> </td><td class="px-3 py-3"><!></td><td class="px-3 py-3"><div class="flex flex-wrap gap-1"><button class="inline-flex items-center gap-1 px-2.5 py-1 rounded border border-gray-300 text-xs text-gray-700 hover:bg-gray-100 transition-colors"><svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg> View</button> <!></div></td></tr>'), kl = /* @__PURE__ */ M('<div class="pt-2 border-t border-gray-100"><div class="flex justify-between items-center mb-2"><div class="flex gap-3 text-xs"><span class="text-green-600"> </span> <span class="text-red-600"> </span> <span class="text-gray-500"> </span></div></div> <div class="w-full bg-gray-200 rounded-full h-1.5 mb-2"><div class="bg-green-500 h-1.5 rounded-full"></div></div> <div class="flex gap-1"><button class="flex-1 py-1.5 rounded border border-green-300 text-xs text-green-700 hover:bg-green-50 disabled:opacity-50">Yes</button> <button class="flex-1 py-1.5 rounded border border-red-300 text-xs text-red-700 hover:bg-red-50 disabled:opacity-50">No</button> <button class="flex-1 py-1.5 rounded border border-gray-300 text-xs text-gray-600 hover:bg-gray-50 disabled:opacity-50">Abstain</button></div></div>'), El = /* @__PURE__ */ M('<div class="p-4 hover:bg-gray-50 transition-colors"><div class="flex items-start justify-between mb-2"><div class="flex-1 min-w-0"><h3 class="text-sm font-medium text-gray-900 truncate"> </h3> <span> </span></div> <button class="ml-2 p-1.5 rounded border border-gray-300 text-gray-500 hover:bg-gray-100"><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg></button></div> <p class="text-xs text-gray-500 line-clamp-2 mb-2"> </p> <div class="flex items-center justify-between text-xs text-gray-400 mb-2"><code> </code> <span> </span></div> <!></div>'), Cl = /* @__PURE__ */ M('<div class="flex items-center justify-between px-5 py-3 border-t border-gray-200"><span class="text-xs text-gray-500"> </span> <div class="flex items-center gap-2"><button class="inline-flex items-center gap-1 px-2.5 py-1 text-xs rounded border border-gray-300 text-gray-600 hover:bg-gray-50 disabled:opacity-40"><svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg> Prev</button> <span class="text-xs text-gray-500"> </span> <button class="inline-flex items-center gap-1 px-2.5 py-1 text-xs rounded border border-gray-300 text-gray-600 hover:bg-gray-50 disabled:opacity-40">Next <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></button></div></div>'), Sl = /* @__PURE__ */ M('<div class="hidden lg:block overflow-x-auto"><table class="w-full table-fixed"><thead><tr class="border-b border-gray-100 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"><th class="px-5 py-3 w-[30%]">Title</th><th class="px-3 py-3 w-[10%]">Status</th><th class="px-3 py-3 w-[14%]">Proposer</th><th class="px-3 py-3 w-[10%]">Created</th><th class="px-3 py-3 w-[14%]">Votes</th><th class="px-3 py-3 w-[22%]">Actions</th></tr></thead><tbody class="divide-y divide-gray-100"></tbody></table></div> <div class="lg:hidden divide-y divide-gray-100"></div> <!>', 1), Ml = /* @__PURE__ */ M('<div class="rounded-lg border border-gray-200 bg-white"><div class="flex items-center justify-between px-5 py-3 border-b border-gray-200"><div class="flex gap-1"><button><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path></svg> Proposals</button> <button class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-100"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg> Submit Proposal</button></div> <button class="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-50 disabled:opacity-50"><!></button></div> <!></div>'), Al = /* @__PURE__ */ M('<div class="w-full px-6 pt-8 max-w-none"><div class="mb-6"><h1 class="text-3xl font-bold text-gray-900 mb-1">Voting</h1> <p class="text-gray-500 text-sm">Create proposals, review code changes, and vote on governance decisions.</p></div> <!> <!> <!></div>');
function Tl(e, t) {
  Zs(t, !0);
  let r = /* @__PURE__ */ U(ar([])), n = /* @__PURE__ */ U(!0), s = /* @__PURE__ */ U(""), i = /* @__PURE__ */ U("list"), d = /* @__PURE__ */ U(""), c = /* @__PURE__ */ U(""), o = /* @__PURE__ */ U(ar([{ url: "", name: "", checksum: "", calculating: !1 }])), u = /* @__PURE__ */ U(!1), p = /* @__PURE__ */ U(""), h = /* @__PURE__ */ U(null), m = /* @__PURE__ */ U(""), x = /* @__PURE__ */ U(""), w = /* @__PURE__ */ U(!1), T = /* @__PURE__ */ U(""), g = /* @__PURE__ */ U(!1), P = /* @__PURE__ */ U(""), K = /* @__PURE__ */ U(""), R = /* @__PURE__ */ U(""), W = /* @__PURE__ */ U(1);
  const ve = 10;
  let Ke = /* @__PURE__ */ qr(() => [...a(r)].sort((v, y) => (y.created_at || 0) - (v.created_at || 0))), le = /* @__PURE__ */ qr(() => Math.max(1, Math.ceil(a(Ke).length / ve))), lt = /* @__PURE__ */ qr(() => a(Ke).slice((a(W) - 1) * ve, a(W) * ve));
  ba(() => {
    a(r).length >= 0 && b(W, 1);
  });
  async function Xe(v, y = {}) {
    const D = await t.ctx.backend.extension_sync_call(JSON.stringify({
      extension_name: "voting",
      function_name: v,
      args: JSON.stringify(y)
    })), z = typeof D == "string" ? JSON.parse(D) : D;
    return z?.response ? typeof z.response == "string" ? JSON.parse(z.response) : z.response : z;
  }
  async function ee(v, y = {}) {
    const D = await t.ctx.backend.extension_async_call(JSON.stringify({
      extension_name: "voting",
      function_name: v,
      args: JSON.stringify(y)
    })), z = typeof D == "string" ? JSON.parse(D) : D;
    return z?.response ? typeof z.response == "string" ? JSON.parse(z.response) : z.response : z;
  }
  async function qt() {
    b(n, !0), b(s, "");
    try {
      const v = await Xe("get_proposals");
      v?.success ? b(r, v.data?.proposals ?? v.data ?? [], !0) : v?.data ? b(r, Array.isArray(v.data) ? v.data : v.data.proposals ?? [], !0) : Array.isArray(v) ? b(r, v, !0) : b(s, v?.error || "Failed to load proposals", !0);
    } catch (v) {
      b(s, v?.message || String(v), !0);
    } finally {
      b(n, !1);
    }
  }
  async function fn(v) {
    b(h, v, !0), b(i, "detail"), b(m, ""), b(x, ""), b(T, ""), b(P, ""), b(K, ""), await ys(v);
  }
  async function ys(v) {
    b(w, !0), b(T, "");
    try {
      const y = await ee("fetch_proposal_code", { proposal_id: v.id });
      y?.success ? (b(m, y.data?.code ?? "", !0), b(x, y.data?.checksum ?? "", !0)) : b(T, y?.error || "Failed to fetch code", !0);
    } catch (y) {
      b(T, y?.message || String(y), !0);
    } finally {
      b(w, !1);
    }
  }
  async function bt(v, y) {
    b(R, v + y), b(s, "");
    try {
      const D = t.ctx.principal || "anonymous", z = await Xe("cast_vote", { proposal_id: v, vote: y, voter: D });
      if (z?.success) {
        if (a(h)?.id === v) {
          const ie = await Xe("get_proposal", { proposal_id: v });
          ie?.success ? b(h, ie.data ?? ie, !0) : b(h, ie?.data ?? a(h), !0);
        }
        await qt();
      } else
        b(s, z?.error || "Failed to cast vote", !0);
    } catch (D) {
      b(s, D?.message || String(D), !0);
    } finally {
      b(R, "");
    }
  }
  async function ja() {
    if (a(h)) {
      b(g, !0), b(K, ""), b(P, "");
      try {
        const v = await ee("demo_approve_and_execute", { proposal_id: a(h).id });
        v?.success ? (b(P, v.data?.message || "Proposal approved and executed", !0), v.data?.proposal && b(h, { ...a(h), ...v.data.proposal }, !0), await qt()) : b(K, v?.error || "Failed to approve and execute", !0);
      } catch (v) {
        b(K, v?.message || String(v), !0);
      } finally {
        b(g, !1);
      }
    }
  }
  function La(v) {
    try {
      const y = new URL(v).pathname.split("/").pop() || "";
      return y.endsWith(".py") ? y.slice(0, -3) : y;
    } catch {
      return "";
    }
  }
  function cn(v) {
    try {
      return new URL(v), !0;
    } catch {
      return !1;
    }
  }
  function Oa(v) {
    const y = a(o)[v];
    y.url && cn(y.url) && !y.name && (a(o)[v].name = La(y.url));
  }
  function Fa() {
    b(
      o,
      [
        ...a(o),
        { url: "", name: "", checksum: "", calculating: !1 }
      ],
      !0
    );
  }
  function Ba(v) {
    a(o).length <= 1 || b(o, a(o).filter((y, D) => D !== v), !0);
  }
  async function Ia(v) {
    const y = a(o)[v];
    if (!y.url.trim() || !cn(y.url)) {
      b(s, "Please enter a valid URL");
      return;
    }
    a(o)[v].calculating = !0, b(s, "");
    try {
      const D = await ee("fetch_proposal_code", { code_url: y.url.trim() });
      D?.success ? a(o)[v].checksum = D.data?.checksum ?? "" : b(s, D?.error || "Failed to fetch checksum", !0);
    } catch (D) {
      b(s, D?.message || String(D), !0);
    } finally {
      a(o)[v].calculating = !1;
    }
  }
  function za() {
    return a(o).some((v) => v.url.trim() && cn(v.url.trim()));
  }
  async function Va() {
    if (!a(d).trim() || !a(c).trim()) {
      b(s, "Title and description are required");
      return;
    }
    const v = a(o).filter((y) => y.url.trim() && y.name.trim());
    if (v.length === 0) {
      b(s, "At least one codex entry with URL and name is required");
      return;
    }
    for (const y of v)
      if (!cn(y.url)) {
        b(s, "One or more codex URLs are invalid");
        return;
      }
    b(u, !0), b(s, ""), b(p, "");
    try {
      const y = {
        title: a(d).trim(),
        description: a(c).trim(),
        proposer: t.ctx.principal || "anonymous"
      };
      v.length === 1 ? (y.code_url = v[0].url.trim(), y.code_checksum = v[0].checksum.trim(), y.codex_name = v[0].name.trim()) : y.codices = v.map((z) => ({
        url: z.url.trim(),
        name: z.name.trim(),
        checksum: z.checksum.trim()
      }));
      const D = await Xe("submit_proposal", y);
      D?.success ? (b(p, "Proposal submitted successfully!"), b(d, ""), b(c, ""), b(o, [{ url: "", name: "", checksum: "", calculating: !1 }], !0), await qt(), setTimeout(
        () => {
          b(p, ""), b(i, "list");
        },
        1500
      )) : b(s, D?.error || "Failed to submit proposal", !0);
    } catch (y) {
      b(s, y?.message || String(y), !0);
    } finally {
      b(u, !1);
    }
  }
  function Ua() {
    b(d, ""), b(c, ""), b(o, [{ url: "", name: "", checksum: "", calculating: !1 }], !0), b(s, ""), b(p, ""), b(i, "list");
  }
  function Dn(v) {
    if (!v) return "bg-gray-100 text-gray-700";
    const y = v.toLowerCase();
    return y === "voting" ? "bg-emerald-100 text-emerald-700" : y === "pending_review" || y === "pending_vote" ? "bg-amber-100 text-amber-700" : y === "accepted" || y === "executed" || y === "passed" ? "bg-green-100 text-green-700" : y === "executing" ? "bg-purple-100 text-purple-700" : y === "rejected" || y === "failed" ? "bg-red-100 text-red-700" : "bg-gray-100 text-gray-700";
  }
  function jn(v) {
    return v ? v.replace(/_/g, " ").replace(/\b\w/g, (y) => y.toUpperCase()) : "Unknown";
  }
  function ws(v) {
    if (!v && v !== 0) return "N/A";
    const y = typeof v == "number" ? new Date(v * 1e3) : new Date(v);
    return isNaN(y.getTime()) ? "N/A" : y.toLocaleDateString();
  }
  function ks(v) {
    if (!v && v !== 0) return "N/A";
    const y = typeof v == "number" ? new Date(v * 1e3) : new Date(v);
    return isNaN(y.getTime()) ? "N/A" : y.toLocaleString();
  }
  function Ln(v) {
    return !v || v.length <= 16 ? v || "unknown" : v.slice(0, 8) + "..." + v.slice(-6);
  }
  function Es(v) {
    try {
      return (typeof v.metadata == "string" ? JSON.parse(v.metadata) : v.metadata || {}).codices || [];
    } catch {
      return [];
    }
  }
  No(() => {
    qt();
  });
  var Cs = Al(), Ss = _(f(Cs), 2);
  {
    var qa = (v) => {
      var y = Ro(), D = _(f(y), 2), z = f(D), ie = _(D, 2);
      V(() => A(z, a(s))), J("click", ie, () => b(s, "")), E(v, y);
    };
    I(Ss, (v) => {
      a(s) && v(qa);
    });
  }
  var Ms = _(Ss, 2);
  {
    var Ha = (v) => {
      var y = Do(), D = _(f(y), 2), z = f(D);
      V(() => A(z, a(p))), E(v, y);
    };
    I(Ms, (v) => {
      a(p) && v(Ha);
    });
  }
  var Ya = _(Ms, 2);
  {
    var Ja = (v) => {
      var y = sl(), D = Hr(y), z = _(D, 2), ie = f(z), Ht = f(ie), xt = f(Ht), yr = f(xt), Yt = _(xt, 2), wr = f(Yt), zr = _(Ht, 2), kr = f(zr), Jt = _(f(kr)), Er = f(Jt), Q = _(kr, 2), me = f(Q), Cr = _(Q, 2);
      {
        var te = (k) => {
          var S = jo(), B = f(S);
          V((G) => A(B, `Deadline: ${G ?? ""}`), [
            () => ks(a(h).voting_deadline)
          ]), E(k, S);
        };
        I(Cr, (k) => {
          a(h).voting_deadline && k(te);
        });
      }
      var se = _(ie, 2), he = _(f(se), 2), Wt = f(he), Gt = _(se, 2);
      {
        var Ze = (k) => {
          var S = Ho(), B = _(f(S), 2), G = f(B), _e = f(G), Be = f(_e), de = _(G, 2), ue = f(de), ge = f(ue), ye = _(de, 2), Ie = f(ye), tt = f(Ie), Qt = _(ye, 2), $t = f(Qt), q = f($t), X = _(B, 2);
          {
            var vn = (er) => {
              var Ur = Oo(), tr = f(Ur), Bn = _(f(tr), 2), In = f(Bn), hn = _(tr, 2), Mr = f(hn), zn = _(hn, 2);
              {
                var Vn = (rr) => {
                  var Rt = Lo(), Un = f(Rt);
                  V((qn) => A(Un, `Threshold: ${qn ?? ""}%`), [
                    () => (a(h).required_threshold * 100).toFixed(0)
                  ]), E(rr, Rt);
                };
                I(zn, (rr) => {
                  a(h).required_threshold && rr(Vn);
                });
              }
              V(
                (rr, Rt) => {
                  A(In, `${rr ?? ""}%`), Gn(Mr, `width: ${Rt ?? ""}%`);
                },
                [
                  () => ((a(h).votes?.yes ?? 0) / Math.max(a(h).total_voters, 1) * 100).toFixed(1),
                  () => (a(h).votes?.yes ?? 0) / Math.max(a(h).total_voters, 1) * 100
                ]
              ), E(er, Ur);
            };
            I(X, (er) => {
              a(h).total_voters > 0 && er(vn);
            });
          }
          var On = _(X, 2);
          {
            var Fn = (er) => {
              var Ur = qo(), tr = f(Ur), Bn = f(tr);
              {
                var In = (re) => {
                  var rt = Fo();
                  E(re, rt);
                }, hn = (re) => {
                  var rt = Bo();
                  E(re, rt);
                };
                I(Bn, (re) => {
                  a(R) === a(h).id + "yes" ? re(In) : re(hn, -1);
                });
              }
              var Mr = _(tr, 2), zn = f(Mr);
              {
                var Vn = (re) => {
                  var rt = Io();
                  E(re, rt);
                }, rr = (re) => {
                  var rt = zo();
                  E(re, rt);
                };
                I(zn, (re) => {
                  a(R) === a(h).id + "no" ? re(Vn) : re(rr, -1);
                });
              }
              var Rt = _(Mr, 2), Un = f(Rt);
              {
                var qn = (re) => {
                  var rt = Vo();
                  E(re, rt);
                }, Ka = (re) => {
                  var rt = Uo();
                  E(re, rt);
                };
                I(Un, (re) => {
                  a(R) === a(h).id + "abstain" ? re(qn) : re(Ka, -1);
                });
              }
              V(() => {
                tr.disabled = !!a(R), Mr.disabled = !!a(R), Rt.disabled = !!a(R);
              }), J("click", tr, () => bt(a(h).id, "yes")), J("click", Mr, () => bt(a(h).id, "no")), J("click", Rt, () => bt(a(h).id, "abstain")), E(er, Ur);
            };
            I(On, (er) => {
              a(h).status === "voting" && er(Fn);
            });
          }
          V(() => {
            A(Be, a(h).votes?.yes ?? 0), A(ge, a(h).votes?.no ?? 0), A(tt, a(h).votes?.abstain ?? 0), A(q, a(h).total_voters ?? 0);
          }), E(k, S);
        };
        I(Gt, (k) => {
          (a(h).status === "voting" || a(h).total_voters > 0) && k(Ze);
        });
      }
      var C = _(Gt, 2), pe = f(C), je = f(pe);
      {
        var Ce = (k) => {
          var S = Yo();
          E(k, S);
        }, Se = (k) => {
          var S = Jo();
          E(k, S);
        };
        I(je, (k) => {
          a(g) ? k(Ce) : k(Se, -1);
        });
      }
      var Le = _(C, 2);
      {
        var Qe = (k) => {
          var S = Wo(), B = f(S);
          V(() => A(B, a(K))), E(k, S);
        };
        I(Le, (k) => {
          a(K) && k(Qe);
        });
      }
      var Me = _(Le, 2);
      {
        var dt = (k) => {
          var S = Go(), B = _(f(S));
          V(() => A(B, ` ${a(P) ?? ""}`)), E(k, S);
        };
        I(Me, (k) => {
          a(P) && k(dt);
        });
      }
      var $e = _(Me, 2);
      {
        var Kt = (k) => {
          const S = /* @__PURE__ */ qr(() => Es(a(h)));
          var B = Zo(), G = f(B), _e = f(G), Be = _(G, 2);
          gn(Be, 21, () => a(S), _n, (de, ue) => {
            var ge = Xo(), ye = f(ge), Ie = f(ye), tt = _(ye, 2), Qt = f(tt), $t = _(tt, 2);
            {
              var q = (X) => {
                var vn = Ko(), On = f(vn);
                V((Fn) => A(On, `${Fn ?? ""}…`), [() => a(ue).checksum.slice(0, 20)]), E(X, vn);
              };
              I($t, (X) => {
                a(ue).checksum && X(q);
              });
            }
            V(
              (X) => {
                A(Ie, a(ue).name), mt(tt, "href", a(ue).url), A(Qt, X);
              },
              [() => a(ue).url.split("/").pop()]
            ), E(de, ge);
          }), V(() => A(_e, `Codices (${a(S).length ?? ""})`)), E(k, B);
        }, Ae = /* @__PURE__ */ qr(() => Es(a(h)).length > 1);
        I($e, (k) => {
          a(Ae) && k(Kt);
        });
      }
      var ut = _($e, 2), At = f(ut), Tt = _(f(At), 2), Nt = f(Tt);
      {
        var H = (k) => {
          var S = Qo();
          V(() => mt(S, "href", a(h).code_url)), E(k, S);
        };
        I(Nt, (k) => {
          a(h).code_url && k(H);
        });
      }
      var Oe = _(Nt, 2), Fe = f(Oe), et = _(At, 2), Pt = f(et);
      {
        var Xt = (k) => {
          var S = $o();
          E(k, S);
        }, Zt = (k) => {
          var S = el(), B = Hr(S), G = f(B), _e = _(B, 2);
          V(() => A(G, a(T))), J("click", _e, () => ys(a(h))), E(k, S);
        }, Vr = (k) => {
          var S = rl(), B = Hr(S), G = f(B), _e = f(G), Be = f(_e), de = _(B, 2);
          {
            var ue = (ge) => {
              var ye = tl(), Ie = f(ye), tt = _(f(Ie)), Qt = f(tt), $t = _(Ie, 2), q = f($t);
              V(
                (X) => {
                  A(Qt, a(x)), A(q, `${X ?? ""} lines`);
                },
                [() => a(m).split(`
`).length]
              ), E(ge, ye);
            };
            I(de, (ge) => {
              a(x) && ge(ue);
            });
          }
          V(() => A(Be, a(m))), E(k, S);
        }, Sr = (k) => {
          var S = nl();
          E(k, S);
        };
        I(Pt, (k) => {
          a(w) ? k(Xt) : a(T) ? k(Zt, 1) : a(m) ? k(Vr, 2) : k(Sr, -1);
        });
      }
      V(
        (k, S, B, G, _e) => {
          A(yr, a(h).title), Jr(Yt, 1, `px-2.5 py-0.5 rounded-full text-xs font-semibold ${k ?? ""}`), A(wr, S), A(Er, B), A(me, `Created: ${G ?? ""}`), A(Wt, a(h).description), pe.disabled = a(g), A(Fe, _e);
        },
        [
          () => Dn(a(h).status),
          () => jn(a(h).status),
          () => Ln(a(h).proposer),
          () => ks(a(h).created_at),
          () => a(h).code_url ? a(h).code_url.split("/").pop() : "proposal.py"
        ]
      ), J("click", D, () => {
        b(i, "list"), b(h, null);
      }), J("click", pe, ja), E(v, y);
    }, Wa = (v) => {
      var y = fl(), D = _(f(y), 2), z = f(D), ie = _(f(z), 2), Ht = _(z, 2), xt = _(f(Ht), 2), yr = _(Ht, 2), Yt = f(yr), wr = _(f(Yt), 2), zr = _(Yt, 4);
      gn(zr, 17, () => a(o), _n, (te, se, he) => {
        var Wt = ll(), Gt = f(Wt);
        {
          var Ze = (H) => {
            var Oe = al(), Fe = f(Oe);
            Fe.textContent = `Codex ${he + 1}`;
            var et = _(Fe, 2);
            V(() => et.disabled = a(u)), J("click", et, () => Ba(he)), E(H, Oe);
          };
          I(Gt, (H) => {
            a(o).length > 1 && H(Ze);
          });
        }
        var C = _(Gt, 2), pe = f(C), je = f(pe);
        mt(je, "for", `codex-url-${he}`);
        var Ce = _(je, 2);
        mt(Ce, "id", `codex-url-${he}`);
        var Se = _(pe, 2), Le = f(Se), Qe = f(Le);
        mt(Qe, "for", `codex-name-${he}`);
        var Me = _(Qe, 2);
        mt(Me, "id", `codex-name-${he}`);
        var dt = _(Le, 2), $e = f(dt);
        mt($e, "for", `codex-cksum-${he}`);
        var Kt = _($e, 2), Ae = f(Kt);
        mt(Ae, "id", `codex-cksum-${he}`);
        var ut = _(Ae, 2), At = f(ut);
        {
          var Tt = (H) => {
            var Oe = il();
            E(H, Oe);
          }, Nt = (H) => {
            var Oe = ol();
            E(H, Oe);
          };
          I(At, (H) => {
            a(se).calculating ? H(Tt) : H(Nt, -1);
          });
        }
        V(
          (H) => {
            Jr(Wt, 1, `border border-gray-200 rounded-lg p-3 mb-3 ${a(o).length > 1 ? "bg-gray-50" : ""}`), Ce.disabled = a(u), Me.disabled = a(u), Ae.disabled = a(u) || a(se).calculating, ut.disabled = H;
          },
          [
            () => a(u) || a(se).calculating || !a(se).url.trim()
          ]
        ), J("change", Ce, () => Oa(he)), Wr(Ce, () => a(se).url, (H) => a(se).url = H), Wr(Me, () => a(se).name, (H) => a(se).name = H), Wr(Ae, () => a(se).checksum, (H) => a(se).checksum = H), J("click", ut, () => Ia(he)), E(te, Wt);
      });
      var kr = _(yr, 4), Jt = f(kr), Er = _(Jt, 2), Q = f(Er);
      {
        var me = (te) => {
          var se = dl();
          E(te, se);
        }, Cr = (te) => {
          var se = ul();
          E(te, se);
        };
        I(Q, (te) => {
          a(u) ? te(me) : te(Cr, -1);
        });
      }
      V(
        (te) => {
          ie.disabled = a(u), xt.disabled = a(u), wr.disabled = a(u), Jt.disabled = a(u), Er.disabled = te;
        },
        [
          () => a(u) || !a(d).trim() || !a(c).trim() || !za()
        ]
      ), co("submit", D, (te) => {
        te.preventDefault(), Va();
      }), Wr(ie, () => a(d), (te) => b(d, te)), Wr(xt, () => a(c), (te) => b(c, te)), J("click", wr, Fa), J("click", Jt, Ua), E(v, y);
    }, Ga = (v) => {
      var y = Ml(), D = f(y), z = f(D), ie = f(z), Ht = _(ie, 2), xt = _(z, 2), yr = f(xt);
      {
        var Yt = (Q) => {
          var me = cl();
          E(Q, me);
        }, wr = (Q) => {
          var me = vl();
          E(Q, me);
        };
        I(yr, (Q) => {
          a(n) ? Q(Yt) : Q(wr, -1);
        });
      }
      var zr = _(D, 2);
      {
        var kr = (Q) => {
          var me = hl();
          E(Q, me);
        }, Jt = (Q) => {
          var me = pl();
          E(Q, me);
        }, Er = (Q) => {
          var me = Sl(), Cr = Hr(me), te = f(Cr), se = _(f(te));
          gn(se, 21, () => a(lt), _n, (Ze, C) => {
            var pe = wl(), je = f(pe), Ce = f(je), Se = f(Ce), Le = f(Se), Qe = _(Se, 2), Me = f(Qe), dt = _(je), $e = f(dt), Kt = f($e), Ae = _(dt), ut = f(Ae), At = f(ut), Tt = _(Ae), Nt = f(Tt), H = _(Tt), Oe = f(H);
            {
              var Fe = (k) => {
                var S = _l(), B = f(S), G = f(B), _e = f(G), Be = _(G, 2), de = f(Be), ue = _(Be, 2), ge = f(ue), ye = _(B, 2), Ie = f(ye);
                V(
                  (tt) => {
                    A(_e, `Y:${a(C).votes?.yes ?? 0 ?? ""}`), A(de, `N:${a(C).votes?.no ?? 0 ?? ""}`), A(ge, `A:${a(C).votes?.abstain ?? 0 ?? ""}`), Gn(Ie, `width: ${tt ?? ""}%`);
                  },
                  [
                    () => (a(C).votes?.yes ?? 0) / Math.max(a(C).total_voters, 1) * 100
                  ]
                ), E(k, S);
              }, et = (k) => {
                var S = gl();
                E(k, S);
              };
              I(Oe, (k) => {
                a(C).status === "voting" ? k(Fe) : k(et, -1);
              });
            }
            var Pt = _(H), Xt = f(Pt), Zt = f(Xt), Vr = _(Zt, 2);
            {
              var Sr = (k) => {
                var S = yl(), B = Hr(S), G = f(B);
                {
                  var _e = (q) => {
                    var X = bl();
                    E(q, X);
                  }, Be = (q) => {
                    var X = Wn("Yes");
                    E(q, X);
                  };
                  I(G, (q) => {
                    a(R) === a(C).id + "yes" ? q(_e) : q(Be, -1);
                  });
                }
                var de = _(B, 2), ue = f(de);
                {
                  var ge = (q) => {
                    var X = xl();
                    E(q, X);
                  }, ye = (q) => {
                    var X = Wn("No");
                    E(q, X);
                  };
                  I(ue, (q) => {
                    a(R) === a(C).id + "no" ? q(ge) : q(ye, -1);
                  });
                }
                var Ie = _(de, 2), tt = f(Ie);
                {
                  var Qt = (q) => {
                    var X = ml();
                    E(q, X);
                  }, $t = (q) => {
                    var X = Wn("Abstain");
                    E(q, X);
                  };
                  I(tt, (q) => {
                    a(R) === a(C).id + "abstain" ? q(Qt) : q($t, -1);
                  });
                }
                V(() => {
                  B.disabled = !!a(R), de.disabled = !!a(R), Ie.disabled = !!a(R);
                }), J("click", B, () => bt(a(C).id, "yes")), J("click", de, () => bt(a(C).id, "no")), J("click", Ie, () => bt(a(C).id, "abstain")), E(k, S);
              };
              I(Vr, (k) => {
                a(C).status === "voting" && k(Sr);
              });
            }
            V(
              (k, S, B, G) => {
                A(Le, a(C).title), A(Me, a(C).description), Jr($e, 1, `inline-flex px-2 py-0.5 rounded-full text-xs font-semibold ${k ?? ""}`), A(Kt, S), mt(Ae, "title", a(C).proposer), A(At, B), A(Nt, G);
              },
              [
                () => Dn(a(C).status),
                () => jn(a(C).status),
                () => Ln(a(C).proposer),
                () => ws(a(C).created_at)
              ]
            ), J("click", Zt, () => fn(a(C))), E(Ze, pe);
          });
          var he = _(Cr, 2);
          gn(he, 21, () => a(lt), _n, (Ze, C) => {
            var pe = El(), je = f(pe), Ce = f(je), Se = f(Ce), Le = f(Se), Qe = _(Se, 2), Me = f(Qe), dt = _(Ce, 2), $e = _(je, 2), Kt = f($e), Ae = _($e, 2), ut = f(Ae), At = f(ut), Tt = _(ut, 2), Nt = f(Tt), H = _(Ae, 2);
            {
              var Oe = (Fe) => {
                var et = kl(), Pt = f(et), Xt = f(Pt), Zt = f(Xt), Vr = f(Zt), Sr = _(Zt, 2), k = f(Sr), S = _(Sr, 2), B = f(S), G = _(Pt, 2), _e = f(G), Be = _(G, 2), de = f(Be), ue = _(de, 2), ge = _(ue, 2);
                V(
                  (ye) => {
                    A(Vr, `Y:${a(C).votes?.yes ?? 0 ?? ""}`), A(k, `N:${a(C).votes?.no ?? 0 ?? ""}`), A(B, `A:${a(C).votes?.abstain ?? 0 ?? ""}`), Gn(_e, `width: ${ye ?? ""}%`), de.disabled = !!a(R), ue.disabled = !!a(R), ge.disabled = !!a(R);
                  },
                  [
                    () => (a(C).votes?.yes ?? 0) / Math.max(a(C).total_voters, 1) * 100
                  ]
                ), J("click", de, () => bt(a(C).id, "yes")), J("click", ue, () => bt(a(C).id, "no")), J("click", ge, () => bt(a(C).id, "abstain")), E(Fe, et);
              };
              I(H, (Fe) => {
                a(C).status === "voting" && Fe(Oe);
              });
            }
            V(
              (Fe, et, Pt, Xt) => {
                A(Le, a(C).title), Jr(Qe, 1, `inline-flex mt-1 px-2 py-0.5 rounded-full text-xs font-semibold ${Fe ?? ""}`), A(Me, et), A(Kt, a(C).description), A(At, Pt), A(Nt, Xt);
              },
              [
                () => Dn(a(C).status),
                () => jn(a(C).status),
                () => Ln(a(C).proposer),
                () => ws(a(C).created_at)
              ]
            ), J("click", dt, () => fn(a(C))), E(Ze, pe);
          });
          var Wt = _(he, 2);
          {
            var Gt = (Ze) => {
              var C = Cl(), pe = f(C), je = f(pe), Ce = _(pe, 2), Se = f(Ce), Le = _(Se, 2), Qe = f(Le), Me = _(Le, 2);
              V(
                (dt) => {
                  A(je, `${(a(W) - 1) * ve + 1}–${dt ?? ""} of ${a(Ke).length ?? ""}`), Se.disabled = a(W) <= 1, A(Qe, `${a(W) ?? ""} / ${a(le) ?? ""}`), Me.disabled = a(W) >= a(le);
                },
                [
                  () => Math.min(a(W) * ve, a(Ke).length)
                ]
              ), J("click", Se, () => Ds(W, -1)), J("click", Me, () => Ds(W)), E(Ze, C);
            };
            I(Wt, (Ze) => {
              a(le) > 1 && Ze(Gt);
            });
          }
          E(Q, me);
        };
        I(zr, (Q) => {
          a(n) ? Q(kr) : a(r).length === 0 ? Q(Jt, 1) : Q(Er, -1);
        });
      }
      V(() => {
        Jr(ie, 1, `inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium ${a(i) === "list" ? "bg-gray-900 text-white" : "text-gray-600 hover:bg-gray-100"}`), xt.disabled = a(n);
      }), J("click", ie, () => b(i, "list")), J("click", Ht, () => b(i, "form")), J("click", xt, qt), E(v, y);
    };
    I(Ya, (v) => {
      a(i) === "detail" && a(h) ? v(Ja) : a(i) === "form" ? v(Wa, 1) : v(Ga, -1);
    });
  }
  E(e, Cs), Qs();
}
vo(["click", "change"]);
function Rl(e, t) {
  const r = go(Tl, { target: e, props: { ctx: t } });
  return {
    unmount() {
      try {
        xo(r);
      } catch {
      }
    }
  };
}
export {
  Rl as default
};
