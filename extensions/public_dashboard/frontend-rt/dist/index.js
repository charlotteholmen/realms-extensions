var ci = Object.defineProperty;
var Kr = (e) => {
  throw TypeError(e);
};
var di = (e, t, r) => t in e ? ci(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var we = (e, t, r) => di(e, typeof t != "symbol" ? t + "" : t, r), wr = (e, t, r) => t.has(e) || Kr("Cannot " + r);
var l = (e, t, r) => (wr(e, t, "read from private field"), r ? r.call(e) : t.get(e)), g = (e, t, r) => t.has(e) ? Kr("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), x = (e, t, r, n) => (wr(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r), A = (e, t, r) => (wr(e, t, "access private method"), r);
var pn = Array.isArray, hi = Array.prototype.indexOf, kt = Array.prototype.includes, hr = Array.from, vi = Object.defineProperty, Dt = Object.getOwnPropertyDescriptor, _i = Object.getOwnPropertyDescriptors, pi = Object.prototype, gi = Array.prototype, gn = Object.getPrototypeOf, Jr = Object.isExtensible;
const mi = () => {
};
function wi(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function mn() {
  var e, t, r = new Promise((n, i) => {
    e = n, t = i;
  });
  return { promise: r, resolve: e, reject: t };
}
const H = 2, Tt = 4, vr = 8, wn = 1 << 24, Ne = 16, Ee = 32, $e = 64, Er = 128, de = 512, P = 1024, B = 2048, Ce = 4096, Y = 8192, he = 16384, _t = 32768, kr = 1 << 25, St = 65536, Tr = 1 << 17, bn = 1 << 18, pt = 1 << 19, bi = 1 << 20, ze = 1 << 25, dt = 65536, ar = 1 << 21, Ft = 1 << 22, Ge = 1 << 23, Qt = Symbol("$state"), yi = Symbol(""), Oe = new class extends Error {
  constructor() {
    super(...arguments);
    we(this, "name", "StaleReactionError");
    we(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
function xi(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function Ei() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function ki(e, t, r) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function Ti(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Si() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Ai(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Mi() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Ni() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Ci() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Ri() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Li() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
const Oi = 1, Di = 2, Ii = 16, Pi = 1, Fi = 2, F = Symbol(), yn = "http://www.w3.org/1999/xhtml";
function zi() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function ji() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function xn(e) {
  return e === this.v;
}
function Bi(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function En(e) {
  return !Bi(e, this.v);
}
let X = null;
function At(e) {
  X = e;
}
function kn(e, t = !1, r) {
  X = {
    p: X,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    r: (
      /** @type {Effect} */
      k
    ),
    l: null
  };
}
function Tn(e) {
  var t = (
    /** @type {ComponentContext} */
    X
  ), r = t.e;
  if (r !== null) {
    t.e = null;
    for (var n of r)
      Yn(n);
  }
  return t.i = !0, X = t.p, /** @type {T} */
  {};
}
function Sn() {
  return !0;
}
let et = [];
function An() {
  var e = et;
  et = [], wi(e);
}
function ot(e) {
  if (et.length === 0 && !It) {
    var t = et;
    queueMicrotask(() => {
      t === et && An();
    });
  }
  et.push(e);
}
function Hi() {
  for (; et.length > 0; )
    An();
}
function Mn(e) {
  var t = k;
  if (t === null)
    return E.f |= Ge, e;
  if ((t.f & _t) === 0 && (t.f & Tt) === 0)
    throw e;
  Ye(e, t);
}
function Ye(e, t) {
  for (; t !== null; ) {
    if ((t.f & Er) !== 0) {
      if ((t.f & _t) === 0)
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
const Vi = -7169;
function D(e, t) {
  e.f = e.f & Vi | t;
}
function Pr(e) {
  (e.f & de) !== 0 || e.deps === null ? D(e, P) : D(e, Ce);
}
function Nn(e) {
  if (e !== null)
    for (const t of e)
      (t.f & H) === 0 || (t.f & dt) === 0 || (t.f ^= dt, Nn(
        /** @type {Derived} */
        t.deps
      ));
}
function Cn(e, t, r) {
  (e.f & B) !== 0 ? t.add(e) : (e.f & Ce) !== 0 && r.add(e), Nn(e.deps), D(e, P);
}
const Ke = /* @__PURE__ */ new Set();
let b = null, ye = null, Sr = null, It = !1, br = !1, mt = null, er = null;
var Xr = 0;
let qi = 1;
var wt, bt, nt, De, Se, jt, re, Bt, qe, Ie, Ae, yt, xt, it, I, tr, Rn, rr, Ar, nr, Ui;
const ur = class ur {
  constructor() {
    g(this, I);
    we(this, "id", qi++);
    /**
     * The current values of any signals that are updated in this batch.
     * Tuple format: [value, is_derived] (note: is_derived is false for deriveds, too, if they were overridden via assignment)
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Value, [any, boolean]>}
     */
    we(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any signals (sources and deriveds) that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Value, any>}
     */
    we(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<(batch: Batch) => void>}
     */
    g(this, wt, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    g(this, bt, /* @__PURE__ */ new Set());
    /**
     * Callbacks that should run only when a fork is committed.
     * @type {Set<(batch: Batch) => void>}
     */
    g(this, nt, /* @__PURE__ */ new Set());
    /**
     * Async effects that are currently in flight
     * @type {Map<Effect, number>}
     */
    g(this, De, /* @__PURE__ */ new Map());
    /**
     * Async effects that are currently in flight, _not_ inside a pending boundary
     * @type {Map<Effect, number>}
     */
    g(this, Se, /* @__PURE__ */ new Map());
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    g(this, jt, null);
    /**
     * The root effects that need to be flushed
     * @type {Effect[]}
     */
    g(this, re, []);
    /**
     * Effects created while this batch was active.
     * @type {Effect[]}
     */
    g(this, Bt, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    g(this, qe, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    g(this, Ie, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    g(this, Ae, /* @__PURE__ */ new Map());
    /**
     * Inverse of #skipped_branches which we need to tell prior batches to unskip them when committing
     * @type {Set<Effect>}
     */
    g(this, yt, /* @__PURE__ */ new Set());
    we(this, "is_fork", !1);
    g(this, xt, !1);
    /** @type {Set<Batch>} */
    g(this, it, /* @__PURE__ */ new Set());
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(t) {
    l(this, Ae).has(t) || l(this, Ae).set(t, { d: [], m: [] }), l(this, yt).delete(t);
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   * @param {(e: Effect) => void} callback
   */
  unskip_effect(t, r = (n) => this.schedule(n)) {
    var n = l(this, Ae).get(t);
    if (n) {
      l(this, Ae).delete(t);
      for (var i of n.d)
        D(i, B), r(i);
      for (i of n.m)
        D(i, Ce), r(i);
    }
    l(this, yt).add(t);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Value} source
   * @param {any} value
   * @param {boolean} [is_derived]
   */
  capture(t, r, n = !1) {
    t.v !== F && !this.previous.has(t) && this.previous.set(t, t.v), (t.f & Ge) === 0 && (this.current.set(t, [r, n]), ye?.set(t, r)), this.is_fork || (t.v = r);
  }
  activate() {
    b = this;
  }
  deactivate() {
    b = null, ye = null;
  }
  flush() {
    try {
      br = !0, b = this, A(this, I, rr).call(this);
    } finally {
      Xr = 0, Sr = null, mt = null, er = null, br = !1, b = null, ye = null, ft.clear();
    }
  }
  discard() {
    for (const t of l(this, bt)) t(this);
    l(this, bt).clear(), l(this, nt).clear(), Ke.delete(this);
  }
  /**
   * @param {Effect} effect
   */
  register_created_effect(t) {
    l(this, Bt).push(t);
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  increment(t, r) {
    let n = l(this, De).get(r) ?? 0;
    if (l(this, De).set(r, n + 1), t) {
      let i = l(this, Se).get(r) ?? 0;
      l(this, Se).set(r, i + 1);
    }
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   * @param {boolean} skip - whether to skip updates (because this is triggered by a stale reaction)
   */
  decrement(t, r, n) {
    let i = l(this, De).get(r) ?? 0;
    if (i === 1 ? l(this, De).delete(r) : l(this, De).set(r, i - 1), t) {
      let s = l(this, Se).get(r) ?? 0;
      s === 1 ? l(this, Se).delete(r) : l(this, Se).set(r, s - 1);
    }
    l(this, xt) || n || (x(this, xt, !0), ot(() => {
      x(this, xt, !1), this.flush();
    }));
  }
  /**
   * @param {Set<Effect>} dirty_effects
   * @param {Set<Effect>} maybe_dirty_effects
   */
  transfer_effects(t, r) {
    for (const n of t)
      l(this, qe).add(n);
    for (const n of r)
      l(this, Ie).add(n);
    t.clear(), r.clear();
  }
  /** @param {(batch: Batch) => void} fn */
  oncommit(t) {
    l(this, wt).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    l(this, bt).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  on_fork_commit(t) {
    l(this, nt).add(t);
  }
  run_fork_commit_callbacks() {
    for (const t of l(this, nt)) t(this);
    l(this, nt).clear();
  }
  settled() {
    return (l(this, jt) ?? x(this, jt, mn())).promise;
  }
  static ensure() {
    if (b === null) {
      const t = b = new ur();
      br || (Ke.add(b), It || ot(() => {
        b === t && t.flush();
      }));
    }
    return b;
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
    if (Sr = t, t.b?.is_pending && (t.f & (Tt | vr | wn)) !== 0 && (t.f & _t) === 0) {
      t.b.defer_effect(t);
      return;
    }
    for (var r = t; r.parent !== null; ) {
      r = r.parent;
      var n = r.f;
      if (mt !== null && r === k && (E === null || (E.f & H) === 0))
        return;
      if ((n & ($e | Ee)) !== 0) {
        if ((n & P) === 0)
          return;
        r.f ^= P;
      }
    }
    l(this, re).push(r);
  }
};
wt = new WeakMap(), bt = new WeakMap(), nt = new WeakMap(), De = new WeakMap(), Se = new WeakMap(), jt = new WeakMap(), re = new WeakMap(), Bt = new WeakMap(), qe = new WeakMap(), Ie = new WeakMap(), Ae = new WeakMap(), yt = new WeakMap(), xt = new WeakMap(), it = new WeakMap(), I = new WeakSet(), tr = function() {
  return this.is_fork || l(this, Se).size > 0;
}, Rn = function() {
  for (const n of l(this, it))
    for (const i of l(n, Se).keys()) {
      for (var t = !1, r = i; r.parent !== null; ) {
        if (l(this, Ae).has(r)) {
          t = !0;
          break;
        }
        r = r.parent;
      }
      if (!t)
        return !0;
    }
  return !1;
}, rr = function() {
  var o;
  if (Xr++ > 1e3 && (Ke.delete(this), Gi()), !A(this, I, tr).call(this)) {
    for (const a of l(this, qe))
      l(this, Ie).delete(a), D(a, B), this.schedule(a);
    for (const a of l(this, Ie))
      D(a, Ce), this.schedule(a);
  }
  const t = l(this, re);
  x(this, re, []), this.apply();
  var r = mt = [], n = [], i = er = [];
  for (const a of t)
    try {
      A(this, I, Ar).call(this, a, r, n);
    } catch (u) {
      throw Dn(a), u;
    }
  if (b = null, i.length > 0) {
    var s = ur.ensure();
    for (const a of i)
      s.schedule(a);
  }
  if (mt = null, er = null, A(this, I, tr).call(this) || A(this, I, Rn).call(this)) {
    A(this, I, nr).call(this, n), A(this, I, nr).call(this, r);
    for (const [a, u] of l(this, Ae))
      On(a, u);
  } else {
    l(this, De).size === 0 && Ke.delete(this), l(this, qe).clear(), l(this, Ie).clear();
    for (const a of l(this, wt)) a(this);
    l(this, wt).clear(), Qr(n), Qr(r), l(this, jt)?.resolve();
  }
  var f = (
    /** @type {Batch | null} */
    /** @type {unknown} */
    b
  );
  if (l(this, re).length > 0) {
    const a = f ?? (f = this);
    l(a, re).push(...l(this, re).filter((u) => !l(a, re).includes(u)));
  }
  f !== null && (Ke.add(f), A(o = f, I, rr).call(o));
}, /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
Ar = function(t, r, n) {
  t.f ^= P;
  for (var i = t.first; i !== null; ) {
    var s = i.f, f = (s & (Ee | $e)) !== 0, o = f && (s & P) !== 0, a = o || (s & Y) !== 0 || l(this, Ae).has(i);
    if (!a && i.fn !== null) {
      f ? i.f ^= P : (s & Tt) !== 0 ? r.push(i) : Gt(i) && ((s & Ne) !== 0 && l(this, Ie).add(i), Nt(i));
      var u = i.first;
      if (u !== null) {
        i = u;
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
nr = function(t) {
  for (var r = 0; r < t.length; r += 1)
    Cn(t[r], l(this, qe), l(this, Ie));
}, Ui = function() {
  var d, _, v;
  for (const h of Ke) {
    var t = h.id < this.id, r = [];
    for (const [c, [m, y]] of this.current) {
      if (h.current.has(c)) {
        var n = (
          /** @type {[any, boolean]} */
          h.current.get(c)[0]
        );
        if (t && m !== n)
          h.current.set(c, [m, y]);
        else
          continue;
      }
      r.push(c);
    }
    var i = [...h.current.keys()].filter((c) => !this.current.has(c));
    if (i.length === 0)
      t && h.discard();
    else if (r.length > 0) {
      if (t)
        for (const c of l(this, yt))
          h.unskip_effect(c, (m) => {
            var y;
            (m.f & (Ne | Ft)) !== 0 ? h.schedule(m) : A(y = h, I, nr).call(y, [m]);
          });
      h.activate();
      var s = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Map();
      for (var o of r)
        Ln(o, i, s, f);
      f = /* @__PURE__ */ new Map();
      var a = [...h.current.keys()].filter(
        (c) => this.current.has(c) ? (
          /** @type {[any, boolean]} */
          this.current.get(c)[0] !== c
        ) : !0
      );
      for (const c of l(this, Bt))
        (c.f & (he | Y | Tr)) === 0 && Fr(c, a, f) && ((c.f & (Ft | Ne)) !== 0 ? (D(c, B), h.schedule(c)) : l(h, qe).add(c));
      if (l(h, re).length > 0) {
        h.apply();
        for (var u of l(h, re))
          A(d = h, I, Ar).call(d, u, [], []);
        x(h, re, []);
      }
      h.deactivate();
    }
  }
  for (const h of Ke)
    l(h, it).has(this) && (l(h, it).delete(this), l(h, it).size === 0 && !A(_ = h, I, tr).call(_) && (h.activate(), A(v = h, I, rr).call(v)));
};
let ht = ur;
function Yi(e) {
  var t = It;
  It = !0;
  try {
    for (var r; ; ) {
      if (Hi(), b === null)
        return (
          /** @type {T} */
          r
        );
      b.flush();
    }
  } finally {
    It = t;
  }
}
function Gi() {
  try {
    Mi();
  } catch (e) {
    Ye(e, Sr);
  }
}
let Le = null;
function Qr(e) {
  var t = e.length;
  if (t !== 0) {
    for (var r = 0; r < t; ) {
      var n = e[r++];
      if ((n.f & (he | Y)) === 0 && Gt(n) && (Le = /* @__PURE__ */ new Set(), Nt(n), n.deps === null && n.first === null && n.nodes === null && n.teardown === null && n.ac === null && Zn(n), Le?.size > 0)) {
        ft.clear();
        for (const i of Le) {
          if ((i.f & (he | Y)) !== 0) continue;
          const s = [i];
          let f = i.parent;
          for (; f !== null; )
            Le.has(f) && (Le.delete(f), s.push(f)), f = f.parent;
          for (let o = s.length - 1; o >= 0; o--) {
            const a = s[o];
            (a.f & (he | Y)) === 0 && Nt(a);
          }
        }
        Le.clear();
      }
    }
    Le = null;
  }
}
function Ln(e, t, r, n) {
  if (!r.has(e) && (r.add(e), e.reactions !== null))
    for (const i of e.reactions) {
      const s = i.f;
      (s & H) !== 0 ? Ln(
        /** @type {Derived} */
        i,
        t,
        r,
        n
      ) : (s & (Ft | Ne)) !== 0 && (s & B) === 0 && Fr(i, t, n) && (D(i, B), zr(
        /** @type {Effect} */
        i
      ));
    }
}
function Fr(e, t, r) {
  const n = r.get(e);
  if (n !== void 0) return n;
  if (e.deps !== null)
    for (const i of e.deps) {
      if (kt.call(t, i))
        return !0;
      if ((i.f & H) !== 0 && Fr(
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
function zr(e) {
  b.schedule(e);
}
function On(e, t) {
  if (!((e.f & Ee) !== 0 && (e.f & P) !== 0)) {
    (e.f & B) !== 0 ? t.d.push(e) : (e.f & Ce) !== 0 && t.m.push(e), D(e, P);
    for (var r = e.first; r !== null; )
      On(r, t), r = r.next;
  }
}
function Dn(e) {
  D(e, P);
  for (var t = e.first; t !== null; )
    Dn(t), t = t.next;
}
function Zi(e) {
  let t = 0, r = vt(0), n;
  return () => {
    Hr() && (p(r), Vr(() => (t === 0 && (n = gr(() => e(() => Pt(r)))), t += 1, () => {
      ot(() => {
        t -= 1, t === 0 && (n?.(), n = void 0, Pt(r));
      });
    })));
  };
}
var $i = St | pt;
function Wi(e, t, r, n) {
  new Ki(e, t, r, n);
}
var oe, Ir, fe, st, W, ue, V, ne, Pe, lt, Ue, Et, Ht, Vt, Fe, cr, O, Ji, Xi, Qi, Mr, ir, sr, Nr, Cr;
class Ki {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(t, r, n, i) {
    g(this, O);
    /** @type {Boundary | null} */
    we(this, "parent");
    we(this, "is_pending", !1);
    /**
     * API-level transformError transform function. Transforms errors before they reach the `failed` snippet.
     * Inherited from parent boundary, or defaults to identity.
     * @type {(error: unknown) => unknown}
     */
    we(this, "transform_error");
    /** @type {TemplateNode} */
    g(this, oe);
    /** @type {TemplateNode | null} */
    g(this, Ir, null);
    /** @type {BoundaryProps} */
    g(this, fe);
    /** @type {((anchor: Node) => void)} */
    g(this, st);
    /** @type {Effect} */
    g(this, W);
    /** @type {Effect | null} */
    g(this, ue, null);
    /** @type {Effect | null} */
    g(this, V, null);
    /** @type {Effect | null} */
    g(this, ne, null);
    /** @type {DocumentFragment | null} */
    g(this, Pe, null);
    g(this, lt, 0);
    g(this, Ue, 0);
    g(this, Et, !1);
    /** @type {Set<Effect>} */
    g(this, Ht, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    g(this, Vt, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    g(this, Fe, null);
    g(this, cr, Zi(() => (x(this, Fe, vt(l(this, lt))), () => {
      x(this, Fe, null);
    })));
    x(this, oe, t), x(this, fe, r), x(this, st, (s) => {
      var f = (
        /** @type {Effect} */
        k
      );
      f.b = this, f.f |= Er, n(s);
    }), this.parent = /** @type {Effect} */
    k.b, this.transform_error = i ?? this.parent?.transform_error ?? ((s) => s), x(this, W, pr(() => {
      A(this, O, Mr).call(this);
    }, $i));
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    Cn(t, l(this, Ht), l(this, Vt));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!l(this, fe).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  update_pending_count(t, r) {
    A(this, O, Nr).call(this, t, r), x(this, lt, l(this, lt) + t), !(!l(this, Fe) || l(this, Et)) && (x(this, Et, !0), ot(() => {
      x(this, Et, !1), l(this, Fe) && Mt(l(this, Fe), l(this, lt));
    }));
  }
  get_effect_pending() {
    return l(this, cr).call(this), p(
      /** @type {Source<number>} */
      l(this, Fe)
    );
  }
  /** @param {unknown} error */
  error(t) {
    if (!l(this, fe).onerror && !l(this, fe).failed)
      throw t;
    b?.is_fork ? (l(this, ue) && b.skip_effect(l(this, ue)), l(this, V) && b.skip_effect(l(this, V)), l(this, ne) && b.skip_effect(l(this, ne)), b.on_fork_commit(() => {
      A(this, O, Cr).call(this, t);
    })) : A(this, O, Cr).call(this, t);
  }
}
oe = new WeakMap(), Ir = new WeakMap(), fe = new WeakMap(), st = new WeakMap(), W = new WeakMap(), ue = new WeakMap(), V = new WeakMap(), ne = new WeakMap(), Pe = new WeakMap(), lt = new WeakMap(), Ue = new WeakMap(), Et = new WeakMap(), Ht = new WeakMap(), Vt = new WeakMap(), Fe = new WeakMap(), cr = new WeakMap(), O = new WeakSet(), Ji = function() {
  try {
    x(this, ue, ce(() => l(this, st).call(this, l(this, oe))));
  } catch (t) {
    this.error(t);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
Xi = function(t) {
  const r = l(this, fe).failed;
  r && x(this, ne, ce(() => {
    r(
      l(this, oe),
      () => t,
      () => () => {
      }
    );
  }));
}, Qi = function() {
  const t = l(this, fe).pending;
  t && (this.is_pending = !0, x(this, V, ce(() => t(l(this, oe)))), ot(() => {
    var r = x(this, Pe, document.createDocumentFragment()), n = Ze();
    r.append(n), x(this, ue, A(this, O, sr).call(this, () => ce(() => l(this, st).call(this, n)))), l(this, Ue) === 0 && (l(this, oe).before(r), x(this, Pe, null), ut(
      /** @type {Effect} */
      l(this, V),
      () => {
        x(this, V, null);
      }
    ), A(this, O, ir).call(
      this,
      /** @type {Batch} */
      b
    ));
  }));
}, Mr = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), x(this, Ue, 0), x(this, lt, 0), x(this, ue, ce(() => {
      l(this, st).call(this, l(this, oe));
    })), l(this, Ue) > 0) {
      var t = x(this, Pe, document.createDocumentFragment());
      Yr(l(this, ue), t);
      const r = (
        /** @type {(anchor: Node) => void} */
        l(this, fe).pending
      );
      x(this, V, ce(() => r(l(this, oe))));
    } else
      A(this, O, ir).call(
        this,
        /** @type {Batch} */
        b
      );
  } catch (r) {
    this.error(r);
  }
}, /**
 * @param {Batch} batch
 */
ir = function(t) {
  this.is_pending = !1, t.transfer_effects(l(this, Ht), l(this, Vt));
}, /**
 * @template T
 * @param {() => T} fn
 */
sr = function(t) {
  var r = k, n = E, i = X;
  Re(l(this, W)), _e(l(this, W)), At(l(this, W).ctx);
  try {
    return ht.ensure(), t();
  } catch (s) {
    return Mn(s), null;
  } finally {
    Re(r), _e(n), At(i);
  }
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 * @param {Batch} batch
 */
Nr = function(t, r) {
  var n;
  if (!this.has_pending_snippet()) {
    this.parent && A(n = this.parent, O, Nr).call(n, t, r);
    return;
  }
  x(this, Ue, l(this, Ue) + t), l(this, Ue) === 0 && (A(this, O, ir).call(this, r), l(this, V) && ut(l(this, V), () => {
    x(this, V, null);
  }), l(this, Pe) && (l(this, oe).before(l(this, Pe)), x(this, Pe, null)));
}, /**
 * @param {unknown} error
 */
Cr = function(t) {
  l(this, ue) && (J(l(this, ue)), x(this, ue, null)), l(this, V) && (J(l(this, V)), x(this, V, null)), l(this, ne) && (J(l(this, ne)), x(this, ne, null));
  var r = l(this, fe).onerror;
  let n = l(this, fe).failed;
  var i = !1, s = !1;
  const f = () => {
    if (i) {
      ji();
      return;
    }
    i = !0, s && Li(), l(this, ne) !== null && ut(l(this, ne), () => {
      x(this, ne, null);
    }), A(this, O, sr).call(this, () => {
      A(this, O, Mr).call(this);
    });
  }, o = (a) => {
    try {
      s = !0, r?.(a, f), s = !1;
    } catch (u) {
      Ye(u, l(this, W) && l(this, W).parent);
    }
    n && x(this, ne, A(this, O, sr).call(this, () => {
      try {
        return ce(() => {
          var u = (
            /** @type {Effect} */
            k
          );
          u.b = this, u.f |= Er, n(
            l(this, oe),
            () => a,
            () => f
          );
        });
      } catch (u) {
        return Ye(
          u,
          /** @type {Effect} */
          l(this, W).parent
        ), null;
      }
    }));
  };
  ot(() => {
    var a;
    try {
      a = this.transform_error(t);
    } catch (u) {
      Ye(u, l(this, W) && l(this, W).parent);
      return;
    }
    a !== null && typeof a == "object" && typeof /** @type {any} */
    a.then == "function" ? a.then(
      o,
      /** @param {unknown} e */
      (u) => Ye(u, l(this, W) && l(this, W).parent)
    ) : o(a);
  });
};
function es(e, t, r, n) {
  const i = jr;
  var s = e.filter((v) => !v.settled);
  if (r.length === 0 && s.length === 0) {
    n(t.map(i));
    return;
  }
  var f = (
    /** @type {Effect} */
    k
  ), o = ts(), a = s.length === 1 ? s[0].promise : s.length > 1 ? Promise.all(s.map((v) => v.promise)) : null;
  function u(v) {
    o();
    try {
      n(v);
    } catch (h) {
      (f.f & he) === 0 && Ye(h, f);
    }
    or();
  }
  if (r.length === 0) {
    a.then(() => u(t.map(i)));
    return;
  }
  var d = In();
  function _() {
    Promise.all(r.map((v) => /* @__PURE__ */ rs(v))).then((v) => u([...t.map(i), ...v])).catch((v) => Ye(v, f)).finally(() => d());
  }
  a ? a.then(() => {
    o(), _(), or();
  }) : _();
}
function ts() {
  var e = (
    /** @type {Effect} */
    k
  ), t = E, r = X, n = (
    /** @type {Batch} */
    b
  );
  return function(s = !0) {
    Re(e), _e(t), At(r), s && (e.f & he) === 0 && (n?.activate(), n?.apply());
  };
}
function or(e = !0) {
  Re(null), _e(null), At(null), e && b?.deactivate();
}
function In() {
  var e = (
    /** @type {Effect} */
    k
  ), t = (
    /** @type {Boundary} */
    e.b
  ), r = (
    /** @type {Batch} */
    b
  ), n = t.is_rendered();
  return t.update_pending_count(1, r), r.increment(n, e), (i = !1) => {
    t.update_pending_count(-1, r), r.decrement(n, e, i);
  };
}
// @__NO_SIDE_EFFECTS__
function jr(e) {
  var t = H | B;
  return k !== null && (k.f |= pt), {
    ctx: X,
    deps: null,
    effects: null,
    equals: xn,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      F
    ),
    wv: 0,
    parent: k,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function rs(e, t, r) {
  let n = (
    /** @type {Effect | null} */
    k
  );
  n === null && Ei();
  var i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), s = vt(
    /** @type {V} */
    F
  ), f = !E, o = /* @__PURE__ */ new Map();
  return ws(() => {
    var a = (
      /** @type {Effect} */
      k
    ), u = mn();
    i = u.promise;
    try {
      Promise.resolve(e()).then(u.resolve, u.reject).finally(or);
    } catch (h) {
      u.reject(h), or();
    }
    var d = (
      /** @type {Batch} */
      b
    );
    if (f) {
      if ((a.f & _t) !== 0)
        var _ = In();
      if (
        /** @type {Boundary} */
        n.b.is_rendered()
      )
        o.get(d)?.reject(Oe), o.delete(d);
      else {
        for (const h of o.values())
          h.reject(Oe);
        o.clear();
      }
      o.set(d, u);
    }
    const v = (h, c = void 0) => {
      if (_) {
        var m = c === Oe;
        _(m);
      }
      if (!(c === Oe || (a.f & he) !== 0)) {
        if (d.activate(), c)
          s.f |= Ge, Mt(s, c);
        else {
          (s.f & Ge) !== 0 && (s.f ^= Ge), Mt(s, h);
          for (const [y, M] of o) {
            if (o.delete(y), y === d) break;
            M.reject(Oe);
          }
        }
        d.deactivate();
      }
    };
    u.promise.then(v, (h) => v(null, h || "unknown"));
  }), Un(() => {
    for (const a of o.values())
      a.reject(Oe);
  }), new Promise((a) => {
    function u(d) {
      function _() {
        d === i ? a(s) : u(i);
      }
      d.then(_, _);
    }
    u(i);
  });
}
// @__NO_SIDE_EFFECTS__
function en(e) {
  const t = /* @__PURE__ */ jr(e);
  return Kn(t), t;
}
// @__NO_SIDE_EFFECTS__
function ns(e) {
  const t = /* @__PURE__ */ jr(e);
  return t.equals = En, t;
}
function is(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var r = 0; r < t.length; r += 1)
      J(
        /** @type {Effect} */
        t[r]
      );
  }
}
function Br(e) {
  var t, r = k, n = e.parent;
  if (!We && n !== null && (n.f & (he | Y)) !== 0)
    return zi(), e.v;
  Re(n);
  try {
    e.f &= ~dt, is(e), t = ei(e);
  } finally {
    Re(r);
  }
  return t;
}
function Pn(e) {
  var t = Br(e);
  if (!e.equals(t) && (e.wv = Xn(), (!b?.is_fork || e.deps === null) && (b !== null ? b.capture(e, t, !0) : e.v = t, e.deps === null))) {
    D(e, P);
    return;
  }
  We || (ye !== null ? (Hr() || b?.is_fork) && ye.set(e, t) : Pr(e));
}
function ss(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      (t.teardown || t.ac) && (t.teardown?.(), t.ac?.abort(Oe), t.teardown = mi, t.ac = null, zt(t, 0), qr(t));
}
function Fn(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      t.teardown && Nt(t);
}
let Rr = /* @__PURE__ */ new Set();
const ft = /* @__PURE__ */ new Map();
let zn = !1;
function vt(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: xn,
    rv: 0,
    wv: 0
  };
  return r;
}
// @__NO_SIDE_EFFECTS__
function q(e, t) {
  const r = vt(e);
  return Kn(r), r;
}
// @__NO_SIDE_EFFECTS__
function ls(e, t = !1, r = !0) {
  const n = vt(e);
  return t || (n.equals = En), n;
}
function U(e, t, r = !1) {
  E !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!xe || (E.f & Tr) !== 0) && Sn() && (E.f & (H | Ne | Ft | Tr)) !== 0 && (ve === null || !kt.call(ve, e)) && Ri();
  let n = r ? tt(t) : t;
  return Mt(e, n, er);
}
function Mt(e, t, r = null) {
  if (!e.equals(t)) {
    ft.set(e, We ? t : e.v);
    var n = ht.ensure();
    if (n.capture(e, t), (e.f & H) !== 0) {
      const i = (
        /** @type {Derived} */
        e
      );
      (e.f & B) !== 0 && Br(i), ye === null && Pr(i);
    }
    e.wv = Xn(), jn(e, B, r), k !== null && (k.f & P) !== 0 && (k.f & (Ee | $e)) === 0 && (ae === null ? xs([e]) : ae.push(e)), !n.is_fork && Rr.size > 0 && !zn && as();
  }
  return t;
}
function as() {
  zn = !1;
  for (const e of Rr)
    (e.f & P) !== 0 && D(e, Ce), Gt(e) && Nt(e);
  Rr.clear();
}
function Pt(e) {
  U(e, e.v + 1);
}
function jn(e, t, r) {
  var n = e.reactions;
  if (n !== null)
    for (var i = n.length, s = 0; s < i; s++) {
      var f = n[s], o = f.f, a = (o & B) === 0;
      if (a && D(f, t), (o & H) !== 0) {
        var u = (
          /** @type {Derived} */
          f
        );
        ye?.delete(u), (o & dt) === 0 && (o & de && (k === null || (k.f & ar) === 0) && (f.f |= dt), jn(u, Ce, r));
      } else if (a) {
        var d = (
          /** @type {Effect} */
          f
        );
        (o & Ne) !== 0 && Le !== null && Le.add(d), r !== null ? r.push(d) : zr(d);
      }
    }
}
function tt(e) {
  if (typeof e != "object" || e === null || Qt in e)
    return e;
  const t = gn(e);
  if (t !== pi && t !== gi)
    return e;
  var r = /* @__PURE__ */ new Map(), n = pn(e), i = /* @__PURE__ */ q(0), s = ct, f = (o) => {
    if (ct === s)
      return o();
    var a = E, u = ct;
    _e(null), sn(s);
    var d = o();
    return _e(a), sn(u), d;
  };
  return n && r.set("length", /* @__PURE__ */ q(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(o, a, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && Ni();
        var d = r.get(a);
        return d === void 0 ? f(() => {
          var _ = /* @__PURE__ */ q(u.value);
          return r.set(a, _), _;
        }) : U(d, u.value, !0), !0;
      },
      deleteProperty(o, a) {
        var u = r.get(a);
        if (u === void 0) {
          if (a in o) {
            const d = f(() => /* @__PURE__ */ q(F));
            r.set(a, d), Pt(i);
          }
        } else
          U(u, F), Pt(i);
        return !0;
      },
      get(o, a, u) {
        if (a === Qt)
          return e;
        var d = r.get(a), _ = a in o;
        if (d === void 0 && (!_ || Dt(o, a)?.writable) && (d = f(() => {
          var h = tt(_ ? o[a] : F), c = /* @__PURE__ */ q(h);
          return c;
        }), r.set(a, d)), d !== void 0) {
          var v = p(d);
          return v === F ? void 0 : v;
        }
        return Reflect.get(o, a, u);
      },
      getOwnPropertyDescriptor(o, a) {
        var u = Reflect.getOwnPropertyDescriptor(o, a);
        if (u && "value" in u) {
          var d = r.get(a);
          d && (u.value = p(d));
        } else if (u === void 0) {
          var _ = r.get(a), v = _?.v;
          if (_ !== void 0 && v !== F)
            return {
              enumerable: !0,
              configurable: !0,
              value: v,
              writable: !0
            };
        }
        return u;
      },
      has(o, a) {
        if (a === Qt)
          return !0;
        var u = r.get(a), d = u !== void 0 && u.v !== F || Reflect.has(o, a);
        if (u !== void 0 || k !== null && (!d || Dt(o, a)?.writable)) {
          u === void 0 && (u = f(() => {
            var v = d ? tt(o[a]) : F, h = /* @__PURE__ */ q(v);
            return h;
          }), r.set(a, u));
          var _ = p(u);
          if (_ === F)
            return !1;
        }
        return d;
      },
      set(o, a, u, d) {
        var _ = r.get(a), v = a in o;
        if (n && a === "length")
          for (var h = u; h < /** @type {Source<number>} */
          _.v; h += 1) {
            var c = r.get(h + "");
            c !== void 0 ? U(c, F) : h in o && (c = f(() => /* @__PURE__ */ q(F)), r.set(h + "", c));
          }
        if (_ === void 0)
          (!v || Dt(o, a)?.writable) && (_ = f(() => /* @__PURE__ */ q(void 0)), U(_, tt(u)), r.set(a, _));
        else {
          v = _.v !== F;
          var m = f(() => tt(u));
          U(_, m);
        }
        var y = Reflect.getOwnPropertyDescriptor(o, a);
        if (y?.set && y.set.call(d, u), !v) {
          if (n && typeof a == "string") {
            var M = (
              /** @type {Source<number>} */
              r.get("length")
            ), T = Number(a);
            Number.isInteger(T) && T >= M.v && U(M, T + 1);
          }
          Pt(i);
        }
        return !0;
      },
      ownKeys(o) {
        p(i);
        var a = Reflect.ownKeys(o).filter((_) => {
          var v = r.get(_);
          return v === void 0 || v.v !== F;
        });
        for (var [u, d] of r)
          d.v !== F && !(u in o) && a.push(u);
        return a;
      },
      setPrototypeOf() {
        Ci();
      }
    }
  );
}
var tn, Bn, Hn, Vn;
function os() {
  if (tn === void 0) {
    tn = window, Bn = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, r = Text.prototype;
    Hn = Dt(t, "firstChild").get, Vn = Dt(t, "nextSibling").get, Jr(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), Jr(r) && (r.__t = void 0);
  }
}
function Ze(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function fr(e) {
  return (
    /** @type {TemplateNode | null} */
    Hn.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function Yt(e) {
  return (
    /** @type {TemplateNode | null} */
    Vn.call(e)
  );
}
function j(e, t) {
  return /* @__PURE__ */ fr(e);
}
function fs(e, t = !1) {
  {
    var r = /* @__PURE__ */ fr(e);
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ Yt(r) : r;
  }
}
function $(e, t = 1, r = !1) {
  let n = e;
  for (; t--; )
    n = /** @type {TemplateNode} */
    /* @__PURE__ */ Yt(n);
  return n;
}
function us(e) {
  e.textContent = "";
}
function qn() {
  return !1;
}
function cs(e, t, r) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElementNS(yn, e, void 0)
  );
}
let rn = !1;
function ds() {
  rn || (rn = !0, document.addEventListener(
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
function _r(e) {
  var t = E, r = k;
  _e(null), Re(null);
  try {
    return e();
  } finally {
    _e(t), Re(r);
  }
}
function hs(e, t, r, n = r) {
  e.addEventListener(t, () => _r(r));
  const i = e.__on_r;
  i ? e.__on_r = () => {
    i(), n(!0);
  } : e.__on_r = () => n(!0), ds();
}
function vs(e) {
  k === null && (E === null && Ai(), Si()), We && Ti();
}
function _s(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function je(e, t) {
  var r = k;
  r !== null && (r.f & Y) !== 0 && (e |= Y);
  var n = {
    ctx: X,
    deps: null,
    nodes: null,
    f: e | B | de,
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
  b?.register_created_effect(n);
  var i = n;
  if ((e & Tt) !== 0)
    mt !== null ? mt.push(n) : ht.ensure().schedule(n);
  else if (t !== null) {
    try {
      Nt(n);
    } catch (f) {
      throw J(n), f;
    }
    i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && // either `null`, or a singular child
    (i.f & pt) === 0 && (i = i.first, (e & Ne) !== 0 && (e & St) !== 0 && i !== null && (i.f |= St));
  }
  if (i !== null && (i.parent = r, r !== null && _s(i, r), E !== null && (E.f & H) !== 0 && (e & $e) === 0)) {
    var s = (
      /** @type {Derived} */
      E
    );
    (s.effects ?? (s.effects = [])).push(i);
  }
  return n;
}
function Hr() {
  return E !== null && !xe;
}
function Un(e) {
  const t = je(vr, null);
  return D(t, P), t.teardown = e, t;
}
function ps(e) {
  vs();
  var t = (
    /** @type {Effect} */
    k.f
  ), r = !E && (t & Ee) !== 0 && (t & _t) === 0;
  if (r) {
    var n = (
      /** @type {ComponentContext} */
      X
    );
    (n.e ?? (n.e = [])).push(e);
  } else
    return Yn(e);
}
function Yn(e) {
  return je(Tt | bi, e);
}
function gs(e) {
  ht.ensure();
  const t = je($e | pt, e);
  return (r = {}) => new Promise((n) => {
    r.outro ? ut(t, () => {
      J(t), n(void 0);
    }) : (J(t), n(void 0));
  });
}
function ms(e) {
  return je(Tt, e);
}
function ws(e) {
  return je(Ft | pt, e);
}
function Vr(e, t = 0) {
  return je(vr | t, e);
}
function Je(e, t = [], r = [], n = []) {
  es(n, t, r, (i) => {
    je(vr, () => e(...i.map(p)));
  });
}
function pr(e, t = 0) {
  var r = je(Ne | t, e);
  return r;
}
function ce(e) {
  return je(Ee | pt, e);
}
function Gn(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = We, n = E;
    nn(!0), _e(null);
    try {
      t.call(null);
    } finally {
      nn(r), _e(n);
    }
  }
}
function qr(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    const i = r.ac;
    i !== null && _r(() => {
      i.abort(Oe);
    });
    var n = r.next;
    (r.f & $e) !== 0 ? r.parent = null : J(r, t), r = n;
  }
}
function bs(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & Ee) === 0 && J(t), t = r;
  }
}
function J(e, t = !0) {
  var r = !1;
  (t || (e.f & bn) !== 0) && e.nodes !== null && e.nodes.end !== null && (ys(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), r = !0), D(e, kr), qr(e, t && !r), zt(e, 0);
  var n = e.nodes && e.nodes.t;
  if (n !== null)
    for (const s of n)
      s.stop();
  Gn(e), e.f ^= kr, e.f |= he;
  var i = e.parent;
  i !== null && i.first !== null && Zn(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function ys(e, t) {
  for (; e !== null; ) {
    var r = e === t ? null : /* @__PURE__ */ Yt(e);
    e.remove(), e = r;
  }
}
function Zn(e) {
  var t = e.parent, r = e.prev, n = e.next;
  r !== null && (r.next = n), n !== null && (n.prev = r), t !== null && (t.first === e && (t.first = n), t.last === e && (t.last = r));
}
function ut(e, t, r = !0) {
  var n = [];
  $n(e, n, !0);
  var i = () => {
    r && J(e), t && t();
  }, s = n.length;
  if (s > 0) {
    var f = () => --s || i();
    for (var o of n)
      o.out(f);
  } else
    i();
}
function $n(e, t, r) {
  if ((e.f & Y) === 0) {
    e.f ^= Y;
    var n = e.nodes && e.nodes.t;
    if (n !== null)
      for (const o of n)
        (o.is_global || r) && t.push(o);
    for (var i = e.first; i !== null; ) {
      var s = i.next;
      if ((i.f & $e) === 0) {
        var f = (i.f & St) !== 0 || // If this is a branch effect without a block effect parent,
        // it means the parent block effect was pruned. In that case,
        // transparency information was transferred to the branch effect.
        (i.f & Ee) !== 0 && (e.f & Ne) !== 0;
        $n(i, t, f ? r : !1);
      }
      i = s;
    }
  }
}
function Ur(e) {
  Wn(e, !0);
}
function Wn(e, t) {
  if ((e.f & Y) !== 0) {
    e.f ^= Y, (e.f & P) === 0 && (D(e, B), ht.ensure().schedule(e));
    for (var r = e.first; r !== null; ) {
      var n = r.next, i = (r.f & St) !== 0 || (r.f & Ee) !== 0;
      Wn(r, i ? t : !1), r = n;
    }
    var s = e.nodes && e.nodes.t;
    if (s !== null)
      for (const f of s)
        (f.is_global || t) && f.in();
  }
}
function Yr(e, t) {
  if (e.nodes)
    for (var r = e.nodes.start, n = e.nodes.end; r !== null; ) {
      var i = r === n ? null : /* @__PURE__ */ Yt(r);
      t.append(r), r = i;
    }
}
let lr = !1, We = !1;
function nn(e) {
  We = e;
}
let E = null, xe = !1;
function _e(e) {
  E = e;
}
let k = null;
function Re(e) {
  k = e;
}
let ve = null;
function Kn(e) {
  E !== null && (ve === null ? ve = [e] : ve.push(e));
}
let K = null, te = 0, ae = null;
function xs(e) {
  ae = e;
}
let Jn = 1, rt = 0, ct = rt;
function sn(e) {
  ct = e;
}
function Xn() {
  return ++Jn;
}
function Gt(e) {
  var t = e.f;
  if ((t & B) !== 0)
    return !0;
  if (t & H && (e.f &= ~dt), (t & Ce) !== 0) {
    for (var r = (
      /** @type {Value[]} */
      e.deps
    ), n = r.length, i = 0; i < n; i++) {
      var s = r[i];
      if (Gt(
        /** @type {Derived} */
        s
      ) && Pn(
        /** @type {Derived} */
        s
      ), s.wv > e.wv)
        return !0;
    }
    (t & de) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    ye === null && D(e, P);
  }
  return !1;
}
function Qn(e, t, r = !0) {
  var n = e.reactions;
  if (n !== null && !(ve !== null && kt.call(ve, e)))
    for (var i = 0; i < n.length; i++) {
      var s = n[i];
      (s.f & H) !== 0 ? Qn(
        /** @type {Derived} */
        s,
        t,
        !1
      ) : t === s && (r ? D(s, B) : (s.f & P) !== 0 && D(s, Ce), zr(
        /** @type {Effect} */
        s
      ));
    }
}
function ei(e) {
  var m;
  var t = K, r = te, n = ae, i = E, s = ve, f = X, o = xe, a = ct, u = e.f;
  K = /** @type {null | Value[]} */
  null, te = 0, ae = null, E = (u & (Ee | $e)) === 0 ? e : null, ve = null, At(e.ctx), xe = !1, ct = ++rt, e.ac !== null && (_r(() => {
    e.ac.abort(Oe);
  }), e.ac = null);
  try {
    e.f |= ar;
    var d = (
      /** @type {Function} */
      e.fn
    ), _ = d();
    e.f |= _t;
    var v = e.deps, h = b?.is_fork;
    if (K !== null) {
      var c;
      if (h || zt(e, te), v !== null && te > 0)
        for (v.length = te + K.length, c = 0; c < K.length; c++)
          v[te + c] = K[c];
      else
        e.deps = v = K;
      if (Hr() && (e.f & de) !== 0)
        for (c = te; c < v.length; c++)
          ((m = v[c]).reactions ?? (m.reactions = [])).push(e);
    } else !h && v !== null && te < v.length && (zt(e, te), v.length = te);
    if (Sn() && ae !== null && !xe && v !== null && (e.f & (H | Ce | B)) === 0)
      for (c = 0; c < /** @type {Source[]} */
      ae.length; c++)
        Qn(
          ae[c],
          /** @type {Effect} */
          e
        );
    if (i !== null && i !== e) {
      if (rt++, i.deps !== null)
        for (let y = 0; y < r; y += 1)
          i.deps[y].rv = rt;
      if (t !== null)
        for (const y of t)
          y.rv = rt;
      ae !== null && (n === null ? n = ae : n.push(.../** @type {Source[]} */
      ae));
    }
    return (e.f & Ge) !== 0 && (e.f ^= Ge), _;
  } catch (y) {
    return Mn(y);
  } finally {
    e.f ^= ar, K = t, te = r, ae = n, E = i, ve = s, At(f), xe = o, ct = a;
  }
}
function Es(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var n = hi.call(r, e);
    if (n !== -1) {
      var i = r.length - 1;
      i === 0 ? r = t.reactions = null : (r[n] = r[i], r.pop());
    }
  }
  if (r === null && (t.f & H) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (K === null || !kt.call(K, t))) {
    var s = (
      /** @type {Derived} */
      t
    );
    (s.f & de) !== 0 && (s.f ^= de, s.f &= ~dt), s.v !== F && Pr(s), ss(s), zt(s, 0);
  }
}
function zt(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var n = t; n < r.length; n++)
      Es(e, r[n]);
}
function Nt(e) {
  var t = e.f;
  if ((t & he) === 0) {
    D(e, P);
    var r = k, n = lr;
    k = e, lr = !0;
    try {
      (t & (Ne | wn)) !== 0 ? bs(e) : qr(e), Gn(e);
      var i = ei(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = Jn;
      var s;
    } finally {
      lr = n, k = r;
    }
  }
}
async function ti() {
  await Promise.resolve(), Yi();
}
function p(e) {
  var t = e.f, r = (t & H) !== 0;
  if (E !== null && !xe) {
    var n = k !== null && (k.f & he) !== 0;
    if (!n && (ve === null || !kt.call(ve, e))) {
      var i = E.deps;
      if ((E.f & ar) !== 0)
        e.rv < rt && (e.rv = rt, K === null && i !== null && i[te] === e ? te++ : K === null ? K = [e] : K.push(e));
      else {
        (E.deps ?? (E.deps = [])).push(e);
        var s = e.reactions;
        s === null ? e.reactions = [E] : kt.call(s, E) || s.push(E);
      }
    }
  }
  if (We && ft.has(e))
    return ft.get(e);
  if (r) {
    var f = (
      /** @type {Derived} */
      e
    );
    if (We) {
      var o = f.v;
      return ((f.f & P) === 0 && f.reactions !== null || ni(f)) && (o = Br(f)), ft.set(f, o), o;
    }
    var a = (f.f & de) === 0 && !xe && E !== null && (lr || (E.f & de) !== 0), u = (f.f & _t) === 0;
    Gt(f) && (a && (f.f |= de), Pn(f)), a && !u && (Fn(f), ri(f));
  }
  if (ye?.has(e))
    return ye.get(e);
  if ((e.f & Ge) !== 0)
    throw e.v;
  return e.v;
}
function ri(e) {
  if (e.f |= de, e.deps !== null)
    for (const t of e.deps)
      (t.reactions ?? (t.reactions = [])).push(e), (t.f & H) !== 0 && (t.f & de) === 0 && (Fn(
        /** @type {Derived} */
        t
      ), ri(
        /** @type {Derived} */
        t
      ));
}
function ni(e) {
  if (e.v === F) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (ft.has(t) || (t.f & H) !== 0 && ni(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function gr(e) {
  var t = xe;
  try {
    return xe = !0, e();
  } finally {
    xe = t;
  }
}
const ks = ["touchstart", "touchmove"];
function Ts(e) {
  return ks.includes(e);
}
const Kt = Symbol("events"), Ss = /* @__PURE__ */ new Set(), ln = /* @__PURE__ */ new Set();
function As(e, t, r, n = {}) {
  function i(s) {
    if (n.capture || Lr.call(t, s), !s.cancelBubble)
      return _r(() => r?.call(this, s));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? ot(() => {
    t.addEventListener(e, i, n);
  }) : t.addEventListener(e, i, n), i;
}
function an(e, t, r, n, i) {
  var s = { capture: n, passive: i }, f = As(e, t, r, s);
  (t === document.body || // @ts-ignore
  t === window || // @ts-ignore
  t === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  t instanceof HTMLMediaElement) && Un(() => {
    t.removeEventListener(e, f, s);
  });
}
let on = null;
function Lr(e) {
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), n = e.type, i = e.composedPath?.() || [], s = (
    /** @type {null | Element} */
    i[0] || e.target
  );
  on = e;
  var f = 0, o = on === e && e[Kt];
  if (o) {
    var a = i.indexOf(o);
    if (a !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e[Kt] = t;
      return;
    }
    var u = i.indexOf(t);
    if (u === -1)
      return;
    a <= u && (f = a);
  }
  if (s = /** @type {Element} */
  i[f] || e.target, s !== t) {
    vi(e, "currentTarget", {
      configurable: !0,
      get() {
        return s || r;
      }
    });
    var d = E, _ = k;
    _e(null), Re(null);
    try {
      for (var v, h = []; s !== null; ) {
        var c = s.assignedSlot || s.parentNode || /** @type {any} */
        s.host || null;
        try {
          var m = s[Kt]?.[n];
          m != null && (!/** @type {any} */
          s.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === s) && m.call(s, e);
        } catch (y) {
          v ? h.push(y) : v = y;
        }
        if (e.cancelBubble || c === t || c === null)
          break;
        s = c;
      }
      if (v) {
        for (let y of h)
          queueMicrotask(() => {
            throw y;
          });
        throw v;
      }
    } finally {
      e[Kt] = t, delete e.currentTarget, _e(d), Re(_);
    }
  }
}
const Ms = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (e) => e
  })
);
function Ns(e) {
  return (
    /** @type {string} */
    Ms?.createHTML(e) ?? e
  );
}
function Cs(e) {
  var t = cs("template");
  return t.innerHTML = Ns(e.replaceAll("<!>", "<!---->")), t.content;
}
function fn(e, t) {
  var r = (
    /** @type {Effect} */
    k
  );
  r.nodes === null && (r.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function pe(e, t) {
  var r = (t & Pi) !== 0, n = (t & Fi) !== 0, i, s = !e.startsWith("<!>");
  return () => {
    i === void 0 && (i = Cs(s ? e : "<!>" + e), r || (i = /** @type {TemplateNode} */
    /* @__PURE__ */ fr(i)));
    var f = (
      /** @type {TemplateNode} */
      n || Bn ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (r) {
      var o = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ fr(f)
      ), a = (
        /** @type {TemplateNode} */
        f.lastChild
      );
      fn(o, a);
    } else
      fn(f, f);
    return f;
  };
}
function le(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function Xe(e, t) {
  var r = t == null ? "" : typeof t == "object" ? `${t}` : t;
  r !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = r, e.nodeValue = `${r}`);
}
function Rs(e, t) {
  return Ls(e, t);
}
const Jt = /* @__PURE__ */ new Map();
function Ls(e, { target: t, anchor: r, props: n = {}, events: i, context: s, intro: f = !0, transformError: o }) {
  os();
  var a = void 0, u = gs(() => {
    var d = r ?? t.appendChild(Ze());
    Wi(
      /** @type {TemplateNode} */
      d,
      {
        pending: () => {
        }
      },
      (h) => {
        kn({});
        var c = (
          /** @type {ComponentContext} */
          X
        );
        s && (c.c = s), i && (n.$$events = i), a = e(h, n) || {}, Tn();
      },
      o
    );
    var _ = /* @__PURE__ */ new Set(), v = (h) => {
      for (var c = 0; c < h.length; c++) {
        var m = h[c];
        if (!_.has(m)) {
          _.add(m);
          var y = Ts(m);
          for (const w of [t, document]) {
            var M = Jt.get(w);
            M === void 0 && (M = /* @__PURE__ */ new Map(), Jt.set(w, M));
            var T = M.get(m);
            T === void 0 ? (w.addEventListener(m, Lr, { passive: y }), M.set(m, 1)) : M.set(m, T + 1);
          }
        }
      }
    };
    return v(hr(Ss)), ln.add(v), () => {
      for (var h of _)
        for (const y of [t, document]) {
          var c = (
            /** @type {Map<string, number>} */
            Jt.get(y)
          ), m = (
            /** @type {number} */
            c.get(h)
          );
          --m == 0 ? (y.removeEventListener(h, Lr), c.delete(h), c.size === 0 && Jt.delete(y)) : c.set(h, m);
        }
      ln.delete(v), d !== r && d.parentNode?.removeChild(d);
    };
  });
  return Or.set(a, u), a;
}
let Or = /* @__PURE__ */ new WeakMap();
function Os(e, t) {
  const r = Or.get(e);
  return r ? (Or.delete(e), r(t)) : Promise.resolve();
}
var be, Me, ie, at, qt, Ut, dr;
class Ds {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, r = !0) {
    /** @type {TemplateNode} */
    we(this, "anchor");
    /** @type {Map<Batch, Key>} */
    g(this, be, /* @__PURE__ */ new Map());
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
    g(this, Me, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    g(this, ie, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    g(this, at, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    g(this, qt, !0);
    /**
     * @param {Batch} batch
     */
    g(this, Ut, (t) => {
      if (l(this, be).has(t)) {
        var r = (
          /** @type {Key} */
          l(this, be).get(t)
        ), n = l(this, Me).get(r);
        if (n)
          Ur(n), l(this, at).delete(r);
        else {
          var i = l(this, ie).get(r);
          i && (l(this, Me).set(r, i.effect), l(this, ie).delete(r), i.fragment.lastChild.remove(), this.anchor.before(i.fragment), n = i.effect);
        }
        for (const [s, f] of l(this, be)) {
          if (l(this, be).delete(s), s === t)
            break;
          const o = l(this, ie).get(f);
          o && (J(o.effect), l(this, ie).delete(f));
        }
        for (const [s, f] of l(this, Me)) {
          if (s === r || l(this, at).has(s)) continue;
          const o = () => {
            if (Array.from(l(this, be).values()).includes(s)) {
              var u = document.createDocumentFragment();
              Yr(f, u), u.append(Ze()), l(this, ie).set(s, { effect: f, fragment: u });
            } else
              J(f);
            l(this, at).delete(s), l(this, Me).delete(s);
          };
          l(this, qt) || !n ? (l(this, at).add(s), ut(f, o, !1)) : o();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    g(this, dr, (t) => {
      l(this, be).delete(t);
      const r = Array.from(l(this, be).values());
      for (const [n, i] of l(this, ie))
        r.includes(n) || (J(i.effect), l(this, ie).delete(n));
    });
    this.anchor = t, x(this, qt, r);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, r) {
    var n = (
      /** @type {Batch} */
      b
    ), i = qn();
    if (r && !l(this, Me).has(t) && !l(this, ie).has(t))
      if (i) {
        var s = document.createDocumentFragment(), f = Ze();
        s.append(f), l(this, ie).set(t, {
          effect: ce(() => r(f)),
          fragment: s
        });
      } else
        l(this, Me).set(
          t,
          ce(() => r(this.anchor))
        );
    if (l(this, be).set(n, t), i) {
      for (const [o, a] of l(this, Me))
        o === t ? n.unskip_effect(a) : n.skip_effect(a);
      for (const [o, a] of l(this, ie))
        o === t ? n.unskip_effect(a.effect) : n.skip_effect(a.effect);
      n.oncommit(l(this, Ut)), n.ondiscard(l(this, dr));
    } else
      l(this, Ut).call(this, n);
  }
}
be = new WeakMap(), Me = new WeakMap(), ie = new WeakMap(), at = new WeakMap(), qt = new WeakMap(), Ut = new WeakMap(), dr = new WeakMap();
function Qe(e, t, r = !1) {
  var n = new Ds(e), i = r ? St : 0;
  function s(f, o) {
    n.ensure(f, o);
  }
  pr(() => {
    var f = !1;
    t((o, a = 0) => {
      f = !0, s(a, o);
    }), f || s(-1, null);
  }, i);
}
function un(e, t) {
  return t;
}
function Is(e, t, r) {
  for (var n = [], i = t.length, s, f = t.length, o = 0; o < i; o++) {
    let _ = t[o];
    ut(
      _,
      () => {
        if (s) {
          if (s.pending.delete(_), s.done.add(_), s.pending.size === 0) {
            var v = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            Dr(e, hr(s.done)), v.delete(s), v.size === 0 && (e.outrogroups = null);
          }
        } else
          f -= 1;
      },
      !1
    );
  }
  if (f === 0) {
    var a = n.length === 0 && r !== null;
    if (a) {
      var u = (
        /** @type {Element} */
        r
      ), d = (
        /** @type {Element} */
        u.parentNode
      );
      us(d), d.append(u), e.items.clear();
    }
    Dr(e, t, !a);
  } else
    s = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ?? (e.outrogroups = /* @__PURE__ */ new Set())).add(s);
}
function Dr(e, t, r = !0) {
  var n;
  if (e.pending.size > 0) {
    n = /* @__PURE__ */ new Set();
    for (const f of e.pending.values())
      for (const o of f)
        n.add(
          /** @type {EachItem} */
          e.items.get(o).e
        );
  }
  for (var i = 0; i < t.length; i++) {
    var s = t[i];
    if (n?.has(s)) {
      s.f |= ze;
      const f = document.createDocumentFragment();
      Yr(s, f);
    } else
      J(t[i], r);
  }
}
var cn;
function dn(e, t, r, n, i, s = null) {
  var f = e, o = /* @__PURE__ */ new Map();
  {
    var a = (
      /** @type {Element} */
      e
    );
    f = a.appendChild(Ze());
  }
  var u = null, d = /* @__PURE__ */ ns(() => {
    var T = r();
    return pn(T) ? T : T == null ? [] : hr(T);
  }), _, v = /* @__PURE__ */ new Map(), h = !0;
  function c(T) {
    (M.effect.f & he) === 0 && (M.pending.delete(T), M.fallback = u, Ps(M, _, f, t, n), u !== null && (_.length === 0 ? (u.f & ze) === 0 ? Ur(u) : (u.f ^= ze, Ot(u, null, f)) : ut(u, () => {
      u = null;
    })));
  }
  function m(T) {
    M.pending.delete(T);
  }
  var y = pr(() => {
    _ = /** @type {V[]} */
    p(d);
    for (var T = _.length, w = /* @__PURE__ */ new Set(), S = (
      /** @type {Batch} */
      b
    ), G = qn(), R = 0; R < T; R += 1) {
      var Z = _[R], N = n(Z, R), z = h ? null : o.get(N);
      z ? (z.v && Mt(z.v, Z), z.i && Mt(z.i, R), G && S.unskip_effect(z.e)) : (z = Fs(
        o,
        h ? f : cn ?? (cn = Ze()),
        Z,
        N,
        R,
        i,
        t,
        r
      ), h || (z.e.f |= ze), o.set(N, z)), w.add(N);
    }
    if (T === 0 && s && !u && (h ? u = ce(() => s(f)) : (u = ce(() => s(cn ?? (cn = Ze()))), u.f |= ze)), T > w.size && ki(), !h)
      if (v.set(S, w), G) {
        for (const [L, ge] of o)
          w.has(L) || S.skip_effect(ge.e);
        S.oncommit(c), S.ondiscard(m);
      } else
        c(S);
    p(d);
  }), M = { effect: y, items: o, pending: v, outrogroups: null, fallback: u };
  h = !1;
}
function Lt(e) {
  for (; e !== null && (e.f & Ee) === 0; )
    e = e.next;
  return e;
}
function Ps(e, t, r, n, i) {
  var s = t.length, f = e.items, o = Lt(e.effect.first), a, u = null, d = [], _ = [], v, h, c, m;
  for (m = 0; m < s; m += 1) {
    if (v = t[m], h = i(v, m), c = /** @type {EachItem} */
    f.get(h).e, e.outrogroups !== null)
      for (const N of e.outrogroups)
        N.pending.delete(c), N.done.delete(c);
    if ((c.f & Y) !== 0 && Ur(c), (c.f & ze) !== 0)
      if (c.f ^= ze, c === o)
        Ot(c, null, r);
      else {
        var y = u ? u.next : o;
        c === e.effect.last && (e.effect.last = c.prev), c.prev && (c.prev.next = c.next), c.next && (c.next.prev = c.prev), Ve(e, u, c), Ve(e, c, y), Ot(c, y, r), u = c, d = [], _ = [], o = Lt(u.next);
        continue;
      }
    if (c !== o) {
      if (a !== void 0 && a.has(c)) {
        if (d.length < _.length) {
          var M = _[0], T;
          u = M.prev;
          var w = d[0], S = d[d.length - 1];
          for (T = 0; T < d.length; T += 1)
            Ot(d[T], M, r);
          for (T = 0; T < _.length; T += 1)
            a.delete(_[T]);
          Ve(e, w.prev, S.next), Ve(e, u, w), Ve(e, S, M), o = M, u = S, m -= 1, d = [], _ = [];
        } else
          a.delete(c), Ot(c, o, r), Ve(e, c.prev, c.next), Ve(e, c, u === null ? e.effect.first : u.next), Ve(e, u, c), u = c;
        continue;
      }
      for (d = [], _ = []; o !== null && o !== c; )
        (a ?? (a = /* @__PURE__ */ new Set())).add(o), _.push(o), o = Lt(o.next);
      if (o === null)
        continue;
    }
    (c.f & ze) === 0 && d.push(c), u = c, o = Lt(c.next);
  }
  if (e.outrogroups !== null) {
    for (const N of e.outrogroups)
      N.pending.size === 0 && (Dr(e, hr(N.done)), e.outrogroups?.delete(N));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (o !== null || a !== void 0) {
    var G = [];
    if (a !== void 0)
      for (c of a)
        (c.f & Y) === 0 && G.push(c);
    for (; o !== null; )
      (o.f & Y) === 0 && o !== e.fallback && G.push(o), o = Lt(o.next);
    var R = G.length;
    if (R > 0) {
      var Z = s === 0 ? r : null;
      Is(e, G, Z);
    }
  }
}
function Fs(e, t, r, n, i, s, f, o) {
  var a = (f & Oi) !== 0 ? (f & Ii) === 0 ? /* @__PURE__ */ ls(r, !1, !1) : vt(r) : null, u = (f & Di) !== 0 ? vt(i) : null;
  return {
    v: a,
    i: u,
    e: ce(() => (s(t, a ?? r, u ?? i, o), () => {
      e.delete(n);
    }))
  };
}
function Ot(e, t, r) {
  if (e.nodes)
    for (var n = e.nodes.start, i = e.nodes.end, s = t && (t.f & ze) === 0 ? (
      /** @type {EffectNodes} */
      t.nodes.start
    ) : r; n !== null; ) {
      var f = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Yt(n)
      );
      if (s.before(n), n === i)
        return;
      n = f;
    }
}
function Ve(e, t, r) {
  t === null ? e.effect.first = r : t.next = r, r === null ? e.effect.last = t : r.prev = t;
}
function zs(e, t) {
  var r;
  r = document.head.appendChild(Ze());
  try {
    pr(() => t(r), bn | pt);
  } finally {
  }
}
function js(e, t) {
  return e == null ? null : String(e);
}
function Bs(e, t, r, n) {
  var i = e.__style;
  if (i !== t) {
    var s = js(t);
    s == null ? e.removeAttribute("style") : e.style.cssText = s, e.__style = t;
  }
  return n;
}
const Hs = Symbol("is custom element"), Vs = Symbol("is html");
function Xt(e, t, r, n) {
  var i = qs(e);
  i[t] !== (i[t] = r) && (t === "loading" && (e[yi] = r), r == null ? e.removeAttribute(t) : typeof r != "string" && Us(e).includes(t) ? e[t] = r : e.setAttribute(t, r));
}
function qs(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [Hs]: e.nodeName.includes("-"),
      [Vs]: e.namespaceURI === yn
    })
  );
}
var hn = /* @__PURE__ */ new Map();
function Us(e) {
  var t = e.getAttribute("is") || e.nodeName, r = hn.get(t);
  if (r) return r;
  hn.set(t, r = []);
  for (var n, i = e, s = Element.prototype; s !== i; ) {
    n = _i(i);
    for (var f in n)
      n[f].set && r.push(f);
    i = gn(i);
  }
  return r;
}
function Ys(e, t, r = t) {
  var n = /* @__PURE__ */ new WeakSet();
  hs(e, "input", async (i) => {
    var s = i ? e.defaultValue : e.value;
    if (s = yr(e) ? xr(s) : s, r(s), b !== null && n.add(b), await ti(), s !== (s = t())) {
      var f = e.selectionStart, o = e.selectionEnd, a = e.value.length;
      if (e.value = s ?? "", o !== null) {
        var u = e.value.length;
        f === o && o === a && u > a ? (e.selectionStart = u, e.selectionEnd = u) : (e.selectionStart = f, e.selectionEnd = Math.min(o, u));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  gr(t) == null && e.value && (r(yr(e) ? xr(e.value) : e.value), b !== null && n.add(b)), Vr(() => {
    var i = t();
    if (e === document.activeElement) {
      var s = (
        /** @type {Batch} */
        b
      );
      if (n.has(s))
        return;
    }
    yr(e) && i === xr(e.value) || e.type === "date" && !i && !e.value || i !== e.value && (e.value = i ?? "");
  });
}
function yr(e) {
  var t = e.type;
  return t === "number" || t === "range";
}
function xr(e) {
  return e === "" ? null : +e;
}
function vn(e, t) {
  return e === t || e?.[Qt] === t;
}
function Gs(e = {}, t, r, n) {
  var i = (
    /** @type {ComponentContext} */
    X.r
  ), s = (
    /** @type {Effect} */
    k
  );
  return ms(() => {
    var f, o;
    return Vr(() => {
      f = o, o = [], gr(() => {
        e !== r(...o) && (t(e, ...o), f && vn(r(...f), e) && t(null, ...f));
      });
    }), () => {
      let a = s;
      for (; a !== i && a.parent !== null && a.parent.f & kr; )
        a = a.parent;
      const u = () => {
        o && vn(r(...o), e) && t(null, ...o);
      }, d = a.teardown;
      a.teardown = () => {
        u(), d?.();
      };
    };
  }), e;
}
function Zs(e) {
  X === null && xi(), ps(() => {
    const t = gr(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
const $s = "5";
var _n;
typeof window < "u" && ((_n = window.__svelte ?? (window.__svelte = {})).v ?? (_n.v = /* @__PURE__ */ new Set())).add($s);
var Ws = /* @__PURE__ */ pe('<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=" crossorigin=""/>'), Ks = /* @__PURE__ */ pe('<div class="flex items-center justify-center py-12"><svg class="animate-spin h-8 w-8 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> <span class="ml-3 text-gray-500">Loading dashboard...</span></div>'), Js = /* @__PURE__ */ pe('<p class="text-base text-gray-700 leading-relaxed mb-2 max-w-3xl"> </p>'), Xs = /* @__PURE__ */ pe('<p class="text-sm text-gray-600 italic mb-6 max-w-3xl"> </p>'), Qs = /* @__PURE__ */ pe('<div class="rounded-lg bg-white/60 backdrop-blur-sm border border-white/80 p-3"><p class="text-xs text-gray-500 font-medium"> </p> <p class="text-2xl font-bold text-gray-900"> </p></div>'), el = /* @__PURE__ */ pe('<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-6"></div>'), tl = /* @__PURE__ */ pe('<div class="rounded-lg border border-gray-200 shadow-md relative"><div class="p-8"><div class="flex items-center gap-3 mb-3"><img src="/images/logo.png" class="w-12 h-12 object-contain"/> <h1 class="text-3xl font-bold text-gray-900"> </h1></div> <!> <!> <!> <a href="/join" class="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gray-900 text-white font-semibold hover:bg-black transition-colors shadow-md">Join this Realm <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg></a></div></div>'), rl = /* @__PURE__ */ pe('<div class="rounded-lg border border-gray-200 shadow-md bg-white p-6"><h3 class="text-xl font-semibold text-gray-900 mb-1">Realm Zones</h3> <p class="text-sm text-gray-500 mb-4"> </p> <div class="w-full h-80 rounded-lg overflow-hidden border border-gray-200 relative z-0"></div></div>'), nl = /* @__PURE__ */ pe('<div class="flex flex-col items-center space-y-2"><img class="w-14 h-14 rounded-full ring-2 ring-gray-200 hover:ring-gray-300 transition-all duration-200"/> <span class="text-xs text-gray-600 text-center truncate w-full"> </span></div>'), il = /* @__PURE__ */ pe('<div class="rounded-lg border border-gray-200 shadow-md bg-white p-6"><h3 class="text-lg font-semibold text-gray-900 mb-4">Latest Members</h3> <div class="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-4"></div></div>'), sl = /* @__PURE__ */ pe('<!> <div class="rounded-lg border border-gray-200 shadow-md bg-white p-5"><div class="flex items-center gap-3 mb-3"><div class="w-9 h-9 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0"><svg class="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg></div> <div><h3 class="text-lg font-semibold text-gray-900">Ask the AI Assistant</h3> <p class="text-xs text-gray-500">Get answers about this realm, its governance, and services</p></div></div> <form class="flex gap-2"><input type="text" placeholder="Ask anything about this realm..." class="flex-1 rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none"/> <button type="submit" class="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg> Ask</button></form></div> <!> <!>', 1), ll = /* @__PURE__ */ pe('<div class="mt-px pt-20 space-y-4"><!></div>');
function al(e, t) {
  kn(t, !0);
  let r = /* @__PURE__ */ q(null), n = /* @__PURE__ */ q(null), i = /* @__PURE__ */ q(tt([])), s = /* @__PURE__ */ q(tt([])), f = /* @__PURE__ */ q(!0), o = /* @__PURE__ */ q(""), a = /* @__PURE__ */ q(void 0);
  function u(w) {
    return w?.success && w?.data?.objectsListPaginated ? (w.data.objectsListPaginated.objects || []).map((S) => JSON.parse(S)) : [];
  }
  async function d() {
    U(f, !0);
    try {
      const w = t.ctx.backend, [S, G, R, Z] = await Promise.all([
        w.status(),
        w.get_objects_paginated("Realm", 0, 1, "asc"),
        w.get_objects_paginated("Zone", 0, 200, "asc"),
        w.get_objects_paginated("User", 0, 8, "desc")
      ]);
      S?.success && S?.data?.status && U(r, S.data.status, !0);
      const N = u(G);
      N.length > 0 && U(n, N[0], !0);
      const z = u(R);
      U(i, z.filter((L) => L.h3_index || L.latitude && L.longitude), !0), U(s, u(Z), !0);
    } catch (w) {
      console.error("Error loading dashboard data:", w);
    }
    U(f, !1);
  }
  const _ = 3;
  async function v() {
    if (!p(a) || p(i).length === 0) return;
    const w = await import(
      /* @vite-ignore */
      "https://esm.sh/leaflet@1.9.4"
    ), { cellToBoundary: S, gridDisk: G } = await import(
      /* @vite-ignore */
      "https://esm.sh/h3-js@4.2.1"
    ), R = w.map(p(a)).setView([20, 0], 2), Z = w.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
      attribution: '&copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: "abcd",
      maxZoom: 19
    });
    Z.on("tileerror", function() {
      R._fallbackTiles || (R._fallbackTiles = !0, R.removeLayer(Z), w.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        maxZoom: 19
      }).addTo(R));
    }), Z.addTo(R);
    const N = [], z = /* @__PURE__ */ new Set();
    for (const L of p(i)) {
      if (L.h3_index)
        try {
          const ge = G(L.h3_index, _);
          for (const me of ge) {
            if (z.has(me)) continue;
            z.add(me);
            const gt = S(me).map((Te) => [Te[0], Te[1]]), C = me === L.h3_index, se = C ? 0.45 : 0.15, ke = C ? 2 : 0.8;
            w.polygon(gt, {
              color: "#4338ca",
              weight: ke,
              fillColor: "#6366f1",
              fillOpacity: se
            }).addTo(R), C && gt.forEach((Te) => N.push(Te));
          }
        } catch {
          L.latitude && L.longitude && N.push([Number(L.latitude), Number(L.longitude)]);
        }
      if (L.latitude && L.longitude) {
        const ge = Number(L.latitude), me = Number(L.longitude);
        w.circleMarker([ge, me], {
          radius: 14,
          fillColor: "#6366f1",
          color: "#6366f1",
          weight: 0,
          fillOpacity: 0.25
        }).addTo(R);
        const Zt = w.circleMarker([ge, me], {
          radius: 8,
          fillColor: "#6366f1",
          color: "#fff",
          weight: 2,
          fillOpacity: 0.9
        }).addTo(R), gt = L.name || L.h3_index || "", C = L.description || "";
        Zt.bindPopup(`<strong>${gt}</strong>${C ? "<br/>" + C : ""}`), N.some((se) => se[0] === ge && se[1] === me) || N.push([ge, me]);
      }
    }
    N.length > 0 && R.fitBounds(w.latLngBounds(N), { padding: [40, 40], maxZoom: 5 });
  }
  function h() {
    p(o).trim() && t.ctx.navigate(`/extensions/llm_chat?q=${encodeURIComponent(p(o).trim())}`);
  }
  let c = /* @__PURE__ */ en(() => p(r) ? [
    {
      label: "Users",
      value: Number(p(r).users_count),
      color: "blue"
    },
    {
      label: "Organizations",
      value: Number(p(r).organizations_count),
      color: "purple"
    },
    {
      label: "Proposals",
      value: Number(p(r).proposals_count),
      color: "amber"
    },
    {
      label: "Votes",
      value: Number(p(r).votes_count),
      color: "green"
    },
    {
      label: "Transfers",
      value: Number(p(r).transfers_count),
      color: "rose"
    },
    {
      label: "Licenses",
      value: Number(p(r).licenses_count),
      color: "cyan"
    }
  ] : []);
  Zs(async () => {
    await d(), await ti(), await v();
  });
  var m = ll();
  zs("fq8fhm", (w) => {
    var S = Ws();
    le(w, S);
  });
  var y = j(m);
  {
    var M = (w) => {
      var S = Ks();
      le(w, S);
    }, T = (w) => {
      var S = sl(), G = fs(S);
      {
        var R = (C) => {
          const se = /* @__PURE__ */ en(() => "/images/background.png");
          var ke = tl();
          Bs(ke, `background: linear-gradient(rgba(255,255,255,0.75), rgba(255,255,255,0.75)), url('${p(se) ?? ""}') center/cover no-repeat;`);
          var Te = j(ke), Q = j(Te), Be = j(Q), Ct = $(Be, 2), $t = j(Ct), Wt = $(Q, 2);
          {
            var mr = (ee) => {
              var He = Js(), Rt = j(He);
              Je(() => Xe(Rt, p(n).description)), le(ee, He);
            };
            Qe(Wt, (ee) => {
              p(n).description && ee(mr);
            });
          }
          var Gr = $(Wt, 2);
          {
            var ii = (ee) => {
              var He = Xs(), Rt = j(He);
              Je(() => Xe(Rt, p(n).welcome_message)), le(ee, He);
            };
            Qe(Gr, (ee) => {
              p(n).welcome_message && ee(ii);
            });
          }
          var si = $(Gr, 2);
          {
            var li = (ee) => {
              var He = el();
              dn(He, 21, () => p(c), un, (Rt, Zr) => {
                var $r = Qs(), Wr = j($r), ai = j(Wr), oi = $(Wr, 2), fi = j(oi);
                Je(
                  (ui) => {
                    Xe(ai, p(Zr).label), Xe(fi, ui);
                  },
                  [() => p(Zr).value.toLocaleString()]
                ), le(Rt, $r);
              }), le(ee, He);
            };
            Qe(si, (ee) => {
              p(c).length > 0 && ee(li);
            });
          }
          Je(() => {
            Xt(Be, "alt", p(n).name || "Realm"), Xe($t, p(n).name || "Realm");
          }), an("error", Be, (ee) => {
            ee.currentTarget.src = "/images/logo_sphere_only.svg";
          }), le(C, ke);
        };
        Qe(G, (C) => {
          p(n) && C(R);
        });
      }
      var Z = $(G, 2), N = $(j(Z), 2), z = j(N), L = $(z, 2), ge = $(Z, 2);
      {
        var me = (C) => {
          var se = rl(), ke = $(j(se), 2), Te = j(ke), Q = $(ke, 2);
          Gs(Q, (Be) => U(a, Be), () => p(a)), Je(() => Xe(Te, `${p(i).length ?? ""} zone${p(i).length !== 1 ? "s" : ""} in this realm`)), le(C, se);
        };
        Qe(ge, (C) => {
          p(i).length > 0 && C(me);
        });
      }
      var Zt = $(ge, 2);
      {
        var gt = (C) => {
          var se = il(), ke = $(j(se), 2);
          dn(ke, 21, () => p(s), un, (Te, Q) => {
            var Be = nl(), Ct = j(Be), $t = $(Ct, 2), Wt = j($t);
            Je(
              (mr) => {
                Xt(Ct, "src", `https://api.dicebear.com/9.x/glass/svg?seed=${p(Q).name || p(Q).id}`), Xt(Ct, "alt", p(Q).name || p(Q).id), Xt($t, "title", p(Q).name || p(Q).id), Xe(Wt, mr);
              },
              [() => p(Q).name || p(Q).id.substring(0, 8)]
            ), le(Te, Be);
          }), le(C, se);
        };
        Qe(Zt, (C) => {
          p(s).length > 0 && C(gt);
        });
      }
      Je((C) => L.disabled = C, [() => !p(o).trim()]), an("submit", N, (C) => {
        C.preventDefault(), h();
      }), Ys(z, () => p(o), (C) => U(o, C)), le(w, S);
    };
    Qe(y, (w) => {
      p(f) ? w(M) : w(T, -1);
    });
  }
  le(e, m), Tn();
}
function ul(e, t) {
  const r = Rs(al, { target: e, props: { ctx: t } });
  return {
    unmount() {
      try {
        Os(r);
      } catch {
      }
    }
  };
}
export {
  ul as default
};
