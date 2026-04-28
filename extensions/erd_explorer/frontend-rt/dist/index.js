var Qi = Object.defineProperty;
var Dn = (e) => {
  throw TypeError(e);
};
var es = (e, t, r) => t in e ? Qi(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var De = (e, t, r) => es(e, typeof t != "symbol" ? t + "" : t, r), Jr = (e, t, r) => t.has(e) || Dn("Cannot " + r);
var a = (e, t, r) => (Jr(e, t, "read from private field"), r ? r.call(e) : t.get(e)), b = (e, t, r) => t.has(e) ? Dn("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), E = (e, t, r, n) => (Jr(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r), R = (e, t, r) => (Jr(e, t, "access private method"), r);
var Wn = Array.isArray, ts = Array.prototype.indexOf, Xt = Array.prototype.includes, Wr = Array.from, rs = Object.defineProperty, vr = Object.getOwnPropertyDescriptor, ns = Object.getOwnPropertyDescriptors, is = Object.prototype, ss = Array.prototype, Gn = Object.getPrototypeOf, Nn = Object.isExtensible;
const as = () => {
};
function ls(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function Kn() {
  var e, t, r = new Promise((n, i) => {
    e = n, t = i;
  });
  return { promise: r, resolve: e, reject: t };
}
function wt(e, t) {
  if (Array.isArray(e))
    return e;
  if (!(Symbol.iterator in e))
    return Array.from(e);
  const r = [];
  for (const n of e)
    if (r.push(n), r.length === t) break;
  return r;
}
const re = 2, _r = 4, Gr = 8, Xn = 1 << 24, Ue = 16, Le = 32, pt = 64, tn = 128, Te = 512, z = 1024, te = 2048, We = 4096, ae = 8192, Ae = 16384, Lt = 32768, Fn = 1 << 25, Zt = 65536, rn = 1 << 17, os = 1 << 18, rr = 1 << 19, fs = 1 << 20, Ye = 1 << 25, It = 65536, Br = 1 << 21, pr = 1 << 22, ht = 1 << 23, Qr = Symbol("$state"), us = Symbol(""), st = new class extends Error {
  constructor() {
    super(...arguments);
    De(this, "name", "StaleReactionError");
    De(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
function cs(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function ds() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function vs(e, t, r) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function hs(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function _s() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function ps(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function gs() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function ys() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function ms() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function bs() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function ws() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
const xs = 1, Es = 2, Zn = 4, ks = 8, Ss = 16, Ts = 1, As = 2, Y = Symbol(), Jn = "http://www.w3.org/1999/xhtml";
function Os() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function Rs() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function Qn(e) {
  return e === this.v;
}
function Cs(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function ei(e) {
  return !Cs(e, this.v);
}
let ye = null;
function Jt(e) {
  ye = e;
}
function ti(e, t = !1, r) {
  ye = {
    p: ye,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    r: (
      /** @type {Effect} */
      S
    ),
    l: null
  };
}
function ri(e) {
  var t = (
    /** @type {ComponentContext} */
    ye
  ), r = t.e;
  if (r !== null) {
    t.e = null;
    for (var n of r)
      wi(n);
  }
  return t.i = !0, ye = t.p, /** @type {T} */
  {};
}
function ni() {
  return !0;
}
let qt = [];
function Ms() {
  var e = qt;
  qt = [], ls(e);
}
function Mt(e) {
  if (qt.length === 0) {
    var t = qt;
    queueMicrotask(() => {
      t === qt && Ms();
    });
  }
  qt.push(e);
}
function ii(e) {
  var t = S;
  if (t === null)
    return k.f |= ht, e;
  if ((t.f & Lt) === 0 && (t.f & _r) === 0)
    throw e;
  vt(e, t);
}
function vt(e, t) {
  for (; t !== null; ) {
    if ((t.f & tn) !== 0) {
      if ((t.f & Lt) === 0)
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
const Ds = -7169;
function F(e, t) {
  e.f = e.f & Ds | t;
}
function hn(e) {
  (e.f & Te) !== 0 || e.deps === null ? F(e, z) : F(e, We);
}
function si(e) {
  if (e !== null)
    for (const t of e)
      (t.f & re) === 0 || (t.f & It) === 0 || (t.f ^= It, si(
        /** @type {Derived} */
        t.deps
      ));
}
function ai(e, t, r) {
  (e.f & te) !== 0 ? t.add(e) : (e.f & We) !== 0 && r.add(e), si(e.deps), F(e, z);
}
const xt = /* @__PURE__ */ new Set();
let T = null, Pe = null, nn = null, en = !1, Vt = null, Fr = null;
var In = 0;
let Ns = 1;
var Yt, Ut, Tt, at, He, yr, _e, mr, ct, lt, qe, Wt, Gt, At, P, Ir, li, Pr, sn, jr, Fs;
const Vr = class Vr {
  constructor() {
    b(this, P);
    De(this, "id", Ns++);
    /**
     * The current values of any signals that are updated in this batch.
     * Tuple format: [value, is_derived] (note: is_derived is false for deriveds, too, if they were overridden via assignment)
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Value, [any, boolean]>}
     */
    De(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any signals (sources and deriveds) that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Value, any>}
     */
    De(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<(batch: Batch) => void>}
     */
    b(this, Yt, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    b(this, Ut, /* @__PURE__ */ new Set());
    /**
     * Callbacks that should run only when a fork is committed.
     * @type {Set<(batch: Batch) => void>}
     */
    b(this, Tt, /* @__PURE__ */ new Set());
    /**
     * Async effects that are currently in flight
     * @type {Map<Effect, number>}
     */
    b(this, at, /* @__PURE__ */ new Map());
    /**
     * Async effects that are currently in flight, _not_ inside a pending boundary
     * @type {Map<Effect, number>}
     */
    b(this, He, /* @__PURE__ */ new Map());
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    b(this, yr, null);
    /**
     * The root effects that need to be flushed
     * @type {Effect[]}
     */
    b(this, _e, []);
    /**
     * Effects created while this batch was active.
     * @type {Effect[]}
     */
    b(this, mr, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    b(this, ct, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    b(this, lt, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    b(this, qe, /* @__PURE__ */ new Map());
    /**
     * Inverse of #skipped_branches which we need to tell prior batches to unskip them when committing
     * @type {Set<Effect>}
     */
    b(this, Wt, /* @__PURE__ */ new Set());
    De(this, "is_fork", !1);
    b(this, Gt, !1);
    /** @type {Set<Batch>} */
    b(this, At, /* @__PURE__ */ new Set());
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(t) {
    a(this, qe).has(t) || a(this, qe).set(t, { d: [], m: [] }), a(this, Wt).delete(t);
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   * @param {(e: Effect) => void} callback
   */
  unskip_effect(t, r = (n) => this.schedule(n)) {
    var n = a(this, qe).get(t);
    if (n) {
      a(this, qe).delete(t);
      for (var i of n.d)
        F(i, te), r(i);
      for (i of n.m)
        F(i, We), r(i);
    }
    a(this, Wt).add(t);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Value} source
   * @param {any} value
   * @param {boolean} [is_derived]
   */
  capture(t, r, n = !1) {
    t.v !== Y && !this.previous.has(t) && this.previous.set(t, t.v), (t.f & ht) === 0 && (this.current.set(t, [r, n]), Pe?.set(t, r)), this.is_fork || (t.v = r);
  }
  activate() {
    T = this;
  }
  deactivate() {
    T = null, Pe = null;
  }
  flush() {
    try {
      en = !0, T = this, R(this, P, Pr).call(this);
    } finally {
      In = 0, nn = null, Vt = null, Fr = null, en = !1, T = null, Pe = null, Dt.clear();
    }
  }
  discard() {
    for (const t of a(this, Ut)) t(this);
    a(this, Ut).clear(), a(this, Tt).clear(), xt.delete(this);
  }
  /**
   * @param {Effect} effect
   */
  register_created_effect(t) {
    a(this, mr).push(t);
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  increment(t, r) {
    let n = a(this, at).get(r) ?? 0;
    if (a(this, at).set(r, n + 1), t) {
      let i = a(this, He).get(r) ?? 0;
      a(this, He).set(r, i + 1);
    }
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   * @param {boolean} skip - whether to skip updates (because this is triggered by a stale reaction)
   */
  decrement(t, r, n) {
    let i = a(this, at).get(r) ?? 0;
    if (i === 1 ? a(this, at).delete(r) : a(this, at).set(r, i - 1), t) {
      let s = a(this, He).get(r) ?? 0;
      s === 1 ? a(this, He).delete(r) : a(this, He).set(r, s - 1);
    }
    a(this, Gt) || n || (E(this, Gt, !0), Mt(() => {
      E(this, Gt, !1), this.flush();
    }));
  }
  /**
   * @param {Set<Effect>} dirty_effects
   * @param {Set<Effect>} maybe_dirty_effects
   */
  transfer_effects(t, r) {
    for (const n of t)
      a(this, ct).add(n);
    for (const n of r)
      a(this, lt).add(n);
    t.clear(), r.clear();
  }
  /** @param {(batch: Batch) => void} fn */
  oncommit(t) {
    a(this, Yt).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    a(this, Ut).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  on_fork_commit(t) {
    a(this, Tt).add(t);
  }
  run_fork_commit_callbacks() {
    for (const t of a(this, Tt)) t(this);
    a(this, Tt).clear();
  }
  settled() {
    return (a(this, yr) ?? E(this, yr, Kn())).promise;
  }
  static ensure() {
    if (T === null) {
      const t = T = new Vr();
      en || (xt.add(T), Mt(() => {
        T === t && t.flush();
      }));
    }
    return T;
  }
  apply() {
    {
      Pe = null;
      return;
    }
  }
  /**
   *
   * @param {Effect} effect
   */
  schedule(t) {
    if (nn = t, t.b?.is_pending && (t.f & (_r | Gr | Xn)) !== 0 && (t.f & Lt) === 0) {
      t.b.defer_effect(t);
      return;
    }
    for (var r = t; r.parent !== null; ) {
      r = r.parent;
      var n = r.f;
      if (Vt !== null && r === S && (k === null || (k.f & re) === 0))
        return;
      if ((n & (pt | Le)) !== 0) {
        if ((n & z) === 0)
          return;
        r.f ^= z;
      }
    }
    a(this, _e).push(r);
  }
};
Yt = new WeakMap(), Ut = new WeakMap(), Tt = new WeakMap(), at = new WeakMap(), He = new WeakMap(), yr = new WeakMap(), _e = new WeakMap(), mr = new WeakMap(), ct = new WeakMap(), lt = new WeakMap(), qe = new WeakMap(), Wt = new WeakMap(), Gt = new WeakMap(), At = new WeakMap(), P = new WeakSet(), Ir = function() {
  return this.is_fork || a(this, He).size > 0;
}, li = function() {
  for (const n of a(this, At))
    for (const i of a(n, He).keys()) {
      for (var t = !1, r = i; r.parent !== null; ) {
        if (a(this, qe).has(r)) {
          t = !0;
          break;
        }
        r = r.parent;
      }
      if (!t)
        return !0;
    }
  return !1;
}, Pr = function() {
  var u;
  if (In++ > 1e3 && (xt.delete(this), Is()), !R(this, P, Ir).call(this)) {
    for (const o of a(this, ct))
      a(this, lt).delete(o), F(o, te), this.schedule(o);
    for (const o of a(this, lt))
      F(o, We), this.schedule(o);
  }
  const t = a(this, _e);
  E(this, _e, []), this.apply();
  var r = Vt = [], n = [], i = Fr = [];
  for (const o of t)
    try {
      R(this, P, sn).call(this, o, r, n);
    } catch (c) {
      throw ui(o), c;
    }
  if (T = null, i.length > 0) {
    var s = Vr.ensure();
    for (const o of i)
      s.schedule(o);
  }
  if (Vt = null, Fr = null, R(this, P, Ir).call(this) || R(this, P, li).call(this)) {
    R(this, P, jr).call(this, n), R(this, P, jr).call(this, r);
    for (const [o, c] of a(this, qe))
      fi(o, c);
  } else {
    a(this, at).size === 0 && xt.delete(this), a(this, ct).clear(), a(this, lt).clear();
    for (const o of a(this, Yt)) o(this);
    a(this, Yt).clear(), Pn(n), Pn(r), a(this, yr)?.resolve();
  }
  var l = (
    /** @type {Batch | null} */
    /** @type {unknown} */
    T
  );
  if (a(this, _e).length > 0) {
    const o = l ?? (l = this);
    a(o, _e).push(...a(this, _e).filter((c) => !a(o, _e).includes(c)));
  }
  l !== null && (xt.add(l), R(u = l, P, Pr).call(u));
}, /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
sn = function(t, r, n) {
  t.f ^= z;
  for (var i = t.first; i !== null; ) {
    var s = i.f, l = (s & (Le | pt)) !== 0, u = l && (s & z) !== 0, o = u || (s & ae) !== 0 || a(this, qe).has(i);
    if (!o && i.fn !== null) {
      l ? i.f ^= z : (s & _r) !== 0 ? r.push(i) : Sr(i) && ((s & Ue) !== 0 && a(this, lt).add(i), tr(i));
      var c = i.first;
      if (c !== null) {
        i = c;
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
jr = function(t) {
  for (var r = 0; r < t.length; r += 1)
    ai(t[r], a(this, ct), a(this, lt));
}, Fs = function() {
  var d, g, p;
  for (const h of xt) {
    var t = h.id < this.id, r = [];
    for (const [_, [w, v]] of this.current) {
      if (h.current.has(_)) {
        var n = (
          /** @type {[any, boolean]} */
          h.current.get(_)[0]
        );
        if (t && w !== n)
          h.current.set(_, [w, v]);
        else
          continue;
      }
      r.push(_);
    }
    var i = [...h.current.keys()].filter((_) => !this.current.has(_));
    if (i.length === 0)
      t && h.discard();
    else if (r.length > 0) {
      if (t)
        for (const _ of a(this, Wt))
          h.unskip_effect(_, (w) => {
            var v;
            (w.f & (Ue | pr)) !== 0 ? h.schedule(w) : R(v = h, P, jr).call(v, [w]);
          });
      h.activate();
      var s = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Map();
      for (var u of r)
        oi(u, i, s, l);
      l = /* @__PURE__ */ new Map();
      var o = [...h.current.keys()].filter(
        (_) => this.current.has(_) ? (
          /** @type {[any, boolean]} */
          this.current.get(_)[0] !== _
        ) : !0
      );
      for (const _ of a(this, mr))
        (_.f & (Ae | ae | rn)) === 0 && _n(_, o, l) && ((_.f & (pr | Ue)) !== 0 ? (F(_, te), h.schedule(_)) : a(h, ct).add(_));
      if (a(h, _e).length > 0) {
        h.apply();
        for (var c of a(h, _e))
          R(d = h, P, sn).call(d, c, [], []);
        E(h, _e, []);
      }
      h.deactivate();
    }
  }
  for (const h of xt)
    a(h, At).has(this) && (a(h, At).delete(this), a(h, At).size === 0 && !R(g = h, P, Ir).call(g) && (h.activate(), R(p = h, P, Pr).call(p)));
};
let Pt = Vr;
function Is() {
  try {
    gs();
  } catch (e) {
    vt(e, nn);
  }
}
let it = null;
function Pn(e) {
  var t = e.length;
  if (t !== 0) {
    for (var r = 0; r < t; ) {
      var n = e[r++];
      if ((n.f & (Ae | ae)) === 0 && Sr(n) && (it = /* @__PURE__ */ new Set(), tr(n), n.deps === null && n.first === null && n.nodes === null && n.teardown === null && n.ac === null && Ei(n), it?.size > 0)) {
        Dt.clear();
        for (const i of it) {
          if ((i.f & (Ae | ae)) !== 0) continue;
          const s = [i];
          let l = i.parent;
          for (; l !== null; )
            it.has(l) && (it.delete(l), s.push(l)), l = l.parent;
          for (let u = s.length - 1; u >= 0; u--) {
            const o = s[u];
            (o.f & (Ae | ae)) === 0 && tr(o);
          }
        }
        it.clear();
      }
    }
    it = null;
  }
}
function oi(e, t, r, n) {
  if (!r.has(e) && (r.add(e), e.reactions !== null))
    for (const i of e.reactions) {
      const s = i.f;
      (s & re) !== 0 ? oi(
        /** @type {Derived} */
        i,
        t,
        r,
        n
      ) : (s & (pr | Ue)) !== 0 && (s & te) === 0 && _n(i, t, n) && (F(i, te), pn(
        /** @type {Effect} */
        i
      ));
    }
}
function _n(e, t, r) {
  const n = r.get(e);
  if (n !== void 0) return n;
  if (e.deps !== null)
    for (const i of e.deps) {
      if (Xt.call(t, i))
        return !0;
      if ((i.f & re) !== 0 && _n(
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
function pn(e) {
  T.schedule(e);
}
function fi(e, t) {
  if (!((e.f & Le) !== 0 && (e.f & z) !== 0)) {
    (e.f & te) !== 0 ? t.d.push(e) : (e.f & We) !== 0 && t.m.push(e), F(e, z);
    for (var r = e.first; r !== null; )
      fi(r, t), r = r.next;
  }
}
function ui(e) {
  F(e, z);
  for (var t = e.first; t !== null; )
    ui(t), t = t.next;
}
function Ps(e) {
  let t = 0, r = jt(0), n;
  return () => {
    mn() && (f(r), aa(() => (t === 0 && (n = Ni(() => e(() => hr(r)))), t += 1, () => {
      Mt(() => {
        t -= 1, t === 0 && (n?.(), n = void 0, hr(r));
      });
    })));
  };
}
var js = Zt | rr;
function Ls(e, t, r, n) {
  new $s(e, t, r, n);
}
var xe, vn, Ee, Ot, fe, ke, se, pe, ot, Rt, dt, Kt, br, wr, ft, Yr, N, zs, Bs, Hs, an, Lr, $r, ln, on;
class $s {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(t, r, n, i) {
    b(this, N);
    /** @type {Boundary | null} */
    De(this, "parent");
    De(this, "is_pending", !1);
    /**
     * API-level transformError transform function. Transforms errors before they reach the `failed` snippet.
     * Inherited from parent boundary, or defaults to identity.
     * @type {(error: unknown) => unknown}
     */
    De(this, "transform_error");
    /** @type {TemplateNode} */
    b(this, xe);
    /** @type {TemplateNode | null} */
    b(this, vn, null);
    /** @type {BoundaryProps} */
    b(this, Ee);
    /** @type {((anchor: Node) => void)} */
    b(this, Ot);
    /** @type {Effect} */
    b(this, fe);
    /** @type {Effect | null} */
    b(this, ke, null);
    /** @type {Effect | null} */
    b(this, se, null);
    /** @type {Effect | null} */
    b(this, pe, null);
    /** @type {DocumentFragment | null} */
    b(this, ot, null);
    b(this, Rt, 0);
    b(this, dt, 0);
    b(this, Kt, !1);
    /** @type {Set<Effect>} */
    b(this, br, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    b(this, wr, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    b(this, ft, null);
    b(this, Yr, Ps(() => (E(this, ft, jt(a(this, Rt))), () => {
      E(this, ft, null);
    })));
    E(this, xe, t), E(this, Ee, r), E(this, Ot, (s) => {
      var l = (
        /** @type {Effect} */
        S
      );
      l.b = this, l.f |= tn, n(s);
    }), this.parent = /** @type {Effect} */
    S.b, this.transform_error = i ?? this.parent?.transform_error ?? ((s) => s), E(this, fe, bn(() => {
      R(this, N, an).call(this);
    }, js));
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    ai(t, a(this, br), a(this, wr));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!a(this, Ee).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  update_pending_count(t, r) {
    R(this, N, ln).call(this, t, r), E(this, Rt, a(this, Rt) + t), !(!a(this, ft) || a(this, Kt)) && (E(this, Kt, !0), Mt(() => {
      E(this, Kt, !1), a(this, ft) && Qt(a(this, ft), a(this, Rt));
    }));
  }
  get_effect_pending() {
    return a(this, Yr).call(this), f(
      /** @type {Source<number>} */
      a(this, ft)
    );
  }
  /** @param {unknown} error */
  error(t) {
    if (!a(this, Ee).onerror && !a(this, Ee).failed)
      throw t;
    T?.is_fork ? (a(this, ke) && T.skip_effect(a(this, ke)), a(this, se) && T.skip_effect(a(this, se)), a(this, pe) && T.skip_effect(a(this, pe)), T.on_fork_commit(() => {
      R(this, N, on).call(this, t);
    })) : R(this, N, on).call(this, t);
  }
}
xe = new WeakMap(), vn = new WeakMap(), Ee = new WeakMap(), Ot = new WeakMap(), fe = new WeakMap(), ke = new WeakMap(), se = new WeakMap(), pe = new WeakMap(), ot = new WeakMap(), Rt = new WeakMap(), dt = new WeakMap(), Kt = new WeakMap(), br = new WeakMap(), wr = new WeakMap(), ft = new WeakMap(), Yr = new WeakMap(), N = new WeakSet(), zs = function() {
  try {
    E(this, ke, Se(() => a(this, Ot).call(this, a(this, xe))));
  } catch (t) {
    this.error(t);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
Bs = function(t) {
  const r = a(this, Ee).failed;
  r && E(this, pe, Se(() => {
    r(
      a(this, xe),
      () => t,
      () => () => {
      }
    );
  }));
}, Hs = function() {
  const t = a(this, Ee).pending;
  t && (this.is_pending = !0, E(this, se, Se(() => t(a(this, xe)))), Mt(() => {
    var r = E(this, ot, document.createDocumentFragment()), n = _t();
    r.append(n), E(this, ke, R(this, N, $r).call(this, () => Se(() => a(this, Ot).call(this, n)))), a(this, dt) === 0 && (a(this, xe).before(r), E(this, ot, null), Nt(
      /** @type {Effect} */
      a(this, se),
      () => {
        E(this, se, null);
      }
    ), R(this, N, Lr).call(
      this,
      /** @type {Batch} */
      T
    ));
  }));
}, an = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), E(this, dt, 0), E(this, Rt, 0), E(this, ke, Se(() => {
      a(this, Ot).call(this, a(this, xe));
    })), a(this, dt) > 0) {
      var t = E(this, ot, document.createDocumentFragment());
      En(a(this, ke), t);
      const r = (
        /** @type {(anchor: Node) => void} */
        a(this, Ee).pending
      );
      E(this, se, Se(() => r(a(this, xe))));
    } else
      R(this, N, Lr).call(
        this,
        /** @type {Batch} */
        T
      );
  } catch (r) {
    this.error(r);
  }
}, /**
 * @param {Batch} batch
 */
Lr = function(t) {
  this.is_pending = !1, t.transfer_effects(a(this, br), a(this, wr));
}, /**
 * @template T
 * @param {() => T} fn
 */
$r = function(t) {
  var r = S, n = k, i = ye;
  Ge(a(this, fe)), Re(a(this, fe)), Jt(a(this, fe).ctx);
  try {
    return Pt.ensure(), t();
  } catch (s) {
    return ii(s), null;
  } finally {
    Ge(r), Re(n), Jt(i);
  }
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 * @param {Batch} batch
 */
ln = function(t, r) {
  var n;
  if (!this.has_pending_snippet()) {
    this.parent && R(n = this.parent, N, ln).call(n, t, r);
    return;
  }
  E(this, dt, a(this, dt) + t), a(this, dt) === 0 && (R(this, N, Lr).call(this, r), a(this, se) && Nt(a(this, se), () => {
    E(this, se, null);
  }), a(this, ot) && (a(this, xe).before(a(this, ot)), E(this, ot, null)));
}, /**
 * @param {unknown} error
 */
on = function(t) {
  a(this, ke) && (ce(a(this, ke)), E(this, ke, null)), a(this, se) && (ce(a(this, se)), E(this, se, null)), a(this, pe) && (ce(a(this, pe)), E(this, pe, null));
  var r = a(this, Ee).onerror;
  let n = a(this, Ee).failed;
  var i = !1, s = !1;
  const l = () => {
    if (i) {
      Rs();
      return;
    }
    i = !0, s && ws(), a(this, pe) !== null && Nt(a(this, pe), () => {
      E(this, pe, null);
    }), R(this, N, $r).call(this, () => {
      R(this, N, an).call(this);
    });
  }, u = (o) => {
    try {
      s = !0, r?.(o, l), s = !1;
    } catch (c) {
      vt(c, a(this, fe) && a(this, fe).parent);
    }
    n && E(this, pe, R(this, N, $r).call(this, () => {
      try {
        return Se(() => {
          var c = (
            /** @type {Effect} */
            S
          );
          c.b = this, c.f |= tn, n(
            a(this, xe),
            () => o,
            () => l
          );
        });
      } catch (c) {
        return vt(
          c,
          /** @type {Effect} */
          a(this, fe).parent
        ), null;
      }
    }));
  };
  Mt(() => {
    var o;
    try {
      o = this.transform_error(t);
    } catch (c) {
      vt(c, a(this, fe) && a(this, fe).parent);
      return;
    }
    o !== null && typeof o == "object" && typeof /** @type {any} */
    o.then == "function" ? o.then(
      u,
      /** @param {unknown} e */
      (c) => vt(c, a(this, fe) && a(this, fe).parent)
    ) : u(o);
  });
};
function qs(e, t, r, n) {
  const i = gn;
  var s = e.filter((p) => !p.settled);
  if (r.length === 0 && s.length === 0) {
    n(t.map(i));
    return;
  }
  var l = (
    /** @type {Effect} */
    S
  ), u = Vs(), o = s.length === 1 ? s[0].promise : s.length > 1 ? Promise.all(s.map((p) => p.promise)) : null;
  function c(p) {
    u();
    try {
      n(p);
    } catch (h) {
      (l.f & Ae) === 0 && vt(h, l);
    }
    Hr();
  }
  if (r.length === 0) {
    o.then(() => c(t.map(i)));
    return;
  }
  var d = ci();
  function g() {
    Promise.all(r.map((p) => /* @__PURE__ */ Ys(p))).then((p) => c([...t.map(i), ...p])).catch((p) => vt(p, l)).finally(() => d());
  }
  o ? o.then(() => {
    u(), g(), Hr();
  }) : g();
}
function Vs() {
  var e = (
    /** @type {Effect} */
    S
  ), t = k, r = ye, n = (
    /** @type {Batch} */
    T
  );
  return function(s = !0) {
    Ge(e), Re(t), Jt(r), s && (e.f & Ae) === 0 && (n?.activate(), n?.apply());
  };
}
function Hr(e = !0) {
  Ge(null), Re(null), Jt(null), e && T?.deactivate();
}
function ci() {
  var e = (
    /** @type {Effect} */
    S
  ), t = (
    /** @type {Boundary} */
    e.b
  ), r = (
    /** @type {Batch} */
    T
  ), n = t.is_rendered();
  return t.update_pending_count(1, r), r.increment(n, e), (i = !1) => {
    t.update_pending_count(-1, r), r.decrement(n, e, i);
  };
}
// @__NO_SIDE_EFFECTS__
function gn(e) {
  var t = re | te;
  return S !== null && (S.f |= rr), {
    ctx: ye,
    deps: null,
    effects: null,
    equals: Qn,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      Y
    ),
    wv: 0,
    parent: S,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function Ys(e, t, r) {
  let n = (
    /** @type {Effect | null} */
    S
  );
  n === null && ds();
  var i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), s = jt(
    /** @type {V} */
    Y
  ), l = !k, u = /* @__PURE__ */ new Map();
  return sa(() => {
    var o = (
      /** @type {Effect} */
      S
    ), c = Kn();
    i = c.promise;
    try {
      Promise.resolve(e()).then(c.resolve, c.reject).finally(Hr);
    } catch (h) {
      c.reject(h), Hr();
    }
    var d = (
      /** @type {Batch} */
      T
    );
    if (l) {
      if ((o.f & Lt) !== 0)
        var g = ci();
      if (
        /** @type {Boundary} */
        n.b.is_rendered()
      )
        u.get(d)?.reject(st), u.delete(d);
      else {
        for (const h of u.values())
          h.reject(st);
        u.clear();
      }
      u.set(d, c);
    }
    const p = (h, _ = void 0) => {
      if (g) {
        var w = _ === st;
        g(w);
      }
      if (!(_ === st || (o.f & Ae) !== 0)) {
        if (d.activate(), _)
          s.f |= ht, Qt(s, _);
        else {
          (s.f & ht) !== 0 && (s.f ^= ht), Qt(s, h);
          for (const [v, x] of u) {
            if (u.delete(v), v === d) break;
            x.reject(st);
          }
        }
        d.deactivate();
      }
    };
    c.promise.then(p, (h) => p(null, h || "unknown"));
  }), ra(() => {
    for (const o of u.values())
      o.reject(st);
  }), new Promise((o) => {
    function c(d) {
      function g() {
        d === i ? o(s) : c(i);
      }
      d.then(g, g);
    }
    c(i);
  });
}
// @__NO_SIDE_EFFECTS__
function J(e) {
  const t = /* @__PURE__ */ gn(e);
  return Ti(t), t;
}
// @__NO_SIDE_EFFECTS__
function Us(e) {
  const t = /* @__PURE__ */ gn(e);
  return t.equals = ei, t;
}
function Ws(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var r = 0; r < t.length; r += 1)
      ce(
        /** @type {Effect} */
        t[r]
      );
  }
}
function yn(e) {
  var t, r = S, n = e.parent;
  if (!gt && n !== null && (n.f & (Ae | ae)) !== 0)
    return Os(), e.v;
  Ge(n);
  try {
    e.f &= ~It, Ws(e), t = Ci(e);
  } finally {
    Ge(r);
  }
  return t;
}
function di(e) {
  var t = yn(e);
  if (!e.equals(t) && (e.wv = Oi(), (!T?.is_fork || e.deps === null) && (T !== null ? T.capture(e, t, !0) : e.v = t, e.deps === null))) {
    F(e, z);
    return;
  }
  gt || (Pe !== null ? (mn() || T?.is_fork) && Pe.set(e, t) : hn(e));
}
function Gs(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      (t.teardown || t.ac) && (t.teardown?.(), t.ac?.abort(st), t.teardown = as, t.ac = null, gr(t, 0), wn(t));
}
function vi(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      t.teardown && tr(t);
}
let fn = /* @__PURE__ */ new Set();
const Dt = /* @__PURE__ */ new Map();
let hi = !1;
function jt(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Qn,
    rv: 0,
    wv: 0
  };
  return r;
}
// @__NO_SIDE_EFFECTS__
function ee(e, t) {
  const r = jt(e);
  return Ti(r), r;
}
// @__NO_SIDE_EFFECTS__
function Ks(e, t = !1, r = !0) {
  const n = jt(e);
  return t || (n.equals = ei), n;
}
function O(e, t, r = !1) {
  k !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!je || (k.f & rn) !== 0) && ni() && (k.f & (re | Ue | pr | rn)) !== 0 && (Oe === null || !Xt.call(Oe, e)) && bs();
  let n = r ? Et(t) : t;
  return Qt(e, n, Fr);
}
function Qt(e, t, r = null) {
  if (!e.equals(t)) {
    Dt.set(e, gt ? t : e.v);
    var n = Pt.ensure();
    if (n.capture(e, t), (e.f & re) !== 0) {
      const i = (
        /** @type {Derived} */
        e
      );
      (e.f & te) !== 0 && yn(i), Pe === null && hn(i);
    }
    e.wv = Oi(), _i(e, te, r), S !== null && (S.f & z) !== 0 && (S.f & (Le | pt)) === 0 && (we === null ? fa([e]) : we.push(e)), !n.is_fork && fn.size > 0 && !hi && Xs();
  }
  return t;
}
function Xs() {
  hi = !1;
  for (const e of fn)
    (e.f & z) !== 0 && F(e, We), Sr(e) && tr(e);
  fn.clear();
}
function hr(e) {
  O(e, e.v + 1);
}
function _i(e, t, r) {
  var n = e.reactions;
  if (n !== null)
    for (var i = n.length, s = 0; s < i; s++) {
      var l = n[s], u = l.f, o = (u & te) === 0;
      if (o && F(l, t), (u & re) !== 0) {
        var c = (
          /** @type {Derived} */
          l
        );
        Pe?.delete(c), (u & It) === 0 && (u & Te && (S === null || (S.f & Br) === 0) && (l.f |= It), _i(c, We, r));
      } else if (o) {
        var d = (
          /** @type {Effect} */
          l
        );
        (u & Ue) !== 0 && it !== null && it.add(d), r !== null ? r.push(d) : pn(d);
      }
    }
}
function Et(e) {
  if (typeof e != "object" || e === null || Qr in e)
    return e;
  const t = Gn(e);
  if (t !== is && t !== ss)
    return e;
  var r = /* @__PURE__ */ new Map(), n = Wn(e), i = /* @__PURE__ */ ee(0), s = Ft, l = (u) => {
    if (Ft === s)
      return u();
    var o = k, c = Ft;
    Re(null), $n(s);
    var d = u();
    return Re(o), $n(c), d;
  };
  return n && r.set("length", /* @__PURE__ */ ee(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(u, o, c) {
        (!("value" in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && ys();
        var d = r.get(o);
        return d === void 0 ? l(() => {
          var g = /* @__PURE__ */ ee(c.value);
          return r.set(o, g), g;
        }) : O(d, c.value, !0), !0;
      },
      deleteProperty(u, o) {
        var c = r.get(o);
        if (c === void 0) {
          if (o in u) {
            const d = l(() => /* @__PURE__ */ ee(Y));
            r.set(o, d), hr(i);
          }
        } else
          O(c, Y), hr(i);
        return !0;
      },
      get(u, o, c) {
        if (o === Qr)
          return e;
        var d = r.get(o), g = o in u;
        if (d === void 0 && (!g || vr(u, o)?.writable) && (d = l(() => {
          var h = Et(g ? u[o] : Y), _ = /* @__PURE__ */ ee(h);
          return _;
        }), r.set(o, d)), d !== void 0) {
          var p = f(d);
          return p === Y ? void 0 : p;
        }
        return Reflect.get(u, o, c);
      },
      getOwnPropertyDescriptor(u, o) {
        var c = Reflect.getOwnPropertyDescriptor(u, o);
        if (c && "value" in c) {
          var d = r.get(o);
          d && (c.value = f(d));
        } else if (c === void 0) {
          var g = r.get(o), p = g?.v;
          if (g !== void 0 && p !== Y)
            return {
              enumerable: !0,
              configurable: !0,
              value: p,
              writable: !0
            };
        }
        return c;
      },
      has(u, o) {
        if (o === Qr)
          return !0;
        var c = r.get(o), d = c !== void 0 && c.v !== Y || Reflect.has(u, o);
        if (c !== void 0 || S !== null && (!d || vr(u, o)?.writable)) {
          c === void 0 && (c = l(() => {
            var p = d ? Et(u[o]) : Y, h = /* @__PURE__ */ ee(p);
            return h;
          }), r.set(o, c));
          var g = f(c);
          if (g === Y)
            return !1;
        }
        return d;
      },
      set(u, o, c, d) {
        var g = r.get(o), p = o in u;
        if (n && o === "length")
          for (var h = c; h < /** @type {Source<number>} */
          g.v; h += 1) {
            var _ = r.get(h + "");
            _ !== void 0 ? O(_, Y) : h in u && (_ = l(() => /* @__PURE__ */ ee(Y)), r.set(h + "", _));
          }
        if (g === void 0)
          (!p || vr(u, o)?.writable) && (g = l(() => /* @__PURE__ */ ee(void 0)), O(g, Et(c)), r.set(o, g));
        else {
          p = g.v !== Y;
          var w = l(() => Et(c));
          O(g, w);
        }
        var v = Reflect.getOwnPropertyDescriptor(u, o);
        if (v?.set && v.set.call(d, c), !p) {
          if (n && typeof o == "string") {
            var x = (
              /** @type {Source<number>} */
              r.get("length")
            ), L = Number(o);
            Number.isInteger(L) && L >= x.v && O(x, L + 1);
          }
          hr(i);
        }
        return !0;
      },
      ownKeys(u) {
        f(i);
        var o = Reflect.ownKeys(u).filter((g) => {
          var p = r.get(g);
          return p === void 0 || p.v !== Y;
        });
        for (var [c, d] of r)
          d.v !== Y && !(c in u) && o.push(c);
        return o;
      },
      setPrototypeOf() {
        ms();
      }
    }
  );
}
var jn, pi, gi, yi;
function Zs() {
  if (jn === void 0) {
    jn = window, pi = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, r = Text.prototype;
    gi = vr(t, "firstChild").get, yi = vr(t, "nextSibling").get, Nn(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), Nn(r) && (r.__t = void 0);
  }
}
function _t(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function er(e) {
  return (
    /** @type {TemplateNode | null} */
    gi.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function kr(e) {
  return (
    /** @type {TemplateNode | null} */
    yi.call(e)
  );
}
function m(e, t) {
  return /* @__PURE__ */ er(e);
}
function ur(e, t = !1) {
  {
    var r = /* @__PURE__ */ er(e);
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ kr(r) : r;
  }
}
function A(e, t = 1, r = !1) {
  let n = e;
  for (; t--; )
    n = /** @type {TemplateNode} */
    /* @__PURE__ */ kr(n);
  return n;
}
function Js(e) {
  e.textContent = "";
}
function mi() {
  return !1;
}
function Qs(e, t, r) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElementNS(Jn, e, void 0)
  );
}
function bi(e) {
  var t = k, r = S;
  Re(null), Ge(null);
  try {
    return e();
  } finally {
    Re(t), Ge(r);
  }
}
function ea(e) {
  S === null && (k === null && ps(), _s()), gt && hs();
}
function ta(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function yt(e, t) {
  var r = S;
  r !== null && (r.f & ae) !== 0 && (e |= ae);
  var n = {
    ctx: ye,
    deps: null,
    nodes: null,
    f: e | te | Te,
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
  T?.register_created_effect(n);
  var i = n;
  if ((e & _r) !== 0)
    Vt !== null ? Vt.push(n) : Pt.ensure().schedule(n);
  else if (t !== null) {
    try {
      tr(n);
    } catch (l) {
      throw ce(n), l;
    }
    i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && // either `null`, or a singular child
    (i.f & rr) === 0 && (i = i.first, (e & Ue) !== 0 && (e & Zt) !== 0 && i !== null && (i.f |= Zt));
  }
  if (i !== null && (i.parent = r, r !== null && ta(i, r), k !== null && (k.f & re) !== 0 && (e & pt) === 0)) {
    var s = (
      /** @type {Derived} */
      k
    );
    (s.effects ?? (s.effects = [])).push(i);
  }
  return n;
}
function mn() {
  return k !== null && !je;
}
function ra(e) {
  const t = yt(Gr, null);
  return F(t, z), t.teardown = e, t;
}
function na(e) {
  ea();
  var t = (
    /** @type {Effect} */
    S.f
  ), r = !k && (t & Le) !== 0 && (t & Lt) === 0;
  if (r) {
    var n = (
      /** @type {ComponentContext} */
      ye
    );
    (n.e ?? (n.e = [])).push(e);
  } else
    return wi(e);
}
function wi(e) {
  return yt(_r | fs, e);
}
function ia(e) {
  Pt.ensure();
  const t = yt(pt | rr, e);
  return (r = {}) => new Promise((n) => {
    r.outro ? Nt(t, () => {
      ce(t), n(void 0);
    }) : (ce(t), n(void 0));
  });
}
function sa(e) {
  return yt(pr | rr, e);
}
function aa(e, t = 0) {
  return yt(Gr | t, e);
}
function Q(e, t = [], r = [], n = []) {
  qs(n, t, r, (i) => {
    yt(Gr, () => e(...i.map(f)));
  });
}
function bn(e, t = 0) {
  var r = yt(Ue | t, e);
  return r;
}
function Se(e) {
  return yt(Le | rr, e);
}
function xi(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = gt, n = k;
    Ln(!0), Re(null);
    try {
      t.call(null);
    } finally {
      Ln(r), Re(n);
    }
  }
}
function wn(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    const i = r.ac;
    i !== null && bi(() => {
      i.abort(st);
    });
    var n = r.next;
    (r.f & pt) !== 0 ? r.parent = null : ce(r, t), r = n;
  }
}
function la(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & Le) === 0 && ce(t), t = r;
  }
}
function ce(e, t = !0) {
  var r = !1;
  (t || (e.f & os) !== 0) && e.nodes !== null && e.nodes.end !== null && (oa(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), r = !0), F(e, Fn), wn(e, t && !r), gr(e, 0);
  var n = e.nodes && e.nodes.t;
  if (n !== null)
    for (const s of n)
      s.stop();
  xi(e), e.f ^= Fn, e.f |= Ae;
  var i = e.parent;
  i !== null && i.first !== null && Ei(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function oa(e, t) {
  for (; e !== null; ) {
    var r = e === t ? null : /* @__PURE__ */ kr(e);
    e.remove(), e = r;
  }
}
function Ei(e) {
  var t = e.parent, r = e.prev, n = e.next;
  r !== null && (r.next = n), n !== null && (n.prev = r), t !== null && (t.first === e && (t.first = n), t.last === e && (t.last = r));
}
function Nt(e, t, r = !0) {
  var n = [];
  ki(e, n, !0);
  var i = () => {
    r && ce(e), t && t();
  }, s = n.length;
  if (s > 0) {
    var l = () => --s || i();
    for (var u of n)
      u.out(l);
  } else
    i();
}
function ki(e, t, r) {
  if ((e.f & ae) === 0) {
    e.f ^= ae;
    var n = e.nodes && e.nodes.t;
    if (n !== null)
      for (const u of n)
        (u.is_global || r) && t.push(u);
    for (var i = e.first; i !== null; ) {
      var s = i.next;
      if ((i.f & pt) === 0) {
        var l = (i.f & Zt) !== 0 || // If this is a branch effect without a block effect parent,
        // it means the parent block effect was pruned. In that case,
        // transparency information was transferred to the branch effect.
        (i.f & Le) !== 0 && (e.f & Ue) !== 0;
        ki(i, t, l ? r : !1);
      }
      i = s;
    }
  }
}
function xn(e) {
  Si(e, !0);
}
function Si(e, t) {
  if ((e.f & ae) !== 0) {
    e.f ^= ae, (e.f & z) === 0 && (F(e, te), Pt.ensure().schedule(e));
    for (var r = e.first; r !== null; ) {
      var n = r.next, i = (r.f & Zt) !== 0 || (r.f & Le) !== 0;
      Si(r, i ? t : !1), r = n;
    }
    var s = e.nodes && e.nodes.t;
    if (s !== null)
      for (const l of s)
        (l.is_global || t) && l.in();
  }
}
function En(e, t) {
  if (e.nodes)
    for (var r = e.nodes.start, n = e.nodes.end; r !== null; ) {
      var i = r === n ? null : /* @__PURE__ */ kr(r);
      t.append(r), r = i;
    }
}
let zr = !1, gt = !1;
function Ln(e) {
  gt = e;
}
let k = null, je = !1;
function Re(e) {
  k = e;
}
let S = null;
function Ge(e) {
  S = e;
}
let Oe = null;
function Ti(e) {
  k !== null && (Oe === null ? Oe = [e] : Oe.push(e));
}
let ue = null, he = 0, we = null;
function fa(e) {
  we = e;
}
let Ai = 1, kt = 0, Ft = kt;
function $n(e) {
  Ft = e;
}
function Oi() {
  return ++Ai;
}
function Sr(e) {
  var t = e.f;
  if ((t & te) !== 0)
    return !0;
  if (t & re && (e.f &= ~It), (t & We) !== 0) {
    for (var r = (
      /** @type {Value[]} */
      e.deps
    ), n = r.length, i = 0; i < n; i++) {
      var s = r[i];
      if (Sr(
        /** @type {Derived} */
        s
      ) && di(
        /** @type {Derived} */
        s
      ), s.wv > e.wv)
        return !0;
    }
    (t & Te) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    Pe === null && F(e, z);
  }
  return !1;
}
function Ri(e, t, r = !0) {
  var n = e.reactions;
  if (n !== null && !(Oe !== null && Xt.call(Oe, e)))
    for (var i = 0; i < n.length; i++) {
      var s = n[i];
      (s.f & re) !== 0 ? Ri(
        /** @type {Derived} */
        s,
        t,
        !1
      ) : t === s && (r ? F(s, te) : (s.f & z) !== 0 && F(s, We), pn(
        /** @type {Effect} */
        s
      ));
    }
}
function Ci(e) {
  var w;
  var t = ue, r = he, n = we, i = k, s = Oe, l = ye, u = je, o = Ft, c = e.f;
  ue = /** @type {null | Value[]} */
  null, he = 0, we = null, k = (c & (Le | pt)) === 0 ? e : null, Oe = null, Jt(e.ctx), je = !1, Ft = ++kt, e.ac !== null && (bi(() => {
    e.ac.abort(st);
  }), e.ac = null);
  try {
    e.f |= Br;
    var d = (
      /** @type {Function} */
      e.fn
    ), g = d();
    e.f |= Lt;
    var p = e.deps, h = T?.is_fork;
    if (ue !== null) {
      var _;
      if (h || gr(e, he), p !== null && he > 0)
        for (p.length = he + ue.length, _ = 0; _ < ue.length; _++)
          p[he + _] = ue[_];
      else
        e.deps = p = ue;
      if (mn() && (e.f & Te) !== 0)
        for (_ = he; _ < p.length; _++)
          ((w = p[_]).reactions ?? (w.reactions = [])).push(e);
    } else !h && p !== null && he < p.length && (gr(e, he), p.length = he);
    if (ni() && we !== null && !je && p !== null && (e.f & (re | We | te)) === 0)
      for (_ = 0; _ < /** @type {Source[]} */
      we.length; _++)
        Ri(
          we[_],
          /** @type {Effect} */
          e
        );
    if (i !== null && i !== e) {
      if (kt++, i.deps !== null)
        for (let v = 0; v < r; v += 1)
          i.deps[v].rv = kt;
      if (t !== null)
        for (const v of t)
          v.rv = kt;
      we !== null && (n === null ? n = we : n.push(.../** @type {Source[]} */
      we));
    }
    return (e.f & ht) !== 0 && (e.f ^= ht), g;
  } catch (v) {
    return ii(v);
  } finally {
    e.f ^= Br, ue = t, he = r, we = n, k = i, Oe = s, Jt(l), je = u, Ft = o;
  }
}
function ua(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var n = ts.call(r, e);
    if (n !== -1) {
      var i = r.length - 1;
      i === 0 ? r = t.reactions = null : (r[n] = r[i], r.pop());
    }
  }
  if (r === null && (t.f & re) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (ue === null || !Xt.call(ue, t))) {
    var s = (
      /** @type {Derived} */
      t
    );
    (s.f & Te) !== 0 && (s.f ^= Te, s.f &= ~It), s.v !== Y && hn(s), Gs(s), gr(s, 0);
  }
}
function gr(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var n = t; n < r.length; n++)
      ua(e, r[n]);
}
function tr(e) {
  var t = e.f;
  if ((t & Ae) === 0) {
    F(e, z);
    var r = S, n = zr;
    S = e, zr = !0;
    try {
      (t & (Ue | Xn)) !== 0 ? la(e) : wn(e), xi(e);
      var i = Ci(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = Ai;
      var s;
    } finally {
      zr = n, S = r;
    }
  }
}
function f(e) {
  var t = e.f, r = (t & re) !== 0;
  if (k !== null && !je) {
    var n = S !== null && (S.f & Ae) !== 0;
    if (!n && (Oe === null || !Xt.call(Oe, e))) {
      var i = k.deps;
      if ((k.f & Br) !== 0)
        e.rv < kt && (e.rv = kt, ue === null && i !== null && i[he] === e ? he++ : ue === null ? ue = [e] : ue.push(e));
      else {
        (k.deps ?? (k.deps = [])).push(e);
        var s = e.reactions;
        s === null ? e.reactions = [k] : Xt.call(s, k) || s.push(k);
      }
    }
  }
  if (gt && Dt.has(e))
    return Dt.get(e);
  if (r) {
    var l = (
      /** @type {Derived} */
      e
    );
    if (gt) {
      var u = l.v;
      return ((l.f & z) === 0 && l.reactions !== null || Di(l)) && (u = yn(l)), Dt.set(l, u), u;
    }
    var o = (l.f & Te) === 0 && !je && k !== null && (zr || (k.f & Te) !== 0), c = (l.f & Lt) === 0;
    Sr(l) && (o && (l.f |= Te), di(l)), o && !c && (vi(l), Mi(l));
  }
  if (Pe?.has(e))
    return Pe.get(e);
  if ((e.f & ht) !== 0)
    throw e.v;
  return e.v;
}
function Mi(e) {
  if (e.f |= Te, e.deps !== null)
    for (const t of e.deps)
      (t.reactions ?? (t.reactions = [])).push(e), (t.f & re) !== 0 && (t.f & Te) === 0 && (vi(
        /** @type {Derived} */
        t
      ), Mi(
        /** @type {Derived} */
        t
      ));
}
function Di(e) {
  if (e.v === Y) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (Dt.has(t) || (t.f & re) !== 0 && Di(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function Ni(e) {
  var t = je;
  try {
    return je = !0, e();
  } finally {
    je = t;
  }
}
const ca = ["touchstart", "touchmove"];
function da(e) {
  return ca.includes(e);
}
const St = Symbol("events"), Fi = /* @__PURE__ */ new Set(), un = /* @__PURE__ */ new Set();
function Be(e, t, r) {
  (t[St] ?? (t[St] = {}))[e] = r;
}
function va(e) {
  for (var t = 0; t < e.length; t++)
    Fi.add(e[t]);
  for (var r of un)
    r(e);
}
let zn = null;
function Bn(e) {
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), n = e.type, i = e.composedPath?.() || [], s = (
    /** @type {null | Element} */
    i[0] || e.target
  );
  zn = e;
  var l = 0, u = zn === e && e[St];
  if (u) {
    var o = i.indexOf(u);
    if (o !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e[St] = t;
      return;
    }
    var c = i.indexOf(t);
    if (c === -1)
      return;
    o <= c && (l = o);
  }
  if (s = /** @type {Element} */
  i[l] || e.target, s !== t) {
    rs(e, "currentTarget", {
      configurable: !0,
      get() {
        return s || r;
      }
    });
    var d = k, g = S;
    Re(null), Ge(null);
    try {
      for (var p, h = []; s !== null; ) {
        var _ = s.assignedSlot || s.parentNode || /** @type {any} */
        s.host || null;
        try {
          var w = s[St]?.[n];
          w != null && (!/** @type {any} */
          s.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === s) && w.call(s, e);
        } catch (v) {
          p ? h.push(v) : p = v;
        }
        if (e.cancelBubble || _ === t || _ === null)
          break;
        s = _;
      }
      if (p) {
        for (let v of h)
          queueMicrotask(() => {
            throw v;
          });
        throw p;
      }
    } finally {
      e[St] = t, delete e.currentTarget, Re(d), Ge(g);
    }
  }
}
const ha = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (e) => e
  })
);
function _a(e) {
  return (
    /** @type {string} */
    ha?.createHTML(e) ?? e
  );
}
function Ii(e) {
  var t = Qs("template");
  return t.innerHTML = _a(e.replaceAll("<!>", "<!---->")), t.content;
}
function qr(e, t) {
  var r = (
    /** @type {Effect} */
    S
  );
  r.nodes === null && (r.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function j(e, t) {
  var r = (t & Ts) !== 0, n = (t & As) !== 0, i, s = !e.startsWith("<!>");
  return () => {
    i === void 0 && (i = Ii(s ? e : "<!>" + e), r || (i = /** @type {TemplateNode} */
    /* @__PURE__ */ er(i)));
    var l = (
      /** @type {TemplateNode} */
      n || pi ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (r) {
      var u = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ er(l)
      ), o = (
        /** @type {TemplateNode} */
        l.lastChild
      );
      qr(u, o);
    } else
      qr(l, l);
    return l;
  };
}
// @__NO_SIDE_EFFECTS__
function pa(e, t, r = "svg") {
  var n = !e.startsWith("<!>"), i = `<${r}>${n ? e : "<!>" + e}</${r}>`, s;
  return () => {
    if (!s) {
      var l = (
        /** @type {DocumentFragment} */
        Ii(i)
      ), u = (
        /** @type {Element} */
        /* @__PURE__ */ er(l)
      );
      s = /** @type {Element} */
      /* @__PURE__ */ er(u);
    }
    var o = (
      /** @type {TemplateNode} */
      s.cloneNode(!0)
    );
    return qr(o, o), o;
  };
}
// @__NO_SIDE_EFFECTS__
function kn(e, t) {
  return /* @__PURE__ */ pa(e, t, "svg");
}
function Hn() {
  var e = document.createDocumentFragment(), t = document.createComment(""), r = _t();
  return e.append(t, r), qr(t, r), e;
}
function C(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function K(e, t) {
  var r = t == null ? "" : typeof t == "object" ? `${t}` : t;
  r !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = r, e.nodeValue = `${r}`);
}
function ga(e, t) {
  return ya(e, t);
}
const Nr = /* @__PURE__ */ new Map();
function ya(e, { target: t, anchor: r, props: n = {}, events: i, context: s, intro: l = !0, transformError: u }) {
  Zs();
  var o = void 0, c = ia(() => {
    var d = r ?? t.appendChild(_t());
    Ls(
      /** @type {TemplateNode} */
      d,
      {
        pending: () => {
        }
      },
      (h) => {
        ti({});
        var _ = (
          /** @type {ComponentContext} */
          ye
        );
        s && (_.c = s), i && (n.$$events = i), o = e(h, n) || {}, ri();
      },
      u
    );
    var g = /* @__PURE__ */ new Set(), p = (h) => {
      for (var _ = 0; _ < h.length; _++) {
        var w = h[_];
        if (!g.has(w)) {
          g.add(w);
          var v = da(w);
          for (const M of [t, document]) {
            var x = Nr.get(M);
            x === void 0 && (x = /* @__PURE__ */ new Map(), Nr.set(M, x));
            var L = x.get(w);
            L === void 0 ? (M.addEventListener(w, Bn, { passive: v }), x.set(w, 1)) : x.set(w, L + 1);
          }
        }
      }
    };
    return p(Wr(Fi)), un.add(p), () => {
      for (var h of g)
        for (const v of [t, document]) {
          var _ = (
            /** @type {Map<string, number>} */
            Nr.get(v)
          ), w = (
            /** @type {number} */
            _.get(h)
          );
          --w == 0 ? (v.removeEventListener(h, Bn), _.delete(h), _.size === 0 && Nr.delete(v)) : _.set(h, w);
        }
      un.delete(p), d !== r && d.parentNode?.removeChild(d);
    };
  });
  return cn.set(o, c), o;
}
let cn = /* @__PURE__ */ new WeakMap();
function ma(e, t) {
  const r = cn.get(e);
  return r ? (cn.delete(e), r(t)) : Promise.resolve();
}
var Ie, Ve, ge, Ct, xr, Er, Ur;
class ba {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, r = !0) {
    /** @type {TemplateNode} */
    De(this, "anchor");
    /** @type {Map<Batch, Key>} */
    b(this, Ie, /* @__PURE__ */ new Map());
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
    b(this, Ve, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    b(this, ge, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    b(this, Ct, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    b(this, xr, !0);
    /**
     * @param {Batch} batch
     */
    b(this, Er, (t) => {
      if (a(this, Ie).has(t)) {
        var r = (
          /** @type {Key} */
          a(this, Ie).get(t)
        ), n = a(this, Ve).get(r);
        if (n)
          xn(n), a(this, Ct).delete(r);
        else {
          var i = a(this, ge).get(r);
          i && (a(this, Ve).set(r, i.effect), a(this, ge).delete(r), i.fragment.lastChild.remove(), this.anchor.before(i.fragment), n = i.effect);
        }
        for (const [s, l] of a(this, Ie)) {
          if (a(this, Ie).delete(s), s === t)
            break;
          const u = a(this, ge).get(l);
          u && (ce(u.effect), a(this, ge).delete(l));
        }
        for (const [s, l] of a(this, Ve)) {
          if (s === r || a(this, Ct).has(s)) continue;
          const u = () => {
            if (Array.from(a(this, Ie).values()).includes(s)) {
              var c = document.createDocumentFragment();
              En(l, c), c.append(_t()), a(this, ge).set(s, { effect: l, fragment: c });
            } else
              ce(l);
            a(this, Ct).delete(s), a(this, Ve).delete(s);
          };
          a(this, xr) || !n ? (a(this, Ct).add(s), Nt(l, u, !1)) : u();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    b(this, Ur, (t) => {
      a(this, Ie).delete(t);
      const r = Array.from(a(this, Ie).values());
      for (const [n, i] of a(this, ge))
        r.includes(n) || (ce(i.effect), a(this, ge).delete(n));
    });
    this.anchor = t, E(this, xr, r);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, r) {
    var n = (
      /** @type {Batch} */
      T
    ), i = mi();
    if (r && !a(this, Ve).has(t) && !a(this, ge).has(t))
      if (i) {
        var s = document.createDocumentFragment(), l = _t();
        s.append(l), a(this, ge).set(t, {
          effect: Se(() => r(l)),
          fragment: s
        });
      } else
        a(this, Ve).set(
          t,
          Se(() => r(this.anchor))
        );
    if (a(this, Ie).set(n, t), i) {
      for (const [u, o] of a(this, Ve))
        u === t ? n.unskip_effect(o) : n.skip_effect(o);
      for (const [u, o] of a(this, ge))
        u === t ? n.unskip_effect(o.effect) : n.skip_effect(o.effect);
      n.oncommit(a(this, Er)), n.ondiscard(a(this, Ur));
    } else
      a(this, Er).call(this, n);
  }
}
Ie = new WeakMap(), Ve = new WeakMap(), ge = new WeakMap(), Ct = new WeakMap(), xr = new WeakMap(), Er = new WeakMap(), Ur = new WeakMap();
function nt(e, t, r = !1) {
  var n = new ba(e), i = r ? Zt : 0;
  function s(l, u) {
    n.ensure(l, u);
  }
  bn(() => {
    var l = !1;
    t((u, o = 0) => {
      l = !0, s(o, u);
    }), l || s(-1, null);
  }, i);
}
function Ne(e, t) {
  return t;
}
function wa(e, t, r) {
  for (var n = [], i = t.length, s, l = t.length, u = 0; u < i; u++) {
    let g = t[u];
    Nt(
      g,
      () => {
        if (s) {
          if (s.pending.delete(g), s.done.add(g), s.pending.size === 0) {
            var p = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            dn(e, Wr(s.done)), p.delete(s), p.size === 0 && (e.outrogroups = null);
          }
        } else
          l -= 1;
      },
      !1
    );
  }
  if (l === 0) {
    var o = n.length === 0 && r !== null;
    if (o) {
      var c = (
        /** @type {Element} */
        r
      ), d = (
        /** @type {Element} */
        c.parentNode
      );
      Js(d), d.append(c), e.items.clear();
    }
    dn(e, t, !o);
  } else
    s = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ?? (e.outrogroups = /* @__PURE__ */ new Set())).add(s);
}
function dn(e, t, r = !0) {
  var n;
  if (e.pending.size > 0) {
    n = /* @__PURE__ */ new Set();
    for (const l of e.pending.values())
      for (const u of l)
        n.add(
          /** @type {EachItem} */
          e.items.get(u).e
        );
  }
  for (var i = 0; i < t.length; i++) {
    var s = t[i];
    if (n?.has(s)) {
      s.f |= Ye;
      const l = document.createDocumentFragment();
      En(s, l);
    } else
      ce(t[i], r);
  }
}
var qn;
function Fe(e, t, r, n, i, s = null) {
  var l = e, u = /* @__PURE__ */ new Map(), o = (t & Zn) !== 0;
  if (o) {
    var c = (
      /** @type {Element} */
      e
    );
    l = c.appendChild(_t());
  }
  var d = null, g = /* @__PURE__ */ Us(() => {
    var M = r();
    return Wn(M) ? M : M == null ? [] : Wr(M);
  }), p, h = /* @__PURE__ */ new Map(), _ = !0;
  function w(M) {
    (L.effect.f & Ae) === 0 && (L.pending.delete(M), L.fallback = d, xa(L, p, l, t, n), d !== null && (p.length === 0 ? (d.f & Ye) === 0 ? xn(d) : (d.f ^= Ye, dr(d, null, l)) : Nt(d, () => {
      d = null;
    })));
  }
  function v(M) {
    L.pending.delete(M);
  }
  var x = bn(() => {
    p = /** @type {V[]} */
    f(g);
    for (var M = p.length, ne = /* @__PURE__ */ new Set(), me = (
      /** @type {Batch} */
      T
    ), Ke = mi(), B = 0; B < M; B += 1) {
      var $e = p[B], Xe = n($e, B), H = _ ? null : u.get(Xe);
      H ? (H.v && Qt(H.v, $e), H.i && Qt(H.i, B), Ke && me.unskip_effect(H.e)) : (H = Ea(
        u,
        _ ? l : qn ?? (qn = _t()),
        $e,
        Xe,
        B,
        i,
        t,
        r
      ), _ || (H.e.f |= Ye), u.set(Xe, H)), ne.add(Xe);
    }
    if (M === 0 && s && !d && (_ ? d = Se(() => s(l)) : (d = Se(() => s(qn ?? (qn = _t()))), d.f |= Ye)), M > ne.size && vs(), !_)
      if (h.set(me, ne), Ke) {
        for (const [Tr, nr] of u)
          ne.has(Tr) || me.skip_effect(nr.e);
        me.oncommit(w), me.ondiscard(v);
      } else
        w(me);
    f(g);
  }), L = { effect: x, items: u, pending: h, outrogroups: null, fallback: d };
  _ = !1;
}
function cr(e) {
  for (; e !== null && (e.f & Le) === 0; )
    e = e.next;
  return e;
}
function xa(e, t, r, n, i) {
  var s = (n & ks) !== 0, l = t.length, u = e.items, o = cr(e.effect.first), c, d = null, g, p = [], h = [], _, w, v, x;
  if (s)
    for (x = 0; x < l; x += 1)
      _ = t[x], w = i(_, x), v = /** @type {EachItem} */
      u.get(w).e, (v.f & Ye) === 0 && (v.nodes?.a?.measure(), (g ?? (g = /* @__PURE__ */ new Set())).add(v));
  for (x = 0; x < l; x += 1) {
    if (_ = t[x], w = i(_, x), v = /** @type {EachItem} */
    u.get(w).e, e.outrogroups !== null)
      for (const H of e.outrogroups)
        H.pending.delete(v), H.done.delete(v);
    if ((v.f & ae) !== 0 && (xn(v), s && (v.nodes?.a?.unfix(), (g ?? (g = /* @__PURE__ */ new Set())).delete(v))), (v.f & Ye) !== 0)
      if (v.f ^= Ye, v === o)
        dr(v, null, r);
      else {
        var L = d ? d.next : o;
        v === e.effect.last && (e.effect.last = v.prev), v.prev && (v.prev.next = v.next), v.next && (v.next.prev = v.prev), ut(e, d, v), ut(e, v, L), dr(v, L, r), d = v, p = [], h = [], o = cr(d.next);
        continue;
      }
    if (v !== o) {
      if (c !== void 0 && c.has(v)) {
        if (p.length < h.length) {
          var M = h[0], ne;
          d = M.prev;
          var me = p[0], Ke = p[p.length - 1];
          for (ne = 0; ne < p.length; ne += 1)
            dr(p[ne], M, r);
          for (ne = 0; ne < h.length; ne += 1)
            c.delete(h[ne]);
          ut(e, me.prev, Ke.next), ut(e, d, me), ut(e, Ke, M), o = M, d = Ke, x -= 1, p = [], h = [];
        } else
          c.delete(v), dr(v, o, r), ut(e, v.prev, v.next), ut(e, v, d === null ? e.effect.first : d.next), ut(e, d, v), d = v;
        continue;
      }
      for (p = [], h = []; o !== null && o !== v; )
        (c ?? (c = /* @__PURE__ */ new Set())).add(o), h.push(o), o = cr(o.next);
      if (o === null)
        continue;
    }
    (v.f & Ye) === 0 && p.push(v), d = v, o = cr(v.next);
  }
  if (e.outrogroups !== null) {
    for (const H of e.outrogroups)
      H.pending.size === 0 && (dn(e, Wr(H.done)), e.outrogroups?.delete(H));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (o !== null || c !== void 0) {
    var B = [];
    if (c !== void 0)
      for (v of c)
        (v.f & ae) === 0 && B.push(v);
    for (; o !== null; )
      (o.f & ae) === 0 && o !== e.fallback && B.push(o), o = cr(o.next);
    var $e = B.length;
    if ($e > 0) {
      var Xe = (n & Zn) !== 0 && l === 0 ? r : null;
      if (s) {
        for (x = 0; x < $e; x += 1)
          B[x].nodes?.a?.measure();
        for (x = 0; x < $e; x += 1)
          B[x].nodes?.a?.fix();
      }
      wa(e, B, Xe);
    }
  }
  s && Mt(() => {
    if (g !== void 0)
      for (v of g)
        v.nodes?.a?.apply();
  });
}
function Ea(e, t, r, n, i, s, l, u) {
  var o = (l & xs) !== 0 ? (l & Ss) === 0 ? /* @__PURE__ */ Ks(r, !1, !1) : jt(r) : null, c = (l & Es) !== 0 ? jt(i) : null;
  return {
    v: o,
    i: c,
    e: Se(() => (s(t, o ?? r, c ?? i, u), () => {
      e.delete(n);
    }))
  };
}
function dr(e, t, r) {
  if (e.nodes)
    for (var n = e.nodes.start, i = e.nodes.end, s = t && (t.f & Ye) === 0 ? (
      /** @type {EffectNodes} */
      t.nodes.start
    ) : r; n !== null; ) {
      var l = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ kr(n)
      );
      if (s.before(n), n === i)
        return;
      n = l;
    }
}
function ut(e, t, r) {
  t === null ? e.effect.first = r : t.next = r, r === null ? e.effect.last = t : r.prev = t;
}
function ka(e, t, r) {
  var n = e == null ? "" : "" + e;
  return n === "" ? null : n;
}
function Sa(e, t) {
  return e == null ? null : String(e);
}
function Ta(e, t, r, n, i, s) {
  var l = e.__className;
  if (l !== r || l === void 0) {
    var u = ka(r);
    u == null ? e.removeAttribute("class") : e.className = u, e.__className = r;
  }
  return s;
}
function Vn(e, t, r, n) {
  var i = e.__style;
  if (i !== t) {
    var s = Sa(t);
    s == null ? e.removeAttribute("style") : e.style.cssText = s, e.__style = t;
  }
  return n;
}
const Aa = Symbol("is custom element"), Oa = Symbol("is html");
function oe(e, t, r, n) {
  var i = Ra(e);
  i[t] !== (i[t] = r) && (t === "loading" && (e[us] = r), r == null ? e.removeAttribute(t) : typeof r != "string" && Ca(e).includes(t) ? e[t] = r : e.setAttribute(t, r));
}
function Ra(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [Aa]: e.nodeName.includes("-"),
      [Oa]: e.namespaceURI === Jn
    })
  );
}
var Yn = /* @__PURE__ */ new Map();
function Ca(e) {
  var t = e.getAttribute("is") || e.nodeName, r = Yn.get(t);
  if (r) return r;
  Yn.set(t, r = []);
  for (var n, i = e, s = Element.prototype; s !== i; ) {
    n = ns(i);
    for (var l in n)
      n[l].set && r.push(l);
    i = Gn(i);
  }
  return r;
}
function Ma(e) {
  ye === null && cs(), na(() => {
    const t = Ni(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
const Da = "5";
var Un;
typeof window < "u" && ((Un = window.__svelte ?? (window.__svelte = {})).v ?? (Un.v = /* @__PURE__ */ new Set())).add(Da);
var Na = /* @__PURE__ */ j('<div class="bg-red-50 border border-red-300 text-red-800 px-4 py-3 rounded-lg mb-4 text-sm"> <button class="ml-3 underline text-sm">Retry</button></div>'), Fa = /* @__PURE__ */ j('<div class="flex items-center justify-center py-16"><svg class="animate-spin h-8 w-8 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> <span class="ml-3 text-gray-500">Loading entity schema...</span></div>'), Ia = /* @__PURE__ */ j('<div class="flex items-center gap-1"><span class="w-3 h-3 rounded-sm"></span> <span class="text-gray-500"> </span></div>'), Pa = /* @__PURE__ */ kn('<marker markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7"></polygon></marker>'), ja = /* @__PURE__ */ kn('<line stroke-width="2"></line>'), La = /* @__PURE__ */ kn('<g class="cursor-move"><rect width="150" height="80" rx="8" class="cursor-pointer drop-shadow-sm" role="button" tabindex="0"></rect><text x="75" y="25" text-anchor="middle" fill="white" font-weight="600" font-size="14"> </text><text x="75" y="45" text-anchor="middle" fill="white" opacity="0.8" font-size="11"> </text><text x="75" y="65" text-anchor="middle" fill="white" opacity="0.9" font-size="10">Click to explore</text></g>'), $a = /* @__PURE__ */ j('<span class="bg-gray-100 text-gray-700 px-2 py-0.5 rounded text-xs font-mono"> </span>'), za = /* @__PURE__ */ j('<div class="flex items-center justify-between p-2 bg-gray-50 rounded text-xs"><span class="font-medium text-gray-700"> </span> <span class="font-semibold"> </span> <span class="text-gray-500"> </span></div>'), Ba = /* @__PURE__ */ j('<div><h4 class="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Relationships</h4> <div class="space-y-1.5"></div></div>'), Ha = /* @__PURE__ */ j('<th class="px-3 py-2 text-left font-semibold text-gray-600 border-b border-gray-200"> </th>'), qa = /* @__PURE__ */ j('<td class="px-3 py-2 border-b border-gray-100 max-w-[150px] truncate"> </td>'), Va = /* @__PURE__ */ j('<tr><!><td class="px-3 py-2 border-b border-gray-100"><button class="text-blue-600 hover:underline">View</button></td></tr>'), Ya = /* @__PURE__ */ j('<div class="flex justify-between items-center mt-3 text-xs"><button class="px-3 py-1 bg-gray-100 border border-gray-300 rounded hover:bg-gray-200 disabled:opacity-40 disabled:cursor-not-allowed">Previous</button> <span class="text-gray-500"> </span> <button class="px-3 py-1 bg-gray-100 border border-gray-300 rounded hover:bg-gray-200 disabled:opacity-40 disabled:cursor-not-allowed">Next</button></div>'), Ua = /* @__PURE__ */ j('<div class="overflow-x-auto border border-gray-200 rounded"><table class="min-w-full text-xs"><thead><tr class="bg-gray-50"><!><th class="px-3 py-2 text-left font-semibold text-gray-600 border-b border-gray-200">Actions</th></tr></thead><tbody></tbody></table></div> <!>', 1), Wa = /* @__PURE__ */ j('<p class="text-gray-500 text-center py-4 text-sm"> </p>'), Ga = /* @__PURE__ */ j('<div class="flex-1 p-4 overflow-y-auto space-y-5"><div><h4 class="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Fields</h4> <div class="flex flex-wrap gap-1.5"></div></div> <!> <div><h4 class="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Entity Data</h4> <!></div></div>'), Ka = /* @__PURE__ */ j('<div class="flex-1 flex items-center justify-center p-4"><p class="text-gray-500 text-sm"> </p></div>'), Xa = /* @__PURE__ */ j('<div class="px-4 py-3 border-b border-gray-200 bg-gray-50"><h3 class="text-sm font-semibold text-gray-700"> <span class="text-xs text-gray-400 font-normal ml-1"> </span></h3></div> <!>', 1), Za = /* @__PURE__ */ j('<div class="flex-1 flex items-center justify-center p-4"><p class="text-gray-500 text-sm">Select an entity from the diagram to view its data</p></div>'), Ja = /* @__PURE__ */ j('<div class="flex text-xs"><span class="font-medium text-gray-700 min-w-[80px] shrink-0"> </span> <span class="text-gray-500 break-all"> </span></div>'), Qa = /* @__PURE__ */ j('<div class="fixed bottom-4 right-4 w-80 bg-white border border-gray-200 rounded-lg shadow-xl z-50"><div class="px-4 py-3 border-b border-gray-200 bg-gray-50 flex items-center justify-between rounded-t-lg"><h4 class="text-sm font-semibold text-gray-700">Record Details</h4> <button class="text-gray-400 hover:text-gray-700 text-xl leading-none">&times;</button></div> <div class="p-4 max-h-72 overflow-y-auto space-y-1.5"></div></div>'), el = /* @__PURE__ */ j('<div class="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-4" style="min-height:calc(100vh - 220px)"><div class="bg-white border border-gray-200 rounded-lg overflow-hidden flex flex-col"><div class="px-4 py-3 border-b border-gray-200 bg-gray-50 flex items-center justify-between flex-wrap gap-2"><h3 class="text-sm font-semibold text-gray-700">Entity Relationship Diagram</h3> <div class="flex gap-3 text-xs"></div></div> <div class="flex-1 overflow-auto bg-gray-50/50"><svg class="block"><defs></defs><!><!></svg></div></div> <div class="bg-white border border-gray-200 rounded-lg overflow-hidden flex flex-col"><!></div></div> <!>', 1), tl = /* @__PURE__ */ j('<div class="max-w-6xl mx-auto p-4"><div class="mb-6"><div class="flex items-center gap-3 flex-wrap"><h2 class="text-2xl font-bold text-gray-900">ERD Explorer</h2> <button class="ml-auto px-3 py-1.5 bg-gray-100 border border-gray-300 rounded-lg text-xs hover:bg-gray-200 transition-colors disabled:opacity-50">Refresh</button></div> <p class="text-gray-600 text-sm mt-1">Entity-Relationship diagram and data browser</p></div> <!> <!></div>');
function rl(e, t) {
  ti(t, !0);
  let r = /* @__PURE__ */ ee(Et({})), n = /* @__PURE__ */ ee(Et({})), i = /* @__PURE__ */ ee(!0), s = /* @__PURE__ */ ee(""), l = /* @__PURE__ */ ee(""), u = /* @__PURE__ */ ee(null), o = /* @__PURE__ */ ee(1);
  const c = 10;
  let d = /* @__PURE__ */ ee(!1), g = { x: 0, y: 0 };
  const p = 900, h = 600, _ = {
    OneToOne: "#4F46E5",
    OneToMany: "#059669",
    ManyToOne: "#DC2626",
    ManyToMany: "#7C2D12"
  }, w = {
    Realm: "#8B5CF6",
    User: "#3B82F6",
    Human: "#10B981",
    Identity: "#F59E0B"
  };
  async function v(y, D = {}) {
    return await t.ctx.callSync(y, D);
  }
  async function x() {
    O(i, !0), O(s, "");
    try {
      const y = await v("get_entity_schema"), D = y?.entities ?? y?.data?.entities ?? y?.data ?? y;
      if (D && typeof D == "object") {
        let $ = 0, ze = 0;
        const mt = 4, Ar = {};
        for (const [Or, ir] of Object.entries(D)) {
          if (Or.startsWith("_")) continue;
          const $t = ir;
          Ar[Or] = {
            ...$t,
            fields: $t.fields || [],
            relationships: $t.relationships || {},
            position: { x: 80 + $ * 200, y: 80 + ze * 160 },
            expanded: !1
          }, $++, $ >= mt && ($ = 0, ze++);
        }
        O(r, Ar, !0);
      }
    } catch (y) {
      O(s, y?.message || String(y), !0);
    } finally {
      O(i, !1);
    }
  }
  async function L(y, D = 0) {
    try {
      const $ = await v("get_entity_data", { entity_type: y, page_num: D, page_size: c });
      $ && O(
        n,
        {
          ...f(n),
          [y]: $?.data ?? $
        },
        !0
      );
    } catch ($) {
      console.error(`Failed to load ${y} data:`, $);
    }
  }
  function M(y) {
    f(l) === y ? f(r)[y].expanded = !f(r)[y].expanded : (f(l) && f(r)[f(l)] && (f(r)[f(l)].expanded = !1), O(l, y, !0), f(r)[y].expanded = !0, O(u, null), O(o, 1), L(y, 0)), O(r, { ...f(r) }, !0);
  }
  function ne(y) {
    return w[y] || "#6B7280";
  }
  function me(y) {
    return _[y] || "#6B7280";
  }
  function Ke(y) {
    return f(n)[y]?.items || f(n)[y]?.data || [];
  }
  function B(y) {
    return f(n)[y]?.total_pages || 0;
  }
  function $e(y) {
    return f(n)[y]?.total_items_count || f(n)[y]?.total_count || 0;
  }
  async function Xe(y, D) {
    O(o, D, !0), await L(y, D - 1);
  }
  function H(y, D) {
    O(d, !0), g.x = y.clientX - f(r)[D].position.x, g.y = y.clientY - f(r)[D].position.y;
    function $(mt) {
      f(d) && (f(r)[D].position.x = mt.clientX - g.x, f(r)[D].position.y = mt.clientY - g.y, O(r, { ...f(r) }, !0));
    }
    function ze() {
      O(d, !1), document.removeEventListener("mousemove", $), document.removeEventListener("mouseup", ze);
    }
    document.addEventListener("mousemove", $), document.addEventListener("mouseup", ze);
  }
  let Tr = /* @__PURE__ */ J(() => Object.entries(f(r))), nr = /* @__PURE__ */ J(() => f(l) && f(r)[f(l)] ? Array.isArray(f(r)[f(l)].fields) ? f(r)[f(l)].fields : Object.keys(f(r)[f(l)].fields || {}) : []), Sn = /* @__PURE__ */ J(() => f(l) && f(r)[f(l)]?.relationships ? Object.entries(f(r)[f(l)].relationships) : []);
  Ma(async () => {
    await x();
    const y = Object.keys(f(r));
    y.length > 0 && (O(l, y[0], !0), f(r)[y[0]].expanded = !0, O(r, { ...f(r) }, !0), await L(y[0], 0));
  });
  var Tn = tl(), An = m(Tn), Pi = m(An), On = A(m(Pi), 2), Rn = A(An, 2);
  {
    var ji = (y) => {
      var D = Na(), $ = m(D), ze = A($);
      Q(() => K($, `${f(s) ?? ""} `)), Be("click", ze, x), C(y, D);
    };
    nt(Rn, (y) => {
      f(s) && y(ji);
    });
  }
  var Li = A(Rn, 2);
  {
    var $i = (y) => {
      var D = Fa();
      C(y, D);
    }, zi = (y) => {
      var D = el(), $ = ur(D), ze = m($), mt = m(ze), Ar = A(m(mt), 2);
      Fe(Ar, 21, () => Object.entries(_), Ne, (q, ie) => {
        var X = /* @__PURE__ */ J(() => wt(f(ie), 2));
        let I = () => f(X)[0], le = () => f(X)[1];
        var U = Ia(), W = m(U), Ce = A(W, 2), Ze = m(Ce);
        Q(() => {
          Vn(W, `background-color:${le() ?? ""}`), K(Ze, I());
        }), C(q, U);
      });
      var Or = A(mt, 2), ir = m(Or);
      oe(ir, "width", p), oe(ir, "height", h);
      var $t = m(ir);
      Fe($t, 21, () => Object.entries(_), Ne, (q, ie) => {
        var X = /* @__PURE__ */ J(() => wt(f(ie), 2));
        let I = () => f(X)[0], le = () => f(X)[1];
        var U = Pa(), W = m(U);
        Q(() => {
          oe(U, "id", `arrow-${I() ?? ""}`), oe(W, "fill", le());
        }), C(q, U);
      });
      var Cn = A($t);
      Fe(Cn, 17, () => f(Tr), Ne, (q, ie) => {
        var X = /* @__PURE__ */ J(() => wt(f(ie), 2));
        let I = () => f(X)[1];
        var le = Hn(), U = ur(le);
        Fe(U, 17, () => Object.entries(I().relationships || {}), Ne, (W, Ce) => {
          var Ze = /* @__PURE__ */ J(() => wt(f(Ce), 2));
          let Je = () => f(Ze)[1];
          const G = /* @__PURE__ */ J(() => typeof Je() == "object" ? Je() : { target: Je(), type: "OneToMany" }), V = /* @__PURE__ */ J(() => f(G).target);
          var Me = Hn(), bt = ur(Me);
          {
            var zt = (sr) => {
              var Qe = ja();
              Q(
                (Kr) => {
                  oe(Qe, "x1", I().position.x + 75), oe(Qe, "y1", I().position.y + 40), oe(Qe, "x2", f(r)[f(V)].position.x + 75), oe(Qe, "y2", f(r)[f(V)].position.y + 40), oe(Qe, "stroke", Kr), oe(Qe, "marker-end", `url(#arrow-${f(G).type ?? ""})`);
                },
                [() => me(f(G).type)]
              ), C(sr, Qe);
            };
            nt(bt, (sr) => {
              f(r)[f(V)] && sr(zt);
            });
          }
          C(W, Me);
        }), C(q, le);
      });
      var Bi = A(Cn);
      Fe(Bi, 17, () => f(Tr), Ne, (q, ie) => {
        var X = /* @__PURE__ */ J(() => wt(f(ie), 2));
        let I = () => f(X)[0], le = () => f(X)[1];
        var U = La(), W = m(U), Ce = A(W), Ze = m(Ce), Je = A(Ce), G = m(Je);
        Q(
          (V, Me) => {
            oe(U, "transform", `translate(${le().position.x ?? ""}, ${le().position.y ?? ""})`), oe(W, "fill", V), oe(W, "stroke", f(l) === I() ? "#1F2937" : "#E5E7EB"), oe(W, "stroke-width", f(l) === I() ? 3 : 1), K(Ze, I()), K(G, `${Me ?? ""} records`);
          },
          [
            () => ne(I()),
            () => $e(I()) || 0
          ]
        ), Be("mousedown", U, (V) => H(V, I())), Be("click", W, () => M(I())), Be("keydown", W, (V) => {
          V.key === "Enter" && M(I());
        }), C(q, U);
      });
      var Hi = A(ze, 2), qi = m(Hi);
      {
        var Vi = (q) => {
          var ie = Xa(), X = ur(ie), I = m(X), le = m(I), U = A(le), W = m(U), Ce = A(X, 2);
          {
            var Ze = (G) => {
              var V = Ga(), Me = m(V), bt = A(m(Me), 2);
              Fe(bt, 21, () => f(nr), Ne, (be, de) => {
                var et = $a(), ar = m(et);
                Q(() => K(ar, typeof f(de) == "string" ? f(de) : f(de).name || f(de))), C(be, et);
              });
              var zt = A(Me, 2);
              {
                var sr = (be) => {
                  var de = Ba(), et = A(m(de), 2);
                  Fe(et, 21, () => f(Sn), Ne, (ar, Rr) => {
                    var Cr = /* @__PURE__ */ J(() => wt(f(Rr), 2));
                    let Xr = () => f(Cr)[0], lr = () => f(Cr)[1];
                    const or = /* @__PURE__ */ J(() => typeof lr() == "object" ? lr() : { target: lr(), type: "OneToMany" });
                    var Mr = za(), Dr = m(Mr), tt = m(Dr), Z = A(Dr, 2), ve = m(Z), rt = A(Z, 2), fr = m(rt);
                    Q(
                      (Bt) => {
                        K(tt, Xr()), Vn(Z, `color:${Bt ?? ""}`), K(ve, f(or).type), K(fr, f(or).target);
                      },
                      [() => me(f(or).type)]
                    ), C(ar, Mr);
                  }), C(be, de);
                };
                nt(zt, (be) => {
                  f(Sn).length > 0 && be(sr);
                });
              }
              var Qe = A(zt, 2), Kr = A(m(Qe), 2);
              {
                var Gi = (be) => {
                  var de = Ua(), et = ur(de), ar = m(et), Rr = m(ar), Cr = m(Rr), Xr = m(Cr);
                  Fe(Xr, 17, () => f(nr).slice(0, 4), Ne, (tt, Z) => {
                    var ve = Ha(), rt = m(ve);
                    Q(() => K(rt, typeof f(Z) == "string" ? f(Z) : f(Z).name || f(Z))), C(tt, ve);
                  });
                  var lr = A(Rr);
                  Fe(lr, 21, () => Ke(f(l)), Ne, (tt, Z) => {
                    var ve = Va(), rt = m(ve);
                    Fe(rt, 17, () => f(nr).slice(0, 4), Ne, (Zr, Ht) => {
                      const Zi = /* @__PURE__ */ J(() => typeof f(Ht) == "string" ? f(Ht) : f(Ht).name || f(Ht));
                      var Mn = qa(), Ji = m(Mn);
                      Q(() => K(Ji, f(Z)[f(Zi)] ?? "-")), C(Zr, Mn);
                    });
                    var fr = A(rt), Bt = m(fr);
                    Q(() => Ta(ve, 1, `hover:bg-gray-50 transition-colors cursor-pointer ${f(u) === f(Z) ? "bg-blue-50" : ""}`)), Be("click", ve, () => O(u, f(Z), !0)), Be("click", Bt, () => O(u, f(Z), !0)), C(tt, ve);
                  });
                  var or = A(et, 2);
                  {
                    var Mr = (tt) => {
                      var Z = Ya(), ve = m(Z), rt = A(ve, 2), fr = m(rt), Bt = A(rt, 2);
                      Q(
                        (Zr, Ht) => {
                          ve.disabled = f(o) === 1, K(fr, `Page ${f(o) ?? ""} of ${Zr ?? ""}`), Bt.disabled = Ht;
                        },
                        [
                          () => B(f(l)),
                          () => f(o) === B(f(l))
                        ]
                      ), Be("click", ve, () => Xe(f(l), Math.max(1, f(o) - 1))), Be("click", Bt, () => Xe(f(l), Math.min(B(f(l)), f(o) + 1))), C(tt, Z);
                    }, Dr = /* @__PURE__ */ J(() => B(f(l)) > 1);
                    nt(or, (tt) => {
                      f(Dr) && tt(Mr);
                    });
                  }
                  C(be, de);
                }, Ki = /* @__PURE__ */ J(() => Ke(f(l)).length > 0), Xi = (be) => {
                  var de = Wa(), et = m(de);
                  Q(() => K(et, `No data available for ${f(l) ?? ""}`)), C(be, de);
                };
                nt(Kr, (be) => {
                  f(Ki) ? be(Gi) : be(Xi, -1);
                });
              }
              C(G, V);
            }, Je = (G) => {
              var V = Ka(), Me = m(V), bt = m(Me);
              Q(() => K(bt, `Click on the ${f(l) ?? ""} node to expand and view data`)), C(G, V);
            };
            nt(Ce, (G) => {
              f(r)[f(l)]?.expanded ? G(Ze) : G(Je, -1);
            });
          }
          Q(
            (G) => {
              K(le, `${f(l) ?? ""} Data `), K(W, `(${G ?? ""} total)`);
            },
            [() => $e(f(l))]
          ), C(q, ie);
        }, Yi = (q) => {
          var ie = Za();
          C(q, ie);
        };
        nt(qi, (q) => {
          f(l) ? q(Vi) : q(Yi, -1);
        });
      }
      var Ui = A($, 2);
      {
        var Wi = (q) => {
          var ie = Qa(), X = m(ie), I = A(m(X), 2), le = A(X, 2);
          Fe(le, 21, () => Object.entries(f(u)), Ne, (U, W) => {
            var Ce = /* @__PURE__ */ J(() => wt(f(W), 2));
            let Ze = () => f(Ce)[0], Je = () => f(Ce)[1];
            var G = Ja(), V = m(G), Me = m(V), bt = A(V, 2), zt = m(bt);
            Q(() => {
              K(Me, `${Ze() ?? ""}:`), K(zt, Je());
            }), C(U, G);
          }), Be("click", I, () => O(u, null)), C(q, ie);
        };
        nt(Ui, (q) => {
          f(u) && q(Wi);
        });
      }
      C(y, D);
    };
    nt(Li, (y) => {
      f(i) ? y($i) : y(zi, -1);
    });
  }
  Q(() => On.disabled = f(i)), Be("click", On, x), C(e, Tn), ri();
}
va(["click", "mousedown", "keydown"]);
function sl(e, t) {
  const r = ga(rl, { target: e, props: { ctx: t } });
  return {
    unmount() {
      try {
        ma(r);
      } catch {
      }
    }
  };
}
export {
  sl as default
};
