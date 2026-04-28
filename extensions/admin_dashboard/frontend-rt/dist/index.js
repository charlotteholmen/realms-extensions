var rs = Object.defineProperty;
var di = (e) => {
  throw TypeError(e);
};
var ns = (e, t, r) => t in e ? rs(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var We = (e, t, r) => ns(e, typeof t != "symbol" ? t + "" : t, r), un = (e, t, r) => t.has(e) || di("Cannot " + r);
var o = (e, t, r) => (un(e, t, "read from private field"), r ? r.call(e) : t.get(e)), M = (e, t, r) => t.has(e) ? di("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), P = (e, t, r, n) => (un(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r), G = (e, t, r) => (un(e, t, "access private method"), r);
var On = Array.isArray, is = Array.prototype.indexOf, lr = Array.prototype.includes, Qr = Array.from, as = Object.defineProperty, br = Object.getOwnPropertyDescriptor, ss = Object.prototype, os = Array.prototype, ls = Object.getPrototypeOf, ci = Object.isExtensible;
const us = () => {
};
function fs(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function Ti() {
  var e, t, r = new Promise((n, i) => {
    e = n, t = i;
  });
  return { promise: r, resolve: e, reject: t };
}
function vi(e, t) {
  if (Array.isArray(e))
    return e;
  if (!(Symbol.iterator in e))
    return Array.from(e);
  const r = [];
  for (const n of e)
    if (r.push(n), r.length === t) break;
  return r;
}
const _e = 2, ur = 4, en = 8, Ai = 1 << 24, st = 16, Xe = 32, Tt = 64, _n = 128, ze = 512, ae = 1024, pe = 2048, ot = 4096, ge = 8192, $e = 16384, Yt = 32768, hn = 1 << 25, fr = 65536, gn = 1 << 17, ds = 1 << 18, pr = 1 << 19, cs = 1 << 20, _t = 1 << 25, Ht = 65536, Wr = 1 << 21, wr = 1 << 22, Et = 1 << 23, rr = Symbol("$state"), ft = new class extends Error {
  constructor() {
    super(...arguments);
    We(this, "name", "StaleReactionError");
    We(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
function vs() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function ps(e, t, r) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function _s(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function hs() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function gs(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function bs() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function ms() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function xs() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function ys() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function ws() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
const ks = 1, Es = 2, Ss = 16, Ts = 1, As = 2, ue = Symbol(), Ci = "http://www.w3.org/1999/xhtml";
function Cs() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function Ns() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function Os() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function Ni(e) {
  return e === this.v;
}
function Ms(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Oi(e) {
  return !Ms(e, this.v);
}
let Re = null;
function dr(e) {
  Re = e;
}
function Mi(e, t = !1, r) {
  Re = {
    p: Re,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    r: (
      /** @type {Effect} */
      F
    ),
    l: null
  };
}
function Ii(e) {
  var t = (
    /** @type {ComponentContext} */
    Re
  ), r = t.e;
  if (r !== null) {
    t.e = null;
    for (var n of r)
      Xi(n);
  }
  return t.i = !0, Re = t.p, /** @type {T} */
  {};
}
function Ri() {
  return !0;
}
let Rt = [];
function ji() {
  var e = Rt;
  Rt = [], fs(e);
}
function Bt(e) {
  if (Rt.length === 0 && !mr) {
    var t = Rt;
    queueMicrotask(() => {
      t === Rt && ji();
    });
  }
  Rt.push(e);
}
function Is() {
  for (; Rt.length > 0; )
    ji();
}
function Di(e) {
  var t = F;
  if (t === null)
    return L.f |= Et, e;
  if ((t.f & Yt) === 0 && (t.f & ur) === 0)
    throw e;
  wt(e, t);
}
function wt(e, t) {
  for (; t !== null; ) {
    if ((t.f & _n) !== 0) {
      if ((t.f & Yt) === 0)
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
function ee(e, t) {
  e.f = e.f & Rs | t;
}
function Mn(e) {
  (e.f & ze) !== 0 || e.deps === null ? ee(e, ae) : ee(e, ot);
}
function Pi(e) {
  if (e !== null)
    for (const t of e)
      (t.f & _e) === 0 || (t.f & Ht) === 0 || (t.f ^= Ht, Pi(
        /** @type {Derived} */
        t.deps
      ));
}
function Li(e, t, r) {
  (e.f & pe) !== 0 ? t.add(e) : (e.f & ot) !== 0 && r.add(e), Pi(e.deps), ee(e, ae);
}
const Mt = /* @__PURE__ */ new Set();
let C = null, Ke = null, bn = null, mr = !1, fn = !1, tr = null, Jr = null;
var pi = 0;
let js = 1;
var nr, ir, Pt, dt, nt, Er, Oe, Sr, xt, ct, it, ar, sr, Lt, ne, Br, Fi, qr, mn, zr, Ds;
const Kr = class Kr {
  constructor() {
    M(this, ne);
    We(this, "id", js++);
    /**
     * The current values of any signals that are updated in this batch.
     * Tuple format: [value, is_derived] (note: is_derived is false for deriveds, too, if they were overridden via assignment)
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Value, [any, boolean]>}
     */
    We(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any signals (sources and deriveds) that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Value, any>}
     */
    We(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<(batch: Batch) => void>}
     */
    M(this, nr, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    M(this, ir, /* @__PURE__ */ new Set());
    /**
     * Callbacks that should run only when a fork is committed.
     * @type {Set<(batch: Batch) => void>}
     */
    M(this, Pt, /* @__PURE__ */ new Set());
    /**
     * Async effects that are currently in flight
     * @type {Map<Effect, number>}
     */
    M(this, dt, /* @__PURE__ */ new Map());
    /**
     * Async effects that are currently in flight, _not_ inside a pending boundary
     * @type {Map<Effect, number>}
     */
    M(this, nt, /* @__PURE__ */ new Map());
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    M(this, Er, null);
    /**
     * The root effects that need to be flushed
     * @type {Effect[]}
     */
    M(this, Oe, []);
    /**
     * Effects created while this batch was active.
     * @type {Effect[]}
     */
    M(this, Sr, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    M(this, xt, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    M(this, ct, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    M(this, it, /* @__PURE__ */ new Map());
    /**
     * Inverse of #skipped_branches which we need to tell prior batches to unskip them when committing
     * @type {Set<Effect>}
     */
    M(this, ar, /* @__PURE__ */ new Set());
    We(this, "is_fork", !1);
    M(this, sr, !1);
    /** @type {Set<Batch>} */
    M(this, Lt, /* @__PURE__ */ new Set());
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(t) {
    o(this, it).has(t) || o(this, it).set(t, { d: [], m: [] }), o(this, ar).delete(t);
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   * @param {(e: Effect) => void} callback
   */
  unskip_effect(t, r = (n) => this.schedule(n)) {
    var n = o(this, it).get(t);
    if (n) {
      o(this, it).delete(t);
      for (var i of n.d)
        ee(i, pe), r(i);
      for (i of n.m)
        ee(i, ot), r(i);
    }
    o(this, ar).add(t);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Value} source
   * @param {any} value
   * @param {boolean} [is_derived]
   */
  capture(t, r, n = !1) {
    t.v !== ue && !this.previous.has(t) && this.previous.set(t, t.v), (t.f & Et) === 0 && (this.current.set(t, [r, n]), Ke?.set(t, r)), this.is_fork || (t.v = r);
  }
  activate() {
    C = this;
  }
  deactivate() {
    C = null, Ke = null;
  }
  flush() {
    try {
      fn = !0, C = this, G(this, ne, qr).call(this);
    } finally {
      pi = 0, bn = null, tr = null, Jr = null, fn = !1, C = null, Ke = null, qt.clear();
    }
  }
  discard() {
    for (const t of o(this, ir)) t(this);
    o(this, ir).clear(), o(this, Pt).clear(), Mt.delete(this);
  }
  /**
   * @param {Effect} effect
   */
  register_created_effect(t) {
    o(this, Sr).push(t);
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  increment(t, r) {
    let n = o(this, dt).get(r) ?? 0;
    if (o(this, dt).set(r, n + 1), t) {
      let i = o(this, nt).get(r) ?? 0;
      o(this, nt).set(r, i + 1);
    }
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   * @param {boolean} skip - whether to skip updates (because this is triggered by a stale reaction)
   */
  decrement(t, r, n) {
    let i = o(this, dt).get(r) ?? 0;
    if (i === 1 ? o(this, dt).delete(r) : o(this, dt).set(r, i - 1), t) {
      let a = o(this, nt).get(r) ?? 0;
      a === 1 ? o(this, nt).delete(r) : o(this, nt).set(r, a - 1);
    }
    o(this, sr) || n || (P(this, sr, !0), Bt(() => {
      P(this, sr, !1), this.flush();
    }));
  }
  /**
   * @param {Set<Effect>} dirty_effects
   * @param {Set<Effect>} maybe_dirty_effects
   */
  transfer_effects(t, r) {
    for (const n of t)
      o(this, xt).add(n);
    for (const n of r)
      o(this, ct).add(n);
    t.clear(), r.clear();
  }
  /** @param {(batch: Batch) => void} fn */
  oncommit(t) {
    o(this, nr).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    o(this, ir).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  on_fork_commit(t) {
    o(this, Pt).add(t);
  }
  run_fork_commit_callbacks() {
    for (const t of o(this, Pt)) t(this);
    o(this, Pt).clear();
  }
  settled() {
    return (o(this, Er) ?? P(this, Er, Ti())).promise;
  }
  static ensure() {
    if (C === null) {
      const t = C = new Kr();
      fn || (Mt.add(C), mr || Bt(() => {
        C === t && t.flush();
      }));
    }
    return C;
  }
  apply() {
    {
      Ke = null;
      return;
    }
  }
  /**
   *
   * @param {Effect} effect
   */
  schedule(t) {
    if (bn = t, t.b?.is_pending && (t.f & (ur | en | Ai)) !== 0 && (t.f & Yt) === 0) {
      t.b.defer_effect(t);
      return;
    }
    for (var r = t; r.parent !== null; ) {
      r = r.parent;
      var n = r.f;
      if (tr !== null && r === F && (L === null || (L.f & _e) === 0))
        return;
      if ((n & (Tt | Xe)) !== 0) {
        if ((n & ae) === 0)
          return;
        r.f ^= ae;
      }
    }
    o(this, Oe).push(r);
  }
};
nr = new WeakMap(), ir = new WeakMap(), Pt = new WeakMap(), dt = new WeakMap(), nt = new WeakMap(), Er = new WeakMap(), Oe = new WeakMap(), Sr = new WeakMap(), xt = new WeakMap(), ct = new WeakMap(), it = new WeakMap(), ar = new WeakMap(), sr = new WeakMap(), Lt = new WeakMap(), ne = new WeakSet(), Br = function() {
  return this.is_fork || o(this, nt).size > 0;
}, Fi = function() {
  for (const n of o(this, Lt))
    for (const i of o(n, nt).keys()) {
      for (var t = !1, r = i; r.parent !== null; ) {
        if (o(this, it).has(r)) {
          t = !0;
          break;
        }
        r = r.parent;
      }
      if (!t)
        return !0;
    }
  return !1;
}, qr = function() {
  var l;
  if (pi++ > 1e3 && (Mt.delete(this), Ls()), !G(this, ne, Br).call(this)) {
    for (const u of o(this, xt))
      o(this, ct).delete(u), ee(u, pe), this.schedule(u);
    for (const u of o(this, ct))
      ee(u, ot), this.schedule(u);
  }
  const t = o(this, Oe);
  P(this, Oe, []), this.apply();
  var r = tr = [], n = [], i = Jr = [];
  for (const u of t)
    try {
      G(this, ne, mn).call(this, u, r, n);
    } catch (d) {
      throw Bi(u), d;
    }
  if (C = null, i.length > 0) {
    var a = Kr.ensure();
    for (const u of i)
      a.schedule(u);
  }
  if (tr = null, Jr = null, G(this, ne, Br).call(this) || G(this, ne, Fi).call(this)) {
    G(this, ne, zr).call(this, n), G(this, ne, zr).call(this, r);
    for (const [u, d] of o(this, it))
      Ji(u, d);
  } else {
    o(this, dt).size === 0 && Mt.delete(this), o(this, xt).clear(), o(this, ct).clear();
    for (const u of o(this, nr)) u(this);
    o(this, nr).clear(), _i(n), _i(r), o(this, Er)?.resolve();
  }
  var f = (
    /** @type {Batch | null} */
    /** @type {unknown} */
    C
  );
  if (o(this, Oe).length > 0) {
    const u = f ?? (f = this);
    o(u, Oe).push(...o(this, Oe).filter((d) => !o(u, Oe).includes(d)));
  }
  f !== null && (Mt.add(f), G(l = f, ne, qr).call(l));
}, /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
mn = function(t, r, n) {
  t.f ^= ae;
  for (var i = t.first; i !== null; ) {
    var a = i.f, f = (a & (Xe | Tt)) !== 0, l = f && (a & ae) !== 0, u = l || (a & ge) !== 0 || o(this, it).has(i);
    if (!u && i.fn !== null) {
      f ? i.f ^= ae : (a & ur) !== 0 ? r.push(i) : Mr(i) && ((a & st) !== 0 && o(this, ct).add(i), vr(i));
      var d = i.first;
      if (d !== null) {
        i = d;
        continue;
      }
    }
    for (; i !== null; ) {
      var b = i.next;
      if (b !== null) {
        i = b;
        break;
      }
      i = i.parent;
    }
  }
}, /**
 * @param {Effect[]} effects
 */
zr = function(t) {
  for (var r = 0; r < t.length; r += 1)
    Li(t[r], o(this, xt), o(this, ct));
}, Ds = function() {
  var b, y, k;
  for (const g of Mt) {
    var t = g.id < this.id, r = [];
    for (const [v, [j, N]] of this.current) {
      if (g.current.has(v)) {
        var n = (
          /** @type {[any, boolean]} */
          g.current.get(v)[0]
        );
        if (t && j !== n)
          g.current.set(v, [j, N]);
        else
          continue;
      }
      r.push(v);
    }
    var i = [...g.current.keys()].filter((v) => !this.current.has(v));
    if (i.length === 0)
      t && g.discard();
    else if (r.length > 0) {
      if (t)
        for (const v of o(this, ar))
          g.unskip_effect(v, (j) => {
            var N;
            (j.f & (st | wr)) !== 0 ? g.schedule(j) : G(N = g, ne, zr).call(N, [j]);
          });
      g.activate();
      var a = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Map();
      for (var l of r)
        Ui(l, i, a, f);
      f = /* @__PURE__ */ new Map();
      var u = [...g.current.keys()].filter(
        (v) => this.current.has(v) ? (
          /** @type {[any, boolean]} */
          this.current.get(v)[0] !== v
        ) : !0
      );
      for (const v of o(this, Sr))
        (v.f & ($e | ge | gn)) === 0 && In(v, u, f) && ((v.f & (wr | st)) !== 0 ? (ee(v, pe), g.schedule(v)) : o(g, xt).add(v));
      if (o(g, Oe).length > 0) {
        g.apply();
        for (var d of o(g, Oe))
          G(b = g, ne, mn).call(b, d, [], []);
        P(g, Oe, []);
      }
      g.deactivate();
    }
  }
  for (const g of Mt)
    o(g, Lt).has(this) && (o(g, Lt).delete(this), o(g, Lt).size === 0 && !G(y = g, ne, Br).call(y) && (g.activate(), G(k = g, ne, qr).call(k)));
};
let Vt = Kr;
function Ps(e) {
  var t = mr;
  mr = !0;
  try {
    for (var r; ; ) {
      if (Is(), C === null)
        return (
          /** @type {T} */
          r
        );
      C.flush();
    }
  } finally {
    mr = t;
  }
}
function Ls() {
  try {
    bs();
  } catch (e) {
    wt(e, bn);
  }
}
let ut = null;
function _i(e) {
  var t = e.length;
  if (t !== 0) {
    for (var r = 0; r < t; ) {
      var n = e[r++];
      if ((n.f & ($e | ge)) === 0 && Mr(n) && (ut = /* @__PURE__ */ new Set(), vr(n), n.deps === null && n.first === null && n.nodes === null && n.teardown === null && n.ac === null && ta(n), ut?.size > 0)) {
        qt.clear();
        for (const i of ut) {
          if ((i.f & ($e | ge)) !== 0) continue;
          const a = [i];
          let f = i.parent;
          for (; f !== null; )
            ut.has(f) && (ut.delete(f), a.push(f)), f = f.parent;
          for (let l = a.length - 1; l >= 0; l--) {
            const u = a[l];
            (u.f & ($e | ge)) === 0 && vr(u);
          }
        }
        ut.clear();
      }
    }
    ut = null;
  }
}
function Ui(e, t, r, n) {
  if (!r.has(e) && (r.add(e), e.reactions !== null))
    for (const i of e.reactions) {
      const a = i.f;
      (a & _e) !== 0 ? Ui(
        /** @type {Derived} */
        i,
        t,
        r,
        n
      ) : (a & (wr | st)) !== 0 && (a & pe) === 0 && In(i, t, n) && (ee(i, pe), Rn(
        /** @type {Effect} */
        i
      ));
    }
}
function In(e, t, r) {
  const n = r.get(e);
  if (n !== void 0) return n;
  if (e.deps !== null)
    for (const i of e.deps) {
      if (lr.call(t, i))
        return !0;
      if ((i.f & _e) !== 0 && In(
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
function Rn(e) {
  C.schedule(e);
}
function Ji(e, t) {
  if (!((e.f & Xe) !== 0 && (e.f & ae) !== 0)) {
    (e.f & pe) !== 0 ? t.d.push(e) : (e.f & ot) !== 0 && t.m.push(e), ee(e, ae);
    for (var r = e.first; r !== null; )
      Ji(r, t), r = r.next;
  }
}
function Bi(e) {
  ee(e, ae);
  for (var t = e.first; t !== null; )
    Bi(t), t = t.next;
}
function Fs(e) {
  let t = 0, r = Wt(0), n;
  return () => {
    Pn() && (s(r), Fn(() => (t === 0 && (n = zn(() => e(() => xr(r)))), t += 1, () => {
      Bt(() => {
        t -= 1, t === 0 && (n?.(), n = void 0, xr(r));
      });
    })));
  };
}
var Us = fr | pr;
function Js(e, t, r, n) {
  new Bs(e, t, r, n);
}
var Ue, Nn, Je, Ft, xe, Be, he, Me, vt, Ut, yt, or, Tr, Ar, pt, Zr, Q, qs, zs, $s, xn, $r, Hr, yn, wn;
class Bs {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(t, r, n, i) {
    M(this, Q);
    /** @type {Boundary | null} */
    We(this, "parent");
    We(this, "is_pending", !1);
    /**
     * API-level transformError transform function. Transforms errors before they reach the `failed` snippet.
     * Inherited from parent boundary, or defaults to identity.
     * @type {(error: unknown) => unknown}
     */
    We(this, "transform_error");
    /** @type {TemplateNode} */
    M(this, Ue);
    /** @type {TemplateNode | null} */
    M(this, Nn, null);
    /** @type {BoundaryProps} */
    M(this, Je);
    /** @type {((anchor: Node) => void)} */
    M(this, Ft);
    /** @type {Effect} */
    M(this, xe);
    /** @type {Effect | null} */
    M(this, Be, null);
    /** @type {Effect | null} */
    M(this, he, null);
    /** @type {Effect | null} */
    M(this, Me, null);
    /** @type {DocumentFragment | null} */
    M(this, vt, null);
    M(this, Ut, 0);
    M(this, yt, 0);
    M(this, or, !1);
    /** @type {Set<Effect>} */
    M(this, Tr, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    M(this, Ar, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    M(this, pt, null);
    M(this, Zr, Fs(() => (P(this, pt, Wt(o(this, Ut))), () => {
      P(this, pt, null);
    })));
    P(this, Ue, t), P(this, Je, r), P(this, Ft, (a) => {
      var f = (
        /** @type {Effect} */
        F
      );
      f.b = this, f.f |= _n, n(a);
    }), this.parent = /** @type {Effect} */
    F.b, this.transform_error = i ?? this.parent?.transform_error ?? ((a) => a), P(this, xe, Un(() => {
      G(this, Q, xn).call(this);
    }, Us));
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    Li(t, o(this, Tr), o(this, Ar));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!o(this, Je).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  update_pending_count(t, r) {
    G(this, Q, yn).call(this, t, r), P(this, Ut, o(this, Ut) + t), !(!o(this, pt) || o(this, or)) && (P(this, or, !0), Bt(() => {
      P(this, or, !1), o(this, pt) && cr(o(this, pt), o(this, Ut));
    }));
  }
  get_effect_pending() {
    return o(this, Zr).call(this), s(
      /** @type {Source<number>} */
      o(this, pt)
    );
  }
  /** @param {unknown} error */
  error(t) {
    if (!o(this, Je).onerror && !o(this, Je).failed)
      throw t;
    C?.is_fork ? (o(this, Be) && C.skip_effect(o(this, Be)), o(this, he) && C.skip_effect(o(this, he)), o(this, Me) && C.skip_effect(o(this, Me)), C.on_fork_commit(() => {
      G(this, Q, wn).call(this, t);
    })) : G(this, Q, wn).call(this, t);
  }
}
Ue = new WeakMap(), Nn = new WeakMap(), Je = new WeakMap(), Ft = new WeakMap(), xe = new WeakMap(), Be = new WeakMap(), he = new WeakMap(), Me = new WeakMap(), vt = new WeakMap(), Ut = new WeakMap(), yt = new WeakMap(), or = new WeakMap(), Tr = new WeakMap(), Ar = new WeakMap(), pt = new WeakMap(), Zr = new WeakMap(), Q = new WeakSet(), qs = function() {
  try {
    P(this, Be, qe(() => o(this, Ft).call(this, o(this, Ue))));
  } catch (t) {
    this.error(t);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
zs = function(t) {
  const r = o(this, Je).failed;
  r && P(this, Me, qe(() => {
    r(
      o(this, Ue),
      () => t,
      () => () => {
      }
    );
  }));
}, $s = function() {
  const t = o(this, Je).pending;
  t && (this.is_pending = !0, P(this, he, qe(() => t(o(this, Ue)))), Bt(() => {
    var r = P(this, vt, document.createDocumentFragment()), n = St();
    r.append(n), P(this, Be, G(this, Q, Hr).call(this, () => qe(() => o(this, Ft).call(this, n)))), o(this, yt) === 0 && (o(this, Ue).before(r), P(this, vt, null), zt(
      /** @type {Effect} */
      o(this, he),
      () => {
        P(this, he, null);
      }
    ), G(this, Q, $r).call(
      this,
      /** @type {Batch} */
      C
    ));
  }));
}, xn = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), P(this, yt, 0), P(this, Ut, 0), P(this, Be, qe(() => {
      o(this, Ft).call(this, o(this, Ue));
    })), o(this, yt) > 0) {
      var t = P(this, vt, document.createDocumentFragment());
      qn(o(this, Be), t);
      const r = (
        /** @type {(anchor: Node) => void} */
        o(this, Je).pending
      );
      P(this, he, qe(() => r(o(this, Ue))));
    } else
      G(this, Q, $r).call(
        this,
        /** @type {Batch} */
        C
      );
  } catch (r) {
    this.error(r);
  }
}, /**
 * @param {Batch} batch
 */
$r = function(t) {
  this.is_pending = !1, t.transfer_effects(o(this, Tr), o(this, Ar));
}, /**
 * @template T
 * @param {() => T} fn
 */
Hr = function(t) {
  var r = F, n = L, i = Re;
  lt(o(this, xe)), Ve(o(this, xe)), dr(o(this, xe).ctx);
  try {
    return Vt.ensure(), t();
  } catch (a) {
    return Di(a), null;
  } finally {
    lt(r), Ve(n), dr(i);
  }
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 * @param {Batch} batch
 */
yn = function(t, r) {
  var n;
  if (!this.has_pending_snippet()) {
    this.parent && G(n = this.parent, Q, yn).call(n, t, r);
    return;
  }
  P(this, yt, o(this, yt) + t), o(this, yt) === 0 && (G(this, Q, $r).call(this, r), o(this, he) && zt(o(this, he), () => {
    P(this, he, null);
  }), o(this, vt) && (o(this, Ue).before(o(this, vt)), P(this, vt, null)));
}, /**
 * @param {unknown} error
 */
wn = function(t) {
  o(this, Be) && (we(o(this, Be)), P(this, Be, null)), o(this, he) && (we(o(this, he)), P(this, he, null)), o(this, Me) && (we(o(this, Me)), P(this, Me, null));
  var r = o(this, Je).onerror;
  let n = o(this, Je).failed;
  var i = !1, a = !1;
  const f = () => {
    if (i) {
      Os();
      return;
    }
    i = !0, a && ws(), o(this, Me) !== null && zt(o(this, Me), () => {
      P(this, Me, null);
    }), G(this, Q, Hr).call(this, () => {
      G(this, Q, xn).call(this);
    });
  }, l = (u) => {
    try {
      a = !0, r?.(u, f), a = !1;
    } catch (d) {
      wt(d, o(this, xe) && o(this, xe).parent);
    }
    n && P(this, Me, G(this, Q, Hr).call(this, () => {
      try {
        return qe(() => {
          var d = (
            /** @type {Effect} */
            F
          );
          d.b = this, d.f |= _n, n(
            o(this, Ue),
            () => u,
            () => f
          );
        });
      } catch (d) {
        return wt(
          d,
          /** @type {Effect} */
          o(this, xe).parent
        ), null;
      }
    }));
  };
  Bt(() => {
    var u;
    try {
      u = this.transform_error(t);
    } catch (d) {
      wt(d, o(this, xe) && o(this, xe).parent);
      return;
    }
    u !== null && typeof u == "object" && typeof /** @type {any} */
    u.then == "function" ? u.then(
      l,
      /** @param {unknown} e */
      (d) => wt(d, o(this, xe) && o(this, xe).parent)
    ) : l(u);
  });
};
function Hs(e, t, r, n) {
  const i = jn;
  var a = e.filter((k) => !k.settled);
  if (r.length === 0 && a.length === 0) {
    n(t.map(i));
    return;
  }
  var f = (
    /** @type {Effect} */
    F
  ), l = Vs(), u = a.length === 1 ? a[0].promise : a.length > 1 ? Promise.all(a.map((k) => k.promise)) : null;
  function d(k) {
    l();
    try {
      n(k);
    } catch (g) {
      (f.f & $e) === 0 && wt(g, f);
    }
    Yr();
  }
  if (r.length === 0) {
    u.then(() => d(t.map(i)));
    return;
  }
  var b = qi();
  function y() {
    Promise.all(r.map((k) => /* @__PURE__ */ Ws(k))).then((k) => d([...t.map(i), ...k])).catch((k) => wt(k, f)).finally(() => b());
  }
  u ? u.then(() => {
    l(), y(), Yr();
  }) : y();
}
function Vs() {
  var e = (
    /** @type {Effect} */
    F
  ), t = L, r = Re, n = (
    /** @type {Batch} */
    C
  );
  return function(a = !0) {
    lt(e), Ve(t), dr(r), a && (e.f & $e) === 0 && (n?.activate(), n?.apply());
  };
}
function Yr(e = !0) {
  lt(null), Ve(null), dr(null), e && C?.deactivate();
}
function qi() {
  var e = (
    /** @type {Effect} */
    F
  ), t = (
    /** @type {Boundary} */
    e.b
  ), r = (
    /** @type {Batch} */
    C
  ), n = t.is_rendered();
  return t.update_pending_count(1, r), r.increment(n, e), (i = !1) => {
    t.update_pending_count(-1, r), r.decrement(n, e, i);
  };
}
// @__NO_SIDE_EFFECTS__
function jn(e) {
  var t = _e | pe;
  return F !== null && (F.f |= pr), {
    ctx: Re,
    deps: null,
    effects: null,
    equals: Ni,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      ue
    ),
    wv: 0,
    parent: F,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function Ws(e, t, r) {
  let n = (
    /** @type {Effect | null} */
    F
  );
  n === null && vs();
  var i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), a = Wt(
    /** @type {V} */
    ue
  ), f = !L, l = /* @__PURE__ */ new Map();
  return uo(() => {
    var u = (
      /** @type {Effect} */
      F
    ), d = Ti();
    i = d.promise;
    try {
      Promise.resolve(e()).then(d.resolve, d.reject).finally(Yr);
    } catch (g) {
      d.reject(g), Yr();
    }
    var b = (
      /** @type {Batch} */
      C
    );
    if (f) {
      if ((u.f & Yt) !== 0)
        var y = qi();
      if (
        /** @type {Boundary} */
        n.b.is_rendered()
      )
        l.get(b)?.reject(ft), l.delete(b);
      else {
        for (const g of l.values())
          g.reject(ft);
        l.clear();
      }
      l.set(b, d);
    }
    const k = (g, v = void 0) => {
      if (y) {
        var j = v === ft;
        y(j);
      }
      if (!(v === ft || (u.f & $e) !== 0)) {
        if (b.activate(), v)
          a.f |= Et, cr(a, v);
        else {
          (a.f & Et) !== 0 && (a.f ^= Et), cr(a, g);
          for (const [N, $] of l) {
            if (l.delete(N), N === b) break;
            $.reject(ft);
          }
        }
        b.deactivate();
      }
    };
    d.promise.then(k, (g) => k(null, g || "unknown"));
  }), Ln(() => {
    for (const u of l.values())
      u.reject(ft);
  }), new Promise((u) => {
    function d(b) {
      function y() {
        b === i ? u(a) : d(i);
      }
      b.then(y, y);
    }
    d(i);
  });
}
// @__NO_SIDE_EFFECTS__
function dn(e) {
  const t = /* @__PURE__ */ jn(e);
  return ia(t), t;
}
// @__NO_SIDE_EFFECTS__
function Ys(e) {
  const t = /* @__PURE__ */ jn(e);
  return t.equals = Oi, t;
}
function Gs(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var r = 0; r < t.length; r += 1)
      we(
        /** @type {Effect} */
        t[r]
      );
  }
}
function Dn(e) {
  var t, r = F, n = e.parent;
  if (!At && n !== null && (n.f & ($e | ge)) !== 0)
    return Cs(), e.v;
  lt(n);
  try {
    e.f &= ~Ht, Gs(e), t = la(e);
  } finally {
    lt(r);
  }
  return t;
}
function zi(e) {
  var t = Dn(e);
  if (!e.equals(t) && (e.wv = sa(), (!C?.is_fork || e.deps === null) && (C !== null ? C.capture(e, t, !0) : e.v = t, e.deps === null))) {
    ee(e, ae);
    return;
  }
  At || (Ke !== null ? (Pn() || C?.is_fork) && Ke.set(e, t) : Mn(e));
}
function Ks(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      (t.teardown || t.ac) && (t.teardown?.(), t.ac?.abort(ft), t.teardown = us, t.ac = null, kr(t, 0), Jn(t));
}
function $i(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      t.teardown && vr(t);
}
let kn = /* @__PURE__ */ new Set();
const qt = /* @__PURE__ */ new Map();
let Hi = !1;
function Wt(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Ni,
    rv: 0,
    wv: 0
  };
  return r;
}
// @__NO_SIDE_EFFECTS__
function R(e, t) {
  const r = Wt(e);
  return ia(r), r;
}
// @__NO_SIDE_EFFECTS__
function Zs(e, t = !1, r = !0) {
  const n = Wt(e);
  return t || (n.equals = Oi), n;
}
function m(e, t, r = !1) {
  L !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Ze || (L.f & gn) !== 0) && Ri() && (L.f & (_e | st | wr | gn)) !== 0 && (He === null || !lr.call(He, e)) && ys();
  let n = r ? kt(t) : t;
  return cr(e, n, Jr);
}
function cr(e, t, r = null) {
  if (!e.equals(t)) {
    qt.set(e, At ? t : e.v);
    var n = Vt.ensure();
    if (n.capture(e, t), (e.f & _e) !== 0) {
      const i = (
        /** @type {Derived} */
        e
      );
      (e.f & pe) !== 0 && Dn(i), Ke === null && Mn(i);
    }
    e.wv = sa(), Vi(e, pe, r), F !== null && (F.f & ae) !== 0 && (F.f & (Xe | Tt)) === 0 && (Fe === null ? vo([e]) : Fe.push(e)), !n.is_fork && kn.size > 0 && !Hi && Xs();
  }
  return t;
}
function Xs() {
  Hi = !1;
  for (const e of kn)
    (e.f & ae) !== 0 && ee(e, ot), Mr(e) && vr(e);
  kn.clear();
}
function Qs(e, t = 1) {
  var r = s(e);
  return m(e, t === 1 ? ++r : --r);
}
function xr(e) {
  m(e, e.v + 1);
}
function Vi(e, t, r) {
  var n = e.reactions;
  if (n !== null)
    for (var i = n.length, a = 0; a < i; a++) {
      var f = n[a], l = f.f, u = (l & pe) === 0;
      if (u && ee(f, t), (l & _e) !== 0) {
        var d = (
          /** @type {Derived} */
          f
        );
        Ke?.delete(d), (l & Ht) === 0 && (l & ze && (F === null || (F.f & Wr) === 0) && (f.f |= Ht), Vi(d, ot, r));
      } else if (u) {
        var b = (
          /** @type {Effect} */
          f
        );
        (l & st) !== 0 && ut !== null && ut.add(b), r !== null ? r.push(b) : Rn(b);
      }
    }
}
function kt(e) {
  if (typeof e != "object" || e === null || rr in e)
    return e;
  const t = ls(e);
  if (t !== ss && t !== os)
    return e;
  var r = /* @__PURE__ */ new Map(), n = On(e), i = /* @__PURE__ */ R(0), a = $t, f = (l) => {
    if ($t === a)
      return l();
    var u = L, d = $t;
    Ve(null), xi(a);
    var b = l();
    return Ve(u), xi(d), b;
  };
  return n && r.set("length", /* @__PURE__ */ R(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(l, u, d) {
        (!("value" in d) || d.configurable === !1 || d.enumerable === !1 || d.writable === !1) && ms();
        var b = r.get(u);
        return b === void 0 ? f(() => {
          var y = /* @__PURE__ */ R(d.value);
          return r.set(u, y), y;
        }) : m(b, d.value, !0), !0;
      },
      deleteProperty(l, u) {
        var d = r.get(u);
        if (d === void 0) {
          if (u in l) {
            const b = f(() => /* @__PURE__ */ R(ue));
            r.set(u, b), xr(i);
          }
        } else
          m(d, ue), xr(i);
        return !0;
      },
      get(l, u, d) {
        if (u === rr)
          return e;
        var b = r.get(u), y = u in l;
        if (b === void 0 && (!y || br(l, u)?.writable) && (b = f(() => {
          var g = kt(y ? l[u] : ue), v = /* @__PURE__ */ R(g);
          return v;
        }), r.set(u, b)), b !== void 0) {
          var k = s(b);
          return k === ue ? void 0 : k;
        }
        return Reflect.get(l, u, d);
      },
      getOwnPropertyDescriptor(l, u) {
        var d = Reflect.getOwnPropertyDescriptor(l, u);
        if (d && "value" in d) {
          var b = r.get(u);
          b && (d.value = s(b));
        } else if (d === void 0) {
          var y = r.get(u), k = y?.v;
          if (y !== void 0 && k !== ue)
            return {
              enumerable: !0,
              configurable: !0,
              value: k,
              writable: !0
            };
        }
        return d;
      },
      has(l, u) {
        if (u === rr)
          return !0;
        var d = r.get(u), b = d !== void 0 && d.v !== ue || Reflect.has(l, u);
        if (d !== void 0 || F !== null && (!b || br(l, u)?.writable)) {
          d === void 0 && (d = f(() => {
            var k = b ? kt(l[u]) : ue, g = /* @__PURE__ */ R(k);
            return g;
          }), r.set(u, d));
          var y = s(d);
          if (y === ue)
            return !1;
        }
        return b;
      },
      set(l, u, d, b) {
        var y = r.get(u), k = u in l;
        if (n && u === "length")
          for (var g = d; g < /** @type {Source<number>} */
          y.v; g += 1) {
            var v = r.get(g + "");
            v !== void 0 ? m(v, ue) : g in l && (v = f(() => /* @__PURE__ */ R(ue)), r.set(g + "", v));
          }
        if (y === void 0)
          (!k || br(l, u)?.writable) && (y = f(() => /* @__PURE__ */ R(void 0)), m(y, kt(d)), r.set(u, y));
        else {
          k = y.v !== ue;
          var j = f(() => kt(d));
          m(y, j);
        }
        var N = Reflect.getOwnPropertyDescriptor(l, u);
        if (N?.set && N.set.call(b, d), !k) {
          if (n && typeof u == "string") {
            var $ = (
              /** @type {Source<number>} */
              r.get("length")
            ), B = Number(u);
            Number.isInteger(B) && B >= $.v && m($, B + 1);
          }
          xr(i);
        }
        return !0;
      },
      ownKeys(l) {
        s(i);
        var u = Reflect.ownKeys(l).filter((y) => {
          var k = r.get(y);
          return k === void 0 || k.v !== ue;
        });
        for (var [d, b] of r)
          b.v !== ue && !(d in l) && u.push(d);
        return u;
      },
      setPrototypeOf() {
        xs();
      }
    }
  );
}
function hi(e) {
  try {
    if (e !== null && typeof e == "object" && rr in e)
      return e[rr];
  } catch {
  }
  return e;
}
function eo(e, t) {
  return Object.is(hi(e), hi(t));
}
var gi, Wi, Yi, Gi;
function to() {
  if (gi === void 0) {
    gi = window, Wi = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, r = Text.prototype;
    Yi = br(t, "firstChild").get, Gi = br(t, "nextSibling").get, ci(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), ci(r) && (r.__t = void 0);
  }
}
function St(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function Gr(e) {
  return (
    /** @type {TemplateNode | null} */
    Yi.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function Or(e) {
  return (
    /** @type {TemplateNode | null} */
    Gi.call(e)
  );
}
function _(e, t) {
  return /* @__PURE__ */ Gr(e);
}
function Ye(e, t = !1) {
  {
    var r = /* @__PURE__ */ Gr(e);
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ Or(r) : r;
  }
}
function w(e, t = 1, r = !1) {
  let n = e;
  for (; t--; )
    n = /** @type {TemplateNode} */
    /* @__PURE__ */ Or(n);
  return n;
}
function ro(e) {
  e.textContent = "";
}
function Ki() {
  return !1;
}
function no(e, t, r) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElementNS(Ci, e, void 0)
  );
}
let bi = !1;
function io() {
  bi || (bi = !0, document.addEventListener(
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
function tn(e) {
  var t = L, r = F;
  Ve(null), lt(null);
  try {
    return e();
  } finally {
    Ve(t), lt(r);
  }
}
function Zi(e, t, r, n = r) {
  e.addEventListener(t, () => tn(r));
  const i = e.__on_r;
  i ? e.__on_r = () => {
    i(), n(!0);
  } : e.__on_r = () => n(!0), io();
}
function ao(e) {
  F === null && (L === null && gs(), hs()), At && _s();
}
function so(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function ht(e, t) {
  var r = F;
  r !== null && (r.f & ge) !== 0 && (e |= ge);
  var n = {
    ctx: Re,
    deps: null,
    nodes: null,
    f: e | pe | ze,
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
  C?.register_created_effect(n);
  var i = n;
  if ((e & ur) !== 0)
    tr !== null ? tr.push(n) : Vt.ensure().schedule(n);
  else if (t !== null) {
    try {
      vr(n);
    } catch (f) {
      throw we(n), f;
    }
    i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && // either `null`, or a singular child
    (i.f & pr) === 0 && (i = i.first, (e & st) !== 0 && (e & fr) !== 0 && i !== null && (i.f |= fr));
  }
  if (i !== null && (i.parent = r, r !== null && so(i, r), L !== null && (L.f & _e) !== 0 && (e & Tt) === 0)) {
    var a = (
      /** @type {Derived} */
      L
    );
    (a.effects ?? (a.effects = [])).push(i);
  }
  return n;
}
function Pn() {
  return L !== null && !Ze;
}
function Ln(e) {
  const t = ht(en, null);
  return ee(t, ae), t.teardown = e, t;
}
function oo(e) {
  ao();
  var t = (
    /** @type {Effect} */
    F.f
  ), r = !L && (t & Xe) !== 0 && (t & Yt) === 0;
  if (r) {
    var n = (
      /** @type {ComponentContext} */
      Re
    );
    (n.e ?? (n.e = [])).push(e);
  } else
    return Xi(e);
}
function Xi(e) {
  return ht(ur | cs, e);
}
function lo(e) {
  Vt.ensure();
  const t = ht(Tt | pr, e);
  return (r = {}) => new Promise((n) => {
    r.outro ? zt(t, () => {
      we(t), n(void 0);
    }) : (we(t), n(void 0));
  });
}
function Qi(e) {
  return ht(ur, e);
}
function uo(e) {
  return ht(wr | pr, e);
}
function Fn(e, t = 0) {
  return ht(en | t, e);
}
function U(e, t = [], r = [], n = []) {
  Hs(n, t, r, (i) => {
    ht(en, () => e(...i.map(s)));
  });
}
function Un(e, t = 0) {
  var r = ht(st | t, e);
  return r;
}
function qe(e) {
  return ht(Xe | pr, e);
}
function ea(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = At, n = L;
    mi(!0), Ve(null);
    try {
      t.call(null);
    } finally {
      mi(r), Ve(n);
    }
  }
}
function Jn(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    const i = r.ac;
    i !== null && tn(() => {
      i.abort(ft);
    });
    var n = r.next;
    (r.f & Tt) !== 0 ? r.parent = null : we(r, t), r = n;
  }
}
function fo(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & Xe) === 0 && we(t), t = r;
  }
}
function we(e, t = !0) {
  var r = !1;
  (t || (e.f & ds) !== 0) && e.nodes !== null && e.nodes.end !== null && (co(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), r = !0), ee(e, hn), Jn(e, t && !r), kr(e, 0);
  var n = e.nodes && e.nodes.t;
  if (n !== null)
    for (const a of n)
      a.stop();
  ea(e), e.f ^= hn, e.f |= $e;
  var i = e.parent;
  i !== null && i.first !== null && ta(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function co(e, t) {
  for (; e !== null; ) {
    var r = e === t ? null : /* @__PURE__ */ Or(e);
    e.remove(), e = r;
  }
}
function ta(e) {
  var t = e.parent, r = e.prev, n = e.next;
  r !== null && (r.next = n), n !== null && (n.prev = r), t !== null && (t.first === e && (t.first = n), t.last === e && (t.last = r));
}
function zt(e, t, r = !0) {
  var n = [];
  ra(e, n, !0);
  var i = () => {
    r && we(e), t && t();
  }, a = n.length;
  if (a > 0) {
    var f = () => --a || i();
    for (var l of n)
      l.out(f);
  } else
    i();
}
function ra(e, t, r) {
  if ((e.f & ge) === 0) {
    e.f ^= ge;
    var n = e.nodes && e.nodes.t;
    if (n !== null)
      for (const l of n)
        (l.is_global || r) && t.push(l);
    for (var i = e.first; i !== null; ) {
      var a = i.next;
      if ((i.f & Tt) === 0) {
        var f = (i.f & fr) !== 0 || // If this is a branch effect without a block effect parent,
        // it means the parent block effect was pruned. In that case,
        // transparency information was transferred to the branch effect.
        (i.f & Xe) !== 0 && (e.f & st) !== 0;
        ra(i, t, f ? r : !1);
      }
      i = a;
    }
  }
}
function Bn(e) {
  na(e, !0);
}
function na(e, t) {
  if ((e.f & ge) !== 0) {
    e.f ^= ge, (e.f & ae) === 0 && (ee(e, pe), Vt.ensure().schedule(e));
    for (var r = e.first; r !== null; ) {
      var n = r.next, i = (r.f & fr) !== 0 || (r.f & Xe) !== 0;
      na(r, i ? t : !1), r = n;
    }
    var a = e.nodes && e.nodes.t;
    if (a !== null)
      for (const f of a)
        (f.is_global || t) && f.in();
  }
}
function qn(e, t) {
  if (e.nodes)
    for (var r = e.nodes.start, n = e.nodes.end; r !== null; ) {
      var i = r === n ? null : /* @__PURE__ */ Or(r);
      t.append(r), r = i;
    }
}
let Vr = !1, At = !1;
function mi(e) {
  At = e;
}
let L = null, Ze = !1;
function Ve(e) {
  L = e;
}
let F = null;
function lt(e) {
  F = e;
}
let He = null;
function ia(e) {
  L !== null && (He === null ? He = [e] : He.push(e));
}
let ye = null, Ne = 0, Fe = null;
function vo(e) {
  Fe = e;
}
let aa = 1, jt = 0, $t = jt;
function xi(e) {
  $t = e;
}
function sa() {
  return ++aa;
}
function Mr(e) {
  var t = e.f;
  if ((t & pe) !== 0)
    return !0;
  if (t & _e && (e.f &= ~Ht), (t & ot) !== 0) {
    for (var r = (
      /** @type {Value[]} */
      e.deps
    ), n = r.length, i = 0; i < n; i++) {
      var a = r[i];
      if (Mr(
        /** @type {Derived} */
        a
      ) && zi(
        /** @type {Derived} */
        a
      ), a.wv > e.wv)
        return !0;
    }
    (t & ze) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    Ke === null && ee(e, ae);
  }
  return !1;
}
function oa(e, t, r = !0) {
  var n = e.reactions;
  if (n !== null && !(He !== null && lr.call(He, e)))
    for (var i = 0; i < n.length; i++) {
      var a = n[i];
      (a.f & _e) !== 0 ? oa(
        /** @type {Derived} */
        a,
        t,
        !1
      ) : t === a && (r ? ee(a, pe) : (a.f & ae) !== 0 && ee(a, ot), Rn(
        /** @type {Effect} */
        a
      ));
    }
}
function la(e) {
  var j;
  var t = ye, r = Ne, n = Fe, i = L, a = He, f = Re, l = Ze, u = $t, d = e.f;
  ye = /** @type {null | Value[]} */
  null, Ne = 0, Fe = null, L = (d & (Xe | Tt)) === 0 ? e : null, He = null, dr(e.ctx), Ze = !1, $t = ++jt, e.ac !== null && (tn(() => {
    e.ac.abort(ft);
  }), e.ac = null);
  try {
    e.f |= Wr;
    var b = (
      /** @type {Function} */
      e.fn
    ), y = b();
    e.f |= Yt;
    var k = e.deps, g = C?.is_fork;
    if (ye !== null) {
      var v;
      if (g || kr(e, Ne), k !== null && Ne > 0)
        for (k.length = Ne + ye.length, v = 0; v < ye.length; v++)
          k[Ne + v] = ye[v];
      else
        e.deps = k = ye;
      if (Pn() && (e.f & ze) !== 0)
        for (v = Ne; v < k.length; v++)
          ((j = k[v]).reactions ?? (j.reactions = [])).push(e);
    } else !g && k !== null && Ne < k.length && (kr(e, Ne), k.length = Ne);
    if (Ri() && Fe !== null && !Ze && k !== null && (e.f & (_e | ot | pe)) === 0)
      for (v = 0; v < /** @type {Source[]} */
      Fe.length; v++)
        oa(
          Fe[v],
          /** @type {Effect} */
          e
        );
    if (i !== null && i !== e) {
      if (jt++, i.deps !== null)
        for (let N = 0; N < r; N += 1)
          i.deps[N].rv = jt;
      if (t !== null)
        for (const N of t)
          N.rv = jt;
      Fe !== null && (n === null ? n = Fe : n.push(.../** @type {Source[]} */
      Fe));
    }
    return (e.f & Et) !== 0 && (e.f ^= Et), y;
  } catch (N) {
    return Di(N);
  } finally {
    e.f ^= Wr, ye = t, Ne = r, Fe = n, L = i, He = a, dr(f), Ze = l, $t = u;
  }
}
function po(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var n = is.call(r, e);
    if (n !== -1) {
      var i = r.length - 1;
      i === 0 ? r = t.reactions = null : (r[n] = r[i], r.pop());
    }
  }
  if (r === null && (t.f & _e) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (ye === null || !lr.call(ye, t))) {
    var a = (
      /** @type {Derived} */
      t
    );
    (a.f & ze) !== 0 && (a.f ^= ze, a.f &= ~Ht), a.v !== ue && Mn(a), Ks(a), kr(a, 0);
  }
}
function kr(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var n = t; n < r.length; n++)
      po(e, r[n]);
}
function vr(e) {
  var t = e.f;
  if ((t & $e) === 0) {
    ee(e, ae);
    var r = F, n = Vr;
    F = e, Vr = !0;
    try {
      (t & (st | Ai)) !== 0 ? fo(e) : Jn(e), ea(e);
      var i = la(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = aa;
      var a;
    } finally {
      Vr = n, F = r;
    }
  }
}
async function _o() {
  await Promise.resolve(), Ps();
}
function s(e) {
  var t = e.f, r = (t & _e) !== 0;
  if (L !== null && !Ze) {
    var n = F !== null && (F.f & $e) !== 0;
    if (!n && (He === null || !lr.call(He, e))) {
      var i = L.deps;
      if ((L.f & Wr) !== 0)
        e.rv < jt && (e.rv = jt, ye === null && i !== null && i[Ne] === e ? Ne++ : ye === null ? ye = [e] : ye.push(e));
      else {
        (L.deps ?? (L.deps = [])).push(e);
        var a = e.reactions;
        a === null ? e.reactions = [L] : lr.call(a, L) || a.push(L);
      }
    }
  }
  if (At && qt.has(e))
    return qt.get(e);
  if (r) {
    var f = (
      /** @type {Derived} */
      e
    );
    if (At) {
      var l = f.v;
      return ((f.f & ae) === 0 && f.reactions !== null || fa(f)) && (l = Dn(f)), qt.set(f, l), l;
    }
    var u = (f.f & ze) === 0 && !Ze && L !== null && (Vr || (L.f & ze) !== 0), d = (f.f & Yt) === 0;
    Mr(f) && (u && (f.f |= ze), zi(f)), u && !d && ($i(f), ua(f));
  }
  if (Ke?.has(e))
    return Ke.get(e);
  if ((e.f & Et) !== 0)
    throw e.v;
  return e.v;
}
function ua(e) {
  if (e.f |= ze, e.deps !== null)
    for (const t of e.deps)
      (t.reactions ?? (t.reactions = [])).push(e), (t.f & _e) !== 0 && (t.f & ze) === 0 && ($i(
        /** @type {Derived} */
        t
      ), ua(
        /** @type {Derived} */
        t
      ));
}
function fa(e) {
  if (e.v === ue) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (qt.has(t) || (t.f & _e) !== 0 && fa(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function zn(e) {
  var t = Ze;
  try {
    return Ze = !0, e();
  } finally {
    Ze = t;
  }
}
const ho = ["touchstart", "touchmove"];
function go(e) {
  return ho.includes(e);
}
const Dt = Symbol("events"), da = /* @__PURE__ */ new Set(), En = /* @__PURE__ */ new Set();
function bo(e, t, r, n = {}) {
  function i(a) {
    if (n.capture || Sn.call(t, a), !a.cancelBubble)
      return tn(() => r?.call(this, a));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? Bt(() => {
    t.addEventListener(e, i, n);
  }) : t.addEventListener(e, i, n), i;
}
function cn(e, t, r, n, i) {
  var a = { capture: n, passive: i }, f = bo(e, t, r, a);
  (t === document.body || // @ts-ignore
  t === window || // @ts-ignore
  t === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  t instanceof HTMLMediaElement) && Ln(() => {
    t.removeEventListener(e, f, a);
  });
}
function W(e, t, r) {
  (t[Dt] ?? (t[Dt] = {}))[e] = r;
}
function mo(e) {
  for (var t = 0; t < e.length; t++)
    da.add(e[t]);
  for (var r of En)
    r(e);
}
let yi = null;
function Sn(e) {
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), n = e.type, i = e.composedPath?.() || [], a = (
    /** @type {null | Element} */
    i[0] || e.target
  );
  yi = e;
  var f = 0, l = yi === e && e[Dt];
  if (l) {
    var u = i.indexOf(l);
    if (u !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e[Dt] = t;
      return;
    }
    var d = i.indexOf(t);
    if (d === -1)
      return;
    u <= d && (f = u);
  }
  if (a = /** @type {Element} */
  i[f] || e.target, a !== t) {
    as(e, "currentTarget", {
      configurable: !0,
      get() {
        return a || r;
      }
    });
    var b = L, y = F;
    Ve(null), lt(null);
    try {
      for (var k, g = []; a !== null; ) {
        var v = a.assignedSlot || a.parentNode || /** @type {any} */
        a.host || null;
        try {
          var j = a[Dt]?.[n];
          j != null && (!/** @type {any} */
          a.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === a) && j.call(a, e);
        } catch (N) {
          k ? g.push(N) : k = N;
        }
        if (e.cancelBubble || v === t || v === null)
          break;
        a = v;
      }
      if (k) {
        for (let N of g)
          queueMicrotask(() => {
            throw N;
          });
        throw k;
      }
    } finally {
      e[Dt] = t, delete e.currentTarget, Ve(b), lt(y);
    }
  }
}
const xo = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (e) => e
  })
);
function yo(e) {
  return (
    /** @type {string} */
    xo?.createHTML(e) ?? e
  );
}
function wo(e) {
  var t = no("template");
  return t.innerHTML = yo(e.replaceAll("<!>", "<!---->")), t.content;
}
function Tn(e, t) {
  var r = (
    /** @type {Effect} */
    F
  );
  r.nodes === null && (r.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function S(e, t) {
  var r = (t & Ts) !== 0, n = (t & As) !== 0, i, a = !e.startsWith("<!>");
  return () => {
    i === void 0 && (i = wo(a ? e : "<!>" + e), r || (i = /** @type {TemplateNode} */
    /* @__PURE__ */ Gr(i)));
    var f = (
      /** @type {TemplateNode} */
      n || Wi ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (r) {
      var l = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Gr(f)
      ), u = (
        /** @type {TemplateNode} */
        f.lastChild
      );
      Tn(l, u);
    } else
      Tn(f, f);
    return f;
  };
}
function wi(e = "") {
  {
    var t = St(e + "");
    return Tn(t, t), t;
  }
}
function E(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function D(e, t) {
  var r = t == null ? "" : typeof t == "object" ? `${t}` : t;
  r !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = r, e.nodeValue = `${r}`);
}
function ko(e, t) {
  return Eo(e, t);
}
const Ur = /* @__PURE__ */ new Map();
function Eo(e, { target: t, anchor: r, props: n = {}, events: i, context: a, intro: f = !0, transformError: l }) {
  to();
  var u = void 0, d = lo(() => {
    var b = r ?? t.appendChild(St());
    Js(
      /** @type {TemplateNode} */
      b,
      {
        pending: () => {
        }
      },
      (g) => {
        Mi({});
        var v = (
          /** @type {ComponentContext} */
          Re
        );
        a && (v.c = a), i && (n.$$events = i), u = e(g, n) || {}, Ii();
      },
      l
    );
    var y = /* @__PURE__ */ new Set(), k = (g) => {
      for (var v = 0; v < g.length; v++) {
        var j = g[v];
        if (!y.has(j)) {
          y.add(j);
          var N = go(j);
          for (const Z of [t, document]) {
            var $ = Ur.get(Z);
            $ === void 0 && ($ = /* @__PURE__ */ new Map(), Ur.set(Z, $));
            var B = $.get(j);
            B === void 0 ? (Z.addEventListener(j, Sn, { passive: N }), $.set(j, 1)) : $.set(j, B + 1);
          }
        }
      }
    };
    return k(Qr(da)), En.add(k), () => {
      for (var g of y)
        for (const N of [t, document]) {
          var v = (
            /** @type {Map<string, number>} */
            Ur.get(N)
          ), j = (
            /** @type {number} */
            v.get(g)
          );
          --j == 0 ? (N.removeEventListener(g, Sn), v.delete(g), v.size === 0 && Ur.delete(N)) : v.set(g, j);
        }
      En.delete(k), b !== r && b.parentNode?.removeChild(b);
    };
  });
  return An.set(u, d), u;
}
let An = /* @__PURE__ */ new WeakMap();
function So(e, t) {
  const r = An.get(e);
  return r ? (An.delete(e), r(t)) : Promise.resolve();
}
var Ge, at, Ie, Jt, Cr, Nr, Xr;
class To {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, r = !0) {
    /** @type {TemplateNode} */
    We(this, "anchor");
    /** @type {Map<Batch, Key>} */
    M(this, Ge, /* @__PURE__ */ new Map());
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
    M(this, at, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    M(this, Ie, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    M(this, Jt, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    M(this, Cr, !0);
    /**
     * @param {Batch} batch
     */
    M(this, Nr, (t) => {
      if (o(this, Ge).has(t)) {
        var r = (
          /** @type {Key} */
          o(this, Ge).get(t)
        ), n = o(this, at).get(r);
        if (n)
          Bn(n), o(this, Jt).delete(r);
        else {
          var i = o(this, Ie).get(r);
          i && (o(this, at).set(r, i.effect), o(this, Ie).delete(r), i.fragment.lastChild.remove(), this.anchor.before(i.fragment), n = i.effect);
        }
        for (const [a, f] of o(this, Ge)) {
          if (o(this, Ge).delete(a), a === t)
            break;
          const l = o(this, Ie).get(f);
          l && (we(l.effect), o(this, Ie).delete(f));
        }
        for (const [a, f] of o(this, at)) {
          if (a === r || o(this, Jt).has(a)) continue;
          const l = () => {
            if (Array.from(o(this, Ge).values()).includes(a)) {
              var d = document.createDocumentFragment();
              qn(f, d), d.append(St()), o(this, Ie).set(a, { effect: f, fragment: d });
            } else
              we(f);
            o(this, Jt).delete(a), o(this, at).delete(a);
          };
          o(this, Cr) || !n ? (o(this, Jt).add(a), zt(f, l, !1)) : l();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    M(this, Xr, (t) => {
      o(this, Ge).delete(t);
      const r = Array.from(o(this, Ge).values());
      for (const [n, i] of o(this, Ie))
        r.includes(n) || (we(i.effect), o(this, Ie).delete(n));
    });
    this.anchor = t, P(this, Cr, r);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, r) {
    var n = (
      /** @type {Batch} */
      C
    ), i = Ki();
    if (r && !o(this, at).has(t) && !o(this, Ie).has(t))
      if (i) {
        var a = document.createDocumentFragment(), f = St();
        a.append(f), o(this, Ie).set(t, {
          effect: qe(() => r(f)),
          fragment: a
        });
      } else
        o(this, at).set(
          t,
          qe(() => r(this.anchor))
        );
    if (o(this, Ge).set(n, t), i) {
      for (const [l, u] of o(this, at))
        l === t ? n.unskip_effect(u) : n.skip_effect(u);
      for (const [l, u] of o(this, Ie))
        l === t ? n.unskip_effect(u.effect) : n.skip_effect(u.effect);
      n.oncommit(o(this, Nr)), n.ondiscard(o(this, Xr));
    } else
      o(this, Nr).call(this, n);
  }
}
Ge = new WeakMap(), at = new WeakMap(), Ie = new WeakMap(), Jt = new WeakMap(), Cr = new WeakMap(), Nr = new WeakMap(), Xr = new WeakMap();
function V(e, t, r = !1) {
  var n = new To(e), i = r ? fr : 0;
  function a(f, l) {
    n.ensure(f, l);
  }
  Un(() => {
    var f = !1;
    t((l, u = 0) => {
      f = !0, a(u, l);
    }), f || a(-1, null);
  }, i);
}
function er(e, t) {
  return t;
}
function Ao(e, t, r) {
  for (var n = [], i = t.length, a, f = t.length, l = 0; l < i; l++) {
    let y = t[l];
    zt(
      y,
      () => {
        if (a) {
          if (a.pending.delete(y), a.done.add(y), a.pending.size === 0) {
            var k = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            Cn(e, Qr(a.done)), k.delete(a), k.size === 0 && (e.outrogroups = null);
          }
        } else
          f -= 1;
      },
      !1
    );
  }
  if (f === 0) {
    var u = n.length === 0 && r !== null;
    if (u) {
      var d = (
        /** @type {Element} */
        r
      ), b = (
        /** @type {Element} */
        d.parentNode
      );
      ro(b), b.append(d), e.items.clear();
    }
    Cn(e, t, !u);
  } else
    a = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ?? (e.outrogroups = /* @__PURE__ */ new Set())).add(a);
}
function Cn(e, t, r = !0) {
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
  for (var i = 0; i < t.length; i++) {
    var a = t[i];
    if (n?.has(a)) {
      a.f |= _t;
      const f = document.createDocumentFragment();
      qn(a, f);
    } else
      we(t[i], r);
  }
}
var ki;
function It(e, t, r, n, i, a = null) {
  var f = e, l = /* @__PURE__ */ new Map();
  {
    var u = (
      /** @type {Element} */
      e
    );
    f = u.appendChild(St());
  }
  var d = null, b = /* @__PURE__ */ Ys(() => {
    var B = r();
    return On(B) ? B : B == null ? [] : Qr(B);
  }), y, k = /* @__PURE__ */ new Map(), g = !0;
  function v(B) {
    ($.effect.f & $e) === 0 && ($.pending.delete(B), $.fallback = d, Co($, y, f, t, n), d !== null && (y.length === 0 ? (d.f & _t) === 0 ? Bn(d) : (d.f ^= _t, gr(d, null, f)) : zt(d, () => {
      d = null;
    })));
  }
  function j(B) {
    $.pending.delete(B);
  }
  var N = Un(() => {
    y = /** @type {V[]} */
    s(b);
    for (var B = y.length, Z = /* @__PURE__ */ new Set(), se = (
      /** @type {Batch} */
      C
    ), te = Ki(), be = 0; be < B; be += 1) {
      var ke = y[be], ce = n(ke, be), Y = g ? null : l.get(ce);
      Y ? (Y.v && cr(Y.v, ke), Y.i && cr(Y.i, be), te && se.unskip_effect(Y.e)) : (Y = No(
        l,
        g ? f : ki ?? (ki = St()),
        ke,
        ce,
        be,
        i,
        t,
        r
      ), g || (Y.e.f |= _t), l.set(ce, Y)), Z.add(ce);
    }
    if (B === 0 && a && !d && (g ? d = qe(() => a(f)) : (d = qe(() => a(ki ?? (ki = St()))), d.f |= _t)), B > Z.size && ps(), !g)
      if (k.set(se, Z), te) {
        for (const [Ct, oe] of l)
          Z.has(Ct) || se.skip_effect(oe.e);
        se.oncommit(v), se.ondiscard(j);
      } else
        v(se);
    s(b);
  }), $ = { effect: N, items: l, pending: k, outrogroups: null, fallback: d };
  g = !1;
}
function hr(e) {
  for (; e !== null && (e.f & Xe) === 0; )
    e = e.next;
  return e;
}
function Co(e, t, r, n, i) {
  var a = t.length, f = e.items, l = hr(e.effect.first), u, d = null, b = [], y = [], k, g, v, j;
  for (j = 0; j < a; j += 1) {
    if (k = t[j], g = i(k, j), v = /** @type {EachItem} */
    f.get(g).e, e.outrogroups !== null)
      for (const ce of e.outrogroups)
        ce.pending.delete(v), ce.done.delete(v);
    if ((v.f & ge) !== 0 && Bn(v), (v.f & _t) !== 0)
      if (v.f ^= _t, v === l)
        gr(v, null, r);
      else {
        var N = d ? d.next : l;
        v === e.effect.last && (e.effect.last = v.prev), v.prev && (v.prev.next = v.next), v.next && (v.next.prev = v.prev), gt(e, d, v), gt(e, v, N), gr(v, N, r), d = v, b = [], y = [], l = hr(d.next);
        continue;
      }
    if (v !== l) {
      if (u !== void 0 && u.has(v)) {
        if (b.length < y.length) {
          var $ = y[0], B;
          d = $.prev;
          var Z = b[0], se = b[b.length - 1];
          for (B = 0; B < b.length; B += 1)
            gr(b[B], $, r);
          for (B = 0; B < y.length; B += 1)
            u.delete(y[B]);
          gt(e, Z.prev, se.next), gt(e, d, Z), gt(e, se, $), l = $, d = se, j -= 1, b = [], y = [];
        } else
          u.delete(v), gr(v, l, r), gt(e, v.prev, v.next), gt(e, v, d === null ? e.effect.first : d.next), gt(e, d, v), d = v;
        continue;
      }
      for (b = [], y = []; l !== null && l !== v; )
        (u ?? (u = /* @__PURE__ */ new Set())).add(l), y.push(l), l = hr(l.next);
      if (l === null)
        continue;
    }
    (v.f & _t) === 0 && b.push(v), d = v, l = hr(v.next);
  }
  if (e.outrogroups !== null) {
    for (const ce of e.outrogroups)
      ce.pending.size === 0 && (Cn(e, Qr(ce.done)), e.outrogroups?.delete(ce));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (l !== null || u !== void 0) {
    var te = [];
    if (u !== void 0)
      for (v of u)
        (v.f & ge) === 0 && te.push(v);
    for (; l !== null; )
      (l.f & ge) === 0 && l !== e.fallback && te.push(l), l = hr(l.next);
    var be = te.length;
    if (be > 0) {
      var ke = a === 0 ? r : null;
      Ao(e, te, ke);
    }
  }
}
function No(e, t, r, n, i, a, f, l) {
  var u = (f & ks) !== 0 ? (f & Ss) === 0 ? /* @__PURE__ */ Zs(r, !1, !1) : Wt(r) : null, d = (f & Es) !== 0 ? Wt(i) : null;
  return {
    v: u,
    i: d,
    e: qe(() => (a(t, u ?? r, d ?? i, l), () => {
      e.delete(n);
    }))
  };
}
function gr(e, t, r) {
  if (e.nodes)
    for (var n = e.nodes.start, i = e.nodes.end, a = t && (t.f & _t) === 0 ? (
      /** @type {EffectNodes} */
      t.nodes.start
    ) : r; n !== null; ) {
      var f = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Or(n)
      );
      if (a.before(n), n === i)
        return;
      n = f;
    }
}
function gt(e, t, r) {
  t === null ? e.effect.first = r : t.next = r, r === null ? e.effect.last = t : r.prev = t;
}
function ca(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var i = e.length;
    for (t = 0; t < i; t++) e[t] && (r = ca(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function Oo() {
  for (var e, t, r = 0, n = "", i = arguments.length; r < i; r++) (e = arguments[r]) && (t = ca(e)) && (n && (n += " "), n += t);
  return n;
}
function bt(e) {
  return typeof e == "object" ? Oo(e) : e ?? "";
}
function Mo(e, t, r) {
  var n = e == null ? "" : "" + e;
  return n === "" ? null : n;
}
function mt(e, t, r, n, i, a) {
  var f = e.__className;
  if (f !== r || f === void 0) {
    var l = Mo(r);
    l == null ? e.removeAttribute("class") : e.className = l, e.__className = r;
  }
  return a;
}
function va(e, t, r = !1) {
  if (e.multiple) {
    if (t == null)
      return;
    if (!On(t))
      return Ns();
    for (var n of e.options)
      n.selected = t.includes(yr(n));
    return;
  }
  for (n of e.options) {
    var i = yr(n);
    if (eo(i, t)) {
      n.selected = !0;
      return;
    }
  }
  (!r || t !== void 0) && (e.selectedIndex = -1);
}
function Io(e) {
  var t = new MutationObserver(() => {
    va(e, e.__value);
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
  }), Ln(() => {
    t.disconnect();
  });
}
function Ro(e, t, r = t) {
  var n = /* @__PURE__ */ new WeakSet(), i = !0;
  Zi(e, "change", (a) => {
    var f = a ? "[selected]" : ":checked", l;
    if (e.multiple)
      l = [].map.call(e.querySelectorAll(f), yr);
    else {
      var u = e.querySelector(f) ?? // will fall back to first non-disabled option if no option is selected
      e.querySelector("option:not([disabled])");
      l = u && yr(u);
    }
    r(l), e.__value = l, C !== null && n.add(C);
  }), Qi(() => {
    var a = t();
    if (e === document.activeElement) {
      var f = (
        /** @type {Batch} */
        C
      );
      if (n.has(f))
        return;
    }
    if (va(e, a, i), i && a === void 0) {
      var l = e.querySelector(":checked");
      l !== null && (a = yr(l), r(a));
    }
    e.__value = a, i = !1;
  }), Io(e);
}
function yr(e) {
  return "__value" in e ? e.__value : e.value;
}
const jo = Symbol("is custom element"), Do = Symbol("is html");
function Po(e, t, r, n) {
  var i = Lo(e);
  i[t] !== (i[t] = r) && e.setAttribute(t, r);
}
function Lo(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [jo]: e.nodeName.includes("-"),
      [Do]: e.namespaceURI === Ci
    })
  );
}
function Fo(e, t, r = t) {
  var n = /* @__PURE__ */ new WeakSet();
  Zi(e, "input", async (i) => {
    var a = i ? e.defaultValue : e.value;
    if (a = vn(e) ? pn(a) : a, r(a), C !== null && n.add(C), await _o(), a !== (a = t())) {
      var f = e.selectionStart, l = e.selectionEnd, u = e.value.length;
      if (e.value = a ?? "", l !== null) {
        var d = e.value.length;
        f === l && l === u && d > u ? (e.selectionStart = d, e.selectionEnd = d) : (e.selectionStart = f, e.selectionEnd = Math.min(l, d));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  zn(t) == null && e.value && (r(vn(e) ? pn(e.value) : e.value), C !== null && n.add(C)), Fn(() => {
    var i = t();
    if (e === document.activeElement) {
      var a = (
        /** @type {Batch} */
        C
      );
      if (n.has(a))
        return;
    }
    vn(e) && i === pn(e.value) || e.type === "date" && !i && !e.value || i !== e.value && (e.value = i ?? "");
  });
}
function vn(e) {
  var t = e.type;
  return t === "number" || t === "range";
}
function pn(e) {
  return e === "" ? null : +e;
}
function Ei(e, t) {
  return e === t || e?.[rr] === t;
}
function Uo(e = {}, t, r, n) {
  var i = (
    /** @type {ComponentContext} */
    Re.r
  ), a = (
    /** @type {Effect} */
    F
  );
  return Qi(() => {
    var f, l;
    return Fn(() => {
      f = l, l = [], zn(() => {
        e !== r(...l) && (t(e, ...l), f && Ei(r(...f), e) && t(null, ...f));
      });
    }), () => {
      let u = a;
      for (; u !== i && u.parent !== null && u.parent.f & hn; )
        u = u.parent;
      const d = () => {
        l && Ei(r(...l), e) && t(null, ...l);
      }, b = u.teardown;
      u.teardown = () => {
        d(), b?.();
      };
    };
  }), e;
}
const Jo = "5";
var Si;
typeof window < "u" && ((Si = window.__svelte ?? (window.__svelte = {})).v ?? (Si.v = /* @__PURE__ */ new Set())).add(Jo);
var Bo = /* @__PURE__ */ S("<div> </div>"), qo = /* @__PURE__ */ S('<div class="fixed top-4 right-4 z-50 flex flex-col gap-2"></div>'), zo = /* @__PURE__ */ S('<br/><span class="text-gray-500"> </span>', 1), $o = /* @__PURE__ */ S('<div class="fixed inset-0 bg-black/50 z-40 flex items-center justify-center"><div class="bg-white rounded-xl shadow-xl p-6 max-w-md mx-4"><h3 class="text-lg font-bold text-gray-900 mb-2">Confirm Delete</h3> <p class="text-gray-600 mb-4">Are you sure you want to delete <strong> </strong>? <!></p> <p class="text-red-600 text-sm mb-4">This action cannot be undone.</p> <div class="flex justify-end gap-3"><button class="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 font-medium">Cancel</button> <button class="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 font-medium">Delete</button></div></div></div>'), Ho = /* @__PURE__ */ S('<div class="mb-4 bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg text-sm"> <button class="ml-2 text-red-600 hover:text-red-800 font-bold">&times;</button></div>'), Vo = /* @__PURE__ */ S('<div class="text-xs text-gray-400">Loading…</div>'), Wo = /* @__PURE__ */ S('<div class="text-xs text-red-500"> </div>'), Yo = /* @__PURE__ */ S('<span class="mx-1">·</span> <span class="text-yellow-600 font-medium"> </span>', 1), Go = /* @__PURE__ */ S('<div class="text-xs text-gray-500"> <!></div>'), Ko = /* @__PURE__ */ S('<div class="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4"><div class="bg-white shadow-sm rounded-lg p-4 border border-gray-200"><div class="text-xs text-gray-500 uppercase tracking-wide">Entity Types</div> <div class="text-2xl font-bold text-gray-900 mt-1"> </div></div> <div class="bg-white shadow-sm rounded-lg p-4 border border-gray-200"><div class="text-xs text-gray-500 uppercase tracking-wide">Extensions</div> <div class="text-2xl font-bold text-gray-900 mt-1"> </div></div> <div class="bg-white shadow-sm rounded-lg p-4 border border-gray-200"><div class="text-xs text-gray-500 uppercase tracking-wide">Codexes</div> <div class="text-2xl font-bold text-gray-900 mt-1"> </div></div> <div class="bg-white shadow-sm rounded-lg p-4 border border-gray-200"><div class="text-xs text-gray-500 uppercase tracking-wide">Updates</div> <div> </div></div></div>'), Zo = /* @__PURE__ */ S('<div class="flex items-center gap-2 text-gray-400 text-sm"><div class="animate-spin h-4 w-4 border-2 border-blue-500 border-t-transparent rounded-full"></div> Loading types…</div>'), Xo = /* @__PURE__ */ S("<option> </option>"), Qo = /* @__PURE__ */ S('<select id="entity-type-select" class="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"></select>'), el = /* @__PURE__ */ S("<button> </button>"), tl = /* @__PURE__ */ S('<div class="text-center py-10 p-6"><div class="inline-block animate-spin h-8 w-8 border-4 border-blue-500 border-t-transparent rounded-full"></div> <p class="mt-2 text-gray-600">Loading data…</p></div>'), rl = /* @__PURE__ */ S('<div class="text-center py-10 p-6"><p class="text-gray-500 text-lg">No items loaded. Select an entity type and click "Load Data".</p></div>'), nl = /* @__PURE__ */ S('<span class="text-gray-700 truncate"> </span>'), il = /* @__PURE__ */ S('<div class="min-w-0"><span class="font-semibold text-gray-700"> </span> <span class="text-gray-600 ml-2 break-all"> </span></div>'), al = /* @__PURE__ */ S('<div class="mt-4 bg-gray-50 rounded-lg p-4 border border-gray-200"><div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm"></div> <div class="mt-3 pt-3 border-t border-gray-200"><details><summary class="text-xs text-gray-500 cursor-pointer hover:text-gray-700">Raw JSON</summary> <pre class="mt-2 p-3 bg-white rounded border border-gray-200 text-xs font-mono overflow-auto max-h-64 whitespace-pre-wrap break-all"> </pre></details></div></div>'), sl = /* @__PURE__ */ S('<div class="p-4 hover:bg-gray-50 transition"><div class="flex items-center justify-between"><div class="flex-1 min-w-0"><div class="flex items-center gap-3"><button class="text-blue-600 hover:text-blue-800 font-medium whitespace-nowrap"> </button> <!></div></div> <div class="flex items-center gap-1 ml-2 shrink-0"><button class="p-1.5 hover:bg-gray-100 text-gray-600 hover:text-gray-900 rounded transition-colors" title="Copy JSON"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path></svg></button> <button class="p-1.5 hover:bg-red-50 text-gray-400 hover:text-red-600 rounded transition-colors disabled:opacity-50" title="Delete entity"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg></button></div></div> <!></div>'), ol = /* @__PURE__ */ S('<div class="border-t border-gray-200 p-4 flex items-center justify-between"><div class="flex items-center gap-2"><button class="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed text-sm">First</button> <button class="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed text-sm">Prev</button></div> <span class="text-sm text-gray-600"> </span> <div class="flex items-center gap-2"><button class="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed text-sm">Next</button> <button class="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed text-sm">Last</button></div></div>'), ll = /* @__PURE__ */ S('<div class="divide-y divide-gray-200"></div> <!>', 1), ul = /* @__PURE__ */ S('<div class="mb-4 flex items-center gap-4"><button class="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed font-medium transition-colors"> </button> <div class="ml-auto text-gray-600 text-sm"><!></div></div> <div class="bg-white shadow-sm rounded-lg"><!></div>', 1), fl = /* @__PURE__ */ S('<div class="flex items-center gap-3 text-gray-600"><div class="animate-spin h-5 w-5 border-2 border-blue-500 border-t-transparent rounded-full"></div> Exporting…</div>'), dl = /* @__PURE__ */ S(", <strong> </strong> codexes", 1), cl = /* @__PURE__ */ S('<div class="border border-gray-200 rounded-lg overflow-hidden"><div class="bg-gray-50 px-4 py-3 flex items-center justify-between border-b border-gray-200 flex-wrap gap-2"><div class="text-sm text-gray-700"><strong> </strong> entities <!></div> <div class="flex gap-2"><button class="px-4 py-1.5 bg-green-600 text-white text-sm rounded-lg hover:bg-green-700 font-medium transition-colors">Download JSON</button> <button class="px-4 py-1.5 border border-gray-300 text-sm rounded-lg hover:bg-gray-50 font-medium transition-colors">Copy to Clipboard</button></div></div> <div class="max-h-96 overflow-auto"><pre class="p-4 text-xs text-gray-800 font-mono whitespace-pre-wrap break-all"> </pre></div></div>'), vl = /* @__PURE__ */ S('<div class="bg-white shadow-sm rounded-lg p-6"><h2 class="text-lg font-semibold text-gray-900 mb-4">Export Entities</h2> <p class="text-gray-600 text-sm mb-6">Export entities as a JSON file. You can export a single entity type or all types at once.</p> <div class="flex gap-3 mb-6"><button class="px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed font-medium transition-colors"> </button> <button class="px-5 py-2.5 bg-gray-700 text-white rounded-lg hover:bg-gray-800 disabled:bg-gray-400 disabled:cursor-not-allowed font-medium transition-colors"> </button></div> <!> <!></div>'), pl = /* @__PURE__ */ S('<p class="text-blue-600 font-medium"> </p> <p class="text-sm text-gray-500 mt-1">Click or drop to replace</p>', 1), _l = /* @__PURE__ */ S('<svg class="mx-auto h-10 w-10 text-gray-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg> <p class="text-gray-600 font-medium">Drop a JSON file here or click to browse</p> <p class="text-sm text-gray-400 mt-1">Accepts .json files</p>', 1), hl = /* @__PURE__ */ S('<div role="button" tabindex="0"><input type="file" accept=".json" class="hidden"/> <!></div>'), gl = /* @__PURE__ */ S('<button class="absolute top-2 right-2 px-2 py-1 text-xs text-gray-500 hover:text-gray-700 bg-white border border-gray-200 rounded">Clear</button>'), bl = /* @__PURE__ */ S('<div class="relative"><textarea class="w-full h-64 p-4 border border-gray-300 rounded-lg font-mono text-sm resize-y focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" spellcheck="false"></textarea> <!></div>'), ml = /* @__PURE__ */ S('<span class="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"> </span>'), xl = /* @__PURE__ */ S('<div class="bg-green-50 px-4 py-3 border-b border-green-200"><p class="text-sm font-medium text-green-800"> <!></p></div> <div class="px-4 py-3"><div class="flex flex-wrap gap-2"></div> <div class="mt-4 flex gap-3"><button class="px-5 py-2.5 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed font-medium transition-colors"> </button> <button class="px-5 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 font-medium disabled:opacity-50 transition-colors">Cancel</button></div></div>', 1), yl = /* @__PURE__ */ S('<div class="bg-red-50 px-4 py-3"><p class="text-sm font-medium text-red-800">Invalid JSON</p> <p class="text-sm text-red-600 mt-1"> </p></div>'), wl = /* @__PURE__ */ S("<div><!></div>"), kl = /* @__PURE__ */ S("<li> </li>"), El = /* @__PURE__ */ S('<ul class="mt-1 list-disc list-inside text-red-600"></ul>'), Sl = /* @__PURE__ */ S('<p class="text-red-600"> </p> <!>', 1), Tl = /* @__PURE__ */ S('<div class="mt-2 text-sm text-green-700"><p> </p> <p> </p> <!></div>'), Al = /* @__PURE__ */ S('<p class="text-sm font-medium text-green-800">Import complete</p> <!>', 1), Cl = /* @__PURE__ */ S('<p class="text-sm font-medium text-red-800">Import failed</p> <p class="text-sm text-red-600 mt-1"> </p>', 1), Nl = /* @__PURE__ */ S('<div><div class="px-4 py-3"><!></div></div>'), Ol = /* @__PURE__ */ S('<div class="bg-white shadow-sm rounded-lg p-6"><h2 class="text-lg font-semibold text-gray-900 mb-4">Import Entities</h2> <p class="text-gray-600 text-sm mb-6">Import entities from a JSON file or paste JSON directly. Existing entities with the same type and ID will be updated (upsert).</p> <div class="flex gap-2 mb-4"><button>Upload File</button> <button>JSON Editor</button></div> <!> <!> <!></div>'), Ml = /* @__PURE__ */ S('<!> <!> <div class="w-full px-4 max-w-none"><div class="flex justify-between items-center mb-6"><div><h1 class="text-3xl font-bold text-gray-900">Admin Dashboard</h1> <p class="text-gray-600 mt-1">Manage realm entities</p></div> <button class="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50" title="Refresh"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg></button></div> <!> <button class="block w-full mb-4 bg-white shadow-sm rounded-lg p-4 border border-gray-200 hover:border-blue-400 hover:shadow transition-all text-left cursor-pointer"><div class="flex items-center justify-between gap-4"><div class="flex items-center gap-3"><div class="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center text-xl">📦</div> <div><div class="text-sm font-medium text-gray-700">Packages</div> <!></div></div> <span class="text-blue-600 text-sm font-medium">Manage →</span></div></button> <!> <div class="mb-4 bg-white shadow-sm rounded-lg p-4"><div class="flex items-center gap-4 flex-wrap"><label for="entity-type-select" class="font-medium text-gray-700">Entity Type:</label> <!></div></div> <div class="mb-4 border-b border-gray-200"><nav class="flex gap-1" aria-label="Tabs"></nav></div> <!></div>', 1);
function Il(e, t) {
  Mi(t, !0);
  const r = t.ctx.theme?.cn ?? ((...c) => c.filter(Boolean).join(" ")), n = {
    Balance: "💵",
    Call: "📞",
    Codex: "📚",
    Contract: "📝",
    Dispute: "⚖️",
    Human: "🧑",
    Identity: "🆔",
    Instrument: "💰",
    Invoice: "🧾",
    Land: "🏞️",
    License: "📃",
    Mandate: "📜",
    Member: "👥",
    Notification: "🔔",
    Organization: "🏢",
    PaymentAccount: "💳",
    Permission: "🔐",
    Proposal: "🗳️",
    Realm: "🏛️",
    Registry: "📋",
    Service: "⚙️",
    Task: "📋",
    TaskExecution: "▶️",
    TaskSchedule: "⏰",
    TaskStep: "📌",
    Token: "🪙",
    Trade: "🤝",
    Transfer: "🔄",
    Treasury: "🏦",
    User: "👤",
    UserProfile: "📋",
    Vote: "✅",
    Zone: "🗺️"
  };
  let i = /* @__PURE__ */ R(kt([])), a = /* @__PURE__ */ R(""), f = /* @__PURE__ */ R("browse"), l = /* @__PURE__ */ R(!0), u = /* @__PURE__ */ R(""), d = /* @__PURE__ */ R(kt([])), b = /* @__PURE__ */ R(0), y = /* @__PURE__ */ R(kt([])), k = /* @__PURE__ */ R(!1), g = /* @__PURE__ */ R(null), v = /* @__PURE__ */ R(0), j = 10, N = /* @__PURE__ */ R(0), $ = /* @__PURE__ */ R(0), B = /* @__PURE__ */ R(null), Z = /* @__PURE__ */ R(null), se = /* @__PURE__ */ R(!1), te = /* @__PURE__ */ R(null), be = /* @__PURE__ */ R("file"), ke = /* @__PURE__ */ R(""), ce = /* @__PURE__ */ R(""), Y = /* @__PURE__ */ R(null), Ct = /* @__PURE__ */ R(!1), oe = /* @__PURE__ */ R(null), Gt = /* @__PURE__ */ R(void 0), Ir = /* @__PURE__ */ R(!1), $n = /* @__PURE__ */ R(null), Kt = /* @__PURE__ */ R(0), Rr = /* @__PURE__ */ R(!0), jr = /* @__PURE__ */ R(""), rn = /* @__PURE__ */ R(0), nn = /* @__PURE__ */ R(0);
  function je(c, p = "success") {
    const h = Qs(b);
    m(d, [...s(d), { id: h, text: c, type: p }], !0), setTimeout(
      () => {
        m(d, s(d).filter((x) => x.id !== h), !0);
      },
      4e3
    );
  }
  function Hn(c) {
    return n[c] || "📊";
  }
  function pa(c) {
    return c.replace(/([A-Z])/g, " $1").trim();
  }
  async function Dr(c, p = {}) {
    return await t.ctx.callSync(c, p);
  }
  function _a(c) {
    if (c?.success && c?.data?.objectsListPaginated) {
      const p = c.data.objectsListPaginated;
      return { objects: (p.objects || []).map((x) => {
        try {
          return typeof x == "string" ? JSON.parse(x) : x;
        } catch {
          return x;
        }
      }), pagination: p.pagination };
    }
    return c?.data && Array.isArray(c.data) ? { objects: c.data, pagination: null } : { objects: [], pagination: null };
  }
  async function Vn() {
    m(l, !0), m(u, "");
    try {
      const c = await Dr("get_entity_types"), p = c?.data ?? (Array.isArray(c) ? c : []);
      m(
        i,
        p.map((h) => ({
          value: h,
          label: `${Hn(h)} ${pa(h)}`,
          className: h
        })),
        !0
      ), s(i).length > 0 && !s(a) && m(a, s(i)[0].value, !0);
    } catch (c) {
      m(u, c?.message || String(c), !0), m(i, [{ value: "User", label: "👤 User", className: "User" }], !0), s(a) || m(a, "User");
    } finally {
      m(l, !1);
    }
  }
  async function Wn() {
    m(Rr, !0), m(jr, "");
    try {
      const [c, p, h] = await Promise.all([
        t.ctx.backend.list_runtime_extensions().catch(() => "{}"),
        t.ctx.backend.list_codex_packages().catch(() => "{}"),
        t.ctx.backend.status().catch(() => null)
      ]), x = typeof c == "string" ? JSON.parse(c) : c, A = typeof p == "string" ? JSON.parse(p) : p, I = x?.success ? x.runtime_extensions ?? [] : [], K = A?.success ? A.codex_packages ?? [] : [], le = x?.success ? x.all_manifests ?? {} : {}, ve = A?.success ? A.manifests ?? {} : {};
      m(rn, Object.keys(le).length || I.length, !0), m(
        nn,
        Array.isArray(K) ? K.length : Object.keys(ve).length,
        !0
      ), m($n, s(rn) + s(nn));
      const De = h?.success && h?.data?.status?.registries || [];
      let Ee = 0;
      for (const ie of De)
        try {
          const J = ha(ie.canister_id);
          if (!J) continue;
          const [T, z] = await Promise.all([
            fetch(`${J}/api/extensions`, { headers: { Accept: "application/json" } }).then((H) => H.ok ? H.json() : []).catch(() => []),
            fetch(`${J}/api/codices`, { headers: { Accept: "application/json" } }).then((H) => H.ok ? H.json() : []).catch(() => [])
          ]);
          for (const H of T) {
            if (!I.includes(H.ext_id)) continue;
            const fe = le?.[H.ext_id]?.version;
            fe && H.latest && Yn(H.latest, fe) && Ee++;
          }
          for (const H of z) {
            if (!K.includes(H.codex_id)) continue;
            const fe = ve?.[H.codex_id]?.version;
            fe && H.latest && Yn(H.latest, fe) && Ee++;
          }
        } catch {
        }
      m(Kt, Ee, !0);
    } catch (c) {
      m(jr, c?.message ?? String(c), !0);
    } finally {
      m(Rr, !1);
    }
  }
  function ha(c) {
    if (typeof window > "u") return null;
    const p = window.location.host;
    if (p.includes("localhost") || p.includes("127.0.0.1")) {
      const x = p.split(":")[1] ?? "4943";
      return `http://${c}.localhost:${x}`;
    }
    return `https://${c}.icp0.io`;
  }
  function Yn(c, p) {
    const h = (c || "").split("-", 1)[0].split(".").map((I) => parseInt(I, 10) || 0), x = (p || "").split("-", 1)[0].split(".").map((I) => parseInt(I, 10) || 0), A = Math.max(h.length, x.length);
    for (let I = 0; I < A; I++) {
      const K = h[I] ?? 0, le = x[I] ?? 0;
      if (K !== le) return K > le;
    }
    return !1;
  }
  async function Gn() {
    m(k, !0), m(g, null);
    try {
      const c = await t.ctx.backend.get_objects_paginated(s(a), s(v), j, "desc"), p = typeof c == "string" ? JSON.parse(c) : c, { objects: h, pagination: x } = _a(p);
      m(y, h, !0), x ? (m(N, Number(x.total_items || 0), !0), m($, Number(x.total_pages || 0), !0)) : (m(N, h.length, !0), m($, 1));
    } catch (c) {
      m(u, c?.message || String(c), !0), m(y, [], !0);
    } finally {
      m(k, !1);
    }
  }
  function ga(c) {
    m(g, s(g) === c ? null : c, !0);
  }
  function ba(c) {
    navigator.clipboard.writeText(JSON.stringify(c, null, 2)), je("JSON copied to clipboard");
  }
  function Pr(c) {
    m(v, c, !0), Gn();
  }
  function ma(c) {
    m(Z, c, !0);
  }
  function xa() {
    m(Z, null);
  }
  async function ya() {
    if (!s(Z)) return;
    const c = s(Z), p = c._type || s(a), h = c._id || c.id;
    m(Z, null), m(B, String(h), !0);
    try {
      const x = await Dr("delete_entity", { entity_type: p, entity_id: String(h) });
      x?.success ? (m(y, s(y).filter((A) => !((A._id || A.id) === h && (A._type || s(a)) === p)), !0), m(N, Math.max(0, s(N) - 1), !0), je(`Deleted ${p}#${h}`)) : je(x?.error || "Delete failed", "error");
    } catch (x) {
      je(`Delete error: ${x?.message}`, "error");
    } finally {
      m(B, null);
    }
  }
  async function Kn(c = !1) {
    m(se, !0), m(te, null);
    try {
      const p = c ? { include_codexes: !0 } : { entity_types: [s(a)], include_codexes: !0 }, h = await Dr("export_data", p);
      if (h?.success && h?.data) {
        const x = typeof h.data == "string" ? JSON.parse(h.data) : h.data;
        m(te, x, !0);
        const A = c ? `Exported ${x.total_entities ?? "?"} entities, ${x.total_codexes ?? 0} codexes` : `Exported ${x.total_entities ?? "?"} entities`;
        je(A);
      } else
        je(h?.error || "Export failed", "error");
    } catch (p) {
      je(`Export error: ${p?.message}`, "error");
    } finally {
      m(se, !1);
    }
  }
  function wa(c = !1) {
    if (!s(te)) return;
    const p = JSON.stringify(s(te), null, 2), h = new Blob([p], { type: "application/json" }), x = URL.createObjectURL(h), A = document.createElement("a");
    A.href = x;
    const I = (/* @__PURE__ */ new Date()).toISOString().replace(/[:.]/g, "-").slice(0, 19);
    A.download = c ? `export_all_${I}.json` : `export_${s(a)}_${I}.json`, A.click(), URL.revokeObjectURL(x), je("Download started");
  }
  function ka() {
    s(te) && (navigator.clipboard.writeText(JSON.stringify(s(te), null, 2)), je("Copied to clipboard"));
  }
  function Ea(c) {
    const h = c.target.files?.[0];
    h && Zn(h);
  }
  function Sa(c) {
    c.preventDefault(), m(Ir, !1);
    const p = c.dataTransfer?.files?.[0];
    p && Zn(p);
  }
  function Zn(c) {
    m(ce, c.name, !0);
    const p = new FileReader();
    p.onload = (h) => {
      m(ke, h.target?.result || "", !0), Xn();
    }, p.readAsText(c);
  }
  function Xn() {
    if (m(Y, null), m(oe, null), !!s(ke).trim())
      try {
        const c = JSON.parse(s(ke));
        let p = [], h = [];
        Array.isArray(c) ? p = c : c.entities ? (p = c.entities || [], h = c.codexes || []) : p = [c];
        const x = {};
        for (const A of p) {
          const I = A._type || "unknown";
          x[I] = (x[I] || 0) + 1;
        }
        m(
          Y,
          {
            totalEntities: p.length,
            totalCodexes: h.length,
            typeCounts: x,
            valid: !0,
            entities: p,
            codexes: h
          },
          !0
        );
      } catch (c) {
        m(
          Y,
          {
            valid: !1,
            error: c.message,
            totalEntities: 0,
            totalCodexes: 0,
            typeCounts: {},
            entities: [],
            codexes: []
          },
          !0
        );
      }
  }
  async function Ta() {
    if (!(!s(Y) || !s(Y).valid)) {
      m(Ct, !0), m(oe, null);
      try {
        const c = [...s(Y).entities];
        for (const h of s(Y).codexes)
          c.push({ ...h, _type: "Codex" });
        const p = await Dr("import_data", { format: "json", data: JSON.stringify(c) });
        if (m(oe, p, !0), p?.success) {
          const h = p.data || {};
          je(`Imported ${h.successful || 0} of ${h.total_records || 0} records`);
        } else
          je(p?.error || "Import failed", "error");
      } catch (c) {
        m(oe, { success: !1, error: c.message }, !0), je(`Import error: ${c?.message}`, "error");
      } finally {
        m(Ct, !1);
      }
    }
  }
  function Lr() {
    m(ke, ""), m(ce, ""), m(Y, null), m(oe, null), s(Gt) && (s(Gt).value = "");
  }
  oo(() => {
    Vn(), Wn();
  });
  const Aa = [
    { id: "browse", label: "Browse" },
    { id: "export", label: "Export" },
    { id: "import", label: "Import" }
  ];
  let Ca = /* @__PURE__ */ dn(() => s(te) ? JSON.stringify(s(te), null, 2) : "");
  var Qn = Ml(), ei = Ye(Qn);
  {
    var Na = (c) => {
      var p = qo();
      It(p, 21, () => s(d), (h) => h.id, (h, x) => {
        var A = Bo(), I = _(A);
        U(
          (K) => {
            mt(A, 1, K), D(I, s(x).text);
          },
          [
            () => bt(r("px-4 py-3 rounded-lg shadow-lg text-sm font-medium transition-all", s(x).type === "error" ? "bg-red-600 text-white" : "bg-green-600 text-white"))
          ]
        ), E(h, A);
      }), E(c, p);
    };
    V(ei, (c) => {
      s(d).length > 0 && c(Na);
    });
  }
  var ti = w(ei, 2);
  {
    var Oa = (c) => {
      var p = $o(), h = _(p), x = w(_(h), 2), A = w(_(x)), I = _(A), K = w(A, 2);
      {
        var le = (ie) => {
          var J = zo(), T = w(Ye(J)), z = _(T);
          U(() => D(z, `(${s(Z).name ?? ""})`)), E(ie, J);
        };
        V(K, (ie) => {
          s(Z).name && ie(le);
        });
      }
      var ve = w(x, 4), De = _(ve), Ee = w(De, 2);
      U(() => D(I, `${(s(Z)._type || s(a)) ?? ""}#${(s(Z)._id || s(Z).id) ?? ""}`)), W("click", De, xa), W("click", Ee, ya), E(c, p);
    };
    V(ti, (c) => {
      s(Z) && c(Oa);
    });
  }
  var Ma = w(ti, 2), ri = _(Ma), ni = w(_(ri), 2), ii = w(ri, 2);
  {
    var Ia = (c) => {
      var p = Ho(), h = _(p), x = w(h);
      U(() => D(h, `${s(u) ?? ""} `)), W("click", x, () => m(u, "")), E(c, p);
    };
    V(ii, (c) => {
      s(u) && c(Ia);
    });
  }
  var an = w(ii, 2), Ra = _(an), ja = _(Ra), Da = w(_(ja), 2), Pa = w(_(Da), 2);
  {
    var La = (c) => {
      var p = Vo();
      E(c, p);
    }, Fa = (c) => {
      var p = Wo(), h = _(p);
      U(() => D(h, s(jr))), E(c, p);
    }, Ua = (c) => {
      var p = Go(), h = _(p), x = w(h);
      {
        var A = (I) => {
          var K = Yo(), le = w(Ye(K), 2), ve = _(le);
          U(() => D(ve, `${s(Kt) ?? ""} update${s(Kt) === 1 ? "" : "s"} available`)), E(I, K);
        };
        V(x, (I) => {
          s(Kt) > 0 && I(A);
        });
      }
      U(() => D(h, `${s($n) ?? 0 ?? ""} installed `)), E(c, p);
    };
    V(Pa, (c) => {
      s(Rr) ? c(La) : s(jr) ? c(Fa, 1) : c(Ua, -1);
    });
  }
  var ai = w(an, 2);
  {
    var Ja = (c) => {
      var p = Ko(), h = _(p), x = w(_(h), 2), A = _(x), I = w(h, 2), K = w(_(I), 2), le = _(K), ve = w(I, 2), De = w(_(ve), 2), Ee = _(De), ie = w(ve, 2), J = w(_(ie), 2), T = _(J);
      U(
        (z) => {
          D(A, s(i).length), D(le, s(rn)), D(Ee, s(nn)), mt(J, 1, z), D(T, s(Rr) ? "…" : s(Kt));
        },
        [
          () => bt(r("text-2xl font-bold mt-1", s(Kt) > 0 ? "text-yellow-600" : "text-gray-900"))
        ]
      ), E(c, p);
    };
    V(ai, (c) => {
      s(l) || c(Ja);
    });
  }
  var si = w(ai, 2), Ba = _(si), qa = w(_(Ba), 2);
  {
    var za = (c) => {
      var p = Zo();
      E(c, p);
    }, $a = (c) => {
      var p = Qo();
      It(p, 21, () => s(i), er, (h, x) => {
        var A = Xo(), I = _(A), K = {};
        U(() => {
          D(I, s(x).label), K !== (K = s(x).value) && (A.value = (A.__value = s(x).value) ?? "");
        }), E(h, A);
      }), Ro(p, () => s(a), (h) => m(a, h)), E(c, p);
    };
    V(qa, (c) => {
      s(l) ? c(za) : c($a, -1);
    });
  }
  var oi = w(si, 2), Ha = _(oi);
  It(Ha, 21, () => Aa, er, (c, p) => {
    var h = el(), x = _(h);
    U(
      (A) => {
        mt(h, 1, A), D(x, s(p).label);
      },
      [
        () => bt(r("px-5 py-2.5 text-sm font-medium rounded-t-lg border-b-2 transition-colors", s(f) === s(p).id ? "border-blue-600 text-blue-600 bg-blue-50" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"))
      ]
    ), W("click", h, () => m(f, s(p).id, !0)), E(c, h);
  });
  var Va = w(oi, 2);
  {
    var Wa = (c) => {
      var p = ul(), h = Ye(p), x = _(h), A = _(x), I = w(x, 2), K = _(I);
      {
        var le = (T) => {
          var z = wi();
          U(() => D(z, `Showing ${s(y).length ?? ""} of ${s(N) ?? ""} items`)), E(T, z);
        };
        V(K, (T) => {
          s(y).length > 0 && T(le);
        });
      }
      var ve = w(h, 2), De = _(ve);
      {
        var Ee = (T) => {
          var z = tl();
          E(T, z);
        }, ie = (T) => {
          var z = rl();
          E(T, z);
        }, J = (T) => {
          var z = ll(), H = Ye(z);
          It(H, 21, () => s(y), er, (O, q, re) => {
            var de = sl(), Se = _(de), Pe = _(Se), Qe = _(Pe), me = _(Qe), Te = _(me), Ae = w(me, 2);
            {
              var Nt = (Ce) => {
                var tt = nl(), rt = _(tt);
                U(() => D(rt, `- ${s(q).name ?? ""}`)), E(Ce, tt);
              };
              V(Ae, (Ce) => {
                s(q).name && Ce(Nt);
              });
            }
            var Zt = w(Pe, 2), Le = _(Zt), et = w(Le, 2), Ot = w(Se, 2);
            {
              var Xt = (Ce) => {
                var tt = al(), rt = _(tt);
                It(rt, 21, () => Object.entries(s(q)), er, (_r, Ka) => {
                  var li = /* @__PURE__ */ dn(() => vi(s(Ka), 2));
                  let Za = () => s(li)[0], ln = () => s(li)[1];
                  var ui = il(), fi = _(ui), Xa = _(fi), Qa = w(fi, 2), es = _(Qa);
                  U(
                    (ts) => {
                      D(Xa, `${Za() ?? ""}:`), D(es, ts);
                    },
                    [
                      () => typeof ln() == "object" ? JSON.stringify(ln()) : String(ln())
                    ]
                  ), E(_r, ui);
                });
                var Qt = w(rt, 2), sn = _(Qt), on = w(_(sn), 2), Fr = _(on);
                U((_r) => D(Fr, _r), [() => JSON.stringify(s(q), null, 2)]), E(Ce, tt);
              };
              V(Ot, (Ce) => {
                s(g) === re && Ce(Xt);
              });
            }
            U(
              (Ce) => {
                D(Te, `${s(g) === re ? "▼" : "▶"}
											${(s(q)._type || s(a)) ?? ""} #${(s(q)._id || s(q).id || re + 1) ?? ""}`), et.disabled = Ce;
              },
              [
                () => s(B) === String(s(q)._id || s(q).id)
              ]
            ), W("click", me, () => ga(re)), W("click", Le, () => ba(s(q))), W("click", et, () => ma(s(q))), E(O, de);
          });
          var fe = w(H, 2);
          {
            var X = (O) => {
              var q = ol(), re = _(q), de = _(re), Se = w(de, 2), Pe = w(re, 2), Qe = _(Pe), me = w(Pe, 2), Te = _(me), Ae = w(Te, 2);
              U(() => {
                de.disabled = s(v) === 0, Se.disabled = s(v) === 0, D(Qe, `Page ${s(v) + 1} of ${s($) ?? ""}`), Te.disabled = s(v) >= s($) - 1, Ae.disabled = s(v) >= s($) - 1;
              }), W("click", de, () => Pr(0)), W("click", Se, () => Pr(s(v) - 1)), W("click", Te, () => Pr(s(v) + 1)), W("click", Ae, () => Pr(s($) - 1)), E(O, q);
            };
            V(fe, (O) => {
              s($) > 1 && O(X);
            });
          }
          E(T, z);
        };
        V(De, (T) => {
          s(k) ? T(Ee) : s(y).length === 0 ? T(ie, 1) : T(J, -1);
        });
      }
      U(() => {
        x.disabled = s(k), D(A, s(k) ? "Loading…" : "Load Data");
      }), W("click", x, Gn), E(c, p);
    }, Ya = (c) => {
      var p = vl(), h = w(_(p), 4), x = _(h), A = _(x), I = w(x, 2), K = _(I), le = w(h, 2);
      {
        var ve = (ie) => {
          var J = fl();
          E(ie, J);
        };
        V(le, (ie) => {
          s(se) && ie(ve);
        });
      }
      var De = w(le, 2);
      {
        var Ee = (ie) => {
          var J = cl(), T = _(J), z = _(T), H = _(z), fe = _(H), X = w(H, 2);
          {
            var O = (me) => {
              var Te = dl(), Ae = w(Ye(Te)), Nt = _(Ae);
              U(() => D(Nt, s(te).total_codexes)), E(me, Te);
            };
            V(X, (me) => {
              (s(te).total_codexes ?? 0) > 0 && me(O);
            });
          }
          var q = w(z, 2), re = _(q), de = w(re, 2), Se = w(T, 2), Pe = _(Se), Qe = _(Pe);
          U(() => {
            D(fe, s(te).total_entities ?? "?"), D(Qe, s(Ca));
          }), W("click", re, () => wa(!1)), W("click", de, ka), E(ie, J);
        };
        V(De, (ie) => {
          s(te) && ie(Ee);
        });
      }
      U(() => {
        x.disabled = s(se), D(A, s(se) ? "Exporting…" : `Export ${s(a)}`), I.disabled = s(se), D(K, s(se) ? "Exporting…" : "Export All Types");
      }), W("click", x, () => Kn(!1)), W("click", I, () => Kn(!0)), E(c, p);
    }, Ga = (c) => {
      var p = Ol(), h = w(_(p), 4), x = _(h), A = w(x, 2), I = w(h, 2);
      {
        var K = (J) => {
          var T = hl(), z = _(T);
          Uo(z, (O) => m(Gt, O), () => s(Gt));
          var H = w(z, 2);
          {
            var fe = (O) => {
              var q = pl(), re = Ye(q), de = _(re);
              U(() => D(de, s(ce))), E(O, q);
            }, X = (O) => {
              var q = _l();
              E(O, q);
            };
            V(H, (O) => {
              s(ce) ? O(fe) : O(X, -1);
            });
          }
          U((O) => mt(T, 1, O), [
            () => bt(r("border-2 border-dashed rounded-lg p-8 text-center transition-colors cursor-pointer", s(Ir) ? "border-blue-500 bg-blue-50" : "border-gray-300 hover:border-gray-400"))
          ]), cn("drop", T, Sa), cn("dragover", T, (O) => {
            O.preventDefault(), m(Ir, !0);
          }), cn("dragleave", T, () => m(Ir, !1)), W("click", T, () => s(Gt)?.click()), W("keydown", T, (O) => O.key === "Enter" && s(Gt)?.click()), W("change", z, Ea), E(J, T);
        }, le = (J) => {
          var T = bl(), z = _(T);
          Po(z, "placeholder", `Paste JSON here, e.g.
[
  {"_type": "User", "_id": "1", "name": "Alice"},
  {"_type": "User", "_id": "2", "name": "Bob"}
]`);
          var H = w(z, 2);
          {
            var fe = (X) => {
              var O = gl();
              W("click", O, Lr), E(X, O);
            };
            V(H, (X) => {
              s(ke) && X(fe);
            });
          }
          W("input", z, Xn), Fo(z, () => s(ke), (X) => m(ke, X)), E(J, T);
        };
        V(I, (J) => {
          s(be) === "file" ? J(K) : J(le, -1);
        });
      }
      var ve = w(I, 2);
      {
        var De = (J) => {
          var T = wl(), z = _(T);
          {
            var H = (X) => {
              var O = xl(), q = Ye(O), re = _(q), de = _(re), Se = w(de);
              {
                var Pe = (Le) => {
                  var et = wi();
                  U(() => D(et, `, ${s(Y).totalCodexes ?? ""} codexes`)), E(Le, et);
                };
                V(Se, (Le) => {
                  s(Y).totalCodexes > 0 && Le(Pe);
                });
              }
              var Qe = w(q, 2), me = _(Qe);
              It(me, 21, () => Object.entries(s(Y).typeCounts), er, (Le, et) => {
                var Ot = /* @__PURE__ */ dn(() => vi(s(et), 2));
                let Xt = () => s(Ot)[0], Ce = () => s(Ot)[1];
                var tt = ml(), rt = _(tt);
                U((Qt) => D(rt, `${Qt ?? ""} ${Xt() ?? ""}: ${Ce() ?? ""}`), [() => Hn(Xt())]), E(Le, tt);
              });
              var Te = w(me, 2), Ae = _(Te), Nt = _(Ae), Zt = w(Ae, 2);
              U(() => {
                D(de, `Ready to import: ${s(Y).totalEntities ?? ""} entities `), Ae.disabled = s(Ct), D(Nt, s(Ct) ? "Importing…" : "Confirm Import"), Zt.disabled = s(Ct);
              }), W("click", Ae, Ta), W("click", Zt, Lr), E(X, O);
            }, fe = (X) => {
              var O = yl(), q = w(_(O), 2), re = _(q);
              U(() => D(re, s(Y).error)), E(X, O);
            };
            V(z, (X) => {
              s(Y).valid ? X(H) : X(fe, -1);
            });
          }
          U((X) => mt(T, 1, X), [
            () => bt(r("mt-4 border rounded-lg overflow-hidden", s(Y).valid ? "border-green-200" : "border-red-200"))
          ]), E(J, T);
        };
        V(ve, (J) => {
          s(Y) && J(De);
        });
      }
      var Ee = w(ve, 2);
      {
        var ie = (J) => {
          var T = Nl(), z = _(T), H = _(z);
          {
            var fe = (O) => {
              var q = Al(), re = w(Ye(q), 2);
              {
                var de = (Se) => {
                  var Pe = Tl(), Qe = _(Pe), me = _(Qe), Te = w(Qe, 2), Ae = _(Te), Nt = w(Te, 2);
                  {
                    var Zt = (Le) => {
                      var et = Sl(), Ot = Ye(et), Xt = _(Ot), Ce = w(Ot, 2);
                      {
                        var tt = (rt) => {
                          var Qt = El();
                          It(Qt, 21, () => s(oe).data.errors, er, (sn, on) => {
                            var Fr = kl(), _r = _(Fr);
                            U(() => D(_r, s(on))), E(sn, Fr);
                          }), E(rt, Qt);
                        };
                        V(Ce, (rt) => {
                          s(oe).data.errors?.length && rt(tt);
                        });
                      }
                      U(() => D(Xt, `Failed: ${s(oe).data.failed ?? ""}`)), E(Le, et);
                    };
                    V(Nt, (Le) => {
                      (s(oe).data.failed ?? 0) > 0 && Le(Zt);
                    });
                  }
                  U(() => {
                    D(me, `Total records: ${(s(oe).data.total_records || 0) ?? ""}`), D(Ae, `Successful: ${(s(oe).data.successful || 0) ?? ""}`);
                  }), E(Se, Pe);
                };
                V(re, (Se) => {
                  s(oe).data && Se(de);
                });
              }
              E(O, q);
            }, X = (O) => {
              var q = Cl(), re = w(Ye(q), 2), de = _(re);
              U(() => D(de, s(oe).error)), E(O, q);
            };
            V(H, (O) => {
              s(oe).success ? O(fe) : O(X, -1);
            });
          }
          U((O) => mt(T, 1, O), [
            () => bt(r("mt-4 border rounded-lg overflow-hidden", s(oe).success ? "border-green-200 bg-green-50" : "border-red-200 bg-red-50"))
          ]), E(J, T);
        };
        V(Ee, (J) => {
          s(oe) && J(ie);
        });
      }
      U(
        (J, T) => {
          mt(x, 1, J), mt(A, 1, T);
        },
        [
          () => bt(r("px-4 py-2 text-sm font-medium rounded-lg transition-colors", s(be) === "file" ? "bg-blue-100 text-blue-700 border border-blue-300" : "bg-gray-100 text-gray-600 hover:bg-gray-200")),
          () => bt(r("px-4 py-2 text-sm font-medium rounded-lg transition-colors", s(be) === "editor" ? "bg-blue-100 text-blue-700 border border-blue-300" : "bg-gray-100 text-gray-600 hover:bg-gray-200"))
        ]
      ), W("click", x, () => {
        m(be, "file"), Lr();
      }), W("click", A, () => {
        m(be, "editor"), Lr();
      }), E(c, p);
    };
    V(Va, (c) => {
      s(f) === "browse" ? c(Wa) : s(f) === "export" ? c(Ya, 1) : s(f) === "import" && c(Ga, 2);
    });
  }
  U(() => ni.disabled = s(l)), W("click", ni, () => {
    Vn(), Wn();
  }), W("click", an, () => t.ctx.navigate?.("/extensions/package_manager")), E(e, Qn), Ii();
}
mo(["click", "keydown", "change", "input"]);
function Dl(e, t) {
  const r = ko(Il, { target: e, props: { ctx: t } });
  return {
    unmount() {
      try {
        So(r);
      } catch {
      }
    }
  };
}
export {
  Dl as default
};
