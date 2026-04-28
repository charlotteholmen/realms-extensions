var Il = Object.defineProperty;
var ts = (e) => {
  throw TypeError(e);
};
var Al = (e, t, n) => t in e ? Il(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Be = (e, t, n) => Al(e, typeof t != "symbol" ? t + "" : t, n), dr = (e, t, n) => t.has(e) || ts("Cannot " + n);
var i = (e, t, n) => (dr(e, t, "read from private field"), n ? n.call(e) : t.get(e)), E = (e, t, n) => t.has(e) ? ts("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), N = (e, t, n, r) => (dr(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), B = (e, t, n) => (dr(e, t, "access private method"), n);
var ws = Array.isArray, Nl = Array.prototype.indexOf, sn = Array.prototype.includes, Zn = Array.from, Fl = Object.defineProperty, bn = Object.getOwnPropertyDescriptor, Ml = Object.prototype, Ol = Array.prototype, Pl = Object.getPrototypeOf, ns = Object.isExtensible;
const zl = () => {
};
function Dl(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function bs() {
  var e, t, n = new Promise((r, s) => {
    e = r, t = s;
  });
  return { promise: n, resolve: e, reject: t };
}
const ie = 2, ln = 4, Qn = 8, xs = 1 << 24, Xe = 16, Je = 32, Et = 64, gr = 128, Pe = 512, Z = 1024, le = 2048, Ze = 4096, de = 8192, ze = 16384, Vt = 32768, wr = 1 << 25, an = 65536, br = 1 << 17, Ll = 1 << 18, cn = 1 << 19, Ul = 1 << 20, ft = 1 << 25, Bt = 65536, Hn = 1 << 21, yn = 1 << 22, kt = 1 << 23, Dn = Symbol("$state"), st = new class extends Error {
  constructor() {
    super(...arguments);
    Be(this, "name", "StaleReactionError");
    Be(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
function Bl() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function jl(e, t, n) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function ql(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Vl() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Jl(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Hl() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Yl() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Kl() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Gl() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Wl() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
const Xl = 1, Zl = 2, Ql = 16, $l = 1, ei = 2, ne = Symbol(), ti = "http://www.w3.org/1999/xhtml";
function ni() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function ri() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function ms(e) {
  return e === this.v;
}
function si(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function ys(e) {
  return !si(e, this.v);
}
let Se = null;
function on(e) {
  Se = e;
}
function ks(e, t = !1, n) {
  Se = {
    p: Se,
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
function Es(e) {
  var t = (
    /** @type {ComponentContext} */
    Se
  ), n = t.e;
  if (n !== null) {
    t.e = null;
    for (var r of n)
      Hs(r);
  }
  return t.i = !0, Se = t.p, /** @type {T} */
  {};
}
function Ss() {
  return !0;
}
let Rt = [];
function Ts() {
  var e = Rt;
  Rt = [], Dl(e);
}
function Qt(e) {
  if (Rt.length === 0 && !xn) {
    var t = Rt;
    queueMicrotask(() => {
      t === Rt && Ts();
    });
  }
  Rt.push(e);
}
function li() {
  for (; Rt.length > 0; )
    Ts();
}
function Cs(e) {
  var t = O;
  if (t === null)
    return M.f |= kt, e;
  if ((t.f & Vt) === 0 && (t.f & ln) === 0)
    throw e;
  yt(e, t);
}
function yt(e, t) {
  for (; t !== null; ) {
    if ((t.f & gr) !== 0) {
      if ((t.f & Vt) === 0)
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
const ii = -7169;
function H(e, t) {
  e.f = e.f & ii | t;
}
function Ar(e) {
  (e.f & Pe) !== 0 || e.deps === null ? H(e, Z) : H(e, Ze);
}
function Rs(e) {
  if (e !== null)
    for (const t of e)
      (t.f & ie) === 0 || (t.f & Bt) === 0 || (t.f ^= Bt, Rs(
        /** @type {Derived} */
        t.deps
      ));
}
function Is(e, t, n) {
  (e.f & le) !== 0 ? t.add(e) : (e.f & Ze) !== 0 && n.add(e), Rs(e.deps), H(e, Z);
}
const Ct = /* @__PURE__ */ new Set();
let I = null, qe = null, xr = null, xn = !1, vr = !1, Zt = null, Ln = null;
var rs = 0;
let ai = 1;
var $t, en, Nt, lt, Ke, En, ye, Sn, xt, it, Ge, tn, nn, Ft, G, Un, As, Bn, mr, jn, oi;
const Gn = class Gn {
  constructor() {
    E(this, G);
    Be(this, "id", ai++);
    /**
     * The current values of any signals that are updated in this batch.
     * Tuple format: [value, is_derived] (note: is_derived is false for deriveds, too, if they were overridden via assignment)
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Value, [any, boolean]>}
     */
    Be(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any signals (sources and deriveds) that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Value, any>}
     */
    Be(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<(batch: Batch) => void>}
     */
    E(this, $t, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    E(this, en, /* @__PURE__ */ new Set());
    /**
     * Callbacks that should run only when a fork is committed.
     * @type {Set<(batch: Batch) => void>}
     */
    E(this, Nt, /* @__PURE__ */ new Set());
    /**
     * Async effects that are currently in flight
     * @type {Map<Effect, number>}
     */
    E(this, lt, /* @__PURE__ */ new Map());
    /**
     * Async effects that are currently in flight, _not_ inside a pending boundary
     * @type {Map<Effect, number>}
     */
    E(this, Ke, /* @__PURE__ */ new Map());
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    E(this, En, null);
    /**
     * The root effects that need to be flushed
     * @type {Effect[]}
     */
    E(this, ye, []);
    /**
     * Effects created while this batch was active.
     * @type {Effect[]}
     */
    E(this, Sn, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    E(this, xt, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    E(this, it, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    E(this, Ge, /* @__PURE__ */ new Map());
    /**
     * Inverse of #skipped_branches which we need to tell prior batches to unskip them when committing
     * @type {Set<Effect>}
     */
    E(this, tn, /* @__PURE__ */ new Set());
    Be(this, "is_fork", !1);
    E(this, nn, !1);
    /** @type {Set<Batch>} */
    E(this, Ft, /* @__PURE__ */ new Set());
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(t) {
    i(this, Ge).has(t) || i(this, Ge).set(t, { d: [], m: [] }), i(this, tn).delete(t);
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   * @param {(e: Effect) => void} callback
   */
  unskip_effect(t, n = (r) => this.schedule(r)) {
    var r = i(this, Ge).get(t);
    if (r) {
      i(this, Ge).delete(t);
      for (var s of r.d)
        H(s, le), n(s);
      for (s of r.m)
        H(s, Ze), n(s);
    }
    i(this, tn).add(t);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Value} source
   * @param {any} value
   * @param {boolean} [is_derived]
   */
  capture(t, n, r = !1) {
    t.v !== ne && !this.previous.has(t) && this.previous.set(t, t.v), (t.f & kt) === 0 && (this.current.set(t, [n, r]), qe?.set(t, n)), this.is_fork || (t.v = n);
  }
  activate() {
    I = this;
  }
  deactivate() {
    I = null, qe = null;
  }
  flush() {
    try {
      vr = !0, I = this, B(this, G, Bn).call(this);
    } finally {
      rs = 0, xr = null, Zt = null, Ln = null, vr = !1, I = null, qe = null, zt.clear();
    }
  }
  discard() {
    for (const t of i(this, en)) t(this);
    i(this, en).clear(), i(this, Nt).clear(), Ct.delete(this);
  }
  /**
   * @param {Effect} effect
   */
  register_created_effect(t) {
    i(this, Sn).push(t);
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  increment(t, n) {
    let r = i(this, lt).get(n) ?? 0;
    if (i(this, lt).set(n, r + 1), t) {
      let s = i(this, Ke).get(n) ?? 0;
      i(this, Ke).set(n, s + 1);
    }
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   * @param {boolean} skip - whether to skip updates (because this is triggered by a stale reaction)
   */
  decrement(t, n, r) {
    let s = i(this, lt).get(n) ?? 0;
    if (s === 1 ? i(this, lt).delete(n) : i(this, lt).set(n, s - 1), t) {
      let l = i(this, Ke).get(n) ?? 0;
      l === 1 ? i(this, Ke).delete(n) : i(this, Ke).set(n, l - 1);
    }
    i(this, nn) || r || (N(this, nn, !0), Qt(() => {
      N(this, nn, !1), this.flush();
    }));
  }
  /**
   * @param {Set<Effect>} dirty_effects
   * @param {Set<Effect>} maybe_dirty_effects
   */
  transfer_effects(t, n) {
    for (const r of t)
      i(this, xt).add(r);
    for (const r of n)
      i(this, it).add(r);
    t.clear(), n.clear();
  }
  /** @param {(batch: Batch) => void} fn */
  oncommit(t) {
    i(this, $t).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    i(this, en).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  on_fork_commit(t) {
    i(this, Nt).add(t);
  }
  run_fork_commit_callbacks() {
    for (const t of i(this, Nt)) t(this);
    i(this, Nt).clear();
  }
  settled() {
    return (i(this, En) ?? N(this, En, bs())).promise;
  }
  static ensure() {
    if (I === null) {
      const t = I = new Gn();
      vr || (Ct.add(I), xn || Qt(() => {
        I === t && t.flush();
      }));
    }
    return I;
  }
  apply() {
    {
      qe = null;
      return;
    }
  }
  /**
   *
   * @param {Effect} effect
   */
  schedule(t) {
    if (xr = t, t.b?.is_pending && (t.f & (ln | Qn | xs)) !== 0 && (t.f & Vt) === 0) {
      t.b.defer_effect(t);
      return;
    }
    for (var n = t; n.parent !== null; ) {
      n = n.parent;
      var r = n.f;
      if (Zt !== null && n === O && (M === null || (M.f & ie) === 0))
        return;
      if ((r & (Et | Je)) !== 0) {
        if ((r & Z) === 0)
          return;
        n.f ^= Z;
      }
    }
    i(this, ye).push(n);
  }
};
$t = new WeakMap(), en = new WeakMap(), Nt = new WeakMap(), lt = new WeakMap(), Ke = new WeakMap(), En = new WeakMap(), ye = new WeakMap(), Sn = new WeakMap(), xt = new WeakMap(), it = new WeakMap(), Ge = new WeakMap(), tn = new WeakMap(), nn = new WeakMap(), Ft = new WeakMap(), G = new WeakSet(), Un = function() {
  return this.is_fork || i(this, Ke).size > 0;
}, As = function() {
  for (const r of i(this, Ft))
    for (const s of i(r, Ke).keys()) {
      for (var t = !1, n = s; n.parent !== null; ) {
        if (i(this, Ge).has(n)) {
          t = !0;
          break;
        }
        n = n.parent;
      }
      if (!t)
        return !0;
    }
  return !1;
}, Bn = function() {
  var o;
  if (rs++ > 1e3 && (Ct.delete(this), ui()), !B(this, G, Un).call(this)) {
    for (const a of i(this, xt))
      i(this, it).delete(a), H(a, le), this.schedule(a);
    for (const a of i(this, it))
      H(a, Ze), this.schedule(a);
  }
  const t = i(this, ye);
  N(this, ye, []), this.apply();
  var n = Zt = [], r = [], s = Ln = [];
  for (const a of t)
    try {
      B(this, G, mr).call(this, a, n, r);
    } catch (u) {
      throw Ms(a), u;
    }
  if (I = null, s.length > 0) {
    var l = Gn.ensure();
    for (const a of s)
      l.schedule(a);
  }
  if (Zt = null, Ln = null, B(this, G, Un).call(this) || B(this, G, As).call(this)) {
    B(this, G, jn).call(this, r), B(this, G, jn).call(this, n);
    for (const [a, u] of i(this, Ge))
      Fs(a, u);
  } else {
    i(this, lt).size === 0 && Ct.delete(this), i(this, xt).clear(), i(this, it).clear();
    for (const a of i(this, $t)) a(this);
    i(this, $t).clear(), ss(r), ss(n), i(this, En)?.resolve();
  }
  var f = (
    /** @type {Batch | null} */
    /** @type {unknown} */
    I
  );
  if (i(this, ye).length > 0) {
    const a = f ?? (f = this);
    i(a, ye).push(...i(this, ye).filter((u) => !i(a, ye).includes(u)));
  }
  f !== null && (Ct.add(f), B(o = f, G, Bn).call(o));
}, /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
mr = function(t, n, r) {
  t.f ^= Z;
  for (var s = t.first; s !== null; ) {
    var l = s.f, f = (l & (Je | Et)) !== 0, o = f && (l & Z) !== 0, a = o || (l & de) !== 0 || i(this, Ge).has(s);
    if (!a && s.fn !== null) {
      f ? s.f ^= Z : (l & ln) !== 0 ? n.push(s) : Nn(s) && ((l & Xe) !== 0 && i(this, it).add(s), un(s));
      var u = s.first;
      if (u !== null) {
        s = u;
        continue;
      }
    }
    for (; s !== null; ) {
      var p = s.next;
      if (p !== null) {
        s = p;
        break;
      }
      s = s.parent;
    }
  }
}, /**
 * @param {Effect[]} effects
 */
jn = function(t) {
  for (var n = 0; n < t.length; n += 1)
    Is(t[n], i(this, xt), i(this, it));
}, oi = function() {
  var p, b, g;
  for (const _ of Ct) {
    var t = _.id < this.id, n = [];
    for (const [v, [y, R]] of this.current) {
      if (_.current.has(v)) {
        var r = (
          /** @type {[any, boolean]} */
          _.current.get(v)[0]
        );
        if (t && y !== r)
          _.current.set(v, [y, R]);
        else
          continue;
      }
      n.push(v);
    }
    var s = [..._.current.keys()].filter((v) => !this.current.has(v));
    if (s.length === 0)
      t && _.discard();
    else if (n.length > 0) {
      if (t)
        for (const v of i(this, tn))
          _.unskip_effect(v, (y) => {
            var R;
            (y.f & (Xe | yn)) !== 0 ? _.schedule(y) : B(R = _, G, jn).call(R, [y]);
          });
      _.activate();
      var l = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Map();
      for (var o of n)
        Ns(o, s, l, f);
      f = /* @__PURE__ */ new Map();
      var a = [..._.current.keys()].filter(
        (v) => this.current.has(v) ? (
          /** @type {[any, boolean]} */
          this.current.get(v)[0] !== v
        ) : !0
      );
      for (const v of i(this, Sn))
        (v.f & (ze | de | br)) === 0 && Nr(v, a, f) && ((v.f & (yn | Xe)) !== 0 ? (H(v, le), _.schedule(v)) : i(_, xt).add(v));
      if (i(_, ye).length > 0) {
        _.apply();
        for (var u of i(_, ye))
          B(p = _, G, mr).call(p, u, [], []);
        N(_, ye, []);
      }
      _.deactivate();
    }
  }
  for (const _ of Ct)
    i(_, Ft).has(this) && (i(_, Ft).delete(this), i(_, Ft).size === 0 && !B(b = _, G, Un).call(b) && (_.activate(), B(g = _, G, Bn).call(g)));
};
let jt = Gn;
function fi(e) {
  var t = xn;
  xn = !0;
  try {
    for (var n; ; ) {
      if (li(), I === null)
        return (
          /** @type {T} */
          n
        );
      I.flush();
    }
  } finally {
    xn = t;
  }
}
function ui() {
  try {
    Hl();
  } catch (e) {
    yt(e, xr);
  }
}
let rt = null;
function ss(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var r = e[n++];
      if ((r.f & (ze | de)) === 0 && Nn(r) && (rt = /* @__PURE__ */ new Set(), un(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && Gs(r), rt?.size > 0)) {
        zt.clear();
        for (const s of rt) {
          if ((s.f & (ze | de)) !== 0) continue;
          const l = [s];
          let f = s.parent;
          for (; f !== null; )
            rt.has(f) && (rt.delete(f), l.push(f)), f = f.parent;
          for (let o = l.length - 1; o >= 0; o--) {
            const a = l[o];
            (a.f & (ze | de)) === 0 && un(a);
          }
        }
        rt.clear();
      }
    }
    rt = null;
  }
}
function Ns(e, t, n, r) {
  if (!n.has(e) && (n.add(e), e.reactions !== null))
    for (const s of e.reactions) {
      const l = s.f;
      (l & ie) !== 0 ? Ns(
        /** @type {Derived} */
        s,
        t,
        n,
        r
      ) : (l & (yn | Xe)) !== 0 && (l & le) === 0 && Nr(s, t, r) && (H(s, le), Fr(
        /** @type {Effect} */
        s
      ));
    }
}
function Nr(e, t, n) {
  const r = n.get(e);
  if (r !== void 0) return r;
  if (e.deps !== null)
    for (const s of e.deps) {
      if (sn.call(t, s))
        return !0;
      if ((s.f & ie) !== 0 && Nr(
        /** @type {Derived} */
        s,
        t,
        n
      ))
        return n.set(
          /** @type {Derived} */
          s,
          !0
        ), !0;
    }
  return n.set(e, !1), !1;
}
function Fr(e) {
  I.schedule(e);
}
function Fs(e, t) {
  if (!((e.f & Je) !== 0 && (e.f & Z) !== 0)) {
    (e.f & le) !== 0 ? t.d.push(e) : (e.f & Ze) !== 0 && t.m.push(e), H(e, Z);
    for (var n = e.first; n !== null; )
      Fs(n, t), n = n.next;
  }
}
function Ms(e) {
  H(e, Z);
  for (var t = e.first; t !== null; )
    Ms(t), t = t.next;
}
function ci(e) {
  let t = 0, n = qt(0), r;
  return () => {
    zr() && (d(n), $n(() => (t === 0 && (r = er(() => e(() => mn(n)))), t += 1, () => {
      Qt(() => {
        t -= 1, t === 0 && (r?.(), r = void 0, mn(n));
      });
    })));
  };
}
var di = an | cn;
function vi(e, t, n, r) {
  new hi(e, t, n, r);
}
var Ae, Ir, Ne, Mt, ge, Fe, ce, ke, at, Ot, mt, rn, Tn, Cn, ot, Wn, J, pi, _i, gi, yr, qn, Vn, kr, Er;
class hi {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(t, n, r, s) {
    E(this, J);
    /** @type {Boundary | null} */
    Be(this, "parent");
    Be(this, "is_pending", !1);
    /**
     * API-level transformError transform function. Transforms errors before they reach the `failed` snippet.
     * Inherited from parent boundary, or defaults to identity.
     * @type {(error: unknown) => unknown}
     */
    Be(this, "transform_error");
    /** @type {TemplateNode} */
    E(this, Ae);
    /** @type {TemplateNode | null} */
    E(this, Ir, null);
    /** @type {BoundaryProps} */
    E(this, Ne);
    /** @type {((anchor: Node) => void)} */
    E(this, Mt);
    /** @type {Effect} */
    E(this, ge);
    /** @type {Effect | null} */
    E(this, Fe, null);
    /** @type {Effect | null} */
    E(this, ce, null);
    /** @type {Effect | null} */
    E(this, ke, null);
    /** @type {DocumentFragment | null} */
    E(this, at, null);
    E(this, Ot, 0);
    E(this, mt, 0);
    E(this, rn, !1);
    /** @type {Set<Effect>} */
    E(this, Tn, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    E(this, Cn, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    E(this, ot, null);
    E(this, Wn, ci(() => (N(this, ot, qt(i(this, Ot))), () => {
      N(this, ot, null);
    })));
    N(this, Ae, t), N(this, Ne, n), N(this, Mt, (l) => {
      var f = (
        /** @type {Effect} */
        O
      );
      f.b = this, f.f |= gr, r(l);
    }), this.parent = /** @type {Effect} */
    O.b, this.transform_error = s ?? this.parent?.transform_error ?? ((l) => l), N(this, ge, Dr(() => {
      B(this, J, yr).call(this);
    }, di));
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    Is(t, i(this, Tn), i(this, Cn));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!i(this, Ne).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  update_pending_count(t, n) {
    B(this, J, kr).call(this, t, n), N(this, Ot, i(this, Ot) + t), !(!i(this, ot) || i(this, rn)) && (N(this, rn, !0), Qt(() => {
      N(this, rn, !1), i(this, ot) && fn(i(this, ot), i(this, Ot));
    }));
  }
  get_effect_pending() {
    return i(this, Wn).call(this), d(
      /** @type {Source<number>} */
      i(this, ot)
    );
  }
  /** @param {unknown} error */
  error(t) {
    if (!i(this, Ne).onerror && !i(this, Ne).failed)
      throw t;
    I?.is_fork ? (i(this, Fe) && I.skip_effect(i(this, Fe)), i(this, ce) && I.skip_effect(i(this, ce)), i(this, ke) && I.skip_effect(i(this, ke)), I.on_fork_commit(() => {
      B(this, J, Er).call(this, t);
    })) : B(this, J, Er).call(this, t);
  }
}
Ae = new WeakMap(), Ir = new WeakMap(), Ne = new WeakMap(), Mt = new WeakMap(), ge = new WeakMap(), Fe = new WeakMap(), ce = new WeakMap(), ke = new WeakMap(), at = new WeakMap(), Ot = new WeakMap(), mt = new WeakMap(), rn = new WeakMap(), Tn = new WeakMap(), Cn = new WeakMap(), ot = new WeakMap(), Wn = new WeakMap(), J = new WeakSet(), pi = function() {
  try {
    N(this, Fe, Oe(() => i(this, Mt).call(this, i(this, Ae))));
  } catch (t) {
    this.error(t);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
_i = function(t) {
  const n = i(this, Ne).failed;
  n && N(this, ke, Oe(() => {
    n(
      i(this, Ae),
      () => t,
      () => () => {
      }
    );
  }));
}, gi = function() {
  const t = i(this, Ne).pending;
  t && (this.is_pending = !0, N(this, ce, Oe(() => t(i(this, Ae)))), Qt(() => {
    var n = N(this, at, document.createDocumentFragment()), r = Dt();
    n.append(r), N(this, Fe, B(this, J, Vn).call(this, () => Oe(() => i(this, Mt).call(this, r)))), i(this, mt) === 0 && (i(this, Ae).before(n), N(this, at, null), Lt(
      /** @type {Effect} */
      i(this, ce),
      () => {
        N(this, ce, null);
      }
    ), B(this, J, qn).call(
      this,
      /** @type {Batch} */
      I
    ));
  }));
}, yr = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), N(this, mt, 0), N(this, Ot, 0), N(this, Fe, Oe(() => {
      i(this, Mt).call(this, i(this, Ae));
    })), i(this, mt) > 0) {
      var t = N(this, at, document.createDocumentFragment());
      Br(i(this, Fe), t);
      const n = (
        /** @type {(anchor: Node) => void} */
        i(this, Ne).pending
      );
      N(this, ce, Oe(() => n(i(this, Ae))));
    } else
      B(this, J, qn).call(
        this,
        /** @type {Batch} */
        I
      );
  } catch (n) {
    this.error(n);
  }
}, /**
 * @param {Batch} batch
 */
qn = function(t) {
  this.is_pending = !1, t.transfer_effects(i(this, Tn), i(this, Cn));
}, /**
 * @template T
 * @param {() => T} fn
 */
Vn = function(t) {
  var n = O, r = M, s = Se;
  Qe(i(this, ge)), Le(i(this, ge)), on(i(this, ge).ctx);
  try {
    return jt.ensure(), t();
  } catch (l) {
    return Cs(l), null;
  } finally {
    Qe(n), Le(r), on(s);
  }
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 * @param {Batch} batch
 */
kr = function(t, n) {
  var r;
  if (!this.has_pending_snippet()) {
    this.parent && B(r = this.parent, J, kr).call(r, t, n);
    return;
  }
  N(this, mt, i(this, mt) + t), i(this, mt) === 0 && (B(this, J, qn).call(this, n), i(this, ce) && Lt(i(this, ce), () => {
    N(this, ce, null);
  }), i(this, at) && (i(this, Ae).before(i(this, at)), N(this, at, null)));
}, /**
 * @param {unknown} error
 */
Er = function(t) {
  i(this, Fe) && (be(i(this, Fe)), N(this, Fe, null)), i(this, ce) && (be(i(this, ce)), N(this, ce, null)), i(this, ke) && (be(i(this, ke)), N(this, ke, null));
  var n = i(this, Ne).onerror;
  let r = i(this, Ne).failed;
  var s = !1, l = !1;
  const f = () => {
    if (s) {
      ri();
      return;
    }
    s = !0, l && Wl(), i(this, ke) !== null && Lt(i(this, ke), () => {
      N(this, ke, null);
    }), B(this, J, Vn).call(this, () => {
      B(this, J, yr).call(this);
    });
  }, o = (a) => {
    try {
      l = !0, n?.(a, f), l = !1;
    } catch (u) {
      yt(u, i(this, ge) && i(this, ge).parent);
    }
    r && N(this, ke, B(this, J, Vn).call(this, () => {
      try {
        return Oe(() => {
          var u = (
            /** @type {Effect} */
            O
          );
          u.b = this, u.f |= gr, r(
            i(this, Ae),
            () => a,
            () => f
          );
        });
      } catch (u) {
        return yt(
          u,
          /** @type {Effect} */
          i(this, ge).parent
        ), null;
      }
    }));
  };
  Qt(() => {
    var a;
    try {
      a = this.transform_error(t);
    } catch (u) {
      yt(u, i(this, ge) && i(this, ge).parent);
      return;
    }
    a !== null && typeof a == "object" && typeof /** @type {any} */
    a.then == "function" ? a.then(
      o,
      /** @param {unknown} e */
      (u) => yt(u, i(this, ge) && i(this, ge).parent)
    ) : o(a);
  });
};
function wi(e, t, n, r) {
  const s = Mr;
  var l = e.filter((g) => !g.settled);
  if (n.length === 0 && l.length === 0) {
    r(t.map(s));
    return;
  }
  var f = (
    /** @type {Effect} */
    O
  ), o = bi(), a = l.length === 1 ? l[0].promise : l.length > 1 ? Promise.all(l.map((g) => g.promise)) : null;
  function u(g) {
    o();
    try {
      r(g);
    } catch (_) {
      (f.f & ze) === 0 && yt(_, f);
    }
    Yn();
  }
  if (n.length === 0) {
    a.then(() => u(t.map(s)));
    return;
  }
  var p = Os();
  function b() {
    Promise.all(n.map((g) => /* @__PURE__ */ xi(g))).then((g) => u([...t.map(s), ...g])).catch((g) => yt(g, f)).finally(() => p());
  }
  a ? a.then(() => {
    o(), b(), Yn();
  }) : b();
}
function bi() {
  var e = (
    /** @type {Effect} */
    O
  ), t = M, n = Se, r = (
    /** @type {Batch} */
    I
  );
  return function(l = !0) {
    Qe(e), Le(t), on(n), l && (e.f & ze) === 0 && (r?.activate(), r?.apply());
  };
}
function Yn(e = !0) {
  Qe(null), Le(null), on(null), e && I?.deactivate();
}
function Os() {
  var e = (
    /** @type {Effect} */
    O
  ), t = (
    /** @type {Boundary} */
    e.b
  ), n = (
    /** @type {Batch} */
    I
  ), r = t.is_rendered();
  return t.update_pending_count(1, n), n.increment(r, e), (s = !1) => {
    t.update_pending_count(-1, n), n.decrement(r, e, s);
  };
}
// @__NO_SIDE_EFFECTS__
function Mr(e) {
  var t = ie | le;
  return O !== null && (O.f |= cn), {
    ctx: Se,
    deps: null,
    effects: null,
    equals: ms,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      ne
    ),
    wv: 0,
    parent: O,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function xi(e, t, n) {
  let r = (
    /** @type {Effect | null} */
    O
  );
  r === null && Bl();
  var s = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), l = qt(
    /** @type {V} */
    ne
  ), f = !M, o = /* @__PURE__ */ new Map();
  return Oi(() => {
    var a = (
      /** @type {Effect} */
      O
    ), u = bs();
    s = u.promise;
    try {
      Promise.resolve(e()).then(u.resolve, u.reject).finally(Yn);
    } catch (_) {
      u.reject(_), Yn();
    }
    var p = (
      /** @type {Batch} */
      I
    );
    if (f) {
      if ((a.f & Vt) !== 0)
        var b = Os();
      if (
        /** @type {Boundary} */
        r.b.is_rendered()
      )
        o.get(p)?.reject(st), o.delete(p);
      else {
        for (const _ of o.values())
          _.reject(st);
        o.clear();
      }
      o.set(p, u);
    }
    const g = (_, v = void 0) => {
      if (b) {
        var y = v === st;
        b(y);
      }
      if (!(v === st || (a.f & ze) !== 0)) {
        if (p.activate(), v)
          l.f |= kt, fn(l, v);
        else {
          (l.f & kt) !== 0 && (l.f ^= kt), fn(l, _);
          for (const [R, L] of o) {
            if (o.delete(R), R === p) break;
            L.reject(st);
          }
        }
        p.deactivate();
      }
    };
    u.promise.then(g, (_) => g(null, _ || "unknown"));
  }), Ni(() => {
    for (const a of o.values())
      a.reject(st);
  }), new Promise((a) => {
    function u(p) {
      function b() {
        p === s ? a(l) : u(s);
      }
      p.then(b, b);
    }
    u(s);
  });
}
// @__NO_SIDE_EFFECTS__
function nt(e) {
  const t = /* @__PURE__ */ Mr(e);
  return Zs(t), t;
}
// @__NO_SIDE_EFFECTS__
function mi(e) {
  const t = /* @__PURE__ */ Mr(e);
  return t.equals = ys, t;
}
function yi(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      be(
        /** @type {Effect} */
        t[n]
      );
  }
}
function Or(e) {
  var t, n = O, r = e.parent;
  if (!St && r !== null && (r.f & (ze | de)) !== 0)
    return ni(), e.v;
  Qe(r);
  try {
    e.f &= ~Bt, yi(e), t = tl(e);
  } finally {
    Qe(n);
  }
  return t;
}
function Ps(e) {
  var t = Or(e);
  if (!e.equals(t) && (e.wv = $s(), (!I?.is_fork || e.deps === null) && (I !== null ? I.capture(e, t, !0) : e.v = t, e.deps === null))) {
    H(e, Z);
    return;
  }
  St || (qe !== null ? (zr() || I?.is_fork) && qe.set(e, t) : Ar(e));
}
function ki(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      (t.teardown || t.ac) && (t.teardown?.(), t.ac?.abort(st), t.teardown = zl, t.ac = null, kn(t, 0), Lr(t));
}
function zs(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      t.teardown && un(t);
}
let Sr = /* @__PURE__ */ new Set();
const zt = /* @__PURE__ */ new Map();
let Ds = !1;
function qt(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: ms,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function U(e, t) {
  const n = qt(e);
  return Zs(n), n;
}
// @__NO_SIDE_EFFECTS__
function Ei(e, t = !1, n = !0) {
  const r = qt(e);
  return t || (r.equals = ys), r;
}
function k(e, t, n = !1) {
  M !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Ve || (M.f & br) !== 0) && Ss() && (M.f & (ie | Xe | yn | br)) !== 0 && (De === null || !sn.call(De, e)) && Gl();
  let r = n ? Me(t) : t;
  return fn(e, r, Ln);
}
function fn(e, t, n = null) {
  if (!e.equals(t)) {
    zt.set(e, St ? t : e.v);
    var r = jt.ensure();
    if (r.capture(e, t), (e.f & ie) !== 0) {
      const s = (
        /** @type {Derived} */
        e
      );
      (e.f & le) !== 0 && Or(s), qe === null && Ar(s);
    }
    e.wv = $s(), Ls(e, le, n), O !== null && (O.f & Z) !== 0 && (O.f & (Je | Et)) === 0 && (Ie === null ? Di([e]) : Ie.push(e)), !r.is_fork && Sr.size > 0 && !Ds && Si();
  }
  return t;
}
function Si() {
  Ds = !1;
  for (const e of Sr)
    (e.f & Z) !== 0 && H(e, Ze), Nn(e) && un(e);
  Sr.clear();
}
function mn(e) {
  k(e, e.v + 1);
}
function Ls(e, t, n) {
  var r = e.reactions;
  if (r !== null)
    for (var s = r.length, l = 0; l < s; l++) {
      var f = r[l], o = f.f, a = (o & le) === 0;
      if (a && H(f, t), (o & ie) !== 0) {
        var u = (
          /** @type {Derived} */
          f
        );
        qe?.delete(u), (o & Bt) === 0 && (o & Pe && (O === null || (O.f & Hn) === 0) && (f.f |= Bt), Ls(u, Ze, n));
      } else if (a) {
        var p = (
          /** @type {Effect} */
          f
        );
        (o & Xe) !== 0 && rt !== null && rt.add(p), n !== null ? n.push(p) : Fr(p);
      }
    }
}
function Me(e) {
  if (typeof e != "object" || e === null || Dn in e)
    return e;
  const t = Pl(e);
  if (t !== Ml && t !== Ol)
    return e;
  var n = /* @__PURE__ */ new Map(), r = ws(e), s = /* @__PURE__ */ U(0), l = Ut, f = (o) => {
    if (Ut === l)
      return o();
    var a = M, u = Ut;
    Le(null), os(l);
    var p = o();
    return Le(a), os(u), p;
  };
  return r && n.set("length", /* @__PURE__ */ U(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(o, a, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && Yl();
        var p = n.get(a);
        return p === void 0 ? f(() => {
          var b = /* @__PURE__ */ U(u.value);
          return n.set(a, b), b;
        }) : k(p, u.value, !0), !0;
      },
      deleteProperty(o, a) {
        var u = n.get(a);
        if (u === void 0) {
          if (a in o) {
            const p = f(() => /* @__PURE__ */ U(ne));
            n.set(a, p), mn(s);
          }
        } else
          k(u, ne), mn(s);
        return !0;
      },
      get(o, a, u) {
        if (a === Dn)
          return e;
        var p = n.get(a), b = a in o;
        if (p === void 0 && (!b || bn(o, a)?.writable) && (p = f(() => {
          var _ = Me(b ? o[a] : ne), v = /* @__PURE__ */ U(_);
          return v;
        }), n.set(a, p)), p !== void 0) {
          var g = d(p);
          return g === ne ? void 0 : g;
        }
        return Reflect.get(o, a, u);
      },
      getOwnPropertyDescriptor(o, a) {
        var u = Reflect.getOwnPropertyDescriptor(o, a);
        if (u && "value" in u) {
          var p = n.get(a);
          p && (u.value = d(p));
        } else if (u === void 0) {
          var b = n.get(a), g = b?.v;
          if (b !== void 0 && g !== ne)
            return {
              enumerable: !0,
              configurable: !0,
              value: g,
              writable: !0
            };
        }
        return u;
      },
      has(o, a) {
        if (a === Dn)
          return !0;
        var u = n.get(a), p = u !== void 0 && u.v !== ne || Reflect.has(o, a);
        if (u !== void 0 || O !== null && (!p || bn(o, a)?.writable)) {
          u === void 0 && (u = f(() => {
            var g = p ? Me(o[a]) : ne, _ = /* @__PURE__ */ U(g);
            return _;
          }), n.set(a, u));
          var b = d(u);
          if (b === ne)
            return !1;
        }
        return p;
      },
      set(o, a, u, p) {
        var b = n.get(a), g = a in o;
        if (r && a === "length")
          for (var _ = u; _ < /** @type {Source<number>} */
          b.v; _ += 1) {
            var v = n.get(_ + "");
            v !== void 0 ? k(v, ne) : _ in o && (v = f(() => /* @__PURE__ */ U(ne)), n.set(_ + "", v));
          }
        if (b === void 0)
          (!g || bn(o, a)?.writable) && (b = f(() => /* @__PURE__ */ U(void 0)), k(b, Me(u)), n.set(a, b));
        else {
          g = b.v !== ne;
          var y = f(() => Me(u));
          k(b, y);
        }
        var R = Reflect.getOwnPropertyDescriptor(o, a);
        if (R?.set && R.set.call(p, u), !g) {
          if (r && typeof a == "string") {
            var L = (
              /** @type {Source<number>} */
              n.get("length")
            ), F = Number(a);
            Number.isInteger(F) && F >= L.v && k(L, F + 1);
          }
          mn(s);
        }
        return !0;
      },
      ownKeys(o) {
        d(s);
        var a = Reflect.ownKeys(o).filter((b) => {
          var g = n.get(b);
          return g === void 0 || g.v !== ne;
        });
        for (var [u, p] of n)
          p.v !== ne && !(u in o) && a.push(u);
        return a;
      },
      setPrototypeOf() {
        Kl();
      }
    }
  );
}
var ls, Us, Bs, js;
function Ti() {
  if (ls === void 0) {
    ls = window, Us = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    Bs = bn(t, "firstChild").get, js = bn(t, "nextSibling").get, ns(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), ns(n) && (n.__t = void 0);
  }
}
function Dt(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function Kn(e) {
  return (
    /** @type {TemplateNode | null} */
    Bs.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function An(e) {
  return (
    /** @type {TemplateNode | null} */
    js.call(e)
  );
}
function x(e, t) {
  return /* @__PURE__ */ Kn(e);
}
function hr(e, t = !1) {
  {
    var n = /* @__PURE__ */ Kn(e);
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ An(n) : n;
  }
}
function S(e, t = 1, n = !1) {
  let r = e;
  for (; t--; )
    r = /** @type {TemplateNode} */
    /* @__PURE__ */ An(r);
  return r;
}
function Ci(e) {
  e.textContent = "";
}
function qs() {
  return !1;
}
function Vs(e, t, n) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElementNS(ti, e, void 0)
  );
}
let is = !1;
function Ri() {
  is || (is = !0, document.addEventListener(
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
function Pr(e) {
  var t = M, n = O;
  Le(null), Qe(null);
  try {
    return e();
  } finally {
    Le(t), Qe(n);
  }
}
function Js(e, t, n, r = n) {
  e.addEventListener(t, () => Pr(n));
  const s = e.__on_r;
  s ? e.__on_r = () => {
    s(), r(!0);
  } : e.__on_r = () => r(!0), Ri();
}
function Ii(e) {
  O === null && (M === null && Jl(), Vl()), St && ql();
}
function Ai(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function ut(e, t) {
  var n = O;
  n !== null && (n.f & de) !== 0 && (e |= de);
  var r = {
    ctx: Se,
    deps: null,
    nodes: null,
    f: e | le | Pe,
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
  I?.register_created_effect(r);
  var s = r;
  if ((e & ln) !== 0)
    Zt !== null ? Zt.push(r) : jt.ensure().schedule(r);
  else if (t !== null) {
    try {
      un(r);
    } catch (f) {
      throw be(r), f;
    }
    s.deps === null && s.teardown === null && s.nodes === null && s.first === s.last && // either `null`, or a singular child
    (s.f & cn) === 0 && (s = s.first, (e & Xe) !== 0 && (e & an) !== 0 && s !== null && (s.f |= an));
  }
  if (s !== null && (s.parent = n, n !== null && Ai(s, n), M !== null && (M.f & ie) !== 0 && (e & Et) === 0)) {
    var l = (
      /** @type {Derived} */
      M
    );
    (l.effects ?? (l.effects = [])).push(s);
  }
  return r;
}
function zr() {
  return M !== null && !Ve;
}
function Ni(e) {
  const t = ut(Qn, null);
  return H(t, Z), t.teardown = e, t;
}
function Fi(e) {
  Ii();
  var t = (
    /** @type {Effect} */
    O.f
  ), n = !M && (t & Je) !== 0 && (t & Vt) === 0;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      Se
    );
    (r.e ?? (r.e = [])).push(e);
  } else
    return Hs(e);
}
function Hs(e) {
  return ut(ln | Ul, e);
}
function Mi(e) {
  jt.ensure();
  const t = ut(Et | cn, e);
  return (n = {}) => new Promise((r) => {
    n.outro ? Lt(t, () => {
      be(t), r(void 0);
    }) : (be(t), r(void 0));
  });
}
function Ys(e) {
  return ut(ln, e);
}
function Oi(e) {
  return ut(yn | cn, e);
}
function $n(e, t = 0) {
  return ut(Qn | t, e);
}
function se(e, t = [], n = [], r = []) {
  wi(r, t, n, (s) => {
    ut(Qn, () => e(...s.map(d)));
  });
}
function Dr(e, t = 0) {
  var n = ut(Xe | t, e);
  return n;
}
function Oe(e) {
  return ut(Je | cn, e);
}
function Ks(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = St, r = M;
    as(!0), Le(null);
    try {
      t.call(null);
    } finally {
      as(n), Le(r);
    }
  }
}
function Lr(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const s = n.ac;
    s !== null && Pr(() => {
      s.abort(st);
    });
    var r = n.next;
    (n.f & Et) !== 0 ? n.parent = null : be(n, t), n = r;
  }
}
function Pi(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & Je) === 0 && be(t), t = n;
  }
}
function be(e, t = !0) {
  var n = !1;
  (t || (e.f & Ll) !== 0) && e.nodes !== null && e.nodes.end !== null && (zi(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), n = !0), H(e, wr), Lr(e, t && !n), kn(e, 0);
  var r = e.nodes && e.nodes.t;
  if (r !== null)
    for (const l of r)
      l.stop();
  Ks(e), e.f ^= wr, e.f |= ze;
  var s = e.parent;
  s !== null && s.first !== null && Gs(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function zi(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : /* @__PURE__ */ An(e);
    e.remove(), e = n;
  }
}
function Gs(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function Lt(e, t, n = !0) {
  var r = [];
  Ws(e, r, !0);
  var s = () => {
    n && be(e), t && t();
  }, l = r.length;
  if (l > 0) {
    var f = () => --l || s();
    for (var o of r)
      o.out(f);
  } else
    s();
}
function Ws(e, t, n) {
  if ((e.f & de) === 0) {
    e.f ^= de;
    var r = e.nodes && e.nodes.t;
    if (r !== null)
      for (const o of r)
        (o.is_global || n) && t.push(o);
    for (var s = e.first; s !== null; ) {
      var l = s.next;
      if ((s.f & Et) === 0) {
        var f = (s.f & an) !== 0 || // If this is a branch effect without a block effect parent,
        // it means the parent block effect was pruned. In that case,
        // transparency information was transferred to the branch effect.
        (s.f & Je) !== 0 && (e.f & Xe) !== 0;
        Ws(s, t, f ? n : !1);
      }
      s = l;
    }
  }
}
function Ur(e) {
  Xs(e, !0);
}
function Xs(e, t) {
  if ((e.f & de) !== 0) {
    e.f ^= de, (e.f & Z) === 0 && (H(e, le), jt.ensure().schedule(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, s = (n.f & an) !== 0 || (n.f & Je) !== 0;
      Xs(n, s ? t : !1), n = r;
    }
    var l = e.nodes && e.nodes.t;
    if (l !== null)
      for (const f of l)
        (f.is_global || t) && f.in();
  }
}
function Br(e, t) {
  if (e.nodes)
    for (var n = e.nodes.start, r = e.nodes.end; n !== null; ) {
      var s = n === r ? null : /* @__PURE__ */ An(n);
      t.append(n), n = s;
    }
}
let Jn = !1, St = !1;
function as(e) {
  St = e;
}
let M = null, Ve = !1;
function Le(e) {
  M = e;
}
let O = null;
function Qe(e) {
  O = e;
}
let De = null;
function Zs(e) {
  M !== null && (De === null ? De = [e] : De.push(e));
}
let we = null, me = 0, Ie = null;
function Di(e) {
  Ie = e;
}
let Qs = 1, It = 0, Ut = It;
function os(e) {
  Ut = e;
}
function $s() {
  return ++Qs;
}
function Nn(e) {
  var t = e.f;
  if ((t & le) !== 0)
    return !0;
  if (t & ie && (e.f &= ~Bt), (t & Ze) !== 0) {
    for (var n = (
      /** @type {Value[]} */
      e.deps
    ), r = n.length, s = 0; s < r; s++) {
      var l = n[s];
      if (Nn(
        /** @type {Derived} */
        l
      ) && Ps(
        /** @type {Derived} */
        l
      ), l.wv > e.wv)
        return !0;
    }
    (t & Pe) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    qe === null && H(e, Z);
  }
  return !1;
}
function el(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null && !(De !== null && sn.call(De, e)))
    for (var s = 0; s < r.length; s++) {
      var l = r[s];
      (l.f & ie) !== 0 ? el(
        /** @type {Derived} */
        l,
        t,
        !1
      ) : t === l && (n ? H(l, le) : (l.f & Z) !== 0 && H(l, Ze), Fr(
        /** @type {Effect} */
        l
      ));
    }
}
function tl(e) {
  var y;
  var t = we, n = me, r = Ie, s = M, l = De, f = Se, o = Ve, a = Ut, u = e.f;
  we = /** @type {null | Value[]} */
  null, me = 0, Ie = null, M = (u & (Je | Et)) === 0 ? e : null, De = null, on(e.ctx), Ve = !1, Ut = ++It, e.ac !== null && (Pr(() => {
    e.ac.abort(st);
  }), e.ac = null);
  try {
    e.f |= Hn;
    var p = (
      /** @type {Function} */
      e.fn
    ), b = p();
    e.f |= Vt;
    var g = e.deps, _ = I?.is_fork;
    if (we !== null) {
      var v;
      if (_ || kn(e, me), g !== null && me > 0)
        for (g.length = me + we.length, v = 0; v < we.length; v++)
          g[me + v] = we[v];
      else
        e.deps = g = we;
      if (zr() && (e.f & Pe) !== 0)
        for (v = me; v < g.length; v++)
          ((y = g[v]).reactions ?? (y.reactions = [])).push(e);
    } else !_ && g !== null && me < g.length && (kn(e, me), g.length = me);
    if (Ss() && Ie !== null && !Ve && g !== null && (e.f & (ie | Ze | le)) === 0)
      for (v = 0; v < /** @type {Source[]} */
      Ie.length; v++)
        el(
          Ie[v],
          /** @type {Effect} */
          e
        );
    if (s !== null && s !== e) {
      if (It++, s.deps !== null)
        for (let R = 0; R < n; R += 1)
          s.deps[R].rv = It;
      if (t !== null)
        for (const R of t)
          R.rv = It;
      Ie !== null && (r === null ? r = Ie : r.push(.../** @type {Source[]} */
      Ie));
    }
    return (e.f & kt) !== 0 && (e.f ^= kt), b;
  } catch (R) {
    return Cs(R);
  } finally {
    e.f ^= Hn, we = t, me = n, Ie = r, M = s, De = l, on(f), Ve = o, Ut = a;
  }
}
function Li(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = Nl.call(n, e);
    if (r !== -1) {
      var s = n.length - 1;
      s === 0 ? n = t.reactions = null : (n[r] = n[s], n.pop());
    }
  }
  if (n === null && (t.f & ie) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (we === null || !sn.call(we, t))) {
    var l = (
      /** @type {Derived} */
      t
    );
    (l.f & Pe) !== 0 && (l.f ^= Pe, l.f &= ~Bt), l.v !== ne && Ar(l), ki(l), kn(l, 0);
  }
}
function kn(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      Li(e, n[r]);
}
function un(e) {
  var t = e.f;
  if ((t & ze) === 0) {
    H(e, Z);
    var n = O, r = Jn;
    O = e, Jn = !0;
    try {
      (t & (Xe | xs)) !== 0 ? Pi(e) : Lr(e), Ks(e);
      var s = tl(e);
      e.teardown = typeof s == "function" ? s : null, e.wv = Qs;
      var l;
    } finally {
      Jn = r, O = n;
    }
  }
}
async function Ui() {
  await Promise.resolve(), fi();
}
function d(e) {
  var t = e.f, n = (t & ie) !== 0;
  if (M !== null && !Ve) {
    var r = O !== null && (O.f & ze) !== 0;
    if (!r && (De === null || !sn.call(De, e))) {
      var s = M.deps;
      if ((M.f & Hn) !== 0)
        e.rv < It && (e.rv = It, we === null && s !== null && s[me] === e ? me++ : we === null ? we = [e] : we.push(e));
      else {
        (M.deps ?? (M.deps = [])).push(e);
        var l = e.reactions;
        l === null ? e.reactions = [M] : sn.call(l, M) || l.push(M);
      }
    }
  }
  if (St && zt.has(e))
    return zt.get(e);
  if (n) {
    var f = (
      /** @type {Derived} */
      e
    );
    if (St) {
      var o = f.v;
      return ((f.f & Z) === 0 && f.reactions !== null || rl(f)) && (o = Or(f)), zt.set(f, o), o;
    }
    var a = (f.f & Pe) === 0 && !Ve && M !== null && (Jn || (M.f & Pe) !== 0), u = (f.f & Vt) === 0;
    Nn(f) && (a && (f.f |= Pe), Ps(f)), a && !u && (zs(f), nl(f));
  }
  if (qe?.has(e))
    return qe.get(e);
  if ((e.f & kt) !== 0)
    throw e.v;
  return e.v;
}
function nl(e) {
  if (e.f |= Pe, e.deps !== null)
    for (const t of e.deps)
      (t.reactions ?? (t.reactions = [])).push(e), (t.f & ie) !== 0 && (t.f & Pe) === 0 && (zs(
        /** @type {Derived} */
        t
      ), nl(
        /** @type {Derived} */
        t
      ));
}
function rl(e) {
  if (e.v === ne) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (zt.has(t) || (t.f & ie) !== 0 && rl(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function er(e) {
  var t = Ve;
  try {
    return Ve = !0, e();
  } finally {
    Ve = t;
  }
}
const Bi = ["touchstart", "touchmove"];
function ji(e) {
  return Bi.includes(e);
}
const At = Symbol("events"), sl = /* @__PURE__ */ new Set(), Tr = /* @__PURE__ */ new Set();
function _e(e, t, n) {
  (t[At] ?? (t[At] = {}))[e] = n;
}
function qi(e) {
  for (var t = 0; t < e.length; t++)
    sl.add(e[t]);
  for (var n of Tr)
    n(e);
}
let fs = null;
function us(e) {
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), r = e.type, s = e.composedPath?.() || [], l = (
    /** @type {null | Element} */
    s[0] || e.target
  );
  fs = e;
  var f = 0, o = fs === e && e[At];
  if (o) {
    var a = s.indexOf(o);
    if (a !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e[At] = t;
      return;
    }
    var u = s.indexOf(t);
    if (u === -1)
      return;
    a <= u && (f = a);
  }
  if (l = /** @type {Element} */
  s[f] || e.target, l !== t) {
    Fl(e, "currentTarget", {
      configurable: !0,
      get() {
        return l || n;
      }
    });
    var p = M, b = O;
    Le(null), Qe(null);
    try {
      for (var g, _ = []; l !== null; ) {
        var v = l.assignedSlot || l.parentNode || /** @type {any} */
        l.host || null;
        try {
          var y = l[At]?.[r];
          y != null && (!/** @type {any} */
          l.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === l) && y.call(l, e);
        } catch (R) {
          g ? _.push(R) : g = R;
        }
        if (e.cancelBubble || v === t || v === null)
          break;
        l = v;
      }
      if (g) {
        for (let R of _)
          queueMicrotask(() => {
            throw R;
          });
        throw g;
      }
    } finally {
      e[At] = t, delete e.currentTarget, Le(p), Qe(b);
    }
  }
}
const Vi = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (e) => e
  })
);
function Ji(e) {
  return (
    /** @type {string} */
    Vi?.createHTML(e) ?? e
  );
}
function Hi(e) {
  var t = Vs("template");
  return t.innerHTML = Ji(e.replaceAll("<!>", "<!---->")), t.content;
}
function cs(e, t) {
  var n = (
    /** @type {Effect} */
    O
  );
  n.nodes === null && (n.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function C(e, t) {
  var n = (t & $l) !== 0, r = (t & ei) !== 0, s, l = !e.startsWith("<!>");
  return () => {
    s === void 0 && (s = Hi(l ? e : "<!>" + e), n || (s = /** @type {TemplateNode} */
    /* @__PURE__ */ Kn(s)));
    var f = (
      /** @type {TemplateNode} */
      r || Us ? document.importNode(s, !0) : s.cloneNode(!0)
    );
    if (n) {
      var o = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Kn(f)
      ), a = (
        /** @type {TemplateNode} */
        f.lastChild
      );
      cs(o, a);
    } else
      cs(f, f);
    return f;
  };
}
function T(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function j(e, t) {
  var n = t == null ? "" : typeof t == "object" ? `${t}` : t;
  n !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = n, e.nodeValue = `${n}`);
}
function Yi(e, t) {
  return Ki(e, t);
}
const zn = /* @__PURE__ */ new Map();
function Ki(e, { target: t, anchor: n, props: r = {}, events: s, context: l, intro: f = !0, transformError: o }) {
  Ti();
  var a = void 0, u = Mi(() => {
    var p = n ?? t.appendChild(Dt());
    vi(
      /** @type {TemplateNode} */
      p,
      {
        pending: () => {
        }
      },
      (_) => {
        ks({});
        var v = (
          /** @type {ComponentContext} */
          Se
        );
        l && (v.c = l), s && (r.$$events = s), a = e(_, r) || {}, Es();
      },
      o
    );
    var b = /* @__PURE__ */ new Set(), g = (_) => {
      for (var v = 0; v < _.length; v++) {
        var y = _[v];
        if (!b.has(y)) {
          b.add(y);
          var R = ji(y);
          for (const Q of [t, document]) {
            var L = zn.get(Q);
            L === void 0 && (L = /* @__PURE__ */ new Map(), zn.set(Q, L));
            var F = L.get(y);
            F === void 0 ? (Q.addEventListener(y, us, { passive: R }), L.set(y, 1)) : L.set(y, F + 1);
          }
        }
      }
    };
    return g(Zn(sl)), Tr.add(g), () => {
      for (var _ of b)
        for (const R of [t, document]) {
          var v = (
            /** @type {Map<string, number>} */
            zn.get(R)
          ), y = (
            /** @type {number} */
            v.get(_)
          );
          --y == 0 ? (R.removeEventListener(_, us), v.delete(_), v.size === 0 && zn.delete(R)) : v.set(_, y);
        }
      Tr.delete(g), p !== n && p.parentNode?.removeChild(p);
    };
  });
  return Cr.set(a, u), a;
}
let Cr = /* @__PURE__ */ new WeakMap();
function Gi(e, t) {
  const n = Cr.get(e);
  return n ? (Cr.delete(e), n(t)) : Promise.resolve();
}
var je, We, Ee, Pt, Rn, In, Xn;
class Wi {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, n = !0) {
    /** @type {TemplateNode} */
    Be(this, "anchor");
    /** @type {Map<Batch, Key>} */
    E(this, je, /* @__PURE__ */ new Map());
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
    E(this, We, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    E(this, Ee, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    E(this, Pt, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    E(this, Rn, !0);
    /**
     * @param {Batch} batch
     */
    E(this, In, (t) => {
      if (i(this, je).has(t)) {
        var n = (
          /** @type {Key} */
          i(this, je).get(t)
        ), r = i(this, We).get(n);
        if (r)
          Ur(r), i(this, Pt).delete(n);
        else {
          var s = i(this, Ee).get(n);
          s && (i(this, We).set(n, s.effect), i(this, Ee).delete(n), s.fragment.lastChild.remove(), this.anchor.before(s.fragment), r = s.effect);
        }
        for (const [l, f] of i(this, je)) {
          if (i(this, je).delete(l), l === t)
            break;
          const o = i(this, Ee).get(f);
          o && (be(o.effect), i(this, Ee).delete(f));
        }
        for (const [l, f] of i(this, We)) {
          if (l === n || i(this, Pt).has(l)) continue;
          const o = () => {
            if (Array.from(i(this, je).values()).includes(l)) {
              var u = document.createDocumentFragment();
              Br(f, u), u.append(Dt()), i(this, Ee).set(l, { effect: f, fragment: u });
            } else
              be(f);
            i(this, Pt).delete(l), i(this, We).delete(l);
          };
          i(this, Rn) || !r ? (i(this, Pt).add(l), Lt(f, o, !1)) : o();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    E(this, Xn, (t) => {
      i(this, je).delete(t);
      const n = Array.from(i(this, je).values());
      for (const [r, s] of i(this, Ee))
        n.includes(r) || (be(s.effect), i(this, Ee).delete(r));
    });
    this.anchor = t, N(this, Rn, n);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, n) {
    var r = (
      /** @type {Batch} */
      I
    ), s = qs();
    if (n && !i(this, We).has(t) && !i(this, Ee).has(t))
      if (s) {
        var l = document.createDocumentFragment(), f = Dt();
        l.append(f), i(this, Ee).set(t, {
          effect: Oe(() => n(f)),
          fragment: l
        });
      } else
        i(this, We).set(
          t,
          Oe(() => n(this.anchor))
        );
    if (i(this, je).set(r, t), s) {
      for (const [o, a] of i(this, We))
        o === t ? r.unskip_effect(a) : r.skip_effect(a);
      for (const [o, a] of i(this, Ee))
        o === t ? r.unskip_effect(a.effect) : r.skip_effect(a.effect);
      r.oncommit(i(this, In)), r.ondiscard(i(this, Xn));
    } else
      i(this, In).call(this, r);
  }
}
je = new WeakMap(), We = new WeakMap(), Ee = new WeakMap(), Pt = new WeakMap(), Rn = new WeakMap(), In = new WeakMap(), Xn = new WeakMap();
function te(e, t, n = !1) {
  var r = new Wi(e), s = n ? an : 0;
  function l(f, o) {
    r.ensure(f, o);
  }
  Dr(() => {
    var f = !1;
    t((o, a = 0) => {
      f = !0, l(a, o);
    }), f || l(-1, null);
  }, s);
}
function ds(e, t) {
  return t;
}
function Xi(e, t, n) {
  for (var r = [], s = t.length, l, f = t.length, o = 0; o < s; o++) {
    let b = t[o];
    Lt(
      b,
      () => {
        if (l) {
          if (l.pending.delete(b), l.done.add(b), l.pending.size === 0) {
            var g = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            Rr(e, Zn(l.done)), g.delete(l), g.size === 0 && (e.outrogroups = null);
          }
        } else
          f -= 1;
      },
      !1
    );
  }
  if (f === 0) {
    var a = r.length === 0 && n !== null;
    if (a) {
      var u = (
        /** @type {Element} */
        n
      ), p = (
        /** @type {Element} */
        u.parentNode
      );
      Ci(p), p.append(u), e.items.clear();
    }
    Rr(e, t, !a);
  } else
    l = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ?? (e.outrogroups = /* @__PURE__ */ new Set())).add(l);
}
function Rr(e, t, n = !0) {
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
  for (var s = 0; s < t.length; s++) {
    var l = t[s];
    if (r?.has(l)) {
      l.f |= ft;
      const f = document.createDocumentFragment();
      Br(l, f);
    } else
      be(t[s], n);
  }
}
var vs;
function _n(e, t, n, r, s, l = null) {
  var f = e, o = /* @__PURE__ */ new Map();
  {
    var a = (
      /** @type {Element} */
      e
    );
    f = a.appendChild(Dt());
  }
  var u = null, p = /* @__PURE__ */ mi(() => {
    var F = n();
    return ws(F) ? F : F == null ? [] : Zn(F);
  }), b, g = /* @__PURE__ */ new Map(), _ = !0;
  function v(F) {
    (L.effect.f & ze) === 0 && (L.pending.delete(F), L.fallback = u, Zi(L, b, f, t, r), u !== null && (b.length === 0 ? (u.f & ft) === 0 ? Ur(u) : (u.f ^= ft, wn(u, null, f)) : Lt(u, () => {
      u = null;
    })));
  }
  function y(F) {
    L.pending.delete(F);
  }
  var R = Dr(() => {
    b = /** @type {V[]} */
    d(p);
    for (var F = b.length, Q = /* @__PURE__ */ new Set(), Te = (
      /** @type {Batch} */
      I
    ), ae = qs(), re = 0; re < F; re += 1) {
      var oe = b[re], fe = r(oe, re), ve = _ ? null : o.get(fe);
      ve ? (ve.v && fn(ve.v, oe), ve.i && fn(ve.i, re), ae && Te.unskip_effect(ve.e)) : (ve = Qi(
        o,
        _ ? f : vs ?? (vs = Dt()),
        oe,
        fe,
        re,
        s,
        t,
        n
      ), _ || (ve.e.f |= ft), o.set(fe, ve)), Q.add(fe);
    }
    if (F === 0 && l && !u && (_ ? u = Oe(() => l(f)) : (u = Oe(() => l(vs ?? (vs = Dt()))), u.f |= ft)), F > Q.size && jl(), !_)
      if (g.set(Te, Q), ae) {
        for (const [Jt, ct] of o)
          Q.has(Jt) || Te.skip_effect(ct.e);
        Te.oncommit(v), Te.ondiscard(y);
      } else
        v(Te);
    d(p);
  }), L = { effect: R, items: o, pending: g, outrogroups: null, fallback: u };
  _ = !1;
}
function gn(e) {
  for (; e !== null && (e.f & Je) === 0; )
    e = e.next;
  return e;
}
function Zi(e, t, n, r, s) {
  var l = t.length, f = e.items, o = gn(e.effect.first), a, u = null, p = [], b = [], g, _, v, y;
  for (y = 0; y < l; y += 1) {
    if (g = t[y], _ = s(g, y), v = /** @type {EachItem} */
    f.get(_).e, e.outrogroups !== null)
      for (const fe of e.outrogroups)
        fe.pending.delete(v), fe.done.delete(v);
    if ((v.f & de) !== 0 && Ur(v), (v.f & ft) !== 0)
      if (v.f ^= ft, v === o)
        wn(v, null, n);
      else {
        var R = u ? u.next : o;
        v === e.effect.last && (e.effect.last = v.prev), v.prev && (v.prev.next = v.next), v.next && (v.next.prev = v.prev), wt(e, u, v), wt(e, v, R), wn(v, R, n), u = v, p = [], b = [], o = gn(u.next);
        continue;
      }
    if (v !== o) {
      if (a !== void 0 && a.has(v)) {
        if (p.length < b.length) {
          var L = b[0], F;
          u = L.prev;
          var Q = p[0], Te = p[p.length - 1];
          for (F = 0; F < p.length; F += 1)
            wn(p[F], L, n);
          for (F = 0; F < b.length; F += 1)
            a.delete(b[F]);
          wt(e, Q.prev, Te.next), wt(e, u, Q), wt(e, Te, L), o = L, u = Te, y -= 1, p = [], b = [];
        } else
          a.delete(v), wn(v, o, n), wt(e, v.prev, v.next), wt(e, v, u === null ? e.effect.first : u.next), wt(e, u, v), u = v;
        continue;
      }
      for (p = [], b = []; o !== null && o !== v; )
        (a ?? (a = /* @__PURE__ */ new Set())).add(o), b.push(o), o = gn(o.next);
      if (o === null)
        continue;
    }
    (v.f & ft) === 0 && p.push(v), u = v, o = gn(v.next);
  }
  if (e.outrogroups !== null) {
    for (const fe of e.outrogroups)
      fe.pending.size === 0 && (Rr(e, Zn(fe.done)), e.outrogroups?.delete(fe));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (o !== null || a !== void 0) {
    var ae = [];
    if (a !== void 0)
      for (v of a)
        (v.f & de) === 0 && ae.push(v);
    for (; o !== null; )
      (o.f & de) === 0 && o !== e.fallback && ae.push(o), o = gn(o.next);
    var re = ae.length;
    if (re > 0) {
      var oe = l === 0 ? n : null;
      Xi(e, ae, oe);
    }
  }
}
function Qi(e, t, n, r, s, l, f, o) {
  var a = (f & Xl) !== 0 ? (f & Ql) === 0 ? /* @__PURE__ */ Ei(n, !1, !1) : qt(n) : null, u = (f & Zl) !== 0 ? qt(s) : null;
  return {
    v: a,
    i: u,
    e: Oe(() => (l(t, a ?? n, u ?? s, o), () => {
      e.delete(r);
    }))
  };
}
function wn(e, t, n) {
  if (e.nodes)
    for (var r = e.nodes.start, s = e.nodes.end, l = t && (t.f & ft) === 0 ? (
      /** @type {EffectNodes} */
      t.nodes.start
    ) : n; r !== null; ) {
      var f = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ An(r)
      );
      if (l.before(r), r === s)
        return;
      r = f;
    }
}
function wt(e, t, n) {
  t === null ? e.effect.first = n : t.next = n, n === null ? e.effect.last = t : n.prev = t;
}
function $i(e, t) {
  Ys(() => {
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
      const s = Vs("style");
      s.id = t.hash, s.textContent = t.code, r.appendChild(s);
    }
  });
}
const hs = [...` 	
\r\f \v\uFEFF`];
function ea(e, t, n) {
  var r = e == null ? "" : "" + e;
  if (t && (r = r ? r + " " + t : t), n) {
    for (var s of Object.keys(n))
      if (n[s])
        r = r ? r + " " + s : s;
      else if (r.length)
        for (var l = s.length, f = 0; (f = r.indexOf(s, f)) >= 0; ) {
          var o = f + l;
          (f === 0 || hs.includes(r[f - 1])) && (o === r.length || hs.includes(r[o])) ? r = (f === 0 ? "" : r.substring(0, f)) + r.substring(o + 1) : f = o;
        }
  }
  return r === "" ? null : r;
}
function bt(e, t, n, r, s, l) {
  var f = e.__className;
  if (f !== n || f === void 0) {
    var o = ea(n, r, l);
    o == null ? e.removeAttribute("class") : e.className = o, e.__className = n;
  } else if (l && s !== l)
    for (var a in l) {
      var u = !!l[a];
      (s == null || u !== !!s[a]) && e.classList.toggle(a, u);
    }
  return l;
}
function ta(e, t, n = t) {
  var r = /* @__PURE__ */ new WeakSet();
  Js(e, "input", async (s) => {
    var l = s ? e.defaultValue : e.value;
    if (l = pr(e) ? _r(l) : l, n(l), I !== null && r.add(I), await Ui(), l !== (l = t())) {
      var f = e.selectionStart, o = e.selectionEnd, a = e.value.length;
      if (e.value = l ?? "", o !== null) {
        var u = e.value.length;
        f === o && o === a && u > a ? (e.selectionStart = u, e.selectionEnd = u) : (e.selectionStart = f, e.selectionEnd = Math.min(o, u));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  er(t) == null && e.value && (n(pr(e) ? _r(e.value) : e.value), I !== null && r.add(I)), $n(() => {
    var s = t();
    if (e === document.activeElement) {
      var l = (
        /** @type {Batch} */
        I
      );
      if (r.has(l))
        return;
    }
    pr(e) && s === _r(e.value) || e.type === "date" && !s && !e.value || s !== e.value && (e.value = s ?? "");
  });
}
function na(e, t, n = t) {
  Js(e, "change", (r) => {
    var s = r ? e.defaultChecked : e.checked;
    n(s);
  }), // If we are hydrating and the value has since changed,
  // then use the update value from the input instead.
  // If defaultChecked is set, then checked == defaultChecked
  er(t) == null && n(e.checked), $n(() => {
    var r = t();
    e.checked = !!r;
  });
}
function pr(e) {
  var t = e.type;
  return t === "number" || t === "range";
}
function _r(e) {
  return e === "" ? null : +e;
}
function ps(e, t) {
  return e === t || e?.[Dn] === t;
}
function ra(e = {}, t, n, r) {
  var s = (
    /** @type {ComponentContext} */
    Se.r
  ), l = (
    /** @type {Effect} */
    O
  );
  return Ys(() => {
    var f, o;
    return $n(() => {
      f = o, o = [], er(() => {
        e !== n(...o) && (t(e, ...o), f && ps(n(...f), e) && t(null, ...f));
      });
    }), () => {
      let a = l;
      for (; a !== s && a.parent !== null && a.parent.f & wr; )
        a = a.parent;
      const u = () => {
        o && ps(n(...o), e) && t(null, ...o);
      }, p = a.teardown;
      a.teardown = () => {
        u(), p?.();
      };
    };
  }), e;
}
function _s(e, t, n, r) {
  var s = (
    /** @type {V} */
    r
  ), l = !0, f = () => (l && (l = !1, s = /** @type {V} */
  r), s), o;
  o = /** @type {V} */
  e[t], o === void 0 && r !== void 0 && (o = f());
  var a;
  return a = () => {
    var u = (
      /** @type {V} */
      e[t]
    );
    return u === void 0 ? f() : (l = !0, u);
  }, a;
}
const sa = "5";
var gs;
typeof window < "u" && ((gs = window.__svelte ?? (window.__svelte = {})).v ?? (gs.v = /* @__PURE__ */ new Set())).add(sa);
var la = /* @__PURE__ */ C("<div> </div>"), ia = /* @__PURE__ */ C('<div class="toasts svelte-9tlhgw"></div>'), aa = /* @__PURE__ */ C("<button>Upload</button>"), oa = /* @__PURE__ */ C('<p class="muted svelte-9tlhgw">Loading installed packages…</p>'), fa = /* @__PURE__ */ C('<div class="alert err svelte-9tlhgw"> </div>'), ua = /* @__PURE__ */ C(`<p class="muted svelte-9tlhgw">No packages installed yet. Browse a registry or upload files to install your first
					package.</p>`), ca = /* @__PURE__ */ C('<span class="badge yellow svelte-9tlhgw">update available</span>'), da = /* @__PURE__ */ C('<span class="badge green svelte-9tlhgw">installed</span>'), va = /* @__PURE__ */ C('<span class="badge gray svelte-9tlhgw">unknown</span>'), ha = /* @__PURE__ */ C('<span class="muted small svelte-9tlhgw"> </span>'), pa = /* @__PURE__ */ C('<button class="btn yellow svelte-9tlhgw">Update</button>'), _a = /* @__PURE__ */ C('<button class="btn ghost svelte-9tlhgw">Reload</button>'), ga = /* @__PURE__ */ C('<!> <!> <button class="btn red svelte-9tlhgw">Uninstall</button>', 1), wa = /* @__PURE__ */ C('<tr><td class="svelte-9tlhgw"><span> </span></td><td class="mono svelte-9tlhgw"> </td><td class="svelte-9tlhgw"> </td><td class="svelte-9tlhgw"> </td><td class="svelte-9tlhgw"><!></td><td class="mono small svelte-9tlhgw"> </td><td class="ar svelte-9tlhgw"><!></td></tr>'), ba = /* @__PURE__ */ C('<div class="table-wrap svelte-9tlhgw"><table class="svelte-9tlhgw"><thead><tr><th class="svelte-9tlhgw">Type</th><th class="svelte-9tlhgw">ID</th><th class="svelte-9tlhgw">Installed</th><th class="svelte-9tlhgw">Latest</th><th class="svelte-9tlhgw">Status</th><th class="svelte-9tlhgw">Source</th><th class="ar svelte-9tlhgw">Actions</th></tr></thead><tbody></tbody></table></div>'), xa = /* @__PURE__ */ C('<section class="tab-panel svelte-9tlhgw"><!></section>'), ma = /* @__PURE__ */ C('<p class="muted svelte-9tlhgw">Loading realm info…</p>'), ya = /* @__PURE__ */ C('<div class="alert err svelte-9tlhgw"> </div>'), ka = /* @__PURE__ */ C(`<p class="muted svelte-9tlhgw">No file registries are linked to this realm. Connect one from the
					realm's settings before browsing.</p>`), Ea = /* @__PURE__ */ C('<div class="alert err svelte-9tlhgw"> </div>'), Sa = /* @__PURE__ */ C('<div class="alerts svelte-9tlhgw"></div>'), Ta = /* @__PURE__ */ C('<p class="muted svelte-9tlhgw">Loading registry catalog…</p>'), Ca = /* @__PURE__ */ C('<p class="muted svelte-9tlhgw">This registry has no published packages.</p>'), Ra = /* @__PURE__ */ C('<span class="badge yellow svelte-9tlhgw">update available</span>'), Ia = /* @__PURE__ */ C('<span class="badge green svelte-9tlhgw">installed</span>'), Aa = /* @__PURE__ */ C('<span class="badge gray svelte-9tlhgw">not installed</span>'), Na = /* @__PURE__ */ C('<span class="muted small svelte-9tlhgw"> </span>'), Fa = /* @__PURE__ */ C('<button class="btn green svelte-9tlhgw">Install</button>'), Ma = /* @__PURE__ */ C('<button class="btn yellow svelte-9tlhgw">Update</button>'), Oa = /* @__PURE__ */ C('<span class="muted small svelte-9tlhgw"> </span>'), Pa = /* @__PURE__ */ C('<tr><td class="svelte-9tlhgw"><span> </span></td><td class="mono svelte-9tlhgw"> </td><td class="svelte-9tlhgw"> </td><td class="mono small svelte-9tlhgw"> </td><td class="svelte-9tlhgw"><!></td><td class="ar svelte-9tlhgw"><!></td></tr>'), za = /* @__PURE__ */ C('<div class="table-wrap svelte-9tlhgw"><table class="svelte-9tlhgw"><thead><tr><th class="svelte-9tlhgw">Type</th><th class="svelte-9tlhgw">ID</th><th class="svelte-9tlhgw">Latest</th><th class="svelte-9tlhgw">Registry</th><th class="svelte-9tlhgw">Status</th><th class="ar svelte-9tlhgw">Actions</th></tr></thead><tbody></tbody></table></div>'), Da = /* @__PURE__ */ C("<!> <!>", 1), La = /* @__PURE__ */ C('<section class="tab-panel svelte-9tlhgw"><!></section>'), Ua = /* @__PURE__ */ C('<div class="alert warn svelte-9tlhgw"> </div>'), Ba = /* @__PURE__ */ C('<li class="svelte-9tlhgw"><span class="mono svelte-9tlhgw"> </span> <span class="muted small svelte-9tlhgw"> </span></li>'), ja = /* @__PURE__ */ C('<div class="muted small svelte-9tlhgw"> <button class="linklike svelte-9tlhgw">clear</button></div> <!> <ul class="filelist svelte-9tlhgw"></ul>', 1), qa = /* @__PURE__ */ C('<label class="field row-field svelte-9tlhgw"><input type="checkbox" class="svelte-9tlhgw"/> <span class="svelte-9tlhgw">Run <code class="svelte-9tlhgw">init.py</code> after install (codex only)</span></label>'), Va = /* @__PURE__ */ C('<section class="tab-panel narrow svelte-9tlhgw"><label class="field svelte-9tlhgw"><span class="lbl svelte-9tlhgw">What are you installing?</span> <div class="seg svelte-9tlhgw"><button>extension</button> <button>codex</button></div></label> <label class="field svelte-9tlhgw"><span class="lbl svelte-9tlhgw"> </span> <input placeholder="my_extension" class="svelte-9tlhgw"/></label> <label class="field svelte-9tlhgw"><span class="lbl svelte-9tlhgw">Files (pick a folder)</span> <input type="file" multiple="" webkitdirectory="" class="svelte-9tlhgw"/></label> <!> <!> <div><button class="btn green svelte-9tlhgw"> </button></div></section>'), Ja = /* @__PURE__ */ C(`<div class="rt-pkg svelte-9tlhgw"><header class="hero svelte-9tlhgw"><div><h1 class="svelte-9tlhgw">Package Manager <small class="svelte-9tlhgw"> </small></h1> <p class="sub svelte-9tlhgw">Install, update, and uninstall extensions and codex packages from the
				file registries this realm is connected to.</p></div> <button class="btn ghost svelte-9tlhgw">Refresh</button></header> <!> <nav class="tabs svelte-9tlhgw"><button>Installed <span class="count svelte-9tlhgw"> </span></button> <button>Browse <span class="count svelte-9tlhgw"> </span></button> <!></nav> <!> <!> <!></div>`);
const Ha = {
  hash: "svelte-9tlhgw",
  code: `.rt-pkg.svelte-9tlhgw {font-family:system-ui,
			-apple-system,
			'Segoe UI',
			Roboto,
			sans-serif;color:#0f172a;max-width:1100px;margin:0;padding:0;}.hero.svelte-9tlhgw {display:flex;align-items:center;justify-content:space-between;gap:12px;border:2px solid #6366f1;border-radius:12px;padding:16px 20px;background:linear-gradient(180deg, #eef2ff 0%, #e0e7ff 100%);color:#312e81;margin-bottom:14px;}.hero.svelte-9tlhgw h1:where(.svelte-9tlhgw) {margin:0 0 4px;font-size:22px;}.hero.svelte-9tlhgw h1:where(.svelte-9tlhgw) small:where(.svelte-9tlhgw) {font-size:12px;font-weight:400;opacity:0.7;margin-left:6px;}.sub.svelte-9tlhgw {margin:0;font-size:13px;opacity:0.85;}.toasts.svelte-9tlhgw {position:fixed;top:18px;right:18px;display:flex;flex-direction:column;gap:8px;z-index:50;}.toast.svelte-9tlhgw {padding:10px 14px;border-radius:8px;color:#fff;min-width:240px;box-shadow:0 6px 16px rgba(0, 0, 0, 0.18);font-size:13px;}.toast-success.svelte-9tlhgw {background:#047857;}.toast-error.svelte-9tlhgw {background:#b91c1c;}.toast-info.svelte-9tlhgw {background:#1d4ed8;}.tabs.svelte-9tlhgw {display:flex;gap:0;border-bottom:1px solid #cbd5e1;margin-bottom:14px;}.tabs.svelte-9tlhgw button:where(.svelte-9tlhgw) {background:transparent;border:0;padding:10px 18px;cursor:pointer;font-size:14px;color:#475569;border-bottom:2px solid transparent;display:inline-flex;gap:6px;align-items:center;}.tabs.svelte-9tlhgw button.active:where(.svelte-9tlhgw) {color:#1e3a8a;border-bottom-color:#1d4ed8;font-weight:600;}.tabs.svelte-9tlhgw button:where(.svelte-9tlhgw) .count:where(.svelte-9tlhgw) {font-size:11px;background:#e2e8f0;color:#475569;padding:1px 7px;border-radius:10px;}.tabs.svelte-9tlhgw button.active:where(.svelte-9tlhgw) .count:where(.svelte-9tlhgw) {background:#c7d2fe;color:#1e3a8a;}.tab-panel.svelte-9tlhgw {background:#fff;border:1px solid #e2e8f0;border-radius:12px;padding:16px;}.tab-panel.narrow.svelte-9tlhgw {max-width:640px;}.muted.svelte-9tlhgw {color:#64748b;font-size:13px;}.small.svelte-9tlhgw {font-size:12px;}.alert.svelte-9tlhgw {padding:10px 14px;border-radius:8px;font-size:13px;margin-bottom:10px;}.alert.err.svelte-9tlhgw {background:#fef2f2;color:#991b1b;border:1px solid #fecaca;}.alert.warn.svelte-9tlhgw {background:#fffbeb;color:#92400e;border:1px solid #fde68a;}.alerts.svelte-9tlhgw {display:flex;flex-direction:column;gap:6px;margin-bottom:10px;}.table-wrap.svelte-9tlhgw {overflow-x:auto;}table.svelte-9tlhgw {width:100%;border-collapse:collapse;font-size:13px;}th.svelte-9tlhgw,
	td.svelte-9tlhgw {padding:8px 12px;border-bottom:1px solid #e2e8f0;text-align:left;vertical-align:middle;}th.svelte-9tlhgw {font-size:11px;text-transform:uppercase;letter-spacing:0.04em;color:#475569;background:#f8fafc;}td.ar.svelte-9tlhgw,
	th.ar.svelte-9tlhgw {text-align:right;}.mono.svelte-9tlhgw {font-family:ui-monospace, SFMono-Regular, Consolas, monospace;}.badge.svelte-9tlhgw {display:inline-block;font-size:11px;padding:2px 8px;border-radius:10px;background:#e2e8f0;color:#475569;font-weight:500;}.badge.extension.svelte-9tlhgw {background:#c7d2fe;color:#312e81;}.badge.codex.svelte-9tlhgw {background:#ddd6fe;color:#5b21b6;}.badge.green.svelte-9tlhgw {background:#d1fae5;color:#047857;}.badge.yellow.svelte-9tlhgw {background:#fef3c7;color:#92400e;}.badge.gray.svelte-9tlhgw {background:#e5e7eb;color:#4b5563;}.btn.svelte-9tlhgw {font-size:12px;padding:5px 12px;margin-left:6px;border:0;border-radius:6px;cursor:pointer;background:#1d4ed8;color:#fff;font-weight:500;}.btn.svelte-9tlhgw:hover:not(:disabled) {filter:brightness(1.05);}.btn.svelte-9tlhgw:disabled {opacity:0.55;cursor:not-allowed;}.btn.green.svelte-9tlhgw {background:#047857;}.btn.yellow.svelte-9tlhgw {background:#b45309;}.btn.red.svelte-9tlhgw {background:#b91c1c;}.btn.ghost.svelte-9tlhgw {background:transparent;color:#1e3a8a;border:1px solid #c7d2fe;margin-left:0;}.field.svelte-9tlhgw {display:flex;flex-direction:column;gap:6px;margin-bottom:14px;}.field.svelte-9tlhgw .lbl:where(.svelte-9tlhgw) {font-size:12px;color:#475569;font-weight:500;}
	.field.svelte-9tlhgw input:where(.svelte-9tlhgw):not([type]) {padding:8px 10px;border:1px solid #cbd5e1;border-radius:6px;font-size:13px;}.field.row-field.svelte-9tlhgw {flex-direction:row;align-items:center;gap:8px;}.field.row-field.svelte-9tlhgw span:where(.svelte-9tlhgw) {font-size:13px;}.seg.svelte-9tlhgw {display:inline-flex;gap:0;border:1px solid #cbd5e1;border-radius:6px;overflow:hidden;width:fit-content;}.seg.svelte-9tlhgw button:where(.svelte-9tlhgw) {background:#fff;color:#475569;border:0;padding:6px 14px;font-size:12px;cursor:pointer;}.seg.svelte-9tlhgw button.active:where(.svelte-9tlhgw) {background:#1d4ed8;color:#fff;}.linklike.svelte-9tlhgw {background:transparent;border:0;padding:0;margin-left:6px;color:#1d4ed8;text-decoration:underline;cursor:pointer;font-size:12px;}.filelist.svelte-9tlhgw {max-height:180px;overflow:auto;font-size:12px;border:1px solid #e2e8f0;border-radius:6px;padding:8px 10px;margin-top:8px;background:#f8fafc;list-style:none;}.filelist.svelte-9tlhgw li:where(.svelte-9tlhgw) {margin-bottom:2px;}code.svelte-9tlhgw {background:rgba(0, 0, 0, 0.06);padding:1px 5px;border-radius:4px;font-family:ui-monospace, SFMono-Regular, Consolas, monospace;font-size:0.92em;}`
};
function Ya(e, t) {
  ks(t, !0), $i(e, Ha), _s(t, "principal", 3, "");
  let n = _s(t, "isAuthenticated", 3, !0);
  function r(c) {
    const h = typeof window < "u" ? window.location.host : "";
    if (h.includes("localhost") || h.includes("127.0.0.1")) {
      const m = h.split(":")[1] ?? "4943";
      return `http://${c}.localhost:${m}`;
    }
    return `https://${c}.icp0.io`;
  }
  async function s(c) {
    const h = await fetch(c, { headers: { Accept: "application/json" } });
    if (!h.ok)
      throw new Error(`HTTP ${h.status} from ${c}: ${await h.text().catch(() => "")}`);
    return await h.json();
  }
  async function l(c) {
    return s(`${r(c)}/api/extensions`);
  }
  async function f(c) {
    return s(`${r(c)}/api/codices`);
  }
  function o(c, h) {
    const w = c.split("-", 1)[0].split(".").map((z) => parseInt(z, 10) || 0), m = h.split("-", 1)[0].split(".").map((z) => parseInt(z, 10) || 0), P = Math.max(w.length, m.length);
    for (let z = 0; z < P; z++) {
      const Y = w[z] ?? 0, A = m[z] ?? 0;
      if (Y !== A) return Y - A;
    }
    return c === h ? 0 : c < h ? -1 : 1;
  }
  let a = /* @__PURE__ */ U("installed"), u = /* @__PURE__ */ U(Me([])), p = /* @__PURE__ */ U(!0), b = /* @__PURE__ */ U(""), g = /* @__PURE__ */ U(Me([])), _ = /* @__PURE__ */ U(!0), v = /* @__PURE__ */ U(""), y = /* @__PURE__ */ U(Me([])), R = /* @__PURE__ */ U(!1), L = /* @__PURE__ */ U(Me([])), F = /* @__PURE__ */ U(Me({})), Q = /* @__PURE__ */ U(Me([])), Te = 0, ae = /* @__PURE__ */ U("extension"), re = /* @__PURE__ */ U(""), oe = /* @__PURE__ */ U(Me([])), fe = /* @__PURE__ */ U(!0), ve = /* @__PURE__ */ U(!1), Jt = /* @__PURE__ */ U(null);
  function ct(c, h) {
    return `${c}:${h}`;
  }
  function tr(c, h, w) {
    k(F, { ...d(F), [ct(c, h)]: w }, !0);
  }
  function nr(c, h) {
    const w = { ...d(F) };
    delete w[ct(c, h)], k(F, w, !0);
  }
  function Ue(c, h) {
    const w = ++Te;
    k(Q, [...d(Q), { id: w, type: c, text: h }], !0), setTimeout(
      () => {
        k(Q, d(Q).filter((m) => m.id !== w), !0);
      },
      5e3
    );
  }
  function rr(c) {
    return c < 1024 ? `${c} B` : c < 1024 * 1024 ? `${(c / 1024).toFixed(1)} KB` : `${(c / (1024 * 1024)).toFixed(2)} MB`;
  }
  function sr(c, h = 5) {
    return c.length > h ? `${c.slice(0, h)}…` : c;
  }
  function lr() {
    typeof window < "u" && window.dispatchEvent(new CustomEvent("realms:extensions-changed"));
  }
  async function ll() {
    k(p, !0), k(b, "");
    try {
      const c = await t.backend.status();
      c?.success && c.data?.status ? k(u, c.data.status.registries ?? [], !0) : (k(u, [], !0), k(b, "status() did not return a success payload"));
    } catch (c) {
      k(b, c?.message ?? String(c), !0), k(u, [], !0);
    } finally {
      k(p, !1);
    }
  }
  async function Fn() {
    k(_, !0), k(v, "");
    try {
      const [c, h] = await Promise.all([
        t.backend.list_runtime_extensions(),
        t.backend.list_codex_packages()
      ]), w = [], m = JSON.parse(c);
      if (m?.success) {
        const z = m.runtime_extensions ?? [], Y = m.all_manifests ?? {}, A = m.sources ?? {};
        for (const D of z) {
          const he = Y?.[D] ?? {};
          w.push({
            kind: "extension",
            id: D,
            version: he?.version ?? "",
            source: A?.[D] ?? null,
            manifest: he
          });
        }
      }
      const P = JSON.parse(h);
      if (P?.success) {
        const z = P.codex_packages ?? [], Y = P.manifests ?? {};
        for (const A of z) {
          const D = Y?.[A] ?? {};
          w.push({
            kind: "codex",
            id: A,
            version: D?.version ?? "",
            source: null,
            manifest: D
          });
        }
      }
      k(
        g,
        w.sort((z, Y) => z.kind === Y.kind ? z.id.localeCompare(Y.id) : z.kind.localeCompare(Y.kind)),
        !0
      );
    } catch (c) {
      k(v, c?.message ?? String(c), !0);
    } finally {
      k(_, !1);
    }
  }
  async function jr() {
    k(R, !0), k(L, [], !0);
    const c = [];
    for (const h of d(u))
      try {
        const [w, m] = await Promise.all([
          l(h.canister_id),
          f(h.canister_id)
        ]);
        for (const P of w)
          c.push({
            kind: "extension",
            id: P.ext_id,
            versions: P.versions,
            latest: P.latest,
            manifest: P.manifest,
            registryCanisterId: h.canister_id
          });
        for (const P of m)
          c.push({
            kind: "codex",
            id: P.codex_id,
            versions: P.versions,
            latest: P.latest,
            manifest: null,
            registryCanisterId: h.canister_id
          });
      } catch (w) {
        k(
          L,
          [
            ...d(L),
            `Failed to load packages from registry ${sr(h.canister_id)}: ${w?.message ?? String(w)}`
          ],
          !0
        );
      }
    k(
      y,
      c.sort((h, w) => h.kind === w.kind ? h.id.localeCompare(w.id) : h.kind.localeCompare(w.kind)),
      !0
    ), k(R, !1);
  }
  async function qr() {
    await ll(), await Promise.all([Fn(), jr()]);
  }
  async function il(c) {
    if (confirm(`Uninstall ${c.id}? Any data the package wrote to the canister will remain, but the package itself will be removed.`)) {
      tr(c.kind, c.id, `Uninstalling ${c.id}…`);
      try {
        const w = JSON.stringify(c.kind === "extension" ? { extension_id: c.id } : { codex_id: c.id }), m = c.kind === "extension" ? await t.backend.uninstall_extension(w) : await t.backend.uninstall_codex(w), P = JSON.parse(m);
        if (!P?.success)
          throw new Error(P?.error ?? "Unknown error");
        Ue("success", `Uninstalled ${c.id}`), lr(), await Promise.all([Fn(), jr()]);
      } catch (w) {
        Ue("error", w?.message ?? String(w));
      } finally {
        nr(c.kind, c.id);
      }
    }
  }
  async function al(c) {
    tr(c.kind, c.id, `Reloading ${c.id}…`);
    try {
      const h = await t.backend.reload_codex(JSON.stringify({ codex_id: c.id, run_init: !1 })), w = JSON.parse(h);
      if (!w?.success)
        throw new Error(w?.error ?? "Unknown error");
      w.init_warning && Ue("info", `Init warning: ${w.init_warning}`), Ue("success", `Reloaded ${c.id}`);
    } catch (h) {
      Ue("error", h?.message ?? String(h));
    } finally {
      nr(c.kind, c.id);
    }
  }
  async function ol(c) {
    const h = d(y).find((m) => m.kind === c.kind && m.id === c.id);
    !h || !h.latest || c.version && o(h.latest, c.version) <= 0 || !confirm(`Update ${c.id} from v${c.version || "?"} to v${h.latest}?`) || await ir(h, h.latest);
  }
  async function ir(c, h) {
    tr(c.kind, c.id, `Installing ${c.id}…`);
    try {
      let w;
      c.kind === "extension" ? w = await t.backend.install_extension_from_registry(JSON.stringify({
        registry_canister_id: c.registryCanisterId,
        ext_id: c.id,
        version: h
      })) : w = await t.backend.install_codex_from_registry(JSON.stringify({
        registry_canister_id: c.registryCanisterId,
        codex_id: c.id,
        version: h,
        run_init: !0
      }));
      const m = JSON.parse(w);
      if (!m?.success)
        throw new Error(m?.error ?? "Unknown error");
      m.init_warning && Ue("info", `Init warning: ${m.init_warning}`), Ue("success", `Installed ${c.id} (v${h})`), lr(), await Fn();
    } catch (w) {
      Ue("error", w?.message ?? String(w));
    } finally {
      nr(c.kind, c.id);
    }
  }
  async function fl(c) {
    return await new Promise((h, w) => {
      const m = new FileReader();
      m.onload = () => h(String(m.result ?? "")), m.onerror = () => w(m.error), m.readAsText(c);
    });
  }
  async function ul(c) {
    const h = c.target;
    if (!h.files) return;
    const w = [];
    for (const m of Array.from(h.files)) {
      const P = m.webkitRelativePath;
      let z = P && P.length > 0 ? P : m.name;
      const Y = z.indexOf("/");
      P && Y >= 0 && (z = z.slice(Y + 1)), w.push({ path: z, size: m.size, content: await fl(m) });
    }
    k(oe, w, !0);
  }
  function Vr() {
    k(oe, [], !0), d(Jt) && (d(Jt).value = "");
  }
  let ar = /* @__PURE__ */ nt(() => d(oe).reduce((c, h) => c + h.size, 0)), cl = /* @__PURE__ */ nt(() => d(ar) > 1.8 * 1024 * 1024);
  async function dl() {
    if (!(!d(re) || d(oe).length === 0)) {
      k(ve, !0);
      try {
        const c = {};
        for (const m of d(oe)) c[m.path] = m.content;
        let h;
        d(ae) === "extension" ? h = await t.backend.install_extension(JSON.stringify({ extension_id: d(re), files: c })) : h = await t.backend.install_codex(JSON.stringify({
          codex_id: d(re),
          files: c,
          run_init: d(fe)
        }));
        const w = JSON.parse(h);
        if (!w?.success)
          throw new Error(w?.error ?? "Unknown error");
        w.init_warning && Ue("info", `Init warning: ${w.init_warning}`), Ue("success", `Installed ${d(re)}`), lr(), Vr(), k(re, ""), await Fn();
      } catch (c) {
        Ue("error", c?.message ?? String(c));
      } finally {
        k(ve, !1);
      }
    }
  }
  function Jr(c) {
    return d(y).find((h) => h.kind === c.kind && h.id === c.id);
  }
  function vl(c) {
    const h = Jr(c);
    return !h || !h.latest || !c.version ? "unknown" : o(h.latest, c.version) > 0 ? "outdated" : "installed";
  }
  function hl(c) {
    return d(g).find((h) => h.kind === c.kind && h.id === c.id);
  }
  Fi(() => {
    qr();
  });
  var Hr = Ja(), Yr = x(Hr), Kr = x(Yr), pl = x(Kr), _l = S(x(pl)), gl = x(_l), Gr = S(Kr, 2), Wr = S(Yr, 2);
  {
    var wl = (c) => {
      var h = ia();
      _n(h, 21, () => d(Q), (w) => w.id, (w, m) => {
        var P = la(), z = x(P);
        se(() => {
          bt(P, 1, `toast toast-${d(m).type ?? ""}`, "svelte-9tlhgw"), j(z, d(m).text);
        }), T(w, P);
      }), T(c, h);
    };
    te(Wr, (c) => {
      d(Q).length > 0 && c(wl);
    });
  }
  var Xr = S(Wr, 2), Mn = x(Xr);
  let Zr;
  var bl = S(x(Mn)), xl = x(bl), On = S(Mn, 2);
  let Qr;
  var ml = S(x(On)), yl = x(ml), kl = S(On, 2);
  {
    var El = (c) => {
      var h = aa();
      let w;
      se(() => w = bt(h, 1, "svelte-9tlhgw", null, w, { active: d(a) === "upload" })), _e("click", h, () => k(a, "upload")), T(c, h);
    };
    te(kl, (c) => {
      n() && c(El);
    });
  }
  var $r = S(Xr, 2);
  {
    var Sl = (c) => {
      var h = xa(), w = x(h);
      {
        var m = (A) => {
          var D = oa();
          T(A, D);
        }, P = (A) => {
          var D = fa(), he = x(D);
          se(() => j(he, d(v))), T(A, D);
        }, z = (A) => {
          var D = ua();
          T(A, D);
        }, Y = (A) => {
          var D = ba(), he = x(D), dn = S(x(he));
          _n(dn, 21, () => d(g), (dt) => ct(dt.kind, dt.id), (dt, W) => {
            const vt = /* @__PURE__ */ nt(() => vl(d(W))), Ht = /* @__PURE__ */ nt(() => Jr(d(W))), $ = /* @__PURE__ */ nt(() => d(F)[ct(d(W).kind, d(W).id)]);
            var ue = wa(), ht = x(ue), pt = x(ht), pe = x(pt), V = S(ht), X = x(V), Ce = S(V), $e = x(Ce), He = S(Ce), Yt = x(He), _t = S(He), Kt = x(_t);
            {
              var vn = (K) => {
                var xe = ca();
                T(K, xe);
              }, Re = (K) => {
                var xe = da();
                T(K, xe);
              }, et = (K) => {
                var xe = va();
                T(K, xe);
              };
              te(Kt, (K) => {
                d(vt) === "outdated" ? K(vn) : d(vt) === "installed" ? K(Re, 1) : K(et, -1);
              });
            }
            var Ye = S(_t), gt = x(Ye), Gt = S(Ye), hn = x(Gt);
            {
              var Wt = (K) => {
                var xe = ha(), Xt = x(xe);
                se(() => j(Xt, d($))), T(K, xe);
              }, pn = (K) => {
                var xe = ga(), Xt = hr(xe);
                {
                  var or = (tt) => {
                    var Tt = pa();
                    _e("click", Tt, () => ol(d(W))), T(tt, Tt);
                  };
                  te(Xt, (tt) => {
                    d(vt) === "outdated" && tt(or);
                  });
                }
                var Pn = S(Xt, 2);
                {
                  var fr = (tt) => {
                    var Tt = _a();
                    _e("click", Tt, () => al(d(W))), T(tt, Tt);
                  };
                  te(Pn, (tt) => {
                    d(W).kind === "codex" && tt(fr);
                  });
                }
                var ur = S(Pn, 2);
                _e("click", ur, () => il(d(W))), T(K, xe);
              };
              te(hn, (K) => {
                d($) ? K(Wt) : K(pn, -1);
              });
            }
            se(
              (K) => {
                bt(pt, 1, `badge ${d(W).kind ?? ""}`, "svelte-9tlhgw"), j(pe, d(W).kind), j(X, d(W).id), j($e, d(W).version || "—"), j(Yt, d(Ht)?.latest ?? "—"), j(gt, K);
              },
              [
                () => d(W).source?.registry_canister_id ? sr(d(W).source.registry_canister_id) : "—"
              ]
            ), T(dt, ue);
          }), T(A, D);
        };
        te(w, (A) => {
          d(_) ? A(m) : d(v) ? A(P, 1) : d(g).length === 0 ? A(z, 2) : A(Y, -1);
        });
      }
      T(c, h);
    };
    te($r, (c) => {
      d(a) === "installed" && c(Sl);
    });
  }
  var es = S($r, 2);
  {
    var Tl = (c) => {
      var h = La(), w = x(h);
      {
        var m = (A) => {
          var D = ma();
          T(A, D);
        }, P = (A) => {
          var D = ya(), he = x(D);
          se(() => j(he, `Could not read realm.registries: ${d(b) ?? ""}`)), T(A, D);
        }, z = (A) => {
          var D = ka();
          T(A, D);
        }, Y = (A) => {
          var D = Da(), he = hr(D);
          {
            var dn = ($) => {
              var ue = Sa();
              _n(ue, 21, () => d(L), ds, (ht, pt) => {
                var pe = Ea(), V = x(pe);
                se(() => j(V, d(pt))), T(ht, pe);
              }), T($, ue);
            };
            te(he, ($) => {
              d(L).length > 0 && $(dn);
            });
          }
          var dt = S(he, 2);
          {
            var W = ($) => {
              var ue = Ta();
              T($, ue);
            }, vt = ($) => {
              var ue = Ca();
              T($, ue);
            }, Ht = ($) => {
              var ue = za(), ht = x(ue), pt = S(x(ht));
              _n(pt, 21, () => d(y), (pe) => ct(pe.kind, pe.id) + ":" + pe.registryCanisterId, (pe, V) => {
                const X = /* @__PURE__ */ nt(() => hl(d(V))), Ce = /* @__PURE__ */ nt(() => d(X)?.version ?? ""), $e = /* @__PURE__ */ nt(() => d(X) && d(V).latest && d(Ce) && o(d(V).latest, d(Ce)) > 0), He = /* @__PURE__ */ nt(() => d(F)[ct(d(V).kind, d(V).id)]);
                var Yt = Pa(), _t = x(Yt), Kt = x(_t), vn = x(Kt), Re = S(_t), et = x(Re), Ye = S(Re), gt = x(Ye), Gt = S(Ye), hn = x(Gt), Wt = S(Gt), pn = x(Wt);
                {
                  var K = (q) => {
                    var ee = Ra();
                    T(q, ee);
                  }, xe = (q) => {
                    var ee = Ia();
                    T(q, ee);
                  }, Xt = (q) => {
                    var ee = Aa();
                    T(q, ee);
                  };
                  te(pn, (q) => {
                    d(X) && d($e) ? q(K) : d(X) ? q(xe, 1) : q(Xt, -1);
                  });
                }
                var or = S(Wt), Pn = x(or);
                {
                  var fr = (q) => {
                    var ee = Na(), cr = x(ee);
                    se(() => j(cr, d(He))), T(q, ee);
                  }, ur = (q) => {
                    var ee = Fa();
                    se(() => ee.disabled = !d(V).latest), _e("click", ee, () => ir(d(V), d(V).latest)), T(q, ee);
                  }, tt = (q) => {
                    var ee = Ma();
                    _e("click", ee, () => ir(d(V), d(V).latest)), T(q, ee);
                  }, Tt = (q) => {
                    var ee = Oa(), cr = x(ee);
                    se(() => j(cr, `v${d(Ce) ?? ""}`)), T(q, ee);
                  };
                  te(Pn, (q) => {
                    d(He) ? q(fr) : d(X) ? d($e) ? q(tt, 2) : q(Tt, -1) : q(ur, 1);
                  });
                }
                se(
                  (q) => {
                    bt(Kt, 1, `badge ${d(V).kind ?? ""}`, "svelte-9tlhgw"), j(vn, d(V).kind), j(et, d(V).id), j(gt, d(V).latest || "—"), j(hn, q);
                  },
                  [() => sr(d(V).registryCanisterId)]
                ), T(pe, Yt);
              }), T($, ue);
            };
            te(dt, ($) => {
              d(R) ? $(W) : d(y).length === 0 ? $(vt, 1) : $(Ht, -1);
            });
          }
          T(A, D);
        };
        te(w, (A) => {
          d(p) ? A(m) : d(b) ? A(P, 1) : d(u).length === 0 ? A(z, 2) : A(Y, -1);
        });
      }
      T(c, h);
    };
    te(es, (c) => {
      d(a) === "browse" && c(Tl);
    });
  }
  var Cl = S(es, 2);
  {
    var Rl = (c) => {
      var h = Va(), w = x(h), m = S(x(w), 2), P = x(m);
      let z;
      var Y = S(P, 2);
      let A;
      var D = S(w, 2), he = x(D), dn = x(he), dt = S(he, 2), W = S(D, 2), vt = S(x(W), 2);
      ra(vt, (X) => k(Jt, X), () => d(Jt));
      var Ht = S(W, 2);
      {
        var $ = (X) => {
          var Ce = ja(), $e = hr(Ce), He = x($e), Yt = S(He), _t = S($e, 2);
          {
            var Kt = (Re) => {
              var et = Ua(), Ye = x(et);
              se(
                (gt) => j(Ye, `Total payload ${gt ?? ""} exceeds the ~1.8 MB ingress safe
						limit. The install call will likely be rejected; consider publishing
						through a file registry instead.`),
                [() => rr(d(ar))]
              ), T(Re, et);
            };
            te(_t, (Re) => {
              d(cl) && Re(Kt);
            });
          }
          var vn = S(_t, 2);
          _n(vn, 21, () => d(oe), ds, (Re, et) => {
            var Ye = Ba(), gt = x(Ye), Gt = x(gt), hn = S(gt, 2), Wt = x(hn);
            se(
              (pn) => {
                j(Gt, d(et).path), j(Wt, `(${pn ?? ""})`);
              },
              [() => rr(d(et).size)]
            ), T(Re, Ye);
          }), se((Re) => j(He, `${d(oe).length ?? ""} files selected · ${Re ?? ""} `), [() => rr(d(ar))]), _e("click", Yt, Vr), T(X, Ce);
        };
        te(Ht, (X) => {
          d(oe).length > 0 && X($);
        });
      }
      var ue = S(Ht, 2);
      {
        var ht = (X) => {
          var Ce = qa(), $e = x(Ce);
          na($e, () => d(fe), (He) => k(fe, He)), T(X, Ce);
        };
        te(ue, (X) => {
          d(ae) === "codex" && X(ht);
        });
      }
      var pt = S(ue, 2), pe = x(pt), V = x(pe);
      se(() => {
        z = bt(P, 1, "svelte-9tlhgw", null, z, { active: d(ae) === "extension" }), A = bt(Y, 1, "svelte-9tlhgw", null, A, { active: d(ae) === "codex" }), j(dn, d(ae) === "extension" ? "Extension ID" : "Codex ID"), pe.disabled = !d(re) || d(oe).length === 0 || d(ve), j(V, d(ve) ? "Installing…" : "Install");
      }), _e("click", P, () => k(ae, "extension")), _e("click", Y, () => k(ae, "codex")), ta(dt, () => d(re), (X) => k(re, X)), _e("change", vt, ul), _e("click", pe, dl), T(c, h);
    };
    te(Cl, (c) => {
      d(a) === "upload" && n() && c(Rl);
    });
  }
  se(() => {
    j(gl, `v${t.version ?? ""}`), Gr.disabled = d(_) || d(R) || d(p), Zr = bt(Mn, 1, "svelte-9tlhgw", null, Zr, { active: d(a) === "installed" }), j(xl, d(g).length), Qr = bt(On, 1, "svelte-9tlhgw", null, Qr, { active: d(a) === "browse" }), j(yl, d(y).length);
  }), _e("click", Gr, qr), _e("click", Mn, () => k(a, "installed")), _e("click", On, () => k(a, "browse")), T(e, Hr), Es();
}
qi(["click", "change"]);
function Wa(e, t) {
  const n = Yi(Ya, { target: e, props: t });
  return {
    unmount() {
      try {
        Gi(n);
      } catch {
      }
    }
  };
}
export {
  Wa as default
};
