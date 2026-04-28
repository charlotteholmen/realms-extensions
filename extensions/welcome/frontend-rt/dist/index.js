var tr = Object.defineProperty;
var sn = (e) => {
  throw TypeError(e);
};
var nr = (e, t, n) => t in e ? tr(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var $ = (e, t, n) => nr(e, typeof t != "symbol" ? t + "" : t, n), Pt = (e, t, n) => t.has(e) || sn("Cannot " + n);
var s = (e, t, n) => (Pt(e, t, "read from private field"), n ? n.call(e) : t.get(e)), p = (e, t, n) => t.has(e) ? sn("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), m = (e, t, n, r) => (Pt(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), k = (e, t, n) => (Pt(e, t, "access private method"), n);
var rr = Array.isArray, ir = Array.prototype.indexOf, Ke = Array.prototype.includes, sr = Array.from, lr = Object.defineProperty, nt = Object.getOwnPropertyDescriptor, fr = Object.prototype, ar = Array.prototype, or = Object.getPrototypeOf, ln = Object.isExtensible;
const ur = () => {
};
function cr(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function gn() {
  var e, t, n = new Promise((r, i) => {
    e = r, t = i;
  });
  return { promise: n, resolve: e, reject: t };
}
const M = 2, Ge = 4, Ot = 8, wn = 1 << 24, fe = 16, ae = 32, xe = 64, Vt = 128, G = 512, A = 1024, N = 2048, oe = 4096, W = 8192, re = 16384, qe = 32768, fn = 1 << 25, We = 65536, Yt = 1 << 17, hr = 1 << 18, Qe = 1 << 19, dr = 1 << 20, Pe = 65536, St = 1 << 21, st = 1 << 22, ke = 1 << 23, zt = Symbol("$state"), de = new class extends Error {
  constructor() {
    super(...arguments);
    $(this, "name", "StaleReactionError");
    $(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
function _r() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function vr(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function pr() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function mr(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function gr() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function wr() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function yr() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function br() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Er() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
const kr = 2, R = Symbol(), xr = "http://www.w3.org/1999/xhtml";
function Sr() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function Tr() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function yn(e) {
  return e === this.v;
}
let Z = null;
function Je(e) {
  Z = e;
}
function bn(e, t = !1, n) {
  Z = {
    p: Z,
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
function En(e) {
  var t = (
    /** @type {ComponentContext} */
    Z
  ), n = t.e;
  if (n !== null) {
    t.e = null;
    for (var r of n)
      Yn(r);
  }
  return t.i = !0, Z = t.p, /** @type {T} */
  {};
}
function kn() {
  return !0;
}
let Ie = [];
function Ar() {
  var e = Ie;
  Ie = [], cr(e);
}
function Le(e) {
  if (Ie.length === 0) {
    var t = Ie;
    queueMicrotask(() => {
      t === Ie && Ar();
    });
  }
  Ie.push(e);
}
function xn(e) {
  var t = w;
  if (t === null)
    return g.f |= ke, e;
  if ((t.f & qe) === 0 && (t.f & Ge) === 0)
    throw e;
  Ee(e, t);
}
function Ee(e, t) {
  for (; t !== null; ) {
    if ((t.f & Vt) !== 0) {
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
const Rr = -7169;
function S(e, t) {
  e.f = e.f & Rr | t;
}
function Qt(e) {
  (e.f & G) !== 0 || e.deps === null ? S(e, A) : S(e, oe);
}
function Sn(e) {
  if (e !== null)
    for (const t of e)
      (t.f & M) === 0 || (t.f & Pe) === 0 || (t.f ^= Pe, Sn(
        /** @type {Derived} */
        t.deps
      ));
}
function Tn(e, t, n) {
  (e.f & N) !== 0 ? t.add(e) : (e.f & oe) !== 0 && n.add(e), Sn(e.deps), S(e, A);
}
const Te = /* @__PURE__ */ new Set();
let E = null, te = null, Bt = null, qt = !1, je = null, gt = null;
var an = 0;
let Nr = 1;
var Ve, Ye, Re, _e, ie, ft, z, at, ye, ve, se, Be, Ue, Ne, T, wt, An, yt, Ut, bt, Mr;
const Nt = class Nt {
  constructor() {
    p(this, T);
    $(this, "id", Nr++);
    /**
     * The current values of any signals that are updated in this batch.
     * Tuple format: [value, is_derived] (note: is_derived is false for deriveds, too, if they were overridden via assignment)
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Value, [any, boolean]>}
     */
    $(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any signals (sources and deriveds) that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Value, any>}
     */
    $(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<(batch: Batch) => void>}
     */
    p(this, Ve, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    p(this, Ye, /* @__PURE__ */ new Set());
    /**
     * Callbacks that should run only when a fork is committed.
     * @type {Set<(batch: Batch) => void>}
     */
    p(this, Re, /* @__PURE__ */ new Set());
    /**
     * Async effects that are currently in flight
     * @type {Map<Effect, number>}
     */
    p(this, _e, /* @__PURE__ */ new Map());
    /**
     * Async effects that are currently in flight, _not_ inside a pending boundary
     * @type {Map<Effect, number>}
     */
    p(this, ie, /* @__PURE__ */ new Map());
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    p(this, ft, null);
    /**
     * The root effects that need to be flushed
     * @type {Effect[]}
     */
    p(this, z, []);
    /**
     * Effects created while this batch was active.
     * @type {Effect[]}
     */
    p(this, at, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    p(this, ye, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    p(this, ve, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    p(this, se, /* @__PURE__ */ new Map());
    /**
     * Inverse of #skipped_branches which we need to tell prior batches to unskip them when committing
     * @type {Set<Effect>}
     */
    p(this, Be, /* @__PURE__ */ new Set());
    $(this, "is_fork", !1);
    p(this, Ue, !1);
    /** @type {Set<Batch>} */
    p(this, Ne, /* @__PURE__ */ new Set());
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(t) {
    s(this, se).has(t) || s(this, se).set(t, { d: [], m: [] }), s(this, Be).delete(t);
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   * @param {(e: Effect) => void} callback
   */
  unskip_effect(t, n = (r) => this.schedule(r)) {
    var r = s(this, se).get(t);
    if (r) {
      s(this, se).delete(t);
      for (var i of r.d)
        S(i, N), n(i);
      for (i of r.m)
        S(i, oe), n(i);
    }
    s(this, Be).add(t);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Value} source
   * @param {any} value
   * @param {boolean} [is_derived]
   */
  capture(t, n, r = !1) {
    t.v !== R && !this.previous.has(t) && this.previous.set(t, t.v), (t.f & ke) === 0 && (this.current.set(t, [n, r]), te?.set(t, n)), this.is_fork || (t.v = n);
  }
  activate() {
    E = this;
  }
  deactivate() {
    E = null, te = null;
  }
  flush() {
    try {
      qt = !0, E = this, k(this, T, yt).call(this);
    } finally {
      an = 0, Bt = null, je = null, gt = null, qt = !1, E = null, te = null, Ce.clear();
    }
  }
  discard() {
    for (const t of s(this, Ye)) t(this);
    s(this, Ye).clear(), s(this, Re).clear(), Te.delete(this);
  }
  /**
   * @param {Effect} effect
   */
  register_created_effect(t) {
    s(this, at).push(t);
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  increment(t, n) {
    let r = s(this, _e).get(n) ?? 0;
    if (s(this, _e).set(n, r + 1), t) {
      let i = s(this, ie).get(n) ?? 0;
      s(this, ie).set(n, i + 1);
    }
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   * @param {boolean} skip - whether to skip updates (because this is triggered by a stale reaction)
   */
  decrement(t, n, r) {
    let i = s(this, _e).get(n) ?? 0;
    if (i === 1 ? s(this, _e).delete(n) : s(this, _e).set(n, i - 1), t) {
      let l = s(this, ie).get(n) ?? 0;
      l === 1 ? s(this, ie).delete(n) : s(this, ie).set(n, l - 1);
    }
    s(this, Ue) || r || (m(this, Ue, !0), Le(() => {
      m(this, Ue, !1), this.flush();
    }));
  }
  /**
   * @param {Set<Effect>} dirty_effects
   * @param {Set<Effect>} maybe_dirty_effects
   */
  transfer_effects(t, n) {
    for (const r of t)
      s(this, ye).add(r);
    for (const r of n)
      s(this, ve).add(r);
    t.clear(), n.clear();
  }
  /** @param {(batch: Batch) => void} fn */
  oncommit(t) {
    s(this, Ve).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    s(this, Ye).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  on_fork_commit(t) {
    s(this, Re).add(t);
  }
  run_fork_commit_callbacks() {
    for (const t of s(this, Re)) t(this);
    s(this, Re).clear();
  }
  settled() {
    return (s(this, ft) ?? m(this, ft, gn())).promise;
  }
  static ensure() {
    if (E === null) {
      const t = E = new Nt();
      qt || (Te.add(E), Le(() => {
        E === t && t.flush();
      }));
    }
    return E;
  }
  apply() {
    {
      te = null;
      return;
    }
  }
  /**
   *
   * @param {Effect} effect
   */
  schedule(t) {
    if (Bt = t, t.b?.is_pending && (t.f & (Ge | Ot | wn)) !== 0 && (t.f & qe) === 0) {
      t.b.defer_effect(t);
      return;
    }
    for (var n = t; n.parent !== null; ) {
      n = n.parent;
      var r = n.f;
      if (je !== null && n === w && (g === null || (g.f & M) === 0))
        return;
      if ((r & (xe | ae)) !== 0) {
        if ((r & A) === 0)
          return;
        n.f ^= A;
      }
    }
    s(this, z).push(n);
  }
};
Ve = new WeakMap(), Ye = new WeakMap(), Re = new WeakMap(), _e = new WeakMap(), ie = new WeakMap(), ft = new WeakMap(), z = new WeakMap(), at = new WeakMap(), ye = new WeakMap(), ve = new WeakMap(), se = new WeakMap(), Be = new WeakMap(), Ue = new WeakMap(), Ne = new WeakMap(), T = new WeakSet(), wt = function() {
  return this.is_fork || s(this, ie).size > 0;
}, An = function() {
  for (const r of s(this, Ne))
    for (const i of s(r, ie).keys()) {
      for (var t = !1, n = i; n.parent !== null; ) {
        if (s(this, se).has(n)) {
          t = !0;
          break;
        }
        n = n.parent;
      }
      if (!t)
        return !0;
    }
  return !1;
}, yt = function() {
  var o;
  if (an++ > 1e3 && (Te.delete(this), Dr()), !k(this, T, wt).call(this)) {
    for (const f of s(this, ye))
      s(this, ve).delete(f), S(f, N), this.schedule(f);
    for (const f of s(this, ve))
      S(f, oe), this.schedule(f);
  }
  const t = s(this, z);
  m(this, z, []), this.apply();
  var n = je = [], r = [], i = gt = [];
  for (const f of t)
    try {
      k(this, T, Ut).call(this, f, n, r);
    } catch (u) {
      throw Mn(f), u;
    }
  if (E = null, i.length > 0) {
    var l = Nt.ensure();
    for (const f of i)
      l.schedule(f);
  }
  if (je = null, gt = null, k(this, T, wt).call(this) || k(this, T, An).call(this)) {
    k(this, T, bt).call(this, r), k(this, T, bt).call(this, n);
    for (const [f, u] of s(this, se))
      Nn(f, u);
  } else {
    s(this, _e).size === 0 && Te.delete(this), s(this, ye).clear(), s(this, ve).clear();
    for (const f of s(this, Ve)) f(this);
    s(this, Ve).clear(), on(r), on(n), s(this, ft)?.resolve();
  }
  var a = (
    /** @type {Batch | null} */
    /** @type {unknown} */
    E
  );
  if (s(this, z).length > 0) {
    const f = a ?? (a = this);
    s(f, z).push(...s(this, z).filter((u) => !s(f, z).includes(u)));
  }
  a !== null && (Te.add(a), k(o = a, T, yt).call(o));
}, /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
Ut = function(t, n, r) {
  t.f ^= A;
  for (var i = t.first; i !== null; ) {
    var l = i.f, a = (l & (ae | xe)) !== 0, o = a && (l & A) !== 0, f = o || (l & W) !== 0 || s(this, se).has(i);
    if (!f && i.fn !== null) {
      a ? i.f ^= A : (l & Ge) !== 0 ? n.push(i) : dt(i) && ((l & fe) !== 0 && s(this, ve).add(i), Ze(i));
      var u = i.first;
      if (u !== null) {
        i = u;
        continue;
      }
    }
    for (; i !== null; ) {
      var _ = i.next;
      if (_ !== null) {
        i = _;
        break;
      }
      i = i.parent;
    }
  }
}, /**
 * @param {Effect[]} effects
 */
bt = function(t) {
  for (var n = 0; n < t.length; n += 1)
    Tn(t[n], s(this, ye), s(this, ve));
}, Mr = function() {
  var _, v, d;
  for (const c of Te) {
    var t = c.id < this.id, n = [];
    for (const [h, [b, y]] of this.current) {
      if (c.current.has(h)) {
        var r = (
          /** @type {[any, boolean]} */
          c.current.get(h)[0]
        );
        if (t && b !== r)
          c.current.set(h, [b, y]);
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
        for (const h of s(this, Be))
          c.unskip_effect(h, (b) => {
            var y;
            (b.f & (fe | st)) !== 0 ? c.schedule(b) : k(y = c, T, bt).call(y, [b]);
          });
      c.activate();
      var l = /* @__PURE__ */ new Set(), a = /* @__PURE__ */ new Map();
      for (var o of n)
        Rn(o, i, l, a);
      a = /* @__PURE__ */ new Map();
      var f = [...c.current.keys()].filter(
        (h) => this.current.has(h) ? (
          /** @type {[any, boolean]} */
          this.current.get(h)[0] !== h
        ) : !0
      );
      for (const h of s(this, at))
        (h.f & (re | W | Yt)) === 0 && Xt(h, f, a) && ((h.f & (st | fe)) !== 0 ? (S(h, N), c.schedule(h)) : s(c, ye).add(h));
      if (s(c, z).length > 0) {
        c.apply();
        for (var u of s(c, z))
          k(_ = c, T, Ut).call(_, u, [], []);
        m(c, z, []);
      }
      c.deactivate();
    }
  }
  for (const c of Te)
    s(c, Ne).has(this) && (s(c, Ne).delete(this), s(c, Ne).size === 0 && !k(v = c, T, wt).call(v) && (c.activate(), k(d = c, T, yt).call(d)));
};
let ze = Nt;
function Dr() {
  try {
    gr();
  } catch (e) {
    Ee(e, Bt);
  }
}
let ce = null;
function on(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var r = e[n++];
      if ((r.f & (re | W)) === 0 && dt(r) && (ce = /* @__PURE__ */ new Set(), Ze(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && Hn(r), ce?.size > 0)) {
        Ce.clear();
        for (const i of ce) {
          if ((i.f & (re | W)) !== 0) continue;
          const l = [i];
          let a = i.parent;
          for (; a !== null; )
            ce.has(a) && (ce.delete(a), l.push(a)), a = a.parent;
          for (let o = l.length - 1; o >= 0; o--) {
            const f = l[o];
            (f.f & (re | W)) === 0 && Ze(f);
          }
        }
        ce.clear();
      }
    }
    ce = null;
  }
}
function Rn(e, t, n, r) {
  if (!n.has(e) && (n.add(e), e.reactions !== null))
    for (const i of e.reactions) {
      const l = i.f;
      (l & M) !== 0 ? Rn(
        /** @type {Derived} */
        i,
        t,
        n,
        r
      ) : (l & (st | fe)) !== 0 && (l & N) === 0 && Xt(i, t, r) && (S(i, N), $t(
        /** @type {Effect} */
        i
      ));
    }
}
function Xt(e, t, n) {
  const r = n.get(e);
  if (r !== void 0) return r;
  if (e.deps !== null)
    for (const i of e.deps) {
      if (Ke.call(t, i))
        return !0;
      if ((i.f & M) !== 0 && Xt(
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
function $t(e) {
  E.schedule(e);
}
function Nn(e, t) {
  if (!((e.f & ae) !== 0 && (e.f & A) !== 0)) {
    (e.f & N) !== 0 ? t.d.push(e) : (e.f & oe) !== 0 && t.m.push(e), S(e, A);
    for (var n = e.first; n !== null; )
      Nn(n, t), n = n.next;
  }
}
function Mn(e) {
  S(e, A);
  for (var t = e.first; t !== null; )
    Mn(t), t = t.next;
}
function Or(e) {
  let t = 0, n = Ct(0), r;
  return () => {
    nn() && (L(n), ti(() => (t === 0 && (r = ai(() => e(() => rt(n)))), t += 1, () => {
      Le(() => {
        t -= 1, t === 0 && (r?.(), r = void 0, rt(n));
      });
    })));
  };
}
var Cr = We | Qe;
function Fr(e, t, n, r) {
  new Pr(e, t, n, r);
}
var B, Zt, U, Me, O, H, D, q, pe, De, be, He, ot, ut, me, Mt, x, zr, qr, Ir, Ht, Et, kt, Kt, Gt;
class Pr {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(t, n, r, i) {
    p(this, x);
    /** @type {Boundary | null} */
    $(this, "parent");
    $(this, "is_pending", !1);
    /**
     * API-level transformError transform function. Transforms errors before they reach the `failed` snippet.
     * Inherited from parent boundary, or defaults to identity.
     * @type {(error: unknown) => unknown}
     */
    $(this, "transform_error");
    /** @type {TemplateNode} */
    p(this, B);
    /** @type {TemplateNode | null} */
    p(this, Zt, null);
    /** @type {BoundaryProps} */
    p(this, U);
    /** @type {((anchor: Node) => void)} */
    p(this, Me);
    /** @type {Effect} */
    p(this, O);
    /** @type {Effect | null} */
    p(this, H, null);
    /** @type {Effect | null} */
    p(this, D, null);
    /** @type {Effect | null} */
    p(this, q, null);
    /** @type {DocumentFragment | null} */
    p(this, pe, null);
    p(this, De, 0);
    p(this, be, 0);
    p(this, He, !1);
    /** @type {Set<Effect>} */
    p(this, ot, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    p(this, ut, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    p(this, me, null);
    p(this, Mt, Or(() => (m(this, me, Ct(s(this, De))), () => {
      m(this, me, null);
    })));
    m(this, B, t), m(this, U, n), m(this, Me, (l) => {
      var a = (
        /** @type {Effect} */
        w
      );
      a.b = this, a.f |= Vt, r(l);
    }), this.parent = /** @type {Effect} */
    w.b, this.transform_error = i ?? this.parent?.transform_error ?? ((l) => l), m(this, O, Bn(() => {
      k(this, x, Ht).call(this);
    }, Cr));
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    Tn(t, s(this, ot), s(this, ut));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!s(this, U).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  update_pending_count(t, n) {
    k(this, x, Kt).call(this, t, n), m(this, De, s(this, De) + t), !(!s(this, me) || s(this, He)) && (m(this, He, !0), Le(() => {
      m(this, He, !1), s(this, me) && At(s(this, me), s(this, De));
    }));
  }
  get_effect_pending() {
    return s(this, Mt).call(this), L(
      /** @type {Source<number>} */
      s(this, me)
    );
  }
  /** @param {unknown} error */
  error(t) {
    if (!s(this, U).onerror && !s(this, U).failed)
      throw t;
    E?.is_fork ? (s(this, H) && E.skip_effect(s(this, H)), s(this, D) && E.skip_effect(s(this, D)), s(this, q) && E.skip_effect(s(this, q)), E.on_fork_commit(() => {
      k(this, x, Gt).call(this, t);
    })) : k(this, x, Gt).call(this, t);
  }
}
B = new WeakMap(), Zt = new WeakMap(), U = new WeakMap(), Me = new WeakMap(), O = new WeakMap(), H = new WeakMap(), D = new WeakMap(), q = new WeakMap(), pe = new WeakMap(), De = new WeakMap(), be = new WeakMap(), He = new WeakMap(), ot = new WeakMap(), ut = new WeakMap(), me = new WeakMap(), Mt = new WeakMap(), x = new WeakSet(), zr = function() {
  try {
    m(this, H, he(() => s(this, Me).call(this, s(this, B))));
  } catch (t) {
    this.error(t);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
qr = function(t) {
  const n = s(this, U).failed;
  n && m(this, q, he(() => {
    n(
      s(this, B),
      () => t,
      () => () => {
      }
    );
  }));
}, Ir = function() {
  const t = s(this, U).pending;
  t && (this.is_pending = !0, m(this, D, he(() => t(s(this, B)))), Le(() => {
    var n = m(this, pe, document.createDocumentFragment()), r = Rt();
    n.append(r), m(this, H, k(this, x, kt).call(this, () => he(() => s(this, Me).call(this, r)))), s(this, be) === 0 && (s(this, B).before(n), m(this, pe, null), it(
      /** @type {Effect} */
      s(this, D),
      () => {
        m(this, D, null);
      }
    ), k(this, x, Et).call(
      this,
      /** @type {Batch} */
      E
    ));
  }));
}, Ht = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), m(this, be, 0), m(this, De, 0), m(this, H, he(() => {
      s(this, Me).call(this, s(this, B));
    })), s(this, be) > 0) {
      var t = m(this, pe, document.createDocumentFragment());
      Wn(s(this, H), t);
      const n = (
        /** @type {(anchor: Node) => void} */
        s(this, U).pending
      );
      m(this, D, he(() => n(s(this, B))));
    } else
      k(this, x, Et).call(
        this,
        /** @type {Batch} */
        E
      );
  } catch (n) {
    this.error(n);
  }
}, /**
 * @param {Batch} batch
 */
Et = function(t) {
  this.is_pending = !1, t.transfer_effects(s(this, ot), s(this, ut));
}, /**
 * @template T
 * @param {() => T} fn
 */
kt = function(t) {
  var n = w, r = g, i = Z;
  ue(s(this, O)), Q(s(this, O)), Je(s(this, O).ctx);
  try {
    return ze.ensure(), t();
  } catch (l) {
    return xn(l), null;
  } finally {
    ue(n), Q(r), Je(i);
  }
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 * @param {Batch} batch
 */
Kt = function(t, n) {
  var r;
  if (!this.has_pending_snippet()) {
    this.parent && k(r = this.parent, x, Kt).call(r, t, n);
    return;
  }
  m(this, be, s(this, be) + t), s(this, be) === 0 && (k(this, x, Et).call(this, n), s(this, D) && it(s(this, D), () => {
    m(this, D, null);
  }), s(this, pe) && (s(this, B).before(s(this, pe)), m(this, pe, null)));
}, /**
 * @param {unknown} error
 */
Gt = function(t) {
  s(this, H) && (V(s(this, H)), m(this, H, null)), s(this, D) && (V(s(this, D)), m(this, D, null)), s(this, q) && (V(s(this, q)), m(this, q, null));
  var n = s(this, U).onerror;
  let r = s(this, U).failed;
  var i = !1, l = !1;
  const a = () => {
    if (i) {
      Tr();
      return;
    }
    i = !0, l && Er(), s(this, q) !== null && it(s(this, q), () => {
      m(this, q, null);
    }), k(this, x, kt).call(this, () => {
      k(this, x, Ht).call(this);
    });
  }, o = (f) => {
    try {
      l = !0, n?.(f, a), l = !1;
    } catch (u) {
      Ee(u, s(this, O) && s(this, O).parent);
    }
    r && m(this, q, k(this, x, kt).call(this, () => {
      try {
        return he(() => {
          var u = (
            /** @type {Effect} */
            w
          );
          u.b = this, u.f |= Vt, r(
            s(this, B),
            () => f,
            () => a
          );
        });
      } catch (u) {
        return Ee(
          u,
          /** @type {Effect} */
          s(this, O).parent
        ), null;
      }
    }));
  };
  Le(() => {
    var f;
    try {
      f = this.transform_error(t);
    } catch (u) {
      Ee(u, s(this, O) && s(this, O).parent);
      return;
    }
    f !== null && typeof f == "object" && typeof /** @type {any} */
    f.then == "function" ? f.then(
      o,
      /** @param {unknown} e */
      (u) => Ee(u, s(this, O) && s(this, O).parent)
    ) : o(f);
  });
};
function jr(e, t, n, r) {
  const i = Vr;
  var l = e.filter((d) => !d.settled);
  if (n.length === 0 && l.length === 0) {
    r(t.map(i));
    return;
  }
  var a = (
    /** @type {Effect} */
    w
  ), o = Lr(), f = l.length === 1 ? l[0].promise : l.length > 1 ? Promise.all(l.map((d) => d.promise)) : null;
  function u(d) {
    o();
    try {
      r(d);
    } catch (c) {
      (a.f & re) === 0 && Ee(c, a);
    }
    Tt();
  }
  if (n.length === 0) {
    f.then(() => u(t.map(i)));
    return;
  }
  var _ = Dn();
  function v() {
    Promise.all(n.map((d) => /* @__PURE__ */ Yr(d))).then((d) => u([...t.map(i), ...d])).catch((d) => Ee(d, a)).finally(() => _());
  }
  f ? f.then(() => {
    o(), v(), Tt();
  }) : v();
}
function Lr() {
  var e = (
    /** @type {Effect} */
    w
  ), t = g, n = Z, r = (
    /** @type {Batch} */
    E
  );
  return function(l = !0) {
    ue(e), Q(t), Je(n), l && (e.f & re) === 0 && (r?.activate(), r?.apply());
  };
}
function Tt(e = !0) {
  ue(null), Q(null), Je(null), e && E?.deactivate();
}
function Dn() {
  var e = (
    /** @type {Effect} */
    w
  ), t = (
    /** @type {Boundary} */
    e.b
  ), n = (
    /** @type {Batch} */
    E
  ), r = t.is_rendered();
  return t.update_pending_count(1, n), n.increment(r, e), (i = !1) => {
    t.update_pending_count(-1, n), n.decrement(r, e, i);
  };
}
// @__NO_SIDE_EFFECTS__
function Vr(e) {
  var t = M | N;
  return w !== null && (w.f |= Qe), {
    ctx: Z,
    deps: null,
    effects: null,
    equals: yn,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      R
    ),
    wv: 0,
    parent: w,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function Yr(e, t, n) {
  let r = (
    /** @type {Effect | null} */
    w
  );
  r === null && _r();
  var i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), l = Ct(
    /** @type {V} */
    R
  ), a = !g, o = /* @__PURE__ */ new Map();
  return ei(() => {
    var f = (
      /** @type {Effect} */
      w
    ), u = gn();
    i = u.promise;
    try {
      Promise.resolve(e()).then(u.resolve, u.reject).finally(Tt);
    } catch (c) {
      u.reject(c), Tt();
    }
    var _ = (
      /** @type {Batch} */
      E
    );
    if (a) {
      if ((f.f & qe) !== 0)
        var v = Dn();
      if (
        /** @type {Boundary} */
        r.b.is_rendered()
      )
        o.get(_)?.reject(de), o.delete(_);
      else {
        for (const c of o.values())
          c.reject(de);
        o.clear();
      }
      o.set(_, u);
    }
    const d = (c, h = void 0) => {
      if (v) {
        var b = h === de;
        v(b);
      }
      if (!(h === de || (f.f & re) !== 0)) {
        if (_.activate(), h)
          l.f |= ke, At(l, h);
        else {
          (l.f & ke) !== 0 && (l.f ^= ke), At(l, c);
          for (const [y, F] of o) {
            if (o.delete(y), y === _) break;
            F.reject(de);
          }
        }
        _.deactivate();
      }
    };
    u.promise.then(d, (c) => d(null, c || "unknown"));
  }), Zr(() => {
    for (const f of o.values())
      f.reject(de);
  }), new Promise((f) => {
    function u(_) {
      function v() {
        _ === i ? f(l) : u(i);
      }
      _.then(v, v);
    }
    u(i);
  });
}
function Br(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      V(
        /** @type {Effect} */
        t[n]
      );
  }
}
function en(e) {
  var t, n = w, r = e.parent;
  if (!Se && r !== null && (r.f & (re | W)) !== 0)
    return Sr(), e.v;
  ue(r);
  try {
    e.f &= ~Pe, Br(e), t = Xn(e);
  } finally {
    ue(n);
  }
  return t;
}
function On(e) {
  var t = en(e);
  if (!e.equals(t) && (e.wv = Zn(), (!E?.is_fork || e.deps === null) && (E !== null ? E.capture(e, t, !0) : e.v = t, e.deps === null))) {
    S(e, A);
    return;
  }
  Se || (te !== null ? (nn() || E?.is_fork) && te.set(e, t) : Qt(e));
}
function Ur(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      (t.teardown || t.ac) && (t.teardown?.(), t.ac?.abort(de), t.teardown = ur, t.ac = null, lt(t, 0), rn(t));
}
function Cn(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      t.teardown && Ze(t);
}
let Wt = /* @__PURE__ */ new Set();
const Ce = /* @__PURE__ */ new Map();
let Fn = !1;
function Ct(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: yn,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function K(e, t) {
  const n = Ct(e);
  return si(n), n;
}
function j(e, t, n = !1) {
  g !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!ne || (g.f & Yt) !== 0) && kn() && (g.f & (M | fe | st | Yt)) !== 0 && (J === null || !Ke.call(J, e)) && br();
  let r = n ? tt(t) : t;
  return At(e, r, gt);
}
function At(e, t, n = null) {
  if (!e.equals(t)) {
    Ce.set(e, Se ? t : e.v);
    var r = ze.ensure();
    if (r.capture(e, t), (e.f & M) !== 0) {
      const i = (
        /** @type {Derived} */
        e
      );
      (e.f & N) !== 0 && en(i), te === null && Qt(i);
    }
    e.wv = Zn(), Pn(e, N, n), w !== null && (w.f & A) !== 0 && (w.f & (ae | xe)) === 0 && (Y === null ? li([e]) : Y.push(e)), !r.is_fork && Wt.size > 0 && !Fn && Hr();
  }
  return t;
}
function Hr() {
  Fn = !1;
  for (const e of Wt)
    (e.f & A) !== 0 && S(e, oe), dt(e) && Ze(e);
  Wt.clear();
}
function rt(e) {
  j(e, e.v + 1);
}
function Pn(e, t, n) {
  var r = e.reactions;
  if (r !== null)
    for (var i = r.length, l = 0; l < i; l++) {
      var a = r[l], o = a.f, f = (o & N) === 0;
      if (f && S(a, t), (o & M) !== 0) {
        var u = (
          /** @type {Derived} */
          a
        );
        te?.delete(u), (o & Pe) === 0 && (o & G && (w === null || (w.f & St) === 0) && (a.f |= Pe), Pn(u, oe, n));
      } else if (f) {
        var _ = (
          /** @type {Effect} */
          a
        );
        (o & fe) !== 0 && ce !== null && ce.add(_), n !== null ? n.push(_) : $t(_);
      }
    }
}
function tt(e) {
  if (typeof e != "object" || e === null || zt in e)
    return e;
  const t = or(e);
  if (t !== fr && t !== ar)
    return e;
  var n = /* @__PURE__ */ new Map(), r = rr(e), i = /* @__PURE__ */ K(0), l = Fe, a = (o) => {
    if (Fe === l)
      return o();
    var f = g, u = Fe;
    Q(null), dn(l);
    var _ = o();
    return Q(f), dn(u), _;
  };
  return r && n.set("length", /* @__PURE__ */ K(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(o, f, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && wr();
        var _ = n.get(f);
        return _ === void 0 ? a(() => {
          var v = /* @__PURE__ */ K(u.value);
          return n.set(f, v), v;
        }) : j(_, u.value, !0), !0;
      },
      deleteProperty(o, f) {
        var u = n.get(f);
        if (u === void 0) {
          if (f in o) {
            const _ = a(() => /* @__PURE__ */ K(R));
            n.set(f, _), rt(i);
          }
        } else
          j(u, R), rt(i);
        return !0;
      },
      get(o, f, u) {
        if (f === zt)
          return e;
        var _ = n.get(f), v = f in o;
        if (_ === void 0 && (!v || nt(o, f)?.writable) && (_ = a(() => {
          var c = tt(v ? o[f] : R), h = /* @__PURE__ */ K(c);
          return h;
        }), n.set(f, _)), _ !== void 0) {
          var d = L(_);
          return d === R ? void 0 : d;
        }
        return Reflect.get(o, f, u);
      },
      getOwnPropertyDescriptor(o, f) {
        var u = Reflect.getOwnPropertyDescriptor(o, f);
        if (u && "value" in u) {
          var _ = n.get(f);
          _ && (u.value = L(_));
        } else if (u === void 0) {
          var v = n.get(f), d = v?.v;
          if (v !== void 0 && d !== R)
            return {
              enumerable: !0,
              configurable: !0,
              value: d,
              writable: !0
            };
        }
        return u;
      },
      has(o, f) {
        if (f === zt)
          return !0;
        var u = n.get(f), _ = u !== void 0 && u.v !== R || Reflect.has(o, f);
        if (u !== void 0 || w !== null && (!_ || nt(o, f)?.writable)) {
          u === void 0 && (u = a(() => {
            var d = _ ? tt(o[f]) : R, c = /* @__PURE__ */ K(d);
            return c;
          }), n.set(f, u));
          var v = L(u);
          if (v === R)
            return !1;
        }
        return _;
      },
      set(o, f, u, _) {
        var v = n.get(f), d = f in o;
        if (r && f === "length")
          for (var c = u; c < /** @type {Source<number>} */
          v.v; c += 1) {
            var h = n.get(c + "");
            h !== void 0 ? j(h, R) : c in o && (h = a(() => /* @__PURE__ */ K(R)), n.set(c + "", h));
          }
        if (v === void 0)
          (!d || nt(o, f)?.writable) && (v = a(() => /* @__PURE__ */ K(void 0)), j(v, tt(u)), n.set(f, v));
        else {
          d = v.v !== R;
          var b = a(() => tt(u));
          j(v, b);
        }
        var y = Reflect.getOwnPropertyDescriptor(o, f);
        if (y?.set && y.set.call(_, u), !d) {
          if (r && typeof f == "string") {
            var F = (
              /** @type {Source<number>} */
              n.get("length")
            ), we = Number(f);
            Number.isInteger(we) && we >= F.v && j(F, we + 1);
          }
          rt(i);
        }
        return !0;
      },
      ownKeys(o) {
        L(i);
        var f = Reflect.ownKeys(o).filter((v) => {
          var d = n.get(v);
          return d === void 0 || d.v !== R;
        });
        for (var [u, _] of n)
          _.v !== R && !(u in o) && f.push(u);
        return f;
      },
      setPrototypeOf() {
        yr();
      }
    }
  );
}
var un, zn, qn, In;
function Kr() {
  if (un === void 0) {
    un = window, zn = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    qn = nt(t, "firstChild").get, In = nt(t, "nextSibling").get, ln(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), ln(n) && (n.__t = void 0);
  }
}
function Rt(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function jn(e) {
  return (
    /** @type {TemplateNode | null} */
    qn.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function tn(e) {
  return (
    /** @type {TemplateNode | null} */
    In.call(e)
  );
}
function $e(e, t) {
  return /* @__PURE__ */ jn(e);
}
function cn(e, t = 1, n = !1) {
  let r = e;
  for (; t--; )
    r = /** @type {TemplateNode} */
    /* @__PURE__ */ tn(r);
  return r;
}
function Gr() {
  return !1;
}
function Ln(e, t, n) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElementNS(xr, e, void 0)
  );
}
function Vn(e) {
  var t = g, n = w;
  Q(null), ue(null);
  try {
    return e();
  } finally {
    Q(t), ue(n);
  }
}
function Wr(e) {
  w === null && (g === null && mr(), pr()), Se && vr();
}
function Jr(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function ge(e, t) {
  var n = w;
  n !== null && (n.f & W) !== 0 && (e |= W);
  var r = {
    ctx: Z,
    deps: null,
    nodes: null,
    f: e | N | G,
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
  E?.register_created_effect(r);
  var i = r;
  if ((e & Ge) !== 0)
    je !== null ? je.push(r) : ze.ensure().schedule(r);
  else if (t !== null) {
    try {
      Ze(r);
    } catch (a) {
      throw V(r), a;
    }
    i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && // either `null`, or a singular child
    (i.f & Qe) === 0 && (i = i.first, (e & fe) !== 0 && (e & We) !== 0 && i !== null && (i.f |= We));
  }
  if (i !== null && (i.parent = n, n !== null && Jr(i, n), g !== null && (g.f & M) !== 0 && (e & xe) === 0)) {
    var l = (
      /** @type {Derived} */
      g
    );
    (l.effects ?? (l.effects = [])).push(i);
  }
  return r;
}
function nn() {
  return g !== null && !ne;
}
function Zr(e) {
  const t = ge(Ot, null);
  return S(t, A), t.teardown = e, t;
}
function Qr(e) {
  Wr();
  var t = (
    /** @type {Effect} */
    w.f
  ), n = !g && (t & ae) !== 0 && (t & qe) === 0;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      Z
    );
    (r.e ?? (r.e = [])).push(e);
  } else
    return Yn(e);
}
function Yn(e) {
  return ge(Ge | dr, e);
}
function Xr(e) {
  ze.ensure();
  const t = ge(xe | Qe, e);
  return (n = {}) => new Promise((r) => {
    n.outro ? it(t, () => {
      V(t), r(void 0);
    }) : (V(t), r(void 0));
  });
}
function $r(e) {
  return ge(Ge, e);
}
function ei(e) {
  return ge(st | Qe, e);
}
function ti(e, t = 0) {
  return ge(Ot | t, e);
}
function It(e, t = [], n = [], r = []) {
  jr(r, t, n, (i) => {
    ge(Ot, () => e(...i.map(L)));
  });
}
function Bn(e, t = 0) {
  var n = ge(fe | t, e);
  return n;
}
function he(e) {
  return ge(ae | Qe, e);
}
function Un(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = Se, r = g;
    hn(!0), Q(null);
    try {
      t.call(null);
    } finally {
      hn(n), Q(r);
    }
  }
}
function rn(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const i = n.ac;
    i !== null && Vn(() => {
      i.abort(de);
    });
    var r = n.next;
    (n.f & xe) !== 0 ? n.parent = null : V(n, t), n = r;
  }
}
function ni(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & ae) === 0 && V(t), t = n;
  }
}
function V(e, t = !0) {
  var n = !1;
  (t || (e.f & hr) !== 0) && e.nodes !== null && e.nodes.end !== null && (ri(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), n = !0), S(e, fn), rn(e, t && !n), lt(e, 0);
  var r = e.nodes && e.nodes.t;
  if (r !== null)
    for (const l of r)
      l.stop();
  Un(e), e.f ^= fn, e.f |= re;
  var i = e.parent;
  i !== null && i.first !== null && Hn(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function ri(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : /* @__PURE__ */ tn(e);
    e.remove(), e = n;
  }
}
function Hn(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function it(e, t, n = !0) {
  var r = [];
  Kn(e, r, !0);
  var i = () => {
    n && V(e), t && t();
  }, l = r.length;
  if (l > 0) {
    var a = () => --l || i();
    for (var o of r)
      o.out(a);
  } else
    i();
}
function Kn(e, t, n) {
  if ((e.f & W) === 0) {
    e.f ^= W;
    var r = e.nodes && e.nodes.t;
    if (r !== null)
      for (const o of r)
        (o.is_global || n) && t.push(o);
    for (var i = e.first; i !== null; ) {
      var l = i.next;
      if ((i.f & xe) === 0) {
        var a = (i.f & We) !== 0 || // If this is a branch effect without a block effect parent,
        // it means the parent block effect was pruned. In that case,
        // transparency information was transferred to the branch effect.
        (i.f & ae) !== 0 && (e.f & fe) !== 0;
        Kn(i, t, a ? n : !1);
      }
      i = l;
    }
  }
}
function ii(e) {
  Gn(e, !0);
}
function Gn(e, t) {
  if ((e.f & W) !== 0) {
    e.f ^= W, (e.f & A) === 0 && (S(e, N), ze.ensure().schedule(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, i = (n.f & We) !== 0 || (n.f & ae) !== 0;
      Gn(n, i ? t : !1), n = r;
    }
    var l = e.nodes && e.nodes.t;
    if (l !== null)
      for (const a of l)
        (a.is_global || t) && a.in();
  }
}
function Wn(e, t) {
  if (e.nodes)
    for (var n = e.nodes.start, r = e.nodes.end; n !== null; ) {
      var i = n === r ? null : /* @__PURE__ */ tn(n);
      t.append(n), n = i;
    }
}
let xt = !1, Se = !1;
function hn(e) {
  Se = e;
}
let g = null, ne = !1;
function Q(e) {
  g = e;
}
let w = null;
function ue(e) {
  w = e;
}
let J = null;
function si(e) {
  g !== null && (J === null ? J = [e] : J.push(e));
}
let C = null, P = 0, Y = null;
function li(e) {
  Y = e;
}
let Jn = 1, Ae = 0, Fe = Ae;
function dn(e) {
  Fe = e;
}
function Zn() {
  return ++Jn;
}
function dt(e) {
  var t = e.f;
  if ((t & N) !== 0)
    return !0;
  if (t & M && (e.f &= ~Pe), (t & oe) !== 0) {
    for (var n = (
      /** @type {Value[]} */
      e.deps
    ), r = n.length, i = 0; i < r; i++) {
      var l = n[i];
      if (dt(
        /** @type {Derived} */
        l
      ) && On(
        /** @type {Derived} */
        l
      ), l.wv > e.wv)
        return !0;
    }
    (t & G) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    te === null && S(e, A);
  }
  return !1;
}
function Qn(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null && !(J !== null && Ke.call(J, e)))
    for (var i = 0; i < r.length; i++) {
      var l = r[i];
      (l.f & M) !== 0 ? Qn(
        /** @type {Derived} */
        l,
        t,
        !1
      ) : t === l && (n ? S(l, N) : (l.f & A) !== 0 && S(l, oe), $t(
        /** @type {Effect} */
        l
      ));
    }
}
function Xn(e) {
  var b;
  var t = C, n = P, r = Y, i = g, l = J, a = Z, o = ne, f = Fe, u = e.f;
  C = /** @type {null | Value[]} */
  null, P = 0, Y = null, g = (u & (ae | xe)) === 0 ? e : null, J = null, Je(e.ctx), ne = !1, Fe = ++Ae, e.ac !== null && (Vn(() => {
    e.ac.abort(de);
  }), e.ac = null);
  try {
    e.f |= St;
    var _ = (
      /** @type {Function} */
      e.fn
    ), v = _();
    e.f |= qe;
    var d = e.deps, c = E?.is_fork;
    if (C !== null) {
      var h;
      if (c || lt(e, P), d !== null && P > 0)
        for (d.length = P + C.length, h = 0; h < C.length; h++)
          d[P + h] = C[h];
      else
        e.deps = d = C;
      if (nn() && (e.f & G) !== 0)
        for (h = P; h < d.length; h++)
          ((b = d[h]).reactions ?? (b.reactions = [])).push(e);
    } else !c && d !== null && P < d.length && (lt(e, P), d.length = P);
    if (kn() && Y !== null && !ne && d !== null && (e.f & (M | oe | N)) === 0)
      for (h = 0; h < /** @type {Source[]} */
      Y.length; h++)
        Qn(
          Y[h],
          /** @type {Effect} */
          e
        );
    if (i !== null && i !== e) {
      if (Ae++, i.deps !== null)
        for (let y = 0; y < n; y += 1)
          i.deps[y].rv = Ae;
      if (t !== null)
        for (const y of t)
          y.rv = Ae;
      Y !== null && (r === null ? r = Y : r.push(.../** @type {Source[]} */
      Y));
    }
    return (e.f & ke) !== 0 && (e.f ^= ke), v;
  } catch (y) {
    return xn(y);
  } finally {
    e.f ^= St, C = t, P = n, Y = r, g = i, J = l, Je(a), ne = o, Fe = f;
  }
}
function fi(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = ir.call(n, e);
    if (r !== -1) {
      var i = n.length - 1;
      i === 0 ? n = t.reactions = null : (n[r] = n[i], n.pop());
    }
  }
  if (n === null && (t.f & M) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (C === null || !Ke.call(C, t))) {
    var l = (
      /** @type {Derived} */
      t
    );
    (l.f & G) !== 0 && (l.f ^= G, l.f &= ~Pe), l.v !== R && Qt(l), Ur(l), lt(l, 0);
  }
}
function lt(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      fi(e, n[r]);
}
function Ze(e) {
  var t = e.f;
  if ((t & re) === 0) {
    S(e, A);
    var n = w, r = xt;
    w = e, xt = !0;
    try {
      (t & (fe | wn)) !== 0 ? ni(e) : rn(e), Un(e);
      var i = Xn(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = Jn;
      var l;
    } finally {
      xt = r, w = n;
    }
  }
}
function L(e) {
  var t = e.f, n = (t & M) !== 0;
  if (g !== null && !ne) {
    var r = w !== null && (w.f & re) !== 0;
    if (!r && (J === null || !Ke.call(J, e))) {
      var i = g.deps;
      if ((g.f & St) !== 0)
        e.rv < Ae && (e.rv = Ae, C === null && i !== null && i[P] === e ? P++ : C === null ? C = [e] : C.push(e));
      else {
        (g.deps ?? (g.deps = [])).push(e);
        var l = e.reactions;
        l === null ? e.reactions = [g] : Ke.call(l, g) || l.push(g);
      }
    }
  }
  if (Se && Ce.has(e))
    return Ce.get(e);
  if (n) {
    var a = (
      /** @type {Derived} */
      e
    );
    if (Se) {
      var o = a.v;
      return ((a.f & A) === 0 && a.reactions !== null || er(a)) && (o = en(a)), Ce.set(a, o), o;
    }
    var f = (a.f & G) === 0 && !ne && g !== null && (xt || (g.f & G) !== 0), u = (a.f & qe) === 0;
    dt(a) && (f && (a.f |= G), On(a)), f && !u && (Cn(a), $n(a));
  }
  if (te?.has(e))
    return te.get(e);
  if ((e.f & ke) !== 0)
    throw e.v;
  return e.v;
}
function $n(e) {
  if (e.f |= G, e.deps !== null)
    for (const t of e.deps)
      (t.reactions ?? (t.reactions = [])).push(e), (t.f & M) !== 0 && (t.f & G) === 0 && (Cn(
        /** @type {Derived} */
        t
      ), $n(
        /** @type {Derived} */
        t
      ));
}
function er(e) {
  if (e.v === R) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (Ce.has(t) || (t.f & M) !== 0 && er(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function ai(e) {
  var t = ne;
  try {
    return ne = !0, e();
  } finally {
    ne = t;
  }
}
const oi = ["touchstart", "touchmove"];
function ui(e) {
  return oi.includes(e);
}
const vt = Symbol("events"), ci = /* @__PURE__ */ new Set(), _n = /* @__PURE__ */ new Set();
let vn = null;
function pn(e) {
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), r = e.type, i = e.composedPath?.() || [], l = (
    /** @type {null | Element} */
    i[0] || e.target
  );
  vn = e;
  var a = 0, o = vn === e && e[vt];
  if (o) {
    var f = i.indexOf(o);
    if (f !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e[vt] = t;
      return;
    }
    var u = i.indexOf(t);
    if (u === -1)
      return;
    f <= u && (a = f);
  }
  if (l = /** @type {Element} */
  i[a] || e.target, l !== t) {
    lr(e, "currentTarget", {
      configurable: !0,
      get() {
        return l || n;
      }
    });
    var _ = g, v = w;
    Q(null), ue(null);
    try {
      for (var d, c = []; l !== null; ) {
        var h = l.assignedSlot || l.parentNode || /** @type {any} */
        l.host || null;
        try {
          var b = l[vt]?.[r];
          b != null && (!/** @type {any} */
          l.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === l) && b.call(l, e);
        } catch (y) {
          d ? c.push(y) : d = y;
        }
        if (e.cancelBubble || h === t || h === null)
          break;
        l = h;
      }
      if (d) {
        for (let y of c)
          queueMicrotask(() => {
            throw y;
          });
        throw d;
      }
    } finally {
      e[vt] = t, delete e.currentTarget, Q(_), ue(v);
    }
  }
}
const hi = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (e) => e
  })
);
function di(e) {
  return (
    /** @type {string} */
    hi?.createHTML(e) ?? e
  );
}
function _i(e) {
  var t = Ln("template");
  return t.innerHTML = di(e.replaceAll("<!>", "<!---->")), t.content;
}
function vi(e, t) {
  var n = (
    /** @type {Effect} */
    w
  );
  n.nodes === null && (n.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function _t(e, t) {
  var n = (t & kr) !== 0, r, i = !e.startsWith("<!>");
  return () => {
    r === void 0 && (r = _i(i ? e : "<!>" + e), r = /** @type {TemplateNode} */
    /* @__PURE__ */ jn(r));
    var l = (
      /** @type {TemplateNode} */
      n || zn ? document.importNode(r, !0) : r.cloneNode(!0)
    );
    return vi(l, l), l;
  };
}
function et(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function jt(e, t) {
  var n = t == null ? "" : typeof t == "object" ? `${t}` : t;
  n !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = n, e.nodeValue = `${n}`);
}
function pi(e, t) {
  return mi(e, t);
}
const pt = /* @__PURE__ */ new Map();
function mi(e, { target: t, anchor: n, props: r = {}, events: i, context: l, intro: a = !0, transformError: o }) {
  Kr();
  var f = void 0, u = Xr(() => {
    var _ = n ?? t.appendChild(Rt());
    Fr(
      /** @type {TemplateNode} */
      _,
      {
        pending: () => {
        }
      },
      (c) => {
        bn({});
        var h = (
          /** @type {ComponentContext} */
          Z
        );
        l && (h.c = l), i && (r.$$events = i), f = e(c, r) || {}, En();
      },
      o
    );
    var v = /* @__PURE__ */ new Set(), d = (c) => {
      for (var h = 0; h < c.length; h++) {
        var b = c[h];
        if (!v.has(b)) {
          v.add(b);
          var y = ui(b);
          for (const X of [t, document]) {
            var F = pt.get(X);
            F === void 0 && (F = /* @__PURE__ */ new Map(), pt.set(X, F));
            var we = F.get(b);
            we === void 0 ? (X.addEventListener(b, pn, { passive: y }), F.set(b, 1)) : F.set(b, we + 1);
          }
        }
      }
    };
    return d(sr(ci)), _n.add(d), () => {
      for (var c of v)
        for (const y of [t, document]) {
          var h = (
            /** @type {Map<string, number>} */
            pt.get(y)
          ), b = (
            /** @type {number} */
            h.get(c)
          );
          --b == 0 ? (y.removeEventListener(c, pn), h.delete(c), h.size === 0 && pt.delete(y)) : h.set(c, b);
        }
      _n.delete(d), _ !== n && _.parentNode?.removeChild(_);
    };
  });
  return Jt.set(f, u), f;
}
let Jt = /* @__PURE__ */ new WeakMap();
function gi(e, t) {
  const n = Jt.get(e);
  return n ? (Jt.delete(e), n(t)) : Promise.resolve();
}
var ee, le, I, Oe, ct, ht, Dt;
class wi {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, n = !0) {
    /** @type {TemplateNode} */
    $(this, "anchor");
    /** @type {Map<Batch, Key>} */
    p(this, ee, /* @__PURE__ */ new Map());
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
    p(this, le, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    p(this, I, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    p(this, Oe, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    p(this, ct, !0);
    /**
     * @param {Batch} batch
     */
    p(this, ht, (t) => {
      if (s(this, ee).has(t)) {
        var n = (
          /** @type {Key} */
          s(this, ee).get(t)
        ), r = s(this, le).get(n);
        if (r)
          ii(r), s(this, Oe).delete(n);
        else {
          var i = s(this, I).get(n);
          i && (s(this, le).set(n, i.effect), s(this, I).delete(n), i.fragment.lastChild.remove(), this.anchor.before(i.fragment), r = i.effect);
        }
        for (const [l, a] of s(this, ee)) {
          if (s(this, ee).delete(l), l === t)
            break;
          const o = s(this, I).get(a);
          o && (V(o.effect), s(this, I).delete(a));
        }
        for (const [l, a] of s(this, le)) {
          if (l === n || s(this, Oe).has(l)) continue;
          const o = () => {
            if (Array.from(s(this, ee).values()).includes(l)) {
              var u = document.createDocumentFragment();
              Wn(a, u), u.append(Rt()), s(this, I).set(l, { effect: a, fragment: u });
            } else
              V(a);
            s(this, Oe).delete(l), s(this, le).delete(l);
          };
          s(this, ct) || !r ? (s(this, Oe).add(l), it(a, o, !1)) : o();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    p(this, Dt, (t) => {
      s(this, ee).delete(t);
      const n = Array.from(s(this, ee).values());
      for (const [r, i] of s(this, I))
        n.includes(r) || (V(i.effect), s(this, I).delete(r));
    });
    this.anchor = t, m(this, ct, n);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, n) {
    var r = (
      /** @type {Batch} */
      E
    ), i = Gr();
    if (n && !s(this, le).has(t) && !s(this, I).has(t))
      if (i) {
        var l = document.createDocumentFragment(), a = Rt();
        l.append(a), s(this, I).set(t, {
          effect: he(() => n(a)),
          fragment: l
        });
      } else
        s(this, le).set(
          t,
          he(() => n(this.anchor))
        );
    if (s(this, ee).set(r, t), i) {
      for (const [o, f] of s(this, le))
        o === t ? r.unskip_effect(f) : r.skip_effect(f);
      for (const [o, f] of s(this, I))
        o === t ? r.unskip_effect(f.effect) : r.skip_effect(f.effect);
      r.oncommit(s(this, ht)), r.ondiscard(s(this, Dt));
    } else
      s(this, ht).call(this, r);
  }
}
ee = new WeakMap(), le = new WeakMap(), I = new WeakMap(), Oe = new WeakMap(), ct = new WeakMap(), ht = new WeakMap(), Dt = new WeakMap();
function Lt(e, t, n = !1) {
  var r = new wi(e), i = n ? We : 0;
  function l(a, o) {
    r.ensure(a, o);
  }
  Bn(() => {
    var a = !1;
    t((o, f = 0) => {
      a = !0, l(f, o);
    }), a || l(-1, null);
  }, i);
}
function yi(e, t) {
  $r(() => {
    var n = e.getRootNode(), r = (
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
    if (!r.querySelector("#" + t.hash)) {
      const i = Ln("style");
      i.id = t.hash, i.textContent = t.code, r.appendChild(i);
    }
  });
}
function mt(e, t, n, r) {
  var i = (
    /** @type {V} */
    r
  ), l = !0, a = () => (l && (l = !1, i = /** @type {V} */
  r), i), o;
  o = /** @type {V} */
  e[t], o === void 0 && r !== void 0 && (o = a());
  var f;
  return f = () => {
    var u = (
      /** @type {V} */
      e[t]
    );
    return u === void 0 ? a() : (l = !0, u);
  }, f;
}
const bi = "5";
var mn;
typeof window < "u" && ((mn = window.__svelte ?? (window.__svelte = {})).v ?? (mn.v = /* @__PURE__ */ new Set())).add(bi);
var Ei = /* @__PURE__ */ _t('<div class="loading svelte-mq7f3z">Loading…</div>'), ki = /* @__PURE__ */ _t('<p class="desc svelte-mq7f3z"> </p>'), xi = /* @__PURE__ */ _t('<p class="msg svelte-mq7f3z"> </p>'), Si = /* @__PURE__ */ _t('<div class="hero svelte-mq7f3z"><h1 class="svelte-mq7f3z"> </h1> <!> <!></div>'), Ti = /* @__PURE__ */ _t('<div class="rt-welcome svelte-mq7f3z"><!></div>');
const Ai = {
  hash: "svelte-mq7f3z",
  code: ".rt-welcome.svelte-mq7f3z {font-family:system-ui, -apple-system, sans-serif;min-height:300px;display:flex;align-items:center;justify-content:center;padding:2rem;}.loading.svelte-mq7f3z {color:#6b7280;}.hero.svelte-mq7f3z {text-align:center;max-width:640px;}.hero.svelte-mq7f3z h1:where(.svelte-mq7f3z) {font-size:2.5rem;margin:0 0 1rem;color:#1f2937;}.desc.svelte-mq7f3z {font-size:1.125rem;color:#4b5563;line-height:1.6;margin:0 0 1rem;}.msg.svelte-mq7f3z {font-size:1rem;color:#6b7280;font-style:italic;margin:0;}"
};
function Ri(e, t) {
  bn(t, !0), yi(e, Ai), mt(t, "extensionId", 3, "welcome"), mt(t, "version", 3, ""), mt(t, "principal", 3, ""), mt(t, "isAuthenticated", 3, !0);
  let n = /* @__PURE__ */ K(""), r = /* @__PURE__ */ K(""), i = /* @__PURE__ */ K(""), l = /* @__PURE__ */ K(!0);
  async function a() {
    j(l, !0);
    try {
      const v = await t.backend.status(), d = typeof v == "string" ? JSON.parse(v) : v, c = d?.data?.status ?? d;
      j(n, c?.realm_name || "Realm", !0), j(r, c?.realm_description || "", !0), j(i, c?.realm_welcome_message || "", !0);
    } catch {
      j(n, "Realm");
    } finally {
      j(l, !1);
    }
  }
  Qr(() => {
    a();
  });
  var o = Ti(), f = $e(o);
  {
    var u = (v) => {
      var d = Ei();
      et(v, d);
    }, _ = (v) => {
      var d = Si(), c = $e(d), h = $e(c), b = cn(c, 2);
      {
        var y = (X) => {
          var Xe = ki(), Ft = $e(Xe);
          It(() => jt(Ft, L(r))), et(X, Xe);
        };
        Lt(b, (X) => {
          L(r) && X(y);
        });
      }
      var F = cn(b, 2);
      {
        var we = (X) => {
          var Xe = xi(), Ft = $e(Xe);
          It(() => jt(Ft, L(i))), et(X, Xe);
        };
        Lt(F, (X) => {
          L(i) && X(we);
        });
      }
      It(() => jt(h, L(n))), et(v, d);
    };
    Lt(f, (v) => {
      L(l) ? v(u) : v(_, -1);
    });
  }
  et(e, o), En();
}
function Di(e, t) {
  const n = pi(Ri, { target: e, props: t });
  return {
    unmount() {
      try {
        gi(n);
      } catch {
      }
    }
  };
}
export {
  Di as default
};
