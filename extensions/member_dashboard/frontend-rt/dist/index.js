var Wi = Object.defineProperty;
var zn = (e) => {
  throw TypeError(e);
};
var Gi = (e, t, r) => t in e ? Wi(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var Ye = (e, t, r) => Gi(e, typeof t != "symbol" ? t + "" : t, r), Qr = (e, t, r) => t.has(e) || zn("Cannot " + r);
var s = (e, t, r) => (Qr(e, t, "read from private field"), r ? r.call(e) : t.get(e)), A = (e, t, r) => t.has(e) ? zn("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), I = (e, t, r, n) => (Qr(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r), q = (e, t, r) => (Qr(e, t, "access private method"), r);
var pn = Array.isArray, Yi = Array.prototype.indexOf, Zt = Array.prototype.includes, Ur = Array.from, Ki = Object.defineProperty, vr = Object.getOwnPropertyDescriptor, Xi = Object.getOwnPropertyDescriptors, Zi = Object.prototype, Qi = Array.prototype, sa = Object.getPrototypeOf, Un = Object.isExtensible;
const $i = () => {
};
function es(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function la() {
  var e, t, r = new Promise((n, a) => {
    e = n, t = a;
  });
  return { promise: r, resolve: e, reject: t };
}
function ts(e, t) {
  if (Array.isArray(e))
    return e;
  if (!(Symbol.iterator in e))
    return Array.from(e);
  const r = [];
  for (const n of e)
    if (r.push(n), r.length === t) break;
  return r;
}
const ce = 2, Qt = 4, Jr = 8, oa = 1 << 24, nt = 16, Qe = 32, mt = 64, an = 128, Be = 512, te = 1024, de = 2048, at = 4096, pe = 8192, He = 16384, zt = 32768, Jn = 1 << 25, $t = 65536, sn = 1 << 17, rs = 1 << 18, nr = 1 << 19, ns = 1 << 20, ct = 1 << 25, Bt = 65536, jr = 1 << 21, br = 1 << 22, xt = 1 << 23, hr = Symbol("$state"), lt = new class extends Error {
  constructor() {
    super(...arguments);
    Ye(this, "name", "StaleReactionError");
    Ye(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
function as() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function is(e, t, r) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function ss(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function ls() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function os(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function us() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function fs() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function ds() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function cs() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function vs() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
const hs = 1, _s = 2, gs = 16, ps = 1, bs = 2, ae = Symbol(), ua = "http://www.w3.org/1999/xhtml", ys = "http://www.w3.org/2000/svg", xs = "http://www.w3.org/1998/Math/MathML";
function ms() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function ws() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function ks() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function fa(e) {
  return e === this.v;
}
function Es(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function da(e) {
  return !Es(e, this.v);
}
let ze = null;
function er(e) {
  ze = e;
}
function ca(e, t = !1, r) {
  ze = {
    p: ze,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    r: (
      /** @type {Effect} */
      O
    ),
    l: null
  };
}
function va(e) {
  var t = (
    /** @type {ComponentContext} */
    ze
  ), r = t.e;
  if (r !== null) {
    t.e = null;
    for (var n of r)
      Ra(n);
  }
  return t.i = !0, ze = t.p, /** @type {T} */
  {};
}
function ha() {
  return !0;
}
let At = [];
function _a() {
  var e = At;
  At = [], es(e);
}
function Vt(e) {
  if (At.length === 0 && !_r) {
    var t = At;
    queueMicrotask(() => {
      t === At && _a();
    });
  }
  At.push(e);
}
function Ss() {
  for (; At.length > 0; )
    _a();
}
function ga(e) {
  var t = O;
  if (t === null)
    return D.f |= xt, e;
  if ((t.f & zt) === 0 && (t.f & Qt) === 0)
    throw e;
  bt(e, t);
}
function bt(e, t) {
  for (; t !== null; ) {
    if ((t.f & an) !== 0) {
      if ((t.f & zt) === 0)
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
const As = -7169;
function W(e, t) {
  e.f = e.f & As | t;
}
function bn(e) {
  (e.f & Be) !== 0 || e.deps === null ? W(e, te) : W(e, at);
}
function pa(e) {
  if (e !== null)
    for (const t of e)
      (t.f & ce) === 0 || (t.f & Bt) === 0 || (t.f ^= Bt, pa(
        /** @type {Derived} */
        t.deps
      ));
}
function ba(e, t, r) {
  (e.f & de) !== 0 ? t.add(e) : (e.f & at) !== 0 && r.add(e), pa(e.deps), W(e, te);
}
const St = /* @__PURE__ */ new Set();
let E = null, Xe = null, ln = null, _r = !1, $r = !1, Jt = null, Mr = null;
var Vn = 0;
let Cs = 1;
var Wt, Gt, Mt, ot, et, xr, Ne, mr, gt, ut, tt, Yt, Kt, Pt, X, Pr, ya, Ir, on, Dr, Ts;
const Hr = class Hr {
  constructor() {
    A(this, X);
    Ye(this, "id", Cs++);
    /**
     * The current values of any signals that are updated in this batch.
     * Tuple format: [value, is_derived] (note: is_derived is false for deriveds, too, if they were overridden via assignment)
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Value, [any, boolean]>}
     */
    Ye(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any signals (sources and deriveds) that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Value, any>}
     */
    Ye(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<(batch: Batch) => void>}
     */
    A(this, Wt, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    A(this, Gt, /* @__PURE__ */ new Set());
    /**
     * Callbacks that should run only when a fork is committed.
     * @type {Set<(batch: Batch) => void>}
     */
    A(this, Mt, /* @__PURE__ */ new Set());
    /**
     * Async effects that are currently in flight
     * @type {Map<Effect, number>}
     */
    A(this, ot, /* @__PURE__ */ new Map());
    /**
     * Async effects that are currently in flight, _not_ inside a pending boundary
     * @type {Map<Effect, number>}
     */
    A(this, et, /* @__PURE__ */ new Map());
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    A(this, xr, null);
    /**
     * The root effects that need to be flushed
     * @type {Effect[]}
     */
    A(this, Ne, []);
    /**
     * Effects created while this batch was active.
     * @type {Effect[]}
     */
    A(this, mr, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    A(this, gt, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    A(this, ut, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    A(this, tt, /* @__PURE__ */ new Map());
    /**
     * Inverse of #skipped_branches which we need to tell prior batches to unskip them when committing
     * @type {Set<Effect>}
     */
    A(this, Yt, /* @__PURE__ */ new Set());
    Ye(this, "is_fork", !1);
    A(this, Kt, !1);
    /** @type {Set<Batch>} */
    A(this, Pt, /* @__PURE__ */ new Set());
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(t) {
    s(this, tt).has(t) || s(this, tt).set(t, { d: [], m: [] }), s(this, Yt).delete(t);
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   * @param {(e: Effect) => void} callback
   */
  unskip_effect(t, r = (n) => this.schedule(n)) {
    var n = s(this, tt).get(t);
    if (n) {
      s(this, tt).delete(t);
      for (var a of n.d)
        W(a, de), r(a);
      for (a of n.m)
        W(a, at), r(a);
    }
    s(this, Yt).add(t);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Value} source
   * @param {any} value
   * @param {boolean} [is_derived]
   */
  capture(t, r, n = !1) {
    t.v !== ae && !this.previous.has(t) && this.previous.set(t, t.v), (t.f & xt) === 0 && (this.current.set(t, [r, n]), Xe?.set(t, r)), this.is_fork || (t.v = r);
  }
  activate() {
    E = this;
  }
  deactivate() {
    E = null, Xe = null;
  }
  flush() {
    try {
      $r = !0, E = this, q(this, X, Ir).call(this);
    } finally {
      Vn = 0, ln = null, Jt = null, Mr = null, $r = !1, E = null, Xe = null, Rt.clear();
    }
  }
  discard() {
    for (const t of s(this, Gt)) t(this);
    s(this, Gt).clear(), s(this, Mt).clear(), St.delete(this);
  }
  /**
   * @param {Effect} effect
   */
  register_created_effect(t) {
    s(this, mr).push(t);
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  increment(t, r) {
    let n = s(this, ot).get(r) ?? 0;
    if (s(this, ot).set(r, n + 1), t) {
      let a = s(this, et).get(r) ?? 0;
      s(this, et).set(r, a + 1);
    }
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   * @param {boolean} skip - whether to skip updates (because this is triggered by a stale reaction)
   */
  decrement(t, r, n) {
    let a = s(this, ot).get(r) ?? 0;
    if (a === 1 ? s(this, ot).delete(r) : s(this, ot).set(r, a - 1), t) {
      let i = s(this, et).get(r) ?? 0;
      i === 1 ? s(this, et).delete(r) : s(this, et).set(r, i - 1);
    }
    s(this, Kt) || n || (I(this, Kt, !0), Vt(() => {
      I(this, Kt, !1), this.flush();
    }));
  }
  /**
   * @param {Set<Effect>} dirty_effects
   * @param {Set<Effect>} maybe_dirty_effects
   */
  transfer_effects(t, r) {
    for (const n of t)
      s(this, gt).add(n);
    for (const n of r)
      s(this, ut).add(n);
    t.clear(), r.clear();
  }
  /** @param {(batch: Batch) => void} fn */
  oncommit(t) {
    s(this, Wt).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    s(this, Gt).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  on_fork_commit(t) {
    s(this, Mt).add(t);
  }
  run_fork_commit_callbacks() {
    for (const t of s(this, Mt)) t(this);
    s(this, Mt).clear();
  }
  settled() {
    return (s(this, xr) ?? I(this, xr, la())).promise;
  }
  static ensure() {
    if (E === null) {
      const t = E = new Hr();
      $r || (St.add(E), _r || Vt(() => {
        E === t && t.flush();
      }));
    }
    return E;
  }
  apply() {
    {
      Xe = null;
      return;
    }
  }
  /**
   *
   * @param {Effect} effect
   */
  schedule(t) {
    if (ln = t, t.b?.is_pending && (t.f & (Qt | Jr | oa)) !== 0 && (t.f & zt) === 0) {
      t.b.defer_effect(t);
      return;
    }
    for (var r = t; r.parent !== null; ) {
      r = r.parent;
      var n = r.f;
      if (Jt !== null && r === O && (D === null || (D.f & ce) === 0))
        return;
      if ((n & (mt | Qe)) !== 0) {
        if ((n & te) === 0)
          return;
        r.f ^= te;
      }
    }
    s(this, Ne).push(r);
  }
};
Wt = new WeakMap(), Gt = new WeakMap(), Mt = new WeakMap(), ot = new WeakMap(), et = new WeakMap(), xr = new WeakMap(), Ne = new WeakMap(), mr = new WeakMap(), gt = new WeakMap(), ut = new WeakMap(), tt = new WeakMap(), Yt = new WeakMap(), Kt = new WeakMap(), Pt = new WeakMap(), X = new WeakSet(), Pr = function() {
  return this.is_fork || s(this, et).size > 0;
}, ya = function() {
  for (const n of s(this, Pt))
    for (const a of s(n, et).keys()) {
      for (var t = !1, r = a; r.parent !== null; ) {
        if (s(this, tt).has(r)) {
          t = !0;
          break;
        }
        r = r.parent;
      }
      if (!t)
        return !0;
    }
  return !1;
}, Ir = function() {
  var l;
  if (Vn++ > 1e3 && (St.delete(this), Ms()), !q(this, X, Pr).call(this)) {
    for (const o of s(this, gt))
      s(this, ut).delete(o), W(o, de), this.schedule(o);
    for (const o of s(this, ut))
      W(o, at), this.schedule(o);
  }
  const t = s(this, Ne);
  I(this, Ne, []), this.apply();
  var r = Jt = [], n = [], a = Mr = [];
  for (const o of t)
    try {
      q(this, X, on).call(this, o, r, n);
    } catch (u) {
      throw wa(o), u;
    }
  if (E = null, a.length > 0) {
    var i = Hr.ensure();
    for (const o of a)
      i.schedule(o);
  }
  if (Jt = null, Mr = null, q(this, X, Pr).call(this) || q(this, X, ya).call(this)) {
    q(this, X, Dr).call(this, n), q(this, X, Dr).call(this, r);
    for (const [o, u] of s(this, tt))
      ma(o, u);
  } else {
    s(this, ot).size === 0 && St.delete(this), s(this, gt).clear(), s(this, ut).clear();
    for (const o of s(this, Wt)) o(this);
    s(this, Wt).clear(), Wn(n), Wn(r), s(this, xr)?.resolve();
  }
  var f = (
    /** @type {Batch | null} */
    /** @type {unknown} */
    E
  );
  if (s(this, Ne).length > 0) {
    const o = f ?? (f = this);
    s(o, Ne).push(...s(this, Ne).filter((u) => !s(o, Ne).includes(u)));
  }
  f !== null && (St.add(f), q(l = f, X, Ir).call(l));
}, /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
on = function(t, r, n) {
  t.f ^= te;
  for (var a = t.first; a !== null; ) {
    var i = a.f, f = (i & (Qe | mt)) !== 0, l = f && (i & te) !== 0, o = l || (i & pe) !== 0 || s(this, tt).has(a);
    if (!o && a.fn !== null) {
      f ? a.f ^= te : (i & Qt) !== 0 ? r.push(a) : Cr(a) && ((i & nt) !== 0 && s(this, ut).add(a), rr(a));
      var u = a.first;
      if (u !== null) {
        a = u;
        continue;
      }
    }
    for (; a !== null; ) {
      var _ = a.next;
      if (_ !== null) {
        a = _;
        break;
      }
      a = a.parent;
    }
  }
}, /**
 * @param {Effect[]} effects
 */
Dr = function(t) {
  for (var r = 0; r < t.length; r += 1)
    ba(t[r], s(this, gt), s(this, ut));
}, Ts = function() {
  var _, b, g;
  for (const h of St) {
    var t = h.id < this.id, r = [];
    for (const [c, [C, S]] of this.current) {
      if (h.current.has(c)) {
        var n = (
          /** @type {[any, boolean]} */
          h.current.get(c)[0]
        );
        if (t && C !== n)
          h.current.set(c, [C, S]);
        else
          continue;
      }
      r.push(c);
    }
    var a = [...h.current.keys()].filter((c) => !this.current.has(c));
    if (a.length === 0)
      t && h.discard();
    else if (r.length > 0) {
      if (t)
        for (const c of s(this, Yt))
          h.unskip_effect(c, (C) => {
            var S;
            (C.f & (nt | br)) !== 0 ? h.schedule(C) : q(S = h, X, Dr).call(S, [C]);
          });
      h.activate();
      var i = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Map();
      for (var l of r)
        xa(l, a, i, f);
      f = /* @__PURE__ */ new Map();
      var o = [...h.current.keys()].filter(
        (c) => this.current.has(c) ? (
          /** @type {[any, boolean]} */
          this.current.get(c)[0] !== c
        ) : !0
      );
      for (const c of s(this, mr))
        (c.f & (He | pe | sn)) === 0 && yn(c, o, f) && ((c.f & (br | nt)) !== 0 ? (W(c, de), h.schedule(c)) : s(h, gt).add(c));
      if (s(h, Ne).length > 0) {
        h.apply();
        for (var u of s(h, Ne))
          q(_ = h, X, on).call(_, u, [], []);
        I(h, Ne, []);
      }
      h.deactivate();
    }
  }
  for (const h of St)
    s(h, Pt).has(this) && (s(h, Pt).delete(this), s(h, Pt).size === 0 && !q(b = h, X, Pr).call(b) && (h.activate(), q(g = h, X, Ir).call(g)));
};
let Ht = Hr;
function Ns(e) {
  var t = _r;
  _r = !0;
  try {
    for (var r; ; ) {
      if (Ss(), E === null)
        return (
          /** @type {T} */
          r
        );
      E.flush();
    }
  } finally {
    _r = t;
  }
}
function Ms() {
  try {
    us();
  } catch (e) {
    bt(e, ln);
  }
}
let st = null;
function Wn(e) {
  var t = e.length;
  if (t !== 0) {
    for (var r = 0; r < t; ) {
      var n = e[r++];
      if ((n.f & (He | pe)) === 0 && Cr(n) && (st = /* @__PURE__ */ new Set(), rr(n), n.deps === null && n.first === null && n.nodes === null && n.teardown === null && n.ac === null && Ba(n), st?.size > 0)) {
        Rt.clear();
        for (const a of st) {
          if ((a.f & (He | pe)) !== 0) continue;
          const i = [a];
          let f = a.parent;
          for (; f !== null; )
            st.has(f) && (st.delete(f), i.push(f)), f = f.parent;
          for (let l = i.length - 1; l >= 0; l--) {
            const o = i[l];
            (o.f & (He | pe)) === 0 && rr(o);
          }
        }
        st.clear();
      }
    }
    st = null;
  }
}
function xa(e, t, r, n) {
  if (!r.has(e) && (r.add(e), e.reactions !== null))
    for (const a of e.reactions) {
      const i = a.f;
      (i & ce) !== 0 ? xa(
        /** @type {Derived} */
        a,
        t,
        r,
        n
      ) : (i & (br | nt)) !== 0 && (i & de) === 0 && yn(a, t, n) && (W(a, de), xn(
        /** @type {Effect} */
        a
      ));
    }
}
function yn(e, t, r) {
  const n = r.get(e);
  if (n !== void 0) return n;
  if (e.deps !== null)
    for (const a of e.deps) {
      if (Zt.call(t, a))
        return !0;
      if ((a.f & ce) !== 0 && yn(
        /** @type {Derived} */
        a,
        t,
        r
      ))
        return r.set(
          /** @type {Derived} */
          a,
          !0
        ), !0;
    }
  return r.set(e, !1), !1;
}
function xn(e) {
  E.schedule(e);
}
function ma(e, t) {
  if (!((e.f & Qe) !== 0 && (e.f & te) !== 0)) {
    (e.f & de) !== 0 ? t.d.push(e) : (e.f & at) !== 0 && t.m.push(e), W(e, te);
    for (var r = e.first; r !== null; )
      ma(r, t), r = r.next;
  }
}
function wa(e) {
  W(e, te);
  for (var t = e.first; t !== null; )
    wa(t), t = t.next;
}
function Ps(e) {
  let t = 0, r = qt(0), n;
  return () => {
    En() && (d(r), Fa(() => (t === 0 && (n = Ka(() => e(() => gr(r)))), t += 1, () => {
      Vt(() => {
        t -= 1, t === 0 && (n?.(), n = void 0, gr(r));
      });
    })));
  };
}
var Is = $t | nr;
function Ds(e, t, r, n) {
  new Os(e, t, r, n);
}
var Re, gn, Fe, It, me, je, ge, Me, ft, Dt, pt, Xt, wr, kr, dt, qr, J, Rs, Fs, js, un, Or, Rr, fn, dn;
class Os {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(t, r, n, a) {
    A(this, J);
    /** @type {Boundary | null} */
    Ye(this, "parent");
    Ye(this, "is_pending", !1);
    /**
     * API-level transformError transform function. Transforms errors before they reach the `failed` snippet.
     * Inherited from parent boundary, or defaults to identity.
     * @type {(error: unknown) => unknown}
     */
    Ye(this, "transform_error");
    /** @type {TemplateNode} */
    A(this, Re);
    /** @type {TemplateNode | null} */
    A(this, gn, null);
    /** @type {BoundaryProps} */
    A(this, Fe);
    /** @type {((anchor: Node) => void)} */
    A(this, It);
    /** @type {Effect} */
    A(this, me);
    /** @type {Effect | null} */
    A(this, je, null);
    /** @type {Effect | null} */
    A(this, ge, null);
    /** @type {Effect | null} */
    A(this, Me, null);
    /** @type {DocumentFragment | null} */
    A(this, ft, null);
    A(this, Dt, 0);
    A(this, pt, 0);
    A(this, Xt, !1);
    /** @type {Set<Effect>} */
    A(this, wr, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    A(this, kr, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    A(this, dt, null);
    A(this, qr, Ps(() => (I(this, dt, qt(s(this, Dt))), () => {
      I(this, dt, null);
    })));
    I(this, Re, t), I(this, Fe, r), I(this, It, (i) => {
      var f = (
        /** @type {Effect} */
        O
      );
      f.b = this, f.f |= an, n(i);
    }), this.parent = /** @type {Effect} */
    O.b, this.transform_error = a ?? this.parent?.transform_error ?? ((i) => i), I(this, me, Sn(() => {
      q(this, J, un).call(this);
    }, Is));
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    ba(t, s(this, wr), s(this, kr));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!s(this, Fe).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  update_pending_count(t, r) {
    q(this, J, fn).call(this, t, r), I(this, Dt, s(this, Dt) + t), !(!s(this, dt) || s(this, Xt)) && (I(this, Xt, !0), Vt(() => {
      I(this, Xt, !1), s(this, dt) && tr(s(this, dt), s(this, Dt));
    }));
  }
  get_effect_pending() {
    return s(this, qr).call(this), d(
      /** @type {Source<number>} */
      s(this, dt)
    );
  }
  /** @param {unknown} error */
  error(t) {
    if (!s(this, Fe).onerror && !s(this, Fe).failed)
      throw t;
    E?.is_fork ? (s(this, je) && E.skip_effect(s(this, je)), s(this, ge) && E.skip_effect(s(this, ge)), s(this, Me) && E.skip_effect(s(this, Me)), E.on_fork_commit(() => {
      q(this, J, dn).call(this, t);
    })) : q(this, J, dn).call(this, t);
  }
}
Re = new WeakMap(), gn = new WeakMap(), Fe = new WeakMap(), It = new WeakMap(), me = new WeakMap(), je = new WeakMap(), ge = new WeakMap(), Me = new WeakMap(), ft = new WeakMap(), Dt = new WeakMap(), pt = new WeakMap(), Xt = new WeakMap(), wr = new WeakMap(), kr = new WeakMap(), dt = new WeakMap(), qr = new WeakMap(), J = new WeakSet(), Rs = function() {
  try {
    I(this, je, Le(() => s(this, It).call(this, s(this, Re))));
  } catch (t) {
    this.error(t);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
Fs = function(t) {
  const r = s(this, Fe).failed;
  r && I(this, Me, Le(() => {
    r(
      s(this, Re),
      () => t,
      () => () => {
      }
    );
  }));
}, js = function() {
  const t = s(this, Fe).pending;
  t && (this.is_pending = !0, I(this, ge, Le(() => t(s(this, Re)))), Vt(() => {
    var r = I(this, ft, document.createDocumentFragment()), n = Ft();
    r.append(n), I(this, je, q(this, J, Rr).call(this, () => Le(() => s(this, It).call(this, n)))), s(this, pt) === 0 && (s(this, Re).before(r), I(this, ft, null), jt(
      /** @type {Effect} */
      s(this, ge),
      () => {
        I(this, ge, null);
      }
    ), q(this, J, Or).call(
      this,
      /** @type {Batch} */
      E
    ));
  }));
}, un = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), I(this, pt, 0), I(this, Dt, 0), I(this, je, Le(() => {
      s(this, It).call(this, s(this, Re));
    })), s(this, pt) > 0) {
      var t = I(this, ft, document.createDocumentFragment());
      Tn(s(this, je), t);
      const r = (
        /** @type {(anchor: Node) => void} */
        s(this, Fe).pending
      );
      I(this, ge, Le(() => r(s(this, Re))));
    } else
      q(this, J, Or).call(
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
Or = function(t) {
  this.is_pending = !1, t.transfer_effects(s(this, wr), s(this, kr));
}, /**
 * @template T
 * @param {() => T} fn
 */
Rr = function(t) {
  var r = O, n = D, a = ze;
  it(s(this, me)), Ue(s(this, me)), er(s(this, me).ctx);
  try {
    return Ht.ensure(), t();
  } catch (i) {
    return ga(i), null;
  } finally {
    it(r), Ue(n), er(a);
  }
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 * @param {Batch} batch
 */
fn = function(t, r) {
  var n;
  if (!this.has_pending_snippet()) {
    this.parent && q(n = this.parent, J, fn).call(n, t, r);
    return;
  }
  I(this, pt, s(this, pt) + t), s(this, pt) === 0 && (q(this, J, Or).call(this, r), s(this, ge) && jt(s(this, ge), () => {
    I(this, ge, null);
  }), s(this, ft) && (s(this, Re).before(s(this, ft)), I(this, ft, null)));
}, /**
 * @param {unknown} error
 */
dn = function(t) {
  s(this, je) && (ke(s(this, je)), I(this, je, null)), s(this, ge) && (ke(s(this, ge)), I(this, ge, null)), s(this, Me) && (ke(s(this, Me)), I(this, Me, null));
  var r = s(this, Fe).onerror;
  let n = s(this, Fe).failed;
  var a = !1, i = !1;
  const f = () => {
    if (a) {
      ks();
      return;
    }
    a = !0, i && vs(), s(this, Me) !== null && jt(s(this, Me), () => {
      I(this, Me, null);
    }), q(this, J, Rr).call(this, () => {
      q(this, J, un).call(this);
    });
  }, l = (o) => {
    try {
      i = !0, r?.(o, f), i = !1;
    } catch (u) {
      bt(u, s(this, me) && s(this, me).parent);
    }
    n && I(this, Me, q(this, J, Rr).call(this, () => {
      try {
        return Le(() => {
          var u = (
            /** @type {Effect} */
            O
          );
          u.b = this, u.f |= an, n(
            s(this, Re),
            () => o,
            () => f
          );
        });
      } catch (u) {
        return bt(
          u,
          /** @type {Effect} */
          s(this, me).parent
        ), null;
      }
    }));
  };
  Vt(() => {
    var o;
    try {
      o = this.transform_error(t);
    } catch (u) {
      bt(u, s(this, me) && s(this, me).parent);
      return;
    }
    o !== null && typeof o == "object" && typeof /** @type {any} */
    o.then == "function" ? o.then(
      l,
      /** @param {unknown} e */
      (u) => bt(u, s(this, me) && s(this, me).parent)
    ) : l(o);
  });
};
function Ls(e, t, r, n) {
  const a = mn;
  var i = e.filter((g) => !g.settled);
  if (r.length === 0 && i.length === 0) {
    n(t.map(a));
    return;
  }
  var f = (
    /** @type {Effect} */
    O
  ), l = Bs(), o = i.length === 1 ? i[0].promise : i.length > 1 ? Promise.all(i.map((g) => g.promise)) : null;
  function u(g) {
    l();
    try {
      n(g);
    } catch (h) {
      (f.f & He) === 0 && bt(h, f);
    }
    Lr();
  }
  if (r.length === 0) {
    o.then(() => u(t.map(a)));
    return;
  }
  var _ = ka();
  function b() {
    Promise.all(r.map((g) => /* @__PURE__ */ Hs(g))).then((g) => u([...t.map(a), ...g])).catch((g) => bt(g, f)).finally(() => _());
  }
  o ? o.then(() => {
    l(), b(), Lr();
  }) : b();
}
function Bs() {
  var e = (
    /** @type {Effect} */
    O
  ), t = D, r = ze, n = (
    /** @type {Batch} */
    E
  );
  return function(i = !0) {
    it(e), Ue(t), er(r), i && (e.f & He) === 0 && (n?.activate(), n?.apply());
  };
}
function Lr(e = !0) {
  it(null), Ue(null), er(null), e && E?.deactivate();
}
function ka() {
  var e = (
    /** @type {Effect} */
    O
  ), t = (
    /** @type {Boundary} */
    e.b
  ), r = (
    /** @type {Batch} */
    E
  ), n = t.is_rendered();
  return t.update_pending_count(1, r), r.increment(n, e), (a = !1) => {
    t.update_pending_count(-1, r), r.decrement(n, e, a);
  };
}
// @__NO_SIDE_EFFECTS__
function mn(e) {
  var t = ce | de;
  return O !== null && (O.f |= nr), {
    ctx: ze,
    deps: null,
    effects: null,
    equals: fa,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      ae
    ),
    wv: 0,
    parent: O,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function Hs(e, t, r) {
  let n = (
    /** @type {Effect | null} */
    O
  );
  n === null && as();
  var a = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), i = qt(
    /** @type {V} */
    ae
  ), f = !D, l = /* @__PURE__ */ new Map();
  return el(() => {
    var o = (
      /** @type {Effect} */
      O
    ), u = la();
    a = u.promise;
    try {
      Promise.resolve(e()).then(u.resolve, u.reject).finally(Lr);
    } catch (h) {
      u.reject(h), Lr();
    }
    var _ = (
      /** @type {Batch} */
      E
    );
    if (f) {
      if ((o.f & zt) !== 0)
        var b = ka();
      if (
        /** @type {Boundary} */
        n.b.is_rendered()
      )
        l.get(_)?.reject(lt), l.delete(_);
      else {
        for (const h of l.values())
          h.reject(lt);
        l.clear();
      }
      l.set(_, u);
    }
    const g = (h, c = void 0) => {
      if (b) {
        var C = c === lt;
        b(C);
      }
      if (!(c === lt || (o.f & He) !== 0)) {
        if (_.activate(), c)
          i.f |= xt, tr(i, c);
        else {
          (i.f & xt) !== 0 && (i.f ^= xt), tr(i, h);
          for (const [S, j] of l) {
            if (l.delete(S), S === _) break;
            j.reject(lt);
          }
        }
        _.deactivate();
      }
    };
    u.promise.then(g, (h) => g(null, h || "unknown"));
  }), Oa(() => {
    for (const o of l.values())
      o.reject(lt);
  }), new Promise((o) => {
    function u(_) {
      function b() {
        _ === a ? o(i) : u(a);
      }
      _.then(b, b);
    }
    u(a);
  });
}
// @__NO_SIDE_EFFECTS__
function lr(e) {
  const t = /* @__PURE__ */ mn(e);
  return za(t), t;
}
// @__NO_SIDE_EFFECTS__
function qs(e) {
  const t = /* @__PURE__ */ mn(e);
  return t.equals = da, t;
}
function zs(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var r = 0; r < t.length; r += 1)
      ke(
        /** @type {Effect} */
        t[r]
      );
  }
}
function wn(e) {
  var t, r = O, n = e.parent;
  if (!wt && n !== null && (n.f & (He | pe)) !== 0)
    return ms(), e.v;
  it(n);
  try {
    e.f &= ~Bt, zs(e), t = Wa(e);
  } finally {
    it(r);
  }
  return t;
}
function Ea(e) {
  var t = wn(e);
  if (!e.equals(t) && (e.wv = Ja(), (!E?.is_fork || e.deps === null) && (E !== null ? E.capture(e, t, !0) : e.v = t, e.deps === null))) {
    W(e, te);
    return;
  }
  wt || (Xe !== null ? (En() || E?.is_fork) && Xe.set(e, t) : bn(e));
}
function Us(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      (t.teardown || t.ac) && (t.teardown?.(), t.ac?.abort(lt), t.teardown = $i, t.ac = null, yr(t, 0), An(t));
}
function Sa(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      t.teardown && rr(t);
}
let cn = /* @__PURE__ */ new Set();
const Rt = /* @__PURE__ */ new Map();
let Aa = !1;
function qt(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: fa,
    rv: 0,
    wv: 0
  };
  return r;
}
// @__NO_SIDE_EFFECTS__
function F(e, t) {
  const r = qt(e);
  return za(r), r;
}
// @__NO_SIDE_EFFECTS__
function Js(e, t = !1, r = !0) {
  const n = qt(e);
  return t || (n.equals = da), n;
}
function y(e, t, r = !1) {
  D !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Ze || (D.f & sn) !== 0) && ha() && (D.f & (ce | nt | br | sn)) !== 0 && (qe === null || !Zt.call(qe, e)) && cs();
  let n = r ? Ct(t) : t;
  return tr(e, n, Mr);
}
function tr(e, t, r = null) {
  if (!e.equals(t)) {
    Rt.set(e, wt ? t : e.v);
    var n = Ht.ensure();
    if (n.capture(e, t), (e.f & ce) !== 0) {
      const a = (
        /** @type {Derived} */
        e
      );
      (e.f & de) !== 0 && wn(a), Xe === null && bn(a);
    }
    e.wv = Ja(), Ca(e, de, r), O !== null && (O.f & te) !== 0 && (O.f & (Qe | mt)) === 0 && (Oe === null ? rl([e]) : Oe.push(e)), !n.is_fork && cn.size > 0 && !Aa && Vs();
  }
  return t;
}
function Vs() {
  Aa = !1;
  for (const e of cn)
    (e.f & te) !== 0 && W(e, at), Cr(e) && rr(e);
  cn.clear();
}
function gr(e) {
  y(e, e.v + 1);
}
function Ca(e, t, r) {
  var n = e.reactions;
  if (n !== null)
    for (var a = n.length, i = 0; i < a; i++) {
      var f = n[i], l = f.f, o = (l & de) === 0;
      if (o && W(f, t), (l & ce) !== 0) {
        var u = (
          /** @type {Derived} */
          f
        );
        Xe?.delete(u), (l & Bt) === 0 && (l & Be && (O === null || (O.f & jr) === 0) && (f.f |= Bt), Ca(u, at, r));
      } else if (o) {
        var _ = (
          /** @type {Effect} */
          f
        );
        (l & nt) !== 0 && st !== null && st.add(_), r !== null ? r.push(_) : xn(_);
      }
    }
}
function Ct(e) {
  if (typeof e != "object" || e === null || hr in e)
    return e;
  const t = sa(e);
  if (t !== Zi && t !== Qi)
    return e;
  var r = /* @__PURE__ */ new Map(), n = pn(e), a = /* @__PURE__ */ F(0), i = Lt, f = (l) => {
    if (Lt === i)
      return l();
    var o = D, u = Lt;
    Ue(null), Qn(i);
    var _ = l();
    return Ue(o), Qn(u), _;
  };
  return n && r.set("length", /* @__PURE__ */ F(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(l, o, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && fs();
        var _ = r.get(o);
        return _ === void 0 ? f(() => {
          var b = /* @__PURE__ */ F(u.value);
          return r.set(o, b), b;
        }) : y(_, u.value, !0), !0;
      },
      deleteProperty(l, o) {
        var u = r.get(o);
        if (u === void 0) {
          if (o in l) {
            const _ = f(() => /* @__PURE__ */ F(ae));
            r.set(o, _), gr(a);
          }
        } else
          y(u, ae), gr(a);
        return !0;
      },
      get(l, o, u) {
        if (o === hr)
          return e;
        var _ = r.get(o), b = o in l;
        if (_ === void 0 && (!b || vr(l, o)?.writable) && (_ = f(() => {
          var h = Ct(b ? l[o] : ae), c = /* @__PURE__ */ F(h);
          return c;
        }), r.set(o, _)), _ !== void 0) {
          var g = d(_);
          return g === ae ? void 0 : g;
        }
        return Reflect.get(l, o, u);
      },
      getOwnPropertyDescriptor(l, o) {
        var u = Reflect.getOwnPropertyDescriptor(l, o);
        if (u && "value" in u) {
          var _ = r.get(o);
          _ && (u.value = d(_));
        } else if (u === void 0) {
          var b = r.get(o), g = b?.v;
          if (b !== void 0 && g !== ae)
            return {
              enumerable: !0,
              configurable: !0,
              value: g,
              writable: !0
            };
        }
        return u;
      },
      has(l, o) {
        if (o === hr)
          return !0;
        var u = r.get(o), _ = u !== void 0 && u.v !== ae || Reflect.has(l, o);
        if (u !== void 0 || O !== null && (!_ || vr(l, o)?.writable)) {
          u === void 0 && (u = f(() => {
            var g = _ ? Ct(l[o]) : ae, h = /* @__PURE__ */ F(g);
            return h;
          }), r.set(o, u));
          var b = d(u);
          if (b === ae)
            return !1;
        }
        return _;
      },
      set(l, o, u, _) {
        var b = r.get(o), g = o in l;
        if (n && o === "length")
          for (var h = u; h < /** @type {Source<number>} */
          b.v; h += 1) {
            var c = r.get(h + "");
            c !== void 0 ? y(c, ae) : h in l && (c = f(() => /* @__PURE__ */ F(ae)), r.set(h + "", c));
          }
        if (b === void 0)
          (!g || vr(l, o)?.writable) && (b = f(() => /* @__PURE__ */ F(void 0)), y(b, Ct(u)), r.set(o, b));
        else {
          g = b.v !== ae;
          var C = f(() => Ct(u));
          y(b, C);
        }
        var S = Reflect.getOwnPropertyDescriptor(l, o);
        if (S?.set && S.set.call(_, u), !g) {
          if (n && typeof o == "string") {
            var j = (
              /** @type {Source<number>} */
              r.get("length")
            ), M = Number(o);
            Number.isInteger(M) && M >= j.v && y(j, M + 1);
          }
          gr(a);
        }
        return !0;
      },
      ownKeys(l) {
        d(a);
        var o = Reflect.ownKeys(l).filter((b) => {
          var g = r.get(b);
          return g === void 0 || g.v !== ae;
        });
        for (var [u, _] of r)
          _.v !== ae && !(u in l) && o.push(u);
        return o;
      },
      setPrototypeOf() {
        ds();
      }
    }
  );
}
function Gn(e) {
  try {
    if (e !== null && typeof e == "object" && hr in e)
      return e[hr];
  } catch {
  }
  return e;
}
function Ws(e, t) {
  return Object.is(Gn(e), Gn(t));
}
var Yn, Ta, Na, Ma;
function Gs() {
  if (Yn === void 0) {
    Yn = window, Ta = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, r = Text.prototype;
    Na = vr(t, "firstChild").get, Ma = vr(t, "nextSibling").get, Un(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), Un(r) && (r.__t = void 0);
  }
}
function Ft(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function yt(e) {
  return (
    /** @type {TemplateNode | null} */
    Na.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function Ar(e) {
  return (
    /** @type {TemplateNode | null} */
    Ma.call(e)
  );
}
function v(e, t) {
  return /* @__PURE__ */ yt(e);
}
function en(e, t = !1) {
  {
    var r = /* @__PURE__ */ yt(e);
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ Ar(r) : r;
  }
}
function x(e, t = 1, r = !1) {
  let n = e;
  for (; t--; )
    n = /** @type {TemplateNode} */
    /* @__PURE__ */ Ar(n);
  return n;
}
function Ys(e) {
  e.textContent = "";
}
function Pa() {
  return !1;
}
function Ia(e, t, r) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElementNS(t ?? ua, e, void 0)
  );
}
let Kn = !1;
function Ks() {
  Kn || (Kn = !0, document.addEventListener(
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
function kn(e) {
  var t = D, r = O;
  Ue(null), it(null);
  try {
    return e();
  } finally {
    Ue(t), it(r);
  }
}
function Da(e, t, r, n = r) {
  e.addEventListener(t, () => kn(r));
  const a = e.__on_r;
  a ? e.__on_r = () => {
    a(), n(!0);
  } : e.__on_r = () => n(!0), Ks();
}
function Xs(e) {
  O === null && (D === null && os(), ls()), wt && ss();
}
function Zs(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function vt(e, t) {
  var r = O;
  r !== null && (r.f & pe) !== 0 && (e |= pe);
  var n = {
    ctx: ze,
    deps: null,
    nodes: null,
    f: e | de | Be,
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
  var a = n;
  if ((e & Qt) !== 0)
    Jt !== null ? Jt.push(n) : Ht.ensure().schedule(n);
  else if (t !== null) {
    try {
      rr(n);
    } catch (f) {
      throw ke(n), f;
    }
    a.deps === null && a.teardown === null && a.nodes === null && a.first === a.last && // either `null`, or a singular child
    (a.f & nr) === 0 && (a = a.first, (e & nt) !== 0 && (e & $t) !== 0 && a !== null && (a.f |= $t));
  }
  if (a !== null && (a.parent = r, r !== null && Zs(a, r), D !== null && (D.f & ce) !== 0 && (e & mt) === 0)) {
    var i = (
      /** @type {Derived} */
      D
    );
    (i.effects ?? (i.effects = [])).push(a);
  }
  return n;
}
function En() {
  return D !== null && !Ze;
}
function Oa(e) {
  const t = vt(Jr, null);
  return W(t, te), t.teardown = e, t;
}
function Xn(e) {
  Xs();
  var t = (
    /** @type {Effect} */
    O.f
  ), r = !D && (t & Qe) !== 0 && (t & zt) === 0;
  if (r) {
    var n = (
      /** @type {ComponentContext} */
      ze
    );
    (n.e ?? (n.e = [])).push(e);
  } else
    return Ra(e);
}
function Ra(e) {
  return vt(Qt | ns, e);
}
function Qs(e) {
  Ht.ensure();
  const t = vt(mt | nr, e);
  return (r = {}) => new Promise((n) => {
    r.outro ? jt(t, () => {
      ke(t), n(void 0);
    }) : (ke(t), n(void 0));
  });
}
function $s(e) {
  return vt(Qt, e);
}
function el(e) {
  return vt(br | nr, e);
}
function Fa(e, t = 0) {
  return vt(Jr | t, e);
}
function fe(e, t = [], r = [], n = []) {
  Ls(n, t, r, (a) => {
    vt(Jr, () => e(...a.map(d)));
  });
}
function Sn(e, t = 0) {
  var r = vt(nt | t, e);
  return r;
}
function Le(e) {
  return vt(Qe | nr, e);
}
function ja(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = wt, n = D;
    Zn(!0), Ue(null);
    try {
      t.call(null);
    } finally {
      Zn(r), Ue(n);
    }
  }
}
function An(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    const a = r.ac;
    a !== null && kn(() => {
      a.abort(lt);
    });
    var n = r.next;
    (r.f & mt) !== 0 ? r.parent = null : ke(r, t), r = n;
  }
}
function tl(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & Qe) === 0 && ke(t), t = r;
  }
}
function ke(e, t = !0) {
  var r = !1;
  (t || (e.f & rs) !== 0) && e.nodes !== null && e.nodes.end !== null && (La(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), r = !0), W(e, Jn), An(e, t && !r), yr(e, 0);
  var n = e.nodes && e.nodes.t;
  if (n !== null)
    for (const i of n)
      i.stop();
  ja(e), e.f ^= Jn, e.f |= He;
  var a = e.parent;
  a !== null && a.first !== null && Ba(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function La(e, t) {
  for (; e !== null; ) {
    var r = e === t ? null : /* @__PURE__ */ Ar(e);
    e.remove(), e = r;
  }
}
function Ba(e) {
  var t = e.parent, r = e.prev, n = e.next;
  r !== null && (r.next = n), n !== null && (n.prev = r), t !== null && (t.first === e && (t.first = n), t.last === e && (t.last = r));
}
function jt(e, t, r = !0) {
  var n = [];
  Ha(e, n, !0);
  var a = () => {
    r && ke(e), t && t();
  }, i = n.length;
  if (i > 0) {
    var f = () => --i || a();
    for (var l of n)
      l.out(f);
  } else
    a();
}
function Ha(e, t, r) {
  if ((e.f & pe) === 0) {
    e.f ^= pe;
    var n = e.nodes && e.nodes.t;
    if (n !== null)
      for (const l of n)
        (l.is_global || r) && t.push(l);
    for (var a = e.first; a !== null; ) {
      var i = a.next;
      if ((a.f & mt) === 0) {
        var f = (a.f & $t) !== 0 || // If this is a branch effect without a block effect parent,
        // it means the parent block effect was pruned. In that case,
        // transparency information was transferred to the branch effect.
        (a.f & Qe) !== 0 && (e.f & nt) !== 0;
        Ha(a, t, f ? r : !1);
      }
      a = i;
    }
  }
}
function Cn(e) {
  qa(e, !0);
}
function qa(e, t) {
  if ((e.f & pe) !== 0) {
    e.f ^= pe, (e.f & te) === 0 && (W(e, de), Ht.ensure().schedule(e));
    for (var r = e.first; r !== null; ) {
      var n = r.next, a = (r.f & $t) !== 0 || (r.f & Qe) !== 0;
      qa(r, a ? t : !1), r = n;
    }
    var i = e.nodes && e.nodes.t;
    if (i !== null)
      for (const f of i)
        (f.is_global || t) && f.in();
  }
}
function Tn(e, t) {
  if (e.nodes)
    for (var r = e.nodes.start, n = e.nodes.end; r !== null; ) {
      var a = r === n ? null : /* @__PURE__ */ Ar(r);
      t.append(r), r = a;
    }
}
let Fr = !1, wt = !1;
function Zn(e) {
  wt = e;
}
let D = null, Ze = !1;
function Ue(e) {
  D = e;
}
let O = null;
function it(e) {
  O = e;
}
let qe = null;
function za(e) {
  D !== null && (qe === null ? qe = [e] : qe.push(e));
}
let we = null, Te = 0, Oe = null;
function rl(e) {
  Oe = e;
}
let Ua = 1, Tt = 0, Lt = Tt;
function Qn(e) {
  Lt = e;
}
function Ja() {
  return ++Ua;
}
function Cr(e) {
  var t = e.f;
  if ((t & de) !== 0)
    return !0;
  if (t & ce && (e.f &= ~Bt), (t & at) !== 0) {
    for (var r = (
      /** @type {Value[]} */
      e.deps
    ), n = r.length, a = 0; a < n; a++) {
      var i = r[a];
      if (Cr(
        /** @type {Derived} */
        i
      ) && Ea(
        /** @type {Derived} */
        i
      ), i.wv > e.wv)
        return !0;
    }
    (t & Be) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    Xe === null && W(e, te);
  }
  return !1;
}
function Va(e, t, r = !0) {
  var n = e.reactions;
  if (n !== null && !(qe !== null && Zt.call(qe, e)))
    for (var a = 0; a < n.length; a++) {
      var i = n[a];
      (i.f & ce) !== 0 ? Va(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (r ? W(i, de) : (i.f & te) !== 0 && W(i, at), xn(
        /** @type {Effect} */
        i
      ));
    }
}
function Wa(e) {
  var C;
  var t = we, r = Te, n = Oe, a = D, i = qe, f = ze, l = Ze, o = Lt, u = e.f;
  we = /** @type {null | Value[]} */
  null, Te = 0, Oe = null, D = (u & (Qe | mt)) === 0 ? e : null, qe = null, er(e.ctx), Ze = !1, Lt = ++Tt, e.ac !== null && (kn(() => {
    e.ac.abort(lt);
  }), e.ac = null);
  try {
    e.f |= jr;
    var _ = (
      /** @type {Function} */
      e.fn
    ), b = _();
    e.f |= zt;
    var g = e.deps, h = E?.is_fork;
    if (we !== null) {
      var c;
      if (h || yr(e, Te), g !== null && Te > 0)
        for (g.length = Te + we.length, c = 0; c < we.length; c++)
          g[Te + c] = we[c];
      else
        e.deps = g = we;
      if (En() && (e.f & Be) !== 0)
        for (c = Te; c < g.length; c++)
          ((C = g[c]).reactions ?? (C.reactions = [])).push(e);
    } else !h && g !== null && Te < g.length && (yr(e, Te), g.length = Te);
    if (ha() && Oe !== null && !Ze && g !== null && (e.f & (ce | at | de)) === 0)
      for (c = 0; c < /** @type {Source[]} */
      Oe.length; c++)
        Va(
          Oe[c],
          /** @type {Effect} */
          e
        );
    if (a !== null && a !== e) {
      if (Tt++, a.deps !== null)
        for (let S = 0; S < r; S += 1)
          a.deps[S].rv = Tt;
      if (t !== null)
        for (const S of t)
          S.rv = Tt;
      Oe !== null && (n === null ? n = Oe : n.push(.../** @type {Source[]} */
      Oe));
    }
    return (e.f & xt) !== 0 && (e.f ^= xt), b;
  } catch (S) {
    return ga(S);
  } finally {
    e.f ^= jr, we = t, Te = r, Oe = n, D = a, qe = i, er(f), Ze = l, Lt = o;
  }
}
function nl(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var n = Yi.call(r, e);
    if (n !== -1) {
      var a = r.length - 1;
      a === 0 ? r = t.reactions = null : (r[n] = r[a], r.pop());
    }
  }
  if (r === null && (t.f & ce) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (we === null || !Zt.call(we, t))) {
    var i = (
      /** @type {Derived} */
      t
    );
    (i.f & Be) !== 0 && (i.f ^= Be, i.f &= ~Bt), i.v !== ae && bn(i), Us(i), yr(i, 0);
  }
}
function yr(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var n = t; n < r.length; n++)
      nl(e, r[n]);
}
function rr(e) {
  var t = e.f;
  if ((t & He) === 0) {
    W(e, te);
    var r = O, n = Fr;
    O = e, Fr = !0;
    try {
      (t & (nt | oa)) !== 0 ? tl(e) : An(e), ja(e);
      var a = Wa(e);
      e.teardown = typeof a == "function" ? a : null, e.wv = Ua;
      var i;
    } finally {
      Fr = n, O = r;
    }
  }
}
async function al() {
  await Promise.resolve(), Ns();
}
function d(e) {
  var t = e.f, r = (t & ce) !== 0;
  if (D !== null && !Ze) {
    var n = O !== null && (O.f & He) !== 0;
    if (!n && (qe === null || !Zt.call(qe, e))) {
      var a = D.deps;
      if ((D.f & jr) !== 0)
        e.rv < Tt && (e.rv = Tt, we === null && a !== null && a[Te] === e ? Te++ : we === null ? we = [e] : we.push(e));
      else {
        (D.deps ?? (D.deps = [])).push(e);
        var i = e.reactions;
        i === null ? e.reactions = [D] : Zt.call(i, D) || i.push(D);
      }
    }
  }
  if (wt && Rt.has(e))
    return Rt.get(e);
  if (r) {
    var f = (
      /** @type {Derived} */
      e
    );
    if (wt) {
      var l = f.v;
      return ((f.f & te) === 0 && f.reactions !== null || Ya(f)) && (l = wn(f)), Rt.set(f, l), l;
    }
    var o = (f.f & Be) === 0 && !Ze && D !== null && (Fr || (D.f & Be) !== 0), u = (f.f & zt) === 0;
    Cr(f) && (o && (f.f |= Be), Ea(f)), o && !u && (Sa(f), Ga(f));
  }
  if (Xe?.has(e))
    return Xe.get(e);
  if ((e.f & xt) !== 0)
    throw e.v;
  return e.v;
}
function Ga(e) {
  if (e.f |= Be, e.deps !== null)
    for (const t of e.deps)
      (t.reactions ?? (t.reactions = [])).push(e), (t.f & ce) !== 0 && (t.f & Be) === 0 && (Sa(
        /** @type {Derived} */
        t
      ), Ga(
        /** @type {Derived} */
        t
      ));
}
function Ya(e) {
  if (e.v === ae) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (Rt.has(t) || (t.f & ce) !== 0 && Ya(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function Ka(e) {
  var t = Ze;
  try {
    return Ze = !0, e();
  } finally {
    Ze = t;
  }
}
const il = ["touchstart", "touchmove"];
function sl(e) {
  return il.includes(e);
}
const Nt = Symbol("events"), Xa = /* @__PURE__ */ new Set(), vn = /* @__PURE__ */ new Set();
function ne(e, t, r) {
  (t[Nt] ?? (t[Nt] = {}))[e] = r;
}
function ll(e) {
  for (var t = 0; t < e.length; t++)
    Xa.add(e[t]);
  for (var r of vn)
    r(e);
}
let $n = null;
function ea(e) {
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), n = e.type, a = e.composedPath?.() || [], i = (
    /** @type {null | Element} */
    a[0] || e.target
  );
  $n = e;
  var f = 0, l = $n === e && e[Nt];
  if (l) {
    var o = a.indexOf(l);
    if (o !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e[Nt] = t;
      return;
    }
    var u = a.indexOf(t);
    if (u === -1)
      return;
    o <= u && (f = o);
  }
  if (i = /** @type {Element} */
  a[f] || e.target, i !== t) {
    Ki(e, "currentTarget", {
      configurable: !0,
      get() {
        return i || r;
      }
    });
    var _ = D, b = O;
    Ue(null), it(null);
    try {
      for (var g, h = []; i !== null; ) {
        var c = i.assignedSlot || i.parentNode || /** @type {any} */
        i.host || null;
        try {
          var C = i[Nt]?.[n];
          C != null && (!/** @type {any} */
          i.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === i) && C.call(i, e);
        } catch (S) {
          g ? h.push(S) : g = S;
        }
        if (e.cancelBubble || c === t || c === null)
          break;
        i = c;
      }
      if (g) {
        for (let S of h)
          queueMicrotask(() => {
            throw S;
          });
        throw g;
      }
    } finally {
      e[Nt] = t, delete e.currentTarget, Ue(_), it(b);
    }
  }
}
const ol = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (e) => e
  })
);
function ul(e) {
  return (
    /** @type {string} */
    ol?.createHTML(e) ?? e
  );
}
function fl(e) {
  var t = Ia("template");
  return t.innerHTML = ul(e.replaceAll("<!>", "<!---->")), t.content;
}
function Br(e, t) {
  var r = (
    /** @type {Effect} */
    O
  );
  r.nodes === null && (r.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function N(e, t) {
  var r = (t & ps) !== 0, n = (t & bs) !== 0, a, i = !e.startsWith("<!>");
  return () => {
    a === void 0 && (a = fl(i ? e : "<!>" + e), r || (a = /** @type {TemplateNode} */
    /* @__PURE__ */ yt(a)));
    var f = (
      /** @type {TemplateNode} */
      n || Ta ? document.importNode(a, !0) : a.cloneNode(!0)
    );
    if (r) {
      var l = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ yt(f)
      ), o = (
        /** @type {TemplateNode} */
        f.lastChild
      );
      Br(l, o);
    } else
      Br(f, f);
    return f;
  };
}
function T(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function R(e, t) {
  var r = t == null ? "" : typeof t == "object" ? `${t}` : t;
  r !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = r, e.nodeValue = `${r}`);
}
function dl(e, t) {
  return cl(e, t);
}
const Nr = /* @__PURE__ */ new Map();
function cl(e, { target: t, anchor: r, props: n = {}, events: a, context: i, intro: f = !0, transformError: l }) {
  Gs();
  var o = void 0, u = Qs(() => {
    var _ = r ?? t.appendChild(Ft());
    Ds(
      /** @type {TemplateNode} */
      _,
      {
        pending: () => {
        }
      },
      (h) => {
        ca({});
        var c = (
          /** @type {ComponentContext} */
          ze
        );
        i && (c.c = i), a && (n.$$events = a), o = e(h, n) || {}, va();
      },
      l
    );
    var b = /* @__PURE__ */ new Set(), g = (h) => {
      for (var c = 0; c < h.length; c++) {
        var C = h[c];
        if (!b.has(C)) {
          b.add(C);
          var S = sl(C);
          for (const re of [t, document]) {
            var j = Nr.get(re);
            j === void 0 && (j = /* @__PURE__ */ new Map(), Nr.set(re, j));
            var M = j.get(C);
            M === void 0 ? (re.addEventListener(C, ea, { passive: S }), j.set(C, 1)) : j.set(C, M + 1);
          }
        }
      }
    };
    return g(Ur(Xa)), vn.add(g), () => {
      for (var h of b)
        for (const S of [t, document]) {
          var c = (
            /** @type {Map<string, number>} */
            Nr.get(S)
          ), C = (
            /** @type {number} */
            c.get(h)
          );
          --C == 0 ? (S.removeEventListener(h, ea), c.delete(h), c.size === 0 && Nr.delete(S)) : c.set(h, C);
        }
      vn.delete(g), _ !== r && _.parentNode?.removeChild(_);
    };
  });
  return hn.set(o, u), o;
}
let hn = /* @__PURE__ */ new WeakMap();
function vl(e, t) {
  const r = hn.get(e);
  return r ? (hn.delete(e), r(t)) : Promise.resolve();
}
var Ke, rt, Pe, Ot, Er, Sr, zr;
class hl {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, r = !0) {
    /** @type {TemplateNode} */
    Ye(this, "anchor");
    /** @type {Map<Batch, Key>} */
    A(this, Ke, /* @__PURE__ */ new Map());
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
    A(this, rt, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    A(this, Pe, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    A(this, Ot, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    A(this, Er, !0);
    /**
     * @param {Batch} batch
     */
    A(this, Sr, (t) => {
      if (s(this, Ke).has(t)) {
        var r = (
          /** @type {Key} */
          s(this, Ke).get(t)
        ), n = s(this, rt).get(r);
        if (n)
          Cn(n), s(this, Ot).delete(r);
        else {
          var a = s(this, Pe).get(r);
          a && (s(this, rt).set(r, a.effect), s(this, Pe).delete(r), a.fragment.lastChild.remove(), this.anchor.before(a.fragment), n = a.effect);
        }
        for (const [i, f] of s(this, Ke)) {
          if (s(this, Ke).delete(i), i === t)
            break;
          const l = s(this, Pe).get(f);
          l && (ke(l.effect), s(this, Pe).delete(f));
        }
        for (const [i, f] of s(this, rt)) {
          if (i === r || s(this, Ot).has(i)) continue;
          const l = () => {
            if (Array.from(s(this, Ke).values()).includes(i)) {
              var u = document.createDocumentFragment();
              Tn(f, u), u.append(Ft()), s(this, Pe).set(i, { effect: f, fragment: u });
            } else
              ke(f);
            s(this, Ot).delete(i), s(this, rt).delete(i);
          };
          s(this, Er) || !n ? (s(this, Ot).add(i), jt(f, l, !1)) : l();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    A(this, zr, (t) => {
      s(this, Ke).delete(t);
      const r = Array.from(s(this, Ke).values());
      for (const [n, a] of s(this, Pe))
        r.includes(n) || (ke(a.effect), s(this, Pe).delete(n));
    });
    this.anchor = t, I(this, Er, r);
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
    ), a = Pa();
    if (r && !s(this, rt).has(t) && !s(this, Pe).has(t))
      if (a) {
        var i = document.createDocumentFragment(), f = Ft();
        i.append(f), s(this, Pe).set(t, {
          effect: Le(() => r(f)),
          fragment: i
        });
      } else
        s(this, rt).set(
          t,
          Le(() => r(this.anchor))
        );
    if (s(this, Ke).set(n, t), a) {
      for (const [l, o] of s(this, rt))
        l === t ? n.unskip_effect(o) : n.skip_effect(o);
      for (const [l, o] of s(this, Pe))
        l === t ? n.unskip_effect(o.effect) : n.skip_effect(o.effect);
      n.oncommit(s(this, Sr)), n.ondiscard(s(this, zr));
    } else
      s(this, Sr).call(this, n);
  }
}
Ke = new WeakMap(), rt = new WeakMap(), Pe = new WeakMap(), Ot = new WeakMap(), Er = new WeakMap(), Sr = new WeakMap(), zr = new WeakMap();
function oe(e, t, r = !1) {
  var n = new hl(e), a = r ? $t : 0;
  function i(f, l) {
    n.ensure(f, l);
  }
  Sn(() => {
    var f = !1;
    t((l, o = 0) => {
      f = !0, i(o, l);
    }), f || i(-1, null);
  }, a);
}
function or(e, t) {
  return t;
}
function _l(e, t, r) {
  for (var n = [], a = t.length, i, f = t.length, l = 0; l < a; l++) {
    let b = t[l];
    jt(
      b,
      () => {
        if (i) {
          if (i.pending.delete(b), i.done.add(b), i.pending.size === 0) {
            var g = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            _n(e, Ur(i.done)), g.delete(i), g.size === 0 && (e.outrogroups = null);
          }
        } else
          f -= 1;
      },
      !1
    );
  }
  if (f === 0) {
    var o = n.length === 0 && r !== null;
    if (o) {
      var u = (
        /** @type {Element} */
        r
      ), _ = (
        /** @type {Element} */
        u.parentNode
      );
      Ys(_), _.append(u), e.items.clear();
    }
    _n(e, t, !o);
  } else
    i = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ?? (e.outrogroups = /* @__PURE__ */ new Set())).add(i);
}
function _n(e, t, r = !0) {
  var n;
  if (e.pending.size > 0) {
    n = /* @__PURE__ */ new Set();
    for (const f of e.pending.values())
      for (const l of f)
        n.add(
          /** @type {EachItem} */
          e.items.get(l).e
        );
  }
  for (var a = 0; a < t.length; a++) {
    var i = t[a];
    if (n?.has(i)) {
      i.f |= ct;
      const f = document.createDocumentFragment();
      Tn(i, f);
    } else
      ke(t[a], r);
  }
}
var ta;
function Ut(e, t, r, n, a, i = null) {
  var f = e, l = /* @__PURE__ */ new Map();
  {
    var o = (
      /** @type {Element} */
      e
    );
    f = o.appendChild(Ft());
  }
  var u = null, _ = /* @__PURE__ */ qs(() => {
    var M = r();
    return pn(M) ? M : M == null ? [] : Ur(M);
  }), b, g = /* @__PURE__ */ new Map(), h = !0;
  function c(M) {
    (j.effect.f & He) === 0 && (j.pending.delete(M), j.fallback = u, gl(j, b, f, t, n), u !== null && (b.length === 0 ? (u.f & ct) === 0 ? Cn(u) : (u.f ^= ct, cr(u, null, f)) : jt(u, () => {
      u = null;
    })));
  }
  function C(M) {
    j.pending.delete(M);
  }
  var S = Sn(() => {
    b = /** @type {V[]} */
    d(_);
    for (var M = b.length, re = /* @__PURE__ */ new Set(), ie = (
      /** @type {Batch} */
      E
    ), Ie = Pa(), be = 0; be < M; be += 1) {
      var G = b[be], ve = n(G, be), Je = h ? null : l.get(ve);
      Je ? (Je.v && tr(Je.v, G), Je.i && tr(Je.i, be), Ie && ie.unskip_effect(Je.e)) : (Je = pl(
        l,
        h ? f : ta ?? (ta = Ft()),
        G,
        ve,
        be,
        a,
        t,
        r
      ), h || (Je.e.f |= ct), l.set(ve, Je)), re.add(ve);
    }
    if (M === 0 && i && !u && (h ? u = Le(() => i(f)) : (u = Le(() => i(ta ?? (ta = Ft()))), u.f |= ct)), M > re.size && is(), !h)
      if (g.set(ie, re), Ie) {
        for (const [ar, Vr] of l)
          re.has(ar) || ie.skip_effect(Vr.e);
        ie.oncommit(c), ie.ondiscard(C);
      } else
        c(ie);
    d(_);
  }), j = { effect: S, items: l, pending: g, outrogroups: null, fallback: u };
  h = !1;
}
function ur(e) {
  for (; e !== null && (e.f & Qe) === 0; )
    e = e.next;
  return e;
}
function gl(e, t, r, n, a) {
  var i = t.length, f = e.items, l = ur(e.effect.first), o, u = null, _ = [], b = [], g, h, c, C;
  for (C = 0; C < i; C += 1) {
    if (g = t[C], h = a(g, C), c = /** @type {EachItem} */
    f.get(h).e, e.outrogroups !== null)
      for (const ve of e.outrogroups)
        ve.pending.delete(c), ve.done.delete(c);
    if ((c.f & pe) !== 0 && Cn(c), (c.f & ct) !== 0)
      if (c.f ^= ct, c === l)
        cr(c, null, r);
      else {
        var S = u ? u.next : l;
        c === e.effect.last && (e.effect.last = c.prev), c.prev && (c.prev.next = c.next), c.next && (c.next.prev = c.prev), _t(e, u, c), _t(e, c, S), cr(c, S, r), u = c, _ = [], b = [], l = ur(u.next);
        continue;
      }
    if (c !== l) {
      if (o !== void 0 && o.has(c)) {
        if (_.length < b.length) {
          var j = b[0], M;
          u = j.prev;
          var re = _[0], ie = _[_.length - 1];
          for (M = 0; M < _.length; M += 1)
            cr(_[M], j, r);
          for (M = 0; M < b.length; M += 1)
            o.delete(b[M]);
          _t(e, re.prev, ie.next), _t(e, u, re), _t(e, ie, j), l = j, u = ie, C -= 1, _ = [], b = [];
        } else
          o.delete(c), cr(c, l, r), _t(e, c.prev, c.next), _t(e, c, u === null ? e.effect.first : u.next), _t(e, u, c), u = c;
        continue;
      }
      for (_ = [], b = []; l !== null && l !== c; )
        (o ?? (o = /* @__PURE__ */ new Set())).add(l), b.push(l), l = ur(l.next);
      if (l === null)
        continue;
    }
    (c.f & ct) === 0 && _.push(c), u = c, l = ur(c.next);
  }
  if (e.outrogroups !== null) {
    for (const ve of e.outrogroups)
      ve.pending.size === 0 && (_n(e, Ur(ve.done)), e.outrogroups?.delete(ve));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (l !== null || o !== void 0) {
    var Ie = [];
    if (o !== void 0)
      for (c of o)
        (c.f & pe) === 0 && Ie.push(c);
    for (; l !== null; )
      (l.f & pe) === 0 && l !== e.fallback && Ie.push(l), l = ur(l.next);
    var be = Ie.length;
    if (be > 0) {
      var G = i === 0 ? r : null;
      _l(e, Ie, G);
    }
  }
}
function pl(e, t, r, n, a, i, f, l) {
  var o = (f & hs) !== 0 ? (f & gs) === 0 ? /* @__PURE__ */ Js(r, !1, !1) : qt(r) : null, u = (f & _s) !== 0 ? qt(a) : null;
  return {
    v: o,
    i: u,
    e: Le(() => (i(t, o ?? r, u ?? a, l), () => {
      e.delete(n);
    }))
  };
}
function cr(e, t, r) {
  if (e.nodes)
    for (var n = e.nodes.start, a = e.nodes.end, i = t && (t.f & ct) === 0 ? (
      /** @type {EffectNodes} */
      t.nodes.start
    ) : r; n !== null; ) {
      var f = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ar(n)
      );
      if (i.before(n), n === a)
        return;
      n = f;
    }
}
function _t(e, t, r) {
  t === null ? e.effect.first = r : t.next = r, r === null ? e.effect.last = t : r.prev = t;
}
function bl(e, t, r = !1, n = !1, a = !1, i = !1) {
  var f = e, l = "";
  if (r)
    var o = (
      /** @type {Element} */
      e
    );
  fe(() => {
    var u = (
      /** @type {Effect} */
      O
    );
    if (l !== (l = t() ?? "")) {
      if (r) {
        u.nodes = null, o.innerHTML = /** @type {string} */
        l, l !== "" && Br(
          /** @type {TemplateNode} */
          /* @__PURE__ */ yt(o),
          /** @type {TemplateNode} */
          o.lastChild
        );
        return;
      }
      if (u.nodes !== null && (La(
        u.nodes.start,
        /** @type {TemplateNode} */
        u.nodes.end
      ), u.nodes = null), l !== "") {
        var _ = n ? ys : a ? xs : void 0, b = (
          /** @type {HTMLTemplateElement | SVGElement | MathMLElement} */
          Ia(n ? "svg" : a ? "math" : "template", _)
        );
        b.innerHTML = /** @type {any} */
        l;
        var g = n || a ? b : (
          /** @type {HTMLTemplateElement} */
          b.content
        );
        if (Br(
          /** @type {TemplateNode} */
          /* @__PURE__ */ yt(g),
          /** @type {TemplateNode} */
          g.lastChild
        ), n || a)
          for (; /* @__PURE__ */ yt(g); )
            f.before(
              /** @type {TemplateNode} */
              /* @__PURE__ */ yt(g)
            );
        else
          f.before(g);
      }
    }
  });
}
function Za(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var a = e.length;
    for (t = 0; t < a; t++) e[t] && (r = Za(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function yl() {
  for (var e, t, r = 0, n = "", a = arguments.length; r < a; r++) (e = arguments[r]) && (t = Za(e)) && (n && (n += " "), n += t);
  return n;
}
function fr(e) {
  return typeof e == "object" ? yl(e) : e ?? "";
}
function xl(e, t, r) {
  var n = e == null ? "" : "" + e;
  return n === "" ? null : n;
}
function dr(e, t, r, n, a, i) {
  var f = e.__className;
  if (f !== r || f === void 0) {
    var l = xl(r);
    l == null ? e.removeAttribute("class") : e.className = l, e.__className = r;
  }
  return i;
}
function Qa(e, t, r = !1) {
  if (e.multiple) {
    if (t == null)
      return;
    if (!pn(t))
      return ws();
    for (var n of e.options)
      n.selected = t.includes(pr(n));
    return;
  }
  for (n of e.options) {
    var a = pr(n);
    if (Ws(a, t)) {
      n.selected = !0;
      return;
    }
  }
  (!r || t !== void 0) && (e.selectedIndex = -1);
}
function ml(e) {
  var t = new MutationObserver(() => {
    Qa(e, e.__value);
  });
  t.observe(e, {
    // Listen to option element changes
    childList: !0,
    subtree: !0,
    // because of <optgroup>
    // Listen to option element value attribute changes
    // (doesn't get notified of select value changes,
    // because that property is not reflected as an attribute)
    attributes: !0,
    attributeFilter: ["value"]
  }), Oa(() => {
    t.disconnect();
  });
}
function ra(e, t, r = t) {
  var n = /* @__PURE__ */ new WeakSet(), a = !0;
  Da(e, "change", (i) => {
    var f = i ? "[selected]" : ":checked", l;
    if (e.multiple)
      l = [].map.call(e.querySelectorAll(f), pr);
    else {
      var o = e.querySelector(f) ?? // will fall back to first non-disabled option if no option is selected
      e.querySelector("option:not([disabled])");
      l = o && pr(o);
    }
    r(l), e.__value = l, E !== null && n.add(E);
  }), $s(() => {
    var i = t();
    if (e === document.activeElement) {
      var f = (
        /** @type {Batch} */
        E
      );
      if (n.has(f))
        return;
    }
    if (Qa(e, i, a), a && i === void 0) {
      var l = e.querySelector(":checked");
      l !== null && (i = pr(l), r(i));
    }
    e.__value = i, a = !1;
  }), ml(e);
}
function pr(e) {
  return "__value" in e ? e.__value : e.value;
}
const wl = Symbol("is custom element"), kl = Symbol("is html");
function tn(e, t, r, n) {
  var a = El(e);
  a[t] !== (a[t] = r) && (r == null ? e.removeAttribute(t) : typeof r != "string" && Sl(e).includes(t) ? e[t] = r : e.setAttribute(t, r));
}
function El(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [wl]: e.nodeName.includes("-"),
      [kl]: e.namespaceURI === ua
    })
  );
}
var na = /* @__PURE__ */ new Map();
function Sl(e) {
  var t = e.getAttribute("is") || e.nodeName, r = na.get(t);
  if (r) return r;
  na.set(t, r = []);
  for (var n, a = e, i = Element.prototype; i !== a; ) {
    n = Xi(a);
    for (var f in n)
      n[f].set && r.push(f);
    a = sa(a);
  }
  return r;
}
function aa(e, t, r = t) {
  var n = /* @__PURE__ */ new WeakSet();
  Da(e, "input", async (a) => {
    var i = a ? e.defaultValue : e.value;
    if (i = rn(e) ? nn(i) : i, r(i), E !== null && n.add(E), await al(), i !== (i = t())) {
      var f = e.selectionStart, l = e.selectionEnd, o = e.value.length;
      if (e.value = i ?? "", l !== null) {
        var u = e.value.length;
        f === l && l === o && u > o ? (e.selectionStart = u, e.selectionEnd = u) : (e.selectionStart = f, e.selectionEnd = Math.min(l, u));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  Ka(t) == null && e.value && (r(rn(e) ? nn(e.value) : e.value), E !== null && n.add(E)), Fa(() => {
    var a = t();
    if (e === document.activeElement) {
      var i = (
        /** @type {Batch} */
        E
      );
      if (n.has(i))
        return;
    }
    rn(e) && a === nn(e.value) || e.type === "date" && !a && !e.value || a !== e.value && (e.value = a ?? "");
  });
}
function rn(e) {
  var t = e.type;
  return t === "number" || t === "range";
}
function nn(e) {
  return e === "" ? null : +e;
}
const Al = "5";
var ia;
typeof window < "u" && ((ia = window.__svelte ?? (window.__svelte = {})).v ?? (ia.v = /* @__PURE__ */ new Set())).add(Al);
var Cl = /* @__PURE__ */ N('<div class="flex flex-col items-center justify-center py-20 px-6"><div class="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-10 max-w-md w-full text-center space-y-5"><div class="mx-auto w-16 h-16 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-3xl">🔔</div> <h2 class="text-2xl font-bold text-gray-900 dark:text-white">Welcome to your Dashboard</h2> <p class="text-gray-500 dark:text-gray-400">Please log in to access your member dashboard, notifications, invoices, and more.</p> <button class="w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors">Log In</button></div></div>'), Tl = /* @__PURE__ */ N('<div class="flex flex-col justify-center items-center p-16 bg-white dark:bg-gray-800 rounded-2xl shadow-sm"><div class="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600"></div> <p class="mt-4 text-lg text-gray-500 dark:text-gray-400">Loading dashboard…</p></div>'), Nl = /* @__PURE__ */ N('<div class="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-4 text-red-700 dark:text-red-300"><span class="font-medium">Error:</span> </div>'), Ml = /* @__PURE__ */ N("<span> </span>"), Pl = /* @__PURE__ */ N('<div class="flex justify-between text-sm border-b border-gray-100 dark:border-gray-700 pb-1"><span class="text-gray-500 dark:text-gray-400 capitalize"> </span> <span class="font-medium text-gray-800 dark:text-gray-200"> </span></div>'), Il = /* @__PURE__ */ N('<div class="mt-4 space-y-2"></div>'), Dl = /* @__PURE__ */ N('<section><div class="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6"><div class="flex items-center justify-between"><h2 class="text-xl font-bold text-gray-900 dark:text-white">Citizenship Status</h2> <!></div> <!></div></section>'), Ol = /* @__PURE__ */ N('<span class="inline-flex items-center justify-center px-2 py-0.5 text-xs font-bold text-white bg-red-500 rounded-full"> </span>'), Rl = /* @__PURE__ */ N('<div class="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-8 flex justify-center"><div class="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div></div>'), Fl = /* @__PURE__ */ N('<div class="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-8 text-center text-gray-500 dark:text-gray-400"><div class="text-3xl mb-2">🔔</div> No notifications</div>'), jl = /* @__PURE__ */ N('<div class="w-2 h-2 bg-blue-500 rounded-full mt-1.5"></div>'), Ll = /* @__PURE__ */ N('<div class="mt-3 pt-3 border-t border-gray-100 dark:border-gray-700 text-sm text-gray-700 dark:text-gray-300 leading-relaxed"></div>'), Bl = /* @__PURE__ */ N('<tr><td class="px-3 py-3 align-top"><!></td><td class="px-3 py-3"><div> </div> <!></td><td class="px-3 py-3 align-top text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap hidden md:table-cell"> </td><td class="px-3 py-3 align-top text-xs text-gray-400 dark:text-gray-500 whitespace-nowrap hidden sm:table-cell"> </td><td class="px-3 py-3 align-top"><div class="flex justify-end gap-1"><button> </button> <button class="p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"> </button> <button title="Delete" class="p-1 rounded hover:bg-red-50 dark:hover:bg-red-900/20 text-gray-400 hover:text-red-500 transition-colors">🗑</button></div></td></tr>'), Hl = /* @__PURE__ */ N('<div class="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-x-auto"><table class="w-full"><thead><tr class="bg-gray-50 dark:bg-gray-750 border-b border-gray-200 dark:border-gray-700 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"><th class="w-8 px-3 py-2"></th><th class="text-left px-3 py-2">Subject</th><th class="text-left px-3 py-2 whitespace-nowrap hidden md:table-cell">From</th><th class="text-left px-3 py-2 whitespace-nowrap hidden sm:table-cell">Date</th><th class="w-24 px-3 py-2 text-right">Actions</th></tr></thead><tbody></tbody></table></div>'), ql = /* @__PURE__ */ N('<div class="flex flex-col justify-center items-center p-12 bg-gray-50 dark:bg-gray-800/50 rounded-xl"><div class="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div> <p class="mt-4 text-gray-500 dark:text-gray-400">Loading invoices…</p></div>'), zl = /* @__PURE__ */ N('<div class="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-4 text-red-700 dark:text-red-300"> </div>'), Ul = /* @__PURE__ */ N('<div class="flex items-center gap-2 flex-wrap"><button class="px-3 py-1 text-xs font-medium bg-gray-800 dark:bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors">💳 Pay</button> <button class="px-2 py-1 text-xs border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition-colors">↻ Refresh</button> <button class="px-2 py-1 text-xs border border-gray-200 dark:border-gray-600 rounded hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400 transition-colors">Demo Pay</button></div>'), Jl = /* @__PURE__ */ N('<span class="text-xs text-gray-400 dark:text-gray-500"> </span>'), Vl = /* @__PURE__ */ N('<tr class="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-750"><td class="px-4 py-3"><div class="font-medium text-gray-900 dark:text-white text-sm"> </div></td><td class="px-4 py-3 font-semibold text-gray-900 dark:text-white"> </td><td class="px-4 py-3 text-gray-700 dark:text-gray-300"> </td><td class="px-4 py-3"><span> </span></td><td class="px-4 py-3"><!></td></tr>'), Wl = /* @__PURE__ */ N('<div class="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-x-auto"><table class="w-full text-sm text-left"><thead class="text-xs text-gray-700 dark:text-gray-400 uppercase bg-gray-50 dark:bg-gray-750"><tr><th class="px-4 py-3">Description</th><th class="px-4 py-3">Amount</th><th class="px-4 py-3">Currency</th><th class="px-4 py-3">Status</th><th class="px-4 py-3">Actions</th></tr></thead><tbody></tbody></table></div>'), Gl = /* @__PURE__ */ N('<div class="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 text-center text-gray-500 dark:text-gray-400">No invoices yet.</div>'), Yl = /* @__PURE__ */ N('<div class="flex justify-center py-8"><div class="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div></div>'), Kl = /* @__PURE__ */ N('<div class="bg-gray-50 dark:bg-gray-750 rounded-lg p-4"><div class="grid grid-cols-2 gap-4 text-sm"><div><span class="text-gray-500 dark:text-gray-400">Invoice ID:</span> <span class="ml-2 font-medium text-gray-900 dark:text-white"> </span></div> <div><span class="text-gray-500 dark:text-gray-400">Amount Due:</span> <span class="ml-2 font-bold text-gray-900 dark:text-white"> </span></div></div></div> <div><h4 class="font-semibold text-gray-900 dark:text-white mb-3">Transfer Details</h4> <div class="space-y-3"><div><label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Owner (Canister ID)</label> <code class="block px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded font-mono text-sm break-all text-gray-800 dark:text-gray-200"> </code></div> <div><label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Subaccount (Hex)</label> <code class="block px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded font-mono text-xs break-all text-gray-800 dark:text-gray-200"> </code></div></div></div> <div><h4 class="font-semibold text-gray-900 dark:text-white mb-2">ICW CLI Command</h4> <div class="bg-gray-900 rounded-lg p-4 relative"><pre class="text-green-400 font-mono text-sm whitespace-pre-wrap"> </pre> <button class="absolute top-2 right-2 p-2 rounded hover:bg-gray-700 transition-colors text-gray-400 hover:text-white text-sm"> </button></div> <p class="text-sm text-gray-500 dark:text-gray-400 mt-2">Install ICW: <code class="bg-gray-100 dark:bg-gray-700 px-1 rounded text-xs">pip install icw</code></p></div>', 1), Xl = /* @__PURE__ */ N('<div class="text-red-600 dark:text-red-400 text-center py-4">Failed to load payment details.</div>'), Zl = /* @__PURE__ */ N('<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/50"><div class="bg-white dark:bg-gray-800 rounded-xl shadow-xl max-w-lg w-full mx-4 max-h-[90vh] overflow-y-auto"><div class="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-700"><h3 class="text-lg font-semibold text-gray-900 dark:text-white">💳 Payment Instructions</h3> <button class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 text-xl">&times;</button></div> <div class="p-6 space-y-5"><!></div> <div class="flex justify-end px-6 py-4 border-t border-gray-200 dark:border-gray-700"><button class="px-4 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition-colors">Close</button></div></div></div>'), Ql = /* @__PURE__ */ N("<option> </option>"), $l = /* @__PURE__ */ N("<option> </option>"), eo = /* @__PURE__ */ N('<div class="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 mb-4 space-y-4"><div><label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Label</label> <input type="text" placeholder="e.g. My ICP Wallet" class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"/></div> <div class="grid grid-cols-1 sm:grid-cols-2 gap-4"><div><label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Network</label> <select class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-blue-500 outline-none"></select></div> <div><label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Currency</label> <select class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-blue-500 outline-none"></select></div></div> <div><label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Address</label> <input type="text" placeholder="Wallet address or IBAN" class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"/></div> <div class="flex justify-end gap-2"><button class="px-4 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition-colors">Cancel</button> <button class="px-4 py-2 text-sm bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white rounded-lg transition-colors"> </button></div></div>'), to = /* @__PURE__ */ N('<div class="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-8 flex justify-center"><div class="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div></div>'), ro = /* @__PURE__ */ N('<div class="bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-8 text-center"><p class="text-gray-600 dark:text-gray-400">No payment accounts yet.</p> <p class="text-sm text-gray-500 dark:text-gray-500 mt-2">Add a payment account to receive and send payments.</p></div>'), no = /* @__PURE__ */ N('<span class="text-xs px-2 py-0.5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full">✓ Verified</span>'), ao = /* @__PURE__ */ N('<span class="text-xs text-gray-500 dark:text-gray-400"> </span>'), io = /* @__PURE__ */ N("<span></span>"), so = /* @__PURE__ */ N('<div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5 hover:shadow-md transition-shadow"><div class="flex items-center justify-between mb-2"><strong class="text-lg text-gray-900 dark:text-white"> </strong> <!></div> <div class="flex gap-2 mb-3"><span class="text-xs px-2 py-0.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full"> </span> <span class="text-xs px-2 py-0.5 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 rounded-full"> </span></div> <div class="bg-gray-50 dark:bg-gray-750 rounded-lg px-3 py-2 mb-3 overflow-x-auto"><code class="font-mono text-sm text-gray-700 dark:text-gray-300 break-all"> </code></div> <div class="flex items-center justify-between"><!> <button class="text-xs px-2 py-1 text-red-500 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20 rounded transition-colors">🗑 Remove</button></div></div>'), lo = /* @__PURE__ */ N('<div class="grid grid-cols-1 md:grid-cols-2 gap-4"></div>'), oo = /* @__PURE__ */ N('<!> <section><div class="flex items-center justify-between mb-4"><div class="flex items-center gap-2"><h2 class="text-xl font-bold text-gray-900 dark:text-white">Notifications</h2> <!></div></div> <!></section> <section><h2 class="text-xl font-bold text-gray-900 dark:text-white mb-1">Invoices</h2> <p class="text-gray-500 dark:text-gray-400 text-sm mb-4">Manage your invoices and payment records</p> <!></section> <!> <section><div class="flex items-center justify-between mb-4"><h2 class="text-xl font-bold text-gray-900 dark:text-white">Payment Accounts</h2> <button class="px-3 py-1.5 text-sm border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition-colors">+ Add Account</button></div> <!> <!></section>', 1), uo = /* @__PURE__ */ N('<div><h1 class="text-3xl font-bold text-gray-900 dark:text-white"> <span class="text-gray-500 dark:text-gray-400"> </span></h1></div> <!>', 1), fo = /* @__PURE__ */ N('<div class="w-full max-w-5xl mx-auto px-4 py-6 font-sans space-y-8"><!></div>');
function co(e, t) {
  ca(t, !0);
  const r = t.ctx.theme?.cn ?? ((...p) => p.filter(Boolean).join(" "));
  let n = /* @__PURE__ */ F(null), a = /* @__PURE__ */ F(null), i = /* @__PURE__ */ F(Ct([])), f = /* @__PURE__ */ F(!0), l = /* @__PURE__ */ F(""), o = /* @__PURE__ */ F(!0), u = /* @__PURE__ */ F(null), _ = /* @__PURE__ */ F(null), b = /* @__PURE__ */ F(!0), g = /* @__PURE__ */ F(""), h = /* @__PURE__ */ F(Ct([])), c = /* @__PURE__ */ F(!0), C = /* @__PURE__ */ F(""), S = /* @__PURE__ */ F(!1), j = /* @__PURE__ */ F(""), M = /* @__PURE__ */ F(""), re = /* @__PURE__ */ F("ICP"), ie = /* @__PURE__ */ F("ICP"), Ie = /* @__PURE__ */ F(!1), be = /* @__PURE__ */ F(!1), G = /* @__PURE__ */ F(null), ve = /* @__PURE__ */ F(!1), Je = /* @__PURE__ */ F(null), ar = /* @__PURE__ */ F(!1);
  const Vr = [
    { value: "ICP", label: "Internet Computer (ICP)" },
    { value: "Bitcoin", label: "Bitcoin" },
    { value: "Ethereum", label: "Ethereum" },
    { value: "SEPA", label: "SEPA Bank Transfer" }
  ], Nn = {
    ICP: [
      { value: "ICP", label: "ICP" },
      { value: "ckBTC", label: "ckBTC" },
      { value: "ckETH", label: "ckETH" }
    ],
    Bitcoin: [{ value: "BTC", label: "Bitcoin (BTC)" }],
    Ethereum: [
      { value: "ETH", label: "Ethereum (ETH)" },
      { value: "USDC", label: "USDC" },
      { value: "USDT", label: "USDT" }
    ],
    SEPA: [{ value: "EUR", label: "Euro (EUR)" }]
  };
  let $a = /* @__PURE__ */ lr(() => Nn[d(re)] || []);
  Xn(() => {
    const p = Nn[d(re)] || [];
    p.length > 0 && !p.find((m) => m.value === d(ie)) && y(ie, p[0].value, !0);
  });
  function ei() {
    const p = (/* @__PURE__ */ new Date()).getHours();
    return p < 12 ? "Good morning" : p < 18 ? "Good afternoon" : "Good evening";
  }
  let Mn = /* @__PURE__ */ lr(() => d(i).filter((p) => !p.read).length);
  async function Ve(p, m = "{}", B = "member_dashboard") {
    const Ee = await t.ctx.backend.extension_sync_call(JSON.stringify({ extension_name: B, function_name: p, args: m })), We = typeof Ee == "string" ? JSON.parse(Ee) : Ee;
    return We?.success && We?.response ? JSON.parse(We.response) : We;
  }
  async function ti() {
    y(f, !0), y(l, "");
    try {
      const p = JSON.stringify({ user_id: t.ctx.principal || "" }), [m, B] = await Promise.all([
        Ve("get_dashboard_summary", p).catch(() => null),
        Ve("get_citizenship_status", p).catch(() => null)
      ]);
      y(n, m?.data ?? m, !0), y(a, B?.data ?? B, !0);
    } catch (p) {
      y(l, p?.message || String(p), !0);
    } finally {
      y(f, !1);
    }
  }
  async function ri() {
    y(o, !0);
    try {
      const p = JSON.stringify({ user_id: t.ctx.principal || "" }), m = await Ve("get_notifications", p, "notifications").catch(() => ({ data: [] })), B = m?.data ?? m?.notifications ?? m;
      y(i, Array.isArray(B) ? B : [], !0);
    } catch {
      y(i, [], !0);
    } finally {
      y(o, !1);
    }
  }
  async function Wr() {
    y(b, !0), y(g, "");
    try {
      const p = JSON.stringify({ user_id: t.ctx.principal || "" }), m = await Ve("get_invoice_information", p);
      m?.success ? y(_, m.data, !0) : y(g, m?.error || "Failed to load invoices", !0);
    } catch (p) {
      y(g, p?.message || String(p), !0);
    } finally {
      y(b, !1);
    }
  }
  async function Gr() {
    y(c, !0), y(C, "");
    try {
      const p = JSON.stringify({ user_id: t.ctx.principal || "" }), m = await Ve("list_payment_accounts", p);
      m?.success && m?.data ? y(h, m.data, !0) : y(h, [], !0);
    } catch {
      y(h, [], !0);
    } finally {
      y(c, !1);
    }
  }
  Xn(() => {
    if (!t.ctx.isAuthenticated) {
      y(f, !1), y(o, !1), y(b, !1), y(c, !1);
      return;
    }
    Promise.all([
      ti(),
      ri(),
      Wr(),
      Gr()
    ]);
  });
  async function Pn(p) {
    try {
      const m = !p.read;
      await Ve("mark_as_read", JSON.stringify({ id: p.id, read: m }), "notifications"), y(i, d(i).map((B) => B.id === p.id ? { ...B, read: m } : B), !0);
    } catch {
    }
  }
  async function ni(p) {
    try {
      await Ve("delete_notification", JSON.stringify({ id: p.id }), "notifications"), y(i, d(i).filter((m) => m.id !== p.id), !0);
    } catch {
    }
  }
  function In(p) {
    d(u) === p.id ? y(u, null) : (y(u, p.id, !0), p.read || Pn(p));
  }
  function ai(p) {
    return p ? p.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/\*(.+?)\*/g, "<em>$1</em>").replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-blue-600 underline hover:text-blue-800" target="_blank" rel="noopener">$1</a>').replace(/`([^`]+)`/g, '<code class="bg-gray-100 dark:bg-gray-700 px-1 py-0.5 rounded text-xs">$1</code>').replace(/^\s*[-*]\s+(.+)$/gm, '<li class="ml-4">$1</li>').replace(/(<li.*<\/li>\n?)+/g, (m) => '<ul class="list-disc ml-2 space-y-1">' + m + "</ul>").replace(/\n{2,}/g, '</p><p class="mt-2">').replace(/\n/g, "<br>").replace(/^/, "<p>").replace(/$/, "</p>") : "";
  }
  function ii(p) {
    if (!p) return "";
    const m = Date.now() - p;
    if (m < 0) return "just now";
    const B = Math.floor(m / 1e3);
    if (B < 60) return "just now";
    const Ee = Math.floor(B / 60);
    if (Ee < 60) return `${Ee}m ago`;
    const We = Math.floor(Ee / 60);
    if (We < 24) return `${We}h ago`;
    const ir = Math.floor(We / 24);
    if (ir < 30) return `${ir}d ago`;
    const sr = Math.floor(ir / 30);
    return sr < 12 ? `${sr}mo ago` : `${Math.floor(sr / 12)}y ago`;
  }
  function si(p) {
    if (!p) return "";
    const m = new Date(p), B = (Ee) => String(Ee).padStart(2, "0");
    return `${m.getFullYear()}-${B(m.getMonth() + 1)}-${B(m.getDate())} ${B(m.getHours())}:${B(m.getMinutes())}`;
  }
  function li(p) {
    switch (p?.toLowerCase()) {
      case "paid":
        return "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400";
      case "pending":
        return "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-400";
      case "overdue":
        return "bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-400";
      case "processing":
        return "bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-400";
      default:
        return "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400";
    }
  }
  async function oi(p) {
    y(Je, p, !0), y(be, !0), y(ve, !0), y(G, null);
    try {
      const m = await Ve("get_invoice_deposit_address", JSON.stringify({ invoice_id: p.id }));
      m?.success && y(G, m.data, !0);
    } catch {
    } finally {
      y(ve, !1);
    }
  }
  function ui(p) {
    try {
      const m = document.createElement("textarea");
      m.value = p, m.style.position = "fixed", m.style.left = "-9999px", document.body.appendChild(m), m.select(), document.execCommand("copy"), document.body.removeChild(m), y(ar, !0), setTimeout(
        () => {
          y(ar, !1);
        },
        2e3
      );
    } catch {
    }
  }
  async function fi(p) {
    try {
      const m = await t.ctx.backend.refresh_invoice(JSON.stringify({ invoice_id: p.id }));
      (typeof m == "string" ? JSON.parse(m) : m)?.success && await Wr();
    } catch {
    }
  }
  async function di(p) {
    try {
      (await Ve("demo_mark_invoice_paid", JSON.stringify({ invoice_id: p.id })))?.success && await Wr();
    } catch {
    }
  }
  async function ci() {
    if (!(!d(M) || !d(j))) {
      y(Ie, !0);
      try {
        (await Ve("add_payment_account", JSON.stringify({
          user_id: t.ctx.principal || "",
          address: d(M),
          label: d(j),
          network: d(re),
          currency: d(ie)
        })))?.success && (await Gr(), y(j, ""), y(M, ""), y(re, "ICP"), y(ie, "ICP"), y(S, !1));
      } catch {
      } finally {
        y(Ie, !1);
      }
    }
  }
  async function vi(p) {
    try {
      (await Ve("remove_payment_account", JSON.stringify({ user_id: t.ctx.principal || "", account_id: p })))?.success && await Gr();
    } catch {
    }
  }
  function Yr(p) {
    return !p || typeof p != "object" ? [] : Object.entries(p).filter(([m]) => !m.startsWith("_"));
  }
  var Dn = fo(), hi = v(Dn);
  {
    var _i = (p) => {
      var m = Cl(), B = v(m), Ee = x(v(B), 6);
      ne("click", Ee, () => t.ctx.navigate?.("/join")), T(p, m);
    }, gi = (p) => {
      var m = uo(), B = en(m), Ee = v(B), We = v(Ee), ir = x(We), sr = v(ir), pi = x(B, 2);
      {
        var bi = (Ge) => {
          var kt = Tl();
          T(Ge, kt);
        }, yi = (Ge) => {
          var kt = Nl(), Tr = x(v(kt));
          fe(() => R(Tr, ` ${d(l) ?? ""}`)), T(Ge, kt);
        }, xi = (Ge) => {
          var kt = oo(), Tr = en(kt);
          {
            var mi = (w) => {
              var P = Dl(), se = v(P), Y = v(se), he = x(v(Y), 2);
              {
                var k = (V) => {
                  var Z = Ml(), Q = v(Z);
                  fe(
                    (H) => {
                      dr(Z, 1, H), R(Q, `${d(a).status === "active" ? "✓" : "✗"}
									${(d(a).status_label || d(a).status) ?? ""}`);
                    },
                    [
                      () => fr(r("inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-semibold", d(a).status === "active" ? "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400" : "bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-400"))
                    ]
                  ), T(V, Z);
                };
                oe(he, (V) => {
                  d(a).status && V(k);
                });
              }
              var le = x(Y, 2);
              {
                var Se = (V) => {
                  var Z = Il();
                  Ut(Z, 21, () => Yr(d(a)).filter(([Q]) => Q !== "status" && Q !== "status_label"), or, (Q, H) => {
                    var $ = /* @__PURE__ */ lr(() => ts(d(H), 2));
                    let Ae = () => d($)[0], L = () => d($)[1];
                    var ee = Pl(), z = v(ee), Ce = v(z), ue = x(z, 2), $e = v(ue);
                    fe(
                      (K, ye) => {
                        R(Ce, K), R($e, ye);
                      },
                      [
                        () => Ae().replace(/_/g, " "),
                        () => typeof L() == "object" ? JSON.stringify(L()) : L()
                      ]
                    ), T(Q, ee);
                  }), T(V, Z);
                }, De = /* @__PURE__ */ lr(() => Yr(d(a)).filter(([V]) => V !== "status" && V !== "status_label").length > 0);
                oe(le, (V) => {
                  d(De) && V(Se);
                });
              }
              T(w, P);
            }, wi = /* @__PURE__ */ lr(() => d(a) && Yr(d(a)).length > 0);
            oe(Tr, (w) => {
              d(wi) && w(mi);
            });
          }
          var On = x(Tr, 2), Rn = v(On), ki = v(Rn), Ei = x(v(ki), 2);
          {
            var Si = (w) => {
              var P = Ol(), se = v(P);
              fe(() => R(se, d(Mn))), T(w, P);
            };
            oe(Ei, (w) => {
              d(Mn) > 0 && w(Si);
            });
          }
          var Ai = x(Rn, 2);
          {
            var Ci = (w) => {
              var P = Rl();
              T(w, P);
            }, Ti = (w) => {
              var P = Fl();
              T(w, P);
            }, Ni = (w) => {
              var P = Hl(), se = v(P), Y = x(v(se));
              Ut(Y, 21, () => d(i), (he) => he.id, (he, k) => {
                var le = Bl(), Se = v(le), De = v(Se);
                {
                  var V = (_e) => {
                    var ht = jl();
                    T(_e, ht);
                  };
                  oe(De, (_e) => {
                    d(k).read || _e(V);
                  });
                }
                var Z = x(Se), Q = v(Z), H = v(Q), $ = x(Q, 2);
                {
                  var Ae = (_e) => {
                    var ht = Ll();
                    bl(ht, () => ai(d(k).message || d(k).body), !0), T(_e, ht);
                  };
                  oe($, (_e) => {
                    d(u) === d(k).id && (d(k).message || d(k).body) && _e(Ae);
                  });
                }
                var L = x(Z), ee = v(L), z = x(L), Ce = v(z), ue = x(z), $e = v(ue), K = v($e), ye = v(K), U = x(K, 2), xe = v(U), Et = x(U, 2);
                fe(
                  (_e, ht, Kr, Xr, Zr) => {
                    dr(le, 1, _e), dr(Q, 1, ht), R(H, d(k).title || "Notification"), R(ee, d(k).sender || "—"), tn(z, "title", Kr), R(Ce, Xr), tn(K, "title", d(u) === d(k).id ? "Collapse" : "Read message"), dr(K, 1, Zr), R(ye, d(u) === d(k).id ? "👁‍🗨" : "👁"), tn(U, "title", d(k).read ? "Mark as unread" : "Mark as read"), R(xe, d(k).read ? "✉" : "📬");
                  },
                  [
                    () => fr(r("border-b border-gray-100 dark:border-gray-700 last:border-b-0 cursor-pointer transition-colors", d(k).read ? "hover:bg-gray-50 dark:hover:bg-gray-750" : "bg-blue-50/50 dark:bg-blue-900/10 hover:bg-blue-50 dark:hover:bg-blue-900/20")),
                    () => fr(r("truncate text-sm", d(k).read ? "text-gray-600 dark:text-gray-400" : "font-semibold text-gray-900 dark:text-white")),
                    () => si(d(k).timestamp_ms),
                    () => ii(d(k).timestamp_ms),
                    () => fr(r("p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors", d(u) === d(k).id ? "text-blue-500" : "text-gray-400"))
                  ]
                ), ne("click", le, () => In(d(k))), ne("click", $e, (_e) => _e.stopPropagation()), ne("click", K, () => In(d(k))), ne("click", U, () => Pn(d(k))), ne("click", Et, () => ni(d(k))), T(he, le);
              }), T(w, P);
            };
            oe(Ai, (w) => {
              d(o) ? w(Ci) : d(i).length === 0 ? w(Ti, 1) : w(Ni, -1);
            });
          }
          var Fn = x(On, 2), Mi = x(v(Fn), 4);
          {
            var Pi = (w) => {
              var P = ql();
              T(w, P);
            }, Ii = (w) => {
              var P = zl(), se = v(P);
              fe(() => R(se, d(g))), T(w, P);
            }, Di = (w) => {
              var P = Wl(), se = v(P), Y = x(v(se));
              Ut(Y, 21, () => d(_).invoices, or, (he, k) => {
                var le = Vl(), Se = v(le), De = v(Se), V = v(De), Z = x(Se), Q = v(Z), H = x(Z), $ = v(H), Ae = x(H), L = v(Ae), ee = v(L), z = x(Ae), Ce = v(z);
                {
                  var ue = (K) => {
                    var ye = Ul(), U = v(ye), xe = x(U, 2), Et = x(xe, 2);
                    ne("click", U, () => oi(d(k))), ne("click", xe, () => fi(d(k))), ne("click", Et, () => di(d(k))), T(K, ye);
                  }, $e = (K) => {
                    var ye = Jl(), U = v(ye);
                    fe(() => R(U, d(k).paid_on || "—")), T(K, ye);
                  };
                  oe(Ce, (K) => {
                    d(k).status === "Pending" || d(k).status === "Overdue" ? K(ue) : K($e, -1);
                  });
                }
                fe(
                  (K) => {
                    R(V, d(k).metadata || "Invoice"), R(Q, d(k).amount), R($, d(k).currency || "ckBTC"), dr(L, 1, K), R(ee, d(k).status);
                  },
                  [
                    () => fr(r("px-2.5 py-0.5 text-xs font-medium rounded-full", li(d(k).status)))
                  ]
                ), T(he, le);
              }), T(w, P);
            }, Oi = (w) => {
              var P = Gl();
              T(w, P);
            };
            oe(Mi, (w) => {
              d(b) ? w(Pi) : d(g) ? w(Ii, 1) : d(_)?.invoices?.length > 0 ? w(Di, 2) : w(Oi, -1);
            });
          }
          var jn = x(Fn, 2);
          {
            var Ri = (w) => {
              var P = Zl(), se = v(P), Y = v(se), he = x(v(Y), 2), k = x(Y, 2), le = v(k);
              {
                var Se = (H) => {
                  var $ = Yl();
                  T(H, $);
                }, De = (H) => {
                  var $ = Kl(), Ae = en($), L = v(Ae), ee = v(L), z = x(v(ee), 2), Ce = v(z), ue = x(ee, 2), $e = x(v(ue), 2), K = v($e), ye = x(Ae, 2), U = x(v(ye), 2), xe = v(U), Et = x(v(xe), 2), _e = v(Et), ht = x(xe, 2), Kr = x(v(ht), 2), Xr = v(Kr), Zr = x(ye, 2), Ui = x(v(Zr), 2), Hn = v(Ui), Ji = v(Hn), qn = x(Hn, 2), Vi = v(qn);
                  fe(() => {
                    R(Ce, d(G).invoice_id), R(K, `${d(G).amount_due ?? ""} ${d(G).currency ?? ""}`), R(_e, d(G).owner), R(Xr, d(G).subaccount), R(Ji, `icw --token ckbtc transfer \\
  ${d(G).owner ?? ""} ${d(G).amount_due ?? ""} \\
  --subaccount ${d(G).subaccount ?? ""}`), R(Vi, d(ar) ? "✓" : "📋");
                  }), ne("click", qn, () => ui(`icw --token ckbtc transfer ${d(G).owner} ${d(G).amount_due} --subaccount ${d(G).subaccount}`)), T(H, $);
                }, V = (H) => {
                  var $ = Xl();
                  T(H, $);
                };
                oe(le, (H) => {
                  d(ve) ? H(Se) : d(G) ? H(De, 1) : H(V, -1);
                });
              }
              var Z = x(k, 2), Q = v(Z);
              ne("click", P, () => y(be, !1)), ne("click", se, (H) => H.stopPropagation()), ne("click", he, () => y(be, !1)), ne("click", Q, () => y(be, !1)), T(w, P);
            };
            oe(jn, (w) => {
              d(be) && w(Ri);
            });
          }
          var Fi = x(jn, 2), Ln = v(Fi), ji = x(v(Ln), 2), Bn = x(Ln, 2);
          {
            var Li = (w) => {
              var P = eo(), se = v(P), Y = x(v(se), 2), he = x(se, 2), k = v(he), le = x(v(k), 2);
              Ut(le, 21, () => Vr, or, (L, ee) => {
                var z = Ql(), Ce = v(z), ue = {};
                fe(() => {
                  R(Ce, d(ee).label), ue !== (ue = d(ee).value) && (z.value = (z.__value = d(ee).value) ?? "");
                }), T(L, z);
              });
              var Se = x(k, 2), De = x(v(Se), 2);
              Ut(De, 21, () => d($a), or, (L, ee) => {
                var z = $l(), Ce = v(z), ue = {};
                fe(() => {
                  R(Ce, d(ee).label), ue !== (ue = d(ee).value) && (z.value = (z.__value = d(ee).value) ?? "");
                }), T(L, z);
              });
              var V = x(he, 2), Z = x(v(V), 2), Q = x(V, 2), H = v(Q), $ = x(H, 2), Ae = v($);
              fe(() => {
                $.disabled = d(Ie) || !d(j) || !d(M), R(Ae, d(Ie) ? "Saving…" : "Save");
              }), aa(Y, () => d(j), (L) => y(j, L)), ra(le, () => d(re), (L) => y(re, L)), ra(De, () => d(ie), (L) => y(ie, L)), aa(Z, () => d(M), (L) => y(M, L)), ne("click", H, () => {
                y(S, !1), y(j, ""), y(M, "");
              }), ne("click", $, ci), T(w, P);
            };
            oe(Bn, (w) => {
              d(S) && w(Li);
            });
          }
          var Bi = x(Bn, 2);
          {
            var Hi = (w) => {
              var P = to();
              T(w, P);
            }, qi = (w) => {
              var P = ro();
              T(w, P);
            }, zi = (w) => {
              var P = lo();
              Ut(P, 21, () => d(h), or, (se, Y) => {
                var he = so(), k = v(he), le = v(k), Se = v(le), De = x(le, 2);
                {
                  var V = (U) => {
                    var xe = no();
                    T(U, xe);
                  };
                  oe(De, (U) => {
                    d(Y).is_verified && U(V);
                  });
                }
                var Z = x(k, 2), Q = v(Z), H = v(Q), $ = x(Q, 2), Ae = v($), L = x(Z, 2), ee = v(L), z = v(ee), Ce = x(L, 2), ue = v(Ce);
                {
                  var $e = (U) => {
                    var xe = ao(), Et = v(xe);
                    fe((_e) => R(Et, `Created: ${_e ?? ""}`), [
                      () => new Date(d(Y).created_at).toLocaleDateString()
                    ]), T(U, xe);
                  }, K = (U) => {
                    var xe = io();
                    T(U, xe);
                  };
                  oe(ue, (U) => {
                    d(Y).created_at ? U($e) : U(K, -1);
                  });
                }
                var ye = x(ue, 2);
                fe(() => {
                  R(Se, d(Y).label), R(H, d(Y).network), R(Ae, d(Y).currency), R(z, d(Y).address);
                }), ne("click", ye, () => vi(d(Y).id)), T(se, he);
              }), T(w, P);
            };
            oe(Bi, (w) => {
              d(c) && d(h).length === 0 ? w(Hi) : d(h).length === 0 ? w(qi, 1) : w(zi, -1);
            });
          }
          ne("click", ji, () => y(S, !d(S))), T(Ge, kt);
        };
        oe(pi, (Ge) => {
          d(f) ? Ge(bi) : d(l) ? Ge(yi, 1) : Ge(xi, -1);
        });
      }
      fe(
        (Ge) => {
          R(We, `${Ge ?? ""}, `), R(sr, d(n)?.user_name || "Member");
        },
        [() => ei()]
      ), T(p, m);
    };
    oe(hi, (p) => {
      t.ctx.isAuthenticated ? p(gi, -1) : p(_i);
    });
  }
  T(e, Dn), va();
}
ll(["click"]);
function _o(e, t) {
  const r = dl(co, { target: e, props: { ctx: t } });
  return {
    unmount() {
      try {
        vl(r);
      } catch {
      }
    }
  };
}
export {
  _o as default
};
