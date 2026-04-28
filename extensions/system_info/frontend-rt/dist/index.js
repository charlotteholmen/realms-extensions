var Js = Object.defineProperty;
var cn = (e) => {
  throw TypeError(e);
};
var Xs = (e, t, r) => t in e ? Js(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var Ce = (e, t, r) => Xs(e, typeof t != "symbol" ? t + "" : t, r), wr = (e, t, r) => t.has(e) || cn("Cannot " + r);
var i = (e, t, r) => (wr(e, t, "read from private field"), r ? r.call(e) : t.get(e)), b = (e, t, r) => t.has(e) ? cn("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), E = (e, t, r, n) => (wr(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r), R = (e, t, r) => (wr(e, t, "access private method"), r);
var Sn = Array.isArray, Zs = Array.prototype.indexOf, Ft = Array.prototype.includes, xr = Array.from, Qs = Object.defineProperty, Ut = Object.getOwnPropertyDescriptor, ea = Object.prototype, ta = Array.prototype, ra = Object.getPrototypeOf, vn = Object.isExtensible;
const na = () => {
};
function sa(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function Tn() {
  var e, t, r = new Promise((n, s) => {
    e = n, t = s;
  });
  return { promise: r, resolve: e, reject: t };
}
function kr(e, t) {
  if (Array.isArray(e))
    return e;
  if (!(Symbol.iterator in e))
    return Array.from(e);
  const r = [];
  for (const n of e)
    if (r.push(n), r.length === t) break;
  return r;
}
const W = 2, Gt = 4, mr = 8, An = 1 << 24, Ie = 16, Fe = 32, et = 64, Tr = 128, me = 512, q = 1024, K = 2048, je = 4096, Z = 8192, be = 16384, bt = 32768, hn = 1 << 25, Dt = 65536, Ar = 1 << 17, aa = 1 << 18, jt = 1 << 19, ia = 1 << 20, Ke = 1 << 25, yt = 65536, hr = 1 << 21, Kt = 1 << 22, Qe = 1 << 23, Er = Symbol("$state"), He = new class extends Error {
  constructor() {
    super(...arguments);
    Ce(this, "name", "StaleReactionError");
    Ce(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
function la() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function oa(e, t, r) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function fa(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function ua() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function da(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function ca() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function va() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function ha() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function _a() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function pa() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
const ga = 1, ya = 2, xa = 16, ma = 1, ba = 2, Y = Symbol(), wa = "http://www.w3.org/1999/xhtml";
function ka() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function Ea() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function Cn(e) {
  return e === this.v;
}
function Sa(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Nn(e) {
  return !Sa(e, this.v);
}
let ke = null;
function Ot(e) {
  ke = e;
}
function Mn(e, t = !1, r) {
  ke = {
    p: ke,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    r: (
      /** @type {Effect} */
      A
    ),
    l: null
  };
}
function Rn(e) {
  var t = (
    /** @type {ComponentContext} */
    ke
  ), r = t.e;
  if (r !== null) {
    t.e = null;
    for (var n of r)
      Jn(n);
  }
  return t.i = !0, ke = t.p, /** @type {T} */
  {};
}
function Fn() {
  return !0;
}
let Et = [];
function Ta() {
  var e = Et;
  Et = [], sa(e);
}
function Tt(e) {
  if (Et.length === 0) {
    var t = Et;
    queueMicrotask(() => {
      t === Et && Ta();
    });
  }
  Et.push(e);
}
function Dn(e) {
  var t = A;
  if (t === null)
    return S.f |= Qe, e;
  if ((t.f & bt) === 0 && (t.f & Gt) === 0)
    throw e;
  Ze(e, t);
}
function Ze(e, t) {
  for (; t !== null; ) {
    if ((t.f & Tr) !== 0) {
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
const Aa = -7169;
function L(e, t) {
  e.f = e.f & Aa | t;
}
function Lr(e) {
  (e.f & me) !== 0 || e.deps === null ? L(e, q) : L(e, je);
}
function On(e) {
  if (e !== null)
    for (const t of e)
      (t.f & W) === 0 || (t.f & yt) === 0 || (t.f ^= yt, On(
        /** @type {Derived} */
        t.deps
      ));
}
function Pn(e, t, r) {
  (e.f & K) !== 0 ? t.add(e) : (e.f & je) !== 0 && r.add(e), On(e.deps), L(e, q);
}
const at = /* @__PURE__ */ new Set();
let C = null, Me = null, Cr = null, Sr = !1, St = null, lr = null;
var _n = 0;
let Ca = 1;
var At, Ct, ft, qe, Oe, Jt, le, Xt, Je, Ue, Pe, Nt, Mt, ut, B, or, $n, fr, Nr, ur, Na;
const pr = class pr {
  constructor() {
    b(this, B);
    Ce(this, "id", Ca++);
    /**
     * The current values of any signals that are updated in this batch.
     * Tuple format: [value, is_derived] (note: is_derived is false for deriveds, too, if they were overridden via assignment)
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Value, [any, boolean]>}
     */
    Ce(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any signals (sources and deriveds) that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Value, any>}
     */
    Ce(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<(batch: Batch) => void>}
     */
    b(this, At, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    b(this, Ct, /* @__PURE__ */ new Set());
    /**
     * Callbacks that should run only when a fork is committed.
     * @type {Set<(batch: Batch) => void>}
     */
    b(this, ft, /* @__PURE__ */ new Set());
    /**
     * Async effects that are currently in flight
     * @type {Map<Effect, number>}
     */
    b(this, qe, /* @__PURE__ */ new Map());
    /**
     * Async effects that are currently in flight, _not_ inside a pending boundary
     * @type {Map<Effect, number>}
     */
    b(this, Oe, /* @__PURE__ */ new Map());
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    b(this, Jt, null);
    /**
     * The root effects that need to be flushed
     * @type {Effect[]}
     */
    b(this, le, []);
    /**
     * Effects created while this batch was active.
     * @type {Effect[]}
     */
    b(this, Xt, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    b(this, Je, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    b(this, Ue, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    b(this, Pe, /* @__PURE__ */ new Map());
    /**
     * Inverse of #skipped_branches which we need to tell prior batches to unskip them when committing
     * @type {Set<Effect>}
     */
    b(this, Nt, /* @__PURE__ */ new Set());
    Ce(this, "is_fork", !1);
    b(this, Mt, !1);
    /** @type {Set<Batch>} */
    b(this, ut, /* @__PURE__ */ new Set());
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(t) {
    i(this, Pe).has(t) || i(this, Pe).set(t, { d: [], m: [] }), i(this, Nt).delete(t);
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   * @param {(e: Effect) => void} callback
   */
  unskip_effect(t, r = (n) => this.schedule(n)) {
    var n = i(this, Pe).get(t);
    if (n) {
      i(this, Pe).delete(t);
      for (var s of n.d)
        L(s, K), r(s);
      for (s of n.m)
        L(s, je), r(s);
    }
    i(this, Nt).add(t);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Value} source
   * @param {any} value
   * @param {boolean} [is_derived]
   */
  capture(t, r, n = !1) {
    t.v !== Y && !this.previous.has(t) && this.previous.set(t, t.v), (t.f & Qe) === 0 && (this.current.set(t, [r, n]), Me?.set(t, r)), this.is_fork || (t.v = r);
  }
  activate() {
    C = this;
  }
  deactivate() {
    C = null, Me = null;
  }
  flush() {
    try {
      Sr = !0, C = this, R(this, B, fr).call(this);
    } finally {
      _n = 0, Cr = null, St = null, lr = null, Sr = !1, C = null, Me = null, ht.clear();
    }
  }
  discard() {
    for (const t of i(this, Ct)) t(this);
    i(this, Ct).clear(), i(this, ft).clear(), at.delete(this);
  }
  /**
   * @param {Effect} effect
   */
  register_created_effect(t) {
    i(this, Xt).push(t);
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  increment(t, r) {
    let n = i(this, qe).get(r) ?? 0;
    if (i(this, qe).set(r, n + 1), t) {
      let s = i(this, Oe).get(r) ?? 0;
      i(this, Oe).set(r, s + 1);
    }
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   * @param {boolean} skip - whether to skip updates (because this is triggered by a stale reaction)
   */
  decrement(t, r, n) {
    let s = i(this, qe).get(r) ?? 0;
    if (s === 1 ? i(this, qe).delete(r) : i(this, qe).set(r, s - 1), t) {
      let a = i(this, Oe).get(r) ?? 0;
      a === 1 ? i(this, Oe).delete(r) : i(this, Oe).set(r, a - 1);
    }
    i(this, Mt) || n || (E(this, Mt, !0), Tt(() => {
      E(this, Mt, !1), this.flush();
    }));
  }
  /**
   * @param {Set<Effect>} dirty_effects
   * @param {Set<Effect>} maybe_dirty_effects
   */
  transfer_effects(t, r) {
    for (const n of t)
      i(this, Je).add(n);
    for (const n of r)
      i(this, Ue).add(n);
    t.clear(), r.clear();
  }
  /** @param {(batch: Batch) => void} fn */
  oncommit(t) {
    i(this, At).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    i(this, Ct).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  on_fork_commit(t) {
    i(this, ft).add(t);
  }
  run_fork_commit_callbacks() {
    for (const t of i(this, ft)) t(this);
    i(this, ft).clear();
  }
  settled() {
    return (i(this, Jt) ?? E(this, Jt, Tn())).promise;
  }
  static ensure() {
    if (C === null) {
      const t = C = new pr();
      Sr || (at.add(C), Tt(() => {
        C === t && t.flush();
      }));
    }
    return C;
  }
  apply() {
    {
      Me = null;
      return;
    }
  }
  /**
   *
   * @param {Effect} effect
   */
  schedule(t) {
    if (Cr = t, t.b?.is_pending && (t.f & (Gt | mr | An)) !== 0 && (t.f & bt) === 0) {
      t.b.defer_effect(t);
      return;
    }
    for (var r = t; r.parent !== null; ) {
      r = r.parent;
      var n = r.f;
      if (St !== null && r === A && (S === null || (S.f & W) === 0))
        return;
      if ((n & (et | Fe)) !== 0) {
        if ((n & q) === 0)
          return;
        r.f ^= q;
      }
    }
    i(this, le).push(r);
  }
};
At = new WeakMap(), Ct = new WeakMap(), ft = new WeakMap(), qe = new WeakMap(), Oe = new WeakMap(), Jt = new WeakMap(), le = new WeakMap(), Xt = new WeakMap(), Je = new WeakMap(), Ue = new WeakMap(), Pe = new WeakMap(), Nt = new WeakMap(), Mt = new WeakMap(), ut = new WeakMap(), B = new WeakSet(), or = function() {
  return this.is_fork || i(this, Oe).size > 0;
}, $n = function() {
  for (const n of i(this, ut))
    for (const s of i(n, Oe).keys()) {
      for (var t = !1, r = s; r.parent !== null; ) {
        if (i(this, Pe).has(r)) {
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
  var o;
  if (_n++ > 1e3 && (at.delete(this), Ma()), !R(this, B, or).call(this)) {
    for (const l of i(this, Je))
      i(this, Ue).delete(l), L(l, K), this.schedule(l);
    for (const l of i(this, Ue))
      L(l, je), this.schedule(l);
  }
  const t = i(this, le);
  E(this, le, []), this.apply();
  var r = St = [], n = [], s = lr = [];
  for (const l of t)
    try {
      R(this, B, Nr).call(this, l, r, n);
    } catch (f) {
      throw Ln(l), f;
    }
  if (C = null, s.length > 0) {
    var a = pr.ensure();
    for (const l of s)
      a.schedule(l);
  }
  if (St = null, lr = null, R(this, B, or).call(this) || R(this, B, $n).call(this)) {
    R(this, B, ur).call(this, n), R(this, B, ur).call(this, r);
    for (const [l, f] of i(this, Pe))
      jn(l, f);
  } else {
    i(this, qe).size === 0 && at.delete(this), i(this, Je).clear(), i(this, Ue).clear();
    for (const l of i(this, At)) l(this);
    i(this, At).clear(), pn(n), pn(r), i(this, Jt)?.resolve();
  }
  var u = (
    /** @type {Batch | null} */
    /** @type {unknown} */
    C
  );
  if (i(this, le).length > 0) {
    const l = u ?? (u = this);
    i(l, le).push(...i(this, le).filter((f) => !i(l, le).includes(f)));
  }
  u !== null && (at.add(u), R(o = u, B, fr).call(o));
}, /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
Nr = function(t, r, n) {
  t.f ^= q;
  for (var s = t.first; s !== null; ) {
    var a = s.f, u = (a & (Fe | et)) !== 0, o = u && (a & q) !== 0, l = o || (a & Z) !== 0 || i(this, Pe).has(s);
    if (!l && s.fn !== null) {
      u ? s.f ^= q : (a & Gt) !== 0 ? r.push(s) : nr(s) && ((a & Ie) !== 0 && i(this, Ue).add(s), It(s));
      var f = s.first;
      if (f !== null) {
        s = f;
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
ur = function(t) {
  for (var r = 0; r < t.length; r += 1)
    Pn(t[r], i(this, Je), i(this, Ue));
}, Na = function() {
  var h, g, p;
  for (const v of at) {
    var t = v.id < this.id, r = [];
    for (const [d, [m, k]] of this.current) {
      if (v.current.has(d)) {
        var n = (
          /** @type {[any, boolean]} */
          v.current.get(d)[0]
        );
        if (t && m !== n)
          v.current.set(d, [m, k]);
        else
          continue;
      }
      r.push(d);
    }
    var s = [...v.current.keys()].filter((d) => !this.current.has(d));
    if (s.length === 0)
      t && v.discard();
    else if (r.length > 0) {
      if (t)
        for (const d of i(this, Nt))
          v.unskip_effect(d, (m) => {
            var k;
            (m.f & (Ie | Kt)) !== 0 ? v.schedule(m) : R(k = v, B, ur).call(k, [m]);
          });
      v.activate();
      var a = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Map();
      for (var o of r)
        In(o, s, a, u);
      u = /* @__PURE__ */ new Map();
      var l = [...v.current.keys()].filter(
        (d) => this.current.has(d) ? (
          /** @type {[any, boolean]} */
          this.current.get(d)[0] !== d
        ) : !0
      );
      for (const d of i(this, Xt))
        (d.f & (be | Z | Ar)) === 0 && Br(d, l, u) && ((d.f & (Kt | Ie)) !== 0 ? (L(d, K), v.schedule(d)) : i(v, Je).add(d));
      if (i(v, le).length > 0) {
        v.apply();
        for (var f of i(v, le))
          R(h = v, B, Nr).call(h, f, [], []);
        E(v, le, []);
      }
      v.deactivate();
    }
  }
  for (const v of at)
    i(v, ut).has(this) && (i(v, ut).delete(this), i(v, ut).size === 0 && !R(g = v, B, or).call(g) && (v.activate(), R(p = v, B, fr).call(p)));
};
let xt = pr;
function Ma() {
  try {
    ca();
  } catch (e) {
    Ze(e, Cr);
  }
}
let Ve = null;
function pn(e) {
  var t = e.length;
  if (t !== 0) {
    for (var r = 0; r < t; ) {
      var n = e[r++];
      if ((n.f & (be | Z)) === 0 && nr(n) && (Ve = /* @__PURE__ */ new Set(), It(n), n.deps === null && n.first === null && n.nodes === null && n.teardown === null && n.ac === null && Zn(n), Ve?.size > 0)) {
        ht.clear();
        for (const s of Ve) {
          if ((s.f & (be | Z)) !== 0) continue;
          const a = [s];
          let u = s.parent;
          for (; u !== null; )
            Ve.has(u) && (Ve.delete(u), a.push(u)), u = u.parent;
          for (let o = a.length - 1; o >= 0; o--) {
            const l = a[o];
            (l.f & (be | Z)) === 0 && It(l);
          }
        }
        Ve.clear();
      }
    }
    Ve = null;
  }
}
function In(e, t, r, n) {
  if (!r.has(e) && (r.add(e), e.reactions !== null))
    for (const s of e.reactions) {
      const a = s.f;
      (a & W) !== 0 ? In(
        /** @type {Derived} */
        s,
        t,
        r,
        n
      ) : (a & (Kt | Ie)) !== 0 && (a & K) === 0 && Br(s, t, n) && (L(s, K), zr(
        /** @type {Effect} */
        s
      ));
    }
}
function Br(e, t, r) {
  const n = r.get(e);
  if (n !== void 0) return n;
  if (e.deps !== null)
    for (const s of e.deps) {
      if (Ft.call(t, s))
        return !0;
      if ((s.f & W) !== 0 && Br(
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
function zr(e) {
  C.schedule(e);
}
function jn(e, t) {
  if (!((e.f & Fe) !== 0 && (e.f & q) !== 0)) {
    (e.f & K) !== 0 ? t.d.push(e) : (e.f & je) !== 0 && t.m.push(e), L(e, q);
    for (var r = e.first; r !== null; )
      jn(r, t), r = r.next;
  }
}
function Ln(e) {
  L(e, q);
  for (var t = e.first; t !== null; )
    Ln(t), t = t.next;
}
function Ra(e) {
  let t = 0, r = mt(0), n;
  return () => {
    qr() && (c(r), ri(() => (t === 0 && (n = li(() => e(() => Yt(r)))), t += 1, () => {
      Tt(() => {
        t -= 1, t === 0 && (n?.(), n = void 0, Yt(r));
      });
    })));
  };
}
var Fa = Dt | jt;
function Da(e, t, r, n) {
  new Oa(e, t, r, n);
}
var _e, jr, pe, dt, te, ge, X, oe, Ye, ct, Xe, Rt, Zt, Qt, Ge, gr, j, Pa, $a, Ia, Mr, dr, cr, Rr, Fr;
class Oa {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(t, r, n, s) {
    b(this, j);
    /** @type {Boundary | null} */
    Ce(this, "parent");
    Ce(this, "is_pending", !1);
    /**
     * API-level transformError transform function. Transforms errors before they reach the `failed` snippet.
     * Inherited from parent boundary, or defaults to identity.
     * @type {(error: unknown) => unknown}
     */
    Ce(this, "transform_error");
    /** @type {TemplateNode} */
    b(this, _e);
    /** @type {TemplateNode | null} */
    b(this, jr, null);
    /** @type {BoundaryProps} */
    b(this, pe);
    /** @type {((anchor: Node) => void)} */
    b(this, dt);
    /** @type {Effect} */
    b(this, te);
    /** @type {Effect | null} */
    b(this, ge, null);
    /** @type {Effect | null} */
    b(this, X, null);
    /** @type {Effect | null} */
    b(this, oe, null);
    /** @type {DocumentFragment | null} */
    b(this, Ye, null);
    b(this, ct, 0);
    b(this, Xe, 0);
    b(this, Rt, !1);
    /** @type {Set<Effect>} */
    b(this, Zt, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    b(this, Qt, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    b(this, Ge, null);
    b(this, gr, Ra(() => (E(this, Ge, mt(i(this, ct))), () => {
      E(this, Ge, null);
    })));
    E(this, _e, t), E(this, pe, r), E(this, dt, (a) => {
      var u = (
        /** @type {Effect} */
        A
      );
      u.b = this, u.f |= Tr, n(a);
    }), this.parent = /** @type {Effect} */
    A.b, this.transform_error = s ?? this.parent?.transform_error ?? ((a) => a), E(this, te, Ur(() => {
      R(this, j, Mr).call(this);
    }, Fa));
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    Pn(t, i(this, Zt), i(this, Qt));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!i(this, pe).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  update_pending_count(t, r) {
    R(this, j, Rr).call(this, t, r), E(this, ct, i(this, ct) + t), !(!i(this, Ge) || i(this, Rt)) && (E(this, Rt, !0), Tt(() => {
      E(this, Rt, !1), i(this, Ge) && Pt(i(this, Ge), i(this, ct));
    }));
  }
  get_effect_pending() {
    return i(this, gr).call(this), c(
      /** @type {Source<number>} */
      i(this, Ge)
    );
  }
  /** @param {unknown} error */
  error(t) {
    if (!i(this, pe).onerror && !i(this, pe).failed)
      throw t;
    C?.is_fork ? (i(this, ge) && C.skip_effect(i(this, ge)), i(this, X) && C.skip_effect(i(this, X)), i(this, oe) && C.skip_effect(i(this, oe)), C.on_fork_commit(() => {
      R(this, j, Fr).call(this, t);
    })) : R(this, j, Fr).call(this, t);
  }
}
_e = new WeakMap(), jr = new WeakMap(), pe = new WeakMap(), dt = new WeakMap(), te = new WeakMap(), ge = new WeakMap(), X = new WeakMap(), oe = new WeakMap(), Ye = new WeakMap(), ct = new WeakMap(), Xe = new WeakMap(), Rt = new WeakMap(), Zt = new WeakMap(), Qt = new WeakMap(), Ge = new WeakMap(), gr = new WeakMap(), j = new WeakSet(), Pa = function() {
  try {
    E(this, ge, xe(() => i(this, dt).call(this, i(this, _e))));
  } catch (t) {
    this.error(t);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
$a = function(t) {
  const r = i(this, pe).failed;
  r && E(this, oe, xe(() => {
    r(
      i(this, _e),
      () => t,
      () => () => {
      }
    );
  }));
}, Ia = function() {
  const t = i(this, pe).pending;
  t && (this.is_pending = !0, E(this, X, xe(() => t(i(this, _e)))), Tt(() => {
    var r = E(this, Ye, document.createDocumentFragment()), n = _t();
    r.append(n), E(this, ge, R(this, j, cr).call(this, () => xe(() => i(this, dt).call(this, n)))), i(this, Xe) === 0 && (i(this, _e).before(r), E(this, Ye, null), pt(
      /** @type {Effect} */
      i(this, X),
      () => {
        E(this, X, null);
      }
    ), R(this, j, dr).call(
      this,
      /** @type {Batch} */
      C
    ));
  }));
}, Mr = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), E(this, Xe, 0), E(this, ct, 0), E(this, ge, xe(() => {
      i(this, dt).call(this, i(this, _e));
    })), i(this, Xe) > 0) {
      var t = E(this, Ye, document.createDocumentFragment());
      Kr(i(this, ge), t);
      const r = (
        /** @type {(anchor: Node) => void} */
        i(this, pe).pending
      );
      E(this, X, xe(() => r(i(this, _e))));
    } else
      R(this, j, dr).call(
        this,
        /** @type {Batch} */
        C
      );
  } catch (r) {
    this.error(r);
  }
}, /**
 * @param {Batch} batch
 */
dr = function(t) {
  this.is_pending = !1, t.transfer_effects(i(this, Zt), i(this, Qt));
}, /**
 * @template T
 * @param {() => T} fn
 */
cr = function(t) {
  var r = A, n = S, s = ke;
  Le(i(this, te)), Ee(i(this, te)), Ot(i(this, te).ctx);
  try {
    return xt.ensure(), t();
  } catch (a) {
    return Dn(a), null;
  } finally {
    Le(r), Ee(n), Ot(s);
  }
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 * @param {Batch} batch
 */
Rr = function(t, r) {
  var n;
  if (!this.has_pending_snippet()) {
    this.parent && R(n = this.parent, j, Rr).call(n, t, r);
    return;
  }
  E(this, Xe, i(this, Xe) + t), i(this, Xe) === 0 && (R(this, j, dr).call(this, r), i(this, X) && pt(i(this, X), () => {
    E(this, X, null);
  }), i(this, Ye) && (i(this, _e).before(i(this, Ye)), E(this, Ye, null)));
}, /**
 * @param {unknown} error
 */
Fr = function(t) {
  i(this, ge) && (se(i(this, ge)), E(this, ge, null)), i(this, X) && (se(i(this, X)), E(this, X, null)), i(this, oe) && (se(i(this, oe)), E(this, oe, null));
  var r = i(this, pe).onerror;
  let n = i(this, pe).failed;
  var s = !1, a = !1;
  const u = () => {
    if (s) {
      Ea();
      return;
    }
    s = !0, a && pa(), i(this, oe) !== null && pt(i(this, oe), () => {
      E(this, oe, null);
    }), R(this, j, cr).call(this, () => {
      R(this, j, Mr).call(this);
    });
  }, o = (l) => {
    try {
      a = !0, r?.(l, u), a = !1;
    } catch (f) {
      Ze(f, i(this, te) && i(this, te).parent);
    }
    n && E(this, oe, R(this, j, cr).call(this, () => {
      try {
        return xe(() => {
          var f = (
            /** @type {Effect} */
            A
          );
          f.b = this, f.f |= Tr, n(
            i(this, _e),
            () => l,
            () => u
          );
        });
      } catch (f) {
        return Ze(
          f,
          /** @type {Effect} */
          i(this, te).parent
        ), null;
      }
    }));
  };
  Tt(() => {
    var l;
    try {
      l = this.transform_error(t);
    } catch (f) {
      Ze(f, i(this, te) && i(this, te).parent);
      return;
    }
    l !== null && typeof l == "object" && typeof /** @type {any} */
    l.then == "function" ? l.then(
      o,
      /** @param {unknown} e */
      (f) => Ze(f, i(this, te) && i(this, te).parent)
    ) : o(l);
  });
};
function ja(e, t, r, n) {
  const s = Vr;
  var a = e.filter((p) => !p.settled);
  if (r.length === 0 && a.length === 0) {
    n(t.map(s));
    return;
  }
  var u = (
    /** @type {Effect} */
    A
  ), o = La(), l = a.length === 1 ? a[0].promise : a.length > 1 ? Promise.all(a.map((p) => p.promise)) : null;
  function f(p) {
    o();
    try {
      n(p);
    } catch (v) {
      (u.f & be) === 0 && Ze(v, u);
    }
    _r();
  }
  if (r.length === 0) {
    l.then(() => f(t.map(s)));
    return;
  }
  var h = Bn();
  function g() {
    Promise.all(r.map((p) => /* @__PURE__ */ Ba(p))).then((p) => f([...t.map(s), ...p])).catch((p) => Ze(p, u)).finally(() => h());
  }
  l ? l.then(() => {
    o(), g(), _r();
  }) : g();
}
function La() {
  var e = (
    /** @type {Effect} */
    A
  ), t = S, r = ke, n = (
    /** @type {Batch} */
    C
  );
  return function(a = !0) {
    Le(e), Ee(t), Ot(r), a && (e.f & be) === 0 && (n?.activate(), n?.apply());
  };
}
function _r(e = !0) {
  Le(null), Ee(null), Ot(null), e && C?.deactivate();
}
function Bn() {
  var e = (
    /** @type {Effect} */
    A
  ), t = (
    /** @type {Boundary} */
    e.b
  ), r = (
    /** @type {Batch} */
    C
  ), n = t.is_rendered();
  return t.update_pending_count(1, r), r.increment(n, e), (s = !1) => {
    t.update_pending_count(-1, r), r.decrement(n, e, s);
  };
}
// @__NO_SIDE_EFFECTS__
function Vr(e) {
  var t = W | K;
  return A !== null && (A.f |= jt), {
    ctx: ke,
    deps: null,
    effects: null,
    equals: Cn,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      Y
    ),
    wv: 0,
    parent: A,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function Ba(e, t, r) {
  let n = (
    /** @type {Effect | null} */
    A
  );
  n === null && la();
  var s = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), a = mt(
    /** @type {V} */
    Y
  ), u = !S, o = /* @__PURE__ */ new Map();
  return ti(() => {
    var l = (
      /** @type {Effect} */
      A
    ), f = Tn();
    s = f.promise;
    try {
      Promise.resolve(e()).then(f.resolve, f.reject).finally(_r);
    } catch (v) {
      f.reject(v), _r();
    }
    var h = (
      /** @type {Batch} */
      C
    );
    if (u) {
      if ((l.f & bt) !== 0)
        var g = Bn();
      if (
        /** @type {Boundary} */
        n.b.is_rendered()
      )
        o.get(h)?.reject(He), o.delete(h);
      else {
        for (const v of o.values())
          v.reject(He);
        o.clear();
      }
      o.set(h, f);
    }
    const p = (v, d = void 0) => {
      if (g) {
        var m = d === He;
        g(m);
      }
      if (!(d === He || (l.f & be) !== 0)) {
        if (h.activate(), d)
          a.f |= Qe, Pt(a, d);
        else {
          (a.f & Qe) !== 0 && (a.f ^= Qe), Pt(a, v);
          for (const [k, D] of o) {
            if (o.delete(k), k === h) break;
            D.reject(He);
          }
        }
        h.deactivate();
      }
    };
    f.promise.then(p, (v) => p(null, v || "unknown"));
  }), Za(() => {
    for (const l of o.values())
      l.reject(He);
  }), new Promise((l) => {
    function f(h) {
      function g() {
        h === s ? l(a) : f(s);
      }
      h.then(g, g);
    }
    f(s);
  });
}
// @__NO_SIDE_EFFECTS__
function it(e) {
  const t = /* @__PURE__ */ Vr(e);
  return ts(t), t;
}
// @__NO_SIDE_EFFECTS__
function za(e) {
  const t = /* @__PURE__ */ Vr(e);
  return t.equals = Nn, t;
}
function Va(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var r = 0; r < t.length; r += 1)
      se(
        /** @type {Effect} */
        t[r]
      );
  }
}
function Hr(e) {
  var t, r = A, n = e.parent;
  if (!tt && n !== null && (n.f & (be | Z)) !== 0)
    return ka(), e.v;
  Le(n);
  try {
    e.f &= ~yt, Va(e), t = as(e);
  } finally {
    Le(r);
  }
  return t;
}
function zn(e) {
  var t = Hr(e);
  if (!e.equals(t) && (e.wv = ns(), (!C?.is_fork || e.deps === null) && (C !== null ? C.capture(e, t, !0) : e.v = t, e.deps === null))) {
    L(e, q);
    return;
  }
  tt || (Me !== null ? (qr() || C?.is_fork) && Me.set(e, t) : Lr(e));
}
function Ha(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      (t.teardown || t.ac) && (t.teardown?.(), t.ac?.abort(He), t.teardown = na, t.ac = null, Wt(t, 0), Yr(t));
}
function Vn(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      t.teardown && It(t);
}
let Dr = /* @__PURE__ */ new Set();
const ht = /* @__PURE__ */ new Map();
let Hn = !1;
function mt(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Cn,
    rv: 0,
    wv: 0
  };
  return r;
}
// @__NO_SIDE_EFFECTS__
function ye(e, t) {
  const r = mt(e);
  return ts(r), r;
}
// @__NO_SIDE_EFFECTS__
function qa(e, t = !1, r = !0) {
  const n = mt(e);
  return t || (n.equals = Nn), n;
}
function ne(e, t, r = !1) {
  S !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Re || (S.f & Ar) !== 0) && Fn() && (S.f & (W | Ie | Kt | Ar)) !== 0 && (we === null || !Ft.call(we, e)) && _a();
  let n = r ? Ht(t) : t;
  return Pt(e, n, lr);
}
function Pt(e, t, r = null) {
  if (!e.equals(t)) {
    ht.set(e, tt ? t : e.v);
    var n = xt.ensure();
    if (n.capture(e, t), (e.f & W) !== 0) {
      const s = (
        /** @type {Derived} */
        e
      );
      (e.f & K) !== 0 && Hr(s), Me === null && Lr(s);
    }
    e.wv = ns(), qn(e, K, r), A !== null && (A.f & q) !== 0 && (A.f & (Fe | et)) === 0 && (he === null ? ai([e]) : he.push(e)), !n.is_fork && Dr.size > 0 && !Hn && Ua();
  }
  return t;
}
function Ua() {
  Hn = !1;
  for (const e of Dr)
    (e.f & q) !== 0 && L(e, je), nr(e) && It(e);
  Dr.clear();
}
function Yt(e) {
  ne(e, e.v + 1);
}
function qn(e, t, r) {
  var n = e.reactions;
  if (n !== null)
    for (var s = n.length, a = 0; a < s; a++) {
      var u = n[a], o = u.f, l = (o & K) === 0;
      if (l && L(u, t), (o & W) !== 0) {
        var f = (
          /** @type {Derived} */
          u
        );
        Me?.delete(f), (o & yt) === 0 && (o & me && (A === null || (A.f & hr) === 0) && (u.f |= yt), qn(f, je, r));
      } else if (l) {
        var h = (
          /** @type {Effect} */
          u
        );
        (o & Ie) !== 0 && Ve !== null && Ve.add(h), r !== null ? r.push(h) : zr(h);
      }
    }
}
function Ht(e) {
  if (typeof e != "object" || e === null || Er in e)
    return e;
  const t = ra(e);
  if (t !== ea && t !== ta)
    return e;
  var r = /* @__PURE__ */ new Map(), n = Sn(e), s = /* @__PURE__ */ ye(0), a = gt, u = (o) => {
    if (gt === a)
      return o();
    var l = S, f = gt;
    Ee(null), xn(a);
    var h = o();
    return Ee(l), xn(f), h;
  };
  return n && r.set("length", /* @__PURE__ */ ye(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(o, l, f) {
        (!("value" in f) || f.configurable === !1 || f.enumerable === !1 || f.writable === !1) && va();
        var h = r.get(l);
        return h === void 0 ? u(() => {
          var g = /* @__PURE__ */ ye(f.value);
          return r.set(l, g), g;
        }) : ne(h, f.value, !0), !0;
      },
      deleteProperty(o, l) {
        var f = r.get(l);
        if (f === void 0) {
          if (l in o) {
            const h = u(() => /* @__PURE__ */ ye(Y));
            r.set(l, h), Yt(s);
          }
        } else
          ne(f, Y), Yt(s);
        return !0;
      },
      get(o, l, f) {
        if (l === Er)
          return e;
        var h = r.get(l), g = l in o;
        if (h === void 0 && (!g || Ut(o, l)?.writable) && (h = u(() => {
          var v = Ht(g ? o[l] : Y), d = /* @__PURE__ */ ye(v);
          return d;
        }), r.set(l, h)), h !== void 0) {
          var p = c(h);
          return p === Y ? void 0 : p;
        }
        return Reflect.get(o, l, f);
      },
      getOwnPropertyDescriptor(o, l) {
        var f = Reflect.getOwnPropertyDescriptor(o, l);
        if (f && "value" in f) {
          var h = r.get(l);
          h && (f.value = c(h));
        } else if (f === void 0) {
          var g = r.get(l), p = g?.v;
          if (g !== void 0 && p !== Y)
            return {
              enumerable: !0,
              configurable: !0,
              value: p,
              writable: !0
            };
        }
        return f;
      },
      has(o, l) {
        if (l === Er)
          return !0;
        var f = r.get(l), h = f !== void 0 && f.v !== Y || Reflect.has(o, l);
        if (f !== void 0 || A !== null && (!h || Ut(o, l)?.writable)) {
          f === void 0 && (f = u(() => {
            var p = h ? Ht(o[l]) : Y, v = /* @__PURE__ */ ye(p);
            return v;
          }), r.set(l, f));
          var g = c(f);
          if (g === Y)
            return !1;
        }
        return h;
      },
      set(o, l, f, h) {
        var g = r.get(l), p = l in o;
        if (n && l === "length")
          for (var v = f; v < /** @type {Source<number>} */
          g.v; v += 1) {
            var d = r.get(v + "");
            d !== void 0 ? ne(d, Y) : v in o && (d = u(() => /* @__PURE__ */ ye(Y)), r.set(v + "", d));
          }
        if (g === void 0)
          (!p || Ut(o, l)?.writable) && (g = u(() => /* @__PURE__ */ ye(void 0)), ne(g, Ht(f)), r.set(l, g));
        else {
          p = g.v !== Y;
          var m = u(() => Ht(f));
          ne(g, m);
        }
        var k = Reflect.getOwnPropertyDescriptor(o, l);
        if (k?.set && k.set.call(h, f), !p) {
          if (n && typeof l == "string") {
            var D = (
              /** @type {Source<number>} */
              r.get("length")
            ), N = Number(l);
            Number.isInteger(N) && N >= D.v && ne(D, N + 1);
          }
          Yt(s);
        }
        return !0;
      },
      ownKeys(o) {
        c(s);
        var l = Reflect.ownKeys(o).filter((g) => {
          var p = r.get(g);
          return p === void 0 || p.v !== Y;
        });
        for (var [f, h] of r)
          h.v !== Y && !(f in o) && l.push(f);
        return l;
      },
      setPrototypeOf() {
        ha();
      }
    }
  );
}
var gn, Un, Yn, Gn;
function Ya() {
  if (gn === void 0) {
    gn = window, Un = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, r = Text.prototype;
    Yn = Ut(t, "firstChild").get, Gn = Ut(t, "nextSibling").get, vn(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), vn(r) && (r.__t = void 0);
  }
}
function _t(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function $t(e) {
  return (
    /** @type {TemplateNode | null} */
    Yn.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function rr(e) {
  return (
    /** @type {TemplateNode | null} */
    Gn.call(e)
  );
}
function _(e, t) {
  return /* @__PURE__ */ $t(e);
}
function Ga(e, t = !1) {
  {
    var r = /* @__PURE__ */ $t(e);
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ rr(r) : r;
  }
}
function x(e, t = 1, r = !1) {
  let n = e;
  for (; t--; )
    n = /** @type {TemplateNode} */
    /* @__PURE__ */ rr(n);
  return n;
}
function Ka(e) {
  e.textContent = "";
}
function Kn() {
  return !1;
}
function Wa(e, t, r) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElementNS(wa, e, void 0)
  );
}
function Wn(e) {
  var t = S, r = A;
  Ee(null), Le(null);
  try {
    return e();
  } finally {
    Ee(t), Le(r);
  }
}
function Ja(e) {
  A === null && (S === null && da(), ua()), tt && fa();
}
function Xa(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function rt(e, t) {
  var r = A;
  r !== null && (r.f & Z) !== 0 && (e |= Z);
  var n = {
    ctx: ke,
    deps: null,
    nodes: null,
    f: e | K | me,
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
  C?.register_created_effect(n);
  var s = n;
  if ((e & Gt) !== 0)
    St !== null ? St.push(n) : xt.ensure().schedule(n);
  else if (t !== null) {
    try {
      It(n);
    } catch (u) {
      throw se(n), u;
    }
    s.deps === null && s.teardown === null && s.nodes === null && s.first === s.last && // either `null`, or a singular child
    (s.f & jt) === 0 && (s = s.first, (e & Ie) !== 0 && (e & Dt) !== 0 && s !== null && (s.f |= Dt));
  }
  if (s !== null && (s.parent = r, r !== null && Xa(s, r), S !== null && (S.f & W) !== 0 && (e & et) === 0)) {
    var a = (
      /** @type {Derived} */
      S
    );
    (a.effects ?? (a.effects = [])).push(s);
  }
  return n;
}
function qr() {
  return S !== null && !Re;
}
function Za(e) {
  const t = rt(mr, null);
  return L(t, q), t.teardown = e, t;
}
function Qa(e) {
  Ja();
  var t = (
    /** @type {Effect} */
    A.f
  ), r = !S && (t & Fe) !== 0 && (t & bt) === 0;
  if (r) {
    var n = (
      /** @type {ComponentContext} */
      ke
    );
    (n.e ?? (n.e = [])).push(e);
  } else
    return Jn(e);
}
function Jn(e) {
  return rt(Gt | ia, e);
}
function ei(e) {
  xt.ensure();
  const t = rt(et | jt, e);
  return (r = {}) => new Promise((n) => {
    r.outro ? pt(t, () => {
      se(t), n(void 0);
    }) : (se(t), n(void 0));
  });
}
function ti(e) {
  return rt(Kt | jt, e);
}
function ri(e, t = 0) {
  return rt(mr | t, e);
}
function H(e, t = [], r = [], n = []) {
  ja(n, t, r, (s) => {
    rt(mr, () => e(...s.map(c)));
  });
}
function Ur(e, t = 0) {
  var r = rt(Ie | t, e);
  return r;
}
function xe(e) {
  return rt(Fe | jt, e);
}
function Xn(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = tt, n = S;
    yn(!0), Ee(null);
    try {
      t.call(null);
    } finally {
      yn(r), Ee(n);
    }
  }
}
function Yr(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    const s = r.ac;
    s !== null && Wn(() => {
      s.abort(He);
    });
    var n = r.next;
    (r.f & et) !== 0 ? r.parent = null : se(r, t), r = n;
  }
}
function ni(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & Fe) === 0 && se(t), t = r;
  }
}
function se(e, t = !0) {
  var r = !1;
  (t || (e.f & aa) !== 0) && e.nodes !== null && e.nodes.end !== null && (si(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), r = !0), L(e, hn), Yr(e, t && !r), Wt(e, 0);
  var n = e.nodes && e.nodes.t;
  if (n !== null)
    for (const a of n)
      a.stop();
  Xn(e), e.f ^= hn, e.f |= be;
  var s = e.parent;
  s !== null && s.first !== null && Zn(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function si(e, t) {
  for (; e !== null; ) {
    var r = e === t ? null : /* @__PURE__ */ rr(e);
    e.remove(), e = r;
  }
}
function Zn(e) {
  var t = e.parent, r = e.prev, n = e.next;
  r !== null && (r.next = n), n !== null && (n.prev = r), t !== null && (t.first === e && (t.first = n), t.last === e && (t.last = r));
}
function pt(e, t, r = !0) {
  var n = [];
  Qn(e, n, !0);
  var s = () => {
    r && se(e), t && t();
  }, a = n.length;
  if (a > 0) {
    var u = () => --a || s();
    for (var o of n)
      o.out(u);
  } else
    s();
}
function Qn(e, t, r) {
  if ((e.f & Z) === 0) {
    e.f ^= Z;
    var n = e.nodes && e.nodes.t;
    if (n !== null)
      for (const o of n)
        (o.is_global || r) && t.push(o);
    for (var s = e.first; s !== null; ) {
      var a = s.next;
      if ((s.f & et) === 0) {
        var u = (s.f & Dt) !== 0 || // If this is a branch effect without a block effect parent,
        // it means the parent block effect was pruned. In that case,
        // transparency information was transferred to the branch effect.
        (s.f & Fe) !== 0 && (e.f & Ie) !== 0;
        Qn(s, t, u ? r : !1);
      }
      s = a;
    }
  }
}
function Gr(e) {
  es(e, !0);
}
function es(e, t) {
  if ((e.f & Z) !== 0) {
    e.f ^= Z, (e.f & q) === 0 && (L(e, K), xt.ensure().schedule(e));
    for (var r = e.first; r !== null; ) {
      var n = r.next, s = (r.f & Dt) !== 0 || (r.f & Fe) !== 0;
      es(r, s ? t : !1), r = n;
    }
    var a = e.nodes && e.nodes.t;
    if (a !== null)
      for (const u of a)
        (u.is_global || t) && u.in();
  }
}
function Kr(e, t) {
  if (e.nodes)
    for (var r = e.nodes.start, n = e.nodes.end; r !== null; ) {
      var s = r === n ? null : /* @__PURE__ */ rr(r);
      t.append(r), r = s;
    }
}
let vr = !1, tt = !1;
function yn(e) {
  tt = e;
}
let S = null, Re = !1;
function Ee(e) {
  S = e;
}
let A = null;
function Le(e) {
  A = e;
}
let we = null;
function ts(e) {
  S !== null && (we === null ? we = [e] : we.push(e));
}
let re = null, ie = 0, he = null;
function ai(e) {
  he = e;
}
let rs = 1, lt = 0, gt = lt;
function xn(e) {
  gt = e;
}
function ns() {
  return ++rs;
}
function nr(e) {
  var t = e.f;
  if ((t & K) !== 0)
    return !0;
  if (t & W && (e.f &= ~yt), (t & je) !== 0) {
    for (var r = (
      /** @type {Value[]} */
      e.deps
    ), n = r.length, s = 0; s < n; s++) {
      var a = r[s];
      if (nr(
        /** @type {Derived} */
        a
      ) && zn(
        /** @type {Derived} */
        a
      ), a.wv > e.wv)
        return !0;
    }
    (t & me) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    Me === null && L(e, q);
  }
  return !1;
}
function ss(e, t, r = !0) {
  var n = e.reactions;
  if (n !== null && !(we !== null && Ft.call(we, e)))
    for (var s = 0; s < n.length; s++) {
      var a = n[s];
      (a.f & W) !== 0 ? ss(
        /** @type {Derived} */
        a,
        t,
        !1
      ) : t === a && (r ? L(a, K) : (a.f & q) !== 0 && L(a, je), zr(
        /** @type {Effect} */
        a
      ));
    }
}
function as(e) {
  var m;
  var t = re, r = ie, n = he, s = S, a = we, u = ke, o = Re, l = gt, f = e.f;
  re = /** @type {null | Value[]} */
  null, ie = 0, he = null, S = (f & (Fe | et)) === 0 ? e : null, we = null, Ot(e.ctx), Re = !1, gt = ++lt, e.ac !== null && (Wn(() => {
    e.ac.abort(He);
  }), e.ac = null);
  try {
    e.f |= hr;
    var h = (
      /** @type {Function} */
      e.fn
    ), g = h();
    e.f |= bt;
    var p = e.deps, v = C?.is_fork;
    if (re !== null) {
      var d;
      if (v || Wt(e, ie), p !== null && ie > 0)
        for (p.length = ie + re.length, d = 0; d < re.length; d++)
          p[ie + d] = re[d];
      else
        e.deps = p = re;
      if (qr() && (e.f & me) !== 0)
        for (d = ie; d < p.length; d++)
          ((m = p[d]).reactions ?? (m.reactions = [])).push(e);
    } else !v && p !== null && ie < p.length && (Wt(e, ie), p.length = ie);
    if (Fn() && he !== null && !Re && p !== null && (e.f & (W | je | K)) === 0)
      for (d = 0; d < /** @type {Source[]} */
      he.length; d++)
        ss(
          he[d],
          /** @type {Effect} */
          e
        );
    if (s !== null && s !== e) {
      if (lt++, s.deps !== null)
        for (let k = 0; k < r; k += 1)
          s.deps[k].rv = lt;
      if (t !== null)
        for (const k of t)
          k.rv = lt;
      he !== null && (n === null ? n = he : n.push(.../** @type {Source[]} */
      he));
    }
    return (e.f & Qe) !== 0 && (e.f ^= Qe), g;
  } catch (k) {
    return Dn(k);
  } finally {
    e.f ^= hr, re = t, ie = r, he = n, S = s, we = a, Ot(u), Re = o, gt = l;
  }
}
function ii(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var n = Zs.call(r, e);
    if (n !== -1) {
      var s = r.length - 1;
      s === 0 ? r = t.reactions = null : (r[n] = r[s], r.pop());
    }
  }
  if (r === null && (t.f & W) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (re === null || !Ft.call(re, t))) {
    var a = (
      /** @type {Derived} */
      t
    );
    (a.f & me) !== 0 && (a.f ^= me, a.f &= ~yt), a.v !== Y && Lr(a), Ha(a), Wt(a, 0);
  }
}
function Wt(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var n = t; n < r.length; n++)
      ii(e, r[n]);
}
function It(e) {
  var t = e.f;
  if ((t & be) === 0) {
    L(e, q);
    var r = A, n = vr;
    A = e, vr = !0;
    try {
      (t & (Ie | An)) !== 0 ? ni(e) : Yr(e), Xn(e);
      var s = as(e);
      e.teardown = typeof s == "function" ? s : null, e.wv = rs;
      var a;
    } finally {
      vr = n, A = r;
    }
  }
}
function c(e) {
  var t = e.f, r = (t & W) !== 0;
  if (S !== null && !Re) {
    var n = A !== null && (A.f & be) !== 0;
    if (!n && (we === null || !Ft.call(we, e))) {
      var s = S.deps;
      if ((S.f & hr) !== 0)
        e.rv < lt && (e.rv = lt, re === null && s !== null && s[ie] === e ? ie++ : re === null ? re = [e] : re.push(e));
      else {
        (S.deps ?? (S.deps = [])).push(e);
        var a = e.reactions;
        a === null ? e.reactions = [S] : Ft.call(a, S) || a.push(S);
      }
    }
  }
  if (tt && ht.has(e))
    return ht.get(e);
  if (r) {
    var u = (
      /** @type {Derived} */
      e
    );
    if (tt) {
      var o = u.v;
      return ((u.f & q) === 0 && u.reactions !== null || ls(u)) && (o = Hr(u)), ht.set(u, o), o;
    }
    var l = (u.f & me) === 0 && !Re && S !== null && (vr || (S.f & me) !== 0), f = (u.f & bt) === 0;
    nr(u) && (l && (u.f |= me), zn(u)), l && !f && (Vn(u), is(u));
  }
  if (Me?.has(e))
    return Me.get(e);
  if ((e.f & Qe) !== 0)
    throw e.v;
  return e.v;
}
function is(e) {
  if (e.f |= me, e.deps !== null)
    for (const t of e.deps)
      (t.reactions ?? (t.reactions = [])).push(e), (t.f & W) !== 0 && (t.f & me) === 0 && (Vn(
        /** @type {Derived} */
        t
      ), is(
        /** @type {Derived} */
        t
      ));
}
function ls(e) {
  if (e.v === Y) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (ht.has(t) || (t.f & W) !== 0 && ls(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function li(e) {
  var t = Re;
  try {
    return Re = !0, e();
  } finally {
    Re = t;
  }
}
const oi = ["touchstart", "touchmove"];
function fi(e) {
  return oi.includes(e);
}
const ot = Symbol("events"), os = /* @__PURE__ */ new Set(), Or = /* @__PURE__ */ new Set();
function mn(e, t, r) {
  (t[ot] ?? (t[ot] = {}))[e] = r;
}
function ui(e) {
  for (var t = 0; t < e.length; t++)
    os.add(e[t]);
  for (var r of Or)
    r(e);
}
let bn = null;
function wn(e) {
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), n = e.type, s = e.composedPath?.() || [], a = (
    /** @type {null | Element} */
    s[0] || e.target
  );
  bn = e;
  var u = 0, o = bn === e && e[ot];
  if (o) {
    var l = s.indexOf(o);
    if (l !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e[ot] = t;
      return;
    }
    var f = s.indexOf(t);
    if (f === -1)
      return;
    l <= f && (u = l);
  }
  if (a = /** @type {Element} */
  s[u] || e.target, a !== t) {
    Qs(e, "currentTarget", {
      configurable: !0,
      get() {
        return a || r;
      }
    });
    var h = S, g = A;
    Ee(null), Le(null);
    try {
      for (var p, v = []; a !== null; ) {
        var d = a.assignedSlot || a.parentNode || /** @type {any} */
        a.host || null;
        try {
          var m = a[ot]?.[n];
          m != null && (!/** @type {any} */
          a.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === a) && m.call(a, e);
        } catch (k) {
          p ? v.push(k) : p = k;
        }
        if (e.cancelBubble || d === t || d === null)
          break;
        a = d;
      }
      if (p) {
        for (let k of v)
          queueMicrotask(() => {
            throw k;
          });
        throw p;
      }
    } finally {
      e[ot] = t, delete e.currentTarget, Ee(h), Le(g);
    }
  }
}
const di = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (e) => e
  })
);
function ci(e) {
  return (
    /** @type {string} */
    di?.createHTML(e) ?? e
  );
}
function fs(e) {
  var t = Wa("template");
  return t.innerHTML = ci(e.replaceAll("<!>", "<!---->")), t.content;
}
function Pr(e, t) {
  var r = (
    /** @type {Effect} */
    A
  );
  r.nodes === null && (r.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function P(e, t) {
  var r = (t & ma) !== 0, n = (t & ba) !== 0, s, a = !e.startsWith("<!>");
  return () => {
    s === void 0 && (s = fs(a ? e : "<!>" + e), r || (s = /** @type {TemplateNode} */
    /* @__PURE__ */ $t(s)));
    var u = (
      /** @type {TemplateNode} */
      n || Un ? document.importNode(s, !0) : s.cloneNode(!0)
    );
    if (r) {
      var o = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ $t(u)
      ), l = (
        /** @type {TemplateNode} */
        u.lastChild
      );
      Pr(o, l);
    } else
      Pr(u, u);
    return u;
  };
}
// @__NO_SIDE_EFFECTS__
function vi(e, t, r = "svg") {
  var n = !e.startsWith("<!>"), s = `<${r}>${n ? e : "<!>" + e}</${r}>`, a;
  return () => {
    if (!a) {
      var u = (
        /** @type {DocumentFragment} */
        fs(s)
      ), o = (
        /** @type {Element} */
        /* @__PURE__ */ $t(u)
      );
      a = /** @type {Element} */
      /* @__PURE__ */ $t(o);
    }
    var l = (
      /** @type {TemplateNode} */
      a.cloneNode(!0)
    );
    return Pr(l, l), l;
  };
}
// @__NO_SIDE_EFFECTS__
function us(e, t) {
  return /* @__PURE__ */ vi(e, t, "svg");
}
function F(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function T(e, t) {
  var r = t == null ? "" : typeof t == "object" ? `${t}` : t;
  r !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = r, e.nodeValue = `${r}`);
}
function hi(e, t) {
  return _i(e, t);
}
const ir = /* @__PURE__ */ new Map();
function _i(e, { target: t, anchor: r, props: n = {}, events: s, context: a, intro: u = !0, transformError: o }) {
  Ya();
  var l = void 0, f = ei(() => {
    var h = r ?? t.appendChild(_t());
    Da(
      /** @type {TemplateNode} */
      h,
      {
        pending: () => {
        }
      },
      (v) => {
        Mn({});
        var d = (
          /** @type {ComponentContext} */
          ke
        );
        a && (d.c = a), s && (n.$$events = s), l = e(v, n) || {}, Rn();
      },
      o
    );
    var g = /* @__PURE__ */ new Set(), p = (v) => {
      for (var d = 0; d < v.length; d++) {
        var m = v[d];
        if (!g.has(m)) {
          g.add(m);
          var k = fi(m);
          for (const Q of [t, document]) {
            var D = ir.get(Q);
            D === void 0 && (D = /* @__PURE__ */ new Map(), ir.set(Q, D));
            var N = D.get(m);
            N === void 0 ? (Q.addEventListener(m, wn, { passive: k }), D.set(m, 1)) : D.set(m, N + 1);
          }
        }
      }
    };
    return p(xr(os)), Or.add(p), () => {
      for (var v of g)
        for (const k of [t, document]) {
          var d = (
            /** @type {Map<string, number>} */
            ir.get(k)
          ), m = (
            /** @type {number} */
            d.get(v)
          );
          --m == 0 ? (k.removeEventListener(v, wn), d.delete(v), d.size === 0 && ir.delete(k)) : d.set(v, m);
        }
      Or.delete(p), h !== r && h.parentNode?.removeChild(h);
    };
  });
  return $r.set(l, f), l;
}
let $r = /* @__PURE__ */ new WeakMap();
function pi(e, t) {
  const r = $r.get(e);
  return r ? ($r.delete(e), r(t)) : Promise.resolve();
}
var Ne, $e, fe, vt, er, tr, yr;
class gi {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, r = !0) {
    /** @type {TemplateNode} */
    Ce(this, "anchor");
    /** @type {Map<Batch, Key>} */
    b(this, Ne, /* @__PURE__ */ new Map());
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
    b(this, $e, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    b(this, fe, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    b(this, vt, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    b(this, er, !0);
    /**
     * @param {Batch} batch
     */
    b(this, tr, (t) => {
      if (i(this, Ne).has(t)) {
        var r = (
          /** @type {Key} */
          i(this, Ne).get(t)
        ), n = i(this, $e).get(r);
        if (n)
          Gr(n), i(this, vt).delete(r);
        else {
          var s = i(this, fe).get(r);
          s && (i(this, $e).set(r, s.effect), i(this, fe).delete(r), s.fragment.lastChild.remove(), this.anchor.before(s.fragment), n = s.effect);
        }
        for (const [a, u] of i(this, Ne)) {
          if (i(this, Ne).delete(a), a === t)
            break;
          const o = i(this, fe).get(u);
          o && (se(o.effect), i(this, fe).delete(u));
        }
        for (const [a, u] of i(this, $e)) {
          if (a === r || i(this, vt).has(a)) continue;
          const o = () => {
            if (Array.from(i(this, Ne).values()).includes(a)) {
              var f = document.createDocumentFragment();
              Kr(u, f), f.append(_t()), i(this, fe).set(a, { effect: u, fragment: f });
            } else
              se(u);
            i(this, vt).delete(a), i(this, $e).delete(a);
          };
          i(this, er) || !n ? (i(this, vt).add(a), pt(u, o, !1)) : o();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    b(this, yr, (t) => {
      i(this, Ne).delete(t);
      const r = Array.from(i(this, Ne).values());
      for (const [n, s] of i(this, fe))
        r.includes(n) || (se(s.effect), i(this, fe).delete(n));
    });
    this.anchor = t, E(this, er, r);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, r) {
    var n = (
      /** @type {Batch} */
      C
    ), s = Kn();
    if (r && !i(this, $e).has(t) && !i(this, fe).has(t))
      if (s) {
        var a = document.createDocumentFragment(), u = _t();
        a.append(u), i(this, fe).set(t, {
          effect: xe(() => r(u)),
          fragment: a
        });
      } else
        i(this, $e).set(
          t,
          xe(() => r(this.anchor))
        );
    if (i(this, Ne).set(n, t), s) {
      for (const [o, l] of i(this, $e))
        o === t ? n.unskip_effect(l) : n.skip_effect(l);
      for (const [o, l] of i(this, fe))
        o === t ? n.unskip_effect(l.effect) : n.skip_effect(l.effect);
      n.oncommit(i(this, tr)), n.ondiscard(i(this, yr));
    } else
      i(this, tr).call(this, n);
  }
}
Ne = new WeakMap(), $e = new WeakMap(), fe = new WeakMap(), vt = new WeakMap(), er = new WeakMap(), tr = new WeakMap(), yr = new WeakMap();
function J(e, t, r = !1) {
  var n = new gi(e), s = r ? Dt : 0;
  function a(u, o) {
    n.ensure(u, o);
  }
  Ur(() => {
    var u = !1;
    t((o, l = 0) => {
      u = !0, a(l, o);
    }), u || a(-1, null);
  }, s);
}
function wt(e, t) {
  return t;
}
function yi(e, t, r) {
  for (var n = [], s = t.length, a, u = t.length, o = 0; o < s; o++) {
    let g = t[o];
    pt(
      g,
      () => {
        if (a) {
          if (a.pending.delete(g), a.done.add(g), a.pending.size === 0) {
            var p = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            Ir(e, xr(a.done)), p.delete(a), p.size === 0 && (e.outrogroups = null);
          }
        } else
          u -= 1;
      },
      !1
    );
  }
  if (u === 0) {
    var l = n.length === 0 && r !== null;
    if (l) {
      var f = (
        /** @type {Element} */
        r
      ), h = (
        /** @type {Element} */
        f.parentNode
      );
      Ka(h), h.append(f), e.items.clear();
    }
    Ir(e, t, !l);
  } else
    a = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ?? (e.outrogroups = /* @__PURE__ */ new Set())).add(a);
}
function Ir(e, t, r = !0) {
  var n;
  if (e.pending.size > 0) {
    n = /* @__PURE__ */ new Set();
    for (const u of e.pending.values())
      for (const o of u)
        n.add(
          /** @type {EachItem} */
          e.items.get(o).e
        );
  }
  for (var s = 0; s < t.length; s++) {
    var a = t[s];
    if (n?.has(a)) {
      a.f |= Ke;
      const u = document.createDocumentFragment();
      Kr(a, u);
    } else
      se(t[s], r);
  }
}
var kn;
function kt(e, t, r, n, s, a = null) {
  var u = e, o = /* @__PURE__ */ new Map();
  {
    var l = (
      /** @type {Element} */
      e
    );
    u = l.appendChild(_t());
  }
  var f = null, h = /* @__PURE__ */ za(() => {
    var N = r();
    return Sn(N) ? N : N == null ? [] : xr(N);
  }), g, p = /* @__PURE__ */ new Map(), v = !0;
  function d(N) {
    (D.effect.f & be) === 0 && (D.pending.delete(N), D.fallback = f, xi(D, g, u, t, n), f !== null && (g.length === 0 ? (f.f & Ke) === 0 ? Gr(f) : (f.f ^= Ke, qt(f, null, u)) : pt(f, () => {
      f = null;
    })));
  }
  function m(N) {
    D.pending.delete(N);
  }
  var k = Ur(() => {
    g = /** @type {V[]} */
    c(h);
    for (var N = g.length, Q = /* @__PURE__ */ new Set(), ue = (
      /** @type {Batch} */
      C
    ), Be = Kn(), De = 0; De < N; De += 1) {
      var nt = g[De], ae = n(nt, De), y = v ? null : o.get(ae);
      y ? (y.v && Pt(y.v, nt), y.i && Pt(y.i, De), Be && ue.unskip_effect(y.e)) : (y = mi(
        o,
        v ? u : kn ?? (kn = _t()),
        nt,
        ae,
        De,
        s,
        t,
        r
      ), v || (y.e.f |= Ke), o.set(ae, y)), Q.add(ae);
    }
    if (N === 0 && a && !f && (v ? f = xe(() => a(u)) : (f = xe(() => a(kn ?? (kn = _t()))), f.f |= Ke)), N > Q.size && oa(), !v)
      if (p.set(ue, Q), Be) {
        for (const [$, Se] of o)
          Q.has($) || ue.skip_effect(Se.e);
        ue.oncommit(d), ue.ondiscard(m);
      } else
        d(ue);
    c(h);
  }), D = { effect: k, items: o, pending: p, outrogroups: null, fallback: f };
  v = !1;
}
function Vt(e) {
  for (; e !== null && (e.f & Fe) === 0; )
    e = e.next;
  return e;
}
function xi(e, t, r, n, s) {
  var a = t.length, u = e.items, o = Vt(e.effect.first), l, f = null, h = [], g = [], p, v, d, m;
  for (m = 0; m < a; m += 1) {
    if (p = t[m], v = s(p, m), d = /** @type {EachItem} */
    u.get(v).e, e.outrogroups !== null)
      for (const ae of e.outrogroups)
        ae.pending.delete(d), ae.done.delete(d);
    if ((d.f & Z) !== 0 && Gr(d), (d.f & Ke) !== 0)
      if (d.f ^= Ke, d === o)
        qt(d, null, r);
      else {
        var k = f ? f.next : o;
        d === e.effect.last && (e.effect.last = d.prev), d.prev && (d.prev.next = d.next), d.next && (d.next.prev = d.prev), We(e, f, d), We(e, d, k), qt(d, k, r), f = d, h = [], g = [], o = Vt(f.next);
        continue;
      }
    if (d !== o) {
      if (l !== void 0 && l.has(d)) {
        if (h.length < g.length) {
          var D = g[0], N;
          f = D.prev;
          var Q = h[0], ue = h[h.length - 1];
          for (N = 0; N < h.length; N += 1)
            qt(h[N], D, r);
          for (N = 0; N < g.length; N += 1)
            l.delete(g[N]);
          We(e, Q.prev, ue.next), We(e, f, Q), We(e, ue, D), o = D, f = ue, m -= 1, h = [], g = [];
        } else
          l.delete(d), qt(d, o, r), We(e, d.prev, d.next), We(e, d, f === null ? e.effect.first : f.next), We(e, f, d), f = d;
        continue;
      }
      for (h = [], g = []; o !== null && o !== d; )
        (l ?? (l = /* @__PURE__ */ new Set())).add(o), g.push(o), o = Vt(o.next);
      if (o === null)
        continue;
    }
    (d.f & Ke) === 0 && h.push(d), f = d, o = Vt(d.next);
  }
  if (e.outrogroups !== null) {
    for (const ae of e.outrogroups)
      ae.pending.size === 0 && (Ir(e, xr(ae.done)), e.outrogroups?.delete(ae));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (o !== null || l !== void 0) {
    var Be = [];
    if (l !== void 0)
      for (d of l)
        (d.f & Z) === 0 && Be.push(d);
    for (; o !== null; )
      (o.f & Z) === 0 && o !== e.fallback && Be.push(o), o = Vt(o.next);
    var De = Be.length;
    if (De > 0) {
      var nt = a === 0 ? r : null;
      yi(e, Be, nt);
    }
  }
}
function mi(e, t, r, n, s, a, u, o) {
  var l = (u & ga) !== 0 ? (u & xa) === 0 ? /* @__PURE__ */ qa(r, !1, !1) : mt(r) : null, f = (u & ya) !== 0 ? mt(s) : null;
  return {
    v: l,
    i: f,
    e: xe(() => (a(t, l ?? r, f ?? s, o), () => {
      e.delete(n);
    }))
  };
}
function qt(e, t, r) {
  if (e.nodes)
    for (var n = e.nodes.start, s = e.nodes.end, a = t && (t.f & Ke) === 0 ? (
      /** @type {EffectNodes} */
      t.nodes.start
    ) : r; n !== null; ) {
      var u = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ rr(n)
      );
      if (a.before(n), n === s)
        return;
      n = u;
    }
}
function We(e, t, r) {
  t === null ? e.effect.first = r : t.next = r, r === null ? e.effect.last = t : r.prev = t;
}
function bi(e, t, r) {
  var n = e == null ? "" : "" + e;
  return n === "" ? null : n;
}
function wi(e, t, r, n, s, a) {
  var u = e.__className;
  if (u !== r || u === void 0) {
    var o = bi(r);
    o == null ? e.removeAttribute("class") : e.className = o, e.__className = r;
  }
  return a;
}
const ki = "5";
var En;
typeof window < "u" && ((En = window.__svelte ?? (window.__svelte = {})).v ?? (En.v = /* @__PURE__ */ new Set())).add(ki);
var Ei = /* @__PURE__ */ us('<svg class="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path></svg>'), Si = /* @__PURE__ */ us('<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>'), Ti = /* @__PURE__ */ P('<p class="text-xs text-gray-400 dark:text-gray-500"> </p>'), Ai = /* @__PURE__ */ P('<div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-12 text-center"><svg class="w-8 h-8 animate-spin text-indigo-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path></svg> <p class="text-gray-500 dark:text-gray-400">Loading system information…</p></div>'), Ci = /* @__PURE__ */ P('<div class="bg-red-50 dark:bg-red-950/50 border border-red-200 dark:border-red-800 rounded-xl p-6 text-center"><p class="text-red-700 dark:text-red-300 font-medium"> </p> <button class="mt-4 px-3 py-1.5 text-sm font-medium rounded-lg bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 hover:bg-red-200 dark:hover:bg-red-800 transition-colors">Retry</button></div>'), Ni = /* @__PURE__ */ P('<span class="text-xs text-gray-400 dark:text-gray-500 ml-2"> </span>'), Mi = /* @__PURE__ */ P('<span class="text-xs text-gray-400 dark:text-gray-500 ml-2"> </span>'), Ri = /* @__PURE__ */ P('<div class="px-5 py-2 flex justify-end"><span class="text-xs text-gray-400 dark:text-gray-500"> </span></div>'), Fi = /* @__PURE__ */ P('<div class="px-5 py-3 flex items-center justify-between"><span class="text-sm font-medium text-gray-700 dark:text-gray-300 capitalize"> </span> <span class="text-sm text-gray-500 dark:text-gray-400 font-mono"> </span></div>'), Di = /* @__PURE__ */ P('<div class="border-t border-gray-200 dark:border-gray-700 px-5 py-2"><p class="text-xs text-gray-400 dark:text-gray-500"> </p></div>'), Oi = /* @__PURE__ */ P('<div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden"><div class="bg-gray-50 dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-700 px-5 py-3"><h2 class="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide">Canister IDs</h2></div> <div class="divide-y divide-gray-100 dark:divide-gray-700"></div> <!></div>'), Pi = /* @__PURE__ */ P('<div class="px-5 py-3 flex items-center justify-between"><div><span class="text-sm font-medium text-gray-700 dark:text-gray-300"> </span> <span class="text-xs text-gray-400 dark:text-gray-500 ml-2 font-mono"> </span></div> <span class="text-sm font-mono text-gray-600 dark:text-gray-400"> </span></div>'), $i = /* @__PURE__ */ P('<div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden"><div class="bg-gray-50 dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-700 px-5 py-3"><h2 class="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide">Token Balances</h2></div> <div class="divide-y divide-gray-100 dark:divide-gray-700"></div></div>'), Ii = /* @__PURE__ */ P('<p class="text-xs text-gray-400 dark:text-gray-500 mt-0.5"> </p>'), ji = /* @__PURE__ */ P('<p class="text-xs text-gray-400 dark:text-gray-500 mt-0.5 font-mono"> </p>'), Li = /* @__PURE__ */ P('<div class="px-5 py-3"><div class="flex items-center justify-between"><span class="text-sm font-medium text-gray-700 dark:text-gray-300"> </span> <span class="text-xs font-mono text-gray-500 dark:text-gray-400"> </span></div> <!> <!></div>'), Bi = /* @__PURE__ */ P('<div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden"><div class="bg-gray-50 dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-700 px-5 py-3 flex items-center justify-between"><h2 class="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide">Extensions</h2> <span class="text-xs text-gray-400 dark:text-gray-500"> </span></div> <div class="divide-y divide-gray-100 dark:divide-gray-700"></div></div>'), zi = /* @__PURE__ */ P('<div class="bg-white dark:bg-gray-800 px-4 py-2.5 flex items-center justify-between"><span class="text-xs text-gray-600 dark:text-gray-400"> </span> <span> </span></div>'), Vi = /* @__PURE__ */ P('<div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden"><div class="bg-gray-50 dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-700 px-5 py-3 flex items-center justify-between"><h2 class="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide">Database Entities</h2> <span class="text-xs text-gray-400 dark:text-gray-500"> </span></div> <div class="grid grid-cols-2 md:grid-cols-3 gap-px bg-gray-100 dark:bg-gray-700"></div></div>'), Hi = /* @__PURE__ */ P('<div class="bg-white dark:bg-gray-800 px-3 py-2 text-center"><p class="text-xs font-mono text-gray-500 dark:text-gray-400"> </p> <p class="text-sm font-semibold text-gray-700 dark:text-gray-300"> </p></div>'), qi = /* @__PURE__ */ P('<div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden"><div class="bg-gray-50 dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-700 px-5 py-3 flex items-center justify-between"><h2 class="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide">Filesystem</h2> <span class="text-xs text-gray-400 dark:text-gray-500"> </span></div> <div class="grid grid-cols-2 md:grid-cols-5 gap-px bg-gray-100 dark:bg-gray-700"></div></div>'), Ui = /* @__PURE__ */ P('<span class="text-xs font-mono text-gray-500 dark:text-gray-400"> </span>'), Yi = /* @__PURE__ */ P('<div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden"><div class="bg-gray-50 dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-700 px-5 py-3"><h2 class="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide">Dependencies</h2></div> <div class="px-5 py-3 flex flex-wrap gap-x-4 gap-y-1"></div></div>'), Gi = /* @__PURE__ */ P('<div class="grid grid-cols-2 md:grid-cols-4 gap-4"><div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4"><p class="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">Cycles</p> <p class="text-xl font-bold text-indigo-600 dark:text-indigo-400 mt-1"> </p> <p class="text-xs text-gray-400 mt-0.5"> </p></div> <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4"><p class="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">Stable Memory</p> <p class="text-xl font-bold text-emerald-600 dark:text-emerald-400 mt-1"> </p> <p class="text-xs text-gray-400 mt-0.5"> </p></div> <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4"><p class="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">Entities</p> <p class="text-xl font-bold text-amber-600 dark:text-amber-400 mt-1"> </p> <p class="text-xs text-gray-400 mt-0.5"> </p></div> <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4"><p class="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">Files</p> <p class="text-xl font-bold text-rose-600 dark:text-rose-400 mt-1"> </p> <p class="text-xs text-gray-400 mt-0.5"> </p></div></div> <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden"><div class="bg-gray-50 dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-700 px-5 py-3"><h2 class="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide">Versions</h2></div> <div class="divide-y divide-gray-100 dark:divide-gray-700"><div class="px-5 py-3 flex items-center justify-between"><div class="flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-yellow-400"></span> <span class="text-sm font-medium text-gray-700 dark:text-gray-300">Python</span></div> <span class="text-sm text-gray-500 dark:text-gray-400 font-mono"> </span></div> <div class="px-5 py-3 flex items-center justify-between"><div class="flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-green-400"></span> <span class="text-sm font-medium text-gray-700 dark:text-gray-300">Basilisk</span></div> <div class="text-right"><span class="text-sm text-gray-500 dark:text-gray-400 font-mono"> </span> <!></div></div> <div class="px-5 py-3 flex items-center justify-between"><div class="flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-blue-400"></span> <span class="text-sm font-medium text-gray-700 dark:text-gray-300">Realms</span></div> <div class="text-right"><span class="text-sm text-gray-500 dark:text-gray-400 font-mono"> </span> <!></div></div> <!></div></div> <!> <!> <!> <!> <!> <!>', 1), Ki = /* @__PURE__ */ P('<div class="p-6 max-w-4xl mx-auto space-y-6"><div class="flex items-center justify-between"><div class="flex items-center gap-3"><div class="w-10 h-10 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg flex items-center justify-center"><svg class="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg></div> <div><h1 class="text-2xl font-bold text-gray-900 dark:text-white">System Info</h1> <p class="text-sm text-gray-500 dark:text-gray-400">Canister diagnostics & health dashboard</p></div></div> <button class="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"><!> Refresh</button></div> <!> <!></div>');
function Wi(e, t) {
  Mn(t, !0);
  let r = /* @__PURE__ */ ye(null), n = /* @__PURE__ */ ye(!0), s = /* @__PURE__ */ ye(""), a = /* @__PURE__ */ ye("");
  async function u() {
    ne(n, !0), ne(s, "");
    try {
      const y = await t.ctx.backend.extension_sync_call(JSON.stringify({
        extension_name: "system_info",
        function_name: "get_system_info",
        kwargs: "{}"
      })), $ = JSON.parse(y);
      $.success ? (ne(r, $.data, !0), ne(a, (/* @__PURE__ */ new Date()).toLocaleString(), !0)) : ne(s, $.error || "Failed to fetch system info", !0);
    } catch (y) {
      ne(s, y?.message || String(y), !0);
    } finally {
      ne(n, !1);
    }
  }
  Qa(() => {
    u();
  });
  function o(y) {
    return y >= 1 ? `${y.toFixed(2)} TC` : `${(y * 1e3).toFixed(1)} GC`;
  }
  function l(y) {
    return !y && y !== 0 ? "—" : y >= 1024 * 1024 * 1024 ? `${(y / (1024 * 1024 * 1024)).toFixed(2)} GB` : y >= 1024 * 1024 ? `${(y / (1024 * 1024)).toFixed(1)} MB` : y >= 1024 ? `${(y / 1024).toFixed(1)} KB` : `${y} B`;
  }
  function f(y) {
    return y == null ? "0" : y.toLocaleString();
  }
  function h(y) {
    return y ? new Date(y / 1e6).toLocaleString() : "N/A";
  }
  function g(y) {
    return !y || typeof y != "object" ? [] : Object.entries(y);
  }
  function p(y) {
    return g(y).sort(($, Se) => Se[1] - $[1]);
  }
  var v = Ki(), d = _(v), m = x(_(d), 2), k = _(m);
  {
    var D = (y) => {
      var $ = Ei();
      F(y, $);
    }, N = (y) => {
      var $ = Si();
      F(y, $);
    };
    J(k, (y) => {
      c(n) ? y(D) : y(N, -1);
    });
  }
  var Q = x(d, 2);
  {
    var ue = (y) => {
      var $ = Ti(), Se = _($);
      H(() => T(Se, `Last updated: ${c(a) ?? ""}`)), F(y, $);
    };
    J(Q, (y) => {
      c(a) && y(ue);
    });
  }
  var Be = x(Q, 2);
  {
    var De = (y) => {
      var $ = Ai();
      F(y, $);
    }, nt = (y) => {
      var $ = Ci(), Se = _($), sr = _(Se), ar = x(Se, 2);
      H(() => T(sr, `Error: ${c(s) ?? ""}`)), mn("click", ar, u), F(y, $);
    }, ae = (y) => {
      var $ = Gi(), Se = Ga($), sr = _(Se), ar = x(_(sr), 2), ds = _(ar), cs = x(ar, 2), vs = _(cs), Wr = x(sr, 2), Jr = x(_(Wr), 2), hs = _(Jr), _s = x(Jr, 2), ps = _(_s), Xr = x(Wr, 2), Zr = x(_(Xr), 2), gs = _(Zr), ys = x(Zr, 2), xs = _(ys), ms = x(Xr, 2), Qr = x(_(ms), 2), bs = _(Qr), ws = x(Qr, 2), ks = _(ws), en = x(Se, 2), Es = x(_(en), 2), tn = _(Es), Ss = x(_(tn), 2), Ts = _(Ss), rn = x(tn, 2), As = x(_(rn), 2), nn = _(As), Cs = _(nn), Ns = x(nn, 2);
      {
        var Ms = (w) => {
          var M = Ni(), O = _(M);
          H(() => T(O, `(Rust ${c(r).basilisk.rust_version ?? ""})`)), F(w, M);
        };
        J(Ns, (w) => {
          c(r).basilisk?.rust_version && w(Ms);
        });
      }
      var sn = x(rn, 2), Rs = x(_(sn), 2), an = _(Rs), Fs = _(an), Ds = x(an, 2);
      {
        var Os = (w) => {
          var M = Mi(), O = _(M);
          H((G) => T(O, `(${G ?? ""})`), [() => c(r).realms.commit.slice(0, 7)]), F(w, M);
        }, Ps = /* @__PURE__ */ it(() => c(r).realms?.commit && !c(r).realms.commit.includes("PLACEHOLDER"));
        J(Ds, (w) => {
          c(Ps) && w(Os);
        });
      }
      var $s = x(sn, 2);
      {
        var Is = (w) => {
          var M = Ri(), O = _(M), G = _(O);
          H(() => T(G, `Built: ${c(r).realms.commit_datetime ?? ""}`)), F(w, M);
        }, js = /* @__PURE__ */ it(() => c(r).realms?.commit_datetime && !c(r).realms.commit_datetime.includes("PLACEHOLDER"));
        J($s, (w) => {
          c(js) && w(Is);
        });
      }
      var ln = x(en, 2);
      {
        var Ls = (w) => {
          var M = Oi(), O = x(_(M), 2);
          kt(O, 21, () => g(c(r).canister.canisters), wt, (z, V) => {
            var I = /* @__PURE__ */ it(() => kr(c(V), 2));
            let ee = () => c(I)[0], de = () => c(I)[1];
            var ce = Fi(), ve = _(ce), Te = _(ve), ze = x(ve, 2), Ae = _(ze);
            H(() => {
              T(Te, ee()), T(Ae, de());
            }), F(z, ce);
          });
          var G = x(O, 2);
          {
            var U = (z) => {
              var V = Di(), I = _(V), ee = _(I);
              H((de) => T(ee, `Canister time: ${de ?? ""}`), [() => h(c(r).canister.time_ns)]), F(z, V);
            };
            J(G, (z) => {
              c(r).canister?.time_ns && z(U);
            });
          }
          F(w, M);
        }, Bs = /* @__PURE__ */ it(() => c(r).canister?.canisters && Object.keys(c(r).canister.canisters).length > 0);
        J(ln, (w) => {
          c(Bs) && w(Ls);
        });
      }
      var on = x(ln, 2);
      {
        var zs = (w) => {
          var M = $i(), O = x(_(M), 2);
          kt(O, 21, () => c(r).tokens.tokens, wt, (G, U) => {
            var z = Pi(), V = _(z), I = _(V), ee = _(I), de = x(I, 2), ce = _(de), ve = x(V, 2), Te = _(ve);
            H(
              (ze, Ae) => {
                T(ee, c(U).name), T(ce, `${ze ?? ""}…`), T(Te, Ae);
              },
              [
                () => c(U).ledger?.slice(0, 10),
                () => (c(U).balance_raw / Math.pow(10, c(U).decimals || 8)).toFixed(c(U).decimals > 4 ? 4 : c(U).decimals || 8)
              ]
            ), F(G, z);
          }), F(w, M);
        };
        J(on, (w) => {
          c(r).tokens?.tokens?.length > 0 && w(zs);
        });
      }
      var fn = x(on, 2);
      {
        var Vs = (w) => {
          var M = Bi(), O = _(M), G = x(_(O), 2), U = _(G), z = x(O, 2);
          kt(z, 21, () => c(r).extensions.extensions, wt, (V, I) => {
            var ee = Li(), de = _(ee), ce = _(de), ve = _(ce), Te = x(ce, 2), ze = _(Te), Ae = x(de, 2);
            {
              var Lt = (st) => {
                var zt = Ii(), br = _(zt);
                H(() => T(br, c(I).description)), F(st, zt);
              };
              J(Ae, (st) => {
                c(I).description && st(Lt);
              });
            }
            var Bt = x(Ae, 2);
            {
              var Gs = (st) => {
                var zt = ji(), br = _(zt);
                H((Ws) => T(br, `${Ws ?? ""} — ${c(I).commit_datetime ?? ""}`), [() => c(I).commit.slice(0, 7)]), F(st, zt);
              }, Ks = /* @__PURE__ */ it(() => c(I).commit && !c(I).commit.includes("PLACEHOLDER"));
              J(Bt, (st) => {
                c(Ks) && st(Gs);
              });
            }
            H(() => {
              T(ve, c(I).name), T(ze, `v${c(I).version ?? ""}`);
            }), F(V, ee);
          }), H(() => T(U, `${c(r).extensions.count ?? ""} installed`)), F(w, M);
        };
        J(fn, (w) => {
          c(r).extensions?.extensions?.length > 0 && w(Vs);
        });
      }
      var un = x(fn, 2);
      {
        var Hs = (w) => {
          var M = Vi(), O = _(M), G = x(_(O), 2), U = _(G), z = x(O, 2);
          kt(z, 21, () => p(c(r).db.counts), wt, (V, I) => {
            var ee = /* @__PURE__ */ it(() => kr(c(I), 2));
            let de = () => c(ee)[0], ce = () => c(ee)[1];
            var ve = zi(), Te = _(ve), ze = _(Te), Ae = x(Te, 2), Lt = _(Ae);
            H(
              (Bt) => {
                T(ze, de()), wi(Ae, 1, `text-xs font-mono font-semibold ${ce() > 0 ? "text-gray-700 dark:text-gray-300" : "text-gray-300 dark:text-gray-600"}`), T(Lt, Bt);
              },
              [() => f(ce())]
            ), F(V, ve);
          }), H((V) => T(U, `${V ?? ""} total`), [() => f(c(r).db.total_entities)]), F(w, M);
        };
        J(un, (w) => {
          c(r).db?.counts && w(Hs);
        });
      }
      var dn = x(un, 2);
      {
        var qs = (w) => {
          var M = qi(), O = _(M), G = x(_(O), 2), U = _(G), z = x(O, 2);
          kt(z, 21, () => p(c(r).files.top_extensions), wt, (V, I) => {
            var ee = /* @__PURE__ */ it(() => kr(c(I), 2));
            let de = () => c(ee)[0], ce = () => c(ee)[1];
            var ve = Hi(), Te = _(ve), ze = _(Te), Ae = x(Te, 2), Lt = _(Ae);
            H(
              (Bt) => {
                T(ze, de()), T(Lt, Bt);
              },
              [() => f(ce())]
            ), F(V, ve);
          }), H((V, I) => T(U, `${V ?? ""} files, ${I ?? ""}`), [
            () => f(c(r).files.total_files),
            () => l(c(r).files.total_size_bytes)
          ]), F(w, M);
        };
        J(dn, (w) => {
          c(r).files?.top_extensions && w(qs);
        });
      }
      var Us = x(dn, 2);
      {
        var Ys = (w) => {
          var M = Yi(), O = x(_(M), 2);
          kt(O, 21, () => c(r).dependencies, wt, (G, U) => {
            var z = Ui(), V = _(z);
            H(() => T(V, c(U))), F(G, z);
          }), F(w, M);
        };
        J(Us, (w) => {
          c(r).dependencies?.length > 0 && w(Ys);
        });
      }
      H(
        (w, M, O, G, U, z) => {
          T(ds, w), T(vs, M), T(hs, `${(c(r).canister?.stable_memory_mb || 0) ?? ""} MB`), T(ps, `${O ?? ""} pages`), T(gs, G), T(xs, `${(c(r).db?.entity_types || 0) ?? ""} types`), T(bs, U), T(ks, z), T(Ts, c(r).python?.version || "N/A"), T(Cs, c(r).basilisk?.version || "N/A"), T(Fs, c(r).realms?.version || "N/A");
        },
        [
          () => o(c(r).canister?.cycles_tc || 0),
          () => f(c(r).canister?.cycles || 0),
          () => f(c(r).canister?.stable_memory_pages || 0),
          () => f(c(r).db?.total_entities || 0),
          () => f(c(r).files?.total_files || 0),
          () => l(c(r).files?.total_size_bytes || 0)
        ]
      ), F(y, $);
    };
    J(Be, (y) => {
      c(n) && !c(r) ? y(De) : c(s) && !c(r) ? y(nt, 1) : c(r) && y(ae, 2);
    });
  }
  H(() => m.disabled = c(n)), mn("click", m, u), F(e, v), Rn();
}
ui(["click"]);
function Zi(e, t) {
  const r = hi(Wi, { target: e, props: { ctx: t } });
  return {
    unmount() {
      try {
        pi(r);
      } catch {
      }
    }
  };
}
export {
  Zi as default
};
