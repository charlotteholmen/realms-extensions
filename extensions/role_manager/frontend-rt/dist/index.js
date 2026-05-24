var vs = Object.defineProperty;
var qn = (e) => {
  throw TypeError(e);
};
var hs = (e, t, r) => t in e ? vs(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var _e = (e, t, r) => hs(e, typeof t != "symbol" ? t + "" : t, r), sn = (e, t, r) => t.has(e) || qn("Cannot " + r);
var a = (e, t, r) => (sn(e, t, "read from private field"), r ? r.call(e) : t.get(e)), M = (e, t, r) => t.has(e) ? qn("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), E = (e, t, r, n) => (sn(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r), I = (e, t, r) => (sn(e, t, "access private method"), r);
var En = Array.isArray, ps = Array.prototype.indexOf, Bt = Array.prototype.includes, Qr = Array.from, _s = Object.defineProperty, gr = Object.getOwnPropertyDescriptor, gs = Object.prototype, ms = Array.prototype, bs = Object.getPrototypeOf, Vn = Object.isExtensible;
const xs = () => {
};
function ys(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function ii() {
  var e, t, r = new Promise((n, i) => {
    e = n, t = i;
  });
  return { promise: r, resolve: e, reject: t };
}
function ws(e, t) {
  if (Array.isArray(e))
    return e;
  if (!(Symbol.iterator in e))
    return Array.from(e);
  const r = [];
  for (const n of e)
    if (r.push(n), r.length === t) break;
  return r;
}
const fe = 2, or = 4, Zr = 8, si = 1 << 24, Ve = 16, We = 32, Et = 64, un = 128, Ie = 512, te = 1024, le = 2048, Xe = 4096, ve = 8192, Ye = 16384, Kt = 32768, Un = 1 << 25, lr = 65536, qr = 1 << 17, ks = 1 << 18, dr = 1 << 19, Es = 1 << 20, $e = 1 << 25, Gt = 65536, Vr = 1 << 21, er = 1 << 22, wt = 1 << 23, mr = Symbol("$state"), Dr = Symbol("attributes"), cn = Symbol("class"), Ss = Symbol("style"), hr = Symbol("text"), Nr = Symbol("form reset"), $r = new class extends Error {
  constructor() {
    super(...arguments);
    _e(this, "name", "StaleReactionError");
    _e(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
function Cs(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function Ms() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function As(e, t, r) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function Ts(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Rs() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Ps(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Ls() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Fs() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Os() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Ds() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Ns() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
const Is = 1, zs = 2, ai = 4, js = 8, Bs = 16, Hs = 1, qs = 2, ee = Symbol("uninitialized"), oi = "http://www.w3.org/1999/xhtml";
function Vs() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function Us() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function Gs() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function li(e) {
  return e === this.v;
}
function Ys(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function fi(e) {
  return !Ys(e, this.v);
}
let Se = null;
function fr(e) {
  Se = e;
}
function ui(e, t = !1, r) {
  Se = {
    p: Se,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    r: (
      /** @type {Effect} */
      N
    ),
    l: null
  };
}
function ci(e) {
  var t = (
    /** @type {ComponentContext} */
    Se
  ), r = t.e;
  if (r !== null) {
    t.e = null;
    for (var n of r)
      Fi(n);
  }
  return t.i = !0, Se = t.p, /** @type {T} */
  {};
}
function di() {
  return !0;
}
let Pt = [];
function vi() {
  var e = Pt;
  Pt = [], ys(e);
}
function Ht(e) {
  if (Pt.length === 0 && !br) {
    var t = Pt;
    queueMicrotask(() => {
      t === Pt && vi();
    });
  }
  Pt.push(e);
}
function Ws() {
  for (; Pt.length > 0; )
    vi();
}
function hi(e) {
  var t = N;
  if (t === null)
    return F.f |= wt, e;
  if ((t.f & Kt) === 0 && (t.f & or) === 0)
    throw e;
  xt(e, t);
}
function xt(e, t) {
  for (; t !== null; ) {
    if ((t.f & un) !== 0) {
      if ((t.f & Kt) === 0)
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
const Ks = -7169;
function K(e, t) {
  e.f = e.f & Ks | t;
}
function Sn(e) {
  (e.f & Ie) !== 0 || e.deps === null ? K(e, te) : K(e, Xe);
}
function pi(e) {
  if (e !== null)
    for (const t of e)
      (t.f & fe) === 0 || (t.f & Gt) === 0 || (t.f ^= Gt, pi(
        /** @type {Derived} */
        t.deps
      ));
}
function _i(e, t, r) {
  (e.f & le) !== 0 ? t.add(e) : (e.f & Xe) !== 0 && r.add(e), pi(e.deps), K(e, te);
}
let an = null, Zt = null, T = null, dn = null, Ue = null, vn = null, br = !1, on = !1, Xt = null, Ir = null;
var Gn = 0;
let Js = 1;
var tr, gt, Ot, rr, nr, Dt, ir, ot, kr, we, Er, mt, Je, Qe, sr, Nt, j, hn, pr, pn, gi, mi, zr, Qs, _n, $t;
const Wr = class Wr {
  constructor() {
    M(this, j);
    _e(this, "id", Js++);
    /** True as soon as `#process` was called */
    M(this, tr, !1);
    _e(this, "linked", !0);
    /** @type {Batch | null} */
    M(this, gt, null);
    /** @type {Batch | null} */
    M(this, Ot, null);
    /** @type {Map<Effect, ReturnType<typeof deferred<any>>>} */
    _e(this, "async_deriveds", /* @__PURE__ */ new Map());
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
     * Async effects which this batch doesn't take into account anymore when calculating blockers,
     * as it has a value for it already.
     * @type {Set<Effect>}
     */
    _e(this, "unblocked", /* @__PURE__ */ new Set());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<(batch: Batch) => void>}
     */
    M(this, rr, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    M(this, nr, /* @__PURE__ */ new Set());
    /**
     * Callbacks that should run only when a fork is committed.
     * @type {Set<(batch: Batch) => void>}
     */
    M(this, Dt, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    M(this, ir, 0);
    /**
     * Async effects that are currently in flight, _not_ inside a pending boundary
     * @type {Map<Effect, number>}
     */
    M(this, ot, /* @__PURE__ */ new Map());
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    M(this, kr, null);
    /**
     * The root effects that need to be flushed
     * @type {Effect[]}
     */
    M(this, we, []);
    /**
     * Effects created while this batch was active.
     * @type {Effect[]}
     */
    M(this, Er, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    M(this, mt, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    M(this, Je, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    M(this, Qe, /* @__PURE__ */ new Map());
    /**
     * Inverse of #skipped_branches which we need to tell prior batches to unskip them when committing
     * @type {Set<Effect>}
     */
    M(this, sr, /* @__PURE__ */ new Set());
    _e(this, "is_fork", !1);
    M(this, Nt, !1);
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(t) {
    a(this, Qe).has(t) || a(this, Qe).set(t, { d: [], m: [] }), a(this, sr).delete(t);
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   * @param {(e: Effect) => void} callback
   */
  unskip_effect(t, r = (n) => this.schedule(n)) {
    var n = a(this, Qe).get(t);
    if (n) {
      a(this, Qe).delete(t);
      for (var i of n.d)
        K(i, le), r(i);
      for (i of n.m)
        K(i, Xe), r(i);
    }
    a(this, sr).add(t);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Value} source
   * @param {any} value
   * @param {boolean} [is_derived]
   */
  capture(t, r, n = !1) {
    t.v !== ee && !this.previous.has(t) && this.previous.set(t, t.v), (t.f & wt) === 0 && (this.current.set(t, [r, n]), Ue?.set(t, r)), this.is_fork || (t.v = r);
  }
  activate() {
    T = this;
  }
  deactivate() {
    T = null, Ue = null;
  }
  flush() {
    try {
      on = !0, T = this, I(this, j, pr).call(this);
    } finally {
      Gn = 0, vn = null, Xt = null, Ir = null, on = !1, T = null, Ue = null, qt.clear();
    }
  }
  discard() {
    for (const t of a(this, nr)) t(this);
    a(this, nr).clear(), a(this, Dt).clear(), I(this, j, $t).call(this);
  }
  /**
   * @param {Effect} effect
   */
  register_created_effect(t) {
    a(this, Er).push(t);
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  increment(t, r) {
    if (E(this, ir, a(this, ir) + 1), t) {
      let n = a(this, ot).get(r) ?? 0;
      a(this, ot).set(r, n + 1);
    }
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  decrement(t, r) {
    if (E(this, ir, a(this, ir) - 1), t) {
      let n = a(this, ot).get(r) ?? 0;
      n === 1 ? a(this, ot).delete(r) : a(this, ot).set(r, n - 1);
    }
    a(this, Nt) || (E(this, Nt, !0), Ht(() => {
      E(this, Nt, !1), this.linked && this.flush();
    }));
  }
  /**
   * @param {Set<Effect>} dirty_effects
   * @param {Set<Effect>} maybe_dirty_effects
   */
  transfer_effects(t, r) {
    for (const n of t)
      a(this, mt).add(n);
    for (const n of r)
      a(this, Je).add(n);
    t.clear(), r.clear();
  }
  /** @param {(batch: Batch) => void} fn */
  oncommit(t) {
    a(this, rr).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    a(this, nr).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  on_fork_commit(t) {
    a(this, Dt).add(t);
  }
  run_fork_commit_callbacks() {
    for (const t of a(this, Dt)) t(this);
    a(this, Dt).clear();
  }
  settled() {
    return (a(this, kr) ?? E(this, kr, ii())).promise;
  }
  static ensure() {
    var t;
    if (T === null) {
      const r = T = new Wr();
      I(t = r, j, _n).call(t), !on && !br && Ht(() => {
        a(r, tr) || r.flush();
      });
    }
    return T;
  }
  apply() {
    {
      Ue = null;
      return;
    }
  }
  /**
   *
   * @param {Effect} effect
   */
  schedule(t) {
    if (vn = t, t.b?.is_pending && (t.f & (or | Zr | si)) !== 0 && (t.f & Kt) === 0) {
      t.b.defer_effect(t);
      return;
    }
    for (var r = t; r.parent !== null; ) {
      r = r.parent;
      var n = r.f;
      if (Xt !== null && r === N && (F === null || (F.f & fe) === 0))
        return;
      if ((n & (Et | We)) !== 0) {
        if ((n & te) === 0)
          return;
        r.f ^= te;
      }
    }
    a(this, we).push(r);
  }
};
tr = new WeakMap(), gt = new WeakMap(), Ot = new WeakMap(), rr = new WeakMap(), nr = new WeakMap(), Dt = new WeakMap(), ir = new WeakMap(), ot = new WeakMap(), kr = new WeakMap(), we = new WeakMap(), Er = new WeakMap(), mt = new WeakMap(), Je = new WeakMap(), Qe = new WeakMap(), sr = new WeakMap(), Nt = new WeakMap(), j = new WeakSet(), hn = function() {
  if (this.is_fork) return !0;
  for (const n of a(this, ot).keys()) {
    for (var t = n, r = !1; t.parent !== null; ) {
      if (a(this, Qe).has(t)) {
        r = !0;
        break;
      }
      t = t.parent;
    }
    if (!r)
      return !0;
  }
  return !1;
}, pr = function() {
  var f, d, c;
  if (E(this, tr, !0), Gn++ > 1e3 && (I(this, j, $t).call(this), $s()), !I(this, j, hn).call(this)) {
    for (const p of a(this, mt))
      a(this, Je).delete(p), K(p, le), this.schedule(p);
    for (const p of a(this, Je))
      K(p, Xe), this.schedule(p);
  }
  const t = a(this, we);
  E(this, we, []), this.apply();
  var r = Xt = [], n = [], i = Ir = [];
  for (const p of t)
    try {
      I(this, j, pn).call(this, p, r, n);
    } catch (v) {
      throw yi(p), v;
    }
  if (T = null, i.length > 0) {
    var s = Wr.ensure();
    for (const p of i)
      s.schedule(p);
  }
  if (Xt = null, Ir = null, I(this, j, hn).call(this)) {
    I(this, j, zr).call(this, n), I(this, j, zr).call(this, r);
    for (const [p, v] of a(this, Qe))
      xi(p, v);
    i.length > 0 && /** @type {unknown} */
    I(f = T, j, pr).call(f);
    return;
  }
  const l = I(this, j, gi).call(this);
  if (l) {
    I(d = l, j, mi).call(d, this);
    return;
  }
  a(this, mt).clear(), a(this, Je).clear();
  for (const p of a(this, rr)) p(this);
  a(this, rr).clear(), dn = this, Yn(n), Yn(r), dn = null, a(this, kr)?.resolve();
  var u = (
    /** @type {Batch | null} */
    /** @type {unknown} */
    T
  );
  if (this.linked && a(this, ir) === 0 && I(this, j, $t).call(this), a(this, we).length > 0) {
    u === null && (u = this, I(this, j, _n).call(this));
    const p = u;
    a(p, we).push(...a(this, we).filter((v) => !a(p, we).includes(v)));
  }
  u !== null && I(c = u, j, pr).call(c);
}, /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
pn = function(t, r, n) {
  t.f ^= te;
  for (var i = t.first; i !== null; ) {
    var s = i.f, l = (s & (We | Et)) !== 0, u = l && (s & te) !== 0, f = u || (s & ve) !== 0 || a(this, Qe).has(i);
    if (!f && i.fn !== null) {
      l ? i.f ^= te : (s & or) !== 0 ? r.push(i) : Rr(i) && ((s & Ve) !== 0 && a(this, Je).add(i), cr(i));
      var d = i.first;
      if (d !== null) {
        i = d;
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
}, gi = function() {
  for (var t = a(this, gt); t !== null; ) {
    if (!t.is_fork) {
      for (const [r, [, n]] of this.current)
        if (t.current.has(r) && !n)
          return t;
    }
    t = a(t, gt);
  }
  return null;
}, /**
 * @param {Batch} batch
 */
mi = function(t) {
  var n;
  for (const [i, s] of t.current)
    !this.previous.has(i) && t.previous.has(i) && this.previous.set(i, t.previous.get(i)), this.current.set(i, s);
  for (const [i, s] of t.async_deriveds) {
    const l = this.async_deriveds.get(i);
    l && s.promise.then(l.resolve);
  }
  const r = (i) => {
    var s = i.reactions;
    if (s !== null)
      for (const f of s) {
        var l = f.f;
        if ((l & fe) !== 0)
          r(
            /** @type {Derived} */
            f
          );
        else {
          var u = (
            /** @type {Effect} */
            f
          );
          l & (er | Ve) && !this.async_deriveds.has(u) && (a(this, Je).delete(u), K(u, le), this.schedule(u));
        }
      }
  };
  for (const i of this.current.keys())
    r(i);
  this.oncommit(() => t.discard()), I(n = t, j, $t).call(n), T = this, I(this, j, pr).call(this);
}, /**
 * @param {Effect[]} effects
 */
zr = function(t) {
  for (var r = 0; r < t.length; r += 1)
    _i(t[r], a(this, mt), a(this, Je));
}, Qs = function() {
  var c;
  I(this, j, $t).call(this);
  for (let p = an; p !== null; p = a(p, Ot)) {
    var t = p.id < this.id, r = [];
    for (const [v, [x, m]] of this.current) {
      if (p.current.has(v)) {
        var n = (
          /** @type {[any, boolean]} */
          p.current.get(v)[0]
        );
        if (t && x !== n)
          p.current.set(v, [x, m]);
        else
          continue;
      }
      r.push(v);
    }
    if (t)
      for (const [v, x] of this.async_deriveds) {
        const m = p.async_deriveds.get(v);
        m && x.promise.then(m.resolve);
      }
    if (a(p, tr)) {
      var i = [...p.current.keys()].filter((v) => !this.current.has(v));
      if (i.length === 0)
        t && p.discard();
      else if (r.length > 0) {
        if (t)
          for (const v of a(this, sr))
            p.unskip_effect(v, (x) => {
              var m;
              (x.f & (Ve | er)) !== 0 ? p.schedule(x) : I(m = p, j, zr).call(m, [x]);
            });
        p.activate();
        var s = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Map();
        for (var u of r)
          bi(u, i, s, l);
        l = /* @__PURE__ */ new Map();
        var f = [...p.current.keys()].filter(
          (v) => this.current.has(v) ? (
            /** @type {[any, boolean]} */
            this.current.get(v)[0] !== v.v
          ) : !0
        );
        if (f.length > 0)
          for (const v of a(this, Er))
            (v.f & (Ye | ve | qr)) === 0 && Cn(v, f, l) && ((v.f & (er | Ve)) !== 0 ? (K(v, le), p.schedule(v)) : a(p, mt).add(v));
        if (a(p, we).length > 0 && !a(p, Nt)) {
          p.apply();
          for (var d of a(p, we))
            I(c = p, j, pn).call(c, d, [], []);
          E(p, we, []);
        }
        p.deactivate();
      }
    }
  }
}, _n = function() {
  Zt === null ? an = Zt = this : (E(Zt, Ot, this), E(this, gt, Zt)), Zt = this;
}, $t = function() {
  var t = a(this, gt), r = a(this, Ot);
  t === null ? an = r : E(t, Ot, r), r === null ? Zt = t : E(r, gt, t), this.linked = !1;
};
let Yt = Wr;
function Zs(e) {
  var t = br;
  br = !0;
  try {
    for (var r; ; ) {
      if (Ws(), T === null)
        return (
          /** @type {T} */
          r
        );
      T.flush();
    }
  } finally {
    br = t;
  }
}
function $s() {
  try {
    Ls();
  } catch (e) {
    xt(e, vn);
  }
}
let at = null;
function Yn(e) {
  var t = e.length;
  if (t !== 0) {
    for (var r = 0; r < t; ) {
      var n = e[r++];
      if ((n.f & (Ye | ve)) === 0 && Rr(n) && (at = /* @__PURE__ */ new Set(), cr(n), n.deps === null && n.first === null && n.nodes === null && n.teardown === null && n.ac === null && Ni(n), at?.size > 0)) {
        qt.clear();
        for (const i of at) {
          if ((i.f & (Ye | ve)) !== 0) continue;
          const s = [i];
          let l = i.parent;
          for (; l !== null; )
            at.has(l) && (at.delete(l), s.push(l)), l = l.parent;
          for (let u = s.length - 1; u >= 0; u--) {
            const f = s[u];
            (f.f & (Ye | ve)) === 0 && cr(f);
          }
        }
        at.clear();
      }
    }
    at = null;
  }
}
function bi(e, t, r, n) {
  if (!r.has(e) && (r.add(e), e.reactions !== null))
    for (const i of e.reactions) {
      const s = i.f;
      (s & fe) !== 0 ? bi(
        /** @type {Derived} */
        i,
        t,
        r,
        n
      ) : (s & (er | Ve)) !== 0 && (s & le) === 0 && Cn(i, t, n) && (K(i, le), Mn(
        /** @type {Effect} */
        i
      ));
    }
}
function Cn(e, t, r) {
  const n = r.get(e);
  if (n !== void 0) return n;
  if (e.deps !== null)
    for (const i of e.deps) {
      if (Bt.call(t, i))
        return !0;
      if ((i.f & fe) !== 0 && Cn(
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
function Mn(e) {
  T.schedule(e);
}
function xi(e, t) {
  if (!((e.f & We) !== 0 && (e.f & te) !== 0)) {
    (e.f & le) !== 0 ? t.d.push(e) : (e.f & Xe) !== 0 && t.m.push(e), K(e, te);
    for (var r = e.first; r !== null; )
      xi(r, t), r = r.next;
  }
}
function yi(e) {
  K(e, te);
  for (var t = e.first; t !== null; )
    yi(t), t = t.next;
}
function Xs(e) {
  let t = 0, r = Wt(0), n;
  return () => {
    Pn() && (o(r), Oi(() => (t === 0 && (n = Nn(() => e(() => xr(r)))), t += 1, () => {
      Ht(() => {
        t -= 1, t === 0 && (n?.(), n = void 0, xr(r));
      });
    })));
  };
}
var ea = lr | dr;
function ta(e, t, r, n) {
  new ra(e, t, r, n);
}
var Le, kn, Fe, It, ge, Oe, de, ke, lt, zt, bt, ar, Sr, Cr, ft, Kr, J, na, ia, sa, gn, jr, Br, mn, bn;
class ra {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(t, r, n, i) {
    M(this, J);
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
    M(this, Le);
    /** @type {TemplateNode | null} */
    M(this, kn, null);
    /** @type {BoundaryProps} */
    M(this, Fe);
    /** @type {((anchor: Node) => void)} */
    M(this, It);
    /** @type {Effect} */
    M(this, ge);
    /** @type {Effect | null} */
    M(this, Oe, null);
    /** @type {Effect | null} */
    M(this, de, null);
    /** @type {Effect | null} */
    M(this, ke, null);
    /** @type {DocumentFragment | null} */
    M(this, lt, null);
    M(this, zt, 0);
    M(this, bt, 0);
    M(this, ar, !1);
    /** @type {Set<Effect>} */
    M(this, Sr, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    M(this, Cr, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    M(this, ft, null);
    M(this, Kr, Xs(() => (E(this, ft, Wt(a(this, zt))), () => {
      E(this, ft, null);
    })));
    E(this, Le, t), E(this, Fe, r), E(this, It, (s) => {
      var l = (
        /** @type {Effect} */
        N
      );
      l.b = this, l.f |= un, n(s);
    }), this.parent = /** @type {Effect} */
    N.b, this.transform_error = i ?? this.parent?.transform_error ?? ((s) => s), E(this, ge, Ln(() => {
      I(this, J, gn).call(this);
    }, ea));
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    _i(t, a(this, Sr), a(this, Cr));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!a(this, Fe).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  update_pending_count(t, r) {
    I(this, J, mn).call(this, t, r), E(this, zt, a(this, zt) + t), !(!a(this, ft) || a(this, ar)) && (E(this, ar, !0), Ht(() => {
      E(this, ar, !1), a(this, ft) && ur(a(this, ft), a(this, zt));
    }));
  }
  get_effect_pending() {
    return a(this, Kr).call(this), o(
      /** @type {Source<number>} */
      a(this, ft)
    );
  }
  /** @param {unknown} error */
  error(t) {
    if (!a(this, Fe).onerror && !a(this, Fe).failed)
      throw t;
    T?.is_fork ? (a(this, Oe) && T.skip_effect(a(this, Oe)), a(this, de) && T.skip_effect(a(this, de)), a(this, ke) && T.skip_effect(a(this, ke)), T.on_fork_commit(() => {
      I(this, J, bn).call(this, t);
    })) : I(this, J, bn).call(this, t);
  }
}
Le = new WeakMap(), kn = new WeakMap(), Fe = new WeakMap(), It = new WeakMap(), ge = new WeakMap(), Oe = new WeakMap(), de = new WeakMap(), ke = new WeakMap(), lt = new WeakMap(), zt = new WeakMap(), bt = new WeakMap(), ar = new WeakMap(), Sr = new WeakMap(), Cr = new WeakMap(), ft = new WeakMap(), Kr = new WeakMap(), J = new WeakSet(), na = function() {
  try {
    E(this, Oe, Ne(() => a(this, It).call(this, a(this, Le))));
  } catch (t) {
    this.error(t);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
ia = function(t) {
  const r = a(this, Fe).failed;
  r && E(this, ke, Ne(() => {
    r(
      a(this, Le),
      () => t,
      () => () => {
      }
    );
  }));
}, sa = function() {
  const t = a(this, Fe).pending;
  t && (this.is_pending = !0, E(this, de, Ne(() => t(a(this, Le)))), Ht(() => {
    var r = E(this, lt, document.createDocumentFragment()), n = kt();
    r.append(n), E(this, Oe, I(this, J, Br).call(this, () => Ne(() => a(this, It).call(this, n)))), a(this, bt) === 0 && (a(this, Le).before(r), E(this, lt, null), Vt(
      /** @type {Effect} */
      a(this, de),
      () => {
        E(this, de, null);
      }
    ), I(this, J, jr).call(
      this,
      /** @type {Batch} */
      T
    ));
  }));
}, gn = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), E(this, bt, 0), E(this, zt, 0), E(this, Oe, Ne(() => {
      a(this, It).call(this, a(this, Le));
    })), a(this, bt) > 0) {
      var t = E(this, lt, document.createDocumentFragment());
      Dn(a(this, Oe), t);
      const r = (
        /** @type {(anchor: Node) => void} */
        a(this, Fe).pending
      );
      E(this, de, Ne(() => r(a(this, Le))));
    } else
      I(this, J, jr).call(
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
  this.is_pending = !1, t.transfer_effects(a(this, Sr), a(this, Cr));
}, /**
 * @template T
 * @param {() => T} fn
 */
Br = function(t) {
  var r = N, n = F, i = Se;
  et(a(this, ge)), je(a(this, ge)), fr(a(this, ge).ctx);
  try {
    return Yt.ensure(), t();
  } catch (s) {
    return hi(s), null;
  } finally {
    et(r), je(n), fr(i);
  }
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 * @param {Batch} batch
 */
mn = function(t, r) {
  var n;
  if (!this.has_pending_snippet()) {
    this.parent && I(n = this.parent, J, mn).call(n, t, r);
    return;
  }
  E(this, bt, a(this, bt) + t), a(this, bt) === 0 && (I(this, J, jr).call(this, r), a(this, de) && Vt(a(this, de), () => {
    E(this, de, null);
  }), a(this, lt) && (a(this, Le).before(a(this, lt)), E(this, lt, null)));
}, /**
 * @param {unknown} error
 */
bn = function(t) {
  a(this, Oe) && (be(a(this, Oe)), E(this, Oe, null)), a(this, de) && (be(a(this, de)), E(this, de, null)), a(this, ke) && (be(a(this, ke)), E(this, ke, null));
  var r = a(this, Fe).onerror;
  let n = a(this, Fe).failed;
  var i = !1, s = !1;
  const l = () => {
    if (i) {
      Gs();
      return;
    }
    i = !0, s && Ns(), a(this, ke) !== null && Vt(a(this, ke), () => {
      E(this, ke, null);
    }), I(this, J, Br).call(this, () => {
      I(this, J, gn).call(this);
    });
  }, u = (f) => {
    try {
      s = !0, r?.(f, l), s = !1;
    } catch (d) {
      xt(d, a(this, ge) && a(this, ge).parent);
    }
    n && E(this, ke, I(this, J, Br).call(this, () => {
      try {
        return Ne(() => {
          var d = (
            /** @type {Effect} */
            N
          );
          d.b = this, d.f |= un, n(
            a(this, Le),
            () => f,
            () => l
          );
        });
      } catch (d) {
        return xt(
          d,
          /** @type {Effect} */
          a(this, ge).parent
        ), null;
      }
    }));
  };
  Ht(() => {
    var f;
    try {
      f = this.transform_error(t);
    } catch (d) {
      xt(d, a(this, ge) && a(this, ge).parent);
      return;
    }
    f !== null && typeof f == "object" && typeof /** @type {any} */
    f.then == "function" ? f.then(
      u,
      /** @param {unknown} e */
      (d) => xt(d, a(this, ge) && a(this, ge).parent)
    ) : u(f);
  });
};
function aa(e, t, r, n) {
  const i = An;
  var s = e.filter((v) => !v.settled);
  if (r.length === 0 && s.length === 0) {
    n(t.map(i));
    return;
  }
  var l = (
    /** @type {Effect} */
    N
  ), u = oa(), f = s.length === 1 ? s[0].promise : s.length > 1 ? Promise.all(s.map((v) => v.promise)) : null;
  function d(v) {
    if ((l.f & Ye) === 0) {
      u();
      try {
        n(v);
      } catch (x) {
        xt(x, l);
      }
      Ur();
    }
  }
  var c = wi();
  if (r.length === 0) {
    f.then(() => d(t.map(i))).finally(c);
    return;
  }
  function p() {
    Promise.all(r.map((v) => /* @__PURE__ */ la(v))).then((v) => d([...t.map(i), ...v])).catch((v) => xt(v, l)).finally(c);
  }
  f ? f.then(() => {
    u(), p(), Ur();
  }) : p();
}
function oa() {
  var e = (
    /** @type {Effect} */
    N
  ), t = F, r = Se, n = (
    /** @type {Batch} */
    T
  );
  return function(s = !0) {
    et(e), je(t), fr(r), s && (e.f & Ye) === 0 && (n?.activate(), n?.apply());
  };
}
function Ur(e = !0) {
  et(null), je(null), fr(null), e && T?.deactivate();
}
function wi() {
  var e = (
    /** @type {Effect} */
    N
  ), t = (
    /** @type {Boundary} */
    e.b
  ), r = (
    /** @type {Batch} */
    T
  ), n = t.is_rendered();
  return t.update_pending_count(1, r), r.increment(n, e), () => {
    t.update_pending_count(-1, r), r.decrement(n, e);
  };
}
// @__NO_SIDE_EFFECTS__
function An(e) {
  var t = fe | le;
  return N !== null && (N.f |= dr), {
    ctx: Se,
    deps: null,
    effects: null,
    equals: li,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      ee
    ),
    wv: 0,
    parent: N,
    ac: null
  };
}
const Pr = Symbol("obsolete");
// @__NO_SIDE_EFFECTS__
function la(e, t, r) {
  let n = (
    /** @type {Effect | null} */
    N
  );
  n === null && Ms();
  var i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), s = Wt(
    /** @type {V} */
    ee
  ), l = !F, u = /* @__PURE__ */ new Set();
  return Ea(() => {
    var f = (
      /** @type {Effect} */
      N
    ), d = ii();
    i = d.promise;
    try {
      Promise.resolve(e()).then(d.resolve, (x) => {
        x !== $r && d.reject(x);
      }).finally(Ur);
    } catch (x) {
      d.reject(x), Ur();
    }
    var c = (
      /** @type {Batch} */
      T
    );
    if (l) {
      if ((f.f & Kt) !== 0)
        var p = wi();
      if (
        /** @type {Boundary} */
        n.b.is_rendered()
      )
        c.async_deriveds.get(f)?.reject(Pr);
      else
        for (const x of u.values())
          x.reject(Pr);
      u.add(d), c.async_deriveds.set(f, d);
    }
    const v = (x, m = void 0) => {
      p?.(), u.delete(d), m !== Pr && (c.activate(), m ? (s.f |= wt, ur(s, m)) : ((s.f & wt) !== 0 && (s.f ^= wt), ur(s, x)), c.deactivate());
    };
    d.promise.then(v, (x) => v(null, x || "unknown"));
  }), Li(() => {
    for (const f of u)
      f.reject(Pr);
  }), new Promise((f) => {
    function d(c) {
      function p() {
        c === i ? f(s) : d(i);
      }
      c.then(p, p);
    }
    d(i);
  });
}
// @__NO_SIDE_EFFECTS__
function Rt(e) {
  const t = /* @__PURE__ */ An(e);
  return ji(t), t;
}
// @__NO_SIDE_EFFECTS__
function fa(e) {
  const t = /* @__PURE__ */ An(e);
  return t.equals = fi, t;
}
function ua(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var r = 0; r < t.length; r += 1)
      be(
        /** @type {Effect} */
        t[r]
      );
  }
}
function Tn(e) {
  var t, r = N, n = e.parent;
  if (!St && n !== null && e.v !== ee && // if it was never evaluated before, it's guaranteed to fail downstream, so we try to execute instead
  (n.f & (Ye | ve)) !== 0)
    return Vs(), e.v;
  et(n);
  try {
    e.f &= ~Gt, ua(e), t = Vi(e);
  } finally {
    et(r);
  }
  return t;
}
function ki(e) {
  var t = Tn(e);
  if (!e.equals(t) && (e.wv = Hi(), (!T?.is_fork || e.deps === null) && (T !== null ? (T.capture(e, t, !0), dn?.capture(e, t, !0)) : e.v = t, e.deps === null))) {
    K(e, te);
    return;
  }
  St || (Ue !== null ? (Pn() || T?.is_fork) && Ue.set(e, t) : Sn(e));
}
function ca(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      (t.teardown || t.ac) && (t.teardown?.(), t.ac?.abort($r), t.fn !== null && (t.teardown = xs), t.ac = null, wr(t, 0), Fn(t));
}
function Ei(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      t.teardown && t.fn !== null && cr(t);
}
let Gr = /* @__PURE__ */ new Set();
const qt = /* @__PURE__ */ new Map();
let Si = !1;
function Wt(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: li,
    rv: 0,
    wv: 0
  };
  return r;
}
// @__NO_SIDE_EFFECTS__
function V(e, t) {
  const r = Wt(e);
  return ji(r), r;
}
// @__NO_SIDE_EFFECTS__
function da(e, t = !1, r = !0) {
  const n = Wt(e);
  return t || (n.equals = fi), n;
}
function _(e, t, r = !1) {
  F !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Ge || (F.f & qr) !== 0) && di() && (F.f & (fe | Ve | er | qr)) !== 0 && (ze === null || !Bt.call(ze, e)) && Ds();
  let n = r ? De(t) : t;
  return ur(e, n, Ir);
}
function ur(e, t, r = null) {
  if (!e.equals(t)) {
    qt.set(e, St ? t : e.v);
    var n = Yt.ensure();
    if (n.capture(e, t), (e.f & fe) !== 0) {
      const i = (
        /** @type {Derived} */
        e
      );
      (e.f & le) !== 0 && Tn(i), Ue === null && Sn(i);
    }
    e.wv = Hi(), Ci(e, le, r), N !== null && (N.f & te) !== 0 && (N.f & (We | Et)) === 0 && (Pe === null ? Ma([e]) : Pe.push(e)), !n.is_fork && Gr.size > 0 && !Si && va();
  }
  return t;
}
function va() {
  Si = !1;
  for (const e of Gr) {
    (e.f & te) !== 0 && K(e, Xe);
    let t;
    try {
      t = Rr(e);
    } catch {
      t = !0;
    }
    t && cr(e);
  }
  Gr.clear();
}
function xr(e) {
  _(e, e.v + 1);
}
function Ci(e, t, r) {
  var n = e.reactions;
  if (n !== null)
    for (var i = n.length, s = 0; s < i; s++) {
      var l = n[s], u = l.f, f = (u & le) === 0;
      if (f && K(l, t), (u & qr) !== 0)
        Gr.add(
          /** @type {Effect} */
          l
        );
      else if ((u & fe) !== 0) {
        var d = (
          /** @type {Derived} */
          l
        );
        Ue?.delete(d), (u & Gt) === 0 && (u & Ie && (N === null || (N.f & Vr) === 0) && (l.f |= Gt), Ci(d, Xe, r));
      } else if (f) {
        var c = (
          /** @type {Effect} */
          l
        );
        (u & Ve) !== 0 && at !== null && at.add(c), r !== null ? r.push(c) : Mn(c);
      }
    }
}
function De(e) {
  if (typeof e != "object" || e === null || mr in e)
    return e;
  const t = bs(e);
  if (t !== gs && t !== ms)
    return e;
  var r = /* @__PURE__ */ new Map(), n = En(e), i = /* @__PURE__ */ V(0), s = Ut, l = (u) => {
    if (Ut === s)
      return u();
    var f = F, d = Ut;
    je(null), Zn(s);
    var c = u();
    return je(f), Zn(d), c;
  };
  return n && r.set("length", /* @__PURE__ */ V(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(u, f, d) {
        (!("value" in d) || d.configurable === !1 || d.enumerable === !1 || d.writable === !1) && Fs();
        var c = r.get(f);
        return c === void 0 ? l(() => {
          var p = /* @__PURE__ */ V(d.value);
          return r.set(f, p), p;
        }) : _(c, d.value, !0), !0;
      },
      deleteProperty(u, f) {
        var d = r.get(f);
        if (d === void 0) {
          if (f in u) {
            const c = l(() => /* @__PURE__ */ V(ee));
            r.set(f, c), xr(i);
          }
        } else
          _(d, ee), xr(i);
        return !0;
      },
      get(u, f, d) {
        if (f === mr)
          return e;
        var c = r.get(f), p = f in u;
        if (c === void 0 && (!p || gr(u, f)?.writable) && (c = l(() => {
          var x = De(p ? u[f] : ee), m = /* @__PURE__ */ V(x);
          return m;
        }), r.set(f, c)), c !== void 0) {
          var v = o(c);
          return v === ee ? void 0 : v;
        }
        return Reflect.get(u, f, d);
      },
      getOwnPropertyDescriptor(u, f) {
        var d = Reflect.getOwnPropertyDescriptor(u, f);
        if (d && "value" in d) {
          var c = r.get(f);
          c && (d.value = o(c));
        } else if (d === void 0) {
          var p = r.get(f), v = p?.v;
          if (p !== void 0 && v !== ee)
            return {
              enumerable: !0,
              configurable: !0,
              value: v,
              writable: !0
            };
        }
        return d;
      },
      has(u, f) {
        if (f === mr)
          return !0;
        var d = r.get(f), c = d !== void 0 && d.v !== ee || Reflect.has(u, f);
        if (d !== void 0 || N !== null && (!c || gr(u, f)?.writable)) {
          d === void 0 && (d = l(() => {
            var v = c ? De(u[f]) : ee, x = /* @__PURE__ */ V(v);
            return x;
          }), r.set(f, d));
          var p = o(d);
          if (p === ee)
            return !1;
        }
        return c;
      },
      set(u, f, d, c) {
        var p = r.get(f), v = f in u;
        if (n && f === "length")
          for (var x = d; x < /** @type {Source<number>} */
          p.v; x += 1) {
            var m = r.get(x + "");
            m !== void 0 ? _(m, ee) : x in u && (m = l(() => /* @__PURE__ */ V(ee)), r.set(x + "", m));
          }
        if (p === void 0)
          (!v || gr(u, f)?.writable) && (p = l(() => /* @__PURE__ */ V(void 0)), _(p, De(d)), r.set(f, p));
        else {
          v = p.v !== ee;
          var D = l(() => De(d));
          _(p, D);
        }
        var g = Reflect.getOwnPropertyDescriptor(u, f);
        if (g?.set && g.set.call(c, d), !v) {
          if (n && typeof f == "string") {
            var R = (
              /** @type {Source<number>} */
              r.get("length")
            ), O = Number(f);
            Number.isInteger(O) && O >= R.v && _(R, O + 1);
          }
          xr(i);
        }
        return !0;
      },
      ownKeys(u) {
        o(i);
        var f = Reflect.ownKeys(u).filter((p) => {
          var v = r.get(p);
          return v === void 0 || v.v !== ee;
        });
        for (var [d, c] of r)
          c.v !== ee && !(d in u) && f.push(d);
        return f;
      },
      setPrototypeOf() {
        Os();
      }
    }
  );
}
function Wn(e) {
  try {
    if (e !== null && typeof e == "object" && mr in e)
      return e[mr];
  } catch {
  }
  return e;
}
function ha(e, t) {
  return Object.is(Wn(e), Wn(t));
}
var Kn, Mi, Ai, Ti;
function pa() {
  if (Kn === void 0) {
    Kn = window, Mi = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, r = Text.prototype;
    Ai = gr(t, "firstChild").get, Ti = gr(t, "nextSibling").get, Vn(e) && (e[cn] = void 0, e[Dr] = null, e[Ss] = void 0, e.__e = void 0), Vn(r) && (r[hr] = void 0);
  }
}
function kt(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function yt(e) {
  return (
    /** @type {TemplateNode | null} */
    Ai.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function Tr(e) {
  return (
    /** @type {TemplateNode | null} */
    Ti.call(e)
  );
}
function b(e, t) {
  return /* @__PURE__ */ yt(e);
}
function Lr(e, t = !1) {
  {
    var r = /* @__PURE__ */ yt(e);
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ Tr(r) : r;
  }
}
function y(e, t = 1, r = !1) {
  let n = e;
  for (; t--; )
    n = /** @type {TemplateNode} */
    /* @__PURE__ */ Tr(n);
  return n;
}
function _a(e) {
  e.textContent = "";
}
function Ri() {
  return !1;
}
function ga(e, t, r) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElementNS(oi, e, void 0)
  );
}
let Jn = !1;
function ma() {
  Jn || (Jn = !0, document.addEventListener(
    "reset",
    (e) => {
      Promise.resolve().then(() => {
        if (!e.defaultPrevented)
          for (
            const t of
            /**@type {HTMLFormElement} */
            e.target.elements
          )
            t[Nr]?.();
      });
    },
    // In the capture phase to guarantee we get noticed of it (no possibility of stopPropagation)
    { capture: !0 }
  ));
}
function Rn(e) {
  var t = F, r = N;
  je(null), et(null);
  try {
    return e();
  } finally {
    je(t), et(r);
  }
}
function Pi(e, t, r, n = r) {
  e.addEventListener(t, () => Rn(r));
  const i = (
    /** @type {any} */
    e[Nr]
  );
  i ? e[Nr] = () => {
    i(), n(!0);
  } : e[Nr] = () => n(!0), ma();
}
function ba(e) {
  N === null && (F === null && Ps(), Rs()), St && Ts();
}
function xa(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function ut(e, t) {
  var r = N;
  r !== null && (r.f & ve) !== 0 && (e |= ve);
  var n = {
    ctx: Se,
    deps: null,
    nodes: null,
    f: e | le | Ie,
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
  if ((e & or) !== 0)
    Xt !== null ? Xt.push(n) : Yt.ensure().schedule(n);
  else if (t !== null) {
    try {
      cr(n);
    } catch (l) {
      throw be(n), l;
    }
    i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && // either `null`, or a singular child
    (i.f & dr) === 0 && (i = i.first, (e & Ve) !== 0 && (e & lr) !== 0 && i !== null && (i.f |= lr));
  }
  if (i !== null && (i.parent = r, r !== null && xa(i, r), F !== null && (F.f & fe) !== 0 && (e & Et) === 0)) {
    var s = (
      /** @type {Derived} */
      F
    );
    (s.effects ?? (s.effects = [])).push(i);
  }
  return n;
}
function Pn() {
  return F !== null && !Ge;
}
function Li(e) {
  const t = ut(Zr, null);
  return K(t, te), t.teardown = e, t;
}
function ya(e) {
  ba();
  var t = (
    /** @type {Effect} */
    N.f
  ), r = !F && (t & We) !== 0 && (t & Kt) === 0;
  if (r) {
    var n = (
      /** @type {ComponentContext} */
      Se
    );
    (n.e ?? (n.e = [])).push(e);
  } else
    return Fi(e);
}
function Fi(e) {
  return ut(or | Es, e);
}
function wa(e) {
  Yt.ensure();
  const t = ut(Et | dr, e);
  return (r = {}) => new Promise((n) => {
    r.outro ? Vt(t, () => {
      be(t), n(void 0);
    }) : (be(t), n(void 0));
  });
}
function ka(e) {
  return ut(or, e);
}
function Ea(e) {
  return ut(er | dr, e);
}
function Oi(e, t = 0) {
  return ut(Zr | t, e);
}
function W(e, t = [], r = [], n = []) {
  aa(n, t, r, (i) => {
    ut(Zr, () => e(...i.map(o)));
  });
}
function Ln(e, t = 0) {
  var r = ut(Ve | t, e);
  return r;
}
function Ne(e) {
  return ut(We | dr, e);
}
function Di(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = St, n = F;
    Qn(!0), je(null);
    try {
      t.call(null);
    } finally {
      Qn(r), je(n);
    }
  }
}
function Fn(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    const i = r.ac;
    i !== null && Rn(() => {
      i.abort($r);
    });
    var n = r.next;
    (r.f & Et) !== 0 ? r.parent = null : be(r, t), r = n;
  }
}
function Sa(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & We) === 0 && be(t), t = r;
  }
}
function be(e, t = !0) {
  var r = !1;
  (t || (e.f & ks) !== 0) && e.nodes !== null && e.nodes.end !== null && (Ca(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), r = !0), K(e, Un), Fn(e, t && !r), wr(e, 0);
  var n = e.nodes && e.nodes.t;
  if (n !== null)
    for (const s of n)
      s.stop();
  Di(e), e.f ^= Un, e.f |= Ye;
  var i = e.parent;
  i !== null && i.first !== null && Ni(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function Ca(e, t) {
  for (; e !== null; ) {
    var r = e === t ? null : /* @__PURE__ */ Tr(e);
    e.remove(), e = r;
  }
}
function Ni(e) {
  var t = e.parent, r = e.prev, n = e.next;
  r !== null && (r.next = n), n !== null && (n.prev = r), t !== null && (t.first === e && (t.first = n), t.last === e && (t.last = r));
}
function Vt(e, t, r = !0) {
  var n = [];
  Ii(e, n, !0);
  var i = () => {
    r && be(e), t && t();
  }, s = n.length;
  if (s > 0) {
    var l = () => --s || i();
    for (var u of n)
      u.out(l);
  } else
    i();
}
function Ii(e, t, r) {
  if ((e.f & ve) === 0) {
    e.f ^= ve;
    var n = e.nodes && e.nodes.t;
    if (n !== null)
      for (const u of n)
        (u.is_global || r) && t.push(u);
    for (var i = e.first; i !== null; ) {
      var s = i.next;
      if ((i.f & Et) === 0) {
        var l = (i.f & lr) !== 0 || // If this is a branch effect without a block effect parent,
        // it means the parent block effect was pruned. In that case,
        // transparency information was transferred to the branch effect.
        (i.f & We) !== 0 && (e.f & Ve) !== 0;
        Ii(i, t, l ? r : !1);
      }
      i = s;
    }
  }
}
function On(e) {
  zi(e, !0);
}
function zi(e, t) {
  if ((e.f & ve) !== 0) {
    e.f ^= ve, (e.f & te) === 0 && (K(e, le), Yt.ensure().schedule(e));
    for (var r = e.first; r !== null; ) {
      var n = r.next, i = (r.f & lr) !== 0 || (r.f & We) !== 0;
      zi(r, i ? t : !1), r = n;
    }
    var s = e.nodes && e.nodes.t;
    if (s !== null)
      for (const l of s)
        (l.is_global || t) && l.in();
  }
}
function Dn(e, t) {
  if (e.nodes)
    for (var r = e.nodes.start, n = e.nodes.end; r !== null; ) {
      var i = r === n ? null : /* @__PURE__ */ Tr(r);
      t.append(r), r = i;
    }
}
let Hr = !1, St = !1;
function Qn(e) {
  St = e;
}
let F = null, Ge = !1;
function je(e) {
  F = e;
}
let N = null;
function et(e) {
  N = e;
}
let ze = null;
function ji(e) {
  F !== null && (ze === null ? ze = [e] : ze.push(e));
}
let me = null, ye = 0, Pe = null;
function Ma(e) {
  Pe = e;
}
let Bi = 1, Lt = 0, Ut = Lt;
function Zn(e) {
  Ut = e;
}
function Hi() {
  return ++Bi;
}
function Rr(e) {
  var t = e.f;
  if ((t & le) !== 0)
    return !0;
  if (t & fe && (e.f &= ~Gt), (t & Xe) !== 0) {
    for (var r = (
      /** @type {Value[]} */
      e.deps
    ), n = r.length, i = 0; i < n; i++) {
      var s = r[i];
      if (Rr(
        /** @type {Derived} */
        s
      ) && ki(
        /** @type {Derived} */
        s
      ), s.wv > e.wv)
        return !0;
    }
    (t & Ie) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    Ue === null && K(e, te);
  }
  return !1;
}
function qi(e, t, r = !0) {
  var n = e.reactions;
  if (n !== null && !(ze !== null && Bt.call(ze, e)))
    for (var i = 0; i < n.length; i++) {
      var s = n[i];
      (s.f & fe) !== 0 ? qi(
        /** @type {Derived} */
        s,
        t,
        !1
      ) : t === s && (r ? K(s, le) : (s.f & te) !== 0 && K(s, Xe), Mn(
        /** @type {Effect} */
        s
      ));
    }
}
function Vi(e) {
  var D;
  var t = me, r = ye, n = Pe, i = F, s = ze, l = Se, u = Ge, f = Ut, d = e.f;
  me = /** @type {null | Value[]} */
  null, ye = 0, Pe = null, F = (d & (We | Et)) === 0 ? e : null, ze = null, fr(e.ctx), Ge = !1, Ut = ++Lt, e.ac !== null && (Rn(() => {
    e.ac.abort($r);
  }), e.ac = null);
  try {
    e.f |= Vr;
    var c = (
      /** @type {Function} */
      e.fn
    ), p = c();
    e.f |= Kt;
    var v = e.deps, x = T?.is_fork;
    if (me !== null) {
      var m;
      if (x || wr(e, ye), v !== null && ye > 0)
        for (v.length = ye + me.length, m = 0; m < me.length; m++)
          v[ye + m] = me[m];
      else
        e.deps = v = me;
      if (Pn() && (e.f & Ie) !== 0)
        for (m = ye; m < v.length; m++)
          ((D = v[m]).reactions ?? (D.reactions = [])).push(e);
    } else !x && v !== null && ye < v.length && (wr(e, ye), v.length = ye);
    if (di() && Pe !== null && !Ge && v !== null && (e.f & (fe | Xe | le)) === 0)
      for (m = 0; m < /** @type {Source[]} */
      Pe.length; m++)
        qi(
          Pe[m],
          /** @type {Effect} */
          e
        );
    if (i !== null && i !== e) {
      if (Lt++, i.deps !== null)
        for (let g = 0; g < r; g += 1)
          i.deps[g].rv = Lt;
      if (t !== null)
        for (const g of t)
          g.rv = Lt;
      Pe !== null && (n === null ? n = Pe : n.push(.../** @type {Source[]} */
      Pe));
    }
    return (e.f & wt) !== 0 && (e.f ^= wt), p;
  } catch (g) {
    return hi(g);
  } finally {
    e.f ^= Vr, me = t, ye = r, Pe = n, F = i, ze = s, fr(l), Ge = u, Ut = f;
  }
}
function Aa(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var n = ps.call(r, e);
    if (n !== -1) {
      var i = r.length - 1;
      i === 0 ? r = t.reactions = null : (r[n] = r[i], r.pop());
    }
  }
  if (r === null && (t.f & fe) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (me === null || !Bt.call(me, t))) {
    var s = (
      /** @type {Derived} */
      t
    );
    (s.f & Ie) !== 0 && (s.f ^= Ie, s.f &= ~Gt), s.v !== ee && Sn(s), ca(s), wr(s, 0);
  }
}
function wr(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var n = t; n < r.length; n++)
      Aa(e, r[n]);
}
function cr(e) {
  var t = e.f;
  if ((t & Ye) === 0) {
    K(e, te);
    var r = N, n = Hr;
    N = e, Hr = !0;
    try {
      (t & (Ve | si)) !== 0 ? Sa(e) : Fn(e), Di(e);
      var i = Vi(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = Bi;
      var s;
    } finally {
      Hr = n, N = r;
    }
  }
}
async function Ta() {
  await Promise.resolve(), Zs();
}
function o(e) {
  var t = e.f, r = (t & fe) !== 0;
  if (F !== null && !Ge) {
    var n = N !== null && (N.f & Ye) !== 0;
    if (!n && (ze === null || !Bt.call(ze, e))) {
      var i = F.deps;
      if ((F.f & Vr) !== 0)
        e.rv < Lt && (e.rv = Lt, me === null && i !== null && i[ye] === e ? ye++ : me === null ? me = [e] : me.push(e));
      else {
        F.deps ?? (F.deps = []), Bt.call(F.deps, e) || F.deps.push(e);
        var s = e.reactions;
        s === null ? e.reactions = [F] : Bt.call(s, F) || s.push(F);
      }
    }
  }
  if (St && qt.has(e))
    return qt.get(e);
  if (r) {
    var l = (
      /** @type {Derived} */
      e
    );
    if (St) {
      var u = l.v;
      return ((l.f & te) === 0 && l.reactions !== null || Gi(l)) && (u = Tn(l)), qt.set(l, u), u;
    }
    var f = (l.f & Ie) === 0 && !Ge && F !== null && (Hr || (F.f & Ie) !== 0), d = (l.f & Kt) === 0;
    Rr(l) && (f && (l.f |= Ie), ki(l)), f && !d && (Ei(l), Ui(l));
  }
  if (Ue?.has(e))
    return Ue.get(e);
  if ((e.f & wt) !== 0)
    throw e.v;
  return e.v;
}
function Ui(e) {
  if (e.f |= Ie, e.deps !== null)
    for (const t of e.deps)
      (t.reactions ?? (t.reactions = [])).push(e), (t.f & fe) !== 0 && (t.f & Ie) === 0 && (Ei(
        /** @type {Derived} */
        t
      ), Ui(
        /** @type {Derived} */
        t
      ));
}
function Gi(e) {
  if (e.v === ee) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (qt.has(t) || (t.f & fe) !== 0 && Gi(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function Nn(e) {
  var t = Ge;
  try {
    return Ge = !0, e();
  } finally {
    Ge = t;
  }
}
const Ra = ["touchstart", "touchmove"];
function Pa(e) {
  return Ra.includes(e);
}
const Ft = Symbol("events"), Yi = /* @__PURE__ */ new Set(), xn = /* @__PURE__ */ new Set();
function se(e, t, r) {
  (t[Ft] ?? (t[Ft] = {}))[e] = r;
}
function La(e) {
  for (var t = 0; t < e.length; t++)
    Yi.add(e[t]);
  for (var r of xn)
    r(e);
}
let $n = null;
function Xn(e) {
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), n = e.type, i = e.composedPath?.() || [], s = (
    /** @type {null | Element} */
    i[0] || e.target
  );
  $n = e;
  var l = 0, u = $n === e && e[Ft];
  if (u) {
    var f = i.indexOf(u);
    if (f !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e[Ft] = t;
      return;
    }
    var d = i.indexOf(t);
    if (d === -1)
      return;
    f <= d && (l = f);
  }
  if (s = /** @type {Element} */
  i[l] || e.target, s !== t) {
    _s(e, "currentTarget", {
      configurable: !0,
      get() {
        return s || r;
      }
    });
    var c = F, p = N;
    je(null), et(null);
    try {
      for (var v, x = []; s !== null; ) {
        var m = s.assignedSlot || s.parentNode || /** @type {any} */
        s.host || null;
        try {
          var D = s[Ft]?.[n];
          D != null && (!/** @type {any} */
          s.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === s) && D.call(s, e);
        } catch (g) {
          v ? x.push(g) : v = g;
        }
        if (e.cancelBubble || m === t || m === null)
          break;
        s = m;
      }
      if (v) {
        for (let g of x)
          queueMicrotask(() => {
            throw g;
          });
        throw v;
      }
    } finally {
      e[Ft] = t, delete e.currentTarget, je(c), et(p);
    }
  }
}
const Fa = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (e) => e
  })
);
function Oa(e) {
  return (
    /** @type {string} */
    Fa?.createHTML(e) ?? e
  );
}
function Wi(e) {
  var t = ga("template");
  return t.innerHTML = Oa(e.replaceAll("<!>", "<!---->")), t.content;
}
function Yr(e, t) {
  var r = (
    /** @type {Effect} */
    N
  );
  r.nodes === null && (r.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function P(e, t) {
  var r = (t & Hs) !== 0, n = (t & qs) !== 0, i, s = !e.startsWith("<!>");
  return () => {
    i === void 0 && (i = Wi(s ? e : "<!>" + e), r || (i = /** @type {TemplateNode} */
    /* @__PURE__ */ yt(i)));
    var l = (
      /** @type {TemplateNode} */
      n || Mi ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (r) {
      var u = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ yt(l)
      ), f = (
        /** @type {TemplateNode} */
        l.lastChild
      );
      Yr(u, f);
    } else
      Yr(l, l);
    return l;
  };
}
// @__NO_SIDE_EFFECTS__
function Da(e, t, r = "svg") {
  var n = !e.startsWith("<!>"), i = `<${r}>${n ? e : "<!>" + e}</${r}>`, s;
  return () => {
    if (!s) {
      var l = (
        /** @type {DocumentFragment} */
        Wi(i)
      ), u = (
        /** @type {Element} */
        /* @__PURE__ */ yt(l)
      );
      for (s = document.createDocumentFragment(); /* @__PURE__ */ yt(u); )
        s.appendChild(
          /** @type {TemplateNode} */
          /* @__PURE__ */ yt(u)
        );
    }
    var f = (
      /** @type {TemplateNode} */
      s.cloneNode(!0)
    );
    {
      var d = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ yt(f)
      ), c = (
        /** @type {TemplateNode} */
        f.lastChild
      );
      Yr(d, c);
    }
    return f;
  };
}
// @__NO_SIDE_EFFECTS__
function Na(e, t) {
  return /* @__PURE__ */ Da(e, t, "svg");
}
function ei(e = "") {
  {
    var t = kt(e + "");
    return Yr(t, t), t;
  }
}
function S(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function U(e, t) {
  var r = t == null ? "" : typeof t == "object" ? `${t}` : t;
  r !== /** @type {any} */
  (e[hr] ?? (e[hr] = e.nodeValue)) && (e[hr] = r, e.nodeValue = `${r}`);
}
function Ia(e, t) {
  return za(e, t);
}
const Fr = /* @__PURE__ */ new Map();
function za(e, { target: t, anchor: r, props: n = {}, events: i, context: s, intro: l = !0, transformError: u }) {
  pa();
  var f = void 0, d = wa(() => {
    var c = r ?? t.appendChild(kt());
    ta(
      /** @type {TemplateNode} */
      c,
      {
        pending: () => {
        }
      },
      (x) => {
        ui({});
        var m = (
          /** @type {ComponentContext} */
          Se
        );
        s && (m.c = s), i && (n.$$events = i), f = e(x, n) || {}, ci();
      },
      u
    );
    var p = /* @__PURE__ */ new Set(), v = (x) => {
      for (var m = 0; m < x.length; m++) {
        var D = x[m];
        if (!p.has(D)) {
          p.add(D);
          var g = Pa(D);
          for (const A of [t, document]) {
            var R = Fr.get(A);
            R === void 0 && (R = /* @__PURE__ */ new Map(), Fr.set(A, R));
            var O = R.get(D);
            O === void 0 ? (A.addEventListener(D, Xn, { passive: g }), R.set(D, 1)) : R.set(D, O + 1);
          }
        }
      }
    };
    return v(Qr(Yi)), xn.add(v), () => {
      for (var x of p)
        for (const g of [t, document]) {
          var m = (
            /** @type {Map<string, number>} */
            Fr.get(g)
          ), D = (
            /** @type {number} */
            m.get(x)
          );
          --D == 0 ? (g.removeEventListener(x, Xn), m.delete(x), m.size === 0 && Fr.delete(g)) : m.set(x, D);
        }
      xn.delete(v), c !== r && c.parentNode?.removeChild(c);
    };
  });
  return yn.set(f, d), f;
}
let yn = /* @__PURE__ */ new WeakMap();
function ja(e, t) {
  const r = yn.get(e);
  return r ? (yn.delete(e), r(t)) : Promise.resolve();
}
var qe, Ze, Ee, jt, Mr, Ar, Jr;
class Ba {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, r = !0) {
    /** @type {TemplateNode} */
    _e(this, "anchor");
    /** @type {Map<Batch, Key>} */
    M(this, qe, /* @__PURE__ */ new Map());
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
    M(this, Ze, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    M(this, Ee, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    M(this, jt, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    M(this, Mr, !0);
    /**
     * @param {Batch} batch
     */
    M(this, Ar, (t) => {
      if (a(this, qe).has(t)) {
        var r = (
          /** @type {Key} */
          a(this, qe).get(t)
        ), n = a(this, Ze).get(r);
        if (n)
          On(n), a(this, jt).delete(r);
        else {
          var i = a(this, Ee).get(r);
          i && (a(this, Ze).set(r, i.effect), a(this, Ee).delete(r), i.fragment.lastChild.remove(), this.anchor.before(i.fragment), n = i.effect);
        }
        for (const [s, l] of a(this, qe)) {
          if (a(this, qe).delete(s), s === t)
            break;
          const u = a(this, Ee).get(l);
          u && (be(u.effect), a(this, Ee).delete(l));
        }
        for (const [s, l] of a(this, Ze)) {
          if (s === r || a(this, jt).has(s)) continue;
          const u = () => {
            if (Array.from(a(this, qe).values()).includes(s)) {
              var d = document.createDocumentFragment();
              Dn(l, d), d.append(kt()), a(this, Ee).set(s, { effect: l, fragment: d });
            } else
              be(l);
            a(this, jt).delete(s), a(this, Ze).delete(s);
          };
          a(this, Mr) || !n ? (a(this, jt).add(s), Vt(l, u, !1)) : u();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    M(this, Jr, (t) => {
      a(this, qe).delete(t);
      const r = Array.from(a(this, qe).values());
      for (const [n, i] of a(this, Ee))
        r.includes(n) || (be(i.effect), a(this, Ee).delete(n));
    });
    this.anchor = t, E(this, Mr, r);
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
    ), i = Ri();
    if (r && !a(this, Ze).has(t) && !a(this, Ee).has(t))
      if (i) {
        var s = document.createDocumentFragment(), l = kt();
        s.append(l), a(this, Ee).set(t, {
          effect: Ne(() => r(l)),
          fragment: s
        });
      } else
        a(this, Ze).set(
          t,
          Ne(() => r(this.anchor))
        );
    if (a(this, qe).set(n, t), i) {
      for (const [u, f] of a(this, Ze))
        u === t ? n.unskip_effect(f) : n.skip_effect(f);
      for (const [u, f] of a(this, Ee))
        u === t ? n.unskip_effect(f.effect) : n.skip_effect(f.effect);
      n.oncommit(a(this, Ar)), n.ondiscard(a(this, Jr));
    } else
      a(this, Ar).call(this, n);
  }
}
qe = new WeakMap(), Ze = new WeakMap(), Ee = new WeakMap(), jt = new WeakMap(), Mr = new WeakMap(), Ar = new WeakMap(), Jr = new WeakMap();
function X(e, t, r = !1) {
  var n = new Ba(e), i = r ? lr : 0;
  function s(l, u) {
    n.ensure(l, u);
  }
  Ln(() => {
    var l = !1;
    t((u, f = 0) => {
      l = !0, s(f, u);
    }), l || s(-1, null);
  }, i);
}
function it(e, t) {
  return t;
}
function Ha(e, t, r) {
  for (var n = [], i = t.length, s, l = t.length, u = 0; u < i; u++) {
    let p = t[u];
    Vt(
      p,
      () => {
        if (s) {
          if (s.pending.delete(p), s.done.add(p), s.pending.size === 0) {
            var v = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            wn(e, Qr(s.done)), v.delete(s), v.size === 0 && (e.outrogroups = null);
          }
        } else
          l -= 1;
      },
      !1
    );
  }
  if (l === 0) {
    var f = n.length === 0 && r !== null;
    if (f) {
      var d = (
        /** @type {Element} */
        r
      ), c = (
        /** @type {Element} */
        d.parentNode
      );
      _a(c), c.append(d), e.items.clear();
    }
    wn(e, t, !f);
  } else
    s = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ?? (e.outrogroups = /* @__PURE__ */ new Set())).add(s);
}
function wn(e, t, r = !0) {
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
      s.f |= $e;
      const l = document.createDocumentFragment();
      Dn(s, l);
    } else
      be(t[i], r);
  }
}
var ti;
function st(e, t, r, n, i, s = null) {
  var l = e, u = /* @__PURE__ */ new Map(), f = (t & ai) !== 0;
  if (f) {
    var d = (
      /** @type {Element} */
      e
    );
    l = d.appendChild(kt());
  }
  var c = null, p = /* @__PURE__ */ fa(() => {
    var A = r();
    return En(A) ? A : A == null ? [] : Qr(A);
  }), v, x = /* @__PURE__ */ new Map(), m = !0;
  function D(A) {
    (O.effect.f & Ye) === 0 && (O.pending.delete(A), O.fallback = c, qa(O, v, l, t, n), c !== null && (v.length === 0 ? (c.f & $e) === 0 ? On(c) : (c.f ^= $e, _r(c, null, l)) : Vt(c, () => {
      c = null;
    })));
  }
  function g(A) {
    O.pending.delete(A);
  }
  var R = Ln(() => {
    v = /** @type {V[]} */
    o(p);
    for (var A = v.length, re = /* @__PURE__ */ new Set(), Be = (
      /** @type {Batch} */
      T
    ), tt = Ri(), Y = 0; Y < A; Y += 1) {
      var Ce = v[Y], ct = n(Ce, Y), ne = m ? null : u.get(ct);
      ne ? (ne.v && ur(ne.v, Ce), ne.i && ur(ne.i, Y), tt && Be.unskip_effect(ne.e)) : (ne = Va(
        u,
        m ? l : ti ?? (ti = kt()),
        Ce,
        ct,
        Y,
        i,
        t,
        r
      ), m || (ne.e.f |= $e), u.set(ct, ne)), re.add(ct);
    }
    if (A === 0 && s && !c && (m ? c = Ne(() => s(l)) : (c = Ne(() => s(ti ?? (ti = kt()))), c.f |= $e)), A > re.size && As(), !m)
      if (x.set(Be, re), tt) {
        for (const [Jt, Xr] of u)
          re.has(Jt) || Be.skip_effect(Xr.e);
        Be.oncommit(D), Be.ondiscard(g);
      } else
        D(Be);
    o(p);
  }), O = { effect: R, items: u, pending: x, outrogroups: null, fallback: c };
  m = !1;
}
function vr(e) {
  for (; e !== null && (e.f & We) === 0; )
    e = e.next;
  return e;
}
function qa(e, t, r, n, i) {
  var s = (n & js) !== 0, l = t.length, u = e.items, f = vr(e.effect.first), d, c = null, p, v = [], x = [], m, D, g, R;
  if (s)
    for (R = 0; R < l; R += 1)
      m = t[R], D = i(m, R), g = /** @type {EachItem} */
      u.get(D).e, (g.f & $e) === 0 && (g.nodes?.a?.measure(), (p ?? (p = /* @__PURE__ */ new Set())).add(g));
  for (R = 0; R < l; R += 1) {
    if (m = t[R], D = i(m, R), g = /** @type {EachItem} */
    u.get(D).e, e.outrogroups !== null)
      for (const ne of e.outrogroups)
        ne.pending.delete(g), ne.done.delete(g);
    if ((g.f & ve) !== 0 && (On(g), s && (g.nodes?.a?.unfix(), (p ?? (p = /* @__PURE__ */ new Set())).delete(g))), (g.f & $e) !== 0)
      if (g.f ^= $e, g === f)
        _r(g, null, r);
      else {
        var O = c ? c.next : f;
        g === e.effect.last && (e.effect.last = g.prev), g.prev && (g.prev.next = g.next), g.next && (g.next.prev = g.prev), _t(e, c, g), _t(e, g, O), _r(g, O, r), c = g, v = [], x = [], f = vr(c.next);
        continue;
      }
    if (g !== f) {
      if (d !== void 0 && d.has(g)) {
        if (v.length < x.length) {
          var A = x[0], re;
          c = A.prev;
          var Be = v[0], tt = v[v.length - 1];
          for (re = 0; re < v.length; re += 1)
            _r(v[re], A, r);
          for (re = 0; re < x.length; re += 1)
            d.delete(x[re]);
          _t(e, Be.prev, tt.next), _t(e, c, Be), _t(e, tt, A), f = A, c = tt, R -= 1, v = [], x = [];
        } else
          d.delete(g), _r(g, f, r), _t(e, g.prev, g.next), _t(e, g, c === null ? e.effect.first : c.next), _t(e, c, g), c = g;
        continue;
      }
      for (v = [], x = []; f !== null && f !== g; )
        (d ?? (d = /* @__PURE__ */ new Set())).add(f), x.push(f), f = vr(f.next);
      if (f === null)
        continue;
    }
    (g.f & $e) === 0 && v.push(g), c = g, f = vr(g.next);
  }
  if (e.outrogroups !== null) {
    for (const ne of e.outrogroups)
      ne.pending.size === 0 && (wn(e, Qr(ne.done)), e.outrogroups?.delete(ne));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (f !== null || d !== void 0) {
    var Y = [];
    if (d !== void 0)
      for (g of d)
        (g.f & ve) === 0 && Y.push(g);
    for (; f !== null; )
      (f.f & ve) === 0 && f !== e.fallback && Y.push(f), f = vr(f.next);
    var Ce = Y.length;
    if (Ce > 0) {
      var ct = (n & ai) !== 0 && l === 0 ? r : null;
      if (s) {
        for (R = 0; R < Ce; R += 1)
          Y[R].nodes?.a?.measure();
        for (R = 0; R < Ce; R += 1)
          Y[R].nodes?.a?.fix();
      }
      Ha(e, Y, ct);
    }
  }
  s && Ht(() => {
    if (p !== void 0)
      for (g of p)
        g.nodes?.a?.apply();
  });
}
function Va(e, t, r, n, i, s, l, u) {
  var f = (l & Is) !== 0 ? (l & Bs) === 0 ? /* @__PURE__ */ da(r, !1, !1) : Wt(r) : null, d = (l & zs) !== 0 ? Wt(i) : null;
  return {
    v: f,
    i: d,
    e: Ne(() => (s(t, f ?? r, d ?? i, u), () => {
      e.delete(n);
    }))
  };
}
function _r(e, t, r) {
  if (e.nodes)
    for (var n = e.nodes.start, i = e.nodes.end, s = t && (t.f & $e) === 0 ? (
      /** @type {EffectNodes} */
      t.nodes.start
    ) : r; n !== null; ) {
      var l = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Tr(n)
      );
      if (s.before(n), n === i)
        return;
      n = l;
    }
}
function _t(e, t, r) {
  t === null ? e.effect.first = r : t.next = r, r === null ? e.effect.last = t : r.prev = t;
}
function Ua(e, t, r) {
  var n = e == null ? "" : "" + e;
  return n === "" ? null : n;
}
function Or(e, t, r, n, i, s) {
  var l = (
    /** @type {any} */
    e[cn]
  );
  if (l !== r || l === void 0) {
    var u = Ua(r);
    u == null ? e.removeAttribute("class") : e.className = u, e[cn] = r;
  }
  return s;
}
function Ki(e, t, r = !1) {
  if (e.multiple) {
    if (t == null)
      return;
    if (!En(t))
      return Us();
    for (var n of e.options)
      n.selected = t.includes(yr(n));
    return;
  }
  for (n of e.options) {
    var i = yr(n);
    if (ha(i, t)) {
      n.selected = !0;
      return;
    }
  }
  (!r || t !== void 0) && (e.selectedIndex = -1);
}
function Ga(e) {
  var t = new MutationObserver(() => {
    Ki(e, e.__value);
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
  }), Li(() => {
    t.disconnect();
  });
}
function Ya(e, t, r = t) {
  var n = /* @__PURE__ */ new WeakSet(), i = !0;
  Pi(e, "change", (s) => {
    var l = s ? "[selected]" : ":checked", u;
    if (e.multiple)
      u = [].map.call(e.querySelectorAll(l), yr);
    else {
      var f = e.querySelector(l) ?? // will fall back to first non-disabled option if no option is selected
      e.querySelector("option:not([disabled])");
      u = f && yr(f);
    }
    r(u), e.__value = u, T !== null && n.add(T);
  }), ka(() => {
    var s = t();
    if (e === document.activeElement) {
      var l = (
        /** @type {Batch} */
        T
      );
      if (n.has(l))
        return;
    }
    if (Ki(e, s, i), i && s === void 0) {
      var u = e.querySelector(":checked");
      u !== null && (s = yr(u), r(s));
    }
    e.__value = s, i = !1;
  }), Ga(e);
}
function yr(e) {
  return "__value" in e ? e.__value : e.value;
}
const Wa = Symbol("is custom element"), Ka = Symbol("is html");
function Ja(e, t) {
  var r = Qa(e);
  r.checked !== (r.checked = // treat null and undefined the same for the initial value
  t ?? void 0) && (e.checked = t);
}
function Qa(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    /** @type {any} */
    e[Dr] ?? (e[Dr] = {
      [Wa]: e.nodeName.includes("-"),
      [Ka]: e.namespaceURI === oi
    })
  );
}
function ri(e, t, r = t) {
  var n = /* @__PURE__ */ new WeakSet();
  Pi(e, "input", async (i) => {
    var s = i ? e.defaultValue : e.value;
    if (s = ln(e) ? fn(s) : s, r(s), T !== null && n.add(T), await Ta(), s !== (s = t())) {
      var l = e.selectionStart, u = e.selectionEnd, f = e.value.length;
      if (e.value = s ?? "", u !== null) {
        var d = e.value.length;
        l === u && u === f && d > f ? (e.selectionStart = d, e.selectionEnd = d) : (e.selectionStart = l, e.selectionEnd = Math.min(u, d));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  Nn(t) == null && e.value && (r(ln(e) ? fn(e.value) : e.value), T !== null && n.add(T)), Oi(() => {
    var i = t();
    if (e === document.activeElement) {
      var s = (
        /** @type {Batch} */
        T
      );
      if (n.has(s))
        return;
    }
    ln(e) && i === fn(e.value) || e.type === "date" && !i && !e.value || i !== e.value && (e.value = i ?? "");
  });
}
function ln(e) {
  var t = e.type;
  return t === "number" || t === "range";
}
function fn(e) {
  return e === "" ? null : +e;
}
function Za(e) {
  Se === null && Cs(), ya(() => {
    const t = Nn(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
const $a = "5";
var ni;
typeof window < "u" && ((ni = window.__svelte ?? (window.__svelte = {})).v ?? (ni.v = /* @__PURE__ */ new Set())).add($a);
var Xa = /* @__PURE__ */ P('<div class="mb-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 flex items-start gap-2"><svg class="w-5 h-5 flex-shrink-0 mt-0.5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span class="flex-1"> </span> <button class="ml-auto text-red-400 hover:text-red-600">&times;</button></div>'), eo = /* @__PURE__ */ P('<div class="mb-4 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700 flex items-center gap-2"><svg class="w-5 h-5 flex-shrink-0 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span> </span> <button class="ml-auto text-green-400 hover:text-green-600">&times;</button></div>'), to = /* @__PURE__ */ P('<p class="text-sm text-gray-400 italic">No profiles assigned</p>'), ro = /* @__PURE__ */ P('<span> <button class="ml-0.5 opacity-60 hover:opacity-100" title="Revoke profile"><svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></span>'), no = /* @__PURE__ */ P('<div class="flex flex-wrap gap-2 mb-4"></div>'), io = /* @__PURE__ */ P('<span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-700"> <button class="ml-0.5 opacity-60 hover:opacity-100" title="Revoke permission"><svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></span>'), so = /* @__PURE__ */ P('<h3 class="text-sm font-semibold text-gray-700 mb-2 mt-4">Direct Permissions</h3> <div class="flex flex-wrap gap-2"></div>', 1), ao = /* @__PURE__ */ P('<div class="flex items-center gap-2 text-gray-400 text-sm"><div class="w-4 h-4 border-2 border-gray-300 border-t-transparent rounded-full animate-spin"></div> Loading...</div>'), oo = /* @__PURE__ */ P('<p class="text-sm text-gray-400">No operations</p>'), lo = /* @__PURE__ */ P('<code class="px-2 py-0.5 rounded text-xs bg-gray-100 text-gray-600"> </code>'), fo = /* @__PURE__ */ P('<div class="flex flex-wrap gap-1.5"></div>'), uo = /* @__PURE__ */ P('<button class="text-sm text-indigo-600 hover:text-indigo-800 mb-4 inline-flex items-center gap-1"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg> Back to users</button> <div class="space-y-5"><div class="rounded-lg border border-gray-200 bg-white p-5"><div class="flex items-center justify-between mb-3"><div><h2 class="text-xl font-bold text-gray-900"> </h2> <code class="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded"> </code></div> <div class="flex gap-2"><button class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-900 text-white text-sm font-medium hover:bg-black transition-colors"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg> Assign Role</button> <button class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gray-300 text-gray-700 text-sm font-medium hover:bg-gray-50 transition-colors"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"></path></svg> Manage Permissions</button></div></div> <h3 class="text-sm font-semibold text-gray-700 mb-2">Assigned Profiles</h3> <!> <!></div> <div class="rounded-lg border border-gray-200 bg-white p-5"><h3 class="text-base font-semibold text-gray-900 mb-3"> </h3> <!></div></div>', 1), co = /* @__PURE__ */ P("<option> </option>"), vo = /* @__PURE__ */ P('<code class="px-1.5 py-0.5 text-xs bg-white border rounded text-gray-600"> </code>'), ho = /* @__PURE__ */ P('<div class="mb-4 p-3 bg-gray-50 rounded-lg border border-gray-200"><h4 class="text-xs font-semibold text-gray-600 mb-1"> </h4> <div class="flex flex-wrap gap-1"></div></div>'), po = /* @__PURE__ */ P('<div class="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>'), _o = /* @__PURE__ */ P('<button class="text-sm text-indigo-600 hover:text-indigo-800 mb-4 inline-flex items-center gap-1"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg> Back to user detail</button> <div class="rounded-lg border border-gray-200 bg-white p-6 max-w-lg"><h2 class="text-xl font-semibold text-gray-900 mb-1">Assign Profile</h2> <p class="text-sm text-gray-500 mb-4">Assign a role to <strong> </strong></p> <div class="mb-4"><label for="profile-select" class="block text-sm font-medium text-gray-700 mb-1">Profile</label> <select id="profile-select" class="w-full rounded-lg border border-gray-300 px-3.5 py-2.5 text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none"><option>Select a profile...</option><!></select></div> <!> <div class="flex gap-3"><button class="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-900 text-white text-sm font-medium hover:bg-black disabled:opacity-40 disabled:cursor-not-allowed transition-colors"><!> Assign Directly</button> <button class="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-indigo-300 text-indigo-700 text-sm font-medium hover:bg-indigo-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors">Propose (Governance Vote)</button></div></div>', 1), go = /* @__PURE__ */ P('<span class="text-green-600 font-medium"> </span>'), mo = /* @__PURE__ */ P('<span class="text-red-600 font-medium"> </span>'), bo = /* @__PURE__ */ P('<div class="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>'), xo = /* @__PURE__ */ P('<div class="flex items-center gap-2"><span class="text-xs text-gray-500"><!> <!> <!></span> <button class="px-3 py-1.5 text-sm rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-50">Discard</button> <button class="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm rounded-lg bg-gray-900 text-white font-medium hover:bg-black disabled:opacity-40"><!> Apply Changes</button></div>'), yo = /* @__PURE__ */ P('<span class="px-1.5 py-0.5 rounded text-[10px] font-semibold bg-green-100 text-green-700">WILL GRANT</span>'), wo = /* @__PURE__ */ P('<span class="px-1.5 py-0.5 rounded text-[10px] font-semibold bg-red-100 text-red-700">WILL REVOKE</span>'), ko = /* @__PURE__ */ P('<span class="px-1.5 py-0.5 rounded text-[10px] font-semibold bg-blue-100 text-blue-700">GRANTED</span>'), Eo = /* @__PURE__ */ P('<span class="px-1.5 py-0.5 rounded text-[10px] font-semibold bg-gray-100 text-gray-500">VIA PROFILE</span>'), So = /* @__PURE__ */ P('<label><input type="checkbox"/> <div class="flex-1 min-w-0"><div class="flex items-center gap-2"><code class="text-sm font-medium text-gray-900"> </code> <!></div> <p class="text-xs text-gray-500 mt-0.5"> </p></div></label>'), Co = /* @__PURE__ */ P('<div class="border-b border-gray-100 last:border-b-0"><div class="px-5 py-2 bg-gray-50 sticky top-0 z-10"><h3 class="text-xs font-semibold text-gray-500 uppercase tracking-wider"> </h3></div> <!></div>'), Mo = /* @__PURE__ */ P('<div class="text-center py-8 text-sm text-gray-400"> </div>'), Ao = /* @__PURE__ */ P('<div class="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>'), To = /* @__PURE__ */ P('<div class="px-5 py-3 border-t border-gray-200 bg-gray-50 flex items-center justify-between"><span class="text-sm text-gray-600"> </span> <div class="flex gap-2"><button class="px-3 py-1.5 text-sm rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-100">Discard</button> <button class="inline-flex items-center gap-1.5 px-4 py-1.5 text-sm rounded-lg bg-gray-900 text-white font-medium hover:bg-black disabled:opacity-40"><!> Apply Changes</button></div></div>'), Ro = /* @__PURE__ */ P('<button class="text-sm text-indigo-600 hover:text-indigo-800 mb-4 inline-flex items-center gap-1"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg> Back to user detail</button> <div class="rounded-lg border border-gray-200 bg-white"><div class="px-5 py-4 border-b border-gray-200"><h2 class="text-xl font-semibold text-gray-900 mb-1">Manage Permissions</h2> <p class="text-sm text-gray-500">Manage fine-grained permissions for <strong> </strong></p></div> <div class="px-5 py-3 border-b border-gray-200 flex items-center gap-3 flex-wrap"><div class="flex-1 min-w-[200px]"><input type="text" placeholder="Filter permissions by name, category, or description..." class="w-full rounded-lg border border-gray-300 px-3.5 py-2 text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none"/></div> <!></div> <div class="max-h-[480px] overflow-y-auto"></div> <!></div>', 1), Po = /* @__PURE__ */ P('<div class="w-3.5 h-3.5 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div> Loading...', 1), Lo = /* @__PURE__ */ Na('<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg> Refresh', 1), Fo = /* @__PURE__ */ P('<div class="flex items-center justify-center py-12"><svg class="animate-spin h-7 w-7 text-gray-400" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path></svg> <span class="ml-3 text-gray-500 text-sm">Loading users...</span></div>'), Oo = /* @__PURE__ */ P('<div class="text-center py-12"><svg class="mx-auto h-10 w-10 text-gray-300 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg> <p class="text-gray-500 text-sm"> </p></div>'), Do = /* @__PURE__ */ P("<span> </span>"), No = /* @__PURE__ */ P('<span class="text-xs text-gray-400 italic">no profiles</span>'), Io = /* @__PURE__ */ P('<div class="px-5 py-3 hover:bg-gray-50 transition-colors flex items-center justify-between"><div class="flex-1 min-w-0"><div class="flex items-center gap-2 mb-1"><span class="text-sm font-medium text-gray-900 truncate"> </span> <code class="text-xs text-gray-400"> </code></div> <div class="flex flex-wrap gap-1.5"><!> <!></div></div> <button class="ml-3 p-2 rounded-lg border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 transition-colors" title="View user details"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></button></div>'), zo = /* @__PURE__ */ P('<div class="divide-y divide-gray-100"></div>'), jo = /* @__PURE__ */ P('<div class="rounded-lg border border-gray-200 bg-white"><div class="flex items-center justify-between px-5 py-3 border-b border-gray-200"><div class="flex-1 max-w-sm"><input type="text" placeholder="Search by principal, nickname, or profile..." class="w-full rounded-lg border border-gray-300 px-3.5 py-2 text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none"/></div> <button class="ml-3 inline-flex items-center gap-1.5 px-3 py-1.5 text-sm rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-50 disabled:opacity-50"><!></button></div> <!> <div class="px-5 py-3 border-t border-gray-200 text-xs text-gray-400"> <!></div></div>'), Bo = /* @__PURE__ */ P('<div class="w-full px-6 pt-8 max-w-none"><div class="mb-6"><h1 class="text-3xl font-bold text-gray-900 mb-1">Role Manager</h1> <p class="text-gray-500 text-sm">Assign and manage user roles and permissions.</p></div> <!> <!> <!></div>');
function Ho(e, t) {
  ui(t, !0);
  let r = /* @__PURE__ */ V(De([])), n = /* @__PURE__ */ V(De([])), i = /* @__PURE__ */ V(De([])), s = /* @__PURE__ */ V(!0), l = /* @__PURE__ */ V(""), u = /* @__PURE__ */ V(""), f = /* @__PURE__ */ V("users"), d = /* @__PURE__ */ V(""), c = /* @__PURE__ */ V(null), p = /* @__PURE__ */ V(De([])), v = /* @__PURE__ */ V(De([])), x = /* @__PURE__ */ V(!1), m = /* @__PURE__ */ V(""), D = /* @__PURE__ */ V(!1), g = /* @__PURE__ */ V(""), R = /* @__PURE__ */ V(!1), O = /* @__PURE__ */ V(De(/* @__PURE__ */ new Set())), A = /* @__PURE__ */ V(De(/* @__PURE__ */ new Set())), re = /* @__PURE__ */ Rt(() => o(d).trim() ? o(r).filter((h) => h.principal.toLowerCase().includes(o(d).toLowerCase()) || h.nickname.toLowerCase().includes(o(d).toLowerCase()) || h.profiles.some((w) => w.toLowerCase().includes(o(d).toLowerCase()))) : o(r)), Be = /* @__PURE__ */ Rt(() => () => {
    const h = o(g).trim().toLowerCase(), w = h ? o(i).filter((Q) => Q.name.toLowerCase().includes(h) || Q.category.toLowerCase().includes(h) || Q.description.toLowerCase().includes(h)) : o(i), k = {};
    for (const Q of w)
      k[Q.category] || (k[Q.category] = []), k[Q.category].push(Q);
    return k;
  }), tt = /* @__PURE__ */ Rt(() => o(O).size > 0 || o(A).size > 0);
  async function Y(h, w = {}) {
    const k = await t.ctx.callSync(h, w);
    return typeof k == "string" ? JSON.parse(k) : k;
  }
  async function Ce() {
    _(s, !0), _(l, "");
    try {
      const h = await Y("list_users_with_profiles");
      h?.success ? _(r, h.data?.users ?? [], !0) : _(l, h?.error || "Failed to load users", !0);
    } catch (h) {
      _(l, h?.message || String(h), !0);
    } finally {
      _(s, !1);
    }
  }
  async function ct() {
    try {
      const h = await Y("get_available_profiles");
      h?.success && _(n, h.data?.profiles ?? [], !0);
    } catch (h) {
      console.error("Failed to load profiles:", h);
    }
  }
  async function ne() {
    try {
      const h = await Y("get_all_operations");
      h?.success && _(i, h.data?.operations ?? [], !0);
    } catch (h) {
      console.error("Failed to load operations:", h);
    }
  }
  async function Jt(h) {
    _(c, h, !0), _(f, "detail"), _(x, !0), _(p, [], !0), _(v, [], !0);
    try {
      const w = await Y("get_user_effective_permissions", { target_principal: h.principal });
      w?.success && (_(p, w.data?.effective_operations ?? [], !0), _(v, w.data?.direct_permissions ?? [], !0), _(c, { ...h, profiles: w.data?.profiles ?? h.profiles }, !0));
    } catch (w) {
      _(l, w?.message || String(w), !0);
    } finally {
      _(x, !1);
    }
  }
  async function Xr() {
    if (!(!o(c) || !o(m))) {
      _(D, !0), _(l, ""), _(u, "");
      try {
        const h = await Y("assign_profile", {
          target_principal: o(c).principal,
          profile_name: o(m)
        });
        h?.success ? (_(u, h.data?.message || "Profile assigned", !0), _(m, ""), _(f, "detail"), await Jt({
          ...o(c),
          profiles: h.data?.profiles ?? o(c).profiles
        }), await Ce()) : h?.governance_blocked ? _(l, h.error + ' Use "Propose" to create a governance proposal.') : _(l, h?.error || "Failed to assign profile", !0);
      } catch (h) {
        _(l, h?.message || String(h), !0);
      } finally {
        _(D, !1);
      }
    }
  }
  async function Ji(h) {
    if (o(c)) {
      _(l, ""), _(u, "");
      try {
        const w = await Y("revoke_profile", {
          target_principal: o(c).principal,
          profile_name: h
        });
        w?.success ? (_(u, w.data?.message || "Profile revoked", !0), await Jt({
          ...o(c),
          profiles: w.data?.profiles ?? o(c).profiles
        }), await Ce()) : _(l, w?.error || "Failed to revoke profile", !0);
      } catch (w) {
        _(l, w?.message || String(w), !0);
      }
    }
  }
  function Qi(h) {
    o(v).includes(h) ? o(A).has(h) ? _(A, new Set([...o(A)].filter((k) => k !== h)), !0) : (_(A, /* @__PURE__ */ new Set([...o(A), h]), !0), _(O, new Set([...o(O)].filter((k) => k !== h)), !0)) : o(O).has(h) ? _(O, new Set([...o(O)].filter((k) => k !== h)), !0) : (_(O, /* @__PURE__ */ new Set([...o(O), h]), !0), _(A, new Set([...o(A)].filter((k) => k !== h)), !0));
  }
  function Zi(h) {
    const w = o(v).includes(h);
    return o(O).has(h) ? !0 : o(A).has(h) ? !1 : w;
  }
  function $i(h) {
    return o(O).has(h) ? "pending-grant" : o(A).has(h) ? "pending-revoke" : o(v).includes(h) ? "granted" : "none";
  }
  async function In() {
    if (!o(c)) return;
    _(R, !0), _(l, ""), _(u, "");
    const h = [...o(O)], w = [...o(A)];
    try {
      if (h.length > 0) {
        const k = await Y("batch_grant_permissions", {
          target_principal: o(c).principal,
          permission_names: h
        });
        if (!k?.success) {
          _(l, k?.error || "Failed to grant permissions", !0), _(R, !1);
          return;
        }
      }
      if (w.length > 0) {
        const k = await Y("batch_revoke_permissions", {
          target_principal: o(c).principal,
          permission_names: w
        });
        if (!k?.success) {
          _(l, k?.error || "Failed to revoke permissions", !0), _(R, !1);
          return;
        }
      }
      _(u, `${h.length} granted, ${w.length} revoked`), _(O, /* @__PURE__ */ new Set(), !0), _(A, /* @__PURE__ */ new Set(), !0), await Jt(o(c));
    } catch (k) {
      _(l, k?.message || String(k), !0);
    } finally {
      _(R, !1);
    }
  }
  function en() {
    _(O, /* @__PURE__ */ new Set(), !0), _(A, /* @__PURE__ */ new Set(), !0);
  }
  async function Xi() {
    if (!(!o(c) || !o(m))) {
      _(D, !0), _(l, ""), _(u, "");
      try {
        const h = await Y("propose_role_assignment", {
          target_principal: o(c).principal,
          profile_name: o(m)
        });
        h?.success ? (_(u, h.data?.message || "Governance proposal created", !0), _(m, ""), _(f, "detail")) : _(l, h?.error || "Failed to create proposal", !0);
      } catch (h) {
        _(l, h?.message || String(h), !0);
      } finally {
        _(D, !1);
      }
    }
  }
  function tn(h) {
    return !h || h.length <= 16 ? h || "unknown" : h.slice(0, 8) + "..." + h.slice(-6);
  }
  function zn(h) {
    return {
      admin: "bg-red-100 text-red-700",
      member: "bg-blue-100 text-blue-700",
      observer: "bg-gray-100 text-gray-600",
      legislator: "bg-purple-100 text-purple-700",
      executor: "bg-amber-100 text-amber-700",
      judge: "bg-indigo-100 text-indigo-700",
      enforcer: "bg-orange-100 text-orange-700",
      treasurer: "bg-emerald-100 text-emerald-700",
      merchant: "bg-cyan-100 text-cyan-700",
      operator: "bg-teal-100 text-teal-700",
      developer: "bg-violet-100 text-violet-700",
      user_manager: "bg-pink-100 text-pink-700"
    }[h] || "bg-gray-100 text-gray-700";
  }
  Za(() => {
    Ce(), ct(), ne();
  });
  var jn = Bo(), Bn = y(b(jn), 2);
  {
    var es = (h) => {
      var w = Xa(), k = y(b(w), 2), Q = b(k), he = y(k, 2);
      W(() => U(Q, o(l))), se("click", he, () => _(l, "")), S(h, w);
    };
    X(Bn, (h) => {
      o(l) && h(es);
    });
  }
  var Hn = y(Bn, 2);
  {
    var ts = (h) => {
      var w = eo(), k = y(b(w), 2), Q = b(k), he = y(k, 2);
      W(() => U(Q, o(u))), se("click", he, () => _(u, "")), S(h, w);
    };
    X(Hn, (h) => {
      o(u) && h(ts);
    });
  }
  var rs = y(Hn, 2);
  {
    var ns = (h) => {
      var w = uo(), k = Lr(w), Q = y(k, 2), he = b(Q), Ke = b(he), dt = b(Ke), rt = b(dt), nt = b(rt), He = y(rt, 2), Ct = b(He), vt = y(dt, 2), ht = b(vt), pt = y(ht, 2), Me = y(Ke, 4);
      {
        var Mt = (z) => {
          var q = to();
          S(z, q);
        }, Z = (z) => {
          var q = no();
          st(q, 21, () => o(c).profiles, it, (ce, B) => {
            var H = ro(), oe = b(H), Te = y(oe);
            W(
              (xe) => {
                Or(H, 1, `inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${xe ?? ""}`), U(oe, `${o(B) ?? ""} `);
              },
              [() => zn(o(B))]
            ), se("click", Te, () => Ji(o(B))), S(ce, H);
          }), S(z, q);
        };
        X(Me, (z) => {
          o(c).profiles.length === 0 ? z(Mt) : z(Z, -1);
        });
      }
      var L = y(Me, 2);
      {
        var C = (z) => {
          var q = so(), ce = y(Lr(q), 2);
          st(ce, 21, () => o(v), it, (B, H) => {
            var oe = io(), Te = b(oe), xe = y(Te);
            W(() => U(Te, `${o(H) ?? ""} `)), se("click", xe, () => handleRevokePermission(o(H))), S(B, oe);
          }), S(z, q);
        };
        X(L, (z) => {
          o(v).length > 0 && z(C);
        });
      }
      var $ = y(he, 2), G = b($), ae = b(G), ie = y(G, 2);
      {
        var pe = (z) => {
          var q = ao();
          S(z, q);
        }, Ae = (z) => {
          var q = oo();
          S(z, q);
        }, ue = (z) => {
          var q = fo();
          st(q, 21, () => o(p), it, (ce, B) => {
            var H = lo(), oe = b(H);
            W(() => U(oe, o(B))), S(ce, H);
          }), S(z, q);
        };
        X(ie, (z) => {
          o(x) ? z(pe) : o(p).length === 0 ? z(Ae, 1) : z(ue, -1);
        });
      }
      W(() => {
        U(nt, o(c).nickname || "Unnamed User"), U(Ct, o(c).principal), U(ae, `Effective Operations (${o(p).length ?? ""})`);
      }), se("click", k, () => {
        _(f, "users"), _(c, null), _(u, "");
      }), se("click", ht, () => {
        _(f, "assign"), _(m, "");
      }), se("click", pt, () => {
        _(f, "permission"), _(g, ""), _(O, /* @__PURE__ */ new Set(), !0), _(A, /* @__PURE__ */ new Set(), !0);
      }), S(h, w);
    }, is = (h) => {
      var w = _o(), k = Lr(w), Q = y(k, 2), he = y(b(Q), 2), Ke = y(b(he)), dt = b(Ke), rt = y(he, 2), nt = y(b(rt), 2), He = b(nt);
      He.value = He.__value = "";
      var Ct = y(He);
      st(Ct, 17, () => o(n).filter((C) => !o(c)?.profiles.includes(C.name)), it, (C, $) => {
        var G = co(), ae = b(G), ie = {};
        W(() => {
          U(ae, o($).name), ie !== (ie = o($).name) && (G.value = (G.__value = o($).name) ?? "");
        }), S(C, G);
      });
      var vt = y(rt, 2);
      {
        var ht = (C) => {
          var $ = ho(), G = b($), ae = b(G), ie = y(G, 2);
          st(ie, 21, () => o(n).find((pe) => pe.name === o(m))?.allowed_to ?? [], it, (pe, Ae) => {
            var ue = vo(), z = b(ue);
            W(() => U(z, o(Ae))), S(pe, ue);
          }), W(() => U(ae, `Operations granted by "${o(m) ?? ""}":`)), S(C, $);
        };
        X(vt, (C) => {
          o(m) && C(ht);
        });
      }
      var pt = y(vt, 2), Me = b(pt), Mt = b(Me);
      {
        var Z = (C) => {
          var $ = po();
          S(C, $);
        };
        X(Mt, (C) => {
          o(D) && C(Z);
        });
      }
      var L = y(Me, 2);
      W(
        (C) => {
          U(dt, C), Me.disabled = o(D) || !o(m), L.disabled = o(D) || !o(m);
        },
        [
          () => o(c).nickname || tn(o(c).principal)
        ]
      ), se("click", k, () => {
        _(f, "detail");
      }), Ya(nt, () => o(m), (C) => _(m, C)), se("click", Me, Xr), se("click", L, Xi), S(h, w);
    }, ss = (h) => {
      var w = Ro(), k = Lr(w), Q = y(k, 2), he = b(Q), Ke = y(b(he), 2), dt = y(b(Ke)), rt = b(dt), nt = y(he, 2), He = b(nt), Ct = b(He), vt = y(He, 2);
      {
        var ht = (Z) => {
          var L = xo(), C = b(L), $ = b(C);
          {
            var G = (B) => {
              var H = go(), oe = b(H);
              W(() => U(oe, `+${o(O).size ?? ""}`)), S(B, H);
            };
            X($, (B) => {
              o(O).size > 0 && B(G);
            });
          }
          var ae = y($, 2);
          {
            var ie = (B) => {
              var H = ei(" / ");
              S(B, H);
            };
            X(ae, (B) => {
              o(O).size > 0 && o(A).size > 0 && B(ie);
            });
          }
          var pe = y(ae, 2);
          {
            var Ae = (B) => {
              var H = mo(), oe = b(H);
              W(() => U(oe, `-${o(A).size ?? ""}`)), S(B, H);
            };
            X(pe, (B) => {
              o(A).size > 0 && B(Ae);
            });
          }
          var ue = y(C, 2), z = y(ue, 2), q = b(z);
          {
            var ce = (B) => {
              var H = bo();
              S(B, H);
            };
            X(q, (B) => {
              o(R) && B(ce);
            });
          }
          W(() => z.disabled = o(R)), se("click", ue, en), se("click", z, In), S(Z, L);
        };
        X(vt, (Z) => {
          o(tt) && Z(ht);
        });
      }
      var pt = y(nt, 2);
      st(
        pt,
        21,
        () => Object.entries(o(Be)()),
        it,
        (Z, L) => {
          var C = /* @__PURE__ */ Rt(() => ws(o(L), 2));
          let $ = () => o(C)[0], G = () => o(C)[1];
          var ae = Co(), ie = b(ae), pe = b(ie), Ae = b(pe), ue = y(ie, 2);
          st(ue, 17, G, it, (z, q) => {
            const ce = /* @__PURE__ */ Rt(() => $i(o(q).name)), B = /* @__PURE__ */ Rt(() => Zi(o(q).name)), H = /* @__PURE__ */ Rt(() => !o(v).includes(o(q).name) && o(p).includes(o(q).name));
            var oe = So(), Te = b(oe), xe = y(Te, 2), At = b(xe), Qt = b(At), rn = b(Qt), nn = y(Qt, 2);
            {
              var os = (Re) => {
                var Tt = yo();
                S(Re, Tt);
              }, ls = (Re) => {
                var Tt = wo();
                S(Re, Tt);
              }, fs = (Re) => {
                var Tt = ko();
                S(Re, Tt);
              }, us = (Re) => {
                var Tt = Eo();
                S(Re, Tt);
              };
              X(nn, (Re) => {
                o(ce) === "pending-grant" ? Re(os) : o(ce) === "pending-revoke" ? Re(ls, 1) : o(ce) === "granted" ? Re(fs, 2) : o(H) && Re(us, 3);
              });
            }
            var cs = y(At, 2), ds = b(cs);
            W(() => {
              Or(oe, 1, `flex items-start gap-3 px-5 py-2.5 hover:bg-gray-50 cursor-pointer transition-colors ${o(ce) === "pending-grant" ? "bg-green-50" : o(ce) === "pending-revoke" ? "bg-red-50" : ""}`), Ja(Te, o(B) || o(H)), Te.disabled = o(H), Or(Te, 1, `mt-0.5 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 ${o(H) ? "opacity-50" : ""}`), U(rn, o(q).name), U(ds, o(q).description);
            }), se("change", Te, () => {
              o(H) || Qi(o(q).name);
            }), S(z, oe);
          }), W(() => U(Ae, $())), S(Z, ae);
        },
        (Z) => {
          var L = Mo(), C = b(L);
          W(() => U(C, o(g) ? "No permissions match your filter" : "Loading permissions...")), S(Z, L);
        }
      );
      var Me = y(pt, 2);
      {
        var Mt = (Z) => {
          var L = To(), C = b(L), $ = b(C), G = y(C, 2), ae = b(G), ie = y(ae, 2), pe = b(ie);
          {
            var Ae = (ue) => {
              var z = Ao();
              S(ue, z);
            };
            X(pe, (ue) => {
              o(R) && ue(Ae);
            });
          }
          W(() => {
            U($, `${o(O).size + o(A).size} pending change${o(O).size + o(A).size !== 1 ? "s" : ""}`), ie.disabled = o(R);
          }), se("click", ae, en), se("click", ie, In), S(Z, L);
        };
        X(Me, (Z) => {
          o(tt) && Z(Mt);
        });
      }
      W((Z) => U(rt, Z), [
        () => o(c).nickname || tn(o(c).principal)
      ]), se("click", k, () => {
        _(f, "detail"), en();
      }), ri(Ct, () => o(g), (Z) => _(g, Z)), S(h, w);
    }, as = (h) => {
      var w = jo(), k = b(w), Q = b(k), he = b(Q), Ke = y(Q, 2), dt = b(Ke);
      {
        var rt = (L) => {
          var C = Po();
          S(L, C);
        }, nt = (L) => {
          var C = Lo();
          S(L, C);
        };
        X(dt, (L) => {
          o(s) ? L(rt) : L(nt, -1);
        });
      }
      var He = y(k, 2);
      {
        var Ct = (L) => {
          var C = Fo();
          S(L, C);
        }, vt = (L) => {
          var C = Oo(), $ = y(b(C), 2), G = b($);
          W(() => U(G, o(d) ? "No users match your search" : "No users found")), S(L, C);
        }, ht = (L) => {
          var C = zo();
          st(C, 21, () => o(re), it, ($, G) => {
            var ae = Io(), ie = b(ae), pe = b(ie), Ae = b(pe), ue = b(Ae), z = y(Ae, 2), q = b(z), ce = y(pe, 2), B = b(ce);
            st(B, 17, () => o(G).profiles, it, (xe, At) => {
              var Qt = Do(), rn = b(Qt);
              W(
                (nn) => {
                  Or(Qt, 1, `px-2 py-0.5 rounded-full text-xs font-semibold ${nn ?? ""}`), U(rn, o(At));
                },
                [() => zn(o(At))]
              ), S(xe, Qt);
            });
            var H = y(B, 2);
            {
              var oe = (xe) => {
                var At = No();
                S(xe, At);
              };
              X(H, (xe) => {
                o(G).profiles.length === 0 && xe(oe);
              });
            }
            var Te = y(ie, 2);
            W(
              (xe) => {
                U(ue, o(G).nickname || "Unnamed"), U(q, xe);
              },
              [() => tn(o(G).principal)]
            ), se("click", Te, () => Jt(o(G))), S($, ae);
          }), S(L, C);
        };
        X(He, (L) => {
          o(s) ? L(Ct) : o(re).length === 0 ? L(vt, 1) : L(ht, -1);
        });
      }
      var pt = y(He, 2), Me = b(pt), Mt = y(Me);
      {
        var Z = (L) => {
          var C = ei(" (filtered)");
          S(L, C);
        };
        X(Mt, (L) => {
          o(d) && L(Z);
        });
      }
      W(() => {
        Ke.disabled = o(s), U(Me, `${o(re).length ?? ""} user${o(re).length !== 1 ? "s" : ""} `);
      }), ri(he, () => o(d), (L) => _(d, L)), se("click", Ke, Ce), S(h, w);
    };
    X(rs, (h) => {
      o(f) === "detail" && o(c) ? h(ns) : o(f) === "assign" && o(c) ? h(is, 1) : o(f) === "permission" && o(c) ? h(ss, 2) : h(as, -1);
    });
  }
  S(e, jn), ci();
}
La(["click", "change"]);
function Uo(e, t) {
  const r = Ia(Ho, { target: e, props: { ctx: t } });
  return {
    unmount() {
      try {
        ja(r);
      } catch {
      }
    }
  };
}
export {
  Uo as default
};
