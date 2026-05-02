var Ar = Object.defineProperty;
var gn = (e) => {
  throw TypeError(e);
};
var Rr = (e, t, n) => t in e ? Ar(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var ee = (e, t, n) => Rr(e, typeof t != "symbol" ? t + "" : t, n), qt = (e, t, n) => t.has(e) || gn("Cannot " + n);
var s = (e, t, n) => (qt(e, t, "read from private field"), n ? n.call(e) : t.get(e)), p = (e, t, n) => t.has(e) ? gn("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), g = (e, t, n, r) => (qt(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), E = (e, t, n) => (qt(e, t, "access private method"), n);
var Mr = Array.isArray, Nr = Array.prototype.indexOf, $e = Array.prototype.includes, Cr = Array.from, Or = Object.defineProperty, ft = Object.getOwnPropertyDescriptor, Dr = Object.getOwnPropertyDescriptors, Fr = Object.prototype, Pr = Array.prototype, Cn = Object.getPrototypeOf, mn = Object.isExtensible;
const jr = () => {
};
function Ir(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function On() {
  var e, t, n = new Promise((r, i) => {
    e = r, t = i;
  });
  return { promise: n, resolve: e, reject: t };
}
const O = 2, ut = 4, zt = 8, Dn = 1 << 24, ce = 16, he = 32, Re = 64, Kt = 128, K = 512, M = 1024, C = 2048, de = 4096, J = 8192, se = 16384, qe = 32768, wn = 1 << 25, et = 65536, Jt = 1 << 17, Lr = 1 << 18, rt = 1 << 19, zr = 1 << 20, Be = 65536, Ot = 1 << 21, ct = 1 << 22, Ae = 1 << 23, Ht = Symbol("$state"), me = new class extends Error {
  constructor() {
    super(...arguments);
    ee(this, "name", "StaleReactionError");
    ee(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
function Vr() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Br(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Ur() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function qr(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Hr() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Yr() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Gr() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Wr() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Kr() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
const Jr = 1, Zr = 2, N = Symbol(), Fn = "http://www.w3.org/1999/xhtml";
function Qr() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function Xr() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function Pn(e) {
  return e === this.v;
}
let Q = null;
function tt(e) {
  Q = e;
}
function jn(e, t = !1, n) {
  Q = {
    p: Q,
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
function In(e) {
  var t = (
    /** @type {ComponentContext} */
    Q
  ), n = t.e;
  if (n !== null) {
    t.e = null;
    for (var r of n)
      nr(r);
  }
  return t.i = !0, Q = t.p, /** @type {T} */
  {};
}
function Ln() {
  return !0;
}
let He = [];
function $r() {
  var e = He;
  He = [], Ir(e);
}
function We(e) {
  if (He.length === 0) {
    var t = He;
    queueMicrotask(() => {
      t === He && $r();
    });
  }
  He.push(e);
}
function zn(e) {
  var t = w;
  if (t === null)
    return m.f |= Ae, e;
  if ((t.f & qe) === 0 && (t.f & ut) === 0)
    throw e;
  Se(e, t);
}
function Se(e, t) {
  for (; t !== null; ) {
    if ((t.f & Kt) !== 0) {
      if ((t.f & qe) === 0)
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
const ei = -7169;
function A(e, t) {
  e.f = e.f & ei | t;
}
function fn(e) {
  (e.f & K) !== 0 || e.deps === null ? A(e, M) : A(e, de);
}
function Vn(e) {
  if (e !== null)
    for (const t of e)
      (t.f & O) === 0 || (t.f & Be) === 0 || (t.f ^= Be, Vn(
        /** @type {Derived} */
        t.deps
      ));
}
function Bn(e, t, n) {
  (e.f & C) !== 0 ? t.add(e) : (e.f & de) !== 0 && n.add(e), Vn(e.deps), A(e, M);
}
const Ce = /* @__PURE__ */ new Set();
let y = null, re = null, Zt = null, Yt = !1, Ye = null, Tt = null;
var bn = 0;
let ti = 1;
var Ke, Je, Fe, we, fe, vt, z, _t, ke, be, ae, Ze, Qe, Pe, R, St, Un, At, Qt, Rt, ni;
const jt = class jt {
  constructor() {
    p(this, R);
    ee(this, "id", ti++);
    /**
     * The current values of any signals that are updated in this batch.
     * Tuple format: [value, is_derived] (note: is_derived is false for deriveds, too, if they were overridden via assignment)
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Value, [any, boolean]>}
     */
    ee(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any signals (sources and deriveds) that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Value, any>}
     */
    ee(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<(batch: Batch) => void>}
     */
    p(this, Ke, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    p(this, Je, /* @__PURE__ */ new Set());
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
    p(this, fe, /* @__PURE__ */ new Map());
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    p(this, vt, null);
    /**
     * The root effects that need to be flushed
     * @type {Effect[]}
     */
    p(this, z, []);
    /**
     * Effects created while this batch was active.
     * @type {Effect[]}
     */
    p(this, _t, []);
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
    p(this, ae, /* @__PURE__ */ new Map());
    /**
     * Inverse of #skipped_branches which we need to tell prior batches to unskip them when committing
     * @type {Set<Effect>}
     */
    p(this, Ze, /* @__PURE__ */ new Set());
    ee(this, "is_fork", !1);
    p(this, Qe, !1);
    /** @type {Set<Batch>} */
    p(this, Pe, /* @__PURE__ */ new Set());
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(t) {
    s(this, ae).has(t) || s(this, ae).set(t, { d: [], m: [] }), s(this, Ze).delete(t);
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   * @param {(e: Effect) => void} callback
   */
  unskip_effect(t, n = (r) => this.schedule(r)) {
    var r = s(this, ae).get(t);
    if (r) {
      s(this, ae).delete(t);
      for (var i of r.d)
        A(i, C), n(i);
      for (i of r.m)
        A(i, de), n(i);
    }
    s(this, Ze).add(t);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Value} source
   * @param {any} value
   * @param {boolean} [is_derived]
   */
  capture(t, n, r = !1) {
    t.v !== N && !this.previous.has(t) && this.previous.set(t, t.v), (t.f & Ae) === 0 && (this.current.set(t, [n, r]), re?.set(t, n)), this.is_fork || (t.v = n);
  }
  activate() {
    y = this;
  }
  deactivate() {
    y = null, re = null;
  }
  flush() {
    try {
      Yt = !0, y = this, E(this, R, At).call(this);
    } finally {
      bn = 0, Zt = null, Ye = null, Tt = null, Yt = !1, y = null, re = null, ze.clear();
    }
  }
  discard() {
    for (const t of s(this, Je)) t(this);
    s(this, Je).clear(), s(this, Fe).clear(), Ce.delete(this);
  }
  /**
   * @param {Effect} effect
   */
  register_created_effect(t) {
    s(this, _t).push(t);
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  increment(t, n) {
    let r = s(this, we).get(n) ?? 0;
    if (s(this, we).set(n, r + 1), t) {
      let i = s(this, fe).get(n) ?? 0;
      s(this, fe).set(n, i + 1);
    }
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   * @param {boolean} skip - whether to skip updates (because this is triggered by a stale reaction)
   */
  decrement(t, n, r) {
    let i = s(this, we).get(n) ?? 0;
    if (i === 1 ? s(this, we).delete(n) : s(this, we).set(n, i - 1), t) {
      let l = s(this, fe).get(n) ?? 0;
      l === 1 ? s(this, fe).delete(n) : s(this, fe).set(n, l - 1);
    }
    s(this, Qe) || r || (g(this, Qe, !0), We(() => {
      g(this, Qe, !1), this.flush();
    }));
  }
  /**
   * @param {Set<Effect>} dirty_effects
   * @param {Set<Effect>} maybe_dirty_effects
   */
  transfer_effects(t, n) {
    for (const r of t)
      s(this, ke).add(r);
    for (const r of n)
      s(this, be).add(r);
    t.clear(), n.clear();
  }
  /** @param {(batch: Batch) => void} fn */
  oncommit(t) {
    s(this, Ke).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    s(this, Je).add(t);
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
    return (s(this, vt) ?? g(this, vt, On())).promise;
  }
  static ensure() {
    if (y === null) {
      const t = y = new jt();
      Yt || (Ce.add(y), We(() => {
        y === t && t.flush();
      }));
    }
    return y;
  }
  apply() {
    {
      re = null;
      return;
    }
  }
  /**
   *
   * @param {Effect} effect
   */
  schedule(t) {
    if (Zt = t, t.b?.is_pending && (t.f & (ut | zt | Dn)) !== 0 && (t.f & qe) === 0) {
      t.b.defer_effect(t);
      return;
    }
    for (var n = t; n.parent !== null; ) {
      n = n.parent;
      var r = n.f;
      if (Ye !== null && n === w && (m === null || (m.f & O) === 0))
        return;
      if ((r & (Re | he)) !== 0) {
        if ((r & M) === 0)
          return;
        n.f ^= M;
      }
    }
    s(this, z).push(n);
  }
};
Ke = new WeakMap(), Je = new WeakMap(), Fe = new WeakMap(), we = new WeakMap(), fe = new WeakMap(), vt = new WeakMap(), z = new WeakMap(), _t = new WeakMap(), ke = new WeakMap(), be = new WeakMap(), ae = new WeakMap(), Ze = new WeakMap(), Qe = new WeakMap(), Pe = new WeakMap(), R = new WeakSet(), St = function() {
  return this.is_fork || s(this, fe).size > 0;
}, Un = function() {
  for (const r of s(this, Pe))
    for (const i of s(r, fe).keys()) {
      for (var t = !1, n = i; n.parent !== null; ) {
        if (s(this, ae).has(n)) {
          t = !0;
          break;
        }
        n = n.parent;
      }
      if (!t)
        return !0;
    }
  return !1;
}, At = function() {
  var o;
  if (bn++ > 1e3 && (Ce.delete(this), ri()), !E(this, R, St).call(this)) {
    for (const f of s(this, ke))
      s(this, be).delete(f), A(f, C), this.schedule(f);
    for (const f of s(this, be))
      A(f, de), this.schedule(f);
  }
  const t = s(this, z);
  g(this, z, []), this.apply();
  var n = Ye = [], r = [], i = Tt = [];
  for (const f of t)
    try {
      E(this, R, Qt).call(this, f, n, r);
    } catch (u) {
      throw Yn(f), u;
    }
  if (y = null, i.length > 0) {
    var l = jt.ensure();
    for (const f of i)
      l.schedule(f);
  }
  if (Ye = null, Tt = null, E(this, R, St).call(this) || E(this, R, Un).call(this)) {
    E(this, R, Rt).call(this, r), E(this, R, Rt).call(this, n);
    for (const [f, u] of s(this, ae))
      Hn(f, u);
  } else {
    s(this, we).size === 0 && Ce.delete(this), s(this, ke).clear(), s(this, be).clear();
    for (const f of s(this, Ke)) f(this);
    s(this, Ke).clear(), yn(r), yn(n), s(this, vt)?.resolve();
  }
  var a = (
    /** @type {Batch | null} */
    /** @type {unknown} */
    y
  );
  if (s(this, z).length > 0) {
    const f = a ?? (a = this);
    s(f, z).push(...s(this, z).filter((u) => !s(f, z).includes(u)));
  }
  a !== null && (Ce.add(a), E(o = a, R, At).call(o));
}, /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
Qt = function(t, n, r) {
  t.f ^= M;
  for (var i = t.first; i !== null; ) {
    var l = i.f, a = (l & (he | Re)) !== 0, o = a && (l & M) !== 0, f = o || (l & J) !== 0 || s(this, ae).has(i);
    if (!f && i.fn !== null) {
      a ? i.f ^= M : (l & ut) !== 0 ? n.push(i) : bt(i) && ((l & ce) !== 0 && s(this, be).add(i), nt(i));
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
Rt = function(t) {
  for (var n = 0; n < t.length; n += 1)
    Bn(t[n], s(this, ke), s(this, be));
}, ni = function() {
  var d, _, v;
  for (const c of Ce) {
    var t = c.id < this.id, n = [];
    for (const [h, [x, b]] of this.current) {
      if (c.current.has(h)) {
        var r = (
          /** @type {[any, boolean]} */
          c.current.get(h)[0]
        );
        if (t && x !== r)
          c.current.set(h, [x, b]);
        else
          continue;
      }
      n.push(h);
    }
    var i = [...c.current.keys()].filter((h) => !this.current.has(h));
    if (i.length === 0)
      t && c.discard();
    else if (n.length > 0) {
      if (t)
        for (const h of s(this, Ze))
          c.unskip_effect(h, (x) => {
            var b;
            (x.f & (ce | ct)) !== 0 ? c.schedule(x) : E(b = c, R, Rt).call(b, [x]);
          });
      c.activate();
      var l = /* @__PURE__ */ new Set(), a = /* @__PURE__ */ new Map();
      for (var o of n)
        qn(o, i, l, a);
      a = /* @__PURE__ */ new Map();
      var f = [...c.current.keys()].filter(
        (h) => this.current.has(h) ? (
          /** @type {[any, boolean]} */
          this.current.get(h)[0] !== h
        ) : !0
      );
      for (const h of s(this, _t))
        (h.f & (se | J | Jt)) === 0 && an(h, f, a) && ((h.f & (ct | ce)) !== 0 ? (A(h, C), c.schedule(h)) : s(c, ke).add(h));
      if (s(c, z).length > 0) {
        c.apply();
        for (var u of s(c, z))
          E(d = c, R, Qt).call(d, u, [], []);
        g(c, z, []);
      }
      c.deactivate();
    }
  }
  for (const c of Ce)
    s(c, Pe).has(this) && (s(c, Pe).delete(this), s(c, Pe).size === 0 && !E(_ = c, R, St).call(_) && (c.activate(), E(v = c, R, At).call(v)));
};
let Ue = jt;
function ri() {
  try {
    Hr();
  } catch (e) {
    Se(e, Zt);
  }
}
let pe = null;
function yn(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var r = e[n++];
      if ((r.f & (se | J)) === 0 && bt(r) && (pe = /* @__PURE__ */ new Set(), nt(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && sr(r), pe?.size > 0)) {
        ze.clear();
        for (const i of pe) {
          if ((i.f & (se | J)) !== 0) continue;
          const l = [i];
          let a = i.parent;
          for (; a !== null; )
            pe.has(a) && (pe.delete(a), l.push(a)), a = a.parent;
          for (let o = l.length - 1; o >= 0; o--) {
            const f = l[o];
            (f.f & (se | J)) === 0 && nt(f);
          }
        }
        pe.clear();
      }
    }
    pe = null;
  }
}
function qn(e, t, n, r) {
  if (!n.has(e) && (n.add(e), e.reactions !== null))
    for (const i of e.reactions) {
      const l = i.f;
      (l & O) !== 0 ? qn(
        /** @type {Derived} */
        i,
        t,
        n,
        r
      ) : (l & (ct | ce)) !== 0 && (l & C) === 0 && an(i, t, r) && (A(i, C), on(
        /** @type {Effect} */
        i
      ));
    }
}
function an(e, t, n) {
  const r = n.get(e);
  if (r !== void 0) return r;
  if (e.deps !== null)
    for (const i of e.deps) {
      if ($e.call(t, i))
        return !0;
      if ((i.f & O) !== 0 && an(
        /** @type {Derived} */
        i,
        t,
        n
      ))
        return n.set(
          /** @type {Derived} */
          i,
          !0
        ), !0;
    }
  return n.set(e, !1), !1;
}
function on(e) {
  y.schedule(e);
}
function Hn(e, t) {
  if (!((e.f & he) !== 0 && (e.f & M) !== 0)) {
    (e.f & C) !== 0 ? t.d.push(e) : (e.f & de) !== 0 && t.m.push(e), A(e, M);
    for (var n = e.first; n !== null; )
      Hn(n, t), n = n.next;
  }
}
function Yn(e) {
  A(e, M);
  for (var t = e.first; t !== null; )
    Yn(t), t = t.next;
}
function ii(e) {
  let t = 0, n = Vt(0), r;
  return () => {
    cn() && (k(n), Si(() => (t === 0 && (r = Oi(() => e(() => at(n)))), t += 1, () => {
      We(() => {
        t -= 1, t === 0 && (r?.(), r = void 0, at(n));
      });
    })));
  };
}
var si = et | rt;
function li(e, t, n, r) {
  new fi(e, t, n, r);
}
var Y, ln, G, je, P, W, D, V, ye, Ie, Te, Xe, pt, gt, xe, It, T, ai, oi, ui, Xt, Mt, Nt, $t, en;
class fi {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(t, n, r, i) {
    p(this, T);
    /** @type {Boundary | null} */
    ee(this, "parent");
    ee(this, "is_pending", !1);
    /**
     * API-level transformError transform function. Transforms errors before they reach the `failed` snippet.
     * Inherited from parent boundary, or defaults to identity.
     * @type {(error: unknown) => unknown}
     */
    ee(this, "transform_error");
    /** @type {TemplateNode} */
    p(this, Y);
    /** @type {TemplateNode | null} */
    p(this, ln, null);
    /** @type {BoundaryProps} */
    p(this, G);
    /** @type {((anchor: Node) => void)} */
    p(this, je);
    /** @type {Effect} */
    p(this, P);
    /** @type {Effect | null} */
    p(this, W, null);
    /** @type {Effect | null} */
    p(this, D, null);
    /** @type {Effect | null} */
    p(this, V, null);
    /** @type {DocumentFragment | null} */
    p(this, ye, null);
    p(this, Ie, 0);
    p(this, Te, 0);
    p(this, Xe, !1);
    /** @type {Set<Effect>} */
    p(this, pt, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    p(this, gt, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    p(this, xe, null);
    p(this, It, ii(() => (g(this, xe, Vt(s(this, Ie))), () => {
      g(this, xe, null);
    })));
    g(this, Y, t), g(this, G, n), g(this, je, (l) => {
      var a = (
        /** @type {Effect} */
        w
      );
      a.b = this, a.f |= Kt, r(l);
    }), this.parent = /** @type {Effect} */
    w.b, this.transform_error = i ?? this.parent?.transform_error ?? ((l) => l), g(this, P, rr(() => {
      E(this, T, Xt).call(this);
    }, si));
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    Bn(t, s(this, pt), s(this, gt));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!s(this, G).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  update_pending_count(t, n) {
    E(this, T, $t).call(this, t, n), g(this, Ie, s(this, Ie) + t), !(!s(this, xe) || s(this, Xe)) && (g(this, Xe, !0), We(() => {
      g(this, Xe, !1), s(this, xe) && Ft(s(this, xe), s(this, Ie));
    }));
  }
  get_effect_pending() {
    return s(this, It).call(this), k(
      /** @type {Source<number>} */
      s(this, xe)
    );
  }
  /** @param {unknown} error */
  error(t) {
    if (!s(this, G).onerror && !s(this, G).failed)
      throw t;
    y?.is_fork ? (s(this, W) && y.skip_effect(s(this, W)), s(this, D) && y.skip_effect(s(this, D)), s(this, V) && y.skip_effect(s(this, V)), y.on_fork_commit(() => {
      E(this, T, en).call(this, t);
    })) : E(this, T, en).call(this, t);
  }
}
Y = new WeakMap(), ln = new WeakMap(), G = new WeakMap(), je = new WeakMap(), P = new WeakMap(), W = new WeakMap(), D = new WeakMap(), V = new WeakMap(), ye = new WeakMap(), Ie = new WeakMap(), Te = new WeakMap(), Xe = new WeakMap(), pt = new WeakMap(), gt = new WeakMap(), xe = new WeakMap(), It = new WeakMap(), T = new WeakSet(), ai = function() {
  try {
    g(this, W, ge(() => s(this, je).call(this, s(this, Y))));
  } catch (t) {
    this.error(t);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
oi = function(t) {
  const n = s(this, G).failed;
  n && g(this, V, ge(() => {
    n(
      s(this, Y),
      () => t,
      () => () => {
      }
    );
  }));
}, ui = function() {
  const t = s(this, G).pending;
  t && (this.is_pending = !0, g(this, D, ge(() => t(s(this, Y)))), We(() => {
    var n = g(this, ye, document.createDocumentFragment()), r = ht();
    n.append(r), g(this, W, E(this, T, Nt).call(this, () => ge(() => s(this, je).call(this, r)))), s(this, Te) === 0 && (s(this, Y).before(n), g(this, ye, null), ot(
      /** @type {Effect} */
      s(this, D),
      () => {
        g(this, D, null);
      }
    ), E(this, T, Mt).call(
      this,
      /** @type {Batch} */
      y
    ));
  }));
}, Xt = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), g(this, Te, 0), g(this, Ie, 0), g(this, W, ge(() => {
      s(this, je).call(this, s(this, Y));
    })), s(this, Te) > 0) {
      var t = g(this, ye, document.createDocumentFragment());
      ar(s(this, W), t);
      const n = (
        /** @type {(anchor: Node) => void} */
        s(this, G).pending
      );
      g(this, D, ge(() => n(s(this, Y))));
    } else
      E(this, T, Mt).call(
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
Mt = function(t) {
  this.is_pending = !1, t.transfer_effects(s(this, pt), s(this, gt));
}, /**
 * @template T
 * @param {() => T} fn
 */
Nt = function(t) {
  var n = w, r = m, i = Q;
  ve(s(this, P)), X(s(this, P)), tt(s(this, P).ctx);
  try {
    return Ue.ensure(), t();
  } catch (l) {
    return zn(l), null;
  } finally {
    ve(n), X(r), tt(i);
  }
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 * @param {Batch} batch
 */
$t = function(t, n) {
  var r;
  if (!this.has_pending_snippet()) {
    this.parent && E(r = this.parent, T, $t).call(r, t, n);
    return;
  }
  g(this, Te, s(this, Te) + t), s(this, Te) === 0 && (E(this, T, Mt).call(this, n), s(this, D) && ot(s(this, D), () => {
    g(this, D, null);
  }), s(this, ye) && (s(this, Y).before(s(this, ye)), g(this, ye, null)));
}, /**
 * @param {unknown} error
 */
en = function(t) {
  s(this, W) && (U(s(this, W)), g(this, W, null)), s(this, D) && (U(s(this, D)), g(this, D, null)), s(this, V) && (U(s(this, V)), g(this, V, null));
  var n = s(this, G).onerror;
  let r = s(this, G).failed;
  var i = !1, l = !1;
  const a = () => {
    if (i) {
      Xr();
      return;
    }
    i = !0, l && Kr(), s(this, V) !== null && ot(s(this, V), () => {
      g(this, V, null);
    }), E(this, T, Nt).call(this, () => {
      E(this, T, Xt).call(this);
    });
  }, o = (f) => {
    try {
      l = !0, n?.(f, a), l = !1;
    } catch (u) {
      Se(u, s(this, P) && s(this, P).parent);
    }
    r && g(this, V, E(this, T, Nt).call(this, () => {
      try {
        return ge(() => {
          var u = (
            /** @type {Effect} */
            w
          );
          u.b = this, u.f |= Kt, r(
            s(this, Y),
            () => f,
            () => a
          );
        });
      } catch (u) {
        return Se(
          u,
          /** @type {Effect} */
          s(this, P).parent
        ), null;
      }
    }));
  };
  We(() => {
    var f;
    try {
      f = this.transform_error(t);
    } catch (u) {
      Se(u, s(this, P) && s(this, P).parent);
      return;
    }
    f !== null && typeof f == "object" && typeof /** @type {any} */
    f.then == "function" ? f.then(
      o,
      /** @param {unknown} e */
      (u) => Se(u, s(this, P) && s(this, P).parent)
    ) : o(f);
  });
};
function ci(e, t, n, r) {
  const i = Wn;
  var l = e.filter((v) => !v.settled);
  if (n.length === 0 && l.length === 0) {
    r(t.map(i));
    return;
  }
  var a = (
    /** @type {Effect} */
    w
  ), o = hi(), f = l.length === 1 ? l[0].promise : l.length > 1 ? Promise.all(l.map((v) => v.promise)) : null;
  function u(v) {
    o();
    try {
      r(v);
    } catch (c) {
      (a.f & se) === 0 && Se(c, a);
    }
    Dt();
  }
  if (n.length === 0) {
    f.then(() => u(t.map(i)));
    return;
  }
  var d = Gn();
  function _() {
    Promise.all(n.map((v) => /* @__PURE__ */ di(v))).then((v) => u([...t.map(i), ...v])).catch((v) => Se(v, a)).finally(() => d());
  }
  f ? f.then(() => {
    o(), _(), Dt();
  }) : _();
}
function hi() {
  var e = (
    /** @type {Effect} */
    w
  ), t = m, n = Q, r = (
    /** @type {Batch} */
    y
  );
  return function(l = !0) {
    ve(e), X(t), tt(n), l && (e.f & se) === 0 && (r?.activate(), r?.apply());
  };
}
function Dt(e = !0) {
  ve(null), X(null), tt(null), e && y?.deactivate();
}
function Gn() {
  var e = (
    /** @type {Effect} */
    w
  ), t = (
    /** @type {Boundary} */
    e.b
  ), n = (
    /** @type {Batch} */
    y
  ), r = t.is_rendered();
  return t.update_pending_count(1, n), n.increment(r, e), (i = !1) => {
    t.update_pending_count(-1, n), n.decrement(r, e, i);
  };
}
// @__NO_SIDE_EFFECTS__
function Wn(e) {
  var t = O | C;
  return w !== null && (w.f |= rt), {
    ctx: Q,
    deps: null,
    effects: null,
    equals: Pn,
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
function di(e, t, n) {
  let r = (
    /** @type {Effect | null} */
    w
  );
  r === null && Vr();
  var i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), l = Vt(
    /** @type {V} */
    N
  ), a = !m, o = /* @__PURE__ */ new Map();
  return Ti(() => {
    var f = (
      /** @type {Effect} */
      w
    ), u = On();
    i = u.promise;
    try {
      Promise.resolve(e()).then(u.resolve, u.reject).finally(Dt);
    } catch (c) {
      u.reject(c), Dt();
    }
    var d = (
      /** @type {Batch} */
      y
    );
    if (a) {
      if ((f.f & qe) !== 0)
        var _ = Gn();
      if (
        /** @type {Boundary} */
        r.b.is_rendered()
      )
        o.get(d)?.reject(me), o.delete(d);
      else {
        for (const c of o.values())
          c.reject(me);
        o.clear();
      }
      o.set(d, u);
    }
    const v = (c, h = void 0) => {
      if (_) {
        var x = h === me;
        _(x);
      }
      if (!(h === me || (f.f & se) !== 0)) {
        if (d.activate(), h)
          l.f |= Ae, Ft(l, h);
        else {
          (l.f & Ae) !== 0 && (l.f ^= Ae), Ft(l, c);
          for (const [b, I] of o) {
            if (o.delete(b), b === d) break;
            I.reject(me);
          }
        }
        d.deactivate();
      }
    };
    u.promise.then(v, (c) => v(null, c || "unknown"));
  }), Ei(() => {
    for (const f of o.values())
      f.reject(me);
  }), new Promise((f) => {
    function u(d) {
      function _() {
        d === i ? f(l) : u(i);
      }
      d.then(_, _);
    }
    u(i);
  });
}
// @__NO_SIDE_EFFECTS__
function Gt(e) {
  const t = /* @__PURE__ */ Wn(e);
  return or(t), t;
}
function vi(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      U(
        /** @type {Effect} */
        t[n]
      );
  }
}
function un(e) {
  var t, n = w, r = e.parent;
  if (!Me && r !== null && (r.f & (se | J)) !== 0)
    return Qr(), e.v;
  ve(r);
  try {
    e.f &= ~Be, vi(e), t = dr(e);
  } finally {
    ve(n);
  }
  return t;
}
function Kn(e) {
  var t = un(e);
  if (!e.equals(t) && (e.wv = cr(), (!y?.is_fork || e.deps === null) && (y !== null ? y.capture(e, t, !0) : e.v = t, e.deps === null))) {
    A(e, M);
    return;
  }
  Me || (re !== null ? (cn() || y?.is_fork) && re.set(e, t) : fn(e));
}
function _i(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      (t.teardown || t.ac) && (t.teardown?.(), t.ac?.abort(me), t.teardown = jr, t.ac = null, dt(t, 0), hn(t));
}
function Jn(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      t.teardown && nt(t);
}
let tn = /* @__PURE__ */ new Set();
const ze = /* @__PURE__ */ new Map();
let Zn = !1;
function Vt(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Pn,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function te(e, t) {
  const n = Vt(e);
  return or(n), n;
}
function ue(e, t, n = !1) {
  m !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!ie || (m.f & Jt) !== 0) && Ln() && (m.f & (O | ce | ct | Jt)) !== 0 && (Z === null || !$e.call(Z, e)) && Wr();
  let r = n ? Ge(t) : t;
  return Ft(e, r, Tt);
}
function Ft(e, t, n = null) {
  if (!e.equals(t)) {
    ze.set(e, Me ? t : e.v);
    var r = Ue.ensure();
    if (r.capture(e, t), (e.f & O) !== 0) {
      const i = (
        /** @type {Derived} */
        e
      );
      (e.f & C) !== 0 && un(i), re === null && fn(i);
    }
    e.wv = cr(), Qn(e, C, n), w !== null && (w.f & M) !== 0 && (w.f & (he | Re)) === 0 && (H === null ? Ni([e]) : H.push(e)), !r.is_fork && tn.size > 0 && !Zn && pi();
  }
  return t;
}
function pi() {
  Zn = !1;
  for (const e of tn)
    (e.f & M) !== 0 && A(e, de), bt(e) && nt(e);
  tn.clear();
}
function at(e) {
  ue(e, e.v + 1);
}
function Qn(e, t, n) {
  var r = e.reactions;
  if (r !== null)
    for (var i = r.length, l = 0; l < i; l++) {
      var a = r[l], o = a.f, f = (o & C) === 0;
      if (f && A(a, t), (o & O) !== 0) {
        var u = (
          /** @type {Derived} */
          a
        );
        re?.delete(u), (o & Be) === 0 && (o & K && (w === null || (w.f & Ot) === 0) && (a.f |= Be), Qn(u, de, n));
      } else if (f) {
        var d = (
          /** @type {Effect} */
          a
        );
        (o & ce) !== 0 && pe !== null && pe.add(d), n !== null ? n.push(d) : on(d);
      }
    }
}
function Ge(e) {
  if (typeof e != "object" || e === null || Ht in e)
    return e;
  const t = Cn(e);
  if (t !== Fr && t !== Pr)
    return e;
  var n = /* @__PURE__ */ new Map(), r = Mr(e), i = /* @__PURE__ */ te(0), l = Ve, a = (o) => {
    if (Ve === l)
      return o();
    var f = m, u = Ve;
    X(null), Tn(l);
    var d = o();
    return X(f), Tn(u), d;
  };
  return r && n.set("length", /* @__PURE__ */ te(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(o, f, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && Yr();
        var d = n.get(f);
        return d === void 0 ? a(() => {
          var _ = /* @__PURE__ */ te(u.value);
          return n.set(f, _), _;
        }) : ue(d, u.value, !0), !0;
      },
      deleteProperty(o, f) {
        var u = n.get(f);
        if (u === void 0) {
          if (f in o) {
            const d = a(() => /* @__PURE__ */ te(N));
            n.set(f, d), at(i);
          }
        } else
          ue(u, N), at(i);
        return !0;
      },
      get(o, f, u) {
        if (f === Ht)
          return e;
        var d = n.get(f), _ = f in o;
        if (d === void 0 && (!_ || ft(o, f)?.writable) && (d = a(() => {
          var c = Ge(_ ? o[f] : N), h = /* @__PURE__ */ te(c);
          return h;
        }), n.set(f, d)), d !== void 0) {
          var v = k(d);
          return v === N ? void 0 : v;
        }
        return Reflect.get(o, f, u);
      },
      getOwnPropertyDescriptor(o, f) {
        var u = Reflect.getOwnPropertyDescriptor(o, f);
        if (u && "value" in u) {
          var d = n.get(f);
          d && (u.value = k(d));
        } else if (u === void 0) {
          var _ = n.get(f), v = _?.v;
          if (_ !== void 0 && v !== N)
            return {
              enumerable: !0,
              configurable: !0,
              value: v,
              writable: !0
            };
        }
        return u;
      },
      has(o, f) {
        if (f === Ht)
          return !0;
        var u = n.get(f), d = u !== void 0 && u.v !== N || Reflect.has(o, f);
        if (u !== void 0 || w !== null && (!d || ft(o, f)?.writable)) {
          u === void 0 && (u = a(() => {
            var v = d ? Ge(o[f]) : N, c = /* @__PURE__ */ te(v);
            return c;
          }), n.set(f, u));
          var _ = k(u);
          if (_ === N)
            return !1;
        }
        return d;
      },
      set(o, f, u, d) {
        var _ = n.get(f), v = f in o;
        if (r && f === "length")
          for (var c = u; c < /** @type {Source<number>} */
          _.v; c += 1) {
            var h = n.get(c + "");
            h !== void 0 ? ue(h, N) : c in o && (h = a(() => /* @__PURE__ */ te(N)), n.set(c + "", h));
          }
        if (_ === void 0)
          (!v || ft(o, f)?.writable) && (_ = a(() => /* @__PURE__ */ te(void 0)), ue(_, Ge(u)), n.set(f, _));
        else {
          v = _.v !== N;
          var x = a(() => Ge(u));
          ue(_, x);
        }
        var b = Reflect.getOwnPropertyDescriptor(o, f);
        if (b?.set && b.set.call(d, u), !v) {
          if (r && typeof f == "string") {
            var I = (
              /** @type {Source<number>} */
              n.get("length")
            ), Ee = Number(f);
            Number.isInteger(Ee) && Ee >= I.v && ue(I, Ee + 1);
          }
          at(i);
        }
        return !0;
      },
      ownKeys(o) {
        k(i);
        var f = Reflect.ownKeys(o).filter((_) => {
          var v = n.get(_);
          return v === void 0 || v.v !== N;
        });
        for (var [u, d] of n)
          d.v !== N && !(u in o) && f.push(u);
        return f;
      },
      setPrototypeOf() {
        Gr();
      }
    }
  );
}
var xn, Xn, $n, er;
function gi() {
  if (xn === void 0) {
    xn = window, Xn = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    $n = ft(t, "firstChild").get, er = ft(t, "nextSibling").get, mn(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), mn(n) && (n.__t = void 0);
  }
}
function ht(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function Pt(e) {
  return (
    /** @type {TemplateNode | null} */
    $n.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function Bt(e) {
  return (
    /** @type {TemplateNode | null} */
    er.call(e)
  );
}
function q(e, t) {
  return /* @__PURE__ */ Pt(e);
}
function mi(e, t = !1) {
  {
    var n = /* @__PURE__ */ Pt(e);
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ Bt(n) : n;
  }
}
function st(e, t = 1, n = !1) {
  let r = e;
  for (; t--; )
    r = /** @type {TemplateNode} */
    /* @__PURE__ */ Bt(r);
  return r;
}
function wi() {
  return !1;
}
function bi(e, t, n) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElementNS(Fn, e, void 0)
  );
}
function tr(e) {
  var t = m, n = w;
  X(null), ve(null);
  try {
    return e();
  } finally {
    X(t), ve(n);
  }
}
function yi(e) {
  w === null && (m === null && qr(), Ur()), Me && Br();
}
function xi(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function Ne(e, t) {
  var n = w;
  n !== null && (n.f & J) !== 0 && (e |= J);
  var r = {
    ctx: Q,
    deps: null,
    nodes: null,
    f: e | C | K,
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
  var i = r;
  if ((e & ut) !== 0)
    Ye !== null ? Ye.push(r) : Ue.ensure().schedule(r);
  else if (t !== null) {
    try {
      nt(r);
    } catch (a) {
      throw U(r), a;
    }
    i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && // either `null`, or a singular child
    (i.f & rt) === 0 && (i = i.first, (e & ce) !== 0 && (e & et) !== 0 && i !== null && (i.f |= et));
  }
  if (i !== null && (i.parent = n, n !== null && xi(i, n), m !== null && (m.f & O) !== 0 && (e & Re) === 0)) {
    var l = (
      /** @type {Derived} */
      m
    );
    (l.effects ?? (l.effects = [])).push(i);
  }
  return r;
}
function cn() {
  return m !== null && !ie;
}
function Ei(e) {
  const t = Ne(zt, null);
  return A(t, M), t.teardown = e, t;
}
function En(e) {
  yi();
  var t = (
    /** @type {Effect} */
    w.f
  ), n = !m && (t & he) !== 0 && (t & qe) === 0;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      Q
    );
    (r.e ?? (r.e = [])).push(e);
  } else
    return nr(e);
}
function nr(e) {
  return Ne(ut | zr, e);
}
function ki(e) {
  Ue.ensure();
  const t = Ne(Re | rt, e);
  return (n = {}) => new Promise((r) => {
    n.outro ? ot(t, () => {
      U(t), r(void 0);
    }) : (U(t), r(void 0));
  });
}
function Ti(e) {
  return Ne(ct | rt, e);
}
function Si(e, t = 0) {
  return Ne(zt | t, e);
}
function xt(e, t = [], n = [], r = []) {
  ci(r, t, n, (i) => {
    Ne(zt, () => e(...i.map(k)));
  });
}
function rr(e, t = 0) {
  var n = Ne(ce | t, e);
  return n;
}
function ge(e) {
  return Ne(he | rt, e);
}
function ir(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = Me, r = m;
    kn(!0), X(null);
    try {
      t.call(null);
    } finally {
      kn(n), X(r);
    }
  }
}
function hn(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const i = n.ac;
    i !== null && tr(() => {
      i.abort(me);
    });
    var r = n.next;
    (n.f & Re) !== 0 ? n.parent = null : U(n, t), n = r;
  }
}
function Ai(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & he) === 0 && U(t), t = n;
  }
}
function U(e, t = !0) {
  var n = !1;
  (t || (e.f & Lr) !== 0) && e.nodes !== null && e.nodes.end !== null && (Ri(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), n = !0), A(e, wn), hn(e, t && !n), dt(e, 0);
  var r = e.nodes && e.nodes.t;
  if (r !== null)
    for (const l of r)
      l.stop();
  ir(e), e.f ^= wn, e.f |= se;
  var i = e.parent;
  i !== null && i.first !== null && sr(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function Ri(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : /* @__PURE__ */ Bt(e);
    e.remove(), e = n;
  }
}
function sr(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function ot(e, t, n = !0) {
  var r = [];
  lr(e, r, !0);
  var i = () => {
    n && U(e), t && t();
  }, l = r.length;
  if (l > 0) {
    var a = () => --l || i();
    for (var o of r)
      o.out(a);
  } else
    i();
}
function lr(e, t, n) {
  if ((e.f & J) === 0) {
    e.f ^= J;
    var r = e.nodes && e.nodes.t;
    if (r !== null)
      for (const o of r)
        (o.is_global || n) && t.push(o);
    for (var i = e.first; i !== null; ) {
      var l = i.next;
      if ((i.f & Re) === 0) {
        var a = (i.f & et) !== 0 || // If this is a branch effect without a block effect parent,
        // it means the parent block effect was pruned. In that case,
        // transparency information was transferred to the branch effect.
        (i.f & he) !== 0 && (e.f & ce) !== 0;
        lr(i, t, a ? n : !1);
      }
      i = l;
    }
  }
}
function Mi(e) {
  fr(e, !0);
}
function fr(e, t) {
  if ((e.f & J) !== 0) {
    e.f ^= J, (e.f & M) === 0 && (A(e, C), Ue.ensure().schedule(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, i = (n.f & et) !== 0 || (n.f & he) !== 0;
      fr(n, i ? t : !1), n = r;
    }
    var l = e.nodes && e.nodes.t;
    if (l !== null)
      for (const a of l)
        (a.is_global || t) && a.in();
  }
}
function ar(e, t) {
  if (e.nodes)
    for (var n = e.nodes.start, r = e.nodes.end; n !== null; ) {
      var i = n === r ? null : /* @__PURE__ */ Bt(n);
      t.append(n), n = i;
    }
}
let Ct = !1, Me = !1;
function kn(e) {
  Me = e;
}
let m = null, ie = !1;
function X(e) {
  m = e;
}
let w = null;
function ve(e) {
  w = e;
}
let Z = null;
function or(e) {
  m !== null && (Z === null ? Z = [e] : Z.push(e));
}
let j = null, L = 0, H = null;
function Ni(e) {
  H = e;
}
let ur = 1, Oe = 0, Ve = Oe;
function Tn(e) {
  Ve = e;
}
function cr() {
  return ++ur;
}
function bt(e) {
  var t = e.f;
  if ((t & C) !== 0)
    return !0;
  if (t & O && (e.f &= ~Be), (t & de) !== 0) {
    for (var n = (
      /** @type {Value[]} */
      e.deps
    ), r = n.length, i = 0; i < r; i++) {
      var l = n[i];
      if (bt(
        /** @type {Derived} */
        l
      ) && Kn(
        /** @type {Derived} */
        l
      ), l.wv > e.wv)
        return !0;
    }
    (t & K) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    re === null && A(e, M);
  }
  return !1;
}
function hr(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null && !(Z !== null && $e.call(Z, e)))
    for (var i = 0; i < r.length; i++) {
      var l = r[i];
      (l.f & O) !== 0 ? hr(
        /** @type {Derived} */
        l,
        t,
        !1
      ) : t === l && (n ? A(l, C) : (l.f & M) !== 0 && A(l, de), on(
        /** @type {Effect} */
        l
      ));
    }
}
function dr(e) {
  var x;
  var t = j, n = L, r = H, i = m, l = Z, a = Q, o = ie, f = Ve, u = e.f;
  j = /** @type {null | Value[]} */
  null, L = 0, H = null, m = (u & (he | Re)) === 0 ? e : null, Z = null, tt(e.ctx), ie = !1, Ve = ++Oe, e.ac !== null && (tr(() => {
    e.ac.abort(me);
  }), e.ac = null);
  try {
    e.f |= Ot;
    var d = (
      /** @type {Function} */
      e.fn
    ), _ = d();
    e.f |= qe;
    var v = e.deps, c = y?.is_fork;
    if (j !== null) {
      var h;
      if (c || dt(e, L), v !== null && L > 0)
        for (v.length = L + j.length, h = 0; h < j.length; h++)
          v[L + h] = j[h];
      else
        e.deps = v = j;
      if (cn() && (e.f & K) !== 0)
        for (h = L; h < v.length; h++)
          ((x = v[h]).reactions ?? (x.reactions = [])).push(e);
    } else !c && v !== null && L < v.length && (dt(e, L), v.length = L);
    if (Ln() && H !== null && !ie && v !== null && (e.f & (O | de | C)) === 0)
      for (h = 0; h < /** @type {Source[]} */
      H.length; h++)
        hr(
          H[h],
          /** @type {Effect} */
          e
        );
    if (i !== null && i !== e) {
      if (Oe++, i.deps !== null)
        for (let b = 0; b < n; b += 1)
          i.deps[b].rv = Oe;
      if (t !== null)
        for (const b of t)
          b.rv = Oe;
      H !== null && (r === null ? r = H : r.push(.../** @type {Source[]} */
      H));
    }
    return (e.f & Ae) !== 0 && (e.f ^= Ae), _;
  } catch (b) {
    return zn(b);
  } finally {
    e.f ^= Ot, j = t, L = n, H = r, m = i, Z = l, tt(a), ie = o, Ve = f;
  }
}
function Ci(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = Nr.call(n, e);
    if (r !== -1) {
      var i = n.length - 1;
      i === 0 ? n = t.reactions = null : (n[r] = n[i], n.pop());
    }
  }
  if (n === null && (t.f & O) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (j === null || !$e.call(j, t))) {
    var l = (
      /** @type {Derived} */
      t
    );
    (l.f & K) !== 0 && (l.f ^= K, l.f &= ~Be), l.v !== N && fn(l), _i(l), dt(l, 0);
  }
}
function dt(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      Ci(e, n[r]);
}
function nt(e) {
  var t = e.f;
  if ((t & se) === 0) {
    A(e, M);
    var n = w, r = Ct;
    w = e, Ct = !0;
    try {
      (t & (ce | Dn)) !== 0 ? Ai(e) : hn(e), ir(e);
      var i = dr(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = ur;
      var l;
    } finally {
      Ct = r, w = n;
    }
  }
}
function k(e) {
  var t = e.f, n = (t & O) !== 0;
  if (m !== null && !ie) {
    var r = w !== null && (w.f & se) !== 0;
    if (!r && (Z === null || !$e.call(Z, e))) {
      var i = m.deps;
      if ((m.f & Ot) !== 0)
        e.rv < Oe && (e.rv = Oe, j === null && i !== null && i[L] === e ? L++ : j === null ? j = [e] : j.push(e));
      else {
        (m.deps ?? (m.deps = [])).push(e);
        var l = e.reactions;
        l === null ? e.reactions = [m] : $e.call(l, m) || l.push(m);
      }
    }
  }
  if (Me && ze.has(e))
    return ze.get(e);
  if (n) {
    var a = (
      /** @type {Derived} */
      e
    );
    if (Me) {
      var o = a.v;
      return ((a.f & M) === 0 && a.reactions !== null || _r(a)) && (o = un(a)), ze.set(a, o), o;
    }
    var f = (a.f & K) === 0 && !ie && m !== null && (Ct || (m.f & K) !== 0), u = (a.f & qe) === 0;
    bt(a) && (f && (a.f |= K), Kn(a)), f && !u && (Jn(a), vr(a));
  }
  if (re?.has(e))
    return re.get(e);
  if ((e.f & Ae) !== 0)
    throw e.v;
  return e.v;
}
function vr(e) {
  if (e.f |= K, e.deps !== null)
    for (const t of e.deps)
      (t.reactions ?? (t.reactions = [])).push(e), (t.f & O) !== 0 && (t.f & K) === 0 && (Jn(
        /** @type {Derived} */
        t
      ), vr(
        /** @type {Derived} */
        t
      ));
}
function _r(e) {
  if (e.v === N) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (ze.has(t) || (t.f & O) !== 0 && _r(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function Oi(e) {
  var t = ie;
  try {
    return ie = !0, e();
  } finally {
    ie = t;
  }
}
const Di = ["touchstart", "touchmove"];
function Fi(e) {
  return Di.includes(e);
}
const De = Symbol("events"), pr = /* @__PURE__ */ new Set(), nn = /* @__PURE__ */ new Set();
function Pi(e, t, n) {
  (t[De] ?? (t[De] = {}))[e] = n;
}
function ji(e) {
  for (var t = 0; t < e.length; t++)
    pr.add(e[t]);
  for (var n of nn)
    n(e);
}
let Sn = null;
function An(e) {
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), r = e.type, i = e.composedPath?.() || [], l = (
    /** @type {null | Element} */
    i[0] || e.target
  );
  Sn = e;
  var a = 0, o = Sn === e && e[De];
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
    Or(e, "currentTarget", {
      configurable: !0,
      get() {
        return l || n;
      }
    });
    var d = m, _ = w;
    X(null), ve(null);
    try {
      for (var v, c = []; l !== null; ) {
        var h = l.assignedSlot || l.parentNode || /** @type {any} */
        l.host || null;
        try {
          var x = l[De]?.[r];
          x != null && (!/** @type {any} */
          l.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === l) && x.call(l, e);
        } catch (b) {
          v ? c.push(b) : v = b;
        }
        if (e.cancelBubble || h === t || h === null)
          break;
        l = h;
      }
      if (v) {
        for (let b of c)
          queueMicrotask(() => {
            throw b;
          });
        throw v;
      }
    } finally {
      e[De] = t, delete e.currentTarget, X(d), ve(_);
    }
  }
}
const Ii = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (e) => e
  })
);
function Li(e) {
  return (
    /** @type {string} */
    Ii?.createHTML(e) ?? e
  );
}
function zi(e) {
  var t = bi("template");
  return t.innerHTML = Li(e.replaceAll("<!>", "<!---->")), t.content;
}
function rn(e, t) {
  var n = (
    /** @type {Effect} */
    w
  );
  n.nodes === null && (n.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function yt(e, t) {
  var n = (t & Jr) !== 0, r = (t & Zr) !== 0, i, l = !e.startsWith("<!>");
  return () => {
    i === void 0 && (i = zi(l ? e : "<!>" + e), n || (i = /** @type {TemplateNode} */
    /* @__PURE__ */ Pt(i)));
    var a = (
      /** @type {TemplateNode} */
      r || Xn ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (n) {
      var o = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Pt(a)
      ), f = (
        /** @type {TemplateNode} */
        a.lastChild
      );
      rn(o, f);
    } else
      rn(a, a);
    return a;
  };
}
function Et(e = "") {
  {
    var t = ht(e + "");
    return rn(t, t), t;
  }
}
function _e(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function Wt(e, t) {
  var n = t == null ? "" : typeof t == "object" ? `${t}` : t;
  n !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = n, e.nodeValue = `${n}`);
}
function Vi(e, t) {
  return Bi(e, t);
}
const kt = /* @__PURE__ */ new Map();
function Bi(e, { target: t, anchor: n, props: r = {}, events: i, context: l, intro: a = !0, transformError: o }) {
  gi();
  var f = void 0, u = ki(() => {
    var d = n ?? t.appendChild(ht());
    li(
      /** @type {TemplateNode} */
      d,
      {
        pending: () => {
        }
      },
      (c) => {
        jn({});
        var h = (
          /** @type {ComponentContext} */
          Q
        );
        l && (h.c = l), i && (r.$$events = i), f = e(c, r) || {}, In();
      },
      o
    );
    var _ = /* @__PURE__ */ new Set(), v = (c) => {
      for (var h = 0; h < c.length; h++) {
        var x = c[h];
        if (!_.has(x)) {
          _.add(x);
          var b = Fi(x);
          for (const it of [t, document]) {
            var I = kt.get(it);
            I === void 0 && (I = /* @__PURE__ */ new Map(), kt.set(it, I));
            var Ee = I.get(x);
            Ee === void 0 ? (it.addEventListener(x, An, { passive: b }), I.set(x, 1)) : I.set(x, Ee + 1);
          }
        }
      }
    };
    return v(Cr(pr)), nn.add(v), () => {
      for (var c of _)
        for (const b of [t, document]) {
          var h = (
            /** @type {Map<string, number>} */
            kt.get(b)
          ), x = (
            /** @type {number} */
            h.get(c)
          );
          --x == 0 ? (b.removeEventListener(c, An), h.delete(c), h.size === 0 && kt.delete(b)) : h.set(c, x);
        }
      nn.delete(v), d !== n && d.parentNode?.removeChild(d);
    };
  });
  return sn.set(f, u), f;
}
let sn = /* @__PURE__ */ new WeakMap();
function Ui(e, t) {
  const n = sn.get(e);
  return n ? (sn.delete(e), n(t)) : Promise.resolve();
}
var ne, oe, B, Le, mt, wt, Lt;
class qi {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, n = !0) {
    /** @type {TemplateNode} */
    ee(this, "anchor");
    /** @type {Map<Batch, Key>} */
    p(this, ne, /* @__PURE__ */ new Map());
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
    p(this, oe, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    p(this, B, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    p(this, Le, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    p(this, mt, !0);
    /**
     * @param {Batch} batch
     */
    p(this, wt, (t) => {
      if (s(this, ne).has(t)) {
        var n = (
          /** @type {Key} */
          s(this, ne).get(t)
        ), r = s(this, oe).get(n);
        if (r)
          Mi(r), s(this, Le).delete(n);
        else {
          var i = s(this, B).get(n);
          i && (s(this, oe).set(n, i.effect), s(this, B).delete(n), i.fragment.lastChild.remove(), this.anchor.before(i.fragment), r = i.effect);
        }
        for (const [l, a] of s(this, ne)) {
          if (s(this, ne).delete(l), l === t)
            break;
          const o = s(this, B).get(a);
          o && (U(o.effect), s(this, B).delete(a));
        }
        for (const [l, a] of s(this, oe)) {
          if (l === n || s(this, Le).has(l)) continue;
          const o = () => {
            if (Array.from(s(this, ne).values()).includes(l)) {
              var u = document.createDocumentFragment();
              ar(a, u), u.append(ht()), s(this, B).set(l, { effect: a, fragment: u });
            } else
              U(a);
            s(this, Le).delete(l), s(this, oe).delete(l);
          };
          s(this, mt) || !r ? (s(this, Le).add(l), ot(a, o, !1)) : o();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    p(this, Lt, (t) => {
      s(this, ne).delete(t);
      const n = Array.from(s(this, ne).values());
      for (const [r, i] of s(this, B))
        n.includes(r) || (U(i.effect), s(this, B).delete(r));
    });
    this.anchor = t, g(this, mt, n);
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
    ), i = wi();
    if (n && !s(this, oe).has(t) && !s(this, B).has(t))
      if (i) {
        var l = document.createDocumentFragment(), a = ht();
        l.append(a), s(this, B).set(t, {
          effect: ge(() => n(a)),
          fragment: l
        });
      } else
        s(this, oe).set(
          t,
          ge(() => n(this.anchor))
        );
    if (s(this, ne).set(r, t), i) {
      for (const [o, f] of s(this, oe))
        o === t ? r.unskip_effect(f) : r.skip_effect(f);
      for (const [o, f] of s(this, B))
        o === t ? r.unskip_effect(f.effect) : r.skip_effect(f.effect);
      r.oncommit(s(this, wt)), r.ondiscard(s(this, Lt));
    } else
      s(this, wt).call(this, r);
  }
}
ne = new WeakMap(), oe = new WeakMap(), B = new WeakMap(), Le = new WeakMap(), mt = new WeakMap(), wt = new WeakMap(), Lt = new WeakMap();
function lt(e, t, n = !1) {
  var r = new qi(e), i = n ? et : 0;
  function l(a, o) {
    r.ensure(a, o);
  }
  rr(() => {
    var a = !1;
    t((o, f = 0) => {
      a = !0, l(f, o);
    }), a || l(-1, null);
  }, i);
}
const Hi = Symbol("is custom element"), Yi = Symbol("is html");
function Rn(e, t, n, r) {
  var i = Gi(e);
  i[t] !== (i[t] = n) && (n == null ? e.removeAttribute(t) : typeof n != "string" && Wi(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function Gi(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [Hi]: e.nodeName.includes("-"),
      [Yi]: e.namespaceURI === Fn
    })
  );
}
var Mn = /* @__PURE__ */ new Map();
function Wi(e) {
  var t = e.getAttribute("is") || e.nodeName, n = Mn.get(t);
  if (n) return n;
  Mn.set(t, n = []);
  for (var r, i = e, l = Element.prototype; l !== i; ) {
    r = Dr(i);
    for (var a in r)
      r[a].set && n.push(a);
    i = Cn(i);
  }
  return n;
}
const Ki = "5";
var Nn;
typeof window < "u" && ((Nn = window.__svelte ?? (window.__svelte = {})).v ?? (Nn.v = /* @__PURE__ */ new Set())).add(Ki);
var Ji = /* @__PURE__ */ yt('<div class="flex items-center justify-center py-8"><svg class="animate-spin h-8 w-8 text-white/60" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg></div>'), Zi = /* @__PURE__ */ yt('<p class="text-lg md:text-xl font-medium text-white/90 mb-3 leading-relaxed"> </p>'), Qi = /* @__PURE__ */ yt('<p class="text-base text-white/75 leading-relaxed"> </p>'), Xi = /* @__PURE__ */ yt('<div class="text-center md:text-left mb-8"><h1 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight tracking-tight drop-shadow-lg"><!></h1> <!> <!></div> <div class="flex flex-col items-center md:items-center gap-3"><button class="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-semibold text-base tracking-wide transition-all duration-300 bg-blue-500/90 hover:bg-blue-500 text-white border-2 border-blue-400 hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(59,130,246,0.5)] cursor-pointer"><!> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg></button></div>', 1), $i = /* @__PURE__ */ yt('<div class="relative w-full h-screen overflow-hidden flex items-center justify-center bg-black"><div class="absolute inset-0 z-0"><img src="/images/background.png" class="w-full h-full object-cover opacity-80 transition-opacity duration-1000"/> <div class="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-black/70"></div></div> <div class="absolute top-0 left-0 w-full h-20 bg-black/50 backdrop-blur-md z-20 flex items-center px-6 md:px-10"><div class="flex items-center gap-3"><img src="/images/logo.png" class="h-10 md:h-12 lg:h-14 w-auto drop-shadow-lg"/></div></div> <div class="relative z-10 w-full flex items-center justify-center md:justify-end px-4 md:px-10 lg:px-16"><div class="bg-black/55 backdrop-blur-lg rounded-2xl p-8 md:p-12 max-w-xl w-full text-white shadow-2xl border border-white/10"><!></div></div> <div class="absolute bottom-6 right-4 md:bottom-8 md:right-6 z-20"><a href="https://realmsgos.org" target="_blank" rel="noopener noreferrer" class="flex items-center gap-1.5 bg-black/60 backdrop-blur-lg rounded-lg px-3 py-2 text-white text-xs md:text-sm no-underline hover:text-white/80 transition-colors">Powered by <img src="/images/logo_horizontal_white.svg" alt="Realms GOS" class="h-5 md:h-6 inline-block"/></a></div></div>');
function es(e, t) {
  jn(t, !0);
  let n = /* @__PURE__ */ te(Ge({})), r = /* @__PURE__ */ te(!1), i = /* @__PURE__ */ te(!0), l = /* @__PURE__ */ Gt(() => k(n)?.realm_name || k(n)?.name || ""), a = /* @__PURE__ */ Gt(() => k(n)?.realm_description || k(n)?.description || ""), o = /* @__PURE__ */ Gt(() => k(n)?.realm_welcome_message || k(n)?.welcome_message || "");
  En(() => {
    const le = t.ctx.realmInfo?.subscribe?.(($) => {
      $ && typeof $ == "object" && (ue(n, $, !0), ue(i, !!$.loading));
    });
    return () => le?.();
  }), En(() => {
    const le = t.ctx.isAuthenticated?.subscribe?.(($) => {
      ue(r, !!$);
    });
    return () => le?.();
  });
  function f() {
    k(r) ? t.ctx.navigate?.("/") : t.ctx.navigate?.("/join");
  }
  var u = $i(), d = q(u), _ = q(d), v = st(d, 2), c = q(v), h = q(c), x = st(v, 2), b = q(x), I = q(b);
  {
    var Ee = (le) => {
      var $ = Ji();
      _e(le, $);
    }, it = (le) => {
      var $ = Xi(), dn = mi($), vn = q(dn), gr = q(vn);
      {
        var mr = (S) => {
          var F = Et();
          xt(() => Wt(F, `Welcome to ${k(l) ?? ""}`)), _e(S, F);
        }, wr = (S) => {
          var F = Et("Welcome");
          _e(S, F);
        };
        lt(gr, (S) => {
          k(l) ? S(mr) : S(wr, -1);
        });
      }
      var _n = st(vn, 2);
      {
        var br = (S) => {
          var F = Zi(), Ut = q(F);
          xt(() => Wt(Ut, k(o))), _e(S, F);
        };
        lt(_n, (S) => {
          k(o) && S(br);
        });
      }
      var yr = st(_n, 2);
      {
        var xr = (S) => {
          var F = Qi(), Ut = q(F);
          xt(() => Wt(Ut, k(a))), _e(S, F);
        };
        lt(yr, (S) => {
          k(a) && S(xr);
        });
      }
      var Er = st(dn, 2), pn = q(Er), kr = q(pn);
      {
        var Tr = (S) => {
          var F = Et("Enter Realm");
          _e(S, F);
        }, Sr = (S) => {
          var F = Et("Join this Realm");
          _e(S, F);
        };
        lt(kr, (S) => {
          k(r) ? S(Tr) : S(Sr, -1);
        });
      }
      Pi("click", pn, f), _e(le, $);
    };
    lt(I, (le) => {
      k(i) ? le(Ee) : le(it, -1);
    });
  }
  xt(() => {
    Rn(_, "alt", k(l) ? `${k(l)} background` : "Realm background"), Rn(h, "alt", k(l) || "Realm");
  }), _e(e, u), In();
}
ji(["click"]);
function rs(e, t) {
  const n = Vi(es, { target: e, props: { ctx: t } });
  return {
    unmount() {
      try {
        Ui(n);
      } catch {
      }
    }
  };
}
export {
  rs as default
};
