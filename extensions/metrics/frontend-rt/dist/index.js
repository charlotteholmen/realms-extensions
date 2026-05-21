var Ys = Object.defineProperty;
var ya = (e) => {
  throw TypeError(e);
};
var Ks = (e, t, r) => t in e ? Ys(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var Se = (e, t, r) => Ks(e, typeof t != "symbol" ? t + "" : t, r), Fn = (e, t, r) => t.has(e) || ya("Cannot " + r);
var i = (e, t, r) => (Fn(e, t, "read from private field"), r ? r.call(e) : t.get(e)), A = (e, t, r) => t.has(e) ? ya("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), E = (e, t, r, n) => (Fn(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r), P = (e, t, r) => (Fn(e, t, "access private method"), r);
var Oa = Array.isArray, Gs = Array.prototype.indexOf, Bt = Array.prototype.includes, un = Array.from, Ws = Object.defineProperty, Sr = Object.getOwnPropertyDescriptor, Js = Object.prototype, Zs = Array.prototype, Qs = Object.getPrototypeOf, xa = Object.isExtensible;
const Xs = () => {
};
function ei(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function Da() {
  var e, t, r = new Promise((n, a) => {
    e = n, t = a;
  });
  return { promise: r, resolve: e, reject: t };
}
function xr(e, t) {
  if (Array.isArray(e))
    return e;
  if (!(Symbol.iterator in e))
    return Array.from(e);
  const r = [];
  for (const n of e)
    if (r.push(n), r.length === t) break;
  return r;
}
const ge = 2, Cr = 4, cn = 8, Pa = 1 << 24, We = 16, Xe = 32, St = 64, In = 128, He = 512, re = 1024, _e = 2048, lt = 4096, me = 8192, Qe = 16384, Kt = 32768, ma = 1 << 25, lr = 65536, rn = 1 << 17, ti = 1 << 18, ur = 1 << 19, ri = 1 << 20, it = 1 << 25, Ht = 65536, nn = 1 << 21, er = 1 << 22, Et = 1 << 23, jn = Symbol("$state"), ni = Symbol("attributes"), Mn = Symbol("class"), Rn = Symbol("style"), wr = Symbol("text"), vn = new class extends Error {
  constructor() {
    super(...arguments);
    Se(this, "name", "StaleReactionError");
    Se(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
function ai() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function si(e, t, r) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function ii(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function li() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function oi(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function di() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function fi() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function ui() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function ci() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function vi() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
const pi = 1, hi = 2, Ia = 4, _i = 8, gi = 16, bi = 1, yi = 2, te = Symbol("uninitialized"), xi = "http://www.w3.org/1999/xhtml";
function mi() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function ki() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function Ma(e) {
  return e === this.v;
}
function wi(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Ra(e) {
  return !wi(e, this.v);
}
let Ye = null;
function or(e) {
  Ye = e;
}
function La(e, t = !1, r) {
  Ye = {
    p: Ye,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    r: (
      /** @type {Effect} */
      D
    ),
    l: null
  };
}
function Ba(e) {
  var t = (
    /** @type {ComponentContext} */
    Ye
  ), r = t.e;
  if (r !== null) {
    t.e = null;
    for (var n of r)
      ss(n);
  }
  return t.i = !0, Ye = t.p, /** @type {T} */
  {};
}
function $a() {
  return !0;
}
let Qt = [];
function Ei() {
  var e = Qt;
  Qt = [], ei(e);
}
function $t(e) {
  if (Qt.length === 0) {
    var t = Qt;
    queueMicrotask(() => {
      t === Qt && Ei();
    });
  }
  Qt.push(e);
}
function za(e) {
  var t = D;
  if (t === null)
    return C.f |= Et, e;
  if ((t.f & Kt) === 0 && (t.f & Cr) === 0)
    throw e;
  wt(e, t);
}
function wt(e, t) {
  for (; t !== null; ) {
    if ((t.f & In) !== 0) {
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
const Ai = -7169;
function J(e, t) {
  e.f = e.f & Ai | t;
}
function Zn(e) {
  (e.f & He) !== 0 || e.deps === null ? J(e, re) : J(e, lt);
}
function qa(e) {
  if (e !== null)
    for (const t of e)
      (t.f & ge) === 0 || (t.f & Ht) === 0 || (t.f ^= Ht, qa(
        /** @type {Derived} */
        t.deps
      ));
}
function Va(e, t, r) {
  (e.f & _e) !== 0 ? t.add(e) : (e.f & lt) !== 0 && r.add(e), qa(e.deps), J(e, re);
}
let Nn = null, Jt = null, M = null, Ln = null, Je = null, Bn = null, On = !1, Xt = null, Zr = null;
var ka = 0;
let Si = 1;
var tr, xt, Dt, rr, nr, Pt, ar, vt, jr, Ie, Nr, mt, nt, at, sr, It, R, $n, Er, zn, Ha, Ua, Qr, Ti, qn, Zt;
const on = class on {
  constructor() {
    A(this, R);
    Se(this, "id", Si++);
    /** True as soon as `#process` was called */
    A(this, tr, !1);
    Se(this, "linked", !0);
    /** @type {Batch | null} */
    A(this, xt, null);
    /** @type {Batch | null} */
    A(this, Dt, null);
    /** @type {Map<Effect, ReturnType<typeof deferred<any>>>} */
    Se(this, "async_deriveds", /* @__PURE__ */ new Map());
    /**
     * The current values of any signals that are updated in this batch.
     * Tuple format: [value, is_derived] (note: is_derived is false for deriveds, too, if they were overridden via assignment)
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Value, [any, boolean]>}
     */
    Se(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any signals (sources and deriveds) that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Value, any>}
     */
    Se(this, "previous", /* @__PURE__ */ new Map());
    /**
     * Async effects which this batch doesn't take into account anymore when calculating blockers,
     * as it has a value for it already.
     * @type {Set<Effect>}
     */
    Se(this, "unblocked", /* @__PURE__ */ new Set());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<(batch: Batch) => void>}
     */
    A(this, rr, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    A(this, nr, /* @__PURE__ */ new Set());
    /**
     * Callbacks that should run only when a fork is committed.
     * @type {Set<(batch: Batch) => void>}
     */
    A(this, Pt, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    A(this, ar, 0);
    /**
     * Async effects that are currently in flight, _not_ inside a pending boundary
     * @type {Map<Effect, number>}
     */
    A(this, vt, /* @__PURE__ */ new Map());
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    A(this, jr, null);
    /**
     * The root effects that need to be flushed
     * @type {Effect[]}
     */
    A(this, Ie, []);
    /**
     * Effects created while this batch was active.
     * @type {Effect[]}
     */
    A(this, Nr, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    A(this, mt, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    A(this, nt, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    A(this, at, /* @__PURE__ */ new Map());
    /**
     * Inverse of #skipped_branches which we need to tell prior batches to unskip them when committing
     * @type {Set<Effect>}
     */
    A(this, sr, /* @__PURE__ */ new Set());
    Se(this, "is_fork", !1);
    A(this, It, !1);
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(t) {
    i(this, at).has(t) || i(this, at).set(t, { d: [], m: [] }), i(this, sr).delete(t);
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   * @param {(e: Effect) => void} callback
   */
  unskip_effect(t, r = (n) => this.schedule(n)) {
    var n = i(this, at).get(t);
    if (n) {
      i(this, at).delete(t);
      for (var a of n.d)
        J(a, _e), r(a);
      for (a of n.m)
        J(a, lt), r(a);
    }
    i(this, sr).add(t);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Value} source
   * @param {any} value
   * @param {boolean} [is_derived]
   */
  capture(t, r, n = !1) {
    t.v !== te && !this.previous.has(t) && this.previous.set(t, t.v), (t.f & Et) === 0 && (this.current.set(t, [r, n]), Je?.set(t, r)), this.is_fork || (t.v = r);
  }
  activate() {
    M = this;
  }
  deactivate() {
    M = null, Je = null;
  }
  flush() {
    try {
      On = !0, M = this, P(this, R, Er).call(this);
    } finally {
      ka = 0, Bn = null, Xt = null, Zr = null, On = !1, M = null, Je = null, zt.clear();
    }
  }
  discard() {
    for (const t of i(this, nr)) t(this);
    i(this, nr).clear(), i(this, Pt).clear(), P(this, R, Zt).call(this);
  }
  /**
   * @param {Effect} effect
   */
  register_created_effect(t) {
    i(this, Nr).push(t);
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  increment(t, r) {
    if (E(this, ar, i(this, ar) + 1), t) {
      let n = i(this, vt).get(r) ?? 0;
      i(this, vt).set(r, n + 1);
    }
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  decrement(t, r) {
    if (E(this, ar, i(this, ar) - 1), t) {
      let n = i(this, vt).get(r) ?? 0;
      n === 1 ? i(this, vt).delete(r) : i(this, vt).set(r, n - 1);
    }
    i(this, It) || (E(this, It, !0), $t(() => {
      E(this, It, !1), this.linked && this.flush();
    }));
  }
  /**
   * @param {Set<Effect>} dirty_effects
   * @param {Set<Effect>} maybe_dirty_effects
   */
  transfer_effects(t, r) {
    for (const n of t)
      i(this, mt).add(n);
    for (const n of r)
      i(this, nt).add(n);
    t.clear(), r.clear();
  }
  /** @param {(batch: Batch) => void} fn */
  oncommit(t) {
    i(this, rr).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    i(this, nr).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  on_fork_commit(t) {
    i(this, Pt).add(t);
  }
  run_fork_commit_callbacks() {
    for (const t of i(this, Pt)) t(this);
    i(this, Pt).clear();
  }
  settled() {
    return (i(this, jr) ?? E(this, jr, Da())).promise;
  }
  static ensure() {
    var t;
    if (M === null) {
      const r = M = new on();
      P(t = r, R, qn).call(t), On || $t(() => {
        i(r, tr) || r.flush();
      });
    }
    return M;
  }
  apply() {
    {
      Je = null;
      return;
    }
  }
  /**
   *
   * @param {Effect} effect
   */
  schedule(t) {
    if (Bn = t, t.b?.is_pending && (t.f & (Cr | cn | Pa)) !== 0 && (t.f & Kt) === 0) {
      t.b.defer_effect(t);
      return;
    }
    for (var r = t; r.parent !== null; ) {
      r = r.parent;
      var n = r.f;
      if (Xt !== null && r === D && (C === null || (C.f & ge) === 0))
        return;
      if ((n & (St | Xe)) !== 0) {
        if ((n & re) === 0)
          return;
        r.f ^= re;
      }
    }
    i(this, Ie).push(r);
  }
};
tr = new WeakMap(), xt = new WeakMap(), Dt = new WeakMap(), rr = new WeakMap(), nr = new WeakMap(), Pt = new WeakMap(), ar = new WeakMap(), vt = new WeakMap(), jr = new WeakMap(), Ie = new WeakMap(), Nr = new WeakMap(), mt = new WeakMap(), nt = new WeakMap(), at = new WeakMap(), sr = new WeakMap(), It = new WeakMap(), R = new WeakSet(), $n = function() {
  if (this.is_fork) return !0;
  for (const n of i(this, vt).keys()) {
    for (var t = n, r = !1; t.parent !== null; ) {
      if (i(this, at).has(t)) {
        r = !0;
        break;
      }
      t = t.parent;
    }
    if (!r)
      return !0;
  }
  return !1;
}, Er = function() {
  var o, c, h;
  if (E(this, tr, !0), ka++ > 1e3 && (P(this, R, Zt).call(this), Ci()), !P(this, R, $n).call(this)) {
    for (const p of i(this, mt))
      i(this, nt).delete(p), J(p, _e), this.schedule(p);
    for (const p of i(this, nt))
      J(p, lt), this.schedule(p);
  }
  const t = i(this, Ie);
  E(this, Ie, []), this.apply();
  var r = Xt = [], n = [], a = Zr = [];
  for (const p of t)
    try {
      P(this, R, zn).call(this, p, r, n);
    } catch (v) {
      throw Ga(p), v;
    }
  if (M = null, a.length > 0) {
    var s = on.ensure();
    for (const p of a)
      s.schedule(p);
  }
  if (Xt = null, Zr = null, P(this, R, $n).call(this)) {
    P(this, R, Qr).call(this, n), P(this, R, Qr).call(this, r);
    for (const [p, v] of i(this, at))
      Ka(p, v);
    a.length > 0 && /** @type {unknown} */
    P(o = M, R, Er).call(o);
    return;
  }
  const d = P(this, R, Ha).call(this);
  if (d) {
    P(c = d, R, Ua).call(c, this);
    return;
  }
  i(this, mt).clear(), i(this, nt).clear();
  for (const p of i(this, rr)) p(this);
  i(this, rr).clear(), Ln = this, wa(n), wa(r), Ln = null, i(this, jr)?.resolve();
  var u = (
    /** @type {Batch | null} */
    /** @type {unknown} */
    M
  );
  if (this.linked && i(this, ar) === 0 && P(this, R, Zt).call(this), i(this, Ie).length > 0) {
    u === null && (u = this, P(this, R, qn).call(this));
    const p = u;
    i(p, Ie).push(...i(this, Ie).filter((v) => !i(p, Ie).includes(v)));
  }
  u !== null && P(h = u, R, Er).call(h);
}, /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
zn = function(t, r, n) {
  t.f ^= re;
  for (var a = t.first; a !== null; ) {
    var s = a.f, d = (s & (Xe | St)) !== 0, u = d && (s & re) !== 0, o = u || (s & me) !== 0 || i(this, at).has(a);
    if (!o && a.fn !== null) {
      d ? a.f ^= re : (s & Cr) !== 0 ? r.push(a) : Rr(a) && ((s & We) !== 0 && i(this, nt).add(a), fr(a));
      var c = a.first;
      if (c !== null) {
        a = c;
        continue;
      }
    }
    for (; a !== null; ) {
      var h = a.next;
      if (h !== null) {
        a = h;
        break;
      }
      a = a.parent;
    }
  }
}, Ha = function() {
  for (var t = i(this, xt); t !== null; ) {
    if (!t.is_fork) {
      for (const [r, [, n]] of this.current)
        if (t.current.has(r) && !n)
          return t;
    }
    t = i(t, xt);
  }
  return null;
}, /**
 * @param {Batch} batch
 */
Ua = function(t) {
  var n;
  for (const [a, s] of t.current)
    !this.previous.has(a) && t.previous.has(a) && this.previous.set(a, t.previous.get(a)), this.current.set(a, s);
  for (const [a, s] of t.async_deriveds) {
    const d = this.async_deriveds.get(a);
    d && s.promise.then(d.resolve);
  }
  const r = (a) => {
    var s = a.reactions;
    if (s !== null)
      for (const o of s) {
        var d = o.f;
        if ((d & ge) !== 0)
          r(
            /** @type {Derived} */
            o
          );
        else {
          var u = (
            /** @type {Effect} */
            o
          );
          d & (er | We) && !this.async_deriveds.has(u) && (i(this, nt).delete(u), J(u, _e), this.schedule(u));
        }
      }
  };
  for (const a of this.current.keys())
    r(a);
  this.oncommit(() => t.discard()), P(n = t, R, Zt).call(n), M = this, P(this, R, Er).call(this);
}, /**
 * @param {Effect[]} effects
 */
Qr = function(t) {
  for (var r = 0; r < t.length; r += 1)
    Va(t[r], i(this, mt), i(this, nt));
}, Ti = function() {
  var h;
  P(this, R, Zt).call(this);
  for (let p = Nn; p !== null; p = i(p, Dt)) {
    var t = p.id < this.id, r = [];
    for (const [v, [m, _]] of this.current) {
      if (p.current.has(v)) {
        var n = (
          /** @type {[any, boolean]} */
          p.current.get(v)[0]
        );
        if (t && m !== n)
          p.current.set(v, [m, _]);
        else
          continue;
      }
      r.push(v);
    }
    if (t)
      for (const [v, m] of this.async_deriveds) {
        const _ = p.async_deriveds.get(v);
        _ && m.promise.then(_.resolve);
      }
    if (i(p, tr)) {
      var a = [...p.current.keys()].filter((v) => !this.current.has(v));
      if (a.length === 0)
        t && p.discard();
      else if (r.length > 0) {
        if (t)
          for (const v of i(this, sr))
            p.unskip_effect(v, (m) => {
              var _;
              (m.f & (We | er)) !== 0 ? p.schedule(m) : P(_ = p, R, Qr).call(_, [m]);
            });
        p.activate();
        var s = /* @__PURE__ */ new Set(), d = /* @__PURE__ */ new Map();
        for (var u of r)
          Ya(u, a, s, d);
        d = /* @__PURE__ */ new Map();
        var o = [...p.current.keys()].filter(
          (v) => this.current.has(v) ? (
            /** @type {[any, boolean]} */
            this.current.get(v)[0] !== v.v
          ) : !0
        );
        if (o.length > 0)
          for (const v of i(this, Nr))
            (v.f & (Qe | me | rn)) === 0 && Qn(v, o, d) && ((v.f & (er | We)) !== 0 ? (J(v, _e), p.schedule(v)) : i(p, mt).add(v));
        if (i(p, Ie).length > 0 && !i(p, It)) {
          p.apply();
          for (var c of i(p, Ie))
            P(h = p, R, zn).call(h, c, [], []);
          E(p, Ie, []);
        }
        p.deactivate();
      }
    }
  }
}, qn = function() {
  Jt === null ? Nn = Jt = this : (E(Jt, Dt, this), E(this, xt, Jt)), Jt = this;
}, Zt = function() {
  var t = i(this, xt), r = i(this, Dt);
  t === null ? Nn = r : E(t, Dt, r), r === null ? Jt = t : E(r, xt, t), this.linked = !1;
};
let Ut = on;
function Ci() {
  try {
    di();
  } catch (e) {
    wt(e, Bn);
  }
}
let ct = null;
function wa(e) {
  var t = e.length;
  if (t !== 0) {
    for (var r = 0; r < t; ) {
      var n = e[r++];
      if ((n.f & (Qe | me)) === 0 && Rr(n) && (ct = /* @__PURE__ */ new Set(), fr(n), n.deps === null && n.first === null && n.nodes === null && n.teardown === null && n.ac === null && ls(n), ct?.size > 0)) {
        zt.clear();
        for (const a of ct) {
          if ((a.f & (Qe | me)) !== 0) continue;
          const s = [a];
          let d = a.parent;
          for (; d !== null; )
            ct.has(d) && (ct.delete(d), s.push(d)), d = d.parent;
          for (let u = s.length - 1; u >= 0; u--) {
            const o = s[u];
            (o.f & (Qe | me)) === 0 && fr(o);
          }
        }
        ct.clear();
      }
    }
    ct = null;
  }
}
function Ya(e, t, r, n) {
  if (!r.has(e) && (r.add(e), e.reactions !== null))
    for (const a of e.reactions) {
      const s = a.f;
      (s & ge) !== 0 ? Ya(
        /** @type {Derived} */
        a,
        t,
        r,
        n
      ) : (s & (er | We)) !== 0 && (s & _e) === 0 && Qn(a, t, n) && (J(a, _e), Xn(
        /** @type {Effect} */
        a
      ));
    }
}
function Qn(e, t, r) {
  const n = r.get(e);
  if (n !== void 0) return n;
  if (e.deps !== null)
    for (const a of e.deps) {
      if (Bt.call(t, a))
        return !0;
      if ((a.f & ge) !== 0 && Qn(
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
function Xn(e) {
  M.schedule(e);
}
function Ka(e, t) {
  if (!((e.f & Xe) !== 0 && (e.f & re) !== 0)) {
    (e.f & _e) !== 0 ? t.d.push(e) : (e.f & lt) !== 0 && t.m.push(e), J(e, re);
    for (var r = e.first; r !== null; )
      Ka(r, t), r = r.next;
  }
}
function Ga(e) {
  J(e, re);
  for (var t = e.first; t !== null; )
    Ga(t), t = t.next;
}
function Fi(e) {
  let t = 0, r = Yt(0), n;
  return () => {
    ra() && (l(r), Xi(() => (t === 0 && (n = al(() => e(() => Tr(r)))), t += 1, () => {
      $t(() => {
        t -= 1, t === 0 && (n?.(), n = void 0, Tr(r));
      });
    })));
  };
}
var ji = lr | ur;
function Ni(e, t, r, n) {
  new Oi(e, t, r, n);
}
var $e, Jn, ze, Mt, Te, qe, ye, Me, pt, Rt, kt, ir, Or, Dr, ht, dn, Z, Di, Pi, Ii, Vn, Xr, en, Hn, Un;
class Oi {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(t, r, n, a) {
    A(this, Z);
    /** @type {Boundary | null} */
    Se(this, "parent");
    Se(this, "is_pending", !1);
    /**
     * API-level transformError transform function. Transforms errors before they reach the `failed` snippet.
     * Inherited from parent boundary, or defaults to identity.
     * @type {(error: unknown) => unknown}
     */
    Se(this, "transform_error");
    /** @type {TemplateNode} */
    A(this, $e);
    /** @type {TemplateNode | null} */
    A(this, Jn, null);
    /** @type {BoundaryProps} */
    A(this, ze);
    /** @type {((anchor: Node) => void)} */
    A(this, Mt);
    /** @type {Effect} */
    A(this, Te);
    /** @type {Effect | null} */
    A(this, qe, null);
    /** @type {Effect | null} */
    A(this, ye, null);
    /** @type {Effect | null} */
    A(this, Me, null);
    /** @type {DocumentFragment | null} */
    A(this, pt, null);
    A(this, Rt, 0);
    A(this, kt, 0);
    A(this, ir, !1);
    /** @type {Set<Effect>} */
    A(this, Or, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    A(this, Dr, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    A(this, ht, null);
    A(this, dn, Fi(() => (E(this, ht, Yt(i(this, Rt))), () => {
      E(this, ht, null);
    })));
    E(this, $e, t), E(this, ze, r), E(this, Mt, (s) => {
      var d = (
        /** @type {Effect} */
        D
      );
      d.b = this, d.f |= In, n(s);
    }), this.parent = /** @type {Effect} */
    D.b, this.transform_error = a ?? this.parent?.transform_error ?? ((s) => s), E(this, Te, na(() => {
      P(this, Z, Vn).call(this);
    }, ji));
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    Va(t, i(this, Or), i(this, Dr));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!i(this, ze).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  update_pending_count(t, r) {
    P(this, Z, Hn).call(this, t, r), E(this, Rt, i(this, Rt) + t), !(!i(this, ht) || i(this, ir)) && (E(this, ir, !0), $t(() => {
      E(this, ir, !1), i(this, ht) && dr(i(this, ht), i(this, Rt));
    }));
  }
  get_effect_pending() {
    return i(this, dn).call(this), l(
      /** @type {Source<number>} */
      i(this, ht)
    );
  }
  /** @param {unknown} error */
  error(t) {
    if (!i(this, ze).onerror && !i(this, ze).failed)
      throw t;
    M?.is_fork ? (i(this, qe) && M.skip_effect(i(this, qe)), i(this, ye) && M.skip_effect(i(this, ye)), i(this, Me) && M.skip_effect(i(this, Me)), M.on_fork_commit(() => {
      P(this, Z, Un).call(this, t);
    })) : P(this, Z, Un).call(this, t);
  }
}
$e = new WeakMap(), Jn = new WeakMap(), ze = new WeakMap(), Mt = new WeakMap(), Te = new WeakMap(), qe = new WeakMap(), ye = new WeakMap(), Me = new WeakMap(), pt = new WeakMap(), Rt = new WeakMap(), kt = new WeakMap(), ir = new WeakMap(), Or = new WeakMap(), Dr = new WeakMap(), ht = new WeakMap(), dn = new WeakMap(), Z = new WeakSet(), Di = function() {
  try {
    E(this, qe, Ve(() => i(this, Mt).call(this, i(this, $e))));
  } catch (t) {
    this.error(t);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
Pi = function(t) {
  const r = i(this, ze).failed;
  r && E(this, Me, Ve(() => {
    r(
      i(this, $e),
      () => t,
      () => () => {
      }
    );
  }));
}, Ii = function() {
  const t = i(this, ze).pending;
  t && (this.is_pending = !0, E(this, ye, Ve(() => t(i(this, $e)))), $t(() => {
    var r = E(this, pt, document.createDocumentFragment()), n = At();
    r.append(n), E(this, qe, P(this, Z, en).call(this, () => Ve(() => i(this, Mt).call(this, n)))), i(this, kt) === 0 && (i(this, $e).before(r), E(this, pt, null), qt(
      /** @type {Effect} */
      i(this, ye),
      () => {
        E(this, ye, null);
      }
    ), P(this, Z, Xr).call(
      this,
      /** @type {Batch} */
      M
    ));
  }));
}, Vn = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), E(this, kt, 0), E(this, Rt, 0), E(this, qe, Ve(() => {
      i(this, Mt).call(this, i(this, $e));
    })), i(this, kt) > 0) {
      var t = E(this, pt, document.createDocumentFragment());
      ia(i(this, qe), t);
      const r = (
        /** @type {(anchor: Node) => void} */
        i(this, ze).pending
      );
      E(this, ye, Ve(() => r(i(this, $e))));
    } else
      P(this, Z, Xr).call(
        this,
        /** @type {Batch} */
        M
      );
  } catch (r) {
    this.error(r);
  }
}, /**
 * @param {Batch} batch
 */
Xr = function(t) {
  this.is_pending = !1, t.transfer_effects(i(this, Or), i(this, Dr));
}, /**
 * @template T
 * @param {() => T} fn
 */
en = function(t) {
  var r = D, n = C, a = Ye;
  ot(i(this, Te)), Ke(i(this, Te)), or(i(this, Te).ctx);
  try {
    return Ut.ensure(), t();
  } catch (s) {
    return za(s), null;
  } finally {
    ot(r), Ke(n), or(a);
  }
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 * @param {Batch} batch
 */
Hn = function(t, r) {
  var n;
  if (!this.has_pending_snippet()) {
    this.parent && P(n = this.parent, Z, Hn).call(n, t, r);
    return;
  }
  E(this, kt, i(this, kt) + t), i(this, kt) === 0 && (P(this, Z, Xr).call(this, r), i(this, ye) && qt(i(this, ye), () => {
    E(this, ye, null);
  }), i(this, pt) && (i(this, $e).before(i(this, pt)), E(this, pt, null)));
}, /**
 * @param {unknown} error
 */
Un = function(t) {
  i(this, qe) && (Fe(i(this, qe)), E(this, qe, null)), i(this, ye) && (Fe(i(this, ye)), E(this, ye, null)), i(this, Me) && (Fe(i(this, Me)), E(this, Me, null));
  var r = i(this, ze).onerror;
  let n = i(this, ze).failed;
  var a = !1, s = !1;
  const d = () => {
    if (a) {
      ki();
      return;
    }
    a = !0, s && vi(), i(this, Me) !== null && qt(i(this, Me), () => {
      E(this, Me, null);
    }), P(this, Z, en).call(this, () => {
      P(this, Z, Vn).call(this);
    });
  }, u = (o) => {
    try {
      s = !0, r?.(o, d), s = !1;
    } catch (c) {
      wt(c, i(this, Te) && i(this, Te).parent);
    }
    n && E(this, Me, P(this, Z, en).call(this, () => {
      try {
        return Ve(() => {
          var c = (
            /** @type {Effect} */
            D
          );
          c.b = this, c.f |= In, n(
            i(this, $e),
            () => o,
            () => d
          );
        });
      } catch (c) {
        return wt(
          c,
          /** @type {Effect} */
          i(this, Te).parent
        ), null;
      }
    }));
  };
  $t(() => {
    var o;
    try {
      o = this.transform_error(t);
    } catch (c) {
      wt(c, i(this, Te) && i(this, Te).parent);
      return;
    }
    o !== null && typeof o == "object" && typeof /** @type {any} */
    o.then == "function" ? o.then(
      u,
      /** @param {unknown} e */
      (c) => wt(c, i(this, Te) && i(this, Te).parent)
    ) : u(o);
  });
};
function Mi(e, t, r, n) {
  const a = ea;
  var s = e.filter((v) => !v.settled);
  if (r.length === 0 && s.length === 0) {
    n(t.map(a));
    return;
  }
  var d = (
    /** @type {Effect} */
    D
  ), u = Ri(), o = s.length === 1 ? s[0].promise : s.length > 1 ? Promise.all(s.map((v) => v.promise)) : null;
  function c(v) {
    if ((d.f & Qe) === 0) {
      u();
      try {
        n(v);
      } catch (m) {
        wt(m, d);
      }
      an();
    }
  }
  var h = Wa();
  if (r.length === 0) {
    o.then(() => c(t.map(a))).finally(h);
    return;
  }
  function p() {
    Promise.all(r.map((v) => /* @__PURE__ */ Li(v))).then((v) => c([...t.map(a), ...v])).catch((v) => wt(v, d)).finally(h);
  }
  o ? o.then(() => {
    u(), p(), an();
  }) : p();
}
function Ri() {
  var e = (
    /** @type {Effect} */
    D
  ), t = C, r = Ye, n = (
    /** @type {Batch} */
    M
  );
  return function(s = !0) {
    ot(e), Ke(t), or(r), s && (e.f & Qe) === 0 && (n?.activate(), n?.apply());
  };
}
function an(e = !0) {
  ot(null), Ke(null), or(null), e && M?.deactivate();
}
function Wa() {
  var e = (
    /** @type {Effect} */
    D
  ), t = (
    /** @type {Boundary} */
    e.b
  ), r = (
    /** @type {Batch} */
    M
  ), n = t.is_rendered();
  return t.update_pending_count(1, r), r.increment(n, e), () => {
    t.update_pending_count(-1, r), r.decrement(n, e);
  };
}
// @__NO_SIDE_EFFECTS__
function ea(e) {
  var t = ge | _e;
  return D !== null && (D.f |= ur), {
    ctx: Ye,
    deps: null,
    effects: null,
    equals: Ma,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      te
    ),
    wv: 0,
    parent: D,
    ac: null
  };
}
const Wr = Symbol("obsolete");
// @__NO_SIDE_EFFECTS__
function Li(e, t, r) {
  let n = (
    /** @type {Effect | null} */
    D
  );
  n === null && ai();
  var a = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), s = Yt(
    /** @type {V} */
    te
  ), d = !C, u = /* @__PURE__ */ new Set();
  return Qi(() => {
    var o = (
      /** @type {Effect} */
      D
    ), c = Da();
    a = c.promise;
    try {
      Promise.resolve(e()).then(c.resolve, (m) => {
        m !== vn && c.reject(m);
      }).finally(an);
    } catch (m) {
      c.reject(m), an();
    }
    var h = (
      /** @type {Batch} */
      M
    );
    if (d) {
      if ((o.f & Kt) !== 0)
        var p = Wa();
      if (
        /** @type {Boundary} */
        n.b.is_rendered()
      )
        h.async_deriveds.get(o)?.reject(Wr);
      else
        for (const m of u.values())
          m.reject(Wr);
      u.add(c), h.async_deriveds.set(o, c);
    }
    const v = (m, _ = void 0) => {
      p?.(), u.delete(c), _ !== Wr && (h.activate(), _ ? (s.f |= Et, dr(s, _)) : ((s.f & Et) !== 0 && (s.f ^= Et), dr(s, m)), h.deactivate());
    };
    c.promise.then(v, (m) => v(null, m || "unknown"));
  }), Wi(() => {
    for (const o of u)
      o.reject(Wr);
  }), new Promise((o) => {
    function c(h) {
      function p() {
        h === a ? o(s) : c(a);
      }
      h.then(p, p);
    }
    c(a);
  });
}
// @__NO_SIDE_EFFECTS__
function fe(e) {
  const t = /* @__PURE__ */ ea(e);
  return fs(t), t;
}
// @__NO_SIDE_EFFECTS__
function Bi(e) {
  const t = /* @__PURE__ */ ea(e);
  return t.equals = Ra, t;
}
function $i(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var r = 0; r < t.length; r += 1)
      Fe(
        /** @type {Effect} */
        t[r]
      );
  }
}
function ta(e) {
  var t, r = D, n = e.parent;
  if (!Tt && n !== null && e.v !== te && // if it was never evaluated before, it's guaranteed to fail downstream, so we try to execute instead
  (n.f & (Qe | me)) !== 0)
    return mi(), e.v;
  ot(n);
  try {
    e.f &= ~Ht, $i(e), t = ps(e);
  } finally {
    ot(r);
  }
  return t;
}
function Ja(e) {
  var t = ta(e);
  if (!e.equals(t) && (e.wv = cs(), (!M?.is_fork || e.deps === null) && (M !== null ? (M.capture(e, t, !0), Ln?.capture(e, t, !0)) : e.v = t, e.deps === null))) {
    J(e, re);
    return;
  }
  Tt || (Je !== null ? (ra() || M?.is_fork) && Je.set(e, t) : Zn(e));
}
function zi(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      (t.teardown || t.ac) && (t.teardown?.(), t.ac?.abort(vn), t.fn !== null && (t.teardown = Xs), t.ac = null, Fr(t, 0), aa(t));
}
function Za(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      t.teardown && t.fn !== null && fr(t);
}
let sn = /* @__PURE__ */ new Set();
const zt = /* @__PURE__ */ new Map();
let Qa = !1;
function Yt(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Ma,
    rv: 0,
    wv: 0
  };
  return r;
}
// @__NO_SIDE_EFFECTS__
function xe(e, t) {
  const r = Yt(e);
  return fs(r), r;
}
// @__NO_SIDE_EFFECTS__
function qi(e, t = !1, r = !0) {
  const n = Yt(e);
  return t || (n.equals = Ra), n;
}
function he(e, t, r = !1) {
  C !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Ze || (C.f & rn) !== 0) && $a() && (C.f & (ge | We | er | rn)) !== 0 && (Ue === null || !Bt.call(Ue, e)) && ci();
  let n = r ? _t(t) : t;
  return dr(e, n, Zr);
}
function dr(e, t, r = null) {
  if (!e.equals(t)) {
    zt.set(e, Tt ? t : e.v);
    var n = Ut.ensure();
    if (n.capture(e, t), (e.f & ge) !== 0) {
      const a = (
        /** @type {Derived} */
        e
      );
      (e.f & _e) !== 0 && ta(a), Je === null && Zn(a);
    }
    e.wv = cs(), Xa(e, _e, r), D !== null && (D.f & re) !== 0 && (D.f & (Xe | St)) === 0 && (Be === null ? rl([e]) : Be.push(e)), !n.is_fork && sn.size > 0 && !Qa && Vi();
  }
  return t;
}
function Vi() {
  Qa = !1;
  for (const e of sn) {
    (e.f & re) !== 0 && J(e, lt);
    let t;
    try {
      t = Rr(e);
    } catch {
      t = !0;
    }
    t && fr(e);
  }
  sn.clear();
}
function Tr(e) {
  he(e, e.v + 1);
}
function Xa(e, t, r) {
  var n = e.reactions;
  if (n !== null)
    for (var a = n.length, s = 0; s < a; s++) {
      var d = n[s], u = d.f, o = (u & _e) === 0;
      if (o && J(d, t), (u & rn) !== 0)
        sn.add(
          /** @type {Effect} */
          d
        );
      else if ((u & ge) !== 0) {
        var c = (
          /** @type {Derived} */
          d
        );
        Je?.delete(c), (u & Ht) === 0 && (u & He && (D === null || (D.f & nn) === 0) && (d.f |= Ht), Xa(c, lt, r));
      } else if (o) {
        var h = (
          /** @type {Effect} */
          d
        );
        (u & We) !== 0 && ct !== null && ct.add(h), r !== null ? r.push(h) : Xn(h);
      }
    }
}
function _t(e) {
  if (typeof e != "object" || e === null || jn in e)
    return e;
  const t = Qs(e);
  if (t !== Js && t !== Zs)
    return e;
  var r = /* @__PURE__ */ new Map(), n = Oa(e), a = /* @__PURE__ */ xe(0), s = Vt, d = (u) => {
    if (Vt === s)
      return u();
    var o = C, c = Vt;
    Ke(null), Sa(s);
    var h = u();
    return Ke(o), Sa(c), h;
  };
  return n && r.set("length", /* @__PURE__ */ xe(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(u, o, c) {
        (!("value" in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && fi();
        var h = r.get(o);
        return h === void 0 ? d(() => {
          var p = /* @__PURE__ */ xe(c.value);
          return r.set(o, p), p;
        }) : he(h, c.value, !0), !0;
      },
      deleteProperty(u, o) {
        var c = r.get(o);
        if (c === void 0) {
          if (o in u) {
            const h = d(() => /* @__PURE__ */ xe(te));
            r.set(o, h), Tr(a);
          }
        } else
          he(c, te), Tr(a);
        return !0;
      },
      get(u, o, c) {
        if (o === jn)
          return e;
        var h = r.get(o), p = o in u;
        if (h === void 0 && (!p || Sr(u, o)?.writable) && (h = d(() => {
          var m = _t(p ? u[o] : te), _ = /* @__PURE__ */ xe(m);
          return _;
        }), r.set(o, h)), h !== void 0) {
          var v = l(h);
          return v === te ? void 0 : v;
        }
        return Reflect.get(u, o, c);
      },
      getOwnPropertyDescriptor(u, o) {
        var c = Reflect.getOwnPropertyDescriptor(u, o);
        if (c && "value" in c) {
          var h = r.get(o);
          h && (c.value = l(h));
        } else if (c === void 0) {
          var p = r.get(o), v = p?.v;
          if (p !== void 0 && v !== te)
            return {
              enumerable: !0,
              configurable: !0,
              value: v,
              writable: !0
            };
        }
        return c;
      },
      has(u, o) {
        if (o === jn)
          return !0;
        var c = r.get(o), h = c !== void 0 && c.v !== te || Reflect.has(u, o);
        if (c !== void 0 || D !== null && (!h || Sr(u, o)?.writable)) {
          c === void 0 && (c = d(() => {
            var v = h ? _t(u[o]) : te, m = /* @__PURE__ */ xe(v);
            return m;
          }), r.set(o, c));
          var p = l(c);
          if (p === te)
            return !1;
        }
        return h;
      },
      set(u, o, c, h) {
        var p = r.get(o), v = o in u;
        if (n && o === "length")
          for (var m = c; m < /** @type {Source<number>} */
          p.v; m += 1) {
            var _ = r.get(m + "");
            _ !== void 0 ? he(_, te) : m in u && (_ = d(() => /* @__PURE__ */ xe(te)), r.set(m + "", _));
          }
        if (p === void 0)
          (!v || Sr(u, o)?.writable) && (p = d(() => /* @__PURE__ */ xe(void 0)), he(p, _t(c)), r.set(o, p));
        else {
          v = p.v !== te;
          var N = d(() => _t(c));
          he(p, N);
        }
        var b = Reflect.getOwnPropertyDescriptor(u, o);
        if (b?.set && b.set.call(h, c), !v) {
          if (n && typeof o == "string") {
            var w = (
              /** @type {Source<number>} */
              r.get("length")
            ), Y = Number(o);
            Number.isInteger(Y) && Y >= w.v && he(w, Y + 1);
          }
          Tr(a);
        }
        return !0;
      },
      ownKeys(u) {
        l(a);
        var o = Reflect.ownKeys(u).filter((p) => {
          var v = r.get(p);
          return v === void 0 || v.v !== te;
        });
        for (var [c, h] of r)
          h.v !== te && !(c in u) && o.push(c);
        return o;
      },
      setPrototypeOf() {
        ui();
      }
    }
  );
}
var Ea, es, ts, rs;
function Hi() {
  if (Ea === void 0) {
    Ea = window, es = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, r = Text.prototype;
    ts = Sr(t, "firstChild").get, rs = Sr(t, "nextSibling").get, xa(e) && (e[Mn] = void 0, e[ni] = null, e[Rn] = void 0, e.__e = void 0), xa(r) && (r[wr] = void 0);
  }
}
function At(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function ln(e) {
  return (
    /** @type {TemplateNode | null} */
    ts.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function Mr(e) {
  return (
    /** @type {TemplateNode | null} */
    rs.call(e)
  );
}
function f(e, t) {
  return /* @__PURE__ */ ln(e);
}
function mr(e, t = !1) {
  {
    var r = /* @__PURE__ */ ln(e);
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ Mr(r) : r;
  }
}
function g(e, t = 1, r = !1) {
  let n = e;
  for (; t--; )
    n = /** @type {TemplateNode} */
    /* @__PURE__ */ Mr(n);
  return n;
}
function Ui(e) {
  e.textContent = "";
}
function ns() {
  return !1;
}
function Yi(e, t, r) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElementNS(xi, e, void 0)
  );
}
function as(e) {
  var t = C, r = D;
  Ke(null), ot(null);
  try {
    return e();
  } finally {
    Ke(t), ot(r);
  }
}
function Ki(e) {
  D === null && (C === null && oi(), li()), Tt && ii();
}
function Gi(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function Ct(e, t) {
  var r = D;
  r !== null && (r.f & me) !== 0 && (e |= me);
  var n = {
    ctx: Ye,
    deps: null,
    nodes: null,
    f: e | _e | He,
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
  M?.register_created_effect(n);
  var a = n;
  if ((e & Cr) !== 0)
    Xt !== null ? Xt.push(n) : Ut.ensure().schedule(n);
  else if (t !== null) {
    try {
      fr(n);
    } catch (d) {
      throw Fe(n), d;
    }
    a.deps === null && a.teardown === null && a.nodes === null && a.first === a.last && // either `null`, or a singular child
    (a.f & ur) === 0 && (a = a.first, (e & We) !== 0 && (e & lr) !== 0 && a !== null && (a.f |= lr));
  }
  if (a !== null && (a.parent = r, r !== null && Gi(a, r), C !== null && (C.f & ge) !== 0 && (e & St) === 0)) {
    var s = (
      /** @type {Derived} */
      C
    );
    (s.effects ?? (s.effects = [])).push(a);
  }
  return n;
}
function ra() {
  return C !== null && !Ze;
}
function Wi(e) {
  const t = Ct(cn, null);
  return J(t, re), t.teardown = e, t;
}
function Ji(e) {
  Ki();
  var t = (
    /** @type {Effect} */
    D.f
  ), r = !C && (t & Xe) !== 0 && (t & Kt) === 0;
  if (r) {
    var n = (
      /** @type {ComponentContext} */
      Ye
    );
    (n.e ?? (n.e = [])).push(e);
  } else
    return ss(e);
}
function ss(e) {
  return Ct(Cr | ri, e);
}
function Zi(e) {
  Ut.ensure();
  const t = Ct(St | ur, e);
  return (r = {}) => new Promise((n) => {
    r.outro ? qt(t, () => {
      Fe(t), n(void 0);
    }) : (Fe(t), n(void 0));
  });
}
function Qi(e) {
  return Ct(er | ur, e);
}
function Xi(e, t = 0) {
  return Ct(cn | t, e);
}
function ue(e, t = [], r = [], n = []) {
  Mi(n, t, r, (a) => {
    Ct(cn, () => e(...a.map(l)));
  });
}
function na(e, t = 0) {
  var r = Ct(We | t, e);
  return r;
}
function Ve(e) {
  return Ct(Xe | ur, e);
}
function is(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = Tt, n = C;
    Aa(!0), Ke(null);
    try {
      t.call(null);
    } finally {
      Aa(r), Ke(n);
    }
  }
}
function aa(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    const a = r.ac;
    a !== null && as(() => {
      a.abort(vn);
    });
    var n = r.next;
    (r.f & St) !== 0 ? r.parent = null : Fe(r, t), r = n;
  }
}
function el(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & Xe) === 0 && Fe(t), t = r;
  }
}
function Fe(e, t = !0) {
  var r = !1;
  (t || (e.f & ti) !== 0) && e.nodes !== null && e.nodes.end !== null && (tl(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), r = !0), J(e, ma), aa(e, t && !r), Fr(e, 0);
  var n = e.nodes && e.nodes.t;
  if (n !== null)
    for (const s of n)
      s.stop();
  is(e), e.f ^= ma, e.f |= Qe;
  var a = e.parent;
  a !== null && a.first !== null && ls(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function tl(e, t) {
  for (; e !== null; ) {
    var r = e === t ? null : /* @__PURE__ */ Mr(e);
    e.remove(), e = r;
  }
}
function ls(e) {
  var t = e.parent, r = e.prev, n = e.next;
  r !== null && (r.next = n), n !== null && (n.prev = r), t !== null && (t.first === e && (t.first = n), t.last === e && (t.last = r));
}
function qt(e, t, r = !0) {
  var n = [];
  os(e, n, !0);
  var a = () => {
    r && Fe(e), t && t();
  }, s = n.length;
  if (s > 0) {
    var d = () => --s || a();
    for (var u of n)
      u.out(d);
  } else
    a();
}
function os(e, t, r) {
  if ((e.f & me) === 0) {
    e.f ^= me;
    var n = e.nodes && e.nodes.t;
    if (n !== null)
      for (const u of n)
        (u.is_global || r) && t.push(u);
    for (var a = e.first; a !== null; ) {
      var s = a.next;
      if ((a.f & St) === 0) {
        var d = (a.f & lr) !== 0 || // If this is a branch effect without a block effect parent,
        // it means the parent block effect was pruned. In that case,
        // transparency information was transferred to the branch effect.
        (a.f & Xe) !== 0 && (e.f & We) !== 0;
        os(a, t, d ? r : !1);
      }
      a = s;
    }
  }
}
function sa(e) {
  ds(e, !0);
}
function ds(e, t) {
  if ((e.f & me) !== 0) {
    e.f ^= me, (e.f & re) === 0 && (J(e, _e), Ut.ensure().schedule(e));
    for (var r = e.first; r !== null; ) {
      var n = r.next, a = (r.f & lr) !== 0 || (r.f & Xe) !== 0;
      ds(r, a ? t : !1), r = n;
    }
    var s = e.nodes && e.nodes.t;
    if (s !== null)
      for (const d of s)
        (d.is_global || t) && d.in();
  }
}
function ia(e, t) {
  if (e.nodes)
    for (var r = e.nodes.start, n = e.nodes.end; r !== null; ) {
      var a = r === n ? null : /* @__PURE__ */ Mr(r);
      t.append(r), r = a;
    }
}
let tn = !1, Tt = !1;
function Aa(e) {
  Tt = e;
}
let C = null, Ze = !1;
function Ke(e) {
  C = e;
}
let D = null;
function ot(e) {
  D = e;
}
let Ue = null;
function fs(e) {
  C !== null && (Ue === null ? Ue = [e] : Ue.push(e));
}
let Ce = null, Pe = 0, Be = null;
function rl(e) {
  Be = e;
}
let us = 1, Nt = 0, Vt = Nt;
function Sa(e) {
  Vt = e;
}
function cs() {
  return ++us;
}
function Rr(e) {
  var t = e.f;
  if ((t & _e) !== 0)
    return !0;
  if (t & ge && (e.f &= ~Ht), (t & lt) !== 0) {
    for (var r = (
      /** @type {Value[]} */
      e.deps
    ), n = r.length, a = 0; a < n; a++) {
      var s = r[a];
      if (Rr(
        /** @type {Derived} */
        s
      ) && Ja(
        /** @type {Derived} */
        s
      ), s.wv > e.wv)
        return !0;
    }
    (t & He) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    Je === null && J(e, re);
  }
  return !1;
}
function vs(e, t, r = !0) {
  var n = e.reactions;
  if (n !== null && !(Ue !== null && Bt.call(Ue, e)))
    for (var a = 0; a < n.length; a++) {
      var s = n[a];
      (s.f & ge) !== 0 ? vs(
        /** @type {Derived} */
        s,
        t,
        !1
      ) : t === s && (r ? J(s, _e) : (s.f & re) !== 0 && J(s, lt), Xn(
        /** @type {Effect} */
        s
      ));
    }
}
function ps(e) {
  var N;
  var t = Ce, r = Pe, n = Be, a = C, s = Ue, d = Ye, u = Ze, o = Vt, c = e.f;
  Ce = /** @type {null | Value[]} */
  null, Pe = 0, Be = null, C = (c & (Xe | St)) === 0 ? e : null, Ue = null, or(e.ctx), Ze = !1, Vt = ++Nt, e.ac !== null && (as(() => {
    e.ac.abort(vn);
  }), e.ac = null);
  try {
    e.f |= nn;
    var h = (
      /** @type {Function} */
      e.fn
    ), p = h();
    e.f |= Kt;
    var v = e.deps, m = M?.is_fork;
    if (Ce !== null) {
      var _;
      if (m || Fr(e, Pe), v !== null && Pe > 0)
        for (v.length = Pe + Ce.length, _ = 0; _ < Ce.length; _++)
          v[Pe + _] = Ce[_];
      else
        e.deps = v = Ce;
      if (ra() && (e.f & He) !== 0)
        for (_ = Pe; _ < v.length; _++)
          ((N = v[_]).reactions ?? (N.reactions = [])).push(e);
    } else !m && v !== null && Pe < v.length && (Fr(e, Pe), v.length = Pe);
    if ($a() && Be !== null && !Ze && v !== null && (e.f & (ge | lt | _e)) === 0)
      for (_ = 0; _ < /** @type {Source[]} */
      Be.length; _++)
        vs(
          Be[_],
          /** @type {Effect} */
          e
        );
    if (a !== null && a !== e) {
      if (Nt++, a.deps !== null)
        for (let b = 0; b < r; b += 1)
          a.deps[b].rv = Nt;
      if (t !== null)
        for (const b of t)
          b.rv = Nt;
      Be !== null && (n === null ? n = Be : n.push(.../** @type {Source[]} */
      Be));
    }
    return (e.f & Et) !== 0 && (e.f ^= Et), p;
  } catch (b) {
    return za(b);
  } finally {
    e.f ^= nn, Ce = t, Pe = r, Be = n, C = a, Ue = s, or(d), Ze = u, Vt = o;
  }
}
function nl(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var n = Gs.call(r, e);
    if (n !== -1) {
      var a = r.length - 1;
      a === 0 ? r = t.reactions = null : (r[n] = r[a], r.pop());
    }
  }
  if (r === null && (t.f & ge) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Ce === null || !Bt.call(Ce, t))) {
    var s = (
      /** @type {Derived} */
      t
    );
    (s.f & He) !== 0 && (s.f ^= He, s.f &= ~Ht), s.v !== te && Zn(s), zi(s), Fr(s, 0);
  }
}
function Fr(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var n = t; n < r.length; n++)
      nl(e, r[n]);
}
function fr(e) {
  var t = e.f;
  if ((t & Qe) === 0) {
    J(e, re);
    var r = D, n = tn;
    D = e, tn = !0;
    try {
      (t & (We | Pa)) !== 0 ? el(e) : aa(e), is(e);
      var a = ps(e);
      e.teardown = typeof a == "function" ? a : null, e.wv = us;
      var s;
    } finally {
      tn = n, D = r;
    }
  }
}
function l(e) {
  var t = e.f, r = (t & ge) !== 0;
  if (C !== null && !Ze) {
    var n = D !== null && (D.f & Qe) !== 0;
    if (!n && (Ue === null || !Bt.call(Ue, e))) {
      var a = C.deps;
      if ((C.f & nn) !== 0)
        e.rv < Nt && (e.rv = Nt, Ce === null && a !== null && a[Pe] === e ? Pe++ : Ce === null ? Ce = [e] : Ce.push(e));
      else {
        C.deps ?? (C.deps = []), Bt.call(C.deps, e) || C.deps.push(e);
        var s = e.reactions;
        s === null ? e.reactions = [C] : Bt.call(s, C) || s.push(C);
      }
    }
  }
  if (Tt && zt.has(e))
    return zt.get(e);
  if (r) {
    var d = (
      /** @type {Derived} */
      e
    );
    if (Tt) {
      var u = d.v;
      return ((d.f & re) === 0 && d.reactions !== null || _s(d)) && (u = ta(d)), zt.set(d, u), u;
    }
    var o = (d.f & He) === 0 && !Ze && C !== null && (tn || (C.f & He) !== 0), c = (d.f & Kt) === 0;
    Rr(d) && (o && (d.f |= He), Ja(d)), o && !c && (Za(d), hs(d));
  }
  if (Je?.has(e))
    return Je.get(e);
  if ((e.f & Et) !== 0)
    throw e.v;
  return e.v;
}
function hs(e) {
  if (e.f |= He, e.deps !== null)
    for (const t of e.deps)
      (t.reactions ?? (t.reactions = [])).push(e), (t.f & ge) !== 0 && (t.f & He) === 0 && (Za(
        /** @type {Derived} */
        t
      ), hs(
        /** @type {Derived} */
        t
      ));
}
function _s(e) {
  if (e.v === te) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (zt.has(t) || (t.f & ge) !== 0 && _s(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function al(e) {
  var t = Ze;
  try {
    return Ze = !0, e();
  } finally {
    Ze = t;
  }
}
const sl = ["touchstart", "touchmove"];
function il(e) {
  return sl.includes(e);
}
const Ot = Symbol("events"), gs = /* @__PURE__ */ new Set(), Yn = /* @__PURE__ */ new Set();
function Dn(e, t, r) {
  (t[Ot] ?? (t[Ot] = {}))[e] = r;
}
function ll(e) {
  for (var t = 0; t < e.length; t++)
    gs.add(e[t]);
  for (var r of Yn)
    r(e);
}
let Ta = null;
function Ca(e) {
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), n = e.type, a = e.composedPath?.() || [], s = (
    /** @type {null | Element} */
    a[0] || e.target
  );
  Ta = e;
  var d = 0, u = Ta === e && e[Ot];
  if (u) {
    var o = a.indexOf(u);
    if (o !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e[Ot] = t;
      return;
    }
    var c = a.indexOf(t);
    if (c === -1)
      return;
    o <= c && (d = o);
  }
  if (s = /** @type {Element} */
  a[d] || e.target, s !== t) {
    Ws(e, "currentTarget", {
      configurable: !0,
      get() {
        return s || r;
      }
    });
    var h = C, p = D;
    Ke(null), ot(null);
    try {
      for (var v, m = []; s !== null; ) {
        var _ = s.assignedSlot || s.parentNode || /** @type {any} */
        s.host || null;
        try {
          var N = s[Ot]?.[n];
          N != null && (!/** @type {any} */
          s.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === s) && N.call(s, e);
        } catch (b) {
          v ? m.push(b) : v = b;
        }
        if (e.cancelBubble || _ === t || _ === null)
          break;
        s = _;
      }
      if (v) {
        for (let b of m)
          queueMicrotask(() => {
            throw b;
          });
        throw v;
      }
    } finally {
      e[Ot] = t, delete e.currentTarget, Ke(h), ot(p);
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
function dl(e) {
  return (
    /** @type {string} */
    ol?.createHTML(e) ?? e
  );
}
function fl(e) {
  var t = Yi("template");
  return t.innerHTML = dl(e.replaceAll("<!>", "<!---->")), t.content;
}
function Kn(e, t) {
  var r = (
    /** @type {Effect} */
    D
  );
  r.nodes === null && (r.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function $(e, t) {
  var r = (t & bi) !== 0, n = (t & yi) !== 0, a, s = !e.startsWith("<!>");
  return () => {
    a === void 0 && (a = fl(s ? e : "<!>" + e), r || (a = /** @type {TemplateNode} */
    /* @__PURE__ */ ln(a)));
    var d = (
      /** @type {TemplateNode} */
      n || es ? document.importNode(a, !0) : a.cloneNode(!0)
    );
    if (r) {
      var u = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ ln(d)
      ), o = (
        /** @type {TemplateNode} */
        d.lastChild
      );
      Kn(u, o);
    } else
      Kn(d, d);
    return d;
  };
}
function Fa() {
  var e = document.createDocumentFragment(), t = document.createComment(""), r = At();
  return e.append(t, r), Kn(t, r), e;
}
function L(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function k(e, t) {
  var r = t == null ? "" : typeof t == "object" ? `${t}` : t;
  r !== /** @type {any} */
  (e[wr] ?? (e[wr] = e.nodeValue)) && (e[wr] = r, e.nodeValue = `${r}`);
}
function ul(e, t) {
  return cl(e, t);
}
const Jr = /* @__PURE__ */ new Map();
function cl(e, { target: t, anchor: r, props: n = {}, events: a, context: s, intro: d = !0, transformError: u }) {
  Hi();
  var o = void 0, c = Zi(() => {
    var h = r ?? t.appendChild(At());
    Ni(
      /** @type {TemplateNode} */
      h,
      {
        pending: () => {
        }
      },
      (m) => {
        La({});
        var _ = (
          /** @type {ComponentContext} */
          Ye
        );
        s && (_.c = s), a && (n.$$events = a), o = e(m, n) || {}, Ba();
      },
      u
    );
    var p = /* @__PURE__ */ new Set(), v = (m) => {
      for (var _ = 0; _ < m.length; _++) {
        var N = m[_];
        if (!p.has(N)) {
          p.add(N);
          var b = il(N);
          for (const z of [t, document]) {
            var w = Jr.get(z);
            w === void 0 && (w = /* @__PURE__ */ new Map(), Jr.set(z, w));
            var Y = w.get(N);
            Y === void 0 ? (z.addEventListener(N, Ca, { passive: b }), w.set(N, 1)) : w.set(N, Y + 1);
          }
        }
      }
    };
    return v(un(gs)), Yn.add(v), () => {
      for (var m of p)
        for (const b of [t, document]) {
          var _ = (
            /** @type {Map<string, number>} */
            Jr.get(b)
          ), N = (
            /** @type {number} */
            _.get(m)
          );
          --N == 0 ? (b.removeEventListener(m, Ca), _.delete(m), _.size === 0 && Jr.delete(b)) : _.set(m, N);
        }
      Yn.delete(v), h !== r && h.parentNode?.removeChild(h);
    };
  });
  return Gn.set(o, c), o;
}
let Gn = /* @__PURE__ */ new WeakMap();
function vl(e, t) {
  const r = Gn.get(e);
  return r ? (Gn.delete(e), r(t)) : Promise.resolve();
}
var Ge, st, Re, Lt, Pr, Ir, fn;
class pl {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, r = !0) {
    /** @type {TemplateNode} */
    Se(this, "anchor");
    /** @type {Map<Batch, Key>} */
    A(this, Ge, /* @__PURE__ */ new Map());
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
    A(this, st, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    A(this, Re, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    A(this, Lt, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    A(this, Pr, !0);
    /**
     * @param {Batch} batch
     */
    A(this, Ir, (t) => {
      if (i(this, Ge).has(t)) {
        var r = (
          /** @type {Key} */
          i(this, Ge).get(t)
        ), n = i(this, st).get(r);
        if (n)
          sa(n), i(this, Lt).delete(r);
        else {
          var a = i(this, Re).get(r);
          a && (i(this, st).set(r, a.effect), i(this, Re).delete(r), a.fragment.lastChild.remove(), this.anchor.before(a.fragment), n = a.effect);
        }
        for (const [s, d] of i(this, Ge)) {
          if (i(this, Ge).delete(s), s === t)
            break;
          const u = i(this, Re).get(d);
          u && (Fe(u.effect), i(this, Re).delete(d));
        }
        for (const [s, d] of i(this, st)) {
          if (s === r || i(this, Lt).has(s)) continue;
          const u = () => {
            if (Array.from(i(this, Ge).values()).includes(s)) {
              var c = document.createDocumentFragment();
              ia(d, c), c.append(At()), i(this, Re).set(s, { effect: d, fragment: c });
            } else
              Fe(d);
            i(this, Lt).delete(s), i(this, st).delete(s);
          };
          i(this, Pr) || !n ? (i(this, Lt).add(s), qt(d, u, !1)) : u();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    A(this, fn, (t) => {
      i(this, Ge).delete(t);
      const r = Array.from(i(this, Ge).values());
      for (const [n, a] of i(this, Re))
        r.includes(n) || (Fe(a.effect), i(this, Re).delete(n));
    });
    this.anchor = t, E(this, Pr, r);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, r) {
    var n = (
      /** @type {Batch} */
      M
    ), a = ns();
    if (r && !i(this, st).has(t) && !i(this, Re).has(t))
      if (a) {
        var s = document.createDocumentFragment(), d = At();
        s.append(d), i(this, Re).set(t, {
          effect: Ve(() => r(d)),
          fragment: s
        });
      } else
        i(this, st).set(
          t,
          Ve(() => r(this.anchor))
        );
    if (i(this, Ge).set(n, t), a) {
      for (const [u, o] of i(this, st))
        u === t ? n.unskip_effect(o) : n.skip_effect(o);
      for (const [u, o] of i(this, Re))
        u === t ? n.unskip_effect(o.effect) : n.skip_effect(o.effect);
      n.oncommit(i(this, Ir)), n.ondiscard(i(this, fn));
    } else
      i(this, Ir).call(this, n);
  }
}
Ge = new WeakMap(), st = new WeakMap(), Re = new WeakMap(), Lt = new WeakMap(), Pr = new WeakMap(), Ir = new WeakMap(), fn = new WeakMap();
function ut(e, t, r = !1) {
  var n = new pl(e), a = r ? lr : 0;
  function s(d, u) {
    n.ensure(d, u);
  }
  na(() => {
    var d = !1;
    t((u, o = 0) => {
      d = !0, s(o, u);
    }), d || s(-1, null);
  }, a);
}
function Oe(e, t) {
  return t;
}
function hl(e, t, r) {
  for (var n = [], a = t.length, s, d = t.length, u = 0; u < a; u++) {
    let p = t[u];
    qt(
      p,
      () => {
        if (s) {
          if (s.pending.delete(p), s.done.add(p), s.pending.size === 0) {
            var v = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            Wn(e, un(s.done)), v.delete(s), v.size === 0 && (e.outrogroups = null);
          }
        } else
          d -= 1;
      },
      !1
    );
  }
  if (d === 0) {
    var o = n.length === 0 && r !== null;
    if (o) {
      var c = (
        /** @type {Element} */
        r
      ), h = (
        /** @type {Element} */
        c.parentNode
      );
      Ui(h), h.append(c), e.items.clear();
    }
    Wn(e, t, !o);
  } else
    s = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ?? (e.outrogroups = /* @__PURE__ */ new Set())).add(s);
}
function Wn(e, t, r = !0) {
  var n;
  if (e.pending.size > 0) {
    n = /* @__PURE__ */ new Set();
    for (const d of e.pending.values())
      for (const u of d)
        n.add(
          /** @type {EachItem} */
          e.items.get(u).e
        );
  }
  for (var a = 0; a < t.length; a++) {
    var s = t[a];
    if (n?.has(s)) {
      s.f |= it;
      const d = document.createDocumentFragment();
      ia(s, d);
    } else
      Fe(t[a], r);
  }
}
var ja;
function De(e, t, r, n, a, s = null) {
  var d = e, u = /* @__PURE__ */ new Map(), o = (t & Ia) !== 0;
  if (o) {
    var c = (
      /** @type {Element} */
      e
    );
    d = c.appendChild(At());
  }
  var h = null, p = /* @__PURE__ */ Bi(() => {
    var z = r();
    return Oa(z) ? z : z == null ? [] : un(z);
  }), v, m = /* @__PURE__ */ new Map(), _ = !0;
  function N(z) {
    (Y.effect.f & Qe) === 0 && (Y.pending.delete(z), Y.fallback = h, _l(Y, v, d, t, n), h !== null && (v.length === 0 ? (h.f & it) === 0 ? sa(h) : (h.f ^= it, Ar(h, null, d)) : qt(h, () => {
      h = null;
    })));
  }
  function b(z) {
    Y.pending.delete(z);
  }
  var w = na(() => {
    v = /** @type {V[]} */
    l(p);
    for (var z = v.length, ne = /* @__PURE__ */ new Set(), je = (
      /** @type {Batch} */
      M
    ), ke = ns(), ce = 0; ce < z; ce += 1) {
      var et = v[ce], dt = n(et, ce), ae = _ ? null : u.get(dt);
      ae ? (ae.v && dr(ae.v, et), ae.i && dr(ae.i, ce), ke && je.unskip_effect(ae.e)) : (ae = gl(
        u,
        _ ? d : ja ?? (ja = At()),
        et,
        dt,
        ce,
        a,
        t,
        r
      ), _ || (ae.e.f |= it), u.set(dt, ae)), ne.add(dt);
    }
    if (z === 0 && s && !h && (_ ? h = Ve(() => s(d)) : (h = Ve(() => s(ja ?? (ja = At()))), h.f |= it)), z > ne.size && si(), !_)
      if (m.set(je, ne), ke) {
        for (const [cr, vr] of u)
          ne.has(cr) || je.skip_effect(vr.e);
        je.oncommit(N), je.ondiscard(b);
      } else
        N(je);
    l(p);
  }), Y = { effect: w, items: u, pending: m, outrogroups: null, fallback: h };
  _ = !1;
}
function kr(e) {
  for (; e !== null && (e.f & Xe) === 0; )
    e = e.next;
  return e;
}
function _l(e, t, r, n, a) {
  var s = (n & _i) !== 0, d = t.length, u = e.items, o = kr(e.effect.first), c, h = null, p, v = [], m = [], _, N, b, w;
  if (s)
    for (w = 0; w < d; w += 1)
      _ = t[w], N = a(_, w), b = /** @type {EachItem} */
      u.get(N).e, (b.f & it) === 0 && (b.nodes?.a?.measure(), (p ?? (p = /* @__PURE__ */ new Set())).add(b));
  for (w = 0; w < d; w += 1) {
    if (_ = t[w], N = a(_, w), b = /** @type {EachItem} */
    u.get(N).e, e.outrogroups !== null)
      for (const ae of e.outrogroups)
        ae.pending.delete(b), ae.done.delete(b);
    if ((b.f & me) !== 0 && (sa(b), s && (b.nodes?.a?.unfix(), (p ?? (p = /* @__PURE__ */ new Set())).delete(b))), (b.f & it) !== 0)
      if (b.f ^= it, b === o)
        Ar(b, null, r);
      else {
        var Y = h ? h.next : o;
        b === e.effect.last && (e.effect.last = b.prev), b.prev && (b.prev.next = b.next), b.next && (b.next.prev = b.prev), yt(e, h, b), yt(e, b, Y), Ar(b, Y, r), h = b, v = [], m = [], o = kr(h.next);
        continue;
      }
    if (b !== o) {
      if (c !== void 0 && c.has(b)) {
        if (v.length < m.length) {
          var z = m[0], ne;
          h = z.prev;
          var je = v[0], ke = v[v.length - 1];
          for (ne = 0; ne < v.length; ne += 1)
            Ar(v[ne], z, r);
          for (ne = 0; ne < m.length; ne += 1)
            c.delete(m[ne]);
          yt(e, je.prev, ke.next), yt(e, h, je), yt(e, ke, z), o = z, h = ke, w -= 1, v = [], m = [];
        } else
          c.delete(b), Ar(b, o, r), yt(e, b.prev, b.next), yt(e, b, h === null ? e.effect.first : h.next), yt(e, h, b), h = b;
        continue;
      }
      for (v = [], m = []; o !== null && o !== b; )
        (c ?? (c = /* @__PURE__ */ new Set())).add(o), m.push(o), o = kr(o.next);
      if (o === null)
        continue;
    }
    (b.f & it) === 0 && v.push(b), h = b, o = kr(b.next);
  }
  if (e.outrogroups !== null) {
    for (const ae of e.outrogroups)
      ae.pending.size === 0 && (Wn(e, un(ae.done)), e.outrogroups?.delete(ae));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (o !== null || c !== void 0) {
    var ce = [];
    if (c !== void 0)
      for (b of c)
        (b.f & me) === 0 && ce.push(b);
    for (; o !== null; )
      (o.f & me) === 0 && o !== e.fallback && ce.push(o), o = kr(o.next);
    var et = ce.length;
    if (et > 0) {
      var dt = (n & Ia) !== 0 && d === 0 ? r : null;
      if (s) {
        for (w = 0; w < et; w += 1)
          ce[w].nodes?.a?.measure();
        for (w = 0; w < et; w += 1)
          ce[w].nodes?.a?.fix();
      }
      hl(e, ce, dt);
    }
  }
  s && $t(() => {
    if (p !== void 0)
      for (b of p)
        b.nodes?.a?.apply();
  });
}
function gl(e, t, r, n, a, s, d, u) {
  var o = (d & pi) !== 0 ? (d & gi) === 0 ? /* @__PURE__ */ qi(r, !1, !1) : Yt(r) : null, c = (d & hi) !== 0 ? Yt(a) : null;
  return {
    v: o,
    i: c,
    e: Ve(() => (s(t, o ?? r, c ?? a, u), () => {
      e.delete(n);
    }))
  };
}
function Ar(e, t, r) {
  if (e.nodes)
    for (var n = e.nodes.start, a = e.nodes.end, s = t && (t.f & it) === 0 ? (
      /** @type {EffectNodes} */
      t.nodes.start
    ) : r; n !== null; ) {
      var d = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Mr(n)
      );
      if (s.before(n), n === a)
        return;
      n = d;
    }
}
function yt(e, t, r) {
  t === null ? e.effect.first = r : t.next = r, r === null ? e.effect.last = t : r.prev = t;
}
function bs(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var a = e.length;
    for (t = 0; t < a; t++) e[t] && (r = bs(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function bl() {
  for (var e, t, r = 0, n = "", a = arguments.length; r < a; r++) (e = arguments[r]) && (t = bs(e)) && (n && (n += " "), n += t);
  return n;
}
function tt(e) {
  return typeof e == "object" ? bl(e) : e ?? "";
}
function yl(e, t, r) {
  var n = e == null ? "" : "" + e;
  return n === "" ? null : n;
}
function xl(e, t) {
  return e == null ? null : String(e);
}
function rt(e, t, r, n, a, s) {
  var d = (
    /** @type {any} */
    e[Mn]
  );
  if (d !== r || d === void 0) {
    var u = yl(r);
    u == null ? e.removeAttribute("class") : e.className = u, e[Mn] = r;
  }
  return s;
}
function Pn(e, t, r, n) {
  var a = (
    /** @type {any} */
    e[Rn]
  );
  if (a !== t) {
    var s = xl(t);
    s == null ? e.removeAttribute("style") : e.style.cssText = s, e[Rn] = t;
  }
  return n;
}
const ml = "5";
var Na;
typeof window < "u" && ((Na = window.__svelte ?? (window.__svelte = {})).v ?? (Na.v = /* @__PURE__ */ new Set())).add(ml);
var kl = /* @__PURE__ */ $('<div class="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 text-red-700 dark:text-red-300 mb-6"> </div>'), wl = /* @__PURE__ */ $('<div class="flex flex-col items-center justify-center py-16"><div class="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div> <span class="mt-3 text-gray-500 dark:text-gray-400">Loading metrics…</span></div>'), El = /* @__PURE__ */ $('<div class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 text-center"><p class="text-gray-700 dark:text-gray-300 font-medium">No accounting data available yet.</p> <p class="text-gray-500 dark:text-gray-400 text-sm mt-2">Financial data will appear here once transactions are recorded.</p></div>'), Al = /* @__PURE__ */ $('<div class="flex justify-between text-sm"><span class="text-gray-600 dark:text-gray-400"> </span> <span class="font-medium text-gray-800 dark:text-gray-200"> </span></div>'), Sl = /* @__PURE__ */ $('<div class="flex justify-between text-sm"><span class="text-gray-600 dark:text-gray-400"> </span> <span class="font-medium text-gray-800 dark:text-gray-200"> </span></div>'), Tl = /* @__PURE__ */ $('<div class="flex justify-between text-sm"><span class="text-gray-600 dark:text-gray-400"> </span> <span class="font-medium text-gray-800 dark:text-gray-200"> </span></div>'), Cl = /* @__PURE__ */ $('<div class="flex justify-between text-sm"><span class="text-gray-600 dark:text-gray-400"> </span> <span class="font-medium text-blue-700 dark:text-blue-400"> </span></div>'), Fl = /* @__PURE__ */ $('<div class="flex justify-between text-sm"><span class="text-gray-600 dark:text-gray-400"> </span> <span class="font-medium text-red-500 dark:text-red-400"> </span></div>'), jl = /* @__PURE__ */ $('<div class="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-750 rounded-lg"><div><span class="font-medium text-gray-700 dark:text-gray-300"> </span> <p class="text-xs text-gray-500 dark:text-gray-400"> </p></div> <span> </span></div>'), Nl = /* @__PURE__ */ $('<div class="p-4 bg-gray-50 dark:bg-gray-750 rounded-lg border border-gray-200 dark:border-gray-600"><div class="flex items-center justify-between mb-2"><span class="font-semibold text-gray-800 dark:text-gray-200"> </span> <span class="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full"> </span></div> <p class="text-sm text-gray-600 dark:text-gray-400"> </p></div>'), Ol = /* @__PURE__ */ $('<div class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden mb-6"><div class="bg-gray-50 dark:bg-gray-750 px-6 py-4 border-b border-gray-200 dark:border-gray-700"><h3 class="text-lg font-semibold text-gray-800 dark:text-white">🏦 Funds Overview</h3></div> <div class="p-6"><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"></div></div></div>'), Dl = /* @__PURE__ */ $('<tr class="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-750"><td class="py-3 px-4"><div class="font-medium text-gray-800 dark:text-gray-200"> </div> <div class="text-xs text-gray-500 dark:text-gray-400"> </div></td><td class="py-3 px-4 text-right text-gray-600 dark:text-gray-400"> </td><td class="py-3 px-4 text-right text-gray-800 dark:text-gray-200 font-medium"> </td><td> </td><td class="py-3 px-4 text-center"><span> </span></td></tr>'), Pl = /* @__PURE__ */ $('<div class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden mb-6"><div class="bg-gray-50 dark:bg-gray-750 px-6 py-4 border-b border-gray-200 dark:border-gray-700"><h3 class="text-lg font-semibold text-gray-800 dark:text-white">📊 Budget Performance</h3></div> <div class="p-6 overflow-x-auto"><table class="w-full text-sm"><thead><tr class="border-b border-gray-200 dark:border-gray-600"><th class="text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">Category</th><th class="text-right py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">Planned</th><th class="text-right py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">Actual</th><th class="text-right py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">Variance</th><th class="text-center py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">Status</th></tr></thead><tbody></tbody></table></div></div>'), Il = /* @__PURE__ */ $('<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6"><div class="bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-200 dark:border-gray-700 shadow-sm"><div class="text-gray-500 dark:text-gray-400 text-sm font-medium mb-1">Total Assets</div> <div class="text-2xl font-bold text-gray-800 dark:text-white"> </div></div> <div class="bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-200 dark:border-gray-700 shadow-sm"><div class="text-gray-500 dark:text-gray-400 text-sm font-medium mb-1">Total Liabilities</div> <div class="text-2xl font-bold text-gray-600 dark:text-gray-300"> </div></div> <div class="bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-200 dark:border-gray-700 shadow-sm"><div class="text-gray-500 dark:text-gray-400 text-sm font-medium mb-1">Net Position</div> <div class="text-2xl font-bold text-gray-800 dark:text-white"> </div></div> <div class="bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-200 dark:border-gray-700 shadow-sm"><div class="text-gray-500 dark:text-gray-400 text-sm font-medium mb-1">Net Income</div> <div> </div></div></div> <div class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden mb-6"><div class="bg-gray-50 dark:bg-gray-750 px-6 py-4 border-b border-gray-200 dark:border-gray-700"><h3 class="text-lg font-semibold text-gray-800 dark:text-white">📋 Balance Sheet</h3></div> <div class="p-6"><div class="grid grid-cols-1 md:grid-cols-3 gap-6"><div><h4 class="font-semibold text-blue-800 dark:text-blue-400 mb-3 flex items-center"><span class="w-3 h-3 bg-blue-800 dark:bg-blue-500 rounded-full mr-2"></span> Assets</h4> <div class="space-y-2"><!> <div class="border-t dark:border-gray-600 pt-2 mt-2 flex justify-between font-semibold"><span class="text-gray-700 dark:text-gray-300">Total Assets</span> <span class="text-blue-800 dark:text-blue-400"> </span></div></div></div> <div><h4 class="font-semibold text-red-600 dark:text-red-400 mb-3 flex items-center"><span class="w-3 h-3 bg-red-500 rounded-full mr-2"></span> Liabilities</h4> <div class="space-y-2"><!> <div class="border-t dark:border-gray-600 pt-2 mt-2 flex justify-between font-semibold"><span class="text-gray-700 dark:text-gray-300">Total Liabilities</span> <span class="text-red-600 dark:text-red-400"> </span></div></div></div> <div><h4 class="font-semibold text-blue-700 dark:text-blue-300 mb-3 flex items-center"><span class="w-3 h-3 bg-blue-400 rounded-full mr-2"></span> Fund Balance</h4> <div class="space-y-2"><!> <div class="border-t dark:border-gray-600 pt-2 mt-2 flex justify-between font-semibold"><span class="text-gray-700 dark:text-gray-300">Net Position</span> <span class="text-blue-800 dark:text-blue-400"> </span></div></div></div></div></div></div> <div class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden mb-6"><div class="bg-gray-50 dark:bg-gray-750 px-6 py-4 border-b border-gray-200 dark:border-gray-700"><h3 class="text-lg font-semibold text-gray-800 dark:text-white">📈 Income Statement</h3></div> <div class="p-6"><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div><h4 class="font-semibold text-blue-800 dark:text-blue-400 mb-3 flex items-center"><span class="w-3 h-3 bg-blue-800 dark:bg-blue-500 rounded-full mr-2"></span> Revenues</h4> <div class="space-y-2"><!> <div class="border-t dark:border-gray-600 pt-2 mt-2 flex justify-between font-semibold"><span class="text-gray-700 dark:text-gray-300">Total Revenues</span> <span class="text-blue-800 dark:text-blue-400"> </span></div></div></div> <div><h4 class="font-semibold text-red-600 dark:text-red-400 mb-3 flex items-center"><span class="w-3 h-3 bg-red-500 rounded-full mr-2"></span> Expenses</h4> <div class="space-y-2"><!> <div class="border-t dark:border-gray-600 pt-2 mt-2 flex justify-between font-semibold"><span class="text-gray-700 dark:text-gray-300">Total Expenses</span> <span class="text-red-600 dark:text-red-400"> </span></div></div></div></div> <div class="mt-6 p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800"><div class="flex justify-between items-center"><span class="font-semibold text-blue-700 dark:text-blue-300"> </span> <span> </span></div></div></div></div> <div class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden mb-6"><div class="bg-gray-50 dark:bg-gray-750 px-6 py-4 border-b border-gray-200 dark:border-gray-700"><h3 class="text-lg font-semibold text-gray-800 dark:text-white">💰 Cash Flow Statement</h3></div> <div class="p-6 space-y-4"><!> <div class="border-t dark:border-gray-600 pt-4 flex justify-between items-center"><span class="font-semibold text-gray-800 dark:text-gray-200">Net Change in Cash</span> <span> </span></div></div></div> <!> <!> <div class="text-center text-sm text-gray-500 dark:text-gray-400 py-4"> </div>', 1), Ml = /* @__PURE__ */ $('<div class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 text-center"><p class="text-gray-700 dark:text-gray-300 font-medium">No data available for visualizations.</p></div>'), Rl = /* @__PURE__ */ $('<p class="text-gray-500 dark:text-gray-400 text-sm text-center py-4">No expense budgets with actual amounts</p>'), Ll = /* @__PURE__ */ $('<div><div class="flex justify-between text-sm mb-1"><span class="text-gray-700 dark:text-gray-300"> </span> <span class="font-medium text-gray-800 dark:text-gray-200"> </span></div> <div class="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-4"><div class="h-4 rounded-full transition-all"></div></div></div>'), Bl = /* @__PURE__ */ $('<div class="space-y-3"></div>'), $l = /* @__PURE__ */ $('<p class="text-gray-500 dark:text-gray-400 text-sm text-center py-4">No fund balance data</p>'), zl = /* @__PURE__ */ $('<div><div class="flex justify-between text-sm mb-1"><span class="text-gray-700 dark:text-gray-300"> </span> <span class="font-medium text-gray-800 dark:text-gray-200"> </span></div> <div class="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-4"><div class="h-4 rounded-full transition-all"></div></div></div>'), ql = /* @__PURE__ */ $('<div class="text-center mb-4"><span class="text-2xl font-bold text-gray-800 dark:text-white"> </span> <span class="text-sm text-gray-500 dark:text-gray-400 ml-1">total</span></div> <div class="space-y-3"></div>', 1), Vl = /* @__PURE__ */ $('<p class="text-gray-500 dark:text-gray-400 text-sm text-center py-4">No revenue contribution data</p>'), Hl = /* @__PURE__ */ $('<div><div class="flex justify-between text-sm mb-1"><span class="text-gray-700 dark:text-gray-300 flex items-center gap-2"> <span> </span></span> <span class="font-medium text-gray-800 dark:text-gray-200"> </span></div> <div class="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-3"><div class="h-3 rounded-full transition-all"></div></div></div>'), Ul = /* @__PURE__ */ $('<div class="space-y-3"></div>'), Yl = /* @__PURE__ */ $('<div class="flex justify-between text-gray-600 dark:text-gray-400"><span> </span> <span> </span></div>'), Kl = /* @__PURE__ */ $('<div class="flex justify-between text-gray-600 dark:text-gray-400"><span> </span> <span> </span></div>'), Gl = /* @__PURE__ */ $('<div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6"><div class="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700"><h4 class="font-semibold text-gray-700 dark:text-gray-200 mb-4">📊 Tax Allocation Breakdown</h4> <!></div> <div class="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700"><h4 class="font-semibold text-gray-700 dark:text-gray-200 mb-4">💰 Asset Portfolio</h4> <!></div></div> <div class="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 mb-6"><h4 class="font-semibold text-gray-700 dark:text-gray-200 mb-4">🌳 Tax Contribution Analysis</h4> <!></div> <div class="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 mb-6"><h4 class="font-semibold text-gray-700 dark:text-gray-200 mb-4">💰 Cash Flow Breakdown</h4> <div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div class="bg-white dark:bg-gray-750 rounded-lg p-4 border border-gray-200 dark:border-gray-600"><div class="flex items-center justify-between mb-3"><span class="text-sm font-medium text-blue-700 dark:text-blue-400">📈 Income</span> <span class="text-lg font-bold text-blue-800 dark:text-blue-300"> </span></div> <div class="space-y-1 text-xs"></div></div> <div class="bg-white dark:bg-gray-750 rounded-lg p-4 border border-gray-200 dark:border-gray-600"><div class="flex items-center justify-between mb-3"><span class="text-sm font-medium text-red-600 dark:text-red-400">📉 Expenses</span> <span class="text-lg font-bold text-red-500 dark:text-red-400"> </span></div> <div class="space-y-1 text-xs"></div></div></div> <div class="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800"><div class="flex items-center justify-between"><span class="text-sm font-medium text-blue-700 dark:text-blue-300">💰 Net Flow</span> <span> </span></div></div></div>', 1), Wl = /* @__PURE__ */ $('<div class="w-full max-w-5xl mx-auto px-4 py-6 font-sans"><div class="mb-6 border-b border-gray-200 dark:border-gray-700"><nav class="flex space-x-8"><button>📊 Accounting</button> <button>📈 Visualizations</button> <button class="ml-auto py-3 px-3 text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 disabled:opacity-50">↻ Refresh</button></nav></div> <!> <!></div>');
function Jl(e, t) {
  La(t, !0);
  const r = t.ctx.theme?.cn ?? ((...y) => y.filter(Boolean).join(" "));
  let n = /* @__PURE__ */ xe("accounting"), a = /* @__PURE__ */ xe(_t([])), s = /* @__PURE__ */ xe(_t([])), d = /* @__PURE__ */ xe(_t([])), u = /* @__PURE__ */ xe(_t([])), o = /* @__PURE__ */ xe(!0), c = /* @__PURE__ */ xe("");
  const h = {
    cash: "#1E40AF",
    receivable: "#1D4ED8",
    equipment: "#2563EB",
    land: "#3B82F6",
    bond: "#60A5FA",
    payable: "#1D4ED8",
    deferred_revenue: "#2563EB",
    fund_balance: "#1E40AF",
    tax: "#1E40AF",
    fee: "#1D4ED8",
    grant: "#2563EB",
    personnel: "#3B82F6",
    supplies: "#60A5FA",
    services: "#1D4ED8",
    debt: "#2563EB",
    capital: "#1E40AF",
    operating: "#93C5FD",
    general: "#1E40AF",
    special_revenue: "#2563EB",
    capital_projects: "#60A5FA"
  }, p = 50;
  async function v(y, x = 100, T = "desc") {
    const V = [];
    let I = 0, j = 1;
    for (; I < j && V.length < x; ) {
      const S = Math.min(p, x - V.length), F = await t.ctx.backend.get_objects_paginated(y, I, S, T), ve = typeof F == "string" ? JSON.parse(F) : F;
      if (ve?.success && ve?.data?.objectsListPaginated) {
        const Le = ve.data.objectsListPaginated.objects.map((Gt) => JSON.parse(Gt));
        V.push(...Le);
        const pr = ve.data.objectsListPaginated.pagination;
        if (j = Number(pr?.total_pages ?? 1), Le.length < S) break;
      } else {
        const Le = ve?.data ?? (Array.isArray(ve) ? ve : []);
        V.push(...Le);
        break;
      }
      I++;
    }
    return V;
  }
  async function m() {
    he(o, !0), he(c, "");
    try {
      const [y, x, T, V] = await Promise.all([
        v("Budget", 100, "asc"),
        v("LedgerEntry", 1e3, "desc"),
        v("Fund", 100, "asc"),
        v("FiscalPeriod", 100, "desc")
      ]);
      he(a, y, !0), he(s, x, !0), he(d, T, !0), he(u, V, !0);
    } catch (y) {
      he(c, y?.message || String(y), !0);
    } finally {
      he(o, !1);
    }
  }
  Ji(() => {
    m();
  });
  function _(y) {
    return y >= 1e6 ? `${(y / 1e6).toFixed(2)}M` : y >= 1e3 ? `${(y / 1e3).toFixed(1)}K` : y.toLocaleString();
  }
  function N(y) {
    return y.split("_").map((x) => x.charAt(0).toUpperCase() + x.slice(1)).join(" ");
  }
  let b = /* @__PURE__ */ fe(() => {
    const y = {}, x = {}, T = {};
    for (const S of l(s)) {
      const F = S.category || "other", ve = S.debit || 0, Le = S.credit || 0;
      switch (S.entry_type) {
        case "asset":
          y[F] = (y[F] || 0) + ve - Le;
          break;
        case "liability":
          x[F] = (x[F] || 0) + Le - ve;
          break;
        case "equity":
          T[F] = (T[F] || 0) + Le - ve;
          break;
      }
    }
    const V = Object.values(y).reduce((S, F) => S + F, 0), I = Object.values(x).reduce((S, F) => S + F, 0), j = Object.values(T).reduce((S, F) => S + F, 0);
    return {
      assets: y,
      liabilities: x,
      equity: T,
      totalAssets: V,
      totalLiabilities: I,
      totalEquity: j,
      netPosition: V - I
    };
  }), w = /* @__PURE__ */ fe(() => {
    const y = {}, x = {};
    for (const I of l(s)) {
      const j = I.category || "other";
      I.entry_type === "revenue" ? y[j] = (y[j] || 0) + (I.credit || 0) - (I.debit || 0) : I.entry_type === "expense" && (x[j] = (x[j] || 0) + (I.debit || 0) - (I.credit || 0));
    }
    const T = Object.values(y).reduce((I, j) => I + j, 0), V = Object.values(x).reduce((I, j) => I + j, 0);
    return {
      revenues: y,
      expenses: x,
      totalRevenues: T,
      totalExpenses: V,
      netIncome: T - V
    };
  }), Y = /* @__PURE__ */ fe(() => {
    let y = 0, x = 0, T = 0;
    for (const V of l(s).filter((I) => I.category === "cash")) {
      const I = (V.debit || 0) - (V.credit || 0), j = V.tags || "";
      j.includes("investing") || j.includes("capital") ? x += I : j.includes("financing") || j.includes("bond") ? T += I : y += I;
    }
    return {
      operating: y,
      investing: x,
      financing: T,
      netChange: y + x + T
    };
  }), z = /* @__PURE__ */ fe(() => l(a).filter((y) => y.budget_type === "expense" && (y.actual_amount || 0) > 0).map((y, x) => ({
    label: y.name || y.category || "Other",
    amount: y.actual_amount || 0,
    color: h[y.category] || `hsl(217, 91%, ${30 + x * 10}%)`
  }))), ne = /* @__PURE__ */ fe(() => {
    const y = {};
    for (const x of l(d))
      y[x.code] = {
        name: x.name || x.code,
        balance: 0,
        color: h[x.fund_type] || "#3B82F6"
      };
    for (const x of l(s))
      if (x.fund && x.category === "cash") {
        const T = typeof x.fund == "string" ? x.fund : x.fund.code;
        y[T] && (y[T].balance += (x.debit || 0) - (x.credit || 0));
      }
    return Object.entries(y).filter(([, x]) => x.balance > 0).map(([x, T]) => ({ symbol: x, ...T }));
  }), je = /* @__PURE__ */ fe(() => {
    const y = {};
    for (const x of l(s).filter((T) => T.entry_type === "revenue" && (T.credit || 0) > 0)) {
      const T = x.description || x.category || "Other";
      y[T] || (y[T] = {
        name: T,
        type: x.category === "tax" ? "citizen" : "organization",
        contribution: 0,
        color: x.category === "tax" ? "#3B82F6" : "#10B981"
      }), y[T].contribution += x.credit;
    }
    return Object.values(y);
  }), ke = /* @__PURE__ */ fe(() => {
    const y = {}, x = {};
    for (const S of l(s))
      if (S.entry_type === "revenue" && (S.credit || 0) > 0) {
        const F = S.category || "other";
        y[F] = (y[F] || 0) + S.credit;
      } else if (S.entry_type === "expense" && (S.debit || 0) > 0) {
        const F = S.category || "other";
        x[F] = (x[F] || 0) + S.debit;
      }
    const T = Object.entries(y).map(([S, F]) => ({ category: N(S), amount: F })), V = Object.entries(x).map(([S, F]) => ({ category: N(S), amount: F })), I = T.reduce((S, F) => S + F.amount, 0), j = V.reduce((S, F) => S + F.amount, 0);
    return {
      income: T,
      expenses: V,
      totalIncome: I,
      totalExpenses: j,
      net: I - j
    };
  });
  function ce(y, x) {
    return x <= 0 ? "0%" : `${Math.min(100, y / x * 100).toFixed(1)}%`;
  }
  var et = Wl(), dt = f(et), ae = f(dt), cr = f(ae), vr = g(cr, 2), la = g(vr, 2), oa = g(dt, 2);
  {
    var ys = (y) => {
      var x = kl(), T = f(x);
      ue(() => k(T, l(c))), L(y, x);
    };
    ut(oa, (y) => {
      l(c) && y(ys);
    });
  }
  var xs = g(oa, 2);
  {
    var ms = (y) => {
      var x = wl();
      L(y, x);
    }, ks = (y) => {
      var x = Fa(), T = mr(x);
      {
        var V = (j) => {
          var S = El();
          L(j, S);
        }, I = (j) => {
          var S = Il(), F = mr(S), ve = f(F), Le = g(f(ve), 2), pr = f(Le), Gt = g(ve, 2), pn = g(f(Gt), 2), hn = f(pn), Lr = g(Gt, 2), _n = g(f(Lr), 2), Br = f(_n), gn = g(Lr, 2), $r = g(f(gn), 2), bn = f($r), zr = g(F, 2), qr = g(f(zr), 2), Vr = f(qr), hr = f(Vr), yn = g(f(hr), 2), Hr = f(yn);
          De(Hr, 17, () => Object.entries(l(b).assets), Oe, (Q, H) => {
            var U = /* @__PURE__ */ fe(() => xr(l(H), 2));
            let se = () => l(U)[0], ie = () => l(U)[1];
            var q = Al(), O = f(q), X = f(O), ee = g(O, 2), le = f(ee);
            ue(
              (oe, de) => {
                k(X, oe), k(le, de);
              },
              [() => N(se()), () => _(ie())]
            ), L(Q, q);
          });
          var xn = g(Hr, 2), mn = g(f(xn), 2), Ur = f(mn), Yr = g(hr, 2), kn = g(f(Yr), 2), Kr = f(kn);
          De(Kr, 17, () => Object.entries(l(b).liabilities), Oe, (Q, H) => {
            var U = /* @__PURE__ */ fe(() => xr(l(H), 2));
            let se = () => l(U)[0], ie = () => l(U)[1];
            var q = Sl(), O = f(q), X = f(O), ee = g(O, 2), le = f(ee);
            ue(
              (oe, de) => {
                k(X, oe), k(le, de);
              },
              [() => N(se()), () => _(ie())]
            ), L(Q, q);
          });
          var wn = g(Kr, 2), En = g(f(wn), 2), Gr = f(En), An = g(Yr, 2), B = g(f(An), 2), K = f(B);
          De(K, 17, () => Object.entries(l(b).equity), Oe, (Q, H) => {
            var U = /* @__PURE__ */ fe(() => xr(l(H), 2));
            let se = () => l(U)[0], ie = () => l(U)[1];
            var q = Tl(), O = f(q), X = f(O), ee = g(O, 2), le = f(ee);
            ue(
              (oe, de) => {
                k(X, oe), k(le, de);
              },
              [() => N(se()), () => _(ie())]
            ), L(Q, q);
          });
          var pe = g(K, 2), G = g(f(pe), 2), W = f(G), we = g(zr, 2), Ne = g(f(we), 2), Ee = f(Ne), be = f(Ee), Ae = g(f(be), 2), ft = f(Ae);
          De(ft, 17, () => Object.entries(l(w).revenues), Oe, (Q, H) => {
            var U = /* @__PURE__ */ fe(() => xr(l(H), 2));
            let se = () => l(U)[0], ie = () => l(U)[1];
            var q = Cl(), O = f(q), X = f(O), ee = g(O, 2), le = f(ee);
            ue(
              (oe, de) => {
                k(X, oe), k(le, `+${de ?? ""}`);
              },
              [() => N(se()), () => _(ie())]
            ), L(Q, q);
          });
          var gt = g(ft, 2), bt = g(f(gt), 2), Ft = f(bt), jt = g(be, 2), _r = g(f(jt), 2), Wt = f(_r);
          De(Wt, 17, () => Object.entries(l(w).expenses), Oe, (Q, H) => {
            var U = /* @__PURE__ */ fe(() => xr(l(H), 2));
            let se = () => l(U)[0], ie = () => l(U)[1];
            var q = Fl(), O = f(q), X = f(O), ee = g(O, 2), le = f(ee);
            ue(
              (oe, de) => {
                k(X, oe), k(le, `-${de ?? ""}`);
              },
              [() => N(se()), () => _(ie())]
            ), L(Q, q);
          });
          var gr = g(Wt, 2), Sn = g(f(gr), 2), Tn = f(Sn), Es = g(Ee, 2), As = f(Es), da = f(As), Ss = f(da), fa = g(da, 2), Ts = f(fa), ua = g(we, 2), Cs = g(f(ua), 2), ca = f(Cs);
          De(
            ca,
            17,
            () => [
              {
                label: "Operating Activities",
                sub: "Day-to-day operations",
                value: l(Y).operating
              },
              {
                label: "Investing Activities",
                sub: "Capital expenditures",
                value: l(Y).investing
              },
              {
                label: "Financing Activities",
                sub: "Bonds and debt",
                value: l(Y).financing
              }
            ],
            Oe,
            (Q, H) => {
              var U = jl(), se = f(U), ie = f(se), q = f(ie), O = g(ie, 2), X = f(O), ee = g(se, 2), le = f(ee);
              ue(
                (oe, de) => {
                  k(q, l(H).label), k(X, l(H).sub), rt(ee, 1, oe), k(le, `${l(H).value >= 0 ? "+" : ""}${de ?? ""}`);
                },
                [
                  () => tt(r("text-lg font-semibold", l(H).value >= 0 ? "text-blue-800 dark:text-blue-400" : "text-red-600 dark:text-red-400")),
                  () => _(l(H).value)
                ]
              ), L(Q, U);
            }
          );
          var Fs = g(ca, 2), va = g(f(Fs), 2), js = f(va), pa = g(ua, 2);
          {
            var Ns = (Q) => {
              var H = Ol(), U = g(f(H), 2), se = f(U);
              De(se, 21, () => l(d), Oe, (ie, q) => {
                var O = Nl(), X = f(O), ee = f(X), le = f(ee), oe = g(ee, 2), de = f(oe), br = g(X, 2), yr = f(br);
                ue(() => {
                  k(le, l(q).name || l(q).code), k(de, l(q).fund_type || "general"), k(yr, l(q).description || "No description");
                }), L(ie, O);
              }), L(Q, H);
            };
            ut(pa, (Q) => {
              l(d).length > 0 && Q(Ns);
            });
          }
          var ha = g(pa, 2);
          {
            var Os = (Q) => {
              var H = Pl(), U = g(f(H), 2), se = f(U), ie = g(f(se));
              De(ie, 21, () => l(a), Oe, (q, O) => {
                const X = /* @__PURE__ */ fe(() => (l(O).actual_amount || 0) - (l(O).planned_amount || 0)), ee = /* @__PURE__ */ fe(() => l(O).planned_amount ? (l(X) / l(O).planned_amount * 100).toFixed(1) : "0");
                var le = Dl(), oe = f(le), de = f(oe), br = f(de), yr = g(de, 2), Is = f(yr), _a = g(oe), Ms = f(_a), ga = g(_a), Rs = f(ga), Cn = g(ga), Ls = f(Cn), Bs = g(Cn), ba = f(Bs), $s = f(ba);
                ue(
                  (zs, qs, Vs, Hs, Us) => {
                    k(br, l(O).name || l(O).category), k(Is, l(O).budget_type || "expense"), k(Ms, zs), k(Rs, qs), rt(Cn, 1, Vs), k(Ls, `${l(X) >= 0 ? "+" : ""}${Hs ?? ""} (${l(ee) ?? ""}%)`), rt(ba, 1, Us), k($s, l(O).status || "draft");
                  },
                  [
                    () => _(l(O).planned_amount || 0),
                    () => _(l(O).actual_amount || 0),
                    () => tt(r("py-3 px-4 text-right", l(X) >= 0 ? "text-blue-700 dark:text-blue-400" : "text-red-500 dark:text-red-400")),
                    () => _(l(X)),
                    () => tt(r("px-2 py-1 text-xs rounded-full", l(O).status === "adopted" ? "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400" : l(O).status === "draft" ? "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400" : "bg-gray-50 dark:bg-gray-700 text-gray-500 dark:text-gray-400"))
                  ]
                ), L(q, le);
              }), L(Q, H);
            };
            ut(ha, (Q) => {
              l(a).length > 0 && Q(Os);
            });
          }
          var Ds = g(ha, 2), Ps = f(Ds);
          ue(
            (Q, H, U, se, ie, q, O, X, ee, le, oe, de, br, yr) => {
              k(pr, Q), k(hn, H), k(Br, U), rt($r, 1, se), k(bn, `${l(w).netIncome >= 0 ? "+" : ""}${ie ?? ""}`), k(Ur, q), k(Gr, O), k(W, X), k(Ft, ee), k(Tn, le), k(Ss, `Net Income (${l(w).netIncome >= 0 ? "Surplus" : "Deficit"})`), rt(fa, 1, oe), k(Ts, `${l(w).netIncome >= 0 ? "+" : ""}${de ?? ""}`), rt(va, 1, br), k(js, `${l(Y).netChange >= 0 ? "+" : ""}${yr ?? ""}`), k(Ps, `${l(s).length ?? ""} ledger entries · ${l(d).length ?? ""} funds · ${l(a).length ?? ""} budgets`);
            },
            [
              () => _(l(b).totalAssets),
              () => _(l(b).totalLiabilities),
              () => _(l(b).netPosition),
              () => tt(r("text-2xl font-bold", l(w).netIncome >= 0 ? "text-green-700 dark:text-green-400" : "text-red-600 dark:text-red-400")),
              () => _(l(w).netIncome),
              () => _(l(b).totalAssets),
              () => _(l(b).totalLiabilities),
              () => _(l(b).netPosition),
              () => _(l(w).totalRevenues),
              () => _(l(w).totalExpenses),
              () => tt(r("text-xl font-bold", l(w).netIncome >= 0 ? "text-blue-800 dark:text-blue-300" : "text-red-600 dark:text-red-400")),
              () => _(l(w).netIncome),
              () => tt(r("text-xl font-bold", l(Y).netChange >= 0 ? "text-blue-800 dark:text-blue-400" : "text-red-600 dark:text-red-400")),
              () => _(l(Y).netChange)
            ]
          ), L(j, S);
        };
        ut(T, (j) => {
          l(s).length === 0 && l(d).length === 0 && l(a).length === 0 ? j(V) : j(I, -1);
        });
      }
      L(y, x);
    }, ws = (y) => {
      var x = Fa(), T = mr(x);
      {
        var V = (j) => {
          var S = Ml();
          L(j, S);
        }, I = (j) => {
          var S = Gl(), F = mr(S), ve = f(F), Le = g(f(ve), 2);
          {
            var pr = (B) => {
              var K = Rl();
              L(B, K);
            }, Gt = (B) => {
              const K = /* @__PURE__ */ fe(() => Math.max(...l(z).map((G) => G.amount)));
              var pe = Bl();
              De(pe, 21, () => l(z), Oe, (G, W) => {
                var we = Ll(), Ne = f(we), Ee = f(Ne), be = f(Ee), Ae = g(Ee, 2), ft = f(Ae), gt = g(Ne, 2), bt = f(gt);
                ue(
                  (Ft, jt) => {
                    k(be, l(W).label), k(ft, Ft), Pn(bt, `width: ${jt ?? ""}; background: ${l(W).color ?? ""}`);
                  },
                  [
                    () => _(l(W).amount),
                    () => ce(l(W).amount, l(K))
                  ]
                ), L(G, we);
              }), L(B, pe);
            };
            ut(Le, (B) => {
              l(z).length === 0 ? B(pr) : B(Gt, -1);
            });
          }
          var pn = g(ve, 2), hn = g(f(pn), 2);
          {
            var Lr = (B) => {
              var K = $l();
              L(B, K);
            }, _n = (B) => {
              const K = /* @__PURE__ */ fe(() => Math.max(...l(ne).map((be) => be.balance))), pe = /* @__PURE__ */ fe(() => l(ne).reduce((be, Ae) => be + Ae.balance, 0));
              var G = ql(), W = mr(G), we = f(W), Ne = f(we), Ee = g(W, 2);
              De(Ee, 21, () => l(ne), Oe, (be, Ae) => {
                var ft = zl(), gt = f(ft), bt = f(gt), Ft = f(bt), jt = g(bt, 2), _r = f(jt), Wt = g(gt, 2), gr = f(Wt);
                ue(
                  (Sn, Tn) => {
                    k(Ft, `${l(Ae).name ?? ""} (${l(Ae).symbol ?? ""})`), k(_r, Sn), Pn(gr, `width: ${Tn ?? ""}; background: ${l(Ae).color ?? ""}`);
                  },
                  [
                    () => _(l(Ae).balance),
                    () => ce(l(Ae).balance, l(K))
                  ]
                ), L(be, ft);
              }), ue((be) => k(Ne, be), [() => _(l(pe))]), L(B, G);
            };
            ut(hn, (B) => {
              l(ne).length === 0 ? B(Lr) : B(_n, -1);
            });
          }
          var Br = g(F, 2), gn = g(f(Br), 2);
          {
            var $r = (B) => {
              var K = Vl();
              L(B, K);
            }, bn = (B) => {
              const K = /* @__PURE__ */ fe(() => Math.max(...l(je).map((G) => G.contribution)));
              var pe = Ul();
              De(pe, 21, () => l(je).sort((G, W) => W.contribution - G.contribution), Oe, (G, W) => {
                var we = Hl(), Ne = f(we), Ee = f(Ne), be = f(Ee), Ae = g(be), ft = f(Ae), gt = g(Ee, 2), bt = f(gt), Ft = g(Ne, 2), jt = f(Ft);
                ue(
                  (_r, Wt, gr) => {
                    k(be, `${l(W).name ?? ""} `), rt(Ae, 1, _r), k(ft, l(W).type), k(bt, Wt), Pn(jt, `width: ${gr ?? ""}; background: ${l(W).color ?? ""}`);
                  },
                  [
                    () => tt(r("text-xs px-1.5 py-0.5 rounded", l(W).type === "citizen" ? "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400" : "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400")),
                    () => _(l(W).contribution),
                    () => ce(l(W).contribution, l(K))
                  ]
                ), L(G, we);
              }), L(B, pe);
            };
            ut(gn, (B) => {
              l(je).length === 0 ? B($r) : B(bn, -1);
            });
          }
          var zr = g(Br, 2), qr = g(f(zr), 2), Vr = f(qr), hr = f(Vr), yn = g(f(hr), 2), Hr = f(yn), xn = g(hr, 2);
          De(xn, 21, () => l(ke).income, Oe, (B, K) => {
            var pe = Yl(), G = f(pe), W = f(G), we = g(G, 2), Ne = f(we);
            ue(
              (Ee) => {
                k(W, l(K).category), k(Ne, Ee);
              },
              [() => _(l(K).amount)]
            ), L(B, pe);
          });
          var mn = g(Vr, 2), Ur = f(mn), Yr = g(f(Ur), 2), kn = f(Yr), Kr = g(Ur, 2);
          De(Kr, 21, () => l(ke).expenses, Oe, (B, K) => {
            var pe = Kl(), G = f(pe), W = f(G), we = g(G, 2), Ne = f(we);
            ue(
              (Ee) => {
                k(W, l(K).category), k(Ne, Ee);
              },
              [() => _(l(K).amount)]
            ), L(B, pe);
          });
          var wn = g(qr, 2), En = f(wn), Gr = g(f(En), 2), An = f(Gr);
          ue(
            (B, K, pe, G) => {
              k(Hr, `+${B ?? ""}`), k(kn, `-${K ?? ""}`), rt(Gr, 1, pe), k(An, `${l(ke).net >= 0 ? "+" : ""}${G ?? ""}`);
            },
            [
              () => _(l(ke).totalIncome),
              () => _(l(ke).totalExpenses),
              () => tt(r("text-lg font-bold", l(ke).net >= 0 ? "text-blue-800 dark:text-blue-300" : "text-red-600 dark:text-red-400")),
              () => _(l(ke).net)
            ]
          ), L(j, S);
        };
        ut(T, (j) => {
          l(s).length === 0 && l(a).length === 0 ? j(V) : j(I, -1);
        });
      }
      L(y, x);
    };
    ut(xs, (y) => {
      l(o) ? y(ms) : l(n) === "accounting" ? y(ks, 1) : y(ws, -1);
    });
  }
  ue(
    (y, x) => {
      rt(cr, 1, y), rt(vr, 1, x), la.disabled = l(o);
    },
    [
      () => tt(r("py-3 px-1 border-b-2 font-medium text-sm transition-colors", l(n) === "accounting" ? "border-blue-500 text-blue-600 dark:text-blue-400" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400")),
      () => tt(r("py-3 px-1 border-b-2 font-medium text-sm transition-colors", l(n) === "visualizations" ? "border-blue-500 text-blue-600 dark:text-blue-400" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400"))
    ]
  ), Dn("click", cr, () => he(n, "accounting")), Dn("click", vr, () => he(n, "visualizations")), Dn("click", la, m), L(e, et), Ba();
}
ll(["click"]);
function Xl(e, t) {
  const r = ul(Jl, { target: e, props: { ctx: t } });
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
  Xl as default
};
