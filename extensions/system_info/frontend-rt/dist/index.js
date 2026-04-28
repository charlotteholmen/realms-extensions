var Gr = Object.defineProperty;
var Un = (e) => {
  throw TypeError(e);
};
var Jr = (e, t, n) => t in e ? Gr(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Te = (e, t, n) => Jr(e, typeof t != "symbol" ? t + "" : t, n), pn = (e, t, n) => t.has(e) || Un("Cannot " + n);
var f = (e, t, n) => (pn(e, t, "read from private field"), n ? n.call(e) : t.get(e)), w = (e, t, n) => t.has(e) ? Un("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), b = (e, t, n, s) => (pn(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), C = (e, t, n) => (pn(e, t, "access private method"), n);
var rr = Array.isArray, Wr = Array.prototype.indexOf, xt = Array.prototype.includes, dn = Array.from, $r = Object.defineProperty, It = Object.getOwnPropertyDescriptor, Xr = Object.prototype, Zr = Array.prototype, Qr = Object.getPrototypeOf, Yn = Object.isExtensible;
const es = () => {
};
function ts(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function sr() {
  var e, t, n = new Promise((s, r) => {
    e = s, t = r;
  });
  return { promise: n, resolve: e, reject: t };
}
function gn(e, t) {
  if (Array.isArray(e))
    return e;
  if (!(Symbol.iterator in e))
    return Array.from(e);
  const n = [];
  for (const s of e)
    if (n.push(s), n.length === t) break;
  return n;
}
const Y = 2, St = 4, hn = 8, ir = 1 << 24, Ie = 16, Re = 32, Xe = 64, yn = 128, ge = 512, P = 1024, U = 2048, Pe = 4096, $ = 8192, we = 16384, _t = 32768, Kn = 1 << 25, Tt = 65536, bn = 1 << 17, ns = 1 << 18, Nt = 1 << 19, rs = 1 << 20, Ue = 1 << 25, vt = 65536, ln = 1 << 21, zt = 1 << 22, $e = 1 << 23, wn = Symbol("$state"), je = new class extends Error {
  constructor() {
    super(...arguments);
    Te(this, "name", "StaleReactionError");
    Te(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
function ss() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function is(e, t, n) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function fs(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function ls() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function as(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function os() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function us() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function cs() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function vs() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function ds() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
const hs = 1, _s = 2, ps = 16, gs = 1, ws = 2, B = Symbol(), ms = "http://www.w3.org/1999/xhtml";
function ys() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function bs() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function fr(e) {
  return e === this.v;
}
function ks(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function lr(e) {
  return !ks(e, this.v);
}
let ye = null;
function At(e) {
  ye = e;
}
function ar(e, t = !1, n) {
  ye = {
    p: ye,
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
function or(e) {
  var t = (
    /** @type {ComponentContext} */
    ye
  ), n = t.e;
  if (n !== null) {
    t.e = null;
    for (var s of n)
      Mr(s);
  }
  return t.i = !0, ye = t.p, /** @type {T} */
  {};
}
function ur() {
  return !0;
}
let pt = [];
function Es() {
  var e = pt;
  pt = [], ts(e);
}
function wt(e) {
  if (pt.length === 0) {
    var t = pt;
    queueMicrotask(() => {
      t === pt && Es();
    });
  }
  pt.push(e);
}
function cr(e) {
  var t = E;
  if (t === null)
    return k.f |= $e, e;
  if ((t.f & _t) === 0 && (t.f & St) === 0)
    throw e;
  We(e, t);
}
function We(e, t) {
  for (; t !== null; ) {
    if ((t.f & yn) !== 0) {
      if ((t.f & _t) === 0)
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
const xs = -7169;
function O(e, t) {
  e.f = e.f & xs | t;
}
function Fn(e) {
  (e.f & ge) !== 0 || e.deps === null ? O(e, P) : O(e, Pe);
}
function vr(e) {
  if (e !== null)
    for (const t of e)
      (t.f & Y) === 0 || (t.f & vt) === 0 || (t.f ^= vt, vr(
        /** @type {Derived} */
        t.deps
      ));
}
function dr(e, t, n) {
  (e.f & U) !== 0 ? t.add(e) : (e.f & Pe) !== 0 && n.add(e), vr(e.deps), O(e, P);
}
const et = /* @__PURE__ */ new Set();
let S = null, Me = null, kn = null, mn = !1, gt = null, Qt = null;
var Gn = 0;
let Ss = 1;
var mt, yt, rt, qe, Fe, jt, ie, qt, Ge, Be, Oe, bt, kt, st, D, en, hr, tn, En, nn, Ts;
const un = class un {
  constructor() {
    w(this, D);
    Te(this, "id", Ss++);
    /**
     * The current values of any signals that are updated in this batch.
     * Tuple format: [value, is_derived] (note: is_derived is false for deriveds, too, if they were overridden via assignment)
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Value, [any, boolean]>}
     */
    Te(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any signals (sources and deriveds) that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Value, any>}
     */
    Te(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<(batch: Batch) => void>}
     */
    w(this, mt, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    w(this, yt, /* @__PURE__ */ new Set());
    /**
     * Callbacks that should run only when a fork is committed.
     * @type {Set<(batch: Batch) => void>}
     */
    w(this, rt, /* @__PURE__ */ new Set());
    /**
     * Async effects that are currently in flight
     * @type {Map<Effect, number>}
     */
    w(this, qe, /* @__PURE__ */ new Map());
    /**
     * Async effects that are currently in flight, _not_ inside a pending boundary
     * @type {Map<Effect, number>}
     */
    w(this, Fe, /* @__PURE__ */ new Map());
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    w(this, jt, null);
    /**
     * The root effects that need to be flushed
     * @type {Effect[]}
     */
    w(this, ie, []);
    /**
     * Effects created while this batch was active.
     * @type {Effect[]}
     */
    w(this, qt, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    w(this, Ge, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    w(this, Be, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    w(this, Oe, /* @__PURE__ */ new Map());
    /**
     * Inverse of #skipped_branches which we need to tell prior batches to unskip them when committing
     * @type {Set<Effect>}
     */
    w(this, bt, /* @__PURE__ */ new Set());
    Te(this, "is_fork", !1);
    w(this, kt, !1);
    /** @type {Set<Batch>} */
    w(this, st, /* @__PURE__ */ new Set());
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(t) {
    f(this, Oe).has(t) || f(this, Oe).set(t, { d: [], m: [] }), f(this, bt).delete(t);
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   * @param {(e: Effect) => void} callback
   */
  unskip_effect(t, n = (s) => this.schedule(s)) {
    var s = f(this, Oe).get(t);
    if (s) {
      f(this, Oe).delete(t);
      for (var r of s.d)
        O(r, U), n(r);
      for (r of s.m)
        O(r, Pe), n(r);
    }
    f(this, bt).add(t);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Value} source
   * @param {any} value
   * @param {boolean} [is_derived]
   */
  capture(t, n, s = !1) {
    t.v !== B && !this.previous.has(t) && this.previous.set(t, t.v), (t.f & $e) === 0 && (this.current.set(t, [n, s]), Me?.set(t, n)), this.is_fork || (t.v = n);
  }
  activate() {
    S = this;
  }
  deactivate() {
    S = null, Me = null;
  }
  flush() {
    try {
      mn = !0, S = this, C(this, D, tn).call(this);
    } finally {
      Gn = 0, kn = null, gt = null, Qt = null, mn = !1, S = null, Me = null, at.clear();
    }
  }
  discard() {
    for (const t of f(this, yt)) t(this);
    f(this, yt).clear(), f(this, rt).clear(), et.delete(this);
  }
  /**
   * @param {Effect} effect
   */
  register_created_effect(t) {
    f(this, qt).push(t);
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  increment(t, n) {
    let s = f(this, qe).get(n) ?? 0;
    if (f(this, qe).set(n, s + 1), t) {
      let r = f(this, Fe).get(n) ?? 0;
      f(this, Fe).set(n, r + 1);
    }
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   * @param {boolean} skip - whether to skip updates (because this is triggered by a stale reaction)
   */
  decrement(t, n, s) {
    let r = f(this, qe).get(n) ?? 0;
    if (r === 1 ? f(this, qe).delete(n) : f(this, qe).set(n, r - 1), t) {
      let i = f(this, Fe).get(n) ?? 0;
      i === 1 ? f(this, Fe).delete(n) : f(this, Fe).set(n, i - 1);
    }
    f(this, kt) || s || (b(this, kt, !0), wt(() => {
      b(this, kt, !1), this.flush();
    }));
  }
  /**
   * @param {Set<Effect>} dirty_effects
   * @param {Set<Effect>} maybe_dirty_effects
   */
  transfer_effects(t, n) {
    for (const s of t)
      f(this, Ge).add(s);
    for (const s of n)
      f(this, Be).add(s);
    t.clear(), n.clear();
  }
  /** @param {(batch: Batch) => void} fn */
  oncommit(t) {
    f(this, mt).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    f(this, yt).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  on_fork_commit(t) {
    f(this, rt).add(t);
  }
  run_fork_commit_callbacks() {
    for (const t of f(this, rt)) t(this);
    f(this, rt).clear();
  }
  settled() {
    return (f(this, jt) ?? b(this, jt, sr())).promise;
  }
  static ensure() {
    if (S === null) {
      const t = S = new un();
      mn || (et.add(S), wt(() => {
        S === t && t.flush();
      }));
    }
    return S;
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
    if (kn = t, t.b?.is_pending && (t.f & (St | hn | ir)) !== 0 && (t.f & _t) === 0) {
      t.b.defer_effect(t);
      return;
    }
    for (var n = t; n.parent !== null; ) {
      n = n.parent;
      var s = n.f;
      if (gt !== null && n === E && (k === null || (k.f & Y) === 0))
        return;
      if ((s & (Xe | Re)) !== 0) {
        if ((s & P) === 0)
          return;
        n.f ^= P;
      }
    }
    f(this, ie).push(n);
  }
};
mt = new WeakMap(), yt = new WeakMap(), rt = new WeakMap(), qe = new WeakMap(), Fe = new WeakMap(), jt = new WeakMap(), ie = new WeakMap(), qt = new WeakMap(), Ge = new WeakMap(), Be = new WeakMap(), Oe = new WeakMap(), bt = new WeakMap(), kt = new WeakMap(), st = new WeakMap(), D = new WeakSet(), en = function() {
  return this.is_fork || f(this, Fe).size > 0;
}, hr = function() {
  for (const s of f(this, st))
    for (const r of f(s, Fe).keys()) {
      for (var t = !1, n = r; n.parent !== null; ) {
        if (f(this, Oe).has(n)) {
          t = !0;
          break;
        }
        n = n.parent;
      }
      if (!t)
        return !0;
    }
  return !1;
}, tn = function() {
  var a;
  if (Gn++ > 1e3 && (et.delete(this), As()), !C(this, D, en).call(this)) {
    for (const l of f(this, Ge))
      f(this, Be).delete(l), O(l, U), this.schedule(l);
    for (const l of f(this, Be))
      O(l, Pe), this.schedule(l);
  }
  const t = f(this, ie);
  b(this, ie, []), this.apply();
  var n = gt = [], s = [], r = Qt = [];
  for (const l of t)
    try {
      C(this, D, En).call(this, l, n, s);
    } catch (o) {
      throw gr(l), o;
    }
  if (S = null, r.length > 0) {
    var i = un.ensure();
    for (const l of r)
      i.schedule(l);
  }
  if (gt = null, Qt = null, C(this, D, en).call(this) || C(this, D, hr).call(this)) {
    C(this, D, nn).call(this, s), C(this, D, nn).call(this, n);
    for (const [l, o] of f(this, Oe))
      pr(l, o);
  } else {
    f(this, qe).size === 0 && et.delete(this), f(this, Ge).clear(), f(this, Be).clear();
    for (const l of f(this, mt)) l(this);
    f(this, mt).clear(), Jn(s), Jn(n), f(this, jt)?.resolve();
  }
  var u = (
    /** @type {Batch | null} */
    /** @type {unknown} */
    S
  );
  if (f(this, ie).length > 0) {
    const l = u ?? (u = this);
    f(l, ie).push(...f(this, ie).filter((o) => !f(l, ie).includes(o)));
  }
  u !== null && (et.add(u), C(a = u, D, tn).call(a));
}, /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
En = function(t, n, s) {
  t.f ^= P;
  for (var r = t.first; r !== null; ) {
    var i = r.f, u = (i & (Re | Xe)) !== 0, a = u && (i & P) !== 0, l = a || (i & $) !== 0 || f(this, Oe).has(r);
    if (!l && r.fn !== null) {
      u ? r.f ^= P : (i & St) !== 0 ? n.push(r) : Kt(r) && ((i & Ie) !== 0 && f(this, Be).add(r), Mt(r));
      var o = r.first;
      if (o !== null) {
        r = o;
        continue;
      }
    }
    for (; r !== null; ) {
      var v = r.next;
      if (v !== null) {
        r = v;
        break;
      }
      r = r.parent;
    }
  }
}, /**
 * @param {Effect[]} effects
 */
nn = function(t) {
  for (var n = 0; n < t.length; n += 1)
    dr(t[n], f(this, Ge), f(this, Be));
}, Ts = function() {
  var v, _, h;
  for (const d of et) {
    var t = d.id < this.id, n = [];
    for (const [c, [m, y]] of this.current) {
      if (d.current.has(c)) {
        var s = (
          /** @type {[any, boolean]} */
          d.current.get(c)[0]
        );
        if (t && m !== s)
          d.current.set(c, [m, y]);
        else
          continue;
      }
      n.push(c);
    }
    var r = [...d.current.keys()].filter((c) => !this.current.has(c));
    if (r.length === 0)
      t && d.discard();
    else if (n.length > 0) {
      if (t)
        for (const c of f(this, bt))
          d.unskip_effect(c, (m) => {
            var y;
            (m.f & (Ie | zt)) !== 0 ? d.schedule(m) : C(y = d, D, nn).call(y, [m]);
          });
      d.activate();
      var i = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Map();
      for (var a of n)
        _r(a, r, i, u);
      u = /* @__PURE__ */ new Map();
      var l = [...d.current.keys()].filter(
        (c) => this.current.has(c) ? (
          /** @type {[any, boolean]} */
          this.current.get(c)[0] !== c
        ) : !0
      );
      for (const c of f(this, qt))
        (c.f & (we | $ | bn)) === 0 && On(c, l, u) && ((c.f & (zt | Ie)) !== 0 ? (O(c, U), d.schedule(c)) : f(d, Ge).add(c));
      if (f(d, ie).length > 0) {
        d.apply();
        for (var o of f(d, ie))
          C(v = d, D, En).call(v, o, [], []);
        b(d, ie, []);
      }
      d.deactivate();
    }
  }
  for (const d of et)
    f(d, st).has(this) && (f(d, st).delete(this), f(d, st).size === 0 && !C(_ = d, D, en).call(_) && (d.activate(), C(h = d, D, tn).call(h)));
};
let dt = un;
function As() {
  try {
    os();
  } catch (e) {
    We(e, kn);
  }
}
let Le = null;
function Jn(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var s = e[n++];
      if ((s.f & (we | $)) === 0 && Kt(s) && (Le = /* @__PURE__ */ new Set(), Mt(s), s.deps === null && s.first === null && s.nodes === null && s.teardown === null && s.ac === null && Rr(s), Le?.size > 0)) {
        at.clear();
        for (const r of Le) {
          if ((r.f & (we | $)) !== 0) continue;
          const i = [r];
          let u = r.parent;
          for (; u !== null; )
            Le.has(u) && (Le.delete(u), i.push(u)), u = u.parent;
          for (let a = i.length - 1; a >= 0; a--) {
            const l = i[a];
            (l.f & (we | $)) === 0 && Mt(l);
          }
        }
        Le.clear();
      }
    }
    Le = null;
  }
}
function _r(e, t, n, s) {
  if (!n.has(e) && (n.add(e), e.reactions !== null))
    for (const r of e.reactions) {
      const i = r.f;
      (i & Y) !== 0 ? _r(
        /** @type {Derived} */
        r,
        t,
        n,
        s
      ) : (i & (zt | Ie)) !== 0 && (i & U) === 0 && On(r, t, s) && (O(r, U), Dn(
        /** @type {Effect} */
        r
      ));
    }
}
function On(e, t, n) {
  const s = n.get(e);
  if (s !== void 0) return s;
  if (e.deps !== null)
    for (const r of e.deps) {
      if (xt.call(t, r))
        return !0;
      if ((r.f & Y) !== 0 && On(
        /** @type {Derived} */
        r,
        t,
        n
      ))
        return n.set(
          /** @type {Derived} */
          r,
          !0
        ), !0;
    }
  return n.set(e, !1), !1;
}
function Dn(e) {
  S.schedule(e);
}
function pr(e, t) {
  if (!((e.f & Re) !== 0 && (e.f & P) !== 0)) {
    (e.f & U) !== 0 ? t.d.push(e) : (e.f & Pe) !== 0 && t.m.push(e), O(e, P);
    for (var n = e.first; n !== null; )
      pr(n, t), n = n.next;
  }
}
function gr(e) {
  O(e, P);
  for (var t = e.first; t !== null; )
    gr(t), t = t.next;
}
function Cs(e) {
  let t = 0, n = ht(0), s;
  return () => {
    zn() && (p(n), Qs(() => (t === 0 && (s = si(() => e(() => Pt(n)))), t += 1, () => {
      wt(() => {
        t -= 1, t === 0 && (s?.(), s = void 0, Pt(n));
      });
    })));
  };
}
var Ms = Tt | Nt;
function Ns(e, t, n, s) {
  new Rs(e, t, n, s);
}
var ve, Rn, de, it, Q, he, W, fe, Ve, ft, Je, Et, Bt, Vt, He, cn, F, Fs, Os, Ds, xn, rn, sn, Sn, Tn;
class Rs {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(t, n, s, r) {
    w(this, F);
    /** @type {Boundary | null} */
    Te(this, "parent");
    Te(this, "is_pending", !1);
    /**
     * API-level transformError transform function. Transforms errors before they reach the `failed` snippet.
     * Inherited from parent boundary, or defaults to identity.
     * @type {(error: unknown) => unknown}
     */
    Te(this, "transform_error");
    /** @type {TemplateNode} */
    w(this, ve);
    /** @type {TemplateNode | null} */
    w(this, Rn, null);
    /** @type {BoundaryProps} */
    w(this, de);
    /** @type {((anchor: Node) => void)} */
    w(this, it);
    /** @type {Effect} */
    w(this, Q);
    /** @type {Effect | null} */
    w(this, he, null);
    /** @type {Effect | null} */
    w(this, W, null);
    /** @type {Effect | null} */
    w(this, fe, null);
    /** @type {DocumentFragment | null} */
    w(this, Ve, null);
    w(this, ft, 0);
    w(this, Je, 0);
    w(this, Et, !1);
    /** @type {Set<Effect>} */
    w(this, Bt, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    w(this, Vt, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    w(this, He, null);
    w(this, cn, Cs(() => (b(this, He, ht(f(this, ft))), () => {
      b(this, He, null);
    })));
    b(this, ve, t), b(this, de, n), b(this, it, (i) => {
      var u = (
        /** @type {Effect} */
        E
      );
      u.b = this, u.f |= yn, s(i);
    }), this.parent = /** @type {Effect} */
    E.b, this.transform_error = r ?? this.parent?.transform_error ?? ((i) => i), b(this, Q, Ln(() => {
      C(this, F, xn).call(this);
    }, Ms));
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    dr(t, f(this, Bt), f(this, Vt));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!f(this, de).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  update_pending_count(t, n) {
    C(this, F, Sn).call(this, t, n), b(this, ft, f(this, ft) + t), !(!f(this, He) || f(this, Et)) && (b(this, Et, !0), wt(() => {
      b(this, Et, !1), f(this, He) && Ct(f(this, He), f(this, ft));
    }));
  }
  get_effect_pending() {
    return f(this, cn).call(this), p(
      /** @type {Source<number>} */
      f(this, He)
    );
  }
  /** @param {unknown} error */
  error(t) {
    if (!f(this, de).onerror && !f(this, de).failed)
      throw t;
    S?.is_fork ? (f(this, he) && S.skip_effect(f(this, he)), f(this, W) && S.skip_effect(f(this, W)), f(this, fe) && S.skip_effect(f(this, fe)), S.on_fork_commit(() => {
      C(this, F, Tn).call(this, t);
    })) : C(this, F, Tn).call(this, t);
  }
}
ve = new WeakMap(), Rn = new WeakMap(), de = new WeakMap(), it = new WeakMap(), Q = new WeakMap(), he = new WeakMap(), W = new WeakMap(), fe = new WeakMap(), Ve = new WeakMap(), ft = new WeakMap(), Je = new WeakMap(), Et = new WeakMap(), Bt = new WeakMap(), Vt = new WeakMap(), He = new WeakMap(), cn = new WeakMap(), F = new WeakSet(), Fs = function() {
  try {
    b(this, he, _e(() => f(this, it).call(this, f(this, ve))));
  } catch (t) {
    this.error(t);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
Os = function(t) {
  const n = f(this, de).failed;
  n && b(this, fe, _e(() => {
    n(
      f(this, ve),
      () => t,
      () => () => {
      }
    );
  }));
}, Ds = function() {
  const t = f(this, de).pending;
  t && (this.is_pending = !0, b(this, W, _e(() => t(f(this, ve)))), wt(() => {
    var n = b(this, Ve, document.createDocumentFragment()), s = ot();
    n.append(s), b(this, he, C(this, F, sn).call(this, () => _e(() => f(this, it).call(this, s)))), f(this, Je) === 0 && (f(this, ve).before(n), b(this, Ve, null), ut(
      /** @type {Effect} */
      f(this, W),
      () => {
        b(this, W, null);
      }
    ), C(this, F, rn).call(
      this,
      /** @type {Batch} */
      S
    ));
  }));
}, xn = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), b(this, Je, 0), b(this, ft, 0), b(this, he, _e(() => {
      f(this, it).call(this, f(this, ve));
    })), f(this, Je) > 0) {
      var t = b(this, Ve, document.createDocumentFragment());
      Bn(f(this, he), t);
      const n = (
        /** @type {(anchor: Node) => void} */
        f(this, de).pending
      );
      b(this, W, _e(() => n(f(this, ve))));
    } else
      C(this, F, rn).call(
        this,
        /** @type {Batch} */
        S
      );
  } catch (n) {
    this.error(n);
  }
}, /**
 * @param {Batch} batch
 */
rn = function(t) {
  this.is_pending = !1, t.transfer_effects(f(this, Bt), f(this, Vt));
}, /**
 * @template T
 * @param {() => T} fn
 */
sn = function(t) {
  var n = E, s = k, r = ye;
  ze(f(this, Q)), be(f(this, Q)), At(f(this, Q).ctx);
  try {
    return dt.ensure(), t();
  } catch (i) {
    return cr(i), null;
  } finally {
    ze(n), be(s), At(r);
  }
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 * @param {Batch} batch
 */
Sn = function(t, n) {
  var s;
  if (!this.has_pending_snippet()) {
    this.parent && C(s = this.parent, F, Sn).call(s, t, n);
    return;
  }
  b(this, Je, f(this, Je) + t), f(this, Je) === 0 && (C(this, F, rn).call(this, n), f(this, W) && ut(f(this, W), () => {
    b(this, W, null);
  }), f(this, Ve) && (f(this, ve).before(f(this, Ve)), b(this, Ve, null)));
}, /**
 * @param {unknown} error
 */
Tn = function(t) {
  f(this, he) && (te(f(this, he)), b(this, he, null)), f(this, W) && (te(f(this, W)), b(this, W, null)), f(this, fe) && (te(f(this, fe)), b(this, fe, null));
  var n = f(this, de).onerror;
  let s = f(this, de).failed;
  var r = !1, i = !1;
  const u = () => {
    if (r) {
      bs();
      return;
    }
    r = !0, i && ds(), f(this, fe) !== null && ut(f(this, fe), () => {
      b(this, fe, null);
    }), C(this, F, sn).call(this, () => {
      C(this, F, xn).call(this);
    });
  }, a = (l) => {
    try {
      i = !0, n?.(l, u), i = !1;
    } catch (o) {
      We(o, f(this, Q) && f(this, Q).parent);
    }
    s && b(this, fe, C(this, F, sn).call(this, () => {
      try {
        return _e(() => {
          var o = (
            /** @type {Effect} */
            E
          );
          o.b = this, o.f |= yn, s(
            f(this, ve),
            () => l,
            () => u
          );
        });
      } catch (o) {
        return We(
          o,
          /** @type {Effect} */
          f(this, Q).parent
        ), null;
      }
    }));
  };
  wt(() => {
    var l;
    try {
      l = this.transform_error(t);
    } catch (o) {
      We(o, f(this, Q) && f(this, Q).parent);
      return;
    }
    l !== null && typeof l == "object" && typeof /** @type {any} */
    l.then == "function" ? l.then(
      a,
      /** @param {unknown} e */
      (o) => We(o, f(this, Q) && f(this, Q).parent)
    ) : a(l);
  });
};
function Is(e, t, n, s) {
  const r = In;
  var i = e.filter((h) => !h.settled);
  if (n.length === 0 && i.length === 0) {
    s(t.map(r));
    return;
  }
  var u = (
    /** @type {Effect} */
    E
  ), a = Ps(), l = i.length === 1 ? i[0].promise : i.length > 1 ? Promise.all(i.map((h) => h.promise)) : null;
  function o(h) {
    a();
    try {
      s(h);
    } catch (d) {
      (u.f & we) === 0 && We(d, u);
    }
    an();
  }
  if (n.length === 0) {
    l.then(() => o(t.map(r)));
    return;
  }
  var v = wr();
  function _() {
    Promise.all(n.map((h) => /* @__PURE__ */ zs(h))).then((h) => o([...t.map(r), ...h])).catch((h) => We(h, u)).finally(() => v());
  }
  l ? l.then(() => {
    a(), _(), an();
  }) : _();
}
function Ps() {
  var e = (
    /** @type {Effect} */
    E
  ), t = k, n = ye, s = (
    /** @type {Batch} */
    S
  );
  return function(i = !0) {
    ze(e), be(t), At(n), i && (e.f & we) === 0 && (s?.activate(), s?.apply());
  };
}
function an(e = !0) {
  ze(null), be(null), At(null), e && S?.deactivate();
}
function wr() {
  var e = (
    /** @type {Effect} */
    E
  ), t = (
    /** @type {Boundary} */
    e.b
  ), n = (
    /** @type {Batch} */
    S
  ), s = t.is_rendered();
  return t.update_pending_count(1, n), n.increment(s, e), (r = !1) => {
    t.update_pending_count(-1, n), n.decrement(s, e, r);
  };
}
// @__NO_SIDE_EFFECTS__
function In(e) {
  var t = Y | U;
  return E !== null && (E.f |= Nt), {
    ctx: ye,
    deps: null,
    effects: null,
    equals: fr,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      B
    ),
    wv: 0,
    parent: E,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function zs(e, t, n) {
  let s = (
    /** @type {Effect | null} */
    E
  );
  s === null && ss();
  var r = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), i = ht(
    /** @type {V} */
    B
  ), u = !k, a = /* @__PURE__ */ new Map();
  return Zs(() => {
    var l = (
      /** @type {Effect} */
      E
    ), o = sr();
    r = o.promise;
    try {
      Promise.resolve(e()).then(o.resolve, o.reject).finally(an);
    } catch (d) {
      o.reject(d), an();
    }
    var v = (
      /** @type {Batch} */
      S
    );
    if (u) {
      if ((l.f & _t) !== 0)
        var _ = wr();
      if (
        /** @type {Boundary} */
        s.b.is_rendered()
      )
        a.get(v)?.reject(je), a.delete(v);
      else {
        for (const d of a.values())
          d.reject(je);
        a.clear();
      }
      a.set(v, o);
    }
    const h = (d, c = void 0) => {
      if (_) {
        var m = c === je;
        _(m);
      }
      if (!(c === je || (l.f & we) !== 0)) {
        if (v.activate(), c)
          i.f |= $e, Ct(i, c);
        else {
          (i.f & $e) !== 0 && (i.f ^= $e), Ct(i, d);
          for (const [y, N] of a) {
            if (a.delete(y), y === v) break;
            N.reject(je);
          }
        }
        v.deactivate();
      }
    };
    o.promise.then(h, (d) => h(null, d || "unknown"));
  }), Js(() => {
    for (const l of a.values())
      l.reject(je);
  }), new Promise((l) => {
    function o(v) {
      function _() {
        v === r ? l(i) : o(r);
      }
      v.then(_, _);
    }
    o(r);
  });
}
// @__NO_SIDE_EFFECTS__
function Jt(e) {
  const t = /* @__PURE__ */ In(e);
  return Dr(t), t;
}
// @__NO_SIDE_EFFECTS__
function Ls(e) {
  const t = /* @__PURE__ */ In(e);
  return t.equals = lr, t;
}
function js(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      te(
        /** @type {Effect} */
        t[n]
      );
  }
}
function Pn(e) {
  var t, n = E, s = e.parent;
  if (!Ze && s !== null && (s.f & (we | $)) !== 0)
    return ys(), e.v;
  ze(s);
  try {
    e.f &= ~vt, js(e), t = Lr(e);
  } finally {
    ze(n);
  }
  return t;
}
function mr(e) {
  var t = Pn(e);
  if (!e.equals(t) && (e.wv = Pr(), (!S?.is_fork || e.deps === null) && (S !== null ? S.capture(e, t, !0) : e.v = t, e.deps === null))) {
    O(e, P);
    return;
  }
  Ze || (Me !== null ? (zn() || S?.is_fork) && Me.set(e, t) : Fn(e));
}
function qs(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      (t.teardown || t.ac) && (t.teardown?.(), t.ac?.abort(je), t.teardown = es, t.ac = null, Lt(t, 0), jn(t));
}
function yr(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      t.teardown && Mt(t);
}
let An = /* @__PURE__ */ new Set();
const at = /* @__PURE__ */ new Map();
let br = !1;
function ht(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: fr,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function Ae(e, t) {
  const n = ht(e);
  return Dr(n), n;
}
// @__NO_SIDE_EFFECTS__
function Bs(e, t = !1, n = !0) {
  const s = ht(e);
  return t || (s.equals = lr), s;
}
function pe(e, t, n = !1) {
  k !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Ne || (k.f & bn) !== 0) && ur() && (k.f & (Y | Ie | zt | bn)) !== 0 && (me === null || !xt.call(me, e)) && vs();
  let s = n ? Ot(t) : t;
  return Ct(e, s, Qt);
}
function Ct(e, t, n = null) {
  if (!e.equals(t)) {
    at.set(e, Ze ? t : e.v);
    var s = dt.ensure();
    if (s.capture(e, t), (e.f & Y) !== 0) {
      const r = (
        /** @type {Derived} */
        e
      );
      (e.f & U) !== 0 && Pn(r), Me === null && Fn(r);
    }
    e.wv = Pr(), kr(e, U, n), E !== null && (E.f & P) !== 0 && (E.f & (Re | Xe)) === 0 && (ce === null ? ni([e]) : ce.push(e)), !s.is_fork && An.size > 0 && !br && Vs();
  }
  return t;
}
function Vs() {
  br = !1;
  for (const e of An)
    (e.f & P) !== 0 && O(e, Pe), Kt(e) && Mt(e);
  An.clear();
}
function Pt(e) {
  pe(e, e.v + 1);
}
function kr(e, t, n) {
  var s = e.reactions;
  if (s !== null)
    for (var r = s.length, i = 0; i < r; i++) {
      var u = s[i], a = u.f, l = (a & U) === 0;
      if (l && O(u, t), (a & Y) !== 0) {
        var o = (
          /** @type {Derived} */
          u
        );
        Me?.delete(o), (a & vt) === 0 && (a & ge && (E === null || (E.f & ln) === 0) && (u.f |= vt), kr(o, Pe, n));
      } else if (l) {
        var v = (
          /** @type {Effect} */
          u
        );
        (a & Ie) !== 0 && Le !== null && Le.add(v), n !== null ? n.push(v) : Dn(v);
      }
    }
}
function Ot(e) {
  if (typeof e != "object" || e === null || wn in e)
    return e;
  const t = Qr(e);
  if (t !== Xr && t !== Zr)
    return e;
  var n = /* @__PURE__ */ new Map(), s = rr(e), r = /* @__PURE__ */ Ae(0), i = ct, u = (a) => {
    if (ct === i)
      return a();
    var l = k, o = ct;
    be(null), Xn(i);
    var v = a();
    return be(l), Xn(o), v;
  };
  return s && n.set("length", /* @__PURE__ */ Ae(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(a, l, o) {
        (!("value" in o) || o.configurable === !1 || o.enumerable === !1 || o.writable === !1) && us();
        var v = n.get(l);
        return v === void 0 ? u(() => {
          var _ = /* @__PURE__ */ Ae(o.value);
          return n.set(l, _), _;
        }) : pe(v, o.value, !0), !0;
      },
      deleteProperty(a, l) {
        var o = n.get(l);
        if (o === void 0) {
          if (l in a) {
            const v = u(() => /* @__PURE__ */ Ae(B));
            n.set(l, v), Pt(r);
          }
        } else
          pe(o, B), Pt(r);
        return !0;
      },
      get(a, l, o) {
        if (l === wn)
          return e;
        var v = n.get(l), _ = l in a;
        if (v === void 0 && (!_ || It(a, l)?.writable) && (v = u(() => {
          var d = Ot(_ ? a[l] : B), c = /* @__PURE__ */ Ae(d);
          return c;
        }), n.set(l, v)), v !== void 0) {
          var h = p(v);
          return h === B ? void 0 : h;
        }
        return Reflect.get(a, l, o);
      },
      getOwnPropertyDescriptor(a, l) {
        var o = Reflect.getOwnPropertyDescriptor(a, l);
        if (o && "value" in o) {
          var v = n.get(l);
          v && (o.value = p(v));
        } else if (o === void 0) {
          var _ = n.get(l), h = _?.v;
          if (_ !== void 0 && h !== B)
            return {
              enumerable: !0,
              configurable: !0,
              value: h,
              writable: !0
            };
        }
        return o;
      },
      has(a, l) {
        if (l === wn)
          return !0;
        var o = n.get(l), v = o !== void 0 && o.v !== B || Reflect.has(a, l);
        if (o !== void 0 || E !== null && (!v || It(a, l)?.writable)) {
          o === void 0 && (o = u(() => {
            var h = v ? Ot(a[l]) : B, d = /* @__PURE__ */ Ae(h);
            return d;
          }), n.set(l, o));
          var _ = p(o);
          if (_ === B)
            return !1;
        }
        return v;
      },
      set(a, l, o, v) {
        var _ = n.get(l), h = l in a;
        if (s && l === "length")
          for (var d = o; d < /** @type {Source<number>} */
          _.v; d += 1) {
            var c = n.get(d + "");
            c !== void 0 ? pe(c, B) : d in a && (c = u(() => /* @__PURE__ */ Ae(B)), n.set(d + "", c));
          }
        if (_ === void 0)
          (!h || It(a, l)?.writable) && (_ = u(() => /* @__PURE__ */ Ae(void 0)), pe(_, Ot(o)), n.set(l, _));
        else {
          h = _.v !== B;
          var m = u(() => Ot(o));
          pe(_, m);
        }
        var y = Reflect.getOwnPropertyDescriptor(a, l);
        if (y?.set && y.set.call(v, o), !h) {
          if (s && typeof l == "string") {
            var N = (
              /** @type {Source<number>} */
              n.get("length")
            ), T = Number(l);
            Number.isInteger(T) && T >= N.v && pe(N, T + 1);
          }
          Pt(r);
        }
        return !0;
      },
      ownKeys(a) {
        p(r);
        var l = Reflect.ownKeys(a).filter((_) => {
          var h = n.get(_);
          return h === void 0 || h.v !== B;
        });
        for (var [o, v] of n)
          v.v !== B && !(o in a) && l.push(o);
        return l;
      },
      setPrototypeOf() {
        cs();
      }
    }
  );
}
var Wn, Er, xr, Sr;
function Hs() {
  if (Wn === void 0) {
    Wn = window, Er = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    xr = It(t, "firstChild").get, Sr = It(t, "nextSibling").get, Yn(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), Yn(n) && (n.__t = void 0);
  }
}
function ot(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function on(e) {
  return (
    /** @type {TemplateNode | null} */
    xr.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function Yt(e) {
  return (
    /** @type {TemplateNode | null} */
    Sr.call(e)
  );
}
function x(e, t) {
  return /* @__PURE__ */ on(e);
}
function Us(e, t = !1) {
  {
    var n = /* @__PURE__ */ on(e);
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ Yt(n) : n;
  }
}
function M(e, t = 1, n = !1) {
  let s = e;
  for (; t--; )
    s = /** @type {TemplateNode} */
    /* @__PURE__ */ Yt(s);
  return s;
}
function Ys(e) {
  e.textContent = "";
}
function Tr() {
  return !1;
}
function Ar(e, t, n) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElementNS(ms, e, void 0)
  );
}
function Cr(e) {
  var t = k, n = E;
  be(null), ze(null);
  try {
    return e();
  } finally {
    be(t), ze(n);
  }
}
function Ks(e) {
  E === null && (k === null && as(), ls()), Ze && fs();
}
function Gs(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function Ye(e, t) {
  var n = E;
  n !== null && (n.f & $) !== 0 && (e |= $);
  var s = {
    ctx: ye,
    deps: null,
    nodes: null,
    f: e | U | ge,
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
  S?.register_created_effect(s);
  var r = s;
  if ((e & St) !== 0)
    gt !== null ? gt.push(s) : dt.ensure().schedule(s);
  else if (t !== null) {
    try {
      Mt(s);
    } catch (u) {
      throw te(s), u;
    }
    r.deps === null && r.teardown === null && r.nodes === null && r.first === r.last && // either `null`, or a singular child
    (r.f & Nt) === 0 && (r = r.first, (e & Ie) !== 0 && (e & Tt) !== 0 && r !== null && (r.f |= Tt));
  }
  if (r !== null && (r.parent = n, n !== null && Gs(r, n), k !== null && (k.f & Y) !== 0 && (e & Xe) === 0)) {
    var i = (
      /** @type {Derived} */
      k
    );
    (i.effects ?? (i.effects = [])).push(r);
  }
  return s;
}
function zn() {
  return k !== null && !Ne;
}
function Js(e) {
  const t = Ye(hn, null);
  return O(t, P), t.teardown = e, t;
}
function Ws(e) {
  Ks();
  var t = (
    /** @type {Effect} */
    E.f
  ), n = !k && (t & Re) !== 0 && (t & _t) === 0;
  if (n) {
    var s = (
      /** @type {ComponentContext} */
      ye
    );
    (s.e ?? (s.e = [])).push(e);
  } else
    return Mr(e);
}
function Mr(e) {
  return Ye(St | rs, e);
}
function $s(e) {
  dt.ensure();
  const t = Ye(Xe | Nt, e);
  return (n = {}) => new Promise((s) => {
    n.outro ? ut(t, () => {
      te(t), s(void 0);
    }) : (te(t), s(void 0));
  });
}
function Xs(e) {
  return Ye(St, e);
}
function Zs(e) {
  return Ye(zt | Nt, e);
}
function Qs(e, t = 0) {
  return Ye(hn | t, e);
}
function oe(e, t = [], n = [], s = []) {
  Is(s, t, n, (r) => {
    Ye(hn, () => e(...r.map(p)));
  });
}
function Ln(e, t = 0) {
  var n = Ye(Ie | t, e);
  return n;
}
function _e(e) {
  return Ye(Re | Nt, e);
}
function Nr(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = Ze, s = k;
    $n(!0), be(null);
    try {
      t.call(null);
    } finally {
      $n(n), be(s);
    }
  }
}
function jn(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const r = n.ac;
    r !== null && Cr(() => {
      r.abort(je);
    });
    var s = n.next;
    (n.f & Xe) !== 0 ? n.parent = null : te(n, t), n = s;
  }
}
function ei(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & Re) === 0 && te(t), t = n;
  }
}
function te(e, t = !0) {
  var n = !1;
  (t || (e.f & ns) !== 0) && e.nodes !== null && e.nodes.end !== null && (ti(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), n = !0), O(e, Kn), jn(e, t && !n), Lt(e, 0);
  var s = e.nodes && e.nodes.t;
  if (s !== null)
    for (const i of s)
      i.stop();
  Nr(e), e.f ^= Kn, e.f |= we;
  var r = e.parent;
  r !== null && r.first !== null && Rr(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function ti(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : /* @__PURE__ */ Yt(e);
    e.remove(), e = n;
  }
}
function Rr(e) {
  var t = e.parent, n = e.prev, s = e.next;
  n !== null && (n.next = s), s !== null && (s.prev = n), t !== null && (t.first === e && (t.first = s), t.last === e && (t.last = n));
}
function ut(e, t, n = !0) {
  var s = [];
  Fr(e, s, !0);
  var r = () => {
    n && te(e), t && t();
  }, i = s.length;
  if (i > 0) {
    var u = () => --i || r();
    for (var a of s)
      a.out(u);
  } else
    r();
}
function Fr(e, t, n) {
  if ((e.f & $) === 0) {
    e.f ^= $;
    var s = e.nodes && e.nodes.t;
    if (s !== null)
      for (const a of s)
        (a.is_global || n) && t.push(a);
    for (var r = e.first; r !== null; ) {
      var i = r.next;
      if ((r.f & Xe) === 0) {
        var u = (r.f & Tt) !== 0 || // If this is a branch effect without a block effect parent,
        // it means the parent block effect was pruned. In that case,
        // transparency information was transferred to the branch effect.
        (r.f & Re) !== 0 && (e.f & Ie) !== 0;
        Fr(r, t, u ? n : !1);
      }
      r = i;
    }
  }
}
function qn(e) {
  Or(e, !0);
}
function Or(e, t) {
  if ((e.f & $) !== 0) {
    e.f ^= $, (e.f & P) === 0 && (O(e, U), dt.ensure().schedule(e));
    for (var n = e.first; n !== null; ) {
      var s = n.next, r = (n.f & Tt) !== 0 || (n.f & Re) !== 0;
      Or(n, r ? t : !1), n = s;
    }
    var i = e.nodes && e.nodes.t;
    if (i !== null)
      for (const u of i)
        (u.is_global || t) && u.in();
  }
}
function Bn(e, t) {
  if (e.nodes)
    for (var n = e.nodes.start, s = e.nodes.end; n !== null; ) {
      var r = n === s ? null : /* @__PURE__ */ Yt(n);
      t.append(n), n = r;
    }
}
let fn = !1, Ze = !1;
function $n(e) {
  Ze = e;
}
let k = null, Ne = !1;
function be(e) {
  k = e;
}
let E = null;
function ze(e) {
  E = e;
}
let me = null;
function Dr(e) {
  k !== null && (me === null ? me = [e] : me.push(e));
}
let ee = null, se = 0, ce = null;
function ni(e) {
  ce = e;
}
let Ir = 1, tt = 0, ct = tt;
function Xn(e) {
  ct = e;
}
function Pr() {
  return ++Ir;
}
function Kt(e) {
  var t = e.f;
  if ((t & U) !== 0)
    return !0;
  if (t & Y && (e.f &= ~vt), (t & Pe) !== 0) {
    for (var n = (
      /** @type {Value[]} */
      e.deps
    ), s = n.length, r = 0; r < s; r++) {
      var i = n[r];
      if (Kt(
        /** @type {Derived} */
        i
      ) && mr(
        /** @type {Derived} */
        i
      ), i.wv > e.wv)
        return !0;
    }
    (t & ge) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    Me === null && O(e, P);
  }
  return !1;
}
function zr(e, t, n = !0) {
  var s = e.reactions;
  if (s !== null && !(me !== null && xt.call(me, e)))
    for (var r = 0; r < s.length; r++) {
      var i = s[r];
      (i.f & Y) !== 0 ? zr(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (n ? O(i, U) : (i.f & P) !== 0 && O(i, Pe), Dn(
        /** @type {Effect} */
        i
      ));
    }
}
function Lr(e) {
  var m;
  var t = ee, n = se, s = ce, r = k, i = me, u = ye, a = Ne, l = ct, o = e.f;
  ee = /** @type {null | Value[]} */
  null, se = 0, ce = null, k = (o & (Re | Xe)) === 0 ? e : null, me = null, At(e.ctx), Ne = !1, ct = ++tt, e.ac !== null && (Cr(() => {
    e.ac.abort(je);
  }), e.ac = null);
  try {
    e.f |= ln;
    var v = (
      /** @type {Function} */
      e.fn
    ), _ = v();
    e.f |= _t;
    var h = e.deps, d = S?.is_fork;
    if (ee !== null) {
      var c;
      if (d || Lt(e, se), h !== null && se > 0)
        for (h.length = se + ee.length, c = 0; c < ee.length; c++)
          h[se + c] = ee[c];
      else
        e.deps = h = ee;
      if (zn() && (e.f & ge) !== 0)
        for (c = se; c < h.length; c++)
          ((m = h[c]).reactions ?? (m.reactions = [])).push(e);
    } else !d && h !== null && se < h.length && (Lt(e, se), h.length = se);
    if (ur() && ce !== null && !Ne && h !== null && (e.f & (Y | Pe | U)) === 0)
      for (c = 0; c < /** @type {Source[]} */
      ce.length; c++)
        zr(
          ce[c],
          /** @type {Effect} */
          e
        );
    if (r !== null && r !== e) {
      if (tt++, r.deps !== null)
        for (let y = 0; y < n; y += 1)
          r.deps[y].rv = tt;
      if (t !== null)
        for (const y of t)
          y.rv = tt;
      ce !== null && (s === null ? s = ce : s.push(.../** @type {Source[]} */
      ce));
    }
    return (e.f & $e) !== 0 && (e.f ^= $e), _;
  } catch (y) {
    return cr(y);
  } finally {
    e.f ^= ln, ee = t, se = n, ce = s, k = r, me = i, At(u), Ne = a, ct = l;
  }
}
function ri(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var s = Wr.call(n, e);
    if (s !== -1) {
      var r = n.length - 1;
      r === 0 ? n = t.reactions = null : (n[s] = n[r], n.pop());
    }
  }
  if (n === null && (t.f & Y) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (ee === null || !xt.call(ee, t))) {
    var i = (
      /** @type {Derived} */
      t
    );
    (i.f & ge) !== 0 && (i.f ^= ge, i.f &= ~vt), i.v !== B && Fn(i), qs(i), Lt(i, 0);
  }
}
function Lt(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var s = t; s < n.length; s++)
      ri(e, n[s]);
}
function Mt(e) {
  var t = e.f;
  if ((t & we) === 0) {
    O(e, P);
    var n = E, s = fn;
    E = e, fn = !0;
    try {
      (t & (Ie | ir)) !== 0 ? ei(e) : jn(e), Nr(e);
      var r = Lr(e);
      e.teardown = typeof r == "function" ? r : null, e.wv = Ir;
      var i;
    } finally {
      fn = s, E = n;
    }
  }
}
function p(e) {
  var t = e.f, n = (t & Y) !== 0;
  if (k !== null && !Ne) {
    var s = E !== null && (E.f & we) !== 0;
    if (!s && (me === null || !xt.call(me, e))) {
      var r = k.deps;
      if ((k.f & ln) !== 0)
        e.rv < tt && (e.rv = tt, ee === null && r !== null && r[se] === e ? se++ : ee === null ? ee = [e] : ee.push(e));
      else {
        (k.deps ?? (k.deps = [])).push(e);
        var i = e.reactions;
        i === null ? e.reactions = [k] : xt.call(i, k) || i.push(k);
      }
    }
  }
  if (Ze && at.has(e))
    return at.get(e);
  if (n) {
    var u = (
      /** @type {Derived} */
      e
    );
    if (Ze) {
      var a = u.v;
      return ((u.f & P) === 0 && u.reactions !== null || qr(u)) && (a = Pn(u)), at.set(u, a), a;
    }
    var l = (u.f & ge) === 0 && !Ne && k !== null && (fn || (k.f & ge) !== 0), o = (u.f & _t) === 0;
    Kt(u) && (l && (u.f |= ge), mr(u)), l && !o && (yr(u), jr(u));
  }
  if (Me?.has(e))
    return Me.get(e);
  if ((e.f & $e) !== 0)
    throw e.v;
  return e.v;
}
function jr(e) {
  if (e.f |= ge, e.deps !== null)
    for (const t of e.deps)
      (t.reactions ?? (t.reactions = [])).push(e), (t.f & Y) !== 0 && (t.f & ge) === 0 && (yr(
        /** @type {Derived} */
        t
      ), jr(
        /** @type {Derived} */
        t
      ));
}
function qr(e) {
  if (e.v === B) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (at.has(t) || (t.f & Y) !== 0 && qr(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function si(e) {
  var t = Ne;
  try {
    return Ne = !0, e();
  } finally {
    Ne = t;
  }
}
const ii = ["touchstart", "touchmove"];
function fi(e) {
  return ii.includes(e);
}
const nt = Symbol("events"), Br = /* @__PURE__ */ new Set(), Cn = /* @__PURE__ */ new Set();
function li(e, t, n) {
  (t[nt] ?? (t[nt] = {}))[e] = n;
}
function ai(e) {
  for (var t = 0; t < e.length; t++)
    Br.add(e[t]);
  for (var n of Cn)
    n(e);
}
let Zn = null;
function Qn(e) {
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), s = e.type, r = e.composedPath?.() || [], i = (
    /** @type {null | Element} */
    r[0] || e.target
  );
  Zn = e;
  var u = 0, a = Zn === e && e[nt];
  if (a) {
    var l = r.indexOf(a);
    if (l !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e[nt] = t;
      return;
    }
    var o = r.indexOf(t);
    if (o === -1)
      return;
    l <= o && (u = l);
  }
  if (i = /** @type {Element} */
  r[u] || e.target, i !== t) {
    $r(e, "currentTarget", {
      configurable: !0,
      get() {
        return i || n;
      }
    });
    var v = k, _ = E;
    be(null), ze(null);
    try {
      for (var h, d = []; i !== null; ) {
        var c = i.assignedSlot || i.parentNode || /** @type {any} */
        i.host || null;
        try {
          var m = i[nt]?.[s];
          m != null && (!/** @type {any} */
          i.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === i) && m.call(i, e);
        } catch (y) {
          h ? d.push(y) : h = y;
        }
        if (e.cancelBubble || c === t || c === null)
          break;
        i = c;
      }
      if (h) {
        for (let y of d)
          queueMicrotask(() => {
            throw y;
          });
        throw h;
      }
    } finally {
      e[nt] = t, delete e.currentTarget, be(v), ze(_);
    }
  }
}
const oi = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (e) => e
  })
);
function ui(e) {
  return (
    /** @type {string} */
    oi?.createHTML(e) ?? e
  );
}
function ci(e) {
  var t = Ar("template");
  return t.innerHTML = ui(e.replaceAll("<!>", "<!---->")), t.content;
}
function er(e, t) {
  var n = (
    /** @type {Effect} */
    E
  );
  n.nodes === null && (n.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function z(e, t) {
  var n = (t & gs) !== 0, s = (t & ws) !== 0, r, i = !e.startsWith("<!>");
  return () => {
    r === void 0 && (r = ci(i ? e : "<!>" + e), n || (r = /** @type {TemplateNode} */
    /* @__PURE__ */ on(r)));
    var u = (
      /** @type {TemplateNode} */
      s || Er ? document.importNode(r, !0) : r.cloneNode(!0)
    );
    if (n) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ on(u)
      ), l = (
        /** @type {TemplateNode} */
        u.lastChild
      );
      er(a, l);
    } else
      er(u, u);
    return u;
  };
}
function I(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function J(e, t) {
  var n = t == null ? "" : typeof t == "object" ? `${t}` : t;
  n !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = n, e.nodeValue = `${n}`);
}
function vi(e, t) {
  return di(e, t);
}
const Wt = /* @__PURE__ */ new Map();
function di(e, { target: t, anchor: n, props: s = {}, events: r, context: i, intro: u = !0, transformError: a }) {
  Hs();
  var l = void 0, o = $s(() => {
    var v = n ?? t.appendChild(ot());
    Ns(
      /** @type {TemplateNode} */
      v,
      {
        pending: () => {
        }
      },
      (d) => {
        ar({});
        var c = (
          /** @type {ComponentContext} */
          ye
        );
        i && (c.c = i), r && (s.$$events = r), l = e(d, s) || {}, or();
      },
      a
    );
    var _ = /* @__PURE__ */ new Set(), h = (d) => {
      for (var c = 0; c < d.length; c++) {
        var m = d[c];
        if (!_.has(m)) {
          _.add(m);
          var y = fi(m);
          for (const ne of [t, document]) {
            var N = Wt.get(ne);
            N === void 0 && (N = /* @__PURE__ */ new Map(), Wt.set(ne, N));
            var T = N.get(m);
            T === void 0 ? (ne.addEventListener(m, Qn, { passive: y }), N.set(m, 1)) : N.set(m, T + 1);
          }
        }
      }
    };
    return h(dn(Br)), Cn.add(h), () => {
      for (var d of _)
        for (const y of [t, document]) {
          var c = (
            /** @type {Map<string, number>} */
            Wt.get(y)
          ), m = (
            /** @type {number} */
            c.get(d)
          );
          --m == 0 ? (y.removeEventListener(d, Qn), c.delete(d), c.size === 0 && Wt.delete(y)) : c.set(d, m);
        }
      Cn.delete(h), v !== n && v.parentNode?.removeChild(v);
    };
  });
  return Mn.set(l, o), l;
}
let Mn = /* @__PURE__ */ new WeakMap();
function hi(e, t) {
  const n = Mn.get(e);
  return n ? (Mn.delete(e), n(t)) : Promise.resolve();
}
var Ce, De, le, lt, Ht, Ut, vn;
class _i {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, n = !0) {
    /** @type {TemplateNode} */
    Te(this, "anchor");
    /** @type {Map<Batch, Key>} */
    w(this, Ce, /* @__PURE__ */ new Map());
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
    w(this, De, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    w(this, le, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    w(this, lt, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    w(this, Ht, !0);
    /**
     * @param {Batch} batch
     */
    w(this, Ut, (t) => {
      if (f(this, Ce).has(t)) {
        var n = (
          /** @type {Key} */
          f(this, Ce).get(t)
        ), s = f(this, De).get(n);
        if (s)
          qn(s), f(this, lt).delete(n);
        else {
          var r = f(this, le).get(n);
          r && (f(this, De).set(n, r.effect), f(this, le).delete(n), r.fragment.lastChild.remove(), this.anchor.before(r.fragment), s = r.effect);
        }
        for (const [i, u] of f(this, Ce)) {
          if (f(this, Ce).delete(i), i === t)
            break;
          const a = f(this, le).get(u);
          a && (te(a.effect), f(this, le).delete(u));
        }
        for (const [i, u] of f(this, De)) {
          if (i === n || f(this, lt).has(i)) continue;
          const a = () => {
            if (Array.from(f(this, Ce).values()).includes(i)) {
              var o = document.createDocumentFragment();
              Bn(u, o), o.append(ot()), f(this, le).set(i, { effect: u, fragment: o });
            } else
              te(u);
            f(this, lt).delete(i), f(this, De).delete(i);
          };
          f(this, Ht) || !s ? (f(this, lt).add(i), ut(u, a, !1)) : a();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    w(this, vn, (t) => {
      f(this, Ce).delete(t);
      const n = Array.from(f(this, Ce).values());
      for (const [s, r] of f(this, le))
        n.includes(s) || (te(r.effect), f(this, le).delete(s));
    });
    this.anchor = t, b(this, Ht, n);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, n) {
    var s = (
      /** @type {Batch} */
      S
    ), r = Tr();
    if (n && !f(this, De).has(t) && !f(this, le).has(t))
      if (r) {
        var i = document.createDocumentFragment(), u = ot();
        i.append(u), f(this, le).set(t, {
          effect: _e(() => n(u)),
          fragment: i
        });
      } else
        f(this, De).set(
          t,
          _e(() => n(this.anchor))
        );
    if (f(this, Ce).set(s, t), r) {
      for (const [a, l] of f(this, De))
        a === t ? s.unskip_effect(l) : s.skip_effect(l);
      for (const [a, l] of f(this, le))
        a === t ? s.unskip_effect(l.effect) : s.skip_effect(l.effect);
      s.oncommit(f(this, Ut)), s.ondiscard(f(this, vn));
    } else
      f(this, Ut).call(this, s);
  }
}
Ce = new WeakMap(), De = new WeakMap(), le = new WeakMap(), lt = new WeakMap(), Ht = new WeakMap(), Ut = new WeakMap(), vn = new WeakMap();
function ue(e, t, n = !1) {
  var s = new _i(e), r = n ? Tt : 0;
  function i(u, a) {
    s.ensure(u, a);
  }
  Ln(() => {
    var u = !1;
    t((a, l = 0) => {
      u = !0, i(l, a);
    }), u || i(-1, null);
  }, r);
}
function $t(e, t) {
  return t;
}
function pi(e, t, n) {
  for (var s = [], r = t.length, i, u = t.length, a = 0; a < r; a++) {
    let _ = t[a];
    ut(
      _,
      () => {
        if (i) {
          if (i.pending.delete(_), i.done.add(_), i.pending.size === 0) {
            var h = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            Nn(e, dn(i.done)), h.delete(i), h.size === 0 && (e.outrogroups = null);
          }
        } else
          u -= 1;
      },
      !1
    );
  }
  if (u === 0) {
    var l = s.length === 0 && n !== null;
    if (l) {
      var o = (
        /** @type {Element} */
        n
      ), v = (
        /** @type {Element} */
        o.parentNode
      );
      Ys(v), v.append(o), e.items.clear();
    }
    Nn(e, t, !l);
  } else
    i = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ?? (e.outrogroups = /* @__PURE__ */ new Set())).add(i);
}
function Nn(e, t, n = !0) {
  var s;
  if (e.pending.size > 0) {
    s = /* @__PURE__ */ new Set();
    for (const u of e.pending.values())
      for (const a of u)
        s.add(
          /** @type {EachItem} */
          e.items.get(a).e
        );
  }
  for (var r = 0; r < t.length; r++) {
    var i = t[r];
    if (s?.has(i)) {
      i.f |= Ue;
      const u = document.createDocumentFragment();
      Bn(i, u);
    } else
      te(t[r], n);
  }
}
var tr;
function Xt(e, t, n, s, r, i = null) {
  var u = e, a = /* @__PURE__ */ new Map();
  {
    var l = (
      /** @type {Element} */
      e
    );
    u = l.appendChild(ot());
  }
  var o = null, v = /* @__PURE__ */ Ls(() => {
    var T = n();
    return rr(T) ? T : T == null ? [] : dn(T);
  }), _, h = /* @__PURE__ */ new Map(), d = !0;
  function c(T) {
    (N.effect.f & we) === 0 && (N.pending.delete(T), N.fallback = o, gi(N, _, u, t, s), o !== null && (_.length === 0 ? (o.f & Ue) === 0 ? qn(o) : (o.f ^= Ue, Dt(o, null, u)) : ut(o, () => {
      o = null;
    })));
  }
  function m(T) {
    N.pending.delete(T);
  }
  var y = Ln(() => {
    _ = /** @type {V[]} */
    p(v);
    for (var T = _.length, ne = /* @__PURE__ */ new Set(), g = (
      /** @type {Batch} */
      S
    ), V = Tr(), K = 0; K < T; K += 1) {
      var Qe = _[K], X = s(Qe, K), ke = d ? null : a.get(X);
      ke ? (ke.v && Ct(ke.v, Qe), ke.i && Ct(ke.i, K), V && g.unskip_effect(ke.e)) : (ke = wi(
        a,
        d ? u : tr ?? (tr = ot()),
        Qe,
        X,
        K,
        r,
        t,
        n
      ), d || (ke.e.f |= Ue), a.set(X, ke)), ne.add(X);
    }
    if (T === 0 && i && !o && (d ? o = _e(() => i(u)) : (o = _e(() => i(tr ?? (tr = ot()))), o.f |= Ue)), T > ne.size && is(), !d)
      if (h.set(g, ne), V) {
        for (const [Gt, _n] of a)
          ne.has(Gt) || g.skip_effect(_n.e);
        g.oncommit(c), g.ondiscard(m);
      } else
        c(g);
    p(v);
  }), N = { effect: y, items: a, pending: h, outrogroups: null, fallback: o };
  d = !1;
}
function Ft(e) {
  for (; e !== null && (e.f & Re) === 0; )
    e = e.next;
  return e;
}
function gi(e, t, n, s, r) {
  var i = t.length, u = e.items, a = Ft(e.effect.first), l, o = null, v = [], _ = [], h, d, c, m;
  for (m = 0; m < i; m += 1) {
    if (h = t[m], d = r(h, m), c = /** @type {EachItem} */
    u.get(d).e, e.outrogroups !== null)
      for (const X of e.outrogroups)
        X.pending.delete(c), X.done.delete(c);
    if ((c.f & $) !== 0 && qn(c), (c.f & Ue) !== 0)
      if (c.f ^= Ue, c === a)
        Dt(c, null, n);
      else {
        var y = o ? o.next : a;
        c === e.effect.last && (e.effect.last = c.prev), c.prev && (c.prev.next = c.next), c.next && (c.next.prev = c.prev), Ke(e, o, c), Ke(e, c, y), Dt(c, y, n), o = c, v = [], _ = [], a = Ft(o.next);
        continue;
      }
    if (c !== a) {
      if (l !== void 0 && l.has(c)) {
        if (v.length < _.length) {
          var N = _[0], T;
          o = N.prev;
          var ne = v[0], g = v[v.length - 1];
          for (T = 0; T < v.length; T += 1)
            Dt(v[T], N, n);
          for (T = 0; T < _.length; T += 1)
            l.delete(_[T]);
          Ke(e, ne.prev, g.next), Ke(e, o, ne), Ke(e, g, N), a = N, o = g, m -= 1, v = [], _ = [];
        } else
          l.delete(c), Dt(c, a, n), Ke(e, c.prev, c.next), Ke(e, c, o === null ? e.effect.first : o.next), Ke(e, o, c), o = c;
        continue;
      }
      for (v = [], _ = []; a !== null && a !== c; )
        (l ?? (l = /* @__PURE__ */ new Set())).add(a), _.push(a), a = Ft(a.next);
      if (a === null)
        continue;
    }
    (c.f & Ue) === 0 && v.push(c), o = c, a = Ft(c.next);
  }
  if (e.outrogroups !== null) {
    for (const X of e.outrogroups)
      X.pending.size === 0 && (Nn(e, dn(X.done)), e.outrogroups?.delete(X));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (a !== null || l !== void 0) {
    var V = [];
    if (l !== void 0)
      for (c of l)
        (c.f & $) === 0 && V.push(c);
    for (; a !== null; )
      (a.f & $) === 0 && a !== e.fallback && V.push(a), a = Ft(a.next);
    var K = V.length;
    if (K > 0) {
      var Qe = i === 0 ? n : null;
      pi(e, V, Qe);
    }
  }
}
function wi(e, t, n, s, r, i, u, a) {
  var l = (u & hs) !== 0 ? (u & ps) === 0 ? /* @__PURE__ */ Bs(n, !1, !1) : ht(n) : null, o = (u & _s) !== 0 ? ht(r) : null;
  return {
    v: l,
    i: o,
    e: _e(() => (i(t, l ?? n, o ?? r, a), () => {
      e.delete(s);
    }))
  };
}
function Dt(e, t, n) {
  if (e.nodes)
    for (var s = e.nodes.start, r = e.nodes.end, i = t && (t.f & Ue) === 0 ? (
      /** @type {EffectNodes} */
      t.nodes.start
    ) : n; s !== null; ) {
      var u = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Yt(s)
      );
      if (i.before(s), s === r)
        return;
      s = u;
    }
}
function Ke(e, t, n) {
  t === null ? e.effect.first = n : t.next = n, n === null ? e.effect.last = t : n.prev = t;
}
function mi(e, t) {
  Xs(() => {
    var n = e.getRootNode(), s = (
      /** @type {ShadowRoot} */
      n.host ? (
        /** @type {ShadowRoot} */
        n
      ) : (
        /** @type {Document} */
        n.head ?? /** @type {Document} */
        n.ownerDocument.head
      )
    );
    if (!s.querySelector("#" + t.hash)) {
      const r = Ar("style");
      r.id = t.hash, r.textContent = t.code, s.appendChild(r);
    }
  });
}
function Zt(e, t, n, s) {
  var r = (
    /** @type {V} */
    s
  ), i = !0, u = () => (i && (i = !1, r = /** @type {V} */
  s), r), a;
  a = /** @type {V} */
  e[t], a === void 0 && s !== void 0 && (a = u());
  var l;
  return l = () => {
    var o = (
      /** @type {V} */
      e[t]
    );
    return o === void 0 ? u() : (i = !0, o);
  }, l;
}
const yi = "5";
var nr;
typeof window < "u" && ((nr = window.__svelte ?? (window.__svelte = {})).v ?? (nr.v = /* @__PURE__ */ new Set())).add(yi);
var bi = /* @__PURE__ */ z('<div class="loading svelte-3wf3n6">Loading system information…</div>'), ki = /* @__PURE__ */ z('<div class="error svelte-3wf3n6"> </div>'), Ei = /* @__PURE__ */ z('<div class="kv svelte-3wf3n6"><span class="k svelte-3wf3n6">Version</span><span class="v svelte-3wf3n6"> </span></div>'), xi = /* @__PURE__ */ z('<div class="kv svelte-3wf3n6"><span class="k svelte-3wf3n6">Commit</span><span class="v mono svelte-3wf3n6"> </span></div>'), Si = /* @__PURE__ */ z('<div class="section svelte-3wf3n6"><h3 class="svelte-3wf3n6">Version</h3> <div class="grid svelte-3wf3n6"><!> <!></div></div>'), Ti = /* @__PURE__ */ z('<div class="kv svelte-3wf3n6"><span class="k svelte-3wf3n6"> </span><span class="v mono svelte-3wf3n6"> </span></div>'), Ai = /* @__PURE__ */ z('<div class="section svelte-3wf3n6"><h3 class="svelte-3wf3n6">Canister IDs</h3> <div class="grid svelte-3wf3n6"></div></div>'), Ci = /* @__PURE__ */ z('<div class="kv svelte-3wf3n6"><span class="k svelte-3wf3n6">Total</span><span class="v svelte-3wf3n6"> </span></div>'), Mi = /* @__PURE__ */ z('<div class="kv svelte-3wf3n6"><span class="k svelte-3wf3n6">Heap</span><span class="v svelte-3wf3n6"> </span></div>'), Ni = /* @__PURE__ */ z('<div class="kv svelte-3wf3n6"><span class="k svelte-3wf3n6">Stable</span><span class="v svelte-3wf3n6"> </span></div>'), Ri = /* @__PURE__ */ z('<div class="section svelte-3wf3n6"><h3 class="svelte-3wf3n6">Memory</h3> <div class="grid svelte-3wf3n6"><!> <!> <!></div></div>'), Fi = /* @__PURE__ */ z('<span class="tag svelte-3wf3n6"> </span>'), Oi = /* @__PURE__ */ z('<div class="section svelte-3wf3n6"><h3 class="svelte-3wf3n6"> </h3> <div class="tags svelte-3wf3n6"></div></div>'), Di = /* @__PURE__ */ z('<div class="kv svelte-3wf3n6"><span class="k svelte-3wf3n6"> </span><span class="v svelte-3wf3n6"> </span></div>'), Ii = /* @__PURE__ */ z('<div class="section svelte-3wf3n6"><h3 class="svelte-3wf3n6">Entity Counts</h3> <div class="grid svelte-3wf3n6"></div></div>'), Pi = /* @__PURE__ */ z('<div class="kv svelte-3wf3n6"><span class="k svelte-3wf3n6"> </span><span class="v svelte-3wf3n6"> </span></div>'), zi = /* @__PURE__ */ z('<div class="section svelte-3wf3n6"><h3 class="svelte-3wf3n6">Token Balances</h3> <div class="grid svelte-3wf3n6"></div></div>'), Li = /* @__PURE__ */ z("<!> <!> <!> <!> <!> <!>", 1), ji = /* @__PURE__ */ z('<div class="rt-si svelte-3wf3n6"><div class="header svelte-3wf3n6"><h2 class="svelte-3wf3n6">System Info</h2> <span class="badge svelte-3wf3n6"> </span> <button class="refresh svelte-3wf3n6">↻ Refresh</button></div> <!></div>');
const qi = {
  hash: "svelte-3wf3n6",
  code: ".rt-si.svelte-3wf3n6 {font-family:system-ui, -apple-system, sans-serif;max-width:800px;margin:0 auto;padding:1.5rem;}.header.svelte-3wf3n6 {display:flex;align-items:center;gap:0.75rem;margin-bottom:1.5rem;flex-wrap:wrap;}.header.svelte-3wf3n6 h2:where(.svelte-3wf3n6) {margin:0;font-size:1.5rem;}.badge.svelte-3wf3n6 {background:#e0e7ff;color:#3730a3;padding:0.15rem 0.5rem;border-radius:9999px;font-size:0.75rem;}.refresh.svelte-3wf3n6 {margin-left:auto;padding:0.35rem 0.75rem;background:#f3f4f6;border:1px solid #d1d5db;border-radius:0.5rem;cursor:pointer;font-size:0.8rem;}.refresh.svelte-3wf3n6:hover:not(:disabled) {background:#e5e7eb;}.loading.svelte-3wf3n6 {color:#6b7280;padding:2rem;text-align:center;}.error.svelte-3wf3n6 {background:#fef2f2;color:#991b1b;border:1px solid #fecaca;padding:0.75rem;border-radius:0.5rem;}.section.svelte-3wf3n6 {background:#fff;border:1px solid #e5e7eb;border-radius:0.75rem;padding:1rem 1.25rem;margin-bottom:1rem;}.section.svelte-3wf3n6 h3:where(.svelte-3wf3n6) {margin:0 0 0.75rem;font-size:1rem;color:#1f2937;}.grid.svelte-3wf3n6 {display:grid;grid-template-columns:repeat(auto-fill, minmax(250px, 1fr));gap:0.5rem;}.kv.svelte-3wf3n6 {display:flex;justify-content:space-between;padding:0.35rem 0;border-bottom:1px solid #f3f4f6;}.k.svelte-3wf3n6 {color:#6b7280;font-size:0.8rem;}.v.svelte-3wf3n6 {font-weight:500;font-size:0.8rem;}.mono.svelte-3wf3n6 {font-family:ui-monospace, monospace;font-size:0.75rem;word-break:break-all;}.tags.svelte-3wf3n6 {display:flex;flex-wrap:wrap;gap:0.35rem;}.tag.svelte-3wf3n6 {background:#f0fdf4;color:#166534;padding:0.2rem 0.5rem;border-radius:0.375rem;font-size:0.75rem;border:1px solid #bbf7d0;}"
};
function Bi(e, t) {
  ar(t, !0), mi(e, qi);
  let n = Zt(t, "extensionId", 3, "system_info"), s = Zt(t, "version", 3, "");
  Zt(t, "principal", 3, ""), Zt(t, "isAuthenticated", 3, !0);
  let r = /* @__PURE__ */ Ae(null), i = /* @__PURE__ */ Ae(!0), u = /* @__PURE__ */ Ae("");
  async function a(g, V = "") {
    const K = await t.backend.extension_sync_call(JSON.stringify({ extension_name: n(), function_name: g, args: V }));
    return JSON.parse(K);
  }
  async function l() {
    pe(i, !0), pe(u, "");
    try {
      const g = await a("get_system_info", "");
      pe(r, g?.data ?? g, !0);
    } catch (g) {
      pe(u, g?.message || String(g), !0);
    } finally {
      pe(i, !1);
    }
  }
  Ws(() => {
    l();
  });
  function o(g) {
    return !g && g !== 0 ? "—" : g < 1024 ? `${g} B` : g < 1048576 ? `${(g / 1024).toFixed(1)} KB` : `${(g / 1048576).toFixed(1)} MB`;
  }
  function v(g) {
    return !g || typeof g != "object" ? [] : Object.entries(g);
  }
  var _ = ji(), h = x(_), d = M(x(h), 2), c = x(d), m = M(d, 2), y = M(h, 2);
  {
    var N = (g) => {
      var V = bi();
      I(g, V);
    }, T = (g) => {
      var V = ki(), K = x(V);
      oe(() => J(K, p(u))), I(g, V);
    }, ne = (g) => {
      var V = Li(), K = Us(V);
      {
        var Qe = (R) => {
          var H = Si(), ae = M(x(H), 2), re = x(ae);
          {
            var Ee = (L) => {
              var j = Ei(), A = M(x(j)), q = x(A);
              oe(() => J(q, p(r).version)), I(L, j);
            };
            ue(re, (L) => {
              p(r).version && L(Ee);
            });
          }
          var G = M(re, 2);
          {
            var Z = (L) => {
              var j = xi(), A = M(x(j)), q = x(A);
              oe(() => J(q, p(r).commit)), I(L, j);
            };
            ue(G, (L) => {
              p(r).commit && L(Z);
            });
          }
          I(R, H);
        };
        ue(K, (R) => {
          (p(r).version || p(r).commit) && R(Qe);
        });
      }
      var X = M(K, 2);
      {
        var ke = (R) => {
          var H = Ai(), ae = M(x(H), 2);
          Xt(ae, 21, () => v(p(r).canister_ids), $t, (re, Ee) => {
            var G = /* @__PURE__ */ Jt(() => gn(p(Ee), 2));
            let Z = () => p(G)[0], L = () => p(G)[1];
            var j = Ti(), A = x(j), q = x(A), xe = M(A), Se = x(xe);
            oe(() => {
              J(q, Z()), J(Se, L());
            }), I(re, j);
          }), I(R, H);
        };
        ue(X, (R) => {
          p(r).canister_ids && typeof p(r).canister_ids == "object" && R(ke);
        });
      }
      var Gt = M(X, 2);
      {
        var _n = (R) => {
          var H = Ri(), ae = M(x(H), 2), re = x(ae);
          {
            var Ee = (A) => {
              var q = Ci(), xe = M(x(q)), Se = x(xe);
              oe((Rt) => J(Se, Rt), [() => o(p(r).memory)]), I(A, q);
            };
            ue(re, (A) => {
              p(r).memory && A(Ee);
            });
          }
          var G = M(re, 2);
          {
            var Z = (A) => {
              var q = Mi(), xe = M(x(q)), Se = x(xe);
              oe((Rt) => J(Se, Rt), [() => o(p(r).heap_memory)]), I(A, q);
            };
            ue(G, (A) => {
              p(r).heap_memory && A(Z);
            });
          }
          var L = M(G, 2);
          {
            var j = (A) => {
              var q = Ni(), xe = M(x(q)), Se = x(xe);
              oe((Rt) => J(Se, Rt), [() => o(p(r).stable_memory)]), I(A, q);
            };
            ue(L, (A) => {
              p(r).stable_memory && A(j);
            });
          }
          I(R, H);
        };
        ue(Gt, (R) => {
          (p(r).memory || p(r).stable_memory || p(r).heap_memory) && R(_n);
        });
      }
      var Vn = M(Gt, 2);
      {
        var Vr = (R) => {
          var H = Oi(), ae = x(H), re = x(ae), Ee = M(ae, 2);
          Xt(Ee, 21, () => p(r).extensions, $t, (G, Z) => {
            var L = Fi(), j = x(L);
            oe((A) => J(j, A), [
              () => typeof p(Z) == "string" ? p(Z) : p(Z).name ?? JSON.stringify(p(Z))
            ]), I(G, L);
          }), oe(() => J(re, `Extensions (${p(r).extensions.length ?? ""})`)), I(R, H);
        }, Hr = /* @__PURE__ */ Jt(() => p(r).extensions && Array.isArray(p(r).extensions));
        ue(Vn, (R) => {
          p(Hr) && R(Vr);
        });
      }
      var Hn = M(Vn, 2);
      {
        var Ur = (R) => {
          var H = Ii(), ae = M(x(H), 2);
          Xt(ae, 21, () => v(p(r).entity_counts), $t, (re, Ee) => {
            var G = /* @__PURE__ */ Jt(() => gn(p(Ee), 2));
            let Z = () => p(G)[0], L = () => p(G)[1];
            var j = Di(), A = x(j), q = x(A), xe = M(A), Se = x(xe);
            oe(() => {
              J(q, Z()), J(Se, L());
            }), I(re, j);
          }), I(R, H);
        };
        ue(Hn, (R) => {
          p(r).entity_counts && typeof p(r).entity_counts == "object" && R(Ur);
        });
      }
      var Yr = M(Hn, 2);
      {
        var Kr = (R) => {
          var H = zi(), ae = M(x(H), 2);
          Xt(ae, 21, () => v(p(r).tokens), $t, (re, Ee) => {
            var G = /* @__PURE__ */ Jt(() => gn(p(Ee), 2));
            let Z = () => p(G)[0], L = () => p(G)[1];
            var j = Pi(), A = x(j), q = x(A), xe = M(A), Se = x(xe);
            oe(() => {
              J(q, Z()), J(Se, L());
            }), I(re, j);
          }), I(R, H);
        };
        ue(Yr, (R) => {
          p(r).tokens && typeof p(r).tokens == "object" && R(Kr);
        });
      }
      I(g, V);
    };
    ue(y, (g) => {
      p(i) ? g(N) : p(u) ? g(T, 1) : p(r) && g(ne, 2);
    });
  }
  oe(() => {
    J(c, `v${s() ?? ""}`), m.disabled = p(i);
  }), li("click", m, l), I(e, _), or();
}
ai(["click"]);
function Ui(e, t) {
  const n = vi(Bi, { target: e, props: t });
  return {
    unmount() {
      try {
        hi(n);
      } catch {
      }
    }
  };
}
export {
  Ui as default
};
