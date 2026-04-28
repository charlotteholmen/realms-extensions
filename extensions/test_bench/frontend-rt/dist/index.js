var Jr = Object.defineProperty;
var Sn = (e) => {
  throw TypeError(e);
};
var Hr = (e, t, n) => t in e ? Jr(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var se = (e, t, n) => Hr(e, typeof t != "symbol" ? t + "" : t, n), zt = (e, t, n) => t.has(e) || Sn("Cannot " + n);
var i = (e, t, n) => (zt(e, t, "read from private field"), n ? n.call(e) : t.get(e)), g = (e, t, n) => t.has(e) ? Sn("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), w = (e, t, n, r) => (zt(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), T = (e, t, n) => (zt(e, t, "access private method"), n);
var Kr = Array.isArray, Wr = Array.prototype.indexOf, st = Array.prototype.includes, Zr = Array.from, Qr = Object.defineProperty, ft = Object.getOwnPropertyDescriptor, Xr = Object.prototype, $r = Array.prototype, es = Object.getPrototypeOf, Tn = Object.isExtensible;
const ts = () => {
};
function ns(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function jn() {
  var e, t, n = new Promise((r, s) => {
    e = r, t = s;
  });
  return { promise: n, resolve: e, reject: t };
}
const j = 2, ht = 4, Yt = 8, Ln = 1 << 24, de = 16, he = 32, Ne = 64, Zt = 128, $ = 512, M = 1024, I = 2048, ve = 4096, ee = 8192, oe = 16384, Je = 32768, An = 1 << 25, it = 65536, Qt = 1 << 17, rs = 1 << 18, ot = 1 << 19, ss = 1 << 20, Ge = 65536, Ft = 1 << 21, vt = 1 << 22, Ae = 1 << 23, Jt = Symbol("$state"), we = new class extends Error {
  constructor() {
    super(...arguments);
    se(this, "name", "StaleReactionError");
    se(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
function is() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function ls(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function as() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function os(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function fs() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function us() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function cs() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function ds() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function hs() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
const vs = 2, P = Symbol(), _s = "http://www.w3.org/1999/xhtml";
function ps() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function gs() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function Un(e) {
  return e === this.v;
}
let ne = null;
function lt(e) {
  ne = e;
}
function Vn(e, t = !1, n) {
  ne = {
    p: ne,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    r: (
      /** @type {Effect} */
      y
    ),
    l: null
  };
}
function Bn(e) {
  var t = (
    /** @type {ComponentContext} */
    ne
  ), n = t.e;
  if (n !== null) {
    t.e = null;
    for (var r of n)
      lr(r);
  }
  return t.i = !0, ne = t.p, /** @type {T} */
  {};
}
function Yn() {
  return !0;
}
let Ce = [];
function qn() {
  var e = Ce;
  Ce = [], ns(e);
}
function Xe(e) {
  if (Ce.length === 0 && !ut) {
    var t = Ce;
    queueMicrotask(() => {
      t === Ce && qn();
    });
  }
  Ce.push(e);
}
function bs() {
  for (; Ce.length > 0; )
    qn();
}
function Gn(e) {
  var t = y;
  if (t === null)
    return m.f |= Ae, e;
  if ((t.f & Je) === 0 && (t.f & ht) === 0)
    throw e;
  Te(e, t);
}
function Te(e, t) {
  for (; t !== null; ) {
    if ((t.f & Zt) !== 0) {
      if ((t.f & Je) === 0)
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
const ws = -7169;
function O(e, t) {
  e.f = e.f & ws | t;
}
function on(e) {
  (e.f & $) !== 0 || e.deps === null ? O(e, M) : O(e, ve);
}
function zn(e) {
  if (e !== null)
    for (const t of e)
      (t.f & j) === 0 || (t.f & Ge) === 0 || (t.f ^= Ge, zn(
        /** @type {Derived} */
        t.deps
      ));
}
function Jn(e, t, n) {
  (e.f & I) !== 0 ? t.add(e) : (e.f & ve) !== 0 && n.add(e), zn(e.deps), O(e, M);
}
const De = /* @__PURE__ */ new Set();
let b = null, le = null, Xt = null, ut = !1, Ht = !1, Ze = null, Nt = null;
var Nn = 0;
let ms = 1;
var $e, et, je, me, fe, pt, z, gt, ke, ye, ue, tt, nt, Le, D, Rt, Hn, Ot, $t, Dt, ys;
const Ut = class Ut {
  constructor() {
    g(this, D);
    se(this, "id", ms++);
    /**
     * The current values of any signals that are updated in this batch.
     * Tuple format: [value, is_derived] (note: is_derived is false for deriveds, too, if they were overridden via assignment)
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Value, [any, boolean]>}
     */
    se(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any signals (sources and deriveds) that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Value, any>}
     */
    se(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<(batch: Batch) => void>}
     */
    g(this, $e, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    g(this, et, /* @__PURE__ */ new Set());
    /**
     * Callbacks that should run only when a fork is committed.
     * @type {Set<(batch: Batch) => void>}
     */
    g(this, je, /* @__PURE__ */ new Set());
    /**
     * Async effects that are currently in flight
     * @type {Map<Effect, number>}
     */
    g(this, me, /* @__PURE__ */ new Map());
    /**
     * Async effects that are currently in flight, _not_ inside a pending boundary
     * @type {Map<Effect, number>}
     */
    g(this, fe, /* @__PURE__ */ new Map());
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    g(this, pt, null);
    /**
     * The root effects that need to be flushed
     * @type {Effect[]}
     */
    g(this, z, []);
    /**
     * Effects created while this batch was active.
     * @type {Effect[]}
     */
    g(this, gt, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    g(this, ke, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    g(this, ye, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    g(this, ue, /* @__PURE__ */ new Map());
    /**
     * Inverse of #skipped_branches which we need to tell prior batches to unskip them when committing
     * @type {Set<Effect>}
     */
    g(this, tt, /* @__PURE__ */ new Set());
    se(this, "is_fork", !1);
    g(this, nt, !1);
    /** @type {Set<Batch>} */
    g(this, Le, /* @__PURE__ */ new Set());
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(t) {
    i(this, ue).has(t) || i(this, ue).set(t, { d: [], m: [] }), i(this, tt).delete(t);
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   * @param {(e: Effect) => void} callback
   */
  unskip_effect(t, n = (r) => this.schedule(r)) {
    var r = i(this, ue).get(t);
    if (r) {
      i(this, ue).delete(t);
      for (var s of r.d)
        O(s, I), n(s);
      for (s of r.m)
        O(s, ve), n(s);
    }
    i(this, tt).add(t);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Value} source
   * @param {any} value
   * @param {boolean} [is_derived]
   */
  capture(t, n, r = !1) {
    t.v !== P && !this.previous.has(t) && this.previous.set(t, t.v), (t.f & Ae) === 0 && (this.current.set(t, [n, r]), le?.set(t, n)), this.is_fork || (t.v = n);
  }
  activate() {
    b = this;
  }
  deactivate() {
    b = null, le = null;
  }
  flush() {
    try {
      Ht = !0, b = this, T(this, D, Ot).call(this);
    } finally {
      Nn = 0, Xt = null, Ze = null, Nt = null, Ht = !1, b = null, le = null, Ye.clear();
    }
  }
  discard() {
    for (const t of i(this, et)) t(this);
    i(this, et).clear(), i(this, je).clear(), De.delete(this);
  }
  /**
   * @param {Effect} effect
   */
  register_created_effect(t) {
    i(this, gt).push(t);
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  increment(t, n) {
    let r = i(this, me).get(n) ?? 0;
    if (i(this, me).set(n, r + 1), t) {
      let s = i(this, fe).get(n) ?? 0;
      i(this, fe).set(n, s + 1);
    }
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   * @param {boolean} skip - whether to skip updates (because this is triggered by a stale reaction)
   */
  decrement(t, n, r) {
    let s = i(this, me).get(n) ?? 0;
    if (s === 1 ? i(this, me).delete(n) : i(this, me).set(n, s - 1), t) {
      let l = i(this, fe).get(n) ?? 0;
      l === 1 ? i(this, fe).delete(n) : i(this, fe).set(n, l - 1);
    }
    i(this, nt) || r || (w(this, nt, !0), Xe(() => {
      w(this, nt, !1), this.flush();
    }));
  }
  /**
   * @param {Set<Effect>} dirty_effects
   * @param {Set<Effect>} maybe_dirty_effects
   */
  transfer_effects(t, n) {
    for (const r of t)
      i(this, ke).add(r);
    for (const r of n)
      i(this, ye).add(r);
    t.clear(), n.clear();
  }
  /** @param {(batch: Batch) => void} fn */
  oncommit(t) {
    i(this, $e).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    i(this, et).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  on_fork_commit(t) {
    i(this, je).add(t);
  }
  run_fork_commit_callbacks() {
    for (const t of i(this, je)) t(this);
    i(this, je).clear();
  }
  settled() {
    return (i(this, pt) ?? w(this, pt, jn())).promise;
  }
  static ensure() {
    if (b === null) {
      const t = b = new Ut();
      Ht || (De.add(b), ut || Xe(() => {
        b === t && t.flush();
      }));
    }
    return b;
  }
  apply() {
    {
      le = null;
      return;
    }
  }
  /**
   *
   * @param {Effect} effect
   */
  schedule(t) {
    if (Xt = t, t.b?.is_pending && (t.f & (ht | Yt | Ln)) !== 0 && (t.f & Je) === 0) {
      t.b.defer_effect(t);
      return;
    }
    for (var n = t; n.parent !== null; ) {
      n = n.parent;
      var r = n.f;
      if (Ze !== null && n === y && (m === null || (m.f & j) === 0))
        return;
      if ((r & (Ne | he)) !== 0) {
        if ((r & M) === 0)
          return;
        n.f ^= M;
      }
    }
    i(this, z).push(n);
  }
};
$e = new WeakMap(), et = new WeakMap(), je = new WeakMap(), me = new WeakMap(), fe = new WeakMap(), pt = new WeakMap(), z = new WeakMap(), gt = new WeakMap(), ke = new WeakMap(), ye = new WeakMap(), ue = new WeakMap(), tt = new WeakMap(), nt = new WeakMap(), Le = new WeakMap(), D = new WeakSet(), Rt = function() {
  return this.is_fork || i(this, fe).size > 0;
}, Hn = function() {
  for (const r of i(this, Le))
    for (const s of i(r, fe).keys()) {
      for (var t = !1, n = s; n.parent !== null; ) {
        if (i(this, ue).has(n)) {
          t = !0;
          break;
        }
        n = n.parent;
      }
      if (!t)
        return !0;
    }
  return !1;
}, Ot = function() {
  var o;
  if (Nn++ > 1e3 && (De.delete(this), Es()), !T(this, D, Rt).call(this)) {
    for (const a of i(this, ke))
      i(this, ye).delete(a), O(a, I), this.schedule(a);
    for (const a of i(this, ye))
      O(a, ve), this.schedule(a);
  }
  const t = i(this, z);
  w(this, z, []), this.apply();
  var n = Ze = [], r = [], s = Nt = [];
  for (const a of t)
    try {
      T(this, D, $t).call(this, a, n, r);
    } catch (u) {
      throw Zn(a), u;
    }
  if (b = null, s.length > 0) {
    var l = Ut.ensure();
    for (const a of s)
      l.schedule(a);
  }
  if (Ze = null, Nt = null, T(this, D, Rt).call(this) || T(this, D, Hn).call(this)) {
    T(this, D, Dt).call(this, r), T(this, D, Dt).call(this, n);
    for (const [a, u] of i(this, ue))
      Wn(a, u);
  } else {
    i(this, me).size === 0 && De.delete(this), i(this, ke).clear(), i(this, ye).clear();
    for (const a of i(this, $e)) a(this);
    i(this, $e).clear(), Rn(r), Rn(n), i(this, pt)?.resolve();
  }
  var f = (
    /** @type {Batch | null} */
    /** @type {unknown} */
    b
  );
  if (i(this, z).length > 0) {
    const a = f ?? (f = this);
    i(a, z).push(...i(this, z).filter((u) => !i(a, z).includes(u)));
  }
  f !== null && (De.add(f), T(o = f, D, Ot).call(o));
}, /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
$t = function(t, n, r) {
  t.f ^= M;
  for (var s = t.first; s !== null; ) {
    var l = s.f, f = (l & (he | Ne)) !== 0, o = f && (l & M) !== 0, a = o || (l & ee) !== 0 || i(this, ue).has(s);
    if (!a && s.fn !== null) {
      f ? s.f ^= M : (l & ht) !== 0 ? n.push(s) : xt(s) && ((l & de) !== 0 && i(this, ye).add(s), at(s));
      var u = s.first;
      if (u !== null) {
        s = u;
        continue;
      }
    }
    for (; s !== null; ) {
      var h = s.next;
      if (h !== null) {
        s = h;
        break;
      }
      s = s.parent;
    }
  }
}, /**
 * @param {Effect[]} effects
 */
Dt = function(t) {
  for (var n = 0; n < t.length; n += 1)
    Jn(t[n], i(this, ke), i(this, ye));
}, ys = function() {
  var h, p, v;
  for (const c of De) {
    var t = c.id < this.id, n = [];
    for (const [d, [S, x]] of this.current) {
      if (c.current.has(d)) {
        var r = (
          /** @type {[any, boolean]} */
          c.current.get(d)[0]
        );
        if (t && S !== r)
          c.current.set(d, [S, x]);
        else
          continue;
      }
      n.push(d);
    }
    var s = [...c.current.keys()].filter((d) => !this.current.has(d));
    if (s.length === 0)
      t && c.discard();
    else if (n.length > 0) {
      if (t)
        for (const d of i(this, tt))
          c.unskip_effect(d, (S) => {
            var x;
            (S.f & (de | vt)) !== 0 ? c.schedule(S) : T(x = c, D, Dt).call(x, [S]);
          });
      c.activate();
      var l = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Map();
      for (var o of n)
        Kn(o, s, l, f);
      f = /* @__PURE__ */ new Map();
      var a = [...c.current.keys()].filter(
        (d) => this.current.has(d) ? (
          /** @type {[any, boolean]} */
          this.current.get(d)[0] !== d
        ) : !0
      );
      for (const d of i(this, gt))
        (d.f & (oe | ee | Qt)) === 0 && fn(d, a, f) && ((d.f & (vt | de)) !== 0 ? (O(d, I), c.schedule(d)) : i(c, ke).add(d));
      if (i(c, z).length > 0) {
        c.apply();
        for (var u of i(c, z))
          T(h = c, D, $t).call(h, u, [], []);
        w(c, z, []);
      }
      c.deactivate();
    }
  }
  for (const c of De)
    i(c, Le).has(this) && (i(c, Le).delete(this), i(c, Le).size === 0 && !T(p = c, D, Rt).call(p) && (c.activate(), T(v = c, D, Ot).call(v)));
};
let ze = Ut;
function xs(e) {
  var t = ut;
  ut = !0;
  try {
    for (var n; ; ) {
      if (bs(), b === null)
        return (
          /** @type {T} */
          n
        );
      b.flush();
    }
  } finally {
    ut = t;
  }
}
function Es() {
  try {
    fs();
  } catch (e) {
    Te(e, Xt);
  }
}
let ge = null;
function Rn(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var r = e[n++];
      if ((r.f & (oe | ee)) === 0 && xt(r) && (ge = /* @__PURE__ */ new Set(), at(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && ur(r), ge?.size > 0)) {
        Ye.clear();
        for (const s of ge) {
          if ((s.f & (oe | ee)) !== 0) continue;
          const l = [s];
          let f = s.parent;
          for (; f !== null; )
            ge.has(f) && (ge.delete(f), l.push(f)), f = f.parent;
          for (let o = l.length - 1; o >= 0; o--) {
            const a = l[o];
            (a.f & (oe | ee)) === 0 && at(a);
          }
        }
        ge.clear();
      }
    }
    ge = null;
  }
}
function Kn(e, t, n, r) {
  if (!n.has(e) && (n.add(e), e.reactions !== null))
    for (const s of e.reactions) {
      const l = s.f;
      (l & j) !== 0 ? Kn(
        /** @type {Derived} */
        s,
        t,
        n,
        r
      ) : (l & (vt | de)) !== 0 && (l & I) === 0 && fn(s, t, r) && (O(s, I), un(
        /** @type {Effect} */
        s
      ));
    }
}
function fn(e, t, n) {
  const r = n.get(e);
  if (r !== void 0) return r;
  if (e.deps !== null)
    for (const s of e.deps) {
      if (st.call(t, s))
        return !0;
      if ((s.f & j) !== 0 && fn(
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
function un(e) {
  b.schedule(e);
}
function Wn(e, t) {
  if (!((e.f & he) !== 0 && (e.f & M) !== 0)) {
    (e.f & I) !== 0 ? t.d.push(e) : (e.f & ve) !== 0 && t.m.push(e), O(e, M);
    for (var n = e.first; n !== null; )
      Wn(n, t), n = n.next;
  }
}
function Zn(e) {
  O(e, M);
  for (var t = e.first; t !== null; )
    Zn(t), t = t.next;
}
function ks(e) {
  let t = 0, n = qt(0), r;
  return () => {
    vn() && (k(n), ar(() => (t === 0 && (r = mr(() => e(() => ct(n)))), t += 1, () => {
      Xe(() => {
        t -= 1, t === 0 && (r?.(), r = void 0, ct(n));
      });
    })));
  };
}
var Ss = it | ot;
function Ts(e, t, n, r) {
  new As(e, t, n, r);
}
var Z, an, Q, Ue, V, X, L, J, xe, Ve, Se, rt, bt, wt, Ee, Vt, R, Ns, Rs, Os, en, Mt, Pt, tn, nn;
class As {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(t, n, r, s) {
    g(this, R);
    /** @type {Boundary | null} */
    se(this, "parent");
    se(this, "is_pending", !1);
    /**
     * API-level transformError transform function. Transforms errors before they reach the `failed` snippet.
     * Inherited from parent boundary, or defaults to identity.
     * @type {(error: unknown) => unknown}
     */
    se(this, "transform_error");
    /** @type {TemplateNode} */
    g(this, Z);
    /** @type {TemplateNode | null} */
    g(this, an, null);
    /** @type {BoundaryProps} */
    g(this, Q);
    /** @type {((anchor: Node) => void)} */
    g(this, Ue);
    /** @type {Effect} */
    g(this, V);
    /** @type {Effect | null} */
    g(this, X, null);
    /** @type {Effect | null} */
    g(this, L, null);
    /** @type {Effect | null} */
    g(this, J, null);
    /** @type {DocumentFragment | null} */
    g(this, xe, null);
    g(this, Ve, 0);
    g(this, Se, 0);
    g(this, rt, !1);
    /** @type {Set<Effect>} */
    g(this, bt, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    g(this, wt, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    g(this, Ee, null);
    g(this, Vt, ks(() => (w(this, Ee, qt(i(this, Ve))), () => {
      w(this, Ee, null);
    })));
    w(this, Z, t), w(this, Q, n), w(this, Ue, (l) => {
      var f = (
        /** @type {Effect} */
        y
      );
      f.b = this, f.f |= Zt, r(l);
    }), this.parent = /** @type {Effect} */
    y.b, this.transform_error = s ?? this.parent?.transform_error ?? ((l) => l), w(this, V, or(() => {
      T(this, R, en).call(this);
    }, Ss));
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    Jn(t, i(this, bt), i(this, wt));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!i(this, Q).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  update_pending_count(t, n) {
    T(this, R, tn).call(this, t, n), w(this, Ve, i(this, Ve) + t), !(!i(this, Ee) || i(this, rt)) && (w(this, rt, !0), Xe(() => {
      w(this, rt, !1), i(this, Ee) && jt(i(this, Ee), i(this, Ve));
    }));
  }
  get_effect_pending() {
    return i(this, Vt).call(this), k(
      /** @type {Source<number>} */
      i(this, Ee)
    );
  }
  /** @param {unknown} error */
  error(t) {
    if (!i(this, Q).onerror && !i(this, Q).failed)
      throw t;
    b?.is_fork ? (i(this, X) && b.skip_effect(i(this, X)), i(this, L) && b.skip_effect(i(this, L)), i(this, J) && b.skip_effect(i(this, J)), b.on_fork_commit(() => {
      T(this, R, nn).call(this, t);
    })) : T(this, R, nn).call(this, t);
  }
}
Z = new WeakMap(), an = new WeakMap(), Q = new WeakMap(), Ue = new WeakMap(), V = new WeakMap(), X = new WeakMap(), L = new WeakMap(), J = new WeakMap(), xe = new WeakMap(), Ve = new WeakMap(), Se = new WeakMap(), rt = new WeakMap(), bt = new WeakMap(), wt = new WeakMap(), Ee = new WeakMap(), Vt = new WeakMap(), R = new WeakSet(), Ns = function() {
  try {
    w(this, X, be(() => i(this, Ue).call(this, i(this, Z))));
  } catch (t) {
    this.error(t);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
Rs = function(t) {
  const n = i(this, Q).failed;
  n && w(this, J, be(() => {
    n(
      i(this, Z),
      () => t,
      () => () => {
      }
    );
  }));
}, Os = function() {
  const t = i(this, Q).pending;
  t && (this.is_pending = !0, w(this, L, be(() => t(i(this, Z)))), Xe(() => {
    var n = w(this, xe, document.createDocumentFragment()), r = Lt();
    n.append(r), w(this, X, T(this, R, Pt).call(this, () => be(() => i(this, Ue).call(this, r)))), i(this, Se) === 0 && (i(this, Z).before(n), w(this, xe, null), dt(
      /** @type {Effect} */
      i(this, L),
      () => {
        w(this, L, null);
      }
    ), T(this, R, Mt).call(
      this,
      /** @type {Batch} */
      b
    ));
  }));
}, en = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), w(this, Se, 0), w(this, Ve, 0), w(this, X, be(() => {
      i(this, Ue).call(this, i(this, Z));
    })), i(this, Se) > 0) {
      var t = w(this, xe, document.createDocumentFragment());
      hr(i(this, X), t);
      const n = (
        /** @type {(anchor: Node) => void} */
        i(this, Q).pending
      );
      w(this, L, be(() => n(i(this, Z))));
    } else
      T(this, R, Mt).call(
        this,
        /** @type {Batch} */
        b
      );
  } catch (n) {
    this.error(n);
  }
}, /**
 * @param {Batch} batch
 */
Mt = function(t) {
  this.is_pending = !1, t.transfer_effects(i(this, bt), i(this, wt));
}, /**
 * @template T
 * @param {() => T} fn
 */
Pt = function(t) {
  var n = y, r = m, s = ne;
  _e(i(this, V)), re(i(this, V)), lt(i(this, V).ctx);
  try {
    return ze.ensure(), t();
  } catch (l) {
    return Gn(l), null;
  } finally {
    _e(n), re(r), lt(s);
  }
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 * @param {Batch} batch
 */
tn = function(t, n) {
  var r;
  if (!this.has_pending_snippet()) {
    this.parent && T(r = this.parent, R, tn).call(r, t, n);
    return;
  }
  w(this, Se, i(this, Se) + t), i(this, Se) === 0 && (T(this, R, Mt).call(this, n), i(this, L) && dt(i(this, L), () => {
    w(this, L, null);
  }), i(this, xe) && (i(this, Z).before(i(this, xe)), w(this, xe, null)));
}, /**
 * @param {unknown} error
 */
nn = function(t) {
  i(this, X) && (K(i(this, X)), w(this, X, null)), i(this, L) && (K(i(this, L)), w(this, L, null)), i(this, J) && (K(i(this, J)), w(this, J, null));
  var n = i(this, Q).onerror;
  let r = i(this, Q).failed;
  var s = !1, l = !1;
  const f = () => {
    if (s) {
      gs();
      return;
    }
    s = !0, l && hs(), i(this, J) !== null && dt(i(this, J), () => {
      w(this, J, null);
    }), T(this, R, Pt).call(this, () => {
      T(this, R, en).call(this);
    });
  }, o = (a) => {
    try {
      l = !0, n?.(a, f), l = !1;
    } catch (u) {
      Te(u, i(this, V) && i(this, V).parent);
    }
    r && w(this, J, T(this, R, Pt).call(this, () => {
      try {
        return be(() => {
          var u = (
            /** @type {Effect} */
            y
          );
          u.b = this, u.f |= Zt, r(
            i(this, Z),
            () => a,
            () => f
          );
        });
      } catch (u) {
        return Te(
          u,
          /** @type {Effect} */
          i(this, V).parent
        ), null;
      }
    }));
  };
  Xe(() => {
    var a;
    try {
      a = this.transform_error(t);
    } catch (u) {
      Te(u, i(this, V) && i(this, V).parent);
      return;
    }
    a !== null && typeof a == "object" && typeof /** @type {any} */
    a.then == "function" ? a.then(
      o,
      /** @param {unknown} e */
      (u) => Te(u, i(this, V) && i(this, V).parent)
    ) : o(a);
  });
};
function Ds(e, t, n, r) {
  const s = Ps;
  var l = e.filter((v) => !v.settled);
  if (n.length === 0 && l.length === 0) {
    r(t.map(s));
    return;
  }
  var f = (
    /** @type {Effect} */
    y
  ), o = Ms(), a = l.length === 1 ? l[0].promise : l.length > 1 ? Promise.all(l.map((v) => v.promise)) : null;
  function u(v) {
    o();
    try {
      r(v);
    } catch (c) {
      (f.f & oe) === 0 && Te(c, f);
    }
    It();
  }
  if (n.length === 0) {
    a.then(() => u(t.map(s)));
    return;
  }
  var h = Qn();
  function p() {
    Promise.all(n.map((v) => /* @__PURE__ */ Cs(v))).then((v) => u([...t.map(s), ...v])).catch((v) => Te(v, f)).finally(() => h());
  }
  a ? a.then(() => {
    o(), p(), It();
  }) : p();
}
function Ms() {
  var e = (
    /** @type {Effect} */
    y
  ), t = m, n = ne, r = (
    /** @type {Batch} */
    b
  );
  return function(l = !0) {
    _e(e), re(t), lt(n), l && (e.f & oe) === 0 && (r?.activate(), r?.apply());
  };
}
function It(e = !0) {
  _e(null), re(null), lt(null), e && b?.deactivate();
}
function Qn() {
  var e = (
    /** @type {Effect} */
    y
  ), t = (
    /** @type {Boundary} */
    e.b
  ), n = (
    /** @type {Batch} */
    b
  ), r = t.is_rendered();
  return t.update_pending_count(1, n), n.increment(r, e), (s = !1) => {
    t.update_pending_count(-1, n), n.decrement(r, e, s);
  };
}
// @__NO_SIDE_EFFECTS__
function Ps(e) {
  var t = j | I;
  return y !== null && (y.f |= ot), {
    ctx: ne,
    deps: null,
    effects: null,
    equals: Un,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      P
    ),
    wv: 0,
    parent: y,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function Cs(e, t, n) {
  let r = (
    /** @type {Effect | null} */
    y
  );
  r === null && is();
  var s = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), l = qt(
    /** @type {V} */
    P
  ), f = !m, o = /* @__PURE__ */ new Map();
  return Ks(() => {
    var a = (
      /** @type {Effect} */
      y
    ), u = jn();
    s = u.promise;
    try {
      Promise.resolve(e()).then(u.resolve, u.reject).finally(It);
    } catch (c) {
      u.reject(c), It();
    }
    var h = (
      /** @type {Batch} */
      b
    );
    if (f) {
      if ((a.f & Je) !== 0)
        var p = Qn();
      if (
        /** @type {Boundary} */
        r.b.is_rendered()
      )
        o.get(h)?.reject(we), o.delete(h);
      else {
        for (const c of o.values())
          c.reject(we);
        o.clear();
      }
      o.set(h, u);
    }
    const v = (c, d = void 0) => {
      if (p) {
        var S = d === we;
        p(S);
      }
      if (!(d === we || (a.f & oe) !== 0)) {
        if (h.activate(), d)
          l.f |= Ae, jt(l, d);
        else {
          (l.f & Ae) !== 0 && (l.f ^= Ae), jt(l, c);
          for (const [x, Y] of o) {
            if (o.delete(x), x === h) break;
            Y.reject(we);
          }
        }
        h.deactivate();
      }
    };
    u.promise.then(v, (c) => v(null, c || "unknown"));
  }), zs(() => {
    for (const a of o.values())
      a.reject(we);
  }), new Promise((a) => {
    function u(h) {
      function p() {
        h === s ? a(l) : u(s);
      }
      h.then(p, p);
    }
    u(s);
  });
}
function Fs(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      K(
        /** @type {Effect} */
        t[n]
      );
  }
}
function cn(e) {
  var t, n = y, r = e.parent;
  if (!Re && r !== null && (r.f & (oe | ee)) !== 0)
    return ps(), e.v;
  _e(r);
  try {
    e.f &= ~Ge, Fs(e), t = gr(e);
  } finally {
    _e(n);
  }
  return t;
}
function Xn(e) {
  var t = cn(e);
  if (!e.equals(t) && (e.wv = _r(), (!b?.is_fork || e.deps === null) && (b !== null ? b.capture(e, t, !0) : e.v = t, e.deps === null))) {
    O(e, M);
    return;
  }
  Re || (le !== null ? (vn() || b?.is_fork) && le.set(e, t) : on(e));
}
function Is(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      (t.teardown || t.ac) && (t.teardown?.(), t.ac?.abort(we), t.teardown = ts, t.ac = null, _t(t, 0), _n(t));
}
function $n(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      t.teardown && at(t);
}
let rn = /* @__PURE__ */ new Set();
const Ye = /* @__PURE__ */ new Map();
let er = !1;
function qt(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Un,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function F(e, t) {
  const n = qt(e);
  return Xs(n), n;
}
function C(e, t, n = !1) {
  m !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!ae || (m.f & Qt) !== 0) && Yn() && (m.f & (j | de | vt | Qt)) !== 0 && (te === null || !st.call(te, e)) && ds();
  let r = n ? Qe(t) : t;
  return jt(e, r, Nt);
}
function jt(e, t, n = null) {
  if (!e.equals(t)) {
    Ye.set(e, Re ? t : e.v);
    var r = ze.ensure();
    if (r.capture(e, t), (e.f & j) !== 0) {
      const s = (
        /** @type {Derived} */
        e
      );
      (e.f & I) !== 0 && cn(s), le === null && on(s);
    }
    e.wv = _r(), tr(e, I, n), y !== null && (y.f & M) !== 0 && (y.f & (he | Ne)) === 0 && (W === null ? $s([e]) : W.push(e)), !r.is_fork && rn.size > 0 && !er && js();
  }
  return t;
}
function js() {
  er = !1;
  for (const e of rn)
    (e.f & M) !== 0 && O(e, ve), xt(e) && at(e);
  rn.clear();
}
function ct(e) {
  C(e, e.v + 1);
}
function tr(e, t, n) {
  var r = e.reactions;
  if (r !== null)
    for (var s = r.length, l = 0; l < s; l++) {
      var f = r[l], o = f.f, a = (o & I) === 0;
      if (a && O(f, t), (o & j) !== 0) {
        var u = (
          /** @type {Derived} */
          f
        );
        le?.delete(u), (o & Ge) === 0 && (o & $ && (y === null || (y.f & Ft) === 0) && (f.f |= Ge), tr(u, ve, n));
      } else if (a) {
        var h = (
          /** @type {Effect} */
          f
        );
        (o & de) !== 0 && ge !== null && ge.add(h), n !== null ? n.push(h) : un(h);
      }
    }
}
function Qe(e) {
  if (typeof e != "object" || e === null || Jt in e)
    return e;
  const t = es(e);
  if (t !== Xr && t !== $r)
    return e;
  var n = /* @__PURE__ */ new Map(), r = Kr(e), s = /* @__PURE__ */ F(0), l = qe, f = (o) => {
    if (qe === l)
      return o();
    var a = m, u = qe;
    re(null), Pn(l);
    var h = o();
    return re(a), Pn(u), h;
  };
  return r && n.set("length", /* @__PURE__ */ F(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(o, a, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && us();
        var h = n.get(a);
        return h === void 0 ? f(() => {
          var p = /* @__PURE__ */ F(u.value);
          return n.set(a, p), p;
        }) : C(h, u.value, !0), !0;
      },
      deleteProperty(o, a) {
        var u = n.get(a);
        if (u === void 0) {
          if (a in o) {
            const h = f(() => /* @__PURE__ */ F(P));
            n.set(a, h), ct(s);
          }
        } else
          C(u, P), ct(s);
        return !0;
      },
      get(o, a, u) {
        if (a === Jt)
          return e;
        var h = n.get(a), p = a in o;
        if (h === void 0 && (!p || ft(o, a)?.writable) && (h = f(() => {
          var c = Qe(p ? o[a] : P), d = /* @__PURE__ */ F(c);
          return d;
        }), n.set(a, h)), h !== void 0) {
          var v = k(h);
          return v === P ? void 0 : v;
        }
        return Reflect.get(o, a, u);
      },
      getOwnPropertyDescriptor(o, a) {
        var u = Reflect.getOwnPropertyDescriptor(o, a);
        if (u && "value" in u) {
          var h = n.get(a);
          h && (u.value = k(h));
        } else if (u === void 0) {
          var p = n.get(a), v = p?.v;
          if (p !== void 0 && v !== P)
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
        if (a === Jt)
          return !0;
        var u = n.get(a), h = u !== void 0 && u.v !== P || Reflect.has(o, a);
        if (u !== void 0 || y !== null && (!h || ft(o, a)?.writable)) {
          u === void 0 && (u = f(() => {
            var v = h ? Qe(o[a]) : P, c = /* @__PURE__ */ F(v);
            return c;
          }), n.set(a, u));
          var p = k(u);
          if (p === P)
            return !1;
        }
        return h;
      },
      set(o, a, u, h) {
        var p = n.get(a), v = a in o;
        if (r && a === "length")
          for (var c = u; c < /** @type {Source<number>} */
          p.v; c += 1) {
            var d = n.get(c + "");
            d !== void 0 ? C(d, P) : c in o && (d = f(() => /* @__PURE__ */ F(P)), n.set(c + "", d));
          }
        if (p === void 0)
          (!v || ft(o, a)?.writable) && (p = f(() => /* @__PURE__ */ F(void 0)), C(p, Qe(u)), n.set(a, p));
        else {
          v = p.v !== P;
          var S = f(() => Qe(u));
          C(p, S);
        }
        var x = Reflect.getOwnPropertyDescriptor(o, a);
        if (x?.set && x.set.call(h, u), !v) {
          if (r && typeof a == "string") {
            var Y = (
              /** @type {Source<number>} */
              n.get("length")
            ), pe = Number(a);
            Number.isInteger(pe) && pe >= Y.v && C(Y, pe + 1);
          }
          ct(s);
        }
        return !0;
      },
      ownKeys(o) {
        k(s);
        var a = Reflect.ownKeys(o).filter((p) => {
          var v = n.get(p);
          return v === void 0 || v.v !== P;
        });
        for (var [u, h] of n)
          h.v !== P && !(u in o) && a.push(u);
        return a;
      },
      setPrototypeOf() {
        cs();
      }
    }
  );
}
var On, nr, rr, sr;
function Ls() {
  if (On === void 0) {
    On = window, nr = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    rr = ft(t, "firstChild").get, sr = ft(t, "nextSibling").get, Tn(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), Tn(n) && (n.__t = void 0);
  }
}
function Lt(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function ir(e) {
  return (
    /** @type {TemplateNode | null} */
    rr.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function dn(e) {
  return (
    /** @type {TemplateNode | null} */
    sr.call(e)
  );
}
function A(e, t) {
  return /* @__PURE__ */ ir(e);
}
function N(e, t = 1, n = !1) {
  let r = e;
  for (; t--; )
    r = /** @type {TemplateNode} */
    /* @__PURE__ */ dn(r);
  return r;
}
function Us() {
  return !1;
}
function Vs(e, t, n) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElementNS(_s, e, void 0)
  );
}
let Dn = !1;
function Bs() {
  Dn || (Dn = !0, document.addEventListener(
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
function hn(e) {
  var t = m, n = y;
  re(null), _e(null);
  try {
    return e();
  } finally {
    re(t), _e(n);
  }
}
function Ys(e, t, n, r = n) {
  e.addEventListener(t, () => hn(n));
  const s = e.__on_r;
  s ? e.__on_r = () => {
    s(), r(!0);
  } : e.__on_r = () => r(!0), Bs();
}
function qs(e) {
  y === null && (m === null && os(), as()), Re && ls();
}
function Gs(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function Oe(e, t) {
  var n = y;
  n !== null && (n.f & ee) !== 0 && (e |= ee);
  var r = {
    ctx: ne,
    deps: null,
    nodes: null,
    f: e | I | $,
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
  b?.register_created_effect(r);
  var s = r;
  if ((e & ht) !== 0)
    Ze !== null ? Ze.push(r) : ze.ensure().schedule(r);
  else if (t !== null) {
    try {
      at(r);
    } catch (f) {
      throw K(r), f;
    }
    s.deps === null && s.teardown === null && s.nodes === null && s.first === s.last && // either `null`, or a singular child
    (s.f & ot) === 0 && (s = s.first, (e & de) !== 0 && (e & it) !== 0 && s !== null && (s.f |= it));
  }
  if (s !== null && (s.parent = n, n !== null && Gs(s, n), m !== null && (m.f & j) !== 0 && (e & Ne) === 0)) {
    var l = (
      /** @type {Derived} */
      m
    );
    (l.effects ?? (l.effects = [])).push(s);
  }
  return r;
}
function vn() {
  return m !== null && !ae;
}
function zs(e) {
  const t = Oe(Yt, null);
  return O(t, M), t.teardown = e, t;
}
function Js(e) {
  qs();
  var t = (
    /** @type {Effect} */
    y.f
  ), n = !m && (t & he) !== 0 && (t & Je) === 0;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      ne
    );
    (r.e ?? (r.e = [])).push(e);
  } else
    return lr(e);
}
function lr(e) {
  return Oe(ht | ss, e);
}
function Hs(e) {
  ze.ensure();
  const t = Oe(Ne | ot, e);
  return (n = {}) => new Promise((r) => {
    n.outro ? dt(t, () => {
      K(t), r(void 0);
    }) : (K(t), r(void 0));
  });
}
function Ks(e) {
  return Oe(vt | ot, e);
}
function ar(e, t = 0) {
  return Oe(Yt | t, e);
}
function Me(e, t = [], n = [], r = []) {
  Ds(r, t, n, (s) => {
    Oe(Yt, () => e(...s.map(k)));
  });
}
function or(e, t = 0) {
  var n = Oe(de | t, e);
  return n;
}
function be(e) {
  return Oe(he | ot, e);
}
function fr(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = Re, r = m;
    Mn(!0), re(null);
    try {
      t.call(null);
    } finally {
      Mn(n), re(r);
    }
  }
}
function _n(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const s = n.ac;
    s !== null && hn(() => {
      s.abort(we);
    });
    var r = n.next;
    (n.f & Ne) !== 0 ? n.parent = null : K(n, t), n = r;
  }
}
function Ws(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & he) === 0 && K(t), t = n;
  }
}
function K(e, t = !0) {
  var n = !1;
  (t || (e.f & rs) !== 0) && e.nodes !== null && e.nodes.end !== null && (Zs(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), n = !0), O(e, An), _n(e, t && !n), _t(e, 0);
  var r = e.nodes && e.nodes.t;
  if (r !== null)
    for (const l of r)
      l.stop();
  fr(e), e.f ^= An, e.f |= oe;
  var s = e.parent;
  s !== null && s.first !== null && ur(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function Zs(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : /* @__PURE__ */ dn(e);
    e.remove(), e = n;
  }
}
function ur(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function dt(e, t, n = !0) {
  var r = [];
  cr(e, r, !0);
  var s = () => {
    n && K(e), t && t();
  }, l = r.length;
  if (l > 0) {
    var f = () => --l || s();
    for (var o of r)
      o.out(f);
  } else
    s();
}
function cr(e, t, n) {
  if ((e.f & ee) === 0) {
    e.f ^= ee;
    var r = e.nodes && e.nodes.t;
    if (r !== null)
      for (const o of r)
        (o.is_global || n) && t.push(o);
    for (var s = e.first; s !== null; ) {
      var l = s.next;
      if ((s.f & Ne) === 0) {
        var f = (s.f & it) !== 0 || // If this is a branch effect without a block effect parent,
        // it means the parent block effect was pruned. In that case,
        // transparency information was transferred to the branch effect.
        (s.f & he) !== 0 && (e.f & de) !== 0;
        cr(s, t, f ? n : !1);
      }
      s = l;
    }
  }
}
function Qs(e) {
  dr(e, !0);
}
function dr(e, t) {
  if ((e.f & ee) !== 0) {
    e.f ^= ee, (e.f & M) === 0 && (O(e, I), ze.ensure().schedule(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, s = (n.f & it) !== 0 || (n.f & he) !== 0;
      dr(n, s ? t : !1), n = r;
    }
    var l = e.nodes && e.nodes.t;
    if (l !== null)
      for (const f of l)
        (f.is_global || t) && f.in();
  }
}
function hr(e, t) {
  if (e.nodes)
    for (var n = e.nodes.start, r = e.nodes.end; n !== null; ) {
      var s = n === r ? null : /* @__PURE__ */ dn(n);
      t.append(n), n = s;
    }
}
let Ct = !1, Re = !1;
function Mn(e) {
  Re = e;
}
let m = null, ae = !1;
function re(e) {
  m = e;
}
let y = null;
function _e(e) {
  y = e;
}
let te = null;
function Xs(e) {
  m !== null && (te === null ? te = [e] : te.push(e));
}
let B = null, G = 0, W = null;
function $s(e) {
  W = e;
}
let vr = 1, Fe = 0, qe = Fe;
function Pn(e) {
  qe = e;
}
function _r() {
  return ++vr;
}
function xt(e) {
  var t = e.f;
  if ((t & I) !== 0)
    return !0;
  if (t & j && (e.f &= ~Ge), (t & ve) !== 0) {
    for (var n = (
      /** @type {Value[]} */
      e.deps
    ), r = n.length, s = 0; s < r; s++) {
      var l = n[s];
      if (xt(
        /** @type {Derived} */
        l
      ) && Xn(
        /** @type {Derived} */
        l
      ), l.wv > e.wv)
        return !0;
    }
    (t & $) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    le === null && O(e, M);
  }
  return !1;
}
function pr(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null && !(te !== null && st.call(te, e)))
    for (var s = 0; s < r.length; s++) {
      var l = r[s];
      (l.f & j) !== 0 ? pr(
        /** @type {Derived} */
        l,
        t,
        !1
      ) : t === l && (n ? O(l, I) : (l.f & M) !== 0 && O(l, ve), un(
        /** @type {Effect} */
        l
      ));
    }
}
function gr(e) {
  var S;
  var t = B, n = G, r = W, s = m, l = te, f = ne, o = ae, a = qe, u = e.f;
  B = /** @type {null | Value[]} */
  null, G = 0, W = null, m = (u & (he | Ne)) === 0 ? e : null, te = null, lt(e.ctx), ae = !1, qe = ++Fe, e.ac !== null && (hn(() => {
    e.ac.abort(we);
  }), e.ac = null);
  try {
    e.f |= Ft;
    var h = (
      /** @type {Function} */
      e.fn
    ), p = h();
    e.f |= Je;
    var v = e.deps, c = b?.is_fork;
    if (B !== null) {
      var d;
      if (c || _t(e, G), v !== null && G > 0)
        for (v.length = G + B.length, d = 0; d < B.length; d++)
          v[G + d] = B[d];
      else
        e.deps = v = B;
      if (vn() && (e.f & $) !== 0)
        for (d = G; d < v.length; d++)
          ((S = v[d]).reactions ?? (S.reactions = [])).push(e);
    } else !c && v !== null && G < v.length && (_t(e, G), v.length = G);
    if (Yn() && W !== null && !ae && v !== null && (e.f & (j | ve | I)) === 0)
      for (d = 0; d < /** @type {Source[]} */
      W.length; d++)
        pr(
          W[d],
          /** @type {Effect} */
          e
        );
    if (s !== null && s !== e) {
      if (Fe++, s.deps !== null)
        for (let x = 0; x < n; x += 1)
          s.deps[x].rv = Fe;
      if (t !== null)
        for (const x of t)
          x.rv = Fe;
      W !== null && (r === null ? r = W : r.push(.../** @type {Source[]} */
      W));
    }
    return (e.f & Ae) !== 0 && (e.f ^= Ae), p;
  } catch (x) {
    return Gn(x);
  } finally {
    e.f ^= Ft, B = t, G = n, W = r, m = s, te = l, lt(f), ae = o, qe = a;
  }
}
function ei(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = Wr.call(n, e);
    if (r !== -1) {
      var s = n.length - 1;
      s === 0 ? n = t.reactions = null : (n[r] = n[s], n.pop());
    }
  }
  if (n === null && (t.f & j) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (B === null || !st.call(B, t))) {
    var l = (
      /** @type {Derived} */
      t
    );
    (l.f & $) !== 0 && (l.f ^= $, l.f &= ~Ge), l.v !== P && on(l), Is(l), _t(l, 0);
  }
}
function _t(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      ei(e, n[r]);
}
function at(e) {
  var t = e.f;
  if ((t & oe) === 0) {
    O(e, M);
    var n = y, r = Ct;
    y = e, Ct = !0;
    try {
      (t & (de | Ln)) !== 0 ? Ws(e) : _n(e), fr(e);
      var s = gr(e);
      e.teardown = typeof s == "function" ? s : null, e.wv = vr;
      var l;
    } finally {
      Ct = r, y = n;
    }
  }
}
async function ti() {
  await Promise.resolve(), xs();
}
function k(e) {
  var t = e.f, n = (t & j) !== 0;
  if (m !== null && !ae) {
    var r = y !== null && (y.f & oe) !== 0;
    if (!r && (te === null || !st.call(te, e))) {
      var s = m.deps;
      if ((m.f & Ft) !== 0)
        e.rv < Fe && (e.rv = Fe, B === null && s !== null && s[G] === e ? G++ : B === null ? B = [e] : B.push(e));
      else {
        (m.deps ?? (m.deps = [])).push(e);
        var l = e.reactions;
        l === null ? e.reactions = [m] : st.call(l, m) || l.push(m);
      }
    }
  }
  if (Re && Ye.has(e))
    return Ye.get(e);
  if (n) {
    var f = (
      /** @type {Derived} */
      e
    );
    if (Re) {
      var o = f.v;
      return ((f.f & M) === 0 && f.reactions !== null || wr(f)) && (o = cn(f)), Ye.set(f, o), o;
    }
    var a = (f.f & $) === 0 && !ae && m !== null && (Ct || (m.f & $) !== 0), u = (f.f & Je) === 0;
    xt(f) && (a && (f.f |= $), Xn(f)), a && !u && ($n(f), br(f));
  }
  if (le?.has(e))
    return le.get(e);
  if ((e.f & Ae) !== 0)
    throw e.v;
  return e.v;
}
function br(e) {
  if (e.f |= $, e.deps !== null)
    for (const t of e.deps)
      (t.reactions ?? (t.reactions = [])).push(e), (t.f & j) !== 0 && (t.f & $) === 0 && ($n(
        /** @type {Derived} */
        t
      ), br(
        /** @type {Derived} */
        t
      ));
}
function wr(e) {
  if (e.v === P) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (Ye.has(t) || (t.f & j) !== 0 && wr(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function mr(e) {
  var t = ae;
  try {
    return ae = !0, e();
  } finally {
    ae = t;
  }
}
const ni = ["touchstart", "touchmove"];
function ri(e) {
  return ni.includes(e);
}
const Ie = Symbol("events"), yr = /* @__PURE__ */ new Set(), sn = /* @__PURE__ */ new Set();
function Tt(e, t, n) {
  (t[Ie] ?? (t[Ie] = {}))[e] = n;
}
function si(e) {
  for (var t = 0; t < e.length; t++)
    yr.add(e[t]);
  for (var n of sn)
    n(e);
}
let Cn = null;
function Fn(e) {
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), r = e.type, s = e.composedPath?.() || [], l = (
    /** @type {null | Element} */
    s[0] || e.target
  );
  Cn = e;
  var f = 0, o = Cn === e && e[Ie];
  if (o) {
    var a = s.indexOf(o);
    if (a !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e[Ie] = t;
      return;
    }
    var u = s.indexOf(t);
    if (u === -1)
      return;
    a <= u && (f = a);
  }
  if (l = /** @type {Element} */
  s[f] || e.target, l !== t) {
    Qr(e, "currentTarget", {
      configurable: !0,
      get() {
        return l || n;
      }
    });
    var h = m, p = y;
    re(null), _e(null);
    try {
      for (var v, c = []; l !== null; ) {
        var d = l.assignedSlot || l.parentNode || /** @type {any} */
        l.host || null;
        try {
          var S = l[Ie]?.[r];
          S != null && (!/** @type {any} */
          l.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === l) && S.call(l, e);
        } catch (x) {
          v ? c.push(x) : v = x;
        }
        if (e.cancelBubble || d === t || d === null)
          break;
        l = d;
      }
      if (v) {
        for (let x of c)
          queueMicrotask(() => {
            throw x;
          });
        throw v;
      }
    } finally {
      e[Ie] = t, delete e.currentTarget, re(h), _e(p);
    }
  }
}
const ii = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (e) => e
  })
);
function li(e) {
  return (
    /** @type {string} */
    ii?.createHTML(e) ?? e
  );
}
function ai(e) {
  var t = Vs("template");
  return t.innerHTML = li(e.replaceAll("<!>", "<!---->")), t.content;
}
function oi(e, t) {
  var n = (
    /** @type {Effect} */
    y
  );
  n.nodes === null && (n.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function He(e, t) {
  var n = (t & vs) !== 0, r, s = !e.startsWith("<!>");
  return () => {
    r === void 0 && (r = ai(s ? e : "<!>" + e), r = /** @type {TemplateNode} */
    /* @__PURE__ */ ir(r));
    var l = (
      /** @type {TemplateNode} */
      n || nr ? document.importNode(r, !0) : r.cloneNode(!0)
    );
    return oi(l, l), l;
  };
}
function Pe(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function q(e, t) {
  var n = t == null ? "" : typeof t == "object" ? `${t}` : t;
  n !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = n, e.nodeValue = `${n}`);
}
function fi(e, t) {
  return ui(e, t);
}
const At = /* @__PURE__ */ new Map();
function ui(e, { target: t, anchor: n, props: r = {}, events: s, context: l, intro: f = !0, transformError: o }) {
  Ls();
  var a = void 0, u = Hs(() => {
    var h = n ?? t.appendChild(Lt());
    Ts(
      /** @type {TemplateNode} */
      h,
      {
        pending: () => {
        }
      },
      (c) => {
        Vn({});
        var d = (
          /** @type {ComponentContext} */
          ne
        );
        l && (d.c = l), s && (r.$$events = s), a = e(c, r) || {}, Bn();
      },
      o
    );
    var p = /* @__PURE__ */ new Set(), v = (c) => {
      for (var d = 0; d < c.length; d++) {
        var S = c[d];
        if (!p.has(S)) {
          p.add(S);
          var x = ri(S);
          for (const Ke of [t, document]) {
            var Y = At.get(Ke);
            Y === void 0 && (Y = /* @__PURE__ */ new Map(), At.set(Ke, Y));
            var pe = Y.get(S);
            pe === void 0 ? (Ke.addEventListener(S, Fn, { passive: x }), Y.set(S, 1)) : Y.set(S, pe + 1);
          }
        }
      }
    };
    return v(Zr(yr)), sn.add(v), () => {
      for (var c of p)
        for (const x of [t, document]) {
          var d = (
            /** @type {Map<string, number>} */
            At.get(x)
          ), S = (
            /** @type {number} */
            d.get(c)
          );
          --S == 0 ? (x.removeEventListener(c, Fn), d.delete(c), d.size === 0 && At.delete(x)) : d.set(c, S);
        }
      sn.delete(v), h !== n && h.parentNode?.removeChild(h);
    };
  });
  return ln.set(a, u), a;
}
let ln = /* @__PURE__ */ new WeakMap();
function ci(e, t) {
  const n = ln.get(e);
  return n ? (ln.delete(e), n(t)) : Promise.resolve();
}
var ie, ce, H, Be, mt, yt, Bt;
class di {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, n = !0) {
    /** @type {TemplateNode} */
    se(this, "anchor");
    /** @type {Map<Batch, Key>} */
    g(this, ie, /* @__PURE__ */ new Map());
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
    g(this, ce, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    g(this, H, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    g(this, Be, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    g(this, mt, !0);
    /**
     * @param {Batch} batch
     */
    g(this, yt, (t) => {
      if (i(this, ie).has(t)) {
        var n = (
          /** @type {Key} */
          i(this, ie).get(t)
        ), r = i(this, ce).get(n);
        if (r)
          Qs(r), i(this, Be).delete(n);
        else {
          var s = i(this, H).get(n);
          s && (i(this, ce).set(n, s.effect), i(this, H).delete(n), s.fragment.lastChild.remove(), this.anchor.before(s.fragment), r = s.effect);
        }
        for (const [l, f] of i(this, ie)) {
          if (i(this, ie).delete(l), l === t)
            break;
          const o = i(this, H).get(f);
          o && (K(o.effect), i(this, H).delete(f));
        }
        for (const [l, f] of i(this, ce)) {
          if (l === n || i(this, Be).has(l)) continue;
          const o = () => {
            if (Array.from(i(this, ie).values()).includes(l)) {
              var u = document.createDocumentFragment();
              hr(f, u), u.append(Lt()), i(this, H).set(l, { effect: f, fragment: u });
            } else
              K(f);
            i(this, Be).delete(l), i(this, ce).delete(l);
          };
          i(this, mt) || !r ? (i(this, Be).add(l), dt(f, o, !1)) : o();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    g(this, Bt, (t) => {
      i(this, ie).delete(t);
      const n = Array.from(i(this, ie).values());
      for (const [r, s] of i(this, H))
        n.includes(r) || (K(s.effect), i(this, H).delete(r));
    });
    this.anchor = t, w(this, mt, n);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, n) {
    var r = (
      /** @type {Batch} */
      b
    ), s = Us();
    if (n && !i(this, ce).has(t) && !i(this, H).has(t))
      if (s) {
        var l = document.createDocumentFragment(), f = Lt();
        l.append(f), i(this, H).set(t, {
          effect: be(() => n(f)),
          fragment: l
        });
      } else
        i(this, ce).set(
          t,
          be(() => n(this.anchor))
        );
    if (i(this, ie).set(r, t), s) {
      for (const [o, a] of i(this, ce))
        o === t ? r.unskip_effect(a) : r.skip_effect(a);
      for (const [o, a] of i(this, H))
        o === t ? r.unskip_effect(a.effect) : r.skip_effect(a.effect);
      r.oncommit(i(this, yt)), r.ondiscard(i(this, Bt));
    } else
      i(this, yt).call(this, r);
  }
}
ie = new WeakMap(), ce = new WeakMap(), H = new WeakMap(), Be = new WeakMap(), mt = new WeakMap(), yt = new WeakMap(), Bt = new WeakMap();
function We(e, t, n = !1) {
  var r = new di(e), s = n ? it : 0;
  function l(f, o) {
    r.ensure(f, o);
  }
  or(() => {
    var f = !1;
    t((o, a = 0) => {
      f = !0, l(a, o);
    }), f || l(-1, null);
  }, s);
}
function hi(e, t, n = t) {
  var r = /* @__PURE__ */ new WeakSet();
  Ys(e, "input", async (s) => {
    var l = s ? e.defaultValue : e.value;
    if (l = Kt(e) ? Wt(l) : l, n(l), b !== null && r.add(b), await ti(), l !== (l = t())) {
      var f = e.selectionStart, o = e.selectionEnd, a = e.value.length;
      if (e.value = l ?? "", o !== null) {
        var u = e.value.length;
        f === o && o === a && u > a ? (e.selectionStart = u, e.selectionEnd = u) : (e.selectionStart = f, e.selectionEnd = Math.min(o, u));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  mr(t) == null && e.value && (n(Kt(e) ? Wt(e.value) : e.value), b !== null && r.add(b)), ar(() => {
    var s = t();
    if (e === document.activeElement) {
      var l = (
        /** @type {Batch} */
        b
      );
      if (r.has(l))
        return;
    }
    Kt(e) && s === Wt(e.value) || e.type === "date" && !s && !e.value || s !== e.value && (e.value = s ?? "");
  });
}
function Kt(e) {
  var t = e.type;
  return t === "number" || t === "range";
}
function Wt(e) {
  return e === "" ? null : +e;
}
const vi = "5";
var In;
typeof window < "u" && ((In = window.__svelte ?? (window.__svelte = {})).v ?? (In.v = /* @__PURE__ */ new Set())).add(vi);
var _i = /* @__PURE__ */ He('<span class="inline-block rounded-full bg-indigo-100 text-indigo-800 px-2.5 py-0.5 text-xs font-medium"> </span>'), pi = /* @__PURE__ */ He('<div class="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800"> </div>'), gi = /* @__PURE__ */ He('<pre class="mt-3 rounded-lg border border-gray-200 bg-gray-50 p-3 text-xs font-mono whitespace-pre-wrap break-words max-h-72 overflow-y-auto"> </pre>'), bi = /* @__PURE__ */ He('<pre class="mt-3 rounded-lg border border-gray-200 bg-gray-50 p-3 text-xs font-mono whitespace-pre-wrap break-words max-h-72 overflow-y-auto"> </pre>'), wi = /* @__PURE__ */ He('<pre class="mt-3 rounded-lg border border-gray-200 bg-gray-50 p-3 text-xs font-mono whitespace-pre-wrap break-words max-h-72 overflow-y-auto"> </pre>'), mi = /* @__PURE__ */ He('<pre class="mt-3 rounded-lg border border-gray-200 bg-gray-50 p-3 text-xs font-mono whitespace-pre-wrap break-words max-h-72 overflow-y-auto"> </pre>'), yi = /* @__PURE__ */ He('<div class="max-w-2xl mx-auto p-6 space-y-4"><div class="flex items-center gap-3 mb-2"><h2 class="text-2xl font-bold text-gray-900">Test Bench</h2> <!></div> <!> <div class="rounded-lg border border-gray-200 bg-white p-5 shadow-sm"><h3 class="text-base font-semibold text-gray-900 mb-3">Greet</h3> <div class="flex gap-2"><input type="text" placeholder="Name" class="flex-1 rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none"/> <button class="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"> </button></div> <!></div> <div class="rounded-lg border border-gray-200 bg-white p-5 shadow-sm"><h3 class="text-base font-semibold text-gray-900 mb-3">Extension Async Call</h3> <button class="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"> </button> <!></div> <div class="rounded-lg border border-gray-200 bg-white p-5 shadow-sm"><h3 class="text-base font-semibold text-gray-900 mb-3">Universe</h3> <button class="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"> </button> <!></div> <div class="rounded-lg border border-gray-200 bg-white p-5 shadow-sm"><h3 class="text-base font-semibold text-gray-900 mb-3">Snapshots</h3> <button class="rounded-lg bg-purple-600 px-4 py-2 text-sm font-medium text-white hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"> </button> <!></div> <div class="rounded-lg border border-gray-200 bg-white p-5 shadow-sm"><h3 class="text-base font-semibold text-gray-900 mb-3">Context</h3> <dl class="divide-y divide-gray-100 text-sm"><div class="flex justify-between py-2"><dt class="text-gray-500">Extension ID</dt> <dd class="font-medium text-gray-900"> </dd></div> <div class="flex justify-between py-2"><dt class="text-gray-500">Principal</dt> <dd class="font-mono text-xs text-gray-900"> </dd></div> <div class="flex justify-between py-2"><dt class="text-gray-500">Authenticated</dt> <dd class="font-medium text-gray-900"> </dd></div></dl></div></div>');
function xi(e, t) {
  Vn(t, !0);
  let n = /* @__PURE__ */ F("Tester"), r = /* @__PURE__ */ F(""), s = /* @__PURE__ */ F(""), l = /* @__PURE__ */ F(""), f = /* @__PURE__ */ F(""), o = /* @__PURE__ */ F(Qe({})), a = /* @__PURE__ */ F(""), u = /* @__PURE__ */ F(""), h = /* @__PURE__ */ F(!1);
  Js(() => {
    const _ = [];
    return t.ctx.principal && _.push(t.ctx.principal.subscribe((E) => C(u, E, !0))), t.ctx.isAuthenticated && _.push(t.ctx.isAuthenticated.subscribe((E) => C(h, E, !0))), () => _.forEach((E) => E());
  });
  const p = t.ctx.config?.extensionId ?? "test_bench", v = t.ctx.config?.version ?? "";
  async function c(_, E) {
    C(o, { ...k(o), [_]: !0 }, !0), C(a, "");
    try {
      await E();
    } catch (U) {
      C(a, `${_}: ${U?.message || String(U)}`);
    } finally {
      C(o, { ...k(o), [_]: !1 }, !0);
    }
  }
  async function d() {
    await c("greet", async () => {
      const _ = await t.ctx.backend.greet(k(n));
      C(r, typeof _ == "string" ? _ : JSON.stringify(_, null, 2), !0);
    });
  }
  async function S() {
    await c("async", async () => {
      const _ = await t.ctx.backend.extension_async_call(JSON.stringify({
        extension_name: p,
        function_name: "get_data",
        args: "from frontend-rt"
      })), E = typeof _ == "string" ? JSON.parse(_) : _;
      C(s, JSON.stringify(E, null, 2), !0);
    });
  }
  async function x() {
    await c("universe", async () => {
      const _ = await t.ctx.backend.get_universe(), E = typeof _ == "string" ? JSON.parse(_) : _;
      C(l, JSON.stringify(E, null, 2), !0);
    });
  }
  async function Y() {
    await c("snapshots", async () => {
      const _ = await t.ctx.backend.get_snapshots(), E = typeof _ == "string" ? JSON.parse(_) : _;
      C(f, JSON.stringify(E, null, 2), !0);
    });
  }
  var pe = yi(), Ke = A(pe), xr = N(A(Ke), 2);
  {
    var Er = (_) => {
      var E = _i(), U = A(E);
      Me(() => q(U, `v${v ?? ""}`)), Pe(_, E);
    };
    We(xr, (_) => {
      v && _(Er);
    });
  }
  var pn = N(Ke, 2);
  {
    var kr = (_) => {
      var E = pi(), U = A(E);
      Me(() => q(U, k(a))), Pe(_, E);
    };
    We(pn, (_) => {
      k(a) && _(kr);
    });
  }
  var gn = N(pn, 2), bn = N(A(gn), 2), wn = A(bn), Gt = N(wn, 2), Sr = A(Gt), Tr = N(bn, 2);
  {
    var Ar = (_) => {
      var E = gi(), U = A(E);
      Me(() => q(U, k(r))), Pe(_, E);
    };
    We(Tr, (_) => {
      k(r) && _(Ar);
    });
  }
  var mn = N(gn, 2), Et = N(A(mn), 2), Nr = A(Et), Rr = N(Et, 2);
  {
    var Or = (_) => {
      var E = bi(), U = A(E);
      Me(() => q(U, k(s))), Pe(_, E);
    };
    We(Rr, (_) => {
      k(s) && _(Or);
    });
  }
  var yn = N(mn, 2), kt = N(A(yn), 2), Dr = A(kt), Mr = N(kt, 2);
  {
    var Pr = (_) => {
      var E = wi(), U = A(E);
      Me(() => q(U, k(l))), Pe(_, E);
    };
    We(Mr, (_) => {
      k(l) && _(Pr);
    });
  }
  var xn = N(yn, 2), St = N(A(xn), 2), Cr = A(St), Fr = N(St, 2);
  {
    var Ir = (_) => {
      var E = mi(), U = A(E);
      Me(() => q(U, k(f))), Pe(_, E);
    };
    We(Fr, (_) => {
      k(f) && _(Ir);
    });
  }
  var jr = N(xn, 2), Lr = N(A(jr), 2), En = A(Lr), Ur = N(A(En), 2), Vr = A(Ur), kn = N(En, 2), Br = N(A(kn), 2), Yr = A(Br), qr = N(kn, 2), Gr = N(A(qr), 2), zr = A(Gr);
  Me(() => {
    Gt.disabled = k(o).greet, q(Sr, k(o).greet ? "..." : "Greet"), Et.disabled = k(o).async, q(Nr, k(o).async ? "Running..." : "Call get_data (async)"), kt.disabled = k(o).universe, q(Dr, k(o).universe ? "Loading..." : "Get Universe"), St.disabled = k(o).snapshots, q(Cr, k(o).snapshots ? "Loading..." : "Get Snapshots"), q(Vr, p), q(Yr, k(u) || "(anonymous)"), q(zr, k(h) ? "Yes" : "No");
  }), hi(wn, () => k(n), (_) => C(n, _)), Tt("click", Gt, d), Tt("click", Et, S), Tt("click", kt, x), Tt("click", St, Y), Pe(e, pe), Bn();
}
si(["click"]);
function Si(e, t) {
  const n = fi(xi, { target: e, props: { ctx: t } });
  return {
    unmount() {
      try {
        ci(n);
      } catch {
      }
    }
  };
}
export {
  Si as default
};
