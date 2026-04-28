var En = Object.defineProperty;
var _r = (e) => {
  throw TypeError(e);
};
var xn = (e, t, r) => t in e ? En(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var te = (e, t, r) => xn(e, typeof t != "symbol" ? t + "" : t, r), Gt = (e, t, r) => t.has(e) || _r("Cannot " + r);
var s = (e, t, r) => (Gt(e, t, "read from private field"), r ? r.call(e) : t.get(e)), p = (e, t, r) => t.has(e) ? _r("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), g = (e, t, r, n) => (Gt(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r), S = (e, t, r) => (Gt(e, t, "access private method"), r);
var Sn = Array.isArray, jn = Array.prototype.indexOf, nt = Array.prototype.includes, qn = Array.from, Tn = Object.defineProperty, dt = Object.getOwnPropertyDescriptor, Nn = Object.getOwnPropertyDescriptors, An = Object.prototype, Rn = Array.prototype, qr = Object.getPrototypeOf, pr = Object.isExtensible;
const On = () => {
};
function Mn(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function Tr() {
  var e, t, r = new Promise((n, i) => {
    e = n, t = i;
  });
  return { promise: r, resolve: e, reject: t };
}
const D = 2, it = 4, Yt = 8, Nr = 1 << 24, ce = 16, ye = 32, Ne = 64, Zt = 128, Q = 512, O = 1024, C = 2048, de = 4096, X = 8192, se = 16384, ft = 32768, gr = 1 << 25, st = 65536, Qt = 1 << 17, Cn = 1 << 18, ot = 1 << 19, Dn = 1 << 20, Ye = 65536, Pt = 1 << 21, _t = 1 << 22, Te = 1 << 23, Kt = Symbol("$state"), pe = new class extends Error {
  constructor() {
    super(...arguments);
    te(this, "name", "StaleReactionError");
    te(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
function Pn() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Fn() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function In() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Ln() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function zn() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Vn() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
const Un = 2, M = Symbol(), Ar = "http://www.w3.org/1999/xhtml";
function Yn() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function Bn() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function Rr(e) {
  return e === this.v;
}
let le = null;
function lt(e) {
  le = e;
}
function Or(e, t = !1, r) {
  le = {
    p: le,
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
function Mr(e) {
  var t = (
    /** @type {ComponentContext} */
    le
  ), r = t.e;
  if (r !== null) {
    t.e = null;
    for (var n of r)
      vi(n);
  }
  return t.i = !0, le = t.p, /** @type {T} */
  {};
}
function Cr() {
  return !0;
}
let We = [];
function Jn() {
  var e = We;
  We = [], Mn(e);
}
function Qe(e) {
  if (We.length === 0) {
    var t = We;
    queueMicrotask(() => {
      t === We && Jn();
    });
  }
  We.push(e);
}
function Dr(e) {
  var t = k;
  if (t === null)
    return m.f |= Te, e;
  if ((t.f & ft) === 0 && (t.f & it) === 0)
    throw e;
  qe(e, t);
}
function qe(e, t) {
  for (; t !== null; ) {
    if ((t.f & Zt) !== 0) {
      if ((t.f & ft) === 0)
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
const Hn = -7169;
function N(e, t) {
  e.f = e.f & Hn | t;
}
function ar(e) {
  (e.f & Q) !== 0 || e.deps === null ? N(e, O) : N(e, de);
}
function Pr(e) {
  if (e !== null)
    for (const t of e)
      (t.f & D) === 0 || (t.f & Ye) === 0 || (t.f ^= Ye, Pr(
        /** @type {Derived} */
        t.deps
      ));
}
function Fr(e, t, r) {
  (e.f & C) !== 0 ? t.add(e) : (e.f & de) !== 0 && r.add(e), Pr(e.deps), N(e, O);
}
const Oe = /* @__PURE__ */ new Set();
let x = null, ne = null, Xt = null, Wt = !1, Ze = null, Nt = null;
var mr = 0;
let Gn = 1;
var Xe, $e, Pe, ge, fe, gt, Y, mt, Se, me, oe, et, tt, Fe, A, At, Ir, Rt, $t, Ot, Kn;
const zt = class zt {
  constructor() {
    p(this, A);
    te(this, "id", Gn++);
    /**
     * The current values of any signals that are updated in this batch.
     * Tuple format: [value, is_derived] (note: is_derived is false for deriveds, too, if they were overridden via assignment)
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Value, [any, boolean]>}
     */
    te(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any signals (sources and deriveds) that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Value, any>}
     */
    te(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<(batch: Batch) => void>}
     */
    p(this, Xe, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    p(this, $e, /* @__PURE__ */ new Set());
    /**
     * Callbacks that should run only when a fork is committed.
     * @type {Set<(batch: Batch) => void>}
     */
    p(this, Pe, /* @__PURE__ */ new Set());
    /**
     * Async effects that are currently in flight
     * @type {Map<Effect, number>}
     */
    p(this, ge, /* @__PURE__ */ new Map());
    /**
     * Async effects that are currently in flight, _not_ inside a pending boundary
     * @type {Map<Effect, number>}
     */
    p(this, fe, /* @__PURE__ */ new Map());
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    p(this, gt, null);
    /**
     * The root effects that need to be flushed
     * @type {Effect[]}
     */
    p(this, Y, []);
    /**
     * Effects created while this batch was active.
     * @type {Effect[]}
     */
    p(this, mt, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    p(this, Se, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    p(this, me, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    p(this, oe, /* @__PURE__ */ new Map());
    /**
     * Inverse of #skipped_branches which we need to tell prior batches to unskip them when committing
     * @type {Set<Effect>}
     */
    p(this, et, /* @__PURE__ */ new Set());
    te(this, "is_fork", !1);
    p(this, tt, !1);
    /** @type {Set<Batch>} */
    p(this, Fe, /* @__PURE__ */ new Set());
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(t) {
    s(this, oe).has(t) || s(this, oe).set(t, { d: [], m: [] }), s(this, et).delete(t);
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   * @param {(e: Effect) => void} callback
   */
  unskip_effect(t, r = (n) => this.schedule(n)) {
    var n = s(this, oe).get(t);
    if (n) {
      s(this, oe).delete(t);
      for (var i of n.d)
        N(i, C), r(i);
      for (i of n.m)
        N(i, de), r(i);
    }
    s(this, et).add(t);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Value} source
   * @param {any} value
   * @param {boolean} [is_derived]
   */
  capture(t, r, n = !1) {
    t.v !== M && !this.previous.has(t) && this.previous.set(t, t.v), (t.f & Te) === 0 && (this.current.set(t, [r, n]), ne?.set(t, r)), this.is_fork || (t.v = r);
  }
  activate() {
    x = this;
  }
  deactivate() {
    x = null, ne = null;
  }
  flush() {
    try {
      Wt = !0, x = this, S(this, A, Rt).call(this);
    } finally {
      mr = 0, Xt = null, Ze = null, Nt = null, Wt = !1, x = null, ne = null, Ve.clear();
    }
  }
  discard() {
    for (const t of s(this, $e)) t(this);
    s(this, $e).clear(), s(this, Pe).clear(), Oe.delete(this);
  }
  /**
   * @param {Effect} effect
   */
  register_created_effect(t) {
    s(this, mt).push(t);
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  increment(t, r) {
    let n = s(this, ge).get(r) ?? 0;
    if (s(this, ge).set(r, n + 1), t) {
      let i = s(this, fe).get(r) ?? 0;
      s(this, fe).set(r, i + 1);
    }
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   * @param {boolean} skip - whether to skip updates (because this is triggered by a stale reaction)
   */
  decrement(t, r, n) {
    let i = s(this, ge).get(r) ?? 0;
    if (i === 1 ? s(this, ge).delete(r) : s(this, ge).set(r, i - 1), t) {
      let l = s(this, fe).get(r) ?? 0;
      l === 1 ? s(this, fe).delete(r) : s(this, fe).set(r, l - 1);
    }
    s(this, tt) || n || (g(this, tt, !0), Qe(() => {
      g(this, tt, !1), this.flush();
    }));
  }
  /**
   * @param {Set<Effect>} dirty_effects
   * @param {Set<Effect>} maybe_dirty_effects
   */
  transfer_effects(t, r) {
    for (const n of t)
      s(this, Se).add(n);
    for (const n of r)
      s(this, me).add(n);
    t.clear(), r.clear();
  }
  /** @param {(batch: Batch) => void} fn */
  oncommit(t) {
    s(this, Xe).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    s(this, $e).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  on_fork_commit(t) {
    s(this, Pe).add(t);
  }
  run_fork_commit_callbacks() {
    for (const t of s(this, Pe)) t(this);
    s(this, Pe).clear();
  }
  settled() {
    return (s(this, gt) ?? g(this, gt, Tr())).promise;
  }
  static ensure() {
    if (x === null) {
      const t = x = new zt();
      Wt || (Oe.add(x), Qe(() => {
        x === t && t.flush();
      }));
    }
    return x;
  }
  apply() {
    {
      ne = null;
      return;
    }
  }
  /**
   *
   * @param {Effect} effect
   */
  schedule(t) {
    if (Xt = t, t.b?.is_pending && (t.f & (it | Yt | Nr)) !== 0 && (t.f & ft) === 0) {
      t.b.defer_effect(t);
      return;
    }
    for (var r = t; r.parent !== null; ) {
      r = r.parent;
      var n = r.f;
      if (Ze !== null && r === k && (m === null || (m.f & D) === 0))
        return;
      if ((n & (Ne | ye)) !== 0) {
        if ((n & O) === 0)
          return;
        r.f ^= O;
      }
    }
    s(this, Y).push(r);
  }
};
Xe = new WeakMap(), $e = new WeakMap(), Pe = new WeakMap(), ge = new WeakMap(), fe = new WeakMap(), gt = new WeakMap(), Y = new WeakMap(), mt = new WeakMap(), Se = new WeakMap(), me = new WeakMap(), oe = new WeakMap(), et = new WeakMap(), tt = new WeakMap(), Fe = new WeakMap(), A = new WeakSet(), At = function() {
  return this.is_fork || s(this, fe).size > 0;
}, Ir = function() {
  for (const n of s(this, Fe))
    for (const i of s(n, fe).keys()) {
      for (var t = !1, r = i; r.parent !== null; ) {
        if (s(this, oe).has(r)) {
          t = !0;
          break;
        }
        r = r.parent;
      }
      if (!t)
        return !0;
    }
  return !1;
}, Rt = function() {
  var o;
  if (mr++ > 1e3 && (Oe.delete(this), Wn()), !S(this, A, At).call(this)) {
    for (const a of s(this, Se))
      s(this, me).delete(a), N(a, C), this.schedule(a);
    for (const a of s(this, me))
      N(a, de), this.schedule(a);
  }
  const t = s(this, Y);
  g(this, Y, []), this.apply();
  var r = Ze = [], n = [], i = Nt = [];
  for (const a of t)
    try {
      S(this, A, $t).call(this, a, r, n);
    } catch (u) {
      throw Vr(a), u;
    }
  if (x = null, i.length > 0) {
    var l = zt.ensure();
    for (const a of i)
      l.schedule(a);
  }
  if (Ze = null, Nt = null, S(this, A, At).call(this) || S(this, A, Ir).call(this)) {
    S(this, A, Ot).call(this, n), S(this, A, Ot).call(this, r);
    for (const [a, u] of s(this, oe))
      zr(a, u);
  } else {
    s(this, ge).size === 0 && Oe.delete(this), s(this, Se).clear(), s(this, me).clear();
    for (const a of s(this, Xe)) a(this);
    s(this, Xe).clear(), br(n), br(r), s(this, gt)?.resolve();
  }
  var f = (
    /** @type {Batch | null} */
    /** @type {unknown} */
    x
  );
  if (s(this, Y).length > 0) {
    const a = f ?? (f = this);
    s(a, Y).push(...s(this, Y).filter((u) => !s(a, Y).includes(u)));
  }
  f !== null && (Oe.add(f), S(o = f, A, Rt).call(o));
}, /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
$t = function(t, r, n) {
  t.f ^= O;
  for (var i = t.first; i !== null; ) {
    var l = i.f, f = (l & (ye | Ne)) !== 0, o = f && (l & O) !== 0, a = o || (l & X) !== 0 || s(this, oe).has(i);
    if (!a && i.fn !== null) {
      f ? i.f ^= O : (l & it) !== 0 ? r.push(i) : Et(i) && ((l & ce) !== 0 && s(this, me).add(i), at(i));
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
Ot = function(t) {
  for (var r = 0; r < t.length; r += 1)
    Fr(t[r], s(this, Se), s(this, me));
}, Kn = function() {
  var h, _, v;
  for (const c of Oe) {
    var t = c.id < this.id, r = [];
    for (const [d, [E, b]] of this.current) {
      if (c.current.has(d)) {
        var n = (
          /** @type {[any, boolean]} */
          c.current.get(d)[0]
        );
        if (t && E !== n)
          c.current.set(d, [E, b]);
        else
          continue;
      }
      r.push(d);
    }
    var i = [...c.current.keys()].filter((d) => !this.current.has(d));
    if (i.length === 0)
      t && c.discard();
    else if (r.length > 0) {
      if (t)
        for (const d of s(this, et))
          c.unskip_effect(d, (E) => {
            var b;
            (E.f & (ce | _t)) !== 0 ? c.schedule(E) : S(b = c, A, Ot).call(b, [E]);
          });
      c.activate();
      var l = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Map();
      for (var o of r)
        Lr(o, i, l, f);
      f = /* @__PURE__ */ new Map();
      var a = [...c.current.keys()].filter(
        (d) => this.current.has(d) ? (
          /** @type {[any, boolean]} */
          this.current.get(d)[0] !== d
        ) : !0
      );
      for (const d of s(this, mt))
        (d.f & (se | X | Qt)) === 0 && fr(d, a, f) && ((d.f & (_t | ce)) !== 0 ? (N(d, C), c.schedule(d)) : s(c, Se).add(d));
      if (s(c, Y).length > 0) {
        c.apply();
        for (var u of s(c, Y))
          S(h = c, A, $t).call(h, u, [], []);
        g(c, Y, []);
      }
      c.deactivate();
    }
  }
  for (const c of Oe)
    s(c, Fe).has(this) && (s(c, Fe).delete(this), s(c, Fe).size === 0 && !S(_ = c, A, At).call(_) && (c.activate(), S(v = c, A, Rt).call(v)));
};
let Be = zt;
function Wn() {
  try {
    Fn();
  } catch (e) {
    qe(e, Xt);
  }
}
let ve = null;
function br(e) {
  var t = e.length;
  if (t !== 0) {
    for (var r = 0; r < t; ) {
      var n = e[r++];
      if ((n.f & (se | X)) === 0 && Et(n) && (ve = /* @__PURE__ */ new Set(), at(n), n.deps === null && n.first === null && n.nodes === null && n.teardown === null && n.ac === null && tn(n), ve?.size > 0)) {
        Ve.clear();
        for (const i of ve) {
          if ((i.f & (se | X)) !== 0) continue;
          const l = [i];
          let f = i.parent;
          for (; f !== null; )
            ve.has(f) && (ve.delete(f), l.push(f)), f = f.parent;
          for (let o = l.length - 1; o >= 0; o--) {
            const a = l[o];
            (a.f & (se | X)) === 0 && at(a);
          }
        }
        ve.clear();
      }
    }
    ve = null;
  }
}
function Lr(e, t, r, n) {
  if (!r.has(e) && (r.add(e), e.reactions !== null))
    for (const i of e.reactions) {
      const l = i.f;
      (l & D) !== 0 ? Lr(
        /** @type {Derived} */
        i,
        t,
        r,
        n
      ) : (l & (_t | ce)) !== 0 && (l & C) === 0 && fr(i, t, n) && (N(i, C), or(
        /** @type {Effect} */
        i
      ));
    }
}
function fr(e, t, r) {
  const n = r.get(e);
  if (n !== void 0) return n;
  if (e.deps !== null)
    for (const i of e.deps) {
      if (nt.call(t, i))
        return !0;
      if ((i.f & D) !== 0 && fr(
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
function or(e) {
  x.schedule(e);
}
function zr(e, t) {
  if (!((e.f & ye) !== 0 && (e.f & O) !== 0)) {
    (e.f & C) !== 0 ? t.d.push(e) : (e.f & de) !== 0 && t.m.push(e), N(e, O);
    for (var r = e.first; r !== null; )
      zr(r, t), r = r.next;
  }
}
function Vr(e) {
  N(e, O);
  for (var t = e.first; t !== null; )
    Vr(t), t = t.next;
}
function Zn(e) {
  let t = 0, r = Bt(0), n;
  return () => {
    dr() && (y(r), mi(() => (t === 0 && (n = Si(() => e(() => ht(r)))), t += 1, () => {
      Qe(() => {
        t -= 1, t === 0 && (n?.(), n = void 0, ht(r));
      });
    })));
  };
}
var Qn = st | ot;
function Xn(e, t, r, n) {
  new $n(e, t, r, n);
}
var K, lr, W, Ie, I, Z, P, B, be, Le, je, rt, bt, wt, we, Vt, T, ei, ti, ri, er, Mt, Ct, tr, rr;
class $n {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(t, r, n, i) {
    p(this, T);
    /** @type {Boundary | null} */
    te(this, "parent");
    te(this, "is_pending", !1);
    /**
     * API-level transformError transform function. Transforms errors before they reach the `failed` snippet.
     * Inherited from parent boundary, or defaults to identity.
     * @type {(error: unknown) => unknown}
     */
    te(this, "transform_error");
    /** @type {TemplateNode} */
    p(this, K);
    /** @type {TemplateNode | null} */
    p(this, lr, null);
    /** @type {BoundaryProps} */
    p(this, W);
    /** @type {((anchor: Node) => void)} */
    p(this, Ie);
    /** @type {Effect} */
    p(this, I);
    /** @type {Effect | null} */
    p(this, Z, null);
    /** @type {Effect | null} */
    p(this, P, null);
    /** @type {Effect | null} */
    p(this, B, null);
    /** @type {DocumentFragment | null} */
    p(this, be, null);
    p(this, Le, 0);
    p(this, je, 0);
    p(this, rt, !1);
    /** @type {Set<Effect>} */
    p(this, bt, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    p(this, wt, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    p(this, we, null);
    p(this, Vt, Zn(() => (g(this, we, Bt(s(this, Le))), () => {
      g(this, we, null);
    })));
    g(this, K, t), g(this, W, r), g(this, Ie, (l) => {
      var f = (
        /** @type {Effect} */
        k
      );
      f.b = this, f.f |= Zt, n(l);
    }), this.parent = /** @type {Effect} */
    k.b, this.transform_error = i ?? this.parent?.transform_error ?? ((l) => l), g(this, I, $r(() => {
      S(this, T, er).call(this);
    }, Qn));
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    Fr(t, s(this, bt), s(this, wt));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!s(this, W).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  update_pending_count(t, r) {
    S(this, T, tr).call(this, t, r), g(this, Le, s(this, Le) + t), !(!s(this, we) || s(this, rt)) && (g(this, rt, !0), Qe(() => {
      g(this, rt, !1), s(this, we) && It(s(this, we), s(this, Le));
    }));
  }
  get_effect_pending() {
    return s(this, Vt).call(this), y(
      /** @type {Source<number>} */
      s(this, we)
    );
  }
  /** @param {unknown} error */
  error(t) {
    if (!s(this, W).onerror && !s(this, W).failed)
      throw t;
    x?.is_fork ? (s(this, Z) && x.skip_effect(s(this, Z)), s(this, P) && x.skip_effect(s(this, P)), s(this, B) && x.skip_effect(s(this, B)), x.on_fork_commit(() => {
      S(this, T, rr).call(this, t);
    })) : S(this, T, rr).call(this, t);
  }
}
K = new WeakMap(), lr = new WeakMap(), W = new WeakMap(), Ie = new WeakMap(), I = new WeakMap(), Z = new WeakMap(), P = new WeakMap(), B = new WeakMap(), be = new WeakMap(), Le = new WeakMap(), je = new WeakMap(), rt = new WeakMap(), bt = new WeakMap(), wt = new WeakMap(), we = new WeakMap(), Vt = new WeakMap(), T = new WeakSet(), ei = function() {
  try {
    g(this, Z, _e(() => s(this, Ie).call(this, s(this, K))));
  } catch (t) {
    this.error(t);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
ti = function(t) {
  const r = s(this, W).failed;
  r && g(this, B, _e(() => {
    r(
      s(this, K),
      () => t,
      () => () => {
      }
    );
  }));
}, ri = function() {
  const t = s(this, W).pending;
  t && (this.is_pending = !0, g(this, P, _e(() => t(s(this, K)))), Qe(() => {
    var r = g(this, be, document.createDocumentFragment()), n = Lt();
    r.append(n), g(this, Z, S(this, T, Ct).call(this, () => _e(() => s(this, Ie).call(this, n)))), s(this, je) === 0 && (s(this, K).before(r), g(this, be, null), vt(
      /** @type {Effect} */
      s(this, P),
      () => {
        g(this, P, null);
      }
    ), S(this, T, Mt).call(
      this,
      /** @type {Batch} */
      x
    ));
  }));
}, er = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), g(this, je, 0), g(this, Le, 0), g(this, Z, _e(() => {
      s(this, Ie).call(this, s(this, K));
    })), s(this, je) > 0) {
      var t = g(this, be, document.createDocumentFragment());
      sn(s(this, Z), t);
      const r = (
        /** @type {(anchor: Node) => void} */
        s(this, W).pending
      );
      g(this, P, _e(() => r(s(this, K))));
    } else
      S(this, T, Mt).call(
        this,
        /** @type {Batch} */
        x
      );
  } catch (r) {
    this.error(r);
  }
}, /**
 * @param {Batch} batch
 */
Mt = function(t) {
  this.is_pending = !1, t.transfer_effects(s(this, bt), s(this, wt));
}, /**
 * @template T
 * @param {() => T} fn
 */
Ct = function(t) {
  var r = k, n = m, i = le;
  he(s(this, I)), ee(s(this, I)), lt(s(this, I).ctx);
  try {
    return Be.ensure(), t();
  } catch (l) {
    return Dr(l), null;
  } finally {
    he(r), ee(n), lt(i);
  }
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 * @param {Batch} batch
 */
tr = function(t, r) {
  var n;
  if (!this.has_pending_snippet()) {
    this.parent && S(n = this.parent, T, tr).call(n, t, r);
    return;
  }
  g(this, je, s(this, je) + t), s(this, je) === 0 && (S(this, T, Mt).call(this, r), s(this, P) && vt(s(this, P), () => {
    g(this, P, null);
  }), s(this, be) && (s(this, K).before(s(this, be)), g(this, be, null)));
}, /**
 * @param {unknown} error
 */
rr = function(t) {
  s(this, Z) && (H(s(this, Z)), g(this, Z, null)), s(this, P) && (H(s(this, P)), g(this, P, null)), s(this, B) && (H(s(this, B)), g(this, B, null));
  var r = s(this, W).onerror;
  let n = s(this, W).failed;
  var i = !1, l = !1;
  const f = () => {
    if (i) {
      Bn();
      return;
    }
    i = !0, l && Vn(), s(this, B) !== null && vt(s(this, B), () => {
      g(this, B, null);
    }), S(this, T, Ct).call(this, () => {
      S(this, T, er).call(this);
    });
  }, o = (a) => {
    try {
      l = !0, r?.(a, f), l = !1;
    } catch (u) {
      qe(u, s(this, I) && s(this, I).parent);
    }
    n && g(this, B, S(this, T, Ct).call(this, () => {
      try {
        return _e(() => {
          var u = (
            /** @type {Effect} */
            k
          );
          u.b = this, u.f |= Zt, n(
            s(this, K),
            () => a,
            () => f
          );
        });
      } catch (u) {
        return qe(
          u,
          /** @type {Effect} */
          s(this, I).parent
        ), null;
      }
    }));
  };
  Qe(() => {
    var a;
    try {
      a = this.transform_error(t);
    } catch (u) {
      qe(u, s(this, I) && s(this, I).parent);
      return;
    }
    a !== null && typeof a == "object" && typeof /** @type {any} */
    a.then == "function" ? a.then(
      o,
      /** @param {unknown} e */
      (u) => qe(u, s(this, I) && s(this, I).parent)
    ) : o(a);
  });
};
function ni(e, t, r, n) {
  const i = si;
  var l = e.filter((v) => !v.settled);
  if (r.length === 0 && l.length === 0) {
    n(t.map(i));
    return;
  }
  var f = (
    /** @type {Effect} */
    k
  ), o = ii(), a = l.length === 1 ? l[0].promise : l.length > 1 ? Promise.all(l.map((v) => v.promise)) : null;
  function u(v) {
    o();
    try {
      n(v);
    } catch (c) {
      (f.f & se) === 0 && qe(c, f);
    }
    Ft();
  }
  if (r.length === 0) {
    a.then(() => u(t.map(i)));
    return;
  }
  var h = Ur();
  function _() {
    Promise.all(r.map((v) => /* @__PURE__ */ li(v))).then((v) => u([...t.map(i), ...v])).catch((v) => qe(v, f)).finally(() => h());
  }
  a ? a.then(() => {
    o(), _(), Ft();
  }) : _();
}
function ii() {
  var e = (
    /** @type {Effect} */
    k
  ), t = m, r = le, n = (
    /** @type {Batch} */
    x
  );
  return function(l = !0) {
    he(e), ee(t), lt(r), l && (e.f & se) === 0 && (n?.activate(), n?.apply());
  };
}
function Ft(e = !0) {
  he(null), ee(null), lt(null), e && x?.deactivate();
}
function Ur() {
  var e = (
    /** @type {Effect} */
    k
  ), t = (
    /** @type {Boundary} */
    e.b
  ), r = (
    /** @type {Batch} */
    x
  ), n = t.is_rendered();
  return t.update_pending_count(1, r), r.increment(n, e), (i = !1) => {
    t.update_pending_count(-1, r), r.decrement(n, e, i);
  };
}
// @__NO_SIDE_EFFECTS__
function si(e) {
  var t = D | C;
  return k !== null && (k.f |= ot), {
    ctx: le,
    deps: null,
    effects: null,
    equals: Rr,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      M
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
  n === null && Pn();
  var i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), l = Bt(
    /** @type {V} */
    M
  ), f = !m, o = /* @__PURE__ */ new Map();
  return gi(() => {
    var a = (
      /** @type {Effect} */
      k
    ), u = Tr();
    i = u.promise;
    try {
      Promise.resolve(e()).then(u.resolve, u.reject).finally(Ft);
    } catch (c) {
      u.reject(c), Ft();
    }
    var h = (
      /** @type {Batch} */
      x
    );
    if (f) {
      if ((a.f & ft) !== 0)
        var _ = Ur();
      if (
        /** @type {Boundary} */
        n.b.is_rendered()
      )
        o.get(h)?.reject(pe), o.delete(h);
      else {
        for (const c of o.values())
          c.reject(pe);
        o.clear();
      }
      o.set(h, u);
    }
    const v = (c, d = void 0) => {
      if (_) {
        var E = d === pe;
        _(E);
      }
      if (!(d === pe || (a.f & se) !== 0)) {
        if (h.activate(), d)
          l.f |= Te, It(l, d);
        else {
          (l.f & Te) !== 0 && (l.f ^= Te), It(l, c);
          for (const [b, V] of o) {
            if (o.delete(b), b === h) break;
            V.reject(pe);
          }
        }
        h.deactivate();
      }
    };
    u.promise.then(v, (c) => v(null, c || "unknown"));
  }), hi(() => {
    for (const a of o.values())
      a.reject(pe);
  }), new Promise((a) => {
    function u(h) {
      function _() {
        h === i ? a(l) : u(i);
      }
      h.then(_, _);
    }
    u(i);
  });
}
function ai(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var r = 0; r < t.length; r += 1)
      H(
        /** @type {Effect} */
        t[r]
      );
  }
}
function ur(e) {
  var t, r = k, n = e.parent;
  if (!Je && n !== null && (n.f & (se | X)) !== 0)
    return Yn(), e.v;
  he(n);
  try {
    e.f &= ~Ye, ai(e), t = on(e);
  } finally {
    he(r);
  }
  return t;
}
function Yr(e) {
  var t = ur(e);
  if (!e.equals(t) && (e.wv = an(), (!x?.is_fork || e.deps === null) && (x !== null ? x.capture(e, t, !0) : e.v = t, e.deps === null))) {
    N(e, O);
    return;
  }
  Je || (ne !== null ? (dr() || x?.is_fork) && ne.set(e, t) : ar(e));
}
function fi(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      (t.teardown || t.ac) && (t.teardown?.(), t.ac?.abort(pe), t.teardown = On, t.ac = null, pt(t, 0), hr(t));
}
function Br(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      t.teardown && at(t);
}
let nr = /* @__PURE__ */ new Set();
const Ve = /* @__PURE__ */ new Map();
let Jr = !1;
function Bt(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Rr,
    rv: 0,
    wv: 0
  };
  return r;
}
// @__NO_SIDE_EFFECTS__
function L(e, t) {
  const r = Bt(e);
  return ki(r), r;
}
function j(e, t, r = !1) {
  m !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!ie || (m.f & Qt) !== 0) && Cr() && (m.f & (D | ce | _t | Qt)) !== 0 && ($ === null || !nt.call($, e)) && zn();
  let n = r ? ct(t) : t;
  return It(e, n, Nt);
}
function It(e, t, r = null) {
  if (!e.equals(t)) {
    Ve.set(e, Je ? t : e.v);
    var n = Be.ensure();
    if (n.capture(e, t), (e.f & D) !== 0) {
      const i = (
        /** @type {Derived} */
        e
      );
      (e.f & C) !== 0 && ur(i), ne === null && ar(i);
    }
    e.wv = an(), Hr(e, C, r), k !== null && (k.f & O) !== 0 && (k.f & (ye | Ne)) === 0 && (G === null ? Ei([e]) : G.push(e)), !n.is_fork && nr.size > 0 && !Jr && oi();
  }
  return t;
}
function oi() {
  Jr = !1;
  for (const e of nr)
    (e.f & O) !== 0 && N(e, de), Et(e) && at(e);
  nr.clear();
}
function ht(e) {
  j(e, e.v + 1);
}
function Hr(e, t, r) {
  var n = e.reactions;
  if (n !== null)
    for (var i = n.length, l = 0; l < i; l++) {
      var f = n[l], o = f.f, a = (o & C) === 0;
      if (a && N(f, t), (o & D) !== 0) {
        var u = (
          /** @type {Derived} */
          f
        );
        ne?.delete(u), (o & Ye) === 0 && (o & Q && (k === null || (k.f & Pt) === 0) && (f.f |= Ye), Hr(u, de, r));
      } else if (a) {
        var h = (
          /** @type {Effect} */
          f
        );
        (o & ce) !== 0 && ve !== null && ve.add(h), r !== null ? r.push(h) : or(h);
      }
    }
}
function ct(e) {
  if (typeof e != "object" || e === null || Kt in e)
    return e;
  const t = qr(e);
  if (t !== An && t !== Rn)
    return e;
  var r = /* @__PURE__ */ new Map(), n = Sn(e), i = /* @__PURE__ */ L(0), l = Ue, f = (o) => {
    if (Ue === l)
      return o();
    var a = m, u = Ue;
    ee(null), kr(l);
    var h = o();
    return ee(a), kr(u), h;
  };
  return n && r.set("length", /* @__PURE__ */ L(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(o, a, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && In();
        var h = r.get(a);
        return h === void 0 ? f(() => {
          var _ = /* @__PURE__ */ L(u.value);
          return r.set(a, _), _;
        }) : j(h, u.value, !0), !0;
      },
      deleteProperty(o, a) {
        var u = r.get(a);
        if (u === void 0) {
          if (a in o) {
            const h = f(() => /* @__PURE__ */ L(M));
            r.set(a, h), ht(i);
          }
        } else
          j(u, M), ht(i);
        return !0;
      },
      get(o, a, u) {
        if (a === Kt)
          return e;
        var h = r.get(a), _ = a in o;
        if (h === void 0 && (!_ || dt(o, a)?.writable) && (h = f(() => {
          var c = ct(_ ? o[a] : M), d = /* @__PURE__ */ L(c);
          return d;
        }), r.set(a, h)), h !== void 0) {
          var v = y(h);
          return v === M ? void 0 : v;
        }
        return Reflect.get(o, a, u);
      },
      getOwnPropertyDescriptor(o, a) {
        var u = Reflect.getOwnPropertyDescriptor(o, a);
        if (u && "value" in u) {
          var h = r.get(a);
          h && (u.value = y(h));
        } else if (u === void 0) {
          var _ = r.get(a), v = _?.v;
          if (_ !== void 0 && v !== M)
            return {
              enumerable: !0,
              configurable: !0,
              value: v,
              writable: !0
            };
        }
        return u;
      },
      has(o, a) {
        if (a === Kt)
          return !0;
        var u = r.get(a), h = u !== void 0 && u.v !== M || Reflect.has(o, a);
        if (u !== void 0 || k !== null && (!h || dt(o, a)?.writable)) {
          u === void 0 && (u = f(() => {
            var v = h ? ct(o[a]) : M, c = /* @__PURE__ */ L(v);
            return c;
          }), r.set(a, u));
          var _ = y(u);
          if (_ === M)
            return !1;
        }
        return h;
      },
      set(o, a, u, h) {
        var _ = r.get(a), v = a in o;
        if (n && a === "length")
          for (var c = u; c < /** @type {Source<number>} */
          _.v; c += 1) {
            var d = r.get(c + "");
            d !== void 0 ? j(d, M) : c in o && (d = f(() => /* @__PURE__ */ L(M)), r.set(c + "", d));
          }
        if (_ === void 0)
          (!v || dt(o, a)?.writable) && (_ = f(() => /* @__PURE__ */ L(void 0)), j(_, ct(u)), r.set(a, _));
        else {
          v = _.v !== M;
          var E = f(() => ct(u));
          j(_, E);
        }
        var b = Reflect.getOwnPropertyDescriptor(o, a);
        if (b?.set && b.set.call(h, u), !v) {
          if (n && typeof a == "string") {
            var V = (
              /** @type {Source<number>} */
              r.get("length")
            ), Ee = Number(a);
            Number.isInteger(Ee) && Ee >= V.v && j(V, Ee + 1);
          }
          ht(i);
        }
        return !0;
      },
      ownKeys(o) {
        y(i);
        var a = Reflect.ownKeys(o).filter((_) => {
          var v = r.get(_);
          return v === void 0 || v.v !== M;
        });
        for (var [u, h] of r)
          h.v !== M && !(u in o) && a.push(u);
        return a;
      },
      setPrototypeOf() {
        Ln();
      }
    }
  );
}
var wr, Gr, Kr, Wr;
function ui() {
  if (wr === void 0) {
    wr = window, Gr = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, r = Text.prototype;
    Kr = dt(t, "firstChild").get, Wr = dt(t, "nextSibling").get, pr(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), pr(r) && (r.__t = void 0);
  }
}
function Lt(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function Zr(e) {
  return (
    /** @type {TemplateNode | null} */
    Kr.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function cr(e) {
  return (
    /** @type {TemplateNode | null} */
    Wr.call(e)
  );
}
function F(e, t) {
  return /* @__PURE__ */ Zr(e);
}
function ae(e, t = 1, r = !1) {
  let n = e;
  for (; t--; )
    n = /** @type {TemplateNode} */
    /* @__PURE__ */ cr(n);
  return n;
}
function ci() {
  return !1;
}
function Qr(e, t, r) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElementNS(Ar, e, void 0)
  );
}
function Xr(e) {
  var t = m, r = k;
  ee(null), he(null);
  try {
    return e();
  } finally {
    ee(t), he(r);
  }
}
function di(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function ke(e, t) {
  var r = k;
  r !== null && (r.f & X) !== 0 && (e |= X);
  var n = {
    ctx: le,
    deps: null,
    nodes: null,
    f: e | C | Q,
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
  x?.register_created_effect(n);
  var i = n;
  if ((e & it) !== 0)
    Ze !== null ? Ze.push(n) : Be.ensure().schedule(n);
  else if (t !== null) {
    try {
      at(n);
    } catch (f) {
      throw H(n), f;
    }
    i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && // either `null`, or a singular child
    (i.f & ot) === 0 && (i = i.first, (e & ce) !== 0 && (e & st) !== 0 && i !== null && (i.f |= st));
  }
  if (i !== null && (i.parent = r, r !== null && di(i, r), m !== null && (m.f & D) !== 0 && (e & Ne) === 0)) {
    var l = (
      /** @type {Derived} */
      m
    );
    (l.effects ?? (l.effects = [])).push(i);
  }
  return n;
}
function dr() {
  return m !== null && !ie;
}
function hi(e) {
  const t = ke(Yt, null);
  return N(t, O), t.teardown = e, t;
}
function vi(e) {
  return ke(it | Dn, e);
}
function _i(e) {
  Be.ensure();
  const t = ke(Ne | ot, e);
  return (r = {}) => new Promise((n) => {
    r.outro ? vt(t, () => {
      H(t), n(void 0);
    }) : (H(t), n(void 0));
  });
}
function pi(e) {
  return ke(it, e);
}
function gi(e) {
  return ke(_t | ot, e);
}
function mi(e, t = 0) {
  return ke(Yt | t, e);
}
function Ke(e, t = [], r = [], n = []) {
  ni(n, t, r, (i) => {
    ke(Yt, () => e(...i.map(y)));
  });
}
function $r(e, t = 0) {
  var r = ke(ce | t, e);
  return r;
}
function _e(e) {
  return ke(ye | ot, e);
}
function en(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = Je, n = m;
    yr(!0), ee(null);
    try {
      t.call(null);
    } finally {
      yr(r), ee(n);
    }
  }
}
function hr(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    const i = r.ac;
    i !== null && Xr(() => {
      i.abort(pe);
    });
    var n = r.next;
    (r.f & Ne) !== 0 ? r.parent = null : H(r, t), r = n;
  }
}
function bi(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & ye) === 0 && H(t), t = r;
  }
}
function H(e, t = !0) {
  var r = !1;
  (t || (e.f & Cn) !== 0) && e.nodes !== null && e.nodes.end !== null && (wi(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), r = !0), N(e, gr), hr(e, t && !r), pt(e, 0);
  var n = e.nodes && e.nodes.t;
  if (n !== null)
    for (const l of n)
      l.stop();
  en(e), e.f ^= gr, e.f |= se;
  var i = e.parent;
  i !== null && i.first !== null && tn(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function wi(e, t) {
  for (; e !== null; ) {
    var r = e === t ? null : /* @__PURE__ */ cr(e);
    e.remove(), e = r;
  }
}
function tn(e) {
  var t = e.parent, r = e.prev, n = e.next;
  r !== null && (r.next = n), n !== null && (n.prev = r), t !== null && (t.first === e && (t.first = n), t.last === e && (t.last = r));
}
function vt(e, t, r = !0) {
  var n = [];
  rn(e, n, !0);
  var i = () => {
    r && H(e), t && t();
  }, l = n.length;
  if (l > 0) {
    var f = () => --l || i();
    for (var o of n)
      o.out(f);
  } else
    i();
}
function rn(e, t, r) {
  if ((e.f & X) === 0) {
    e.f ^= X;
    var n = e.nodes && e.nodes.t;
    if (n !== null)
      for (const o of n)
        (o.is_global || r) && t.push(o);
    for (var i = e.first; i !== null; ) {
      var l = i.next;
      if ((i.f & Ne) === 0) {
        var f = (i.f & st) !== 0 || // If this is a branch effect without a block effect parent,
        // it means the parent block effect was pruned. In that case,
        // transparency information was transferred to the branch effect.
        (i.f & ye) !== 0 && (e.f & ce) !== 0;
        rn(i, t, f ? r : !1);
      }
      i = l;
    }
  }
}
function yi(e) {
  nn(e, !0);
}
function nn(e, t) {
  if ((e.f & X) !== 0) {
    e.f ^= X, (e.f & O) === 0 && (N(e, C), Be.ensure().schedule(e));
    for (var r = e.first; r !== null; ) {
      var n = r.next, i = (r.f & st) !== 0 || (r.f & ye) !== 0;
      nn(r, i ? t : !1), r = n;
    }
    var l = e.nodes && e.nodes.t;
    if (l !== null)
      for (const f of l)
        (f.is_global || t) && f.in();
  }
}
function sn(e, t) {
  if (e.nodes)
    for (var r = e.nodes.start, n = e.nodes.end; r !== null; ) {
      var i = r === n ? null : /* @__PURE__ */ cr(r);
      t.append(r), r = i;
    }
}
let Dt = !1, Je = !1;
function yr(e) {
  Je = e;
}
let m = null, ie = !1;
function ee(e) {
  m = e;
}
let k = null;
function he(e) {
  k = e;
}
let $ = null;
function ki(e) {
  m !== null && ($ === null ? $ = [e] : $.push(e));
}
let z = null, U = 0, G = null;
function Ei(e) {
  G = e;
}
let ln = 1, Ce = 0, Ue = Ce;
function kr(e) {
  Ue = e;
}
function an() {
  return ++ln;
}
function Et(e) {
  var t = e.f;
  if ((t & C) !== 0)
    return !0;
  if (t & D && (e.f &= ~Ye), (t & de) !== 0) {
    for (var r = (
      /** @type {Value[]} */
      e.deps
    ), n = r.length, i = 0; i < n; i++) {
      var l = r[i];
      if (Et(
        /** @type {Derived} */
        l
      ) && Yr(
        /** @type {Derived} */
        l
      ), l.wv > e.wv)
        return !0;
    }
    (t & Q) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    ne === null && N(e, O);
  }
  return !1;
}
function fn(e, t, r = !0) {
  var n = e.reactions;
  if (n !== null && !($ !== null && nt.call($, e)))
    for (var i = 0; i < n.length; i++) {
      var l = n[i];
      (l.f & D) !== 0 ? fn(
        /** @type {Derived} */
        l,
        t,
        !1
      ) : t === l && (r ? N(l, C) : (l.f & O) !== 0 && N(l, de), or(
        /** @type {Effect} */
        l
      ));
    }
}
function on(e) {
  var E;
  var t = z, r = U, n = G, i = m, l = $, f = le, o = ie, a = Ue, u = e.f;
  z = /** @type {null | Value[]} */
  null, U = 0, G = null, m = (u & (ye | Ne)) === 0 ? e : null, $ = null, lt(e.ctx), ie = !1, Ue = ++Ce, e.ac !== null && (Xr(() => {
    e.ac.abort(pe);
  }), e.ac = null);
  try {
    e.f |= Pt;
    var h = (
      /** @type {Function} */
      e.fn
    ), _ = h();
    e.f |= ft;
    var v = e.deps, c = x?.is_fork;
    if (z !== null) {
      var d;
      if (c || pt(e, U), v !== null && U > 0)
        for (v.length = U + z.length, d = 0; d < z.length; d++)
          v[U + d] = z[d];
      else
        e.deps = v = z;
      if (dr() && (e.f & Q) !== 0)
        for (d = U; d < v.length; d++)
          ((E = v[d]).reactions ?? (E.reactions = [])).push(e);
    } else !c && v !== null && U < v.length && (pt(e, U), v.length = U);
    if (Cr() && G !== null && !ie && v !== null && (e.f & (D | de | C)) === 0)
      for (d = 0; d < /** @type {Source[]} */
      G.length; d++)
        fn(
          G[d],
          /** @type {Effect} */
          e
        );
    if (i !== null && i !== e) {
      if (Ce++, i.deps !== null)
        for (let b = 0; b < r; b += 1)
          i.deps[b].rv = Ce;
      if (t !== null)
        for (const b of t)
          b.rv = Ce;
      G !== null && (n === null ? n = G : n.push(.../** @type {Source[]} */
      G));
    }
    return (e.f & Te) !== 0 && (e.f ^= Te), _;
  } catch (b) {
    return Dr(b);
  } finally {
    e.f ^= Pt, z = t, U = r, G = n, m = i, $ = l, lt(f), ie = o, Ue = a;
  }
}
function xi(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var n = jn.call(r, e);
    if (n !== -1) {
      var i = r.length - 1;
      i === 0 ? r = t.reactions = null : (r[n] = r[i], r.pop());
    }
  }
  if (r === null && (t.f & D) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (z === null || !nt.call(z, t))) {
    var l = (
      /** @type {Derived} */
      t
    );
    (l.f & Q) !== 0 && (l.f ^= Q, l.f &= ~Ye), l.v !== M && ar(l), fi(l), pt(l, 0);
  }
}
function pt(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var n = t; n < r.length; n++)
      xi(e, r[n]);
}
function at(e) {
  var t = e.f;
  if ((t & se) === 0) {
    N(e, O);
    var r = k, n = Dt;
    k = e, Dt = !0;
    try {
      (t & (ce | Nr)) !== 0 ? bi(e) : hr(e), en(e);
      var i = on(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = ln;
      var l;
    } finally {
      Dt = n, k = r;
    }
  }
}
function y(e) {
  var t = e.f, r = (t & D) !== 0;
  if (m !== null && !ie) {
    var n = k !== null && (k.f & se) !== 0;
    if (!n && ($ === null || !nt.call($, e))) {
      var i = m.deps;
      if ((m.f & Pt) !== 0)
        e.rv < Ce && (e.rv = Ce, z === null && i !== null && i[U] === e ? U++ : z === null ? z = [e] : z.push(e));
      else {
        (m.deps ?? (m.deps = [])).push(e);
        var l = e.reactions;
        l === null ? e.reactions = [m] : nt.call(l, m) || l.push(m);
      }
    }
  }
  if (Je && Ve.has(e))
    return Ve.get(e);
  if (r) {
    var f = (
      /** @type {Derived} */
      e
    );
    if (Je) {
      var o = f.v;
      return ((f.f & O) === 0 && f.reactions !== null || cn(f)) && (o = ur(f)), Ve.set(f, o), o;
    }
    var a = (f.f & Q) === 0 && !ie && m !== null && (Dt || (m.f & Q) !== 0), u = (f.f & ft) === 0;
    Et(f) && (a && (f.f |= Q), Yr(f)), a && !u && (Br(f), un(f));
  }
  if (ne?.has(e))
    return ne.get(e);
  if ((e.f & Te) !== 0)
    throw e.v;
  return e.v;
}
function un(e) {
  if (e.f |= Q, e.deps !== null)
    for (const t of e.deps)
      (t.reactions ?? (t.reactions = [])).push(e), (t.f & D) !== 0 && (t.f & Q) === 0 && (Br(
        /** @type {Derived} */
        t
      ), un(
        /** @type {Derived} */
        t
      ));
}
function cn(e) {
  if (e.v === M) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (Ve.has(t) || (t.f & D) !== 0 && cn(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function Si(e) {
  var t = ie;
  try {
    return ie = !0, e();
  } finally {
    ie = t;
  }
}
const ji = ["touchstart", "touchmove"];
function qi(e) {
  return ji.includes(e);
}
const De = Symbol("events"), dn = /* @__PURE__ */ new Set(), ir = /* @__PURE__ */ new Set();
function St(e, t, r) {
  (t[De] ?? (t[De] = {}))[e] = r;
}
function Ti(e) {
  for (var t = 0; t < e.length; t++)
    dn.add(e[t]);
  for (var r of ir)
    r(e);
}
let Er = null;
function xr(e) {
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), n = e.type, i = e.composedPath?.() || [], l = (
    /** @type {null | Element} */
    i[0] || e.target
  );
  Er = e;
  var f = 0, o = Er === e && e[De];
  if (o) {
    var a = i.indexOf(o);
    if (a !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e[De] = t;
      return;
    }
    var u = i.indexOf(t);
    if (u === -1)
      return;
    a <= u && (f = a);
  }
  if (l = /** @type {Element} */
  i[f] || e.target, l !== t) {
    Tn(e, "currentTarget", {
      configurable: !0,
      get() {
        return l || r;
      }
    });
    var h = m, _ = k;
    ee(null), he(null);
    try {
      for (var v, c = []; l !== null; ) {
        var d = l.assignedSlot || l.parentNode || /** @type {any} */
        l.host || null;
        try {
          var E = l[De]?.[n];
          E != null && (!/** @type {any} */
          l.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === l) && E.call(l, e);
        } catch (b) {
          v ? c.push(b) : v = b;
        }
        if (e.cancelBubble || d === t || d === null)
          break;
        l = d;
      }
      if (v) {
        for (let b of c)
          queueMicrotask(() => {
            throw b;
          });
        throw v;
      }
    } finally {
      e[De] = t, delete e.currentTarget, ee(h), he(_);
    }
  }
}
const Ni = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (e) => e
  })
);
function Ai(e) {
  return (
    /** @type {string} */
    Ni?.createHTML(e) ?? e
  );
}
function Ri(e) {
  var t = Qr("template");
  return t.innerHTML = Ai(e.replaceAll("<!>", "<!---->")), t.content;
}
function Oi(e, t) {
  var r = (
    /** @type {Effect} */
    k
  );
  r.nodes === null && (r.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function Ae(e, t) {
  var r = (t & Un) !== 0, n, i = !e.startsWith("<!>");
  return () => {
    n === void 0 && (n = Ri(i ? e : "<!>" + e), n = /** @type {TemplateNode} */
    /* @__PURE__ */ Zr(n));
    var l = (
      /** @type {TemplateNode} */
      r || Gr ? document.importNode(n, !0) : n.cloneNode(!0)
    );
    return Oi(l, l), l;
  };
}
function xe(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function Me(e, t) {
  var r = t == null ? "" : typeof t == "object" ? `${t}` : t;
  r !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = r, e.nodeValue = `${r}`);
}
function Mi(e, t) {
  return Ci(e, t);
}
const jt = /* @__PURE__ */ new Map();
function Ci(e, { target: t, anchor: r, props: n = {}, events: i, context: l, intro: f = !0, transformError: o }) {
  ui();
  var a = void 0, u = _i(() => {
    var h = r ?? t.appendChild(Lt());
    Xn(
      /** @type {TemplateNode} */
      h,
      {
        pending: () => {
        }
      },
      (c) => {
        Or({});
        var d = (
          /** @type {ComponentContext} */
          le
        );
        l && (d.c = l), i && (n.$$events = i), a = e(c, n) || {}, Mr();
      },
      o
    );
    var _ = /* @__PURE__ */ new Set(), v = (c) => {
      for (var d = 0; d < c.length; d++) {
        var E = c[d];
        if (!_.has(E)) {
          _.add(E);
          var b = qi(E);
          for (const He of [t, document]) {
            var V = jt.get(He);
            V === void 0 && (V = /* @__PURE__ */ new Map(), jt.set(He, V));
            var Ee = V.get(E);
            Ee === void 0 ? (He.addEventListener(E, xr, { passive: b }), V.set(E, 1)) : V.set(E, Ee + 1);
          }
        }
      }
    };
    return v(qn(dn)), ir.add(v), () => {
      for (var c of _)
        for (const b of [t, document]) {
          var d = (
            /** @type {Map<string, number>} */
            jt.get(b)
          ), E = (
            /** @type {number} */
            d.get(c)
          );
          --E == 0 ? (b.removeEventListener(c, xr), d.delete(c), d.size === 0 && jt.delete(b)) : d.set(c, E);
        }
      ir.delete(v), h !== r && h.parentNode?.removeChild(h);
    };
  });
  return sr.set(a, u), a;
}
let sr = /* @__PURE__ */ new WeakMap();
function Di(e, t) {
  const r = sr.get(e);
  return r ? (sr.delete(e), r(t)) : Promise.resolve();
}
var re, ue, J, ze, yt, kt, Ut;
class Pi {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, r = !0) {
    /** @type {TemplateNode} */
    te(this, "anchor");
    /** @type {Map<Batch, Key>} */
    p(this, re, /* @__PURE__ */ new Map());
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
    p(this, ue, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    p(this, J, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    p(this, ze, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    p(this, yt, !0);
    /**
     * @param {Batch} batch
     */
    p(this, kt, (t) => {
      if (s(this, re).has(t)) {
        var r = (
          /** @type {Key} */
          s(this, re).get(t)
        ), n = s(this, ue).get(r);
        if (n)
          yi(n), s(this, ze).delete(r);
        else {
          var i = s(this, J).get(r);
          i && (s(this, ue).set(r, i.effect), s(this, J).delete(r), i.fragment.lastChild.remove(), this.anchor.before(i.fragment), n = i.effect);
        }
        for (const [l, f] of s(this, re)) {
          if (s(this, re).delete(l), l === t)
            break;
          const o = s(this, J).get(f);
          o && (H(o.effect), s(this, J).delete(f));
        }
        for (const [l, f] of s(this, ue)) {
          if (l === r || s(this, ze).has(l)) continue;
          const o = () => {
            if (Array.from(s(this, re).values()).includes(l)) {
              var u = document.createDocumentFragment();
              sn(f, u), u.append(Lt()), s(this, J).set(l, { effect: f, fragment: u });
            } else
              H(f);
            s(this, ze).delete(l), s(this, ue).delete(l);
          };
          s(this, yt) || !n ? (s(this, ze).add(l), vt(f, o, !1)) : o();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    p(this, Ut, (t) => {
      s(this, re).delete(t);
      const r = Array.from(s(this, re).values());
      for (const [n, i] of s(this, J))
        r.includes(n) || (H(i.effect), s(this, J).delete(n));
    });
    this.anchor = t, g(this, yt, r);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, r) {
    var n = (
      /** @type {Batch} */
      x
    ), i = ci();
    if (r && !s(this, ue).has(t) && !s(this, J).has(t))
      if (i) {
        var l = document.createDocumentFragment(), f = Lt();
        l.append(f), s(this, J).set(t, {
          effect: _e(() => r(f)),
          fragment: l
        });
      } else
        s(this, ue).set(
          t,
          _e(() => r(this.anchor))
        );
    if (s(this, re).set(n, t), i) {
      for (const [o, a] of s(this, ue))
        o === t ? n.unskip_effect(a) : n.skip_effect(a);
      for (const [o, a] of s(this, J))
        o === t ? n.unskip_effect(a.effect) : n.skip_effect(a.effect);
      n.oncommit(s(this, kt)), n.ondiscard(s(this, Ut));
    } else
      s(this, kt).call(this, n);
  }
}
re = new WeakMap(), ue = new WeakMap(), J = new WeakMap(), ze = new WeakMap(), yt = new WeakMap(), kt = new WeakMap(), Ut = new WeakMap();
function qt(e, t, r = !1) {
  var n = new Pi(e), i = r ? st : 0;
  function l(f, o) {
    n.ensure(f, o);
  }
  $r(() => {
    var f = !1;
    t((o, a = 0) => {
      f = !0, l(a, o);
    }), f || l(-1, null);
  }, i);
}
function Fi(e, t) {
  pi(() => {
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
      const i = Qr("style");
      i.id = t.hash, i.textContent = t.code, n.appendChild(i);
    }
  });
}
const Ii = Symbol("is custom element"), Li = Symbol("is html");
function zi(e, t, r, n) {
  var i = Vi(e);
  i[t] !== (i[t] = r) && (r == null ? e.removeAttribute(t) : typeof r != "string" && Ui(e).includes(t) ? e[t] = r : e.setAttribute(t, r));
}
function Vi(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [Ii]: e.nodeName.includes("-"),
      [Li]: e.namespaceURI === Ar
    })
  );
}
var Sr = /* @__PURE__ */ new Map();
function Ui(e) {
  var t = e.getAttribute("is") || e.nodeName, r = Sr.get(t);
  if (r) return r;
  Sr.set(t, r = []);
  for (var n, i = e, l = Element.prototype; l !== i; ) {
    n = Nn(i);
    for (var f in n)
      n[f].set && r.push(f);
    i = qr(i);
  }
  return r;
}
function Tt(e, t, r, n) {
  var i = (
    /** @type {V} */
    n
  ), l = !0, f = () => (l && (l = !1, i = /** @type {V} */
  n), i), o;
  o = /** @type {V} */
  e[t], o === void 0 && n !== void 0 && (o = f());
  var a;
  return a = () => {
    var u = (
      /** @type {V} */
      e[t]
    );
    return u === void 0 ? f() : (l = !0, u);
  }, a;
}
const Yi = "5";
var jr;
typeof window < "u" && ((jr = window.__svelte ?? (window.__svelte = {})).v ?? (jr.v = /* @__PURE__ */ new Set())).add(Yi);
var Bi = /* @__PURE__ */ Ae('<div class="error svelte-1pugj8q"> </div>'), Ji = /* @__PURE__ */ Ae('<div class="card center svelte-1pugj8q"><p class="svelte-1pugj8q">Verify your identity using a passport or government-issued ID.</p> <button class="primary svelte-1pugj8q"> </button></div>'), Hi = /* @__PURE__ */ Ae('<pre class="output svelte-1pugj8q"> </pre>'), Gi = /* @__PURE__ */ Ae('<div class="card svelte-1pugj8q"><h3 class="svelte-1pugj8q">Verification Link</h3> <p class="svelte-1pugj8q">Open this link to complete verification:</p> <div class="link-row svelte-1pugj8q"><a target="_blank" rel="noopener" class="svelte-1pugj8q"> </a> <button class="small svelte-1pugj8q">Copy</button></div> <button class="primary svelte-1pugj8q"> </button> <!></div>'), Ki = /* @__PURE__ */ Ae('<pre class="output svelte-1pugj8q"> </pre>'), Wi = /* @__PURE__ */ Ae('<div class="card center success-bg svelte-1pugj8q"><div class="icon svelte-1pugj8q">✓</div> <h3 class="svelte-1pugj8q">Verified</h3> <p class="svelte-1pugj8q">Your identity has been successfully verified.</p> <!></div>'), Zi = /* @__PURE__ */ Ae('<div class="card center svelte-1pugj8q"><p class="svelte-1pugj8q">Something went wrong. Please try again.</p> <button class="primary svelte-1pugj8q">Retry</button></div>'), Qi = /* @__PURE__ */ Ae('<div class="rt-pv svelte-1pugj8q"><div class="header svelte-1pugj8q"><h2 class="svelte-1pugj8q">Passport Verification</h2> <span class="badge svelte-1pugj8q"> </span></div> <!> <!></div>');
const Xi = {
  hash: "svelte-1pugj8q",
  code: ".rt-pv.svelte-1pugj8q {font-family:system-ui, -apple-system, sans-serif;max-width:560px;margin:0 auto;padding:1.5rem;}.header.svelte-1pugj8q {display:flex;align-items:center;gap:0.75rem;margin-bottom:1.5rem;}.header.svelte-1pugj8q h2:where(.svelte-1pugj8q) {margin:0;font-size:1.5rem;}.badge.svelte-1pugj8q {background:#e0e7ff;color:#3730a3;padding:0.15rem 0.5rem;border-radius:9999px;font-size:0.75rem;}.card.svelte-1pugj8q {background:#fff;border:1px solid #e5e7eb;border-radius:0.75rem;padding:1.5rem;}.center.svelte-1pugj8q {text-align:center;}.success-bg.svelte-1pugj8q {background:#f0fdf4;border-color:#bbf7d0;}.icon.svelte-1pugj8q {font-size:2.5rem;color:#16a34a;margin-bottom:0.5rem;}.card.svelte-1pugj8q h3:where(.svelte-1pugj8q) {margin:0 0 0.5rem;}.card.svelte-1pugj8q p:where(.svelte-1pugj8q) {color:#4b5563;font-size:0.875rem;margin:0 0 1rem;line-height:1.5;}.primary.svelte-1pugj8q {padding:0.5rem 1.25rem;background:#4f46e5;color:#fff;border:none;border-radius:0.5rem;cursor:pointer;font-size:0.875rem;}.primary.svelte-1pugj8q:hover:not(:disabled) {background:#4338ca;}.primary.svelte-1pugj8q:disabled {opacity:0.5;cursor:not-allowed;}.small.svelte-1pugj8q {padding:0.25rem 0.6rem;background:#f3f4f6;border:1px solid #d1d5db;border-radius:0.375rem;cursor:pointer;font-size:0.75rem;}.link-row.svelte-1pugj8q {display:flex;align-items:center;gap:0.5rem;margin-bottom:1rem;padding:0.5rem;background:#f9fafb;border-radius:0.375rem;overflow:hidden;}.link-row.svelte-1pugj8q a:where(.svelte-1pugj8q) {font-size:0.8rem;color:#4f46e5;word-break:break-all;}.error.svelte-1pugj8q {background:#fef2f2;color:#991b1b;border:1px solid #fecaca;padding:0.75rem;border-radius:0.5rem;margin-bottom:1rem;font-size:0.875rem;}.output.svelte-1pugj8q {background:#f9fafb;border:1px solid #e5e7eb;border-radius:0.5rem;padding:0.75rem;margin-top:1rem;font-size:0.75rem;font-family:ui-monospace, monospace;overflow-x:auto;white-space:pre-wrap;text-align:left;}"
};
function $i(e, t) {
  Or(t, !0), Fi(e, Xi);
  let r = Tt(t, "extensionId", 3, "passport_verification"), n = Tt(t, "version", 3, "");
  Tt(t, "principal", 3, ""), Tt(t, "isAuthenticated", 3, !0);
  let i = /* @__PURE__ */ L("idle"), l = /* @__PURE__ */ L(""), f = /* @__PURE__ */ L(""), o = /* @__PURE__ */ L(null), a = /* @__PURE__ */ L(""), u = /* @__PURE__ */ L(!1);
  async function h(w, q = "") {
    const R = await t.backend.extension_sync_call(JSON.stringify({ extension_name: r(), function_name: w, args: q }));
    return JSON.parse(R);
  }
  async function _(w, q = "") {
    const R = await t.backend.extension_async_call(JSON.stringify({ extension_name: r(), function_name: w, args: q }));
    return JSON.parse(R);
  }
  async function v() {
    j(u, !0), j(a, "");
    try {
      const w = await h("get_current_application_id", "");
      if (j(f, w?.data?.application_id ?? w?.application_id ?? "", !0), !y(f)) {
        const R = await h("create_passport_identity", "");
        j(f, R?.data?.application_id ?? R?.application_id ?? "", !0);
      }
      const q = await _("get_verification_link", JSON.stringify({ application_id: y(f) }));
      j(l, q?.data?.link ?? q?.link ?? "", !0), j(i, y(l) ? "pending" : "error", !0), y(l) || j(a, "No verification link returned");
    } catch (w) {
      j(a, w?.message || String(w), !0), j(i, "error");
    } finally {
      j(u, !1);
    }
  }
  async function c() {
    j(u, !0), j(a, "");
    try {
      const w = await _("check_verification_status", JSON.stringify({ application_id: y(f) }));
      j(o, w?.data ?? w, !0);
      const q = y(o)?.status ?? y(o)?.verification_status ?? "";
      (q === "verified" || q === "approved") && j(i, "verified");
    } catch (w) {
      j(a, w?.message || String(w), !0);
    } finally {
      j(u, !1);
    }
  }
  function d() {
    y(l) && navigator.clipboard.writeText(y(l));
  }
  var E = Qi(), b = F(E), V = ae(F(b), 2), Ee = F(V), He = ae(b, 2);
  {
    var hn = (w) => {
      var q = Bi(), R = F(q);
      Ke(() => Me(R, y(a))), xe(w, q);
    };
    qt(He, (w) => {
      y(a) && w(hn);
    });
  }
  var vn = ae(He, 2);
  {
    var _n = (w) => {
      var q = Ji(), R = ae(F(q), 2), Re = F(R);
      Ke(() => {
        R.disabled = y(u), Me(Re, y(u) ? "Generating…" : "Start Verification");
      }), St("click", R, v), xe(w, q);
    }, pn = (w) => {
      var q = Gi(), R = ae(F(q), 4), Re = F(R), ut = F(Re), xt = ae(Re, 2), Ge = ae(R, 2), Jt = F(Ge), bn = ae(Ge, 2);
      {
        var wn = (Ht) => {
          var vr = Hi(), yn = F(vr);
          Ke((kn) => Me(yn, kn), [() => JSON.stringify(y(o), null, 2)]), xe(Ht, vr);
        };
        qt(bn, (Ht) => {
          y(o) && Ht(wn);
        });
      }
      Ke(() => {
        zi(Re, "href", y(l)), Me(ut, y(l)), Ge.disabled = y(u), Me(Jt, y(u) ? "Checking…" : "Check Status");
      }), St("click", xt, d), St("click", Ge, c), xe(w, q);
    }, gn = (w) => {
      var q = Wi(), R = ae(F(q), 6);
      {
        var Re = (ut) => {
          var xt = Ki(), Ge = F(xt);
          Ke((Jt) => Me(Ge, Jt), [() => JSON.stringify(y(o), null, 2)]), xe(ut, xt);
        };
        qt(R, (ut) => {
          y(o) && ut(Re);
        });
      }
      xe(w, q);
    }, mn = (w) => {
      var q = Zi(), R = ae(F(q), 2);
      St("click", R, () => {
        j(i, "idle"), j(a, "");
      }), xe(w, q);
    };
    qt(vn, (w) => {
      y(i) === "idle" ? w(_n) : y(i) === "pending" ? w(pn, 1) : y(i) === "verified" ? w(gn, 2) : y(i) === "error" && w(mn, 3);
    });
  }
  Ke(() => Me(Ee, `v${n() ?? ""}`)), xe(e, E), Mr();
}
Ti(["click"]);
function rs(e, t) {
  const r = Mi($i, { target: e, props: t });
  return {
    unmount() {
      try {
        Di(r);
      } catch {
      }
    }
  };
}
export {
  rs as default
};
