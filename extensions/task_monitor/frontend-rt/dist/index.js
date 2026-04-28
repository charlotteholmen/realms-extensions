var oi = Object.defineProperty;
var sn = (e) => {
  throw TypeError(e);
};
var ui = (e, t, r) => t in e ? oi(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var _e = (e, t, r) => ui(e, typeof t != "symbol" ? t + "" : t, r), Nr = (e, t, r) => t.has(e) || sn("Cannot " + r);
var l = (e, t, r) => (Nr(e, t, "read from private field"), r ? r.call(e) : t.get(e)), g = (e, t, r) => t.has(e) ? sn("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), y = (e, t, r, n) => (Nr(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r), A = (e, t, r) => (Nr(e, t, "access private method"), r);
var mn = Array.isArray, ci = Array.prototype.indexOf, At = Array.prototype.includes, mr = Array.from, di = Object.defineProperty, Lt = Object.getOwnPropertyDescriptor, vi = Object.prototype, hi = Array.prototype, _i = Object.getPrototypeOf, ln = Object.isExtensible;
const pi = () => {
};
function gi(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function wn() {
  var e, t, r = new Promise((n, i) => {
    e = n, t = i;
  });
  return { promise: r, resolve: e, reject: t };
}
const q = 2, Nt = 4, wr = 8, yn = 1 << 24, Ae = 16, we = 32, $e = 64, Dr = 128, fe = 512, D = 1024, L = 2048, Ne = 4096, H = 8192, oe = 16384, bt = 32768, an = 1 << 25, Ct = 65536, Pr = 1 << 17, bi = 1 << 18, Ft = 1 << 19, mi = 1 << 20, qe = 1 << 25, _t = 65536, vr = 1 << 21, jt = 1 << 22, Ze = 1 << 23, Cr = Symbol("$state"), De = new class extends Error {
  constructor() {
    super(...arguments);
    _e(this, "name", "StaleReactionError");
    _e(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
function wi() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function yi(e, t, r) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function ki(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Ei() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function xi(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Si() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Ti() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Ai() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Ni() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Ci() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
const Mi = 1, Ri = 2, Oi = 16, Fi = 1, Di = 2, z = Symbol(), Pi = "http://www.w3.org/1999/xhtml";
function zi() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function Ii() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function kn(e) {
  return e === this.v;
}
function Li(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function En(e) {
  return !Li(e, this.v);
}
let ce = null;
function Mt(e) {
  ce = e;
}
function xn(e, t = !1, r) {
  ce = {
    p: ce,
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
function Sn(e) {
  var t = (
    /** @type {ComponentContext} */
    ce
  ), r = t.e;
  if (r !== null) {
    t.e = null;
    for (var n of r)
      Yn(n);
  }
  return t.i = !0, ce = t.p, /** @type {T} */
  {};
}
function Tn() {
  return !0;
}
let nt = [];
function An() {
  var e = nt;
  nt = [], gi(e);
}
function yt(e) {
  if (nt.length === 0 && !qt) {
    var t = nt;
    queueMicrotask(() => {
      t === nt && An();
    });
  }
  nt.push(e);
}
function qi() {
  for (; nt.length > 0; )
    An();
}
function Nn(e) {
  var t = E;
  if (t === null)
    return k.f |= Ze, e;
  if ((t.f & bt) === 0 && (t.f & Nt) === 0)
    throw e;
  Xe(e, t);
}
function Xe(e, t) {
  for (; t !== null; ) {
    if ((t.f & Dr) !== 0) {
      if ((t.f & bt) === 0)
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
const Vi = -7169;
function O(e, t) {
  e.f = e.f & Vi | t;
}
function Gr(e) {
  (e.f & fe) !== 0 || e.deps === null ? O(e, D) : O(e, Ne);
}
function Cn(e) {
  if (e !== null)
    for (const t of e)
      (t.f & q) === 0 || (t.f & _t) === 0 || (t.f ^= _t, Cn(
        /** @type {Derived} */
        t.deps
      ));
}
function Mn(e, t, r) {
  (e.f & L) !== 0 ? t.add(e) : (e.f & Ne) !== 0 && r.add(e), Cn(e.deps), O(e, D);
}
const rt = /* @__PURE__ */ new Set();
let m = null, be = null, zr = null, qt = !1, Mr = !1, wt = null, lr = null;
var fn = 0;
let ji = 1;
var kt, Et, at, Pe, xe, Ht, $, Ut, Ke, ze, Se, xt, St, ft, F, ar, Rn, fr, Ir, or, Bi;
const pr = class pr {
  constructor() {
    g(this, F);
    _e(this, "id", ji++);
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
    g(this, kt, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    g(this, Et, /* @__PURE__ */ new Set());
    /**
     * Callbacks that should run only when a fork is committed.
     * @type {Set<(batch: Batch) => void>}
     */
    g(this, at, /* @__PURE__ */ new Set());
    /**
     * Async effects that are currently in flight
     * @type {Map<Effect, number>}
     */
    g(this, Pe, /* @__PURE__ */ new Map());
    /**
     * Async effects that are currently in flight, _not_ inside a pending boundary
     * @type {Map<Effect, number>}
     */
    g(this, xe, /* @__PURE__ */ new Map());
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    g(this, Ht, null);
    /**
     * The root effects that need to be flushed
     * @type {Effect[]}
     */
    g(this, $, []);
    /**
     * Effects created while this batch was active.
     * @type {Effect[]}
     */
    g(this, Ut, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    g(this, Ke, /* @__PURE__ */ new Set());
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
    g(this, Se, /* @__PURE__ */ new Map());
    /**
     * Inverse of #skipped_branches which we need to tell prior batches to unskip them when committing
     * @type {Set<Effect>}
     */
    g(this, xt, /* @__PURE__ */ new Set());
    _e(this, "is_fork", !1);
    g(this, St, !1);
    /** @type {Set<Batch>} */
    g(this, ft, /* @__PURE__ */ new Set());
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(t) {
    l(this, Se).has(t) || l(this, Se).set(t, { d: [], m: [] }), l(this, xt).delete(t);
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
        O(i, L), r(i);
      for (i of n.m)
        O(i, Ne), r(i);
    }
    l(this, xt).add(t);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Value} source
   * @param {any} value
   * @param {boolean} [is_derived]
   */
  capture(t, r, n = !1) {
    t.v !== z && !this.previous.has(t) && this.previous.set(t, t.v), (t.f & Ze) === 0 && (this.current.set(t, [r, n]), be?.set(t, r)), this.is_fork || (t.v = r);
  }
  activate() {
    m = this;
  }
  deactivate() {
    m = null, be = null;
  }
  flush() {
    try {
      Mr = !0, m = this, A(this, F, fr).call(this);
    } finally {
      fn = 0, zr = null, wt = null, lr = null, Mr = !1, m = null, be = null, dt.clear();
    }
  }
  discard() {
    for (const t of l(this, Et)) t(this);
    l(this, Et).clear(), l(this, at).clear(), rt.delete(this);
  }
  /**
   * @param {Effect} effect
   */
  register_created_effect(t) {
    l(this, Ut).push(t);
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  increment(t, r) {
    let n = l(this, Pe).get(r) ?? 0;
    if (l(this, Pe).set(r, n + 1), t) {
      let i = l(this, xe).get(r) ?? 0;
      l(this, xe).set(r, i + 1);
    }
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   * @param {boolean} skip - whether to skip updates (because this is triggered by a stale reaction)
   */
  decrement(t, r, n) {
    let i = l(this, Pe).get(r) ?? 0;
    if (i === 1 ? l(this, Pe).delete(r) : l(this, Pe).set(r, i - 1), t) {
      let s = l(this, xe).get(r) ?? 0;
      s === 1 ? l(this, xe).delete(r) : l(this, xe).set(r, s - 1);
    }
    l(this, St) || n || (y(this, St, !0), yt(() => {
      y(this, St, !1), this.flush();
    }));
  }
  /**
   * @param {Set<Effect>} dirty_effects
   * @param {Set<Effect>} maybe_dirty_effects
   */
  transfer_effects(t, r) {
    for (const n of t)
      l(this, Ke).add(n);
    for (const n of r)
      l(this, ze).add(n);
    t.clear(), r.clear();
  }
  /** @param {(batch: Batch) => void} fn */
  oncommit(t) {
    l(this, kt).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    l(this, Et).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  on_fork_commit(t) {
    l(this, at).add(t);
  }
  run_fork_commit_callbacks() {
    for (const t of l(this, at)) t(this);
    l(this, at).clear();
  }
  settled() {
    return (l(this, Ht) ?? y(this, Ht, wn())).promise;
  }
  static ensure() {
    if (m === null) {
      const t = m = new pr();
      Mr || (rt.add(m), qt || yt(() => {
        m === t && t.flush();
      }));
    }
    return m;
  }
  apply() {
    {
      be = null;
      return;
    }
  }
  /**
   *
   * @param {Effect} effect
   */
  schedule(t) {
    if (zr = t, t.b?.is_pending && (t.f & (Nt | wr | yn)) !== 0 && (t.f & bt) === 0) {
      t.b.defer_effect(t);
      return;
    }
    for (var r = t; r.parent !== null; ) {
      r = r.parent;
      var n = r.f;
      if (wt !== null && r === E && (k === null || (k.f & q) === 0))
        return;
      if ((n & ($e | we)) !== 0) {
        if ((n & D) === 0)
          return;
        r.f ^= D;
      }
    }
    l(this, $).push(r);
  }
};
kt = new WeakMap(), Et = new WeakMap(), at = new WeakMap(), Pe = new WeakMap(), xe = new WeakMap(), Ht = new WeakMap(), $ = new WeakMap(), Ut = new WeakMap(), Ke = new WeakMap(), ze = new WeakMap(), Se = new WeakMap(), xt = new WeakMap(), St = new WeakMap(), ft = new WeakMap(), F = new WeakSet(), ar = function() {
  return this.is_fork || l(this, xe).size > 0;
}, Rn = function() {
  for (const n of l(this, ft))
    for (const i of l(n, xe).keys()) {
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
}, fr = function() {
  var a;
  if (fn++ > 1e3 && (rt.delete(this), Ui()), !A(this, F, ar).call(this)) {
    for (const f of l(this, Ke))
      l(this, ze).delete(f), O(f, L), this.schedule(f);
    for (const f of l(this, ze))
      O(f, Ne), this.schedule(f);
  }
  const t = l(this, $);
  y(this, $, []), this.apply();
  var r = wt = [], n = [], i = lr = [];
  for (const f of t)
    try {
      A(this, F, Ir).call(this, f, r, n);
    } catch (u) {
      throw Dn(f), u;
    }
  if (m = null, i.length > 0) {
    var s = pr.ensure();
    for (const f of i)
      s.schedule(f);
  }
  if (wt = null, lr = null, A(this, F, ar).call(this) || A(this, F, Rn).call(this)) {
    A(this, F, or).call(this, n), A(this, F, or).call(this, r);
    for (const [f, u] of l(this, Se))
      Fn(f, u);
  } else {
    l(this, Pe).size === 0 && rt.delete(this), l(this, Ke).clear(), l(this, ze).clear();
    for (const f of l(this, kt)) f(this);
    l(this, kt).clear(), on(n), on(r), l(this, Ht)?.resolve();
  }
  var o = (
    /** @type {Batch | null} */
    /** @type {unknown} */
    m
  );
  if (l(this, $).length > 0) {
    const f = o ?? (o = this);
    l(f, $).push(...l(this, $).filter((u) => !l(f, $).includes(u)));
  }
  o !== null && (rt.add(o), A(a = o, F, fr).call(a));
}, /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
Ir = function(t, r, n) {
  t.f ^= D;
  for (var i = t.first; i !== null; ) {
    var s = i.f, o = (s & (we | $e)) !== 0, a = o && (s & D) !== 0, f = a || (s & H) !== 0 || l(this, Se).has(i);
    if (!f && i.fn !== null) {
      o ? i.f ^= D : (s & Nt) !== 0 ? r.push(i) : Xt(i) && ((s & Ae) !== 0 && l(this, ze).add(i), Ot(i));
      var u = i.first;
      if (u !== null) {
        i = u;
        continue;
      }
    }
    for (; i !== null; ) {
      var d = i.next;
      if (d !== null) {
        i = d;
        break;
      }
      i = i.parent;
    }
  }
}, /**
 * @param {Effect[]} effects
 */
or = function(t) {
  for (var r = 0; r < t.length; r += 1)
    Mn(t[r], l(this, Ke), l(this, ze));
}, Bi = function() {
  var d, _, h;
  for (const v of rt) {
    var t = v.id < this.id, r = [];
    for (const [c, [b, w]] of this.current) {
      if (v.current.has(c)) {
        var n = (
          /** @type {[any, boolean]} */
          v.current.get(c)[0]
        );
        if (t && b !== n)
          v.current.set(c, [b, w]);
        else
          continue;
      }
      r.push(c);
    }
    var i = [...v.current.keys()].filter((c) => !this.current.has(c));
    if (i.length === 0)
      t && v.discard();
    else if (r.length > 0) {
      if (t)
        for (const c of l(this, xt))
          v.unskip_effect(c, (b) => {
            var w;
            (b.f & (Ae | jt)) !== 0 ? v.schedule(b) : A(w = v, F, or).call(w, [b]);
          });
      v.activate();
      var s = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Map();
      for (var a of r)
        On(a, i, s, o);
      o = /* @__PURE__ */ new Map();
      var f = [...v.current.keys()].filter(
        (c) => this.current.has(c) ? (
          /** @type {[any, boolean]} */
          this.current.get(c)[0] !== c
        ) : !0
      );
      for (const c of l(this, Ut))
        (c.f & (oe | H | Pr)) === 0 && Kr(c, f, o) && ((c.f & (jt | Ae)) !== 0 ? (O(c, L), v.schedule(c)) : l(v, Ke).add(c));
      if (l(v, $).length > 0) {
        v.apply();
        for (var u of l(v, $))
          A(d = v, F, Ir).call(d, u, [], []);
        y(v, $, []);
      }
      v.deactivate();
    }
  }
  for (const v of rt)
    l(v, ft).has(this) && (l(v, ft).delete(this), l(v, ft).size === 0 && !A(_ = v, F, ar).call(_) && (v.activate(), A(h = v, F, fr).call(h)));
};
let pt = pr;
function Hi(e) {
  var t = qt;
  qt = !0;
  try {
    for (var r; ; ) {
      if (qi(), m === null)
        return (
          /** @type {T} */
          r
        );
      m.flush();
    }
  } finally {
    qt = t;
  }
}
function Ui() {
  try {
    Si();
  } catch (e) {
    Xe(e, zr);
  }
}
let Fe = null;
function on(e) {
  var t = e.length;
  if (t !== 0) {
    for (var r = 0; r < t; ) {
      var n = e[r++];
      if ((n.f & (oe | H)) === 0 && Xt(n) && (Fe = /* @__PURE__ */ new Set(), Ot(n), n.deps === null && n.first === null && n.nodes === null && n.teardown === null && n.ac === null && Kn(n), Fe?.size > 0)) {
        dt.clear();
        for (const i of Fe) {
          if ((i.f & (oe | H)) !== 0) continue;
          const s = [i];
          let o = i.parent;
          for (; o !== null; )
            Fe.has(o) && (Fe.delete(o), s.push(o)), o = o.parent;
          for (let a = s.length - 1; a >= 0; a--) {
            const f = s[a];
            (f.f & (oe | H)) === 0 && Ot(f);
          }
        }
        Fe.clear();
      }
    }
    Fe = null;
  }
}
function On(e, t, r, n) {
  if (!r.has(e) && (r.add(e), e.reactions !== null))
    for (const i of e.reactions) {
      const s = i.f;
      (s & q) !== 0 ? On(
        /** @type {Derived} */
        i,
        t,
        r,
        n
      ) : (s & (jt | Ae)) !== 0 && (s & L) === 0 && Kr(i, t, n) && (O(i, L), Wr(
        /** @type {Effect} */
        i
      ));
    }
}
function Kr(e, t, r) {
  const n = r.get(e);
  if (n !== void 0) return n;
  if (e.deps !== null)
    for (const i of e.deps) {
      if (At.call(t, i))
        return !0;
      if ((i.f & q) !== 0 && Kr(
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
function Wr(e) {
  m.schedule(e);
}
function Fn(e, t) {
  if (!((e.f & we) !== 0 && (e.f & D) !== 0)) {
    (e.f & L) !== 0 ? t.d.push(e) : (e.f & Ne) !== 0 && t.m.push(e), O(e, D);
    for (var r = e.first; r !== null; )
      Fn(r, t), r = r.next;
  }
}
function Dn(e) {
  O(e, D);
  for (var t = e.first; t !== null; )
    Dn(t), t = t.next;
}
function Yi(e) {
  let t = 0, r = gt(0), n;
  return () => {
    $r() && (p(r), Jn(() => (t === 0 && (n = ii(() => e(() => Vt(r)))), t += 1, () => {
      yt(() => {
        t -= 1, t === 0 && (n?.(), n = void 0, Vt(r));
      });
    })));
  };
}
var Ji = Ct | Ft;
function Gi(e, t, r, n) {
  new Ki(e, t, r, n);
}
var ie, Jr, se, ot, J, le, j, ee, Ie, ut, We, Tt, Yt, Jt, Le, gr, R, Wi, Xi, Zi, Lr, ur, cr, qr, Vr;
class Ki {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(t, r, n, i) {
    g(this, R);
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
    g(this, Jr, null);
    /** @type {BoundaryProps} */
    g(this, se);
    /** @type {((anchor: Node) => void)} */
    g(this, ot);
    /** @type {Effect} */
    g(this, J);
    /** @type {Effect | null} */
    g(this, le, null);
    /** @type {Effect | null} */
    g(this, j, null);
    /** @type {Effect | null} */
    g(this, ee, null);
    /** @type {DocumentFragment | null} */
    g(this, Ie, null);
    g(this, ut, 0);
    g(this, We, 0);
    g(this, Tt, !1);
    /** @type {Set<Effect>} */
    g(this, Yt, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    g(this, Jt, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    g(this, Le, null);
    g(this, gr, Yi(() => (y(this, Le, gt(l(this, ut))), () => {
      y(this, Le, null);
    })));
    y(this, ie, t), y(this, se, r), y(this, ot, (s) => {
      var o = (
        /** @type {Effect} */
        E
      );
      o.b = this, o.f |= Dr, n(s);
    }), this.parent = /** @type {Effect} */
    E.b, this.transform_error = i ?? this.parent?.transform_error ?? ((s) => s), y(this, J, en(() => {
      A(this, R, Lr).call(this);
    }, Ji));
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    Mn(t, l(this, Yt), l(this, Jt));
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
    A(this, R, qr).call(this, t, r), y(this, ut, l(this, ut) + t), !(!l(this, Le) || l(this, Tt)) && (y(this, Tt, !0), yt(() => {
      y(this, Tt, !1), l(this, Le) && Rt(l(this, Le), l(this, ut));
    }));
  }
  get_effect_pending() {
    return l(this, gr).call(this), p(
      /** @type {Source<number>} */
      l(this, Le)
    );
  }
  /** @param {unknown} error */
  error(t) {
    if (!l(this, se).onerror && !l(this, se).failed)
      throw t;
    m?.is_fork ? (l(this, le) && m.skip_effect(l(this, le)), l(this, j) && m.skip_effect(l(this, j)), l(this, ee) && m.skip_effect(l(this, ee)), m.on_fork_commit(() => {
      A(this, R, Vr).call(this, t);
    })) : A(this, R, Vr).call(this, t);
  }
}
ie = new WeakMap(), Jr = new WeakMap(), se = new WeakMap(), ot = new WeakMap(), J = new WeakMap(), le = new WeakMap(), j = new WeakMap(), ee = new WeakMap(), Ie = new WeakMap(), ut = new WeakMap(), We = new WeakMap(), Tt = new WeakMap(), Yt = new WeakMap(), Jt = new WeakMap(), Le = new WeakMap(), gr = new WeakMap(), R = new WeakSet(), Wi = function() {
  try {
    y(this, le, ae(() => l(this, ot).call(this, l(this, ie))));
  } catch (t) {
    this.error(t);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
Xi = function(t) {
  const r = l(this, se).failed;
  r && y(this, ee, ae(() => {
    r(
      l(this, ie),
      () => t,
      () => () => {
      }
    );
  }));
}, Zi = function() {
  const t = l(this, se).pending;
  t && (this.is_pending = !0, y(this, j, ae(() => t(l(this, ie)))), yt(() => {
    var r = y(this, Ie, document.createDocumentFragment()), n = Qe();
    r.append(n), y(this, le, A(this, R, cr).call(this, () => ae(() => l(this, ot).call(this, n)))), l(this, We) === 0 && (l(this, ie).before(r), y(this, Ie, null), vt(
      /** @type {Effect} */
      l(this, j),
      () => {
        y(this, j, null);
      }
    ), A(this, R, ur).call(
      this,
      /** @type {Batch} */
      m
    ));
  }));
}, Lr = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), y(this, We, 0), y(this, ut, 0), y(this, le, ae(() => {
      l(this, ot).call(this, l(this, ie));
    })), l(this, We) > 0) {
      var t = y(this, Ie, document.createDocumentFragment());
      nn(l(this, le), t);
      const r = (
        /** @type {(anchor: Node) => void} */
        l(this, se).pending
      );
      y(this, j, ae(() => r(l(this, ie))));
    } else
      A(this, R, ur).call(
        this,
        /** @type {Batch} */
        m
      );
  } catch (r) {
    this.error(r);
  }
}, /**
 * @param {Batch} batch
 */
ur = function(t) {
  this.is_pending = !1, t.transfer_effects(l(this, Yt), l(this, Jt));
}, /**
 * @template T
 * @param {() => T} fn
 */
cr = function(t) {
  var r = E, n = k, i = ce;
  Ce(l(this, J)), de(l(this, J)), Mt(l(this, J).ctx);
  try {
    return pt.ensure(), t();
  } catch (s) {
    return Nn(s), null;
  } finally {
    Ce(r), de(n), Mt(i);
  }
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 * @param {Batch} batch
 */
qr = function(t, r) {
  var n;
  if (!this.has_pending_snippet()) {
    this.parent && A(n = this.parent, R, qr).call(n, t, r);
    return;
  }
  y(this, We, l(this, We) + t), l(this, We) === 0 && (A(this, R, ur).call(this, r), l(this, j) && vt(l(this, j), () => {
    y(this, j, null);
  }), l(this, Ie) && (l(this, ie).before(l(this, Ie)), y(this, Ie, null)));
}, /**
 * @param {unknown} error
 */
Vr = function(t) {
  l(this, le) && (K(l(this, le)), y(this, le, null)), l(this, j) && (K(l(this, j)), y(this, j, null)), l(this, ee) && (K(l(this, ee)), y(this, ee, null));
  var r = l(this, se).onerror;
  let n = l(this, se).failed;
  var i = !1, s = !1;
  const o = () => {
    if (i) {
      Ii();
      return;
    }
    i = !0, s && Ci(), l(this, ee) !== null && vt(l(this, ee), () => {
      y(this, ee, null);
    }), A(this, R, cr).call(this, () => {
      A(this, R, Lr).call(this);
    });
  }, a = (f) => {
    try {
      s = !0, r?.(f, o), s = !1;
    } catch (u) {
      Xe(u, l(this, J) && l(this, J).parent);
    }
    n && y(this, ee, A(this, R, cr).call(this, () => {
      try {
        return ae(() => {
          var u = (
            /** @type {Effect} */
            E
          );
          u.b = this, u.f |= Dr, n(
            l(this, ie),
            () => f,
            () => o
          );
        });
      } catch (u) {
        return Xe(
          u,
          /** @type {Effect} */
          l(this, J).parent
        ), null;
      }
    }));
  };
  yt(() => {
    var f;
    try {
      f = this.transform_error(t);
    } catch (u) {
      Xe(u, l(this, J) && l(this, J).parent);
      return;
    }
    f !== null && typeof f == "object" && typeof /** @type {any} */
    f.then == "function" ? f.then(
      a,
      /** @param {unknown} e */
      (u) => Xe(u, l(this, J) && l(this, J).parent)
    ) : a(f);
  });
};
function Qi(e, t, r, n) {
  const i = Xr;
  var s = e.filter((h) => !h.settled);
  if (r.length === 0 && s.length === 0) {
    n(t.map(i));
    return;
  }
  var o = (
    /** @type {Effect} */
    E
  ), a = $i(), f = s.length === 1 ? s[0].promise : s.length > 1 ? Promise.all(s.map((h) => h.promise)) : null;
  function u(h) {
    a();
    try {
      n(h);
    } catch (v) {
      (o.f & oe) === 0 && Xe(v, o);
    }
    hr();
  }
  if (r.length === 0) {
    f.then(() => u(t.map(i)));
    return;
  }
  var d = Pn();
  function _() {
    Promise.all(r.map((h) => /* @__PURE__ */ es(h))).then((h) => u([...t.map(i), ...h])).catch((h) => Xe(h, o)).finally(() => d());
  }
  f ? f.then(() => {
    a(), _(), hr();
  }) : _();
}
function $i() {
  var e = (
    /** @type {Effect} */
    E
  ), t = k, r = ce, n = (
    /** @type {Batch} */
    m
  );
  return function(s = !0) {
    Ce(e), de(t), Mt(r), s && (e.f & oe) === 0 && (n?.activate(), n?.apply());
  };
}
function hr(e = !0) {
  Ce(null), de(null), Mt(null), e && m?.deactivate();
}
function Pn() {
  var e = (
    /** @type {Effect} */
    E
  ), t = (
    /** @type {Boundary} */
    e.b
  ), r = (
    /** @type {Batch} */
    m
  ), n = t.is_rendered();
  return t.update_pending_count(1, r), r.increment(n, e), (i = !1) => {
    t.update_pending_count(-1, r), r.decrement(n, e, i);
  };
}
// @__NO_SIDE_EFFECTS__
function Xr(e) {
  var t = q | L;
  return E !== null && (E.f |= Ft), {
    ctx: ce,
    deps: null,
    effects: null,
    equals: kn,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      z
    ),
    wv: 0,
    parent: E,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function es(e, t, r) {
  let n = (
    /** @type {Effect | null} */
    E
  );
  n === null && wi();
  var i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), s = gt(
    /** @type {V} */
    z
  ), o = !k, a = /* @__PURE__ */ new Map();
  return gs(() => {
    var f = (
      /** @type {Effect} */
      E
    ), u = wn();
    i = u.promise;
    try {
      Promise.resolve(e()).then(u.resolve, u.reject).finally(hr);
    } catch (v) {
      u.reject(v), hr();
    }
    var d = (
      /** @type {Batch} */
      m
    );
    if (o) {
      if ((f.f & bt) !== 0)
        var _ = Pn();
      if (
        /** @type {Boundary} */
        n.b.is_rendered()
      )
        a.get(d)?.reject(De), a.delete(d);
      else {
        for (const v of a.values())
          v.reject(De);
        a.clear();
      }
      a.set(d, u);
    }
    const h = (v, c = void 0) => {
      if (_) {
        var b = c === De;
        _(b);
      }
      if (!(c === De || (f.f & oe) !== 0)) {
        if (d.activate(), c)
          s.f |= Ze, Rt(s, c);
        else {
          (s.f & Ze) !== 0 && (s.f ^= Ze), Rt(s, v);
          for (const [w, N] of a) {
            if (a.delete(w), w === d) break;
            N.reject(De);
          }
        }
        d.deactivate();
      }
    };
    u.promise.then(h, (v) => h(null, v || "unknown"));
  }), vs(() => {
    for (const f of a.values())
      f.reject(De);
  }), new Promise((f) => {
    function u(d) {
      function _() {
        d === i ? f(s) : u(i);
      }
      d.then(_, _);
    }
    u(i);
  });
}
// @__NO_SIDE_EFFECTS__
function ts(e) {
  const t = /* @__PURE__ */ Xr(e);
  return Zn(t), t;
}
// @__NO_SIDE_EFFECTS__
function rs(e) {
  const t = /* @__PURE__ */ Xr(e);
  return t.equals = En, t;
}
function ns(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var r = 0; r < t.length; r += 1)
      K(
        /** @type {Effect} */
        t[r]
      );
  }
}
function Zr(e) {
  var t, r = E, n = e.parent;
  if (!et && n !== null && (n.f & (oe | H)) !== 0)
    return zi(), e.v;
  Ce(n);
  try {
    e.f &= ~_t, ns(e), t = ti(e);
  } finally {
    Ce(r);
  }
  return t;
}
function zn(e) {
  var t = Zr(e);
  if (!e.equals(t) && (e.wv = $n(), (!m?.is_fork || e.deps === null) && (m !== null ? m.capture(e, t, !0) : e.v = t, e.deps === null))) {
    O(e, D);
    return;
  }
  et || (be !== null ? ($r() || m?.is_fork) && be.set(e, t) : Gr(e));
}
function is(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      (t.teardown || t.ac) && (t.teardown?.(), t.ac?.abort(De), t.teardown = pi, t.ac = null, Bt(t, 0), tn(t));
}
function In(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      t.teardown && Ot(t);
}
let jr = /* @__PURE__ */ new Set();
const dt = /* @__PURE__ */ new Map();
let Ln = !1;
function gt(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: kn,
    rv: 0,
    wv: 0
  };
  return r;
}
// @__NO_SIDE_EFFECTS__
function B(e, t) {
  const r = gt(e);
  return Zn(r), r;
}
// @__NO_SIDE_EFFECTS__
function ss(e, t = !1, r = !0) {
  const n = gt(e);
  return t || (n.equals = En), n;
}
function C(e, t, r = !1) {
  k !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!me || (k.f & Pr) !== 0) && Tn() && (k.f & (q | Ae | jt | Pr)) !== 0 && (ue === null || !At.call(ue, e)) && Ni();
  let n = r ? it(t) : t;
  return Rt(e, n, lr);
}
function Rt(e, t, r = null) {
  if (!e.equals(t)) {
    dt.set(e, et ? t : e.v);
    var n = pt.ensure();
    if (n.capture(e, t), (e.f & q) !== 0) {
      const i = (
        /** @type {Derived} */
        e
      );
      (e.f & L) !== 0 && Zr(i), be === null && Gr(i);
    }
    e.wv = $n(), qn(e, L, r), E !== null && (E.f & D) !== 0 && (E.f & (we | $e)) === 0 && (ne === null ? ws([e]) : ne.push(e)), !n.is_fork && jr.size > 0 && !Ln && ls();
  }
  return t;
}
function ls() {
  Ln = !1;
  for (const e of jr)
    (e.f & D) !== 0 && O(e, Ne), Xt(e) && Ot(e);
  jr.clear();
}
function Vt(e) {
  C(e, e.v + 1);
}
function qn(e, t, r) {
  var n = e.reactions;
  if (n !== null)
    for (var i = n.length, s = 0; s < i; s++) {
      var o = n[s], a = o.f, f = (a & L) === 0;
      if (f && O(o, t), (a & q) !== 0) {
        var u = (
          /** @type {Derived} */
          o
        );
        be?.delete(u), (a & _t) === 0 && (a & fe && (E === null || (E.f & vr) === 0) && (o.f |= _t), qn(u, Ne, r));
      } else if (f) {
        var d = (
          /** @type {Effect} */
          o
        );
        (a & Ae) !== 0 && Fe !== null && Fe.add(d), r !== null ? r.push(d) : Wr(d);
      }
    }
}
function it(e) {
  if (typeof e != "object" || e === null || Cr in e)
    return e;
  const t = _i(e);
  if (t !== vi && t !== hi)
    return e;
  var r = /* @__PURE__ */ new Map(), n = mn(e), i = /* @__PURE__ */ B(0), s = ht, o = (a) => {
    if (ht === s)
      return a();
    var f = k, u = ht;
    de(null), vn(s);
    var d = a();
    return de(f), vn(u), d;
  };
  return n && r.set("length", /* @__PURE__ */ B(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(a, f, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && Ti();
        var d = r.get(f);
        return d === void 0 ? o(() => {
          var _ = /* @__PURE__ */ B(u.value);
          return r.set(f, _), _;
        }) : C(d, u.value, !0), !0;
      },
      deleteProperty(a, f) {
        var u = r.get(f);
        if (u === void 0) {
          if (f in a) {
            const d = o(() => /* @__PURE__ */ B(z));
            r.set(f, d), Vt(i);
          }
        } else
          C(u, z), Vt(i);
        return !0;
      },
      get(a, f, u) {
        if (f === Cr)
          return e;
        var d = r.get(f), _ = f in a;
        if (d === void 0 && (!_ || Lt(a, f)?.writable) && (d = o(() => {
          var v = it(_ ? a[f] : z), c = /* @__PURE__ */ B(v);
          return c;
        }), r.set(f, d)), d !== void 0) {
          var h = p(d);
          return h === z ? void 0 : h;
        }
        return Reflect.get(a, f, u);
      },
      getOwnPropertyDescriptor(a, f) {
        var u = Reflect.getOwnPropertyDescriptor(a, f);
        if (u && "value" in u) {
          var d = r.get(f);
          d && (u.value = p(d));
        } else if (u === void 0) {
          var _ = r.get(f), h = _?.v;
          if (_ !== void 0 && h !== z)
            return {
              enumerable: !0,
              configurable: !0,
              value: h,
              writable: !0
            };
        }
        return u;
      },
      has(a, f) {
        if (f === Cr)
          return !0;
        var u = r.get(f), d = u !== void 0 && u.v !== z || Reflect.has(a, f);
        if (u !== void 0 || E !== null && (!d || Lt(a, f)?.writable)) {
          u === void 0 && (u = o(() => {
            var h = d ? it(a[f]) : z, v = /* @__PURE__ */ B(h);
            return v;
          }), r.set(f, u));
          var _ = p(u);
          if (_ === z)
            return !1;
        }
        return d;
      },
      set(a, f, u, d) {
        var _ = r.get(f), h = f in a;
        if (n && f === "length")
          for (var v = u; v < /** @type {Source<number>} */
          _.v; v += 1) {
            var c = r.get(v + "");
            c !== void 0 ? C(c, z) : v in a && (c = o(() => /* @__PURE__ */ B(z)), r.set(v + "", c));
          }
        if (_ === void 0)
          (!h || Lt(a, f)?.writable) && (_ = o(() => /* @__PURE__ */ B(void 0)), C(_, it(u)), r.set(f, _));
        else {
          h = _.v !== z;
          var b = o(() => it(u));
          C(_, b);
        }
        var w = Reflect.getOwnPropertyDescriptor(a, f);
        if (w?.set && w.set.call(d, u), !h) {
          if (n && typeof f == "string") {
            var N = (
              /** @type {Source<number>} */
              r.get("length")
            ), S = Number(f);
            Number.isInteger(S) && S >= N.v && C(N, S + 1);
          }
          Vt(i);
        }
        return !0;
      },
      ownKeys(a) {
        p(i);
        var f = Reflect.ownKeys(a).filter((_) => {
          var h = r.get(_);
          return h === void 0 || h.v !== z;
        });
        for (var [u, d] of r)
          d.v !== z && !(u in a) && f.push(u);
        return f;
      },
      setPrototypeOf() {
        Ai();
      }
    }
  );
}
var un, Vn, jn, Bn;
function as() {
  if (un === void 0) {
    un = window, Vn = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, r = Text.prototype;
    jn = Lt(t, "firstChild").get, Bn = Lt(t, "nextSibling").get, ln(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), ln(r) && (r.__t = void 0);
  }
}
function Qe(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function _r(e) {
  return (
    /** @type {TemplateNode | null} */
    jn.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function Wt(e) {
  return (
    /** @type {TemplateNode | null} */
    Bn.call(e)
  );
}
function M(e, t) {
  return /* @__PURE__ */ _r(e);
}
function Rr(e, t = !1) {
  {
    var r = /* @__PURE__ */ _r(e);
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ Wt(r) : r;
  }
}
function P(e, t = 1, r = !1) {
  let n = e;
  for (; t--; )
    n = /** @type {TemplateNode} */
    /* @__PURE__ */ Wt(n);
  return n;
}
function fs(e) {
  e.textContent = "";
}
function Hn() {
  return !1;
}
function Un(e, t, r) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElementNS(Pi, e, void 0)
  );
}
let cn = !1;
function os() {
  cn || (cn = !0, document.addEventListener(
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
  var t = k, r = E;
  de(null), Ce(null);
  try {
    return e();
  } finally {
    de(t), Ce(r);
  }
}
function us(e, t, r, n = r) {
  e.addEventListener(t, () => Qr(r));
  const i = e.__on_r;
  i ? e.__on_r = () => {
    i(), n(!0);
  } : e.__on_r = () => n(!0), os();
}
function cs(e) {
  E === null && (k === null && xi(), Ei()), et && ki();
}
function ds(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function Ve(e, t) {
  var r = E;
  r !== null && (r.f & H) !== 0 && (e |= H);
  var n = {
    ctx: ce,
    deps: null,
    nodes: null,
    f: e | L | fe,
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
  m?.register_created_effect(n);
  var i = n;
  if ((e & Nt) !== 0)
    wt !== null ? wt.push(n) : pt.ensure().schedule(n);
  else if (t !== null) {
    try {
      Ot(n);
    } catch (o) {
      throw K(n), o;
    }
    i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && // either `null`, or a singular child
    (i.f & Ft) === 0 && (i = i.first, (e & Ae) !== 0 && (e & Ct) !== 0 && i !== null && (i.f |= Ct));
  }
  if (i !== null && (i.parent = r, r !== null && ds(i, r), k !== null && (k.f & q) !== 0 && (e & $e) === 0)) {
    var s = (
      /** @type {Derived} */
      k
    );
    (s.effects ?? (s.effects = [])).push(i);
  }
  return n;
}
function $r() {
  return k !== null && !me;
}
function vs(e) {
  const t = Ve(wr, null);
  return O(t, D), t.teardown = e, t;
}
function hs(e) {
  cs();
  var t = (
    /** @type {Effect} */
    E.f
  ), r = !k && (t & we) !== 0 && (t & bt) === 0;
  if (r) {
    var n = (
      /** @type {ComponentContext} */
      ce
    );
    (n.e ?? (n.e = [])).push(e);
  } else
    return Yn(e);
}
function Yn(e) {
  return Ve(Nt | mi, e);
}
function _s(e) {
  pt.ensure();
  const t = Ve($e | Ft, e);
  return (r = {}) => new Promise((n) => {
    r.outro ? vt(t, () => {
      K(t), n(void 0);
    }) : (K(t), n(void 0));
  });
}
function ps(e) {
  return Ve(Nt, e);
}
function gs(e) {
  return Ve(jt | Ft, e);
}
function Jn(e, t = 0) {
  return Ve(wr | t, e);
}
function Ee(e, t = [], r = [], n = []) {
  Qi(n, t, r, (i) => {
    Ve(wr, () => e(...i.map(p)));
  });
}
function en(e, t = 0) {
  var r = Ve(Ae | t, e);
  return r;
}
function ae(e) {
  return Ve(we | Ft, e);
}
function Gn(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = et, n = k;
    dn(!0), de(null);
    try {
      t.call(null);
    } finally {
      dn(r), de(n);
    }
  }
}
function tn(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    const i = r.ac;
    i !== null && Qr(() => {
      i.abort(De);
    });
    var n = r.next;
    (r.f & $e) !== 0 ? r.parent = null : K(r, t), r = n;
  }
}
function bs(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & we) === 0 && K(t), t = r;
  }
}
function K(e, t = !0) {
  var r = !1;
  (t || (e.f & bi) !== 0) && e.nodes !== null && e.nodes.end !== null && (ms(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), r = !0), O(e, an), tn(e, t && !r), Bt(e, 0);
  var n = e.nodes && e.nodes.t;
  if (n !== null)
    for (const s of n)
      s.stop();
  Gn(e), e.f ^= an, e.f |= oe;
  var i = e.parent;
  i !== null && i.first !== null && Kn(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function ms(e, t) {
  for (; e !== null; ) {
    var r = e === t ? null : /* @__PURE__ */ Wt(e);
    e.remove(), e = r;
  }
}
function Kn(e) {
  var t = e.parent, r = e.prev, n = e.next;
  r !== null && (r.next = n), n !== null && (n.prev = r), t !== null && (t.first === e && (t.first = n), t.last === e && (t.last = r));
}
function vt(e, t, r = !0) {
  var n = [];
  Wn(e, n, !0);
  var i = () => {
    r && K(e), t && t();
  }, s = n.length;
  if (s > 0) {
    var o = () => --s || i();
    for (var a of n)
      a.out(o);
  } else
    i();
}
function Wn(e, t, r) {
  if ((e.f & H) === 0) {
    e.f ^= H;
    var n = e.nodes && e.nodes.t;
    if (n !== null)
      for (const a of n)
        (a.is_global || r) && t.push(a);
    for (var i = e.first; i !== null; ) {
      var s = i.next;
      if ((i.f & $e) === 0) {
        var o = (i.f & Ct) !== 0 || // If this is a branch effect without a block effect parent,
        // it means the parent block effect was pruned. In that case,
        // transparency information was transferred to the branch effect.
        (i.f & we) !== 0 && (e.f & Ae) !== 0;
        Wn(i, t, o ? r : !1);
      }
      i = s;
    }
  }
}
function rn(e) {
  Xn(e, !0);
}
function Xn(e, t) {
  if ((e.f & H) !== 0) {
    e.f ^= H, (e.f & D) === 0 && (O(e, L), pt.ensure().schedule(e));
    for (var r = e.first; r !== null; ) {
      var n = r.next, i = (r.f & Ct) !== 0 || (r.f & we) !== 0;
      Xn(r, i ? t : !1), r = n;
    }
    var s = e.nodes && e.nodes.t;
    if (s !== null)
      for (const o of s)
        (o.is_global || t) && o.in();
  }
}
function nn(e, t) {
  if (e.nodes)
    for (var r = e.nodes.start, n = e.nodes.end; r !== null; ) {
      var i = r === n ? null : /* @__PURE__ */ Wt(r);
      t.append(r), r = i;
    }
}
let dr = !1, et = !1;
function dn(e) {
  et = e;
}
let k = null, me = !1;
function de(e) {
  k = e;
}
let E = null;
function Ce(e) {
  E = e;
}
let ue = null;
function Zn(e) {
  k !== null && (ue === null ? ue = [e] : ue.push(e));
}
let G = null, Q = 0, ne = null;
function ws(e) {
  ne = e;
}
let Qn = 1, st = 0, ht = st;
function vn(e) {
  ht = e;
}
function $n() {
  return ++Qn;
}
function Xt(e) {
  var t = e.f;
  if ((t & L) !== 0)
    return !0;
  if (t & q && (e.f &= ~_t), (t & Ne) !== 0) {
    for (var r = (
      /** @type {Value[]} */
      e.deps
    ), n = r.length, i = 0; i < n; i++) {
      var s = r[i];
      if (Xt(
        /** @type {Derived} */
        s
      ) && zn(
        /** @type {Derived} */
        s
      ), s.wv > e.wv)
        return !0;
    }
    (t & fe) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    be === null && O(e, D);
  }
  return !1;
}
function ei(e, t, r = !0) {
  var n = e.reactions;
  if (n !== null && !(ue !== null && At.call(ue, e)))
    for (var i = 0; i < n.length; i++) {
      var s = n[i];
      (s.f & q) !== 0 ? ei(
        /** @type {Derived} */
        s,
        t,
        !1
      ) : t === s && (r ? O(s, L) : (s.f & D) !== 0 && O(s, Ne), Wr(
        /** @type {Effect} */
        s
      ));
    }
}
function ti(e) {
  var b;
  var t = G, r = Q, n = ne, i = k, s = ue, o = ce, a = me, f = ht, u = e.f;
  G = /** @type {null | Value[]} */
  null, Q = 0, ne = null, k = (u & (we | $e)) === 0 ? e : null, ue = null, Mt(e.ctx), me = !1, ht = ++st, e.ac !== null && (Qr(() => {
    e.ac.abort(De);
  }), e.ac = null);
  try {
    e.f |= vr;
    var d = (
      /** @type {Function} */
      e.fn
    ), _ = d();
    e.f |= bt;
    var h = e.deps, v = m?.is_fork;
    if (G !== null) {
      var c;
      if (v || Bt(e, Q), h !== null && Q > 0)
        for (h.length = Q + G.length, c = 0; c < G.length; c++)
          h[Q + c] = G[c];
      else
        e.deps = h = G;
      if ($r() && (e.f & fe) !== 0)
        for (c = Q; c < h.length; c++)
          ((b = h[c]).reactions ?? (b.reactions = [])).push(e);
    } else !v && h !== null && Q < h.length && (Bt(e, Q), h.length = Q);
    if (Tn() && ne !== null && !me && h !== null && (e.f & (q | Ne | L)) === 0)
      for (c = 0; c < /** @type {Source[]} */
      ne.length; c++)
        ei(
          ne[c],
          /** @type {Effect} */
          e
        );
    if (i !== null && i !== e) {
      if (st++, i.deps !== null)
        for (let w = 0; w < r; w += 1)
          i.deps[w].rv = st;
      if (t !== null)
        for (const w of t)
          w.rv = st;
      ne !== null && (n === null ? n = ne : n.push(.../** @type {Source[]} */
      ne));
    }
    return (e.f & Ze) !== 0 && (e.f ^= Ze), _;
  } catch (w) {
    return Nn(w);
  } finally {
    e.f ^= vr, G = t, Q = r, ne = n, k = i, ue = s, Mt(o), me = a, ht = f;
  }
}
function ys(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var n = ci.call(r, e);
    if (n !== -1) {
      var i = r.length - 1;
      i === 0 ? r = t.reactions = null : (r[n] = r[i], r.pop());
    }
  }
  if (r === null && (t.f & q) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (G === null || !At.call(G, t))) {
    var s = (
      /** @type {Derived} */
      t
    );
    (s.f & fe) !== 0 && (s.f ^= fe, s.f &= ~_t), s.v !== z && Gr(s), is(s), Bt(s, 0);
  }
}
function Bt(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var n = t; n < r.length; n++)
      ys(e, r[n]);
}
function Ot(e) {
  var t = e.f;
  if ((t & oe) === 0) {
    O(e, D);
    var r = E, n = dr;
    E = e, dr = !0;
    try {
      (t & (Ae | yn)) !== 0 ? bs(e) : tn(e), Gn(e);
      var i = ti(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = Qn;
      var s;
    } finally {
      dr = n, E = r;
    }
  }
}
async function ks() {
  await Promise.resolve(), Hi();
}
function p(e) {
  var t = e.f, r = (t & q) !== 0;
  if (k !== null && !me) {
    var n = E !== null && (E.f & oe) !== 0;
    if (!n && (ue === null || !At.call(ue, e))) {
      var i = k.deps;
      if ((k.f & vr) !== 0)
        e.rv < st && (e.rv = st, G === null && i !== null && i[Q] === e ? Q++ : G === null ? G = [e] : G.push(e));
      else {
        (k.deps ?? (k.deps = [])).push(e);
        var s = e.reactions;
        s === null ? e.reactions = [k] : At.call(s, k) || s.push(k);
      }
    }
  }
  if (et && dt.has(e))
    return dt.get(e);
  if (r) {
    var o = (
      /** @type {Derived} */
      e
    );
    if (et) {
      var a = o.v;
      return ((o.f & D) === 0 && o.reactions !== null || ni(o)) && (a = Zr(o)), dt.set(o, a), a;
    }
    var f = (o.f & fe) === 0 && !me && k !== null && (dr || (k.f & fe) !== 0), u = (o.f & bt) === 0;
    Xt(o) && (f && (o.f |= fe), zn(o)), f && !u && (In(o), ri(o));
  }
  if (be?.has(e))
    return be.get(e);
  if ((e.f & Ze) !== 0)
    throw e.v;
  return e.v;
}
function ri(e) {
  if (e.f |= fe, e.deps !== null)
    for (const t of e.deps)
      (t.reactions ?? (t.reactions = [])).push(e), (t.f & q) !== 0 && (t.f & fe) === 0 && (In(
        /** @type {Derived} */
        t
      ), ri(
        /** @type {Derived} */
        t
      ));
}
function ni(e) {
  if (e.v === z) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (dt.has(t) || (t.f & q) !== 0 && ni(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function ii(e) {
  var t = me;
  try {
    return me = !0, e();
  } finally {
    me = t;
  }
}
const Es = ["touchstart", "touchmove"];
function xs(e) {
  return Es.includes(e);
}
const lt = Symbol("events"), si = /* @__PURE__ */ new Set(), Br = /* @__PURE__ */ new Set();
function Je(e, t, r) {
  (t[lt] ?? (t[lt] = {}))[e] = r;
}
function Ss(e) {
  for (var t = 0; t < e.length; t++)
    si.add(e[t]);
  for (var r of Br)
    r(e);
}
let hn = null;
function _n(e) {
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), n = e.type, i = e.composedPath?.() || [], s = (
    /** @type {null | Element} */
    i[0] || e.target
  );
  hn = e;
  var o = 0, a = hn === e && e[lt];
  if (a) {
    var f = i.indexOf(a);
    if (f !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e[lt] = t;
      return;
    }
    var u = i.indexOf(t);
    if (u === -1)
      return;
    f <= u && (o = f);
  }
  if (s = /** @type {Element} */
  i[o] || e.target, s !== t) {
    di(e, "currentTarget", {
      configurable: !0,
      get() {
        return s || r;
      }
    });
    var d = k, _ = E;
    de(null), Ce(null);
    try {
      for (var h, v = []; s !== null; ) {
        var c = s.assignedSlot || s.parentNode || /** @type {any} */
        s.host || null;
        try {
          var b = s[lt]?.[n];
          b != null && (!/** @type {any} */
          s.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === s) && b.call(s, e);
        } catch (w) {
          h ? v.push(w) : h = w;
        }
        if (e.cancelBubble || c === t || c === null)
          break;
        s = c;
      }
      if (h) {
        for (let w of v)
          queueMicrotask(() => {
            throw w;
          });
        throw h;
      }
    } finally {
      e[lt] = t, delete e.currentTarget, de(d), Ce(_);
    }
  }
}
const Ts = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (e) => e
  })
);
function As(e) {
  return (
    /** @type {string} */
    Ts?.createHTML(e) ?? e
  );
}
function Ns(e) {
  var t = Un("template");
  return t.innerHTML = As(e.replaceAll("<!>", "<!---->")), t.content;
}
function Hr(e, t) {
  var r = (
    /** @type {Effect} */
    E
  );
  r.nodes === null && (r.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function W(e, t) {
  var r = (t & Fi) !== 0, n = (t & Di) !== 0, i, s = !e.startsWith("<!>");
  return () => {
    i === void 0 && (i = Ns(s ? e : "<!>" + e), r || (i = /** @type {TemplateNode} */
    /* @__PURE__ */ _r(i)));
    var o = (
      /** @type {TemplateNode} */
      n || Vn ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (r) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ _r(o)
      ), f = (
        /** @type {TemplateNode} */
        o.lastChild
      );
      Hr(a, f);
    } else
      Hr(o, o);
    return o;
  };
}
function Cs() {
  var e = document.createDocumentFragment(), t = document.createComment(""), r = Qe();
  return e.append(t, r), Hr(t, r), e;
}
function V(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function pe(e, t) {
  var r = t == null ? "" : typeof t == "object" ? `${t}` : t;
  r !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = r, e.nodeValue = `${r}`);
}
function Ms(e, t) {
  return Rs(e, t);
}
const ir = /* @__PURE__ */ new Map();
function Rs(e, { target: t, anchor: r, props: n = {}, events: i, context: s, intro: o = !0, transformError: a }) {
  as();
  var f = void 0, u = _s(() => {
    var d = r ?? t.appendChild(Qe());
    Gi(
      /** @type {TemplateNode} */
      d,
      {
        pending: () => {
        }
      },
      (v) => {
        xn({});
        var c = (
          /** @type {ComponentContext} */
          ce
        );
        s && (c.c = s), i && (n.$$events = i), f = e(v, n) || {}, Sn();
      },
      a
    );
    var _ = /* @__PURE__ */ new Set(), h = (v) => {
      for (var c = 0; c < v.length; c++) {
        var b = v[c];
        if (!_.has(b)) {
          _.add(b);
          var w = xs(b);
          for (const U of [t, document]) {
            var N = ir.get(U);
            N === void 0 && (N = /* @__PURE__ */ new Map(), ir.set(U, N));
            var S = N.get(b);
            S === void 0 ? (U.addEventListener(b, _n, { passive: w }), N.set(b, 1)) : N.set(b, S + 1);
          }
        }
      }
    };
    return h(mr(si)), Br.add(h), () => {
      for (var v of _)
        for (const w of [t, document]) {
          var c = (
            /** @type {Map<string, number>} */
            ir.get(w)
          ), b = (
            /** @type {number} */
            c.get(v)
          );
          --b == 0 ? (w.removeEventListener(v, _n), c.delete(v), c.size === 0 && ir.delete(w)) : c.set(v, b);
        }
      Br.delete(h), d !== r && d.parentNode?.removeChild(d);
    };
  });
  return Ur.set(f, u), f;
}
let Ur = /* @__PURE__ */ new WeakMap();
function Os(e, t) {
  const r = Ur.get(e);
  return r ? (Ur.delete(e), r(t)) : Promise.resolve();
}
var ge, Te, te, ct, Gt, Kt, br;
class Fs {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, r = !0) {
    /** @type {TemplateNode} */
    _e(this, "anchor");
    /** @type {Map<Batch, Key>} */
    g(this, ge, /* @__PURE__ */ new Map());
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
    g(this, ct, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    g(this, Gt, !0);
    /**
     * @param {Batch} batch
     */
    g(this, Kt, (t) => {
      if (l(this, ge).has(t)) {
        var r = (
          /** @type {Key} */
          l(this, ge).get(t)
        ), n = l(this, Te).get(r);
        if (n)
          rn(n), l(this, ct).delete(r);
        else {
          var i = l(this, te).get(r);
          i && (l(this, Te).set(r, i.effect), l(this, te).delete(r), i.fragment.lastChild.remove(), this.anchor.before(i.fragment), n = i.effect);
        }
        for (const [s, o] of l(this, ge)) {
          if (l(this, ge).delete(s), s === t)
            break;
          const a = l(this, te).get(o);
          a && (K(a.effect), l(this, te).delete(o));
        }
        for (const [s, o] of l(this, Te)) {
          if (s === r || l(this, ct).has(s)) continue;
          const a = () => {
            if (Array.from(l(this, ge).values()).includes(s)) {
              var u = document.createDocumentFragment();
              nn(o, u), u.append(Qe()), l(this, te).set(s, { effect: o, fragment: u });
            } else
              K(o);
            l(this, ct).delete(s), l(this, Te).delete(s);
          };
          l(this, Gt) || !n ? (l(this, ct).add(s), vt(o, a, !1)) : a();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    g(this, br, (t) => {
      l(this, ge).delete(t);
      const r = Array.from(l(this, ge).values());
      for (const [n, i] of l(this, te))
        r.includes(n) || (K(i.effect), l(this, te).delete(n));
    });
    this.anchor = t, y(this, Gt, r);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, r) {
    var n = (
      /** @type {Batch} */
      m
    ), i = Hn();
    if (r && !l(this, Te).has(t) && !l(this, te).has(t))
      if (i) {
        var s = document.createDocumentFragment(), o = Qe();
        s.append(o), l(this, te).set(t, {
          effect: ae(() => r(o)),
          fragment: s
        });
      } else
        l(this, Te).set(
          t,
          ae(() => r(this.anchor))
        );
    if (l(this, ge).set(n, t), i) {
      for (const [a, f] of l(this, Te))
        a === t ? n.unskip_effect(f) : n.skip_effect(f);
      for (const [a, f] of l(this, te))
        a === t ? n.unskip_effect(f.effect) : n.skip_effect(f.effect);
      n.oncommit(l(this, Kt)), n.ondiscard(l(this, br));
    } else
      l(this, Kt).call(this, n);
  }
}
ge = new WeakMap(), Te = new WeakMap(), te = new WeakMap(), ct = new WeakMap(), Gt = new WeakMap(), Kt = new WeakMap(), br = new WeakMap();
function Oe(e, t, r = !1) {
  var n = new Fs(e), i = r ? Ct : 0;
  function s(o, a) {
    n.ensure(o, a);
  }
  en(() => {
    var o = !1;
    t((a, f = 0) => {
      o = !0, s(f, a);
    }), o || s(-1, null);
  }, i);
}
function Ds(e, t) {
  return t;
}
function Ps(e, t, r) {
  for (var n = [], i = t.length, s, o = t.length, a = 0; a < i; a++) {
    let _ = t[a];
    vt(
      _,
      () => {
        if (s) {
          if (s.pending.delete(_), s.done.add(_), s.pending.size === 0) {
            var h = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            Yr(e, mr(s.done)), h.delete(s), h.size === 0 && (e.outrogroups = null);
          }
        } else
          o -= 1;
      },
      !1
    );
  }
  if (o === 0) {
    var f = n.length === 0 && r !== null;
    if (f) {
      var u = (
        /** @type {Element} */
        r
      ), d = (
        /** @type {Element} */
        u.parentNode
      );
      fs(d), d.append(u), e.items.clear();
    }
    Yr(e, t, !f);
  } else
    s = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ?? (e.outrogroups = /* @__PURE__ */ new Set())).add(s);
}
function Yr(e, t, r = !0) {
  var n;
  if (e.pending.size > 0) {
    n = /* @__PURE__ */ new Set();
    for (const o of e.pending.values())
      for (const a of o)
        n.add(
          /** @type {EachItem} */
          e.items.get(a).e
        );
  }
  for (var i = 0; i < t.length; i++) {
    var s = t[i];
    if (n?.has(s)) {
      s.f |= qe;
      const o = document.createDocumentFragment();
      nn(s, o);
    } else
      K(t[i], r);
  }
}
var pn;
function gn(e, t, r, n, i, s = null) {
  var o = e, a = /* @__PURE__ */ new Map();
  {
    var f = (
      /** @type {Element} */
      e
    );
    o = f.appendChild(Qe());
  }
  var u = null, d = /* @__PURE__ */ rs(() => {
    var S = r();
    return mn(S) ? S : S == null ? [] : mr(S);
  }), _, h = /* @__PURE__ */ new Map(), v = !0;
  function c(S) {
    (N.effect.f & oe) === 0 && (N.pending.delete(S), N.fallback = u, zs(N, _, o, t, n), u !== null && (_.length === 0 ? (u.f & qe) === 0 ? rn(u) : (u.f ^= qe, It(u, null, o)) : vt(u, () => {
      u = null;
    })));
  }
  function b(S) {
    N.pending.delete(S);
  }
  var w = en(() => {
    _ = /** @type {V[]} */
    p(d);
    for (var S = _.length, U = /* @__PURE__ */ new Set(), X = (
      /** @type {Batch} */
      m
    ), ye = Hn(), ke = 0; ke < S; ke += 1) {
      var je = _[ke], Y = n(je, ke), ve = v ? null : a.get(Y);
      ve ? (ve.v && Rt(ve.v, je), ve.i && Rt(ve.i, ke), ye && X.unskip_effect(ve.e)) : (ve = Is(
        a,
        v ? o : pn ?? (pn = Qe()),
        je,
        Y,
        ke,
        i,
        t,
        r
      ), v || (ve.e.f |= qe), a.set(Y, ve)), U.add(Y);
    }
    if (S === 0 && s && !u && (v ? u = ae(() => s(o)) : (u = ae(() => s(pn ?? (pn = Qe()))), u.f |= qe)), S > U.size && yi(), !v)
      if (h.set(X, U), ye) {
        for (const [yr, kr] of a)
          U.has(yr) || X.skip_effect(kr.e);
        X.oncommit(c), X.ondiscard(b);
      } else
        c(X);
    p(d);
  }), N = { effect: w, items: a, pending: h, outrogroups: null, fallback: u };
  v = !1;
}
function zt(e) {
  for (; e !== null && (e.f & we) === 0; )
    e = e.next;
  return e;
}
function zs(e, t, r, n, i) {
  var s = t.length, o = e.items, a = zt(e.effect.first), f, u = null, d = [], _ = [], h, v, c, b;
  for (b = 0; b < s; b += 1) {
    if (h = t[b], v = i(h, b), c = /** @type {EachItem} */
    o.get(v).e, e.outrogroups !== null)
      for (const Y of e.outrogroups)
        Y.pending.delete(c), Y.done.delete(c);
    if ((c.f & H) !== 0 && rn(c), (c.f & qe) !== 0)
      if (c.f ^= qe, c === a)
        It(c, null, r);
      else {
        var w = u ? u.next : a;
        c === e.effect.last && (e.effect.last = c.prev), c.prev && (c.prev.next = c.next), c.next && (c.next.prev = c.prev), Ge(e, u, c), Ge(e, c, w), It(c, w, r), u = c, d = [], _ = [], a = zt(u.next);
        continue;
      }
    if (c !== a) {
      if (f !== void 0 && f.has(c)) {
        if (d.length < _.length) {
          var N = _[0], S;
          u = N.prev;
          var U = d[0], X = d[d.length - 1];
          for (S = 0; S < d.length; S += 1)
            It(d[S], N, r);
          for (S = 0; S < _.length; S += 1)
            f.delete(_[S]);
          Ge(e, U.prev, X.next), Ge(e, u, U), Ge(e, X, N), a = N, u = X, b -= 1, d = [], _ = [];
        } else
          f.delete(c), It(c, a, r), Ge(e, c.prev, c.next), Ge(e, c, u === null ? e.effect.first : u.next), Ge(e, u, c), u = c;
        continue;
      }
      for (d = [], _ = []; a !== null && a !== c; )
        (f ?? (f = /* @__PURE__ */ new Set())).add(a), _.push(a), a = zt(a.next);
      if (a === null)
        continue;
    }
    (c.f & qe) === 0 && d.push(c), u = c, a = zt(c.next);
  }
  if (e.outrogroups !== null) {
    for (const Y of e.outrogroups)
      Y.pending.size === 0 && (Yr(e, mr(Y.done)), e.outrogroups?.delete(Y));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (a !== null || f !== void 0) {
    var ye = [];
    if (f !== void 0)
      for (c of f)
        (c.f & H) === 0 && ye.push(c);
    for (; a !== null; )
      (a.f & H) === 0 && a !== e.fallback && ye.push(a), a = zt(a.next);
    var ke = ye.length;
    if (ke > 0) {
      var je = s === 0 ? r : null;
      Ps(e, ye, je);
    }
  }
}
function Is(e, t, r, n, i, s, o, a) {
  var f = (o & Mi) !== 0 ? (o & Oi) === 0 ? /* @__PURE__ */ ss(r, !1, !1) : gt(r) : null, u = (o & Ri) !== 0 ? gt(i) : null;
  return {
    v: f,
    i: u,
    e: ae(() => (s(t, f ?? r, u ?? i, a), () => {
      e.delete(n);
    }))
  };
}
function It(e, t, r) {
  if (e.nodes)
    for (var n = e.nodes.start, i = e.nodes.end, s = t && (t.f & qe) === 0 ? (
      /** @type {EffectNodes} */
      t.nodes.start
    ) : r; n !== null; ) {
      var o = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Wt(n)
      );
      if (s.before(n), n === i)
        return;
      n = o;
    }
}
function Ge(e, t, r) {
  t === null ? e.effect.first = r : t.next = r, r === null ? e.effect.last = t : r.prev = t;
}
function Ls(e, t) {
  ps(() => {
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
      const i = Un("style");
      i.id = t.hash, i.textContent = t.code, n.appendChild(i);
    }
  });
}
function qs(e, t, r = t) {
  var n = /* @__PURE__ */ new WeakSet();
  us(e, "input", async (i) => {
    var s = i ? e.defaultValue : e.value;
    if (s = Or(e) ? Fr(s) : s, r(s), m !== null && n.add(m), await ks(), s !== (s = t())) {
      var o = e.selectionStart, a = e.selectionEnd, f = e.value.length;
      if (e.value = s ?? "", a !== null) {
        var u = e.value.length;
        o === a && a === f && u > f ? (e.selectionStart = u, e.selectionEnd = u) : (e.selectionStart = o, e.selectionEnd = Math.min(a, u));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  ii(t) == null && e.value && (r(Or(e) ? Fr(e.value) : e.value), m !== null && n.add(m)), Jn(() => {
    var i = t();
    if (e === document.activeElement) {
      var s = (
        /** @type {Batch} */
        m
      );
      if (n.has(s))
        return;
    }
    Or(e) && i === Fr(e.value) || e.type === "date" && !i && !e.value || i !== e.value && (e.value = i ?? "");
  });
}
function Or(e) {
  var t = e.type;
  return t === "number" || t === "range";
}
function Fr(e) {
  return e === "" ? null : +e;
}
function sr(e, t, r, n) {
  var i = (
    /** @type {V} */
    n
  ), s = !0, o = () => (s && (s = !1, i = /** @type {V} */
  n), i), a;
  a = /** @type {V} */
  e[t], a === void 0 && n !== void 0 && (a = o());
  var f;
  return f = () => {
    var u = (
      /** @type {V} */
      e[t]
    );
    return u === void 0 ? o() : (s = !0, u);
  }, f;
}
const Vs = "5";
var bn;
typeof window < "u" && ((bn = window.__svelte ?? (window.__svelte = {})).v ?? (bn.v = /* @__PURE__ */ new Set())).add(Vs);
var js = /* @__PURE__ */ W('<div class="error svelte-11d5b98"> </div>'), Bs = /* @__PURE__ */ W('<span class="tag svelte-11d5b98"> </span>'), Hs = /* @__PURE__ */ W('<span class="tag outline svelte-11d5b98"> </span>'), Us = /* @__PURE__ */ W('<div class="meta svelte-11d5b98"> </div>'), Ys = /* @__PURE__ */ W('<div class="log-entry svelte-11d5b98"><span class="log-time svelte-11d5b98"> </span> <span class="log-msg svelte-11d5b98"> </span></div>'), Js = /* @__PURE__ */ W('<div class="card svelte-11d5b98"><h3 class="svelte-11d5b98">Logs</h3> <div class="log-list svelte-11d5b98"></div></div>'), Gs = /* @__PURE__ */ W('<button class="back svelte-11d5b98">← Back to tasks</button> <div class="card svelte-11d5b98"><h3 class="svelte-11d5b98"> </h3> <div class="meta-row svelte-11d5b98"><!> <!></div> <div class="actions svelte-11d5b98"><button class="btn svelte-11d5b98">Run Now</button> <button class="btn outline svelte-11d5b98">Toggle Schedule</button> <button class="btn danger svelte-11d5b98">Delete</button></div> <!></div> <!>', 1), Ks = /* @__PURE__ */ W('<div class="empty svelte-11d5b98">Loading tasks…</div>'), Ws = /* @__PURE__ */ W('<div class="empty svelte-11d5b98"> </div>'), Xs = /* @__PURE__ */ W('<span class="tag small svelte-11d5b98"> </span>'), Zs = /* @__PURE__ */ W('<div class="card row-card svelte-11d5b98"><button class="card-link svelte-11d5b98"><span class="task-name svelte-11d5b98"> </span> <!></button> <div class="row-actions svelte-11d5b98"><button class="btn-sm svelte-11d5b98" title="Run now">▶</button> <button class="btn-sm svelte-11d5b98" title="Toggle schedule">⏯</button></div></div>'), Qs = /* @__PURE__ */ W('<div class="list svelte-11d5b98"></div>'), $s = /* @__PURE__ */ W('<div class="search-row svelte-11d5b98"><input type="text" placeholder="Search tasks…" class="svelte-11d5b98"/></div> <!>', 1), el = /* @__PURE__ */ W('<div class="rt-tm svelte-11d5b98"><div class="header svelte-11d5b98"><h2 class="svelte-11d5b98">Task Monitor</h2> <span class="badge svelte-11d5b98"> </span> <button class="refresh svelte-11d5b98">↻</button></div> <!> <!></div>');
const tl = {
  hash: "svelte-11d5b98",
  code: ".rt-tm.svelte-11d5b98 {font-family:system-ui, -apple-system, sans-serif;max-width:720px;margin:0 auto;padding:1.5rem;}.header.svelte-11d5b98 {display:flex;align-items:center;gap:0.75rem;margin-bottom:1rem;flex-wrap:wrap;}.header.svelte-11d5b98 h2:where(.svelte-11d5b98) {margin:0;font-size:1.5rem;}.badge.svelte-11d5b98 {background:#e0e7ff;color:#3730a3;padding:0.15rem 0.5rem;border-radius:9999px;font-size:0.75rem;}.refresh.svelte-11d5b98 {margin-left:auto;padding:0.25rem 0.5rem;background:#f3f4f6;border:1px solid #d1d5db;border-radius:0.375rem;cursor:pointer;}.error.svelte-11d5b98 {background:#fef2f2;color:#991b1b;border:1px solid #fecaca;padding:0.75rem;border-radius:0.5rem;margin-bottom:1rem;font-size:0.85rem;}.empty.svelte-11d5b98 {color:#6b7280;text-align:center;padding:2rem;}.search-row.svelte-11d5b98 {margin-bottom:1rem;}.search-row.svelte-11d5b98 input:where(.svelte-11d5b98) {width:100%;padding:0.5rem 0.75rem;border:1px solid #d1d5db;border-radius:0.5rem;font-size:0.875rem;box-sizing:border-box;}.list.svelte-11d5b98 {display:flex;flex-direction:column;gap:0.5rem;}.card.svelte-11d5b98 {background:#fff;border:1px solid #e5e7eb;border-radius:0.75rem;padding:1rem 1.25rem;margin-bottom:0.75rem;}.row-card.svelte-11d5b98 {display:flex;align-items:center;justify-content:space-between;}.card-link.svelte-11d5b98 {background:none;border:none;cursor:pointer;display:flex;align-items:center;gap:0.5rem;padding:0;font-family:inherit;}.card-link.svelte-11d5b98:hover .task-name:where(.svelte-11d5b98) {color:#4f46e5;}.task-name.svelte-11d5b98 {font-weight:500;font-size:0.875rem;}.tag.svelte-11d5b98 {background:#f3f4f6;color:#374151;padding:0.15rem 0.5rem;border-radius:0.375rem;font-size:0.7rem;}.tag.small.svelte-11d5b98 {font-size:0.65rem;}.tag.outline.svelte-11d5b98 {background:transparent;border:1px solid #d1d5db;}.meta-row.svelte-11d5b98 {display:flex;gap:0.5rem;margin:0.5rem 0;}.meta.svelte-11d5b98 {font-size:0.8rem;color:#6b7280;margin-top:0.5rem;}.actions.svelte-11d5b98 {display:flex;gap:0.5rem;margin:0.75rem 0;}.btn.svelte-11d5b98 {padding:0.4rem 0.8rem;background:#4f46e5;color:#fff;border:none;border-radius:0.375rem;cursor:pointer;font-size:0.8rem;}.btn.outline.svelte-11d5b98 {background:#fff;color:#374151;border:1px solid #d1d5db;}.btn.danger.svelte-11d5b98 {background:#dc2626;}.row-actions.svelte-11d5b98 {display:flex;gap:0.25rem;}.btn-sm.svelte-11d5b98 {padding:0.25rem 0.5rem;background:#f3f4f6;border:1px solid #d1d5db;border-radius:0.375rem;cursor:pointer;font-size:0.75rem;}.btn-sm.svelte-11d5b98:hover {background:#e5e7eb;}.back.svelte-11d5b98 {background:none;border:none;color:#4f46e5;cursor:pointer;font-size:0.85rem;padding:0;margin-bottom:1rem;}.back.svelte-11d5b98:hover {text-decoration:underline;}.card.svelte-11d5b98 h3:where(.svelte-11d5b98) {margin:0 0 0.5rem;font-size:1rem;}.log-list.svelte-11d5b98 {max-height:400px;overflow-y:auto;}.log-entry.svelte-11d5b98 {display:flex;gap:0.5rem;padding:0.25rem 0;border-bottom:1px solid #f3f4f6;font-size:0.75rem;}.log-time.svelte-11d5b98 {color:#9ca3af;white-space:nowrap;font-family:ui-monospace, monospace;}.log-msg.svelte-11d5b98 {color:#374151;word-break:break-word;}"
};
function rl(e, t) {
  xn(t, !0), Ls(e, tl);
  let r = sr(t, "extensionId", 3, "task_monitor"), n = sr(t, "version", 3, "");
  sr(t, "principal", 3, ""), sr(t, "isAuthenticated", 3, !0);
  let i = /* @__PURE__ */ B(it([])), s = /* @__PURE__ */ B(!0), o = /* @__PURE__ */ B(""), a = /* @__PURE__ */ B(null), f = /* @__PURE__ */ B(it([])), u = /* @__PURE__ */ B(!1), d = /* @__PURE__ */ B(""), _ = /* @__PURE__ */ ts(() => p(d).trim() ? p(i).filter((x) => (x.name ?? x.id ?? "").toLowerCase().includes(p(d).toLowerCase())) : p(i));
  async function h(x, T = "{}") {
    const re = await t.backend.extension_sync_call(JSON.stringify({ extension_name: r(), function_name: x, args: T }));
    return JSON.parse(re);
  }
  async function v() {
    C(s, !0), C(o, "");
    try {
      const x = await h("get_all_tasks", "{}");
      C(i, x?.data ?? (Array.isArray(x) ? x : []), !0);
    } catch (x) {
      C(o, x?.message || String(x), !0);
    } finally {
      C(s, !1);
    }
  }
  async function c(x) {
    C(u, !0);
    try {
      const [T, re] = await Promise.all([
        h("get_task_details", JSON.stringify({ task_id: x })),
        h("get_task_logs", JSON.stringify({ task_id: x })).catch(() => ({ data: [] }))
      ]);
      C(a, T?.data ?? T, !0), C(f, re?.data ?? (Array.isArray(re) ? re : []), !0);
    } catch (T) {
      C(o, T?.message || String(T), !0);
    } finally {
      C(u, !1);
    }
  }
  async function b(x) {
    try {
      await h("toggle_schedule", JSON.stringify({ task_id: x })), await v();
    } catch (T) {
      C(o, T?.message || String(T), !0);
    }
  }
  async function w(x) {
    try {
      await h("run_task_now", JSON.stringify({ task_id: x })), p(a) && await c(x);
    } catch (T) {
      C(o, T?.message || String(T), !0);
    }
  }
  async function N(x) {
    try {
      await h("delete_task", JSON.stringify({ task_id: x })), C(a, null), await v();
    } catch (T) {
      C(o, T?.message || String(T), !0);
    }
  }
  function S() {
    C(a, null), C(f, [], !0);
  }
  hs(() => {
    v();
  });
  var U = el(), X = M(U), ye = P(M(X), 2), ke = M(ye), je = P(ye, 2), Y = P(X, 2);
  {
    var ve = (x) => {
      var T = js(), re = M(T);
      Ee(() => pe(re, p(o))), V(x, T);
    };
    Oe(Y, (x) => {
      p(o) && x(ve);
    });
  }
  var yr = P(Y, 2);
  {
    var kr = (x) => {
      var T = Gs(), re = Rr(T), Zt = P(re, 2), Qt = M(Zt), Be = M(Qt), tt = P(Qt, 2), Dt = M(tt);
      {
        var Er = (I) => {
          var Z = Bs(), Re = M(Z);
          Ee(() => pe(Re, p(a).status)), V(I, Z);
        };
        Oe(Dt, (I) => {
          p(a).status && I(Er);
        });
      }
      var xr = P(Dt, 2);
      {
        var Sr = (I) => {
          var Z = Hs(), Re = M(Z);
          Ee(() => pe(Re, `Schedule: ${p(a).schedule ?? ""}`)), V(I, Z);
        };
        Oe(xr, (I) => {
          p(a).schedule && I(Sr);
        });
      }
      var $t = P(tt, 2), he = M($t), He = P(he, 2), Ue = P(He, 2), Me = P($t, 2);
      {
        var er = (I) => {
          var Z = Us(), Re = M(Z);
          Ee(() => pe(Re, `Last run: ${p(a).last_run ?? ""}`)), V(I, Z);
        };
        Oe(Me, (I) => {
          p(a).last_run && I(er);
        });
      }
      var Pt = P(Zt, 2);
      {
        var tr = (I) => {
          var Z = Js(), Re = P(M(Z), 2);
          gn(Re, 21, () => p(f), Ds, (Tr, Ye) => {
            var rr = Ys(), mt = M(rr), nr = M(mt), Ar = P(mt, 2), ai = M(Ar);
            Ee(
              (fi) => {
                pe(nr, p(Ye).timestamp || p(Ye).time || ""), pe(ai, fi);
              },
              [
                () => p(Ye).message || p(Ye).output || JSON.stringify(p(Ye))
              ]
            ), V(Tr, rr);
          }), V(I, Z);
        };
        Oe(Pt, (I) => {
          p(f).length > 0 && I(tr);
        });
      }
      Ee(() => pe(Be, p(a).name || p(a).id)), Je("click", re, S), Je("click", he, () => w(p(a).id)), Je("click", He, () => b(p(a).id)), Je("click", Ue, () => N(p(a).id)), V(x, T);
    }, li = (x) => {
      var T = Cs(), re = Rr(T);
      {
        var Zt = (Be) => {
          var tt = Ks();
          V(Be, tt);
        }, Qt = (Be) => {
          var tt = $s(), Dt = Rr(tt), Er = M(Dt), xr = P(Dt, 2);
          {
            var Sr = (he) => {
              var He = Ws(), Ue = M(He);
              Ee(() => pe(Ue, p(d) ? "No matches" : "No tasks found")), V(he, He);
            }, $t = (he) => {
              var He = Qs();
              gn(He, 21, () => p(_), (Ue) => Ue.id || Ue.name, (Ue, Me) => {
                var er = Zs(), Pt = M(er), tr = M(Pt), I = M(tr), Z = P(tr, 2);
                {
                  var Re = (mt) => {
                    var nr = Xs(), Ar = M(nr);
                    Ee(() => pe(Ar, p(Me).status)), V(mt, nr);
                  };
                  Oe(Z, (mt) => {
                    p(Me).status && mt(Re);
                  });
                }
                var Tr = P(Pt, 2), Ye = M(Tr), rr = P(Ye, 2);
                Ee(() => pe(I, p(Me).name || p(Me).id)), Je("click", Pt, () => c(p(Me).id)), Je("click", Ye, () => w(p(Me).id)), Je("click", rr, () => b(p(Me).id)), V(Ue, er);
              }), V(he, He);
            };
            Oe(xr, (he) => {
              p(_).length === 0 ? he(Sr) : he($t, -1);
            });
          }
          qs(Er, () => p(d), (he) => C(d, he)), V(Be, tt);
        };
        Oe(re, (Be) => {
          p(s) ? Be(Zt) : Be(Qt, -1);
        });
      }
      V(x, T);
    };
    Oe(yr, (x) => {
      p(a) ? x(kr) : x(li, -1);
    });
  }
  Ee(() => {
    pe(ke, `v${n() ?? ""}`), je.disabled = p(s);
  }), Je("click", je, v), V(e, U), Sn();
}
Ss(["click"]);
function sl(e, t) {
  const r = Ms(rl, { target: e, props: t });
  return {
    unmount() {
      try {
        Os(r);
      } catch {
      }
    }
  };
}
export {
  sl as default
};
