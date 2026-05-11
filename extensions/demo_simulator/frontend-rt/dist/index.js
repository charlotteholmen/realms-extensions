var Es = Object.defineProperty;
var jr = (e) => {
  throw TypeError(e);
};
var Ss = (e, t, r) => t in e ? Es(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var se = (e, t, r) => Ss(e, typeof t != "symbol" ? t + "" : t, r), Wt = (e, t, r) => t.has(e) || jr("Cannot " + r);
var i = (e, t, r) => (Wt(e, t, "read from private field"), r ? r.call(e) : t.get(e)), b = (e, t, r) => t.has(e) ? jr("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), w = (e, t, r, n) => (Wt(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r), R = (e, t, r) => (Wt(e, t, "access private method"), r);
var Ts = Array.isArray, As = Array.prototype.indexOf, rt = Array.prototype.includes, Ns = Array.from, Rs = Object.defineProperty, ct = Object.getOwnPropertyDescriptor, Ms = Object.prototype, Os = Array.prototype, Cs = Object.getPrototypeOf, Lr = Object.isExtensible;
const Ds = () => {
};
function Ps(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function Zr() {
  var e, t, r = new Promise((n, s) => {
    e = n, t = s;
  });
  return { promise: r, resolve: e, reject: t };
}
const L = 2, nt = 4, Yt = 8, Qr = 1 << 24, ce = 16, ve = 32, Me = 64, tr = 128, X = 512, P = 1024, j = 2048, he = 4096, ee = 8192, oe = 16384, Ge = 32768, zr = 1 << 25, st = 65536, rr = 1 << 17, Fs = 1 << 18, ot = 1 << 19, Is = 1 << 20, Ye = 65536, jt = 1 << 21, pt = 1 << 22, Re = 1 << 23, $t = Symbol("$state"), be = new class extends Error {
  constructor() {
    super(...arguments);
    se(this, "name", "StaleReactionError");
    se(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
function js() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Ls(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function zs() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Bs(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Vs() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function qs() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Us() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Ys() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Hs() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
const Gs = 1, Js = 2, F = Symbol(), Ks = "http://www.w3.org/1999/xhtml";
function Ws() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function $s() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function Xr(e) {
  return e === this.v;
}
let re = null;
function it(e) {
  re = e;
}
function en(e, t = !1, r) {
  re = {
    p: re,
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
function tn(e) {
  var t = (
    /** @type {ComponentContext} */
    re
  ), r = t.e;
  if (r !== null) {
    t.e = null;
    for (var n of r)
      xn(n);
  }
  return t.i = !0, re = t.p, /** @type {T} */
  {};
}
function rn() {
  return !0;
}
let Pe = [];
function nn() {
  var e = Pe;
  Pe = [], Ps(e);
}
function $e(e) {
  if (Pe.length === 0 && !vt) {
    var t = Pe;
    queueMicrotask(() => {
      t === Pe && nn();
    });
  }
  Pe.push(e);
}
function Zs() {
  for (; Pe.length > 0; )
    nn();
}
function sn(e) {
  var t = E;
  if (t === null)
    return x.f |= Re, e;
  if ((t.f & Ge) === 0 && (t.f & nt) === 0)
    throw e;
  Ne(e, t);
}
function Ne(e, t) {
  for (; t !== null; ) {
    if ((t.f & tr) !== 0) {
      if ((t.f & Ge) === 0)
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
const Qs = -7169;
function O(e, t) {
  e.f = e.f & Qs | t;
}
function vr(e) {
  (e.f & X) !== 0 || e.deps === null ? O(e, P) : O(e, he);
}
function an(e) {
  if (e !== null)
    for (const t of e)
      (t.f & L) === 0 || (t.f & Ye) === 0 || (t.f ^= Ye, an(
        /** @type {Derived} */
        t.deps
      ));
}
function ln(e, t, r) {
  (e.f & j) !== 0 ? t.add(e) : (e.f & he) !== 0 && r.add(e), an(e.deps), O(e, P);
}
const Ce = /* @__PURE__ */ new Set();
let y = null, ae = null, nr = null, vt = !1, Zt = !1, We = null, Mt = null;
var Br = 0;
let Xs = 1;
var Ze, Qe, je, me, fe, bt, H, mt, Te, ye, ue, Xe, et, Le, C, Ot, on, Ct, sr, Dt, ei;
const Vt = class Vt {
  constructor() {
    b(this, C);
    se(this, "id", Xs++);
    /**
     * The current values of any signals that are updated in this batch.
     * Tuple format: [value, is_derived] (note: is_derived is false for deriveds, too, if they were overridden via assignment)
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Value, [any, boolean]>}
     */
    se(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any signals (sources and deriveds) that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Value, any>}
     */
    se(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<(batch: Batch) => void>}
     */
    b(this, Ze, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    b(this, Qe, /* @__PURE__ */ new Set());
    /**
     * Callbacks that should run only when a fork is committed.
     * @type {Set<(batch: Batch) => void>}
     */
    b(this, je, /* @__PURE__ */ new Set());
    /**
     * Async effects that are currently in flight
     * @type {Map<Effect, number>}
     */
    b(this, me, /* @__PURE__ */ new Map());
    /**
     * Async effects that are currently in flight, _not_ inside a pending boundary
     * @type {Map<Effect, number>}
     */
    b(this, fe, /* @__PURE__ */ new Map());
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    b(this, bt, null);
    /**
     * The root effects that need to be flushed
     * @type {Effect[]}
     */
    b(this, H, []);
    /**
     * Effects created while this batch was active.
     * @type {Effect[]}
     */
    b(this, mt, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    b(this, Te, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    b(this, ye, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    b(this, ue, /* @__PURE__ */ new Map());
    /**
     * Inverse of #skipped_branches which we need to tell prior batches to unskip them when committing
     * @type {Set<Effect>}
     */
    b(this, Xe, /* @__PURE__ */ new Set());
    se(this, "is_fork", !1);
    b(this, et, !1);
    /** @type {Set<Batch>} */
    b(this, Le, /* @__PURE__ */ new Set());
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(t) {
    i(this, ue).has(t) || i(this, ue).set(t, { d: [], m: [] }), i(this, Xe).delete(t);
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   * @param {(e: Effect) => void} callback
   */
  unskip_effect(t, r = (n) => this.schedule(n)) {
    var n = i(this, ue).get(t);
    if (n) {
      i(this, ue).delete(t);
      for (var s of n.d)
        O(s, j), r(s);
      for (s of n.m)
        O(s, he), r(s);
    }
    i(this, Xe).add(t);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Value} source
   * @param {any} value
   * @param {boolean} [is_derived]
   */
  capture(t, r, n = !1) {
    t.v !== F && !this.previous.has(t) && this.previous.set(t, t.v), (t.f & Re) === 0 && (this.current.set(t, [r, n]), ae?.set(t, r)), this.is_fork || (t.v = r);
  }
  activate() {
    y = this;
  }
  deactivate() {
    y = null, ae = null;
  }
  flush() {
    try {
      Zt = !0, y = this, R(this, C, Ct).call(this);
    } finally {
      Br = 0, nr = null, We = null, Mt = null, Zt = !1, y = null, ae = null, qe.clear();
    }
  }
  discard() {
    for (const t of i(this, Qe)) t(this);
    i(this, Qe).clear(), i(this, je).clear(), Ce.delete(this);
  }
  /**
   * @param {Effect} effect
   */
  register_created_effect(t) {
    i(this, mt).push(t);
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  increment(t, r) {
    let n = i(this, me).get(r) ?? 0;
    if (i(this, me).set(r, n + 1), t) {
      let s = i(this, fe).get(r) ?? 0;
      i(this, fe).set(r, s + 1);
    }
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   * @param {boolean} skip - whether to skip updates (because this is triggered by a stale reaction)
   */
  decrement(t, r, n) {
    let s = i(this, me).get(r) ?? 0;
    if (s === 1 ? i(this, me).delete(r) : i(this, me).set(r, s - 1), t) {
      let a = i(this, fe).get(r) ?? 0;
      a === 1 ? i(this, fe).delete(r) : i(this, fe).set(r, a - 1);
    }
    i(this, et) || n || (w(this, et, !0), $e(() => {
      w(this, et, !1), this.flush();
    }));
  }
  /**
   * @param {Set<Effect>} dirty_effects
   * @param {Set<Effect>} maybe_dirty_effects
   */
  transfer_effects(t, r) {
    for (const n of t)
      i(this, Te).add(n);
    for (const n of r)
      i(this, ye).add(n);
    t.clear(), r.clear();
  }
  /** @param {(batch: Batch) => void} fn */
  oncommit(t) {
    i(this, Ze).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    i(this, Qe).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  on_fork_commit(t) {
    i(this, je).add(t);
  }
  run_fork_commit_callbacks() {
    for (const t of i(this, je)) t(this);
    i(this, je).clear();
  }
  settled() {
    return (i(this, bt) ?? w(this, bt, Zr())).promise;
  }
  static ensure() {
    if (y === null) {
      const t = y = new Vt();
      Zt || (Ce.add(y), vt || $e(() => {
        y === t && t.flush();
      }));
    }
    return y;
  }
  apply() {
    {
      ae = null;
      return;
    }
  }
  /**
   *
   * @param {Effect} effect
   */
  schedule(t) {
    if (nr = t, t.b?.is_pending && (t.f & (nt | Yt | Qr)) !== 0 && (t.f & Ge) === 0) {
      t.b.defer_effect(t);
      return;
    }
    for (var r = t; r.parent !== null; ) {
      r = r.parent;
      var n = r.f;
      if (We !== null && r === E && (x === null || (x.f & L) === 0))
        return;
      if ((n & (Me | ve)) !== 0) {
        if ((n & P) === 0)
          return;
        r.f ^= P;
      }
    }
    i(this, H).push(r);
  }
};
Ze = new WeakMap(), Qe = new WeakMap(), je = new WeakMap(), me = new WeakMap(), fe = new WeakMap(), bt = new WeakMap(), H = new WeakMap(), mt = new WeakMap(), Te = new WeakMap(), ye = new WeakMap(), ue = new WeakMap(), Xe = new WeakMap(), et = new WeakMap(), Le = new WeakMap(), C = new WeakSet(), Ot = function() {
  return this.is_fork || i(this, fe).size > 0;
}, on = function() {
  for (const n of i(this, Le))
    for (const s of i(n, fe).keys()) {
      for (var t = !1, r = s; r.parent !== null; ) {
        if (i(this, ue).has(r)) {
          t = !0;
          break;
        }
        r = r.parent;
      }
      if (!t)
        return !0;
    }
  return !1;
}, Ct = function() {
  var o;
  if (Br++ > 1e3 && (Ce.delete(this), ri()), !R(this, C, Ot).call(this)) {
    for (const l of i(this, Te))
      i(this, ye).delete(l), O(l, j), this.schedule(l);
    for (const l of i(this, ye))
      O(l, he), this.schedule(l);
  }
  const t = i(this, H);
  w(this, H, []), this.apply();
  var r = We = [], n = [], s = Mt = [];
  for (const l of t)
    try {
      R(this, C, sr).call(this, l, r, n);
    } catch (u) {
      throw dn(l), u;
    }
  if (y = null, s.length > 0) {
    var a = Vt.ensure();
    for (const l of s)
      a.schedule(l);
  }
  if (We = null, Mt = null, R(this, C, Ot).call(this) || R(this, C, on).call(this)) {
    R(this, C, Dt).call(this, n), R(this, C, Dt).call(this, r);
    for (const [l, u] of i(this, ue))
      un(l, u);
  } else {
    i(this, me).size === 0 && Ce.delete(this), i(this, Te).clear(), i(this, ye).clear();
    for (const l of i(this, Ze)) l(this);
    i(this, Ze).clear(), Vr(n), Vr(r), i(this, bt)?.resolve();
  }
  var f = (
    /** @type {Batch | null} */
    /** @type {unknown} */
    y
  );
  if (i(this, H).length > 0) {
    const l = f ?? (f = this);
    i(l, H).push(...i(this, H).filter((u) => !i(l, H).includes(u)));
  }
  f !== null && (Ce.add(f), R(o = f, C, Ct).call(o));
}, /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
sr = function(t, r, n) {
  t.f ^= P;
  for (var s = t.first; s !== null; ) {
    var a = s.f, f = (a & (ve | Me)) !== 0, o = f && (a & P) !== 0, l = o || (a & ee) !== 0 || i(this, ue).has(s);
    if (!l && s.fn !== null) {
      f ? s.f ^= P : (a & nt) !== 0 ? r.push(s) : Et(s) && ((a & ce) !== 0 && i(this, ye).add(s), lt(s));
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
Dt = function(t) {
  for (var r = 0; r < t.length; r += 1)
    ln(t[r], i(this, Te), i(this, ye));
}, ei = function() {
  var v, p, h;
  for (const c of Ce) {
    var t = c.id < this.id, r = [];
    for (const [d, [T, S]] of this.current) {
      if (c.current.has(d)) {
        var n = (
          /** @type {[any, boolean]} */
          c.current.get(d)[0]
        );
        if (t && T !== n)
          c.current.set(d, [T, S]);
        else
          continue;
      }
      r.push(d);
    }
    var s = [...c.current.keys()].filter((d) => !this.current.has(d));
    if (s.length === 0)
      t && c.discard();
    else if (r.length > 0) {
      if (t)
        for (const d of i(this, Xe))
          c.unskip_effect(d, (T) => {
            var S;
            (T.f & (ce | pt)) !== 0 ? c.schedule(T) : R(S = c, C, Dt).call(S, [T]);
          });
      c.activate();
      var a = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Map();
      for (var o of r)
        fn(o, s, a, f);
      f = /* @__PURE__ */ new Map();
      var l = [...c.current.keys()].filter(
        (d) => this.current.has(d) ? (
          /** @type {[any, boolean]} */
          this.current.get(d)[0] !== d
        ) : !0
      );
      for (const d of i(this, mt))
        (d.f & (oe | ee | rr)) === 0 && hr(d, l, f) && ((d.f & (pt | ce)) !== 0 ? (O(d, j), c.schedule(d)) : i(c, Te).add(d));
      if (i(c, H).length > 0) {
        c.apply();
        for (var u of i(c, H))
          R(v = c, C, sr).call(v, u, [], []);
        w(c, H, []);
      }
      c.deactivate();
    }
  }
  for (const c of Ce)
    i(c, Le).has(this) && (i(c, Le).delete(this), i(c, Le).size === 0 && !R(p = c, C, Ot).call(p) && (c.activate(), R(h = c, C, Ct).call(h)));
};
let He = Vt;
function ti(e) {
  var t = vt;
  vt = !0;
  try {
    for (var r; ; ) {
      if (Zs(), y === null)
        return (
          /** @type {T} */
          r
        );
      y.flush();
    }
  } finally {
    vt = t;
  }
}
function ri() {
  try {
    Vs();
  } catch (e) {
    Ne(e, nr);
  }
}
let pe = null;
function Vr(e) {
  var t = e.length;
  if (t !== 0) {
    for (var r = 0; r < t; ) {
      var n = e[r++];
      if ((n.f & (oe | ee)) === 0 && Et(n) && (pe = /* @__PURE__ */ new Set(), lt(n), n.deps === null && n.first === null && n.nodes === null && n.teardown === null && n.ac === null && Tn(n), pe?.size > 0)) {
        qe.clear();
        for (const s of pe) {
          if ((s.f & (oe | ee)) !== 0) continue;
          const a = [s];
          let f = s.parent;
          for (; f !== null; )
            pe.has(f) && (pe.delete(f), a.push(f)), f = f.parent;
          for (let o = a.length - 1; o >= 0; o--) {
            const l = a[o];
            (l.f & (oe | ee)) === 0 && lt(l);
          }
        }
        pe.clear();
      }
    }
    pe = null;
  }
}
function fn(e, t, r, n) {
  if (!r.has(e) && (r.add(e), e.reactions !== null))
    for (const s of e.reactions) {
      const a = s.f;
      (a & L) !== 0 ? fn(
        /** @type {Derived} */
        s,
        t,
        r,
        n
      ) : (a & (pt | ce)) !== 0 && (a & j) === 0 && hr(s, t, n) && (O(s, j), _r(
        /** @type {Effect} */
        s
      ));
    }
}
function hr(e, t, r) {
  const n = r.get(e);
  if (n !== void 0) return n;
  if (e.deps !== null)
    for (const s of e.deps) {
      if (rt.call(t, s))
        return !0;
      if ((s.f & L) !== 0 && hr(
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
function _r(e) {
  y.schedule(e);
}
function un(e, t) {
  if (!((e.f & ve) !== 0 && (e.f & P) !== 0)) {
    (e.f & j) !== 0 ? t.d.push(e) : (e.f & he) !== 0 && t.m.push(e), O(e, P);
    for (var r = e.first; r !== null; )
      un(r, t), r = r.next;
  }
}
function dn(e) {
  O(e, P);
  for (var t = e.first; t !== null; )
    dn(t), t = t.next;
}
function ni(e) {
  let t = 0, r = Ht(0), n;
  return () => {
    br() && (_(r), kn(() => (t === 0 && (n = jn(() => e(() => ht(r)))), t += 1, () => {
      $e(() => {
        t -= 1, t === 0 && (n?.(), n = void 0, ht(r));
      });
    })));
  };
}
var si = st | ot;
function ii(e, t, r, n) {
  new ai(e, t, r, n);
}
var $, cr, Z, ze, B, Q, z, G, we, Be, Ae, tt, yt, wt, xe, qt, M, li, oi, fi, ir, Pt, Ft, ar, lr;
class ai {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(t, r, n, s) {
    b(this, M);
    /** @type {Boundary | null} */
    se(this, "parent");
    se(this, "is_pending", !1);
    /**
     * API-level transformError transform function. Transforms errors before they reach the `failed` snippet.
     * Inherited from parent boundary, or defaults to identity.
     * @type {(error: unknown) => unknown}
     */
    se(this, "transform_error");
    /** @type {TemplateNode} */
    b(this, $);
    /** @type {TemplateNode | null} */
    b(this, cr, null);
    /** @type {BoundaryProps} */
    b(this, Z);
    /** @type {((anchor: Node) => void)} */
    b(this, ze);
    /** @type {Effect} */
    b(this, B);
    /** @type {Effect | null} */
    b(this, Q, null);
    /** @type {Effect | null} */
    b(this, z, null);
    /** @type {Effect | null} */
    b(this, G, null);
    /** @type {DocumentFragment | null} */
    b(this, we, null);
    b(this, Be, 0);
    b(this, Ae, 0);
    b(this, tt, !1);
    /** @type {Set<Effect>} */
    b(this, yt, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    b(this, wt, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    b(this, xe, null);
    b(this, qt, ni(() => (w(this, xe, Ht(i(this, Be))), () => {
      w(this, xe, null);
    })));
    w(this, $, t), w(this, Z, r), w(this, ze, (a) => {
      var f = (
        /** @type {Effect} */
        E
      );
      f.b = this, f.f |= tr, n(a);
    }), this.parent = /** @type {Effect} */
    E.b, this.transform_error = s ?? this.parent?.transform_error ?? ((a) => a), w(this, B, En(() => {
      R(this, M, ir).call(this);
    }, si));
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    ln(t, i(this, yt), i(this, wt));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!i(this, Z).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  update_pending_count(t, r) {
    R(this, M, ar).call(this, t, r), w(this, Be, i(this, Be) + t), !(!i(this, xe) || i(this, tt)) && (w(this, tt, !0), $e(() => {
      w(this, tt, !1), i(this, xe) && zt(i(this, xe), i(this, Be));
    }));
  }
  get_effect_pending() {
    return i(this, qt).call(this), _(
      /** @type {Source<number>} */
      i(this, xe)
    );
  }
  /** @param {unknown} error */
  error(t) {
    if (!i(this, Z).onerror && !i(this, Z).failed)
      throw t;
    y?.is_fork ? (i(this, Q) && y.skip_effect(i(this, Q)), i(this, z) && y.skip_effect(i(this, z)), i(this, G) && y.skip_effect(i(this, G)), y.on_fork_commit(() => {
      R(this, M, lr).call(this, t);
    })) : R(this, M, lr).call(this, t);
  }
}
$ = new WeakMap(), cr = new WeakMap(), Z = new WeakMap(), ze = new WeakMap(), B = new WeakMap(), Q = new WeakMap(), z = new WeakMap(), G = new WeakMap(), we = new WeakMap(), Be = new WeakMap(), Ae = new WeakMap(), tt = new WeakMap(), yt = new WeakMap(), wt = new WeakMap(), xe = new WeakMap(), qt = new WeakMap(), M = new WeakSet(), li = function() {
  try {
    w(this, Q, ge(() => i(this, ze).call(this, i(this, $))));
  } catch (t) {
    this.error(t);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
oi = function(t) {
  const r = i(this, Z).failed;
  r && w(this, G, ge(() => {
    r(
      i(this, $),
      () => t,
      () => () => {
      }
    );
  }));
}, fi = function() {
  const t = i(this, Z).pending;
  t && (this.is_pending = !0, w(this, z, ge(() => t(i(this, $)))), $e(() => {
    var r = w(this, we, document.createDocumentFragment()), n = Bt();
    r.append(n), w(this, Q, R(this, M, Ft).call(this, () => ge(() => i(this, ze).call(this, n)))), i(this, Ae) === 0 && (i(this, $).before(r), w(this, we, null), _t(
      /** @type {Effect} */
      i(this, z),
      () => {
        w(this, z, null);
      }
    ), R(this, M, Pt).call(
      this,
      /** @type {Batch} */
      y
    ));
  }));
}, ir = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), w(this, Ae, 0), w(this, Be, 0), w(this, Q, ge(() => {
      i(this, ze).call(this, i(this, $));
    })), i(this, Ae) > 0) {
      var t = w(this, we, document.createDocumentFragment());
      Rn(i(this, Q), t);
      const r = (
        /** @type {(anchor: Node) => void} */
        i(this, Z).pending
      );
      w(this, z, ge(() => r(i(this, $))));
    } else
      R(this, M, Pt).call(
        this,
        /** @type {Batch} */
        y
      );
  } catch (r) {
    this.error(r);
  }
}, /**
 * @param {Batch} batch
 */
Pt = function(t) {
  this.is_pending = !1, t.transfer_effects(i(this, yt), i(this, wt));
}, /**
 * @template T
 * @param {() => T} fn
 */
Ft = function(t) {
  var r = E, n = x, s = re;
  _e(i(this, B)), ne(i(this, B)), it(i(this, B).ctx);
  try {
    return He.ensure(), t();
  } catch (a) {
    return sn(a), null;
  } finally {
    _e(r), ne(n), it(s);
  }
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 * @param {Batch} batch
 */
ar = function(t, r) {
  var n;
  if (!this.has_pending_snippet()) {
    this.parent && R(n = this.parent, M, ar).call(n, t, r);
    return;
  }
  w(this, Ae, i(this, Ae) + t), i(this, Ae) === 0 && (R(this, M, Pt).call(this, r), i(this, z) && _t(i(this, z), () => {
    w(this, z, null);
  }), i(this, we) && (i(this, $).before(i(this, we)), w(this, we, null)));
}, /**
 * @param {unknown} error
 */
lr = function(t) {
  i(this, Q) && (K(i(this, Q)), w(this, Q, null)), i(this, z) && (K(i(this, z)), w(this, z, null)), i(this, G) && (K(i(this, G)), w(this, G, null));
  var r = i(this, Z).onerror;
  let n = i(this, Z).failed;
  var s = !1, a = !1;
  const f = () => {
    if (s) {
      $s();
      return;
    }
    s = !0, a && Hs(), i(this, G) !== null && _t(i(this, G), () => {
      w(this, G, null);
    }), R(this, M, Ft).call(this, () => {
      R(this, M, ir).call(this);
    });
  }, o = (l) => {
    try {
      a = !0, r?.(l, f), a = !1;
    } catch (u) {
      Ne(u, i(this, B) && i(this, B).parent);
    }
    n && w(this, G, R(this, M, Ft).call(this, () => {
      try {
        return ge(() => {
          var u = (
            /** @type {Effect} */
            E
          );
          u.b = this, u.f |= tr, n(
            i(this, $),
            () => l,
            () => f
          );
        });
      } catch (u) {
        return Ne(
          u,
          /** @type {Effect} */
          i(this, B).parent
        ), null;
      }
    }));
  };
  $e(() => {
    var l;
    try {
      l = this.transform_error(t);
    } catch (u) {
      Ne(u, i(this, B) && i(this, B).parent);
      return;
    }
    l !== null && typeof l == "object" && typeof /** @type {any} */
    l.then == "function" ? l.then(
      o,
      /** @param {unknown} e */
      (u) => Ne(u, i(this, B) && i(this, B).parent)
    ) : o(l);
  });
};
function ui(e, t, r, n) {
  const s = vn;
  var a = e.filter((h) => !h.settled);
  if (r.length === 0 && a.length === 0) {
    n(t.map(s));
    return;
  }
  var f = (
    /** @type {Effect} */
    E
  ), o = di(), l = a.length === 1 ? a[0].promise : a.length > 1 ? Promise.all(a.map((h) => h.promise)) : null;
  function u(h) {
    o();
    try {
      n(h);
    } catch (c) {
      (f.f & oe) === 0 && Ne(c, f);
    }
    Lt();
  }
  if (r.length === 0) {
    l.then(() => u(t.map(s)));
    return;
  }
  var v = cn();
  function p() {
    Promise.all(r.map((h) => /* @__PURE__ */ ci(h))).then((h) => u([...t.map(s), ...h])).catch((h) => Ne(h, f)).finally(() => v());
  }
  l ? l.then(() => {
    o(), p(), Lt();
  }) : p();
}
function di() {
  var e = (
    /** @type {Effect} */
    E
  ), t = x, r = re, n = (
    /** @type {Batch} */
    y
  );
  return function(a = !0) {
    _e(e), ne(t), it(r), a && (e.f & oe) === 0 && (n?.activate(), n?.apply());
  };
}
function Lt(e = !0) {
  _e(null), ne(null), it(null), e && y?.deactivate();
}
function cn() {
  var e = (
    /** @type {Effect} */
    E
  ), t = (
    /** @type {Boundary} */
    e.b
  ), r = (
    /** @type {Batch} */
    y
  ), n = t.is_rendered();
  return t.update_pending_count(1, r), r.increment(n, e), (s = !1) => {
    t.update_pending_count(-1, r), r.decrement(n, e, s);
  };
}
// @__NO_SIDE_EFFECTS__
function vn(e) {
  var t = L | j;
  return E !== null && (E.f |= ot), {
    ctx: re,
    deps: null,
    effects: null,
    equals: Xr,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      F
    ),
    wv: 0,
    parent: E,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function ci(e, t, r) {
  let n = (
    /** @type {Effect | null} */
    E
  );
  n === null && js();
  var s = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), a = Ht(
    /** @type {V} */
    F
  ), f = !x, o = /* @__PURE__ */ new Map();
  return Ai(() => {
    var l = (
      /** @type {Effect} */
      E
    ), u = Zr();
    s = u.promise;
    try {
      Promise.resolve(e()).then(u.resolve, u.reject).finally(Lt);
    } catch (c) {
      u.reject(c), Lt();
    }
    var v = (
      /** @type {Batch} */
      y
    );
    if (f) {
      if ((l.f & Ge) !== 0)
        var p = cn();
      if (
        /** @type {Boundary} */
        n.b.is_rendered()
      )
        o.get(v)?.reject(be), o.delete(v);
      else {
        for (const c of o.values())
          c.reject(be);
        o.clear();
      }
      o.set(v, u);
    }
    const h = (c, d = void 0) => {
      if (p) {
        var T = d === be;
        p(T);
      }
      if (!(d === be || (l.f & oe) !== 0)) {
        if (v.activate(), d)
          a.f |= Re, zt(a, d);
        else {
          (a.f & Re) !== 0 && (a.f ^= Re), zt(a, c);
          for (const [S, q] of o) {
            if (o.delete(S), S === v) break;
            q.reject(be);
          }
        }
        v.deactivate();
      }
    };
    u.promise.then(h, (c) => h(null, c || "unknown"));
  }), ki(() => {
    for (const l of o.values())
      l.reject(be);
  }), new Promise((l) => {
    function u(v) {
      function p() {
        v === s ? l(a) : u(s);
      }
      v.then(p, p);
    }
    u(s);
  });
}
// @__NO_SIDE_EFFECTS__
function qr(e) {
  const t = /* @__PURE__ */ vn(e);
  return Mn(t), t;
}
function vi(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var r = 0; r < t.length; r += 1)
      K(
        /** @type {Effect} */
        t[r]
      );
  }
}
function pr(e) {
  var t, r = E, n = e.parent;
  if (!Oe && n !== null && (n.f & (oe | ee)) !== 0)
    return Ws(), e.v;
  _e(n);
  try {
    e.f &= ~Ye, vi(e), t = Pn(e);
  } finally {
    _e(r);
  }
  return t;
}
function hn(e) {
  var t = pr(e);
  if (!e.equals(t) && (e.wv = Cn(), (!y?.is_fork || e.deps === null) && (y !== null ? y.capture(e, t, !0) : e.v = t, e.deps === null))) {
    O(e, P);
    return;
  }
  Oe || (ae !== null ? (br() || y?.is_fork) && ae.set(e, t) : vr(e));
}
function hi(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      (t.teardown || t.ac) && (t.teardown?.(), t.ac?.abort(be), t.teardown = Ds, t.ac = null, gt(t, 0), mr(t));
}
function _n(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      t.teardown && lt(t);
}
let or = /* @__PURE__ */ new Set();
const qe = /* @__PURE__ */ new Map();
let pn = !1;
function Ht(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Xr,
    rv: 0,
    wv: 0
  };
  return r;
}
// @__NO_SIDE_EFFECTS__
function I(e, t) {
  const r = Ht(e);
  return Mn(r), r;
}
function m(e, t, r = !1) {
  x !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!le || (x.f & rr) !== 0) && rn() && (x.f & (L | ce | pt | rr)) !== 0 && (te === null || !rt.call(te, e)) && Ys();
  let n = r ? dt(t) : t;
  return zt(e, n, Mt);
}
function zt(e, t, r = null) {
  if (!e.equals(t)) {
    qe.set(e, Oe ? t : e.v);
    var n = He.ensure();
    if (n.capture(e, t), (e.f & L) !== 0) {
      const s = (
        /** @type {Derived} */
        e
      );
      (e.f & j) !== 0 && pr(s), ae === null && vr(s);
    }
    e.wv = Cn(), gn(e, j, r), E !== null && (E.f & P) !== 0 && (E.f & (ve | Me)) === 0 && (W === null ? Oi([e]) : W.push(e)), !n.is_fork && or.size > 0 && !pn && _i();
  }
  return t;
}
function _i() {
  pn = !1;
  for (const e of or)
    (e.f & P) !== 0 && O(e, he), Et(e) && lt(e);
  or.clear();
}
function ht(e) {
  m(e, e.v + 1);
}
function gn(e, t, r) {
  var n = e.reactions;
  if (n !== null)
    for (var s = n.length, a = 0; a < s; a++) {
      var f = n[a], o = f.f, l = (o & j) === 0;
      if (l && O(f, t), (o & L) !== 0) {
        var u = (
          /** @type {Derived} */
          f
        );
        ae?.delete(u), (o & Ye) === 0 && (o & X && (E === null || (E.f & jt) === 0) && (f.f |= Ye), gn(u, he, r));
      } else if (l) {
        var v = (
          /** @type {Effect} */
          f
        );
        (o & ce) !== 0 && pe !== null && pe.add(v), r !== null ? r.push(v) : _r(v);
      }
    }
}
function dt(e) {
  if (typeof e != "object" || e === null || $t in e)
    return e;
  const t = Cs(e);
  if (t !== Ms && t !== Os)
    return e;
  var r = /* @__PURE__ */ new Map(), n = Ts(e), s = /* @__PURE__ */ I(0), a = Ue, f = (o) => {
    if (Ue === a)
      return o();
    var l = x, u = Ue;
    ne(null), Gr(a);
    var v = o();
    return ne(l), Gr(u), v;
  };
  return n && r.set("length", /* @__PURE__ */ I(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(o, l, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && qs();
        var v = r.get(l);
        return v === void 0 ? f(() => {
          var p = /* @__PURE__ */ I(u.value);
          return r.set(l, p), p;
        }) : m(v, u.value, !0), !0;
      },
      deleteProperty(o, l) {
        var u = r.get(l);
        if (u === void 0) {
          if (l in o) {
            const v = f(() => /* @__PURE__ */ I(F));
            r.set(l, v), ht(s);
          }
        } else
          m(u, F), ht(s);
        return !0;
      },
      get(o, l, u) {
        if (l === $t)
          return e;
        var v = r.get(l), p = l in o;
        if (v === void 0 && (!p || ct(o, l)?.writable) && (v = f(() => {
          var c = dt(p ? o[l] : F), d = /* @__PURE__ */ I(c);
          return d;
        }), r.set(l, v)), v !== void 0) {
          var h = _(v);
          return h === F ? void 0 : h;
        }
        return Reflect.get(o, l, u);
      },
      getOwnPropertyDescriptor(o, l) {
        var u = Reflect.getOwnPropertyDescriptor(o, l);
        if (u && "value" in u) {
          var v = r.get(l);
          v && (u.value = _(v));
        } else if (u === void 0) {
          var p = r.get(l), h = p?.v;
          if (p !== void 0 && h !== F)
            return {
              enumerable: !0,
              configurable: !0,
              value: h,
              writable: !0
            };
        }
        return u;
      },
      has(o, l) {
        if (l === $t)
          return !0;
        var u = r.get(l), v = u !== void 0 && u.v !== F || Reflect.has(o, l);
        if (u !== void 0 || E !== null && (!v || ct(o, l)?.writable)) {
          u === void 0 && (u = f(() => {
            var h = v ? dt(o[l]) : F, c = /* @__PURE__ */ I(h);
            return c;
          }), r.set(l, u));
          var p = _(u);
          if (p === F)
            return !1;
        }
        return v;
      },
      set(o, l, u, v) {
        var p = r.get(l), h = l in o;
        if (n && l === "length")
          for (var c = u; c < /** @type {Source<number>} */
          p.v; c += 1) {
            var d = r.get(c + "");
            d !== void 0 ? m(d, F) : c in o && (d = f(() => /* @__PURE__ */ I(F)), r.set(c + "", d));
          }
        if (p === void 0)
          (!h || ct(o, l)?.writable) && (p = f(() => /* @__PURE__ */ I(void 0)), m(p, dt(u)), r.set(l, p));
        else {
          h = p.v !== F;
          var T = f(() => dt(u));
          m(p, T);
        }
        var S = Reflect.getOwnPropertyDescriptor(o, l);
        if (S?.set && S.set.call(v, u), !h) {
          if (n && typeof l == "string") {
            var q = (
              /** @type {Source<number>} */
              r.get("length")
            ), Ee = Number(l);
            Number.isInteger(Ee) && Ee >= q.v && m(q, Ee + 1);
          }
          ht(s);
        }
        return !0;
      },
      ownKeys(o) {
        _(s);
        var l = Reflect.ownKeys(o).filter((p) => {
          var h = r.get(p);
          return h === void 0 || h.v !== F;
        });
        for (var [u, v] of r)
          v.v !== F && !(u in o) && l.push(u);
        return l;
      },
      setPrototypeOf() {
        Us();
      }
    }
  );
}
var Ur, bn, mn, yn;
function pi() {
  if (Ur === void 0) {
    Ur = window, bn = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, r = Text.prototype;
    mn = ct(t, "firstChild").get, yn = ct(t, "nextSibling").get, Lr(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), Lr(r) && (r.__t = void 0);
  }
}
function Bt(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function at(e) {
  return (
    /** @type {TemplateNode | null} */
    mn.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function Gt(e) {
  return (
    /** @type {TemplateNode | null} */
    yn.call(e)
  );
}
function k(e, t) {
  return /* @__PURE__ */ at(e);
}
function gi(e, t = !1) {
  {
    var r = /* @__PURE__ */ at(e);
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ Gt(r) : r;
  }
}
function N(e, t = 1, r = !1) {
  let n = e;
  for (; t--; )
    n = /** @type {TemplateNode} */
    /* @__PURE__ */ Gt(n);
  return n;
}
function bi() {
  return !1;
}
function wn(e, t, r) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElementNS(Ks, e, void 0)
  );
}
let Yr = !1;
function mi() {
  Yr || (Yr = !0, document.addEventListener(
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
function gr(e) {
  var t = x, r = E;
  ne(null), _e(null);
  try {
    return e();
  } finally {
    ne(t), _e(r);
  }
}
function yi(e, t, r, n = r) {
  e.addEventListener(t, () => gr(r));
  const s = e.__on_r;
  s ? e.__on_r = () => {
    s(), n(!0);
  } : e.__on_r = () => n(!0), mi();
}
function wi(e) {
  E === null && (x === null && Bs(), zs()), Oe && Ls();
}
function xi(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function ke(e, t) {
  var r = E;
  r !== null && (r.f & ee) !== 0 && (e |= ee);
  var n = {
    ctx: re,
    deps: null,
    nodes: null,
    f: e | j | X,
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
  y?.register_created_effect(n);
  var s = n;
  if ((e & nt) !== 0)
    We !== null ? We.push(n) : He.ensure().schedule(n);
  else if (t !== null) {
    try {
      lt(n);
    } catch (f) {
      throw K(n), f;
    }
    s.deps === null && s.teardown === null && s.nodes === null && s.first === s.last && // either `null`, or a singular child
    (s.f & ot) === 0 && (s = s.first, (e & ce) !== 0 && (e & st) !== 0 && s !== null && (s.f |= st));
  }
  if (s !== null && (s.parent = r, r !== null && xi(s, r), x !== null && (x.f & L) !== 0 && (e & Me) === 0)) {
    var a = (
      /** @type {Derived} */
      x
    );
    (a.effects ?? (a.effects = [])).push(s);
  }
  return n;
}
function br() {
  return x !== null && !le;
}
function ki(e) {
  const t = ke(Yt, null);
  return O(t, P), t.teardown = e, t;
}
function Ei(e) {
  wi();
  var t = (
    /** @type {Effect} */
    E.f
  ), r = !x && (t & ve) !== 0 && (t & Ge) === 0;
  if (r) {
    var n = (
      /** @type {ComponentContext} */
      re
    );
    (n.e ?? (n.e = [])).push(e);
  } else
    return xn(e);
}
function xn(e) {
  return ke(nt | Is, e);
}
function Si(e) {
  He.ensure();
  const t = ke(Me | ot, e);
  return (r = {}) => new Promise((n) => {
    r.outro ? _t(t, () => {
      K(t), n(void 0);
    }) : (K(t), n(void 0));
  });
}
function Ti(e) {
  return ke(nt, e);
}
function Ai(e) {
  return ke(pt | ot, e);
}
function kn(e, t = 0) {
  return ke(Yt | t, e);
}
function Qt(e, t = [], r = [], n = []) {
  ui(n, t, r, (s) => {
    ke(Yt, () => e(...s.map(_)));
  });
}
function En(e, t = 0) {
  var r = ke(ce | t, e);
  return r;
}
function ge(e) {
  return ke(ve | ot, e);
}
function Sn(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = Oe, n = x;
    Hr(!0), ne(null);
    try {
      t.call(null);
    } finally {
      Hr(r), ne(n);
    }
  }
}
function mr(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    const s = r.ac;
    s !== null && gr(() => {
      s.abort(be);
    });
    var n = r.next;
    (r.f & Me) !== 0 ? r.parent = null : K(r, t), r = n;
  }
}
function Ni(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & ve) === 0 && K(t), t = r;
  }
}
function K(e, t = !0) {
  var r = !1;
  (t || (e.f & Fs) !== 0) && e.nodes !== null && e.nodes.end !== null && (Ri(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), r = !0), O(e, zr), mr(e, t && !r), gt(e, 0);
  var n = e.nodes && e.nodes.t;
  if (n !== null)
    for (const a of n)
      a.stop();
  Sn(e), e.f ^= zr, e.f |= oe;
  var s = e.parent;
  s !== null && s.first !== null && Tn(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function Ri(e, t) {
  for (; e !== null; ) {
    var r = e === t ? null : /* @__PURE__ */ Gt(e);
    e.remove(), e = r;
  }
}
function Tn(e) {
  var t = e.parent, r = e.prev, n = e.next;
  r !== null && (r.next = n), n !== null && (n.prev = r), t !== null && (t.first === e && (t.first = n), t.last === e && (t.last = r));
}
function _t(e, t, r = !0) {
  var n = [];
  An(e, n, !0);
  var s = () => {
    r && K(e), t && t();
  }, a = n.length;
  if (a > 0) {
    var f = () => --a || s();
    for (var o of n)
      o.out(f);
  } else
    s();
}
function An(e, t, r) {
  if ((e.f & ee) === 0) {
    e.f ^= ee;
    var n = e.nodes && e.nodes.t;
    if (n !== null)
      for (const o of n)
        (o.is_global || r) && t.push(o);
    for (var s = e.first; s !== null; ) {
      var a = s.next;
      if ((s.f & Me) === 0) {
        var f = (s.f & st) !== 0 || // If this is a branch effect without a block effect parent,
        // it means the parent block effect was pruned. In that case,
        // transparency information was transferred to the branch effect.
        (s.f & ve) !== 0 && (e.f & ce) !== 0;
        An(s, t, f ? r : !1);
      }
      s = a;
    }
  }
}
function Mi(e) {
  Nn(e, !0);
}
function Nn(e, t) {
  if ((e.f & ee) !== 0) {
    e.f ^= ee, (e.f & P) === 0 && (O(e, j), He.ensure().schedule(e));
    for (var r = e.first; r !== null; ) {
      var n = r.next, s = (r.f & st) !== 0 || (r.f & ve) !== 0;
      Nn(r, s ? t : !1), r = n;
    }
    var a = e.nodes && e.nodes.t;
    if (a !== null)
      for (const f of a)
        (f.is_global || t) && f.in();
  }
}
function Rn(e, t) {
  if (e.nodes)
    for (var r = e.nodes.start, n = e.nodes.end; r !== null; ) {
      var s = r === n ? null : /* @__PURE__ */ Gt(r);
      t.append(r), r = s;
    }
}
let It = !1, Oe = !1;
function Hr(e) {
  Oe = e;
}
let x = null, le = !1;
function ne(e) {
  x = e;
}
let E = null;
function _e(e) {
  E = e;
}
let te = null;
function Mn(e) {
  x !== null && (te === null ? te = [e] : te.push(e));
}
let V = null, Y = 0, W = null;
function Oi(e) {
  W = e;
}
let On = 1, Fe = 0, Ue = Fe;
function Gr(e) {
  Ue = e;
}
function Cn() {
  return ++On;
}
function Et(e) {
  var t = e.f;
  if ((t & j) !== 0)
    return !0;
  if (t & L && (e.f &= ~Ye), (t & he) !== 0) {
    for (var r = (
      /** @type {Value[]} */
      e.deps
    ), n = r.length, s = 0; s < n; s++) {
      var a = r[s];
      if (Et(
        /** @type {Derived} */
        a
      ) && hn(
        /** @type {Derived} */
        a
      ), a.wv > e.wv)
        return !0;
    }
    (t & X) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    ae === null && O(e, P);
  }
  return !1;
}
function Dn(e, t, r = !0) {
  var n = e.reactions;
  if (n !== null && !(te !== null && rt.call(te, e)))
    for (var s = 0; s < n.length; s++) {
      var a = n[s];
      (a.f & L) !== 0 ? Dn(
        /** @type {Derived} */
        a,
        t,
        !1
      ) : t === a && (r ? O(a, j) : (a.f & P) !== 0 && O(a, he), _r(
        /** @type {Effect} */
        a
      ));
    }
}
function Pn(e) {
  var T;
  var t = V, r = Y, n = W, s = x, a = te, f = re, o = le, l = Ue, u = e.f;
  V = /** @type {null | Value[]} */
  null, Y = 0, W = null, x = (u & (ve | Me)) === 0 ? e : null, te = null, it(e.ctx), le = !1, Ue = ++Fe, e.ac !== null && (gr(() => {
    e.ac.abort(be);
  }), e.ac = null);
  try {
    e.f |= jt;
    var v = (
      /** @type {Function} */
      e.fn
    ), p = v();
    e.f |= Ge;
    var h = e.deps, c = y?.is_fork;
    if (V !== null) {
      var d;
      if (c || gt(e, Y), h !== null && Y > 0)
        for (h.length = Y + V.length, d = 0; d < V.length; d++)
          h[Y + d] = V[d];
      else
        e.deps = h = V;
      if (br() && (e.f & X) !== 0)
        for (d = Y; d < h.length; d++)
          ((T = h[d]).reactions ?? (T.reactions = [])).push(e);
    } else !c && h !== null && Y < h.length && (gt(e, Y), h.length = Y);
    if (rn() && W !== null && !le && h !== null && (e.f & (L | he | j)) === 0)
      for (d = 0; d < /** @type {Source[]} */
      W.length; d++)
        Dn(
          W[d],
          /** @type {Effect} */
          e
        );
    if (s !== null && s !== e) {
      if (Fe++, s.deps !== null)
        for (let S = 0; S < r; S += 1)
          s.deps[S].rv = Fe;
      if (t !== null)
        for (const S of t)
          S.rv = Fe;
      W !== null && (n === null ? n = W : n.push(.../** @type {Source[]} */
      W));
    }
    return (e.f & Re) !== 0 && (e.f ^= Re), p;
  } catch (S) {
    return sn(S);
  } finally {
    e.f ^= jt, V = t, Y = r, W = n, x = s, te = a, it(f), le = o, Ue = l;
  }
}
function Ci(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var n = As.call(r, e);
    if (n !== -1) {
      var s = r.length - 1;
      s === 0 ? r = t.reactions = null : (r[n] = r[s], r.pop());
    }
  }
  if (r === null && (t.f & L) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (V === null || !rt.call(V, t))) {
    var a = (
      /** @type {Derived} */
      t
    );
    (a.f & X) !== 0 && (a.f ^= X, a.f &= ~Ye), a.v !== F && vr(a), hi(a), gt(a, 0);
  }
}
function gt(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var n = t; n < r.length; n++)
      Ci(e, r[n]);
}
function lt(e) {
  var t = e.f;
  if ((t & oe) === 0) {
    O(e, P);
    var r = E, n = It;
    E = e, It = !0;
    try {
      (t & (ce | Qr)) !== 0 ? Ni(e) : mr(e), Sn(e);
      var s = Pn(e);
      e.teardown = typeof s == "function" ? s : null, e.wv = On;
      var a;
    } finally {
      It = n, E = r;
    }
  }
}
async function Di() {
  await Promise.resolve(), ti();
}
function _(e) {
  var t = e.f, r = (t & L) !== 0;
  if (x !== null && !le) {
    var n = E !== null && (E.f & oe) !== 0;
    if (!n && (te === null || !rt.call(te, e))) {
      var s = x.deps;
      if ((x.f & jt) !== 0)
        e.rv < Fe && (e.rv = Fe, V === null && s !== null && s[Y] === e ? Y++ : V === null ? V = [e] : V.push(e));
      else {
        (x.deps ?? (x.deps = [])).push(e);
        var a = e.reactions;
        a === null ? e.reactions = [x] : rt.call(a, x) || a.push(x);
      }
    }
  }
  if (Oe && qe.has(e))
    return qe.get(e);
  if (r) {
    var f = (
      /** @type {Derived} */
      e
    );
    if (Oe) {
      var o = f.v;
      return ((f.f & P) === 0 && f.reactions !== null || In(f)) && (o = pr(f)), qe.set(f, o), o;
    }
    var l = (f.f & X) === 0 && !le && x !== null && (It || (x.f & X) !== 0), u = (f.f & Ge) === 0;
    Et(f) && (l && (f.f |= X), hn(f)), l && !u && (_n(f), Fn(f));
  }
  if (ae?.has(e))
    return ae.get(e);
  if ((e.f & Re) !== 0)
    throw e.v;
  return e.v;
}
function Fn(e) {
  if (e.f |= X, e.deps !== null)
    for (const t of e.deps)
      (t.reactions ?? (t.reactions = [])).push(e), (t.f & L) !== 0 && (t.f & X) === 0 && (_n(
        /** @type {Derived} */
        t
      ), Fn(
        /** @type {Derived} */
        t
      ));
}
function In(e) {
  if (e.v === F) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (qe.has(t) || (t.f & L) !== 0 && In(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function jn(e) {
  var t = le;
  try {
    return le = !0, e();
  } finally {
    le = t;
  }
}
const Pi = ["touchstart", "touchmove"];
function Fi(e) {
  return Pi.includes(e);
}
const Ie = Symbol("events"), Ln = /* @__PURE__ */ new Set(), fr = /* @__PURE__ */ new Set();
function At(e, t, r) {
  (t[Ie] ?? (t[Ie] = {}))[e] = r;
}
function Ii(e) {
  for (var t = 0; t < e.length; t++)
    Ln.add(e[t]);
  for (var r of fr)
    r(e);
}
let Jr = null;
function Kr(e) {
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), n = e.type, s = e.composedPath?.() || [], a = (
    /** @type {null | Element} */
    s[0] || e.target
  );
  Jr = e;
  var f = 0, o = Jr === e && e[Ie];
  if (o) {
    var l = s.indexOf(o);
    if (l !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e[Ie] = t;
      return;
    }
    var u = s.indexOf(t);
    if (u === -1)
      return;
    l <= u && (f = l);
  }
  if (a = /** @type {Element} */
  s[f] || e.target, a !== t) {
    Rs(e, "currentTarget", {
      configurable: !0,
      get() {
        return a || r;
      }
    });
    var v = x, p = E;
    ne(null), _e(null);
    try {
      for (var h, c = []; a !== null; ) {
        var d = a.assignedSlot || a.parentNode || /** @type {any} */
        a.host || null;
        try {
          var T = a[Ie]?.[n];
          T != null && (!/** @type {any} */
          a.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === a) && T.call(a, e);
        } catch (S) {
          h ? c.push(S) : h = S;
        }
        if (e.cancelBubble || d === t || d === null)
          break;
        a = d;
      }
      if (h) {
        for (let S of c)
          queueMicrotask(() => {
            throw S;
          });
        throw h;
      }
    } finally {
      e[Ie] = t, delete e.currentTarget, ne(v), _e(p);
    }
  }
}
const ji = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (e) => e
  })
);
function Li(e) {
  return (
    /** @type {string} */
    ji?.createHTML(e) ?? e
  );
}
function zn(e) {
  var t = wn("template");
  return t.innerHTML = Li(e.replaceAll("<!>", "<!---->")), t.content;
}
function ur(e, t) {
  var r = (
    /** @type {Effect} */
    E
  );
  r.nodes === null && (r.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function ft(e, t) {
  var r = (t & Gs) !== 0, n = (t & Js) !== 0, s, a = !e.startsWith("<!>");
  return () => {
    s === void 0 && (s = zn(a ? e : "<!>" + e), r || (s = /** @type {TemplateNode} */
    /* @__PURE__ */ at(s)));
    var f = (
      /** @type {TemplateNode} */
      n || bn ? document.importNode(s, !0) : s.cloneNode(!0)
    );
    if (r) {
      var o = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ at(f)
      ), l = (
        /** @type {TemplateNode} */
        f.lastChild
      );
      ur(o, l);
    } else
      ur(f, f);
    return f;
  };
}
// @__NO_SIDE_EFFECTS__
function zi(e, t, r = "svg") {
  var n = !e.startsWith("<!>"), s = `<${r}>${n ? e : "<!>" + e}</${r}>`, a;
  return () => {
    if (!a) {
      var f = (
        /** @type {DocumentFragment} */
        zn(s)
      ), o = (
        /** @type {Element} */
        /* @__PURE__ */ at(f)
      );
      a = /** @type {Element} */
      /* @__PURE__ */ at(o);
    }
    var l = (
      /** @type {TemplateNode} */
      a.cloneNode(!0)
    );
    return ur(l, l), l;
  };
}
// @__NO_SIDE_EFFECTS__
function Bi(e, t) {
  return /* @__PURE__ */ zi(e, t, "svg");
}
function De(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function U(e, t) {
  var r = t == null ? "" : typeof t == "object" ? `${t}` : t;
  r !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = r, e.nodeValue = `${r}`);
}
function Vi(e, t) {
  return qi(e, t);
}
const Nt = /* @__PURE__ */ new Map();
function qi(e, { target: t, anchor: r, props: n = {}, events: s, context: a, intro: f = !0, transformError: o }) {
  pi();
  var l = void 0, u = Si(() => {
    var v = r ?? t.appendChild(Bt());
    ii(
      /** @type {TemplateNode} */
      v,
      {
        pending: () => {
        }
      },
      (c) => {
        en({});
        var d = (
          /** @type {ComponentContext} */
          re
        );
        a && (d.c = a), s && (n.$$events = s), l = e(c, n) || {}, tn();
      },
      o
    );
    var p = /* @__PURE__ */ new Set(), h = (c) => {
      for (var d = 0; d < c.length; d++) {
        var T = c[d];
        if (!p.has(T)) {
          p.add(T);
          var S = Fi(T);
          for (const Je of [t, document]) {
            var q = Nt.get(Je);
            q === void 0 && (q = /* @__PURE__ */ new Map(), Nt.set(Je, q));
            var Ee = q.get(T);
            Ee === void 0 ? (Je.addEventListener(T, Kr, { passive: S }), q.set(T, 1)) : q.set(T, Ee + 1);
          }
        }
      }
    };
    return h(Ns(Ln)), fr.add(h), () => {
      for (var c of p)
        for (const S of [t, document]) {
          var d = (
            /** @type {Map<string, number>} */
            Nt.get(S)
          ), T = (
            /** @type {number} */
            d.get(c)
          );
          --T == 0 ? (S.removeEventListener(c, Kr), d.delete(c), d.size === 0 && Nt.delete(S)) : d.set(c, T);
        }
      fr.delete(h), v !== r && v.parentNode?.removeChild(v);
    };
  });
  return dr.set(l, u), l;
}
let dr = /* @__PURE__ */ new WeakMap();
function Ui(e, t) {
  const r = dr.get(e);
  return r ? (dr.delete(e), r(t)) : Promise.resolve();
}
var ie, de, J, Ve, xt, kt, Ut;
class Yi {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, r = !0) {
    /** @type {TemplateNode} */
    se(this, "anchor");
    /** @type {Map<Batch, Key>} */
    b(this, ie, /* @__PURE__ */ new Map());
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
    b(this, de, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    b(this, J, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    b(this, Ve, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    b(this, xt, !0);
    /**
     * @param {Batch} batch
     */
    b(this, kt, (t) => {
      if (i(this, ie).has(t)) {
        var r = (
          /** @type {Key} */
          i(this, ie).get(t)
        ), n = i(this, de).get(r);
        if (n)
          Mi(n), i(this, Ve).delete(r);
        else {
          var s = i(this, J).get(r);
          s && (i(this, de).set(r, s.effect), i(this, J).delete(r), s.fragment.lastChild.remove(), this.anchor.before(s.fragment), n = s.effect);
        }
        for (const [a, f] of i(this, ie)) {
          if (i(this, ie).delete(a), a === t)
            break;
          const o = i(this, J).get(f);
          o && (K(o.effect), i(this, J).delete(f));
        }
        for (const [a, f] of i(this, de)) {
          if (a === r || i(this, Ve).has(a)) continue;
          const o = () => {
            if (Array.from(i(this, ie).values()).includes(a)) {
              var u = document.createDocumentFragment();
              Rn(f, u), u.append(Bt()), i(this, J).set(a, { effect: f, fragment: u });
            } else
              K(f);
            i(this, Ve).delete(a), i(this, de).delete(a);
          };
          i(this, xt) || !n ? (i(this, Ve).add(a), _t(f, o, !1)) : o();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    b(this, Ut, (t) => {
      i(this, ie).delete(t);
      const r = Array.from(i(this, ie).values());
      for (const [n, s] of i(this, J))
        r.includes(n) || (K(s.effect), i(this, J).delete(n));
    });
    this.anchor = t, w(this, xt, r);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, r) {
    var n = (
      /** @type {Batch} */
      y
    ), s = bi();
    if (r && !i(this, de).has(t) && !i(this, J).has(t))
      if (s) {
        var a = document.createDocumentFragment(), f = Bt();
        a.append(f), i(this, J).set(t, {
          effect: ge(() => r(f)),
          fragment: a
        });
      } else
        i(this, de).set(
          t,
          ge(() => r(this.anchor))
        );
    if (i(this, ie).set(n, t), s) {
      for (const [o, l] of i(this, de))
        o === t ? n.unskip_effect(l) : n.skip_effect(l);
      for (const [o, l] of i(this, J))
        o === t ? n.unskip_effect(l.effect) : n.skip_effect(l.effect);
      n.oncommit(i(this, kt)), n.ondiscard(i(this, Ut));
    } else
      i(this, kt).call(this, n);
  }
}
ie = new WeakMap(), de = new WeakMap(), J = new WeakMap(), Ve = new WeakMap(), xt = new WeakMap(), kt = new WeakMap(), Ut = new WeakMap();
function ut(e, t, r = !1) {
  var n = new Yi(e), s = r ? st : 0;
  function a(f, o) {
    n.ensure(f, o);
  }
  En(() => {
    var f = !1;
    t((o, l = 0) => {
      f = !0, a(l, o);
    }), f || a(-1, null);
  }, s);
}
function Hi(e, t) {
  Ti(() => {
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
      const s = wn("style");
      s.id = t.hash, s.textContent = t.code, n.appendChild(s);
    }
  });
}
function Gi(e, t, r) {
  var n = e == null ? "" : "" + e;
  return n === "" ? null : n;
}
function Ji(e, t) {
  return e == null ? null : String(e);
}
function Wr(e, t, r, n, s, a) {
  var f = e.__className;
  if (f !== r || f === void 0) {
    var o = Gi(r);
    o == null ? e.removeAttribute("class") : e.className = o, e.__className = r;
  }
  return a;
}
function Ki(e, t, r, n) {
  var s = e.__style;
  if (s !== t) {
    var a = Ji(t);
    a == null ? e.removeAttribute("style") : e.style.cssText = a, e.__style = t;
  }
  return n;
}
function Rt(e, t, r = t) {
  var n = /* @__PURE__ */ new WeakSet();
  yi(e, "input", async (s) => {
    var a = s ? e.defaultValue : e.value;
    if (a = Xt(e) ? er(a) : a, r(a), y !== null && n.add(y), await Di(), a !== (a = t())) {
      var f = e.selectionStart, o = e.selectionEnd, l = e.value.length;
      if (e.value = a ?? "", o !== null) {
        var u = e.value.length;
        f === o && o === l && u > l ? (e.selectionStart = u, e.selectionEnd = u) : (e.selectionStart = f, e.selectionEnd = Math.min(o, u));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  jn(t) == null && e.value && (r(Xt(e) ? er(e.value) : e.value), y !== null && n.add(y)), kn(() => {
    var s = t();
    if (e === document.activeElement) {
      var a = (
        /** @type {Batch} */
        y
      );
      if (n.has(a))
        return;
    }
    Xt(e) && s === er(e.value) || e.type === "date" && !s && !e.value || s !== e.value && (e.value = s ?? "");
  });
}
function Xt(e) {
  var t = e.type;
  return t === "number" || t === "range";
}
function er(e) {
  return e === "" ? null : +e;
}
const Wi = "5";
var $r;
typeof window < "u" && (($r = window.__svelte ?? (window.__svelte = {})).v ?? ($r.v = /* @__PURE__ */ new Set())).add(Wi);
var $i = /* @__PURE__ */ ft("<span><span></span> </span>"), Zi = /* @__PURE__ */ ft('<div class="text-center py-12 text-gray-500 dark:text-gray-400">Loading...</div>'), Qi = /* @__PURE__ */ ft(`<div class="mb-4 p-3 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg"><p class="text-sm text-amber-800 dark:text-amber-300"><strong>Note:</strong> TEST_MODE and TEST_MODE_DEMO_DATA are not both enabled in backend
					config. The simulator will not auto-activate on canister start, but can still be toggled
					manually.</p></div>`), Xi = /* @__PURE__ */ Bi('<svg class="inline-block w-4 h-4 mr-1.5 animate-spin" viewBox="0 0 24 24" fill="none"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path></svg>'), ea = /* @__PURE__ */ ft('<div class="p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg"><p class="text-sm text-red-800 dark:text-red-300"> </p></div>'), ta = /* @__PURE__ */ ft('<!> <div class="grid grid-cols-3 gap-3 mb-6"><div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 text-center"><div class="text-2xl font-bold text-indigo-600 dark:text-indigo-400"> </div> <div class="text-xs text-gray-500 dark:text-gray-400 mt-1">Users</div></div> <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 text-center"><div class="text-2xl font-bold text-emerald-600 dark:text-emerald-400"> </div> <div class="text-xs text-gray-500 dark:text-gray-400 mt-1">Orgs</div></div> <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 text-center"><div class="text-2xl font-bold text-purple-600 dark:text-purple-400"> </div> <div class="text-xs text-gray-500 dark:text-gray-400 mt-1">Proposals</div></div> <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 text-center"><div class="text-2xl font-bold text-cyan-600 dark:text-cyan-400"> </div> <div class="text-xs text-gray-500 dark:text-gray-400 mt-1">Transfers</div></div> <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 text-center"><div class="text-2xl font-bold text-rose-600 dark:text-rose-400"> </div> <div class="text-xs text-gray-500 dark:text-gray-400 mt-1">Disputes</div></div> <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 text-center"><div class="text-2xl font-bold text-gray-700 dark:text-gray-200"> </div> <div class="text-xs text-gray-500 dark:text-gray-400 mt-1">Batches</div></div></div> <div class="mb-6"><div class="flex justify-between text-xs text-gray-500 dark:text-gray-400 mb-1"><span> </span> <span> </span></div> <div class="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden"><div class="h-full bg-indigo-500 dark:bg-indigo-400 rounded-full transition-all duration-500"></div></div></div> <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5 mb-4"><div class="flex items-center gap-3 mb-5"><button class="ds-btn ds-btn-primary flex-1 svelte-1lbndni"><!> </button> <button class="ds-btn ds-btn-secondary svelte-1lbndni"> </button></div> <h3 class="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Configuration</h3> <div class="grid grid-cols-2 gap-3"><div><label for="ds-interval" class="block text-xs text-gray-500 dark:text-gray-400 mb-1">Interval (s)</label> <input id="ds-interval" type="number" min="10" max="3600" class="ds-input svelte-1lbndni"/></div> <div><label for="ds-batch" class="block text-xs text-gray-500 dark:text-gray-400 mb-1">Batch size</label> <input id="ds-batch" type="number" min="1" max="20" class="ds-input svelte-1lbndni"/></div> <div><label for="ds-max" class="block text-xs text-gray-500 dark:text-gray-400 mb-1">Max entities</label> <input id="ds-max" type="number" min="10" max="10000" class="ds-input svelte-1lbndni"/></div> <div><label for="ds-seed" class="block text-xs text-gray-500 dark:text-gray-400 mb-1">Seed (deterministic)</label> <input id="ds-seed" type="text" placeholder="random" class="ds-input svelte-1lbndni"/></div></div> <div class="flex gap-3 mt-4"><button class="ds-btn ds-btn-secondary flex-1 svelte-1lbndni"> </button> <button class="ds-btn ds-btn-danger svelte-1lbndni">Reset Counters</button></div></div> <!>', 1), ra = /* @__PURE__ */ ft('<div class="max-w-2xl mx-auto p-6"><div class="flex items-center justify-between mb-6"><h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100">Demo Simulator</h2> <!></div> <!></div>');
const na = {
  hash: "svelte-1lbndni",
  code: ".ds-btn.svelte-1lbndni {padding:0.5rem 1rem;font-size:0.875rem;font-weight:500;border-radius:0.5rem;cursor:pointer;transition:all 150ms;border:none;}.ds-btn.svelte-1lbndni:disabled {opacity:0.5;cursor:not-allowed;}.ds-btn-primary.svelte-1lbndni {color:#fff !important;background-color:#4f46e5 !important;}.ds-btn-primary.svelte-1lbndni:hover:not(:disabled) {background-color:#4338ca !important;}.ds-btn-secondary.svelte-1lbndni {color:#374151 !important;background-color:#f3f4f6 !important;border:1px solid #d1d5db !important;}.ds-btn-secondary.svelte-1lbndni:hover:not(:disabled) {background-color:#e5e7eb !important;}.dark .ds-btn-secondary.svelte-1lbndni {color:#d1d5db !important;background-color:#374151 !important;border-color:#4b5563 !important;}.dark .ds-btn-secondary.svelte-1lbndni:hover:not(:disabled) {background-color:#4b5563 !important;}.ds-btn-danger.svelte-1lbndni {color:#dc2626 !important;background-color:transparent !important;border:1px solid #fca5a5 !important;}.ds-btn-danger.svelte-1lbndni:hover:not(:disabled) {background-color:#fef2f2 !important;}.dark .ds-btn-danger.svelte-1lbndni {color:#f87171 !important;border-color:#7f1d1d !important;}.dark .ds-btn-danger.svelte-1lbndni:hover:not(:disabled) {background-color:#7f1d1d33 !important;}.ds-input.svelte-1lbndni {width:100%;padding:0.375rem 0.625rem;font-size:0.875rem;border:1px solid #d1d5db;border-radius:0.375rem;background:#fff;color:#111827;transition:border-color 150ms;}.ds-input.svelte-1lbndni:focus {outline:none;border-color:#6366f1;box-shadow:0 0 0 2px rgba(99, 102, 241, 0.2);}.dark .ds-input.svelte-1lbndni {background:#1f2937;border-color:#4b5563;color:#f3f4f6;}"
};
function sa(e, t) {
  en(t, !0), Hi(e, na);
  let r = /* @__PURE__ */ I(null), n = /* @__PURE__ */ I(!0), s = /* @__PURE__ */ I(!1), a = /* @__PURE__ */ I(!1), f = /* @__PURE__ */ I(!1), o = /* @__PURE__ */ I(""), l = /* @__PURE__ */ I(60), u = /* @__PURE__ */ I(3), v = /* @__PURE__ */ I(500), p = /* @__PURE__ */ I(""), h = /* @__PURE__ */ qr(() => _(r) ? _(r).stats.users + _(r).stats.organizations + _(r).stats.proposals + _(r).stats.transfers + _(r).stats.disputes : 0), c = /* @__PURE__ */ qr(() => _(r) ? Math.min(100, Math.round(_(h) / _(r).max_entities * 100)) : 0);
  async function d() {
    try {
      const g = await t.ctx.callSync("get_status", {}), A = typeof g == "string" ? JSON.parse(g) : g;
      A.success ? (m(r, A, !0), m(l, A.interval_seconds, !0), m(u, A.batch_size, !0), m(v, A.max_entities, !0), m(p, String(A.seed || ""), !0)) : m(o, A.error || "Failed to fetch status", !0);
    } catch (g) {
      m(o, g?.message ?? String(g), !0);
    } finally {
      m(n, !1);
    }
  }
  async function T() {
    if (_(r)) {
      m(s, !0), m(o, "");
      try {
        const g = await t.ctx.callSync("toggle", { enabled: !_(r).running }), A = typeof g == "string" ? JSON.parse(g) : g;
        A.success ? await d() : m(o, A.error || "Toggle failed", !0);
      } catch (g) {
        m(o, g?.message ?? String(g), !0);
      } finally {
        m(s, !1);
      }
    }
  }
  async function S() {
    m(a, !0), m(o, "");
    try {
      const g = {
        interval_seconds: _(l),
        batch_size: _(u),
        max_entities: _(v)
      };
      _(p).trim() && (g.seed = parseInt(_(p), 10));
      const A = await t.ctx.callSync("update_config", g), Se = typeof A == "string" ? JSON.parse(A) : A;
      Se.success ? await d() : m(o, Se.error || "Save failed", !0);
    } catch (g) {
      m(o, g?.message ?? String(g), !0);
    } finally {
      m(a, !1);
    }
  }
  async function q() {
    m(f, !0), m(o, "");
    try {
      const g = await t.ctx.callSync("run_once", {}), A = typeof g == "string" ? JSON.parse(g) : g;
      await d(), A.error && m(o, A.error, !0);
    } catch (g) {
      m(o, g?.message ?? String(g), !0);
    } finally {
      m(f, !1);
    }
  }
  async function Ee() {
    m(o, "");
    try {
      const g = await t.ctx.callSync("reset", {}), A = typeof g == "string" ? JSON.parse(g) : g;
      A.success ? await d() : m(o, A.error || "Reset failed", !0);
    } catch (g) {
      m(o, g?.message ?? String(g), !0);
    }
  }
  Ei(() => {
    d();
    const g = setInterval(d, 1e4);
    return () => clearInterval(g);
  });
  var Je = ra(), yr = k(Je), Bn = N(k(yr), 2);
  {
    var Vn = (g) => {
      var A = $i(), Se = k(A), Jt = N(Se);
      Qt(() => {
        Wr(A, 1, `inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-full
					${_(r).running ? "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300" : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"}`), Wr(Se, 1, `w-2 h-2 rounded-full ${_(r).running ? "bg-green-500 animate-pulse" : "bg-gray-400"}`), U(Jt, ` ${_(r).running ? "Running" : "Stopped"}`);
      }), De(g, A);
    };
    ut(Bn, (g) => {
      _(r) && g(Vn);
    });
  }
  var qn = N(yr, 2);
  {
    var Un = (g) => {
      var A = Zi();
      De(g, A);
    }, Yn = (g) => {
      var A = ta(), Se = gi(A);
      {
        var Jt = (D) => {
          var Ke = Qi();
          De(D, Ke);
        };
        ut(Se, (D) => {
          _(r).demo_mode_active || D(Jt);
        });
      }
      var wr = N(Se, 2), xr = k(wr), Hn = k(xr), Gn = k(Hn), kr = N(xr, 2), Jn = k(kr), Kn = k(Jn), Er = N(kr, 2), Wn = k(Er), $n = k(Wn), Sr = N(Er, 2), Zn = k(Sr), Qn = k(Zn), Tr = N(Sr, 2), Xn = k(Tr), es = k(Xn), ts = N(Tr, 2), rs = k(ts), ns = k(rs), Ar = N(wr, 2), Nr = k(Ar), Rr = k(Nr), ss = k(Rr), is = N(Rr, 2), as = k(is), ls = N(Nr, 2), os = k(ls), Mr = N(Ar, 2), Or = k(Mr), St = k(Or), Cr = k(St);
      {
        var fs = (D) => {
          var Ke = Xi();
          De(D, Ke);
        };
        ut(Cr, (D) => {
          _(s) && D(fs);
        });
      }
      var us = N(Cr), Kt = N(St, 2), ds = k(Kt), Dr = N(Or, 4), Pr = k(Dr), cs = N(k(Pr), 2), Fr = N(Pr, 2), vs = N(k(Fr), 2), Ir = N(Fr, 2), hs = N(k(Ir), 2), _s = N(Ir, 2), ps = N(k(_s), 2), gs = N(Dr, 2), Tt = k(gs), bs = k(Tt), ms = N(Tt, 2), ys = N(Mr, 2);
      {
        var ws = (D) => {
          var Ke = ea(), xs = k(Ke), ks = k(xs);
          Qt(() => U(ks, _(o))), De(D, Ke);
        };
        ut(ys, (D) => {
          _(o) && D(ws);
        });
      }
      Qt(() => {
        U(Gn, _(r).stats.users), U(Kn, _(r).stats.organizations), U($n, _(r).stats.proposals), U(Qn, _(r).stats.transfers), U(es, _(r).stats.disputes), U(ns, _(r).batch_number), U(ss, `${_(h) ?? ""} / ${_(r).max_entities ?? ""} entities`), U(as, `${_(c) ?? ""}%`), Ki(os, `width: ${_(c) ?? ""}%`), St.disabled = _(s), U(us, ` ${_(r).running ? "Stop Simulator" : "Start Simulator"}`), Kt.disabled = _(f), U(ds, _(f) ? "Running..." : "Run Once"), Tt.disabled = _(a), U(bs, _(a) ? "Saving..." : "Save Config");
      }), At("click", St, T), At("click", Kt, q), Rt(cs, () => _(l), (D) => m(l, D)), Rt(vs, () => _(u), (D) => m(u, D)), Rt(hs, () => _(v), (D) => m(v, D)), Rt(ps, () => _(p), (D) => m(p, D)), At("click", Tt, S), At("click", ms, Ee), De(g, A);
    };
    ut(qn, (g) => {
      _(n) ? g(Un) : _(r) && g(Yn, 1);
    });
  }
  De(e, Je), tn();
}
Ii(["click"]);
function la(e, t) {
  const r = Vi(sa, { target: e, props: { ctx: t } });
  return {
    unmount() {
      try {
        Ui(r);
      } catch {
      }
    }
  };
}
export {
  la as default
};
