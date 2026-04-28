var Ni = Object.defineProperty;
var tr = (e) => {
  throw TypeError(e);
};
var Ci = (e, t, n) => t in e ? Ni(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var _e = (e, t, n) => Ci(e, typeof t != "symbol" ? t + "" : t, n), En = (e, t, n) => t.has(e) || tr("Cannot " + n);
var a = (e, t, n) => (En(e, t, "read from private field"), n ? n.call(e) : t.get(e)), y = (e, t, n) => t.has(e) ? tr("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), w = (e, t, n, r) => (En(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), A = (e, t, n) => (En(e, t, "access private method"), n);
var _r = Array.isArray, Oi = Array.prototype.indexOf, St = Array.prototype.includes, pn = Array.from, Mi = Object.defineProperty, It = Object.getOwnPropertyDescriptor, Ri = Object.prototype, Di = Array.prototype, Fi = Object.getPrototypeOf, nr = Object.isExtensible;
const Pi = () => {
};
function Ii(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function gr() {
  var e, t, n = new Promise((r, i) => {
    e = r, t = i;
  });
  return { promise: n, resolve: e, reject: t };
}
const B = 2, Tt = 4, _n = 8, yr = 1 << 24, Te = 16, be = 32, We = 64, Sn = 128, ue = 512, I = 1024, H = 2048, Ae = 4096, G = 8192, ce = 16384, vt = 32768, rr = 1 << 25, At = 65536, Tn = 1 << 17, zi = 1 << 18, Mt = 1 << 19, ji = 1 << 20, Se = 1 << 25, ut = 65536, on = 1 << 21, jt = 1 << 22, Ge = 1 << 23, xn = Symbol("$state"), Pe = new class extends Error {
  constructor() {
    super(...arguments);
    _e(this, "name", "StaleReactionError");
    _e(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
function Li() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function qi(e, t, n) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function Vi(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Hi() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Bi(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Ji() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Ui() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Yi() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Gi() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Ki() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
const Wi = 1, Xi = 2, mr = 4, Zi = 8, Qi = 16, $i = 1, es = 2, z = Symbol(), ts = "http://www.w3.org/1999/xhtml";
function ns() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function rs() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function br(e) {
  return e === this.v;
}
function is(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function wr(e) {
  return !is(e, this.v);
}
let ve = null;
function Nt(e) {
  ve = e;
}
function Er(e, t = !1, n) {
  ve = {
    p: ve,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    r: (
      /** @type {Effect} */
      x
    ),
    l: null
  };
}
function xr(e) {
  var t = (
    /** @type {ComponentContext} */
    ve
  ), n = t.e;
  if (n !== null) {
    t.e = null;
    for (var r of n)
      Br(r);
  }
  return t.i = !0, ve = t.p, /** @type {T} */
  {};
}
function kr() {
  return !0;
}
let yt = [];
function ss() {
  var e = yt;
  yt = [], Ii(e);
}
function at(e) {
  if (yt.length === 0) {
    var t = yt;
    queueMicrotask(() => {
      t === yt && ss();
    });
  }
  yt.push(e);
}
function Sr(e) {
  var t = x;
  if (t === null)
    return E.f |= Ge, e;
  if ((t.f & vt) === 0 && (t.f & Tt) === 0)
    throw e;
  Ye(e, t);
}
function Ye(e, t) {
  for (; t !== null; ) {
    if ((t.f & Sn) !== 0) {
      if ((t.f & vt) === 0)
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
const as = -7169;
function R(e, t) {
  e.f = e.f & as | t;
}
function jn(e) {
  (e.f & ue) !== 0 || e.deps === null ? R(e, I) : R(e, Ae);
}
function Tr(e) {
  if (e !== null)
    for (const t of e)
      (t.f & B) === 0 || (t.f & ut) === 0 || (t.f ^= ut, Tr(
        /** @type {Derived} */
        t.deps
      ));
}
function Ar(e, t, n) {
  (e.f & H) !== 0 ? t.add(e) : (e.f & Ae) !== 0 && n.add(e), Tr(e.deps), R(e, I);
}
const Qe = /* @__PURE__ */ new Set();
let S = null, ye = null, An = null, kn = !1, mt = null, tn = null;
var ir = 0;
let ls = 1;
var bt, wt, tt, Ie, we, qt, ee, Vt, Je, ze, Ee, Et, xt, nt, D, nn, Nr, rn, Nn, sn, fs;
const dn = class dn {
  constructor() {
    y(this, D);
    _e(this, "id", ls++);
    /**
     * The current values of any signals that are updated in this batch.
     * Tuple format: [value, is_derived] (note: is_derived is false for deriveds, too, if they were overridden via assignment)
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Value, [any, boolean]>}
     */
    _e(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any signals (sources and deriveds) that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Value, any>}
     */
    _e(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<(batch: Batch) => void>}
     */
    y(this, bt, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    y(this, wt, /* @__PURE__ */ new Set());
    /**
     * Callbacks that should run only when a fork is committed.
     * @type {Set<(batch: Batch) => void>}
     */
    y(this, tt, /* @__PURE__ */ new Set());
    /**
     * Async effects that are currently in flight
     * @type {Map<Effect, number>}
     */
    y(this, Ie, /* @__PURE__ */ new Map());
    /**
     * Async effects that are currently in flight, _not_ inside a pending boundary
     * @type {Map<Effect, number>}
     */
    y(this, we, /* @__PURE__ */ new Map());
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    y(this, qt, null);
    /**
     * The root effects that need to be flushed
     * @type {Effect[]}
     */
    y(this, ee, []);
    /**
     * Effects created while this batch was active.
     * @type {Effect[]}
     */
    y(this, Vt, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    y(this, Je, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    y(this, ze, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    y(this, Ee, /* @__PURE__ */ new Map());
    /**
     * Inverse of #skipped_branches which we need to tell prior batches to unskip them when committing
     * @type {Set<Effect>}
     */
    y(this, Et, /* @__PURE__ */ new Set());
    _e(this, "is_fork", !1);
    y(this, xt, !1);
    /** @type {Set<Batch>} */
    y(this, nt, /* @__PURE__ */ new Set());
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(t) {
    a(this, Ee).has(t) || a(this, Ee).set(t, { d: [], m: [] }), a(this, Et).delete(t);
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   * @param {(e: Effect) => void} callback
   */
  unskip_effect(t, n = (r) => this.schedule(r)) {
    var r = a(this, Ee).get(t);
    if (r) {
      a(this, Ee).delete(t);
      for (var i of r.d)
        R(i, H), n(i);
      for (i of r.m)
        R(i, Ae), n(i);
    }
    a(this, Et).add(t);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Value} source
   * @param {any} value
   * @param {boolean} [is_derived]
   */
  capture(t, n, r = !1) {
    t.v !== z && !this.previous.has(t) && this.previous.set(t, t.v), (t.f & Ge) === 0 && (this.current.set(t, [n, r]), ye?.set(t, n)), this.is_fork || (t.v = n);
  }
  activate() {
    S = this;
  }
  deactivate() {
    S = null, ye = null;
  }
  flush() {
    try {
      kn = !0, S = this, A(this, D, rn).call(this);
    } finally {
      ir = 0, An = null, mt = null, tn = null, kn = !1, S = null, ye = null, lt.clear();
    }
  }
  discard() {
    for (const t of a(this, wt)) t(this);
    a(this, wt).clear(), a(this, tt).clear(), Qe.delete(this);
  }
  /**
   * @param {Effect} effect
   */
  register_created_effect(t) {
    a(this, Vt).push(t);
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  increment(t, n) {
    let r = a(this, Ie).get(n) ?? 0;
    if (a(this, Ie).set(n, r + 1), t) {
      let i = a(this, we).get(n) ?? 0;
      a(this, we).set(n, i + 1);
    }
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   * @param {boolean} skip - whether to skip updates (because this is triggered by a stale reaction)
   */
  decrement(t, n, r) {
    let i = a(this, Ie).get(n) ?? 0;
    if (i === 1 ? a(this, Ie).delete(n) : a(this, Ie).set(n, i - 1), t) {
      let s = a(this, we).get(n) ?? 0;
      s === 1 ? a(this, we).delete(n) : a(this, we).set(n, s - 1);
    }
    a(this, xt) || r || (w(this, xt, !0), at(() => {
      w(this, xt, !1), this.flush();
    }));
  }
  /**
   * @param {Set<Effect>} dirty_effects
   * @param {Set<Effect>} maybe_dirty_effects
   */
  transfer_effects(t, n) {
    for (const r of t)
      a(this, Je).add(r);
    for (const r of n)
      a(this, ze).add(r);
    t.clear(), n.clear();
  }
  /** @param {(batch: Batch) => void} fn */
  oncommit(t) {
    a(this, bt).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    a(this, wt).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  on_fork_commit(t) {
    a(this, tt).add(t);
  }
  run_fork_commit_callbacks() {
    for (const t of a(this, tt)) t(this);
    a(this, tt).clear();
  }
  settled() {
    return (a(this, qt) ?? w(this, qt, gr())).promise;
  }
  static ensure() {
    if (S === null) {
      const t = S = new dn();
      kn || (Qe.add(S), at(() => {
        S === t && t.flush();
      }));
    }
    return S;
  }
  apply() {
    {
      ye = null;
      return;
    }
  }
  /**
   *
   * @param {Effect} effect
   */
  schedule(t) {
    if (An = t, t.b?.is_pending && (t.f & (Tt | _n | yr)) !== 0 && (t.f & vt) === 0) {
      t.b.defer_effect(t);
      return;
    }
    for (var n = t; n.parent !== null; ) {
      n = n.parent;
      var r = n.f;
      if (mt !== null && n === x && (E === null || (E.f & B) === 0))
        return;
      if ((r & (We | be)) !== 0) {
        if ((r & I) === 0)
          return;
        n.f ^= I;
      }
    }
    a(this, ee).push(n);
  }
};
bt = new WeakMap(), wt = new WeakMap(), tt = new WeakMap(), Ie = new WeakMap(), we = new WeakMap(), qt = new WeakMap(), ee = new WeakMap(), Vt = new WeakMap(), Je = new WeakMap(), ze = new WeakMap(), Ee = new WeakMap(), Et = new WeakMap(), xt = new WeakMap(), nt = new WeakMap(), D = new WeakSet(), nn = function() {
  return this.is_fork || a(this, we).size > 0;
}, Nr = function() {
  for (const r of a(this, nt))
    for (const i of a(r, we).keys()) {
      for (var t = !1, n = i; n.parent !== null; ) {
        if (a(this, Ee).has(n)) {
          t = !0;
          break;
        }
        n = n.parent;
      }
      if (!t)
        return !0;
    }
  return !1;
}, rn = function() {
  var o;
  if (ir++ > 1e3 && (Qe.delete(this), os()), !A(this, D, nn).call(this)) {
    for (const l of a(this, Je))
      a(this, ze).delete(l), R(l, H), this.schedule(l);
    for (const l of a(this, ze))
      R(l, Ae), this.schedule(l);
  }
  const t = a(this, ee);
  w(this, ee, []), this.apply();
  var n = mt = [], r = [], i = tn = [];
  for (const l of t)
    try {
      A(this, D, Nn).call(this, l, n, r);
    } catch (u) {
      throw Mr(l), u;
    }
  if (S = null, i.length > 0) {
    var s = dn.ensure();
    for (const l of i)
      s.schedule(l);
  }
  if (mt = null, tn = null, A(this, D, nn).call(this) || A(this, D, Nr).call(this)) {
    A(this, D, sn).call(this, r), A(this, D, sn).call(this, n);
    for (const [l, u] of a(this, Ee))
      Or(l, u);
  } else {
    a(this, Ie).size === 0 && Qe.delete(this), a(this, Je).clear(), a(this, ze).clear();
    for (const l of a(this, bt)) l(this);
    a(this, bt).clear(), sr(r), sr(n), a(this, qt)?.resolve();
  }
  var f = (
    /** @type {Batch | null} */
    /** @type {unknown} */
    S
  );
  if (a(this, ee).length > 0) {
    const l = f ?? (f = this);
    a(l, ee).push(...a(this, ee).filter((u) => !a(l, ee).includes(u)));
  }
  f !== null && (Qe.add(f), A(o = f, D, rn).call(o));
}, /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
Nn = function(t, n, r) {
  t.f ^= I;
  for (var i = t.first; i !== null; ) {
    var s = i.f, f = (s & (be | We)) !== 0, o = f && (s & I) !== 0, l = o || (s & G) !== 0 || a(this, Ee).has(i);
    if (!l && i.fn !== null) {
      f ? i.f ^= I : (s & Tt) !== 0 ? n.push(i) : Gt(i) && ((s & Te) !== 0 && a(this, ze).add(i), Ot(i));
      var u = i.first;
      if (u !== null) {
        i = u;
        continue;
      }
    }
    for (; i !== null; ) {
      var c = i.next;
      if (c !== null) {
        i = c;
        break;
      }
      i = i.parent;
    }
  }
}, /**
 * @param {Effect[]} effects
 */
sn = function(t) {
  for (var n = 0; n < t.length; n += 1)
    Ar(t[n], a(this, Je), a(this, ze));
}, fs = function() {
  var c, _, v;
  for (const h of Qe) {
    var t = h.id < this.id, n = [];
    for (const [p, [m, d]] of this.current) {
      if (h.current.has(p)) {
        var r = (
          /** @type {[any, boolean]} */
          h.current.get(p)[0]
        );
        if (t && m !== r)
          h.current.set(p, [m, d]);
        else
          continue;
      }
      n.push(p);
    }
    var i = [...h.current.keys()].filter((p) => !this.current.has(p));
    if (i.length === 0)
      t && h.discard();
    else if (n.length > 0) {
      if (t)
        for (const p of a(this, Et))
          h.unskip_effect(p, (m) => {
            var d;
            (m.f & (Te | jt)) !== 0 ? h.schedule(m) : A(d = h, D, sn).call(d, [m]);
          });
      h.activate();
      var s = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Map();
      for (var o of n)
        Cr(o, i, s, f);
      f = /* @__PURE__ */ new Map();
      var l = [...h.current.keys()].filter(
        (p) => this.current.has(p) ? (
          /** @type {[any, boolean]} */
          this.current.get(p)[0] !== p
        ) : !0
      );
      for (const p of a(this, Vt))
        (p.f & (ce | G | Tn)) === 0 && Ln(p, l, f) && ((p.f & (jt | Te)) !== 0 ? (R(p, H), h.schedule(p)) : a(h, Je).add(p));
      if (a(h, ee).length > 0) {
        h.apply();
        for (var u of a(h, ee))
          A(c = h, D, Nn).call(c, u, [], []);
        w(h, ee, []);
      }
      h.deactivate();
    }
  }
  for (const h of Qe)
    a(h, nt).has(this) && (a(h, nt).delete(this), a(h, nt).size === 0 && !A(_ = h, D, nn).call(_) && (h.activate(), A(v = h, D, rn).call(v)));
};
let ct = dn;
function os() {
  try {
    Ji();
  } catch (e) {
    Ye(e, An);
  }
}
let Fe = null;
function sr(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var r = e[n++];
      if ((r.f & (ce | G)) === 0 && Gt(r) && (Fe = /* @__PURE__ */ new Set(), Ot(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && Ur(r), Fe?.size > 0)) {
        lt.clear();
        for (const i of Fe) {
          if ((i.f & (ce | G)) !== 0) continue;
          const s = [i];
          let f = i.parent;
          for (; f !== null; )
            Fe.has(f) && (Fe.delete(f), s.push(f)), f = f.parent;
          for (let o = s.length - 1; o >= 0; o--) {
            const l = s[o];
            (l.f & (ce | G)) === 0 && Ot(l);
          }
        }
        Fe.clear();
      }
    }
    Fe = null;
  }
}
function Cr(e, t, n, r) {
  if (!n.has(e) && (n.add(e), e.reactions !== null))
    for (const i of e.reactions) {
      const s = i.f;
      (s & B) !== 0 ? Cr(
        /** @type {Derived} */
        i,
        t,
        n,
        r
      ) : (s & (jt | Te)) !== 0 && (s & H) === 0 && Ln(i, t, r) && (R(i, H), qn(
        /** @type {Effect} */
        i
      ));
    }
}
function Ln(e, t, n) {
  const r = n.get(e);
  if (r !== void 0) return r;
  if (e.deps !== null)
    for (const i of e.deps) {
      if (St.call(t, i))
        return !0;
      if ((i.f & B) !== 0 && Ln(
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
function qn(e) {
  S.schedule(e);
}
function Or(e, t) {
  if (!((e.f & be) !== 0 && (e.f & I) !== 0)) {
    (e.f & H) !== 0 ? t.d.push(e) : (e.f & Ae) !== 0 && t.m.push(e), R(e, I);
    for (var n = e.first; n !== null; )
      Or(n, t), n = n.next;
  }
}
function Mr(e) {
  R(e, I);
  for (var t = e.first; t !== null; )
    Mr(t), t = t.next;
}
function us(e) {
  let t = 0, n = dt(0), r;
  return () => {
    Bn() && (g(n), Ps(() => (t === 0 && (r = qs(() => e(() => zt(n)))), t += 1, () => {
      at(() => {
        t -= 1, t === 0 && (r?.(), r = void 0, zt(n));
      });
    })));
  };
}
var cs = At | Mt;
function ds(e, t, n, r) {
  new vs(e, t, n, r);
}
var ae, zn, le, rt, K, fe, Y, te, je, it, Ue, kt, Ht, Bt, Le, vn, M, hs, ps, _s, Cn, an, ln, On, Mn;
class vs {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(t, n, r, i) {
    y(this, M);
    /** @type {Boundary | null} */
    _e(this, "parent");
    _e(this, "is_pending", !1);
    /**
     * API-level transformError transform function. Transforms errors before they reach the `failed` snippet.
     * Inherited from parent boundary, or defaults to identity.
     * @type {(error: unknown) => unknown}
     */
    _e(this, "transform_error");
    /** @type {TemplateNode} */
    y(this, ae);
    /** @type {TemplateNode | null} */
    y(this, zn, null);
    /** @type {BoundaryProps} */
    y(this, le);
    /** @type {((anchor: Node) => void)} */
    y(this, rt);
    /** @type {Effect} */
    y(this, K);
    /** @type {Effect | null} */
    y(this, fe, null);
    /** @type {Effect | null} */
    y(this, Y, null);
    /** @type {Effect | null} */
    y(this, te, null);
    /** @type {DocumentFragment | null} */
    y(this, je, null);
    y(this, it, 0);
    y(this, Ue, 0);
    y(this, kt, !1);
    /** @type {Set<Effect>} */
    y(this, Ht, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    y(this, Bt, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    y(this, Le, null);
    y(this, vn, us(() => (w(this, Le, dt(a(this, it))), () => {
      w(this, Le, null);
    })));
    w(this, ae, t), w(this, le, n), w(this, rt, (s) => {
      var f = (
        /** @type {Effect} */
        x
      );
      f.b = this, f.f |= Sn, r(s);
    }), this.parent = /** @type {Effect} */
    x.b, this.transform_error = i ?? this.parent?.transform_error ?? ((s) => s), w(this, K, Jn(() => {
      A(this, M, Cn).call(this);
    }, cs));
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    Ar(t, a(this, Ht), a(this, Bt));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!a(this, le).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  update_pending_count(t, n) {
    A(this, M, On).call(this, t, n), w(this, it, a(this, it) + t), !(!a(this, Le) || a(this, kt)) && (w(this, kt, !0), at(() => {
      w(this, kt, !1), a(this, Le) && Ct(a(this, Le), a(this, it));
    }));
  }
  get_effect_pending() {
    return a(this, vn).call(this), g(
      /** @type {Source<number>} */
      a(this, Le)
    );
  }
  /** @param {unknown} error */
  error(t) {
    if (!a(this, le).onerror && !a(this, le).failed)
      throw t;
    S?.is_fork ? (a(this, fe) && S.skip_effect(a(this, fe)), a(this, Y) && S.skip_effect(a(this, Y)), a(this, te) && S.skip_effect(a(this, te)), S.on_fork_commit(() => {
      A(this, M, Mn).call(this, t);
    })) : A(this, M, Mn).call(this, t);
  }
}
ae = new WeakMap(), zn = new WeakMap(), le = new WeakMap(), rt = new WeakMap(), K = new WeakMap(), fe = new WeakMap(), Y = new WeakMap(), te = new WeakMap(), je = new WeakMap(), it = new WeakMap(), Ue = new WeakMap(), kt = new WeakMap(), Ht = new WeakMap(), Bt = new WeakMap(), Le = new WeakMap(), vn = new WeakMap(), M = new WeakSet(), hs = function() {
  try {
    w(this, fe, oe(() => a(this, rt).call(this, a(this, ae))));
  } catch (t) {
    this.error(t);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
ps = function(t) {
  const n = a(this, le).failed;
  n && w(this, te, oe(() => {
    n(
      a(this, ae),
      () => t,
      () => () => {
      }
    );
  }));
}, _s = function() {
  const t = a(this, le).pending;
  t && (this.is_pending = !0, w(this, Y, oe(() => t(a(this, ae)))), at(() => {
    var n = w(this, je, document.createDocumentFragment()), r = Ke();
    n.append(r), w(this, fe, A(this, M, ln).call(this, () => oe(() => a(this, rt).call(this, r)))), a(this, Ue) === 0 && (a(this, ae).before(n), w(this, je, null), ft(
      /** @type {Effect} */
      a(this, Y),
      () => {
        w(this, Y, null);
      }
    ), A(this, M, an).call(
      this,
      /** @type {Batch} */
      S
    ));
  }));
}, Cn = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), w(this, Ue, 0), w(this, it, 0), w(this, fe, oe(() => {
      a(this, rt).call(this, a(this, ae));
    })), a(this, Ue) > 0) {
      var t = w(this, je, document.createDocumentFragment());
      Gn(a(this, fe), t);
      const n = (
        /** @type {(anchor: Node) => void} */
        a(this, le).pending
      );
      w(this, Y, oe(() => n(a(this, ae))));
    } else
      A(this, M, an).call(
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
an = function(t) {
  this.is_pending = !1, t.transfer_effects(a(this, Ht), a(this, Bt));
}, /**
 * @template T
 * @param {() => T} fn
 */
ln = function(t) {
  var n = x, r = E, i = ve;
  Ne(a(this, K)), he(a(this, K)), Nt(a(this, K).ctx);
  try {
    return ct.ensure(), t();
  } catch (s) {
    return Sr(s), null;
  } finally {
    Ne(n), he(r), Nt(i);
  }
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 * @param {Batch} batch
 */
On = function(t, n) {
  var r;
  if (!this.has_pending_snippet()) {
    this.parent && A(r = this.parent, M, On).call(r, t, n);
    return;
  }
  w(this, Ue, a(this, Ue) + t), a(this, Ue) === 0 && (A(this, M, an).call(this, n), a(this, Y) && ft(a(this, Y), () => {
    w(this, Y, null);
  }), a(this, je) && (a(this, ae).before(a(this, je)), w(this, je, null)));
}, /**
 * @param {unknown} error
 */
Mn = function(t) {
  a(this, fe) && (X(a(this, fe)), w(this, fe, null)), a(this, Y) && (X(a(this, Y)), w(this, Y, null)), a(this, te) && (X(a(this, te)), w(this, te, null));
  var n = a(this, le).onerror;
  let r = a(this, le).failed;
  var i = !1, s = !1;
  const f = () => {
    if (i) {
      rs();
      return;
    }
    i = !0, s && Ki(), a(this, te) !== null && ft(a(this, te), () => {
      w(this, te, null);
    }), A(this, M, ln).call(this, () => {
      A(this, M, Cn).call(this);
    });
  }, o = (l) => {
    try {
      s = !0, n?.(l, f), s = !1;
    } catch (u) {
      Ye(u, a(this, K) && a(this, K).parent);
    }
    r && w(this, te, A(this, M, ln).call(this, () => {
      try {
        return oe(() => {
          var u = (
            /** @type {Effect} */
            x
          );
          u.b = this, u.f |= Sn, r(
            a(this, ae),
            () => l,
            () => f
          );
        });
      } catch (u) {
        return Ye(
          u,
          /** @type {Effect} */
          a(this, K).parent
        ), null;
      }
    }));
  };
  at(() => {
    var l;
    try {
      l = this.transform_error(t);
    } catch (u) {
      Ye(u, a(this, K) && a(this, K).parent);
      return;
    }
    l !== null && typeof l == "object" && typeof /** @type {any} */
    l.then == "function" ? l.then(
      o,
      /** @param {unknown} e */
      (u) => Ye(u, a(this, K) && a(this, K).parent)
    ) : o(l);
  });
};
function gs(e, t, n, r) {
  const i = Vn;
  var s = e.filter((v) => !v.settled);
  if (n.length === 0 && s.length === 0) {
    r(t.map(i));
    return;
  }
  var f = (
    /** @type {Effect} */
    x
  ), o = ys(), l = s.length === 1 ? s[0].promise : s.length > 1 ? Promise.all(s.map((v) => v.promise)) : null;
  function u(v) {
    o();
    try {
      r(v);
    } catch (h) {
      (f.f & ce) === 0 && Ye(h, f);
    }
    un();
  }
  if (n.length === 0) {
    l.then(() => u(t.map(i)));
    return;
  }
  var c = Rr();
  function _() {
    Promise.all(n.map((v) => /* @__PURE__ */ ms(v))).then((v) => u([...t.map(i), ...v])).catch((v) => Ye(v, f)).finally(() => c());
  }
  l ? l.then(() => {
    o(), _(), un();
  }) : _();
}
function ys() {
  var e = (
    /** @type {Effect} */
    x
  ), t = E, n = ve, r = (
    /** @type {Batch} */
    S
  );
  return function(s = !0) {
    Ne(e), he(t), Nt(n), s && (e.f & ce) === 0 && (r?.activate(), r?.apply());
  };
}
function un(e = !0) {
  Ne(null), he(null), Nt(null), e && S?.deactivate();
}
function Rr() {
  var e = (
    /** @type {Effect} */
    x
  ), t = (
    /** @type {Boundary} */
    e.b
  ), n = (
    /** @type {Batch} */
    S
  ), r = t.is_rendered();
  return t.update_pending_count(1, n), n.increment(r, e), (i = !1) => {
    t.update_pending_count(-1, n), n.decrement(r, e, i);
  };
}
// @__NO_SIDE_EFFECTS__
function Vn(e) {
  var t = B | H;
  return x !== null && (x.f |= Mt), {
    ctx: ve,
    deps: null,
    effects: null,
    equals: br,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      z
    ),
    wv: 0,
    parent: x,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function ms(e, t, n) {
  let r = (
    /** @type {Effect | null} */
    x
  );
  r === null && Li();
  var i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), s = dt(
    /** @type {V} */
    z
  ), f = !E, o = /* @__PURE__ */ new Map();
  return Fs(() => {
    var l = (
      /** @type {Effect} */
      x
    ), u = gr();
    i = u.promise;
    try {
      Promise.resolve(e()).then(u.resolve, u.reject).finally(un);
    } catch (h) {
      u.reject(h), un();
    }
    var c = (
      /** @type {Batch} */
      S
    );
    if (f) {
      if ((l.f & vt) !== 0)
        var _ = Rr();
      if (
        /** @type {Boundary} */
        r.b.is_rendered()
      )
        o.get(c)?.reject(Pe), o.delete(c);
      else {
        for (const h of o.values())
          h.reject(Pe);
        o.clear();
      }
      o.set(c, u);
    }
    const v = (h, p = void 0) => {
      if (_) {
        var m = p === Pe;
        _(m);
      }
      if (!(p === Pe || (l.f & ce) !== 0)) {
        if (c.activate(), p)
          s.f |= Ge, Ct(s, p);
        else {
          (s.f & Ge) !== 0 && (s.f ^= Ge), Ct(s, h);
          for (const [d, b] of o) {
            if (o.delete(d), d === c) break;
            b.reject(Pe);
          }
        }
        c.deactivate();
      }
    };
    u.promise.then(v, (h) => v(null, h || "unknown"));
  }), Os(() => {
    for (const l of o.values())
      l.reject(Pe);
  }), new Promise((l) => {
    function u(c) {
      function _() {
        c === i ? l(s) : u(i);
      }
      c.then(_, _);
    }
    u(i);
  });
}
// @__NO_SIDE_EFFECTS__
function bs(e) {
  const t = /* @__PURE__ */ Vn(e);
  return Kr(t), t;
}
// @__NO_SIDE_EFFECTS__
function ws(e) {
  const t = /* @__PURE__ */ Vn(e);
  return t.equals = wr, t;
}
function Es(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      X(
        /** @type {Effect} */
        t[n]
      );
  }
}
function Hn(e) {
  var t, n = x, r = e.parent;
  if (!Xe && r !== null && (r.f & (ce | G)) !== 0)
    return ns(), e.v;
  Ne(r);
  try {
    e.f &= ~ut, Es(e), t = Qr(e);
  } finally {
    Ne(n);
  }
  return t;
}
function Dr(e) {
  var t = Hn(e);
  if (!e.equals(t) && (e.wv = Xr(), (!S?.is_fork || e.deps === null) && (S !== null ? S.capture(e, t, !0) : e.v = t, e.deps === null))) {
    R(e, I);
    return;
  }
  Xe || (ye !== null ? (Bn() || S?.is_fork) && ye.set(e, t) : jn(e));
}
function xs(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      (t.teardown || t.ac) && (t.teardown?.(), t.ac?.abort(Pe), t.teardown = Pi, t.ac = null, Lt(t, 0), Un(t));
}
function Fr(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      t.teardown && Ot(t);
}
let Rn = /* @__PURE__ */ new Set();
const lt = /* @__PURE__ */ new Map();
let Pr = !1;
function dt(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: br,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function j(e, t) {
  const n = dt(e);
  return Kr(n), n;
}
// @__NO_SIDE_EFFECTS__
function ks(e, t = !1, n = !0) {
  const r = dt(e);
  return t || (r.equals = wr), r;
}
function N(e, t, n = !1) {
  E !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!me || (E.f & Tn) !== 0) && kr() && (E.f & (B | Te | jt | Tn)) !== 0 && (de === null || !St.call(de, e)) && Gi();
  let r = n ? ke(t) : t;
  return Ct(e, r, tn);
}
function Ct(e, t, n = null) {
  if (!e.equals(t)) {
    lt.set(e, Xe ? t : e.v);
    var r = ct.ensure();
    if (r.capture(e, t), (e.f & B) !== 0) {
      const i = (
        /** @type {Derived} */
        e
      );
      (e.f & H) !== 0 && Hn(i), ye === null && jn(i);
    }
    e.wv = Xr(), Ir(e, H, n), x !== null && (x.f & I) !== 0 && (x.f & (be | We)) === 0 && (se === null ? js([e]) : se.push(e)), !r.is_fork && Rn.size > 0 && !Pr && Ss();
  }
  return t;
}
function Ss() {
  Pr = !1;
  for (const e of Rn)
    (e.f & I) !== 0 && R(e, Ae), Gt(e) && Ot(e);
  Rn.clear();
}
function zt(e) {
  N(e, e.v + 1);
}
function Ir(e, t, n) {
  var r = e.reactions;
  if (r !== null)
    for (var i = r.length, s = 0; s < i; s++) {
      var f = r[s], o = f.f, l = (o & H) === 0;
      if (l && R(f, t), (o & B) !== 0) {
        var u = (
          /** @type {Derived} */
          f
        );
        ye?.delete(u), (o & ut) === 0 && (o & ue && (x === null || (x.f & on) === 0) && (f.f |= ut), Ir(u, Ae, n));
      } else if (l) {
        var c = (
          /** @type {Effect} */
          f
        );
        (o & Te) !== 0 && Fe !== null && Fe.add(c), n !== null ? n.push(c) : qn(c);
      }
    }
}
function ke(e) {
  if (typeof e != "object" || e === null || xn in e)
    return e;
  const t = Fi(e);
  if (t !== Ri && t !== Di)
    return e;
  var n = /* @__PURE__ */ new Map(), r = _r(e), i = /* @__PURE__ */ j(0), s = ot, f = (o) => {
    if (ot === s)
      return o();
    var l = E, u = ot;
    he(null), or(s);
    var c = o();
    return he(l), or(u), c;
  };
  return r && n.set("length", /* @__PURE__ */ j(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(o, l, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && Ui();
        var c = n.get(l);
        return c === void 0 ? f(() => {
          var _ = /* @__PURE__ */ j(u.value);
          return n.set(l, _), _;
        }) : N(c, u.value, !0), !0;
      },
      deleteProperty(o, l) {
        var u = n.get(l);
        if (u === void 0) {
          if (l in o) {
            const c = f(() => /* @__PURE__ */ j(z));
            n.set(l, c), zt(i);
          }
        } else
          N(u, z), zt(i);
        return !0;
      },
      get(o, l, u) {
        if (l === xn)
          return e;
        var c = n.get(l), _ = l in o;
        if (c === void 0 && (!_ || It(o, l)?.writable) && (c = f(() => {
          var h = ke(_ ? o[l] : z), p = /* @__PURE__ */ j(h);
          return p;
        }), n.set(l, c)), c !== void 0) {
          var v = g(c);
          return v === z ? void 0 : v;
        }
        return Reflect.get(o, l, u);
      },
      getOwnPropertyDescriptor(o, l) {
        var u = Reflect.getOwnPropertyDescriptor(o, l);
        if (u && "value" in u) {
          var c = n.get(l);
          c && (u.value = g(c));
        } else if (u === void 0) {
          var _ = n.get(l), v = _?.v;
          if (_ !== void 0 && v !== z)
            return {
              enumerable: !0,
              configurable: !0,
              value: v,
              writable: !0
            };
        }
        return u;
      },
      has(o, l) {
        if (l === xn)
          return !0;
        var u = n.get(l), c = u !== void 0 && u.v !== z || Reflect.has(o, l);
        if (u !== void 0 || x !== null && (!c || It(o, l)?.writable)) {
          u === void 0 && (u = f(() => {
            var v = c ? ke(o[l]) : z, h = /* @__PURE__ */ j(v);
            return h;
          }), n.set(l, u));
          var _ = g(u);
          if (_ === z)
            return !1;
        }
        return c;
      },
      set(o, l, u, c) {
        var _ = n.get(l), v = l in o;
        if (r && l === "length")
          for (var h = u; h < /** @type {Source<number>} */
          _.v; h += 1) {
            var p = n.get(h + "");
            p !== void 0 ? N(p, z) : h in o && (p = f(() => /* @__PURE__ */ j(z)), n.set(h + "", p));
          }
        if (_ === void 0)
          (!v || It(o, l)?.writable) && (_ = f(() => /* @__PURE__ */ j(void 0)), N(_, ke(u)), n.set(l, _));
        else {
          v = _.v !== z;
          var m = f(() => ke(u));
          N(_, m);
        }
        var d = Reflect.getOwnPropertyDescriptor(o, l);
        if (d?.set && d.set.call(c, u), !v) {
          if (r && typeof l == "string") {
            var b = (
              /** @type {Source<number>} */
              n.get("length")
            ), L = Number(l);
            Number.isInteger(L) && L >= b.v && N(b, L + 1);
          }
          zt(i);
        }
        return !0;
      },
      ownKeys(o) {
        g(i);
        var l = Reflect.ownKeys(o).filter((_) => {
          var v = n.get(_);
          return v === void 0 || v.v !== z;
        });
        for (var [u, c] of n)
          c.v !== z && !(u in o) && l.push(u);
        return l;
      },
      setPrototypeOf() {
        Yi();
      }
    }
  );
}
var ar, zr, jr, Lr;
function Ts() {
  if (ar === void 0) {
    ar = window, zr = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    jr = It(t, "firstChild").get, Lr = It(t, "nextSibling").get, nr(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), nr(n) && (n.__t = void 0);
  }
}
function Ke(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function cn(e) {
  return (
    /** @type {TemplateNode | null} */
    jr.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function Yt(e) {
  return (
    /** @type {TemplateNode | null} */
    Lr.call(e)
  );
}
function O(e, t) {
  return /* @__PURE__ */ cn(e);
}
function lr(e, t = !1) {
  {
    var n = /* @__PURE__ */ cn(e);
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ Yt(n) : n;
  }
}
function P(e, t = 1, n = !1) {
  let r = e;
  for (; t--; )
    r = /** @type {TemplateNode} */
    /* @__PURE__ */ Yt(r);
  return r;
}
function As(e) {
  e.textContent = "";
}
function qr() {
  return !1;
}
function Vr(e, t, n) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElementNS(ts, e, void 0)
  );
}
function Hr(e) {
  var t = E, n = x;
  he(null), Ne(null);
  try {
    return e();
  } finally {
    he(t), Ne(n);
  }
}
function Ns(e) {
  x === null && (E === null && Bi(), Hi()), Xe && Vi();
}
function Cs(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function qe(e, t) {
  var n = x;
  n !== null && (n.f & G) !== 0 && (e |= G);
  var r = {
    ctx: ve,
    deps: null,
    nodes: null,
    f: e | H | ue,
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
  S?.register_created_effect(r);
  var i = r;
  if ((e & Tt) !== 0)
    mt !== null ? mt.push(r) : ct.ensure().schedule(r);
  else if (t !== null) {
    try {
      Ot(r);
    } catch (f) {
      throw X(r), f;
    }
    i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && // either `null`, or a singular child
    (i.f & Mt) === 0 && (i = i.first, (e & Te) !== 0 && (e & At) !== 0 && i !== null && (i.f |= At));
  }
  if (i !== null && (i.parent = n, n !== null && Cs(i, n), E !== null && (E.f & B) !== 0 && (e & We) === 0)) {
    var s = (
      /** @type {Derived} */
      E
    );
    (s.effects ?? (s.effects = [])).push(i);
  }
  return r;
}
function Bn() {
  return E !== null && !me;
}
function Os(e) {
  const t = qe(_n, null);
  return R(t, I), t.teardown = e, t;
}
function Ms(e) {
  Ns();
  var t = (
    /** @type {Effect} */
    x.f
  ), n = !E && (t & be) !== 0 && (t & vt) === 0;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      ve
    );
    (r.e ?? (r.e = [])).push(e);
  } else
    return Br(e);
}
function Br(e) {
  return qe(Tt | ji, e);
}
function Rs(e) {
  ct.ensure();
  const t = qe(We | Mt, e);
  return (n = {}) => new Promise((r) => {
    n.outro ? ft(t, () => {
      X(t), r(void 0);
    }) : (X(t), r(void 0));
  });
}
function Ds(e) {
  return qe(Tt, e);
}
function Fs(e) {
  return qe(jt | Mt, e);
}
function Ps(e, t = 0) {
  return qe(_n | t, e);
}
function He(e, t = [], n = [], r = []) {
  gs(r, t, n, (i) => {
    qe(_n, () => e(...i.map(g)));
  });
}
function Jn(e, t = 0) {
  var n = qe(Te | t, e);
  return n;
}
function oe(e) {
  return qe(be | Mt, e);
}
function Jr(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = Xe, r = E;
    fr(!0), he(null);
    try {
      t.call(null);
    } finally {
      fr(n), he(r);
    }
  }
}
function Un(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const i = n.ac;
    i !== null && Hr(() => {
      i.abort(Pe);
    });
    var r = n.next;
    (n.f & We) !== 0 ? n.parent = null : X(n, t), n = r;
  }
}
function Is(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & be) === 0 && X(t), t = n;
  }
}
function X(e, t = !0) {
  var n = !1;
  (t || (e.f & zi) !== 0) && e.nodes !== null && e.nodes.end !== null && (zs(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), n = !0), R(e, rr), Un(e, t && !n), Lt(e, 0);
  var r = e.nodes && e.nodes.t;
  if (r !== null)
    for (const s of r)
      s.stop();
  Jr(e), e.f ^= rr, e.f |= ce;
  var i = e.parent;
  i !== null && i.first !== null && Ur(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function zs(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : /* @__PURE__ */ Yt(e);
    e.remove(), e = n;
  }
}
function Ur(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function ft(e, t, n = !0) {
  var r = [];
  Yr(e, r, !0);
  var i = () => {
    n && X(e), t && t();
  }, s = r.length;
  if (s > 0) {
    var f = () => --s || i();
    for (var o of r)
      o.out(f);
  } else
    i();
}
function Yr(e, t, n) {
  if ((e.f & G) === 0) {
    e.f ^= G;
    var r = e.nodes && e.nodes.t;
    if (r !== null)
      for (const o of r)
        (o.is_global || n) && t.push(o);
    for (var i = e.first; i !== null; ) {
      var s = i.next;
      if ((i.f & We) === 0) {
        var f = (i.f & At) !== 0 || // If this is a branch effect without a block effect parent,
        // it means the parent block effect was pruned. In that case,
        // transparency information was transferred to the branch effect.
        (i.f & be) !== 0 && (e.f & Te) !== 0;
        Yr(i, t, f ? n : !1);
      }
      i = s;
    }
  }
}
function Yn(e) {
  Gr(e, !0);
}
function Gr(e, t) {
  if ((e.f & G) !== 0) {
    e.f ^= G, (e.f & I) === 0 && (R(e, H), ct.ensure().schedule(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, i = (n.f & At) !== 0 || (n.f & be) !== 0;
      Gr(n, i ? t : !1), n = r;
    }
    var s = e.nodes && e.nodes.t;
    if (s !== null)
      for (const f of s)
        (f.is_global || t) && f.in();
  }
}
function Gn(e, t) {
  if (e.nodes)
    for (var n = e.nodes.start, r = e.nodes.end; n !== null; ) {
      var i = n === r ? null : /* @__PURE__ */ Yt(n);
      t.append(n), n = i;
    }
}
let fn = !1, Xe = !1;
function fr(e) {
  Xe = e;
}
let E = null, me = !1;
function he(e) {
  E = e;
}
let x = null;
function Ne(e) {
  x = e;
}
let de = null;
function Kr(e) {
  E !== null && (de === null ? de = [e] : de.push(e));
}
let W = null, $ = 0, se = null;
function js(e) {
  se = e;
}
let Wr = 1, $e = 0, ot = $e;
function or(e) {
  ot = e;
}
function Xr() {
  return ++Wr;
}
function Gt(e) {
  var t = e.f;
  if ((t & H) !== 0)
    return !0;
  if (t & B && (e.f &= ~ut), (t & Ae) !== 0) {
    for (var n = (
      /** @type {Value[]} */
      e.deps
    ), r = n.length, i = 0; i < r; i++) {
      var s = n[i];
      if (Gt(
        /** @type {Derived} */
        s
      ) && Dr(
        /** @type {Derived} */
        s
      ), s.wv > e.wv)
        return !0;
    }
    (t & ue) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    ye === null && R(e, I);
  }
  return !1;
}
function Zr(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null && !(de !== null && St.call(de, e)))
    for (var i = 0; i < r.length; i++) {
      var s = r[i];
      (s.f & B) !== 0 ? Zr(
        /** @type {Derived} */
        s,
        t,
        !1
      ) : t === s && (n ? R(s, H) : (s.f & I) !== 0 && R(s, Ae), qn(
        /** @type {Effect} */
        s
      ));
    }
}
function Qr(e) {
  var m;
  var t = W, n = $, r = se, i = E, s = de, f = ve, o = me, l = ot, u = e.f;
  W = /** @type {null | Value[]} */
  null, $ = 0, se = null, E = (u & (be | We)) === 0 ? e : null, de = null, Nt(e.ctx), me = !1, ot = ++$e, e.ac !== null && (Hr(() => {
    e.ac.abort(Pe);
  }), e.ac = null);
  try {
    e.f |= on;
    var c = (
      /** @type {Function} */
      e.fn
    ), _ = c();
    e.f |= vt;
    var v = e.deps, h = S?.is_fork;
    if (W !== null) {
      var p;
      if (h || Lt(e, $), v !== null && $ > 0)
        for (v.length = $ + W.length, p = 0; p < W.length; p++)
          v[$ + p] = W[p];
      else
        e.deps = v = W;
      if (Bn() && (e.f & ue) !== 0)
        for (p = $; p < v.length; p++)
          ((m = v[p]).reactions ?? (m.reactions = [])).push(e);
    } else !h && v !== null && $ < v.length && (Lt(e, $), v.length = $);
    if (kr() && se !== null && !me && v !== null && (e.f & (B | Ae | H)) === 0)
      for (p = 0; p < /** @type {Source[]} */
      se.length; p++)
        Zr(
          se[p],
          /** @type {Effect} */
          e
        );
    if (i !== null && i !== e) {
      if ($e++, i.deps !== null)
        for (let d = 0; d < n; d += 1)
          i.deps[d].rv = $e;
      if (t !== null)
        for (const d of t)
          d.rv = $e;
      se !== null && (r === null ? r = se : r.push(.../** @type {Source[]} */
      se));
    }
    return (e.f & Ge) !== 0 && (e.f ^= Ge), _;
  } catch (d) {
    return Sr(d);
  } finally {
    e.f ^= on, W = t, $ = n, se = r, E = i, de = s, Nt(f), me = o, ot = l;
  }
}
function Ls(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = Oi.call(n, e);
    if (r !== -1) {
      var i = n.length - 1;
      i === 0 ? n = t.reactions = null : (n[r] = n[i], n.pop());
    }
  }
  if (n === null && (t.f & B) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (W === null || !St.call(W, t))) {
    var s = (
      /** @type {Derived} */
      t
    );
    (s.f & ue) !== 0 && (s.f ^= ue, s.f &= ~ut), s.v !== z && jn(s), xs(s), Lt(s, 0);
  }
}
function Lt(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      Ls(e, n[r]);
}
function Ot(e) {
  var t = e.f;
  if ((t & ce) === 0) {
    R(e, I);
    var n = x, r = fn;
    x = e, fn = !0;
    try {
      (t & (Te | yr)) !== 0 ? Is(e) : Un(e), Jr(e);
      var i = Qr(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = Wr;
      var s;
    } finally {
      fn = r, x = n;
    }
  }
}
function g(e) {
  var t = e.f, n = (t & B) !== 0;
  if (E !== null && !me) {
    var r = x !== null && (x.f & ce) !== 0;
    if (!r && (de === null || !St.call(de, e))) {
      var i = E.deps;
      if ((E.f & on) !== 0)
        e.rv < $e && (e.rv = $e, W === null && i !== null && i[$] === e ? $++ : W === null ? W = [e] : W.push(e));
      else {
        (E.deps ?? (E.deps = [])).push(e);
        var s = e.reactions;
        s === null ? e.reactions = [E] : St.call(s, E) || s.push(E);
      }
    }
  }
  if (Xe && lt.has(e))
    return lt.get(e);
  if (n) {
    var f = (
      /** @type {Derived} */
      e
    );
    if (Xe) {
      var o = f.v;
      return ((f.f & I) === 0 && f.reactions !== null || ei(f)) && (o = Hn(f)), lt.set(f, o), o;
    }
    var l = (f.f & ue) === 0 && !me && E !== null && (fn || (E.f & ue) !== 0), u = (f.f & vt) === 0;
    Gt(f) && (l && (f.f |= ue), Dr(f)), l && !u && (Fr(f), $r(f));
  }
  if (ye?.has(e))
    return ye.get(e);
  if ((e.f & Ge) !== 0)
    throw e.v;
  return e.v;
}
function $r(e) {
  if (e.f |= ue, e.deps !== null)
    for (const t of e.deps)
      (t.reactions ?? (t.reactions = [])).push(e), (t.f & B) !== 0 && (t.f & ue) === 0 && (Fr(
        /** @type {Derived} */
        t
      ), $r(
        /** @type {Derived} */
        t
      ));
}
function ei(e) {
  if (e.v === z) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (lt.has(t) || (t.f & B) !== 0 && ei(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function qs(e) {
  var t = me;
  try {
    return me = !0, e();
  } finally {
    me = t;
  }
}
const Vs = ["touchstart", "touchmove"];
function Hs(e) {
  return Vs.includes(e);
}
const et = Symbol("events"), ti = /* @__PURE__ */ new Set(), Dn = /* @__PURE__ */ new Set();
function _t(e, t, n) {
  (t[et] ?? (t[et] = {}))[e] = n;
}
function Bs(e) {
  for (var t = 0; t < e.length; t++)
    ti.add(e[t]);
  for (var n of Dn)
    n(e);
}
let ur = null;
function cr(e) {
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), r = e.type, i = e.composedPath?.() || [], s = (
    /** @type {null | Element} */
    i[0] || e.target
  );
  ur = e;
  var f = 0, o = ur === e && e[et];
  if (o) {
    var l = i.indexOf(o);
    if (l !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e[et] = t;
      return;
    }
    var u = i.indexOf(t);
    if (u === -1)
      return;
    l <= u && (f = l);
  }
  if (s = /** @type {Element} */
  i[f] || e.target, s !== t) {
    Mi(e, "currentTarget", {
      configurable: !0,
      get() {
        return s || n;
      }
    });
    var c = E, _ = x;
    he(null), Ne(null);
    try {
      for (var v, h = []; s !== null; ) {
        var p = s.assignedSlot || s.parentNode || /** @type {any} */
        s.host || null;
        try {
          var m = s[et]?.[r];
          m != null && (!/** @type {any} */
          s.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === s) && m.call(s, e);
        } catch (d) {
          v ? h.push(d) : v = d;
        }
        if (e.cancelBubble || p === t || p === null)
          break;
        s = p;
      }
      if (v) {
        for (let d of h)
          queueMicrotask(() => {
            throw d;
          });
        throw v;
      }
    } finally {
      e[et] = t, delete e.currentTarget, he(c), Ne(_);
    }
  }
}
const Js = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (e) => e
  })
);
function Us(e) {
  return (
    /** @type {string} */
    Js?.createHTML(e) ?? e
  );
}
function Ys(e) {
  var t = Vr("template");
  return t.innerHTML = Us(e.replaceAll("<!>", "<!---->")), t.content;
}
function Fn(e, t) {
  var n = (
    /** @type {Effect} */
    x
  );
  n.nodes === null && (n.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function pe(e, t) {
  var n = (t & $i) !== 0, r = (t & es) !== 0, i, s = !e.startsWith("<!>");
  return () => {
    i === void 0 && (i = Ys(s ? e : "<!>" + e), n || (i = /** @type {TemplateNode} */
    /* @__PURE__ */ cn(i)));
    var f = (
      /** @type {TemplateNode} */
      r || zr ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (n) {
      var o = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ cn(f)
      ), l = (
        /** @type {TemplateNode} */
        f.lastChild
      );
      Fn(o, l);
    } else
      Fn(f, f);
    return f;
  };
}
function Gs() {
  var e = document.createDocumentFragment(), t = document.createComment(""), n = Ke();
  return e.append(t, n), Fn(t, n), e;
}
function Q(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function ie(e, t) {
  var n = t == null ? "" : typeof t == "object" ? `${t}` : t;
  n !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = n, e.nodeValue = `${n}`);
}
function Ks(e, t) {
  return Ws(e, t);
}
const $t = /* @__PURE__ */ new Map();
function Ws(e, { target: t, anchor: n, props: r = {}, events: i, context: s, intro: f = !0, transformError: o }) {
  Ts();
  var l = void 0, u = Rs(() => {
    var c = n ?? t.appendChild(Ke());
    ds(
      /** @type {TemplateNode} */
      c,
      {
        pending: () => {
        }
      },
      (h) => {
        Er({});
        var p = (
          /** @type {ComponentContext} */
          ve
        );
        s && (p.c = s), i && (r.$$events = i), l = e(h, r) || {}, xr();
      },
      o
    );
    var _ = /* @__PURE__ */ new Set(), v = (h) => {
      for (var p = 0; p < h.length; p++) {
        var m = h[p];
        if (!_.has(m)) {
          _.add(m);
          var d = Hs(m);
          for (const C of [t, document]) {
            var b = $t.get(C);
            b === void 0 && (b = /* @__PURE__ */ new Map(), $t.set(C, b));
            var L = b.get(m);
            L === void 0 ? (C.addEventListener(m, cr, { passive: d }), b.set(m, 1)) : b.set(m, L + 1);
          }
        }
      }
    };
    return v(pn(ti)), Dn.add(v), () => {
      for (var h of _)
        for (const d of [t, document]) {
          var p = (
            /** @type {Map<string, number>} */
            $t.get(d)
          ), m = (
            /** @type {number} */
            p.get(h)
          );
          --m == 0 ? (d.removeEventListener(h, cr), p.delete(h), p.size === 0 && $t.delete(d)) : p.set(h, m);
        }
      Dn.delete(v), c !== n && c.parentNode?.removeChild(c);
    };
  });
  return Pn.set(l, u), l;
}
let Pn = /* @__PURE__ */ new WeakMap();
function Xs(e, t) {
  const n = Pn.get(e);
  return n ? (Pn.delete(e), n(t)) : Promise.resolve();
}
var ge, xe, ne, st, Jt, Ut, hn;
class Zs {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, n = !0) {
    /** @type {TemplateNode} */
    _e(this, "anchor");
    /** @type {Map<Batch, Key>} */
    y(this, ge, /* @__PURE__ */ new Map());
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
    y(this, xe, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    y(this, ne, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    y(this, st, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    y(this, Jt, !0);
    /**
     * @param {Batch} batch
     */
    y(this, Ut, (t) => {
      if (a(this, ge).has(t)) {
        var n = (
          /** @type {Key} */
          a(this, ge).get(t)
        ), r = a(this, xe).get(n);
        if (r)
          Yn(r), a(this, st).delete(n);
        else {
          var i = a(this, ne).get(n);
          i && (a(this, xe).set(n, i.effect), a(this, ne).delete(n), i.fragment.lastChild.remove(), this.anchor.before(i.fragment), r = i.effect);
        }
        for (const [s, f] of a(this, ge)) {
          if (a(this, ge).delete(s), s === t)
            break;
          const o = a(this, ne).get(f);
          o && (X(o.effect), a(this, ne).delete(f));
        }
        for (const [s, f] of a(this, xe)) {
          if (s === n || a(this, st).has(s)) continue;
          const o = () => {
            if (Array.from(a(this, ge).values()).includes(s)) {
              var u = document.createDocumentFragment();
              Gn(f, u), u.append(Ke()), a(this, ne).set(s, { effect: f, fragment: u });
            } else
              X(f);
            a(this, st).delete(s), a(this, xe).delete(s);
          };
          a(this, Jt) || !r ? (a(this, st).add(s), ft(f, o, !1)) : o();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    y(this, hn, (t) => {
      a(this, ge).delete(t);
      const n = Array.from(a(this, ge).values());
      for (const [r, i] of a(this, ne))
        n.includes(r) || (X(i.effect), a(this, ne).delete(r));
    });
    this.anchor = t, w(this, Jt, n);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, n) {
    var r = (
      /** @type {Batch} */
      S
    ), i = qr();
    if (n && !a(this, xe).has(t) && !a(this, ne).has(t))
      if (i) {
        var s = document.createDocumentFragment(), f = Ke();
        s.append(f), a(this, ne).set(t, {
          effect: oe(() => n(f)),
          fragment: s
        });
      } else
        a(this, xe).set(
          t,
          oe(() => n(this.anchor))
        );
    if (a(this, ge).set(r, t), i) {
      for (const [o, l] of a(this, xe))
        o === t ? r.unskip_effect(l) : r.skip_effect(l);
      for (const [o, l] of a(this, ne))
        o === t ? r.unskip_effect(l.effect) : r.skip_effect(l.effect);
      r.oncommit(a(this, Ut)), r.ondiscard(a(this, hn));
    } else
      a(this, Ut).call(this, r);
  }
}
ge = new WeakMap(), xe = new WeakMap(), ne = new WeakMap(), st = new WeakMap(), Jt = new WeakMap(), Ut = new WeakMap(), hn = new WeakMap();
function gt(e, t, n = !1) {
  var r = new Zs(e), i = n ? At : 0;
  function s(f, o) {
    r.ensure(f, o);
  }
  Jn(() => {
    var f = !1;
    t((o, l = 0) => {
      f = !0, s(l, o);
    }), f || s(-1, null);
  }, i);
}
function Qs(e, t) {
  return t;
}
function $s(e, t, n) {
  for (var r = [], i = t.length, s, f = t.length, o = 0; o < i; o++) {
    let _ = t[o];
    ft(
      _,
      () => {
        if (s) {
          if (s.pending.delete(_), s.done.add(_), s.pending.size === 0) {
            var v = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            In(e, pn(s.done)), v.delete(s), v.size === 0 && (e.outrogroups = null);
          }
        } else
          f -= 1;
      },
      !1
    );
  }
  if (f === 0) {
    var l = r.length === 0 && n !== null;
    if (l) {
      var u = (
        /** @type {Element} */
        n
      ), c = (
        /** @type {Element} */
        u.parentNode
      );
      As(c), c.append(u), e.items.clear();
    }
    In(e, t, !l);
  } else
    s = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ?? (e.outrogroups = /* @__PURE__ */ new Set())).add(s);
}
function In(e, t, n = !0) {
  var r;
  if (e.pending.size > 0) {
    r = /* @__PURE__ */ new Set();
    for (const f of e.pending.values())
      for (const o of f)
        r.add(
          /** @type {EachItem} */
          e.items.get(o).e
        );
  }
  for (var i = 0; i < t.length; i++) {
    var s = t[i];
    if (r?.has(s)) {
      s.f |= Se;
      const f = document.createDocumentFragment();
      Gn(s, f);
    } else
      X(t[i], n);
  }
}
var dr;
function vr(e, t, n, r, i, s = null) {
  var f = e, o = /* @__PURE__ */ new Map(), l = (t & mr) !== 0;
  if (l) {
    var u = (
      /** @type {Element} */
      e
    );
    f = u.appendChild(Ke());
  }
  var c = null, _ = /* @__PURE__ */ ws(() => {
    var C = n();
    return _r(C) ? C : C == null ? [] : pn(C);
  }), v, h = /* @__PURE__ */ new Map(), p = !0;
  function m(C) {
    (L.effect.f & ce) === 0 && (L.pending.delete(C), L.fallback = c, ea(L, v, f, t, r), c !== null && (v.length === 0 ? (c.f & Se) === 0 ? Yn(c) : (c.f ^= Se, Pt(c, null, f)) : ft(c, () => {
      c = null;
    })));
  }
  function d(C) {
    L.pending.delete(C);
  }
  var b = Jn(() => {
    v = /** @type {V[]} */
    g(_);
    for (var C = v.length, J = /* @__PURE__ */ new Set(), re = (
      /** @type {Batch} */
      S
    ), Ce = qr(), q = 0; q < C; q += 1) {
      var Oe = v[q], Me = r(Oe, q), F = p ? null : o.get(Me);
      F ? (F.v && Ct(F.v, Oe), F.i && Ct(F.i, q), Ce && re.unskip_effect(F.e)) : (F = ta(
        o,
        p ? f : dr ?? (dr = Ke()),
        Oe,
        Me,
        q,
        i,
        t,
        n
      ), p || (F.e.f |= Se), o.set(Me, F)), J.add(Me);
    }
    if (C === 0 && s && !c && (p ? c = oe(() => s(f)) : (c = oe(() => s(dr ?? (dr = Ke()))), c.f |= Se)), C > J.size && qi(), !p)
      if (h.set(re, J), Ce) {
        for (const [gn, yn] of o)
          J.has(gn) || re.skip_effect(yn.e);
        re.oncommit(m), re.ondiscard(d);
      } else
        m(re);
    g(_);
  }), L = { effect: b, items: o, pending: h, outrogroups: null, fallback: c };
  p = !1;
}
function Ft(e) {
  for (; e !== null && (e.f & be) === 0; )
    e = e.next;
  return e;
}
function ea(e, t, n, r, i) {
  var s = (r & Zi) !== 0, f = t.length, o = e.items, l = Ft(e.effect.first), u, c = null, _, v = [], h = [], p, m, d, b;
  if (s)
    for (b = 0; b < f; b += 1)
      p = t[b], m = i(p, b), d = /** @type {EachItem} */
      o.get(m).e, (d.f & Se) === 0 && (d.nodes?.a?.measure(), (_ ?? (_ = /* @__PURE__ */ new Set())).add(d));
  for (b = 0; b < f; b += 1) {
    if (p = t[b], m = i(p, b), d = /** @type {EachItem} */
    o.get(m).e, e.outrogroups !== null)
      for (const F of e.outrogroups)
        F.pending.delete(d), F.done.delete(d);
    if ((d.f & G) !== 0 && (Yn(d), s && (d.nodes?.a?.unfix(), (_ ?? (_ = /* @__PURE__ */ new Set())).delete(d))), (d.f & Se) !== 0)
      if (d.f ^= Se, d === l)
        Pt(d, null, n);
      else {
        var L = c ? c.next : l;
        d === e.effect.last && (e.effect.last = d.prev), d.prev && (d.prev.next = d.next), d.next && (d.next.prev = d.prev), Be(e, c, d), Be(e, d, L), Pt(d, L, n), c = d, v = [], h = [], l = Ft(c.next);
        continue;
      }
    if (d !== l) {
      if (u !== void 0 && u.has(d)) {
        if (v.length < h.length) {
          var C = h[0], J;
          c = C.prev;
          var re = v[0], Ce = v[v.length - 1];
          for (J = 0; J < v.length; J += 1)
            Pt(v[J], C, n);
          for (J = 0; J < h.length; J += 1)
            u.delete(h[J]);
          Be(e, re.prev, Ce.next), Be(e, c, re), Be(e, Ce, C), l = C, c = Ce, b -= 1, v = [], h = [];
        } else
          u.delete(d), Pt(d, l, n), Be(e, d.prev, d.next), Be(e, d, c === null ? e.effect.first : c.next), Be(e, c, d), c = d;
        continue;
      }
      for (v = [], h = []; l !== null && l !== d; )
        (u ?? (u = /* @__PURE__ */ new Set())).add(l), h.push(l), l = Ft(l.next);
      if (l === null)
        continue;
    }
    (d.f & Se) === 0 && v.push(d), c = d, l = Ft(d.next);
  }
  if (e.outrogroups !== null) {
    for (const F of e.outrogroups)
      F.pending.size === 0 && (In(e, pn(F.done)), e.outrogroups?.delete(F));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (l !== null || u !== void 0) {
    var q = [];
    if (u !== void 0)
      for (d of u)
        (d.f & G) === 0 && q.push(d);
    for (; l !== null; )
      (l.f & G) === 0 && l !== e.fallback && q.push(l), l = Ft(l.next);
    var Oe = q.length;
    if (Oe > 0) {
      var Me = (r & mr) !== 0 && f === 0 ? n : null;
      if (s) {
        for (b = 0; b < Oe; b += 1)
          q[b].nodes?.a?.measure();
        for (b = 0; b < Oe; b += 1)
          q[b].nodes?.a?.fix();
      }
      $s(e, q, Me);
    }
  }
  s && at(() => {
    if (_ !== void 0)
      for (d of _)
        d.nodes?.a?.apply();
  });
}
function ta(e, t, n, r, i, s, f, o) {
  var l = (f & Wi) !== 0 ? (f & Qi) === 0 ? /* @__PURE__ */ ks(n, !1, !1) : dt(n) : null, u = (f & Xi) !== 0 ? dt(i) : null;
  return {
    v: l,
    i: u,
    e: oe(() => (s(t, l ?? n, u ?? i, o), () => {
      e.delete(r);
    }))
  };
}
function Pt(e, t, n) {
  if (e.nodes)
    for (var r = e.nodes.start, i = e.nodes.end, s = t && (t.f & Se) === 0 ? (
      /** @type {EffectNodes} */
      t.nodes.start
    ) : n; r !== null; ) {
      var f = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Yt(r)
      );
      if (s.before(r), r === i)
        return;
      r = f;
    }
}
function Be(e, t, n) {
  t === null ? e.effect.first = n : t.next = n, n === null ? e.effect.last = t : n.prev = t;
}
function na(e, t) {
  Ds(() => {
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
      const i = Vr("style");
      i.id = t.hash, i.textContent = t.code, r.appendChild(i);
    }
  });
}
const hr = [...` 	
\r\f \v\uFEFF`];
function ra(e, t, n) {
  var r = "" + e;
  if (n) {
    for (var i of Object.keys(n))
      if (n[i])
        r = r ? r + " " + i : i;
      else if (r.length)
        for (var s = i.length, f = 0; (f = r.indexOf(i, f)) >= 0; ) {
          var o = f + s;
          (f === 0 || hr.includes(r[f - 1])) && (o === r.length || hr.includes(r[o])) ? r = (f === 0 ? "" : r.substring(0, f)) + r.substring(o + 1) : f = o;
        }
  }
  return r === "" ? null : r;
}
function ia(e, t, n, r, i, s) {
  var f = e.__className;
  if (f !== n || f === void 0) {
    var o = ra(n, r, s);
    o == null ? e.removeAttribute("class") : e.className = o, e.__className = n;
  } else if (s && i !== s)
    for (var l in s) {
      var u = !!s[l];
      (i == null || u !== !!i[l]) && e.classList.toggle(l, u);
    }
  return s;
}
function en(e, t, n, r) {
  var i = (
    /** @type {V} */
    r
  ), s = !0, f = () => (s && (s = !1, i = /** @type {V} */
  r), i), o;
  o = /** @type {V} */
  e[t], o === void 0 && r !== void 0 && (o = f());
  var l;
  return l = () => {
    var u = (
      /** @type {V} */
      e[t]
    );
    return u === void 0 ? f() : (s = !0, u);
  }, l;
}
const sa = "5";
var pr;
typeof window < "u" && ((pr = window.__svelte ?? (window.__svelte = {})).v ?? (pr.v = /* @__PURE__ */ new Set())).add(sa);
var aa = /* @__PURE__ */ pe('<div class="error svelte-pay8ey"> </div>'), la = /* @__PURE__ */ pe('<div class="empty svelte-pay8ey">Loading admin data…</div>'), fa = /* @__PURE__ */ pe("<button> </button>"), oa = /* @__PURE__ */ pe('<div class="empty small svelte-pay8ey">No entity types</div>'), ua = /* @__PURE__ */ pe('<div class="empty svelte-pay8ey">Select an entity type to browse</div>'), ca = /* @__PURE__ */ pe('<div class="empty svelte-pay8ey"> </div>'), da = /* @__PURE__ */ pe('<div class="empty svelte-pay8ey">No records</div>'), va = /* @__PURE__ */ pe('<pre class="obj-json svelte-pay8ey"> </pre>'), ha = /* @__PURE__ */ pe('<div class="obj-row svelte-pay8ey"><div class="obj-header svelte-pay8ey"><button class="expand-btn svelte-pay8ey"> </button> <span class="obj-id svelte-pay8ey"> </span> <span class="obj-preview svelte-pay8ey"> </span> <button class="del-btn svelte-pay8ey">✕</button></div> <!></div>'), pa = /* @__PURE__ */ pe('<h3 class="svelte-pay8ey"> </h3> <div class="pagination svelte-pay8ey"><button class="pg-btn svelte-pay8ey">← Prev</button> <span> </span> <button class="pg-btn svelte-pay8ey">Next →</button></div> <!>', 1), _a = /* @__PURE__ */ pe('<div class="two-col svelte-pay8ey"><div class="sidebar svelte-pay8ey"><h3 class="svelte-pay8ey">Packages</h3> <div class="pkg-info svelte-pay8ey"><div class="kv svelte-pay8ey"><span>Extensions</span><span class="fw svelte-pay8ey"> </span></div> <div class="kv svelte-pay8ey"><span>Codexes</span><span class="fw svelte-pay8ey"> </span></div></div> <h3 class="svelte-pay8ey">Entity Types</h3> <!> <!></div> <div class="main svelte-pay8ey"><!></div></div>'), ga = /* @__PURE__ */ pe('<div class="rt-ad svelte-pay8ey"><div class="header svelte-pay8ey"><h2 class="svelte-pay8ey">Admin Dashboard</h2> <span class="badge svelte-pay8ey"> </span> <button class="refresh svelte-pay8ey">↻</button></div> <!> <!></div>');
const ya = {
  hash: "svelte-pay8ey",
  code: `.rt-ad.svelte-pay8ey {font-family:system-ui, -apple-system, sans-serif;max-width:1000px;margin:0 auto;padding:1.5rem;}.header.svelte-pay8ey {display:flex;align-items:center;gap:0.75rem;margin-bottom:1rem;flex-wrap:wrap;}.header.svelte-pay8ey h2:where(.svelte-pay8ey) {margin:0;font-size:1.5rem;}.badge.svelte-pay8ey {background:#e0e7ff;color:#3730a3;padding:0.15rem 0.5rem;border-radius:9999px;font-size:0.75rem;}.refresh.svelte-pay8ey {margin-left:auto;padding:0.35rem 0.75rem;background:#f3f4f6;border:1px solid #d1d5db;border-radius:0.5rem;cursor:pointer;font-size:0.8rem;}.error.svelte-pay8ey {background:#fef2f2;color:#991b1b;border:1px solid #fecaca;padding:0.75rem;border-radius:0.5rem;margin-bottom:1rem;}.empty.svelte-pay8ey {color:#6b7280;text-align:center;padding:2rem;}.empty.small.svelte-pay8ey {padding:0.5rem;font-size:0.8rem;}.two-col.svelte-pay8ey {display:grid;grid-template-columns:200px 1fr;gap:1.5rem;}
	@media (max-width: 640px) {.two-col.svelte-pay8ey {grid-template-columns:1fr;} }.sidebar.svelte-pay8ey h3:where(.svelte-pay8ey) {margin:0 0 0.5rem;font-size:0.85rem;color:#374151;}.pkg-info.svelte-pay8ey {margin-bottom:1rem;}.kv.svelte-pay8ey {display:flex;justify-content:space-between;padding:0.2rem 0;font-size:0.8rem;}.fw.svelte-pay8ey {font-weight:500;}.entity-btn.svelte-pay8ey {display:block;width:100%;padding:0.35rem 0.5rem;background:none;border:1px solid transparent;border-radius:0.375rem;cursor:pointer;font-size:0.8rem;text-align:left;color:#374151;font-family:inherit;}.entity-btn.svelte-pay8ey:hover {background:#f3f4f6;}.entity-btn.active.svelte-pay8ey {background:#eef2ff;border-color:#a5b4fc;color:#4f46e5;font-weight:500;}.main.svelte-pay8ey h3:where(.svelte-pay8ey) {margin:0 0 0.75rem;font-size:1rem;}.pagination.svelte-pay8ey {display:flex;align-items:center;gap:0.75rem;margin-bottom:0.75rem;font-size:0.8rem;}.pg-btn.svelte-pay8ey {padding:0.25rem 0.5rem;background:#f3f4f6;border:1px solid #d1d5db;border-radius:0.375rem;cursor:pointer;font-size:0.75rem;}.pg-btn.svelte-pay8ey:disabled {opacity:0.4;cursor:not-allowed;}.obj-row.svelte-pay8ey {border:1px solid #e5e7eb;border-radius:0.5rem;margin-bottom:0.4rem;overflow:hidden;}.obj-header.svelte-pay8ey {display:flex;align-items:center;gap:0.5rem;padding:0.4rem 0.6rem;background:#fafafa;}.expand-btn.svelte-pay8ey {background:none;border:none;cursor:pointer;padding:0;font-size:0.7rem;color:#6b7280;width:1.2rem;}.obj-id.svelte-pay8ey {font-weight:500;font-size:0.8rem;white-space:nowrap;}.obj-preview.svelte-pay8ey {flex:1;font-size:0.7rem;color:#9ca3af;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-family:ui-monospace, monospace;}.del-btn.svelte-pay8ey {background:none;border:none;color:#dc2626;cursor:pointer;font-size:0.75rem;padding:0.1rem 0.3rem;margin-left:auto;}.del-btn.svelte-pay8ey:hover {background:#fef2f2;border-radius:0.25rem;}.obj-json.svelte-pay8ey {margin:0;padding:0.6rem;font-size:0.7rem;font-family:ui-monospace, monospace;background:#f9fafb;max-height:300px;overflow:auto;white-space:pre-wrap;word-break:break-word;}`
};
function ma(e, t) {
  Er(t, !0), na(e, ya);
  let n = en(t, "extensionId", 3, "admin_dashboard"), r = en(t, "version", 3, "");
  en(t, "principal", 3, ""), en(t, "isAuthenticated", 3, !0);
  let i = /* @__PURE__ */ j(ke([])), s = /* @__PURE__ */ j(""), f = /* @__PURE__ */ j(ke([])), o = /* @__PURE__ */ j(!0), l = /* @__PURE__ */ j(!1), u = /* @__PURE__ */ j(""), c = /* @__PURE__ */ j(0), _ = 20, v = /* @__PURE__ */ j(ke(/* @__PURE__ */ new Set())), h = /* @__PURE__ */ j(ke([])), p = /* @__PURE__ */ j(ke([]));
  async function m(k, T = "{}") {
    const V = await t.backend.extension_sync_call(JSON.stringify({ extension_name: n(), function_name: k, args: T }));
    return JSON.parse(V);
  }
  async function d() {
    N(o, !0), N(u, "");
    try {
      const k = await m("get_entity_types", "{}");
      N(i, k?.data ?? (Array.isArray(k) ? k : []), !0);
      const [T, V] = await Promise.all([
        t.backend.list_runtime_extensions().then((Re) => JSON.parse(Re)).catch(() => ({})),
        t.backend.list_codex_packages().then((Re) => JSON.parse(Re)).catch(() => ({}))
      ]), Ve = T?.all_manifests ?? {};
      N(h, Object.entries(Ve).map(([Re, Rt]) => ({ id: Re, ...Rt })), !0);
      const ht = V?.packages ?? V?.data ?? {};
      N(
        p,
        Array.isArray(ht) ? ht : Object.entries(ht).map(([Re, Rt]) => ({ id: Re, ...Rt })),
        !0
      );
    } catch (k) {
      N(u, k?.message || String(k), !0);
    } finally {
      N(o, !1);
    }
  }
  async function b(k, T = 0) {
    N(s, k, !0), N(c, T, !0), N(l, !0), N(v, /* @__PURE__ */ new Set(), !0);
    try {
      const V = await t.backend.get_objects_paginated(k, T * _, _, "desc"), Ve = typeof V == "string" ? JSON.parse(V) : V;
      N(f, Ve?.data ?? (Array.isArray(Ve) ? Ve : []), !0);
    } catch (V) {
      N(u, V?.message || String(V), !0), N(f, [], !0);
    } finally {
      N(l, !1);
    }
  }
  function L(k) {
    const T = new Set(g(v));
    T.has(k) ? T.delete(k) : T.add(k), N(v, T, !0);
  }
  async function C(k) {
    if (confirm(`Delete ${k.id ?? "this entity"}?`))
      try {
        await m("delete_entity", JSON.stringify({ entity_type: g(s), id: k.id })), await b(g(s), g(c));
      } catch (T) {
        N(u, T?.message || String(T), !0);
      }
  }
  Ms(() => {
    d();
  });
  function J(k) {
    const T = JSON.stringify(k);
    return T.length > 80 ? T.slice(0, 80) + "…" : T;
  }
  var re = ga(), Ce = O(re), q = P(O(Ce), 2), Oe = O(q), Me = P(q, 2), F = P(Ce, 2);
  {
    var gn = (k) => {
      var T = aa(), V = O(T);
      He(() => ie(V, g(u))), Q(k, T);
    };
    gt(F, (k) => {
      g(u) && k(gn);
    });
  }
  var yn = P(F, 2);
  {
    var ni = (k) => {
      var T = la();
      Q(k, T);
    }, ri = (k) => {
      var T = _a(), V = O(T), Ve = P(O(V), 2), ht = O(Ve), Re = P(O(ht)), Rt = O(Re), ii = P(ht, 2), si = P(O(ii)), ai = O(si), Kn = P(Ve, 4);
      vr(Kn, 17, () => g(i), Qs, (U, Z) => {
        var De = fa();
        let Kt;
        var Wt = O(De);
        He(() => {
          Kt = ia(De, 1, "entity-btn svelte-pay8ey", null, Kt, { active: g(Z) === g(s) }), ie(Wt, g(Z));
        }), _t("click", De, () => b(g(Z))), Q(U, De);
      });
      var li = P(Kn, 2);
      {
        var fi = (U) => {
          var Z = oa();
          Q(U, Z);
        };
        gt(li, (U) => {
          g(i).length === 0 && U(fi);
        });
      }
      var oi = P(V, 2), ui = O(oi);
      {
        var ci = (U) => {
          var Z = ua();
          Q(U, Z);
        }, di = (U) => {
          var Z = ca(), De = O(Z);
          He(() => ie(De, `Loading ${g(s) ?? ""}…`)), Q(U, Z);
        }, vi = (U) => {
          var Z = pa(), De = lr(Z), Kt = O(De), Wt = P(De, 2), mn = O(Wt), Wn = P(mn, 2), hi = O(Wn), Xn = P(Wn, 2), pi = P(Wt, 2);
          {
            var _i = (pt) => {
              var Xt = da();
              Q(pt, Xt);
            }, gi = (pt) => {
              var Xt = Gs(), yi = lr(Xt);
              vr(yi, 19, () => g(f), (bn, Ze) => bn.id || Ze, (bn, Ze, Zt) => {
                var Zn = ha(), Qn = O(Zn), wn = O(Qn), mi = O(wn), $n = P(wn, 2), bi = O($n), er = P($n, 2), wi = O(er), Ei = P(er, 2), xi = P(Qn, 2);
                {
                  var ki = (Dt) => {
                    var Qt = va(), Ti = O(Qt);
                    He((Ai) => ie(Ti, Ai), [() => JSON.stringify(g(Ze), null, 2)]), Q(Dt, Qt);
                  }, Si = /* @__PURE__ */ bs(() => g(v).has(g(Zt)));
                  gt(xi, (Dt) => {
                    g(Si) && Dt(ki);
                  });
                }
                He(
                  (Dt, Qt) => {
                    ie(mi, Dt), ie(bi, g(Ze).id || g(Ze).name || `#${g(Zt)}`), ie(wi, Qt);
                  },
                  [
                    () => g(v).has(g(Zt)) ? "▼" : "▶",
                    () => J(g(Ze))
                  ]
                ), _t("click", wn, () => L(g(Zt))), _t("click", Ei, () => C(g(Ze))), Q(bn, Zn);
              }), Q(pt, Xt);
            };
            gt(pi, (pt) => {
              g(f).length === 0 ? pt(_i) : pt(gi, -1);
            });
          }
          He(() => {
            ie(Kt, `${g(s) ?? ""} (${g(f).length ?? ""})`), mn.disabled = g(c) === 0, ie(hi, `Page ${g(c) + 1}`), Xn.disabled = g(f).length < _;
          }), _t("click", mn, () => b(g(s), g(c) - 1)), _t("click", Xn, () => b(g(s), g(c) + 1)), Q(U, Z);
        };
        gt(ui, (U) => {
          g(s) ? g(l) ? U(di, 1) : U(vi, -1) : U(ci);
        });
      }
      He(() => {
        ie(Rt, g(h).length), ie(ai, g(p).length);
      }), Q(k, T);
    };
    gt(yn, (k) => {
      g(o) ? k(ni) : k(ri, -1);
    });
  }
  He(() => {
    ie(Oe, `v${r() ?? ""}`), Me.disabled = g(o);
  }), _t("click", Me, d), Q(e, re), xr();
}
Bs(["click"]);
function Ea(e, t) {
  const n = Ks(ma, { target: e, props: t });
  return {
    unmount() {
      try {
        Xs(n);
      } catch {
      }
    }
  };
}
export {
  Ea as default
};
