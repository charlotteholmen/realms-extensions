var Dn = Object.defineProperty;
var gr = (e) => {
  throw TypeError(e);
};
var Fn = (e, t, r) => t in e ? Dn(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var te = (e, t, r) => Fn(e, typeof t != "symbol" ? t + "" : t, r), Ht = (e, t, r) => t.has(e) || gr("Cannot " + r);
var s = (e, t, r) => (Ht(e, t, "read from private field"), r ? r.call(e) : t.get(e)), p = (e, t, r) => t.has(e) ? gr("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), g = (e, t, r, n) => (Ht(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r), k = (e, t, r) => (Ht(e, t, "access private method"), r);
var Pn = Array.isArray, In = Array.prototype.indexOf, rt = Array.prototype.includes, jn = Array.from, Ln = Object.defineProperty, ut = Object.getOwnPropertyDescriptor, zn = Object.getOwnPropertyDescriptors, Bn = Object.prototype, Un = Array.prototype, Nr = Object.getPrototypeOf, mr = Object.isExtensible;
const Vn = () => {
};
function Yn(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function Cr() {
  var e, t, r = new Promise((n, i) => {
    e = n, t = i;
  });
  return { promise: r, resolve: e, reject: t };
}
const F = 2, dt = 4, Ut = 8, Or = 1 << 24, he = 16, de = 32, Re = 64, Jt = 128, Z = 512, M = 1024, D = 2048, _e = 4096, Q = 8192, fe = 16384, Ye = 32768, wr = 1 << 25, nt = 65536, Zt = 1 << 17, qn = 1 << 18, lt = 1 << 19, Hn = 1 << 20, Ue = 65536, Ft = 1 << 21, _t = 1 << 22, Ae = 1 << 23, Gt = Symbol("$state"), Gn = Symbol(""), me = new class extends Error {
  constructor() {
    super(...arguments);
    te(this, "name", "StaleReactionError");
    te(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
function Wn() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Kn(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Jn() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Zn(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Qn() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Xn() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function $n() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function ei() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function ti() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
const ri = 1, ni = 2, N = Symbol(), Dr = "http://www.w3.org/1999/xhtml";
function ii() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function si() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function Fr(e) {
  return e === this.v;
}
let $ = null;
function it(e) {
  $ = e;
}
function Pr(e, t = !1, r) {
  $ = {
    p: $,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    r: (
      /** @type {Effect} */
      w
    ),
    l: null
  };
}
function Ir(e) {
  var t = (
    /** @type {ComponentContext} */
    $
  ), r = t.e;
  if (r !== null) {
    t.e = null;
    for (var n of r)
      tn(n);
  }
  return t.i = !0, $ = t.p, /** @type {T} */
  {};
}
function jr() {
  return !0;
}
let We = [];
function li() {
  var e = We;
  We = [], Yn(e);
}
function Ze(e) {
  if (We.length === 0) {
    var t = We;
    queueMicrotask(() => {
      t === We && li();
    });
  }
  We.push(e);
}
function Lr(e) {
  var t = w;
  if (t === null)
    return m.f |= Ae, e;
  if ((t.f & Ye) === 0 && (t.f & dt) === 0)
    throw e;
  Se(e, t);
}
function Se(e, t) {
  for (; t !== null; ) {
    if ((t.f & Jt) !== 0) {
      if ((t.f & Ye) === 0)
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
const fi = -7169;
function A(e, t) {
  e.f = e.f & fi | t;
}
function fr(e) {
  (e.f & Z) !== 0 || e.deps === null ? A(e, M) : A(e, _e);
}
function zr(e) {
  if (e !== null)
    for (const t of e)
      (t.f & F) === 0 || (t.f & Ue) === 0 || (t.f ^= Ue, zr(
        /** @type {Derived} */
        t.deps
      ));
}
function Br(e, t, r) {
  (e.f & D) !== 0 ? t.add(e) : (e.f & _e) !== 0 && r.add(e), zr(e.deps), A(e, M);
}
const Ce = /* @__PURE__ */ new Set();
let E = null, se = null, Qt = null, Wt = !1, Ke = null, At = null;
var br = 0;
let ai = 1;
var Qe, Xe, Fe, we, ae, gt, U, mt, ke, be, oe, $e, et, Pe, R, Rt, Ur, Mt, Xt, Nt, oi;
const Lt = class Lt {
  constructor() {
    p(this, R);
    te(this, "id", ai++);
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
    p(this, Qe, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    p(this, Xe, /* @__PURE__ */ new Set());
    /**
     * Callbacks that should run only when a fork is committed.
     * @type {Set<(batch: Batch) => void>}
     */
    p(this, Fe, /* @__PURE__ */ new Set());
    /**
     * Async effects that are currently in flight
     * @type {Map<Effect, number>}
     */
    p(this, we, /* @__PURE__ */ new Map());
    /**
     * Async effects that are currently in flight, _not_ inside a pending boundary
     * @type {Map<Effect, number>}
     */
    p(this, ae, /* @__PURE__ */ new Map());
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
    p(this, U, []);
    /**
     * Effects created while this batch was active.
     * @type {Effect[]}
     */
    p(this, mt, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    p(this, ke, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    p(this, be, /* @__PURE__ */ new Set());
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
    p(this, $e, /* @__PURE__ */ new Set());
    te(this, "is_fork", !1);
    p(this, et, !1);
    /** @type {Set<Batch>} */
    p(this, Pe, /* @__PURE__ */ new Set());
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(t) {
    s(this, oe).has(t) || s(this, oe).set(t, { d: [], m: [] }), s(this, $e).delete(t);
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
        A(i, D), r(i);
      for (i of n.m)
        A(i, _e), r(i);
    }
    s(this, $e).add(t);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Value} source
   * @param {any} value
   * @param {boolean} [is_derived]
   */
  capture(t, r, n = !1) {
    t.v !== N && !this.previous.has(t) && this.previous.set(t, t.v), (t.f & Ae) === 0 && (this.current.set(t, [r, n]), se?.set(t, r)), this.is_fork || (t.v = r);
  }
  activate() {
    E = this;
  }
  deactivate() {
    E = null, se = null;
  }
  flush() {
    try {
      Wt = !0, E = this, k(this, R, Mt).call(this);
    } finally {
      br = 0, Qt = null, Ke = null, At = null, Wt = !1, E = null, se = null, ze.clear();
    }
  }
  discard() {
    for (const t of s(this, Xe)) t(this);
    s(this, Xe).clear(), s(this, Fe).clear(), Ce.delete(this);
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
    let n = s(this, we).get(r) ?? 0;
    if (s(this, we).set(r, n + 1), t) {
      let i = s(this, ae).get(r) ?? 0;
      s(this, ae).set(r, i + 1);
    }
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   * @param {boolean} skip - whether to skip updates (because this is triggered by a stale reaction)
   */
  decrement(t, r, n) {
    let i = s(this, we).get(r) ?? 0;
    if (i === 1 ? s(this, we).delete(r) : s(this, we).set(r, i - 1), t) {
      let l = s(this, ae).get(r) ?? 0;
      l === 1 ? s(this, ae).delete(r) : s(this, ae).set(r, l - 1);
    }
    s(this, et) || n || (g(this, et, !0), Ze(() => {
      g(this, et, !1), this.flush();
    }));
  }
  /**
   * @param {Set<Effect>} dirty_effects
   * @param {Set<Effect>} maybe_dirty_effects
   */
  transfer_effects(t, r) {
    for (const n of t)
      s(this, ke).add(n);
    for (const n of r)
      s(this, be).add(n);
    t.clear(), r.clear();
  }
  /** @param {(batch: Batch) => void} fn */
  oncommit(t) {
    s(this, Qe).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    s(this, Xe).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  on_fork_commit(t) {
    s(this, Fe).add(t);
  }
  run_fork_commit_callbacks() {
    for (const t of s(this, Fe)) t(this);
    s(this, Fe).clear();
  }
  settled() {
    return (s(this, gt) ?? g(this, gt, Cr())).promise;
  }
  static ensure() {
    if (E === null) {
      const t = E = new Lt();
      Wt || (Ce.add(E), Ze(() => {
        E === t && t.flush();
      }));
    }
    return E;
  }
  apply() {
    {
      se = null;
      return;
    }
  }
  /**
   *
   * @param {Effect} effect
   */
  schedule(t) {
    if (Qt = t, t.b?.is_pending && (t.f & (dt | Ut | Or)) !== 0 && (t.f & Ye) === 0) {
      t.b.defer_effect(t);
      return;
    }
    for (var r = t; r.parent !== null; ) {
      r = r.parent;
      var n = r.f;
      if (Ke !== null && r === w && (m === null || (m.f & F) === 0))
        return;
      if ((n & (Re | de)) !== 0) {
        if ((n & M) === 0)
          return;
        r.f ^= M;
      }
    }
    s(this, U).push(r);
  }
};
Qe = new WeakMap(), Xe = new WeakMap(), Fe = new WeakMap(), we = new WeakMap(), ae = new WeakMap(), gt = new WeakMap(), U = new WeakMap(), mt = new WeakMap(), ke = new WeakMap(), be = new WeakMap(), oe = new WeakMap(), $e = new WeakMap(), et = new WeakMap(), Pe = new WeakMap(), R = new WeakSet(), Rt = function() {
  return this.is_fork || s(this, ae).size > 0;
}, Ur = function() {
  for (const n of s(this, Pe))
    for (const i of s(n, ae).keys()) {
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
}, Mt = function() {
  var o;
  if (br++ > 1e3 && (Ce.delete(this), ui()), !k(this, R, Rt).call(this)) {
    for (const f of s(this, ke))
      s(this, be).delete(f), A(f, D), this.schedule(f);
    for (const f of s(this, be))
      A(f, _e), this.schedule(f);
  }
  const t = s(this, U);
  g(this, U, []), this.apply();
  var r = Ke = [], n = [], i = At = [];
  for (const f of t)
    try {
      k(this, R, Xt).call(this, f, r, n);
    } catch (u) {
      throw qr(f), u;
    }
  if (E = null, i.length > 0) {
    var l = Lt.ensure();
    for (const f of i)
      l.schedule(f);
  }
  if (Ke = null, At = null, k(this, R, Rt).call(this) || k(this, R, Ur).call(this)) {
    k(this, R, Nt).call(this, n), k(this, R, Nt).call(this, r);
    for (const [f, u] of s(this, oe))
      Yr(f, u);
  } else {
    s(this, we).size === 0 && Ce.delete(this), s(this, ke).clear(), s(this, be).clear();
    for (const f of s(this, Qe)) f(this);
    s(this, Qe).clear(), yr(n), yr(r), s(this, gt)?.resolve();
  }
  var a = (
    /** @type {Batch | null} */
    /** @type {unknown} */
    E
  );
  if (s(this, U).length > 0) {
    const f = a ?? (a = this);
    s(f, U).push(...s(this, U).filter((u) => !s(f, U).includes(u)));
  }
  a !== null && (Ce.add(a), k(o = a, R, Mt).call(o));
}, /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
Xt = function(t, r, n) {
  t.f ^= M;
  for (var i = t.first; i !== null; ) {
    var l = i.f, a = (l & (de | Re)) !== 0, o = a && (l & M) !== 0, f = o || (l & Q) !== 0 || s(this, oe).has(i);
    if (!f && i.fn !== null) {
      a ? i.f ^= M : (l & dt) !== 0 ? r.push(i) : Et(i) && ((l & he) !== 0 && s(this, be).add(i), st(i));
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
Nt = function(t) {
  for (var r = 0; r < t.length; r += 1)
    Br(t[r], s(this, ke), s(this, be));
}, oi = function() {
  var d, v, _;
  for (const c of Ce) {
    var t = c.id < this.id, r = [];
    for (const [h, [x, y]] of this.current) {
      if (c.current.has(h)) {
        var n = (
          /** @type {[any, boolean]} */
          c.current.get(h)[0]
        );
        if (t && x !== n)
          c.current.set(h, [x, y]);
        else
          continue;
      }
      r.push(h);
    }
    var i = [...c.current.keys()].filter((h) => !this.current.has(h));
    if (i.length === 0)
      t && c.discard();
    else if (r.length > 0) {
      if (t)
        for (const h of s(this, $e))
          c.unskip_effect(h, (x) => {
            var y;
            (x.f & (he | _t)) !== 0 ? c.schedule(x) : k(y = c, R, Nt).call(y, [x]);
          });
      c.activate();
      var l = /* @__PURE__ */ new Set(), a = /* @__PURE__ */ new Map();
      for (var o of r)
        Vr(o, i, l, a);
      a = /* @__PURE__ */ new Map();
      var f = [...c.current.keys()].filter(
        (h) => this.current.has(h) ? (
          /** @type {[any, boolean]} */
          this.current.get(h)[0] !== h
        ) : !0
      );
      for (const h of s(this, mt))
        (h.f & (fe | Q | Zt)) === 0 && ar(h, f, a) && ((h.f & (_t | he)) !== 0 ? (A(h, D), c.schedule(h)) : s(c, ke).add(h));
      if (s(c, U).length > 0) {
        c.apply();
        for (var u of s(c, U))
          k(d = c, R, Xt).call(d, u, [], []);
        g(c, U, []);
      }
      c.deactivate();
    }
  }
  for (const c of Ce)
    s(c, Pe).has(this) && (s(c, Pe).delete(this), s(c, Pe).size === 0 && !k(v = c, R, Rt).call(v) && (c.activate(), k(_ = c, R, Mt).call(_)));
};
let Ve = Lt;
function ui() {
  try {
    Qn();
  } catch (e) {
    Se(e, Qt);
  }
}
let pe = null;
function yr(e) {
  var t = e.length;
  if (t !== 0) {
    for (var r = 0; r < t; ) {
      var n = e[r++];
      if ((n.f & (fe | Q)) === 0 && Et(n) && (pe = /* @__PURE__ */ new Set(), st(n), n.deps === null && n.first === null && n.nodes === null && n.teardown === null && n.ac === null && sn(n), pe?.size > 0)) {
        ze.clear();
        for (const i of pe) {
          if ((i.f & (fe | Q)) !== 0) continue;
          const l = [i];
          let a = i.parent;
          for (; a !== null; )
            pe.has(a) && (pe.delete(a), l.push(a)), a = a.parent;
          for (let o = l.length - 1; o >= 0; o--) {
            const f = l[o];
            (f.f & (fe | Q)) === 0 && st(f);
          }
        }
        pe.clear();
      }
    }
    pe = null;
  }
}
function Vr(e, t, r, n) {
  if (!r.has(e) && (r.add(e), e.reactions !== null))
    for (const i of e.reactions) {
      const l = i.f;
      (l & F) !== 0 ? Vr(
        /** @type {Derived} */
        i,
        t,
        r,
        n
      ) : (l & (_t | he)) !== 0 && (l & D) === 0 && ar(i, t, n) && (A(i, D), or(
        /** @type {Effect} */
        i
      ));
    }
}
function ar(e, t, r) {
  const n = r.get(e);
  if (n !== void 0) return n;
  if (e.deps !== null)
    for (const i of e.deps) {
      if (rt.call(t, i))
        return !0;
      if ((i.f & F) !== 0 && ar(
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
  E.schedule(e);
}
function Yr(e, t) {
  if (!((e.f & de) !== 0 && (e.f & M) !== 0)) {
    (e.f & D) !== 0 ? t.d.push(e) : (e.f & _e) !== 0 && t.m.push(e), A(e, M);
    for (var r = e.first; r !== null; )
      Yr(r, t), r = r.next;
  }
}
function qr(e) {
  A(e, M);
  for (var t = e.first; t !== null; )
    qr(t), t = t.next;
}
function ci(e) {
  let t = 0, r = Vt(0), n;
  return () => {
    cr() && (b(r), Di(() => (t === 0 && (n = zi(() => e(() => ct(r)))), t += 1, () => {
      Ze(() => {
        t -= 1, t === 0 && (n?.(), n = void 0, ct(r));
      });
    })));
  };
}
var hi = nt | lt;
function di(e, t, r, n) {
  new _i(e, t, r, n);
}
var W, lr, K, Ie, j, J, P, V, ye, je, Te, tt, wt, bt, xe, zt, T, vi, pi, gi, $t, Ct, Ot, er, tr;
class _i {
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
    p(this, W);
    /** @type {TemplateNode | null} */
    p(this, lr, null);
    /** @type {BoundaryProps} */
    p(this, K);
    /** @type {((anchor: Node) => void)} */
    p(this, Ie);
    /** @type {Effect} */
    p(this, j);
    /** @type {Effect | null} */
    p(this, J, null);
    /** @type {Effect | null} */
    p(this, P, null);
    /** @type {Effect | null} */
    p(this, V, null);
    /** @type {DocumentFragment | null} */
    p(this, ye, null);
    p(this, je, 0);
    p(this, Te, 0);
    p(this, tt, !1);
    /** @type {Set<Effect>} */
    p(this, wt, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    p(this, bt, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    p(this, xe, null);
    p(this, zt, ci(() => (g(this, xe, Vt(s(this, je))), () => {
      g(this, xe, null);
    })));
    g(this, W, t), g(this, K, r), g(this, Ie, (l) => {
      var a = (
        /** @type {Effect} */
        w
      );
      a.b = this, a.f |= Jt, n(l);
    }), this.parent = /** @type {Effect} */
    w.b, this.transform_error = i ?? this.parent?.transform_error ?? ((l) => l), g(this, j, rn(() => {
      k(this, T, $t).call(this);
    }, hi));
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    Br(t, s(this, wt), s(this, bt));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!s(this, K).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  update_pending_count(t, r) {
    k(this, T, er).call(this, t, r), g(this, je, s(this, je) + t), !(!s(this, xe) || s(this, tt)) && (g(this, tt, !0), Ze(() => {
      g(this, tt, !1), s(this, xe) && It(s(this, xe), s(this, je));
    }));
  }
  get_effect_pending() {
    return s(this, zt).call(this), b(
      /** @type {Source<number>} */
      s(this, xe)
    );
  }
  /** @param {unknown} error */
  error(t) {
    if (!s(this, K).onerror && !s(this, K).failed)
      throw t;
    E?.is_fork ? (s(this, J) && E.skip_effect(s(this, J)), s(this, P) && E.skip_effect(s(this, P)), s(this, V) && E.skip_effect(s(this, V)), E.on_fork_commit(() => {
      k(this, T, tr).call(this, t);
    })) : k(this, T, tr).call(this, t);
  }
}
W = new WeakMap(), lr = new WeakMap(), K = new WeakMap(), Ie = new WeakMap(), j = new WeakMap(), J = new WeakMap(), P = new WeakMap(), V = new WeakMap(), ye = new WeakMap(), je = new WeakMap(), Te = new WeakMap(), tt = new WeakMap(), wt = new WeakMap(), bt = new WeakMap(), xe = new WeakMap(), zt = new WeakMap(), T = new WeakSet(), vi = function() {
  try {
    g(this, J, ge(() => s(this, Ie).call(this, s(this, W))));
  } catch (t) {
    this.error(t);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
pi = function(t) {
  const r = s(this, K).failed;
  r && g(this, V, ge(() => {
    r(
      s(this, W),
      () => t,
      () => () => {
      }
    );
  }));
}, gi = function() {
  const t = s(this, K).pending;
  t && (this.is_pending = !0, g(this, P, ge(() => t(s(this, W)))), Ze(() => {
    var r = g(this, ye, document.createDocumentFragment()), n = vt();
    r.append(n), g(this, J, k(this, T, Ot).call(this, () => ge(() => s(this, Ie).call(this, n)))), s(this, Te) === 0 && (s(this, W).before(r), g(this, ye, null), ht(
      /** @type {Effect} */
      s(this, P),
      () => {
        g(this, P, null);
      }
    ), k(this, T, Ct).call(
      this,
      /** @type {Batch} */
      E
    ));
  }));
}, $t = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), g(this, Te, 0), g(this, je, 0), g(this, J, ge(() => {
      s(this, Ie).call(this, s(this, W));
    })), s(this, Te) > 0) {
      var t = g(this, ye, document.createDocumentFragment());
      an(s(this, J), t);
      const r = (
        /** @type {(anchor: Node) => void} */
        s(this, K).pending
      );
      g(this, P, ge(() => r(s(this, W))));
    } else
      k(this, T, Ct).call(
        this,
        /** @type {Batch} */
        E
      );
  } catch (r) {
    this.error(r);
  }
}, /**
 * @param {Batch} batch
 */
Ct = function(t) {
  this.is_pending = !1, t.transfer_effects(s(this, wt), s(this, bt));
}, /**
 * @template T
 * @param {() => T} fn
 */
Ot = function(t) {
  var r = w, n = m, i = $;
  ve(s(this, j)), ee(s(this, j)), it(s(this, j).ctx);
  try {
    return Ve.ensure(), t();
  } catch (l) {
    return Lr(l), null;
  } finally {
    ve(r), ee(n), it(i);
  }
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 * @param {Batch} batch
 */
er = function(t, r) {
  var n;
  if (!this.has_pending_snippet()) {
    this.parent && k(n = this.parent, T, er).call(n, t, r);
    return;
  }
  g(this, Te, s(this, Te) + t), s(this, Te) === 0 && (k(this, T, Ct).call(this, r), s(this, P) && ht(s(this, P), () => {
    g(this, P, null);
  }), s(this, ye) && (s(this, W).before(s(this, ye)), g(this, ye, null)));
}, /**
 * @param {unknown} error
 */
tr = function(t) {
  s(this, J) && (q(s(this, J)), g(this, J, null)), s(this, P) && (q(s(this, P)), g(this, P, null)), s(this, V) && (q(s(this, V)), g(this, V, null));
  var r = s(this, K).onerror;
  let n = s(this, K).failed;
  var i = !1, l = !1;
  const a = () => {
    if (i) {
      si();
      return;
    }
    i = !0, l && ti(), s(this, V) !== null && ht(s(this, V), () => {
      g(this, V, null);
    }), k(this, T, Ot).call(this, () => {
      k(this, T, $t).call(this);
    });
  }, o = (f) => {
    try {
      l = !0, r?.(f, a), l = !1;
    } catch (u) {
      Se(u, s(this, j) && s(this, j).parent);
    }
    n && g(this, V, k(this, T, Ot).call(this, () => {
      try {
        return ge(() => {
          var u = (
            /** @type {Effect} */
            w
          );
          u.b = this, u.f |= Jt, n(
            s(this, W),
            () => f,
            () => a
          );
        });
      } catch (u) {
        return Se(
          u,
          /** @type {Effect} */
          s(this, j).parent
        ), null;
      }
    }));
  };
  Ze(() => {
    var f;
    try {
      f = this.transform_error(t);
    } catch (u) {
      Se(u, s(this, j) && s(this, j).parent);
      return;
    }
    f !== null && typeof f == "object" && typeof /** @type {any} */
    f.then == "function" ? f.then(
      o,
      /** @param {unknown} e */
      (u) => Se(u, s(this, j) && s(this, j).parent)
    ) : o(f);
  });
};
function mi(e, t, r, n) {
  const i = Gr;
  var l = e.filter((_) => !_.settled);
  if (r.length === 0 && l.length === 0) {
    n(t.map(i));
    return;
  }
  var a = (
    /** @type {Effect} */
    w
  ), o = wi(), f = l.length === 1 ? l[0].promise : l.length > 1 ? Promise.all(l.map((_) => _.promise)) : null;
  function u(_) {
    o();
    try {
      n(_);
    } catch (c) {
      (a.f & fe) === 0 && Se(c, a);
    }
    Pt();
  }
  if (r.length === 0) {
    f.then(() => u(t.map(i)));
    return;
  }
  var d = Hr();
  function v() {
    Promise.all(r.map((_) => /* @__PURE__ */ bi(_))).then((_) => u([...t.map(i), ..._])).catch((_) => Se(_, a)).finally(() => d());
  }
  f ? f.then(() => {
    o(), v(), Pt();
  }) : v();
}
function wi() {
  var e = (
    /** @type {Effect} */
    w
  ), t = m, r = $, n = (
    /** @type {Batch} */
    E
  );
  return function(l = !0) {
    ve(e), ee(t), it(r), l && (e.f & fe) === 0 && (n?.activate(), n?.apply());
  };
}
function Pt(e = !0) {
  ve(null), ee(null), it(null), e && E?.deactivate();
}
function Hr() {
  var e = (
    /** @type {Effect} */
    w
  ), t = (
    /** @type {Boundary} */
    e.b
  ), r = (
    /** @type {Batch} */
    E
  ), n = t.is_rendered();
  return t.update_pending_count(1, r), r.increment(n, e), (i = !1) => {
    t.update_pending_count(-1, r), r.decrement(n, e, i);
  };
}
// @__NO_SIDE_EFFECTS__
function Gr(e) {
  var t = F | D;
  return w !== null && (w.f |= lt), {
    ctx: $,
    deps: null,
    effects: null,
    equals: Fr,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      N
    ),
    wv: 0,
    parent: w,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function bi(e, t, r) {
  let n = (
    /** @type {Effect | null} */
    w
  );
  n === null && Wn();
  var i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), l = Vt(
    /** @type {V} */
    N
  ), a = !m, o = /* @__PURE__ */ new Map();
  return Oi(() => {
    var f = (
      /** @type {Effect} */
      w
    ), u = Cr();
    i = u.promise;
    try {
      Promise.resolve(e()).then(u.resolve, u.reject).finally(Pt);
    } catch (c) {
      u.reject(c), Pt();
    }
    var d = (
      /** @type {Batch} */
      E
    );
    if (a) {
      if ((f.f & Ye) !== 0)
        var v = Hr();
      if (
        /** @type {Boundary} */
        n.b.is_rendered()
      )
        o.get(d)?.reject(me), o.delete(d);
      else {
        for (const c of o.values())
          c.reject(me);
        o.clear();
      }
      o.set(d, u);
    }
    const _ = (c, h = void 0) => {
      if (v) {
        var x = h === me;
        v(x);
      }
      if (!(h === me || (f.f & fe) !== 0)) {
        if (d.activate(), h)
          l.f |= Ae, It(l, h);
        else {
          (l.f & Ae) !== 0 && (l.f ^= Ae), It(l, c);
          for (const [y, z] of o) {
            if (o.delete(y), y === d) break;
            z.reject(me);
          }
        }
        d.deactivate();
      }
    };
    u.promise.then(_, (c) => _(null, c || "unknown"));
  }), Ni(() => {
    for (const f of o.values())
      f.reject(me);
  }), new Promise((f) => {
    function u(d) {
      function v() {
        d === i ? f(l) : u(i);
      }
      d.then(v, v);
    }
    u(i);
  });
}
// @__NO_SIDE_EFFECTS__
function He(e) {
  const t = /* @__PURE__ */ Gr(e);
  return on(t), t;
}
function yi(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var r = 0; r < t.length; r += 1)
      q(
        /** @type {Effect} */
        t[r]
      );
  }
}
function ur(e) {
  var t, r = w, n = e.parent;
  if (!Me && n !== null && (n.f & (fe | Q)) !== 0)
    return ii(), e.v;
  ve(n);
  try {
    e.f &= ~Ue, yi(e), t = dn(e);
  } finally {
    ve(r);
  }
  return t;
}
function Wr(e) {
  var t = ur(e);
  if (!e.equals(t) && (e.wv = cn(), (!E?.is_fork || e.deps === null) && (E !== null ? E.capture(e, t, !0) : e.v = t, e.deps === null))) {
    A(e, M);
    return;
  }
  Me || (se !== null ? (cr() || E?.is_fork) && se.set(e, t) : fr(e));
}
function xi(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      (t.teardown || t.ac) && (t.teardown?.(), t.ac?.abort(me), t.teardown = Vn, t.ac = null, pt(t, 0), hr(t));
}
function Kr(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      t.teardown && st(t);
}
let rr = /* @__PURE__ */ new Set();
const ze = /* @__PURE__ */ new Map();
let Jr = !1;
function Vt(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Fr,
    rv: 0,
    wv: 0
  };
  return r;
}
// @__NO_SIDE_EFFECTS__
function ne(e, t) {
  const r = Vt(e);
  return on(r), r;
}
function ce(e, t, r = !1) {
  m !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!le || (m.f & Zt) !== 0) && jr() && (m.f & (F | he | _t | Zt)) !== 0 && (X === null || !rt.call(X, e)) && ei();
  let n = r ? Je(t) : t;
  return It(e, n, At);
}
function It(e, t, r = null) {
  if (!e.equals(t)) {
    ze.set(e, Me ? t : e.v);
    var n = Ve.ensure();
    if (n.capture(e, t), (e.f & F) !== 0) {
      const i = (
        /** @type {Derived} */
        e
      );
      (e.f & D) !== 0 && ur(i), se === null && fr(i);
    }
    e.wv = cn(), Zr(e, D, r), w !== null && (w.f & M) !== 0 && (w.f & (de | Re)) === 0 && (G === null ? ji([e]) : G.push(e)), !n.is_fork && rr.size > 0 && !Jr && Ei();
  }
  return t;
}
function Ei() {
  Jr = !1;
  for (const e of rr)
    (e.f & M) !== 0 && A(e, _e), Et(e) && st(e);
  rr.clear();
}
function ct(e) {
  ce(e, e.v + 1);
}
function Zr(e, t, r) {
  var n = e.reactions;
  if (n !== null)
    for (var i = n.length, l = 0; l < i; l++) {
      var a = n[l], o = a.f, f = (o & D) === 0;
      if (f && A(a, t), (o & F) !== 0) {
        var u = (
          /** @type {Derived} */
          a
        );
        se?.delete(u), (o & Ue) === 0 && (o & Z && (w === null || (w.f & Ft) === 0) && (a.f |= Ue), Zr(u, _e, r));
      } else if (f) {
        var d = (
          /** @type {Effect} */
          a
        );
        (o & he) !== 0 && pe !== null && pe.add(d), r !== null ? r.push(d) : or(d);
      }
    }
}
function Je(e) {
  if (typeof e != "object" || e === null || Gt in e)
    return e;
  const t = Nr(e);
  if (t !== Bn && t !== Un)
    return e;
  var r = /* @__PURE__ */ new Map(), n = Pn(e), i = /* @__PURE__ */ ne(0), l = Be, a = (o) => {
    if (Be === l)
      return o();
    var f = m, u = Be;
    ee(null), Tr(l);
    var d = o();
    return ee(f), Tr(u), d;
  };
  return n && r.set("length", /* @__PURE__ */ ne(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(o, f, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && Xn();
        var d = r.get(f);
        return d === void 0 ? a(() => {
          var v = /* @__PURE__ */ ne(u.value);
          return r.set(f, v), v;
        }) : ce(d, u.value, !0), !0;
      },
      deleteProperty(o, f) {
        var u = r.get(f);
        if (u === void 0) {
          if (f in o) {
            const d = a(() => /* @__PURE__ */ ne(N));
            r.set(f, d), ct(i);
          }
        } else
          ce(u, N), ct(i);
        return !0;
      },
      get(o, f, u) {
        if (f === Gt)
          return e;
        var d = r.get(f), v = f in o;
        if (d === void 0 && (!v || ut(o, f)?.writable) && (d = a(() => {
          var c = Je(v ? o[f] : N), h = /* @__PURE__ */ ne(c);
          return h;
        }), r.set(f, d)), d !== void 0) {
          var _ = b(d);
          return _ === N ? void 0 : _;
        }
        return Reflect.get(o, f, u);
      },
      getOwnPropertyDescriptor(o, f) {
        var u = Reflect.getOwnPropertyDescriptor(o, f);
        if (u && "value" in u) {
          var d = r.get(f);
          d && (u.value = b(d));
        } else if (u === void 0) {
          var v = r.get(f), _ = v?.v;
          if (v !== void 0 && _ !== N)
            return {
              enumerable: !0,
              configurable: !0,
              value: _,
              writable: !0
            };
        }
        return u;
      },
      has(o, f) {
        if (f === Gt)
          return !0;
        var u = r.get(f), d = u !== void 0 && u.v !== N || Reflect.has(o, f);
        if (u !== void 0 || w !== null && (!d || ut(o, f)?.writable)) {
          u === void 0 && (u = a(() => {
            var _ = d ? Je(o[f]) : N, c = /* @__PURE__ */ ne(_);
            return c;
          }), r.set(f, u));
          var v = b(u);
          if (v === N)
            return !1;
        }
        return d;
      },
      set(o, f, u, d) {
        var v = r.get(f), _ = f in o;
        if (n && f === "length")
          for (var c = u; c < /** @type {Source<number>} */
          v.v; c += 1) {
            var h = r.get(c + "");
            h !== void 0 ? ce(h, N) : c in o && (h = a(() => /* @__PURE__ */ ne(N)), r.set(c + "", h));
          }
        if (v === void 0)
          (!_ || ut(o, f)?.writable) && (v = a(() => /* @__PURE__ */ ne(void 0)), ce(v, Je(u)), r.set(f, v));
        else {
          _ = v.v !== N;
          var x = a(() => Je(u));
          ce(v, x);
        }
        var y = Reflect.getOwnPropertyDescriptor(o, f);
        if (y?.set && y.set.call(d, u), !_) {
          if (n && typeof f == "string") {
            var z = (
              /** @type {Source<number>} */
              r.get("length")
            ), Ee = Number(f);
            Number.isInteger(Ee) && Ee >= z.v && ce(z, Ee + 1);
          }
          ct(i);
        }
        return !0;
      },
      ownKeys(o) {
        b(i);
        var f = Reflect.ownKeys(o).filter((v) => {
          var _ = r.get(v);
          return _ === void 0 || _.v !== N;
        });
        for (var [u, d] of r)
          d.v !== N && !(u in o) && f.push(u);
        return f;
      },
      setPrototypeOf() {
        $n();
      }
    }
  );
}
var xr, Qr, Xr, $r;
function ki() {
  if (xr === void 0) {
    xr = window, Qr = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, r = Text.prototype;
    Xr = ut(t, "firstChild").get, $r = ut(t, "nextSibling").get, mr(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), mr(r) && (r.__t = void 0);
  }
}
function vt(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function jt(e) {
  return (
    /** @type {TemplateNode | null} */
    Xr.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function Yt(e) {
  return (
    /** @type {TemplateNode | null} */
    $r.call(e)
  );
}
function H(e, t) {
  return /* @__PURE__ */ jt(e);
}
function Ti(e, t = !1) {
  {
    var r = /* @__PURE__ */ jt(e);
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ Yt(r) : r;
  }
}
function at(e, t = 1, r = !1) {
  let n = e;
  for (; t--; )
    n = /** @type {TemplateNode} */
    /* @__PURE__ */ Yt(n);
  return n;
}
function Si() {
  return !1;
}
function Ai(e, t, r) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElementNS(Dr, e, void 0)
  );
}
function en(e) {
  var t = m, r = w;
  ee(null), ve(null);
  try {
    return e();
  } finally {
    ee(t), ve(r);
  }
}
function Ri(e) {
  w === null && (m === null && Zn(), Jn()), Me && Kn();
}
function Mi(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function Ne(e, t) {
  var r = w;
  r !== null && (r.f & Q) !== 0 && (e |= Q);
  var n = {
    ctx: $,
    deps: null,
    nodes: null,
    f: e | D | Z,
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
  E?.register_created_effect(n);
  var i = n;
  if ((e & dt) !== 0)
    Ke !== null ? Ke.push(n) : Ve.ensure().schedule(n);
  else if (t !== null) {
    try {
      st(n);
    } catch (a) {
      throw q(n), a;
    }
    i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && // either `null`, or a singular child
    (i.f & lt) === 0 && (i = i.first, (e & he) !== 0 && (e & nt) !== 0 && i !== null && (i.f |= nt));
  }
  if (i !== null && (i.parent = r, r !== null && Mi(i, r), m !== null && (m.f & F) !== 0 && (e & Re) === 0)) {
    var l = (
      /** @type {Derived} */
      m
    );
    (l.effects ?? (l.effects = [])).push(i);
  }
  return n;
}
function cr() {
  return m !== null && !le;
}
function Ni(e) {
  const t = Ne(Ut, null);
  return A(t, M), t.teardown = e, t;
}
function Er(e) {
  Ri();
  var t = (
    /** @type {Effect} */
    w.f
  ), r = !m && (t & de) !== 0 && (t & Ye) === 0;
  if (r) {
    var n = (
      /** @type {ComponentContext} */
      $
    );
    (n.e ?? (n.e = [])).push(e);
  } else
    return tn(e);
}
function tn(e) {
  return Ne(dt | Hn, e);
}
function Ci(e) {
  Ve.ensure();
  const t = Ne(Re | lt, e);
  return (r = {}) => new Promise((n) => {
    r.outro ? ht(t, () => {
      q(t), n(void 0);
    }) : (q(t), n(void 0));
  });
}
function Oi(e) {
  return Ne(_t | lt, e);
}
function Di(e, t = 0) {
  return Ne(Ut | t, e);
}
function ot(e, t = [], r = [], n = []) {
  mi(n, t, r, (i) => {
    Ne(Ut, () => e(...i.map(b)));
  });
}
function rn(e, t = 0) {
  var r = Ne(he | t, e);
  return r;
}
function ge(e) {
  return Ne(de | lt, e);
}
function nn(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = Me, n = m;
    kr(!0), ee(null);
    try {
      t.call(null);
    } finally {
      kr(r), ee(n);
    }
  }
}
function hr(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    const i = r.ac;
    i !== null && en(() => {
      i.abort(me);
    });
    var n = r.next;
    (r.f & Re) !== 0 ? r.parent = null : q(r, t), r = n;
  }
}
function Fi(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & de) === 0 && q(t), t = r;
  }
}
function q(e, t = !0) {
  var r = !1;
  (t || (e.f & qn) !== 0) && e.nodes !== null && e.nodes.end !== null && (Pi(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), r = !0), A(e, wr), hr(e, t && !r), pt(e, 0);
  var n = e.nodes && e.nodes.t;
  if (n !== null)
    for (const l of n)
      l.stop();
  nn(e), e.f ^= wr, e.f |= fe;
  var i = e.parent;
  i !== null && i.first !== null && sn(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function Pi(e, t) {
  for (; e !== null; ) {
    var r = e === t ? null : /* @__PURE__ */ Yt(e);
    e.remove(), e = r;
  }
}
function sn(e) {
  var t = e.parent, r = e.prev, n = e.next;
  r !== null && (r.next = n), n !== null && (n.prev = r), t !== null && (t.first === e && (t.first = n), t.last === e && (t.last = r));
}
function ht(e, t, r = !0) {
  var n = [];
  ln(e, n, !0);
  var i = () => {
    r && q(e), t && t();
  }, l = n.length;
  if (l > 0) {
    var a = () => --l || i();
    for (var o of n)
      o.out(a);
  } else
    i();
}
function ln(e, t, r) {
  if ((e.f & Q) === 0) {
    e.f ^= Q;
    var n = e.nodes && e.nodes.t;
    if (n !== null)
      for (const o of n)
        (o.is_global || r) && t.push(o);
    for (var i = e.first; i !== null; ) {
      var l = i.next;
      if ((i.f & Re) === 0) {
        var a = (i.f & nt) !== 0 || // If this is a branch effect without a block effect parent,
        // it means the parent block effect was pruned. In that case,
        // transparency information was transferred to the branch effect.
        (i.f & de) !== 0 && (e.f & he) !== 0;
        ln(i, t, a ? r : !1);
      }
      i = l;
    }
  }
}
function Ii(e) {
  fn(e, !0);
}
function fn(e, t) {
  if ((e.f & Q) !== 0) {
    e.f ^= Q, (e.f & M) === 0 && (A(e, D), Ve.ensure().schedule(e));
    for (var r = e.first; r !== null; ) {
      var n = r.next, i = (r.f & nt) !== 0 || (r.f & de) !== 0;
      fn(r, i ? t : !1), r = n;
    }
    var l = e.nodes && e.nodes.t;
    if (l !== null)
      for (const a of l)
        (a.is_global || t) && a.in();
  }
}
function an(e, t) {
  if (e.nodes)
    for (var r = e.nodes.start, n = e.nodes.end; r !== null; ) {
      var i = r === n ? null : /* @__PURE__ */ Yt(r);
      t.append(r), r = i;
    }
}
let Dt = !1, Me = !1;
function kr(e) {
  Me = e;
}
let m = null, le = !1;
function ee(e) {
  m = e;
}
let w = null;
function ve(e) {
  w = e;
}
let X = null;
function on(e) {
  m !== null && (X === null ? X = [e] : X.push(e));
}
let L = null, B = 0, G = null;
function ji(e) {
  G = e;
}
let un = 1, Oe = 0, Be = Oe;
function Tr(e) {
  Be = e;
}
function cn() {
  return ++un;
}
function Et(e) {
  var t = e.f;
  if ((t & D) !== 0)
    return !0;
  if (t & F && (e.f &= ~Ue), (t & _e) !== 0) {
    for (var r = (
      /** @type {Value[]} */
      e.deps
    ), n = r.length, i = 0; i < n; i++) {
      var l = r[i];
      if (Et(
        /** @type {Derived} */
        l
      ) && Wr(
        /** @type {Derived} */
        l
      ), l.wv > e.wv)
        return !0;
    }
    (t & Z) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    se === null && A(e, M);
  }
  return !1;
}
function hn(e, t, r = !0) {
  var n = e.reactions;
  if (n !== null && !(X !== null && rt.call(X, e)))
    for (var i = 0; i < n.length; i++) {
      var l = n[i];
      (l.f & F) !== 0 ? hn(
        /** @type {Derived} */
        l,
        t,
        !1
      ) : t === l && (r ? A(l, D) : (l.f & M) !== 0 && A(l, _e), or(
        /** @type {Effect} */
        l
      ));
    }
}
function dn(e) {
  var x;
  var t = L, r = B, n = G, i = m, l = X, a = $, o = le, f = Be, u = e.f;
  L = /** @type {null | Value[]} */
  null, B = 0, G = null, m = (u & (de | Re)) === 0 ? e : null, X = null, it(e.ctx), le = !1, Be = ++Oe, e.ac !== null && (en(() => {
    e.ac.abort(me);
  }), e.ac = null);
  try {
    e.f |= Ft;
    var d = (
      /** @type {Function} */
      e.fn
    ), v = d();
    e.f |= Ye;
    var _ = e.deps, c = E?.is_fork;
    if (L !== null) {
      var h;
      if (c || pt(e, B), _ !== null && B > 0)
        for (_.length = B + L.length, h = 0; h < L.length; h++)
          _[B + h] = L[h];
      else
        e.deps = _ = L;
      if (cr() && (e.f & Z) !== 0)
        for (h = B; h < _.length; h++)
          ((x = _[h]).reactions ?? (x.reactions = [])).push(e);
    } else !c && _ !== null && B < _.length && (pt(e, B), _.length = B);
    if (jr() && G !== null && !le && _ !== null && (e.f & (F | _e | D)) === 0)
      for (h = 0; h < /** @type {Source[]} */
      G.length; h++)
        hn(
          G[h],
          /** @type {Effect} */
          e
        );
    if (i !== null && i !== e) {
      if (Oe++, i.deps !== null)
        for (let y = 0; y < r; y += 1)
          i.deps[y].rv = Oe;
      if (t !== null)
        for (const y of t)
          y.rv = Oe;
      G !== null && (n === null ? n = G : n.push(.../** @type {Source[]} */
      G));
    }
    return (e.f & Ae) !== 0 && (e.f ^= Ae), v;
  } catch (y) {
    return Lr(y);
  } finally {
    e.f ^= Ft, L = t, B = r, G = n, m = i, X = l, it(a), le = o, Be = f;
  }
}
function Li(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var n = In.call(r, e);
    if (n !== -1) {
      var i = r.length - 1;
      i === 0 ? r = t.reactions = null : (r[n] = r[i], r.pop());
    }
  }
  if (r === null && (t.f & F) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (L === null || !rt.call(L, t))) {
    var l = (
      /** @type {Derived} */
      t
    );
    (l.f & Z) !== 0 && (l.f ^= Z, l.f &= ~Ue), l.v !== N && fr(l), xi(l), pt(l, 0);
  }
}
function pt(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var n = t; n < r.length; n++)
      Li(e, r[n]);
}
function st(e) {
  var t = e.f;
  if ((t & fe) === 0) {
    A(e, M);
    var r = w, n = Dt;
    w = e, Dt = !0;
    try {
      (t & (he | Or)) !== 0 ? Fi(e) : hr(e), nn(e);
      var i = dn(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = un;
      var l;
    } finally {
      Dt = n, w = r;
    }
  }
}
function b(e) {
  var t = e.f, r = (t & F) !== 0;
  if (m !== null && !le) {
    var n = w !== null && (w.f & fe) !== 0;
    if (!n && (X === null || !rt.call(X, e))) {
      var i = m.deps;
      if ((m.f & Ft) !== 0)
        e.rv < Oe && (e.rv = Oe, L === null && i !== null && i[B] === e ? B++ : L === null ? L = [e] : L.push(e));
      else {
        (m.deps ?? (m.deps = [])).push(e);
        var l = e.reactions;
        l === null ? e.reactions = [m] : rt.call(l, m) || l.push(m);
      }
    }
  }
  if (Me && ze.has(e))
    return ze.get(e);
  if (r) {
    var a = (
      /** @type {Derived} */
      e
    );
    if (Me) {
      var o = a.v;
      return ((a.f & M) === 0 && a.reactions !== null || vn(a)) && (o = ur(a)), ze.set(a, o), o;
    }
    var f = (a.f & Z) === 0 && !le && m !== null && (Dt || (m.f & Z) !== 0), u = (a.f & Ye) === 0;
    Et(a) && (f && (a.f |= Z), Wr(a)), f && !u && (Kr(a), _n(a));
  }
  if (se?.has(e))
    return se.get(e);
  if ((e.f & Ae) !== 0)
    throw e.v;
  return e.v;
}
function _n(e) {
  if (e.f |= Z, e.deps !== null)
    for (const t of e.deps)
      (t.reactions ?? (t.reactions = [])).push(e), (t.f & F) !== 0 && (t.f & Z) === 0 && (Kr(
        /** @type {Derived} */
        t
      ), _n(
        /** @type {Derived} */
        t
      ));
}
function vn(e) {
  if (e.v === N) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (ze.has(t) || (t.f & F) !== 0 && vn(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function zi(e) {
  var t = le;
  try {
    return le = !0, e();
  } finally {
    le = t;
  }
}
const Bi = ["touchstart", "touchmove"];
function Ui(e) {
  return Bi.includes(e);
}
const De = Symbol("events"), pn = /* @__PURE__ */ new Set(), nr = /* @__PURE__ */ new Set();
function Vi(e, t, r) {
  (t[De] ?? (t[De] = {}))[e] = r;
}
function Yi(e) {
  for (var t = 0; t < e.length; t++)
    pn.add(e[t]);
  for (var r of nr)
    r(e);
}
let Sr = null;
function Ar(e) {
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), n = e.type, i = e.composedPath?.() || [], l = (
    /** @type {null | Element} */
    i[0] || e.target
  );
  Sr = e;
  var a = 0, o = Sr === e && e[De];
  if (o) {
    var f = i.indexOf(o);
    if (f !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e[De] = t;
      return;
    }
    var u = i.indexOf(t);
    if (u === -1)
      return;
    f <= u && (a = f);
  }
  if (l = /** @type {Element} */
  i[a] || e.target, l !== t) {
    Ln(e, "currentTarget", {
      configurable: !0,
      get() {
        return l || r;
      }
    });
    var d = m, v = w;
    ee(null), ve(null);
    try {
      for (var _, c = []; l !== null; ) {
        var h = l.assignedSlot || l.parentNode || /** @type {any} */
        l.host || null;
        try {
          var x = l[De]?.[n];
          x != null && (!/** @type {any} */
          l.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === l) && x.call(l, e);
        } catch (y) {
          _ ? c.push(y) : _ = y;
        }
        if (e.cancelBubble || h === t || h === null)
          break;
        l = h;
      }
      if (_) {
        for (let y of c)
          queueMicrotask(() => {
            throw y;
          });
        throw _;
      }
    } finally {
      e[De] = t, delete e.currentTarget, ee(d), ve(v);
    }
  }
}
const qi = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (e) => e
  })
);
function Hi(e) {
  return (
    /** @type {string} */
    qi?.createHTML(e) ?? e
  );
}
function Gi(e) {
  var t = Ai("template");
  return t.innerHTML = Hi(e.replaceAll("<!>", "<!---->")), t.content;
}
function ir(e, t) {
  var r = (
    /** @type {Effect} */
    w
  );
  r.nodes === null && (r.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function qe(e, t) {
  var r = (t & ri) !== 0, n = (t & ni) !== 0, i, l = !e.startsWith("<!>");
  return () => {
    i === void 0 && (i = Gi(l ? e : "<!>" + e), r || (i = /** @type {TemplateNode} */
    /* @__PURE__ */ jt(i)));
    var a = (
      /** @type {TemplateNode} */
      n || Qr ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (r) {
      var o = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ jt(a)
      ), f = (
        /** @type {TemplateNode} */
        a.lastChild
      );
      ir(o, f);
    } else
      ir(a, a);
    return a;
  };
}
function kt(e = "") {
  {
    var t = vt(e + "");
    return ir(t, t), t;
  }
}
function re(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function Kt(e, t) {
  var r = t == null ? "" : typeof t == "object" ? `${t}` : t;
  r !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = r, e.nodeValue = `${r}`);
}
function Wi(e, t) {
  return Ki(e, t);
}
const Tt = /* @__PURE__ */ new Map();
function Ki(e, { target: t, anchor: r, props: n = {}, events: i, context: l, intro: a = !0, transformError: o }) {
  ki();
  var f = void 0, u = Ci(() => {
    var d = r ?? t.appendChild(vt());
    di(
      /** @type {TemplateNode} */
      d,
      {
        pending: () => {
        }
      },
      (c) => {
        Pr({});
        var h = (
          /** @type {ComponentContext} */
          $
        );
        l && (h.c = l), i && (n.$$events = i), f = e(c, n) || {}, Ir();
      },
      o
    );
    var v = /* @__PURE__ */ new Set(), _ = (c) => {
      for (var h = 0; h < c.length; h++) {
        var x = c[h];
        if (!v.has(x)) {
          v.add(x);
          var y = Ui(x);
          for (const ft of [t, document]) {
            var z = Tt.get(ft);
            z === void 0 && (z = /* @__PURE__ */ new Map(), Tt.set(ft, z));
            var Ee = z.get(x);
            Ee === void 0 ? (ft.addEventListener(x, Ar, { passive: y }), z.set(x, 1)) : z.set(x, Ee + 1);
          }
        }
      }
    };
    return _(jn(pn)), nr.add(_), () => {
      for (var c of v)
        for (const y of [t, document]) {
          var h = (
            /** @type {Map<string, number>} */
            Tt.get(y)
          ), x = (
            /** @type {number} */
            h.get(c)
          );
          --x == 0 ? (y.removeEventListener(c, Ar), h.delete(c), h.size === 0 && Tt.delete(y)) : h.set(c, x);
        }
      nr.delete(_), d !== r && d.parentNode?.removeChild(d);
    };
  });
  return sr.set(f, u), f;
}
let sr = /* @__PURE__ */ new WeakMap();
function Ji(e, t) {
  const r = sr.get(e);
  return r ? (sr.delete(e), r(t)) : Promise.resolve();
}
var ie, ue, Y, Le, yt, xt, Bt;
class Zi {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, r = !0) {
    /** @type {TemplateNode} */
    te(this, "anchor");
    /** @type {Map<Batch, Key>} */
    p(this, ie, /* @__PURE__ */ new Map());
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
    p(this, Y, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    p(this, Le, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    p(this, yt, !0);
    /**
     * @param {Batch} batch
     */
    p(this, xt, (t) => {
      if (s(this, ie).has(t)) {
        var r = (
          /** @type {Key} */
          s(this, ie).get(t)
        ), n = s(this, ue).get(r);
        if (n)
          Ii(n), s(this, Le).delete(r);
        else {
          var i = s(this, Y).get(r);
          i && (s(this, ue).set(r, i.effect), s(this, Y).delete(r), i.fragment.lastChild.remove(), this.anchor.before(i.fragment), n = i.effect);
        }
        for (const [l, a] of s(this, ie)) {
          if (s(this, ie).delete(l), l === t)
            break;
          const o = s(this, Y).get(a);
          o && (q(o.effect), s(this, Y).delete(a));
        }
        for (const [l, a] of s(this, ue)) {
          if (l === r || s(this, Le).has(l)) continue;
          const o = () => {
            if (Array.from(s(this, ie).values()).includes(l)) {
              var u = document.createDocumentFragment();
              an(a, u), u.append(vt()), s(this, Y).set(l, { effect: a, fragment: u });
            } else
              q(a);
            s(this, Le).delete(l), s(this, ue).delete(l);
          };
          s(this, yt) || !n ? (s(this, Le).add(l), ht(a, o, !1)) : o();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    p(this, Bt, (t) => {
      s(this, ie).delete(t);
      const r = Array.from(s(this, ie).values());
      for (const [n, i] of s(this, Y))
        r.includes(n) || (q(i.effect), s(this, Y).delete(n));
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
      E
    ), i = Si();
    if (r && !s(this, ue).has(t) && !s(this, Y).has(t))
      if (i) {
        var l = document.createDocumentFragment(), a = vt();
        l.append(a), s(this, Y).set(t, {
          effect: ge(() => r(a)),
          fragment: l
        });
      } else
        s(this, ue).set(
          t,
          ge(() => r(this.anchor))
        );
    if (s(this, ie).set(n, t), i) {
      for (const [o, f] of s(this, ue))
        o === t ? n.unskip_effect(f) : n.skip_effect(f);
      for (const [o, f] of s(this, Y))
        o === t ? n.unskip_effect(f.effect) : n.skip_effect(f.effect);
      n.oncommit(s(this, xt)), n.ondiscard(s(this, Bt));
    } else
      s(this, xt).call(this, n);
  }
}
ie = new WeakMap(), ue = new WeakMap(), Y = new WeakMap(), Le = new WeakMap(), yt = new WeakMap(), xt = new WeakMap(), Bt = new WeakMap();
function Ge(e, t, r = !1) {
  var n = new Zi(e), i = r ? nt : 0;
  function l(a, o) {
    n.ensure(a, o);
  }
  rn(() => {
    var a = !1;
    t((o, f = 0) => {
      a = !0, l(f, o);
    }), a || l(-1, null);
  }, i);
}
const Qi = Symbol("is custom element"), Xi = Symbol("is html");
function St(e, t, r, n) {
  var i = $i(e);
  i[t] !== (i[t] = r) && (t === "loading" && (e[Gn] = r), r == null ? e.removeAttribute(t) : typeof r != "string" && es(e).includes(t) ? e[t] = r : e.setAttribute(t, r));
}
function $i(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [Qi]: e.nodeName.includes("-"),
      [Xi]: e.namespaceURI === Dr
    })
  );
}
var Rr = /* @__PURE__ */ new Map();
function es(e) {
  var t = e.getAttribute("is") || e.nodeName, r = Rr.get(t);
  if (r) return r;
  Rr.set(t, r = []);
  for (var n, i = e, l = Element.prototype; l !== i; ) {
    n = zn(i);
    for (var a in n)
      n[a].set && r.push(a);
    i = Nr(i);
  }
  return r;
}
const ts = "5";
var Mr;
typeof window < "u" && ((Mr = window.__svelte ?? (window.__svelte = {})).v ?? (Mr.v = /* @__PURE__ */ new Set())).add(ts);
var rs = /* @__PURE__ */ qe('<img class="h-10 md:h-12 lg:h-14 w-auto drop-shadow-lg"/>'), ns = /* @__PURE__ */ qe('<img src="/images/logo_horizontal_white.svg" alt="Realms" class="h-10 md:h-12 lg:h-14 w-auto drop-shadow-lg"/>'), is = /* @__PURE__ */ qe('<div class="flex items-center justify-center py-8"><svg class="animate-spin h-8 w-8 text-white/60" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg></div>'), ss = /* @__PURE__ */ qe('<p class="text-lg md:text-xl font-medium text-white/90 mb-3 leading-relaxed"> </p>'), ls = /* @__PURE__ */ qe('<p class="text-base text-white/75 leading-relaxed"> </p>'), fs = /* @__PURE__ */ qe('<div class="text-center md:text-left mb-8"><h1 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight tracking-tight drop-shadow-lg"><!></h1> <!> <!></div> <div class="flex flex-col items-center md:items-center gap-3"><button class="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-semibold text-base tracking-wide transition-all duration-300 bg-blue-500/90 hover:bg-blue-500 text-white border-2 border-blue-400 hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(59,130,246,0.5)] cursor-pointer"><!> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg></button></div>', 1), as = /* @__PURE__ */ qe('<div class="relative w-full h-screen overflow-hidden flex items-center justify-center bg-black"><div class="absolute inset-0 z-0"><img class="w-full h-full object-cover opacity-80 transition-opacity duration-1000"/> <div class="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-black/70"></div></div> <div class="absolute top-0 left-0 w-full h-20 bg-black/50 backdrop-blur-md z-20 flex items-center px-6 md:px-10"><div class="flex items-center gap-3"><!></div></div> <div class="relative z-10 w-full flex items-center justify-center md:justify-end px-4 md:px-10 lg:px-16"><div class="bg-black/55 backdrop-blur-lg rounded-2xl p-8 md:p-12 max-w-xl w-full text-white shadow-2xl border border-white/10"><!></div></div> <div class="absolute bottom-6 right-4 md:bottom-8 md:right-6 z-20"><a href="https://realmsgos.org" target="_blank" rel="noopener noreferrer" class="flex items-center gap-1.5 bg-black/60 backdrop-blur-lg rounded-lg px-3 py-2 text-white text-xs md:text-sm no-underline hover:text-white/80 transition-colors">Powered by <img src="/images/logo_horizontal_white.svg" alt="Realms GOS" class="h-5 md:h-6 inline-block"/></a></div></div>');
function os(e, t) {
  Pr(t, !0);
  const r = "/images/background.png";
  let n = /* @__PURE__ */ ne(Je({})), i = /* @__PURE__ */ ne(!1), l = /* @__PURE__ */ ne(!0), a = /* @__PURE__ */ He(() => b(n)?.realm_name || b(n)?.name || ""), o = /* @__PURE__ */ He(() => b(n)?.realm_description || b(n)?.description || ""), f = /* @__PURE__ */ He(() => b(n)?.realm_welcome_message || b(n)?.welcome_message || ""), u = /* @__PURE__ */ He(() => b(n)?.realm_logo || b(n)?.logo || ""), d = /* @__PURE__ */ He(() => b(n)?.realm_welcome_image || b(n)?.welcome_image || ""), v = /* @__PURE__ */ He(() => b(d) || r);
  Er(() => {
    const C = t.ctx.realmInfo?.subscribe?.((O) => {
      O && typeof O == "object" && (ce(n, O, !0), ce(l, !!O.loading));
    });
    return () => C?.();
  }), Er(() => {
    const C = t.ctx.isAuthenticated?.subscribe?.((O) => {
      ce(i, !!O);
    });
    return () => C?.();
  });
  function _() {
    b(i) ? t.ctx.navigate?.("/") : t.ctx.navigate?.("/join");
  }
  var c = as(), h = H(c), x = H(h), y = at(h, 2), z = H(y), Ee = H(z);
  {
    var ft = (C) => {
      var O = rs();
      ot(() => {
        St(O, "src", b(u)), St(O, "alt", b(a) || "Realm");
      }), re(C, O);
    }, gn = (C) => {
      var O = ns();
      re(C, O);
    };
    Ge(Ee, (C) => {
      b(u) ? C(ft) : C(gn, -1);
    });
  }
  var mn = at(y, 2), wn = H(mn), bn = H(wn);
  {
    var yn = (C) => {
      var O = is();
      re(C, O);
    }, xn = (C) => {
      var O = fs(), dr = Ti(O), _r = H(dr), En = H(_r);
      {
        var kn = (S) => {
          var I = kt();
          ot(() => Kt(I, `Welcome to ${b(a) ?? ""}`)), re(S, I);
        }, Tn = (S) => {
          var I = kt("Welcome");
          re(S, I);
        };
        Ge(En, (S) => {
          b(a) ? S(kn) : S(Tn, -1);
        });
      }
      var vr = at(_r, 2);
      {
        var Sn = (S) => {
          var I = ss(), qt = H(I);
          ot(() => Kt(qt, b(f))), re(S, I);
        };
        Ge(vr, (S) => {
          b(f) && S(Sn);
        });
      }
      var An = at(vr, 2);
      {
        var Rn = (S) => {
          var I = ls(), qt = H(I);
          ot(() => Kt(qt, b(o))), re(S, I);
        };
        Ge(An, (S) => {
          b(o) && S(Rn);
        });
      }
      var Mn = at(dr, 2), pr = H(Mn), Nn = H(pr);
      {
        var Cn = (S) => {
          var I = kt("Enter Realm");
          re(S, I);
        }, On = (S) => {
          var I = kt("Join this Realm");
          re(S, I);
        };
        Ge(Nn, (S) => {
          b(i) ? S(Cn) : S(On, -1);
        });
      }
      Vi("click", pr, _), re(C, O);
    };
    Ge(bn, (C) => {
      b(l) ? C(yn) : C(xn, -1);
    });
  }
  ot(() => {
    St(x, "src", b(v)), St(x, "alt", b(a) ? `${b(a)} background` : "Realm background");
  }), re(e, c), Ir();
}
Yi(["click"]);
function hs(e, t) {
  const r = Wi(os, { target: e, props: { ctx: t } });
  return {
    unmount() {
      try {
        Ji(r);
      } catch {
      }
    }
  };
}
export {
  hs as default
};
