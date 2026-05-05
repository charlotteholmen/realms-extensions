var es = Object.defineProperty;
var Jn = (e) => {
  throw TypeError(e);
};
var ts = (e, t, r) => t in e ? es(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var Je = (e, t, r) => ts(e, typeof t != "symbol" ? t + "" : t, r), rn = (e, t, r) => t.has(e) || Jn("Cannot " + r);
var s = (e, t, r) => (rn(e, t, "read from private field"), r ? r.call(e) : t.get(e)), T = (e, t, r) => t.has(e) ? Jn("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), D = (e, t, r, n) => (rn(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r), q = (e, t, r) => (rn(e, t, "access private method"), r);
var mn = Array.isArray, rs = Array.prototype.indexOf, Qt = Array.prototype.includes, Yr = Array.from, ns = Object.defineProperty, gr = Object.getOwnPropertyDescriptor, as = Object.getOwnPropertyDescriptors, is = Object.prototype, ss = Array.prototype, ca = Object.getPrototypeOf, Kn = Object.isExtensible;
const ls = () => {
};
function os(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function va() {
  var e, t, r = new Promise((n, a) => {
    e = n, t = a;
  });
  return { promise: r, resolve: e, reject: t };
}
function us(e, t) {
  if (Array.isArray(e))
    return e;
  if (!(Symbol.iterator in e))
    return Array.from(e);
  const r = [];
  for (const n of e)
    if (r.push(n), r.length === t) break;
  return r;
}
const ce = 2, $t = 4, Wr = 8, ha = 1 << 24, nt = 16, Qe = 32, wt = 64, un = 128, He = 512, ne = 1024, de = 2048, at = 4096, pe = 8192, qe = 16384, Ut = 32768, Xn = 1 << 25, er = 65536, fn = 1 << 17, fs = 1 << 18, ar = 1 << 19, ds = 1 << 20, vt = 1 << 25, Ht = 65536, Hr = 1 << 21, mr = 1 << 22, mt = 1 << 23, pr = Symbol("$state"), ot = new class extends Error {
  constructor() {
    super(...arguments);
    Je(this, "name", "StaleReactionError");
    Je(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
function cs() {
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
function gs(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function ps() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function bs() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function ys() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function xs() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function ms() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
const ws = 1, ks = 2, Es = 16, Ss = 1, As = 2, se = Symbol(), _a = "http://www.w3.org/1999/xhtml", Cs = "http://www.w3.org/2000/svg", Ts = "http://www.w3.org/1998/Math/MathML";
function Ms() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function Ps() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function Ns() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function ga(e) {
  return e === this.v;
}
function Ds(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function pa(e) {
  return !Ds(e, this.v);
}
let Ue = null;
function tr(e) {
  Ue = e;
}
function ba(e, t = !1, r) {
  Ue = {
    p: Ue,
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
function ya(e) {
  var t = (
    /** @type {ComponentContext} */
    Ue
  ), r = t.e;
  if (r !== null) {
    t.e = null;
    for (var n of r)
      qa(n);
  }
  return t.i = !0, Ue = t.p, /** @type {T} */
  {};
}
function xa() {
  return !0;
}
let Ct = [];
function ma() {
  var e = Ct;
  Ct = [], os(e);
}
function Yt(e) {
  if (Ct.length === 0 && !br) {
    var t = Ct;
    queueMicrotask(() => {
      t === Ct && ma();
    });
  }
  Ct.push(e);
}
function Is() {
  for (; Ct.length > 0; )
    ma();
}
function wa(e) {
  var t = R;
  if (t === null)
    return I.f |= mt, e;
  if ((t.f & Ut) === 0 && (t.f & $t) === 0)
    throw e;
  yt(e, t);
}
function yt(e, t) {
  for (; t !== null; ) {
    if ((t.f & un) !== 0) {
      if ((t.f & Ut) === 0)
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
const Rs = -7169;
function W(e, t) {
  e.f = e.f & Rs | t;
}
function wn(e) {
  (e.f & He) !== 0 || e.deps === null ? W(e, ne) : W(e, at);
}
function ka(e) {
  if (e !== null)
    for (const t of e)
      (t.f & ce) === 0 || (t.f & Ht) === 0 || (t.f ^= Ht, ka(
        /** @type {Derived} */
        t.deps
      ));
}
function Ea(e, t, r) {
  (e.f & de) !== 0 ? t.add(e) : (e.f & at) !== 0 && r.add(e), ka(e.deps), W(e, ne);
}
const At = /* @__PURE__ */ new Set();
let S = null, Xe = null, dn = null, br = !1, nn = !1, Gt = null, Ir = null;
var Zn = 0;
let Os = 1;
var Wt, Jt, Nt, ut, et, kr, Pe, Er, pt, ft, tt, Kt, Xt, Dt, Z, Rr, Sa, Or, cn, Fr, Fs;
const Ur = class Ur {
  constructor() {
    T(this, Z);
    Je(this, "id", Os++);
    /**
     * The current values of any signals that are updated in this batch.
     * Tuple format: [value, is_derived] (note: is_derived is false for deriveds, too, if they were overridden via assignment)
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Value, [any, boolean]>}
     */
    Je(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any signals (sources and deriveds) that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Value, any>}
     */
    Je(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<(batch: Batch) => void>}
     */
    T(this, Wt, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    T(this, Jt, /* @__PURE__ */ new Set());
    /**
     * Callbacks that should run only when a fork is committed.
     * @type {Set<(batch: Batch) => void>}
     */
    T(this, Nt, /* @__PURE__ */ new Set());
    /**
     * Async effects that are currently in flight
     * @type {Map<Effect, number>}
     */
    T(this, ut, /* @__PURE__ */ new Map());
    /**
     * Async effects that are currently in flight, _not_ inside a pending boundary
     * @type {Map<Effect, number>}
     */
    T(this, et, /* @__PURE__ */ new Map());
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    T(this, kr, null);
    /**
     * The root effects that need to be flushed
     * @type {Effect[]}
     */
    T(this, Pe, []);
    /**
     * Effects created while this batch was active.
     * @type {Effect[]}
     */
    T(this, Er, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    T(this, pt, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    T(this, ft, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    T(this, tt, /* @__PURE__ */ new Map());
    /**
     * Inverse of #skipped_branches which we need to tell prior batches to unskip them when committing
     * @type {Set<Effect>}
     */
    T(this, Kt, /* @__PURE__ */ new Set());
    Je(this, "is_fork", !1);
    T(this, Xt, !1);
    /** @type {Set<Batch>} */
    T(this, Dt, /* @__PURE__ */ new Set());
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(t) {
    s(this, tt).has(t) || s(this, tt).set(t, { d: [], m: [] }), s(this, Kt).delete(t);
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
    s(this, Kt).add(t);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Value} source
   * @param {any} value
   * @param {boolean} [is_derived]
   */
  capture(t, r, n = !1) {
    t.v !== se && !this.previous.has(t) && this.previous.set(t, t.v), (t.f & mt) === 0 && (this.current.set(t, [r, n]), Xe?.set(t, r)), this.is_fork || (t.v = r);
  }
  activate() {
    S = this;
  }
  deactivate() {
    S = null, Xe = null;
  }
  flush() {
    try {
      nn = !0, S = this, q(this, Z, Or).call(this);
    } finally {
      Zn = 0, dn = null, Gt = null, Ir = null, nn = !1, S = null, Xe = null, Ft.clear();
    }
  }
  discard() {
    for (const t of s(this, Jt)) t(this);
    s(this, Jt).clear(), s(this, Nt).clear(), At.delete(this);
  }
  /**
   * @param {Effect} effect
   */
  register_created_effect(t) {
    s(this, Er).push(t);
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  increment(t, r) {
    let n = s(this, ut).get(r) ?? 0;
    if (s(this, ut).set(r, n + 1), t) {
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
    let a = s(this, ut).get(r) ?? 0;
    if (a === 1 ? s(this, ut).delete(r) : s(this, ut).set(r, a - 1), t) {
      let i = s(this, et).get(r) ?? 0;
      i === 1 ? s(this, et).delete(r) : s(this, et).set(r, i - 1);
    }
    s(this, Xt) || n || (D(this, Xt, !0), Yt(() => {
      D(this, Xt, !1), this.flush();
    }));
  }
  /**
   * @param {Set<Effect>} dirty_effects
   * @param {Set<Effect>} maybe_dirty_effects
   */
  transfer_effects(t, r) {
    for (const n of t)
      s(this, pt).add(n);
    for (const n of r)
      s(this, ft).add(n);
    t.clear(), r.clear();
  }
  /** @param {(batch: Batch) => void} fn */
  oncommit(t) {
    s(this, Wt).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    s(this, Jt).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  on_fork_commit(t) {
    s(this, Nt).add(t);
  }
  run_fork_commit_callbacks() {
    for (const t of s(this, Nt)) t(this);
    s(this, Nt).clear();
  }
  settled() {
    return (s(this, kr) ?? D(this, kr, va())).promise;
  }
  static ensure() {
    if (S === null) {
      const t = S = new Ur();
      nn || (At.add(S), br || Yt(() => {
        S === t && t.flush();
      }));
    }
    return S;
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
    if (dn = t, t.b?.is_pending && (t.f & ($t | Wr | ha)) !== 0 && (t.f & Ut) === 0) {
      t.b.defer_effect(t);
      return;
    }
    for (var r = t; r.parent !== null; ) {
      r = r.parent;
      var n = r.f;
      if (Gt !== null && r === R && (I === null || (I.f & ce) === 0))
        return;
      if ((n & (wt | Qe)) !== 0) {
        if ((n & ne) === 0)
          return;
        r.f ^= ne;
      }
    }
    s(this, Pe).push(r);
  }
};
Wt = new WeakMap(), Jt = new WeakMap(), Nt = new WeakMap(), ut = new WeakMap(), et = new WeakMap(), kr = new WeakMap(), Pe = new WeakMap(), Er = new WeakMap(), pt = new WeakMap(), ft = new WeakMap(), tt = new WeakMap(), Kt = new WeakMap(), Xt = new WeakMap(), Dt = new WeakMap(), Z = new WeakSet(), Rr = function() {
  return this.is_fork || s(this, et).size > 0;
}, Sa = function() {
  for (const n of s(this, Dt))
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
}, Or = function() {
  var l;
  if (Zn++ > 1e3 && (At.delete(this), Ls()), !q(this, Z, Rr).call(this)) {
    for (const o of s(this, pt))
      s(this, ft).delete(o), W(o, de), this.schedule(o);
    for (const o of s(this, ft))
      W(o, at), this.schedule(o);
  }
  const t = s(this, Pe);
  D(this, Pe, []), this.apply();
  var r = Gt = [], n = [], a = Ir = [];
  for (const o of t)
    try {
      q(this, Z, cn).call(this, o, r, n);
    } catch (u) {
      throw Ta(o), u;
    }
  if (S = null, a.length > 0) {
    var i = Ur.ensure();
    for (const o of a)
      i.schedule(o);
  }
  if (Gt = null, Ir = null, q(this, Z, Rr).call(this) || q(this, Z, Sa).call(this)) {
    q(this, Z, Fr).call(this, n), q(this, Z, Fr).call(this, r);
    for (const [o, u] of s(this, tt))
      Ca(o, u);
  } else {
    s(this, ut).size === 0 && At.delete(this), s(this, pt).clear(), s(this, ft).clear();
    for (const o of s(this, Wt)) o(this);
    s(this, Wt).clear(), Qn(n), Qn(r), s(this, kr)?.resolve();
  }
  var f = (
    /** @type {Batch | null} */
    /** @type {unknown} */
    S
  );
  if (s(this, Pe).length > 0) {
    const o = f ?? (f = this);
    s(o, Pe).push(...s(this, Pe).filter((u) => !s(o, Pe).includes(u)));
  }
  f !== null && (At.add(f), q(l = f, Z, Or).call(l));
}, /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
cn = function(t, r, n) {
  t.f ^= ne;
  for (var a = t.first; a !== null; ) {
    var i = a.f, f = (i & (Qe | wt)) !== 0, l = f && (i & ne) !== 0, o = l || (i & pe) !== 0 || s(this, tt).has(a);
    if (!o && a.fn !== null) {
      f ? a.f ^= ne : (i & $t) !== 0 ? r.push(a) : Pr(a) && ((i & nt) !== 0 && s(this, ft).add(a), nr(a));
      var u = a.first;
      if (u !== null) {
        a = u;
        continue;
      }
    }
    for (; a !== null; ) {
      var g = a.next;
      if (g !== null) {
        a = g;
        break;
      }
      a = a.parent;
    }
  }
}, /**
 * @param {Effect[]} effects
 */
Fr = function(t) {
  for (var r = 0; r < t.length; r += 1)
    Ea(t[r], s(this, pt), s(this, ft));
}, Fs = function() {
  var g, b, p;
  for (const _ of At) {
    var t = _.id < this.id, r = [];
    for (const [c, [M, C]] of this.current) {
      if (_.current.has(c)) {
        var n = (
          /** @type {[any, boolean]} */
          _.current.get(c)[0]
        );
        if (t && M !== n)
          _.current.set(c, [M, C]);
        else
          continue;
      }
      r.push(c);
    }
    var a = [..._.current.keys()].filter((c) => !this.current.has(c));
    if (a.length === 0)
      t && _.discard();
    else if (r.length > 0) {
      if (t)
        for (const c of s(this, Kt))
          _.unskip_effect(c, (M) => {
            var C;
            (M.f & (nt | mr)) !== 0 ? _.schedule(M) : q(C = _, Z, Fr).call(C, [M]);
          });
      _.activate();
      var i = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Map();
      for (var l of r)
        Aa(l, a, i, f);
      f = /* @__PURE__ */ new Map();
      var o = [..._.current.keys()].filter(
        (c) => this.current.has(c) ? (
          /** @type {[any, boolean]} */
          this.current.get(c)[0] !== c
        ) : !0
      );
      for (const c of s(this, Er))
        (c.f & (qe | pe | fn)) === 0 && kn(c, o, f) && ((c.f & (mr | nt)) !== 0 ? (W(c, de), _.schedule(c)) : s(_, pt).add(c));
      if (s(_, Pe).length > 0) {
        _.apply();
        for (var u of s(_, Pe))
          q(g = _, Z, cn).call(g, u, [], []);
        D(_, Pe, []);
      }
      _.deactivate();
    }
  }
  for (const _ of At)
    s(_, Dt).has(this) && (s(_, Dt).delete(this), s(_, Dt).size === 0 && !q(b = _, Z, Rr).call(b) && (_.activate(), q(p = _, Z, Or).call(p)));
};
let qt = Ur;
function js(e) {
  var t = br;
  br = !0;
  try {
    for (var r; ; ) {
      if (Is(), S === null)
        return (
          /** @type {T} */
          r
        );
      S.flush();
    }
  } finally {
    br = t;
  }
}
function Ls() {
  try {
    ps();
  } catch (e) {
    yt(e, dn);
  }
}
let lt = null;
function Qn(e) {
  var t = e.length;
  if (t !== 0) {
    for (var r = 0; r < t; ) {
      var n = e[r++];
      if ((n.f & (qe | pe)) === 0 && Pr(n) && (lt = /* @__PURE__ */ new Set(), nr(n), n.deps === null && n.first === null && n.nodes === null && n.teardown === null && n.ac === null && Ga(n), lt?.size > 0)) {
        Ft.clear();
        for (const a of lt) {
          if ((a.f & (qe | pe)) !== 0) continue;
          const i = [a];
          let f = a.parent;
          for (; f !== null; )
            lt.has(f) && (lt.delete(f), i.push(f)), f = f.parent;
          for (let l = i.length - 1; l >= 0; l--) {
            const o = i[l];
            (o.f & (qe | pe)) === 0 && nr(o);
          }
        }
        lt.clear();
      }
    }
    lt = null;
  }
}
function Aa(e, t, r, n) {
  if (!r.has(e) && (r.add(e), e.reactions !== null))
    for (const a of e.reactions) {
      const i = a.f;
      (i & ce) !== 0 ? Aa(
        /** @type {Derived} */
        a,
        t,
        r,
        n
      ) : (i & (mr | nt)) !== 0 && (i & de) === 0 && kn(a, t, n) && (W(a, de), En(
        /** @type {Effect} */
        a
      ));
    }
}
function kn(e, t, r) {
  const n = r.get(e);
  if (n !== void 0) return n;
  if (e.deps !== null)
    for (const a of e.deps) {
      if (Qt.call(t, a))
        return !0;
      if ((a.f & ce) !== 0 && kn(
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
function En(e) {
  S.schedule(e);
}
function Ca(e, t) {
  if (!((e.f & Qe) !== 0 && (e.f & ne) !== 0)) {
    (e.f & de) !== 0 ? t.d.push(e) : (e.f & at) !== 0 && t.m.push(e), W(e, ne);
    for (var r = e.first; r !== null; )
      Ca(r, t), r = r.next;
  }
}
function Ta(e) {
  W(e, ne);
  for (var t = e.first; t !== null; )
    Ta(t), t = t.next;
}
function Bs(e) {
  let t = 0, r = zt(0), n;
  return () => {
    Tn() && (d(r), za(() => (t === 0 && (n = ti(() => e(() => yr(r)))), t += 1, () => {
      Yt(() => {
        t -= 1, t === 0 && (n?.(), n = void 0, yr(r));
      });
    })));
  };
}
var Hs = er | ar;
function qs(e, t, r, n) {
  new zs(e, t, r, n);
}
var Fe, xn, je, It, me, Le, ge, Ne, dt, Rt, bt, Zt, Sr, Ar, ct, Vr, V, Us, Vs, Gs, vn, jr, Lr, hn, _n;
class zs {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(t, r, n, a) {
    T(this, V);
    /** @type {Boundary | null} */
    Je(this, "parent");
    Je(this, "is_pending", !1);
    /**
     * API-level transformError transform function. Transforms errors before they reach the `failed` snippet.
     * Inherited from parent boundary, or defaults to identity.
     * @type {(error: unknown) => unknown}
     */
    Je(this, "transform_error");
    /** @type {TemplateNode} */
    T(this, Fe);
    /** @type {TemplateNode | null} */
    T(this, xn, null);
    /** @type {BoundaryProps} */
    T(this, je);
    /** @type {((anchor: Node) => void)} */
    T(this, It);
    /** @type {Effect} */
    T(this, me);
    /** @type {Effect | null} */
    T(this, Le, null);
    /** @type {Effect | null} */
    T(this, ge, null);
    /** @type {Effect | null} */
    T(this, Ne, null);
    /** @type {DocumentFragment | null} */
    T(this, dt, null);
    T(this, Rt, 0);
    T(this, bt, 0);
    T(this, Zt, !1);
    /** @type {Set<Effect>} */
    T(this, Sr, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    T(this, Ar, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    T(this, ct, null);
    T(this, Vr, Bs(() => (D(this, ct, zt(s(this, Rt))), () => {
      D(this, ct, null);
    })));
    D(this, Fe, t), D(this, je, r), D(this, It, (i) => {
      var f = (
        /** @type {Effect} */
        R
      );
      f.b = this, f.f |= un, n(i);
    }), this.parent = /** @type {Effect} */
    R.b, this.transform_error = a ?? this.parent?.transform_error ?? ((i) => i), D(this, me, Mn(() => {
      q(this, V, vn).call(this);
    }, Hs));
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    Ea(t, s(this, Sr), s(this, Ar));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!s(this, je).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  update_pending_count(t, r) {
    q(this, V, hn).call(this, t, r), D(this, Rt, s(this, Rt) + t), !(!s(this, ct) || s(this, Zt)) && (D(this, Zt, !0), Yt(() => {
      D(this, Zt, !1), s(this, ct) && rr(s(this, ct), s(this, Rt));
    }));
  }
  get_effect_pending() {
    return s(this, Vr).call(this), d(
      /** @type {Source<number>} */
      s(this, ct)
    );
  }
  /** @param {unknown} error */
  error(t) {
    if (!s(this, je).onerror && !s(this, je).failed)
      throw t;
    S?.is_fork ? (s(this, Le) && S.skip_effect(s(this, Le)), s(this, ge) && S.skip_effect(s(this, ge)), s(this, Ne) && S.skip_effect(s(this, Ne)), S.on_fork_commit(() => {
      q(this, V, _n).call(this, t);
    })) : q(this, V, _n).call(this, t);
  }
}
Fe = new WeakMap(), xn = new WeakMap(), je = new WeakMap(), It = new WeakMap(), me = new WeakMap(), Le = new WeakMap(), ge = new WeakMap(), Ne = new WeakMap(), dt = new WeakMap(), Rt = new WeakMap(), bt = new WeakMap(), Zt = new WeakMap(), Sr = new WeakMap(), Ar = new WeakMap(), ct = new WeakMap(), Vr = new WeakMap(), V = new WeakSet(), Us = function() {
  try {
    D(this, Le, Be(() => s(this, It).call(this, s(this, Fe))));
  } catch (t) {
    this.error(t);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
Vs = function(t) {
  const r = s(this, je).failed;
  r && D(this, Ne, Be(() => {
    r(
      s(this, Fe),
      () => t,
      () => () => {
      }
    );
  }));
}, Gs = function() {
  const t = s(this, je).pending;
  t && (this.is_pending = !0, D(this, ge, Be(() => t(s(this, Fe)))), Yt(() => {
    var r = D(this, dt, document.createDocumentFragment()), n = jt();
    r.append(n), D(this, Le, q(this, V, Lr).call(this, () => Be(() => s(this, It).call(this, n)))), s(this, bt) === 0 && (s(this, Fe).before(r), D(this, dt, null), Lt(
      /** @type {Effect} */
      s(this, ge),
      () => {
        D(this, ge, null);
      }
    ), q(this, V, jr).call(
      this,
      /** @type {Batch} */
      S
    ));
  }));
}, vn = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), D(this, bt, 0), D(this, Rt, 0), D(this, Le, Be(() => {
      s(this, It).call(this, s(this, Fe));
    })), s(this, bt) > 0) {
      var t = D(this, dt, document.createDocumentFragment());
      Dn(s(this, Le), t);
      const r = (
        /** @type {(anchor: Node) => void} */
        s(this, je).pending
      );
      D(this, ge, Be(() => r(s(this, Fe))));
    } else
      q(this, V, jr).call(
        this,
        /** @type {Batch} */
        S
      );
  } catch (r) {
    this.error(r);
  }
}, /**
 * @param {Batch} batch
 */
jr = function(t) {
  this.is_pending = !1, t.transfer_effects(s(this, Sr), s(this, Ar));
}, /**
 * @template T
 * @param {() => T} fn
 */
Lr = function(t) {
  var r = R, n = I, a = Ue;
  it(s(this, me)), Ve(s(this, me)), tr(s(this, me).ctx);
  try {
    return qt.ensure(), t();
  } catch (i) {
    return wa(i), null;
  } finally {
    it(r), Ve(n), tr(a);
  }
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 * @param {Batch} batch
 */
hn = function(t, r) {
  var n;
  if (!this.has_pending_snippet()) {
    this.parent && q(n = this.parent, V, hn).call(n, t, r);
    return;
  }
  D(this, bt, s(this, bt) + t), s(this, bt) === 0 && (q(this, V, jr).call(this, r), s(this, ge) && Lt(s(this, ge), () => {
    D(this, ge, null);
  }), s(this, dt) && (s(this, Fe).before(s(this, dt)), D(this, dt, null)));
}, /**
 * @param {unknown} error
 */
_n = function(t) {
  s(this, Le) && (ke(s(this, Le)), D(this, Le, null)), s(this, ge) && (ke(s(this, ge)), D(this, ge, null)), s(this, Ne) && (ke(s(this, Ne)), D(this, Ne, null));
  var r = s(this, je).onerror;
  let n = s(this, je).failed;
  var a = !1, i = !1;
  const f = () => {
    if (a) {
      Ns();
      return;
    }
    a = !0, i && ms(), s(this, Ne) !== null && Lt(s(this, Ne), () => {
      D(this, Ne, null);
    }), q(this, V, Lr).call(this, () => {
      q(this, V, vn).call(this);
    });
  }, l = (o) => {
    try {
      i = !0, r?.(o, f), i = !1;
    } catch (u) {
      yt(u, s(this, me) && s(this, me).parent);
    }
    n && D(this, Ne, q(this, V, Lr).call(this, () => {
      try {
        return Be(() => {
          var u = (
            /** @type {Effect} */
            R
          );
          u.b = this, u.f |= un, n(
            s(this, Fe),
            () => o,
            () => f
          );
        });
      } catch (u) {
        return yt(
          u,
          /** @type {Effect} */
          s(this, me).parent
        ), null;
      }
    }));
  };
  Yt(() => {
    var o;
    try {
      o = this.transform_error(t);
    } catch (u) {
      yt(u, s(this, me) && s(this, me).parent);
      return;
    }
    o !== null && typeof o == "object" && typeof /** @type {any} */
    o.then == "function" ? o.then(
      l,
      /** @param {unknown} e */
      (u) => yt(u, s(this, me) && s(this, me).parent)
    ) : l(o);
  });
};
function Ys(e, t, r, n) {
  const a = Sn;
  var i = e.filter((p) => !p.settled);
  if (r.length === 0 && i.length === 0) {
    n(t.map(a));
    return;
  }
  var f = (
    /** @type {Effect} */
    R
  ), l = Ws(), o = i.length === 1 ? i[0].promise : i.length > 1 ? Promise.all(i.map((p) => p.promise)) : null;
  function u(p) {
    l();
    try {
      n(p);
    } catch (_) {
      (f.f & qe) === 0 && yt(_, f);
    }
    qr();
  }
  if (r.length === 0) {
    o.then(() => u(t.map(a)));
    return;
  }
  var g = Ma();
  function b() {
    Promise.all(r.map((p) => /* @__PURE__ */ Js(p))).then((p) => u([...t.map(a), ...p])).catch((p) => yt(p, f)).finally(() => g());
  }
  o ? o.then(() => {
    l(), b(), qr();
  }) : b();
}
function Ws() {
  var e = (
    /** @type {Effect} */
    R
  ), t = I, r = Ue, n = (
    /** @type {Batch} */
    S
  );
  return function(i = !0) {
    it(e), Ve(t), tr(r), i && (e.f & qe) === 0 && (n?.activate(), n?.apply());
  };
}
function qr(e = !0) {
  it(null), Ve(null), tr(null), e && S?.deactivate();
}
function Ma() {
  var e = (
    /** @type {Effect} */
    R
  ), t = (
    /** @type {Boundary} */
    e.b
  ), r = (
    /** @type {Batch} */
    S
  ), n = t.is_rendered();
  return t.update_pending_count(1, r), r.increment(n, e), (a = !1) => {
    t.update_pending_count(-1, r), r.decrement(n, e, a);
  };
}
// @__NO_SIDE_EFFECTS__
function Sn(e) {
  var t = ce | de;
  return R !== null && (R.f |= ar), {
    ctx: Ue,
    deps: null,
    effects: null,
    equals: ga,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      se
    ),
    wv: 0,
    parent: R,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function Js(e, t, r) {
  let n = (
    /** @type {Effect | null} */
    R
  );
  n === null && cs();
  var a = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), i = zt(
    /** @type {V} */
    se
  ), f = !I, l = /* @__PURE__ */ new Map();
  return ol(() => {
    var o = (
      /** @type {Effect} */
      R
    ), u = va();
    a = u.promise;
    try {
      Promise.resolve(e()).then(u.resolve, u.reject).finally(qr);
    } catch (_) {
      u.reject(_), qr();
    }
    var g = (
      /** @type {Batch} */
      S
    );
    if (f) {
      if ((o.f & Ut) !== 0)
        var b = Ma();
      if (
        /** @type {Boundary} */
        n.b.is_rendered()
      )
        l.get(g)?.reject(ot), l.delete(g);
      else {
        for (const _ of l.values())
          _.reject(ot);
        l.clear();
      }
      l.set(g, u);
    }
    const p = (_, c = void 0) => {
      if (b) {
        var M = c === ot;
        b(M);
      }
      if (!(c === ot || (o.f & qe) !== 0)) {
        if (g.activate(), c)
          i.f |= mt, rr(i, c);
        else {
          (i.f & mt) !== 0 && (i.f ^= mt), rr(i, _);
          for (const [C, j] of l) {
            if (l.delete(C), C === g) break;
            j.reject(ot);
          }
        }
        g.deactivate();
      }
    };
    u.promise.then(p, (_) => p(null, _ || "unknown"));
  }), Ha(() => {
    for (const o of l.values())
      o.reject(ot);
  }), new Promise((o) => {
    function u(g) {
      function b() {
        g === a ? o(i) : u(a);
      }
      g.then(b, b);
    }
    u(a);
  });
}
// @__NO_SIDE_EFFECTS__
function fr(e) {
  const t = /* @__PURE__ */ Sn(e);
  return Ja(t), t;
}
// @__NO_SIDE_EFFECTS__
function Ks(e) {
  const t = /* @__PURE__ */ Sn(e);
  return t.equals = pa, t;
}
function Xs(e) {
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
function An(e) {
  var t, r = R, n = e.parent;
  if (!kt && n !== null && (n.f & (qe | pe)) !== 0)
    return Ms(), e.v;
  it(n);
  try {
    e.f &= ~Ht, Xs(e), t = Qa(e);
  } finally {
    it(r);
  }
  return t;
}
function Pa(e) {
  var t = An(e);
  if (!e.equals(t) && (e.wv = Xa(), (!S?.is_fork || e.deps === null) && (S !== null ? S.capture(e, t, !0) : e.v = t, e.deps === null))) {
    W(e, ne);
    return;
  }
  kt || (Xe !== null ? (Tn() || S?.is_fork) && Xe.set(e, t) : wn(e));
}
function Zs(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      (t.teardown || t.ac) && (t.teardown?.(), t.ac?.abort(ot), t.teardown = ls, t.ac = null, wr(t, 0), Pn(t));
}
function Na(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      t.teardown && nr(t);
}
let gn = /* @__PURE__ */ new Set();
const Ft = /* @__PURE__ */ new Map();
let Da = !1;
function zt(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: ga,
    rv: 0,
    wv: 0
  };
  return r;
}
// @__NO_SIDE_EFFECTS__
function F(e, t) {
  const r = zt(e);
  return Ja(r), r;
}
// @__NO_SIDE_EFFECTS__
function Qs(e, t = !1, r = !0) {
  const n = zt(e);
  return t || (n.equals = pa), n;
}
function x(e, t, r = !1) {
  I !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Ze || (I.f & fn) !== 0) && xa() && (I.f & (ce | nt | mr | fn)) !== 0 && (ze === null || !Qt.call(ze, e)) && xs();
  let n = r ? Tt(t) : t;
  return rr(e, n, Ir);
}
function rr(e, t, r = null) {
  if (!e.equals(t)) {
    Ft.set(e, kt ? t : e.v);
    var n = qt.ensure();
    if (n.capture(e, t), (e.f & ce) !== 0) {
      const a = (
        /** @type {Derived} */
        e
      );
      (e.f & de) !== 0 && An(a), Xe === null && wn(a);
    }
    e.wv = Xa(), Ia(e, de, r), R !== null && (R.f & ne) !== 0 && (R.f & (Qe | wt)) === 0 && (Oe === null ? fl([e]) : Oe.push(e)), !n.is_fork && gn.size > 0 && !Da && $s();
  }
  return t;
}
function $s() {
  Da = !1;
  for (const e of gn)
    (e.f & ne) !== 0 && W(e, at), Pr(e) && nr(e);
  gn.clear();
}
function yr(e) {
  x(e, e.v + 1);
}
function Ia(e, t, r) {
  var n = e.reactions;
  if (n !== null)
    for (var a = n.length, i = 0; i < a; i++) {
      var f = n[i], l = f.f, o = (l & de) === 0;
      if (o && W(f, t), (l & ce) !== 0) {
        var u = (
          /** @type {Derived} */
          f
        );
        Xe?.delete(u), (l & Ht) === 0 && (l & He && (R === null || (R.f & Hr) === 0) && (f.f |= Ht), Ia(u, at, r));
      } else if (o) {
        var g = (
          /** @type {Effect} */
          f
        );
        (l & nt) !== 0 && lt !== null && lt.add(g), r !== null ? r.push(g) : En(g);
      }
    }
}
function Tt(e) {
  if (typeof e != "object" || e === null || pr in e)
    return e;
  const t = ca(e);
  if (t !== is && t !== ss)
    return e;
  var r = /* @__PURE__ */ new Map(), n = mn(e), a = /* @__PURE__ */ F(0), i = Bt, f = (l) => {
    if (Bt === i)
      return l();
    var o = I, u = Bt;
    Ve(null), aa(i);
    var g = l();
    return Ve(o), aa(u), g;
  };
  return n && r.set("length", /* @__PURE__ */ F(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(l, o, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && bs();
        var g = r.get(o);
        return g === void 0 ? f(() => {
          var b = /* @__PURE__ */ F(u.value);
          return r.set(o, b), b;
        }) : x(g, u.value, !0), !0;
      },
      deleteProperty(l, o) {
        var u = r.get(o);
        if (u === void 0) {
          if (o in l) {
            const g = f(() => /* @__PURE__ */ F(se));
            r.set(o, g), yr(a);
          }
        } else
          x(u, se), yr(a);
        return !0;
      },
      get(l, o, u) {
        if (o === pr)
          return e;
        var g = r.get(o), b = o in l;
        if (g === void 0 && (!b || gr(l, o)?.writable) && (g = f(() => {
          var _ = Tt(b ? l[o] : se), c = /* @__PURE__ */ F(_);
          return c;
        }), r.set(o, g)), g !== void 0) {
          var p = d(g);
          return p === se ? void 0 : p;
        }
        return Reflect.get(l, o, u);
      },
      getOwnPropertyDescriptor(l, o) {
        var u = Reflect.getOwnPropertyDescriptor(l, o);
        if (u && "value" in u) {
          var g = r.get(o);
          g && (u.value = d(g));
        } else if (u === void 0) {
          var b = r.get(o), p = b?.v;
          if (b !== void 0 && p !== se)
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
        if (o === pr)
          return !0;
        var u = r.get(o), g = u !== void 0 && u.v !== se || Reflect.has(l, o);
        if (u !== void 0 || R !== null && (!g || gr(l, o)?.writable)) {
          u === void 0 && (u = f(() => {
            var p = g ? Tt(l[o]) : se, _ = /* @__PURE__ */ F(p);
            return _;
          }), r.set(o, u));
          var b = d(u);
          if (b === se)
            return !1;
        }
        return g;
      },
      set(l, o, u, g) {
        var b = r.get(o), p = o in l;
        if (n && o === "length")
          for (var _ = u; _ < /** @type {Source<number>} */
          b.v; _ += 1) {
            var c = r.get(_ + "");
            c !== void 0 ? x(c, se) : _ in l && (c = f(() => /* @__PURE__ */ F(se)), r.set(_ + "", c));
          }
        if (b === void 0)
          (!p || gr(l, o)?.writable) && (b = f(() => /* @__PURE__ */ F(void 0)), x(b, Tt(u)), r.set(o, b));
        else {
          p = b.v !== se;
          var M = f(() => Tt(u));
          x(b, M);
        }
        var C = Reflect.getOwnPropertyDescriptor(l, o);
        if (C?.set && C.set.call(g, u), !p) {
          if (n && typeof o == "string") {
            var j = (
              /** @type {Source<number>} */
              r.get("length")
            ), P = Number(o);
            Number.isInteger(P) && P >= j.v && x(j, P + 1);
          }
          yr(a);
        }
        return !0;
      },
      ownKeys(l) {
        d(a);
        var o = Reflect.ownKeys(l).filter((b) => {
          var p = r.get(b);
          return p === void 0 || p.v !== se;
        });
        for (var [u, g] of r)
          g.v !== se && !(u in l) && o.push(u);
        return o;
      },
      setPrototypeOf() {
        ys();
      }
    }
  );
}
function $n(e) {
  try {
    if (e !== null && typeof e == "object" && pr in e)
      return e[pr];
  } catch {
  }
  return e;
}
function el(e, t) {
  return Object.is($n(e), $n(t));
}
var ea, Ra, Oa, Fa;
function tl() {
  if (ea === void 0) {
    ea = window, Ra = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, r = Text.prototype;
    Oa = gr(t, "firstChild").get, Fa = gr(t, "nextSibling").get, Kn(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), Kn(r) && (r.__t = void 0);
  }
}
function jt(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function xt(e) {
  return (
    /** @type {TemplateNode | null} */
    Oa.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function Mr(e) {
  return (
    /** @type {TemplateNode | null} */
    Fa.call(e)
  );
}
function v(e, t) {
  return /* @__PURE__ */ xt(e);
}
function an(e, t = !1) {
  {
    var r = /* @__PURE__ */ xt(e);
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ Mr(r) : r;
  }
}
function y(e, t = 1, r = !1) {
  let n = e;
  for (; t--; )
    n = /** @type {TemplateNode} */
    /* @__PURE__ */ Mr(n);
  return n;
}
function rl(e) {
  e.textContent = "";
}
function ja() {
  return !1;
}
function La(e, t, r) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElementNS(t ?? _a, e, void 0)
  );
}
let ta = !1;
function nl() {
  ta || (ta = !0, document.addEventListener(
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
function Cn(e) {
  var t = I, r = R;
  Ve(null), it(null);
  try {
    return e();
  } finally {
    Ve(t), it(r);
  }
}
function Ba(e, t, r, n = r) {
  e.addEventListener(t, () => Cn(r));
  const a = e.__on_r;
  a ? e.__on_r = () => {
    a(), n(!0);
  } : e.__on_r = () => n(!0), nl();
}
function al(e) {
  R === null && (I === null && gs(), _s()), kt && hs();
}
function il(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function ht(e, t) {
  var r = R;
  r !== null && (r.f & pe) !== 0 && (e |= pe);
  var n = {
    ctx: Ue,
    deps: null,
    nodes: null,
    f: e | de | He,
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
  S?.register_created_effect(n);
  var a = n;
  if ((e & $t) !== 0)
    Gt !== null ? Gt.push(n) : qt.ensure().schedule(n);
  else if (t !== null) {
    try {
      nr(n);
    } catch (f) {
      throw ke(n), f;
    }
    a.deps === null && a.teardown === null && a.nodes === null && a.first === a.last && // either `null`, or a singular child
    (a.f & ar) === 0 && (a = a.first, (e & nt) !== 0 && (e & er) !== 0 && a !== null && (a.f |= er));
  }
  if (a !== null && (a.parent = r, r !== null && il(a, r), I !== null && (I.f & ce) !== 0 && (e & wt) === 0)) {
    var i = (
      /** @type {Derived} */
      I
    );
    (i.effects ?? (i.effects = [])).push(a);
  }
  return n;
}
function Tn() {
  return I !== null && !Ze;
}
function Ha(e) {
  const t = ht(Wr, null);
  return W(t, ne), t.teardown = e, t;
}
function ra(e) {
  al();
  var t = (
    /** @type {Effect} */
    R.f
  ), r = !I && (t & Qe) !== 0 && (t & Ut) === 0;
  if (r) {
    var n = (
      /** @type {ComponentContext} */
      Ue
    );
    (n.e ?? (n.e = [])).push(e);
  } else
    return qa(e);
}
function qa(e) {
  return ht($t | ds, e);
}
function sl(e) {
  qt.ensure();
  const t = ht(wt | ar, e);
  return (r = {}) => new Promise((n) => {
    r.outro ? Lt(t, () => {
      ke(t), n(void 0);
    }) : (ke(t), n(void 0));
  });
}
function ll(e) {
  return ht($t, e);
}
function ol(e) {
  return ht(mr | ar, e);
}
function za(e, t = 0) {
  return ht(Wr | t, e);
}
function re(e, t = [], r = [], n = []) {
  Ys(n, t, r, (a) => {
    ht(Wr, () => e(...a.map(d)));
  });
}
function Mn(e, t = 0) {
  var r = ht(nt | t, e);
  return r;
}
function Be(e) {
  return ht(Qe | ar, e);
}
function Ua(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = kt, n = I;
    na(!0), Ve(null);
    try {
      t.call(null);
    } finally {
      na(r), Ve(n);
    }
  }
}
function Pn(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    const a = r.ac;
    a !== null && Cn(() => {
      a.abort(ot);
    });
    var n = r.next;
    (r.f & wt) !== 0 ? r.parent = null : ke(r, t), r = n;
  }
}
function ul(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & Qe) === 0 && ke(t), t = r;
  }
}
function ke(e, t = !0) {
  var r = !1;
  (t || (e.f & fs) !== 0) && e.nodes !== null && e.nodes.end !== null && (Va(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), r = !0), W(e, Xn), Pn(e, t && !r), wr(e, 0);
  var n = e.nodes && e.nodes.t;
  if (n !== null)
    for (const i of n)
      i.stop();
  Ua(e), e.f ^= Xn, e.f |= qe;
  var a = e.parent;
  a !== null && a.first !== null && Ga(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function Va(e, t) {
  for (; e !== null; ) {
    var r = e === t ? null : /* @__PURE__ */ Mr(e);
    e.remove(), e = r;
  }
}
function Ga(e) {
  var t = e.parent, r = e.prev, n = e.next;
  r !== null && (r.next = n), n !== null && (n.prev = r), t !== null && (t.first === e && (t.first = n), t.last === e && (t.last = r));
}
function Lt(e, t, r = !0) {
  var n = [];
  Ya(e, n, !0);
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
function Ya(e, t, r) {
  if ((e.f & pe) === 0) {
    e.f ^= pe;
    var n = e.nodes && e.nodes.t;
    if (n !== null)
      for (const l of n)
        (l.is_global || r) && t.push(l);
    for (var a = e.first; a !== null; ) {
      var i = a.next;
      if ((a.f & wt) === 0) {
        var f = (a.f & er) !== 0 || // If this is a branch effect without a block effect parent,
        // it means the parent block effect was pruned. In that case,
        // transparency information was transferred to the branch effect.
        (a.f & Qe) !== 0 && (e.f & nt) !== 0;
        Ya(a, t, f ? r : !1);
      }
      a = i;
    }
  }
}
function Nn(e) {
  Wa(e, !0);
}
function Wa(e, t) {
  if ((e.f & pe) !== 0) {
    e.f ^= pe, (e.f & ne) === 0 && (W(e, de), qt.ensure().schedule(e));
    for (var r = e.first; r !== null; ) {
      var n = r.next, a = (r.f & er) !== 0 || (r.f & Qe) !== 0;
      Wa(r, a ? t : !1), r = n;
    }
    var i = e.nodes && e.nodes.t;
    if (i !== null)
      for (const f of i)
        (f.is_global || t) && f.in();
  }
}
function Dn(e, t) {
  if (e.nodes)
    for (var r = e.nodes.start, n = e.nodes.end; r !== null; ) {
      var a = r === n ? null : /* @__PURE__ */ Mr(r);
      t.append(r), r = a;
    }
}
let Br = !1, kt = !1;
function na(e) {
  kt = e;
}
let I = null, Ze = !1;
function Ve(e) {
  I = e;
}
let R = null;
function it(e) {
  R = e;
}
let ze = null;
function Ja(e) {
  I !== null && (ze === null ? ze = [e] : ze.push(e));
}
let we = null, Me = 0, Oe = null;
function fl(e) {
  Oe = e;
}
let Ka = 1, Mt = 0, Bt = Mt;
function aa(e) {
  Bt = e;
}
function Xa() {
  return ++Ka;
}
function Pr(e) {
  var t = e.f;
  if ((t & de) !== 0)
    return !0;
  if (t & ce && (e.f &= ~Ht), (t & at) !== 0) {
    for (var r = (
      /** @type {Value[]} */
      e.deps
    ), n = r.length, a = 0; a < n; a++) {
      var i = r[a];
      if (Pr(
        /** @type {Derived} */
        i
      ) && Pa(
        /** @type {Derived} */
        i
      ), i.wv > e.wv)
        return !0;
    }
    (t & He) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    Xe === null && W(e, ne);
  }
  return !1;
}
function Za(e, t, r = !0) {
  var n = e.reactions;
  if (n !== null && !(ze !== null && Qt.call(ze, e)))
    for (var a = 0; a < n.length; a++) {
      var i = n[a];
      (i.f & ce) !== 0 ? Za(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (r ? W(i, de) : (i.f & ne) !== 0 && W(i, at), En(
        /** @type {Effect} */
        i
      ));
    }
}
function Qa(e) {
  var M;
  var t = we, r = Me, n = Oe, a = I, i = ze, f = Ue, l = Ze, o = Bt, u = e.f;
  we = /** @type {null | Value[]} */
  null, Me = 0, Oe = null, I = (u & (Qe | wt)) === 0 ? e : null, ze = null, tr(e.ctx), Ze = !1, Bt = ++Mt, e.ac !== null && (Cn(() => {
    e.ac.abort(ot);
  }), e.ac = null);
  try {
    e.f |= Hr;
    var g = (
      /** @type {Function} */
      e.fn
    ), b = g();
    e.f |= Ut;
    var p = e.deps, _ = S?.is_fork;
    if (we !== null) {
      var c;
      if (_ || wr(e, Me), p !== null && Me > 0)
        for (p.length = Me + we.length, c = 0; c < we.length; c++)
          p[Me + c] = we[c];
      else
        e.deps = p = we;
      if (Tn() && (e.f & He) !== 0)
        for (c = Me; c < p.length; c++)
          ((M = p[c]).reactions ?? (M.reactions = [])).push(e);
    } else !_ && p !== null && Me < p.length && (wr(e, Me), p.length = Me);
    if (xa() && Oe !== null && !Ze && p !== null && (e.f & (ce | at | de)) === 0)
      for (c = 0; c < /** @type {Source[]} */
      Oe.length; c++)
        Za(
          Oe[c],
          /** @type {Effect} */
          e
        );
    if (a !== null && a !== e) {
      if (Mt++, a.deps !== null)
        for (let C = 0; C < r; C += 1)
          a.deps[C].rv = Mt;
      if (t !== null)
        for (const C of t)
          C.rv = Mt;
      Oe !== null && (n === null ? n = Oe : n.push(.../** @type {Source[]} */
      Oe));
    }
    return (e.f & mt) !== 0 && (e.f ^= mt), b;
  } catch (C) {
    return wa(C);
  } finally {
    e.f ^= Hr, we = t, Me = r, Oe = n, I = a, ze = i, tr(f), Ze = l, Bt = o;
  }
}
function dl(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var n = rs.call(r, e);
    if (n !== -1) {
      var a = r.length - 1;
      a === 0 ? r = t.reactions = null : (r[n] = r[a], r.pop());
    }
  }
  if (r === null && (t.f & ce) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (we === null || !Qt.call(we, t))) {
    var i = (
      /** @type {Derived} */
      t
    );
    (i.f & He) !== 0 && (i.f ^= He, i.f &= ~Ht), i.v !== se && wn(i), Zs(i), wr(i, 0);
  }
}
function wr(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var n = t; n < r.length; n++)
      dl(e, r[n]);
}
function nr(e) {
  var t = e.f;
  if ((t & qe) === 0) {
    W(e, ne);
    var r = R, n = Br;
    R = e, Br = !0;
    try {
      (t & (nt | ha)) !== 0 ? ul(e) : Pn(e), Ua(e);
      var a = Qa(e);
      e.teardown = typeof a == "function" ? a : null, e.wv = Ka;
      var i;
    } finally {
      Br = n, R = r;
    }
  }
}
async function cl() {
  await Promise.resolve(), js();
}
function d(e) {
  var t = e.f, r = (t & ce) !== 0;
  if (I !== null && !Ze) {
    var n = R !== null && (R.f & qe) !== 0;
    if (!n && (ze === null || !Qt.call(ze, e))) {
      var a = I.deps;
      if ((I.f & Hr) !== 0)
        e.rv < Mt && (e.rv = Mt, we === null && a !== null && a[Me] === e ? Me++ : we === null ? we = [e] : we.push(e));
      else {
        (I.deps ?? (I.deps = [])).push(e);
        var i = e.reactions;
        i === null ? e.reactions = [I] : Qt.call(i, I) || i.push(I);
      }
    }
  }
  if (kt && Ft.has(e))
    return Ft.get(e);
  if (r) {
    var f = (
      /** @type {Derived} */
      e
    );
    if (kt) {
      var l = f.v;
      return ((f.f & ne) === 0 && f.reactions !== null || ei(f)) && (l = An(f)), Ft.set(f, l), l;
    }
    var o = (f.f & He) === 0 && !Ze && I !== null && (Br || (I.f & He) !== 0), u = (f.f & Ut) === 0;
    Pr(f) && (o && (f.f |= He), Pa(f)), o && !u && (Na(f), $a(f));
  }
  if (Xe?.has(e))
    return Xe.get(e);
  if ((e.f & mt) !== 0)
    throw e.v;
  return e.v;
}
function $a(e) {
  if (e.f |= He, e.deps !== null)
    for (const t of e.deps)
      (t.reactions ?? (t.reactions = [])).push(e), (t.f & ce) !== 0 && (t.f & He) === 0 && (Na(
        /** @type {Derived} */
        t
      ), $a(
        /** @type {Derived} */
        t
      ));
}
function ei(e) {
  if (e.v === se) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (Ft.has(t) || (t.f & ce) !== 0 && ei(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function ti(e) {
  var t = Ze;
  try {
    return Ze = !0, e();
  } finally {
    Ze = t;
  }
}
const vl = ["touchstart", "touchmove"];
function hl(e) {
  return vl.includes(e);
}
const Pt = Symbol("events"), ri = /* @__PURE__ */ new Set(), pn = /* @__PURE__ */ new Set();
function ie(e, t, r) {
  (t[Pt] ?? (t[Pt] = {}))[e] = r;
}
function _l(e) {
  for (var t = 0; t < e.length; t++)
    ri.add(e[t]);
  for (var r of pn)
    r(e);
}
let ia = null;
function sa(e) {
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), n = e.type, a = e.composedPath?.() || [], i = (
    /** @type {null | Element} */
    a[0] || e.target
  );
  ia = e;
  var f = 0, l = ia === e && e[Pt];
  if (l) {
    var o = a.indexOf(l);
    if (o !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e[Pt] = t;
      return;
    }
    var u = a.indexOf(t);
    if (u === -1)
      return;
    o <= u && (f = o);
  }
  if (i = /** @type {Element} */
  a[f] || e.target, i !== t) {
    ns(e, "currentTarget", {
      configurable: !0,
      get() {
        return i || r;
      }
    });
    var g = I, b = R;
    Ve(null), it(null);
    try {
      for (var p, _ = []; i !== null; ) {
        var c = i.assignedSlot || i.parentNode || /** @type {any} */
        i.host || null;
        try {
          var M = i[Pt]?.[n];
          M != null && (!/** @type {any} */
          i.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === i) && M.call(i, e);
        } catch (C) {
          p ? _.push(C) : p = C;
        }
        if (e.cancelBubble || c === t || c === null)
          break;
        i = c;
      }
      if (p) {
        for (let C of _)
          queueMicrotask(() => {
            throw C;
          });
        throw p;
      }
    } finally {
      e[Pt] = t, delete e.currentTarget, Ve(g), it(b);
    }
  }
}
const gl = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (e) => e
  })
);
function pl(e) {
  return (
    /** @type {string} */
    gl?.createHTML(e) ?? e
  );
}
function bl(e) {
  var t = La("template");
  return t.innerHTML = pl(e.replaceAll("<!>", "<!---->")), t.content;
}
function zr(e, t) {
  var r = (
    /** @type {Effect} */
    R
  );
  r.nodes === null && (r.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function A(e, t) {
  var r = (t & Ss) !== 0, n = (t & As) !== 0, a, i = !e.startsWith("<!>");
  return () => {
    a === void 0 && (a = bl(i ? e : "<!>" + e), r || (a = /** @type {TemplateNode} */
    /* @__PURE__ */ xt(a)));
    var f = (
      /** @type {TemplateNode} */
      n || Ra ? document.importNode(a, !0) : a.cloneNode(!0)
    );
    if (r) {
      var l = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ xt(f)
      ), o = (
        /** @type {TemplateNode} */
        f.lastChild
      );
      zr(l, o);
    } else
      zr(f, f);
    return f;
  };
}
function E(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function O(e, t) {
  var r = t == null ? "" : typeof t == "object" ? `${t}` : t;
  r !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = r, e.nodeValue = `${r}`);
}
function yl(e, t) {
  return xl(e, t);
}
const Dr = /* @__PURE__ */ new Map();
function xl(e, { target: t, anchor: r, props: n = {}, events: a, context: i, intro: f = !0, transformError: l }) {
  tl();
  var o = void 0, u = sl(() => {
    var g = r ?? t.appendChild(jt());
    qs(
      /** @type {TemplateNode} */
      g,
      {
        pending: () => {
        }
      },
      (_) => {
        ba({});
        var c = (
          /** @type {ComponentContext} */
          Ue
        );
        i && (c.c = i), a && (n.$$events = a), o = e(_, n) || {}, ya();
      },
      l
    );
    var b = /* @__PURE__ */ new Set(), p = (_) => {
      for (var c = 0; c < _.length; c++) {
        var M = _[c];
        if (!b.has(M)) {
          b.add(M);
          var C = hl(M);
          for (const ae of [t, document]) {
            var j = Dr.get(ae);
            j === void 0 && (j = /* @__PURE__ */ new Map(), Dr.set(ae, j));
            var P = j.get(M);
            P === void 0 ? (ae.addEventListener(M, sa, { passive: C }), j.set(M, 1)) : j.set(M, P + 1);
          }
        }
      }
    };
    return p(Yr(ri)), pn.add(p), () => {
      for (var _ of b)
        for (const C of [t, document]) {
          var c = (
            /** @type {Map<string, number>} */
            Dr.get(C)
          ), M = (
            /** @type {number} */
            c.get(_)
          );
          --M == 0 ? (C.removeEventListener(_, sa), c.delete(_), c.size === 0 && Dr.delete(C)) : c.set(_, M);
        }
      pn.delete(p), g !== r && g.parentNode?.removeChild(g);
    };
  });
  return bn.set(o, u), o;
}
let bn = /* @__PURE__ */ new WeakMap();
function ml(e, t) {
  const r = bn.get(e);
  return r ? (bn.delete(e), r(t)) : Promise.resolve();
}
var Ke, rt, De, Ot, Cr, Tr, Gr;
class wl {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, r = !0) {
    /** @type {TemplateNode} */
    Je(this, "anchor");
    /** @type {Map<Batch, Key>} */
    T(this, Ke, /* @__PURE__ */ new Map());
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
    T(this, rt, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    T(this, De, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    T(this, Ot, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    T(this, Cr, !0);
    /**
     * @param {Batch} batch
     */
    T(this, Tr, (t) => {
      if (s(this, Ke).has(t)) {
        var r = (
          /** @type {Key} */
          s(this, Ke).get(t)
        ), n = s(this, rt).get(r);
        if (n)
          Nn(n), s(this, Ot).delete(r);
        else {
          var a = s(this, De).get(r);
          a && (s(this, rt).set(r, a.effect), s(this, De).delete(r), a.fragment.lastChild.remove(), this.anchor.before(a.fragment), n = a.effect);
        }
        for (const [i, f] of s(this, Ke)) {
          if (s(this, Ke).delete(i), i === t)
            break;
          const l = s(this, De).get(f);
          l && (ke(l.effect), s(this, De).delete(f));
        }
        for (const [i, f] of s(this, rt)) {
          if (i === r || s(this, Ot).has(i)) continue;
          const l = () => {
            if (Array.from(s(this, Ke).values()).includes(i)) {
              var u = document.createDocumentFragment();
              Dn(f, u), u.append(jt()), s(this, De).set(i, { effect: f, fragment: u });
            } else
              ke(f);
            s(this, Ot).delete(i), s(this, rt).delete(i);
          };
          s(this, Cr) || !n ? (s(this, Ot).add(i), Lt(f, l, !1)) : l();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    T(this, Gr, (t) => {
      s(this, Ke).delete(t);
      const r = Array.from(s(this, Ke).values());
      for (const [n, a] of s(this, De))
        r.includes(n) || (ke(a.effect), s(this, De).delete(n));
    });
    this.anchor = t, D(this, Cr, r);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, r) {
    var n = (
      /** @type {Batch} */
      S
    ), a = ja();
    if (r && !s(this, rt).has(t) && !s(this, De).has(t))
      if (a) {
        var i = document.createDocumentFragment(), f = jt();
        i.append(f), s(this, De).set(t, {
          effect: Be(() => r(f)),
          fragment: i
        });
      } else
        s(this, rt).set(
          t,
          Be(() => r(this.anchor))
        );
    if (s(this, Ke).set(n, t), a) {
      for (const [l, o] of s(this, rt))
        l === t ? n.unskip_effect(o) : n.skip_effect(o);
      for (const [l, o] of s(this, De))
        l === t ? n.unskip_effect(o.effect) : n.skip_effect(o.effect);
      n.oncommit(s(this, Tr)), n.ondiscard(s(this, Gr));
    } else
      s(this, Tr).call(this, n);
  }
}
Ke = new WeakMap(), rt = new WeakMap(), De = new WeakMap(), Ot = new WeakMap(), Cr = new WeakMap(), Tr = new WeakMap(), Gr = new WeakMap();
function X(e, t, r = !1) {
  var n = new wl(e), a = r ? er : 0;
  function i(f, l) {
    n.ensure(f, l);
  }
  Mn(() => {
    var f = !1;
    t((l, o = 0) => {
      f = !0, i(o, l);
    }), f || i(-1, null);
  }, a);
}
function dr(e, t) {
  return t;
}
function kl(e, t, r) {
  for (var n = [], a = t.length, i, f = t.length, l = 0; l < a; l++) {
    let b = t[l];
    Lt(
      b,
      () => {
        if (i) {
          if (i.pending.delete(b), i.done.add(b), i.pending.size === 0) {
            var p = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            yn(e, Yr(i.done)), p.delete(i), p.size === 0 && (e.outrogroups = null);
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
      ), g = (
        /** @type {Element} */
        u.parentNode
      );
      rl(g), g.append(u), e.items.clear();
    }
    yn(e, t, !o);
  } else
    i = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ?? (e.outrogroups = /* @__PURE__ */ new Set())).add(i);
}
function yn(e, t, r = !0) {
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
      i.f |= vt;
      const f = document.createDocumentFragment();
      Dn(i, f);
    } else
      ke(t[a], r);
  }
}
var la;
function Vt(e, t, r, n, a, i = null) {
  var f = e, l = /* @__PURE__ */ new Map();
  {
    var o = (
      /** @type {Element} */
      e
    );
    f = o.appendChild(jt());
  }
  var u = null, g = /* @__PURE__ */ Ks(() => {
    var P = r();
    return mn(P) ? P : P == null ? [] : Yr(P);
  }), b, p = /* @__PURE__ */ new Map(), _ = !0;
  function c(P) {
    (j.effect.f & qe) === 0 && (j.pending.delete(P), j.fallback = u, El(j, b, f, t, n), u !== null && (b.length === 0 ? (u.f & vt) === 0 ? Nn(u) : (u.f ^= vt, _r(u, null, f)) : Lt(u, () => {
      u = null;
    })));
  }
  function M(P) {
    j.pending.delete(P);
  }
  var C = Mn(() => {
    b = /** @type {V[]} */
    d(g);
    for (var P = b.length, ae = /* @__PURE__ */ new Set(), le = (
      /** @type {Batch} */
      S
    ), Ie = ja(), be = 0; be < P; be += 1) {
      var G = b[be], ve = n(G, be), Ge = _ ? null : l.get(ve);
      Ge ? (Ge.v && rr(Ge.v, G), Ge.i && rr(Ge.i, be), Ie && le.unskip_effect(Ge.e)) : (Ge = Sl(
        l,
        _ ? f : la ?? (la = jt()),
        G,
        ve,
        be,
        a,
        t,
        r
      ), _ || (Ge.e.f |= vt), l.set(ve, Ge)), ae.add(ve);
    }
    if (P === 0 && i && !u && (_ ? u = Be(() => i(f)) : (u = Be(() => i(la ?? (la = jt()))), u.f |= vt)), P > ae.size && vs(), !_)
      if (p.set(le, ae), Ie) {
        for (const [ir, Jr] of l)
          ae.has(ir) || le.skip_effect(Jr.e);
        le.oncommit(c), le.ondiscard(M);
      } else
        c(le);
    d(g);
  }), j = { effect: C, items: l, pending: p, outrogroups: null, fallback: u };
  _ = !1;
}
function cr(e) {
  for (; e !== null && (e.f & Qe) === 0; )
    e = e.next;
  return e;
}
function El(e, t, r, n, a) {
  var i = t.length, f = e.items, l = cr(e.effect.first), o, u = null, g = [], b = [], p, _, c, M;
  for (M = 0; M < i; M += 1) {
    if (p = t[M], _ = a(p, M), c = /** @type {EachItem} */
    f.get(_).e, e.outrogroups !== null)
      for (const ve of e.outrogroups)
        ve.pending.delete(c), ve.done.delete(c);
    if ((c.f & pe) !== 0 && Nn(c), (c.f & vt) !== 0)
      if (c.f ^= vt, c === l)
        _r(c, null, r);
      else {
        var C = u ? u.next : l;
        c === e.effect.last && (e.effect.last = c.prev), c.prev && (c.prev.next = c.next), c.next && (c.next.prev = c.prev), gt(e, u, c), gt(e, c, C), _r(c, C, r), u = c, g = [], b = [], l = cr(u.next);
        continue;
      }
    if (c !== l) {
      if (o !== void 0 && o.has(c)) {
        if (g.length < b.length) {
          var j = b[0], P;
          u = j.prev;
          var ae = g[0], le = g[g.length - 1];
          for (P = 0; P < g.length; P += 1)
            _r(g[P], j, r);
          for (P = 0; P < b.length; P += 1)
            o.delete(b[P]);
          gt(e, ae.prev, le.next), gt(e, u, ae), gt(e, le, j), l = j, u = le, M -= 1, g = [], b = [];
        } else
          o.delete(c), _r(c, l, r), gt(e, c.prev, c.next), gt(e, c, u === null ? e.effect.first : u.next), gt(e, u, c), u = c;
        continue;
      }
      for (g = [], b = []; l !== null && l !== c; )
        (o ?? (o = /* @__PURE__ */ new Set())).add(l), b.push(l), l = cr(l.next);
      if (l === null)
        continue;
    }
    (c.f & vt) === 0 && g.push(c), u = c, l = cr(c.next);
  }
  if (e.outrogroups !== null) {
    for (const ve of e.outrogroups)
      ve.pending.size === 0 && (yn(e, Yr(ve.done)), e.outrogroups?.delete(ve));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (l !== null || o !== void 0) {
    var Ie = [];
    if (o !== void 0)
      for (c of o)
        (c.f & pe) === 0 && Ie.push(c);
    for (; l !== null; )
      (l.f & pe) === 0 && l !== e.fallback && Ie.push(l), l = cr(l.next);
    var be = Ie.length;
    if (be > 0) {
      var G = i === 0 ? r : null;
      kl(e, Ie, G);
    }
  }
}
function Sl(e, t, r, n, a, i, f, l) {
  var o = (f & ws) !== 0 ? (f & Es) === 0 ? /* @__PURE__ */ Qs(r, !1, !1) : zt(r) : null, u = (f & ks) !== 0 ? zt(a) : null;
  return {
    v: o,
    i: u,
    e: Be(() => (i(t, o ?? r, u ?? a, l), () => {
      e.delete(n);
    }))
  };
}
function _r(e, t, r) {
  if (e.nodes)
    for (var n = e.nodes.start, a = e.nodes.end, i = t && (t.f & vt) === 0 ? (
      /** @type {EffectNodes} */
      t.nodes.start
    ) : r; n !== null; ) {
      var f = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Mr(n)
      );
      if (i.before(n), n === a)
        return;
      n = f;
    }
}
function gt(e, t, r) {
  t === null ? e.effect.first = r : t.next = r, r === null ? e.effect.last = t : r.prev = t;
}
function Al(e, t, r = !1, n = !1, a = !1, i = !1) {
  var f = e, l = "";
  if (r)
    var o = (
      /** @type {Element} */
      e
    );
  re(() => {
    var u = (
      /** @type {Effect} */
      R
    );
    if (l !== (l = t() ?? "")) {
      if (r) {
        u.nodes = null, o.innerHTML = /** @type {string} */
        l, l !== "" && zr(
          /** @type {TemplateNode} */
          /* @__PURE__ */ xt(o),
          /** @type {TemplateNode} */
          o.lastChild
        );
        return;
      }
      if (u.nodes !== null && (Va(
        u.nodes.start,
        /** @type {TemplateNode} */
        u.nodes.end
      ), u.nodes = null), l !== "") {
        var g = n ? Cs : a ? Ts : void 0, b = (
          /** @type {HTMLTemplateElement | SVGElement | MathMLElement} */
          La(n ? "svg" : a ? "math" : "template", g)
        );
        b.innerHTML = /** @type {any} */
        l;
        var p = n || a ? b : (
          /** @type {HTMLTemplateElement} */
          b.content
        );
        if (zr(
          /** @type {TemplateNode} */
          /* @__PURE__ */ xt(p),
          /** @type {TemplateNode} */
          p.lastChild
        ), n || a)
          for (; /* @__PURE__ */ xt(p); )
            f.before(
              /** @type {TemplateNode} */
              /* @__PURE__ */ xt(p)
            );
        else
          f.before(p);
      }
    }
  });
}
function ni(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var a = e.length;
    for (t = 0; t < a; t++) e[t] && (r = ni(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function Cl() {
  for (var e, t, r = 0, n = "", a = arguments.length; r < a; r++) (e = arguments[r]) && (t = ni(e)) && (n && (n += " "), n += t);
  return n;
}
function vr(e) {
  return typeof e == "object" ? Cl(e) : e ?? "";
}
function Tl(e, t, r) {
  var n = e == null ? "" : "" + e;
  return n === "" ? null : n;
}
function hr(e, t, r, n, a, i) {
  var f = e.__className;
  if (f !== r || f === void 0) {
    var l = Tl(r);
    l == null ? e.removeAttribute("class") : e.className = l, e.__className = r;
  }
  return i;
}
function ai(e, t, r = !1) {
  if (e.multiple) {
    if (t == null)
      return;
    if (!mn(t))
      return Ps();
    for (var n of e.options)
      n.selected = t.includes(xr(n));
    return;
  }
  for (n of e.options) {
    var a = xr(n);
    if (el(a, t)) {
      n.selected = !0;
      return;
    }
  }
  (!r || t !== void 0) && (e.selectedIndex = -1);
}
function Ml(e) {
  var t = new MutationObserver(() => {
    ai(e, e.__value);
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
  }), Ha(() => {
    t.disconnect();
  });
}
function oa(e, t, r = t) {
  var n = /* @__PURE__ */ new WeakSet(), a = !0;
  Ba(e, "change", (i) => {
    var f = i ? "[selected]" : ":checked", l;
    if (e.multiple)
      l = [].map.call(e.querySelectorAll(f), xr);
    else {
      var o = e.querySelector(f) ?? // will fall back to first non-disabled option if no option is selected
      e.querySelector("option:not([disabled])");
      l = o && xr(o);
    }
    r(l), e.__value = l, S !== null && n.add(S);
  }), ll(() => {
    var i = t();
    if (e === document.activeElement) {
      var f = (
        /** @type {Batch} */
        S
      );
      if (n.has(f))
        return;
    }
    if (ai(e, i, a), a && i === void 0) {
      var l = e.querySelector(":checked");
      l !== null && (i = xr(l), r(i));
    }
    e.__value = i, a = !1;
  }), Ml(e);
}
function xr(e) {
  return "__value" in e ? e.__value : e.value;
}
const Pl = Symbol("is custom element"), Nl = Symbol("is html");
function sn(e, t, r, n) {
  var a = Dl(e);
  a[t] !== (a[t] = r) && (r == null ? e.removeAttribute(t) : typeof r != "string" && Il(e).includes(t) ? e[t] = r : e.setAttribute(t, r));
}
function Dl(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [Pl]: e.nodeName.includes("-"),
      [Nl]: e.namespaceURI === _a
    })
  );
}
var ua = /* @__PURE__ */ new Map();
function Il(e) {
  var t = e.getAttribute("is") || e.nodeName, r = ua.get(t);
  if (r) return r;
  ua.set(t, r = []);
  for (var n, a = e, i = Element.prototype; i !== a; ) {
    n = as(a);
    for (var f in n)
      n[f].set && r.push(f);
    a = ca(a);
  }
  return r;
}
function fa(e, t, r = t) {
  var n = /* @__PURE__ */ new WeakSet();
  Ba(e, "input", async (a) => {
    var i = a ? e.defaultValue : e.value;
    if (i = ln(e) ? on(i) : i, r(i), S !== null && n.add(S), await cl(), i !== (i = t())) {
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
  ti(t) == null && e.value && (r(ln(e) ? on(e.value) : e.value), S !== null && n.add(S)), za(() => {
    var a = t();
    if (e === document.activeElement) {
      var i = (
        /** @type {Batch} */
        S
      );
      if (n.has(i))
        return;
    }
    ln(e) && a === on(e.value) || e.type === "date" && !a && !e.value || a !== e.value && (e.value = a ?? "");
  });
}
function ln(e) {
  var t = e.type;
  return t === "number" || t === "range";
}
function on(e) {
  return e === "" ? null : +e;
}
const Rl = "5";
var da;
typeof window < "u" && ((da = window.__svelte ?? (window.__svelte = {})).v ?? (da.v = /* @__PURE__ */ new Set())).add(Rl);
var Ol = /* @__PURE__ */ A('<div class="flex flex-col items-center justify-center py-20 px-6"><div class="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-10 max-w-md w-full text-center space-y-5"><div class="mx-auto w-16 h-16 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-3xl">🔔</div> <h2 class="text-2xl font-bold text-gray-900 dark:text-white">Welcome to your Dashboard</h2> <p class="text-gray-500 dark:text-gray-400">Please log in to access your member dashboard, notifications, invoices, and more.</p> <button class="w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors">Log In</button></div></div>'), Fl = /* @__PURE__ */ A('<div class="flex flex-col justify-center items-center p-16 bg-white dark:bg-gray-800 rounded-2xl shadow-sm"><div class="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600"></div> <p class="mt-4 text-lg text-gray-500 dark:text-gray-400">Loading dashboard…</p></div>'), jl = /* @__PURE__ */ A('<div class="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-4 text-red-700 dark:text-red-300"><span class="font-medium">Error:</span> </div>'), Ll = /* @__PURE__ */ A("<span> </span>"), Bl = /* @__PURE__ */ A('<div class="flex justify-between text-sm border-b border-gray-100 dark:border-gray-700 pb-1"><span class="text-gray-500 dark:text-gray-400 capitalize"> </span> <span class="font-medium text-gray-800 dark:text-gray-200"> </span></div>'), Hl = /* @__PURE__ */ A('<div class="mt-4 space-y-2"></div>'), ql = /* @__PURE__ */ A('<section><div class="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6"><div class="flex items-center justify-between"><h2 class="text-xl font-bold text-gray-900 dark:text-white">Citizenship Status</h2> <!></div> <!></div></section>'), zl = /* @__PURE__ */ A('<span class="inline-flex items-center justify-center px-2 py-0.5 text-xs font-bold text-white bg-red-500 rounded-full"> </span>'), Ul = /* @__PURE__ */ A('<div class="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-8 flex justify-center"><div class="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div></div>'), Vl = /* @__PURE__ */ A('<div class="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-8 text-center text-gray-500 dark:text-gray-400"><div class="text-3xl mb-2">🔔</div> No notifications</div>'), Gl = /* @__PURE__ */ A('<div class="w-2 h-2 bg-blue-500 rounded-full mt-1.5"></div>'), Yl = /* @__PURE__ */ A('<div class="mt-3 pt-3 border-t border-gray-100 dark:border-gray-700 text-sm text-gray-700 dark:text-gray-300 leading-relaxed"></div>'), Wl = /* @__PURE__ */ A('<tr><td class="px-3 py-3 align-top"><!></td><td class="px-3 py-3"><div> </div> <!></td><td class="px-3 py-3 align-top text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap hidden md:table-cell"> </td><td class="px-3 py-3 align-top text-xs text-gray-400 dark:text-gray-500 whitespace-nowrap hidden sm:table-cell"> </td><td class="px-3 py-3 align-top"><div class="flex justify-end gap-1"><button> </button> <button class="p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"> </button> <button title="Delete" class="p-1 rounded hover:bg-red-50 dark:hover:bg-red-900/20 text-gray-400 hover:text-red-500 transition-colors">🗑</button></div></td></tr>'), Jl = /* @__PURE__ */ A('<div class="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-x-auto"><table class="w-full"><thead><tr class="bg-gray-50 dark:bg-gray-750 border-b border-gray-200 dark:border-gray-700 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"><th class="w-8 px-3 py-2"></th><th class="text-left px-3 py-2">Subject</th><th class="text-left px-3 py-2 whitespace-nowrap hidden md:table-cell">From</th><th class="text-left px-3 py-2 whitespace-nowrap hidden sm:table-cell">Date</th><th class="w-24 px-3 py-2 text-right">Actions</th></tr></thead><tbody></tbody></table></div>'), Kl = /* @__PURE__ */ A('<div class="flex flex-col justify-center items-center p-12 bg-gray-50 dark:bg-gray-800/50 rounded-xl"><div class="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div> <p class="mt-4 text-gray-500 dark:text-gray-400">Loading invoices…</p></div>'), Xl = /* @__PURE__ */ A('<div class="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-4 text-red-700 dark:text-red-300"> </div>'), Zl = /* @__PURE__ */ A('<div class="flex items-center gap-2 flex-wrap"><button class="px-3 py-1 text-xs font-medium bg-gray-800 dark:bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors">💳 Pay</button> <button class="px-2 py-1 text-xs border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition-colors">↻ Refresh</button> <button class="px-2 py-1 text-xs border border-gray-200 dark:border-gray-600 rounded hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400 transition-colors">Demo Pay</button></div>'), Ql = /* @__PURE__ */ A('<span class="text-xs text-gray-400 dark:text-gray-500"> </span>'), $l = /* @__PURE__ */ A('<tr class="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-750"><td class="px-4 py-3"><div class="font-medium text-gray-900 dark:text-white text-sm"> </div></td><td class="px-4 py-3 font-semibold text-gray-900 dark:text-white"> </td><td class="px-4 py-3 text-gray-700 dark:text-gray-300"> </td><td class="px-4 py-3"><span> </span></td><td class="px-4 py-3"><!></td></tr>'), eo = /* @__PURE__ */ A('<div class="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-x-auto"><table class="w-full text-sm text-left"><thead class="text-xs text-gray-700 dark:text-gray-400 uppercase bg-gray-50 dark:bg-gray-750"><tr><th class="px-4 py-3">Description</th><th class="px-4 py-3">Amount</th><th class="px-4 py-3">Currency</th><th class="px-4 py-3">Status</th><th class="px-4 py-3">Actions</th></tr></thead><tbody></tbody></table></div>'), to = /* @__PURE__ */ A('<div class="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 text-center text-gray-500 dark:text-gray-400">No invoices yet.</div>'), ro = /* @__PURE__ */ A('<div class="flex justify-center py-8"><div class="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div></div>'), no = /* @__PURE__ */ A('<div><label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Exact Amount to Send</label> <code class="block px-3 py-2 bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded font-mono text-lg font-bold text-blue-800 dark:text-blue-200"> </code> <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">The unique last digits identify your invoice — send this <strong>exact</strong> amount.</p></div>'), ao = /* @__PURE__ */ A('<div><label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Subaccount (Hex)</label> <code class="block px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded font-mono text-xs break-all text-gray-800 dark:text-gray-200"> </code></div>'), io = /* @__PURE__ */ A('<div class="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-3"><p class="text-sm text-amber-800 dark:text-amber-200"> </p></div>'), so = /* @__PURE__ */ A('<div class="bg-gray-50 dark:bg-gray-750 rounded-lg p-4"><div class="grid grid-cols-2 gap-4 text-sm"><div><span class="text-gray-500 dark:text-gray-400">Invoice ID:</span> <span class="ml-2 font-medium text-gray-900 dark:text-white"> </span></div> <div><span class="text-gray-500 dark:text-gray-400">Currency:</span> <span class="ml-2 font-bold text-gray-900 dark:text-white"> </span></div></div></div> <div><h4 class="font-semibold text-gray-900 dark:text-white mb-3">Transfer Details</h4> <div class="space-y-3"><div><label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Recipient (Canister ID)</label> <code class="block px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded font-mono text-sm break-all text-gray-800 dark:text-gray-200"> </code></div> <!> <!></div></div> <!> <div><h4 class="font-semibold text-gray-900 dark:text-white mb-2">DFX CLI Command</h4> <div class="bg-gray-900 rounded-lg p-4 relative"><pre class="text-green-400 font-mono text-sm whitespace-pre-wrap"> </pre> <button class="absolute top-2 right-2 p-2 rounded hover:bg-gray-700 transition-colors text-gray-400 hover:text-white text-sm"> </button></div></div>', 1), lo = /* @__PURE__ */ A('<div class="text-red-600 dark:text-red-400 text-center py-4">Failed to load payment details.</div>'), oo = /* @__PURE__ */ A('<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/50"><div class="bg-white dark:bg-gray-800 rounded-xl shadow-xl max-w-lg w-full mx-4 max-h-[90vh] overflow-y-auto"><div class="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-700"><h3 class="text-lg font-semibold text-gray-900 dark:text-white">💳 Payment Instructions</h3> <button class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 text-xl">&times;</button></div> <div class="p-6 space-y-5"><!></div> <div class="flex justify-end px-6 py-4 border-t border-gray-200 dark:border-gray-700"><button class="px-4 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition-colors">Close</button></div></div></div>'), uo = /* @__PURE__ */ A("<option> </option>"), fo = /* @__PURE__ */ A("<option> </option>"), co = /* @__PURE__ */ A('<div class="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 mb-4 space-y-4"><div><label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Label</label> <input type="text" placeholder="e.g. My ICP Wallet" class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"/></div> <div class="grid grid-cols-1 sm:grid-cols-2 gap-4"><div><label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Network</label> <select class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-blue-500 outline-none"></select></div> <div><label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Currency</label> <select class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-blue-500 outline-none"></select></div></div> <div><label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Address</label> <input type="text" placeholder="Wallet address or IBAN" class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"/></div> <div class="flex justify-end gap-2"><button class="px-4 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition-colors">Cancel</button> <button class="px-4 py-2 text-sm bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white rounded-lg transition-colors"> </button></div></div>'), vo = /* @__PURE__ */ A('<div class="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-8 flex justify-center"><div class="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div></div>'), ho = /* @__PURE__ */ A('<div class="bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-8 text-center"><p class="text-gray-600 dark:text-gray-400">No payment accounts yet.</p> <p class="text-sm text-gray-500 dark:text-gray-500 mt-2">Add a payment account to receive and send payments.</p></div>'), _o = /* @__PURE__ */ A('<span class="text-xs px-2 py-0.5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full">✓ Verified</span>'), go = /* @__PURE__ */ A('<span class="text-xs text-gray-500 dark:text-gray-400"> </span>'), po = /* @__PURE__ */ A("<span></span>"), bo = /* @__PURE__ */ A('<div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5 hover:shadow-md transition-shadow"><div class="flex items-center justify-between mb-2"><strong class="text-lg text-gray-900 dark:text-white"> </strong> <!></div> <div class="flex gap-2 mb-3"><span class="text-xs px-2 py-0.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full"> </span> <span class="text-xs px-2 py-0.5 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 rounded-full"> </span></div> <div class="bg-gray-50 dark:bg-gray-750 rounded-lg px-3 py-2 mb-3 overflow-x-auto"><code class="font-mono text-sm text-gray-700 dark:text-gray-300 break-all"> </code></div> <div class="flex items-center justify-between"><!> <button class="text-xs px-2 py-1 text-red-500 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20 rounded transition-colors">🗑 Remove</button></div></div>'), yo = /* @__PURE__ */ A('<div class="grid grid-cols-1 md:grid-cols-2 gap-4"></div>'), xo = /* @__PURE__ */ A('<!> <section><div class="flex items-center justify-between mb-4"><div class="flex items-center gap-2"><h2 class="text-xl font-bold text-gray-900 dark:text-white">Notifications</h2> <!></div></div> <!></section> <section><h2 class="text-xl font-bold text-gray-900 dark:text-white mb-1">Invoices</h2> <p class="text-gray-500 dark:text-gray-400 text-sm mb-4">Manage your invoices and payment records</p> <!></section> <!> <section><div class="flex items-center justify-between mb-4"><h2 class="text-xl font-bold text-gray-900 dark:text-white">Payment Accounts</h2> <button class="px-3 py-1.5 text-sm border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition-colors">+ Add Account</button></div> <!> <!></section>', 1), mo = /* @__PURE__ */ A('<div><h1 class="text-3xl font-bold text-gray-900 dark:text-white"> <span class="text-gray-500 dark:text-gray-400"> </span></h1></div> <!>', 1), wo = /* @__PURE__ */ A('<div class="w-full max-w-5xl mx-auto px-4 py-6 font-sans space-y-8"><!></div>');
function ko(e, t) {
  ba(t, !0);
  const r = t.ctx.theme?.cn ?? ((...h) => h.filter(Boolean).join(" "));
  let n = /* @__PURE__ */ F(null), a = /* @__PURE__ */ F(null), i = /* @__PURE__ */ F(Tt([])), f = /* @__PURE__ */ F(!0), l = /* @__PURE__ */ F(""), o = /* @__PURE__ */ F(!0), u = /* @__PURE__ */ F(null), g = /* @__PURE__ */ F(null), b = /* @__PURE__ */ F(!0), p = /* @__PURE__ */ F(""), _ = /* @__PURE__ */ F(Tt([])), c = /* @__PURE__ */ F(!0), M = /* @__PURE__ */ F(""), C = /* @__PURE__ */ F(!1), j = /* @__PURE__ */ F(""), P = /* @__PURE__ */ F(""), ae = /* @__PURE__ */ F("ICP"), le = /* @__PURE__ */ F("ICP"), Ie = /* @__PURE__ */ F(!1), be = /* @__PURE__ */ F(!1), G = /* @__PURE__ */ F(null), ve = /* @__PURE__ */ F(!1), Ge = /* @__PURE__ */ F(null), ir = /* @__PURE__ */ F(!1);
  const Jr = [
    { value: "ICP", label: "Internet Computer (ICP)" },
    { value: "Bitcoin", label: "Bitcoin" },
    { value: "Ethereum", label: "Ethereum" },
    { value: "SEPA", label: "SEPA Bank Transfer" }
  ], In = {
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
  let ii = /* @__PURE__ */ fr(() => In[d(ae)] || []);
  ra(() => {
    const h = In[d(ae)] || [];
    h.length > 0 && !h.find((m) => m.value === d(le)) && x(le, h[0].value, !0);
  });
  function si() {
    const h = (/* @__PURE__ */ new Date()).getHours();
    return h < 12 ? "Good morning" : h < 18 ? "Good afternoon" : "Good evening";
  }
  let Rn = /* @__PURE__ */ fr(() => d(i).filter((h) => !h.read).length);
  async function Kr(h, m, B = {}) {
    const Ee = await t.ctx.backend.extension_sync_call(h, m, JSON.stringify(B)), Ye = typeof Ee == "string" ? JSON.parse(Ee) : Ee;
    return Ye?.success && Ye?.response ? JSON.parse(Ye.response) : Ye;
  }
  async function li() {
    x(f, !0), x(l, "");
    try {
      const h = { user_id: t.ctx.principal || "" }, [m, B] = await Promise.all([
        t.ctx.callSync("get_dashboard_summary", h).catch(() => null),
        t.ctx.callSync("get_citizenship_status", h).catch(() => null)
      ]);
      x(n, m?.data ?? m, !0), x(a, B?.data ?? B, !0);
    } catch (h) {
      x(l, h?.message || String(h), !0);
    } finally {
      x(f, !1);
    }
  }
  async function oi() {
    x(o, !0);
    try {
      const h = { user_id: t.ctx.principal || "" }, m = await Kr("notifications", "get_notifications", h).catch(() => ({ data: [] })), B = m?.data ?? m?.notifications ?? m;
      x(i, Array.isArray(B) ? B : [], !0);
    } catch {
      x(i, [], !0);
    } finally {
      x(o, !1);
    }
  }
  async function Xr() {
    x(b, !0), x(p, "");
    try {
      const h = await t.ctx.callSync("get_invoice_information", { user_id: t.ctx.principal || "" });
      h?.success ? x(g, h.data, !0) : x(p, h?.error || "Failed to load invoices", !0);
    } catch (h) {
      x(p, h?.message || String(h), !0);
    } finally {
      x(b, !1);
    }
  }
  async function Zr() {
    x(c, !0), x(M, "");
    try {
      const h = await t.ctx.callSync("list_payment_accounts", { user_id: t.ctx.principal || "" });
      h?.success && h?.data ? x(_, h.data, !0) : x(_, [], !0);
    } catch {
      x(_, [], !0);
    } finally {
      x(c, !1);
    }
  }
  ra(() => {
    if (!t.ctx.isAuthenticated) {
      x(f, !1), x(o, !1), x(b, !1), x(c, !1);
      return;
    }
    Promise.all([
      li(),
      oi(),
      Xr(),
      Zr()
    ]);
  });
  async function On(h) {
    try {
      const m = !h.read;
      await Kr("notifications", "mark_as_read", { id: h.id, read: m }), x(i, d(i).map((B) => B.id === h.id ? { ...B, read: m } : B), !0);
    } catch {
    }
  }
  async function ui(h) {
    try {
      await Kr("notifications", "delete_notification", { id: h.id }), x(i, d(i).filter((m) => m.id !== h.id), !0);
    } catch {
    }
  }
  function Fn(h) {
    d(u) === h.id ? x(u, null) : (x(u, h.id, !0), h.read || On(h));
  }
  function fi(h) {
    return h ? h.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/\*(.+?)\*/g, "<em>$1</em>").replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-blue-600 underline hover:text-blue-800" target="_blank" rel="noopener">$1</a>').replace(/`([^`]+)`/g, '<code class="bg-gray-100 dark:bg-gray-700 px-1 py-0.5 rounded text-xs">$1</code>').replace(/^\s*[-*]\s+(.+)$/gm, '<li class="ml-4">$1</li>').replace(/(<li.*<\/li>\n?)+/g, (m) => '<ul class="list-disc ml-2 space-y-1">' + m + "</ul>").replace(/\n{2,}/g, '</p><p class="mt-2">').replace(/\n/g, "<br>").replace(/^/, "<p>").replace(/$/, "</p>") : "";
  }
  function di(h) {
    if (!h) return "";
    const m = Date.now() - h;
    if (m < 0) return "just now";
    const B = Math.floor(m / 1e3);
    if (B < 60) return "just now";
    const Ee = Math.floor(B / 60);
    if (Ee < 60) return `${Ee}m ago`;
    const Ye = Math.floor(Ee / 60);
    if (Ye < 24) return `${Ye}h ago`;
    const sr = Math.floor(Ye / 24);
    if (sr < 30) return `${sr}d ago`;
    const lr = Math.floor(sr / 30);
    return lr < 12 ? `${lr}mo ago` : `${Math.floor(lr / 12)}y ago`;
  }
  function ci(h) {
    if (!h) return "";
    const m = new Date(h), B = (Ee) => String(Ee).padStart(2, "0");
    return `${m.getFullYear()}-${B(m.getMonth() + 1)}-${B(m.getDate())} ${B(m.getHours())}:${B(m.getMinutes())}`;
  }
  function vi(h) {
    switch (h?.toLowerCase()) {
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
  function jn(h) {
    return h ? h.amount_raw != null ? `dfx canister call ${(h.currency || "token").toLowerCase()}_backend icrc1_transfer '(record { to = record { owner = principal "${h.principal}" }; amount = ${h.amount_raw} })' --network ic` : `dfx canister call token_backend icrc1_transfer '(record { to = record { owner = principal "${h.principal}"; subaccount = opt blob "${h.subaccount}" }; amount = ${h.amount_raw || 0} })' --network ic` : "";
  }
  async function hi(h) {
    x(Ge, h, !0), x(be, !0), x(ve, !0), x(G, null);
    try {
      const m = await t.ctx.callSync("get_invoice_deposit_address", { invoice_id: h.id });
      m?.success && x(G, m.data, !0);
    } catch {
    } finally {
      x(ve, !1);
    }
  }
  function _i(h) {
    try {
      const m = document.createElement("textarea");
      m.value = h, m.style.position = "fixed", m.style.left = "-9999px", document.body.appendChild(m), m.select(), document.execCommand("copy"), document.body.removeChild(m), x(ir, !0), setTimeout(
        () => {
          x(ir, !1);
        },
        2e3
      );
    } catch {
    }
  }
  async function gi(h) {
    try {
      const m = await t.ctx.backend.refresh_invoice(JSON.stringify({ invoice_id: h.id }));
      (typeof m == "string" ? JSON.parse(m) : m)?.success && await Xr();
    } catch {
    }
  }
  async function pi(h) {
    try {
      (await t.ctx.callSync("demo_mark_invoice_paid", { invoice_id: h.id }))?.success && await Xr();
    } catch {
    }
  }
  async function bi() {
    if (!(!d(P) || !d(j))) {
      x(Ie, !0);
      try {
        (await t.ctx.callSync("add_payment_account", {
          user_id: t.ctx.principal || "",
          address: d(P),
          label: d(j),
          network: d(ae),
          currency: d(le)
        }))?.success && (await Zr(), x(j, ""), x(P, ""), x(ae, "ICP"), x(le, "ICP"), x(C, !1));
      } catch {
      } finally {
        x(Ie, !1);
      }
    }
  }
  async function yi(h) {
    try {
      (await t.ctx.callSync("remove_payment_account", { user_id: t.ctx.principal || "", account_id: h }))?.success && await Zr();
    } catch {
    }
  }
  function Qr(h) {
    return !h || typeof h != "object" ? [] : Object.entries(h).filter(([m]) => !m.startsWith("_"));
  }
  var Ln = wo(), xi = v(Ln);
  {
    var mi = (h) => {
      var m = Ol(), B = v(m), Ee = y(v(B), 6);
      ie("click", Ee, () => t.ctx.navigate?.("/join")), E(h, m);
    }, wi = (h) => {
      var m = mo(), B = an(m), Ee = v(B), Ye = v(Ee), sr = y(Ye), lr = v(sr), ki = y(B, 2);
      {
        var Ei = (We) => {
          var Et = Fl();
          E(We, Et);
        }, Si = (We) => {
          var Et = jl(), Nr = y(v(Et));
          re(() => O(Nr, ` ${d(l) ?? ""}`)), E(We, Et);
        }, Ai = (We) => {
          var Et = xo(), Nr = an(Et);
          {
            var Ci = (w) => {
              var N = ql(), oe = v(N), J = v(oe), he = y(v(J), 2);
              {
                var k = (Y) => {
                  var Q = Ll(), $ = v(Q);
                  re(
                    (H) => {
                      hr(Q, 1, H), O($, `${d(a).status === "active" ? "✓" : "✗"}
									${(d(a).status_label || d(a).status) ?? ""}`);
                    },
                    [
                      () => vr(r("inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-semibold", d(a).status === "active" ? "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400" : "bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-400"))
                    ]
                  ), E(Y, Q);
                };
                X(he, (Y) => {
                  d(a).status && Y(k);
                });
              }
              var ue = y(J, 2);
              {
                var Se = (Y) => {
                  var Q = Hl();
                  Vt(Q, 21, () => Qr(d(a)).filter(([$]) => $ !== "status" && $ !== "status_label"), dr, ($, H) => {
                    var ee = /* @__PURE__ */ fr(() => us(d(H), 2));
                    let Ae = () => d(ee)[0], L = () => d(ee)[1];
                    var te = Bl(), z = v(te), Ce = v(z), fe = y(z, 2), $e = v(fe);
                    re(
                      (K, ye) => {
                        O(Ce, K), O($e, ye);
                      },
                      [
                        () => Ae().replace(/_/g, " "),
                        () => typeof L() == "object" ? JSON.stringify(L()) : L()
                      ]
                    ), E($, te);
                  }), E(Y, Q);
                }, Re = /* @__PURE__ */ fr(() => Qr(d(a)).filter(([Y]) => Y !== "status" && Y !== "status_label").length > 0);
                X(ue, (Y) => {
                  d(Re) && Y(Se);
                });
              }
              E(w, N);
            }, Ti = /* @__PURE__ */ fr(() => d(a) && Qr(d(a)).length > 0);
            X(Nr, (w) => {
              d(Ti) && w(Ci);
            });
          }
          var Bn = y(Nr, 2), Hn = v(Bn), Mi = v(Hn), Pi = y(v(Mi), 2);
          {
            var Ni = (w) => {
              var N = zl(), oe = v(N);
              re(() => O(oe, d(Rn))), E(w, N);
            };
            X(Pi, (w) => {
              d(Rn) > 0 && w(Ni);
            });
          }
          var Di = y(Hn, 2);
          {
            var Ii = (w) => {
              var N = Ul();
              E(w, N);
            }, Ri = (w) => {
              var N = Vl();
              E(w, N);
            }, Oi = (w) => {
              var N = Jl(), oe = v(N), J = y(v(oe));
              Vt(J, 21, () => d(i), (he) => he.id, (he, k) => {
                var ue = Wl(), Se = v(ue), Re = v(Se);
                {
                  var Y = (_e) => {
                    var st = Gl();
                    E(_e, st);
                  };
                  X(Re, (_e) => {
                    d(k).read || _e(Y);
                  });
                }
                var Q = y(Se), $ = v(Q), H = v($), ee = y($, 2);
                {
                  var Ae = (_e) => {
                    var st = Yl();
                    Al(st, () => fi(d(k).message || d(k).body), !0), E(_e, st);
                  };
                  X(ee, (_e) => {
                    d(u) === d(k).id && (d(k).message || d(k).body) && _e(Ae);
                  });
                }
                var L = y(Q), te = v(L), z = y(L), Ce = v(z), fe = y(z), $e = v(fe), K = v($e), ye = v(K), U = y(K, 2), xe = v(U), St = y(U, 2);
                re(
                  (_e, st, $r, en, tn) => {
                    hr(ue, 1, _e), hr($, 1, st), O(H, d(k).title || "Notification"), O(te, d(k).sender || "—"), sn(z, "title", $r), O(Ce, en), sn(K, "title", d(u) === d(k).id ? "Collapse" : "Read message"), hr(K, 1, tn), O(ye, d(u) === d(k).id ? "👁‍🗨" : "👁"), sn(U, "title", d(k).read ? "Mark as unread" : "Mark as read"), O(xe, d(k).read ? "✉" : "📬");
                  },
                  [
                    () => vr(r("border-b border-gray-100 dark:border-gray-700 last:border-b-0 cursor-pointer transition-colors", d(k).read ? "hover:bg-gray-50 dark:hover:bg-gray-750" : "bg-blue-50/50 dark:bg-blue-900/10 hover:bg-blue-50 dark:hover:bg-blue-900/20")),
                    () => vr(r("truncate text-sm", d(k).read ? "text-gray-600 dark:text-gray-400" : "font-semibold text-gray-900 dark:text-white")),
                    () => ci(d(k).timestamp_ms),
                    () => di(d(k).timestamp_ms),
                    () => vr(r("p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors", d(u) === d(k).id ? "text-blue-500" : "text-gray-400"))
                  ]
                ), ie("click", ue, () => Fn(d(k))), ie("click", $e, (_e) => _e.stopPropagation()), ie("click", K, () => Fn(d(k))), ie("click", U, () => On(d(k))), ie("click", St, () => ui(d(k))), E(he, ue);
              }), E(w, N);
            };
            X(Di, (w) => {
              d(o) ? w(Ii) : d(i).length === 0 ? w(Ri, 1) : w(Oi, -1);
            });
          }
          var qn = y(Bn, 2), Fi = y(v(qn), 4);
          {
            var ji = (w) => {
              var N = Kl();
              E(w, N);
            }, Li = (w) => {
              var N = Xl(), oe = v(N);
              re(() => O(oe, d(p))), E(w, N);
            }, Bi = (w) => {
              var N = eo(), oe = v(N), J = y(v(oe));
              Vt(J, 21, () => d(g).invoices, dr, (he, k) => {
                var ue = $l(), Se = v(ue), Re = v(Se), Y = v(Re), Q = y(Se), $ = v(Q), H = y(Q), ee = v(H), Ae = y(H), L = v(Ae), te = v(L), z = y(Ae), Ce = v(z);
                {
                  var fe = (K) => {
                    var ye = Zl(), U = v(ye), xe = y(U, 2), St = y(xe, 2);
                    ie("click", U, () => hi(d(k))), ie("click", xe, () => gi(d(k))), ie("click", St, () => pi(d(k))), E(K, ye);
                  }, $e = (K) => {
                    var ye = Ql(), U = v(ye);
                    re(() => O(U, d(k).paid_on || "—")), E(K, ye);
                  };
                  X(Ce, (K) => {
                    d(k).status === "Pending" || d(k).status === "Overdue" ? K(fe) : K($e, -1);
                  });
                }
                re(
                  (K) => {
                    O(Y, d(k).metadata || "Invoice"), O($, d(k).amount), O(ee, d(k).currency), hr(L, 1, K), O(te, d(k).status);
                  },
                  [
                    () => vr(r("px-2.5 py-0.5 text-xs font-medium rounded-full", vi(d(k).status)))
                  ]
                ), E(he, ue);
              }), E(w, N);
            }, Hi = (w) => {
              var N = to();
              E(w, N);
            };
            X(Fi, (w) => {
              d(b) ? w(ji) : d(p) ? w(Li, 1) : d(g)?.invoices?.length > 0 ? w(Bi, 2) : w(Hi, -1);
            });
          }
          var zn = y(qn, 2);
          {
            var qi = (w) => {
              var N = oo(), oe = v(N), J = v(oe), he = y(v(J), 2), k = y(J, 2), ue = v(k);
              {
                var Se = (H) => {
                  var ee = ro();
                  E(H, ee);
                }, Re = (H) => {
                  var ee = so(), Ae = an(ee), L = v(Ae), te = v(L), z = y(v(te), 2), Ce = v(z), fe = y(te, 2), $e = y(v(fe), 2), K = v($e), ye = y(Ae, 2), U = y(v(ye), 2), xe = v(U), St = y(v(xe), 2), _e = v(St), st = y(xe, 2);
                  {
                    var $r = (Te) => {
                      var _t = no(), or = y(v(_t), 2), ur = v(or);
                      re(() => O(ur, `${d(G).amount_human ?? ""} ${d(G).currency ?? ""}`)), E(Te, _t);
                    };
                    X(st, (Te) => {
                      d(G).amount_human != null && Te($r);
                    });
                  }
                  var en = y(st, 2);
                  {
                    var tn = (Te) => {
                      var _t = ao(), or = y(v(_t), 2), ur = v(or);
                      re(() => O(ur, d(G).subaccount)), E(Te, _t);
                    };
                    X(en, (Te) => {
                      d(G).subaccount && Te(tn);
                    });
                  }
                  var Gn = y(ye, 2);
                  {
                    var Ki = (Te) => {
                      var _t = io(), or = v(_t), ur = v(or);
                      re(() => O(ur, d(G).note)), E(Te, _t);
                    };
                    X(Gn, (Te) => {
                      d(G).note && Te(Ki);
                    });
                  }
                  var Xi = y(Gn, 2), Zi = y(v(Xi), 2), Yn = v(Zi), Qi = v(Yn), Wn = y(Yn, 2), $i = v(Wn);
                  re(
                    (Te) => {
                      O(Ce, d(G).invoice_id), O(K, d(G).currency), O(_e, d(G).principal), O(Qi, Te), O($i, d(ir) ? "✓" : "📋");
                    },
                    [() => jn(d(G))]
                  ), ie("click", Wn, () => _i(jn(d(G)))), E(H, ee);
                }, Y = (H) => {
                  var ee = lo();
                  E(H, ee);
                };
                X(ue, (H) => {
                  d(ve) ? H(Se) : d(G) ? H(Re, 1) : H(Y, -1);
                });
              }
              var Q = y(k, 2), $ = v(Q);
              ie("click", N, () => x(be, !1)), ie("click", oe, (H) => H.stopPropagation()), ie("click", he, () => x(be, !1)), ie("click", $, () => x(be, !1)), E(w, N);
            };
            X(zn, (w) => {
              d(be) && w(qi);
            });
          }
          var zi = y(zn, 2), Un = v(zi), Ui = y(v(Un), 2), Vn = y(Un, 2);
          {
            var Vi = (w) => {
              var N = co(), oe = v(N), J = y(v(oe), 2), he = y(oe, 2), k = v(he), ue = y(v(k), 2);
              Vt(ue, 21, () => Jr, dr, (L, te) => {
                var z = uo(), Ce = v(z), fe = {};
                re(() => {
                  O(Ce, d(te).label), fe !== (fe = d(te).value) && (z.value = (z.__value = d(te).value) ?? "");
                }), E(L, z);
              });
              var Se = y(k, 2), Re = y(v(Se), 2);
              Vt(Re, 21, () => d(ii), dr, (L, te) => {
                var z = fo(), Ce = v(z), fe = {};
                re(() => {
                  O(Ce, d(te).label), fe !== (fe = d(te).value) && (z.value = (z.__value = d(te).value) ?? "");
                }), E(L, z);
              });
              var Y = y(he, 2), Q = y(v(Y), 2), $ = y(Y, 2), H = v($), ee = y(H, 2), Ae = v(ee);
              re(() => {
                ee.disabled = d(Ie) || !d(j) || !d(P), O(Ae, d(Ie) ? "Saving…" : "Save");
              }), fa(J, () => d(j), (L) => x(j, L)), oa(ue, () => d(ae), (L) => x(ae, L)), oa(Re, () => d(le), (L) => x(le, L)), fa(Q, () => d(P), (L) => x(P, L)), ie("click", H, () => {
                x(C, !1), x(j, ""), x(P, "");
              }), ie("click", ee, bi), E(w, N);
            };
            X(Vn, (w) => {
              d(C) && w(Vi);
            });
          }
          var Gi = y(Vn, 2);
          {
            var Yi = (w) => {
              var N = vo();
              E(w, N);
            }, Wi = (w) => {
              var N = ho();
              E(w, N);
            }, Ji = (w) => {
              var N = yo();
              Vt(N, 21, () => d(_), dr, (oe, J) => {
                var he = bo(), k = v(he), ue = v(k), Se = v(ue), Re = y(ue, 2);
                {
                  var Y = (U) => {
                    var xe = _o();
                    E(U, xe);
                  };
                  X(Re, (U) => {
                    d(J).is_verified && U(Y);
                  });
                }
                var Q = y(k, 2), $ = v(Q), H = v($), ee = y($, 2), Ae = v(ee), L = y(Q, 2), te = v(L), z = v(te), Ce = y(L, 2), fe = v(Ce);
                {
                  var $e = (U) => {
                    var xe = go(), St = v(xe);
                    re((_e) => O(St, `Created: ${_e ?? ""}`), [
                      () => new Date(d(J).created_at).toLocaleDateString()
                    ]), E(U, xe);
                  }, K = (U) => {
                    var xe = po();
                    E(U, xe);
                  };
                  X(fe, (U) => {
                    d(J).created_at ? U($e) : U(K, -1);
                  });
                }
                var ye = y(fe, 2);
                re(() => {
                  O(Se, d(J).label), O(H, d(J).network), O(Ae, d(J).currency), O(z, d(J).address);
                }), ie("click", ye, () => yi(d(J).id)), E(oe, he);
              }), E(w, N);
            };
            X(Gi, (w) => {
              d(c) && d(_).length === 0 ? w(Yi) : d(_).length === 0 ? w(Wi, 1) : w(Ji, -1);
            });
          }
          ie("click", Ui, () => x(C, !d(C))), E(We, Et);
        };
        X(ki, (We) => {
          d(f) ? We(Ei) : d(l) ? We(Si, 1) : We(Ai, -1);
        });
      }
      re(
        (We) => {
          O(Ye, `${We ?? ""}, `), O(lr, d(n)?.user_name || "Member");
        },
        [() => si()]
      ), E(h, m);
    };
    X(xi, (h) => {
      t.ctx.isAuthenticated ? h(wi, -1) : h(mi);
    });
  }
  E(e, Ln), ya();
}
_l(["click"]);
function Ao(e, t) {
  const r = yl(ko, { target: e, props: { ctx: t } });
  return {
    unmount() {
      try {
        ml(r);
      } catch {
      }
    }
  };
}
export {
  Ao as default
};
