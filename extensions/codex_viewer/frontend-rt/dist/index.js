var ps = Object.defineProperty;
var vn = (e) => {
  throw TypeError(e);
};
var _s = (e, t, r) => t in e ? ps(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var Ce = (e, t, r) => _s(e, typeof t != "symbol" ? t + "" : t, r), Ir = (e, t, r) => t.has(e) || vn("Cannot " + r);
var l = (e, t, r) => (Ir(e, t, "read from private field"), r ? r.call(e) : t.get(e)), w = (e, t, r) => t.has(e) ? vn("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), k = (e, t, r, n) => (Ir(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r), T = (e, t, r) => (Ir(e, t, "access private method"), r);
var Sn = Array.isArray, gs = Array.prototype.indexOf, Ft = Array.prototype.includes, xr = Array.from, bs = Object.defineProperty, Ut = Object.getOwnPropertyDescriptor, ws = Object.prototype, ms = Array.prototype, xs = Object.getPrototypeOf, dn = Object.isExtensible;
const ys = () => {
};
function ks(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function Mn() {
  var e, t, r = new Promise((n, s) => {
    e = n, t = s;
  });
  return { promise: r, resolve: e, reject: t };
}
const G = 2, It = 4, yr = 8, Tn = 1 << 24, Oe = 16, Ne = 32, rt = 64, jr = 128, _e = 512, j = 1024, U = 2048, Le = 4096, $ = 8192, ge = 16384, kt = 32768, hn = 1 << 25, Pt = 65536, Br = 1 << 17, Es = 1 << 18, jt = 1 << 19, Cs = 1 << 20, Ke = 1 << 25, mt = 65536, pr = 1 << 21, Wt = 1 << 22, tt = 1 << 23, Pr = Symbol("$state"), He = new class extends Error {
  constructor() {
    super(...arguments);
    Ce(this, "name", "StaleReactionError");
    Ce(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
function Ss() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Ms(e, t, r) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function Ts(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function As() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Ns(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Rs() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function zs() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Fs() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Is() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Ps() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
const Ds = 1, Os = 2, Ls = 16, js = 1, Bs = 2, H = Symbol(), Vs = "http://www.w3.org/1999/xhtml", Hs = "http://www.w3.org/2000/svg", qs = "http://www.w3.org/1998/Math/MathML";
function Ys() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function Us() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function An(e) {
  return e === this.v;
}
function Gs(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Nn(e) {
  return !Gs(e, this.v);
}
let we = null;
function Dt(e) {
  we = e;
}
function Rn(e, t = !1, r) {
  we = {
    p: we,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    r: (
      /** @type {Effect} */
      C
    ),
    l: null
  };
}
function zn(e) {
  var t = (
    /** @type {ComponentContext} */
    we
  ), r = t.e;
  if (r !== null) {
    t.e = null;
    for (var n of r)
      Zn(n);
  }
  return t.i = !0, we = t.p, /** @type {T} */
  {};
}
function Fn() {
  return !0;
}
let at = [];
function In() {
  var e = at;
  at = [], ks(e);
}
function Mt(e) {
  if (at.length === 0 && !Gt) {
    var t = at;
    queueMicrotask(() => {
      t === at && In();
    });
  }
  at.push(e);
}
function Ks() {
  for (; at.length > 0; )
    In();
}
function Pn(e) {
  var t = C;
  if (t === null)
    return E.f |= tt, e;
  if ((t.f & kt) === 0 && (t.f & It) === 0)
    throw e;
  Qe(e, t);
}
function Qe(e, t) {
  for (; t !== null; ) {
    if ((t.f & jr) !== 0) {
      if ((t.f & kt) === 0)
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
const Ws = -7169;
function F(e, t) {
  e.f = e.f & Ws | t;
}
function Zr(e) {
  (e.f & _e) !== 0 || e.deps === null ? F(e, j) : F(e, Le);
}
function Dn(e) {
  if (e !== null)
    for (const t of e)
      (t.f & G) === 0 || (t.f & mt) === 0 || (t.f ^= mt, Dn(
        /** @type {Derived} */
        t.deps
      ));
}
function On(e, t, r) {
  (e.f & U) !== 0 ? t.add(e) : (e.f & Le) !== 0 && r.add(e), Dn(e.deps), F(e, j);
}
const ot = /* @__PURE__ */ new Set();
let x = null, Te = null, Vr = null, Gt = !1, Dr = !1, Ct = null, ar = null;
var pn = 0;
let $s = 1;
var Tt, At, ct, qe, Ie, Jt, oe, Zt, Ze, Ye, Pe, Nt, Rt, vt, D, fr, Ln, ur, Hr, cr, Js;
const br = class br {
  constructor() {
    w(this, D);
    Ce(this, "id", $s++);
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
    w(this, Tt, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    w(this, At, /* @__PURE__ */ new Set());
    /**
     * Callbacks that should run only when a fork is committed.
     * @type {Set<(batch: Batch) => void>}
     */
    w(this, ct, /* @__PURE__ */ new Set());
    /**
     * Async effects that are currently in flight
     * @type {Map<Effect, number>}
     */
    w(this, qe, /* @__PURE__ */ new Map());
    /**
     * Async effects that are currently in flight, _not_ inside a pending boundary
     * @type {Map<Effect, number>}
     */
    w(this, Ie, /* @__PURE__ */ new Map());
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    w(this, Jt, null);
    /**
     * The root effects that need to be flushed
     * @type {Effect[]}
     */
    w(this, oe, []);
    /**
     * Effects created while this batch was active.
     * @type {Effect[]}
     */
    w(this, Zt, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    w(this, Ze, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    w(this, Ye, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    w(this, Pe, /* @__PURE__ */ new Map());
    /**
     * Inverse of #skipped_branches which we need to tell prior batches to unskip them when committing
     * @type {Set<Effect>}
     */
    w(this, Nt, /* @__PURE__ */ new Set());
    Ce(this, "is_fork", !1);
    w(this, Rt, !1);
    /** @type {Set<Batch>} */
    w(this, vt, /* @__PURE__ */ new Set());
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(t) {
    l(this, Pe).has(t) || l(this, Pe).set(t, { d: [], m: [] }), l(this, Nt).delete(t);
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   * @param {(e: Effect) => void} callback
   */
  unskip_effect(t, r = (n) => this.schedule(n)) {
    var n = l(this, Pe).get(t);
    if (n) {
      l(this, Pe).delete(t);
      for (var s of n.d)
        F(s, U), r(s);
      for (s of n.m)
        F(s, Le), r(s);
    }
    l(this, Nt).add(t);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Value} source
   * @param {any} value
   * @param {boolean} [is_derived]
   */
  capture(t, r, n = !1) {
    t.v !== H && !this.previous.has(t) && this.previous.set(t, t.v), (t.f & tt) === 0 && (this.current.set(t, [r, n]), Te?.set(t, r)), this.is_fork || (t.v = r);
  }
  activate() {
    x = this;
  }
  deactivate() {
    x = null, Te = null;
  }
  flush() {
    try {
      Dr = !0, x = this, T(this, D, ur).call(this);
    } finally {
      pn = 0, Vr = null, Ct = null, ar = null, Dr = !1, x = null, Te = null, _t.clear();
    }
  }
  discard() {
    for (const t of l(this, At)) t(this);
    l(this, At).clear(), l(this, ct).clear(), ot.delete(this);
  }
  /**
   * @param {Effect} effect
   */
  register_created_effect(t) {
    l(this, Zt).push(t);
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  increment(t, r) {
    let n = l(this, qe).get(r) ?? 0;
    if (l(this, qe).set(r, n + 1), t) {
      let s = l(this, Ie).get(r) ?? 0;
      l(this, Ie).set(r, s + 1);
    }
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   * @param {boolean} skip - whether to skip updates (because this is triggered by a stale reaction)
   */
  decrement(t, r, n) {
    let s = l(this, qe).get(r) ?? 0;
    if (s === 1 ? l(this, qe).delete(r) : l(this, qe).set(r, s - 1), t) {
      let i = l(this, Ie).get(r) ?? 0;
      i === 1 ? l(this, Ie).delete(r) : l(this, Ie).set(r, i - 1);
    }
    l(this, Rt) || n || (k(this, Rt, !0), Mt(() => {
      k(this, Rt, !1), this.flush();
    }));
  }
  /**
   * @param {Set<Effect>} dirty_effects
   * @param {Set<Effect>} maybe_dirty_effects
   */
  transfer_effects(t, r) {
    for (const n of t)
      l(this, Ze).add(n);
    for (const n of r)
      l(this, Ye).add(n);
    t.clear(), r.clear();
  }
  /** @param {(batch: Batch) => void} fn */
  oncommit(t) {
    l(this, Tt).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    l(this, At).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  on_fork_commit(t) {
    l(this, ct).add(t);
  }
  run_fork_commit_callbacks() {
    for (const t of l(this, ct)) t(this);
    l(this, ct).clear();
  }
  settled() {
    return (l(this, Jt) ?? k(this, Jt, Mn())).promise;
  }
  static ensure() {
    if (x === null) {
      const t = x = new br();
      Dr || (ot.add(x), Gt || Mt(() => {
        x === t && t.flush();
      }));
    }
    return x;
  }
  apply() {
    {
      Te = null;
      return;
    }
  }
  /**
   *
   * @param {Effect} effect
   */
  schedule(t) {
    if (Vr = t, t.b?.is_pending && (t.f & (It | yr | Tn)) !== 0 && (t.f & kt) === 0) {
      t.b.defer_effect(t);
      return;
    }
    for (var r = t; r.parent !== null; ) {
      r = r.parent;
      var n = r.f;
      if (Ct !== null && r === C && (E === null || (E.f & G) === 0))
        return;
      if ((n & (rt | Ne)) !== 0) {
        if ((n & j) === 0)
          return;
        r.f ^= j;
      }
    }
    l(this, oe).push(r);
  }
};
Tt = new WeakMap(), At = new WeakMap(), ct = new WeakMap(), qe = new WeakMap(), Ie = new WeakMap(), Jt = new WeakMap(), oe = new WeakMap(), Zt = new WeakMap(), Ze = new WeakMap(), Ye = new WeakMap(), Pe = new WeakMap(), Nt = new WeakMap(), Rt = new WeakMap(), vt = new WeakMap(), D = new WeakSet(), fr = function() {
  return this.is_fork || l(this, Ie).size > 0;
}, Ln = function() {
  for (const n of l(this, vt))
    for (const s of l(n, Ie).keys()) {
      for (var t = !1, r = s; r.parent !== null; ) {
        if (l(this, Pe).has(r)) {
          t = !0;
          break;
        }
        r = r.parent;
      }
      if (!t)
        return !0;
    }
  return !1;
}, ur = function() {
  var f;
  if (pn++ > 1e3 && (ot.delete(this), Xs()), !T(this, D, fr).call(this)) {
    for (const a of l(this, Ze))
      l(this, Ye).delete(a), F(a, U), this.schedule(a);
    for (const a of l(this, Ye))
      F(a, Le), this.schedule(a);
  }
  const t = l(this, oe);
  k(this, oe, []), this.apply();
  var r = Ct = [], n = [], s = ar = [];
  for (const a of t)
    try {
      T(this, D, Hr).call(this, a, r, n);
    } catch (u) {
      throw Vn(a), u;
    }
  if (x = null, s.length > 0) {
    var i = br.ensure();
    for (const a of s)
      i.schedule(a);
  }
  if (Ct = null, ar = null, T(this, D, fr).call(this) || T(this, D, Ln).call(this)) {
    T(this, D, cr).call(this, n), T(this, D, cr).call(this, r);
    for (const [a, u] of l(this, Pe))
      Bn(a, u);
  } else {
    l(this, qe).size === 0 && ot.delete(this), l(this, Ze).clear(), l(this, Ye).clear();
    for (const a of l(this, Tt)) a(this);
    l(this, Tt).clear(), _n(n), _n(r), l(this, Jt)?.resolve();
  }
  var o = (
    /** @type {Batch | null} */
    /** @type {unknown} */
    x
  );
  if (l(this, oe).length > 0) {
    const a = o ?? (o = this);
    l(a, oe).push(...l(this, oe).filter((u) => !l(a, oe).includes(u)));
  }
  o !== null && (ot.add(o), T(f = o, D, ur).call(f));
}, /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
Hr = function(t, r, n) {
  t.f ^= j;
  for (var s = t.first; s !== null; ) {
    var i = s.f, o = (i & (Ne | rt)) !== 0, f = o && (i & j) !== 0, a = f || (i & $) !== 0 || l(this, Pe).has(s);
    if (!a && s.fn !== null) {
      o ? s.f ^= j : (i & It) !== 0 ? r.push(s) : nr(s) && ((i & Oe) !== 0 && l(this, Ye).add(s), Lt(s));
      var u = s.first;
      if (u !== null) {
        s = u;
        continue;
      }
    }
    for (; s !== null; ) {
      var v = s.next;
      if (v !== null) {
        s = v;
        break;
      }
      s = s.parent;
    }
  }
}, /**
 * @param {Effect[]} effects
 */
cr = function(t) {
  for (var r = 0; r < t.length; r += 1)
    On(t[r], l(this, Ze), l(this, Ye));
}, Js = function() {
  var v, _, p;
  for (const d of ot) {
    var t = d.id < this.id, r = [];
    for (const [c, [m, y]] of this.current) {
      if (d.current.has(c)) {
        var n = (
          /** @type {[any, boolean]} */
          d.current.get(c)[0]
        );
        if (t && m !== n)
          d.current.set(c, [m, y]);
        else
          continue;
      }
      r.push(c);
    }
    var s = [...d.current.keys()].filter((c) => !this.current.has(c));
    if (s.length === 0)
      t && d.discard();
    else if (r.length > 0) {
      if (t)
        for (const c of l(this, Nt))
          d.unskip_effect(c, (m) => {
            var y;
            (m.f & (Oe | Wt)) !== 0 ? d.schedule(m) : T(y = d, D, cr).call(y, [m]);
          });
      d.activate();
      var i = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Map();
      for (var f of r)
        jn(f, s, i, o);
      o = /* @__PURE__ */ new Map();
      var a = [...d.current.keys()].filter(
        (c) => this.current.has(c) ? (
          /** @type {[any, boolean]} */
          this.current.get(c)[0] !== c
        ) : !0
      );
      for (const c of l(this, Zt))
        (c.f & (ge | $ | Br)) === 0 && Xr(c, a, o) && ((c.f & (Wt | Oe)) !== 0 ? (F(c, U), d.schedule(c)) : l(d, Ze).add(c));
      if (l(d, oe).length > 0) {
        d.apply();
        for (var u of l(d, oe))
          T(v = d, D, Hr).call(v, u, [], []);
        k(d, oe, []);
      }
      d.deactivate();
    }
  }
  for (const d of ot)
    l(d, vt).has(this) && (l(d, vt).delete(this), l(d, vt).size === 0 && !T(_ = d, D, fr).call(_) && (d.activate(), T(p = d, D, ur).call(p)));
};
let xt = br;
function Zs(e) {
  var t = Gt;
  Gt = !0;
  try {
    for (var r; ; ) {
      if (Ks(), x === null)
        return (
          /** @type {T} */
          r
        );
      x.flush();
    }
  } finally {
    Gt = t;
  }
}
function Xs() {
  try {
    Rs();
  } catch (e) {
    Qe(e, Vr);
  }
}
let Ve = null;
function _n(e) {
  var t = e.length;
  if (t !== 0) {
    for (var r = 0; r < t; ) {
      var n = e[r++];
      if ((n.f & (ge | $)) === 0 && nr(n) && (Ve = /* @__PURE__ */ new Set(), Lt(n), n.deps === null && n.first === null && n.nodes === null && n.teardown === null && n.ac === null && ts(n), Ve?.size > 0)) {
        _t.clear();
        for (const s of Ve) {
          if ((s.f & (ge | $)) !== 0) continue;
          const i = [s];
          let o = s.parent;
          for (; o !== null; )
            Ve.has(o) && (Ve.delete(o), i.push(o)), o = o.parent;
          for (let f = i.length - 1; f >= 0; f--) {
            const a = i[f];
            (a.f & (ge | $)) === 0 && Lt(a);
          }
        }
        Ve.clear();
      }
    }
    Ve = null;
  }
}
function jn(e, t, r, n) {
  if (!r.has(e) && (r.add(e), e.reactions !== null))
    for (const s of e.reactions) {
      const i = s.f;
      (i & G) !== 0 ? jn(
        /** @type {Derived} */
        s,
        t,
        r,
        n
      ) : (i & (Wt | Oe)) !== 0 && (i & U) === 0 && Xr(s, t, n) && (F(s, U), Qr(
        /** @type {Effect} */
        s
      ));
    }
}
function Xr(e, t, r) {
  const n = r.get(e);
  if (n !== void 0) return n;
  if (e.deps !== null)
    for (const s of e.deps) {
      if (Ft.call(t, s))
        return !0;
      if ((s.f & G) !== 0 && Xr(
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
function Qr(e) {
  x.schedule(e);
}
function Bn(e, t) {
  if (!((e.f & Ne) !== 0 && (e.f & j) !== 0)) {
    (e.f & U) !== 0 ? t.d.push(e) : (e.f & Le) !== 0 && t.m.push(e), F(e, j);
    for (var r = e.first; r !== null; )
      Bn(r, t), r = r.next;
  }
}
function Vn(e) {
  F(e, j);
  for (var t = e.first; t !== null; )
    Vn(t), t = t.next;
}
function Qs(e) {
  let t = 0, r = yt(0), n;
  return () => {
    sn() && (g(r), Xn(() => (t === 0 && (n = cs(() => e(() => Kt(r)))), t += 1, () => {
      Mt(() => {
        t -= 1, t === 0 && (n?.(), n = void 0, Kt(r));
      });
    })));
  };
}
var ei = Pt | jt;
function ti(e, t, r, n) {
  new ri(e, t, r, n);
}
var ve, Jr, de, dt, Q, he, W, ae, Ue, ht, Xe, zt, Xt, Qt, Ge, wr, z, ni, si, ii, qr, vr, dr, Yr, Ur;
class ri {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(t, r, n, s) {
    w(this, z);
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
    w(this, ve);
    /** @type {TemplateNode | null} */
    w(this, Jr, null);
    /** @type {BoundaryProps} */
    w(this, de);
    /** @type {((anchor: Node) => void)} */
    w(this, dt);
    /** @type {Effect} */
    w(this, Q);
    /** @type {Effect | null} */
    w(this, he, null);
    /** @type {Effect | null} */
    w(this, W, null);
    /** @type {Effect | null} */
    w(this, ae, null);
    /** @type {DocumentFragment | null} */
    w(this, Ue, null);
    w(this, ht, 0);
    w(this, Xe, 0);
    w(this, zt, !1);
    /** @type {Set<Effect>} */
    w(this, Xt, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    w(this, Qt, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    w(this, Ge, null);
    w(this, wr, Qs(() => (k(this, Ge, yt(l(this, ht))), () => {
      k(this, Ge, null);
    })));
    k(this, ve, t), k(this, de, r), k(this, dt, (i) => {
      var o = (
        /** @type {Effect} */
        C
      );
      o.b = this, o.f |= jr, n(i);
    }), this.parent = /** @type {Effect} */
    C.b, this.transform_error = s ?? this.parent?.transform_error ?? ((i) => i), k(this, Q, ln(() => {
      T(this, z, qr).call(this);
    }, ei));
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    On(t, l(this, Xt), l(this, Qt));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!l(this, de).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  update_pending_count(t, r) {
    T(this, z, Yr).call(this, t, r), k(this, ht, l(this, ht) + t), !(!l(this, Ge) || l(this, zt)) && (k(this, zt, !0), Mt(() => {
      k(this, zt, !1), l(this, Ge) && Ot(l(this, Ge), l(this, ht));
    }));
  }
  get_effect_pending() {
    return l(this, wr).call(this), g(
      /** @type {Source<number>} */
      l(this, Ge)
    );
  }
  /** @param {unknown} error */
  error(t) {
    if (!l(this, de).onerror && !l(this, de).failed)
      throw t;
    x?.is_fork ? (l(this, he) && x.skip_effect(l(this, he)), l(this, W) && x.skip_effect(l(this, W)), l(this, ae) && x.skip_effect(l(this, ae)), x.on_fork_commit(() => {
      T(this, z, Ur).call(this, t);
    })) : T(this, z, Ur).call(this, t);
  }
}
ve = new WeakMap(), Jr = new WeakMap(), de = new WeakMap(), dt = new WeakMap(), Q = new WeakMap(), he = new WeakMap(), W = new WeakMap(), ae = new WeakMap(), Ue = new WeakMap(), ht = new WeakMap(), Xe = new WeakMap(), zt = new WeakMap(), Xt = new WeakMap(), Qt = new WeakMap(), Ge = new WeakMap(), wr = new WeakMap(), z = new WeakSet(), ni = function() {
  try {
    k(this, he, pe(() => l(this, dt).call(this, l(this, ve))));
  } catch (t) {
    this.error(t);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
si = function(t) {
  const r = l(this, de).failed;
  r && k(this, ae, pe(() => {
    r(
      l(this, ve),
      () => t,
      () => () => {
      }
    );
  }));
}, ii = function() {
  const t = l(this, de).pending;
  t && (this.is_pending = !0, k(this, W, pe(() => t(l(this, ve)))), Mt(() => {
    var r = k(this, Ue, document.createDocumentFragment()), n = gt();
    r.append(n), k(this, he, T(this, z, dr).call(this, () => pe(() => l(this, dt).call(this, n)))), l(this, Xe) === 0 && (l(this, ve).before(r), k(this, Ue, null), bt(
      /** @type {Effect} */
      l(this, W),
      () => {
        k(this, W, null);
      }
    ), T(this, z, vr).call(
      this,
      /** @type {Batch} */
      x
    ));
  }));
}, qr = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), k(this, Xe, 0), k(this, ht, 0), k(this, he, pe(() => {
      l(this, dt).call(this, l(this, ve));
    })), l(this, Xe) > 0) {
      var t = k(this, Ue, document.createDocumentFragment());
      fn(l(this, he), t);
      const r = (
        /** @type {(anchor: Node) => void} */
        l(this, de).pending
      );
      k(this, W, pe(() => r(l(this, ve))));
    } else
      T(this, z, vr).call(
        this,
        /** @type {Batch} */
        x
      );
  } catch (r) {
    this.error(r);
  }
}, /**
 * @param {Batch} batch
 */
vr = function(t) {
  this.is_pending = !1, t.transfer_effects(l(this, Xt), l(this, Qt));
}, /**
 * @template T
 * @param {() => T} fn
 */
dr = function(t) {
  var r = C, n = E, s = we;
  je(l(this, Q)), me(l(this, Q)), Dt(l(this, Q).ctx);
  try {
    return xt.ensure(), t();
  } catch (i) {
    return Pn(i), null;
  } finally {
    je(r), me(n), Dt(s);
  }
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 * @param {Batch} batch
 */
Yr = function(t, r) {
  var n;
  if (!this.has_pending_snippet()) {
    this.parent && T(n = this.parent, z, Yr).call(n, t, r);
    return;
  }
  k(this, Xe, l(this, Xe) + t), l(this, Xe) === 0 && (T(this, z, vr).call(this, r), l(this, W) && bt(l(this, W), () => {
    k(this, W, null);
  }), l(this, Ue) && (l(this, ve).before(l(this, Ue)), k(this, Ue, null)));
}, /**
 * @param {unknown} error
 */
Ur = function(t) {
  l(this, he) && (re(l(this, he)), k(this, he, null)), l(this, W) && (re(l(this, W)), k(this, W, null)), l(this, ae) && (re(l(this, ae)), k(this, ae, null));
  var r = l(this, de).onerror;
  let n = l(this, de).failed;
  var s = !1, i = !1;
  const o = () => {
    if (s) {
      Us();
      return;
    }
    s = !0, i && Ps(), l(this, ae) !== null && bt(l(this, ae), () => {
      k(this, ae, null);
    }), T(this, z, dr).call(this, () => {
      T(this, z, qr).call(this);
    });
  }, f = (a) => {
    try {
      i = !0, r?.(a, o), i = !1;
    } catch (u) {
      Qe(u, l(this, Q) && l(this, Q).parent);
    }
    n && k(this, ae, T(this, z, dr).call(this, () => {
      try {
        return pe(() => {
          var u = (
            /** @type {Effect} */
            C
          );
          u.b = this, u.f |= jr, n(
            l(this, ve),
            () => a,
            () => o
          );
        });
      } catch (u) {
        return Qe(
          u,
          /** @type {Effect} */
          l(this, Q).parent
        ), null;
      }
    }));
  };
  Mt(() => {
    var a;
    try {
      a = this.transform_error(t);
    } catch (u) {
      Qe(u, l(this, Q) && l(this, Q).parent);
      return;
    }
    a !== null && typeof a == "object" && typeof /** @type {any} */
    a.then == "function" ? a.then(
      f,
      /** @param {unknown} e */
      (u) => Qe(u, l(this, Q) && l(this, Q).parent)
    ) : f(a);
  });
};
function li(e, t, r, n) {
  const s = en;
  var i = e.filter((p) => !p.settled);
  if (r.length === 0 && i.length === 0) {
    n(t.map(s));
    return;
  }
  var o = (
    /** @type {Effect} */
    C
  ), f = oi(), a = i.length === 1 ? i[0].promise : i.length > 1 ? Promise.all(i.map((p) => p.promise)) : null;
  function u(p) {
    f();
    try {
      n(p);
    } catch (d) {
      (o.f & ge) === 0 && Qe(d, o);
    }
    _r();
  }
  if (r.length === 0) {
    a.then(() => u(t.map(s)));
    return;
  }
  var v = Hn();
  function _() {
    Promise.all(r.map((p) => /* @__PURE__ */ ai(p))).then((p) => u([...t.map(s), ...p])).catch((p) => Qe(p, o)).finally(() => v());
  }
  a ? a.then(() => {
    f(), _(), _r();
  }) : _();
}
function oi() {
  var e = (
    /** @type {Effect} */
    C
  ), t = E, r = we, n = (
    /** @type {Batch} */
    x
  );
  return function(i = !0) {
    je(e), me(t), Dt(r), i && (e.f & ge) === 0 && (n?.activate(), n?.apply());
  };
}
function _r(e = !0) {
  je(null), me(null), Dt(null), e && x?.deactivate();
}
function Hn() {
  var e = (
    /** @type {Effect} */
    C
  ), t = (
    /** @type {Boundary} */
    e.b
  ), r = (
    /** @type {Batch} */
    x
  ), n = t.is_rendered();
  return t.update_pending_count(1, r), r.increment(n, e), (s = !1) => {
    t.update_pending_count(-1, r), r.decrement(n, e, s);
  };
}
// @__NO_SIDE_EFFECTS__
function en(e) {
  var t = G | U;
  return C !== null && (C.f |= jt), {
    ctx: we,
    deps: null,
    effects: null,
    equals: An,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      H
    ),
    wv: 0,
    parent: C,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function ai(e, t, r) {
  let n = (
    /** @type {Effect | null} */
    C
  );
  n === null && Ss();
  var s = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), i = yt(
    /** @type {V} */
    H
  ), o = !E, f = /* @__PURE__ */ new Map();
  return Ci(() => {
    var a = (
      /** @type {Effect} */
      C
    ), u = Mn();
    s = u.promise;
    try {
      Promise.resolve(e()).then(u.resolve, u.reject).finally(_r);
    } catch (d) {
      u.reject(d), _r();
    }
    var v = (
      /** @type {Batch} */
      x
    );
    if (o) {
      if ((a.f & kt) !== 0)
        var _ = Hn();
      if (
        /** @type {Boundary} */
        n.b.is_rendered()
      )
        f.get(v)?.reject(He), f.delete(v);
      else {
        for (const d of f.values())
          d.reject(He);
        f.clear();
      }
      f.set(v, u);
    }
    const p = (d, c = void 0) => {
      if (_) {
        var m = c === He;
        _(m);
      }
      if (!(c === He || (a.f & ge) !== 0)) {
        if (v.activate(), c)
          i.f |= tt, Ot(i, c);
        else {
          (i.f & tt) !== 0 && (i.f ^= tt), Ot(i, d);
          for (const [y, A] of f) {
            if (f.delete(y), y === v) break;
            A.reject(He);
          }
        }
        v.deactivate();
      }
    };
    u.promise.then(p, (d) => p(null, d || "unknown"));
  }), xi(() => {
    for (const a of f.values())
      a.reject(He);
  }), new Promise((a) => {
    function u(v) {
      function _() {
        v === s ? a(i) : u(s);
      }
      v.then(_, _);
    }
    u(s);
  });
}
// @__NO_SIDE_EFFECTS__
function lr(e) {
  const t = /* @__PURE__ */ en(e);
  return ss(t), t;
}
// @__NO_SIDE_EFFECTS__
function fi(e) {
  const t = /* @__PURE__ */ en(e);
  return t.equals = Nn, t;
}
function ui(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var r = 0; r < t.length; r += 1)
      re(
        /** @type {Effect} */
        t[r]
      );
  }
}
function tn(e) {
  var t, r = C, n = e.parent;
  if (!nt && n !== null && (n.f & (ge | $)) !== 0)
    return Ys(), e.v;
  je(n);
  try {
    e.f &= ~mt, ui(e), t = as(e);
  } finally {
    je(r);
  }
  return t;
}
function qn(e) {
  var t = tn(e);
  if (!e.equals(t) && (e.wv = ls(), (!x?.is_fork || e.deps === null) && (x !== null ? x.capture(e, t, !0) : e.v = t, e.deps === null))) {
    F(e, j);
    return;
  }
  nt || (Te !== null ? (sn() || x?.is_fork) && Te.set(e, t) : Zr(e));
}
function ci(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      (t.teardown || t.ac) && (t.teardown?.(), t.ac?.abort(He), t.teardown = ys, t.ac = null, $t(t, 0), on(t));
}
function Yn(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      t.teardown && Lt(t);
}
let Gr = /* @__PURE__ */ new Set();
const _t = /* @__PURE__ */ new Map();
let Un = !1;
function yt(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: An,
    rv: 0,
    wv: 0
  };
  return r;
}
// @__NO_SIDE_EFFECTS__
function ee(e, t) {
  const r = yt(e);
  return ss(r), r;
}
// @__NO_SIDE_EFFECTS__
function vi(e, t = !1, r = !0) {
  const n = yt(e);
  return t || (n.equals = Nn), n;
}
function P(e, t, r = !1) {
  E !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Ae || (E.f & Br) !== 0) && Fn() && (E.f & (G | Oe | Wt | Br)) !== 0 && (be === null || !Ft.call(be, e)) && Is();
  let n = r ? St(t) : t;
  return Ot(e, n, ar);
}
function Ot(e, t, r = null) {
  if (!e.equals(t)) {
    _t.set(e, nt ? t : e.v);
    var n = xt.ensure();
    if (n.capture(e, t), (e.f & G) !== 0) {
      const s = (
        /** @type {Derived} */
        e
      );
      (e.f & U) !== 0 && tn(s), Te === null && Zr(s);
    }
    e.wv = ls(), Gn(e, U, r), C !== null && (C.f & j) !== 0 && (C.f & (Ne | rt)) === 0 && (ce === null ? Mi([e]) : ce.push(e)), !n.is_fork && Gr.size > 0 && !Un && di();
  }
  return t;
}
function di() {
  Un = !1;
  for (const e of Gr)
    (e.f & j) !== 0 && F(e, Le), nr(e) && Lt(e);
  Gr.clear();
}
function Kt(e) {
  P(e, e.v + 1);
}
function Gn(e, t, r) {
  var n = e.reactions;
  if (n !== null)
    for (var s = n.length, i = 0; i < s; i++) {
      var o = n[i], f = o.f, a = (f & U) === 0;
      if (a && F(o, t), (f & G) !== 0) {
        var u = (
          /** @type {Derived} */
          o
        );
        Te?.delete(u), (f & mt) === 0 && (f & _e && (C === null || (C.f & pr) === 0) && (o.f |= mt), Gn(u, Le, r));
      } else if (a) {
        var v = (
          /** @type {Effect} */
          o
        );
        (f & Oe) !== 0 && Ve !== null && Ve.add(v), r !== null ? r.push(v) : Qr(v);
      }
    }
}
function St(e) {
  if (typeof e != "object" || e === null || Pr in e)
    return e;
  const t = xs(e);
  if (t !== ws && t !== ms)
    return e;
  var r = /* @__PURE__ */ new Map(), n = Sn(e), s = /* @__PURE__ */ ee(0), i = wt, o = (f) => {
    if (wt === i)
      return f();
    var a = E, u = wt;
    me(null), mn(i);
    var v = f();
    return me(a), mn(u), v;
  };
  return n && r.set("length", /* @__PURE__ */ ee(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(f, a, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && zs();
        var v = r.get(a);
        return v === void 0 ? o(() => {
          var _ = /* @__PURE__ */ ee(u.value);
          return r.set(a, _), _;
        }) : P(v, u.value, !0), !0;
      },
      deleteProperty(f, a) {
        var u = r.get(a);
        if (u === void 0) {
          if (a in f) {
            const v = o(() => /* @__PURE__ */ ee(H));
            r.set(a, v), Kt(s);
          }
        } else
          P(u, H), Kt(s);
        return !0;
      },
      get(f, a, u) {
        if (a === Pr)
          return e;
        var v = r.get(a), _ = a in f;
        if (v === void 0 && (!_ || Ut(f, a)?.writable) && (v = o(() => {
          var d = St(_ ? f[a] : H), c = /* @__PURE__ */ ee(d);
          return c;
        }), r.set(a, v)), v !== void 0) {
          var p = g(v);
          return p === H ? void 0 : p;
        }
        return Reflect.get(f, a, u);
      },
      getOwnPropertyDescriptor(f, a) {
        var u = Reflect.getOwnPropertyDescriptor(f, a);
        if (u && "value" in u) {
          var v = r.get(a);
          v && (u.value = g(v));
        } else if (u === void 0) {
          var _ = r.get(a), p = _?.v;
          if (_ !== void 0 && p !== H)
            return {
              enumerable: !0,
              configurable: !0,
              value: p,
              writable: !0
            };
        }
        return u;
      },
      has(f, a) {
        if (a === Pr)
          return !0;
        var u = r.get(a), v = u !== void 0 && u.v !== H || Reflect.has(f, a);
        if (u !== void 0 || C !== null && (!v || Ut(f, a)?.writable)) {
          u === void 0 && (u = o(() => {
            var p = v ? St(f[a]) : H, d = /* @__PURE__ */ ee(p);
            return d;
          }), r.set(a, u));
          var _ = g(u);
          if (_ === H)
            return !1;
        }
        return v;
      },
      set(f, a, u, v) {
        var _ = r.get(a), p = a in f;
        if (n && a === "length")
          for (var d = u; d < /** @type {Source<number>} */
          _.v; d += 1) {
            var c = r.get(d + "");
            c !== void 0 ? P(c, H) : d in f && (c = o(() => /* @__PURE__ */ ee(H)), r.set(d + "", c));
          }
        if (_ === void 0)
          (!p || Ut(f, a)?.writable) && (_ = o(() => /* @__PURE__ */ ee(void 0)), P(_, St(u)), r.set(a, _));
        else {
          p = _.v !== H;
          var m = o(() => St(u));
          P(_, m);
        }
        var y = Reflect.getOwnPropertyDescriptor(f, a);
        if (y?.set && y.set.call(v, u), !p) {
          if (n && typeof a == "string") {
            var A = (
              /** @type {Source<number>} */
              r.get("length")
            ), M = Number(a);
            Number.isInteger(M) && M >= A.v && P(A, M + 1);
          }
          Kt(s);
        }
        return !0;
      },
      ownKeys(f) {
        g(s);
        var a = Reflect.ownKeys(f).filter((_) => {
          var p = r.get(_);
          return p === void 0 || p.v !== H;
        });
        for (var [u, v] of r)
          v.v !== H && !(u in f) && a.push(u);
        return a;
      },
      setPrototypeOf() {
        Fs();
      }
    }
  );
}
var gn, Kn, Wn, $n;
function hi() {
  if (gn === void 0) {
    gn = window, Kn = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, r = Text.prototype;
    Wn = Ut(t, "firstChild").get, $n = Ut(t, "nextSibling").get, dn(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), dn(r) && (r.__t = void 0);
  }
}
function gt(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function et(e) {
  return (
    /** @type {TemplateNode | null} */
    Wn.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function rr(e) {
  return (
    /** @type {TemplateNode | null} */
    $n.call(e)
  );
}
function S(e, t) {
  return /* @__PURE__ */ et(e);
}
function pi(e, t = !1) {
  {
    var r = /* @__PURE__ */ et(e);
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ rr(r) : r;
  }
}
function N(e, t = 1, r = !1) {
  let n = e;
  for (; t--; )
    n = /** @type {TemplateNode} */
    /* @__PURE__ */ rr(n);
  return n;
}
function _i(e) {
  e.textContent = "";
}
function Jn() {
  return !1;
}
function rn(e, t, r) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElementNS(t ?? Vs, e, void 0)
  );
}
let bn = !1;
function gi() {
  bn || (bn = !0, document.addEventListener(
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
function nn(e) {
  var t = E, r = C;
  me(null), je(null);
  try {
    return e();
  } finally {
    me(t), je(r);
  }
}
function bi(e, t, r, n = r) {
  e.addEventListener(t, () => nn(r));
  const s = e.__on_r;
  s ? e.__on_r = () => {
    s(), n(!0);
  } : e.__on_r = () => n(!0), gi();
}
function wi(e) {
  C === null && (E === null && Ns(), As()), nt && Ts();
}
function mi(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function We(e, t) {
  var r = C;
  r !== null && (r.f & $) !== 0 && (e |= $);
  var n = {
    ctx: we,
    deps: null,
    nodes: null,
    f: e | U | _e,
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
  x?.register_created_effect(n);
  var s = n;
  if ((e & It) !== 0)
    Ct !== null ? Ct.push(n) : xt.ensure().schedule(n);
  else if (t !== null) {
    try {
      Lt(n);
    } catch (o) {
      throw re(n), o;
    }
    s.deps === null && s.teardown === null && s.nodes === null && s.first === s.last && // either `null`, or a singular child
    (s.f & jt) === 0 && (s = s.first, (e & Oe) !== 0 && (e & Pt) !== 0 && s !== null && (s.f |= Pt));
  }
  if (s !== null && (s.parent = r, r !== null && mi(s, r), E !== null && (E.f & G) !== 0 && (e & rt) === 0)) {
    var i = (
      /** @type {Derived} */
      E
    );
    (i.effects ?? (i.effects = [])).push(s);
  }
  return n;
}
function sn() {
  return E !== null && !Ae;
}
function xi(e) {
  const t = We(yr, null);
  return F(t, j), t.teardown = e, t;
}
function yi(e) {
  wi();
  var t = (
    /** @type {Effect} */
    C.f
  ), r = !E && (t & Ne) !== 0 && (t & kt) === 0;
  if (r) {
    var n = (
      /** @type {ComponentContext} */
      we
    );
    (n.e ?? (n.e = [])).push(e);
  } else
    return Zn(e);
}
function Zn(e) {
  return We(It | Cs, e);
}
function ki(e) {
  xt.ensure();
  const t = We(rt | jt, e);
  return (r = {}) => new Promise((n) => {
    r.outro ? bt(t, () => {
      re(t), n(void 0);
    }) : (re(t), n(void 0));
  });
}
function Ei(e) {
  return We(It, e);
}
function Ci(e) {
  return We(Wt | jt, e);
}
function Xn(e, t = 0) {
  return We(yr | t, e);
}
function K(e, t = [], r = [], n = []) {
  li(n, t, r, (s) => {
    We(yr, () => e(...s.map(g)));
  });
}
function ln(e, t = 0) {
  var r = We(Oe | t, e);
  return r;
}
function pe(e) {
  return We(Ne | jt, e);
}
function Qn(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = nt, n = E;
    wn(!0), me(null);
    try {
      t.call(null);
    } finally {
      wn(r), me(n);
    }
  }
}
function on(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    const s = r.ac;
    s !== null && nn(() => {
      s.abort(He);
    });
    var n = r.next;
    (r.f & rt) !== 0 ? r.parent = null : re(r, t), r = n;
  }
}
function Si(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & Ne) === 0 && re(t), t = r;
  }
}
function re(e, t = !0) {
  var r = !1;
  (t || (e.f & Es) !== 0) && e.nodes !== null && e.nodes.end !== null && (es(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), r = !0), F(e, hn), on(e, t && !r), $t(e, 0);
  var n = e.nodes && e.nodes.t;
  if (n !== null)
    for (const i of n)
      i.stop();
  Qn(e), e.f ^= hn, e.f |= ge;
  var s = e.parent;
  s !== null && s.first !== null && ts(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function es(e, t) {
  for (; e !== null; ) {
    var r = e === t ? null : /* @__PURE__ */ rr(e);
    e.remove(), e = r;
  }
}
function ts(e) {
  var t = e.parent, r = e.prev, n = e.next;
  r !== null && (r.next = n), n !== null && (n.prev = r), t !== null && (t.first === e && (t.first = n), t.last === e && (t.last = r));
}
function bt(e, t, r = !0) {
  var n = [];
  rs(e, n, !0);
  var s = () => {
    r && re(e), t && t();
  }, i = n.length;
  if (i > 0) {
    var o = () => --i || s();
    for (var f of n)
      f.out(o);
  } else
    s();
}
function rs(e, t, r) {
  if ((e.f & $) === 0) {
    e.f ^= $;
    var n = e.nodes && e.nodes.t;
    if (n !== null)
      for (const f of n)
        (f.is_global || r) && t.push(f);
    for (var s = e.first; s !== null; ) {
      var i = s.next;
      if ((s.f & rt) === 0) {
        var o = (s.f & Pt) !== 0 || // If this is a branch effect without a block effect parent,
        // it means the parent block effect was pruned. In that case,
        // transparency information was transferred to the branch effect.
        (s.f & Ne) !== 0 && (e.f & Oe) !== 0;
        rs(s, t, o ? r : !1);
      }
      s = i;
    }
  }
}
function an(e) {
  ns(e, !0);
}
function ns(e, t) {
  if ((e.f & $) !== 0) {
    e.f ^= $, (e.f & j) === 0 && (F(e, U), xt.ensure().schedule(e));
    for (var r = e.first; r !== null; ) {
      var n = r.next, s = (r.f & Pt) !== 0 || (r.f & Ne) !== 0;
      ns(r, s ? t : !1), r = n;
    }
    var i = e.nodes && e.nodes.t;
    if (i !== null)
      for (const o of i)
        (o.is_global || t) && o.in();
  }
}
function fn(e, t) {
  if (e.nodes)
    for (var r = e.nodes.start, n = e.nodes.end; r !== null; ) {
      var s = r === n ? null : /* @__PURE__ */ rr(r);
      t.append(r), r = s;
    }
}
let hr = !1, nt = !1;
function wn(e) {
  nt = e;
}
let E = null, Ae = !1;
function me(e) {
  E = e;
}
let C = null;
function je(e) {
  C = e;
}
let be = null;
function ss(e) {
  E !== null && (be === null ? be = [e] : be.push(e));
}
let te = null, le = 0, ce = null;
function Mi(e) {
  ce = e;
}
let is = 1, ft = 0, wt = ft;
function mn(e) {
  wt = e;
}
function ls() {
  return ++is;
}
function nr(e) {
  var t = e.f;
  if ((t & U) !== 0)
    return !0;
  if (t & G && (e.f &= ~mt), (t & Le) !== 0) {
    for (var r = (
      /** @type {Value[]} */
      e.deps
    ), n = r.length, s = 0; s < n; s++) {
      var i = r[s];
      if (nr(
        /** @type {Derived} */
        i
      ) && qn(
        /** @type {Derived} */
        i
      ), i.wv > e.wv)
        return !0;
    }
    (t & _e) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    Te === null && F(e, j);
  }
  return !1;
}
function os(e, t, r = !0) {
  var n = e.reactions;
  if (n !== null && !(be !== null && Ft.call(be, e)))
    for (var s = 0; s < n.length; s++) {
      var i = n[s];
      (i.f & G) !== 0 ? os(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (r ? F(i, U) : (i.f & j) !== 0 && F(i, Le), Qr(
        /** @type {Effect} */
        i
      ));
    }
}
function as(e) {
  var m;
  var t = te, r = le, n = ce, s = E, i = be, o = we, f = Ae, a = wt, u = e.f;
  te = /** @type {null | Value[]} */
  null, le = 0, ce = null, E = (u & (Ne | rt)) === 0 ? e : null, be = null, Dt(e.ctx), Ae = !1, wt = ++ft, e.ac !== null && (nn(() => {
    e.ac.abort(He);
  }), e.ac = null);
  try {
    e.f |= pr;
    var v = (
      /** @type {Function} */
      e.fn
    ), _ = v();
    e.f |= kt;
    var p = e.deps, d = x?.is_fork;
    if (te !== null) {
      var c;
      if (d || $t(e, le), p !== null && le > 0)
        for (p.length = le + te.length, c = 0; c < te.length; c++)
          p[le + c] = te[c];
      else
        e.deps = p = te;
      if (sn() && (e.f & _e) !== 0)
        for (c = le; c < p.length; c++)
          ((m = p[c]).reactions ?? (m.reactions = [])).push(e);
    } else !d && p !== null && le < p.length && ($t(e, le), p.length = le);
    if (Fn() && ce !== null && !Ae && p !== null && (e.f & (G | Le | U)) === 0)
      for (c = 0; c < /** @type {Source[]} */
      ce.length; c++)
        os(
          ce[c],
          /** @type {Effect} */
          e
        );
    if (s !== null && s !== e) {
      if (ft++, s.deps !== null)
        for (let y = 0; y < r; y += 1)
          s.deps[y].rv = ft;
      if (t !== null)
        for (const y of t)
          y.rv = ft;
      ce !== null && (n === null ? n = ce : n.push(.../** @type {Source[]} */
      ce));
    }
    return (e.f & tt) !== 0 && (e.f ^= tt), _;
  } catch (y) {
    return Pn(y);
  } finally {
    e.f ^= pr, te = t, le = r, ce = n, E = s, be = i, Dt(o), Ae = f, wt = a;
  }
}
function Ti(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var n = gs.call(r, e);
    if (n !== -1) {
      var s = r.length - 1;
      s === 0 ? r = t.reactions = null : (r[n] = r[s], r.pop());
    }
  }
  if (r === null && (t.f & G) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (te === null || !Ft.call(te, t))) {
    var i = (
      /** @type {Derived} */
      t
    );
    (i.f & _e) !== 0 && (i.f ^= _e, i.f &= ~mt), i.v !== H && Zr(i), ci(i), $t(i, 0);
  }
}
function $t(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var n = t; n < r.length; n++)
      Ti(e, r[n]);
}
function Lt(e) {
  var t = e.f;
  if ((t & ge) === 0) {
    F(e, j);
    var r = C, n = hr;
    C = e, hr = !0;
    try {
      (t & (Oe | Tn)) !== 0 ? Si(e) : on(e), Qn(e);
      var s = as(e);
      e.teardown = typeof s == "function" ? s : null, e.wv = is;
      var i;
    } finally {
      hr = n, C = r;
    }
  }
}
async function Ai() {
  await Promise.resolve(), Zs();
}
function g(e) {
  var t = e.f, r = (t & G) !== 0;
  if (E !== null && !Ae) {
    var n = C !== null && (C.f & ge) !== 0;
    if (!n && (be === null || !Ft.call(be, e))) {
      var s = E.deps;
      if ((E.f & pr) !== 0)
        e.rv < ft && (e.rv = ft, te === null && s !== null && s[le] === e ? le++ : te === null ? te = [e] : te.push(e));
      else {
        (E.deps ?? (E.deps = [])).push(e);
        var i = e.reactions;
        i === null ? e.reactions = [E] : Ft.call(i, E) || i.push(E);
      }
    }
  }
  if (nt && _t.has(e))
    return _t.get(e);
  if (r) {
    var o = (
      /** @type {Derived} */
      e
    );
    if (nt) {
      var f = o.v;
      return ((o.f & j) === 0 && o.reactions !== null || us(o)) && (f = tn(o)), _t.set(o, f), f;
    }
    var a = (o.f & _e) === 0 && !Ae && E !== null && (hr || (E.f & _e) !== 0), u = (o.f & kt) === 0;
    nr(o) && (a && (o.f |= _e), qn(o)), a && !u && (Yn(o), fs(o));
  }
  if (Te?.has(e))
    return Te.get(e);
  if ((e.f & tt) !== 0)
    throw e.v;
  return e.v;
}
function fs(e) {
  if (e.f |= _e, e.deps !== null)
    for (const t of e.deps)
      (t.reactions ?? (t.reactions = [])).push(e), (t.f & G) !== 0 && (t.f & _e) === 0 && (Yn(
        /** @type {Derived} */
        t
      ), fs(
        /** @type {Derived} */
        t
      ));
}
function us(e) {
  if (e.v === H) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (_t.has(t) || (t.f & G) !== 0 && us(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function cs(e) {
  var t = Ae;
  try {
    return Ae = !0, e();
  } finally {
    Ae = t;
  }
}
const Ni = ["touchstart", "touchmove"];
function Ri(e) {
  return Ni.includes(e);
}
const ut = Symbol("events"), vs = /* @__PURE__ */ new Set(), Kr = /* @__PURE__ */ new Set();
function Ht(e, t, r) {
  (t[ut] ?? (t[ut] = {}))[e] = r;
}
function zi(e) {
  for (var t = 0; t < e.length; t++)
    vs.add(e[t]);
  for (var r of Kr)
    r(e);
}
let xn = null;
function yn(e) {
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), n = e.type, s = e.composedPath?.() || [], i = (
    /** @type {null | Element} */
    s[0] || e.target
  );
  xn = e;
  var o = 0, f = xn === e && e[ut];
  if (f) {
    var a = s.indexOf(f);
    if (a !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e[ut] = t;
      return;
    }
    var u = s.indexOf(t);
    if (u === -1)
      return;
    a <= u && (o = a);
  }
  if (i = /** @type {Element} */
  s[o] || e.target, i !== t) {
    bs(e, "currentTarget", {
      configurable: !0,
      get() {
        return i || r;
      }
    });
    var v = E, _ = C;
    me(null), je(null);
    try {
      for (var p, d = []; i !== null; ) {
        var c = i.assignedSlot || i.parentNode || /** @type {any} */
        i.host || null;
        try {
          var m = i[ut]?.[n];
          m != null && (!/** @type {any} */
          i.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === i) && m.call(i, e);
        } catch (y) {
          p ? d.push(y) : p = y;
        }
        if (e.cancelBubble || c === t || c === null)
          break;
        i = c;
      }
      if (p) {
        for (let y of d)
          queueMicrotask(() => {
            throw y;
          });
        throw p;
      }
    } finally {
      e[ut] = t, delete e.currentTarget, me(v), je(_);
    }
  }
}
const Fi = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (e) => e
  })
);
function Ii(e) {
  return (
    /** @type {string} */
    Fi?.createHTML(e) ?? e
  );
}
function Pi(e) {
  var t = rn("template");
  return t.innerHTML = Ii(e.replaceAll("<!>", "<!---->")), t.content;
}
function gr(e, t) {
  var r = (
    /** @type {Effect} */
    C
  );
  r.nodes === null && (r.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function q(e, t) {
  var r = (t & js) !== 0, n = (t & Bs) !== 0, s, i = !e.startsWith("<!>");
  return () => {
    s === void 0 && (s = Pi(i ? e : "<!>" + e), r || (s = /** @type {TemplateNode} */
    /* @__PURE__ */ et(s)));
    var o = (
      /** @type {TemplateNode} */
      n || Kn ? document.importNode(s, !0) : s.cloneNode(!0)
    );
    if (r) {
      var f = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ et(o)
      ), a = (
        /** @type {TemplateNode} */
        o.lastChild
      );
      gr(f, a);
    } else
      gr(o, o);
    return o;
  };
}
function V(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function X(e, t) {
  var r = t == null ? "" : typeof t == "object" ? `${t}` : t;
  r !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = r, e.nodeValue = `${r}`);
}
function Di(e, t) {
  return Oi(e, t);
}
const or = /* @__PURE__ */ new Map();
function Oi(e, { target: t, anchor: r, props: n = {}, events: s, context: i, intro: o = !0, transformError: f }) {
  hi();
  var a = void 0, u = ki(() => {
    var v = r ?? t.appendChild(gt());
    ti(
      /** @type {TemplateNode} */
      v,
      {
        pending: () => {
        }
      },
      (d) => {
        Rn({});
        var c = (
          /** @type {ComponentContext} */
          we
        );
        i && (c.c = i), s && (n.$$events = s), a = e(d, n) || {}, zn();
      },
      f
    );
    var _ = /* @__PURE__ */ new Set(), p = (d) => {
      for (var c = 0; c < d.length; c++) {
        var m = d[c];
        if (!_.has(m)) {
          _.add(m);
          var y = Ri(m);
          for (const J of [t, document]) {
            var A = or.get(J);
            A === void 0 && (A = /* @__PURE__ */ new Map(), or.set(J, A));
            var M = A.get(m);
            M === void 0 ? (J.addEventListener(m, yn, { passive: y }), A.set(m, 1)) : A.set(m, M + 1);
          }
        }
      }
    };
    return p(xr(vs)), Kr.add(p), () => {
      for (var d of _)
        for (const y of [t, document]) {
          var c = (
            /** @type {Map<string, number>} */
            or.get(y)
          ), m = (
            /** @type {number} */
            c.get(d)
          );
          --m == 0 ? (y.removeEventListener(d, yn), c.delete(d), c.size === 0 && or.delete(y)) : c.set(d, m);
        }
      Kr.delete(p), v !== r && v.parentNode?.removeChild(v);
    };
  });
  return Wr.set(a, u), a;
}
let Wr = /* @__PURE__ */ new WeakMap();
function Li(e, t) {
  const r = Wr.get(e);
  return r ? (Wr.delete(e), r(t)) : Promise.resolve();
}
var Me, De, fe, pt, er, tr, mr;
class ji {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, r = !0) {
    /** @type {TemplateNode} */
    Ce(this, "anchor");
    /** @type {Map<Batch, Key>} */
    w(this, Me, /* @__PURE__ */ new Map());
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
    w(this, fe, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    w(this, pt, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    w(this, er, !0);
    /**
     * @param {Batch} batch
     */
    w(this, tr, (t) => {
      if (l(this, Me).has(t)) {
        var r = (
          /** @type {Key} */
          l(this, Me).get(t)
        ), n = l(this, De).get(r);
        if (n)
          an(n), l(this, pt).delete(r);
        else {
          var s = l(this, fe).get(r);
          s && (l(this, De).set(r, s.effect), l(this, fe).delete(r), s.fragment.lastChild.remove(), this.anchor.before(s.fragment), n = s.effect);
        }
        for (const [i, o] of l(this, Me)) {
          if (l(this, Me).delete(i), i === t)
            break;
          const f = l(this, fe).get(o);
          f && (re(f.effect), l(this, fe).delete(o));
        }
        for (const [i, o] of l(this, De)) {
          if (i === r || l(this, pt).has(i)) continue;
          const f = () => {
            if (Array.from(l(this, Me).values()).includes(i)) {
              var u = document.createDocumentFragment();
              fn(o, u), u.append(gt()), l(this, fe).set(i, { effect: o, fragment: u });
            } else
              re(o);
            l(this, pt).delete(i), l(this, De).delete(i);
          };
          l(this, er) || !n ? (l(this, pt).add(i), bt(o, f, !1)) : f();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    w(this, mr, (t) => {
      l(this, Me).delete(t);
      const r = Array.from(l(this, Me).values());
      for (const [n, s] of l(this, fe))
        r.includes(n) || (re(s.effect), l(this, fe).delete(n));
    });
    this.anchor = t, k(this, er, r);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, r) {
    var n = (
      /** @type {Batch} */
      x
    ), s = Jn();
    if (r && !l(this, De).has(t) && !l(this, fe).has(t))
      if (s) {
        var i = document.createDocumentFragment(), o = gt();
        i.append(o), l(this, fe).set(t, {
          effect: pe(() => r(o)),
          fragment: i
        });
      } else
        l(this, De).set(
          t,
          pe(() => r(this.anchor))
        );
    if (l(this, Me).set(n, t), s) {
      for (const [f, a] of l(this, De))
        f === t ? n.unskip_effect(a) : n.skip_effect(a);
      for (const [f, a] of l(this, fe))
        f === t ? n.unskip_effect(a.effect) : n.skip_effect(a.effect);
      n.oncommit(l(this, tr)), n.ondiscard(l(this, mr));
    } else
      l(this, tr).call(this, n);
  }
}
Me = new WeakMap(), De = new WeakMap(), fe = new WeakMap(), pt = new WeakMap(), er = new WeakMap(), tr = new WeakMap(), mr = new WeakMap();
function Se(e, t, r = !1) {
  var n = new ji(e), s = r ? Pt : 0;
  function i(o, f) {
    n.ensure(o, f);
  }
  ln(() => {
    var o = !1;
    t((f, a = 0) => {
      o = !0, i(a, f);
    }), o || i(-1, null);
  }, s);
}
function Bi(e, t) {
  return t;
}
function Vi(e, t, r) {
  for (var n = [], s = t.length, i, o = t.length, f = 0; f < s; f++) {
    let _ = t[f];
    bt(
      _,
      () => {
        if (i) {
          if (i.pending.delete(_), i.done.add(_), i.pending.size === 0) {
            var p = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            $r(e, xr(i.done)), p.delete(i), p.size === 0 && (e.outrogroups = null);
          }
        } else
          o -= 1;
      },
      !1
    );
  }
  if (o === 0) {
    var a = n.length === 0 && r !== null;
    if (a) {
      var u = (
        /** @type {Element} */
        r
      ), v = (
        /** @type {Element} */
        u.parentNode
      );
      _i(v), v.append(u), e.items.clear();
    }
    $r(e, t, !a);
  } else
    i = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ?? (e.outrogroups = /* @__PURE__ */ new Set())).add(i);
}
function $r(e, t, r = !0) {
  var n;
  if (e.pending.size > 0) {
    n = /* @__PURE__ */ new Set();
    for (const o of e.pending.values())
      for (const f of o)
        n.add(
          /** @type {EachItem} */
          e.items.get(f).e
        );
  }
  for (var s = 0; s < t.length; s++) {
    var i = t[s];
    if (n?.has(i)) {
      i.f |= Ke;
      const o = document.createDocumentFragment();
      fn(i, o);
    } else
      re(t[s], r);
  }
}
var kn;
function En(e, t, r, n, s, i = null) {
  var o = e, f = /* @__PURE__ */ new Map();
  {
    var a = (
      /** @type {Element} */
      e
    );
    o = a.appendChild(gt());
  }
  var u = null, v = /* @__PURE__ */ fi(() => {
    var M = r();
    return Sn(M) ? M : M == null ? [] : xr(M);
  }), _, p = /* @__PURE__ */ new Map(), d = !0;
  function c(M) {
    (A.effect.f & ge) === 0 && (A.pending.delete(M), A.fallback = u, Hi(A, _, o, t, n), u !== null && (_.length === 0 ? (u.f & Ke) === 0 ? an(u) : (u.f ^= Ke, Yt(u, null, o)) : bt(u, () => {
      u = null;
    })));
  }
  function m(M) {
    A.pending.delete(M);
  }
  var y = ln(() => {
    _ = /** @type {V[]} */
    g(v);
    for (var M = _.length, J = /* @__PURE__ */ new Set(), ne = (
      /** @type {Batch} */
      x
    ), Re = Jn(), ze = 0; ze < M; ze += 1) {
      var $e = _[ze], se = n($e, ze), xe = d ? null : f.get(se);
      xe ? (xe.v && Ot(xe.v, $e), xe.i && Ot(xe.i, ze), Re && ne.unskip_effect(xe.e)) : (xe = qi(
        f,
        d ? o : kn ?? (kn = gt()),
        $e,
        se,
        ze,
        s,
        t,
        r
      ), d || (xe.e.f |= Ke), f.set(se, xe)), J.add(se);
    }
    if (M === 0 && i && !u && (d ? u = pe(() => i(o)) : (u = pe(() => i(kn ?? (kn = gt()))), u.f |= Ke)), M > J.size && Ms(), !d)
      if (p.set(ne, J), Re) {
        for (const [kr, Er] of f)
          J.has(kr) || ne.skip_effect(Er.e);
        ne.oncommit(c), ne.ondiscard(m);
      } else
        c(ne);
    g(v);
  }), A = { effect: y, items: f, pending: p, outrogroups: null, fallback: u };
  d = !1;
}
function qt(e) {
  for (; e !== null && (e.f & Ne) === 0; )
    e = e.next;
  return e;
}
function Hi(e, t, r, n, s) {
  var i = t.length, o = e.items, f = qt(e.effect.first), a, u = null, v = [], _ = [], p, d, c, m;
  for (m = 0; m < i; m += 1) {
    if (p = t[m], d = s(p, m), c = /** @type {EachItem} */
    o.get(d).e, e.outrogroups !== null)
      for (const se of e.outrogroups)
        se.pending.delete(c), se.done.delete(c);
    if ((c.f & $) !== 0 && an(c), (c.f & Ke) !== 0)
      if (c.f ^= Ke, c === f)
        Yt(c, null, r);
      else {
        var y = u ? u.next : f;
        c === e.effect.last && (e.effect.last = c.prev), c.prev && (c.prev.next = c.next), c.next && (c.next.prev = c.prev), Je(e, u, c), Je(e, c, y), Yt(c, y, r), u = c, v = [], _ = [], f = qt(u.next);
        continue;
      }
    if (c !== f) {
      if (a !== void 0 && a.has(c)) {
        if (v.length < _.length) {
          var A = _[0], M;
          u = A.prev;
          var J = v[0], ne = v[v.length - 1];
          for (M = 0; M < v.length; M += 1)
            Yt(v[M], A, r);
          for (M = 0; M < _.length; M += 1)
            a.delete(_[M]);
          Je(e, J.prev, ne.next), Je(e, u, J), Je(e, ne, A), f = A, u = ne, m -= 1, v = [], _ = [];
        } else
          a.delete(c), Yt(c, f, r), Je(e, c.prev, c.next), Je(e, c, u === null ? e.effect.first : u.next), Je(e, u, c), u = c;
        continue;
      }
      for (v = [], _ = []; f !== null && f !== c; )
        (a ?? (a = /* @__PURE__ */ new Set())).add(f), _.push(f), f = qt(f.next);
      if (f === null)
        continue;
    }
    (c.f & Ke) === 0 && v.push(c), u = c, f = qt(c.next);
  }
  if (e.outrogroups !== null) {
    for (const se of e.outrogroups)
      se.pending.size === 0 && ($r(e, xr(se.done)), e.outrogroups?.delete(se));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (f !== null || a !== void 0) {
    var Re = [];
    if (a !== void 0)
      for (c of a)
        (c.f & $) === 0 && Re.push(c);
    for (; f !== null; )
      (f.f & $) === 0 && f !== e.fallback && Re.push(f), f = qt(f.next);
    var ze = Re.length;
    if (ze > 0) {
      var $e = i === 0 ? r : null;
      Vi(e, Re, $e);
    }
  }
}
function qi(e, t, r, n, s, i, o, f) {
  var a = (o & Ds) !== 0 ? (o & Ls) === 0 ? /* @__PURE__ */ vi(r, !1, !1) : yt(r) : null, u = (o & Os) !== 0 ? yt(s) : null;
  return {
    v: a,
    i: u,
    e: pe(() => (i(t, a ?? r, u ?? s, f), () => {
      e.delete(n);
    }))
  };
}
function Yt(e, t, r) {
  if (e.nodes)
    for (var n = e.nodes.start, s = e.nodes.end, i = t && (t.f & Ke) === 0 ? (
      /** @type {EffectNodes} */
      t.nodes.start
    ) : r; n !== null; ) {
      var o = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ rr(n)
      );
      if (i.before(n), n === s)
        return;
      n = o;
    }
}
function Je(e, t, r) {
  t === null ? e.effect.first = r : t.next = r, r === null ? e.effect.last = t : r.prev = t;
}
function Yi(e, t, r = !1, n = !1, s = !1, i = !1) {
  var o = e, f = "";
  if (r)
    var a = (
      /** @type {Element} */
      e
    );
  K(() => {
    var u = (
      /** @type {Effect} */
      C
    );
    if (f !== (f = t() ?? "")) {
      if (r) {
        u.nodes = null, a.innerHTML = /** @type {string} */
        f, f !== "" && gr(
          /** @type {TemplateNode} */
          /* @__PURE__ */ et(a),
          /** @type {TemplateNode} */
          a.lastChild
        );
        return;
      }
      if (u.nodes !== null && (es(
        u.nodes.start,
        /** @type {TemplateNode} */
        u.nodes.end
      ), u.nodes = null), f !== "") {
        var v = n ? Hs : s ? qs : void 0, _ = (
          /** @type {HTMLTemplateElement | SVGElement | MathMLElement} */
          rn(n ? "svg" : s ? "math" : "template", v)
        );
        _.innerHTML = /** @type {any} */
        f;
        var p = n || s ? _ : (
          /** @type {HTMLTemplateElement} */
          _.content
        );
        if (gr(
          /** @type {TemplateNode} */
          /* @__PURE__ */ et(p),
          /** @type {TemplateNode} */
          p.lastChild
        ), n || s)
          for (; /* @__PURE__ */ et(p); )
            o.before(
              /** @type {TemplateNode} */
              /* @__PURE__ */ et(p)
            );
        else
          o.before(p);
      }
    }
  });
}
function Ui(e, t) {
  Ei(() => {
    var r = e.getRootNode(), n = (
      /** @type {ShadowRoot} */
      r.host ? (
        /** @type {ShadowRoot} */
        r
      ) : (
        /** @type {Document} */
        r.head ?? /** @type {Document} */
        r.ownerDocument.head
      )
    );
    if (!n.querySelector("#" + t.hash)) {
      const s = rn("style");
      s.id = t.hash, s.textContent = t.code, n.appendChild(s);
    }
  });
}
function Gi(e, t, r = t) {
  var n = /* @__PURE__ */ new WeakSet();
  bi(e, "input", async (s) => {
    var i = s ? e.defaultValue : e.value;
    if (i = Or(e) ? Lr(i) : i, r(i), x !== null && n.add(x), await Ai(), i !== (i = t())) {
      var o = e.selectionStart, f = e.selectionEnd, a = e.value.length;
      if (e.value = i ?? "", f !== null) {
        var u = e.value.length;
        o === f && f === a && u > a ? (e.selectionStart = u, e.selectionEnd = u) : (e.selectionStart = o, e.selectionEnd = Math.min(f, u));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  cs(t) == null && e.value && (r(Or(e) ? Lr(e.value) : e.value), x !== null && n.add(x)), Xn(() => {
    var s = t();
    if (e === document.activeElement) {
      var i = (
        /** @type {Batch} */
        x
      );
      if (n.has(i))
        return;
    }
    Or(e) && s === Lr(e.value) || e.type === "date" && !s && !e.value || s !== e.value && (e.value = s ?? "");
  });
}
function Or(e) {
  var t = e.type;
  return t === "number" || t === "range";
}
function Lr(e) {
  return e === "" ? null : +e;
}
const Ki = "5";
var Cn;
typeof window < "u" && ((Cn = window.__svelte ?? (window.__svelte = {})).v ?? (Cn.v = /* @__PURE__ */ new Set())).add(Ki);
var Wi = /* @__PURE__ */ q('<div class="error-banner svelte-1vl5es8"> </div>'), $i = /* @__PURE__ */ q('<span class="badge badge-green svelte-1vl5es8"> </span>'), Ji = /* @__PURE__ */ q('<p class="detail-description svelte-1vl5es8"> </p>'), Zi = /* @__PURE__ */ q('<p class="detail-meta svelte-1vl5es8"> </p>'), Xi = /* @__PURE__ */ q('<tr class="code-line svelte-1vl5es8"><td class="line-number svelte-1vl5es8"></td><td class="line-content svelte-1vl5es8"></td></tr>'), Qi = /* @__PURE__ */ q('<div class="code-container svelte-1vl5es8"><div class="code-toolbar svelte-1vl5es8"><span> </span> <button class="btn-copy svelte-1vl5es8">Copy</button></div> <div class="code-scroll svelte-1vl5es8"><table class="code-table svelte-1vl5es8"><tbody></tbody></table></div></div>'), el = /* @__PURE__ */ q('<div class="code-container svelte-1vl5es8"><div class="code-toolbar svelte-1vl5es8"><span>No code available</span></div> <pre class="code-fallback svelte-1vl5es8"> </pre></div>'), tl = /* @__PURE__ */ q('<div><button class="back-link svelte-1vl5es8">← Back to list</button> <div class="detail-card svelte-1vl5es8"><div class="detail-header svelte-1vl5es8"><div class="detail-title-row svelte-1vl5es8"><svg class="icon-code svelte-1vl5es8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg> <h2 class="detail-name svelte-1vl5es8"> </h2> <!> <span class="badge badge-blue svelte-1vl5es8">Python</span></div> <button class="btn-explain svelte-1vl5es8" title="Ask AI to explain this codex in simple terms"><svg class="icon-sm svelte-1vl5es8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg> Explain with AI</button></div> <!> <!> <!></div></div>'), rl = /* @__PURE__ */ q('<div class="center-message svelte-1vl5es8"><svg class="spinner svelte-1vl5es8" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> <span>Loading codexes…</span></div>'), nl = /* @__PURE__ */ q('<span class="stats-filtered svelte-1vl5es8"> </span>'), sl = /* @__PURE__ */ q('<div class="empty-state svelte-1vl5es8"><svg class="empty-icon svelte-1vl5es8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg> <p> </p></div>'), il = /* @__PURE__ */ q('<p class="card-desc svelte-1vl5es8"> </p>'), ll = /* @__PURE__ */ q('<div class="card-preview svelte-1vl5es8"><pre class="svelte-1vl5es8"> </pre></div>'), ol = /* @__PURE__ */ q('<button class="card svelte-1vl5es8"><div class="card-header svelte-1vl5es8"><div class="card-title svelte-1vl5es8"><svg class="icon-code-sm svelte-1vl5es8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg> <h3 class="card-name svelte-1vl5es8"> </h3></div> <span class="badge badge-blue svelte-1vl5es8">Python</span></div> <!> <!> <div class="card-footer svelte-1vl5es8"><span> </span> <span class="view-link svelte-1vl5es8">View Code →</span></div></button>'), al = /* @__PURE__ */ q('<div class="grid svelte-1vl5es8"></div>'), fl = /* @__PURE__ */ q('<div class="search-box svelte-1vl5es8"><svg class="search-icon svelte-1vl5es8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg> <input type="text" placeholder="Search codexes…" class="search-input svelte-1vl5es8"/></div> <div class="stats svelte-1vl5es8"><span> </span> <!></div> <!>', 1), ul = /* @__PURE__ */ q('<div class="loading-overlay svelte-1vl5es8"><svg class="spinner svelte-1vl5es8" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> <span>Loading details…</span></div>'), cl = /* @__PURE__ */ q('<div class="codex-root svelte-1vl5es8"><div class="header svelte-1vl5es8"><div><h1 class="title svelte-1vl5es8">Codex Viewer</h1> <p class="subtitle svelte-1vl5es8">Browse installed codex packages</p></div> <button class="btn-refresh svelte-1vl5es8"><svg class="icon svelte-1vl5es8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg> Refresh</button></div> <!> <!> <!></div>');
const vl = {
  hash: "svelte-1vl5es8",
  code: `.codex-root.svelte-1vl5es8 {padding:24px;max-width:1100px;margin:0 auto;position:relative;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;}.header.svelte-1vl5es8 {margin-bottom:24px;display:flex;justify-content:space-between;align-items:flex-start;gap:16px;}.title.svelte-1vl5es8 {font-size:1.5rem;font-weight:700;color:#111827;margin:0;}.subtitle.svelte-1vl5es8 {font-size:0.875rem;color:#6b7280;margin:4px 0 0;}.btn-refresh.svelte-1vl5es8 {display:inline-flex;align-items:center;gap:6px;padding:6px 12px;font-size:0.875rem;font-weight:500;border-radius:8px;border:1px solid #d1d5db;background:#fff;color:#374151;cursor:pointer;transition:background 0.15s;}.btn-refresh.svelte-1vl5es8:hover {background:#f9fafb;}.btn-refresh.svelte-1vl5es8:disabled {opacity:0.5;cursor:not-allowed;}.icon.svelte-1vl5es8 {width:16px;height:16px;}.icon-sm.svelte-1vl5es8 {width:18px;height:18px;}.error-banner.svelte-1vl5es8 {margin-bottom:16px;padding:12px 16px;background:#fef2f2;border:1px solid #fecaca;color:#b91c1c;border-radius:8px;font-size:0.875rem;}

	/* Detail view */.back-link.svelte-1vl5es8 {color:#4f46e5;font-size:0.875rem;background:none;border:none;cursor:pointer;margin-bottom:16px;padding:0;}.back-link.svelte-1vl5es8:hover {text-decoration:underline;}.detail-card.svelte-1vl5es8 {background:#fff;border:1px solid #e5e7eb;border-radius:12px;overflow:hidden;}.detail-header.svelte-1vl5es8 {padding:20px 24px;border-bottom:1px solid #e5e7eb;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px;}.detail-title-row.svelte-1vl5es8 {display:flex;align-items:center;gap:10px;}.icon-code.svelte-1vl5es8 {width:24px;height:24px;color:#2563eb;flex-shrink:0;}.detail-name.svelte-1vl5es8 {font-size:1.25rem;font-weight:600;color:#111827;margin:0;}.badge.svelte-1vl5es8 {display:inline-block;padding:2px 8px;font-size:0.75rem;font-weight:500;border-radius:9999px;}.badge-green.svelte-1vl5es8 {background:#dcfce7;color:#166534;}.badge-blue.svelte-1vl5es8 {background:#dbeafe;color:#1e40af;}.btn-explain.svelte-1vl5es8 {display:inline-flex;align-items:center;gap:6px;padding:8px 14px;font-size:0.875rem;font-weight:500;border-radius:8px;border:none;background:linear-gradient(135deg, #6366f1, #8b5cf6);color:#fff;cursor:pointer;transition:opacity 0.15s, transform 0.1s;box-shadow:0 2px 6px rgba(99, 102, 241, 0.3);}.btn-explain.svelte-1vl5es8:hover {opacity:0.9;transform:translateY(-1px);}.btn-explain.svelte-1vl5es8:active {transform:translateY(0);}.detail-description.svelte-1vl5es8 {padding:12px 24px 0;font-size:0.875rem;color:#4b5563;margin:0;}.detail-meta.svelte-1vl5es8 {padding:8px 24px 0;font-size:0.75rem;color:#9ca3af;margin:0;}

	/* Code block */.code-container.svelte-1vl5es8 {margin:16px 24px 24px;border-radius:10px;overflow:hidden;border:1px solid #374151;background:#1e1e2e;}.code-toolbar.svelte-1vl5es8 {display:flex;justify-content:space-between;align-items:center;padding:8px 16px;background:#2d2d3d;border-bottom:1px solid #374151;font-size:0.75rem;color:#9ca3af;}.btn-copy.svelte-1vl5es8 {padding:3px 10px;font-size:0.75rem;border-radius:4px;border:1px solid #4b5563;background:#374151;color:#d1d5db;cursor:pointer;transition:background 0.15s;}.btn-copy.svelte-1vl5es8:hover {background:#4b5563;}.code-scroll.svelte-1vl5es8 {overflow-x:auto;max-height:600px;overflow-y:auto;}.code-table.svelte-1vl5es8 {border-collapse:collapse;width:100%;font-family:'JetBrains Mono', 'Fira Code', 'Monaco', 'Menlo', monospace;font-size:0.8125rem;line-height:1.6;}.code-line.svelte-1vl5es8:hover {background:rgba(255, 255, 255, 0.03);}.line-number.svelte-1vl5es8 {padding:0 14px;text-align:right;color:#4b5563;user-select:none;white-space:nowrap;vertical-align:top;border-right:1px solid #374151;width:1%;}.line-content.svelte-1vl5es8 {padding:0 16px;white-space:pre;color:#e2e8f0;}.code-fallback.svelte-1vl5es8 {padding:16px;margin:0;color:#a0aec0;font-size:0.8125rem;font-family:'JetBrains Mono', monospace;white-space:pre-wrap;word-break:break-word;}

	/* Syntax highlighting */.hl-keyword {color:#c678dd;font-weight:500;}.hl-string {color:#98c379;}.hl-comment {color:#5c6370;font-style:italic;}.hl-number {color:#d19a66;}.hl-builtin {color:#61afef;}.hl-decorator {color:#e5c07b;}.hl-funcname {color:#61afef;font-weight:500;}

	/* List view */.search-box.svelte-1vl5es8 {position:relative;max-width:400px;margin-bottom:16px;}.search-icon.svelte-1vl5es8 {position:absolute;left:12px;top:50%;transform:translateY(-50%);width:20px;height:20px;color:#9ca3af;}.search-input.svelte-1vl5es8 {width:100%;padding:8px 12px 8px 40px;border:1px solid #d1d5db;border-radius:8px;font-size:0.875rem;outline:none;transition:border-color 0.15s;}.search-input.svelte-1vl5es8:focus {border-color:#6366f1;box-shadow:0 0 0 2px rgba(99, 102, 241, 0.15);}.stats.svelte-1vl5es8 {margin-bottom:16px;font-size:0.875rem;color:#6b7280;}.stats-filtered.svelte-1vl5es8 {color:#9ca3af;margin-left:8px;}.empty-state.svelte-1vl5es8 {text-align:center;padding:48px 16px;background:#f9fafb;border:1px solid #e5e7eb;border-radius:12px;color:#6b7280;}.empty-icon.svelte-1vl5es8 {width:48px;height:48px;margin:0 auto 16px;color:#9ca3af;}.grid.svelte-1vl5es8 {display:grid;grid-template-columns:repeat(auto-fill, minmax(300px, 1fr));gap:16px;}.card.svelte-1vl5es8 {background:#fff;border:1px solid #e5e7eb;border-radius:12px;padding:16px;text-align:left;cursor:pointer;transition:box-shadow 0.2s, border-color 0.2s;width:100%;}.card.svelte-1vl5es8:hover {box-shadow:0 4px 12px rgba(0,0,0,0.08);border-color:#a5b4fc;}.card-header.svelte-1vl5es8 {display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:10px;}.card-title.svelte-1vl5es8 {display:flex;align-items:center;gap:8px;min-width:0;}.icon-code-sm.svelte-1vl5es8 {width:20px;height:20px;color:#2563eb;flex-shrink:0;}.card-name.svelte-1vl5es8 {font-weight:600;color:#111827;margin:0;font-size:0.95rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}.card-desc.svelte-1vl5es8 {font-size:0.8125rem;color:#6b7280;margin:0 0 10px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;}.card-preview.svelte-1vl5es8 {background:#1e1e2e;border-radius:6px;padding:8px 10px;margin-bottom:10px;overflow:hidden;}.card-preview.svelte-1vl5es8 pre:where(.svelte-1vl5es8) {margin:0;font-size:0.7rem;color:#a0aec0;font-family:'JetBrains Mono', monospace;white-space:pre;overflow:hidden;text-overflow:ellipsis;}.card-footer.svelte-1vl5es8 {display:flex;justify-content:space-between;font-size:0.75rem;color:#9ca3af;}.view-link.svelte-1vl5es8 {color:#4f46e5;}.center-message.svelte-1vl5es8 {display:flex;align-items:center;justify-content:center;padding:48px 0;gap:12px;color:#6b7280;}.spinner.svelte-1vl5es8 {width:32px;height:32px; animation: svelte-1vl5es8-spin 1s linear infinite;}
	@keyframes svelte-1vl5es8-spin { to { transform: rotate(360deg); } }.loading-overlay.svelte-1vl5es8 {position:absolute;inset:0;background:rgba(255, 255, 255, 0.85);display:flex;align-items:center;justify-content:center;border-radius:12px;z-index:10;gap:12px;color:#6b7280;}`
};
function dl(e, t) {
  Rn(t, !0), Ui(e, vl);
  let r = /* @__PURE__ */ ee(St([])), n = /* @__PURE__ */ ee(!0), s = /* @__PURE__ */ ee(""), i = /* @__PURE__ */ ee(""), o = /* @__PURE__ */ ee(null), f = /* @__PURE__ */ ee(!1), a = /* @__PURE__ */ lr(() => g(i).trim() ? g(r).filter((h) => {
    const R = g(i).toLowerCase();
    return (h.name ?? "").toLowerCase().includes(R) || (h.description ?? "").toLowerCase().includes(R);
  }) : g(r));
  async function u(h, R = {}) {
    return await t.ctx.callSync(h, R);
  }
  async function v() {
    P(n, !0), P(s, "");
    try {
      const h = await u("get_all_codexes");
      P(r, h?.codexes ?? h?.data ?? (Array.isArray(h) ? h : []), !0);
    } catch (h) {
      P(s, h?.message || String(h), !0);
    } finally {
      P(n, !1);
    }
  }
  async function _(h) {
    P(f, !0), P(s, "");
    try {
      const R = h._id || h.id || h.name, ie = await u("get_codex_details", { codex_id: R }), O = ie?.codex ?? ie?.data ?? ie;
      O && typeof O == "object" && (O.code || O.name) ? P(o, O, !0) : P(o, h, !0);
    } catch {
      P(o, h, !0);
    } finally {
      P(f, !1);
    }
  }
  function p() {
    P(o, null);
  }
  function d(h) {
    return h ? new Date(h / 1e6).toLocaleString() : "";
  }
  function c(h) {
    return h ? h.replace(/\\n/g, `
`).replace(/\\t/g, "	").replace(/\\"/g, '"').replace(/\\\\/g, "\\").replace(/^"""\s*\n?/, "").replace(/\n?"""$/, "").trim() : "";
  }
  function m(h) {
    const R = /* @__PURE__ */ new Set([
      "def",
      "class",
      "import",
      "from",
      "return",
      "if",
      "elif",
      "else",
      "for",
      "while",
      "try",
      "except",
      "finally",
      "with",
      "as",
      "raise",
      "pass",
      "break",
      "continue",
      "and",
      "or",
      "not",
      "in",
      "is",
      "None",
      "True",
      "False",
      "self",
      "lambda",
      "yield",
      "async",
      "await",
      "global",
      "nonlocal"
    ]), ie = /* @__PURE__ */ new Set([
      "print",
      "len",
      "range",
      "int",
      "str",
      "float",
      "list",
      "dict",
      "set",
      "tuple",
      "type",
      "isinstance",
      "getattr",
      "setattr",
      "hasattr",
      "sum",
      "min",
      "max",
      "abs",
      "round",
      "enumerate",
      "zip",
      "map",
      "filter",
      "sorted",
      "reversed",
      "open",
      "super"
    ]), O = [];
    let b = 0;
    for (; b < h.length; ) {
      if (h[b] === "#") {
        O.push({ text: h.slice(b), cls: "hl-comment" });
        break;
      }
      if (h[b] === '"' || h[b] === "'") {
        const L = h[b], Y = h.slice(b, b + 3) === L.repeat(3), st = Y ? L.repeat(3) : L, Bt = b;
        for (b += Y ? 3 : 1; b < h.length; ) {
          if (h[b] === "\\") {
            b += 2;
            continue;
          }
          if (h.slice(b, b + st.length) === st) {
            b += st.length;
            break;
          }
          b++;
        }
        O.push({ text: h.slice(Bt, b), cls: "hl-string" });
        continue;
      }
      if (h[b] === "@" && (b === 0 || h.slice(0, b).trim() === "")) {
        const L = b;
        for (b++; b < h.length && /[\w.]/.test(h[b]); ) b++;
        O.push({ text: h.slice(L, b), cls: "hl-decorator" });
        continue;
      }
      if (/\d/.test(h[b]) && (b === 0 || !/\w/.test(h[b - 1]))) {
        const L = b;
        for (; b < h.length && /[\d._eE+\-]/.test(h[b]); ) b++;
        O.push({ text: h.slice(L, b), cls: "hl-number" });
        continue;
      }
      if (/[a-zA-Z_]/.test(h[b])) {
        const L = b;
        for (; b < h.length && /\w/.test(h[b]); ) b++;
        const Y = h.slice(L, b);
        R.has(Y) ? O.push({ text: Y, cls: "hl-keyword" }) : ie.has(Y) ? O.push({ text: Y, cls: "hl-builtin" }) : O.push({ text: Y, cls: "" });
        continue;
      }
      O.push({ text: h[b], cls: "" }), b++;
    }
    return O.map((L) => {
      const Y = L.text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
      return L.cls ? `<span class="${L.cls}">${Y}</span>` : Y;
    }).join("");
  }
  function y(h) {
    return h._id || h.id || h.name || "";
  }
  function A() {
    if (!g(o)) return;
    const h = y(g(o)), R = `/extensions/llm_chat?explain=codex:${encodeURIComponent(h)}`;
    window.open(R, "_blank");
  }
  yi(() => {
    v();
  });
  var M = cl(), J = S(M), ne = N(S(J), 2), Re = N(J, 2);
  {
    var ze = (h) => {
      var R = Wi(), ie = S(R);
      K(() => X(ie, g(s))), V(h, R);
    };
    Se(Re, (h) => {
      g(s) && h(ze);
    });
  }
  var $e = N(Re, 2);
  {
    var se = (h) => {
      var R = tl(), ie = S(R), O = N(ie, 2), b = S(O), L = S(b), Y = N(S(L), 2), st = S(Y), Bt = N(Y, 2);
      {
        var Cr = (I) => {
          var B = $i(), ue = S(B);
          K(() => X(ue, `v${g(o).version ?? ""}`)), V(I, B);
        };
        Se(Bt, (I) => {
          g(o).version && I(Cr);
        });
      }
      var Sr = N(L, 2), sr = N(b, 2);
      {
        var Z = (I) => {
          var B = Ji(), ue = S(B);
          K(() => X(ue, g(o).description)), V(I, B);
        };
        Se(sr, (I) => {
          g(o).description && I(Z);
        });
      }
      var ye = N(sr, 2);
      {
        var Fe = (I) => {
          var B = Zi(), ue = S(B);
          K((Be) => X(ue, `Created: ${Be ?? ""}`), [() => d(g(o).created_at)]), V(I, B);
        }, ke = /* @__PURE__ */ lr(() => d(g(o).created_at));
        Se(ye, (I) => {
          g(ke) && I(Fe);
        });
      }
      var Vt = N(ye, 2);
      {
        var ir = (I) => {
          const B = /* @__PURE__ */ lr(() => c(g(o).code || g(o).source || g(o).code_preview));
          var ue = Qi(), Be = S(ue), Et = S(Be), Ar = S(Et), Nr = N(Et, 2), Rr = N(Be, 2), Ee = S(Rr), it = S(Ee);
          En(it, 21, () => g(B).split(`
`), Bi, (lt, zr, Fr) => {
            var un = Xi(), cn = S(un);
            cn.textContent = Fr + 1;
            var hs = N(cn);
            Yi(hs, () => m(g(zr)), !0), V(lt, un);
          }), K((lt) => X(Ar, `Python • ${lt ?? ""} lines`), [() => g(B).split(`
`).length]), Ht("click", Nr, () => navigator.clipboard.writeText(g(B))), V(I, ue);
        }, Mr = /* @__PURE__ */ lr(() => c(g(o).code || g(o).source || g(o).code_preview)), Tr = (I) => {
          var B = el(), ue = N(S(B), 2), Be = S(ue);
          K((Et) => X(Be, Et), [() => JSON.stringify(g(o), null, 2)]), V(I, B);
        };
        Se(Vt, (I) => {
          g(Mr) ? I(ir) : I(Tr, -1);
        });
      }
      K(() => X(st, g(o).name || g(o)._id || "Codex")), Ht("click", ie, p), Ht("click", Sr, A), V(h, R);
    }, xe = (h) => {
      var R = rl();
      V(h, R);
    }, kr = (h) => {
      var R = fl(), ie = pi(R), O = N(S(ie), 2), b = N(ie, 2), L = S(b), Y = S(L), st = N(L, 2);
      {
        var Bt = (Z) => {
          var ye = nl(), Fe = S(ye);
          K(() => X(Fe, `(${g(a).length ?? ""} matching)`)), V(Z, ye);
        };
        Se(st, (Z) => {
          g(i) && g(a).length !== g(r).length && Z(Bt);
        });
      }
      var Cr = N(b, 2);
      {
        var Sr = (Z) => {
          var ye = sl(), Fe = N(S(ye), 2), ke = S(Fe);
          K(() => X(ke, g(i) ? "No codexes match your search" : "No codexes found")), V(Z, ye);
        }, sr = (Z) => {
          var ye = al();
          En(ye, 21, () => g(a), (Fe) => Fe._id || Fe.name, (Fe, ke) => {
            var Vt = ol(), ir = S(Vt), Mr = S(ir), Tr = N(S(Mr), 2), I = S(Tr), B = N(ir, 2);
            {
              var ue = (Ee) => {
                var it = il(), lt = S(it);
                K(() => X(lt, g(ke).description)), V(Ee, it);
              };
              Se(B, (Ee) => {
                g(ke).description && Ee(ue);
              });
            }
            var Be = N(B, 2);
            {
              var Et = (Ee) => {
                var it = ll(), lt = S(it), zr = S(lt);
                K((Fr) => X(zr, Fr), [
                  () => g(ke).code_preview.split(`
`).slice(0, 3).join(`
`)
                ]), V(Ee, it);
              };
              Se(Be, (Ee) => {
                g(ke).code_preview && Ee(Et);
              });
            }
            var Ar = N(Be, 2), Nr = S(Ar), Rr = S(Nr);
            K(
              (Ee) => {
                X(I, g(ke).name), X(Rr, `ID: ${Ee ?? ""}`);
              },
              [() => (g(ke)._id || "").substring(0, 12)]
            ), Ht("click", Vt, () => _(g(ke))), V(Fe, Vt);
          }), V(Z, ye);
        };
        Se(Cr, (Z) => {
          g(a).length === 0 ? Z(Sr) : Z(sr, -1);
        });
      }
      K(() => X(Y, `${g(r).length ?? ""} total codexes`)), Gi(O, () => g(i), (Z) => P(i, Z)), V(h, R);
    };
    Se($e, (h) => {
      g(o) ? h(se) : g(n) ? h(xe, 1) : h(kr, -1);
    });
  }
  var Er = N($e, 2);
  {
    var ds = (h) => {
      var R = ul();
      V(h, R);
    };
    Se(Er, (h) => {
      g(f) && h(ds);
    });
  }
  K(() => ne.disabled = g(n)), Ht("click", ne, v), V(e, M), zn();
}
zi(["click"]);
function _l(e, t) {
  const r = Di(dl, { target: e, props: { ctx: t } });
  return {
    unmount() {
      try {
        Li(r);
      } catch {
      }
    }
  };
}
export {
  _l as default
};
