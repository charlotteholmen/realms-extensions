var es = Object.defineProperty;
var Dn = (e) => {
  throw TypeError(e);
};
var ts = (e, t, r) => t in e ? es(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var De = (e, t, r) => ts(e, typeof t != "symbol" ? t + "" : t, r), Qr = (e, t, r) => t.has(e) || Dn("Cannot " + r);
var a = (e, t, r) => (Qr(e, t, "read from private field"), r ? r.call(e) : t.get(e)), b = (e, t, r) => t.has(e) ? Dn("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), E = (e, t, r, n) => (Qr(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r), C = (e, t, r) => (Qr(e, t, "access private method"), r);
var Gn = Array.isArray, rs = Array.prototype.indexOf, Xt = Array.prototype.includes, Ur = Array.from, ns = Object.defineProperty, dr = Object.getOwnPropertyDescriptor, is = Object.getOwnPropertyDescriptors, ss = Object.prototype, as = Array.prototype, Kn = Object.getPrototypeOf, Fn = Object.isExtensible;
const ls = () => {
};
function os(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function Xn() {
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
const ne = 2, hr = 4, Wr = 8, Jn = 1 << 24, Ue = 16, $e = 32, pt = 64, rn = 128, Te = 512, B = 1024, re = 2048, We = 4096, ae = 8192, Ae = 16384, Lt = 32768, In = 1 << 25, Jt = 65536, nn = 1 << 17, fs = 1 << 18, rr = 1 << 19, us = 1 << 20, Ye = 1 << 25, It = 65536, zr = 1 << 21, _r = 1 << 22, ht = 1 << 23, en = Symbol("$state"), cs = Symbol(""), st = new class extends Error {
  constructor() {
    super(...arguments);
    De(this, "name", "StaleReactionError");
    De(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
function ds(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function vs() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function hs(e, t, r) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function _s(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function ps() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function gs(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function ys() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function ms() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function bs() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function ws() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function xs() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
const Es = 1, ks = 2, Zn = 4, Ss = 8, Ts = 16, As = 1, Os = 2, V = Symbol(), Qn = "http://www.w3.org/1999/xhtml";
function Rs() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function Cs() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function ei(e) {
  return e === this.v;
}
function Ms(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function ti(e) {
  return !Ms(e, this.v);
}
let ye = null;
function Zt(e) {
  ye = e;
}
function ri(e, t = !1, r) {
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
function ni(e) {
  var t = (
    /** @type {ComponentContext} */
    ye
  ), r = t.e;
  if (r !== null) {
    t.e = null;
    for (var n of r)
      xi(n);
  }
  return t.i = !0, ye = t.p, /** @type {T} */
  {};
}
function ii() {
  return !0;
}
let qt = [];
function Ns() {
  var e = qt;
  qt = [], os(e);
}
function Mt(e) {
  if (qt.length === 0) {
    var t = qt;
    queueMicrotask(() => {
      t === qt && Ns();
    });
  }
  qt.push(e);
}
function si(e) {
  var t = S;
  if (t === null)
    return k.f |= ht, e;
  if ((t.f & Lt) === 0 && (t.f & hr) === 0)
    throw e;
  vt(e, t);
}
function vt(e, t) {
  for (; t !== null; ) {
    if ((t.f & rn) !== 0) {
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
function I(e, t) {
  e.f = e.f & Ds | t;
}
function _n(e) {
  (e.f & Te) !== 0 || e.deps === null ? I(e, B) : I(e, We);
}
function ai(e) {
  if (e !== null)
    for (const t of e)
      (t.f & ne) === 0 || (t.f & It) === 0 || (t.f ^= It, ai(
        /** @type {Derived} */
        t.deps
      ));
}
function li(e, t, r) {
  (e.f & re) !== 0 ? t.add(e) : (e.f & We) !== 0 && r.add(e), ai(e.deps), I(e, B);
}
const xt = /* @__PURE__ */ new Set();
let T = null, je = null, sn = null, tn = !1, Vt = null, Dr = null;
var Pn = 0;
let Fs = 1;
var Yt, Ut, Tt, at, He, gr, _e, yr, ct, lt, qe, Wt, Gt, At, j, Fr, oi, Ir, an, Pr, Is;
const qr = class qr {
  constructor() {
    b(this, j);
    De(this, "id", Fs++);
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
    b(this, gr, null);
    /**
     * The root effects that need to be flushed
     * @type {Effect[]}
     */
    b(this, _e, []);
    /**
     * Effects created while this batch was active.
     * @type {Effect[]}
     */
    b(this, yr, []);
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
        I(i, re), r(i);
      for (i of n.m)
        I(i, We), r(i);
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
    t.v !== V && !this.previous.has(t) && this.previous.set(t, t.v), (t.f & ht) === 0 && (this.current.set(t, [r, n]), je?.set(t, r)), this.is_fork || (t.v = r);
  }
  activate() {
    T = this;
  }
  deactivate() {
    T = null, je = null;
  }
  flush() {
    try {
      tn = !0, T = this, C(this, j, Ir).call(this);
    } finally {
      Pn = 0, sn = null, Vt = null, Dr = null, tn = !1, T = null, je = null, Nt.clear();
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
    a(this, yr).push(t);
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
    return (a(this, gr) ?? E(this, gr, Xn())).promise;
  }
  static ensure() {
    if (T === null) {
      const t = T = new qr();
      tn || (xt.add(T), Mt(() => {
        T === t && t.flush();
      }));
    }
    return T;
  }
  apply() {
    {
      je = null;
      return;
    }
  }
  /**
   *
   * @param {Effect} effect
   */
  schedule(t) {
    if (sn = t, t.b?.is_pending && (t.f & (hr | Wr | Jn)) !== 0 && (t.f & Lt) === 0) {
      t.b.defer_effect(t);
      return;
    }
    for (var r = t; r.parent !== null; ) {
      r = r.parent;
      var n = r.f;
      if (Vt !== null && r === S && (k === null || (k.f & ne) === 0))
        return;
      if ((n & (pt | $e)) !== 0) {
        if ((n & B) === 0)
          return;
        r.f ^= B;
      }
    }
    a(this, _e).push(r);
  }
};
Yt = new WeakMap(), Ut = new WeakMap(), Tt = new WeakMap(), at = new WeakMap(), He = new WeakMap(), gr = new WeakMap(), _e = new WeakMap(), yr = new WeakMap(), ct = new WeakMap(), lt = new WeakMap(), qe = new WeakMap(), Wt = new WeakMap(), Gt = new WeakMap(), At = new WeakMap(), j = new WeakSet(), Fr = function() {
  return this.is_fork || a(this, He).size > 0;
}, oi = function() {
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
}, Ir = function() {
  var o;
  if (Pn++ > 1e3 && (xt.delete(this), Ps()), !C(this, j, Fr).call(this)) {
    for (const l of a(this, ct))
      a(this, lt).delete(l), I(l, re), this.schedule(l);
    for (const l of a(this, lt))
      I(l, We), this.schedule(l);
  }
  const t = a(this, _e);
  E(this, _e, []), this.apply();
  var r = Vt = [], n = [], i = Dr = [];
  for (const l of t)
    try {
      C(this, j, an).call(this, l, r, n);
    } catch (c) {
      throw ci(l), c;
    }
  if (T = null, i.length > 0) {
    var s = qr.ensure();
    for (const l of i)
      s.schedule(l);
  }
  if (Vt = null, Dr = null, C(this, j, Fr).call(this) || C(this, j, oi).call(this)) {
    C(this, j, Pr).call(this, n), C(this, j, Pr).call(this, r);
    for (const [l, c] of a(this, qe))
      ui(l, c);
  } else {
    a(this, at).size === 0 && xt.delete(this), a(this, ct).clear(), a(this, lt).clear();
    for (const l of a(this, Yt)) l(this);
    a(this, Yt).clear(), jn(n), jn(r), a(this, gr)?.resolve();
  }
  var u = (
    /** @type {Batch | null} */
    /** @type {unknown} */
    T
  );
  if (a(this, _e).length > 0) {
    const l = u ?? (u = this);
    a(l, _e).push(...a(this, _e).filter((c) => !a(l, _e).includes(c)));
  }
  u !== null && (xt.add(u), C(o = u, j, Ir).call(o));
}, /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
an = function(t, r, n) {
  t.f ^= B;
  for (var i = t.first; i !== null; ) {
    var s = i.f, u = (s & ($e | pt)) !== 0, o = u && (s & B) !== 0, l = o || (s & ae) !== 0 || a(this, qe).has(i);
    if (!l && i.fn !== null) {
      u ? i.f ^= B : (s & hr) !== 0 ? r.push(i) : kr(i) && ((s & Ue) !== 0 && a(this, lt).add(i), tr(i));
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
Pr = function(t) {
  for (var r = 0; r < t.length; r += 1)
    li(t[r], a(this, ct), a(this, lt));
}, Is = function() {
  var d, g, h;
  for (const _ of xt) {
    var t = _.id < this.id, r = [];
    for (const [p, [w, v]] of this.current) {
      if (_.current.has(p)) {
        var n = (
          /** @type {[any, boolean]} */
          _.current.get(p)[0]
        );
        if (t && w !== n)
          _.current.set(p, [w, v]);
        else
          continue;
      }
      r.push(p);
    }
    var i = [..._.current.keys()].filter((p) => !this.current.has(p));
    if (i.length === 0)
      t && _.discard();
    else if (r.length > 0) {
      if (t)
        for (const p of a(this, Wt))
          _.unskip_effect(p, (w) => {
            var v;
            (w.f & (Ue | _r)) !== 0 ? _.schedule(w) : C(v = _, j, Pr).call(v, [w]);
          });
      _.activate();
      var s = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Map();
      for (var o of r)
        fi(o, i, s, u);
      u = /* @__PURE__ */ new Map();
      var l = [..._.current.keys()].filter(
        (p) => this.current.has(p) ? (
          /** @type {[any, boolean]} */
          this.current.get(p)[0] !== p
        ) : !0
      );
      for (const p of a(this, yr))
        (p.f & (Ae | ae | nn)) === 0 && pn(p, l, u) && ((p.f & (_r | Ue)) !== 0 ? (I(p, re), _.schedule(p)) : a(_, ct).add(p));
      if (a(_, _e).length > 0) {
        _.apply();
        for (var c of a(_, _e))
          C(d = _, j, an).call(d, c, [], []);
        E(_, _e, []);
      }
      _.deactivate();
    }
  }
  for (const _ of xt)
    a(_, At).has(this) && (a(_, At).delete(this), a(_, At).size === 0 && !C(g = _, j, Fr).call(g) && (_.activate(), C(h = _, j, Ir).call(h)));
};
let Pt = qr;
function Ps() {
  try {
    ys();
  } catch (e) {
    vt(e, sn);
  }
}
let it = null;
function jn(e) {
  var t = e.length;
  if (t !== 0) {
    for (var r = 0; r < t; ) {
      var n = e[r++];
      if ((n.f & (Ae | ae)) === 0 && kr(n) && (it = /* @__PURE__ */ new Set(), tr(n), n.deps === null && n.first === null && n.nodes === null && n.teardown === null && n.ac === null && ki(n), it?.size > 0)) {
        Nt.clear();
        for (const i of it) {
          if ((i.f & (Ae | ae)) !== 0) continue;
          const s = [i];
          let u = i.parent;
          for (; u !== null; )
            it.has(u) && (it.delete(u), s.push(u)), u = u.parent;
          for (let o = s.length - 1; o >= 0; o--) {
            const l = s[o];
            (l.f & (Ae | ae)) === 0 && tr(l);
          }
        }
        it.clear();
      }
    }
    it = null;
  }
}
function fi(e, t, r, n) {
  if (!r.has(e) && (r.add(e), e.reactions !== null))
    for (const i of e.reactions) {
      const s = i.f;
      (s & ne) !== 0 ? fi(
        /** @type {Derived} */
        i,
        t,
        r,
        n
      ) : (s & (_r | Ue)) !== 0 && (s & re) === 0 && pn(i, t, n) && (I(i, re), gn(
        /** @type {Effect} */
        i
      ));
    }
}
function pn(e, t, r) {
  const n = r.get(e);
  if (n !== void 0) return n;
  if (e.deps !== null)
    for (const i of e.deps) {
      if (Xt.call(t, i))
        return !0;
      if ((i.f & ne) !== 0 && pn(
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
function gn(e) {
  T.schedule(e);
}
function ui(e, t) {
  if (!((e.f & $e) !== 0 && (e.f & B) !== 0)) {
    (e.f & re) !== 0 ? t.d.push(e) : (e.f & We) !== 0 && t.m.push(e), I(e, B);
    for (var r = e.first; r !== null; )
      ui(r, t), r = r.next;
  }
}
function ci(e) {
  I(e, B);
  for (var t = e.first; t !== null; )
    ci(t), t = t.next;
}
function js(e) {
  let t = 0, r = jt(0), n;
  return () => {
    bn() && (f(r), la(() => (t === 0 && (n = Fi(() => e(() => vr(r)))), t += 1, () => {
      Mt(() => {
        t -= 1, t === 0 && (n?.(), n = void 0, vr(r));
      });
    })));
  };
}
var Ls = Jt | rr;
function $s(e, t, r, n) {
  new zs(e, t, r, n);
}
var xe, hn, Ee, Ot, fe, ke, se, pe, ot, Rt, dt, Kt, mr, br, ft, Vr, D, Bs, Hs, qs, ln, jr, Lr, on, fn;
class zs {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(t, r, n, i) {
    b(this, D);
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
    b(this, hn, null);
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
    b(this, mr, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    b(this, br, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    b(this, ft, null);
    b(this, Vr, js(() => (E(this, ft, jt(a(this, Rt))), () => {
      E(this, ft, null);
    })));
    E(this, xe, t), E(this, Ee, r), E(this, Ot, (s) => {
      var u = (
        /** @type {Effect} */
        S
      );
      u.b = this, u.f |= rn, n(s);
    }), this.parent = /** @type {Effect} */
    S.b, this.transform_error = i ?? this.parent?.transform_error ?? ((s) => s), E(this, fe, wn(() => {
      C(this, D, ln).call(this);
    }, Ls));
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    li(t, a(this, mr), a(this, br));
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
    C(this, D, on).call(this, t, r), E(this, Rt, a(this, Rt) + t), !(!a(this, ft) || a(this, Kt)) && (E(this, Kt, !0), Mt(() => {
      E(this, Kt, !1), a(this, ft) && Qt(a(this, ft), a(this, Rt));
    }));
  }
  get_effect_pending() {
    return a(this, Vr).call(this), f(
      /** @type {Source<number>} */
      a(this, ft)
    );
  }
  /** @param {unknown} error */
  error(t) {
    if (!a(this, Ee).onerror && !a(this, Ee).failed)
      throw t;
    T?.is_fork ? (a(this, ke) && T.skip_effect(a(this, ke)), a(this, se) && T.skip_effect(a(this, se)), a(this, pe) && T.skip_effect(a(this, pe)), T.on_fork_commit(() => {
      C(this, D, fn).call(this, t);
    })) : C(this, D, fn).call(this, t);
  }
}
xe = new WeakMap(), hn = new WeakMap(), Ee = new WeakMap(), Ot = new WeakMap(), fe = new WeakMap(), ke = new WeakMap(), se = new WeakMap(), pe = new WeakMap(), ot = new WeakMap(), Rt = new WeakMap(), dt = new WeakMap(), Kt = new WeakMap(), mr = new WeakMap(), br = new WeakMap(), ft = new WeakMap(), Vr = new WeakMap(), D = new WeakSet(), Bs = function() {
  try {
    E(this, ke, Se(() => a(this, Ot).call(this, a(this, xe))));
  } catch (t) {
    this.error(t);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
Hs = function(t) {
  const r = a(this, Ee).failed;
  r && E(this, pe, Se(() => {
    r(
      a(this, xe),
      () => t,
      () => () => {
      }
    );
  }));
}, qs = function() {
  const t = a(this, Ee).pending;
  t && (this.is_pending = !0, E(this, se, Se(() => t(a(this, xe)))), Mt(() => {
    var r = E(this, ot, document.createDocumentFragment()), n = _t();
    r.append(n), E(this, ke, C(this, D, Lr).call(this, () => Se(() => a(this, Ot).call(this, n)))), a(this, dt) === 0 && (a(this, xe).before(r), E(this, ot, null), Dt(
      /** @type {Effect} */
      a(this, se),
      () => {
        E(this, se, null);
      }
    ), C(this, D, jr).call(
      this,
      /** @type {Batch} */
      T
    ));
  }));
}, ln = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), E(this, dt, 0), E(this, Rt, 0), E(this, ke, Se(() => {
      a(this, Ot).call(this, a(this, xe));
    })), a(this, dt) > 0) {
      var t = E(this, ot, document.createDocumentFragment());
      kn(a(this, ke), t);
      const r = (
        /** @type {(anchor: Node) => void} */
        a(this, Ee).pending
      );
      E(this, se, Se(() => r(a(this, xe))));
    } else
      C(this, D, jr).call(
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
jr = function(t) {
  this.is_pending = !1, t.transfer_effects(a(this, mr), a(this, br));
}, /**
 * @template T
 * @param {() => T} fn
 */
Lr = function(t) {
  var r = S, n = k, i = ye;
  Ge(a(this, fe)), Re(a(this, fe)), Zt(a(this, fe).ctx);
  try {
    return Pt.ensure(), t();
  } catch (s) {
    return si(s), null;
  } finally {
    Ge(r), Re(n), Zt(i);
  }
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 * @param {Batch} batch
 */
on = function(t, r) {
  var n;
  if (!this.has_pending_snippet()) {
    this.parent && C(n = this.parent, D, on).call(n, t, r);
    return;
  }
  E(this, dt, a(this, dt) + t), a(this, dt) === 0 && (C(this, D, jr).call(this, r), a(this, se) && Dt(a(this, se), () => {
    E(this, se, null);
  }), a(this, ot) && (a(this, xe).before(a(this, ot)), E(this, ot, null)));
}, /**
 * @param {unknown} error
 */
fn = function(t) {
  a(this, ke) && (ce(a(this, ke)), E(this, ke, null)), a(this, se) && (ce(a(this, se)), E(this, se, null)), a(this, pe) && (ce(a(this, pe)), E(this, pe, null));
  var r = a(this, Ee).onerror;
  let n = a(this, Ee).failed;
  var i = !1, s = !1;
  const u = () => {
    if (i) {
      Cs();
      return;
    }
    i = !0, s && xs(), a(this, pe) !== null && Dt(a(this, pe), () => {
      E(this, pe, null);
    }), C(this, D, Lr).call(this, () => {
      C(this, D, ln).call(this);
    });
  }, o = (l) => {
    try {
      s = !0, r?.(l, u), s = !1;
    } catch (c) {
      vt(c, a(this, fe) && a(this, fe).parent);
    }
    n && E(this, pe, C(this, D, Lr).call(this, () => {
      try {
        return Se(() => {
          var c = (
            /** @type {Effect} */
            S
          );
          c.b = this, c.f |= rn, n(
            a(this, xe),
            () => l,
            () => u
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
    var l;
    try {
      l = this.transform_error(t);
    } catch (c) {
      vt(c, a(this, fe) && a(this, fe).parent);
      return;
    }
    l !== null && typeof l == "object" && typeof /** @type {any} */
    l.then == "function" ? l.then(
      o,
      /** @param {unknown} e */
      (c) => vt(c, a(this, fe) && a(this, fe).parent)
    ) : o(l);
  });
};
function Vs(e, t, r, n) {
  const i = yn;
  var s = e.filter((h) => !h.settled);
  if (r.length === 0 && s.length === 0) {
    n(t.map(i));
    return;
  }
  var u = (
    /** @type {Effect} */
    S
  ), o = Ys(), l = s.length === 1 ? s[0].promise : s.length > 1 ? Promise.all(s.map((h) => h.promise)) : null;
  function c(h) {
    o();
    try {
      n(h);
    } catch (_) {
      (u.f & Ae) === 0 && vt(_, u);
    }
    Br();
  }
  if (r.length === 0) {
    l.then(() => c(t.map(i)));
    return;
  }
  var d = di();
  function g() {
    Promise.all(r.map((h) => /* @__PURE__ */ Us(h))).then((h) => c([...t.map(i), ...h])).catch((h) => vt(h, u)).finally(() => d());
  }
  l ? l.then(() => {
    o(), g(), Br();
  }) : g();
}
function Ys() {
  var e = (
    /** @type {Effect} */
    S
  ), t = k, r = ye, n = (
    /** @type {Batch} */
    T
  );
  return function(s = !0) {
    Ge(e), Re(t), Zt(r), s && (e.f & Ae) === 0 && (n?.activate(), n?.apply());
  };
}
function Br(e = !0) {
  Ge(null), Re(null), Zt(null), e && T?.deactivate();
}
function di() {
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
function yn(e) {
  var t = ne | re;
  return S !== null && (S.f |= rr), {
    ctx: ye,
    deps: null,
    effects: null,
    equals: ei,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      V
    ),
    wv: 0,
    parent: S,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function Us(e, t, r) {
  let n = (
    /** @type {Effect | null} */
    S
  );
  n === null && vs();
  var i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), s = jt(
    /** @type {V} */
    V
  ), u = !k, o = /* @__PURE__ */ new Map();
  return aa(() => {
    var l = (
      /** @type {Effect} */
      S
    ), c = Xn();
    i = c.promise;
    try {
      Promise.resolve(e()).then(c.resolve, c.reject).finally(Br);
    } catch (_) {
      c.reject(_), Br();
    }
    var d = (
      /** @type {Batch} */
      T
    );
    if (u) {
      if ((l.f & Lt) !== 0)
        var g = di();
      if (
        /** @type {Boundary} */
        n.b.is_rendered()
      )
        o.get(d)?.reject(st), o.delete(d);
      else {
        for (const _ of o.values())
          _.reject(st);
        o.clear();
      }
      o.set(d, c);
    }
    const h = (_, p = void 0) => {
      if (g) {
        var w = p === st;
        g(w);
      }
      if (!(p === st || (l.f & Ae) !== 0)) {
        if (d.activate(), p)
          s.f |= ht, Qt(s, p);
        else {
          (s.f & ht) !== 0 && (s.f ^= ht), Qt(s, _);
          for (const [v, x] of o) {
            if (o.delete(v), v === d) break;
            x.reject(st);
          }
        }
        d.deactivate();
      }
    };
    c.promise.then(h, (_) => h(null, _ || "unknown"));
  }), na(() => {
    for (const l of o.values())
      l.reject(st);
  }), new Promise((l) => {
    function c(d) {
      function g() {
        d === i ? l(s) : c(i);
      }
      d.then(g, g);
    }
    c(i);
  });
}
// @__NO_SIDE_EFFECTS__
function Q(e) {
  const t = /* @__PURE__ */ yn(e);
  return Ai(t), t;
}
// @__NO_SIDE_EFFECTS__
function Ws(e) {
  const t = /* @__PURE__ */ yn(e);
  return t.equals = ti, t;
}
function Gs(e) {
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
function mn(e) {
  var t, r = S, n = e.parent;
  if (!gt && n !== null && (n.f & (Ae | ae)) !== 0)
    return Rs(), e.v;
  Ge(n);
  try {
    e.f &= ~It, Gs(e), t = Mi(e);
  } finally {
    Ge(r);
  }
  return t;
}
function vi(e) {
  var t = mn(e);
  if (!e.equals(t) && (e.wv = Ri(), (!T?.is_fork || e.deps === null) && (T !== null ? T.capture(e, t, !0) : e.v = t, e.deps === null))) {
    I(e, B);
    return;
  }
  gt || (je !== null ? (bn() || T?.is_fork) && je.set(e, t) : _n(e));
}
function Ks(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      (t.teardown || t.ac) && (t.teardown?.(), t.ac?.abort(st), t.teardown = ls, t.ac = null, pr(t, 0), xn(t));
}
function hi(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      t.teardown && tr(t);
}
let un = /* @__PURE__ */ new Set();
const Nt = /* @__PURE__ */ new Map();
let _i = !1;
function jt(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: ei,
    rv: 0,
    wv: 0
  };
  return r;
}
// @__NO_SIDE_EFFECTS__
function te(e, t) {
  const r = jt(e);
  return Ai(r), r;
}
// @__NO_SIDE_EFFECTS__
function Xs(e, t = !1, r = !0) {
  const n = jt(e);
  return t || (n.equals = ti), n;
}
function O(e, t, r = !1) {
  k !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Le || (k.f & nn) !== 0) && ii() && (k.f & (ne | Ue | _r | nn)) !== 0 && (Oe === null || !Xt.call(Oe, e)) && ws();
  let n = r ? Et(t) : t;
  return Qt(e, n, Dr);
}
function Qt(e, t, r = null) {
  if (!e.equals(t)) {
    Nt.set(e, gt ? t : e.v);
    var n = Pt.ensure();
    if (n.capture(e, t), (e.f & ne) !== 0) {
      const i = (
        /** @type {Derived} */
        e
      );
      (e.f & re) !== 0 && mn(i), je === null && _n(i);
    }
    e.wv = Ri(), pi(e, re, r), S !== null && (S.f & B) !== 0 && (S.f & ($e | pt)) === 0 && (we === null ? ua([e]) : we.push(e)), !n.is_fork && un.size > 0 && !_i && Js();
  }
  return t;
}
function Js() {
  _i = !1;
  for (const e of un)
    (e.f & B) !== 0 && I(e, We), kr(e) && tr(e);
  un.clear();
}
function vr(e) {
  O(e, e.v + 1);
}
function pi(e, t, r) {
  var n = e.reactions;
  if (n !== null)
    for (var i = n.length, s = 0; s < i; s++) {
      var u = n[s], o = u.f, l = (o & re) === 0;
      if (l && I(u, t), (o & ne) !== 0) {
        var c = (
          /** @type {Derived} */
          u
        );
        je?.delete(c), (o & It) === 0 && (o & Te && (S === null || (S.f & zr) === 0) && (u.f |= It), pi(c, We, r));
      } else if (l) {
        var d = (
          /** @type {Effect} */
          u
        );
        (o & Ue) !== 0 && it !== null && it.add(d), r !== null ? r.push(d) : gn(d);
      }
    }
}
function Et(e) {
  if (typeof e != "object" || e === null || en in e)
    return e;
  const t = Kn(e);
  if (t !== ss && t !== as)
    return e;
  var r = /* @__PURE__ */ new Map(), n = Gn(e), i = /* @__PURE__ */ te(0), s = Ft, u = (o) => {
    if (Ft === s)
      return o();
    var l = k, c = Ft;
    Re(null), zn(s);
    var d = o();
    return Re(l), zn(c), d;
  };
  return n && r.set("length", /* @__PURE__ */ te(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(o, l, c) {
        (!("value" in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && ms();
        var d = r.get(l);
        return d === void 0 ? u(() => {
          var g = /* @__PURE__ */ te(c.value);
          return r.set(l, g), g;
        }) : O(d, c.value, !0), !0;
      },
      deleteProperty(o, l) {
        var c = r.get(l);
        if (c === void 0) {
          if (l in o) {
            const d = u(() => /* @__PURE__ */ te(V));
            r.set(l, d), vr(i);
          }
        } else
          O(c, V), vr(i);
        return !0;
      },
      get(o, l, c) {
        if (l === en)
          return e;
        var d = r.get(l), g = l in o;
        if (d === void 0 && (!g || dr(o, l)?.writable) && (d = u(() => {
          var _ = Et(g ? o[l] : V), p = /* @__PURE__ */ te(_);
          return p;
        }), r.set(l, d)), d !== void 0) {
          var h = f(d);
          return h === V ? void 0 : h;
        }
        return Reflect.get(o, l, c);
      },
      getOwnPropertyDescriptor(o, l) {
        var c = Reflect.getOwnPropertyDescriptor(o, l);
        if (c && "value" in c) {
          var d = r.get(l);
          d && (c.value = f(d));
        } else if (c === void 0) {
          var g = r.get(l), h = g?.v;
          if (g !== void 0 && h !== V)
            return {
              enumerable: !0,
              configurable: !0,
              value: h,
              writable: !0
            };
        }
        return c;
      },
      has(o, l) {
        if (l === en)
          return !0;
        var c = r.get(l), d = c !== void 0 && c.v !== V || Reflect.has(o, l);
        if (c !== void 0 || S !== null && (!d || dr(o, l)?.writable)) {
          c === void 0 && (c = u(() => {
            var h = d ? Et(o[l]) : V, _ = /* @__PURE__ */ te(h);
            return _;
          }), r.set(l, c));
          var g = f(c);
          if (g === V)
            return !1;
        }
        return d;
      },
      set(o, l, c, d) {
        var g = r.get(l), h = l in o;
        if (n && l === "length")
          for (var _ = c; _ < /** @type {Source<number>} */
          g.v; _ += 1) {
            var p = r.get(_ + "");
            p !== void 0 ? O(p, V) : _ in o && (p = u(() => /* @__PURE__ */ te(V)), r.set(_ + "", p));
          }
        if (g === void 0)
          (!h || dr(o, l)?.writable) && (g = u(() => /* @__PURE__ */ te(void 0)), O(g, Et(c)), r.set(l, g));
        else {
          h = g.v !== V;
          var w = u(() => Et(c));
          O(g, w);
        }
        var v = Reflect.getOwnPropertyDescriptor(o, l);
        if (v?.set && v.set.call(d, c), !h) {
          if (n && typeof l == "string") {
            var x = (
              /** @type {Source<number>} */
              r.get("length")
            ), $ = Number(l);
            Number.isInteger($) && $ >= x.v && O(x, $ + 1);
          }
          vr(i);
        }
        return !0;
      },
      ownKeys(o) {
        f(i);
        var l = Reflect.ownKeys(o).filter((g) => {
          var h = r.get(g);
          return h === void 0 || h.v !== V;
        });
        for (var [c, d] of r)
          d.v !== V && !(c in o) && l.push(c);
        return l;
      },
      setPrototypeOf() {
        bs();
      }
    }
  );
}
var Ln, gi, yi, mi;
function Zs() {
  if (Ln === void 0) {
    Ln = window, gi = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, r = Text.prototype;
    yi = dr(t, "firstChild").get, mi = dr(t, "nextSibling").get, Fn(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), Fn(r) && (r.__t = void 0);
  }
}
function _t(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function er(e) {
  return (
    /** @type {TemplateNode | null} */
    yi.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function Er(e) {
  return (
    /** @type {TemplateNode | null} */
    mi.call(e)
  );
}
function m(e, t) {
  return /* @__PURE__ */ er(e);
}
function fr(e, t = !1) {
  {
    var r = /* @__PURE__ */ er(e);
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ Er(r) : r;
  }
}
function A(e, t = 1, r = !1) {
  let n = e;
  for (; t--; )
    n = /** @type {TemplateNode} */
    /* @__PURE__ */ Er(n);
  return n;
}
function Qs(e) {
  e.textContent = "";
}
function bi() {
  return !1;
}
function ea(e, t, r) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElementNS(Qn, e, void 0)
  );
}
function wi(e) {
  var t = k, r = S;
  Re(null), Ge(null);
  try {
    return e();
  } finally {
    Re(t), Ge(r);
  }
}
function ta(e) {
  S === null && (k === null && gs(), ps()), gt && _s();
}
function ra(e, t) {
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
    f: e | re | Te,
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
  if ((e & hr) !== 0)
    Vt !== null ? Vt.push(n) : Pt.ensure().schedule(n);
  else if (t !== null) {
    try {
      tr(n);
    } catch (u) {
      throw ce(n), u;
    }
    i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && // either `null`, or a singular child
    (i.f & rr) === 0 && (i = i.first, (e & Ue) !== 0 && (e & Jt) !== 0 && i !== null && (i.f |= Jt));
  }
  if (i !== null && (i.parent = r, r !== null && ra(i, r), k !== null && (k.f & ne) !== 0 && (e & pt) === 0)) {
    var s = (
      /** @type {Derived} */
      k
    );
    (s.effects ?? (s.effects = [])).push(i);
  }
  return n;
}
function bn() {
  return k !== null && !Le;
}
function na(e) {
  const t = yt(Wr, null);
  return I(t, B), t.teardown = e, t;
}
function ia(e) {
  ta();
  var t = (
    /** @type {Effect} */
    S.f
  ), r = !k && (t & $e) !== 0 && (t & Lt) === 0;
  if (r) {
    var n = (
      /** @type {ComponentContext} */
      ye
    );
    (n.e ?? (n.e = [])).push(e);
  } else
    return xi(e);
}
function xi(e) {
  return yt(hr | us, e);
}
function sa(e) {
  Pt.ensure();
  const t = yt(pt | rr, e);
  return (r = {}) => new Promise((n) => {
    r.outro ? Dt(t, () => {
      ce(t), n(void 0);
    }) : (ce(t), n(void 0));
  });
}
function aa(e) {
  return yt(_r | rr, e);
}
function la(e, t = 0) {
  return yt(Wr | t, e);
}
function ee(e, t = [], r = [], n = []) {
  Vs(n, t, r, (i) => {
    yt(Wr, () => e(...i.map(f)));
  });
}
function wn(e, t = 0) {
  var r = yt(Ue | t, e);
  return r;
}
function Se(e) {
  return yt($e | rr, e);
}
function Ei(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = gt, n = k;
    $n(!0), Re(null);
    try {
      t.call(null);
    } finally {
      $n(r), Re(n);
    }
  }
}
function xn(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    const i = r.ac;
    i !== null && wi(() => {
      i.abort(st);
    });
    var n = r.next;
    (r.f & pt) !== 0 ? r.parent = null : ce(r, t), r = n;
  }
}
function oa(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & $e) === 0 && ce(t), t = r;
  }
}
function ce(e, t = !0) {
  var r = !1;
  (t || (e.f & fs) !== 0) && e.nodes !== null && e.nodes.end !== null && (fa(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), r = !0), I(e, In), xn(e, t && !r), pr(e, 0);
  var n = e.nodes && e.nodes.t;
  if (n !== null)
    for (const s of n)
      s.stop();
  Ei(e), e.f ^= In, e.f |= Ae;
  var i = e.parent;
  i !== null && i.first !== null && ki(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function fa(e, t) {
  for (; e !== null; ) {
    var r = e === t ? null : /* @__PURE__ */ Er(e);
    e.remove(), e = r;
  }
}
function ki(e) {
  var t = e.parent, r = e.prev, n = e.next;
  r !== null && (r.next = n), n !== null && (n.prev = r), t !== null && (t.first === e && (t.first = n), t.last === e && (t.last = r));
}
function Dt(e, t, r = !0) {
  var n = [];
  Si(e, n, !0);
  var i = () => {
    r && ce(e), t && t();
  }, s = n.length;
  if (s > 0) {
    var u = () => --s || i();
    for (var o of n)
      o.out(u);
  } else
    i();
}
function Si(e, t, r) {
  if ((e.f & ae) === 0) {
    e.f ^= ae;
    var n = e.nodes && e.nodes.t;
    if (n !== null)
      for (const o of n)
        (o.is_global || r) && t.push(o);
    for (var i = e.first; i !== null; ) {
      var s = i.next;
      if ((i.f & pt) === 0) {
        var u = (i.f & Jt) !== 0 || // If this is a branch effect without a block effect parent,
        // it means the parent block effect was pruned. In that case,
        // transparency information was transferred to the branch effect.
        (i.f & $e) !== 0 && (e.f & Ue) !== 0;
        Si(i, t, u ? r : !1);
      }
      i = s;
    }
  }
}
function En(e) {
  Ti(e, !0);
}
function Ti(e, t) {
  if ((e.f & ae) !== 0) {
    e.f ^= ae, (e.f & B) === 0 && (I(e, re), Pt.ensure().schedule(e));
    for (var r = e.first; r !== null; ) {
      var n = r.next, i = (r.f & Jt) !== 0 || (r.f & $e) !== 0;
      Ti(r, i ? t : !1), r = n;
    }
    var s = e.nodes && e.nodes.t;
    if (s !== null)
      for (const u of s)
        (u.is_global || t) && u.in();
  }
}
function kn(e, t) {
  if (e.nodes)
    for (var r = e.nodes.start, n = e.nodes.end; r !== null; ) {
      var i = r === n ? null : /* @__PURE__ */ Er(r);
      t.append(r), r = i;
    }
}
let $r = !1, gt = !1;
function $n(e) {
  gt = e;
}
let k = null, Le = !1;
function Re(e) {
  k = e;
}
let S = null;
function Ge(e) {
  S = e;
}
let Oe = null;
function Ai(e) {
  k !== null && (Oe === null ? Oe = [e] : Oe.push(e));
}
let ue = null, he = 0, we = null;
function ua(e) {
  we = e;
}
let Oi = 1, kt = 0, Ft = kt;
function zn(e) {
  Ft = e;
}
function Ri() {
  return ++Oi;
}
function kr(e) {
  var t = e.f;
  if ((t & re) !== 0)
    return !0;
  if (t & ne && (e.f &= ~It), (t & We) !== 0) {
    for (var r = (
      /** @type {Value[]} */
      e.deps
    ), n = r.length, i = 0; i < n; i++) {
      var s = r[i];
      if (kr(
        /** @type {Derived} */
        s
      ) && vi(
        /** @type {Derived} */
        s
      ), s.wv > e.wv)
        return !0;
    }
    (t & Te) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    je === null && I(e, B);
  }
  return !1;
}
function Ci(e, t, r = !0) {
  var n = e.reactions;
  if (n !== null && !(Oe !== null && Xt.call(Oe, e)))
    for (var i = 0; i < n.length; i++) {
      var s = n[i];
      (s.f & ne) !== 0 ? Ci(
        /** @type {Derived} */
        s,
        t,
        !1
      ) : t === s && (r ? I(s, re) : (s.f & B) !== 0 && I(s, We), gn(
        /** @type {Effect} */
        s
      ));
    }
}
function Mi(e) {
  var w;
  var t = ue, r = he, n = we, i = k, s = Oe, u = ye, o = Le, l = Ft, c = e.f;
  ue = /** @type {null | Value[]} */
  null, he = 0, we = null, k = (c & ($e | pt)) === 0 ? e : null, Oe = null, Zt(e.ctx), Le = !1, Ft = ++kt, e.ac !== null && (wi(() => {
    e.ac.abort(st);
  }), e.ac = null);
  try {
    e.f |= zr;
    var d = (
      /** @type {Function} */
      e.fn
    ), g = d();
    e.f |= Lt;
    var h = e.deps, _ = T?.is_fork;
    if (ue !== null) {
      var p;
      if (_ || pr(e, he), h !== null && he > 0)
        for (h.length = he + ue.length, p = 0; p < ue.length; p++)
          h[he + p] = ue[p];
      else
        e.deps = h = ue;
      if (bn() && (e.f & Te) !== 0)
        for (p = he; p < h.length; p++)
          ((w = h[p]).reactions ?? (w.reactions = [])).push(e);
    } else !_ && h !== null && he < h.length && (pr(e, he), h.length = he);
    if (ii() && we !== null && !Le && h !== null && (e.f & (ne | We | re)) === 0)
      for (p = 0; p < /** @type {Source[]} */
      we.length; p++)
        Ci(
          we[p],
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
    return si(v);
  } finally {
    e.f ^= zr, ue = t, he = r, we = n, k = i, Oe = s, Zt(u), Le = o, Ft = l;
  }
}
function ca(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var n = rs.call(r, e);
    if (n !== -1) {
      var i = r.length - 1;
      i === 0 ? r = t.reactions = null : (r[n] = r[i], r.pop());
    }
  }
  if (r === null && (t.f & ne) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (ue === null || !Xt.call(ue, t))) {
    var s = (
      /** @type {Derived} */
      t
    );
    (s.f & Te) !== 0 && (s.f ^= Te, s.f &= ~It), s.v !== V && _n(s), Ks(s), pr(s, 0);
  }
}
function pr(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var n = t; n < r.length; n++)
      ca(e, r[n]);
}
function tr(e) {
  var t = e.f;
  if ((t & Ae) === 0) {
    I(e, B);
    var r = S, n = $r;
    S = e, $r = !0;
    try {
      (t & (Ue | Jn)) !== 0 ? oa(e) : xn(e), Ei(e);
      var i = Mi(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = Oi;
      var s;
    } finally {
      $r = n, S = r;
    }
  }
}
function f(e) {
  var t = e.f, r = (t & ne) !== 0;
  if (k !== null && !Le) {
    var n = S !== null && (S.f & Ae) !== 0;
    if (!n && (Oe === null || !Xt.call(Oe, e))) {
      var i = k.deps;
      if ((k.f & zr) !== 0)
        e.rv < kt && (e.rv = kt, ue === null && i !== null && i[he] === e ? he++ : ue === null ? ue = [e] : ue.push(e));
      else {
        (k.deps ?? (k.deps = [])).push(e);
        var s = e.reactions;
        s === null ? e.reactions = [k] : Xt.call(s, k) || s.push(k);
      }
    }
  }
  if (gt && Nt.has(e))
    return Nt.get(e);
  if (r) {
    var u = (
      /** @type {Derived} */
      e
    );
    if (gt) {
      var o = u.v;
      return ((u.f & B) === 0 && u.reactions !== null || Di(u)) && (o = mn(u)), Nt.set(u, o), o;
    }
    var l = (u.f & Te) === 0 && !Le && k !== null && ($r || (k.f & Te) !== 0), c = (u.f & Lt) === 0;
    kr(u) && (l && (u.f |= Te), vi(u)), l && !c && (hi(u), Ni(u));
  }
  if (je?.has(e))
    return je.get(e);
  if ((e.f & ht) !== 0)
    throw e.v;
  return e.v;
}
function Ni(e) {
  if (e.f |= Te, e.deps !== null)
    for (const t of e.deps)
      (t.reactions ?? (t.reactions = [])).push(e), (t.f & ne) !== 0 && (t.f & Te) === 0 && (hi(
        /** @type {Derived} */
        t
      ), Ni(
        /** @type {Derived} */
        t
      ));
}
function Di(e) {
  if (e.v === V) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (Nt.has(t) || (t.f & ne) !== 0 && Di(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function Fi(e) {
  var t = Le;
  try {
    return Le = !0, e();
  } finally {
    Le = t;
  }
}
const da = ["touchstart", "touchmove"];
function va(e) {
  return da.includes(e);
}
const St = Symbol("events"), Ii = /* @__PURE__ */ new Set(), cn = /* @__PURE__ */ new Set();
function Be(e, t, r) {
  (t[St] ?? (t[St] = {}))[e] = r;
}
function ha(e) {
  for (var t = 0; t < e.length; t++)
    Ii.add(e[t]);
  for (var r of cn)
    r(e);
}
let Bn = null;
function Hn(e) {
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), n = e.type, i = e.composedPath?.() || [], s = (
    /** @type {null | Element} */
    i[0] || e.target
  );
  Bn = e;
  var u = 0, o = Bn === e && e[St];
  if (o) {
    var l = i.indexOf(o);
    if (l !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e[St] = t;
      return;
    }
    var c = i.indexOf(t);
    if (c === -1)
      return;
    l <= c && (u = l);
  }
  if (s = /** @type {Element} */
  i[u] || e.target, s !== t) {
    ns(e, "currentTarget", {
      configurable: !0,
      get() {
        return s || r;
      }
    });
    var d = k, g = S;
    Re(null), Ge(null);
    try {
      for (var h, _ = []; s !== null; ) {
        var p = s.assignedSlot || s.parentNode || /** @type {any} */
        s.host || null;
        try {
          var w = s[St]?.[n];
          w != null && (!/** @type {any} */
          s.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === s) && w.call(s, e);
        } catch (v) {
          h ? _.push(v) : h = v;
        }
        if (e.cancelBubble || p === t || p === null)
          break;
        s = p;
      }
      if (h) {
        for (let v of _)
          queueMicrotask(() => {
            throw v;
          });
        throw h;
      }
    } finally {
      e[St] = t, delete e.currentTarget, Re(d), Ge(g);
    }
  }
}
const _a = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (e) => e
  })
);
function pa(e) {
  return (
    /** @type {string} */
    _a?.createHTML(e) ?? e
  );
}
function Pi(e) {
  var t = ea("template");
  return t.innerHTML = pa(e.replaceAll("<!>", "<!---->")), t.content;
}
function Hr(e, t) {
  var r = (
    /** @type {Effect} */
    S
  );
  r.nodes === null && (r.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function L(e, t) {
  var r = (t & As) !== 0, n = (t & Os) !== 0, i, s = !e.startsWith("<!>");
  return () => {
    i === void 0 && (i = Pi(s ? e : "<!>" + e), r || (i = /** @type {TemplateNode} */
    /* @__PURE__ */ er(i)));
    var u = (
      /** @type {TemplateNode} */
      n || gi ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (r) {
      var o = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ er(u)
      ), l = (
        /** @type {TemplateNode} */
        u.lastChild
      );
      Hr(o, l);
    } else
      Hr(u, u);
    return u;
  };
}
// @__NO_SIDE_EFFECTS__
function ga(e, t, r = "svg") {
  var n = !e.startsWith("<!>"), i = `<${r}>${n ? e : "<!>" + e}</${r}>`, s;
  return () => {
    if (!s) {
      var u = (
        /** @type {DocumentFragment} */
        Pi(i)
      ), o = (
        /** @type {Element} */
        /* @__PURE__ */ er(u)
      );
      s = /** @type {Element} */
      /* @__PURE__ */ er(o);
    }
    var l = (
      /** @type {TemplateNode} */
      s.cloneNode(!0)
    );
    return Hr(l, l), l;
  };
}
// @__NO_SIDE_EFFECTS__
function Sn(e, t) {
  return /* @__PURE__ */ ga(e, t, "svg");
}
function qn() {
  var e = document.createDocumentFragment(), t = document.createComment(""), r = _t();
  return e.append(t, r), Hr(t, r), e;
}
function M(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function G(e, t) {
  var r = t == null ? "" : typeof t == "object" ? `${t}` : t;
  r !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = r, e.nodeValue = `${r}`);
}
function ya(e, t) {
  return ma(e, t);
}
const Nr = /* @__PURE__ */ new Map();
function ma(e, { target: t, anchor: r, props: n = {}, events: i, context: s, intro: u = !0, transformError: o }) {
  Zs();
  var l = void 0, c = sa(() => {
    var d = r ?? t.appendChild(_t());
    $s(
      /** @type {TemplateNode} */
      d,
      {
        pending: () => {
        }
      },
      (_) => {
        ri({});
        var p = (
          /** @type {ComponentContext} */
          ye
        );
        s && (p.c = s), i && (n.$$events = i), l = e(_, n) || {}, ni();
      },
      o
    );
    var g = /* @__PURE__ */ new Set(), h = (_) => {
      for (var p = 0; p < _.length; p++) {
        var w = _[p];
        if (!g.has(w)) {
          g.add(w);
          var v = va(w);
          for (const R of [t, document]) {
            var x = Nr.get(R);
            x === void 0 && (x = /* @__PURE__ */ new Map(), Nr.set(R, x));
            var $ = x.get(w);
            $ === void 0 ? (R.addEventListener(w, Hn, { passive: v }), x.set(w, 1)) : x.set(w, $ + 1);
          }
        }
      }
    };
    return h(Ur(Ii)), cn.add(h), () => {
      for (var _ of g)
        for (const v of [t, document]) {
          var p = (
            /** @type {Map<string, number>} */
            Nr.get(v)
          ), w = (
            /** @type {number} */
            p.get(_)
          );
          --w == 0 ? (v.removeEventListener(_, Hn), p.delete(_), p.size === 0 && Nr.delete(v)) : p.set(_, w);
        }
      cn.delete(h), d !== r && d.parentNode?.removeChild(d);
    };
  });
  return dn.set(l, c), l;
}
let dn = /* @__PURE__ */ new WeakMap();
function ba(e, t) {
  const r = dn.get(e);
  return r ? (dn.delete(e), r(t)) : Promise.resolve();
}
var Pe, Ve, ge, Ct, wr, xr, Yr;
class wa {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, r = !0) {
    /** @type {TemplateNode} */
    De(this, "anchor");
    /** @type {Map<Batch, Key>} */
    b(this, Pe, /* @__PURE__ */ new Map());
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
    b(this, wr, !0);
    /**
     * @param {Batch} batch
     */
    b(this, xr, (t) => {
      if (a(this, Pe).has(t)) {
        var r = (
          /** @type {Key} */
          a(this, Pe).get(t)
        ), n = a(this, Ve).get(r);
        if (n)
          En(n), a(this, Ct).delete(r);
        else {
          var i = a(this, ge).get(r);
          i && (a(this, Ve).set(r, i.effect), a(this, ge).delete(r), i.fragment.lastChild.remove(), this.anchor.before(i.fragment), n = i.effect);
        }
        for (const [s, u] of a(this, Pe)) {
          if (a(this, Pe).delete(s), s === t)
            break;
          const o = a(this, ge).get(u);
          o && (ce(o.effect), a(this, ge).delete(u));
        }
        for (const [s, u] of a(this, Ve)) {
          if (s === r || a(this, Ct).has(s)) continue;
          const o = () => {
            if (Array.from(a(this, Pe).values()).includes(s)) {
              var c = document.createDocumentFragment();
              kn(u, c), c.append(_t()), a(this, ge).set(s, { effect: u, fragment: c });
            } else
              ce(u);
            a(this, Ct).delete(s), a(this, Ve).delete(s);
          };
          a(this, wr) || !n ? (a(this, Ct).add(s), Dt(u, o, !1)) : o();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    b(this, Yr, (t) => {
      a(this, Pe).delete(t);
      const r = Array.from(a(this, Pe).values());
      for (const [n, i] of a(this, ge))
        r.includes(n) || (ce(i.effect), a(this, ge).delete(n));
    });
    this.anchor = t, E(this, wr, r);
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
    ), i = bi();
    if (r && !a(this, Ve).has(t) && !a(this, ge).has(t))
      if (i) {
        var s = document.createDocumentFragment(), u = _t();
        s.append(u), a(this, ge).set(t, {
          effect: Se(() => r(u)),
          fragment: s
        });
      } else
        a(this, Ve).set(
          t,
          Se(() => r(this.anchor))
        );
    if (a(this, Pe).set(n, t), i) {
      for (const [o, l] of a(this, Ve))
        o === t ? n.unskip_effect(l) : n.skip_effect(l);
      for (const [o, l] of a(this, ge))
        o === t ? n.unskip_effect(l.effect) : n.skip_effect(l.effect);
      n.oncommit(a(this, xr)), n.ondiscard(a(this, Yr));
    } else
      a(this, xr).call(this, n);
  }
}
Pe = new WeakMap(), Ve = new WeakMap(), ge = new WeakMap(), Ct = new WeakMap(), wr = new WeakMap(), xr = new WeakMap(), Yr = new WeakMap();
function nt(e, t, r = !1) {
  var n = new wa(e), i = r ? Jt : 0;
  function s(u, o) {
    n.ensure(u, o);
  }
  wn(() => {
    var u = !1;
    t((o, l = 0) => {
      u = !0, s(l, o);
    }), u || s(-1, null);
  }, i);
}
function Fe(e, t) {
  return t;
}
function xa(e, t, r) {
  for (var n = [], i = t.length, s, u = t.length, o = 0; o < i; o++) {
    let g = t[o];
    Dt(
      g,
      () => {
        if (s) {
          if (s.pending.delete(g), s.done.add(g), s.pending.size === 0) {
            var h = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            vn(e, Ur(s.done)), h.delete(s), h.size === 0 && (e.outrogroups = null);
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
      var c = (
        /** @type {Element} */
        r
      ), d = (
        /** @type {Element} */
        c.parentNode
      );
      Qs(d), d.append(c), e.items.clear();
    }
    vn(e, t, !l);
  } else
    s = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ?? (e.outrogroups = /* @__PURE__ */ new Set())).add(s);
}
function vn(e, t, r = !0) {
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
  for (var i = 0; i < t.length; i++) {
    var s = t[i];
    if (n?.has(s)) {
      s.f |= Ye;
      const u = document.createDocumentFragment();
      kn(s, u);
    } else
      ce(t[i], r);
  }
}
var Vn;
function Ie(e, t, r, n, i, s = null) {
  var u = e, o = /* @__PURE__ */ new Map(), l = (t & Zn) !== 0;
  if (l) {
    var c = (
      /** @type {Element} */
      e
    );
    u = c.appendChild(_t());
  }
  var d = null, g = /* @__PURE__ */ Ws(() => {
    var R = r();
    return Gn(R) ? R : R == null ? [] : Ur(R);
  }), h, _ = /* @__PURE__ */ new Map(), p = !0;
  function w(R) {
    ($.effect.f & Ae) === 0 && ($.pending.delete(R), $.fallback = d, Ea($, h, u, t, n), d !== null && (h.length === 0 ? (d.f & Ye) === 0 ? En(d) : (d.f ^= Ye, cr(d, null, u)) : Dt(d, () => {
      d = null;
    })));
  }
  function v(R) {
    $.pending.delete(R);
  }
  var x = wn(() => {
    h = /** @type {V[]} */
    f(g);
    for (var R = h.length, K = /* @__PURE__ */ new Set(), Ce = (
      /** @type {Batch} */
      T
    ), Ke = bi(), X = 0; X < R; X += 1) {
      var me = h[X], Xe = n(me, X), z = p ? null : o.get(Xe);
      z ? (z.v && Qt(z.v, me), z.i && Qt(z.i, X), Ke && Ce.unskip_effect(z.e)) : (z = ka(
        o,
        p ? u : Vn ?? (Vn = _t()),
        me,
        Xe,
        X,
        i,
        t,
        r
      ), p || (z.e.f |= Ye), o.set(Xe, z)), K.add(Xe);
    }
    if (R === 0 && s && !d && (p ? d = Se(() => s(u)) : (d = Se(() => s(Vn ?? (Vn = _t()))), d.f |= Ye)), R > K.size && hs(), !p)
      if (_.set(Ce, K), Ke) {
        for (const [Gr, Sr] of o)
          K.has(Gr) || Ce.skip_effect(Sr.e);
        Ce.oncommit(w), Ce.ondiscard(v);
      } else
        w(Ce);
    f(g);
  }), $ = { effect: x, items: o, pending: _, outrogroups: null, fallback: d };
  p = !1;
}
function ur(e) {
  for (; e !== null && (e.f & $e) === 0; )
    e = e.next;
  return e;
}
function Ea(e, t, r, n, i) {
  var s = (n & Ss) !== 0, u = t.length, o = e.items, l = ur(e.effect.first), c, d = null, g, h = [], _ = [], p, w, v, x;
  if (s)
    for (x = 0; x < u; x += 1)
      p = t[x], w = i(p, x), v = /** @type {EachItem} */
      o.get(w).e, (v.f & Ye) === 0 && (v.nodes?.a?.measure(), (g ?? (g = /* @__PURE__ */ new Set())).add(v));
  for (x = 0; x < u; x += 1) {
    if (p = t[x], w = i(p, x), v = /** @type {EachItem} */
    o.get(w).e, e.outrogroups !== null)
      for (const z of e.outrogroups)
        z.pending.delete(v), z.done.delete(v);
    if ((v.f & ae) !== 0 && (En(v), s && (v.nodes?.a?.unfix(), (g ?? (g = /* @__PURE__ */ new Set())).delete(v))), (v.f & Ye) !== 0)
      if (v.f ^= Ye, v === l)
        cr(v, null, r);
      else {
        var $ = d ? d.next : l;
        v === e.effect.last && (e.effect.last = v.prev), v.prev && (v.prev.next = v.next), v.next && (v.next.prev = v.prev), ut(e, d, v), ut(e, v, $), cr(v, $, r), d = v, h = [], _ = [], l = ur(d.next);
        continue;
      }
    if (v !== l) {
      if (c !== void 0 && c.has(v)) {
        if (h.length < _.length) {
          var R = _[0], K;
          d = R.prev;
          var Ce = h[0], Ke = h[h.length - 1];
          for (K = 0; K < h.length; K += 1)
            cr(h[K], R, r);
          for (K = 0; K < _.length; K += 1)
            c.delete(_[K]);
          ut(e, Ce.prev, Ke.next), ut(e, d, Ce), ut(e, Ke, R), l = R, d = Ke, x -= 1, h = [], _ = [];
        } else
          c.delete(v), cr(v, l, r), ut(e, v.prev, v.next), ut(e, v, d === null ? e.effect.first : d.next), ut(e, d, v), d = v;
        continue;
      }
      for (h = [], _ = []; l !== null && l !== v; )
        (c ?? (c = /* @__PURE__ */ new Set())).add(l), _.push(l), l = ur(l.next);
      if (l === null)
        continue;
    }
    (v.f & Ye) === 0 && h.push(v), d = v, l = ur(v.next);
  }
  if (e.outrogroups !== null) {
    for (const z of e.outrogroups)
      z.pending.size === 0 && (vn(e, Ur(z.done)), e.outrogroups?.delete(z));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (l !== null || c !== void 0) {
    var X = [];
    if (c !== void 0)
      for (v of c)
        (v.f & ae) === 0 && X.push(v);
    for (; l !== null; )
      (l.f & ae) === 0 && l !== e.fallback && X.push(l), l = ur(l.next);
    var me = X.length;
    if (me > 0) {
      var Xe = (n & Zn) !== 0 && u === 0 ? r : null;
      if (s) {
        for (x = 0; x < me; x += 1)
          X[x].nodes?.a?.measure();
        for (x = 0; x < me; x += 1)
          X[x].nodes?.a?.fix();
      }
      xa(e, X, Xe);
    }
  }
  s && Mt(() => {
    if (g !== void 0)
      for (v of g)
        v.nodes?.a?.apply();
  });
}
function ka(e, t, r, n, i, s, u, o) {
  var l = (u & Es) !== 0 ? (u & Ts) === 0 ? /* @__PURE__ */ Xs(r, !1, !1) : jt(r) : null, c = (u & ks) !== 0 ? jt(i) : null;
  return {
    v: l,
    i: c,
    e: Se(() => (s(t, l ?? r, c ?? i, o), () => {
      e.delete(n);
    }))
  };
}
function cr(e, t, r) {
  if (e.nodes)
    for (var n = e.nodes.start, i = e.nodes.end, s = t && (t.f & Ye) === 0 ? (
      /** @type {EffectNodes} */
      t.nodes.start
    ) : r; n !== null; ) {
      var u = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Er(n)
      );
      if (s.before(n), n === i)
        return;
      n = u;
    }
}
function ut(e, t, r) {
  t === null ? e.effect.first = r : t.next = r, r === null ? e.effect.last = t : r.prev = t;
}
function Sa(e, t, r) {
  var n = e == null ? "" : "" + e;
  return n === "" ? null : n;
}
function Ta(e, t) {
  return e == null ? null : String(e);
}
function Aa(e, t, r, n, i, s) {
  var u = e.__className;
  if (u !== r || u === void 0) {
    var o = Sa(r);
    o == null ? e.removeAttribute("class") : e.className = o, e.__className = r;
  }
  return s;
}
function Yn(e, t, r, n) {
  var i = e.__style;
  if (i !== t) {
    var s = Ta(t);
    s == null ? e.removeAttribute("style") : e.style.cssText = s, e.__style = t;
  }
  return n;
}
const Oa = Symbol("is custom element"), Ra = Symbol("is html");
function oe(e, t, r, n) {
  var i = Ca(e);
  i[t] !== (i[t] = r) && (t === "loading" && (e[cs] = r), r == null ? e.removeAttribute(t) : typeof r != "string" && Ma(e).includes(t) ? e[t] = r : e.setAttribute(t, r));
}
function Ca(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [Oa]: e.nodeName.includes("-"),
      [Ra]: e.namespaceURI === Qn
    })
  );
}
var Un = /* @__PURE__ */ new Map();
function Ma(e) {
  var t = e.getAttribute("is") || e.nodeName, r = Un.get(t);
  if (r) return r;
  Un.set(t, r = []);
  for (var n, i = e, s = Element.prototype; s !== i; ) {
    n = is(i);
    for (var u in n)
      n[u].set && r.push(u);
    i = Kn(i);
  }
  return r;
}
function Na(e) {
  ye === null && ds(), ia(() => {
    const t = Fi(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
const Da = "5";
var Wn;
typeof window < "u" && ((Wn = window.__svelte ?? (window.__svelte = {})).v ?? (Wn.v = /* @__PURE__ */ new Set())).add(Da);
var Fa = /* @__PURE__ */ L('<div class="bg-red-50 border border-red-300 text-red-800 px-4 py-3 rounded-lg mb-4 text-sm"> <button class="ml-3 underline text-sm">Retry</button></div>'), Ia = /* @__PURE__ */ L('<div class="flex items-center justify-center py-16"><svg class="animate-spin h-8 w-8 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> <span class="ml-3 text-gray-500">Loading entity schema...</span></div>'), Pa = /* @__PURE__ */ L('<div class="flex items-center gap-1"><span class="w-3 h-3 rounded-sm"></span> <span class="text-gray-500"> </span></div>'), ja = /* @__PURE__ */ Sn('<marker markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7"></polygon></marker>'), La = /* @__PURE__ */ Sn('<line stroke-width="2"></line>'), $a = /* @__PURE__ */ Sn('<g class="cursor-move"><rect width="150" height="80" rx="8" class="cursor-pointer drop-shadow-sm" role="button" tabindex="0"></rect><text x="75" y="25" text-anchor="middle" fill="white" font-weight="600" font-size="14"> </text><text x="75" y="45" text-anchor="middle" fill="white" opacity="0.8" font-size="11"> </text><text x="75" y="65" text-anchor="middle" fill="white" opacity="0.9" font-size="10">Click to explore</text></g>'), za = /* @__PURE__ */ L('<span class="bg-gray-100 text-gray-700 px-2 py-0.5 rounded text-xs font-mono"> </span>'), Ba = /* @__PURE__ */ L('<div class="flex items-center justify-between p-2 bg-gray-50 rounded text-xs"><span class="font-medium text-gray-700"> </span> <span class="font-semibold"> </span> <span class="text-gray-500"> </span></div>'), Ha = /* @__PURE__ */ L('<div><h4 class="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Relationships</h4> <div class="space-y-1.5"></div></div>'), qa = /* @__PURE__ */ L('<th class="px-3 py-2 text-left font-semibold text-gray-600 border-b border-gray-200"> </th>'), Va = /* @__PURE__ */ L('<td class="px-3 py-2 border-b border-gray-100 max-w-[150px] truncate"> </td>'), Ya = /* @__PURE__ */ L('<tr><!><td class="px-3 py-2 border-b border-gray-100"><button class="text-blue-600 hover:underline">View</button></td></tr>'), Ua = /* @__PURE__ */ L('<div class="flex justify-between items-center mt-3 text-xs"><button class="px-3 py-1 bg-gray-100 border border-gray-300 rounded hover:bg-gray-200 disabled:opacity-40 disabled:cursor-not-allowed">Previous</button> <span class="text-gray-500"> </span> <button class="px-3 py-1 bg-gray-100 border border-gray-300 rounded hover:bg-gray-200 disabled:opacity-40 disabled:cursor-not-allowed">Next</button></div>'), Wa = /* @__PURE__ */ L('<div class="overflow-x-auto border border-gray-200 rounded"><table class="min-w-full text-xs"><thead><tr class="bg-gray-50"><!><th class="px-3 py-2 text-left font-semibold text-gray-600 border-b border-gray-200">Actions</th></tr></thead><tbody></tbody></table></div> <!>', 1), Ga = /* @__PURE__ */ L('<p class="text-gray-500 text-center py-4 text-sm"> </p>'), Ka = /* @__PURE__ */ L('<div class="flex-1 p-4 overflow-y-auto space-y-5"><div><h4 class="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Fields</h4> <div class="flex flex-wrap gap-1.5"></div></div> <!> <div><h4 class="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Entity Data</h4> <!></div></div>'), Xa = /* @__PURE__ */ L('<div class="flex-1 flex items-center justify-center p-4"><p class="text-gray-500 text-sm"> </p></div>'), Ja = /* @__PURE__ */ L('<div class="px-4 py-3 border-b border-gray-200 bg-gray-50"><h3 class="text-sm font-semibold text-gray-700"> <span class="text-xs text-gray-400 font-normal ml-1"> </span></h3></div> <!>', 1), Za = /* @__PURE__ */ L('<div class="flex-1 flex items-center justify-center p-4"><p class="text-gray-500 text-sm">Select an entity from the diagram to view its data</p></div>'), Qa = /* @__PURE__ */ L('<div class="flex text-xs"><span class="font-medium text-gray-700 min-w-[80px] shrink-0"> </span> <span class="text-gray-500 break-all"> </span></div>'), el = /* @__PURE__ */ L('<div class="fixed bottom-4 right-4 w-80 bg-white border border-gray-200 rounded-lg shadow-xl z-50"><div class="px-4 py-3 border-b border-gray-200 bg-gray-50 flex items-center justify-between rounded-t-lg"><h4 class="text-sm font-semibold text-gray-700">Record Details</h4> <button class="text-gray-400 hover:text-gray-700 text-xl leading-none">&times;</button></div> <div class="p-4 max-h-72 overflow-y-auto space-y-1.5"></div></div>'), tl = /* @__PURE__ */ L('<div class="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-4" style="min-height:calc(100vh - 220px)"><div class="bg-white border border-gray-200 rounded-lg overflow-hidden flex flex-col"><div class="px-4 py-3 border-b border-gray-200 bg-gray-50 flex items-center justify-between flex-wrap gap-2"><h3 class="text-sm font-semibold text-gray-700">Entity Relationship Diagram</h3> <div class="flex gap-3 text-xs"></div></div> <div class="flex-1 overflow-auto bg-gray-50/50"><svg class="block"><defs></defs><!><!></svg></div></div> <div class="bg-white border border-gray-200 rounded-lg overflow-hidden flex flex-col"><!></div></div> <!>', 1), rl = /* @__PURE__ */ L('<div class="max-w-6xl mx-auto p-4"><div class="mb-6"><div class="flex items-center gap-3 flex-wrap"><h2 class="text-2xl font-bold text-gray-900">ERD Explorer</h2> <button class="ml-auto px-3 py-1.5 bg-gray-100 border border-gray-300 rounded-lg text-xs hover:bg-gray-200 transition-colors disabled:opacity-50">Refresh</button></div> <p class="text-gray-600 text-sm mt-1">Entity-Relationship diagram and data browser</p></div> <!> <!></div>');
function nl(e, t) {
  ri(t, !0);
  const r = "erd_explorer";
  let n = /* @__PURE__ */ te(Et({})), i = /* @__PURE__ */ te(Et({})), s = /* @__PURE__ */ te(!0), u = /* @__PURE__ */ te(""), o = /* @__PURE__ */ te(""), l = /* @__PURE__ */ te(null), c = /* @__PURE__ */ te(1);
  const d = 10;
  let g = /* @__PURE__ */ te(!1), h = { x: 0, y: 0 };
  const _ = 900, p = 600, w = {
    OneToOne: "#4F46E5",
    OneToMany: "#059669",
    ManyToOne: "#DC2626",
    ManyToMany: "#7C2D12"
  }, v = {
    Realm: "#8B5CF6",
    User: "#3B82F6",
    Human: "#10B981",
    Identity: "#F59E0B"
  };
  async function x(y, N = "{}") {
    const F = await t.ctx.backend.extension_sync_call(JSON.stringify({ extension_name: r, function_name: y, args: N }));
    return JSON.parse(F);
  }
  async function $() {
    O(s, !0), O(u, "");
    try {
      const y = await x("get_entity_schema", "{}"), N = y?.entities ?? y?.data?.entities ?? y?.data ?? y;
      if (N && typeof N == "object") {
        let F = 0, ze = 0;
        const mt = 4, Tr = {};
        for (const [Ar, nr] of Object.entries(N)) {
          if (Ar.startsWith("_")) continue;
          const $t = nr;
          Tr[Ar] = {
            ...$t,
            fields: $t.fields || [],
            relationships: $t.relationships || {},
            position: { x: 80 + F * 200, y: 80 + ze * 160 },
            expanded: !1
          }, F++, F >= mt && (F = 0, ze++);
        }
        O(n, Tr, !0);
      }
    } catch (y) {
      O(u, y?.message || String(y), !0);
    } finally {
      O(s, !1);
    }
  }
  async function R(y, N = 0) {
    try {
      const F = await x("get_entity_data", JSON.stringify({ entity_type: y, page_num: N, page_size: d }));
      F && O(
        i,
        {
          ...f(i),
          [y]: F?.data ?? F
        },
        !0
      );
    } catch (F) {
      console.error(`Failed to load ${y} data:`, F);
    }
  }
  function K(y) {
    f(o) === y ? f(n)[y].expanded = !f(n)[y].expanded : (f(o) && f(n)[f(o)] && (f(n)[f(o)].expanded = !1), O(o, y, !0), f(n)[y].expanded = !0, O(l, null), O(c, 1), R(y, 0)), O(n, { ...f(n) }, !0);
  }
  function Ce(y) {
    return v[y] || "#6B7280";
  }
  function Ke(y) {
    return w[y] || "#6B7280";
  }
  function X(y) {
    return f(i)[y]?.items || f(i)[y]?.data || [];
  }
  function me(y) {
    return f(i)[y]?.total_pages || 0;
  }
  function Xe(y) {
    return f(i)[y]?.total_items_count || f(i)[y]?.total_count || 0;
  }
  async function z(y, N) {
    O(c, N, !0), await R(y, N - 1);
  }
  function Gr(y, N) {
    O(g, !0), h.x = y.clientX - f(n)[N].position.x, h.y = y.clientY - f(n)[N].position.y;
    function F(mt) {
      f(g) && (f(n)[N].position.x = mt.clientX - h.x, f(n)[N].position.y = mt.clientY - h.y, O(n, { ...f(n) }, !0));
    }
    function ze() {
      O(g, !1), document.removeEventListener("mousemove", F), document.removeEventListener("mouseup", ze);
    }
    document.addEventListener("mousemove", F), document.addEventListener("mouseup", ze);
  }
  let Sr = /* @__PURE__ */ Q(() => Object.entries(f(n))), Kr = /* @__PURE__ */ Q(() => f(o) && f(n)[f(o)] ? Array.isArray(f(n)[f(o)].fields) ? f(n)[f(o)].fields : Object.keys(f(n)[f(o)].fields || {}) : []), Tn = /* @__PURE__ */ Q(() => f(o) && f(n)[f(o)]?.relationships ? Object.entries(f(n)[f(o)].relationships) : []);
  Na(async () => {
    await $();
    const y = Object.keys(f(n));
    y.length > 0 && (O(o, y[0], !0), f(n)[y[0]].expanded = !0, O(n, { ...f(n) }, !0), await R(y[0], 0));
  });
  var An = rl(), On = m(An), ji = m(On), Rn = A(m(ji), 2), Cn = A(On, 2);
  {
    var Li = (y) => {
      var N = Fa(), F = m(N), ze = A(F);
      ee(() => G(F, `${f(u) ?? ""} `)), Be("click", ze, $), M(y, N);
    };
    nt(Cn, (y) => {
      f(u) && y(Li);
    });
  }
  var $i = A(Cn, 2);
  {
    var zi = (y) => {
      var N = Ia();
      M(y, N);
    }, Bi = (y) => {
      var N = tl(), F = fr(N), ze = m(F), mt = m(ze), Tr = A(m(mt), 2);
      Ie(Tr, 21, () => Object.entries(w), Fe, (H, ie) => {
        var J = /* @__PURE__ */ Q(() => wt(f(ie), 2));
        let P = () => f(J)[0], le = () => f(J)[1];
        var Y = Pa(), U = m(Y), Me = A(U, 2), Je = m(Me);
        ee(() => {
          Yn(U, `background-color:${le() ?? ""}`), G(Je, P());
        }), M(H, Y);
      });
      var Ar = A(mt, 2), nr = m(Ar);
      oe(nr, "width", _), oe(nr, "height", p);
      var $t = m(nr);
      Ie($t, 21, () => Object.entries(w), Fe, (H, ie) => {
        var J = /* @__PURE__ */ Q(() => wt(f(ie), 2));
        let P = () => f(J)[0], le = () => f(J)[1];
        var Y = ja(), U = m(Y);
        ee(() => {
          oe(Y, "id", `arrow-${P() ?? ""}`), oe(U, "fill", le());
        }), M(H, Y);
      });
      var Mn = A($t);
      Ie(Mn, 17, () => f(Sr), Fe, (H, ie) => {
        var J = /* @__PURE__ */ Q(() => wt(f(ie), 2));
        let P = () => f(J)[1];
        var le = qn(), Y = fr(le);
        Ie(Y, 17, () => Object.entries(P().relationships || {}), Fe, (U, Me) => {
          var Je = /* @__PURE__ */ Q(() => wt(f(Me), 2));
          let Ze = () => f(Je)[1];
          const W = /* @__PURE__ */ Q(() => typeof Ze() == "object" ? Ze() : { target: Ze(), type: "OneToMany" }), q = /* @__PURE__ */ Q(() => f(W).target);
          var Ne = qn(), bt = fr(Ne);
          {
            var zt = (ir) => {
              var Qe = La();
              ee(
                (Xr) => {
                  oe(Qe, "x1", P().position.x + 75), oe(Qe, "y1", P().position.y + 40), oe(Qe, "x2", f(n)[f(q)].position.x + 75), oe(Qe, "y2", f(n)[f(q)].position.y + 40), oe(Qe, "stroke", Xr), oe(Qe, "marker-end", `url(#arrow-${f(W).type ?? ""})`);
                },
                [() => Ke(f(W).type)]
              ), M(ir, Qe);
            };
            nt(bt, (ir) => {
              f(n)[f(q)] && ir(zt);
            });
          }
          M(U, Ne);
        }), M(H, le);
      });
      var Hi = A(Mn);
      Ie(Hi, 17, () => f(Sr), Fe, (H, ie) => {
        var J = /* @__PURE__ */ Q(() => wt(f(ie), 2));
        let P = () => f(J)[0], le = () => f(J)[1];
        var Y = $a(), U = m(Y), Me = A(U), Je = m(Me), Ze = A(Me), W = m(Ze);
        ee(
          (q, Ne) => {
            oe(Y, "transform", `translate(${le().position.x ?? ""}, ${le().position.y ?? ""})`), oe(U, "fill", q), oe(U, "stroke", f(o) === P() ? "#1F2937" : "#E5E7EB"), oe(U, "stroke-width", f(o) === P() ? 3 : 1), G(Je, P()), G(W, `${Ne ?? ""} records`);
          },
          [
            () => Ce(P()),
            () => Xe(P()) || 0
          ]
        ), Be("mousedown", Y, (q) => Gr(q, P())), Be("click", U, () => K(P())), Be("keydown", U, (q) => {
          q.key === "Enter" && K(P());
        }), M(H, Y);
      });
      var qi = A(ze, 2), Vi = m(qi);
      {
        var Yi = (H) => {
          var ie = Ja(), J = fr(ie), P = m(J), le = m(P), Y = A(le), U = m(Y), Me = A(J, 2);
          {
            var Je = (W) => {
              var q = Ka(), Ne = m(q), bt = A(m(Ne), 2);
              Ie(bt, 21, () => f(Kr), Fe, (be, de) => {
                var et = za(), sr = m(et);
                ee(() => G(sr, typeof f(de) == "string" ? f(de) : f(de).name || f(de))), M(be, et);
              });
              var zt = A(Ne, 2);
              {
                var ir = (be) => {
                  var de = Ha(), et = A(m(de), 2);
                  Ie(et, 21, () => f(Tn), Fe, (sr, Or) => {
                    var Rr = /* @__PURE__ */ Q(() => wt(f(Or), 2));
                    let Jr = () => f(Rr)[0], ar = () => f(Rr)[1];
                    const lr = /* @__PURE__ */ Q(() => typeof ar() == "object" ? ar() : { target: ar(), type: "OneToMany" });
                    var Cr = Ba(), Mr = m(Cr), tt = m(Mr), Z = A(Mr, 2), ve = m(Z), rt = A(Z, 2), or = m(rt);
                    ee(
                      (Bt) => {
                        G(tt, Jr()), Yn(Z, `color:${Bt ?? ""}`), G(ve, f(lr).type), G(or, f(lr).target);
                      },
                      [() => Ke(f(lr).type)]
                    ), M(sr, Cr);
                  }), M(be, de);
                };
                nt(zt, (be) => {
                  f(Tn).length > 0 && be(ir);
                });
              }
              var Qe = A(zt, 2), Xr = A(m(Qe), 2);
              {
                var Ki = (be) => {
                  var de = Wa(), et = fr(de), sr = m(et), Or = m(sr), Rr = m(Or), Jr = m(Rr);
                  Ie(Jr, 17, () => f(Kr).slice(0, 4), Fe, (tt, Z) => {
                    var ve = qa(), rt = m(ve);
                    ee(() => G(rt, typeof f(Z) == "string" ? f(Z) : f(Z).name || f(Z))), M(tt, ve);
                  });
                  var ar = A(Or);
                  Ie(ar, 21, () => X(f(o)), Fe, (tt, Z) => {
                    var ve = Ya(), rt = m(ve);
                    Ie(rt, 17, () => f(Kr).slice(0, 4), Fe, (Zr, Ht) => {
                      const Zi = /* @__PURE__ */ Q(() => typeof f(Ht) == "string" ? f(Ht) : f(Ht).name || f(Ht));
                      var Nn = Va(), Qi = m(Nn);
                      ee(() => G(Qi, f(Z)[f(Zi)] ?? "-")), M(Zr, Nn);
                    });
                    var or = A(rt), Bt = m(or);
                    ee(() => Aa(ve, 1, `hover:bg-gray-50 transition-colors cursor-pointer ${f(l) === f(Z) ? "bg-blue-50" : ""}`)), Be("click", ve, () => O(l, f(Z), !0)), Be("click", Bt, () => O(l, f(Z), !0)), M(tt, ve);
                  });
                  var lr = A(et, 2);
                  {
                    var Cr = (tt) => {
                      var Z = Ua(), ve = m(Z), rt = A(ve, 2), or = m(rt), Bt = A(rt, 2);
                      ee(
                        (Zr, Ht) => {
                          ve.disabled = f(c) === 1, G(or, `Page ${f(c) ?? ""} of ${Zr ?? ""}`), Bt.disabled = Ht;
                        },
                        [
                          () => me(f(o)),
                          () => f(c) === me(f(o))
                        ]
                      ), Be("click", ve, () => z(f(o), Math.max(1, f(c) - 1))), Be("click", Bt, () => z(f(o), Math.min(me(f(o)), f(c) + 1))), M(tt, Z);
                    }, Mr = /* @__PURE__ */ Q(() => me(f(o)) > 1);
                    nt(lr, (tt) => {
                      f(Mr) && tt(Cr);
                    });
                  }
                  M(be, de);
                }, Xi = /* @__PURE__ */ Q(() => X(f(o)).length > 0), Ji = (be) => {
                  var de = Ga(), et = m(de);
                  ee(() => G(et, `No data available for ${f(o) ?? ""}`)), M(be, de);
                };
                nt(Xr, (be) => {
                  f(Xi) ? be(Ki) : be(Ji, -1);
                });
              }
              M(W, q);
            }, Ze = (W) => {
              var q = Xa(), Ne = m(q), bt = m(Ne);
              ee(() => G(bt, `Click on the ${f(o) ?? ""} node to expand and view data`)), M(W, q);
            };
            nt(Me, (W) => {
              f(n)[f(o)]?.expanded ? W(Je) : W(Ze, -1);
            });
          }
          ee(
            (W) => {
              G(le, `${f(o) ?? ""} Data `), G(U, `(${W ?? ""} total)`);
            },
            [() => Xe(f(o))]
          ), M(H, ie);
        }, Ui = (H) => {
          var ie = Za();
          M(H, ie);
        };
        nt(Vi, (H) => {
          f(o) ? H(Yi) : H(Ui, -1);
        });
      }
      var Wi = A(F, 2);
      {
        var Gi = (H) => {
          var ie = el(), J = m(ie), P = A(m(J), 2), le = A(J, 2);
          Ie(le, 21, () => Object.entries(f(l)), Fe, (Y, U) => {
            var Me = /* @__PURE__ */ Q(() => wt(f(U), 2));
            let Je = () => f(Me)[0], Ze = () => f(Me)[1];
            var W = Qa(), q = m(W), Ne = m(q), bt = A(q, 2), zt = m(bt);
            ee(() => {
              G(Ne, `${Je() ?? ""}:`), G(zt, Ze());
            }), M(Y, W);
          }), Be("click", P, () => O(l, null)), M(H, ie);
        };
        nt(Wi, (H) => {
          f(l) && H(Gi);
        });
      }
      M(y, N);
    };
    nt($i, (y) => {
      f(s) ? y(zi) : y(Bi, -1);
    });
  }
  ee(() => Rn.disabled = f(s)), Be("click", Rn, $), M(e, An), ni();
}
ha(["click", "mousedown", "keydown"]);
function al(e, t) {
  const r = ya(nl, { target: e, props: { ctx: t } });
  return {
    unmount() {
      try {
        ba(r);
      } catch {
      }
    }
  };
}
export {
  al as default
};
