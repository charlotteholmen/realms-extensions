var Gi = Object.defineProperty;
var zn = (e) => {
  throw TypeError(e);
};
var Yi = (e, t, r) => t in e ? Gi(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var Ye = (e, t, r) => Yi(e, typeof t != "symbol" ? t + "" : t, r), Qr = (e, t, r) => t.has(e) || zn("Cannot " + r);
var s = (e, t, r) => (Qr(e, t, "read from private field"), r ? r.call(e) : t.get(e)), A = (e, t, r) => t.has(e) ? zn("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), I = (e, t, r, n) => (Qr(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r), q = (e, t, r) => (Qr(e, t, "access private method"), r);
var pn = Array.isArray, Ji = Array.prototype.indexOf, Xt = Array.prototype.includes, zr = Array.from, Ki = Object.defineProperty, cr = Object.getOwnPropertyDescriptor, Xi = Object.getOwnPropertyDescriptors, Zi = Object.prototype, Qi = Array.prototype, sa = Object.getPrototypeOf, Un = Object.isExtensible;
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
const ce = 2, Zt = 4, Ur = 8, oa = 1 << 24, rt = 16, Ze = 32, xt = 64, an = 128, Be = 512, te = 1024, de = 2048, nt = 4096, pe = 8192, He = 16384, qt = 32768, Vn = 1 << 25, Qt = 65536, sn = 1 << 17, rs = 1 << 18, rr = 1 << 19, ns = 1 << 20, dt = 1 << 25, Lt = 65536, Fr = 1 << 21, pr = 1 << 22, yt = 1 << 23, vr = Symbol("$state"), st = new class extends Error {
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
function $t(e) {
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
      R
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
      Oa(n);
  }
  return t.i = !0, ze = t.p, /** @type {T} */
  {};
}
function ha() {
  return !0;
}
let St = [];
function _a() {
  var e = St;
  St = [], es(e);
}
function Vt(e) {
  if (St.length === 0 && !hr) {
    var t = St;
    queueMicrotask(() => {
      t === St && _a();
    });
  }
  St.push(e);
}
function Ss() {
  for (; St.length > 0; )
    _a();
}
function ga(e) {
  var t = R;
  if (t === null)
    return D.f |= yt, e;
  if ((t.f & qt) === 0 && (t.f & Zt) === 0)
    throw e;
  pt(e, t);
}
function pt(e, t) {
  for (; t !== null; ) {
    if ((t.f & an) !== 0) {
      if ((t.f & qt) === 0)
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
function G(e, t) {
  e.f = e.f & As | t;
}
function bn(e) {
  (e.f & Be) !== 0 || e.deps === null ? G(e, te) : G(e, nt);
}
function pa(e) {
  if (e !== null)
    for (const t of e)
      (t.f & ce) === 0 || (t.f & Lt) === 0 || (t.f ^= Lt, pa(
        /** @type {Derived} */
        t.deps
      ));
}
function ba(e, t, r) {
  (e.f & de) !== 0 ? t.add(e) : (e.f & nt) !== 0 && r.add(e), pa(e.deps), G(e, te);
}
const Et = /* @__PURE__ */ new Set();
let E = null, Ke = null, ln = null, hr = !1, $r = !1, Ut = null, Mr = null;
var Wn = 0;
let Cs = 1;
var Wt, Gt, Mt, lt, $e, yr, Me, xr, _t, ot, et, Yt, Jt, Pt, X, Pr, ya, Nr, on, Ir, Ts;
const Br = class Br {
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
    A(this, lt, /* @__PURE__ */ new Map());
    /**
     * Async effects that are currently in flight, _not_ inside a pending boundary
     * @type {Map<Effect, number>}
     */
    A(this, $e, /* @__PURE__ */ new Map());
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    A(this, yr, null);
    /**
     * The root effects that need to be flushed
     * @type {Effect[]}
     */
    A(this, Me, []);
    /**
     * Effects created while this batch was active.
     * @type {Effect[]}
     */
    A(this, xr, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    A(this, _t, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    A(this, ot, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    A(this, et, /* @__PURE__ */ new Map());
    /**
     * Inverse of #skipped_branches which we need to tell prior batches to unskip them when committing
     * @type {Set<Effect>}
     */
    A(this, Yt, /* @__PURE__ */ new Set());
    Ye(this, "is_fork", !1);
    A(this, Jt, !1);
    /** @type {Set<Batch>} */
    A(this, Pt, /* @__PURE__ */ new Set());
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(t) {
    s(this, et).has(t) || s(this, et).set(t, { d: [], m: [] }), s(this, Yt).delete(t);
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   * @param {(e: Effect) => void} callback
   */
  unskip_effect(t, r = (n) => this.schedule(n)) {
    var n = s(this, et).get(t);
    if (n) {
      s(this, et).delete(t);
      for (var a of n.d)
        G(a, de), r(a);
      for (a of n.m)
        G(a, nt), r(a);
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
    t.v !== ae && !this.previous.has(t) && this.previous.set(t, t.v), (t.f & yt) === 0 && (this.current.set(t, [r, n]), Ke?.set(t, r)), this.is_fork || (t.v = r);
  }
  activate() {
    E = this;
  }
  deactivate() {
    E = null, Ke = null;
  }
  flush() {
    try {
      $r = !0, E = this, q(this, X, Nr).call(this);
    } finally {
      Wn = 0, ln = null, Ut = null, Mr = null, $r = !1, E = null, Ke = null, Rt.clear();
    }
  }
  discard() {
    for (const t of s(this, Gt)) t(this);
    s(this, Gt).clear(), s(this, Mt).clear(), Et.delete(this);
  }
  /**
   * @param {Effect} effect
   */
  register_created_effect(t) {
    s(this, xr).push(t);
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  increment(t, r) {
    let n = s(this, lt).get(r) ?? 0;
    if (s(this, lt).set(r, n + 1), t) {
      let a = s(this, $e).get(r) ?? 0;
      s(this, $e).set(r, a + 1);
    }
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   * @param {boolean} skip - whether to skip updates (because this is triggered by a stale reaction)
   */
  decrement(t, r, n) {
    let a = s(this, lt).get(r) ?? 0;
    if (a === 1 ? s(this, lt).delete(r) : s(this, lt).set(r, a - 1), t) {
      let i = s(this, $e).get(r) ?? 0;
      i === 1 ? s(this, $e).delete(r) : s(this, $e).set(r, i - 1);
    }
    s(this, Jt) || n || (I(this, Jt, !0), Vt(() => {
      I(this, Jt, !1), this.flush();
    }));
  }
  /**
   * @param {Set<Effect>} dirty_effects
   * @param {Set<Effect>} maybe_dirty_effects
   */
  transfer_effects(t, r) {
    for (const n of t)
      s(this, _t).add(n);
    for (const n of r)
      s(this, ot).add(n);
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
    return (s(this, yr) ?? I(this, yr, la())).promise;
  }
  static ensure() {
    if (E === null) {
      const t = E = new Br();
      $r || (Et.add(E), hr || Vt(() => {
        E === t && t.flush();
      }));
    }
    return E;
  }
  apply() {
    {
      Ke = null;
      return;
    }
  }
  /**
   *
   * @param {Effect} effect
   */
  schedule(t) {
    if (ln = t, t.b?.is_pending && (t.f & (Zt | Ur | oa)) !== 0 && (t.f & qt) === 0) {
      t.b.defer_effect(t);
      return;
    }
    for (var r = t; r.parent !== null; ) {
      r = r.parent;
      var n = r.f;
      if (Ut !== null && r === R && (D === null || (D.f & ce) === 0))
        return;
      if ((n & (xt | Ze)) !== 0) {
        if ((n & te) === 0)
          return;
        r.f ^= te;
      }
    }
    s(this, Me).push(r);
  }
};
Wt = new WeakMap(), Gt = new WeakMap(), Mt = new WeakMap(), lt = new WeakMap(), $e = new WeakMap(), yr = new WeakMap(), Me = new WeakMap(), xr = new WeakMap(), _t = new WeakMap(), ot = new WeakMap(), et = new WeakMap(), Yt = new WeakMap(), Jt = new WeakMap(), Pt = new WeakMap(), X = new WeakSet(), Pr = function() {
  return this.is_fork || s(this, $e).size > 0;
}, ya = function() {
  for (const n of s(this, Pt))
    for (const a of s(n, $e).keys()) {
      for (var t = !1, r = a; r.parent !== null; ) {
        if (s(this, et).has(r)) {
          t = !0;
          break;
        }
        r = r.parent;
      }
      if (!t)
        return !0;
    }
  return !1;
}, Nr = function() {
  var l;
  if (Wn++ > 1e3 && (Et.delete(this), Ps()), !q(this, X, Pr).call(this)) {
    for (const o of s(this, _t))
      s(this, ot).delete(o), G(o, de), this.schedule(o);
    for (const o of s(this, ot))
      G(o, nt), this.schedule(o);
  }
  const t = s(this, Me);
  I(this, Me, []), this.apply();
  var r = Ut = [], n = [], a = Mr = [];
  for (const o of t)
    try {
      q(this, X, on).call(this, o, r, n);
    } catch (u) {
      throw wa(o), u;
    }
  if (E = null, a.length > 0) {
    var i = Br.ensure();
    for (const o of a)
      i.schedule(o);
  }
  if (Ut = null, Mr = null, q(this, X, Pr).call(this) || q(this, X, ya).call(this)) {
    q(this, X, Ir).call(this, n), q(this, X, Ir).call(this, r);
    for (const [o, u] of s(this, et))
      ma(o, u);
  } else {
    s(this, lt).size === 0 && Et.delete(this), s(this, _t).clear(), s(this, ot).clear();
    for (const o of s(this, Wt)) o(this);
    s(this, Wt).clear(), Gn(n), Gn(r), s(this, yr)?.resolve();
  }
  var f = (
    /** @type {Batch | null} */
    /** @type {unknown} */
    E
  );
  if (s(this, Me).length > 0) {
    const o = f ?? (f = this);
    s(o, Me).push(...s(this, Me).filter((u) => !s(o, Me).includes(u)));
  }
  f !== null && (Et.add(f), q(l = f, X, Nr).call(l));
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
    var i = a.f, f = (i & (Ze | xt)) !== 0, l = f && (i & te) !== 0, o = l || (i & pe) !== 0 || s(this, et).has(a);
    if (!o && a.fn !== null) {
      f ? a.f ^= te : (i & Zt) !== 0 ? r.push(a) : Ar(a) && ((i & rt) !== 0 && s(this, ot).add(a), tr(a));
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
Ir = function(t) {
  for (var r = 0; r < t.length; r += 1)
    ba(t[r], s(this, _t), s(this, ot));
}, Ts = function() {
  var _, b, p;
  for (const h of Et) {
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
            (C.f & (rt | pr)) !== 0 ? h.schedule(C) : q(S = h, X, Ir).call(S, [C]);
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
      for (const c of s(this, xr))
        (c.f & (He | pe | sn)) === 0 && yn(c, o, f) && ((c.f & (pr | rt)) !== 0 ? (G(c, de), h.schedule(c)) : s(h, _t).add(c));
      if (s(h, Me).length > 0) {
        h.apply();
        for (var u of s(h, Me))
          q(_ = h, X, on).call(_, u, [], []);
        I(h, Me, []);
      }
      h.deactivate();
    }
  }
  for (const h of Et)
    s(h, Pt).has(this) && (s(h, Pt).delete(this), s(h, Pt).size === 0 && !q(b = h, X, Pr).call(b) && (h.activate(), q(p = h, X, Nr).call(p)));
};
let Bt = Br;
function Ms(e) {
  var t = hr;
  hr = !0;
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
    hr = t;
  }
}
function Ps() {
  try {
    us();
  } catch (e) {
    pt(e, ln);
  }
}
let it = null;
function Gn(e) {
  var t = e.length;
  if (t !== 0) {
    for (var r = 0; r < t; ) {
      var n = e[r++];
      if ((n.f & (He | pe)) === 0 && Ar(n) && (it = /* @__PURE__ */ new Set(), tr(n), n.deps === null && n.first === null && n.nodes === null && n.teardown === null && n.ac === null && Ba(n), it?.size > 0)) {
        Rt.clear();
        for (const a of it) {
          if ((a.f & (He | pe)) !== 0) continue;
          const i = [a];
          let f = a.parent;
          for (; f !== null; )
            it.has(f) && (it.delete(f), i.push(f)), f = f.parent;
          for (let l = i.length - 1; l >= 0; l--) {
            const o = i[l];
            (o.f & (He | pe)) === 0 && tr(o);
          }
        }
        it.clear();
      }
    }
    it = null;
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
      ) : (i & (pr | rt)) !== 0 && (i & de) === 0 && yn(a, t, n) && (G(a, de), xn(
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
      if (Xt.call(t, a))
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
  if (!((e.f & Ze) !== 0 && (e.f & te) !== 0)) {
    (e.f & de) !== 0 ? t.d.push(e) : (e.f & nt) !== 0 && t.m.push(e), G(e, te);
    for (var r = e.first; r !== null; )
      ma(r, t), r = r.next;
  }
}
function wa(e) {
  G(e, te);
  for (var t = e.first; t !== null; )
    wa(t), t = t.next;
}
function Ns(e) {
  let t = 0, r = Ht(0), n;
  return () => {
    En() && (d(r), Fa(() => (t === 0 && (n = Ka(() => e(() => _r(r)))), t += 1, () => {
      Vt(() => {
        t -= 1, t === 0 && (n?.(), n = void 0, _r(r));
      });
    })));
  };
}
var Is = Qt | rr;
function Ds(e, t, r, n) {
  new Rs(e, t, r, n);
}
var Oe, gn, Fe, Nt, me, je, ge, Pe, ut, It, gt, Kt, mr, wr, ft, Hr, V, Os, Fs, js, un, Dr, Rr, fn, dn;
class Rs {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(t, r, n, a) {
    A(this, V);
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
    A(this, Oe);
    /** @type {TemplateNode | null} */
    A(this, gn, null);
    /** @type {BoundaryProps} */
    A(this, Fe);
    /** @type {((anchor: Node) => void)} */
    A(this, Nt);
    /** @type {Effect} */
    A(this, me);
    /** @type {Effect | null} */
    A(this, je, null);
    /** @type {Effect | null} */
    A(this, ge, null);
    /** @type {Effect | null} */
    A(this, Pe, null);
    /** @type {DocumentFragment | null} */
    A(this, ut, null);
    A(this, It, 0);
    A(this, gt, 0);
    A(this, Kt, !1);
    /** @type {Set<Effect>} */
    A(this, mr, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    A(this, wr, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    A(this, ft, null);
    A(this, Hr, Ns(() => (I(this, ft, Ht(s(this, It))), () => {
      I(this, ft, null);
    })));
    I(this, Oe, t), I(this, Fe, r), I(this, Nt, (i) => {
      var f = (
        /** @type {Effect} */
        R
      );
      f.b = this, f.f |= an, n(i);
    }), this.parent = /** @type {Effect} */
    R.b, this.transform_error = a ?? this.parent?.transform_error ?? ((i) => i), I(this, me, Sn(() => {
      q(this, V, un).call(this);
    }, Is));
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    ba(t, s(this, mr), s(this, wr));
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
    q(this, V, fn).call(this, t, r), I(this, It, s(this, It) + t), !(!s(this, ft) || s(this, Kt)) && (I(this, Kt, !0), Vt(() => {
      I(this, Kt, !1), s(this, ft) && er(s(this, ft), s(this, It));
    }));
  }
  get_effect_pending() {
    return s(this, Hr).call(this), d(
      /** @type {Source<number>} */
      s(this, ft)
    );
  }
  /** @param {unknown} error */
  error(t) {
    if (!s(this, Fe).onerror && !s(this, Fe).failed)
      throw t;
    E?.is_fork ? (s(this, je) && E.skip_effect(s(this, je)), s(this, ge) && E.skip_effect(s(this, ge)), s(this, Pe) && E.skip_effect(s(this, Pe)), E.on_fork_commit(() => {
      q(this, V, dn).call(this, t);
    })) : q(this, V, dn).call(this, t);
  }
}
Oe = new WeakMap(), gn = new WeakMap(), Fe = new WeakMap(), Nt = new WeakMap(), me = new WeakMap(), je = new WeakMap(), ge = new WeakMap(), Pe = new WeakMap(), ut = new WeakMap(), It = new WeakMap(), gt = new WeakMap(), Kt = new WeakMap(), mr = new WeakMap(), wr = new WeakMap(), ft = new WeakMap(), Hr = new WeakMap(), V = new WeakSet(), Os = function() {
  try {
    I(this, je, Le(() => s(this, Nt).call(this, s(this, Oe))));
  } catch (t) {
    this.error(t);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
Fs = function(t) {
  const r = s(this, Fe).failed;
  r && I(this, Pe, Le(() => {
    r(
      s(this, Oe),
      () => t,
      () => () => {
      }
    );
  }));
}, js = function() {
  const t = s(this, Fe).pending;
  t && (this.is_pending = !0, I(this, ge, Le(() => t(s(this, Oe)))), Vt(() => {
    var r = I(this, ut, document.createDocumentFragment()), n = Ot();
    r.append(n), I(this, je, q(this, V, Rr).call(this, () => Le(() => s(this, Nt).call(this, n)))), s(this, gt) === 0 && (s(this, Oe).before(r), I(this, ut, null), Ft(
      /** @type {Effect} */
      s(this, ge),
      () => {
        I(this, ge, null);
      }
    ), q(this, V, Dr).call(
      this,
      /** @type {Batch} */
      E
    ));
  }));
}, un = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), I(this, gt, 0), I(this, It, 0), I(this, je, Le(() => {
      s(this, Nt).call(this, s(this, Oe));
    })), s(this, gt) > 0) {
      var t = I(this, ut, document.createDocumentFragment());
      Tn(s(this, je), t);
      const r = (
        /** @type {(anchor: Node) => void} */
        s(this, Fe).pending
      );
      I(this, ge, Le(() => r(s(this, Oe))));
    } else
      q(this, V, Dr).call(
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
Dr = function(t) {
  this.is_pending = !1, t.transfer_effects(s(this, mr), s(this, wr));
}, /**
 * @template T
 * @param {() => T} fn
 */
Rr = function(t) {
  var r = R, n = D, a = ze;
  at(s(this, me)), Ue(s(this, me)), $t(s(this, me).ctx);
  try {
    return Bt.ensure(), t();
  } catch (i) {
    return ga(i), null;
  } finally {
    at(r), Ue(n), $t(a);
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
    this.parent && q(n = this.parent, V, fn).call(n, t, r);
    return;
  }
  I(this, gt, s(this, gt) + t), s(this, gt) === 0 && (q(this, V, Dr).call(this, r), s(this, ge) && Ft(s(this, ge), () => {
    I(this, ge, null);
  }), s(this, ut) && (s(this, Oe).before(s(this, ut)), I(this, ut, null)));
}, /**
 * @param {unknown} error
 */
dn = function(t) {
  s(this, je) && (ke(s(this, je)), I(this, je, null)), s(this, ge) && (ke(s(this, ge)), I(this, ge, null)), s(this, Pe) && (ke(s(this, Pe)), I(this, Pe, null));
  var r = s(this, Fe).onerror;
  let n = s(this, Fe).failed;
  var a = !1, i = !1;
  const f = () => {
    if (a) {
      ks();
      return;
    }
    a = !0, i && vs(), s(this, Pe) !== null && Ft(s(this, Pe), () => {
      I(this, Pe, null);
    }), q(this, V, Rr).call(this, () => {
      q(this, V, un).call(this);
    });
  }, l = (o) => {
    try {
      i = !0, r?.(o, f), i = !1;
    } catch (u) {
      pt(u, s(this, me) && s(this, me).parent);
    }
    n && I(this, Pe, q(this, V, Rr).call(this, () => {
      try {
        return Le(() => {
          var u = (
            /** @type {Effect} */
            R
          );
          u.b = this, u.f |= an, n(
            s(this, Oe),
            () => o,
            () => f
          );
        });
      } catch (u) {
        return pt(
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
      pt(u, s(this, me) && s(this, me).parent);
      return;
    }
    o !== null && typeof o == "object" && typeof /** @type {any} */
    o.then == "function" ? o.then(
      l,
      /** @param {unknown} e */
      (u) => pt(u, s(this, me) && s(this, me).parent)
    ) : l(o);
  });
};
function Ls(e, t, r, n) {
  const a = mn;
  var i = e.filter((p) => !p.settled);
  if (r.length === 0 && i.length === 0) {
    n(t.map(a));
    return;
  }
  var f = (
    /** @type {Effect} */
    R
  ), l = Bs(), o = i.length === 1 ? i[0].promise : i.length > 1 ? Promise.all(i.map((p) => p.promise)) : null;
  function u(p) {
    l();
    try {
      n(p);
    } catch (h) {
      (f.f & He) === 0 && pt(h, f);
    }
    jr();
  }
  if (r.length === 0) {
    o.then(() => u(t.map(a)));
    return;
  }
  var _ = ka();
  function b() {
    Promise.all(r.map((p) => /* @__PURE__ */ Hs(p))).then((p) => u([...t.map(a), ...p])).catch((p) => pt(p, f)).finally(() => _());
  }
  o ? o.then(() => {
    l(), b(), jr();
  }) : b();
}
function Bs() {
  var e = (
    /** @type {Effect} */
    R
  ), t = D, r = ze, n = (
    /** @type {Batch} */
    E
  );
  return function(i = !0) {
    at(e), Ue(t), $t(r), i && (e.f & He) === 0 && (n?.activate(), n?.apply());
  };
}
function jr(e = !0) {
  at(null), Ue(null), $t(null), e && E?.deactivate();
}
function ka() {
  var e = (
    /** @type {Effect} */
    R
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
  return R !== null && (R.f |= rr), {
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
    parent: R,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function Hs(e, t, r) {
  let n = (
    /** @type {Effect | null} */
    R
  );
  n === null && as();
  var a = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), i = Ht(
    /** @type {V} */
    ae
  ), f = !D, l = /* @__PURE__ */ new Map();
  return el(() => {
    var o = (
      /** @type {Effect} */
      R
    ), u = la();
    a = u.promise;
    try {
      Promise.resolve(e()).then(u.resolve, u.reject).finally(jr);
    } catch (h) {
      u.reject(h), jr();
    }
    var _ = (
      /** @type {Batch} */
      E
    );
    if (f) {
      if ((o.f & qt) !== 0)
        var b = ka();
      if (
        /** @type {Boundary} */
        n.b.is_rendered()
      )
        l.get(_)?.reject(st), l.delete(_);
      else {
        for (const h of l.values())
          h.reject(st);
        l.clear();
      }
      l.set(_, u);
    }
    const p = (h, c = void 0) => {
      if (b) {
        var C = c === st;
        b(C);
      }
      if (!(c === st || (o.f & He) !== 0)) {
        if (_.activate(), c)
          i.f |= yt, er(i, c);
        else {
          (i.f & yt) !== 0 && (i.f ^= yt), er(i, h);
          for (const [S, j] of l) {
            if (l.delete(S), S === _) break;
            j.reject(st);
          }
        }
        _.deactivate();
      }
    };
    u.promise.then(p, (h) => p(null, h || "unknown"));
  }), Ra(() => {
    for (const o of l.values())
      o.reject(st);
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
function sr(e) {
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
  var t, r = R, n = e.parent;
  if (!mt && n !== null && (n.f & (He | pe)) !== 0)
    return ms(), e.v;
  at(n);
  try {
    e.f &= ~Lt, zs(e), t = Ga(e);
  } finally {
    at(r);
  }
  return t;
}
function Ea(e) {
  var t = wn(e);
  if (!e.equals(t) && (e.wv = Va(), (!E?.is_fork || e.deps === null) && (E !== null ? E.capture(e, t, !0) : e.v = t, e.deps === null))) {
    G(e, te);
    return;
  }
  mt || (Ke !== null ? (En() || E?.is_fork) && Ke.set(e, t) : bn(e));
}
function Us(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      (t.teardown || t.ac) && (t.teardown?.(), t.ac?.abort(st), t.teardown = $i, t.ac = null, br(t, 0), An(t));
}
function Sa(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      t.teardown && tr(t);
}
let cn = /* @__PURE__ */ new Set();
const Rt = /* @__PURE__ */ new Map();
let Aa = !1;
function Ht(e, t) {
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
  const r = Ht(e);
  return za(r), r;
}
// @__NO_SIDE_EFFECTS__
function Vs(e, t = !1, r = !0) {
  const n = Ht(e);
  return t || (n.equals = da), n;
}
function y(e, t, r = !1) {
  D !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Xe || (D.f & sn) !== 0) && ha() && (D.f & (ce | rt | pr | sn)) !== 0 && (qe === null || !Xt.call(qe, e)) && cs();
  let n = r ? At(t) : t;
  return er(e, n, Mr);
}
function er(e, t, r = null) {
  if (!e.equals(t)) {
    Rt.set(e, mt ? t : e.v);
    var n = Bt.ensure();
    if (n.capture(e, t), (e.f & ce) !== 0) {
      const a = (
        /** @type {Derived} */
        e
      );
      (e.f & de) !== 0 && wn(a), Ke === null && bn(a);
    }
    e.wv = Va(), Ca(e, de, r), R !== null && (R.f & te) !== 0 && (R.f & (Ze | xt)) === 0 && (Re === null ? rl([e]) : Re.push(e)), !n.is_fork && cn.size > 0 && !Aa && Ws();
  }
  return t;
}
function Ws() {
  Aa = !1;
  for (const e of cn)
    (e.f & te) !== 0 && G(e, nt), Ar(e) && tr(e);
  cn.clear();
}
function _r(e) {
  y(e, e.v + 1);
}
function Ca(e, t, r) {
  var n = e.reactions;
  if (n !== null)
    for (var a = n.length, i = 0; i < a; i++) {
      var f = n[i], l = f.f, o = (l & de) === 0;
      if (o && G(f, t), (l & ce) !== 0) {
        var u = (
          /** @type {Derived} */
          f
        );
        Ke?.delete(u), (l & Lt) === 0 && (l & Be && (R === null || (R.f & Fr) === 0) && (f.f |= Lt), Ca(u, nt, r));
      } else if (o) {
        var _ = (
          /** @type {Effect} */
          f
        );
        (l & rt) !== 0 && it !== null && it.add(_), r !== null ? r.push(_) : xn(_);
      }
    }
}
function At(e) {
  if (typeof e != "object" || e === null || vr in e)
    return e;
  const t = sa(e);
  if (t !== Zi && t !== Qi)
    return e;
  var r = /* @__PURE__ */ new Map(), n = pn(e), a = /* @__PURE__ */ F(0), i = jt, f = (l) => {
    if (jt === i)
      return l();
    var o = D, u = jt;
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
            r.set(o, _), _r(a);
          }
        } else
          y(u, ae), _r(a);
        return !0;
      },
      get(l, o, u) {
        if (o === vr)
          return e;
        var _ = r.get(o), b = o in l;
        if (_ === void 0 && (!b || cr(l, o)?.writable) && (_ = f(() => {
          var h = At(b ? l[o] : ae), c = /* @__PURE__ */ F(h);
          return c;
        }), r.set(o, _)), _ !== void 0) {
          var p = d(_);
          return p === ae ? void 0 : p;
        }
        return Reflect.get(l, o, u);
      },
      getOwnPropertyDescriptor(l, o) {
        var u = Reflect.getOwnPropertyDescriptor(l, o);
        if (u && "value" in u) {
          var _ = r.get(o);
          _ && (u.value = d(_));
        } else if (u === void 0) {
          var b = r.get(o), p = b?.v;
          if (b !== void 0 && p !== ae)
            return {
              enumerable: !0,
              configurable: !0,
              value: p,
              writable: !0
            };
        }
        return u;
      },
      has(l, o) {
        if (o === vr)
          return !0;
        var u = r.get(o), _ = u !== void 0 && u.v !== ae || Reflect.has(l, o);
        if (u !== void 0 || R !== null && (!_ || cr(l, o)?.writable)) {
          u === void 0 && (u = f(() => {
            var p = _ ? At(l[o]) : ae, h = /* @__PURE__ */ F(p);
            return h;
          }), r.set(o, u));
          var b = d(u);
          if (b === ae)
            return !1;
        }
        return _;
      },
      set(l, o, u, _) {
        var b = r.get(o), p = o in l;
        if (n && o === "length")
          for (var h = u; h < /** @type {Source<number>} */
          b.v; h += 1) {
            var c = r.get(h + "");
            c !== void 0 ? y(c, ae) : h in l && (c = f(() => /* @__PURE__ */ F(ae)), r.set(h + "", c));
          }
        if (b === void 0)
          (!p || cr(l, o)?.writable) && (b = f(() => /* @__PURE__ */ F(void 0)), y(b, At(u)), r.set(o, b));
        else {
          p = b.v !== ae;
          var C = f(() => At(u));
          y(b, C);
        }
        var S = Reflect.getOwnPropertyDescriptor(l, o);
        if (S?.set && S.set.call(_, u), !p) {
          if (n && typeof o == "string") {
            var j = (
              /** @type {Source<number>} */
              r.get("length")
            ), P = Number(o);
            Number.isInteger(P) && P >= j.v && y(j, P + 1);
          }
          _r(a);
        }
        return !0;
      },
      ownKeys(l) {
        d(a);
        var o = Reflect.ownKeys(l).filter((b) => {
          var p = r.get(b);
          return p === void 0 || p.v !== ae;
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
function Yn(e) {
  try {
    if (e !== null && typeof e == "object" && vr in e)
      return e[vr];
  } catch {
  }
  return e;
}
function Gs(e, t) {
  return Object.is(Yn(e), Yn(t));
}
var Jn, Ta, Ma, Pa;
function Ys() {
  if (Jn === void 0) {
    Jn = window, Ta = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, r = Text.prototype;
    Ma = cr(t, "firstChild").get, Pa = cr(t, "nextSibling").get, Un(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), Un(r) && (r.__t = void 0);
  }
}
function Ot(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function bt(e) {
  return (
    /** @type {TemplateNode | null} */
    Ma.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function Sr(e) {
  return (
    /** @type {TemplateNode | null} */
    Pa.call(e)
  );
}
function v(e, t) {
  return /* @__PURE__ */ bt(e);
}
function en(e, t = !1) {
  {
    var r = /* @__PURE__ */ bt(e);
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ Sr(r) : r;
  }
}
function x(e, t = 1, r = !1) {
  let n = e;
  for (; t--; )
    n = /** @type {TemplateNode} */
    /* @__PURE__ */ Sr(n);
  return n;
}
function Js(e) {
  e.textContent = "";
}
function Na() {
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
  var t = D, r = R;
  Ue(null), at(null);
  try {
    return e();
  } finally {
    Ue(t), at(r);
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
  R === null && (D === null && os(), ls()), mt && ss();
}
function Zs(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function ct(e, t) {
  var r = R;
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
  if ((e & Zt) !== 0)
    Ut !== null ? Ut.push(n) : Bt.ensure().schedule(n);
  else if (t !== null) {
    try {
      tr(n);
    } catch (f) {
      throw ke(n), f;
    }
    a.deps === null && a.teardown === null && a.nodes === null && a.first === a.last && // either `null`, or a singular child
    (a.f & rr) === 0 && (a = a.first, (e & rt) !== 0 && (e & Qt) !== 0 && a !== null && (a.f |= Qt));
  }
  if (a !== null && (a.parent = r, r !== null && Zs(a, r), D !== null && (D.f & ce) !== 0 && (e & xt) === 0)) {
    var i = (
      /** @type {Derived} */
      D
    );
    (i.effects ?? (i.effects = [])).push(a);
  }
  return n;
}
function En() {
  return D !== null && !Xe;
}
function Ra(e) {
  const t = ct(Ur, null);
  return G(t, te), t.teardown = e, t;
}
function Xn(e) {
  Xs();
  var t = (
    /** @type {Effect} */
    R.f
  ), r = !D && (t & Ze) !== 0 && (t & qt) === 0;
  if (r) {
    var n = (
      /** @type {ComponentContext} */
      ze
    );
    (n.e ?? (n.e = [])).push(e);
  } else
    return Oa(e);
}
function Oa(e) {
  return ct(Zt | ns, e);
}
function Qs(e) {
  Bt.ensure();
  const t = ct(xt | rr, e);
  return (r = {}) => new Promise((n) => {
    r.outro ? Ft(t, () => {
      ke(t), n(void 0);
    }) : (ke(t), n(void 0));
  });
}
function $s(e) {
  return ct(Zt, e);
}
function el(e) {
  return ct(pr | rr, e);
}
function Fa(e, t = 0) {
  return ct(Ur | t, e);
}
function fe(e, t = [], r = [], n = []) {
  Ls(n, t, r, (a) => {
    ct(Ur, () => e(...a.map(d)));
  });
}
function Sn(e, t = 0) {
  var r = ct(rt | t, e);
  return r;
}
function Le(e) {
  return ct(Ze | rr, e);
}
function ja(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = mt, n = D;
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
      a.abort(st);
    });
    var n = r.next;
    (r.f & xt) !== 0 ? r.parent = null : ke(r, t), r = n;
  }
}
function tl(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & Ze) === 0 && ke(t), t = r;
  }
}
function ke(e, t = !0) {
  var r = !1;
  (t || (e.f & rs) !== 0) && e.nodes !== null && e.nodes.end !== null && (La(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), r = !0), G(e, Vn), An(e, t && !r), br(e, 0);
  var n = e.nodes && e.nodes.t;
  if (n !== null)
    for (const i of n)
      i.stop();
  ja(e), e.f ^= Vn, e.f |= He;
  var a = e.parent;
  a !== null && a.first !== null && Ba(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function La(e, t) {
  for (; e !== null; ) {
    var r = e === t ? null : /* @__PURE__ */ Sr(e);
    e.remove(), e = r;
  }
}
function Ba(e) {
  var t = e.parent, r = e.prev, n = e.next;
  r !== null && (r.next = n), n !== null && (n.prev = r), t !== null && (t.first === e && (t.first = n), t.last === e && (t.last = r));
}
function Ft(e, t, r = !0) {
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
      if ((a.f & xt) === 0) {
        var f = (a.f & Qt) !== 0 || // If this is a branch effect without a block effect parent,
        // it means the parent block effect was pruned. In that case,
        // transparency information was transferred to the branch effect.
        (a.f & Ze) !== 0 && (e.f & rt) !== 0;
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
    e.f ^= pe, (e.f & te) === 0 && (G(e, de), Bt.ensure().schedule(e));
    for (var r = e.first; r !== null; ) {
      var n = r.next, a = (r.f & Qt) !== 0 || (r.f & Ze) !== 0;
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
      var a = r === n ? null : /* @__PURE__ */ Sr(r);
      t.append(r), r = a;
    }
}
let Or = !1, mt = !1;
function Zn(e) {
  mt = e;
}
let D = null, Xe = !1;
function Ue(e) {
  D = e;
}
let R = null;
function at(e) {
  R = e;
}
let qe = null;
function za(e) {
  D !== null && (qe === null ? qe = [e] : qe.push(e));
}
let we = null, Te = 0, Re = null;
function rl(e) {
  Re = e;
}
let Ua = 1, Ct = 0, jt = Ct;
function Qn(e) {
  jt = e;
}
function Va() {
  return ++Ua;
}
function Ar(e) {
  var t = e.f;
  if ((t & de) !== 0)
    return !0;
  if (t & ce && (e.f &= ~Lt), (t & nt) !== 0) {
    for (var r = (
      /** @type {Value[]} */
      e.deps
    ), n = r.length, a = 0; a < n; a++) {
      var i = r[a];
      if (Ar(
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
    Ke === null && G(e, te);
  }
  return !1;
}
function Wa(e, t, r = !0) {
  var n = e.reactions;
  if (n !== null && !(qe !== null && Xt.call(qe, e)))
    for (var a = 0; a < n.length; a++) {
      var i = n[a];
      (i.f & ce) !== 0 ? Wa(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (r ? G(i, de) : (i.f & te) !== 0 && G(i, nt), xn(
        /** @type {Effect} */
        i
      ));
    }
}
function Ga(e) {
  var C;
  var t = we, r = Te, n = Re, a = D, i = qe, f = ze, l = Xe, o = jt, u = e.f;
  we = /** @type {null | Value[]} */
  null, Te = 0, Re = null, D = (u & (Ze | xt)) === 0 ? e : null, qe = null, $t(e.ctx), Xe = !1, jt = ++Ct, e.ac !== null && (kn(() => {
    e.ac.abort(st);
  }), e.ac = null);
  try {
    e.f |= Fr;
    var _ = (
      /** @type {Function} */
      e.fn
    ), b = _();
    e.f |= qt;
    var p = e.deps, h = E?.is_fork;
    if (we !== null) {
      var c;
      if (h || br(e, Te), p !== null && Te > 0)
        for (p.length = Te + we.length, c = 0; c < we.length; c++)
          p[Te + c] = we[c];
      else
        e.deps = p = we;
      if (En() && (e.f & Be) !== 0)
        for (c = Te; c < p.length; c++)
          ((C = p[c]).reactions ?? (C.reactions = [])).push(e);
    } else !h && p !== null && Te < p.length && (br(e, Te), p.length = Te);
    if (ha() && Re !== null && !Xe && p !== null && (e.f & (ce | nt | de)) === 0)
      for (c = 0; c < /** @type {Source[]} */
      Re.length; c++)
        Wa(
          Re[c],
          /** @type {Effect} */
          e
        );
    if (a !== null && a !== e) {
      if (Ct++, a.deps !== null)
        for (let S = 0; S < r; S += 1)
          a.deps[S].rv = Ct;
      if (t !== null)
        for (const S of t)
          S.rv = Ct;
      Re !== null && (n === null ? n = Re : n.push(.../** @type {Source[]} */
      Re));
    }
    return (e.f & yt) !== 0 && (e.f ^= yt), b;
  } catch (S) {
    return ga(S);
  } finally {
    e.f ^= Fr, we = t, Te = r, Re = n, D = a, qe = i, $t(f), Xe = l, jt = o;
  }
}
function nl(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var n = Ji.call(r, e);
    if (n !== -1) {
      var a = r.length - 1;
      a === 0 ? r = t.reactions = null : (r[n] = r[a], r.pop());
    }
  }
  if (r === null && (t.f & ce) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (we === null || !Xt.call(we, t))) {
    var i = (
      /** @type {Derived} */
      t
    );
    (i.f & Be) !== 0 && (i.f ^= Be, i.f &= ~Lt), i.v !== ae && bn(i), Us(i), br(i, 0);
  }
}
function br(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var n = t; n < r.length; n++)
      nl(e, r[n]);
}
function tr(e) {
  var t = e.f;
  if ((t & He) === 0) {
    G(e, te);
    var r = R, n = Or;
    R = e, Or = !0;
    try {
      (t & (rt | oa)) !== 0 ? tl(e) : An(e), ja(e);
      var a = Ga(e);
      e.teardown = typeof a == "function" ? a : null, e.wv = Ua;
      var i;
    } finally {
      Or = n, R = r;
    }
  }
}
async function al() {
  await Promise.resolve(), Ms();
}
function d(e) {
  var t = e.f, r = (t & ce) !== 0;
  if (D !== null && !Xe) {
    var n = R !== null && (R.f & He) !== 0;
    if (!n && (qe === null || !Xt.call(qe, e))) {
      var a = D.deps;
      if ((D.f & Fr) !== 0)
        e.rv < Ct && (e.rv = Ct, we === null && a !== null && a[Te] === e ? Te++ : we === null ? we = [e] : we.push(e));
      else {
        (D.deps ?? (D.deps = [])).push(e);
        var i = e.reactions;
        i === null ? e.reactions = [D] : Xt.call(i, D) || i.push(D);
      }
    }
  }
  if (mt && Rt.has(e))
    return Rt.get(e);
  if (r) {
    var f = (
      /** @type {Derived} */
      e
    );
    if (mt) {
      var l = f.v;
      return ((f.f & te) === 0 && f.reactions !== null || Ja(f)) && (l = wn(f)), Rt.set(f, l), l;
    }
    var o = (f.f & Be) === 0 && !Xe && D !== null && (Or || (D.f & Be) !== 0), u = (f.f & qt) === 0;
    Ar(f) && (o && (f.f |= Be), Ea(f)), o && !u && (Sa(f), Ya(f));
  }
  if (Ke?.has(e))
    return Ke.get(e);
  if ((e.f & yt) !== 0)
    throw e.v;
  return e.v;
}
function Ya(e) {
  if (e.f |= Be, e.deps !== null)
    for (const t of e.deps)
      (t.reactions ?? (t.reactions = [])).push(e), (t.f & ce) !== 0 && (t.f & Be) === 0 && (Sa(
        /** @type {Derived} */
        t
      ), Ya(
        /** @type {Derived} */
        t
      ));
}
function Ja(e) {
  if (e.v === ae) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (Rt.has(t) || (t.f & ce) !== 0 && Ja(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function Ka(e) {
  var t = Xe;
  try {
    return Xe = !0, e();
  } finally {
    Xe = t;
  }
}
const il = ["touchstart", "touchmove"];
function sl(e) {
  return il.includes(e);
}
const Tt = Symbol("events"), Xa = /* @__PURE__ */ new Set(), vn = /* @__PURE__ */ new Set();
function ne(e, t, r) {
  (t[Tt] ?? (t[Tt] = {}))[e] = r;
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
  var f = 0, l = $n === e && e[Tt];
  if (l) {
    var o = a.indexOf(l);
    if (o !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e[Tt] = t;
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
    var _ = D, b = R;
    Ue(null), at(null);
    try {
      for (var p, h = []; i !== null; ) {
        var c = i.assignedSlot || i.parentNode || /** @type {any} */
        i.host || null;
        try {
          var C = i[Tt]?.[n];
          C != null && (!/** @type {any} */
          i.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === i) && C.call(i, e);
        } catch (S) {
          p ? h.push(S) : p = S;
        }
        if (e.cancelBubble || c === t || c === null)
          break;
        i = c;
      }
      if (p) {
        for (let S of h)
          queueMicrotask(() => {
            throw S;
          });
        throw p;
      }
    } finally {
      e[Tt] = t, delete e.currentTarget, Ue(_), at(b);
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
function Lr(e, t) {
  var r = (
    /** @type {Effect} */
    R
  );
  r.nodes === null && (r.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function M(e, t) {
  var r = (t & ps) !== 0, n = (t & bs) !== 0, a, i = !e.startsWith("<!>");
  return () => {
    a === void 0 && (a = fl(i ? e : "<!>" + e), r || (a = /** @type {TemplateNode} */
    /* @__PURE__ */ bt(a)));
    var f = (
      /** @type {TemplateNode} */
      n || Ta ? document.importNode(a, !0) : a.cloneNode(!0)
    );
    if (r) {
      var l = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ bt(f)
      ), o = (
        /** @type {TemplateNode} */
        f.lastChild
      );
      Lr(l, o);
    } else
      Lr(f, f);
    return f;
  };
}
function T(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function O(e, t) {
  var r = t == null ? "" : typeof t == "object" ? `${t}` : t;
  r !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = r, e.nodeValue = `${r}`);
}
function dl(e, t) {
  return cl(e, t);
}
const Tr = /* @__PURE__ */ new Map();
function cl(e, { target: t, anchor: r, props: n = {}, events: a, context: i, intro: f = !0, transformError: l }) {
  Ys();
  var o = void 0, u = Qs(() => {
    var _ = r ?? t.appendChild(Ot());
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
    var b = /* @__PURE__ */ new Set(), p = (h) => {
      for (var c = 0; c < h.length; c++) {
        var C = h[c];
        if (!b.has(C)) {
          b.add(C);
          var S = sl(C);
          for (const re of [t, document]) {
            var j = Tr.get(re);
            j === void 0 && (j = /* @__PURE__ */ new Map(), Tr.set(re, j));
            var P = j.get(C);
            P === void 0 ? (re.addEventListener(C, ea, { passive: S }), j.set(C, 1)) : j.set(C, P + 1);
          }
        }
      }
    };
    return p(zr(Xa)), vn.add(p), () => {
      for (var h of b)
        for (const S of [t, document]) {
          var c = (
            /** @type {Map<string, number>} */
            Tr.get(S)
          ), C = (
            /** @type {number} */
            c.get(h)
          );
          --C == 0 ? (S.removeEventListener(h, ea), c.delete(h), c.size === 0 && Tr.delete(S)) : c.set(h, C);
        }
      vn.delete(p), _ !== r && _.parentNode?.removeChild(_);
    };
  });
  return hn.set(o, u), o;
}
let hn = /* @__PURE__ */ new WeakMap();
function vl(e, t) {
  const r = hn.get(e);
  return r ? (hn.delete(e), r(t)) : Promise.resolve();
}
var Je, tt, Ne, Dt, kr, Er, qr;
class hl {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, r = !0) {
    /** @type {TemplateNode} */
    Ye(this, "anchor");
    /** @type {Map<Batch, Key>} */
    A(this, Je, /* @__PURE__ */ new Map());
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
    A(this, tt, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    A(this, Ne, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    A(this, Dt, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    A(this, kr, !0);
    /**
     * @param {Batch} batch
     */
    A(this, Er, (t) => {
      if (s(this, Je).has(t)) {
        var r = (
          /** @type {Key} */
          s(this, Je).get(t)
        ), n = s(this, tt).get(r);
        if (n)
          Cn(n), s(this, Dt).delete(r);
        else {
          var a = s(this, Ne).get(r);
          a && (s(this, tt).set(r, a.effect), s(this, Ne).delete(r), a.fragment.lastChild.remove(), this.anchor.before(a.fragment), n = a.effect);
        }
        for (const [i, f] of s(this, Je)) {
          if (s(this, Je).delete(i), i === t)
            break;
          const l = s(this, Ne).get(f);
          l && (ke(l.effect), s(this, Ne).delete(f));
        }
        for (const [i, f] of s(this, tt)) {
          if (i === r || s(this, Dt).has(i)) continue;
          const l = () => {
            if (Array.from(s(this, Je).values()).includes(i)) {
              var u = document.createDocumentFragment();
              Tn(f, u), u.append(Ot()), s(this, Ne).set(i, { effect: f, fragment: u });
            } else
              ke(f);
            s(this, Dt).delete(i), s(this, tt).delete(i);
          };
          s(this, kr) || !n ? (s(this, Dt).add(i), Ft(f, l, !1)) : l();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    A(this, qr, (t) => {
      s(this, Je).delete(t);
      const r = Array.from(s(this, Je).values());
      for (const [n, a] of s(this, Ne))
        r.includes(n) || (ke(a.effect), s(this, Ne).delete(n));
    });
    this.anchor = t, I(this, kr, r);
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
    ), a = Na();
    if (r && !s(this, tt).has(t) && !s(this, Ne).has(t))
      if (a) {
        var i = document.createDocumentFragment(), f = Ot();
        i.append(f), s(this, Ne).set(t, {
          effect: Le(() => r(f)),
          fragment: i
        });
      } else
        s(this, tt).set(
          t,
          Le(() => r(this.anchor))
        );
    if (s(this, Je).set(n, t), a) {
      for (const [l, o] of s(this, tt))
        l === t ? n.unskip_effect(o) : n.skip_effect(o);
      for (const [l, o] of s(this, Ne))
        l === t ? n.unskip_effect(o.effect) : n.skip_effect(o.effect);
      n.oncommit(s(this, Er)), n.ondiscard(s(this, qr));
    } else
      s(this, Er).call(this, n);
  }
}
Je = new WeakMap(), tt = new WeakMap(), Ne = new WeakMap(), Dt = new WeakMap(), kr = new WeakMap(), Er = new WeakMap(), qr = new WeakMap();
function oe(e, t, r = !1) {
  var n = new hl(e), a = r ? Qt : 0;
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
function lr(e, t) {
  return t;
}
function _l(e, t, r) {
  for (var n = [], a = t.length, i, f = t.length, l = 0; l < a; l++) {
    let b = t[l];
    Ft(
      b,
      () => {
        if (i) {
          if (i.pending.delete(b), i.done.add(b), i.pending.size === 0) {
            var p = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            _n(e, zr(i.done)), p.delete(i), p.size === 0 && (e.outrogroups = null);
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
      Js(_), _.append(u), e.items.clear();
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
      i.f |= dt;
      const f = document.createDocumentFragment();
      Tn(i, f);
    } else
      ke(t[a], r);
  }
}
var ta;
function zt(e, t, r, n, a, i = null) {
  var f = e, l = /* @__PURE__ */ new Map();
  {
    var o = (
      /** @type {Element} */
      e
    );
    f = o.appendChild(Ot());
  }
  var u = null, _ = /* @__PURE__ */ qs(() => {
    var P = r();
    return pn(P) ? P : P == null ? [] : zr(P);
  }), b, p = /* @__PURE__ */ new Map(), h = !0;
  function c(P) {
    (j.effect.f & He) === 0 && (j.pending.delete(P), j.fallback = u, gl(j, b, f, t, n), u !== null && (b.length === 0 ? (u.f & dt) === 0 ? Cn(u) : (u.f ^= dt, dr(u, null, f)) : Ft(u, () => {
      u = null;
    })));
  }
  function C(P) {
    j.pending.delete(P);
  }
  var S = Sn(() => {
    b = /** @type {V[]} */
    d(_);
    for (var P = b.length, re = /* @__PURE__ */ new Set(), ie = (
      /** @type {Batch} */
      E
    ), Ie = Na(), be = 0; be < P; be += 1) {
      var Y = b[be], ve = n(Y, be), Ve = h ? null : l.get(ve);
      Ve ? (Ve.v && er(Ve.v, Y), Ve.i && er(Ve.i, be), Ie && ie.unskip_effect(Ve.e)) : (Ve = pl(
        l,
        h ? f : ta ?? (ta = Ot()),
        Y,
        ve,
        be,
        a,
        t,
        r
      ), h || (Ve.e.f |= dt), l.set(ve, Ve)), re.add(ve);
    }
    if (P === 0 && i && !u && (h ? u = Le(() => i(f)) : (u = Le(() => i(ta ?? (ta = Ot()))), u.f |= dt)), P > re.size && is(), !h)
      if (p.set(ie, re), Ie) {
        for (const [nr, Vr] of l)
          re.has(nr) || ie.skip_effect(Vr.e);
        ie.oncommit(c), ie.ondiscard(C);
      } else
        c(ie);
    d(_);
  }), j = { effect: S, items: l, pending: p, outrogroups: null, fallback: u };
  h = !1;
}
function or(e) {
  for (; e !== null && (e.f & Ze) === 0; )
    e = e.next;
  return e;
}
function gl(e, t, r, n, a) {
  var i = t.length, f = e.items, l = or(e.effect.first), o, u = null, _ = [], b = [], p, h, c, C;
  for (C = 0; C < i; C += 1) {
    if (p = t[C], h = a(p, C), c = /** @type {EachItem} */
    f.get(h).e, e.outrogroups !== null)
      for (const ve of e.outrogroups)
        ve.pending.delete(c), ve.done.delete(c);
    if ((c.f & pe) !== 0 && Cn(c), (c.f & dt) !== 0)
      if (c.f ^= dt, c === l)
        dr(c, null, r);
      else {
        var S = u ? u.next : l;
        c === e.effect.last && (e.effect.last = c.prev), c.prev && (c.prev.next = c.next), c.next && (c.next.prev = c.prev), ht(e, u, c), ht(e, c, S), dr(c, S, r), u = c, _ = [], b = [], l = or(u.next);
        continue;
      }
    if (c !== l) {
      if (o !== void 0 && o.has(c)) {
        if (_.length < b.length) {
          var j = b[0], P;
          u = j.prev;
          var re = _[0], ie = _[_.length - 1];
          for (P = 0; P < _.length; P += 1)
            dr(_[P], j, r);
          for (P = 0; P < b.length; P += 1)
            o.delete(b[P]);
          ht(e, re.prev, ie.next), ht(e, u, re), ht(e, ie, j), l = j, u = ie, C -= 1, _ = [], b = [];
        } else
          o.delete(c), dr(c, l, r), ht(e, c.prev, c.next), ht(e, c, u === null ? e.effect.first : u.next), ht(e, u, c), u = c;
        continue;
      }
      for (_ = [], b = []; l !== null && l !== c; )
        (o ?? (o = /* @__PURE__ */ new Set())).add(l), b.push(l), l = or(l.next);
      if (l === null)
        continue;
    }
    (c.f & dt) === 0 && _.push(c), u = c, l = or(c.next);
  }
  if (e.outrogroups !== null) {
    for (const ve of e.outrogroups)
      ve.pending.size === 0 && (_n(e, zr(ve.done)), e.outrogroups?.delete(ve));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (l !== null || o !== void 0) {
    var Ie = [];
    if (o !== void 0)
      for (c of o)
        (c.f & pe) === 0 && Ie.push(c);
    for (; l !== null; )
      (l.f & pe) === 0 && l !== e.fallback && Ie.push(l), l = or(l.next);
    var be = Ie.length;
    if (be > 0) {
      var Y = i === 0 ? r : null;
      _l(e, Ie, Y);
    }
  }
}
function pl(e, t, r, n, a, i, f, l) {
  var o = (f & hs) !== 0 ? (f & gs) === 0 ? /* @__PURE__ */ Vs(r, !1, !1) : Ht(r) : null, u = (f & _s) !== 0 ? Ht(a) : null;
  return {
    v: o,
    i: u,
    e: Le(() => (i(t, o ?? r, u ?? a, l), () => {
      e.delete(n);
    }))
  };
}
function dr(e, t, r) {
  if (e.nodes)
    for (var n = e.nodes.start, a = e.nodes.end, i = t && (t.f & dt) === 0 ? (
      /** @type {EffectNodes} */
      t.nodes.start
    ) : r; n !== null; ) {
      var f = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Sr(n)
      );
      if (i.before(n), n === a)
        return;
      n = f;
    }
}
function ht(e, t, r) {
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
      R
    );
    if (l !== (l = t() ?? "")) {
      if (r) {
        u.nodes = null, o.innerHTML = /** @type {string} */
        l, l !== "" && Lr(
          /** @type {TemplateNode} */
          /* @__PURE__ */ bt(o),
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
        var p = n || a ? b : (
          /** @type {HTMLTemplateElement} */
          b.content
        );
        if (Lr(
          /** @type {TemplateNode} */
          /* @__PURE__ */ bt(p),
          /** @type {TemplateNode} */
          p.lastChild
        ), n || a)
          for (; /* @__PURE__ */ bt(p); )
            f.before(
              /** @type {TemplateNode} */
              /* @__PURE__ */ bt(p)
            );
        else
          f.before(p);
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
function ur(e) {
  return typeof e == "object" ? yl(e) : e ?? "";
}
function xl(e, t, r) {
  var n = e == null ? "" : "" + e;
  return n === "" ? null : n;
}
function fr(e, t, r, n, a, i) {
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
      n.selected = t.includes(gr(n));
    return;
  }
  for (n of e.options) {
    var a = gr(n);
    if (Gs(a, t)) {
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
  }), Ra(() => {
    t.disconnect();
  });
}
function ra(e, t, r = t) {
  var n = /* @__PURE__ */ new WeakSet(), a = !0;
  Da(e, "change", (i) => {
    var f = i ? "[selected]" : ":checked", l;
    if (e.multiple)
      l = [].map.call(e.querySelectorAll(f), gr);
    else {
      var o = e.querySelector(f) ?? // will fall back to first non-disabled option if no option is selected
      e.querySelector("option:not([disabled])");
      l = o && gr(o);
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
      l !== null && (i = gr(l), r(i));
    }
    e.__value = i, a = !1;
  }), ml(e);
}
function gr(e) {
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
var Cl = /* @__PURE__ */ M('<div class="flex flex-col items-center justify-center py-20 px-6"><div class="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-10 max-w-md w-full text-center space-y-5"><div class="mx-auto w-16 h-16 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-3xl">🔔</div> <h2 class="text-2xl font-bold text-gray-900 dark:text-white">Welcome to your Dashboard</h2> <p class="text-gray-500 dark:text-gray-400">Please log in to access your member dashboard, notifications, invoices, and more.</p> <button class="w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors">Log In</button></div></div>'), Tl = /* @__PURE__ */ M('<div class="flex flex-col justify-center items-center p-16 bg-white dark:bg-gray-800 rounded-2xl shadow-sm"><div class="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600"></div> <p class="mt-4 text-lg text-gray-500 dark:text-gray-400">Loading dashboard…</p></div>'), Ml = /* @__PURE__ */ M('<div class="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-4 text-red-700 dark:text-red-300"><span class="font-medium">Error:</span> </div>'), Pl = /* @__PURE__ */ M("<span> </span>"), Nl = /* @__PURE__ */ M('<div class="flex justify-between text-sm border-b border-gray-100 dark:border-gray-700 pb-1"><span class="text-gray-500 dark:text-gray-400 capitalize"> </span> <span class="font-medium text-gray-800 dark:text-gray-200"> </span></div>'), Il = /* @__PURE__ */ M('<div class="mt-4 space-y-2"></div>'), Dl = /* @__PURE__ */ M('<section><div class="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6"><div class="flex items-center justify-between"><h2 class="text-xl font-bold text-gray-900 dark:text-white">Citizenship Status</h2> <!></div> <!></div></section>'), Rl = /* @__PURE__ */ M('<span class="inline-flex items-center justify-center px-2 py-0.5 text-xs font-bold text-white bg-red-500 rounded-full"> </span>'), Ol = /* @__PURE__ */ M('<div class="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-8 flex justify-center"><div class="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div></div>'), Fl = /* @__PURE__ */ M('<div class="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-8 text-center text-gray-500 dark:text-gray-400"><div class="text-3xl mb-2">🔔</div> No notifications</div>'), jl = /* @__PURE__ */ M('<div class="w-2 h-2 bg-blue-500 rounded-full mt-1.5"></div>'), Ll = /* @__PURE__ */ M('<div class="mt-3 pt-3 border-t border-gray-100 dark:border-gray-700 text-sm text-gray-700 dark:text-gray-300 leading-relaxed"></div>'), Bl = /* @__PURE__ */ M('<tr><td class="px-3 py-3 align-top"><!></td><td class="px-3 py-3"><div> </div> <!></td><td class="px-3 py-3 align-top text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap hidden md:table-cell"> </td><td class="px-3 py-3 align-top text-xs text-gray-400 dark:text-gray-500 whitespace-nowrap hidden sm:table-cell"> </td><td class="px-3 py-3 align-top"><div class="flex justify-end gap-1"><button> </button> <button class="p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"> </button> <button title="Delete" class="p-1 rounded hover:bg-red-50 dark:hover:bg-red-900/20 text-gray-400 hover:text-red-500 transition-colors">🗑</button></div></td></tr>'), Hl = /* @__PURE__ */ M('<div class="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-x-auto"><table class="w-full"><thead><tr class="bg-gray-50 dark:bg-gray-750 border-b border-gray-200 dark:border-gray-700 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"><th class="w-8 px-3 py-2"></th><th class="text-left px-3 py-2">Subject</th><th class="text-left px-3 py-2 whitespace-nowrap hidden md:table-cell">From</th><th class="text-left px-3 py-2 whitespace-nowrap hidden sm:table-cell">Date</th><th class="w-24 px-3 py-2 text-right">Actions</th></tr></thead><tbody></tbody></table></div>'), ql = /* @__PURE__ */ M('<div class="flex flex-col justify-center items-center p-12 bg-gray-50 dark:bg-gray-800/50 rounded-xl"><div class="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div> <p class="mt-4 text-gray-500 dark:text-gray-400">Loading invoices…</p></div>'), zl = /* @__PURE__ */ M('<div class="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-4 text-red-700 dark:text-red-300"> </div>'), Ul = /* @__PURE__ */ M('<div class="flex items-center gap-2 flex-wrap"><button class="px-3 py-1 text-xs font-medium bg-gray-800 dark:bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors">💳 Pay</button> <button class="px-2 py-1 text-xs border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition-colors">↻ Refresh</button> <button class="px-2 py-1 text-xs border border-gray-200 dark:border-gray-600 rounded hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400 transition-colors">Demo Pay</button></div>'), Vl = /* @__PURE__ */ M('<span class="text-xs text-gray-400 dark:text-gray-500"> </span>'), Wl = /* @__PURE__ */ M('<tr class="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-750"><td class="px-4 py-3"><div class="font-medium text-gray-900 dark:text-white text-sm"> </div></td><td class="px-4 py-3 font-semibold text-gray-900 dark:text-white"> </td><td class="px-4 py-3 text-gray-700 dark:text-gray-300"> </td><td class="px-4 py-3"><span> </span></td><td class="px-4 py-3"><!></td></tr>'), Gl = /* @__PURE__ */ M('<div class="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-x-auto"><table class="w-full text-sm text-left"><thead class="text-xs text-gray-700 dark:text-gray-400 uppercase bg-gray-50 dark:bg-gray-750"><tr><th class="px-4 py-3">Description</th><th class="px-4 py-3">Amount</th><th class="px-4 py-3">Currency</th><th class="px-4 py-3">Status</th><th class="px-4 py-3">Actions</th></tr></thead><tbody></tbody></table></div>'), Yl = /* @__PURE__ */ M('<div class="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 text-center text-gray-500 dark:text-gray-400">No invoices yet.</div>'), Jl = /* @__PURE__ */ M('<div class="flex justify-center py-8"><div class="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div></div>'), Kl = /* @__PURE__ */ M('<div class="bg-gray-50 dark:bg-gray-750 rounded-lg p-4"><div class="grid grid-cols-2 gap-4 text-sm"><div><span class="text-gray-500 dark:text-gray-400">Invoice ID:</span> <span class="ml-2 font-medium text-gray-900 dark:text-white"> </span></div> <div><span class="text-gray-500 dark:text-gray-400">Amount Due:</span> <span class="ml-2 font-bold text-gray-900 dark:text-white"> </span></div></div></div> <div><h4 class="font-semibold text-gray-900 dark:text-white mb-3">Transfer Details</h4> <div class="space-y-3"><div><label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Owner (Canister ID)</label> <code class="block px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded font-mono text-sm break-all text-gray-800 dark:text-gray-200"> </code></div> <div><label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Subaccount (Hex)</label> <code class="block px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded font-mono text-xs break-all text-gray-800 dark:text-gray-200"> </code></div></div></div> <div><h4 class="font-semibold text-gray-900 dark:text-white mb-2">ICW CLI Command</h4> <div class="bg-gray-900 rounded-lg p-4 relative"><pre class="text-green-400 font-mono text-sm whitespace-pre-wrap"> </pre> <button class="absolute top-2 right-2 p-2 rounded hover:bg-gray-700 transition-colors text-gray-400 hover:text-white text-sm"> </button></div> <p class="text-sm text-gray-500 dark:text-gray-400 mt-2">Install ICW: <code class="bg-gray-100 dark:bg-gray-700 px-1 rounded text-xs">pip install icw</code></p></div>', 1), Xl = /* @__PURE__ */ M('<div class="text-red-600 dark:text-red-400 text-center py-4">Failed to load payment details.</div>'), Zl = /* @__PURE__ */ M('<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/50"><div class="bg-white dark:bg-gray-800 rounded-xl shadow-xl max-w-lg w-full mx-4 max-h-[90vh] overflow-y-auto"><div class="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-700"><h3 class="text-lg font-semibold text-gray-900 dark:text-white">💳 Payment Instructions</h3> <button class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 text-xl">&times;</button></div> <div class="p-6 space-y-5"><!></div> <div class="flex justify-end px-6 py-4 border-t border-gray-200 dark:border-gray-700"><button class="px-4 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition-colors">Close</button></div></div></div>'), Ql = /* @__PURE__ */ M("<option> </option>"), $l = /* @__PURE__ */ M("<option> </option>"), eo = /* @__PURE__ */ M('<div class="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 mb-4 space-y-4"><div><label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Label</label> <input type="text" placeholder="e.g. My ICP Wallet" class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"/></div> <div class="grid grid-cols-1 sm:grid-cols-2 gap-4"><div><label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Network</label> <select class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-blue-500 outline-none"></select></div> <div><label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Currency</label> <select class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-blue-500 outline-none"></select></div></div> <div><label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Address</label> <input type="text" placeholder="Wallet address or IBAN" class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"/></div> <div class="flex justify-end gap-2"><button class="px-4 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition-colors">Cancel</button> <button class="px-4 py-2 text-sm bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white rounded-lg transition-colors"> </button></div></div>'), to = /* @__PURE__ */ M('<div class="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-8 flex justify-center"><div class="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div></div>'), ro = /* @__PURE__ */ M('<div class="bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-8 text-center"><p class="text-gray-600 dark:text-gray-400">No payment accounts yet.</p> <p class="text-sm text-gray-500 dark:text-gray-500 mt-2">Add a payment account to receive and send payments.</p></div>'), no = /* @__PURE__ */ M('<span class="text-xs px-2 py-0.5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full">✓ Verified</span>'), ao = /* @__PURE__ */ M('<span class="text-xs text-gray-500 dark:text-gray-400"> </span>'), io = /* @__PURE__ */ M("<span></span>"), so = /* @__PURE__ */ M('<div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5 hover:shadow-md transition-shadow"><div class="flex items-center justify-between mb-2"><strong class="text-lg text-gray-900 dark:text-white"> </strong> <!></div> <div class="flex gap-2 mb-3"><span class="text-xs px-2 py-0.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full"> </span> <span class="text-xs px-2 py-0.5 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 rounded-full"> </span></div> <div class="bg-gray-50 dark:bg-gray-750 rounded-lg px-3 py-2 mb-3 overflow-x-auto"><code class="font-mono text-sm text-gray-700 dark:text-gray-300 break-all"> </code></div> <div class="flex items-center justify-between"><!> <button class="text-xs px-2 py-1 text-red-500 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20 rounded transition-colors">🗑 Remove</button></div></div>'), lo = /* @__PURE__ */ M('<div class="grid grid-cols-1 md:grid-cols-2 gap-4"></div>'), oo = /* @__PURE__ */ M('<!> <section><div class="flex items-center justify-between mb-4"><div class="flex items-center gap-2"><h2 class="text-xl font-bold text-gray-900 dark:text-white">Notifications</h2> <!></div></div> <!></section> <section><h2 class="text-xl font-bold text-gray-900 dark:text-white mb-1">Invoices</h2> <p class="text-gray-500 dark:text-gray-400 text-sm mb-4">Manage your invoices and payment records</p> <!></section> <!> <section><div class="flex items-center justify-between mb-4"><h2 class="text-xl font-bold text-gray-900 dark:text-white">Payment Accounts</h2> <button class="px-3 py-1.5 text-sm border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition-colors">+ Add Account</button></div> <!> <!></section>', 1), uo = /* @__PURE__ */ M('<div><h1 class="text-3xl font-bold text-gray-900 dark:text-white"> <span class="text-gray-500 dark:text-gray-400"> </span></h1></div> <!>', 1), fo = /* @__PURE__ */ M('<div class="w-full max-w-5xl mx-auto px-4 py-6 font-sans space-y-8"><!></div>');
function co(e, t) {
  ca(t, !0);
  const r = t.ctx.theme?.cn ?? ((...g) => g.filter(Boolean).join(" "));
  let n = /* @__PURE__ */ F(null), a = /* @__PURE__ */ F(null), i = /* @__PURE__ */ F(At([])), f = /* @__PURE__ */ F(!0), l = /* @__PURE__ */ F(""), o = /* @__PURE__ */ F(!0), u = /* @__PURE__ */ F(null), _ = /* @__PURE__ */ F(null), b = /* @__PURE__ */ F(!0), p = /* @__PURE__ */ F(""), h = /* @__PURE__ */ F(At([])), c = /* @__PURE__ */ F(!0), C = /* @__PURE__ */ F(""), S = /* @__PURE__ */ F(!1), j = /* @__PURE__ */ F(""), P = /* @__PURE__ */ F(""), re = /* @__PURE__ */ F("ICP"), ie = /* @__PURE__ */ F("ICP"), Ie = /* @__PURE__ */ F(!1), be = /* @__PURE__ */ F(!1), Y = /* @__PURE__ */ F(null), ve = /* @__PURE__ */ F(!1), Ve = /* @__PURE__ */ F(null), nr = /* @__PURE__ */ F(!1);
  const Vr = [
    { value: "ICP", label: "Internet Computer (ICP)" },
    { value: "Bitcoin", label: "Bitcoin" },
    { value: "Ethereum", label: "Ethereum" },
    { value: "SEPA", label: "SEPA Bank Transfer" }
  ], Mn = {
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
  let $a = /* @__PURE__ */ sr(() => Mn[d(re)] || []);
  Xn(() => {
    const g = Mn[d(re)] || [];
    g.length > 0 && !g.find((m) => m.value === d(ie)) && y(ie, g[0].value, !0);
  });
  function ei() {
    const g = (/* @__PURE__ */ new Date()).getHours();
    return g < 12 ? "Good morning" : g < 18 ? "Good afternoon" : "Good evening";
  }
  let Pn = /* @__PURE__ */ sr(() => d(i).filter((g) => !g.read).length);
  async function Wr(g, m, B = {}) {
    const Ee = await t.ctx.backend.extension_sync_call(g, m, JSON.stringify(B)), We = typeof Ee == "string" ? JSON.parse(Ee) : Ee;
    return We?.success && We?.response ? JSON.parse(We.response) : We;
  }
  async function ti() {
    y(f, !0), y(l, "");
    try {
      const g = { user_id: t.ctx.principal || "" }, [m, B] = await Promise.all([
        t.ctx.callSync("get_dashboard_summary", g).catch(() => null),
        t.ctx.callSync("get_citizenship_status", g).catch(() => null)
      ]);
      y(n, m?.data ?? m, !0), y(a, B?.data ?? B, !0);
    } catch (g) {
      y(l, g?.message || String(g), !0);
    } finally {
      y(f, !1);
    }
  }
  async function ri() {
    y(o, !0);
    try {
      const g = { user_id: t.ctx.principal || "" }, m = await Wr("notifications", "get_notifications", g).catch(() => ({ data: [] })), B = m?.data ?? m?.notifications ?? m;
      y(i, Array.isArray(B) ? B : [], !0);
    } catch {
      y(i, [], !0);
    } finally {
      y(o, !1);
    }
  }
  async function Gr() {
    y(b, !0), y(p, "");
    try {
      const g = await t.ctx.callSync("get_invoice_information", { user_id: t.ctx.principal || "" });
      g?.success ? y(_, g.data, !0) : y(p, g?.error || "Failed to load invoices", !0);
    } catch (g) {
      y(p, g?.message || String(g), !0);
    } finally {
      y(b, !1);
    }
  }
  async function Yr() {
    y(c, !0), y(C, "");
    try {
      const g = await t.ctx.callSync("list_payment_accounts", { user_id: t.ctx.principal || "" });
      g?.success && g?.data ? y(h, g.data, !0) : y(h, [], !0);
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
      Gr(),
      Yr()
    ]);
  });
  async function Nn(g) {
    try {
      const m = !g.read;
      await Wr("notifications", "mark_as_read", { id: g.id, read: m }), y(i, d(i).map((B) => B.id === g.id ? { ...B, read: m } : B), !0);
    } catch {
    }
  }
  async function ni(g) {
    try {
      await Wr("notifications", "delete_notification", { id: g.id }), y(i, d(i).filter((m) => m.id !== g.id), !0);
    } catch {
    }
  }
  function In(g) {
    d(u) === g.id ? y(u, null) : (y(u, g.id, !0), g.read || Nn(g));
  }
  function ai(g) {
    return g ? g.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/\*(.+?)\*/g, "<em>$1</em>").replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-blue-600 underline hover:text-blue-800" target="_blank" rel="noopener">$1</a>').replace(/`([^`]+)`/g, '<code class="bg-gray-100 dark:bg-gray-700 px-1 py-0.5 rounded text-xs">$1</code>').replace(/^\s*[-*]\s+(.+)$/gm, '<li class="ml-4">$1</li>').replace(/(<li.*<\/li>\n?)+/g, (m) => '<ul class="list-disc ml-2 space-y-1">' + m + "</ul>").replace(/\n{2,}/g, '</p><p class="mt-2">').replace(/\n/g, "<br>").replace(/^/, "<p>").replace(/$/, "</p>") : "";
  }
  function ii(g) {
    if (!g) return "";
    const m = Date.now() - g;
    if (m < 0) return "just now";
    const B = Math.floor(m / 1e3);
    if (B < 60) return "just now";
    const Ee = Math.floor(B / 60);
    if (Ee < 60) return `${Ee}m ago`;
    const We = Math.floor(Ee / 60);
    if (We < 24) return `${We}h ago`;
    const ar = Math.floor(We / 24);
    if (ar < 30) return `${ar}d ago`;
    const ir = Math.floor(ar / 30);
    return ir < 12 ? `${ir}mo ago` : `${Math.floor(ir / 12)}y ago`;
  }
  function si(g) {
    if (!g) return "";
    const m = new Date(g), B = (Ee) => String(Ee).padStart(2, "0");
    return `${m.getFullYear()}-${B(m.getMonth() + 1)}-${B(m.getDate())} ${B(m.getHours())}:${B(m.getMinutes())}`;
  }
  function li(g) {
    switch (g?.toLowerCase()) {
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
  async function oi(g) {
    y(Ve, g, !0), y(be, !0), y(ve, !0), y(Y, null);
    try {
      const m = await t.ctx.callSync("get_invoice_deposit_address", { invoice_id: g.id });
      m?.success && y(Y, m.data, !0);
    } catch {
    } finally {
      y(ve, !1);
    }
  }
  function ui(g) {
    try {
      const m = document.createElement("textarea");
      m.value = g, m.style.position = "fixed", m.style.left = "-9999px", document.body.appendChild(m), m.select(), document.execCommand("copy"), document.body.removeChild(m), y(nr, !0), setTimeout(
        () => {
          y(nr, !1);
        },
        2e3
      );
    } catch {
    }
  }
  async function fi(g) {
    try {
      const m = await t.ctx.backend.refresh_invoice(JSON.stringify({ invoice_id: g.id }));
      (typeof m == "string" ? JSON.parse(m) : m)?.success && await Gr();
    } catch {
    }
  }
  async function di(g) {
    try {
      (await t.ctx.callSync("demo_mark_invoice_paid", { invoice_id: g.id }))?.success && await Gr();
    } catch {
    }
  }
  async function ci() {
    if (!(!d(P) || !d(j))) {
      y(Ie, !0);
      try {
        (await t.ctx.callSync("add_payment_account", {
          user_id: t.ctx.principal || "",
          address: d(P),
          label: d(j),
          network: d(re),
          currency: d(ie)
        }))?.success && (await Yr(), y(j, ""), y(P, ""), y(re, "ICP"), y(ie, "ICP"), y(S, !1));
      } catch {
      } finally {
        y(Ie, !1);
      }
    }
  }
  async function vi(g) {
    try {
      (await t.ctx.callSync("remove_payment_account", { user_id: t.ctx.principal || "", account_id: g }))?.success && await Yr();
    } catch {
    }
  }
  function Jr(g) {
    return !g || typeof g != "object" ? [] : Object.entries(g).filter(([m]) => !m.startsWith("_"));
  }
  var Dn = fo(), hi = v(Dn);
  {
    var _i = (g) => {
      var m = Cl(), B = v(m), Ee = x(v(B), 6);
      ne("click", Ee, () => t.ctx.navigate?.("/join")), T(g, m);
    }, gi = (g) => {
      var m = uo(), B = en(m), Ee = v(B), We = v(Ee), ar = x(We), ir = v(ar), pi = x(B, 2);
      {
        var bi = (Ge) => {
          var wt = Tl();
          T(Ge, wt);
        }, yi = (Ge) => {
          var wt = Ml(), Cr = x(v(wt));
          fe(() => O(Cr, ` ${d(l) ?? ""}`)), T(Ge, wt);
        }, xi = (Ge) => {
          var wt = oo(), Cr = en(wt);
          {
            var mi = (w) => {
              var N = Dl(), se = v(N), J = v(se), he = x(v(J), 2);
              {
                var k = (W) => {
                  var Z = Pl(), Q = v(Z);
                  fe(
                    (H) => {
                      fr(Z, 1, H), O(Q, `${d(a).status === "active" ? "✓" : "✗"}
									${(d(a).status_label || d(a).status) ?? ""}`);
                    },
                    [
                      () => ur(r("inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-semibold", d(a).status === "active" ? "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400" : "bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-400"))
                    ]
                  ), T(W, Z);
                };
                oe(he, (W) => {
                  d(a).status && W(k);
                });
              }
              var le = x(J, 2);
              {
                var Se = (W) => {
                  var Z = Il();
                  zt(Z, 21, () => Jr(d(a)).filter(([Q]) => Q !== "status" && Q !== "status_label"), lr, (Q, H) => {
                    var $ = /* @__PURE__ */ sr(() => ts(d(H), 2));
                    let Ae = () => d($)[0], L = () => d($)[1];
                    var ee = Nl(), z = v(ee), Ce = v(z), ue = x(z, 2), Qe = v(ue);
                    fe(
                      (K, ye) => {
                        O(Ce, K), O(Qe, ye);
                      },
                      [
                        () => Ae().replace(/_/g, " "),
                        () => typeof L() == "object" ? JSON.stringify(L()) : L()
                      ]
                    ), T(Q, ee);
                  }), T(W, Z);
                }, De = /* @__PURE__ */ sr(() => Jr(d(a)).filter(([W]) => W !== "status" && W !== "status_label").length > 0);
                oe(le, (W) => {
                  d(De) && W(Se);
                });
              }
              T(w, N);
            }, wi = /* @__PURE__ */ sr(() => d(a) && Jr(d(a)).length > 0);
            oe(Cr, (w) => {
              d(wi) && w(mi);
            });
          }
          var Rn = x(Cr, 2), On = v(Rn), ki = v(On), Ei = x(v(ki), 2);
          {
            var Si = (w) => {
              var N = Rl(), se = v(N);
              fe(() => O(se, d(Pn))), T(w, N);
            };
            oe(Ei, (w) => {
              d(Pn) > 0 && w(Si);
            });
          }
          var Ai = x(On, 2);
          {
            var Ci = (w) => {
              var N = Ol();
              T(w, N);
            }, Ti = (w) => {
              var N = Fl();
              T(w, N);
            }, Mi = (w) => {
              var N = Hl(), se = v(N), J = x(v(se));
              zt(J, 21, () => d(i), (he) => he.id, (he, k) => {
                var le = Bl(), Se = v(le), De = v(Se);
                {
                  var W = (_e) => {
                    var vt = jl();
                    T(_e, vt);
                  };
                  oe(De, (_e) => {
                    d(k).read || _e(W);
                  });
                }
                var Z = x(Se), Q = v(Z), H = v(Q), $ = x(Q, 2);
                {
                  var Ae = (_e) => {
                    var vt = Ll();
                    bl(vt, () => ai(d(k).message || d(k).body), !0), T(_e, vt);
                  };
                  oe($, (_e) => {
                    d(u) === d(k).id && (d(k).message || d(k).body) && _e(Ae);
                  });
                }
                var L = x(Z), ee = v(L), z = x(L), Ce = v(z), ue = x(z), Qe = v(ue), K = v(Qe), ye = v(K), U = x(K, 2), xe = v(U), kt = x(U, 2);
                fe(
                  (_e, vt, Kr, Xr, Zr) => {
                    fr(le, 1, _e), fr(Q, 1, vt), O(H, d(k).title || "Notification"), O(ee, d(k).sender || "—"), tn(z, "title", Kr), O(Ce, Xr), tn(K, "title", d(u) === d(k).id ? "Collapse" : "Read message"), fr(K, 1, Zr), O(ye, d(u) === d(k).id ? "👁‍🗨" : "👁"), tn(U, "title", d(k).read ? "Mark as unread" : "Mark as read"), O(xe, d(k).read ? "✉" : "📬");
                  },
                  [
                    () => ur(r("border-b border-gray-100 dark:border-gray-700 last:border-b-0 cursor-pointer transition-colors", d(k).read ? "hover:bg-gray-50 dark:hover:bg-gray-750" : "bg-blue-50/50 dark:bg-blue-900/10 hover:bg-blue-50 dark:hover:bg-blue-900/20")),
                    () => ur(r("truncate text-sm", d(k).read ? "text-gray-600 dark:text-gray-400" : "font-semibold text-gray-900 dark:text-white")),
                    () => si(d(k).timestamp_ms),
                    () => ii(d(k).timestamp_ms),
                    () => ur(r("p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors", d(u) === d(k).id ? "text-blue-500" : "text-gray-400"))
                  ]
                ), ne("click", le, () => In(d(k))), ne("click", Qe, (_e) => _e.stopPropagation()), ne("click", K, () => In(d(k))), ne("click", U, () => Nn(d(k))), ne("click", kt, () => ni(d(k))), T(he, le);
              }), T(w, N);
            };
            oe(Ai, (w) => {
              d(o) ? w(Ci) : d(i).length === 0 ? w(Ti, 1) : w(Mi, -1);
            });
          }
          var Fn = x(Rn, 2), Pi = x(v(Fn), 4);
          {
            var Ni = (w) => {
              var N = ql();
              T(w, N);
            }, Ii = (w) => {
              var N = zl(), se = v(N);
              fe(() => O(se, d(p))), T(w, N);
            }, Di = (w) => {
              var N = Gl(), se = v(N), J = x(v(se));
              zt(J, 21, () => d(_).invoices, lr, (he, k) => {
                var le = Wl(), Se = v(le), De = v(Se), W = v(De), Z = x(Se), Q = v(Z), H = x(Z), $ = v(H), Ae = x(H), L = v(Ae), ee = v(L), z = x(Ae), Ce = v(z);
                {
                  var ue = (K) => {
                    var ye = Ul(), U = v(ye), xe = x(U, 2), kt = x(xe, 2);
                    ne("click", U, () => oi(d(k))), ne("click", xe, () => fi(d(k))), ne("click", kt, () => di(d(k))), T(K, ye);
                  }, Qe = (K) => {
                    var ye = Vl(), U = v(ye);
                    fe(() => O(U, d(k).paid_on || "—")), T(K, ye);
                  };
                  oe(Ce, (K) => {
                    d(k).status === "Pending" || d(k).status === "Overdue" ? K(ue) : K(Qe, -1);
                  });
                }
                fe(
                  (K) => {
                    O(W, d(k).metadata || "Invoice"), O(Q, d(k).amount), O($, d(k).currency || "ckBTC"), fr(L, 1, K), O(ee, d(k).status);
                  },
                  [
                    () => ur(r("px-2.5 py-0.5 text-xs font-medium rounded-full", li(d(k).status)))
                  ]
                ), T(he, le);
              }), T(w, N);
            }, Ri = (w) => {
              var N = Yl();
              T(w, N);
            };
            oe(Pi, (w) => {
              d(b) ? w(Ni) : d(p) ? w(Ii, 1) : d(_)?.invoices?.length > 0 ? w(Di, 2) : w(Ri, -1);
            });
          }
          var jn = x(Fn, 2);
          {
            var Oi = (w) => {
              var N = Zl(), se = v(N), J = v(se), he = x(v(J), 2), k = x(J, 2), le = v(k);
              {
                var Se = (H) => {
                  var $ = Jl();
                  T(H, $);
                }, De = (H) => {
                  var $ = Kl(), Ae = en($), L = v(Ae), ee = v(L), z = x(v(ee), 2), Ce = v(z), ue = x(ee, 2), Qe = x(v(ue), 2), K = v(Qe), ye = x(Ae, 2), U = x(v(ye), 2), xe = v(U), kt = x(v(xe), 2), _e = v(kt), vt = x(xe, 2), Kr = x(v(vt), 2), Xr = v(Kr), Zr = x(ye, 2), Ui = x(v(Zr), 2), Hn = v(Ui), Vi = v(Hn), qn = x(Hn, 2), Wi = v(qn);
                  fe(() => {
                    O(Ce, d(Y).invoice_id), O(K, `${d(Y).amount_due ?? ""} ${d(Y).currency ?? ""}`), O(_e, d(Y).owner), O(Xr, d(Y).subaccount), O(Vi, `icw --token ckbtc transfer \\
  ${d(Y).owner ?? ""} ${d(Y).amount_due ?? ""} \\
  --subaccount ${d(Y).subaccount ?? ""}`), O(Wi, d(nr) ? "✓" : "📋");
                  }), ne("click", qn, () => ui(`icw --token ckbtc transfer ${d(Y).owner} ${d(Y).amount_due} --subaccount ${d(Y).subaccount}`)), T(H, $);
                }, W = (H) => {
                  var $ = Xl();
                  T(H, $);
                };
                oe(le, (H) => {
                  d(ve) ? H(Se) : d(Y) ? H(De, 1) : H(W, -1);
                });
              }
              var Z = x(k, 2), Q = v(Z);
              ne("click", N, () => y(be, !1)), ne("click", se, (H) => H.stopPropagation()), ne("click", he, () => y(be, !1)), ne("click", Q, () => y(be, !1)), T(w, N);
            };
            oe(jn, (w) => {
              d(be) && w(Oi);
            });
          }
          var Fi = x(jn, 2), Ln = v(Fi), ji = x(v(Ln), 2), Bn = x(Ln, 2);
          {
            var Li = (w) => {
              var N = eo(), se = v(N), J = x(v(se), 2), he = x(se, 2), k = v(he), le = x(v(k), 2);
              zt(le, 21, () => Vr, lr, (L, ee) => {
                var z = Ql(), Ce = v(z), ue = {};
                fe(() => {
                  O(Ce, d(ee).label), ue !== (ue = d(ee).value) && (z.value = (z.__value = d(ee).value) ?? "");
                }), T(L, z);
              });
              var Se = x(k, 2), De = x(v(Se), 2);
              zt(De, 21, () => d($a), lr, (L, ee) => {
                var z = $l(), Ce = v(z), ue = {};
                fe(() => {
                  O(Ce, d(ee).label), ue !== (ue = d(ee).value) && (z.value = (z.__value = d(ee).value) ?? "");
                }), T(L, z);
              });
              var W = x(he, 2), Z = x(v(W), 2), Q = x(W, 2), H = v(Q), $ = x(H, 2), Ae = v($);
              fe(() => {
                $.disabled = d(Ie) || !d(j) || !d(P), O(Ae, d(Ie) ? "Saving…" : "Save");
              }), aa(J, () => d(j), (L) => y(j, L)), ra(le, () => d(re), (L) => y(re, L)), ra(De, () => d(ie), (L) => y(ie, L)), aa(Z, () => d(P), (L) => y(P, L)), ne("click", H, () => {
                y(S, !1), y(j, ""), y(P, "");
              }), ne("click", $, ci), T(w, N);
            };
            oe(Bn, (w) => {
              d(S) && w(Li);
            });
          }
          var Bi = x(Bn, 2);
          {
            var Hi = (w) => {
              var N = to();
              T(w, N);
            }, qi = (w) => {
              var N = ro();
              T(w, N);
            }, zi = (w) => {
              var N = lo();
              zt(N, 21, () => d(h), lr, (se, J) => {
                var he = so(), k = v(he), le = v(k), Se = v(le), De = x(le, 2);
                {
                  var W = (U) => {
                    var xe = no();
                    T(U, xe);
                  };
                  oe(De, (U) => {
                    d(J).is_verified && U(W);
                  });
                }
                var Z = x(k, 2), Q = v(Z), H = v(Q), $ = x(Q, 2), Ae = v($), L = x(Z, 2), ee = v(L), z = v(ee), Ce = x(L, 2), ue = v(Ce);
                {
                  var Qe = (U) => {
                    var xe = ao(), kt = v(xe);
                    fe((_e) => O(kt, `Created: ${_e ?? ""}`), [
                      () => new Date(d(J).created_at).toLocaleDateString()
                    ]), T(U, xe);
                  }, K = (U) => {
                    var xe = io();
                    T(U, xe);
                  };
                  oe(ue, (U) => {
                    d(J).created_at ? U(Qe) : U(K, -1);
                  });
                }
                var ye = x(ue, 2);
                fe(() => {
                  O(Se, d(J).label), O(H, d(J).network), O(Ae, d(J).currency), O(z, d(J).address);
                }), ne("click", ye, () => vi(d(J).id)), T(se, he);
              }), T(w, N);
            };
            oe(Bi, (w) => {
              d(c) && d(h).length === 0 ? w(Hi) : d(h).length === 0 ? w(qi, 1) : w(zi, -1);
            });
          }
          ne("click", ji, () => y(S, !d(S))), T(Ge, wt);
        };
        oe(pi, (Ge) => {
          d(f) ? Ge(bi) : d(l) ? Ge(yi, 1) : Ge(xi, -1);
        });
      }
      fe(
        (Ge) => {
          O(We, `${Ge ?? ""}, `), O(ir, d(n)?.user_name || "Member");
        },
        [() => ei()]
      ), T(g, m);
    };
    oe(hi, (g) => {
      t.ctx.isAuthenticated ? g(gi, -1) : g(_i);
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
