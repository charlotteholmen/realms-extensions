var Hn = Object.defineProperty;
var kr = (e) => {
  throw TypeError(e);
};
var Jn = (e, t, r) => t in e ? Hn(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var se = (e, t, r) => Jn(e, typeof t != "symbol" ? t + "" : t, r), zt = (e, t, r) => t.has(e) || kr("Cannot " + r);
var i = (e, t, r) => (zt(e, t, "read from private field"), r ? r.call(e) : t.get(e)), g = (e, t, r) => t.has(e) ? kr("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), w = (e, t, r, n) => (zt(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r), T = (e, t, r) => (zt(e, t, "access private method"), r);
var Kn = Array.isArray, Wn = Array.prototype.indexOf, st = Array.prototype.includes, Zn = Array.from, Qn = Object.defineProperty, ft = Object.getOwnPropertyDescriptor, Xn = Object.prototype, $n = Array.prototype, es = Object.getPrototypeOf, Sr = Object.isExtensible;
const ts = () => {
};
function rs(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function Ir() {
  var e, t, r = new Promise((n, s) => {
    e = n, t = s;
  });
  return { promise: r, resolve: e, reject: t };
}
const j = 2, ht = 4, Yt = 8, jr = 1 << 24, de = 16, he = 32, Ne = 64, Zt = 128, $ = 512, M = 1024, I = 2048, ve = 4096, ee = 8192, oe = 16384, He = 32768, Tr = 1 << 25, it = 65536, Qt = 1 << 17, ns = 1 << 18, ot = 1 << 19, ss = 1 << 20, Ge = 65536, Ft = 1 << 21, vt = 1 << 22, Ae = 1 << 23, Ht = Symbol("$state"), we = new class extends Error {
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
function Lr(e) {
  return e === this.v;
}
let re = null;
function lt(e) {
  re = e;
}
function Ur(e, t = !1, r) {
  re = {
    p: re,
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
function Vr(e) {
  var t = (
    /** @type {ComponentContext} */
    re
  ), r = t.e;
  if (r !== null) {
    t.e = null;
    for (var n of r)
      ln(n);
  }
  return t.i = !0, re = t.p, /** @type {T} */
  {};
}
function Br() {
  return !0;
}
let Ce = [];
function Yr() {
  var e = Ce;
  Ce = [], rs(e);
}
function Xe(e) {
  if (Ce.length === 0 && !ut) {
    var t = Ce;
    queueMicrotask(() => {
      t === Ce && Yr();
    });
  }
  Ce.push(e);
}
function bs() {
  for (; Ce.length > 0; )
    Yr();
}
function qr(e) {
  var t = y;
  if (t === null)
    return m.f |= Ae, e;
  if ((t.f & He) === 0 && (t.f & ht) === 0)
    throw e;
  Te(e, t);
}
function Te(e, t) {
  for (; t !== null; ) {
    if ((t.f & Zt) !== 0) {
      if ((t.f & He) === 0)
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
const ws = -7169;
function O(e, t) {
  e.f = e.f & ws | t;
}
function ar(e) {
  (e.f & $) !== 0 || e.deps === null ? O(e, M) : O(e, ve);
}
function Gr(e) {
  if (e !== null)
    for (const t of e)
      (t.f & j) === 0 || (t.f & Ge) === 0 || (t.f ^= Ge, Gr(
        /** @type {Derived} */
        t.deps
      ));
}
function zr(e, t, r) {
  (e.f & I) !== 0 ? t.add(e) : (e.f & ve) !== 0 && r.add(e), Gr(e.deps), O(e, M);
}
const De = /* @__PURE__ */ new Set();
let b = null, le = null, Xt = null, ut = !1, Jt = !1, Ze = null, Nt = null;
var Ar = 0;
let ms = 1;
var $e, et, je, me, fe, pt, z, gt, ke, ye, ue, tt, rt, Le, D, Rt, Hr, Ot, $t, Dt, ys;
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
    g(this, rt, !1);
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
  unskip_effect(t, r = (n) => this.schedule(n)) {
    var n = i(this, ue).get(t);
    if (n) {
      i(this, ue).delete(t);
      for (var s of n.d)
        O(s, I), r(s);
      for (s of n.m)
        O(s, ve), r(s);
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
  capture(t, r, n = !1) {
    t.v !== P && !this.previous.has(t) && this.previous.set(t, t.v), (t.f & Ae) === 0 && (this.current.set(t, [r, n]), le?.set(t, r)), this.is_fork || (t.v = r);
  }
  activate() {
    b = this;
  }
  deactivate() {
    b = null, le = null;
  }
  flush() {
    try {
      Jt = !0, b = this, T(this, D, Ot).call(this);
    } finally {
      Ar = 0, Xt = null, Ze = null, Nt = null, Jt = !1, b = null, le = null, Ye.clear();
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
  increment(t, r) {
    let n = i(this, me).get(r) ?? 0;
    if (i(this, me).set(r, n + 1), t) {
      let s = i(this, fe).get(r) ?? 0;
      i(this, fe).set(r, s + 1);
    }
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   * @param {boolean} skip - whether to skip updates (because this is triggered by a stale reaction)
   */
  decrement(t, r, n) {
    let s = i(this, me).get(r) ?? 0;
    if (s === 1 ? i(this, me).delete(r) : i(this, me).set(r, s - 1), t) {
      let l = i(this, fe).get(r) ?? 0;
      l === 1 ? i(this, fe).delete(r) : i(this, fe).set(r, l - 1);
    }
    i(this, rt) || n || (w(this, rt, !0), Xe(() => {
      w(this, rt, !1), this.flush();
    }));
  }
  /**
   * @param {Set<Effect>} dirty_effects
   * @param {Set<Effect>} maybe_dirty_effects
   */
  transfer_effects(t, r) {
    for (const n of t)
      i(this, ke).add(n);
    for (const n of r)
      i(this, ye).add(n);
    t.clear(), r.clear();
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
    return (i(this, pt) ?? w(this, pt, Ir())).promise;
  }
  static ensure() {
    if (b === null) {
      const t = b = new Ut();
      Jt || (De.add(b), ut || Xe(() => {
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
    if (Xt = t, t.b?.is_pending && (t.f & (ht | Yt | jr)) !== 0 && (t.f & He) === 0) {
      t.b.defer_effect(t);
      return;
    }
    for (var r = t; r.parent !== null; ) {
      r = r.parent;
      var n = r.f;
      if (Ze !== null && r === y && (m === null || (m.f & j) === 0))
        return;
      if ((n & (Ne | he)) !== 0) {
        if ((n & M) === 0)
          return;
        r.f ^= M;
      }
    }
    i(this, z).push(r);
  }
};
$e = new WeakMap(), et = new WeakMap(), je = new WeakMap(), me = new WeakMap(), fe = new WeakMap(), pt = new WeakMap(), z = new WeakMap(), gt = new WeakMap(), ke = new WeakMap(), ye = new WeakMap(), ue = new WeakMap(), tt = new WeakMap(), rt = new WeakMap(), Le = new WeakMap(), D = new WeakSet(), Rt = function() {
  return this.is_fork || i(this, fe).size > 0;
}, Hr = function() {
  for (const n of i(this, Le))
    for (const s of i(n, fe).keys()) {
      for (var t = !1, r = s; r.parent !== null; ) {
        if (i(this, ue).has(r)) {
          t = !0;
          break;
        }
        r = r.parent;
      }
      if (!t)
        return !0;
    }
  return !1;
}, Ot = function() {
  var o;
  if (Ar++ > 1e3 && (De.delete(this), Es()), !T(this, D, Rt).call(this)) {
    for (const a of i(this, ke))
      i(this, ye).delete(a), O(a, I), this.schedule(a);
    for (const a of i(this, ye))
      O(a, ve), this.schedule(a);
  }
  const t = i(this, z);
  w(this, z, []), this.apply();
  var r = Ze = [], n = [], s = Nt = [];
  for (const a of t)
    try {
      T(this, D, $t).call(this, a, r, n);
    } catch (u) {
      throw Wr(a), u;
    }
  if (b = null, s.length > 0) {
    var l = Ut.ensure();
    for (const a of s)
      l.schedule(a);
  }
  if (Ze = null, Nt = null, T(this, D, Rt).call(this) || T(this, D, Hr).call(this)) {
    T(this, D, Dt).call(this, n), T(this, D, Dt).call(this, r);
    for (const [a, u] of i(this, ue))
      Kr(a, u);
  } else {
    i(this, me).size === 0 && De.delete(this), i(this, ke).clear(), i(this, ye).clear();
    for (const a of i(this, $e)) a(this);
    i(this, $e).clear(), Nr(n), Nr(r), i(this, pt)?.resolve();
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
$t = function(t, r, n) {
  t.f ^= M;
  for (var s = t.first; s !== null; ) {
    var l = s.f, f = (l & (he | Ne)) !== 0, o = f && (l & M) !== 0, a = o || (l & ee) !== 0 || i(this, ue).has(s);
    if (!a && s.fn !== null) {
      f ? s.f ^= M : (l & ht) !== 0 ? r.push(s) : xt(s) && ((l & de) !== 0 && i(this, ye).add(s), at(s));
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
  for (var r = 0; r < t.length; r += 1)
    zr(t[r], i(this, ke), i(this, ye));
}, ys = function() {
  var h, p, v;
  for (const c of De) {
    var t = c.id < this.id, r = [];
    for (const [d, [k, x]] of this.current) {
      if (c.current.has(d)) {
        var n = (
          /** @type {[any, boolean]} */
          c.current.get(d)[0]
        );
        if (t && k !== n)
          c.current.set(d, [k, x]);
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
        for (const d of i(this, tt))
          c.unskip_effect(d, (k) => {
            var x;
            (k.f & (de | vt)) !== 0 ? c.schedule(k) : T(x = c, D, Dt).call(x, [k]);
          });
      c.activate();
      var l = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Map();
      for (var o of r)
        Jr(o, s, l, f);
      f = /* @__PURE__ */ new Map();
      var a = [...c.current.keys()].filter(
        (d) => this.current.has(d) ? (
          /** @type {[any, boolean]} */
          this.current.get(d)[0] !== d
        ) : !0
      );
      for (const d of i(this, gt))
        (d.f & (oe | ee | Qt)) === 0 && or(d, a, f) && ((d.f & (vt | de)) !== 0 ? (O(d, I), c.schedule(d)) : i(c, ke).add(d));
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
    for (var r; ; ) {
      if (bs(), b === null)
        return (
          /** @type {T} */
          r
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
function Nr(e) {
  var t = e.length;
  if (t !== 0) {
    for (var r = 0; r < t; ) {
      var n = e[r++];
      if ((n.f & (oe | ee)) === 0 && xt(n) && (ge = /* @__PURE__ */ new Set(), at(n), n.deps === null && n.first === null && n.nodes === null && n.teardown === null && n.ac === null && un(n), ge?.size > 0)) {
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
function Jr(e, t, r, n) {
  if (!r.has(e) && (r.add(e), e.reactions !== null))
    for (const s of e.reactions) {
      const l = s.f;
      (l & j) !== 0 ? Jr(
        /** @type {Derived} */
        s,
        t,
        r,
        n
      ) : (l & (vt | de)) !== 0 && (l & I) === 0 && or(s, t, n) && (O(s, I), fr(
        /** @type {Effect} */
        s
      ));
    }
}
function or(e, t, r) {
  const n = r.get(e);
  if (n !== void 0) return n;
  if (e.deps !== null)
    for (const s of e.deps) {
      if (st.call(t, s))
        return !0;
      if ((s.f & j) !== 0 && or(
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
function fr(e) {
  b.schedule(e);
}
function Kr(e, t) {
  if (!((e.f & he) !== 0 && (e.f & M) !== 0)) {
    (e.f & I) !== 0 ? t.d.push(e) : (e.f & ve) !== 0 && t.m.push(e), O(e, M);
    for (var r = e.first; r !== null; )
      Kr(r, t), r = r.next;
  }
}
function Wr(e) {
  O(e, M);
  for (var t = e.first; t !== null; )
    Wr(t), t = t.next;
}
function ks(e) {
  let t = 0, r = qt(0), n;
  return () => {
    hr() && (E(r), an(() => (t === 0 && (n = mn(() => e(() => ct(r)))), t += 1, () => {
      Xe(() => {
        t -= 1, t === 0 && (n?.(), n = void 0, ct(r));
      });
    })));
  };
}
var Ss = it | ot;
function Ts(e, t, r, n) {
  new As(e, t, r, n);
}
var Z, lr, Q, Ue, V, X, L, H, xe, Ve, Se, nt, bt, wt, Ee, Vt, R, Ns, Rs, Os, er, Mt, Pt, tr, rr;
class As {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(t, r, n, s) {
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
    g(this, lr, null);
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
    g(this, H, null);
    /** @type {DocumentFragment | null} */
    g(this, xe, null);
    g(this, Ve, 0);
    g(this, Se, 0);
    g(this, nt, !1);
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
    w(this, Z, t), w(this, Q, r), w(this, Ue, (l) => {
      var f = (
        /** @type {Effect} */
        y
      );
      f.b = this, f.f |= Zt, n(l);
    }), this.parent = /** @type {Effect} */
    y.b, this.transform_error = s ?? this.parent?.transform_error ?? ((l) => l), w(this, V, on(() => {
      T(this, R, er).call(this);
    }, Ss));
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    zr(t, i(this, bt), i(this, wt));
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
  update_pending_count(t, r) {
    T(this, R, tr).call(this, t, r), w(this, Ve, i(this, Ve) + t), !(!i(this, Ee) || i(this, nt)) && (w(this, nt, !0), Xe(() => {
      w(this, nt, !1), i(this, Ee) && jt(i(this, Ee), i(this, Ve));
    }));
  }
  get_effect_pending() {
    return i(this, Vt).call(this), E(
      /** @type {Source<number>} */
      i(this, Ee)
    );
  }
  /** @param {unknown} error */
  error(t) {
    if (!i(this, Q).onerror && !i(this, Q).failed)
      throw t;
    b?.is_fork ? (i(this, X) && b.skip_effect(i(this, X)), i(this, L) && b.skip_effect(i(this, L)), i(this, H) && b.skip_effect(i(this, H)), b.on_fork_commit(() => {
      T(this, R, rr).call(this, t);
    })) : T(this, R, rr).call(this, t);
  }
}
Z = new WeakMap(), lr = new WeakMap(), Q = new WeakMap(), Ue = new WeakMap(), V = new WeakMap(), X = new WeakMap(), L = new WeakMap(), H = new WeakMap(), xe = new WeakMap(), Ve = new WeakMap(), Se = new WeakMap(), nt = new WeakMap(), bt = new WeakMap(), wt = new WeakMap(), Ee = new WeakMap(), Vt = new WeakMap(), R = new WeakSet(), Ns = function() {
  try {
    w(this, X, be(() => i(this, Ue).call(this, i(this, Z))));
  } catch (t) {
    this.error(t);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
Rs = function(t) {
  const r = i(this, Q).failed;
  r && w(this, H, be(() => {
    r(
      i(this, Z),
      () => t,
      () => () => {
      }
    );
  }));
}, Os = function() {
  const t = i(this, Q).pending;
  t && (this.is_pending = !0, w(this, L, be(() => t(i(this, Z)))), Xe(() => {
    var r = w(this, xe, document.createDocumentFragment()), n = Lt();
    r.append(n), w(this, X, T(this, R, Pt).call(this, () => be(() => i(this, Ue).call(this, n)))), i(this, Se) === 0 && (i(this, Z).before(r), w(this, xe, null), dt(
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
}, er = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), w(this, Se, 0), w(this, Ve, 0), w(this, X, be(() => {
      i(this, Ue).call(this, i(this, Z));
    })), i(this, Se) > 0) {
      var t = w(this, xe, document.createDocumentFragment());
      hn(i(this, X), t);
      const r = (
        /** @type {(anchor: Node) => void} */
        i(this, Q).pending
      );
      w(this, L, be(() => r(i(this, Z))));
    } else
      T(this, R, Mt).call(
        this,
        /** @type {Batch} */
        b
      );
  } catch (r) {
    this.error(r);
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
  var r = y, n = m, s = re;
  _e(i(this, V)), ne(i(this, V)), lt(i(this, V).ctx);
  try {
    return ze.ensure(), t();
  } catch (l) {
    return qr(l), null;
  } finally {
    _e(r), ne(n), lt(s);
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
    this.parent && T(n = this.parent, R, tr).call(n, t, r);
    return;
  }
  w(this, Se, i(this, Se) + t), i(this, Se) === 0 && (T(this, R, Mt).call(this, r), i(this, L) && dt(i(this, L), () => {
    w(this, L, null);
  }), i(this, xe) && (i(this, Z).before(i(this, xe)), w(this, xe, null)));
}, /**
 * @param {unknown} error
 */
rr = function(t) {
  i(this, X) && (K(i(this, X)), w(this, X, null)), i(this, L) && (K(i(this, L)), w(this, L, null)), i(this, H) && (K(i(this, H)), w(this, H, null));
  var r = i(this, Q).onerror;
  let n = i(this, Q).failed;
  var s = !1, l = !1;
  const f = () => {
    if (s) {
      gs();
      return;
    }
    s = !0, l && hs(), i(this, H) !== null && dt(i(this, H), () => {
      w(this, H, null);
    }), T(this, R, Pt).call(this, () => {
      T(this, R, er).call(this);
    });
  }, o = (a) => {
    try {
      l = !0, r?.(a, f), l = !1;
    } catch (u) {
      Te(u, i(this, V) && i(this, V).parent);
    }
    n && w(this, H, T(this, R, Pt).call(this, () => {
      try {
        return be(() => {
          var u = (
            /** @type {Effect} */
            y
          );
          u.b = this, u.f |= Zt, n(
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
function Ds(e, t, r, n) {
  const s = Ps;
  var l = e.filter((v) => !v.settled);
  if (r.length === 0 && l.length === 0) {
    n(t.map(s));
    return;
  }
  var f = (
    /** @type {Effect} */
    y
  ), o = Ms(), a = l.length === 1 ? l[0].promise : l.length > 1 ? Promise.all(l.map((v) => v.promise)) : null;
  function u(v) {
    o();
    try {
      n(v);
    } catch (c) {
      (f.f & oe) === 0 && Te(c, f);
    }
    It();
  }
  if (r.length === 0) {
    a.then(() => u(t.map(s)));
    return;
  }
  var h = Zr();
  function p() {
    Promise.all(r.map((v) => /* @__PURE__ */ Cs(v))).then((v) => u([...t.map(s), ...v])).catch((v) => Te(v, f)).finally(() => h());
  }
  a ? a.then(() => {
    o(), p(), It();
  }) : p();
}
function Ms() {
  var e = (
    /** @type {Effect} */
    y
  ), t = m, r = re, n = (
    /** @type {Batch} */
    b
  );
  return function(l = !0) {
    _e(e), ne(t), lt(r), l && (e.f & oe) === 0 && (n?.activate(), n?.apply());
  };
}
function It(e = !0) {
  _e(null), ne(null), lt(null), e && b?.deactivate();
}
function Zr() {
  var e = (
    /** @type {Effect} */
    y
  ), t = (
    /** @type {Boundary} */
    e.b
  ), r = (
    /** @type {Batch} */
    b
  ), n = t.is_rendered();
  return t.update_pending_count(1, r), r.increment(n, e), (s = !1) => {
    t.update_pending_count(-1, r), r.decrement(n, e, s);
  };
}
// @__NO_SIDE_EFFECTS__
function Ps(e) {
  var t = j | I;
  return y !== null && (y.f |= ot), {
    ctx: re,
    deps: null,
    effects: null,
    equals: Lr,
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
function Cs(e, t, r) {
  let n = (
    /** @type {Effect | null} */
    y
  );
  n === null && is();
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
    ), u = Ir();
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
      if ((a.f & He) !== 0)
        var p = Zr();
      if (
        /** @type {Boundary} */
        n.b.is_rendered()
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
        var k = d === we;
        p(k);
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
    for (var r = 0; r < t.length; r += 1)
      K(
        /** @type {Effect} */
        t[r]
      );
  }
}
function ur(e) {
  var t, r = y, n = e.parent;
  if (!Re && n !== null && (n.f & (oe | ee)) !== 0)
    return ps(), e.v;
  _e(n);
  try {
    e.f &= ~Ge, Fs(e), t = gn(e);
  } finally {
    _e(r);
  }
  return t;
}
function Qr(e) {
  var t = ur(e);
  if (!e.equals(t) && (e.wv = _n(), (!b?.is_fork || e.deps === null) && (b !== null ? b.capture(e, t, !0) : e.v = t, e.deps === null))) {
    O(e, M);
    return;
  }
  Re || (le !== null ? (hr() || b?.is_fork) && le.set(e, t) : ar(e));
}
function Is(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      (t.teardown || t.ac) && (t.teardown?.(), t.ac?.abort(we), t.teardown = ts, t.ac = null, _t(t, 0), vr(t));
}
function Xr(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      t.teardown && at(t);
}
let nr = /* @__PURE__ */ new Set();
const Ye = /* @__PURE__ */ new Map();
let $r = !1;
function qt(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Lr,
    rv: 0,
    wv: 0
  };
  return r;
}
// @__NO_SIDE_EFFECTS__
function F(e, t) {
  const r = qt(e);
  return Xs(r), r;
}
function C(e, t, r = !1) {
  m !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!ae || (m.f & Qt) !== 0) && Br() && (m.f & (j | de | vt | Qt)) !== 0 && (te === null || !st.call(te, e)) && ds();
  let n = r ? Qe(t) : t;
  return jt(e, n, Nt);
}
function jt(e, t, r = null) {
  if (!e.equals(t)) {
    Ye.set(e, Re ? t : e.v);
    var n = ze.ensure();
    if (n.capture(e, t), (e.f & j) !== 0) {
      const s = (
        /** @type {Derived} */
        e
      );
      (e.f & I) !== 0 && ur(s), le === null && ar(s);
    }
    e.wv = _n(), en(e, I, r), y !== null && (y.f & M) !== 0 && (y.f & (he | Ne)) === 0 && (W === null ? $s([e]) : W.push(e)), !n.is_fork && nr.size > 0 && !$r && js();
  }
  return t;
}
function js() {
  $r = !1;
  for (const e of nr)
    (e.f & M) !== 0 && O(e, ve), xt(e) && at(e);
  nr.clear();
}
function ct(e) {
  C(e, e.v + 1);
}
function en(e, t, r) {
  var n = e.reactions;
  if (n !== null)
    for (var s = n.length, l = 0; l < s; l++) {
      var f = n[l], o = f.f, a = (o & I) === 0;
      if (a && O(f, t), (o & j) !== 0) {
        var u = (
          /** @type {Derived} */
          f
        );
        le?.delete(u), (o & Ge) === 0 && (o & $ && (y === null || (y.f & Ft) === 0) && (f.f |= Ge), en(u, ve, r));
      } else if (a) {
        var h = (
          /** @type {Effect} */
          f
        );
        (o & de) !== 0 && ge !== null && ge.add(h), r !== null ? r.push(h) : fr(h);
      }
    }
}
function Qe(e) {
  if (typeof e != "object" || e === null || Ht in e)
    return e;
  const t = es(e);
  if (t !== Xn && t !== $n)
    return e;
  var r = /* @__PURE__ */ new Map(), n = Kn(e), s = /* @__PURE__ */ F(0), l = qe, f = (o) => {
    if (qe === l)
      return o();
    var a = m, u = qe;
    ne(null), Mr(l);
    var h = o();
    return ne(a), Mr(u), h;
  };
  return n && r.set("length", /* @__PURE__ */ F(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(o, a, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && us();
        var h = r.get(a);
        return h === void 0 ? f(() => {
          var p = /* @__PURE__ */ F(u.value);
          return r.set(a, p), p;
        }) : C(h, u.value, !0), !0;
      },
      deleteProperty(o, a) {
        var u = r.get(a);
        if (u === void 0) {
          if (a in o) {
            const h = f(() => /* @__PURE__ */ F(P));
            r.set(a, h), ct(s);
          }
        } else
          C(u, P), ct(s);
        return !0;
      },
      get(o, a, u) {
        if (a === Ht)
          return e;
        var h = r.get(a), p = a in o;
        if (h === void 0 && (!p || ft(o, a)?.writable) && (h = f(() => {
          var c = Qe(p ? o[a] : P), d = /* @__PURE__ */ F(c);
          return d;
        }), r.set(a, h)), h !== void 0) {
          var v = E(h);
          return v === P ? void 0 : v;
        }
        return Reflect.get(o, a, u);
      },
      getOwnPropertyDescriptor(o, a) {
        var u = Reflect.getOwnPropertyDescriptor(o, a);
        if (u && "value" in u) {
          var h = r.get(a);
          h && (u.value = E(h));
        } else if (u === void 0) {
          var p = r.get(a), v = p?.v;
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
        if (a === Ht)
          return !0;
        var u = r.get(a), h = u !== void 0 && u.v !== P || Reflect.has(o, a);
        if (u !== void 0 || y !== null && (!h || ft(o, a)?.writable)) {
          u === void 0 && (u = f(() => {
            var v = h ? Qe(o[a]) : P, c = /* @__PURE__ */ F(v);
            return c;
          }), r.set(a, u));
          var p = E(u);
          if (p === P)
            return !1;
        }
        return h;
      },
      set(o, a, u, h) {
        var p = r.get(a), v = a in o;
        if (n && a === "length")
          for (var c = u; c < /** @type {Source<number>} */
          p.v; c += 1) {
            var d = r.get(c + "");
            d !== void 0 ? C(d, P) : c in o && (d = f(() => /* @__PURE__ */ F(P)), r.set(c + "", d));
          }
        if (p === void 0)
          (!v || ft(o, a)?.writable) && (p = f(() => /* @__PURE__ */ F(void 0)), C(p, Qe(u)), r.set(a, p));
        else {
          v = p.v !== P;
          var k = f(() => Qe(u));
          C(p, k);
        }
        var x = Reflect.getOwnPropertyDescriptor(o, a);
        if (x?.set && x.set.call(h, u), !v) {
          if (n && typeof a == "string") {
            var Y = (
              /** @type {Source<number>} */
              r.get("length")
            ), pe = Number(a);
            Number.isInteger(pe) && pe >= Y.v && C(Y, pe + 1);
          }
          ct(s);
        }
        return !0;
      },
      ownKeys(o) {
        E(s);
        var a = Reflect.ownKeys(o).filter((p) => {
          var v = r.get(p);
          return v === void 0 || v.v !== P;
        });
        for (var [u, h] of r)
          h.v !== P && !(u in o) && a.push(u);
        return a;
      },
      setPrototypeOf() {
        cs();
      }
    }
  );
}
var Rr, tn, rn, nn;
function Ls() {
  if (Rr === void 0) {
    Rr = window, tn = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, r = Text.prototype;
    rn = ft(t, "firstChild").get, nn = ft(t, "nextSibling").get, Sr(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), Sr(r) && (r.__t = void 0);
  }
}
function Lt(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function sn(e) {
  return (
    /** @type {TemplateNode | null} */
    rn.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function cr(e) {
  return (
    /** @type {TemplateNode | null} */
    nn.call(e)
  );
}
function A(e, t) {
  return /* @__PURE__ */ sn(e);
}
function N(e, t = 1, r = !1) {
  let n = e;
  for (; t--; )
    n = /** @type {TemplateNode} */
    /* @__PURE__ */ cr(n);
  return n;
}
function Us() {
  return !1;
}
function Vs(e, t, r) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElementNS(_s, e, void 0)
  );
}
let Or = !1;
function Bs() {
  Or || (Or = !0, document.addEventListener(
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
function dr(e) {
  var t = m, r = y;
  ne(null), _e(null);
  try {
    return e();
  } finally {
    ne(t), _e(r);
  }
}
function Ys(e, t, r, n = r) {
  e.addEventListener(t, () => dr(r));
  const s = e.__on_r;
  s ? e.__on_r = () => {
    s(), n(!0);
  } : e.__on_r = () => n(!0), Bs();
}
function qs(e) {
  y === null && (m === null && os(), as()), Re && ls();
}
function Gs(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function Oe(e, t) {
  var r = y;
  r !== null && (r.f & ee) !== 0 && (e |= ee);
  var n = {
    ctx: re,
    deps: null,
    nodes: null,
    f: e | I | $,
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
  b?.register_created_effect(n);
  var s = n;
  if ((e & ht) !== 0)
    Ze !== null ? Ze.push(n) : ze.ensure().schedule(n);
  else if (t !== null) {
    try {
      at(n);
    } catch (f) {
      throw K(n), f;
    }
    s.deps === null && s.teardown === null && s.nodes === null && s.first === s.last && // either `null`, or a singular child
    (s.f & ot) === 0 && (s = s.first, (e & de) !== 0 && (e & it) !== 0 && s !== null && (s.f |= it));
  }
  if (s !== null && (s.parent = r, r !== null && Gs(s, r), m !== null && (m.f & j) !== 0 && (e & Ne) === 0)) {
    var l = (
      /** @type {Derived} */
      m
    );
    (l.effects ?? (l.effects = [])).push(s);
  }
  return n;
}
function hr() {
  return m !== null && !ae;
}
function zs(e) {
  const t = Oe(Yt, null);
  return O(t, M), t.teardown = e, t;
}
function Hs(e) {
  qs();
  var t = (
    /** @type {Effect} */
    y.f
  ), r = !m && (t & he) !== 0 && (t & He) === 0;
  if (r) {
    var n = (
      /** @type {ComponentContext} */
      re
    );
    (n.e ?? (n.e = [])).push(e);
  } else
    return ln(e);
}
function ln(e) {
  return Oe(ht | ss, e);
}
function Js(e) {
  ze.ensure();
  const t = Oe(Ne | ot, e);
  return (r = {}) => new Promise((n) => {
    r.outro ? dt(t, () => {
      K(t), n(void 0);
    }) : (K(t), n(void 0));
  });
}
function Ks(e) {
  return Oe(vt | ot, e);
}
function an(e, t = 0) {
  return Oe(Yt | t, e);
}
function Me(e, t = [], r = [], n = []) {
  Ds(n, t, r, (s) => {
    Oe(Yt, () => e(...s.map(E)));
  });
}
function on(e, t = 0) {
  var r = Oe(de | t, e);
  return r;
}
function be(e) {
  return Oe(he | ot, e);
}
function fn(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = Re, n = m;
    Dr(!0), ne(null);
    try {
      t.call(null);
    } finally {
      Dr(r), ne(n);
    }
  }
}
function vr(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    const s = r.ac;
    s !== null && dr(() => {
      s.abort(we);
    });
    var n = r.next;
    (r.f & Ne) !== 0 ? r.parent = null : K(r, t), r = n;
  }
}
function Ws(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & he) === 0 && K(t), t = r;
  }
}
function K(e, t = !0) {
  var r = !1;
  (t || (e.f & ns) !== 0) && e.nodes !== null && e.nodes.end !== null && (Zs(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), r = !0), O(e, Tr), vr(e, t && !r), _t(e, 0);
  var n = e.nodes && e.nodes.t;
  if (n !== null)
    for (const l of n)
      l.stop();
  fn(e), e.f ^= Tr, e.f |= oe;
  var s = e.parent;
  s !== null && s.first !== null && un(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function Zs(e, t) {
  for (; e !== null; ) {
    var r = e === t ? null : /* @__PURE__ */ cr(e);
    e.remove(), e = r;
  }
}
function un(e) {
  var t = e.parent, r = e.prev, n = e.next;
  r !== null && (r.next = n), n !== null && (n.prev = r), t !== null && (t.first === e && (t.first = n), t.last === e && (t.last = r));
}
function dt(e, t, r = !0) {
  var n = [];
  cn(e, n, !0);
  var s = () => {
    r && K(e), t && t();
  }, l = n.length;
  if (l > 0) {
    var f = () => --l || s();
    for (var o of n)
      o.out(f);
  } else
    s();
}
function cn(e, t, r) {
  if ((e.f & ee) === 0) {
    e.f ^= ee;
    var n = e.nodes && e.nodes.t;
    if (n !== null)
      for (const o of n)
        (o.is_global || r) && t.push(o);
    for (var s = e.first; s !== null; ) {
      var l = s.next;
      if ((s.f & Ne) === 0) {
        var f = (s.f & it) !== 0 || // If this is a branch effect without a block effect parent,
        // it means the parent block effect was pruned. In that case,
        // transparency information was transferred to the branch effect.
        (s.f & he) !== 0 && (e.f & de) !== 0;
        cn(s, t, f ? r : !1);
      }
      s = l;
    }
  }
}
function Qs(e) {
  dn(e, !0);
}
function dn(e, t) {
  if ((e.f & ee) !== 0) {
    e.f ^= ee, (e.f & M) === 0 && (O(e, I), ze.ensure().schedule(e));
    for (var r = e.first; r !== null; ) {
      var n = r.next, s = (r.f & it) !== 0 || (r.f & he) !== 0;
      dn(r, s ? t : !1), r = n;
    }
    var l = e.nodes && e.nodes.t;
    if (l !== null)
      for (const f of l)
        (f.is_global || t) && f.in();
  }
}
function hn(e, t) {
  if (e.nodes)
    for (var r = e.nodes.start, n = e.nodes.end; r !== null; ) {
      var s = r === n ? null : /* @__PURE__ */ cr(r);
      t.append(r), r = s;
    }
}
let Ct = !1, Re = !1;
function Dr(e) {
  Re = e;
}
let m = null, ae = !1;
function ne(e) {
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
let vn = 1, Fe = 0, qe = Fe;
function Mr(e) {
  qe = e;
}
function _n() {
  return ++vn;
}
function xt(e) {
  var t = e.f;
  if ((t & I) !== 0)
    return !0;
  if (t & j && (e.f &= ~Ge), (t & ve) !== 0) {
    for (var r = (
      /** @type {Value[]} */
      e.deps
    ), n = r.length, s = 0; s < n; s++) {
      var l = r[s];
      if (xt(
        /** @type {Derived} */
        l
      ) && Qr(
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
function pn(e, t, r = !0) {
  var n = e.reactions;
  if (n !== null && !(te !== null && st.call(te, e)))
    for (var s = 0; s < n.length; s++) {
      var l = n[s];
      (l.f & j) !== 0 ? pn(
        /** @type {Derived} */
        l,
        t,
        !1
      ) : t === l && (r ? O(l, I) : (l.f & M) !== 0 && O(l, ve), fr(
        /** @type {Effect} */
        l
      ));
    }
}
function gn(e) {
  var k;
  var t = B, r = G, n = W, s = m, l = te, f = re, o = ae, a = qe, u = e.f;
  B = /** @type {null | Value[]} */
  null, G = 0, W = null, m = (u & (he | Ne)) === 0 ? e : null, te = null, lt(e.ctx), ae = !1, qe = ++Fe, e.ac !== null && (dr(() => {
    e.ac.abort(we);
  }), e.ac = null);
  try {
    e.f |= Ft;
    var h = (
      /** @type {Function} */
      e.fn
    ), p = h();
    e.f |= He;
    var v = e.deps, c = b?.is_fork;
    if (B !== null) {
      var d;
      if (c || _t(e, G), v !== null && G > 0)
        for (v.length = G + B.length, d = 0; d < B.length; d++)
          v[G + d] = B[d];
      else
        e.deps = v = B;
      if (hr() && (e.f & $) !== 0)
        for (d = G; d < v.length; d++)
          ((k = v[d]).reactions ?? (k.reactions = [])).push(e);
    } else !c && v !== null && G < v.length && (_t(e, G), v.length = G);
    if (Br() && W !== null && !ae && v !== null && (e.f & (j | ve | I)) === 0)
      for (d = 0; d < /** @type {Source[]} */
      W.length; d++)
        pn(
          W[d],
          /** @type {Effect} */
          e
        );
    if (s !== null && s !== e) {
      if (Fe++, s.deps !== null)
        for (let x = 0; x < r; x += 1)
          s.deps[x].rv = Fe;
      if (t !== null)
        for (const x of t)
          x.rv = Fe;
      W !== null && (n === null ? n = W : n.push(.../** @type {Source[]} */
      W));
    }
    return (e.f & Ae) !== 0 && (e.f ^= Ae), p;
  } catch (x) {
    return qr(x);
  } finally {
    e.f ^= Ft, B = t, G = r, W = n, m = s, te = l, lt(f), ae = o, qe = a;
  }
}
function ei(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var n = Wn.call(r, e);
    if (n !== -1) {
      var s = r.length - 1;
      s === 0 ? r = t.reactions = null : (r[n] = r[s], r.pop());
    }
  }
  if (r === null && (t.f & j) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (B === null || !st.call(B, t))) {
    var l = (
      /** @type {Derived} */
      t
    );
    (l.f & $) !== 0 && (l.f ^= $, l.f &= ~Ge), l.v !== P && ar(l), Is(l), _t(l, 0);
  }
}
function _t(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var n = t; n < r.length; n++)
      ei(e, r[n]);
}
function at(e) {
  var t = e.f;
  if ((t & oe) === 0) {
    O(e, M);
    var r = y, n = Ct;
    y = e, Ct = !0;
    try {
      (t & (de | jr)) !== 0 ? Ws(e) : vr(e), fn(e);
      var s = gn(e);
      e.teardown = typeof s == "function" ? s : null, e.wv = vn;
      var l;
    } finally {
      Ct = n, y = r;
    }
  }
}
async function ti() {
  await Promise.resolve(), xs();
}
function E(e) {
  var t = e.f, r = (t & j) !== 0;
  if (m !== null && !ae) {
    var n = y !== null && (y.f & oe) !== 0;
    if (!n && (te === null || !st.call(te, e))) {
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
  if (r) {
    var f = (
      /** @type {Derived} */
      e
    );
    if (Re) {
      var o = f.v;
      return ((f.f & M) === 0 && f.reactions !== null || wn(f)) && (o = ur(f)), Ye.set(f, o), o;
    }
    var a = (f.f & $) === 0 && !ae && m !== null && (Ct || (m.f & $) !== 0), u = (f.f & He) === 0;
    xt(f) && (a && (f.f |= $), Qr(f)), a && !u && (Xr(f), bn(f));
  }
  if (le?.has(e))
    return le.get(e);
  if ((e.f & Ae) !== 0)
    throw e.v;
  return e.v;
}
function bn(e) {
  if (e.f |= $, e.deps !== null)
    for (const t of e.deps)
      (t.reactions ?? (t.reactions = [])).push(e), (t.f & j) !== 0 && (t.f & $) === 0 && (Xr(
        /** @type {Derived} */
        t
      ), bn(
        /** @type {Derived} */
        t
      ));
}
function wn(e) {
  if (e.v === P) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (Ye.has(t) || (t.f & j) !== 0 && wn(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function mn(e) {
  var t = ae;
  try {
    return ae = !0, e();
  } finally {
    ae = t;
  }
}
const ri = ["touchstart", "touchmove"];
function ni(e) {
  return ri.includes(e);
}
const Ie = Symbol("events"), yn = /* @__PURE__ */ new Set(), sr = /* @__PURE__ */ new Set();
function Tt(e, t, r) {
  (t[Ie] ?? (t[Ie] = {}))[e] = r;
}
function si(e) {
  for (var t = 0; t < e.length; t++)
    yn.add(e[t]);
  for (var r of sr)
    r(e);
}
let Pr = null;
function Cr(e) {
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), n = e.type, s = e.composedPath?.() || [], l = (
    /** @type {null | Element} */
    s[0] || e.target
  );
  Pr = e;
  var f = 0, o = Pr === e && e[Ie];
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
    Qn(e, "currentTarget", {
      configurable: !0,
      get() {
        return l || r;
      }
    });
    var h = m, p = y;
    ne(null), _e(null);
    try {
      for (var v, c = []; l !== null; ) {
        var d = l.assignedSlot || l.parentNode || /** @type {any} */
        l.host || null;
        try {
          var k = l[Ie]?.[n];
          k != null && (!/** @type {any} */
          l.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === l) && k.call(l, e);
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
      e[Ie] = t, delete e.currentTarget, ne(h), _e(p);
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
  var r = (
    /** @type {Effect} */
    y
  );
  r.nodes === null && (r.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function Je(e, t) {
  var r = (t & vs) !== 0, n, s = !e.startsWith("<!>");
  return () => {
    n === void 0 && (n = ai(s ? e : "<!>" + e), n = /** @type {TemplateNode} */
    /* @__PURE__ */ sn(n));
    var l = (
      /** @type {TemplateNode} */
      r || tn ? document.importNode(n, !0) : n.cloneNode(!0)
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
  var r = t == null ? "" : typeof t == "object" ? `${t}` : t;
  r !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = r, e.nodeValue = `${r}`);
}
function fi(e, t) {
  return ui(e, t);
}
const At = /* @__PURE__ */ new Map();
function ui(e, { target: t, anchor: r, props: n = {}, events: s, context: l, intro: f = !0, transformError: o }) {
  Ls();
  var a = void 0, u = Js(() => {
    var h = r ?? t.appendChild(Lt());
    Ts(
      /** @type {TemplateNode} */
      h,
      {
        pending: () => {
        }
      },
      (c) => {
        Ur({});
        var d = (
          /** @type {ComponentContext} */
          re
        );
        l && (d.c = l), s && (n.$$events = s), a = e(c, n) || {}, Vr();
      },
      o
    );
    var p = /* @__PURE__ */ new Set(), v = (c) => {
      for (var d = 0; d < c.length; d++) {
        var k = c[d];
        if (!p.has(k)) {
          p.add(k);
          var x = ni(k);
          for (const Ke of [t, document]) {
            var Y = At.get(Ke);
            Y === void 0 && (Y = /* @__PURE__ */ new Map(), At.set(Ke, Y));
            var pe = Y.get(k);
            pe === void 0 ? (Ke.addEventListener(k, Cr, { passive: x }), Y.set(k, 1)) : Y.set(k, pe + 1);
          }
        }
      }
    };
    return v(Zn(yn)), sr.add(v), () => {
      for (var c of p)
        for (const x of [t, document]) {
          var d = (
            /** @type {Map<string, number>} */
            At.get(x)
          ), k = (
            /** @type {number} */
            d.get(c)
          );
          --k == 0 ? (x.removeEventListener(c, Cr), d.delete(c), d.size === 0 && At.delete(x)) : d.set(c, k);
        }
      sr.delete(v), h !== r && h.parentNode?.removeChild(h);
    };
  });
  return ir.set(a, u), a;
}
let ir = /* @__PURE__ */ new WeakMap();
function ci(e, t) {
  const r = ir.get(e);
  return r ? (ir.delete(e), r(t)) : Promise.resolve();
}
var ie, ce, J, Be, mt, yt, Bt;
class di {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, r = !0) {
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
    g(this, J, /* @__PURE__ */ new Map());
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
        var r = (
          /** @type {Key} */
          i(this, ie).get(t)
        ), n = i(this, ce).get(r);
        if (n)
          Qs(n), i(this, Be).delete(r);
        else {
          var s = i(this, J).get(r);
          s && (i(this, ce).set(r, s.effect), i(this, J).delete(r), s.fragment.lastChild.remove(), this.anchor.before(s.fragment), n = s.effect);
        }
        for (const [l, f] of i(this, ie)) {
          if (i(this, ie).delete(l), l === t)
            break;
          const o = i(this, J).get(f);
          o && (K(o.effect), i(this, J).delete(f));
        }
        for (const [l, f] of i(this, ce)) {
          if (l === r || i(this, Be).has(l)) continue;
          const o = () => {
            if (Array.from(i(this, ie).values()).includes(l)) {
              var u = document.createDocumentFragment();
              hn(f, u), u.append(Lt()), i(this, J).set(l, { effect: f, fragment: u });
            } else
              K(f);
            i(this, Be).delete(l), i(this, ce).delete(l);
          };
          i(this, mt) || !n ? (i(this, Be).add(l), dt(f, o, !1)) : o();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    g(this, Bt, (t) => {
      i(this, ie).delete(t);
      const r = Array.from(i(this, ie).values());
      for (const [n, s] of i(this, J))
        r.includes(n) || (K(s.effect), i(this, J).delete(n));
    });
    this.anchor = t, w(this, mt, r);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, r) {
    var n = (
      /** @type {Batch} */
      b
    ), s = Us();
    if (r && !i(this, ce).has(t) && !i(this, J).has(t))
      if (s) {
        var l = document.createDocumentFragment(), f = Lt();
        l.append(f), i(this, J).set(t, {
          effect: be(() => r(f)),
          fragment: l
        });
      } else
        i(this, ce).set(
          t,
          be(() => r(this.anchor))
        );
    if (i(this, ie).set(n, t), s) {
      for (const [o, a] of i(this, ce))
        o === t ? n.unskip_effect(a) : n.skip_effect(a);
      for (const [o, a] of i(this, J))
        o === t ? n.unskip_effect(a.effect) : n.skip_effect(a.effect);
      n.oncommit(i(this, yt)), n.ondiscard(i(this, Bt));
    } else
      i(this, yt).call(this, n);
  }
}
ie = new WeakMap(), ce = new WeakMap(), J = new WeakMap(), Be = new WeakMap(), mt = new WeakMap(), yt = new WeakMap(), Bt = new WeakMap();
function We(e, t, r = !1) {
  var n = new di(e), s = r ? it : 0;
  function l(f, o) {
    n.ensure(f, o);
  }
  on(() => {
    var f = !1;
    t((o, a = 0) => {
      f = !0, l(a, o);
    }), f || l(-1, null);
  }, s);
}
function hi(e, t, r = t) {
  var n = /* @__PURE__ */ new WeakSet();
  Ys(e, "input", async (s) => {
    var l = s ? e.defaultValue : e.value;
    if (l = Kt(e) ? Wt(l) : l, r(l), b !== null && n.add(b), await ti(), l !== (l = t())) {
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
  mn(t) == null && e.value && (r(Kt(e) ? Wt(e.value) : e.value), b !== null && n.add(b)), an(() => {
    var s = t();
    if (e === document.activeElement) {
      var l = (
        /** @type {Batch} */
        b
      );
      if (n.has(l))
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
var Fr;
typeof window < "u" && ((Fr = window.__svelte ?? (window.__svelte = {})).v ?? (Fr.v = /* @__PURE__ */ new Set())).add(vi);
var _i = /* @__PURE__ */ Je('<span class="inline-block rounded-full bg-indigo-100 text-indigo-800 px-2.5 py-0.5 text-xs font-medium"> </span>'), pi = /* @__PURE__ */ Je('<div class="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800"> </div>'), gi = /* @__PURE__ */ Je('<pre class="mt-3 rounded-lg border border-gray-200 bg-gray-50 p-3 text-xs font-mono whitespace-pre-wrap break-words max-h-72 overflow-y-auto"> </pre>'), bi = /* @__PURE__ */ Je('<pre class="mt-3 rounded-lg border border-gray-200 bg-gray-50 p-3 text-xs font-mono whitespace-pre-wrap break-words max-h-72 overflow-y-auto"> </pre>'), wi = /* @__PURE__ */ Je('<pre class="mt-3 rounded-lg border border-gray-200 bg-gray-50 p-3 text-xs font-mono whitespace-pre-wrap break-words max-h-72 overflow-y-auto"> </pre>'), mi = /* @__PURE__ */ Je('<pre class="mt-3 rounded-lg border border-gray-200 bg-gray-50 p-3 text-xs font-mono whitespace-pre-wrap break-words max-h-72 overflow-y-auto"> </pre>'), yi = /* @__PURE__ */ Je('<div class="max-w-2xl mx-auto p-6 space-y-4"><div class="flex items-center gap-3 mb-2"><h2 class="text-2xl font-bold text-gray-900">Test Bench</h2> <!></div> <!> <div class="rounded-lg border border-gray-200 bg-white p-5 shadow-sm"><h3 class="text-base font-semibold text-gray-900 mb-3">Greet</h3> <div class="flex gap-2"><input type="text" placeholder="Name" class="flex-1 rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none"/> <button class="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"> </button></div> <!></div> <div class="rounded-lg border border-gray-200 bg-white p-5 shadow-sm"><h3 class="text-base font-semibold text-gray-900 mb-3">Extension Async Call</h3> <button class="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"> </button> <!></div> <div class="rounded-lg border border-gray-200 bg-white p-5 shadow-sm"><h3 class="text-base font-semibold text-gray-900 mb-3">Universe</h3> <button class="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"> </button> <!></div> <div class="rounded-lg border border-gray-200 bg-white p-5 shadow-sm"><h3 class="text-base font-semibold text-gray-900 mb-3">Snapshots</h3> <button class="rounded-lg bg-purple-600 px-4 py-2 text-sm font-medium text-white hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"> </button> <!></div> <div class="rounded-lg border border-gray-200 bg-white p-5 shadow-sm"><h3 class="text-base font-semibold text-gray-900 mb-3">Context</h3> <dl class="divide-y divide-gray-100 text-sm"><div class="flex justify-between py-2"><dt class="text-gray-500">Extension ID</dt> <dd class="font-medium text-gray-900"> </dd></div> <div class="flex justify-between py-2"><dt class="text-gray-500">Principal</dt> <dd class="font-mono text-xs text-gray-900"> </dd></div> <div class="flex justify-between py-2"><dt class="text-gray-500">Authenticated</dt> <dd class="font-medium text-gray-900"> </dd></div></dl></div></div>');
function xi(e, t) {
  Ur(t, !0);
  let r = /* @__PURE__ */ F("Tester"), n = /* @__PURE__ */ F(""), s = /* @__PURE__ */ F(""), l = /* @__PURE__ */ F(""), f = /* @__PURE__ */ F(""), o = /* @__PURE__ */ F(Qe({})), a = /* @__PURE__ */ F(""), u = /* @__PURE__ */ F(""), h = /* @__PURE__ */ F(!1);
  Hs(() => {
    const _ = [];
    return t.ctx.principal && _.push(t.ctx.principal.subscribe((S) => C(u, S, !0))), t.ctx.isAuthenticated && _.push(t.ctx.isAuthenticated.subscribe((S) => C(h, S, !0))), () => _.forEach((S) => S());
  });
  const p = t.ctx.config?.extensionId ?? "test_bench", v = t.ctx.config?.version ?? "";
  async function c(_, S) {
    C(o, { ...E(o), [_]: !0 }, !0), C(a, "");
    try {
      await S();
    } catch (U) {
      C(a, `${_}: ${U?.message || String(U)}`);
    } finally {
      C(o, { ...E(o), [_]: !1 }, !0);
    }
  }
  async function d() {
    await c("greet", async () => {
      const _ = await t.ctx.backend.greet(E(r));
      C(n, typeof _ == "string" ? _ : JSON.stringify(_, null, 2), !0);
    });
  }
  async function k() {
    await c("async", async () => {
      const _ = await t.ctx.callAsync("get_data", { data: "from frontend-rt" });
      C(s, JSON.stringify(_, null, 2), !0);
    });
  }
  async function x() {
    await c("universe", async () => {
      const _ = await t.ctx.backend.get_universe(), S = typeof _ == "string" ? JSON.parse(_) : _;
      C(l, JSON.stringify(S, null, 2), !0);
    });
  }
  async function Y() {
    await c("snapshots", async () => {
      const _ = await t.ctx.backend.get_snapshots(), S = typeof _ == "string" ? JSON.parse(_) : _;
      C(f, JSON.stringify(S, null, 2), !0);
    });
  }
  var pe = yi(), Ke = A(pe), xn = N(A(Ke), 2);
  {
    var En = (_) => {
      var S = _i(), U = A(S);
      Me(() => q(U, `v${v ?? ""}`)), Pe(_, S);
    };
    We(xn, (_) => {
      v && _(En);
    });
  }
  var _r = N(Ke, 2);
  {
    var kn = (_) => {
      var S = pi(), U = A(S);
      Me(() => q(U, E(a))), Pe(_, S);
    };
    We(_r, (_) => {
      E(a) && _(kn);
    });
  }
  var pr = N(_r, 2), gr = N(A(pr), 2), br = A(gr), Gt = N(br, 2), Sn = A(Gt), Tn = N(gr, 2);
  {
    var An = (_) => {
      var S = gi(), U = A(S);
      Me(() => q(U, E(n))), Pe(_, S);
    };
    We(Tn, (_) => {
      E(n) && _(An);
    });
  }
  var wr = N(pr, 2), Et = N(A(wr), 2), Nn = A(Et), Rn = N(Et, 2);
  {
    var On = (_) => {
      var S = bi(), U = A(S);
      Me(() => q(U, E(s))), Pe(_, S);
    };
    We(Rn, (_) => {
      E(s) && _(On);
    });
  }
  var mr = N(wr, 2), kt = N(A(mr), 2), Dn = A(kt), Mn = N(kt, 2);
  {
    var Pn = (_) => {
      var S = wi(), U = A(S);
      Me(() => q(U, E(l))), Pe(_, S);
    };
    We(Mn, (_) => {
      E(l) && _(Pn);
    });
  }
  var yr = N(mr, 2), St = N(A(yr), 2), Cn = A(St), Fn = N(St, 2);
  {
    var In = (_) => {
      var S = mi(), U = A(S);
      Me(() => q(U, E(f))), Pe(_, S);
    };
    We(Fn, (_) => {
      E(f) && _(In);
    });
  }
  var jn = N(yr, 2), Ln = N(A(jn), 2), xr = A(Ln), Un = N(A(xr), 2), Vn = A(Un), Er = N(xr, 2), Bn = N(A(Er), 2), Yn = A(Bn), qn = N(Er, 2), Gn = N(A(qn), 2), zn = A(Gn);
  Me(() => {
    Gt.disabled = E(o).greet, q(Sn, E(o).greet ? "..." : "Greet"), Et.disabled = E(o).async, q(Nn, E(o).async ? "Running..." : "Call get_data (async)"), kt.disabled = E(o).universe, q(Dn, E(o).universe ? "Loading..." : "Get Universe"), St.disabled = E(o).snapshots, q(Cn, E(o).snapshots ? "Loading..." : "Get Snapshots"), q(Vn, p), q(Yn, E(u) || "(anonymous)"), q(zn, E(h) ? "Yes" : "No");
  }), hi(br, () => E(r), (_) => C(r, _)), Tt("click", Gt, d), Tt("click", Et, k), Tt("click", kt, x), Tt("click", St, Y), Pe(e, pe), Vr();
}
si(["click"]);
function Si(e, t) {
  const r = fi(xi, { target: e, props: { ctx: t } });
  return {
    unmount() {
      try {
        ci(r);
      } catch {
      }
    }
  };
}
export {
  Si as default
};
